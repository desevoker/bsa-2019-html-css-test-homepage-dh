/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/apple-touch-icon.png",
    "revision": "99cb48339ff6bf44f58c8e89066bd4bd"
  },
  {
    "url": "assets/images/avatar.png",
    "revision": "df1f8d3941561712e679c1384320ee81"
  },
  {
    "url": "assets/images/favicon-192x192.png",
    "revision": "5ffe5ad58ca3b2aae1054344fe16bd26"
  },
  {
    "url": "assets/images/favicon-512x512.png",
    "revision": "a091e5b5ad96236a52efba6a846b0ad9"
  },
  {
    "url": "assets/stylesheets/base.css",
    "revision": "040d9089272219f12a437b67c936342e"
  },
  {
    "url": "favicon.ico",
    "revision": "6e38e3ce4ee0a25b0a65bbdc530c6148"
  },
  {
    "url": "index.html",
    "revision": "8b2b1855bc089338a18e6c44fb7a49ae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
