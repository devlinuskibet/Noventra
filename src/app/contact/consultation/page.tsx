"use client";

import React, { useState, useMemo } from "react";
import { Shield, Clock, Phone, Mail, Award, CheckCircle, FileText, Calendar, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

const servicesList = [
  { id: "software", title: "Custom Software", desc: "Enterprise applications, APIs, SaaS architectures" },
  { id: "cloud", title: "Cloud & DevOps", desc: "AWS/GCP migration, Kubernetes, infrastructure as code" },
  { id: "security", title: "Cybersecurity & SOC", desc: "Audit compliance, penetration testing, threat detection" },
  { id: "ai", title: "AI & Automation", desc: "Machine learning integration, data pipelines, automation" },
  { id: "consulting", title: "IT Strategy", desc: "System design, risk assessment, tech roadmaps" },
  { id: "managed", title: "Managed Services", desc: "24/7 network ops center, infrastructure maintenance" }
];

const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

const getNextBusinessDays = () => {
  const days = [];
  const now = new Date();
  let current = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Start tomorrow

  while (days.length < 5) {
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Sat/Sun
      days.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
};

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

  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const bookingDays = useMemo(() => getNextBusinessDays(), []);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (errors.time) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.time;
        return next;
      });
    }
  };

  const handleFormSubmit = () => {
    if (!selectedTime) {
      setErrors((prev) => ({ ...prev, time: "Please select a time slot" }));
      return;
    }
    setStep(4); // Submission success screen
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

            {step < 4 && (
              <div className={styles.stepsIndicator}>
                <div className={`${styles.indicatorStep} ${step >= 1 ? styles.stepActive : ""} ${step > 1 ? styles.stepCompleted : ""}`}>
                  <span className={styles.stepNum}>{step > 1 ? "✓" : "1"}</span>
                  <span className={styles.stepLabel}>Details</span>
                </div>
                <div className={styles.indicatorLine} />
                <div className={`${styles.indicatorStep} ${step >= 2 ? styles.stepActive : ""} ${step > 2 ? styles.stepCompleted : ""}`}>
                  <span className={styles.stepNum}>{step > 2 ? "✓" : "2"}</span>
                  <span className={styles.stepLabel}>Scope</span>
                </div>
                <div className={styles.indicatorLine} />
                <div className={`${styles.indicatorStep} ${step >= 3 ? styles.stepActive : ""} ${step > 3 ? styles.stepCompleted : ""}`}>
                  <span className={styles.stepNum}>{step > 3 ? "✓" : "3"}</span>
                  <span className={styles.stepLabel}>Schedule</span>
                </div>
              </div>
            )}

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

              {step === 3 && (
                <div className={styles.stepPane}>
                  <h2 className={styles.stepTitle}>Reserve Consultation Time</h2>
                  <p className={styles.stepSubtitle}>Select your preferred slot. All times are shown in your local timezone.</p>

                  <div className={styles.calendarStrip}>
                    {bookingDays.map((day, idx) => {
                      const isSelected = idx === selectedDateIndex;
                      const dayName = day.toLocaleDateString("en-US", { weekday: "short" });
                      const monthName = day.toLocaleDateString("en-US", { month: "short" });
                      const dateNum = day.getDate();

                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedDateIndex(idx);
                            setSelectedTime(""); // Reset time on date change
                          }}
                          className={`${styles.calendarDayCard} ${isSelected ? styles.calendarDayCardActive : ""}`}
                        >
                          <span className={styles.dayLabel}>{dayName}</span>
                          <span className={styles.dateLabel}>{dateNum}</span>
                          <span className={styles.monthLabel}>{monthName}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className={styles.timeSlotsSection} style={{ marginTop: "var(--space-6)" }}>
                    <h3 className={styles.subHeading}>Available Time Slots</h3>
                    <div className={styles.timeSlotsGrid}>
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`${styles.timeSlotButton} ${selectedTime === time ? styles.timeSlotButtonActive : ""}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  {errors.time && <span className={styles.errorText} style={{ display: "block", marginTop: "var(--space-4)" }}>{errors.time}</span>}

                  <div className={styles.buttonRow} style={{ marginTop: "var(--space-8)", display: "flex", gap: "var(--space-4)" }}>
                    <button onClick={() => setStep(2)} className="btn btn--ghost" style={{ flex: 1, justifyContent: "center" }}>
                      Back
                    </button>
                    <button onClick={handleFormSubmit} className="btn btn--primary" style={{ flex: 2, justifyContent: "center" }}>
                      Book Session <Calendar size={16} style={{ marginLeft: "8px" }} />
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className={styles.successPane}>
                  <div className={styles.successIconWrapper}>
                    <CheckCircle className={styles.successCheckIcon} size={56} />
                  </div>
                  <h2 className={styles.successTitle}>Consultation Confirmed!</h2>
                  <p className={styles.successSubtitle}>
                    A calendar invitation and briefing questionnaire have been sent to <strong>{formData.email}</strong>.
                  </p>
                  
                  <div className={styles.summaryBox}>
                    <h3 className={styles.summaryTitle}>Booking Summary</h3>
                    <div className={styles.summaryDetails}>
                      <div className={styles.summaryRow}>
                        <span>Representative:</span>
                        <strong>{formData.name}</strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Organization:</span>
                        <strong>{formData.company} ({formData.role})</strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Selected Areas:</span>
                        <strong>
                          {selectedServices.map((id) => servicesList.find((s) => s.id === id)?.title).join(", ")}
                        </strong>
                      </div>
                      <div className={styles.summaryRow}>
                        <span>Reserved Time:</span>
                        <strong style={{ color: "var(--color-accent)" }}>
                          {bookingDays[selectedDateIndex]?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })} at {selectedTime}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className={styles.nextSteps}>
                    <h4>Next Steps</h4>
                    <ul>
                      <li>Review the brief questionnaire in your inbox to help us customize the session.</li>
                      <li>Have current system architectures or pain point list handy for direct review.</li>
                    </ul>
                  </div>

                  <Link href="/" className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginTop: "var(--space-6)" }}>
                    Return to Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Trust & Benefits Sidebar */}
          <div className={styles.sidebarPanel}>
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarHeader}>
                <Shield className={styles.sidebarIcon} size={28} />
                <h2 className={styles.sidebarTitle}>Why Book With Us?</h2>
              </div>
              
              <ul className={styles.benefitsList}>
                <li className={styles.benefitItem}>
                  <CheckCircle className={styles.benefitCheck} size={18} />
                  <div>
                    <strong>Principal Engineers Only</strong>
                    <p>You speak directly to engineering leads, not sales reps or account managers.</p>
                  </div>
                </li>
                <li className={styles.benefitItem}>
                  <CheckCircle className={styles.benefitCheck} size={18} />
                  <div>
                    <strong>NDA Protected & Secure</strong>
                    <p>All shared architecture diagrams and system specs are treated with strict confidentiality.</p>
                  </div>
                </li>
                <li className={styles.benefitItem}>
                  <CheckCircle className={styles.benefitCheck} size={18} />
                  <div>
                    <strong>No-Obligation Deliverables</strong>
                    <p>Receive a high-level roadmap report within 24 hours of our consultation session.</p>
                  </div>
                </li>
              </ul>

              <div className={styles.testimonialBlock}>
                <p className={styles.quote}>
                  &ldquo;The architecture review session was incredibly thorough. We solved our Kubernetes scaling bottlenecks in under an hour.&rdquo;
                </p>
                <div className={styles.author}>
                  <strong>David Miller</strong>
                  <span>CTO, Nexus Financial</span>
                </div>
              </div>

              <div className={styles.contactDesk}>
                <h4 className={styles.contactLabel}>Direct Inquiries</h4>
                <div className={styles.contactLink}>
                  <Mail size={16} />
                  <span>architects@noventra.com</span>
                </div>
                <div className={styles.contactLink}>
                  <Phone size={16} />
                  <span>+1 (800) 555-0190</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
