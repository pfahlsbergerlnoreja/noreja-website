import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NewsletterToastProps {
  onFormSubmit?: () => void;
}

export function NewsletterToast({ onFormSubmit }: NewsletterToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('noreja_newsletter_dismissed') === 'true';
    const submitted  = localStorage.getItem('noreja_newsletter_submitted')  === 'true';
    if (dismissed || submitted) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('noreja_newsletter_dismissed', 'true');
    setVisible(false);
  };

  const handleFormSubmit = () => {
    localStorage.setItem('noreja_newsletter_submitted', 'true');
    setVisible(false);
    onFormSubmit?.();
  };

  return (
    <AnimatePresence>
      {visible && (
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

          {/* HubSpot form will go here — call handleFormSubmit on submission */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
