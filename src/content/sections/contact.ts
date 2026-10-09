import type { ContactContent } from "../types";
import { site } from "../site";

// Email and location are owner-confirmed (2026-10-10). TODO(content): add a phone number only if the owner confirms one (Q5).
// Form fields follow kickoff section 6; the API contract comes from the Backend Agent (E4-S1).
export const contact: ContactContent = {
  eyebrow: "Contact",
  title: "Let's build something intelligent",
  intro:
    "Tell us about your idea or the problem you want to solve. A consultant will get back to you to talk through the options. [Placeholder: response time to be confirmed]",
  details: [
    { icon: "mail", label: "Email us", value: site.contactEmail, href: `mailto:${site.contactEmail}` },
    { icon: "mapPin", label: "Location", value: site.location },
  ],
  form: {
    title: "Send an enquiry",
    description: "All fields are required unless marked optional.",
    fields: {
      name: "Name",
      email: "Work email",
      company: "Company",
      service: "What do you need?",
      servicePlaceholder: "Choose a service",
      message: "Project details",
      messageHint: "A few sentences about your goals, timeline and any systems involved.",
      consent:
        "[Placeholder] I agree that DigitizWork may use these details to respond to my enquiry, as described in the privacy notice.",
    },
    optionalLabel: "optional",
    serviceOptions: [
      "Web and mobile apps",
      "AI assistants and chatbots",
      "Intelligent automation",
      "Data and analytics",
      "Cloud and integration",
      "Custom software",
      "Not sure yet",
    ],
    submitLabel: "Send enquiry",
    previewNotice:
      "Preview only: this form is not connected yet. Sending will be enabled once the contact API is built.",
  },
};
