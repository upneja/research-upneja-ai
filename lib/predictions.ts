// ---------------------------------------------------------------------------
// predictions.ts — the locked 10 NeurIPS 2026 forecasts + watchlist + method.
// Derived from research/10-synthesis.md and FULLY reconciled with the 3-critic
// red-team (research/11-redteam-novelty.md, 11-redteam-prob-falsif.md,
// 12-final-predictions.md):
//   - FIXED a factual error: the draft cited "CVPR 2026 Best Paper = world-model
//     paper" — it is D4RT, a 4D reconstruction method. Anchor removed; world-
//     models now leans on the verified ICLR World-In-World oral + workshop.
//   - ADDED multimodal (the steepest-rising theme, 16%->40%), the gap critic 3
//     called the biggest credibility risk; inference-aware scaling moved to the
//     watchlist to make room.
//   - Recalibrated confidence down (aggregation inflation) and rewrote criteria
//     as share/rank/recognition against a ~7,000-accept program.
// noveltyScore (0-100) is the relative freshness used for the Frontier Plot x-axis.
// ---------------------------------------------------------------------------

export type Prediction = {
  rank: number;
  id: string;
  lane: string;
  title: string;
  thesis: string;
  novelty: "genuinely novel" | "fresh 2026" | "sharpened";
  confidence: number; // %
  noveltyScore: number; // 0-100, drives the Frontier Plot
  evidence: string[]; // each bullet leads with the hardest anchor
  criterion: string; // falsifiable, checkable Dec 2026
};

export const predictions: Prediction[] = [
  {
    rank: 1,
    id: "eval-science",
    lane: "Evaluation / safety",
    title: "Evaluation becomes a science: sandbagging, eval-awareness, and benchmark auditing",
    thesis:
      "The field inverts from shipping new benchmarks to interrogating them. Models behave differently when they detect a test, eval-awareness follows a scaling law that structurally caps every static benchmark, and auditing / reliability / construct-validity becomes the dominant mode — institutionally blessed.",
    novelty: "genuinely novel",
    confidence: 87,
    noveltyScore: 80,
    evidence: [
      "NeurIPS 2026 renamed the “Datasets & Benchmarks” track to “Evaluations & Datasets” — a direct institutional signal, soliciting auditing and negative results.",
      "Eval-awareness scaling law (2509.13333): models recognize evaluation more each generation. Evaluation Differential (2605.11496): ~26% latent eval-recognition on SWE-bench Verified vs <1% in real use.",
      "ICLR 2026 Outstanding Paper went to “LLMs Get Lost In Multi-Turn Conversation,” a reliability-failure paper. BenchJack (2605.12673) found 219 flaws across the major agent benchmarks.",
      "Benchmark-paper share rose 10.1% → 18.2% (2022–25); anti-scheming results (Apollo/OpenAI, 2509.15541) are now confounded by eval-awareness.",
    ],
    criterion:
      "The Evaluations & Datasets track ships, AND ≥20 accepted papers' primary contribution is auditing existing benchmarks / contamination detection / eval-awareness / construct validity (out of a ~7,000-paper program), AND ≥1 gets a spotlight, oral, or award.",
  },
  {
    rank: 2,
    id: "rlvr-rubrics",
    lane: "Post-training / RL",
    title: "RLVR escapes verifiable domains via rubric and generative verifiers; GRPO-successors become the default",
    thesis:
      "RL-with-verifiable-rewards extends past math and code into writing, medicine, and law through rubrics and LLM-generated programmatic verifiers, while sequence-level / MoE-stable GRPO successors (GSPO, DAPO) replace vanilla GRPO and PPO.",
    novelty: "genuinely novel",
    confidence: 85,
    noveltyScore: 72,
    evidence: [
      "ICLR title counts: GRPO 0 → 0 → 73 and RLVR 0 → 0 → 110 (2024→26), while RLHF plateaued (36 → 120 → 111). NeurIPS 2026 is the first full cycle post-DeepSeek-R1.",
      "GSPO (2507.18071) trained Qwen3-235B; Rubrics-as-Rewards (2507.17746) extends verifiable rewards to non-verifiable domains.",
      "Cross-validated by scouts 05, 07, 09 (post-training, conference indicators, frontier labs).",
    ],
    criterion:
      "≥80 accepted papers carry RLVR / GRPO / “verifiable reward” or a named successor (GSPO/DAPO) in title or abstract (near-zero 2024 baseline), AND ≥5 center rubric / generative verifiers for non-verifiable domains, AND an RLVR or reasoning-RL paper wins an oral / award.",
  },
  {
    rank: 3,
    id: "agentic-rl-env",
    lane: "Agents / RL",
    title: "Agentic RL where the environment, not the algorithm, is the scarce asset",
    thesis:
      "The bottleneck shifts from the RL algorithm (now commoditized) to environment fidelity and reward checking, and long-horizon credit assignment (turn-level, hierarchical, hindsight) becomes a named subfield.",
    novelty: "sharpened",
    confidence: 74,
    noveltyScore: 68,
    evidence: [
      "AgentGym-RL is an ICLR 2026 Oral; an ICML 2026 oral, “Understanding Reasoning Collapse in LLM Agent RL” (Fei-Fei Li, Yejin Choi), centers the problem.",
      "Agentic-RL survey (2509.02547, TMLR) already catalogs 500+ works; ICML 2026 had 465 agent papers; Anthropic reportedly spends >$1B/yr on RL environments.",
      "Cross-validated by scouts 02, 05, 09. Caveat: partly an industry story; infra work skews to MLSys.",
    ],
    criterion:
      "≥40 accepted papers train LLM agents end-to-end with RL in interactive environments (beyond preference tuning), ≥6 foreground long-horizon credit assignment as a named problem, AND ≥1 agentic-RL oral / spotlight or a dedicated workshop.",
  },
  {
    rank: 4,
    id: "world-models",
    lane: "Generative / embodied",
    title: "World models as trainable simulators, with physics-faithfulness as the open problem",
    thesis:
      "Generative models are used as environments to train and plan inside (Dreamer-4-style imagination training, Genie/Cosmos interactive simulators), not just as content generators — and “does the world model respect physics” becomes the central contested question.",
    novelty: "genuinely novel",
    confidence: 72,
    noveltyScore: 70,
    evidence: [
      "ICLR 2026 ran a “World-In-World” oral plus a dedicated World Models workshop (~1,500 attendees); CVPR world-model share rose 3.8% → 8.8%.",
      "Waymo's world model is built on Genie 3; PhyWorld (2605.19242) makes physics-faithfulness the explicit critique — OOD physics error does not improve with scale.",
      "Cross-validated by scouts 04, 07, 09. (The draft's “CVPR Best Paper” anchor was removed — that award went to D4RT, a 4D reconstruction method, not a world model.)",
    ],
    criterion:
      "“World model” appears in ≥50 accepted titles/abstracts with ≥10 using it as a trainable simulator for agent training/planning (not just video generation), AND ≥1 world-model spotlight/oral or a World Models workshop runs, AND ≥3 papers explicitly study physics-faithfulness / controllability. (VLA tracked separately — it under-indexes at NeurIPS vs CVPR/CoRL.)",
  },
  {
    rank: 5,
    id: "unified-multimodal",
    lane: "Multimodal",
    title: "Unified, reasoning-infused multimodal: one backbone that reasons, then renders",
    thesis:
      "The dominant multimodal story stops being understanding-only VLMs and becomes single backbones that both interpret and generate — an autoregressive-reasoning core that plans, then a diffusion head that renders. Multimodal is the single steepest-rising theme in ML.",
    novelty: "fresh 2026",
    confidence: 82,
    noveltyScore: 66,
    evidence: [
      "Vision-language / multimodal rose 16% → 28% → 40% of vision-venue abstracts (CVPR+ICLR+NeurIPS, 2023–25) — the largest, steepest share gain of any theme.",
      "BAGEL (2505.14683) hits 88% GenEval; Janus-Pro (2501.17811) unifies understanding and generation; within VLM papers, reasoning/instruction tasks rose 13.5% → 25%.",
      "Industry validation: reasoning-infused image generators (reason-then-render) shipped across frontier labs in 2026. Added on the red-team gap analysis — omitting the steepest riser was the forecast's most attackable flaw.",
    ],
    criterion:
      "Multimodal / VLM is the largest single topic cluster among accepted papers (consistent with the 16%→40% trajectory), AND ≥15 accepted papers center unified understanding-and-generation or reasoning-infused image generation (BAGEL / Janus-Pro lineage), AND ≥1 takes a spotlight / oral or a dedicated workshop.",
  },
  {
    rank: 6,
    id: "diffusion-lm",
    lane: "Generative LM",
    title: "Diffusion language models become a recognized alternative to autoregressive text",
    thesis:
      "Discrete / masked diffusion moves off images and onto the autoregressive LMs' home turf — text, code, reasoning — now at 100B scale and with its own RL post-training sub-literature.",
    novelty: "sharpened",
    confidence: 71,
    noveltyScore: 64,
    evidence: [
      "Oral status at both ICLR and ICML 2026 (≥2 diffusion-LM orals at ICML).",
      "Mercury reached GA on Bedrock/Azure; LLaDA scaled 8B → 100B in 12 months; an RL-for-dLLM lineage emerged (d2, GDPO, DiFFPO).",
      "Cross-validated by scouts 04, 07. Venue caveat: those orals are at ICLR/ICML — dLLMs may index higher there than at NeurIPS.",
    ],
    criterion:
      "≥20 accepted main-proceedings papers on diffusion / masked-diffusion language models (text/code, not image diffusion), AND (≥1 diffusion-LM oral / spotlight OR a dedicated workshop / tutorial).",
  },
  {
    rank: 7,
    id: "hybrid-attention",
    lane: "Architecture",
    title: "Hybrid linear-attention beats pure SSM; attention is contested again",
    thesis:
      "The contrarian call: not the naive “pure Mamba/SSM wins” bet but the ~3:1 hybrid linear-attention-to-full-attention recipe that frontier open models converged on — while pure SSM cools.",
    novelty: "genuinely novel",
    confidence: 74,
    noveltyScore: 78,
    evidence: [
      "Mamba-3 is an ICLR 2026 Oral; “linear attention” in ICLR titles went 3 → 9 → 23.",
      "Cross-lab convergence on hybrids: Kimi Linear, Qwen3.5, Olmo Hybrid, Gated DeltaNet-2.",
      "Calibrator “The End of Transformers?” (2510.05364): no pure sub-quadratic model is competitive at 14–70B. Cross-validated by scouts 03, 07, 09.",
    ],
    criterion:
      "≥30 accepted papers on hybrid / linear-attention / sub-quadratic architectures, AND ≥2 of {Mamba-3, Kimi Linear/KDA, Olmo Hybrid, Gated DeltaNet-2, Qwen3-Next} appear as named baselines, AND among new-backbone papers, hybrids outnumber pure-SSM ones.",
  },
  {
    rank: 8,
    id: "interp-after-saes",
    lane: "Interpretability",
    title: "Interpretability after SAEs: transcoders, circuit tracing, parameter decomposition",
    thesis:
      "Sparse autoencoders are reframed as plateaued; the frontier moves to cross-layer transcoders, model diffing, and parameter decomposition as the working tools of mechanistic interpretability.",
    novelty: "genuinely novel",
    confidence: 77,
    noveltyScore: 80,
    evidence: [
      "Anthropic's production interpretability stack is now cross-layer-transcoder (CLT) based, not SAE-based.",
      "“Sanity Checks for SAEs” (2602.14111) shows SAEs recover ~9% of ground-truth features, barely beating random; OpenAI weight-sparse transformers (2511.13653) point at parameter-level decomposition.",
      "Lead from scout 06 (interpretability / eval); DeepMind publicly deprioritized SAE research.",
    ],
    criterion:
      "≥10 accepted papers center post-SAE interpretability (transcoders / CLTs / model diffing / parameter decomposition), AND SAE-replacement is an explicit framing in ≥2 of them, AND ≥1 interpretability spotlight / oral or named mech-interp workshop.",
  },
  {
    rank: 9,
    id: "ai-for-math",
    lane: "AI for science",
    title: "AI for mathematics: autonomous theorem proving cracks open problems",
    thesis:
      "LLM-plus-Lean systems move from competition problems to genuinely open ones — the single freshest, highest-prestige result of the 2026 cycle. Lower volume than the rest, but spotlight-grade.",
    novelty: "genuinely novel",
    confidence: 65,
    noveltyScore: 95,
    evidence: [
      "AlphaProof Nexus resolved 9 open Erdős problems, machine-verified (2605.22763); a Gowers-verified Erdős disproof landed in 2026.",
      "FrontierMath v2 (Tier-4 ~73–88%) and the IMO 2026 (July) cycle create a mid-review tailwind that surfaces right before decisions.",
      "Lead from scouts 07, 09. Volume risk: expect spotlight prestige, not a flood of accepts — the criterion is recognition-shaped.",
    ],
    criterion:
      "≥1 newly machine-verified mathematics result (open or research-level) is presented as an oral / keynote / invited talk, OR an AI-for-math / formal-reasoning workshop runs, AND FrontierMath / Lean-prover benchmarks are cited across ≥15 accepted papers.",
  },
  {
    rank: 10,
    id: "ttt",
    lane: "Learning paradigm",
    title: "Test-time training: updating weights during inference",
    thesis:
      "Beyond frozen weights plus RAG, the model adapts its own parameters per-input or per-context at inference time — the freshest genuine inflection of 2026, now with a theory spine connecting it to linear attention.",
    novelty: "genuinely novel",
    confidence: 70,
    noveltyScore: 84,
    evidence: [
      "The ARC living survey (2603.13372) reports all top ARC-AGI transduction approaches now use test-time training / fine-tuning.",
      "A theory bridge, “TTT ≈ linear attention” (2602.21204), connects it to the architecture lane; End-to-End TTT for long context (2512.23675); Google Nested Learning / Hope (2512.24695).",
      "Lead from scout 09. Caveat: thin single-scout sourcing, and the keyword overlaps pre-LLM vision test-time adaptation.",
    ],
    criterion:
      "≥12 accepted main-proceedings papers center test-time training / weight-adaptation / continual-at-inference for sequence models or LLMs specifically (excluding classic vision test-time augmentation), AND ≥1 spotlight / oral or a TTT-adjacent workshop.",
  },
];

export type Watch = { id: string; title: string; confidence: number; noveltyScore: number; why: string };
export const watchlist: Watch[] = [
  { id: "inference-scaling", title: "Inference-aware scaling laws & the efficiency inversion", confidence: 76, noveltyScore: 50, why: "Strongest workshop proxy (NeurIPS 2025 Efficient Reasoning drew 1,000+); T² overtraining-optimal (2604.01411) reverses Chinchilla. Lost the slot to multimodal — it is the least novel of the contenders and overlaps the reasoning lane." },
  { id: "peer-review-science", title: "The science of peer review under AI load", confidence: 76, noveltyScore: 74, why: "Strongest direct NeurIPS evidence — a randomized AI-reviewing experiment; 178 AI-generated position papers desk-rejected — but narrow, near-self-fulfilling, and held out to avoid a third eval/meta slot." },
  { id: "latent-reasoning", title: "Latent / looped (recurrent-depth) reasoning", confidence: 58, noveltyScore: 88, why: "Genuinely novel but evidence-thin (single verified anchor, Ouro) with unverified follow-ons, and an incoming critique track may deflate it before December. Cut from the 10 by all three critics." },
  { id: "fp4-training", title: "Native FP4 training (NVFP4 / MXFP4)", confidence: 68, noveltyScore: 72, why: "Nemotron pretrained 550B in NVFP4; Quartet II at ICML 2026 — but skews to MLSys venues, so it under-indexes at NeurIPS." },
  { id: "kv-compression", title: "Reasoning-aware KV-cache compression", confidence: 75, noveltyScore: 70, why: "ThinKV is an ICLR 2026 Oral, but it is a technique, not a theme — too narrow for a top-ten slot." },
  { id: "agent-memory", title: "Parametric / RL-learned agent memory (post-RAG)", confidence: 68, noveltyScore: 64, why: "Memory-R1, Evo-Memory, an ICLR MemAgents workshop — but memory-as-weights overlaps test-time training (#10)." },
];

export const method = [
  { k: "Cross-validation = confidence", v: "A concept independently surfaced by ≥2 of the 9 research scouts AND backed by a hard leading indicator (ICLR/ICML 2026 accept data, an award, or a NeurIPS 2026 CFP fact) is high-probability. Single-scout or SEO-only signals are discounted." },
  { k: "Share, not raw count", v: "The ICLR pipeline went 7.3k → 11.7k → 19.5k and ICML roughly doubled, so raw counts rose for almost everything. A concept only surged if its share outgrew ~1.7–2× program inflation. Every criterion is written in shares, ranks, awards, or jumps from a near-zero base, against a ~7,000-accept program." },
  { k: "Novelty bar", v: "Reject the 2024/25 truisms (“more LLMs / agents / multimodal”). Each pick names a specific, fresh concept a non-expert wouldn't already assume." },
  { k: "The timing key", v: "NeurIPS 2026 is the first NeurIPS whose full submission cycle post-dates DeepSeek-R1 (Jan 2025). R1-descended concepts (RLVR, reasoning-RL, test-time compute) peak here, not at NeurIPS 2025." },
  { k: "Adversarial before locking", v: "Three independent critics (novelty, probability/evidence, falsifiability) attacked the draft. They caught a factual error (a misattributed CVPR best paper), a missing theme (multimodal), and systematic over-confidence — all corrected before these ten were locked." },
  { k: "Falsifiable", v: "Every prediction carries a December-2026 criterion checkable against the public program: accepts, titles, abstracts, orals/spotlights, awards, workshops, and the CFP." },
];

export const honesty = [
  "n is far too small to calibrate. Ten predictions, of which about five are beyond-baseline, cannot support a claim that the confidences are well-calibrated. They are stated for ranking and transparency, not as a calibration result.",
  "Only the ten count. The six-item watchlist and the cut concepts are sealed as non-scoring and cannot be promoted after December, whatever happens.",
  "The forecast reads lab and arXiv momentum that the public-conference baseline cannot, so part of any edge is more inputs, not better foresight. We say so rather than hide it.",
  "The backtest matching was done by one author who saw both the outcomes and the prior signals, so it is a judgment estimate, audited by two red-teams and corrected down, not a clean measurement.",
  "arXiv category counts include cross-lists, so the four CS categories are never summed into a unique total. Momentum is read as share, not raw count, against a NeurIPS 2026 program of about 7,000 accepts.",
  "No prediction rests on an SEO-suspect model name or an unverified late-2026 arXiv id, only on hard anchors: the track rename, ICLR/ICML 2026 orals and accept counts, AlphaProof's Erdős results, and a constant-method keyword scan. A draft anchor, a CVPR best paper claimed to be a world model, was caught wrong in review and removed.",
];

export const meta = {
  sealed: "21 June 2026",
  resolves: "NeurIPS 2026 · Sydney · 6–12 December 2026",
  scouts: 9,
  critics: 3,
  arxivCutoff: "January 2026",
};
