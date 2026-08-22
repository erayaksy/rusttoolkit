const VISUAL_ASSETS = {
  fuse: 'https://files.facepunch.com/rust/item/fuse_512.png',
  switch: 'https://files.facepunch.com/rust/item/electric.switch_512.png',
  green: 'https://files.facepunch.com/rust/item/keycard_green_512.png',
  blue: 'https://files.facepunch.com/rust/item/keycard_blue_512.png',
  red: 'https://files.facepunch.com/rust/item/keycard_red_512.png'
};

const VISUAL_ROUTES = {
  'Abandoned Cabins': {
    steps: [
      ['move','GİRİŞ','Sarı 2 katlı bina'],
      ['climb','ÜST KAT','İç merdiven'],
      ['green','GREEN CARD','2. kat köşe masa']
    ]
  },
  'Lighthouse': {
    steps: [
      ['move','GİRİŞ','Lighthouse ana giriş'],
      ['climb','YUKARI','İç merdivenler • en üst'],
      ['move','ODA','Sağdaki oda'],
      ['green','GREEN CARD','Köşedeki masa']
    ]
  },
  'Abandoned Supermarket': {
    steps: [
      ['move','ANA BİNA','Ön / arka giriş'],
      ['move','KÜÇÜK ODA','İçeride sol taraftaki oda'],
      ['green','GREEN CARD','Masa üstü']
    ]
  },
  "Oxum's Gas Station": {
    steps: [
      ['move','ANA BİNA','Ön veya arka giriş'],
      ['move','ORTA ODA','Central table bulunan oda'],
      ['green','GREEN CARD','Masa üstü']
    ]
  },
  'Junkyard': {
    steps: [
      ['move','MERKEZ','Ortadaki köprü'],
      ['climb','YUKARI','Köprü üstüne çık'],
      ['move','CONTAINER','Köprü üstündeki container'],
      ['green','GREEN CARD','İçerideki masa']
    ]
  },
  'Ferry Terminal': {
    steps: [
      ['move','METAL SHACK','Terminalin sol tarafı'],
      ['fuse','FUSE','Shack içindeki fuse box'],
      ['switch','SWITCH','Aynı shack arka tarafı'],
      ['move','KARŞI SHACK','Monumentin karşı kenarı'],
      ['green','GREEN READER','Kapıdaki reader'],
      ['blue','BLUE CARD','Loot room içinde']
    ],
    youtube: 'E36K_L8fcik',
    videoLabel: '2026 Ferry Terminal route video'
  },
  'Small Harbor': {
    steps: [
      ['move','2 KATLI BİNA','Subway girişinin tam önü'],
      ['fuse','FUSE','1. kat fuse box'],
      ['switch','SWITCH','1. kat • fuse yanında'],
      ['climb','ÜST KAT','Merdivenden 2. kata'],
      ['green','GREEN READER','Kilitli oda kapısı'],
      ['blue','BLUE CARD','İçeride sol masa']
    ]
  },
  'Large Harbor': {
    steps: [
      ['move','ORTA CONTAINER','Recycler binasından ters yöne'],
      ['fuse','FUSE','Container içinde'],
      ['switch','SWITCH','Container dışı'],
      ['move','HANGAR','Yakındaki hangar • sağ container'],
      ['green','GREEN READER','Container kapısı'],
      ['blue','BLUE CARD','İçeride']
    ]
  },
  'Satellite Dish': {
    steps: [
      ['move','İLK CONTAINER','Monumentin sol tarafı'],
      ['fuse','FUSE','Container içinde'],
      ['switch','SWITCH','Container arka tarafı'],
      ['climb','KARŞIYA GEÇ','Container üstü → karşı taraf'],
      ['green','GREEN READER','Aşağıdaki benzer container'],
      ['blue','BLUE CARD','İçerideki masa']
    ]
  },
  'Sewer Branch': {
    steps: [
      ['move','RECYCLER BİNASI','Recycler yanındaki bina'],
      ['fuse','FUSE','Bina içindeki fuse box'],
      ['switch','SWITCH','Fuse yanında'],
      ['tunnel','BORU','Dışarı çık → büyük pipe → SAĞ'],
      ['green','GREEN READER','Pipe sonundaki kapı'],
      ['move','2. CHAMBER','İlk loot roomdan devam'],
      ['blue','BLUE CARD','Gizli recycler üstündeki masa']
    ]
  },
  'The Dome': {
    steps: [
      ['move','1. METAL SHACK','Normal Dome jump-up rotasının yanı'],
      ['fuse','FUSE','Shack içindeki fuse box'],
      ['switch','SWITCH','Shack dışı'],
      ['move','2. METAL SHACK','Fuel tanklarının yakını'],
      ['green','GREEN READER','2. shack kapısı'],
      ['blue','BLUE CARD','İçeride']
    ]
  },
  'Radtown': {
    steps: [
      ['move','GARAGE','Garage binası'],
      ['fuse','FUSE','Garage binasının SOL dış tarafı'],
      ['switch','SWITCH','Fuse box yanında'],
      ['climb','ÜST ODA','Merdivenlerden yukarı'],
      ['green','GREEN READER','Üst odada SAĞ kapı'],
      ['blue','BLUE CARD','İçerideki masa']
    ]
  },
  'Water Treatment Plant': {
    steps: [
      ['move','GATE BİNASI','Ortası geçişli büyük gate binası'],
      ['move','GATE WHEEL','Gateyi aç → üst kata çık'],
      ['fuse','FUSE','Üst kattaki fuse box'],
      ['switch','TIMER SWITCH','Fuse ile aynı bölüm'],
      ['move','KÖŞE BİNA','Çık → SOL → aşağı atla → köşe bina'],
      ['climb','ÇATI','Dış ladder ile çatı'],
      ['blue','BLUE READER','Çatı kapısı'],
      ['red','RED CARD','İçeride masa']
    ]
  },
  'Power Plant': {
    steps: [
      ['switch','SWITCH #1','Monument kenarındaki küçük bina • merdiven altı'],
      ['move','KARŞI METAL SHACK','Monumentin diğer ucu'],
      ['switch','SWITCH #2 + TIMER','Metal shack'],
      ['green','GREEN READER','Central building giriş'],
      ['switch','SWITCH #3','Central building • 1. kat'],
      ['climb','ÜST KAT','Central building'],
      ['fuse','FUSE','Üst kat fuse box'],
      ['switch','FINAL SWITCH','Fuse yanında'],
      ['blue','BLUE READER','Üst loot room kapısı'],
      ['red','RED CARD','İçeride masa']
    ],
    youtube: 'ExkfmvdFM_k',
    videoLabel: 'Current Power Plant walkthrough'
  },
  'Airfield': {
    steps: [
      ['move','MAIN BUILDING','SOL taraftaki kapıdan gir'],
      ['move','KÖŞE ODA','İçeri girince SOL'],
      ['fuse','FUSE #1','Küçük köşe oda'],
      ['switch','SWITCH #1','Fuse #1 yanında'],
      ['tunnel','PIPE TUNNEL','Çık → SAĞ → brick fence → pipe içine'],
      ['green','GREEN READER','Underground tunnel'],
      ['fuse','FUSE #2','Green bölüm sonrası'],
      ['switch','SWITCH #2','Fuse #2 yanında'],
      ['blue','BLUE READER','Final underground door'],
      ['red','RED CARD','Final loot room']
    ]
  },
  'Train Yard': {
    steps: [
      ['move','DIŞ BİNA','Main structure karşısındaki bina'],
      ['climb','2. KAT','İlk bina'],
      ['switch','SWITCH #1','2. kat'],
      ['move','KARŞI UÇ','Train Yard diğer tarafındaki bina'],
      ['climb','ÇATI / ÜST','İkinci bina üstü'],
      ['switch','SWITCH #2','Üst bölüm'],
      ['move','CENTRAL BUILDING','Ana puzzle binası'],
      ['fuse','FUSE','Central building'],
      ['switch','SWITCH #3','Fuse yanında'],
      ['climb','YUKARI','Green side-room sonrası üst kata'],
      ['blue','BLUE READER','Main puzzle room'],
      ['red','RED CARD','İçeride']
    ]
  },
  'Arctic Research Base': {
    steps: [
      ['combat','SCIENTISTS','Önce orta bölgeyi temizle'],
      ['move','2 RED CONTAINER','Monumentin ortası'],
      ['move','SOL CONTAINER','İki containerdan SOLDAKİ'],
      ['blue','BLUE READER','Sol container kapısı'],
      ['red','RED CARD','İçeride FAR-SOL köşe']
    ],
    youtube: 'nIGxWhX6DqU',
    videoLabel: '2026 Arctic Research Base route video'
  }
};

if (!DATA.monuments.blue.sources.some(m => m.name === 'Radtown')) {
  DATA.monuments.blue.sources.push({
    name: 'Radtown',
    need: '1 Fuse + Green Card',
    rad: 'Yüksek',
    route: 'Garage → fuse → switch → üst oda → green reader → blue card.'
  });
}

function routeIcon(type) {
  if (VISUAL_ASSETS[type]) return `<img src="${VISUAL_ASSETS[type]}" alt="${type}" loading="lazy">`;
  const symbols = {
    move:'⌖', climb:'↟', tunnel:'◉', combat:'☠', loot:'✦'
  };
  return `<span class="route-symbol">${symbols[type] || '→'}</span>`;
}

function visualLegend(type, title, small) {
  return `<div class="visual-legend-item"><div class="step-action">${routeIcon(type)}</div><div><strong>${title}</strong><small>${small}</small></div></div>`;
}

function visualSteps(m) {
  const guide = VISUAL_ROUTES[m.name];
  if (!guide) return '';
  return `<div class="visual-route" style="--steps:${guide.steps.length}">
    ${guide.steps.map((s,i) => `<div class="visual-step" data-type="${s[0]}">
      <span class="step-index">${i+1}</span>
      <div class="step-action">${routeIcon(s[0])}</div>
      <div class="step-title">${s[1]}</div>
      <div class="step-location">${s[2]}</div>
    </div>`).join('')}
  </div>`;
}

function currentVideo(guide) {
  if (!guide || !guide.youtube) return '';
  return `<details class="visual-video">
    <summary>▶ ${guide.videoLabel || 'Route video'}</summary>
    <div class="video-frame"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/${guide.youtube}" title="Rust monument route" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  </details>`;
}

monumentCard = function(m) {
  const guide = VISUAL_ROUTES[m.name];
  return `<article class="visual-monument-card">
    <div class="visual-card-head">
      <div>
        <h3>${escapeHtml(m.name)}</h3>
        <div class="requirements"><span class="badge hot">${escapeHtml(m.need)}</span><span class="badge">☢ ${escapeHtml(m.rad)}</span></div>
      </div>
      <span class="route-verified">✓ 2026 ROUTE</span>
    </div>
    ${visualSteps(m)}
    ${currentVideo(guide)}
  </article>`;
};

fishingSection = function(tab) {
  return `<section class="fishing-block panel">
    <div class="section-head" style="margin-bottom:14px"><div><h2 style="font-size:24px">🎣 Fishing → Blue Card</h2></div></div>
    <div class="fishing-flow">${tab.fishing.map(f => `<div class="fish-card"><img src="${f.image}" alt="${escapeHtml(f.name)}" referrerpolicy="no-referrer"/><strong>${escapeHtml(f.name)}</strong><div class="fishing-arrow">↓ GUT / BUTCHER ↓</div><span>${escapeHtml(f.chance)} Blue Card</span></div>`).join('')}</div>
  </section>`;
};

monumentPage = function() {
  const tab = DATA.monuments[state.monumentTab];
  return `
    <div class="section-head"><div><h2>Monument Visual Guide</h2><p>Fuse → switch → reader → card. Her puzzle tek bakışta.</p></div></div>
    <div class="card-tabs">
      <button class="card-tab green ${state.monumentTab==='green'?'active':''}" data-monument-tab="green">🟩 Green Card</button>
      <button class="card-tab blue ${state.monumentTab==='blue'?'active':''}" data-monument-tab="blue">🟦 Blue Card</button>
      <button class="card-tab red ${state.monumentTab==='red'?'active':''}" data-monument-tab="red">🟥 Red Card</button>
    </div>
    <section class="card-hero">
      <img src="${tab.cardImage}" alt="${escapeHtml(tab.title)}" />
      <div><div class="eyebrow">${state.monumentTab.toUpperCase()} KEYCARD</div><h2>${escapeHtml(tab.title)}</h2></div>
    </section>
    <div class="visual-guide-intro">
      ${visualLegend('fuse','FUSE','Fuse boxa tak')}
      ${visualLegend('switch','SWITCH','Aç / timer başlat')}
      ${visualLegend('green','GREEN','Green reader')}
      ${visualLegend('blue','BLUE','Blue reader / reward')}
      ${visualLegend('red','RED','Final reward')}
    </div>
    ${state.monumentTab==='blue' ? fishingSection(tab) : ''}
    <div class="visual-source-note">Puzzle sırası 2026 monument rotalarına göre düzenlendi; fuse / switch / keycard ikonları Facepunch kaynaklıdır.</div>
    <div class="visual-monument-grid">${tab.sources.map(m => monumentCard(m)).join('')}</div>`;
};

render();
