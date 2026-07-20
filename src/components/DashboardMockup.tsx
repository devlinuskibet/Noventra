"use client";

import React, { useState, useEffect } from "react";
import styles from "../app/page.module.css";

export default function DashboardMockup() {
  const [uptime, setUptime] = useState(99.99);
  const [devices, setDevices] = useState(2438);

  useEffect(() => {
    const uptimeInterval = setInterval(() => {
      setUptime(99.97 + Math.random() * 0.02);
    }, 2500);

    const devicesInterval = setInterval(() => {
      setDevices((prev) => prev + Math.floor(Math.random() * 3));
    }, 4000);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(devicesInterval);
    };
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
            <div className={`${styles.metricBarFill} ${styles.shimmerFill}`} style={{ width: `${uptime}%` }} />
          </div>
        </div>
        <div className={styles.dashboardMetric}>
          <div className={styles.metricLabel} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            Threat Detection
            <span className={styles.livePulse} style={{ backgroundColor: "#10B981", animationDelay: "0.5s" }} />
          </div>
          <div className={styles.metricValue}>Real-time</div>
          <div className={styles.metricBar}>
            <div className={`${styles.metricBarFill} ${styles.scanFill}`} style={{ width: "100%" }} />
          </div>
        </div>
        <div className={styles.dashboardMetric}>
          <div className={styles.metricLabel} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            Incident Response
            <span className={styles.livePulse} style={{ backgroundColor: "#3B82F6", animationDelay: "1.5s" }} />
          </div>
          <div className={styles.metricValue}>&lt; 15 min</div>
          <div className={styles.metricBar}>
            <div className={`${styles.metricBarFill} ${styles.responsePulse}`} style={{ width: "92%" }} />
          </div>
        </div>
        <div className={styles.dashboardMetric}>
          <div className={styles.metricLabel} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            Devices Secured
            <span className={styles.livePulse} style={{ animationDelay: "1s" }} />
          </div>
          <div className={styles.metricValue}>{devices.toLocaleString()}+</div>
          <div className={styles.metricBar}>
            <div className={styles.metricBarFill} style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
