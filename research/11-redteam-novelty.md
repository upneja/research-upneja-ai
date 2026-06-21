# Red-team 1 — Novelty & Redundancy critic (verdicts)
_Filed 2026-06-21. One of 3 critics; integrate with probability + falsifiability critics before locking._

## Per-prediction novelty verdicts
- **P1 eval crisis** — PARTIALLY-NOVEL. Theme is a 2025 continuation (construct-validity 2511.04703 is NeurIPS 2025; Leaderboard Illusion is early-2025). ONLY the ED-track RENAME is fresh-2026. Rec: KEEP but reframe headline to the institutional event (rename → negative-results/auditing go ORAL), OR fold into P2.
- **P2 eval-awareness/sandbagging** — GENUINELY-NOVEL (freshest in whole corpus). Zero 2024/25 baseline + a SCALING LAW (2509.13333). Rec: ANCHOR; absorb P1's institutional claim.
- **P3 RLVR + GRPO-successors** — GENUINELY-NOVEL *for NeurIPS specifically* (GRPO/RLVR were 0 in ICLR titles in BOTH 2024 AND 2025; NeurIPS 2026 = first cycle post-R1). But lead with the rubric/generative-verifier NON-VERIFIABLE-domain expansion (the fresh part); "GRPO is default" is closer to truism.
- **P4 agentic RL + credit assignment** — PARTIALLY-NOVEL. "Agentic RL" = near-truism (#1 ICLR keyword); fresh part = "environment-not-algorithm is the scarce asset" + long-horizon credit assignment as named subfield. OVERLAPS P3.
- **P5 world models + physics-faithfulness** — GENUINELY-NOVEL (physics-faithfulness framing) / old label. One of the best picks (CVPR best paper + ICLR WoW! oral + workshop). Lead with physics-faithfulness.
- **P6 latent/looped reasoning** — GENUINELY-NOVEL but LOWEST-PROB + EVIDENCE-THIN (single verified anchor Ouro; follow-ons unverified 2604.x; critique 2512.21711 may DEFLATE it before Dec). Rec: **CUT → watchlist.**
- **P7 TTT-at-inference** — GENUINELY-NOVEL as 2026 crystallization w/ theory spine (ARC top-tier all-TTT 2603.13372; TTT≈linear-attention 2602.21204). Sharpen: foreground ARC dependence + theory bridge (not generic test-time adaptation, which is 4yrs old). KEEP.
- **P8 diffusion LMs** — PARTIALLY-NOVEL. Category predates 2026 (SEDD won ICML 2024 Best Paper!). Fresh = 100B scale + Mercury GA + RL-for-dLLM + dual-oral. Sharpen to scale+RL angle. Venue risk (may under-index NeurIPS vs ICLR/ICML).
- **P9 hybrid-linear-attention beats pure-SSM** — GENUINELY-NOVEL as contrarian-specific call (NOT "Mamba wins"; pure-SSM cooled, 3:1 hybrid converged across labs; Mamba-3 ICLR Oral). One of strongest. KEEP, don't dilute to generic "efficient arch."
- **P10 science of peer review** — PARTIALLY-NOVEL + narrowest. "Automating review" already had 2025–26 orals; ONLY the NeurIPS RCT is fresh (+ near-self-fulfilling/low-information). Rec: most cuttable after P6. Narrow criterion to RCT-results + AI-detection escalation; drop soft "panel/blog" clause.

## Watchlist
- **W1 interp-after-SAEs** — GENUINELY-NOVEL (SAEs being replaced; Anthropic production CLT; "Sanity Checks" 2602.14111 barely beats random; OpenAI weight-sparse). **SWAP IN for P6** (78%>73%, harder evidence, adds interp lane).
- **W2 AI-for-math (Erdős/IMO)** — GENUINELY-NOVEL, single freshest+highest-prestige in corpus (AlphaProof Nexus 9 Erdős; Gowers-verified; IMO 2026 July = mid-review tailwind). Lower volume (~65-70%, spotlight not flood). **STRONG SWAP for P10** — omitting "AI solved open math" looks like missing the biggest 2026 result.
- **W3 inference-aware scaling laws (T²)** — GENUINELY-NOVEL (a LAW reversing Chinchilla, 2604.01411, ✓01+06). SWAP IN but overlaps P3/P7 reasoning lane — don't over-weight reasoning.
- **W4 FP4 training** — GENUINELY-NOVEL but MLSys-venue risk. Watchlist.
- **W5 reasoning-aware KV compression** — GENUINELY-NOVEL but NARROW (technique not theme; ThinKV ICLR Oral). Watchlist.
- **W6 parametric agent memory** — PARTIALLY-NOVEL, OVERLAPS P7 (memory-as-weights = TTT instance). Don't add alongside P7.

## Redundancy pairs
- **PRIMARY: P1⊗P2** = same eval-science surge, same track, can't separate in a program count → P2 anchor, P1 folds to institutional sub-claim.
- **SECONDARY: P3⊗P4** = same "verifier/environment is scarce asset" thesis. Either merge (frees slot) OR keep sharpened-distinct (P3=rubric/generative verifiers; P4=credit assignment/env-fidelity).

## Recommended FINAL 10 (novelty critic)
P2(+P1 folded), P3, P4, P5, P7, P8, P9, **W1**, **W2**, **W3**. CUT P6 + P10.
Freshness ranking (top): P2 > W2 > P7 > W1 > P9 > P5 > P3(rubric half) > P4(credit half) > W3 > W4 ... P6/P1/P8/P10 weakest on freshness.
Residual caution: NONE of recommended 10 depend on SEO-suspect model names (Fable 5/GPT-5.5/Gemini 3.1/Muse Spark) or unverified 2602–2606 IDs — all rest on hard anchors (track rename, ICLR/ICML orals+stats, CVPR best paper, AlphaProof Erdős, keyword JSON). Keep it that way.
