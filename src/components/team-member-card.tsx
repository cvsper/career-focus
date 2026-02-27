import Image from "next/image"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  imageSrc?: string
}

export function TeamMemberCard({ name, title: role, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      {/* Photo */}
      <div className="pt-8 flex justify-center">
        {imageSrc ? (
          <div className="relative">
            <div className="h-32 w-32 rounded-full overflow-hidden ring-3 ring-brand-green-100 group-hover:ring-brand-green-300 transition-all duration-500">
              <Image
                src={imageSrc}
                alt={`Photo of ${name}`}
                width={128}
                height={128}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ) : (
          <div
            className="h-32 w-32 rounded-full flex items-center justify-center bg-brand-blue-900 text-white text-4xl font-heading font-bold ring-3 ring-brand-blue-200 group-hover:ring-brand-blue-400 transition-all duration-500"
            aria-label={`Initials of ${name}`}
            role="img"
          >
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-neutral-800">
          {name}
        </h3>
        <p className="text-brand-green-600 text-sm font-semibold uppercase tracking-wide mt-1">
          {role}
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed mt-3">
          {bio}
        </p>
      </div>
    </div>
  )
}
