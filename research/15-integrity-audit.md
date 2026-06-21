# Adversarial integrity audit of the backtest — findings & corrections
_2026-06-21. A hindsight auditor (blind-to-nothing, told to find contamination) attacked the backtest. It found real method-flattering drift in the matching layer. We correct DOWN and disclose. This file is part of the public record._

## The core finding (valid, acted on)
Design was sound (outcomes + indicators gathered by separate blind scouts), but the MATCHING — assigning `called` labels + the headline counts — was done by one author holding both columns, and **every discrepancy from the more careful per-file matching moved method-flattering**. That directionality is the evidence of contamination; random error would scatter both ways.

## Specific leaks → corrections
1. **[HIGH] 2025 count 6→5.** backtest.ts promoted "scaling-laws/mechanistic" to `yes`; the careful indicator-file matching had it `partial` (ICLR interp +0.8pp is weak). REVERT to partial. **2025 baselineHit: 6 → 5.**
2. **[HIGH] 2024 count: honest 6, not 7.** The 7 held via a concept swap (dropped "foundation models", promoted "AI-for-science" to yes; blind scout had foundation-models IN, AI-science PARTIAL) and an over-credited "RL+agents" (both blind scouts hedged "agents": weak in the accepted-paper DISTRIBUTION even if loud in conversation). Keep LLMs (covers foundation-models), set AI-science → partial, keep RL+agents as a hit but note the agents caveat. **2024 baselineHit: 7 → 6.**
3. **[HIGH] "Diffusion & flow → yes" (2025) bundling.** Image diffusion was FLAT (9.3%→10.2%, 1.10x = the paradigm NON-call for a growth method); only flow-matching (0.3%→1.1%, 4.27x niche) surged. Keep as a hit ONLY because flow-matching genuinely surged, but rename to "flow matching (diffusion flat)" and footnote it; do not let flat-diffusion ride in as a hit.
4. **[MED] "Scaling-laws/peak-data → partial" (2024) too generous.** Ilya's "peak data" was a NeurIPS-moment framing the blind scout flagged as missed. Set → `no`.
5. **[MED] `late-shock` applied to exactly one concept (the worst miss).** Make it a DATE RULE, stated: a signal whose catalyst post-dates the indicator window (o1 = Sept 2024) is late-shock, applied uniformly; report how many concepts are EXCLUDED (late-shock) vs MISSED, separately from the hit count.
6. **[MED] 14→11 truncation undocumented; dropped a known miss (audio) and a top-5 theme (GNN).** Document the rule, and note audio/GNN as misses/non-calls so the denominator is not friendly-curated. (Counts reported against the scored set, with the exclusions named.)
7. **[MED] backtest.ts header overclaimed "honest, not hindsight-constructed."** Reword: inputs gathered blind; the matching is the highest-risk layer, done post-hoc, audited, and corrected down.
8. **[LOW] `provisional:false` vs synthesis "pending."** Make the flag tell the truth.
9. **[KEEP — the honest core] "the baseline is strong, judge beyond-baseline"** is the project's best integrity feature; the `beyondBaseline` pre-commit (before resolution) is good. Keep.

## Net effect (the feature, not the bug)
Corrected baseline: **2024 6/11, 2025 5/11** (down from 7, 6). The thesis is unchanged and arguably stronger: a naive extrapolator still lands ~half the big themes and misses the fresh ones, so a forecast still has to earn its keep beyond baseline. **The correction itself, disclosed publicly with the audit, is the credibility move** — a backtest that survived and published its own red-team. On-brand: cost-honesty over a flattering number.

## Critic 2 — baseline & scoring (also valid, acted on)
1. **[HIGH] Baseline has no K.** "Top risers" cutoff unstated (2024 list=9, 2025=10, defining=11); beyond/baseline partition is K-dependent. FIX: pin K (top-10 by share-delta), apply identically to both years + 2026, acknowledge K-sensitivity.
2. **[HIGH] 2024 baseline ≠ 2025 baseline.** 2025 = mechanical share-deltas from raw JSON; 2024 = narrative read of awards/recaps (no share tables, JS-rendered). Two baselines, one name. FIX: label 2024 as qualitative; don't present "7/11·6/11" as one consistent procedure.
3. **[MED] Coarse-grading asymmetry.** Baseline scored on coarse buckets ("LLMs big"); model on fine criteria (≥20 audit papers). FIX: acknowledge; the baseline is graded GENEROUSLY (helps honesty, but note it).
4. **[MED] No persistence baseline.** "Last year repeats" might ≈ share-growth baseline → the machinery adds little. FIX: add persistence as a 2nd comparator/caveat.
5. **[HIGH] beyondBaseline over-credits 3/10.** rlvr-rubrics (≥80-paper headline is baseline-ish; GRPO/RLVR loudest surge), world-models (2026 ICLR oral + 1,500-person workshop → extrapolator sees it), eval-science (track-rename is public; only sandbagging-specificity is beyond). Clean-beyond: hybrid-attention, interp-after-saes, ai-for-math, (weak) ttt, diffusion-lm. FIX: re-mark conservatively → 5 beyond / 5 baseline-ish; mechanize the rule (beyond iff concept NOT in top-K ICLR/ICML 2026 risers).
6. **[HIGH] Self-grading + gameable metric.** Author controls beyond-labels, criteria thresholds, AND K (three thumbs). FIX: pin all three before resolution.
7. **[HIGH] n=10 calibration meaningless** (beyond-set ≈ 4-5). honesty array omits it. FIX: add "n far too small to calibrate; confidences for ranking/transparency only."
8. **[MED] No multiple-comparisons seal.** 10 + 6 watchlist + 2 cut = ~18 generated. FIX: seal watchlist + cuts as NON-SCORING, cannot be promoted post hoc.
9. **[MED] Some "beyond" rest on private lab signals the public baseline can't see** (interp CLT, $1B RL envs). FIX: scope the claim or give baseline same lab inputs.
10. **[LOW] provisional:false overstates finality.** FIX.
STEELMAN (keep): the core null-hypothesis thesis, the mutually-blind scouts, late-shock humility, keyword-lag insight, pre-written falsifiable criteria, the honestly-self-marked baseline-ish picks.

## Corrections shipped (the feature)
Counts down: 2024 ~6/11, 2025 ~5/11 (judgment-blend, labeled as such, not false precision). K pinned at top-10. beyondBaseline re-marked 5 beyond / 5 baseline-ish. Watchlist sealed non-scoring. honesty: n-too-small + lab-asymmetry added. 2024-baseline labeled qualitative. Both full audits committed to the public repo. A site + paper "Integrity" panel discloses the audit and the corrections. The benchmark that publishes its own red-team.
