import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProcessGraphAnimation } from "@/components/ProcessGraphAnimation";

interface AnimationSectionProps {
  size?: "default" | "large";
}

export function AnimationSection({ size = "default" }: AnimationSectionProps) {
  const { t } = useLanguage();

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
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
