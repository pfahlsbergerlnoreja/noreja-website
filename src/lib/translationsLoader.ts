import type { Language, Translations } from './translations';

/**
 * The UI copy of one language at a time. Both languages together are ~86 kB
 * that every page used to download and parse before it rendered, while a
 * visitor only ever sees one. main.tsx loads the language of the URL before
 * mounting the app (scripts/prerender.ts modulepreloads that chunk), and
 * LanguageContext loads the other one when the visitor switches.
 *
 * Code that needs both synchronously — the prerender, the tests — seeds the
 * cache with seedTranslations() from the full `translations` object instead.
 */
const loaded: Partial<Record<Language, Translations>> = {};
const pending: Partial<Record<Language, Promise<Translations>>> = {};

const importers: Record<Language, () => Promise<Translations>> = {
  de: () => import('./i18n/de').then((module) => module.de),
  en: () => import('./i18n/en').then((module) => module.en),
};

export function getLoadedTranslations(language: Language): Translations | undefined {
  return loaded[language];
}

export function loadTranslations(language: Language): Promise<Translations> {
  if (loaded[language]) return Promise.resolve(loaded[language]!);
  pending[language] ??= importers[language]().then((copy) => (loaded[language] = copy));
  return pending[language]!;
}

export function seedTranslations(all: Record<Language, Translations>): void {
  Object.assign(loaded, all);
}
