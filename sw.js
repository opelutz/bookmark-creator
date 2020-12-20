self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('PWA').then(function(cache) {
        return cache.addAll([
          '/bookmark-creator/',
          '/bookmark-creator/index.html',
          '/bookmark-creator/index.js',
          '/bookmark-creator/style.css'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });