import Link from "next/link";
import type { ReactNode } from "react";
import { hrefFor } from "@/content/links";
import type { NavLink } from "@/content/types";

interface SmartLinkProps {
  link: NavLink;
  className?: string;
  children?: ReactNode;
  "aria-current"?: "page" | undefined;
}

/**
 * Renders a NavLink from content: internal targets use next/link, external ones open safely,
 * and pending destinations (routes not built yet) render as plain text.
 */
export function SmartLink({ link, className, children, ...rest }: SmartLinkProps) {
  const label = children ?? link.label;
  if (link.pending) {
    return <span className={className}>{label}</span>;
  }
  if (link.target.kind === "external") {
    return (
      <a href={link.target.url} className={className} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return (
    <Link href={hrefFor(link.target)} className={className} aria-current={rest["aria-current"]}>
      {label}
    </Link>
  );
}
