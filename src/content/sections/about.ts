import type { AboutTeaserContent } from "../types";
import { images } from "../images";

// Home page About teaser (DIG-25). Links to the full /about page (DIG-53).
// TODO(content): only owner-confirmed facts (kickoff Q8). No team size, founding year or stats.
export const aboutTeaser: AboutTeaserContent = {
  eyebrow: "About us",
  title: "Real consultants, amplified by AI",
  paragraphs: [
    "[Placeholder] DigitizWork brings together consultants who build software for a living. AI makes us faster; experience makes the results dependable.",
    "[Placeholder] One or two sentences about who DigitizWork is and why it exists, limited to facts the owner has confirmed.",
  ],
  cta: { label: "Meet our consultants", target: { kind: "section", section: "team", page: "/about" } },
  image: images.aboutCollaboration,
};
