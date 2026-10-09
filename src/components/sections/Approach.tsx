import type { ApproachContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** "How we work": optional section (OQ-5). Renders nothing when content.enabled is false. */
export function Approach({ content }: { content: ApproachContent }) {
  if (!content.enabled) return null;
  return (
    <Section
      id="approach"
      tone="dark"
      background={
        <>
          <div className="bg-grid-dark absolute inset-0" />
          <div className="absolute top-0 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-iris-600/20 blur-3xl" />
        </>
      }
    >
      <SectionHeader id="approach-title" content={content} tone="dark" align="center" />
      <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {/* Connecting line behind the step markers on wide screens */}
        <div
          aria-hidden="true"
          className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-brand-400/0 via-brand-400/60 to-accent-300/0 lg:block"
        />
        {content.steps.map((step, index) => (
          <li key={step.title} className="relative">
            <div className="flex flex-col items-start lg:items-center lg:text-center">
              <span className="relative inline-flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-brand-500 to-iris-600 text-white shadow-[0_0_40px_-6px_rgb(124_92_240/0.7)]">
                <Icon name={step.icon} className="size-7" />
                <span className="absolute -top-2 -right-2 inline-flex size-7 items-center justify-center rounded-full border border-white/20 bg-ink-950 text-xs font-bold text-accent-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
              <div className="border-gradient-ai mt-6 w-full rounded-card p-6">
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
