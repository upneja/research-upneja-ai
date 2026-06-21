# Backtest indicators — pre-NeurIPS-2024 signal (gathered blind to the outcome)
_ICLR 2024 (Jan/May), ICML 2024 (May/Jul), arXiv H1-2024, lab releases Dec2023–Jun2024. Confidence graded; thin evidence flagged. papercopilot keyword tables JS-rendered (not fully extractable) so some claims rest on the peer-reviewed ICLR-corpus study (2404.08403) + recaps, not full histograms._

## Ranked surges
1. **Generative modeling: diffusion → rectified flow → video/3D/world-sim** (STRONGEST). ICLR24: 2/5 Outstanding diffusion/generative (diffusion-generalization, protein walk-jump); diffusion-for-3D/Gaussian-splatting sub-current (LRM, DreamGaussian, MVDream). ICML24: 4/10 Best generative — discrete diffusion, **Scaling Rectified Flow (SD3)**, **VideoPoet**, **Genie (interactive environments)**. GAN/VAE displaced by diffusion (2404.08403). Labs: **Sora** (Feb 15), **Veo** (May 14) → text-to-video wave.
2. **Post-Transformer arch: SSM/Mamba + MoE** (STRONG, the new fault line). Latent Space made "SSM vs Transformers" a headline ICLR24 track; "Never Train from Scratch" Outstanding (SSM debate). Mamba REJECTED at ICLR24 yet derivatives exploded (Vision Mamba, Mamba-2 "Transformers are SSMs" at ICML24). **Mixtral 8x7B** (Dec 11 2023) made MoE "hottest topic"; Gemini1.5/DBRX/DeepSeek-V2 followed.
3. **LLM alignment as METHODOLOGY (DPO-vs-PPO)** (STRONG). ICML24: "Debating with More Persuasive LLMs" Best Paper; "Is DPO Superior to PPO?" + "Weak-to-Strong Generalization" orals.
4. **LLM agents + reasoning/CoT** (STRONG volume, weak rank). ICLR24 "many LLM reasoning+agent papers" (split into own recap); UniSim Outstanding. ICML24 agents as orals (GPTSwarm). Ng's "agentic workflows" (Mar). FLAG: agents/reasoning NOT yet in ICLR top-20 keywords.
5. **Long context / 1M tokens + KV-cache** (STRONG lab-led). **Gemini 1.5** (Feb 15) 1M context, needle-in-haystack; GPT-4 Turbo 128K. ICLR24 Adaptive KV-Cache HM; LongLoRA/Self-RAG orals.
6. **Mechanistic interpretability** (BEST hard rank delta). 2404.08403: "interpretability" one of only TWO keywords NEWLY entering ICLR top-20 in 2024. "ViT Need Registers" Outstanding; ICML24 mech-interp workshop 93 papers.
7. **Multimodal/VLM any-to-any** (STRONG). **GPT-4o** (May 13), **Claude 3** (Mar 4) native vision. "computer vision" newly into ICLR top-20.
8. **RAG** (steep arXiv ~13x, weak conference). Self-RAG oral but not in ICLR top-20.
9. **Open-weights / small-capable** (lab agenda-setter). Llama 3 (Apr 18), Gemma (Feb 21), Phi-3 "on your phone" (Apr 22).
10. **Privacy/security of PRODUCTION LLMs** (award-grade ICML). "Stealing Part of a Production LM" (Carlini) Best Paper.

## Naive-baseline pick set for NeurIPS 2024 (top risers)
Diffusion/video-gen, Mamba/SSM+MoE, alignment/DPO, agents/reasoning, long-context/KV, interpretability, multimodal/VLM, RAG, open-weights.

## Honest matching vs NeurIPS 2024 OUTCOME (answer key)
- HIT (strong): LLMs, diffusion/image-gen, RL-renaissance+agents, alignment/safety, multimodal/embodied, SSM/Mamba, foundation models. = ~7
- PARTIAL: reasoning (rising but not yet ranked), data-curation/synthetic, AI-for-science (protein award). = 3
- ★ **MISS — the big one: INFERENCE-TIME COMPUTE.** The single DEFINING narrative of NeurIPS 2024 (Ilya "peak data" keynote, the o1 paradigm) was a **LATE SHOCK** — o1 shipped Sept 2024, AFTER the pre-NeurIPS indicators. No year-out method catches it. Also missed: audio/speech, the "peak data" framing itself (a NeurIPS-moment).
- **Naive baseline ≈ 7 of 11 strong.** Strong on steady risers; the cardinal miss is the late o1/inference-time-compute shock.

## ★ The two backtest lessons (both years)
1. **Late shocks are unforecastable from a year out** (o1/inference-time-compute for 2024). The method catches steady risers, misses paradigm shocks that land between the indicators and the conference. Honest limit; the live 2026 forecast should expect to miss its own late shock.
2. **Keyword-lag vs arXiv-momentum** (RLVR/GRPO for 2025): a signal can dominate arXiv+labs while ~absent from conference keywords (deadline timing). A method weighting arXiv/lab momentum beats pure keyword-extrapolation. The live 2026 method does exactly this.

## Sources
ICLR2024 Outstanding blog.iclr.cc/2024/05/06; ICML2024 awards icml.cc/virtual/2024/awards_detail; 2404.08403 (ICLR-corpus keyword study, berenslab); Latent Space ICLR2024 recap; Sora openai.com/index/sora; Gemini1.5 blog.google Feb 2024 (2403.05530); Mixtral mistral.ai/news/mixtral-of-experts; GPT-4o openai.com/index/hello-gpt-4o; Llama3 ai.meta.com/blog/meta-llama-3; "Stealing Part of a Production LM" ICML24.
