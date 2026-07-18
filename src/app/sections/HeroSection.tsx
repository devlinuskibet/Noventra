"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import NetworkAnimation from "@/components/NetworkAnimation";
import styles from "../page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <NetworkAnimation />
      <div className={styles.heroGradient} />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            Strategic technology partner
          </span>
          <h1 className={styles.heroTitle}>
            The technology partner behind organizations that can&apos;t afford downtime
          </h1>
          <p className={styles.heroSubtitle}>
            Noventra Technologies plans, builds, secures, and manages the systems
            modern organizations depend on - from cloud infrastructure to
            AI-powered automation.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact/consultation" className="btn btn--primary btn--large">
              Request a Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn btn--ghost btn--large">
              Explore Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
