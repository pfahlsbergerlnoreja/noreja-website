import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";
import { getRoutePath } from "@/lib/routes";
import { homeHero } from "@/lib/heroCopy";
import { useHeroCycle } from "@/hooks/use-hero-cycle";
import { HeroShell } from "@/components/hero/HeroShell";
import { CompetitivenessTriangle } from "@/components/hero/CompetitivenessTriangle";

export function IntegratedHeroSection() {
  const { language } = useLanguage();
  const step = useHeroCycle();
  const words = homeHero.words[language];

  return (
    <HeroShell
      eyebrow={homeHero.eyebrow[language]}
      headingLead={homeHero.headingLead[language]}
      words={words}
      activeWord={step % words.length}
      lede={
        <>
          {homeHero.ledeBefore[language]}
          <strong className="font-semibold text-foreground">
            {homeHero.ledeStrong[language]}
          </strong>
          {homeHero.ledeAfter[language]}
        </>
      }
      primaryCta={{
        label: homeHero.ctaPrimary[language],
        href: siteConfig.hubspot.appointmentBooking,
      }}
      secondaryCta={{
        label: homeHero.ctaSecondary[language],
        to: getRoutePath("functionalities", language),
      }}
      trust={homeHero.trust[language]}
      visual={<CompetitivenessTriangle step={step} labels={words} />}
    />
  );
}
