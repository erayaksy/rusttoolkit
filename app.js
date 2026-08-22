const DATA = window.RUST_DATA;
const state = {
  page: 'home',
  commandCategory: 'Tümü',
  commandSearch: '',
  monumentTab: 'green',
  ram: '32',
  gpu: 'nvidia',
  priority: 'competitive',
  raidTarget: 1,
  raidQty: 1
};

const app = document.querySelector('#app');

function escapeHtml(value) {
  return String(value).replace(/[&<>'\"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[ch]));
}

function navButton(id, icon, label) {
  return `<button class="nav-btn ${state.page === id ? 'active' : ''}" data-nav="${id}"><span class="nav-icon">${icon}</span>${label}</button>`;
}

function shell(content) {
  return `
  <div class="app-shell">
    <header class="topbar">
      <div class="brand"><div class="brand-mark">⚙</div><div>Rust Toolkit<small>PLAYER UTILITY</small></div></div>
      <div class="top-actions"><div class="update-pill">Data check: Aug 2026</div></div>
    </header>
    <div class="layout">
      <aside class="sidebar">
        ${navButton('home','⌂','Ana Sayfa')}
        ${navButton('commands','⌘','Console')}
        ${navButton('config','⚡','Config Generator')}
        ${navButton('monuments','🗺','Monument Guide')}
        ${navButton('raid','💥','Raid Calculator')}
        <div class="sidebar-note">Amaç: fight sırasında telefondan bile hızlı açılabilecek kısa, pratik Rust referansı.</div>
      </aside>
      <main><div class="page">${content}<div class="footer">Community utility project. Rust ve ilgili görsellerin hakları ilgili sahiplerine aittir. Oyun güncellemeleri bazı değerleri değiştirebilir; patch-sensitive bilgiler düzenli kontrol edilmelidir.</div></div></main>
    </div>
    <div class="toast" id="toast">Kopyalandı</div>
  </div>`;
}

function homePage() {
  return `
    <section class="hero">
      <div>
        <div class="eyebrow">Rust hızlı referans</div>
        <h1>Daha az arama.<br>Daha çok oyun.</h1>
        <p>Console komutları, competitive config, monument keycard rotaları ve raid maliyetlerini tek yerde toplayan hızlı oyuncu toolkit'i.</p>
        <div class="hero-actions">
          <button class="btn primary" data-nav="monuments">Monument Guide</button>
          <button class="btn ghost" data-nav="commands">Console Commands</button>
        </div>
      </div>
    </section>
    <section class="grid-3">
      <article class="feature-card"><div class="icon">⌘</div><h3>Console Commands</h3><p>FPS, combat, visibility ve bind komutlarını tek tıkla kopyala.</p></article>
      <article class="feature-card"><div class="icon">🗺</div><h3>Keycard Progression</h3><p>Green → Blue → Red kart zincirini görseller ve kısa rotalarla takip et.</p></article>
      <article class="feature-card"><div class="icon">💥</div><h3>Raid Calculator</h3><p>Duvar ve kapılar için rocket, C4, satchel ve explo ammo ihtiyacını anında gör.</p></article>
    </section>`;
}

function commandsPage() {
  const categories = ['Tümü', ...new Set(DATA.commands.map(c => c.category))];
  const q = state.commandSearch.toLowerCase().trim();
  const filtered = DATA.commands.filter(c => {
    const categoryOk = state.commandCategory === 'Tümü' || c.category === state.commandCategory;
    const searchOk = !q || `${c.command} ${c.description} ${c.category}`.toLowerCase().includes(q);
    return categoryOk && searchOk;
  });
  return `
    <div class="section-head"><div><h2>Console Commands</h2><p>FPS, combat ve görünürlük için pratik komutlar.</p></div><span class="badge hot">${filtered.length} komut</span></div>
    <div class="search-row"><input class="search-input" id="commandSearch" placeholder="Komut veya açıklama ara..." value="${escapeHtml(state.commandSearch)}" /></div>
    <div class="chips" style="margin-bottom:18px">${categories.map(c => `<button class="chip ${state.commandCategory===c?'active':''}" data-category="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div>
    <div class="command-list">
      ${filtered.map(c => `<article class="command-card">
        <div class="command-top"><div class="code">${escapeHtml(c.command)}</div><button class="copy-btn" data-copy="${encodeURIComponent(c.command)}">Copy</button></div>
        <div class="command-meta"><span class="badge">${escapeHtml(c.category)}</span>${c.tag?`<span class="badge hot">${escapeHtml(c.tag)}</span>`:''}</div>
        <p>${escapeHtml(c.description)}</p>
      </article>`).join('') || '<div class="panel">Sonuç bulunamadı.</div>'}
    </div>`;
}

function generateConfig() {
  const cmds = [];
  cmds.push(state.ram === '32' ? 'gc.buffer 4096' : 'gc.buffer 2048');
  cmds.push('effects.maxgibs -1');
  cmds.push('client.headbob 0');
  cmds.push('client.hurtpunch 0');
  cmds.push('client.clampscreenshake true');
  cmds.push('client.headlerp_inertia false');
  cmds.push('graphics.vm_fov_scale false');
  cmds.push('graphics.fov 90');
  cmds.push('graphics.grassshadows 0');
  cmds.push('grass.displacement false');
  cmds.push('water.reflections 0');
  cmds.push('hitnotify.notification_level 2');
  if (state.gpu === 'nvidia') cmds.push('graphics.reflexmode 2');
  if (state.priority === 'maxfps') {
    cmds.push('graphics.shadowquality 0');
    cmds.push('graphics.shadowcascades 1');
    cmds.push('particle.quality 0');
  }
  return cmds.join('; ');
}

function configPage() {
  const output = generateConfig();
  return `
    <div class="section-head"><div><h2>Config Generator</h2><p>Sisteme ve oyun önceliğine göre tek satırlık F1 config oluştur.</p></div></div>
    <div class="config-grid">
      <section class="panel">
        <h3>1. Sistem</h3>
        <div class="option-group"><strong>RAM</strong><div class="option-row">
          <label class="option"><input type="radio" name="ram" value="16" ${state.ram==='16'?'checked':''}>16 GB</label>
          <label class="option"><input type="radio" name="ram" value="32" ${state.ram==='32'?'checked':''}>32 GB+</label>
        </div></div>
        <div class="option-group"><strong>GPU</strong><div class="option-row">
          <label class="option"><input type="radio" name="gpu" value="nvidia" ${state.gpu==='nvidia'?'checked':''}>NVIDIA</label>
          <label class="option"><input type="radio" name="gpu" value="other" ${state.gpu==='other'?'checked':''}>AMD / Other</label>
        </div></div>
        <div class="option-group"><strong>Öncelik</strong><div class="option-row">
          <label class="option"><input type="radio" name="priority" value="competitive" ${state.priority==='competitive'?'checked':''}>Competitive</label>
          <label class="option"><input type="radio" name="priority" value="maxfps" ${state.priority==='maxfps'?'checked':''}>Maximum FPS</label>
        </div></div>
      </section>
      <section class="panel"><h3>2. Oluşturulan Config</h3><div class="config-output">${escapeHtml(output)}</div><button class="btn primary" style="margin-top:12px" data-copy="${encodeURIComponent(output)}">Copy All</button><div class="notice">Komutları F1 console'a yapıştır. Bazı grafik değerleri oyun güncellemeleriyle değişebilir.</div></section>
    </div>`;
}

function monumentPage() {
  const tab = DATA.monuments[state.monumentTab];
  return `
    <div class="section-head"><div><h2>Monument & Keycard Guide</h2><p>Kartı nereden alacağın ve puzzle için ne götüreceğin tek ekranda.</p></div></div>
    <div class="progression">
      <div class="progress-step green"><strong>1. Green</strong><span>Küçük monumentlerden ücretsiz kart</span></div>
      <div class="progress-step blue"><strong>2. Blue</strong><span>Green puzzle veya fishing</span></div>
      <div class="progress-step red"><strong>3. Red</strong><span>Blue puzzle reward</span></div>
      <div class="progress-step"><strong>4. Tier 3</strong><span>Launch / Tunnels / Rig / Silo</span></div>
    </div>
    <div class="card-tabs">
      <button class="card-tab green ${state.monumentTab==='green'?'active':''}" data-monument-tab="green">🟩 Green Card</button>
      <button class="card-tab blue ${state.monumentTab==='blue'?'active':''}" data-monument-tab="blue">🟦 Blue Card</button>
      <button class="card-tab red ${state.monumentTab==='red'?'active':''}" data-monument-tab="red">🟥 Red Card</button>
    </div>
    <section class="card-hero">
      <img src="${tab.cardImage}" alt="${tab.title}" referrerpolicy="no-referrer" />
      <div><div class="eyebrow">${state.monumentTab.toUpperCase()} KEYCARD</div><h2>${tab.title}</h2><p>${tab.subtitle}</p></div>
    </section>
    ${state.monumentTab==='blue' ? fishingSection(tab) : ''}
    <div class="monument-grid">${tab.sources.map(m => monumentCard(m)).join('')}</div>
    <div class="extra-box"><strong>Notlar</strong><ul>${tab.extra.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
}

function fishingSection(tab) {
  return `<section class="fishing-block panel"><div class="section-head" style="margin-bottom:14px"><div><h2 style="font-size:24px">🎣 Fishing ile Blue Card</h2><p>Bu balıkları gut/butcher ettiğinde Blue Keycard çıkma şansı var.</p></div><span class="badge hot">20% / fish</span></div>
  <div class="fishing-grid">${tab.fishing.map(f => `<div class="fish-card"><img src="${f.image}" alt="${f.name}" referrerpolicy="no-referrer" onerror="this.style.display='none'"/><strong>${f.name}</strong><span>${f.chance} Blue Card</span></div>`).join('')}</div>
  <div class="notice"><strong>2026 önemli değişiklik:</strong> Outpost vending machine'den Blue Keycard satın alma kaldırıldı. Bu yüzden green puzzle ve fishing rotaları daha önemli.</div>
  </section>`;
}

function monumentCard(m) {
  return `<article class="monument-card"><img class="monument-img" src="${m.image}" alt="${m.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'"/><div class="monument-body"><div class="monument-title"><h3>${m.name}</h3><span class="badge">Reward → Card</span></div><div class="requirements"><span class="badge hot">${m.need}</span><span class="badge">☢ ${m.rad}</span></div><p class="route">${m.route}</p></div></article>`;
}

function raidPage() {
  const target = DATA.raidTargets[state.raidTarget];
  const qty = state.raidQty;
  const methods = [['C4','c4','💣'], ['Rockets','rockets','🚀'], ['Satchels','satchels','🧨'], ['Explo Ammo','explo','🎯']];
  return `
    <div class="section-head"><div><h2>Raid Calculator</h2><p>Common wall/door targets için hızlı boom hesabı.</p></div></div>
    <div class="raid-layout">
      <section class="panel"><h3>Target</h3><div class="target-grid">${DATA.raidTargets.map((t,i)=>`<div class="target-card ${i===state.raidTarget?'active':''}" data-target="${i}"><strong>${t.name}</strong><span>${t.hp} HP</span></div>`).join('')}</div><div style="margin-top:16px"><label>Adet: <input class="search-input" id="raidQty" type="number" min="1" max="99" value="${qty}" style="max-width:110px"></label></div></section>
      <section class="panel"><h3>${target.name} × ${qty}</h3><div class="raid-methods">${methods.map(([label,key,icon])=>{
        const count = target[key] * qty;
        const sulfur = count * DATA.sulfur[key];
        return `<div class="method"><div><strong>${icon} ${label}</strong><small>${sulfur.toLocaleString('en-US')} sulfur</small></div><div class="count">×${count}</div></div>`;
      }).join('')}</div><div class="notice">Pure-method counts gösterilir. Mixed explosive kombinasyonları bazı hedeflerde daha ucuz olabilir.</div></section>
    </div>`;
}

function render() {
  let content = homePage();
  if (state.page === 'commands') content = commandsPage();
  if (state.page === 'config') content = configPage();
  if (state.page === 'monuments') content = monumentPage();
  if (state.page === 'raid') content = raidPage();
  app.innerHTML = shell(content);
  bindEvents();
}

function toast(msg='Kopyalandı') {
  const t = document.querySelector('#toast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 1200);
}

function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', () => { state.page = el.dataset.nav; window.scrollTo({top:0}); render(); }));
  document.querySelectorAll('[data-copy]').forEach(el => el.addEventListener('click', async () => {
    const text = decodeURIComponent(el.dataset.copy);
    try { await navigator.clipboard.writeText(text); toast(); } catch { toast('Kopyalama başarısız'); }
  }));
  document.querySelectorAll('[data-category]').forEach(el => el.addEventListener('click', () => { state.commandCategory = el.dataset.category; render(); }));
  const search = document.querySelector('#commandSearch');
  if (search) search.addEventListener('input', e => { state.commandSearch = e.target.value; render(); setTimeout(()=>{const n=document.querySelector('#commandSearch'); if(n){n.focus();n.setSelectionRange(n.value.length,n.value.length)}},0); });
  document.querySelectorAll('[data-monument-tab]').forEach(el => el.addEventListener('click', () => { state.monumentTab = el.dataset.monumentTab; render(); }));
  document.querySelectorAll('input[name="ram"]').forEach(el => el.addEventListener('change', e => { state.ram = e.target.value; render(); }));
  document.querySelectorAll('input[name="gpu"]').forEach(el => el.addEventListener('change', e => { state.gpu = e.target.value; render(); }));
  document.querySelectorAll('input[name="priority"]').forEach(el => el.addEventListener('change', e => { state.priority = e.target.value; render(); }));
  document.querySelectorAll('[data-target]').forEach(el => el.addEventListener('click', () => { state.raidTarget = Number(el.dataset.target); render(); }));
  const qty = document.querySelector('#raidQty');
  if (qty) qty.addEventListener('change', e => { state.raidQty = Math.max(1, Number(e.target.value)||1); render(); });
}

render();
