import { Fragment, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { MINT } from "@/components/hero/heroVisual";

export interface HeroCta {
  label: string;
  /** Internal route. Mutually exclusive with `href`. */
  to?: string;
  /** External URL or in-page anchor. Opens in a new tab when absolute. */
  href?: string;
}

interface HeroShellProps {
  /** Mono uppercase mint line above the heading. */
  eyebrow: string;
  /** Static lead-in line of the H1. Carries the topic, so never empty. */
  headingLead: string;
  /**
   * Words stacked under the lead-in, one per line. All of them are rendered at
   * all times — only the highlight moves — so the H1's text content is
   * complete and identical in every frame.
   */
  words: string[];
  /** Index of the highlighted word. Derived from the visual's own cycle. */
  activeWord: number;
  lede: ReactNode;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** Short mono facts under the buttons. */
  trust?: string[];
  /** The graphic on the right. */
  visual: ReactNode;
  /** Background wash. Defaults to the platform page's two-lobe gradient. */
  background?: string;
}

const DEFAULT_BACKGROUND = `
  radial-gradient(ellipse 60% 50% at 22% 18%, hsl(var(--noreja-main) / 0.34), transparent 62%),
  radial-gradient(ellipse 45% 45% at 84% 62%, hsl(var(--noreja-tertiary) / 0.13), transparent 60%)
`;

const CtaButton = ({ cta, variant }: { cta: HeroCta; variant?: "outline" }) => {
  const isExternal = cta.href?.startsWith("http");
  const body = (
    <>
      {cta.label}
      {!variant && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
    </>
  );

  return (
    <Button size="lg" variant={variant} className={variant ? undefined : "group"} asChild>
      {cta.to ? (
        <Link to={cta.to}>{body}</Link>
      ) : (
        <a
          href={cta.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {body}
        </a>
      )}
    </Button>
  );
};

/**
 * The hero layout shared by the home, pricing, partners and success-stories
 * pages: left-aligned copy with a stacked-word H1, buttons underneath, and a
 * graphic on the right. Mirrors the platform page's hero so the entry points
 * of the site read as one design.
 */
export function HeroShell({
  eyebrow,
  headingLead,
  words,
  activeWord,
  lede,
  primaryCta,
  secondaryCta,
  trust,
  visual,
  background = DEFAULT_BACKGROUND,
}: HeroShellProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0" style={{ background }} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-start gap-6 lg:order-1"
        >
          <p
            className="font-mono text-[0.72rem] uppercase tracking-[0.22em]"
            style={{ color: MINT }}
          >
            {eyebrow}
          </p>

          {/* Transform-only entrance elsewhere on the page, but the H1 needs no
              fade at all: it is the LCP candidate and invisible text does not
              count as painted. */}
          <h1 className="text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-foreground lg:text-[4.6rem]">
            <span className="mb-3 block text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-muted-foreground lg:mb-5 lg:text-[1.6rem]">
              {headingLead}
            </span>{" "}
            {/* The trailing `{" "}` collapses away visually (the spans are
                block level) but stops `textContent` from gluing the lines into
                one word for anything that reads the heading without layout. */}
            {words.map((word, i) => (
              <Fragment key={word}>
                <span className="block">
                  <span
                    className="transition-colors duration-500"
                    style={{
                      color: i === activeWord
                        ? "hsl(var(--foreground))"
                        : "hsl(var(--muted-foreground) / 0.55)",
                    }}
                  >
                    {word}
                  </span>
                  {i === activeWord && (
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block h-[0.22em] w-[0.22em] rounded-full align-middle"
                      style={{ background: MINT, boxShadow: `0 0 18px ${MINT}` }}
                    />
                  )}
                </span>{" "}
              </Fragment>
            ))}
          </h1>

          <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">{lede}</p>

          <div className="flex flex-wrap items-center gap-3">
            <CtaButton cta={primaryCta} />
            {secondaryCta && <CtaButton cta={secondaryCta} variant="outline" />}
          </div>

          {trust && trust.length > 0 && (
            <p className="flex flex-wrap gap-x-[18px] gap-y-1 font-mono text-[0.74rem] tracking-[0.06em] text-muted-foreground">
              {trust.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 mx-auto w-full max-w-[440px] lg:order-2"
        >
          {visual}
        </motion.div>
      </div>
    </section>
  );
}
