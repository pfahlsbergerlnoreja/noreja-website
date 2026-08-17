import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { LoopLedgerHub } from "@/components/platform/LoopLedgerHub";
import { PhaseRing } from "@/components/platform/PhaseRing";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLoopLedger } from "@/hooks/use-loop-motion";
import { homeTeaserCopy, loopPhases } from "@/lib/platformLoop";
import { getRoutePath } from "@/lib/routes";

const MINT = "hsl(var(--noreja-tertiary))";

const ADVANCE_MS = 4200;
/** How long auto-advance stays off after the visitor picks a phase themselves. */
const RESUME_AFTER_MS = 14000;

/**
 * Homepage teaser for the platform loop. Shows the same ring as the platform
 * page, cycling through the four phases, and links onward.
 */
export function LoopTeaser() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

  const [active, setActive] = useState(0);
  const [pausedUntil, setPausedUntil] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Advance only while the section is on screen, so visitors always arrive at phase 1,
  // and never while the visitor is steering the loop themselves.
  useEffect(() => {
    if (reduced || !inView || pausedUntil) return;
    const id = window.setInterval(() => {
      setElapsed((e) => {
        if (e + 100 < ADVANCE_MS) return e + 100;
        setActive((i) => (i + 1) % loopPhases.length);
        return 0;
      });
    }, 100);
    return () => window.clearInterval(id);
  }, [reduced, inView, pausedUntil]);

  // Re-arm auto-advance once the pause window has passed.
  useEffect(() => {
    if (!pausedUntil) return;
    const id = window.setTimeout(() => setPausedUntil(0), RESUME_AFTER_MS);
    return () => window.clearTimeout(id);
  }, [pausedUntil]);

  const select = useCallback((index: number) => {
    setActive(index);
    setElapsed(0);
    setPausedUntil(Date.now());
  }, []);

  const phase = loopPhases[active];
  const paused = pausedUntil !== 0;
  const ledger = useLoopLedger(active, loopPhases.length, !paused);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p
            className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.22em]"
            style={{ color: MINT }}
          >
            {homeTeaserCopy.eyebrow[language]}
          </p>
          <h2 className="mb-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {homeTeaserCopy.headline[language]}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {homeTeaserCopy.headlineHighlight[language]}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">{homeTeaserCopy.lede[language]}</p>
        </motion.div>

        {/* Ring + active phase */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[360px]"
          >
            <PhaseRing
              activeIndex={active}
              labels={loopPhases.map((p) => p.name[language])}
              hub={<LoopLedgerHub ledger={ledger} />}
              onNodeClick={select}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div
              className="relative overflow-hidden rounded-2xl border p-6 lg:p-8"
              style={{
                borderColor: "hsl(var(--border))",
                background: "linear-gradient(160deg, hsl(var(--secondary)), hsl(var(--card)))",
                boxShadow: "0 30px 70px -40px hsl(var(--noreja-main) / 0.8)",
              }}
            >
              {/* min-height keeps the card from jumping as phases swap */}
              <div className="min-h-[290px] sm:min-h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-[0.16em]"
                        style={{
                          color: MINT,
                          borderColor: "hsl(var(--noreja-tertiary) / 0.35)",
                          background: "hsl(var(--noreja-tertiary) / 0.06)",
                        }}
                      >
                        {String(active + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {phase.name[language]}
                      </h3>
                    </div>

                    <p className="font-mono text-[0.8rem] text-muted-foreground">
                      {phase.question[language]}
                    </p>

                    <p className="leading-relaxed text-muted-foreground">{phase.lede[language]}</p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {phase.capabilities.map((capability) => (
                        <span
                          key={capability.title.en}
                          className="rounded-lg border px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground"
                          style={{ borderColor: "hsl(var(--border))" }}
                        >
                          {capability.title[language]}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Phase progress — doubles as the phase picker */}
              <div className="mt-6 flex gap-2">
                {loopPhases.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => select(i)}
                    aria-label={p.name[language]}
                    aria-current={i === active}
                    className="group h-1.5 flex-1 overflow-hidden rounded-full"
                    style={{ background: "hsl(var(--border))" }}
                  >
                    <span
                      className="block h-full rounded-full transition-[width] duration-100 ease-linear"
                      style={{
                        background: MINT,
                        width:
                          i < active
                            ? "100%"
                            : i === active
                              ? reduced || paused
                                ? "100%"
                                : `${Math.round((elapsed / ADVANCE_MS) * 100)}%`
                              : "0%",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gradient-primary glow-primary group">
                <Link to={getRoutePath("functionalities", language)}>
                  {homeTeaserCopy.cta[language]}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <span className="font-mono text-[0.72rem] text-muted-foreground">
                {homeTeaserCopy.ctaHint[language]}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
