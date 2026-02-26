import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface CtaSectionProps {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  showPhone?: boolean
}

export function CtaSection({ title, subtitle, primaryCta, secondaryCta, showPhone }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-800 via-brand-blue-600 to-brand-blue-700" />
      <div className="absolute inset-0 bg-dot-pattern-light" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-[10%] h-64 w-64 rounded-full bg-brand-blue-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-[10%] h-48 w-48 rounded-full bg-brand-green-400/8 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">{title}</h2>
        <p className="text-brand-blue-100/80 text-lg max-w-2xl mx-auto mb-10">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-brand-blue-600 hover:bg-brand-blue-50 font-bold min-h-[52px] px-8 rounded-xl shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold min-h-[52px] px-8 rounded-xl backdrop-blur-sm transition-all duration-300">
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
          {showPhone && (
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold min-h-[52px] px-8 rounded-xl backdrop-blur-sm transition-all duration-300">
              <a href="tel:8134358829">
                <Phone className="h-4 w-4 mr-2" />
                (813) 435-8829
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
