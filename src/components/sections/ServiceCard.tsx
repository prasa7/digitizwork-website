import type { ServiceItem } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { SmartLink } from "@/components/ui/SmartLink";

/** One service: illustration, icon, title, summary, tags and optional detail link (Phase 2). */
export function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-panel border border-ink-200 bg-white shadow-card transition duration-300 hover:border-brand-200 hover:shadow-raised motion-safe:hover:-translate-y-1">
      <div className="relative overflow-hidden bg-ink-950">
        <ImageSlot
          image={item.image}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-control bg-linear-to-br from-brand-50 to-iris-50 text-brand-700 ring-1 ring-brand-100">
            <Icon name={item.icon} className="size-5" />
          </span>
          <h3 className="text-xl font-bold">{item.title}</h3>
        </div>
        <p className="mt-4 leading-relaxed text-ink-600">{item.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label={`${item.title} focus areas`}>
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-700"
            >
              {tag}
            </li>
          ))}
        </ul>
        {item.link ? (
          <SmartLink
            link={item.link}
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
          >
            {item.link.label}
            <Icon name="arrowRight" className="size-4" />
          </SmartLink>
        ) : null}
      </div>
    </article>
  );
}
