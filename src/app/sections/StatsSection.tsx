"use client";

import CountUp from "@/components/CountUp";
import styles from "../page.module.css";

export default function StatsSection() {
  return (
    <section className={`section ${styles.statsSection}`}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className="stat">
            <div className="stat__number">
              <CountUp end={12} suffix="+" />
            </div>
            <div className="stat__label">Years of experience</div>
          </div>
          <div className="stat">
            <div className="stat__number">
              <CountUp end={500} suffix="+" />
            </div>
            <div className="stat__label">Projects delivered</div>
          </div>
          <div className="stat">
            <div className="stat__number">
              <CountUp end={10} suffix="+" />
            </div>
            <div className="stat__label">Industries served</div>
          </div>
          <div className="stat">
            <div className="stat__number">
              <CountUp end={97} suffix="%" />
            </div>
            <div className="stat__label">Client retention rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
