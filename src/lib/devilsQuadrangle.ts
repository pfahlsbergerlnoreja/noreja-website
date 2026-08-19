/**
 * Devil's Quadrangle — the four competing process dimensions and the trade-off
 * model behind the interactive visualisation.
 *
 * Time is opposed by cost, quality is opposed by flexibility. Pushing one
 * dimension spends a fixed improvement budget, so the opposing dimension pays
 * the most and the two adjacent ones pay half as much each.
 */

export type QuadrangleDimension = "time" | "cost" | "quality" | "flexibility";

export const QUADRANGLE_DIMENSIONS: QuadrangleDimension[] = [
  "time",
  "flexibility",
  "cost",
  "quality",
];

/** The dimension that sits on the other end of the same tension axis */
export const QUADRANGLE_OPPOSITE: Record<QuadrangleDimension, QuadrangleDimension> = {
  time: "cost",
  cost: "time",
  quality: "flexibility",
  flexibility: "quality",
};

/** Lower/upper bound for a single dimension — no dimension can be fully sacrificed */
export const DIM_MIN = 0.1;
export const DIM_MAX = 0.94;

/** Every dimension sits at 0.5 in the balanced starting state */
export const BASE_VALUE = 0.5;
export const BASE_BUDGET = BASE_VALUE * 4;

/** How far causal process transparency pushes the trade-off frontier outward */
export const MAX_LIFT = 1.2;

export type QuadrangleValues = Record<QuadrangleDimension, number>;

export const balancedValues = (): QuadrangleValues => ({
  time: BASE_VALUE,
  cost: BASE_VALUE,
  quality: BASE_VALUE,
  flexibility: BASE_VALUE,
});

const clamp = (value: number, min = DIM_MIN, max = DIM_MAX) =>
  Math.min(max, Math.max(min, value));

const sum = (values: QuadrangleValues) =>
  QUADRANGLE_DIMENSIONS.reduce((total, dim) => total + values[dim], 0);

/** The opposing dimension absorbs half of the trade-off, each neighbour a quarter */
const tradeOffWeight = (pushed: QuadrangleDimension, affected: QuadrangleDimension) =>
  affected === QUADRANGLE_OPPOSITE[pushed] ? 0.5 : 0.25;

/**
 * Redistribute until the values add up to `budget` again. Dimensions that hit a
 * bound drop out of the distribution and the remainder is spread over the rest.
 */
const settle = (
  values: QuadrangleValues,
  pushed: QuadrangleDimension,
  budget: number
): QuadrangleValues => {
  const next = { ...values };
  const others = QUADRANGLE_DIMENSIONS.filter((dim) => dim !== pushed);
  let excess = sum(next) - budget;

  for (let step = 0; step < 12 && Math.abs(excess) > 1e-4; step += 1) {
    const adjustable = others.filter((dim) =>
      excess > 0 ? next[dim] > DIM_MIN + 1e-6 : next[dim] < DIM_MAX - 1e-6
    );
    if (adjustable.length === 0) break;

    const weightSum = adjustable.reduce(
      (total, dim) => total + tradeOffWeight(pushed, dim),
      0
    );
    adjustable.forEach((dim) => {
      const share = tradeOffWeight(pushed, dim) / weightSum;
      next[dim] = clamp(next[dim] - excess * share);
    });
    excess = sum(next) - budget;
  }

  // Whatever the others could not absorb is taken back off the pushed dimension
  if (Math.abs(excess) > 1e-4) {
    next[pushed] = clamp(next[pushed] - excess);
  }

  return next;
};

/** Move one dimension to `target` and let the other three pay for it */
export const pushDimension = (
  values: QuadrangleValues,
  dimension: QuadrangleDimension,
  target: number,
  budget: number
): QuadrangleValues =>
  settle({ ...values, [dimension]: clamp(target) }, dimension, budget);

/** Scale every dimension proportionally onto a new budget (used by the lift slider) */
export const rescaleToBudget = (
  values: QuadrangleValues,
  budget: number
): QuadrangleValues => {
  const current = sum(values) || BASE_BUDGET;
  const next = QUADRANGLE_DIMENSIONS.reduce((acc, dim) => {
    acc[dim] = clamp(values[dim] * (budget / current));
    return acc;
  }, {} as QuadrangleValues);

  // Proportional scaling can clip at a bound — spread the remainder evenly
  let excess = sum(next) - budget;
  for (let step = 0; step < 12 && Math.abs(excess) > 1e-4; step += 1) {
    const adjustable = QUADRANGLE_DIMENSIONS.filter((dim) =>
      excess > 0 ? next[dim] > DIM_MIN + 1e-6 : next[dim] < DIM_MAX - 1e-6
    );
    if (adjustable.length === 0) break;
    adjustable.forEach((dim) => {
      next[dim] = clamp(next[dim] - excess / adjustable.length);
    });
    excess = sum(next) - budget;
  }

  return next;
};

/**
 * How hard both tension axes are stretched, 0 = perfectly balanced,
 * 1 = one end of an axis fully sacrificed for the other.
 */
export const tradeOffTension = (values: QuadrangleValues) => {
  const span = DIM_MAX - DIM_MIN;
  const timeCost = Math.abs(values.time - values.cost) / span;
  const qualityFlex = Math.abs(values.quality - values.flexibility) / span;
  return Math.min(1, (timeCost + qualityFlex) / 2);
};

export const quadranglePresets: {
  id: string;
  label: Record<"de" | "en", string>;
  values: QuadrangleValues;
}[] = [
  {
    id: "balanced",
    label: { de: "Ausbalanciert", en: "Balanced" },
    values: { time: 0.5, cost: 0.5, quality: 0.5, flexibility: 0.5 },
  },
  {
    id: "speed",
    label: { de: "Durchlaufzeit first", en: "Speed first" },
    values: { time: 0.9, cost: 0.24, quality: 0.4, flexibility: 0.46 },
  },
  {
    id: "cost",
    label: { de: "Kostenprogramm", en: "Cost programme" },
    values: { time: 0.24, cost: 0.9, quality: 0.42, flexibility: 0.44 },
  },
  {
    id: "quality",
    label: { de: "Null-Fehler-Ziel", en: "Zero-defect target" },
    values: { time: 0.44, cost: 0.42, quality: 0.9, flexibility: 0.24 },
  },
  {
    id: "flexibility",
    label: { de: "Maximale Varianz", en: "Maximum variance" },
    values: { time: 0.42, cost: 0.44, quality: 0.24, flexibility: 0.9 },
  },
];
