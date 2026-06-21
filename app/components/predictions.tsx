"use client";

import { useState } from "react";
import { predictions, watchlist, type Prediction } from "../../lib/predictions";

const NAVY = "#1b3a5b";
const INK2 = "#555b66";
const INK3 = "#8a8f99";

function confColor(c: number) {
  if (c >= 85) return "#1f7a4d";
  if (c >= 78) return NAVY;
  return "#9a6b14";
}

function ConfMeter({ c }: { c: number }) {
  const col = confColor(c);
  return (
    <div className="flex items-center gap-2" title={`${c}% confidence`}>
      <div className="h-1.5 w-24 rounded-full overflow-hidden" style={{ background: "#0000000f" }}>
        <div style={{ width: `${c}%`, height: "100%", background: col, borderRadius: 999 }} />
      </div>
      <span className="font-mono text-sm font-medium" style={{ color: col }}>{c}%</span>
    </div>
  );
}

function Card({ p }: { p: Prediction }) {
  const [open, setOpen] = useState(false);
  const col = confColor(p.confidence);
  return (
    <article
      className="rounded-2xl p-6 sm:p-7 transition"
      style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span className="font-display leading-none" style={{ fontSize: 40, color: "#00000018" }}>
            {String(p.rank).padStart(2, "0")}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ background: "#1b3a5b0f", color: NAVY }}>{p.lane}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ border: `1px solid ${col}`, color: col }}>{p.novelty}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl leading-snug" style={{ color: "var(--ink)" }}>
              {p.title}
            </h3>
          </div>
        </div>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed" style={{ color: INK2 }}>{p.thesis}</p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <ConfMeter c={p.confidence} />
        <button onClick={() => setOpen((o) => !o)}
          className="font-mono text-xs px-3 py-1 rounded-full transition"
          style={{ border: "1px solid var(--line2)", color: INK2 }}>
          {open ? "hide evidence −" : "evidence + criterion +"}
        </button>
      </div>

      {open && (
        <div className="mt-5 grid gap-4">
          <div>
            <div className="eyebrow mb-2">Evidence</div>
            <ul className="space-y-2">
              {p.evidence.map((e, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                  <span style={{ color: col, flex: "0 0 auto" }}>◆</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-4" style={{ background: "var(--panel2)", border: `1px solid var(--line)` }}>
            <div className="eyebrow mb-1.5" style={{ color: "#7c2d12" }}>Falsifiable · resolves Dec 2026</div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>{p.criterion}</p>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Predictions() {
  const [sort, setSort] = useState<"rank" | "conf">("rank");
  const ordered = [...predictions].sort((a, b) =>
    sort === "rank" ? a.rank - b.rank : b.confidence - a.confidence
  );
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
        <p className="text-sm" style={{ color: INK2 }}>
          Ten forecasts. Each carries an explicit confidence and a December-2026 test it can fail.
        </p>
        <div className="flex gap-2">
          {(["rank", "conf"] as const).map((s) => (
            <button key={s} onClick={() => setSort(s)}
              className="font-mono text-xs px-3 py-1 rounded-full transition"
              style={{
                border: `1px solid ${sort === s ? NAVY : "var(--line)"}`,
                background: sort === s ? "#1b3a5b10" : "transparent",
                color: sort === s ? NAVY : INK3,
              }}>
              {s === "rank" ? "forecast order" : "by confidence"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {ordered.map((p) => <Card key={p.id} p={p} />)}
      </div>

      <div className="mt-10">
        <div className="eyebrow mb-3">Watchlist · strong signals cut from the ten for novelty or slot limits</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {watchlist.map((w) => (
            <div key={w.id} className="rounded-xl p-4 flex gap-3"
              style={{ background: "var(--panel2)", border: "1px solid var(--line)" }}>
              <span className="font-mono text-xs mt-0.5" style={{ color: confColor(w.confidence) }}>{w.confidence}%</span>
              <div>
                <div className="font-label font-bold text-[15px]" style={{ color: "var(--ink)" }}>{w.title}</div>
                <div className="text-[13px] mt-0.5 leading-relaxed" style={{ color: INK2 }}>{w.why}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
