import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Zap } from "lucide-react";
import { config } from "@/lib/config";

// Agent card images
import builderImage from "@/assets/agents/builder.webp";
import complianceImage from "@/assets/agents/compliance.webp";
import analystImage from "@/assets/agents/analyst.webp";

const cardImages = {
  card1: analystImage,
  card2: builderImage,
  card3: complianceImage,
};

// HubSpot form script URL - use iframe embed
const HUBSPOT_FORM_SCRIPT = "https://js-eu1.hsforms.net/forms/embed/144242473.js";
const HUBSPOT_FORM_REGION = "eu1";
const HUBSPOT_PORTAL_ID = "144242473";
const HUBSPOT_FORM_ID = "cba179f6-530c-43a4-9d41-4bc0a459953b";

// Load HubSpot form script globally (only once) - using exact HubSpot pattern
let scriptLoaded = false;
const loadHubSpotFormScript = (): void => {
  // Check if script already exists
  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${HUBSPOT_FORM_SCRIPT}"]`
  );
  if (existingScript || scriptLoaded) {
    return;
  }

  // Create script with defer attribute exactly as HubSpot specifies
  const script = document.createElement("script");
  script.src = HUBSPOT_FORM_SCRIPT;
  script.defer = true;
  script.onload = () => {
    scriptLoaded = true;
  };
  document.head.appendChild(script);
};

interface AgentCardProps {
  image: string;
  title: string;
  description: string;
  efficiencyTag: string;
  index: number;
}

function AgentCard({ image, title, description, efficiencyTag, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-noreja-main/50 transition-all duration-300"
    >
      {/* Efficiency Tag */}
      <div className="absolute top-4 left-4 z-20 inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
        <Zap className="w-3 h-3 mr-1.5 text-noreja-tertiary" />
        <span className="text-xs font-medium">{efficiencyTag}</span>
      </div>

      {/* Card Image */}
      <div className="relative aspect-[1/1] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-noreja-main transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-noreja-main/5 via-transparent to-noreja-secondary/5" />
      </div>
    </motion.div>
  );
}

export default function AIAgents() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load HubSpot form script once on component mount
  useEffect(() => {
    loadHubSpotFormScript();
  }, []);

  // Handle waitlist button click
  const handleWaitlistClick = () => {
    setIsModalOpen(true);
  };

  const cards = [
    {
      image: cardImages.card1,
      title: t.pages.aiAgents.cards.card2.title,
      description: t.pages.aiAgents.cards.card2.description,
      efficiencyTag: t.pages.aiAgents.cards.card2.efficiencyTag,
    },
    {
      image: cardImages.card2,
      title: t.pages.aiAgents.cards.card1.title,
      description: t.pages.aiAgents.cards.card1.description,
      efficiencyTag: t.pages.aiAgents.cards.card1.efficiencyTag,
    },
    {
      image: cardImages.card3,
      title: t.pages.aiAgents.cards.card3.title,
      description: t.pages.aiAgents.cards.card3.description,
      efficiencyTag: t.pages.aiAgents.cards.card3.efficiencyTag,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-page animated background */}
      <AnimatedGridBackground />

      {/* All content layered on top */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {t.pages.aiAgents.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t.pages.aiAgents.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="pb-12 lg:pb-16">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cards.map((card, index) => (
                <AgentCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  efficiencyTag={card.efficiencyTag}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist CTA Section */}
        <section className="pt-12 lg:pt-16 pb-20 lg:pb-28">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="p-8 lg:p-12 rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  {t.pages.aiAgents.waitlistCta.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t.pages.aiAgents.waitlistCta.subtitle}
                </p>
                <Button
                  size="lg"
                  className="gradient-primary glow-primary group"
                  onClick={handleWaitlistClick}
                >
                  {t.pages.aiAgents.waitlistCta.buttonLabel}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Waitlist Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <ArrowRight className="w-5 h-5 mr-2 text-noreja-main" />
              {t.pages.aiAgents.waitlistCta.title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-muted-foreground mb-6">
              {t.pages.aiAgents.waitlistCta.subtitle}
            </p>
            
            {/* HubSpot form - exact structure as specified */}
            <div 
              className="hs-form-frame" 
              data-region={HUBSPOT_FORM_REGION}
              data-form-id={config.hubspot.defaultFormGuid || HUBSPOT_FORM_ID}
              data-portal-id={config.hubspot.portalId || HUBSPOT_PORTAL_ID}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
