// Card Guide v4 — true image pins linked to route steps.
const PIN_MAPS = {
  'green::Abandoned Cabins': { pins:[[1,22,70],[2,43,45],[3,64,38]] },
  'green::Lighthouse': { pins:[[1,51,82],[2,54,47],[3,62,26],[4,68,18]] },
  'green::Abandoned Supermarket': { pins:[[1,18,70],[2,54,52],[3,66,47]] },
  "green::Oxum's Gas Station": { pins:[[1,18,72],[2,56,52],[3,63,49]] },
  'green::Junkyard': { pins:[[1,49,75],[2,50,52],[3,53,34],[4,58,31]] },
  'green::Ferry Terminal': { pins:[[1,47,53],[2,53,48],[3,59,47]] },

  'blue::Ferry Terminal': {
    image:'https://lone.design/wp-content/uploads/2023/10/RustClient_WTkmMEHAZR.jpg',
    pins:[[1,24,57],[2,27,56],[3,29,54],[4,62,48],[5,68,46],[6,70,44]]
  },
  'blue::Small Harbor': {
    image:'https://blog.kakaocdn.net/dna/v8Twy/btrCyZQwZdz/AAAAAAAAAAAAAAAAAAAAALxcz52J6c_nPOUtQDQfP4d1M5xszBBX3fWPm5aHVWj_/img.png?allow_ip=&allow_referer=&credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1777561199&signature=3K4YlOWNbSTDl%2FV1qGOfMMOppjk%3D',
    pins:[[1,70,35],[2,70,38],[3,72,40],[4,74,34],[5,77,32],[6,79,31]]
  },
  'blue::Large Harbor': {
    image:'https://images.steamusercontent.com/ugc/2224276765863214422/2798BB29BDE6100EF8C265CAA9C9D9822ACDFABB/',
    pins:[[1,37,65],[2,38,62],[3,39,58],[4,72,34],[5,74,32],[6,76,30]]
  },
  'blue::Satellite Dish': {
    image:'https://eip.gg/wp-content/uploads/2022/10/Satalite-Dish-Monument-Guide.png',
    pins:[[1,32,30],[2,32,30],[3,34,34],[4,49,56],[5,45,71],[6,49,73]]
  },
  'blue::Sewer Branch': {
    image:'https://eip.gg/wp-content/uploads/2022/10/Sewer-Branch-Monument-Guide.png',
    pins:[[1,18,23],[2,22,27],[3,24,29],[4,28,45],[5,34,56],[6,68,34],[7,76,67]]
  },
  'blue::The Dome': {
    image:'https://eip.gg/wp-content/uploads/2022/08/Dome-Monument-Guide.png',
    pins:[[1,47,83],[2,48,82],[3,52,80],[4,58,77],[5,60,76],[6,62,75]]
  },
  'blue::Radtown': { pins:[[1,27,72],[2,25,66],[3,27,62],[4,54,40],[5,60,38],[6,65,35]] },

  'red::Water Treatment Plant': {
    image:'https://cdn.thenerdstash.com/wp-content/uploads/2023/08/how-to-do-water-treatment-rust.jpg',
    pins:[[1,64,26],[2,68,24],[3,73,22],[4,76,21],[5,69,72],[6,73,69],[7,76,67],[8,79,65]]
  },
  'red::Power Plant': {
    image:'https://eip.gg/wp-content/uploads/2022/10/Power-Plant-Monument-Guide.jpg',
    pins:[[1,68,64],[2,54,48],[3,52,46],[4,34,51],[5,35,50],[6,32,47],[7,29,45],[8,28,44],[9,25,43],[10,24,41]]
  },
  'red::Airfield': {
    image:'https://articles.rustoria.co/wp-content/uploads/2019/09/20190919185737_1-1.jpg',
    pins:[[1,77,55],[2,76,57],[3,79,58],[4,81,59],[5,62,63],[6,49,68],[7,47,69],[8,45,70],[9,43,71],[10,41,72]]
  },
  'red::Train Yard': {
    image:'https://guided.news/wp-content/uploads/2021/06/rust-trainyard-blue-doors.jpg',
    pins:[[1,28,73],[2,29,70],[3,31,67],[4,72,18],[5,70,20],[6,68,22],[7,47,40],[8,46,41],[9,45,42],[10,44,43],[11,42,44]]
  },
  'red::Arctic Research Base': {
    image:'https://skins.cash/blog/arctic-research-base-in-rust/arctic-research-base-map_hu_9c28eed2f1507fa9.webp',
    pins:[[1,62,60],[2,70,70],[3,69,74],[4,66,76],[5,76,77]]
  },

  'tier4::Launch Site': { pins:[[1,20,72],[2,30,60],[3,36,55],[4,46,50],[5,55,44],[6,62,40],[7,70,35],[8,76,30]] },
  'tier4::Military Tunnels': { pins:[[1,18,78],[2,27,68],[3,34,59],[4,42,51],[5,48,47],[6,57,40],[7,64,35],[8,72,30],[9,80,24]] },
  'tier4::Large Oil Rig': { pins:[[1,50,90],[2,50,72],[3,52,58],[4,51,44],[5,50,30],[6,50,15]] },
  'tier4::Small Oil Rig': { pins:[[1,50,88],[2,50,69],[3,51,52],[4,50,34],[5,50,17]] },
  'tier4::Underwater Labs': { pins:[[1,18,78],[2,31,63],[3,44,52],[4,57,42],[5,65,35],[6,75,27],[7,84,18]] },
  'tier4::Missile Silo': { pins:[[1,22,20],[2,32,28],[3,43,34],[4,50,45],[5,56,56],[6,63,68],[7,73,77],[8,82,84]] }
};

function pinConfig(tab,item) {
  return PIN_MAPS[`${tab}::${item.name}`] || {pins:[]};
}

function pinMap(tab,item,steps) {
  const cfg = pinConfig(tab,item);
  const img = cfg.image || entryImage(tab,item);
  if (!img) return '';
  const pins = (cfg.pins || []).filter(([n]) => n <= steps.length);
  return `<div class="pin-map-shell">
    <div class="pin-map-head"><span>PUZZLE MAP</span><small>Pin'e bas → ilgili adım</small></div>
    <div class="pin-map-canvas">
      <img src="${img}" alt="${escapeHtml(item.name)} puzzle map" referrerpolicy="no-referrer">
      ${pins.map(([n,x,y])=>`<a class="puzzle-pin" href="#step-${n}" data-pin-step="${n}" style="left:${x}%;top:${y}%" aria-label="Step ${n}"><span>${n}</span></a>`).join('')}
    </div>
    <div class="pin-map-foot">Numaralar aşağıdaki rota adımlarıyla birebir eşleşir.</div>
  </div>`;
}

// Replace the old number rail with true on-image pins.
detailMedia = function(tab,item,steps) {
  const official = tab === 'tier4' ? item.official : OFFICIAL_MONUMENT_IMAGES[item.name];
  const cfg = pinConfig(tab,item);
  const mainImage = cfg.image || entryImage(tab,item);
  return `${pinMap(tab,item,steps)}
  ${official && official !== mainImage ? `<details class="official-detail"><summary>Facepunch current game detail</summary><img src="${official}" alt="${escapeHtml(item.name)} Facepunch detail" loading="lazy" referrerpolicy="no-referrer"></details>`:''}`;
};

// Keep step cards linked to pins and give them a stable data-step target.
detailSteps = function(steps) {
  return `<div class="detail-step-list">${steps.map((s,i)=>`<div class="detail-step" id="step-${i+1}" data-route-step="${i+1}">
    <div class="detail-step-number">${i+1}</div>
    <div class="detail-step-icon">${routeIcon(s[0])}</div>
    <div class="detail-step-copy"><strong>${escapeHtml(s[1])}</strong><span>${escapeHtml(s[2])}</span></div>
  </div>`).join('')}</div>`;
};

// Update detail copy to explain actual pins, not a detached number rail.
const baseMonumentDetailPageV4 = monumentDetailPage;
monumentDetailPage = function(tab,name) {
  return baseMonumentDetailPageV4(tab,name)
    .replace('Overview’daki numaraları sırayla takip et','Haritadaki pinleri sırayla takip et')
    .replace('Overview\'daki numaraları sırayla takip et','Haritadaki pinleri sırayla takip et');
};

const baseBindEventsV4 = bindEvents;
bindEvents = function() {
  baseBindEventsV4();
  document.querySelectorAll('.puzzle-pin').forEach(pin=>pin.addEventListener('click',()=>{
    const n = pin.dataset.pinStep;
    document.querySelectorAll('.puzzle-pin,.detail-step').forEach(el=>el.classList.remove('pin-active'));
    pin.classList.add('pin-active');
    const step = document.querySelector(`[data-route-step="${n}"]`);
    if (step) {
      step.classList.add('pin-active');
      setTimeout(()=>step.scrollIntoView({behavior:'smooth',block:'center'}),40);
    }
  }));
};

render();
