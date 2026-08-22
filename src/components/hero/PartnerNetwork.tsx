import { useLanguage } from "@/contexts/LanguageContext";
import { useHeroCycle } from "@/hooks/use-hero-cycle";
import { partnersHero } from "@/lib/heroCopy";
import {
  BRAND_2, CARD, INK, INK_DIM, LINE, MINT,
  labelStyle, readoutStyle, SWITCH,
} from "@/components/hero/heroVisual";

const CENTRE = { x: 180, y: 180 };

const polar = (radius: number, degrees: number) => ({
  x: CENTRE.x + radius * Math.cos((degrees * Math.PI) / 180),
  y: CENTRE.y + radius * Math.sin((degrees * Math.PI) / 180),
});

/**
 * Three shells: one seed in the middle, five around it, eight further out. The
 * two outer rings use different spacings (72° and 45°) on purpose — aligning
 * them would read as a wheel rather than a network.
 *
 * Every node is drawn at the same size, including the seed. The graph grows
 * out of the middle, but nothing in it is a hub.
 */
const NODES = [
  CENTRE,
  ...Array.from({ length: 5 }, (_, i) => polar(66, -90 + i * 72)),
  ...Array.from({ length: 8 }, (_, i) => polar(128, -67.5 + i * 45)),
];

const ringOf = (index: number) => (index === 0 ? 0 : index <= 5 ? 1 : 2);

/**
 * Build order in two acts: first the network reaches outward from the middle,
 * then the existing nodes start linking sideways to each other. That second act
 * is what turns a tree into a mesh.
 */
const EDGES: Array<[number, number]> = [
  // Act one — outward
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 6], [1, 13], [2, 7], [3, 8], [3, 9], [4, 10], [5, 11], [5, 12],
  // Act two — sideways
  [1, 2], [2, 3], [3, 4], [4, 5], [5, 1],
  [6, 7], [8, 9], [10, 11], [12, 13], [13, 6],
];

/**
 * Runs on its own faster tick rather than the shared hero step: at the heading
 * pace the links would take half a minute to appear, and the network would
 * still look half-built by the time most visitors scroll past.
 */
export const PartnerNetwork = () => {
  const { language } = useLanguage();
  const step = useHeroCycle(650, EDGES.length + 4);

  const built = Math.min(step + 1, EDGES.length);
  const complete = built === EDGES.length;
  // While building, the newest link glows. Once complete, a pulse keeps
  // travelling so the graphic never goes fully static.
  const glow = complete ? step % EDGES.length : built - 1;

  const connected = new Set<number>();
  EDGES.slice(0, built).forEach(([a, b]) => {
    connected.add(a);
    connected.add(b);
  });

  return (
    <svg
      viewBox="0 0 360 360"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label={`${partnersHero.connections[language]}: ${built}`}
    >
      {/* Edges first, so nodes sit on top of the line ends. */}
      {EDGES.map(([a, b], i) => {
        const from = NODES[a];
        const to = NODES[b];
        const shown = i < built;
        const hot = i === glow && shown;
        const radial = ringOf(a) !== ringOf(b);
        return (
          <line
            key={`${a}-${b}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={hot ? MINT : radial ? BRAND_2 : LINE}
            strokeWidth={hot ? 2.4 : radial ? 1.4 : 1}
            strokeOpacity={shown ? (hot ? 1 : radial ? 0.5 : 0.45) : 0}
            style={{ transition: "stroke 0.5s ease, stroke-opacity 0.6s ease, stroke-width 0.5s ease" }}
          />
        );
      })}

      {NODES.map((node, i) => {
        const on = connected.has(i);
        return (
          <g key={i} style={{ opacity: on ? 1 : 0.16, transition: "opacity 0.6s ease" }}>
            <circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill={CARD}
              stroke={on ? BRAND_2 : LINE}
              strokeWidth="1.5"
              style={{ transition: SWITCH }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={on ? MINT : INK_DIM}
              style={{ transition: SWITCH }}
            />
          </g>
        );
      })}

      <text
        x="180"
        y="328"
        textAnchor="middle"
        fill={INK_DIM}
        className="font-mono uppercase"
        style={labelStyle(9, "0.22em")}
      >
        {partnersHero.connections[language]}
      </text>
      <text
        x="180"
        y="351"
        textAnchor="middle"
        fill={complete ? MINT : INK}
        className="font-bold"
        style={readoutStyle(21)}
      >
        {String(built).padStart(2, "0")}
      </text>
    </svg>
  );
};
