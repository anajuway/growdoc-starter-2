import { chromium } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/images/doctors/frames");
fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await page.goto("https://walloflove.growdoc.com.br/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(3000);

// Scroll para carregar tudo
for (let i = 0; i < 15; i++) {
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(400);
}

const images = await page.evaluate(() => {
  return Array.from(document.querySelectorAll("img"))
    .map(img => img.src)
    .filter(src => src && src.includes("Frame"));
});

// Baixa as primeiras 10 para inspecionar
for (let i = 0; i < Math.min(10, images.length); i++) {
  const src = images[i];
  const filename = `frame-${i}.jpg`;
  const response = await page.goto(src, { timeout: 10000 });
  if (response?.ok()) {
    const buffer = await response.body();
    fs.writeFileSync(path.join(outputDir, filename), buffer);
    console.log(`✓ ${filename}`);
  }
  await page.goto("https://walloflove.growdoc.com.br/", { timeout: 15000 });
}

await browser.close();
