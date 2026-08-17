import type { ReactNode } from "react";

/**
 * The four-phase loop as a ring. Used twice on the platform page:
 * once ambient in the hero, once sticky beside the scrolling phase panels.
 *
 * Colours are written as `hsl(var(--noreja-*) / a)` on purpose — the
 * `noreja-*` Tailwind colour utilities resolve to bare HSL components and
 * therefore render as invalid CSS.
 */

const NODES = [
  { cx: 180, cy: 48, labelX: 180, labelY: 22, anchor: "middle" as const },
  { cx: 312, cy: 180, labelX: 312, labelY: 212, anchor: "middle" as const },
  { cx: 180, cy: 312, labelX: 180, labelY: 342, anchor: "middle" as const },
  { cx: 48, cy: 180, labelX: 48, labelY: 212, anchor: "middle" as const },
];

const MINT = "hsl(var(--noreja-tertiary))";
const INK_DIM = "hsl(var(--muted-foreground))";

interface PhaseRingProps {
  activeIndex: number;
  labels: string[];
  /** Small label above the centre value. Ignored when `hub` is given. */
  hubLabel?: string;
  /** Large centre value. Ignored when `hub` is given. */
  hubValue?: string;
  /** Replaces the default two-line centre entirely. Must render SVG content. */
  hub?: ReactNode;
  onNodeClick?: (index: number) => void;
  className?: string;
}

export const PhaseRing = ({
  activeIndex,
  labels,
  hubLabel,
  hubValue,
  hub,
  onNodeClick,
  className = "",
}: PhaseRingProps) => {
  const interactive = typeof onNodeClick === "function";

  return (
    <svg
      viewBox="0 0 360 360"
      className={`w-full h-auto overflow-visible ${className}`}
      role="img"
      aria-label={labels.join(" → ")}
    >
      <defs>
        <linearGradient id="phaseRingSweep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--noreja-main))" stopOpacity="0" />
          <stop offset="55%" stopColor="hsl(var(--noreja-secondary))" />
          <stop offset="100%" stopColor="hsl(var(--noreja-tertiary))" />
        </linearGradient>
      </defs>

      <circle cx="180" cy="180" r="132" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" />

      <circle
        cx="180"
        cy="180"
        r="132"
        fill="none"
        stroke="url(#phaseRingSweep)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="190 640"
        style={{
          transformOrigin: "180px 180px",
          transform: `rotate(${activeIndex * 90 - 90}deg)`,
          transition: "transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      />

      {NODES.map((node, i) => {
        const on = i === activeIndex;
        return (
          <g
            key={labels[i] ?? i}
            onClick={interactive ? () => onNodeClick?.(i) : undefined}
            onKeyDown={
              interactive
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onNodeClick?.(i);
                    }
                  }
                : undefined
            }
            role={interactive ? "button" : undefined}
            tabIndex={interactive ? 0 : undefined}
            aria-label={interactive ? labels[i] : undefined}
            className={interactive ? "cursor-pointer focus:outline-none" : undefined}
          >
            <circle
              cx={node.cx}
              cy={node.cy}
              r="15"
              fill={on ? "hsl(var(--noreja-tertiary) / 0.09)" : "hsl(var(--card))"}
              stroke={on ? MINT : "hsl(var(--border))"}
              strokeWidth="1.5"
              style={{ transition: "fill 0.35s ease, stroke 0.35s ease" }}
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r={on ? 6 : 5}
              fill={on ? MINT : INK_DIM}
              style={{ transition: "fill 0.35s ease, r 0.35s ease" }}
            />
            <text
              x={node.labelX}
              y={node.labelY}
              textAnchor={node.anchor}
              fill={on ? MINT : INK_DIM}
              className="font-mono uppercase"
              style={{ fontSize: "11.5px", letterSpacing: "0.15em", transition: "fill 0.35s ease" }}
            >
              {labels[i]}
            </text>
          </g>
        );
      })}

      {hub ?? (
        <>
          <text
            x="180"
            y="170"
            textAnchor="middle"
            fill={INK_DIM}
            className="font-mono uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.24em" }}
          >
            {hubLabel}
          </text>
          <text
            x="180"
            y="198"
            textAnchor="middle"
            fill="hsl(var(--foreground))"
            className="font-bold"
            style={{
              fontSize: "25px",
              letterSpacing: "-0.03em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {hubValue}
          </text>
        </>
      )}
    </svg>
  );
};
