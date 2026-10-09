import type { HeroContent } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";

/** Home hero: the only H1 on the home page, dark AI backdrop and the primary CTA to #contact. */
export function Hero({ content }: { content: HeroContent }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="surface-dark relative isolate overflow-hidden bg-ink-950"
    >
      <HeroBackdrop />
      <Container className="grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-32">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pr-4 pl-2 text-sm font-medium text-ink-200 backdrop-blur">
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-iris-500 text-white">
              <Icon name="spark" className="size-3.5" />
            </span>
            {content.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold text-white sm:text-6xl lg:text-display"
          >
            {content.title} <span className="text-gradient-ai">{content.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">{content.lead}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink link={content.primaryCta} size="lg" arrow />
            {content.secondaryCta ? (
              <ButtonLink link={content.secondaryCta} size="lg" variant="ghost-dark" />
            ) : null}
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-300">
            {content.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-accent-300/15 text-accent-300">
                  <Icon name="check" className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-[12%] -z-10 rounded-full bg-linear-to-br from-brand-500/50 via-iris-500/40 to-accent-500/30 blur-3xl motion-safe:animate-glow"
          />
          <ImageSlot
            image={content.image}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full motion-safe:animate-float-slow"
          />
          <FloatingChip className="top-[6%] -right-1 sm:right-2 motion-safe:animate-float" icon="spark" />
          <FloatingChip className="bottom-[10%] -left-1 max-sm:hidden motion-safe:animate-float-slow" icon="check" />
        </div>
      </Container>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-400/60 to-transparent"
      />
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid-dark absolute inset-0" />
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-brand-600/30 blur-3xl" />
      <div className="absolute top-1/4 -right-40 h-[32rem] w-[32rem] rounded-full bg-iris-600/25 blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 h-[24rem] w-[40rem] rounded-full bg-accent-500/10 blur-3xl" />
    </div>
  );
}

/** Decorative glass chip that floats over the hero illustration. */
function FloatingChip({ className, icon }: { className: string; icon: "spark" | "check" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute flex items-center gap-3 rounded-card border border-white/15 bg-ink-900/70 p-3 pr-5 shadow-raised backdrop-blur-md ${className}`}
    >
      <span
        className={
          icon === "spark"
            ? "inline-flex size-9 items-center justify-center rounded-control bg-linear-to-br from-brand-500 to-iris-500 text-white"
            : "inline-flex size-9 items-center justify-center rounded-control bg-accent-300/20 text-accent-300"
        }
      >
        <Icon name={icon} className="size-4.5" />
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="h-1.5 w-20 rounded-full bg-white/50" />
        <span className="h-1.5 w-12 rounded-full bg-white/20" />
      </span>
    </div>
  );
}
