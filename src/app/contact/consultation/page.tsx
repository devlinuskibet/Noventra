"use client";

import React, { useState } from "react";
import { Shield, Clock, Phone, Mail, Award, CheckCircle, FileText, Calendar } from "lucide-react";
import styles from "./page.module.css";

export default function ConsultationPage() {
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
              <p style={{ color: "#64748b" }}>Form steps skeleton placeholder</p>
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
