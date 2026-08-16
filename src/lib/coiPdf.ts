/**
 * Client-side PDF export for the Cost-of-Inaction calculator.
 *
 * jsPDF is pulled in via a dynamic import so it is code-split into its own
 * chunk and only downloaded when a visitor actually clicks the export button.
 */
import type { Language } from "./translations";
import {
  coiCopy,
  coiMaturityLevels,
  formatDuration,
  formatEuro,
  formatEuroCompact,
  formatNumber,
  getBusinessModel,
  getCompanySize,
  getIndustry,
  getProcessById,
  type CoiDimension,
  type CoiPrimitives,
  type CoiResult,
} from "./costOfInaction";

const DIMENSION_ORDER: CoiDimension[] = ["time", "cost", "quality", "complexity"];

/** Noreja brand colours as RGB triplets */
const PURPLE: [number, number, number] = [69, 43, 233];
const BLUE: [number, number, number] = [69, 105, 231];
const TEAL: [number, number, number] = [35, 243, 218];
const INK: [number, number, number] = [24, 24, 37];
const MUTED: [number, number, number] = [110, 110, 130];
const RULE: [number, number, number] = [222, 222, 232];

const DIMENSION_COLORS: Record<CoiDimension, [number, number, number]> = {
  time: [16, 185, 175],
  cost: BLUE,
  quality: PURPLE,
  complexity: [168, 85, 214],
};

/**
 * jsPDF's built-in fonts cannot render the non-breaking spaces
 * Intl.NumberFormat emits, and silently drop a handful of typographic
 * characters (en/em dash, bullet, ellipsis), so map them onto safe
 * equivalents before anything is printed.
 */
const clean = (value: string): string =>
  value
    .replace(/[–—−]/g, "-")
    .replace(/•/g, "-")
    .replace(/…/g, "...")
    .replace(/[“”„]/g, '"')
    .replace(/[‘’‚]/g, "'")
    .replace(/[\u00A0\u202F\u2009]/g, " ");

export interface CoiPdfInput {
  language: Language;
  industryId: string;
  companySizeId: string;
  businessModelId: string;
  processId: string;
  units: number;
  unitValue: number;
  customers: number;
  itemsPerOrder: number;
  recurringPercent: number;
  materialPercent: number;
  instances: number;
  maturity: number;
  years: number;
  primitives: CoiPrimitives;
  result: CoiResult;
}

const pdfCopy = {
  de: {
    fileName: "noreja-cost-of-inaction",
    docTitle: "Cost-of-Inaction Analyse",
    generatedOn: "Erstellt am",
    inputsTitle: "Deine Eingaben",
    resultTitle: "Ergebnis",
    instances: "Prozessinstanzen pro Jahr",
    perInstanceLabel: "Kosten je Vorgang",
    revenueShare: "Anteil am Jahresumsatz",
    revenue: "Jahresumsatz (abgeleitet)",
    methodTitle: "Wie wird gerechnet?",
    footer: "noreja.com  ·  Process Intelligence, die Ursachen zeigt statt nur Symptome",
  },
  en: {
    fileName: "noreja-cost-of-inaction",
    docTitle: "Cost-of-Inaction Analysis",
    generatedOn: "Created on",
    inputsTitle: "Your inputs",
    resultTitle: "Result",
    instances: "Process instances per year",
    perInstanceLabel: "Cost per instance",
    revenueShare: "Share of annual revenue",
    revenue: "Annual revenue (derived)",
    methodTitle: "How is this calculated?",
    footer: "noreja.com  ·  Process intelligence that shows causes, not just symptoms",
  },
} as const;

export const downloadCoiPdf = async (input: CoiPdfInput): Promise<void> => {
  const { jsPDF } = await import("jspdf");

  const { language, result, primitives, years } = input;
  const copy = coiCopy[language];
  const local = pdfCopy[language];
  const locale = language === "de" ? "de-DE" : "en-GB";

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  const ensureSpace = (needed: number) => {
    if (y + needed <= pageHeight - 64) return;
    doc.addPage();
    y = margin;
  };

  const text = (
    value: string,
    x: number,
    size: number,
    style: "normal" | "bold",
    color: [number, number, number]
  ) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    doc.text(clean(value), x, y);
  };

  const sectionHeading = (label: string) => {
    ensureSpace(46);
    y += 10;
    text(label, margin, 12, "bold", PURPLE);
    y += 8;
    doc.setDrawColor(...RULE);
    doc.setLineWidth(0.8);
    doc.line(margin, y, pageWidth - margin, y);
    y += 18;
  };

  /** Label on the left, value right-aligned on the same baseline */
  const row = (label: string, value: string) => {
    ensureSpace(20);
    text(label, margin, 10, "normal", MUTED);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    doc.text(clean(value), pageWidth - margin, y, { align: "right" });
    y += 18;
  };

  // ---------- Header ----------
  doc.setFillColor(...PURPLE);
  doc.rect(0, 0, pageWidth, 104, "F");
  doc.setFillColor(...TEAL);
  doc.rect(0, 104, pageWidth, 3, "F");

  y = 48;
  text("NOREJA", margin, 11, "bold", [255, 255, 255]);
  y = 76;
  text(local.docTitle, margin, 22, "bold", [255, 255, 255]);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(226, 226, 245);
  doc.text(
    clean(`${local.generatedOn} ${new Date().toLocaleDateString(locale)}`),
    pageWidth - margin,
    76,
    { align: "right" }
  );

  y = 148;

  // ---------- Headline figure ----------
  doc.setFillColor(246, 245, 255);
  doc.roundedRect(margin, y - 26, contentWidth, 92, 10, 10, "F");

  y += 0;
  text(copy.resultLabel, margin + 20, 10, "normal", MUTED);
  y += 30;
  text(formatEuro(result.perYear, language), margin + 20, 26, "bold", PURPLE);
  y += 22;
  text(
    `${copy.resultTotalLabel(years)}: ${formatEuro(result.total, language)}`,
    margin + 20,
    10,
    "normal",
    INK
  );
  y += 42;

  // ---------- Inputs ----------
  sectionHeading(local.inputsTitle);
  row(copy.process, getProcessById(input.processId).label[language]);
  row(copy.industry, getIndustry(input.industryId).label[language]);
  row(copy.companySize, getCompanySize(input.companySizeId).label[language]);
  row(copy.businessModel, getBusinessModel(input.businessModelId).label[language]);
  row(copy.units, formatNumber(input.units, language));
  row(copy.unitValue, formatEuro(input.unitValue, language));
  row(copy.customers, formatNumber(input.customers, language));
  row(copy.itemsPerOrder, formatNumber(input.itemsPerOrder, language));
  row(copy.recurringShare, `${input.recurringPercent} %`);
  row(copy.materialShare, `${input.materialPercent} %`);
  row(local.instances, formatNumber(input.instances, language));
  row(copy.effortHint, formatDuration(result.effortMinutes, language));
  row(
    copy.maturity,
    (coiMaturityLevels.find((level) => level.value === input.maturity) ?? coiMaturityLevels[2])
      .label[language]
  );
  row(copy.years, copy.yearsUnit(years));
  row(local.revenue, formatEuroCompact(primitives.revenue, language));

  // ---------- Result ----------
  sectionHeading(local.resultTitle);
  row(copy.resultLabel, formatEuro(result.perYear, language));
  row(copy.resultTotalLabel(years), formatEuro(result.total, language));
  row(local.perInstanceLabel, formatEuro(result.perInstance, language));
  row(local.revenueShare, `${result.revenueShareOfCoi.toFixed(1).replace(".", language === "de" ? "," : ".")} %`);
  row(
    copy.recoverable,
    `${formatEuroCompact(result.recoverablePerYear.min, language)} - ${formatEuroCompact(
      result.recoverablePerYear.max,
      language
    )}`
  );

  // ---------- Breakdown ----------
  sectionHeading(copy.breakdownTitle);
  const maxDimension = Math.max(...DIMENSION_ORDER.map((key) => result.dimensions[key]), 1);
  DIMENSION_ORDER.forEach((key) => {
    ensureSpace(38);
    text(copy.dimensions[key], margin, 10, "bold", INK);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...INK);
    doc.text(clean(formatEuro(result.dimensions[key], language)), pageWidth - margin, y, {
      align: "right",
    });
    y += 8;

    doc.setFillColor(238, 238, 246);
    doc.roundedRect(margin, y, contentWidth, 7, 3.5, 3.5, "F");
    const width = Math.max((result.dimensions[key] / maxDimension) * contentWidth, 2);
    doc.setFillColor(...DIMENSION_COLORS[key]);
    doc.roundedRect(margin, y, width, 7, 3.5, 3.5, "F");
    y += 24;
  });

  // ---------- Method ----------
  sectionHeading(local.methodTitle);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...MUTED);
  copy.method.forEach((line) => {
    const lines = doc.splitTextToSize(clean(`• ${line}`), contentWidth) as string[];
    ensureSpace(lines.length * 11 + 6);
    doc.text(lines, margin, y);
    y += lines.length * 11 + 5;
  });

  // ---------- Disclaimer ----------
  y += 6;
  const disclaimer = doc.splitTextToSize(clean(copy.disclaimer), contentWidth) as string[];
  ensureSpace(disclaimer.length * 11 + 10);
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text(disclaimer, margin, y);

  // ---------- Footer on every page ----------
  const pageCount = doc.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    doc.setDrawColor(...RULE);
    doc.setLineWidth(0.8);
    doc.line(margin, pageHeight - 44, pageWidth - margin, pageHeight - 44);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(clean(local.footer), margin, pageHeight - 30);
    doc.text(`${page} / ${pageCount}`, pageWidth - margin, pageHeight - 30, { align: "right" });
  }

  const stamp = new Date().toISOString().slice(0, 10);
  doc.save(`${local.fileName}-${input.processId}-${stamp}.pdf`);
};
