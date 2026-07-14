"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Brain, Bot, MessageSquare, TrendingUp, RefreshCw, BarChart } from "lucide-react";
import styles from "./page.module.css";

const questions = [
  {
    id: 1,
    text: "What is your primary operational objective?",
    options: [
      { value: "rpa", label: "Reduce repetitive data entry and manual workflow tasks" },
      { value: "bi", label: "Unify business reporting and build executive dashboards" },
      { value: "ml", label: "Build predictive models for maintenance or utilization forecasting" },
      { value: "chat", label: "Automate customer support responses and inquiries" },
    ],
  },
  {
    id: 2,
    text: "What is the current state of your organization's data?",
    options: [
      { value: "rpa", label: "Mostly unstructured (PDFs, paper documents, email attachments)" },
      { value: "bi", label: "Structured in separate databases or operational CRM/ERPs" },
      { value: "ml", label: "High-volume transactional logs, timeseries, or IoT sensor streams" },
      { value: "chat", label: "Customer logs, FAQs, knowledge articles, and conversation files" },
    ],
  },
];

const fits = {
  rpa: { title: "Intelligent Process Automation (RPA)", desc: "Automate repetitive, rules-based tasks using UiPath or Power Automate, reducing manual errors by 95%.", icon: Bot, slug: "/services/ai-automation" },
  bi: { title: "Business Intelligence & Dashboards", desc: "Turn raw operational databases into real-time Power BI or Tableau interfaces representing clear KPIs.", icon: BarChart, slug: "/services/data-analytics" },
  ml: { title: "Custom Machine Learning Solutions", desc: "Train specialized models to forecast capacity, predictive maintenance cycles, or supply chain bottlenecks.", icon: TrendingUp, slug: "/services/ai-automation" },
  chat: { title: "Conversational AI & Chatbots", desc: "Implement secure enterprise LLM wrappers and support agents to handle 60%+ of tier-1 inquiries.", icon: MessageSquare, slug: "/services/ai-automation" },
};

export default function AIFitFinder() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [result, setResult] = useState<keyof typeof fits | null>(null);

  const selectOption = (qId: number, val: string) => {
    setSelections((prev) => ({ ...prev, [qId]: val }));
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      // Find the most frequent value selected, default to first selection
      const answers = [...Object.values({ ...selections, [qId]: val })];
      const counts: Record<string, number> = {};
      let maxVal = answers[0];
      let maxCount = 0;
      for (const ans of answers) {
        counts[ans] = (counts[ans] || 0) + 1;
        if (counts[ans] > maxCount) {
          maxCount = counts[ans];
          maxVal = ans;
        }
      }
      setResult(maxVal as keyof typeof fits);
    }
  };

  const reset = () => {
    setSelections({});
    setResult(null);
    setStep(1);
  };

  const currentQ = questions[step - 1];
  const fit = result ? fits[result] : null;
  const FitIcon = fit ? fit.icon : Brain;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span>AI Solutions Fit Finder</span>
          </nav>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <Brain size={32} strokeWidth={1.5} />
            </div>
            <h1 className={styles.heroTitle}>AI Solutions Fit Finder</h1>
            <p className={styles.heroSubtitle}>
              Take this brief quiz to determine which AI or automation capabilities best map to your operational bottlenecks.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layoutNarrow}>
            <div className={styles.quizPanel}>
              {fit ? (
                <div className={styles.resultsBox}>
                  <div className={styles.fitIcon}>
                    <FitIcon size={36} strokeWidth={1.5} />
                  </div>
                  <span className="eyebrow">Your Recommended Capability</span>
                  <h2 className={styles.fitTitle}>{fit.title}</h2>
                  <p className={styles.fitDesc}>{fit.desc}</p>

                  <div className={styles.actions}>
                    <Link href={fit.slug} className="btn btn--primary">
                      Explore this capability <ArrowRight size={16} />
                    </Link>
                    <button className={styles.resetBtn} onClick={reset}>
                      <RefreshCw size={14} /> Start over
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.quizContent}>
                  <div className={styles.progress}>
                    <span>Question {step} of {questions.length}</span>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${(step / questions.length) * 100}%` }} />
                    </div>
                  </div>
                  <h3 className={styles.questionText}>{currentQ.text}</h3>
                  <div className={styles.optionsList}>
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.value}
                        className={styles.optionBtn}
                        onClick={() => selectOption(currentQ.id, opt.value)}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
