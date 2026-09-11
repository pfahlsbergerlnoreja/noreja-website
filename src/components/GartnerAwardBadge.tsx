import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import gartnerBadge from '@/assets/awards/noreja_gartner_coolest_vendor_innovation.webp';

const GARTNER_URL = 'https://www.gartner.com/en/documents/8319453';

const copy = {
  de: {
    eyebrow: 'Auszeichnung',
    title: 'Gartner® „Coolest Vendor Innovations in Process Intelligence“ 2026',
    text: 'Noreja wurde 2026 von Gartner in dieser Veröffentlichung ausgezeichnet – eine unabhängige Bestätigung des kausalen Analyse-Ansatzes.',
    link: 'Zur Gartner-Veröffentlichung',
    alt: 'Gartner Coolest Vendor Innovations 2026',
  },
  en: {
    eyebrow: 'Recognition',
    title: 'Gartner® “Coolest Vendor Innovations in Process Intelligence” 2026',
    text: 'Noreja was recognized by Gartner in this 2026 publication – independent validation of the causal analysis approach.',
    link: 'Read the Gartner publication',
    alt: 'Gartner Coolest Vendor Innovations 2026',
  },
} as const;

/**
 * Award callout for the Gartner "Coolest Vendor Innovations in Process
 * Intelligence" (2026) recognition. The continuous sheen runs on framer-motion
 * rather than a Tailwind keyframe so the box stays self-contained, and it
 * renders fully on the server for the prerendered battle-card pages.
 */
const GartnerAwardBadge = () => {
  const { language } = useLanguage();
  const t = copy[language] ?? copy.en;

  return (
    <motion.a
      href={GARTNER_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className="group relative mt-8 block overflow-hidden rounded-2xl border border-noreja-main/30 bg-background/90 p-5 shadow-lg shadow-noreja-main/10 backdrop-blur-sm transition-colors hover:border-noreja-main/60 md:p-6"
    >
      {/* Static tint + travelling sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-noreja-main/10 via-transparent to-noreja-secondary/15" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(115deg, transparent 35%, hsl(var(--noreja-secondary) / 0.28) 50%, transparent 65%)',
          backgroundSize: '250% 100%',
        }}
        initial={{ backgroundPosition: '160% 0%' }}
        animate={{ backgroundPosition: '-60% 0%' }}
        transition={{ duration: 2.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3.4 }}
      />

      <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center">
        <motion.img
          src={gartnerBadge}
          alt={t.alt}
          width={200}
          height={125}
          loading="lazy"
          className="w-32 shrink-0 rounded-xl shadow-md shadow-black/20 ring-1 ring-white/10 sm:w-36"
          whileHover={{ scale: 1.04, rotate: -1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        />

        <div className="min-w-0">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-noreja-main">
            <Award className="h-3.5 w-3.5" />
            {t.eyebrow}
          </span>
          <h2 className="mt-1 text-base font-bold leading-snug md:text-lg">{t.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            {t.link}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default GartnerAwardBadge;
