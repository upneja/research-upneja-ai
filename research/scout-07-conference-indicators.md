# Scout 07 — Conference Leading Indicators (KEYSTONE)
_Filed 2026-06-21. GOVERNING CAVEAT: the pipeline ~doubled in 2yrs (ICLR 7,304→11,672→19,525; ICML 9,653→12,107→23,918) so almost every raw count rose. **SHARE-OF-ACCEPTS is the only honest momentum metric** — a concept truly surged only if it outgrew the ~1.7–2× program inflation._

## A1. ICLR 2026 (Rio, Apr 23–27; decisions ~Jan; awards ~Apr 22–23) — VERIFIED
Stats: **19,525 valid submissions / 5,355 accepted / 27.4%**; 779 desk-rej; 5,042 withdrawn; 76,139 reviews; **223–225 orals (~top 1–2%)**.
**OUTSTANDING PAPER AWARDS** (blog.iclr.cc/2026/04/23):
- "Transformers are Inherently Succinct" (Bergsträßer, Cotterell, Lin) — THEORY of why Transformers powerful (succinct concept encoding vs RNNs).
- "LLMs Get Lost In Multi-Turn Conversation" (Laban et al.) — EVAL/RELIABILITY; LLMs degrade sharply multi-turn w/ under-specified instructions.
- Honorable Mention: "The Polar Express: Optimal Matrix Sign Methods and their Application to the **Muon Algorithm**" — OPTIMIZATION (Muon, GPU/low-precision).
Signal: awards reward THEORY-of-Transformers + EVAL-of-multi-turn-reliability + MUON.
Oral topic distribution (n≈223, DIRECTIONAL): LLM reasoning/test-time ~28 > Agents ~25 > RL-for-LLMs ~18 > Diffusion/flow ~17 > Efficiency/quant/MoE ~16 (ThinKV) > Multimodal/VLM ~15 > Interp ~12 > Safety/align ~11 > World models ~9 (WoW!) > SSM/linear-attn ~8 (**Mamba-3 is an oral**) > AI4Science ~7 > theory ~8 > RAG ~5 > robotics ~4.

## A2. ICML 2026 (Seoul, Jul 6–11; decisions ~May) — VERIFIED stats / DIRECTIONAL topics
Stats: **23,918 submissions / 6,352 accepted / 26.6%** (2025: 12,107/3,260/26.9%). Submissions **+98% YoY**. Orals ~168 (~0.7%), spotlights ~536 (~2.2%). **No ICML 2026 awards yet** (announced at conf). 
Governance: **497 papers (~2%) desk-rejected for LLM-review-policy violations**; 51 reviewers removed; author self-ranking + Google Paper Assistant Tool introduced.
**Agent census (github jiaxianyan, title-keyword floor): 465 accepted papers (~7.3% of program) are agent papers.** Sub-clusters: **Benchmarks/Eval 99 (largest)**, Multi-Agent/MARL 93, Tool-Use/Training/RL 58, Safety/Gov 51, Theory/Interp 39, Scientific agents 30, Memory/Long-Horizon 29, Coding/SWE 27, GUI/Web 13, Embodied 11, Planning 11.
Embodied/VLA YoY (constant source): embodied **14→58 (~4.1×)**, VLA **6→20 (3.3×)** — far outpace 2× program growth = genuine share gains.
Notable orals: "Monitoring Monitorability" (OpenAI, CoT-monitoring), "MaxRL" (reportedly beats GRPO), "Understanding Reasoning Collapse in LLM Agent RL" (Fei-Fei Li, Yejin Choi), 2 diffusion-LM orals, position orals "Stop Automating Peer Review Without Rigorous Evaluation" + "The Age of AI Agents Demands A New Scientific Paradigm."

## A3. NeurIPS 2026 CFP & ANNOUNCED CHANGES (Sydney ICC, Dec 6–12) — VERIFIED (richest "announced changes" haul)
- 40th NeurIPS. Abstracts **May 4**, papers **May 6**, notif **Sep 24, 2026**. Two satellites: Paris + Atlanta.
- **Page limit → 9 content pages** (refs/appendix excluded), up from 8+1.
- **"Evaluations and Datasets" track — RENAMED from "Datasets & Benchmarks"** (the rename toward EVALUATION is itself the signal).
- Position Paper Track returns (2nd yr). **MLRC (ML Reproducibility Challenge) now an official NeurIPS track** (first time reproducibility has a home in a major ML conf). Creative AI Track (4th yr, theme "Agency").
- **NeurIPS 2026 AI-Assisted Reviewing Experiment** — RANDOMIZED CONTROLLED TRIAL assigning reviewers to no-LLM / open-ended-LLM / structured-LLM-assistant; zero-data-retention. The premier ML venue running RCTs on LLM-as-reviewer.
- **AI-generated-paper crackdown** (blog Jun 2 2026): of 969–971 Position-Paper submissions, Pangram flagged **28.2% at 100% AI** (up from 8.2% in 2025), 70.5% ≥50%; **178 (18.4%) desk-rejected**, 123 (12.7%) required to prove human authorship.
- Responsible-Reviewing policy; LLMs can't be co-authors; mandatory checklist. NOTE: "nearly 30,000 submissions" = NeurIPS **2025** NOT 2026; main-track 2026 totals not public until Sep 24.

## A4. CROSS-VENUE KEYWORD TRENDS — VERIFIED hard counts (strongest quantitative finding)
ICLR full-pool keyword counts (papercopilot JSON, constant method):
| keyword | ICLR2024 (~7.4k) | ICLR2025 (~11.7k) | ICLR2026 (~19.8k) | verdict |
|--|--|--|--|--|
| reasoning | 154 (2.1%) | 403 (3.5%) | **1,657 (8.4%)** | SURGING ~4× share |
| "reasoning model(s)" | 0 | 1 | 167 | zero→cluster |
| test-time/inference-time | 47 | 85 | 397 | SURGING |
| **GRPO** | 0 | 0 | **73** | zero→cluster |
| **RLVR/verifiable reward** | 0 | 0 | **110** | zero→cluster |
| RLHF | 36 | 120 | 111 | PLATEAUED |
| DPO | 1 | 37 | 73 | steady |
| KV-cache (accepted) | 1 | 29 | 60 | SURGING 60× |
| MoE (accepted) | 13 | 51 | 91 | share rose every yr |
RL = #2 ICLR2026 keyword (796, behind LLM 1,053), went 186→236→796 in 3yrs (now LLM-RL not control). "Agent" = #1 keyword (Encord).
CVPR 2026: Multimodal/VLM **4.9%→10.6%**; video-gen & **world models 3.8%→8.8% (~2.3×)**; embodied/VLA 2.9%→6.2%; **classic detection/seg/tracking 3.8%→1.2% (COLLAPSE)**.
VLM survey (2510.09586, CVPR+ICLR+NeurIPS 2023–25): VLM/multimodal **16%→28%→40%**; diffusion/gen 8%→14.9%→19.2%; contrastive/InfoNCE 10.8%→5.6%→5.1% (DECLINING).
Benchmark/eval share (104K-paper/22-venue meta 2601.15170): **10.07% (2022) → 18.16% (2025)** (near-double) — consistent w/ NeurIPS track rename.

## B. SURGING (ranked) / COOLING / DECLINING
SURGING: 1 Agents (broadest, #1 keyword, 465 ICML, ~25 ICLR orals) · 2 LLM reasoning/test-time (~4× share) · 3 RLVR/GRPO (cleanest zero-to-one; RLHF plateaued, verifiable-reward variants did the growing) · 4 Eval/benchmarks/LLM-as-judge (best-quantified rise 10%→18%; maturing to self-criticism) · 5 Multimodal/VLM (steepest, 16%→40%) · 6 World models/omnimodal physical AI · 7 Embodied/VLA (funded by classic-CV collapse) · 8 Diffusion LANGUAGE models (rising slice of diffusion; 3yr oral escalation) · 9 Efficient/hybrid arch + MoE + KV-cache · 10 CoT-monitoring (safety sub-area; alignment overall steady) · 11 AI4Science/AI4Math.
HYPE-COOLING: **pure Mamba/SSM** (flat-to-DOWN as share; energy migrated to HYBRID linear-attn, "linear attention" titles 3→9→23 — claim "hybrids surging, pure-SSM cooling"); **SAEs/mech-interp method** (self-critiquing, DeepMind deprioritized, edge → representation geometry); plain RAG (commoditizing, rising slice = agentic/reasoning-RAG).
DECLINING (evidence): classic CV detect/seg/track (3.8%→1.2%); contrastive/SSL (InfoNCE 10.8%→5.1%); GANs (dead as frontier); NeRF (→Gaussian Splatting); meta-learning/AutoML/NAS; GNN share. "Prompt engineering is dead" = SEO slop, no count backing.

## C. NeurIPS 2026 prediction candidates (7)
1. **RLVR/GRPO-and-successors as named dominant method cluster.** Novel (GRPO+RLVR were 0 in ICLR titles 2024 AND 2025; NeurIPS 2026 is FIRST NeurIPS whose full cycle post-dates DeepSeek-R1 Jan 2025). High-prob (0→73 GRPO, 0→110 RLVR; DAPO/GSPO/Dr.GRPO/RL^V/MaxRL in ICML orals). **Conf 90%.** Criterion: ≥40 accepts w/ RLVR/GRPO/verifiable-reward in title/abstract OR an RLVR paper wins award/oral.
2. **LLM agents as systems engineering, eval/benchmarks largest sub-area.** Novel (2024 "prompt engineering" → 2026 build/train/benchmark agent systems). High-prob (#1 ICLR keyword, 465 ICML papers). **Conf 92%.** Criterion: ≥400 main-track agent papers + agent benchmark/eval among orals/awards.
3. **Evaluation crisis / reliability / LLM-as-judge scrutiny = headline theme (track rename).** Novel (2024 "more benchmarks" → 2026 "benchmarks/judges unreliable"; ICLR best paper = multi-turn reliability failure). High-prob (eval share 10%→18%; self-criticism cluster). **Conf 85%.** Criterion: ED track grows YoY + ≥1 oral/award to a paper showing a popular eval/judge is flawed/gameable.
4. **World models + omnimodal physical AI / VLA = unified frontier.** Novel (2024 Dreamer-RL → 2026 video/action-conditioned omnimodal simulators). High-prob (CVPR WM ~2.3× + best paper; ICML embodied 4.1×/VLA 3.3×; Cosmos 3). **Conf 80%.** Criterion: "world model" and/or "VLA" each ≥50 accept titles + ≥1 oral.
5. **Diffusion language models = recognized AR alternative.** Novel (2024 diffusion=images; text-diffusion niche). High-prob (oral status both ICLR+ICML; Mercury/Gemini Diffusion; 8B→100B in a year). **Conf 72%.** Criterion: ≥25 accepts on diffusion/masked-diffusion LANGUAGE models OR a diffusion-LM oral.
6. **Hybrid linear-attention / Mamba-transformer-MoE (NOT pure SSM).** Novel+contrarian (naive 2024 bet was pure Mamba; reality = pure-SSM cooled, hybrids won). High-prob ("linear attention" 3→9→23; Mamba-3 oral is hybrid-framed; MoE monotonic). **Conf 75%.** Criterion: ≥30 accepts on hybrid/linear-attn/sub-quadratic AND hybrids outnumber pure-Mamba.
7. **AI-in-the-loop science-of-peer-review + AI-generated-content governance = first-class topic.** Novel (META-prediction, strongest direct NeurIPS evidence). High-prob (NeurIPS running AI-reviewing RCT; 178 AI papers desk-rejected; ICML 497; position orals on automating review). **Conf 78%.** Criterion: NeurIPS publishes AI-reviewing experiment results AND/OR ≥1 paper on LLM-in-peer-review / AI-paper-detection.
Bonus watch: AI4Math/autonomous math discovery — SURGING+prestigious (Gowers-verified Erdős, AI Co-Mathematician 48% FrontierMath T4) but smaller volume → ~65% it gets a spotlight moment.

## Confidence/gaps
HARDEST: ICLR/ICML accept stats; ICLR keyword JSON; NeurIPS CFP/policy. DIRECTIONAL: oral topic counts (title-keyword undercount ~2×); CVPR shares (12% highlight sample); all H1-2026 arXiv "impact" (upvotes not citations). NOT public: ICML 2026 awards; NeurIPS 2026 main-track totals + results. Single most forecastable spike = RLVR/GRPO+reasoning (first NeurIPS post-R1).

## Key sources
blog.iclr.cc/2026/04/23 (Outstanding Papers); blog.iclr.cc/2026/03/31 (retrospective); neurips.cc/Conferences/2026/CallForPapers + /ai-reviewing-experiment + /CallForEvaluationsDatasets; blog.neurips.cc/2026/06/02 (AI-gen papers); github jiaxianyan/icml-2026-agent-papers (465); papercopilot/paperlists; 2510.09586 (VLM survey); 2601.15170 (benchmark meta). Key IDs: DeepSeek-V4 2606.19348, GLM-5 2602.15763, Cosmos 3 2606.02800, Mamba-3 2603.15569, AI Co-Mathematician 2605.06651.
