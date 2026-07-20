"use client";

import React, { useState, useEffect } from "react";
import styles from "../app/page.module.css";

export default function DashboardMockup() {
  const [uptime, setUptime] = useState(99.99);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(99.97 + Math.random() * 0.02);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
          <div className={styles.metricLabel} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            System Uptime
            <span className={styles.livePulse} title="Live data feed active" />
          </div>
          <div className={styles.metricValue}>{uptime.toFixed(2)}%</div>
          <div className={styles.metricBar}>
            <div className={styles.metricBarFill} style={{ width: `${uptime}%` }} />
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
