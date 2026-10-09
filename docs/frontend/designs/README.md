# Design screenshots

Captured 2026-10-10 from the **production image** (`docker compose --profile prod up -d --build web-prod`, http://localhost:8080) with Playwright 1.64.0 (Chromium) in Docker, using [capture.mjs](capture.mjs). Captured with `prefers-reduced-motion: reduce` so floating animations are frozen. Mobile shots use a 2x device scale factor.

All copy is placeholder text pending owner approval, except the confirmed email (consultant@digitizwork.com) and location (Melbourne, Australia).

| File | Page | Viewport | Jira |
|---|---|---|---|
| [DIG-23-home-desktop-1440.png](DIG-23-home-desktop-1440.png) | `/` full page | 1440 x 900 | DIG-22 (design system), DIG-23 (shell and sections), DIG-52 (AI visual design and illustrations), DIG-25 (About teaser and footer) |
| [DIG-23-home-mobile-390.png](DIG-23-home-mobile-390.png) | `/` full page | 390 x 844 | DIG-22, DIG-23, DIG-52, DIG-25 |
| [DIG-23-mobile-menu.png](DIG-23-mobile-menu.png) | `/` mobile menu open, first link focused | 390 x 844 | DIG-23 |
| [DIG-53-about-desktop-1440.png](DIG-53-about-desktop-1440.png) | `/about` full page | 1440 x 900 | DIG-53 (About us page with consultants), DIG-52 |
| [DIG-53-about-mobile-390.png](DIG-53-about-mobile-390.png) | `/about` full page | 390 x 844 | DIG-53, DIG-52 |

Illustrations shown (all original SVG, DIG-52): `public/images/hero/ai-core.svg`, `public/images/services/*.svg` (6), `public/images/about/collaboration.svg`, `public/images/about/team-network.svg`, `public/images/team/avatar-placeholder.svg`.

## Re-capturing

From the project root in Git Bash (Windows), with the production container running on :8080:

```sh
MSYS_NO_PATHCONV=1 docker run --rm --add-host=host.docker.internal:host-gateway \
  -v "$(pwd -W):/work" -w /tmp mcr.microsoft.com/playwright:v1.64.0-noble \
  sh -c "npm init -y >/dev/null && npm i --silent playwright@1.64.0 && cp /work/docs/frontend/designs/capture.mjs . && node capture.mjs"
```

The script also prints smoke-check results: horizontal overflow at 360/390/768/1024/1280/1440 on `/` and `/about`, H1 count, console errors, and mobile-menu keyboard behaviour (aria-expanded, focus on open, Escape closes and restores focus, skip link is the first tab stop).

Use the production image, not the dev server: Next.js 16 does not serve dev-mode JavaScript to the `host.docker.internal` origin unless it is listed in `allowedDevOrigins`, so pages captured from :3000 inside the Playwright container never hydrate and the mobile menu cannot open.
