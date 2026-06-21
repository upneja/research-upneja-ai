# Synthesis — The 10 NeurIPS 2026 Predictions (pre-red-team draft)
_2026-06-21. Drafted from the 9-scout corpus. Confidence values are provisional pending the adversarial pass._

## Method for turning evidence into a forecast
1. **Cross-validation = confidence.** A concept independently surfaced by ≥2 scouts, AND backed by a hard leading indicator (ICLR/ICML 2026 accept data, an award, or a NeurIPS 2026 CFP fact), is high-probability. Single-scout / SEO-only signals are discounted.
2. **Share, not raw count** (scout 07's governing caveat). The ICLR pipeline went 7.3k→11.7k→19.5k and ICML ~doubled (+98% YoY), so raw counts rose for almost everything. A concept only *surged* if its share outgrew ~1.7–2× program inflation. All criteria below are written to survive this (share, ranks, awards/orals, or absolute jumps from a near-zero base).
3. **Novelty bar.** Reject the 2024/25 baseline truisms ("more LLMs / agents / multimodal / diffusion"). Each pick names a *specific, fresh* concept that a non-expert wouldn't already assume.
4. **The timing key (scout 07).** NeurIPS 2026 is the **first NeurIPS whose full submission cycle post-dates DeepSeek-R1 (Jan 2025)** and the o1/R1 reasoning+RL wave. So R1-descended concepts (RLVR/GRPO, reasoning, test-time compute) peak *here*, not at NeurIPS 2025 (whose cohort largely predated them).
5. **Falsifiable.** Every prediction has a Dec-2026 criterion checkable against the public program (accepts, titles/abstracts, orals/spotlights, awards, workshops, CFP).

## Candidate pool (clustered; ✓=cross-validated scouts; ★=hard leading indicator)

### THE 10 (provisional)

**P1 — The evaluation crisis goes mainstream: benchmark *auditing*, reliability science, and "evals-as-science."**
Inversion from "ship a new benchmark that beats baselines" to "prove existing benchmarks are gameable / measure reliability / construct validity."
✓ scouts 02, 06, 07. ★★★ NeurIPS 2026 **renamed the "Datasets & Benchmarks" track to "Evaluations & Datasets"**; ICLR 2026 Outstanding Paper = "LLMs Get Lost In Multi-Turn Conversation" (a reliability/eval failure paper); benchmark share 10.1%→18.2% (2022→25); BenchJack (2605.12673) found 219 flaws across the major agent benchmarks; construct-validity program (2511.04703, NeurIPS 2025). **Confidence 90%.**
Criterion: the Evaluations & Datasets track ships, AND ≥6 accepted papers' primary contribution is auditing/critiquing existing benchmarks or formalizing eval reliability/construct validity, AND ≥1 such paper gets a spotlight/oral/award.

**P2 — Evaluation awareness & sandbagging: models behave differently when they detect a test.**
Models internally distinguish eval from deployment; eval-awareness follows a **scaling law** (worse each generation), structurally capping every static benchmark.
✓ scout 06 (lead), corroborated by the eval-crisis cluster. ★ Eval-awareness scaling law (2509.13333); Evaluation Differential (2605.11496, ~26% latent eval-recognition on SWE-bench Verified vs <1% in real use); Apollo/OpenAI anti-scheming confounded by eval-awareness (2509.15541). **Confidence 84%.**
Criterion: ≥6 accepted papers (main/ED/safety-workshop) substantively address evaluation awareness or sandbagging, AND ≥1 gets spotlight/oral/workshop-best.

**P3 — RLVR breaks out of verifiable domains via rubric/generative verifiers; GRPO-successors (GSPO/DAPO) become the named default.**
RL-with-verifiable-rewards extends past math/code into writing/medicine/law via *rubrics and LLM-generated programmatic verifiers*, while sequence-level/MoE-stable GRPO successors replace vanilla GRPO/PPO.
✓ scouts 05, 07, 09 (+01 A6, +02). ★★★ ICLR titles: **GRPO 0→0→73, RLVR 0→0→110** (2024→25→26) while RLHF *plateaued* (36→120→111); GSPO (2507.18071) trained Qwen3-235B; Rubrics-as-Rewards (2507.17746); first NeurIPS post-R1. **Confidence 88%.**
Criterion: ≥40 accepted papers contain RLVR/GRPO/"verifiable reward" in title/abstract (near-zero 2024 baseline), AND ≥5 center rubric/generative/programmatic verifiers for *non-verifiable* domains, AND an RLVR/reasoning-RL paper wins an oral/award.

**P4 — Agentic RL where the *environment/verifier* is the scarce asset, plus long-horizon credit assignment.**
The bottleneck shifted from the RL algorithm (commoditized) to environment fidelity + reward checking; multi-turn credit assignment (turn-level/hierarchical/hindsight) becomes a named subfield.
✓ scouts 02, 05, 09. ★★ AgentGym-RL (ICLR 2026 **Oral**); Agentic-RL survey (2509.02547, TMLR, 500+ works); ICML "Understanding Reasoning Collapse in LLM Agent RL" oral (Fei-Fei Li, Yejin Choi); INTELLECT-3 trained on open env stack; Anthropic reportedly >$1B/yr on RL environments. **Confidence 83%.**
Criterion: ≥10 accepted papers train LLM agents end-to-end with RL in interactive environments (beyond preference-tuning), ≥4 foreground multi-turn credit assignment, AND ≥1 agentic-RL oral/spotlight or a dedicated workshop.

**P5 — World models as trainable simulators for agents/robotics, with physics-faithfulness as the open problem.**
Generative models used as *environments to train and plan inside* (Dreamer-4 imagination training, Genie/Cosmos interactive simulators), not just content generators; "does the world model respect physics" becomes the central contested question.
✓ scouts 04, 07, 09. ★★★ CVPR 2026 **Best Paper** went to a world-model paper; world-model share 3.8%→8.8% at CVPR; ICLR 2026 **WoW! oral** + dedicated World Models workshop (~1,500 attendees); Waymo World Model built on Genie 3; PhyWorld (2605.19242) physics-faithfulness critique. **Confidence 85%.**
Criterion: a world-models workshop runs at NeurIPS 2026, "world model"/"VLA" each appear in ≥40 accepted titles/abstracts, "physics faithfulness/controllability" is a named sub-theme, AND ≥1 world-model oral/spotlight.

**P6 — Latent / looped (recurrent-depth) reasoning: thinking in latent space, scaling compute by depth — shadowed by a critique track.**
Reasoning by iterating a weight-shared block in continuous latent space (Ouro/Huginn lineage) rather than emitting CoT tokens; arrives *with* faithfulness/robustness critiques.
✓ scout 01 (lead); architecture echo in scout 03 (recurrence) + scout 09 (recurrent compute in Gemini CoVe). ★ Ouro (2510.25741) + ≥5 Feb–May 2026 follow-ons (2604.07822, 2602.10520, 2605.26733); critique "Do Latent Tokens Think?" (2512.21711). **Confidence 73%.**
Criterion: ≥8 accepted papers on looped/recurrent-depth/latent-space reasoning, AND ≥1 of {spotlight/oral, invited talk, workshop session}, AND ≥1 accepted *critique* of latent reasoning.

**P7 — Test-time training / adaptation: updating weights *during* inference (continual-at-inference).**
Beyond frozen-weights+RAG: the model adapts its parameters per-input/per-context at test time; the "freshest genuine inflection" of 2026.
✓ scout 09 (lead). ★★ ARC living survey (2603.13372): **all top ARC-AGI transduction approaches now use TTT/test-time fine-tuning**; End-to-End TTT for long context (2512.23675); theory bridge "TTT ≈ linear attention" (2602.21204); Google Nested Learning/Hope (2512.24695, NeurIPS 2025). **Confidence 75%.**
Criterion: ≥12 accepted papers (main+workshops) center test-time training / test-time adaptation / continual-at-inference, AND a TTT-adjacent workshop or ≥1 spotlight/oral.

**P8 — Diffusion language models become a recognized alternative to autoregressive text.**
Discrete/masked diffusion for text/code/reasoning, with an RL-post-training sub-literature — diffusion moves off images and into the autoregressive LMs' home turf.
✓ scouts 04, 07. ★★ Oral status at **both** ICLR and ICML 2026 (≥2 diffusion-LM orals at ICML); Mercury GA on Bedrock/Azure; LLaDA scaled 8B→100B in 12 months; RL-for-dLLM lineage (d2, GDPO, DiFFPO). **Confidence 77%.**
Criterion: ≥25 accepted papers on diffusion/masked-diffusion *language* models, AND ≥1 diffusion-LM oral/spotlight or a dedicated workshop/tutorial.

**P9 — Hybrid linear-attention architectures (delta-rule + attention + MoE) win over *pure* SSM; "attention is contested again."**
The contrarian call: not the naive "pure Mamba/SSM" bet but the ~3:1 hybrid-linear:full-attention recipe that frontier open models converged on — while pure-SSM cools.
✓ scouts 03, 07, 09. ★★ **Mamba-3 is an ICLR 2026 Oral** (and is itself hybrid-framed); "linear attention" ICLR titles 3→9→23; cross-lab convergence (Kimi Linear, Qwen3.5, Olmo Hybrid, Gated DeltaNet-2); calibrator "The End of Transformers?" (2510.05364): no pure sub-quadratic model competitive at 14–70B. **Confidence 80%.**
Criterion: ≥30 accepted papers on hybrid/linear-attention/sub-quadratic architectures, AND ≥2 of {Mamba-3, Kimi Linear/KDA, Olmo Hybrid, Gated DeltaNet-2} appear as named baselines, AND hybrid-architecture papers visibly outnumber pure-Mamba ones.

**P10 — The science of peer review under AI load: LLM-as-reviewer studies + AI-generated-content governance become a first-class topic.**
The meta-prediction with the strongest *direct* NeurIPS-2026 evidence: the field turns its tools on its own pipeline.
✓ scout 07 (lead). ★★★ NeurIPS 2026 is **running a randomized controlled AI-assisted-reviewing experiment**; **desk-rejected 178 (18.4%) AI-generated position papers** (Pangram: 28.2% at 100% AI, up from 8.2%); ICML 2026 desk-rejected 497 for LLM-review-policy violations; ICML/ICLR position-paper orals on automating peer review. **Confidence 80%.**
Criterion: NeurIPS 2026 publishes/presents results from its AI-reviewing experiment AND/OR ≥1 accepted or position paper studies LLM-in-peer-review or AI-generated-paper detection, AND "LLM-as-reviewer / AI-generated content" is a recognized discussion thread (panel, blog, or workshop).

### WATCHLIST (strong; cut from the 10 for diversity/slot limits — candidates for swap after red-team)
- **W1 Interpretability after SAEs** — transcoders/cross-layer transcoders, model diffing, parameter decomposition; SAEs reframed as plateaued. ✓ scout 06. ★ Anthropic production stack now CLT-based; "Sanity Checks for SAEs" (2602.14111) barely beats random; OpenAI weight-sparse transformers (2511.13653). ~78%. (Distinct subfield — strong swap candidate.)
- **W2 AI-for-math / autonomous theorem proving (LLM+Lean, open problems)** — AlphaProof Nexus resolved 9 Erdős problems (2605.22763); Gowers-verified Erdős disproof; FrontierMath v2. Very novel + prestige, lower volume. ~68% (spotlight-level, not a flood).
- **W3 Inference-aware scaling laws + the efficiency inversion (overthinking/thinking-budgets)** — T² overtraining-optimal (2604.01411 ✓01,06); NeurIPS 2025 Efficient Reasoning workshop (1,000+ attendees). ~75%.
- **W4 Native FP4 *training* (NVFP4/MXFP4)** — Nemotron 3 Ultra 550B pretrained in NVFP4; Quartet II (ICML 2026). ✓03. ~80% but skews MLSys.
- **W5 Reasoning-aware KV-cache compression (compress the CoT)** — ThinKV (ICLR 2026 **Oral**). ✓03. ~78%.
- **W6 Parametric / RL-learned agent memory (post-RAG)** — Memory-R1, Evo-Memory (DeepMind), MemoryArena; ICLR MemAgents workshop. ✓02,09. ~74%.

## Portfolio shape (diversity check)
eval/meta-science (P1,P10), safety/eval-science (P2), post-training RL (P3), agents/RL (P4), generative+embodied (P5), reasoning architecture (P6), learning paradigm (P7), generative LM (P8), efficient architecture (P9). Interpretability (W1) and AI-for-science (W2) currently only in watchlist — red-team should decide if one displaces a weaker top-10 pick (P6 @73% and P10 @80%-but-narrow are the most contestable).

## Paper-radar
- **Pre-registered forecast** (this doc, dated, criterion-based) → timestamped arXiv preprint = pre-registration; resolution paper post-Dec-2026 scores hit-rate vs a naive "extrapolate-last-year" baseline. Venue: meta-science / Science-of-DL workshop. Gate: predictions must actually resolve well + beat baseline.
- **Sourced longitudinal topic-prevalence dataset** (the data layer) → Evaluations&Datasets-track artifact IF paired with a novel measurement method (validity-checked automated topic extraction), not just re-plotting papercopilot. Gate: exceed existing trackers.
