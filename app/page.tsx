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
      <header className="max-w-6xl mx-auto pt-20 sm:pt-28 pb-14">
        <p className="eyebrow">neurips.upneja.ai · a pre-registered forecast · June 2026</p>
        <h1 className="font-display mt-5 leading-[1.02] tracking-[-0.02em]"
          style={{ fontSize: "clamp(40px, 8vw, 88px)", color: "var(--ink)" }}>
          The ML frontier,<br />before it arrives.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "#555b66" }}>
          Ten concepts that will define <strong style={{ color: "var(--ink)" }}>NeurIPS 2026</strong> — predicted now,
          while the papers sit under review. Each is novel yet high-probability, read off the research momentum
          already visible on arXiv, ICLR 2026, and ICML 2026, and each carries a December test it can fail.
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
        </div>
      </header>

      {/* landscape / data layer */}
      <section id="landscape" className="max-w-6xl mx-auto py-14 scroll-mt-8">
        <div className="mb-8">
          <SectionHead n="I" kicker="the data layer"
            title="The landscape, as the evidence shows it"
            dek="Before any prediction: what the field actually looks like now, and where it is accelerating. Momentum is read as share, not raw count, because the submission pipeline roughly doubled in two years." />
        </div>
        <Landscape />
      </section>

      {/* predictions */}
      <section id="predictions" className="max-w-4xl mx-auto py-14 scroll-mt-8">
        <div className="mb-8">
          <SectionHead n="II" kicker="the forecast"
            title="Ten predictions for NeurIPS 2026"
            dek="Each names a specific, fresh concept — not a 2025 truism — already cresting on hard leading indicators: the NeurIPS track rename, ICLR/ICML 2026 orals, AlphaProof's Erdős results, and a constant-method keyword scan." />
        </div>
        <Predictions />
      </section>

      {/* method */}
      <section className="max-w-4xl mx-auto py-14">
        <div className="mb-8">
          <SectionHead n="III" kicker="how this was built"
            title="Method, and the honesty rules"
            dek="A forecast is only as good as the discipline behind it. Confidence is cross-validation times a hard leading indicator; every number traces to a source; nothing rests on a rumor." />
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
        <p className="font-display text-xl" style={{ color: "var(--ink)" }}>A pre-registration, not a hot take.</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "#555b66" }}>
          This page is timestamped and criterion-based. After the program is public in December 2026, each prediction
          resolves hit or miss against its own falsifiable test, and the set is scored against a naive
          “extrapolate last year” baseline. Built from a 9-scout research sweep of arXiv, ICLR 2026, ICML 2026, and
          CVPR 2026, then hardened by three adversarial critics.
        </p>
        <p className="mt-6 font-mono text-xs" style={{ color: "#8a8f99" }}>
          neurips.upneja.ai · forecast dated June 2026 · resolves December 2026
        </p>
      </footer>
    </main>
  );
}
