# sermount.com

The public marketing site for Sermount. Astro, static output, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

```sh
npm ci
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```

- Brand tokens and fonts: `src/styles/global.css`. Fonts are self-hosted in `public/fonts`
  (SIL Open Font License, licence files alongside).
- Site settings and which pages are live: `src/config.ts`.
- The site has no backend and calls no Sermount service. Forms post to Web3Forms. The only
  third-party script is Plausible.
