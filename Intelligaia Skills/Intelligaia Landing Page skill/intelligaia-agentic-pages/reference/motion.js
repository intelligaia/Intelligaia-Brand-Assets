/* ── THE MOTION ENGINE ─────────────────────────────────────────────────────
   Lifted verbatim from about.html. Requires GSAP 3.12.5 + ScrollTrigger + Lenis
   (window.__lenis). Everything is declarative: put data-rv on the markup.
   🔴 [data-rv="rise"],[data-rv="seq"]>* carry `opacity:0` FROM CSS. Any element
   you word-split must also get gsap.set(el,{autoAlpha:1}) or you get an invisible
   paragraph with perfectly visible words inside it. */

 element-aware split from v10 ── */
    function wordReveal(el){
      if(!el) return [];
      if(!el.querySelector('.cw')){
        var nodes = Array.prototype.slice.call(el.childNodes);
        el.textContent='';
        function cell(child){
          var m=document.createElement('span'); m.className='cw';
          var inn=document.createElement('span'); inn.className='cw-i';
          inn.appendChild(child); m.appendChild(inn); el.appendChild(m);
        }
        nodes.forEach(function(node){
          if(node.nodeType===3){
            node.textContent.split(/(\s+)/).forEach(function(tok){
              if(tok==='') return;
              if(/^\s+$/.test(tok)) el.appendChild(document.createTextNode(tok));
              else cell(document.createTextNode(tok));
            });
          } else if(node.nodeName==='BR'){ el.appendChild(node); }
          else { cell(node); }
        });
      }
      var cells = el.querySelectorAll('.cw-i');
      gsap.set(cells,{autoAlpha:0, filter:'blur(7px)'});
      return cells;
    }

    if(reduce){
      document.querySelectorAll('[data-rv]').forEach(function(el){ el.style.opacity=1; });
    } else {
      /* ── one beat per section ────────────────────────────────────────
         Landing-page order, applied to every section on this page:
           1. the big line assembles WORD BY WORD
           2. the description follows
           3. then the supporting elements
           4. imagery LAST, fading up from the bottom
         Firing them off one trigger is the whole point — on separate
         triggers they arrive as three unrelated events, not a beat. */
      var FIG = 'figure, .shot, .tm-fig, .ph, img[src*="about-assets"]';

      document.querySelectorAll('main > section').forEach(function(sec){
        if(sec.id === 'journey') return;   // the hero owns its own motion
        if(sec.id === 'agood')   return;   // the goodness stage owns its own motion
        if(sec.id === 'anum')    return;   // the staged stats beat owns its own motion
        var head  = sec.querySelector('[data-rv="words"]') ||
                    sec.querySelector('h1, h2');
        var figs  = [].slice.call(sec.querySelectorAll(FIG)).filter(function(f){
          /* the parallax plate is driven by its own scrub — if the section beat
             also fades it up from below the two fight and it lands crooked */
          return !f.closest('.tm') && !f.closest('#journey') &&
                 !f.closest('.num-photo') && !f.closest('.sec-bg');
        });
        var rest  = [].slice.call(sec.querySelectorAll('[data-rv="rise"], [data-rv="seq"], .tm'))
                      .filter(function(el){
          return el !== head && !el.closest('figure') &&
                 figs.indexOf(el) === -1 && !figs.some(function(f){ return f.contains(el); });
        });

        var cells = head ? wordReveal(head) : [];

        /* Body copy assembles WORD BY WORD too — same splitter as the headings,
           just a much tighter stagger, because a 45-word paragraph at the
           heading's 0.115s would take seven seconds to finish arriving.
           Card internals (.tm bios, .pth blurbs) stay whole: word-splitting
           eight bios at once reads as noise, not as a beat. */
        var isCopy = function(el){
          return el.matches('p, blockquote') && !el.closest('.tm') &&
                 !el.closest('.pth');
        };
        var copy  = rest.filter(isCopy);
        var other = rest.filter(function(el){ return copy.indexOf(el) === -1; });
        /* 🔴 `[data-rv="rise"]{opacity:0}` is a CSS RULE, and the old code only
           ever cleared it by animating the ELEMENT. Word-splitting animates the
           CELLS instead, so the element itself has to be opened up here or the
           paragraph stays invisible with 47 perfectly visible words inside it. */
        var copyCells = copy.map(function(el){
          var cs = wordReveal(el);
          gsap.set(el, {autoAlpha:1});
          return cs;
        });

        gsap.set(other, {autoAlpha:0, y:26, filter:'blur(6px)'});
        gsap.set(figs, {autoAlpha:0, y:56, filter:'blur(8px)'});

        ScrollTrigger.create({
          trigger: sec, start: 'top 68%', once: true,
          onEnter: function(){
            var tl = gsap.timeline();
            if(cells.length){
              tl.to(cells, {autoAlpha:1, filter:'blur(0px)', duration:.8,
                            ease:'power2.out', stagger:0.115}, 0);
            }
            /* the description and the elements wait for the line to finish */
            var afterText = cells.length ? 0.30 + cells.length*0.115*0.55 : 0.05;
            copyCells.forEach(function(cs, i){
              if(cs.length) tl.to(cs, {autoAlpha:1, filter:'blur(0px)', duration:.55,
                                       ease:'power2.out', stagger:0.03},
                                  afterText + i*0.24);
            });
            if(other.length){
              tl.to(other, {autoAlpha:1, y:0, filter:'blur(0px)', duration:.8,
                            ease:'power3.out', stagger:0.13},
                    afterText + copyCells.length*0.24);
            }
            /* the numbers count while they are on screen, not before */
            var counts = sec.querySelectorAll('[data-count]');
            if(counts.length){
              tl.call(function(){
                Array.prototype.forEach.call(counts, function(c){
                  if(window.__runCount) window.__runCount(c);
                });
              }, null, afterText + 0.10);
            }
            /* imagery is last, and rises from below */
            if(figs.length){
              tl.to(figs, {autoAlpha:1, y:0, filter:'blur(0px)', duration:1.0,
                           ease:'power3.out', stagger:0.14},
                    afterText + (rest.length ? 0.34 : 0.12));
            }
          }
        });
      });

      /* The full-bleed shots are siblings of the sections, not children of
         them (main > figure), so the per-section beat never saw them. They
         get the same treatment on their own trigger: rise from the bottom. */
      document.querySelectorAll('main > figure').forEach(function(fig){
        gsap.set(fig,{autoAlpha:0, y:56, filter:'blur(8px)'});
        ScrollTrigger.create({trigger:fig, start:'top 84%', once:true, onEnter:function(){
          gsap.to(fig,{autoAlpha:1, y:0, filter:'blur(0px)', duration:1.0, ease:'power3.out'});
        }});
      });
    }


    /* ── #anum — the company plate, parallaxed ─────────────────────────────
       The photo and the figures over it travel at DIFFERENT rates, which is the
       whole point: two layers moving independently rather than one block
       sliding past. The plate runs the long way, the numbers drift back
       against it by about a third as much.
       Driven off the section's own rect rather than a plain ScrollTrigger
       start/end, so it stays correct if anything above it ever changes height. */
    (function stagedNum(){
      /* ── #anum: stats -> photograph up from the bottom -> photograph away ──
         Everything is a function of ONE progress value read off the section's
         own rect, so nothing here depends on a pin-spacer or a fixed scroll
         length, and it stays correct if anything above changes height. */
      var sec = document.querySelector('#anum');
      if(!sec) return;
      var stage = sec.querySelector('.num-stage'),
          fore  = sec.querySelector('.awrap'),
          photo = sec.querySelector('.num-photo'),
          nums  = [].slice.call(sec.querySelectorAll('.nums > div')),
          chips = sec.querySelector('.outcomes'),
          phone = window.matchMedia('(max-width:760px)');

      /* the count-up is back — but it only runs when the stats are ON SCREEN and
         already visible, so the page never sits there reading "0+ years of
         product craft" the way the old always-on version did */
      var counted = false;
      function runCounts(){
        if(counted) return; counted = true;
        sec.querySelectorAll('[data-count]').forEach(function(el){
          var to  = parseFloat(el.dataset.count),
              dec = (el.dataset.count.split('.')[1]||'').length,
              pre = el.dataset.pre||'', suf = el.dataset.suf||'', o = {v:0};
          gsap.to(o, {v:to, duration:1.6, ease:'power2.out', onUpdate:function(){
            el.textContent = pre + (dec ? o.v.toFixed(dec) : Math.round(o.v).toLocaleString()) + suf;
          }});
        });
      }

      function seg(p, a, b){ return Math.max(0, Math.min(1, (p - a) / (b - a))); }

      /* 🔴 `.nums > div` carry data-rv="rise", and that is a CSS rule setting
         opacity:0. #anum is excluded from the shared section beat, so THIS code is
         the only thing that can open them up — the phone branch has to do it too
         or the stats never appear at all. */
      if(phone.matches){
        var stack = nums.concat([chips]);
        gsap.set(stack, {autoAlpha:0, y:28});
        ScrollTrigger.create({trigger: sec, start:'top 78%', once:true, onEnter:function(){
          gsap.to(stack, {autoAlpha:1, y:0, duration:.75, ease:'power3.out', stagger:.12});
          runCounts();
        }});
        return;
      }

      gsap.set(nums,  {autoAlpha:0, y:44});
      gsap.set(chips, {autoAlpha:0, y:26});
      /* travel in PIXELS off the viewport height — yPercent would be a share of
         the photograph's own height, which changes with the aspect of the screen */
      gsap.set(photo, {y: window.innerHeight * 1.06});

      var landed = false;
      function drive(){
        var r = sec.getBoundingClientRect(), vh = window.innerHeight;
        var span = r.height - vh;
        if(span <= 0) return;
        var p = Math.max(0, Math.min(1, -r.top / span));

        /* 1. the stats land, once, as the stage takes the screen */
        if(p > 0.015 && !landed){
          landed = true;
          gsap.to(nums,  {autoAlpha:1, y:0, duration:.85, ease:'power3.out', stagger:.13});
          gsap.to(chips, {autoAlpha:1, y:0, duration:.8, ease:'power3.out', delay:.42});
          runCounts();
        }

        /* 2. the photograph rises from the bottom, holds, then carries on up.
              The stats dim as it arrives rather than vanishing under it. */
        /* 🔴 THE PHOTOGRAPH NO LONGER EXITS UNDER ITS OWN POWER.
           It used to slide off the top around p=0.95, which left the sticky
           stage holding a FULL EMPTY VIEWPORT of black — the stage is 100svh and
           it still has to scroll all the way past after the sequence has ended.
           That black, with the dimmed stats faintly showing through it, is the
           "big gap" below the image. Now it rises, lands, and simply STAYS: the
           sticky release carries it up and #agood follows directly behind it,
           so there is no dead scroll between the two at all. */
        var up = seg(p, 0.20, 0.58);            // below the fold -> full screen
        gsap.set(photo, {y: vh * 1.06 * (1 - up), scale: 1.07 - up * 0.07});
        if(fore){
          /* 🔴 all the way to 0, not 0.08. The stats used to sit at 8% opacity
             underneath, and any black behind the photograph showed them through
             as faint digits floating in the dark. */
          gsap.set(fore, {autoAlpha: 1 - seg(p, 0.24, 0.46),
                          y: -seg(p, 0.24, 0.62) * 70});
        }
      }
      if(window.__lenis) window.__lenis.on('scroll', drive);
      window.addEventListener('scroll', drive, {passive:true});
      window.addEventListener('resize', drive);
      drive();
    })();

    (function stdPlate(){
      /* the dull workshop plate behind "A demo is not a product." — 8% of travel
         inside 16% of headroom, so it can never expose the section behind it */
      var sec = document.querySelector('#astd'); if(!sec) return;
      var plate = sec.querySelector('.sec-bg'); if(!plate) return;
      function drive(){
        var r = sec.getBoundingClientRect(), vh = window.innerHeight;
        if(r.bottom < -80 || r.top > vh + 80) return;
        var p = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
        gsap.set(plate, {yPercent: -((p - 0.5) * 2) * 8});
      }
      if(window.__lenis) window.__lenis.on('scroll', drive);
      window.addEventListener('scroll', drive, {passive:true});
      window.addEventListener('resize', drive);
      drive();
    })();

    /* ── #agood — LEAD WITH GOODNESS ───────────────────────────────────────
       Each piece has its OWN trigger, placed at a different point in the
       section's travel, so the beat plays out AS YOU SCROLL rather than firing
       all at once: the eyebrow and the lede, then LEAD WITH holding on its own,
       then the letters assembling, then the line under them, then the triad,
       then the closing line. Every one is play-once — scroll-SCRUBBED was tried
       and rejected; this is sequenced, not scrubbed. */
    (function goodness(){
      var sec = document.querySelector('#agood');
      if(!sec) return;
      var glyphs = [].slice.call(sec.querySelectorAll('.gd-set .gd-l'));
      var kick   = sec.querySelector('.kick');
      var lede   = sec.querySelector('.gd-lede');
      var lead   = sec.querySelector('.gd-lead');
      var def    = sec.querySelector('.gd-def');
      var tri    = [].slice.call(sec.querySelectorAll('.gd-tri > li'));
      var out    = sec.querySelector('.gd-out');
      if(!glyphs.length) return;

      var ledeCells = wordReveal(lede), leadCells = wordReveal(lead),
          defCells  = wordReveal(def),  outCells  = wordReveal(out);

      gsap.set(kick, {autoAlpha:0, y:16});
      gsap.set(tri,  {autoAlpha:0, y:26, filter:'blur(6px)'});
      /* ONE AT A TIME. Each letter starts edge-on (rotationY -95, so the hexagon
         is turned away), a little low and small, and lit — then it turns to face
         you, lands with a slight overshoot, and the flash fades out. The stagger
         is 0.135s, deliberately slow enough that you read them arriving
         individually rather than as a group settling. */
      gsap.set(glyphs, {autoAlpha:0, rotationY:-95, scale:0.55, y:22,
                        transformOrigin:'50% 50%',
                        filter:'drop-shadow(0 0 34px rgba(140,180,255,.9)) brightness(1.75)'});

      /* start values are expressed against the SECTION, so they run in order as
         it travels up the viewport — per-element triggers would all fire at once
         on a section this tall */
      function at(startPct, fn){
        ScrollTrigger.create({trigger: sec, start:'top '+startPct+'%', once:true, onEnter:fn});
      }
      function words(cells, dur, stag){
        return function(){
          gsap.to(cells, {autoAlpha:1, filter:'blur(0px)',
                          duration:dur||.6, ease:'power2.out', stagger:stag||.055});
        };
      }

      at(92, function(){
        gsap.to(kick, {autoAlpha:1, y:0, duration:.6, ease:'power3.out'});
        words(ledeCells, .6, .05)();
      });
      at(70, words(leadCells, .75, .16));
      at(54, function(){
        gsap.to(glyphs, {autoAlpha:1, rotationY:0, scale:1, y:0,
                         filter:'drop-shadow(0 0 0px rgba(140,180,255,0)) brightness(1)',
                         duration:.82, ease:'back.out(1.5)', stagger:0.135});
      });
      at(40, words(defCells, .6, .035));
      at(30, function(){
        gsap.to(tri, {autoAlpha:1, y:0, filter:'blur(0px)', duration:.7,
                      ease:'power3.out', stagger:.14});
      });
      at(20, words(outCells, .6, .03));
    })();

    