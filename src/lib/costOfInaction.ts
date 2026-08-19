import type { Language } from "./translations";

/**
 * Data model and benchmark assumptions for the "Cost of Inaction" calculator.
 *
 * The model estimates the yearly hidden cost of an end-to-end process along the
 * four process dimensions Noreja works with: time, cost, quality and complexity.
 *
 * Everything is derived from a handful of business primitives the visitor actually
 * knows: units sold, value per unit, customer base, headcount band and a few
 * business-model settings. Revenue is a result (units x unit value), not an input.
 * All factors are benchmark-based order-of-magnitude assumptions - the calculator
 * is a conversation starter, not an audited business case.
 */

export type CoiDimension = "time" | "cost" | "quality" | "complexity";

const MIO = 1_000_000;

/* -------------------------------------------------------------------------- */
/* Business primitives                                                        */
/* -------------------------------------------------------------------------- */

export interface CoiPrimitives {
  /** Units (products / services) sold per year */
  units: number;
  /** Average value of one unit in € */
  unitValue: number;
  /** units x unitValue */
  revenue: number;
  /** Sales orders per year */
  orders: number;
  /** Average value of one order in € */
  orderValue: number;
  /** Active customer base */
  customers: number;
  /** Estimated headcount */
  employees: number;
  /** Annual purchasing volume (material / services bought) */
  purchaseVolume: number;
  /** Customers on a recurring billing relationship */
  recurringContracts: number;
  /** Units per production order */
  lotSize: number;
  /** Share of units that come back as returns */
  returnRate: number;
  /** Revenue per employee - used for the plausibility hint */
  revenuePerEmployee: number;
}

/* -------------------------------------------------------------------------- */
/* Conversion benchmarks                                                      */
/* -------------------------------------------------------------------------- */

/** Share of quotes that turn into an order */
const WIN_RATE = 0.35;
/** Share of leads that turn into a quote */
const LEAD_CONVERSION = 0.25;
/** Invoices per sales order (partial deliveries, corrections) */
const INVOICES_PER_ORDER = 1.2;
/** Deliveries per sales order */
const DELIVERIES_PER_ORDER = 1.3;
/** Share of orders that trigger a complaint */
const COMPLAINT_RATE = 0.04;
/** Yearly customer churn + growth, i.e. onboarding events */
const CUSTOMER_TURNOVER = 0.15;
/** Average value of one supplier invoice in € */
const AVG_SUPPLIER_INVOICE = 1800;
/** Purchasing volume that justifies one sourcing event per year */
const SPEND_PER_SOURCING_EVENT = 500_000;

/** Fully loaded cost of one working hour in € (baseline, scaled by industry) */
export const COI_BASE_HOURLY_RATE = 68;

/** Share of the Cost of Inaction that is typically addressable in the first 12-18 months */
export const COI_RECOVERABLE_RANGE = { min: 0.2, max: 0.35 };

/**
 * Handling effort per instance scales sub-linearly with the order value: a 1 Mio €
 * machine order carries hours of coordination, a 40 € web order seconds. Without
 * this, high-value B2B businesses would show an absurdly small time dimension.
 */
export const COI_EFFORT_SCALING = {
  /** Order value the raw benchmark minutes refer to */
  referenceOrderValue: 10_000,
  exponent: 0.7,
  /** Floor: high-volume low-value business is largely touchless, but never free */
  min: 0.12,
  max: 30,
  /** Cost of a defect case as a share of the order value */
  errorCostShare: 0.02,
};

/** Revenue per employee outside this corridor gets flagged as implausible */
export const COI_REVENUE_PER_EMPLOYEE = { low: 60_000, high: 600_000 };

/* -------------------------------------------------------------------------- */
/* Master data                                                                */
/* -------------------------------------------------------------------------- */

export interface CoiProcessCategory {
  id: string;
  label: Record<Language, string>;
}

export interface CoiProcess {
  id: string;
  categoryId: string;
  label: Record<Language, string>;
  /** Label for the instance slider, e.g. "Kundenaufträge pro Jahr" */
  instanceLabel: Record<Language, string>;
  /** Short unit used in the result panel, e.g. "Auftrag" */
  instanceUnit: Record<Language, string>;
  /** Derives the number of process instances per year from the business primitives */
  instances: (primitives: CoiPrimitives) => number;
  /** Avg. minutes of manual handling, waiting-driven rework and coordination per instance */
  manualMinutes: number;
  /** Whether handling effort and defect cost scale with the order value */
  scalesWithOrderValue?: boolean;
  /** Share of instances that run into a costly defect / rework loop */
  errorRate: number;
  /** Cost of a single defect case in € */
  costPerError: number;
  /** Share of revenue that represents the monetary volume flowing through this process */
  revenueShare: number;
  /** Overrides revenueShare when the process runs on purchasing volume instead of revenue */
  costBase?: (primitives: CoiPrimitives) => number;
  /** Share of that volume typically lost through leakage (discounts, penalties, capital lock-up, ...) */
  leakageRate: number;
  /** Overhead created by process variants / deviations from the happy path */
  varianceOverhead: number;
}

export interface CoiIndustry {
  id: string;
  label: Record<Language, string>;
  /** Relative fully loaded labour cost level */
  laborFactor: number;
  /** Relative leakage exposure */
  costFactor: number;
  /** Relative cost of defects (regulation, liability, reputation) */
  qualityFactor: number;
}

export interface CoiCompanySize {
  id: string;
  label: Record<Language, string>;
  /** Handoff / system-break multiplier: more organisational units, more friction */
  handoffFactor: number;
  /** Headcount band represented by this bucket */
  employees: { min: number; max: number };
  /** Revenue band used to place a company inside its headcount band */
  revenue: { min: number; max: number };
}

export interface CoiBusinessModel {
  id: string;
  label: Record<Language, string>;
  /** Units per production order */
  lotSize: number;
  /** Extra complexity from variants, engineering and one-off work */
  complexityFactor: number;
}

export interface CoiMaturityLevel {
  value: number;
  label: Record<Language, string>;
  factor: number;
}

export const coiCategories: CoiProcessCategory[] = [
  { id: "customer", label: { de: "Kunde & Vertrieb", en: "Customer & Sales" } },
  { id: "supply", label: { de: "Einkauf & Supply Chain", en: "Procurement & Supply Chain" } },
  { id: "production", label: { de: "Produktion & Technik", en: "Production & Engineering" } },
  { id: "finance", label: { de: "Finance & Administration", en: "Finance & Administration" } },
  { id: "hrit", label: { de: "HR & IT", en: "HR & IT" } },
  { id: "industry", label: { de: "Branchenspezifisch", en: "Industry-specific" } },
];

export const coiBusinessModels: CoiBusinessModel[] = [
  {
    id: "makeToStock",
    label: { de: "Lagerfertigung / Serienproduktion", en: "Make-to-stock / series production" },
    lotSize: 50,
    complexityFactor: 0.95,
  },
  {
    id: "makeToOrder",
    label: { de: "Auftragsfertigung", en: "Make-to-order" },
    lotSize: 1,
    complexityFactor: 1.05,
  },
  {
    id: "project",
    label: { de: "Projektgeschäft / Anlagenbau", en: "Project business / plant engineering" },
    lotSize: 1,
    complexityFactor: 1.2,
  },
  {
    id: "service",
    label: { de: "Service & Subscription", en: "Service & subscription" },
    lotSize: 1,
    complexityFactor: 1.0,
  },
];

export const coiProcesses: CoiProcess[] = [
  // --- Kunde & Vertrieb ---
  {
    id: "order-to-cash",
    categoryId: "customer",
    label: { de: "Order-to-Cash", en: "Order-to-Cash" },
    instanceLabel: { de: "Kundenaufträge pro Jahr", en: "Customer orders per year" },
    instanceUnit: { de: "Auftrag", en: "order" },
    instances: (p) => p.orders,
    manualMinutes: 9,
    scalesWithOrderValue: true,
    errorRate: 0.06,
    costPerError: 90,
    revenueShare: 1.0,
    leakageRate: 0.003,
    varianceOverhead: 0.18,
  },
  {
    id: "quote-to-order",
    categoryId: "customer",
    label: { de: "Quote-to-Order (Angebotsprozess)", en: "Quote-to-Order" },
    instanceLabel: { de: "Angebote pro Jahr", en: "Quotes per year" },
    instanceUnit: { de: "Angebot", en: "quote" },
    instances: (p) => p.orders / WIN_RATE,
    manualMinutes: 6,
    scalesWithOrderValue: true,
    errorRate: 0.05,
    costPerError: 70,
    revenueShare: 0.35,
    leakageRate: 0.004,
    varianceOverhead: 0.2,
  },
  {
    id: "lead-to-opportunity",
    categoryId: "customer",
    label: { de: "Lead-to-Opportunity", en: "Lead-to-Opportunity" },
    instanceLabel: { de: "Leads pro Jahr", en: "Leads per year" },
    instanceUnit: { de: "Lead", en: "lead" },
    instances: (p) => p.orders / WIN_RATE / LEAD_CONVERSION,
    manualMinutes: 4,
    errorRate: 0.08,
    costPerError: 45,
    revenueShare: 0.15,
    leakageRate: 0.005,
    varianceOverhead: 0.22,
  },
  {
    id: "contract-to-renewal",
    categoryId: "customer",
    label: { de: "Contract-to-Renewal", en: "Contract-to-Renewal" },
    instanceLabel: { de: "Verträge pro Jahr", en: "Contracts per year" },
    instanceUnit: { de: "Vertrag", en: "contract" },
    instances: (p) => p.recurringContracts + p.customers * 0.2,
    manualMinutes: 45,
    scalesWithOrderValue: true,
    errorRate: 0.07,
    costPerError: 450,
    revenueShare: 0.3,
    leakageRate: 0.006,
    varianceOverhead: 0.2,
  },
  {
    id: "complaint-to-resolution",
    categoryId: "customer",
    label: { de: "Complaint-to-Resolution (Reklamation)", en: "Complaint-to-Resolution" },
    instanceLabel: { de: "Reklamationen pro Jahr", en: "Complaints per year" },
    instanceUnit: { de: "Reklamation", en: "complaint" },
    instances: (p) => p.orders * COMPLAINT_RATE,
    manualMinutes: 35,
    scalesWithOrderValue: true,
    errorRate: 0.12,
    costPerError: 320,
    revenueShare: 0.05,
    leakageRate: 0.01,
    varianceOverhead: 0.24,
  },
  {
    id: "return-to-refund",
    categoryId: "customer",
    label: { de: "Return-to-Refund (Retouren)", en: "Return-to-Refund" },
    instanceLabel: { de: "Retouren pro Jahr", en: "Returns per year" },
    instanceUnit: { de: "Retoure", en: "return" },
    instances: (p) => p.units * p.returnRate,
    manualMinutes: 12,
    scalesWithOrderValue: true,
    errorRate: 0.09,
    costPerError: 110,
    revenueShare: 0.08,
    leakageRate: 0.012,
    varianceOverhead: 0.22,
  },
  {
    id: "customer-onboarding",
    categoryId: "customer",
    label: { de: "Customer Onboarding", en: "Customer Onboarding" },
    instanceLabel: { de: "Neukunden pro Jahr", en: "New customers per year" },
    instanceUnit: { de: "Neukunde", en: "new customer" },
    instances: (p) => p.customers * CUSTOMER_TURNOVER,
    manualMinutes: 40,
    scalesWithOrderValue: true,
    errorRate: 0.1,
    costPerError: 260,
    revenueShare: 0.1,
    leakageRate: 0.008,
    varianceOverhead: 0.24,
  },

  // --- Einkauf & Supply Chain ---
  {
    id: "purchase-to-pay",
    categoryId: "supply",
    label: { de: "Purchase-to-Pay", en: "Purchase-to-Pay" },
    instanceLabel: { de: "Eingangsrechnungen pro Jahr", en: "Supplier invoices per year" },
    instanceUnit: { de: "Rechnung", en: "invoice" },
    instances: (p) => p.purchaseVolume / AVG_SUPPLIER_INVOICE,
    manualMinutes: 7,
    errorRate: 0.07,
    costPerError: 85,
    revenueShare: 0.45,
    costBase: (p) => p.purchaseVolume,
    leakageRate: 0.008,
    varianceOverhead: 0.2,
  },
  {
    id: "source-to-contract",
    categoryId: "supply",
    label: { de: "Source-to-Contract", en: "Source-to-Contract" },
    instanceLabel: { de: "Sourcing-Vorgänge pro Jahr", en: "Sourcing events per year" },
    instanceUnit: { de: "Vorgang", en: "event" },
    instances: (p) => p.purchaseVolume / SPEND_PER_SOURCING_EVENT,
    manualMinutes: 240,
    errorRate: 0.1,
    costPerError: 1500,
    revenueShare: 0.4,
    costBase: (p) => p.purchaseVolume,
    leakageRate: 0.01,
    varianceOverhead: 0.25,
  },
  {
    id: "forecast-to-fulfill",
    categoryId: "supply",
    label: { de: "Forecast-to-Fulfill (Planung)", en: "Forecast-to-Fulfill" },
    instanceLabel: { de: "Planungspositionen pro Jahr", en: "Planning items per year" },
    instanceUnit: { de: "Position", en: "item" },
    instances: (p) => (p.units / p.lotSize) * 0.4 + (p.revenue / MIO) * 12,
    manualMinutes: 60,
    errorRate: 0.12,
    costPerError: 600,
    revenueShare: 0.25,
    leakageRate: 0.015,
    varianceOverhead: 0.26,
  },
  {
    id: "order-to-delivery",
    categoryId: "supply",
    label: { de: "Order-to-Delivery (Versand)", en: "Order-to-Delivery" },
    instanceLabel: { de: "Lieferungen pro Jahr", en: "Shipments per year" },
    instanceUnit: { de: "Lieferung", en: "shipment" },
    instances: (p) => p.orders * DELIVERIES_PER_ORDER,
    manualMinutes: 6,
    scalesWithOrderValue: true,
    errorRate: 0.08,
    costPerError: 130,
    revenueShare: 0.12,
    leakageRate: 0.02,
    varianceOverhead: 0.22,
  },
  {
    id: "receipt-to-stock",
    categoryId: "supply",
    label: { de: "Receipt-to-Stock (Wareneingang)", en: "Receipt-to-Stock" },
    instanceLabel: { de: "Wareneingänge pro Jahr", en: "Goods receipts per year" },
    instanceUnit: { de: "Wareneingang", en: "goods receipt" },
    instances: (p) => (p.purchaseVolume / AVG_SUPPLIER_INVOICE) * 0.8,
    manualMinutes: 5,
    errorRate: 0.06,
    costPerError: 95,
    revenueShare: 0.2,
    costBase: (p) => p.purchaseVolume,
    leakageRate: 0.006,
    varianceOverhead: 0.18,
  },

  // --- Produktion & Technik ---
  {
    id: "plan-to-produce",
    categoryId: "production",
    label: { de: "Plan-to-Produce", en: "Plan-to-Produce" },
    instanceLabel: { de: "Fertigungsaufträge pro Jahr", en: "Production orders per year" },
    instanceUnit: { de: "Fertigungsauftrag", en: "production order" },
    instances: (p) => p.units / p.lotSize,
    manualMinutes: 15,
    scalesWithOrderValue: true,
    errorRate: 0.09,
    costPerError: 300,
    revenueShare: 0.35,
    leakageRate: 0.01,
    varianceOverhead: 0.26,
  },
  {
    id: "idea-to-market",
    categoryId: "production",
    label: { de: "Idea-to-Market (Produktentwicklung)", en: "Idea-to-Market" },
    instanceLabel: { de: "Entwicklungsprojekte pro Jahr", en: "Development projects per year" },
    instanceUnit: { de: "Projekt", en: "project" },
    instances: (p) => (p.revenue / MIO) * 0.4,
    manualMinutes: 1800,
    errorRate: 0.25,
    costPerError: 9000,
    revenueShare: 0.05,
    leakageRate: 0.06,
    varianceOverhead: 0.3,
  },
  {
    id: "plan-to-maintain",
    categoryId: "production",
    label: { de: "Plan-to-Maintain (Instandhaltung)", en: "Plan-to-Maintain" },
    instanceLabel: { de: "Wartungsaufträge pro Jahr", en: "Maintenance orders per year" },
    instanceUnit: { de: "Wartungsauftrag", en: "maintenance order" },
    instances: (p) => (p.revenue / MIO) * 25,
    manualMinutes: 20,
    errorRate: 0.1,
    costPerError: 350,
    revenueShare: 0.05,
    leakageRate: 0.02,
    varianceOverhead: 0.22,
  },
  {
    id: "incident-to-resolution",
    categoryId: "production",
    label: { de: "Incident-to-Resolution (Störungen)", en: "Incident-to-Resolution" },
    instanceLabel: { de: "Störungen pro Jahr", en: "Incidents per year" },
    instanceUnit: { de: "Störung", en: "incident" },
    instances: (p) => (p.revenue / MIO) * 3,
    manualMinutes: 90,
    errorRate: 0.18,
    costPerError: 1800,
    revenueShare: 0.03,
    leakageRate: 0.05,
    varianceOverhead: 0.28,
  },
  {
    id: "issue-to-capa",
    categoryId: "production",
    label: { de: "Issue-to-CAPA (Qualitätsabweichung)", en: "Issue-to-CAPA" },
    instanceLabel: { de: "Abweichungen pro Jahr", en: "Deviations per year" },
    instanceUnit: { de: "Abweichung", en: "deviation" },
    instances: (p) => (p.units / p.lotSize) * 0.04,
    manualMinutes: 120,
    scalesWithOrderValue: true,
    errorRate: 0.14,
    costPerError: 900,
    revenueShare: 0.03,
    leakageRate: 0.03,
    varianceOverhead: 0.28,
  },

  // --- Finance & Administration ---
  {
    id: "record-to-report",
    categoryId: "finance",
    label: { de: "Record-to-Report (Abschluss)", en: "Record-to-Report" },
    instanceLabel: { de: "Abschlussvorgänge pro Jahr", en: "Closing activities per year" },
    instanceUnit: { de: "Vorgang", en: "activity" },
    instances: (p) => p.employees * 1.2,
    manualMinutes: 45,
    errorRate: 0.08,
    costPerError: 500,
    revenueShare: 0.02,
    leakageRate: 0.02,
    varianceOverhead: 0.24,
  },
  {
    id: "invoice-to-cash",
    categoryId: "finance",
    label: { de: "Invoice-to-Cash (Debitoren)", en: "Invoice-to-Cash" },
    instanceLabel: { de: "Ausgangsrechnungen pro Jahr", en: "Customer invoices per year" },
    instanceUnit: { de: "Rechnung", en: "invoice" },
    instances: (p) => p.orders * INVOICES_PER_ORDER + p.recurringContracts * 12,
    manualMinutes: 5,
    scalesWithOrderValue: true,
    errorRate: 0.07,
    costPerError: 95,
    revenueShare: 1.0,
    leakageRate: 0.002,
    varianceOverhead: 0.2,
  },
  {
    id: "acquire-to-retire",
    categoryId: "finance",
    label: { de: "Acquire-to-Retire (Anlagen)", en: "Acquire-to-Retire" },
    instanceLabel: { de: "Anlagenvorgänge pro Jahr", en: "Asset transactions per year" },
    instanceUnit: { de: "Vorgang", en: "transaction" },
    instances: (p) => (p.revenue / MIO) * 1.5,
    manualMinutes: 120,
    errorRate: 0.1,
    costPerError: 900,
    revenueShare: 0.06,
    leakageRate: 0.015,
    varianceOverhead: 0.22,
  },
  {
    id: "request-to-reimburse",
    categoryId: "finance",
    label: { de: "Request-to-Reimburse (Reisekosten)", en: "Request-to-Reimburse" },
    instanceLabel: { de: "Abrechnungen pro Jahr", en: "Expense reports per year" },
    instanceUnit: { de: "Abrechnung", en: "expense report" },
    instances: (p) => p.employees * 5,
    manualMinutes: 12,
    errorRate: 0.09,
    costPerError: 60,
    revenueShare: 0.015,
    leakageRate: 0.05,
    varianceOverhead: 0.2,
  },
  {
    id: "audit-to-report",
    categoryId: "finance",
    label: { de: "Audit-to-Report (Compliance)", en: "Audit-to-Report" },
    instanceLabel: { de: "Prüfvorgänge pro Jahr", en: "Audit activities per year" },
    instanceUnit: { de: "Prüfvorgang", en: "audit activity" },
    instances: (p) => p.employees * 0.1,
    manualMinutes: 200,
    errorRate: 0.12,
    costPerError: 1200,
    revenueShare: 0.01,
    leakageRate: 0.05,
    varianceOverhead: 0.26,
  },

  // --- HR & IT ---
  {
    id: "recruit-to-onboard",
    categoryId: "hrit",
    label: { de: "Recruit-to-Onboard", en: "Recruit-to-Onboard" },
    instanceLabel: { de: "Einstellungen pro Jahr", en: "Hires per year" },
    instanceUnit: { de: "Einstellung", en: "hire" },
    instances: (p) => p.employees * 0.12,
    manualMinutes: 420,
    errorRate: 0.15,
    costPerError: 3500,
    revenueShare: 0.02,
    leakageRate: 0.04,
    varianceOverhead: 0.24,
  },
  {
    id: "hire-to-retire",
    categoryId: "hrit",
    label: { de: "Hire-to-Retire", en: "Hire-to-Retire" },
    instanceLabel: { de: "HR-Vorgänge pro Jahr", en: "HR transactions per year" },
    instanceUnit: { de: "Vorgang", en: "transaction" },
    instances: (p) => p.employees * 0.6,
    manualMinutes: 150,
    errorRate: 0.12,
    costPerError: 900,
    revenueShare: 0.03,
    leakageRate: 0.02,
    varianceOverhead: 0.24,
  },
  {
    id: "ticket-to-resolution",
    categoryId: "hrit",
    label: { de: "Ticket-to-Resolution (IT Service)", en: "Ticket-to-Resolution" },
    instanceLabel: { de: "Tickets pro Jahr", en: "Tickets per year" },
    instanceUnit: { de: "Ticket", en: "ticket" },
    instances: (p) => p.employees * 18,
    manualMinutes: 8,
    errorRate: 0.1,
    costPerError: 70,
    revenueShare: 0.02,
    leakageRate: 0.04,
    varianceOverhead: 0.22,
  },
  {
    id: "access-to-authorization",
    categoryId: "hrit",
    label: { de: "Access-to-Authorization (Berechtigungen)", en: "Access-to-Authorization" },
    instanceLabel: { de: "Berechtigungsanträge pro Jahr", en: "Access requests per year" },
    instanceUnit: { de: "Antrag", en: "request" },
    instances: (p) => p.employees * 4,
    manualMinutes: 10,
    errorRate: 0.12,
    costPerError: 90,
    revenueShare: 0.005,
    leakageRate: 0.06,
    varianceOverhead: 0.24,
  },

  // --- Branchenspezifisch ---
  {
    id: "claim-to-settlement",
    categoryId: "industry",
    label: { de: "Claim-to-Settlement (Schadenfall)", en: "Claim-to-Settlement" },
    instanceLabel: { de: "Schadenfälle pro Jahr", en: "Claims per year" },
    instanceUnit: { de: "Schadenfall", en: "claim" },
    instances: (p) => p.customers * 0.18,
    manualMinutes: 25,
    errorRate: 0.1,
    costPerError: 400,
    revenueShare: 0.6,
    leakageRate: 0.008,
    varianceOverhead: 0.24,
  },
  {
    id: "application-to-policy",
    categoryId: "industry",
    label: { de: "Application-to-Policy (Antrag)", en: "Application-to-Policy" },
    instanceLabel: { de: "Anträge pro Jahr", en: "Applications per year" },
    instanceUnit: { de: "Antrag", en: "application" },
    instances: (p) => p.customers * 0.22,
    manualMinutes: 18,
    errorRate: 0.09,
    costPerError: 220,
    revenueShare: 0.3,
    leakageRate: 0.006,
    varianceOverhead: 0.22,
  },
  {
    id: "loan-origination",
    categoryId: "industry",
    label: { de: "Loan Origination (Kreditvergabe)", en: "Loan Origination" },
    instanceLabel: { de: "Kreditanträge pro Jahr", en: "Loan applications per year" },
    instanceUnit: { de: "Kreditantrag", en: "loan application" },
    instances: (p) => p.customers * 0.06,
    manualMinutes: 90,
    errorRate: 0.08,
    costPerError: 800,
    revenueShare: 0.4,
    leakageRate: 0.006,
    varianceOverhead: 0.26,
  },
  {
    id: "account-opening-kyc",
    categoryId: "industry",
    label: { de: "Account Opening & KYC", en: "Account Opening & KYC" },
    instanceLabel: { de: "Kontoeröffnungen pro Jahr", en: "Account openings per year" },
    instanceUnit: { de: "Kontoeröffnung", en: "account opening" },
    instances: (p) => p.customers * 0.1,
    manualMinutes: 20,
    errorRate: 0.12,
    costPerError: 180,
    revenueShare: 0.05,
    leakageRate: 0.01,
    varianceOverhead: 0.26,
  },
  {
    id: "payment-processing",
    categoryId: "industry",
    label: { de: "Payment Processing", en: "Payment Processing" },
    instanceLabel: { de: "Zahlungen pro Jahr", en: "Payments per year" },
    instanceUnit: { de: "Zahlung", en: "payment" },
    instances: (p) => p.customers * 24,
    manualMinutes: 0.8,
    errorRate: 0.015,
    costPerError: 45,
    revenueShare: 0.5,
    leakageRate: 0.002,
    varianceOverhead: 0.18,
  },
  {
    id: "order-to-activate",
    categoryId: "industry",
    label: { de: "Order-to-Activate (Provisionierung)", en: "Order-to-Activate" },
    instanceLabel: { de: "Aktivierungen pro Jahr", en: "Activations per year" },
    instanceUnit: { de: "Aktivierung", en: "activation" },
    instances: (p) => p.customers * 0.25,
    manualMinutes: 22,
    errorRate: 0.11,
    costPerError: 210,
    revenueShare: 0.15,
    leakageRate: 0.01,
    varianceOverhead: 0.26,
  },
  {
    id: "admission-to-discharge",
    categoryId: "industry",
    label: { de: "Admission-to-Discharge (Patientenpfad)", en: "Admission-to-Discharge" },
    instanceLabel: { de: "Behandlungsfälle pro Jahr", en: "Patient cases per year" },
    instanceUnit: { de: "Fall", en: "case" },
    instances: (p) => p.units,
    manualMinutes: 35,
    scalesWithOrderValue: true,
    errorRate: 0.09,
    costPerError: 450,
    revenueShare: 0.35,
    leakageRate: 0.01,
    varianceOverhead: 0.28,
  },
];

export const coiIndustries: CoiIndustry[] = [
  { id: "manufacturing", label: { de: "Fertigung & Industrie", en: "Manufacturing & Industrials" }, laborFactor: 1.0, costFactor: 1.0, qualityFactor: 1.0 },
  { id: "automotive", label: { de: "Automotive", en: "Automotive" }, laborFactor: 1.05, costFactor: 1.05, qualityFactor: 1.15 },
  { id: "pharma", label: { de: "Pharma & Life Sciences", en: "Pharma & Life Sciences" }, laborFactor: 1.2, costFactor: 1.0, qualityFactor: 1.35 },
  { id: "chemical", label: { de: "Chemie", en: "Chemicals" }, laborFactor: 1.1, costFactor: 1.05, qualityFactor: 1.15 },
  { id: "consumer-goods", label: { de: "Konsumgüter & FMCG", en: "Consumer Goods & FMCG" }, laborFactor: 0.95, costFactor: 1.05, qualityFactor: 1.0 },
  { id: "retail", label: { de: "Handel & E-Commerce", en: "Retail & E-Commerce" }, laborFactor: 0.85, costFactor: 1.1, qualityFactor: 0.95 },
  { id: "logistics", label: { de: "Logistik & Transport", en: "Logistics & Transport" }, laborFactor: 0.85, costFactor: 1.1, qualityFactor: 1.0 },
  { id: "insurance", label: { de: "Versicherung", en: "Insurance" }, laborFactor: 1.1, costFactor: 1.0, qualityFactor: 1.1 },
  { id: "banking", label: { de: "Banken & Financial Services", en: "Banking & Financial Services" }, laborFactor: 1.2, costFactor: 0.95, qualityFactor: 1.2 },
  { id: "energy", label: { de: "Energie & Versorgung", en: "Energy & Utilities" }, laborFactor: 1.1, costFactor: 1.0, qualityFactor: 1.1 },
  { id: "telco", label: { de: "Telekommunikation", en: "Telecommunications" }, laborFactor: 1.05, costFactor: 1.05, qualityFactor: 1.05 },
  { id: "public", label: { de: "Öffentlicher Sektor", en: "Public Sector" }, laborFactor: 0.9, costFactor: 0.95, qualityFactor: 1.05 },
  { id: "healthcare", label: { de: "Gesundheitswesen", en: "Healthcare" }, laborFactor: 1.0, costFactor: 1.0, qualityFactor: 1.25 },
  { id: "it-software", label: { de: "IT & Software", en: "IT & Software" }, laborFactor: 1.25, costFactor: 0.95, qualityFactor: 1.0 },
  { id: "professional-services", label: { de: "Professional Services", en: "Professional Services" }, laborFactor: 1.2, costFactor: 0.95, qualityFactor: 1.0 },
  { id: "construction", label: { de: "Bau & Anlagenbau", en: "Construction & Plant Engineering" }, laborFactor: 1.0, costFactor: 1.15, qualityFactor: 1.1 },
];

export const coiCompanySizes: CoiCompanySize[] = [
  {
    id: "xs",
    label: { de: "bis 50 Mitarbeitende", en: "up to 50 employees" },
    handoffFactor: 0.8,
    employees: { min: 5, max: 50 },
    revenue: { min: 1 * MIO, max: 30 * MIO },
  },
  {
    id: "s",
    label: { de: "50 – 249 Mitarbeitende", en: "50 – 249 employees" },
    handoffFactor: 0.9,
    employees: { min: 50, max: 249 },
    revenue: { min: 5 * MIO, max: 100 * MIO },
  },
  {
    id: "m",
    label: { de: "250 – 999 Mitarbeitende", en: "250 – 999 employees" },
    handoffFactor: 1.0,
    employees: { min: 250, max: 999 },
    revenue: { min: 20 * MIO, max: 500 * MIO },
  },
  {
    id: "l",
    label: { de: "1.000 – 4.999 Mitarbeitende", en: "1,000 – 4,999 employees" },
    handoffFactor: 1.12,
    employees: { min: 1000, max: 4999 },
    revenue: { min: 75 * MIO, max: 2000 * MIO },
  },
  {
    id: "xl",
    label: { de: "5.000 – 19.999 Mitarbeitende", en: "5,000 – 19,999 employees" },
    handoffFactor: 1.25,
    employees: { min: 5000, max: 19999 },
    revenue: { min: 300 * MIO, max: 10000 * MIO },
  },
  {
    id: "xxl",
    label: { de: "ab 20.000 Mitarbeitende", en: "20,000+ employees" },
    handoffFactor: 1.4,
    employees: { min: 20000, max: 150000 },
    revenue: { min: 1500 * MIO, max: 50000 * MIO },
  },
];

export const coiMaturityLevels: CoiMaturityLevel[] = [
  { value: 1, label: { de: "Keine Transparenz – Bauchgefühl & Excel", en: "No transparency – gut feeling & spreadsheets" }, factor: 1.3 },
  { value: 2, label: { de: "Einzelne Reports und KPIs", en: "Isolated reports and KPIs" }, factor: 1.15 },
  { value: 3, label: { de: "BI-Dashboards, aber keine Prozesssicht", en: "BI dashboards, but no process view" }, factor: 1.0 },
  { value: 4, label: { de: "Erste Prozessanalysen im Einsatz", en: "First process analyses in place" }, factor: 0.8 },
  { value: 5, label: { de: "Durchgängige, datenbasierte Prozesssteuerung", en: "End-to-end, data-driven process control" }, factor: 0.6 },
];

/* -------------------------------------------------------------------------- */
/* Derivation                                                                 */
/* -------------------------------------------------------------------------- */

export interface CoiBusinessInput {
  industryId: string;
  companySizeId: string;
  units: number;
  unitValue: number;
  customers: number;
  itemsPerOrder: number;
  businessModelId: string;
  /** 0 - 1 */
  recurringShare: number;
  /** 0 - 1 */
  materialShare: number;
}

export interface CoiInput extends CoiBusinessInput {
  processId: string;
  instances: number;
  maturity: number;
  years: number;
}

export interface CoiResult {
  dimensions: Record<CoiDimension, number>;
  perYear: number;
  total: number;
  perInstance: number;
  revenueShareOfCoi: number;
  recoverablePerYear: { min: number; max: number };
  effortMinutes: number;
}

export const getProcessById = (id: string) =>
  coiProcesses.find((process) => process.id === id) ?? coiProcesses[0];

export const getCompanySize = (id: string) =>
  coiCompanySizes.find((size) => size.id === id) ?? coiCompanySizes[2];

export const getIndustry = (id: string) =>
  coiIndustries.find((industry) => industry.id === id) ?? coiIndustries[0];

export const getBusinessModel = (id: string) =>
  coiBusinessModels.find((model) => model.id === id) ?? coiBusinessModels[1];

/**
 * Estimates the headcount inside the selected band. Revenue position within the
 * band's revenue range is interpolated logarithmically onto its employee range,
 * so a company at the top of its revenue band also sits at the top of its headcount band.
 */
export const estimateEmployees = (companySizeId: string, revenue: number): number => {
  const size = getCompanySize(companySizeId);
  const { min: revMin, max: revMax } = size.revenue;
  const position = Math.min(
    1,
    Math.max(0, (Math.log(Math.max(1, revenue)) - Math.log(revMin)) / (Math.log(revMax) - Math.log(revMin)))
  );
  return Math.round(
    Math.exp(
      Math.log(size.employees.min) +
        position * (Math.log(size.employees.max) - Math.log(size.employees.min))
    )
  );
};

/** Typical basket size derived from the unit value: machines sell one at a time, screws by the box */
export const suggestItemsPerOrder = (unitValue: number): number => {
  if (unitValue >= 100_000) return 1;
  if (unitValue >= 10_000) return 1.2;
  if (unitValue >= 1_000) return 2;
  if (unitValue >= 100) return 3;
  if (unitValue >= 10) return 6;
  return 12;
};

/** Return rates differ fundamentally between low-priced B2C goods and capital goods */
const suggestReturnRate = (unitValue: number): number => {
  if (unitValue < 200) return 0.08;
  if (unitValue < 2_000) return 0.03;
  return 0.005;
};

export const derivePrimitives = (input: CoiBusinessInput): CoiPrimitives => {
  const units = Math.max(1, input.units);
  const unitValue = Math.max(0, input.unitValue);
  const revenue = units * unitValue;
  const itemsPerOrder = Math.max(0.1, input.itemsPerOrder);
  const orders = Math.max(1, units / itemsPerOrder);
  const customers = Math.max(1, input.customers);
  const employees = estimateEmployees(input.companySizeId, revenue);

  return {
    units,
    unitValue,
    revenue,
    orders,
    orderValue: revenue / orders,
    customers,
    employees,
    purchaseVolume: revenue * input.materialShare,
    recurringContracts: customers * input.recurringShare,
    lotSize: getBusinessModel(input.businessModelId).lotSize,
    returnRate: suggestReturnRate(unitValue),
    revenuePerEmployee: employees > 0 ? revenue / employees : 0,
  };
};

/** Inputs that only matter for some processes */
export type CoiOptionalInput = "customers" | "itemsPerOrder" | "recurringShare" | "materialShare";

/**
 * Fingerprint of everything a business input can influence for a given process:
 * the derived instance count and the monetary base of the cost dimension.
 */
const processSignature = (process: CoiProcess, primitives: CoiPrimitives): string => {
  const costBase = process.costBase
    ? process.costBase(primitives)
    : primitives.revenue * process.revenueShare;
  return `${process.instances(primitives)}|${costBase}`;
};

/**
 * Determines which optional inputs actually change the result for the selected
 * process by probing the formulas - so this can never drift out of sync with them.
 */
export const relevantInputs = (
  processId: string,
  input: CoiBusinessInput
): Record<CoiOptionalInput, boolean> => {
  const process = getProcessById(processId);
  const baseline = processSignature(process, derivePrimitives(input));
  const changes = (patch: Partial<CoiBusinessInput>) =>
    processSignature(process, derivePrimitives({ ...input, ...patch })) !== baseline;

  return {
    customers: changes({ customers: input.customers * 2 + 7 }),
    itemsPerOrder: changes({ itemsPerOrder: input.itemsPerOrder * 2 + 1 }),
    recurringShare: changes({ recurringShare: input.recurringShare > 0.5 ? 0.1 : 0.9 }),
    materialShare: changes({ materialShare: input.materialShare > 0.4 ? 0.1 : 0.7 }),
  };
};

/** Rounds to a value that reads well on a slider */
const roundNice = (value: number): number => {
  if (value < 20) return Math.max(1, Math.round(value));
  if (value < 100) return Math.round(value / 5) * 5;
  if (value < 1000) return Math.round(value / 10) * 10;
  if (value < 10_000) return Math.round(value / 100) * 100;
  if (value < 100_000) return Math.round(value / 500) * 500;
  if (value < 1_000_000) return Math.round(value / 1000) * 1000;
  return Math.round(value / 10_000) * 10_000;
};

/** How far the user may move away from the derived value */
export const COI_INSTANCE_RANGE = { min: 0.25, max: 4 };

export const suggestInstances = (processId: string, primitives: CoiPrimitives): number =>
  roundNice(Math.max(1, getProcessById(processId).instances(primitives)));

export const instanceBounds = (
  processId: string,
  primitives: CoiPrimitives
): { min: number; max: number; suggestion: number } => {
  const suggestion = suggestInstances(processId, primitives);
  return {
    min: Math.max(1, roundNice(suggestion * COI_INSTANCE_RANGE.min)),
    max: roundNice(suggestion * COI_INSTANCE_RANGE.max),
    suggestion,
  };
};

/** Logarithmically spaced, nicely rounded slider stops between min and max */
export const buildInstanceSteps = (min: number, max: number): number[] => {
  const lo = Math.max(1, Math.round(min));
  const hi = Math.max(lo + 1, Math.round(max));
  const stops = new Set<number>([lo, hi]);
  const count = 40;

  for (let i = 1; i < count; i++) {
    const raw = lo * Math.pow(hi / lo, i / count);
    stops.add(Math.min(hi, Math.max(lo, roundNice(raw))));
  }

  return [...stops].sort((a, b) => a - b);
};

/**
 * Handling effort per instance relative to the benchmark. Scales sub-linearly with
 * the order value and is capped on both ends so extreme inputs stay sane.
 */
export const effortFactorFor = (orderValue: number): number => {
  const { referenceOrderValue, exponent, min, max } = COI_EFFORT_SCALING;
  const raw = Math.pow(Math.max(1, orderValue) / referenceOrderValue, exponent);
  return Math.min(max, Math.max(min, raw));
};

export type CoiPlausibility = "low" | "ok" | "high";

export const revenuePerEmployeePlausibility = (revenuePerEmployee: number): CoiPlausibility => {
  if (revenuePerEmployee < COI_REVENUE_PER_EMPLOYEE.low) return "low";
  if (revenuePerEmployee > COI_REVENUE_PER_EMPLOYEE.high) return "high";
  return "ok";
};

export const calculateCostOfInaction = (input: CoiInput): CoiResult => {
  const primitives = derivePrimitives(input);
  const process = getProcessById(input.processId);
  const industry = getIndustry(input.industryId);
  const size = getCompanySize(input.companySizeId);
  const businessModel = getBusinessModel(input.businessModelId);
  const maturity =
    coiMaturityLevels.find((level) => level.value === input.maturity) ?? coiMaturityLevels[2];

  const instances = Math.max(0, input.instances);
  const hourlyRate = COI_BASE_HOURLY_RATE * industry.laborFactor;
  const effortFactor = process.scalesWithOrderValue ? effortFactorFor(primitives.orderValue) : 1;
  const effortMinutes = process.manualMinutes * effortFactor;

  // Time: manual touchpoints, waiting times and rework loops per instance
  const time = instances * (effortMinutes / 60) * hourlyRate * size.handoffFactor;

  // Cost: value leakage on the monetary volume flowing through the process
  const costBase = process.costBase
    ? process.costBase(primitives)
    : primitives.revenue * process.revenueShare;
  const cost = costBase * process.leakageRate * industry.costFactor;

  // Quality: defect cases and their downstream cost - a defect on a 1 Mio € order
  // does not cost the same as one on a 40 € order. The handling floor scales like
  // the effort, the claim on top is a share of the order value.
  const costPerError = process.scalesWithOrderValue
    ? Math.max(
        process.costPerError * effortFactor,
        primitives.orderValue * COI_EFFORT_SCALING.errorCostShare
      )
    : process.costPerError;
  const quality = instances * process.errorRate * costPerError * industry.qualityFactor;

  // Complexity: overhead created by process variants and organisational handoffs
  const complexity =
    (time + cost + quality) *
    process.varianceOverhead *
    size.handoffFactor *
    businessModel.complexityFactor;

  const scale = maturity.factor;
  const dimensions: Record<CoiDimension, number> = {
    time: time * scale,
    cost: cost * scale,
    quality: quality * scale,
    complexity: complexity * scale,
  };

  const perYear = dimensions.time + dimensions.cost + dimensions.quality + dimensions.complexity;

  return {
    dimensions,
    perYear,
    total: perYear * input.years,
    perInstance: instances > 0 ? perYear / instances : 0,
    revenueShareOfCoi: primitives.revenue > 0 ? perYear / primitives.revenue : 0,
    recoverablePerYear: {
      min: perYear * COI_RECOVERABLE_RANGE.min,
      max: perYear * COI_RECOVERABLE_RANGE.max,
    },
    effortMinutes,
  };
};

/* -------------------------------------------------------------------------- */
/* Formatting                                                                 */
/* -------------------------------------------------------------------------- */

const localeFor = (language: Language) => (language === "de" ? "de-DE" : "en-US");

export const formatEuro = (value: number, language: Language): string =>
  new Intl.NumberFormat(localeFor(language), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export const formatEuroCompact = (value: number, language: Language): string =>
  new Intl.NumberFormat(localeFor(language), {
    style: "currency",
    currency: "EUR",
    notation: "compact",
    maximumFractionDigits: value >= 1_000_000 ? 2 : 0,
  }).format(value);

export const formatNumber = (value: number, language: Language): string =>
  new Intl.NumberFormat(localeFor(language), { maximumFractionDigits: 0 }).format(value);

export const formatDuration = (minutes: number, language: Language): string => {
  if (minutes < 60) {
    const rounded = minutes < 10 ? Math.round(minutes * 10) / 10 : Math.round(minutes);
    return `${new Intl.NumberFormat(localeFor(language), { maximumFractionDigits: 1 }).format(rounded)} min`;
  }
  const hours = minutes / 60;
  return `${new Intl.NumberFormat(localeFor(language), { maximumFractionDigits: 1 }).format(hours)} h`;
};

/* -------------------------------------------------------------------------- */
/* UI copy                                                                    */
/* -------------------------------------------------------------------------- */

export const coiCopy = {
  de: {
    badge: "Cost-of-Inaction Rechner",
    title: "Was kostet es, nichts zu tun?",
    subtitle:
      "Berechne in 5 min, wie viele versteckte Kosten pro Jahr in deinem End-to-End-Prozess stecken – entlang der vier Prozessdimensionen Zeit, Kosten, Qualität und Komplexität.",
    openCalculator: "Cost-of-Inaction jetzt berechnen",
    closeCalculator: "Rechner ausblenden",
    landingPageLink:
      "Mehr zum Cost of Inaction und zum Devil's Quadrangle der Prozessdimensionen",
    companySection: "Unternehmen & Geschäftsmodell",
    processSection: "Welchen Prozess willst du rechnen?",
    calculationSection: "Berechnung",
    notRelevant: "nicht relevant",
    notRelevantHint:
      "Dieses Feld fließt bei dem gewählten Prozess nicht in die Berechnung ein.",
    industry: "Branche",
    companySize: "Unternehmensgröße",
    units: "Verkaufte Produkte/Services pro Jahr",
    unitValue: "Wert pro Produkt/Service",
    revenueResult: "ergibt Jahresumsatz",
    customers: "Kundenstamm",
    itemsPerOrder: "Ø Positionen pro Auftrag",
    itemsPerOrderAuto: "automatisch",
    businessModel: "Geschäfts-/Fertigungsart",
    recurringShare: "Anteil wiederkehrender Umsatz",
    materialShare: "Materialkosten-/Einkaufsquote",
    profileOrders: "Aufträge/Jahr",
    profileOrderValue: "Ø Auftragswert",
    profileRevenuePerEmployee: "Umsatz je Mitarbeitendem",
    profileEmployees: "Mitarbeitende",
    plausibilityLow:
      "Ungewöhnlich niedriger Umsatz je Mitarbeitendem – prüfe Stückzahl, Stückwert oder Unternehmensgröße.",
    plausibilityHigh:
      "Ungewöhnlich hoher Umsatz je Mitarbeitendem – prüfe Stückzahl, Stückwert oder Unternehmensgröße.",
    process: "End-to-End-Prozess",
    processPlaceholder: "Prozess auswählen",
    instancesHint: "Abgeleitet:",
    instancesReset: "Ableitung übernehmen",
    effortHint: "Ø Aufwand je Vorgang",
    maturity: "Prozesstransparenz heute",
    years: "Betrachtungszeitraum",
    yearsUnit: (n: number) => (n === 1 ? "1 Jahr" : `${n} Jahre`),
    resultLabel: "Cost of Inaction pro Jahr",
    resultTotalLabel: (n: number) => (n === 1 ? "In 1 Jahr" : `In ${n} Jahren`),
    breakdownTitle: "Verteilung auf die Prozessdimensionen",
    dimensions: {
      time: "Zeit",
      cost: "Kosten",
      quality: "Qualität",
      complexity: "Komplexität",
    } as Record<CoiDimension, string>,
    dimensionHints: {
      time: "Manuelle Touchpoints, Wartezeiten und Rückfragen je Prozessinstanz – skaliert mit dem Auftragswert",
      cost: "Wertverlust auf dem Volumen, das durch den Prozess fließt (Rabatte, Skonti, Kapitalbindung, Pönalen)",
      quality: "Fehlerfälle, Nacharbeit und deren Folgekosten – ein Fehler an einer 1-Mio-Maschine kostet mehr als einer an einer 40-€-Bestellung",
      complexity: "Overhead durch Prozessvarianten, Systembrüche und Abteilungsübergaben",
    } as Record<CoiDimension, string>,
    perInstance: "je",
    ofRevenue: "vom Umsatz",
    recoverable: "Davon typischerweise kurzfristig hebbar",
    cta: "Potenzial im Gespräch validieren",
    downloadPdf: "Meine Einstellungen als PDF herunterladen",
    downloadPdfBusy: "PDF wird erstellt …",
    methodToggleOpen: "Wie wird gerechnet?",
    methodToggleClose: "Berechnung ausblenden",
    method: [
      "Umsatz = verkaufte Produkte/Services × Wert pro Stück. Daraus, aus dem Kundenstamm und der Mitarbeiterzahl werden alle Prozessinstanzen abgeleitet (z. B. Aufträge = Stückzahl ÷ Positionen pro Auftrag).",
      "Zeit = Prozessinstanzen × manuelle Bearbeitungsminuten × vollkostenbezogener Stundensatz. Der Aufwand je Vorgang skaliert sublinear mit dem Auftragswert.",
      "Kosten = Volumen, das durch den Prozess fließt (Umsatz bzw. Einkaufsvolumen) × branchenüblicher Leakage-Rate",
      "Qualität = Prozessinstanzen × Fehlerquote × Kosten je Fehlerfall (mindestens 2 % des Auftragswerts)",
      "Komplexität = Varianten-Overhead auf Zeit, Kosten und Qualität, skaliert mit Unternehmensgröße und Fertigungsart",
      "Der Reifegrad skaliert das Gesamtergebnis: Je weniger Prozesstransparenz heute besteht, desto höher die versteckten Kosten.",
    ],
    disclaimer:
      "Schätzung auf Basis von Branchen-Benchmarks und typischen Prozesskennzahlen. Die tatsächlichen Werte ermitteln wir gemeinsam anhand deiner Systemdaten.",
  },
  en: {
    badge: "Cost-of-Inaction Calculator",
    title: "What does doing nothing cost you?",
    subtitle:
      "Calculate in 5 min how much hidden cost per year sits in your end-to-end process – along the four process dimensions time, cost, quality and complexity.",
    openCalculator: "Calculate Cost-of-Inaction now",
    closeCalculator: "Hide calculator",
    landingPageLink:
      "More on the cost of inaction and the Devil's Quadrangle of process dimensions",
    companySection: "Company & business model",
    processSection: "Which process do you want to calculate?",
    calculationSection: "Calculation",
    notRelevant: "not used",
    notRelevantHint: "This field is not part of the calculation for the selected process.",
    industry: "Industry",
    companySize: "Company size",
    units: "Products/services sold per year",
    unitValue: "Value per product/service",
    revenueResult: "results in annual revenue",
    customers: "Customer base",
    itemsPerOrder: "Avg. items per order",
    itemsPerOrderAuto: "automatic",
    businessModel: "Business / production type",
    recurringShare: "Share of recurring revenue",
    materialShare: "Material / purchasing share",
    profileOrders: "Orders/year",
    profileOrderValue: "Avg. order value",
    profileRevenuePerEmployee: "Revenue per employee",
    profileEmployees: "Employees",
    plausibilityLow:
      "Unusually low revenue per employee – check units, unit value or company size.",
    plausibilityHigh:
      "Unusually high revenue per employee – check units, unit value or company size.",
    process: "End-to-end process",
    processPlaceholder: "Select a process",
    instancesHint: "Derived:",
    instancesReset: "Use derived value",
    effortHint: "Avg. effort per instance",
    maturity: "Process transparency today",
    years: "Time horizon",
    yearsUnit: (n: number) => (n === 1 ? "1 year" : `${n} years`),
    resultLabel: "Cost of inaction per year",
    resultTotalLabel: (n: number) => (n === 1 ? "Over 1 year" : `Over ${n} years`),
    breakdownTitle: "Split across the process dimensions",
    dimensions: {
      time: "Time",
      cost: "Cost",
      quality: "Quality",
      complexity: "Complexity",
    } as Record<CoiDimension, string>,
    dimensionHints: {
      time: "Manual touchpoints, waiting times and clarification loops per instance – scales with order value",
      cost: "Value leakage on the volume flowing through the process (discounts, penalties, capital lock-up)",
      quality: "Defect cases, rework and their downstream cost – a defect on a 1 Mio € machine costs more than one on a 40 € order",
      complexity: "Overhead from process variants, system breaks and handoffs between departments",
    } as Record<CoiDimension, string>,
    perInstance: "per",
    ofRevenue: "of revenue",
    recoverable: "Typically addressable in the short term",
    cta: "Validate your potential with us",
    downloadPdf: "Download my settings as PDF",
    downloadPdfBusy: "Creating PDF …",
    methodToggleOpen: "How is this calculated?",
    methodToggleClose: "Hide calculation",
    method: [
      "Revenue = products/services sold × value per unit. Together with the customer base and headcount this derives every process volume (e.g. orders = units ÷ items per order).",
      "Time = process instances × manual handling minutes × fully loaded hourly rate. Effort per instance scales sub-linearly with order value.",
      "Cost = volume flowing through the process (revenue or purchasing volume) × industry-typical leakage rate",
      "Quality = process instances × error rate × cost per defect (at least 2 % of the order value)",
      "Complexity = variant overhead on time, cost and quality, scaled by company size and production type",
      "Process maturity scales the overall result: the less process transparency you have today, the higher the hidden cost.",
    ],
    disclaimer:
      "Estimate based on industry benchmarks and typical process KPIs. We determine the actual figures together, based on your system data.",
  },
} as const;
