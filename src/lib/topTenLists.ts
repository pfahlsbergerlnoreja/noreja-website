import type { Language } from './translations';
import type { AgentId } from './agentSlugs';
import type { TopTenId } from './topTenIndex';
import { processMiningTools } from './topTen/processMiningTools';
import { processIntelligencePlatforms } from './topTen/processIntelligencePlatforms';
import { celonisAlternatives } from './topTen/celonisAlternatives';
import { processIntelligenceAgents } from './topTen/processIntelligenceAgents';
import { aiProcessMiningTools } from './topTen/aiProcessMiningTools';

type Localized = Record<Language, string>;

/**
 * One ranked entry of a Top-10 list.
 *
 * Copy is written per list: the same vendor appears in several lists, and each
 * list describes it from its own angle (mining depth, platform scope, AI) so
 * the pages do not repeat each other. Claims about other vendors stay
 * verifiable and cautious, like the battle cards: no customer numbers, no
 * prices, vendor statements marked as such.
 */
export interface TopTenEntry {
  /** Product or agent name; a plain string when it is the same in both languages. */
  name: string | Localized;
  /** Company behind the product, when the product name does not already say it. */
  vendor?: string;
  /** "Best for …" in a few words, shown in the overview table. */
  bestFor: Localized;
  /** Two to three sentences, written for this list. */
  summary: Localized;
  /** Three concrete strengths in the context of this list. */
  highlights: Record<Language, string[]>;
  /** One honest limitation or caveat. */
  consider: Localized;
  /** Battle card id, rendered as a "Noreja vs. X" link. */
  battleCardId?: string;
  /** Minerva agent, rendered as a link to its agent page. */
  agentId?: AgentId;
  /** Glossary slug, rendered as a "What is …?" link. */
  definitionId?: string;
  /** Noreja's own entry, highlighted on the page. */
  isNoreja?: boolean;
}

export interface TopTenContent {
  id: TopTenId;
  /** Full <title>, without the "| Noreja" suffix. */
  metaTitle: Localized;
  metaDescription: Localized;
  /** Answer-first intro under the H1, three to four sentences. */
  intro: Localized;
  /** How the list was ranked, four criteria. */
  criteria: Record<Language, Array<{ title: string; text: string }>>;
  /** Exactly ten, in rank order. */
  entries: TopTenEntry[];
  /** What changes in the list's year, three items. */
  trends: Record<Language, Array<{ title: string; text: string }>>;
  faq: Array<{ question: Localized; answer: Localized }>;
}

export const topTenLists: TopTenContent[] = [
  processMiningTools,
  processIntelligencePlatforms,
  celonisAlternatives,
  processIntelligenceAgents,
  aiProcessMiningTools,
];

export const getTopTenList = (id: string): TopTenContent | undefined =>
  topTenLists.find((list) => list.id === id);

export const getEntryName = (entry: TopTenEntry, language: Language): string =>
  typeof entry.name === 'string' ? entry.name : entry.name[language];
