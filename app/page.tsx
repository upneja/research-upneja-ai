import Link from "next/link";
import Landscape from "./components/landscape";
import Predictions from "./components/predictions";
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
        <p className="eyebrow">research.upneja.ai · a pre-registered experiment · sealed June 2026</p>
        <h1 className="font-display mt-5 leading-[1.03] tracking-[-0.02em]"
          style={{ fontSize: "clamp(38px, 7.5vw, 82px)", color: "var(--ink)" }}>
          Can a model forecast<br />the research frontier?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "#555b66" }}>
          In June 2026, while the NeurIPS papers sat under review, a frontier model (Opus 4.8) wrote down ten
          concepts it expects to be prominent at the December conference. Each is novel relative to 2024 and 2025,
          read off public signals already visible on arXiv, ICLR 2026, and ICML 2026, and each carries a test it
          can fail. In December the program goes public and the set is scored against a naive “extrapolate last
          year” baseline.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs" style={{ color: "#8a8f99" }}>
          <span>◆ {neurips2026.location}</span>
          <span>◆ {neurips2026.dates}</span>
          <span>◆ papers due {neurips2026.paperDeadline}</span>
          <span>◆ decisions {neurips2026.decisions}</span>
          <span>◆ 9 research scouts · 3 adversarial critics</span>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#predictions" className="font-label font-bold text-sm px-5 py-2.5 rounded-full"
            style={{ background: "#1b3a5b", color: "#fff" }}>The ten predictions ↓</a>
          <a href="#landscape" className="font-label font-bold text-sm px-5 py-2.5 rounded-full"
            style={{ border: "1px solid #d4cdba", color: "var(--ink)" }}>See the data first</a>
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
                The model did not invent these concepts. It read the field and bet on which fresh directions
                will matter, before the answer was public. That is research judgment, and it is scoreable.
              </p>
            </div>
            <div>
              <h3 className="font-label font-extrabold text-base" style={{ color: "var(--ink)" }}>Falsifiable in December</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>
                Every prediction has a December 2026 criterion checkable against the public program: accepted
                titles, orals, awards, the workshop slate. Hit or miss, then scored against a naive baseline.
              </p>
            </div>
            <div>
              <h3 className="font-label font-extrabold text-base" style={{ color: "var(--ink)" }}>No self-grading</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555b66" }}>
                Opus 4.8 is being measured on an Opus 4.8 forecast, so the score is the objective program in
                December, not a rating the model gives itself. The method and the receipt live in the paper.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/paper" className="font-mono text-xs" style={{ color: "#7c2d12" }}>
              read the full method and pre-registration in the paper →
            </Link>
          </div>
        </div>
      </section>

      {/* landscape / data layer */}
      <section id="landscape" className="max-w-6xl mx-auto py-14 scroll-mt-8">
        <div className="mb-8">
          <SectionHead n="I" kicker="the data layer"
            title="The landscape, as the evidence shows it"
            dek="Before any prediction, what the field actually looks like now, and where it is accelerating. Momentum is read as share, not raw count, because the submission pipeline roughly doubled in two years." />
        </div>
        <Landscape />
      </section>

      {/* predictions */}
      <section id="predictions" className="max-w-4xl mx-auto py-14 scroll-mt-8">
        <div className="mb-8">
          <SectionHead n="II" kicker="the forecast"
            title="Ten predictions for NeurIPS 2026"
            dek="Each names a specific, fresh concept, not a 2025 truism, already cresting on hard leading indicators: the NeurIPS track rename, ICLR/ICML 2026 orals, AlphaProof's Erdős results, and a constant-method keyword scan." />
        </div>
        <Predictions />
      </section>

      {/* method */}
      <section className="max-w-4xl mx-auto py-14">
        <div className="mb-8">
          <SectionHead n="III" kicker="how this was built"
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
          naive extrapolate-last-year baseline. Built from a nine-scout research sweep of arXiv, ICLR 2026, ICML
          2026, and CVPR 2026, then hardened by three adversarial critics that caught a factual error and a missing
          theme before the ten were locked.
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
