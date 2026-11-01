import { useId } from 'react';
import type { CompetenceCityId } from '@/lib/competenceCenterIndex';

/**
 * Hand-drawn skyline of a Kompetenzcenter city, one recognisable landmark set
 * per city (Freiburg: Münster and Schwabentor, Stuttgart: Fernsehturm, …).
 *
 * Drawn on a 480 × 160 grid with the ground at y = 150, in three layers:
 * hills or mountains in the back, plain houses in the middle and the
 * landmarks in front. Windows and doors are cut out with the even-odd rule,
 * so every path in `front` must keep its solid shapes from overlapping.
 */

const GROUND = 150;

const rect = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}Z`;

/** Round-headed opening standing on `bottom`. */
const arch = (x: number, bottom: number, w: number, h: number) => {
  const r = w / 2;
  return `M${x} ${bottom}V${bottom - h + r}A${r} ${r} 0 0 1 ${x + w} ${bottom - h + r}V${bottom}Z`;
};

const windowRow = (x: number, y: number, count: number, step: number, w: number, h: number) =>
  Array.from({ length: count }, (_, i) => rect(x + i * step, y, w, h)).join('');

const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;

/** [x, width, wall height, gable height (0 = flat roof)] */
type House = [number, number, number, number?];

const houses = (list: House[]) =>
  list
    .map(([x, w, h, roof = 0]) =>
      roof
        ? `M${x} ${GROUND}V${GROUND - h}L${x + w / 2} ${GROUND - h - roof}L${x + w} ${GROUND - h}V${GROUND}Z`
        : rect(x, GROUND - h, w, h)
    )
    .join('');

const conifers = (list: Array<[number, number]>) =>
  list.map(([x, base]) => `M${x - 5} ${base}L${x} ${base - 15}L${x + 5} ${base}Z`).join('');

interface Skyline {
  back: string;
  /** Trees on the hills, vineyard rows, crane cables: drawn as outline or at back opacity. */
  backDetail?: string;
  lines?: string;
  mid: string;
  front: string[];
}

const skylines: Record<CompetenceCityId, Skyline> = {
  // Münster with its open-work spire, Schwabentor, Black Forest behind.
  freiburg: {
    back: 'M0 150V112C40 96 70 92 110 100C150 108 170 84 210 80C250 76 270 96 310 92C350 88 380 70 420 74C450 77 470 90 480 96V150Z',
    backDetail: conifers([[24, 110], [36, 106], [50, 103], [262, 90], [276, 94], [292, 96], [436, 82], [450, 86], [464, 90]]),
    mid: houses([[10, 24, 30, 10], [36, 20, 22, 9], [58, 28, 38, 12], [88, 14, 26], [142, 22, 30, 10], [166, 18, 20, 8], [352, 26, 32, 11], [380, 20, 46, 9], [402, 28, 26, 12], [432, 22, 36, 10], [456, 22, 28, 10]]),
    front: [
      `M104 150V96L120 70L136 96V150Z${arch(114, 150, 12, 20)}`,
      rect(202, 66, 32, 84) +
        'M200 66L203 52L206 66Z M230 66L233 52L236 66Z' +
        rect(207, 42, 22, 24) +
        'M205 42L218 6L231 42Z' +
        rect(217, 0, 2, 6) +
        arch(212, 150, 12, 22) +
        rect(211.5, 47, 3, 14) +
        rect(221.5, 47, 3, 14) +
        'M218 18l3 5l-3 5l-3 -5Z M218 30l4 5l-4 5l-4 -5Z',
      `M234 150V104L242 86H310L318 104V150Z${arch(246, 134, 8, 22)}${arch(266, 134, 8, 22)}${arch(286, 134, 8, 22)}`,
      'M318 150V110L326 98H344L350 110V150Z' + rect(326, 74, 8, 24) + 'M325 74L330 58L335 74Z',
    ],
  },

  // Stiftskirche, Bahnhofsturm and the Fernsehturm above the Kessel and its vineyards.
  stuttgart: {
    back: 'M0 150V70C30 66 60 76 90 96C120 116 150 124 200 126C260 128 320 124 360 110C400 96 440 72 480 64V150Z',
    lines:
      'M4 80C30 78 56 86 80 102M4 92C28 90 50 98 70 110M4 104C24 102 42 108 58 118M476 76C450 80 420 96 396 108M476 88C452 92 430 104 410 114M476 100C456 104 440 110 424 118',
    mid: houses([[96, 20, 22, 8], [118, 18, 28], [204, 22, 26, 9], [228, 26, 34], [292, 22, 30], [316, 20, 24, 8], [338, 24, 36], [364, 18, 22, 8], [440, 22, 26, 9]]),
    front: [
      rect(150, 72, 18, 78) + rect(153, 52, 12, 20) + 'M153 52L159 38L165 52Z' + arch(155, 150, 8, 20) + rect(157.5, 84, 3, 16),
      'M168 150V110L174 98H186L190 110V150Z',
      'M188 150V92L194 74L200 92V150Z',
      rect(262, 58, 24, 92) + rect(266, 50, 16, 8) + rect(267, 66, 3, 40) + rect(272.5, 66, 3, 40) + rect(278, 66, 3, 40),
      'M394 150L398.5 46H405.5L410 150Z' + rect(396, 44, 12, 2) + rect(389, 30, 26, 14) + rect(389, 36.5, 26, 1.5) + rect(395, 26, 14, 4) + rect(400.5, 2, 3, 24),
    ],
  },

  // Schloss with its tower, Schlossgarten trees and the Pyramide on the Marktplatz.
  karlsruhe: {
    back: 'M0 150V124C40 118 80 122 120 120C200 116 280 118 360 120C400 121 440 116 480 120V150Z',
    mid: houses([[4, 22, 28, 9], [424, 24, 30, 10], [452, 24, 24, 9]]),
    front: [
      'M60 150V118L68 108H412L420 118V150Z' +
        windowRow(76, 123, 10, 12, 5, 8) +
        windowRow(76, 137, 10, 12, 5, 8) +
        windowRow(296, 123, 10, 12, 5, 8) +
        windowRow(296, 137, 10, 12, 5, 8),
      'M196 150V104L240 88L284 104V150Z' + arch(234, 150, 12, 22) + rect(206, 114, 5, 9) + rect(218, 114, 5, 9) + rect(257, 114, 5, 9) + rect(269, 114, 5, 9),
      rect(229, 52, 22, 36) + 'M227 52C227 41 234 35 240 31C246 35 253 41 253 52Z' + arch(236, 82, 8, 20),
      rect(236.5, 20, 7, 11) + 'M236.5 20L240 10L243.5 20Z',
      'M432 150L447 122L462 150Z',
      circle(32, 136, 12) + rect(30, 148, 4, 2) + circle(52, 140, 8) + rect(50, 148, 4, 2),
    ],
  },

  // Port cranes, Wasserturm with Amphitrite, Barockschloss, Fernmeldeturm, Odenwald behind.
  mannheim: {
    back: 'M0 150V128C80 124 160 126 240 124C300 122 340 112 380 104C420 96 450 98 480 102V150Z',
    lines: 'M61 50L24 62M61 50L120 62M103 66V92M150 86V104',
    mid: houses([[6, 22, 26], [160, 22, 24], [236, 12, 28], [356, 20, 30], [436, 24, 26], [458, 20, 34]]),
    front: [
      rect(58, 66, 6, 84) + rect(22, 62, 100, 4) + 'M58 62L61 50L64 62Z' + rect(98, 92, 10, 8),
      rect(126, 86, 5, 64) + rect(104, 82, 58, 4) + rect(146, 104, 8, 7),
      rect(186, 112, 48, 38) +
        arch(192, 150, 8, 18) +
        arch(206, 150, 8, 18) +
        arch(220, 150, 8, 18) +
        rect(192, 64, 36, 48) +
        arch(199, 100, 6, 26) +
        arch(215, 100, 6, 26) +
        rect(188, 58, 44, 6) +
        'M194 58C194 41 226 41 226 58Z' +
        rect(206, 36, 8, 9) +
        rect(208.5, 26, 3, 10) +
        circle(210, 23.5, 2.5),
      'M248 150V118L254 108H346L352 118V150Z' + windowRow(258, 124, 7, 12, 5, 8) + windowRow(258, 137, 7, 12, 5, 8),
      'M288 108C288 96 312 96 312 108Z',
      'M405 150L408 54H414L417 150Z' + rect(396, 48, 30, 6) + rect(399, 40, 24, 8) + rect(402, 34, 18, 6) + rect(409.5, 4, 3, 30),
    ],
  },

  // Frauenkirche, Neues Rathaus and Olympiaturm in front of the Alps.
  muenchen: {
    back: 'M0 150V108L30 96L48 104L76 78L96 92L120 70L142 90L160 84L188 60L210 82L236 76L262 54L290 80L318 72L346 50L372 76L396 70L424 58L450 80L480 74V150Z',
    mid: houses([[8, 24, 30, 10], [34, 22, 40], [58, 26, 28, 10], [86, 20, 34], [108, 24, 26, 9], [306, 10, 20], [404, 22, 30], [458, 20, 26, 8]]),
    front: [
      rect(148, 58, 22, 92) +
        rect(180, 58, 22, 92) +
        rect(170, 90, 10, 60) +
        'M146 58C146 44 151 36 159 31C167 36 172 44 172 58Z' +
        'M178 58C178 44 183 36 191 31C199 36 204 44 204 58Z' +
        rect(157.8, 20, 2.4, 11) +
        rect(189.8, 20, 2.4, 11) +
        arch(155.5, 100, 7, 28) +
        arch(187.5, 100, 7, 28) +
        arch(171, 150, 8, 18),
      `M204 150V108L216 66H292L304 108V150Z${arch(222, 140, 8, 26)}${arch(244, 140, 8, 26)}${arch(266, 140, 8, 26)}`,
      'M316 150V108L322 98H392L398 108V150Z' + windowRow(366, 116, 3, 10, 5, 8) + windowRow(366, 132, 3, 10, 5, 8),
      rect(344, 62, 16, 88) + 'M342 62L352 26L362 62Z' + 'M338 70L341 58L344 70Z M360 70L363 58L366 70Z' + arch(348, 96, 8, 20),
      'M436 150L438.5 46H443.5L446 150Z' + rect(429, 40, 24, 6) + rect(432, 32, 18, 8) + rect(439.5, 0, 3, 32),
    ],
  },

  // St. Ulrich und Afra, Rathaus with Zirbelnuss, Perlachturm and the Fuggerei rows.
  augsburg: {
    back: 'M0 150V126C60 120 120 124 180 122C260 118 320 124 380 120C420 118 450 122 480 120V150Z',
    mid: houses([[6, 22, 30, 9], [30, 26, 24, 10], [160, 22, 30], [184, 18, 24, 8], [330, 16, 22]]),
    front: [
      rect(70, 56, 20, 94) +
        'M66 56C60 47 66 38 80 28C94 38 100 47 94 56Z' +
        rect(77.5, 18, 5, 10) +
        'M75 18C73 13 76 9 80 5C84 9 87 13 85 18Z' +
        rect(79.3, 0, 1.4, 5) +
        arch(76, 100, 8, 22) +
        arch(76, 150, 8, 20),
      `M90 150V108L98 94H148L156 108V150Z${arch(104, 138, 7, 20)}${arch(120, 138, 7, 20)}${arch(136, 138, 7, 20)}`,
      rect(206, 72, 96, 78) +
        windowRow(214, 82, 7, 12, 5, 9) +
        windowRow(214, 100, 7, 12, 5, 9) +
        windowRow(214, 118, 3, 12, 5, 9) +
        windowRow(266, 118, 3, 12, 5, 9) +
        arch(248, 150, 12, 20) +
        'M234 72L254 44L274 72Z' +
        'M251 39a3 5 0 1 0 6 0a3 5 0 1 0 -6 0Z' +
        rect(212, 54, 16, 18) +
        rect(280, 54, 16, 18) +
        'M209 54C205 47 210 41 220 34C230 41 235 47 231 54Z' +
        'M277 54C273 47 278 41 288 34C298 41 303 47 299 54Z' +
        rect(219.3, 24, 1.4, 10) +
        rect(287.3, 24, 1.4, 10) +
        rect(218, 58, 4, 9) +
        rect(286, 58, 4, 9),
      rect(310, 30, 14, 120) +
        'M307 30C305 25 309 20 317 14C325 20 329 25 327 30Z' +
        rect(314, 6, 6, 8) +
        rect(316.3, 0, 1.4, 6) +
        rect(315, 40, 4, 12) +
        circle(317, 62, 4) +
        arch(313, 150, 8, 18),
      Array.from({ length: 5 }, (_, i) => {
        const x = 352 + i * 24;
        return `M${x} 150V126L${x + 11} 114L${x + 22} 126V150Z` + rect(x + 5, 132, 4, 6) + rect(x + 13, 132, 4, 6) + rect(x + 9, 142, 4, 8);
      }).join(''),
    ],
  },
};

interface CitySilhouetteProps {
  city: CompetenceCityId;
  /** Accessible name, e.g. "Silhouette von Freiburg mit dem Münster". */
  label: string;
  className?: string;
}

export function CitySilhouette({ city, label, className }: CitySilhouetteProps) {
  // useId() yields ":r1:"-style ids, which do not survive inside url(#…).
  const gradientId = `skyline-${useId().replace(/:/g, '')}`;
  const skyline = skylines[city];
  const fill = `url(#${gradientId})`;

  return (
    <svg viewBox="0 0 480 160" role="img" aria-label={label} className={className} preserveAspectRatio="xMidYMax meet">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--noreja-main))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--noreja-secondary))' }} />
        </linearGradient>
      </defs>
      <path d={skyline.back} fill={fill} opacity={0.18} />
      {skyline.backDetail && <path d={skyline.backDetail} fill={fill} opacity={0.32} />}
      {skyline.lines && (
        <path d={skyline.lines} fill="none" stroke={fill} strokeWidth={1.5} strokeLinecap="round" opacity={0.45} />
      )}
      <path d={skyline.mid} fill={fill} opacity={0.4} />
      {skyline.front.map((d, index) => (
        <path key={index} d={d} fill={fill} fillRule="evenodd" />
      ))}
      <rect x={0} y={GROUND} width={480} height={3} fill={fill} opacity={0.7} />
    </svg>
  );
}
