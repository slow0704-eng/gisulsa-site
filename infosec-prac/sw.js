/* 학습·퀴즈 사이트 공용 서비스 워커 — 오프라인 학습 지원
 * ★ 원본은 CPPG_2026/학습사이트/sw.js 다. 각 사이트의 deploy.py 가 index.html 과 함께 동기화한다.
 *
 * 전략
 *   1) 페이지 내비게이션 : network-first → 오프라인이면 캐시 index 폴백
 *   2) 동일 출처 정적자원 : stale-while-revalidate (배포 직후에도 다음 방문에 자동 갱신)
 *   3) 교차 출처(CDN)   : cache-first (Excel 내보내기용 SheetJS 등)
 * 강제 초기화가 필요하면 VERSION 을 올린다. 사이트마다 경로(scope)가 달라 캐시도 분리된다.
 */
const VERSION = 'study-v1';
const SHELL = VERSION + '-shell';
const RUNTIME = VERSION + '-runtime';
const CORE = ['./', 'index.html', 'data.js', 'manifest.webmanifest', 'icon.svg'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(SHELL)
      /* 하나라도 실패하면 설치가 통째로 깨지므로 개별로 담는다 */
      .then(function (c) { return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k !== SHELL && k !== RUNTIME;
      }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function putShell(req, res) {
  if (res && res.status === 200 && res.type === 'basic') {
    var cp = res.clone();
    caches.open(SHELL).then(function (c) { c.put(req, cp); });
  }
  return res;
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) { return putShell(req, res); })
        .catch(function () {
          return caches.match(req).then(function (r) {
            return r || caches.match('index.html') || caches.match('./');
          });
        })
    );
    return;
  }

  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then(function (cached) {
        var net = fetch(req).then(function (res) { return putShell(req, res); })
          .catch(function () { return cached; });
        return cached || net;
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (cached) {
      return cached || fetch(req).then(function (res) {
        var cp = res.clone();
        caches.open(RUNTIME).then(function (c) { c.put(req, cp); });
        return res;
      }).catch(function () { return cached; });
    })
  );
});
