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
    'bg-[#E53E3E] hover:bg-[#C53030] text-white font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02]',
  secondary:
    'border border-white/30 hover:border-white text-white font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-white/5',
  ghost:
    'text-[#A0A0A0] hover:text-white uppercase tracking-wider transition-colors duration-200 underline-offset-4 hover:underline',
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
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
