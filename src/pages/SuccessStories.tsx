import { motion } from "framer-motion";
import { ArrowRight, Package, Factory, Shield, Building2, Trophy, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { CostOfInactionCalculator } from "@/components/CostOfInactionCalculator";
import { successStories, upcomingSuccessStories } from "@/lib/successStories";
import { useCases } from "@/lib/useCases";
import { useEffect } from "react";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { getRoutePath } from "@/lib/routes";

const SuccessStories = () => {
  const { t, language } = useLanguage();

  // Language-specific heading texts
  const headingTexts = {
    en: {
      fixedText: "Our Clients Achieve",
      rotatingWords: ["Success", "Efficiency", "Impact", "Growth"]
    },
    de: {
      fixedText: "Erfolge, die",
      rotatingWords: ["überzeugen", "bewegen", "skalieren", "Zukunft formen"]
    }
  };

  const currentHeading = headingTexts[language];

  // Upcoming case studies are listed first, the published ones follow at the bottom
  const storyCards = [
    ...upcomingSuccessStories.map((story) => ({
      id: story.id,
      companyName: story.companyName,
      logoUrl: story.logoUrl,
      imageUrl: story.cardImageUrl,
      industry: story.industry[language],
      summary: story.summary[language],
      detailPath: undefined as string | undefined
    })),
    ...successStories.map((story) => ({
      id: story.id,
      companyName: story.companyName,
      logoUrl: story.logoUrl,
      imageUrl: story.cardImageUrl || story.coverImageUrl,
      industry: story.industry[language],
      summary: story.summary[language],
      detailPath: getRoutePath('successStoryDetail', language, { companyName: story.id })
    }))
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <AnimatedHeading 
              fixedText={currentHeading.fixedText}
              rotatingWords={currentHeading.rotatingWords}
              size="md"
              className="text-foreground mb-6"
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.pages.successStories.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost of Inaction Calculator */}
      <CostOfInactionCalculator />

      {/* Success Stories Grid */}
      <section className="pb-20 px-4 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {storyCards.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className="h-full"
              >
                <Card className="story-card group h-full overflow-hidden border-border/40 bg-card/80 backdrop-blur-sm">
                  <div className="flex h-full flex-col sm:flex-row">
                    {/* Cover Image */}
                    <div className="relative shrink-0 overflow-hidden sm:w-2/5">
                      <img
                        src={story.imageUrl}
                        alt={`${story.companyName} – ${story.industry}`}
                        loading="lazy"
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full sm:min-h-[16rem]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                      {/* Company Logo */}
                      {story.logoUrl && (
                        <div className="absolute bottom-4 left-4 z-10 w-24">
                          <img
                            src={story.logoUrl}
                            alt={`${story.companyName} logo`}
                            className="h-auto w-full object-contain drop-shadow-lg"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                        <Trophy className="mr-2 h-3.5 w-3.5 text-noreja-tertiary" />
                        <span className="text-xs font-medium">{story.industry}</span>
                      </div>

                      <h2 className="mb-2 text-2xl font-bold text-foreground transition-colors group-hover:text-noreja-main">
                        {story.companyName}
                      </h2>

                      <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {story.summary}
                      </CardDescription>

                      <div className="mt-auto pt-6">
                        {story.detailPath ? (
                          <Button variant="outline" className="group/btn w-full sm:w-auto" asChild>
                            <Link to={story.detailPath}>
                              {t.pages.successStories.readCaseStudy}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        ) : (
                          <Button variant="outline" className="w-full sm:w-auto" disabled>
                            <Clock className="mr-2 h-4 w-4" />
                            {t.pages.successStories.comingSoon}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-4 lg:px-8 pb-20">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.pages.successStories.useCasesSection?.title || "Use Cases"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.pages.successStories.useCasesSection?.subtitle || "Discover how Noreja Process Intelligence transforms operations across industries."}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "supply-chain", Icon: Package },
              { id: "manufacturing", Icon: Factory },
              { id: "insurance", Icon: Shield },
              { id: "banking", Icon: Building2 }
            ].map((useCaseItem, index) => {
              const useCase = useCases.find(uc => uc.id === useCaseItem.id);
              const IconComponent = useCaseItem.Icon;
              if (!useCase) return null;
              
              return (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={getRoutePath('useCases', language, { useCaseName: useCase.id })}>
                    <Card className="story-card h-full group cursor-pointer border-border/40">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-noreja-main/10 group-hover:bg-noreja-main/20 flex items-center justify-center transition-colors">
                            <IconComponent className="w-8 h-8 text-foreground" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-noreja-main transition-colors">
                          {useCase.title[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {useCase.shortDescription[language]}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-4 group-hover:text-noreja-main"
                        >
                          {t.pages.successStories.useCasesSection?.buttonLabel || "Learn More"}
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section className="px-4 lg:px-8 pb-20">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 px-8 py-12 text-center shadow-xl shadow-noreja-main/10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {t.pages.successStories.partnerSection.title}{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    {t.pages.successStories.partnerSection.highlight}
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t.pages.successStories.partnerSection.subtitle}
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="group"
                  asChild
                >
                  <Link to={getRoutePath('partners', language)}>
                    {t.pages.successStories.partnerSection.buttonLabel}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Teasers Section */}
      <HubSpotBlogTeaser />
      </div>
    </div>
  );
};

export default SuccessStories;