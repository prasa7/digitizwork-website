import type { TestimonialsPageContent } from "../types";
import { images } from "../images";

// /testimonials page (DIG-60). TODO(content): page copy is placeholder pending owner-approved text.
// Testimonials themselves live in src/content/testimonials.ts (written consent required).
export const testimonialsPage: TestimonialsPageContent = {
  hero: {
    eyebrow: "Client feedback",
    title: "What our clients",
    titleHighlight: "say about working with us.",
    lead: "[Placeholder] Feedback from the organisations DigitizWork works with, published only with each person's written consent.",
    image: images.testimonialsHero,
  },
  list: {
    eyebrow: "Feedback",
    title: "In our clients' words",
    intro: "Every quote is published with the client's written consent.",
    statusTag: "Placeholder entries: real feedback to follow",
  },
  share: {
    title: "Worked with us? Share your feedback",
    text: "[Placeholder] We would love to hear how your project went. Send us a message and we will ask for your consent before publishing anything.",
    cta: { label: "Share your feedback", target: { kind: "section", section: "contact" } },
  },
  cta: {
    title: "Ready to start your project?",
    text: "[Placeholder] Tell us what you want to build. A consultant will get back to you.",
    cta: { label: "Start a project", target: { kind: "section", section: "contact" } },
  },
};
