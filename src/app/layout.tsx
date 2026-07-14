import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: "Noventra Technologies — Full-Service Technology Partner",
    template: "%s | Noventra Technologies",
  },
  description:
    "Noventra Technologies is the technology partner enterprises, institutions, and ambitious organizations turn to for software development, cloud computing, cybersecurity, managed IT, AI, data analytics, and digital transformation.",
  keywords: [
    "technology partner",
    "enterprise software",
    "cybersecurity",
    "cloud computing",
    "managed IT services",
    "AI automation",
    "digital transformation",
    "data analytics",
    "IT consultancy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Noventra Technologies",
    title: "Noventra Technologies — Full-Service Technology Partner",
    description:
      "Plan, build, secure, and scale your technology with a long-term strategic partner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Noventra Technologies",
              url: "https://noventra.com",
              description:
                "Full-service technology solutions provider — enterprise software, managed IT, cybersecurity, cloud, AI, networking, data analytics, and digital transformation consultancy.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-234-567-890",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
