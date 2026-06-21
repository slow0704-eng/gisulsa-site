// 통합 토픽 사이트 — 통합 탐색기(전역 검색 + 과목 필터 + 단원 필터).
// 카드/표 HTML 생성은 assets/render.js (window.GS) 가 담당. 이 파일은 상태·DOM·이벤트·필터.
// 토픽 수정: data/*.json 편집 후 `python build.py`. (배포: `python deploy.py`) — 스키마는 AGENTS.md.
//
// window.GISULSA = [ Domain, ... ]
//   Domain = { id,label,icon,gradient,accent,title,subtitle,mermaidTitle,mermaid,legend,
//              categories:[{id,label,color,bg,tagColor}], sections:[{id,title,desc}], cards:[Card] }
//   Card(일반/비교) 스키마는 render.js 주석·AGENTS.md 참조. 카드 DOM: data-dom(과목)·data-cat(단원)·data-k(검색키).
(function(){
  var DOMAINS = window.GISULSA;
  var GS = window.GS || {};
  var contentEl  = document.getElementById('content');
  var domFacetEl = document.getElementById('domFacet');
  var secFacetEl = document.getElementById('secFacet');
  var searchEl   = document.getElementById('globalSearch');
  var countEl    = document.getElementById('count');

  if(!DOMAINS || !DOMAINS.length){
    contentEl.innerHTML = '<div class="loaderr"><b>데이터를 불러오지 못했습니다.</b><br/>'+
      '<code>data/bundle.js</code> 가 없거나 비어 있습니다. <code>python build.py</code> 를 실행하세요.</div>';
    return;
  }
  if(!GS.cardHTML){
    contentEl.innerHTML = '<div class="loaderr"><b>렌더러 로드 실패.</b><br/>'+
      '<code>assets/render.js</code> 가 <code>app.js</code> 보다 먼저 로드되어야 합니다.</div>';
    return;
  }

  mermaid.initialize({ startOnLoad:false, theme:'default', flowchart:{ curve:'basis' } });

  // 상태: 전역 검색어 q, 과목 dom('all'|domId), 단원 sec('all'|sectionId), 뷰 view('cards'|'graph'|'sheet')
  var state = { q:'', dom:'all', sec:'all', view:'cards' };
  var domById = {}, catMapByDom = {}, mapDone = {};
  DOMAINS.forEach(function(d){
    domById[d.id] = d;
    var m = {}; (d.categories||[]).forEach(function(c){ m[c.id]=c; });
    catMapByDom[d.id] = m;
  });
  function totalCards(){ var n=0; DOMAINS.forEach(function(d){ n+=(d.cards||[]).length; }); return n; }

  // ---- 본문: 전 과목을 한 화면에 (과목 그룹 → 단원 섹션 → 카드 그리드) ----
  function buildContent(){
    var html = '';
    DOMAINS.forEach(function(d){
      var catMap = catMapByDom[d.id];
      html += '<section class="dom-group" data-dom="'+d.id+'">'+
        '<div class="dom-head" style="background:'+d.gradient+'"><span class="dh-ic">'+d.icon+'</span>'+
          '<div class="dh-txt"><h2>'+d.title+'</h2><p>'+d.subtitle+'</p></div></div>'+
        '<div class="mapcard hidden" data-map="'+d.id+'"><h3>'+d.mermaidTitle+'</h3>'+
          '<div class="legend">'+(d.legend||'')+'</div><div class="mermaid"></div></div>';
      var secIds = (d.sections||[]).map(function(s){ return s.id; });
      (d.sections||[]).forEach(function(sec){
        var col = (catMap[sec.id]||{}).color || '#cbd5e1';
        var cards = (d.cards||[]).filter(function(c){ return c.category===sec.id; });
        var secmap = sec.mermaid ?
          '<div class="secmap" data-dom="'+d.id+'" data-sec="'+sec.id+'">'+
            '<div class="secmap-h">🔗 소단원 토픽 관계도</div><div class="mermaid"></div></div>' : '';
        html += '<div class="sec" data-dom="'+d.id+'" data-sec="'+sec.id+'" style="border-color:'+col+'">'+
                '<h2>'+sec.title+'</h2><p>'+(sec.desc||'')+'</p>'+secmap+'</div>'+
                '<div class="grid">'+ cards.map(function(c){ return GS.cardHTML(c, catMap, d.id); }).join('') +'</div>';
      });
      var orphan = (d.cards||[]).filter(function(c){ return secIds.indexOf(c.category)<0; });
      if(orphan.length){
        html += '<div class="sec" data-dom="'+d.id+'" data-sec="_orphan"><h2>기타</h2></div>'+
                '<div class="grid">'+ orphan.map(function(c){ return GS.cardHTML(c, catMap, d.id); }).join('') +'</div>';
      }
      html += '</section>';
    });
    contentEl.innerHTML = html;
    // mermaid 소스 주입(<br/> 보존). 렌더는 표시 시점에 1회.
    DOMAINS.forEach(function(d){
      var el = contentEl.querySelector('.mapcard[data-map="'+d.id+'"] .mermaid');
      if(el) el.textContent = d.mermaid;
      // 소단원 관계도 소스 주입
      (d.sections||[]).forEach(function(sec){
        if(!sec.mermaid) return;
        var sm = contentEl.querySelector('.secmap[data-dom="'+d.id+'"][data-sec="'+sec.id+'"] .mermaid');
        if(sm) sm.textContent = sec.mermaid;
      });
    });
  }

  // ---- 소단원 관계도(섹션 mermaid) 렌더 — 카드 뷰 표시 시 1회 ----
  var secMapsDone = false;
  function renderSectionMaps(){
    if(secMapsDone) return;
    var els = contentEl.querySelectorAll('.secmap .mermaid');
    if(!els.length){ secMapsDone = true; return; }
    // 다이어그램별 개별 렌더(하나가 실패해도 나머지는 정상 표시)
    Array.prototype.forEach.call(els, function(el){
      try{ mermaid.run({ nodes:[el] }); }catch(e){ /* 개별 실패 무시 */ }
    });
    secMapsDone = true;
  }

  // ---- 과목 facet (단일 선택: 전체 또는 한 과목) ----
  function buildDomFacet(){
    var html = '<span class="chip dom'+(state.dom==='all'?' active':'')+'" data-dom="all">전체 과목 <b>'+totalCards()+'</b></span>';
    DOMAINS.forEach(function(d){
      var on = state.dom===d.id;
      var style = on ? ('background:'+d.accent+';border-color:transparent;color:#fff') : '';
      html += '<span class="chip dom'+(on?' active':'')+'" data-dom="'+d.id+'" style="'+style+'">'+
              '<span class="ic">'+d.icon+'</span>'+d.label+' <b>'+(d.cards||[]).length+'</b></span>';
    });
    domFacetEl.innerHTML = html;
    domFacetEl.querySelectorAll('.chip.dom').forEach(function(ch){
      ch.addEventListener('click', function(){
        state.dom = ch.getAttribute('data-dom');
        state.sec = 'all';
        buildDomFacet(); buildSecFacet(); applyActiveFilter();
        if(state.view==='cards' && state.dom!=='all'){ scrollToGroup(state.dom); }
      });
    });
  }

  // ---- 단원 facet (선택한 과목의 섹션) ----
  function buildSecFacet(){
    if(state.dom==='all'){
      secFacetEl.innerHTML = '<span class="facet-hint">단원 필터 — 과목 선택 시 표시</span>';
      return;
    }
    var d = domById[state.dom], catMap = catMapByDom[d.id];
    var html = '<span class="chip sec'+(state.sec==='all'?' active':'')+'" data-sec="all">전체 단원</span>';
    (d.sections||[]).forEach(function(sec){
      var col = (catMap[sec.id]||{}).color || '#334155';
      var on = state.sec===sec.id;
      var style = on ? ('background:'+col+';border-color:transparent;color:#fff') : '';
      html += '<span class="chip sec'+(on?' active':'')+'" data-sec="'+sec.id+'" style="'+style+'">'+sec.title+'</span>';
    });
    secFacetEl.innerHTML = html;
    secFacetEl.querySelectorAll('.chip.sec').forEach(function(ch){
      ch.addEventListener('click', function(){
        state.sec = ch.getAttribute('data-sec');
        buildSecFacet(); applyActiveFilter();
      });
    });
  }

  // ---- 필터 적용(전역) ----
  function applyFilter(){
    var q = state.q, shown = 0;
    contentEl.querySelectorAll('.dom-group').forEach(function(g){
      var domId = g.getAttribute('data-dom');
      var domOk = state.dom==='all' || state.dom===domId;
      var groupVisible = false;
      g.querySelectorAll('.card').forEach(function(c){
        var secOk = state.sec==='all' || c.getAttribute('data-cat')===state.sec;
        var ok = domOk && secOk;
        if(ok && q){
          var text = (c.getAttribute('data-k')+' '+c.textContent).toLowerCase();
          ok = text.indexOf(q) >= 0;
        }
        c.classList.toggle('hidden', !ok);
        if(ok){ shown++; groupVisible = true; }
      });
      // 섹션 헤더 + 바로 다음 그리드: 보이는 카드 없으면 숨김
      g.querySelectorAll('.sec').forEach(function(s){
        var grid = s.nextElementSibling;
        var any = grid && Array.prototype.some.call(grid.querySelectorAll('.card'), function(c){
          return !c.classList.contains('hidden');
        });
        s.classList.toggle('hidden', !any);
        if(grid) grid.classList.toggle('hidden', !any);
      });
      g.classList.toggle('hidden', !groupVisible);
      // 지도: 특정 과목 단독 선택 + 검색어 없음(브라우즈 모드)에서만
      var mapEl = g.querySelector('.mapcard');
      if(mapEl){
        var showMap = (state.dom===domId) && !q;
        mapEl.classList.toggle('hidden', !showMap);
        if(showMap) renderMap(domId);
      }
    });
    countEl.textContent = '표시 ' + shown + ' / ' + totalCards();
    renderSectionMaps();
  }

  function renderMap(domId){
    if(mapDone[domId]) return;
    var el = contentEl.querySelector('.mapcard[data-map="'+domId+'"] .mermaid');
    if(!el) return;
    try{ mermaid.run({ nodes:[el] }); mapDone[domId] = true; }catch(e){ /* ignore */ }
  }

  function scrollToGroup(domId){
    var g = contentEl.querySelector('.dom-group[data-dom="'+domId+'"]');
    if(g) window.scrollTo({ top: g.offsetTop - 110, behavior:'smooth' });
  }

  // ---- 정의 시트(모든 토픽의 정의문만) ----
  var sheetEl     = document.getElementById('sheet');
  var sheetBody   = document.getElementById('sheetBody');
  var graphEl     = document.getElementById('graph');
  var graphCanvas = document.getElementById('graphCanvas');
  var quizEl      = document.getElementById('quiz');
  var quizBody    = document.getElementById('quizBody');
  var facetsEl    = document.querySelector('.facets');
  var sheetBuilt  = false;

  // ---- 퀴즈: 전 과목 카드 묶음(퀴즈 자체 과목/단원/유형 필터로 제어) ----
  function allItems(){
    var items=[];
    DOMAINS.forEach(function(d){
      var catMap=catMapByDom[d.id], secLabel={};
      (d.sections||[]).forEach(function(s){ secLabel[s.id]=s.title; });
      (d.cards||[]).forEach(function(c){
        items.push({ card:c, domId:d.id, domLabel:d.label, secId:c.category, secLabel:secLabel[c.category]||'기타',
          color:(catMap[c.category]||{}).color||'#64748b' });
      });
    });
    return items;
  }
  var quizBuilt=false;
  function startQuiz(){
    if(!window.GSQuiz || !quizBody){ return; }
    window.GSQuiz.start(quizBody, allItems());
    quizBuilt=true;
    countEl.textContent = '🧩 퀴즈';
  }

  function buildSheet(){
    if(sheetBuilt) return;
    sheetBody.innerHTML = GS.sheetHTML(DOMAINS, catMapByDom);
    // 가리기 모드일 때 행 클릭 → 그 행 정의만 펼쳐보기(암기 자가확인)
    sheetBody.addEventListener('click', function(e){
      var r = e.target && e.target.closest ? e.target.closest('.sheet-row') : null;
      if(r) r.classList.toggle('reveal');
    });
    sheetBuilt = true;
  }

  function applySheetFilter(){
    var q = state.q, shown = 0;
    var rows = sheetBody.querySelectorAll('.sheet-row');
    rows.forEach(function(r){
      var domOk = state.dom==='all' || r.getAttribute('data-dom')===state.dom;
      var secOk = state.sec==='all' || r.getAttribute('data-cat')===state.sec;
      var ok = domOk && secOk;
      if(ok && q){ var t=(r.getAttribute('data-k')+' '+r.textContent).toLowerCase(); ok = t.indexOf(q)>=0; }
      r.classList.toggle('hidden', !ok);
      if(ok) shown++;
    });
    sheetBody.querySelectorAll('.sheet-sec').forEach(function(s){
      var dom=s.getAttribute('data-dom'), cat=s.getAttribute('data-cat');
      var any = Array.prototype.some.call(rows, function(r){
        return r.getAttribute('data-dom')===dom && r.getAttribute('data-cat')===cat && !r.classList.contains('hidden'); });
      s.classList.toggle('hidden', !any);
    });
    sheetBody.querySelectorAll('.sheet-dom').forEach(function(s){
      var dom=s.getAttribute('data-dom');
      var any = Array.prototype.some.call(rows, function(r){
        return r.getAttribute('data-dom')===dom && !r.classList.contains('hidden'); });
      s.classList.toggle('hidden', !any);
    });
    countEl.textContent = '표시 ' + shown + ' / ' + totalCards();
  }

  // 활성 뷰에 맞춰 검색·필터 적용(관계도는 필터 미적용)
  function applyActiveFilter(){
    if(state.view==='sheet') applySheetFilter();
    else if(state.view==='cards') applyFilter();
    // 퀴즈는 자체 과목/단원/유형/난이도 필터로 제어 — 상단 facet·검색에 반응하지 않음
  }

  // ---- 뷰 전환: 카드 / 관계도 / 정의 시트 / 퀴즈 ----
  function setView(v){
    state.view = v;
    contentEl.classList.toggle('hidden', v!=='cards');
    graphEl.classList.toggle('hidden', v!=='graph');
    sheetEl.classList.toggle('hidden', v!=='sheet');
    if(quizEl) quizEl.classList.toggle('hidden', v!=='quiz');
    // 관계도·퀴즈는 상단 과목/단원 facet 미적용(퀴즈는 자체 필터 보유)
    if(facetsEl) facetsEl.classList.toggle('hidden', v==='graph' || v==='quiz');
    document.querySelectorAll('#viewsw button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-v')===v); });

    if(v==='graph' && window.GSGraph){
      var ok = window.GSGraph.build(graphCanvas, DOMAINS, { onTopicClick:function(title){
        searchEl.value = title; state.q = String(title).toLowerCase();
        state.dom='all'; state.sec='all'; buildDomFacet(); buildSecFacet();
        setView('cards'); window.scrollTo(0,0);
      }});
      if(ok) window.GSGraph.fit();
    } else if(v==='sheet'){
      buildSheet(); applySheetFilter();
    } else if(v==='quiz'){
      if(!quizBuilt) startQuiz();   // 한 번만 생성(다시 들어와도 진행/필터 유지)
    } else if(v==='cards'){
      applyFilter();
    }
  }
  document.querySelectorAll('#viewsw button').forEach(function(b){
    b.addEventListener('click', function(){ setView(b.getAttribute('data-v')); });
  });
  var maskDef = document.getElementById('maskDef');
  if(maskDef){ maskDef.addEventListener('change', function(){ sheetBody.classList.toggle('masked', maskDef.checked); }); }

  // ---- 검색(전역, 활성 뷰에 적용) ----
  searchEl.addEventListener('input', function(){
    state.q = searchEl.value.trim().toLowerCase();
    if(state.view==='quiz') return;   // 퀴즈는 검색어 미사용(매 입력마다 재출제 방지)
    applyActiveFilter();
  });

  // ---- init ----
  buildContent();
  buildDomFacet();
  buildSecFacet();
  applyFilter();
})();
