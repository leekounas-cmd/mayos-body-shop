import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/mayos-logo.webp"
                alt="Mayo's Body Shop — Dallas TX Est. 1998"
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
              Family-owned auto body shop serving Dallas for 25+ years. We treat every car like it&apos;s our own.
            </p>
            <a
              href="https://www.instagram.com/mayos.bodyshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#A0A0A0] hover:text-white text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @mayos.bodyshop
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#A0A0A0] hover:text-white text-sm transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-2">
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
                    className="text-[#A0A0A0] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm text-[#A0A0A0]">
              <div>
                <p>314 Harbin St</p>
                <p>Dallas, TX 75208</p>
              </div>
              <div>
                <a href="tel:+12147440766" className="text-white hover:text-[#E53E3E] transition-colors font-medium">
                  (214) 744-0766
                </a>
              </div>
              <div>
                <p className="font-medium text-white text-xs tracking-wider uppercase mb-1">Hours</p>
                <p>Mon–Fri: 9AM – 7PM</p>
                <p>Sat: 9AM – 4PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            <Link
              href="/get-estimate"
              className="mt-6 inline-block bg-[#E53E3E] hover:bg-[#C53030] text-white text-sm font-semibold px-5 py-3 uppercase tracking-wider transition-colors duration-200"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2A2A2A] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A0A0A0] text-xs">
            © {new Date().getFullYear()} Mayo&apos;s Body Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[#F59E0B] text-xs">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
            <span className="text-[#A0A0A0] ml-1">118+ Reviews on Google</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
