import type { Metadata } from "next"
import {
  Heart,
  Users,
  Eye,
  UserCircle,
  Building,
} from "lucide-react"
import { Hero } from "@/components/hero"
import { TeamMemberCard } from "@/components/team-member-card"
import { CtaSection } from "@/components/cta-section"

const values = [
  {
    icon: Heart,
    title: "Empowerment",
    description:
      "We equip individuals with the tools, skills, and confidence to take control of their career paths.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "We believe everyone deserves equal access to employment opportunities regardless of ability or background.",
  },
  {
    icon: Eye,
    title: "Accessibility",
    description:
      "We remove barriers and create pathways so all individuals can participate fully in the workforce.",
  },
  {
    icon: UserCircle,
    title: "Person-Centered",
    description:
      "Every program and service is tailored to the unique strengths, goals, and needs of the individual.",
  },
  {
    icon: Building,
    title: "Community",
    description:
      "We build partnerships with employers, organizations, and families to create an inclusive workforce ecosystem.",
  },
]

const team = [
  {
    name: "Cassandra Garvey",
    title: "CEO / Founder",
    bio: "Over 15 years of experience working with the disabled community. Degree in nursing. Dedicated to providing comprehensive employment services.",
  },
  {
    name: "Taveesha Guyton",
    title: "Vice President",
    bio: "Registered Behavior Technician. B.A. in Psychology and Social Work from USF. Extensive experience in the Autism Community.",
  },
  {
    name: "Camille Felicia",
    title: "Treasurer",
    bio: "USF alumna with 10+ years administrative experience. Six years with Kepro (Medicare contractor). Brings organizational expertise to Career Focus.",
  },
]

export const metadata: Metadata = {
  title: "About Career Focus Inc. | Our Mission & Team",
  description:
    "Learn about Career Focus Inc., a 501(c)(3) nonprofit empowering individuals through employment services since 2013. Meet our leadership team and discover our values.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        title="About Career Focus"
        subtitle="Serving our community since 2013"
        primaryCta={{ label: "Our Services", href: "/adult-services" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  Career Focus Inc. was founded in 2013 as a 501(c)(3) nonprofit
                  organization with a clear purpose: to empower individuals by
                  providing the tools and resources needed to achieve meaningful
                  employment and self-sufficiency.
                </p>
                <p>
                  What began as a small initiative in the Tampa Bay area has
                  grown into a multi-location organization serving communities
                  across Central Florida. With offices in Wesley Chapel, Tampa,
                  and Orlando, we now offer 11 programs supporting youth in
                  transition, adults with disabilities, veterans, and individuals
                  re-entering the workforce.
                </p>
                <p>
                  Our person-centered approach means every service is tailored to
                  the unique strengths, goals, and needs of the people we serve.
                  From career camps and work-based learning for youth to
                  supported employment and vocational evaluations for adults, we
                  meet individuals where they are and help them get where they
                  want to go.
                </p>
              </div>
            </div>

            {/* Placeholder Image */}
            <div className="rounded-xl bg-brand-blue-50 aspect-[4/3] flex items-center justify-center" role="img" aria-label="Career Focus team photo placeholder">
              <div className="text-center px-8">
                <Building className="h-16 w-16 text-brand-blue-300 mx-auto mb-4" aria-hidden="true" />
                <p className="text-brand-blue-400 font-medium">
                  Career Focus Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Values
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50">
                    <Icon className="h-6 w-6 text-brand-blue-500" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              The dedicated professionals leading Career Focus forward.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {team.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                title={member.title}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Want to Learn More?"
        subtitle="Get in touch with our team to learn about our programs and services."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/adult-services" }}
      />
    </>
  )
}
