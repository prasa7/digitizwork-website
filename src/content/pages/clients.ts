import type { ClientsPageContent } from "../types";
import { images } from "../images";

// /clients page (DIG-59). TODO(content): all copy is placeholder pending owner-approved text.
// Never name organisations, industries or results here that the owner has not confirmed.
export const clientsPage: ClientsPageContent = {
  hero: {
    eyebrow: "Our clients",
    title: "Organisations we",
    titleHighlight: "build with.",
    lead: "[Placeholder] A short introduction to the organisations DigitizWork works with. Client names, logos and stories appear here only with each client's permission.",
    image: images.clientsHero,
  },
  intro: {
    eyebrow: "Who we help",
    title: "[Placeholder] The kinds of organisations we help",
    statusTag: "Placeholder",
    paragraphs: [
      "[Placeholder] Describe the kinds of organisations DigitizWork helps, for example by size, sector or stage, using only facts the owner has confirmed.",
      "[Placeholder] Describe the typical problems these organisations bring to DigitizWork and how AI-powered software helps.",
    ],
  },
  audiences: {
    eyebrow: "Typical clients",
    title: "[Placeholder] Who we typically work with",
    statusTag: "Placeholder: to be confirmed by the owner",
    items: [
      {
        icon: "building",
        title: "[Placeholder] Organisation type 1",
        description: "[Placeholder] One sentence on how DigitizWork helps this kind of organisation.",
      },
      {
        icon: "rocket",
        title: "[Placeholder] Organisation type 2",
        description: "[Placeholder] One sentence on how DigitizWork helps this kind of organisation.",
      },
      {
        icon: "users",
        title: "[Placeholder] Organisation type 3",
        description: "[Placeholder] One sentence on how DigitizWork helps this kind of organisation.",
      },
    ],
  },
  clientList: {
    eyebrow: "Client list",
    title: "Some of the organisations we work with",
    intro: "Shown with each client's permission.",
    statusTag: "Placeholder entries: real clients to follow",
  },
  caseStudies: {
    eyebrow: "Case studies",
    title: "[Placeholder] Selected client stories",
    intro: "[Placeholder] Short summaries of real projects, published with each client's approval.",
    statusTag: "Placeholder",
    labels: { challenge: "Challenge", solution: "Solution", outcome: "Outcome" },
  },
  cta: {
    title: "Could your organisation be next?",
    text: "[Placeholder] Tell us what you want to build and we will talk through the options.",
    cta: { label: "Start a project", target: { kind: "section", section: "contact" } },
  },
};
