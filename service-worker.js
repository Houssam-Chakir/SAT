/// <reference lib="webworker" />

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('Clarify-app-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        './src/images/icon.png',
        './src/images/icon2.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
