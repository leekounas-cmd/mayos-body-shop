'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  aspectRatio?: string
  isPlaceholder?: boolean
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  aspectRatio = 'aspect-[4/3]',
  isPlaceholder = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)

    const onMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX)
    }
    const onUp = () => {
      isDragging.current = false
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    updatePosition(touch.clientX)

    const onMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX)
    const onEnd = () => {
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }

    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none cursor-col-resize ${aspectRatio} bg-[#1A1A1A]`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {isPlaceholder ? (
        <>
          {/* Placeholder after */}
          <div className="absolute inset-0 bg-[#2A2A2A] flex items-center justify-center">
            <span className="text-[#A0A0A0] text-xs text-center px-4">AFTER — {afterAlt}</span>
          </div>
          {/* Placeholder before (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div
              className="absolute inset-0 bg-[#1A1A1A] flex items-center justify-center"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw' }}
            >
              <span className="text-[#A0A0A0] text-xs text-center px-4">BEFORE — {beforeAlt}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Real after image (full width, sits underneath) */}
          <div className="absolute inset-0">
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Real before image (clipped to left side) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div
              className="absolute inset-0"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw' }}
            >
              <Image
                src={beforeSrc}
                alt={beforeAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </>
      )}

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 uppercase tracking-wider pointer-events-none">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-[#E53E3E]/90 text-white text-xs px-2 py-1 uppercase tracking-wider pointer-events-none">
        After
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#E53E3E] flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
