import type { Testimonial } from "./types";

/**
 * Client feedback shown on /testimonials (DIG-60) and in the home "Trusted by" teaser.
 *
 * INTEGRITY RULES (these are real customers):
 * - Only publish a testimonial with the person's WRITTEN CONSENT to publish the quote, their
 *   name, role, company and photo. Keep a record of that consent.
 * - NEVER publish fabricated, paid-for, edited-in-meaning or AI-generated testimonials.
 *   Australian Consumer Law prohibits fake or misleading reviews.
 * - Quote exactly as approved. Add `rating` only if the client gave that rating themselves.
 * - Keep `placeholder: true` on any entry that is not real, approved data: the card then shows
 *   a visible "Placeholder" tag. Remove the placeholders entirely before launch if no real
 *   testimonials have been approved yet.
 *
 * Real example shape:
 * {
 *   id: "firstname-lastname",
 *   quote: "Exact words approved by the client.",
 *   name: "Firstname Lastname",
 *   role: "Role as approved",
 *   company: "Company as approved",
 *   photo: { src: "/images/testimonials/firstname-lastname.webp", alt: "", width: 160, height: 160 },
 *   rating: 5,
 * }
 * Photos go in /public/images/testimonials/ (square, at least 160x160, supplied by the person).
 */
const placeholderTestimonial = (n: number): Testimonial => ({
  id: `testimonial-${n}`,
  quote: "[Placeholder] Client quote goes here once provided with written consent.",
  name: "Client name",
  role: "Role",
  company: "Company",
  placeholder: true,
});

export const testimonials: Testimonial[] = [1, 2, 3].map(placeholderTestimonial);
