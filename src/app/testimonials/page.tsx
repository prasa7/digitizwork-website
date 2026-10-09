import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeedbackPrompt } from "@/components/sections/FeedbackPrompt";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { testimonials, testimonialsPage } from "@/content";

// TODO(content): title/description from docs/marketing/seo-strategy.md (DIG-27).
export const metadata: Metadata = {
  title: "Client feedback",
  description:
    "[Placeholder] What clients say about working with DigitizWork, published with their written consent. Description pending the SEO strategy.",
  alternates: { canonical: "/testimonials" },
};

/** /testimonials (DIG-60): consented client testimonials, a feedback prompt and a CTA. */
export default function TestimonialsPage() {
  return (
    <>
      <PageHero content={testimonialsPage.hero} />
      <Testimonials content={testimonialsPage.list} testimonials={testimonials} />
      <FeedbackPrompt content={testimonialsPage.share} />
      <CtaBand content={testimonialsPage.cta} />
    </>
  );
}
