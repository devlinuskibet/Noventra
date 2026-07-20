import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Handshake,
  Target,
  Layers,
  ChevronRight,
} from "lucide-react";
import { serviceCategories } from "@/data/services";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { caseStudies } from "@/data/caseStudies";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ProcessSection from "./sections/ProcessSection";
import DashboardMockup from "@/components/DashboardMockup";
import SecurityCommandCenter from "@/components/SecurityCommandCenter";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredCaseStudy = caseStudies[0];

  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Client Logos Strip */}
      <div className={styles.logoStrip}>
        <div className="container">
          <p className={styles.logoStripLabel}>Trusted by organizations across sectors</p>
          <div className={styles.logoStripLogos}>
            {["Meridian Healthcare", "Atlas Freight", "Catalyst Foundation", "Nexus Financial", "Precision Manufacturing", "Ministry of Digital Services"].map((name) => (
              <span key={name} className={styles.logoStripItem}>{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Why Noventra */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Why Noventra</span>
            <h2 className="section-title">What sets us apart</h2>
            <p className="section-subtitle">
              We are not a single-service vendor. We are built to deliver and manage
              every layer of modern technology and enterprise infrastructure.
            </p>
          </div>
          <div className={styles.valueGrid}>
            {[
              {
                icon: Layers,
                title: "End-to-end expertise",
                description: "Software, cloud, security, networking, AI, data, and consultancy - under one partner. No fragmented vendor management.",
              },
              {
                icon: Shield,
                title: "Security-first engineering",
                description: "Every system we build or manage has security as a default, not an add-on. Protection is architected in from day one.",
              },
              {
                icon: Handshake,
                title: "Partnership, not projects",
                description: "We measure success in years of relationship, not single invoices. Your technology strategy evolves, and so does our support.",
              },
              {
                icon: Target,
                title: "Measurable outcomes",
                description: "Every engagement ties back to business results - reduced downtime, lower costs, faster delivery, stronger security posture.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.valueTitle}>{item.title}</h3>
                  <p className={styles.valueDescription}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Services Overview */}
      <section className={`section section--dark ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Our services</span>
            <h2 className="section-title">One partner. Every layer of your technology.</h2>
            <p className="section-subtitle">
              From custom software to cybersecurity, from cloud infrastructure to AI-powered automation -
              we deliver the full spectrum of technology services modern organizations require.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {serviceCategories.map((service) => {
              const Icon = service.icon;
              return (
                <Link href={`/services/${service.slug}`} key={service.slug} className={styles.serviceCard}>
                  <div className="card__icon">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="card__title">{service.name}</h3>
                  <p className="card__description">{service.shortDescription}</p>
                  <span className="card__link">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Industry Solutions */}
      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Industries we serve</span>
            <h2 className="section-title">Technology tailored to your sector</h2>
            <p className="section-subtitle">
              Every industry has unique challenges, compliance requirements, and operational demands.
              We bring sector-specific expertise to every engagement.
            </p>
          </div>
          <div className={styles.industriesScroll}>
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link href={`/industries/${industry.slug}`} key={industry.slug} className={styles.industryCard}>
                  <div className={styles.industryIcon}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className={styles.industryName}>{industry.name}</span>
                  <ChevronRight size={16} className={styles.industryArrow} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Featured Case Study */}
      <section className={`section section--surface ${styles.caseStudySection}`}>
        <div className="container">
          <div className={styles.caseStudyGrid}>
            <div className={styles.caseStudyContent}>
              <span className="eyebrow">Featured case study</span>
              <h2 className={`section-title ${styles.caseStudyTitle}`}>{featuredCaseStudy.title}</h2>
              <p className={styles.caseStudyClient}>{featuredCaseStudy.client} - {featuredCaseStudy.industry}</p>
              <div className={styles.caseStudyStats}>
                {featuredCaseStudy.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className={styles.caseStudyStat}>
                    <div className={styles.caseStudyStatValue}>{stat.value}</div>
                    <div className={styles.caseStudyStatLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link href={`/case-studies/${featuredCaseStudy.slug}`} className="btn btn--primary">
                Read the full case study <ArrowRight size={16} />
              </Link>
            </div>
            <div className={styles.caseStudyVisual}>
              <DashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Statistics */}
      <StatsSection />

      {/* Section 7: How We Work */}
      <ProcessSection />

      {/* Section 8: Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Section 9: Security Command Center */}
      <section className={`section ${styles.commandCenterSection}`}>
        <div className="container">
          <SecurityCommandCenter />
        </div>
      </section>

      {/* Section 10: Insights Preview */}
      <section className={`section section--dark ${styles.insightsSection}`}>
        <div className="container">
          <div className={styles.insightsHeader}>
            <div>
              <span className="eyebrow">Latest insights</span>
              <h2 className="section-title">Perspectives from our team</h2>
            </div>
            <Link href="/insights" className="btn btn--ghost">
              View all insights <ArrowRight size={14} />
            </Link>
          </div>
          <div className={styles.insightsGrid}>
            {[
              {
                category: "Cybersecurity",
                title: "The state of cybersecurity readiness among SMEs in 2026",
                readTime: "8 min read",
                type: "White Paper",
              },
              {
                category: "Cloud & Infrastructure",
                title: "Cloud migration vs. on-premise: what mid-size organizations need to know",
                readTime: "5 min read",
                type: "Guide",
              },
              {
                category: "AI & Automation",
                title: "Beyond the hype: identifying genuine AI use cases for your organization",
                readTime: "6 min read",
                type: "Blog",
              },
            ].map((post, i) => (
              <article key={i} className={styles.insightCard}>
                <div className={styles.insightImagePlaceholder}>
                  <span className="tag">{post.type}</span>
                </div>
                <div className={styles.insightBody}>
                  <div className={styles.insightMeta}>
                    <span className={styles.insightCategory}>{post.category}</span>
                    <span className={styles.insightReadTime}>{post.readTime}</span>
                  </div>
                  <h3 className={styles.insightTitle}>{post.title}</h3>
                  <span className="card__link">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className={`section section--accent ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>
            Let&apos;s build what&apos;s next for your organization
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether you need to modernize infrastructure, secure your systems, build custom software,
            or define a technology strategy - the conversation starts here.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact/consultation" className="btn btn--white btn--large">
              Request a Consultation <ArrowRight size={16} />
            </Link>
            <span className={styles.ctaAlt}>
              or call us at <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>+1 (234) 567-890</a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
