import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.KEY_GOOGLE_AI_STUDIO;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const prompt = "fale sobre girafas em 5 palavras";

async function generateContent() {
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  const pagePrompt = document.querySelector(".prompt");
  pagePrompt.innerHTML = text;
}

generateContent();
