# Backtest synthesis — what retrodicting 2024 & 2025 actually shows
_2026-06-21. Built from the independently-gathered answer keys (backtest-2024-outcome.md, backtest-2025-outcome.md) + the keyword-share data (scout-08) + domain knowledge. Exact indicator citations PENDING the 2024/2025 indicator scouts; the qualitative findings are robust to the exact numbers._

## Finding 1 — Method validity: the leading indicators DID carry the answer
For both years, the concepts that ended up defining NeurIPS were visibly surging in the prior signals.
- **NeurIPS 2025** (strong): every top defining concept — reasoning post-o1/R1, RLVR + its skepticism, multimodal (largest cluster), evaluation-as-science, diffusion/flow, agents, world models, efficient reasoning — was already cresting in the pre-conference signal (o1 Dec 2024, DeepSeek-R1 Jan 2025, RLVR/GRPO across H1 2025, multimodal long-rising, a *first* Efficient Reasoning workshop). The method's INPUT contained the OUTPUT. The reflective/eval-skeptic award slate (RLVR-skeptic runner-up, "why diffusion doesn't memorize", "Artificial Hivemind" mode-collapse, Sutton/Choi keynotes) was the leading edge of exactly the "evaluation becomes a science" turn the 2026 forecast bets on at #1.
- **NeurIPS 2024** (mostly, noisier): LLMs, diffusion/image-gen, reasoning, RL+agents, alignment, data-curation were all visible beforehand. The one genuinely LATE crystallization was **inference-time compute** — o1 shipped Sept 2024, weeks before the Dec conference, so that narrative was fresh, not a year-out signal. Useful honesty: not everything is forecastable a year out; the o1 moment is the kind of late shock the method would partly miss.

## Finding 2 — The naive baseline is STRONG, and that is the most important result
The mechanical baseline (top concepts by share-growth in ICLR+ICML of the cohort year, predicted prominent at that year's NeurIPS) gets the BIG themes right, because the biggest themes are visible a year out. On 2025 it would have called reasoning, multimodal, RL/agents, diffusion, eval — most of the headline set. _[Exact baseline hit count pending indicator scouts; provisional read: the naive baseline lands the majority of the top ~10 themes both years.]_

This is not a weakness of the project. It is the project's sharpest, most honest point:
> **If dumb extrapolation already gets "agents/reasoning/multimodal will be big," then a model predicting those proves nothing. The bar is high. A forecast only demonstrates research taste on the FRESH, SPECIFIC, not-yet-obvious calls the baseline misses.**

## Finding 3 — So the live 2026 forecast must be judged on its BEYOND-BASELINE calls
Self-critically marking the ten by whether a naive extrapolator would also have made them:
- **Baseline-ish (the obvious big themes — little taste demonstrated even if they hit):** #5 unified multimodal (multimodal is the largest cluster already), #3 agentic RL (agents already huge), part of #2 (RLVR is the loud 2025 theme continuing).
- **Beyond-baseline (the calls that actually test foresight — fresh, specific, contestable):** #1 evaluation-awareness/sandbagging-as-a-named-cluster (not just "more eval"), #4 world-models-as-trainable-simulators with physics-faithfulness as the open problem, #6 diffusion *language* models crossing to production, #7 hybrid-attention-beats-PURE-SSM (a directional, contrarian call against the obvious "Mamba" bet), #8 interpretability-AFTER-SAEs (a reversal, not a continuation), #9 AI-for-math cracking open problems, #10 test-time training. And the *specific* half of #2 (RLVR escaping to non-verifiable domains via rubric/generative verifiers).
- **Scoring consequence:** the headline number in December is not "X/10 hit." It is "X/10 hit, of which Y were beyond-baseline calls the naive extrapolator would have missed." Y is the real measure of foresight. This is the metric the leaderboard should center.

## Finding 4 — What the backtest CAN and CANNOT claim (integrity)
- CAN: the method's input carried the answer (validity); the naive baseline's hit rate on resolved years (the bar). _[numbers pending]_
- CANNOT: "Opus would have scored Z% on 2024/2025." The outcomes are known, so any retro "model forecast" is hindsight-tainted. Model-skill-beyond-baseline is only honestly testable on the LIVE 2026 round.
- The backtest's job is therefore: validate the method + set the bar + define the right metric (beyond-baseline hits). The live forecast tests the skill against that bar in December.

## To finalize when indicator scouts land
- Plug in exact ICLR/ICML 2024 & 2025 award + oral-topic + keyword-share data; compute the naive baseline's precise hit count vs each year's defining set.
- Confirm the "inference-time compute was a late o1 shock" read for 2024.
- Cite everything.
