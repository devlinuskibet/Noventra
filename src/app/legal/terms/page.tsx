import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Noventra Technologies",
  description: "Review the corporate terms and guidelines governing the use of Noventra Technologies website and tools.",
};

export default function TermsOfService() {
  return (
    <>
      <section style={{ padding: "140px 0 60px", background: "linear-gradient(160deg, var(--color-base-900) 0%, var(--color-base-800) 100%)", borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>Terms of Service</span>
          </nav>
          <div style={{ maxWidth: 800 }}>
            <div style={{ width: 64, height: 64, borderRadius: "var(--radius-xl)", background: "var(--color-accent-subtle)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)", border: "1px solid var(--color-accent-border)" }}>
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--color-white)", marginBottom: "var(--space-4)" }}>Terms of Service</h1>
            <p style={{ fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
              Last updated: July 14, 2026. By accessing our website, tools, or resources, you agree to these operational terms.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>1. Use of Tools</h2>
              <p>The interactive ROI Calculator, Project Estimator, Security Assessment, and AI Solutions Fit Finder are provided as-is for educational and scoping purposes only. The output values represent estimate ranges and do not constitute a formal contract or guaranteed pricing.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>2. Intellectual Property</h2>
              <p>All content, animations, branding elements, software designs, data, and visual components displayed on this site are the exclusive property of Noventra Technologies. Unauthorized reproduction or reverse engineering is strictly prohibited.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>3. Limitation of Liability</h2>
              <p>Noventra Technologies will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, our web resources, estimation charts, or guides.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
