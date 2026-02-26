import type { Metadata } from "next"
import { Users, Briefcase, Target, Sparkles } from "lucide-react"
import { Hero } from "@/components/hero"
import { ServiceCard } from "@/components/service-card"
import { Testimonial } from "@/components/testimonial"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Career Focus Inc. | Discover, Develop, Succeed",
  description:
    "Career Focus Inc. is a 501(c)(3) nonprofit providing employment services and career development to youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce across Central Florida.",
  openGraph: {
    title: "Career Focus Inc. | Discover, Develop, Succeed",
    description:
      "Empowering individuals to achieve meaningful employment. 13+ years serving Central Florida with 11 career development programs.",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        overline="NONPROFIT SINCE 2013"
        title="Discover, Develop, Succeed."
        subtitle="Career Focus Inc. is a 501(c)(3) nonprofit providing employment services and career development to youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce."
        primaryCta={{ label: "Our Services", href: "/adult-services" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        stats={[
          { value: "13+", label: "Years of Service" },
          { value: "3", label: "Florida Locations" },
          { value: "11", label: "Programs Offered" },
        ]}
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50">
                <Target className="h-6 w-6 text-brand-blue-500" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-3">
                Our Mission
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                Empowering individuals by providing tools and resources to help
                achieve meaningful employment and self-sufficiency.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-50">
                <Sparkles className="h-6 w-6 text-brand-green-600" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-3">
                Our Vision
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed">
                A world where individuals of all abilities have equal access to
                employment opportunities and career development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Services
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Comprehensive employment programs tailored for youth and adults
              across Central Florida.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <ServiceCard
              icon={Users}
              title="Youth Services"
              description="Work-based learning, career camps, post-secondary planning, and self-advocacy training to build bright futures for young people."
              href="/youth-services"
              benefits={[
                "Paid work-based learning",
                "Career Camp programs",
                "Post-secondary education planning",
                "Job search & direct placement",
              ]}
            />
            <ServiceCard
              icon={Briefcase}
              title="Adult Services"
              description="Supported employment, on-the-job training, vocational evaluations, and benefits counseling to help adults achieve career goals."
              href="/adult-services"
              benefits={[
                "Supported employment",
                "On the job training",
                "Vocational evaluations",
                "Benefits counseling",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <Testimonial
            quote="Participating in the Career Camp was a game-changer for me. I gained real skills and confidence."
            name="Career Camp Participant"
          />
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to Start Your Journey?"
        subtitle="Take the first step toward meaningful employment."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        showPhone
      />
    </>
  )
}
