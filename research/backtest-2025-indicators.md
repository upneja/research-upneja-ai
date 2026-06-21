# Backtest indicators — pre-NeurIPS-2025 signal (gathered blind to the outcome)
_ICLR 2025 (Jan), ICML 2025 (May), arXiv H1-2025, lab releases. ICLR YoY = computed from raw papercopilot JSON (accepted-only, SHARE not count; acceptances grew 64% YoY). HIGH rigor on ICLR; ICML YoY single-year-absolute (2024 keyword data gap)._

## Ranked surges (ICLR 2025 share, vs 2024)
- **Foundation models / LLMs:** 14.2% → 22.5% (+8.3pp) — biggest move; new "foundation/frontier models" area = 12.7%. ICML LLMs largest area 13.1%.
- **Multimodal / VLM:** 4.8% → 8.3% (+3.4pp); arXiv survey: ICLR 2025 highest VLM share of any venue 40.7%.
- **Alignment / safety:** 2.7% → 5.3% (+2.6pp). Where ICLR AWARDS concentrated.
- **Evaluation / benchmarks:** 3.7% → 6.0% (+2.3pp).
- **Agents / agentic / tool use:** 1.9% → 3.8% (**2.00x, fastest-doubling**); AI Index flags sharp agent-interest rise; deep-research/agentic-search sub-surge (Search-o1, R1-Searcher, WebThinker).
- **Reasoning / CoT:** 2.5% → 4.0% (+1.4pp, rank 48→19) at conferences; but UPSTREAM it was THE dominant H1-2025 theme (Raschka, Zeta Alpha, Paper Digest).
- **Mech interp / SAEs:** interp 2.9% → 3.7%; "mechanistic interpretability" 8→32 papers (4x).
- High-multiplier niches (tiny base): **flow matching 0.3%→1.1% (4.27x, top multiplier)**; **Mamba/SSM 0.4%→1.2% (3.36x, conference-only, NOT flagged by arXiv trackers)**; RAG 0.4%→1.1% (3.13x).
- FLAT/mature: image diffusion 9.3%→10.2% (1.10x) — big but NOT a growth story.
- DECLINING: self-supervised (0.48x, biggest faller), federated (0.51x), contrastive (0.54x), GNN (0.72x), adversarial/robustness (0.74x), generic "RL" label (displaced by RL-for-LLMs).

## ★ CRITICAL timing insight (the leading-vs-lagging point)
**DeepSeek-R1 (Jan 20 2025), GRPO, RLVR appear ~0 in ICLR/ICML author keywords** — R1 post-dated camera-ready deadlines. Academia cloned the open RL-reasoning recipe in DAYS (TinyZero ~Jan 24 <$30; HF Open-R1 Jan 28; SimpleRL; DeepScaleR-1.5B Feb 10 beat o1-preview). By spring every lab shipped visible-reasoning (o3, Claude 3.7, Gemini 2.5, QwQ-32B, Kimi k1.5). So the reasoning/RLVR/test-time-compute cluster DOMINATED arXiv+labs while ~absent from conference keywords. **A method weighting arXiv+lab momentum forecasts the reasoning/RL/agents surge a pure conference-keyword extrapolation UNDERSTATES.** This is a core backtest lesson.

## Awards (verified)
- **ICLR 2025 Outstanding:** "Safety Alignment Should Be More Than Just a Few Tokens Deep"; "Learning Dynamics of LLM Finetuning"; "AlphaEdit" (knowledge editing). HMs: Data Shapley, SAM 2, Faster Cascades. → 5/6 LLM-centric, skew alignment+post-training+editing; reasoning/agents ABSENT from the very top.
- **ICML 2025 Outstanding:** CollabLLM (multi-turn agents); "Train for the Worst, Plan for the Best" (masked-diffusion theory); "Roll the dice & look before you leap" (limits of next-token prediction); + position papers (AI-and-work). 

## Naive-baseline pick set for NeurIPS 2025 (top share-growth risers)
LLMs, multimodal, alignment, evaluation, agents, reasoning, interpretability, flow-matching, Mamba/SSM, RAG.

## Honest matching vs NeurIPS 2025 OUTCOME (11 defining concepts)
- HIT (strong): reasoning, multimodal, evaluation, agents, diffusion/flow (flow-matching was the riser). = 5
- PARTIAL: RLVR (reasoning/RL-adjacent but keyword-lagged), efficient-reasoning (reasoning-adjacent), scaling/mechanistic (interp). = 3
- MISS: world models (NOT a top keyword riser; lived in workshops), LLM mode-collapse/"Hivemind" (award SURPRISE), AI-for-science (present but not a top riser). = 3
- **Naive baseline ≈ 6 of 11 strong (8/11 with partials).** Strong on the obvious big themes; misses the fresh/surprising (world models, mode-collapse) and understates the keyword-lagged reasoning/RLVR. The misses ARE the beyond-baseline territory where judgment + arXiv-weighting earns its keep.

## Sources
ICLR2025 awards blog.iclr.cc/2025/04/22; papercopilot iclr/icml 2025 stats; raw papercopilot JSON (iclr2024/2025, icml2025); arXiv 2510.09586 (VLM survey); DeepSeek-R1 2501.12948; s1 2501.19393; Zeta-Alpha Feb-2025 reasoning; Raschka 2025 reasoning lists; Instabase ICML 2025 recap; AI Index 2025.
