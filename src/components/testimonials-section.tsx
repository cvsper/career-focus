"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
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

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const prev = useCallback(() => {
    setDirection(-1)
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }, [])

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      )
    }, 6000)
  }, [])

  const stopAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Auto-rotate on mount
  useEffect(() => {
    startAutoRotate()
    return () => stopAutoRotate()
  }, [startAutoRotate, stopAutoRotate])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prev()
        stopAutoRotate()
      } else if (e.key === "ArrowRight") {
        next()
        stopAutoRotate()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [prev, next, stopAutoRotate])

  return (
    <section className="bg-warm-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div
          onMouseEnter={stopAutoRotate}
          onMouseLeave={startAutoRotate}
        >
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 min-h-[280px]">
            {/* Large index number */}
            <div className="hidden md:block text-[120px] font-light leading-none text-neutral-900/10 font-heading select-none shrink-0">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>

            {/* Content area */}
            <div className="flex-1 relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -24 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl font-light leading-relaxed tracking-tight text-neutral-800 mb-8">
                    &ldquo;{testimonials[activeIndex].text}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-800">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-sm text-brand-blue-500 uppercase tracking-wide font-medium">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-neutral-200">
            {/* Line indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1)
                    setActiveIndex(i)
                  }}
                  className={`py-5 transition-all duration-300 cursor-pointer`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className={`block h-px transition-all duration-300 ${
                    i === activeIndex
                      ? "w-12 bg-brand-blue-900"
                      : "w-6 bg-neutral-300 group-hover:bg-neutral-400"
                  }`} />
                </button>
              ))}
            </div>

            {/* Count + arrows */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400 font-mono tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="h-11 w-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="h-11 w-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
