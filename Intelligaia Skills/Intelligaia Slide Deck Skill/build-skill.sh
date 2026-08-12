#!/usr/bin/env bash
#
# build-skill.sh — repackage the installable skill bundle from source.
#
# The "Intelligaia Deck Design.skill" file is just a zip of the
# intelligaia-deck-design/ folder. Edit the source (SKILL.md, assets/),
# then run this script to regenerate the .skill, and re-install it in Claude.
#
# Usage:  ./build-skill.sh
#
set -euo pipefail

# Run from this script's own directory, regardless of where it's called from.
cd "$(dirname "$0")"

SRC="intelligaia-deck-design"
OUT="Intelligaia Deck Design.skill"

if [ ! -d "$SRC" ]; then
  echo "Error: source folder '$SRC/' not found next to this script." >&2
  exit 1
fi

# Remove any stale bundle, then repackage the source folder cleanly.
#   -X                drops extra file attributes for a reproducible archive
#   README.md         excluded — it's repo docs, not part of the skill payload
#                     (Claude only needs SKILL.md + assets/)
#   junk files        excluded explicitly
rm -f "$OUT"
zip -r -X "$OUT" "$SRC" -x "$SRC/README.md" '*.DS_Store' '*/__MACOSX/*' >/dev/null

echo "✅ Built '$OUT' from '$SRC/' ($(unzip -l "$OUT" | tail -1 | awk '{print $2}') files)."
echo "   Re-install it in Claude: drag the .skill into chat → Save skill."
