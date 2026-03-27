const cacheName = 'cuaderno-v1';
const staticAssets = ['./', './index.html', './manifest.json'];

self.addEventListener('install', async () => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

