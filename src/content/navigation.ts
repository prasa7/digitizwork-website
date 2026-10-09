import type { NavLink } from "./types";

/**
 * Navigation, defined once. Items can target an anchored section ({ kind: "section" }) or a
 * route ({ kind: "route" }).
 * Phase 2: change { kind: "section", section: "services" } to { kind: "route", path: "/services" }.
 */
const services: NavLink = { label: "Services", target: { kind: "section", section: "services" } };
// Optional section pending owner decision OQ-5; remove this item if the section is disabled.
const howWeWork: NavLink = { label: "How we work", target: { kind: "section", section: "approach" } };
const whyUs: NavLink = { label: "Why us", target: { kind: "section", section: "why-us" } };
const about: NavLink = { label: "About", target: { kind: "route", path: "/about" } };
const clients: NavLink = { label: "Clients", target: { kind: "route", path: "/clients" } }; // DIG-59
const feedback: NavLink = { label: "Feedback", target: { kind: "route", path: "/testimonials" } }; // DIG-60
const contactLink: NavLink = { label: "Contact", target: { kind: "section", section: "contact" } };

/** Full list: mobile menu and footer "Explore" column. */
export const primaryNav: NavLink[] = [services, howWeWork, whyUs, about, clients, feedback, contactLink];

/**
 * Shorter list for the desktop header (lg and up), so it stays uncluttered at 1024px.
 * "How we work" and "Why us" are home page sections; they stay in the mobile menu and footer.
 */
export const desktopNav: NavLink[] = [services, about, clients, feedback, contactLink];

// TODO(content): CTA label to be confirmed by Marketing.
export const headerCta: NavLink = {
  label: "Start a project",
  target: { kind: "section", section: "contact" },
};

export const legalNav: NavLink[] = [
  // Route not built yet (DIG-27, OQ-3). Rendered as text until it exists.
  { label: "Privacy notice", target: { kind: "route", path: "/privacy" }, pending: true },
];
