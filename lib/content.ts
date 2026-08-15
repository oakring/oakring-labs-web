export const site = {
  name: "OakRing Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://oakringlabs.com",
  tagline: "AI products, not AI models.",
  description:
    "OakRing Labs builds AI products on top of existing models, instead of training our own. MetaSpan, our first product, tracks what you know and decides what you should learn next.",
  productName: "MetaSpan",
} as const;

export const company = {
  description:
    "OakRing Labs builds AI products on top of existing models, rather than training our own. MetaSpan applies this to learning — tracking what you know and deciding what you should learn next. Future products may work in different domains entirely.",
} as const;

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],
  cta: "Join Waitlist",
  ctaHref: "#waitlist",
} as const;

export const hero = {
  brand: "OakRing Labs",
  tagline: "AI products, not AI models.",
  productLine: "First up: MetaSpan — it tracks what you know, and picks what you learn next.",
  primaryCta: "Join Waitlist",
  secondaryCta: "Learn more",
  secondaryCtaHref: "#metaspan",
} as const;

export const whatIsMetaSpan = {
  id: "metaspan",
  title: "MetaSpan",
  lead: "An AI system that builds a model of what you know, and uses it to decide what you should learn next.",
} as const;

export const knowledgeNotContent = {
  id: "philosophy",
  title: "Consuming information isn't the same as understanding it.",
  lead: "Most learning tools optimize for how much they show you. MetaSpan checks whether you understood what it already showed you, then decides what's next.",
} as const;

export const deltaEngine = {
  id: "delta-engine",
  title: "The Delta Engine",
  lead: "A Delta is one carefully chosen idea. Finding information is easy — deciding what should come next is the hard part. That's what the Delta Engine does.",
} as const;

export const knowledgeGraph = {
  id: "knowledge-graph",
  title: "Your knowledge graph",
  lead: "A model of what you know, built from every Delta and every reflection you write.",
  tracks: [
    "Mastered concepts",
    "Active exploration",
    "Relationships",
    "Gaps",
    "Long-term goals",
  ],
} as const;

export const howItWorks = {
  id: "how-it-works",
  title: "How it works",
  steps: [
    { step: "01", title: "Choose a direction" },
    { step: "02", title: "Receive a Delta" },
    { step: "03", title: "Explain it in your words" },
    { step: "04", title: "Continue when ready" },
  ],
  delivery: "On the web, or on WhatsApp — same graph, same Deltas.",
} as const;

export const understandingLoop = {
  id: "reflection",
  title: "Learning through reflection",
  lead: "Before the next Delta, you write a short reflection in your own words. MetaSpan responds with feedback — not a grade.",
  mockPrompt: "In your own words — what did this Delta change about how you see the idea?",
  mockDraft: "I used to think X was separate from Y. Now I see they're linked through…",
  mockHint: "Take your time. Clarity matters more than polish.",
} as const;

export const whyDifferent = {
  id: "why-different",
  title: "Different from a feed",
  points: [
    "Active engagement, not scrolling",
    "Feedback on every reflection you write",
    "A knowledge graph that updates with every Delta",
    "One next step, not an endless feed",
  ],
} as const;

export const comingSoon = {
  id: "coming-soon",
  title: "Coming soon",
  body: "MetaSpan is in development. Join for updates and early access.",
} as const;

export const waitlist = {
  id: "waitlist",
  title: "Join the waitlist",
  description: "Be the first to know when our products open early access.",
  nameLabel: "Name",
  namePlaceholder: "Optional",
  emailLabel: "Email",
  emailPlaceholder: "you@company.com",
  submit: "Join waitlist",
  submitting: "Joining…",
  success: "You're on the list. We'll email you when MetaSpan opens early access.",
  successTitle: "You're on the list",
  duplicate: "You're already on the list — we'll be in touch when it's time.",
  duplicateTitle: "Already signed up",
  error: "We couldn't add you just now. Try again in a moment.",
  retry: "Try again",
  rateLimited: "You're sending a bit fast. Wait a few minutes, then try again.",
} as const;

export const companyVision = {
  id: "vision",
  title: "Beyond MetaSpan",
  body: "MetaSpan is the first product from OakRing Labs. We're building more — each one focused on a specific problem, not a broad platform.",
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} OakRing Labs. All rights reserved.`,
} as const;

export const aboutPage = {
  title: "About OakRing Labs",
  description: company.description,
  metaSpanNote:
    "MetaSpan applies this to learning — tracking what you know and deciding what you should learn next. Future products, in other domains, are on the roadmap.",
} as const;

export const contactPage = {
  title: "Contact",
  description:
    "Questions about OakRing Labs or MetaSpan? Reach out — we read every message.",
  email: "hello@oakringlabs.com",
} as const;

export const privacyPage = {
  title: "Privacy",
  sections: [
    {
      heading: "Waitlist",
      body: "When you join the waitlist, we store the name and email you provide to send updates about MetaSpan and OakRing Labs. We do not sell your information.",
    },
    {
      heading: "Analytics",
      body: "We use privacy-focused analytics to understand aggregate traffic and waitlist conversion. We do not use advertising trackers on this site.",
    },
    {
      heading: "Contact",
      body: "For privacy questions, email hello@oakringlabs.com.",
    },
  ],
} as const;