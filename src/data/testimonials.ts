export type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  industry: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mwangi",
    title: "Chief Information Officer",
    company: "Meridian Healthcare Group",
    quote:
      "Noventra transformed our approach to patient data security. Their team didn't just implement systems — they helped us build a security culture across 12 facilities. The 24/7 SOC gives our board the confidence that our most sensitive data is protected around the clock.",
    industry: "Healthcare",
  },
  {
    id: 2,
    name: "David Chen",
    title: "Managing Director",
    company: "Atlas Freight & Logistics",
    quote:
      "We went from zero real-time visibility to tracking every vehicle and shipment in our fleet. The integration with our ERP means we've eliminated hours of manual data entry daily. Noventra understood our operations before they touched our technology.",
    industry: "Logistics",
  },
  {
    id: 3,
    name: "Amara Osei",
    title: "Director of Operations",
    company: "Catalyst Education Foundation",
    quote:
      "As a nonprofit, every technology dollar must serve our mission. Noventra designed a solution that cut our IT costs by 45% while dramatically improving our field teams' ability to collect and report data. They genuinely understood our constraints.",
    industry: "NGO",
  },
  {
    id: 4,
    name: "James Thornton",
    title: "VP of Technology",
    company: "Nexus Financial Services",
    quote:
      "When we needed to go from zero to a production-ready fintech platform in three months, Noventra delivered in eleven weeks. Two years later, they're still our technology partner, and the architecture they built has scaled to 50,000 users without a rebuild.",
    industry: "Startups",
  },
  {
    id: 5,
    name: "Dr. Fatima Al-Hassan",
    title: "ICT Director",
    company: "Ministry of Digital Services",
    quote:
      "Finding a technology partner who understands government procurement and data sovereignty requirements is rare. Noventra delivered our citizen services portal on time, within budget, and fully compliant with our national data residency requirements.",
    industry: "Government",
  },
  {
    id: 6,
    name: "Michael Russo",
    title: "Chief Operating Officer",
    company: "Precision Manufacturing Co.",
    quote:
      "Unplanned downtime was costing us thousands per hour. Noventra's predictive monitoring system has reduced our unplanned stops by 78%. The ROI was evident within the first quarter. This is a partnership that pays for itself.",
    industry: "Manufacturing",
  },
];
