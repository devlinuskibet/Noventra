import {
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
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  challenges: { title: string; description: string }[];
  relevantServices: string[];
  complianceNotes: string[];
  caseStudyTeaser: {
    title: string;
    challenge: string;
    outcome: string;
    stats: { label: string; value: string }[];
  };
};

export const industries: Industry[] = [
  {
    slug: "sme",
    name: "Small & Medium Enterprises",
    headline:
      "Enterprise-grade technology, sized for growing businesses",
    description:
      "Small and medium enterprises need reliable, affordable technology that grows with them - without the overhead of a full internal IT department. We provide the expertise, security, and systems that let SMEs compete with larger organizations while keeping costs predictable.",
    icon: Building,
    challenges: [
      {
        title: "No dedicated IT team",
        description:
          "Technology decisions fall on people whose expertise lies elsewhere, leading to ad hoc systems and reactive fixes.",
      },
      {
        title: "Security vulnerability",
        description:
          "SMEs are increasingly targeted by cyber attacks because attackers know smaller organizations often lack robust defenses.",
      },
      {
        title: "Unpredictable IT costs",
        description:
          "Break-fix approaches result in unpredictable expenses and emergency spending that disrupts budgets.",
      },
      {
        title: "Systems that don't scale",
        description:
          "Technology chosen for a 10-person team breaks down at 50. Growth outpaces infrastructure.",
      },
    ],
    relevantServices: [
      "managed-it",
      "cybersecurity",
      "cloud",
      "software-development",
      "networking",
    ],
    complianceNotes: [
      "Data protection regulation compliance",
      "Industry-specific security standards",
      "Business continuity planning",
    ],
    caseStudyTeaser: {
      title: "Regional logistics firm modernizes IT infrastructure",
      challenge:
        "A 120-person logistics company was running critical operations on aging servers with no backup strategy, experiencing weekly downtime and security incidents.",
      outcome:
        "Migrated to managed cloud infrastructure with 24/7 monitoring, implemented cybersecurity framework, and deployed a custom fleet management integration.",
      stats: [
        { label: "Downtime reduction", value: "94%" },
        { label: "Monthly IT cost savings", value: "35%" },
        { label: "Security incidents", value: "Zero in 18 months" },
      ],
    },
  },
  {
    slug: "education",
    name: "Education",
    headline:
      "Technology that educators and students can depend on, every day",
    description:
      "Educational institutions face unique technology challenges - from campus-wide networking and e-learning platforms to student data privacy and budget cycle constraints. We provide the infrastructure, security, and systems that modern education demands.",
    icon: GraduationCap,
    challenges: [
      {
        title: "Aging campus infrastructure",
        description:
          "Legacy networks and systems that can't support modern e-learning, BYOD policies, and digital administration.",
      },
      {
        title: "Student data privacy",
        description:
          "Protecting sensitive student records while enabling digital learning platforms and administrative systems.",
      },
      {
        title: "Budget cycle constraints",
        description:
          "Technology investments must align with annual or multi-year budget cycles and procurement processes.",
      },
      {
        title: "E-learning demands",
        description:
          "The shift to hybrid and online learning requires robust, scalable infrastructure that many institutions lack.",
      },
    ],
    relevantServices: [
      "networking",
      "cloud",
      "managed-it",
      "cybersecurity",
      "software-development",
    ],
    complianceNotes: [
      "Student data protection regulations",
      "FERPA-equivalent compliance",
      "Accessibility standards for digital learning",
      "Public procurement compliance",
    ],
    caseStudyTeaser: {
      title: "University modernizes campus network for 5,000 students",
      challenge:
        "A mid-size university was struggling with unreliable campus WiFi, outdated lab infrastructure, and no centralized student data management system.",
      outcome:
        "Deployed enterprise-grade campus-wide wireless, modernized lab infrastructure with cloud desktops, and implemented a secure student information system.",
      stats: [
        { label: "Campus WiFi coverage", value: "100%" },
        { label: "System uptime achieved", value: "99.9%" },
        { label: "IT support tickets reduced", value: "60%" },
      ],
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    headline:
      "Technology healthcare organizations can trust with lives and data",
    description:
      "In healthcare, technology isn't just operational - it's life-critical. We provide the infrastructure, security, and systems that healthcare organizations need to deliver care reliably while protecting the most sensitive data in any industry.",
    icon: HeartPulse,
    challenges: [
      {
        title: "Patient data security",
        description:
          "Healthcare data is the most targeted and regulated category of personal information. Breaches carry severe consequences.",
      },
      {
        title: "System uptime is non-negotiable",
        description:
          "When systems go down in healthcare, patient care is directly impacted. Uptime isn't a metric - it's a safety requirement.",
      },
      {
        title: "Complex system integration",
        description:
          "EMR/EHR systems, medical devices, billing, and administrative platforms must work together seamlessly.",
      },
      {
        title: "Regulatory compliance pressure",
        description:
          "Constantly evolving health data regulations require ongoing compliance management and audit readiness.",
      },
    ],
    relevantServices: [
      "cybersecurity",
      "managed-it",
      "cloud",
      "enterprise-systems",
      "data-analytics",
      "networking",
    ],
    complianceNotes: [
      "HIPAA-equivalent data protection",
      "Health data sovereignty requirements",
      "Medical device integration standards",
      "Business continuity for clinical systems",
      "Audit trail and access control requirements",
    ],
    caseStudyTeaser: {
      title: "Private hospital group secures patient data across 12 facilities",
      challenge:
        "A growing hospital group had inconsistent security practices across facilities, with no centralized monitoring and aging network infrastructure.",
      outcome:
        "Implemented unified security operations center, upgraded network infrastructure across all sites, and deployed encrypted data management meeting compliance requirements.",
      stats: [
        { label: "Compliance audit score improvement", value: "40%" },
        { label: "Security incident response time", value: "Under 15 min" },
        { label: "Network uptime across facilities", value: "99.99%" },
      ],
    },
  },
  {
    slug: "ngo",
    name: "NGOs & Nonprofits",
    headline:
      "Stretch every dollar further with technology that serves your mission",
    description:
      "Nonprofits and NGOs need technology that maximizes impact per dollar - protecting donor data, enabling remote operations, and streamlining reporting, all within tight budget constraints. We provide cost-effective solutions that serve the mission, not the other way around.",
    icon: HandHeart,
    challenges: [
      {
        title: "Limited IT budgets",
        description:
          "Every dollar spent on technology is a dollar not spent on programs. Technology must demonstrably serve the mission.",
      },
      {
        title: "Donor data protection",
        description:
          "Donor trust depends on responsible data handling. A breach can damage reputation and funding.",
      },
      {
        title: "Remote and field operations",
        description:
          "Teams working in remote or resource-constrained environments need reliable access to systems and communication tools.",
      },
      {
        title: "Grant reporting complexity",
        description:
          "Multiple funding sources require different reporting formats, timelines, and compliance standards.",
      },
    ],
    relevantServices: [
      "cloud",
      "managed-it",
      "cybersecurity",
      "data-analytics",
      "software-development",
    ],
    complianceNotes: [
      "Donor data protection",
      "Grant compliance reporting",
      "International data transfer regulations",
      "Nonprofit licensing and discounted technology programs",
    ],
    caseStudyTeaser: {
      title:
        "International NGO deploys secure field communication platform",
      challenge:
        "An NGO with operations across 8 countries needed secure, reliable communication and data collection tools for field teams with limited connectivity.",
      outcome:
        "Deployed an offline-capable mobile data collection platform with encrypted sync, centralized reporting dashboard, and cost-optimized cloud infrastructure.",
      stats: [
        { label: "Field data collection time reduced", value: "70%" },
        { label: "Annual IT cost reduction", value: "45%" },
        { label: "Countries connected to central platform", value: "8" },
      ],
    },
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    headline:
      "Seamless technology behind every exceptional guest experience",
    description:
      "In hospitality, technology must be invisible to guests and reliable for staff. From guest WiFi and POS systems to booking platform integration and data security, we build the technology infrastructure that lets hospitality businesses focus on what matters: the guest experience.",
    icon: Hotel,
    challenges: [
      {
        title: "Guest-facing connectivity",
        description:
          "Guests expect fast, reliable WiFi as a baseline. Poor connectivity directly impacts reviews and repeat business.",
      },
      {
        title: "POS and booking system integration",
        description:
          "Multiple systems - POS, PMS, booking engines, loyalty programs - need to work together seamlessly.",
      },
      {
        title: "Guest data security",
        description:
          "Credit card data, personal information, and loyalty data require robust security and PCI compliance.",
      },
      {
        title: "Multi-property consistency",
        description:
          "Hotel groups and restaurant chains need consistent technology standards across locations.",
      },
    ],
    relevantServices: [
      "networking",
      "managed-it",
      "cybersecurity",
      "software-development",
      "cloud",
    ],
    complianceNotes: [
      "PCI DSS compliance for payment data",
      "Guest data privacy regulations",
      "Accessibility requirements for digital services",
    ],
    caseStudyTeaser: {
      title: "Boutique hotel group unifies technology across 6 properties",
      challenge:
        "A growing hotel group had different technology setups at each property - different POS systems, inconsistent WiFi, and no centralized guest data management.",
      outcome:
        "Standardized network infrastructure, deployed unified POS and PMS platforms, and implemented centralized guest WiFi with analytics across all properties.",
      stats: [
        { label: "Guest WiFi satisfaction score", value: "4.8/5" },
        { label: "System downtime per property", value: "Under 2 hrs/year" },
        { label: "Operational efficiency gain", value: "28%" },
      ],
    },
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    headline:
      "Real-time visibility and resilience across your entire supply chain",
    description:
      "Logistics and supply chain operations depend on real-time data, system integration, and infrastructure resilience. We provide the technology that connects fleet, warehouse, and office operations into a single, visible, optimized ecosystem.",
    icon: Truck,
    challenges: [
      {
        title: "Fleet and shipment visibility",
        description:
          "Real-time tracking across vehicles, warehouses, and last-mile delivery is essential but technically complex.",
      },
      {
        title: "System fragmentation",
        description:
          "TMS, WMS, ERP, and customer-facing systems often operate in silos, creating data gaps and manual processes.",
      },
      {
        title: "Warehouse automation",
        description:
          "Manual warehouse operations are increasingly uncompetitive. Automation requires integrated technology infrastructure.",
      },
      {
        title: "Resilience under pressure",
        description:
          "Supply chain disruptions are inevitable. Technology must enable rapid response and alternative routing.",
      },
    ],
    relevantServices: [
      "software-development",
      "data-analytics",
      "ai-automation",
      "enterprise-systems",
      "networking",
      "cloud",
    ],
    complianceNotes: [
      "Chain of custody documentation",
      "Cross-border data regulations",
      "Fleet safety and compliance reporting",
      "Customs and trade compliance systems",
    ],
    caseStudyTeaser: {
      title: "National freight company deploys real-time fleet management",
      challenge:
        "A freight company with 200+ vehicles had no real-time fleet visibility, relied on manual dispatch, and couldn't provide customers with accurate delivery ETAs.",
      outcome:
        "Deployed IoT-based fleet tracking, automated dispatch optimization, and a customer-facing shipment tracking portal integrated with ERP.",
      stats: [
        { label: "Fleet utilization improvement", value: "22%" },
        { label: "Customer ETA accuracy", value: "95%" },
        { label: "Fuel cost reduction", value: "18%" },
      ],
    },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    headline:
      "Smarter production through connected, automated, and secure systems",
    description:
      "Modern manufacturing requires the convergence of operational technology (OT) and information technology (IT). We help manufacturers connect production systems, implement automation, secure industrial networks, and leverage data for predictive maintenance and optimization.",
    icon: Factory,
    challenges: [
      {
        title: "Legacy system modernization",
        description:
          "Production systems often run on decades-old technology that's difficult to integrate, maintain, or secure.",
      },
      {
        title: "OT/IT convergence",
        description:
          "Connecting production floor systems with business IT creates both opportunity and security risk that requires specialized expertise.",
      },
      {
        title: "Downtime costs",
        description:
          "Unplanned production downtime can cost thousands per minute. Predictive maintenance and monitoring are essential.",
      },
      {
        title: "Automation opportunity",
        description:
          "Competitors are automating. Organizations that don't adopt automation risk falling behind on cost and quality.",
      },
    ],
    relevantServices: [
      "ai-automation",
      "enterprise-systems",
      "data-analytics",
      "cybersecurity",
      "networking",
      "managed-it",
    ],
    complianceNotes: [
      "Industrial safety standards",
      "OT network security frameworks (IEC 62443)",
      "Quality management system integration (ISO 9001)",
      "Environmental compliance monitoring",
    ],
    caseStudyTeaser: {
      title:
        "Manufacturing plant reduces unplanned downtime with predictive monitoring",
      challenge:
        "A mid-size manufacturing plant was losing an average of 40 hours per month to unplanned equipment failures, with no visibility into equipment health until breakdowns occurred.",
      outcome:
        "Deployed IoT sensors and predictive maintenance platform, integrated with ERP for automated parts ordering, and implemented OT network security.",
      stats: [
        { label: "Unplanned downtime reduction", value: "78%" },
        { label: "Maintenance cost savings", value: "32%" },
        { label: "Production output increase", value: "15%" },
      ],
    },
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    headline:
      "Trusted technology partnerships for institutions that serve the public",
    description:
      "Government and public sector organizations require technology partners who understand procurement processes, data sovereignty requirements, and the accountability that comes with managing public resources. We provide ICT consultancy, secure infrastructure, and digital transformation services designed for public institutions.",
    icon: Landmark,
    challenges: [
      {
        title: "Procurement compliance",
        description:
          "Public procurement processes require structured proposals, compliance documentation, and formal evaluation criteria.",
      },
      {
        title: "Data sovereignty",
        description:
          "Government data often has strict residency requirements and security classifications that constrain technology choices.",
      },
      {
        title: "Legacy modernization",
        description:
          "Public sector systems are often decades old, with modernization constrained by budget cycles and institutional complexity.",
      },
      {
        title: "Public accountability",
        description:
          "Technology investments must be defensible, transparent, and demonstrably serving the public interest.",
      },
    ],
    relevantServices: [
      "consultancy",
      "cybersecurity",
      "cloud",
      "software-development",
      "enterprise-systems",
      "data-analytics",
    ],
    complianceNotes: [
      "Government data classification and sovereignty",
      "Public procurement frameworks",
      "National cybersecurity standards",
      "Accessibility requirements for public services",
      "Audit and transparency requirements",
    ],
    caseStudyTeaser: {
      title: "Government department digitizes citizen services platform",
      challenge:
        "A government department was processing citizen applications through a paper-based system with 30-day average turnaround, no online access, and frequent data entry errors.",
      outcome:
        "Designed and deployed a secure online citizen services portal with automated workflow, integrated with existing databases, and hosted in a sovereign cloud environment.",
      stats: [
        { label: "Application processing time", value: "30 days to 3 days" },
        { label: "Data entry errors eliminated", value: "95%" },
        { label: "Citizen satisfaction score", value: "4.6/5" },
      ],
    },
  },
  {
    slug: "startups",
    name: "Startups",
    headline:
      "Build fast, scale smart, and secure your technology from day one",
    description:
      "Startups need to move fast without building technical debt that slows them down later. We help founders and CTOs build scalable, secure technology from the start - from MVP development to cloud-native architecture to fundraising-grade security posture.",
    icon: Rocket,
    challenges: [
      {
        title: "Speed to market",
        description:
          "Every week of delay is lost market opportunity and burned runway. Technology must enable speed, not constrain it.",
      },
      {
        title: "Scalable architecture",
        description:
          "Systems built for 100 users need to handle 100,000 without a rebuild. Architecture decisions made early have long-term consequences.",
      },
      {
        title: "Cost control",
        description:
          "Runway is finite. Technology spending must be lean and predictable without sacrificing quality or security.",
      },
      {
        title: "Investor-grade security",
        description:
          "Increasingly, investors and enterprise customers require evidence of security maturity before engaging.",
      },
    ],
    relevantServices: [
      "software-development",
      "cloud",
      "cybersecurity",
      "ai-automation",
      "consultancy",
    ],
    complianceNotes: [
      "SOC 2 readiness for enterprise sales",
      "Data protection regulation compliance",
      "Investor due diligence documentation",
      "Scalability architecture reviews",
    ],
    caseStudyTeaser: {
      title: "Fintech startup launches MVP and scales to 50,000 users",
      challenge:
        "A fintech startup needed to launch a compliant financial services MVP within 12 weeks, with architecture that could scale for post-funding growth.",
      outcome:
        "Delivered production MVP on schedule using cloud-native architecture, implemented SOC 2-ready security controls, and provided ongoing DevOps support through Series A growth.",
      stats: [
        { label: "MVP delivered in", value: "11 weeks" },
        { label: "Scaled to users", value: "50,000+" },
        { label: "Infrastructure cost per user", value: "Under $0.05" },
      ],
    },
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    headline:
      "Strategic technology partnerships for organizations at scale",
    description:
      "Large enterprises need technology partners who operate at their level - capable of strategic advisory, complex multi-system integration, board-level security compliance, and long-term relationship management. We provide the depth, governance, and continuity that enterprise-scale engagements demand.",
    icon: Building2,
    challenges: [
      {
        title: "Vendor consolidation",
        description:
          "Managing dozens of technology vendors creates overhead, inconsistency, and accountability gaps.",
      },
      {
        title: "Digital transformation mandates",
        description:
          "Board-level directives to modernize require strategic planning, not just technical execution.",
      },
      {
        title: "Security and compliance pressure",
        description:
          "Enterprise-scale data, regulatory scrutiny, and reputational risk demand comprehensive security governance.",
      },
      {
        title: "Legacy modernization at scale",
        description:
          "Replacing or modernizing systems that thousands of people depend on requires careful planning and risk management.",
      },
    ],
    relevantServices: [
      "consultancy",
      "cybersecurity",
      "cloud",
      "enterprise-systems",
      "data-analytics",
      "ai-automation",
      "software-development",
    ],
    complianceNotes: [
      "Enterprise governance frameworks (COBIT, ITIL)",
      "Multi-framework compliance (ISO 27001, SOC 2, GDPR)",
      "Board-level risk reporting",
      "Vendor management and SLA governance",
      "Enterprise architecture standards (TOGAF)",
    ],
    caseStudyTeaser: {
      title:
        "Multinational consolidates IT under unified managed services agreement",
      challenge:
        "A multinational corporation with operations in 5 countries was managing 23 different IT service vendors with no consistent SLAs, security standards, or reporting.",
      outcome:
        "Consolidated to a single managed services partnership with unified monitoring, standardized security practices, and executive reporting dashboards across all locations.",
      stats: [
        { label: "Vendors consolidated from 23 to", value: "1 partner" },
        { label: "Annual IT operations cost savings", value: "28%" },
        { label: "Mean time to resolution improvement", value: "65%" },
      ],
    },
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
