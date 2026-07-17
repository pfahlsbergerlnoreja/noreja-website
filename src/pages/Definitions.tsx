import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { definitions } from '@/lib/definitions';
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

        {/* Definitions Grid */}
        <section className="py-12 px-4 pb-24">
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
      </div>
    </main>
  );
};

export default Definitions;
