import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  FileDown,
  Linkedin,
  MessageSquareQuote,
  Users,
  Youtube,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/FinalCTA";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { BreadcrumbSchema, StructuredData } from "@/components/StructuredData";
import { SITE_URL, siteConfig } from "@/lib/config";
import { getRoutePath } from "@/lib/routes";
import { getImageSize } from "@/lib/imageSize";
import {
  expertTalkEpisodes,
  expertTalkExperts,
  formatDuration,
  toIsoDuration,
} from "@/lib/expertTalk";

const MIRAGON_URL = "https://www.miragon.io/";

const copy = {
  de: {
    badge: "Talk-Reihe mit Miragon",
    title: "Vier Experten, fünf Meinungen",
    lead:
      "In unserer Mini-Gesprächsreihe diskutieren Thomas Heinrichs und Dominik Horn von unserem Partner Miragon mit Jan Mendling und Lukas Pfahlsberger von Noreja über Process Intelligence, Process Mining, IT-Governance und die Zukunft von KI.",
    expertsHeading: "Die vier Experten",
    episodesNav: "Alle fünf Themen",
    episodeLabel: "Thema",
    watch: "Video ansehen",
    play: "Video abspielen",
    onYouTube: "Auf YouTube ansehen",
    transcript: "Transkript herunterladen",
    minutes: "Min.",
    quotesHeading: "Vier Meinungen in einem Satz",
    topicsLabel: "Themen",
    comicAlt: (q: string, s: string) =>
      `Comic „Vier Experten, fünf Meinungen“: ${q} ${s} – die vier Kernaussagen als Sprechblasen`,
    languageNote: "",
    fifthTitle: "Und die 5. Meinung? Deine!",
    fifthText:
      "Welcher These stimmst du zu – und wo liegen wir falsch? Schreib deine Meinung in die Kommentare auf YouTube oder sprich direkt mit uns über deine Process-Intelligence- und KI-Initiativen.",
    fifthYoutube: "Zum YouTube-Kanal",
    fifthContact: "Mit uns sprechen",
    partnerHeading: "Über Miragon",
    partnerText:
      "Miragon ist eine Boutique-Beratung für Prozessmanagement, Process Mining und Automatisierung aus Augsburg und Technologie- und Implementierungspartner von Noreja. Gemeinsam begleiten wir Unternehmen über den gesamten BPM-Lifecycle – von der Prozessanalyse bis zur Umsetzung.",
    partnerLink: "Alle Partner ansehen",
    breadcrumbHome: "Startseite",
  },
  en: {
    badge: "Talk series with Miragon",
    title: "Four experts, five opinions",
    lead:
      "In our mini talk series, Thomas Heinrichs and Dominik Horn from our partner Miragon discuss process intelligence, process mining, IT governance and the future of AI with Jan Mendling and Lukas Pfahlsberger from Noreja.",
    expertsHeading: "The four experts",
    episodesNav: "All five topics",
    episodeLabel: "Topic",
    watch: "Watch video",
    play: "Play video",
    onYouTube: "Watch on YouTube",
    transcript: "Download transcript (German)",
    minutes: "min",
    quotesHeading: "Four opinions in one sentence each",
    topicsLabel: "Topics",
    comicAlt: (q: string, s: string) =>
      `Comic "Four experts, five opinions": ${q} ${s} – the four key statements as speech bubbles`,
    languageNote: "The videos are in German.",
    fifthTitle: "And the 5th opinion? Yours!",
    fifthText:
      "Which claim do you agree with – and where are we wrong? Leave your opinion in the comments on YouTube or talk to us directly about your process intelligence and AI initiatives.",
    fifthYoutube: "Go to the YouTube channel",
    fifthContact: "Talk to us",
    partnerHeading: "About Miragon",
    partnerText:
      "Miragon is a boutique consultancy for process management, process mining and automation based in Augsburg, and a technology and implementation partner of Noreja. Together we support companies across the entire BPM lifecycle – from process analysis to implementation.",
    partnerLink: "See all partners",
    breadcrumbHome: "Home",
  },
} as const;

const ExpertTalk = () => {
  const { language } = useLanguage();
  const text = copy[language];
  const pageUrl = `${SITE_URL}${getRoutePath("expertTalk", language)}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const organization = { "@type": "Organization", name: "Noreja Intelligence GmbH", url: SITE_URL };
  const actors = expertTalkExperts.map((expert) => ({
    "@type": "Person",
    name: expert.name,
    ...(expert.role ? { jobTitle: expert.role[language] } : {}),
    worksFor: {
      "@type": "Organization",
      name: expert.company === "Miragon" ? "Miragon GmbH" : "Noreja Intelligence GmbH",
      url: expert.company === "Miragon" ? MIRAGON_URL : SITE_URL,
    },
    ...(expert.linkedInUrl ? { sameAs: expert.linkedInUrl } : {}),
  }));

  /** The series as a whole, with every episode as a VideoObject */
  const seriesSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    "@id": `${pageUrl}#series`,
    name: text.title,
    description: text.lead,
    url: pageUrl,
    inLanguage: "de",
    publisher: organization,
    contributor: [organization, { "@type": "Organization", name: "Miragon GmbH", url: MIRAGON_URL }],
    actor: actors,
    hasPart: expertTalkEpisodes.map((episode) => {
      const content = episode.content[language];
      return {
        "@type": "VideoObject",
        "@id": `${pageUrl}#${episode.anchor}`,
        name: `${text.title} #${episode.number}: ${content.question} ${content.subtitle}`,
        description: `${content.summary} ${content.quotes.join(" ")}`,
        thumbnailUrl: [
          `https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg`,
          `https://i.ytimg.com/vi/${episode.youtubeId}/hqdefault.jpg`,
        ],
        uploadDate: episode.uploadDate,
        duration: toIsoDuration(episode.durationSeconds),
        embedUrl: `https://www.youtube.com/embed/${episode.youtubeId}`,
        contentUrl: `https://www.youtube.com/watch?v=${episode.youtubeId}`,
        url: `${pageUrl}#${episode.anchor}`,
        inLanguage: "de",
        episodeNumber: episode.number,
        keywords: content.topics.join(", "),
        publisher: organization,
        actor: actors,
      };
    }),
  };

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 30%, hsl(var(--noreja-secondary) / 0.12) 70%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 80% 10%, hsl(var(--noreja-tertiary) / 0.12) 0%, transparent 60%)
    `,
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden" style={gradientStyle}>
      <StructuredData schema={seriesSchema} id="expert-talk-series" />
      <BreadcrumbSchema
        items={[
          { name: text.breadcrumbHome, url: `${SITE_URL}${getRoutePath("home", language)}` },
          { name: text.title, url: pageUrl },
        ]}
      />

      <div className="relative z-10">
        {/* ------------------------------------------------------------ hero */}
        <section className="px-4 pt-16 pb-12 md:pt-24 lg:px-8">
          <div className="mx-auto w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <MessageSquareQuote className="mr-2 h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{text.badge}</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{text.title}</h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {text.lead}
              </p>
              {text.languageNote && (
                <p className="mt-3 text-sm text-muted-foreground/80">{text.languageNote}</p>
              )}
            </motion.div>

            {/* the four experts */}
            <h2 className="mt-14 mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Users className="h-4 w-4 text-accent" />
              {text.expertsHeading}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {expertTalkExperts.map((expert, index) => (
                <motion.li
                  key={expert.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex flex-col rounded-2xl border border-border/50 bg-card/60 p-5 text-left backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-foreground">{expert.name}</p>
                  {expert.role && (
                    <p className="mt-1 text-xs text-muted-foreground">{expert.role[language]}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{expert.company}</p>
                  {expert.linkedInUrl && (
                    // same LinkedIn button as the partner cards on the home page,
                    // pinned to the bottom so the buttons line up across cards
                    <div className="mt-auto flex justify-center pt-4">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-blue-400 text-blue-400 hover:bg-blue-900/30 hover:text-blue-300"
                      >
                        <a
                          href={expert.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${expert.name} – LinkedIn Profile`}
                        >
                          LinkedIn Profile
                          <Linkedin className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* jump links to the five topics */}
            <nav aria-label={text.episodesNav} className="mt-10">
              <ol className="flex flex-wrap justify-center gap-2">
                {expertTalkEpisodes.map((episode) => (
                  <li key={episode.anchor}>
                    <a
                      href={`#${episode.anchor}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: `hsl(${episode.accent})` }}
                        aria-hidden="true"
                      />
                      #{episode.number} {episode.content[language].question}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* -------------------------------------------------------- episodes */}
        {expertTalkEpisodes.map((episode, index) => {
          const content = episode.content[language];
          const imageSize = getImageSize(episode.image);
          const reversed = index % 2 === 1;
          const headingId = `${episode.anchor}-heading`;

          return (
            <section
              key={episode.anchor}
              id={episode.anchor}
              aria-labelledby={headingId}
              className="scroll-mt-24 px-4 py-14 md:py-20 lg:px-8"
            >
              <div className="mx-auto w-full max-w-6xl">
                <motion.header
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="mb-10 text-center"
                >
                  <p
                    className="mb-3 inline-block -rotate-2 rounded-md px-3 py-1 text-sm font-bold uppercase tracking-wide text-black"
                    style={{ background: `hsl(${episode.accent})` }}
                  >
                    {text.title} · {text.episodeLabel} #{episode.number}
                  </p>
                  <h2 id={headingId} className="text-3xl font-bold text-foreground md:text-4xl">
                    {content.question}
                  </h2>
                  <p className="mt-2 text-lg text-muted-foreground md:text-xl">{content.subtitle}</p>
                </motion.header>

                <div
                  className={`grid items-start gap-8 lg:gap-12 ${
                    reversed
                      ? "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
                      : "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
                  }`}
                >
                  {/* comic artwork */}
                  <motion.figure
                    initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`mx-auto w-full max-w-md lg:max-w-none ${reversed ? "lg:order-2" : ""}`}
                  >
                    <div
                      className="expert-frame"
                      style={{ "--frame-accent": episode.accent } as React.CSSProperties}
                    >
                      <div>
                        <img
                          src={episode.image}
                          alt={text.comicAlt(content.question, content.subtitle)}
                          width={imageSize?.width ?? 1080}
                          height={imageSize?.height ?? 1350}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="block h-auto w-full"
                        />
                      </div>
                    </div>
                  </motion.figure>

                  {/* video + what the episode is about */}
                  <motion.div
                    initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={reversed ? "lg:order-1" : ""}
                  >
                    <div
                      className="expert-frame"
                      style={{ "--frame-accent": episode.accent } as React.CSSProperties}
                    >
                      <div>
                        <YouTubeFacade
                          videoId={episode.youtubeId}
                          title={`${text.title} #${episode.number}: ${content.question}`}
                          playLabel={`${text.play}: ${content.question}`}
                          badge={formatDuration(episode.durationSeconds)}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-accent" />
                        {Math.round(episode.durationSeconds / 60)} {text.minutes}
                      </span>
                      <a
                        href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-primary"
                      >
                        <Youtube className="h-4 w-4" />
                        {text.onYouTube}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      {episode.transcript && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="h-8 bg-background/60 hover:border-primary/60 hover:bg-primary/10"
                        >
                          <a
                            href={episode.transcript}
                            download
                            aria-label={`${text.transcript}: ${content.question}`}
                          >
                            <FileDown className="mr-1.5 h-4 w-4" />
                            {text.transcript}
                          </a>
                        </Button>
                      )}
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {content.summary}
                    </p>

                    <h3 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                      {text.quotesHeading}
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {content.quotes.map((quote) => (
                        <li key={quote}>
                          <blockquote
                            className="h-full rounded-xl border border-border/50 bg-card/60 p-4 text-sm font-medium leading-snug text-foreground backdrop-blur-sm"
                            style={{ borderLeft: `3px solid hsl(${episode.accent})` }}
                          >
                            „{quote}“
                          </blockquote>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={text.topicsLabel}>
                      {content.topics.map((topic) => (
                        <li
                          key={topic}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* --------------------------------------------- the fifth opinion */}
        <section className="px-4 py-14 md:py-20 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <div className="expert-frame" style={{ "--frame-accent": "48 100% 55%" } as React.CSSProperties}>
              <div className="bg-card/80 px-6 py-10 text-center backdrop-blur-sm md:px-12">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{text.fifthTitle}</h2>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {text.fifthText}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg" className="story-cta">
                    <a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-5 w-5" />
                      {text.fifthYoutube}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-background/60">
                    <Link to={getRoutePath("contact", language)}>
                      {text.fifthContact}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- the partner */}
        <section className="px-4 pb-16 lg:px-8">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground">{text.partnerHeading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{text.partnerText}</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href={MIRAGON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                miragon.io
                <ExternalLink className="h-3 w-3" />
              </a>
              <Link to={getRoutePath("partners", language)} className="text-primary hover:underline">
                {text.partnerLink}
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </div>
    </div>
  );
};

export default ExpertTalk;
