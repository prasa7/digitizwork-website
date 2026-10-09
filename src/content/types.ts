/**
 * Content types shared by all content modules and section components.
 * Content lives in typed modules (src/content/**) so sections stay presentational
 * and can be reused on dedicated pages in Phase 2.
 */

/** Anchor ids used by sections. */
export type SectionId =
  | "top"
  | "services"
  | "approach"
  | "why-us"
  | "about"
  | "contact"
  | "story"
  | "team"
  | "trusted-by"
  | "who-we-help"
  | "client-list"
  | "case-studies"
  | "feedback"
  | "share-feedback";

/**
 * Where a link points. Navigation is declared once with these targets so that
 * moving a section to its own route is a one-line data change.
 */
export type LinkTarget =
  /** An anchored section, by default on the home page ("/#services"). */
  | { kind: "section"; section: SectionId; page?: `/${string}` }
  /** A dedicated route ("/about"). */
  | { kind: "route"; path: `/${string}` }
  /** An off-site link. */
  | { kind: "external"; url: string };

export interface NavLink {
  label: string;
  target: LinkTarget;
  /** Destination not built yet: rendered as plain text, not a link. */
  pending?: boolean;
}

/**
 * An image slot. Swapping an SVG illustration for a generated PNG/WebP is a one-line change
 * of `src` (plus width/height if the aspect ratio changes). See docs/frontend/image-prompts.md.
 */
export interface ImageAsset {
  /** Path under /public, e.g. "/images/hero/ai-core.svg". */
  src: string;
  /** Meaningful alt text, or "" when the image is purely decorative. */
  alt: string;
  width: number;
  height: number;
}

export type IconName =
  | "layers"
  | "workflow"
  | "compass"
  | "shield"
  | "spark"
  | "mail"
  | "chat"
  | "mapPin"
  | "info"
  | "check"
  | "arrowRight"
  | "menu"
  | "close"
  | "code"
  | "users"
  | "rocket"
  | "lock"
  | "target"
  | "linkedin"
  | "quote"
  | "building"
  | "external";

export interface SiteConfig {
  name: string;
  /** Short line shown under the wordmark in the footer. */
  description: string;
  /** Owner-confirmed public contact email. */
  contactEmail: string;
  /** Owner-confirmed public location (city, country). */
  location: string;
  /** Banner shown above the header while the site is a design preview. Null hides it. */
  previewNotice: string | null;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Small visible status pill, e.g. "Placeholder" or "Optional section". */
  statusTag?: string;
}

export interface HeroContent {
  eyebrow: string;
  /** Plain part of the H1. */
  title: string;
  /** Part of the H1 rendered with the AI gradient. */
  titleHighlight: string;
  lead: string;
  primaryCta: NavLink;
  secondaryCta?: NavLink;
  highlights: string[];
  image: ImageAsset;
}

export interface ServiceItem {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  tags: string[];
  image: ImageAsset;
  /** Optional link to a service detail page (Phase 2). */
  link?: NavLink;
}

export interface ServicesContent extends SectionIntro {
  items: ServiceItem[];
}

export interface ApproachContent extends SectionIntro {
  /** "How we work" is optional pending owner decision OQ-5. */
  enabled: boolean;
  steps: { icon: IconName; title: string; description: string }[];
}

export interface FeatureItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface WhyUsContent extends SectionIntro {
  items: FeatureItem[];
}

export interface AboutTeaserContent extends SectionIntro {
  paragraphs: string[];
  cta: NavLink;
  image: ImageAsset;
}

export interface ContactDetail {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormContent {
  title: string;
  description: string;
  fields: {
    name: string;
    email: string;
    company: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    messageHint: string;
    consent: string;
  };
  optionalLabel: string;
  serviceOptions: string[];
  submitLabel: string;
  /** Shown while the form is UI-only and not connected to the API. Null hides it. */
  previewNotice: string | null;
}

export interface ContactContent extends SectionIntro {
  details: ContactDetail[];
  form: ContactFormContent;
}

export interface FooterContent {
  groups: { title: string; links: NavLink[] }[];
  /** Heading of the footer contact column (shows site.contactEmail). */
  contactTitle: string;
  legalLine: string;
}

/** Page-level hero for routes other than home (e.g. /about). */
export interface PageHeroContent {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  lead: string;
  image?: ImageAsset;
}

export interface CtaBandContent {
  title: string;
  text: string;
  cta: NavLink;
}

export interface AboutPageContent {
  hero: PageHeroContent;
  story: SectionIntro & { paragraphs: string[] };
  values: SectionIntro & { items: FeatureItem[] };
  team: SectionIntro;
  cta: CtaBandContent;
}

/**
 * A consultant on the About page. Real people: never invent names, bios or photos.
 * Optional fields render only when present.
 */
export interface Consultant {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Photo under /public/images/team/. Falls back to the silhouette illustration. */
  photo?: ImageAsset;
  specialisms?: string[];
  location?: string;
  /** Full LinkedIn profile URL. */
  linkedin?: string;
  /** True while the card shows placeholder data (adds a visible "Placeholder" tag). */
  placeholder?: boolean;
}

/**
 * A client organisation shown on /clients and in the home "Trusted by" strip.
 * REAL CLIENTS ONLY, listed with their permission. Never invent names, logos or industries.
 * Optional fields render only when present.
 */
export interface Client {
  id: string;
  name: string;
  /** Logo under /public/images/clients/. Rendered decoratively because the name is shown as text. */
  logo?: ImageAsset;
  industry?: string;
  /** Full URL of the client's website (opens in a new tab). */
  website?: string;
  /** True while the card shows placeholder data (adds a visible "Placeholder" tag). */
  placeholder?: boolean;
}

/**
 * A short case study highlight on /clients. Every statement must be approved by the client.
 * `outcome` must not contain numbers unless the client has verified and approved them in writing.
 */
export interface CaseStudy {
  id: string;
  /** Client name, exactly as the client has approved it. */
  client: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  image?: ImageAsset;
  /** True while the card shows placeholder data (adds a visible "Placeholder" tag). */
  placeholder?: boolean;
}

/** Star rating, rendered only when present. */
export type Rating = 1 | 2 | 3 | 4 | 5;

/**
 * A client testimonial on /testimonials and in the home teaser.
 * Publish ONLY with the client's written consent, quoted exactly as approved. Never fabricate
 * testimonials or change their meaning (Australian Consumer Law prohibits fake reviews).
 */
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  /** Headshot under /public/images/testimonials/, supplied by the person. Rendered decoratively next to the name. */
  photo?: ImageAsset;
  /** 1 to 5, only if the client gave this rating themselves. */
  rating?: Rating;
  /** True while the card shows placeholder data (adds a visible "Placeholder" tag). */
  placeholder?: boolean;
}

export interface ClientsPageContent {
  hero: PageHeroContent;
  intro: SectionIntro & { paragraphs: string[] };
  /** Kinds of organisations DigitizWork helps (cards under the intro). */
  audiences: SectionIntro & { items: FeatureItem[] };
  clientList: SectionIntro;
  caseStudies: SectionIntro & {
    /** Labels used inside every case study card. */
    labels: { challenge: string; solution: string; outcome: string };
  };
  cta: CtaBandContent;
}

/** Panel inviting feedback. No form: it links to the contact section. */
export interface FeedbackPromptContent {
  title: string;
  text: string;
  cta: NavLink;
}

export interface TestimonialsPageContent {
  hero: PageHeroContent;
  list: SectionIntro;
  share: FeedbackPromptContent;
  cta: CtaBandContent;
}

/** Home page teaser linking to /clients and /testimonials. */
export interface TrustedTeaserContent extends SectionIntro {
  /** Small heading above the client logo strip. */
  clientsLabel: string;
  /** Maximum number of clients shown in the strip. */
  clientLimit: number;
  /** id of the testimonial to feature; falls back to the first one. */
  featuredTestimonialId?: string;
  clientsLink: NavLink;
  testimonialsLink: NavLink;
}
