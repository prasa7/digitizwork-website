import type { PageHeroContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";

/** Hero for inner pages (e.g. /about). Holds the page's single H1. */
export function PageHero({ content }: { content: PageHeroContent }) {
  return (
    <section
      aria-labelledby="page-title"
      className="surface-dark relative isolate overflow-hidden bg-ink-950"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid-dark absolute inset-0" />
        <div className="absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-iris-600/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blur-3xl" />
      </div>
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent-300 uppercase">
            {content.eyebrow}
          </p>
          <h1
            id="page-title"
            className="mt-4 text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            {content.title}{" "}
            {content.titleHighlight ? (
              <span className="text-gradient-ai">{content.titleHighlight}</span>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">{content.lead}</p>
        </div>
        {content.image ? (
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute inset-[15%] -z-10 rounded-full bg-linear-to-br from-brand-500/40 to-iris-500/40 blur-3xl motion-safe:animate-glow"
            />
            <ImageSlot
              image={content.image}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
