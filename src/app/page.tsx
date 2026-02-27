import type { Metadata } from "next"
import Image from "next/image"
import { Users, Briefcase } from "lucide-react"
import { Hero } from "@/components/hero"
import { ServiceCard } from "@/components/service-card"
import { CtaSection } from "@/components/cta-section"
import TestimonialsSection from "@/components/testimonials-section"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
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
      {/* 1. Hero — photo-dominant with green stats strip */}
      <Hero
        title={`Discover,\nDevelop,\nSucceed.`}
        subtitle="Career Focus Inc. empowers youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce through comprehensive career development programs."
        overline="501(c)(3) NONPROFIT SINCE 2013"
        primaryCta={{ label: "Explore Services", href: "/adult-services" }}
        secondaryCta={{ label: "Get in Touch", href: "/contact" }}
        imageSrc="/images/community-volunteers.jpg"
        imageAlt="Group of young Career Focus volunteers wearing lanyards, representing the community we serve"
        stats={[
          { value: "13+", label: "Years of Service" },
          { value: "3", label: "Florida Locations" },
          { value: "11", label: "Programs Offered" },
        ]}
      />

      {/* 2. Mission/About — asymmetric split on white */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left — bold pull-quote (55%) */}
            <div className="md:col-span-7">
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-neutral-800 tracking-tight">
                We believe everyone deserves a career, not just a job<span className="text-accent-coral-500">.</span>
              </h2>
              <p className="mt-6 text-neutral-500 text-lg leading-relaxed max-w-[52ch]">
                To empower individuals by providing them with the necessary tools and resources to explore, pursue, and maintain meaningful employment within their community.
              </p>
            </div>

            {/* Right — photo with diagonal clip (45%) */}
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-2xl" style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)" }}>
                <Image
                  src="/images/team-meeting-real.jpg"
                  alt="Career Focus team collaborating"
                  width={560}
                  height={420}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Vision statement below split */}
          <div className="mt-16 max-w-3xl">
            <div className="flex items-start gap-3">
              <span className="text-brand-green-500 text-6xl font-heading font-bold leading-none -mt-2 select-none" aria-hidden="true">&ldquo;</span>
              <p className="text-2xl font-heading italic text-brand-blue-700 leading-relaxed">
                Career Focus Inc. envisions a world where individuals, regardless of their background, have equal access to meaningful employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services — dark feature section */}
      <section className="bg-brand-blue-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-xs tracking-widest text-brand-blue-400 uppercase mb-4">[ SERVICES ]</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-14">
            What We Do
          </h2>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-5">
            <div className="sm:col-span-3">
              <ServiceCard
                icon={Users}
                title="Youth Services"
                description="Work-based learning, career camps, post-secondary planning, and self-advocacy training to build bright futures."
                href="/youth-services"
                variant="dark"
                imageSrc="/images/youth-career.jpg"
                benefits={[
                  "Paid work-based learning",
                  "Career Camp programs",
                  "Post-secondary education planning",
                  "Job search & direct placement",
                ]}
              />
            </div>
            <div className="sm:col-span-2">
              <ServiceCard
                icon={Briefcase}
                title="Adult Services"
                description="Supported employment, on-the-job training, vocational evaluations, and benefits counseling for career goals."
                href="/adult-services"
                variant="dark"
                imageSrc="/images/adult-training.jpg"
                benefits={[
                  "Supported employment",
                  "On the job training",
                  "Vocational evaluations",
                  "Benefits counseling",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials — editorial single-quote rotator */}
      <TestimonialsSection />

      {/* 5. CTA — bold green block with diagonal top */}
      <CtaSection
        title="Ready to Start Your Journey?"
        subtitle="Take the first step toward meaningful employment and career development."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        showPhone
        variant="green"
        angleTop
      />
    </>
  )
}
