'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "7d17404d71ac1d87d3c42c01a07fc7a6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/objects/pack/pack-2e43b98209c57b6f09bd2d256a67d1d60b789aa6.pack": "833b45b7e7edaa92589885cfeec3573c",
".git/objects/pack/pack-2e43b98209c57b6f09bd2d256a67d1d60b789aa6.idx": "6bbb50795a6c4402e431e274d3f5d368",
".git/packed-refs": "0ae6d728a786bda760b38a214b3ea04e",
".git/logs/refs/remotes/origin/HEAD": "5fba89e179488633776ecf39943da018",
".git/logs/refs/heads/master": "5fba89e179488633776ecf39943da018",
".git/logs/HEAD": "5fba89e179488633776ecf39943da018",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "86c697da9484d72f9957219477f3b591",
".git/index": "be726d207011a7a813218fc3864f63d4",
"CNAME": "7b002052fc8395e32b918502929c4d68",
"assets/AssetManifest.json": "aeed903d6f8e5a8b32ecaf3aa7e58aa4",
"assets/FontManifest.json": "84b65288b758351321dc60b2eea1bf3c",
"assets/NOTICES": "e21529118f141ab91bcc0760700843c0",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/icons/ic_github.png": "1cbcb196ca48769a9a0bf28566c0b696",
"assets/assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/assets/images/programmer.png": "e9eaec0b7752b61507392d064acaf666",
"assets/assets/files/Resume.pdf": "1f87de6f8bc9d6bd8761c977d73911a6",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/icons/ic_github.png": "1cbcb196ca48769a9a0bf28566c0b696",
"assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/images/programmer.png": "e9eaec0b7752b61507392d064acaf666",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "cbb5e4b8b342919f1373896ab76e6079",
"/": "cbb5e4b8b342919f1373896ab76e6079",
"version.json": "f85f5bcaf1813a501923550c5d877a19",
"main.dart.js": "aede8550696d62bb7657eabf9386d645"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
