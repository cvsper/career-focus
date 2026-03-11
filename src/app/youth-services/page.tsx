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
  alternates: { canonical: "/youth-services" },
  title: "Youth Career Programs — Work-Based Learning & Career Camp",
  description:
    "Career development programs for youth ages 16-24 in Florida. Paid work-based learning, career camp (winter, spring, summer), post-secondary planning, self-advocacy training, and job placement.",
  openGraph: {
    title: "Youth Career Programs — Career Focus Inc.",
    description:
      "Work-based learning, career camp, post-secondary planning, and job placement for young people ages 16-24 in Florida.",
    url: "/youth-services",
  },
}

const youthServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Youth Career Programs",
  provider: {
    "@id": "https://careerfocusinc.org/#organization",
  },
  description:
    "Career development programs for youth ages 16-24 including paid work-based learning, career camp, post-secondary planning, self-advocacy training, and job placement.",
  areaServed: { "@type": "State", name: "Florida" },
  audience: {
    "@type": "Audience",
    audienceType: "Youth in transition ages 16-24",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Youth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paid Work-Based Learning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Post-Secondary Education Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Self-Advocacy Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Job Search Support & Direct Placement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Career Camp" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Benefits Counseling" },
      },
    ],
  },
}

export default function YouthServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(youthServicesSchema),
        }}
      />
      {/* Hero */}
      <Hero
        compact
        overline="FOR YOUNG PEOPLE"
        title="Youth Services"
        subtitle="Building bright futures through hands-on career development"
        primaryCta={{ label: "Join Career Camp", href: "/contact" }}
        secondaryCta={{ label: "Adult Services", href: "/adult-services" }}
        imageSrc="/images/youth-services-hero.jpg"
        imageAlt="Diverse group of young students laughing together outdoors"
      />

      {/* Intro */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-green-500 mb-3">Overview</p>
            <p className="text-neutral-500 text-lg leading-relaxed">
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
            className={`py-16 md:py-24 ${isAlt ? "bg-brand-amber-50/50" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 md:px-8">
              <div
                className={`grid gap-8 md:grid-cols-[auto_1fr] items-start ${
                  service.special
                    ? "rounded-2xl border-2 border-brand-green-200 bg-brand-green-50/20 p-8 md:p-10"
                    : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl shrink-0 ${
                    service.special
                      ? "bg-gradient-to-br from-brand-green-100 to-brand-green-50"
                      : "bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50"
                  }`}
                >
                  <Icon
                    className={`h-8 w-8 ${
                      service.special
                        ? "text-brand-green-600"
                        : "text-brand-blue-500"
                    }`}
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-800 tracking-tight">
                      {service.title}
                    </h2>
                    {service.badge && (
                      <span className="inline-flex items-center rounded-full bg-brand-green-100 px-3 py-1 text-xs font-bold text-brand-green-700 tracking-wide">
                        {service.badge}
                      </span>
                    )}
                  </div>
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
        title="Ready to Get Started?"
        subtitle="Help your young person build the skills and confidence for career success."
        primaryCta={{ label: "Join Career Camp", href: "/contact" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
