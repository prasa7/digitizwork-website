import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Story } from "@/components/sections/Story";
import { Team } from "@/components/sections/Team";
import { aboutPage, consultants, images } from "@/content";

// TODO(content): title/description from docs/marketing/seo-strategy.md (DIG-27).
export const metadata: Metadata = {
  title: "About us",
  description:
    "[Placeholder] Meet the DigitizWork consultants who design and build AI-powered software. Description pending the SEO strategy.",
  alternates: { canonical: "/about" },
};

/** /about (DIG-53): company introduction, values and the consultants grid. */
export default function AboutPage() {
  return (
    <>
      <PageHero content={aboutPage.hero} />
      <Story story={aboutPage.story} values={aboutPage.values} />
      <Team
        content={aboutPage.team}
        consultants={consultants}
        fallbackImage={images.consultantPlaceholder}
      />
      <CtaBand content={aboutPage.cta} />
    </>
  );
}
