import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PORTAL_ID = "144242473";
const FORM_ID_EN = "c56d0262-0916-49c0-b058-cd0d2d4e2539";
const FORM_ID_DE = "4c2d159d-aefd-491d-b7bb-0d64474ae2a3";
const HS_SCRIPT_URL = `https://js-eu1.hsforms.net/forms/embed/${PORTAL_ID}.js`;

export function NewsletterToast() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const scriptLoaded = useRef(false);

  const formId = language === "en" ? FORM_ID_EN : FORM_ID_DE;

  // Show toast after delay (only when a formId is available)
  useEffect(() => {
    if (!formId) return;

    const dismissed = sessionStorage.getItem('noreja_newsletter_dismissed') === 'true';
    const submitted  = localStorage.getItem('noreja_newsletter_submitted')  === 'true';
    if (dismissed || submitted) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, [formId]);

  // Load HubSpot embed script once toast becomes visible
  useEffect(() => {
    if (!visible || scriptLoaded.current) return;

    const script = document.createElement("script");
    script.src = HS_SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);
    scriptLoaded.current = true;
  }, [visible]);

  const handleDismiss = () => {
    sessionStorage.setItem('noreja_newsletter_dismissed', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && formId && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 w-80 rounded-xl bg-card/80 backdrop-blur-xl border border-border/40 shadow-2xl p-6"
        >
          <button
            onClick={handleDismiss}
            aria-label="Close"
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
          <div
            className="hs-form-frame"
            data-region="eu1"
            data-form-id={formId}
            data-portal-id={PORTAL_ID}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
