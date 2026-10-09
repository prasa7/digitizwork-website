"use client";

import type { NavLink } from "@/content/types";
import { SmartLink } from "@/components/ui/SmartLink";
import { cn } from "@/components/ui/cn";
import { useIsCurrent } from "./useIsCurrent";

export function DesktopNav({ items }: { items: NavLink[] }) {
  const isCurrent = useIsCurrent();
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const current = isCurrent(item);
          return (
            <li key={item.label}>
              <SmartLink
                link={item}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  current ? "bg-white/10 text-white" : "text-ink-300 hover:bg-white/5 hover:text-white",
                )}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
