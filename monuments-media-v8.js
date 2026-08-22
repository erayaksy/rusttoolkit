// Monuments media v8 — each step gets its own real gameplay clip when available.
// Clips are embedded from public YouTube walkthroughs; nothing is re-uploaded.
const M8_CURRENT_2026_VIDEO = 'tImyBgXrc3Y';

const M8_CLIP_SETS = {
  // Current 2026 all-monuments walkthrough referenced by the July 2026 monument guide.
  cabins:      { video:M8_CURRENT_2026_VIDEO, starts:[27,39,51] },
  lighthouse:  { video:M8_CURRENT_2026_VIDEO, starts:[65,78,91] },
  supermarket: { video:M8_CURRENT_2026_VIDEO, starts:[103,116,129] },
  gas:         { video:M8_CURRENT_2026_VIDEO, starts:[141,154,167] },
  junkyard:    { video:M8_CURRENT_2026_VIDEO, starts:[179,192,205] },

  ferry:        { video:M8_CURRENT_2026_VIDEO, starts:[264,274,284,294,304,314] },
  'small-harbor': { video:M8_CURRENT_2026_VIDEO, starts:[318,325,332,339,346] },
  'large-harbor': { video:M8_CURRENT_2026_VIDEO, starts:[350,358,366,374,382] },
  satellite:    { video:M8_CURRENT_2026_VIDEO, starts:[388,398,408,418,428,438] },
  sewer:        { video:'fAhfZ_kCzzU', starts:[0,7,14,21,28,35] },
  dome:         { video:M8_CURRENT_2026_VIDEO, starts:[512,522,532,542,552,562] },
  radtown:      { video:M8_CURRENT_2026_VIDEO, starts:[574,585,596,607,618,629] },

  water:        { video:M8_CURRENT_2026_VIDEO, starts:[638,647,656,665,674,683,692,701] },
  power:        { video:M8_CURRENT_2026_VIDEO, starts:[713,722,731,740,749,758,767,776] },
  airfield:     { video:M8_CURRENT_2026_VIDEO, starts:[788,797,806,815,824,833,842,851] },
  trainyard:    { video:'OwI15ju-5vU', starts:[19,31,45,58,87,101] },
  arctic:       { video:M8_CURRENT_2026_VIDEO, starts:[938,956,974,992] },

  // Dedicated endgame walkthroughs.
  'military-tunnels': { video:'E3wZOGM3RS4', starts:[320,330,350,380,400,420] },
  launch:       { video:'sF303IOnDDc', starts:[5,25,45,65,85,105,125] },
  missile:      { video:'8G_JnajHAnc', starts:[0,35,65,90,140] },
  'small-oil':  { video:'2lzGW8X5NcY', starts:[0,24,48,72,96] },
  'large-oil':  { video:'GN4khDsR6z4', starts:[0,28,56,84,112] },
  labs:         { video:'Yj38XRHpD_o', starts:[0,30,60,90,120] }
};

function m8ApplyClipSets(){
  Object.entries(M8_CLIP_SETS).forEach(([id, cfg])=>{
    const monument = MONUMENTS_V7.find(m=>m.id===id);
    if(!monument) return;
    monument.video = { id:cfg.video, start:cfg.starts[0] || 0 };
    monument.steps.forEach((step, i)=>{
      const start = cfg.starts[i];
      if(start === undefined) return;
      step.clip = start;
      step.clipEnd = start + (cfg.duration || 9);
      step.clipVideo = cfg.video;
    });
  });
}
m8ApplyClipSets();

function m8ClipSrc(video,start,end){
  const q = new URLSearchParams({
    start:String(start),
    end:String(end),
    autoplay:'1',
    mute:'1',
    controls:'0',
    loop:'1',
    playlist:video,
    rel:'0',
    playsinline:'1',
    modestbranding:'1'
  });
  return `https://www.youtube-nocookie.com/embed/${video}?${q.toString()}`;
}

// Important: never fall back to the same monument overview for every step.
v7MediaForStep = function(monument, step){
  const videoId = step.clipVideo || monument.video?.id;
  if(videoId && step.clip !== undefined){
    const end = step.clipEnd || Number(step.clip) + 9;
    const src = m8ClipSrc(videoId, Number(step.clip), end);
    return `<div class="m8-step-media m8-step-clip">
      <div class="m8-clip-head"><span>GAMEPLAY CLIP</span><small>${Math.floor(Number(step.clip)/60)}:${String(Number(step.clip)%60).padStart(2,'0')} → ${Math.floor(end/60)}:${String(end%60).padStart(2,'0')}</small></div>
      <div class="m8-clip-stage">
        <iframe class="m8-clip-frame" data-m8-src="${src}" title="${escapeHtml(monument.name)} — ${escapeHtml(step.title)}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="m8-clip-loading">Video kesiti yükleniyor…</div>
      </div>
      <button class="m8-open-step" type="button" data-m7-video="${videoId}" data-m7-start="${step.clip}">▶ Bu anı sesli aç</button>
    </div>`;
  }
  if(step.image){
    return `<div class="m8-step-media m8-step-image"><img src="${m7Src(step.image)}" alt="${escapeHtml(monument.name)} — ${escapeHtml(step.title)}" loading="lazy"></div>`;
  }
  return `<div class="m8-step-media m8-step-none"><div class="m8-no-media-icon">${v7TypeIcon(step.type)}</div><span>Bu adım için ayrı görüntü henüz eklenmedi.</span></div>`;
};

let m8Observer = null;
function m8BindClipObserver(){
  if(m8Observer) m8Observer.disconnect();
  m8Observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const frame = entry.target;
      if(!frame.src && frame.dataset.m8Src){
        frame.src = frame.dataset.m8Src;
        frame.addEventListener('load',()=>frame.closest('.m8-clip-stage')?.classList.add('loaded'),{once:true});
      }
      m8Observer.unobserve(frame);
    });
  },{rootMargin:'260px 0px',threshold:0.05});
  document.querySelectorAll('.m8-clip-frame[data-m8-src]').forEach(frame=>m8Observer.observe(frame));
}

const m8BindBefore = bindEvents;
bindEvents = function(){
  m8BindBefore();
  m8BindClipObserver();
};

render();
