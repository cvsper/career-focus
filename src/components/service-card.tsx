import { LucideIcon, ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  benefits?: string[]
}

export function ServiceCard({ icon: Icon, title, description, href, benefits }: ServiceCardProps) {
  return (
    <a href={href} className="group card-premium p-8 flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50 group-hover:from-brand-blue-100 group-hover:to-brand-blue-50 transition-all duration-300">
        <Icon className="h-7 w-7 text-brand-blue-500" />
      </div>
      <h3 className="font-heading text-xl font-bold text-neutral-800 mb-2 group-hover:text-brand-blue-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-neutral-500 text-base leading-relaxed mb-5">
        {description}
      </p>
      {benefits && benefits.length > 0 && (
        <ul className="mb-6 space-y-2.5 flex-1">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-neutral-600">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-green-400" />
              {benefit}
            </li>
          ))}
        </ul>
      )}
      <span className="inline-flex items-center text-brand-blue-500 font-semibold text-sm mt-auto group-hover:text-brand-blue-600 transition-colors duration-200">
        Learn more
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  )
}
