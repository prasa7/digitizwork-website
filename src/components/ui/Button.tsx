import type { ReactNode } from "react";
import type { NavLink } from "@/content/types";
import { cn } from "./cn";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export type ButtonVariant = "primary" | "secondary" | "ghost-dark" | "light";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-control font-semibold whitespace-nowrap transition duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  // White text on brand-600 to iris-600 gradient: 7.00:1 to 5.67:1
  primary:
    "bg-linear-to-r from-brand-600 to-iris-600 text-white shadow-[0_8px_24px_-8px_rgb(58_99_234/0.6)] hover:from-brand-700 hover:to-iris-700 hover:shadow-[0_12px_32px_-8px_rgb(58_99_234/0.7)]",
  // For light surfaces
  secondary: "border border-ink-300 bg-white text-ink-950 hover:border-ink-400 hover:bg-ink-50",
  // For dark surfaces
  "ghost-dark":
    "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10",
  // Solid white for dark or gradient surfaces
  light: "bg-white text-ink-950 hover:bg-brand-50",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-base",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonLinkProps {
  link: NavLink;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
  children?: ReactNode;
}

/** A link styled as a button, driven by a NavLink from content. */
export function ButtonLink({ link, variant, size, className, arrow, children }: ButtonLinkProps) {
  return (
    <SmartLink link={link} className={buttonClasses(variant, size, className)}>
      {children ?? link.label}
      {arrow ? (
        <Icon
          name="arrowRight"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </SmartLink>
  );
}
