// Copyright © 2026 Wayne Davies. Free software under the GNU General Public License, version 3 or later.
// SPDX-License-Identifier: GPL-3.0-or-later. See LICENSE in the project root.

const CACHE = 'retro-arcade-v10';
const FILES = [
  './', 'index.html', 'manifest.json',
  'tetris.html', 'asteroids.html', 'pacman.html',
  'frogger.html', 'pong.html', 'invaders.html',
  'breakout.html', 'snake.html', 'centipede.html',
  'donkeykong.html', 'princeofpersia.html', 'digdug.html',
  'galaga.html', 'qbert.html', 'missilecommand.html',
  'gorillas.html', 'scorchedearth.html', 'bomberman.html'
];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
// Network-first: always try fresh content, fall back to cache when offline
self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request).then(r => { if (r.ok && r.status === 200) { caches.open(CACHE).then(c => c.put(e.request, r.clone())).catch(() => {}); } return r; }).catch(() => caches.match(e.request))
));
