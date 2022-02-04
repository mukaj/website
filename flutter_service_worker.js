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
".git/refs/heads/master": "66210590c9d1bf531afa80f82c6c1a5e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "66210590c9d1bf531afa80f82c6c1a5e",
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
".git/objects/ad/0f175dc259dbf6fcf6ac9ae885a2fd6743652d": "3ba9d4219813975b8d51f548dbcbfe9e",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/a3/00593fe88695921623d940dde2eda314ee3526": "10b65b625bca2c8b464f35e8bb231b8a",
".git/objects/97/64f9a22cd208f24428425b871a7f9635810163": "a3a99df800979f7906736b4311589617",
".git/objects/97/7e1617ed3efad0754e21d685fb58d975a30b86": "4d40da44cb0defab63cf0295a5347a8a",
".git/objects/97/de77362f81fa9eac1ee3588b067d34bc4fb80a": "671c229725552502d24c2454fa7d45ab",
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
".git/objects/81/7ac916663046fbe5d4fe7d0b72da10a644d7bc": "0fa95da9b78448f01f20515c5cefae3f",
".git/objects/f9/2fb9e47691c3bf0b532a89eb61be6cb56a7697": "f986909b9506ea64c58ab912f2807f70",
".git/objects/d0/b405ffbaa5f259be5f27206125a6217d375547": "7d3d1301ed64fdb2b4386da3e740bbb2",
".git/objects/8a/150178a2516978dd79ea4b4c5932dd840ec131": "0065633b5f85c1bf05b948340ba1b9d4",
".git/objects/7d/d2e2ece0d454b64b47d5205c3c392b109a3318": "431060602b4b7f1492174dc81346138c",
".git/objects/33/b82f666d3e6f78174c8f0a1baf2731a0e5f036": "63e7d1a198ec2d0830e5f665b2384b08",
".git/objects/b5/fea60fb7c5ee3e5f8f30df670b75e17f13b99d": "981931166908f5b93dddc5cf3ba4c6cd",
".git/objects/6c/5b06f89f2d444947297322d7ac97cd9c0e0cab": "25c9a5a0aafff9560ef5b47cdcd5e48f",
".git/objects/aa/d9e247e97c97ab21e350795c53b67c4ba13f62": "e9c627324f258c5c20650b0b606eae93",
".git/objects/78/999b5ffa086d2bf257e29af11f44b1e5b1e956": "c4834bbeb1d331d766ceb08e11a7651a",
".git/objects/93/7e266630427eaa562e9e46ef2f1a39247a3d21": "7060a7d737bbe92bb61bf23c0f691525",
".git/objects/30/c83def834fa8b359bff87193edcc0dbf1fe9ad": "1072888417c66f8b17f7c1ef28c4d55e",
".git/objects/02/a2d52bbe866fd9078290dc0d8a3bb1a2fd70d4": "e0f638f49f2bd08a7312c16b2c515b9b",
".git/objects/02/2ad0573229fa7f6dc7a2f305317338c2fd5257": "3b0d6c3180e8407ae727e9af193e6251",
".git/objects/af/79d5803ca496e7169b0fb9c54473c6d457b669": "3b34fcc78fd3143193fd256d05d1fd1f",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/b0/7c315089e629f1868632006666baeead15aebb": "32ba3c1afb4ee5a0031b0c37f143c626",
".git/objects/cf/753932ad641f54d32d6544c40301256a0c1877": "087f509e9ceb1fccd71e7647b3bb89db",
".git/objects/49/630f0568feb5474bddd0326e1f72a58692ca9e": "465017e29ddeac23aa767fc9f7182448",
".git/objects/82/0a8471dd0b5153412d53b1672017500dcb1f68": "955e9a9277f97ed9788fc492e780deee",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/6f/a356fafb8b6a3b11767ff51f662f081c2e2662": "2d80df5a112567a65e5d4a5fd4aab383",
".git/objects/4a/df08c16c877459286996f9f746d86409f03ad3": "9a2532e6b5c82228a3dd8453459fe559",
".git/objects/67/88c9a47524b5d86c4b25c20e63b9322cbee687": "12f413cc9bc5a822b857d152d37cd970",
".git/objects/13/a51c58922aa8ae5b1e5c53c9283dc3c629fa97": "e17e679ed0b22ba15c56dc9b3ee9c219",
".git/objects/17/558540567234235311511cd15ae2a428745dc6": "90b117fdcafe37ece657a860bbe74814",
".git/objects/9c/ce62de9dfd769747866cda9b350ec1702949bd": "a1130cc4df795205198b8df8753737e0",
".git/objects/bd/4999483c9e6f877b5edae2872e6deeb683738d": "6bcde577f3d32f1821a8b5293c306b64",
".git/objects/c9/a7323eb7605ece2dd7da910f4500357a76e4a4": "d54d6eff7eb666b79032a4af460cb016",
".git/logs/refs/remotes/origin/HEAD": "5fba89e179488633776ecf39943da018",
".git/logs/refs/remotes/origin/master": "00e1414b8e7cb30aeeaa0c30b8ae43cb",
".git/logs/refs/heads/master": "d649a47a1817a47d155e4650b441ce0a",
".git/logs/refs/heads/special": "62234d7a6fd8fc253a96094561138c42",
".git/logs/refs/stash": "54f0e0ac696ec7980f12372e34a66bb0",
".git/logs/HEAD": "d9a4d60f1ee99388bc18c2b6cf103d7e",
".git/FETCH_HEAD": "5738f95919cbf3c6762cbb40013127aa",
".git/COMMIT_EDITMSG": "68bac51cb2dd2bde52e6fc612893034c",
".git/ORIG_HEAD": "3483f1fed255f7c6bda3d666a25cde24",
".git/config": "1204f622446c00a86b4ad70546ed2260",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/packed-refs": "8a2fba962f3bd20dc51ce3e276dffa8e",
".git/index": "7a0056b9f1c0aa75b4811eb9782bdc63",
"CNAME": "7b002052fc8395e32b918502929c4d68",
"assets/AssetManifest.json": "aeed903d6f8e5a8b32ecaf3aa7e58aa4",
"assets/FontManifest.json": "84b65288b758351321dc60b2eea1bf3c",
"assets/NOTICES": "8dcd477128ae68a4bfe22e35d059676b",
"assets/assets/fonts/Nexa-Light.otf": "12108809f49c49bcdc126dcecc938761",
"assets/assets/fonts/Nexa-Bold.otf": "c9f309b3d47969ecac64a77a6c672594",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/Quicksand-Regular.otf": "3ce1580b66db6742cecd4b41519fb5f1",
"assets/assets/icons/ic_github.png": "1cbcb196ca48769a9a0bf28566c0b696",
"assets/assets/icons/ic_linkedIn.png": "5b5479e865a403692971bdf905e09998",
"assets/assets/images/programmer.png": "e9eaec0b7752b61507392d064acaf666",
"assets/assets/files/Resume.pdf": "2a34c5e7bbc1a1aee1d5bf3f560d126b",
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
"version.json": "1235ab7eca1a3fd4b110480ccff5828a",
"index.html": "3d46391fbc3a2e26f91d7a2a9fba9b20",
"/": "3d46391fbc3a2e26f91d7a2a9fba9b20",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"main.dart.js": "b764de9a6440d8a3b011103cd45848dc"
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
