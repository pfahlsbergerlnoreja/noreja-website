import type { Language } from './translations';
import type { AgentId } from './agentSlugs';
import { recordToReport } from './processProfiles/recordToReport';
import { hireToRetire } from './processProfiles/hireToRetire';
import { quoteToCash } from './processProfiles/quoteToCash';
import { sourceToContract } from './processProfiles/sourceToContract';
import { acquireToRetire } from './processProfiles/acquireToRetire';
import { ideaToMarket } from './processProfiles/ideaToMarket';
import { issueToResolution } from './processProfiles/issueToResolution';
import { forecastToPlan } from './processProfiles/forecastToPlan';
import { projectToProfit } from './processProfiles/projectToProfit';
import { requestToFulfill } from './processProfiles/requestToFulfill';

/**
 * Process profiles: short landing pages for end-to-end processes without a
 * demo case of their own (Record-to-Report, Hire-to-Retire, …).
 *
 * They share the URL space of the demo cases (/de/prozesse/:processSlug), but
 * describe the process in general – scope, phases, objects, KPIs, typical
 * problems – instead of findings from a dataset. That is why they carry no
 * figures: a profile states what can be measured, not what was measured.
 *
 * One file per profile under src/lib/processProfiles/. The sitemap
 * (scripts/generate-sitemap.ts) reads the `id` lines of those files, the page
 * meta (src/lib/pageMeta.ts) and the page (src/pages/ProcessProfile.tsx) read
 * this array. Adding a profile: add its file and list it below.
 */

/** Slugs of the demo cases in src/lib/endToEndProcesses.ts, for cross-links. */
export type DemoCaseId = 'order-to-cash' | 'purchase-to-pay' | 'plan-to-produce' | 'lead-to-activation' | 'premium-to-tax';

export interface ProcessProfileContent {
  /** Full <title>, including the "| Noreja" suffix. */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Business area, shown as badge and as eyebrow on the overview card. */
  area: string;
  /** Sub-headline under the H1. */
  tagline: string;
  /** One sentence for the card on the overview page. */
  teaser: string;
  /** Answer-first definition – the paragraph answer engines quote. */
  definition: string;
  /** Other names and abbreviations of the process. */
  aliases: string[];
  /** Triggering event and result that matters. */
  scope: { start: string; end: string };
  /** Three to five phases, each with its typical steps. */
  phases: Array<{ title: string; text: string; steps: string[] }>;
  /** Business objects the process leaves in the source systems. */
  objects: Array<{ name: string; text: string }>;
  /** Typical source systems, generic categories plus common products. */
  systems: string[];
  /** KPIs that can be measured on the process – names and meaning, no values. */
  kpis: Array<{ name: string; text: string }>;
  /** Typical problem patterns a process analysis finds. */
  challenges: Array<{ title: string; text: string }>;
  /** Business questions Noreja answers on this process. */
  questions: string[];
  /** Why this process needs more than a flat event log – two short paragraphs. */
  approach: string[];
  faq: Array<{ question: string; answer: string }>;
}

export interface ProcessProfile {
  id: string;
  /** Process name, used as the H1 in both languages. */
  name: string;
  abbreviation: string;
  /** ISO date of the last content change, for the Article schema. */
  dateModified: string;
  /** Demo cases that border on this process (shared objects, hand-overs). */
  relatedCases: DemoCaseId[];
  /** Agents of the Minerva Agent Library that fit the typical questions. */
  agents: AgentId[];
  content: Record<Language, ProcessProfileContent>;
}

/** Order on the overview page: the most widely used processes first. */
export const processProfiles: ProcessProfile[] = [
  recordToReport,
  hireToRetire,
  quoteToCash,
  sourceToContract,
  acquireToRetire,
  ideaToMarket,
  issueToResolution,
  forecastToPlan,
  projectToProfit,
  requestToFulfill,
];

export function getProcessProfileById(id: string): ProcessProfile | undefined {
  return processProfiles.find((profile) => profile.id === id.toLowerCase());
}
