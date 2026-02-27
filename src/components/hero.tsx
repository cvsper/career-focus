import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  overline?: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: { value: string; label: string }[]
  compact?: boolean
  imageSrc?: string
  imageAlt?: string
}

export function Hero({ overline, title, subtitle, primaryCta, secondaryCta, stats, compact, imageSrc, imageAlt }: HeroProps) {
  const hasImage = !!imageSrc
  const showStats = !compact && stats && stats.length > 0

  return (
    <section className="relative overflow-hidden">
      {/* Background layer */}
      {hasImage ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt || ""}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/95 via-brand-blue-900/70 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-blue-900" />
      )}

      {/* Content */}
      <div className={`relative z-10 mx-auto max-w-7xl px-4 md:px-8 ${
        compact
          ? "py-20 md:py-28"
          : "min-h-[70vh] flex items-center py-24 md:py-36"
      }`}>
        <div>
          <h1 className="text-massive font-heading font-extrabold text-white">
            {title}
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-white/80 leading-relaxed max-w-[52ch]">
            {subtitle}
          </p>

          {overline && (
            <p className="mt-4 text-sm text-white/60">
              {overline}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-white text-brand-blue-700 hover:bg-brand-blue-50 shadow-lg shadow-black/10 transition-all duration-300">
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 text-white font-semibold transition-colors duration-200 hover:text-white/80"
              >
                {secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      {showStats && (
        <div className="relative z-10 bg-brand-green-600">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 flex flex-wrap items-center justify-center gap-y-3">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-6 hidden md:block text-green-100/40 select-none" aria-hidden="true">|</span>
                )}
                <div className="text-center px-4">
                  <p className="font-heading text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-green-100 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
