import { type LucideIcon, ArrowRight, Check } from "lucide-react"
import Image from "next/image"

interface ServiceCardProps {
  icon?: LucideIcon
  title: string
  description: string
  href: string
  benefits?: string[]
  variant?: 'light' | 'dark'
  imageSrc?: string
}

export function ServiceCard({ icon: Icon, title, description, href, benefits, variant = 'dark', imageSrc }: ServiceCardProps) {
  if (variant === 'light') {
    return (
      <a
        href={href}
        aria-label={`Learn more about ${title}`}
        className="group relative overflow-hidden bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md hover:border-brand-blue-200 transition-all duration-300 p-8 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        {imageSrc ? (
          <div className="mb-5">
            <Image
              src={imageSrc}
              alt={title}
              width={80}
              height={80}
              className="rounded-xl h-20 w-20 object-cover"
            />
          </div>
        ) : Icon ? (
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-50">
            <Icon className="h-7 w-7 text-brand-blue-500" />
          </div>
        ) : null}

        <h3 className="font-heading text-xl font-bold text-neutral-800 mb-3">
          {title}
        </h3>

        <p className="text-neutral-500 text-base leading-relaxed mb-5">
          {description}
        </p>

        {benefits && benefits.length > 0 && (
          <ul className="mb-6 space-y-2.5 flex-1">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm text-neutral-600">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-green-500" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        <span className="inline-flex items-center text-brand-blue-500 font-semibold text-sm mt-auto transition-colors duration-200">
          Learn more
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </a>
    )
  }

  return (
    <a
      href={href}
      aria-label={`Learn more about ${title}`}
      className="group relative overflow-hidden border border-brand-blue-800 bg-gradient-to-b from-brand-blue-900/60 to-brand-blue-900/30 rounded-xl hover:border-brand-blue-600 transition-all duration-300 p-8 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {/* Corner accent squares */}
      <div className="absolute top-3 left-3 h-3 w-3 bg-brand-green-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-3 right-3 h-3 w-3 bg-brand-green-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {imageSrc ? (
        <div className="mb-5">
          <Image
            src={imageSrc}
            alt={title}
            width={80}
            height={80}
            className="rounded-xl h-20 w-20 object-cover"
          />
        </div>
      ) : Icon ? (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-800/50">
          <Icon className="h-7 w-7 text-brand-blue-300" />
        </div>
      ) : null}

      <h3 className="font-heading text-xl font-bold text-white mb-3">
        {title}
      </h3>

      <div className="h-1 w-16 bg-brand-green-500 rounded-full mb-4" />

      <p className="text-brand-blue-200 text-base leading-relaxed mb-5">
        {description}
      </p>

      {benefits && benefits.length > 0 && (
        <ul className="mb-6 space-y-2.5 flex-1">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-brand-blue-200/80">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-green-400" />
              {benefit}
            </li>
          ))}
        </ul>
      )}

      <span className="inline-flex items-center text-white font-semibold text-sm mt-auto transition-colors duration-200">
        Learn more
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  )
}
