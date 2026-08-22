import { useLanguage } from "@/contexts/LanguageContext";
import { pricingHero } from "@/lib/heroCopy";
import {
  INK_DIM, LINE, MINT,
  labelStyle, SWITCH,
} from "@/components/hero/heroVisual";

/** Bottom to top: Core, Pro, Excellence. Baseline at y=292, axis at x=44. */
const STEPS = [
  { x: 52, w: 82, top: 222 },
  { x: 138, w: 82, top: 168 },
  { x: 224, w: 82, top: 108 },
];

const BASE = 292;

/** The staircase profile, used as the rising line over the step faces. */
const PROFILE = "M52 222 H134 V222 M138 168 H220 M224 108 H306";

interface Props {
  /** Monotonic tick from useHeroCycle. */
  step: number;
  /** The three plan names — the same words as the H1. */
  labels: string[];
}

export const PricingStaircase = ({ step, labels }: Props) => {
  const { language } = useLanguage();
  const active = step % 3;
  // The staircase builds itself once, then the highlight cycles.
  const revealed = Math.min(step + 1, STEPS.length);

  return (
    <svg
      viewBox="0 0 360 360"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label={labels.join(" → ")}
    >
      <defs>
        <linearGradient id="stairActive" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(var(--noreja-main) / 0.16)" />
          <stop offset="100%" stopColor="hsl(var(--noreja-tertiary) / 0.30)" />
        </linearGradient>
        <linearGradient id="stairIdle" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(var(--noreja-main) / 0.06)" />
          <stop offset="100%" stopColor="hsl(var(--noreja-secondary) / 0.12)" />
        </linearGradient>
      </defs>

      {/* Axes */}
      <line x1="44" y1={BASE} x2="44" y2="88" stroke={LINE} strokeWidth="1.5" />
      <path d="M44 82 l-4 8 h8 z" fill={LINE} />
      <line x1="44" y1={BASE} x2="318" y2={BASE} stroke={LINE} strokeWidth="1.5" />

      <text
        x="44"
        y="70"
        textAnchor="start"
        fill={INK_DIM}
        className="font-mono uppercase"
        style={labelStyle(9, "0.2em")}
      >
        {pricingHero.axisLeistung[language]}
      </text>
      <text
        x="318"
        y="312"
        textAnchor="end"
        fill={INK_DIM}
        className="font-mono uppercase"
        style={labelStyle(9, "0.2em")}
      >
        {pricingHero.axisPaket[language]}
      </text>

      {STEPS.map((s, i) => {
        const on = i === active;
        const shown = i < revealed;
        return (
          <g
            key={labels[i] ?? i}
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <rect
              x={s.x}
              y={s.top}
              width={s.w}
              height={BASE - s.top}
              rx="4"
              fill={on ? "url(#stairActive)" : "url(#stairIdle)"}
              stroke={on ? MINT : LINE}
              strokeWidth="1.5"
              style={{ transition: SWITCH }}
            />

            {/* Tread: the top edge reads as the step you stand on. */}
            <line
              x1={s.x}
              y1={s.top}
              x2={s.x + s.w}
              y2={s.top}
              stroke={on ? MINT : INK_DIM}
              strokeWidth={on ? 3 : 1.5}
              strokeLinecap="round"
              style={{ transition: SWITCH }}
            />

            <text
              x={s.x + s.w / 2}
              y={s.top - 16}
              textAnchor="middle"
              fill={on ? MINT : INK_DIM}
              className="font-mono uppercase"
              style={labelStyle(11.5)}
            >
              {labels[i]}
            </text>

            <text
              x={s.x + s.w / 2}
              y={BASE - 14}
              textAnchor="middle"
              fill={INK_DIM}
              className="font-mono"
              style={labelStyle(10, "0.14em")}
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}

      {/* The profile line over the faces, drawn only across revealed steps. */}
      <path
        d={PROFILE}
        fill="none"
        stroke="hsl(var(--noreja-secondary) / 0.55)"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        style={{ opacity: revealed === STEPS.length ? 1 : 0, transition: "opacity 0.8s ease" }}
      />

      {/* Marker hopping up to the active step. Translated via `transform`
          rather than animated cx/cy, which is only reliable on SVG2 engines. */}
      <g
        style={{
          transform: `translate(${STEPS[active].x + STEPS[active].w / 2}px, ${STEPS[active].top - 34}px)`,
          transition: "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        <circle r="6" fill={MINT} style={{ filter: `drop-shadow(0 0 10px ${MINT})` }} />
      </g>
    </svg>
  );
};
