import type { FooterContent } from "../types";
import { legalNav, primaryNav } from "../navigation";

export const footer: FooterContent = {
  groups: [
    { title: "Explore", links: primaryNav },
    { title: "Legal", links: legalNav },
  ],
  // Contact column reads site.contactEmail (owner-confirmed); see Footer.tsx.
  contactTitle: "Contact",
  // TODO(content): legal entity name to be confirmed (kickoff Q8).
  legalLine: "DigitizWork. All rights reserved.",
};
