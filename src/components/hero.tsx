import { Button } from "@/components/ui/button"

interface HeroProps {
  overline?: string
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: { value: string; label: string }[]
  compact?: boolean
}

export function Hero({ overline, title, subtitle, primaryCta, secondaryCta, stats, compact }: HeroProps) {
  return (
    <section className={`bg-gradient-to-br from-brand-blue-700 via-brand-blue-500 to-brand-blue-600 text-white ${compact ? 'py-16 md:py-20' : 'py-16 md:py-24'}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {overline && (
          <p className="text-brand-blue-100 text-sm font-semibold uppercase tracking-widest mb-4">
            {overline}
          </p>
        )}
        <h1 className="font-heading font-bold text-[clamp(2.5rem,5vw+1rem,4.75rem)] leading-[1.05] tracking-tight max-w-[16ch] mb-6">
          {title}
        </h1>
        <p className="text-brand-blue-100 text-[clamp(1.125rem,1.5vw,1.25rem)] leading-relaxed max-w-[50ch] mb-8">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-white text-brand-blue-500 hover:bg-neutral-100 font-semibold min-h-12 px-8">
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold min-h-12 px-8">
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
        {stats && stats.length > 0 && (
          <div className="mt-12 grid grid-cols-2 md:flex md:gap-12 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold">{stat.value}</p>
                <p className="text-brand-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
