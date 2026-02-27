"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavLink =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: { label: string; href: string; description?: string }[] }

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: [
      { label: "Adult Services", href: "/adult-services", description: "Employment programs for adults" },
      { label: "Youth Services", href: "/youth-services", description: "Career development for young people" },
    ],
  },
  { label: "Partners", href: "/community-partners" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact", href: "/contact" },
]

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/90 backdrop-blur-xl border-b-2 border-brand-blue-500"
        : "bg-white/95 backdrop-blur-sm"
    }`}>
      <nav className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 font-heading font-extrabold text-[26px] tracking-tight cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
          <span className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 bg-clip-text text-transparent">CareerFocus</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-3.5 py-2 text-neutral-600 hover:text-brand-blue-500 font-medium text-[15px] transition-colors duration-200 cursor-pointer rounded-lg focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200" role="menu">
                  <div className="bg-white rounded-2xl shadow-elevated border border-neutral-100 py-2 px-1 min-w-[240px]">
                    {link.children.map((child) => (
                      <a key={child.href} href={child.href} role="menuitem" className="flex flex-col gap-0.5 px-4 py-3 rounded-xl text-neutral-700 hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
                        <span className="font-semibold text-[15px]">{child.label}</span>
                        {child.description && (
                          <span className="text-xs text-neutral-400">{child.description}</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.href} className="px-3.5 py-2 text-neutral-600 hover:text-brand-blue-500 font-medium text-[15px] transition-colors duration-200 cursor-pointer rounded-lg focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
                {link.label}
              </a>
            )
          )}
          <div className="ml-3">
            <Button asChild className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-full h-10 px-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-px">
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2.5 rounded-xl hover:bg-neutral-100 cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40">
          {/* Full-screen dark overlay */}
          <div className="absolute inset-0 bg-brand-blue-900 overflow-y-auto flex flex-col p-8 pt-12">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) =>
                link.children ? (
                  <div key={link.label} className="space-y-3">
                    <p className="text-sm uppercase tracking-widest text-white/40 font-medium px-1">{link.label}</p>
                    {link.children.map((child, childIdx) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block text-3xl font-heading font-bold text-white cursor-pointer transition-all duration-200 hover:text-white/80 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-900 focus-visible:rounded-md focus-visible:outline-none animate-slide-in-left"
                        style={{ animationDelay: `${(i + childIdx) * 80}ms`, animationFillMode: 'both' }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-3xl font-heading font-bold text-white cursor-pointer transition-all duration-200 hover:text-white/80 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-900 focus-visible:rounded-md focus-visible:outline-none animate-slide-in-left"
                    style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
            <div className="mt-auto pt-10">
              <Button asChild size="lg" className="bg-white text-brand-blue-900 hover:bg-white/90 font-bold w-full rounded-full h-14 text-lg shadow-lg transition-all duration-200">
                <a href="/contact" onClick={() => setMobileOpen(false)}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
