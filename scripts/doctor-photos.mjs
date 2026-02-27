import { chromium } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/images/doctors");
fs.mkdirSync(outputDir, { recursive: true });

const doctors = [
  { url: "https://lp.carlostrindade.com.br/", file: "carlos-trindade.jpg", name: "Dr. Carlos Trindade" },
  { url: "https://drfabianowinckler.growdoc.com.br/", file: "fabiano-winckler.jpg", name: "Dr. Fabiano Winckler" },
  { url: "https://drromolopellegrino.growdoc.com.br/", file: "romolo-pellegrino.jpg", name: "Dr. Romollo Pelegrino" },
];

const browser = await chromium.launch();

for (const { url, file, name } of doctors) {
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
    await page.waitForTimeout(3000);

    // Tenta encontrar a foto do médico — geralmente é a maior imagem com rosto
    const imgSrc = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      // Prioriza imagens grandes (provavelmente foto do médico)
      const candidates = imgs
        .filter(img => {
          const rect = img.getBoundingClientRect();
          const src = img.src || img.getAttribute("src") || "";
          return rect.width > 150 && rect.height > 150 && src && !src.includes("logo") && !src.includes("icon");
        })
        .sort((a, b) => {
          const ra = a.getBoundingClientRect();
          const rb = b.getBoundingClientRect();
          return (rb.width * rb.height) - (ra.width * ra.height);
        });
      return candidates.length > 0 ? candidates[0].src : null;
    });

    if (imgSrc) {
      // Baixa a imagem diretamente
      const response = await page.goto(imgSrc, { timeout: 10000 });
      if (response && response.ok()) {
        const buffer = await response.body();
        fs.writeFileSync(path.join(outputDir, file), buffer);
        console.log(`✓ ${name} → ${file}`);
      } else {
        // Tira screenshot da área da foto
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
        await page.waitForTimeout(2000);
        const el = await page.$("img:not([src*='logo']):not([src*='icon'])");
        if (el) {
          await el.screenshot({ path: path.join(outputDir, file), type: "jpeg", quality: 85 });
          console.log(`✓ ${name} → ${file} (screenshot)`);
        }
      }
    }
    await context.close();
  } catch (e) {
    console.log(`✗ ${name}: ${e.message}`);
  }
}

await browser.close();
console.log("Concluído!");
