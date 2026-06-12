// 통합 토픽 사이트 렌더러. 데이터(window.GISULSA)는 data/bundle.js 에서 주입.
// 토픽 수정: data/*.json 편집 후 99_도구_스크립트/build_bundle.py 재실행.
(function(){
  var DOMAINS = window.GISULSA;
  var domainsEl = document.getElementById('domains');
  var tabsEl = document.getElementById('tabs');

  if(!DOMAINS || !DOMAINS.length){
    domainsEl.innerHTML = '<div class="loaderr"><b>데이터를 불러오지 못했습니다.</b><br/>'+
      '<code>data/bundle.js</code> 가 없거나 비어 있습니다. <code>99_도구_스크립트/build_bundle.py</code> 를 실행해 데이터를 생성하세요.</div>';
    return;
  }

  mermaid.initialize({ startOnLoad:false, theme:'default', flowchart:{ curve:'basis' } });

  var state = {};   // domainId -> {cat, q, mermaidDone}

  function esc(s){ return (s==null?'':String(s)); }
  // HTML 텍스트 이스케이프(<,>,& 가 태그·엔티티로 해석돼 카드가 깨지는 것 방지)
  function escHTML(s){ return esc(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function escAttr(s){ return escHTML(s).replace(/"/g,'&quot;'); }

  function tableHTML(t){
    if(!t) return '';
    var h = '';
    if(t.head && t.head.length){
      h += '<tr>'+t.head.map(function(c){return '<th>'+escHTML(c)+'</th>';}).join('')+'</tr>';
    }
    var rows = t.rows||[];
    // 비교형 구분 그룹화: 1열이 ""인 행은 위 구분 셀에 rowspan 병합(빈 구분 셀은 렌더 생략).
    // 기존 표는 빈 1열이 없어 동작 불변(하위호환).
    rows.forEach(function(r, ri){
      var cells = '';
      r.forEach(function(c, ci){
        if(ci===0 && c===''){ return; }   // 위 구분에 병합됨 → 셀 생략
        var span = '';
        if(ci===0){
          var rs = 1;
          for(var k=ri+1; k<rows.length && rows[k][0]===''; k++) rs++;
          if(rs>1) span = ' rowspan="'+rs+'"';
        }
        cells += '<td'+span+'>'+escHTML(c)+'</td>';
      });
      h += '<tr>'+cells+'</tr>';
    });
    return '<table>'+h+'</table>';
  }

  function cardHTML(card, catMap){
    var c = catMap[card.category] || {color:'#cbd5e1',bg:'#f1f5f9',tagColor:'#475569'};
    var dnote = card.diagramNote ? '<div class="note">'+escHTML(card.diagramNote)+'</div>' : '';
    var fnote = card.note ? '<div class="note">'+escHTML(card.note)+'</div>' : '';
    var diag = card.diagram ? '<pre class="diagram">'+escHTML(card.diagram)+'</pre>' : '';
    var head = '<h3>'+escHTML(card.title)+'</h3><span class="tag" style="background:'+c.bg+';color:'+c.tagColor+'">'+escHTML(card.tag)+'</span>';
    var body;
    if(card.compare){
      // 비교형(A vs B): 1교시 비교형 골격 — I.정의 비교(2열표 A|B, 헤더1+본문3행) → II.상세 비교(3열표 구분|A|B)
      body =
        '<div class="blk"><div class="lbl">I. 정의 비교</div>'+tableHTML(card.defTable)+dnote+'</div>'+
        '<div class="blk"><div class="lbl ink">II. 상세 비교</div>'+tableHTML(card.table)+fnote+'</div>';
    } else {
      body =
        '<div class="blk"><div class="lbl">I. 정의</div><div class="def">'+escHTML(card.def)+'</div></div>'+
        '<div class="blk"><div class="lbl ink">II. 구성도 및 구성요소</div></div>'+
        '<div class="blk"><div class="lbl">1. 구성도</div>'+diag+dnote+'</div>'+
        '<div class="blk"><div class="lbl">2. 구성요소</div>'+tableHTML(card.table)+'</div>'+
        fnote;
    }
    return '<div class="card" data-cat="'+escAttr(card.category)+'" data-k="'+escAttr(card.keywords)+'" style="border-top-color:'+c.color+'">'+
      head+body+
    '</div>';
  }

  function buildDomain(d, idx){
    var catMap = {}; d.categories.forEach(function(c){ catMap[c.id]=c; });
    state[d.id] = { cat:'all', q:'', mermaidDone:false };

    var wrap = document.createElement('div');
    wrap.className = 'domain' + (idx===0?' active':'');
    wrap.setAttribute('data-id', d.id);

    // hero
    var hero = '<header class="hero" style="background:'+d.gradient+'">'+
      '<h1>'+d.title+'</h1>'+
      '<p>'+d.subtitle+'</p>'+
      '<p>각 토픽 = <b>I. 정의 → II. 구성도 및 구성요소 ( 1. 구성도 · 2. 구성요소 )</b></p>'+
    '</header>';

    // map
    var map = '<div class="mapcard"><h2>'+d.mermaidTitle+'</h2>'+
      '<div class="legend">'+d.legend+'</div>'+
      '<div class="mermaid"></div></div>';

    // controls (chips)
    var chips = '<span class="chip active" data-c="all">전체</span>' +
      d.categories.map(function(c){ return '<span class="chip" data-c="'+c.id+'">'+c.label+'</span>'; }).join('');
    var controls = '<div class="controls">'+
      '<input type="text" class="search" placeholder="🔍 '+d.label+' 토픽 검색" />'+
      '<div class="filters">'+chips+'</div>'+
      '<button class="btn-print">🖨 인쇄/PDF</button></div>'+
      '<p class="count"></p>';

    // content: sections + grids
    var content = '<div class="content">';
    d.sections.forEach(function(sec){
      var col = (catMap[sec.id]||{}).color || '#cbd5e1';
      var cardsInSec = d.cards.filter(function(c){ return c.category===sec.id; });
      content += '<div class="sec" data-sec="'+sec.id+'" style="border-color:'+col+'"><h2>'+sec.title+'</h2><p>'+sec.desc+'</p></div>';
      content += '<div class="grid">'+ cardsInSec.map(function(c){return cardHTML(c, catMap);}).join('') +'</div>';
    });
    // 섹션에 속하지 않은 카테고리(혹시 모를) 카드도 표시
    var secIds = d.sections.map(function(s){return s.id;});
    var orphan = d.cards.filter(function(c){ return secIds.indexOf(c.category)<0; });
    if(orphan.length){
      content += '<div class="grid">'+ orphan.map(function(c){return cardHTML(c, catMap);}).join('') +'</div>';
    }
    content += '</div>';

    wrap.innerHTML = '<div class="wrap-outer">'+hero+'<div class="wrap">'+map+controls+content+'</div></div>';
    domainsEl.appendChild(wrap);
    // mermaid 소스는 textContent 로 주입(<br/> 등 보존)
    wrap.querySelector('.mermaid').textContent = d.mermaid;

    // 칩 active 색
    var chipEls = wrap.querySelectorAll('.chip');
    chipEls.forEach(function(ch){
      ch.addEventListener('click', function(){
        chipEls.forEach(function(x){ x.classList.remove('active'); x.style.background=''; });
        ch.classList.add('active');
        var id = ch.getAttribute('data-c');
        if(id!=='all'){ ch.style.background=(catMap[id]||{}).color||'#334155'; }
        state[d.id].cat = id;
        applyFilter(d, wrap);
      });
    });
    var searchEl = wrap.querySelector('.search');
    searchEl.addEventListener('input', function(){ state[d.id].q = searchEl.value.trim().toLowerCase(); applyFilter(d, wrap); });
    wrap.querySelector('.btn-print').addEventListener('click', function(){ window.print(); });

    applyFilter(d, wrap);
    return wrap;
  }

  function applyFilter(d, wrap){
    var st = state[d.id];
    var cards = wrap.querySelectorAll('.card');
    var shown = 0;
    cards.forEach(function(c){
      var catOk = st.cat==='all' || c.getAttribute('data-cat')===st.cat;
      var text = (c.getAttribute('data-k')+' '+c.textContent).toLowerCase();
      var qOk = !st.q || text.indexOf(st.q)>=0;
      var ok = catOk && qOk;
      c.classList.toggle('hidden', !ok);
      if(ok) shown++;
    });
    // 섹션 헤더: 보이는 카드 없으면 숨김
    wrap.querySelectorAll('.sec').forEach(function(s){
      var sc = s.getAttribute('data-sec');
      var any = Array.prototype.some.call(wrap.querySelectorAll('.card'), function(c){
        return c.getAttribute('data-cat')===sc && !c.classList.contains('hidden');
      });
      s.classList.toggle('hidden', !any);
    });
    var cnt = wrap.querySelector('.count');
    if(cnt) cnt.textContent = '표시 중: '+shown+' / '+cards.length+' 토픽';
  }

  function renderMermaid(wrap, d){
    var st = state[d.id];
    if(st.mermaidDone) return;
    var el = wrap.querySelector('.mermaid');
    if(!el) return;
    try{
      mermaid.run({ nodes:[el] });
      st.mermaidDone = true;
    }catch(e){ /* ignore */ }
  }

  // 탭 생성
  var wraps = {};
  DOMAINS.forEach(function(d, idx){
    wraps[d.id] = buildDomain(d, idx);
    var tab = document.createElement('button');
    tab.className = 'tab' + (idx===0?' active':'');
    tab.setAttribute('data-id', d.id);
    tab.innerHTML = '<span class="ic">'+d.icon+'</span>'+d.label+'<span class="cnt">'+d.cards.length+'</span>';
    tab.style.cssText = idx===0 ? ('background:'+d.accent+';') : '';
    tab.addEventListener('click', function(){ activate(d.id); });
    tabsEl.appendChild(tab);
  });

  function activate(id){
    DOMAINS.forEach(function(d){
      var on = d.id===id;
      wraps[d.id].classList.toggle('active', on);
      var tab = tabsEl.querySelector('.tab[data-id="'+d.id+'"]');
      tab.classList.toggle('active', on);
      tab.style.background = on ? d.accent : '';
      if(on){ renderMermaid(wraps[d.id], d); window.scrollTo(0,0); }
    });
  }

  // 첫 도메인 mermaid 렌더
  renderMermaid(wraps[DOMAINS[0].id], DOMAINS[0]);
})();
