import { backtest, baseline, lessons, leaderboard, audit, type Called } from "../../lib/backtest";

const CALLED: Record<Called, { dot: string; label: string }> = {
  yes: { dot: "#1f7a4d", label: "surging in the prior signal" },
  partial: { dot: "#9a6b14", label: "partly visible" },
  "late-shock": { dot: "#7c2d12", label: "late shock the method can't see" },
  no: { dot: "#8a8f99", label: "a fresh surprise it missed" },
};

function YearCard({ y }: { y: (typeof backtest)[number] }) {
  return (
    <div className="rounded-2xl p-6 sm:p-7" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="font-display" style={{ fontSize: 26, color: "var(--ink)" }}>NeurIPS {y.year}</h3>
        <span className="font-mono text-xs" style={{ color: "#8a8f99" }}>{y.venue} · {y.accepted.toLocaleString()} accepted</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display" style={{ fontSize: 34, color: "#1b3a5b" }}>{y.baselineHit}</span>
        <span className="font-mono text-sm" style={{ color: "#555b66" }}>of {y.defining.length} defining themes the naive baseline would have called</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "#555b66" }}>{y.story}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {y.defining.map((d) => (
          <span key={d.concept} className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px]"
            style={{ background: "var(--panel2)", border: "1px solid var(--line)", color: "var(--ink)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: CALLED[d.called].dot, display: "inline-block", flex: "0 0 auto" }} />
            {d.concept}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Backtest() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5">
        {backtest.map((y) => <YearCard key={y.year} y={y} />)}
      </div>

      {/* legend */}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {(Object.keys(CALLED) as Called[]).map((k) => (
          <span key={k} className="inline-flex items-center gap-2 font-mono text-[11px]" style={{ color: "#555b66" }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: CALLED[k].dot, display: "inline-block" }} />
            {CALLED[k].label}
          </span>
        ))}
      </div>

      {/* the two findings */}
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl p-6" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="eyebrow mb-2" style={{ color: "#1f7a4d" }}>Finding 1 · the method has signal</div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
            On both resolved years, most of what ended up defining NeurIPS was already surging in the prior ICLR,
            ICML, and arXiv signal. The input carried the answer. The clean exception is inference-time compute in
            2024: o1 shipped weeks before the conference, the kind of late shock a year-out method cannot see.
          </p>
        </div>
        <div className="rounded-2xl p-6" style={{ background: "#15171c" }}>
          <div className="eyebrow mb-2" style={{ color: "#c9b48f" }}>Finding 2 · the bar is high, which is the point</div>
          <p className="text-sm leading-relaxed" style={{ color: "#e8e4d8" }}>{baseline.note}</p>
        </div>
      </div>

      {/* the two lessons */}
      <div className="mt-5 grid md:grid-cols-2 gap-5">
        {lessons.map((l) => (
          <div key={l.title} className="rounded-2xl p-6" style={{ background: "var(--panel2)", border: "1px solid var(--line)" }}>
            <h4 className="font-label font-extrabold text-[15px]" style={{ color: "var(--ink)" }}>{l.title}</h4>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>{l.body}</p>
          </div>
        ))}
      </div>

      {/* leaderboard */}
      <div className="mt-8 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--line)" }}>
        <div className="px-6 py-4 flex items-baseline justify-between gap-3" style={{ background: "var(--panel2)", borderBottom: "1px solid var(--line)" }}>
          <div className="eyebrow">The leaderboard · forecasters on the same time-resolved task</div>
          <span className="font-mono text-[11px]" style={{ color: "#8a8f99" }}>2024 / 2025 backtest</span>
        </div>
        <div style={{ background: "var(--panel)" }}>
          {leaderboard.map((r, i) => (
            <div key={r.forecaster} className="px-6 py-4 flex items-start justify-between gap-4"
              style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
              <div className="min-w-0">
                <div className="font-label font-bold text-[15px]" style={{ color: "var(--ink)" }}>{r.forecaster}</div>
                <div className="text-[13px] mt-0.5 leading-relaxed" style={{ color: "#555b66" }}>{r.note}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-sm tabular-nums" style={{ color: r.status === "scored" ? "#1b3a5b" : "#8a8f99" }}>{r.result}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    color: r.status === "scored" ? "#1f7a4d" : r.status === "pending" ? "#1b3a5b" : "#8a8f99",
                    border: `1px solid ${r.status === "scored" ? "#1f7a4d40" : r.status === "pending" ? "#1b3a5b40" : "var(--line2)"}`,
                  }}>
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* the self-audit disclosure — the credibility move */}
      <div className="mt-8 rounded-2xl p-6 sm:p-7" style={{ background: "var(--panel2)", border: "1px solid #7c2d1240" }}>
        <div className="eyebrow mb-3" style={{ color: "#7c2d12" }}>Integrity · we red-teamed ourselves</div>
        <h3 className="font-display leading-tight" style={{ fontSize: 22, color: "var(--ink)" }}>{audit.headline}</h3>
        <ul className="mt-4 space-y-2.5">
          {audit.changes.map((c) => (
            <li key={c} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "#3c424c" }}>
              <span className="shrink-0 font-mono" style={{ color: "#7c2d12" }}>↓</span><span>{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed" style={{ color: "#555b66" }}>{audit.note}</p>
      </div>
    </div>
  );
}
