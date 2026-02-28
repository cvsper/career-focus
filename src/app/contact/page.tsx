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
    question: "What services does Career Focus Inc. offer?",
    answer:
      "Career Focus Inc. offers comprehensive employment services including supported employment (job placement and coaching for people with disabilities), on-the-job training, vocational evaluations, supported self-employment, benefits counseling, paid work-based learning for youth, career camp programs (winter, spring, and summer), post-secondary education planning, self-advocacy training, and direct job placement. All services are available across Florida through our Tampa and Wesley Chapel offices.",
  },
  {
    question: "Who is eligible for Career Focus programs?",
    answer:
      "Career Focus Inc. serves four primary groups: youth in transition (ages 16-24), adults with disabilities, veterans, and adults re-entering the workforce. Eligibility varies by program — some services are funded through Vocational Rehabilitation referrals, while others are open to any qualifying individual. Contact us at (813) 435-8829 for a free consultation to determine which programs match your situation.",
  },
  {
    question: "How do I get started with Career Focus?",
    answer:
      "Contact us by calling (813) 435-8829 or filling out the contact form on our website. We'll schedule an initial consultation to assess your needs and match you with the right services. Our offices are in Tampa (HQ) and Wesley Chapel, Florida.",
  },
  {
    question: "What areas does Career Focus serve in Florida?",
    answer:
      "Career Focus Inc. has two offices in Florida: Tampa (headquarters at 550 N. Reo St, Suite 300) and Wesley Chapel (6013 Wesley Grove Blvd, Suite 202). While our offices are in Central Florida, we serve individuals throughout the region. Call (813) 435-8829 to discuss services in your area.",
  },
  {
    question: "Is there a cost for Career Focus services?",
    answer:
      "Career Focus Inc. is a 501(c)(3) nonprofit organization. Many of our services are funded through government grants, Vocational Rehabilitation partnerships, and charitable contributions, making them available at no cost to eligible participants. We also administer the Employment SUCCESS Grant to help clients with financial barriers to employment. Contact us to learn about your eligibility and any costs for specific programs.",
  },
  {
    question: "What is the Employment SUCCESS Grant?",
    answer:
      "The Employment SUCCESS Grant is a financial assistance program administered by Career Focus Inc. to help clients overcome unexpected expenses or barriers related to their employment journey. If you are a Career Focus client and need support with employment-related costs — such as work attire, transportation, certifications, or tools — contact us to discuss available options.",
  },
  {
    question: "How can employers partner with Career Focus?",
    answer:
      "Employers who support inclusive hiring can partner with Career Focus Inc. to access a pool of talented individuals — including youth in transition and adults with disabilities — who bring diverse perspectives and skills. Career Focus provides job readiness training, ongoing workplace support, and mentorship for placed employees. Contact us at (813) 435-8829 to schedule a partnership meeting.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Started with Career Focus Employment Services",
  description:
    "Step-by-step guide to accessing Career Focus Inc.'s employment services in Florida.",
  step: [
    {
      "@type": "HowToStep",
      name: "Contact Career Focus",
      text: "Call (813) 435-8829 or fill out the contact form at our website to request an initial consultation.",
    },
    {
      "@type": "HowToStep",
      name: "Initial Assessment",
      text: "Meet with a Career Focus employment specialist for a comprehensive assessment of your skills, interests, goals, and support needs.",
    },
    {
      "@type": "HowToStep",
      name: "Service Matching",
      text: "Based on your assessment, your specialist recommends the right services — whether that's supported employment, OJT, vocational evaluation, or career camp.",
    },
    {
      "@type": "HowToStep",
      name: "Begin Your Program",
      text: "Start your personalized employment program with ongoing coaching, support, and advocacy from the Career Focus team.",
    },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us — Get Started With Career Services",
  description:
    "Contact Career Focus Inc. for employment services, career development, and job training in Florida. Call (813) 435-8829 or fill out our contact form. Offices in Tampa and Wesley Chapel.",
  openGraph: {
    title: "Contact Career Focus Inc.",
    description:
      "Get started with employment services. Call (813) 435-8829 or visit us in Tampa or Wesley Chapel.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
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
              <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-500 mb-3">Send a Message</p>
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
              <div className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-6">
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
              <div className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-6">
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
              <div className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-6">
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
              <div className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-6">
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
      <section className="py-20 md:py-28 bg-brand-blue-50/50">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="font-heading text-xs font-semibold tracking-[0.12em] uppercase text-brand-blue-500 mb-3">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-neutral-500 text-lg">
              Find answers to common questions about our programs and services.
            </p>
          </div>
          <div className="bg-white border border-neutral-100 rounded-2xl shadow-sm p-6 md:p-8">
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
