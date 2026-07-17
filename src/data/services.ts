import {
  Code2,
  Building2,
  Smartphone,
  Globe,
  Link2,
  CloudUpload,
  Cloud,
  Layers,
  GitBranch,
  ShieldCheck,
  Shield,
  Wifi,
  FileCheck,
  AlertTriangle,
  Headphones,
  Monitor,
  HardDrive,
  Package,
  Network,
  Cable,
  Radio,
  Brain,
  Bot,
  MessageSquare,
  TrendingUp,
  Database,
  Users,
  LayoutDashboard,
  BarChart3,
  Server,
  Search,
  PieChart,
  Lightbulb,
  Map,
  Scale,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  filterTag: FilterTag;
  businessChallenge: string;
  approach: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
  subServices: SubService[];
};

export type SubService = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type FilterTag = "Build" | "Secure" | "Automate" | "Manage" | "Advise";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "software-development",
    name: "Software Development",
    shortDescription:
      "Bespoke applications that fit your business - not the other way around.",
    description:
      "From custom enterprise applications to mobile platforms and API integrations, we build software that drives operational efficiency and competitive advantage. Every solution is engineered for reliability, scalability, and seamless integration with your existing technology environment.",
    icon: Code2,
    filterTag: "Build",
    businessChallenge:
      "Off-the-shelf software forces organizations into rigid workflows that don't match their actual operations. The result: manual workarounds, data silos, frustrated teams, and missed opportunities for automation and efficiency.",
    approach: [
      "Discovery and requirements analysis with your operational teams",
      "Architecture design prioritizing scalability and security",
      "Agile development with iterative feedback cycles",
      "Comprehensive testing and quality assurance",
      "Deployment, training, and ongoing support",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      ".NET",
      "Java",
      "Flutter",
      "React Native",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Azure",
    ],
    faqs: [
      {
        question: "How long does a custom software project typically take?",
        answer:
          "Timelines vary based on complexity. A focused MVP can be delivered in 8-12 weeks, while enterprise-scale applications typically run 4-9 months. We provide detailed timelines after discovery.",
      },
      {
        question: "Do you support software after launch?",
        answer:
          "Yes. We offer ongoing maintenance, feature development, and support agreements. Most clients engage us as long-term development partners, not one-off vendors.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Absolutely. Systems integration is a core capability. We regularly connect new applications with legacy ERP, CRM, and third-party platforms via APIs and middleware.",
      },
    ],
    subServices: [
      {
        slug: "custom",
        name: "Custom Software Development",
        description:
          "Bespoke applications built around your exact operational workflows, replacing rigid off-the-shelf tools with systems that fit the business.",
        icon: Code2,
      },
      {
        slug: "enterprise-apps",
        name: "Enterprise Application Development",
        description:
          "Large-scale, mission-critical applications built for reliability, scalability, and integration with existing enterprise systems.",
        icon: Building2,
      },
      {
        slug: "mobile-apps",
        name: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications connecting organizations to customers, staff, and field operations.",
        icon: Smartphone,
      },
      {
        slug: "web-development",
        name: "Website Development",
        description:
          "Corporate, e-commerce, and web application development - one capability within our broader technology practice.",
        icon: Globe,
      },
      {
        slug: "integration",
        name: "API & Systems Integration",
        description:
          "Connecting disparate software, legacy systems, and third-party platforms into a single, coherent technology ecosystem.",
        icon: Link2,
      },
    ],
  },
  {
    slug: "cloud",
    name: "Cloud Computing",
    shortDescription:
      "Migrate, manage, and optimize your cloud infrastructure with confidence.",
    description:
      "We help organizations move to the cloud strategically, manage complex multi-cloud environments, and optimize for performance and cost. From migration planning to ongoing infrastructure management, we ensure your cloud environment is secure, efficient, and aligned with business objectives.",
    icon: Cloud,
    filterTag: "Build",
    businessChallenge:
      "Organizations struggle with cloud complexity - uncontrolled costs, security gaps, performance issues, and the challenge of managing infrastructure across multiple providers while maintaining compliance and reliability.",
    approach: [
      "Cloud readiness assessment and migration planning",
      "Architecture design for security, performance, and cost optimization",
      "Phased migration with minimal disruption to operations",
      "Ongoing monitoring, optimization, and governance",
      "Cost management and capacity planning",
    ],
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Docker",
      "CloudFormation",
      "Ansible",
    ],
    faqs: [
      {
        question: "How do you minimize disruption during cloud migration?",
        answer:
          "We use phased migration strategies with parallel-run periods, ensuring business continuity throughout. Critical systems are migrated during planned maintenance windows with rollback procedures in place.",
      },
      {
        question: "Which cloud provider do you recommend?",
        answer:
          "It depends on your requirements. We're platform-agnostic and certified across AWS, Azure, and GCP. We recommend based on your workload, compliance needs, and existing investments.",
      },
      {
        question: "Can you help reduce our existing cloud costs?",
        answer:
          "Yes. Cloud cost optimization is a core service. We typically identify 20-40% savings through right-sizing, reserved capacity, and architecture optimization.",
      },
    ],
    subServices: [
      {
        slug: "migration",
        name: "Cloud Migration",
        description:
          "Moving infrastructure, applications, and data from on-premise or legacy environments to secure, scalable cloud platforms with minimal disruption.",
        icon: CloudUpload,
      },
      {
        slug: "infrastructure",
        name: "Cloud Infrastructure Management",
        description:
          "Ongoing architecture, optimization, and management of cloud environments for performance, cost-efficiency, and uptime.",
        icon: Cloud,
      },
      {
        slug: "hybrid-multicloud",
        name: "Hybrid & Multi-Cloud Solutions",
        description:
          "Architecture spanning on-premise, private, and public cloud environments for organizations with complex regulatory or operational needs.",
        icon: Layers,
      },
      {
        slug: "devops",
        name: "DevOps & CI/CD",
        description:
          "Automated build, test, and deployment pipelines that let development teams ship reliably and frequently.",
        icon: GitBranch,
      },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortDescription:
      "Protect your organization with security that's engineered in, not bolted on.",
    description:
      "From risk assessments to 24/7 managed security operations, we provide comprehensive cybersecurity services that protect your organization against evolving threats. Our security-first approach means every system we build or manage has protection as a default, not an afterthought.",
    icon: ShieldCheck,
    filterTag: "Secure",
    businessChallenge:
      "Cyber threats are increasing in sophistication and frequency. Most organizations lack the internal expertise and resources to maintain a robust security posture, leaving them vulnerable to data breaches, ransomware, and compliance failures.",
    approach: [
      "Comprehensive security assessment and threat landscape analysis",
      "Risk-prioritized remediation roadmap",
      "Implementation of defense-in-depth security controls",
      "24/7 monitoring and threat detection deployment",
      "Ongoing compliance management and security posture evolution",
    ],
    technologies: [
      "Fortinet",
      "CrowdStrike",
      "Palo Alto Networks",
      "Splunk",
      "Microsoft Sentinel",
      "Cisco Security",
      "Tenable",
      "KnowBe4",
    ],
    faqs: [
      {
        question: "How quickly can you respond to a security incident?",
        answer:
          "Our managed security clients receive response within 15 minutes for critical incidents, 24/7/365. We also offer incident response retainer agreements for organizations not on managed plans.",
      },
      {
        question: "Do you help with compliance requirements?",
        answer:
          "Yes. We support compliance with ISO 27001, SOC 2, GDPR, HIPAA-equivalent frameworks, PCI DSS, and local data protection regulations. We help implement controls and prepare for audits.",
      },
      {
        question: "Can you assess our current security posture?",
        answer:
          "Absolutely. Our security audit service provides a comprehensive evaluation of your environment - network, endpoints, policies, and people - with a prioritized remediation roadmap.",
      },
    ],
    subServices: [
      {
        slug: "audits",
        name: "Security Audits & Risk Assessments",
        description:
          "Comprehensive evaluation of your technology environment to identify vulnerabilities before they're exploited.",
        icon: Search,
      },
      {
        slug: "managed-security",
        name: "Managed Security Services (SOC)",
        description:
          "24/7 monitoring, threat detection, and response delivered by a dedicated security operations capability.",
        icon: Shield,
      },
      {
        slug: "network-endpoint",
        name: "Network & Endpoint Security",
        description:
          "Protection of every device and connection point across your organization's network.",
        icon: Wifi,
      },
      {
        slug: "compliance",
        name: "Data Protection & Compliance",
        description:
          "Policies, controls, and technical safeguards to meet data protection regulations and industry compliance standards.",
        icon: FileCheck,
      },
      {
        slug: "incident-response",
        name: "Incident Response & Recovery",
        description:
          "Rapid containment, remediation, and recovery support in the event of a security incident, plus post-incident hardening.",
        icon: AlertTriangle,
      },
    ],
  },
  {
    slug: "managed-it",
    name: "Managed IT Services",
    shortDescription:
      "Reliable, SLA-backed IT support so your team can focus on the business.",
    description:
      "We take ownership of your technology operations - from day-to-day helpdesk support to proactive infrastructure monitoring and hardware lifecycle management. Our managed IT services provide the reliability and responsiveness of an in-house IT department at a fraction of the cost.",
    icon: Headphones,
    filterTag: "Manage",
    businessChallenge:
      "Organizations without dedicated IT teams face constant disruption from technology issues, security gaps from unmonitored systems, and the hidden costs of reactive break-fix approaches that never address root causes.",
    approach: [
      "IT environment audit and baseline documentation",
      "SLA definition and service level agreement",
      "Monitoring infrastructure deployment",
      "Proactive maintenance and patch management",
      "Continuous optimization and quarterly business reviews",
    ],
    technologies: [
      "ConnectWise",
      "Datto",
      "SolarWinds",
      "Microsoft 365",
      "VMware",
      "Veeam",
      "PRTG",
      "Zabbix",
    ],
    faqs: [
      {
        question: "What is your average response time?",
        answer:
          "Our SLA guarantees response within 30 minutes for critical issues, 2 hours for high-priority, and 4 hours for standard requests during business hours. 24/7 coverage is available.",
      },
      {
        question:
          "Can you manage our IT alongside our existing internal team?",
        answer:
          "Yes. We frequently operate as an extension of internal IT teams, handling specific functions like monitoring and helpdesk while your team focuses on strategic initiatives.",
      },
      {
        question: "How does pricing work for managed IT?",
        answer:
          "We offer per-user and per-device pricing models with predictable monthly costs. Pricing is scoped after an initial assessment of your environment and needs.",
      },
    ],
    subServices: [
      {
        slug: "support",
        name: "IT Support & Helpdesk",
        description:
          "Responsive first- and second-line support for day-to-day technology issues, delivered via SLA-backed channels.",
        icon: Headphones,
      },
      {
        slug: "monitoring",
        name: "Infrastructure Monitoring",
        description:
          "Proactive, round-the-clock monitoring of servers, networks, and systems to catch issues before they cause downtime.",
        icon: Monitor,
      },
      {
        slug: "hardware",
        name: "Hardware Support & Maintenance",
        description:
          "Procurement guidance, lifecycle management, and maintenance of physical technology infrastructure.",
        icon: HardDrive,
      },
      {
        slug: "asset-management",
        name: "IT Asset Management",
        description:
          "Tracking, licensing, and lifecycle management of your full technology asset inventory.",
        icon: Package,
      },
    ],
  },
  {
    slug: "networking",
    name: "Networking",
    shortDescription:
      "Robust, scalable network infrastructure engineered for reliability.",
    description:
      "We design, build, and manage network infrastructure that keeps organizations connected - from structured cabling and campus wireless to SD-WAN solutions connecting distributed locations. Every network we deliver is built for performance, security, and future scalability.",
    icon: Network,
    filterTag: "Build",
    businessChallenge:
      "Unreliable networks cause cascading failures across every department. Poor wireless coverage, outdated cabling, and connectivity issues between sites result in lost productivity, frustrated users, and security vulnerabilities.",
    approach: [
      "Site survey and network requirements analysis",
      "Architecture design with redundancy and scalability",
      "Professional installation and configuration",
      "Testing, documentation, and handover",
      "Ongoing monitoring and support",
    ],
    technologies: [
      "Cisco",
      "Juniper",
      "Aruba",
      "Ubiquiti",
      "Fortinet",
      "Meraki",
      "Ruckus",
      "CommScope",
    ],
    faqs: [
      {
        question: "Can you upgrade our existing network without downtime?",
        answer:
          "In most cases, yes. We plan migrations and upgrades in phases, using parallel infrastructure where possible to minimize disruption. Critical cutovers are scheduled during maintenance windows.",
      },
      {
        question: "Do you handle both wired and wireless infrastructure?",
        answer:
          "Yes. We deliver complete network solutions including structured cabling (Cat6a/fiber), enterprise wireless, switching, routing, and SD-WAN connectivity.",
      },
      {
        question: "Can you connect multiple office locations securely?",
        answer:
          "Absolutely. We specialize in SD-WAN and site-to-site connectivity solutions that provide secure, optimized connections between distributed locations.",
      },
    ],
    subServices: [
      {
        slug: "design",
        name: "Network Design & Implementation",
        description:
          "Planning and building robust, scalable network infrastructure for offices, campuses, and facilities.",
        icon: Network,
      },
      {
        slug: "cabling-wireless",
        name: "Structured Cabling & Wireless",
        description:
          "Physical and wireless network infrastructure installation engineered for reliability and future scalability.",
        icon: Cable,
      },
      {
        slug: "sdwan",
        name: "SD-WAN & Connectivity",
        description:
          "Modern software-defined networking for organizations with multiple sites requiring secure, optimized connectivity.",
        icon: Radio,
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "Artificial Intelligence & Automation",
    shortDescription:
      "Identify where AI creates real value, then implement it responsibly.",
    description:
      "We help organizations move beyond AI hype to practical, measurable implementation - from identifying genuine use cases to deploying production-ready AI and automation solutions. Every implementation is grounded in business value, data readiness, and responsible AI principles.",
    icon: Brain,
    filterTag: "Automate",
    businessChallenge:
      "Organizations know AI and automation could transform their operations but struggle with where to start, how to evaluate readiness, which use cases deliver real ROI, and how to implement responsibly without creating new risks.",
    approach: [
      "AI readiness assessment and use case identification",
      "Data quality evaluation and preparation",
      "Proof of concept development and validation",
      "Production deployment with monitoring and governance",
      "Ongoing model optimization and expansion",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Azure AI",
      "AWS SageMaker",
      "UiPath",
      "Power Automate",
    ],
    faqs: [
      {
        question: "Is our organization ready for AI?",
        answer:
          "Readiness depends on data quality, clear use cases, and organizational willingness. Our AI readiness assessment evaluates these factors and provides a practical roadmap, even if the answer is 'not yet - here's what to do first.'",
      },
      {
        question: "What kind of ROI can we expect from automation?",
        answer:
          "ROI varies by use case. Process automation typically delivers 30-60% time savings on targeted workflows. We quantify expected ROI before implementation and measure actual results after.",
      },
      {
        question:
          "How do you ensure AI implementations are responsible and secure?",
        answer:
          "Every AI implementation includes governance frameworks covering data privacy, bias testing, explainability, and human oversight. We build with responsible AI principles as default, not optional.",
      },
    ],
    subServices: [
      {
        slug: "ai-strategy",
        name: "AI Strategy & Implementation",
        description:
          "Helping organizations identify where AI creates real business value, then implementing it responsibly and securely.",
        icon: Brain,
      },
      {
        slug: "automation",
        name: "Intelligent Process Automation (RPA)",
        description:
          "Automating repetitive, rules-based business processes to free up human capacity and reduce error.",
        icon: Bot,
      },
      {
        slug: "ai-analytics-chatbots",
        name: "AI-Powered Analytics & Chatbots",
        description:
          "Conversational AI and intelligent analytics tools that improve customer experience and decision-making.",
        icon: MessageSquare,
      },
      {
        slug: "machine-learning",
        name: "Machine Learning Solutions",
        description:
          "Custom ML models for prediction, classification, and optimization tailored to specific business problems.",
        icon: TrendingUp,
      },
    ],
  },
  {
    slug: "enterprise-systems",
    name: "Enterprise Systems (ERP/CRM)",
    shortDescription:
      "Unify your operations with enterprise platforms that actually work for your teams.",
    description:
      "We implement, customize, and support enterprise resource planning and customer relationship management systems that unify operations, improve visibility, and drive efficiency across your organization. When standard platforms don't fit, we build custom enterprise solutions.",
    icon: Database,
    filterTag: "Build",
    businessChallenge:
      "Disconnected systems across finance, operations, sales, and service create data silos, manual processes, and poor visibility. Failed ERP/CRM implementations are common when deployments are treated as IT projects rather than business transformation initiatives.",
    approach: [
      "Business process analysis and requirements mapping",
      "Platform selection and fit-gap analysis",
      "Phased implementation with change management",
      "Data migration and integration with existing systems",
      "Training, go-live support, and ongoing optimization",
    ],
    technologies: [
      "SAP",
      "Microsoft Dynamics 365",
      "Salesforce",
      "HubSpot",
      "Oracle NetSuite",
      "Odoo",
      "Zoho",
      "Custom platforms",
    ],
    faqs: [
      {
        question: "How long does an ERP implementation take?",
        answer:
          "Typical implementations range from 3-12 months depending on scope and complexity. We use phased approaches to deliver value incrementally rather than waiting for a single 'big bang' launch.",
      },
      {
        question: "Can you integrate ERP/CRM with our existing software?",
        answer:
          "Yes. Systems integration is a core strength. We connect enterprise platforms with existing applications, databases, and third-party services via APIs and middleware.",
      },
      {
        question: "What if standard ERP/CRM platforms don't fit our needs?",
        answer:
          "We build custom enterprise platforms for organizations whose operations don't fit standard molds. These are purpose-built internal systems designed around your specific workflows.",
      },
    ],
    subServices: [
      {
        slug: "erp",
        name: "ERP Implementation & Support",
        description:
          "Deploying and supporting enterprise resource planning systems that unify finance, operations, and supply chain data.",
        icon: Database,
      },
      {
        slug: "crm",
        name: "CRM Implementation & Support",
        description:
          "Deploying and customizing customer relationship management platforms that align sales, marketing, and service teams.",
        icon: Users,
      },
      {
        slug: "custom-platforms",
        name: "Custom Enterprise Platforms",
        description:
          "Purpose-built internal platforms for organizations whose operations don't fit standard ERP/CRM molds.",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    shortDescription:
      "Turn raw data into actionable intelligence that drives decisions.",
    description:
      "We build the data infrastructure, pipelines, and analytics capabilities that transform raw operational data into real-time executive dashboards, predictive models, and strategic insights. From database design to advanced analytics, we make your data usable and valuable.",
    icon: BarChart3,
    filterTag: "Automate",
    businessChallenge:
      "Most organizations sit on vast amounts of data they can't effectively use. Poor data quality, fragmented systems, and lack of analytics capability mean decisions are made on intuition rather than evidence - and opportunities for optimization go unnoticed.",
    approach: [
      "Data audit and maturity assessment",
      "Data architecture and pipeline design",
      "Data warehouse or lake implementation",
      "Dashboard and reporting development",
      "Advanced analytics model development and deployment",
    ],
    technologies: [
      "Power BI",
      "Tableau",
      "Snowflake",
      "Databricks",
      "Apache Spark",
      "dbt",
      "Looker",
      "Python",
    ],
    faqs: [
      {
        question: "What does a data analytics engagement look like?",
        answer:
          "We typically start with a data audit to understand your current state, then design and build the infrastructure needed to make your data usable - pipelines, warehouses, and dashboards - before moving to advanced analytics.",
      },
      {
        question: "Can you work with our existing BI tools?",
        answer:
          "Yes. We work with all major BI platforms and can optimize your existing setup or recommend alternatives based on your needs and budget.",
      },
      {
        question:
          "How long before we see actionable insights from our data?",
        answer:
          "Initial dashboards with key metrics can be delivered within 4-8 weeks. More sophisticated predictive and prescriptive analytics typically follow in subsequent phases.",
      },
    ],
    subServices: [
      {
        slug: "bi",
        name: "Business Intelligence & Dashboards",
        description:
          "Turning raw operational data into real-time, actionable executive dashboards.",
        icon: PieChart,
      },
      {
        slug: "data-engineering",
        name: "Data Engineering & Warehousing",
        description:
          "Building the pipelines and infrastructure that make your organization's data usable, clean, and accessible.",
        icon: Server,
      },
      {
        slug: "database-services",
        name: "Database Design & Administration",
        description:
          "Architecture, optimization, and ongoing administration of relational and non-relational databases.",
        icon: Database,
      },
      {
        slug: "advanced-analytics",
        name: "Advanced Analytics & Reporting",
        description:
          "Statistical and predictive analytics that go beyond dashboards into forecasting and scenario modelling.",
        icon: TrendingUp,
      },
    ],
  },
  {
    slug: "consultancy",
    name: "ICT Consultancy & Digital Transformation",
    shortDescription:
      "Strategic advisory to modernize your technology, responsibly and sustainably.",
    description:
      "We provide executive-level advisory on how to sequence and prioritize technology modernization across your organization. From digital transformation strategy to governance frameworks, we help leadership teams make informed technology decisions aligned with business objectives and budget realities.",
    icon: Lightbulb,
    filterTag: "Advise",
    businessChallenge:
      "Digital transformation initiatives fail more often than they succeed - usually because organizations start with technology rather than strategy, lack a realistic roadmap, or underestimate the governance and change management required.",
    approach: [
      "Executive stakeholder interviews and current-state assessment",
      "Technology landscape mapping and gap analysis",
      "Multi-year roadmap development aligned to business strategy",
      "Governance framework design and implementation",
      "Ongoing advisory and progress review",
    ],
    technologies: [
      "TOGAF",
      "ITIL",
      "COBIT",
      "ISO 27001",
      "ISO 9001",
      "Agile frameworks",
      "Enterprise architecture tools",
    ],
    faqs: [
      {
        question:
          "How is consultancy different from your other services?",
        answer:
          "Consultancy operates at the strategic level - helping leadership teams decide what to do and when. Our other services execute the plan. Many clients engage us for both, but consultancy can also stand alone.",
      },
      {
        question: "Do you work with public sector procurement processes?",
        answer:
          "Yes. We're experienced with government and parastatal procurement frameworks and can respond to formal RFPs with capability statements and compliance documentation.",
      },
      {
        question: "What outcomes should we expect from a consultancy engagement?",
        answer:
          "Deliverables typically include a current-state assessment, a prioritized multi-year technology roadmap, a governance framework, and an investment plan - giving your board and leadership team a clear, defensible path forward.",
      },
    ],
    subServices: [
      {
        slug: "digital-transformation",
        name: "Digital Transformation Strategy",
        description:
          "Executive-level advisory on how to sequence and prioritize technology modernization across your organization.",
        icon: Lightbulb,
      },
      {
        slug: "roadmapping",
        name: "Technology Roadmapping",
        description:
          "Multi-year technology investment planning aligned to business goals and budget cycles.",
        icon: Map,
      },
      {
        slug: "governance",
        name: "IT Governance & Compliance Advisory",
        description:
          "Establishing the policies, frameworks, and accountability structures that govern responsible technology use.",
        icon: Scale,
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((s) => s.slug === slug);
}

export function getServicesByFilter(filter: FilterTag): ServiceCategory[] {
  return serviceCategories.filter((s) => s.filterTag === filter);
}
