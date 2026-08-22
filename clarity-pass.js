/* Monument clarity pass: simpler media, vertical route steps, collapsible video. */
mediaStrip = function(name, overview, official) {
  const officialUrl = official || OFFICIAL_MONUMENT_IMAGES[name];
  return `<div class="clarity-media">
    ${overview ? `<figure class="overview-shot"><img src="${overview}" alt="${escapeHtml(name)} monument overview" loading="lazy" referrerpolicy="no-referrer"><figcaption>MONUMENT OVERVIEW</figcaption></figure>` : ''}
    ${officialUrl ? `<details class="official-detail"><summary>Facepunch current game detail</summary><img src="${officialUrl}" alt="${escapeHtml(name)} Facepunch screenshot" loading="lazy" referrerpolicy="no-referrer"></details>` : ''}
  </div>`;
};

visualSteps = function(steps) {
  if (!steps || !steps.length) return '';
  return `<div class="clarity-route">${steps.map((s,i) => `
    <div class="clarity-step" data-type="${s[0]}">
      <div class="clarity-step-number">${i+1}</div>
      <div class="clarity-step-icon">${routeIcon(s[0])}</div>
      <div class="clarity-step-copy"><strong>${escapeHtml(s[1])}</strong><span>${escapeHtml(s[2])}</span></div>
    </div>${i < steps.length - 1 ? '<div class="clarity-arrow">↓</div>' : ''}
  `).join('')}</div>`;
};

videoPoster = function(id, start, label) {
  const poster = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  return `<details class="clarity-video">
    <summary>▶ Video guide — ${escapeHtml(label)}</summary>
    <button class="video-poster" type="button" data-video="${id}" data-start="${start || 0}" aria-label="Play ${escapeHtml(label)}">
      <img src="${poster}" alt="${escapeHtml(label)}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${id}/hqdefault.jpg'">
      <span class="video-play">▶</span>
      <span class="video-play-label">PLAY WALKTHROUGH</span>
    </button>
  </details>`;
};

render();
