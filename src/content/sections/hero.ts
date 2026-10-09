import type { HeroContent } from "../types";
import { images } from "../images";

// TODO(content): placeholder copy pending approval in docs/marketing/website-content.md.
// Message direction from the owner: "DigitizWork can deliver any software solution using AI".
export const hero: HeroContent = {
  eyebrow: "AI-powered software delivery",
  title: "Any software solution,",
  titleHighlight: "built and delivered with AI.",
  lead: "[Placeholder] From web and mobile apps to intelligent automation and AI assistants, we design, build and run software that puts AI to work for your business, guided by experienced consultants from first idea to production.",
  primaryCta: { label: "Start a project", target: { kind: "section", section: "contact" } },
  secondaryCta: { label: "Explore what we build", target: { kind: "section", section: "services" } },
  highlights: [
    "[Placeholder] Idea to production",
    "[Placeholder] Human-led, AI-accelerated",
    "[Placeholder] Secure by design",
  ],
  image: images.heroAiCore,
};
