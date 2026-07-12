// 렌더링 레이어 — 카드/표를 HTML 문자열로 생성하는 순수 함수만(DOM·이벤트·상태 없음).
// 카드 "표시 구조"를 바꾸려면 여기(특히 cardHTML)를 편집한다. 앱 동작/배선은 app.js.
// 공개 네임스페이스: window.GS = { escHTML, escAttr, tableHTML, cardHTML }
// (빌드 단계 없음 — index.html 에서 app.js 보다 먼저 로드)
(function(){
  var GS = (window.GS = window.GS || {});

  function toStr(s){ return (s==null?'':String(s)); }
  // HTML 텍스트 이스케이프(<,>,& 가 태그·엔티티로 해석돼 카드가 깨지는 것 방지)
  function escHTML(s){ return toStr(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function escAttr(s){ return escHTML(s).replace(/"/g,'&quot;'); }

  // 도메인 → {categoryId: category} 맵(app.js·graph.js 공용 — 중복 제거)
  function buildCatMap(d){ var m={}; ((d&&d.categories)||[]).forEach(function(c){ m[c.id]=c; }); return m; }
  // 검색식 파서(표준화). 지원 문법:
  //   "여러 단어"  → 공백 포함 한 구문으로 매칭   ·  -제외어(또는 !제외어) → 해당어 포함 시 탈락
  //   OR / |       → 결과를 OR 결합(하나라도 포함)  ·  AND / & → 기본(모두 포함)이라 소비만
  // 반환 {pos:[구문…], not:[제외어…], orOp:bool}. 미지정 시 결합은 qmode(and/or) 토글을 따름.
  function parseQuery(q){
    var toks = [], re = /"([^"]*)"|(\S+)/g, m;
    while((m = re.exec(String(q||'')))){ toks.push({ p: m[1]!=null, v: m[1]!=null ? m[1] : m[2] }); }
    var pos = [], not = [], orOp = false;
    toks.forEach(function(t){
      var v = t.v;
      if(!t.p){
        var up = v.toUpperCase();
        if(up==='OR' || v==='|'){ orOp = true; return; }
        if(up==='AND' || v==='&'){ return; }                       // AND=기본, 연산자로만 소비
        if((v.charAt(0)==='-' || v.charAt(0)==='!') && v.length>1){ not.push(v.slice(1).toLowerCase()); return; }
      }
      v = v.toLowerCase(); if(v) pos.push(v);
    });
    return { pos: pos, not: not, orOp: orOp };
  }
  // 카드/시트 행 공용 필터 술어(순수). 과목·단원·검색식(소문자 q) 일치 여부.
  function cardMatches(domId, catId, text, q, selDom, selSec, qmode){
    if(selDom!=='all' && selDom!==domId) return false;
    if(selSec!=='all' && selSec!==catId) return false;
    if(q){
      var pq = parseQuery(q), s = String(text);
      if(pq.not.length && pq.not.some(function(t){ return s.indexOf(t) >= 0; })) return false;   // 제외어
      if(pq.pos.length){
        var useOr = pq.orOp || qmode==='or';
        var hit = useOr ? pq.pos.some(function(t){ return s.indexOf(t) >= 0; })
                        : pq.pos.every(function(t){ return s.indexOf(t) >= 0; });
        if(!hit) return false;
      }
    }
    return true;
  }
  // 카드 공통 속성 — 컨테이너는 role=group(그룹 라벨). 확대·진도 컨트롤은 카드 내부의
  // 실제 <button>(card-zoom·cm-btn)로 분리해 nested-interactive(WCAG 4.1.2) 회피.
  function cardAttrs(card, domId, extraClass){
    return 'class="card'+(extraClass?' '+extraClass:'')+'" role="group"'+
      ' aria-label="'+escAttr(card.title)+'"'+
      ' data-dom="'+escAttr(domId)+'" data-cat="'+escAttr(card.category)+'" data-sub="'+escAttr(card.subcat||'')+'" data-k="'+escAttr(card.keywords)+'"'+
      ' data-key="'+escAttr(domId+'|'+card.title)+'" data-lvl="'+escAttr(card.level||'')+'"';
  }
  // 확대(펼쳐 보기) 트리거 — 카드당 단일 명시적 버튼(키보드·스크린리더 진입점)
  function zoomCtl(card){
    return '<button type="button" class="card-zoom" data-act="zoom" aria-label="'+escAttr(card.title)+' 확대 보기" title="확대 보기">⤢</button>';
  }
  // 난이도·빈출 배지(★핵심·●표준·▲심화)
  function lvlBadge(card){
    var L = card.level; if(!L) return '';
    var cls = { '핵심':'lv-hot', '표준':'lv-std', '심화':'lv-adv' }[L] || 'lv-std';
    var ic  = { '핵심':'★', '표준':'●', '심화':'▲' }[L] || '';
    return '<span class="lv-badge '+cls+'" title="난이도·빈출: '+escAttr(L)+'">'+ic+L+'</span>';
  }
  // 카드 진도 마크(학습완료·북마크) — 카드 우상단, 클릭 시 모달 대신 토글(app.js가 위임 처리)
  function markCtl(){
    return '<div class="card-mark">'+
      '<button type="button" class="cm-btn cm-done" data-act="done" aria-label="학습완료 표시" aria-pressed="false" title="학습완료 표시">✓</button>'+
      '<button type="button" class="cm-btn cm-mark" data-act="mark" aria-label="북마크" aria-pressed="false" title="북마크">★</button>'+
    '</div>';
  }

  // 6-Key(트렌드·도구·사상·목적·표준·거버넌스) 노출 미터 — 카드 텍스트에서 큐레이션 정규식으로 감지.
  // 채점 관점의 "답안 6요소 노출" 방법론을 카드에서 시각화(소프트 신호 — 참고용).
  var SIXKEY = [
    { k:'표준', ic:'📐', re:/ISO|IEC|IEEE|RFC|W3C|OMG|NIST|ITU|ANSI|TTA|OWASP|PMBOK|COBIT|ITIL|TOGAF|CMMI|SPICE|GDPR|2501\d|4201\d|2700\d|9001|표준|규격|프로토콜|준수/i },
    { k:'도구', ic:'🛠', re:/도구|프레임워크|framework|라이브러리|플랫폼|Docker|Kubernetes|K8s|Jenkins|Git\b|Terraform|Kafka|Spark|Hadoop|TensorFlow|PyTorch|Prometheus|Grafana|Ansible|엔진|솔루션|미들웨어/i },
    { k:'사상', ic:'💡', re:/원칙|사상|패러다임|철학|지향|SOLID|DRY|KISS|애자일|Agile|DevOps|제로트러스트|관심사\s?분리|캡슐화|추상화|모듈화|불변성|선언형/i },
    { k:'목적', ic:'🎯', re:/목적|효과|위해|향상|최소화|극대화|보장|절감|개선|달성|확보|제고|최적화|방지|완화|단축/i },
    { k:'트렌드', ic:'📈', re:/\bAI\b|인공지능|클라우드|MSA|마이크로서비스|서버리스|양자|생성형|LLM|엣지|edge|디지털\s?전환|\bDX\b|메타버스|블록체인|최신|차세대|자율/i },
    { k:'거버넌스', ic:'🏛', re:/거버넌스|governance|통제|정책|규정|컴플라이언스|compliance|감사|관리체계|책임|RACI|내부통제|의사결정|승인|위원회/i }
  ];
  function sixKeyMeter(card){
    if(card.essay) return '';
    var blob = [card.title, card.tag, card.keyword, card.keywords, card.def, card.diagram, card.diagramNote, card.note];
    if(card.table && card.table.rows){ card.table.rows.forEach(function(r){ blob = blob.concat(r); }); }
    if(card.defTable && card.defTable.rows){ card.defTable.rows.forEach(function(r){ blob = blob.concat(r); }); }
    var text = blob.filter(Boolean).join(' ');
    var hits = 0, chips = SIXKEY.map(function(s){
      var on = s.re.test(text); if(on) hits++;
      return '<span class="k6-chip'+(on?' on':'')+'" title="'+escAttr(s.k+(on?' 노출':' 미노출'))+'">'+s.ic+'</span>';
    }).join('');
    return '<div class="k6" aria-label="6-Key 노출 '+hits+'/6" title="6-Key(트렌드·도구·사상·목적·표준·거버넌스) 노출도 — 채점 방법론 참고">'+
      '<span class="k6-lbl" aria-hidden="true">6-Key</span>'+
      '<span class="k6-chips" aria-hidden="true">'+chips+'</span>'+
      '<span class="k6-n" aria-hidden="true">'+hits+'/6</span></div>';
  }

  function _p2(n){ return n<10 ? '0'+n : ''+n; }
  // 구성요소/비교 표. T1(접근성): thead/tbody·th scope(col/row/rowgroup)·sr-only caption.
  // T2(견고성): 연속 동일(또는 빈) 1열 값을 위 구분에 자동 rowspan 병합 + 고아행·열수 방어.
  function tableHTML(t, cls, caption){
    if(!t) return '';
    var cap = caption ? '<caption class="sr-only">'+escHTML(caption)+'</caption>' : '';
    var head = (t.head && t.head.length) ? t.head : null;
    var thead = head ? '<thead><tr>'+head.map(function(c){return '<th scope="col">'+escHTML(c)+'</th>';}).join('')+'</tr></thead>' : '';
    var rows = t.rows||[];
    // 정의 비교(cmp2): 각 열의 여러 행을 한 셀로 합쳐 복사 용이(칸 분할 없음 — 줄바꿈만).
    if(cls==='cmp2'){
      var nc = (head&&head.length) || (rows[0]?rows[0].length:0), mg=[];
      for(var ci=0; ci<nc; ci++){
        mg.push(rows.map(function(r){ return r[ci]; }).filter(function(x){ return x!=null && x!==''; }).join(' '));
      }
      var cbody = '<tbody><tr>'+mg.map(function(c){ return '<td>'+escHTML(c)+'</td>'; }).join('')+'</tr></tbody>';
      return '<table class="cmp2">'+cap+thead+cbody+'</table>';
    }
    var ncol = head ? head.length : (rows[0]?rows[0].length:0);
    var last1 = null;   // 마지막 유효 1열(구분) 값 — 빈 센티넬·연속 동일값 귀속용
    var trs = '';
    rows.forEach(function(r, ri){
      // 열수 방어: 부족분 빈칸 패딩, 초과분 무시(정렬 붕괴 차단)
      var row = (r||[]).slice(0, ncol);
      while(row.length < ncol) row.push('');
      var first = row[0]==null ? '' : row[0];
      // 자동 그룹화: 빈값 또는 앞 유효값과 동일 → 위 구분에 병합. 단 첫 데이터행이 빈값이면(앵커 없음) 폴백.
      var grouped = (first==='' || (last1!==null && first===last1));
      if(grouped && last1===null) grouped = false;
      var cells = '';
      row.forEach(function(c, ci){
        if(ci===0){
          if(grouped) return;   // 위 구분에 병합됨 → 셀 생략
          // 이 구분 값이 걸치는 행 수(이어지는 빈값·동일값 연속)
          var rs = 1;
          for(var k=ri+1; k<rows.length; k++){
            var nf = (rows[k] && rows[k][0]!=null) ? rows[k][0] : '';
            if(nf==='' || nf===first) rs++; else break;
          }
          var scope = rs>1 ? 'rowgroup' : 'row';
          cells += '<th scope="'+scope+'"'+(rs>1?' rowspan="'+rs+'"':'')+'>'+escHTML(c)+'</th>';
        } else {
          cells += '<td>'+escHTML(c)+'</td>';
        }
      });
      if(first!=='') last1 = first;   // 유효 구분값 갱신
      trs += '<tr>'+cells+'</tr>';
    });
    // T4: 3열표 열폭 고정(구분 22 / 구성요소 34 / 역할 44%) — table-layout:fixed 와 병용
    var colg = (ncol===3) ? '<colgroup><col style="width:22%"><col style="width:34%"><col style="width:44%"></colgroup>' : '';
    return '<table'+(cls?' class="'+cls+'"':'')+'>'+cap+colg+thead+'<tbody>'+trs+'</tbody></table>';
  }

  // 2교시 논술 카드 — 한 블록(개요 도식+개념+※) / 상세(표·구성도+※) 골격을 절(節)별로 렌더.
  // 절 스키마: { no, title, overview:{diagram,concepts[],note}, detail:{title,table,diagram,note}, conclusion[] }
  function essayBlock(b){
    if(!b) return '';
    var h = '';
    if(b.diagram)  h += '<pre class="diagram">'+escHTML(b.diagram)+'</pre>';
    if(b.concepts) b.concepts.forEach(function(t){ h += '<div class="def">'+escHTML(t)+'</div>'; });
    if(b.table)    h += tableHTML(b.table, '', b.title ? b.title+' 구성요소' : '구성요소 표');
    if(b.note)     h += '<div class="note">'+escHTML(b.note)+'</div>';
    return h;
  }
  // 2교시 66줄/3페이지 고정: 절에 page(1~3) 필드가 있으면 "── N페이지 (01~22) ──" 구분선 삽입.
  function essayPageTag(pg, first){
    var a = (pg-1)*22+1, b = pg*22;
    var aa = a<10 ? '0'+a : ''+a;
    return '<div class="es-pagetag'+(first?' first':'')+'">── '+pg+'페이지 ('+aa+'~'+b+') ──</div>';
  }
  function essayHTML(card){
    var p = card.problem || {};
    var secs = card.sections || [];
    var hasPages = secs.some(function(s){ return s.page; });   // page 필드 있을 때만 페이지 구분(기존 카드 무영향)
    var html = '';
    if(hasPages) html += essayPageTag(1, true);
    html += '<div class="es-prob"><div class="es-pq">문제'+(p.no?' '+escHTML(p.no):'')+'. '+escHTML(p.topic||card.title)+'</div>';
    if(p.reqs && p.reqs.length){
      html += '<ul class="es-reqs">'+p.reqs.map(function(r){ return '<li>'+escHTML(r)+'</li>'; }).join('')+'</ul>';
    }
    html += '</div>';
    if(card.intro){
      html += '<div class="es-sec es-intro"><div class="es-h">개요</div>'+essayBlock(card.intro)+'</div>';
    }
    html += '<div class="es-body">';
    var curPage = 1;
    secs.forEach(function(s, si){
      if(hasPages){
        var pg = s.page || curPage;
        if(pg !== curPage){ html += essayPageTag(pg, false); curPage = pg; }
      }
      // 모바일 아코디언: 첫 절만 펼침, 나머지는 collapsed(데스크톱 CSS는 무시 → 항상 표시)
      var accCls = si===0 ? '' : ' collapsed';
      html += '<div class="es-sec'+accCls+'"><div class="es-h" role="button" tabindex="0">'+escHTML((s.no?s.no+'. ':'')+(s.title||''))+'<span class="es-chev" aria-hidden="true">▾</span></div>';
      if(s.overview){ html += '<div class="es-sub">1. 개요</div>'+essayBlock(s.overview); }
      if(s.detail){ html += '<div class="es-sub">'+escHTML(s.detail.title||'2. 상세')+'</div>'+essayBlock(s.detail); }
      if(s.conclusion){ s.conclusion.forEach(function(t){ html += '<div class="def es-concl">'+escHTML(t)+'</div>'; }); }
      if(s.note){ html += '<div class="note">'+escHTML(s.note)+'</div>'; }
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

  function cardHTML(card, catMap, domId){
    var c = catMap[card.category] || {color:'#cbd5e1',bg:'#f1f5f9',tagColor:'#475569'};
    // 카테고리 색은 CSS 변수로 주입 → 테마 오버라이드 가능·인라인 반복 제거(R6)
    var cstyle = '--cat-color:'+c.color+';--cat-bg:'+c.bg+';--cat-tag:'+c.tagColor;
    var dnote = card.diagramNote ? '<div class="note">'+escHTML(card.diagramNote)+'</div>' : '';
    var fnote = card.note ? '<div class="note">'+escHTML(card.note)+'</div>' : '';
    var diag = card.diagram ? '<pre class="diagram">'+escHTML(card.diagram)+'</pre>' : '';
    var head = '<h3>'+escHTML(card.title)+'</h3><span class="tag">'+escHTML(card.tag)+'</span>'+lvlBadge(card);
    if(card.essay){
      return '<div '+cardAttrs(card, domId, 'essay')+' style="'+cstyle+'">'+
        markCtl()+zoomCtl(card)+head+essayHTML(card)+
      '</div>';
    }
    var body;
    if(card.compare){
      body =
        '<div class="blk"><div class="lbl tier1">I. 정의 비교</div>'+tableHTML(card.defTable, 'cmp2', card.title+' 정의 비교')+dnote+'</div>'+
        '<div class="blk"><div class="lbl tier1 ink">II. 상세 비교</div>'+tableHTML(card.table, '', card.title+' 상세 비교')+fnote+'</div>';
    } else {
      // I. 정의: 리드 키워드+토픽을 헤더로(골격 03줄), 정의문 본문은 아래(04·05)
      var defLead = card.keyword ? 'I. "<span class="lead-kw">'+escHTML(card.keyword)+'</span>" '+escHTML(card.title)+'의 정의'
                                 : 'I. '+escHTML(card.title)+'의 정의';
      body =
        '<div class="blk"><div class="lbl tier1">'+defLead+'</div><div class="def">'+escHTML(_stripLeadKw(card.def))+'</div></div>'+
        '<div class="blk"><div class="lbl tier2">1. 구성도</div>'+diag+dnote+'</div>'+
        '<div class="blk"><div class="lbl tier2">2. 구성요소</div>'+tableHTML(card.table, '', card.title+' 구성요소')+'</div>'+
        fnote;
    }
    return '<div '+cardAttrs(card, domId)+' style="'+cstyle+'">'+
      markCtl()+zoomCtl(card)+head+body+sixKeyMeter(card)+
    '</div>';
  }

  // 정의 시트: 토픽의 "정의문"만 표로. 행=토픽, data-dom/data-cat/data-k 로 필터.
  function defText(card){
    if(card.essay) return '[2교시 논술] ' + ((card.problem && card.problem.topic) || card.title);
    if(card.def) return card.def;
    if(card.compare && card.defTable && card.defTable.head) return '[비교] ' + card.defTable.head.join(' ↔ ');
    return '';
  }
  // 구성도(다이어그램)·구성요소 표를 시트/내보내기용 1줄 문자열로 직렬화(1차원화)
  function flatDiagram(card){
    var g = (card && card.diagram) || '';
    return g.split('\n').map(function(s){ return s.trim(); }).filter(Boolean).join('  /  ');
  }
  function flatTable(t){
    if(!t || !t.rows || !t.rows.length) return '';
    var parts = [];
    if(t.head && t.head.length) parts.push(t.head.join(' | '));
    t.rows.forEach(function(r){ parts.push(r.map(function(x){ return (x === '' ? '〃' : x); }).join(' | ')); });   // 셀=" | ", 빈 구분셀(병합)은 〃
    return parts.join('  ‖  ');   // 행 구분 = "‖"
  }
  // 시트 첨언 셀: 구성도 첨언(diagramNote)·구성요소 첨언(note) 둘 다 표시(라벨 구분).
  function sheetNotes(c){
    function line(lab, t){
      if(!t) return '';
      t = String(t).replace(/^\s*※\s*/, '');
      return '<div class="st-nline"><span class="st-nlab">'+lab+'</span>'+escHTML(t)+'</div>';
    }
    return line('구성도', c.diagramNote) + line('구성요소', c.note);
  }
  function sheetHTML(domains, catMapByDom){
    var h = '<table class="sheet-table"><thead><tr class="sheet-head">'+
      '<th>토픽</th><th>리드키워드</th><th>정의</th><th>구성도</th><th>구성요소</th><th>첨언</th></tr></thead><tbody>';
    domains.forEach(function(d){
      var catMap = catMapByDom[d.id] || {};
      var secIds = (d.sections || []).map(function(s){ return s.id; });
      h += '<tr class="sheet-dom" data-dom="'+escAttr(d.id)+'"><td colspan="6">'+escHTML((d.icon||'')+' '+d.label)+'</td></tr>';
      function rowsFor(catId){
        return (d.cards || []).filter(function(c){ return c.category === catId; }).map(function(c){
          // 구성도·구성요소는 1줄 직렬화(st-flat)와 원본(st-orig)을 함께 렌더 → 체크박스로 CSS 전환
          var origD = c.diagram ? '<pre class="st-orig st-orig-diag">'+escHTML(c.diagram)+'</pre>' : '';
          var origT = (c.table && c.table.rows && c.table.rows.length) ? '<div class="st-orig">'+tableHTML(c.table, '', c.title+' 구성요소')+'</div>' : '';
          return '<tr class="sheet-row" data-dom="'+escAttr(d.id)+'" data-cat="'+escAttr(c.category)+'" data-sub="'+escAttr(c.subcat||'')+'" data-key="'+escAttr(d.id+'|'+c.title)+'" data-lvl="'+escAttr(c.level||'')+'" data-k="'+escAttr(c.keywords)+'">'+
            '<td class="st-title">'+lvlBadge(c)+' '+escHTML(c.title)+(c.compare?' <span class="st-badge">비교</span>':'')+(c.essay?' <span class="st-badge st-essay">2교시</span>':'')+'</td>'+
            '<td class="st-kw">'+escHTML(c.keyword||'')+'</td>'+
            '<td class="st-def">'+escHTML(defText(c))+'</td>'+
            '<td class="st-diag"><span class="st-flat">'+escHTML(flatDiagram(c))+'</span>'+origD+'</td>'+
            '<td class="st-tbl"><span class="st-flat">'+escHTML(flatTable(c.table))+'</span>'+origT+'</td>'+
            '<td class="st-note">'+sheetNotes(c)+'</td></tr>';
        }).join('');
      }
      (d.sections || []).forEach(function(s){
        h += '<tr class="sheet-sec" data-dom="'+escAttr(d.id)+'" data-cat="'+escAttr(s.id)+'"><td colspan="6">'+escHTML(s.title)+'</td></tr>';
        h += rowsFor(s.id);
      });
      var orphan = {};
      (d.cards || []).forEach(function(c){ if(secIds.indexOf(c.category) < 0) orphan[c.category] = 1; });
      Object.keys(orphan).forEach(function(catId){
        h += '<tr class="sheet-sec" data-dom="'+escAttr(d.id)+'" data-cat="'+escAttr(catId)+'"><td colspan="6">기타</td></tr>';
        h += rowsFor(catId);
      });
    });
    return h + '</tbody></table>';
  }

  // 정의문 앞의 리드 키워드("...") 제거 — 03줄 헤더에 이미 쓰므로 04·05엔 본문만.
  function _stripLeadKw(def){ return (def||'').replace(/^\s*"[^"]*"\s*/, '').trim(); }
  // 문자열을 중앙에서 가장 가까운 공백 기준 2조각으로 분할(04·05 배분용).
  function _splitTwo(s){
    s = (s||'').trim();
    if(!s) return ['',''];
    var mid = Math.floor(s.length/2);
    var l = s.lastIndexOf(' ', mid), r = s.indexOf(' ', mid), pos;
    if(l < 0) pos = r; else if(r < 0) pos = l; else pos = (mid - l <= r - mid) ? l : r;
    if(pos < 0) return [s, ''];
    return [s.slice(0, pos), s.slice(pos + 1)];
  }
  // 1교시 답안지 뷰: 카드를 골격 01~22줄에 배치, 모든 줄 왼쪽에 줄번호(거터). 표는 grid 정렬(표 안 번호 없음).
  function answerSheetHTML(card){
    if(card.essay) return answerSheetEssayHTML(card);   // 2교시(essay)는 66줄/3페이지 답안지
    var L = {};
    function set(n, html, cls){ L[n] = { c: html || '', cls: cls || '' }; }
    function trow(cells, cls){
      return '<div class="astbl '+(cls||'')+'">'+(cells||[]).map(function(x){ return '<span>'+escHTML(x)+'</span>'; }).join('')+'</div>';
    }
    var title = card.title || '';
    if(card.compare){
      var dt = card.defTable || {}, tb = card.table || {};
      set(1, '문제 : '+escHTML(title)+' 비교', 'q');
      set(2, '답)');
      set(3, 'I. 정의 비교', 'h');
      set(4, trow(dt.head, 'col2 thead'));
      for(var i=0;i<3;i++){ set(5+i, (dt.rows||[])[i] ? trow(dt.rows[i], 'col2') : ''); }
      set(8, card.diagramNote ? escHTML(card.diagramNote) : '', 'note');
      set(9, 'II. 상세 비교', 'h');
      set(10, trow(tb.head, 'col3 thead'));
      for(var j=0;j<11;j++){ set(11+j, (tb.rows||[])[j] ? trow(tb.rows[j], 'col3') : ''); }
      set(22, card.note ? escHTML(card.note) : '', 'note');
    } else {
      var gb = card.table || {}, dl = (card.diagram || '').split('\n');
      set(1, '문제 : '+escHTML(title), 'q');
      set(2, '답)');
      set(3, (card.keyword ? 'I. "'+escHTML(card.keyword)+'" '+escHTML(title)+'의 정의'
                           : 'I. '+escHTML(title)+'의 정의'), 'h');
      var dp = _splitTwo(_stripLeadKw(card.def));   // 정의문을 04·05로 분할(리드 키워드는 03에)
      set(4, escHTML(dp[0]));
      set(5, escHTML(dp[1]));
      set(6, 'II. 구성도 및 구성요소', 'h');
      set(7, '1. 구성도', 'h2');
      for(var k=0;k<5;k++){
        var dline = (k < 4) ? (dl[k] || '') : dl.slice(4).join('  ');
        set(8+k, dline ? '<pre class="asdiag">'+escHTML(dline)+'</pre>' : '');
      }
      set(13, card.diagramNote ? escHTML(card.diagramNote) : '', 'note');
      set(14, '2. 구성요소', 'h2');
      set(15, trow(gb.head, 'col3 thead'));
      for(var m=0;m<6;m++){ set(16+m, (gb.rows||[])[m] ? trow(gb.rows[m], 'col3') : ''); }
      set(22, card.note ? escHTML(card.note) : '', 'note');
    }
    var out = '';
    for(var n=1;n<=22;n++){
      var e = L[n] || { c:'', cls:'' };
      out += '<div class="asl '+e.cls+(e.c?'':' empty')+'"><b class="asn">'+_p2(n)+'</b><div class="asc">'+e.c+'</div></div>';
    }
    return '<div class="asheet">'+out+'</div>';
  }

  // 2교시 답안지: essay 카드를 66줄/3페이지에 배치. 절을 section.page 버킷에 담아 각 페이지를 22줄로 채움
  // → 대목차·소목차가 페이지 경계(22/44)에 걸치지 않음(2교시 답안구조 v5.0 페이지 정합).
  function answerSheetEssayHTML(card){
    var secs = card.sections || [];
    // 페이지 배정: section.page 우선, 없으면 개수 기준 기본(4절=1·1·2·3 / 3절=1·2·3)
    var defMap = secs.length >= 4 ? [1,1,2,3] : [1,2,3];
    var pages = { 1: [], 2: [], 3: [] };
    function push(pg, html, cls){ (pages[pg] || pages[3]).push({ c: html || '', cls: cls || '' }); }
    function pushDiag(pg, d){ (d || '').split('\n').forEach(function(x){ push(pg, x ? '<pre class="asdiag">'+escHTML(x)+'</pre>' : ''); }); }
    function trow(cells, cls){ return '<div class="astbl '+(cls||'')+'">'+(cells||[]).map(function(x){ return '<span>'+escHTML(x)+'</span>'; }).join('')+'</div>'; }
    function tcls(head){ return (head && head.length===2) ? 'col2' : 'col3'; }
    var p = card.problem || {};
    push(1, '문제 : '+escHTML(p.topic || card.title), 'q');
    (p.reqs || []).forEach(function(r){ push(1, escHTML(r)); });
    push(1, '답)');
    secs.forEach(function(s, idx){
      var pg = s.page || defMap[idx] || 3; if(pg > 3) pg = 3;
      push(pg, escHTML((s.no ? s.no+'. ' : '')+(s.title || '')), 'h');
      var ov = s.overview;
      if(ov){
        if(ov.diagram) pushDiag(pg, ov.diagram);
        (ov.concepts || []).forEach(function(t){ push(pg, escHTML(t)); });
        if(ov.note) push(pg, escHTML(ov.note), 'note');
      }
      var de = s.detail;
      if(de){
        if(de.title) push(pg, escHTML(de.title), 'h2');
        if(de.table){
          push(pg, trow(de.table.head, tcls(de.table.head)+' thead'));
          (de.table.rows || []).forEach(function(r){ push(pg, trow(r, tcls(de.table.head))); });
        }
        if(de.diagram) pushDiag(pg, de.diagram);
        if(de.note) push(pg, escHTML(de.note), 'note');
      }
      (s.conclusion || []).forEach(function(t){ push(pg, escHTML(t), 'note'); });
    });
    var out = '', ln = 0;
    for(var pg = 1; pg <= 3; pg++){   // 페이지별 컬럼(가로 3열 나열)
      var arr = pages[pg];
      while(arr.length < 22) arr.push({ c:'', cls:'' });   // 페이지 22줄 채움(정합)
      var col = '<div class="aspage">── '+pg+'페이지 ('+_p2((pg-1)*22+1)+'~'+_p2(pg*22)+') ──</div>';
      for(var i = 0; i < arr.length; i++){
        ln++;
        var e = arr[i];
        col += '<div class="asl '+e.cls+(e.c?'':' empty')+(i>=22?' over':'')+'"><b class="asn">'+_p2(ln)+'</b><div class="asc">'+e.c+'</div></div>';
      }
      out += '<div class="aspg">'+col+'</div>';
    }
    return '<div class="asheet asheet-essay">'+out+'</div>';
  }

  GS.escHTML  = escHTML;
  GS.escAttr  = escAttr;
  GS.tableHTML = tableHTML;
  GS.cardHTML = cardHTML;
  GS.answerSheetHTML = answerSheetHTML;
  GS.sheetHTML = sheetHTML;
  GS.defText = defText;   // 정의 시트 내보내기(app.js)에서 재사용
  GS.flatDiagram = flatDiagram;   // 구성도 1줄 직렬화
  GS.flatTable = flatTable;       // 구성요소 표 1줄 직렬화
  GS.buildCatMap = buildCatMap;
  GS.cardMatches = cardMatches;
})();
