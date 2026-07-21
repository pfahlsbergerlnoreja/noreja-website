import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Minus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  battleCards,
  getBattleCardById,
  getBattleCardDetail,
  getBattleCardVsName,
  getBattleCardVsTitle,
  paradigmLabel,
  lockInLabel,
  causalLabel,
  getLocalized,
} from '@/lib/battle-cards';
import { getRoutePath } from '@/lib/routes';
import { BreadcrumbSchema, FAQSchema } from '@/components/StructuredData';
import { SITE_URL } from '@/lib/config';

const BattleCardDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const card = slug ? getBattleCardById(slug) : undefined;
  const detail = slug ? getBattleCardDetail(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!card || !detail) {
    return <Navigate to={getRoutePath('battleCards', language)} replace />;
  }

  const vsName = getBattleCardVsName(card.id);
  const title = getBattleCardVsTitle(card.id, language);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `,
  } as const;

  const t =
    language === 'de'
      ? {
          back: 'Zurück zur Übersicht',
          eyebrow: 'Battle Card',
          comparisonTitle: 'Gegenüberstellung im Überblick',
          colDimension: 'Kriterium',
          rowParadigm: 'Analyse-Paradigma',
          rowDataModel: 'Datenmodell',
          rowLockIn: 'Ökosystem-Bindung',
          rowCausal: 'Kausalanalyse',
          rowPricing: 'Pricing-Transparenz',
          norejaParadigm: 'Kausal + Temporal',
          norejaDataModel: 'Event Knowledge Graph',
          norejaLockIn: 'Gering',
          norejaCausal: 'Nativ',
          norejaPricing: 'Transparent, öffentlich',
          vendorPricing: 'Auf Anfrage',
          aboutTitle: `Über ${vsName}`,
          strengthsLabel: 'Stärken',
          considerationsLabel: 'Methodische Einordnung',
          whyTitle: `Warum Noreja statt ${vsName}?`,
          faqTitle: 'Häufige Fragen',
          otherTitle: 'Weitere Vergleiche',
          ctaTitle: 'Kausale Prozessanalyse selbst erleben',
          ctaText:
            'Sieh, wie Noreja Prozesse auf einem Event Knowledge Graph kausal analysiert – jenseits frequenzbasierter Directly-Follows-Modelle.',
          ctaButton: 'Kontakt aufnehmen',
          ctaSecondary: 'Preise ansehen',
        }
      : {
          back: 'Back to overview',
          eyebrow: 'Battle Card',
          comparisonTitle: 'Comparison at a Glance',
          colDimension: 'Criterion',
          rowParadigm: 'Analysis paradigm',
          rowDataModel: 'Data model',
          rowLockIn: 'Ecosystem lock-in',
          rowCausal: 'Causal analysis',
          rowPricing: 'Pricing transparency',
          norejaParadigm: 'Causal + Temporal',
          norejaDataModel: 'Event Knowledge Graph',
          norejaLockIn: 'Low',
          norejaCausal: 'Native',
          norejaPricing: 'Transparent, public',
          vendorPricing: 'On request',
          aboutTitle: `About ${vsName}`,
          strengthsLabel: 'Strengths',
          considerationsLabel: 'Methodical context',
          whyTitle: `Why Noreja instead of ${vsName}?`,
          faqTitle: 'Frequently Asked Questions',
          otherTitle: 'More comparisons',
          ctaTitle: 'Experience Causal Process Analysis Yourself',
          ctaText:
            'See how Noreja analyzes processes causally on an Event Knowledge Graph – beyond frequency-based Directly-Follows models.',
          ctaButton: 'Get in touch',
          ctaSecondary: 'View pricing',
        };

  const detailUrl = `${SITE_URL}${getRoutePath('battleCardDetail', language, { slug: card.id })}`;
  const otherCards = battleCards.filter((c) => c.id !== card.id).slice(0, 6);

  const comparisonRows = [
    {
      dimension: t.rowParadigm,
      noreja: t.norejaParadigm,
      vendor: paradigmLabel[card.matrix.paradigm][language],
    },
    {
      dimension: t.rowDataModel,
      noreja: t.norejaDataModel,
      vendor: getLocalized(card.matrix.dataModel, language),
    },
    {
      dimension: t.rowLockIn,
      noreja: t.norejaLockIn,
      vendor: lockInLabel[card.matrix.lockIn][language],
    },
    {
      dimension: t.rowCausal,
      noreja: t.norejaCausal,
      vendor: causalLabel[card.matrix.causal][language],
    },
    {
      dimension: t.rowPricing,
      noreja: t.norejaPricing,
      vendor: t.vendorPricing,
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <BreadcrumbSchema
        items={[
          { name: language === 'de' ? 'Startseite' : 'Home', url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: language === 'de' ? 'Definitionen' : 'Definitions', url: `${SITE_URL}${getRoutePath('definitions', language)}` },
          { name: language === 'de' ? 'Battle Cards' : 'Battle Cards', url: `${SITE_URL}${getRoutePath('battleCards', language)}` },
          { name: title, url: detailUrl },
        ]}
      />
      <FAQSchema
        items={detail.faq.map((item) => ({
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
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              {detail.intro[language]}
            </p>
          </motion.div>

          {/* Comparison table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.comparisonTitle}</h2>
            <div className="overflow-x-auto rounded-2xl border border-border/60 bg-background/80">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-noreja-main/5">
                    <th className="px-4 py-4 font-semibold">{t.colDimension}</th>
                    <th className="px-4 py-4 font-semibold text-noreja-main">Noreja</th>
                    <th className="px-4 py-4 font-semibold">{vsName}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.dimension} className="border-b border-border/40 last:border-0">
                      <td className="px-4 py-4 font-medium">{row.dimension}</td>
                      <td className="px-4 py-4 bg-noreja-main/5 font-medium text-foreground/90">{row.noreja}</td>
                      <td className="px-4 py-4 text-muted-foreground">{row.vendor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* About the vendor */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.aboutTitle}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {getLocalized(card.summary, language)}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border/50 bg-background/70 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                  {t.strengthsLabel}
                </h3>
                <ul className="mt-3 space-y-2">
                  {card.strengths[language].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-noreja-main" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/70 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                  {t.considerationsLabel}
                </h3>
                <ul className="mt-3 space-y-2">
                  {card.considerations[language].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why Noreja */}
          <section className="mt-14">
            <div className="relative overflow-hidden rounded-3xl border border-noreja-main/30 bg-background/95 p-8 shadow-lg shadow-noreja-main/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-noreja-main/10 via-transparent to-noreja-secondary/15 opacity-80" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold">{t.whyTitle}</h2>
                <p className="mt-4 text-base md:text-lg text-foreground/90 leading-relaxed">
                  {getLocalized(card.differentiator, language)}
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.faqTitle}</h2>
            <div className="space-y-4">
              {detail.faq.map((item) => (
                <div key={item.question[language]} className="rounded-2xl border border-border/50 bg-background/70 p-6">
                  <h3 className="font-semibold">{item.question[language]}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.answer[language]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Other comparisons */}
          <section className="mt-14 pt-10 border-t border-border/50">
            <h2 className="text-xl font-bold mb-6">{t.otherTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherCards.map((c) => (
                <Link
                  key={c.id}
                  to={getRoutePath('battleCardDetail', language, { slug: c.id })}
                  className="group inline-flex items-center justify-between gap-2 rounded-xl border border-border/50 bg-background/70 px-4 py-3 text-sm font-medium hover:border-noreja-main/40 hover:text-primary transition-colors"
                >
                  {getBattleCardVsTitle(c.id, language)}
                  <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
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
    </main>
  );
};

export default BattleCardDetail;
