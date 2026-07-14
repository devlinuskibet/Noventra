"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import styles from "./page.module.css";

const projectTypes = [
  { value: "software", label: "Custom Software Development", baseCost: 35000, baseMonths: 3 },
  { value: "cloud", label: "Cloud Migration & DevOps", baseCost: 20000, baseMonths: 2 },
  { value: "cyber", label: "Cybersecurity & Compliance Setup", baseCost: 15000, baseMonths: 1.5 },
  { value: "ai", label: "AI Integration & Automation", baseCost: 25000, baseMonths: 2.5 },
];

const scaleOptions = [
  { value: "small", label: "SME / Small scale (10–50 users)", multiplier: 1 },
  { value: "medium", label: "Corporate / Mid scale (50–200 users)", multiplier: 1.8 },
  { value: "large", label: "Enterprise / Large scale (200+ users)", multiplier: 3.2 },
];

const integrationOptions = [
  { value: "none", label: "Standalone system (No legacy integrations)", multiplier: 1 },
  { value: "some", label: "Standard APIs (1-2 external connections)", multiplier: 1.25 },
  { value: "complex", label: "Enterprise systems (Multiple databases, legacy ERPs)", multiplier: 1.6 },
];

export default function ProjectEstimator() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("software");
  const [scale, setScale] = useState("small");
  const [integration, setIntegration] = useState("none");

  const [minCost, setMinCost] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    const selectedProj = projectTypes.find((p) => p.value === projectType) || projectTypes[0];
    const selectedScale = scaleOptions.find((s) => s.value === scale) || scaleOptions[0];
    const selectedInt = integrationOptions.find((i) => i.value === integration) || integrationOptions[0];

    const computedBase = selectedProj.baseCost * selectedScale.multiplier * selectedInt.multiplier;
    const computedMin = Math.round(computedBase * 0.9 / 1000) * 1000;
    const computedMax = Math.round(computedBase * 1.15 / 1000) * 1000;
    const computedMonths = Math.round(selectedProj.baseMonths * Math.sqrt(selectedScale.multiplier * selectedInt.multiplier) * 10) / 10;

    setMinCost(computedMin);
    setMaxCost(computedMax);
    setMonths(computedMonths);
  }, [projectType, scale, integration]);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>Project Estimator</span>
          </nav>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <h1 className={styles.heroTitle}>Project Scope Estimator</h1>
            <p className={styles.heroSubtitle}>
              Outline your parameters to calculate a guidance project range, timeline, and recommended technology stack.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Steps & Panel */}
            <div className={styles.formPanel}>
              <div className={styles.stepsIndicator}>
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`${styles.stepIndicator} ${step >= s ? styles.stepActive : ""}`}>
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className={styles.formStep}>
                  <h3 className={styles.stepTitle}>Select Project Type</h3>
                  <div className={styles.optionsGrid}>
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        className={`${styles.optionBtn} ${projectType === type.value ? styles.optionActive : ""}`}
                        onClick={() => setProjectType(type.value)}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                  <button className="btn btn--primary" style={{ marginTop: "var(--space-4)" }} onClick={() => setStep(2)}>
                    Next step <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className={styles.formStep}>
                  <h3 className={styles.stepTitle}>Select Scope Scale</h3>
                  <div className={styles.optionsGrid}>
                    {scaleOptions.map((opt) => (
                      <button
                        key={opt.value}
                        className={`${styles.optionBtn} ${scale === opt.value ? styles.optionActive : ""}`}
                        onClick={() => setScale(opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
                    <button className="btn btn--ghost" onClick={() => setStep(1)}>Back</button>
                    <button className="btn btn--primary" onClick={() => setStep(3)}>Next step <ArrowRight size={16} /></button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className={styles.formStep}>
                  <h3 className={styles.stepTitle}>Select Integration Level</h3>
                  <div className={styles.optionsGrid}>
                    {integrationOptions.map((opt) => (
                      <button
                        key={opt.value}
                        className={`${styles.optionBtn} ${integration === opt.value ? styles.optionActive : ""}`}
                        onClick={() => setIntegration(opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
                    <button className="btn btn--ghost" onClick={() => setStep(2)}>Back</button>
                    <button className="btn btn--primary" onClick={() => setStep(1)}>Review Configuration</button>
                  </div>
                </div>
              )}
            </div>

            {/* Live Results Column */}
            <div className={styles.resultsPanel}>
              <h2 className={styles.resultsTitle}>Estimated Scope</h2>

              <div className={styles.estimateRow}>
                <div>
                  <span className={styles.estimateLabel}>Estimated Cost Range</span>
                  <div className={styles.estimateValue}>
                    ${minCost.toLocaleString()} – ${maxCost.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className={styles.estimateRow}>
                <div>
                  <span className={styles.estimateLabel}>Projected Timeline</span>
                  <div className={styles.estimateValue}>
                    {months} – {Math.round((months * 1.3) * 10) / 10} months
                  </div>
                </div>
              </div>

              <div className={styles.inclusionList}>
                <h4 className={styles.inclusionTitle}>What is included:</h4>
                <div className={styles.inclusionItem}>
                  <CheckCircle2 size={16} />
                  <span>Technical architecture & database design documentation</span>
                </div>
                <div className={styles.inclusionItem}>
                  <CheckCircle2 size={16} />
                  <span>Security-first deployment & compliance audits</span>
                </div>
                <div className={styles.inclusionItem}>
                  <CheckCircle2 size={16} />
                  <span>Interactive dashboard & telemetry integrations</span>
                </div>
              </div>

              <div className={styles.resultsActions}>
                <Link href="/contact/consultation" className="btn btn--primary" style={{ width: "100%" }}>
                  Book discovery consultation <ArrowRight size={16} />
                </Link>
                <div className={styles.cautionNote}>
                  <ShieldAlert size={14} />
                  <span>Estimates exclude ongoing cloud capacity fees.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
