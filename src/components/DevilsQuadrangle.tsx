import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Euro, Move, RotateCcw, ShieldCheck, Shuffle, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Slider } from "@/components/ui/slider";
import {
  BASE_BUDGET,
  BASE_VALUE,
  DIM_MAX,
  DIM_MIN,
  MAX_LIFT,
  QUADRANGLE_DIMENSIONS,
  QUADRANGLE_OPPOSITE,
  balancedValues,
  pushDimension,
  quadranglePresets,
  rescaleToBudget,
  tradeOffTension,
  type QuadrangleDimension,
  type QuadrangleValues,
} from "@/lib/devilsQuadrangle";

/* ------------------------------------------------------------------ geometry */

const VIEW = 620;
const CENTER = VIEW / 2;
const RADIUS = 190;
/** Where the axis label block sits, as a multiple of RADIUS — clear of the outermost handle */
const LABEL_RADIUS = 1.28;

/** Time sits on top opposite cost, quality on the left opposite flexibility */
const AXIS_ANGLE: Record<QuadrangleDimension, number> = {
  time: -90,
  flexibility: 0,
  cost: 90,
  quality: 180,
};

const axisPoint = (dimension: QuadrangleDimension, value: number) => {
  const radians = (AXIS_ANGLE[dimension] * Math.PI) / 180;
  return {
    x: CENTER + Math.cos(radians) * RADIUS * value,
    y: CENTER + Math.sin(radians) * RADIUS * value,
  };
};

const diamondPath = (values: QuadrangleValues) =>
  `${QUADRANGLE_DIMENSIONS.map((dimension, index) => {
    const { x, y } = axisPoint(dimension, values[dimension]);
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ")} Z`;

const ringPath = (scale: number) =>
  diamondPath({
    time: scale,
    cost: scale,
    quality: scale,
    flexibility: scale,
  });

/** Eases the rendered shape towards the target values so presets glide instead of jumping */
const useTweenedValues = (target: QuadrangleValues, duration = 260) => {
  const [rendered, setRendered] = useState(target);
  const fromRef = useRef(target);
  const frameRef = useRef<number>();

  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = QUADRANGLE_DIMENSIONS.reduce((acc, dimension) => {
        acc[dimension] = from[dimension] + (target[dimension] - from[dimension]) * eased;
        return acc;
      }, {} as QuadrangleValues);
      fromRef.current = next;
      setRendered(next);
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    // requestAnimationFrame is suspended while the tab is hidden — land on the
    // target anyway so the shape never shows a stale configuration
    const settleTimeout = window.setTimeout(() => {
      fromRef.current = target;
      setRendered(target);
    }, duration + 80);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.clearTimeout(settleTimeout);
    };
  }, [target, duration]);

  return rendered;
};

/* --------------------------------------------------------------------- copy */

const DIMENSION_STYLE: Record<
  QuadrangleDimension,
  { color: string; glow: string; Icon: typeof Clock }
> = {
  time: { color: "171 89% 55%", glow: "171 89% 65%", Icon: Clock },
  cost: { color: "35 96% 60%", glow: "35 96% 68%", Icon: Euro },
  quality: { color: "230 82% 66%", glow: "230 82% 74%", Icon: ShieldCheck },
  flexibility: { color: "300 82% 68%", glow: "300 82% 76%", Icon: Shuffle },
};

const copy = {
  de: {
    badge: "Devil's Quadrangle",
    title: "Der Zielkonflikt, den jede Prozessinitiative aushandelt",
    intro:
      "Jeder Prozess wird an vier Dimensionen gemessen – und sie ziehen gegeneinander. Zeit steht Kosten gegenüber, Qualität steht Flexibilität gegenüber. Wer die Durchlaufzeit halbiert, zahlt in der Regel mit Kosten; wer maximale Flexibilität will, verliert an Standardisierung und damit an Qualität. Genau dieses Spannungsfeld beschreibt das Devil's Quadrangle.",
    instructions:
      "Zieh an einem der vier Punkte oder nutze die Regler: Du siehst sofort, wer für den Gewinn bezahlt. Die gegenüberliegende Dimension trägt die Hälfte der Einbußen, die beiden benachbarten je ein Viertel.",
    svgTitle:
      "Devil's Quadrangle: interaktives Diagramm der vier Prozessdimensionen Zeit, Kosten, Qualität und Flexibilität",
    svgDesc:
      "Rautendiagramm mit vier Achsen: Zeit oben, Kosten unten, Qualität links, Flexibilität rechts. Zeit steht Kosten gegenüber, Qualität steht Flexibilität gegenüber. Zieht man eine Dimension nach außen, trägt die gegenüberliegende Dimension die Hälfte der Einbußen und die beiden benachbarten je ein Viertel, weil das Verbesserungsbudget konstant bleibt. Die aktuellen Werte je Dimension stehen als Prozentangaben in den Karten neben dem Diagramm.",
    axisTimeCost: "Spannungsachse Zeit ↔ Kosten",
    axisQualityFlex: "Spannungsachse Qualität ↔ Flexibilität",
    dragHint: "Punkt ziehen",
    reset: "Zurücksetzen",
    presets: "Typische Zielbilder",
    tension: "Ausgereizter Zielkonflikt",
    tensionLow: "ausbalanciert – niemand zahlt auffällig",
    tensionMid: "deutliche Verschiebung – zwei Dimensionen bezahlen sichtbar",
    tensionHigh: "maximal ausgereizt – eine Dimension wird geopfert",
    budgetTitle: "Noreja-Effekt: das Trade-off-Feld verschieben",
    budgetHint:
      "Der Zielkonflikt gilt nur, solange du nicht weißt, welche Ursache welche Wirkung hat. Mit kausaler Prozesstransparenz erkennst du die Treiber, die mehrere Dimensionen gleichzeitig verbessern – das Viereck wächst nach außen, statt nur zu kippen.",
    budgetLabel: "Kausale Prozesstransparenz",
    budgetOff: "Blindflug",
    budgetOn: "Kausal transparent",
    budgetGain: "Gemeinsamer Spielraum",
    deltaLabel: "vs. ausbalanciert",
    tradeOffTitle: "Wer bezahlt gerade?",
    dimensions: {
      time: "Zeit",
      cost: "Kosten",
      quality: "Qualität",
      flexibility: "Flexibilität",
    } as Record<QuadrangleDimension, string>,
    goals: {
      time: "Kürzere Durchlaufzeit, weniger Wartezeit und Rückfragen",
      cost: "Niedrigere Prozesskosten pro Vorgang, weniger Ressourceneinsatz",
      quality: "Weniger Fehler, Nacharbeit und Abweichungen von der Norm",
      flexibility: "Mehr Varianten, Sonderfälle und Anpassungsfähigkeit",
    } as Record<QuadrangleDimension, string>,
    costs: {
      time: "Beschleunigen kostet Puffer, Personal und Parallelkapazität.",
      cost: "Sparen verlängert Warteschlangen und drückt auf die Qualität.",
      quality: "Null-Fehler bedeutet Kontrollen, Standards und weniger Spielraum.",
      flexibility: "Jede Sonderlocke erzeugt Varianten, Übergaben und Fehlerquellen.",
    } as Record<QuadrangleDimension, string>,
  },
  en: {
    badge: "Devil's Quadrangle",
    title: "The trade-off every process initiative negotiates",
    intro:
      "Every process is measured along four dimensions – and they pull against each other. Time is opposed by cost, quality is opposed by flexibility. Halve your cycle time and you usually pay in cost; demand maximum flexibility and you lose standardisation, and with it quality. That tension is exactly what the Devil's Quadrangle describes.",
    instructions:
      "Drag one of the four handles or use the sliders: you immediately see who pays for the gain. The opposing dimension carries half of the loss, the two adjacent ones a quarter each.",
    svgTitle:
      "Devil's Quadrangle: interactive diagram of the four process dimensions time, cost, quality and flexibility",
    svgDesc:
      "Diamond diagram with four axes: time at the top, cost at the bottom, quality on the left, flexibility on the right. Time is opposed by cost, quality is opposed by flexibility. Pulling one dimension outward makes the opposing dimension carry half of the loss and the two adjacent dimensions a quarter each, because the improvement budget stays constant. The current value per dimension is shown as a percentage in the cards next to the diagram.",
    axisTimeCost: "Tension axis time ↔ cost",
    axisQualityFlex: "Tension axis quality ↔ flexibility",
    dragHint: "drag the handle",
    reset: "Reset",
    presets: "Typical target pictures",
    tension: "Trade-off stretched",
    tensionLow: "balanced – nobody pays noticeably",
    tensionMid: "clear shift – two dimensions visibly pay for it",
    tensionHigh: "fully stretched – one dimension is sacrificed",
    budgetTitle: "The Noreja effect: move the trade-off frontier",
    budgetHint:
      "The trade-off only holds as long as you do not know which cause drives which effect. With causal process transparency you find the drivers that improve several dimensions at once – the quadrangle grows outward instead of just tilting.",
    budgetLabel: "Causal process transparency",
    budgetOff: "Flying blind",
    budgetOn: "Causally transparent",
    budgetGain: "Shared headroom",
    deltaLabel: "vs. balanced",
    tradeOffTitle: "Who is paying right now?",
    dimensions: {
      time: "Time",
      cost: "Cost",
      quality: "Quality",
      flexibility: "Flexibility",
    } as Record<QuadrangleDimension, string>,
    goals: {
      time: "Shorter cycle time, less waiting and fewer clarification loops",
      cost: "Lower process cost per case, less resource consumption",
      quality: "Fewer defects, less rework and fewer deviations from the norm",
      flexibility: "More variants, special cases and adaptability",
    } as Record<QuadrangleDimension, string>,
    costs: {
      time: "Speeding up costs buffers, people and parallel capacity.",
      cost: "Saving money lengthens queues and pushes down on quality.",
      quality: "Zero defects means controls, standards and less leeway.",
      flexibility: "Every exception creates variants, handovers and defect sources.",
    } as Record<QuadrangleDimension, string>,
  },
} as const;

/* ---------------------------------------------------------------- component */

export const DevilsQuadrangle = () => {
  const { language } = useLanguage();
  const text = copy[language];

  const [values, setValues] = useState<QuadrangleValues>(balancedValues);
  const [lift, setLift] = useState(0);
  const [activeDimension, setActiveDimension] = useState<QuadrangleDimension | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const budget = BASE_BUDGET + (lift / 100) * MAX_LIFT;

  const setDimension = useCallback(
    (dimension: QuadrangleDimension, target: number) => {
      setValues((current) => pushDimension(current, dimension, target, budget));
    },
    [budget]
  );

  /** Relative step for keyboard control — reads the live value so repeats accumulate */
  const nudgeDimension = useCallback(
    (dimension: QuadrangleDimension, delta: number) => {
      setValues((current) =>
        pushDimension(current, dimension, current[dimension] + delta, budget)
      );
    },
    [budget]
  );

  const handleLift = (next: number) => {
    setLift(next);
    setValues((current) => rescaleToBudget(current, BASE_BUDGET + (next / 100) * MAX_LIFT));
  };

  const reset = () => {
    setLift(0);
    setValues(balancedValues());
  };

  /** Translate a pointer position into a value on the dragged axis */
  const valueFromPointer = (dimension: QuadrangleDimension, clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * VIEW - CENTER;
    const y = ((clientY - rect.top) / rect.height) * VIEW - CENTER;
    const radians = (AXIS_ANGLE[dimension] * Math.PI) / 180;
    const projected = x * Math.cos(radians) + y * Math.sin(radians);
    return projected / RADIUS;
  };

  const handlePointerDown = (dimension: QuadrangleDimension) => (
    event: React.PointerEvent<SVGGElement>
  ) => {
    event.preventDefault();
    // Capture keeps the drag alive when the cursor leaves the small handle
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // no active pointer to capture — dragging still works via the move handler
    }
    setActiveDimension(dimension);
    const next = valueFromPointer(dimension, event.clientX, event.clientY);
    if (next !== null) setDimension(dimension, next);
  };

  const handlePointerMove = (dimension: QuadrangleDimension) => (
    event: React.PointerEvent<SVGGElement>
  ) => {
    if (activeDimension !== dimension) return;
    const next = valueFromPointer(dimension, event.clientX, event.clientY);
    if (next !== null) setDimension(dimension, next);
  };

  const handleKeyDown = (dimension: QuadrangleDimension) => (
    event: React.KeyboardEvent<SVGGElement>
  ) => {
    const step = event.shiftKey ? 0.1 : 0.03;
    if (event.key === "ArrowUp" || event.key === "ArrowRight") {
      event.preventDefault();
      nudgeDimension(dimension, step);
    } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
      event.preventDefault();
      nudgeDimension(dimension, -step);
    } else if (event.key === "Home") {
      event.preventDefault();
      setDimension(dimension, BASE_VALUE);
    }
  };

  const tension = tradeOffTension(values);
  const tensionLabel =
    tension < 0.18 ? text.tensionLow : tension < 0.55 ? text.tensionMid : text.tensionHigh;

  const percentages = useMemo(
    () =>
      QUADRANGLE_DIMENSIONS.reduce((acc, dimension) => {
        acc[dimension] = Math.round(values[dimension] * 100);
        return acc;
      }, {} as Record<QuadrangleDimension, number>),
    [values]
  );

  const rendered = useTweenedValues(values);
  const currentPath = diamondPath(rendered);
  const baselinePath = ringPath(BASE_VALUE);

  return (
    <section id="devils-quadrangle" className="relative px-4 pb-20 lg:px-8 md:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        {/* -------------------------------------------------------- intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{text.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{text.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{text.intro}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
            {text.instructions}
          </p>
        </motion.div>

        {/* ------------------------------------------------------- console */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-card backdrop-blur-xl"
        >
          {/* futuristic backdrop: corner glows plus a faint grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 620px 420px at 12% 0%, hsl(var(--noreja-tertiary) / 0.16) 0%, transparent 62%), radial-gradient(ellipse 620px 480px at 92% 100%, hsl(300 82% 60% / 0.14) 0%, transparent 62%), radial-gradient(ellipse 520px 420px at 60% 40%, hsl(var(--noreja-main) / 0.14) 0%, transparent 65%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--noreja-tertiary) / 0.35) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-tertiary) / 0.35) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)",
            }}
          />

          <div className="relative z-10 grid gap-10 p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            {/* ------------------------------------------------- diagram */}
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {text.presets}
                </span>
                {quadranglePresets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setValues(rescaleToBudget(preset.values, budget))}
                    className="rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground"
                  >
                    {preset.label[language]}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={reset}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  {text.reset}
                </button>
              </div>

              <svg
                ref={svgRef}
                viewBox={`0 0 ${VIEW} ${VIEW}`}
                className="w-full touch-none select-none"
                role="group"
                aria-labelledby="dq-title"
                aria-describedby="dq-desc"
              >
                {/* Crawlers and screen readers cannot read the geometry — spell it out */}
                <title id="dq-title">{text.svgTitle}</title>
                <desc id="dq-desc">{text.svgDesc}</desc>
                <defs>
                  <radialGradient id="dq-core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--noreja-tertiary))" stopOpacity="0.32" />
                    <stop offset="55%" stopColor="hsl(var(--noreja-main))" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="hsl(var(--noreja-main))" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="dq-shape" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(171 89% 55%)" stopOpacity="0.42" />
                    <stop offset="45%" stopColor="hsl(var(--noreja-main))" stopOpacity="0.36" />
                    <stop offset="100%" stopColor="hsl(300 82% 68%)" stopOpacity="0.42" />
                  </linearGradient>
                  <linearGradient id="dq-edge" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(171 89% 62%)" />
                    <stop offset="50%" stopColor="hsl(230 82% 70%)" />
                    <stop offset="100%" stopColor="hsl(300 82% 72%)" />
                  </linearGradient>
                  <filter id="dq-glow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* core glow */}
                <circle cx={CENTER} cy={CENTER} r={RADIUS * 1.05} fill="url(#dq-core)" />

                {/* slowly rotating scanner ring */}
                <motion.circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS + 26}
                  fill="none"
                  stroke="hsl(var(--noreja-tertiary) / 0.35)"
                  strokeWidth="1"
                  strokeDasharray="3 14"
                  style={{ transformOrigin: "center" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS + 14}
                  fill="none"
                  stroke="hsl(var(--noreja-main) / 0.28)"
                  strokeWidth="1"
                  strokeDasharray="1 9"
                  style={{ transformOrigin: "center" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />

                {/* concentric reference diamonds */}
                {[0.25, 0.5, 0.75, 1].map((scale) => (
                  <path
                    key={scale}
                    d={ringPath(scale)}
                    fill="none"
                    stroke="hsl(var(--foreground) / 0.09)"
                    strokeWidth="1"
                  />
                ))}

                {/* the two tension axes */}
                {(
                  [
                    ["time", "cost"],
                    ["quality", "flexibility"],
                  ] as [QuadrangleDimension, QuadrangleDimension][]
                ).map(([from, to]) => {
                  const a = axisPoint(from, 1.06);
                  const b = axisPoint(to, 1.06);
                  return (
                    <line
                      key={`${from}-${to}`}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke="hsl(var(--foreground) / 0.16)"
                      strokeWidth="1"
                      strokeDasharray="6 6"
                    />
                  );
                })}

                {/* balanced reference shape */}
                <path
                  d={baselinePath}
                  fill="none"
                  stroke="hsl(var(--foreground) / 0.28)"
                  strokeWidth="1.25"
                  strokeDasharray="4 6"
                />

                {/* current configuration */}
                <path
                  d={currentPath}
                  fill="url(#dq-shape)"
                  stroke="url(#dq-edge)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  filter="url(#dq-glow)"
                />

                {/* axis spokes, labels and draggable handles */}
                {QUADRANGLE_DIMENSIONS.map((dimension) => {
                  const { color, glow } = DIMENSION_STYLE[dimension];
                  const tip = axisPoint(dimension, rendered[dimension]);
                  const outer = axisPoint(dimension, 1);
                  const label = axisPoint(dimension, LABEL_RADIUS);
                  const isActive = activeDimension === dimension;

                  return (
                    <g key={dimension}>
                      <line
                        x1={CENTER}
                        y1={CENTER}
                        x2={outer.x}
                        y2={outer.y}
                        stroke={`hsl(${color} / 0.28)`}
                        strokeWidth="1"
                      />
                      <line
                        x1={CENTER}
                        y1={CENTER}
                        x2={tip.x}
                        y2={tip.y}
                        stroke={`hsl(${color} / 0.75)`}
                        strokeWidth="1.5"
                      />

                      {/* Label block outside the ring. On phones the diagram is too small
                          for legible axis type — the cards below carry the same readout. */}
                      <g className="hidden sm:inline">
                        <text
                          x={label.x}
                          y={label.y - 4}
                          textAnchor="middle"
                          className="text-[14px] font-semibold uppercase tracking-[0.12em]"
                          style={{ fill: `hsl(${glow})` }}
                        >
                          {text.dimensions[dimension]}
                        </text>
                        <text
                          x={label.x}
                          y={label.y + 17}
                          textAnchor="middle"
                          className="text-[16px] font-bold"
                          style={{ fill: `hsl(${glow})` }}
                        >
                          {percentages[dimension]}%
                        </text>
                      </g>

                      {/* handle — pointer drag plus keyboard control */}
                      <g
                        role="slider"
                        tabIndex={0}
                        aria-label={text.dimensions[dimension]}
                        aria-valuemin={Math.round(DIM_MIN * 100)}
                        aria-valuemax={Math.round(DIM_MAX * 100)}
                        aria-valuenow={percentages[dimension]}
                        onPointerDown={handlePointerDown(dimension)}
                        onPointerMove={handlePointerMove(dimension)}
                        onPointerUp={() => setActiveDimension(null)}
                        onPointerCancel={() => setActiveDimension(null)}
                        onKeyDown={handleKeyDown(dimension)}
                        className="cursor-grab outline-none active:cursor-grabbing"
                        style={{ touchAction: "none" }}
                      >
                        {/* generous invisible hit area */}
                        <circle cx={tip.x} cy={tip.y} r="26" fill="transparent" />
                        {isActive && (
                          <circle
                            cx={tip.x}
                            cy={tip.y}
                            r="20"
                            fill={`hsl(${color} / 0.16)`}
                            stroke={`hsl(${color} / 0.5)`}
                            strokeWidth="1"
                          />
                        )}
                        <circle
                          cx={tip.x}
                          cy={tip.y}
                          r="11"
                          fill="hsl(var(--background))"
                          stroke={`hsl(${glow})`}
                          strokeWidth="2.5"
                          filter="url(#dq-glow)"
                        />
                        <circle cx={tip.x} cy={tip.y} r="4" fill={`hsl(${glow})`} />
                      </g>
                    </g>
                  );
                })}

                {/* centre marker */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r="3.5"
                  fill="hsl(var(--foreground) / 0.55)"
                />
              </svg>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] uppercase tracking-wider text-muted-foreground/70">
                <span>{text.axisTimeCost}</span>
                <span>{text.axisQualityFlex}</span>
                <span className="inline-flex items-center gap-1">
                  <Move className="h-3 w-3" />
                  {text.dragHint}
                </span>
              </div>
            </div>

            {/* ------------------------------------------------ controls */}
            <div className="min-w-0 space-y-5">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {text.tradeOffTitle}
                </h3>
                <div className="space-y-3">
                  {QUADRANGLE_DIMENSIONS.map((dimension) => {
                    const { color, glow, Icon } = DIMENSION_STYLE[dimension];
                    const delta = Math.round((values[dimension] - BASE_VALUE) * 100);
                    const opposite = QUADRANGLE_OPPOSITE[dimension];

                    return (
                      <div
                        key={dimension}
                        className="rounded-2xl border p-4 transition-colors"
                        style={{
                          borderColor: `hsl(${color} / ${activeDimension === dimension ? 0.55 : 0.24})`,
                          background: `linear-gradient(135deg, hsl(${color} / 0.10), transparent 70%)`,
                        }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2">
                            <span
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                              style={{ background: `hsl(${color} / 0.16)` }}
                            >
                              <Icon className="h-4 w-4" style={{ color: `hsl(${glow})` }} />
                            </span>
                            <div className="min-w-0">
                              <p
                                className="text-sm font-semibold"
                                style={{ color: `hsl(${glow})` }}
                              >
                                {text.dimensions[dimension]}
                              </p>
                              <p className="truncate text-[11px] text-muted-foreground">
                                ↔ {text.dimensions[opposite]}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0 text-right">
                            <p
                              className="text-xl font-bold leading-none tabular-nums"
                              style={{ color: `hsl(${glow})` }}
                            >
                              {percentages[dimension]}%
                            </p>
                            <p
                              className={`mt-1 text-[11px] font-medium tabular-nums ${
                                delta > 0
                                  ? "text-emerald-400"
                                  : delta < 0
                                    ? "text-rose-400"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {delta > 0 ? `+${delta}` : delta}
                              {" "}
                              {text.deltaLabel}
                            </p>
                          </div>
                        </div>

                        <Slider
                          className="mt-4"
                          value={[percentages[dimension]]}
                          min={Math.round(DIM_MIN * 100)}
                          max={Math.round(DIM_MAX * 100)}
                          step={1}
                          aria-label={text.dimensions[dimension]}
                          onValueChange={([next]) => setDimension(dimension, next / 100)}
                        />

                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                          <span className="text-foreground/80">{text.goals[dimension]}.</span>{" "}
                          {text.costs[dimension]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* tension meter */}
              <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {text.tension}
                  </span>
                  <span className="text-sm font-bold tabular-nums text-foreground">
                    {Math.round(tension * 100)}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-foreground/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(171 89% 55%), hsl(230 82% 66%), hsl(300 82% 68%), hsl(35 96% 60%))",
                    }}
                    animate={{ width: `${Math.max(3, tension * 100)}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 28 }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{tensionLabel}</p>
              </div>

              {/* the frontier-shifting lever */}
              <div
                className="rounded-2xl border p-4"
                style={{
                  borderColor: "hsl(var(--noreja-tertiary) / 0.35)",
                  background:
                    "linear-gradient(135deg, hsl(var(--noreja-tertiary) / 0.12), hsl(var(--noreja-main) / 0.10) 70%, transparent)",
                }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <h3 className="text-sm font-semibold text-foreground">{text.budgetTitle}</h3>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  {text.budgetHint}
                </p>

                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <span className="text-xs font-medium text-muted-foreground">
                    {text.budgetLabel}
                  </span>
                  <span className="text-sm font-bold tabular-nums text-accent">
                    {text.budgetGain} +{Math.round((budget / BASE_BUDGET - 1) * 100)}%
                  </span>
                </div>
                <Slider
                  value={[lift]}
                  min={0}
                  max={100}
                  step={1}
                  aria-label={text.budgetLabel}
                  onValueChange={([next]) => handleLift(next)}
                />
                <div className="mt-2 flex justify-between text-[11px] text-muted-foreground/80">
                  <span>{text.budgetOff}</span>
                  <span>{text.budgetOn}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevilsQuadrangle;
