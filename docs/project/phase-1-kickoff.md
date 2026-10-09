# DigitizWork website: Phase 1 kickoff

Status: awaiting owner approval. Nothing has been built. Prepared 2026-10-09.

## 1. Workspace inspection

- No existing repository or code. No GitHub repository is attached to this project.
- Workspace created at `/mnt/project-files/digitizwork-site` (shared project folder). It can move into a GitHub repo once you name one.
- Tooling available here: Node 22.22.0, npm 10.9.4.
- Current stable versions checked on npm (2026-10-09): next 16.4.0, react 19.3.0, tailwindcss 4.3.3, typescript 7.0.2, zod 4.6.5, @playwright/test 1.64.0, vitest 5.0.3, @axe-core/playwright 4.13.0. Versions are re-checked and pinned at install time.

## 2. The agent team

Definitions live in `.claude/agents/` and are reusable in any future Claude Code session opened in this folder.

| Agent | Role | Owns | Key deliverables |
|---|---|---|---|
| digitizwork-marketing-agent | Marketing officer, brand strategist, copywriter, SEO | `docs/marketing/**` | brand-strategy.md, website-content.md, seo-strategy.md, sitemap.md |
| digitizwork-frontend-agent | Senior frontend engineer and UI/UX designer | `src/app` pages/layouts, `src/components`, `src/styles`, `public`, `docs/frontend` | Design system, components, responsive pages, metadata, frontend docs |
| digitizwork-backend-agent | Senior backend engineer and security specialist | `src/app/api`, `src/server`, `src/lib/validation`, `src/lib/env.ts`, `.env.example` | Contact API, validation, email adapter, spam/rate limiting, backend tests, backend-design.md |
| digitizwork-qa-agent | Independent QA automation engineer | `tests/` (e2e, a11y, seo), `playwright.config.ts`, `docs/qa/**` | test-plan.md, test-report.md, release-checklist.md, automated suites |

Shared rules in every definition: no invented company facts, assumptions flagged as `[ASSUMPTION]`, no edits outside owned paths without orchestrator coordination, no claims of passing tests or completed research unless actually done, no purchases or deployments.

Orchestrator (me): technical decisions, task board, file ownership, integration, decision log, approvals with you.

## 3. Proposed project structure

```
digitizwork-site/
├── .claude/agents/               # 4 persistent subagent definitions
├── CLAUDE.md                     # project rules for any Claude session (Phase 3)
├── docs/
│   ├── project/                  # kickoff, task board, decision log (orchestrator)
│   ├── marketing/                # Marketing Agent
│   ├── frontend/                 # Frontend Agent (design-system.md, components.md)
│   ├── architecture/             # backend-design.md, ADRs
│   └── qa/                       # QA Agent
├── public/                       # favicon, OG image, static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx            # shared shell, fonts, default metadata
│   │   ├── page.tsx              # Home
│   │   ├── services/…            # per sitemap
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts, robots.ts
│   │   └── api/contact/route.ts  # Backend
│   ├── components/               # Header, Footer, Hero, ServiceCard, CTA, ContactForm…
│   ├── content/                  # typed content modules generated from approved copy
│   ├── lib/validation/           # shared zod schemas (Backend)
│   ├── lib/env.ts                # env validation (Backend)
│   └── server/                   # email adapter, rate limiter (Backend)
├── tests/
│   ├── unit/                     # Vitest (backend unit tests, utilities)
│   ├── e2e/                      # Playwright flows
│   ├── a11y/                     # axe scans
│   └── seo/                      # metadata, sitemap, robots, links
├── .env.example
├── next.config.ts                # security headers
├── playwright.config.ts
└── package.json                  # build, lint, typecheck, test, test:e2e scripts
```

## 4. Discovery questions (only the essentials)

Please answer what you can; "not decided yet" is a valid answer and I will propose a default.

1. **What does DigitizWork do?** List the services or products you want on the site in the first release (even rough bullet points). The name suggests digital transformation or digitisation services, but I will not assume that.
2. **Who are the customers?** Business type and size (e.g. SMEs, enterprises, public sector), industries, and B2B vs B2C.
3. **Where?** Country/city of operation and markets served. Is this local, regional or global? Which language(s) and spelling (UK or US English)?
4. **Main goal of the site?** E.g. enquiries/quote requests, consultation bookings, recruiting, or credibility only. Which single action matters most?
5. **Contact details to publish?** Business email, phone, address, and which inbox should receive form submissions. Should the address be public?
6. **Brand assets?** Do you have a logo, colours or fonts already, or should the Frontend Agent propose them?
7. **Domain and hosting?** Do you own a domain? Any hosting preference or budget limit (default proposal: Vercel free/hobby tier or Cloudflare Pages; note Vercel Hobby is for non-commercial use, so Vercel Pro or Cloudflare may be required for a business)?
8. **Facts you can confirm:** founding year, team size, founder names/bios, legal entity name, registration number. Leave blank to omit them from the site.
9. **Competitors or sites you admire** (2 to 5 URLs), and anything you dislike.
10. **Legal:** Which jurisdiction's privacy rules apply (e.g. GDPR, UK GDPR, Sri Lanka PDPA)? Do you need cookie consent (only if we add analytics/marketing cookies)?
11. **Analytics:** OK to use privacy-friendly, cookieless analytics (e.g. Plausible, Vercel or Cloudflare Web Analytics), or none at launch?

## 5. Initial suggested sitemap (to be refined by the Marketing Agent)

Launch scope (lean, 6 to 8 pages):

| Path | Page | Purpose | Primary CTA |
|---|---|---|---|
| `/` | Home | What we do, for whom, why us, how we work | Book a consultation / Contact us |
| `/services` | Services overview | All services at a glance | Discuss your project |
| `/services/[service]` | Service detail (one per confirmed service) | Problem, approach, deliverables, FAQs | Request a quote |
| `/about` | About | Mission, approach, values (confirmed facts only) | Contact us |
| `/approach` | How we work (optional, may merge into About) | Process steps, engagement model | Start a conversation |
| `/contact` | Contact | Form, email, location (if public) | Submit enquiry |
| `/privacy` | Privacy policy | Legal; form data handling | none |
| `/terms` | Terms of use (optional) | Legal | none |
| `404` | Not found | Recovery links | Go home |

Deferred until there is real material: Case studies / Work, Insights / Blog, Careers, Industries. These pages need real content to avoid filler and fake proof.

Navigation: Services, About, (Approach), Contact, with a persistent "Contact us" button. Footer: services, company, legal, contact.

## 6. Initial website requirements

- Clear statement of what DigitizWork does and for whom above the fold on Home.
- Every page: unique title, meta description, one H1, canonical, OG image.
- Contact form: name, email, company (optional), service of interest, message, consent checkbox; server-validated; spam-protected; email notification to the business inbox.
- Responsive from 360px; WCAG 2.2 AA; keyboard-accessible menu.
- Fast: static pages, minimal client JavaScript, target Lighthouse ≥90 on all categories.
- No fabricated proof (testimonials, logos, stats, certifications).
- Privacy policy covering form data.

## 7. Proposed architecture and technology stack

**One Next.js application. No separate backend, no database.**

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript, static generation by default | SEO, performance, single codebase |
| Styling | Tailwind CSS 4, self-hosted fonts via next/font | Consistent design tokens, small CSS |
| Content | Typed TypeScript content modules in `src/content` (sourced from approved Markdown) | No CMS cost; easy edits via pull request. Headless CMS can be added later if non-developers need to edit |
| Contact form | Next.js Route Handler `POST /api/contact` + zod validation shared with the client | No extra service to run |
| Email | Provider adapter; recommended default Resend (free tier) or SMTP of your existing mailbox; console adapter for local dev | Swappable, no lock-in. Needs your approval before any account is created |
| Abuse protection | Honeypot, minimum fill time, per-IP rate limit; Cloudflare Turnstile optional (free) | Proportionate for a marketing site |
| Security | CSP and security headers in next.config, env validation, no PII in logs | Baseline hardening |
| SEO | Metadata API, sitemap.ts, robots.ts, JSON-LD (Organization, WebSite, Service) | Search visibility |
| Testing | Vitest (unit), Playwright (E2E, responsive), @axe-core/playwright (a11y), Lighthouse CI where available | Matches QA requirements |
| Quality gates | ESLint, `tsc --noEmit`, build, tests via npm scripts; GitHub Actions once a repo exists | Repeatable checks |
| Hosting (proposal only) | Vercel (Pro for commercial use) or Cloudflare (free tier allows commercial use) | Low cost, zero ops. No account or deployment without approval |

Not proposed: Spring Boot, PostgreSQL, microservices, separate API server. Rationale: the only server-side need identified is a contact form. A rate limiter in memory is per-instance on serverless; if abuse becomes a real problem we can add Turnstile or a managed store (e.g. Upstash) with your approval.

## 8. Assumptions requiring approval

| # | Assumption | Default if you don't decide |
|---|---|---|
| A1 | Site is in English | UK English, unless you say otherwise |
| A2 | Primary conversion is an enquiry via contact form | Yes |
| A3 | No CMS at launch; content edited in code | Yes |
| A4 | No blog, case studies or careers pages at launch | Deferred |
| A5 | No cookies or tracking at launch | Cookieless analytics only if approved |
| A6 | Email delivery via a managed provider (free tier) | Resend, pending approval |
| A7 | Hosting on Vercel or Cloudflare | Decide at Phase 5; no deployment without approval |
| A8 | Workspace lives in the shared project folder until a GitHub repo is named | Yes |

## 9. Next steps after your answers

1. Marketing Agent: research, positioning options, brand voice, final sitemap and copy (Phase 1 to 2).
2. In parallel: Frontend Agent design system proposal, Backend Agent backend-design.md, QA Agent test plan and acceptance criteria.
3. I bring back one implementation plan for your approval before Phase 3 build.
