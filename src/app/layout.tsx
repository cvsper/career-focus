import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";
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
  metadataBase: new URL("https://careerfocusinc.org"),
  title: {
    default:
      "Career Focus Inc. | Employment Services for Youth & Adults in Florida",
    template: "%s | Career Focus Inc.",
  },
  description:
    "Career Focus Inc. is a 501(c)(3) nonprofit providing employment services, job training, and career development for youth in transition, adults with disabilities, and veterans across Florida.",
  keywords: [
    "employment services florida",
    "disability employment support",
    "youth career programs florida",
    "job training nonprofit",
    "vocational rehabilitation florida",
    "career development tampa",
    "supported employment",
    "career camp florida",
    "on the job training",
    "benefits counseling",
    "Wesley Chapel",
    "Tampa",
    "Central Florida",
  ],
  authors: [{ name: "Career Focus Inc." }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careerfocusinc.org",
    siteName: "Career Focus Inc.",
    title:
      "Career Focus Inc. | Employment Services for Youth & Adults in Florida",
    description:
      "Empowering individuals from diverse backgrounds to achieve their career aspirations. Serving Wesley Chapel, Tampa, and Central Florida since 2013.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Career Focus Inc. — Discover, Develop, Succeed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Focus Inc. | Employment Services in Florida",
    description:
      "Nonprofit providing job training, supported employment, and career development for youth and adults across Florida.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "@id": "https://careerfocusinc.org/#organization",
  name: "Career Focus Inc.",
  alternateName: "Career Focus",
  url: "https://careerfocusinc.org",
  logo: "https://careerfocusinc.org/icon.png",
  description:
    "501(c)(3) nonprofit providing employment services and career development for youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce across Florida.",
  foundingDate: "2013",
  nonprofitStatus: "501(c)(3)",
  taxID: "80-0893641",
  slogan: "Discover, Develop, Succeed.",
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
  areaServed: {
    "@type": "State",
    name: "Florida",
    sameAs: "https://en.wikipedia.org/wiki/Florida",
  },
  founder: {
    "@type": "Person",
    name: "Cassandra Garvey",
    jobTitle: "CEO / Founder",
  },
  employee: [
    {
      "@type": "Person",
      name: "Cassandra Garvey",
      jobTitle: "President, CEO & Founder",
    },
    {
      "@type": "Person",
      name: "Taveesha Guyton",
      jobTitle: "Vice President",
    },
    {
      "@type": "Person",
      name: "Camille Felicia",
      jobTitle: "Treasurer",
    },
  ],
  knowsAbout: [
    "Supported Employment",
    "Vocational Rehabilitation",
    "On-the-Job Training",
    "Career Development",
    "Disability Employment Services",
    "Youth Career Programs",
    "Benefits Counseling",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
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
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
