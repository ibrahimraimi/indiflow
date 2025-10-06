# Indiflow — SaaS template

A SvelteKit-based SaaS starter template focused on user accounts and PocketBase integration. It includes an auth flow (signup/login/logout, email verification), a demo marketing landing page, admin/customer roles, and health checks. The app is configured for Netlify deployment and uses TailwindCSS, Vitest, and Playwright for testing.

## Features

- SvelteKit (v2) application with Svelte (v5)
- PocketBase client and server integration (auth, user collection)
- TailwindCSS for styling
- Pre-configured auth routes: signup, login, logout, reset-password, verify-email
- Account-protected routes and dashboard skeleton
- Health-check API at `/api/health`
- Unit tests (Vitest) and E2E tests (Playwright)
- Netlify adapter ready for production

## Tech Stack

- Framework: SvelteKit
- UI: Shadcn Svelte components, TailwindCSS
- Auth & DB: PocketBase
- Testing: Vitest (unit), Playwright (end-to-end)
- Bundler / Dev server: Vite
- Linting / Formatting: ESLint, Prettier

## Repository structure (important folders)

- `src/routes/` — App routes including `(auth)` and `(app)` groups
	- `(auth)` — authentication pages (signup, login, logout, verify-email)
	- `(app)` — landing page, dashboard and admin areas
- `src/lib/` — application libraries
	- `pocketbase/` — PocketBase client initialization (`src/lib/pocketbase/client.ts`)
	- `components/` — UI components (marketing, UI primitives)
	- `stores/` — Svelte stores (e.g., `user` store)
	- `types/` — TypeScript types including typed PocketBase definitions
- `static/` — static assets (images, manifest)

## Quick start (local development)

Prerequisites

- Node.js (LTS recommended, e.g. 18+)
- pnpm (preferred package manager)

Install dependencies

```bash
pnpm install
```

Environment variables

This project uses SvelteKit's public environment for the PocketBase URL. Create a `.env` (or set system env vars) with the following key:

- `PUBLIC_DATABASE` — URL of your PocketBase instance (e.g. `http://127.0.0.1:8090` for local PB)

Example `.env` (add to `.gitignore` if committing):

```env
PUBLIC_DATABASE=http://127.0.0.1:8090
```

Run the dev server

```bash
pnpm run dev
```

Open http://localhost:5173 (Vite default) to view the app.

Notes on PocketBase

- The client is created in `src/lib/pocketbase/client.ts` using `PUBLIC_DATABASE`.
- Server-side hooks (`src/hooks.server.ts`) initialize PocketBase per-request and manage the auth cookie.
- The app expects a `users` collection in PocketBase. Signup and auth flows call `users` collection endpoints (see `src/routes/(auth)`).

## Scripts

Key scripts available from `package.json`:

- `pnpm run dev` — Start Vite dev server
- `pnpm run build` — Build for production
- `pnpm run preview` — Preview production build locally
- `pnpm run check` — Run SvelteKit sync and TypeScript check
- `pnpm run format` — Run Prettier formatting
- `pnpm run lint` — Check formatting and run ESLint
- `pnpm run test:unit` — Run unit tests with Vitest
- `pnpm run test:e2e` — Run Playwright end-to-end tests
- `pnpm test` — Run all tests (unit + e2e)

## Testing

- Unit tests are configured with Vitest. Client tests run in a browser-like environment using Playwright provider.
- E2E tests live in `e2e/` and use Playwright. Playwright's config starts a production preview server via `npm run build && npm run preview` on port `4173`.

Run unit tests:

```bash
pnpm run test:unit
```

Run all tests (unit + e2e):

```bash
pnpm test
```

Run Playwright tests directly (ensure build + preview are available):

```bash
pnpm run test:e2e
```

## Deployment

This project uses the Netlify adapter (`@sveltejs/adapter-netlify`). To deploy:

- Ensure `PUBLIC_DATABASE` points to your production PocketBase URL in Netlify environment variables.
- Build the site and deploy via Netlify (CLI, Git integration, or GitHub Actions).

Netlify-specific notes

- The SvelteKit config (`svelte.config.js`) uses `@sveltejs/adapter-netlify`.
- If using cookies for PocketBase auth, ensure your Netlify site is served over HTTPS and set `PUBLIC_DATABASE` accordingly.

## Health check

There is a health endpoint at `/api/health` which checks PocketBase connectivity and returns a JSON status. Useful for uptime monitoring.

## Contributing

- Maintain consistent code style: run `pnpm run format` before committing.
- Run tests locally: `pnpm test`.
- Open an issue or submit a pull request with a clear description and testing steps.

## Useful files

- `svelte.config.js` — SvelteKit configuration (Netlify adapter)
- `vite.config.ts` — Vite config with Tailwind and test projects
- `src/lib/pocketbase/client.ts` — PocketBase client initialization
- `src/hooks.server.ts` — Per-request PocketBase setup and auth handling
- `src/routes/(auth)` — Auth routes and server actions
