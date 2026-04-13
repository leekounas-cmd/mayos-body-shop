'use client'

import { useState } from 'react'

type FormState = {
  name: string
  phone: string
  email: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  damage: string
  hasInsurance: boolean | null
  howHeard: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  damage: '',
  hasInsurance: null,
  howHeard: '',
}

export function EstimateForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Connect to email API / backend
    console.log('Estimate form submission:', form)

    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-10 text-center">
        <div className="w-16 h-16 bg-[#E53E3E] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-2xl font-bold uppercase mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          Got It. We&apos;ll Be In Touch.
        </h3>
        <p className="text-[#A0A0A0] mb-2">
          We usually respond within a few hours during business hours.
        </p>
        <p className="text-[#A0A0A0] text-sm">
          Need it faster? Call us directly:{' '}
          <a href="tel:+12147440766" className="text-[#E53E3E] font-semibold hover:text-white transition-colors">
            (214) 744-0766
          </a>
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-[#0A0A0A] border border-[#2A2A2A] text-white placeholder-[#A0A0A0]/50 px-4 py-3 text-sm focus:outline-none focus:border-[#E53E3E] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Contact info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">
            Your Name <span className="text-[#E53E3E]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={set('name')}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">
            Phone <span className="text-[#E53E3E]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="(214) 555-0100"
            value={form.phone}
            onChange={set('phone')}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="john@email.com"
          value={form.email}
          onChange={set('email')}
          className={inputClass}
        />
      </div>

      {/* Vehicle info */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">
          Vehicle <span className="text-[#E53E3E]">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          <input
            type="text"
            required
            placeholder="Year"
            value={form.vehicleYear}
            onChange={set('vehicleYear')}
            className={inputClass}
          />
          <input
            type="text"
            required
            placeholder="Make"
            value={form.vehicleMake}
            onChange={set('vehicleMake')}
            className={inputClass}
          />
          <input
            type="text"
            required
            placeholder="Model"
            value={form.vehicleModel}
            onChange={set('vehicleModel')}
            className={inputClass}
          />
        </div>
      </div>

      {/* Damage description */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">
          Describe the Damage <span className="text-[#E53E3E]">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us what happened and what needs to be fixed..."
          value={form.damage}
          onChange={set('damage')}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Insurance toggle */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-3">
          Are you going through insurance?
        </label>
        <div className="flex gap-3">
          {[
            { value: true, label: 'Yes' },
            { value: false, label: 'No — paying out of pocket' },
          ].map((opt) => (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, hasInsurance: opt.value }))}
              className={`flex-1 py-3 px-4 text-sm border transition-colors ${
                form.hasInsurance === opt.value
                  ? 'bg-[#E53E3E] border-[#E53E3E] text-white'
                  : 'bg-[#0A0A0A] border-[#2A2A2A] text-[#A0A0A0] hover:border-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* How they heard */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">
          How did you hear about us?
        </label>
        <select
          value={form.howHeard}
          onChange={set('howHeard')}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select one</option>
          <option value="google">Google Search</option>
          <option value="google-maps">Google Maps</option>
          <option value="instagram">Instagram</option>
          <option value="referral">Friend / Family Referral</option>
          <option value="insurance">Insurance Company</option>
          <option value="drive-by">Drove By</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#E53E3E] hover:bg-[#C53030] disabled:opacity-60 text-white font-bold py-4 uppercase tracking-widest text-sm transition-all duration-200 hover:scale-[1.01] disabled:hover:scale-100"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {loading ? 'Sending...' : 'Request My Free Estimate'}
      </button>

      <p className="text-[#A0A0A0] text-xs text-center">
        No commitment. We&apos;ll respond within a few hours.
      </p>
    </form>
  )
}
