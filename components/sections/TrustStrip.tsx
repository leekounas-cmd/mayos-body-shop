const stats = [
  {
    value: '25+',
    label: 'Years in Business',
    sub: 'Serving Dallas since 1998',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '205',
    label: '5-Star Reviews',
    sub: 'Rated 4.9 out of 5 on Google',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    value: 'All',
    label: 'Insurance Accepted',
    sub: 'We deal with the adjuster for you',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Family Owned',
    sub: 'Mayo & his sons — no franchise',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

export function TrustStrip() {
  return (
    <section className="border-b-2 border-[#111111] bg-[#E53E3E] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-white bg-white/10 text-white">
                {stat.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wider leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.value} {stat.label}
                </p>
                <p className="text-white/70 text-xs hidden sm:block">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
