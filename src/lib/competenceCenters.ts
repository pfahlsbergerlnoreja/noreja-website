import type { Language } from './translations';
import type { CompetenceCityId, CompetenceStateId } from './competenceCenterIndex';
import { hub } from './competenceCenters/hub';
import { badenWuerttemberg } from './competenceCenters/badenWuerttemberg';
import { bayern } from './competenceCenters/bayern';
import { freiburg } from './competenceCenters/freiburg';
import { stuttgart } from './competenceCenters/stuttgart';
import { karlsruhe } from './competenceCenters/karlsruhe';
import { mannheim } from './competenceCenters/mannheim';
import { muenchen } from './competenceCenters/muenchen';
import { augsburg } from './competenceCenters/augsburg';

type Localized = Record<Language, string>;

export interface CompetenceCard {
  title: string;
  text: string;
}

/** End-to-end processes with a page of their own under /de/prozesse. */
export type CompetenceProcessId = 'order-to-cash' | 'purchase-to-pay' | 'lead-to-activation' | 'premium-to-tax';

/**
 * Copy of one Kompetenzcenter page.
 *
 * Every page carries its own regional text, industries and FAQ: local landing
 * pages that only swap the city name count as doorway pages for Google, so the
 * parts that differ have to be real. Shared copy (how a project runs, the
 * services) lives in the page component. Claims stay verifiable: no customer
 * names that are not on the site, no statistics about the regions.
 */
export interface CompetencePageContent {
  /** Full <title>, without the "| Noreja" suffix. */
  metaTitle: Localized;
  metaDescription: Localized;
  h1: Localized;
  /** Answer-first intro under the H1, three sentences at most. */
  intro: Localized;
  /** One line for the cards on the hub and state pages. */
  teaser: Localized;
  /** The regional economy and its Mittelstand. */
  region: Record<Language, { title: string; paragraphs: string[] }>;
  /** Three or four industries of the region, each with what we do there. */
  industries: Record<Language, CompetenceCard[]>;
  faq: Array<{ question: Localized; answer: Localized }>;
  /** Further reading on the site (definitions, battle cards, success stories). */
  related?: Array<{ label: Localized; path: Localized }>;
}

export interface CompetenceCityContent extends CompetencePageContent {
  id: CompetenceCityId;
  /** How we are on site there: location, partner, travel. */
  presence: Record<Language, CompetenceCard>;
  /** Districts and towns around the city that we serve from it. */
  surroundings: Record<Language, string[]>;
  /** End-to-end processes that matter most there, and why. */
  processes: Array<{ id: CompetenceProcessId; text: Localized }>;
  /** Partner from the partner page with whom we approach and serve customers there. */
  localPartner?: { id: CompetencePartnerId; text: Localized };
}

/** Partners with a logo block on a city page; logos and links live in the page component. */
export type CompetencePartnerId = 'miragon' | 'kbc';

export interface CompetenceStateContent extends CompetencePageContent {
  id: CompetenceStateId;
  /** Places beyond the city pages where we work too. */
  moreCities: Record<Language, string[]>;
  /** Customers from the state with a page or mention on the site. */
  references?: Array<{ name: string; text: Localized; successStoryId?: string }>;
}

export type CompetenceHubContent = CompetencePageContent;

export const competenceHub: CompetenceHubContent = hub;

export const competenceStateContent: Record<CompetenceStateId, CompetenceStateContent> = {
  'baden-wuerttemberg': badenWuerttemberg,
  bayern,
};

export const competenceCityContent: Record<CompetenceCityId, CompetenceCityContent> = {
  freiburg,
  stuttgart,
  karlsruhe,
  mannheim,
  muenchen,
  augsburg,
};
