# Migration Context

## Conventions
Always follow these rules on every commit and PR — loaded from `.claude/rules/`:
- **Commits** → `.claude/rules/commit-convention.md` — `<type>(scope): description`, types: feat/fix/docs/refactor/test/chore
- **PRs** → `.claude/rules/pr-convention.md` — same title format, body: What / How / Testing, one batch = one PR

---

## Overview
Migrating **Anime Divers** from CRA + React 17 + Redux + Node 14 → **Next.js 15 + React 19 + TypeScript 5 + Node 24 + native fetch**.
Deployment: Render.com → **GitHub Actions + Digital Ocean**.
Notion guide: https://www.notion.so/Migration-guide-33034edd706880b2b5b3d1f8fa89ba79

---

## Revised Execution Order

> Original order was wrong — ESLint 9 requires Node ≥ 18.18, which requires removing `node-sass` and `react-scripts` first.

| Step | Batch | Why |
|------|-------|-----|
| 1st | Batch 2 — Next.js Foundation | Removes `react-scripts` (OpenSSL / webpack 4 blocker) |
| 2nd | Batch 5 — node-sass → sass | Removes native binding blocker on Node 18+ |
| 3rd | Batch 0 — Node 24 LTS | Both hard blockers gone — safe to switch |
| 4th | Batch 1 — ESLint + Prettier | ESLint 9 now has required Node ≥ 18.18 |
| 5th | Batch 3 — Routing Migration | Depends on Next.js (Batch 2) |
| 6th | Batch 4 — Redux + Axios removal | Depends on routes (Batch 3) |
| 7th | Batch 6 — Testing | Independent after Batch 2 |
| 8th | Batch 7 — Misc deps | Final cleanup pass |
| 9th | Batch 8 — CI/CD | Last, after everything is stable |

---

## Batches

### 🟢 Batch 0 — Node 14 → 24 LTS
[Notion](https://www.notion.so/34034edd706881349d08d210cd3632a2) | Update `.nvmrc` to `v24`. Execute **after** Batch 2 + 5.

### Batch 1 — ESLint + Prettier
[Notion](https://www.notion.so/34034edd706881bf8a58dd9a45526629) | ESLint 7→9 (flat config), Prettier 2→3, typescript-eslint 4→8.
Delete `.eslintrc.json` → create `eslint.config.mjs`. New `.prettierrc.json`.

### Batch 2 — Next.js Foundation + TypeScript 5 + React 19
[Notion](https://www.notion.so/34034edd7068814096a2c4ac95f4e0ae) | Install `next@15`, `react@19`, `typescript@5`. Remove `react-scripts`, `react-loadable`.
Scaffold `src/app/layout.tsx`, `page.tsx`, `not-found.tsx`. Convert 13 `defaultProps` → default params.
Rename `REACT_APP_API_URL` → `API_URL`. Fix `.env` typo: `edgess` → `edge`.

### Batch 3 — Routing (React Router v5 → Next.js App Router)
[Notion](https://www.notion.so/34034edd706881238ff8c83483b61c0d) | Remove `react-router-dom`, `src/routes/`, `src/App.tsx`.
New `src/app/` tree: `/`, `/anime`, `/anime/[animeId]`, `/manga`, `/manga/[mangaId]`.
Swap: `useHistory` → `useRouter`, `useLocation` → `usePathname`/`useSearchParams`, `<Link to>` → `<Link href>`.
Replace `react-helmet` with Next.js Metadata API.

### Batch 4 — Remove Redux + Axios → Server Fetch
[Notion](https://www.notion.so/34034edd7068814f818ac3d546d99c39) | Remove `redux`, `react-redux`, `redux-saga`, `axios`. Delete `src/redux/`, `src/api/`, all `useGet*.ts` hooks.
New `src/lib/api.ts` (native `fetch`), `src/lib/anime.ts`, `src/lib/manga.ts`.
**Keep** `src/utils/query.ts` (searchToQuery, queryToSearch, formatSearchObject).
Episode/chapter modal fetches stay client-side (need `NEXT_PUBLIC_API_URL`).

### Batch 5 — Styling: node-sass → sass + Bootstrap Upgrade
[Notion](https://www.notion.so/34034edd70688169b961fa8e5f3d406e) | `node-sass`→`sass` (Dart), `react-bootstrap` 1→2, `bootstrap` 5.0→5.3.
Fix `InputGroup.Append` (removed in v2) in `FilterYear`, `FilterInput`, `FilterSelect`.
Test `~bootstrap` SCSS import path in Next.js. Preserve brand colors: `$primary: #fca311`, `$secondary: #14213d`.

### Batch 6 — Testing: Jest → Vitest + Playwright
[Notion](https://www.notion.so/34034edd7068817abf33cfe1b2f6046c) | Remove `@types/jest`, `src/setupTests.ts`. Install `vitest`, `jsdom`, `@playwright/test`.
New `vitest.config.ts` + `playwright.config.ts`. Scripts: `"test": "vitest"`, `"test:e2e": "playwright test"`.

### Batch 7 — Misc Dependencies
[Notion](https://www.notion.so/34034edd7068810aaf26f56cad89d052) | `moment`→`date-fns` (`src/utils/dates.ts`), `react-image`→`next/image`, `react-datetime`→replacement, `dotenv`→remove.
`react-icons` 4→5 (audit `Fa*` icon renames). `sweetalert2` latest. `react-image→next/image` in `Image.tsx`.

### Batch 8 — CI/CD: GitHub Actions + Digital Ocean
[Notion](https://www.notion.so/34034edd706881aa8d8ec1a2ff06b72b) | Add `.github/workflows/deploy.yml` (lint→test→build→deploy on push to master).
Set secrets: `DO_API_TOKEN`, `API_URL`. `next.config.ts`: `output: 'standalone'`.

---

## Key Risks (SSR Breakers)
- `src/utils/api.ts:14` — `window.location.replace` → SSR crash, remove with Redux (Batch 4)
- `src/utils/query.ts:60` — `window.location.href` default → make `url` param required
- `FilterPagination.tsx:36` — `document.getElementById` → guard with `typeof window !== 'undefined'`
- `sweetalert2` — DOM-only, must be client components only
- **13 components** use `defaultProps` (removed React 19) → convert in Batch 2
- `InputGroup.Append` removed react-bootstrap v2 → fix in Batch 5
- `react-datetime` + `moment` are coupled — must replace both in Batch 7

## What to Preserve
- `src/utils/query.ts` — Kitsu query helpers, transport-agnostic
- `src/configs/constants.ts` — image dimension constants
- URL-driven filter state → maps cleanly to `useSearchParams`
- SCSS `variables.scss` brand palette → must carry forward to Next.js

## Loopholes & Risks Reference
https://www.notion.so/34034edd70688126a419c021e355b498
