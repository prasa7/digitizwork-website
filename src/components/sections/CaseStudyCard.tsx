import type { CaseStudy } from "@/content/types";
import type { ClientsPageContent } from "@/content/types";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StatusTag } from "@/components/ui/StatusTag";

interface CaseStudyCardProps {
  study: CaseStudy;
  labels: ClientsPageContent["caseStudies"]["labels"];
}

/** Case study highlight (DIG-59): client, title, then challenge / solution / outcome. */
export function CaseStudyCard({ study, labels }: CaseStudyCardProps) {
  const s = study;
  const rows = [
    { label: labels.challenge, text: s.challenge },
    { label: labels.solution, text: s.solution },
    { label: labels.outcome, text: s.outcome },
  ];
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-panel border border-ink-200 bg-white shadow-card transition duration-300 hover:shadow-raised">
      {s.image ? (
        <div className="overflow-hidden bg-ink-950">
          <ImageSlot image={s.image} sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full" />
        </div>
      ) : (
        <div aria-hidden="true" className="h-2 bg-linear-to-r from-brand-600 via-iris-600 to-accent-500" />
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold tracking-wide text-brand-700 uppercase">{s.client}</p>
          {s.placeholder ? <StatusTag>Placeholder</StatusTag> : null}
        </div>
        <h3 className="mt-3 text-xl font-bold sm:text-2xl">{s.title}</h3>
        <dl className="mt-6 space-y-5">
          {rows.map((row) => (
            <div key={row.label} className="border-l-2 border-brand-200 pl-4">
              <dt className="text-sm font-semibold text-ink-950">{row.label}</dt>
              <dd className="mt-1 leading-relaxed text-ink-600">{row.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
