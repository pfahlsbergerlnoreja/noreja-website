import { useLanguage } from "@/contexts/LanguageContext";
import { successHero } from "@/lib/heroCopy";
import {
  INK_DIM, LINE, MINT,
  labelStyle, SWITCH,
} from "@/components/hero/heroVisual";

/**
 * Three blocks stacked on a ground line, base first. Each one narrows as it
 * goes up, so the stack reads as something built on a foundation rather than a
 * bar chart — trust carries professionalism carries speed.
 */
const BLOCKS = [
  { x: 50, w: 260, top: 236 },
  { x: 78, w: 204, top: 166 },
  { x: 106, w: 148, top: 96 },
];

const HEIGHT = 62;
const GROUND = 306;

/** Bridges the gap between two blocks, so they read as interlocking. */
const STUD = { w: 30, h: 9 };

interface Props {
  /** Monotonic tick from useHeroCycle. */
  step: number;
  /** The three block labels — the same words as the H1. */
  labels: string[];
}

export const PrincipleStack = ({ step, labels }: Props) => {
  const { language } = useLanguage();
  const active = step % BLOCKS.length;
  // The stack builds itself once, bottom up, then the highlight cycles.
  const revealed = Math.min(step + 1, BLOCKS.length);

  return (
    <svg
      viewBox="0 0 360 360"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label={labels.join(" · ")}
    >
      <defs>
        <linearGradient id="blockActive" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(var(--noreja-main) / 0.16)" />
          <stop offset="100%" stopColor="hsl(var(--noreja-tertiary) / 0.30)" />
        </linearGradient>
        <linearGradient id="blockIdle" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(var(--noreja-main) / 0.06)" />
          <stop offset="100%" stopColor="hsl(var(--noreja-secondary) / 0.12)" />
        </linearGradient>
      </defs>

      <line x1="40" y1={GROUND} x2="320" y2={GROUND} stroke={LINE} strokeWidth="1.5" />
      <text
        x="50"
        y="324"
        textAnchor="start"
        fill={INK_DIM}
        className="font-mono uppercase"
        style={labelStyle(9, "0.2em")}
      >
        {successHero.foundation[language]}
      </text>

      {BLOCKS.map((b, i) => {
        const on = i === active;
        const shown = i < revealed;
        return (
          <g
            key={labels[i] ?? i}
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(-18px)",
              transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Stud first, so the block's own outline draws over its base. */}
            {i > 0 && (
              <rect
                x={180 - STUD.w / 2}
                y={b.top + HEIGHT - 1}
                width={STUD.w}
                height={STUD.h}
                rx="2"
                fill="hsl(var(--noreja-secondary) / 0.18)"
                stroke={LINE}
                strokeWidth="1"
              />
            )}

            <rect
              x={b.x}
              y={b.top}
              width={b.w}
              height={HEIGHT}
              rx="5"
              fill={on ? "url(#blockActive)" : "url(#blockIdle)"}
              stroke={on ? MINT : LINE}
              strokeWidth="1.5"
              style={{ transition: SWITCH }}
            />

            <text
              x="180"
              y={b.top + HEIGHT / 2 + 4}
              textAnchor="middle"
              fill={on ? MINT : INK_DIM}
              className="font-mono uppercase"
              style={labelStyle(11.5)}
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
