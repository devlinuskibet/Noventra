"use client";

import React from "react";
import styles from "../app/page.module.css";

export default function DashboardMockup() {
  return (
    <div className={styles.dashboardMockup}>
      <div className={styles.dashboardHeader}>
        <div className={styles.dashboardDots}>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.dashboardTitle}>Performance Dashboard</span>
      </div>
      <div className={styles.dashboardBody}>
        <div className={styles.dashboardMetric}>
          <div className={styles.metricLabel}>System Uptime</div>
          <div className={styles.metricValue}>99.99%</div>
          <div className={styles.metricBar}>
            <div className={styles.metricBarFill} style={{ width: "99.9%" }} />
          </div>
        </div>
        <div className={styles.dashboardMetric}>
          <div className={styles.metricLabel}>Threat Detection</div>
          <div className={styles.metricValue}>Real-time</div>
          <div className={styles.metricBar}>
            <div className={styles.metricBarFill} style={{ width: "100%" }} />
          </div>
        </div>
        <div className={styles.dashboardMetric}>
          <div className={styles.metricLabel}>Incident Response</div>
          <div className={styles.metricValue}>&lt; 15 min</div>
          <div className={styles.metricBar}>
            <div className={styles.metricBarFill} style={{ width: "92%" }} />
          </div>
        </div>
        <div className={styles.dashboardMetric}>
          <div className={styles.metricLabel}>Devices Secured</div>
          <div className={styles.metricValue}>2,400+</div>
          <div className={styles.metricBar}>
            <div className={styles.metricBarFill} style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
