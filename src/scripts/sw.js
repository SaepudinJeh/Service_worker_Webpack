self.addEventListener("install", () => {
    console.log("Installing Service Worker ...");
});

self.addEventListener("activate", () => {
    console.log("Activating Service Worker ...");
});

self.addEventListener("fetch", (event) => {
    console.log(event.request);

    event.respondWith(fetch(event.request));
});