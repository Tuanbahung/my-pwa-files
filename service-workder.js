function getServiceWorker() {
  var serviceWorkerCode = `
    self.addEventListener('install', function(event) {
      event.waitUntil(
        caches.open('v1').then(function(cache) {
          return cache.addAll([
            '/',
            '/index.html',
            // Thêm các tệp cần thiết khác
          ]);
        })
      );
    });

    self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
      );
    });
  `;
  return serviceWorkerCode;
}
