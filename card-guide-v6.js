// Card Guide v6 — verified Tier 4 flows; no fake pin maps.
const TIER4_VERIFIED = {
  'Launch Site': {
    need: 'Green Card + Red Card + 2 Fuse',
    rad: 'Çok yüksek radyasyon + Bradley',
    image: 'https://files.facepunch.com/paddy/20220302/launchsite2.jpg',
    note: 'Launch Site için Blue Card gerekmez. İki fuse ve Green → Red puzzle akışı vardır.',
    flow: [
      ['ENTRY', 'Perimetreden tam rad korumasıyla gir.'],
      ['FUSE 1 + GREEN', 'İlk fuse kutusunu çalıştır ve Green reader bölümünü aç.'],
      ['INNER BUILDING', 'Ana bina koridorlarından ilerle; scientist ve Bradley riskini kontrol et.'],
      ['FUSE 2 + RED', 'İkinci fuse sonrası Red reader kapısını aç.'],
      ['ELITE LOOT', 'Final control room ve yüksek seviye loot.']
    ]
  },
  'Military Tunnels': {
    need: 'Blue Card + Red Card + Fuse',
    rad: 'Yüksek radyasyon + yoğun scientist',
    image: 'https://www.rustbench.com/wiki/Monuments/military-tunnels/20260517164058_1.jpg',
    note: 'Military Tunnels için Green Card zorunlu değil; Blue + Red + Fuse puzzle akışı kullanılır.',
    flow: [
      ['ENTRY', 'Tünel girişinden scientist temizleyerek ilerle.'],
      ['FUSE', 'Puzzle bölümündeki fuse kutusuna güç ver.'],
      ['BLUE ROOM', 'Blue reader ile ara loot/puzzle bölümünü aç.'],
      ['RED ROOM', 'Red reader ile final yüksek seviye bölüme geç.'],
      ['ELITE LOOT', 'Elite crate ve final loot rotasını temizle.']
    ]
  },
  'Small Oil Rig': {
    need: 'Blue Card + Fuse',
    rad: 'Radyasyon yok / yoğun PvE',
    image: 'https://www.rustbench.com/wiki/Monuments/oil-rig/20260517164625_1.jpg',
    note: 'Small Oil Rig dikey bir monument olduğu için sahte kuşbakışı pin yerine kat kat akış kullanılıyor.',
    flow: [
      ['DOCK', 'Boat ile alt platformdan yanaş.'],
      ['CLEAR LOWER', 'Alt ve orta kat scientistleri temizle.'],
      ['FUSE ROOM', 'Fuse takıp Blue room puzzle gücünü ver.'],
      ['BLUE ROOM', 'Blue Card odasını aç ve lootla.'],
      ['TOP CRATE', 'Üst kat locked crate / Heavy Scientist event alanına çık.']
    ]
  },
  'Large Oil Rig': {
    need: 'Blue Card + Red Card + Fuse',
    rad: 'Düşük radyasyon / yoğun PvE',
    image: 'https://rustly.com/gameplay/large-oil-rig.webp',
    note: 'Large Oil Rig için Blue + Red + Fuse gerekir; kart odaları farklı katlardadır.',
    flow: [
      ['DOCK', 'Boat ile alt platformdan yaklaş.'],
      ['CLEAR RIG', 'Kat kat scientist temizle.'],
      ['FUSE', 'Puzzle gücünü etkinleştir.'],
      ['BLUE + RED ROOMS', 'Blue ve Red kart odalarını sıralı aç.'],
      ['LOCKED CRATE', 'Üst event ve elite loot alanını kontrol et.']
    ]
  },
  'Underwater Labs': {
    need: 'Dalış ekipmanı + layouta göre kart/fuse',
    rad: 'Procedural layout',
    image: 'https://i.ytimg.com/vi/Yj38XRHpD_o/maxresdefault.jpg',
    note: 'Underwater Labs procedural olduğu için tek sabit pin haritası doğru değildir. Modül bazlı yönlendirme kullanılıyor.',
    flow: [
      ['ENTRY', 'Moonpool / submarine girişini bul.'],
      ['SCAN MODULES', 'O wipe için oluşan modülleri ve koridorları kontrol et.'],
      ['KEYCARD ROOMS', 'Spawn olan Blue / Red odaları aç.'],
      ['LOOT', 'Crate ve utility odalarını temizle.'],
      ['EXIT', 'Oksijen ve çıkış rotasını koru.']
    ]
  },
  'Missile Silo': {
    need: 'Red Card + 1 Fuse',
    rad: 'Çok yüksek radyasyon + ağır PvE',
    image: 'https://files.facepunch.com/damian/1b0311b1/nms_1.jpg',
    note: 'Missile Silo için 1 Red Card ve elevator için 1 Fuse gerekir. Beş katlı dikey akış nedeniyle sahte yüzey pinleri kaldırıldı.',
    flow: [
      ['SURFACE', 'Surface scientistleri temizle ve elevator girişini bul.'],
      ['FUSE', 'Elevator power için 1 Fuse tak.'],
      ['RED CARD', 'Red reader ile elevator descent aç.'],
      ['5 FLOORS', 'Kat kat NVGM scientist temizleyerek aşağı in.'],
      ['ENDGAME LOOT', 'Elite crate ve missile chamber bölgesini lootla.']
    ]
  }
};

function tier4FlowMarkup(item){
  const meta = TIER4_VERIFIED[item.name];
  if (!meta) return '';
  const imageSrc = typeof proxiedImage === 'function' ? proxiedImage(meta.image) : meta.image;
  return `<section class="tier4-verified-card">
    <div class="tier4-verified-head"><div><strong>ENDGAME ROUTE</strong><span>Tier 4 için yanlış pinli harita yerine doğrulanmış akış.</span></div></div>
    <div class="tier4-overview-stage"><img src="${imageSrc}" alt="${escapeHtml(item.name)} overview" loading="eager"></div>
    <div class="tier4-badges"><span>${escapeHtml(meta.need)}</span><span>${escapeHtml(meta.rad)}</span></div>
    <p class="tier4-note-copy">${escapeHtml(meta.note)}</p>
    <div class="tier4-flow-list">${meta.flow.map((step, idx)=>`<div class="tier4-flow-step"><b>${idx+1}</b><div><strong>${escapeHtml(step[0])}</strong><span>${escapeHtml(step[1])}</span></div></div>`).join('')}</div>
  </section>`;
}

const detailMediaBeforeV6 = detailMedia;
detailMedia = function(tab,item,steps){
  if(tab !== 'tier4') return detailMediaBeforeV6(tab,item,steps);
  return tier4FlowMarkup(item);
};

const monumentDetailPageBeforeV6 = monumentDetailPage;
monumentDetailPage = function(tab,name){
  return monumentDetailPageBeforeV6(tab,name)
    .replace('Haritadaki pinleri sırayla takip et','Endgame akışını sırayla takip et')
    .replace('Overview’daki numaraları sırayla takip et','Endgame akışını sırayla takip et');
};

render();
