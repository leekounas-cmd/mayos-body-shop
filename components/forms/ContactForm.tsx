'use client'

import { useState } from 'react'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log('Contact form:', form)
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#F5F5F5] border border-[#E5E5E5] p-8 text-center">
        <div className="w-12 h-12 bg-[#E53E3E] flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#111111] font-bold uppercase text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent</h3>
        <p className="text-[#555555] text-sm">
          We&apos;ll get back to you soon. Or call{' '}
          <a href="tel:+12147440766" className="text-[#E53E3E] font-bold cursor-pointer">(214) 744-0766</a>
        </p>
      </div>
    )
  }

  const inputClass = 'w-full bg-white border border-[#E5E5E5] text-[#111111] placeholder-[#AAAAAA] px-4 py-3 text-sm focus:outline-none focus:border-[#E53E3E] transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-[#555555] mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name <span className="text-[#E53E3E]">*</span></label>
          <input type="text" required placeholder="Your name" value={form.name} onChange={set('name')} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input type="tel" placeholder="(214) 555-0100" value={form.phone} onChange={set('phone')} className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Email <span className="text-[#E53E3E]">*</span></label>
        <input type="email" required placeholder="your@email.com" value={form.email} onChange={set('email')} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Message <span className="text-[#E53E3E]">*</span></label>
        <textarea required rows={5} placeholder="What can we help you with?" value={form.message} onChange={set('message')} className={`${inputClass} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#E53E3E] hover:bg-[#C53030] disabled:opacity-60 text-white font-bold py-4 uppercase tracking-widest text-sm transition-colors cursor-pointer"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
