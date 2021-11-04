'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f85f5bcaf1813a501923550c5d877a19",
"assets/assets/images/programmer.png": "e9eaec0b7752b61507392d064acaf666",
"assets/assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/assets/icons/ic_github.png": "1cbcb196ca48769a9a0bf28566c0b696",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "1d335d244d37b03a61ba4695d16acf0d",
"assets/FontManifest.json": "84b65288b758351321dc60b2eea1bf3c",
"assets/NOTICES": "e21529118f141ab91bcc0760700843c0",
"assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/icons/ic_github.png": "1cbcb196ca48769a9a0bf28566c0b696",
"assets/images/programmer.png": "e9eaec0b7752b61507392d064acaf666",
"index.html": "938b2ea7725bcc7a4d816f22fe1604ca",
"/": "938b2ea7725bcc7a4d816f22fe1604ca",
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
".git/refs/heads/master": "d75a3d05104dbfbf00e0d1292eab90fa",
".git/refs/remotes/origin/master": "e707791cd1a72d49c5aa910cc0ef460d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/f8/9d8252bf1986f9e2e7255ea9a08a5b62d731b1": "714c47ca2908ce2015f88306e3bd42ea",
".git/objects/93/5a21095502c2d12908be2e1ea75646a03d559a": "68b8798130a8f0199e57c9203c6cf428",
".git/objects/08/06aefa8690199a76a1462cf802a5db11e87813": "4f085b054c1d40d30827c8e98a043df7",
".git/objects/29/62af8f9e2e7db29034df37d5d2715d5b01e3c3": "7db02fc197e180a0cbdd88c159a8adf5",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/e1/88cd93b06f9449287338128ef44b932f8e183a": "3cade6da1c3b0706575b488e6a420983",
".git/objects/43/93193f2d17e6078b23745e7b102be9a11479af": "56d4eabd559b81aabff5854dcd3a1752",
".git/objects/43/30b6fac23aacc51644a3ed0583768397039336": "89a05ca85c5481f866abc0515b0a8356",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c0/ffc32c27f329ad1cd9d487d16857e753ee072f": "38abc1e7221d0b9c9af3c183e3c4efc4",
".git/objects/96/8b4cf77bb2503c5f2b51bd6f51da021ed3bac4": "f986703dec30cf5bd7a2c6155d063b8b",
".git/objects/c8/293f915b24a9bdf5d16f18a7b076c0346a0e6b": "1164fa537a3b9b574e24f7ba771c5c6f",
".git/objects/8f/53b90ed226069441a261a24be5a882fee773fb": "28dff707f4a9739d847b55739d234bbe",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/7e/ebfead8a54ca43f705a9a8afe3389d53f2512c": "fff9a4eef5acaf19684d5d11eb8d5329",
".git/objects/7e/de538245bafcc53d2e4e935a800ca5d3d0ece4": "8da577c0797ac91caa2ecbf4ec3e30a4",
".git/objects/26/9bdd3c8cf1db1644bd67791c22f5febcbce795": "d943197e4c94ac5e41e11fb011867d4e",
".git/objects/b5/164d770798d3d4ecabb6bf55ef45989a0adc53": "29ea0fc7676aa89ee99059b100f0d9ed",
".git/objects/a9/1e96b1738c91bf824c3a131e151f4167b0687f": "14a1366a98c0ac9cc296771d54aa4b42",
".git/objects/b1/1ae1ea12673795bbf4409cc64ae370cf42c863": "068d45b7502b965a84ebfde041bbaf65",
".git/objects/ff/54a11212283cd6e7ae3800de3ea90d0a131dc0": "52cd8d8a67cf8414f8e47698a1364f62",
".git/objects/e6/1a2fa38ddf03ef9ed0e57e245f22914832bfc5": "93120f62621d68b03b0f7c228cdb4fd1",
".git/objects/d4/6e60d9c32220a76020b4885bf6e5f11c69f576": "8f3ddf657e9425bbfd651e8396a2e91f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/8b893344d1920bc42c02c6428268edf85e803d": "a5bbc09473ab00ad5bf6a5c6499a3cf8",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/be/e9ac44af873db6c4f97e02fb302c72c024f64c": "3f7d1a149ba6acc3e6a5bdc76d0ba0a9",
".git/objects/59/bfd1cf138afc387d5b950e9c8407ec09f36b3a": "895ec49b6fd643d1e3228a477d12fe42",
".git/objects/34/5b41235a932c54762023d06bf32ef4efcadecc": "72182199d092abdddbff7f571149172a",
".git/objects/35/34ae551aadb353e2b4ee4b1a28148141416796": "d1147417a659c759817be36f5e07d058",
".git/objects/e5/eca128c9cf1e4fc2ef7300dfc5993bc465f29b": "52125c69feaf1bfa1ea217cf52d60152",
".git/objects/bc/599901eda105a153df640ff256323428c6a9eb": "0ba04171ca37b8a3fad4a45b941360dc",
".git/objects/91/3d5fa789549bacaee70f21d6f498e3f791cc95": "849c57e2316078be140cb8577e7a6a22",
".git/objects/2b/c26c2ba72017aef6205752fea8c65e6f8b59d5": "746b93280abb2c364ef95d0ed3a26766",
".git/COMMIT_EDITMSG": "f444febb91e42b987906d14c6db25603",
".git/logs/HEAD": "fcc3788badfcd71df1dd1e9513114a1f",
".git/logs/refs/heads/master": "fcc3788badfcd71df1dd1e9513114a1f",
".git/logs/refs/remotes/origin/master": "89bef060b4f2d2db19482650785d0816",
".git/config": "af96627658b2d2b7d61e0277556719f3",
".git/FETCH_HEAD": "8e326a9db47d04764f3ab350d4186842",
".git/index": "fb05ef5d8d600114a940eb25e887b47f",
"main.dart.js": "87dd8cd56e961911d6ba490aad60db79"
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
