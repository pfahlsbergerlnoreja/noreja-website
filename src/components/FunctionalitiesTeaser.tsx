import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Brain, Search, LayoutDashboard, Wrench, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { getRoutePath } from "@/lib/routes";
import analystImage from "@/assets/agents/agents_small/analyst_small.webp";
import builderImage from "@/assets/agents/agents_small/builder_small.webp";
import complianceImage from "@/assets/agents/agents_small/compliance_small.webp";

const agentImages = [
  { src: analystImage, alt: "Analyst Agent", label: "Analyzer", name: "Andy" },
  { src: builderImage, alt: "Builder Agent", label: "Builder", name: "Benny" },
  { src: complianceImage, alt: "Compliance Agent", label: "Compliance", name: "Conny" },
] as const;

export function FunctionalitiesTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const isAutoAdvancingRef = useRef(false);

  const features = [
    {
      icon: LayoutDashboard,
      title: t.functionalities.teaserFeatures.security.title,
      description: t.functionalities.teaserFeatures.security.description
    },
    {
      icon: Search,
      title: t.functionalities.teaserFeatures.dataIntegration.title,
      description: t.functionalities.teaserFeatures.dataIntegration.description
    },
    {
      icon: Brain,
      title: t.functionalities.teaserFeatures.aiAnalytics.title,
      description: t.functionalities.teaserFeatures.aiAnalytics.description
    },
    {
      icon: Wrench,
      title: t.functionalities.teaserFeatures.realTime.title,
      description: t.functionalities.teaserFeatures.realTime.description
    },
    {
      icon: Code,
      title: t.functionalities.teaserFeatures.workbench.title,
      description: t.functionalities.teaserFeatures.workbench.description
    }
  ];

  // Handle manual navigation - pause auto-advance
  useEffect(() => {
    if (!api) {
      return;
    }

    let resumeTimeout: NodeJS.Timeout;

    const handleSelect = () => {
      // Only pause if this was manual navigation (not auto-advance)
      if (!isAutoAdvancingRef.current) {
        setIsPaused(true);
        // Clear any existing timeout
        if (resumeTimeout) {
          clearTimeout(resumeTimeout);
        }
        // Resume after 10 seconds of inactivity
        resumeTimeout = setTimeout(() => {
          setIsPaused(false);
        }, 10000);
      }
      // Reset the flag
      isAutoAdvancingRef.current = false;
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
      }
    };
  }, [api]);

  // Auto-advance carousel every 2 seconds (only when not paused)
  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      isAutoAdvancingRef.current = true;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Loop back to start
        api.scrollTo(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 overflow-hidden"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="whitespace-nowrap">{t.functionalities.title}</span>{" "}
            {isMobile ? (
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {language === 'de' 
                  ? <>mit KI-gestützer<br />Process Intelligence</>
                  : <>with AI-powered<br />Process Intelligence</>
                }
              </span>
            ) : (
              <span className="bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
                {t.functionalities.titleHighlight}
              </span>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.functionalities.subtitle}
          </p>
          <Button asChild size="lg" className="gradient-primary glow-primary group">
            <Link to={getRoutePath('functionalities', language)}>
              {t.functionalities.exploreFeatures}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden overflow-hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent className="-ml-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <CarouselItem key={feature.title} className="pl-0">
                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.1 + 0.3
                      }}
                      className="text-center group p-6 overflow-hidden"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-noreja-tertiary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-6 w-6 opacity-60 hover:opacity-100 bg-background/80" />
            <CarouselNext className="right-2 h-6 w-6 opacity-60 hover:opacity-100 bg-background/80" />
          </Carousel>
        </div>

        {/* Desktop: 3 items first row, 2 items centered second row */}
        <div className="hidden lg:block">
          {/* First row - 3 items */}
          <div className="flex justify-center gap-8 mb-8 overflow-hidden">
            {features.slice(0, 3).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1 + 0.3
                  }}
                  className="text-center group flex-1 max-w-xs overflow-hidden"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-noreja-tertiary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
          
          {/* Second row - 2 items centered */}
          <div className="flex justify-center gap-8 overflow-hidden">
            {features.slice(3, 5).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  transition={{ 
                    duration: 0.6,
                    delay: (index + 3) * 0.1 + 0.3
                  }}
                  className="text-center group flex-1 max-w-xs overflow-hidden"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-noreja-tertiary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Frontier Agents CTA and Agent Miniatures - Wrapped with single border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 mx-auto w-fit rounded-xl border-2 border-[hsl(var(--noreja-tertiary))] border-glow-tertiary relative overflow-hidden"
        >
          {/* Animated glowing dots */}
          <div className="border-glow-dots">
            <div className="border-glow-dot" />
            <div className="border-glow-dot" />
            <div className="border-glow-dot" />
            <div className="border-glow-dot" />
          </div>
          
          {/* Frontier Agents CTA subsection */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-t-xl bg-noreja-tertiary/5 pt-5 pb-4 sm:pt-6 sm:pb-4 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-tertiary bg-clip-text text-transparent mb-2">
              {t.functionalities.frontierAgentsCta.title}
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
              {t.functionalities.frontierAgentsCta.subtitle}
            </p>
          </motion.div>

          {/* Agent miniatures - single link to Frontier Agents page, one overlay button on hover */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-12"
          >
          <Link
            to={getRoutePath('aiAgents', language)}
            className="group relative flex justify-center gap-8 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            aria-label={t.functionalities.frontierAgentsCta.title}
          >
            {agentImages.map(({ src, alt, label, name }) => (
              <div key={alt} className="flex flex-col items-center">
                <div
                  className="w-36 h-36 rounded-full ring-2 ring-noreja-tertiary shadow-[0_0_16px_hsl(var(--noreja-tertiary)/0.4)] group-hover:shadow-[0_0_24px_hsl(var(--noreja-tertiary)/0.6)] transition-all duration-200 group-hover:scale-110"
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-contain scale-75"
                      loading="lazy"
                    />
                    <span
                      className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-semibold text-foreground">{label}</div>
                  <div className="text-sm text-muted-foreground">{name}</div>
                </div>
              </div>
            ))}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-6 py-3 rounded-xl font-semibold text-white whitespace-nowrap min-w-[240px] text-center gradient-tertiary backdrop-blur-sm opacity-0 group-hover:opacity-90 transition-opacity duration-200 pointer-events-none"
              aria-hidden
            >
              {t.functionalities.frontierAgentsCta.title}
            </span>
          </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}