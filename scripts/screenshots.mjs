import { chromium } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/portfolio");

const paginas = [
  { url: "https://lp.proplastica.com/", file: "proplastica.jpg" },
  { url: "https://drromolopellegrino.growdoc.com.br/", file: "romolo-pellegrino.jpg" },
  { url: "https://drsamuelcagnolati.growdoc.com.br/", file: "samuel-cagnolati.jpg" },
  { url: "https://moneypause.com.br/", file: "moneypause.jpg" },
  { url: "https://lp.carlostrindade.com.br/", file: "carlos-trindade.jpg" },
  { url: "https://drgustavocoelho.com.br/", file: "gustavo-coelho.jpg" },
  { url: "https://drajibse.growdoc.com.br/", file: "jibse-marchioro.jpg" },
  { url: "https://drfabianowinckler.growdoc.com.br/", file: "fabiano-winckler.jpg" },
  { url: "https://drrobertosouza.growdoc.com.br/", file: "roberto-souza.jpg" },
  { url: "https://adrianagomes.growdoc.com.br/", file: "adriana-gomes.jpg" },
  { url: "https://dragiovannacabral.growdoc.com.br/", file: "giovanna-cabral.jpg" },
  { url: "https://dramarcelasalles.growdoc.com.br/", file: "marcela-salles.jpg" },
  { url: "https://dramonicamelo.growdoc.com.br/", file: "monica-melo.jpg" },
  { url: "https://drbenjaminrodrigues.growdoc.com.br/", file: "benjamin-rodrigues.jpg" },
  { url: "https://pedroneviani.growdoc.com.br/", file: "pedro-neviani.jpg" },
  { url: "https://julianabarbi.growdoc.com.br/", file: "juliana-barbi.jpg" },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

for (const { url, file } of paginas) {
  const filePath = path.join(outputDir, file);
  try {
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: filePath, type: "jpeg", quality: 80, fullPage: false });
    await page.close();
    console.log(`✓ ${file}`);
  } catch (e) {
    console.log(`✗ ${file} — ${e.message}`);
  }
}

await browser.close();
console.log("Concluído!");
