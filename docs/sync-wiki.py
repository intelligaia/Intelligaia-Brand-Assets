#!/usr/bin/env python3
"""Generate the GitHub Wiki pages from the documents in docs/.

The GitHub Wiki lives in a *separate* repository
(`Intelligaia-Brand-Assets.wiki.git`) and does not update when this repo is
pushed. Left to hand-editing it goes stale, which is the exact drift this
repository exists to prevent — so the wiki is generated, never authored.

    Source of truth        docs/STATUS.md, docs/DESIGN-LOG.md, AGENTS.md
    Generated into         docs/wiki/
    Published from         docs/wiki/ → the wiki repo

Usage
-----
    python3 docs/sync-wiki.py          # regenerate docs/wiki/
    python3 docs/sync-wiki.py --push   # regenerate, then clone + push the wiki

Publishing by hand, if you would rather not use --push:

    git clone https://github.com/intelligaia/Intelligaia-Brand-Assets.wiki.git /tmp/wiki
    cp docs/wiki/*.md /tmp/wiki/
    cd /tmp/wiki && git add -A && git commit -m "Sync wiki from docs/" && git push

Never edit anything in docs/wiki/ directly, and never edit the wiki in the
GitHub UI — the next sync overwrites both.
"""
import os, re, sys, subprocess, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
OUT = os.path.join(DOCS, "wiki")
REPO = "https://github.com/intelligaia/Intelligaia-Brand-Assets"
WIKI = REPO + ".wiki.git"
BLOB = REPO + "/blob/main/"

STAMP = datetime.date.today().strftime("%d %B %Y")

BANNER = (
    "> **Generated page — do not edit here.**\n"
    "> Source: [`%s`](" + BLOB + "%s). Edit there and run `python3 docs/sync-wiki.py`.\n\n"
)

# links that point at repo files need to become absolute; links that point at
# another wiki page need to become a wiki page name
PAGE_LINKS = {
    "DESIGN-LOG.md": "Design-log",
    "STATUS.md": "Status",
    "docs/DESIGN-LOG.md": "Design-log",
    "docs/STATUS.md": "Status",
}
REPO_LINKS = {
    "PORTAL-PLAN.md": BLOB + "docs/PORTAL-PLAN.md",
    "docs/PORTAL-PLAN.md": BLOB + "docs/PORTAL-PLAN.md",
    "AGENTS.md": BLOB + "AGENTS.md",
    "README.md": BLOB + "README.md",
}


def rewrite_links(md):
    def sub(m):
        text, target = m.group(1), m.group(2)
        bare = target.split("#")[0]
        anchor = target[len(bare):]
        if bare in PAGE_LINKS:
            return "[%s](%s%s)" % (text, PAGE_LINKS[bare], anchor)
        if bare in REPO_LINKS:
            return "[%s](%s%s)" % (text, REPO_LINKS[bare], anchor)
        if bare.startswith(("http", "#", "mailto")):
            return m.group(0)
        return "[%s](%s%s%s)" % (text, BLOB, bare, anchor)
    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", sub, md)


SIDEBAR = """### Intelligaia Brand Assets

**[Home](Home)**

**Portal**
- [Status](Status)
- [Design log](Design-log)
- [Navigation contract](Navigation-contract)

**In the repository**
- [README](%sREADME.md)
- [Agent contract](%sAGENTS.md)
- [Structural plan](%sdocs/PORTAL-PLAN.md)
- [Asset manifest](%swebsite/assets/manifest.json)
- [Design tokens](%swebsite/assets/tokens/design-tokens.json)

**Live**
- [Open the portal](https://intelligaia.github.io/Intelligaia-Brand-Assets/)
""" % (BLOB, BLOB, BLOB, BLOB, BLOB)


HOME = """# Intelligaia Brand Assets

The single source of truth for how Intelligaia work looks and reads — written
for humans, structured for agents.

**[Open the portal →](https://intelligaia.github.io/Intelligaia-Brand-Assets/)**

> This wiki is **generated** from `docs/` in the repository and re-synced on
> demand. It is a reading surface, not a source of truth — if something here
> disagrees with the repository, the repository is right.
>
> Last synced: **{stamp}**

---

## Where the portal is right now

The portal has been restructured from one flat navigation into **two sections
with their own left-hand navigation**, built in `website/v2/`. Dark theme only;
light follows.

| | |
|---|---|
| **Live** | The site root lands on `website/v2/00 Home.html` |
| **Design system** | `v2/ds/` — Foundations · Asset library · Construction · Tokens & handoff |
| **Collateral** | `v2/mk/` — Service catalog · Case studies · Whitepapers · Landing pages · Diagrams · Social · Skills |
| **Previous** | `dark/` and `light/` keep the flat navigation, untouched and still reachable |

**[Full status, goal framework and timeline →](Status)**

---

## Start here

| You are | Go to |
|---|---|
| Building a screen, an illustration or a component | [Design system]({live}v2/ds/00%20Start.html) |
| Producing something a client will see | [Collateral]({live}v2/mk/00%20Start.html) |
| An engineer who needs values, not pictures | [Tokens & handoff]({live}v2/ds/40%20Tokens.html) |
| An AI agent producing an Intelligaia artifact | [`AGENTS.md`]({blob}AGENTS.md) |
| New and unsure | Either overview page — both open with what is inside |

---

## The rules that do not bend

- **Colour** — `#FFC800` · `#04050A` · `#4A8BF5` · `#8A5AF0` and theme neutrals.
  Flat fills only. One accent per viewport.
- **Type** — Oswald 400/500 for headings, Geist for everything else.
  **No weight above 500 exists** on web. Presentations are a separate system.
- **Case** — running case in headings; uppercase only below 13px.
- **Numbering** — no `01 / 02 / 03` prefixes on headings or cards.
- **Illustrations** — from the asset library only. Never generated on the fly.
  If nothing fits, **report the gap**.
- **Naming** — the second section is **Collateral**, never "Marketing kit".
  Do not label sections by audience.

See the [navigation contract](Navigation-contract) for how the portal reports
position, and the [design log](Design-log) for why each of these exists.

---

## How this wiki is maintained

It is generated. To update it:

```bash
python3 docs/sync-wiki.py --push
```

Editing a page in the GitHub UI will be overwritten by the next sync. Change
the source document in `docs/` instead.
""".format(stamp=STAMP, blob=BLOB,
           live="https://intelligaia.github.io/Intelligaia-Brand-Assets/")


NAV_CONTRACT = """# Navigation contract

Four rules. Break any of them and the portal stops telling people where they are.

1. **The header is identical on every page** — logo, Branding, Design system,
   Collateral, Contact us. Entering a section moves the highlight and nothing
   else. Never add or remove header items per page.
2. **The section is derived from the page, never from session state.** Each page
   declares its own section and renders that rail, so a link pasted into Slack
   opens with the right navigation already applied.
3. **Section navigation lives in the left rail**, and only the active branch
   expands. The landing page has no rail.
4. **The navigation always reports position** — between pages via the rail, and
   within a page via a scroll spy that moves the marker as the reader scrolls.

## Adding a section to a page

In-page anchors are **derived from the page itself**. Any
`<section class="section v2-sec">` whose first child is a `<span class="eyebrow">`
becomes an anchor: it receives an `id` slugified from the eyebrow text, appears
in the rail beneath its parent, and the scroll spy picks it up.

Give a new section an eyebrow and it self-registers. There is no list to
maintain, and no rail entry should ever be hand-written for an in-page anchor.

## What to refuse

| Request | Correct response |
|---|---|
| Add a header item to one page | Refuse. The header is identical everywhere; only the highlight moves. Put it in the rail. |
| Hand-write a rail sub-item for an in-page anchor | Refuse. Give the section an eyebrow and it self-registers. |
| Duplicate an asset or page into the other section | Refuse. A section is wayfinding; link across instead. |

Full agent contract: [`AGENTS.md`](%sAGENTS.md)
""" % BLOB


def build():
    os.makedirs(OUT, exist_ok=True)
    written = []

    for src, page, title in (("STATUS.md", "Status.md", "docs/STATUS.md"),
                             ("DESIGN-LOG.md", "Design-log.md", "docs/DESIGN-LOG.md")):
        body = open(os.path.join(DOCS, src), encoding="utf-8").read()
        out = (BANNER % (title, "docs/" + src)) + rewrite_links(body)
        open(os.path.join(OUT, page), "w", encoding="utf-8").write(out)
        written.append(page)

    for page, body in (("Home.md", HOME), ("_Sidebar.md", SIDEBAR),
                       ("Navigation-contract.md", NAV_CONTRACT)):
        open(os.path.join(OUT, page), "w", encoding="utf-8").write(body)
        written.append(page)

    print("✓ generated %d wiki pages into docs/wiki/" % len(written))
    for w in sorted(written):
        print("   ", w)
    return written


def push():
    tmp = "/tmp/ig-wiki"
    subprocess.run(["rm", "-rf", tmp], check=False)
    r = subprocess.run(["git", "clone", "--quiet", WIKI, tmp])
    if r.returncode:
        print("\n✗ could not clone the wiki repository.")
        print("  It needs credentials, and the wiki must exist — open the Wiki")
        print("  tab once and create any page to initialise it, then retry.")
        return 1
    for f in os.listdir(OUT):
        if f.endswith(".md"):
            subprocess.run(["cp", os.path.join(OUT, f), os.path.join(tmp, f)], check=True)
    subprocess.run(["git", "-C", tmp, "add", "-A"], check=True)
    msg = "Sync wiki from docs/ — %s" % STAMP
    if subprocess.run(["git", "-C", tmp, "commit", "-q", "-m", msg]).returncode:
        print("✓ wiki already up to date")
        return 0
    if subprocess.run(["git", "-C", tmp, "push", "--quiet"]).returncode:
        print("✗ push failed — credentials")
        return 1
    print("✓ wiki published")
    return 0


if __name__ == "__main__":
    build()
    sys.exit(push() if "--push" in sys.argv else 0)
