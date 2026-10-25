import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { getTopTenList, getEntryName, type TopTenEntry } from '@/lib/topTenLists';
import { topTenIndex, getTopTenIndexEntry, TOP_TEN_UPDATED, TOP_TEN_YEAR } from '@/lib/topTenIndex';
import { getBattleCardVsTitle } from '@/lib/battle-cards';
import { agentSlugs } from '@/lib/agentSlugs';
import { getRoutePath } from '@/lib/routes';
import { BreadcrumbSchema, FAQSchema, StructuredData } from '@/components/StructuredData';
import { SITE_URL, SITE_NAME } from '@/lib/config';

/**
 * One "Top 10 … 2027" ranking below the Battle Cards
 * (/de/battle-cards/top-10/:slug). The lists exist mainly for search and
 * answer engines: an answer-first intro, a ranked overview table, the
 * disclosed ranking criteria, one section per entry, the outlook for the
 * year and an FAQ — with ItemList, Article and FAQPage schema.
 *
 * Content: src/lib/topTen/*.ts, titles and slugs: src/lib/topTenIndex.ts.
 */
const TopTenList = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const list = slug ? getTopTenList(slug) : undefined;
  const indexEntry = slug ? getTopTenIndexEntry(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!list || !indexEntry) {
    return <Navigate to={getRoutePath('battleCards', language)} replace />;
  }

  const title = indexEntry.title[language];
  const isAgentList = list.entries.every((entry) => entry.agentId);
  const updated = new Intl.DateTimeFormat(language === 'de' ? 'de-DE' : 'en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${TOP_TEN_UPDATED}T00:00:00Z`));

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `,
  } as const;

  const t =
    language === 'de'
      ? {
          back: 'Zurück zu den Battle Cards',
          eyebrow: `Marktübersicht ${TOP_TEN_YEAR}`,
          meta: `Stand: ${updated} · Herausgegeben von Noreja · `,
          methodLink: 'Methodik offengelegt',
          methodAnchor: 'methodik',
          overviewTitle: 'Die Top 10 auf einen Blick',
          colRank: 'Platz',
          colName: isAgentList ? 'Agent' : 'Lösung',
          colBestFor: 'Am besten für',
          criteriaTitle: 'So haben wir bewertet',
          disclosure: isAgentList
            ? `Transparenzhinweis: Diese Liste wird von Noreja herausgegeben. Die Agenten-Typen sind herstellerneutral beschrieben und jeweils mit dem passenden Agenten der Minerva Agent Library verknüpft. Stand: ${updated}.`
            : `Transparenzhinweis: Diese Rangliste wird von Noreja herausgegeben, und Noreja ist selbst Teil der Liste. Die Kriterien oben sind offengelegt und begünstigen strukturell kausale, graphbasierte Ansätze. Angaben zu anderen Anbietern beruhen auf öffentlich verfügbaren Informationen (Stand: ${updated}); Funktionsumfang und Pakete ändern sich häufig – maßgeblich ist die Dokumentation des jeweiligen Anbieters. Genannte Marken gehören ihren jeweiligen Inhabern.`,
          detailsTitle: 'Die Top 10 im Detail',
          bestForLabel: 'Am besten für',
          considerLabel: 'Zu beachten',
          vendorLabel: 'Anbieter',
          battleCardLink: 'im Detail',
          agentLink: (name: string) => `${name} in Minerva ansehen`,
          definitionLink: 'Begriff im Glossar erklärt',
          pricingLink: 'Preise ansehen',
          trendsTitle: `Was ${TOP_TEN_YEAR} entscheidet`,
          faqTitle: 'Häufige Fragen',
          otherTitle: 'Weitere Top-10-Listen',
          allBattleCards: 'Alle Battle Cards ansehen',
          ctaTitle: 'Kausale Prozessanalyse selbst erleben',
          ctaText:
            'Sieh, wie Noreja Prozesse auf einem Event Knowledge Graph kausal analysiert – jenseits frequenzbasierter Directly-Follows-Modelle.',
          ctaButton: 'Kontakt aufnehmen',
          ctaSecondary: 'Preise ansehen',
          home: 'Startseite',
        }
      : {
          back: 'Back to Battle Cards',
          eyebrow: `Market overview ${TOP_TEN_YEAR}`,
          meta: `Updated ${updated} · Published by Noreja · `,
          methodLink: 'Methodology disclosed',
          methodAnchor: 'methodology',
          overviewTitle: 'The Top 10 at a Glance',
          colRank: 'Rank',
          colName: isAgentList ? 'Agent' : 'Solution',
          colBestFor: 'Best for',
          criteriaTitle: 'How We Ranked',
          disclosure: isAgentList
            ? `Transparency note: this list is published by Noreja. The agent types are described vendor-neutrally and each is linked to the matching agent of the Minerva Agent Library. Updated ${updated}.`
            : `Transparency note: this ranking is published by Noreja, and Noreja is part of the list. The criteria above are disclosed and structurally favor causal, graph-based approaches. Information on other vendors is based on publicly available sources (as of ${updated}); feature scope and packaging change frequently – the respective vendor’s documentation is authoritative. Trademarks belong to their respective owners.`,
          detailsTitle: 'The Top 10 in Detail',
          bestForLabel: 'Best for',
          considerLabel: 'Keep in mind',
          vendorLabel: 'Vendor',
          battleCardLink: 'in detail',
          agentLink: (name: string) => `See the ${name} in Minerva`,
          definitionLink: 'Term explained in the glossary',
          pricingLink: 'View pricing',
          trendsTitle: `What Will Matter in ${TOP_TEN_YEAR}`,
          faqTitle: 'Frequently Asked Questions',
          otherTitle: 'More Top 10 Lists',
          allBattleCards: 'View all Battle Cards',
          ctaTitle: 'Experience Causal Process Analysis Yourself',
          ctaText:
            'See how Noreja analyzes processes causally on an Event Knowledge Graph – beyond frequency-based Directly-Follows models.',
          ctaButton: 'Get in touch',
          ctaSecondary: 'View pricing',
          home: 'Home',
        };

  const pageUrl = `${SITE_URL}${getRoutePath('topTenList', language, { slug: list.id })}`;
  const otherLists = topTenIndex.filter((other) => other.id !== list.id);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    description: list.intro[language],
    url: pageUrl,
    numberOfItems: list.entries.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: list.entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: getEntryName(entry, language),
      url: `${pageUrl}#rank-${index + 1}`,
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: list.metaDescription[language],
    inLanguage: language,
    mainEntityOfPage: pageUrl,
    datePublished: TOP_TEN_UPDATED,
    dateModified: TOP_TEN_UPDATED,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };

  const entryLinks = (entry: TopTenEntry) => {
    const name = getEntryName(entry, language);
    const links: Array<{ to: string; label: string }> = [];
    if (entry.battleCardId) {
      links.push({
        to: getRoutePath('battleCardDetail', language, { slug: entry.battleCardId }),
        label: `${getBattleCardVsTitle(entry.battleCardId, language)} ${t.battleCardLink}`,
      });
    }
    if (entry.agentId) {
      links.push({
        to: getRoutePath('agentDetail', language, { agentSlug: agentSlugs[entry.agentId][language] }),
        label: t.agentLink(name),
      });
    }
    if (entry.definitionId) {
      links.push({
        to: getRoutePath('definitionDetail', language, { slug: entry.definitionId }),
        label: t.definitionLink,
      });
    }
    if (entry.isNoreja) {
      links.push({ to: getRoutePath('pricing', language), label: t.pricingLink });
    }
    return links;
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <BreadcrumbSchema
        items={[
          { name: t.home, url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: 'Battle Cards', url: `${SITE_URL}${getRoutePath('battleCards', language)}` },
          { name: title, url: pageUrl },
        ]}
      />
      <StructuredData schema={itemListSchema} id="top-ten-item-list" />
      <StructuredData schema={articleSchema} id="top-ten-article" />
      <FAQSchema
        items={list.faq.map((item) => ({
          question: item.question[language],
          answer: item.answer[language],
        }))}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <article className="container mx-auto max-w-4xl px-4 py-16 md:py-20">
          <Link
            to={getRoutePath('battleCards', language)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-noreja-main/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-noreja-main mb-5">
              {t.eyebrow}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">{list.intro[language]}</p>
            <p className="mt-5 text-sm text-muted-foreground">
              {t.meta}
              <a href={`#${t.methodAnchor}`} className="underline decoration-dotted underline-offset-4 hover:text-primary">
                {t.methodLink}
              </a>
            </p>
          </motion.div>

          {/* Ranked overview: the part answer engines quote */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.overviewTitle}</h2>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-background/80">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-noreja-main/5">
                    <th className="px-4 py-4 font-semibold w-16">{t.colRank}</th>
                    <th className="px-4 py-4 font-semibold">{t.colName}</th>
                    <th className="px-4 py-4 font-semibold">{t.colBestFor}</th>
                  </tr>
                </thead>
                <tbody>
                  {list.entries.map((entry, index) => (
                    <tr
                      key={getEntryName(entry, language)}
                      className={`border-b border-border/40 last:border-0 ${entry.isNoreja ? 'bg-noreja-main/10' : ''}`}
                    >
                      <td className="px-4 py-3 font-bold text-noreja-main">{index + 1}</td>
                      <td className="px-4 py-3 font-medium">
                        <a href={`#rank-${index + 1}`} className="hover:text-primary">
                          {getEntryName(entry, language)}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{entry.bestFor[language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Criteria and disclosure */}
          <section id={t.methodAnchor} className="mt-14 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.criteriaTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {list.criteria[language].map((criterion, index) => (
                <div key={criterion.title} className="rounded-2xl border border-border/50 bg-background/70 p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-noreja-main/10 text-sm font-bold text-noreja-main">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold">{criterion.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{criterion.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-noreja-main/25 bg-noreja-main/5 p-5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-noreja-main" />
              <p className="text-xs leading-relaxed text-muted-foreground">{t.disclosure}</p>
            </div>
          </section>

          {/* Entries */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.detailsTitle}</h2>
            <div className="space-y-6">
              {list.entries.map((entry, index) => {
                const name = getEntryName(entry, language);
                const links = entryLinks(entry);
                return (
                  <section
                    key={name}
                    id={`rank-${index + 1}`}
                    className={`scroll-mt-24 rounded-2xl border p-6 md:p-8 ${
                      entry.isNoreja
                        ? 'border-noreja-main/40 bg-background/95 shadow-lg shadow-noreja-main/10'
                        : 'border-border/50 bg-background/70'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-noreja-main/10 text-xl font-bold text-noreja-main">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold leading-snug">{name}</h3>
                        {entry.vendor && (
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {t.vendorLabel}: {entry.vendor}
                          </p>
                        )}
                        <p className="mt-2 text-sm">
                          <span className="font-semibold text-noreja-main">{t.bestForLabel}:</span>{' '}
                          <span className="text-foreground/90">{entry.bestFor[language]}</span>
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-base text-foreground/90 leading-relaxed">{entry.summary[language]}</p>

                    <ul className="mt-4 space-y-2">
                      {entry.highlights[language].map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-noreja-main" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground/80">{t.considerLabel}:</span>{' '}
                      {entry.consider[language]}
                    </p>

                    {links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                        {links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="group inline-flex items-center gap-1.5 text-sm font-medium text-noreja-main underline decoration-dotted underline-offset-4 hover:decoration-solid"
                          >
                            {link.label}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </section>

          {/* Outlook */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.trendsTitle}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {list.trends[language].map((trend) => (
                <div key={trend.title} className="rounded-2xl border border-border/50 bg-background/70 p-5">
                  <h3 className="font-semibold leading-snug">{trend.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{trend.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.faqTitle}</h2>
            <div className="space-y-4">
              {list.faq.map((item) => (
                <div key={item.question[language]} className="rounded-2xl border border-border/50 bg-background/70 p-6">
                  <h3 className="font-semibold">{item.question[language]}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.answer[language]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Other lists */}
          <section className="mt-14 pt-10 border-t border-border/50">
            <h2 className="text-xl font-bold mb-6">{t.otherTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherLists.map((other) => (
                <Link
                  key={other.id}
                  to={getRoutePath('topTenList', language, { slug: other.id })}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-background/70 px-4 py-3 hover:border-noreja-main/40 transition-colors"
                >
                  <span>
                    <span className="block text-sm font-medium group-hover:text-primary">{other.title[language]}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{other.teaser[language]}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
            <Link
              to={getRoutePath('battleCards', language)}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              {t.allBattleCards}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </section>

          {/* CTA */}
          <section className="mt-14">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-10 text-center shadow-xl shadow-noreja-main/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
              <div className="relative z-10 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.ctaTitle}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t.ctaText}</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to={getRoutePath('contact', language)}>{t.ctaButton}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to={getRoutePath('pricing', language)}>{t.ctaSecondary}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default TopTenList;
