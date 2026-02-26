import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-xl mb-4">
              <span className="text-brand-green-400">Career</span>
              <span className="text-brand-blue-300">FocusInc.</span>
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Empowering individuals to achieve meaningful employment.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wide mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/adult-services" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">Adult Services</a></li>
              <li><a href="/youth-services" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">Youth Services</a></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wide mb-4">Organization</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">About</a></li>
              <li><a href="/join-us" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">Join Us</a></li>
              <li><a href="/community-partners" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">Partners</a></li>
              <li><a href="/contact" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wide mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-neutral-400 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:8134358829" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">(813) 435-8829</a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@careerfocusinc.org" className="hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:rounded-md focus-visible:outline-none">info@careerfocusinc.org</a>
              </li>
              <li className="flex items-start gap-2 text-neutral-400 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Wesley Chapel, FL<br />Tampa, FL<br />Orlando, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Career Focus Inc. 501(c)(3). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
