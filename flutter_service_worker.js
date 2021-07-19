'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f77bb2c1b306a9a160d0846c70055c0b",
"assets/assets/fonts/SofiaPro.otf": "a7a07e7f06f7f684948562bb2e7d1cbd",
"assets/assets/fonts/SofiaProBold.otf": "6387f57283edec714960cf5a1a0ae0e5",
"assets/assets/images/account.png": "d6220d1a0c0d5749e2d2b7b923e3b6e2",
"assets/assets/images/arrow_down.png": "f1621d544c2a24db6a3bd1b33381bb97",
"assets/assets/images/arrow_down2.png": "dfa10955bbc689821a94b9dd6588b4fb",
"assets/assets/images/bg.png": "a572e14458d7873278be3de9749a3aa3",
"assets/assets/images/burger.png": "7865050b1c6d89f6df5e82a9079b0ea6",
"assets/assets/images/burger2.png": "ec59f7ecbfbd9037fa6bcc4027839185",
"assets/assets/images/cancelled.png": "b3fdbaf377c061860d5124ed3ccd358c",
"assets/assets/images/change_image.png": "3cfcdc9d3e4620c6302ee07a8ad6b7bb",
"assets/assets/images/chat.png": "a5bce38e245797ad673c0176753e2f98",
"assets/assets/images/chickenR.png": "c4ab5a5c286728f8a23febff3fe5846a",
"assets/assets/images/close.png": "cb565c9e3bbd781e01842914f8c5e98c",
"assets/assets/images/dashboard.png": "b86b132c75a7624b77c10de29696ad4f",
"assets/assets/images/date.png": "2d7ea820db29dca805649561e8382748",
"assets/assets/images/delete.png": "6f0deb4549469527c0e55b56187e6afd",
"assets/assets/images/delivered.png": "5f458b2876e16445b0382241b130a4e5",
"assets/assets/images/deliveredC.png": "2e1aa389132a4d888b6510c37fa9fdc0",
"assets/assets/images/dough.png": "121c91e89a49c072c73b3edf8edce2e1",
"assets/assets/images/download.png": "3d4bf83df9006e8c1573297343b0f168",
"assets/assets/images/earningC.png": "077d6abe06dec6852f6ad5ff6fa89b08",
"assets/assets/images/edit.png": "2e73444b6de0b3db2423fd8378f8cd68",
"assets/assets/images/edit_image.png": "f9b979625328118ccfa99234cd64c315",
"assets/assets/images/error.png": "34a3c86257800bf5e90595c112370b19",
"assets/assets/images/exclaim.png": "44130c48cd32c732a8b343f5a8d736dc",
"assets/assets/images/foodgital.png": "4198e4f094583f7697c289bc756e9528",
"assets/assets/images/image.png": "0e007d0020b5d2937a87880bd411e82a",
"assets/assets/images/joel_becker.png": "ddf80415146b1b281a9555f9206df5f7",
"assets/assets/images/joel_becker2.png": "b1a791222f1130d98220614b08b6aeee",
"assets/assets/images/kfc.png": "7032a5d822bb9aec086bfa0415288419",
"assets/assets/images/logo.png": "72f0d137ab5835ad9bb994b37c73db1f",
"assets/assets/images/logout.png": "cc9c60394ee1827a0f873aa305c7007b",
"assets/assets/images/manage_delivery.png": "bd2fb61b370889ac45938cfc12cf2da2",
"assets/assets/images/manage_order.png": "2438fc70773e57d12a53c9fdcb12aec5",
"assets/assets/images/manage_vendor.png": "4719c6859d1794e39228639db508a3a6",
"assets/assets/images/menu.png": "99d062b53ce749a93d45380f9ca3d8cd",
"assets/assets/images/menu_edit.png": "70f9dd393d670c30dfed0873f771f1cb",
"assets/assets/images/menu_logout.png": "7029b4849af84d7bba6f1e89829d5d9c",
"assets/assets/images/menu_settings.png": "77d017f238e74305aae94f7593c6b44f",
"assets/assets/images/message.png": "3c67b9067fe9f111c98f030f18aee035",
"assets/assets/images/monitor.png": "59e50d8f65e2a23438af704f6773936a",
"assets/assets/images/noti.png": "8f6590d939e0dd55b32227769b6e4d81",
"assets/assets/images/notification.png": "c1884500afc7d688aa9972584fe2a859",
"assets/assets/images/pepperoni.png": "f9e1b8e9d30a4da7f013997ca683cafa",
"assets/assets/images/processing.png": "753dad0b863968bb5bbe048b58507877",
"assets/assets/images/promotion.png": "103af77885293422185313298b00bb65",
"assets/assets/images/received.png": "b69d2dbf0763b3d5dd3136c6c55557b6",
"assets/assets/images/report.png": "7e5d42795fd5f93ebaaf20a3b3eb7573",
"assets/assets/images/reportC.png": "077d6abe06dec6852f6ad5ff6fa89b08",
"assets/assets/images/search.png": "c35d5b226194ecfd59f8296e3afaedd4",
"assets/assets/images/settings.png": "26ad4410252111bd93398cdd9463d5d5",
"assets/assets/images/star.png": "44d71e0e9f745b4dfb0a7001317eb1f0",
"assets/assets/images/sub_admin.png": "db01ed81be0d008903fd4f3fa5c87ef4",
"assets/assets/images/upload_image.png": "4fb0dbcd81df69135e3d135a36d1d967",
"assets/assets/images/user.png": "ca86e1c618556ae6f278d14b5199b503",
"assets/assets/images/user1.png": "d7cf1b5e011b899bec881f50ebc06f97",
"assets/assets/images/user10.png": "f9789edfe2a8f35b71f353badc3436ba",
"assets/assets/images/user2.png": "f4a86512b37eed6ac8ac066ce4da6abf",
"assets/assets/images/user3.png": "7ac3d3d1f5e709a6f1959a943bbc569e",
"assets/assets/images/user4.png": "6cdfcf1f6b497cb0060195eb5744f656",
"assets/assets/images/user5.png": "bf310dbb4e2828ed2fb5d1a8cbc3a9ec",
"assets/assets/images/user6.png": "f9789edfe2a8f35b71f353badc3436ba",
"assets/assets/images/user7.png": "7a10b5f4d1860264d37fe8ee0620f5d5",
"assets/assets/images/user8.png": "20ff8ec96f5aed5f650af3e5ab70691d",
"assets/assets/images/user9.png": "553df6d443cf8b49e515107faa1f9ca6",
"assets/assets/images/userC.png": "a4e1cbf828ba1051cf266784a84643d8",
"assets/assets/images/vendorC.png": "a73389f4b3a3527d5a56e54578515e0a",
"assets/assets/images/view.png": "c810ba6664e98397b1365713849963b6",
"assets/FontManifest.json": "2910f95447cace10b61058f1b1a70700",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "970747d199b639179122808ddf366279",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "43a47ccd5d0a3bac1cdf04d2eb1be822",
"/": "43a47ccd5d0a3bac1cdf04d2eb1be822",
"main.dart.js": "584c8d5ccf2b248ae336ff7991785138",
"manifest.json": "091fbee0546494ad966a78462f41e4fc",
"version.json": "1e781da3636b3a40ff8b6bd14067bf9e"
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
