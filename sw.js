var CACHE_NAME = "tingster-v1";
var urlsToCache = [
  "/",
  "dist/24712f6c47821394fba7942fbb52c3b2.ttf",
  "dist/2c2ae068be3b089e0a5b59abb1831550.eot",
  "dist/621bd386841f74e0053cb8e67f8a0604.svg",
  "dist/89889688147bd7575d6327160d64e760.svg",
  "dist/c485985e2c7975660cbb0c250107a634.svg",
  "dist/bundle.js",
  "dist/libs.js",
  "dist/main.css",
  "img/loader.gif",
  "img/person-img.jpeg",
  "index.html",
  "404.html",
  "post.html",
  "bootstrap/css/bootstrap-theme.css",
  "bootstrap/css/bootstrap-theme.css.map",
  "bootstrap/css/bootstrap-theme.min.css",
  "bootstrap/css/bootstrap.css",
  "bootstrap/css/bootstrap.css.map",
  "bootstrap/css/bootstrap.min.css",
  "bootstrap/fonts/glyphicons-halflings-regular.eot",
  "bootstrap/fonts/glyphicons-halflings-regular.svg",
  "bootstrap/fonts/glyphicons-halflings-regular.ttf",
  "bootstrap/fonts/glyphicons-halflings-regular.woff",
  "bootstrap/fonts/glyphicons-halflings-regular.woff2",
  "bootstrap/js/bootstrap.js",
  "bootstrap/js/bootstrap.min.js",
  "bootstrap/js/npm.js",
  "api/api/feed-1.json",
  "api/api/feed-2.json",
  "api/api/feed-3.json",
  "api/api/feed-4.json",
  "api/api/feed-5.json",
  "api/api/feed-6.json",
  "api/api/feed-7.json",
  "api/api/feed-8.json",
  "api/api/feed-9.json",
  "api/api/feed-10.json",
  "api/api/feed-11.json",
  "api/api/feed-12.json",
  "api/api/feed-13.json",
  "api/api/feed-14.json"
];

self.addEventListener("install", function(event) {
  console.log("installing");
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache).then(function() {
        console.log("All resources have been fetched and cached.");
      });
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});