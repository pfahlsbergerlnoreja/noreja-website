/**
 * Shared vocabulary for the hero visuals, so the four of them read as one
 * family with the platform page's PhaseRing.
 *
 * Brand colours must be written as `hsl(var(--noreja-*) / a)`. The `noreja-*`
 * Tailwind colour utilities resolve to bare HSL components (`256 77% 56%`)
 * and therefore produce invalid CSS.
 */

export const MINT = "hsl(var(--noreja-tertiary))";
export const BRAND = "hsl(var(--noreja-main))";
export const BRAND_2 = "hsl(var(--noreja-secondary))";
export const INK = "hsl(var(--foreground))";
export const INK_DIM = "hsl(var(--muted-foreground))";
export const LINE = "hsl(var(--border))";
export const CARD = "hsl(var(--card))";

/** Tier colours for the competitiveness readout. No token exists for amber. */
export const RED = "hsl(var(--destructive))";
export const AMBER = "hsl(38 92% 56%)";

/** The mono uppercase label used on every axis, node and caption. */
export const labelStyle = (size = 11.5, tracking = "0.15em") => ({
  fontSize: `${size}px`,
  letterSpacing: tracking,
  transition: "fill 0.35s ease",
});

/** The big tabular readout in the centre of a visual. */
export const readoutStyle = (size = 30) => ({
  fontSize: `${size}px`,
  letterSpacing: "-0.03em",
  fontVariantNumeric: "tabular-nums" as const,
  transition: "fill 0.6s ease",
});

/** The transition used wherever a node or edge switches state. */
export const SWITCH = "fill 0.35s ease, stroke 0.35s ease, opacity 0.5s ease";
