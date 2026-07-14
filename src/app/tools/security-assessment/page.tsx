"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, ShieldAlert, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import styles from "./page.module.css";

const questions = [
  { id: 1, text: "Is Multi-Factor Authentication (MFA) enforced across all corporate accounts?" },
  { id: 2, text: "Are system backups stored offline and verified/tested at least monthly?" },
  { id: 3, text: "Do employees undergo regular security awareness and anti-phishing training?" },
  { id: 4, text: "Are all endpoints (laptops, mobile devices) protected by central MDM or antivirus?" },
  { id: 5, text: "Do you have 24/7 active firewall and intrusion detection systems monitoring network traffic?" },
  { id: 6, text: "Are access permissions reviewed quarterly to ensure least privilege access?" },
  { id: 7, text: "Do you enforce a strong password policy utilizing enterprise password managers?" },
  { id: 8, text: "Has your organization documented and tested a formal cybersecurity incident response plan?" },
];

export default function SecurityAssessment() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const selectAnswer = (qId: number, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const calculateScore = () => {
    const totalYes = Object.values(answers).filter(Boolean).length;
    const computedScore = Math.round((totalYes / questions.length) * 100);
    setScore(computedScore);
    setSubmitted(true);
  };

  const getRiskStatus = () => {
    if (score < 40) return { label: "CRITICAL RISK", color: "var(--color-danger)", icon: ShieldAlert };
    if (score < 75) return { label: "ELEVATED RISK", color: "var(--color-warning)", icon: AlertTriangle };
    return { label: "STRONG POSTURE", color: "var(--color-success)", icon: ShieldCheck };
  };

  const allAnswered = Object.keys(answers).length === questions.length;
  const status = getRiskStatus();
  const RiskIcon = status.icon;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>Security Assessment</span>
          </nav>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <ShieldAlert size={32} strokeWidth={1.5} />
            </div>
            <h1 className={styles.heroTitle}>Security Risk Self-Assessment</h1>
            <p className={styles.heroSubtitle}>
              Evaluate your current cybersecurity defenses, compliance level, and identify critical vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Form / Audit Panel */}
            <div className={styles.formPanel}>
              {submitted ? (
                <div className={styles.resultsBox}>
                  <div className={styles.scoreContainer}>
                    <div className={styles.scoreCircle}>
                      <span className={styles.scoreNumber}>{score}%</span>
                      <span className={styles.scoreLabel}>Health Score</span>
                    </div>
                    <div className={styles.statusLabel} style={{ color: status.color }}>
                      <RiskIcon size={20} />
                      <strong>{status.label}</strong>
                    </div>
                  </div>

                  <div className={styles.recommendations}>
                    <h3 className={styles.recTitle}>Recommended Actions</h3>
                    {score < 100 && (
                      <div className={styles.recList}>
                        {questions.map((q) => {
                          if (answers[q.id] === false) {
                            return (
                              <div key={q.id} className={styles.recItem}>
                                <AlertTriangle size={16} className={styles.recWarnIcon} />
                                <div>
                                  <strong>Fix: {q.text.replace("Is ", "").replace("Are ", "").replace("Do ", "").replace("?", "")}</strong>
                                  <p className={styles.recDesc}>Implement standard policies to address this capability gaps in your infrastructure.</p>
                                </div>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </div>

                  <div className={styles.actions}>
                    <Link href="/contact/consultation" className="btn btn--primary" style={{ width: "100%" }}>
                      Request a Professional Security Audit <ArrowRight size={16} />
                    </Link>
                    <button className="btn btn--ghost" style={{ width: "100%" }} onClick={() => setSubmitted(false)}>
                      Retake Assessment
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.questionsList}>
                  {questions.map((q) => (
                    <div key={q.id} className={styles.questionItem}>
                      <span className={styles.questionNum}>{String(q.id).padStart(2, "0")}</span>
                      <div className={styles.questionContent}>
                        <p className={styles.questionText}>{q.text}</p>
                        <div className={styles.answersRow}>
                          <button
                            className={`${styles.answerBtn} ${answers[q.id] === true ? styles.answerActive : ""}`}
                            onClick={() => selectAnswer(q.id, true)}
                          >
                            Yes
                          </button>
                          <button
                            className={`${styles.answerBtn} ${answers[q.id] === false ? styles.answerActiveNo : ""}`}
                            onClick={() => selectAnswer(q.id, false)}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    className="btn btn--primary btn--large"
                    disabled={!allAnswered}
                    onClick={calculateScore}
                    style={{ width: "100%", marginTop: "var(--space-4)" }}
                  >
                    Calculate Results <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Context */}
            <div className={styles.sidebarCol}>
              <div className={styles.sidebarCard}>
                <Info size={20} className={styles.infoIcon} />
                <h4 className={styles.cardTitle}>Why this matters</h4>
                <p className={styles.cardText}>
                  According to industry reports, over 60% of small-to-midsize businesses that suffer a major data breach
                  struggle to sustain operations within 6 months. Proactive vulnerability detection is critical.
                </p>
              </div>

              <div className={styles.sidebarCard}>
                <ShieldCheck size={20} className={styles.infoIcon} />
                <h4 className={styles.cardTitle}>Compliance Frameworks</h4>
                <p className={styles.cardText}>
                  Our assessments map directly to security controls requested by ISO 27001, SOC 2, NIST, and local data protection regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
