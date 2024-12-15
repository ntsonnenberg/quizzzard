import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import mammoth from "mammoth";

const systemPrompt = process.env.CLAUDE_SYSTEM_PROMPT;
const userPrompt = process.env.CLAUDE_USER_PROMPT || "";

export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const generateQuizFromPDF = async (fileUrl: string) => {
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
            data: fileUrl,
            mimeType: "application/pdf",
          },
        ],
      },
    ],
  });

  return result;
};

export const generateQuizFromWordDoc = async (filePath: string) => {
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
};
