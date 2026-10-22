import { useEffect, useRef, useState, type RefObject } from "react";
import {
  BadgeCheck,
  CalendarCheck,
  Check,
  FlaskConical,
  GitFork,
  LogOut,
  Repeat,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BRAND, INK_DIM, LINE, MINT } from "@/components/hero/heroVisual";
import { cn } from "@/lib/utils";

/**
 * The Proof-of-Value story, played as a loop of discrete phases:
 *
 *   0 reset · 1–3 the two months fill up and the milestones tick off ·
 *   4 the decision point lights up · 5–6 both paths draw and hold.
 *
 * Every phase is a plain state switch; CSS transitions do the motion, so the
 * server render (and reduced motion) can simply show the settled phase.
 */
const PHASE_COUNT = 7;
const SETTLED = 5;
const STEP_MS = 1300;

/** Progress bar width per phase, in percent. */
const PROGRESS = [0, 34, 67, 100, 100, 100, 100];

const BENEFIT_ICONS = [ShieldCheck, CalendarCheck, Repeat];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Runs the loop only while the graphic is on screen. */
const usePovPhase = (ref: RefObject<HTMLElement>) => {
  const [phase, setPhase] = useState(SETTLED);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === "undefined") return;

    let id: number | undefined;
    const stop = () => {
      if (id !== undefined) window.clearInterval(id);
      id = undefined;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && id === undefined) {
          setPhase(0);
          id = window.setInterval(() => setPhase((p) => (p + 1) % PHASE_COUNT), STEP_MS);
        } else if (!entry.isIntersecting) {
          stop();
          setPhase(SETTLED);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [ref]);

  return phase;
};

/** Gap between the two outcome cards, in px (Tailwind `gap-4`). */
const OUTCOME_GAP = 16;

const useElementHeight = (ref: RefObject<HTMLElement>, fallback: number) => {
  const [height, setHeight] = useState(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.height > 0) setHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return height;
};

/** A path that draws itself in when `drawn` flips to true. */
const DrawPath = ({ d, drawn, color, instant }: { d: string; drawn: boolean; color: string; instant: boolean }) => (
  <path
    d={d}
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    pathLength={1}
    strokeDasharray="1"
    style={{
      strokeDashoffset: drawn ? 0 : 1,
      transition: instant ? "none" : "stroke-dashoffset 0.9s cubic-bezier(0.65, 0, 0.35, 1)",
    }}
  />
);

export const ProofOfValueTimeline = () => {
  const { t } = useLanguage();
  const copy = t.pages.pricing.proofOfValue;
  const ref = useRef<HTMLDivElement>(null);
  const phase = usePovPhase(ref);

  const reset = phase === 0;
  const decided = phase >= 4;
  const branched = phase >= 5;
  const progress = PROGRESS[phase];

  // The fork is drawn in real pixels so the dash-based draw-in stays exact;
  // its branches end at the vertical centres of the two outcome cards.
  const forkRef = useRef<HTMLDivElement>(null);
  const forkHeight = useElementHeight(forkRef, 400);
  const mid = forkHeight / 2;
  const upY = (forkHeight - OUTCOME_GAP) / 4;
  const downY = forkHeight - upY;
  const inPath = `M0 ${mid} H38`;
  const upPath = `M94 ${mid} C124 ${mid} 120 ${upY} 150 ${upY}`;
  const downPath = `M94 ${mid} C124 ${mid} 120 ${downY} 150 ${downY}`;

  return (
    <section className="mx-auto mt-20 max-w-6xl">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p
          className="mb-3 font-mono text-xs uppercase tracking-[0.2em]"
          style={{ color: MINT }}
        >
          {copy.eyebrow}
        </p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{copy.title}</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">{copy.text}</p>
      </div>

      <div
        ref={ref}
        className="grid items-stretch gap-0 md:grid-cols-[minmax(0,1.2fr)_150px_minmax(0,1fr)]"
      >
        {/* Phase 1: the two-month Proof of Value */}
        <div className="relative rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: "hsl(var(--noreja-main) / 0.18)", color: MINT }}
            >
              <FlaskConical className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-semibold text-foreground">{copy.povTitle}</h3>
            <span
              className="ml-auto rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.12em]"
              style={{ borderColor: "hsl(var(--noreja-tertiary) / 0.45)", color: MINT }}
            >
              {copy.povDuration}
            </span>
          </div>

          {/* Progress through the two months */}
          <div className="relative mb-3 h-2 rounded-full bg-muted">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${BRAND}, ${MINT})`,
                transition: reset ? "none" : `width ${STEP_MS}ms linear`,
              }}
            />
            <div
              className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${progress}%`,
                background: MINT,
                boxShadow: `0 0 14px ${MINT}`,
                opacity: progress > 0 && progress < 100 ? 1 : 0,
                transition: reset ? "none" : `left ${STEP_MS}ms linear, opacity 0.3s ease`,
              }}
            />
          </div>
          <div className="mb-6 flex justify-between font-mono text-xs uppercase tracking-[0.12em]">
            {copy.months.map((month, i) => (
              <span
                key={month}
                style={{
                  color: progress >= i * 50 ? MINT : INK_DIM,
                  transition: "color 0.35s ease",
                }}
              >
                {month}
              </span>
            ))}
          </div>

          <ul className="space-y-3">
            {copy.milestones.map((milestone, i) => {
              const done = phase >= i + 1;
              return (
                <li key={milestone} className="flex items-center gap-3 text-sm text-foreground">
                  <span
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor: done ? MINT : LINE,
                      background: done ? "hsl(var(--noreja-tertiary) / 0.15)" : "transparent",
                      transition: "background 0.35s ease, border-color 0.35s ease",
                    }}
                  >
                    <Check
                      className="h-3.5 w-3.5"
                      style={{
                        color: MINT,
                        opacity: done ? 1 : 0,
                        transform: done ? "scale(1)" : "scale(0.4)",
                        transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </span>
                  <span className={cn("transition-opacity duration-300", done ? "opacity-100" : "opacity-60")}>
                    {milestone}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Phase 2: the decision and the fork. Desktop draws it sideways… */}
        <div ref={forkRef} className="relative hidden md:block" aria-hidden="true">
          <svg
            viewBox={`0 0 150 ${forkHeight}`}
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <path d={`${inPath} ${upPath} ${downPath}`} fill="none" stroke={LINE} strokeWidth="1.5" strokeDasharray="4 5" />
            <DrawPath d={inPath} drawn={decided} color={MINT} instant={reset} />
            <DrawPath d={upPath} drawn={branched} color={MINT} instant={reset} />
            <DrawPath d={downPath} drawn={branched} color={INK_DIM} instant={reset} />
          </svg>
          <DecisionNode active={decided} pulse={phase === 4} className="absolute left-[38px] top-1/2 -translate-y-1/2" />
          <div className="absolute left-0 top-[calc(50%+36px)] w-[132px] text-center">
            <p className="text-sm font-semibold text-foreground">{copy.decisionTitle}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{copy.decisionSub}</p>
          </div>
        </div>

        {/* …mobile stacks it vertically. */}
        <div className="flex flex-col items-center py-3 md:hidden" aria-hidden="true">
          <span
            className="h-8 w-0.5 origin-top rounded-full"
            style={{
              background: decided ? MINT : LINE,
              transition: "background 0.35s ease",
            }}
          />
          <DecisionNode active={decided} pulse={phase === 4} className="my-2" />
          <p className="text-sm font-semibold text-foreground">{copy.decisionTitle}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{copy.decisionSub}</p>
          <span
            className="mt-2 h-8 w-0.5 rounded-full"
            style={{
              background: branched ? MINT : LINE,
              transition: "background 0.35s ease",
            }}
          />
        </div>

        {/* Phase 3: the two outcomes */}
        <div className="grid grid-rows-2 gap-4">
          <OutcomeCard
            icon={BadgeCheck}
            label={copy.continueLabel}
            title={copy.continueTitle}
            price={copy.continuePrice}
            text={copy.continueText}
            tag={copy.continueTag}
            active={branched}
            highlight
          />
          <OutcomeCard
            icon={LogOut}
            label={copy.optOutLabel}
            title={copy.optOutTitle}
            price={copy.optOutPrice}
            text={copy.optOutText}
            active={branched}
          />
        </div>
      </div>

      {/* What the setup means for the customer */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {copy.benefits.map((benefit, i) => {
          const Icon = BENEFIT_ICONS[i] ?? ShieldCheck;
          return (
            <div
              key={benefit.title}
              className="flex gap-3 rounded-2xl border border-border/50 bg-card/60 p-5 backdrop-blur-sm"
            >
              <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: MINT }} />
              <div>
                <p className="mb-1 text-sm font-semibold text-foreground">{benefit.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const DecisionNode = ({
  active,
  pulse,
  className,
}: {
  active: boolean;
  pulse: boolean;
  className?: string;
}) => (
  <div className={cn("relative h-14 w-14", className)}>
    {pulse && (
      <span
        className="absolute inset-0 animate-ping rounded-full"
        style={{ background: "hsl(var(--noreja-tertiary) / 0.35)" }}
      />
    )}
    <span
      className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 bg-card"
      style={{
        borderColor: active ? MINT : LINE,
        boxShadow: active ? `0 0 22px hsl(var(--noreja-tertiary) / 0.45)` : "none",
        transition: "border-color 0.35s ease, box-shadow 0.5s ease",
      }}
    >
      <GitFork
        className="h-6 w-6 md:rotate-90"
        style={{ color: active ? MINT : INK_DIM, transition: "color 0.35s ease" }}
      />
    </span>
  </div>
);

const OutcomeCard = ({
  icon: Icon,
  label,
  title,
  price,
  text,
  tag,
  active,
  highlight = false,
}: {
  icon: typeof BadgeCheck;
  label: string;
  title: string;
  price: string;
  text: string;
  tag?: string;
  active: boolean;
  highlight?: boolean;
}) => {
  const accent = highlight ? MINT : INK_DIM;
  return (
    <div
      className="flex flex-col justify-center rounded-2xl border bg-card/80 p-5 backdrop-blur-sm"
      style={{
        borderColor: active && highlight ? "hsl(var(--noreja-tertiary) / 0.6)" : LINE,
        boxShadow: active && highlight ? "0 0 32px hsl(var(--noreja-tertiary) / 0.18)" : "none",
        opacity: active ? 1 : 0.55,
        transform: active ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease, box-shadow 0.6s ease",
      }}
    >
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4" style={{ color: accent }} />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: accent }}>
          {label}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className={cn("mb-2 text-base font-bold", !highlight && "text-foreground")} style={{ color: highlight ? MINT : undefined }}>
        {price}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
      {tag && (
        <span
          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
          style={{ background: "hsl(var(--noreja-tertiary) / 0.12)", color: MINT }}
        >
          <Check className="h-3 w-3" />
          {tag}
        </span>
      )}
    </div>
  );
};
