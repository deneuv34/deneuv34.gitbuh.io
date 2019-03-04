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
    "url": "/_nuxt/316ae566c9473a81f95c.js",
    "revision": "e2f78b2b20484547b24de63935203e06"
  },
  {
    "url": "/_nuxt/647e888be0492967f375.js",
    "revision": "3e225efcca3a8fc46e46eca155d01ee1"
  },
  {
    "url": "/_nuxt/699ac5dd17f990fcd698.js",
    "revision": "ca42a8e467ba618a3a49da278c124e7b"
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
