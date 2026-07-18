import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

/**
 * Post-build step: inline the Vite-generated CSS bundle directly into
 * dist/index.html as a <style> tag and drop the <link rel="stylesheet">.
 *
 * Why: the external stylesheet is render-blocking (Lighthouse: ~250 ms). For a
 * client-rendered SPA nothing paints before the JS runs anyway, so inlining the
 * (small) CSS removes the extra round trip from the critical path without any
 * flash of unstyled content. The trade-off is that the CSS is no longer cached
 * separately, but index.html is already served no-cache, and the bundle is tiny.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');
const htmlPath = join(distDir, 'index.html');

if (!existsSync(htmlPath)) {
  console.error(`❌ inline-css: ${htmlPath} not found (run vite build first)`);
  process.exit(1);
}

let html = readFileSync(htmlPath, 'utf-8');
let inlined = 0;

// Match every <link rel="stylesheet" ...> tag, regardless of attribute order
html = html.replace(/<link\b[^>]*\brel="stylesheet"[^>]*>/gi, (tag) => {
  const hrefMatch = tag.match(/\bhref="([^"]+\.css)"/i);
  if (!hrefMatch) return tag;

  const cssPath = join(distDir, hrefMatch[1].replace(/^\//, ''));
  if (!existsSync(cssPath)) {
    console.warn(`⚠️  inline-css: ${cssPath} not found, leaving <link> untouched`);
    return tag;
  }

  const css = readFileSync(cssPath, 'utf-8');
  inlined++;
  return `<style>${css}</style>`;
});

if (inlined === 0) {
  console.warn('⚠️  inline-css: no render-blocking stylesheet link found');
} else {
  writeFileSync(htmlPath, html);
  console.log(`✅ inline-css: inlined ${inlined} stylesheet(s) into dist/index.html`);
}
