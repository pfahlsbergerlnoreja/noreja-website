import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Swords } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { definitions } from '@/lib/definitions';
import { battleCards, getBattleCardVsTitle } from '@/lib/battle-cards';
import { getRoutePath } from '@/lib/routes';
import { BreadcrumbSchema, DefinitionSetSchema } from '@/components/StructuredData';
import { SITE_URL } from '@/lib/config';

const Definitions = () => {
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

  const title = language === 'de' ? 'Definitionen' : 'Definitions';
  const subtitle =
    language === 'de'
      ? 'Unsere Wissensdatenbank erklärt die wichtigsten Begriffe rund um Process Mining, Process Intelligence und Geschäftsprozessmanagement – klar, kompakt und fundiert.'
      : 'Our knowledge base explains the key terms around Process Mining, Process Intelligence, and Business Process Management – clear, concise, and well-founded.';

  const hubUrl = `${SITE_URL}${getRoutePath('definitions', language)}`;

  return (
    <main className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <BreadcrumbSchema
        items={[
          { name: language === 'de' ? 'Startseite' : 'Home', url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: title, url: hubUrl },
        ]}
      />
      <DefinitionSetSchema
        terms={definitions.map((d) => ({
          term: d.question[language],
          description: d.definition[language],
          url: `${SITE_URL}${getRoutePath('definitionDetail', language, { slug: d.id })}`,
        }))}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-noreja-main/10 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-noreja-main" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Battle Cards Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={getRoutePath('battleCards', language)}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-3xl border border-noreja-main/30 bg-background/95 p-8 md:p-10 shadow-lg shadow-noreja-main/10 transition-all duration-300 hover:shadow-xl hover:shadow-noreja-main/20 hover:border-noreja-main/50">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/15 opacity-70" />
                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-noreja-main/10">
                        <Swords className="h-7 w-7 text-noreja-main" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-noreja-main">
                          {language === 'de' ? 'Battle Cards' : 'Battle Cards'}
                        </span>
                        <h2 className="mt-1 text-2xl md:text-3xl font-bold leading-snug">
                          {language === 'de'
                            ? 'Process-Intelligence-Plattformen im Vergleich'
                            : 'Process Intelligence Platforms Compared'}
                        </h2>
                        <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
                          {language === 'de'
                            ? 'Sachliche Einordnung führender Process-Mining- und Process-Intelligence-Lösungen – und wie sich Norejas kausaler Ansatz vom frequenzbasierten Paradigma unterscheidet.'
                            : 'A factual overview of leading process mining and process intelligence solutions – and how Noreja’s causal approach differs from the frequency-based paradigm.'}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary">
                      {language === 'de' ? 'Vergleich öffnen' : 'Open comparison'}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Definitions Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {definitions.map((definition, index) => (
                <motion.div
                  key={definition.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="group"
                >
                  <Link
                    to={getRoutePath('definitionDetail', language, { slug: definition.id })}
                    className="block h-full"
                  >
                    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-border/50 hover:border-primary/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                          {definition.question[language]}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 flex flex-col flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {definition.teaser[language]}
                        </p>
                        <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                          {language === 'de' ? 'Mehr erfahren' : 'Learn more'}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vendor comparison tiles */}
        <section className="py-12 px-4 pb-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold">
                {language === 'de' ? 'Noreja im Anbietervergleich' : 'Noreja Compared to Other Vendors'}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {language === 'de'
                  ? 'Detaillierte Gegenüberstellungen: Wie sich Norejas kausaler Ansatz von führenden Process-Mining- und Process-Intelligence-Anbietern unterscheidet.'
                  : 'Detailed head-to-head comparisons: how Noreja’s causal approach differs from leading process mining and process intelligence vendors.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {battleCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                  className="group"
                >
                  <Link
                    to={getRoutePath('battleCardDetail', language, { slug: card.id })}
                    className="flex h-full items-center justify-between gap-3 rounded-2xl border border-border/50 bg-background/70 px-5 py-4 transition-all duration-300 hover:border-noreja-main/40 hover:shadow-lg hover:shadow-noreja-main/10"
                  >
                    <span className="font-semibold leading-snug group-hover:text-primary transition-colors">
                      {getBattleCardVsTitle(card.id, language)}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Definitions;
