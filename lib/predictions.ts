// ---------------------------------------------------------------------------
// predictions.ts — the locked 10 NeurIPS 2026 forecasts + watchlist + method.
// Derived from research/10-synthesis.md, refined by research/11-redteam-novelty.md
// (folded P1->P2 eval-science; cut P6 latent-reasoning + P10 peer-review to the
//  watchlist; swapped in W1 interp-after-SAEs, W2 AI-for-math, W3 inference-aware
//  scaling). Confidence = cross-validation (#scouts) x hard leading indicator.
// ---------------------------------------------------------------------------

export type Prediction = {
  rank: number;
  id: string;
  lane: string;
  title: string;
  thesis: string;
  novelty: "genuinely novel" | "fresh 2026" | "sharpened";
  confidence: number; // %
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
    confidence: 88,
    evidence: [
      "NeurIPS 2026 renamed the “Datasets & Benchmarks” track to “Evaluations & Datasets” — a direct institutional signal.",
      "Eval-awareness scaling law (2509.13333): models recognize evaluation more each generation. Evaluation Differential (2605.11496): ~26% latent eval-recognition on SWE-bench Verified vs <1% in real use.",
      "ICLR 2026 Outstanding Paper went to “LLMs Get Lost In Multi-Turn Conversation,” a reliability-failure paper. BenchJack (2605.12673) found 219 flaws across the major agent benchmarks.",
      "Benchmark-paper share rose 10.1% → 18.2% (2022–25); anti-scheming results (Apollo/OpenAI, 2509.15541) are now confounded by eval-awareness.",
    ],
    criterion:
      "The Evaluations & Datasets track ships, AND ≥6 accepted papers' primary contribution is auditing existing benchmarks or formalizing eval-awareness / sandbagging / construct validity, AND ≥1 gets a spotlight / oral / award.",
  },
  {
    rank: 2,
    id: "rlvr-rubrics",
    lane: "Post-training / RL",
    title: "RLVR escapes verifiable domains via rubric and generative verifiers; GRPO-successors become the default",
    thesis:
      "RL-with-verifiable-rewards extends past math and code into writing, medicine, and law through rubrics and LLM-generated programmatic verifiers, while sequence-level / MoE-stable GRPO successors (GSPO, DAPO) replace vanilla GRPO and PPO.",
    novelty: "genuinely novel",
    confidence: 88,
    evidence: [
      "ICLR title counts: GRPO 0 → 0 → 73 and RLVR 0 → 0 → 110 (2024→25), while RLHF plateaued (36 → 120 → 111). NeurIPS 2026 is the first full cycle post-DeepSeek-R1.",
      "GSPO (2507.18071) trained Qwen3-235B; Rubrics-as-Rewards (2507.17746) extends verifiable rewards to non-verifiable domains.",
      "Cross-validated by scouts 05, 07, 09 (post-training, conference indicators, frontier labs).",
    ],
    criterion:
      "≥40 accepted papers carry RLVR / GRPO / “verifiable reward” in title or abstract (near-zero 2024 baseline), AND ≥5 center rubric / generative / programmatic verifiers for non-verifiable domains, AND an RLVR or reasoning-RL paper wins an oral / award.",
  },
  {
    rank: 3,
    id: "agentic-rl-env",
    lane: "Agents / RL",
    title: "Agentic RL where the environment, not the algorithm, is the scarce asset",
    thesis:
      "The bottleneck shifts from the RL algorithm (now commoditized) to environment fidelity and reward checking, and long-horizon credit assignment (turn-level, hierarchical, hindsight) becomes a named subfield.",
    novelty: "sharpened",
    confidence: 83,
    evidence: [
      "AgentGym-RL is an ICLR 2026 Oral; an ICML 2026 oral, “Understanding Reasoning Collapse in LLM Agent RL” (Fei-Fei Li, Yejin Choi), centers the problem.",
      "Agentic-RL survey (2509.02547, TMLR) already catalogs 500+ works; INTELLECT-3 trained on an open environment stack; Anthropic reportedly spends >$1B/yr on RL environments.",
      "Cross-validated by scouts 02, 05, 09.",
    ],
    criterion:
      "≥10 accepted papers train LLM agents end-to-end with RL in interactive environments (beyond preference tuning), ≥4 foreground multi-turn credit assignment, AND ≥1 agentic-RL oral / spotlight or a dedicated workshop.",
  },
  {
    rank: 4,
    id: "world-models",
    lane: "Generative / embodied",
    title: "World models as trainable simulators, with physics-faithfulness as the open problem",
    thesis:
      "Generative models are used as environments to train and plan inside (Dreamer-4-style imagination training, Genie/Cosmos interactive simulators), not just as content generators — and “does the world model respect physics” becomes the central contested question.",
    novelty: "genuinely novel",
    confidence: 85,
    evidence: [
      "CVPR 2026 Best Paper went to a world-model paper; world-model share rose 3.8% → 8.8% at CVPR.",
      "ICLR 2026 ran a WoW! oral plus a dedicated World Models workshop (~1,500 attendees); Waymo's world model is built on Genie 3.",
      "PhyWorld (2605.19242) makes physics-faithfulness the explicit critique. Cross-validated by scouts 04, 07, 09.",
    ],
    criterion:
      "A world-models workshop runs at NeurIPS 2026, “world model” and “VLA” each appear in ≥40 accepted titles/abstracts, “physics faithfulness / controllability” is a named sub-theme, AND ≥1 world-model oral / spotlight.",
  },
  {
    rank: 5,
    id: "ttt",
    lane: "Learning paradigm",
    title: "Test-time training: updating weights during inference",
    thesis:
      "Beyond frozen weights plus RAG, the model adapts its own parameters per-input or per-context at inference time — the freshest genuine inflection of 2026, now with a theory spine.",
    novelty: "genuinely novel",
    confidence: 75,
    evidence: [
      "The ARC living survey (2603.13372) reports that all top ARC-AGI transduction approaches now use test-time training / fine-tuning.",
      "A theory bridge, “TTT ≈ linear attention” (2602.21204), connects it to the architecture lane; End-to-End TTT for long context (2512.23675); Google Nested Learning / Hope (2512.24695).",
      "Lead from scout 09 (frontier labs / wildcards).",
    ],
    criterion:
      "≥12 accepted papers (main + workshops) center test-time training / adaptation / continual-at-inference, AND a TTT-adjacent workshop or ≥1 spotlight / oral.",
  },
  {
    rank: 6,
    id: "diffusion-lm",
    lane: "Generative LM",
    title: "Diffusion language models become a recognized alternative to autoregressive text",
    thesis:
      "Discrete / masked diffusion moves off images and onto the autoregressive LMs' home turf — text, code, reasoning — now at 100B scale and with its own RL post-training sub-literature.",
    novelty: "sharpened",
    confidence: 77,
    evidence: [
      "Oral status at both ICLR and ICML 2026 (≥2 diffusion-LM orals at ICML).",
      "Mercury reached GA on Bedrock/Azure; LLaDA scaled 8B → 100B in 12 months; an RL-for-dLLM lineage emerged (d2, GDPO, DiFFPO).",
      "Cross-validated by scouts 04, 07. Venue caveat: may index higher at ICLR/ICML than NeurIPS.",
    ],
    criterion:
      "≥25 accepted papers on diffusion / masked-diffusion language models, AND ≥1 diffusion-LM oral / spotlight or a dedicated workshop / tutorial.",
  },
  {
    rank: 7,
    id: "hybrid-attention",
    lane: "Architecture",
    title: "Hybrid linear-attention beats pure SSM; attention is contested again",
    thesis:
      "The contrarian call: not the naive “pure Mamba/SSM wins” bet but the ~3:1 hybrid linear-attention-to-full-attention recipe that frontier open models converged on — while pure SSM cools.",
    novelty: "genuinely novel",
    confidence: 80,
    evidence: [
      "Mamba-3 is an ICLR 2026 Oral (and is itself hybrid-framed); “linear attention” in ICLR titles went 3 → 9 → 23.",
      "Cross-lab convergence on hybrids: Kimi Linear, Qwen3.5, Olmo Hybrid, Gated DeltaNet-2.",
      "Calibrator “The End of Transformers?” (2510.05364): no pure sub-quadratic model is competitive at 14–70B. Cross-validated by scouts 03, 07, 09.",
    ],
    criterion:
      "≥30 accepted papers on hybrid / linear-attention / sub-quadratic architectures, AND ≥2 of {Mamba-3, Kimi Linear/KDA, Olmo Hybrid, Gated DeltaNet-2} appear as named baselines, AND hybrid papers visibly outnumber pure-Mamba ones.",
  },
  {
    rank: 8,
    id: "interp-after-saes",
    lane: "Interpretability",
    title: "Interpretability after SAEs: transcoders, circuit tracing, parameter decomposition",
    thesis:
      "Sparse autoencoders are reframed as plateaued; the frontier moves to cross-layer transcoders, model diffing, and parameter decomposition as the working tools of mechanistic interpretability.",
    novelty: "genuinely novel",
    confidence: 78,
    evidence: [
      "Anthropic's production interpretability stack is now cross-layer-transcoder (CLT) based, not SAE-based.",
      "“Sanity Checks for SAEs” (2602.14111) shows SAEs barely beat random on key tests; OpenAI weight-sparse transformers (2511.13653) point at parameter-level decomposition.",
      "Lead from scout 06 (interpretability / eval).",
    ],
    criterion:
      "≥10 accepted papers center post-SAE interpretability (transcoders / CLTs / model diffing / parameter decomposition), AND SAE-replacement is an explicit framing in ≥2 of them, AND ≥1 interpretability spotlight / oral.",
  },
  {
    rank: 9,
    id: "ai-for-math",
    lane: "AI for science",
    title: "AI for mathematics: autonomous theorem proving cracks open problems",
    thesis:
      "LLM-plus-Lean systems move from competition problems to genuinely open ones — the single freshest, highest-prestige result of the 2026 cycle. Lower volume than the other ten, but spotlight-grade.",
    novelty: "genuinely novel",
    confidence: 68,
    evidence: [
      "AlphaProof Nexus resolved 9 Erdős problems (2605.22763); a Gowers-verified Erdős disproof landed in 2026.",
      "FrontierMath v2 and the IMO 2026 (July) cycle create a mid-review tailwind that surfaces right before decisions.",
      "Lead from scout 09. Volume risk: expect spotlight prestige, not a flood of accepts.",
    ],
    criterion:
      "≥1 NeurIPS 2026 oral / spotlight or invited talk on autonomous theorem proving / AI-for-math against open or research-level problems, AND ≥5 accepted papers on LLM + formal-proof (Lean/Coq) systems, AND the resolution of ≥1 previously-open problem is cited.",
  },
  {
    rank: 10,
    id: "inference-scaling",
    lane: "Scaling / efficiency",
    title: "Inference-aware scaling laws and the efficiency inversion",
    thesis:
      "Scaling laws are rewritten to account for test-time compute: overtraining-optimal and inference-aware laws reverse Chinchilla intuitions, and “overthinking” / thinking-budget control becomes a named efficiency theme.",
    novelty: "genuinely novel",
    confidence: 75,
    evidence: [
      "T² overtraining-optimal scaling (2604.01411) reverses compute-optimal intuitions; cross-validated by scouts 01 and 06.",
      "The NeurIPS 2025 Efficient Reasoning workshop drew 1,000+ attendees; “overthinking” and thinking-budget control are now recurring framings.",
      "Sits at the intersection of the reasoning, TTT, and efficiency lanes.",
    ],
    criterion:
      "≥8 accepted papers on inference-aware / overtraining-optimal scaling laws or thinking-budget / overthinking control, AND ≥1 spotlight / oral or an efficiency-reasoning workshop carries the theme.",
  },
];

export type Watch = { id: string; title: string; confidence: number; why: string };
export const watchlist: Watch[] = [
  { id: "latent-reasoning", title: "Latent / looped (recurrent-depth) reasoning", confidence: 73, why: "Genuinely novel but evidence-thin (single verified anchor, Ouro), and an incoming critique track may deflate it before December." },
  { id: "peer-review-science", title: "The science of peer review under AI load", confidence: 80, why: "Strongest direct NeurIPS evidence (a randomized AI-reviewing experiment; 178 AI-generated position papers desk-rejected), but narrow, and “automating review” already had 2025 orals." },
  { id: "fp4-training", title: "Native FP4 training (NVFP4 / MXFP4)", confidence: 80, why: "Nemotron pretrained in NVFP4; Quartet II at ICML 2026 — but skews to MLSys venues over NeurIPS." },
  { id: "kv-compression", title: "Reasoning-aware KV-cache compression", confidence: 78, why: "ThinKV is an ICLR 2026 Oral, but it is a technique, not a theme — too narrow for a top-ten slot." },
  { id: "agent-memory", title: "Parametric / RL-learned agent memory (post-RAG)", confidence: 74, why: "Memory-R1, Evo-Memory, an ICLR MemAgents workshop — but memory-as-weights overlaps test-time training (#5)." },
];

export const method = [
  { k: "Cross-validation = confidence", v: "A concept independently surfaced by ≥2 of the 9 research scouts AND backed by a hard leading indicator (ICLR/ICML 2026 accept data, an award, or a NeurIPS 2026 CFP fact) is high-probability. Single-scout or SEO-only signals are discounted." },
  { k: "Share, not raw count", v: "The ICLR pipeline went 7.3k → 11.7k → 19.5k and ICML roughly doubled, so raw counts rose for almost everything. A concept only surged if its share outgrew ~1.7–2× program inflation. Every criterion is written in shares, ranks, awards, or jumps from a near-zero base." },
  { k: "Novelty bar", v: "Reject the 2024/25 truisms (“more LLMs / agents / multimodal”). Each pick names a specific, fresh concept a non-expert wouldn't already assume." },
  { k: "The timing key", v: "NeurIPS 2026 is the first NeurIPS whose full submission cycle post-dates DeepSeek-R1 (Jan 2025). R1-descended concepts (RLVR, reasoning-RL, test-time compute) peak here, not at NeurIPS 2025." },
  { k: "Falsifiable", v: "Every prediction carries a December-2026 criterion checkable against the public program: accepts, titles, abstracts, orals/spotlights, awards, workshops, and the CFP." },
];

export const honesty = [
  "arXiv category counts include cross-lists — the four CS categories are never summed into a “unique” total.",
  "Conference pipelines roughly doubled in two years — momentum is read as share, not raw count.",
  "Unverifiable values are shown as n/a, never guessed. NeurIPS 2026 accept totals are not public until ~Sep 24, 2026.",
  "No prediction rests on an SEO-suspect model name or an unverified late-2026 arXiv id — only on hard anchors (the track rename, ICLR/ICML orals and counts, the CVPR best paper, AlphaProof's Erdős results, and a constant-method keyword scan).",
];
