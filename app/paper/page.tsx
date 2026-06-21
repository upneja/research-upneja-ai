import Link from "next/link";
import type { Metadata } from "next";
import { predictions, watchlist, meta } from "../../lib/predictions";

export const metadata: Metadata = {
  title: "Forecasting the Research Frontier — a pre-registered test of machine research foresight",
  description:
    "A frontier model (Opus 4.8) forecast ten novel concepts for NeurIPS 2026 in June 2026, pre-registered and falsifiable, scored in December against a naive baseline. Method, predictions, and scoring rule.",
};

function H({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="font-display mt-14 mb-4 leading-tight" style={{ fontSize: 28, color: "var(--ink)" }}>
      <span className="font-mono mr-3" style={{ fontSize: 15, color: "#8a8f99" }}>{n}</span>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-[1.75]" style={{ fontSize: 17, color: "#2c313a" }}>{children}</p>;
}

export default function Paper() {
  return (
    <main className="px-5 sm:px-8">
      <article className="max-w-[680px] mx-auto pt-16 sm:pt-24 pb-24">
        {/* masthead */}
        <Link href="/" className="font-mono text-xs" style={{ color: "#7c2d12" }}>← research.upneja.ai</Link>
        <p className="eyebrow mt-8">Working paper · pre-registration · {meta.sealed}</p>
        <h1 className="font-display mt-4 leading-[1.08] tracking-[-0.01em]" style={{ fontSize: "clamp(34px, 6vw, 56px)", color: "var(--ink)" }}>
          Forecasting the research frontier
        </h1>
        <p className="font-display mt-2" style={{ fontSize: 22, color: "#555b66", fontStyle: "italic" }}>
          a pre-registered test of machine research foresight
        </p>
        <p className="mt-6 font-mono text-xs leading-relaxed" style={{ color: "#8a8f99" }}>
          forecaster: Claude Opus 4.8, with a 9-scout, 3-critic research process · sealed {meta.sealed} · resolves at {meta.resolves}
        </p>

        {/* abstract */}
        <div className="mt-10 rounded-2xl p-6 sm:p-7" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="eyebrow mb-3">Abstract</div>
          <p className="leading-[1.7]" style={{ fontSize: 15.5, color: "#2c313a" }}>
            There is an open debate about whether large language models can do anything genuinely novel, or only
            recombine what they have seen. Most attempts to settle it rely on human judges rating the novelty of
            model-generated ideas, which is subjective and easy to contest. We take a different route. In June 2026,
            with the NeurIPS 2026 papers submitted but under review and the program not yet public, a frontier model
            (Opus 4.8) used a multi-agent research process to forecast ten concepts that will be prominent at the
            December conference. The forecast is pre-registered: each prediction names a concept that is fresh
            relative to 2024 and 2025, rests on public leading indicators, and carries a falsifiable December
            criterion. When the program becomes public, the forecast is scored, hit or miss, against a naive baseline
            that extrapolates last year&apos;s themes. This measures research foresight, the ability to read a field
            and bet on which new directions will matter, under an objective future ground truth. We describe the
            method, state the ten predictions and their tests, and fix the scoring rule in advance.
          </p>
        </div>

        <H n="1">The question, stated honestly</H>
        <P>
          The recurring argument online is that a language model cannot be novel. It interpolates. It returns the
          average of its training data dressed up in fluent prose. The counter-argument is that this is also a fair
          description of most human research, and that the line between recombination and invention is thinner than
          anyone admits. The debate stalls because the usual way to resolve it is to ask people whether a
          model&apos;s ideas feel novel, and people disagree.
        </P>
        <P>
          The closest prior work, Si, Yang, and Hashimoto&apos;s large human study of LLM-generated research ideas
          (2024), found that reviewers rated machine ideas as more novel than expert ideas but less feasible. It is
          a careful study, and it still inherits the core weakness: novelty was a subjective rating, with no ground
          truth about whether the ideas were actually any good. We wanted a test with an answer key.
        </P>
        <P>
          So we are precise about what is being measured. This is not a test of invention from nothing. The model
          did not conjure these concepts out of the air; it read the field. What it did is harder to fake: from
          signals available to everyone, it picked which fresh, not-yet-obvious directions will matter, and it
          committed to that bet before the answer was public. Call it research foresight. Foresight is scoreable in
          a way that felt-novelty is not, because the future arrives and settles it.
        </P>

        <H n="2">Why mid-2026 is the right moment</H>
        <P>
          NeurIPS runs on a fixed clock. The 2026 papers were due in early May, they are under review through the
          summer, and decisions land in late September, with the conference in December. That timing is what makes
          the forecast tractable rather than mystical. As of June, the work that will define NeurIPS 2026 is already
          written and largely on arXiv. We are not predicting unknown research. We are predicting which of the
          directions already visible in the open literature will earn prominence: a cluster of accepted papers, an
          oral, an award, a workshop.
        </P>
        <P>
          That also sharpens the novelty claim. The two conferences immediately upstream, ICLR 2026 and ICML 2026,
          have already happened, and their accepted papers are the strongest single proxy for what the same
          submission cohort will produce at NeurIPS. A good forecast reads those leading indicators and separates a
          genuine, fresh surge from a topic that merely looks busy because the whole field grew. The pipeline
          roughly doubled in two years, so raw paper counts rose for almost everything; the discipline is to read
          share, not volume.
        </P>

        <H n="3">Method</H>
        <P>
          The forecast came out of a process designed to be reproducible and adversarial, not a single prompt. Nine
          research agents searched the open literature in parallel, each covering one subfield and each restricted
          to public sources from the months after the model&apos;s own training cutoff, so the recent frontier had
          to be found by search rather than recalled. Their findings were synthesized into a candidate pool, then
          attacked by three independent critics with separate jobs: one for novelty, one for the strength of the
          evidence, one for whether each criterion was actually checkable.
        </P>
        <P>
          The critics earned their place. They caught a factual error, a CVPR best paper that an early draft had
          misattributed as a world-model result when it was a reconstruction method, and the claim was removed. They
          caught a missing theme, multimodal generation, which is the steepest-rising area in the field and had been
          left off the list entirely; it was added. And they caught a systematic over-confidence, the natural drift
          of a model rolling sub-claims up into a headline, and the numbers were pulled back. A forecast that
          survives being attacked by its own author is worth more than one that was never tested.
        </P>
        <P>
          Four rules held throughout. Confidence is cross-validation times a hard indicator: a concept independently
          surfaced by several agents and backed by an award, an oral, or an official program change scores higher
          than one resting on a single preprint. Momentum is read as share, not count. No prediction is allowed to
          depend on an unverifiable model name or a fast-moving preprint nobody opened; the load-bearing anchors are
          the NeurIPS program changes, the ICLR and ICML accepted-paper records, and a constant-method keyword scan.
          And every prediction must carry a December test it can fail.
        </P>

        <H n="4">The pre-registered forecast</H>
        <P>
          Below are the ten, with their stated confidence and the one-line version of each December test. The full
          cards, with the evidence behind each, are on the <Link href="/" style={{ color: "#7c2d12" }}>forecast page</Link>.
          This list is the pre-registration: it is dated, and it does not change after today.
        </P>
        <ol className="mt-6 space-y-4">
          {predictions.map((p) => (
            <li key={p.id} className="rounded-xl p-5" style={{ background: "var(--panel2)", border: "1px solid var(--line)" }}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm" style={{ color: "#8a8f99" }}>{String(p.rank).padStart(2, "0")}</span>
                <h3 className="font-label font-bold leading-snug flex-1" style={{ fontSize: 16, color: "var(--ink)" }}>{p.title}</h3>
                <span className="font-mono text-sm shrink-0" style={{ color: p.confidence >= 80 ? "#1f7a4d" : "#1b3a5b" }}>{p.confidence}%</span>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider" style={{ color: "#7c2d12" }}>resolves if</p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "#555b66" }}>{p.criterion}</p>
            </li>
          ))}
        </ol>
        <P>
          Six more concepts sit on a watchlist, strong enough to track but cut from the ten for novelty, venue
          routing, or overlap. Two of them ({watchlist[0].title.split(" &")[0]} and the science of peer review)
          carry higher raw probability than the boldest of the ten; they lost their slots on grounds other than
          strength, which is itself part of the record.
        </P>

        <H n="5">How it gets scored</H>
        <P>
          In December, when the program is public, each prediction is checked against its own criterion using the
          accepted-paper titles and abstracts, the list of orals and spotlights, the awards, and the workshop slate.
          Each resolves hit or miss. There is no partial credit and no moving the line; the criteria were written to
          be checkable by anyone with the public program in hand.
        </P>
        <P>
          One number alone would not be convincing, so the forecast is scored two ways. First, hit rate against a
          naive baseline: a forecaster that simply predicts the most prominent themes of NeurIPS 2025 will repeat.
          If reading this year&apos;s leading indicators does no better than echoing last year, the forecast has
          shown nothing. Second, calibration: the confidences should track the hit rate, so that the things marked
          85 percent come true more often than the things marked 65. With only ten predictions, calibration is a
          weak signal, which is a limitation we state rather than hide.
        </P>

        <H n="6">Limitations</H>
        <P>
          The honest list is short and real. This measures foresight, not invention, and a reader who wants proof
          that a model can generate ideas nobody has had will not find it here; that is a different experiment, and
          a natural next arm. The model is being measured on its own forecast, so the score has to be the objective
          program, not anything the model says about itself; a fuller test would put other frontier models and human
          forecasters on the identical task and compare. Ten predictions over one venue in one year is a small
          sample. Some of the supporting evidence comes from fast-moving 2026 preprints, and while the load-bearing
          anchors were restricted to verified sources, residual risk remains. And a concept can be real yet land at
          ICLR, ICML, CVPR, or a systems venue instead of NeurIPS, which would score as a miss here even though the
          underlying call was right.
        </P>

        <H n="7">What a result would mean</H>
        <P>
          If the forecast hits well and beats the naive baseline, that is evidence of something specific and
          modest: a model can read public signals and bet on which new research directions will matter better than
          extrapolation does. Not invention, not genius, but real judgment, written down in advance and checked. If
          it misses, that is also a result, and a more interesting one than a comfortable post-hoc story would have
          been: it would say the model over-indexed on what looked busy in mid-2026, or that the frontier is simply
          harder to call than it looks. Either way the value is in the pre-registration. The forecast is dated, the
          rule is fixed, and December does the grading.
        </P>

        {/* references */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="eyebrow mb-4">References &amp; provenance</div>
          <ul className="space-y-2.5 font-mono text-xs leading-relaxed" style={{ color: "#555b66" }}>
            <li>Si, Yang, Hashimoto. <span style={{ color: "var(--ink)" }}>Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study with 100+ NLP Researchers.</span> arXiv:2409.04109, 2024.</li>
            <li>NeurIPS 2026 Call for Papers and the Evaluations &amp; Datasets track. neurips.cc/Conferences/2026.</li>
            <li>ICLR 2026 Outstanding Papers and review-process retrospective. blog.iclr.cc, 2026.</li>
            <li>ICML 2026 accepted-paper statistics and agent-paper census. icml.cc, 2026.</li>
            <li>Full nine-scout research journal, the candidate pool, and the three red-team critiques are versioned alongside this forecast.</li>
          </ul>
          <p className="mt-8 font-mono text-xs" style={{ color: "#8a8f99" }}>
            research.upneja.ai · forecast by Claude Opus 4.8 · sealed {meta.sealed} · resolves December 2026
          </p>
        </div>
      </article>
    </main>
  );
}
