# NeurIPS 2026 Concept Prediction — Research Framework & Journal

> Append-only journal + methodology. Source of truth for the prediction work.
> Started 2026-06-21.

## Objective

Predict **10 novel, high-probability concepts** that will be prominent at **NeurIPS 2026** (Sydney, Australia, Dec 6–12, 2026 — corrected from an initial "San Diego" assumption via scouts 3 & 9), grounded in rigorous empirical analysis of 2026 cutting-edge ML research. Ship two artifacts to `neurips.upneja.ai`:

1. A beautiful, interactive **data layer** illustrating the current and historical ML research landscape.
2. The **10 predictions**, each with empirical evidence, a confidence level, and a falsifiable success criterion.

## The timing thesis (why this forecast is tractable, not fortune-telling)

NeurIPS runs on a fixed clock:

- Abstract deadline mid-May 2026, full-paper deadline ~5 days later. *(verify exact dates)*
- Reviews June–August 2026; author rebuttals ~August; decisions ~mid-September 2026.
- Conference **Sydney, Australia, Dec 6–12, 2026** (verified via neurips.cc/Conferences/2026). Workshop slate not public until ~Sep 29 2026 (apps closed Jun 6), so workshop-based success criteria are standing-series extrapolations.

**Implication:** as of today (2026-06-21) the papers that will define NeurIPS 2026 are *already written and largely on arXiv*. We are not predicting unknown future research. We are forecasting **which already-visible directions earn prominence** — measured as (a) a meaningful cluster of accepted papers, and/or (b) spotlight/oral/award/keynote/invited-talk/workshop framing.

**Leading indicators that de-risk the forecast:**
- **ICLR 2026** (decisions ~Jan 2026, conference ~Apr–May 2026) — themes here strongly precede NeurIPS.
- **ICML 2026** (decisions ~May 2026, conference Jul 2026) — same submission cohort window as NeurIPS; its accepted-paper topic distribution is the single best proxy.
- arXiv cs.LG / cs.CL / cs.AI / cs.CV submission velocity Jan–Jun 2026.
- Frontier-lab releases & technical reports Jan–Jun 2026.

## Resolving "novel YET high-probability" (the core tension)

- **Novelty** = specificity + synthesis + freshness relative to the NeurIPS 2024/2025 baseline (LLMs, RAG, agents, diffusion, RLHF). A prediction must name a *specific* concept a non-expert wouldn't already assume.
- **Probability** = grounded in momentum already measurable in mid-2026. No moonshots.
- The sweet spot is a concept that is **inflecting now** — visible but not yet saturated — that crystallizes into a named, citable theme by December.
- **Anti-patterns to reject:** (a) "more of X" truisms ("more LLM papers"); (b) moonshots with no current evidence; (c) claims too vague to falsify.

## Methodology

1. **Empirical discovery** — a parallel research fleet web-searches Feb–Jun 2026 developments across ML subfields. (Model training cutoffs are ~early 2026; the recent frontier MUST come from live search.) Each scout returns emerging concepts + hard evidence (paper titles, arXiv IDs, dates, venues, citation/adoption momentum) + candidate predictions, and explicitly separates momentum from hype.
2. **Synthesis** — cluster candidates, dedupe, rank by (novelty x probability x evidence-strength). Select 10 with subfield diversity.
3. **Adversarial red-team** — every drafted prediction faces a steelman/pre-mortem: Could it fail? Is it already mainstream (not novel)? Too vague to falsify? Is the evidence cherry-picked? Survivors only.
4. **Specification** — each final prediction gets: statement, novelty rationale, evidence (with sources), confidence %, and a falsifiable Dec-2026 success criterion.

## Research fleet (dispatched 2026-06-21)

| # | Scout | Mandate |
|---|-------|---------|
| 1 | LLM reasoning & test-time compute | post-o1/r1/o3 reasoning, latent/continuous reasoning, verification, process rewards, test-time scaling laws |
| 2 | Agents & agentic systems | agentic RL, multi-agent, computer-use, long-horizon, agent memory, environments/benchmarks |
| 3 | Efficient architectures & systems | sub-quadratic/linear attention, SSM successors, MoE, KV-cache, long-context, quantization, hardware-aware |
| 4 | Generative models beyond LLMs | diffusion LMs, world models, video/multimodal gen, flow matching, unified multimodal |
| 5 | Post-training, RL & alignment | RLVR/RLAIF successors, self-improvement/self-rewarding, synthetic data, reward modeling, scalable oversight |
| 6 | Interp, science-of-DL & evaluation | mech interp scaling, SAE successors, model diffing, evals crisis, contamination, scaling-law science |
| 7 | Conference leading indicators | ICLR 2026 + ICML 2026 awards/orals/topic distribution; surging arXiv themes |
| 8 | Historical data layer | NeurIPS submission/acceptance counts by year, topic trends, institutions, arXiv volumes — hard numbers w/ sources |
| 9 | Frontier-lab signals & wildcards | 2026 model releases + revealed techniques; underrated/contrarian directions (neurosymbolic, continual, embodied, AI-for-science) |

## Findings
_(filled as scouts report)_

## Candidate concepts (raw pool)
_(filled during synthesis)_

## The 10 predictions
_(filled after red-team)_

## Adversarial review log
_(pre-mortem on each prediction)_

## Data-layer datasets
_(curated, sourced numbers for the viz)_

## Paper-radar (publishable angles)
Standing rule: flag publishable arXiv angles on research-shaped work (hub: papers.upneja.ai).
- **Angle A — pre-registered forecast as meta-science.** This project is a timestamped, falsifiable, criterion-based forecast of NeurIPS 2026 trends made before decisions (Sep 2026). Publishing the predictions now as a dated preprint = pre-registration; a resolution paper post-conference scores the hit rate. Novel framing: "Can the frontier be forecast from leading indicators (ICLR/ICML/arXiv velocity)?" **Venue:** ML-evaluation / meta-science / Science-of-DL workshop, or arXiv cs.DL. **Gate:** needs a baseline (naive "extrapolate last year" forecaster) to beat, and the predictions must actually resolve well — credibility = track record.
- **Angle B — the data layer as a dataset/measurement.** A cleaned, sourced longitudinal dataset of ML-venue topic prevalence + submission growth could be a Datasets/Evaluations-track artifact if it adds a method (e.g., automated topic-trend extraction with validity checks). **Gate:** must exceed existing trackers (papercopilot, AI Index) with a novel measurement, not just re-plot public numbers.
- Re-evaluate after synthesis; only pursue if an angle clears its gate.
