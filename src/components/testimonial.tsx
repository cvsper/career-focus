import { Quote } from "lucide-react"

interface TestimonialProps {
  quote: string
  name: string
  source?: string
}

export function Testimonial({ quote, name, source }: TestimonialProps) {
  return (
    <blockquote className="relative">
      {/* Decorative quote icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green-50">
        <Quote className="h-6 w-6 text-brand-green-500" />
      </div>

      <p className="text-neutral-700 text-xl md:text-2xl font-heading font-medium leading-relaxed mb-6 tracking-tight">
        &ldquo;{quote}&rdquo;
      </p>

      <footer className="flex items-center gap-3">
        <div className="h-px flex-1 max-w-[40px] bg-brand-green-300" />
        <cite className="not-italic">
          <span className="font-semibold text-neutral-800">{name}</span>
          {source && <span className="text-neutral-400 ml-2 text-sm">{source}</span>}
        </cite>
      </footer>
    </blockquote>
  )
}
