import type { Language } from "./translations";

type Localized = Record<Language, string>;
type LocalizedList = Record<Language, string[]>;

/**
 * Copy for the four platform-style heroes (home, pricing, partners, success
 * stories). Kept beside `platformLoop.ts` rather than in `translations.ts`
 * because it belongs to one design, and the hero words double as labels inside
 * the accompanying graphic — the two must never drift apart.
 */

/* ------------------------------------------------------------------ *
 * Home — competitiveness triangle
 * ------------------------------------------------------------------ */

export const homeHero = {
  eyebrow: {
    de: "Generative Process Intelligence",
    en: "Generative Process Intelligence",
  } satisfies Localized,
  headingLead: {
    de: "Noreja schafft im Prozessmanagement",
    en: "In process management, Noreja delivers",
  } satisfies Localized,
  /** Also the three corners of the triangle. Order matters. */
  words: {
    de: ["Transparenz", "Effizienz", "Compliance"],
    en: ["Transparency", "Efficiency", "Compliance"],
  } satisfies LocalizedList,
  ledeBefore: {
    de: "Verborgene Prozesspotenziale mit der Kraft von GenAI heben und zum ",
    en: "Surface hidden process potential with the power of GenAI and turn it into a ",
  } satisfies Localized,
  ledeStrong: {
    de: "kontinuierlichen ROI-Treiber",
    en: "continuous ROI engine",
  } satisfies Localized,
  ledeAfter: {
    de: " machen.",
    en: ".",
  } satisfies Localized,
  ctaPrimary: { de: "Demo buchen", en: "Book a demo" } satisfies Localized,
  ctaSecondary: { de: "Plattform ansehen", en: "See the platform" } satisfies Localized,
  trust: {
    de: ["Kausales Prozessmodell", "Agentische Analyse", "Messbarer ROI"],
    en: ["Causal process model", "Agentic analysis", "Measurable ROI"],
  } satisfies LocalizedList,
};

/** Labels inside the triangle. */
export const competitivenessCopy = {
  metric: { de: "Wettbewerbsfähigkeit", en: "Competitiveness" } satisfies Localized,
  iteration: { de: "Durchlauf", en: "Iteration" } satisfies Localized,
  tiers: {
    de: ["unter Durchschnitt", "im Durchschnitt", "über Durchschnitt", "führend"],
    en: ["below average", "average", "above average", "leading"],
  } satisfies LocalizedList,
};

/* ------------------------------------------------------------------ *
 * Pricing — staircase
 * ------------------------------------------------------------------ */

export const pricingHero = {
  eyebrow: { de: "Preise & Pakete", en: "Pricing & plans" } satisfies Localized,
  headingLead: {
    de: "Noreja bietet drei Pakete",
    en: "Noreja offers three plans",
  } satisfies Localized,
  /** Also the three steps of the staircase, bottom to top. */
  words: {
    de: ["Core", "Pro", "Excellence"],
    en: ["Core", "Pro", "Excellence"],
  } satisfies LocalizedList,
  ledeBefore: {
    de: "Wähle das Paket, das zu deinen Bedürfnissen passt — ",
    en: "Pick the plan that fits what you need — ",
  } satisfies Localized,
  ledeStrong: {
    de: "der Wechsel nach oben ist jederzeit möglich",
    en: "moving up a tier is possible at any time",
  } satisfies Localized,
  ledeAfter: {
    de: ". Datenmenge, Prozessperspektiven und KI-Funktionen skalieren mit, die Preislogik bleibt dieselbe.",
    en: ". Data volume, process perspectives and AI features scale with you; the pricing logic stays the same.",
  } satisfies Localized,
  ctaPrimary: { de: "Demo buchen", en: "Book a demo" } satisfies Localized,
  ctaSecondary: { de: "Pakete vergleichen", en: "Compare plans" } satisfies Localized,
  trust: {
    de: ["3 Pakete", "Proof of Value zum Fixpreis", "Upgrade jederzeit"],
    en: ["3 plans", "Fixed-price proof of value", "Upgrade any time"],
  } satisfies LocalizedList,
  /** Axis captions on the staircase. */
  axisLeistung: { de: "Leistungsumfang", en: "Capability" } satisfies Localized,
  axisPaket: { de: "Paket", en: "Plan" } satisfies Localized,
};

/* ------------------------------------------------------------------ *
 * Partners — network graph
 * ------------------------------------------------------------------ */

export const partnersHero = {
  eyebrow: { de: "Partnernetzwerk", en: "Partner network" } satisfies Localized,
  headingLead: {
    de: "Noreja setzt bei Partnerschaften auf",
    en: "In partnerships, Noreja relies on",
  } satisfies Localized,
  words: {
    de: ["Vertrauen", "Konstanz", "Augenhöhe"],
    en: ["Trust", "Consistency", "As equals"],
  } satisfies LocalizedList,
  ledeBefore: {
    de: "Technologie-, Beratungs-, Industrie- und Forschungspartner, die Noreja-Projekte gemeinsam mit uns umsetzen — ",
    en: "Technology, consulting, industry and research partners who deliver Noreja projects together with us — ",
  } satisfies Localized,
  ledeStrong: {
    de: "vom Proof of Value bis zum Rollout",
    en: "from proof of value to rollout",
  } satisfies Localized,
  ledeAfter: {
    de: ".",
    en: ".",
  } satisfies Localized,
  ctaPrimary: { de: "Partner werden", en: "Become a partner" } satisfies Localized,
  ctaSecondary: { de: "Success Stories ansehen", en: "See success stories" } satisfies Localized,
  /** Readout under the graph. */
  connections: { de: "Verbindungen", en: "Connections" } satisfies Localized,
};

/* ------------------------------------------------------------------ *
 * Success stories — results curve
 * ------------------------------------------------------------------ */

export const successHero = {
  eyebrow: { de: "Success Stories", en: "Success stories" } satisfies Localized,
  headingLead: {
    de: "Noreja fokussiert sich mit Kunden auf",
    en: "With customers, Noreja focuses on",
  } satisfies Localized,
  /** Also the three blocks of the stack, base first. */
  words: {
    de: ["Vertrauen", "Professionalität", "Schnelligkeit"],
    en: ["Trust", "Professionalism", "Speed"],
  } satisfies LocalizedList,
  ledeBefore: {
    de: "Wie andere Unternehmen mit Noreja schneller werden, effizienter arbeiten und datengetrieben bleiben — ",
    en: "How other companies move faster with Noreja, work more efficiently and stay data-driven — ",
  } satisfies Localized,
  ledeStrong: {
    de: "mit gerechnetem Effekt statt Absichtserklärung",
    en: "with a calculated effect instead of a statement of intent",
  } satisfies Localized,
  ledeAfter: {
    de: ".",
    en: ".",
  } satisfies Localized,
  ctaPrimary: { de: "Demo buchen", en: "Book a demo" } satisfies Localized,
  ctaSecondary: { de: "Use Cases ansehen", en: "See use cases" } satisfies Localized,
  /** Caption beside the base block. */
  foundation: { de: "Basis", en: "Foundation" } satisfies Localized,
};
