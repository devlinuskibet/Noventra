"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Calculator, CheckCircle2, TrendingUp, ShieldAlert, Cpu } from "lucide-react";
import styles from "./page.module.css";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [currentSpend, setCurrentSpend] = useState(60000);
  const [bottleneck, setBottleneck] = useState("downtime");

  const [savings, setSavings] = useState(0);
  const [productivityGain, setProductivityGain] = useState(0);
  const [paybackMonths, setPaybackMonths] = useState(0);

  useEffect(() => {
    // Basic business logic simulation
    let factor = 0.25; // default savings factor (25%)
    let hoursPerEmployeeSaved = 4; // monthly productivity gain per employee

    if (bottleneck === "downtime") {
      factor = 0.35;
      hoursPerEmployeeSaved = 6;
    } else if (bottleneck === "security") {
      factor = 0.2;
      hoursPerEmployeeSaved = 3;
    } else if (bottleneck === "manual") {
      factor = 0.4;
      hoursPerEmployeeSaved = 10;
    } else if (bottleneck === "software") {
      factor = 0.3;
      hoursPerEmployeeSaved = 8;
    }

    const calculatedSavings = Math.round(currentSpend * factor);
    const estimatedCost = Math.round(currentSpend * 0.15 + 5000); // estimated Noventra cost
    const computedPayback = Math.max(1, Math.round((estimatedCost / (calculatedSavings / 12)) * 10) / 10);

    setSavings(calculatedSavings);
    setProductivityGain(employees * hoursPerEmployeeSaved * 12);
    setPaybackMonths(computedPayback);
  }, [employees, currentSpend, bottleneck]);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>IT Cost & ROI Calculator</span>
          </nav>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <Calculator size={32} strokeWidth={1.5} />
            </div>
            <h1 className={styles.heroTitle}>IT Cost & ROI Calculator</h1>
            <p className={styles.heroSubtitle}>
              Estimate potential operational savings, efficiency gains, and ROI from transitioning
              to Noventra&apos;s managed services and custom automation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div className={styles.formPanel}>
              <h2 className={styles.panelTitle}>Input parameters</h2>
              
              <div className="form-group">
                <label className="form-label" htmlFor="employees">
                  Company size: <strong>{employees} employees</strong>
                </label>
                <input
                  id="employees"
                  type="range"
                  min="10"
                  max="500"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="currentSpend">
                  Current annual IT spend: <strong>${currentSpend.toLocaleString()}</strong>
                </label>
                <input
                  id="currentSpend"
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={currentSpend}
                  onChange={(e) => setCurrentSpend(Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="bottleneck">Primary technology bottleneck</label>
                <select
                  id="bottleneck"
                  className="form-select"
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                >
                  <option value="downtime">System downtime & network outages</option>
                  <option value="security">Cybersecurity concerns & compliance anxiety</option>
                  <option value="manual">Manual processes & fragmented spreadsheets</option>
                  <option value="software">Rigid off-the-shelf software limitations</option>
                </select>
              </div>

              <div className={styles.guaranteeNote}>
                <CheckCircle2 size={16} />
                <span>Calculations based on average outcomes across 500+ client engagements.</span>
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsPanel}>
              <h2 className={styles.panelTitle}>Projected annual impact</h2>

              <div className={styles.metricGrid}>
                <div className={styles.metricCard}>
                  <TrendingUp size={24} className={styles.metricIcon} />
                  <div>
                    <span className={styles.metricLabel}>Estimated annual savings</span>
                    <h3 className={styles.metricValue}>${savings.toLocaleString()}</h3>
                  </div>
                </div>

                <div className={styles.metricCard}>
                  <Cpu size={24} className={styles.metricIcon} />
                  <div>
                    <span className={styles.metricLabel}>Productivity gain (annual)</span>
                    <h3 className={styles.metricValue}>{productivityGain.toLocaleString()} hours</h3>
                  </div>
                </div>

                <div className={styles.metricCard}>
                  <ShieldAlert size={24} className={styles.metricIcon} />
                  <div>
                    <span className={styles.metricLabel}>Break-even payback period</span>
                    <h3 className={styles.metricValue}>{paybackMonths} months</h3>
                  </div>
                </div>
              </div>

              <div className={styles.chartSection}>
                <div className={styles.chartHeader}>
                  <span>Cost comparison</span>
                  <span>Managed vs. Legacy IT</span>
                </div>
                <div className={styles.chartContainer}>
                  <div className={styles.chartBarGroup}>
                    <div className={styles.chartBarLabel}>Legacy (Current)</div>
                    <div className={styles.chartBarTrack}>
                      <div className={`${styles.chartBarFill} ${styles.currentBar}`} style={{ width: "100%" }} />
                    </div>
                    <span className={styles.chartBarValue}>100%</span>
                  </div>
                  <div className={styles.chartBarGroup}>
                    <div className={styles.chartBarLabel}>Noventra Managed</div>
                    <div className={styles.chartBarTrack}>
                      <div
                        className={`${styles.chartBarFill} ${styles.optimizedBar}`}
                        style={{ width: `${Math.round(((currentSpend - savings) / currentSpend) * 100)}%` }}
                      />
                    </div>
                    <span className={styles.chartBarValue}>
                      {Math.round(((currentSpend - savings) / currentSpend) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.resultsActions}>
                <Link href="/contact/consultation" className="btn btn--primary">
                  Discuss these results with a specialist <ArrowRight size={16} />
                </Link>
                <p className={styles.resultsNote}>
                  *Estimates are for guidance only. Full custom quotes are provided following technical discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
