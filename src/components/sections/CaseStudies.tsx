import type { CaseStudy, ClientsPageContent } from "@/content/types";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "./CaseStudyCard";

interface CaseStudiesProps {
  content: ClientsPageContent["caseStudies"];
  studies: CaseStudy[];
}

/** Optional case study highlights on /clients (DIG-59). Renders nothing when the list is empty. */
export function CaseStudies({ content, studies }: CaseStudiesProps) {
  if (studies.length === 0) return null;
  return (
    <Section id="case-studies">
      <SectionHeader id="case-studies-title" content={content} />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
        {studies.map((study) => (
          <li key={study.id}>
            <CaseStudyCard study={study} labels={content.labels} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
