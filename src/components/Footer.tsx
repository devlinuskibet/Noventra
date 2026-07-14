"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import styles from "./Footer.module.css";

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Story", href: "/about/story" },
  { name: "Leadership", href: "/about/leadership" },
  { name: "Careers", href: "/about/careers" },
  { name: "Partners & Certifications", href: "/about/partners" },
  { name: "CSR", href: "/about/csr" },
];

const serviceLinks = [
  { name: "Software Development", href: "/services/software-development" },
  { name: "Cloud Computing", href: "/services/cloud" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Managed IT Services", href: "/services/managed-it" },
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "Data & Analytics", href: "/services/data-analytics" },
  { name: "Enterprise Systems", href: "/services/enterprise-systems" },
  { name: "ICT Consultancy", href: "/services/consultancy" },
  { name: "Networking", href: "/services/networking" },
];

const resourceLinks = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/insights/blog" },
  { name: "White Papers", href: "/insights/white-papers" },
  { name: "Knowledge Base", href: "/insights/knowledge-base" },
  { name: "ROI Calculator", href: "/tools/roi-calculator" },
  { name: "Security Assessment", href: "/tools/security-assessment" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
  { name: "Cookie Policy", href: "/legal/cookies" },
  { name: "Security Statement", href: "/legal/security" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="Noventra Technologies home">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="var(--color-accent)" />
                <path d="M8 22V10l8 12V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="16" r="3" fill="white" opacity="0.6" />
              </svg>
              <span>Noventra</span>
            </Link>
            <p className={styles.brandDescription}>
              The technology partner enterprises, institutions, and ambitious
              organizations turn to when they need more than a vendor.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={14} />
                <span>123 Innovation Drive, Tech District</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={14} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className={styles.contactItem}>
                <Mail size={14} />
                <a href="mailto:hello@noventra.com">hello@noventra.com</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h5 className={styles.newsletterTitle}>Stay informed</h5>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="form-input"
                  aria-label="Email for newsletter"
                  required
                />
                <button type="submit" className="btn btn--primary btn--small" aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className={styles.certStrip}>
          <div className={styles.certItem}>
            <ShieldCheck size={16} />
            <span>ISO 27001</span>
          </div>
          <div className={styles.certItem}>
            <Award size={16} />
            <span>ISO 9001</span>
          </div>
          <div className={styles.certItem}>
            <ShieldCheck size={16} />
            <span>SOC 2 Type II</span>
          </div>
          <div className={styles.certItem}>
            <Award size={16} />
            <span>AWS Partner</span>
          </div>
          <div className={styles.certItem}>
            <Award size={16} />
            <span>Microsoft Partner</span>
          </div>
          <div className={styles.certItem}>
            <Award size={16} />
            <span>Google Cloud Partner</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Noventra Technologies. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <Link href={link.href} key={link.href} className={styles.legalLink}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
