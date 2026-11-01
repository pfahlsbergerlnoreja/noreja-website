import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Linkedin, MessageCircleQuestion, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/config";
import salesPhoto from "@/assets/team/Matthias-Brengartner.webp";

const { salesContact } = siteConfig;

// The tailwind `noreja-*` colours resolve to bare HSL triples, so the brand
// gradient is written out as inline styles.
const brandGradient = "linear-gradient(135deg, hsl(var(--noreja-main)), hsl(var(--noreja-secondary)))";

/** How many questions the stream shows at once. */
const VISIBLE_QUESTIONS = 3;
/** Pause between two questions, and how long the typing dots show before one. */
const QUESTION_PAUSE_MS = 1800;
const TYPING_MS = 1100;

/** Horizontal offsets for the visitor bubbles, so the stream doesn't look like a list. */
const BUBBLE_OFFSETS = ["mr-0", "mr-10", "mr-4"];

function PhotoCard({ hello }: { hello: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Slowly turning glow behind the photo */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full opacity-50 blur-3xl"
        style={{ background: "conic-gradient(from 0deg, hsl(var(--noreja-main)), hsl(var(--noreja-secondary)), transparent, hsl(var(--noreja-main)))" }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative"
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="rounded-[2rem] p-[2px] shadow-2xl" style={{ background: brandGradient }}>
          <img
            src={salesPhoto}
            alt={salesContact.name}
            width={400}
            height={600}
            className="aspect-[4/5] w-full rounded-[calc(2rem-2px)] object-cover object-top"
          />
        </div>

        <motion.div
          className="absolute -right-3 top-8 rounded-full border border-border/60 bg-card/90 px-4 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur sm:-right-8"
          initial={{ opacity: 0, scale: 0.5, x: 12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 16 }}
        >
          <motion.span
            aria-hidden="true"
            className="mr-1.5 inline-block origin-[70%_70%]"
            animate={reduceMotion ? undefined : { rotate: [0, 18, -8, 18, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.6 }}
          >
            👋
          </motion.span>
          {hello}
        </motion.div>

        <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border/60 bg-card/90 px-5 py-3 text-center shadow-xl backdrop-blur">
          <p className="font-semibold text-foreground">{salesContact.name}</p>
          <p className="text-xs text-muted-foreground">{salesContact.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function QuestionStream({ label, questions, reply }: { label: string; questions: string[]; reply: string }) {
  const reduceMotion = useReducedMotion();
  // Number of questions asked so far; the stream shows the last few of them.
  // Starting at VISIBLE_QUESTIONS means the first render (and the prerendered
  // HTML) already holds a full stream.
  const [asked, setAsked] = useState(VISIBLE_QUESTIONS);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    let typingTimer: ReturnType<typeof setTimeout> | undefined;
    const pauseTimer = setTimeout(() => {
      setTyping(true);
      typingTimer = setTimeout(() => {
        setTyping(false);
        setAsked((n) => n + 1);
      }, TYPING_MS);
    }, QUESTION_PAUSE_MS);
    return () => {
      clearTimeout(pauseTimer);
      clearTimeout(typingTimer);
    };
  }, [asked, reduceMotion]);

  const visible = Array.from({ length: VISIBLE_QUESTIONS }, (_, i) => {
    const n = asked - VISIBLE_QUESTIONS + i;
    return { n, text: questions[n % questions.length] };
  });

  return (
    <div className="rounded-3xl border border-border/60 bg-card/50 p-5 text-left shadow-xl backdrop-blur-md sm:p-6">
      <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <MessageCircleQuestion className="h-4 w-4" />
        {label}
      </p>

      {/* The full list for screen readers and crawlers; the animated stream is decoration. */}
      <ul className="sr-only">
        {questions.map((question) => <li key={question}>{question}</li>)}
      </ul>

      <div aria-hidden="true" className="flex h-56 flex-col justify-end gap-3 overflow-hidden sm:h-48">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map(({ n, text }) => (
            <motion.div
              key={n}
              layout
              className={`max-w-[85%] self-end rounded-2xl rounded-br-sm border border-border/60 bg-muted/70 px-4 py-2.5 text-sm text-foreground shadow-sm ${BUBBLE_OFFSETS[n % BUBBLE_OFFSETS.length]}`}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -16 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              style={{ transformOrigin: "bottom right" }}
            >
              {text}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              className="flex gap-1 self-end rounded-2xl rounded-br-sm border border-border/60 bg-muted/70 px-4 py-3"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-end gap-3">
        <img
          src={salesPhoto}
          alt=""
          width={400}
          height={600}
          className="h-9 w-9 shrink-0 rounded-full object-cover object-top"
          style={{ boxShadow: "0 0 0 2px hsl(var(--noreja-main))" }}
        />
        <p
          className="rounded-2xl rounded-bl-sm border px-4 py-2.5 text-sm font-medium text-foreground"
          style={{
            background: "linear-gradient(135deg, hsl(var(--noreja-main) / 0.22), hsl(var(--noreja-secondary) / 0.22))",
            borderColor: "hsl(var(--noreja-main) / 0.4)"
          }}
        >
          {reply}
        </p>
      </div>
    </div>
  );
}

function PhoneButton({ label }: { label: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={`tel:${salesContact.phone}`}
      aria-label={`${label}: ${salesContact.phoneDisplay}`}
      className="relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-white shadow-lg"
      style={{ background: brandGradient }}
      animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Rings rippling out of the button */}
      {!reduceMotion && [0, 1].map((ring) => (
        <motion.span
          key={ring}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{ boxShadow: "0 0 0 2px hsl(var(--noreja-main))" }}
          animate={{ scale: [1, 1.35], opacity: [0.7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: ring * 1.2, ease: "easeOut" }}
        />
      ))}
      <motion.span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20"
        animate={reduceMotion ? undefined : { rotate: [0, -18, 18, -12, 12, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 2.2 }}
      >
        <Phone className="h-5 w-5" />
      </motion.span>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-xs font-medium opacity-85">{label}</span>
        <span className="text-lg font-semibold tracking-wide">{salesContact.phoneDisplay}</span>
      </span>
    </motion.a>
  );
}

/** Top of the contact page: Matthias, the questions people ask him, and his number. */
export function ContactHero() {
  const { t } = useLanguage();
  const copy = t.pages.contact.salesContact;

  return (
    <section className="relative px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col items-center gap-14 lg:col-span-5">
          <PhotoCard hello={copy.hello} />
          <PhoneButton label={copy.callLabel} />
        </div>

        <div className="text-center lg:col-span-7 lg:text-left">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ background: brandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            {t.pages.contact.title}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl xl:text-6xl">
            {copy.greeting}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            {copy.intro}
          </p>

          <QuestionStream label={copy.questionsLabel} questions={copy.questions} reply={copy.reply} />

          <div className="mt-6 flex items-center justify-center gap-5 lg:justify-start">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={siteConfig.hubspot.appointmentBooking} target="_blank" rel="noopener noreferrer">
                {t.pages.contact.bookCallButton}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <a
              href={salesContact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${salesContact.name} on LinkedIn`}
              className="text-muted-foreground transition-fast hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
