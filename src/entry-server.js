import { readFile, readdirSync } from "fs";

async function loadContent() {
  const dir = "./src/pages";
  const files = readdirSync(dir);
  const content = [];

  for (const file of files) {
    const filePath = `${dir}/${file}`;

    const fileContent = await new Promise((resolve, reject) => {
      readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    content.push(fileContent);
  }

  return content;
}

export async function render() {
  const pageContent = await loadContent();

  const html = `
     ${pageContent.map((content) => `${content}`).join("")}
  `;

  return { html };
}
