"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { scaleLinear } from "d3-scale";
import { predictions, watchlist } from "../../lib/predictions";

// The signature: every prediction placed in novelty x confidence space.
// The thesis ("novel AND probable") is the cloud sitting upper-right.
const PW = 680;
const PH = 470;
const PAD = { l: 64, r: 28, t: 28, b: 58 };
const x = scaleLinear().domain([44, 100]).range([PAD.l, PW - PAD.r]);
const y = scaleLinear().domain([54, 90]).range([PH - PAD.b, PAD.t]);

type Pt = { id: string; title: string; confidence: number; noveltyScore: number };

export default function FrontierPlot() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  const all = [...predictions, ...watchlist] as Pt[];
  const active = all.find((p) => p.id === hover);
  const activeRank = predictions.findIndex((p) => p.id === hover) + 1;

  return (
    <figure className="rounded-2xl p-4 sm:p-6 mb-6" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
      <figcaption className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
        <span className="eyebrow">The frontier plot · novelty × confidence</span>
        <span className="font-mono text-xs" style={{ color: "#8a8f99" }}>● the ten&nbsp;&nbsp;○ watchlist</span>
      </figcaption>

      <div className="relative">
        <svg viewBox={`0 0 ${PW} ${PH}`} width="100%" style={{ height: "auto", overflow: "visible" }} role="img"
          aria-label="The ten predictions plotted by novelty and confidence">
          {/* target zone: novel AND probable */}
          <rect x={x(68)} y={y(90)} width={x(100) - x(68)} height={y(74) - y(90)} fill="#1b3a5b" opacity={0.05} />
          <text x={x(99)} y={y(88.6)} textAnchor="end" className="font-mono" fontSize={10} fill="#1b3a5b" opacity={0.6}>novel &amp; probable</text>

          {/* grid */}
          {[50, 60, 70, 80, 90, 100].map((t) => (
            <g key={`gx${t}`}>
              <line x1={x(t)} y1={PAD.t} x2={x(t)} y2={PH - PAD.b} stroke="#d4cdba" strokeWidth={0.5} opacity={0.55} />
              <text x={x(t)} y={PH - PAD.b + 16} textAnchor="middle" className="font-mono" fontSize={9} fill="#8a8f99">{t}</text>
            </g>
          ))}
          {[60, 70, 80, 90].map((t) => (
            <g key={`gy${t}`}>
              <line x1={PAD.l} y1={y(t)} x2={PW - PAD.r} y2={y(t)} stroke="#d4cdba" strokeWidth={0.5} opacity={0.55} />
              <text x={PAD.l - 10} y={y(t) + 3} textAnchor="end" className="font-mono" fontSize={9} fill="#8a8f99">{t}%</text>
            </g>
          ))}
          <text x={(PAD.l + PW - PAD.r) / 2} y={PH - 8} textAnchor="middle" className="font-label" fontSize={11} fill="#555b66" letterSpacing="0.04em">NOVELTY · expected → genuinely fresh</text>
          <text transform={`rotate(-90 18 ${(PAD.t + PH - PAD.b) / 2})`} x={18} y={(PAD.t + PH - PAD.b) / 2} textAnchor="middle" className="font-label" fontSize={11} fill="#555b66" letterSpacing="0.04em">CONFIDENCE · longshot → near-certain</text>

          {/* watchlist points */}
          {watchlist.map((w) => (
            <circle key={w.id} cx={x(w.noveltyScore)} cy={y(w.confidence)} r={hover === w.id ? 7 : 5} fill="none"
              stroke="#a8521f" strokeWidth={1.5} opacity={hover === w.id ? 0.95 : 0.5} style={{ cursor: "pointer", transition: "all .15s" }}
              onMouseEnter={() => setHover(w.id)} onMouseLeave={() => setHover(null)} onClick={() => go(w.id)} />
          ))}

          {/* prediction points */}
          {predictions.map((p, i) => {
            const cx = x(p.noveltyScore), cy = y(p.confidence), on = hover === p.id;
            return (
              <motion.g key={p.id}
                initial={reduce ? false : { opacity: 0, scale: 0.4 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                transition={{ delay: reduce ? 0 : 0.04 * i, type: "spring", stiffness: 220, damping: 18 }}
                style={{ cursor: "pointer", transformOrigin: `${cx}px ${cy}px` }}
                onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)} onClick={() => go(p.id)}>
                <circle cx={cx} cy={cy} r={on ? 17 : 14} fill="#1b3a5b" opacity={on ? 1 : 0.92} stroke="#f4f1e9" strokeWidth={2} />
                <text x={cx} y={cy + 3.5} textAnchor="middle" className="font-mono" fontSize={10.5} fill="#fff" style={{ pointerEvents: "none" }}>{p.rank}</text>
              </motion.g>
            );
          })}
        </svg>

        {active && (
          <div className="absolute top-2 left-2 right-2 sm:left-auto sm:max-w-xs rounded-xl p-3 pointer-events-none" style={{ background: "var(--ink)", color: "#f4f1e9" }}>
            <div className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#c9b48f" }}>
              {activeRank > 0 ? `#${activeRank} · the ten` : "watchlist"}
            </div>
            <div className="font-label font-bold text-sm mt-0.5 leading-snug">{active.title}</div>
            <div className="font-mono text-[11px] mt-1.5" style={{ color: "#b7bcc4" }}>{active.confidence}% confidence · novelty {active.noveltyScore}/100</div>
          </div>
        )}
      </div>
      <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "#8a8f99" }}>
        The bet was a forecast that is both fresh and likely, so the ten cluster up and to the right. Hover a point for the call; click to jump to it.
      </p>
    </figure>
  );
}
