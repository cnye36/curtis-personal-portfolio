import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/projects");

const targets = [
  { slug: "affinitybots", url: "https://affinitybots.com" },
  { slug: "ai-social-media-manager", url: "https://ai-social-media-manager-nu.vercel.app" },
  { slug: "let-ai-write-it", url: "https://letaiwriteit.com" },
  { slug: "ai-email-sequence-manager", url: "https://ai-automated-email-manager.vercel.app" },
  { slug: "bidfluence", url: "https://bidfluence-app.vercel.app" },
  { slug: "ai-prompt-enhancer", url: "https://v0-next-js-ai-prompt-enhancer-nine.vercel.app" },
  { slug: "rental-finder-psi", url: "https://rental-finder-psi.vercel.app/listings" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 2,
});

for (const { slug, url } of targets) {
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(2000);
    const file = path.join(outDir, `${slug}.png`);
    await page.screenshot({ path: file, type: "png" });
    console.log(`OK ${slug} -> ${file}`);
  } catch (err) {
    console.error(`FAIL ${slug}:`, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
