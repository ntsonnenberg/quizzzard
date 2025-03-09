import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import mammoth from "mammoth";

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

export const generateQuizFromPDF = async (buffer: ArrayBuffer) => {
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
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const generateQuizFromWordDoc = async (buffer: ArrayBuffer) => {
  try {
    const { value: wordDocHtml } = await mammoth.convertToHtml({
      arrayBuffer: buffer,
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
