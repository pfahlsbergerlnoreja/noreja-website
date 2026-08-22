import { Fragment } from "react";
import { motion } from "framer-motion";
import { useAutoPhase } from "@/hooks/use-loop-motion";

/**
 * Brand colours must be written as `hsl(var(--noreja-*) / a)`.
 * The `noreja-*` Tailwind colour utilities resolve to bare HSL components
 * (`256 77% 56%`) and therefore produce invalid CSS.
 */
const MINT = "hsl(var(--noreja-tertiary))";

interface AnimatedHeadingProps {
  /** Static lead-in line. Carries the topic, so it must never be empty. */
  fixedText: string;
  /**
   * Words stacked underneath the lead-in, one per line. All of them are
   * rendered at all times — the animation only moves the highlight, so the
   * heading's text content is complete and stable in every frame. Pass an
   * empty array for a plain single-line heading.
   */
  rotatingWords: string[];
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: "text-3xl lg:text-4xl",
  md: "text-4xl lg:text-5xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
  xl: "text-5xl md:text-7xl"
};

/**
 * The hero H1. Mirrors the platform page's heading treatment: the words sit
 * underneath each other and a mint dot walks down the stack.
 *
 * This shape is deliberate and must not be turned back into a typewriter.
 * A per-character animation puts a partial word (and, previously, the cursor
 * glyph itself) into the H1's text node, so crawlers and the Netlify
 * prerenderer captured headings like "Make Processes Effici_". Highlighting
 * one of several always-present words keeps the animation while leaving the
 * text content untouched.
 */
export function AnimatedHeading({
  fixedText,
  rotatingWords = [],
  className = "",
  size = 'lg'
}: AnimatedHeadingProps) {
  // Guard the count: useAutoPhase modulo-divides by it.
  const activeIndex = useAutoPhase(Math.max(rotatingWords.length, 1));
  const sizeClass = sizeClasses[size];

  return (
    // Transform-only entrance (no opacity fade): the H1 is an LCP candidate,
    // and invisible text doesn't count as painted for LCP.
    <motion.h1
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      // No `leading-*` here on purpose: the Tailwind `text-*` utilities in
      // sizeClass already carry their own line-height and win the cascade, so
      // a leading class would silently do nothing. The stacked words rely on
      // that tight built-in leading.
      className={`${sizeClass} font-bold mb-4 lg:mb-6 ${className}`}
    >
      {/* The `{" "}` between the lines is load-bearing: the spans are block
          level, so the space collapses away visually, but without it
          `textContent` glues the lines into "Prozessetransparentverständlich"
          for anything that reads the heading without honouring layout. */}
      <span className="block">{fixedText}</span>{" "}

      {rotatingWords.map((word, i) => (
        <Fragment key={word}>
          <span
            className="block transition-colors duration-500"
            style={{
              color: i === activeIndex
                ? "hsl(var(--foreground))"
                : "hsl(var(--muted-foreground) / 0.55)"
            }}
          >
            {word}
            {i === activeIndex && (
              <span
                aria-hidden="true"
                className="ml-2 inline-block h-[0.22em] w-[0.22em] rounded-full align-middle"
                style={{ background: MINT, boxShadow: `0 0 18px ${MINT}` }}
              />
            )}
          </span>{" "}
        </Fragment>
      ))}
    </motion.h1>
  );
}
