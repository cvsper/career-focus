interface TestimonialProps {
  quote: string
  name: string
  source?: string
}

export function Testimonial({ quote, name, source }: TestimonialProps) {
  return (
    <blockquote className="rounded-r-lg border-l-4 border-brand-green-500 bg-neutral-50 px-8 py-6">
      <p className="text-neutral-700 text-lg italic leading-relaxed mb-4 relative">
        <span className="absolute -top-4 -left-2 font-heading text-5xl text-brand-green-500/30" aria-hidden="true">&ldquo;</span>
        {quote}
      </p>
      <footer>
        <cite className="not-italic">
          <span className="font-semibold text-neutral-800">{name}</span>
          {source && <span className="text-neutral-500 ml-2">{source}</span>}
        </cite>
      </footer>
    </blockquote>
  )
}
