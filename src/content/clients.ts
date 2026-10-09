import type { CaseStudy, Client } from "./types";
import { images } from "./images";

/**
 * Clients and case studies shown on /clients (DIG-59) and in the home "Trusted by" teaser.
 *
 * INTEGRITY RULES (these are real organisations):
 * - List a client only with the client's written permission to be named and to show its logo.
 * - Never invent client names, logos, industries, case studies or results. Never publish
 *   fabricated or embellished content (Australian Consumer Law prohibits misleading claims).
 * - Case study `outcome` text must not contain numbers unless the client has verified and
 *   approved them in writing.
 * - Keep `placeholder: true` on any entry that is not real, approved data: the card then shows
 *   a visible "Placeholder" tag. Remove the placeholders entirely before launch if no real
 *   clients have been approved yet.
 *
 * To add a real client, replace a placeholder entry, for example:
 * {
 *   id: "client-slug",
 *   name: "Client name as approved",
 *   logo: { src: "/images/clients/client-slug.svg", alt: "", width: 240, height: 96 },
 *   industry: "Industry as approved",
 *   website: "https://www.example.com",
 * }
 * Logos go in /public/images/clients/ (SVG preferred, otherwise PNG/WebP on a transparent
 * background, about 240x96). The name is always shown as text, so the logo is decorative.
 */
const placeholderClient = (n: number): Client => ({
  id: `client-${n}`,
  name: "Client name",
  logo: images.clientLogoPlaceholder,
  industry: "Industry",
  placeholder: true,
});

export const clients: Client[] = [1, 2, 3, 4, 5, 6].map(placeholderClient);

/**
 * Optional case study highlights. An empty array hides the section on /clients.
 * Real example shape:
 * {
 *   id: "client-slug-project",
 *   client: "Client name as approved",
 *   title: "Short, factual project title",
 *   challenge: "One or two sentences approved by the client.",
 *   solution: "One or two sentences approved by the client.",
 *   outcome: "Qualitative outcome approved by the client. Numbers only if verified in writing.",
 *   image: { src: "/images/clients/client-slug-project.webp", alt: "Describe the image", width: 800, height: 480 },
 * }
 */
const placeholderCaseStudy = (n: number): CaseStudy => ({
  id: `case-study-${n}`,
  client: "Client name",
  title: "[Placeholder] Case study title",
  challenge:
    "[Placeholder] The problem the client faced, described in one or two sentences approved by the client.",
  solution: "[Placeholder] What DigitizWork designed and built, in one or two sentences.",
  outcome:
    "[Placeholder] The result, described qualitatively and approved by the client. Figures only if the client has verified them in writing.",
  placeholder: true,
});

export const caseStudies: CaseStudy[] = [1, 2].map(placeholderCaseStudy);
