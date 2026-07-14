import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, AlertTriangle, ShieldCheck } from "lucide-react";
import { industries, getIndustryBySlug } from "@/data/industries";
import { serviceCategories } from "@/data/services";
import styles from "./page.module.css";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return {};
  return { title: industry.name, description: industry.description };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) notFound();

  const Icon = industry.icon;
  const relevantServices = industry.relevantServices
    .map((slug) => serviceCategories.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <Link href="/industries">Industries</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>{industry.name}</span>
          </nav>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <Icon size={32} strokeWidth={1.5} />
            </div>
            <h1 className={styles.heroTitle}>{industry.headline}</h1>
            <p className={styles.heroSubtitle}>{industry.description}</p>
            <Link href="/contact/consultation" className="btn btn--primary btn--large">
              Speak to our {industry.name.toLowerCase()} team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "var(--space-12)" }}>
            <span className="eyebrow">Sector challenges</span>
            <h2 className="section-title">The technology challenges facing {industry.name.toLowerCase()}</h2>
          </div>
          <div className={styles.challengesGrid}>
            {industry.challenges.map((challenge) => (
              <div key={challenge.title} className={styles.challengeCard}>
                <AlertTriangle size={20} className={styles.challengeIcon} />
                <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                <p className={styles.challengeDesc}>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="section section--dark">
        <div className="container">
          <div style={{ marginBottom: "var(--space-12)" }}>
            <span className="eyebrow">How we help</span>
            <h2 className="section-title">Relevant Noventra services</h2>
          </div>
          <div className={styles.servicesGrid}>
            {relevantServices.map((service) => {
              if (!service) return null;
              const SIcon = service.icon;
              return (
                <Link href={`/services/${service.slug}`} key={service.slug} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}><SIcon size={22} strokeWidth={1.5} /></div>
                  <div>
                    <h3 className={styles.serviceName}>{service.name}</h3>
                    <p className={styles.serviceDesc}>{service.shortDescription}</p>
                  </div>
                  <ArrowRight size={16} className={styles.serviceArrow} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "var(--space-12)" }}>
            <span className="eyebrow">Proven results</span>
            <h2 className="section-title">{industry.caseStudyTeaser.title}</h2>
          </div>
          <div className={styles.caseStudyTeaser}>
            <div className={styles.teaserContent}>
              <div className={styles.teaserSection}>
                <h4 className={styles.teaserLabel}>Challenge</h4>
                <p>{industry.caseStudyTeaser.challenge}</p>
              </div>
              <div className={styles.teaserSection}>
                <h4 className={styles.teaserLabel}>Outcome</h4>
                <p>{industry.caseStudyTeaser.outcome}</p>
              </div>
            </div>
            <div className={styles.teaserStats}>
              {industry.caseStudyTeaser.stats.map((stat) => (
                <div key={stat.label} className={styles.teaserStat}>
                  <div className={styles.teaserStatValue}>{stat.value}</div>
                  <div className={styles.teaserStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section section--dark">
        <div className="container">
          <div style={{ marginBottom: "var(--space-10)" }}>
            <span className="eyebrow">Compliance & security</span>
            <h2 className="section-title">Industry-specific compliance</h2>
          </div>
          <div className={styles.complianceGrid}>
            {industry.complianceNotes.map((note) => (
              <div key={note} className={styles.complianceItem}>
                <ShieldCheck size={18} />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--accent" style={{ padding: "var(--space-20) 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "var(--font-size-3xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>
            Ready to transform your {industry.name.toLowerCase()} technology?
          </h2>
          <p style={{ fontSize: "var(--font-size-lg)", opacity: 0.9, maxWidth: 500, margin: "0 auto var(--space-8)" }}>
            Start with a conversation about your specific challenges and objectives.
          </p>
          <Link href="/contact/consultation" className="btn btn--white btn--large">
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
