export function BeforeAfterShowcase() {
  const pairs = [
    { label: 'Collision Repair', before: 'bg-[#888888]', after: 'bg-[#CCCCCC]' },
    { label: 'Auto Painting', before: 'bg-[#777777]', after: 'bg-[#DDDDDD]' },
    { label: 'Bumper Repair', before: 'bg-[#999999]', after: 'bg-[#EEEEEE]' },
  ]

  return (
    <section className="bg-[#111111] py-16 sm:py-24 border-b-2 border-[#E53E3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block border-2 border-[#E53E3E] bg-[#E53E3E] px-4 py-1 text-sm font-bold uppercase tracking-widest text-white shadow-[3px_3px_0px_#ffffff30] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Work
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold uppercase text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            See the Difference
          </h2>
          <p className="text-white/60 mt-3 max-w-md mx-auto">
            Real repairs, real results. Every car that leaves our shop looks like nothing ever happened.
          </p>
        </div>

        {/* Before / After pairs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pairs.map((pair) => (
            <div key={pair.label} className="border-2 border-[#333333] shadow-[4px_4px_0px_#E53E3E]">
              {/* Label */}
              <div className="border-b-2 border-[#333333] bg-[#1A1A1A] px-4 py-2.5">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60" style={{ fontFamily: 'var(--font-heading)' }}>
                  {pair.label}
                </span>
              </div>

              {/* Images side by side */}
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative">
                  {/* TODO: Replace with actual BEFORE photo from @mayos.bodyshop */}
                  <div className={`${pair.before} aspect-[4/3] w-full flex items-end justify-start p-2`}>
                    <span className="border-2 border-[#111111] bg-[#111111] px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                      Before
                    </span>
                  </div>
                </div>
                {/* After */}
                <div className="relative border-l-2 border-[#333333]">
                  {/* TODO: Replace with actual AFTER photo from @mayos.bodyshop */}
                  <div className={`${pair.after} aspect-[4/3] w-full flex items-end justify-start p-2`}>
                    <span className="border-2 border-[#E53E3E] bg-[#E53E3E] px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                      After
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-white bg-transparent px-6 py-3 font-bold uppercase tracking-wider text-white text-sm shadow-[3px_3px_0px_#E53E3E] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#E53E3E] hover:bg-white hover:text-[#111111]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
