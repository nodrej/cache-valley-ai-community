# Cache Valley AI Community

A small, sleek site for the Cache Valley AI Community. A Logan, Utah meetup for people building with, learning about, or just plain curious about AI.

**Live preview:** https://trusty-forge-w2yx.here.now/

## Stack

Plain HTML + CSS + JS, wrapped as a minimal Hugo project so it can be deployed anywhere Hugo can deploy (GitHub Pages, Netlify, Vercel, Cloudflare Pages, here.now, plain `nginx`, etc.).

- `layouts/index.html`: the home page (warm dark hero, cream body, alternating sections, FAQ, dark CTA + footer)
- `static/styles.css`: design system (warm dark + cream two-tone, refined teal accent, Inter / Inter Tight / JetBrains Mono)
- `static/script.js`: small bit of JS that powers the events tab interaction

## Run locally

Requires [Hugo](https://gohugo.io/installation/) (the base build is enough, extended is optional).

```bash
hugo serve
```

Then open http://localhost:1313

## Build static site

```bash
hugo
```

Output goes to `public/`. Drop that folder on any static host.

## Design notes

- Two-tone: warm near-black hero/CTA blocks (`#0e0d0c`) with a warm cream body (`#f5f3ed`)
- Single accent color (`#5fb3a5`), a refined teal that ties to the circuitry pattern in the community logo without going neon
- Editorial typography: Inter Tight for displays, Inter for body, JetBrains Mono for small labels and eyebrows
- No grid overlay, no glassmorphism, no neon glow. Premium and quiet.
