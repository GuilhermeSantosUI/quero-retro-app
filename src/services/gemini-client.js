import { text } from './gemini';

async function generateContent() {
  console.log(text);

  const pagePrompt = document.querySelector('.prompt');
  pagePrompt.innerHTML = text;
}

generateContent();
