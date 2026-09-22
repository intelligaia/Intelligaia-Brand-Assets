#!/usr/bin/env python3
"""
CX Roadmap builder.

Assembles a single self-contained HTML roadmap from three inputs that live
beside this script:

    shell.html          fixed CSS + HTML frame + JS renderers (never edited)
    <content>.js        the populated brand + sections file (the only file you edit)
    assets/             logo.svg, thumbnail-default.png, thumbnail/*.svg

The heavy base64 (logo, thumbnails) is inlined HERE, at build time, so it never
has to sit inside the file the agent reads. Output renders standalone anywhere.

Usage:
    python3 build.py content.js -o /mnt/user-data/outputs/cx-roadmap-acme.html
    python3 build.py content.js                 # -> ./cx-roadmap.html
"""

import argparse, base64, colorsys, json, mimetypes, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))


def die(msg):
    sys.stderr.write("build error: " + msg + "\n")
    sys.exit(1)


def data_uri(path):
    """Return a base64 data URI for an asset path (absolute or relative to skill dir)."""
    if not os.path.isabs(path):
        path = os.path.join(HERE, path)
    if not os.path.exists(path):
        die("asset not found: " + path)
    mime = mimetypes.guess_type(path)[0] or "application/octet-stream"
    if path.lower().endswith(".svg"):
        mime = "image/svg+xml"
    with open(path, "rb") as f:
        return "data:%s;base64,%s" % (mime, base64.b64encode(f.read()).decode())


def extract_balanced(text, decl, open_ch, close_ch):
    """Extract the balanced literal that follows `decl` (e.g. 'const sections = ')."""
    i = text.find(decl)
    if i == -1:
        die("could not find `%s` in content file" % decl.strip())
    i = text.index(open_ch, i)
    depth = 0
    for j in range(i, len(text)):
        c = text[j]
        if c == open_ch:
            depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0:
                return text[i:j + 1]
    die("unbalanced `%s ... %s` after `%s`" % (open_ch, close_ch, decl.strip()))


def parse_brand(brand_literal):
    """Pull simple key: 'value' / key: \"value\" pairs out of the brand object."""
    fields = {}
    for m in re.finditer(r'(\w+)\s*:\s*(["\'])(.*?)\2', brand_literal):
        fields[m.group(1)] = m.group(3)
    return fields


NAMED_COLORS = {
    "black": (0, 0, 0), "white": (255, 255, 255), "red": (255, 0, 0),
    "green": (0, 128, 0), "blue": (0, 0, 255), "yellow": (255, 255, 0),
    "orange": (255, 165, 0), "purple": (128, 0, 128), "gray": (128, 128, 128),
    "grey": (128, 128, 128), "silver": (192, 192, 192), "navy": (0, 0, 128),
    "teal": (0, 128, 128), "cyan": (0, 255, 255), "magenta": (255, 0, 255),
    "pink": (255, 192, 203), "brown": (165, 42, 42), "gold": (255, 215, 0),
}


def _parse_color(tok):
    """'#abc' / '#aabbcc' / 'rgb(r,g,b)' / a named colour -> (r,g,b), else None."""
    tok = tok.strip().lower()
    if tok in ("none", "transparent", "currentcolor", "inherit", ""):
        return None
    if tok in NAMED_COLORS:
        return NAMED_COLORS[tok]
    if tok.startswith("url("):
        # a gradient/pattern reference — treat as multicolour evidence
        return "GRADIENT"
    m = re.match(r"^#([0-9a-f]{3})$", tok)
    if m:
        h = m.group(1)
        return tuple(int(c * 2, 16) for c in h)
    m = re.match(r"^#([0-9a-f]{6})", tok)
    if m:
        h = m.group(1)
        return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))
    m = re.match(r"^rgba?\(([^)]+)\)", tok)
    if m:
        parts = [p.strip() for p in m.group(1).split(",")[:3]]
        try:
            return tuple(min(255, max(0, int(float(p.rstrip("%")) * (2.55 if "%" in p else 1)))) for p in parts)
        except ValueError:
            return None
    return None


def classify_logo_tone(path):
    """Classify a brand logo as 'light', 'dark', or 'multi'.

    - 'light'  — monochrome and pale (a white/light logo). Needs darkening on a
                 light background.
    - 'dark'   — monochrome and dark. Needs inverting to white on a dark
                 background.
    - 'multi'  — more than one distinct hue, a gradient, or a raster image we
                 can't inspect. Must NEVER be recoloured; it gets a backing
                 plate instead so it stays legible on either theme.
    """
    if not path or not os.path.exists(path):
        return "multi"
    if not path.lower().endswith(".svg"):
        # Raster logos can't be inspected safely — never recolour them.
        return "multi"
    try:
        text = open(path, encoding="utf-8", errors="ignore").read()
    except OSError:
        return "multi"

    toks = re.findall(r'(?:fill|stroke)\s*[=:]\s*["\']?([^"\';>)]+)', text, re.I)
    if "<linearGradient" in text or "<radialGradient" in text:
        return "multi"

    colors = []
    for t in toks:
        c = _parse_color(t)
        if c == "GRADIENT":
            return "multi"
        if c:
            colors.append(c)

    if not colors:
        return "multi"

    # Distinct hues among saturated colours decide "multicolour".
    hues = set()
    for r, g, b in colors:
        mx, mn = max(r, g, b), min(r, g, b)
        sat = 0 if mx == 0 else (mx - mn) / mx
        if sat > 0.20:                      # chromatic, not a grey
            h, _, _ = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            hues.add(round(h * 12))         # 12 coarse buckets
    if len(hues) > 1:
        return "multi"

    # Monochrome: decide light vs dark by mean perceptual luminance.
    lum = sum(0.2126 * r + 0.7152 * g + 0.0722 * b for r, g, b in colors) / (255 * len(colors))
    return "light" if lum > 0.55 else "dark"



def build_icon_css(*sources):
    """Inline every Tabler icon the page uses as CSS masks, from the SVGs shipped
    in assets/icons/. This replaces the old cdnjs stylesheet: outside
    stylesheets are blocked in Claude's preview and in published artifacts, so
    a font loaded from the internet left every icon blank there."""
    used = set()
    for src in sources:
        used |= set(re.findall(r"\bti-([a-z0-9]+(?:-[a-z0-9]+)*)", src))
    icon_dir = os.path.join(HERE, "assets", "icons")
    rules, missing = [], []
    for name in sorted(used):
        path = os.path.join(icon_dir, name + ".svg")
        if not os.path.exists(path):
            missing.append(name)
            continue
        b64 = base64.b64encode(open(path, "rb").read()).decode()
        rules.append('.ti-%s{--ti:url("data:image/svg+xml;base64,%s")}' % (name, b64))
    base = (".ti{display:inline-block;width:1em;height:1em;vertical-align:-0.125em;"
            "font-style:normal;background-color:currentColor;"
            "-webkit-mask:var(--ti) center/contain no-repeat;"
            "mask:var(--ti) center/contain no-repeat}")
    real_missing = [m for m in missing
                    if any(re.search(r"(?:class=[\"'][^\"']*|icon:\s*')ti-" + re.escape(m) + r"\b", src)
                           for src in sources)]
    if real_missing:
        print("warning: no icon file for: " + ", ".join(real_missing)
              + " (add it to assets/icons/)", file=sys.stderr)
    return base + "".join(rules)

def extract_card_template_css(skill_dir):
    """Pull the <style>...</style> block out of references/card-template.md.
    This is the single source of truth for the card visual (colors, sizing,
    truncation). Editing the .md and rebuilding is all that's needed to
    change the look — no shell.html edits required."""
    path = os.path.join(skill_dir, "references", "card-template.md")
    if not os.path.exists(path):
        die("references/card-template.md missing — this is a packaging bug.")
    text = open(path, encoding="utf-8").read()
    m = re.search(r"<style>(.*?)</style>", text, re.S)
    if not m:
        die("no <style>...</style> block found in references/card-template.md")
    css = m.group(1)
    # Drop the template's own preview-page styles (page padding, font, body
    # background) — they're fenced with demo-only markers and must never reach
    # the roadmap, where they would apply to the whole page.
    css = re.sub(r"/\* demo-only:start.*?/\* demo-only:end \*/", "", css, flags=re.S)
    return css


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("content", help="the populated content .js file")
    ap.add_argument("-o", "--out", default=os.path.join(os.getcwd(), "cx-roadmap.html"))
    args = ap.parse_args()

    shell_path = os.path.join(HERE, "shell.html")
    if not os.path.exists(shell_path):
        die("shell.html missing next to build.py — this is a packaging bug.")
    shell = open(shell_path, encoding="utf-8").read()
    content = open(args.content, encoding="utf-8").read()

    # 1) content -> the two literals the shell expects
    sections_literal = extract_balanced(content, "const sections = ", "[", "]")
    brand = parse_brand(extract_balanced(content, "const brand = ", "{", "}"))

    # 1b) card visual (colors, sizing, truncation) comes from the reference
    #     .md file, not from shell.html — inject it verbatim.
    card_css = extract_card_template_css(HERE)

    # 2) build the thumbnail map from the canonical key list in the shell.
    #    Default behaviour = every section uses thumbnail-default.png (one asset,
    #    inlined once and reused). If assets/thumbnail/<key>.svg exists, that
    #    section gets its own art instead.
    keys = re.findall(r"'(thumb_[^']+\.png)'", shell)
    if not keys:
        die("no __cxThumbFiles list found in shell.html")
    default_uri = data_uri("assets/thumbnail-default.png")
    thumb_dir = os.path.join(HERE, "assets", "thumbnail")
    thumb_map = {}
    for k in keys:
        base = re.sub(r"^thumb_", "", re.sub(r"\.png$", "", k)).strip()
        svg = os.path.join(thumb_dir, base + ".svg")
        thumb_map[k] = data_uri(svg) if os.path.exists(svg) else default_uri
    thumb_object = json.dumps(thumb_map, ensure_ascii=False)

    # 3) inline the Intelligaia lockup (right-hand side of the Top Bar and
    #    footer). This is the agency mark and is always the shipped asset —
    #    a client's brand.logo goes in the LEFT Brand slot, not here.
    logo_uri = data_uri("assets/logo.svg")
    # Classify it so the page can adapt it per theme without ever recolouring
    # a multicolour mark. See classify_logo_tone().
    logo_tone = classify_logo_tone(os.path.join(HERE, "assets", "logo.svg"))

    # 4) substitute the three placeholders
    out = shell
    out = out.replace("{{SECTIONS_ARRAY}}", sections_literal)
    out = out.replace("{{THUMB_DATA_OBJECT}}", thumb_object)
    out = out.replace("{{LOGO_DATAURI}}", logo_uri)
    out = out.replace("{{LOGO_TONE}}", logo_tone)
    out = out.replace("/* {{CARD_TEMPLATE_CSS}} */", card_css)
    # Self-contained icons: swap the external Tabler stylesheet for inlined CSS.
    icon_css = build_icon_css(shell, content)
    out = re.sub(r'<link rel="stylesheet" href="https://cdnjs\.cloudflare\.com/ajax/libs/tabler-icons/[^"]+"\s*/?>',
                 lambda _m: "<style>" + icon_css + "</style>", out, count=1)

    # 5) brand text substitutions (only if the user supplied them)
    if brand.get("name"):
        out = out.replace("Brand Name", brand["name"])
    if brand.get("logo"):
        # Client Brand logo fills the dashed BRAND LOGO placeholder on the LEFT
        # (Top Bar and footer). Classified separately from the Intelligaia mark
        # so each adapts to the theme on its own terms.
        brand_tone = classify_logo_tone(brand["logo"])
        brand_img = ('<img class="brand-logo-img" src="%s" alt="%s" data-logo-tone="%s">'
                     % (data_uri(brand["logo"]),
                        brand.get("name", "Brand").replace('"', "&quot;"),
                        brand_tone))
        out = out.replace('<div class="brand-logo">BRAND LOGO</div>', brand_img)

    if brand.get("hero"):
        # replace the dashed placeholder brand-mark with the supplied hero image
        out = re.sub(
            r'<div class="brand-mark"[^>]*>.*?</div>',
            '<img class="brand-mark" src="%s" alt="%s">' % (data_uri(brand["hero"]),
                                                            brand.get("name", "")),
            out, count=1, flags=re.S)

    if "{{" in out and re.search(r"\{\{[A-Z_]+\}\}", out):
        die("unfilled placeholder left in output: " +
            ", ".join(set(re.findall(r"\{\{[A-Z_]+\}\}", out))))

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    open(args.out, "w", encoding="utf-8").write(out)
    print("built %s  (%d KB)" % (args.out, len(out.encode()) // 1024))


if __name__ == "__main__":
    main()
