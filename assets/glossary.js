// 용어 글로서리 뷰 — window.GSGLOSS(약어 사전)를 검색 가능한 목록으로 렌더.
// 공개 네임스페이스: window.GSGloss = { start(container) }
(function(){
  var GSG = (window.GSGloss = {});
  var GS = window.GS || {};
  function esc(s){ return GS.escHTML ? GS.escHTML(s) : String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function start(host){
    if(!host) return;
    var items = (window.GSGLOSS || []).slice().sort(function(a,b){
      return String(a.abbr||'').toLowerCase() < String(b.abbr||'').toLowerCase() ? -1 : 1;
    });
    host.innerHTML =
      '<div class="gl-wrap">'+
        '<div class="gl-top"><i data-lucide="search" class="gl-ic"></i>'+
          '<input class="gl-search" type="text" placeholder="약어·용어 검색 (예: MSA, 감리, RAG)" spellcheck="false" />'+
          '<span class="gl-count" data-el="count"></span></div>'+
        '<div class="gl-list" data-el="list"></div>'+
      '</div>';
    var searchEl = host.querySelector('.gl-search');
    var listEl = host.querySelector('[data-el="list"]');
    var countEl = host.querySelector('[data-el="count"]');

    function norm(s){ return String(s||'').toLowerCase(); }
    function render(q){
      q = norm(q).trim();
      var terms = q ? q.split(/\s+/).filter(Boolean) : [];
      var shown = 0, html = '';
      items.forEach(function(it){
        if(terms.length){
          var blob = norm(it.abbr)+' '+norm(it.full)+' '+norm(it.ko)+' '+norm(it.desc);
          if(!terms.every(function(t){ return blob.indexOf(t) >= 0; })) return;
        }
        shown++;
        html += '<div class="gl-item">'+
          '<span class="gl-abbr">'+esc(it.abbr)+'</span>'+
          '<div class="gl-body">'+
            '<div class="gl-h">'+(it.full?'<span class="gl-full">'+esc(it.full)+'</span>':'')+
              (it.ko?'<span class="gl-ko">'+esc(it.ko)+'</span>':'')+'</div>'+
            (it.desc?'<div class="gl-desc">'+esc(it.desc)+'</div>':'')+
          '</div></div>';
      });
      listEl.innerHTML = html || '<div class="gl-empty">검색 결과가 없습니다.</div>';
      countEl.textContent = shown + ' / ' + items.length + ' 용어';
    }
    searchEl.addEventListener('input', function(){ render(searchEl.value); });
    render('');
    if(window.lucide) lucide.createIcons();
    setTimeout(function(){ searchEl.focus(); }, 30);
  }

  GSG.start = start;
})();
