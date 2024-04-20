import { readFile, readdirSync } from 'fs';

import mobileSignalImg from '../src/assets/svgs/mobile-signal.svg';
import wifiSignalImg from '../src/assets/svgs/wifi-signal.svg';
import batteryStatusImg from '../src/assets/svgs/battery-status.svg';

async function loadContent() {
  const dir = './src/pages';
  const files = readdirSync(dir);
  const content = [];

  for (const file of files) {
    const filePath = `${dir}/${file}`;

    const fileContent = await new Promise((resolve, reject) => {
      readFile(filePath, 'utf-8', (err, data) => {
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
    <div class="container">
      <div class="retro-stories">
        <header class="status-bar">
          <p>9:41</p>

          <div class="status-signal">
            <img src="${mobileSignalImg}" alt="mobile signal" />
            <img src="${wifiSignalImg}" alt="wifi signal" />
            <img src="${batteryStatusImg}" alt="battery status" />
          </div>
        </header>

        <div class="content">
          <div data-slide="slide" class="slide">
            <div class="slide-items">
              ${pageContent.map((content) => `${content}`).join('')}
            </div>

            <nav class="slide-nav">
              <div class="slide-thumb"></div>
              <button class="slide-prev">Anterior</button>
              <button class="slide-next">Próximo</button>
            </nav>
          </div>
        </div>

        <footer class="footer-bar">
          <div class="navigation-footer-bar"></div>
        </footer>
      </div>
    </div>
  `;

  return { html };
}
