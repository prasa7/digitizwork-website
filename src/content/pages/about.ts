import type { AboutPageContent } from "../types";
import { images } from "../images";

// /about page (DIG-53). TODO(content): replace placeholders with owner-confirmed facts only.
export const aboutPage: AboutPageContent = {
  hero: {
    eyebrow: "About us",
    title: "The people behind",
    titleHighlight: "your AI-powered software.",
    lead: "[Placeholder] DigitizWork is a team of consultants who design and build software with AI. A short, factual introduction to the company goes here once confirmed by the owner.",
    image: images.aboutTeamNetwork,
  },
  story: {
    eyebrow: "Our story",
    title: "[Placeholder] Why DigitizWork exists",
    statusTag: "Placeholder",
    paragraphs: [
      "[Placeholder] How and why DigitizWork started. Keep to facts the owner has confirmed: no founding year, team size or client numbers until they are provided.",
      "[Placeholder] What the company believes about building software with AI, and the kind of organisations it wants to help.",
      "[Placeholder] How the consultants work with clients day to day.",
    ],
  },
  values: {
    eyebrow: "What guides us",
    title: "How we approach every engagement",
    statusTag: "Placeholder: to be confirmed by the owner",
    items: [
      {
        icon: "target",
        title: "[Placeholder] Outcomes first",
        description: "[Placeholder] A short explanation of this value in practice.",
      },
      {
        icon: "spark",
        title: "[Placeholder] Responsible AI",
        description: "[Placeholder] A short explanation of this value in practice.",
      },
      {
        icon: "users",
        title: "[Placeholder] Partnership",
        description: "[Placeholder] A short explanation of this value in practice.",
      },
    ],
  },
  team: {
    eyebrow: "Meet our consultants",
    title: "The consultants you will work with",
    intro:
      "Experienced people who combine domain knowledge with hands-on AI and engineering skills.",
    statusTag: "Placeholder profiles: real consultant details to follow",
  },
  cta: {
    title: "Talk to a consultant",
    text: "Tell us what you want to build. We will match you with the right people.",
    cta: { label: "Start a project", target: { kind: "section", section: "contact" } },
  },
};
