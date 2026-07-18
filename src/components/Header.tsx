"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
  Cloud,
  ShieldCheck,
  Headphones,
  Network,
  Brain,
  Database,
  BarChart3,
  Lightbulb,
  Building,
  GraduationCap,
  HeartPulse,
  HandHeart,
  Hotel,
  Truck,
  Factory,
  Landmark,
  Rocket,
  Building2,
} from "lucide-react";
import styles from "./Header.module.css";

const serviceItems = [
  { name: "Software Development", slug: "software-development", icon: Code2, desc: "Custom apps, enterprise software, mobile & web" },
  { name: "Cloud Computing", slug: "cloud", icon: Cloud, desc: "Migration, infrastructure, hybrid cloud, DevOps" },
  { name: "Cybersecurity", slug: "cybersecurity", icon: ShieldCheck, desc: "Audits, managed security, compliance, incident response" },
  { name: "Managed IT Services", slug: "managed-it", icon: Headphones, desc: "Support, monitoring, hardware, asset management" },
  { name: "Networking", slug: "networking", icon: Network, desc: "Design, cabling, wireless, SD-WAN" },
  { name: "AI & Automation", slug: "ai-automation", icon: Brain, desc: "AI strategy, RPA, chatbots, machine learning" },
  { name: "Enterprise Systems", slug: "enterprise-systems", icon: Database, desc: "ERP, CRM, custom enterprise platforms" },
  { name: "Data & Analytics", slug: "data-analytics", icon: BarChart3, desc: "BI dashboards, data engineering, advanced analytics" },
  { name: "ICT Consultancy", slug: "consultancy", icon: Lightbulb, desc: "Digital transformation, roadmapping, governance" },
];

const industryItems = [
  { name: "Small & Medium Enterprises", slug: "sme", icon: Building },
  { name: "Education", slug: "education", icon: GraduationCap },
  { name: "Healthcare", slug: "healthcare", icon: HeartPulse },
  { name: "NGOs & Nonprofits", slug: "ngo", icon: HandHeart },
  { name: "Hospitality", slug: "hospitality", icon: Hotel },
  { name: "Logistics & Supply Chain", slug: "logistics", icon: Truck },
  { name: "Manufacturing", slug: "manufacturing", icon: Factory },
  { name: "Government & Public Sector", slug: "government", icon: Landmark },
  { name: "Startups", slug: "startups", icon: Rocket },
  { name: "Enterprise", slug: "enterprise", icon: Building2 },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleMenuEnter = (menu: string) => {
    clearTimeout(menuTimeout.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Noventra Technologies home">
          <img src="/logo.png" alt="Noventra Technologies" className={styles.logoImage} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/about" className={styles.navLink}>About</Link>

          {/* Services Mega Menu */}
          <div
            className={styles.navItem}
            onMouseEnter={() => handleMenuEnter("services")}
            onMouseLeave={handleMenuLeave}
          >
            <Link href="/services" className={styles.navLink}>
              Services <ChevronDown size={14} className={activeMenu === "services" ? styles.chevronOpen : ""} />
            </Link>
            {activeMenu === "services" && (
              <div className={styles.megaMenu} onMouseEnter={() => handleMenuEnter("services")} onMouseLeave={handleMenuLeave}>
                <div className={styles.megaMenuInner}>
                  <div className={styles.megaMenuGrid}>
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link href={`/services/${item.slug}`} key={item.slug} className={styles.megaMenuItem}>
                          <div className={styles.megaMenuIcon}><Icon size={20} /></div>
                          <div>
                            <div className={styles.megaMenuItemTitle}>{item.name}</div>
                            <div className={styles.megaMenuItemDesc}>{item.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className={styles.megaMenuFooter}>
                    <Link href="/services" className={styles.megaMenuAllLink}>
                      View all services <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Mega Menu */}
          <div
            className={styles.navItem}
            onMouseEnter={() => handleMenuEnter("industries")}
            onMouseLeave={handleMenuLeave}
          >
            <Link href="/industries" className={styles.navLink}>
              Industries <ChevronDown size={14} className={activeMenu === "industries" ? styles.chevronOpen : ""} />
            </Link>
            {activeMenu === "industries" && (
              <div className={styles.megaMenu} onMouseEnter={() => handleMenuEnter("industries")} onMouseLeave={handleMenuLeave}>
                <div className={styles.megaMenuInner}>
                  <div className={styles.megaMenuGridCompact}>
                    {industryItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link href={`/industries/${item.slug}`} key={item.slug} className={styles.megaMenuItemCompact}>
                          <Icon size={16} />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className={styles.megaMenuFooter}>
                    <Link href="/industries" className={styles.megaMenuAllLink}>
                      View all industries <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/case-studies" className={styles.navLink}>Case Studies</Link>
          <Link href="/insights" className={styles.navLink}>Insights</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className={styles.actions}>
          <Link href="/contact/consultation" className={`btn btn--primary ${styles.ctaButton}`}>
            Request a Consultation
          </Link>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <div className={styles.mobileSubLinks}>
              {serviceItems.map((item) => (
                <Link href={`/services/${item.slug}`} key={item.slug} className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/industries" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <div className={styles.mobileSubLinks}>
              {industryItems.map((item) => (
                <Link href={`/industries/${item.slug}`} key={item.slug} className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/case-studies" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="/insights" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Insights</Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="/contact/consultation" className="btn btn--primary btn--large" style={{ width: "100%", marginTop: "var(--space-4)" }} onClick={() => setMobileMenuOpen(false)}>
              Request a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
