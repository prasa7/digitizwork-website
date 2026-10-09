import type { FeatureItem, SectionIntro } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureGrid } from "./FeatureGrid";

interface StoryProps {
  story: SectionIntro & { paragraphs: string[] };
  values: SectionIntro & { items: FeatureItem[] };
}

/** /about company introduction plus guiding values. */
export function Story({ story, values }: StoryProps) {
  return (
    <Section id="story" tone="muted">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeader id="story-title" content={story} />
        <div className="space-y-5 text-lg leading-relaxed text-ink-600 lg:pt-10">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="mt-20 lg:mt-28">
        <SectionHeader id="values-title" content={values} />
        <FeatureGrid items={values.items} className="mt-10 lg:mt-12" />
      </div>
    </Section>
  );
}
