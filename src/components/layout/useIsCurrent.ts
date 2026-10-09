"use client";

import { usePathname } from "next/navigation";
import type { NavLink } from "@/content/types";

/** Returns a predicate marking route links that match the current pathname. */
export function useIsCurrent() {
  const pathname = usePathname();
  return (link: NavLink) =>
    link.target.kind === "route" &&
    (pathname === link.target.path || pathname.startsWith(`${link.target.path}/`));
}
