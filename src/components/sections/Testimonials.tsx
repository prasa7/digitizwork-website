import type { SectionIntro, Testimonial } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialsProps {
  content: SectionIntro;
  testimonials: Testimonial[];
}

/** Testimonial grid on /testimonials (DIG-60), driven by src/content/testimonials.ts. */
export function Testimonials({ content, testimonials }: TestimonialsProps) {
  return (
    <Section id="feedback" background={<div className="bg-grid-light absolute inset-0" />}>
      <SectionHeader id="feedback-title" content={content} align="center" />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
