# Anatomia 3D

**Anatomia 3D** is a bilingual (French/English) interactive platform for learning human anatomy in three dimensions. Rotate, explore and virtually dissect every organ, bone and muscle — from desktop or mobile.

Live stack:

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Three.js** via **@react-three/fiber** + **@react-three/drei**
- **Tailwind CSS 3** (shadcn-flavoured primitives)
- **next-intl** for FR/EN routing and translations
- **zustand** for 3D scene state

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the middleware will redirect to `/fr` (default) or `/en` based on your `Accept-Language` header.

Scripts:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with eslint-config-next |

## Features

- **11 anatomical systems** toggle on/off (skeletal, muscular, nervous, cardiovascular, respiratory, digestive, urinary, reproductive, endocrine, lymphatic, integumentary).
- **Click-to-identify**: any structure you click opens a side panel with its name, description, and function in your current language.
- **Layer peeling** slider takes you from skin → muscles → skeleton.
- **Mobile-first**: touch rotate / pinch zoom, bottom-sheet UI under `md`, sticky header, precise mouse controls on desktop.
- **Bilingual**: `/fr/*` and `/en/*` routes, one-click locale switch that preserves the current path.

## 3D models

The current build ships with a simplified illustrative anatomy model built from primitives, so the site is fully functional and deployable today. The data schema (`src/data/structures.ts`) is asset-agnostic — each structure has a `meshName` field matching the mesh name in a future glTF export.

To upgrade to the full Z-Anatomy dataset:

1. Export the Z-Anatomy Blender files to compressed glTF (`.glb`) with Draco + meshopt. One `.glb` per body system works best for progressive loading.
2. Drop the files in `public/models/`.
3. Replace the primitive renderer (`StructureMesh.tsx`) with a `useGLTF` loader that reads `meshName` from the scene graph — no other code changes are required. The catalog in `src/data/structures.ts` already maps `meshName` to localized metadata.

See `ATTRIBUTION.md` for licensing details on Z-Anatomy assets.

## Project structure

```
src/
├── app/[locale]/            # Localized pages (home, atlas, about)
├── components/
│   ├── anatomy/             # 3D viewer + interactive UI
│   ├── layout/              # Header, locale switcher
│   └── ui/                  # Button, Card, Slider, ToggleChip
├── data/                    # Systems + bilingual structures catalog
├── i18n/                    # next-intl routing, request, messages (fr/en)
├── lib/                     # cn() helper
├── store/                   # zustand store for scene state
└── middleware.ts            # next-intl locale middleware
```

## Deployment

This project is configured for [Vercel](https://vercel.com/). Pushing the branch `claude/3d-anatomy-website-OLEXF` will trigger an automatic preview deployment if the repo is already imported as a Vercel project.

No environment variables are required for v1.

## License

- **Code**: GNU General Public License v3.0 — see `LICENSE`.
- **Anatomical content**: GPL v3 (designed to integrate with [Z-Anatomy](https://www.z-anatomy.com/) assets).

## Disclaimer

Anatomia 3D is an educational tool. It is not a substitute for medical advice or a clinical anatomy textbook.
