let CACHE_DYNAMIC_NAME = "dynamic-v1.10.6";

const EXCLUDED_URLS = ["/sitemap.xml", "/robots.txt"];

self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ....", event);
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating Service Worker ....", event);
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== CACHE_DYNAMIC_NAME) {
            console.log("[Service Worker] Removing old cache.", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

// Lắng nghe message từ client
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    console.log(
      "[Service Worker] Nhận yêu cầu skipWaiting, kích hoạt SW mới ngay !"
    );
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);

  if (requestUrl.protocol !== "http:" && requestUrl.protocol !== "https:") {
    return;
  }

  // Loại trừ sitemap & robots
  if (EXCLUDED_URLS.includes(requestUrl.pathname)) {
    return; // để browser fetch trực tiếp từ network
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (res) {
            return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    })
  );
});
