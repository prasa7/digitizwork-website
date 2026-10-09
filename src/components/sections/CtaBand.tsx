import type { CtaBandContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Gradient call-to-action panel, used at the end of inner pages. */
export function CtaBand({ content }: { content: CtaBandContent }) {
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-20 sm:pb-24 lg:pb-32">
      <Container>
        <div className="surface-dark relative isolate overflow-hidden rounded-panel bg-linear-to-br from-brand-700 via-iris-700 to-brand-900 px-6 py-14 text-center shadow-raised sm:px-12 lg:py-20">
          <div aria-hidden="true" className="bg-grid-dark absolute inset-0 -z-10" />
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent-300/20 blur-3xl"
          />
          <h2 id="cta-title" className="text-3xl font-bold text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">{content.text}</p>
          <ButtonLink link={content.cta} variant="light" size="lg" className="mt-8" arrow />
        </div>
      </Container>
    </section>
  );
}
