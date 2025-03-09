import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import mammoth from "mammoth";

/**
 * --------------------------------------------------------
 *                      PRIVATE VARIABLES
 * --------------------------------------------------------
 */

const systemPrompt = `
  Your task is to create a ten-question quiz based on the given specifications,
  delivered as a PDF file, image file, or HTML text for a student preparing for an exam.
  The quiz questions should be related to the notes from the file or text, and the quiz questions
  should be formatted as multiple choice answers. There should be options for each question labelled
  A, B, C, or D with one option being the correct answer and the other options being incorrect answers.
  The correct answer should randomly be either A, B, C, or D options. Ensure that the quiz is
  rigorous and challenges the student to know the material from their notes so they
  can better prepare for an exam.
`;

const userPrompt = `
  Create a ten-question quiz for a student based on the document or text that contains their notes on a subject.
  Ensure that each quiz question is in multiple choice format like the following example:

  1) Who was the president of the United States when the Civil Rights Act of 1964 was passed?
    A) Gerald Ford
    B) Dwight D. Eisenhower
    C) Lyndon B. Johnson
    D) Richard Nixon

  The correct answer would be C, Lyndon B. Johnson.

  One of the multiple choice answers should be the correct answer and the other 3 choices should be incorrect.
  Make sure to signal which answer is the correct choice in your response.

  Each correct choice for each question should be randomized (A, B, C, or D). Ensure that each incorrect answer is close
  to the correct answer but still incorrect, to challenge the student to know the material better.

  Please provide these quiz questions in JSON format like the following example:
  ---
  [
    {
      questionNumber: 1,
      questionText:
        "Who was the president of the United States when the Civil Rights Act of 1964 was passed?",
      options: [
        {
          choice: "A",
          answer: "Gerald Ford",
          isCorrect: false,
        },
        {
          choice: "B",
          answer: "Dwight D. Eisenhower",
          isCorrect: false,
        },
        {
          choice: "C",
          answer: "Lyndon B. Johnson",
          isCorrect: true,
        },
        {
          choice: "D",
          answer: "Richard Nixon",
          isCorrect: false,
        },
      ],
    }
  ]
  ---

  Given the JSON example, each object inside the "options" array contains an "isCorrect" property to help
  indicate which options is the correct answer. Only one JSON object should have an "isCorrect" property that is true.
  There should only by 4 object items inside of the "options" array.
`;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

export const generateQuiz = async (buffer: ArrayBuffer, fileType: string) => {
  try {
    if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const response = await sendWordDoc(buffer);
      return response;
    }

    if (fileType.includes("image/")) {
      const response = await sendImage(buffer, fileType);
      return response;
    }

    if (fileType === "application/pdf") {
      const response = await sendPDF(buffer);
      return response;
    }

    throw new Error(`File of type ${fileType} not supported.`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * --------------------------------------------------------
 *                      PRIVATE METHODS
 * --------------------------------------------------------
 */
const sendWordDoc = async (buffer: ArrayBuffer) => {
  const { value: wordDocHtml } = await mammoth.convertToHtml({
    buffer: Buffer.from(buffer),
  });

  const result = await generateText({
    model: google("gemini-1.5-pro-latest"),
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

  return result;
};

const sendImage = async (buffer: ArrayBuffer, fileType: string) => {
  const result = await generateText({
    model: google("gemini-1.5-pro-latest"),
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image: buffer,
            mimeType: fileType,
          },
          {
            type: "text",
            text: userPrompt,
          },
        ],
      },
    ],
  });

  return result;
};

const sendPDF = async (buffer: ArrayBuffer) => {
  const result = await generateText({
    model: google("gemini-1.5-pro-latest"),
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "file",
            data: buffer,
            mimeType: "application/pdf",
          },
          {
            type: "text",
            text: userPrompt,
          },
        ],
      },
    ],
  });

  return result;
};
