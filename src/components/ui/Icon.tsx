import type { ReactNode } from "react";
import type { IconName } from "@/content/types";

// Original 24px outline icons (stroke = currentColor), no icon library dependency.
const paths: Record<IconName, ReactNode> = {
  layers: (
    <>
      <path d="M12 3 21 8l-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M6.5 10v3a4 4 0 0 0 4 4H14" />
      <path d="M17.5 14v-3a4 4 0 0 0-4-4H10" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  shield: <path d="M12 3 19 6v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3Z" />,
  spark: (
    <>
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />
      <path d="M19 15.5c.25 1.6 1 2.3 2.5 2.5-1.5.25-2.25 1-2.5 2.5-.25-1.5-1-2.25-2.5-2.5 1.5-.2 2.25-.9 2.5-2.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-5 4v-4h0a1 1 0 0 1-1-1v-9.5Z" />
      <path d="M8.5 9.5h7M8.5 12.5h4" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.6-3.6 3.2-6 6.5-6s5.9 2.4 6.5 6" />
      <path d="M15.5 4.6a3.5 3.5 0 0 1 0 6.8" />
      <path d="M18 14.4c2 .8 3.2 2.9 3.5 5.6" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4c3-1 5.5-1 6-.5.5.5.5 3-.5 6L13 16l-5-5 6-7Z" />
      <path d="M8 11 4.5 10.5 7 7.5l4-.5" />
      <path d="m13 16 .5 3.5 3-2.5.5-4" />
      <path d="M6.5 15.5c-1.5.5-2.5 2-2.5 4.5 2.5 0 4-1 4.5-2.5" />
      <circle cx="15.5" cy="8.5" r="1.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.5v.01M11.5 16v-5.5M11.5 13c0-1.7 1-2.7 2.4-2.7 1.4 0 2.1 1 2.1 2.7V16" />
    </>
  ),
  quote: (
    <>
      <path d="M4 18v-5.5C4 8.5 6 6 9.5 5.5M4 12.5h4.5V18H4" />
      <path d="M13.5 18v-5.5c0-4 2-6.5 5.5-7M13.5 12.5H18V18h-4.5" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="11" height="18" rx="1.5" />
      <path d="M15 9h3.5A1.5 1.5 0 0 1 20 10.5V21H2" />
      <path d="M8 7h3M8 11h3M8 15h3" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="m20 4-9 9" />
      <path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  /** Accessible label. Omit for decorative icons (default). */
  title?: string;
}

export function Icon({ name, className = "size-5", title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
