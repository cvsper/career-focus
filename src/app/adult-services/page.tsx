import type { Metadata } from "next"
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  ClipboardCheck,
  HeartHandshake,
  CheckCircle,
  Search,
} from "lucide-react"
import { Hero } from "@/components/hero"
import { CtaSection } from "@/components/cta-section"
import type { LucideIcon } from "lucide-react"

interface ServiceSection {
  icon: LucideIcon
  title: string
  description: string
  benefits: string[]
}

const services: ServiceSection[] = [
  {
    icon: Briefcase,
    title: "Supported Employment",
    description:
      "Comprehensive support for individuals seeking competitive integrated employment.",
    benefits: [
      "Pre-screening and assessment",
      "Job matching services",
      "Ongoing support and coaching",
      "Workplace accommodations assistance",
    ],
  },
  {
    icon: GraduationCap,
    title: "On the Job Training",
    description:
      "Hands-on training with local employers, combining real work experience with structured learning.",
    benefits: [
      "Earn while you learn",
      "Employer-provided mentorship",
      "Skills development",
      "Potential for permanent placement",
    ],
  },
  {
    icon: Lightbulb,
    title: "Supported Self Employment",
    description:
      "Support for entrepreneurs with disabilities looking to start or grow their own business.",
    benefits: [
      "Business plan development",
      "Market research assistance",
      "Ongoing business coaching",
      "Resource connection",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Vocational Evaluations",
    description:
      "Comprehensive assessments to identify strengths, interests, and career pathways.",
    benefits: [
      "Aptitude and interest testing",
      "Transferable skills analysis",
      "Career exploration",
      "Personalized recommendations",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Work Incentive Counseling",
    description:
      "Expert guidance on how employment affects Social Security, Medicaid, and other benefits.",
    benefits: [
      "SSI/SSDI impact analysis",
      "Work incentive planning",
      "Benefits management",
      "Transition support",
    ],
  },
  {
    icon: Search,
    title: "Direct Placement",
    description:
      "Matches individuals with suitable job opportunities based on qualifications and preferences.",
    benefits: [
      "Job matching services",
      "Qualification assessment",
      "Employer connections",
      "Placement support",
    ],
  },
]

export const metadata: Metadata = {
  alternates: { canonical: "/adult-services" },
  title: "Adult Employment Services — Job Training & Supported Employment",
  description:
    "Comprehensive employment services for adults with disabilities in Florida. Supported employment, on-the-job training (OJT), vocational evaluations, self-employment support, and benefits counseling.",
  openGraph: {
    title: "Adult Employment Services — Career Focus Inc.",
    description:
      "Job placement, on-the-job training, vocational evaluations, and benefits counseling for adults with disabilities across Florida.",
    url: "/adult-services",
  },
}

const adultServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Adult Employment Services",
  provider: {
    "@id": "https://careerfocusinc.org/#organization",
  },
  description:
    "Comprehensive employment services for adults with disabilities including supported employment, on-the-job training, vocational evaluations, self-employment support, and benefits counseling.",
  areaServed: { "@type": "State", name: "Florida" },
  audience: {
    "@type": "Audience",
    audienceType:
      "Adults with disabilities, veterans, adults re-entering the workforce",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Adult Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Supported Employment" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On the Job Training (OJT)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Supported Self Employment",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Vocational Evaluations" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Benefits Counseling" },
      },
    ],
  },
}

export default function AdultServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(adultServicesSchema),
        }}
      />
      {/* Hero */}
      <Hero
        compact
        overline="FOR ADULTS"
        title="Adult Services"
        subtitle="Empowering adults to achieve meaningful career goals through personalized support"
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "Youth Services", href: "/youth-services" }}
        imageSrc="/images/adult-services-hero.jpg"
        imageAlt="Woman in wheelchair browsing library resources, representing accessible career development"
      />

      {/* Intro */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-500 mb-3">Overview</p>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Career Focus provides a full range of employment services designed
              to help adults with disabilities, veterans, and individuals
              re-entering the workforce achieve their career goals. Our
              person-centered approach ensures every plan is tailored to your
              unique strengths and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const Icon = service.icon
        const isAlt = index % 2 === 1
        return (
          <section
            key={service.title}
            className={`py-16 md:py-24 ${isAlt ? "bg-brand-blue-50/50" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] items-start">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50 shrink-0">
                  <Icon className="h-8 w-8 text-brand-blue-500" />
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-800 mb-3 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-neutral-500 text-base leading-relaxed mb-8 max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-neutral-600"
                      >
                        <CheckCircle className="h-5 w-5 text-brand-green-400 shrink-0 mt-0.5" />
                        <span className="text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <CtaSection
        title="Schedule a Consultation"
        subtitle="Let us help you find the right program for your career goals."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        showPhone
      />
    </>
  )
}
