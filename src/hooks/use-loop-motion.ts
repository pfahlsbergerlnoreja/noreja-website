import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Cycles the hero ring through the loop phases. Stays on phase 0 if motion is reduced. */
export const useAutoPhase = (count: number, intervalMs = 2200) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs]);

  return index;
};

const GAIN_MIN = 5_000;
const GAIN_MAX = 50_000;

export interface LoopLedger {
  /** Completed passes through all four phases since the visitor arrived. */
  iterations: number;
  /** Running total of the potential found across those passes, in euros. */
  potential: number;
  /** The amount added by the most recent pass, or null before the first one. */
  lastGain: number | null;
}

/**
 * Tracks what the running loop has "found". Every time the phase index wraps
 * from the last phase back to the first, one iteration is booked and a random
 * amount between €5,000 and €50,000 is added to the running total.
 */
export const useLoopLedger = (
  phaseIndex: number,
  phaseCount: number,
  /** Set false while the visitor is steering, so manual jumps don't book a pass. */
  enabled = true,
): LoopLedger => {
  const [ledger, setLedger] = useState<LoopLedger>({
    iterations: 0,
    potential: 0,
    lastGain: null,
  });
  const previous = useRef(phaseIndex);

  useEffect(() => {
    const wrapped = previous.current === phaseCount - 1 && phaseIndex === 0;
    previous.current = phaseIndex;
    if (!wrapped || !enabled) return;

    // Rounded to full hundreds so the figure reads like a real estimate.
    const span = (GAIN_MAX - GAIN_MIN) / 100;
    const gain = GAIN_MIN + Math.round(Math.random() * span) * 100;

    setLedger((current) => ({
      iterations: current.iterations + 1,
      potential: current.potential + gain,
      lastGain: gain,
    }));
  }, [phaseIndex, phaseCount, enabled]);

  return ledger;
};

/**
 * Eases a displayed number towards `target` whenever it changes, so the running
 * total ticks up instead of jumping. Honours reduced-motion by snapping.
 */
export const useCountUp = (target: number, durationMs = 1100) => {
  const [display, setDisplay] = useState(target);
  const displayRef = useRef(target);

  useEffect(() => {
    const from = displayRef.current;
    if (from === target) return;

    if (prefersReducedMotion()) {
      displayRef.current = target;
      setDisplay(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (target - from) * eased);
      displayRef.current = value;
      setDisplay(value);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    // Safety net: animation frames are paused in hidden tabs, so without this
    // the displayed total would sit at a stale value until the tab is focused.
    const settle = window.setTimeout(() => {
      if (displayRef.current === target) return;
      displayRef.current = target;
      setDisplay(target);
    }, durationMs + 150);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
    };
  }, [target, durationMs]);

  return display;
};
