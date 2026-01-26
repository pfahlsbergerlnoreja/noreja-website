import { motion } from "framer-motion";
import { useEffect } from "react";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

// Agent card images
import builderImage from "@/assets/agents/builder.webp";
import complianceImage from "@/assets/agents/compliance.webp";

const cardImages = {
  card1: builderImage,
  card2: "/placeholder.svg", // Placeholder until image is added
  card3: complianceImage,
};

interface AgentCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

function AgentCard({ image, title, description, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-noreja-main/50 transition-all duration-300"
    >
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      image: cardImages.card1,
      title: t.pages.aiAgents.cards.card1.title,
      description: t.pages.aiAgents.cards.card1.description,
    },
    {
      image: cardImages.card2,
      title: t.pages.aiAgents.cards.card2.title,
      description: t.pages.aiAgents.cards.card2.description,
    },
    {
      image: cardImages.card3,
      title: t.pages.aiAgents.cards.card3.title,
      description: t.pages.aiAgents.cards.card3.description,
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
        <section className="pb-20 lg:pb-28">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cards.map((card, index) => (
                <AgentCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist CTA Section */}
        <section className="py-20 lg:py-28">
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
                >
                  {t.pages.aiAgents.waitlistCta.buttonLabel}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
