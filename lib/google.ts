import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import mammoth from "mammoth";

/**
 * --------------------------------------------------------
 *                      PRIVATE VARIABLES
 * --------------------------------------------------------
 */

const systemPrompt = process.env.GEMINI_SYSTEM_PROMPT;
const userPrompt = process.env.GEMINI_USER_PROMPT || "";
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

export const generateQuiz = async (filePath: string, fileType: string) => {
  try {
    if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const response = await sendWordDoc(filePath);
      return response;
    }

    if (fileType.includes("image/")) {
      const response = await sendImage(filePath, fileType);
      return response;
    }

    if (fileType === "application/pdf") {
      const response = await sendPDF(filePath);
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
const sendWordDoc = async (filePath: string) => {
  const { value: wordDocHtml } = await mammoth.convertToHtml({
    path: filePath,
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

const sendImage = async (filePath: string, fileType: string) => {
  const result = await generateText({
    model: google("gemini-1.5-pro-latest"),
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image: fs.readFileSync(filePath),
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

const sendPDF = async (filePath: string) => {
  const result = await generateText({
    model: google("gemini-1.5-pro-latest"),
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "file",
            data: fs.readFileSync(filePath),
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
