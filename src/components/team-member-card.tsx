import Image from "next/image"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  imageSrc?: string
}

export function TeamMemberCard({ name, title: role, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="card-premium p-8 text-center group">
      {/* Avatar */}
      <div className="mx-auto mb-5 h-[100px] w-[100px] overflow-hidden rounded-full ring-4 ring-brand-blue-50 group-hover:ring-brand-blue-100 transition-all duration-300">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Photo of ${name}`}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 text-brand-blue-500 font-heading text-xl font-bold" aria-label={`Initials of ${name}`} role="img">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-heading text-lg font-bold text-neutral-800 mb-1">
        {name}
      </h3>
      <p className="overline text-brand-blue-500 mb-4">
        {role}
      </p>
      <p className="text-neutral-500 text-sm leading-relaxed text-left">
        {bio}
      </p>
    </div>
  )
}
