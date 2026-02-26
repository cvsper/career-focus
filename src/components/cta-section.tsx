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
    <section className="bg-gradient-to-br from-brand-blue-700 via-brand-blue-500 to-brand-blue-600 text-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-brand-blue-100 text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-brand-blue-500 hover:bg-neutral-100 font-semibold min-h-12 px-8">
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold min-h-12 px-8">
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
          {showPhone && (
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold min-h-12 px-8">
              <a href="tel:8134358829">
                <Phone className="h-4 w-4 mr-2" />
                (813) 435-8829
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
