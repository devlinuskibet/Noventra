import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import styles from "./page.module.css";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.challenge };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <Link href="/case-studies">Case Studies</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>{cs.client}</span>
          </nav>
          <div className={styles.heroContent}>
            <span className="eyebrow">{cs.industry}</span>
            <h1 className={styles.heroTitle}>{cs.title}</h1>
            <p className={styles.heroClient}>{cs.client}</p>
          </div>
        </div>
      </section>

      {/* Results Overview Band */}
      <section className={`section section--dark ${styles.statsBand}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {cs.stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section">
        <div className="container">
          <div className={styles.detailsLayout}>
            {/* Main narrative */}
            <div className={styles.narrative}>
              <div className={styles.narrativeSection}>
                <h2 className={styles.sectionTitle}>The challenge</h2>
                <p>{cs.challenge}</p>
              </div>

              <div className={styles.narrativeSection}>
                <h2 className={styles.sectionTitle}>The solution</h2>
                <p>{cs.solution}</p>
              </div>

              <div className={styles.narrativeSection}>
                <h2 className={styles.sectionTitle}>Implementation</h2>
                <p>{cs.results}</p>
              </div>

              {cs.testimonialQuote && (
                <div className={styles.testimonial}>
                  <Quote className={styles.quoteIcon} size={32} />
                  <blockquote className={styles.quoteText}>{cs.testimonialQuote}</blockquote>
                  <div className={styles.quoteAuthor}>
                    <strong>{cs.testimonialAuthor}</strong>
                    <span>{cs.testimonialTitle}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Context */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Services Delivered</h4>
                <div className={styles.servicesList}>
                  {cs.services.map((service, i) => {
                    const slug = cs.servicesSlugs[i];
                    return (
                      <Link href={`/services/${slug}`} key={slug} className={styles.serviceLink}>
                        {service} <ChevronRight size={14} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Verification & Standards</h4>
                <div className={styles.standardsList}>
                  <div className={styles.standardItem}>
                    <CheckCircle2 size={16} />
                    <span>ISO 27001 Certified Deployment</span>
                  </div>
                  <div className={styles.standardItem}>
                    <CheckCircle2 size={16} />
                    <span>SLA Guaranteed Delivery</span>
                  </div>
                  <div className={styles.standardItem}>
                    <CheckCircle2 size={16} />
                    <span>Zero Data Leak Compliance Status</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section--accent" style={{ padding: "var(--space-20) 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "var(--font-size-3xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>
            Let&apos;s build a success story together
          </h2>
          <p style={{ fontSize: "var(--font-size-lg)", opacity: 0.9, maxWidth: 500, margin: "0 auto var(--space-8)" }}>
            Discuss how our enterprise engineering approach can address your technology bottlenecks.
          </p>
          <Link href="/contact/consultation" className="btn btn--white btn--large">
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
