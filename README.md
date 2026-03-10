# Resume Site

This is now a static resume site with no JavaScript build step.

## Files to edit

- `index.html`: content (summary, experience, education, links)
- `styles.css`: visual styling and layout
- `assets/fonts/`: self-hosted fonts used by `@font-face` in `styles.css`

## Font setup

- Two local fonts are loaded with `font-display: swap`:
  - `assets/fonts/roboto-regular.woff2` (`400`)
  - `assets/fonts/roboto-bold.woff2` (`700`)
- To change fonts, replace those files and update `@font-face` blocks in `styles.css`.

## Quick update flow

1. Edit `index.html`.
2. Commit and push to `main`.
3. GitHub Pages serves it automatically from this repository.
