# Agent notes

## Stack

Next.js 15 (App Router) + React 18 + TypeScript + Tailwind CSS 3 + next-intl + React Three Fiber. All pages live under `src/app/[locale]/`. All strings go through `next-intl` (`messages/{fr,en}.json`), including organ names (which live in `src/data/structures.ts` with `name.fr` / `name.en` fields).

## 3D pipeline

`src/components/anatomy/StructureMesh.tsx` renders primitives based on entries in `src/data/structures.ts`. When real glTF assets are added to `public/models/`, swap the primitive renderer for `useGLTF` and traverse the scene, matching `mesh.name` against `STRUCTURES_BY_MESH`. The data catalog stays the single source of truth for bilingual metadata.

## Style

- shadcn-flavoured primitives in `src/components/ui/`. Keep them dependency-light (no Radix unless needed). Use `cn()` from `@/lib/utils`.
- Tailwind tokens in `src/app/globals.css` — edit there, not in components.

## Deployment

Vercel, auto-deployed from the current branch. No env vars needed.
