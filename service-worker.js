// service-worker.js - Corregido para GitHub Pages (rutas relativas)
const CACHE_NAME = 'taller-tools-v3';
const urlsToCache = [
  './',
  './index.html',
  './admin.html',
  './mis-herramientas.html',
  './firebase-config.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache abierto');
      // Usar addAll con manejo de errores individual
      return Promise.allSettled(
        urlsToCache.map(url => cache.add(url).catch(err => console.warn('No se pudo cachear:', url, err)))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // No interceptar peticiones a Firebase o APIs externas
  if (event.request.url.includes('firebase') || 
      event.request.url.includes('googleapis') ||
      event.request.url.includes('gstatic')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      
      return fetch(event.request).then(fetchResponse => {
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
          return fetchResponse;
        }
        const responseToCache = fetchResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        return fetchResponse;
      }).catch(() => {
        // Si falla la red y no hay cache, devolver página offline básica
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
