# fredin

## About Me site

A Next.js (App Router, TypeScript) static site. Copy and links live in `src/content/profile.ts`.

```bash
npm install
npm run dev     # local dev server at http://localhost:3000
npm run build   # static export written to out/
```

### Deploy

Pushes to `main` publish the site to GitHub Pages through `.github/workflows/deploy.yml`.

Live URL: https://thecolorblue.github.io/fredin/

One-time setup: in the repo, go to **Settings → Pages → Source** and choose **GitHub Actions**. Until that is set, the build job fails at `configure-pages`.

The workflow reads the subpath from Pages (`/fredin`). To check the subpath build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/fredin npm run build
```

Renaming the repo changes the Pages URL, and `configure-pages` picks up the new base path automatically. A custom domain makes the base path `''`, which needs no change in the workflow.
