import type { SectionIntro } from "@/content/types";
import { StatusTag } from "./StatusTag";
import { cn } from "./cn";

interface SectionHeaderProps {
  /** Heading id, used by the parent Section's aria-labelledby. */
  id: string;
  content: SectionIntro;
  /** h2 on the home page; h1 when the section heads its own page (Phase 2). */
  as?: "h1" | "h2";
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  id,
  content,
  as: Heading = "h2",
  align = "left",
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div className={cn("flex flex-wrap items-center gap-3", align === "center" && "justify-center")}>
        <p
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase",
            dark ? "text-accent-300" : "text-brand-700",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("h-px w-6", dark ? "bg-accent-300" : "bg-brand-600")}
          />
          {content.eyebrow}
        </p>
        {content.statusTag ? <StatusTag tone={tone}>{content.statusTag}</StatusTag> : null}
      </div>
      <Heading
        id={id}
        className={cn(
          "mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl lg:leading-[1.1]",
          dark && "text-white",
        )}
      >
        {content.title}
      </Heading>
      {content.intro ? (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-ink-300" : "text-ink-600")}>
          {content.intro}
        </p>
      ) : null}
    </div>
  );
}
