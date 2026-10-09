import type { Consultant, ImageAsset } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StatusTag } from "@/components/ui/StatusTag";

interface ConsultantCardProps {
  consultant: Consultant;
  /** Silhouette illustration used until a real photo is supplied. */
  fallbackImage: ImageAsset;
}

/** Consultant profile card. Optional fields (specialisms, location, LinkedIn) render only when present. */
export function ConsultantCard({ consultant, fallbackImage }: ConsultantCardProps) {
  const c = consultant;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-ink-200 bg-white shadow-card transition duration-300 hover:shadow-raised motion-safe:hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-ink-950">
        <ImageSlot
          image={c.photo ?? fallbackImage}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
        />
        {c.placeholder ? (
          <StatusTag tone="dark" className="absolute top-4 left-4 bg-ink-950/70 backdrop-blur">
            Placeholder
          </StatusTag>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold">{c.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-brand-700">{c.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">{c.bio}</p>
        {c.specialisms?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${c.name} specialisms`}>
            {c.specialisms.map((item, index) => (
              <li key={`${item}-${index}`} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        <div aria-hidden="true" className="flex-1" />
        {c.location || c.linkedin ? (
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-100 pt-4 text-sm text-ink-600">
            {c.location ? (
              <span className="inline-flex items-center gap-1.5">
                <Icon name="mapPin" className="size-4 text-ink-500" />
                {c.location}
              </span>
            ) : (
              <span />
            )}
            {c.linkedin ? (
              <a
                href={c.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-control text-ink-600 hover:bg-brand-50 hover:text-brand-700"
              >
                <Icon name="linkedin" className="size-5" title={`${c.name} on LinkedIn`} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
