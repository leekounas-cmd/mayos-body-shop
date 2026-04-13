'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/mayos-logo.webp"
                alt="Mayo's Body Shop — Dallas TX"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#A0A0A0] hover:text-white text-sm tracking-wider uppercase transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+12147440766"
                className="text-[#A0A0A0] hover:text-white text-sm transition-colors"
              >
                (214) 744-0766
              </a>
              <Link
                href="/get-estimate"
                className="bg-[#E53E3E] hover:bg-[#C53030] text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200 uppercase tracking-wider"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+12147440766"
                className="text-[#E53E3E] font-semibold text-sm"
              >
                Call Now
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="text-white p-1"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col"
          >
            <div className="flex items-center justify-between px-4 h-16">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <Image
                  src="/images/mayos-logo.webp"
                  alt="Mayo's Body Shop"
                  width={110}
                  height={55}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-1"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-3xl font-bold tracking-wider uppercase hover:text-[#E53E3E] transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex flex-col items-center gap-4 mt-4"
              >
                <Link
                  href="/get-estimate"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold px-8 py-4 uppercase tracking-widest text-lg transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+12147440766"
                  className="text-[#A0A0A0] text-lg"
                >
                  (214) 744-0766
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
