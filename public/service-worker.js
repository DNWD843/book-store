const CACHE_NAME = 'book-store-cache-v1';
const OFFLINE_URL = '/offline.html';
const doCache = true;

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');

  // Delete old caches that are not our current one!
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys()
      .then(keyList => Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');

  event.waitUntil((async () => {
    if (doCache) {
      console.log('[ServiceWorker] Start caching');
      const cache = await caches.open(CACHE_NAME);
      const fetchedAssets = await fetch('asset-manifest.json');
      const assets = await fetchedAssets.json().then(assets => assets['files']);
      console.log('assets', assets);
      const urlsToCache = [
        '/',
        assets['main.js'],
        assets['main.css'],
        assets['static/media/login_ava.png'],
      ]
      await cache.addAll(urlsToCache)
      // Setting {cache: 'reload'} in the new request will ensure that the response
      // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
      await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
      console.log('[ServiceWorker] Successfully cached!');
    }
  })()
);

  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  if (doCache) {
    // console.log('[Service Worker] Fetch', event.request.url);

    if (event.request.mode === 'navigate') {
      event.respondWith((async () => {
        try {
          const responseFromCache = await caches.match(event.request);
          console.log('responseFromCache', responseFromCache);
          if (responseFromCache) {
            return responseFromCache;
          }

          return await fetch(event.request);
        } catch (error) {
          console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

          const cache = await caches.open(CACHE_NAME);
          return await cache.match(OFFLINE_URL);
        }
      })());
    }
  }
});
