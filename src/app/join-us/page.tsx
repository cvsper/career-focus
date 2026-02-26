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
        title="Join Us"
        subtitle="Three locations across Florida"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/adult-services" }}
      />

      {/* Locations */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Locations
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Visit us at any of our three offices across Central Florida.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location.name}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50">
                  <MapPin className="h-6 w-6 text-brand-blue-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-3">
                  {location.name}
                </h3>
                <p className="text-neutral-600 text-base leading-relaxed mb-1">
                  {location.address}
                </p>
                <p className="text-neutral-600 text-base leading-relaxed mb-4">
                  {location.city}
                </p>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-blue-500 font-semibold hover:underline cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
                >
                  Get Directions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-8">
              Get in Touch
            </h2>

            {/* Phone */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="h-5 w-5 text-brand-blue-500" />
              <a
                href="tel:8134358829"
                className="text-lg text-neutral-700 hover:text-brand-blue-500 font-medium cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
              >
                (813) 435-8829
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-brand-blue-500 hover:border-brand-blue-200 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-brand-blue-500 hover:border-brand-blue-200 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-brand-blue-500 hover:border-brand-blue-200 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-brand-blue-500 hover:bg-brand-blue-600 min-h-12 px-8 font-semibold"
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
