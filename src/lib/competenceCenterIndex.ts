import type { Language } from './translations';

/**
 * The "Kompetenzcenter Process Intelligence Süddeutschland" pages: one hub
 * (/de/kompetenzcenter), one page per state (/de/kompetenzcenter/bayern) and
 * one per city (/de/kompetenzcenter/bayern/muenchen).
 *
 * Kept apart from the page copy (src/lib/competenceCenters/*.ts) on purpose:
 * the footer, the router helpers and the sitemap only need slugs and names,
 * and the footer is part of the main bundle.
 *
 * Slugs differ per language where the name does (bayern / bavaria,
 * muenchen / munich), so translateRoute() maps them through this index.
 */

type Localized = Record<Language, string>;

export const competenceStates = [
  {
    id: 'baden-wuerttemberg',
    slug: { de: 'baden-wuerttemberg', en: 'baden-wuerttemberg' },
    name: { de: 'Baden-Württemberg', en: 'Baden-Württemberg' },
  },
  {
    id: 'bayern',
    slug: { de: 'bayern', en: 'bavaria' },
    name: { de: 'Bayern', en: 'Bavaria' },
  },
] as const satisfies ReadonlyArray<{ id: string; slug: Localized; name: Localized }>;

export type CompetenceStateId = (typeof competenceStates)[number]['id'];

export const competenceCities = [
  {
    id: 'freiburg',
    state: 'baden-wuerttemberg',
    slug: { de: 'freiburg', en: 'freiburg' },
    name: { de: 'Freiburg', en: 'Freiburg' },
  },
  {
    id: 'stuttgart',
    state: 'baden-wuerttemberg',
    slug: { de: 'stuttgart', en: 'stuttgart' },
    name: { de: 'Stuttgart', en: 'Stuttgart' },
  },
  {
    id: 'karlsruhe',
    state: 'baden-wuerttemberg',
    slug: { de: 'karlsruhe', en: 'karlsruhe' },
    name: { de: 'Karlsruhe', en: 'Karlsruhe' },
  },
  {
    id: 'mannheim',
    state: 'baden-wuerttemberg',
    slug: { de: 'mannheim', en: 'mannheim' },
    name: { de: 'Mannheim', en: 'Mannheim' },
  },
  {
    id: 'muenchen',
    state: 'bayern',
    slug: { de: 'muenchen', en: 'munich' },
    name: { de: 'München', en: 'Munich' },
  },
  {
    id: 'augsburg',
    state: 'bayern',
    slug: { de: 'augsburg', en: 'augsburg' },
    name: { de: 'Augsburg', en: 'Augsburg' },
  },
] as const satisfies ReadonlyArray<{
  id: string;
  state: CompetenceStateId;
  slug: Localized;
  name: Localized;
}>;

export type CompetenceCityId = (typeof competenceCities)[number]['id'];
export type CompetenceState = (typeof competenceStates)[number];
export type CompetenceCity = (typeof competenceCities)[number];

export const competenceHubPath: Localized = {
  de: '/de/kompetenzcenter',
  en: '/en/competence-center',
};

export const getCompetenceState = (id: CompetenceStateId): CompetenceState =>
  competenceStates.find((state) => state.id === id)!;

export const getCompetenceCity = (id: CompetenceCityId): CompetenceCity =>
  competenceCities.find((city) => city.id === id)!;

/** State by its slug in either language. */
export const findCompetenceStateBySlug = (slug: string): CompetenceState | undefined =>
  competenceStates.find((state) => state.slug.de === slug || state.slug.en === slug);

/** City by its state and city slugs, each in either language. */
export const findCompetenceCityBySlugs = (
  stateSlug: string,
  citySlug: string
): CompetenceCity | undefined => {
  const state = findCompetenceStateBySlug(stateSlug);
  return competenceCities.find(
    (city) => city.state === state?.id && (city.slug.de === citySlug || city.slug.en === citySlug)
  );
};

export const getCitiesOfState = (stateId: CompetenceStateId): CompetenceCity[] =>
  competenceCities.filter((city) => city.state === stateId);

export const competenceStatePath = (id: CompetenceStateId, language: Language): string =>
  `${competenceHubPath[language]}/${getCompetenceState(id).slug[language]}`;

export const competenceCityPath = (id: CompetenceCityId, language: Language): string => {
  const city = getCompetenceCity(id);
  return `${competenceStatePath(city.state, language)}/${city.slug[language]}`;
};

/** Every page of the section, hub first, for the sitemap. */
export const competencePagePaths = (language: Language): string[] => [
  competenceHubPath[language],
  ...competenceStates.map((state) => competenceStatePath(state.id, language)),
  ...competenceCities.map((city) => competenceCityPath(city.id, language)),
];
