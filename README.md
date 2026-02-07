# Cinematic Universes

A static Next.js encyclopedia for the Marvel Cinematic Universe (MCU) and DC Universe.

## What is included

- Unified app shell and cinematic visual design
- MCU and DC universe hubs
- Character directories for:
  - MCU heroes, villains, antiheroes
  - DC heroes, villains, antiheroes
- Character profile pages generated from structured data
- Worldbuilding pages for timeline, phases, teams, artifacts, and locations
- Local media library under `public/media`

## Data + media generation

Character data and image downloads are generated with:

```bash
node scripts/generate-site-data.mjs
```

This updates:

- `app/data/characters.generated.json`
- image assets in `public/media/**`

## Development

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/CinematicUniverses`

## Validation

```bash
npm run lint
npm run build
```

## Deployment

This project is configured for GitHub Pages static export with base path `/CinematicUniverses`.

```bash
npm run build
npm run deploy
```
