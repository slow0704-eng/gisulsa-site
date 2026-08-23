/* 정보관리기술사 학습 콘솔 — 서비스 워커(오프라인 지원)
 * 전략: 앱 셸(동일 출처 핵심)은 설치 시 프리캐시 + stale-while-revalidate로 자동 갱신,
 *       내비게이션은 network-first(오프라인 시 캐시 index 폴백),
 *       CDN(mermaid·vis-network·lucide·pretendard)은 cache-first로 최초 방문 후 오프라인 재사용.
 * 캐시 무효화: 배포로 핵심 파일 바뀌면 SWR가 백그라운드로 새 응답을 캐시에 갱신.
 *              강제 초기화가 필요하면 아래 VERSION 을 올린다. */
const VERSION = 'gs-v12';
const SHELL = VERSION + '-shell';
const RUNTIME = VERSION + '-runtime';
const CORE = [
  './', 'index.html',
  'assets/styles.css', 'assets/render.js', 'assets/graph.js', 'assets/quiz.js',
  'assets/practice.js', 'assets/glossary-data.js', 'assets/glossary.js',
  'assets/app.js', 'assets/info.js', 'data/bundle.js',
  'assets/D2Coding-diag.woff2',
  'manifest.json', 'assets/icon.svg'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(SHELL)
      .then(function(c){ return c.addAll(CORE); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){
        return k !== SHELL && k !== RUNTIME;
      }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

function putShell(req, res){
  if(res && res.status === 200 && res.type === 'basic'){
    var cp = res.clone();
    caches.open(SHELL).then(function(c){ c.put(req, cp); });
  }
  return res;
}

/* ★이 워커의 스코프(/gisulsa-site/)에는 하위 학습사이트 7종(/cppg/·/aws/ …)도 들어온다★
   그것까지 캐싱하면 하위 사이트를 배포해도 이 워커가 옛 data.js 를 내주어
   "새 메뉴가 안 보인다" 같은 증상이 생긴다(실측). 그래서 ★이 앱 자신의 자원만★ 다룬다.
   하위 사이트는 각자 자기 sw.js 를 갖는다. */
var BASE = new URL('./', self.location).pathname;
function isOwn(url){
  if(url.origin !== self.location.origin) return false;
  if(url.pathname.indexOf(BASE) !== 0) return false;
  var rest = url.pathname.slice(BASE.length);
  return rest === '' || rest === 'index.html' || rest === 'manifest.json' || rest === 'sw.js'
      || rest.indexOf('assets/') === 0 || rest.indexOf('data/') === 0;
}

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch(err){ return; }
  if(url.protocol !== 'http:' && url.protocol !== 'https:') return;
  /* 같은 출처인데 내 앱 자원이 아니면(=하위 학습사이트) 손대지 않고 네트워크에 맡긴다 */
  if(url.origin === self.location.origin && !isOwn(url)) return;

  // 1) 페이지 내비게이션: network-first → 오프라인 시 캐시 index 폴백
  if(req.mode === 'navigate'){
    e.respondWith(
      fetch(req).then(function(res){ return putShell(req, res); })
        .catch(function(){
          return caches.match(req).then(function(r){
            return r || caches.match('index.html') || caches.match('./');
          });
        })
    );
    return;
  }

  // 2) 동일 출처(내 앱) 정적자원: stale-while-revalidate
  if(url.origin === self.location.origin){
    e.respondWith(
      caches.match(req).then(function(cached){
        var net = fetch(req).then(function(res){ return putShell(req, res); })
          .catch(function(){ return cached; });
        return cached || net;
      })
    );
    return;
  }

  // 3) CDN 등 교차출처: cache-first(불투명 응답 포함 기회적 캐시)
  e.respondWith(
    caches.match(req).then(function(cached){
      return cached || fetch(req).then(function(res){
        var cp = res.clone();
        caches.open(RUNTIME).then(function(c){ c.put(req, cp); });
        return res;
      }).catch(function(){ return cached; });
    })
  );
});
