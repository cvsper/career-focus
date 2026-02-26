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
        ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
        : "bg-white/95 backdrop-blur-sm"
    }`}>
      <nav className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 font-heading font-bold text-[22px] tracking-tight cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
          <span className="text-gradient-green">Career</span>
          <span className="text-gradient-blue">Focus</span>
          <span className="text-neutral-400 font-medium text-lg">Inc.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 px-3.5 py-2 text-neutral-600 hover:text-neutral-900 font-medium text-[15px] transition-colors duration-200 cursor-pointer rounded-lg hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-2xl shadow-elevated border border-neutral-100 py-2 px-1 min-w-[240px]">
                    {link.children.map((child) => (
                      <a key={child.href} href={child.href} className="flex flex-col gap-0.5 px-4 py-3 rounded-xl text-neutral-700 hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
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
              <a key={link.href} href={link.href} className="px-3.5 py-2 text-neutral-600 hover:text-neutral-900 font-medium text-[15px] transition-colors duration-200 cursor-pointer rounded-lg hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
                {link.label}
              </a>
            )
          )}
          <div className="ml-3">
            <Button asChild className="bg-brand-blue-500 hover:bg-brand-blue-600 font-semibold rounded-xl h-10 px-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-px">
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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

          {/* Panel */}
          <div className="relative bg-white h-full overflow-y-auto p-6 flex flex-col gap-2 animate-fade-in-up" style={{ animationDuration: '0.25s' }}>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="space-y-1 py-2">
                  <p className="overline text-neutral-400 px-3 mb-2">{link.label}</p>
                  {link.children.map((child) => (
                    <a key={child.href} href={child.href} className="block px-3 py-2.5 text-lg text-neutral-700 cursor-pointer rounded-xl transition-all duration-200 hover:bg-brand-blue-50 hover:text-brand-blue-600 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none" onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a key={link.href} href={link.href} className="px-3 py-2.5 text-lg text-neutral-700 cursor-pointer rounded-xl transition-all duration-200 hover:bg-brand-blue-50 hover:text-brand-blue-600 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              )
            )}
            <div className="mt-auto pt-6">
              <Button asChild size="lg" className="bg-brand-blue-500 hover:bg-brand-blue-600 font-semibold w-full rounded-xl h-12">
                <a href="/contact" onClick={() => setMobileOpen(false)}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
