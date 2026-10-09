import type { Consultant } from "./types";

/**
 * Consultants shown on /about (DIG-53). These are real people: never invent names, bios or photos.
 *
 * To add a real consultant, replace a placeholder entry, for example:
 * {
 *   id: "jane-doe",
 *   name: "Jane Doe",
 *   role: "Principal Consultant",
 *   bio: "Two or three sentences approved by the consultant.",
 *   photo: { src: "/images/team/jane-doe.webp", alt: "Portrait of Jane Doe", width: 800, height: 800 },
 *   specialisms: ["AI strategy", "Data platforms"],
 *   location: "City, Country",
 *   linkedin: "https://www.linkedin.com/in/...",
 * }
 * Photos go in /public/images/team/ (square, at least 800x800).
 */
const placeholderConsultant = (n: number): Consultant => ({
  id: `consultant-${n}`,
  name: "Consultant name",
  role: "Role",
  bio: "Short bio: two or three sentences about experience and focus areas, approved by the consultant.",
  specialisms: ["Specialism", "Specialism"],
  location: "Location",
  placeholder: true,
});

export const consultants: Consultant[] = [1, 2, 3, 4].map(placeholderConsultant);
