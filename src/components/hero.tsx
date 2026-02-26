import Image from "next/image"
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

  return (
    <section className={`relative overflow-hidden ${compact ? 'py-20 md:py-28' : 'py-24 md:py-36'}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-800 via-brand-blue-600 to-brand-blue-700" />

      {/* Mesh overlay for depth */}
      <div className="absolute inset-0 opacity-60" style={{
        background: 'radial-gradient(ellipse at 30% 20%, rgba(51,119,255,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(47,160,64,0.15) 0%, transparent 40%)'
      }} />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern-light" />

      {/* Decorative shapes */}
      <div className="absolute top-12 right-[10%] h-72 w-72 rounded-full bg-brand-blue-400/10 blur-3xl animate-float-gentle" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-green-400/8 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-[5%] h-2 w-2 rounded-full bg-brand-amber-400/50 animate-pulse-soft" />
      <div className="absolute top-1/3 right-[20%] h-1.5 w-1.5 rounded-full bg-white/30 animate-pulse-soft delay-300" />

      {/* Content */}
      <div className={`relative z-10 mx-auto max-w-7xl px-4 md:px-8 ${hasImage ? 'grid md:grid-cols-2 gap-12 items-center' : ''}`}>
        {/* Text side */}
        <div>
          {overline && (
            <p className="overline text-brand-amber-300 mb-5 animate-fade-in-up">
              {overline}
            </p>
          )}
          <h1 className="font-heading font-extrabold text-white text-[clamp(2.75rem,5vw+1rem,5rem)] leading-[1.05] tracking-tight max-w-[18ch] mb-6 animate-fade-in-up delay-100">
            {title}
          </h1>
          <p className="text-brand-blue-100/90 text-[clamp(1.125rem,1.5vw,1.3rem)] leading-relaxed max-w-[52ch] mb-10 animate-fade-in-up delay-200">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <Button asChild size="lg" className="bg-white text-brand-blue-600 hover:bg-brand-blue-50 font-bold min-h-[52px] px-8 rounded-xl shadow-lg shadow-black/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            {secondaryCta && (
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold min-h-[52px] px-8 rounded-xl backdrop-blur-sm transition-all duration-300">
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
          {stats && stats.length > 0 && (
            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 animate-fade-in-up delay-400">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-5xl font-extrabold text-white tracking-tight">{stat.value}</p>
                  <p className="text-brand-blue-200/80 text-sm font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image side */}
        {hasImage && (
          <div className="hidden md:block animate-fade-in-up delay-300">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-white/10">
                <Image
                  src={imageSrc}
                  alt={imageAlt || ""}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  priority
                />
                {/* Subtle overlay to blend with blue theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/20 via-transparent to-transparent" />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-xl bg-brand-amber-400/20 -z-10" />
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl bg-brand-green-400/15 -z-10" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
