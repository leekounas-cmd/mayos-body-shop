export type FAQItem = {
  question: string
  answer: string
  category?: string
}

export const faqs: FAQItem[] = [
  {
    question: 'Do you work with my insurance company?',
    answer: 'Yes — we work with all insurance companies. GEICO, State Farm, Progressive, Allstate, Farmers, USAA, and more. We handle the communication with your adjuster directly, so you don\'t have to deal with the back-and-forth.',
    category: 'Insurance',
  },
  {
    question: 'How long will my repair take?',
    answer: 'It depends on the damage. Minor repairs (dents, scratches, bumper work) can take 1–3 days. Collision repairs and paint jobs typically take 1–2 weeks. Frame repair can take longer. We\'ll give you a realistic timeline when you bring your car in.',
    category: 'Repairs',
  },
  {
    question: 'Do you offer a warranty on repairs?',
    answer: 'Yes. We stand behind our work. Ask about our warranty when you come in for your estimate — we\'ll walk you through what\'s covered.',
    category: 'Repairs',
  },
  {
    question: 'Can I get a free estimate?',
    answer: 'Absolutely. Estimates are always free at Mayo\'s. You can come in during business hours or submit photos through our online estimate form and we\'ll get back to you.',
    category: 'General',
  },
  {
    question: 'Do I need an appointment?',
    answer: 'Walk-ins are welcome for estimates. For repairs, we\'ll schedule a drop-off time after your estimate is approved. Call us at (214) 744-0766 or come by Mon–Fri 9AM–7PM or Sat 9AM–4PM.',
    category: 'General',
  },
  {
    question: 'What types of vehicles do you work on?',
    answer: 'We work on all makes and models — sedans, trucks, SUVs, minivans. Domestic and foreign. If it\'s got a body, we can fix it.',
    category: 'General',
  },
  {
    question: 'How does the insurance claim process work?',
    answer: 'File a claim with your insurance company, then bring your car to us. We handle the damage documentation and communicate directly with your adjuster. Once the repair is approved, we fix the car and call you when it\'s ready. Simple as that.',
    category: 'Insurance',
  },
  {
    question: 'Do you offer paint matching?',
    answer: 'Yes. We use your vehicle\'s factory paint code and professional color-matching technology to get an exact match. The repainted panels should blend seamlessly with the rest of your vehicle.',
    category: 'Repairs',
  },
  {
    question: 'Can you fix frame damage?',
    answer: 'Yes. We have frame straightening equipment and the experience to restore structural integrity after serious accidents. We measure against factory specs and verify the repair is right before anything else happens.',
    category: 'Repairs',
  },
  {
    question: 'Do you provide rental car assistance?',
    answer: 'We don\'t operate a rental fleet, but if your repair is part of an insurance claim, your insurance policy may include rental coverage. We can help coordinate this and point you toward nearby rental options.',
    category: 'General',
  },
]
