# docs/ — setup notes

Standalone setup notes that support the brand assets but are **not** part of the
served portal. GitHub Pages does not publish this folder.

## Contents

| File | What it is |
|---|---|
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
