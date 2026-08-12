<script id="about-pager">
/* ── ONE SECTION PER GESTURE ───────────────────────────────────────────────────
   The same model as the landing page: a capture-phase wheel listener that runs
   BEFORE Lenis, swallows the gesture, and GLIDES the page to the next rest point.
   Because every effect on this page reads scroll POSITION (rect-driven loops and
   ScrollTrigger), gliding through a section auto-plays its word reveal to
   completion for free — nothing about the reveals was touched.

   🔴 TWO SECTIONS OPT OUT. `#anum` (the 240svh sticky stats stage) and `#agood`
   (six play-once triggers between 92% and 20% of its own travel) ARE the scroll
   choreography — snapping past either collapses the sequence into one frame. They
   become FREE ZONES: the pager parks you at the entrance, hands scrolling back to
   Lenis so the stage scrubs, and grabs the wheel again at the exit edge.

   🔴 SECTIONS TALLER THAN THE VIEWPORT get two rest points — top-aligned and
   bottom-aligned — so you always land on a clean edge. "No half sections" cannot
   mean "one screen" for a section that is 1.8 screens tall; it means never
   resting at an arbitrary point inside one. */
(function aboutPager(){
  if(!window.__lenis) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(matchMedia('(max-width:900px)').matches) return;   /* touch scrolls natively */

  var lenis = window.__lenis,
      PXPS = 900, DMIN = 0.85, DMAX = 2.4, COOLDOWN = 190,
      THRESH = 10, GESTURE_GAP = 120, EDGEF = 0.14, TOPPAD = 0;

  var FREE = {anum:1, agood:1};
  var anchors = [], zones = [], locked = false, lastEvt = 0, gestureUsed = false;

  function secs(){ return [].slice.call(document.querySelectorAll('main > section')); }

  function compute(){
    var vh = innerHeight, docH = document.documentElement.scrollHeight;
    anchors = []; zones = [];
    secs().forEach(function(sec){
      var r = sec.getBoundingClientRect(), top = Math.round(r.top + lenis.scroll), h = Math.round(r.height);
      var maxY = docH - vh;
      function push(y){ y = Math.max(0, Math.min(maxY, Math.round(y)));
        if(!anchors.some(function(a){ return Math.abs(a.y - y) < 90; })) anchors.push({y:y, id:sec.id||''}); }
      if(FREE[sec.id]){
        /* 🔴 #agood is exactly one viewport tall, so `top + h - vh` collapses onto
           `top` and the zone has zero width — the pager would snap straight past and
           fire all six letter triggers in one frame. Its sequence actually plays on
           the APPROACH (triggers at 92%..20% of the viewport), so the free stretch is
           the screen-height BEFORE it lands, not the section's own body. */
        var from = Math.min(top - TOPPAD, top + h - vh - 40) ;
        var to   = Math.max(top + h - vh, top);
        if(to - from < vh * 0.6){ from = top - vh; to = top; }
        push(from); zones.push({from:from, to:to, id:sec.id}); push(to);
        return;
      }
      if(h <= vh - 30){ push(top - (vh - h) / 2); }              /* centred */
      else if(h <= vh + 140){ push(top - TOPPAD); }              /* barely over — one stop */
      else { push(top - TOPPAD); push(top + h - vh); }           /* top, then bottom */
    });
    anchors.sort(function(a,b){ return a.y - b.y; });
  }

  /* 🔴 Direction matters. Coming DOWN we must be free from the entrance (otherwise the
     pager steps straight over the stage from its very first anchor); coming UP we must
     be free from the exit. Symmetric bounds would strand you at one edge or the other. */
  function zoneFor(y, dir){
    var vh = innerHeight;
    for(var i=0;i<zones.length;i++){
      var z = zones[i];
      if(z.to - z.from < 40) continue;
      if(dir > 0 && y >= z.from - 10 && y < z.to - vh * EDGEF) return z;
      if(dir < 0 && y > z.from + vh * EDGEF && y <= z.to + 10) return z;
    }
    return null;
  }
  function glideTo(y){
    locked = true;
    var d = Math.min(DMAX, Math.max(DMIN, Math.abs(y - lenis.scroll) / PXPS));
    lenis.scrollTo(y, {duration:d, lock:true,
      easing:function(t){ return t<0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; },
      onComplete:function(){ setTimeout(function(){ locked = false; }, COOLDOWN); }});
  }
  function step(dir){
    var y = lenis.scroll, best = null;
    for(var i=0;i<anchors.length;i++){
      var a = anchors[i];
      if(dir > 0 && a.y > y + THRESH){ best = a.y; break; }
      if(dir < 0 && a.y < y - THRESH){ best = a.y; }
    }
    if(best === null) best = dir > 0 ? document.documentElement.scrollHeight - innerHeight : 0;
    glideTo(best);
  }

  addEventListener('wheel', function(e){
    if(e.ctrlKey) return;
    if(document.body.classList.contains('noscroll')) return;
    var now = performance.now();
    if(now - lastEvt > GESTURE_GAP) gestureUsed = false;
    lastEvt = now;

    if(Math.abs(e.deltaY) < 2) return;
    /* inside a choreographed stage — hand scrolling straight back to Lenis so the
       sticky sequence scrubs the way it was authored */
    if(zoneFor(lenis.scroll, e.deltaY > 0 ? 1 : -1)) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if(locked || gestureUsed) return;
    gestureUsed = true;
    step(e.deltaY > 0 ? 1 : -1);
  }, {passive:false, capture:true});

  addEventListener('keydown', function(e){
    if(locked) return;
    var t = e.target; if(t && /input|textarea|select/i.test(t.tagName)) return;
    if(e.key==='ArrowDown'||e.key==='PageDown'||e.key===' '){ e.preventDefault(); step(1); }
    else if(e.key==='ArrowUp'||e.key==='PageUp'){ e.preventDefault(); step(-1); }
    else if(e.key==='Home'){ e.preventDefault(); glideTo(0); }
    else if(e.key==='End'){ e.preventDefault(); glideTo(document.documentElement.scrollHeight-innerHeight); }
  });

  addEventListener('resize', compute);
  addEventListener('load', function(){ compute(); setTimeout(compute, 700); });
  if(window.ScrollTrigger) ScrollTrigger.addEventListener('refresh', compute);
  compute(); setTimeout(compute, 400);
  window.__aboutPager = {compute:compute, anchors:function(){return anchors;},
                         zones:function(){return zones;}, step:step, glideTo:glideTo};
})();
</script>