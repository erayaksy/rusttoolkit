// Monuments v8 — simple card guide: image + requirements only.
state.monumentSimpleTab = 'green';

const M8_GROUPS = {
  green: {
    label: 'Green Card',
    accent: 'green',
    items: [
      { name:'Abandoned Cabins', need:'Kart gerekmez', image:'https://itemlevel.net/wp-content/uploads/2023/05/Abandoned-Cabins-Monument-and-Green-Keycard-Location-RUST-1920x1052.jpeg' },
      { name:'Lighthouse', need:'Kart gerekmez', image:'https://itemlevel.net/wp-content/uploads/2023/05/Lighthouse-Monument-and-Green-Keycard-Location-RUST.jpeg-1920x1026.jpeg' },
      { name:'Abandoned Supermarket', need:'Kart gerekmez', image:'https://itemlevel.net/wp-content/uploads/2023/05/Supermarket-Monument-and-Green-Keycard-Location-RUST-1920x1069.jpeg' },
      { name:"Oxum's Gas Station", need:'Kart gerekmez', image:'https://itemlevel.net/wp-content/uploads/2023/05/Gas-Station-Monument-and-Green-Keycard-Location-RUST-1920x1044.jpeg' },
      { name:'Junkyard', need:'Kart gerekmez', image:'https://itemlevel.net/wp-content/uploads/2023/05/Junkyard-Monument-and-Green-Keycard-Location-RUST-1899x1080.jpeg' },
      { name:'Ferry Terminal', need:'Kart gerekmez', image:'https://itemlevel.net/wp-content/uploads/2023/05/Ferry-Terminal-Monument-and-Blue-Keycard-Location-RUST-1891x1080.jpeg' }
    ]
  },
  blue: {
    label: 'Blue Card',
    accent: 'blue',
    items: [
      { name:'Ferry Terminal', need:'Green Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Ferry-Terminal-Monument-and-Blue-Keycard-Location-RUST-1891x1080.jpeg' },
      { name:'Small Harbor', need:'Green Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Small-Harbor-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1064.jpeg' },
      { name:'Large Harbor', need:'Green Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Large-Harbor-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1888x1080.jpeg' },
      { name:'Satellite Dish', need:'Green Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Satellite-Dish-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1064.jpeg' },
      { name:'Sewer Branch', need:'Green Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Sewer-Branch-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1075.jpeg' },
      { name:'The Dome', need:'Green Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/The-Dome-Monument-Green-Keycard-and-Blue-Keycard-Location-RUST-1920x1050.jpeg' },
      { name:'Radtown', need:'Green Card + 1 Fuse + Rad Gear', image:'https://files.facepunch.com/paddy/20240928/rust_worldUpdate_radtown_22.jpg' }
    ]
  },
  red: {
    label: 'Red Card',
    accent: 'red',
    items: [
      { name:'Water Treatment Plant', need:'Blue Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Water-Treatment-Plant-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1057.jpeg' },
      { name:'Power Plant', need:'Green Card + Blue Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Power-Plant-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1062.jpeg' },
      { name:'Airfield', need:'Green Card + Blue Card + 2 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Airfield-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1080.jpeg' },
      { name:'Train Yard', need:'Blue Card + 1 Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Trainyard-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1024.jpeg' },
      { name:'Arctic Research Base', need:'Blue Card + Combat Gear', image:'https://itemlevel.net/wp-content/uploads/2023/05/Arctic-Research-Base-Monument-Blue-Keycard-Fragments-and-Red-Keycard-Location-RUST-1920x1056.jpeg' }
    ]
  },
  tier4: {
    label: 'Tier 4',
    accent: 'tier4',
    items: [
      { name:'Launch Site', need:'Green Card + Red Card + 2 Fuse + Hazmat', image:'https://itemlevel.net/wp-content/uploads/2023/05/Launch-Site-Monument-RUST-1920x1064.jpeg' },
      { name:'Military Tunnels', need:'Blue Card + Red Card + Fuse + Hazmat', image:'https://itemlevel.net/wp-content/uploads/2023/05/Military-Tunnels-Monument-RUST-1920x1056.jpeg' },
      { name:'Small Oil Rig', need:'Blue Card + Fuse + Combat Gear', image:'https://itemlevel.net/wp-content/uploads/2023/05/Small-Oil-Rig-Monument-RUST-1920x1061.jpeg' },
      { name:'Large Oil Rig', need:'Blue Card + Red Card + Fuse + Combat Gear', image:'https://itemlevel.net/wp-content/uploads/2023/05/Large-Oil-Rig-Monument-RUST-1920x1055.jpeg' },
      { name:'Underwater Labs', need:'Diving Gear + Layouta göre Cards/Fuse', image:'https://itemlevel.net/wp-content/uploads/2023/05/Underwater-Labs-Monument-RUST-1920x1068.jpeg' },
      { name:'Missile Silo', need:'Red Card + Fuse + Hazmat', image:'https://itemlevel.net/wp-content/uploads/2023/05/Missile-Silo-Monument-RUST-1920x1080.jpeg' }
    ]
  }
};

function m8Img(url) {
  return `/api/image?url=${encodeURIComponent(url)}`;
}

function monumentPage() {
  const key = state.monumentSimpleTab || 'green';
  const group = M8_GROUPS[key];
  return `
    <section class="m8-page">
      <div class="m8-head">
        <div>
          <div class="eyebrow">MONUMENT GUIDE</div>
          <h2>Keycard Monumentleri</h2>
        </div>
      </div>

      <div class="m8-tabs">
        <button class="m8-tab green ${key==='green'?'active':''}" data-m8-tab="green">🟩 Green</button>
        <button class="m8-tab blue ${key==='blue'?'active':''}" data-m8-tab="blue">🟦 Blue</button>
        <button class="m8-tab red ${key==='red'?'active':''}" data-m8-tab="red">🟥 Red</button>
        <button class="m8-tab tier4 ${key==='tier4'?'active':''}" data-m8-tab="tier4">🏁 Tier 4</button>
      </div>

      <div class="m8-grid">
        ${group.items.map(item => `
          <article class="m8-card ${group.accent}">
            <div class="m8-image-wrap">
              <img src="${m8Img(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">
            </div>
            <div class="m8-card-body">
              <h3>${escapeHtml(item.name)}</h3>
              <div class="m8-need-label">GEREKEN</div>
              <div class="m8-need">${escapeHtml(item.need)}</div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

const bindBeforeM8 = bindEvents;
bindEvents = function() {
  bindBeforeM8();
  document.querySelectorAll('[data-m8-tab]').forEach(btn => btn.addEventListener('click', () => {
    state.monumentSimpleTab = btn.dataset.m8Tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }));
};

render();
