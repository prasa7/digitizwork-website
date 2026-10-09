import type { Client } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StatusTag } from "@/components/ui/StatusTag";
import { cn } from "@/components/ui/cn";

interface ClientCardProps {
  client: Client;
  /** Smaller tile for the home page logo strip (no industry or website link). */
  compact?: boolean;
}

/**
 * Client logo and name (DIG-59). The name is always shown as text, so the logo is decorative.
 * Placeholder entries always show a visible "Placeholder" tag.
 */
export function ClientCard({ client, compact = false }: ClientCardProps) {
  const c = client;
  return (
    <article
      className={cn(
        "flex h-full flex-col items-center rounded-card border border-ink-200 bg-white text-center shadow-card",
        compact ? "gap-2 p-4" : "gap-3 p-4 transition duration-300 hover:shadow-raised sm:p-6",
      )}
    >
      {c.placeholder ? <StatusTag className="self-start">Placeholder</StatusTag> : null}
      <div className={cn("flex w-full items-center justify-center", compact ? "h-12" : "h-14 sm:h-20")}>
        {c.logo ? (
          <ImageSlot
            image={{ ...c.logo, alt: "" }}
            sizes="240px"
            className="h-full w-auto max-w-full object-contain"
          />
        ) : (
          <span className="inline-flex size-12 items-center justify-center rounded-control bg-ink-100 text-ink-500">
            <Icon name="building" className="size-6" />
          </span>
        )}
      </div>
      {compact ? (
        <p className="font-display text-sm font-bold text-ink-950">{c.name}</p>
      ) : (
        <h3 className="text-base font-bold">{c.name}</h3>
      )}
      {!compact && c.industry ? <p className="text-sm text-ink-600">{c.industry}</p> : null}
      {!compact && c.website ? (
        <a
          href={c.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 rounded text-sm font-semibold text-brand-700 hover:underline"
        >
          Visit website
          <span className="sr-only">
            {" "}
            of {c.name} (opens in a new tab)
          </span>
          <Icon name="external" className="size-4" />
        </a>
      ) : null}
    </article>
  );
}
