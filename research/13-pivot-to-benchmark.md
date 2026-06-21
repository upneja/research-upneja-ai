# ADR — From a forecast to a benchmark for AI research foresight
_2026-06-21. The pivot that makes this category-defining._

## Decision
research.upneja.ai stops being "a forecast of NeurIPS 2026" and becomes **a benchmark for AI research foresight, judged by time**: a standing, pre-registered, auto-resolving protocol that measures whether a model can read a field and call which fresh directions will matter, scored against a future ground truth. The NeurIPS 2026 forecast is round 1. The backtest is the proof the method works.

## Why this is the category and the one-off was not
- The novel object is the **method** (time as the judge), not the predictions. Every other "can LLMs be novel" eval uses human raters: subjective, gameable, unreproducible. A future event as the answer key is the contribution.
- A single 10-prediction forecast of one venue is an anecdote. A repeatable protocol with a track record and a baseline is a benchmark.
- It is the empirical engine for the "Half-Life of Human Advantage" paper (taste = discrimination scored against a delayed objective ground truth). Same construct. Merge them.

## The backtest, and its integrity guardrails (load-bearing)
A backtest where the author already knows the outcome is worthless unless designed against hindsight. Rules:
1. **Outcomes and indicators are gathered by SEPARATE scouts**, each blind to the other (done: NeurIPS 2024/2025 outcome scouts vs ICLR/ICML 2024/2025 indicator scouts). I never construct a post-hoc "Opus would have predicted X."
2. **The mechanical naive baseline is the legit core.** Baseline = the top-K concepts by *share growth* in ICLR+ICML of the cohort year, predicted prominent at that year's NeurIPS. Fully computable without hindsight; scored against the known outcome. This yields an honest number: how good is dumb extrapolation?
3. **What the backtest can and cannot claim:**
   - CAN: the baseline's hit rate on 2024 and 2025 (legit) -> the bar the live forecast must clear.
   - CAN: a method-validity check -> were the eventual NeurIPS 2024/2025 defining concepts actually visible/surging in the prior ICLR/ICML signal? (Validates that the input signal carries the answer.)
   - CANNOT: "Opus would have scored Y% on 2024." Model-skill-beyond-baseline is only testable PROSPECTIVELY (the live 2026 forecast), because past outcomes are known. State this loudly.
4. **The honest headline:** the backtest calibrates the baseline and validates the method; the live forecast tests the skill. If the live model does not beat the baseline, that is the finding, and it is publishable (cost-honesty over a phantom win).

## The naive baseline (formal)
For NeurIPS year Y: rank concepts by (share at ICLR Y + ICML Y) minus (share at ICLR Y-1 + ICML Y-1); take the top 10 risers; predict each "prominent at NeurIPS Y." Score hit/miss against the year's defining-concept set. Report hit rate + Brier-style calibration where confidences exist. This same baseline is computed for 2024, 2025 (resolved) and 2026 (the bar for the live forecast).

## Leaderboard (seed now, grow later)
Columns: forecaster | year | hits/criteria-met | vs-baseline | calibration. Rows now: Naive baseline (2024, 2025, 2026); Opus 4.8 (2026, pending Dec). Open arms (clearly marked as future): other frontier models on the identical task; human-expert forecasters. The leaderboard IS the product surface.

## Immutability proof
- Canonical frozen record: `research/preregistration.json`.
- SHA-256: `c0bad3048d13e6502095b794cd1942c1cc12d44f339339352845994e1041b3f6`.
- Timestamp: public git commit `61320eb` (2026-06-21 11:44 EDT) first locked the ten; repo is public. Anyone can checkout that commit and re-hash. Display all three on-site with "verify it yourself" steps.

## Build plan
1. Backtest research (5 scouts, running) -> synthesize the 2024/2025 outcome sets + indicator sets + baseline scores.
2. New data layer: backtest results (baseline hit rate per year), method-validity (was-it-callable), calibration, the leaderboard.
3. Reframe site + paper around the protocol + the taste merge; add the immutability panel.
4. Adversarial integrity pass on the backtest (a critic whose only job is to find hindsight leakage / cherry-picking / an unfair baseline).
5. Ship, iterate, do not stop until category-defining.

## Positioning (pending scout 5)
Borrow scoring rigor from forecasting science (Brier, calibration, Metaculus). Differentiate from Si et al. 2024 (human-judge novelty) by the future ground truth. Connect to the taste/half-life thesis.
