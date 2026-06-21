# Backtest answer key — NeurIPS 2024 (Vancouver, Dec 10–15 2024)
_Gathered independently of any forecast/indicator. VERIFIED vs primary sources where flagged._

## Story in 3 sentences
Center of gravity shifted from "scale pretraining" to "scale REASONING and INFERENCE-TIME compute," crystallized by Ilya's Test-of-Time talk ("pre-training as we know it will end… we have but one internet"; data = fossil fuel). On paper, generative modeling dominated (LLMs + diffusion the two largest clusters; awards honored VAR autoregressive image gen + a diffusion self-guidance trick), while the loud-in-hallways story was the RL + agents + verification revival catalyzed by o1. Test-of-Time (GANs + Seq2Seq, both 2014) underscored the throughline.

## Awards (VERIFIED)
- **Best Paper (main):** VAR — Visual Autoregressive Modeling, next-scale prediction image gen (beats diffusion on ImageNet); Stochastic Taylor Derivative Estimator (scientific ML / PDEs).
- **Runners-up:** Rho-1 "Not All Tokens Are What You Need" (LLM pretraining data curation); Autoguidance "Guiding a Diffusion Model with a Bad Version of Itself" (diffusion).
- **D&B Best Paper:** PRISM Alignment Dataset (participatory RLHF, ~1,500 ppl/75 countries).
- **Test of Time:** GANs; Seq2Seq (both NeurIPS 2014).

## Stats (VERIFIED, papercopilot)
15,671 sub / 4,035 accepted / 25.75%; 61 orals, 326 spotlights, 3,648 posters. ~56 workshops. Invited: Hochreiter, Kragic, Zhou, Gopnik, Picard, Doucet, Fei-Fei Li ("From Seeing to Doing"). Ilya = Test-of-Time keynote.

## DEFINING CONCEPTS (ranked — the answer key set; ranking is judgment-blend not measured)
1. **Large Language Models** — single largest accepted-paper cluster, exponential growth since 2023.
2. **Inference-time / test-time compute** — THE narrative shift (majority voting, ensembling/Archon, auto-formalization), tied to o1.
3. **Reasoning + its architectural limits** — teaching reasoning + theory of why transformers struggle ("Transformers Need Glasses", "Softmax is Not Enough").
4. **Diffusion models & image generation** — 2nd-largest cluster, over-represented in awards.
5. **RL renaissance + agents** — RL via post-training, self-play, agentic envs (OSWorld, OMNI-EPIC, Noam Brown self-play lineage).
6. **Alignment / safety / pluralism** — anchored by PRISM award.
7. **Data curation / quality / synthetic data** — "better data beats more data" (Rho-1, influence functions, datamodels).
8. **Scaling-laws debate / "peak data"** — Ilya's soundbite dominated discussion.
9. **Multimodal & embodied/visual intelligence** — top-5 cluster; Fei-Fei "perception to action."
10. **Foundation models** (distinct named cluster).
11. **AI-for-Science** (chem/physics/materials/health/climate) — Taylor-derivative award flagship.
12. **State-space models / Mamba** — present but active-niche ("Mamba in the Llama" distillation).
13. **Graph Neural Networks** — STEADY top-5 (not trendy; consistent 2020–24).
14. **Audio/speech** — rising (streaming ASR-TTS, music gen).
Declining: classical optimization, Bayesian methods (top-5 in 2020–22, fell off).

## Honest hedges (critical for backtest integrity)
- Ranking order = judgment blend, NOT a measured keyword leaderboard (no public ranked tally w/ counts).
- **RAG and explicit "LLM agents" were QUIETER in accepted-paper data than industry hype suggested** — agents lived more in workshops/talks + the RL-renaissance framing than as a dominant accepted-paper keyword. Treat "agents was huge at NeurIPS 2024" as true for the CONVERSATION, weaker for the DISTRIBUTION.

## Sources
blog.neurips.cc/2024/12/10 (best papers); /2024/11/27 (test of time); papercopilot.com/statistics/neurips-statistics/neurips-2024-statistics; shmouses.github.io/NeurIPS2024AITrends; amplifypartners.com/blog-posts/neurips-2024-main-themes-and-takeaways; radical.vc/neurips-2024-highlights; turingpost.com/p/neurips-2024-papers.
