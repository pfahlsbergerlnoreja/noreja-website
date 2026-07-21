import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GitCompareArrows, Network, Sparkles, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  battleCards,
  norejaProfile,
  paradigmLabel,
  lockInLabel,
  causalLabel,
  getLocalized,
} from '@/lib/battle-cards';
import { getRoutePath } from '@/lib/routes';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { SITE_URL } from '@/lib/config';

const BattleCards = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `,
  } as const;

  const t =
    language === 'de'
      ? {
          back: 'Zurück zu den Definitionen',
          eyebrow: 'Battle Cards',
          title: 'Process Intelligence Anbieter Vergleich',
          subtitle:
            'Eine sachliche Einordnung führender Process-Mining- und Process-Intelligence-Plattformen – und wie sich Norejas kausaler Ansatz methodisch davon abgrenzt. Der zentrale Unterschied liegt nicht in Konnektoren oder Dashboards, sondern im Analyse-Paradigma: frequenzbasierte Directly-Follows-Modelle gegenüber der Rekonstruktion echter Ursache-Wirkungs-Beziehungen.',
          norejaKicker: norejaProfile.category.de,
          norejaFocus: norejaProfile.focus.de,
          norejaSummary: norejaProfile.summary.de,
          pillars: norejaProfile.pillars.de,
          matrixTitle: 'Vergleichsmatrix',
          matrixSubtitle:
            'Die Attribute verdichten die methodischen Unterschiede. „Analyse-Paradigma" bezeichnet die Art der Modellbildung, „Kausalanalyse" den Reifegrad echter Ursache-Wirkungs-Rekonstruktion.',
          colVendor: 'Plattform',
          colParadigm: 'Analyse-Paradigma',
          colDataModel: 'Datenmodell',
          colLockIn: 'Ökosystem-Bindung',
          colCausal: 'Kausalanalyse',
          cardsTitle: 'Die Battle Cards im Einzelnen',
          cardsSubtitle:
            'Jede Karte fasst Ausrichtung, Stärken und methodische Reichweite neutral zusammen und benennt die Abgrenzung zum kausalen Ansatz.',
          focusLabel: 'Ausrichtung',
          strengthsLabel: 'Stärken',
          considerationsLabel: 'Methodische Einordnung',
          differentiatorLabel: 'Abgrenzung zu Noreja',
          criteriaTitle: 'Woran sich eine zukunftsfähige Lösung erkennen lässt',
          criteria: [
            {
              title: 'Analyse-Paradigma',
              text: 'Bildet das Werkzeug nur Reihenfolgen (Directly-Follows) ab oder rekonstruiert es tatsächliche Ursache-Wirkungs-Beziehungen? Nur kausale Modelle vermeiden falsche Schlüsse aus reiner zeitlicher Nähe.',
            },
            {
              title: 'Datenrepräsentation',
              text: 'Werden mehrdimensionale Prozesse auf eine einzige Fall-ID reduziert oder als Graph aus Ereignissen, Objekten und Beziehungen abgebildet? Die Repräsentation entscheidet über den Realitätsgrad der Analyse.',
            },
            {
              title: 'Semantischer Kontext',
              text: 'Fließen Domänenwissen und Geschäftsregeln in das Modell ein? Erst der fachliche Kontext trennt legitime Prozesspfade von Fehlermustern und macht KI-Empfehlungen nachvollziehbar.',
            },
            {
              title: 'Ökosystem-Unabhängigkeit',
              text: 'Ist die Analyse an einen bestimmten ERP-, RPA- oder Plattform-Stack gebunden oder quellsystem-agnostisch? Unabhängigkeit sichert eine durchgängige End-to-End-Sicht.',
            },
          ],
          ctaTitle: 'Den Unterschied zwischen Frequenz und Kausalität selbst erleben',
          ctaText:
            'Sieh, wie Noreja Prozesse auf einem Event Knowledge Graph kausal analysiert – jenseits frequenzbasierter Directly-Follows-Modelle.',
          ctaButton: 'Kontakt aufnehmen',
          ctaSecondary: 'Zur Plattform',
          learnMore: 'Mehr zu Causal Process Mining',
          pricingHeading: 'Transparentes Pricing',
          pricingNote:
            'Noreja ist die einzige Lösung in diesem Vergleich mit öffentlich einsehbarem Pricing – und damit voraussichtlich günstiger als alle hier aufgeführten Alternativen mit reinem „Preis auf Anfrage".',
          pricingLink: 'Preise ansehen',
        }
      : {
          back: 'Back to Definitions',
          eyebrow: 'Battle Cards',
          title: 'Process Intelligence Vendor Comparison',
          subtitle:
            'A factual overview of leading process mining and process intelligence platforms – and how Noreja’s causal approach differs methodically. The decisive distinction lies not in connectors or dashboards, but in the analysis paradigm: frequency-based Directly-Follows models versus the reconstruction of genuine cause-and-effect relationships.',
          norejaKicker: norejaProfile.category.en,
          norejaFocus: norejaProfile.focus.en,
          norejaSummary: norejaProfile.summary.en,
          pillars: norejaProfile.pillars.en,
          matrixTitle: 'Comparison Matrix',
          matrixSubtitle:
            'These attributes condense the methodical differences. “Analysis paradigm” denotes the type of model construction, “causal analysis” the maturity of genuine cause-and-effect reconstruction.',
          colVendor: 'Platform',
          colParadigm: 'Analysis paradigm',
          colDataModel: 'Data model',
          colLockIn: 'Ecosystem lock-in',
          colCausal: 'Causal analysis',
          cardsTitle: 'The Battle Cards in Detail',
          cardsSubtitle:
            'Each card neutrally summarizes orientation, strengths, and methodical reach, and states the distinction from the causal approach.',
          focusLabel: 'Orientation',
          strengthsLabel: 'Strengths',
          considerationsLabel: 'Methodical context',
          differentiatorLabel: 'Distinction from Noreja',
          criteriaTitle: 'How to Recognize a Future-Proof Solution',
          criteria: [
            {
              title: 'Analysis paradigm',
              text: 'Does the tool only depict sequences (directly-follows) or reconstruct actual cause-and-effect relationships? Only causal models avoid false conclusions from mere temporal proximity.',
            },
            {
              title: 'Data representation',
              text: 'Are multidimensional processes reduced to a single case ID, or represented as a graph of events, objects, and relationships? The representation determines how realistic the analysis can be.',
            },
            {
              title: 'Semantic context',
              text: 'Do domain knowledge and business rules enter the model? Only business context separates legitimate process paths from error patterns and makes AI recommendations traceable.',
            },
            {
              title: 'Ecosystem independence',
              text: 'Is the analysis bound to a specific ERP, RPA, or platform stack, or is it source-system agnostic? Independence secures a continuous end-to-end view.',
            },
          ],
          ctaTitle: 'Experience the Difference Between Frequency and Causality',
          ctaText:
            'See how Noreja analyzes processes causally on an Event Knowledge Graph – beyond frequency-based Directly-Follows models.',
          ctaButton: 'Get in touch',
          ctaSecondary: 'Explore the platform',
          learnMore: 'More on Causal Process Mining',
          pricingHeading: 'Transparent pricing',
          pricingNote:
            'Noreja is the only solution in this comparison with publicly available pricing – and therefore likely more cost-effective than all the listed alternatives that only quote “price on request”.',
          pricingLink: 'View pricing',
        };

  const hubUrl = `${SITE_URL}${getRoutePath('battleCards', language)}`;
  const pillarIcons = [Network, GitCompareArrows, Sparkles];

  return (
    <main className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <BreadcrumbSchema
        items={[
          { name: language === 'de' ? 'Startseite' : 'Home', url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: language === 'de' ? 'Definitionen' : 'Definitions', url: `${SITE_URL}${getRoutePath('definitions', language)}` },
          { name: t.eyebrow, url: hubUrl },
        ]}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative pt-16 pb-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link
              to={getRoutePath('definitions', language)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-noreja-main/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-noreja-main mb-5">
                {t.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Noreja positioning */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-noreja-main/30 bg-background/95 p-8 md:p-10 shadow-xl shadow-noreja-main/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-noreja-main/10 via-transparent to-noreja-secondary/15 opacity-80" />
              <div className="relative z-10">
                <span className="text-sm font-semibold uppercase tracking-wide text-noreja-main">
                  {t.norejaKicker}
                </span>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold">Noreja</h2>
                <p className="mt-3 text-base md:text-lg font-medium text-foreground/90">{t.norejaFocus}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{t.norejaSummary}</p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {t.pillars.map((pillar, i) => {
                    const Icon = pillarIcons[i] ?? Network;
                    return (
                      <div key={pillar.title} className="rounded-2xl border border-border/50 bg-background/70 p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-noreja-main/10">
                          <Icon className="h-5 w-5 text-noreja-main" />
                        </div>
                        <h3 className="font-semibold leading-snug">{pillar.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pillar.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-noreja-main/25 bg-noreja-main/5 p-5">
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-noreja-main" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-noreja-main">
                      {t.pricingHeading}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{t.pricingNote}</p>
                  <Link
                    to={getRoutePath('pricing', language)}
                    className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    {t.pricingLink}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <Link
                  to={getRoutePath('definitionDetail', language, { slug: 'causal-process-mining' })}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  {t.learnMore}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison matrix */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold">{t.matrixTitle}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.matrixSubtitle}</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-background/80">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-noreja-main/5">
                    <th className="px-4 py-4 font-semibold">{t.colVendor}</th>
                    <th className="px-4 py-4 font-semibold">{t.colParadigm}</th>
                    <th className="px-4 py-4 font-semibold">{t.colDataModel}</th>
                    <th className="px-4 py-4 font-semibold">{t.colLockIn}</th>
                    <th className="px-4 py-4 font-semibold">{t.colCausal}</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Noreja reference row, highlighted */}
                  <tr className="border-b border-noreja-main/20 bg-noreja-main/10">
                    <td className="px-4 py-4 font-bold text-noreja-main">Noreja</td>
                    <td className="px-4 py-4 font-semibold">
                      {language === 'de' ? 'Kausal + Temporal' : 'Causal + Temporal'}
                    </td>
                    <td className="px-4 py-4">Event Knowledge Graph</td>
                    <td className="px-4 py-4">{lockInLabel.low[language]}</td>
                    <td className="px-4 py-4 font-semibold">{causalLabel.native[language]}</td>
                  </tr>
                  {battleCards.map((card) => (
                    <tr key={card.id} className="border-b border-border/40 last:border-0">
                      <td className="px-4 py-4 font-medium">{card.name}</td>
                      <td className="px-4 py-4 text-muted-foreground">
                        {paradigmLabel[card.matrix.paradigm][language]}
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">
                        {getLocalized(card.matrix.dataModel, language)}
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">{lockInLabel[card.matrix.lockIn][language]}</td>
                      <td className="px-4 py-4 text-muted-foreground">{causalLabel[card.matrix.causal][language]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Battle cards grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold">{t.cardsTitle}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.cardsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {battleCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                >
                  <Card className="h-full flex flex-col border-border/50">
                    <CardHeader className="pb-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-noreja-main">
                        {getLocalized(card.category, language)}
                      </span>
                      <CardTitle className="mt-1 text-xl">{card.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {getLocalized(card.summary, language)}
                      </p>

                      <div className="mt-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                          {t.strengthsLabel}
                        </h4>
                        <ul className="mt-2 space-y-1.5">
                          {card.strengths[language].map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-noreja-main/60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/70">
                          {t.considerationsLabel}
                        </h4>
                        <ul className="mt-2 space-y-1.5">
                          {card.considerations[language].map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-5">
                        <div className="rounded-xl border border-noreja-main/20 bg-noreja-main/5 p-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-noreja-main">
                            {t.differentiatorLabel}
                          </h4>
                          <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">
                            {getLocalized(card.differentiator, language)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection criteria */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold">{t.criteriaTitle}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {t.criteria.map((c, i) => (
                <div key={c.title} className="rounded-2xl border border-border/50 bg-background/70 p-6">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-noreja-main/10 text-sm font-bold text-noreja-main">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-10 text-center shadow-xl shadow-noreja-main/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
              <div className="relative z-10 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.ctaTitle}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t.ctaText}</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to={getRoutePath('contact', language)}>{t.ctaButton}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to={getRoutePath('functionalities', language)}>{t.ctaSecondary}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BattleCards;
