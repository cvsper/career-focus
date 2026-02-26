import type { Metadata } from "next"
import Image from "next/image"
import {
  Briefcase,
  FileText,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { CtaSection } from "@/components/cta-section"

const partnerBenefits = [
  "Access motivated, pre-screened candidates ready to contribute to your team",
  "Receive ongoing job coaching and workplace support at no additional cost",
  "Qualify for tax incentives through inclusive hiring programs",
  "Build a diverse, inclusive workplace that reflects your community values",
]

const paths = [
  {
    icon: Briefcase,
    title: "For Employers",
    description:
      "Hire inclusively. Access a pool of motivated, trained candidates ready to contribute to your team.",
    cta: { label: "Learn More", href: "/contact" },
  },
  {
    icon: FileText,
    title: "Projects & RFPs",
    description:
      "Submit proposals to subcontract with Career Focus on government and private-sector projects.",
    cta: { label: "Learn More", href: "/contact" },
  },
  {
    icon: Award,
    title: "SUCCESS Grant",
    description:
      "Financial support program for clients pursuing career goals through education and training.",
    cta: { label: "Apply", href: "/contact" },
  },
]

export const metadata: Metadata = {
  title: "Community Partners | Career Focus Inc.",
  description:
    "Partner with Career Focus Inc. to build an inclusive workforce. Access pre-screened candidates, receive job coaching support, and qualify for tax incentives through inclusive hiring.",
}

export default function CommunityPartnersPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        overline="PARTNERSHIPS"
        title="Community Partners"
        subtitle="Building an inclusive workforce together across Central Florida"
        primaryCta={{ label: "Become a Partner", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/adult-services" }}
      />

      {/* Partnership Benefits */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:gap-20 md:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <p className="overline text-brand-blue-500 mb-3">Why Partner</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-6 tracking-tight">
                Why Partner with Career Focus?
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                When you partner with Career Focus, you gain access to a
                dedicated team committed to building an inclusive workforce in
                Central Florida. We provide hands-on support throughout the
                hiring process and beyond.
              </p>
              <ul className="space-y-4 mb-10">
                {partnerBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-neutral-600"
                  >
                    <CheckCircle className="h-5 w-5 text-brand-green-400 shrink-0 mt-0.5" />
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-brand-blue-500 hover:bg-brand-blue-600 min-h-[52px] px-8 font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-px"
              >
                <a href="/contact">Become a Partner</a>
              </Button>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/partnership.jpg"
                  alt="Business professionals shaking hands in a partnership meeting"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-brand-green-100/30 -z-10" />
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl bg-brand-blue-100/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Paths */}
      <section className="py-20 md:py-28 section-cool">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="overline text-brand-blue-500 mb-3">Opportunities</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight mb-4">
              Ways to Partner
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Choose the partnership path that fits your organization.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {paths.map((path) => {
              const Icon = path.icon
              return (
                <div
                  key={path.title}
                  className="card-premium p-8 flex flex-col"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50">
                    <Icon className="h-7 w-7 text-brand-blue-500" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-neutral-800 mb-3">
                    {path.title}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed mb-6 flex-1">
                    {path.description}
                  </p>
                  <a
                    href={path.cta.href}
                    className="inline-flex items-center text-brand-blue-500 font-semibold text-sm hover:text-brand-blue-600 cursor-pointer transition-colors duration-200"
                  >
                    {path.cta.label}
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 hover:translate-x-1" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Let's Build Together"
        subtitle="Contact us to discuss partnership opportunities and inclusive hiring."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        showPhone
      />
    </>
  )
}
