"use client";

import React, { useState } from "react";
import { Shield, Clock, Phone, Mail, Award, CheckCircle, FileText, Calendar, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const servicesList = [
  { id: "software", title: "Custom Software", desc: "Enterprise applications, APIs, SaaS architectures" },
  { id: "cloud", title: "Cloud & DevOps", desc: "AWS/GCP migration, Kubernetes, infrastructure as code" },
  { id: "security", title: "Cybersecurity & SOC", desc: "Audit compliance, penetration testing, threat detection" },
  { id: "ai", title: "AI & Automation", desc: "Machine learning integration, data pipelines, automation" },
  { id: "consulting", title: "IT Strategy", desc: "System design, risk assessment, tech roadmaps" },
  { id: "managed", title: "Managed Services", desc: "24/7 network ops center, infrastructure maintenance" }
];

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company/Organization is required";
    if (!formData.role.trim()) newErrors.role = "Job role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep1 = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  const handleNextStep2 = () => {
    if (selectedServices.length === 0) {
      setErrors((prev) => ({ ...prev, services: "Please select at least one area of interest" }));
      return;
    }
    setStep(3);
  };

  return (
    <main className={styles.pageContainer}>
      <div className="container">
        <div className={styles.layoutWrapper}>
          {/* Left Panel: Form Container */}
          <div className={styles.formPanel}>
            <div className={styles.headerArea}>
              <span className={styles.eyebrow}>Booking Desk</span>
              <h1 className={styles.title}>Request a Solutions Consultation</h1>
              <p className={styles.description}>
                Collaborate with our systems architects to design, assess, or audit your enterprise technology environment.
              </p>
            </div>

            <div className={styles.formContent}>
              {step === 1 && (
                <div className={styles.stepPane}>
                  <h2 className={styles.stepTitle}>Tell us about yourself</h2>
                  <p className={styles.stepSubtitle}>We use this to prepare for your specific market domain.</p>
                  
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Work Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sarah@company.com"
                      className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles.inputGrid}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Corp"
                        className={`${styles.input} ${errors.company ? styles.inputError : ""}`}
                      />
                      {errors.company && <span className={styles.errorText}>{errors.company}</span>}
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Job Title / Role *</label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g. CTO / Director of IT"
                        className={`${styles.input} ${errors.role ? styles.inputError : ""}`}
                      />
                      {errors.role && <span className={styles.errorText}>{errors.role}</span>}
                    </div>
                  </div>

                  <button onClick={handleNextStep1} className="btn btn--primary" style={{ marginTop: "var(--space-6)", width: "100%", justifyContent: "center" }}>
                    Continue to Project Scope <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className={styles.stepPane}>
                  <h2 className={styles.stepTitle}>Select Project Scope</h2>
                  <p className={styles.stepSubtitle}>Choose the engineering areas you would like to address during the session.</p>

                  <div className={styles.servicesGrid}>
                    {servicesList.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`${styles.serviceSelectCard} ${selectedServices.includes(service.id) ? styles.serviceSelectCardActive : ""}`}
                      >
                        <span className={styles.cardIndicator} />
                        <div className={styles.cardContent}>
                          <span className={styles.cardTitle}>{service.title}</span>
                          <p className={styles.cardDesc}>{service.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.services && <span className={styles.errorText} style={{ display: "block", marginTop: "var(--space-4)" }}>{errors.services}</span>}

                  <div className={styles.buttonRow} style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-4)" }}>
                    <button onClick={() => setStep(1)} className="btn btn--ghost" style={{ flex: 1, justifyContent: "center" }}>
                      Back
                    </button>
                    <button onClick={handleNextStep2} className="btn btn--primary" style={{ flex: 2, justifyContent: "center" }}>
                      Continue to Schedule <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Trust & Benefits Sidebar */}
          <div className={styles.sidebarPanel}>
            <div className={styles.sidebarCard}>
              <p style={{ color: "#64748b" }}>Trust and outcomes sidebar placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
