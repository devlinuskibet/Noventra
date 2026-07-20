"use client";

import React, { useState, useEffect } from "react";
import { Shield, Server, Terminal, CheckCircle, AlertTriangle, ArrowRight, RefreshCw } from "lucide-react";
import styles from "../app/page.module.css";

type TabType = "compliance" | "nodes" | "logs";

interface Certification {
  id: string;
  name: string;
  category: string;
  status: "active" | "verified" | "certified";
  ref: string;
  lastAudit: string;
  score: string;
  details: string[];
}

const certsData: Certification[] = [
  {
    id: "iso27001",
    name: "ISO 27001 - Information Security",
    category: "Information Security Management System",
    status: "certified",
    ref: "ISMS-948271",
    lastAudit: "June 2026",
    score: "100% Compliant",
    details: [
      "Access control policies & management validated",
      "Cryptographic protection standards verified",
      "Physical & environmental security enforced",
      "Incident response process & testing approved"
    ]
  },
  {
    id: "iso9001",
    name: "ISO 9001 - Quality Management",
    category: "Quality Management System",
    status: "certified",
    ref: "QMS-384210",
    lastAudit: "April 2026",
    score: "Verified Quality",
    details: [
      "Customer satisfaction processes active",
      "Continuous improvement framework operating",
      "Service delivery quality checks validated",
      "Management responsibility & commitment verified"
    ]
  },
  {
    id: "soc2",
    name: "SOC 2 Type II - Trust Services",
    category: "Trust Services Criteria",
    status: "verified",
    ref: "SOC2-883719",
    lastAudit: "May 2026",
    score: "Zero Exceptions",
    details: [
      "Security, Availability & Confidentiality controls in place",
      "Continuous logging & environment monitoring verified",
      "Employee background checks & training audited",
      "Risk assessment procedures executed regularly"
    ]
  },
  {
    id: "aws",
    name: "AWS Advanced Partner",
    category: "Cloud Infrastructure",
    status: "active",
    ref: "APN-ADV-2026",
    lastAudit: "Jan 2026",
    score: "12 Certified Engineers",
    details: [
      "AWS Well-Architected Reviews capability",
      "Cloud migration competency validated",
      "Managed service provider capabilities approved",
      "DevSecOps automation specialties checked"
    ]
  },
  {
    id: "ms",
    name: "Microsoft Gold Partner",
    category: "Enterprise Cloud & Applications",
    status: "active",
    ref: "MS-GOLD-943",
    lastAudit: "Feb 2026",
    score: "8 competencies",
    details: [
      "Azure Cloud Solution Provider (CSP) status",
      "Modern Work & Security Solutions validated",
      "Identity & Access Management competency",
      "Application integration services validated"
    ]
  },
  {
    id: "gcp",
    name: "Google Cloud Partner",
    category: "Modern Infrastructure & Analytics",
    status: "active",
    ref: "GCP-PART-2026",
    lastAudit: "March 2026",
    score: "Data & Infrastructure",
    details: [
      "Google Cloud Architecture specialties verified",
      "BigQuery data warehouse migration verified",
      "Kubernetes & Anthos management skills approved",
      "Workspace security integration audited"
    ]
  },
  {
    id: "cisco",
    name: "Cisco Certified Partner",
    category: "Enterprise Networking & Security",
    status: "active",
    ref: "CISCO-PART-382",
    lastAudit: "April 2026",
    score: "Gold Integrator",
    details: [
      "Enterprise routing & switching solutions verified",
      "Cisco Umbrella & Firepower deployments approved",
      "Zero Trust Network Access (ZTNA) design validated",
      "SD-WAN deployment competencies active"
    ]
  },
  {
    id: "fortinet",
    name: "Fortinet Partner",
    category: "Network Defense Solutions",
    status: "active",
    ref: "FT-PART-991",
    lastAudit: "May 2026",
    score: "Advocate Integrator",
    details: [
      "FortiGate Next-Generation Firewall deployments",
      "Unified Threat Management integration verified",
      "Secure Access Service Edge (SASE) capability",
      "Network security audit operations validated"
    ]
  }
];

export default function SecurityCommandCenter() {
  const [activeTab, setActiveTab] = useState<TabType>("compliance");
  const [selectedCert, setSelectedCert] = useState<string>("iso27001");

  const currentCert = certsData.find((c) => c.id === selectedCert) || certsData[0];

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
          <div className={styles.complianceLayout}>
            <div className={styles.certList}>
              {certsData.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCert(cert.id)}
                  className={`${styles.certCard} ${selectedCert === cert.id ? styles.certCardActive : ""}`}
                >
                  <Shield size={18} className={styles.certIcon} />
                  <div className={styles.certMeta}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certCategory}>{cert.category}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className={styles.certDetails}>
              <div className={styles.detailsHeader}>
                <h4>{currentCert.name} Verification Dashboard</h4>
                <span className={styles.statusBadge}>
                  <CheckCircle size={14} style={{ marginRight: "4px" }} /> Active
                </span>
              </div>
              <div className={styles.detailsGrid}>
                <div className={styles.detailsField}>
                  <span className={styles.fieldLabel}>REGISTRATION NO.</span>
                  <span className={styles.fieldValue}>{currentCert.ref}</span>
                </div>
                <div className={styles.detailsField}>
                  <span className={styles.fieldLabel}>LAST AUDIT DATE</span>
                  <span className={styles.fieldValue}>{currentCert.lastAudit}</span>
                </div>
                <div className={styles.detailsField}>
                  <span className={styles.fieldLabel}>AUDIT RESULT</span>
                  <span className={styles.fieldValue} style={{ color: "var(--color-accent, #3B82F6)", fontWeight: "bold" }}>
                    {currentCert.score}
                  </span>
                </div>
              </div>
              <div className={styles.checksSection}>
                <h5>VALIDATED CONTROLS & MONITORING</h5>
                <ul className={styles.checksList}>
                  {currentCert.details.map((detail, idx) => (
                    <li key={idx} className={styles.checkItem}>
                      <span className={styles.checkIndicator}>✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
