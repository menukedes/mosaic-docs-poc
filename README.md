# Mosaic Help Center (proof of concept)

Public documentation for Mosaic merchants and dispensary staff, built with
[Starlight](https://starlight.astro.build) and hosted on Cloudflare.

## How changes get published

1. A writer (a person or Claude) changes pages on a new branch and opens a pull request.
2. Cloudflare builds a preview of the site and posts the link on the pull request.
3. A reviewer checks the text changes and the preview.
4. The reviewer approves and merges. The live site updates in a minute or two.

Nothing reaches the live site without an approved pull request.

## Where things live

| What | Where |
|---|---|
| Pages | `src/content/docs/<section>/<page>.md` |
| Images | `src/assets/` |
| Sidebar sections, logo, plugins | `astro.config.mjs` |
| Brand colours | `src/styles/mosaic.css` |
| Hosting settings | `wrangler.jsonc` |
| Writing rules | `CONTENT-RULES.md` |
| Page template | `templates/task-page.md` |
| Illustrations | `src/assets/illustrations/` |

## Run it locally (optional)

```bash
npm install
npm run dev
```
