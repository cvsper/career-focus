import type { Metadata } from "next"
import {
  Briefcase,
  FileText,
  Award,
  CheckCircle,
  Handshake,
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
      "Hire inclusively. Access a pool of motivated, trained candidates ready to contribute.",
    cta: { label: "Learn More", href: "/contact" },
  },
  {
    icon: FileText,
    title: "Projects & RFPs",
    description:
      "Submit proposals to subcontract with Career Focus on government and private projects.",
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
        title="Community Partners"
        subtitle="Building an inclusive workforce together"
        primaryCta={{ label: "Become a Partner", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/adult-services" }}
      />

      {/* Partnership Benefits */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Why Partner with Career Focus?
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                When you partner with Career Focus, you gain access to a
                dedicated team committed to building an inclusive workforce in
                Central Florida. We provide hands-on support throughout the
                hiring process and beyond.
              </p>
              <ul className="space-y-4 mb-8">
                {partnerBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <CheckCircle className="h-5 w-5 text-brand-green-500 shrink-0 mt-0.5" />
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-brand-blue-500 hover:bg-brand-blue-600 min-h-12 px-8 font-semibold"
              >
                <a href="/contact">Become a Partner</a>
              </Button>
            </div>

            {/* Placeholder Image */}
            <div className="rounded-xl bg-brand-blue-50 aspect-[4/3] flex items-center justify-center" role="img" aria-label="Partnership illustration placeholder">
              <div className="text-center px-8">
                <Handshake className="h-16 w-16 text-brand-blue-300 mx-auto mb-4" aria-hidden="true" />
                <p className="text-brand-blue-400 font-medium">
                  Partner with Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Paths */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Ways to Partner
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Choose the partnership path that fits your organization.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {paths.map((path) => {
              const Icon = path.icon
              return (
                <div
                  key={path.title}
                  className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50">
                    <Icon className="h-6 w-6 text-brand-blue-500" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
                    {path.title}
                  </h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-6 flex-1">
                    {path.description}
                  </p>
                  <a
                    href={path.cta.href}
                    className="inline-flex items-center text-brand-blue-500 font-semibold hover:underline cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
                  >
                    {path.cta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
        subtitle="Contact us to discuss partnership opportunities."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        showPhone
      />
    </>
  )
}
