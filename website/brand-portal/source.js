/* ═══════════════════════════════════════════════════════════════════════
   SOURCE OF TRUTH — one file, edited once, read by every page.

   This system has exactly two upstreams:
     · Figma  — tokens, components and the illustration masters
     · Git    — the built assets, the pages you are reading, and the skills

   Nothing on this site is authored in the browser. If a page shows an
   asset, that asset has a path in the repo; if it shows a token, that
   token came out of the Figma variables file.

   TO WIRE FIGMA: paste the file URL into FIGMA.url below. Everything
   that says "link pending" across the site resolves the moment you do.
   ═══════════════════════════════════════════════════════════════════════ */
window.IG_SOURCE = {
  REPO: {
    org:    'intelligaia',
    name:   'Intelligaia-Brand-Assets',
    branch: 'main',
    url:    'https://github.com/intelligaia/Intelligaia-Brand-Assets',
    pages:  'https://intelligaia.github.io/Intelligaia-Brand-Assets/'
  },
  FIGMA: {
    /* ← paste the Figma file URL here, e.g.
         https://www.figma.com/design/AbC123.../Intelligaia-Brand-Assets   */
    url:  '',
    name: 'Intelligaia Brand Assets',
    /* node ids per page, optional — appended as ?node-id= when present */
    nodes: {}
  }
};

(function () {
  var S = window.IG_SOURCE, R = S.REPO, F = S.FIGMA;

  function tree(path) {
    return R.url + '/tree/' + R.branch + (path ? '/' + path : '');
  }
  function figma(key) {
    if (!F.url) return null;
    var n = F.nodes[key];
    return n ? F.url + '?node-id=' + encodeURIComponent(n) : F.url;
  }
  S.tree = tree;
  S.figmaUrl = figma;

  var ICON = {
    figma: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none"><circle cx="15" cy="12" r="3.2" stroke="currentColor" stroke-width="1.7"/><path d="M12 4h3.2a3.2 3.2 0 0 1 0 6.4H12zM12 4H8.8a3.2 3.2 0 0 0 0 6.4H12zM12 10.4H8.8a3.2 3.2 0 0 0 0 6.4H12zM12 16.8H8.8a3.2 3.2 0 1 0 3.2 3.2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
    git:   '<svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M6 3v13a3 3 0 0 0 3 3h7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="6" cy="4.5" r="2.2" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="10" r="2.2" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="19.5" r="2.2" stroke="currentColor" stroke-width="1.7"/><path d="M16 10H9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    skill: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.6 6.1 6.6.6-5 4.3 1.5 6.5L12 16l-5.7 3.5 1.5-6.5-5-4.3 6.6-.6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  };

  function card(icon, title, sub, href, state) {
    var tag = href ? 'a' : 'span';
    return '<' + tag + (href ? ' href="' + href + '" target="_blank" rel="noopener"' : ' class="off"') + '>' +
      '<span class="ico">' + ICON[icon] + '</span>' +
      '<span class="tx"><b>' + title + '</b><span>' + sub + '</span></span>' +
      (state ? '<span class="st">' + state + '</span>' : '') +
      '</' + tag + '>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-source]').forEach(function (el) {
      var path  = el.dataset.path  || '';
      var key   = el.dataset.figma || '';
      var skill = el.dataset.skill || '';
      var skillPath = el.dataset.skillPath || '';
      var fu = figma(key);
      var html =
        card('figma', 'Figma source', F.name + (key ? ' · ' + key : ''),
             fu, fu ? 'Open' : 'Link pending') +
        card('git', 'Git repository', path || (R.org + '/' + R.name), tree(path), 'main');
      if (skill) {
        html += card('skill', 'Agent skill', skill,
                     skillPath ? tree(skillPath) : null,
                     skillPath ? 'Runnable' : 'In build');
      }
      el.innerHTML = html;
    });

    document.querySelectorAll('[data-figma-link]').forEach(function (a) {
      if (F.url) { a.href = F.url; a.target = '_blank'; a.rel = 'noopener'; }
      else { a.textContent = 'Figma link pending'; a.removeAttribute('href'); a.style.color = 'var(--ink-muted)'; }
    });

    /* footer line — where this page came from */
    document.querySelectorAll('[data-provenance]').forEach(function (el) {
      var path = el.dataset.provenance;
      el.innerHTML =
        '<span>Derived from</span>' +
        (F.url ? '<a href="' + F.url + '" target="_blank" rel="noopener">Figma · ' + F.name + '</a>'
               : '<i>Figma · link pending</i>') +
        '<em>→</em>' +
        '<a href="' + tree(path) + '" target="_blank" rel="noopener">' +
        R.org + '/' + R.name + '/' + path + '</a>';
    });
  });
})();
