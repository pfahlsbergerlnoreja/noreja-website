import type { Language } from './translations';

/**
 * The "Top 10 … 2027" rankings below the Battle Cards
 * (/de/battle-cards/top-10/:slug).
 *
 * Kept apart from the list content (src/lib/topTen/*.ts) on purpose: the
 * Battle Cards hub and the sitemap only need the slugs and titles, and the
 * content of all five lists would otherwise land in the hub's chunk.
 *
 * The year lives in the titles, not in the slugs, so a list can be moved to
 * the next year without changing its URL. Moving to a new year: bump
 * TOP_TEN_YEAR and TOP_TEN_UPDATED, then review the content files — the
 * intros, trends and FAQ mention the year in their copy.
 */
export const TOP_TEN_YEAR = 2027;

/** Editorial date of the current edition, shown on the pages and in the schema. */
export const TOP_TEN_UPDATED = '2026-10-25';

export const topTenIndex = [
  {
    id: 'process-mining-tools',
    title: {
      de: `Top 10 Process Mining Tools ${TOP_TEN_YEAR}`,
      en: `Top 10 Process Mining Tools ${TOP_TEN_YEAR}`,
    },
    teaser: {
      de: 'Die führenden Process-Mining-Werkzeuge im Vergleich – von Celonis bis Disco.',
      en: 'The leading process mining tools compared – from Celonis to Disco.',
    },
  },
  {
    id: 'process-intelligence-platforms',
    title: {
      de: `Top 10 Process-Intelligence-Plattformen ${TOP_TEN_YEAR}`,
      en: `Top 10 Process Intelligence Platforms ${TOP_TEN_YEAR}`,
    },
    teaser: {
      de: 'Plattformen, die Process Mining mit Kontext, KI und Umsetzung verbinden.',
      en: 'Platforms that combine process mining with context, AI and execution.',
    },
  },
  {
    id: 'celonis-alternatives',
    title: {
      de: `Top 10 Celonis-Alternativen ${TOP_TEN_YEAR}`,
      en: `Top 10 Celonis Alternatives ${TOP_TEN_YEAR}`,
    },
    teaser: {
      de: 'Wann sich eine Alternative zu Celonis lohnt – und welche zu welchem Bedarf passt.',
      en: 'When an alternative to Celonis makes sense – and which one fits which need.',
    },
  },
  {
    id: 'process-intelligence-agents',
    title: {
      de: `Top 10 Process Intelligence Agents ${TOP_TEN_YEAR}`,
      en: `Top 10 Process Intelligence Agents ${TOP_TEN_YEAR}`,
    },
    teaser: {
      de: 'Die zehn KI-Agenten, die Prozessanalyse 2027 tragen – von Ursachen bis Working Capital.',
      en: 'The ten AI agents that will carry process analysis in 2027 – from root causes to working capital.',
    },
  },
  {
    id: 'ai-process-mining-tools',
    title: {
      de: `Top 10 KI-Tools für Process Mining ${TOP_TEN_YEAR}`,
      en: `Top 10 AI Process Mining Tools ${TOP_TEN_YEAR}`,
    },
    teaser: {
      de: 'Copilots, Agenten und MCP: welche Process-Mining-Tools KI wirklich nutzbar machen.',
      en: 'Copilots, agents and MCP: which process mining tools make AI genuinely usable.',
    },
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: Record<Language, string>;
  teaser: Record<Language, string>;
}>;

export type TopTenId = (typeof topTenIndex)[number]['id'];

export const getTopTenIndexEntry = (id: string) => topTenIndex.find((list) => list.id === id);
