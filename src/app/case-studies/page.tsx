"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import styles from "./page.module.css";

const industryFilters = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.industry)))];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? caseStudies : caseStudies.filter((cs) => cs.industry === filter);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Case studies</span>
          <h1 className={styles.heroTitle}>Proven results across industries</h1>
          <p className={styles.heroSubtitle}>
            Real outcomes from real engagements. Explore how we&apos;ve helped organizations
            solve complex technology challenges and achieve measurable business impact.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.filterBar}>
            {industryFilters.map((f) => (
              <button key={f} className={`${styles.filterButton} ${filter === f ? styles.filterActive : ""}`}
                onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className={styles.grid}>
            {filtered.map((cs) => (
              <Link href={`/case-studies/${cs.slug}`} key={cs.slug} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className="tag">{cs.industry}</span>
                  <div className={styles.cardServices}>
                    {cs.services.slice(0, 2).map((s) => (
                      <span key={s} className={styles.serviceTag}>{s}</span>
                    ))}
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{cs.title}</h3>
                <p className={styles.cardClient}>{cs.client}</p>
                <div className={styles.cardStats}>
                  {cs.stats.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <span className="card__link">Read case study <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
