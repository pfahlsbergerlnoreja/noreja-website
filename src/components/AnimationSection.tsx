import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProcessGraphAnimation } from "@/components/ProcessGraphAnimation";

/**
 * The findings panel is authored for a full-bleed 1920x1080 frame. The animation
 * container caps out around 1110 px wide, so the panel's 14.5 px meta line lands
 * near 11 px on a desktop and keeps shrinking below that. Under the lg breakpoint
 * the panel is turned off, which also recenters the graph. Initialised
 * synchronously so the first render is already correct.
 */
const FINDINGS_MIN_WIDTH = 1024;

function useFindingsFit() {
  const [fits, setFits] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= FINDINGS_MIN_WIDTH : true
  );
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${FINDINGS_MIN_WIDTH}px)`);
    const onChange = () => setFits(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return fits;
}

interface AnimationSectionProps {
  size?: "default" | "large";
}

export function AnimationSection({ size = "default" }: AnimationSectionProps) {
  const { t } = useLanguage();
  const showFindings = useFindingsFit();

  // Size configurations
  const sizeConfig = {
    default: {
      sectionHeight: "h-[700px] lg:h-[800px]",
      maxWidth: "max-w-[1440px]",
    },
    large: {
      sectionHeight: "h-[1650px] lg:h-[1800px]",
      maxWidth: "max-w-8xl",
    },
  };

  const config = sizeConfig[size];

  return (
    <section className={`${config.sectionHeight} overflow-hidden hidden min-[500px]:block`}>
      {/* The graph used to occupy ~800px of the home page with no heading and no
          prose, so nothing about it was legible to anything that reads text. */}
      <div className="mx-auto mb-6 w-full max-w-3xl px-4 text-center lg:mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {t.processGraph.heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {t.processGraph.lede}
        </p>
      </div>
      <div className="mx-auto w-full px-2 sm:px-4 lg:px-6 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-center ${config.maxWidth} mx-auto h-full flex items-center justify-center -mt-16 lg:-mt-20`}
        >
          {/* Procedural process-graph animation (transparent, composites over the page) */}
          <div className="relative w-full h-full">
            <ProcessGraphAnimation
              className="w-full h-full rounded-2xl"
              hint={t.processGraph.hint}
              findings={showFindings ? t.processGraph.findings : []}
              findingsHeader={t.processGraph.findingsHeader}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
