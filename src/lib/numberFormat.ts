import type { Language } from "./translations";

/*
 * Number formatting shared by the Cost-of-Inaction calculator and the platform
 * loop teaser on the home page. It lives apart from costOfInaction.ts so the
 * home page can format euros without pulling the calculator's ~27 kB of
 * benchmark data into the main bundle.
 */

export const localeFor = (language: Language) => (language === "de" ? "de-DE" : "en-US");

export const formatEuro = (value: number, language: Language): string =>
  new Intl.NumberFormat(localeFor(language), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export const formatEuroCompact = (value: number, language: Language): string =>
  new Intl.NumberFormat(localeFor(language), {
    style: "currency",
    currency: "EUR",
    notation: "compact",
    maximumFractionDigits: value >= 1_000_000 ? 2 : 0,
  }).format(value);

export const formatNumber = (value: number, language: Language): string =>
  new Intl.NumberFormat(localeFor(language), { maximumFractionDigits: 0 }).format(value);
