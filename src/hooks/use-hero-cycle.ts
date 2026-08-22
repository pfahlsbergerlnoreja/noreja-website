import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * A monotonically increasing tick for the hero visuals.
 *
 * Deliberately unbounded rather than `% nodeCount`: the visuals rotate a dash
 * around a closed path, and a wrapping index makes that dash spin *backwards*
 * on every lap. An ever-growing step keeps the motion going one way, and the
 * visuals derive both the active node (`step % nodes`) and the completed lap
 * count (`Math.floor(step / nodes)`) from it.
 *
 * With reduced motion the counter never starts and sits at `settledStep`, so
 * the graphic shows a meaningful mid-story state instead of an empty frame.
 */
export const useHeroCycle = (intervalMs = 2200, settledStep = 18) => {
  const [step, setStep] = useState(() => (prefersReducedMotion() ? settledStep : 0));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setStep((s) => s + 1), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  return step;
};
