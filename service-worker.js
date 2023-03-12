var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/main.css',

        './assets/css/fontawesome-all.min.css',

        './assets/js/breakpoints.min.js',

        './assets/js/browser.min.js',

        './assets/js/jquery.min.js',

        './assets/js/main.js',

        './assets/js/util.js',

        './images/favicon.png',
        './images/android/android-launchericon-512-512.png',
        './images/android/android-launchericon-48-48.png',
        './images/android/android-launchericon-72-72.png',
        './images/android/android-launchericon-96-96.png',
        './images/android/android-launchericon-144-144.png',
        './images/android/android-launchericon-192-192.png',
        './images/ios/16.png',
        './images/ios/20.png',
        './images/ios/19.png',
        './images/ios/32.png',
        './images/ios/40.png',
        './images/ios/50.png',
        './images/ios/57.png',
        './images/ios/58.png',
        './images/ios/60.png',
        './images/ios/64.png',
        './images/ios/72.png',
        './images/ios/76.png',
        './images/ios/80.png',
        './images/ios/87.png',
        './images/ios/100.png',
        './images/ios/114.png',
        './images/ios/120.png',
        './images/ios/128.png',
        './images/ios/144.png',
        './images/ios/152.png',
        './images/ios/167.png',
        './images/ios/180.png',
        './images/ios/192.png',
        './images/ios/256.png',
        './images/ios/512.png',
        './images/ios/1024.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});