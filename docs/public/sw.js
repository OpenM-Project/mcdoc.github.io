const CACHE_VERSION = 'mcdoc-v1'
const PAGE_CACHE = `${CACHE_VERSION}-pages`
const ASSET_CACHE = `${CACHE_VERSION}-assets`

const OFFLINE_URL = '/offline.html'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PAGE_CACHE).then((cache) => cache.addAll([
      OFFLINE_URL,
      '/',
      '/favicon.ico',
    ])).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.filter((k) => !k.startsWith(CACHE_VERSION)).map((k) => caches.delete(k)))
      await self.clients.claim()
      // notify clients that an update is ready
      const clients = await self.clients.matchAll({ type: 'window' })
      for (const client of clients) {
        client.postMessage({ type: 'SW_READY' })
      }
    })()
  )
})

function isAssetRequest(request) {
  const url = new URL(request.url)
  const ext = url.pathname.split('.').pop()?.toLowerCase()
  const assetExts = ['js','css','png','jpg','jpeg','webp','svg','gif','woff','woff2','ttf','eot']
  return assetExts.includes(ext || '') || ['script','style','image','font'].includes(request.destination)
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  // Navigation requests: network-first with offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request)
          const cache = await caches.open(PAGE_CACHE)
          cache.put(request, fresh.clone())
          return fresh
        } catch (err) {
          const cache = await caches.open(PAGE_CACHE)
          const cached = await cache.match(request)
          return cached || cache.match(OFFLINE_URL)
        }
      })()
    )
    return
  }

  // Static assets: cache-first
  if (isAssetRequest(request)) {
    event.respondWith(
      caches.open(ASSET_CACHE).then(async (cache) => {
        const cached = await cache.match(request)
        if (cached) return cached
        const resp = await fetch(request)
        if (resp.ok) cache.put(request, resp.clone())
        return resp
      })
    )
    return
  }

  // Other GET: stale-while-revalidate
  event.respondWith(
    caches.open(PAGE_CACHE).then(async (cache) => {
      const cached = await cache.match(request)
      const networkPromise = fetch(request).then((resp) => {
        if (resp.ok) cache.put(request, resp.clone())
        return resp
      }).catch(() => undefined)
      return cached || networkPromise || caches.match(OFFLINE_URL)
    })
  )
})

