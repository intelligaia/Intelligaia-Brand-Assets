# docs/ — setup notes

Standalone setup notes that support the brand assets but are **not** part of the
served portal. GitHub Pages does not publish this folder.

## Contents

| File | What it is |
|---|---|
| [`STATUS.md`](STATUS.md) | Daily updates — what was covered, what is next, what is missing. |
| [`DESIGN-LOG.md`](DESIGN-LOG.md) | Every change request against the portal, grouped by what it was about, with the decision and the outcome. Includes the defects register. |
| [`PORTAL-PLAN.md`](PORTAL-PLAN.md) | The structural rationale — audiences, jobs to be done, and the calls made when the portal was split into two sections. |
| [`sync-wiki.py`](sync-wiki.py) | Generates the GitHub Wiki from the documents above. The wiki is a **separate repository** and does not update when this one is pushed. |
| `wiki/` | Generated output. Never edit by hand — the next sync overwrites it. |
| [`GPT setup - Configure tab.md`](GPT%20setup%20-%20Configure%20tab.md) | Copy-paste fields for building the **Intelligaia Illustration Asset Generator** as a custom GPT (or Gemini Gem): name, description, full system prompt, conversation starters, capability toggles, testing checklist. |
| [`GPT setup - Knowledge file.md`](GPT%20setup%20-%20Knowledge%20file.md) | The knowledge base uploaded to that GPT — the illustration rulebook: locked palette tokens, style treatments, 10 framework sections, filename convention, output protocol. |

## How they fit together

The two files build a bot that **generates illustration assets** slot-by-slot,
which are then dropped into the `website/assets/illustrations/` slots. The setup
file tells you how to configure the bot; the knowledge file is what you upload
into it.

> ⚠️ **Palette caveat.** These notes describe an older/parallel illustration
> system with its own 14-token palette (yellow `#FCD111`). The current brand
> portal's canonical palette is different (`#FFC800`; see `../AGENTS.md`). Treat
> the two as separate specs and don't mix their colour values.

---

## The GitHub Wiki

The Wiki tab is a **separate repository** (`…/Intelligaia-Brand-Assets.wiki.git`).
Pushing this repo does not update it, which is why it drifts.

It is generated rather than authored, so there is one source:

```bash
python3 docs/sync-wiki.py          # regenerate docs/wiki/
python3 docs/sync-wiki.py --push   # regenerate, then publish to the wiki repo
```

`Status` and `Design log` are copies of `STATUS.md` and `DESIGN-LOG.md` with a
banner pointing back at the source. `Home`, `_Sidebar` and `Navigation contract`
are templates inside the script. Editing a page in the GitHub UI will be
overwritten by the next sync — change the source in `docs/` instead.

If the clone step fails, the wiki may never have been initialised: open the Wiki
tab once, create any page, then re-run.
