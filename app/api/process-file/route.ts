import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { generateQuizFromPDF, generateQuizFromWordDoc } from "@/lib/anthropic";
import { generateQuizFromImage } from "@/lib/xai";
import { getNoteFromS3, uploadNoteToS3 } from "@/lib/s3";

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
        error: "Failed to upload file to local file system.",
        message: error,
      },
      { status: 400 }
    );
  }

  await uploadNoteToS3(filename, filePath);
  const fileUrl = await getNoteFromS3(filename, 60);

  // Image File
  if (file.type.includes("image/")) {
    try {
      const text = await generateQuizFromImage(fileUrl, file.type);

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

  // // Word Doc File
  // const wordDocType =
  //   "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  // if (file.type.includes(wordDocType)) {
  //   try {
  //     const quiz = await generateQuizFromWordDoc(filePath);

  //     return NextResponse.json(
  //       { text: quiz.text, usage: quiz.usage },
  //       { status: 200 }
  //     );
  //   } catch (error) {
  //     return NextResponse.json(
  //       {
  //         error: "Claude failed to process file",
  //         message: error,
  //       },
  //       { status: 400 }
  //     );
  //   }
  // }

  // PDF File [Default]
  try {
    const quiz = await generateQuizFromPDF(fileUrl);

    return NextResponse.json(
      { text: quiz.text, usage: quiz.usage },
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
