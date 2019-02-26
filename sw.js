importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09430e0138db6c5180ad.js",
    "revision": "ddd1218263839b7db370221d8bfa1664"
  },
  {
    "url": "/_nuxt/2591a98be3fb9f632c51.js",
    "revision": "cba749b800ccc64b04dd3583ea56713b"
  },
  {
    "url": "/_nuxt/4fd02e5fac762858b905.js",
    "revision": "ac4e6f8e2aa9e075c89205cd8261f86e"
  },
  {
    "url": "/_nuxt/a242a195e5f777c66f33.js",
    "revision": "336217c47d01f25f5e645eef2482012c"
  },
  {
    "url": "/_nuxt/bfca507686e552a16da7.js",
    "revision": "7c3b8ae39dccbf0435dbc65ca0324f7b"
  },
  {
    "url": "/_nuxt/f57df6364fd5b3247896.js",
    "revision": "500da93dad9a2afc0f17e08b799dd8b9"
  }
], {
  "cacheId": "personal-web-v2",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
