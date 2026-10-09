import type { FeatureItem } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/components/ui/cn";

interface FeatureGridProps {
  items: FeatureItem[];
  className?: string;
}

/** Grid of icon + title + description cards. Used by Why us (home) and Values (/about). */
export function FeatureGrid({ items, className }: FeatureGridProps) {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6", className)}>
      {items.map((item) => (
        <li
          key={item.title}
          className="group relative overflow-hidden rounded-card border border-ink-200 bg-white p-6 shadow-card transition duration-300 hover:border-brand-200 hover:shadow-raised sm:p-7"
        >
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 size-40 rounded-full bg-linear-to-br from-brand-100 to-iris-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="relative inline-flex size-12 items-center justify-center rounded-control bg-linear-to-br from-brand-600 to-iris-600 text-white shadow-[0_8px_20px_-8px_rgb(58_99_234/0.7)]">
            <Icon name={item.icon} className="size-6" />
          </span>
          <h3 className="relative mt-5 text-lg font-bold">{item.title}</h3>
          <p className="relative mt-2 leading-relaxed text-ink-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
