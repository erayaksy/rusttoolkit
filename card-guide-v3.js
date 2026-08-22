// Card Guide v3 — landing page, quick navigation and linked detail view.
state.monumentDetail = null;
state.monumentDetailTab = null;
state.monumentTab = 'all';

const baseShellV3 = shell;
shell = function(content) {
  const quick = `<nav class="global-quick-nav" aria-label="Quick navigation">
    <button data-nav="home" class="${state.page==='home'?'active':''}">⌂ Ana Sayfa</button>
    <button data-nav="commands" class="${state.page==='commands'?'active':''}">⌘ Console</button>
    <button data-nav="config" class="${state.page==='config'?'active':''}">⚡ Config</button>
    <button data-nav="monuments" class="${state.page==='monuments'?'active':''}">▦ Card Guide</button>
    <button data-nav="raid" class="${state.page==='raid'?'active':''}">💥 Raid</button>
  </nav>`;
  return baseShellV3(content).replace('<div class="layout">', `${quick}<div class="layout">`);
};

function cardGuideGroups() {
  return [
    { key:'green', label:'Green Card', color:'green', reward:'🟩 Green', items: DATA.monuments.green.sources },
    { key:'blue', label:'Blue Card', color:'blue', reward:'🟦 Blue', items: DATA.monuments.blue.sources },
    { key:'red', label:'Red Card', color:'red', reward:'🟥 Red', items: DATA.monuments.red.sources },
    { key:'tier4', label:'Tier 4 / Endgame', color:'tier4', reward:'🏁 Endgame', items: TIER4 }
  ];
}

function quickNeed(tab, item) {
  if (tab === 'green') return 'Kart gerekmez';
  if (tab === 'blue') {
    if (/green/i.test(item.need) && /fuse/i.test(item.need)) return 'Yeşil Kart + Fuse';
    if (/green/i.test(item.need)) return 'Yeşil Kart';
  }
  if (tab === 'red') {
    const n = item.need || '';
    if (/green/i.test(n) && /blue/i.test(n) && /2\s*fuse/i.test(n)) return 'Yeşil + Mavi Kart + 2 Fuse';
    if (/green/i.test(n) && /blue/i.test(n) && /fuse/i.test(n)) return 'Yeşil + Mavi Kart + Fuse';
    if (/blue/i.test(n) && /fuse/i.test(n)) return 'Mavi Kart + Fuse';
    if (/blue/i.test(n)) return 'Mavi Kart';
  }
  return String(item.need || 'Hazırlık gerekli')
    .replaceAll('Green Card','Yeşil Kart').replaceAll('Blue Card','Mavi Kart').replaceAll('Red Card','Kırmızı Kart');
}

function entryImage(tab, item) {
  if (tab === 'tier4') return item.overview || item.official || '';
  return item.image || OFFICIAL_MONUMENT_IMAGES[item.name] || '';
}

function entrySteps(tab, item) {
  if (tab === 'tier4') return item.steps || [];
  return ROUTES[`${tab}::${item.name}`] || [];
}

function entryNote(tab, item) {
  if (tab === 'tier4') return item.note || '';
  return item.route || '';
}

function entryVideo(tab, item) {
  if (tab === 'tier4') return { id:item.video, start:item.start || 0, label:item.videoLabel || `${item.name} guide` };
  return { id:CURRENT_MONUMENT_VIDEO, start:TIER_VIDEO_START[tab] || 0, label:`${item.name} • current monument walkthrough` };
}

function encodeDetail(tab, name) {
  return encodeURIComponent(`${tab}|||${name}`);
}
function decodeDetail(v) {
  const [tab,name] = decodeURIComponent(v).split('|||');
  return {tab,name};
}

function landingCard(tab, item, reward) {
  const img = entryImage(tab,item);
  return `<button class="guide-landing-card" data-open-monument="${encodeDetail(tab,item.name)}">
    <div class="landing-card-media">${img ? `<img src="${img}" alt="${escapeHtml(item.name)}" loading="lazy" referrerpolicy="no-referrer">` : `<div class="landing-card-placeholder">${reward}</div>`}</div>
    <div class="landing-card-body">
      <div class="landing-card-top"><h3>${escapeHtml(item.name)}</h3><span>${reward}</span></div>
      <div class="quick-requirement">${escapeHtml(quickNeed(tab,item))}</div>
      <div class="landing-card-hint">Detaylı rota →</div>
    </div>
  </button>`;
}

function monumentLanding() {
  const groups = cardGuideGroups();
  const active = state.monumentTab || 'all';
  const visible = active === 'all' ? groups : groups.filter(g=>g.key===active);
  return `<section class="guide-home">
    <div class="guide-home-hero">
      <div><div class="eyebrow">CARD GUIDE</div><h2>Hangi monument için ne lazım?</h2><p>Önce hızlı bak. Monumente tıklayınca fuse, switch, reader ve video rotası açılır.</p></div>
      <div class="card-chain"><span>🟩 Green</span><b>→</b><span>🟦 Blue</span><b>→</b><span>🟥 Red</span><b>→</b><span>🏁 Endgame</span></div>
    </div>
    <div class="guide-filter-tabs">
      ${[['all','Tümü'],['green','🟩 Green'],['blue','🟦 Blue'],['red','🟥 Red'],['tier4','🏁 Tier 4']].map(([k,l])=>`<button data-guide-filter="${k}" class="${active===k?'active':''}">${l}</button>`).join('')}
    </div>
    ${visible.map(g=>`<section class="guide-group">
      <div class="guide-group-title"><h3>${g.label}</h3><span>${g.items.length} monument</span></div>
      <div class="guide-landing-grid">${g.items.map(i=>landingCard(g.key,i,g.reward)).join('')}</div>
    </section>`).join('')}
  </section>`;
}

function getDetail(tab,name) {
  const group = cardGuideGroups().find(g=>g.key===tab);
  const index = group ? group.items.findIndex(i=>i.name===name) : -1;
  return { group, index, item:index>=0?group.items[index]:null };
}

function stepMarkerRail(steps) {
  if (!steps.length) return '';
  return `<div class="image-step-rail">${steps.map((s,i)=>`<span title="${escapeHtml(s[1])}">${i+1}</span>`).join('')}</div>`;
}

function detailSteps(steps) {
  return `<div class="detail-step-list">${steps.map((s,i)=>`<div class="detail-step" id="step-${i+1}">
    <div class="detail-step-number">${i+1}</div>
    <div class="detail-step-icon">${routeIcon(s[0])}</div>
    <div class="detail-step-copy"><strong>${escapeHtml(s[1])}</strong><span>${escapeHtml(s[2])}</span></div>
  </div>`).join('')}</div>`;
}

function monumentSwitcher(group,index) {
  if (!group) return '';
  const prev = group.items[(index-1+group.items.length)%group.items.length];
  const next = group.items[(index+1)%group.items.length];
  return `<div class="monument-switcher">
    <button data-open-monument="${encodeDetail(group.key,prev.name)}">← ${escapeHtml(prev.name)}</button>
    <div class="monument-chip-scroll">${group.items.map((x,i)=>`<button data-open-monument="${encodeDetail(group.key,x.name)}" class="${i===index?'active':''}">${escapeHtml(x.name)}</button>`).join('')}</div>
    <button data-open-monument="${encodeDetail(group.key,next.name)}">${escapeHtml(next.name)} →</button>
  </div>`;
}

function detailMedia(tab,item,steps) {
  const img = entryImage(tab,item);
  const official = tab === 'tier4' ? item.official : OFFICIAL_MONUMENT_IMAGES[item.name];
  return `<div class="detail-overview-wrap">
    ${img ? `<img class="detail-overview" src="${img}" alt="${escapeHtml(item.name)} overview" referrerpolicy="no-referrer">` : ''}
    ${stepMarkerRail(steps)}
  </div>
  ${official && official !== img ? `<details class="official-detail"><summary>Facepunch current game detail</summary><img src="${official}" alt="${escapeHtml(item.name)} Facepunch detail" loading="lazy" referrerpolicy="no-referrer"></details>`:''}`;
}

function detailVideo(tab,item) {
  const v = entryVideo(tab,item);
  if (!v.id) return '';
  return videoPoster(v.id,v.start,v.label);
}

function monumentDetailPage(tab,name) {
  const {group,index,item} = getDetail(tab,name);
  if (!item) { state.monumentDetail=null; return monumentLanding(); }
  const steps = entrySteps(tab,item);
  return `<section class="monument-detail-page">
    <div class="detail-breadcrumb"><button data-guide-home>← Card Guide</button><span>/</span><span>${group.label}</span><span>/</span><strong>${escapeHtml(item.name)}</strong></div>
    ${monumentSwitcher(group,index)}
    <div class="detail-title-row">
      <div><div class="eyebrow">${group.reward}</div><h2>${escapeHtml(item.name)}</h2></div>
      <div class="detail-need"><small>GEREKEN</small><strong>${escapeHtml(quickNeed(tab,item))}</strong><span>☢ ${escapeHtml(item.rad || '')}</span></div>
    </div>
    ${detailMedia(tab,item,steps)}
    <div class="detail-note">${escapeHtml(entryNote(tab,item))}</div>
    <div class="detail-section-title"><span>ROTA</span><h3>Overview’daki numaraları sırayla takip et</h3></div>
    ${detailSteps(steps)}
    <div class="detail-section-title"><span>VIDEO</span><h3>Walkthrough</h3></div>
    ${detailVideo(tab,item)}
    ${monumentSwitcher(group,index)}
  </section>`;
}

monumentPage = function() {
  if (state.monumentDetail && state.monumentDetailTab) return monumentDetailPage(state.monumentDetailTab,state.monumentDetail);
  return monumentLanding();
};

const baseBindEventsV3 = bindEvents;
bindEvents = function() {
  baseBindEventsV3();
  document.querySelectorAll('[data-nav="monuments"]').forEach(btn=>btn.addEventListener('click',()=>{
    state.monumentDetail=null; state.monumentDetailTab=null; state.monumentTab='all'; render();
  }));
  document.querySelectorAll('[data-guide-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    state.monumentTab=btn.dataset.guideFilter; state.monumentDetail=null; state.monumentDetailTab=null; render();
  }));
  document.querySelectorAll('[data-open-monument]').forEach(btn=>btn.addEventListener('click',()=>{
    const d=decodeDetail(btn.dataset.openMonument); state.monumentDetail=d.name; state.monumentDetailTab=d.tab; state.monumentTab=d.tab; window.scrollTo({top:0,behavior:'smooth'}); render();
  }));
  document.querySelectorAll('[data-guide-home]').forEach(btn=>btn.addEventListener('click',()=>{
    state.monumentDetail=null; state.monumentDetailTab=null; window.scrollTo({top:0,behavior:'smooth'}); render();
  }));
};

render();
