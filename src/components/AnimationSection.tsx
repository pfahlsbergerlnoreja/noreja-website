import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";
import mainAnimation from "@/assets/animation/main_animation_transparent.webm";
import dashboardImg from "@/assets/platform/dashboard.png";
import analyzerImg from "@/assets/platform/analyzer.png";
import minervaImg from "@/assets/platform/minerva.png";
import builderImg from "@/assets/platform/builder.png";
import workbenchImg from "@/assets/platform/workbench.png";

interface AnimationSectionProps {
  size?: "default" | "large";
}

// Detect Safari browser
const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1 && ua.indexOf('chromium') === -1;
};

export function AnimationSection({ size = "default" }: AnimationSectionProps) {
  const { t } = useLanguage();

  // Platform images array
  const platformImages = [
    dashboardImg,
    analyzerImg,
    minervaImg,
    builderImg,
    workbenchImg,
  ];

  // Randomly select one image on mount (changes on each reload)
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * platformImages.length);
    return platformImages[randomIndex];
  }, []); // Empty deps means it only runs once on mount

  const isSafariBrowser = useMemo(() => isSafari(), []);

  // Size configurations
  const sizeConfig = {
    default: {
      sectionHeight: "h-[700px] lg:h-[800px]",
      maxWidth: "max-w-6xl",
    },
    large: {
      sectionHeight: "h-[1650px] lg:h-[1800px]",
      maxWidth: "max-w-8xl",
    },
  };

  const config = sizeConfig[size];

  return (
    <section className={`${config.sectionHeight} overflow-hidden hidden min-[500px]:block`}>
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-center ${config.maxWidth} mx-auto h-full flex items-center justify-center -mt-16 lg:-mt-20`}
        >
          {/* Video animation for non-Safari, random platform image for Safari */}
          <div className="relative w-full h-full">
            {isSafariBrowser ? (
              <img
                src={randomImage}
                alt="Noreja Platform"
                className="w-full h-full rounded-2xl object-contain"
              />
            ) : (
              <video
                src={mainAnimation}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full rounded-2xl object-contain"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

