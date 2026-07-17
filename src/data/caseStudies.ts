export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  industrySlug: string;
  services: string[];
  servicesSlugs: string[];
  challenge: string;
  solution: string;
  results: string;
  stats: { label: string; value: string }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialTitle?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-healthcare-security",
    title: "Securing patient data across 12 healthcare facilities",
    client: "Meridian Healthcare Group",
    industry: "Healthcare",
    industrySlug: "healthcare",
    services: ["Cybersecurity", "Managed IT Services", "Networking"],
    servicesSlugs: ["cybersecurity", "managed-it", "networking"],
    challenge:
      "Meridian Healthcare Group operates 12 facilities serving over 200,000 patients annually. With each facility running different security tools and no centralized monitoring, the organization faced inconsistent security practices, slow incident response, and growing compliance concerns as health data regulations tightened.",
    solution:
      "Noventra implemented a unified Security Operations Center (SOC) with 24/7 monitoring across all facilities, upgraded network infrastructure to support segmented clinical and administrative networks, deployed endpoint protection on 2,400+ devices, and established a compliance management framework aligned with healthcare data regulations.",
    results:
      "Within six months, Meridian achieved its highest-ever compliance audit score, reduced mean time to incident response from hours to under 15 minutes, and established a security posture that satisfied both regulatory requirements and board-level governance expectations.",
    stats: [
      { label: "Compliance audit improvement", value: "40%" },
      { label: "Incident response time", value: "Under 15 min" },
      { label: "Network uptime", value: "99.99%" },
      { label: "Devices secured", value: "2,400+" },
    ],
    testimonialQuote:
      "Noventra transformed our approach to patient data security. The 24/7 SOC gives our board the confidence that our most sensitive data is protected around the clock.",
    testimonialAuthor: "Sarah Mwangi",
    testimonialTitle: "CIO, Meridian Healthcare Group",
  },
  {
    slug: "atlas-fleet-management",
    title: "Real-time fleet management for national freight company",
    client: "Atlas Freight & Logistics",
    industry: "Logistics & Supply Chain",
    industrySlug: "logistics",
    services: [
      "Software Development",
      "Data & Analytics",
      "Enterprise Systems",
    ],
    servicesSlugs: ["software-development", "data-analytics", "enterprise-systems"],
    challenge:
      "Atlas Freight operated a fleet of 200+ vehicles with no real-time visibility, manual dispatch processes, and an inability to provide customers with accurate delivery estimates. The disconnect between operations, finance, and customer service meant data was siloed and decisions were reactive.",
    solution:
      "Noventra deployed an IoT-based fleet tracking system integrated with a custom dispatch optimization platform and customer-facing shipment portal. The solution was connected to Atlas's existing ERP system, creating a unified view across operations, finance, and customer service.",
    results:
      "Atlas achieved 95% ETA accuracy for customer deliveries, improved fleet utilization by 22%, and reduced fuel costs by 18% through optimized routing - translating to significant bottom-line improvement within the first year.",
    stats: [
      { label: "Fleet utilization improvement", value: "22%" },
      { label: "Customer ETA accuracy", value: "95%" },
      { label: "Fuel cost reduction", value: "18%" },
      { label: "Manual dispatch eliminated", value: "100%" },
    ],
    testimonialQuote:
      "We went from zero real-time visibility to tracking every vehicle and shipment in our fleet. Noventra understood our operations before they touched our technology.",
    testimonialAuthor: "David Chen",
    testimonialTitle: "Managing Director, Atlas Freight & Logistics",
  },
  {
    slug: "catalyst-ngo-platform",
    title: "Secure field data platform for international NGO",
    client: "Catalyst Education Foundation",
    industry: "NGOs & Nonprofits",
    industrySlug: "ngo",
    services: [
      "Cloud Computing",
      "Software Development",
      "Managed IT Services",
    ],
    servicesSlugs: ["cloud", "software-development", "managed-it"],
    challenge:
      "Catalyst operates education programs across 8 countries with field teams in areas with limited connectivity. Data collection was paper-based, reporting to donors was manual and error-prone, and IT costs were consuming a disproportionate share of program budgets.",
    solution:
      "Noventra designed and deployed an offline-capable mobile data collection platform with encrypted synchronization, a centralized reporting dashboard for donor compliance, and cost-optimized cloud infrastructure leveraging nonprofit technology programs.",
    results:
      "Catalyst reduced field data collection time by 70%, cut annual IT costs by 45%, and connected all 8 country operations to a single reporting platform - enabling real-time program monitoring and dramatically faster donor reporting.",
    stats: [
      { label: "Data collection time reduced", value: "70%" },
      { label: "Annual IT cost reduction", value: "45%" },
      { label: "Countries connected", value: "8" },
      { label: "Donor report turnaround", value: "5 days to 1 day" },
    ],
  },
  {
    slug: "nexus-fintech-mvp",
    title: "Fintech MVP launch and scale to 50,000 users",
    client: "Nexus Financial Services",
    industry: "Startups",
    industrySlug: "startups",
    services: [
      "Software Development",
      "Cloud Computing",
      "Cybersecurity",
    ],
    servicesSlugs: ["software-development", "cloud", "cybersecurity"],
    challenge:
      "Nexus needed to launch a regulatory-compliant financial services platform within 12 weeks to capture a market window, with architecture capable of scaling through post-Series A growth. The founding team had deep domain expertise but limited infrastructure and security capability.",
    solution:
      "Noventra delivered a production-ready MVP using cloud-native architecture on AWS, implemented SOC 2-ready security controls from day one, and provided ongoing DevOps and infrastructure support as the platform scaled through fundraising and user growth.",
    results:
      "The MVP launched in 11 weeks - ahead of schedule. Within 18 months, the platform scaled to 50,000 users without requiring an architecture rebuild, and the security posture helped Nexus close its Series A with confidence.",
    stats: [
      { label: "MVP delivered in", value: "11 weeks" },
      { label: "Users scaled to", value: "50,000+" },
      { label: "Infrastructure cost per user", value: "Under $0.05" },
      { label: "Architecture rebuilds needed", value: "Zero" },
    ],
    testimonialQuote:
      "When we needed to go from zero to production in three months, Noventra delivered in eleven weeks. Two years later, they're still our technology partner.",
    testimonialAuthor: "James Thornton",
    testimonialTitle: "VP of Technology, Nexus Financial Services",
  },
  {
    slug: "precision-manufacturing-monitoring",
    title: "Predictive maintenance reduces downtime by 78%",
    client: "Precision Manufacturing Co.",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    services: [
      "AI & Automation",
      "Data & Analytics",
      "Enterprise Systems",
    ],
    servicesSlugs: ["ai-automation", "data-analytics", "enterprise-systems"],
    challenge:
      "Precision Manufacturing was losing an average of 40 hours per month to unplanned equipment failures. With no visibility into equipment health until breakdowns occurred, maintenance was entirely reactive, costly, and disruptive to production schedules.",
    solution:
      "Noventra deployed IoT sensors across critical production equipment, built a predictive maintenance platform using machine learning models trained on historical failure data, and integrated the system with Precision's ERP for automated parts ordering and maintenance scheduling.",
    results:
      "Unplanned downtime dropped by 78% within the first year. Maintenance costs decreased by 32% as reactive repairs were replaced by planned maintenance, and overall production output increased by 15%.",
    stats: [
      { label: "Unplanned downtime reduction", value: "78%" },
      { label: "Maintenance cost savings", value: "32%" },
      { label: "Production output increase", value: "15%" },
      { label: "ROI achieved within", value: "First quarter" },
    ],
    testimonialQuote:
      "Noventra's predictive monitoring system has reduced our unplanned stops by 78%. The ROI was evident within the first quarter.",
    testimonialAuthor: "Michael Russo",
    testimonialTitle: "COO, Precision Manufacturing Co.",
  },
  {
    slug: "digital-services-portal",
    title: "Government department digitizes citizen services",
    client: "Ministry of Digital Services",
    industry: "Government & Public Sector",
    industrySlug: "government",
    services: [
      "Software Development",
      "Cloud Computing",
      "ICT Consultancy",
    ],
    servicesSlugs: ["software-development", "cloud", "consultancy"],
    challenge:
      "The Ministry's citizen application process was entirely paper-based, with a 30-day average turnaround, frequent data entry errors, and no way for citizens to check application status online. Modernization was mandated but constrained by data sovereignty requirements and procurement processes.",
    solution:
      "Noventra designed and deployed a secure online citizen services portal with automated workflow processing, integration with existing government databases, and hosting in a sovereign cloud environment meeting all national data residency requirements.",
    results:
      "Application processing time dropped from 30 days to 3 days. Data entry errors were reduced by 95%. Citizen satisfaction scores reached 4.6 out of 5 within the first six months of the platform's launch.",
    stats: [
      { label: "Processing time", value: "30 days to 3 days" },
      { label: "Data entry errors reduced", value: "95%" },
      { label: "Citizen satisfaction", value: "4.6/5" },
      { label: "Applications processed online", value: "85%" },
    ],
    testimonialQuote:
      "Noventra delivered our citizen services portal on time, within budget, and fully compliant with our national data residency requirements.",
    testimonialAuthor: "Dr. Fatima Al-Hassan",
    testimonialTitle: "ICT Director, Ministry of Digital Services",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByIndustry(industrySlug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.industrySlug === industrySlug);
}

export function getCaseStudiesByService(serviceSlug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.servicesSlugs.includes(serviceSlug));
}
