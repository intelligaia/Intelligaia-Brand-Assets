# Card Template

A reusable section pattern: icon + title + helper text, connected by a vertical purple line. Built on Atmosphere design tokens. Card height is fixed so every card stays the same size — title and description keep their full height, and the image shrinks to fit whatever space is left so text is never cropped.

The template includes **two variants** — use whichever fits the main section:

- **Card Variant A — no sub-section.** Use when the main section has only one group of card(s). The card sits directly under the section subtitle.
- **Card Variant B — with sub-section(s).** Use when the main section splits into multiple named groups (e.g. "Persona", "Journey Map"), each with its own row of cards under a small uppercase heading and divider. Repeat the `.subsection` block for each additional group.

## Preview structure

- **Section header** — icon (28px circle) + title, connected by a 2px purple vertical line
- **Section subtitle** — helper text describing the section
- **Card** *(Variant A)* — surface card with thumbnail image, title, and description, directly under the subtitle
- **Sub-section** *(Variant B)* — small uppercase heading + divider, grouping a row of cards

## What to customize per use

- `.section-icon` — swap the gradient/SVG for your real icon
- `.card__thumb img` — point `src` to your actual illustration/screenshot
- `.section-title` / `.section-subtitle` — section copy
- `.subsection-heading` — sub-section label (e.g. "Persona") — only needed for Variant B
- `.card__title` / `.card__desc` — card copy (description truncates with an ellipsis if it overflows one line)
- `.card-row` — add/remove `<div class="card">` children; the grid auto-fills as many 300px columns as fit the available width, so cards pack left with no dead gaps (change the `300px` in `grid-template-columns` if you change the card width)

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Card Template</title>
<style>
  :root {
    --color-bg-canvas: #ffffff;
    --color-bg-surface: #ffffff;
    --color-bg-surface-tinted: #f4f5f6;
    --color-bg-accent: #0070d2;

    --color-text-primary: #1b1c1d;
    --color-text-secondary: #606162;
    --color-text-white: #ffffff;

    --color-border-primary: #d6d6d6;
    --color-border-divider: #ebebeb;

    --font-family: 'CiscoSansTT', system-ui, sans-serif;

    --shadow-xs: 0 2px 5px rgba(0,0,0,0.05);

    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-6: 24px;
  }

  /* demo-only:start — styles for this file's OWN preview page. build.py
     strips everything between these markers so they never reach the
     roadmap (they set page padding, font and background globally). */
  * { box-sizing: border-box; }

  body {
    margin: 0;
    padding: var(--space-6);
    background: var(--color-bg-canvas);
    font-family: var(--font-family);
  }

  /* ---- Section wrapper (icon + heading + helper text) ---- */
  .section {
    max-width: 640px;
    position: relative;
    padding-left: 40px;
    display: flow-root; /* contains card margins so the connector line
                            below always reaches the section's true bottom
                            edge, even after the card's own spacing grows */
  }

  /* vertical connector line running behind the icon, full height of the section */
  .section::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 13px; /* centers on the 28px icon (28/2 - 1px line width) */
    width: 2px;
    background: #a855f7;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-1);
    margin-left: -40px; /* pull back out since .section now has left padding */
    position: relative;
    z-index: 1;
  }

  .section-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6a4cff, #a855f7);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .section-icon svg {
    width: 14px;
    height: 14px;
  }

  .section-title {
    margin: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: var(--color-text-primary);
  }

  .section-subtitle {
    margin: 0 0 var(--space-4) 0;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-text-secondary);
  }

  /* demo-only:end */

  /* Dark theme: cards follow the page instead of staying bright white. */
  body.dark-mode {
    --color-bg-surface: #16161A;
    --color-bg-surface-tinted: #1F1F24;
    --color-text-primary: rgba(255, 255, 255, 0.92);
    --color-text-secondary: rgba(255, 255, 255, 0.62);
    --color-border-primary: rgba(255, 255, 255, 0.12);
    --color-border-divider: rgba(255, 255, 255, 0.08);
  }

  /* ---- Card ---- */
  .card {
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border-primary);
    border-radius: 12px;
    padding: var(--space-4);
    box-shadow: var(--shadow-xs);
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 300px; /* cap width so cards never stretch too wide */
    height: 200px; /* fixed height keeps every card consistent */
    margin-bottom: 30px; /* space after the card */
    display: flex;
    flex-direction: column;
  }

  .card__thumb {
    background: var(--color-bg-surface-tinted);
    border-radius: 8px;
    flex: 1 1 auto; /* image shrinks first — text below is never cropped */
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-4);
    overflow: hidden;
  }

  .card__thumb img {
    max-width: 100%;
    max-height: calc(100% - 10px); /* default icons sit 10px shorter than the box */
    object-fit: contain;
  }

  /* Default icon on a card with NO link: shown in grey, so the untouched
     template reads as a neutral placeholder. A card that HAS a link but no
     fetchable image keeps the icon in full colour. */
  .card__thumb--muted img {
    filter: grayscale(1);
    opacity: 0.55;
  }

  .card__title {
    margin: 0 0 var(--space-1);
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    color: var(--color-text-primary);
    flex-shrink: 0; /* text block keeps its full height, never crops */
  }

  .card__desc {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: var(--color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0; /* text block keeps its full height, never crops */
  }


  /* ---- Fetched images (Figma previews / images the user supplies) ----
     Fill the grey image box edge to edge, so no grey shows around a
     screenshot. Anchored to the top, so a tall screen keeps its header and
     any overflow is trimmed at the bottom. The grey box and the skill's own
     default illustrations are unchanged. */
  .card__thumb--img img {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    object-fit: cover;
    object-position: top;
  }

  /* ---- Persona cards only ----
     Persona cards hold portraits, so they use a taller card with a SQUARE
     image box: a square headshot sits in it whole instead of losing ~34% to a
     letterbox crop, and the photo fills the box so no grey shows around it.
     Every other card keeps the wider 300 x 200 shape above. */
  .card--persona {
    max-width: 200px;
    height: 256px; /* 168px square image box + gap + title/desc + padding */
  }

  .card--persona .card__thumb {
    flex: 0 0 168px; /* square box — matches the card's inner width */
    height: 168px;
  }

  /* A supplied persona photo fills the square box edge to edge. */
  .card--persona .card__thumb--img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* The default persona avatar is drawn about 20% smaller than the box, so
     it sits with breathing room instead of filling it. */
  .card--persona .card__thumb:not(.card__thumb--img) img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(0.8);
  }

  /* Persona rows pack to the narrower card width. */
  .card-row.card-row--persona {
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 200px));
  }

  /* ---- Sub-section (e.g. "Persona") ---- */
  .subsection {
    margin-top: var(--space-6);
  }

  .subsection-heading {
    margin: 0 0 var(--space-2);
    font-size: 11px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
  }

  .subsection-divider {
    border: none;
    border-top: 1px solid var(--color-border-divider);
    margin: 0 0 var(--space-4);
  }

  .card-row {
    display: grid;
    /* Columns are sized to the card (300px), not to the page. `auto-fill` packs
       as many cards per row as the available width allows and leaves no dead
       gap between them — a fixed `repeat(2, 1fr)` would stretch two columns to
       the full page width and strand each 300px card at the left of its own
       oversized column. */
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 300px));
    justify-content: start;
    gap: var(--space-4);
  }
</style>
</head>
<body>

  <div class="section">
    <div class="section-header">
      <span class="section-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="white" stroke-width="2"/>
        </svg>
      </span>
      <h3 class="section-title">Card Variant A</h3>
    </div>
    <p class="section-subtitle">Provide description for this section in the intake.</p>

    <!--
      VARIANT A — no sub-section.
      Use this when the main section has only one group of card(s).
      The card sits directly under the section subtitle.
    -->
    <div class="card">
      <div class="card__thumb">
        <img src="https://via.placeholder.com/160x120.png?text=Image" alt="Image">
      </div>
      <p class="card__title">Title</p>
      <p class="card__desc">Description/Designation</p>
    </div>
  </div>

  <div class="section" style="margin-top: 40px;">
    <div class="section-header">
      <span class="section-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="white" stroke-width="2"/>
        </svg>
      </span>
      <h3 class="section-title">Card Variant B</h3>
    </div>
    <p class="section-subtitle">Provide description for this section in the intake.</p>

    <!--
      VARIANT B — with sub-section(s).
      Use this when the main section splits into multiple named groups
      (e.g. "Persona", "Journey Map"), each with its own row of cards.
      Repeat the .subsection block for each additional group.
    -->
    <div class="subsection">
      <p class="subsection-heading">Sub Section Heading</p>
      <hr class="subsection-divider">

      <div class="card-row">
        <div class="card">
          <div class="card__thumb">
            <img src="https://via.placeholder.com/160x120.png?text=Image" alt="Image">
          </div>
          <p class="card__title">Title</p>
          <p class="card__desc">Description/Designation</p>
        </div>

        <div class="card">
          <div class="card__thumb">
            <img src="https://via.placeholder.com/160x120.png?text=Image" alt="Image">
          </div>
          <p class="card__title">Title</p>
          <p class="card__desc">Description/Designation</p>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
```
