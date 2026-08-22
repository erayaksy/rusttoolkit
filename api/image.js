const ALLOWED = new Set([
  'guided.news','eip.gg','tradeit.gg','images.steamusercontent.com','shared.akamai.steamstatic.com',
  'files.facepunch.com','itemlevel.net','articles.rustoria.co','skins.cash','i.ytimg.com','lone.design',
  'www.rustbench.com','rustbench.com','rustly.com','www.rustly.com','www.playrust.nl','playrust.nl',
  'gamerempire.net','www.gamerempire.net','staticg.sportskeeda.com'
]);

module.exports = async function handler(req, res) {
  try {
    const raw = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
    if (!raw) return res.status(400).send('missing url');
    const target = new URL(raw);
    if (target.protocol !== 'https:' || !ALLOWED.has(target.hostname)) return res.status(403).send('host not allowed');
    const upstream = await fetch(target.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': `${target.protocol}//${target.hostname}/`
      },
      redirect: 'follow'
    });
    if (!upstream.ok) return res.status(upstream.status).send('upstream image failed');
    const type = upstream.headers.get('content-type') || 'image/jpeg';
    if (!type.startsWith('image/')) return res.status(415).send('not an image');
    const buf = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Content-Type', type);
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    return res.status(200).send(buf);
  } catch (e) {
    return res.status(500).send('image proxy error');
  }
};
