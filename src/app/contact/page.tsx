"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Headphones,
} from "lucide-react";
import styles from "./page.module.css";

const serviceOptions = [
  "Software Development",
  "Cloud Computing",
  "Cybersecurity",
  "Managed IT Services",
  "Networking",
  "AI & Automation",
  "Enterprise Systems (ERP/CRM)",
  "Data & Analytics",
  "ICT Consultancy",
  "Not sure — I need guidance",
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "", timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1 className={styles.heroTitle}>Let&apos;s discuss your technology needs</h1>
          <p className={styles.heroSubtitle}>
            Whether you&apos;re planning a new project, need ongoing support, or want to explore
            how technology can transform your operations — start here.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Context */}
            <div className={styles.contextCol}>
              <div className={styles.guarantees}>
                <div className={styles.guarantee}>
                  <Clock size={20} />
                  <div>
                    <strong>Response within one business day</strong>
                    <p>Every inquiry receives a personal response from a qualified team member.</p>
                  </div>
                </div>
                <div className={styles.guarantee}>
                  <ShieldCheck size={20} />
                  <div>
                    <strong>No-obligation consultation</strong>
                    <p>Initial consultations are free. We assess your needs before proposing solutions.</p>
                  </div>
                </div>
                <div className={styles.guarantee}>
                  <FileText size={20} />
                  <div>
                    <strong>NDA available on request</strong>
                    <p>We understand confidentiality matters. An NDA can be signed before any detailed discussion.</p>
                  </div>
                </div>
              </div>

              <div className={styles.contactDetails}>
                <h3 className={styles.detailsTitle}>Contact details</h3>
                <div className={styles.detailItem}>
                  <MapPin size={16} />
                  <span>123 Innovation Drive, Tech District</span>
                </div>
                <div className={styles.detailItem}>
                  <Phone size={16} />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                <div className={styles.detailItem}>
                  <Mail size={16} />
                  <a href="mailto:hello@noventra.com">hello@noventra.com</a>
                </div>
              </div>

              {/* Existing Client Support */}
              <div className={styles.supportBox}>
                <Headphones size={24} />
                <div>
                  <h4>Existing client?</h4>
                  <p>For support requests, use our dedicated client support portal with priority SLA routing.</p>
                  <Link href="/contact/support" className="btn btn--ghost btn--small" style={{ marginTop: "var(--space-3)" }}>
                    Request Support <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={styles.formCol}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle2 size={48} />
                  <h3>Thank you for reaching out</h3>
                  <p>We&apos;ve received your inquiry and will respond within one business day. A confirmation has been sent to your email.</p>
                </div>
              ) : (
                <>
                  {/* Step Indicators */}
                  <div className={styles.steps}>
                    {[1, 2, 3].map((s) => (
                      <div key={s} className={`${styles.stepDot} ${step >= s ? styles.stepActive : ""}`}>
                        <span>{s}</span>
                        <span className={styles.stepLabel}>
                          {s === 1 ? "Your details" : s === 2 ? "What you need" : "Project info"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <div className={styles.formStep}>
                        <h3 className={styles.formStepTitle}>Tell us about yourself</h3>
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">Full name</label>
                          <input id="name" className="form-input" type="text" value={formData.name}
                            onChange={(e) => updateField("name", e.target.value)} required placeholder="John Smith" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="email">Work email</label>
                          <input id="email" className="form-input" type="email" value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)} required placeholder="john@company.com" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="phone">Phone number</label>
                          <input id="phone" className="form-input" type="tel" value={formData.phone}
                            onChange={(e) => updateField("phone", e.target.value)} placeholder="+1 (234) 567-890" />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="company">Company / Organization</label>
                          <input id="company" className="form-input" type="text" value={formData.company}
                            onChange={(e) => updateField("company", e.target.value)} required placeholder="Acme Corp" />
                        </div>
                        <button type="button" className="btn btn--primary" onClick={() => setStep(2)}>
                          Continue <ArrowRight size={16} />
                        </button>
                      </div>
                    )}

                    {step === 2 && (
                      <div className={styles.formStep}>
                        <h3 className={styles.formStepTitle}>What do you need help with?</h3>
                        <div className="form-group">
                          <label className="form-label" htmlFor="service">Service area</label>
                          <select id="service" className="form-select" value={formData.service}
                            onChange={(e) => updateField("service", e.target.value)} required>
                            <option value="">Select a service area</option>
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="message">Tell us more about your needs</label>
                          <textarea id="message" className="form-textarea" value={formData.message}
                            onChange={(e) => updateField("message", e.target.value)}
                            placeholder="Describe your current situation, challenges, or goals..." rows={5} />
                        </div>
                        <div style={{ display: "flex", gap: "var(--space-3)" }}>
                          <button type="button" className="btn btn--ghost" onClick={() => setStep(1)}>Back</button>
                          <button type="button" className="btn btn--primary" onClick={() => setStep(3)}>
                            Continue <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className={styles.formStep}>
                        <h3 className={styles.formStepTitle}>Project details</h3>
                        <div className="form-group">
                          <label className="form-label" htmlFor="timeline">Ideal timeline</label>
                          <select id="timeline" className="form-select" value={formData.timeline}
                            onChange={(e) => updateField("timeline", e.target.value)}>
                            <option value="">Select timeline</option>
                            <option value="immediate">Immediate (within weeks)</option>
                            <option value="1-3months">1-3 months</option>
                            <option value="3-6months">3-6 months</option>
                            <option value="6months+">6+ months / Planning phase</option>
                            <option value="ongoing">Ongoing / managed services</option>
                          </select>
                        </div>
                        <div style={{ display: "flex", gap: "var(--space-3)" }}>
                          <button type="button" className="btn btn--ghost" onClick={() => setStep(2)}>Back</button>
                          <button type="submit" className="btn btn--primary">
                            Submit Request <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
