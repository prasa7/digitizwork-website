import type { Client, Testimonial, TrustedTeaserContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ClientCard } from "./ClientCard";
import { TestimonialCard } from "./TestimonialCard";

interface TrustedTeaserProps {
  content: TrustedTeaserContent;
  clients: Client[];
  testimonials: Testimonial[];
}

/** Home teaser (DIG-59, DIG-60): client logo strip, one featured testimonial, links to both pages. */
export function TrustedTeaser({ content, clients, testimonials }: TrustedTeaserProps) {
  const strip = clients.slice(0, content.clientLimit);
  const featured =
    testimonials.find((t) => t.id === content.featuredTestimonialId) ?? testimonials[0];
  if (strip.length === 0 && !featured) return null;

  return (
    <Section id="trusted-by" tone="muted">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader id="trusted-by-title" content={content} />
        <div className="flex shrink-0 flex-wrap gap-3">
          <ButtonLink link={content.clientsLink} variant="secondary" arrow />
          <ButtonLink link={content.testimonialsLink} variant="secondary" arrow />
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        {strip.length > 0 ? (
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-ink-600 uppercase">
              {content.clientsLabel}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {strip.map((client) => (
                <li key={client.id}>
                  <ClientCard client={client} compact />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {featured ? <TestimonialCard testimonial={featured} featured /> : null}
      </div>
    </Section>
  );
}
