import Link from "next/link";
import type { Metadata } from "next";
import { predictions, meta } from "../../lib/predictions";

export const metadata: Metadata = {
  title: "The December scorecard — resolving the NeurIPS 2026 forecast",
  description:
    "Each of the ten pre-registered predictions and its falsifiable December 2026 test, scored hit or miss against the public program and a naive baseline once decisions are out.",
};

export default function Resolution() {
  return (
    <main className="px-5 sm:px-8">
      <div className="max-w-[760px] mx-auto pt-16 sm:pt-24 pb-24">
        <Link href="/" className="font-mono text-xs" style={{ color: "#7c2d12" }}>← research.upneja.ai</Link>
        <p className="eyebrow mt-8">The scorecard · resolves December 2026</p>
        <h1 className="font-display mt-4 leading-[1.05] tracking-[-0.01em]" style={{ fontSize: "clamp(34px, 6vw, 60px)", color: "var(--ink)" }}>
          The December scorecard
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "#555b66" }}>
          This is the answer key, published empty. When the NeurIPS 2026 program goes public, each prediction
          resolves hit or miss against its own test, with no partial credit and no moving the line. Then the set is
          scored two ways: hit rate against a naive baseline that just predicts last year&apos;s themes will repeat,
          and calibration, whether the higher-confidence calls came true more often than the lower ones.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs" style={{ color: "#8a8f99" }}>
          <span>◆ sealed {meta.sealed}</span>
          <span>◆ decisions ~24 Sep 2026</span>
          <span>◆ conference {meta.resolves.split("· ").slice(1).join("· ")}</span>
          <span>◆ status: awaiting program</span>
        </div>

        <div className="mt-10 space-y-3">
          {predictions.map((p) => (
            <div key={p.id} className="rounded-2xl p-5 sm:p-6" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
              <div className="flex items-start gap-4">
                <span className="font-display leading-none shrink-0" style={{ fontSize: 32, color: "var(--line2)" }}>{String(p.rank).padStart(2, "0")}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h2 className="font-label font-bold leading-snug" style={{ fontSize: 16, color: "var(--ink)" }}>{p.title}</h2>
                    <span className="font-mono text-xs shrink-0" style={{ color: p.confidence >= 80 ? "#1f7a4d" : "#1b3a5b" }}>{p.confidence}% called</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>{p.criterion}</p>
                  <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] px-2.5 py-1 rounded-full" style={{ background: "var(--panel2)", color: "#9a6b14", border: "1px solid var(--line)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#9a6b14", display: "inline-block" }} />
                    pending · resolves Dec 2026
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl p-6" style={{ background: "var(--panel2)", border: "1px solid var(--line)" }}>
          <div className="eyebrow mb-2" style={{ color: "#7c2d12" }}>The baseline it has to beat</div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
            A forecast that just echoes the prior year is the null hypothesis. On the two NeurIPS years that already
            resolved, that naive extrapolator was strong: it would have landed roughly 6 of 11 defining themes in
            2024 and 5 of 11 in 2025 (see the <Link href="/#backtest" style={{ color: "#7c2d12" }}>backtest</Link>,
            including the audit that corrected those numbers down). So the bar is high, and the number that matters in
            December is not how many of the ten hit, but how many of the five beyond-baseline calls hit, the fresh
            ones a naive extrapolator would have missed.
          </p>
        </div>

        <p className="mt-10 font-mono text-xs" style={{ color: "#8a8f99" }}>
          research.upneja.ai · the full method is in the <Link href="/paper" style={{ color: "#7c2d12" }}>paper</Link> · sealed {meta.sealed}
        </p>
      </div>
    </main>
  );
}
