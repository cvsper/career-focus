import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Adult Services", href: "/adult-services" },
    { label: "Youth Services", href: "/youth-services" },
  ],
  organization: [
    { label: "About", href: "/about" },
    { label: "Join Us", href: "/join-us" },
    { label: "Partners", href: "/community-partners" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Accent stripe */}
      <div className="h-1 bg-gradient-to-r from-brand-blue-500 via-brand-green-500 to-brand-green-300" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block text-2xl font-extrabold font-heading mb-2 cursor-pointer">
              <span className="text-brand-green-400">Career</span>
              <span className="text-white">Focus</span>
            </a>
            <p className="text-brand-green-400 font-heading text-lg font-semibold mb-4">
              Discover, Develop, Succeed.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-[260px]">
              Empowering individuals to achieve meaningful employment and self-sufficiency since 2013.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-500 font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group inline-flex items-center text-neutral-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-500 font-semibold mb-5">Organization</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group inline-flex items-center text-neutral-300 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs tracking-widest uppercase text-neutral-500 font-semibold mb-5">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <a href="tel:8134358829" className="hover:text-white transition-colors duration-200 cursor-pointer">(813) 435-8829</a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <a href="mailto:info@careerfocusinc.com" className="hover:text-white transition-colors duration-200 cursor-pointer">info@careerfocusinc.com</a>
                  <a href="mailto:info@careerfocusinc.org" className="hover:text-white transition-colors duration-200 cursor-pointer text-xs text-neutral-500">info@careerfocusinc.org</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>Tampa &middot; Wesley Chapel</span>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/careerfocusinc" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/careerfocusinc/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/careerfocusinc" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-neutral-400 hover:bg-brand-green-500 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} Career Focus Inc. 501(c)(3) EIN: 80-0893641. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs">Built with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
