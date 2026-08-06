---
name: visual-qa
description: Verify a layout/CSS/animation change in new-portifolio-v2 by actually rendering it — dev server + Playwright screenshots in dark/light and mobile/desktop. Use before declaring any visual change to this portfolio done, instead of writing a new one-off verify script.
---

# Visual QA loop

`pnpm lint` (tsc --noEmit) only proves the code compiles — it says nothing about
whether the layout actually looks right. This project's history has repeated title
clipping, fixed-height, and scroll/hash bugs that only showed up on an actual screenshot.
Do this loop for any change touching `.tsx`/`.module.css`/`lib/gsap.ts` before calling
the work done.

## Workflow

### 1. Start the dev server

```bash
pnpm dev
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5173
```

If 5173 is taken, Vite picks the next free port — check the actual printed URL.

### 2. Screenshot both themes at two widths

Playwright is not a project dependency — invoke it via `npx` (a pinned version has
worked before in this repo, e.g. `playwright@1.62.1`):

```bash
npx -y playwright@1.62.1 screenshot --full-page --color-scheme dark  http://localhost:5173/ "<scratchpad>/dark-desktop.png"
npx -y playwright@1.62.1 screenshot --full-page --color-scheme light http://localhost:5173/ "<scratchpad>/light-desktop.png"
```

For a mobile viewport, drive Playwright with a small `node` script (`page.setViewportSize`)
instead of the CLI, since the `screenshot` subcommand doesn't take a viewport flag. Put
that script in the session scratchpad, not the repo root.

Toggling theme via `--color-scheme` reflects the `prefers-color-scheme` media query;
since this app also supports a manual `data-theme` override via localStorage, if you're
specifically testing the toggle button, click it in a full Playwright script instead of
relying on `--color-scheme` alone.

### 3. Read the screenshots

Look specifically at the areas that have broken before in this project:
- Hero/section titles — clipped descenders or clamp() text overflowing its box
- Any section with a fixed/min height — content longer than expected overflowing or
  leaving a gap
- Header scroll-progress bar (`useHeaderScroll`) and smooth-scroll (`useSmoothScroll`,
  Lenis) — jumpiness, wrong progress, anchor links landing in the wrong spot
- Horizontal scroll on the page body (should never happen — check both viewport widths)
- The theme toggle itself and the Lightbox (badges/certificates) open/close state

### 4. Clean up

Delete any temp `.cjs`/`.js`/`.png` you created for this check before finishing — this
repo has previously accumulated throwaway `.verify-*.cjs` scripts in the root across
sessions. Use the scratchpad directory for anything temporary; commit nothing debug-only.

## Checklist

- [ ] Dev server confirmed up (200 on the printed port)
- [ ] Screenshot taken in dark AND light
- [ ] Screenshot taken at a mobile width AND desktop width
- [ ] No clipping / overflow / unwanted horizontal scroll in either
- [ ] Any temp scripts/screenshots removed from the repo (scratchpad only)
