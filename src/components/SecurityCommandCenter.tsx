"use client";

import React, { useState, useEffect } from "react";
import { Shield, Server, Terminal, CheckCircle, AlertTriangle, ArrowRight, RefreshCw } from "lucide-react";
import styles from "../app/page.module.css";

type TabType = "compliance" | "nodes" | "logs";

export default function SecurityCommandCenter() {
  const [activeTab, setActiveTab] = useState<TabType>("compliance");

  return (
    <div className={styles.commandCenter}>
      <div className={styles.commandHeader}>
        <div className={styles.commandTitleGroup}>
          <div className={styles.pulseIndicator} />
          <h3>Security & Operations Command Center</h3>
        </div>
        <p className={styles.commandSubtitle}>Live status: Active & Compliant</p>
      </div>
      
      <div className={styles.commandTabs}>
        <button
          onClick={() => setActiveTab("compliance")}
          className={`${styles.tabButton} ${activeTab === "compliance" ? styles.tabActive : ""}`}
        >
          <Shield size={16} />
          <span>Compliance & Trust</span>
        </button>
        <button
          onClick={() => setActiveTab("nodes")}
          className={`${styles.tabButton} ${activeTab === "nodes" ? styles.tabActive : ""}`}
        >
          <Server size={16} />
          <span>Infrastructure Nodes</span>
        </button>
        <button
          onClick={() => setActiveTab("logs")}
          className={`${styles.tabButton} ${activeTab === "logs" ? styles.tabActive : ""}`}
        >
          <Terminal size={16} />
          <span>Security Audit Logs</span>
        </button>
      </div>

      <div className={styles.commandContent}>
        {activeTab === "compliance" && (
          <div className={styles.tabPane}>
            <p>Compliance details loading...</p>
          </div>
        )}
        {activeTab === "nodes" && (
          <div className={styles.tabPane}>
            <p>Infrastructure nodes monitoring loading...</p>
          </div>
        )}
        {activeTab === "logs" && (
          <div className={styles.tabPane}>
            <p>Live terminal logs loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
