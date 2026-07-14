import Link from "next/link";
import { ChevronRight, ShieldCheck, Award } from "lucide-react";

export const metadata = {
  title: "Security & Compliance Statement | Noventra Technologies",
  description: "Learn about Noventra's rigorous compliance, standards, and security infrastructure protocols.",
};

export default function SecurityStatement() {
  return (
    <>
      <section style={{ padding: "140px 0 60px", background: "linear-gradient(160deg, var(--color-base-900) 0%, var(--color-base-800) 100%)", borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>Security Statement</span>
          </nav>
          <div style={{ maxWidth: 800 }}>
            <div style={{ width: 64, height: 64, borderRadius: "var(--radius-xl)", background: "var(--color-accent-subtle)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)", border: "1px solid var(--color-accent-border)" }}>
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--color-white)", marginBottom: "var(--space-4)" }}>Security & Compliance Statement</h1>
            <p style={{ fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
              Our engineering integrity means security by design is built into every system, database, and connection we manage.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>1. Standards & Certifications</h2>
              <p>Noventra Technologies maintains standard industry credentials to guarantee operational security, including:</p>
              <ul style={{ paddingLeft: "var(--space-5)", marginTop: "var(--space-2)", listStyleType: "disc" }}>
                <li><strong>ISO 27001</strong> Information Security Management</li>
                <li><strong>ISO 9001</strong> Quality Management Standards</li>
                <li><strong>SOC 2 Type II</strong> Security and Trust Criteria Compliance</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>2. Infrastructure & Operations</h2>
              <p>All projects and configurations utilize modern secure-by-default cloud resources. We mandate MFA enforcement, regular audit telemetry reviews, automated patch pipelines, and end-to-end data encryption in transit and at rest.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>3. Responsible Disclosure</h2>
              <p>We welcome security testing and reportings from the security research community. If you detect any potential vulnerability in our codebase or endpoints, please email security@noventra.com to arrange responsible disclosure coordinate actions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
