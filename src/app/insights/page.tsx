"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock, BookOpen, FileText, Video, HelpCircle } from "lucide-react";
import styles from "./page.module.css";

const tabs = [
  { label: "All", value: "all", icon: BookOpen },
  { label: "Blog", value: "blog", icon: FileText },
  { label: "White Papers", value: "white-paper", icon: Lock },
  { label: "Guides", value: "guide", icon: BookOpen },
  { label: "Webinars", value: "webinar", icon: Video },
  { label: "Knowledge Base", value: "kb", icon: HelpCircle },
];

const articles = [
  { type: "white-paper", category: "Cybersecurity", title: "The state of cybersecurity readiness among SMEs in 2026", readTime: "15 min", gated: true },
  { type: "blog", category: "Cloud & Infrastructure", title: "Cloud migration vs. on-premise: what mid-size organizations need to know", readTime: "5 min", gated: false },
  { type: "blog", category: "AI & Automation", title: "Beyond the hype: identifying genuine AI use cases for your organization", readTime: "6 min", gated: false },
  { type: "guide", category: "Digital Transformation", title: "The executive's guide to technology roadmapping", readTime: "12 min", gated: false },
  { type: "white-paper", category: "Data & Analytics", title: "Building a data-driven organization: from raw data to executive dashboards", readTime: "20 min", gated: true },
  { type: "blog", category: "Managed IT", title: "Break-fix vs. managed IT: the true cost comparison for growing businesses", readTime: "4 min", gated: false },
  { type: "webinar", category: "Enterprise Systems", title: "ERP implementation pitfalls: lessons from 100+ deployments", readTime: "45 min", gated: false },
  { type: "guide", category: "Cybersecurity", title: "Security risk self-assessment checklist for SME leaders", readTime: "8 min", gated: false },
  { type: "blog", category: "Company News", title: "Noventra achieves SOC 2 Type II certification", readTime: "3 min", gated: false },
];

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = activeTab === "all" ? articles : articles.filter((a) => a.type === activeTab);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Insights & resources</span>
          <h1 className={styles.heroTitle}>Perspectives from our team</h1>
          <p className={styles.heroSubtitle}>
            Expert analysis, practical guides, and strategic insights to help your organization
            navigate technology decisions with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.mainCol}>
              <div className={styles.tabBar}>
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button key={tab.value}
                      className={`${styles.tab} ${activeTab === tab.value ? styles.tabActive : ""}`}
                      onClick={() => setActiveTab(tab.value)}>
                      <Icon size={14} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <div className={styles.grid}>
                {filtered.map((article, i) => (
                  <article key={i} className={styles.card}>
                    <div className={styles.cardImage}>
                      {article.gated && <div className={styles.gatedBadge}><Lock size={12} /> Gated</div>}
                      <span className="tag">{article.type === "white-paper" ? "White Paper" : article.type === "kb" ? "Knowledge Base" : article.type.charAt(0).toUpperCase() + article.type.slice(1)}</span>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>{article.category}</span>
                        <span className={styles.cardReadTime}>{article.readTime}</span>
                      </div>
                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <span className="card__link">
                        {article.gated ? "Download" : "Read more"} <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Popular categories</h4>
                <div className={styles.sidebarList}>
                  {["Cybersecurity", "Cloud & Infrastructure", "AI & Automation", "Digital Transformation", "Data & Analytics"].map((cat) => (
                    <button key={cat} className={styles.sidebarLink}>{cat}</button>
                  ))}
                </div>
              </div>
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Stay informed</h4>
                <p className={styles.sidebarText}>Get the latest insights delivered to your inbox.</p>
                <form className={styles.sidebarForm} onSubmit={(e) => e.preventDefault()}>
                  <input type="email" className="form-input" placeholder="Your email" aria-label="Email" required />
                  <button type="submit" className="btn btn--primary btn--small" style={{ width: "100%" }}>Subscribe</button>
                </form>
              </div>
              <div className={styles.sidebarCard} style={{ borderColor: "var(--color-accent-border)" }}>
                <h4 className={styles.sidebarTitle}>Featured resource</h4>
                <p className={styles.sidebarText}>The executive&apos;s guide to technology roadmapping - a comprehensive framework for strategic technology planning.</p>
                <Link href="#" className="btn btn--ghost btn--small" style={{ width: "100%", marginTop: "var(--space-3)" }}>
                  Download guide <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
