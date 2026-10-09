import type { Consultant, ImageAsset, SectionIntro } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ConsultantCard } from "./ConsultantCard";

interface TeamProps {
  content: SectionIntro;
  consultants: Consultant[];
  fallbackImage: ImageAsset;
}

/** "Meet our consultants" grid on /about, driven by src/content/consultants.ts. */
export function Team({ content, consultants, fallbackImage }: TeamProps) {
  return (
    <Section id="team" background={<div className="bg-grid-light absolute inset-0" />}>
      <SectionHeader id="team-title" content={content} align="center" />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {consultants.map((consultant) => (
          <li key={consultant.id}>
            <ConsultantCard consultant={consultant} fallbackImage={fallbackImage} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
