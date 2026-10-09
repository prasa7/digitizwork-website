import type { ImageAsset } from "./types";

/**
 * Every image slot on the site (DIG-52). To use a generated photo instead of an SVG
 * illustration, drop the file into /public/images/... and change `src` here
 * (and width/height if the aspect ratio differs). Prompts: docs/frontend/image-prompts.md.
 */
export const images = {
  heroAiCore: {
    src: "/images/hero/ai-core.svg",
    alt: "Illustration of an AI core connected to a network of nodes, surrounded by panels showing code, a chat conversation and a data chart.",
    width: 640,
    height: 560,
  },
  serviceWebMobile: {
    src: "/images/services/web-mobile.svg",
    alt: "Illustration of a web browser window and a mobile phone showing an app interface.",
    width: 400,
    height: 240,
  },
  serviceAiAssistants: {
    src: "/images/services/ai-assistants.svg",
    alt: "Illustration of a chat conversation between a person and a glowing AI assistant.",
    width: 400,
    height: 240,
  },
  serviceAutomation: {
    src: "/images/services/automation.svg",
    alt: "Illustration of documents flowing through an AI node and coming out as completed tasks.",
    width: 400,
    height: 240,
  },
  serviceDataAnalytics: {
    src: "/images/services/data-analytics.svg",
    alt: "Illustration of a dashboard with a bar chart, a trend line and a ring chart.",
    width: 400,
    height: 240,
  },
  serviceCloudIntegration: {
    src: "/images/services/cloud-integration.svg",
    alt: "Illustration of a cloud connected to several application blocks.",
    width: 400,
    height: 240,
  },
  serviceCustomSoftware: {
    src: "/images/services/custom-software.svg",
    alt: "Illustration of layered code editor windows with code brackets.",
    width: 400,
    height: 240,
  },
  aboutCollaboration: {
    src: "/images/about/collaboration.svg",
    alt: "Illustration of people connected around a central AI node, representing consultants working with AI.",
    width: 560,
    height: 420,
  },
  aboutTeamNetwork: {
    src: "/images/about/team-network.svg",
    alt: "Illustration of a network of people linked together around a glowing core.",
    width: 560,
    height: 460,
  },
  consultantPlaceholder: {
    src: "/images/team/avatar-placeholder.svg",
    alt: "",
    width: 400,
    height: 400,
  },
  // /clients hero (DIG-59)
  clientsHero: {
    src: "/images/clients/clients-hero.svg",
    alt: "Illustration of six abstract organisation tiles connected to a glowing central core.",
    width: 560,
    height: 460,
  },
  // /testimonials hero (DIG-60)
  testimonialsHero: {
    src: "/images/testimonials/testimonials-hero.svg",
    alt: "Illustration of layered quote cards with abstract text lines and faceless avatars.",
    width: 560,
    height: 460,
  },
  // Neutral stand-in for client logos (DIG-59). Decorative: the client name is shown as text.
  clientLogoPlaceholder: {
    src: "/images/clients/logo-placeholder.svg",
    alt: "",
    width: 240,
    height: 96,
  },
} satisfies Record<string, ImageAsset>;
