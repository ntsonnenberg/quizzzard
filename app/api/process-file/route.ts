import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { uploadNoteToS3 } from "@/lib/s3";
import { generateQuiz } from "@/lib/google";

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

  try {
    const quiz = await generateQuiz(filePath, file.type);

    // Upload PDF file to S3 bucket & delete from local file storage
    await uploadNoteToS3(filename, filePath);
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
