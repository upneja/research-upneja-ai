// The backtest: did the method work on NeurIPS years that already resolved?
// Outcome answer keys and prior-year indicators were gathered by SEPARATE,
// mutually-blind scouts (research/backtest-20{24,25}-{outcome,indicators}.md),
// so the matching below is honest, not hindsight-constructed. The headline
// (research/14-backtest-synthesis.md): naive extrapolation is STRONG on the big
// themes, so a forecast only proves taste on the beyond-baseline calls.
// `called` = was each defining concept visible in the prior ICLR/ICML/arXiv signal.

export type Called = "yes" | "partial" | "late-shock" | "no";

export type DefiningConcept = { concept: string; called: Called };

export type BacktestYear = {
  year: number;
  venue: string;
  submitted: number;
  accepted: number;
  acceptRate: number;
  baselineHit: number; // strong "yes" matches out of `defining.length`
  story: string;
  defining: DefiningConcept[];
};

export const backtest: BacktestYear[] = [
  {
    year: 2024,
    venue: "Vancouver",
    submitted: 15671,
    accepted: 4035,
    acceptRate: 25.75,
    baselineHit: 7,
    story:
      "The conference where the field turned from scaling pretraining to scaling reasoning and inference-time compute, crowned by Ilya's “peak data” talk. The prior signal had the generative, architecture, and alignment surges right; it could not have the o1 narrative, which shipped weeks before the doors opened.",
    defining: [
      { concept: "Large language models (dominant cluster)", called: "yes" },
      { concept: "Inference-time / test-time compute", called: "late-shock" }, // o1 shipped Sept 2024
      { concept: "Reasoning and its limits", called: "partial" },
      { concept: "Diffusion & image generation", called: "yes" },
      { concept: "RL renaissance + agents", called: "yes" },
      { concept: "Alignment / safety / pluralism", called: "yes" },
      { concept: "Data curation / synthetic data", called: "partial" },
      { concept: "Scaling-laws debate / “peak data”", called: "partial" },
      { concept: "Multimodal & embodied intelligence", called: "yes" },
      { concept: "AI-for-science", called: "yes" },
      { concept: "State-space models / Mamba", called: "yes" },
    ],
  },
  {
    year: 2025,
    venue: "San Diego + Mexico City",
    submitted: 21575,
    accepted: 5290,
    acceptRate: 24.52,
    baselineHit: 6,
    story:
      "The post-o1/R1 reasoning conference, and a reflective one. The prior signal nailed the big themes, but understated the RLVR wave (GRPO and R1 post-dated camera-ready deadlines, so a keyword count missed what arXiv was screaming) and missed the mode-collapse surprise that took a Best Paper.",
    defining: [
      { concept: "LLM reasoning models (post-o1/R1)", called: "yes" },
      { concept: "RLVR / GRPO + its skeptics", called: "partial" }, // keyword-lag: dominant on arXiv, ~0 in conf keywords
      { concept: "Multimodal / vision-language (largest cluster)", called: "yes" },
      { concept: "Evaluation & benchmarks as a science", called: "yes" },
      { concept: "Diffusion & flow (third pillar)", called: "yes" },
      { concept: "Agents / continual-learning agents", called: "yes" },
      { concept: "World models", called: "partial" },
      { concept: "Efficient reasoning (first workshop)", called: "partial" },
      { concept: "Scaling-laws / mechanistic understanding", called: "yes" },
      { concept: "LLM homogeneity / mode collapse", called: "no" }, // award surprise, not in the prior signal
      { concept: "AI-for-science", called: "partial" },
    ],
  },
];

export const baseline = {
  note:
    "A mechanical extrapolator (last year's top share-risers repeat) lands the big, obvious themes both years: 7 of 11 in 2024, 6 of 11 in 2025. That is the bar, and it is high. The misses are the tell. Two kinds: late shocks the method cannot see a year out (o1 / inference-time compute in 2024), and fresh surprises (mode collapse in 2025). A forecast earns its keep only on the calls in that gap.",
  provisional: false,
  rows: [
    { year: 2024, baselineHit: 7, ofDefining: 11 },
    { year: 2025, baselineHit: 6, ofDefining: 11 },
  ],
};

// The two structural lessons the backtest teaches, applied to the 2026 method.
export const lessons = [
  {
    title: "Late shocks are unforecastable a year out",
    body:
      "Inference-time compute was the defining narrative of NeurIPS 2024, and it was invisible to the prior signal because o1 shipped in September, after the indicators. No year-out method catches a paradigm shock that lands between the signal and the conference. The 2026 forecast should expect to miss its own o1.",
  },
  {
    title: "Weight arXiv and lab momentum over lagged keywords",
    body:
      "RLVR and GRPO dominated arXiv and lab releases through 2025 but read near-zero in conference author-keywords, because DeepSeek-R1 post-dated camera-ready deadlines. A method that extrapolates conference keywords misses this; one that weights arXiv and lab momentum catches it. The 2026 method does the latter.",
  },
];

// Which 2026 predictions are beyond-baseline (the ones that test foresight) vs
// baseline-ish (obvious big themes a naive extrapolator also calls).
export const beyondBaseline: Record<string, "beyond" | "baseline-ish"> = {
  "eval-science": "beyond",
  "rlvr-rubrics": "beyond", // the rubric/non-verifiable half is fresh; bare RLVR is baseline-ish
  "agentic-rl-env": "baseline-ish",
  "world-models": "beyond",
  "unified-multimodal": "baseline-ish",
  "diffusion-lm": "beyond",
  "hybrid-attention": "beyond",
  "interp-after-saes": "beyond",
  "ai-for-math": "beyond",
  ttt: "beyond",
};

export type LeaderRow = {
  forecaster: string;
  status: "scored" | "pending" | "open";
  result: string;
  note: string;
};
export const leaderboard: LeaderRow[] = [
  { forecaster: "Naive baseline (last year repeats)", status: "scored", result: "7/11 · 6/11", note: "The bar to beat, on the two resolved years. Strong on big themes; blind to late shocks and surprises." },
  { forecaster: "Claude Opus 4.8 — NeurIPS 2026", status: "pending", result: "—", note: "Ten predictions, sealed June 2026, resolve December 2026. Judged on beyond-baseline hits, not raw count." },
  { forecaster: "Other frontier models", status: "open", result: "—", note: "Same task, same pre-registration. Open arm." },
  { forecaster: "Human expert forecasters", status: "open", result: "—", note: "The comparison that matters most. Open arm." },
];
