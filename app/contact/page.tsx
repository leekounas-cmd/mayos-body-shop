import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata(
  "Contact Us",
  "Contact Mayo's Body Shop in Dallas, TX. Located at 314 Harbin St, Dallas 75208. Call (214) 744-0766. Mon–Fri 9AM–7PM, Sat 9AM–4PM.",
  "/contact"
)

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Red hero bar */}
      <div className="bg-[#E53E3E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">Get In Touch</p>
          <h1
            className="text-5xl sm:text-6xl font-bold uppercase leading-tight text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contact Us
          </h1>
          <p className="text-white/80 mt-3 text-lg">Mon–Fri 9AM–7PM · Sat 9AM–4PM</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-10">
              <div>
                <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-widest mb-3">Location</p>
                <p className="text-[#111111] font-semibold text-lg">314 Harbin St</p>
                <p className="text-[#111111] font-semibold text-lg">Dallas, TX 75208</p>
              </div>

              <div>
                <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-widest mb-3">Phone</p>
                <a href="tel:+12147440766" className="text-[#111111] font-bold text-2xl hover:text-[#E53E3E] transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-heading)' }}>
                  (214) 744-0766
                </a>
                <p className="text-[#555555] text-sm mt-1">Click to call — fastest way to reach us</p>
              </div>

              <div>
                <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-widest mb-3">Hours</p>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                    <span className="text-[#111111] font-medium">Monday – Friday</span>
                    <span className="text-[#555555]">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                    <span className="text-[#111111] font-medium">Saturday</span>
                    <span className="text-[#555555]">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#111111] font-medium">Sunday</span>
                    <span className="text-[#555555]">Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-widest mb-3">Instagram</p>
                <a
                  href="https://www.instagram.com/mayos.bodyshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:text-[#E53E3E] transition-colors font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @mayos.bodyshop
                </a>
              </div>

              {/* Map */}
              <div>
                <p className="text-[#E53E3E] text-xs font-bold uppercase tracking-widest mb-3">Map</p>
                <div className="aspect-video border border-[#E5E5E5] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.0!2d-96.8!3d32.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z314+Harbin+St%2C+Dallas%2C+TX+75208!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mayo's Body Shop location map"
                  />
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-[#111111] text-2xl font-bold uppercase mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                Send a Message
              </h2>
              <ContactForm />

              <div className="mt-8 p-6 bg-[#FEF2F2] border border-[#E53E3E]/20">
                <p className="text-[#555555] text-sm mb-3">Need an estimate?</p>
                <a
                  href="/get-estimate"
                  className="text-[#E53E3E] font-semibold hover:text-[#C53030] transition-colors text-sm uppercase tracking-wider cursor-pointer"
                >
                  Use our estimate form instead →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
