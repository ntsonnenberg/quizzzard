import { NextRequest, NextResponse } from "next/server";
import { uploadNoteToS3 } from "@/lib/s3";
import { generateQuiz } from "@/lib/google";

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

  try {
    const quiz = await generateQuiz(buffer, file.type);

    // Upload PDF file to S3 bucket
    await uploadNoteToS3(filename, buffer);
    return NextResponse.json(
      { text: quiz.text, usage: quiz.usage },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Gemini failed to process file",
        message: error,
      },
      { status: 400 }
    );
  }
}
