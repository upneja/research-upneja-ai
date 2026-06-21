// The backtest: did the method work on NeurIPS years that already resolved?
//
// HONESTY, STATED PLAINLY (after two adversarial audits — research/15-integrity-audit.md):
// The INPUTS were gathered by mutually-blind scouts (outcomes vs prior-year
// indicators). The MATCHING below — which concepts count as "called", and the
// counts — was done post-hoc by one author who saw both, so it is the
// highest-risk layer, not a clean measurement. The audits found that our first
// pass drifted method-flattering every time; we corrected the numbers DOWN
// (2024 7->6, 2025 6->5), and we report them as judgment estimates, not
// precision. The core claim survives and is the point: a naive extrapolator
// already lands ~half the big themes, so a forecast only earns credit on the
// fresh calls it misses. `called` = was each defining concept surging in the
// prior ICLR/ICML/arXiv signal.

export type Called = "yes" | "partial" | "late-shock" | "no";
export type DefiningConcept = { concept: string; called: Called };
export type BacktestYear = {
  year: number; venue: string; submitted: number; accepted: number; acceptRate: number;
  baselineHit: number; baselineKind: "mechanical" | "qualitative"; story: string; defining: DefiningConcept[];
};

export const backtest: BacktestYear[] = [
  {
    year: 2024, venue: "Vancouver", submitted: 15671, accepted: 4035, acceptRate: 25.75,
    baselineHit: 6, baselineKind: "qualitative",
    story:
      "The field turned from scaling pretraining to scaling reasoning and inference-time compute, crowned by Ilya's “peak data” talk. The prior signal had the generative, architecture, and alignment surges; it could not have the o1 narrative, which shipped weeks before the doors opened. (2024 ICLR/ICML keyword shares were not machine-extractable, so this year's baseline is a qualitative read of awards and recaps, not the mechanical share-delta used for 2025.)",
    defining: [
      { concept: "Large language models (dominant cluster)", called: "yes" },
      { concept: "Inference-time / test-time compute", called: "late-shock" },
      { concept: "Reasoning and its limits", called: "partial" },
      { concept: "Diffusion & image generation", called: "yes" },
      { concept: "RL post-training (agents weaker in the distribution)", called: "yes" },
      { concept: "Alignment / safety / pluralism", called: "yes" },
      { concept: "Data curation / synthetic data", called: "partial" },
      { concept: "Scaling-laws / “peak data”", called: "no" },
      { concept: "Multimodal & embodied intelligence", called: "yes" },
      { concept: "AI-for-science", called: "partial" },
      { concept: "State-space models / Mamba", called: "yes" },
    ],
  },
  {
    year: 2025, venue: "San Diego + Mexico City", submitted: 21575, accepted: 5290, acceptRate: 24.52,
    baselineHit: 5, baselineKind: "mechanical",
    story:
      "The post-o1/R1 reasoning conference, and a reflective one. The prior signal nailed the big themes, but understated RLVR (GRPO and R1 post-dated camera-ready deadlines, so a keyword count missed what arXiv was screaming) and missed the mode-collapse surprise that took a Best Paper. Image diffusion was flat; only the flow-matching niche surged.",
    defining: [
      { concept: "LLM reasoning models (post-o1/R1)", called: "yes" },
      { concept: "RLVR / GRPO + its skeptics", called: "partial" },
      { concept: "Multimodal / vision-language (largest cluster)", called: "yes" },
      { concept: "Evaluation & benchmarks as a science", called: "yes" },
      { concept: "Flow matching (image diffusion was flat)", called: "yes" },
      { concept: "Agents / continual-learning agents", called: "yes" },
      { concept: "World models", called: "partial" },
      { concept: "Efficient reasoning (first workshop)", called: "partial" },
      { concept: "Scaling-laws / mechanistic understanding", called: "partial" },
      { concept: "LLM homogeneity / mode collapse", called: "no" },
      { concept: "AI-for-science", called: "partial" },
    ],
  },
];

export const baseline = {
  note:
    "A mechanical extrapolator (the top-10 concepts by share-growth in ICLR+ICML of the cohort year, K fixed at 10) lands roughly half the defining themes both years: about 6 of 11 in 2024 and 5 of 11 in 2025, corrected down from a first, too-flattering pass. The big, obvious themes are visible a year out, so a model predicting them proves nothing. The bar is high, and a forecast earns its keep only on the calls the baseline misses. An even dumber persistence baseline (last year's themes simply repeat) does nearly as well, which is itself the point.",
  kFixed: 10,
  rows: [
    { year: 2024, baselineHit: 6, ofDefining: 11, kind: "qualitative" },
    { year: 2025, baselineHit: 5, ofDefining: 11, kind: "mechanical" },
  ],
};

export const lessons = [
  {
    title: "Late shocks are unforecastable a year out",
    body:
      "Inference-time compute was the defining narrative of NeurIPS 2024, and it was invisible to the prior signal because o1 shipped in September, after the indicators. A concept whose catalyst post-dates the indicator window is marked a late shock and excluded from the hit count, applied by that date rule. No year-out method catches one; the 2026 forecast should expect to miss its own.",
  },
  {
    title: "Weight arXiv and lab momentum over lagged keywords",
    body:
      "RLVR and GRPO dominated arXiv through 2025 but read near-zero in conference author-keywords, because DeepSeek-R1 post-dated camera-ready deadlines. A method that extrapolates keywords misses this; one that weights arXiv and lab releases catches it. The 2026 method does the latter.",
  },
];

// Re-marked conservatively after the audit: a prediction is "beyond" only if a
// naive extrapolator reading ICLR 2026 + ICML 2026 would NOT also surface it.
// The first pass marked 7 of 10 "beyond"; the audit showed three (rlvr, world-
// models, eval) were already loud in the 2026 conference signal. Now 5/5.
export const beyondBaseline: Record<string, "beyond" | "baseline-ish"> = {
  "eval-science": "baseline-ish", // the track rename is public; only sandbagging-specificity is fresh
  "rlvr-rubrics": "baseline-ish", // GRPO/RLVR is the loudest 2026 title surge; an extrapolator can't miss it
  "agentic-rl-env": "baseline-ish",
  "unified-multimodal": "baseline-ish",
  "world-models": "baseline-ish", // ICLR 2026 oral + 1,500-person workshop = already in the headline signal
  "diffusion-lm": "beyond",
  "hybrid-attention": "beyond", // contrarian: bets against the obvious "Mamba wins"
  "interp-after-saes": "beyond", // reversal: bets against "more SAEs"
  "ai-for-math": "beyond",
  ttt: "beyond",
};

export type LeaderRow = { forecaster: string; status: "scored" | "pending" | "open"; result: string; note: string };
export const leaderboard: LeaderRow[] = [
  { forecaster: "Persistence baseline (last year repeats)", status: "scored", result: "~6 · ~5", note: "The dumbest comparator: predict last year's themes again. Already lands half. If share-growth can't beat this, the method adds little." },
  { forecaster: "Naive share-growth baseline", status: "scored", result: "~6/11 · ~5/11", note: "Top-10 risers by share-delta. The bar to beat. Strong on big themes; blind to late shocks and surprises. 2024 is a qualitative read (no share data); 2025 is mechanical." },
  { forecaster: "Claude Opus 4.8 — NeurIPS 2026", status: "pending", result: "—", note: "Ten predictions, sealed June 2026, resolve December 2026. Scored on beyond-baseline hits, of which there are five." },
  { forecaster: "Other frontier models", status: "open", result: "—", note: "Same task, same pre-registration. Open arm." },
  { forecaster: "Human expert forecasters", status: "open", result: "—", note: "The comparison that matters most. Open arm." },
];

// What the two adversarial audits found, and what changed. Shown on-site.
export const audit = {
  headline: "We ran two red-teams on our own backtest. They found real problems. We corrected down.",
  changes: [
    "Counts corrected in the method-flattering direction we'd drifted: 2024 from 7 to ~6, 2025 from 6 to ~5.",
    "“Beyond-baseline” labels were hand-assigned and shaded toward our own calls. Re-marked conservatively: five beyond, five baseline-ish (RLVR, world models, and the eval-volume claim were already loud in the 2026 signal).",
    "Pinned the baseline cutoff at K=10, applied to both years; flagged that 2024's baseline is qualitative, not the mechanical share-delta used for 2025; added a dumber persistence baseline as a second comparator.",
    "Sealed the watchlist and cut concepts as non-scoring: only the ten count, and none can be promoted after the fact.",
    "Stated plainly that n=10 (about five beyond-baseline) is far too small to calibrate; the confidences are for ranking and transparency, not a calibration claim.",
  ],
  note: "Both full audits are committed to the public repo. The point of an integrity guard is to publish where the bodies are buried, not to pretend there are none.",
};
