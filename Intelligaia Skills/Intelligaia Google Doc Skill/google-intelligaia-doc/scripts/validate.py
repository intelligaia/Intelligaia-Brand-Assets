#!/usr/bin/env python3
"""validate.py — automated brand checks on a generated Intelligaia .docx.

Not a substitute for the visual QA pass; it catches the mechanical violations: off-palette colours,
off-brand fonts, and open [TK: ...] gaps. Usage: python validate.py <file.docx>
Exit code 0 = clean (gaps are warnings, not failures), 1 = a hard brand violation was found.
"""
import sys, re, zipfile

ALLOWED_COLORS = {  # uppercase hex, no '#'
    "FFD700", "002B5C", "231F20", "FBEEDD", "F9D7AA", "FBEAAD",
    "666666", "B7B7B7", "D9D9D9", "EFEFEF", "FFFFFF", "FAFAF8", "FAFAF7",
    "05A550", "2AAB66", "E46962", "AEEDE5", "CBB7E8", "EFC9DE", "C9DAF8",
    "AUTO",
}
ALLOWED_FONTS = {"Montserrat", "Montserrat Medium", "Consolas", "Arial", "Courier New"}

def main(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml").decode("utf-8", "replace")

    colors = set(m.upper() for m in re.findall(r'w:(?:fill|color)="([0-9A-Fa-f]{6}|auto)"', xml))
    bad_colors = sorted(c for c in colors if c not in ALLOWED_COLORS)

    fonts = set(re.findall(r'w:ascii="([^"]+)"', xml))
    bad_fonts = sorted(f for f in fonts if f not in ALLOWED_FONTS)

    tks = re.findall(r'\[TK:[^\]]*\]', xml)

    print("=== Intelligaia doc-gen validate ===")
    print(f"colours used : {sorted(colors)}")
    print(f"fonts used   : {sorted(fonts)}")
    hard_fail = False
    if bad_colors:
        hard_fail = True
        print(f"FAIL  off-palette colours: {bad_colors}")
    else:
        print("ok    palette")
    if bad_fonts:
        hard_fail = True
        print(f"FAIL  off-brand fonts: {bad_fonts}")
    else:
        print("ok    fonts")
    if tks:
        print(f"WARN  {len(tks)} open gap(s) — fill or confirm before sending: {tks}")
    else:
        print("ok    no open [TK] gaps")

    print("RESULT:", "CLEAN" if not hard_fail else "BRAND VIOLATION")
    sys.exit(1 if hard_fail else 0)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python validate.py <file.docx>"); sys.exit(2)
    main(sys.argv[1])
