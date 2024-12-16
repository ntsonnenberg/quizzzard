import { createXai } from "@ai-sdk/xai";
import { generateText } from "ai";
import fs from "fs";

const systemPrompt = process.env.GROK_SYSTEM_PROMPT;
const userPrompt = process.env.GROK_USER_PROMPT || "";

export const xai = createXai({
  apiKey: process.env.XAI_API_KEY,
});

export const generateQuizFromImage = async (
  filePath: string,
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
              image: fs.readFileSync(filePath),
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
