// Developer note: Update company info, slogan, logo path, and service items here.
export const siteConfig = {
  companyName: 'NekoK Tech LTD',
  website: 'https://nekok.store',
  contactEmail: 'contact@nekok.store',
  twitterHandle: '@NekoK_Tech',
  twitterUrl: 'https://x.com/NekoK_Tech',
  address: 'Unit A James Carter Road, Nekok Tech Ltd, Mildenhall, England, IP28 7DE',
  businessHours: 'Monday to Friday, 2:00 AM - 10:00 AM (London time)',
  slogan:
    'We are a technology company building personalized guidance tools that recommend the right products for real user needs - starting with skincare and expanding into specialist technical domains.',
  shortDescription:
    'A UK-based technology company using modern technology to recommend products with evidence-led analysis, while also offering direct consultation support.',
  logoPath: '/assets/logo.png',
}

export const services = [
  {
    id: 'skincare',
    name: 'NekoK Skincare Analyzer',
    description: 'AI-powered decision support that helps you avoid buying the wrong skincare products before checkout.',
    href: '/skincare-analyzer',
    isAvailable: true,
  },
  {
    id: 'pillow',
    name: 'NekoK Pillow Finder',
    description: 'A technology-guided pillow recommendation service with optional consultation support for better sleep choices.',
    status: 'Coming soon',
    href: '#coming-soon',
    isAvailable: false,
  },
] as const

export const whyNekok = [
  {
    title: 'Science-led guidance',
    description:
      'Our recommendation logic is built to prioritize ingredient evidence and practical user needs over trends.',
  },
  {
    title: 'Personalized assistance',
    description:
      'We translate complex product and ingredient information into clear, personalized recommendations people can verify and act on.',
  },
  {
    title: 'Rigorous product discovery',
    description:
      'We build recommendation experiences that stay structured, testable, and trustworthy across advanced technical categories.',
  },
] as const