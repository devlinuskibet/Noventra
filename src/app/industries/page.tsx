import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Industries",
  description: "Noventra Technologies provides industry-specific technology solutions for healthcare, education, government, manufacturing, logistics, hospitality, startups, and enterprise organizations.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Industries we serve</span>
          <h1 className={styles.heroTitle}>
            Technology solutions shaped by sector expertise
          </h1>
          <p className={styles.heroSubtitle}>
            Every industry has unique operational demands, compliance requirements, and technology challenges.
            We bring deep sector knowledge to every engagement, ensuring solutions that address
            your industry&apos;s specific needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.industriesGrid}>
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link href={`/industries/${industry.slug}`} key={industry.slug} className={styles.industryCard}>
                  <div className={styles.industryIcon}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h2 className={styles.industryName}>{industry.name}</h2>
                  <p className={styles.industryHeadline}>{industry.headline}</p>
                  <div className={styles.industryChallenges}>
                    {industry.challenges.slice(0, 2).map((c) => (
                      <span key={c.title} className={styles.challengeTag}>{c.title}</span>
                    ))}
                  </div>
                  <span className="card__link">
                    Explore solutions <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--accent" style={{ padding: "var(--space-20) 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "var(--font-size-3xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>
            Don&apos;t see your industry listed?
          </h2>
          <p style={{ fontSize: "var(--font-size-lg)", opacity: 0.9, marginBottom: "var(--space-8)", maxWidth: 500, margin: "0 auto var(--space-8)" }}>
            Our technology expertise applies across sectors. Let&apos;s discuss your specific needs.
          </p>
          <Link href="/contact/consultation" className="btn btn--white btn--large">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
