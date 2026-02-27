import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.careerfocusinc.com"),
  title: {
    default: "Career Focus Inc. | Discover, Develop, Succeed",
    template: "%s | Career Focus Inc.",
  },
  description:
    "Career Focus Inc. is a 501(c)(3) nonprofit providing employment services and career development to youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce across Central Florida.",
  keywords: [
    "career development",
    "employment services",
    "nonprofit",
    "disability employment",
    "youth services",
    "supported employment",
    "Tampa",
    "Wesley Chapel",
    "Dade City",
    "Central Florida",
    "vocational rehabilitation",
    "job training",
  ],
  authors: [{ name: "Career Focus Inc." }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Career Focus Inc. | Discover, Develop, Succeed",
    description:
      "Empowering individuals to achieve meaningful employment. 13+ years serving Central Florida with 11 career development programs.",
    url: "https://www.careerfocusinc.com",
    siteName: "Career Focus Inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Focus Inc. | Discover, Develop, Succeed",
    description:
      "Empowering individuals to achieve meaningful employment across Central Florida.",
  },
  robots: {
    index: process.env.VERCEL_ENV === "production",
    follow: process.env.VERCEL_ENV === "production",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Career Focus Inc.",
  url: "https://www.careerfocusinc.com",
  logo: "https://www.careerfocusinc.com/icon.png",
  description:
    "501(c)(3) nonprofit providing employment services and career development to youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce.",
  foundingDate: "2013",
  telephone: "+1-813-435-8829",
  email: "info@careerfocusinc.com",
  sameAs: [
    "https://www.facebook.com/careerfocusinc",
    "https://www.instagram.com/careerfocusinc/",
    "https://www.linkedin.com/company/careerfocusinc",
  ],
  address: [
    {
      "@type": "PostalAddress",
      name: "Tampa (HQ)",
      streetAddress: "550 N. Reo St, Suite 300",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33609",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      name: "Wesley Chapel",
      streetAddress: "6013 Wesley Grove Blvd, Suite 202",
      addressLocality: "Wesley Chapel",
      addressRegion: "FL",
      postalCode: "33544",
      addressCountry: "US",
    },
  ],
  nonprofitStatus: "Nonprofit501c3",
  taxID: "80-0893641",
  areaServed: {
    "@type": "Place",
    name: "Central Florida",
  },
  serviceType: [
    "Supported Employment",
    "On the Job Training",
    "Vocational Evaluations",
    "Work Incentive Counseling",
    "Youth Career Development",
    "Career Camp",
    "Direct Placement",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-neutral-900 bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-brand-blue-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-md cursor-pointer"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
