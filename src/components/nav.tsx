"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavLink =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: { label: string; href: string }[] }

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: [
      { label: "Adult Services", href: "/adult-services" },
      { label: "Youth Services", href: "/youth-services" },
    ],
  },
  { label: "Partners", href: "/community-partners" },
  { label: "Join Us", href: "/join-us" },
  { label: "Contact", href: "/contact" },
]

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 font-heading font-bold text-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
          <span className="text-brand-green-500">Career</span>
          <span className="text-brand-blue-500">FocusInc.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 text-neutral-700 hover:text-brand-blue-500 font-medium transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border border-neutral-200 py-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <a key={child.href} href={child.href} className="block px-4 py-2 text-neutral-700 hover:bg-brand-blue-50 hover:text-brand-blue-500 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.href} className="text-neutral-700 hover:text-brand-blue-500 font-medium transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none">
                {link.label}
              </a>
            )
          )}
          <Button asChild className="bg-brand-blue-500 hover:bg-brand-blue-600 font-semibold">
            <a href="/contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile slide panel */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 p-6 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="space-y-2">
                <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wide">{link.label}</p>
                {link.children.map((child) => (
                  <a key={child.href} href={child.href} className="block text-lg text-neutral-700 py-2 cursor-pointer transition-colors duration-200 hover:text-brand-blue-500 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none" onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </a>
                ))}
              </div>
            ) : (
              <a key={link.href} href={link.href} className="text-lg text-neutral-700 py-2 cursor-pointer transition-colors duration-200 hover:text-brand-blue-500 focus-visible:ring-2 focus-visible:ring-brand-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-md focus-visible:outline-none" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            )
          )}
          <Button asChild size="lg" className="mt-auto bg-brand-blue-500 hover:bg-brand-blue-600 font-semibold w-full">
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      )}
    </header>
  )
}
