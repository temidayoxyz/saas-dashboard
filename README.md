# SaaS Dashboard

A clean, charcoal-branded SaaS admin dashboard built on Next.js 16, Tailwind CSS 4, React 19, Recharts, and TanStack Table — with modular features, mock REST APIs, and an AI-ready codebase (AGENTS.md + skillfiles).

## Highlights

- Dashboard overview: sessions, revenue, subscriptions, users
- Analytics: acquisition, funnel, devices, top pages
- Revenue: MRR/ARR, churn & retention, invoices, failed payments, plan changes
- Users: accounts, roles & permissions, teams & workspaces, activity log
- Charts, tables, forms, calendar, UI elements
- Dark & light mode with a single charcoal brand + red accent
- Modular feature folders, typed data, skeletons, empty states

## Quick start

```bash
git clone https://github.com/temidayoxyz/saas-dashboard.git
cd saas-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router, Turbopack/Webpack)
- React 19
- Tailwind CSS 4
- Recharts, FullCalendar, Leaflet, TanStack Table/Query
- React Aria (accessible primitives), Sonner (toasts)

## Project structure

```text
src/
  app/(with-layouts)/     # routed pages grouped by feature
  components/tailgrids/   # design-system primitives
  components/common/      # app chrome (sidebar, header, previews)
  services/api/           # one folder per feature (mock REST)
  hooks/                  # client-only hooks
  utils/                  # cn, formatters, icon map
  types/                  # ambient module declarations
```

## Working with AI agents

The repo ships `AGENTS.md` plus skill files under `.agents/skills/`, so coding agents (Claude Code, Cursor, Codex, Copilot) can build inside the existing structure instead of inventing their own.

## License

Private — all rights reserved © Temidayo XYZ.