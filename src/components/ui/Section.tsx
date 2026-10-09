import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "./cn";

export type SectionTone = "light" | "muted" | "dark";

const tones: Record<SectionTone, string> = {
  light: "bg-white",
  muted: "bg-ink-50",
  dark: "surface-dark bg-ink-950 text-ink-300",
};

interface SectionProps {
  id: string;
  tone?: SectionTone;
  /** id of the heading that names this region. Defaults to `${id}-title`. */
  labelledBy?: string;
  className?: string;
  /** Decorative layers rendered behind the container (glows, grids). */
  background?: ReactNode;
  children: ReactNode;
}

/** Page region with an anchor id, accessible name, tone and consistent vertical rhythm. */
export function Section({ id, tone = "light", labelledBy, className, background, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-title`}
      className={cn("relative isolate overflow-hidden py-20 sm:py-24 lg:py-32", tones[tone], className)}
    >
      {background ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          {background}
        </div>
      ) : null}
      <Container>{children}</Container>
    </section>
  );
}
