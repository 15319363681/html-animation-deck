#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

function usage() {
  return "Usage: capture_deck.js <deck.html> --out <dir> [--wait-ms 1200] [--width 1920] [--height 1080]";
}

function parseArgs(argv) {
  const args = { waitMs: 1200, width: 1920, height: 1080 };
  args.file = argv[0];
  for (let i = 1; i < argv.length; i += 1) {
    const key = argv[i];
    const value = argv[i + 1];
    if (!key.startsWith("--") || !value) throw new Error(usage());
    i += 1;
    if (key === "--out") args.out = value;
    else if (key === "--wait-ms") args.waitMs = Number(value);
    else if (key === "--width") args.width = Number(value);
    else if (key === "--height") args.height = Number(value);
    else throw new Error(`Unknown option: ${key}`);
  }
  if (!args.file || !args.out) throw new Error(usage());
  return args;
}

const args = parseArgs(process.argv.slice(2));
const htmlPath = path.resolve(args.file);
const outDir = path.resolve(args.out);

if (!fs.existsSync(htmlPath)) {
  console.error(`Missing HTML file: ${htmlPath}`);
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });

const script = `
const { chromium } = require("playwright");
const path = require("node:path");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: ${args.width}, height: ${args.height} }, deviceScaleFactor: 1 });
  await page.goto("file:///" + ${JSON.stringify(htmlPath.replace(/\\/g, "/"))});
  await page.waitForTimeout(300);
  const count = await page.locator(".slide").count();
  if (!count) throw new Error("No .slide elements found");
  for (let i = 0; i < count; i += 1) {
    await page.evaluate((index) => {
      const slides = [...document.querySelectorAll(".slide")];
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
        slide.classList.toggle("is-before", slideIndex < index);
        slide.classList.toggle("is-after", slideIndex > index);
        slide.setAttribute("aria-hidden", slideIndex === index ? "false" : "true");
      });
      const progress = document.querySelector("[data-progress]");
      if (progress) progress.textContent = (index + 1) + " / " + slides.length;
    }, i);
    await page.waitForTimeout(${Number(args.waitMs) || 1200});
    await page.screenshot({ path: path.join(${JSON.stringify(outDir)}, "slide-" + String(i + 1).padStart(2, "0") + ".png"), fullPage: false });
  }
  await browser.close();
  console.log(JSON.stringify({ slides: count, outDir: ${JSON.stringify(outDir)} }, null, 2));
})().catch((error) => {
  console.error(error.message || String(error));
  process.exit(1);
});
`;

const result = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["--yes", "--package", "playwright", "node", "-e", script],
  { encoding: "utf8", maxBuffer: 1024 * 1024 * 8 },
);

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);
process.exit(result.status || 0);
