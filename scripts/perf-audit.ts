#!/usr/bin/env -S bunx tsx
/**
 * Post-build performance audit.
 *
 * Runs against `dist/` after `vite build` and prints a checklist of issues:
 *
 *   - Oversized JS chunks (> 250 KB minified)
 *   - Oversized images (> 300 KB) and missing modern formats
 *   - <img> tags in shipped HTML without width/height/alt
 *   - index.html missing preconnect / font preload / font-display: swap
 *
 * Exits 0 always (warnings only) so it can be wired into a `postbuild` npm
 * script without blocking CI. Flip `STRICT = true` to fail the build on
 * any finding.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const DIST = 'dist';
const STRICT = false;

const JS_CHUNK_LIMIT_KB = 250;
const IMAGE_LIMIT_KB = 300;
const MODERN_IMAGE_EXTS = new Set(['.webp', '.avif']);
const RASTER_IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif']);

interface Finding {
  level: 'warn' | 'error';
  category: string;
  message: string;
}

const findings: Finding[] = [];
const add = (f: Finding) => findings.push(f);

const walk = (dir: string): string[] => {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
};

const kb = (bytes: number) => Math.round(bytes / 1024);

let files: string[];
try {
  files = walk(DIST);
} catch {
  console.error(`[perf-audit] ${DIST}/ not found — run \`vite build\` first.`);
  process.exit(0);
}

// 1. Oversized JS chunks
for (const f of files) {
  if (extname(f) !== '.js') continue;
  const size = statSync(f).size;
  if (kb(size) > JS_CHUNK_LIMIT_KB) {
    add({
      level: 'warn',
      category: 'js-bundle',
      message: `${relative(DIST, f)} is ${kb(size)} KB (limit ${JS_CHUNK_LIMIT_KB} KB) — consider further code-splitting.`,
    });
  }
}

// 2. Oversized images + missing modern variants
const rasterImages = files.filter((f) => RASTER_IMAGE_EXTS.has(extname(f).toLowerCase()));
for (const img of rasterImages) {
  const size = statSync(img).size;
  if (kb(size) > IMAGE_LIMIT_KB) {
    add({
      level: 'warn',
      category: 'image-size',
      message: `${relative(DIST, img)} is ${kb(size)} KB — compress or convert to WebP/AVIF.`,
    });
  }
  const base = img.slice(0, -extname(img).length);
  const hasModern = [...MODERN_IMAGE_EXTS].some((ext) => files.includes(`${base}${ext}`));
  if (!hasModern && kb(size) > 80) {
    add({
      level: 'warn',
      category: 'image-format',
      message: `${relative(DIST, img)} has no WebP/AVIF sibling — modern format would save bandwidth.`,
    });
  }
}

// 3. HTML img-tag audit
const htmlFiles = files.filter((f) => extname(f) === '.html');
const imgTagRe = /<img\b[^>]*>/gi;
for (const html of htmlFiles) {
  const src = readFileSync(html, 'utf8');
  const tags = src.match(imgTagRe) ?? [];
  tags.forEach((tag, idx) => {
    if (!/\balt\s*=/.test(tag)) {
      add({
        level: 'warn',
        category: 'img-a11y',
        message: `${relative(DIST, html)} <img> #${idx + 1} missing alt attribute.`,
      });
    }
    if (!/\bwidth\s*=/.test(tag) || !/\bheight\s*=/.test(tag)) {
      add({
        level: 'warn',
        category: 'img-cls',
        message: `${relative(DIST, html)} <img> #${idx + 1} missing width/height — risks layout shift.`,
      });
    }
  });
}

// 4. index.html resource-hint checks
const indexHtml = join(DIST, 'index.html');
try {
  const html = readFileSync(indexHtml, 'utf8');
  if (!/rel=["']preconnect["']/.test(html)) {
    add({ level: 'warn', category: 'hints', message: 'index.html has no <link rel="preconnect">.' });
  }
  if (!/rel=["']preload["'][^>]+as=["']font["']/.test(html)) {
    add({ level: 'warn', category: 'hints', message: 'index.html does not preload any fonts.' });
  }
} catch {
  /* index.html missing — bigger problem than this audit */
}

// 5. Verify font-display: swap in shipped CSS
const cssFiles = files.filter((f) => extname(f) === '.css');
let sawFontFace = false;
let sawSwap = false;
for (const css of cssFiles) {
  const src = readFileSync(css, 'utf8');
  if (/@font-face/.test(src)) sawFontFace = true;
  if (/font-display\s*:\s*swap/.test(src)) sawSwap = true;
}
if (sawFontFace && !sawSwap) {
  add({
    level: 'warn',
    category: 'fonts',
    message: '@font-face declarations found without `font-display: swap` — risks invisible text (FOIT).',
  });
}

// Report
const errors = findings.filter((f) => f.level === 'error');
const warns = findings.filter((f) => f.level === 'warn');

console.log('\n[perf-audit] checklist:');
console.log(`  ${findings.length === 0 ? '✓ all checks passed' : `${warns.length} warning(s), ${errors.length} error(s)`}`);
for (const f of findings) {
  const icon = f.level === 'error' ? '✗' : '!';
  console.log(`  ${icon} [${f.category}] ${f.message}`);
}
console.log('');

if (STRICT && findings.length > 0) process.exit(1);
process.exit(0);
