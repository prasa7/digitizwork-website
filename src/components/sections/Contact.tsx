import type { ContactContent } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "./ContactForm";

export function Contact({ content, headingAs = "h2" }: { content: ContactContent; headingAs?: "h1" | "h2" }) {
  return (
    <Section
      id="contact"
      tone="dark"
      background={
        <>
          <div className="absolute inset-0 bg-linear-to-br from-brand-900 via-ink-950 to-ink-950" />
          <div className="bg-grid-dark absolute inset-0" />
          <div className="absolute -bottom-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-brand-600/25 blur-3xl" />
          <div className="absolute top-10 right-0 h-[26rem] w-[26rem] rounded-full bg-iris-600/20 blur-3xl" />
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeader id="contact-title" content={content} as={headingAs} tone="dark" />
          <ul className="mt-10 space-y-4">
            {content.details.map((detail) => (
              <li
                key={detail.label}
                className="flex items-center gap-4 rounded-card border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-control bg-linear-to-br from-brand-500 to-iris-600 text-white">
                  <Icon name={detail.icon} className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-ink-300">{detail.label}</span>
                  {detail.href ? (
                    <a href={detail.href} className="font-semibold break-all text-white underline decoration-white/30 underline-offset-4 hover:text-brand-200 hover:decoration-brand-200">
                      {detail.value}
                    </a>
                  ) : (
                    <span className="font-semibold text-white">{detail.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm content={content.form} />
      </div>
    </Section>
  );
}
