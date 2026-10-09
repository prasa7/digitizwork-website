import type { TrustedTeaserContent } from "../types";

// Home page teaser for /clients (DIG-59) and /testimonials (DIG-60).
// TODO(content): placeholder copy. The heading must stay accurate: only claim "trusted by" once real clients are listed.
export const trustedTeaser: TrustedTeaserContent = {
  eyebrow: "Clients and feedback",
  title: "Trusted by organisations like yours",
  intro: "[Placeholder] A short line introducing the organisations DigitizWork works with and what they say.",
  statusTag: "Placeholder: real clients and feedback to follow",
  clientsLabel: "Some of our clients",
  clientLimit: 6,
  featuredTestimonialId: "testimonial-1",
  clientsLink: { label: "See our clients", target: { kind: "route", path: "/clients" } },
  testimonialsLink: { label: "Read client feedback", target: { kind: "route", path: "/testimonials" } },
};
