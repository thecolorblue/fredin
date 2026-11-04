---
name: verify-app
description: Launch, drive and screenshot the About Me static site to prove it works end to end. Use after changing the page, its content or its styles, before finishing a ticket.
---

# verify-app

The About Me site is a Next.js static export (`output: 'export'`). Verification serves the built `out/` folder, drives it in headless Chrome and captures screenshots at desktop and phone widths.

## Launch

From a clean checkout:

```bash
npm ci
npm run build
npx serve out -l 4173
```

Ready when `curl -sf localhost:4173/` returns HTML containing "Brad Davis". Any free port works; use `python3 -m http.server 4173 --directory out` if `serve` is unavailable.

To check the GitHub Pages subpath, build with `NEXT_PUBLIC_BASE_PATH=/fredin npm run build`, copy `out/` to `$SCRATCH/site/fredin` (an absolute scratch folder, emptied first), and serve `$SCRATCH/site` instead. Then load `http://localhost:4173/fredin/` and expect zero failed requests.

## Doctor

Read-only checks before launching:

- `node -v` and `npm -v` succeed.
- `out/index.html` exists after the build. If not, run `npm run build` first.
- The chosen port is either free or already serving the site. Do not kill an unrelated process on it.

## Drive

Route: `/`.

Anchors: `#shipped`, `#experience`, `#contact` (nav links), plus `#top` for the brand link.

CTA selectors: `a.button.primary` (Email me, `mailto:`) and `a.button` (LinkedIn, new tab).

Screenshots and the horizontal-scroll check use Playwright with the installed Chrome. Don't use Chrome's `--screenshot` flag for the phone width: headless Chrome enforces a 500px minimum window, so a 390px capture is really a 500px render.

```js
// save as .fredrin/tmp/shot/shot.mjs, after `npm install playwright` in that folder
import { chromium } from "playwright";
const browser = await chromium.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
for (const [name, width, height] of [["desktop-1280", 1280, 2200], ["phone-390", 390, 3000]]) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  const [inner, scroll] = await page.evaluate(() => [window.innerWidth, document.documentElement.scrollWidth]);
  console.log(name, { inner, scroll }); // scroll must equal inner at phone width
  await page.screenshot({ path: `.fredrin/tmp/verify/${name}.png` });
  await page.close();
}
await browser.close();
```

Run it from the repository root with `node .fredrin/tmp/shot/shot.mjs`. `.fredrin/tmp/` is git-ignored.

## Evidence

- Both screenshots, with their paths.
- The list of `href` values from `out/index.html`, compared with the plan's list. Get it with `grep -o 'href="[^"]*"' out/index.html | sort -u`.

## Cleanup

- Kill only the server this run started.
- Keep the screenshots in `.fredrin/tmp/verify/`.

## Feature map

- Hero and CTAs: `features/hero-and-ctas.md`
- Shipped cards: `features/shipped-cards.md`
- Experience timeline: `features/experience-timeline.md`
- Contact: `features/contact.md`
