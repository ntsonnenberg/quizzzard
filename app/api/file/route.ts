import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

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

  const result = await generateText({
    model: anthropic("claude-3-5-sonnet-20241022"),
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "What is the Booking code according to this document?",
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

  console.log(result);

  return NextResponse.json({ result: "Success" }, { status: 200 });
}
