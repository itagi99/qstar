self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('qrupi-store').then(function(cache) {
      return cache.addAll([
        '/qstar/',
        '/qstar/index.html',
        '/qstar/manifest.json'
        // add more if needed (like logo file: '/qstar/logo192.png')
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
