import type { ServicesContent } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "./ServiceCard";

interface ServicesProps {
  content: ServicesContent;
  /** "h1" when this section heads a dedicated /services page (Phase 2). */
  headingAs?: "h1" | "h2";
}

export function Services({ content, headingAs = "h2" }: ServicesProps) {
  return (
    <Section id="services" background={<div className="bg-grid-light absolute inset-0" />}>
      <SectionHeader id="services-title" content={content} as={headingAs} align="center" />
      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {content.items.map((item) => (
          <li key={item.id} id={`service-${item.id}`}>
            <ServiceCard item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
