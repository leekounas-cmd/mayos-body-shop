'use client'

import { useState, useRef, useCallback } from 'react'

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

type UploadedFile = {
  file: File
  preview: string
  id: string
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
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const addFiles = useCallback((incoming: FileList | null) => {
    if (!incoming) return
    const newFiles: UploadedFile[] = []
    for (const file of Array.from(incoming)) {
      if (!file.type.startsWith('image/')) continue
      if (files.length + newFiles.length >= 10) break
      newFiles.push({
        file,
        preview: URL.createObjectURL(file),
        id: `${file.name}-${Date.now()}-${Math.random()}`,
      })
    }
    setFiles((prev) => [...prev, ...newFiles])
  }, [files.length])

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const removed = prev.find((f) => f.id === id)
      if (removed) URL.revokeObjectURL(removed.preview)
      return prev.filter((f) => f.id !== id)
    })
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    addFiles(e.dataTransfer.files)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Connect to email API / backend (Resend recommended)
    console.log('Estimate submission:', form, 'Files:', files.map((f) => f.file.name))
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#F5F5F5] border border-[#E5E5E5] p-10 text-center">
        <div className="w-14 h-14 bg-[#E53E3E] flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#111111] text-2xl font-bold uppercase mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Got It. We&apos;ll Be In Touch.
        </h3>
        <p className="text-[#555555] mb-2">We usually respond within a few hours during business hours.</p>
        <p className="text-sm text-[#555555]">
          Need it faster?{' '}
          <a href="tel:+12147440766" className="text-[#E53E3E] font-bold hover:underline cursor-pointer">
            Call (214) 744-0766
          </a>
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-white border border-[#E5E5E5] text-[#111111] placeholder-[#AAAAAA] px-4 py-3 text-sm focus:outline-none focus:border-[#E53E3E] transition-colors'
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-[#555555] mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name <span className="text-[#E53E3E]">*</span></label>
          <input type="text" required placeholder="John Smith" value={form.name} onChange={set('name')} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone <span className="text-[#E53E3E]">*</span></label>
          <input type="tel" required placeholder="(214) 555-0100" value={form.phone} onChange={set('phone')} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input type="email" placeholder="john@email.com" value={form.email} onChange={set('email')} className={inputClass} />
      </div>

      {/* Vehicle */}
      <div>
        <label className={labelClass}>Vehicle <span className="text-[#E53E3E]">*</span></label>
        <div className="grid grid-cols-3 gap-3">
          <input type="text" required placeholder="Year" value={form.vehicleYear} onChange={set('vehicleYear')} className={inputClass} />
          <input type="text" required placeholder="Make" value={form.vehicleMake} onChange={set('vehicleMake')} className={inputClass} />
          <input type="text" required placeholder="Model" value={form.vehicleModel} onChange={set('vehicleModel')} className={inputClass} />
        </div>
      </div>

      {/* Damage */}
      <div>
        <label className={labelClass}>Describe the Damage <span className="text-[#E53E3E]">*</span></label>
        <textarea
          required
          rows={4}
          placeholder="What happened? What needs to be fixed?"
          value={form.damage}
          onChange={set('damage')}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Photo upload */}
      <div>
        <label className={labelClass}>
          Upload Photos
          <span className="text-[#AAAAAA] font-normal normal-case ml-1">(up to 10 images)</span>
        </label>

        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-none p-6 text-center cursor-pointer transition-colors ${
            dragOver
              ? 'border-[#E53E3E] bg-[#FEF2F2]'
              : 'border-[#E5E5E5] bg-[#FAFAFA] hover:border-[#E53E3E] hover:bg-[#FEF2F2]'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.heic,.heif"
            multiple
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
          <svg className="w-8 h-8 text-[#AAAAAA] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-[#555555] text-sm font-medium">
            {dragOver ? 'Drop photos here' : 'Drag & drop photos, or click to select'}
          </p>
          <p className="text-[#AAAAAA] text-xs mt-1">JPG, PNG, HEIC accepted · {files.length}/10 added</p>
        </div>

        {/* Preview grid */}
        {files.length > 0 && (
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-5 gap-2">
            {files.map((f) => (
              <div key={f.id} className="relative group aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.preview} alt={f.file.name} className="w-full h-full object-cover border border-[#E5E5E5]" />
                <button
                  type="button"
                  onClick={() => removeFile(f.id)}
                  className="absolute top-0.5 right-0.5 w-5 h-5 bg-[#E53E3E] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  aria-label="Remove photo"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Insurance toggle */}
      <div>
        <label className={labelClass}>Going through insurance?</label>
        <div className="flex gap-3">
          {[
            { value: true, label: 'Yes — filing a claim' },
            { value: false, label: 'No — paying out of pocket' },
          ].map((opt) => (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, hasInsurance: opt.value }))}
              className={`flex-1 py-3 px-3 text-sm font-semibold border-2 transition-colors cursor-pointer ${
                form.hasInsurance === opt.value
                  ? 'bg-[#E53E3E] border-[#E53E3E] text-white'
                  : 'bg-white border-[#E5E5E5] text-[#555555] hover:border-[#E53E3E]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* How heard */}
      <div>
        <label className={labelClass}>How did you hear about us?</label>
        <select value={form.howHeard} onChange={set('howHeard')} className={`${inputClass} cursor-pointer`}>
          <option value="">Select one</option>
          <option value="google">Google Search</option>
          <option value="google-maps">Google Maps</option>
          <option value="instagram">Instagram</option>
          <option value="referral">Friend / Family</option>
          <option value="insurance">Insurance Company</option>
          <option value="drive-by">Drove By</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#E53E3E] hover:bg-[#C53030] disabled:opacity-60 text-white font-bold py-4 uppercase tracking-widest text-sm transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {loading ? 'Sending...' : 'Request My Free Estimate'}
      </button>

      <p className="text-[#AAAAAA] text-xs text-center">
        No commitment. We&apos;ll respond within a few hours.
      </p>
    </form>
  )
}
