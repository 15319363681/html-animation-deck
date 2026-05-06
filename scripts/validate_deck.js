#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

function usage() {
  return "Usage: validate_deck.js <deck.html>";
}

const file = process.argv[2];
if (!file || file === "-h" || file === "--help") {
  console.error(usage());
  process.exit(file ? 0 : 1);
}

const htmlPath = path.resolve(file);
if (!fs.existsSync(htmlPath)) {
  console.error(`Missing HTML file: ${htmlPath}`);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, "utf8");
const failures = [];
const warnings = [];

function count(pattern) {
  return [...html.matchAll(pattern)].length;
}

const slideCount = count(/class=["'][^"']*\bslide\b[^"']*["']/gi);
const activeCount = count(/class=["'][^"']*\bis-active\b[^"']*["']/gi);

if (!/class=["'][^"']*\bdeck\b[^"']*["']/i.test(html)) {
  failures.push("Missing .deck root.");
}
if (slideCount < 1) {
  failures.push("Missing .slide sections.");
}
if (activeCount !== 1) {
  failures.push(`Expected exactly one .is-active slide, found ${activeCount}.`);
}
if (!/data-progress/i.test(html)) {
  warnings.push("Missing data-progress orientation text.");
}
if (!/data-next/i.test(html) || !/data-prev/i.test(html)) {
  warnings.push("Missing data-next/data-prev controls.");
}
if (!/addEventListener\(["']keydown["']/i.test(html)) {
  warnings.push("Keyboard navigation handler not detected.");
}
if (!/prefers-reduced-motion/i.test(html)) {
  warnings.push("prefers-reduced-motion handling not detected.");
}
if (/lorem ipsum|todo|replace with|生成|这里写|点击添加/i.test(html)) {
  failures.push("Placeholder text detected.");
}
if (/https:\/\/fonts\.googleapis\.com|cdn\.jsdelivr\.net|unpkg\.com/i.test(html)) {
  warnings.push("External network dependency detected; prefer local/self-contained assets unless intentional.");
}
if (/particle|particles|neural|brain|cyber|glassmorphism|neon/i.test(html)) {
  warnings.push("AI-demo visual cliche keywords detected; confirm they are subject-specific.");
}

const brokenLocalRefs = [];
for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) {
  const ref = match[1];
  if (/^(https?:|data:|mailto:|#|javascript:)/i.test(ref)) continue;
  const refPath = path.resolve(path.dirname(htmlPath), ref);
  if (!fs.existsSync(refPath)) brokenLocalRefs.push(ref);
}
if (brokenLocalRefs.length) {
  failures.push(`Broken local references: ${brokenLocalRefs.join(", ")}`);
}

const report = {
  file: htmlPath,
  slide_count: slideCount,
  failures,
  warnings,
};

console.log(JSON.stringify(report, null, 2));
process.exit(failures.length ? 1 : 0);
