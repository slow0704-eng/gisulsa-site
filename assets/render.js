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
  // 카드/시트 행 공용 필터 술어(순수). 과목·단원·검색어(소문자 q) 일치 여부.
  function cardMatches(domId, catId, text, q, selDom, selSec){
    if(selDom!=='all' && selDom!==domId) return false;
    if(selSec!=='all' && selSec!==catId) return false;
    if(q && String(text).indexOf(q) < 0) return false;
    return true;
  }
  // 카드 공통 속성(접근성: 클릭/Enter 로 확대 모달 — role·tabindex·aria-label)
  function cardAttrs(card, domId, extraClass){
    return 'class="card'+(extraClass?' '+extraClass:'')+'" role="button" tabindex="0"'+
      ' aria-label="'+escAttr(card.title)+' — 카드 확대(클릭 또는 Enter)"'+
      ' data-dom="'+escAttr(domId)+'" data-cat="'+escAttr(card.category)+'" data-k="'+escAttr(card.keywords)+'"';
  }

  function tableHTML(t, cls){
    if(!t) return '';
    var h = '';
    if(t.head && t.head.length){
      h += '<tr>'+t.head.map(function(c){return '<th>'+escHTML(c)+'</th>';}).join('')+'</tr>';
    }
    var rows = t.rows||[];
    // 정의 비교(cmp2): 각 열의 여러 행을 한 셀로 합쳐 복사 용이(칸 분할 없음 — 줄바꿈만).
    if(cls==='cmp2'){
      var nc = (t.head&&t.head.length) || (rows[0]?rows[0].length:0), mg=[];
      for(var ci=0; ci<nc; ci++){
        mg.push(rows.map(function(r){ return r[ci]; }).filter(function(x){ return x!=null && x!==''; }).join(' '));
      }
      h += '<tr>'+mg.map(function(c){ return '<td>'+escHTML(c)+'</td>'; }).join('')+'</tr>';
      return '<table class="cmp2">'+h+'</table>';
    }
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
    return '<table'+(cls?' class="'+cls+'"':'')+'>'+h+'</table>';
  }

  // 2교시 논술 카드 — 한 블록(개요 도식+개념+※) / 상세(표·구성도+※) 골격을 절(節)별로 렌더.
  // 절 스키마: { no, title, overview:{diagram,concepts[],note}, detail:{title,table,diagram,note}, conclusion[] }
  function essayBlock(b){
    if(!b) return '';
    var h = '';
    if(b.diagram)  h += '<pre class="diagram">'+escHTML(b.diagram)+'</pre>';
    if(b.concepts) b.concepts.forEach(function(t){ h += '<div class="def">'+escHTML(t)+'</div>'; });
    if(b.table)    h += tableHTML(b.table);
    if(b.note)     h += '<div class="note">'+escHTML(b.note)+'</div>';
    return h;
  }
  function essayHTML(card){
    var p = card.problem || {};
    var html = '<div class="es-prob"><div class="es-pq">문제'+(p.no?' '+escHTML(p.no):'')+'. '+escHTML(p.topic||card.title)+'</div>';
    if(p.reqs && p.reqs.length){
      html += '<ul class="es-reqs">'+p.reqs.map(function(r){ return '<li>'+escHTML(r)+'</li>'; }).join('')+'</ul>';
    }
    html += '</div>';
    if(card.intro){
      html += '<div class="es-sec es-intro"><div class="es-h">개요</div>'+essayBlock(card.intro)+'</div>';
    }
    html += '<div class="es-body">';
    (card.sections||[]).forEach(function(s){
      html += '<div class="es-sec"><div class="es-h">'+escHTML((s.no?s.no+'. ':'')+(s.title||''))+'</div>';
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
    var dnote = card.diagramNote ? '<div class="note">'+escHTML(card.diagramNote)+'</div>' : '';
    var fnote = card.note ? '<div class="note">'+escHTML(card.note)+'</div>' : '';
    var diag = card.diagram ? '<pre class="diagram">'+escHTML(card.diagram)+'</pre>' : '';
    var head = '<h3>'+escHTML(card.title)+'</h3><span class="tag" style="background:'+c.bg+';color:'+c.tagColor+'">'+escHTML(card.tag)+'</span>';
    if(card.essay){
      return '<div '+cardAttrs(card, domId, 'essay')+' style="border-top-color:'+c.color+'">'+
        head+essayHTML(card)+
      '</div>';
    }
    var body;
    if(card.compare){
      // 비교형(A vs B): 1교시 비교형 골격 — I.정의 비교(2열표 A|B, 헤더1+본문3행) → II.상세 비교(3열표 구분|A|B)
      body =
        '<div class="blk"><div class="lbl">I. 정의 비교</div>'+tableHTML(card.defTable, 'cmp2')+dnote+'</div>'+
        '<div class="blk"><div class="lbl ink">II. 상세 비교</div>'+tableHTML(card.table)+fnote+'</div>';
    } else {
      body =
        '<div class="blk"><div class="lbl">I. 정의</div><div class="def">'+escHTML(card.def)+'</div></div>'+
        '<div class="blk"><div class="lbl ink">II. 구성도 및 구성요소</div></div>'+
        '<div class="blk"><div class="lbl">1. 구성도</div>'+diag+dnote+'</div>'+
        '<div class="blk"><div class="lbl">2. 구성요소</div>'+tableHTML(card.table)+'</div>'+
        fnote;
    }
    return '<div '+cardAttrs(card, domId)+' style="border-top-color:'+c.color+'">'+
      head+body+
    '</div>';
  }

  // 정의 시트: 토픽의 "정의문"만 표로. 행=토픽, data-dom/data-cat/data-k 로 필터.
  function defText(card){
    if(card.essay) return '[2교시 논술] ' + ((card.problem && card.problem.topic) || card.title);
    if(card.def) return card.def;
    if(card.compare && card.defTable && card.defTable.head) return '[비교] ' + card.defTable.head.join(' ↔ ');
    return '';
  }
  function sheetHTML(domains, catMapByDom){
    var h = '<table class="sheet-table"><tbody>';
    domains.forEach(function(d){
      var catMap = catMapByDom[d.id] || {};
      var secIds = (d.sections || []).map(function(s){ return s.id; });
      h += '<tr class="sheet-dom" data-dom="'+escAttr(d.id)+'"><td colspan="2">'+escHTML((d.icon||'')+' '+d.label)+'</td></tr>';
      function rowsFor(catId){
        return (d.cards || []).filter(function(c){ return c.category === catId; }).map(function(c){
          return '<tr class="sheet-row" data-dom="'+escAttr(d.id)+'" data-cat="'+escAttr(c.category)+'" data-k="'+escAttr(c.keywords)+'">'+
            '<td class="st-title">'+escHTML(c.title)+(c.compare?' <span class="st-badge">비교</span>':'')+(c.essay?' <span class="st-badge st-essay">2교시</span>':'')+'</td>'+
            '<td class="st-def">'+escHTML(defText(c))+'</td></tr>';
        }).join('');
      }
      (d.sections || []).forEach(function(s){
        h += '<tr class="sheet-sec" data-dom="'+escAttr(d.id)+'" data-cat="'+escAttr(s.id)+'"><td colspan="2">'+escHTML(s.title)+'</td></tr>';
        h += rowsFor(s.id);
      });
      var orphan = {};
      (d.cards || []).forEach(function(c){ if(secIds.indexOf(c.category) < 0) orphan[c.category] = 1; });
      Object.keys(orphan).forEach(function(catId){
        h += '<tr class="sheet-sec" data-dom="'+escAttr(d.id)+'" data-cat="'+escAttr(catId)+'"><td colspan="2">기타</td></tr>';
        h += rowsFor(catId);
      });
    });
    return h + '</tbody></table>';
  }

  GS.escHTML  = escHTML;
  GS.escAttr  = escAttr;
  GS.tableHTML = tableHTML;
  GS.cardHTML = cardHTML;
  GS.sheetHTML = sheetHTML;
  GS.buildCatMap = buildCatMap;
  GS.cardMatches = cardMatches;
})();
