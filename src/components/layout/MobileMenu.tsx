"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { NavLink } from "@/content/types";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SmartLink } from "@/components/ui/SmartLink";
import { cn } from "@/components/ui/cn";
import { useIsCurrent } from "./useIsCurrent";

interface MobileMenuProps {
  items: NavLink[];
  cta: NavLink;
}

/**
 * Disclosure-pattern mobile menu (below the lg breakpoint).
 * - Toggle button exposes aria-expanded / aria-controls.
 * - Opening moves focus to the first link; Escape closes and returns focus to the toggle.
 * - Tabbing out of the panel, clicking outside, choosing a link or widening to desktop closes it.
 */
export function MobileMenu({ items, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isCurrent = useIsCurrent();

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      }
    };
    const isInside = (node: Node | null) =>
      !!node && (panel?.contains(node) || buttonRef.current?.contains(node));
    const onPointerDown = (event: PointerEvent) => {
      if (!isInside(event.target as Node)) close(false);
    };
    const onFocusIn = (event: FocusEvent) => {
      if (!isInside(event.target as Node)) close(false);
    };
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) close(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("focusin", onFocusIn);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("focusin", onFocusIn);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-control border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
      >
        <Icon name={open ? "close" : "menu"} className="size-5" />
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      {open ? (
        <div aria-hidden="true" className="fixed inset-0 -z-20 bg-ink-950/60 backdrop-blur-sm" />
      ) : null}

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-white/10 bg-ink-950 shadow-raised motion-safe:animate-menu-in"
      >
        <nav aria-label="Main menu" className="mx-auto w-full max-w-site px-5 pt-3 pb-6 sm:px-8">
          <ul className="divide-y divide-white/10">
            {items.map((item) => {
              const current = isCurrent(item);
              return (
                <li key={item.label} onClick={() => close(false)}>
                  <SmartLink
                    link={item}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 text-lg font-medium",
                      current ? "text-white" : "text-ink-200 hover:text-white",
                    )}
                  >
                    <span>{item.label}</span>
                    <Icon name="arrowRight" className="size-4 text-ink-400" />
                  </SmartLink>
                </li>
              );
            })}
          </ul>
          <div onClick={() => close(false)} className="mt-5">
            <SmartLink link={cta} className={buttonClasses("primary", "lg", "w-full")} />
          </div>
        </nav>
      </div>
    </div>
  );
}
