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
      "We have offices in Tampa, Wesley Chapel, and Dade City, serving communities across Central Florida.",
  },
  {
    question: "Is there a cost for services?",
    answer:
      "Many of our services are funded through state and federal programs at no cost to eligible participants. Contact us to learn about eligibility requirements.",
  },
]

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us",
  description:
    "Contact Career Focus Inc. to learn about our employment services. Call (813) 435-8829, email us, or visit our offices in Tampa, Wesley Chapel, or Dade City.",
  openGraph: {
    title: "Contact Career Focus Inc.",
    description: "Call (813) 435-8829, email us, or visit our offices across Central Florida.",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        compact
        overline="GET IN TOUCH"
        title="Contact Us"
        subtitle="We'd love to hear from you and help you get started"
        primaryCta={{ label: "Call Us", href: "tel:8134358829" }}
        secondaryCta={{ label: "Our Locations", href: "/join-us" }}
      />

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Contact Form */}
            <div>
              <p className="overline text-brand-blue-500 mb-3">Send a Message</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-800 mb-2 tracking-tight">
                How Can We Help?
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                Fill out the form below and a member of our team will get back to
                you within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50 shrink-0">
                    <Phone className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-neutral-800 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:8134358829"
                      className="text-neutral-500 hover:text-brand-blue-500 cursor-pointer transition-colors duration-200"
                    >
                      (813) 435-8829
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50 shrink-0">
                    <Mail className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-neutral-800 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@careerfocusinc.com"
                      className="text-neutral-500 hover:text-brand-blue-500 cursor-pointer transition-colors duration-200"
                    >
                      info@careerfocusinc.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50 shrink-0">
                    <MapPin className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-neutral-800 mb-1">
                      Locations
                    </h3>
                    <ul className="space-y-2 text-neutral-500 text-sm">
                      <li>
                        <span className="font-medium text-neutral-700">
                          Tampa (HQ)
                        </span>
                        <br />
                        550 N. Reo St, Suite 300
                        <br />
                        Tampa, FL 33609
                      </li>
                      <li>
                        <span className="font-medium text-neutral-700">
                          Wesley Chapel
                        </span>
                        <br />
                        6013 Wesley Grove Blvd, Suite 202
                        <br />
                        Wesley Chapel, FL 33544
                        <br />
                        (813) 995-8473
                      </li>
                      <li>
                        <span className="font-medium text-neutral-700">
                          Mailing Address
                        </span>
                        <br />
                        P.O. Box 151333
                        <br />
                        Tampa, FL 33684
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50 shrink-0">
                    <Clock className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-neutral-800 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-neutral-500 text-sm">
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
      <section className="py-20 md:py-28 section-cool">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="overline text-brand-blue-500 mb-3">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-neutral-500 text-lg">
              Find answers to common questions about our programs and services.
            </p>
          </div>
          <div className="card-premium p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base font-semibold text-neutral-800 text-left font-heading">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 text-base leading-relaxed">
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
