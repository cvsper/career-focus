import type { Metadata } from "next"
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  ClipboardCheck,
  HeartHandshake,
  CheckCircle,
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
    title: "Benefits Counseling",
    description:
      "Expert guidance on how employment affects Social Security, Medicaid, and other benefits.",
    benefits: [
      "SSI/SSDI impact analysis",
      "Work incentive planning",
      "Benefits management",
      "Transition support",
    ],
  },
]

export const metadata: Metadata = {
  title: "Adult Employment Services | Career Focus Inc.",
  description:
    "Comprehensive adult employment services including supported employment, on-the-job training, vocational evaluations, and benefits counseling for adults with disabilities, veterans, and workforce re-entrants.",
}

export default function AdultServicesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        title="Adult Services"
        subtitle="Empowering adults to achieve career goals"
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "View Youth Services", href: "/youth-services" }}
      />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-neutral-600 text-lg leading-relaxed">
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
            className={`py-16 md:py-20 ${isAlt ? "bg-neutral-50" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] items-start">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-50 shrink-0">
                  <Icon className="h-7 w-7 text-brand-blue-500" />
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-800 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-neutral-700"
                      >
                        <CheckCircle className="h-5 w-5 text-brand-green-500 shrink-0 mt-0.5" />
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
