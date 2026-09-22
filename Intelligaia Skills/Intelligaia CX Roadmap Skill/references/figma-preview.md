# Figma preview fetch

Read this after the user has supplied a Figma personal access token (see
"Figma card previews" in SKILL.md for the trigger and the message to show).

The token is a credential: use it only for these requests, and never write it
into content.template.js, the built HTML, a filename, or any other artifact.

The rest of this file is the fetch procedure. If a fetch fails, cards simply
keep their default thumbnails — that is the intended fallback.

If the user provides Figma/FigJam URLs, try to fetch a preview:

1. **Public files** — `https://www.figma.com/api/oembed?url=<URL>` returns JSON
   with `thumbnail_url` (no token). Download the WebP, convert to PNG.
2. **Private files** — if `FIGMA_TOKEN` is set, call
   `GET https://api.figma.com/v1/images/<FILE_KEY>?ids=<NODE_ID>&format=png&scale=2`
   (frame link) or `GET /v1/files/<FILE_KEY>` → `thumbnail_url` (file link) with
   the `X-Figma-Token` header.
3. **Fetch fails / no token** — leave `image` unset; the card renders its
   default thumbnail. Never insert a broken URL; never require a token.

Save fetched previews into `/mnt/user-data/outputs/` and set the technique's
`image` to that path (build.py inlines it) or a data URI.
