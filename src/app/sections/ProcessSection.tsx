"use client";

import { Search, PenTool, Rocket, RefreshCcw } from "lucide-react";
import styles from "../page.module.css";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "We assess your current technology landscape, understand your business objectives, and identify opportunities for improvement.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "We architect solutions that align with your goals - from technology roadmaps to detailed technical specifications.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver",
    description: "We implement with precision, following proven methodologies with regular milestones and transparent communication.",
  },
  {
    icon: RefreshCcw,
    number: "04",
    title: "Support & optimize",
    description: "We don't walk away at launch. Ongoing support, monitoring, and optimization ensure lasting value from every engagement.",
  },
];

export default function ProcessSection() {
  return (
    <section className={`section ${styles.processSection}`}>
      <div className="container">
        <div className={`${styles.sectionHeader} text-center`}>
          <span className="eyebrow">Our approach</span>
          <h2 className="section-title">How we work</h2>
          <p className="section-subtitle mx-auto">
            Every engagement follows a structured methodology designed to reduce risk,
            maximize value, and build a foundation for long-term partnership.
          </p>
        </div>
        <div className={styles.processGrid}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className={styles.processStep}>
                <div className={styles.processNumber}>{step.number}</div>
                <div className={styles.processIcon}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepDescription}>{step.description}</p>
                {index < steps.length - 1 && <div className={styles.processConnector} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
