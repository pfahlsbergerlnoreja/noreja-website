import SimpleRectangleAnimation from "@/components/SimpleRectangleAnimation";
import { IntegratedHeroSection } from "@/components/IntegratedHeroSection";
import { AnimationSection } from "@/components/AnimationSection";
import LogoBanner from "@/components/LogoBanner";
import { USPsShowcase } from "@/components/USPsShowcase";
import { FunctionalitiesTeaser } from "@/components/FunctionalitiesTeaser";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { PartnerPhotosGrid } from "@/components/PartnerPhotosGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { IntegrationsShowcase } from "@/components/IntegrationsShowcase";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { OrganizationSchema } from "@/components/StructuredData";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OrganizationSchema />
      {/* Hero and animation sections */}
      <section aria-label="Hero" className="relative overflow-hidden">
        <AnimatedGridBackground key="animated-grid-v2" />
        <IntegratedHeroSection />
        <LogoBanner />
        {/* <SimpleRectangleAnimation />
        TODO: kunden auch in banner anzeigen
        */}
        <AnimationSection />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
      </section>

      {/* Platform features */}
      <section aria-label="Platform Features" className="relative overflow-hidden" style={{
        background: `
          linear-gradient(45deg, hsl(var(--background)) 0%, hsl(var(--noreja-secondary) / 0.12) 30%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1200px 900px at 30% 70%, hsl(var(--noreja-main) / 0.08) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          {/* TODO: add workbench to features teaser */}
          <FunctionalitiesTeaser />
        </div>
      </section>

      {/* Partners */}
      <section aria-label="Partners" className="relative overflow-hidden">
        <AnimatedGridBackground key="animated-grid-partners" />
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          <PartnerPhotosGrid />
        </div>
      </section>

      {/* Value propositions */}
      <section aria-label="Value Propositions" className="relative overflow-hidden" style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.14) 50%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 800px at 50% 50%, hsl(var(--noreja-secondary) / 0.10) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          <USPsShowcase />
        </div>
      </section>

      {/* Integrations */}
      <section aria-label="Integrations" className="relative overflow-hidden">
        <AnimatedGridBackground key="animated-grid-integrations" />
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
        <div className="relative z-10">
          <IntegrationsShowcase />
        </div>
      </section>

      {/* Blog and CTA */}
      <section aria-label="Blog and Contact" className="relative overflow-hidden" style={{
        background: `
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
          radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
        `
      }}>
        {/* Gradient fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
        <div className="relative z-10">
          <HubSpotBlogTeaser />
          <FinalCTA />
        </div>
      </section>
    </>
  );
};

export default Index;
