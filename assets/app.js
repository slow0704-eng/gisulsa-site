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
  var emptyEl    = document.getElementById('emptyState');

  // 검색·필터 결과 0건 시 빈 상태 안내 표시(카드·시트 뷰)
  function toggleEmpty(show){ if(emptyEl) emptyEl.classList.toggle('hidden', !show); }
  // 과목·단원·검색어 초기화 후 재적용(빈 상태의 '필터 초기화' 버튼)
  function resetFilters(){
    state.q=''; state.dom='all'; state.sec='all';
    if(searchEl) searchEl.value='';
    buildDomFacet(); buildSecFacet(); applyActiveFilter();
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

  // mermaid 는 CDN 로드(전역). 차단·오프라인이어도 사이트 전체가 죽지 않도록 가드.
  var MERMAID = (typeof mermaid !== 'undefined') ? mermaid : null;
  if(MERMAID) MERMAID.initialize({ startOnLoad:false, theme:'default', flowchart:{ curve:'basis' } });

  // 상태: 전역 검색어 q, 과목 dom('all'|domId), 단원 sec('all'|sectionId), 뷰 view('cards'|'graph'|'sheet'|'quiz')
  var state = { q:'', dom:'all', sec:'all', view:'cards' };
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
    secMapsDone = true;
    if(!MERMAID) return;   // mermaid 미로드 — 관계도만 생략(나머지 화면은 정상)
    // 한 번의 배치 호출로 전부 렌더(개별 동시호출 시 mermaid 내부 상태 충돌로 일부 깨짐).
    // suppressErrors: 특정 다이어그램 오류가 나머지를 막지 않도록.
    try{ MERMAID.run({ nodes: Array.prototype.slice.call(els), suppressErrors:true }); }
    catch(e){ /* ignore */ }
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
    var html = '<button type="button" class="chip sec'+(state.sec==='all'?' active':'')+'" aria-pressed="'+(state.sec==='all')+'" data-sec="all">전체 단원</button>';
    (d.sections||[]).forEach(function(sec){
      var col = (catMap[sec.id]||{}).color || '#334155';
      var on = state.sec===sec.id;
      var style = on ? ('background:'+col+';border-color:transparent;color:#fff') : '';
      html += '<button type="button" class="chip sec'+(on?' active':'')+'" aria-pressed="'+on+'" data-sec="'+sec.id+'" style="'+style+'">'+sec.title+'</button>';
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
      var groupVisible = false;
      g.querySelectorAll('.card').forEach(function(c){
        var text = q ? (c.getAttribute('data-k')+' '+c.textContent).toLowerCase() : '';
        var ok = GS.cardMatches(domId, c.getAttribute('data-cat'), text, q, state.dom, state.sec);
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
    if(mapDone[domId] || !MERMAID) return;
    var el = contentEl.querySelector('.mapcard[data-map="'+domId+'"] .mermaid');
    if(!el) return;
    try{ MERMAID.run({ nodes:[el] }); mapDone[domId] = true; }catch(e){ /* ignore */ }
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
        if(c.essay) return;   // 2교시 논술 카드는 자동 다지선다 대상에서 제외
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
      var text = q ? (r.getAttribute('data-k')+' '+r.textContent).toLowerCase() : '';
      var ok = GS.cardMatches(r.getAttribute('data-dom'), r.getAttribute('data-cat'), text, q, state.dom, state.sec);
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
      var on = b.getAttribute('data-v')===v;
      b.classList.toggle('active', on); b.setAttribute('aria-pressed', on); });

    // 검색은 카드·시트 뷰에서만 적용 — 관계도·퀴즈에선 입력 비활성화로 적용범위를 명시
    var searchable = (v==='cards' || v==='sheet');
    if(searchEl){
      searchEl.disabled = !searchable;
      searchEl.placeholder = searchable ? '🔍 전 과목 통합 검색 — 토픽·키워드'
        : (v==='graph' ? '관계도 뷰 — 검색 미적용' : '퀴즈 뷰 — 아래 필터로 출제 범위 조절');
    }
    if(v==='graph' || v==='quiz') toggleEmpty(false);
    if(v==='graph') countEl.textContent = '🗺 관계도';

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
  // 구성도/구성요소표 원래대로(펼침) 토글 — 시트 셀의 1줄(st-flat) ↔ 원본(st-orig) 전환
  var diagOrig = document.getElementById('diagOrig');
  if(diagOrig){ diagOrig.addEventListener('change', function(){ sheetBody.classList.toggle('diag-orig', diagOrig.checked); }); }
  var tblOrig = document.getElementById('tblOrig');
  if(tblOrig){ tblOrig.addEventListener('change', function(){ sheetBody.classList.toggle('tbl-orig', tblOrig.checked); }); }

  // ---- 정의 시트 내보내기(CSV / Excel) — 현재 검색·과목·단원 필터 반영 ----
  var EXP_COLS = ['과목','단원','토픽','유형','리드키워드','정의','구성도','구성요소'];
  function sheetExportRows(){
    var q = state.q, rows = [];
    DOMAINS.forEach(function(d){
      var catLabel = {}, secTitle = {};
      (d.categories||[]).forEach(function(x){ catLabel[x.id] = x.label; });
      (d.sections||[]).forEach(function(s){ secTitle[s.id] = s.title; });
      (d.cards||[]).forEach(function(c){
        var def = GS.defText ? GS.defText(c) : (c.def || '');
        var text = q ? (c.keywords + ' ' + c.title + ' ' + def).toLowerCase() : '';
        if(!GS.cardMatches(d.id, c.category, text, q, state.dom, state.sec)) return;
        rows.push({
          '과목': d.label,
          '단원': secTitle[c.category] || catLabel[c.category] || '기타',
          '토픽': c.title,
          '유형': c.essay ? '2교시 논술' : (c.compare ? '비교' : '일반'),
          '리드키워드': c.keyword || '',
          '정의': def,
          '구성도': GS.flatDiagram ? GS.flatDiagram(c) : '',
          '구성요소': GS.flatTable ? GS.flatTable(c.table) : ''
        });
      });
    });
    return rows;
  }
  function expStamp(){ var d = new Date(), p = function(n){ return (n<10?'0':'')+n; }; return '' + d.getFullYear() + p(d.getMonth()+1) + p(d.getDate()); }
  function expDownload(blob, name){
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function(){ document.body.removeChild(a); URL.revokeObjectURL(url); }, 120);
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
      ws['!cols'] = [{wch:16},{wch:22},{wch:26},{wch:10},{wch:18},{wch:60},{wch:50},{wch:60}];
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
      if(window.getSelection && String(window.getSelection()).length) return;
      var card = e.target && e.target.closest ? e.target.closest('.card') : null;
      if(card) openCardModal(card);
    });
    // 카드 키보드(Enter/Space)로 열기 — 카드는 role=button tabindex=0
    contentEl.addEventListener('keydown', function(e){
      if(e.key!=='Enter' && e.key!==' ' && e.key!=='Spacebar') return;
      var card = e.target && e.target.closest ? e.target.closest('.card') : null;
      if(card){ e.preventDefault(); openCardModal(card); }
    });
    modalEl.addEventListener('click', function(e){
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

  // ---- init ----
  buildContent();
  buildDomFacet();
  buildSecFacet();
  applyFilter();
  if(window.lucide) lucide.createIcons();   // 정적 [data-lucide] 아이콘(앱바·뷰스위처·툴·모달) 렌더
})();
