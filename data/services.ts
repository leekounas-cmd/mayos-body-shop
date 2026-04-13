export type Service = {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string[]
  keyword: string
  icon: string
  heroHeadline: string
  heroSub: string
  process: { step: number; title: string; description: string }[]
  faq: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: 'collision-repair',
    title: 'Collision Repair',
    shortTitle: 'Collision Repair',
    description: 'Full collision restoration, accident damage, and insurance work handled start to finish.',
    longDescription: [
      'After an accident, you need a shop that knows what they\'re doing — and fast. Mayo\'s Body Shop has been restoring collision-damaged vehicles in Dallas since 1998. From minor fender benders to major structural damage, we handle it all.',
      'We work directly with your insurance company, communicate with the adjuster so you don\'t have to, and keep you updated every step of the way. Our goal is simple: get your car back to exactly how it was before — or better.',
      'Every collision repair at Mayo\'s includes a full damage assessment, precision panel alignment, OEM-quality parts when possible, and a paint match that\'s invisible to the eye. We don\'t cut corners. Your car deserves the real fix.',
    ],
    keyword: 'collision repair Dallas TX',
    icon: '🔧',
    heroHeadline: 'COLLISION REPAIR IN DALLAS',
    heroSub: 'From fender benders to total reconstruction — done right, done fast.',
    process: [
      { step: 1, title: 'Free Estimate', description: 'Bring your car in or send us photos. We assess the damage and give you a clear, honest quote — no surprises.' },
      { step: 2, title: 'Drop Off', description: 'Drop off your vehicle. We\'ll coordinate with your insurance and keep you updated throughout.' },
      { step: 3, title: 'We Repair', description: 'Our team gets to work — structural alignment, panel repair, paint matching. Every detail handled.' },
      { step: 4, title: 'Pick Up Like New', description: 'We call you when it\'s ready. Your car looks the way it\'s supposed to.' },
    ],
    faq: [
      { question: 'Do you work with my insurance company?', answer: 'Yes — we work with all insurance companies. We\'ll handle the adjuster communication and paperwork so you don\'t have to deal with it.' },
      { question: 'How long does collision repair take?', answer: 'It depends on the extent of the damage. Minor repairs can take a few days. Major structural work may take 1–2 weeks. We\'ll give you a realistic timeline upfront.' },
      { question: 'Do you offer a warranty on collision repairs?', answer: 'Yes. We stand behind our work. Ask us about our warranty when you come in for your estimate.' },
      { question: 'Can you fix frame damage from a collision?', answer: 'Absolutely. We have frame straightening equipment and the experience to restore structural integrity after serious accidents.' },
    ],
  },
  {
    slug: 'auto-painting',
    title: 'Auto Painting',
    shortTitle: 'Auto Painting',
    description: 'Complete paint jobs, color matching, touch-ups, and custom paint that looks factory-perfect.',
    longDescription: [
      'Your car\'s paint is the first thing people see. Whether you\'re restoring after damage, fixing faded paint, or going for something custom — Mayo\'s delivers a finish that looks like it rolled off the factory floor.',
      'We use professional-grade paint systems and precise color-matching technology to blend perfectly with your vehicle\'s original finish. No obvious patches, no color shifts. Just a clean, consistent result.',
      'From single-panel touch-ups to full vehicle repaints, every job gets the same attention to detail. We prep right, spray right, and finish right — every time.',
    ],
    keyword: 'auto paint shop Dallas TX',
    icon: '🎨',
    heroHeadline: 'AUTO PAINTING IN DALLAS',
    heroSub: 'Precision color matching. Factory-quality finish. No shortcuts.',
    process: [
      { step: 1, title: 'Color Match Estimate', description: 'We evaluate your vehicle and use your factory color code to dial in the exact match before any paint is sprayed.' },
      { step: 2, title: 'Surface Prep', description: 'Proper prep is everything. We sand, prime, and mask the vehicle to ensure a flawless base.' },
      { step: 3, title: 'Paint & Clear Coat', description: 'Professional-grade paint and clear coat applied in our controlled environment. No dust, no runs.' },
      { step: 4, title: 'Final Polish', description: 'We buff and polish the finished surface so it\'s smooth, glossy, and ready to turn heads.' },
    ],
    faq: [
      { question: 'Can you match my car\'s exact color?', answer: 'Yes. We use your vehicle\'s factory paint code combined with professional color-matching technology to get an exact match.' },
      { question: 'How long does a full paint job take?', answer: 'A full repaint typically takes 3–5 business days depending on panel count and prep needed. Touch-ups can sometimes be done same or next day.' },
      { question: 'Do you do custom paint?', answer: 'Yes. We can discuss custom colors, two-tone finishes, and other custom options. Come in and we\'ll talk through what you have in mind.' },
      { question: 'Will the new paint match the rest of my car?', answer: 'That\'s our specialty. Our color matching process ensures the repainted panels blend seamlessly with your vehicle\'s existing finish.' },
    ],
  },
  {
    slug: 'bumper-repair',
    title: 'Bumper Repair',
    shortTitle: 'Bumper Repair',
    description: 'Bumper replacement, repair, plastic welding, and painting — back to like new.',
    longDescription: [
      'Bumper damage is one of the most common repairs we do — and one we\'ve perfected over 25+ years. Whether it\'s a cracked bumper cover, a scuff that won\'t buff out, or a completely crushed bumper, we fix it right.',
      'We repair and replace both front and rear bumpers. For plastic bumper covers, we use plastic welding when possible to save you money on a full replacement. When replacement is the better call, we\'ll tell you honestly.',
      'Every bumper repair includes color-matched paint so the finished product looks like it never happened. That\'s the standard we hold ourselves to.',
    ],
    keyword: 'bumper repair Dallas TX',
    icon: '🚗',
    heroHeadline: 'BUMPER REPAIR IN DALLAS',
    heroSub: 'Cracked, scraped, or crushed — we fix bumpers right.',
    process: [
      { step: 1, title: 'Damage Assessment', description: 'We inspect the bumper and determine whether repair or replacement is the right move — and give you an honest recommendation.' },
      { step: 2, title: 'Repair or Replace', description: 'Plastic welding for repairable damage. Replacement with quality parts when needed. No upselling.' },
      { step: 3, title: 'Color Match & Paint', description: 'We match your factory color exactly and paint the bumper to blend perfectly with your vehicle.' },
      { step: 4, title: 'Reinstall & Inspect', description: 'Bumper goes back on, properly aligned and fitted. We inspect the final result before you pick up.' },
    ],
    faq: [
      { question: 'Can you repair a cracked plastic bumper?', answer: 'Often yes. We use plastic welding techniques to repair cracked bumper covers without full replacement, saving you money.' },
      { question: 'How much does bumper repair cost?', answer: 'It varies based on the damage. Minor scuffs can be very affordable. Major cracks or full replacement will cost more. Bring it in for a free, honest estimate.' },
      { question: 'How long does bumper repair take?', answer: 'Most bumper repairs are 1–2 days. We\'ll give you a specific timeline when we assess the damage.' },
      { question: 'Will the paint match?', answer: 'Yes. Color matching is a core part of every bumper repair we do. The finished result should be seamless.' },
    ],
  },
  {
    slug: 'dent-scratch-repair',
    title: 'Dent & Scratch Repair',
    shortTitle: 'Dent & Scratch',
    description: 'Minor dents, scratches, dings, and door dings removed and painted to match.',
    longDescription: [
      'Door dings, parking lot scratches, hail damage, small dents — they\'re annoying, but they\'re fixable. Mayo\'s handles all minor dent and scratch repairs with the same craftsmanship we bring to bigger jobs.',
      'Depending on the damage, we may use paintless dent repair (PDR) techniques for dents with no paint damage, or traditional body work with color-matched paint for deeper scratches and gouges.',
      'No damage is too small for us to take seriously. Bring it in, we\'ll tell you exactly what it takes to make it disappear.',
    ],
    keyword: 'dent repair Dallas TX',
    icon: '✨',
    heroHeadline: 'DENT & SCRATCH REPAIR IN DALLAS',
    heroSub: 'Door dings, scratches, dents — made to disappear.',
    process: [
      { step: 1, title: 'Inspect the Damage', description: 'We look at the dent or scratch and determine the best repair method — PDR or traditional body work.' },
      { step: 2, title: 'Dent Removal', description: 'Using the right tools and technique, we work the metal back to its original shape without harming the surrounding area.' },
      { step: 3, title: 'Paint If Needed', description: 'If the paint was broken, we sand, prime, and apply a factory-matched color and clear coat.' },
      { step: 4, title: 'Buff & Finish', description: 'Final polish brings the repaired area to a flawless shine that blends with the rest of the panel.' },
    ],
    faq: [
      { question: 'Can you fix small door dings?', answer: 'Yes. Door dings are one of our most common repairs. Depending on size and paint condition, we can often fix them same-day.' },
      { question: 'What\'s paintless dent repair (PDR)?', answer: 'PDR is a technique used for dents where the paint isn\'t damaged. We use specialized tools to massage the metal back into shape without any filler or paint.' },
      { question: 'Can you fix deep scratches?', answer: 'Yes. Deep scratches that go through the clear coat or paint require sanding, priming, and repainting — which we do with precision color matching.' },
      { question: 'How long does dent repair take?', answer: 'Simple door dings can sometimes be done in a few hours. Larger dents with paint damage may take 1–2 days.' },
    ],
  },
  {
    slug: 'frame-repair',
    title: 'Frame Repair',
    shortTitle: 'Frame Repair',
    description: 'Frame straightening, structural repair, and unibody restoration after serious accidents.',
    longDescription: [
      'Frame damage is serious — it affects not just how your car looks, but how it handles, how safe it is, and whether it drives straight. Mayo\'s has the equipment and experience to restore structural integrity after significant collisions.',
      'Using precision frame straightening equipment, we measure, pull, and align your vehicle\'s frame back to factory specs. We don\'t guess — we use measurements and computer-aided alignment to confirm the repair is right.',
      'Whether it\'s a bent frame rail, crushed unibody section, or twisted subframe, we\'ve fixed it before. Come in and let us assess what your vehicle needs.',
    ],
    keyword: 'frame repair Dallas TX',
    icon: '⚙️',
    heroHeadline: 'FRAME REPAIR IN DALLAS',
    heroSub: 'Structural damage fixed to factory specs — not close enough. Exact.',
    process: [
      { step: 1, title: 'Structural Assessment', description: 'We measure the frame against factory specs to identify every point of deviation — not just the obvious damage.' },
      { step: 2, title: 'Frame Straightening', description: 'Using precision equipment, we pull and straighten the frame back to manufacturer specs, step by step.' },
      { step: 3, title: 'Verification', description: 'We re-measure to confirm the frame is within tolerance. We don\'t move on until the numbers are right.' },
      { step: 4, title: 'Full Repair Completion', description: 'Frame repair is followed by any additional body and paint work needed to restore the vehicle completely.' },
    ],
    faq: [
      { question: 'Is it worth repairing a bent frame?', answer: 'It depends on the extent of the damage and the vehicle\'s value. We\'ll give you an honest assessment and let you decide with full information.' },
      { question: 'Can a car with frame damage be safely repaired?', answer: 'Yes, when done by experienced technicians with the right equipment. We restore frames to factory specifications — not approximations.' },
      { question: 'How long does frame repair take?', answer: 'Frame repair typically takes 1–2 weeks depending on severity and how much additional body work is needed.' },
      { question: 'Will my car drive straight after frame repair?', answer: 'That\'s the goal. We verify alignment throughout the process and confirm the vehicle drives correctly before returning it to you.' },
    ],
  },
  {
    slug: 'insurance-claims',
    title: 'Insurance Claims',
    shortTitle: 'Insurance Claims',
    description: 'We work with all insurance companies and handle the back-and-forth with adjusters so you don\'t have to.',
    longDescription: [
      'Dealing with insurance after an accident is stressful. That\'s why we take it off your plate. Mayo\'s works directly with all major insurance companies — GEICO, State Farm, Progressive, Allstate, and more.',
      'We communicate with the adjuster, document the damage properly, and make sure your vehicle gets the repair it actually needs — not just what a quick estimate covers. We advocate for you.',
      'You shouldn\'t have to fight your insurance company. Bring your car to Mayo\'s and let us handle it. We\'ve been doing this for 25+ years and we know how the process works.',
    ],
    keyword: 'auto body shop insurance Dallas TX',
    icon: '📋',
    heroHeadline: 'INSURANCE CLAIMS MADE EASY',
    heroSub: 'We handle the adjuster. You just drive away fixed.',
    process: [
      { step: 1, title: 'File Your Claim', description: 'File a claim with your insurance company and bring your vehicle (or have it towed) to Mayo\'s.' },
      { step: 2, title: 'We Document Everything', description: 'We perform a thorough damage assessment and document it properly for the insurance claim.' },
      { step: 3, title: 'We Handle the Adjuster', description: 'We communicate directly with your insurance adjuster to make sure all damage is covered appropriately.' },
      { step: 4, title: 'Repair & Return', description: 'Once approved, we repair your vehicle completely and return it to pre-accident condition.' },
    ],
    faq: [
      { question: 'Do you work with all insurance companies?', answer: 'Yes. We work with all major insurance carriers — GEICO, State Farm, Progressive, Allstate, Farmers, USAA, and more.' },
      { question: 'Do I need to get multiple estimates?', answer: 'Most insurers only require one estimate. You have the right to choose your own repair shop — they cannot force you to use a specific shop.' },
      { question: 'What if the insurance estimate doesn\'t cover all the damage?', answer: 'We advocate for you. If we find additional damage during repair, we document it and work with the adjuster to get it covered.' },
      { question: 'How does the insurance claim process work?', answer: 'File a claim, bring your car to us, we document the damage and communicate with the adjuster, they approve the repair, we fix it, you pick up your car.' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
