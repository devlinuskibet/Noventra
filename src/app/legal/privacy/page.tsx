import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Noventra Technologies",
  description: "Learn about how Noventra Technologies handles, stores, and protects personal and corporate data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section style={{ padding: "140px 0 60px", background: "linear-gradient(160deg, var(--color-base-900) 0%, var(--color-base-800) 100%)", borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>Privacy Policy</span>
          </nav>
          <div style={{ maxWidth: 800 }}>
            <div style={{ width: 64, height: 64, borderRadius: "var(--radius-xl)", background: "var(--color-accent-subtle)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)", border: "1px solid var(--color-accent-border)" }}>
              <ShieldAlert size={32} strokeWidth={1.5} />
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--color-white)", marginBottom: "var(--space-4)" }}>Privacy Policy</h1>
            <p style={{ fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
              Last updated: July 14, 2026. This policy outlines our commitment to data security, privacy, and transparent data processing procedures.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>1. Information We Collect</h2>
              <p>We collect information directly from you when you request a consultation, sign up for newsletters, or use our interactive tools. This may include your name, email address, phone number, company name, and details regarding your operational challenges.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>2. How We Use Your Information</h2>
              <p>Your details are used exclusively to process requests, evaluate resource parameters (e.g. in the ROI Calculator), provide customer support, and communicate regarding services. We do not sell or lease donor, user, or client data to third parties.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>3. Data Retention & Protection</h2>
              <p>We implement security protocols (ISO 27001 standard frameworks, encrypted databases) to safeguard records against unauthorized disclosure, modification, or breach. Information is only retained for as long as is necessary to support operational engagements.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>4. Your Rights</h2>
              <p>You have the right to request access to your records, object to processing, request data rectification or deletions, or withdraw consent at any time. Contact hello@noventra.com to process these requests.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
