import Link from "next/link";
import type { Metadata } from "next";
import { predictions, meta } from "../../lib/predictions";
import { backtest } from "../../lib/backtest";

export const metadata: Metadata = {
  title: "Forecasting the Research Frontier — a benchmark for AI research foresight, judged by time",
  description:
    "A frontier model pre-registers ten falsifiable NeurIPS 2026 predictions, backtested on the two NeurIPS years that already resolved, scored against a naive baseline. Method, backtest, predictions, and scoring rule.",
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
        <Link href="/" className="font-mono text-xs" style={{ color: "#7c2d12" }}>← research.upneja.ai</Link>
        <p className="eyebrow mt-8">Working paper · pre-registration · {meta.sealed}</p>
        <h1 className="font-display mt-4 leading-[1.08] tracking-[-0.01em]" style={{ fontSize: "clamp(34px, 6vw, 56px)", color: "var(--ink)" }}>
          Forecasting the research frontier
        </h1>
        <p className="font-display mt-2" style={{ fontSize: 22, color: "#555b66", fontStyle: "italic" }}>
          a benchmark for AI research foresight, judged by time
        </p>
        <p className="mt-6 font-mono text-xs leading-relaxed" style={{ color: "#8a8f99" }}>
          forecaster: Claude Opus 4.8, with a 9-scout, 3-critic research process · sealed {meta.sealed} · resolves at {meta.resolves}
        </p>

        <div className="mt-10 rounded-2xl p-6 sm:p-7" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
          <div className="eyebrow mb-3">Abstract</div>
          <p className="leading-[1.7]" style={{ fontSize: 15.5, color: "#2c313a" }}>
            There is an open debate about whether large language models can do anything genuinely novel, or only
            recombine what they have seen. Most attempts to settle it ask human judges whether model-generated ideas
            feel new, which is subjective and easy to contest. We use a future event as the answer key instead. In
            June 2026, with the NeurIPS 2026 papers submitted but the program not yet public, a frontier model used a
            multi-agent research process to forecast ten concepts that will be prominent at the December conference,
            each fresh relative to 2024 and 2025, each carrying a falsifiable December criterion, and froze them in a
            hashed, timestamped record. We first test the method on the two NeurIPS years that have already resolved.
            That backtest, built so the outcomes and the prior-year signals are gathered by separate blind passes,
            shows a naive extrapolator already lands roughly half the headline themes (about 6 of 11 in 2024 and 5
            of 11 in 2025, after two adversarial audits made us correct a first, too-flattering pass down). That sets
            a high bar and reframes the task: a model demonstrates research taste only on the fresh, specific calls
            the baseline misses, of which there are five. We describe the method, report the backtest and its two
            lessons, state the ten predictions and their tests, and fix the scoring rule in advance.
          </p>
        </div>

        <H n="1">The question, stated honestly</H>
        <P>
          The recurring argument online is that a language model cannot be novel. It interpolates. The counter is
          that this also describes most human research, and the line between recombination and invention is thinner
          than anyone admits. The debate stalls because the usual way to resolve it is to ask people whether a
          model&apos;s ideas feel novel, and people disagree. The closest prior work, Si, Yang, and Hashimoto&apos;s
          large human study (2024), found reviewers rated machine ideas more novel than expert ideas but less
          feasible. Their own 2025 follow-up settled it the other way: when researchers actually executed the ideas
          over three months, the novelty advantage reversed and the machine ideas came out weaker. Proposal-time
          judgment did not predict what the ideas were worth. That is the weakness of grading research ability by
          asking what an idea feels like now, and it is the whole reason to wait for the answer instead.
        </P>
        <P>
          We wanted a test with an answer key, so we borrow from a different tradition: forecasting science. The
          IARPA forecasting tournaments and platforms like Metaculus do not ask whether a prediction feels smart;
          they wait for the event and score it with proper scoring rules, where stating your honest probability is
          the optimal move. The one line of work that already uses a future answer key for research, the Science4Cast
          benchmarks, predicts whether two concepts will eventually co-occur, scored as binary link prediction. We
          forecast something harder and more legible: which directions become prominent, by how much, in plain
          language, resolved against the program and scored by a proper rule. And we are precise about what is
          measured. This is not invention from nothing. The
          model did not conjure these concepts; it read the field and bet on which fresh directions will matter,
          before the answer was public. Call it research foresight. Foresight is scoreable in a way felt-novelty is
          not, because the future arrives and settles it.
        </P>

        <H n="2">Why mid-2026 is the right moment</H>
        <P>
          NeurIPS runs on a fixed clock. The 2026 papers were due in early May, are under review through the summer,
          and decisions land in late September, with the conference in December. As of June, the work that will
          define NeurIPS 2026 is already written and largely on arXiv. We are not predicting unknown research; we are
          predicting which of the directions already visible in the open literature earn prominence: a cluster of
          accepted papers, an oral, an award, a workshop. The two conferences immediately upstream, ICLR 2026 and
          ICML 2026, share the submission cohort and are the strongest proxy. The discipline is to read share, not
          volume, because the pipeline roughly doubled in two years and raw counts rose for almost everything.
        </P>

        <H n="3">Method</H>
        <P>
          The forecast came out of a process built to be reproducible and adversarial, not a single prompt. Nine
          research agents searched the open literature in parallel, each covering one subfield and each restricted to
          public sources after the model&apos;s own training cutoff, so the recent frontier had to be found by search
          rather than recalled. Their findings were synthesized into a candidate pool, then attacked by three
          independent critics with separate jobs: novelty, evidence strength, and whether each criterion was actually
          checkable. The critics earned their place: they caught a misattributed award, a missing theme (multimodal,
          the steepest riser), and a systematic over-confidence, all corrected before the ten were locked. The record
          is then frozen: the predictions live in a public artifact, fingerprinted with a SHA-256 hash, anchored to a
          git commit timestamped months before the program is decided. Editing a prediction changes the hash and
          breaks the pre-registration. Anyone can check it.
        </P>

        <H n="4">The backtest: does the method work?</H>
        <P>
          A method you cannot check is a horoscope. Before asking anyone to trust a 2026 call, we test it on the two
          NeurIPS years that already resolved. The design guards against the obvious trap, that we already know how
          those years turned out. The outcomes (what actually defined NeurIPS {backtest[0].year} and {backtest[1].year})
          and the prior-year signals (what was surging at the preceding ICLR, ICML, and on arXiv) were gathered by
          separate agents, each blind to the other. We never construct a retroactive &ldquo;the model would have
          predicted X.&rdquo; We only ask: did the prior signal contain the answer, and how much of it would a
          mechanical extrapolator have caught?
        </P>
        <P>
          The result is two-sided and, we think, the most useful part of the project. First, the method has signal:
          on both years, most of what ended up defining NeurIPS was already surging in the prior ICLR, ICML, and
          arXiv data. Second, and more important, the naive baseline is strong. A mechanical extrapolator that simply
          predicts last year&apos;s top share-risers repeat lands {backtest[0].baselineHit} of 11 defining themes in {backtest[0].year}
          and {backtest[1].baselineHit} of 11 in {backtest[1].year}. The big, obvious themes are visible a year out,
          so a model predicting &ldquo;agents and reasoning and multimodal will be big&rdquo; proves nothing. The bar
          is high, and a forecast earns its keep only on the calls the baseline misses.
        </P>
        <P>
          The misses teach the two lessons that shaped the live method. One: late shocks are unforecastable a year
          out. Inference-time compute was the defining narrative of NeurIPS 2024, and it was invisible to the prior
          signal because o1 shipped in September, after the indicators. No year-out method catches a paradigm shock
          that lands between the signal and the conference, and the 2026 forecast should expect to miss its own. Two:
          weight arXiv and lab momentum over lagged conference keywords. RLVR and GRPO dominated arXiv through 2025
          but read near-zero in conference author-keywords, because DeepSeek-R1 post-dated camera-ready deadlines. A
          method that extrapolates keywords misses this; one that weights arXiv and lab releases catches it. The 2026
          method does the latter. The honest division of labor: the backtest validates the method and sets the bar;
          the live forecast tests the skill against it.
        </P>
        <P>
          One disclosure belongs here. The matching, which concepts count as called and the counts themselves, was
          done by one author who had seen both the outcomes and the prior signals, so it is the project&apos;s
          highest-risk step. Two adversarial audits attacked it and found it had drifted in the flattering direction
          every time: a count quietly rounded up, a flat theme bundled with a surging one, a known miss dropped from
          the denominator. The numbers above are the corrected, lower ones, and we also re-marked three of the ten
          predictions as baseline-ish after the audit showed an extrapolator would have caught them. Both audits are
          in the public repo. A benchmark that hides its own red-team is not one.
        </P>

        <H n="5">The pre-registered forecast</H>
        <P>
          Below are the ten, with their confidence and the one-line December test. The full cards and the evidence
          are on the <Link href="/" style={{ color: "#7c2d12" }}>forecast page</Link>. This list is the
          pre-registration: dated, hashed, and unchanged after today.
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

        <H n="6">How it gets scored</H>
        <P>
          In December, when the program is public, each prediction is checked against its own criterion using the
          accepted-paper titles and abstracts, the orals and spotlights, the awards, and the workshop slate. Each
          resolves hit or miss, with no partial credit and no moving the line. But the headline number is not
          &ldquo;X of 10 hit.&rdquo; The backtest showed why: a naive extrapolator already gets the obvious themes,
          so the measure of foresight is &ldquo;X of 10 hit, of which Y were beyond-baseline calls the extrapolator
          would have missed.&rdquo; Y is the real score. This is deliberate. A result from the science-of-science
          literature is blunt about it: predicting a research topic&apos;s level is nearly trivial, while predicting
          its change is hard, so a benchmark that scores the level looks impressive while measuring nothing.
          Beyond-baseline scores the change. The probabilities themselves are scored by a proper rule, Brier, where
          honest reporting is the optimal strategy. The set is also checked for calibration, whether the
          higher-confidence calls came true more often, though with ten predictions, about five of them
          beyond-baseline, that signal is far too weak to support a calibration claim, which we state rather than hide.
        </P>

        <H n="7">Limitations</H>
        <P>
          The honest list is short. This measures foresight, not invention, and a reader who wants proof that a model
          can generate ideas nobody has had will not find it here; that is a different experiment and a natural next
          arm. The model is measured on its own forecast, so the score has to be the objective program, not anything
          the model says about itself; a fuller test puts other frontier models and human forecasters on the
          identical pre-registered task, which the leaderboard leaves open. Ten predictions over one venue in one
          year is a small sample. The backtest shows the method will miss its own late shock. And some supporting
          evidence comes from fast-moving 2026 preprints; the load-bearing anchors were restricted to verified
          sources, but residual risk remains.
        </P>

        <H n="8">What a result would mean</H>
        <P>
          If the forecast beats the naive baseline on the beyond-baseline calls, that is evidence of something
          specific and modest: a model can read public signals and bet on which new directions will matter better
          than extrapolation does. Not invention, not genius, but real judgment, written down in advance and checked.
          This is the empirical engine for a larger question we care about, the half-life of human research advantage:
          as models absorb execution, the residual human contribution migrates to taste, the ability to tell good
          from bad before the outcome is known, and taste is exactly what a time-resolved forecast measures. A
          frontier lab now quantifies a version of this directly: on a curated set of research junctures where the
          human had already taken a wrong turn, its model picked the better next step 51 percent of the time in
          November 2025 and 64 percent by April 2026. That is a narrow, hindsight-aided measure, not a like-for-like
          contest, but it is the same quantity this benchmark measures in the open. The
          leaderboard is where that gets contested, with other models and human experts as the open arms. If the
          forecast misses, that is also a result, and a more interesting one than a comfortable post-hoc story: it
          would say the model over-indexed on what looked busy in mid-2026, or that the frontier is harder to call
          than it looks. Either way the value is in the pre-registration. The forecast is dated, the rule is fixed,
          and December does the grading.
        </P>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="eyebrow mb-4">References &amp; provenance</div>
          <ul className="space-y-2.5 font-mono text-xs leading-relaxed" style={{ color: "#555b66" }}>
            <li>Si, Yang, Hashimoto. <span style={{ color: "var(--ink)" }}>Can LLMs Generate Novel Research Ideas?</span> arXiv:2409.04109, 2024 — and the follow-up, <span style={{ color: "var(--ink)" }}>The Ideation-Execution Gap</span>, arXiv:2506.20803, 2025, where executing the ideas reversed the novelty advantage. The foil.</li>
            <li>Krenn et al. <span style={{ color: "var(--ink)" }}>Science4Cast</span> (Nature Machine Intelligence, 2023) and Impact4Cast (arXiv:2402.08640). The nearest ancestor: concept-link prediction by ROC-AUC, which this differentiates from by forecasting magnitude, timing, and prominence in natural language.</li>
            <li>Gneiting &amp; Raftery, <span style={{ color: "var(--ink)" }}>Strictly Proper Scoring Rules</span> (JASA 2007); Brier 1950; Metaculus scoring; the IARPA ACE tournaments. The scoring backbone (Brier, baseline-vs-peer).</li>
            <li>Ofer &amp; Linial, arXiv:2305.04133 — predicting a topic&apos;s level is trivial, predicting its change is hard. Why beyond-baseline scores the change, not the level.</li>
            <li>Anthropic Institute, <span style={{ color: "var(--ink)" }}>When AI builds itself</span> (2026) — the 51%→64% research-taste figure, on a curated, hindsight-aided set.</li>
            <li>The two backtest answer keys (NeurIPS 2024, 2025), the four prior-year indicator sweeps, the nine-scout forecast research, and the three red-team critiques are versioned in the public repo.</li>
            <li>Pre-registration: research/preregistration.json, SHA-256 c0bad304…1b3f6, anchored to public commit 61320eb (2026-06-21).</li>
            <li>NeurIPS / ICLR / ICML official statistics, award announcements, and CFPs; papercopilot keyword data; the Stanford AI Index.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-label font-bold text-sm">
            <Link href="/" style={{ color: "var(--ink)" }}>The forecast →</Link>
            <Link href="/resolution" style={{ color: "var(--ink)" }}>The December scorecard →</Link>
            <a href="https://github.com/upneja/research-upneja-ai" style={{ color: "var(--ink)" }}>The repo →</a>
          </div>
          <p className="mt-6 font-mono text-xs" style={{ color: "#8a8f99" }}>
            research.upneja.ai · forecast by Claude Opus 4.8 · sealed {meta.sealed} · resolves December 2026
          </p>
        </div>
      </article>
    </main>
  );
}
