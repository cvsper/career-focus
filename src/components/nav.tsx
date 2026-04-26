"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown, HelpCircle } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { cn } from "@/lib/utils"
import { startTour } from "@/lib/tour"

type NavLink =
  | { label: string; href: string; tour?: string; children?: undefined }
  | { label: string; href?: undefined; tour?: string; children: { label: string; href: string; description?: string }[] }

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", tour: "about" },
  {
    label: "Services",
    tour: "services",
    children: [
      { label: "Adult Services", href: "/adult-services", description: "Employment programs for adults" },
      { label: "Youth Services", href: "/youth-services", description: "Career development for young people" },
    ],
  },
  { label: "Partners", href: "/community-partners", tour: "partners" },
  { label: "Join Us", href: "/join-us", tour: "join" },
  { label: "Contact", href: "/contact", tour: "contact" },
]

export function Nav() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    const t = setTimeout(() => startTour(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.header
      ref={ref}
      className="sticky inset-x-0 top-0 z-50 w-full"
    >
      {/* Desktop nav */}
      <motion.nav
        animate={{
          width: scrolled ? "min(880px, 92%)" : "100%",
          borderRadius: scrolled ? 9999 : 0,
          y: scrolled ? 12 : 0,
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05)"
            : "none",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 40 }}
        className={cn(
          "relative z-[60] mx-auto hidden lg:flex items-center justify-between px-5 py-2",
          scrolled ? "bg-white/85" : "bg-white"
        )}
      >
        {/* Logo */}
        <a href="/" className="relative z-20 flex-shrink-0 font-heading font-extrabold text-[24px] tracking-tight cursor-pointer">
          <span className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 bg-clip-text text-transparent">CareerFocus</span>
        </a>

        {/* Center nav items */}
        <div
          className="flex items-center gap-0.5"
          onMouseLeave={() => setHovered(null)}
        >
          {navLinks.map((link, idx) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  onMouseEnter={() => setHovered(idx)}
                  data-tour={link.tour ? `nav-${link.tour}` : undefined}
                  className="relative px-4 py-2 text-[15px] font-medium text-neutral-600 cursor-pointer flex items-center gap-1"
                >
                  {hovered === idx && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 rounded-full bg-neutral-100"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  <ChevronDown className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200">
                  <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 py-2 px-1 min-w-[240px]">
                    {link.children.map((child) => (
                      <a key={child.href} href={child.href} className="flex flex-col gap-0.5 px-4 py-3 rounded-xl text-neutral-700 hover:bg-brand-blue-50 hover:text-brand-blue-600 transition-all duration-200 cursor-pointer">
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
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(idx)}
                data-tour={link.tour ? `nav-${link.tour}` : undefined}
                className="relative px-4 py-2 text-[15px] font-medium text-neutral-600 cursor-pointer"
              >
                {hovered === idx && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-full bg-neutral-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            )
          )}
        </div>

        {/* CTA + Help */}
        <div className="relative z-20 flex items-center gap-2">
          <button
            onClick={() => startTour(true)}
            className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-200 cursor-pointer"
            aria-label="Take a tour"
            title="Take a tour"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
          <a
            href="/contact"
            data-tour="nav-cta"
            className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold text-sm rounded-full h-10 px-6 flex items-center shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started
          </a>
        </div>
      </motion.nav>

      {/* Mobile nav */}
      <motion.nav
        animate={{
          width: scrolled ? "92%" : "100%",
          borderRadius: scrolled ? 16 : 0,
          y: scrolled ? 8 : 0,
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04)"
            : "none",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 40 }}
        className={cn(
          "relative z-50 mx-auto flex lg:hidden items-center justify-between px-4 py-3",
          scrolled ? "bg-white/85" : "bg-white"
        )}
      >
        <a href="/" className="font-heading font-extrabold text-[22px] tracking-tight cursor-pointer">
          <span className="bg-gradient-to-r from-brand-blue-600 to-brand-green-500 bg-clip-text text-transparent">CareerFocus</span>
        </a>
        <button
          className="p-2 rounded-xl hover:bg-neutral-100 cursor-pointer transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 z-40"
          >
            <div className="absolute inset-0 bg-brand-blue-900 overflow-y-auto flex flex-col p-8 pt-24">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) =>
                  link.children ? (
                    <div key={link.label} className="space-y-3">
                      <p className="text-sm uppercase tracking-widest text-white/40 font-medium px-1">{link.label}</p>
                      {link.children.map((child, childIdx) => (
                        <motion.a
                          key={child.href}
                          href={child.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (i + childIdx) * 0.06, duration: 0.3 }}
                          className="block text-3xl font-heading font-bold text-white cursor-pointer hover:text-white/80 transition-colors duration-200"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="text-3xl font-heading font-bold text-white cursor-pointer hover:text-white/80 transition-colors duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  )
                )}
              </div>
              <div className="mt-auto pt-10">
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center bg-white text-brand-blue-900 hover:bg-white/90 font-bold w-full rounded-full h-14 text-lg shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
