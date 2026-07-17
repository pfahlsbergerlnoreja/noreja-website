import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { getDefinitionById, getRelatedDefinitions } from '@/lib/definitions';
import { getRoutePath } from '@/lib/routes';
import { BreadcrumbSchema, DefinitionSchema } from '@/components/StructuredData';
import { SITE_URL } from '@/lib/config';

const DefinitionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const definition = slug ? getDefinitionById(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!definition) {
    return <Navigate to={getRoutePath('definitions', language)} replace />;
  }

  const related = getRelatedDefinitions(definition);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `,
  } as const;

  const labels =
    language === 'de'
      ? {
          back: 'Zurück zu den Definitionen',
          why: 'Warum ist das wichtig?',
          related: 'Verwandte Begriffe',
          ctaTitle: 'Prozesse besser verstehen mit Noreja',
          ctaText:
            'Erlebe, wie Noreja Process Intelligence Prozesse nicht nur sichtbar, sondern verständlich und optimierbar macht.',
          ctaButton: 'Kontakt aufnehmen',
          ctaSecondary: 'Zur Plattform',
        }
      : {
          back: 'Back to Definitions',
          why: 'Why does this matter?',
          related: 'Related terms',
          ctaTitle: 'Understand your processes better with Noreja',
          ctaText:
            'See how Noreja Process Intelligence makes processes not just visible, but understandable and optimizable.',
          ctaButton: 'Get in touch',
          ctaSecondary: 'Explore the platform',
        };

  const detailUrl = `${SITE_URL}${getRoutePath('definitionDetail', language, { slug: definition.id })}`;
  const answerText = `${definition.definition[language]} ${definition.whyImportant[language]}`;
  // Derive a clean glossary term from the question for the DefinedTerm schema,
  // e.g. "Was ist ein Event Knowledge Graph?" -> "Event Knowledge Graph".
  // An explicit term overrides the heuristic when the question doesn't reduce cleanly.
  const term =
    definition.term?.[language] ??
    definition.question[language]
      .replace(/^Was (ist|sind die|sind)\s+/i, '')
      .replace(/^What (is|are)\s+/i, '')
      .replace(/^Wie definiere ich den Begriff\s+/i, '')
      .replace(/^How do I define the term\s+/i, '')
      .replace(/^(einen|eine|ein|der|die|das|an|a|the)\s+/i, '')
      .replace(/[?]$/, '')
      .trim();

  return (
    <main className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <BreadcrumbSchema
        items={[
          { name: language === 'de' ? 'Startseite' : 'Home', url: `${SITE_URL}${getRoutePath('home', language)}` },
          { name: language === 'de' ? 'Definitionen' : 'Definitions', url: `${SITE_URL}${getRoutePath('definitions', language)}` },
          { name: definition.question[language], url: detailUrl },
        ]}
      />
      <DefinitionSchema
        term={term}
        question={definition.question[language]}
        answer={answerText}
        url={detailUrl}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <article className="container mx-auto max-w-3xl px-4 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={getRoutePath('definitions', language)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {labels.back}
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {definition.question[language]}
            </h1>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-12">
              {definition.definition[language]}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">{labels.why}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {definition.whyImportant[language]}
            </p>
          </motion.div>

          {/* Related terms */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 pt-10 border-t border-border/50"
            >
              <h2 className="text-xl font-bold mb-6">{labels.related}</h2>
              <ul className="space-y-3">
                {related.map((rel) => (
                  <li key={rel.id}>
                    <Link
                      to={getRoutePath('definitionDetail', language, { slug: rel.id })}
                      className="group inline-flex items-center gap-2 text-primary hover:opacity-90 transition-opacity"
                    >
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      {rel.question[language]}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-10 text-center shadow-xl shadow-noreja-main/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
              <div className="relative z-10 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{labels.ctaTitle}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{labels.ctaText}</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to={getRoutePath('contact', language)}>{labels.ctaButton}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to={getRoutePath('functionalities', language)}>{labels.ctaSecondary}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
};

export default DefinitionDetail;
