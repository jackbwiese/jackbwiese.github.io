# jackbwiese.github.io

Personal site of Jack (B.) von Wiese und Kaiserswaldau.

Built with Astro 5, deployed to GitHub Pages via GitHub Actions.

## Develop

```
npm install
npm run dev
```

Visit http://localhost:4321

## Build

```
npm run build
```

Static output goes to `dist/`.

## Deploy

Push to `main`. GitHub Actions builds and publishes to the `gh-pages` branch automatically. The site is live at https://jackbwiese.github.io within ~60 seconds.

## Stack

- Astro 5 (static export)
- Vanilla CSS with custom properties
- NHaas Grotesk self-hosted (WOFF2)
- GSAP via CDN for select animations
- Zero analytics, zero tracking, zero backend
