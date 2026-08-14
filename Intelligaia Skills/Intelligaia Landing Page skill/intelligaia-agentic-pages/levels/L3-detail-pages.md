> 🔴 **RULING — 13 Aug 2026. Two levels are in play, not four.**
> **L0 is the home page, and only the home page. Every other page is L1** — About Us, Work,
> Services, Technology, Careers, Contact, Blog, the 15 case studies and the 11 articles.
> **L2 and L3 are reserved: not defined, not in use.** The three-way split below is historical.
> Where a table or a sentence in this skill says L2 or L3, read it as L1 until L2 and L3 are
> defined. Do not label a new page L2 or L3.
>
> One property survives and is worth keeping when they are eventually defined: the case studies
> and articles run with the **scroll pager off**, because long-form reading needs free scrolling.
> That belongs to long-form reading, not to a level.

> **HISTORICAL. These pages are L1. L3 is reserved and undefined.**

# L3 — the detail pages

**26 files: `portfolio/<slug>/index.html` × 15 · `post/<slug>/index.html` × 11**

L3 is an **article**. It is read, not paged. The live URL shape is kept for SEO — never rename these folders.

---

## L3's budget

| | value |
|---|---|
| sections | 6–10 |
| narrative | 1 arc |
| pinned / sticky | 0 |
| free zones | 0 |
| interactive sections | 0 |
| canvas | 0 |
| **pager** | **OFF** |
| words per section | free |
| bespoke JS sections | 0 |
| layout | the shell + `.pmeasure` |

🔴 **The pager is off.** An article is read at the reader's pace; one-section-per-gesture fights a paragraph.

🔴 **The hero is on the page column; the body is on the reading measure.** The shell already does this — `main > section:first-of-type .pmeasure` gets the full page width so the H1 lands where every other page's H1 lands, and everything after it drops to `min(100% − 2gut, 1060px, calc(770px + max(0px,(100vw − 1440px)) × 0.22))`.

---

## The case study — one L0 arc, discharged

```
Hero            client + claim; industry and role move DOWN into the chip row
  → Argument beat      the problem       ← L0 compress / chute
  → Full-bleed         the mechanism     ← L0 clutter / payroll
  → Diptych            the two states    ← L0 workbench / cmgr
  → Stat band          the payoff        ← L0 cs3payoff
  → Close
```

🔴 Where a case study's client and industry are real information they are **demoted into the chip row**, never deleted and never put back above the H1.

---

## The article

```
Hero → lede → body on .pmeasure → author signature → related → Close
```

The byline uses the card system's portrait disc: 40px round, `object-fit:cover; object-position:50% 34%`, on `rgba(255,255,255,.06)` with a `.14` hairline. Where there is no photograph, the same disc with initials in Geist 500 — **never the gradient behind letters**.

---

## 🔴 Traps specific to L3

- **Bare descendant selectors on a span-heavy block.** `.pauth span{display:block;text-transform:uppercase}` also matched the avatar, the byline and the share buttons. Scope to `.pauth .bwho>span`.
- **Wix source images.** `<img src>` on a scraped Wix page is a blurred LQIP placeholder — parse `<wow-image data-image-info>` for the full-res URL. Both `fill` and `fit` URL modes need **w AND h** or the CDN 400s.
- **The in-place discovery agent is on all 26 of these too.** It is easy to miss when sweeping — always include `portfolio/` and `post/` in a site-wide patch.
- **`.st{display:flex}`** — a section with a text wrap and a `100vw` figure lays them out side by side, so a "full-bleed" hero renders as a half-width picture. Give the section `display:block`.
