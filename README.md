# Cinematic Universes

A Next.js static encyclopedia for MCU and DC characters, teams, timelines, and worldbuilding.

## Included in Phase 3

- Large MCU/DC character coverage with dynamic profile routes
- Search + sort controls on directory pages
- Source attribution on profile pages (data/image provenance)
- Coverage dashboard at `/coverage`
- Local media library in `public/media`
- Data pipeline + validation scripts for future updates
- Mobile-first navigation and collapsible sidebars for easier small-screen browsing
- SEO upgrades: canonical metadata, OpenGraph/Twitter cards, sitemap, robots, manifest, and JSON-LD

## Local development

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Data pipeline

Regenerate character data and images:

```bash
npm run refresh:data
```

Validate dataset integrity:

```bash
npm run validate:data
```

Full quality gate (data + lint + build):

```bash
npm run quality
```

## Deployment

### Vercel (recommended)

- Connect repo in Vercel
- Production deploy runs on every push to `main`
- Base path is root (`/`) on Vercel
- Set `NEXT_PUBLIC_SITE_URL` in Vercel to your production domain for canonical URLs

### GitHub Pages

This project also supports GitHub Pages under `/CinematicUniverses`:

```bash
npm run deploy
```

## How to update and see improvements live

1. Make code/content updates locally.
2. Run:

```bash
npm run quality
```

3. Commit and push:

```bash
git add -A
git commit -m "Your update message"
git push origin main
```

4. Vercel auto-builds from `main`. Open your Vercel production URL after deployment finishes.

## Key files

- `app/data/characters.generated.json` - generated profile dataset
- `scripts/generate-site-data.mjs` - data/media generator
- `scripts/validate-dataset.mjs` - dataset integrity checks
- `app/components/characters/*` - shared directory/profile UI
- `app/coverage/page.tsx` - roster coverage and scope dashboard
- `app/sitemap.ts` - generated sitemap metadata route
- `app/robots.ts` - robots metadata route
- `app/manifest.ts` - PWA-style web manifest
- `app/lib/seo.ts` - URL/canonical/asset SEO helpers
