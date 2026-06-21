// ---------------------------------------------------------------------------
// datasets.ts — the sourced data backbone for the ML-landscape data layer.
// Every series traces to scout-08-historical-data.md / scout-07-conference-
// indicators.md, which carry per-cell source URLs + confidence flags.
// HONESTY RULES baked in:
//  - arXiv category counts INCLUDE cross-lists -> never sum the 4 into "unique".
//  - Conference pipeline ~doubled in 2 yrs -> read SHARE, not raw count, for momentum.
//  - Unverifiable cells are `null` (render "n/a"), never guessed.
//  - NeurIPS attendance has two incompatible series (fact-sheet vs AI Index); kept separate.
// ---------------------------------------------------------------------------

export type ConfRow = { year: number; submitted: number | null; accepted: number | null; rate: number | null };

// 1. NeurIPS submissions / accepted / acceptance-rate (%). 2010-12 accepts = GAP.
export const neurips: ConfRow[] = [
  { year: 2010, submitted: 1219, accepted: null, rate: null },
  { year: 2011, submitted: 1400, accepted: null, rate: null },
  { year: 2012, submitted: 1397, accepted: null, rate: null },
  { year: 2013, submitted: 1420, accepted: 360, rate: 25.4 },
  { year: 2014, submitted: 1678, accepted: 411, rate: 24.5 },
  { year: 2015, submitted: 1838, accepted: 403, rate: 21.9 },
  { year: 2016, submitted: 2425, accepted: 568, rate: 23.4 },
  { year: 2017, submitted: 3240, accepted: 691, rate: 21.3 },
  { year: 2018, submitted: 4856, accepted: 1009, rate: 20.8 },
  { year: 2019, submitted: 6743, accepted: 1427, rate: 21.2 },
  { year: 2020, submitted: 9467, accepted: 1899, rate: 20.1 },
  { year: 2021, submitted: 9122, accepted: 2334, rate: 25.6 },
  { year: 2022, submitted: 10411, accepted: 2671, rate: 25.7 },
  { year: 2023, submitted: 12345, accepted: 3218, rate: 26.1 },
  { year: 2024, submitted: 15671, accepted: 4037, rate: 25.8 },
  { year: 2025, submitted: 21575, accepted: 5290, rate: 24.5 },
  // 2026: deadline was May 6 2026; main-track totals not public until ~Sep 24 2026.
  { year: 2026, submitted: null, accepted: null, rate: null },
];

// 2. ICML. 2026 = official @icmlconf (24,371 raw -> 23,918 reviewed -> 6,352 accepted).
export const icml: ConfRow[] = [
  { year: 2015, submitted: 1037, accepted: 270, rate: 26.0 },
  { year: 2016, submitted: 1320, accepted: 322, rate: 24.4 },
  { year: 2017, submitted: 1676, accepted: 434, rate: 25.9 },
  { year: 2018, submitted: 2473, accepted: 621, rate: 25.1 },
  { year: 2019, submitted: 3424, accepted: 773, rate: 22.6 },
  { year: 2020, submitted: 4990, accepted: 1084, rate: 21.7 },
  { year: 2021, submitted: 5513, accepted: 1183, rate: 21.5 },
  { year: 2022, submitted: 5630, accepted: 1233, rate: 21.9 },
  { year: 2023, submitted: 6538, accepted: 1827, rate: 27.9 },
  { year: 2024, submitted: 9473, accepted: 2610, rate: 27.5 },
  { year: 2025, submitted: 12107, accepted: 3260, rate: 26.9 },
  { year: 2026, submitted: 23918, accepted: 6352, rate: 26.6 },
];

// 3. ICLR. 2026 = official review-process retrospective (19,525 valid / 5,355 / 27.4%).
//    (papercopilot variant: 19,809 / 5,343 / 27.0% — minor; official used.)
export const iclr: ConfRow[] = [
  { year: 2017, submitted: 490, accepted: 198, rate: 40.4 },
  { year: 2018, submitted: 1013, accepted: 337, rate: 33.3 },
  { year: 2019, submitted: 1579, accepted: 502, rate: 31.8 },
  { year: 2020, submitted: 2594, accepted: 687, rate: 26.5 },
  { year: 2021, submitted: 3014, accepted: 860, rate: 28.5 },
  { year: 2022, submitted: 3422, accepted: 1095, rate: 32.0 },
  { year: 2023, submitted: 4955, accepted: 1575, rate: 31.8 },
  { year: 2024, submitted: 7304, accepted: 2260, rate: 30.9 },
  { year: 2025, submitted: 11672, accepted: 3704, rate: 31.7 },
  { year: 2026, submitted: 19525, accepted: 5355, rate: 27.4 },
];

// 4. arXiv yearly counts (primary + cross-listed). DO NOT SUM across categories.
export type ArxivYear = { year: number; csLG: number; csCL: number; csAI: number; csCV: number; partial?: boolean };
export const arxivYearly: ArxivYear[] = [
  { year: 2015, csLG: 2491, csCL: 825, csAI: 1115, csCV: 2262 },
  { year: 2016, csLG: 3574, csCL: 1694, csAI: 1940, csCV: 3633 },
  { year: 2017, csLG: 5234, csCL: 2397, csAI: 2810, csCV: 5701 },
  { year: 2018, csLG: 10482, csCL: 3728, csAI: 4280, csCV: 8599 },
  { year: 2019, csLG: 19263, csCL: 5382, csAI: 4757, csCV: 11600 },
  { year: 2020, csLG: 25901, csCL: 7125, csAI: 7414, csCV: 15329 },
  { year: 2021, csLG: 26521, csCL: 8092, csAI: 12492, csCV: 17227 },
  { year: 2022, csLG: 28684, csCL: 8959, csAI: 14782, csCV: 19643 },
  { year: 2023, csLG: 32896, csCL: 13563, csAI: 21739, csCV: 24403 },
  { year: 2024, csLG: 39817, csCL: 20654, csAI: 33029, csCV: 30676 },
  { year: 2025, csLG: 46084, csCL: 23693, csAI: 45082, csCV: 35017 },
  { year: 2026, csLG: 26737, csCL: 13475, csAI: 28903, csCV: 18423, partial: true }, // YTD ~Jun 21
];

// 5. arXiv title-keyword counts by submission year (computed via arXiv API). The "rise of" data.
//    NOTE: "agent" stems to include "agentic"; common words have pre-LLM baselines.
export type KeywordSeries = { term: string; note?: string; values: Record<number, number | null> };
export const keywordYears = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
export const keywords: KeywordSeries[] = [
  { term: "large language model", values: { 2019: 2, 2020: 1, 2021: 27, 2022: 150, 2023: 2695, 2024: 6414, 2025: 6525 } },
  { term: "LLM (acronym)", values: { 2019: null, 2020: 1, 2021: 1, 2022: 16, 2023: 998, 2024: 5309, 2025: 10941 } },
  { term: "reasoning", values: { 2019: 315, 2020: 393, 2021: 449, 2022: 534, 2023: 910, 2024: 1744, 2025: 5487 } },
  { term: "agent / agentic", values: { 2019: 634, 2020: 855, 2021: 947, 2022: 962, 2023: 1538, 2024: 2692, 2025: 6735 } },
  { term: "diffusion model", values: { 2019: 46, 2020: 46, 2021: 57, 2022: 252, 2023: 1297, 2024: 1934, 2025: 1975 } },
  { term: "reinforcement learning", values: { 2019: 1181, 2020: 1665, 2021: 1852, 2022: 2008, 2023: 2317, 2024: 2598, 2025: 3826 } },
  { term: "transformer", values: { 2019: 1229, 2020: 1628, 2021: 2503, 2022: 3195, 2023: 3743, 2024: 4299, 2025: 4769 } },
  { term: "attention", values: { 2019: 911, 2020: 1161, 2021: 1442, 2022: 1373, 2023: 1502, 2024: 1910, 2025: 2587 } },
  { term: "graph neural network", note: "peaked & declining", values: { 2019: 150, 2020: 399, 2021: 562, 2022: 678, 2023: 729, 2024: 826, 2025: 741 } },
  { term: "self-supervised", note: "peaked & declining", values: { 2019: 185, 2020: 506, 2021: 788, 2022: 1053, 2023: 1102, 2024: 953, 2025: 869 } },
];

// 6. Conference topic SHARE (% of abstracts, CVPR+ICLR+NeurIPS, from the 26K-paper VLM survey 2510.09586).
export const topicShare = {
  years: [2023, 2024, 2025],
  series: [
    { term: "Vision-Language / Multimodal", values: [16, 28, 40], trend: "surging" },
    { term: "Diffusion & Generative", values: [8, 14.9, 19.2], trend: "surging" },
    { term: "Contrastive / InfoNCE", values: [10.8, 5.6, 5.1], trend: "declining" },
  ],
};

// 7. ICLR leading-indicator keyword counts (constant-method title scan, scout 07).
//    The single sharpest signal: GRPO & RLVR went from literally zero to clusters.
export const iclrKeywordSignal = {
  years: [2024, 2025, 2026],
  pool: [7304, 11672, 19525], // submission pool, for share context
  series: [
    { term: "reasoning", values: [154, 403, 1657], sharePct: [2.1, 3.5, 8.4], verdict: "surging" },
    { term: "GRPO", values: [0, 0, 73], verdict: "zero-to-cluster" },
    { term: "RLVR / verifiable reward", values: [0, 0, 110], verdict: "zero-to-cluster" },
    { term: "test-time / inference-time", values: [47, 85, 397], verdict: "surging" },
    { term: "KV-cache", values: [1, 29, 60], verdict: "surging" },
    { term: "MoE", values: [13, 51, 91], verdict: "surging" },
    { term: "RLHF", values: [36, 120, 111], verdict: "plateaued" },
  ],
};

// 8. Top institutions by accepted papers — NeurIPS top 10 (papercopilot raw JSON).
//    The headline: Tsinghua overtook Google at NeurIPS 2025.
export const neuripsInstitutions = {
  2025: ["Tsinghua 349", "Google 322", "Peking 279", "Shanghai Jiao Tong 244", "CUHK 243", "HKUST 225", "NUS 217", "Meta 198", "CMU 196", "Stanford 193"],
  2024: ["Google 300", "Tsinghua 255", "CMU 180", "Zhejiang 172", "Microsoft 166", "MIT 161", "Peking 160", "Stanford 153", "Shanghai Jiao Tong 147", "CUHK 142"],
  2023: ["Google 335", "Stanford 166", "MIT 164", "Microsoft 156", "Tsinghua 144", "CMU 144", "Peking 127", "Meta 115", "UC Berkeley 113", "Amazon 97"],
};

// 9. Stanford AI Index headline metrics (research-volume context).
export const aiIndex = {
  publications: { 2013: 102000, 2024: 257890 }, // AI publications/yr; +>2x, but growth decelerating
  aiShareOfCS2024Pct: 40.9,
  trainingComputeDoublingMonths: 5,
  globalComputeGrowthPerYear: 3.3, // x/yr since 2022 -> ~17.1M H100-equivalents (2026)
  notableModels2025: { industry: 93, academia: 2 },
  // Two incompatible NeurIPS attendance series — keep separate, never co-plot.
  neuripsAttendanceFactSheet: { 2016: 5200, 2017: 8000, 2018: 8650, 2019: 13000, 2022: 17000, 2023: 15390, 2024: 16382 },
  neuripsAttendanceAIIndex: { 2025: 19760, 2026: 26380 },
};

// 10. NeurIPS 2026 structural facts (the CFP itself as a leading indicator).
export const neurips2026 = {
  location: "Sydney, Australia (ICC)",
  dates: "Dec 6–12, 2026",
  abstractDeadline: "May 4, 2026",
  paperDeadline: "May 6, 2026",
  decisions: "Sep 24, 2026",
  changes: [
    'Track renamed "Datasets & Benchmarks" → "Evaluations & Datasets"',
    "Page limit changed to 9 content pages",
    "Position Paper Track returns (2nd year)",
    "ML Reproducibility Challenge (MLRC) becomes an official track",
    'Creative AI Track (4th year), theme: "Agency"',
    "Randomized controlled AI-assisted-reviewing experiment (LLM-as-reviewer)",
    "AI-generated-paper crackdown: 178 of ~970 position papers desk-rejected",
  ],
};
