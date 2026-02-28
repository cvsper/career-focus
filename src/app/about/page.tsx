import type { Metadata } from "next"
import Image from "next/image"
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
    title: "President, CEO & Founder",
    bio: "Over 15 years of experience working with the disabled community in various roles including direct care and intensive case management. Degree in nursing.",
    imageSrc: "/images/team/cassandra.jpg",
  },
  {
    name: "Taveesha Guyton",
    title: "Vice President",
    bio: "Registered Behavior Technician with the BACB. Extensive experience in the Autism community. Holds a B.A. in Psychology and BSW from the University of South Florida.",
    imageSrc: "/images/team/taveesha.jpg",
  },
  {
    name: "Camille Felicia",
    title: "Treasurer",
    bio: "USF alumna with 10+ years administrative experience. Six years with Kepro (Medicare contractor). Brings organizational expertise to Career Focus.",
    imageSrc: "/images/team/camille.jpg",
  },
]

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us — Our Mission, Vision & Leadership Team",
  description:
    "Career Focus Inc. is a 501(c)(3) nonprofit serving Florida since 2013. Meet our leadership team including CEO Cassandra Garvey, and learn about our mission to empower individuals with disabilities, veterans, and youth.",
  openGraph: {
    title: "About Career Focus Inc. — 501(c)(3) Nonprofit Since 2013",
    description:
      "Meet our leadership team and learn how we empower individuals with disabilities, veterans, and youth in transition to achieve meaningful employment.",
    url: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        overline="WHO WE ARE"
        title="About Career Focus"
        subtitle="Empowering individuals through meaningful employment since 2013"
        primaryCta={{ label: "Our Services", href: "/adult-services" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        imageSrc="/images/career-coaching.jpg"
        imageAlt="Career coach helping a professional prepare for success"
      />

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:gap-20 md:grid-cols-2 items-center">
            {/* Text */}
            <div>
              <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-500 mb-3">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-6 tracking-tight">
                From a Small Initiative to a Community Institution
              </h2>
              <div className="space-y-4 text-neutral-500 text-base leading-relaxed">
                <p>
                  Career Focus Inc. was founded in 2013 as a 501(c)(3) nonprofit
                  organization with a clear purpose: to empower individuals by
                  providing them with the necessary tools and resources to explore, pursue, and maintain meaningful
                  employment within their community.
                </p>
                <p>
                  What began as a small initiative in the Tampa Bay area has
                  grown into a multi-location organization serving communities
                  across Central Florida. With offices in Tampa, Wesley Chapel,
                  and Dade City, we now offer 11 programs supporting youth in
                  transition, adults with disabilities, veterans, and individuals
                  re-entering the workforce.
                </p>
                <p>
                  Our person-centered approach means every service is tailored to
                  the unique strengths, goals, and needs of the people we serve.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/team-meeting-real.jpg"
                  alt="Inclusive team meeting at Career Focus with diverse professionals collaborating"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-brand-amber-100/40 -z-10" />
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl bg-brand-blue-100/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-brand-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-500 mb-3">What We Believe</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-8 animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50">
                    <Icon className="h-7 w-7 text-brand-blue-500" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-neutral-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-green-500 mb-3">Leadership</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
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
                imageSrc={member.imageSrc}
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
