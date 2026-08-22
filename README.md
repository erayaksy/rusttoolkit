# Rust Toolkit

A lightweight, static Rust player utility web app.

## MVP features

- Console command library (FPS / combat / visibility / binds)
- Competitive config generator
- Monument & keycard progression guide
  - Green card locations
  - Blue card monument puzzles
  - Blue card via fishing/gutting high-tier fish
  - Red card monument puzzles
- Raid calculator for common walls and doors

## Run locally

No build step is required.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

This repository is a static site and can be deployed directly to Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

## Data note

Patch-sensitive Rust values should be rechecked after major game updates. Current data set was reviewed against August 2026 references.
