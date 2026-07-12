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
  var subFacetEl = document.getElementById('subFacet');
  var progFacetEl = document.getElementById('progFacet');
  var searchEl   = document.getElementById('globalSearch');
  var countEl    = document.getElementById('count');
  var emptyEl    = document.getElementById('emptyState');

  // 검색·필터 결과 0건 시 빈 상태 안내 표시(카드·시트 뷰)
  function toggleEmpty(show){ if(emptyEl) emptyEl.classList.toggle('hidden', !show); }
  // 과목·단원·검색어 초기화 후 재적용(빈 상태의 '필터 초기화' 버튼)
  function resetFilters(){
    state.q=''; state.dom='all'; state.sec='all'; state.sub='all'; state.only='all'; state.lvl='all';
    if(searchEl) searchEl.value='';
    buildDomFacet(); buildSecFacet(); buildSubFacet(); buildProgFacet(); applyActiveFilter();
  }

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

  // mermaid·vis-network 는 무겁고(≈1MB) 첫 화면(카드)엔 불필요 → 온디맨드 지연 로드(초기 로딩 단축).
  // 소단원 지도 렌더·관계도 진입 시점에 동적 로드. 차단·오프라인이어도 나머지 화면은 정상.
  var MERMAID = (typeof mermaid !== 'undefined') ? mermaid : null;
  if(MERMAID) MERMAID.initialize({ startOnLoad:false, theme:'default', flowchart:{ curve:'basis' } });
  var _lazy = {};
  function loadScript(src){
    if(_lazy[src]) return _lazy[src];
    return (_lazy[src] = new Promise(function(res){
      var s = document.createElement('script'); s.src = src; s.async = true;
      s.onload = function(){ res(true); }; s.onerror = function(){ res(false); };
      document.head.appendChild(s);
    }));
  }
  function ensureMermaid(){
    if(MERMAID) return Promise.resolve(MERMAID);
    return loadScript('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js').then(function(){
      if(typeof mermaid !== 'undefined' && !MERMAID){ MERMAID = mermaid; MERMAID.initialize({ startOnLoad:false, theme:'default', flowchart:{ curve:'basis' } }); }
      return MERMAID;
    });
  }
  function ensureVis(){
    if(typeof vis !== 'undefined') return Promise.resolve(true);
    return loadScript('https://cdn.jsdelivr.net/npm/vis-network@9.1.9/standalone/umd/vis-network.min.js');
  }

  // 상태: 전역 검색어 q, 과목 dom('all'|domId), 단원 sec('all'|sectionId), 뷰 view('cards'|'graph'|'sheet'|'quiz')
  var state = { q:'', qmode:'and', dom:'all', sec:'all', sub:'all', only:'all', lvl:'all', view:'cards' };
  function lvlOk(l){ return state.lvl==='all' || (l||'') === state.lvl; }
  // ---- 진도·이력(localStorage): 학습완료(done)·북마크(mark)·이어보기(resume) ----
  var PROG = { done:{}, mark:{}, wrong:{} };
  try{ var _pp = JSON.parse(localStorage.getItem('gs_prog')||'{}'); PROG.done = _pp.done||{}; PROG.mark = _pp.mark||{}; PROG.wrong = _pp.wrong||{}; }catch(e){}
  function saveProg(){ try{ localStorage.setItem('gs_prog', JSON.stringify(PROG)); }catch(e){} }
  function progCount(kind){ return Object.keys(PROG[kind]||{}).length; }
  function progOk(key){
    if(state.only==='done')   return !!PROG.done[key];
    if(state.only==='undone') return !PROG.done[key];
    if(state.only==='mark')   return !!PROG.mark[key];
    if(state.only==='wrong')  return !!PROG.wrong[key];
    return true;
  }
  function applyProgClasses(){
    document.querySelectorAll('.card[data-key], .sheet-row[data-key]').forEach(function(el){
      var k = el.getAttribute('data-key');
      el.classList.toggle('is-done', !!PROG.done[k]);
      el.classList.toggle('is-marked', !!PROG.mark[k]);
      el.classList.toggle('is-wrong', !!PROG.wrong[k]);
    });
  }
  // 퀴즈 결과 훅 — 오답노트 누적(오답=기록, 정답=해제). quiz.js 가 호출.
  window.GSonQuiz = function(domId, title, ok){
    var k = domId + '|' + title;
    if(ok){ if(PROG.wrong[k]) delete PROG.wrong[k]; } else { PROG.wrong[k] = 1; }
    saveProg();
    var el = document.querySelector('.card[data-key="'+(window.CSS&&CSS.escape?CSS.escape(k):k)+'"]');
    if(el) el.classList.toggle('is-wrong', !!PROG.wrong[k]);
    if(progFacetEl) buildProgFacet();
  };
  function saveResume(){ try{ localStorage.setItem('gs_resume', JSON.stringify({ dom:state.dom, sec:state.sec, sub:state.sub, view:state.view })); }catch(e){} }
  var domById = {}, catMapByDom = {}, mapDone = {};
  DOMAINS.forEach(function(d){
    domById[d.id] = d;
    catMapByDom[d.id] = GS.buildCatMap(d);
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
    // mermaid 온디맨드 로드 후 배치 렌더(초기 블로킹 제거). 미로드/오프라인이면 지도만 생략.
    ensureMermaid().then(function(M){
      if(!M || secMapsDone) return;
      secMapsDone = true;
      try{ M.run({ nodes: Array.prototype.slice.call(els), suppressErrors:true }); }
      catch(e){ /* ignore */ }
    });
  }

  // ---- 과목 facet (단일 선택: 전체 또는 한 과목) ----
  function buildDomFacet(){
    var html = '<button type="button" class="chip dom'+(state.dom==='all'?' active':'')+'" aria-pressed="'+(state.dom==='all')+'" data-dom="all">전체 과목 <b>'+totalCards()+'</b></button>';
    DOMAINS.forEach(function(d){
      var on = state.dom===d.id;
      var style = on ? ('background:'+d.accent+';border-color:transparent;color:#fff') : '';
      html += '<button type="button" class="chip dom'+(on?' active':'')+'" aria-pressed="'+on+'" data-dom="'+d.id+'" style="'+style+'">'+
              '<span class="ic">'+d.icon+'</span>'+d.label+' <b>'+(d.cards||[]).length+'</b></button>';
    });
    domFacetEl.innerHTML = html;
    domFacetEl.querySelectorAll('.chip.dom').forEach(function(ch){
      ch.addEventListener('click', function(){
        state.dom = ch.getAttribute('data-dom');
        state.sec = 'all'; state.sub = 'all';
        buildDomFacet(); buildSecFacet(); buildSubFacet(); applyActiveFilter();
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
    var secCnt = {};
    (d.cards||[]).forEach(function(c){ secCnt[c.category] = (secCnt[c.category]||0) + 1; });
    var html = '<button type="button" class="chip sec'+(state.sec==='all'?' active':'')+'" aria-pressed="'+(state.sec==='all')+'" data-sec="all">전체 단원 <b>'+(d.cards||[]).length+'</b></button>';
    (d.sections||[]).forEach(function(sec){
      var col = (catMap[sec.id]||{}).color || '#334155';
      var on = state.sec===sec.id;
      var style = on ? ('background:'+col+';border-color:transparent;color:#fff') : '';
      html += '<button type="button" class="chip sec'+(on?' active':'')+'" aria-pressed="'+on+'" data-sec="'+sec.id+'" style="'+style+'">'+sec.title+' <b>'+(secCnt[sec.id]||0)+'</b></button>';
    });
    secFacetEl.innerHTML = html;
    secFacetEl.querySelectorAll('.chip.sec').forEach(function(ch){
      ch.addEventListener('click', function(){
        state.sec = ch.getAttribute('data-sec');
        state.sub = 'all';
        buildSecFacet(); buildSubFacet(); applyActiveFilter();
      });
    });
  }

  // ---- 세부구분 facet (선택한 단원 내 토픽 군집) — 과목+단원 모두 선택 시 표시 ----
  function buildSubFacet(){
    if(!subFacetEl) return;
    if(state.dom==='all' || state.sec==='all'){
      subFacetEl.innerHTML = '<span class="facet-hint">세부구분 — 단원 선택 시 표시</span>';
      return;
    }
    var d = domById[state.dom], subs = [], seen = {}, subCnt = {}, secTotal = 0;
    (d.cards||[]).forEach(function(c){
      if(c.category!==state.sec) return;
      secTotal++;
      var s = c.subcat || '';
      if(s){ subCnt[s] = (subCnt[s]||0) + 1; if(!seen[s]){ seen[s]=1; subs.push(s); } }
    });
    if(subs.length < 2){   // 세부구분이 1개 이하면 나눌 의미 없음 — 표시 생략
      subFacetEl.innerHTML = '';
      if(state.sub!=='all') state.sub='all';
      return;
    }
    var html = '<button type="button" class="chip sub'+(state.sub==='all'?' active':'')+'" aria-pressed="'+(state.sub==='all')+'" data-sub="all">전체 세부 <b>'+secTotal+'</b></button>';
    subs.forEach(function(s){
      var on = state.sub===s;
      html += '<button type="button" class="chip sub'+(on?' active':'')+'" aria-pressed="'+on+'" data-sub="'+GS.escAttr(s)+'">'+GS.escHTML(s)+' <b>'+(subCnt[s]||0)+'</b></button>';
    });
    subFacetEl.innerHTML = html;
    subFacetEl.querySelectorAll('.chip.sub').forEach(function(ch){
      ch.addEventListener('click', function(){
        state.sub = ch.getAttribute('data-sub');
        buildSubFacet(); applyActiveFilter();
      });
    });
  }

  // ---- 필터 적용(전역) ----
  function applyFilter(){
    var q = state.q, shown = 0;
    contentEl.querySelectorAll('.dom-group').forEach(function(g){
      var domId = g.getAttribute('data-dom');
      var groupVisible = false;
      g.querySelectorAll('.card').forEach(function(c){
        var text = q ? (c.getAttribute('data-k')+' '+c.textContent).toLowerCase() : '';
        var ok = GS.cardMatches(domId, c.getAttribute('data-cat'), text, q, state.dom, state.sec, state.qmode)
                 && (state.sub==='all' || c.getAttribute('data-sub')===state.sub)
                 && lvlOk(c.getAttribute('data-lvl'))
                 && progOk(c.getAttribute('data-key'));
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
    toggleEmpty(shown===0);
    renderSectionMaps();
  }

  function renderMap(domId){
    if(mapDone[domId]) return;
    var el = contentEl.querySelector('.mapcard[data-map="'+domId+'"] .mermaid');
    if(!el) return;
    ensureMermaid().then(function(M){
      if(!M || mapDone[domId]) return;
      try{ M.run({ nodes:[el] }); mapDone[domId] = true; }catch(e){ /* ignore */ }
    });
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
  var practiceEl  = document.getElementById('practice');
  var practiceBody = document.getElementById('practiceBody');
  var glossEl     = document.getElementById('gloss');
  var glossBody   = document.getElementById('glossBody');
  var facetsEl    = document.querySelector('.facets');
  var sheetBuilt  = false;

  // ---- 퀴즈: 전 과목 카드 묶음(퀴즈 자체 과목/단원/유형 필터로 제어) ----
  function allItems(){
    var items=[];
    DOMAINS.forEach(function(d){
      var catMap=catMapByDom[d.id], secLabel={};
      (d.sections||[]).forEach(function(s){ secLabel[s.id]=s.title; });
      (d.cards||[]).forEach(function(c){
        if(c.essay) return;   // 2교시 논술 카드는 자동 다지선다 대상에서 제외
        items.push({ card:c, domId:d.id, domLabel:d.label, secId:c.category, secLabel:secLabel[c.category]||'기타',
          color:(catMap[c.category]||{}).color||'#64748b' });
      });
    });
    return items;
  }
  // 뷰 모듈(quiz·practice·glossary)은 초기 로드에서 제외 → 해당 뷰 첫 진입 시 온디맨드 로드(P4)
  var quizBuilt=false;
  function startQuiz(){
    if(!quizBody || quizBuilt){ return; }
    loadScript('assets/quiz.js').then(function(){
      if(!window.GSQuiz){ return; }
      window.GSQuiz.start(quizBody, allItems());
      quizBuilt=true;
      countEl.textContent = '🧩 퀴즈';
      if(window.lucide) lucide.createIcons();
    });
  }
  // ---- 연습(타자연습): 리드키워드·정의문 따라치기 — 퀴즈처럼 전 과목 카드에서 자체 생성 ----
  var practiceBuilt=false;
  function startPractice(){
    if(!practiceBody || practiceBuilt){ return; }
    loadScript('assets/practice.js').then(function(){
      if(!window.GSPractice){ return; }
      window.GSPractice.start(practiceBody, allItems());
      practiceBuilt=true;
      countEl.textContent = '⌨ 연습';
      if(window.lucide) lucide.createIcons();
    });
  }
  var glossBuilt=false;
  function startGloss(){
    if(!glossBody || glossBuilt){ return; }
    // 용어 사전은 데이터(glossary-data)→로직(glossary) 순으로 로드
    loadScript('assets/glossary-data.js').then(function(){ return loadScript('assets/glossary.js'); }).then(function(){
      if(!window.GSGloss){ return; }
      window.GSGloss.start(glossBody);
      glossBuilt=true;
      countEl.textContent = '📖 용어';
      if(window.lucide) lucide.createIcons();
    });
  }

  function buildSheet(){
    if(sheetBuilt) return;
    sheetBody.innerHTML = GS.sheetHTML(DOMAINS, catMapByDom);
    applyProgClasses();   // 시트 행에 학습완료·북마크 상태 반영
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
      var text = q ? (r.getAttribute('data-k')+' '+r.textContent).toLowerCase() : '';
      var ok = GS.cardMatches(r.getAttribute('data-dom'), r.getAttribute('data-cat'), text, q, state.dom, state.sec, state.qmode)
               && (state.sub==='all' || r.getAttribute('data-sub')===state.sub)
               && lvlOk(r.getAttribute('data-lvl'))
               && progOk(r.getAttribute('data-key'));
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
    toggleEmpty(shown===0);
  }

  // 활성 뷰에 맞춰 검색·필터 적용(관계도는 필터 미적용)
  function applyActiveFilter(){
    saveResume();
    if(state.view==='sheet') applySheetFilter();
    else if(state.view==='cards') applyFilter();
    // 퀴즈는 자체 과목/단원/유형/난이도 필터로 제어 — 상단 facet·검색에 반응하지 않음
  }

  // ---- 뷰 전환: 카드 / 관계도 / 정의 시트 / 퀴즈 ----
  function setView(v){
    state.view = v;
    saveResume();
    contentEl.classList.toggle('hidden', v!=='cards');
    graphEl.classList.toggle('hidden', v!=='graph');
    sheetEl.classList.toggle('hidden', v!=='sheet');
    if(quizEl) quizEl.classList.toggle('hidden', v!=='quiz');
    if(practiceEl) practiceEl.classList.toggle('hidden', v!=='practice');
    if(glossEl) glossEl.classList.toggle('hidden', v!=='gloss');
    // 관계도·퀴즈·연습·용어는 상단 과목/단원 facet 미적용(자체 필터/검색 보유)
    if(facetsEl) facetsEl.classList.toggle('hidden', v==='graph' || v==='quiz' || v==='practice' || v==='gloss');
    document.querySelectorAll('#viewsw button').forEach(function(b){
      var on = b.getAttribute('data-v')===v;
      b.classList.toggle('active', on); b.setAttribute('aria-pressed', on); });

    // 검색은 카드·시트 뷰에서만 적용 — 관계도·퀴즈·연습에선 입력 비활성화로 적용범위를 명시
    var searchable = (v==='cards' || v==='sheet');
    if(searchEl){
      searchEl.disabled = !searchable;
      searchEl.placeholder = searchable ? '토픽 검색 (예: 제로트러스트)'
        : (v==='graph' ? '관계도 뷰 — 검색 미적용' : (v==='practice' ? '연습 뷰 — 아래 과목/모드로 범위 조절' : (v==='gloss' ? '용어 뷰 — 아래 검색창 사용' : '퀴즈 뷰 — 아래 필터로 출제 범위 조절')));
    }
    var smBtn=document.getElementById('searchMode'); if(smBtn) smBtn.disabled = !searchable;
    if(v==='graph' || v==='quiz' || v==='practice' || v==='gloss') toggleEmpty(false);
    if(v==='graph') countEl.textContent = '🗺 관계도';

    if(v==='graph'){
      // graph.js(로직) + vis-network(152KB) 온디맨드 로드 후 그래프 빌드(초기 로딩에서 제외)
      Promise.all([loadScript('assets/graph.js'), ensureVis()]).then(function(){
        if(!window.GSGraph) return;
        var ok = window.GSGraph.build(graphCanvas, DOMAINS, { onTopicClick:function(title){
          searchEl.value = title; state.q = String(title).toLowerCase();
          state.dom='all'; state.sec='all'; state.sub='all'; buildDomFacet(); buildSecFacet(); buildSubFacet();
          setView('cards'); window.scrollTo(0,0);
        }});
        if(ok) window.GSGraph.fit();
      });
    } else if(v==='sheet'){
      buildSheet(); applySheetFilter();
    } else if(v==='quiz'){
      if(!quizBuilt) startQuiz();   // 한 번만 생성(다시 들어와도 진행/필터 유지)
    } else if(v==='practice'){
      if(!practiceBuilt) startPractice();   // 한 번만 생성(다시 들어와도 진행 유지)
      else countEl.textContent = '⌨ 연습';
    } else if(v==='gloss'){
      if(!glossBuilt) startGloss();   // 한 번만 생성(용어 사전)
      else countEl.textContent = '📖 용어';
    } else if(v==='cards'){
      applyFilter();
    }
  }
  document.querySelectorAll('#viewsw button').forEach(function(b){
    b.addEventListener('click', function(){ setView(b.getAttribute('data-v')); });
  });
  // info.js(시험 안내 모달) 온디맨드(P4): 첫 시험안내 버튼 클릭 시 로드 후 재실행
  (function(){
    var infoLoaded=false;
    document.querySelectorAll('.foot-link[data-info]').forEach(function(b){
      b.addEventListener('click', function(){
        if(infoLoaded) return;   // 로드 완료 후엔 info.js 자체 핸들러가 처리
        infoLoaded=true;
        loadScript('assets/info.js').then(function(){
          if(window.lucide) lucide.createIcons();
          b.click();             // info.js 핸들러 부착 완료 → 해당 안내 모달 오픈
        });
      });
    });
  })();
  var maskDef = document.getElementById('maskDef');
  if(maskDef){ maskDef.addEventListener('change', function(){ sheetBody.classList.toggle('masked', maskDef.checked); }); }
  var maskMore = document.getElementById('maskMore');
  if(maskMore){ maskMore.addEventListener('change', function(){ sheetBody.classList.toggle('masked-more', maskMore.checked); if(maskMore.checked && maskDef && !maskDef.checked){ maskDef.checked=true; sheetBody.classList.add('masked'); } }); }
  // 구성도/구성요소표 원래대로(펼침) 토글 — 시트 셀의 1줄(st-flat) ↔ 원본(st-orig) 전환
  var diagOrig = document.getElementById('diagOrig');
  if(diagOrig){ diagOrig.addEventListener('change', function(){ sheetBody.classList.toggle('diag-orig', diagOrig.checked); }); }
  var tblOrig = document.getElementById('tblOrig');
  if(tblOrig){ tblOrig.addEventListener('change', function(){ sheetBody.classList.toggle('tbl-orig', tblOrig.checked); }); }

  // ---- 정의 시트 내보내기(TXT / Word / CSV / Excel) — 현재 검색·과목·단원 필터 반영 ----
  var EXP_COLS = ['과목','단원','토픽','유형','리드키워드','정의','구성도','구성도첨언','구성요소','첨언'];
  // 필터를 통과한 항목을 {domLabel, secTitle, card} 로 수집(도메인·섹션 노출 순서 유지).
  function sheetExportItems(){
    var q = state.q, items = [];
    DOMAINS.forEach(function(d){
      var catLabel = {}, secTitle = {};
      (d.categories||[]).forEach(function(x){ catLabel[x.id] = x.label; });
      (d.sections||[]).forEach(function(s){ secTitle[s.id] = s.title; });
      (d.cards||[]).forEach(function(c){
        var def = GS.defText ? GS.defText(c) : (c.def || '');
        var text = q ? (c.keywords + ' ' + c.title + ' ' + def).toLowerCase() : '';
        if(!GS.cardMatches(d.id, c.category, text, q, state.dom, state.sec, state.qmode)) return;
        if(state.sub!=='all' && (c.subcat||'')!==state.sub) return;
        items.push({ domLabel: d.label, secTitle: (secTitle[c.category] || catLabel[c.category] || '기타'), card: c });
      });
    });
    return items;
  }
  // CSV/Excel 용 1줄(납작) 행 — 구성도·표를 구분자로 직렬화.
  function sheetExportRows(){
    return sheetExportItems().map(function(it){
      var c = it.card, def = GS.defText ? GS.defText(c) : (c.def || '');
      return {
        '과목': it.domLabel, '단원': it.secTitle, '토픽': c.title,
        '유형': c.essay ? '2교시 논술' : (c.compare ? '비교' : '일반'),
        '리드키워드': c.keyword || '', '정의': def,
        '구성도': GS.flatDiagram ? GS.flatDiagram(c) : '',
        '구성도첨언': c.diagramNote || '',
        '구성요소': GS.flatTable ? GS.flatTable(c.table) : '',
        '첨언': c.note || ''
      };
    });
  }
  function expStamp(){ var d = new Date(), p = function(n){ return (n<10?'0':'')+n; }; return '' + d.getFullYear() + p(d.getMonth()+1) + p(d.getDate()); }
  function expStampHuman(){ var d = new Date(), p = function(n){ return (n<10?'0':'')+n; }; return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+' '+p(d.getHours())+':'+p(d.getMinutes()); }
  function expDomLabel(){ if(state.dom==='all') return '전체'; var f = state.dom; DOMAINS.forEach(function(d){ if(d.id===state.dom) f = d.label; }); return f; }
  function expSecLabel(){ if(state.sec==='all') return '전체'; var f = state.sec; DOMAINS.forEach(function(d){ (d.sections||[]).forEach(function(s){ if(s.id===state.sec) f = s.title; }); }); return f; }
  function expDownload(blob, name){
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function(){ document.body.removeChild(a); URL.revokeObjectURL(url); }, 120);
  }

  // 표시폭(한글·전각 2, 그 외 1) — TXT 표 정렬용
  function expW(s){ s = String(s==null?'':s); var w = 0;
    for(var i=0;i<s.length;i++){ var c = s.charCodeAt(i);
      w += (c>=0x1100 && (c<=0x115F || (c>=0x2E80&&c<=0xA4CF) || (c>=0xAC00&&c<=0xD7A3) || (c>=0xF900&&c<=0xFAFF) || (c>=0xFE30&&c<=0xFE4F) || (c>=0xFF00&&c<=0xFF60) || (c>=0xFFE0&&c<=0xFFE6))) ? 2 : 1; }
    return w; }
  function expPad(s, w){ s = String(s==null?'':s); var d = w - expW(s); return s + (d>0 ? new Array(d+1).join(' ') : ''); }
  function txtDiagram(g, ind){ return String(g||'').split('\n').map(function(x){ return ind + x.replace(/\s+$/,''); }).join('\n'); }
  function txtTable(t, ind){
    if(!t || !t.rows || !t.rows.length) return '';
    var head = t.head || [], all = (head.length ? [head] : []).concat(t.rows), ncol = 0;
    all.forEach(function(r){ ncol = Math.max(ncol, r.length); });
    var wid = []; for(var i=0;i<ncol;i++) wid[i] = 0;
    var cell = function(v){ return v==null ? '' : (v==='' ? '〃' : v); };
    all.forEach(function(r){ for(var i=0;i<ncol;i++){ wid[i] = Math.max(wid[i], expW(cell(r[i]))); } });
    var line = function(r){ var cs = []; for(var i=0;i<ncol;i++){ cs.push(expPad(cell(r[i]), wid[i])); } return ind + cs.join('  |  '); };
    var out = [];
    if(head.length){ out.push(line(head)); var sep = []; for(var i=0;i<ncol;i++) sep.push(new Array(wid[i]+1).join('─')); out.push(ind + sep.join('──┼──')); }
    t.rows.forEach(function(r){ out.push(line(r)); });
    return out.join('\n');
  }
  function txtEssay(L, c){
    var p = c.problem || {};
    L.push('       · 문제 : ' + (p.no ? p.no+'. ' : '') + (p.topic || c.title));
    (p.reqs||[]).forEach(function(r){ L.push('           - ' + r); });
    (c.sections||[]).forEach(function(s){
      L.push('       〈 ' + (s.no ? s.no+'. ' : '') + s.title + ' 〉');
      var ov = s.overview || {};
      if(ov.diagram) L.push(txtDiagram(ov.diagram, '           '));
      (ov.concepts||[]).forEach(function(x){ L.push('           · ' + x); });
      if(ov.note) L.push('           ' + ov.note);
      var dt = s.detail || {};
      if(dt.title) L.push('           ▶ ' + dt.title);
      if(dt.table && dt.table.rows && dt.table.rows.length) L.push(txtTable(dt.table, '           '));
      if(dt.note) L.push('           ' + dt.note);
      (s.conclusion||[]).forEach(function(x){ L.push('           - ' + x); });
    });
  }
  // TXT — 들여쓰기·줄바꿈으로 가독성 확보(한글(HWP)·메모장에서 바로 열림). BOM 부여로 한글 인코딩 안전.
  function exportTxt(){
    var items = sheetExportItems();
    if(!items.length){ alert('내보낼 항목이 없습니다(필터 결과 0건).'); return; }
    var bar = new Array(65).join('='), sub = new Array(65).join('─');
    var L = ['정보관리기술사 정의시트',
             '추출 ' + expStampHuman() + '  ·  총 ' + items.length + '토픽',
             '필터  과목=' + expDomLabel() + ' / 단원=' + expSecLabel() + ' / 검색=' + (state.q || '(없음)'),
             bar];
    var curDom = null, curSec = null;
    items.forEach(function(it){
      if(it.domLabel !== curDom){ curDom = it.domLabel; curSec = null; L.push('', '', '■ ' + curDom, sub); }
      if(it.secTitle !== curSec){ curSec = it.secTitle; L.push('', '  【 ' + curSec + ' 】'); }
      var c = it.card, kind = c.essay ? '2교시 논술' : (c.compare ? '비교' : '일반');
      L.push('', '  ● ' + c.title + '   〔' + kind + '〕');
      if(c.keyword) L.push('       · 리드키워드 : ' + c.keyword);
      if(c.essay){ txtEssay(L, c); }
      else {
        var def = GS.defText ? GS.defText(c) : (c.def || '');
        if(def){ L.push('       · 정의'); L.push('           ' + def); }
        if(c.diagram){ L.push('       · 구성도'); L.push(txtDiagram(c.diagram, '           ')); }
        if(c.diagramNote) L.push('           ' + c.diagramNote);
        if(c.table && c.table.rows && c.table.rows.length){ L.push('       · 구성요소'); L.push(txtTable(c.table, '           ')); }
        else if(c.compare && c.defTable && c.defTable.rows){ L.push('       · 정의비교'); L.push(txtTable(c.defTable, '           ')); }
        if(c.note) L.push('           ' + c.note);
      }
    });
    var blob = new Blob(['﻿' + L.join('\r\n')], { type:'text/plain;charset=utf-8;' });
    expDownload(blob, '정의시트_' + expStamp() + '.txt');
  }
  // Word(.doc) — HTML 기반. MS Word·한글(HWP) 모두 직접 열림(네이티브 .hwp 는 브라우저 생성 불가 → .doc 로 대체).
  function docEsc(v){ return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function docTable(t){
    if(!t || !t.rows || !t.rows.length) return '';
    var s = '<table>';
    if(t.head && t.head.length) s += '<tr>' + t.head.map(function(x){ return '<th>' + docEsc(x) + '</th>'; }).join('') + '</tr>';
    t.rows.forEach(function(r){ s += '<tr>' + r.map(function(x){ return '<td>' + (x==='' ? '〃' : docEsc(x)) + '</td>'; }).join('') + '</tr>'; });
    return s + '</table>';
  }
  function docEssay(h, c){
    var p = c.problem || {};
    h.push('<p class="lbl">문제 : ' + docEsc((p.no ? p.no+'. ' : '') + (p.topic || c.title)) + '</p>');
    if(p.reqs && p.reqs.length) h.push('<ul>' + p.reqs.map(function(r){ return '<li>' + docEsc(r) + '</li>'; }).join('') + '</ul>');
    (c.sections||[]).forEach(function(s){
      h.push('<p class="sec">〈 ' + docEsc((s.no ? s.no+'. ' : '') + s.title) + ' 〉</p>');
      var ov = s.overview || {};
      if(ov.diagram) h.push('<pre>' + docEsc(ov.diagram) + '</pre>');
      if(ov.concepts && ov.concepts.length) h.push('<ul>' + ov.concepts.map(function(x){ return '<li>' + docEsc(x) + '</li>'; }).join('') + '</ul>');
      if(ov.note) h.push('<p class="note">' + docEsc(ov.note) + '</p>');
      var dt = s.detail || {};
      if(dt.title) h.push('<p class="lbl">' + docEsc(dt.title) + '</p>');
      if(dt.table && dt.table.rows && dt.table.rows.length) h.push(docTable(dt.table));
      if(dt.note) h.push('<p class="note">' + docEsc(dt.note) + '</p>');
      if(s.conclusion && s.conclusion.length) h.push('<ul>' + s.conclusion.map(function(x){ return '<li>' + docEsc(x) + '</li>'; }).join('') + '</ul>');
    });
  }
  function exportDoc(){
    var items = sheetExportItems();
    if(!items.length){ alert('내보낼 항목이 없습니다(필터 결과 0건).'); return; }
    var h = ['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>정의시트</title>',
      '<style>body{font-family:"맑은 고딕","Malgun Gothic",sans-serif;font-size:10.5pt;line-height:1.5;} h1{font-size:16pt;margin:0 0 4pt;} h2{font-size:13pt;border-bottom:1.5pt solid #333;margin:16pt 0 6pt;} h3{font-size:11.5pt;color:#333;margin:10pt 0 4pt;} .meta{color:#666;font-size:9pt;} .topic{font-weight:bold;font-size:11pt;margin:10pt 0 2pt;} .kind{font-weight:normal;color:#888;font-size:9pt;} .lbl{color:#1d4ed8;font-weight:bold;margin:4pt 0 1pt;} .sec{font-weight:bold;margin:6pt 0 2pt;} .note{color:#666;} pre{font-family:Consolas,"D2Coding","맑은 고딕",monospace;font-size:9pt;white-space:pre-wrap;margin:2pt 0;background:#f6f6f6;padding:3pt 5pt;} table{border-collapse:collapse;margin:3pt 0 6pt;} td,th{border:0.75pt solid #999;padding:2pt 6pt;font-size:9.5pt;vertical-align:top;} th{background:#eee;} ul{margin:2pt 0 4pt 18pt;}</style></head><body>',
      '<h1>정보관리기술사 정의시트</h1>',
      '<p class="meta">추출 ' + docEsc(expStampHuman()) + ' · 총 ' + items.length + '토픽 · 필터 과목=' + docEsc(expDomLabel()) + ' / 단원=' + docEsc(expSecLabel()) + ' / 검색=' + docEsc(state.q || '(없음)') + '</p>'];
    var curDom = null, curSec = null;
    items.forEach(function(it){
      if(it.domLabel !== curDom){ curDom = it.domLabel; curSec = null; h.push('<h2>' + docEsc(curDom) + '</h2>'); }
      if(it.secTitle !== curSec){ curSec = it.secTitle; h.push('<h3>' + docEsc(curSec) + '</h3>'); }
      var c = it.card, kind = c.essay ? '2교시 논술' : (c.compare ? '비교' : '일반');
      h.push('<p class="topic">● ' + docEsc(c.title) + ' <span class="kind">〔' + kind + '〕</span></p>');
      if(c.keyword) h.push('<p><span class="lbl">리드키워드 :</span> ' + docEsc(c.keyword) + '</p>');
      if(c.essay){ docEssay(h, c); }
      else {
        var def = GS.defText ? GS.defText(c) : (c.def || '');
        if(def) h.push('<p><span class="lbl">정의 :</span> ' + docEsc(def) + '</p>');
        if(c.diagram){ h.push('<p class="lbl">구성도</p><pre>' + docEsc(c.diagram) + '</pre>'); }
        if(c.diagramNote) h.push('<p class="note">' + docEsc(c.diagramNote) + '</p>');
        if(c.table && c.table.rows && c.table.rows.length){ h.push('<p class="lbl">구성요소</p>' + docTable(c.table)); }
        else if(c.compare && c.defTable && c.defTable.rows){ h.push('<p class="lbl">정의비교</p>' + docTable(c.defTable)); }
        if(c.note) h.push('<p class="note">' + docEsc(c.note) + '</p>');
      }
    });
    h.push('</body></html>');
    var blob = new Blob(['﻿' + h.join('\n')], { type:'application/msword;charset=utf-8;' });
    expDownload(blob, '정의시트_' + expStamp() + '.doc');
  }
  function exportCsv(){
    var rows = sheetExportRows();
    if(!rows.length){ alert('내보낼 항목이 없습니다(필터 결과 0건).'); return; }
    var esc = function(v){ v = String(v==null?'':v); return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g,'""') + '"' : v; };
    var lines = [EXP_COLS.join(',')].concat(rows.map(function(r){ return EXP_COLS.map(function(k){ return esc(r[k]); }).join(','); }));
    var blob = new Blob(['﻿' + lines.join('\r\n')], { type:'text/csv;charset=utf-8;' });   // BOM: Excel 한글 호환
    expDownload(blob, '정의시트_' + expStamp() + '.csv');
  }
  function exportXlsx(){
    var rows = sheetExportRows();
    if(!rows.length){ alert('내보낼 항목이 없습니다(필터 결과 0건).'); return; }
    var btn = document.getElementById('exportXlsx');
    function go(){
      if(btn) btn.disabled = false;
      var ws = XLSX.utils.json_to_sheet(rows, { header:EXP_COLS });
      ws['!cols'] = [{wch:16},{wch:22},{wch:26},{wch:10},{wch:18},{wch:60},{wch:50},{wch:34},{wch:60},{wch:34}];
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, '정의시트');
      XLSX.writeFile(wb, '정의시트_' + expStamp() + '.xlsx');
    }
    if(window.XLSX) return go();
    if(btn) btn.disabled = true;   // SheetJS(~1MB) 최초 클릭 시 지연 로드
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload = go;
    s.onerror = function(){ if(btn) btn.disabled = false; alert('Excel 모듈(SheetJS) 로드 실패 — 네트워크 확인 후 재시도.'); };
    document.head.appendChild(s);
  }
  var _expTxt = document.getElementById('exportTxt'); if(_expTxt) _expTxt.addEventListener('click', exportTxt);
  var _expDoc = document.getElementById('exportDoc'); if(_expDoc) _expDoc.addEventListener('click', exportDoc);
  var _expCsv = document.getElementById('exportCsv'); if(_expCsv) _expCsv.addEventListener('click', exportCsv);
  var _expXlsx = document.getElementById('exportXlsx'); if(_expXlsx) _expXlsx.addEventListener('click', exportXlsx);

  // ---- 카드 확대 모달(카드 클릭/Enter 시 크게 보기) ----
  var modalEl  = document.getElementById('cardModal');
  var modalBody = modalEl ? modalEl.querySelector('.cmodal-body') : null;
  var modalCloseBtn = modalEl ? modalEl.querySelector('.cmodal-x') : null;
  var lastFocused = null;
  // 카드 DOM(data-dom + h3 제목)으로 원본 카드 데이터 조회 — 답안지 뷰 생성용
  function findCardData(el){
    if(!el || !DOMAINS) return null;
    var dom = el.getAttribute('data-dom');
    var h3 = el.querySelector('h3');
    var title = h3 ? h3.textContent : '';
    var found = null;
    DOMAINS.forEach(function(d){
      if(found || d.id !== dom) return;
      (d.cards||[]).forEach(function(c){ if(!found && c.title === title) found = c; });
    });
    return found;
  }
  function openCardModal(cardEl){
    if(!modalEl || !modalBody) return;
    lastFocused = document.activeElement;       // 닫을 때 포커스 복귀용
    var clone = cardEl.cloneNode(true);
    clone.classList.remove('hidden');
    clone.removeAttribute('tabindex');          // 모달 안에선 카드 자체 포커스 불필요
    modalBody.innerHTML = '';
    modalBody.classList.remove('as-on');
    // 1교시 카드(일반·비교)면 '답안 모드' 토글 제공 — 카드를 골격 01~22줄 답안지로 전환(모든 줄 왼쪽 줄번호)
    var cdata = findCardData(cardEl);
    var canSheet = cdata && GS.answerSheetHTML;
    if(canSheet){
      var abtn = document.createElement('button');
      abtn.type = 'button';
      abtn.className = 'cmodal-answer';
      abtn.setAttribute('aria-pressed','false');
      abtn.textContent = '📑 답안 모드 (골격 '+(cdata.essay ? '01~66줄·3페이지' : '01~22줄')+')';
      abtn.addEventListener('click', function(){
        var on = modalBody.classList.toggle('as-on');
        abtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      modalBody.appendChild(abtn);
    }
    modalBody.appendChild(clone);
    if(canSheet){
      var wrap = document.createElement('div');
      wrap.className = 'asheet-wrap';
      wrap.innerHTML = GS.answerSheetHTML(cdata);
      modalBody.appendChild(wrap);
    }
    modalEl.setAttribute('aria-label', (cardEl.getAttribute('aria-label')||'카드') + ' 확대 보기');
    modalEl.classList.remove('hidden');
    modalEl.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    if(modalCloseBtn) modalCloseBtn.focus();    // 포커스를 모달로 이동
  }
  function closeCardModal(){
    if(!modalEl) return;
    if(modalBody) modalBody.classList.remove('as-on');
    modalEl.classList.add('hidden');
    modalEl.setAttribute('aria-hidden','true');
    if(modalBody) modalBody.innerHTML = '';
    document.body.style.overflow = '';
    if(lastFocused && lastFocused.focus) lastFocused.focus();   // 트리거로 포커스 복귀
    lastFocused = null;
  }
  function modalOpen(){ return modalEl && !modalEl.classList.contains('hidden'); }
  if(modalEl){
    // 카드 클릭으로 열기(텍스트 드래그 선택 중에는 무시)
    contentEl.addEventListener('click', function(e){
      if(!(e.target && e.target.closest)) return;
      if(e.target.closest('.cm-btn')) return;   // 진도 마크 버튼은 모달 열지 않음
      // essay 절 아코디언(모바일): 절 헤더 클릭 → 접기/펼치기
      var esh = e.target.closest('.es-h');
      if(esh){ var sec=esh.closest('.es-sec'); if(sec) sec.classList.toggle('collapsed'); return; }
      // 카드 암기모드: 정의 가리기 상태에서 정의 클릭 → 해당 정의만 공개(모달 미열림)
      if(contentEl.classList.contains('cards-mask')){
        var def = e.target.closest('.def');
        if(def){ def.classList.add('revealed'); return; }
      }
      if(window.getSelection && String(window.getSelection()).length) return;
      var card = e.target.closest('.card');
      if(card) openCardModal(card);
    });
    // 카드 키보드(Enter/Space)로 열기 — 카드는 role=button tabindex=0
    contentEl.addEventListener('keydown', function(e){
      if(e.key!=='Enter' && e.key!==' ' && e.key!=='Spacebar') return;
      var card = e.target && e.target.closest ? e.target.closest('.card') : null;
      if(card){ e.preventDefault(); openCardModal(card); }
    });
    modalEl.addEventListener('click', function(e){
      var esh = e.target && e.target.closest ? e.target.closest('.es-h') : null;
      if(esh){ var sec=esh.closest('.es-sec'); if(sec) sec.classList.toggle('collapsed'); return; }
      if(e.target && e.target.getAttribute && e.target.getAttribute('data-close')) closeCardModal();
    });
    document.addEventListener('keydown', function(e){
      if(!modalOpen()) return;
      if(e.key==='Escape'){ closeCardModal(); return; }
      if(e.key==='Tab'){   // 포커스 트랩 — 모달 내부 포커스 가능 요소 순환
        var f = modalEl.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if(!f.length) return;
        var first=f[0], last=f[f.length-1];
        if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
      }
    });
  }
  // 빈 상태의 '필터 초기화' 버튼
  if(emptyEl){ var rb = emptyEl.querySelector('[data-reset]'); if(rb) rb.addEventListener('click', resetFilters); }

  // ---- 검색(전역, 활성 뷰에 적용) ----
  searchEl.addEventListener('input', function(){
    state.q = searchEl.value.trim().toLowerCase();
    if(state.view==='quiz') return;   // 퀴즈는 검색어 미사용(매 입력마다 재출제 방지)
    applyActiveFilter();
  });

  // ---- 검색 방식 토글(AND: 모두 포함 / OR: 하나라도 포함) ----
  var smodeEl = document.getElementById('searchMode');
  function renderSmode(){
    if(!smodeEl) return;
    var or = state.qmode==='or';
    smodeEl.textContent = or ? 'OR' : 'AND';
    smodeEl.classList.toggle('is-or', or);
    smodeEl.setAttribute('aria-pressed', or);
    smodeEl.title = or ? '검색 방식: OR(단어 중 하나라도 포함) — 눌러 AND로'
                       : '검색 방식: AND(단어 모두 포함) — 눌러 OR로';
  }
  if(smodeEl){
    renderSmode();
    smodeEl.addEventListener('click', function(){
      state.qmode = (state.qmode==='or') ? 'and' : 'or';
      renderSmode();
      if(state.q && state.view!=='quiz') applyActiveFilter();
    });
  }

  // ---- 환경설정(테마·글자크기) — localStorage 저장, <head> 인라인 스크립트가 초기 적용 ----
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeToggle');
  function renderTheme(){
    var dark = root.getAttribute('data-theme')==='dark';
    if(themeBtn){
      themeBtn.setAttribute('aria-pressed', dark);
      themeBtn.title = dark ? '라이트 모드로' : '다크 모드로';
      themeBtn.innerHTML = '<i data-lucide="'+(dark?'sun':'moon')+'"></i>';
      if(window.lucide) lucide.createIcons();
    }
  }
  if(themeBtn){
    renderTheme();
    themeBtn.addEventListener('click', function(){
      var dark = root.getAttribute('data-theme')==='dark';
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try{ localStorage.setItem('gs_theme', next); }catch(e){}
      renderTheme();
    });
  }
  var FS = ['', 'lg', 'xl'];
  function setFs(dir){
    var cur = root.getAttribute('data-fs') || '';
    var i = Math.max(0, Math.min(FS.length-1, FS.indexOf(cur) + dir));
    var v = FS[i];
    if(v) root.setAttribute('data-fs', v); else root.removeAttribute('data-fs');
    try{ localStorage.setItem('gs_fs', v); }catch(e){}
  }
  var fUp = document.getElementById('fontUp'); if(fUp) fUp.addEventListener('click', function(){ setFs(1); });
  var fDn = document.getElementById('fontDn'); if(fDn) fDn.addEventListener('click', function(){ setFs(-1); });

  // ---- 카드 암기모드(정의 가리기) — 카드 뷰에서 정의를 흐리게, 정의 클릭 시 개별 공개 ----
  var maskBtn = document.getElementById('cardMask');
  function renderCardMask(){
    var on = contentEl.classList.contains('cards-mask');
    if(maskBtn){
      maskBtn.setAttribute('aria-pressed', on);
      maskBtn.title = on ? '정의 가리기 해제' : '카드 정의 가리기(암기모드) — 정의 클릭 시 확인';
      maskBtn.innerHTML = '<i data-lucide="'+(on?'eye':'eye-off')+'"></i>';
      if(window.lucide) lucide.createIcons();
    }
  }
  try{ if(localStorage.getItem('gs_cardmask')==='1') contentEl.classList.add('cards-mask'); }catch(e){}
  renderCardMask();
  if(maskBtn){
    maskBtn.addEventListener('click', function(){
      var on = contentEl.classList.toggle('cards-mask');
      if(on){ contentEl.querySelectorAll('.def.revealed').forEach(function(d){ d.classList.remove('revealed'); }); }
      try{ localStorage.setItem('gs_cardmask', on?'1':'0'); }catch(e){}
      renderCardMask();
    });
  }

  // ---- 첫 방문 온보딩 배너 ----
  var onboardEl = document.getElementById('onboard');
  if(onboardEl){
    var done = false; try{ done = localStorage.getItem('gs_onboard')==='done'; }catch(e){}
    if(!done) onboardEl.classList.remove('hidden');
    var obx = onboardEl.querySelector('.ob-x');
    if(obx) obx.addEventListener('click', function(){
      onboardEl.classList.add('hidden');
      try{ localStorage.setItem('gs_onboard','done'); }catch(e){}
    });
  }

  // ---- 진도 필터 facet(전체/미완료/완료/북마크/초기화) ----
  function buildProgFacet(){
    if(!progFacetEl) return;
    var n = totalCards();
    function chip(v,label){ var on=state.only===v; return '<button type="button" class="chip prog'+(on?' active':'')+'" data-only="'+v+'" aria-pressed="'+on+'">'+label+'</button>'; }
    function lchip(v,label){ var on=state.lvl===v; return '<button type="button" class="chip lvl'+(on?' active':'')+'" data-lvl="'+v+'" aria-pressed="'+on+'">'+label+'</button>'; }
    progFacetEl.innerHTML = '<span class="facet-hint">진도</span>' +
      chip('all','전체') + chip('undone','미완료 <b>'+(n-progCount('done'))+'</b>') +
      chip('done','✓ 완료 <b>'+progCount('done')+'</b>') + chip('mark','★ 북마크 <b>'+progCount('mark')+'</b>') +
      chip('wrong','⚠ 오답 <b>'+progCount('wrong')+'</b>') +
      '<button type="button" class="chip prog prog-reset" data-only="reset" title="학습완료·북마크·오답 기록 초기화">초기화</button>' +
      '<span class="fr-div"></span><span class="facet-hint">난이도</span>' +
      lchip('all','전체') + lchip('핵심','★핵심') + lchip('표준','●표준') + lchip('심화','▲심화');
    progFacetEl.querySelectorAll('.chip.prog').forEach(function(ch){
      ch.addEventListener('click', function(){
        var v = ch.getAttribute('data-only');
        if(v==='reset'){ if(confirm('학습완료·북마크·오답 기록을 모두 지울까요?')){ PROG={done:{},mark:{},wrong:{}}; saveProg(); applyProgClasses(); state.only='all'; buildProgFacet(); applyActiveFilter(); } return; }
        state.only = v; buildProgFacet(); applyActiveFilter();
      });
    });
    progFacetEl.querySelectorAll('.chip.lvl').forEach(function(ch){
      ch.addEventListener('click', function(){ state.lvl = ch.getAttribute('data-lvl'); buildProgFacet(); applyActiveFilter(); });
    });
  }
  // 카드 마크 버튼(✓완료·★북마크) 클릭 — 위임, 모달 안 열리게 stopPropagation
  contentEl.addEventListener('click', function(e){
    var b = e.target && e.target.closest ? e.target.closest('.cm-btn') : null;
    if(!b) return;
    e.stopPropagation();
    var card = b.closest('.card'); if(!card) return;
    var k = card.getAttribute('data-key'), act = b.getAttribute('data-act');
    var store = act==='done' ? PROG.done : PROG.mark;
    if(store[k]) delete store[k]; else store[k]=1;
    saveProg();
    card.classList.toggle(act==='done' ? 'is-done' : 'is-marked');
    // 시트 행도 동기화
    var row = sheetBody && sheetBody.querySelector('.sheet-row[data-key="'+(window.CSS&&CSS.escape?CSS.escape(k):k)+'"]');
    if(row) row.classList.toggle(act==='done'?'is-done':'is-marked', !!store[k]);
    buildProgFacet();
    if(state.only!=='all') applyFilter();
  });

  // ---- init ----
  buildContent();
  applyProgClasses();
  // 이어보기: 저장된 필터·뷰 복원
  var _r = null; try{ _r = JSON.parse(localStorage.getItem('gs_resume')||'null'); }catch(e){}
  if(_r){ if(_r.dom) state.dom=_r.dom; if(_r.sec) state.sec=_r.sec; if(_r.sub) state.sub=_r.sub; }
  buildDomFacet();
  buildSecFacet();
  buildSubFacet();
  buildProgFacet();
  if(_r && _r.view && _r.view!=='cards' && document.querySelector('#viewsw button[data-v="'+_r.view+'"]')) setView(_r.view);
  else applyFilter();
  if(window.lucide) lucide.createIcons();   // 정적 [data-lucide] 아이콘(앱바·뷰스위처·툴·모달) 렌더
})();
