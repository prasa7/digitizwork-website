import type { WhyUsContent } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureGrid } from "./FeatureGrid";

/** Why us / capabilities. Qualitative points only: no stats, logos or testimonials. */
export function WhyUs({ content }: { content: WhyUsContent }) {
  return (
    <Section id="why-us" tone="muted">
      <SectionHeader id="why-us-title" content={content} />
      <FeatureGrid items={content.items} className="mt-12 lg:mt-16" />
    </Section>
  );
}
