// Captures design screenshots and runs quick layout/a11y smoke checks.
// Runs inside the official Playwright image so nothing is installed on the host:
//
//   MSYS_NO_PATHCONV=1 docker run --rm --add-host=host.docker.internal:host-gateway \
//     -v "$(pwd -W):/work" -w /tmp mcr.microsoft.com/playwright:v1.64.0-noble \
//     sh -c "npm init -y >/dev/null && npm i --silent playwright@1.64.0 && cp /work/docs/frontend/designs/capture.mjs . && node capture.mjs"
//
// Env: BASE_URL (default http://host.docker.internal:8080), OUT_DIR (default /work/docs/frontend/designs).
import { chromium } from "playwright";

// Production image (docker compose --profile prod up -d --build web-prod). The dev server on :3000
// does not serve its dev JS to the host.docker.internal origin (allowedDevOrigins), so pages never hydrate there.
const BASE = process.env.BASE_URL ?? "http://host.docker.internal:8080";
const OUT = process.env.OUT_DIR ?? "/work/docs/frontend/designs";

const shots = [
  { file: "DIG-23-home-desktop-1440.png", path: "/", width: 1440, height: 900 },
  { file: "DIG-23-home-mobile-390.png", path: "/", width: 390, height: 844 },
  { file: "DIG-53-about-desktop-1440.png", path: "/about", width: 1440, height: 900 },
  { file: "DIG-53-about-mobile-390.png", path: "/about", width: 390, height: 844 },
  { file: "DIG-59-clients-desktop-1440.png", path: "/clients", width: 1440, height: 900 },
  { file: "DIG-59-clients-mobile-390.png", path: "/clients", width: 390, height: 844 },
  { file: "DIG-60-testimonials-desktop-1440.png", path: "/testimonials", width: 1440, height: 900 },
  { file: "DIG-60-testimonials-mobile-390.png", path: "/testimonials", width: 390, height: 844 },
];
const checkWidths = [360, 390, 768, 1024, 1280, 1440];

const browser = await chromium.launch();
const results = { screenshots: [], overflow: [], h1: {}, titles: {}, placeholderTags: {}, consoleErrors: [], menu: {}, desktopNav: {} };

async function openPage(width, height, path) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: width < 768 ? 2 : 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") results.consoleErrors.push(`${path}@${width}: ${msg.text()}`);
  });
  page.on("pageerror", (err) => results.consoleErrors.push(`${path}@${width}: ${err.message}`));
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  return { context, page };
}

// Scroll through so lazy images load before a full-page capture.
async function loadLazy(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(300);
}

for (const s of shots) {
  const { context, page } = await openPage(s.width, s.height, s.path);
  await loadLazy(page);
  await page.screenshot({ path: `${OUT}/${s.file}`, fullPage: true });
  results.screenshots.push(s.file);
  await context.close();
}

// Mobile menu open (viewport capture) + keyboard behaviour.
{
  const { context, page } = await openPage(390, 844, "/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.focus();
  await page.keyboard.press("Enter");
  const nav = page.getByRole("navigation", { name: "Main menu" });
  await nav.waitFor({ state: "visible" });
  results.menu.expandedAfterOpen = await page
    .getByRole("button", { name: "Close menu" })
    .getAttribute("aria-expanded");
  results.menu.focusAfterOpen = await page.evaluate(() => document.activeElement?.textContent?.trim());
  results.menu.items = await nav.getByRole("listitem").allTextContents();
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${OUT}/DIG-23-mobile-menu.png` });
  results.screenshots.push("DIG-23-mobile-menu.png");
  await page.keyboard.press("Escape");
  results.menu.visibleAfterEscape = await nav.isVisible();
  results.menu.focusAfterEscape = await page.evaluate(() =>
    document.activeElement?.getAttribute("aria-controls") ? "menu toggle" : document.activeElement?.tagName,
  );
  // Skip link is the first tab stop on a fresh load.
  await page.reload({ waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  results.menu.firstTabStop = await page.evaluate(() => document.activeElement?.textContent?.trim());
  await context.close();
}

// Horizontal overflow and H1 count at each width.
const pages = ["/", "/about", "/clients", "/testimonials"];
for (const path of pages) {
  for (const width of checkWidths) {
    const { context, page } = await openPage(width, 900, path);
    const { scrollWidth, clientWidth, h1, title, canonical, placeholderTags, navItems, navHeight } =
      await page.evaluate(() => {
        const nav = document.querySelector('nav[aria-label="Main"]');
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          h1: document.querySelectorAll("h1").length,
          title: document.title,
          canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
          // Visible "Placeholder" tags on cards (DIG-59, DIG-60 integrity rule)
          placeholderTags: [...document.querySelectorAll("main span")].filter(
            (el) => el.textContent?.trim() === "Placeholder" && el.offsetParent !== null,
          ).length,
          navItems: nav && nav.offsetParent !== null ? nav.querySelectorAll("li").length : 0,
          navHeight: nav && nav.offsetParent !== null ? Math.round(nav.getBoundingClientRect().height) : 0,
        };
      });
    results.overflow.push({ path, width, horizontalScroll: scrollWidth > clientWidth });
    results.h1[path] = h1;
    results.titles[path] = { title, canonical };
    results.placeholderTags[path] = placeholderTags;
    // Desktop nav must stay on one line (single row of pills is about 36px tall).
    if (path === "/" && width >= 1024) results.desktopNav[width] = { items: navItems, height: navHeight };
    await context.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
