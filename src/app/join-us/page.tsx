import type { Metadata } from "next"
import {
  MapPin,
  Phone,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { CtaSection } from "@/components/cta-section"

const locations = [
  {
    name: "Tampa (HQ)",
    address: "550 N. Reo St, Suite 300",
    city: "Tampa, FL 33609",
    phone: "(813) 435-8829",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=550+N+Reo+St+Suite+300+Tampa+FL+33609",
  },
  {
    name: "Wesley Chapel",
    address: "6013 Wesley Grove Blvd, Suite 202",
    city: "Wesley Chapel, FL 33544",
    phone: "(813) 995-8473",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=6013+Wesley+Grove+Blvd+Suite+202+Wesley+Chapel+FL+33544",
  },
]

export const metadata: Metadata = {
  alternates: { canonical: "/join-us" },
  title: "Locations — Wesley Chapel & Tampa, Florida",
  description:
    "Visit Career Focus Inc. at our Florida locations: Tampa (HQ) and Wesley Chapel. Call (813) 435-8829 to schedule a consultation.",
  openGraph: {
    title: "Our Locations — Career Focus Inc.",
    description:
      "Two locations across Florida: Tampa (HQ) and Wesley Chapel. Call (813) 435-8829.",
    url: "/join-us",
  },
}

const tampaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://career-focus-alpha.vercel.app/#tampa",
  name: "Career Focus Inc. — Tampa (HQ)",
  image: "https://career-focus-alpha.vercel.app/icon.png",
  url: "https://career-focus-alpha.vercel.app/join-us",
  telephone: "+1-813-435-8829",
  address: {
    "@type": "PostalAddress",
    streetAddress: "550 N. Reo St, Suite 300",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "33609",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.9506,
    longitude: -82.5115,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  parentOrganization: {
    "@id": "https://career-focus-alpha.vercel.app/#organization",
  },
}

const wesleyChapelSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://career-focus-alpha.vercel.app/#wesley-chapel",
  name: "Career Focus Inc. — Wesley Chapel",
  image: "https://career-focus-alpha.vercel.app/icon.png",
  url: "https://career-focus-alpha.vercel.app/join-us",
  telephone: "+1-813-995-8473",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6013 Wesley Grove Blvd, Suite 202",
    addressLocality: "Wesley Chapel",
    addressRegion: "FL",
    postalCode: "33544",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.2394,
    longitude: -82.3273,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  parentOrganization: {
    "@id": "https://career-focus-alpha.vercel.app/#organization",
  },
}

export default function JoinUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([tampaSchema, wesleyChapelSchema]),
        }}
      />
      {/* Hero */}
      <Hero
        compact
        overline="VISIT US"
        title="Join Us"
        subtitle="Two locations across Central Florida ready to serve you"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/adult-services" }}
      />

      {/* Locations */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-500 mb-3">Offices</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight mb-4">
              Our Locations
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Visit us at either of our two offices across Central Florida.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {locations.map((location) => (
              <div
                key={location.name}
                className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-8"
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
                <p className="text-neutral-500 text-base leading-relaxed mb-1">
                  {location.city}
                </p>
                {location.phone && (
                  <p className="text-neutral-500 text-base leading-relaxed mb-5">
                    {location.phone}
                  </p>
                )}
                {!location.phone && <div className="mb-5" />}
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

      {/* Office Hours */}
      <section className="py-20 md:py-28 bg-brand-amber-50/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50">
              <Clock className="h-7 w-7 text-brand-blue-500" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
              Office Hours
            </h2>
            <p className="text-neutral-500 text-lg mb-2">
              Monday &ndash; Friday
            </p>
            <p className="font-heading text-2xl font-bold text-neutral-800">
              9:00 AM &ndash; 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28 bg-brand-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-500 mb-3">Connect</p>
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
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/careerfocusinc" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/careerfocusinc/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/careerfocusinc" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
