const CACHE = 'retro-arcade-v1';
const FILES = [
  './', 'index.html', 'manifest.json',
  'tetris.html', 'asteroids.html', 'pacman.html',
  'frogger.html', 'pong.html', 'invaders.html',
  'breakout.html', 'snake.html', 'centipede.html'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
