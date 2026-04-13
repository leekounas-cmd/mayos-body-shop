import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Red accent bar at top */}
      <div className="h-1.5 bg-[#E53E3E]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/mayos-logo.svg"
                alt="Mayo's Body Shop Dallas"
                width={160}
                height={64}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[#AAAAAA] text-sm leading-relaxed mb-5">
              Family-owned auto body shop serving Dallas since 1998. We treat every car like it&apos;s our own.
            </p>
            <a
              href="https://www.instagram.com/mayos.bodyshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#333333] bg-transparent px-3 py-2 text-[#AAAAAA] hover:border-[#E53E3E] hover:text-white text-sm font-bold uppercase tracking-wider transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @mayos.bodyshop
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-5 pb-2 border-b-2 border-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[#AAAAAA] hover:text-[#E53E3E] text-sm transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-5 pb-2 border-b-2 border-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/faq', label: 'FAQ' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
                { href: '/get-estimate', label: 'Get Estimate' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#AAAAAA] hover:text-[#E53E3E] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-5 pb-2 border-b-2 border-[#333333]" style={{ fontFamily: 'var(--font-heading)' }}>
              Visit Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="text-[#AAAAAA]">
                <p>314 Harbin St</p>
                <p>Dallas, TX 75208</p>
              </div>
              <a
                href="tel:+12147440766"
                className="block text-white font-bold text-xl hover:text-[#E53E3E] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                (214) 744-0766
              </a>
              <div className="text-[#AAAAAA] space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-white font-semibold">9AM – 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">9AM – 4PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <Link
                href="/get-estimate"
                className="block text-center border-2 border-[#E53E3E] bg-[#E53E3E] text-white text-xs font-bold py-3 uppercase tracking-wider hover:bg-transparent hover:text-[#E53E3E] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-[#333333] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#666666] text-xs">
            © {new Date().getFullYear()} Mayo&apos;s Body Shop. All rights reserved. Dallas, TX 75208
          </p>
          <div className="flex items-center gap-1.5">
            {[1,2,3,4,5].map((s) => (
              <svg key={s} className="w-3.5 h-3.5 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="text-[#AAAAAA] text-xs ml-1">205 reviews · Google</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
