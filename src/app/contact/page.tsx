import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Hero } from "@/components/hero"
import { ContactForm } from "@/components/contact-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive employment services including supported employment, on-the-job training, vocational evaluations, benefits counseling, and youth career development programs.",
  },
  {
    question: "Who is eligible for your programs?",
    answer:
      "We serve youth in transition, adults with disabilities, veterans, and individuals re-entering the workforce. Contact us to discuss your specific situation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out through our contact form, call us at (813) 435-8829, or visit any of our three Florida locations. We'll schedule an initial consultation to discuss your goals.",
  },
  {
    question: "Do you serve my area?",
    answer:
      "We have offices in Wesley Chapel, Tampa, and Orlando, serving communities across Central Florida.",
  },
  {
    question: "Is there a cost for services?",
    answer:
      "Many of our services are funded through state and federal programs at no cost to eligible participants. Contact us to learn about eligibility requirements.",
  },
]

export const metadata: Metadata = {
  title: "Contact Us | Career Focus Inc.",
  description:
    "Contact Career Focus Inc. to learn about our employment services. Call (813) 435-8829, email us, or visit our offices in Wesley Chapel, Tampa, or Orlando.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        title="Contact Us"
        subtitle="We'd love to hear from you"
        primaryCta={{ label: "Call Us", href: "tel:8134358829" }}
        secondaryCta={{ label: "Our Locations", href: "/join-us" }}
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                Send Us a Message
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed mb-8">
                Fill out the form below and a member of our team will get back to
                you within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-50 shrink-0">
                    <Phone className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-neutral-800 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:8134358829"
                      className="text-neutral-600 hover:text-brand-blue-500 cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
                    >
                      (813) 435-8829
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-50 shrink-0">
                    <Mail className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-neutral-800 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@careerfocusinc.com"
                      className="text-neutral-600 hover:text-brand-blue-500 cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
                    >
                      info@careerfocusinc.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-50 shrink-0">
                    <MapPin className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-neutral-800 mb-1">
                      Locations
                    </h3>
                    <ul className="space-y-2 text-neutral-600 text-sm">
                      <li>
                        <span className="font-medium text-neutral-700">
                          Wesley Chapel (HQ)
                        </span>
                        <br />
                        2604 Cypress Ridge Blvd, Ste 102-C
                      </li>
                      <li>
                        <span className="font-medium text-neutral-700">
                          Tampa
                        </span>
                        <br />
                        550 N. Reo St, Ste 300
                      </li>
                      <li>
                        <span className="font-medium text-neutral-700">
                          Orlando
                        </span>
                        <br />
                        4530 S. Orange Blossom Trail
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-50 shrink-0">
                    <Clock className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-neutral-800 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Monday &ndash; Friday
                      <br />
                      9:00 AM &ndash; 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 text-lg">
              Find answers to common questions about our programs and services.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base font-semibold text-neutral-800 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
