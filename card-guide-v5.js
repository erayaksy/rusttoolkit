// Card Guide v5 — robust same-origin puzzle maps + sparse actionable pins.
const PIN_MAPS_V5 = {
  'red::Water Treatment Plant': {
    image:'https://guided.news/wp-content/uploads/2021/06/Rust-blue-doors-water-treatment.jpg',
    pins:[[3,20,48,'FUSE','fuse'],[7,51,79,'BLUE ROOM','blue']]
  },
  'red::Power Plant': {
    image:'https://guided.news/wp-content/uploads/2021/06/rust-power-plant-blue-door.jpg',
    pins:[[1,30,14,'SWITCH 1','switch'],[3,72,43,'SWITCH 2','switch'],[9,65,54,'BLUE ROOM','blue']]
  },
  'red::Airfield': {
    image:'https://guided.news/wp-content/uploads/2021/06/rust-airfield-blue-doors.jpg',
    pins:[[3,35,17,'FUSE AREA','fuse'],[6,23,48,'GREEN / TUNNEL','green'],[9,13,48,'BLUE ROOM','blue']]
  },
  'red::Train Yard': {
    image:'https://guided.news/wp-content/uploads/2021/06/rust-trainyard-blue-doors.jpg',
    pins:[[3,25,82,'SWITCH 1','switch'],[6,78,16,'SWITCH 2','switch'],[8,38,43,'FUSE + FINAL','fuse']]
  },
  'blue::Satellite Dish': {
    image:'https://tradeit.gg/blog/wp-content/uploads/2023/05/image-22.png',
    pins:[[2,35,40,'FUSE','fuse'],[3,38,43,'SWITCH','switch'],[5,49,68,'GREEN ROOM','green']]
  },
  'blue::Sewer Branch': {
    image:'https://eip.gg/wp-content/uploads/2022/10/Sewer-Branch-Monument-Guide.png',
    pins:[[2,20,26,'FUSE','fuse'],[5,40,61,'GREEN ROOM','green'],[7,77,73,'BLUE CARD','blue']]
  },
  'blue::The Dome': {
    image:'https://eip.gg/wp-content/uploads/2022/08/Dome-Monument-Guide.png',
    pins:[[2,42,70,'FUSE','fuse'],[3,48,70,'SWITCH','switch'],[5,62,74,'GREEN ROOM','green']]
  },
  'blue::Large Harbor': {
    image:'https://eip.gg/wp-content/uploads/2022/08/Large-Harbor-Monument-Guide.png',
    pins:[[2,31,28,'FUSE','fuse'],[3,34,31,'SWITCH','switch'],[5,19,47,'GREEN ROOM','green']]
  },
  'tier4::Launch Site': {
    image:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.1920x1080.jpg',
    pins:[[3,35,58,'FUSE 1','fuse'],[4,46,52,'GREEN','green'],[6,62,42,'FUSE 2','fuse'],[7,72,34,'RED','red']]
  }
};

function proxiedImage(url){ return url ? `/api/image?url=${encodeURIComponent(url)}` : ''; }
function pinConfigV5(tab,item){ return PIN_MAPS_V5[`${tab}::${item.name}`] || null; }

function pinTypeIcon(type){
  if (VISUAL_ASSETS[type]) return `<img src="${VISUAL_ASSETS[type]}" alt="" aria-hidden="true">`;
  return `<span>${type==='switch'?'⚡':'●'}</span>`;
}

function v5Map(tab,item,steps){
  const cfg = pinConfigV5(tab,item);
  const fallback = entryImage(tab,item);
  if (!cfg) {
    if (!fallback) return '';
    return `<div class="v5-overview-only"><img src="${fallback}" alt="${escapeHtml(item.name)} overview" loading="lazy" referrerpolicy="no-referrer"><div>Overview • detay adımları aşağıda</div></div>`;
  }
  const pins = cfg.pins.filter(p=>p[0] <= steps.length);
  return `<section class="v5-map-card">
    <div class="v5-map-head"><div><strong>PUZZLE MAP</strong><span>Pinler sadece haritada anlamlı kritik noktaları gösterir.</span></div><small>Pin → rota adımı</small></div>
    <div class="v5-map-stage" data-map-stage>
      <img class="v5-map-image" src="${proxiedImage(cfg.image)}" data-fallback="${fallback || ''}" alt="${escapeHtml(item.name)} puzzle map" loading="eager">
      ${pins.map(([step,x,y,label,type])=>`<button class="v5-map-pin pin-${type}" type="button" data-pin-step="${step}" style="left:${x}%;top:${y}%" aria-label="Step ${step}: ${escapeHtml(label)}"><b>${step}</b><span>${pinTypeIcon(type)}${escapeHtml(label)}</span></button>`).join('')}
      <div class="v5-map-error">Puzzle map yüklenemedi; overview gösteriliyor.</div>
    </div>
  </section>`;
}

// Override detail media from v4. No detached number rail; true map pins only.
detailMedia = function(tab,item,steps){
  const official = tab === 'tier4' ? item.official : OFFICIAL_MONUMENT_IMAGES[item.name];
  const cfg = pinConfigV5(tab,item);
  const main = cfg?.image || entryImage(tab,item);
  return `${v5Map(tab,item,steps)}${official && official !== main ? `<details class="official-detail"><summary>Facepunch current game detail</summary><img src="${official}" alt="${escapeHtml(item.name)} Facepunch detail" loading="lazy" referrerpolicy="no-referrer"></details>`:''}`;
};

const bindBeforeV5 = bindEvents;
bindEvents = function(){
  bindBeforeV5();
  document.querySelectorAll('.v5-map-image').forEach(img=>{
    img.addEventListener('error',()=>{
      const stage = img.closest('[data-map-stage]');
      const fallback = img.dataset.fallback;
      if (fallback && !stage.classList.contains('fallback-map')) {
        stage.classList.add('fallback-map');
        img.src = fallback;
      } else {
        stage.classList.add('map-broken');
      }
    });
  });
  document.querySelectorAll('.v5-map-pin').forEach(pin=>pin.addEventListener('click',()=>{
    const n = pin.dataset.pinStep;
    document.querySelectorAll('.v5-map-pin,.detail-step').forEach(el=>el.classList.remove('pin-active'));
    pin.classList.add('pin-active');
    const step = document.querySelector(`[data-route-step="${n}"]`);
    if (step) {
      step.classList.add('pin-active');
      step.scrollIntoView({behavior:'smooth',block:'center'});
    }
  }));
};

render();
