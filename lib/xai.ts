import { createXai } from "@ai-sdk/xai";
import { generateText } from "ai";

const systemPrompt = process.env.GROK_SYSTEM_PROMPT;
const userPrompt = process.env.GROK_USER_PROMPT || "";

export const xai = createXai({
  apiKey: process.env.XAI_API_KEY,
});

export const generateQuizFromImage = async (
  buffer: ArrayBuffer,
  fileType: string
) => {
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
              image: buffer,
              mimeType: fileType,
            },
          ],
        },
      ],
    });

    return text;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
