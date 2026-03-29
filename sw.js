const CACHE = 'retro-arcade-v3';
const FILES = [
  './', 'index.html', 'manifest.json',
  'tetris.html', 'asteroids.html', 'pacman.html',
  'frogger.html', 'pong.html', 'invaders.html',
  'breakout.html', 'snake.html', 'centipede.html',
  'donkeykong.html', 'princeofpersia.html', 'digdug.html'
];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))));
// Network-first: always try fresh content, fall back to cache when offline
self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request).then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request))
));
