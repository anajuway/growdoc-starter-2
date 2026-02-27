import { chromium } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/images/doctors");
fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await page.goto("https://walloflove.growdoc.com.br/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(3000);

// Scroll para carregar tudo
for (let i = 0; i < 10; i++) {
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(500);
}

// Pega todas as imagens Frame-*.png
const images = await page.evaluate(() => {
  return Array.from(document.querySelectorAll("img"))
    .map(img => ({ src: img.src, alt: img.alt, w: img.naturalWidth, h: img.naturalHeight }))
    .filter(img => img.src && img.w > 100);
});

console.log(`Total imagens encontradas: ${images.length}`);
images.slice(0, 30).forEach((img, i) => {
  console.log(`${i}: ${img.src.substring(img.src.lastIndexOf('/') + 1)} (${img.w}x${img.h}) alt="${img.alt}"`);
});

await browser.close();
