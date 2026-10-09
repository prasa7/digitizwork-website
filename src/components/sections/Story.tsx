import type { FeatureItem, SectionIntro } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureGrid } from "./FeatureGrid";

interface StoryProps {
  story: SectionIntro & { paragraphs: string[] };
  values: SectionIntro & { items: FeatureItem[] };
  /** Section anchor. "story" on /about, "who-we-help" on /clients. */
  id?: string;
  tone?: "light" | "muted";
}

/** Intro paragraphs plus a feature grid: company story and values on /about, audiences on /clients. */
export function Story({ story, values, id = "story", tone = "muted" }: StoryProps) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeader id={`${id}-title`} content={story} />
        <div className="space-y-5 text-lg leading-relaxed text-ink-600 lg:pt-10">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="mt-20 lg:mt-28">
        <SectionHeader id={id === "story" ? "values-title" : `${id}-items-title`} content={values} />
        <FeatureGrid items={values.items} className="mt-10 lg:mt-12" />
      </div>
    </Section>
  );
}
