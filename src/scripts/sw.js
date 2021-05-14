self.addEventListener("install", () => {
    console.log("Installing service worker ....", event);

});

self.addEventListener("activate", () => {
    console.log("Activating service worker ...");
});

self.addEventListener("fetch", (event) => {
    console.log(event.request);
   
    event.respondWith(fetch(event.request));
    // TODO: Add/get fetch request to/from caches
  });