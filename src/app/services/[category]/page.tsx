import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import { serviceCategories, getServiceBySlug } from "@/data/services";
import { getCaseStudiesByService } from "@/data/caseStudies";
import FAQAccordion from "@/components/FAQAccordion";
import styles from "./page.module.css";

export function generateStaticParams() {
  return serviceCategories.map((s) => ({ category: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const service = getServiceBySlug(category);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const service = getServiceBySlug(category);
  if (!service) notFound();

  const relatedCaseStudies = getCaseStudiesByService(service.slug);
  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>{service.name}</span>
          </nav>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <Icon size={32} strokeWidth={1.5} />
            </div>
            <h1 className={styles.heroTitle}>{service.name}</h1>
            <p className={styles.heroSubtitle}>{service.description}</p>
            <Link href="/contact/consultation" className="btn btn--primary btn--large">
              Talk to a specialist <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Capabilities</span>
            <h2 className="section-title">What this service includes</h2>
          </div>
          <div className={styles.subServicesGrid}>
            {service.subServices.map((sub) => {
              const SubIcon = sub.icon;
              return (
                <div key={sub.slug} className={styles.subServiceCard}>
                  <div className={styles.subServiceIcon}>
                    <SubIcon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={styles.subServiceTitle}>{sub.name}</h3>
                    <p className={styles.subServiceDesc}>{sub.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Challenge */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.challengeGrid}>
            <div>
              <span className="eyebrow">The challenge</span>
              <h2 className="section-title">The business problem this solves</h2>
            </div>
            <div className={styles.challengeText}>
              <p>{service.businessChallenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Our approach</span>
            <h2 className="section-title">How we deliver</h2>
          </div>
          <div className={styles.approachList}>
            {service.approach.map((step, i) => (
              <div key={i} className={styles.approachStep}>
                <div className={styles.approachNumber}>{String(i + 1).padStart(2, "0")}</div>
                <p className={styles.approachText}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section section--dark">
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <span className="eyebrow">Technology stack</span>
            <h2 className="section-title">Technologies and tools we work with</h2>
          </div>
          <div className={styles.techGrid}>
            {service.technologies.map((tech) => (
              <div key={tech} className={styles.techBadge}>
                <Shield size={16} />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="section">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className="eyebrow">Proven results</span>
              <h2 className="section-title">Related case studies</h2>
            </div>
            <div className={styles.caseStudyCards}>
              {relatedCaseStudies.slice(0, 2).map((cs) => (
                <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className={styles.caseStudyCard}>
                  <div>
                    <span className="tag">{cs.industry}</span>
                    <h3 className={styles.csCardTitle}>{cs.title}</h3>
                    <div className={styles.csCardStats}>
                      {cs.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label}>
                          <span className={styles.csStatValue}>{stat.value}</span>
                          <span className={styles.csStatLabel}>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="card__link">
                    Read case study <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section section--dark">
        <div className="container">
          <div className={styles.faqLayout}>
            <div className={styles.faqHeader}>
              <span className="eyebrow">FAQ</span>
              <h2 className="section-title">Common questions</h2>
              <p className="section-subtitle">
                Can&apos;t find what you&apos;re looking for? Get in touch and we&apos;ll be happy to help.
              </p>
            </div>
            <div className={styles.faqContent}>
              <FAQAccordion items={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--accent" style={{ padding: "var(--space-20) 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "var(--font-size-3xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>
            Ready to discuss {service.name.toLowerCase()}?
          </h2>
          <p style={{ fontSize: "var(--font-size-lg)", opacity: 0.9, marginBottom: "var(--space-8)", maxWidth: "500px", margin: "0 auto var(--space-8)" }}>
            Every engagement starts with understanding your organization. Let&apos;s talk about what you need.
          </p>
          <Link href="/contact/consultation" className="btn btn--white btn--large">
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
