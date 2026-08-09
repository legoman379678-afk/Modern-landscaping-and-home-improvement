// ---------------------------------------------------------------------------
// Single source of business copy for the site. Mirrors /home/team/shared/site-spec.md.
// Do not invent business facts beyond what lives in this file (and the spec).
// ---------------------------------------------------------------------------

export const BUSINESS_NAME = "Modern Landscape and Home Improvement";
export const PHONE_DISPLAY = "(689) 325-2800";
export const PHONE_TEL = "tel:6893252800";
// ---------------------------------------------------------------------------
// BUSINESS_EMAIL — the owner has not provided the business email address yet.
// Until they do, keep this EMPTY: the "Send by Email" button in the estimate
// form is hidden entirely while this is empty (never a broken mailto, never
// an invented address). To enable it later, paste the address here — that is
// the one-line change.
// ---------------------------------------------------------------------------
export const BUSINESS_EMAIL = "";
export const HOURS_FULL = "Open 24 Hours Sunday–Friday • Closed Saturday";
export const HOURS_SHORT = "Open 24 Hours Sun–Fri";
export const RATING = "5.0";
export const REVIEW_COUNT = 11;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Services — exactly the 17 owner-approved services (name + one-line detail).
// Do not add services beyond this list anywhere on the page, in the AI
// knowledge base, the FAQ or the LocalBusiness schema.
// ---------------------------------------------------------------------------
export interface Service {
  title: string;
  detail: string;
  icon: string;
  cta: string;
  note?: string;
}

export const services: Service[] = [
  {
    title: "Handyman Services",
    detail: "General home repairs and small jobs done right.",
    icon: "wrench",
    cta: "Request Service",
  },
  {
    title: "Home Improvement & Remodeling",
    detail: "Improvements and remodeling for homes and businesses.",
    icon: "home",
    cta: "Get an Estimate",
  },
  {
    title: "Home Maintenance",
    detail: "Ongoing upkeep to keep your property in shape.",
    icon: "shield",
    cta: "Request Service",
  },
  {
    title: "Drywall Repair",
    detail: "Wall and ceiling repair, patching and finishing.",
    icon: "layers",
    cta: "Request Service",
  },
  {
    title: "Fixture Installation",
    detail: "Lights, fixtures and hardware installed.",
    icon: "bulb",
    cta: "Request Service",
  },
  {
    title: "Furniture Assembly",
    detail: "Careful, dependable furniture assembly.",
    icon: "hammer",
    cta: "Request Service",
  },
  {
    title: "Painting",
    detail: "Interior and exterior painting, touch-ups and refreshes.",
    icon: "paint",
    cta: "Get an Estimate",
  },
  {
    title: "Plumbing Repairs",
    detail: "Minor plumbing repairs and fixture replacement.",
    icon: "drop",
    cta: "Request Service",
    note: "For larger plumbing projects, contact us to discuss the scope of work.",
  },
  {
    title: "Electrical Fixture Replacement",
    detail: "Light and fixture replacement and upgrades.",
    icon: "zap",
    cta: "Get an Estimate",
  },
  {
    title: "Landscaping & Lawn Work",
    detail: "Lawn and landscape care for your property.",
    icon: "leaf",
    cta: "Request Service",
  },
  {
    title: "Hedge Trimming",
    detail: "Clean hedge trimming and shaping.",
    icon: "scissors",
    cta: "Request Service",
  },
  {
    title: "Palm Tree Removal",
    detail: "Palm tree removal done right.",
    icon: "palm",
    cta: "Get an Estimate",
  },
  {
    title: "LED Lighting Installation",
    detail: "Energy-efficient LED lighting, including accent lighting.",
    icon: "bulb",
    cta: "Get an Estimate",
  },
  {
    title: "Retail Shelving Installation & Upgrades",
    detail: "Shelving for retail spaces and businesses.",
    icon: "building",
    cta: "Request Service",
  },
  {
    title: "Commercial Improvement Work",
    detail: "Improvements for offices, retail spaces and businesses.",
    icon: "briefcase",
    cta: "Request Service",
  },
  {
    title: "Residential Improvement Work",
    detail: "Improvements for homes and rental properties.",
    icon: "home",
    cta: "Get an Estimate",
  },
  {
    title: "Contractor Repair Work",
    detail: "Correcting and repairing previous contractor work.",
    icon: "wrench",
    cta: "Tell Us About Your Project",
  },
];

// ---------------------------------------------------------------------------
// Before / After projects — image-free placeholder examples, never real
// customer work. Simple SVG icons only; no photos anywhere on the page.
// ---------------------------------------------------------------------------
export interface Project {
  title: string;
  beforeLabel: string;
  afterLabel: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Overgrown to maintained landscaping",
    beforeLabel: "Overgrown",
    afterLabel: "Maintained",
    icon: "leaf",
  },
  {
    title: "Damaged to repaired, painted drywall",
    beforeLabel: "Damaged",
    afterLabel: "Repaired & painted",
    icon: "layers",
  },
  {
    title: "Basic ceiling to LED accent lighting",
    beforeLabel: "Basic ceiling",
    afterLabel: "LED accent lighting",
    icon: "bulb",
  },
  {
    title: "Basic to upgraded retail shelving",
    beforeLabel: "Basic shelving",
    afterLabel: "Upgraded display",
    icon: "building",
  },
  {
    title: "Unfinished to improved room",
    beforeLabel: "Unfinished",
    afterLabel: "Improved",
    icon: "home",
  },
];

// ---------------------------------------------------------------------------
// Why Choose Us (6)
// ---------------------------------------------------------------------------
export interface WhyCard {
  icon: string;
  title: string;
  text: string;
}

export const whyChooseUs: WhyCard[] = [
  {
    icon: "quality",
    title: "Quality Workmanship",
    text: "We focus on doing the job correctly instead of taking shortcuts.",
  },
  {
    icon: "price",
    title: "Fair Pricing",
    text: "Straightforward pricing and practical solutions.",
  },
  {
    icon: "dependable",
    title: "Dependable Service",
    text: "We value your time and communicate throughout the project.",
  },
  {
    icon: "fast",
    title: "Fast Response",
    text: "Contact us and we'll let you know our availability.",
  },
  {
    icon: "commercial",
    title: "Residential & Commercial",
    text: "Homes, rental properties, offices, retail spaces and businesses.",
  },
  {
    icon: "versatile",
    title: "Versatile Experience",
    text: "From landscaping to interior improvements, we handle many types of projects.",
  },
];

// ---------------------------------------------------------------------------
// Google reviews (11) — exact quotes from the spec. Tony Diaz is stars only.
// ---------------------------------------------------------------------------
export interface Review {
  name: string;
  quote?: string;
}

export const reviews: Review[] = [
  {
    name: "Melissa at Skinne Face and Body",
    quote:
      "They came to the rescue. I needed them to complete my spa rooms in Orlando and they put LED lights around my trim ceilings and upgraded our retail shelves! They fixed a job of another contractor and it looks amazing. They were on time and very professional. Thank you Ian. I highly recommend if you are looking to remodel your home or business in the Orlando area.",
  },
  {
    name: "Celeste Quinteros",
    quote:
      "Great price. Amazing work done by Ian. He took the time and was careful and thorough with everything. Would hire him again in an instant.",
  },
  {
    name: "Gmani Royapen",
    quote: "Ian came out did a great job on my lawn and hedges!!! Thank you so much.",
  },
  {
    name: "Mitch Lopez Jr.",
    quote: "Ian came out next day and did a great job! Will be using his services again!!",
  },
  {
    name: "James Cargill",
    quote:
      "Ian responded to my palm tree removal inquiry very quickly. He was not far away so he decided to come and do the job the same day. Very dependable, great communication and a hard worker. I would highly recommend him to others needing this or similar service done. Thank you for taking care of this, Ian.",
  },
  {
    name: "Sean Cuadra",
    quote: "Great price. Ian was a pleasure to work with. Service was great.",
  },
  { name: "Tony Diaz" },
  {
    name: "Kyle Perry",
    quote:
      "Ian and team did a great job. Completed the job on time and was very communicative. Thank you.",
  },
  {
    name: "Brandon Batista",
    quote:
      "Great price. I would 100% recommend Ian with Modern Home Improvement. He went above and beyond today fixing an issue I had at one of my properties. He was prompt and on time and his price was more than fair and had it done in a timely manner!",
  },
  {
    name: "Joseph Diaz",
    quote: "Great customer service. The guys are super professional, helpful & clean.",
  },
  {
    name: "Wizard's Enterprise",
    quote:
      "I've hired Ian with Modern Landscape and Home Improvement several times, both at my office and at customers' homes, and he's always done an excellent job. Every project has been a little different, and I've been impressed with how he thinks through problems and comes up with practical solutions instead of taking shortcuts. No matter what I've needed, he's always found a way to get it done right. His prices are fair, he works hard, and he's someone I know I can count on. After working with him on multiple projects, I wouldn't hesitate to recommend him to anyone looking for honest, quality work.",
  },
];

// Non-broken link to the business's Google reviews without inventing a profile URL.
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Modern+Landscape+and+Home+Improvement+Orlando+reviews";

// ---------------------------------------------------------------------------
// FAQ (8)
// ---------------------------------------------------------------------------
export const faqs: { q: string; a: string }[] = [
  {
    q: "What services do you provide?",
    a: "Handyman services, home improvement and remodeling, home maintenance, drywall repair, fixture installation, furniture assembly, painting, minor plumbing repairs, electrical fixture replacement, landscaping and lawn work, hedge trimming, palm tree removal, LED lighting installation, retail shelving installation and upgrades, commercial and residential improvement work, and repair of previous contractor work.",
  },
  {
    q: "Do you provide landscaping?",
    a: "Yes. We provide landscaping and lawn work, hedge trimming and palm tree removal. Tell us what your property needs.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. We work with homeowners as well as offices, retail spaces, rental properties and other businesses.",
  },
  {
    q: "Do you take small projects?",
    a: "Yes. Contact us even for small repairs or installations.",
  },
  {
    q: "Can you fix another contractor's work?",
    a: "Depending on the project, yes. Send us the details and we can assess it.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is different. Contact us for a free estimate.",
  },
  {
    q: "Are you open 24 hours?",
    a: "Modern Landscape and Home Improvement is open 24 hours Sunday through Friday and closed Saturday.",
  },
  {
    q: "How can I get an estimate?",
    a: `Call ${PHONE_DISPLAY} or complete the website estimate form.`,
  },
];

// ---------------------------------------------------------------------------
// Free-estimate form
// ---------------------------------------------------------------------------
export const serviceOptions = [
  "Handyman",
  "Landscaping",
  "Lawn Care",
  "Tree/Palm",
  "Drywall",
  "Painting",
  "Plumbing Repair",
  "Light/Fixture Installation",
  "Remodeling",
  "Furniture Assembly",
  "Commercial Improvement",
  "Other",
];

export const FORM_CONFIRMATION =
  "Thanks! Modern Landscape and Home Improvement will contact you about your project. For faster service, call (689) 325-2800.";

// ---------------------------------------------------------------------------
// Modern AI demo — quick questions + keyword answer engine (spec §5)
// ---------------------------------------------------------------------------
export const QUICK_QUESTIONS = [
  "What services do you offer?",
  "Do you do landscaping?",
  "Can you repair drywall?",
  "Do you do painting?",
  "Do you remove palm trees?",
  "Can you install LED lights?",
  "Do you work on businesses?",
  "What areas do you serve?",
  "Are you open today?",
  "How do I get an estimate?",
  "What's your phone number?",
  "Do you handle small jobs?",
  "Can I upload project photos?",
];

export const AI_DISCLAIMER =
  "AI Chat + Voice Assistant are optional demo features that can be added together for an additional $20 TOTAL.";

export function isOpenToday(): boolean {
  // 0 = Sunday … 6 = Saturday
  return new Date().getDay() !== 6;
}

export function hoursAnswer(): string {
  return isOpenToday()
    ? `Yes! ${BUSINESS_NAME} is open 24 hours today. Call ${PHONE_DISPLAY} or tell me about your project.`
    : `${BUSINESS_NAME} is closed on Saturdays. Regular service resumes Sunday, when the business is open 24 hours.`;
}

export function answerQuestion(raw: string): string {
  const q = raw.toLowerCase();

  // Hours (day-aware) — must not say "24/7"
  if (/(open|closed|hour|today|saturday|sunday|24)/.test(q)) {
    return hoursAnswer();
  }

  // Getting an estimate (check before generic pricing "estimate" matches)
  if (/(how do i get|get an estimate|request an estimate|free estimate)/.test(q)) {
    return `You can get a free estimate by calling ${PHONE_DISPLAY} or completing the estimate form on this page — tap "Request My Free Estimate" and tell us about your project.`;
  }

  // Pricing — never invent a price
  if (/(price|pricing|cost|how much|quote|rate|charge)/.test(q)) {
    return `Pricing depends on the project. You can request a free estimate or call ${BUSINESS_NAME} at ${PHONE_DISPLAY}.`;
  }

  // Phone
  if (/(phone|number|call|contact)/.test(q)) {
    return `You can reach ${BUSINESS_NAME} at ${PHONE_DISPLAY}. We're open 24 hours Sunday through Friday and closed Saturday.`;
  }

  // Landscaping / lawn
  if (/(landscap|lawn|hedge|yard|garden|mow)/.test(q)) {
    return `Yes! We provide landscaping and lawn work, hedge trimming and palm tree removal. Tell us what your property needs — call ${PHONE_DISPLAY} or request an estimate.`;
  }

  // Drywall
  if (/drywall|wall patch|ceiling repair/.test(q)) {
    return `Yes, we repair drywall — including wall and ceiling repair, patching and finishing. Call ${PHONE_DISPLAY} or request an estimate with your project details.`;
  }

  // Painting
  if (/paint/.test(q)) {
    return `Yes, we do interior and exterior painting, touch-ups and refreshes. Call ${PHONE_DISPLAY} or request an estimate with your project details.`;
  }

  // Palm trees
  if (/palm/.test(q)) {
    return `Yes — palm tree removal is a service we provide. Call ${PHONE_DISPLAY} and we'll let you know our availability.`;
  }

  // LED / lighting
  if (/led|light|fixture/.test(q)) {
    return `Yes, we install LED lighting and replace light fixtures, ceiling fixtures and more. Let us know the room and the look you're after — request a free estimate.`;
  }

  // Commercial / business
  if (/(business|commercial|retail|office|rental|spa)/.test(q)) {
    return `Yes, we work with homeowners as well as offices, retail spaces, rental properties and other businesses — including commercial and residential improvement work. Call ${PHONE_DISPLAY} or request an estimate.`;
  }

  // Service area
  if (/(area|serve|where|orlando|location|near|surrounding)/.test(q)) {
    return `${BUSINESS_NAME} serves Orlando, Florida & surrounding areas. Call ${PHONE_DISPLAY} and we'll let you know if we can reach your property.`;
  }

  // Small jobs
  if (/small|tiny|little/.test(q)) {
    return `Yes — we take small projects too. Even a quick repair or a single installation is worth a call: ${PHONE_DISPLAY}.`;
  }

  // Photos / upload — honest answer: the form does NOT accept photo uploads
  if (/(photo|upload|picture|image|send photo)/.test(q)) {
    return `The estimate form doesn't accept photo uploads, but you can send your project details by text to ${PHONE_DISPLAY} and our team will take it from there.`;
  }

  // Services overview (checked after specific topics so "do you do landscaping?"
  // gets the landscaping answer, not the general list)
  if (/(what services|services do|offer|provide|do you do|what do you)/.test(q)) {
    return `${BUSINESS_NAME} provides handyman services, home improvement and remodeling, home maintenance, drywall repair, fixture installation, furniture assembly, painting, minor plumbing repairs, electrical fixture replacement, landscaping and lawn work, hedge trimming, palm tree removal, LED lighting installation, retail shelving installation and upgrades, commercial and residential improvement work, and repair of previous contractor work. Call ${PHONE_DISPLAY} to talk through what you need.`;
  }

  // Fallback — uncertain/complicated projects
  return `That's something Ian and the team would want to discuss with you directly. Call ${PHONE_DISPLAY} or send us your project details for an estimate.`;
}
