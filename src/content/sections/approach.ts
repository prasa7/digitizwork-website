import type { ApproachContent } from "../types";

// Optional section pending owner decision OQ-5. Set enabled: false to remove it from the page
// (and remove the "How we work" item from src/content/navigation.ts).
// TODO(content): the real delivery process must come from the owner; steps are placeholder.
export const approach: ApproachContent = {
  enabled: true,
  statusTag: "Optional section: placeholder process",
  eyebrow: "How we work",
  title: "From idea to intelligent software in four steps",
  intro:
    "A clear, collaborative process: you always know what is being built, why, and what comes next.",
  steps: [
    {
      icon: "compass",
      title: "Discover",
      description:
        "We learn your goals, users and data, and identify where AI adds real value and where it does not.",
    },
    {
      icon: "layers",
      title: "Design",
      description:
        "We shape the solution together: user experience, architecture and the right AI models for the job.",
    },
    {
      icon: "code",
      title: "Build",
      description:
        "We deliver in short iterations with working software you can try early, tested and secured along the way.",
    },
    {
      icon: "rocket",
      title: "Launch and evolve",
      description:
        "We release with confidence, measure what matters and keep improving the system as your needs grow.",
    },
  ],
};
