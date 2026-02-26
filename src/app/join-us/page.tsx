import type { Metadata } from "next"
import {
  MapPin,
  Phone,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { CtaSection } from "@/components/cta-section"

const locations = [
  {
    name: "Wesley Chapel (HQ)",
    address: "2604 Cypress Ridge Blvd, Ste 102-C",
    city: "Wesley Chapel, FL 33544",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2604+Cypress+Ridge+Blvd+Ste+102-C+Wesley+Chapel+FL+33544",
  },
  {
    name: "Tampa",
    address: "550 N. Reo St, Ste 300",
    city: "Tampa, FL 33609",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=550+N+Reo+St+Ste+300+Tampa+FL+33609",
  },
  {
    name: "Orlando",
    address: "4530 S. Orange Blossom Trail",
    city: "Orlando, FL 32839",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=4530+S+Orange+Blossom+Trail+Orlando+FL+32839",
  },
]

export const metadata: Metadata = {
  title: "Locations & Hours | Career Focus Inc.",
  description:
    "Visit Career Focus Inc. at our three Central Florida locations in Wesley Chapel, Tampa, and Orlando. Find office hours, directions, and contact information.",
}

export default function JoinUsPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        overline="VISIT US"
        title="Join Us"
        subtitle="Three locations across Central Florida ready to serve you"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/adult-services" }}
      />

      {/* Locations */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="overline text-brand-blue-500 mb-3">Offices</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight mb-4">
              Our Locations
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Visit us at any of our three offices across Central Florida.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location.name}
                className="card-premium p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50">
                  <MapPin className="h-7 w-7 text-brand-blue-500" />
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-800 mb-3">
                  {location.name}
                </h3>
                <p className="text-neutral-500 text-base leading-relaxed mb-1">
                  {location.address}
                </p>
                <p className="text-neutral-500 text-base leading-relaxed mb-5">
                  {location.city}
                </p>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-blue-500 font-semibold text-sm hover:text-brand-blue-600 cursor-pointer transition-colors duration-200"
                >
                  Get Directions
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28 section-cool">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline text-brand-blue-500 mb-3">Connect</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-10">
              Get in Touch
            </h2>

            {/* Phone */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-50">
                <Phone className="h-5 w-5 text-brand-blue-500" />
              </div>
              <a
                href="tel:8134358829"
                className="text-lg text-neutral-700 hover:text-brand-blue-500 font-medium cursor-pointer transition-colors duration-200"
              >
                (813) 435-8829
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 mb-10">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-400 hover:text-brand-blue-500 hover:border-brand-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-brand-blue-500 hover:bg-brand-blue-600 min-h-[52px] px-8 font-bold rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-px"
            >
              <a href="/contact">Send Us a Message</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Ready to Get Started?"
        subtitle="Contact us to learn about our programs and how we can help."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        showPhone
      />
    </>
  )
}
