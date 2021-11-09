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
".git/refs/heads/special": "2ae82781239170d6081e852fa70af7e0",
".git/refs/heads/master": "9688e16807eafe1a924e8f577d3cf20c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/special": "2ae82781239170d6081e852fa70af7e0",
".git/refs/remotes/origin/master": "9688e16807eafe1a924e8f577d3cf20c",
".git/refs/stash": "58093584fbbef3275818f131325d43b7",
".git/objects/pack/pack-2e43b98209c57b6f09bd2d256a67d1d60b789aa6.pack": "833b45b7e7edaa92589885cfeec3573c",
".git/objects/pack/pack-2e43b98209c57b6f09bd2d256a67d1d60b789aa6.idx": "6bbb50795a6c4402e431e274d3f5d368",
".git/objects/79/552c1cb0a02e29374deee25540d4bdc069c7c2": "c702e28c346eafaded28631343a93022",
".git/objects/f5/3e65289e7494d312b0b2f38f190d33ca0fd32a": "614a06040da5d61556f036dee8efa7c4",
".git/objects/f7/da81b1f7bdb763ea3b1e45b14531e971980c4f": "9e25a94fcf29e1afaf95b7de87f27cf5",
".git/objects/54/68218fef37bf58d41f94be38949584469e16ce": "335e8f3c67fa7dbfe4376e07d5009e7a",
".git/objects/54/aaa9b68e078b80a4dc8eb52815ffaf63e43382": "9396d5cc4111082630c2ca0234c37e04",
".git/objects/40/c408b0f749a0d5a97006e7c54e29221efb1c29": "4cb1bac6d0cc2618ff8323132e37df48",
".git/objects/c7/696bdd2aaab141ea92d682ac79c602a30e710c": "b011e232b307cf7597414781d2b60575",
".git/objects/ad/7364f3eb09d273ef8bee323bf2a35143970649": "d56b1c35bc42d574cbefc779592724fc",
".git/objects/a3/00593fe88695921623d940dde2eda314ee3526": "10b65b625bca2c8b464f35e8bb231b8a",
".git/objects/97/64f9a22cd208f24428425b871a7f9635810163": "a3a99df800979f7906736b4311589617",
".git/objects/97/7e1617ed3efad0754e21d685fb58d975a30b86": "4d40da44cb0defab63cf0295a5347a8a",
".git/objects/16/56a7e8d2b75299fe7aaf726d721d1438779ab5": "e84cbbc2aa88909224283df8462ec9f7",
".git/objects/28/860e139315b5ca24d064d71b7211ab2970a6ae": "d47a1ed28f088b38ad349f5c5e2c672d",
".git/objects/58/03b148e64c3a5131f22635f7ba803f65f3760d": "a7c058876eaa6001eebd6327d5836452",
".git/objects/51/2731373145fc57a836e26f5404d35e5cd7bb28": "a2e55d93e64bcd12c0492cf88e39f793",
".git/objects/2e/acd5f5150d228c3bbbc53654332534dd5e2032": "f4ae4a0c20ac4655c8374a5303b4ad00",
".git/objects/5d/dff47008cd5801b1a823ac43711be53861e3c6": "2d2658b5200697cb2c38b32c64fed2ca",
".git/objects/11/bb5d9a94f99a250214d9a8bd7c2fdd0c21cddc": "faca33659b96d6799eaa37538ce24fa4",
".git/objects/83/6b530a25e7a8b38618bc5b3cf506d2f37c9caa": "7983a1e2153fe14200df2ec4d33ce94e",
".git/objects/83/14cd748b2c375f679c5199036ec0194e8c2df3": "7a99cf37b2a799476d3e66886f09278c",
".git/objects/20/df68d1cd4e3e0f43ffc175072ca61424062c5a": "30f0acede45a69944b206d24aa0b48a5",
".git/objects/7e/93e0b4bb612aee40c5ef0c3a54b90e4c2252f7": "50cfa7f08a40ddc74d774c94a2694c3f",
".git/objects/69/ea058ad86a1d69c856be83a8d979617cb10165": "810be7abdb9e8256abe8bb563a3662d2",
".git/objects/8d/1d874f0061d909d304b2262dcf979db11fc1d5": "0fd3512cc6f5805e3968553b8326c93a",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/d1/e2e8e550148580d73fa1f81af39fc6d3dab623": "fed6727397e7ca695132b7b30b66ffa5",
".git/objects/25/1a811dc52ce43f6b0a92a05955a63be956d7a8": "83805e8dac45016c4c96df40661d1568",
".git/objects/70/9b2840a31979dac8cf38cb597938812eda59c5": "76924e67481e2fb50f4b90d3710bc535",
".git/objects/24/504e1f89d2023a9d5631682abdc5ec83a91fe0": "29ea1e1d2e9e7d758fcfc2e6cc20040c",
".git/objects/81/4be4f7963305e148296a948766ef98877c5ebc": "6529108351958d28660de9b8f1acff85",
".git/objects/f9/2fb9e47691c3bf0b532a89eb61be6cb56a7697": "f986909b9506ea64c58ab912f2807f70",
".git/logs/refs/remotes/origin/HEAD": "5fba89e179488633776ecf39943da018",
".git/logs/refs/remotes/origin/master": "7c167db049dbe325b4ee389232566e71",
".git/logs/refs/remotes/origin/special": "70f3478d2f6ab8605224eac5c7643cf4",
".git/logs/refs/heads/master": "421b89c78924548b886bb403b9f6b552",
".git/logs/refs/heads/special": "62234d7a6fd8fc253a96094561138c42",
".git/logs/refs/stash": "54f0e0ac696ec7980f12372e34a66bb0",
".git/logs/HEAD": "458d8aff513bbebfb872fe14bb07f8d0",
".git/FETCH_HEAD": "0831e593d52b776aa26939d94ba1eac4",
".git/COMMIT_EDITMSG": "ebff698ce7bb8f7268b4c86eff68ed7d",
".git/ORIG_HEAD": "3483f1fed255f7c6bda3d666a25cde24",
".git/config": "1204f622446c00a86b4ad70546ed2260",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/packed-refs": "8a2fba962f3bd20dc51ce3e276dffa8e",
".git/index": "c2cb31b9e087b047c212379c5bade593",
"CNAME": "7b002052fc8395e32b918502929c4d68",
"assets/AssetManifest.json": "aeed903d6f8e5a8b32ecaf3aa7e58aa4",
"assets/FontManifest.json": "84b65288b758351321dc60b2eea1bf3c",
"assets/NOTICES": "e21529118f141ab91bcc0760700843c0",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/icons/ic_github.png": "1cbcb196ca48769a9a0bf28566c0b696",
"assets/assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/assets/images/programmer.png": "e9eaec0b7752b61507392d064acaf666",
"assets/assets/files/Resume.pdf": "6d42f7781e3f8c8549ce91914c74f9c5",
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
"version.json": "f85f5bcaf1813a501923550c5d877a19",
"index.html": "3d46391fbc3a2e26f91d7a2a9fba9b20",
"/": "3d46391fbc3a2e26f91d7a2a9fba9b20",
"main.dart.js": "c2f18972063fbb6155d95936e99ca57e"
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
