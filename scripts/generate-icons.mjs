/**
 * One-off asset generator for the PWA / apple-touch icons.
 *
 * The repo only shipped a 48x48 favicon.ico, which is not enough for the
 * `apple-touch-icon` / web-app-manifest checks (and looks blurry when iOS or
 * Android scales it up for a home-screen shortcut). This script redraws the
 * favicon artwork — the blue→purple gradient tile with the white mountain
 * mark — as vector geometry and rasterises it at arbitrary sizes with a
 * hand-rolled PNG encoder (zlib is in Node core, so no image dependency).
 *
 * Run with `node scripts/generate-icons.mjs`; the outputs are committed, so
 * this is not part of the regular build.
 */
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { deflateSync } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');

// Gradient stops sampled from the existing favicon.ico (left → right).
const GRAD_FROM = [37, 74, 167];
const GRAD_TO = [178, 112, 219];

// Geometry in a 48x48 design space, matching the favicon artwork.
const MAIN_PEAK = [
  [24, 11],
  [40, 31.5],
  [13, 31.5],
];
const SIDE_PEAK = [
  [38, 22],
  [44.5, 31.5],
  [32, 31.5],
];
// Open outline of the small left peak (drawn as a stroke, no base line).
const OUTLINE = [
  [5.5, 31.5],
  [12.5, 18],
  [19.5, 31.5],
];
const OUTLINE_WIDTH = 1.4;

const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];

function inTriangle(p, [a, b, c]) {
  const d1 = cross(sub(b, a), sub(p, a));
  const d2 = cross(sub(c, b), sub(p, b));
  const d3 = cross(sub(a, c), sub(p, c));
  const neg = d1 < 0 || d2 < 0 || d3 < 0;
  const pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(neg && pos);
}

/** Distance from point p to the segment a→b. */
function distToSegment(p, a, b) {
  const ab = sub(b, a);
  const ap = sub(p, a);
  const len2 = ab[0] ** 2 + ab[1] ** 2;
  let t = len2 === 0 ? 0 : (ap[0] * ab[0] + ap[1] * ab[1]) / len2;
  t = Math.max(0, Math.min(1, t));
  const dx = ap[0] - ab[0] * t;
  const dy = ap[1] - ab[1] * t;
  return Math.sqrt(dx * dx + dy * dy);
}

function isInk(x, y) {
  const p = [x, y];
  if (inTriangle(p, MAIN_PEAK) || inTriangle(p, SIDE_PEAK)) return true;
  // The stroke is clipped at the artwork's baseline, so the line cap does not
  // leave a stray dot below the mountain range.
  if (y <= 31.5) {
    for (let i = 0; i < OUTLINE.length - 1; i++) {
      if (distToSegment(p, OUTLINE[i], OUTLINE[i + 1]) <= OUTLINE_WIDTH / 2) return true;
    }
  }
  return false;
}

// ---------------------------------------------------------------- PNG encoder

let crcTable = null;
function crc32(buf) {
  if (!crcTable) {
    crcTable = [];
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      crcTable[n] = c >>> 0;
    }
  }
  let c = 0xffffffff;
  for (const byte of buf) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(size, pixel) {
  // One filter byte (0 = none) per scanline, then RGBA.
  const raw = Buffer.alloc(size * (1 + size * 4));
  for (let y = 0; y < size; y++) {
    const rowStart = y * (1 + size * 4);
    raw[rowStart] = 0;
    for (let x = 0; x < size; x++) {
      const [r, g, b] = pixel(x, y);
      const o = rowStart + 1 + x * 4;
      raw[o] = r;
      raw[o + 1] = g;
      raw[o + 2] = b;
      raw[o + 3] = 255;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/** 4x4 supersampled render of the 48-unit artwork at `size` pixels. */
function renderIcon(size) {
  const SS = 4;
  return (px, py) => {
    let ink = 0;
    for (let sy = 0; sy < SS; sy++) {
      for (let sx = 0; sx < SS; sx++) {
        const x = ((px + (sx + 0.5) / SS) / size) * 48;
        const y = ((py + (sy + 0.5) / SS) / size) * 48;
        if (isInk(x, y)) ink++;
      }
    }
    const t = (px + 0.5) / size;
    const bg = GRAD_FROM.map((c, i) => c + (GRAD_TO[i] - c) * t);
    const a = ink / (SS * SS);
    return bg.map((c) => Math.round(c * (1 - a) + 255 * a));
  };
}

for (const [name, size] of [
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  const png = encodePng(size, renderIcon(size));
  writeFileSync(resolve(publicDir, name), png);
  console.log(`✅ ${name} (${size}x${size}, ${(png.length / 1024).toFixed(1)} kB)`);
}

// The SVG favicon uses the same geometry, so the vector and the bitmaps stay
// in sync if the artwork is ever adjusted.
const poly = (pts) => pts.map((p) => p.join(' ')).join(' ');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="Noreja">
  <defs>
    <linearGradient id="n" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="rgb(${GRAD_FROM.join(',')})"/>
      <stop offset="1" stop-color="rgb(${GRAD_TO.join(',')})"/>
    </linearGradient>
  </defs>
  <rect width="48" height="48" fill="url(#n)"/>
  <polygon points="${poly(MAIN_PEAK)}" fill="#fff"/>
  <polygon points="${poly(SIDE_PEAK)}" fill="#fff"/>
  <polyline points="${poly(OUTLINE)}" fill="none" stroke="#fff" stroke-width="${OUTLINE_WIDTH}" stroke-linecap="butt"/>
</svg>
`;
writeFileSync(resolve(publicDir, 'favicon.svg'), svg);
console.log('✅ favicon.svg');
