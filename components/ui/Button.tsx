import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-2 border-[#111111] bg-[#E53E3E] text-white font-bold uppercase tracking-wider shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#111111]',
  secondary:
    'border-2 border-[#111111] bg-white text-[#111111] font-bold uppercase tracking-wider shadow-[3px_3px_0px_#111111] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#E53E3E]',
  ghost:
    'border-2 border-transparent text-[#E53E3E] font-bold uppercase tracking-wider hover:border-[#E53E3E] transition-colors duration-150',
}

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 text-sm ${variantClasses[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={{ fontFamily: 'var(--font-heading)' }}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={base} style={{ fontFamily: 'var(--font-heading)' }}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base} style={{ fontFamily: 'var(--font-heading)' }}>
      {children}
    </button>
  )
}
