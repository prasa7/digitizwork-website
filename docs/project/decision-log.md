# Decision log

| Date | Decision | Status | Rationale |
|---|---|---|---|
| 2026-10-09 | Single Next.js app, no separate backend or database | Proposed | Only server need is a contact form |
| 2026-10-09 | Workspace at `C:\Users\prasa\Documents\digitizwork-site\digitizwork-site` until a GitHub repo is named | Adopted (default) | No repo attached |
| 2026-10-09 | Four subagents with path-based file ownership | Adopted | Prevent overlapping edits |
| 2026-10-09 | Launch as a single-page site (sections), extendable to multiple pages later | Adopted (owner request) | Owner wants a single page first, room to grow |
| 2026-10-09 | Run locally with Docker (dev with hot reload on :3000, production image on :8080) | Adopted (owner request) | Consistent local environment; same image can be deployed later |
| 2026-10-09 | Code hosted in private GitHub repo https://github.com/prasa7/digitizwork-website; work on `feature/DIG-<key>-*` branches, commits reference Jira keys | Adopted (owner request) | Traceability between code and Jira |
| 2026-10-09 | Jira project DIG on digitizwork.atlassian.net is the system of record for tasks; designs stored in `docs/frontend/designs/` and linked from Jira | Adopted (owner request) | Jira tools cannot attach files; repo links keep designs versioned |
| 2026-10-09 | TypeScript 5.9.3 instead of 7.x | Adopted | TypeScript 7 is a new rewrite; Next.js compatibility not yet confirmed |
