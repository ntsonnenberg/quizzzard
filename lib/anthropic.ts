import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import mammoth from "mammoth";
import fs from "fs";

/**
 * --------------------------------------------------------
 *                      PRIVATE VARIABLES
 * --------------------------------------------------------
 */

const systemPrompt = process.env.CLAUDE_SYSTEM_PROMPT;
const userPrompt = process.env.CLAUDE_USER_PROMPT || "";

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const generateQuizFromPDF = async (filePath: string) => {
  try {
    const result = await generateText({
      model: anthropic("claude-3-5-sonnet-20241022"),
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
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const generateQuizFromWordDoc = async (filePath: string) => {
  try {
    const { value: wordDocHtml } = await mammoth.convertToHtml({
      path: filePath,
    });

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

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
