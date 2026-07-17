"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories, type FilterTag } from "@/data/services";
import styles from "./page.module.css";

const filters: { label: string; value: FilterTag | "All" }[] = [
  { label: "All services", value: "All" },
  { label: "Build", value: "Build" },
  { label: "Secure", value: "Secure" },
  { label: "Automate", value: "Automate" },
  { label: "Manage", value: "Manage" },
  { label: "Advise", value: "Advise" },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag | "All">("All");

  const filteredServices = activeFilter === "All"
    ? serviceCategories
    : serviceCategories.filter((s) => s.filterTag === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1 className={styles.heroTitle}>
            Every layer of modern technology, under one partner
          </h1>
          <p className={styles.heroSubtitle}>
            From custom software development to cybersecurity, from cloud infrastructure
            to AI-powered analytics - we deliver the complete spectrum of technology
            services your organization needs to operate, compete, and grow.
          </p>
        </div>
      </section>

      {/* Service Explorer */}
      <section className="section">
        <div className="container">
          <div className={styles.filterBar}>
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`${styles.filterButton} ${activeFilter === filter.value ? styles.filterActive : ""}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className={styles.servicesGrid}>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link href={`/services/${service.slug}`} key={service.slug} className={styles.serviceCard}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIcon}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className={`tag tag--neutral ${styles.filterTag}`}>{service.filterTag}</span>
                  </div>
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.shortDescription}</p>
                  <div className={styles.subServicesList}>
                    {service.subServices.slice(0, 3).map((sub) => (
                      <span key={sub.slug} className={styles.subServiceTag}>{sub.name}</span>
                    ))}
                    {service.subServices.length > 3 && (
                      <span className={styles.subServiceMore}>+{service.subServices.length - 3} more</span>
                    )}
                  </div>
                  <span className="card__link">
                    Explore service <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--accent" style={{ padding: "var(--space-20) 0" }}>
        <div className="container text-center">
          <h2 style={{ fontSize: "var(--font-size-3xl)", fontWeight: 700, marginBottom: "var(--space-4)" }}>
            Not sure which service you need?
          </h2>
          <p style={{ fontSize: "var(--font-size-lg)", opacity: 0.9, marginBottom: "var(--space-8)", maxWidth: "500px", margin: "0 auto var(--space-8)" }}>
            Start with a conversation. Our specialists will help you identify the right
            solutions for your organization.
          </p>
          <Link href="/contact/consultation" className="btn btn--white btn--large">
            Talk to a Specialist <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
