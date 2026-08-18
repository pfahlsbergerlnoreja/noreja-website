import { useEffect, useRef, useState } from "react";

/**
 * ProcessGraphAnimation - 3D process-graph build-up, ported from the
 * "Process Intelligence Animation" design handoff (design_handoff_process_graph).
 *
 * Everything is a pure function of the authored time `T`: a lattice of ~300
 * process nodes and ~900 edges builds up over a 23 s authored loop, five
 * dominant paths ignite in the brand accent with travelling pulses, and
 * ok / exception markers pop up at checkpoints along them.
 *
 * Rendering notes (from the handoff's performance section):
 *  - ~900 edges are batched into 4 depth buckets, one <path> per bucket, so the
 *    mesh costs ~10 elements per frame instead of ~900.
 *  - No SVG filters. All glow is layered translucent strokes plus one radial
 *    gradient.
 *  - Coordinates are rounded to 0.1 px to keep the path strings short.
 */

const W = 1920;
const H = 1080;

/* Palette. `accent` defaults to the Noreja tertiary brand token (#23F3DA). */
const ACCENT_DEFAULT = "#23F3DA"; // --noreja-tertiary
const C = {
  nodeCore: "#DCF3FF",
  nodeLive: "#8FDCFF",
  edge: "138,186,236",
  heroCore: "#FFF4E6",
  err: "#FF6B6B",
  ok: "#5BE8A8",
  dust: "rgba(150,200,255,0.35)",
};

/* ---------------- authored timeline ---------------- */
/* `dur` is playback seconds, `nat` the authored seconds it maps to, so the
   Paths section plays back slower than it was authored. */
const SECTIONS = [
  { name: "Ignition", dur: 3, nat: 3 },
  { name: "Spread", dur: 5, nat: 5 },
  { name: "Weave", dur: 4, nat: 4 },
  { name: "Paths", dur: 7.5, nat: 5 },
  { name: "Reveal", dur: 3.5, nat: 3.5 },
  { name: "Dissolve", dur: 2.5, nat: 2.5 },
];

const TIMELINE = (() => {
  let playStart = 0;
  let authStart = 0;
  const sections = SECTIONS.map((s) => {
    const entry = { ...s, playStart, authStart };
    playStart += s.dur;
    authStart += s.nat;
    return entry;
  });
  const cues: Record<string, number> = {};
  sections.forEach((s) => {
    cues[s.name] = s.authStart;
  });
  return { sections, cues, playbackTotal: playStart, authoredTotal: authStart };
})();

const CUES = TIMELINE.cues;
const AUTHORED_TOTAL = TIMELINE.authoredTotal;

/** playback seconds -> authored seconds */
function warp(t: number): number {
  const ss = TIMELINE.sections;
  let s = ss[ss.length - 1];
  for (const cand of ss) {
    if (t < cand.playStart + cand.dur) {
      s = cand;
      break;
    }
  }
  const local = Math.min(Math.max(t - s.playStart, 0), s.dur);
  return Math.min(s.authStart + (s.dur > 0 ? local * (s.nat / s.dur) : 0), AUTHORED_TOTAL);
}

/** The frame that reads best as a still, used for prefers-reduced-motion. */
const STATIC_T = 19.5;

/* ---------------- math helpers ---------------- */
type Ease = (t: number) => number;

const Easing = {
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeOutCubic: (t: number) => (t - 1) ** 3 + 1,
  easeOutQuart: (t: number) => 1 - (t - 1) ** 4,
  easeOutBack: (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
};

function rng(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
function ease(p: number, f: Ease) {
  return f(clamp01(p));
}

function interpolate(input: number[], output: number[], easeFn: Ease) {
  return (t: number) => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        return output[i] + (output[i + 1] - output[i]) * easeFn(local);
      }
    }
    return output[output.length - 1];
  };
}

function animate(o: { from: number; to: number; start: number; end: number; ease: Ease }) {
  return (t: number) => {
    if (t <= o.start) return o.from;
    if (t >= o.end) return o.to;
    return o.from + (o.to - o.from) * o.ease((t - o.start) / (o.end - o.start));
  };
}

/* ---------------- graph construction (deterministic) ---------------- */
interface Vec3 {
  x: number;
  y: number;
  z: number;
}
interface GNode extends Vec3 {
  id: number;
  li: number;
  w: number;
  seed: number;
  u: number;
}
interface GEdge {
  a: number;
  b: number;
  u: number;
}
interface GMark {
  node: number;
  idx: number;
  kind: "ok" | "err";
}
interface GPath {
  pi: number;
  nodes: number[];
  edges: GEdge[];
  marks: GMark[];
}
interface Variant {
  paths: GPath[];
  nodeMap: Map<number, { pi: number; hidx: number }>;
  edgeSet: Set<GEdge>;
}
interface Graph {
  nodes: GNode[];
  edges: GEdge[];
  layers: number[][];
  variants: Variant[];
  L: number;
}

function buildGraph(): Graph {
  const r = rng(20260818);
  const L = 15;
  const nodes: GNode[] = [];
  const layers: number[][] = [];
  for (let li = 0; li < L; li++) {
    const x = -980 + (1960 * li) / (L - 1);
    const bell = Math.sin((li / (L - 1)) * Math.PI) ** 0.55;
    const cols = 3 + Math.round(bell * 2.4);
    const rows = 3 + Math.round(bell * 3.6);
    const ids: number[] = [];
    for (let cz = 0; cz < cols; cz++) {
      for (let ry = 0; ry < rows; ry++) {
        if (r() < 0.12) continue;
        const y = (rows === 1 ? 0 : ry / (rows - 1) - 0.5) * (300 + bell * 480) + (r() - 0.5) * 62;
        const z = (cols === 1 ? 0 : cz / (cols - 1) - 0.5) * (260 + bell * 520) + (r() - 0.5) * 70;
        const id = nodes.length;
        nodes.push({ id, li, x: x + (r() - 0.5) * 48, y, z, w: 0.45 + r() * 0.85, seed: r(), u: 0 });
        ids.push(id);
      }
    }
    layers.push(ids);
  }

  const edges: GEdge[] = [];
  const seen = new Map<string, GEdge>();
  const add = (a: number, b: number): GEdge => {
    const k = a + ">" + b;
    const hit = seen.get(k);
    if (hit) return hit;
    const e: GEdge = { a, b, u: 0 };
    seen.set(k, e);
    edges.push(e);
    return e;
  };
  /* fan-out distance in the y/z plane of a layer */
  const d2 = (p: number, q: number) => Math.hypot(nodes[p].y - nodes[q].y, nodes[p].z - nodes[q].z);

  for (let li = 0; li < L - 1; li++) {
    for (const a of layers[li]) {
      const cand = layers[li + 1].slice().sort((p, q) => d2(p, a) - d2(q, a));
      const k = 2 + Math.floor(r() * 2.9);
      for (let j = 0; j < Math.min(k, cand.length); j++) add(a, cand[j]);
      if (li < L - 2 && r() < 0.3) {
        const far = layers[li + 2].slice().sort((p, q) => d2(p, a) - d2(q, a));
        add(a, far[Math.floor(r() * Math.min(3, far.length))]);
      }
    }
    for (const b of layers[li + 1]) {
      if (!edges.some((e) => e.b === b)) {
        const cand = layers[li].slice().sort((p, q) => d2(p, b) - d2(q, b));
        add(cand[0], b);
      }
    }
  }

  /* several alternative sets of dominant paths - click cycles through them */
  function makeVariant(vi: number): Variant {
    const rv = rng(4400 + vi * 971);
    const used = new Set<number>();
    const paths: GPath[] = [];
    const entries = layers[0].slice().sort(() => rv() - 0.5);
    for (let pi = 0; pi < 5; pi++) {
      const entry = entries[pi % entries.length];
      const path = [entry];
      for (let li = 0; li < L - 1; li++) {
        const a = path[path.length - 1];
        const outs = edges.filter((e) => e.a === a && nodes[e.b].li === li + 1 && !used.has(e.b));
        let b: number;
        if (outs.length) b = outs[Math.floor(rv() * outs.length)].b;
        else {
          const free = layers[li + 1].filter((n) => !used.has(n));
          const pool = free.length ? free : layers[li + 1];
          b = pool.slice().sort((p, q) => d2(p, a) - d2(q, a))[0];
          add(a, b);
        }
        path.push(b);
      }
      const pedges: GEdge[] = [];
      for (let i = 0; i < path.length - 1; i++) {
        pedges.push(seen.get(path[i] + ">" + path[i + 1]) || add(path[i], path[i + 1]));
        used.add(path[i]);
        nodes[path[i]].w = Math.max(nodes[path[i]].w, 1.05);
      }
      used.add(path[path.length - 1]);
      nodes[path[path.length - 1]].w = Math.max(nodes[path[path.length - 1]].w, 1.05);
      const marks: GMark[] = [];
      [3 + Math.floor(rv() * 2), 7 + Math.floor(rv() * 2), 11 + Math.floor(rv() * 2)].forEach((s, k) => {
        if (s < path.length) marks.push({ node: path[s], idx: s, kind: (pi + k + vi) % 3 === 1 ? "err" : "ok" });
      });
      paths.push({ pi, nodes: path, edges: pedges, marks });
    }
    const nodeMap = new Map<number, { pi: number; hidx: number }>();
    const edgeSet = new Set<GEdge>();
    paths.forEach((p) => {
      p.nodes.forEach((n, i) => nodeMap.set(n, { pi: p.pi, hidx: i }));
      p.edges.forEach((e) => edgeSet.add(e));
    });
    return { paths, nodeMap, edgeSet };
  }
  const variants = [0, 1, 2, 3].map(makeVariant);

  nodes.forEach((n) => {
    n.u = clamp01((n.x + 1000) / 2000 + (n.seed - 0.5) * 0.05);
  });
  edges.forEach((e) => {
    e.u = Math.max(nodes[e.a].u, nodes[e.b].u) + 0.012;
  });
  return { nodes, edges, layers, variants, L };
}

/* Built on first render rather than at module load, so routes that never mount
   the animation don't pay for it. */
let GRAPH_CACHE: Graph | null = null;
function getGraph(): Graph {
  if (!GRAPH_CACHE) GRAPH_CACHE = buildGraph();
  return GRAPH_CACHE;
}

const DUST = Array.from({ length: 90 }, (_, i) => {
  const r = rng(900 + i * 7);
  return {
    x: (r() - 0.5) * 2200,
    y: (r() - 0.5) * 1200,
    z: (r() - 0.5) * 1100,
    s: 0.5 + r() * 1.9,
    a: 0.12 + r() * 0.42,
    ph: r(),
  };
});

/* ---------------- geometry ---------------- */
interface Cam {
  yaw: number;
  pitch: number;
  zoom: number;
  fx: number;
  fy: number;
  dolly: number;
}
interface Pt {
  x: number;
  y: number;
}
interface Proj extends Pt {
  s: number;
  d: number;
  vis: boolean;
}

function project(p: Vec3, cam: Cam): Proj {
  const cy = Math.cos(cam.yaw);
  const sy = Math.sin(cam.yaw);
  const x = p.x * cy - p.z * sy;
  let z = p.x * sy + p.z * cy;
  const cp = Math.cos(cam.pitch);
  const sp = Math.sin(cam.pitch);
  const y = p.y * cp - z * sp;
  z = p.y * sp + z * cp;
  const f = 2100;
  const den = f + z + 1450 - (cam.dolly || 0);
  const s = f / Math.max(den, 150);
  return {
    x: 960 + (x - cam.fx) * s * cam.zoom,
    y: 540 + (y - cam.fy) * s * cam.zoom,
    s: s * cam.zoom,
    d: s,
    vis: den > 170,
  };
}
function ctrl(a: Vec3, b: Vec3): [Vec3, Vec3] {
  const dx = (b.x - a.x) * 0.5;
  return [
    { x: a.x + dx, y: a.y, z: a.z },
    { x: b.x - dx, y: b.y, z: b.z },
  ];
}
function lerpPt(p: Pt, q: Pt, t: number): Pt {
  return { x: p.x + (q.x - p.x) * t, y: p.y + (q.y - p.y) * t };
}
function cubicAt(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt {
  const m = 1 - t;
  return {
    x: m * m * m * p0.x + 3 * m * m * t * p1.x + 3 * m * t * t * p2.x + t * t * t * p3.x,
    y: m * m * m * p0.y + 3 * m * m * t * p1.y + 3 * m * t * t * p2.y + t * t * t * p3.y,
  };
}
/* Geometric (de Casteljau) clip of the curve head - the curve is re-projected
   every frame, so dash offsets would not survive. */
function splitHead(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt[] {
  const a = lerpPt(p0, p1, t);
  const b = lerpPt(p1, p2, t);
  const c = lerpPt(p2, p3, t);
  const d = lerpPt(a, b, t);
  const e = lerpPt(b, c, t);
  return [p0, a, d, lerpPt(d, e, t)];
}
const f1 = (v: number) => Math.round(v * 10) / 10;
function segD(p0: Pt, p1: Pt, p2: Pt, p3: Pt) {
  return `M${f1(p0.x)} ${f1(p0.y)}C${f1(p1.x)} ${f1(p1.y)} ${f1(p2.x)} ${f1(p2.y)} ${f1(p3.x)} ${f1(p3.y)}`;
}
function dotD(x: number, y: number, r: number) {
  return `M${f1(x - r)} ${f1(y)}a${f1(r)} ${f1(r)} 0 1 0 ${f1(r * 2)} 0a${f1(r)} ${f1(r)} 0 1 0 ${f1(-r * 2)} 0`;
}

/* ---------------- the piece ---------------- */
interface Route {
  i: number;
  prev: number;
  px: number | null;
  py: number | null;
  age: number;
}
interface Orbit {
  yaw: number;
  pitch: number;
  dolly: number;
}

function GraphFrame({
  T,
  accent,
  density,
  scale,
  route,
  orbit,
}: {
  T: number;
  accent: string;
  density: number;
  scale: number;
  route: Route;
  orbit: Orbit;
}) {
  const GRAPH = getGraph();
  const MOTION = { enter: Easing.easeOutCubic, draw: Easing.easeInOutQuad, pop: Easing.easeOutBack };

  const buildStart = 0.4;
  const buildEnd = CUES.Paths - 0.4;
  const at = (u: number) => buildStart + (buildEnd - buildStart) * u;

  const cam: Cam = {
    yaw:
      orbit.yaw +
      interpolate(
        [0, CUES.Weave, CUES.Paths + 2.6, CUES.Reveal + 2, AUTHORED_TOTAL],
        [-0.46, -0.3, 0.06, 0.2, 0.3],
        MOTION.draw
      )(T),
    pitch: Math.max(
      -0.75,
      Math.min(
        0.75,
        orbit.pitch +
          interpolate(
            [0, CUES.Weave, CUES.Paths + 2.6, AUTHORED_TOTAL],
            [0.2, 0.13, 0.05, 0.02],
            MOTION.draw
          )(T)
      )
    ),
    /* `scale` multiplies the authored zoom keyframes, so the lattice fills more
       of the 1920x1080 frame without disturbing the camera choreography. */
    zoom:
      scale *
      interpolate(
        [0, CUES.Spread, CUES.Weave, CUES.Paths, CUES.Paths + 2.6, CUES.Reveal, CUES.Reveal + 2.2, AUTHORED_TOTAL],
        [2.55, 2.0, 1.42, 1.22, 1.62, 1.18, 1.24, 1.3],
        MOTION.draw
      )(T),
    fx: interpolate(
      [0, CUES.Spread, CUES.Weave, CUES.Paths, CUES.Paths + 2.6, CUES.Reveal, AUTHORED_TOTAL],
      [-760, -420, 60, 0, 280, 0, 0],
      MOTION.draw
    )(T),
    fy: interpolate([0, CUES.Weave, CUES.Paths + 2.6, AUTHORED_TOTAL], [-40, 0, -60, 0], MOTION.draw)(T),
    dolly: orbit.dolly || 0,
  };

  const fade = animate({
    from: 1,
    to: 0,
    start: CUES.Dissolve + 0.35,
    end: AUTHORED_TOTAL - 0.05,
    ease: Easing.easeInOutQuad,
  })(T);
  const breath = 1 + 0.012 * Math.sin(T * 1.15);
  const P = GRAPH.nodes.map((n) => project(n, cam));

  /* which dominant-path set is live, and the one it replaced */
  const V = GRAPH.variants[route.i % GRAPH.variants.length];
  const age = route.age;
  const base = route.prev < 0 ? CUES.Paths : T - age;
  const outgoing = route.prev >= 0 && age < 1.2 ? GRAPH.variants[route.prev % GRAPH.variants.length] : null;
  const outFade = outgoing ? 1 - ease(age / 0.55, MOTION.enter) : 0;
  const heroEdges = new Set(V.edgeSet);
  if (outgoing && outFade > 0.02) outgoing.edgeSet.forEach((e) => heroEdges.add(e));

  /* ---- mesh edges, bucketed by depth ---- */
  const BUCKETS = 4;
  const buckets: string[][] = Array.from({ length: BUCKETS }, () => []);
  const heads: string[] = [];
  GRAPH.edges.forEach((e, i) => {
    if (heroEdges.has(e)) return;
    if (density < 1 && (i % 101) / 101 >= density) return;
    const t0 = at(e.u);
    const p = ease((T - t0) / 0.6, MOTION.draw);
    if (p <= 0) return;
    const p0 = P[e.a];
    const p3 = P[e.b];
    if (!p0.vis || !p3.vis) return;
    const [c1, c2] = ctrl(GRAPH.nodes[e.a], GRAPH.nodes[e.b]);
    const q1 = project(c1, cam);
    const q2 = project(c2, cam);
    const seg = p < 1 ? splitHead(p0, q1, q2, p3, p) : [p0, q1, q2, p3];
    const depth = clamp01(((p0.d + p3.d) / 2) * 1.35 - 0.35);
    buckets[Math.min(BUCKETS - 1, Math.floor(depth * BUCKETS))].push(segD(seg[0], seg[1], seg[2], seg[3]));
    if (p > 0.55 && p < 1) heads.push(dotD(seg[3].x, seg[3].y, 1.6 + 1.6 * depth) + "Z");
  });
  const meshEls = buckets.map((ds, bi) =>
    ds.length ? (
      <path
        key={"mb" + bi}
        d={ds.join("")}
        fill="none"
        stroke={`rgba(${C.edge},${(0.09 + bi * 0.055).toFixed(3)})`}
        strokeWidth={0.7 + bi * 0.42}
        strokeLinecap="round"
      />
    ) : null
  );

  /* ---- nodes ---- */
  const nBuckets: string[][] = Array.from({ length: BUCKETS }, () => []);
  const nGlow: string[][] = Array.from({ length: BUCKETS }, () => []);
  const heroNodes: JSX.Element[] = [];
  GRAPH.nodes.forEach((n, i) => {
    const t0 = at(n.u);
    const p = ease((T - t0) / 0.55, MOTION.pop);
    if (p <= 0) return;
    const pr = P[i];
    if (!pr.vis) return;
    const flash = 1 - ease((T - t0) / 0.9, MOTION.enter);
    const h = V.nodeMap.get(i);
    const heroOn = h ? clamp01((T - (base + h.pi * 0.5 + h.hidx * 0.12)) / 0.5) : 0;
    const depth = clamp01(pr.d * 1.35 - 0.35);
    const r = (1.4 + n.w * 3.2) * pr.s * p * breath * (1 + 0.35 * heroOn);
    if (heroOn > 0.02) {
      heroNodes.push(
        <g key={"hn" + i} opacity={Math.min(1, p * 1.4)}>
          <circle cx={pr.x} cy={pr.y} r={r * 5.2} fill="url(#pgHaloHero)" opacity={0.55 * heroOn + 0.3 * flash} />
          <circle cx={pr.x} cy={pr.y} r={r} fill={C.heroCore} />
        </g>
      );
      return;
    }
    const bi = Math.min(BUCKETS - 1, Math.floor(depth * BUCKETS));
    nBuckets[bi].push(dotD(pr.x, pr.y, Math.max(0.5, r)) + "Z");
    if (depth > 0.35 || flash > 0.1) nGlow[bi].push(dotD(pr.x, pr.y, Math.max(1, r * 3.4)) + "Z");
  });
  const nodeEls: JSX.Element[] = [];
  nGlow.forEach((ds, bi) => {
    if (ds.length)
      nodeEls.push(<path key={"ng" + bi} d={ds.join("")} fill={C.nodeLive} opacity={0.035 + bi * 0.022} />);
  });
  nBuckets.forEach((ds, bi) => {
    if (ds.length)
      nodeEls.push(
        <path key={"nb" + bi} d={ds.join("")} fill={bi > 1 ? C.nodeCore : C.nodeLive} opacity={0.35 + bi * 0.17} />
      );
  });

  /* ---- dominant paths (one renderer, used for live + outgoing set) ---- */
  function renderSet(variant: Variant, startT: number, alpha: number, tag: string) {
    const els: JSX.Element[] = [];
    const marks: JSX.Element[] = [];
    variant.paths.forEach((path) => {
      const ignite = startT + path.pi * (tag === "live" ? 0.28 : 0.5);
      const per = 0.1;
      const dur = 0.45;
      const glow: JSX.Element[] = [];
      const core: JSX.Element[] = [];
      const pulses: JSX.Element[] = [];
      path.edges.forEach((e, j) => {
        const p = ease((T - (ignite + j * per)) / dur, MOTION.draw);
        if (p <= 0) return;
        const p0 = P[e.a];
        const p3 = P[e.b];
        if (!p0.vis || !p3.vis) return;
        const [c1, c2] = ctrl(GRAPH.nodes[e.a], GRAPH.nodes[e.b]);
        const q1 = project(c1, cam);
        const q2 = project(c2, cam);
        const seg = p < 1 ? splitHead(p0, q1, q2, p3, p) : [p0, q1, q2, p3];
        const d = segD(seg[0], seg[1], seg[2], seg[3]);
        const sc = (p0.s + p3.s) / 2;
        glow.push(
          <path
            key={"g" + j}
            d={d}
            fill="none"
            stroke={accent}
            strokeWidth={9 * sc}
            strokeOpacity={0.15}
            strokeLinecap="round"
          />
        );
        core.push(
          <path
            key={"c" + j}
            d={d}
            fill="none"
            stroke={accent}
            strokeWidth={2.4 * sc}
            strokeOpacity={0.95}
            strokeLinecap="round"
          />
        );
      });
      const lit = ignite + path.edges.length * per;
      if (T > ignite + 0.3) {
        const period = 3.2;
        const travel = 2.0;
        for (let k = 0; k < 2; k++) {
          const ph = (((T - ignite - (k * period) / 2) % period) / travel);
          if (ph < 0 || ph > 1) continue;
          const prog = ph * Math.min(1, clamp01((T - ignite) / (lit - ignite + 0.01)));
          const n = path.edges.length;
          const pos = (pp: number) => {
            const ei = Math.min(n - 1, Math.floor(pp * n));
            const e = path.edges[ei];
            const [c1, c2] = ctrl(GRAPH.nodes[e.a], GRAPH.nodes[e.b]);
            return {
              pt: cubicAt(P[e.a], project(c1, cam), project(c2, cam), P[e.b], pp * n - ei),
              s: (P[e.a].s + P[e.b].s) / 2,
            };
          };
          const head = pos(prog);
          const tail: JSX.Element[] = [];
          for (let s = 1; s <= 6; s++) {
            const tq = pos(Math.max(0, prog - s * 0.013));
            tail.push(
              <circle
                key={"t" + s}
                cx={tq.pt.x}
                cy={tq.pt.y}
                r={(4.2 - s * 0.5) * tq.s}
                fill={accent}
                opacity={(1 - s / 7) * 0.45}
              />
            );
          }
          pulses.push(
            <g key={"p" + k} opacity={Math.min(1, (1 - ph) * 3.4)}>
              {tail}
              <circle cx={head.pt.x} cy={head.pt.y} r={15 * head.s} fill={accent} opacity={0.14} />
              <circle cx={head.pt.x} cy={head.pt.y} r={6 * head.s} fill={accent} opacity={0.6} />
              <circle cx={head.pt.x} cy={head.pt.y} r={2.7 * head.s} fill={C.heroCore} />
            </g>
          );
        }
      }
      els.push(
        <g key={tag + "hp" + path.pi}>
          {glow}
          {core}
          {pulses}
        </g>
      );

      path.marks.forEach((m, mi) => {
        const t0 = ignite + m.idx * per + 0.35;
        const p = ease((T - t0) / 0.55, MOTION.pop);
        if (p <= 0) return;
        const pr = P[m.node];
        if (!pr.vis) return;
        const col = m.kind === "err" ? C.err : C.ok;
        const k = 17 * pr.s * (0.9 + 0.1 * Math.sin(T * 2.2 + mi));
        const lift = 34 * pr.s;
        const y = pr.y - lift - (1 - p) * 14;
        const ring = ease((T - t0) / 1.2, Easing.easeOutQuart);
        marks.push(
          <g
            key={tag + "m" + path.pi + mi}
            transform={`translate(${pr.x} ${y}) scale(${p})`}
            opacity={Math.min(1, p * 1.3)}
          >
            <circle r={k * 2.4} fill={col} opacity={0.1} />
            {ring < 1 && (
              <circle r={k * (1 + ring * 2.2)} fill="none" stroke={col} strokeWidth={1.2} opacity={(1 - ring) * 0.6} />
            )}
            <line x1="0" y1={k * 0.95} x2="0" y2={lift * 0.85} stroke={col} strokeWidth={1.1} opacity="0.4" />
            {m.kind === "err" ? (
              <g>
                <path
                  d={`M0 ${-k} L${k * 0.95} ${k * 0.62} L${-k * 0.95} ${k * 0.62} Z`}
                  fill="rgba(10,6,8,0.55)"
                  stroke={col}
                  strokeWidth={k * 0.15}
                  strokeLinejoin="round"
                />
                <rect x={-k * 0.08} y={-k * 0.42} width={k * 0.16} height={k * 0.62} fill={col} />
                <rect x={-k * 0.08} y={k * 0.32} width={k * 0.16} height={k * 0.14} fill={col} />
              </g>
            ) : (
              <g>
                <circle r={k * 0.92} fill="rgba(6,12,10,0.55)" stroke={col} strokeWidth={k * 0.15} />
                <path
                  d={`M${-k * 0.42} ${-k * 0.02} L${-k * 0.1} ${k * 0.34} L${k * 0.46} ${-k * 0.36}`}
                  fill="none"
                  stroke={col}
                  strokeWidth={k * 0.19}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}
          </g>
        );
      });
    });
    return (
      <g key={tag} opacity={alpha}>
        {els}
        {marks}
      </g>
    );
  }

  const dust = DUST.map((d, i) => {
    const ph = (T / AUTHORED_TOTAL + d.ph) % 1;
    const pr = project({ x: d.x + (ph - 0.5) * 90, y: d.y + (ph - 0.5) * 60, z: d.z }, cam);
    if (!pr.vis) return null;
    return (
      <circle
        key={"d" + i}
        cx={pr.x}
        cy={pr.y}
        r={d.s * pr.s}
        fill={C.dust}
        opacity={d.a * Math.sin(Math.PI * ph)}
      />
    );
  });

  /* reroute shockwave from the click point */
  const wave = route.prev >= 0 ? ease(age / 0.9, Easing.easeOutQuart) : 1;

  return (
    <g opacity={fade}>
      <g opacity={0.6}>{dust}</g>
      <g>{meshEls}</g>
      {heads.length > 0 && <path d={heads.join("")} fill={C.nodeLive} opacity={0.5} />}
      <g>{nodeEls}</g>
      {outgoing && outFade > 0.02 ? renderSet(outgoing, CUES.Paths, outFade * 0.7, "out") : null}
      {renderSet(V, base, 1, "live")}
      <g>{heroNodes}</g>
      {wave < 1 && route.px != null && (
        <circle
          cx={route.px}
          cy={route.py}
          r={40 + wave * 780}
          fill="none"
          stroke={accent}
          strokeWidth={2.5 * (1 - wave)}
          opacity={(1 - wave) * 0.5}
        />
      )}
    </g>
  );
}

/* ---------------- clock ---------------- */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Pauses the clock while the animation is scrolled out of view. */
function useInView<T extends Element>(ref: React.RefObject<T>) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "120px" });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return inView;
}

interface ProcessGraphAnimationProps {
  /** Highlight color for dominant paths, pulses and halos. Defaults to the Noreja tertiary token. */
  accent?: string;
  /** Fraction of the background mesh to draw (0.4-1). Lower is cheaper. */
  density?: number;
  /** Multiplier on the authored camera zoom - >1 fills more of the frame. */
  scale?: number;
  /** Drag to orbit, click/tap to reroute the dominant paths. */
  interactive?: boolean;
  /** Ctrl/Cmd + wheel (and trackpad pinch) dollies into the lattice. Plain scrolling stays with the page. */
  wheelZoom?: boolean;
  /** Usage hint rendered above the graph. Only shown when interaction is available. */
  hint?: React.ReactNode;
  className?: string;
}

export function ProcessGraphAnimation({
  accent = ACCENT_DEFAULT,
  density = 1,
  scale = 1.18,
  interactive = true,
  wheelZoom = true,
  hint,
  className,
}: ProcessGraphAnimationProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const inView = useInView(svgRef);
  const running = inView && !reducedMotion;

  const [frame, setFrame] = useState({ T: 0, now: 0 });
  const elapsed = useRef(0);

  useEffect(() => {
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      elapsed.current = (elapsed.current + (now - last) / 1000) % TIMELINE.playbackTotal;
      last = now;
      setFrame({ T: warp(elapsed.current), now });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  /* user camera offset + live route set */
  const [orbit, setOrbit] = useState<Orbit>({ yaw: 0, pitch: 0, dolly: 0 });
  const [route, setRoute] = useState({ i: 0, prev: -1, px: null as number | null, py: null as number | null });
  const clickAt = useRef(0);
  const drag = useRef<{ x: number; y: number; yaw: number; pitch: number; moved: number } | null>(null);

  const canInteract = interactive && !reducedMotion;

  const reroute = (ev: React.PointerEvent) => {
    const el = svgRef.current;
    let px = 960;
    let py = 540;
    if (el) {
      const b = el.getBoundingClientRect();
      px = ((ev.clientX - b.left) / b.width) * W;
      py = ((ev.clientY - b.top) / b.height) * H;
    }
    clickAt.current = performance.now();
    setRoute((r) => ({ i: (r.i + 1) % getGraph().variants.length, prev: r.i, px, py }));
  };

  const onPointerDown = (ev: React.PointerEvent) => {
    if (!canInteract) return;
    /* Orbit is mouse-only: capturing touch here would swallow page scrolling. */
    if (ev.pointerType !== "mouse") return;
    drag.current = { x: ev.clientX, y: ev.clientY, yaw: orbit.yaw, pitch: orbit.pitch, moved: 0 };
    ev.preventDefault();
    ev.currentTarget.setPointerCapture?.(ev.pointerId);
  };
  const onPointerMove = (ev: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const dx = ev.clientX - d.x;
    const dy = ev.clientY - d.y;
    d.moved = Math.max(d.moved, Math.hypot(dx, dy));
    setOrbit((o) => ({ ...o, yaw: d.yaw + dx * 0.0042, pitch: d.pitch + dy * 0.0026 }));
  };
  const onPointerUp = (ev: React.PointerEvent) => {
    if (!canInteract) return;
    const d = drag.current;
    drag.current = null;
    /* mouse: click without a drag reroutes; touch: a tap reroutes */
    if (ev.pointerType !== "mouse" || (d && d.moved < 5)) reroute(ev);
  };
  /* Dolly on Ctrl/Cmd + wheel only, so a plain scroll still scrolls the page.
     Registered natively because React's own wheel listener is passive, which
     would make preventDefault() (and therefore blocking browser zoom) a no-op. */
  useEffect(() => {
    const el = svgRef.current;
    if (!el || !canInteract || !wheelZoom) return;
    const onWheel = (ev: WheelEvent) => {
      if (!ev.ctrlKey && !ev.metaKey) return;
      ev.preventDefault();
      const step = (ev.deltaMode === 1 ? ev.deltaY * 16 : ev.deltaY) * 2.5;
      setOrbit((o) => ({ ...o, dolly: Math.max(-900, Math.min(2450, (o.dolly || 0) - step)) }));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [canInteract, wheelZoom]);

  const T = reducedMotion ? STATIC_T : frame.T;
  const age = route.prev < 0 ? 99 : Math.max(0, (frame.now - clickAt.current) / 1000);

  return (
    <div className={className} style={{ position: "relative" }}>
      {hint && canInteract ? (
        /* Overlaid rather than stacked above the graph: the animation block is
           pulled up under the logo banner, so a row at the very top would be
           drawn behind the logos. hover:hover keeps it off touch devices. */
        <div className="pointer-events-none absolute inset-x-0 top-20 z-10 hidden select-none px-4 text-center text-[9px] leading-relaxed tracking-wide text-muted-foreground/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)] md:text-[10px] lg:top-24 [@media(hover:hover)]:block">
          {hint}
        </div>
      ) : null}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
        focusable="false"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          drag.current = null;
        }}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          cursor: canInteract ? "grab" : "default",
        }}
      >
        <defs>
          <radialGradient id="pgHaloHero" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
            <stop offset="34%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <GraphFrame T={T} accent={accent} density={density} scale={scale} route={{ ...route, age }} orbit={orbit} />
      </svg>
    </div>
  );
}

export default ProcessGraphAnimation;
