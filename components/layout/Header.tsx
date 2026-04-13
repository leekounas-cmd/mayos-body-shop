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
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white border-b border-[#E5E5E5] shadow-sm'
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <Image
                src="/images/mayos-logo.svg"
                alt="Mayo's Body Shop Dallas"
                width={180}
                height={72}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#555555] hover:text-[#111111] text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+12147440766"
                className="flex items-center gap-2 text-[#111111] text-sm font-semibold hover:text-[#E53E3E] transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (214) 744-0766
              </a>
              <Link
                href="/get-estimate"
                className="bg-[#E53E3E] hover:bg-[#C53030] text-white text-sm font-bold px-5 py-2.5 uppercase tracking-wider transition-colors duration-150 cursor-pointer"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden items-center gap-3">
              <a href="tel:+12147440766" className="text-[#E53E3E] font-bold text-sm cursor-pointer">
                Call Now
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="text-[#111111] p-1 cursor-pointer"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Red accent bar at very bottom of header */}
        <div className="h-0.5 bg-[#E53E3E]" />
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-[#E5E5E5]">
              <Image src="/images/mayos-logo.svg" alt="Mayo's Body Shop" width={160} height={64} className="h-10 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="text-[#111111] p-1 cursor-pointer" aria-label="Close menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 border-b border-[#F5F5F5] text-[#111111] text-2xl font-bold uppercase tracking-wide hover:text-[#E53E3E] transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 mt-4 flex flex-col gap-3">
              <Link
                href="/get-estimate"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold py-4 uppercase tracking-widest text-base transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+12147440766"
                className="block text-center border-2 border-[#111111] text-[#111111] font-bold py-4 uppercase tracking-widest text-base cursor-pointer"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                (214) 744-0766
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
