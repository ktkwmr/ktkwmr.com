#!/usr/bin/env node
// Renders the share image and the icons:
//   scripts/og-image.html -> public/og-image.png (1200x630)
//   public/icon.svg       -> public/icons/icon-192.png, public/icons/apple-touch-icon.png (180x180)
// Requires Playwright (once):
//   npm install --no-save playwright && npx playwright install chromium
// Then:
//   node scripts/render-images.mjs
import { chromium } from "playwright";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const path = (p) => fileURLToPath(new URL(p, import.meta.url));
const browser = await chromium.launch();

const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await og.goto(new URL("og-image.html", import.meta.url).href);
await og.screenshot({ path: path("../public/og-image.png") });
console.log("Wrote public/og-image.png");

// Icons: the mark on a black square (no rounded corners: iOS and Android round them)
const svg = (await readFile(path("../public/icon.svg"), "utf8")).replace('rx="7"/>', '/>');
for (const [size, file] of [[192, "icon-192.png"], [180, "apple-touch-icon.png"]]) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(`<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`);
  await page.screenshot({ path: path("../public/icons/" + file) });
  console.log("Wrote public/icons/" + file);
}
await browser.close();
