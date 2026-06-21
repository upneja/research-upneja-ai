"use client";

import { useState } from "react";
import { scaleLinear, scaleLog, scalePoint } from "d3-scale";
import { line, curveMonotoneX } from "d3-shape";
import {
  keywords,
  keywordYears,
  iclrKeywordSignal,
  neurips,
  icml,
  iclr,
  topicShare,
  neuripsInstitutions,
  neurips2026,
  aiIndex,
  type ConfRow,
} from "../../lib/datasets";

const NAVY = "#1b3a5b";
const OX = "#7c2d12";
const LINE = "#d4cdba";
const INK2 = "#555b66";
const INK3 = "#8a8f99";

const LINE_COLORS = [
  "#1b3a5b", "#7c2d12", "#1f7a4d", "#9a6b14", "#3b6ea5",
  "#a8521f", "#4a4e69", "#7d8597", "#b08968", "#6b705c",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-2">{children}</p>;
}

function ChartCard({
  n, title, caption, children,
}: { n: string; title: string; caption: string; children: React.ReactNode }) {
  return (
    <figure
      className="rounded-2xl p-5 sm:p-7"
      style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
    >
      <Eyebrow>{n}</Eyebrow>
      <h3 className="font-label text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: "var(--ink)" }}>
        {title}
      </h3>
      <div className="mt-4">{children}</div>
      <figcaption className="mt-4 text-sm" style={{ color: INK2 }}>{caption}</figcaption>
    </figure>
  );
}

/* ---------- 1. arXiv keyword trends (the "rise of", interactive) ---------- */
function KeywordTrends() {
  const [on, setOn] = useState<Record<string, boolean>>(
    Object.fromEntries(keywords.map((k, i) => [k.term, i < 6]))
  );
  const [hoverYear, setHoverYear] = useState<number | null>(null);
  const W = 760, H = 360, M = { t: 16, r: 16, b: 30, l: 48 };
  const x = scalePoint<number>().domain(keywordYears).range([M.l, W - M.r]).padding(0.2);
  const y = scaleLog().domain([1, 12000]).range([H - M.b, M.t]).clamp(true);
  const ticks = [1, 10, 100, 1000, 10000];

  const mk = line<{ yr: number; v: number }>()
    .x((d) => x(d.yr)!)
    .y((d) => y(d.v))
    .curve(curveMonotoneX);

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "auto" }}
        onMouseLeave={() => setHoverYear(null)}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={M.l} x2={W - M.r} y1={y(t)} y2={y(t)} stroke={LINE} strokeWidth={1} strokeDasharray="2 4" />
            <text x={M.l - 8} y={y(t) + 4} textAnchor="end" fontSize={10} fill={INK3} className="font-mono">{t.toLocaleString()}</text>
          </g>
        ))}
        {keywordYears.map((yr) => (
          <g key={yr}>
            <rect x={(x(yr) ?? 0) - 22} y={M.t} width={44} height={H - M.b - M.t}
              fill={hoverYear === yr ? "#1b3a5b08" : "transparent"}
              onMouseEnter={() => setHoverYear(yr)} />
            <text x={x(yr)} y={H - 10} textAnchor="middle" fontSize={11} fill={INK3} className="font-mono">{yr}</text>
          </g>
        ))}
        {keywords.map((k, i) => {
          if (!on[k.term]) return null;
          const pts = keywordYears
            .map((yr) => ({ yr, v: k.values[yr] }))
            .filter((p): p is { yr: number; v: number } => p.v != null && p.v > 0);
          const d = mk(pts) ?? "";
          return (
            <g key={k.term}>
              <path d={d} fill="none" stroke={LINE_COLORS[i % LINE_COLORS.length]} strokeWidth={2} opacity={0.92} />
              {hoverYear != null && k.values[hoverYear] != null && k.values[hoverYear]! > 0 && (
                <circle cx={x(hoverYear)} cy={y(k.values[hoverYear]!)} r={3.5}
                  fill={LINE_COLORS[i % LINE_COLORS.length]} />
              )}
            </g>
          );
        })}
        {hoverYear != null && (
          <line x1={x(hoverYear)} x2={x(hoverYear)} y1={M.t} y2={H - M.b} stroke={NAVY} strokeWidth={1} opacity={0.25} />
        )}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        {keywords.map((k, i) => (
          <button key={k.term} onClick={() => setOn((s) => ({ ...s, [k.term]: !s[k.term] }))}
            className="font-mono text-xs px-2.5 py-1 rounded-full transition"
            style={{
              border: `1px solid ${on[k.term] ? LINE_COLORS[i % LINE_COLORS.length] : "var(--line)"}`,
              background: on[k.term] ? `${LINE_COLORS[i % LINE_COLORS.length]}12` : "transparent",
              color: on[k.term] ? LINE_COLORS[i % LINE_COLORS.length] : INK3,
            }}>
            {k.term}{k.note ? ` ·${k.note.includes("declin") ? "↓" : ""}` : ""}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- 2. ICLR leading-indicator (the sharpest signal) ---------- */
function LeadingIndicator() {
  const { years, series } = iclrKeywordSignal;
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-[1fr_auto] items-center">
        <span className="eyebrow">term — ICLR title count</span>
        <span className="font-mono text-xs" style={{ color: INK3 }}>{years.join("   ")}</span>
      </div>
      {series.map((s) => {
        const max = Math.max(...s.values, 1);
        const vc =
          s.verdict === "plateaued" ? INK3 :
          s.verdict === "zero-to-cluster" ? OX : NAVY;
        return (
          <div key={s.term} className="grid grid-cols-[1fr_auto] items-center gap-3 py-1.5 rule" style={{ borderTopColor: "var(--line)" }}>
            <div>
              <div className="font-label font-bold text-[15px]" style={{ color: "var(--ink)" }}>{s.term}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: vc }}>{s.verdict}</div>
            </div>
            <div className="flex items-end gap-1.5 h-12">
              {s.values.map((v, i) => (
                <div key={i} className="flex flex-col items-center justify-end" style={{ width: 38 }}>
                  <span className="font-mono text-[10px] mb-0.5" style={{ color: INK2 }}>{v}</span>
                  <div style={{
                    width: 22, height: Math.max(2, (v / max) * 40),
                    background: i === s.values.length - 1 ? vc : `${vc}66`,
                    borderRadius: 3,
                  }} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 3. conference growth ---------- */
const METRICS = [
  { key: "submitted" as const, label: "submissions" },
  { key: "accepted" as const, label: "accepted" },
  { key: "rate" as const, label: "accept rate %" },
];
function ConfGrowth() {
  const [metric, setMetric] = useState<(typeof METRICS)[number]["key"]>("submitted");
  const confs: { name: string; rows: ConfRow[]; color: string }[] = [
    { name: "NeurIPS", rows: neurips, color: NAVY },
    { name: "ICML", rows: icml, color: OX },
    { name: "ICLR", rows: iclr, color: "#1f7a4d" },
  ];
  const W = 760, H = 320, M = { t: 16, r: 16, b: 30, l: 48 };
  const x = scaleLinear().domain([2010, 2026]).range([M.l, W - M.r]);
  const allVals = confs.flatMap((c) => c.rows.map((r) => r[metric]).filter((v): v is number => v != null));
  const y = scaleLinear().domain([0, Math.max(...allVals) * 1.05]).range([H - M.b, M.t]).nice();
  const mk = line<{ yr: number; v: number }>().x((d) => x(d.yr)).y((d) => y(d.v)).curve(curveMonotoneX);
  return (
    <div>
      <div className="mb-3 flex gap-2">
        {METRICS.map((m) => (
          <button key={m.key} onClick={() => setMetric(m.key)}
            className="font-mono text-xs px-3 py-1 rounded-full transition"
            style={{
              border: `1px solid ${metric === m.key ? NAVY : "var(--line)"}`,
              background: metric === m.key ? "#1b3a5b10" : "transparent",
              color: metric === m.key ? NAVY : INK3,
            }}>{m.label}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "auto" }}>
        {y.ticks(5).map((t) => (
          <g key={t}>
            <line x1={M.l} x2={W - M.r} y1={y(t)} y2={y(t)} stroke={LINE} strokeDasharray="2 4" />
            <text x={M.l - 8} y={y(t) + 4} textAnchor="end" fontSize={10} fill={INK3} className="font-mono">
              {t >= 1000 ? `${t / 1000}k` : t}
            </text>
          </g>
        ))}
        {[2012, 2016, 2020, 2024].map((yr) => (
          <text key={yr} x={x(yr)} y={H - 10} textAnchor="middle" fontSize={11} fill={INK3} className="font-mono">{yr}</text>
        ))}
        {confs.map((c) => {
          const pts = c.rows.map((r) => ({ yr: r.year, v: r[metric] }))
            .filter((p): p is { yr: number; v: number } => p.v != null);
          return (
            <g key={c.name}>
              <path d={mk(pts) ?? ""} fill="none" stroke={c.color} strokeWidth={2.2} />
              {pts.slice(-1).map((p) => (
                <text key={p.yr} x={x(p.yr) + 6} y={y(p.v) + 4} fontSize={11} fill={c.color} className="font-label font-bold">{c.name}</text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ---------- 4. topic-share slopegraph ---------- */
function TopicShareChart() {
  const { years, series } = topicShare;
  const W = 360, H = 240, M = { t: 20, r: 130, b: 24, l: 40 };
  const x = scalePoint<number>().domain(years).range([M.l, W - M.r]);
  const y = scaleLinear().domain([0, 42]).range([H - M.b, M.t]);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "auto" }}>
      {years.map((yr) => (
        <text key={yr} x={x(yr)} y={H - 8} textAnchor="middle" fontSize={11} fill={INK3} className="font-mono">{yr}</text>
      ))}
      {series.map((s, i) => {
        const c = s.trend === "declining" ? INK3 : i === 0 ? NAVY : OX;
        return (
          <g key={s.term}>
            <polyline fill="none" stroke={c} strokeWidth={2}
              points={years.map((yr, j) => `${x(yr)},${y(s.values[j])}`).join(" ")} />
            {years.map((yr, j) => <circle key={yr} cx={x(yr)} cy={y(s.values[j])} r={3} fill={c} />)}
            <text x={(x(years[years.length - 1]) ?? 0) + 8} y={y(s.values[s.values.length - 1]) + 4}
              fontSize={11} fill={c} className="font-label font-semibold">
              {s.term.split(" /")[0]} {s.values[s.values.length - 1]}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- 5. institutions: Tsinghua overtakes Google ---------- */
function Institutions() {
  const rows = (yr: 2024 | 2025) =>
    neuripsInstitutions[yr].slice(0, 6).map((s) => {
      const m = s.match(/^(.*)\s(\d+)$/);
      return { name: m ? m[1] : s, n: m ? m[2] : "" };
    });
  return (
    <div className="grid grid-cols-2 gap-6">
      {([2024, 2025] as const).map((yr) => (
        <div key={yr}>
          <div className="eyebrow mb-2">NeurIPS {yr}</div>
          <ol className="space-y-1.5">
            {rows(yr).map((r, i) => {
              const lead = yr === 2025 && i === 0;
              return (
                <li key={r.name} className="flex items-baseline justify-between text-sm">
                  <span style={{ color: lead ? OX : "var(--ink)", fontWeight: lead ? 700 : 400 }}>
                    <span className="font-mono text-xs mr-2" style={{ color: INK3 }}>{i + 1}</span>{r.name}
                  </span>
                  <span className="font-mono text-xs" style={{ color: INK2 }}>{r.n}</span>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}

/* ---------- stat strip + 2026 facts ---------- */
function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="rounded-xl px-4 py-4" style={{ background: "var(--panel2)", border: "1px solid var(--line)" }}>
      <div className="font-display text-2xl sm:text-[28px]" style={{ color: NAVY }}>{v}</div>
      <div className="text-xs mt-1" style={{ color: INK2 }}>{l}</div>
    </div>
  );
}

export default function Landscape() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat v="19.5k" l="ICLR 2026 submissions, up from 7.3k in 2024" />
        <Stat v="0 → 110" l="ICLR titles with “RLVR / verifiable reward” (2024→26)" />
        <Stat v={`${aiIndex.trainingComputeDoublingMonths} mo`} l="training-compute doubling time (AI Index)" />
        <Stat v="Tsinghua" l="overtook Google for #1 by NeurIPS 2025 accepts" />
      </div>

      <ChartCard n="Fig 1 · arXiv title keywords, 2019–2025 (log scale)"
        title="The rise of, and the fade of"
        caption="Counts of papers with each term in the title, by submission year (arXiv API, constant method). Log scale: “LLM” went 2 → 6,525; “reasoning” 315 → 5,487; graph neural networks and self-supervised learning have peaked and turned down. Toggle terms; hover a year.">
        <KeywordTrends />
      </ChartCard>

      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard n="Fig 2 · ICLR title counts, 2024 → 2026"
          title="The sharpest leading indicator"
          caption="Same-method title scan across three ICLR cycles. GRPO and RLVR went from literally zero to clusters; reasoning quadrupled in share; RLHF plateaued. NeurIPS 2026 is the first cycle whose submissions all post-date DeepSeek-R1.">
          <LeadingIndicator />
        </ChartCard>
        <ChartCard n="Fig 3 · submissions / accepts / rate"
          title="The pipeline roughly doubled in two years"
          caption="Why momentum must be read as share, not raw count: almost everything rose. NeurIPS, ICML, and ICLR submission counts since 2010. 2026 NeurIPS totals are not public until ~Sep 24, 2026.">
          <ConfGrowth />
        </ChartCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard n="Fig 4 · topic share of abstracts, 2023 → 2025"
          title="Multimodal surges, contrastive fades"
          caption="Share of CVPR + ICLR + NeurIPS abstracts (26K-paper VLM survey, 2510.09586). Vision-language went 16% → 40% of abstracts in two years.">
          <TopicShareChart />
        </ChartCard>
        <ChartCard n="Fig 5 · top institutions by accepts"
          title="The center of gravity moved east"
          caption="NeurIPS top-6 institutions by accepted papers (papercopilot). Tsinghua overtook Google for the #1 slot at NeurIPS 2025 — the first time a non-US lab led.">
          <Institutions />
        </ChartCard>
      </div>

      <ChartCard n="Fig 6 · the CFP as a leading indicator"
        title={`NeurIPS 2026 · ${neurips2026.location} · ${neurips2026.dates}`}
        caption="The conference's own structural changes are evidence. Papers were due May 6, 2026; decisions land ~Sep 24, 2026.">
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {neurips2026.changes.map((c) => (
            <li key={c} className="flex gap-2 text-sm" style={{ color: "var(--ink)" }}>
              <span style={{ color: OX }}>→</span><span>{c}</span>
            </li>
          ))}
        </ul>
      </ChartCard>
    </div>
  );
}
