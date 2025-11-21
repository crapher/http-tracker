// MV3 service worker
// We import the existing logic. Note: these scripts were lightly patched for MV3.
importScripts(
  "/src/js/httpTrackerConstants.js",
  "/src/js/httpTrackerUtils.js",
  "/src/js/httpTrackerOpen.js",
  "/src/js/httpTrackerDomEvents.js",
  "/src/js/httpTrackerProcessor.js"
);

// Keep the service worker alive when needed by using event listeners that Chrome will spin up as requests occur.
// No additional code is strictly required here because httpTrackerDomEvents registers all listeners at import time.
self.addEventListener('install', () => { /* no-op */ });
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});