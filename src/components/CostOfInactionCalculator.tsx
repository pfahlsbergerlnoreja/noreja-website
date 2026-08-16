import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Calculator,
  ChevronDown,
  Clock,
  Cog,
  Download,
  Euro,
  Factory,
  Gauge,
  Info,
  Layers,
  Network,
  Package,
  Repeat,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingDown,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRoutePath } from "@/lib/routes";
import {
  buildInstanceSteps,
  calculateCostOfInaction,
  coiBusinessModels,
  coiCategories,
  coiCompanySizes,
  coiCopy,
  coiIndustries,
  coiMaturityLevels,
  coiProcesses,
  derivePrimitives,
  formatDuration,
  formatEuro,
  formatEuroCompact,
  formatNumber,
  getProcessById,
  instanceBounds,
  relevantInputs,
  revenuePerEmployeePlausibility,
  suggestItemsPerOrder,
  type CoiDimension,
} from "@/lib/costOfInaction";
import type { Language } from "@/lib/translations";

const DIMENSION_META: Record<CoiDimension, { color: string; Icon: typeof Clock }> = {
  time: { color: "hsl(var(--noreja-tertiary))", Icon: Clock },
  cost: { color: "hsl(var(--noreja-secondary))", Icon: Euro },
  quality: { color: "hsl(var(--noreja-main))", Icon: ShieldCheck },
  complexity: { color: "hsl(286 72% 62%)", Icon: Network },
};

const DIMENSION_ORDER: CoiDimension[] = ["time", "cost", "quality", "complexity"];

/** Smoothly counts from the previous to the current value whenever an input changes */
const useAnimatedValue = (value: number, duration = 650) => {
  const [display, setDisplay] = useState(value);
  const currentRef = useRef(value);
  const frameRef = useRef<number>();

  useEffect(() => {
    const from = currentRef.current;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = from + (value - from) * eased;
      currentRef.current = next;
      setDisplay(next);
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value, duration]);

  return display;
};

const FieldLabel = ({
  icon: Icon,
  children,
  suffix,
  dimmed,
  dimmedLabel,
  dimmedHint,
}: {
  icon: typeof Clock;
  children: React.ReactNode;
  suffix?: React.ReactNode;
  /** The field does not influence the result for the selected process */
  dimmed?: boolean;
  dimmedLabel?: string;
  dimmedHint?: string;
}) => (
  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
    <span
      className={`flex min-w-0 items-center gap-2 text-sm font-medium ${
        dimmed ? "text-muted-foreground/60" : "text-foreground"
      }`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${dimmed ? "text-muted-foreground/50" : "text-accent"}`} />
      <span className="min-w-0">{children}</span>
    </span>
    {dimmed ? (
      <span
        className="shrink-0 cursor-help rounded-full border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground/70"
        title={dimmedHint}
      >
        {dimmedLabel}
      </span>
    ) : suffix ? (
      <span className="shrink-0">{suffix}</span>
    ) : null}
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
    <span className="h-px flex-1 bg-border/60" />
  </div>
);

/**
 * Thousand-separated number input. Formatting is only re-applied on blur so the
 * caret does not jump around while typing.
 */
const NumberField = ({
  value,
  onChange,
  language,
  ariaLabel,
  unit,
  disabled,
}: {
  value: number;
  onChange: (value: number) => void;
  language: Language;
  ariaLabel: string;
  unit?: string;
  disabled?: boolean;
}) => {
  const [text, setText] = useState(() => formatNumber(value, language));
  const valueRef = useRef(value);
  const languageRef = useRef(language);

  useEffect(() => {
    if (value !== valueRef.current || language !== languageRef.current) {
      valueRef.current = value;
      languageRef.current = language;
      setText(formatNumber(value, language));
    }
  }, [value, language]);

  return (
    <div className="relative">
      <Input
        type="text"
        inputMode="numeric"
        value={text}
        aria-label={ariaLabel}
        disabled={disabled}
        className={`h-11 bg-background/60 text-base font-semibold tabular-nums ${unit ? "pr-9" : ""}`}
        onChange={(event) => {
          setText(event.target.value);
          const digits = event.target.value.replace(/[^\d]/g, "");
          const parsed = digits ? Number(digits) : 0;
          valueRef.current = parsed;
          onChange(parsed);
        }}
        onBlur={() => setText(formatNumber(valueRef.current, language))}
      />
      {unit && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
          {unit}
        </span>
      )}
    </div>
  );
};

export const CostOfInactionCalculator = () => {
  const { language } = useLanguage();
  const copy = coiCopy[language];

  const [industryId, setIndustryId] = useState("manufacturing");
  const [companySizeId, setCompanySizeId] = useState("m");
  const [units, setUnits] = useState(10_000);
  const [unitValue, setUnitValue] = useState(10_000);
  const [customers, setCustomers] = useState(800);
  /** null = follow the value derived from the unit value */
  const [itemsPerOrderOverride, setItemsPerOrderOverride] = useState<number | null>(null);
  const [businessModelId, setBusinessModelId] = useState("makeToOrder");
  const [recurringPercent, setRecurringPercent] = useState(10);
  const [materialPercent, setMaterialPercent] = useState(45);
  const [processId, setProcessId] = useState("order-to-cash");
  /** null = follow the derived instance count */
  const [instanceOverride, setInstanceOverride] = useState<number | null>(null);
  const [maturity, setMaturity] = useState(2);
  const [years, setYears] = useState(5);
  const [showMethod, setShowMethod] = useState(false);
  /** The calculator is collapsed by default and expanded via the CTA below the heading */
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const process = getProcessById(processId);
  const itemsPerOrder = itemsPerOrderOverride ?? suggestItemsPerOrder(unitValue);

  const businessInput = useMemo(
    () => ({
      industryId,
      companySizeId,
      units,
      unitValue,
      customers,
      itemsPerOrder,
      businessModelId,
      recurringShare: recurringPercent / 100,
      materialShare: materialPercent / 100,
    }),
    [
      industryId,
      companySizeId,
      units,
      unitValue,
      customers,
      itemsPerOrder,
      businessModelId,
      recurringPercent,
      materialPercent,
    ]
  );

  const primitives = useMemo(() => derivePrimitives(businessInput), [businessInput]);
  const relevant = useMemo(
    () => relevantInputs(processId, businessInput),
    [processId, businessInput]
  );
  const bounds = useMemo(() => instanceBounds(processId, primitives), [processId, primitives]);
  const instanceSteps = useMemo(
    () => buildInstanceSteps(bounds.min, bounds.max),
    [bounds.min, bounds.max]
  );
  const instances = instanceOverride ?? bounds.suggestion;

  const result = useMemo(
    () =>
      calculateCostOfInaction({
        ...businessInput,
        processId,
        instances,
        maturity,
        years,
      }),
    [businessInput, processId, instances, maturity, years]
  );

  const animatedRevenue = useAnimatedValue(primitives.revenue);
  const animatedPerYear = useAnimatedValue(result.perYear);
  const animatedTotal = useAnimatedValue(result.total);

  const handleDownloadPdf = async () => {
    setIsExporting(true);
    try {
      const { downloadCoiPdf } = await import("@/lib/coiPdf");
      await downloadCoiPdf({
        language,
        industryId,
        companySizeId,
        businessModelId,
        processId,
        units,
        unitValue,
        customers,
        itemsPerOrder,
        recurringPercent,
        materialPercent,
        instances,
        maturity,
        years,
        primitives,
        result,
      });
    } finally {
      setIsExporting(false);
    }
  };

  const nearestIndex = (steps: number[], value: number) => {
    let closest = 0;
    steps.forEach((step, index) => {
      if (Math.abs(step - value) < Math.abs(steps[closest] - value)) closest = index;
    });
    return closest;
  };

  const instanceIndex = nearestIndex(instanceSteps, instances);
  const maxDimension = Math.max(...DIMENSION_ORDER.map((key) => result.dimensions[key]), 1);
  const maturityLabel =
    coiMaturityLevels.find((level) => level.value === maturity) ?? coiMaturityLevels[2];
  const plausibility = revenuePerEmployeePlausibility(primitives.revenuePerEmployee);

  const processesByCategory = useMemo(
    () =>
      coiCategories.map((category) => ({
        category,
        processes: coiProcesses.filter((item) => item.categoryId === category.id),
      })),
    []
  );

  // Changing a business input invalidates a manually set instance count
  const resetInstances = () => setInstanceOverride(null);

  return (
    <section id="cost-of-inaction" className="relative px-4 lg:px-8 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Calculator className="mr-2 h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{copy.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{copy.title}</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{copy.subtitle}</p>

          <Button
            size="lg"
            variant="outline"
            className="story-cta group mt-8 bg-background/60"
            onClick={() => setIsExpanded((open) => !open)}
            aria-expanded={isExpanded}
            aria-controls="cost-of-inaction-panel"
          >
            <Calculator className="mr-2 h-5 w-5" />
            {isExpanded ? copy.closeCalculator : copy.openCalculator}
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
            />
          </Button>
        </motion.div>

        {/* CSS-only collapse: the content stays mounted (and crawlable) while folded */}
        <div
          id="cost-of-inaction-panel"
          aria-hidden={!isExpanded}
          className={`grid transition-all duration-500 ease-in-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/80 shadow-card backdrop-blur-xl">
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse 700px 400px at 15% 0%, hsl(var(--noreja-main) / 0.18) 0%, transparent 65%), radial-gradient(ellipse 600px 500px at 95% 100%, hsl(var(--noreja-tertiary) / 0.12) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            {/* ---------- Inputs ---------- */}
            <div className="min-w-0 space-y-6">
              <SectionLabel>{copy.processSection}</SectionLabel>

              <div>
                <FieldLabel icon={Workflow}>{copy.process}</FieldLabel>
                <Select
                  value={processId}
                  onValueChange={(value) => {
                    setProcessId(value);
                    resetInstances();
                  }}
                >
                  <SelectTrigger className="h-11 bg-background/60">
                    <SelectValue placeholder={copy.processPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="max-h-80">
                    {processesByCategory.map(({ category, processes }) => (
                      <SelectGroup key={category.id}>
                        <SelectLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                          {category.label[language]}
                        </SelectLabel>
                        {processes.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.label[language]}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <SectionLabel>{copy.companySection}</SectionLabel>

              <div className="grid min-w-0 gap-5 sm:grid-cols-2 [&>div]:min-w-0">
                <div>
                  <FieldLabel icon={Factory}>{copy.industry}</FieldLabel>
                  <Select value={industryId} onValueChange={setIndustryId}>
                    <SelectTrigger className="h-11 bg-background/60">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {coiIndustries.map((industry) => (
                        <SelectItem key={industry.id} value={industry.id}>
                          {industry.label[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <FieldLabel icon={Building2}>{copy.companySize}</FieldLabel>
                  <Select
                    value={companySizeId}
                    onValueChange={(value) => {
                      setCompanySizeId(value);
                      resetInstances();
                    }}
                  >
                    <SelectTrigger className="h-11 bg-background/60">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {coiCompanySizes.map((size) => (
                        <SelectItem key={size.id} value={size.id}>
                          {size.label[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Units x unit value = revenue */}
              <div className="grid min-w-0 gap-5 sm:grid-cols-2 [&>div]:min-w-0">
                <div>
                  <FieldLabel icon={Package}>{copy.units}</FieldLabel>
                  <NumberField
                    value={units}
                    language={language}
                    ariaLabel={copy.units}
                    onChange={(value) => {
                      setUnits(value);
                      resetInstances();
                    }}
                  />
                </div>
                <div>
                  <FieldLabel icon={Euro}>{copy.unitValue}</FieldLabel>
                  <NumberField
                    value={unitValue}
                    language={language}
                    ariaLabel={copy.unitValue}
                    unit="€"
                    onChange={(value) => {
                      setUnitValue(value);
                      resetInstances();
                    }}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    {copy.revenueResult}
                  </span>
                  <span
                    className="text-2xl font-bold tabular-nums"
                    style={{
                      background: "var(--gradient-accent)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {formatEuro(animatedRevenue, language)}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span>
                    {formatNumber(primitives.orders, language)} {copy.profileOrders}
                  </span>
                  <span>
                    {copy.profileOrderValue} {formatEuroCompact(primitives.orderValue, language)}
                  </span>
                  <span>
                    {formatNumber(primitives.employees, language)} {copy.profileEmployees}
                  </span>
                  <span>
                    {formatEuroCompact(primitives.revenuePerEmployee, language)}{" "}
                    {copy.profileRevenuePerEmployee}
                  </span>
                </div>

                {plausibility !== "ok" && (
                  <p className="mt-3 flex items-start gap-2 text-xs text-yellow-500">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    {plausibility === "low" ? copy.plausibilityLow : copy.plausibilityHigh}
                  </p>
                )}
              </div>

              <div className="grid min-w-0 gap-5 sm:grid-cols-2 [&>div]:min-w-0">
                <div>
                  <FieldLabel
                    icon={Users}
                    dimmed={!relevant.customers}
                    dimmedLabel={copy.notRelevant}
                    dimmedHint={copy.notRelevantHint}
                  >
                    {copy.customers}
                  </FieldLabel>
                  <NumberField
                    value={customers}
                    language={language}
                    ariaLabel={copy.customers}
                    disabled={!relevant.customers}
                    onChange={(value) => {
                      setCustomers(value);
                      resetInstances();
                    }}
                  />
                </div>
                <div>
                  <FieldLabel
                    icon={Layers}
                    dimmed={!relevant.itemsPerOrder}
                    dimmedLabel={copy.notRelevant}
                    dimmedHint={copy.notRelevantHint}
                    suffix={
                      itemsPerOrderOverride !== null ? (
                        <button
                          type="button"
                          onClick={() => {
                            setItemsPerOrderOverride(null);
                            resetInstances();
                          }}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-accent"
                        >
                          <RotateCcw className="h-3 w-3" />
                          {copy.itemsPerOrderAuto}
                        </button>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          {copy.itemsPerOrderAuto}
                        </span>
                      )
                    }
                  >
                    {copy.itemsPerOrder}
                  </FieldLabel>
                  <Input
                    type="number"
                    min={0.1}
                    step={0.1}
                    value={itemsPerOrder}
                    aria-label={copy.itemsPerOrder}
                    disabled={!relevant.itemsPerOrder}
                    className="h-11 bg-background/60 text-base font-semibold tabular-nums"
                    onChange={(event) => {
                      const parsed = Number(event.target.value);
                      setItemsPerOrderOverride(
                        Number.isFinite(parsed) && parsed > 0 ? parsed : 0.1
                      );
                      resetInstances();
                    }}
                  />
                </div>
              </div>

              <div>
                <FieldLabel icon={Cog}>{copy.businessModel}</FieldLabel>
                <Select
                  value={businessModelId}
                  onValueChange={(value) => {
                    setBusinessModelId(value);
                    resetInstances();
                  }}
                >
                  <SelectTrigger className="h-11 bg-background/60">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {coiBusinessModels.map((model) => (
                      <SelectItem key={model.id} value={model.id}>
                        {model.label[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid min-w-0 gap-5 sm:grid-cols-2 [&>div]:min-w-0">
                <div>
                  <FieldLabel
                    icon={Repeat}
                    dimmed={!relevant.recurringShare}
                    dimmedLabel={copy.notRelevant}
                    dimmedHint={copy.notRelevantHint}
                    suffix={
                      <span className="text-sm font-semibold tabular-nums text-accent">
                        {recurringPercent} %
                      </span>
                    }
                  >
                    {copy.recurringShare}
                  </FieldLabel>
                  <Slider
                    value={[recurringPercent]}
                    min={0}
                    max={100}
                    step={5}
                    disabled={!relevant.recurringShare}
                    onValueChange={([value]) => {
                      setRecurringPercent(value);
                      resetInstances();
                    }}
                    aria-label={copy.recurringShare}
                  />
                </div>
                <div>
                  <FieldLabel
                    icon={ShoppingCart}
                    dimmed={!relevant.materialShare}
                    dimmedLabel={copy.notRelevant}
                    dimmedHint={copy.notRelevantHint}
                    suffix={
                      <span className="text-sm font-semibold tabular-nums text-accent">
                        {materialPercent} %
                      </span>
                    }
                  >
                    {copy.materialShare}
                  </FieldLabel>
                  <Slider
                    value={[materialPercent]}
                    min={0}
                    max={80}
                    step={5}
                    disabled={!relevant.materialShare}
                    onValueChange={([value]) => {
                      setMaterialPercent(value);
                      resetInstances();
                    }}
                    aria-label={copy.materialShare}
                  />
                </div>
              </div>

              <SectionLabel>{copy.calculationSection}</SectionLabel>

              <div>
                <FieldLabel
                  icon={Sparkles}
                  suffix={
                    <span className="text-sm font-semibold tabular-nums text-accent">
                      {formatNumber(instances, language)}
                    </span>
                  }
                >
                  {process.instanceLabel[language]}
                </FieldLabel>
                <Slider
                  value={[instanceIndex]}
                  min={0}
                  max={instanceSteps.length - 1}
                  step={1}
                  onValueChange={([index]) => setInstanceOverride(instanceSteps[index])}
                  aria-label={process.instanceLabel[language]}
                />
                <div className="mt-2 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>{formatNumber(instanceSteps[0], language)}</span>
                  {instanceOverride !== null && instanceOverride !== bounds.suggestion ? (
                    <button
                      type="button"
                      onClick={resetInstances}
                      className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                    >
                      <RotateCcw className="h-3 w-3" />
                      {copy.instancesReset}
                    </button>
                  ) : (
                    <span className="truncate">
                      {copy.instancesHint} {formatNumber(bounds.suggestion, language)}
                    </span>
                  )}
                  <span>{formatNumber(instanceSteps[instanceSteps.length - 1], language)}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {copy.effortHint}: {formatDuration(result.effortMinutes, language)}
                </p>
              </div>

              <div>
                <FieldLabel
                  icon={Gauge}
                  suffix={
                    <span className="text-xs text-muted-foreground">
                      {maturity} / {coiMaturityLevels.length}
                    </span>
                  }
                >
                  {copy.maturity}
                </FieldLabel>
                <Slider
                  value={[maturity]}
                  min={1}
                  max={coiMaturityLevels.length}
                  step={1}
                  onValueChange={([value]) => setMaturity(value)}
                  aria-label={copy.maturity}
                />
                <p className="mt-2 text-xs text-muted-foreground">{maturityLabel.label[language]}</p>
              </div>

              <div>
                <FieldLabel
                  icon={Clock}
                  suffix={
                    <span className="text-sm font-semibold tabular-nums text-accent">
                      {copy.yearsUnit(years)}
                    </span>
                  }
                >
                  {copy.years}
                </FieldLabel>
                <Slider
                  value={[years]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={([value]) => setYears(value)}
                  aria-label={copy.years}
                />
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {/* ---------- Result ---------- */}
            <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-primary/25 bg-background/70 p-6 md:p-8">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">
                  {copy.resultLabel}
                </p>
                <p
                  className="mt-1 break-words text-4xl font-bold tabular-nums md:text-5xl"
                  style={{
                    background: "var(--gradient-accent)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {formatEuro(animatedPerYear, language)}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span>
                    {formatEuro(result.perInstance, language)} {copy.perInstance}{" "}
                    {process.instanceUnit[language]}
                  </span>
                  <span>
                    {(result.revenueShareOfCoi * 100).toLocaleString(
                      language === "de" ? "de-DE" : "en-US",
                      { maximumFractionDigits: 2 }
                    )}{" "}
                    % {copy.ofRevenue}
                  </span>
                </div>

                <div className="mt-6 rounded-xl border border-border/60 bg-card/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {copy.resultTotalLabel(years)}
                  </p>
                  <p className="mt-1 break-words text-2xl font-bold tabular-nums text-foreground md:text-3xl">
                    {formatEuro(animatedTotal, language)}
                  </p>
                </div>

                {/* Dimension breakdown */}
                <div className="mt-6">
                  <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                    {copy.breakdownTitle}
                  </p>
                  <div className="space-y-4">
                    {DIMENSION_ORDER.map((key) => {
                      const { color, Icon } = DIMENSION_META[key];
                      const value = result.dimensions[key];
                      return (
                        <div key={key}>
                          <div className="mb-1.5 flex items-center justify-between gap-2">
                            <span className="flex items-center gap-2 text-sm text-foreground">
                              <Icon className="h-4 w-4" style={{ color }} />
                              {copy.dimensions[key]}
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button
                                    type="button"
                                    className="rounded-full text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    aria-label={`${copy.dimensions[key]} – Info`}
                                  >
                                    <Info className="h-3.5 w-3.5" />
                                  </button>
                                </PopoverTrigger>
                                <PopoverContent className="w-72 text-sm text-muted-foreground">
                                  {copy.dimensionHints[key]}
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span className="text-sm font-semibold tabular-nums text-foreground">
                              {formatEuroCompact(value, language)}
                            </span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: color }}
                              initial={false}
                              animate={{ width: `${(value / maxDimension) * 100}%` }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
                  <TrendingDown className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">{copy.recoverable}</p>
                    <p className="text-sm font-semibold tabular-nums text-foreground">
                      {formatEuroCompact(result.recoverablePerYear.min, language)} –{" "}
                      {formatEuroCompact(result.recoverablePerYear.max, language)}
                      <span className="font-normal text-muted-foreground"> / {copy.yearsUnit(1)}</span>
                    </p>
                  </div>
                </div>

                <Button size="lg" className="group mt-6 w-full" asChild>
                  <Link to={getRoutePath("contact", language)}>
                    {copy.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="mt-3 w-full bg-background/60"
                  onClick={handleDownloadPdf}
                  disabled={isExporting}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {isExporting ? copy.downloadPdfBusy : copy.downloadPdf}
                </Button>

                <button
                  type="button"
                  onClick={() => setShowMethod((open) => !open)}
                  className="mt-4 text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {showMethod ? copy.methodToggleClose : copy.methodToggleOpen}
                </button>

                {showMethod && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 space-y-2 overflow-hidden text-xs text-muted-foreground"
                  >
                    {copy.method.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground/80">
                  {copy.disclaimer}
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfInactionCalculator;
