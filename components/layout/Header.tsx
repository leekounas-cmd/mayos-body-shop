'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Red accent bar — same as El Toro's gold bar */}
      <div className="h-2 bg-[#E53E3E]" />

      <header className="sticky top-0 z-50 bg-white border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/mayos-logo.svg"
                alt="Mayo's Body Shop Dallas"
                width={180}
                height={72}
                className="h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#111111] transition-colors hover:bg-[#E53E3E] hover:text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+12147440766"
                className="flex items-center gap-2 border-2 border-[#111111] bg-white px-4 py-2 font-bold uppercase tracking-wider text-[#111111] text-sm shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#E53E3E]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <svg className="w-4 h-4 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (214) 744-0766
              </a>
              <Link
                href="/get-estimate"
                className="flex items-center border-2 border-[#111111] bg-[#E53E3E] px-5 py-2 font-bold uppercase tracking-wider text-white text-sm shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+12147440766"
                className="border-2 border-[#E53E3E] bg-[#E53E3E] text-white font-bold text-xs uppercase tracking-wider px-3 py-1.5"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Call Now
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="border-2 border-[#111111] bg-white w-10 h-10 flex items-center justify-center"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col border-r-0">
          {/* Red bar at top */}
          <div className="h-2 bg-[#E53E3E]" />

          <div className="flex items-center justify-between px-6 h-16 border-b-2 border-[#111111]">
            <Image src="/images/mayos-logo.svg" alt="Mayo's Body Shop" width={160} height={64} className="h-10 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="border-2 border-[#111111] w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4 gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 border-b-2 border-[#111111] text-[#111111] text-2xl font-bold uppercase tracking-wide hover:text-[#E53E3E] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 mt-6 flex flex-col gap-3">
            <Link
              href="/get-estimate"
              onClick={() => setMobileOpen(false)}
              className="block text-center border-2 border-[#111111] bg-[#E53E3E] text-white font-bold py-4 uppercase tracking-widest text-base shadow-[4px_4px_0px_#111111]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+12147440766"
              className="block text-center border-2 border-[#111111] bg-white text-[#111111] font-bold py-4 uppercase tracking-widest text-base shadow-[4px_4px_0px_#111111]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              (214) 744-0766
            </a>
          </div>
        </div>
      )}
    </>
  )
}
