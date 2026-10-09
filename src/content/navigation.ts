import type { NavLink } from "./types";

/**
 * Primary navigation, defined once and used by the desktop nav, the mobile menu and the footer.
 * Items can target an anchored section ({ kind: "section" }) or a route ({ kind: "route" }).
 * Phase 2: change { kind: "section", section: "services" } to { kind: "route", path: "/services" }.
 */
export const primaryNav: NavLink[] = [
  { label: "Services", target: { kind: "section", section: "services" } },
  // Optional section pending owner decision OQ-5; remove this item if the section is disabled.
  { label: "How we work", target: { kind: "section", section: "approach" } },
  { label: "Why us", target: { kind: "section", section: "why-us" } },
  { label: "About", target: { kind: "route", path: "/about" } },
  { label: "Contact", target: { kind: "section", section: "contact" } },
];

// TODO(content): CTA label to be confirmed by Marketing.
export const headerCta: NavLink = {
  label: "Start a project",
  target: { kind: "section", section: "contact" },
};

export const legalNav: NavLink[] = [
  // Route not built yet (DIG-27, OQ-3). Rendered as text until it exists.
  { label: "Privacy notice", target: { kind: "route", path: "/privacy" }, pending: true },
];
