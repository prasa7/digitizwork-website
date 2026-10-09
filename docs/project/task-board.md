# Task board

The detailed, Jira-ready backlog is now in [plan.md](plan.md) (40 items across 8 epics, with acceptance criteria, dependencies and sprints). This page is a summary only; plan.md is the source of truth until the Jira project exists, after which Jira is.

Last updated: 2026-10-09 (PM agent). Jira: not created, waiting for the owner's project key.

## Summary by epic

| Epic | Items | Done | Status |
|---|---|---|---|
| E1 Discovery & Planning | 6 | 2 | Blocked on owner discovery answers (E1-T3) and Jira key (E1-T5) |
| E2 Brand & Content | 5 | 0 | Waiting on E1-T3 |
| E3 Design System & Frontend | 6 | 0 | E3-S2 (page shell) can start now |
| E4 Contact Form & Backend | 6 | 0 | E4-S1 draft contract can start now |
| E5 Local Dev & DevOps (Docker) | 5 | 2 | E5-T3 tooling and E5-T4 git init can start now |
| E6 QA & Accessibility | 5 | 0 | E6-S1 draft test plan can start now |
| E7 Launch | 4 | 0 | Sprint 3 |
| E8 Phase 2 Multi-page Expansion | 3 | 0 | Backlog |

## Done (with evidence)

| ID | Item | Evidence |
|---|---|---|
| E1-T1 | Agent definitions | `.claude/agents/` contains 5 definitions |
| E1-T2 | Project brief and plan | project-brief.md, plan.md, risks-and-decisions.md |
| E5-T1 | Next.js starter | package.json pins; typecheck exit 0 in container, 2026-10-09 |
| E5-T2 | Docker dev and prod | Dev container up, :3000 returned 200 (PM check, 2026-10-09); prod image built; prod run on :8080 per orchestrator verification |

## Mapping from the previous board

| Old ID | Now |
|---|---|
| T1 | E1-T1 |
| T2 | E1-T3, E1-T4 |
| T3 | E2-S1, E2-S2 |
| T4 | E2-S3, E2-S4, E2-S5 |
| T5 | E3-S1 |
| T6 | E4-S1 |
| T7 | E6-S1 |
| T8 | E1-T6 |
| T9 | E3-S2 to E3-S6, E4-S2 to E4-S6, E5-T3 to E5-T5, E6-S2 |
| T10 | E6-S3 to E6-S5, E7-T1 |
| T11 | E7-T2 to E7-T4 |
