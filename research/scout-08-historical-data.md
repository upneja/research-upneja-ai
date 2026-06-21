# Scout 08 — Historical ML Data (sourced, for the viz)
_Filed 2026-06-21. Every cell: source + confidence (HIGH=primary/official, MED=reputable secondary/minor disagreement, LOW=single unverified, GAP=could not verify, NOT guessed). Spine source: papercopilot.com + official conference blogs/X + arXiv list pages + Stanford AI Index PDFs._

## 1. NeurIPS submissions / accepted / rate
| Year | Submitted | Accepted | Rate | Conf |
|--|--|--|--|--|
|2010|1,219|GAP|GAP|LOW|
|2011|1,400|GAP|GAP|LOW|
|2012|1,397|GAP|GAP|LOW|
|2013|1,420|360|25.4%|HIGH|
|2014|1,678|411|24.5%|HIGH|
|2015|1,838|403|21.9%|HIGH|
|2016|2,425|568|23.4%|HIGH|
|2017|3,240|691|21.3%|HIGH|
|2018|4,856|1,009|20.8%|HIGH|
|2019|6,743|1,427|21.2%|HIGH|
|2020|9,467|1,899|20.1%|HIGH|
|2021|9,122|2,334|25.6%|HIGH|
|2022|10,411|2,671|25.7%|HIGH|
|2023|12,345|3,218|26.1%|HIGH|
|2024|15,671|4,037|25.8%|HIGH|
|2025|21,575|5,290|24.5%|HIGH|
Notes: 2010–12 accepts NOT scrapeable (render "n/a"). 2024 accepts cluster 4,035–4,043 (use 4,037). **2025: use official blog 21,575/5,290/24.5%** — papercopilot's "95.46%" is share-with-known-decisions NOT accept rate. Rate held ~20–26% for 15 yrs while submissions grew ~18× (1,219→21,575); chairs expand capacity not pin rate → model submissions & accepts independently.

### NeurIPS Datasets & Benchmarks track (introduced 2021)
2021: 484/174/~35.9% · 2022: 447/163/~36.5% · 2023: 987/322/~32.6% · 2024: ~1,820/~460/25.3% · 2025: 1,995/GAP. D&B rate tightened 36%→25% as standards aligned w/ main track. **NeurIPS 2026: renamed D&B → "Evaluations & Datasets (ED)" track** (cross-confirmed scouts 02/06).

### NeurIPS attendance & structural timeline
2016 ~5,200 · 2017 ~8,000 · 2018 ~8,650 (sold out 11m38s) · 2019 ~13,000 (lottery) · 2020/21 virtual · 2022 ~17,000 · 2023 ~15,390 (9,835 in-person+5,555 virtual) · 2024 ~16,382. AI Index cross-series (counts differently, higher): ~19,760 (2025 rpt)→~26,380 (2026 rpt) — DON'T mix the two series on one chart. NIPS→NeurIPS name change Nov 2018. D&B track 2021. Position Paper track inaugural 2025 (~40 from ~700, ~8%).

## 2. ICML submissions / accepted / rate
2015 1,037/270/26.0% · 2016 1,320*/322/24.4% · 2017 1,676/434/25.9% · 2018 2,473/621/25.1% · 2019 3,424/773/22.6% · 2020 4,990/1,084/21.7% · 2021 5,513/1,183/21.5% · 2022 5,630/1,233/21.9% · 2023 6,538/1,827/27.9% · 2024 9,473†/2,610†/27.5% · 2025 12,107/3,260/26.9% · **2026 23,918‡/6,352/26.6%** (official @icmlconf; 24,371 raw→23,918 reviewed; 536 spotlights 2.2%). †2024 conflict (papercopilot 9,653/2,944/30.5%) — used cross-agreed 2,610/27.5% (MED).

## 3. ICLR submissions / accepted / rate
2015/2016 GAP · 2017 490/198/40.4% · 2018 1,013/337/33.3% · 2019 1,579/502/31.8% · 2020 2,594/687/26.5% · 2021 3,014/860/28.5% · 2022 3,422/1,095/32.0% · 2023 4,955/1,575/31.8% · 2024 7,304/2,260/30.9% · 2025 11,672/3,704/31.7% · **2026 19,809/5,343/27.0%** (decisions 2026-01-28, MED).
Accept-tiers (poster/spotlight/oral): 2026 5,120 poster (25.85%)/223 spotlight(1.13%) · 2025 3,110/380/213 · 2024 1,807/367/86 · 2023 1,204/280/91.

## 4. arXiv yearly (primary + cross-listed; DO NOT SUM to "unique" — includes cross-list double-count). All HIGH.
| Year | cs.LG | cs.CL | cs.AI | cs.CV |
|--|--|--|--|--|
|2015|2,491|825|1,115|2,262|
|2016|3,574|1,694|1,940|3,633|
|2017|5,234|2,397|2,810|5,701|
|2018|10,482|3,728|4,280|8,599|
|2019|19,263|5,382|4,757|11,600|
|2020|25,901|7,125|7,414|15,329|
|2021|26,521|8,092|12,492|17,227|
|2022|28,684|8,959|14,782|19,643|
|2023|32,896|13,563|21,739|24,403|
|2024|39,817|20,654|33,029|30,676|
|2025|46,084|23,693|45,082|35,017|
|2026*|26,737|13,475|28,903|18,423|
*2026 = YTD through ~Jun 21 (~5.7mo), NOT full year. cs.LG ~18.5× (2015→25); cs.AI ~40× (1,115→45,082), accelerating from 2021 (LLM era) — cs.AI 2026-YTD alone (28,903) > all of 2023.
cs.LG monthly 2024/2025/2026: Jan 2,488/3,096/3,463 · Feb 3,961/4,299/4,668 · Mar 3,118/3,685/4,525 · Apr 2,872/3,062/3,897 · May 3,774/4,747/6,567 · Jun 3,623/4,223/3,617* · Jul 3,166/3,458/— · Aug 2,470/3,241/— · Sep 2,958/4,214/— · Oct 4,847/4,947/— · Nov 3,242/3,648/— · Dec 3,298/3,464/—. (Feb/May spikes=ICML/NeurIPS deadlines; Oct=annual peak.) all-arXiv all-time = 3,080,173 (2026-06-21).

## 5. Topic/keyword prevalence
### 5a. arXiv TITLE-keyword counts/yr (computed via arXiv API, HIGH, reproducible) — GOLD for "rise of" charts
| term in title | 2019|2020|2021|2022|2023|2024|2025 |
|--|--|--|--|--|--|--|--|
|"large language model"|2|1|27|150|2,695|6,414|6,525|
|"LLM" (acronym)|—|1|1|16|998|5,309|10,941|
|"diffusion model"|46|46|57|252|1,297|1,934|1,975|
|"transformer"|1,229|1,628|2,503|3,195|3,743|4,299|4,769|
|"reinforcement learning"|1,181|1,665|1,852|2,008|2,317|2,598|3,826|
|"reasoning"|315|393|449|534|910|1,744|5,487|
|"agent"(≡agentic)|634|855|947|962|1,538|2,692|6,735|
|"graph neural network"|150|399|562|678|729|826|741|
|"self-supervised"|185|506|788|1,053|1,102|953|869|
|"attention"|911|1,161|1,442|1,373|1,502|1,910|2,587|
Arcs: LLM ~0(2019)→10,941(2025), hockey-stick 2023. Reasoning 3.1× in 2025 (1,744→5,487). Agent/agentic 2.5× in 2025. Diffusion ~5× 2022→23 then plateau. COUNTER-NARRATIVE: GNN (826→741) & self-supervised (1,102→953→869) PEAKED & DECLINING — not everything rises. Caveats: arXiv stems agentic→agent; common words have pre-LLM baselines; use "diffusion model" not bare "diffusion."
### 5b. Conference topic-share (CVPR+ICLR+NeurIPS abstracts, from VLM survey 2510.09586, HIGH)
VL/Multimodal/LLM: 16%(2023)→~28%(2024)→40%(2025). Diffusion&Generative: 8%→14.9%→19.2%. 2025 venue: VL CVPR 39.5%/ICLR 40.7%; within VLM "reasoning/instruction" 13.5%→25.0%, "grounding/referring" 25.9%→12.9%.
### 5c. Qualitative (MED): 100K-paper analysis (2601.15170) — reasoning/long-context/preference-alignment each >~200 papers/yr by 2025; RL surged to top by mid-2025 (GRPO/RLVR). Zeta-Alpha: "AI Scientist" 104(2024)→427(2025), 4.1×.
GAP: NeurIPS/ICML per-keyword %-of-accepted by year — no pre-computed source (derivable by scraping papercopilot title lists, needs browser automation).

## 6. Top institutions by accepted papers
NeurIPS top-5: **2025** Tsinghua 349 / Google 322 / Peking 279 / SJTU 244 / CUHK 243 · **2024** Google 300 / Tsinghua 255 / CMU 180 / Zhejiang 172 / Microsoft 166 · **2023** Google 335 / Stanford 166 / MIT 164 / Microsoft 156 / Tsinghua 144.
ICLR 2025 top-5: Google 238 / Tsinghua 204 / MIT 179 / CMU 158 / Peking 158. ICML 2025 top-5: Google 236 / Tsinghua 162 / Stanford 131 / Peking 122 / CMU 120.
Trends (HIGH): **Google #1 in 7 of 9 conf-years**, slips to #2 only NeurIPS 2025 (Tsinghua overtakes 349 vs 322). Chinese institutions surged: 4 of NeurIPS top-20 (2023) → 8 (2024). Google share concentration FALLING (9.3–11.6% of accepts 2023 → 5.5–7.1% 2025) as field broadens. OpenAI/Anthropic low in raw paper count (single digits–~20).

## 7. Stanford AI Index headlines (HIGH; HAI switched to OpenAlex+CSO in 2025 → not back-comparable pre-2025)
- AI pubs ~102,000(2013)→257,890(2024), >2×; growth DECELERATING +19.7%(22→23)→+6.3%(23→24). AI=40.9% of all CS pubs 2024 (~21% 2013). Conferences 23.5% of AI pubs 2024 (down from 36.6% 2013).
- Sector (pubs) 2024: Academia 68.1% / Govt 12.4% / Industry 11.5% / Nonprofit 4.6%. Industry leads notable-MODEL development; academia leads highly-cited research.
- Notable models (Epoch): 2024 industry 55 / academia 0; 2025 industry 93 / academia 2 (91.2% industry). Top orgs 2025: OpenAI 20, Google 14, Alibaba 11.
- Compute: training compute doubles ~every 5 months; global AI compute ~3.3×/yr since 2022 → ~17.1M H100-equiv (2026). Cost: GPT-4 ~$79M, Gemini 1.0 Ultra ~$192M, Llama 3.1-405B ~$170M; Transformer(2017) ~$670. Frontier labs STOPPED disclosing cost/params/data.
- Geography: notable models 2025 US 59 / China 35 / S.Korea 8. China leads research VOLUME; US leads notable-MODEL development. Conf attendance +21.7% YoY (23→24).

## GAPS (render as n/a, not interpolated)
NeurIPS 2010–12 accepts; NeurIPS 2025 D&B accepts; ICLR 2015–16; ICML 2024 accepted (conflict); NeurIPS per-keyword %-accepted; NeurIPS 2020/21 attendance.

## Key sources
papercopilot.com/statistics/{neurips,icml,iclr}-statistics; blog.neurips.cc/2025/09/30 (PC chairs); media.neurips.cc fact sheets; x.com/icmlconf (ICML2026); github.com/papercopilot/paperlists (institutions, aff_unique_norm); arxiv.org/list/{cat}/{year} + export.arxiv.org/api; arxiv.org/html/2510.09586 (VLM survey); hai.stanford.edu ai_index_report_2026.pdf.
