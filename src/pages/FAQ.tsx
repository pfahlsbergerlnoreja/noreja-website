import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { faqCategories, faqItems, getFaqPairs, type FaqItem, type FaqLink } from '@/lib/faq';
import { getRoutePath } from '@/lib/routes';
import { BreadcrumbSchema, FAQSchema } from '@/components/StructuredData';
import { SITE_URL } from '@/lib/config';
import gartnerBadge from '@/assets/awards/noreja_gartner_coolest_vendor_innovation.webp';

/** Illustrations an answer can carry, keyed by FaqItem.badge. */
const badges = {
  gartner: {
    src: gartnerBadge,
    alt: 'Gartner Coolest Vendor Innovations 2026',
  },
} as const;

const FAQ = () => {
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
          back: 'Zurück zur Startseite',
          eyebrow: 'FAQ',
          title: 'Häufig gestellte Fragen',
          subtitle:
            'Antworten auf die Fragen, die uns zu Noreja am häufigsten gestellt werden – zu Technologie und Methodik, zur Einführung, zu Lizenzen und Preisen, zu Daten und Sicherheit sowie zum Unternehmen selbst.',
          jumpTo: 'Direkt zum Thema',
          ctaTitle: 'Frage nicht dabei?',
          ctaText:
            'Schreib uns – wir antworten persönlich und zeigen dir in einer Demo, wie kausale Process Intelligence in deinen Prozessen aussieht.',
          ctaButton: 'Kontakt aufnehmen',
          ctaSecondary: 'Preise ansehen',
          moreTitle: 'Noch mehr Antworten',
          more: [
            {
              label: 'Definitionen',
              text: 'Wissensdatenbank mit den zentralen Begriffen rund um Process Mining und Process Intelligence.',
              routeKey: 'definitions' as const,
            },
            {
              label: 'Battle Cards',
              text: 'Sachlicher Vergleich führender Process-Intelligence-Plattformen und die methodische Abgrenzung.',
              routeKey: 'battleCards' as const,
            },
            {
              label: 'Preise',
              text: 'Öffentlich einsehbare Pakete, Leistungen und Konditionen – ohne „Preis auf Anfrage".',
              routeKey: 'pricing' as const,
            },
          ],
        }
      : {
          back: 'Back to Home',
          eyebrow: 'FAQ',
          title: 'Frequently Asked Questions',
          subtitle:
            'Answers to the questions we are asked most often about Noreja – on technology and methodology, implementation, licensing and pricing, data and security, and the company itself.',
          jumpTo: 'Jump to a topic',
          ctaTitle: 'Question not covered?',
          ctaText:
            'Get in touch – we answer personally and show you in a demo what causal process intelligence looks like in your own processes.',
          ctaButton: 'Get in touch',
          ctaSecondary: 'View pricing',
          moreTitle: 'More answers',
          more: [
            {
              label: 'Definitions',
              text: 'Knowledge base covering the key terms around process mining and process intelligence.',
              routeKey: 'definitions' as const,
            },
            {
              label: 'Battle Cards',
              text: 'A factual comparison of leading process intelligence platforms and the methodical distinction.',
              routeKey: 'battleCards' as const,
            },
            {
              label: 'Pricing',
              text: 'Publicly available packages, services and terms – no “price on request”.',
              routeKey: 'pricing' as const,
            },
          ],
        };

  const hubUrl = `${SITE_URL}${getRoutePath('faq', language)}`;

  const renderLink = (link: FaqLink, key: number) => {
    const label = link.label[language];

    if (link.routeKey) {
      return (
        <Link
          key={key}
          to={getRoutePath(link.routeKey, language, link.params)}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      );
    }

    return (
      <a
        key={key}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary"
      >
        {label}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  };

  const renderItem = (item: FaqItem, index: number) => {
    const badge = item.badge ? badges[item.badge] : undefined;

    return (
      <motion.div
        key={item.id}
        id={item.id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, delay: Math.min(index, 3) * 0.05 }}
        className="scroll-mt-28 rounded-2xl border border-border/50 bg-background/70 p-6 transition-colors hover:border-noreja-main/40"
      >
        <dt className="text-base font-semibold text-foreground md:text-lg">
          <h3>{item.question[language]}</h3>
        </dt>
        <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {badge ? (
            <span className="mb-4 block sm:float-right sm:ml-5 sm:mb-2">
              <img
                src={badge.src}
                alt={badge.alt}
                width={200}
                height={125}
                loading="lazy"
                className="w-32 rounded-xl shadow-md shadow-black/20 ring-1 ring-white/10"
              />
            </span>
          ) : null}
          {item.answer[language]}
          {item.links?.length ? (
            <span className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {item.links.map(renderLink)}
            </span>
          ) : null}
        </dd>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <BreadcrumbSchema
        items={[
          { name: language === 'de' ? 'Startseite' : 'Home', url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: t.title, url: hubUrl },
        ]}
      />
      <FAQSchema items={getFaqPairs(faqItems, language)} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative pt-16 pb-10 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link
              to={getRoutePath('home', language)}
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
              <span className="inline-flex items-center gap-2 rounded-full bg-noreja-main/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-noreja-main mb-5">
                <HelpCircle className="h-4 w-4" />
                {t.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Topic navigation — plain anchors so they work without JavaScript */}
        <section className="px-4 pb-6">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.jumpTo}</p>
            <nav className="mt-3 flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-noreja-main/50 hover:text-noreja-main"
                >
                  {category.label[language]}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Questions grouped by topic */}
        <section className="px-4 pb-4">
          <div className="container mx-auto max-w-4xl space-y-14">
            {faqCategories.map((category) => {
              const items = faqItems.filter((item) => item.category === category.id);
              if (items.length === 0) return null;

              return (
                <div key={category.id} id={category.id} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold">{category.label[language]}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{category.intro[language]}</p>
                  <dl className="mt-6 space-y-4">{items.map(renderItem)}</dl>
                </div>
              );
            })}
          </div>
        </section>

        {/* Related hubs */}
        <section className="px-4 py-14">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold">{t.moreTitle}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {t.more.map((entry) => (
                <Link
                  key={entry.routeKey}
                  to={getRoutePath(entry.routeKey, language)}
                  className="group rounded-2xl border border-border/50 bg-background/70 p-6 transition-colors hover:border-noreja-main/50"
                >
                  <h3 className="font-semibold">{entry.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {language === 'de' ? 'Ansehen' : 'Open'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-16">
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
                    <Link to={getRoutePath('pricing', language)}>{t.ctaSecondary}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
