import type { Metadata } from "next"
import { Users, Briefcase, Target, Sparkles, ArrowRight, Star, Heart, TrendingUp } from "lucide-react"
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

const impactNumbers = [
  { icon: Star, value: "13+", label: "Years of Impact", description: "Serving Central Florida communities" },
  { icon: Heart, value: "11", label: "Programs", description: "Tailored career development services" },
  { icon: TrendingUp, value: "3", label: "Locations", description: "Wesley Chapel, Tampa & Dade City" },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        overline="501(c)(3) NONPROFIT SINCE 2013"
        title="Discover, Develop, Succeed."
        subtitle="Career Focus Inc. empowers youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce through comprehensive career development programs."
        primaryCta={{ label: "Explore Services", href: "/adult-services" }}
        secondaryCta={{ label: "Get in Touch", href: "/contact" }}
        imageSrc="/images/hero-people.jpg"
        imageAlt="A diverse group of people smiling together, representing the community Career Focus serves"
        stats={[
          { value: "13+", label: "Years of Service" },
          { value: "3", label: "Florida Locations" },
          { value: "11", label: "Programs Offered" },
        ]}
      />

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-mesh-blue">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="card-premium p-10 animate-fade-in-up">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/60">
                <Target className="h-7 w-7 text-brand-blue-500" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-3 tracking-tight">
                Our Mission
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed">
                To empower individuals by providing them with the necessary tools and resources to explore, pursue, and maintain meaningful employment within their community.
              </p>
            </div>

            {/* Vision */}
            <div className="card-premium p-10 animate-fade-in-up delay-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green-50 to-brand-green-100/60">
                <Sparkles className="h-7 w-7 text-brand-green-500" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-800 mb-3 tracking-tight">
                Our Vision
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed">
                Career Focus Inc. envisions a world where individuals, regardless of their background, have equal access to meaningful employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 md:py-28 section-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="overline text-brand-amber-500 mb-3">Our Impact</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight">
              Making a Real Difference
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {impactNumbers.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-50">
                    <Icon className="h-7 w-7 text-brand-blue-500" />
                  </div>
                  <p className="font-heading text-5xl md:text-6xl font-extrabold text-gradient-blue tracking-tight">{item.value}</p>
                  <p className="font-heading text-lg font-semibold text-neutral-800 mt-2">{item.label}</p>
                  <p className="text-neutral-400 text-sm mt-1">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 section-cool">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="overline text-brand-blue-500 mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Comprehensive employment programs tailored for youth and adults
              across Central Florida.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <ServiceCard
              icon={Users}
              title="Youth Services"
              description="Work-based learning, career camps, post-secondary planning, and self-advocacy training to build bright futures."
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
              description="Supported employment, on-the-job training, vocational evaluations, and benefits counseling for career goals."
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

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <p className="overline text-brand-green-500 mb-8">What People Say</p>
          <div className="space-y-6">
            <Testimonial
              quote="Participating in the Career Camp was a game-changer for me. I gained real skills and confidence that changed the trajectory of my career."
              name="Career Camp Participant"
            />
            <Testimonial
              quote="Quentin and Jalen completed the summer career camp and successfully finished their on-the-job training at Walgreens."
              name="Career Camp Success Story"
            />
            <Testimonial
              quote="Bella successfully completed her on-the-job training at Selah East Stables as an equestrian trainer, gaining knowledge in horse handling, grooming, and training techniques."
              name="On-the-Job Training Graduate"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to Start Your Journey?"
        subtitle="Take the first step toward meaningful employment and career development."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        showPhone
      />
    </>
  )
}
