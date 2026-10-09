import Link from "next/link";
import { cn } from "./cn";

interface WordmarkProps {
  name: string;
  className?: string;
}

/**
 * PROPOSAL pending owner brand assets (discovery Q6): neural-node mark plus wordmark.
 * Replace with the official logo when supplied.
 */
export function Wordmark({ name, className }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 rounded-md text-white", className)}
      aria-label={`${name} home`}
    >
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="wm-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5f86f7" />
            <stop offset="0.55" stopColor="#7c5cf0" />
            <stop offset="1" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#wm-g)" />
        <g stroke="#fff" strokeOpacity="0.85" strokeWidth="1.4" fill="none">
          <path d="M10 10 16 16 22 10M10 22 16 16 22 22" />
        </g>
        <g fill="#fff">
          <circle cx="16" cy="16" r="3" />
          <circle cx="10" cy="10" r="1.8" />
          <circle cx="22" cy="10" r="1.8" />
          <circle cx="10" cy="22" r="1.8" />
          <circle cx="22" cy="22" r="1.8" />
        </g>
      </svg>
      <span className="font-display text-lg font-bold tracking-tight">
        Digitiz<span className="text-brand-300">Work</span>
      </span>
    </Link>
  );
}
