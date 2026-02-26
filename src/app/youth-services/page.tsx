import type { Metadata } from "next"
import {
  Hammer,
  BookOpen,
  Megaphone,
  Search,
  Tent,
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
  special?: boolean
  badge?: string
}

const services: ServiceSection[] = [
  {
    icon: Hammer,
    title: "Paid Work-Based Learning",
    description:
      "Real-world work experiences that prepare young people for career success.",
    benefits: [
      "Paid work placements",
      "Professional skill building",
      "Resume development",
      "Workplace readiness training",
    ],
  },
  {
    icon: BookOpen,
    title: "Post-Secondary Education Planning",
    description:
      "Guidance for continuing education after high school.",
    benefits: [
      "College and trade school exploration",
      "Application assistance",
      "Financial aid guidance",
      "Transition planning",
    ],
  },
  {
    icon: Megaphone,
    title: "Self-Advocacy Training",
    description:
      "Building confidence and skills to self-advocate in the workplace and beyond.",
    benefits: [
      "Rights and responsibilities education",
      "Communication skills",
      "Workplace navigation",
      "Self-determination building",
    ],
  },
  {
    icon: Search,
    title: "Job Search Support & Direct Placement",
    description:
      "Comprehensive job search assistance and direct placement services.",
    benefits: [
      "Resume and cover letter writing",
      "Interview preparation",
      "Job matching",
      "Employer connections",
    ],
  },
  {
    icon: Tent,
    title: "Career Camp",
    description:
      "Seasonal intensive program combining career exploration, skill building, and fun.",
    benefits: [
      "Industry exploration",
      "Hands-on projects",
      "Team building activities",
      "Professional development",
    ],
    special: true,
    badge: "Winter | Spring | Summer",
  },
  {
    icon: HeartHandshake,
    title: "Benefits Counseling",
    description:
      "Expert guidance on how employment affects Social Security, Medicaid, and other benefits for youth and their families.",
    benefits: [
      "SSI/SSDI impact analysis",
      "Work incentive planning",
      "Benefits management",
      "Transition support",
    ],
  },
]

export const metadata: Metadata = {
  title: "Youth Career Development | Career Focus Inc.",
  description:
    "Youth career development programs including paid work-based learning, career camps, post-secondary planning, self-advocacy training, and job placement for young people in transition.",
}

export default function YouthServicesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        title="Youth Services"
        subtitle="Building Bright Futures for Young People"
        primaryCta={{ label: "Join Career Camp", href: "/contact" }}
        secondaryCta={{ label: "View Adult Services", href: "/adult-services" }}
      />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-neutral-600 text-lg leading-relaxed">
              Career Focus helps young people in transition build the skills,
              confidence, and connections they need for long-term career success.
              Our youth programs combine hands-on learning, mentorship, and
              individualized planning to create real pathways to employment and
              education.
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
              <div
                className={`grid gap-8 md:grid-cols-[auto_1fr] items-start ${
                  service.special
                    ? "rounded-xl border-2 border-brand-green-200 bg-brand-green-50/30 p-8"
                    : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full shrink-0 ${
                    service.special
                      ? "bg-brand-green-100"
                      : "bg-brand-blue-50"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${
                      service.special
                        ? "text-brand-green-600"
                        : "text-brand-blue-500"
                    }`}
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-800">
                      {service.title}
                    </h2>
                    {service.badge && (
                      <span className="inline-flex items-center rounded-full bg-brand-green-100 px-3 py-1 text-xs font-semibold text-brand-green-700">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 max-w-2xl">
                    {service.description}
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-neutral-700"
                      >
                        <CheckCircle
                          className={`h-5 w-5 shrink-0 mt-0.5 ${
                            service.special
                              ? "text-brand-green-500"
                              : "text-brand-green-500"
                          }`}
                        />
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
        title="Ready to Get Started?"
        subtitle="Help your young person build the skills and confidence for career success."
        primaryCta={{ label: "Join Career Camp", href: "/contact" }}
        secondaryCta={{ label: "Get Started", href: "/contact" }}
      />
    </>
  )
}
