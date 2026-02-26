import Image from "next/image"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  imageSrc?: string
}

export function TeamMemberCard({ name, title: role, bio, imageSrc }: TeamMemberProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
      <div className="mx-auto mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-3 border-brand-blue-50">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`Photo of ${name}`}
            width={120}
            height={120}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-blue-50 text-brand-blue-500 font-heading text-2xl font-bold" aria-label={`Initials of ${name}`} role="img">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <h3 className="font-heading text-xl font-semibold text-neutral-800 mb-1">
        {name}
      </h3>
      <p className="text-sm font-medium uppercase tracking-wide text-brand-blue-500 mb-3">
        {role}
      </p>
      <p className="text-neutral-600 text-base leading-relaxed text-left">
        {bio}
      </p>
    </div>
  )
}
