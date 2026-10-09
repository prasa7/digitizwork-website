# Risks and decisions

Maintained by: PM agent. Last updated: 2026-10-09.
Decisions are carried over from [decision-log.md](decision-log.md), which remains the orchestrator's running log. Plan item IDs refer to [plan.md](plan.md).

## Risk register

Likelihood and impact: Low / Medium / High.

| ID | Risk | Likelihood | Impact | Mitigation | Owner | Linked items | Status |
|---|---|---|---|---|---|---|---|
| R1 | Owner discovery answers delayed; all content, design and contact delivery wait on them | High | High | Start unblocked work now (E3-S2, E4-S1 draft, E5-T3, E5-T4, E6-S1); keep the question list short; accept "not decided" with defaults for Q6 to Q11 | pm / product-owner | E1-T3 | Open |
| R2 | Pressure to fill gaps with invented facts, testimonials or statistics | Medium | High | Agent integrity rules; `[ASSUMPTION]` markers; QA check for zero markers before release | marketing / qa | E2-S3, E6-S5 | Open |
| R3 | Single-page code structured in a way that makes Phase 2 multi-page a rewrite | Medium | Medium | Sections as components, content in typed modules, nav as data supporting anchors and routes; documented in components.md | frontend | E3-S2, E8-S2 | Open |
| R4 | No email provider approved, so the contact form cannot deliver real enquiries at launch | Medium | High | Console adapter for local; adapter interface so provider is a config change; decision OQ-4 raised early | backend / product-owner | E4-S3, E1-T4 | Open |
| R5 | No version control: work can be lost and changes cannot be reviewed or reverted | High | High | git init in Sprint 1; GitHub remote on owner approval | orchestrator | E5-T4 | Open |
| R6 | Host `node_modules` is empty; npm scripts fail on the host (`tsc` not found), causing confusion or tests run in inconsistent environments | High | Low | Run all scripts inside Docker; document commands; QA tests against the production container | orchestrator / qa | E5-T3 | Open |
| R7 | Shared files (`package.json`, `next.config.ts`, `Dockerfile`, `docker-compose.yml`) have no single owner; concurrent edits from agents conflict | Medium | Medium | Orchestrator applies changes to shared files; agents request changes in their handback | orchestrator | E4-S5, E5-T3, E5-T5 | Open |
| R8 | In-memory rate limiter is per instance and resets on restart; insufficient if deployed to serverless or multiple instances | Low (local) / Medium (deployed) | Medium | Document limitation; Turnstile or managed store only with approval, revisit at E7-T3 | backend | E4-S4, E7-T3 | Open |
| R9 | Privacy obligations unclear until jurisdiction is known (Q10); form collects personal data | Medium | High | Privacy notice task depends on Q10; flagged "not legal advice"; owner review required | marketing / product-owner | E2-S5 | Open |
| R10 | Lighthouse 90+ or WCAG 2.2 AA not met late in the cycle | Medium | Medium | Static rendering, minimal client JS, contrast checked in design system; a11y checks during build, not only in Sprint 3 | frontend / qa | E3-S1, E6-S3, E6-S4 | Open |
| R11 | Jira project not yet created; plan and Jira may drift once both exist | Medium | Low | Created from plan.md in one pass on 2026-10-09 (DIG-3 to DIG-50); keys recorded in plan.md; Jira is now source of truth for status. Residual: sprints must be created manually by the owner | pm | E1-T5 | Mitigated |
| R12 | Accidental deployment or third-party account creation without approval | Low | High | Explicit approval gate (E7-T3, E7-T4); agent rules forbid it | orchestrator | E7-T4 | Open |
| R14 | /about cannot launch without real consultant names, bios and photos with consent to publish; placeholder cards must not ship | High | High | DIG-54 blocks DIG-53; QA release check for zero placeholders; consent recorded per consultant | product-owner / qa | DIG-53, DIG-54 | Open |
| R15 | Scope growth in Sprint 1 (two new stories in progress before the owner has approved the visual direction or answered discovery) may cause rework | Medium | Medium | All visual work is gated by the owner review DIG-51; content stays placeholder until DIG-13 is answered | pm | DIG-51, DIG-52, DIG-53 | Open |
| R16 | AI-generated images could misrepresent people or carry unclear licence terms | Medium | Medium | DIG-55 requires licence terms recorded, owner approval per image, and no AI images presented as real consultants | product-owner | DIG-55 | Open |
| R13 | Decision log records the workspace as `/mnt/project-files/digitizwork-site`, but the actual workspace is `C:\Users\prasa\Documents\digitizwork-site\digitizwork-site` | Certain | Low | Correct the decision log entry (orchestrator owns that file) | orchestrator | E5-T4 | Closed (path corrected; checked 2026-10-09) |
| R17 | Builds were flaky when downloading Google Fonts at build time (network-dependent) | Occurred | Medium | Fonts switched to self-hosted `next/font/local` (Plus Jakarta Sans, Inter); keep font files in the repo and check their licences | frontend | DIG-22, DIG-52 | Mitigated |
| R18 | Screenshots taken from the dev server are wrong: the dev server does not hydrate when reached via `host.docker.internal` | Occurred | Medium | Capture screenshots and run Playwright against the production image on :8080 only (docs/frontend/designs/capture.mjs); QA to target :8080 | frontend / qa | DIG-51, DIG-40 | Mitigated |
| R19 | UI work verified without lint or an accessibility scan (no ESLint yet; axe not run) | Certain | Medium | DIG-36 to add ESLint; QA axe scan (DIG-41) before any of DIG-22/23/52/53 is closed | orchestrator / qa | DIG-36, DIG-41 | Open |
| R20 | SSH port 22 on the EC2 instance is open to 0.0.0.0/0 (needed for GitHub Actions deploys) | High (constant scanning) | High | Key-only login, password authentication disabled, no root login; keep packages patched; consider fail2ban. Later option: AWS SSM Session Manager or a self-hosted runner so port 22 can be closed | orchestrator / product-owner | DIG-58 | Open |
| R21 | Public preview shows placeholder text and a contact form that does not work, visible to anyone (including search engines) | Certain once deployed | Medium | Label it as a preview; add noindex until launch; hide or disable the form, or show a "use email" notice; do not share the URL widely; Phase 1 launch still requires QA and DIG-45 go | orchestrator / frontend | DIG-47, DIG-45 | Open |
| R22 | AWS free-tier eligibility depends on account age and type; t3.micro, EBS, public IPv4 and data transfer may be billed | Medium | Medium | Owner to confirm free-tier status; create a zero-spend AWS Budget with email alerts before launching the instance; note that public IPv4 addresses are charged | product-owner | DIG-58 | Open |
| R23 | Every push to main deploys to the public server with only a typecheck gate (no lint, tests or QA) | High | Medium | Add lint and tests to CI (DIG-36); consider branch protection and PRs into main; the health check rolls back or fails the job | orchestrator | DIG-58, DIG-36 | Open |

## Decisions

Carried over from decision-log.md (2026-10-09), plus decisions taken in planning.

| ID | Date | Decision | Status | Rationale | Source |
|---|---|---|---|---|---|
| D1 | 2026-10-09 | Single Next.js app, no separate backend or database | Proposed (awaiting owner approval at E1-T6) | Only server need is a contact form | decision-log.md |
| D2 | 2026-10-09 | Workspace at `/mnt/project-files/digitizwork-site` until a GitHub repo is named | Adopted (default), path out of date, see R13 | No repo attached | decision-log.md |
| D3 | 2026-10-09 | Four specialist subagents with path-based file ownership (plus PM agent) | Adopted | Prevent overlapping edits | decision-log.md |
| D4 | 2026-10-09 | Launch as a single-page site (sections), extendable to multiple pages later; multi-page sitemap moved to Phase 2 | Adopted (owner request) | Owner wants a single page first, room to grow | decision-log.md |
| D5 | 2026-10-09 | Run locally with Docker (dev with hot reload on :3000, production image on :8080) | Adopted (owner request) | Consistent local environment; same image can be deployed later | decision-log.md |
| D6 | 2026-10-09 | TypeScript 5.9.3 instead of 7.x | Adopted | TypeScript 7 is a new rewrite; Next.js compatibility not yet confirmed | decision-log.md |
| D7 | 2026-10-09 | No hosting or deployment without owner approval | Adopted (owner instruction) | Owner control of cost and exposure | Owner, 2026-10-09 |
| D8 | 2026-10-09 | Backlog planned in docs/project/plan.md; Jira issues created only after the owner supplies the new project key (key DIG supplied; backlog created 2026-10-09) | Adopted, done | Owner is creating a new Jira project | Owner, 2026-10-09 |
| D11 | 2026-10-10 | Host on AWS EC2 in ap-southeast-2 (Sydney): t3.micro, Ubuntu 24.04, free tier. GitHub Actions builds the image, pushes it to private GHCR and deploys over SSH (key) on port 80 with a health check. Every push to main deploys | Adopted (owner decision) | Owner choice; supersedes the Vercel/Cloudflare proposal in the kickoff. DIG-46 proposal step effectively decided | Owner, 2026-10-10; Jira DIG-58, DIG-47; commit 4b7f6d7 |
| D12 | 2026-10-10 | Design branch merged (fast-forwarded) into main before owner approval of DIG-51, so it can be previewed on EC2 | Adopted (owner request) | Owner wants a public preview; design approval is still pending on DIG-51 | Owner, 2026-10-10 |
| D10 | 2026-10-09 | About page moved into Phase 1; the site is the single-page home plus `/about` (consultants page). AI-themed SVG visual design added to Phase 1 | Adopted (owner request) | Owner wants to present the real consultants and a visually rich, AI-themed design | Owner, 2026-10-09; Jira DIG-52, DIG-53, DIG-54, DIG-55 |
| D9 | 2026-10-09 | Three sprints for Phase 1 (definition, build, verification and launch readiness); Phase 2 in backlog | Proposed (PM) | Matches dependency order; sprint length to be set by owner | PM plan |

## Pending owner decisions

See [project-brief.md](project-brief.md) section 7 (OQ-1 to OQ-8).
