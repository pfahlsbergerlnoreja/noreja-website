import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Bell,
  Clock,
  Coins,
  Euro,
  LayoutGrid,
  ListTodo,
  Lock,
  LucideIcon,
  RefreshCw,
  Search,
  Shield,
  TrendingUp,
  Workflow,
} from "lucide-react";

import { CostOfInactionCalculator } from "@/components/CostOfInactionCalculator";
import { HubSpotBlogTeaser } from "@/components/HubSpotBlogTeaser";
import { SoftwareApplicationSchema } from "@/components/StructuredData";
import { AgentEquipper } from "@/components/platform/AgentEquipper";
import { LoopLedgerHub } from "@/components/platform/LoopLedgerHub";
import { PhaseRing } from "@/components/platform/PhaseRing";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAutoPhase, useLoopLedger } from "@/hooks/use-loop-motion";
import {
  agentRoster,
  comparisonRows,
  heroWords,
  loopPhases,
  platformCopy,
  statusQuoGaps,
  type CapabilityIcon,
  type LoopPhase,
} from "@/lib/platformLoop";
import { getRoutePath } from "@/lib/routes";

/**
 * Brand colours must be written as `hsl(var(--noreja-*) / a)`.
 * The `noreja-*` Tailwind colour utilities resolve to bare HSL components
 * (`256 77% 56%`) and therefore produce invalid CSS.
 */
const MINT = "hsl(var(--noreja-tertiary))";

const CAPABILITY_ICONS: Record<CapabilityIcon, LucideIcon> = {
  search: Search,
  clock: Clock,
  coins: Coins,
  shield: Shield,
  bell: Bell,
  workflow: Workflow,
  listTodo: ListTodo,
  euro: Euro,
  trending: TrendingUp,
  lock: Lock,
  activity: Activity,
  layout: LayoutGrid,
  refresh: RefreshCw,
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em]" style={{ color: MINT }}>
    {children}
  </p>
);

/* ------------------------------------------------------------------ *
 * Phase panel — one per loop phase, reports itself to the sticky ring
 * ------------------------------------------------------------------ */

interface PhasePanelProps {
  phase: LoopPhase;
  index: number;
  isActive: boolean;
  onEnter: (index: number) => void;
}

const PhasePanel = ({ phase, index, isActive, onEnter }: PhasePanelProps) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);

  const { agent } = phase;
  const message = agent.message[language];
  const highlight = agent.highlight[language];
  const [before, after] = message.includes(highlight)
    ? [message.slice(0, message.indexOf(highlight)), message.slice(message.indexOf(highlight) + highlight.length)]
    : [message, ""];

  return (
    <article
      ref={ref}
      id={phase.id}
      className={`flex scroll-mt-24 flex-col justify-center gap-5 border-t py-9 transition-opacity duration-500 lg:min-h-screen lg:border-t-0 lg:py-[10vh] ${
        isActive ? "lg:opacity-100" : "lg:opacity-30"
      }`}
      style={{ borderColor: "hsl(var(--border))" }}
    >
      <div className="flex flex-wrap items-center gap-3.5">
        <span
          className="rounded-full border px-3 py-1.5 font-mono text-[0.72rem] tracking-[0.18em]"
          style={{
            color: MINT,
            borderColor: "hsl(var(--noreja-tertiary) / 0.35)",
            background: "hsl(var(--noreja-tertiary) / 0.06)",
          }}
        >
          {platformCopy.phaseBadge[language].replace("{n}", String(index + 1).padStart(2, "0"))}
        </span>
        <span className="font-mono text-[0.8rem] text-muted-foreground">
          {phase.question[language]}
        </span>
      </div>

      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
        <span className="bg-gradient-accent bg-clip-text text-transparent">
          {phase.name[language]}
        </span>{" "}
        — {phase.headlineRest[language]}
      </h2>

      <p className="max-w-[62ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
        {phase.lede[language]}
      </p>

      <div className="grid gap-2.5">
        {phase.capabilities.map((capability) => {
          const Icon = CAPABILITY_ICONS[capability.icon];
          return (
            <div
              key={capability.title.en}
              className="grid grid-cols-[20px_1fr] items-start gap-3 rounded-xl border bg-card px-4 py-3.5 transition-all duration-200 hover:translate-x-1"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <Icon className="mt-0.5 h-5 w-5" style={{ color: MINT }} strokeWidth={1.6} />
              <div>
                <b className="block text-[0.97rem] font-semibold tracking-tight text-foreground">
                  {capability.title[language]}
                </b>
                <span className="text-[0.9rem] text-muted-foreground">
                  {capability.text[language]}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Agent output card */}
      <div
        className="overflow-hidden rounded-2xl border"
        style={{
          borderColor: "hsl(var(--border))",
          background: "linear-gradient(160deg, hsl(var(--secondary)), hsl(var(--card)))",
          boxShadow: "0 24px 60px -34px hsl(var(--noreja-main) / 0.7)",
        }}
      >
        <div
          className="flex items-center gap-2.5 border-b px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.13em] text-muted-foreground"
          style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--noreja-main) / 0.1)" }}
        >
          {agent.name[language]}
          <span
            className="ml-auto rounded-full border px-2.5 py-0.5 text-[0.62rem] tracking-[0.1em]"
            style={{
              color: MINT,
              background: "hsl(var(--noreja-tertiary) / 0.12)",
              borderColor: "hsl(var(--noreja-tertiary) / 0.3)",
            }}
          >
            {agent.status[language]}
          </span>
        </div>

        <div className="flex flex-col gap-3.5 px-[18px] py-[17px]">
          <p className="text-[0.97rem] leading-relaxed text-foreground">
            {before}
            <strong className="font-semibold" style={{ color: MINT }}>
              {highlight}
            </strong>
            {after}
          </p>

          {agent.metrics && (
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 border-t border-dashed pt-3 font-mono text-[0.71rem] text-muted-foreground"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              {agent.metrics.map((metric) => (
                <span key={metric.label.en}>
                  {metric.label[language]}{" "}
                  <b className="font-semibold tabular-nums text-foreground">
                    {metric.value[language]}
                  </b>
                </span>
              ))}
            </div>
          )}

          {agent.actions && (
            <div className="flex flex-wrap gap-2">
              {agent.actions.map((action, i) => (
                <span
                  key={action.en}
                  className="cursor-default rounded-lg border px-3 py-1.5 font-mono text-[0.7rem] tracking-[0.06em]"
                  style={
                    i === 0
                      ? {
                          background: "hsl(var(--noreja-main))",
                          borderColor: "hsl(var(--noreja-main))",
                          color: "#fff",
                        }
                      : { borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }
                  }
                >
                  {action[language]}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

/* ------------------------------------------------------------------ *
 * Page
 * ------------------------------------------------------------------ */

const Functionalities = () => {
  const { t, language } = useLanguage();
  const [activePhase, setActivePhase] = useState(0);
  const heroPhase = useAutoPhase(loopPhases.length);
  const heroLedger = useLoopLedger(heroPhase, loopPhases.length);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phaseNames = loopPhases.map((phase) => phase.name[language]);

  const scrollToPhase = (index: number) => {
    document.getElementById(loopPhases[index].id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SoftwareApplicationSchema />

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 22% 18%, hsl(var(--noreja-main) / 0.34), transparent 62%),
              radial-gradient(ellipse 45% 45% at 84% 62%, hsl(var(--noreja-tertiary) / 0.13), transparent 60%)
            `,
          }}
        />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 flex flex-col items-start gap-6 lg:order-1"
          >
            <Eyebrow>{platformCopy.heroEyebrow[language]}</Eyebrow>

            <h1 className="text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-foreground lg:text-[4.6rem]">
              <span className="mb-3 block text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-muted-foreground lg:mb-5 lg:text-[1.6rem]">
                {platformCopy.heroHeadingLead[language]}
              </span>{" "}
              {/* The trailing `{" "}` collapses away visually (the spans are
                  block level) but keeps `textContent` from reading as
                  "Insights.Action.Impact.Feedback." for anything that
                  extracts the heading without honouring layout. */}
              {heroWords(language).map((verb, i) => (
                <Fragment key={verb}>
                  <span className="block">
                    <span
                      className="transition-colors duration-500"
                      style={{ color: i === heroPhase ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground) / 0.55)" }}
                    >
                      {verb}
                    </span>
                    {i === heroPhase && (
                      <span
                        aria-hidden="true"
                        className="ml-2 inline-block h-[0.22em] w-[0.22em] rounded-full align-middle"
                        style={{ background: MINT, boxShadow: `0 0 18px ${MINT}` }}
                      />
                    )}
                  </span>{" "}
                </Fragment>
              ))}
            </h1>

            <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
              {platformCopy.heroLedeBefore[language]}
              <strong className="font-semibold text-foreground">
                {platformCopy.heroLedeStrong[language]}
              </strong>
              {platformCopy.heroLedeAfter[language]}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" className="group" asChild>
                <a href="#loop">
                  {platformCopy.heroCtaPrimary[language]}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#cost-of-inaction">{platformCopy.heroCtaSecondary[language]}</a>
              </Button>
            </div>

            <p className="flex flex-wrap gap-x-[18px] gap-y-1 font-mono text-[0.74rem] tracking-[0.06em] text-muted-foreground">
              {platformCopy.heroTrust[language].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 mx-auto w-full max-w-[440px] lg:order-2"
          >
            <PhaseRing
              activeIndex={heroPhase}
              labels={phaseNames}
              hub={<LoopLedgerHub ledger={heroLedger} />}
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------- Status quo ---------------- */}
      <section
        className="border-y py-16 lg:py-24"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-4 lg:grid-cols-2 lg:gap-[72px] lg:px-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{platformCopy.problemEyebrow[language]}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.7rem]">
              {platformCopy.problemHeadBefore[language]}
              <span className="text-muted-foreground">{platformCopy.problemHeadStrike[language]}</span>
              {platformCopy.problemHeadAfter[language]}
            </h2>
          </div>

          {/* One grid for the whole list, not one per row — otherwise the label
              column is sized per row and "Business Case?" pushes its row out of line. */}
          <div className="grid grid-cols-[max-content_1fr] items-baseline gap-x-5">
            {statusQuoGaps.map((gap, i) => (
              <Fragment key={gap.q.en}>
                <span className="whitespace-nowrap py-4 font-mono text-[0.74rem] tracking-[0.1em] text-amber-400">
                  {gap.q[language]}
                </span>
                <span className="py-4 text-[0.97rem] text-muted-foreground">
                  {gap.text[language]}
                </span>
                {i < statusQuoGaps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="col-span-2 border-b border-dashed"
                    style={{ borderColor: "hsl(var(--border))" }}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- The loop ---------------- */}
      <section id="loop" className="scroll-mt-20 pt-16 lg:pt-28">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex max-w-[68ch] flex-col gap-4 lg:mb-20">
            <Eyebrow>{platformCopy.loopEyebrow[language]}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[3rem]">
              {platformCopy.loopHeadline[language]}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {platformCopy.loopLede[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
            {/* Sticky ring + agent log */}
            <div className="sticky top-0 hidden h-screen flex-col justify-center gap-6 lg:flex">
              <div className="mx-auto w-full max-w-[380px]">
                <PhaseRing
                  activeIndex={activePhase}
                  labels={phaseNames}
                  hubLabel={platformCopy.loopPhaseOf[language].replace(
                    "{n}",
                    String(activePhase + 1)
                  )}
                  hubValue={loopPhases[activePhase].name[language]}
                  onNodeClick={scrollToPhase}
                />
              </div>

              <div
                className="mx-auto w-full max-w-[420px] rounded-[14px] border bg-card px-[18px] py-4 font-mono text-[0.79rem] leading-relaxed"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div
                  className="mb-2.5 flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.16em]"
                  style={{ color: MINT }}
                >
                  <span
                    className="h-[7px] w-[7px] animate-pulse rounded-full"
                    style={{ background: MINT, boxShadow: `0 0 10px ${MINT}` }}
                  />
                  {platformCopy.agentLogLabel[language]}
                </div>
                <div className="text-foreground">
                  <span className="text-muted-foreground">&gt;&nbsp;</span>
                  {loopPhases[activePhase].log[language]}
                </div>
              </div>
            </div>

            {/* Scrolling phase panels */}
            <div className="flex flex-col lg:gap-0">
              {loopPhases.map((phase, i) => (
                <PhasePanel
                  key={phase.id}
                  phase={phase}
                  index={i}
                  isActive={activePhase === i}
                  onEnter={setActivePhase}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Agents + customising ---------------- */}
      <section
        className="border-y py-20 lg:py-28"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="flex max-w-[66ch] flex-col gap-4">
            <Eyebrow>{platformCopy.agentsEyebrow[language]}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.8rem]">
              {platformCopy.agentsHeadline[language]}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {platformCopy.agentsLede[language]}
            </p>
          </div>

          <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agentRoster.map((agent, i) => (
              <motion.div
                key={agent.name.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border bg-background px-5 py-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(var(--noreja-main)), hsl(var(--noreja-tertiary)))",
                  }}
                />
                <span
                  className="font-mono text-[0.78rem] uppercase tracking-[0.12em]"
                  style={{ color: MINT }}
                >
                  {agent.name[language]}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {agent.role[language]}
                </h3>
                <p className="text-[0.92rem] text-muted-foreground">{agent.text[language]}</p>
                <span
                  className="mt-auto border-t border-dashed pt-3 font-mono text-[0.7rem] text-muted-foreground"
                  style={{ borderColor: "hsl(var(--border))" }}
                >
                  {agent.runs[language]}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Customising */}
          <div className="mt-16 flex flex-col gap-8 lg:mt-24">
            <div className="flex max-w-[66ch] flex-col gap-4">
              <Eyebrow>{platformCopy.equipEyebrow[language]}</Eyebrow>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.6rem]">
                {platformCopy.equipHeadline[language]}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {platformCopy.equipLedeBefore[language]}
                <strong className="font-semibold text-foreground">
                  {platformCopy.equipLedeTools[language]}
                </strong>
                {platformCopy.equipLedeAnd[language]}
                <strong className="font-semibold text-foreground">
                  {platformCopy.equipLedeKb[language]}
                </strong>
                {platformCopy.equipLedeAfter[language]}
              </p>
            </div>

            <AgentEquipper />
          </div>
        </div>
      </section>

      {/* ---------------- Cost of inaction ---------------- */}
      <div className="scroll-mt-20 pt-20 lg:pt-28">
        <CostOfInactionCalculator />
      </div>

      {/* ---------------- Comparison ---------------- */}
      <section
        className="border-y py-20 lg:py-28"
        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--card))" }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <div className="flex max-w-[60ch] flex-col gap-4">
            <Eyebrow>{platformCopy.compareEyebrow[language]}</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[2.8rem]">
              {platformCopy.compareHeadline[language]}
            </h2>
          </div>

          <div
            className="mt-10 overflow-x-auto rounded-[18px] border"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr>
                  {[
                    platformCopy.comparePhase[language],
                    platformCopy.compareClassic[language],
                    platformCopy.compareNoreja[language],
                  ].map((heading, i) => (
                    <th
                      key={heading}
                      className="border-b px-5 py-4 text-left font-mono text-[0.7rem] uppercase tracking-[0.15em]"
                      style={{
                        borderColor: "hsl(var(--border))",
                        background: "hsl(var(--secondary))",
                        color: i === 2 ? MINT : "hsl(var(--muted-foreground))",
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => {
                  const last = i === comparisonRows.length - 1;
                  const cell = "px-5 py-4 text-left align-top text-[0.94rem]";
                  const border = {
                    borderBottom: last ? "none" : "1px solid hsl(var(--border))",
                  };
                  return (
                    <tr key={row.phase.en}>
                      <td className={`${cell} font-semibold text-foreground`} style={border}>
                        {row.phase[language]}
                      </td>
                      <td className={`${cell} text-muted-foreground`} style={border}>
                        {row.classic[language]}
                      </td>
                      <td
                        className={`${cell} text-foreground`}
                        style={{ ...border, background: "hsl(var(--noreja-main) / 0.07)" }}
                      >
                        {row.noreja[language]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 50%, hsl(var(--noreja-main) / 0.3), transparent 66%)",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 text-center lg:px-8">
          <Eyebrow>{platformCopy.closeEyebrow[language]}</Eyebrow>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground lg:text-[3rem]">
            {platformCopy.closeHeadline[language]}
          </h2>
          <p className="max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
            {platformCopy.closeLede[language]}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="group" asChild>
              <Link to={getRoutePath("contact", language)}>
                {platformCopy.closeCtaPrimary[language]}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to={getRoutePath("pricing", language)}>
                {platformCopy.closeCtaSecondary[language]}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={getRoutePath("battleCards", language)}>
                {platformCopy.closeCtaTertiary[language]}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------------- Video + blog ---------------- */}
      <div
        className="relative"
        style={{
          background: `
            linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
            radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
          `,
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <section className="relative z-10 py-12 lg:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div
                className="relative overflow-hidden rounded-3xl border bg-background/95 shadow-xl"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 z-10 opacity-70"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(var(--noreja-main) / 0.1), transparent, hsl(var(--noreja-secondary) / 0.2))",
                  }}
                />
                <div className="relative z-20 p-4 lg:p-8">
                  <h2 className="mb-6 text-center text-2xl font-bold text-foreground md:text-3xl">
                    {t.pages.functionalities.videoHeadline}
                  </h2>
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute left-0 top-0 h-full w-full rounded-lg"
                      src="https://www.youtube.com/embed/_ZjG8y1s-os?list=PLOV__tuMtsoB3bmkSGmh3wI6PonkG8x7d"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <HubSpotBlogTeaser />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Functionalities;
