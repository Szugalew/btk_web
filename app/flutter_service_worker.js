'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1d77b10ede6de039f32c62a11093f33c",
"version.json": "18215e9a678938a94038cae2e8a928a9",
"index.html": "fdd2f53e3e914fc7800bd0ba88783139",
"/": "fdd2f53e3e914fc7800bd0ba88783139",
"main.dart.js": "d0dd293dbefb174ae541d443dc04a1e6",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0433bd1d8eb4038482e8bcebe9d7447d",
"assets/AssetManifest.json": "54af0b6fecb85618a97fd14250d62f37",
"assets/NOTICES": "217bb67dd26868745b014b9b181108e4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6b73da05426dd7746dbd808d30277824",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b15d887185f9fa09c7c09c4f09c8eac9",
"assets/fonts/MaterialIcons-Regular.otf": "28f866b4545b8699e5271b8cd67d7b22",
"assets/assets/images/triangle.svg": "8b8a6f8aa86ac5786b069aa06af1ce27",
"assets/assets/images/logo_with_text.png": "2152aa0d41726384e935d25537b4121d",
"assets/assets/images/crumpled_paper_bg.jpg": "bdc922c1e4478a3dcaf37123e86d8069",
"assets/assets/images/circle.svg": "6ca04b2877fabcc45ae21fd831bd56c7",
"assets/assets/images/rectangle.svg": "a03b3ab1c7cbfe88f996f83b78ae9768",
"assets/assets/images/hexagon.svg": "40b317faf426f6da87afc8b88b6bfb03",
"assets/assets/images/troxler_circle.png": "9d3d0784addec8baefa7c160a6790291",
"assets/assets/images/backgrounds/paper.jpg": "a1b0137c83d4d7c329311c2c3a3b39bb",
"assets/assets/images/backgrounds/paper2.jpg": "f67852aa30bcc1349eac8136e2e570f6",
"assets/assets/images/backgrounds/4.png": "d808fef0da889f09742d3a074f356bc5",
"assets/assets/images/backgrounds/5.png": "043fdf84762345dffceec19caa20bffc",
"assets/assets/images/backgrounds/6.png": "a06a3248f173f51bcbbcdd434a1de129",
"assets/assets/images/backgrounds/2.png": "9f2b8c116b0e9a7ab9387ec7c9a42b1f",
"assets/assets/images/backgrounds/3.png": "374344147cff8606f835d752944d8570",
"assets/assets/images/backgrounds/1.png": "fed31b7cbd7cf4eba30aa0907b9e7a20",
"assets/assets/images/backgrounds/0.png": "88e51de328ea011977b7d2e882ef54be",
"assets/assets/images/square.svg": "fe2fe39f98a8ae27c9210d1f3777f886",
"assets/assets/images/diamond.svg": "0f6dde3c73e26d5016f139488da2acde",
"assets/assets/images/homescreen_background.jpg": "2022001e1c8b7b45d98b94199015c1b9",
"assets/assets/images/pentagon.svg": "0af35e9ed4533eac20515fae00ac2cef",
"assets/assets/videos/backgrounds/4.mp4": "5ab55cfffca00e7deef6e8eddc3d32fc",
"assets/assets/videos/backgrounds/5.mp4": "6881dbe2b0bef830582789ba11d5e818",
"assets/assets/videos/backgrounds/1.mp4": "e7f4ffbeacd064f8282efdcffd3da513",
"assets/assets/videos/backgrounds/2.mp4": "4bc014b520278bc46cf6ed95d53844da",
"assets/assets/videos/backgrounds/3.mp4": "c076ccc851acb40fe39b72fd3b4503c1",
"assets/assets/icons/home/oculomotor_vestibular.svg": "583e4b2798937426adee4e7da68277f7",
"assets/assets/icons/home/top_background.svg": "28386c616d50f15c7aa09f0209fa7dec",
"assets/assets/icons/home/cognitive.svg": "2c55a55f092f79f6af33a8d351b148ab",
"assets/assets/icons/home/logo.svg": "a3872e20b08c91098fdbe36260feac99",
"assets/assets/icons/home/assessment.svg": "dcbdd90cef4a9963b8fd7edce048584c",
"assets/assets/icons/footer/Settings%2520Gear%2520Icon.svg": "c1ed9918ed7edbfa5fd430e995b1e7a8",
"assets/assets/icons/footer/Questions.svg": "6e28b5d973610f4a0008c7d79fcb2789",
"assets/assets/icons/footer/Home.svg": "59b96dd93b4d6b18eb9da658d62fb5d6",
"assets/assets/icons/footer/Info%2520Icon.svg": "ef7711e6c6bced57869d9203e4c953a6",
"assets/assets/icons/footer/Arrow%2520-%2520Dark%2520Blue.svg": "3f0332b227feece743f18978f31c0e49",
"assets/assets/icons/footer/Disclaimer.svg": "7627d3571a99fdcb7eb1ac28bd38c5f9",
"assets/assets/icons/footer/Back%2520Arrow%2520-%2520White.svg": "ea11a1d4196dcf7435efda4451a9575f",
"assets/assets/icons/footer/Log.svg": "455b441da22f144b0c8d3555fa140a67",
"assets/assets/icons/cognitive/Concentration.svg": "ca98d57ab1225dfb9fe9db553f098310",
"assets/assets/icons/cognitive/Match%2520It.svg": "e758efea7e0aa4b80360dcf7def0f98b",
"assets/assets/icons/cognitive/Recall.svg": "f8059b49cf12c7a81e4e94c775d7d7de",
"assets/assets/icons/cognitive/Memory.svg": "3d1bbaf08b09fde47cf194ceaea18145",
"assets/assets/icons/cognitive/Stroop.svg": "9cbf91afa2d91305363a346469878871",
"assets/assets/icons/cognitive/Alphabet.svg": "05fd7ab249c8eafa37fafe76e2ac1a0c",
"assets/assets/icons/oculomotor_vestibular/OPK.svg": "b4e14c36533e3a672f7be676f206f533",
"assets/assets/icons/oculomotor_vestibular/Hemistim.svg": "09be748aaa491efdac89bc4b3a08a434",
"assets/assets/icons/oculomotor_vestibular/Saccades.svg": "8f61e5ad9bf9e7fe6a995a4e64471107",
"assets/assets/icons/oculomotor_vestibular/Gaze%2520Stability.svg": "b9e943c705776744cf911d50e974f39a",
"assets/assets/icons/oculomotor_vestibular/Optic%2520Pursuit.svg": "53a723270d4df0e67519392110cd1dbc",
"assets/assets/icons/oculomotor_vestibular/Pursuit.svg": "3f4894e1060f1ec4efe8f2a106c999f8",
"assets/assets/icons/assessment/visual_analogue/8.png": "08e89ca0040aa08cadd2c8822a717adf",
"assets/assets/icons/assessment/visual_analogue/10.png": "dcebca8265a47fff54ce8ada11bf1029",
"assets/assets/icons/assessment/visual_analogue/4.png": "aab91a82a63c3350d48aff1f625be92c",
"assets/assets/icons/assessment/visual_analogue/6.png": "552733df732f6f143286d5932926fb02",
"assets/assets/icons/assessment/visual_analogue/2.png": "df681839e5d2d48f43fe794e99d0bbef",
"assets/assets/icons/assessment/visual_analogue/0.png": "fc00dcd1aac0b0d90c869edddbd12ef9",
"assets/assets/icons/assessment/Subjective%2520Visual%2520Vertical.svg": "a71bf17d1fc73bf368cf2e4f7203e133",
"assets/assets/icons/assessment/Symptom%2520Scale.svg": "47f62afd571cd807e92a9a767ae9ca5a",
"assets/assets/clickSound.mp3": "99d1ba053960b2821f35935ebde74475",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
