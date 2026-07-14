import Link from "next/link";
import { ChevronRight, Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Noventra Technologies",
  description: "Learn how and why Noventra Technologies uses cookies to enhance your browsing experience.",
};

export default function CookiePolicy() {
  return (
    <>
      <section style={{ padding: "140px 0 60px", background: "linear-gradient(160deg, var(--color-base-900) 0%, var(--color-base-800) 100%)", borderBottom: "1px solid rgba(255, 255, 255, 0.04)" }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>Cookie Policy</span>
          </nav>
          <div style={{ maxWidth: 800 }}>
            <div style={{ width: 64, height: 64, borderRadius: "var(--radius-xl)", background: "var(--color-accent-subtle)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "var(--space-6)", border: "1px solid var(--color-accent-border)" }}>
              <Cookie size={32} strokeWidth={1.5} />
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--color-white)", marginBottom: "var(--space-4)" }}>Cookie Policy</h1>
            <p style={{ fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
              Last updated: July 14, 2026. This policy explains what cookies are, how we use them, and how you can manage them.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>1. What are Cookies?</h2>
              <p>Cookies are small text files stored on your computer or mobile device when you browse websites. They help us remember your inputs (such as calculator preferences) and analyze traffic metrics.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>2. Types of Cookies We Use</h2>
              <p>We use essential cookies to maintain system preferences (e.g. your cookie consent status stored in localStorage) and analytical cookies to track usage trends via anonymous aggregate metrics.</p>
            </div>

            <div>
              <h2 style={{ color: "var(--color-white)", fontSize: "var(--font-size-xl)", marginBottom: "var(--space-4)" }}>3. Managing Preferences</h2>
              <p>You can choose to disable cookies through your individual browser controls or by selecting Decline in our cookie consent banner. Please note that disabling cookies may affect certain calculator and tool configurations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
