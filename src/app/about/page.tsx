import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Handshake,
  Target,
  Layers,
  Lightbulb,
  Heart,
  ShieldCheck,
  Award,
  Clock,
  Users,
  Globe2,
  Trophy,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Noventra Technologies - our mission, values, leadership, and commitment to engineering integrity, security by design, and long-term partnership.",
};

const values = [
  { icon: Shield, title: "Engineering integrity", description: "Solutions are built right, not fast and fragile. We prioritize reliability and maintainability over shortcuts." },
  { icon: ShieldCheck, title: "Security by design", description: "Every system is architected with protection as a default, not an add-on. Security is never an afterthought." },
  { icon: Handshake, title: "Partnership over projects", description: "Success is measured in years of relationship, not single invoices. We invest in your long-term success." },
  { icon: Lightbulb, title: "Clarity over complexity", description: "Technology explained and delivered in a way clients actually understand. We translate, not complicate." },
  { icon: Target, title: "Measurable impact", description: "Every engagement ties back to business outcomes: efficiency gains, revenue growth, and resilience." },
  { icon: Layers, title: "Continuous innovation", description: "Proactive adoption of AI, automation, and modern architecture - not reactive patch-work." },
];

const leaders = [
  { name: "Alexandra Chen", title: "Chief Executive Officer", bio: "20+ years in enterprise technology leadership. Former VP of Technology at a Fortune 500 financial services firm." },
  { name: "David Okafor", title: "Chief Technology Officer", bio: "Cloud architecture and AI specialist with deep experience across AWS, Azure, and GCP. 15+ years in systems architecture." },
  { name: "Sarah Mitchell", title: "Chief Information Security Officer", bio: "CISSP, CISM certified. Former SOC director. Leads Noventra's security-first engineering culture and compliance programs." },
  { name: "James Mwangi", title: "VP of Client Services", bio: "Relationship-first leader managing enterprise partnerships across healthcare, government, and financial services sectors." },
  { name: "Dr. Priya Sharma", title: "Head of AI & Data", bio: "PhD in Machine Learning. Bridges the gap between research-grade AI and production-ready business solutions." },
  { name: "Michael Torres", title: "VP of Engineering", bio: "Full-stack engineering leader specializing in scalable architectures, DevOps practices, and engineering team excellence." },
];

const milestones = [
  { year: "2014", title: "Founded", description: "Noventra Technologies established with a mission to bring enterprise-grade technology to organizations of all sizes." },
  { year: "2016", title: "First enterprise partnership", description: "Secured first major enterprise managed IT contract, validating the partnership-over-projects model." },
  { year: "2018", title: "Cybersecurity practice launch", description: "Launched dedicated cybersecurity practice with 24/7 SOC capability, achieving ISO 27001 certification." },
  { year: "2020", title: "Cloud & AI expansion", description: "Expanded into cloud consulting and AI implementation, earning AWS and Microsoft partner certifications." },
  { year: "2022", title: "Government sector entry", description: "First government digital transformation project, establishing credentials in public sector procurement." },
  { year: "2024", title: "500+ projects delivered", description: "Crossed 500 completed projects with a 97% client retention rate across 10+ industry sectors." },
  { year: "2026", title: "End-to-end maturity", description: "Full-service technology partner offering every layer of modern enterprise technology, from infrastructure to intelligence." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">About Noventra</span>
          <h1 className={styles.heroTitle}>
            We exist to be the technology partner organizations deserve
          </h1>
          <p className={styles.heroSubtitle}>
            Too many organizations are underserved by fragmented vendors, reactive support,
            and technology decisions made without strategic context. We built Noventra to be different -
            a single, accountable partner for every layer of technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <Heart size={28} className={styles.missionIcon} />
              <h2 className={styles.missionTitle}>Our mission</h2>
              <p className={styles.missionText}>
                To empower organizations - regardless of size or sector - to plan, build, secure,
                automate, and scale their technology with the confidence of a long-term strategic partner,
                not a one-off vendor.
              </p>
            </div>
            <div className={styles.missionCard}>
              <Globe2 size={28} className={styles.missionIcon} />
              <h2 className={styles.missionTitle}>Our vision</h2>
              <p className={styles.missionText}>
                To become the most trusted end-to-end technology partner for institutions
                and enterprises seeking to modernize responsibly, securely, and sustainably
                in a digital-first world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className={`section section--dark ${styles.statsBar}`}>
        <div className="container">
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <Clock size={20} className={styles.statIcon} />
              <div>
                <div className={styles.statValue}>12+ years</div>
                <div className={styles.statLabel}>in operation</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Trophy size={20} className={styles.statIcon} />
              <div>
                <div className={styles.statValue}>500+ projects</div>
                <div className={styles.statLabel}>delivered</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Users size={20} className={styles.statIcon} />
              <div>
                <div className={styles.statValue}>97% retention</div>
                <div className={styles.statLabel}>client rate</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Globe2 size={20} className={styles.statIcon} />
              <div>
                <div className={styles.statValue}>10+ industries</div>
                <div className={styles.statLabel}>served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "var(--space-16)" }}>
            <span className="eyebrow">Our journey</span>
            <h2 className="section-title">From founding to full-service partner</h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineDot} />
                  {index < milestones.length - 1 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{milestone.year}</span>
                  <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                  <p className={styles.timelineDescription}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "var(--space-16)" }}>
            <span className="eyebrow">Our values</span>
            <h2 className="section-title">What we stand for</h2>
            <p className="section-subtitle mx-auto">
              These principles guide every decision, every engagement, and every line of code.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "var(--space-16)" }}>
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title">The team behind Noventra</h2>
            <p className="section-subtitle mx-auto">
              Senior technologists, security experts, and client relationship leaders
              with decades of combined experience.
            </p>
          </div>
          <div className={styles.leadershipGrid}>
            {leaders.map((leader) => (
              <div key={leader.name} className={styles.leaderCard}>
                <div className={styles.leaderAvatar}>
                  {leader.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className={styles.leaderName}>{leader.name}</h3>
                <p className={styles.leaderTitle}>{leader.title}</p>
                <p className={styles.leaderBio}>{leader.bio}</p>
                <a href="#" className={styles.leaderLinkedin} aria-label={`${leader.name} LinkedIn profile`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section--dark">
        <div className="container text-center">
          <span className="eyebrow">Certifications & partnerships</span>
          <h2 className="section-title">Accredited and accountable</h2>
          <div className={styles.certGrid}>
            {["ISO 27001", "ISO 9001", "SOC 2 Type II", "AWS Partner", "Microsoft Partner", "Google Cloud Partner", "Cisco Partner", "Fortinet Partner"].map((cert) => (
              <div key={cert} className={styles.certBadge}>
                <Award size={18} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="section">
        <div className="container">
          <div className={styles.csrSection}>
            <div>
              <span className="eyebrow">Social responsibility</span>
              <h2 className="section-title">Technology for good</h2>
              <p className={styles.csrText}>
                We believe in using technology to create positive impact beyond commercial outcomes.
                Through discounted services for nonprofits, pro bono technology advisory for community
                organizations, and STEM mentorship programs, we invest in the communities we serve.
              </p>
              <Link href="/about/csr" className="btn btn--ghost" style={{ marginTop: "var(--space-6)" }}>
                Learn about our CSR initiatives <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--accent" style={{ padding: "var(--space-20) 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "var(--font-size-3xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>
            Ready to partner with us?
          </h2>
          <p style={{ fontSize: "var(--font-size-lg)", opacity: 0.9, marginBottom: "var(--space-8)", maxWidth: "500px", margin: "0 auto var(--space-8)" }}>
            Start with a conversation. No obligation, no pressure - just a clear understanding
            of how we can help.
          </p>
          <Link href="/contact/consultation" className="btn btn--white btn--large">
            Request a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
