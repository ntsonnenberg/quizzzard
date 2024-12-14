import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { generateText } from "ai";
import { anthropic } from "@/lib/anthropic";
import { xai } from "@/lib/xai";
import mammoth from "mammoth";

const UPLOAD_DIR = path.join(process.cwd(), "uploads");

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: "No valid file provided." },
      { status: 400 }
    );
  }

  const buffer = await file.arrayBuffer();
  const filename = file.name;
  const filePath = path.join(UPLOAD_DIR, filename);

  try {
    fs.writeFileSync(filePath, Buffer.from(buffer));
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to upload file",
        message: error,
      },
      { status: 400 }
    );
  }

  if (file.type.includes("image/")) {
    const systemPrompt = process.env.GROK_SYSTEM_PROMPT;
    const userPrompt = process.env.GROK_USER_PROMPT || "";

    try {
      const { text } = await generateText({
        model: xai("grok-vision-beta"),
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: userPrompt,
              },
              {
                type: "image",
                image: fs.readFileSync(filePath),
                mimeType: file.type,
              },
            ],
          },
        ],
      });

      return NextResponse.json({ text }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        {
          error: "Grok failed to process file",
          message: error,
        },
        { status: 400 }
      );
    }
  }

  const systemPrompt = process.env.CLAUDE_SYSTEM_PROMPT;
  const userPrompt = process.env.CLAUDE_USER_PROMPT || "";

  if (
    file.type.includes(
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
  ) {
    const { value: wordDocHtml } = await mammoth.convertToHtml({
      path: filePath,
    });

    try {
      const result = await generateText({
        model: anthropic("claude-3-5-sonnet-20241022"),
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: userPrompt,
              },
              {
                type: "text",
                text: wordDocHtml,
              },
            ],
          },
        ],
      });

      return NextResponse.json(
        { text: result.text, usage: result.usage },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          error: "Claude failed to process file",
          message: error,
        },
        { status: 400 }
      );
    }
  }

  try {
    const result = await generateText({
      model: anthropic("claude-3-5-sonnet-20241022"),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: userPrompt,
            },
            {
              type: "file",
              data: fs.readFileSync(filePath),
              mimeType: "application/pdf",
            },
          ],
        },
      ],
    });

    return NextResponse.json(
      { text: result.text, usage: result.usage },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Claude failed to process file",
        message: error,
      },
      { status: 400 }
    );
  }
}
