// Pre-registration proof: the forecast is frozen, hashed, and anchored to a
// public git commit dated before any outcome is known. Tamper-evident by design.
const HASH = "c0bad3048d13e6502095b794cd1942c1cc12d44f339339352845994e1041b3f6";
const COMMIT = "61320eb";
const COMMIT_FULL = "61320ebb8575974fd34a1e36a5c10dd4449b69a1";
const SEALED = "2026-06-21 11:44 EDT";

export default function Prereg() {
  return (
    <div className="rounded-2xl p-6 sm:p-8" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
      <div className="eyebrow mb-3" style={{ color: "#7c2d12" }}>Pre-registered &amp; tamper-evident</div>
      <h3 className="font-display leading-tight" style={{ fontSize: 24, color: "var(--ink)" }}>
        The forecast was sealed before the answer exists
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "#555b66" }}>
        A forecast you can edit after the fact is not a forecast. The ten predictions are frozen in a public
        artifact, fingerprinted with a SHA-256 hash, and anchored to a git commit timestamped months before the
        NeurIPS 2026 program is decided. Changing a single prediction changes the hash and breaks the record.
        Anyone can check it.
      </p>

      <dl className="mt-6 grid sm:grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: "var(--line)" }}>
        <div className="p-4" style={{ background: "var(--panel2)" }}>
          <dt className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#8a8f99" }}>sealed</dt>
          <dd className="font-mono text-sm mt-1" style={{ color: "var(--ink)" }}>{SEALED}</dd>
        </div>
        <div className="p-4" style={{ background: "var(--panel2)" }}>
          <dt className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#8a8f99" }}>git commit</dt>
          <dd className="font-mono text-sm mt-1">
            <a href={`https://github.com/upneja/research-upneja-ai/commit/${COMMIT_FULL}`} style={{ color: "#1b3a5b" }}>{COMMIT}</a>
          </dd>
        </div>
        <div className="p-4" style={{ background: "var(--panel2)" }}>
          <dt className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "#8a8f99" }}>artifact</dt>
          <dd className="font-mono text-sm mt-1" style={{ color: "var(--ink)" }}>preregistration.json</dd>
        </div>
      </dl>

      <div className="mt-4 rounded-xl p-4" style={{ background: "#15171c" }}>
        <div className="font-mono text-[10px] uppercase tracking-wider mb-2" style={{ color: "#c9b48f" }}>sha-256</div>
        <code className="font-mono text-[12px] sm:text-[13px] break-all leading-relaxed" style={{ color: "#e8e4d8" }}>{HASH}</code>
      </div>

      <details className="mt-4">
        <summary className="font-mono text-xs cursor-pointer" style={{ color: "#7c2d12" }}>verify it yourself</summary>
        <pre className="mt-3 rounded-xl p-4 overflow-x-auto font-mono text-[12px] leading-relaxed" style={{ background: "var(--panel2)", border: "1px solid var(--line)", color: "#3c424c" }}>{`git clone https://github.com/upneja/research-upneja-ai
cd research-upneja-ai
shasum -a 256 research/preregistration.json
# -> ${HASH.slice(0, 24)}...   matches the hash above
git log --oneline | grep "lock the final 10"
# -> ${COMMIT}  the ten, sealed ${SEALED.split(" ")[0]}, before Sep-2026 decisions`}</pre>
      </details>
    </div>
  );
}
