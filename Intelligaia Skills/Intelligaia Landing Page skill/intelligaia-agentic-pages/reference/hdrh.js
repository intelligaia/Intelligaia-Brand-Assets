/* ═══════════════════════════════════════════════════════════════════════════
   --hdrh — the ONE measurement the shell depends on.
   The header grows with :root (69 → 111 → 128px), so anything that sits under
   it — the hero line, a sticky filter rail — needs the measured height, never
   a constant. Every hard-coded value tried so far (66px, max(72px,4.9rem))
   left a gap on a 2.5K screen with page content scrolling through it.
   Put this just before </body> on every page.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){
  var hdr = document.querySelector('header'); if(!hdr) return;
  function set(){
    document.documentElement.style.setProperty('--hdrh',
      Math.round(hdr.getBoundingClientRect().height) + 'px');
  }
  set();
  addEventListener('resize', set);
  if (window.ResizeObserver) new ResizeObserver(set).observe(hdr);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(set);
})();
