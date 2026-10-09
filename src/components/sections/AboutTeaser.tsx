import type { AboutTeaserContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Short About block on the home page, linking to the full /about page. */
export function AboutTeaser({ content }: { content: AboutTeaserContent }) {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-last lg:order-first">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-brand-100 via-iris-100 to-accent-100 opacity-70 blur-2xl"
          />
          <div className="overflow-hidden rounded-panel bg-ink-950 shadow-raised ring-1 ring-ink-200">
            <ImageSlot
              image={content.image}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
        <div>
          <SectionHeader id="about-title" content={content} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-600">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ButtonLink link={content.cta} className="mt-8" arrow />
        </div>
      </div>
    </Section>
  );
}
