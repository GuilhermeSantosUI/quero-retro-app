import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.KEY_GOOGLE_AI_STUDIO;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const prompt = 'fale sobre girafas em 5 palavras';

let text = '';

model
  .generateContent(prompt)
  .then((result) => {
    const response = result.response;
    text = response.text();
    console.log(text);
  })
  .catch((error) => {
    console.error(error);
  });

export { text };
