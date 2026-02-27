import Image from "next/image"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  imageSrc?: string
}

export function TeamMemberCard({ name, title: role, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden text-center">
      {/* Photo */}
      <div className="pt-8 flex justify-center">
        {imageSrc ? (
          <div className="h-32 w-32 rounded-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={`Photo of ${name}`}
              width={128}
              height={128}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div
            className="h-32 w-32 rounded-full flex items-center justify-center bg-brand-blue-900 text-white text-4xl font-heading font-bold"
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
