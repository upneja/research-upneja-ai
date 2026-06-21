import Link from "next/link";
import Landscape from "./components/landscape";
import Predictions from "./components/predictions";
import Backtest from "./components/backtest";
import Prereg from "./components/prereg";
import { method, honesty } from "../lib/predictions";
import { neurips2026 } from "../lib/datasets";

function SectionHead({ n, kicker, title, dek }: { n: string; kicker: string; title: string; dek: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-3">{n} · {kicker}</p>
      <h2 className="font-display text-3xl sm:text-4xl leading-tight" style={{ color: "var(--ink)" }}>{title}</h2>
      <p className="mt-3 text-[15px] sm:text-base leading-relaxed" style={{ color: "#555b66" }}>{dek}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="px-5 sm:px-8">
      {/* hero */}
      <header className="max-w-6xl mx-auto pt-20 sm:pt-28 pb-10">
        <p className="eyebrow">research.upneja.ai · a benchmark for AI research foresight</p>
        <h1 className="font-display mt-5 leading-[1.03] tracking-[-0.02em]"
          style={{ fontSize: "clamp(38px, 7.5vw, 82px)", color: "var(--ink)" }}>
          Can a model forecast<br />the research frontier?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "#555b66" }}>
          A test of research taste judged not by human raters but by time. The method reads public signals and bets
          on which fresh directions will matter, then waits for the answer. We test it first on NeurIPS 2024 and
          2025, which already resolved, then run it live on NeurIPS 2026: ten predictions sealed in June, scored in
          December against a naive baseline. Forecaster, Claude Opus 4.8.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs" style={{ color: "#8a8f99" }}>
          <span>◆ {neurips2026.location}</span>
          <span>◆ {neurips2026.dates}</span>
          <span>◆ sealed 21 Jun 2026</span>
          <span>◆ resolves Dec 2026</span>
          <span>◆ 9 scouts · 3 critics · 1 backtest</span>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#backtest" className="font-label font-bold text-sm px-5 py-2.5 rounded-full"
            style={{ background: "#1b3a5b", color: "#fff" }}>Does it work? ↓</a>
          <a href="#predictions" className="font-label font-bold text-sm px-5 py-2.5 rounded-full"
            style={{ border: "1px solid #d4cdba", color: "var(--ink)" }}>The ten predictions</a>
          <Link href="/paper" className="font-label font-bold text-sm px-5 py-2.5 rounded-full"
            style={{ border: "1px solid #d4cdba", color: "var(--ink)" }}>Read the paper →</Link>
        </div>
      </header>

      {/* the experiment framing */}
      <section className="max-w-6xl mx-auto pb-14">
        <div className="rounded-2xl p-6 sm:p-8" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="eyebrow mb-4">What this is, and is not</div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-label font-extrabold text-base" style={{ color: "var(--ink)" }}>A test of foresight, not invention</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>
                The model did not invent these concepts. It read the field and bet on which fresh directions will
                matter, before the answer was public. That is research judgment, and it is scoreable.
              </p>
            </div>
            <div>
              <h3 className="font-label font-extrabold text-base" style={{ color: "var(--ink)" }}>Judged by time, not by raters</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>
                Most attempts to measure model novelty ask humans whether ideas feel new. This uses a future event
                as the answer key. The forecast resolves hit or miss against the public program.
              </p>
            </div>
            <div>
              <h3 className="font-label font-extrabold text-base" style={{ color: "var(--ink)" }}>It has to beat a dumb baseline</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>
                A forecast that just echoes last year is the null hypothesis. The bar is a naive extrapolator, and
                as the backtest shows, that bar is high. Taste only shows in the calls the baseline misses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* the backtest */}
      <section id="backtest" className="max-w-6xl mx-auto py-14 scroll-mt-8">
        <div className="mb-8">
          <SectionHead n="I" kicker="the backtest"
            title="Does the method even work?"
            dek="Before trusting a 2026 call you cannot check yet, test the method on the two NeurIPS years that already resolved. We gathered what actually defined NeurIPS 2024 and 2025 independently of the prior signals, then asked whether those signals saw it coming." />
        </div>
        <Backtest />
        <div className="mt-10">
          <Prereg />
        </div>
      </section>

      {/* data layer */}
      <section id="landscape" className="max-w-6xl mx-auto py-14 scroll-mt-8">
        <div className="mb-8">
          <SectionHead n="II" kicker="the signals"
            title="The landscape the 2026 call reads from"
            dek="The same kind of public signal the backtest validated, for the current cycle. Momentum is read as share, not raw count, because the submission pipeline roughly doubled in two years." />
        </div>
        <Landscape />
      </section>

      {/* predictions */}
      <section id="predictions" className="max-w-4xl mx-auto py-14 scroll-mt-8">
        <div className="mb-8">
          <SectionHead n="III" kicker="the live forecast"
            title="Ten predictions for NeurIPS 2026"
            dek="Round one of the benchmark. Each names a specific, fresh concept, not a 2025 truism, and the ones that actually test foresight are the beyond-baseline calls a naive extrapolator would have missed." />
        </div>
        <Predictions />
      </section>

      {/* method */}
      <section className="max-w-4xl mx-auto py-14">
        <div className="mb-8">
          <SectionHead n="IV" kicker="how this was built"
            title="Method, and the honesty rules"
            dek="A forecast is only as good as the discipline behind it. Confidence is cross-validation times a hard leading indicator, every number traces to a source, and nothing rests on a rumor." />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {method.map((m) => (
            <div key={m.k} className="rounded-2xl p-6" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
              <h3 className="font-label font-extrabold text-lg" style={{ color: "var(--ink)" }}>{m.k}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>{m.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl p-6" style={{ background: "var(--panel2)", border: "1px solid var(--line)" }}>
          <div className="eyebrow mb-3" style={{ color: "#7c2d12" }}>Honesty rules baked into the data</div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {honesty.map((h) => (
              <li key={h} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                <span style={{ color: "#7c2d12" }}>·</span><span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* footer */}
      <footer className="max-w-4xl mx-auto py-16 rule" style={{ borderTop: "1px solid var(--line)" }}>
        <p className="font-display text-xl" style={{ color: "var(--ink)" }}>This forecast is dated and falsifiable.</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "#555b66" }}>
          Each prediction resolves hit or miss against its own December 2026 test, and the set is scored against a
          naive extrapolate-last-year baseline. Built from a nine-scout research sweep, hardened by three adversarial
          critics, and validated by a backtest of the two NeurIPS years that already resolved.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-label font-bold text-sm">
          <Link href="/paper" style={{ color: "var(--ink)" }}>The paper →</Link>
          <Link href="/resolution" style={{ color: "var(--ink)" }}>The December scorecard →</Link>
          <a href="https://github.com/upneja/research-upneja-ai" style={{ color: "var(--ink)" }}>The repo →</a>
        </div>
        <p className="mt-5 font-mono text-xs" style={{ color: "#8a8f99" }}>
          research.upneja.ai · sealed June 2026 · resolves December 2026 · forecast by Opus 4.8
        </p>
      </footer>
    </main>
  );
}
