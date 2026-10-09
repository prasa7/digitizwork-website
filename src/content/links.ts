import type { LinkTarget } from "./types";

/**
 * Resolves a LinkTarget to an href.
 * Section links resolve to "/#id", which works both on the home page and from any other route.
 */
export function hrefFor(target: LinkTarget): string {
  switch (target.kind) {
    case "section":
      return `${target.page ?? "/"}#${target.section}`;
    case "route":
      return target.path;
    case "external":
      return target.url;
  }
}
