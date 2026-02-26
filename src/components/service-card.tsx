import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  benefits?: string[]
}

export function ServiceCard({ icon: Icon, title, description, href, benefits }: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-brand-blue-100 hover:-translate-y-0.5 cursor-pointer">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-50">
        <Icon className="h-6 w-6 text-brand-blue-500" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 text-base leading-relaxed mb-4">
        {description}
      </p>
      {benefits && benefits.length > 0 && (
        <ul className="mb-4 space-y-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-600">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-green-500" />
              {benefit}
            </li>
          ))}
        </ul>
      )}
      <a href={href} className="inline-flex items-center text-brand-blue-500 font-semibold hover:underline cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
        Learn more
        <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}
