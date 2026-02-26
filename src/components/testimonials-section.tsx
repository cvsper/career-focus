"use client"

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import type { Testimonial } from "@/components/ui/testimonials-columns-1"
import { motion } from "motion/react"

const testimonials: Testimonial[] = [
  {
    text: "Participating in the Career Camp was a game-changer for me. I gained real skills and confidence that changed the trajectory of my career.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Career Camp Participant",
    role: "Youth Program Graduate",
  },
  {
    text: "Career Focus helped me find supported employment that matched my strengths. The ongoing coaching made all the difference in my success.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marcus T.",
    role: "Supported Employment Client",
  },
  {
    text: "The vocational evaluation opened my eyes to career paths I never considered. Now I'm thriving in a role that truly fits me.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Angela R.",
    role: "Vocational Evaluation Client",
  },
  {
    text: "Quentin and Jalen completed the summer career camp and successfully finished their on-the-job training at Walgreens.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Walgreens Partnership",
    role: "Career Camp Success Story",
  },
  {
    text: "The work incentive counseling gave me clarity on how employment affects my benefits. I felt confident taking the next step.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Diana L.",
    role: "Benefits Counseling Client",
  },
  {
    text: "As an employer partner, Career Focus provides us with motivated, pre-screened candidates who are ready to contribute from day one.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Regional Hiring Manager",
    role: "Employer Partner",
  },
  {
    text: "Bella successfully completed her on-the-job training at Selah East Stables as an equestrian trainer, gaining skills in horse handling and grooming.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Selah East Stables",
    role: "OJT Success Story",
  },
  {
    text: "The self-advocacy training taught my son how to communicate his needs in the workplace. He's more independent than ever.",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Parent of Youth Client",
    role: "Youth Services Family",
  },
  {
    text: "Career Focus didn't just help me find a job — they helped me build a career. The post-secondary planning set me on the right path.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Jaylen W.",
    role: "Post-Secondary Planning Graduate",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <p className="overline text-brand-green-500 border border-brand-green-200 py-1 px-4 rounded-lg">
              Testimonials
            </p>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-800 mt-5 text-center">
            What People Say
          </h2>
          <p className="text-center mt-5 text-neutral-500 text-lg">
            Real stories from the individuals, families, and partners we serve.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
