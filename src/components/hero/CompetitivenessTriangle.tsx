import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp } from "@/hooks/use-loop-motion";
import { competitivenessCopy } from "@/lib/heroCopy";
import {
  AMBER, BRAND_2, CARD, INK_DIM, LINE, MINT, RED,
  labelStyle, readoutStyle, SWITCH,
} from "@/components/hero/heroVisual";

/**
 * Circumradius 132 and centre 180/180, matching PhaseRing, so the hero
 * graphics on the home and platform pages sit at the same optical weight.
 */
const CORNERS = [
  { x: 180, y: 48, lx: 180, ly: 22 },
  { x: 294.3, y: 246, lx: 300, ly: 278 },
  { x: 65.7, y: 246, lx: 60, ly: 278 },
];

const OUTLINE = "M180 48 L294.3 246 L65.7 246 Z";

/**
 * Side of the triangle (R·√3) and its perimeter. The outline starts at corner 0
 * and runs clockwise, so path position k·SIDE is exactly corner k — which is
 * what lets the highlight arrive at a corner at the same moment it lights up.
 */
const SIDE = 228.63;
const PERIMETER = SIDE * 3;

/**
 * The highlight travels by animating `stroke-dashoffset`, NOT by rotating the
 * path. Rotation is what PhaseRing does, and it only works there because a
 * circle maps onto itself at every angle. A triangle does not: mid-transition
 * it sits at an angle where it no longer covers its own outline, so the entire
 * shape visibly spins. Moving the dash along a static path is the fix.
 */
const TAIL = 150;
const HEAD = 46;

/** Leading edge of both dashes sits at path position step·SIDE. */
const travel = (length: number, step: number) => ({
  strokeDasharray: `${length} ${PERIMETER - length}`,
  strokeDashoffset: length - step * SIDE,
  transition: "stroke-dashoffset 0.7s cubic-bezier(0.65, 0, 0.35, 1)",
});

const START = -30;
const CEILING = 92;
const DECAY = 0.78;

/**
 * Where the readout settles. By pass 12 each further pass adds under two
 * points, so counting on would only produce an ever-growing "pass 84" with a
 * value that no longer moves. The highlight keeps travelling either way.
 */
const MAX_ITERATIONS = 12;

/**
 * Competitiveness relative to the industry average, in percentage points.
 * Degressive on purpose: the first passes move the needle hard, and past
 * roughly 80 % each further pass only adds a few points. That asymptote is
 * the actual message — the loop compounds, but it does not promise infinity.
 */
const competitiveness = (iteration: number) =>
  CEILING - (CEILING - START) * Math.pow(DECAY, iteration);

const TIER_COLOURS = [RED, AMBER, BRAND_2, MINT];

const tierOf = (value: number) => {
  if (value < -10) return 0;
  if (value < 15) return 1;
  if (value < 55) return 2;
  return 3;
};

interface Props {
  /** Monotonic tick from useHeroCycle. */
  step: number;
  /** The three corner labels — the same words as the H1. */
  labels: string[];
}

export const CompetitivenessTriangle = ({ step, labels }: Props) => {
  const { language } = useLanguage();
  const active = step % 3;
  const iteration = Math.min(Math.floor(step / 3), MAX_ITERATIONS);

  const target = Math.round(competitiveness(iteration));
  const value = useCountUp(target);
  const tier = tierOf(value);
  const tierColour = TIER_COLOURS[tier];

  const signed = `${value > 0 ? "+" : value < 0 ? "−" : ""}${Math.abs(value)}\u00A0%`;

  return (
    <svg
      viewBox="0 0 360 360"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label={`${competitivenessCopy.metric[language]}: ${signed}, ${competitivenessCopy.tiers[language][tier]}`}
    >
      {/* The static outline carries the tier colour, so the whole shape reads
          red while the company is behind and mint once it leads. */}
      <path
        d={OUTLINE}
        fill="none"
        stroke={tierColour}
        strokeWidth="1.5"
        strokeOpacity="0.45"
        style={{ transition: "stroke 0.8s ease" }}
      />

      {/* Faint tail, then the bright head on top of it — a comet running along
          the edges rather than a rotating line. */}
      <path
        d={OUTLINE}
        fill="none"
        stroke={MINT}
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0.28"
        style={travel(TAIL, step)}
      />
      <path
        d={OUTLINE}
        fill="none"
        stroke={MINT}
        strokeWidth="3.4"
        strokeLinecap="round"
        style={{ ...travel(HEAD, step), filter: `drop-shadow(0 0 7px ${MINT})` }}
      />

      {CORNERS.map((corner, i) => {
        const on = i === active;
        return (
          <g key={labels[i] ?? i}>
            <circle
              cx={corner.x}
              cy={corner.y}
              r="15"
              fill={on ? "hsl(var(--noreja-tertiary) / 0.09)" : CARD}
              stroke={on ? MINT : LINE}
              strokeWidth="1.5"
              style={{ transition: SWITCH }}
            />
            <circle
              cx={corner.x}
              cy={corner.y}
              r={on ? 6 : 5}
              fill={on ? MINT : INK_DIM}
              style={{ transition: SWITCH }}
            />
            <text
              x={corner.lx}
              y={corner.ly}
              textAnchor="middle"
              fill={on ? MINT : INK_DIM}
              className="font-mono uppercase"
              style={labelStyle()}
            >
              {labels[i]}
            </text>
          </g>
        );
      })}

      {/* Centre readout. Sits low enough that the triangle is wide here. */}
      <text
        x="180"
        y="176"
        textAnchor="middle"
        fill={INK_DIM}
        className="font-mono uppercase"
        style={labelStyle(8.5, "0.18em")}
      >
        {competitivenessCopy.metric[language]}
      </text>

      <text
        x="180"
        y="213"
        textAnchor="middle"
        fill={tierColour}
        className="font-bold"
        style={readoutStyle(31)}
      >
        {signed}
      </text>

      <text
        x="180"
        y="234"
        textAnchor="middle"
        fill={tierColour}
        className="font-mono uppercase"
        style={labelStyle(9, "0.14em")}
      >
        {competitivenessCopy.tiers[language][tier]}
      </text>

      <text
        x="180"
        y="332"
        textAnchor="middle"
        fill={INK_DIM}
        className="font-mono uppercase"
        style={labelStyle(9, "0.22em")}
      >
        {competitivenessCopy.iteration[language]} {String(iteration + 1).padStart(2, "0")}
      </text>
    </svg>
  );
};
