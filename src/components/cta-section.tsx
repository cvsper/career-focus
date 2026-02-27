import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

interface CtaSectionProps {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  showPhone?: boolean
  variant?: 'blue' | 'green'
  imageSrc?: string
  angleTop?: boolean
}

export function CtaSection({ title, subtitle, primaryCta, secondaryCta, showPhone, variant = 'green', imageSrc, angleTop }: CtaSectionProps) {
  const isGreen = variant === 'green'

  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${isGreen ? 'bg-brand-green-600' : 'bg-brand-blue-950'} ${angleTop ? 'section-angle-top' : ''}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {imageSrc ? (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
                {title}
              </h2>
              <p className={`text-lg mb-10 ${isGreen ? 'text-green-100/80' : 'text-blue-100/80'}`}>
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className={`rounded-full h-14 px-10 bg-white font-bold shadow-none hover:bg-white/90 transition-all duration-300 ${isGreen ? 'text-brand-green-600' : 'text-brand-blue-950'}`}>
                  <a href={primaryCta.href}>{primaryCta.label}</a>
                </Button>
                {secondaryCta && (
                  <Button asChild size="lg" className={`rounded-full h-14 px-10 bg-white font-bold shadow-none hover:bg-white/90 transition-all duration-300 ${isGreen ? 'text-brand-green-600' : 'text-brand-blue-950'}`}>
                    <a href={secondaryCta.href}>{secondaryCta.label}</a>
                  </Button>
                )}
              </div>
              {showPhone && (
                <div className={`mt-5 flex items-center gap-2 text-sm ${isGreen ? 'text-green-100/80' : 'text-blue-100/80'}`}>
                  <Phone className="h-4 w-4" />
                  <a href="tel:8134358829" className="hover:underline">(813) 435-8829</a>
                </div>
              )}
            </div>

            {/* Image column */}
            <div className="-mt-8 flex justify-center md:justify-end">
              <Image
                src={imageSrc}
                alt=""
                width={560}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              {title}
            </h2>
            <p className={`text-lg mb-10 ${isGreen ? 'text-green-100/80' : 'text-blue-100/80'}`}>
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className={`rounded-full h-14 px-10 bg-white font-bold shadow-none hover:bg-white/90 transition-all duration-300 ${isGreen ? 'text-brand-green-600' : 'text-brand-blue-950'}`}>
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
              {secondaryCta && (
                <Button asChild size="lg" className={`rounded-full h-14 px-10 bg-white font-bold shadow-none hover:bg-white/90 transition-all duration-300 ${isGreen ? 'text-brand-green-600' : 'text-brand-blue-950'}`}>
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </div>
            {showPhone && (
              <div className={`mt-5 flex items-center gap-2 text-sm ${isGreen ? 'text-green-100/80' : 'text-blue-100/80'}`}>
                <Phone className="h-4 w-4" />
                <a href="tel:8134358829" className="hover:underline">(813) 435-8829</a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
