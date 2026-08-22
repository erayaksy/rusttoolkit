const VISUAL_ASSETS = {
  fuse: 'https://files.facepunch.com/rust/item/fuse_512.png',
  switch: 'https://files.facepunch.com/rust/item/electric.switch_512.png',
  green: 'https://files.facepunch.com/rust/item/keycard_green_512.png',
  blue: 'https://files.facepunch.com/rust/item/keycard_blue_512.png',
  red: 'https://files.facepunch.com/rust/item/keycard_red_512.png'
};

const OFFICIAL_MONUMENT_IMAGES = {
  'Abandoned Supermarket': 'https://files.facepunch.com/kaantasan/1b0511b1/rust_supermarket_fridge_3_1080_jpg.jpg',
  "Oxum's Gas Station": 'https://files.facepunch.com/kaantasan/1b0511b1/rust_gas_station_1_1080_jpg.jpg',
  'The Dome': 'https://files.facepunch.com/kaantasan/1b0511b1/rust_domepump_5_1080_jpg.jpg',
  'Radtown': 'https://files.facepunch.com/paddy/20240928/rust_worldUpdate_radtown_22.jpg',
  'Water Treatment Plant': 'https://files.facepunch.com/kaantasan/1b0511b1/aug2026_watertreatment_03.jpg',
  'Power Plant': 'https://files.facepunch.com/martynchapman/2026/August/rust_powerfuses_4_1080_jpg.jpg',
  'Airfield': 'https://files.facepunch.com/kaantasan/1b0511b1/Aug2026_player_maintained_Monuments_Airfield_Terminals_2_4K.jpg',
  'Launch Site': 'https://files.facepunch.com/kaantasan/1b0511b1/aug2026_satellite_01.jpg'
};

const CURRENT_MONUMENT_VIDEO = 'tImyBgXrc3Y';
const TIER_VIDEO_START = { green: 27, blue: 264, red: 638 };

const ROUTES = {
  'green::Abandoned Cabins': [['move','GİRİŞ','Sarı 2 katlı bina'],['climb','ÜST KAT','İç merdivenle yukarı'],['green','GREEN CARD','2. kat köşe masa']],
  'green::Lighthouse': [['move','GİRİŞ','Lighthouse ana giriş'],['climb','YUKARI','Merdivenlerle en üst'],['move','ODA','Üst kattaki oda'],['green','GREEN CARD','Köşedeki masa']],
  'green::Abandoned Supermarket': [['move','ANA BİNA','Ön / arka giriş'],['move','KÜÇÜK ODA','İçeride sol taraftaki oda'],['green','GREEN CARD','Masa üstü']],
  "green::Oxum's Gas Station": [['move','ANA BİNA','Ön veya arka giriş'],['move','ORTA ODA','Central table bulunan oda'],['green','GREEN CARD','Masa üstü']],
  'green::Junkyard': [['move','MERKEZ','Ortadaki köprü'],['climb','YUKARI','Köprü üstüne çık'],['move','CONTAINER','Köprü üstündeki container'],['green','GREEN CARD','İçerideki masa']],
  'green::Ferry Terminal': [['move','BİNA','Outdoor recycler karşısındaki bina'],['move','İÇ ODA','Masa bulunan bölüm'],['green','GREEN CARD','Masa üstü']],

  'blue::Ferry Terminal': [['move','METAL SHACK','Terminalin sol tarafı'],['fuse','FUSE','Shack içindeki fuse box'],['switch','SWITCH','Aynı shack arka tarafı'],['move','KARŞI SHACK','Monumentin karşı kenarı'],['green','GREEN READER','Kapıdaki reader'],['blue','BLUE CARD','Loot room içinde']],
  'blue::Small Harbor': [['move','2 KATLI BİNA','Subway girişinin önü'],['fuse','FUSE','1. kat fuse box'],['switch','SWITCH','Fuse yanında'],['climb','ÜST KAT','Merdivenden 2. kata'],['green','GREEN READER','Kilitli oda kapısı'],['blue','BLUE CARD','İçeride sol masa']],
  'blue::Large Harbor': [['move','ORTA CONTAINER','Recycler binası tarafı'],['fuse','FUSE','Container içinde'],['switch','SWITCH','Container dışı'],['move','HANGAR','Yakındaki hangar'],['green','GREEN READER','Kilitli kapı'],['blue','BLUE CARD','İçeride']],
  'blue::Satellite Dish': [['move','İLK CONTAINER','Monumentin sol tarafı'],['fuse','FUSE','Container içinde'],['switch','SWITCH','Container arka tarafı'],['move','KARŞI CONTAINER','Karşı taraftaki container'],['green','GREEN READER','Kapıdaki reader'],['blue','BLUE CARD','İçerideki masa']],
  'blue::Sewer Branch': [['move','RECYCLER BİNASI','Recycler yanındaki bina'],['fuse','FUSE','Bina içindeki fuse box'],['switch','SWITCH','Fuse yanında'],['tunnel','BÜYÜK PIPE','Pipe içine gir → sağ'],['green','GREEN READER','Pipe sonundaki kapı'],['move','2. CHAMBER','İlk odadan devam'],['blue','BLUE CARD','Masa üstü']],
  'blue::The Dome': [['move','1. METAL SHACK','Dome jump-up rotası yanı'],['fuse','FUSE','Shack içindeki fuse box'],['switch','SWITCH','Shack dışı'],['move','2. METAL SHACK','Fuel tankları yakını'],['green','GREEN READER','2. shack kapısı'],['blue','BLUE CARD','İçeride']],
  'blue::Radtown': [['move','GARAGE','Garage binası'],['fuse','FUSE','Garage binasının sol dışı'],['switch','SWITCH','Fuse box yanında'],['climb','ÜST ODA','Merdivenlerden yukarı'],['green','GREEN READER','Üst odada sağ kapı'],['blue','BLUE CARD','İçerideki masa']],

  'red::Water Treatment Plant': [['move','GATE BİNASI','Ortası geçişli büyük bina'],['climb','ÜST KAT','Gate wheel bölümüne çık'],['fuse','FUSE','Üst kattaki fuse box'],['switch','TIMER SWITCH','Fuse ile aynı bölüm'],['move','KÖŞE BİNA','Dışarı → sol taraftaki bina'],['climb','ÇATI','Dış ladder ile çatı'],['blue','BLUE READER','Çatı kapısı'],['red','RED CARD','İçeride masa']],
  'red::Power Plant': [['switch','SWITCH #1','Monument kenarındaki küçük bina'],['move','KARŞI SHACK','Monumentin diğer tarafı'],['switch','SWITCH #2','Metal shack'],['green','GREEN READER','Central building giriş'],['switch','SWITCH #3','Central building 1. kat'],['climb','ÜST KAT','Central building'],['fuse','FUSE','Üst kattaki fuse box'],['switch','FINAL SWITCH','Fuse yanında'],['blue','BLUE READER','Final loot room'],['red','RED CARD','İçeride masa']],
  'red::Airfield': [['move','MAIN BUILDING','Sol taraftaki kapıdan gir'],['move','KÖŞE ODA','İçeri girince sol'],['fuse','FUSE #1','Küçük köşe oda'],['switch','SWITCH #1','Fuse #1 yanında'],['tunnel','PIPE TUNNEL','Çık → sağ → pipe içine'],['green','GREEN READER','Underground tunnel'],['fuse','FUSE #2','Green bölüm sonrası'],['switch','SWITCH #2','Fuse #2 yanında'],['blue','BLUE READER','Final underground door'],['red','RED CARD','Final loot room']],
  'red::Train Yard': [['move','DIŞ BİNA','Main structure karşısındaki bina'],['climb','2. KAT','İlk bina'],['switch','SWITCH #1','2. kat'],['move','KARŞI UÇ','Diğer taraftaki bina'],['climb','ÜST BÖLÜM','İkinci bina üstü'],['switch','SWITCH #2','Üst bölüm'],['move','CENTRAL BUILDING','Ana puzzle binası'],['fuse','FUSE','Central building'],['switch','SWITCH #3','Fuse yanında'],['green','GREEN STAGE','İlk kart bölümü'],['blue','BLUE READER','Üst loot room'],['red','RED CARD','İçeride']],
  'red::Arctic Research Base': [['combat','SCIENTISTS','Önce orta bölgeyi temizle'],['move','2 RED CONTAINER','Monumentin ortası'],['move','SOL CONTAINER','İki containerdan soldaki'],['blue','BLUE READER','Container kapısı'],['red','RED CARD','İçeride köşe loot']]
};

if (!DATA.monuments.blue.sources.some(m => m.name === 'Radtown')) {
  DATA.monuments.blue.sources.push({
    name: 'Radtown',
    need: '1 Fuse + Green Card',
    rad: 'Yüksek',
    route: 'Garage → fuse → switch → üst oda → green reader → blue card.',
    image: OFFICIAL_MONUMENT_IMAGES.Radtown
  });
}

const TIER4 = [
  {
    name: 'Launch Site',
    need: 'Green + Red + 2 Fuse + Hazmat',
    rad: 'Extreme',
    overview: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.1920x1080.jpg',
    official: OFFICIAL_MONUMENT_IMAGES['Launch Site'],
    video: CURRENT_MONUMENT_VIDEO,
    start: 1013,
    videoLabel: '2026 Tier 3 overview',
    note: 'Bradley + VAB puzzle. Green stage, two fuse stages, then Red reader.',
    steps: [['switch','SWITCHES','Outer puzzle switches'],['move','SILO BUILDING','First fuse stage'],['fuse','FUSE #1','Power first stage'],['green','GREEN READER','Green door'],['move','CONTAINER BUILDING','Second power stage'],['fuse','FUSE #2','Power final stage'],['red','RED READER','VAB / final room'],['loot','ELITE LOOT','High-rad loot route']]
  },
  {
    name: 'Military Tunnels',
    need: 'Green + Blue + Red + 1 Fuse + Flashlight',
    rad: 'High',
    overview: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_827f1bb38361eb3f7de91cff9be5b7176a05a9ac.1920x1080.jpg',
    video: 'E3wZOGM3RS4',
    start: 320,
    videoLabel: 'Jfarr • 2026 puzzle walkthrough',
    note: 'Dark tunnel combat. Fuse timer → Green storage switch → Blue laboratory → Red progression / elite loot.',
    steps: [['move','ARMORY TUNNEL','Main entrance → right'],['fuse','FUSE','Armory fuse box'],['combat','CLEAR','Main tunnel + fence'],['green','GREEN READER','Storage door'],['switch','SWITCH','Inside Green storage'],['move','RED CONTAINER','Elite crate area'],['blue','BLUE READER','Laboratory'],['red','RED STAGE','Deep loot progression'],['loot','EXIT','Spiral staircase']]
  },
  {
    name: 'Large Oil Rig',
    need: 'Blue + Red + Fuses + Heavy Combat',
    rad: 'No radiation • PvE heavy',
    overview: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_651097c65458ae555b42c42dd9667d7174397bdf.1920x1080.jpg',
    video: 'GN4khDsR6z4',
    start: 447,
    videoLabel: 'Jfarr • 2025 current rig puzzle',
    note: 'Vertical scientist clear → powered card rooms → locked crate / Heavy Scientist event.',
    steps: [['move','DOCK / ENTRY','Boat or minicopter'],['combat','CLEAR LEVELS','Scientists floor by floor'],['fuse','POWER','Fuse stage(s)'],['blue','BLUE READER','Mid-level loot'],['red','RED READER','High-tier room'],['loot','LOCKED CRATE','Chinook event']]
  },
  {
    name: 'Small Oil Rig',
    need: 'Blue + 1 Fuse + Combat',
    rad: 'No radiation • PvE',
    overview: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_08a111660a92c33c10d62e74620d258c216fd0bb.1920x1080.jpg',
    video: '2lzGW8X5NcY',
    start: 353,
    videoLabel: 'Jfarr • 2025 current rig puzzle',
    note: 'Compact rig: clear scientists → fuse → Blue reader → hackable crate.',
    steps: [['move','DOCK / ENTRY','Boat or minicopter'],['combat','CLEAR','Scientists'],['fuse','FUSE','Single fuse room'],['blue','BLUE READER','Military loot section'],['loot','LOCKED CRATE','15 min event']]
  },
  {
    name: 'Underwater Labs',
    need: 'Diving / Sub + Cards & Fuses vary by layout',
    rad: 'Module dependent',
    overview: 'https://i.ytimg.com/vi/Yj38XRHpD_o/maxresdefault.jpg',
    video: 'Yj38XRHpD_o',
    start: 0,
    videoLabel: 'Puzzle modules walkthrough • layout is procedural',
    note: 'No fixed route: labs are procedurally generated. Learn module types, moonpools and card rooms instead of memorising one path.',
    steps: [['move','MOONPOOL','Dive or submarine entry'],['move','SCAN MODULES','Layout changes every map'],['combat','CLEAR','Scientists where present'],['blue','BLUE MODULE','If generated'],['fuse','FUSE MODULE','Requirement varies'],['red','RED MODULE','If generated'],['loot','EXTRACT','Return via moonpool']]
  },
  {
    name: 'Missile Silo',
    need: '1 Red Card • 0 Fuse • Hazmat + meds',
    rad: 'Very High',
    overview: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/ss_9264a17b6bc1b3f9df55cf2aafcc25c6188bba59.1920x1080.jpg',
    video: 'vvwiRm7lREM',
    start: 0,
    videoLabel: 'Post-Meta Shift Missile Silo guide',
    note: 'Current 2026 route: Red card opens the surface hatch sequence; no Electric Fuse. Entry is one-way—exit via the blast-door security button.',
    steps: [['combat','SURFACE','Clear / scout entrance'],['red','RED READER','Tower / hatch access'],['switch','BUTTON','Open central blast hatch'],['move','DROP IN','One-way descent'],['combat','6 LEVELS','NVG scientists + radiation'],['loot','ELITE LOOT','Deep levels'],['switch','EXIT BUTTON','Security checkpoint'],['move','BLAST DOORS','Extract']]
  }
];

function routeIcon(type) {
  if (VISUAL_ASSETS[type]) return `<img src="${VISUAL_ASSETS[type]}" alt="${type}" loading="lazy">`;
  const symbols = { move:'⌖', climb:'↟', tunnel:'◉', combat:'☠', loot:'✦' };
  return `<span class="route-symbol">${symbols[type] || '→'}</span>`;
}

function visualLegend(type, title, small) {
  return `<div class="visual-legend-item"><div class="step-action">${routeIcon(type)}</div><div><strong>${title}</strong><small>${small}</small></div></div>`;
}

function visualSteps(steps) {
  if (!steps || !steps.length) return '';
  return `<div class="visual-route" style="--steps:${steps.length}">${steps.map((s,i) => `<div class="visual-step" data-type="${s[0]}"><span class="step-index">${i+1}</span><div class="step-action">${routeIcon(s[0])}</div><div class="step-title">${escapeHtml(s[1])}</div><div class="step-location">${escapeHtml(s[2])}</div></div>`).join('')}</div>`;
}

function mediaStrip(name, overview, official) {
  const officialUrl = official || OFFICIAL_MONUMENT_IMAGES[name];
  return `<div class="visual-media ${officialUrl ? 'has-official' : ''}">${overview ? `<figure><img src="${overview}" alt="${escapeHtml(name)} overview" loading="lazy" referrerpolicy="no-referrer"><figcaption>MONUMENT OVERVIEW</figcaption></figure>` : ''}${officialUrl ? `<figure class="official-shot"><img src="${officialUrl}" alt="${escapeHtml(name)} official Rust update screenshot" loading="lazy" referrerpolicy="no-referrer"><figcaption>FACEPUNCH / CURRENT GAME DETAIL</figcaption></figure>` : ''}</div>`;
}

function videoPoster(id, start, label) {
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return `<div class="visual-video"><div class="video-title">▶ ${escapeHtml(label)}</div><button class="video-poster" type="button" data-video="${id}" data-start="${start || 0}" aria-label="Play ${escapeHtml(label)}"><img src="${poster}" alt="${escapeHtml(label)}" loading="lazy"><span class="video-play">▶</span><span class="video-play-label">PLAY WALKTHROUGH</span></button></div>`;
}

function monumentCard(m, tabKey) {
  const steps = ROUTES[`${tabKey}::${m.name}`] || [];
  const start = TIER_VIDEO_START[tabKey] || 0;
  return `<article class="visual-monument-card">${mediaStrip(m.name, m.image)}<div class="visual-card-head"><div><h3>${escapeHtml(m.name)}</h3><div class="requirements"><span class="badge hot">${escapeHtml(m.need)}</span><span class="badge">☢ ${escapeHtml(m.rad)}</span></div></div><span class="route-verified">2026 ROUTE</span></div>${visualSteps(steps)}<div class="visual-caption">${escapeHtml(m.route)}</div>${videoPoster(CURRENT_MONUMENT_VIDEO, start, `${m.name} • current 2026 monument guide`)}</article>`;
}

function tier4Card(m) {
  return `<article class="visual-monument-card">${mediaStrip(m.name, m.overview, m.official)}<div class="visual-card-head"><div><h3>${escapeHtml(m.name)}</h3><div class="requirements"><span class="badge hot">${escapeHtml(m.need)}</span><span class="badge">☢ ${escapeHtml(m.rad)}</span></div></div><span class="route-verified endgame">ENDGAME</span></div>${visualSteps(m.steps)}<div class="visual-caption">${escapeHtml(m.note)}</div>${videoPoster(m.video, m.start, m.videoLabel)}</article>`;
}

fishingSection = function(tab) {
  return `<section class="fishing-block panel"><div class="section-head" style="margin-bottom:14px"><div><h2 style="font-size:24px">🎣 Fishing → Blue Card</h2><p>Balığı yakala → gut / butcher → Blue Card şansı.</p></div></div><div class="fishing-flow">${tab.fishing.map(f => `<div class="fish-card"><img src="${f.image}" alt="${escapeHtml(f.name)}" referrerpolicy="no-referrer"><strong>${escapeHtml(f.name)}</strong><div class="fishing-arrow">↓ GUT / BUTCHER ↓</div><span>${escapeHtml(f.chance)} Blue Card</span></div>`).join('')}</div></section>`;
};

monumentPage = function() {
  const isTier4 = state.monumentTab === 'tier4';
  const tab = isTier4 ? { title:'Tier 4 / Endgame Monumentler', subtitle:'Red-card sonrası ve high-risk endgame loot rotaları.', cardImage: VISUAL_ASSETS.red } : DATA.monuments[state.monumentTab];
  return `<div class="section-head"><div><h2>Monument Visual Guide</h2><p>Overview → fuse → switch → reader → loot → video.</p></div></div><div class="card-tabs"><button class="card-tab green ${state.monumentTab==='green'?'active':''}" data-monument-tab="green">🟩 Green Card</button><button class="card-tab blue ${state.monumentTab==='blue'?'active':''}" data-monument-tab="blue">🟦 Blue Card</button><button class="card-tab red ${state.monumentTab==='red'?'active':''}" data-monument-tab="red">🟥 Red Card</button><button class="card-tab tier4 ${isTier4?'active':''}" data-monument-tab="tier4">🏁 Tier 4 / Endgame</button></div><section class="card-hero"><img src="${tab.cardImage}" alt="${escapeHtml(tab.title)}"><div><div class="eyebrow">${isTier4?'HIGH-RISK / ENDGAME':state.monumentTab.toUpperCase()+' KEYCARD'}</div><h2>${escapeHtml(tab.title)}</h2><p>${escapeHtml(tab.subtitle || '')}</p></div></section><div class="visual-guide-intro">${visualLegend('fuse','FUSE','Fuse box')}${visualLegend('switch','SWITCH','Switch / timer / button')}${visualLegend('green','GREEN','Green reader')}${visualLegend('blue','BLUE','Blue reader')}${visualLegend('red','RED','Red reader / reward')}</div>${state.monumentTab==='blue' ? fishingSection(tab) : ''}${isTier4 ? `<div class="tier4-note"><strong>Tier 4</strong> burada site içi “endgame” grubu olarak kullanılıyor. Rust rehberlerinde bu lokasyonların çoğu Tier 3 / Red-tier olarak geçer.</div>` : `<div class="visual-source-note">Overview görsel + Facepunch güncel detay (varsa) + puzzle flow + güncel video.</div>`}<div class="visual-monument-grid">${isTier4 ? TIER4.map(tier4Card).join('') : tab.sources.map(m => monumentCard(m,state.monumentTab)).join('')}</div>`;
};

const baseBindEvents = bindEvents;
bindEvents = function() {
  baseBindEvents();
  document.querySelectorAll('.video-poster').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.video;
    const start = Number(btn.dataset.start || 0);
    const frame = document.createElement('div');
    frame.className = 'video-frame';
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?start=${start}&autoplay=1&rel=0" title="Rust monument walkthrough" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    btn.replaceWith(frame);
  }));
};

render();
