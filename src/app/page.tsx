import type { Metadata } from "next";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { aboutTeaser, approach, contact, hero, services, whyUs } from "@/content";

// TODO(content): title/description from docs/marketing/seo-strategy.md (DIG-27).
export const metadata: Metadata = {
  title: { absolute: "DigitizWork | AI-powered software delivery" },
  description:
    "[Placeholder] DigitizWork designs, builds and runs software solutions with AI. Description pending the SEO strategy.",
  alternates: { canonical: "/" },
};

/** Single-page home. Each section is a self-contained component fed by a content module. */
export default function HomePage() {
  return (
    <>
      <Hero content={hero} />
      <Services content={services} />
      <Approach content={approach} />
      <WhyUs content={whyUs} />
      <AboutTeaser content={aboutTeaser} />
      <Contact content={contact} />
    </>
  );
}
