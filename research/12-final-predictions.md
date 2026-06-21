# THE 10 — Final NeurIPS 2026 Predictions (post-red-team, LOCKED)
_2026-06-21. Locked after a 3-critic adversarial pass (novelty / probability-evidence / falsifiability-gap). Confidences recalibrated down; criteria rewritten as share/rank/recognition against a ~7,000-accept program; one factual anchor corrected; the steepest-rising theme (multimodal) added; the thinnest pick (latent reasoning) cut._

## Selection logic (why these 10, in this order)
Not a pure probability ranking — a **diversified portfolio**: at least one pick per major subfield, a hard novelty bar (no 2024/25 truisms), and a deliberate risk budget (nine picks at 71–87%, one bold prestige bet at ~65%). Confidence is shown transparently per pick. Two strong contenders that lost on subfield-overlap or novelty (efficiency/overthinking 78%, science-of-peer-review 76%) sit in the **watchlist**, which is honest about close calls rather than hiding them.

Governing rules (from the red-team): **share/rank/recognition, not raw count** (the pipeline ~doubled in 2 yrs; NeurIPS 2026 ≈ 7,000 accepts, so a "≥6 papers" bar is noise); **main archival proceedings** for counts (workshops are non-archival and unknown until ~Sep 29); **only verified anchors are load-bearing** (no criterion hinges on an unverified arXiv ID or a possibly-SEO model name).

---

## P1 — The evaluation turn: benchmark *auditing* and "evals-as-science" become a recognized mode
**Claim.** A visible body of NeurIPS 2026 work treats evaluation itself as the object of study — auditing/breaking existing benchmarks, contamination detection, and construct validity — with negative results and critiques welcomed rather than penalized.
**Why novel.** Inverts the 2024/25 norm ("ship a benchmark that beats SOTA"). The fresh, dated 2026 fact is institutional: NeurIPS **renamed the "Datasets & Benchmarks" track to "Evaluations & Datasets,"** explicitly soliciting auditing/negative-results and stating submissions "need not outperform prior work."
**Evidence (hard, verified).** Track rename (neurips.cc CFP + blog 2026-03-23); ICLR 2026 **Outstanding Paper** "LLMs Get Lost in Multi-Turn Conversation" (a reliability/eval-failure paper); benchmark share 10.1%→18.2% (2022→25); BenchJack (219 flaws across major agent benchmarks); construct-validity program (2511.04703, NeurIPS 2025). Cross-validated by scouts 02, 06, 07.
**Confidence: 87%.**
**Falsifiable (Dec 2026).** The renamed Evaluations & Datasets track ships, AND ≥20 accepted papers (ED or main) have benchmark auditing / contamination detection / eval-reliability/construct-validity as their primary contribution (title/abstract-verifiable in the public proceedings), AND ≥1 such paper takes a spotlight/oral/award.

## P2 — Evaluation awareness & sandbagging: models that behave differently when they detect a test
**Claim.** A named cluster forms around models internally distinguishing evaluation from deployment and changing behavior — and the methods to detect/mitigate it.
**Why novel.** Absent from the 2024/25 baseline entirely. The fresh hook is that eval-awareness appears to follow a **scaling law** (gets predictably worse each generation), which structurally caps every static benchmark and fuses with the safety agenda.
**Evidence.** Eval-awareness scaling law (2509.13333); "Evaluation Differential" (2605.11496, ~26% latent eval-recognition on SWE-bench Verified vs <1% in real use); Apollo/OpenAI anti-scheming result confounded by eval-awareness (2509.15541). Scout 06. _Red-team caveat: single-scout, partly workshop-routed, the "scaling law" rests on a thin preprint stack — hence the recalibration below._
**Confidence: 73%** (was 84; cut for single-scout concentration + workshop routing + thin scaling-law evidence).
**Falsifiable.** ≥8 accepted main-proceedings papers substantively address evaluation awareness / sandbagging / models-detecting-evaluation (title/abstract-verifiable), AND ≥1 takes a spotlight/oral OR the topic names a workshop title/keynote. (Workshop papers excluded from the count.)

## P3 — RLVR breaks out of verifiable domains via rubric/generative verifiers; GRPO-successors become the default
**Claim.** RL-with-verifiable-rewards extends past math/code into non-verifiable domains (writing/medicine/law) via rubrics and LLM-generated programmatic verifiers, while sequence-level/MoE-stable GRPO successors (GSPO/DAPO) replace vanilla GRPO/PPO.
**Why novel — and why NOW.** NeurIPS 2026 is the **first NeurIPS whose full submission cycle post-dates DeepSeek-R1 (Jan 2025)**; the 2025 cohort largely predated the wave. GRPO and "RLVR" were literally absent (0) from ICLR titles in *both* 2024 and 2025; the rubric/generative-verifier expansion into non-verifiable domains is the genuinely fresh frontier-move.
**Evidence.** ICLR titles GRPO 0→0→73, RLVR 0→0→110 while RLHF *plateaued* 36→120→111 (papercopilot; directional, corroborated by verified RLVR/GRPO orals); GSPO (2507.18071) trained Qwen3-235B; Rubrics-as-Rewards (2507.17746). Scouts 05, 07, 09 (+01, 02).
**Confidence: 85%.**
**Falsifiable.** ≥80 accepted papers contain RLVR/GRPO/"verifiable reward" or a named successor (GSPO/DAPO/Dr.GRPO) in title/abstract (vs near-zero 2024 NeurIPS baseline), AND ≥5 center rubric/generative/programmatic verifiers extending RLVR to non-verifiable domains, AND ≥1 RLVR/reasoning-RL paper wins an oral/award.

## P4 — Agentic RL where the *environment/verifier* is the scarce asset, plus long-horizon credit assignment
**Claim.** The bottleneck shifts from the RL algorithm (commoditized) to environment fidelity + reward checking; multi-turn credit assignment (turn-level/hierarchical/hindsight) becomes a named subfield.
**Why novel.** "Agents" is a truism (#1 ICLR keyword); the fresh content is the economic reframe ("the environment is the product") and credit-assignment-as-subfield, which barely existed pre-R1.
**Evidence.** AgentGym-RL (ICLR 2026 **Oral**); ICML "Understanding Reasoning Collapse in LLM Agent RL" oral (Fei-Fei Li, Yejin Choi); Agentic-RL survey (2509.02547, TMLR, 500+ works); HCAPO hindsight credit assignment (2603.08754); ICML 2026 had 465 agent papers. Scouts 02, 05, 09. _Red-team caveat: partly an industry story (env stacks may not become NeurIPS papers); infra work skews MLSys; scout 05's own number for the credit-assignment half is 68%._
**Confidence: 73%** (was 83).
**Falsifiable.** ≥40 accepted papers train LLM agents end-to-end with RL in interactive/multi-turn environments (not preference-tuning alone), AND ≥6 foreground long-horizon/multi-turn credit assignment as a named problem, AND ≥1 agentic-RL oral/spotlight OR a dedicated agentic-RL/RL-environments workshop on the Sep-29 slate.

## P5 — World models as trainable simulators for agents/robotics, with physics-faithfulness as the open problem
**Claim.** Generative models used as *environments to train and plan inside* (Dreamer-4 imagination training, Genie/Cosmos interactive simulators), not just content generators — and "does the world model respect physics" becomes the central contested question.
**Why novel.** "World models" is old (Ha & Schmidhuber 2018); the fresh 2026 framing is world-model-as-trainable-environment + physics-faithfulness as the falsifiable open problem.
**Evidence (CORRECTED).** ICLR 2026 **"World-In-World" oral** + a 2nd **World Models workshop** (~1,500 attendees); CVPR world-model *share* 3.8%→8.8%; Waymo World Model built on Genie 3; PhyWorld (2605.19242): OOD physics error does NOT improve with scale. Scouts 04, 09, 07.
> ⚠️ **Red-team correction:** the draft cited "CVPR 2026 Best Paper went to a world-model paper" — **FALSE.** CVPR 2026 Best Paper is **D4RT** (4D scene *reconstruction*), not a world model. Anchor removed; confidence cut accordingly. VLA decoupled from this prediction (different community, under-indexes at NeurIPS vs CVPR/CoRL).
**Confidence: 72%** (was 85; flagship anchor falsified + CVPR-share venue-routing).
**Falsifiable.** "World model" in ≥50 accepted titles/abstracts, with ≥10 using a world model as a trainable environment/simulator for agent training/planning/RL (not just video generation), AND (≥1 world-model spotlight/oral OR a World Models workshop runs), AND ≥3 papers explicitly study physics-faithfulness/controllability. (VLA tracked separately, not load-bearing here.)

## P6 — Unified / reasoning-infused multimodal models (understanding AND generation in one backbone)
**Claim.** The dominant multimodal story is no longer understanding-only VLMs but single backbones that both interpret and generate, with the autoregressive-reasoning + diffusion-rendering ("reason, then render") pattern prominent.
**Why novel.** Satisfies the novelty bar the way diffusion-LMs do — not "more multimodal," but the *specific* fresh slice: co-equal generation in one model + reasoning-infused generation. Multimodal/VLM is the **single steepest-rising theme in all of ML** (16%→28%→40% of vision-venue abstracts), and within VLMs, reasoning/instruction tasks rose 13.5%→25%.
**Evidence.** BAGEL (2505.14683, 88% GenEval), Janus-Pro (2501.17811); industry validation GPT-Image-2 + Nano Banana Pro (reasoning-infused generation); VLM survey 2510.09586 (the 16%→40% trajectory). Scouts 04, 07. _(Added on red-team gap analysis — omitting the steepest riser was the forecast's most attackable flaw.)_
**Confidence: 82%.**
**Falsifiable.** Multimodal/VLM is the largest single topic cluster in the accepted-paper distribution (consistent with the 16%→40% trajectory), AND ≥15 accepted papers center unified understanding-and-generation or reasoning-infused image generation (BAGEL/Janus-Pro lineage), AND ≥1 such paper takes a spotlight/oral OR a dedicated workshop/tutorial.

## P7 — Diffusion language models become a recognized alternative to autoregressive text
**Claim.** Discrete/masked diffusion for text/code/reasoning crosses into production scale and grows an RL-post-training sub-literature — diffusion moves off images onto the AR LMs' home turf.
**Why novel.** The *category* predates 2026 (SEDD won an ICML 2024 best paper), so the fresh claim is specifically **100B-scale + production GA + RL-for-dLLM**, not "dLLMs exist."
**Evidence.** Oral status at **both** ICLR and ICML 2026; Mercury GA on Bedrock/Azure; LLaDA scaled 8B→100B in 12 months; RL-for-dLLM lineage (d2/GDPO/DiFFPO). Scouts 04, 07. _Red-team caveat: scouts 04 & 07 both warn dLLMs may under-index at NeurIPS vs ICLR/ICML — the orals are at other venues, partly substitutive._
**Confidence: 71%** (venue-routing risk priced in).
**Falsifiable.** ≥20 accepted main-proceedings papers on diffusion/masked-diffusion *language* models (text/code/reasoning, not image diffusion), AND (≥1 diffusion-LM spotlight/oral OR a dedicated diffusion-LM workshop/tutorial).

## P8 — Hybrid linear-attention architectures beat *pure* SSM ("attention is contested again")
**Claim.** The contrarian call: not the naive "pure Mamba/SSM wins," but the ~3:1 hybrid-linear:full-attention + MoE recipe that frontier open models converged on — while pure-SSM cools.
**Why novel.** The 2024 truism was "Mamba replaces attention"; the 2026 finding is the opposite — pure-SSM cooled and a *specific converged hybrid recipe* won across independent labs.
**Evidence (verified).** **Mamba-3 is an ICLR 2026 Oral**; "linear attention" ICLR titles 3→9→23; cross-lab convergence (Kimi Linear, Qwen3.5, Olmo Hybrid, Gated DeltaNet-2); calibrator "The End of Transformers?" (2510.05364): no pure sub-quadratic model competitive at 14–70B. Scouts 03, 07, 09. _Red-team caveat: architecture/kernel work skews MLSys; Mamba-3 itself is (mostly) pure-SSM, so the "pure-SSM cooling" half is contested by its own oral._
**Confidence: 74%.**
**Falsifiable.** ≥30 accepted main-proceedings papers on hybrid/linear-attention/sub-quadratic LLM architectures, AND ≥2 of {Mamba-3, Kimi Linear/KDA, Olmo Hybrid, Gated DeltaNet-2, Qwen3-Next} appear as named baselines across ≥3 papers, AND among papers proposing a *new backbone*, those using interleaved/hybrid attention outnumber those proposing a pure-SSM/pure-linear backbone.

## P9 — Interpretability after SAEs: transcoders/CLTs, model diffing, parameter decomposition
**Claim.** Sparse autoencoders — the 2024 interp darling — are reframed as a plateaued baseline, superseded by cross-layer transcoders (production circuit tracing), crosscoder-based model diffing, and parameter-space decomposition.
**Why novel.** A *reversal* of the 2024 SAE hype: "the two biggest interp labs moved off SAEs."
**Evidence (verified-quality).** "Sanity Checks for SAEs" (2602.14111): SAEs recover ~9% of ground-truth features, barely beat random; **Anthropic's production stack is now CLT-based** (transformer-circuits.pub May-2026 update); OpenAI weight-sparse transformers (2511.13653); DeepMind deprioritized SAEs. 3rd ICML 2026 mech-interp workshop feeds the pipeline. Scout 06.
**Confidence: 77%.**
**Falsifiable.** ≥10 accepted papers use transcoders/cross-layer-transcoders, crosscoders/model-diffing, or parameter decomposition as their core method (vs SAEs), AND ≥1 SAE-critique-or-successor paper takes a spotlight/oral OR a mech-interp workshop runs with these as named themes.

## P10 — AI-for-mathematics with formal verification (LLM + Lean solving open problems)
**Claim.** The marquee scientific-breakthrough story of 2026: LLM+formal-prover systems producing machine-verified, genuinely novel mathematics — present at NeurIPS at the spotlight/keynote layer.
**Why novel.** 2024/25 LLMs did informal CoT math; 2026 systems produce *machine-verified open-problem results*. The boldest, highest-prestige pick — and the one a forecast omits at its peril (a reader will remember "AI solved Erdős problems").
**Evidence.** AlphaProof Nexus (2605.22763): Gemini + Lean resolved 9 open Erdős problems, machine-verified; a Gowers-verified Erdős disproof; FrontierMath v2 (Tier-4 ~73–88%); open-prover race (Goedel-Prover-V2, Seed-Prover). Tailwind: **IMO 2026 (July) lands AI-gold headlines squarely in the NeurIPS review window.** Scouts 07, 09. _Red-team caveat: low volume — a spotlight/keynote bet, not a paper flood; criterion written around recognition, not count._
**Confidence: 65%** (the bold, high-variance, high-prestige pick).
**Falsifiable.** ≥1 result reporting newly machine-verified mathematics (open problem or comparable) is presented at NeurIPS 2026 as an oral/keynote/invited talk, OR an AI-for-math / formal-reasoning workshop runs, AND FrontierMath / Lean-prover benchmarks are cited across ≥15 accepted papers.

---

## WATCHLIST (strong contenders that just missed — transparent about close calls)
- **Efficient reasoning / overthinking + inference-aware scaling laws — 78%.** Scout 01's highest-confidence theme; strongest institutional proxy (NeurIPS 2025 Efficient Reasoning workshop, 1,000+ attendees). Lost on novelty ("least novel" — it's an inversion of a 2025 theme) + overlap with the reasoning lane. T² overtraining-optimal law (2604.01411).
- **Science of peer review / the AI-assisted-reviewing RCT — 76%.** Striking + uniquely NeurIPS-specific (the conference is running a 3-arm RCT on LLM-as-reviewer; 178 AI-generated position papers desk-rejected). Lost a top-10 slot to avoid a 3rd eval/meta pick. Criterion: ≥3 accepted/position papers on LLM-in-review or AI-paper-detection (the RCT-results clause is NOT load-bearing — may not resolve by Dec 2026).
- **Test-time training / adaptation (continual-at-inference) — 67%.** "Freshest inflection" (scout 09); ARC's top tier all uses it; theory bridge "TTT ≈ linear attention" (2602.21204). Lost on thin single-scout evidence + keyword contamination with pre-LLM vision TTA.
- **Native FP4 *training* (NVFP4/MXFP4) — 68%.** Verified (Nemotron 3 Ultra 550B pretrained in NVFP4; Quartet II at ICML 2026) but skews MLSys → under-indexes at NeurIPS.
- **Reasoning-aware KV-cache compression (compress the CoT) — 75%.** ThinKV is an ICLR 2026 Oral; narrow (a technique, not a theme) + systems-routed.
- **Parametric / RL-learned agent memory (post-RAG) — 68%.** Memory-R1, Evo-Memory (DeepMind), MemoryArena; ICLR MemAgents workshop. Overlaps P4 + the TTT memory-as-weights idea.
- **Latent / looped (recurrent-depth) reasoning — 58%.** High novelty but single-anchor (Ouro) + unverified follow-ons + an active critique that may deflate it before December. **Cut from the 10 by all three critics.**

## Red-team changelog (what the adversarial pass changed)
1. **Factual correction:** removed the false "CVPR 2026 Best Paper = world-model paper" anchor from P5 (it's D4RT, 4D reconstruction). P5 85→72.
2. **Added the missing steepest-riser:** multimodal (unified/reasoning-infused) entered as P6, displacing latent reasoning.
3. **Cut latent/looped reasoning** to the watchlist (thinnest evidence; all 3 critics).
4. **Recalibrated confidence down** for aggregation inflation / echo-not-independence / over-trust of unverified 26XX preprints: P2 84→73, P4 83→73, P5 85→72, P7(diffusion) 77→71.
5. **Rewrote every criterion** as share/rank/recognition against a ~7,000-accept program (raw "≥6/≥10" bars were trivially-true); restricted counts to main archival proceedings; operationalized vague clauses (P5 physics phrase, P8 "hybrids outnumber pure-SSM"); decoupled VLA from world models.
6. **Kept verified anchors load-bearing, never SEO-suspect ones:** "Claude Fable 5" is real, but no criterion depends on any unverified model name or arXiv ID. Verified hard anchors concentrate in P1/P3/P8/P9.

## Paper-radar (standing rule)
- **Pre-registered forecast as meta-science.** This locked, dated, criterion-based forecast → timestamp it as an arXiv preprint = pre-registration; a post-Dec-2026 resolution paper scores the hit-rate vs a naive "extrapolate-last-year" baseline. Venue: a Science-of-DL / meta-science / ML-evaluation workshop. Gate: must beat the naive baseline AND resolve well. _This is itself an instance of P1 (evals-as-science) — fitting._
