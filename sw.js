// کش خیلی ساده برای PWA
const CACHE = "ai-playlist-v1";
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      "/", "/index.html", "/manifest.webmanifest"
      // اگر آیکون گذاشتی: "/icon-192.png", "/icon-512.png"
    ]))
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
