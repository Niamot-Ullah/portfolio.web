
import { GoogleGenAI } from "@google/genai";

export const askGeminiAssistant = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userMessage,
    config: {
      systemInstruction: "You are the AI assistant for Alex's portfolio. You are professional, witty, and helpful. You know that Alex is a world-class senior engineer skilled in React, TypeScript, and Distributed Systems. If someone asks for a meeting, tell them to use the contact form below. Keep responses concise.",
      temperature: 0.7,
      maxOutputTokens: 200,
    }
  });

  return response.text;
};
