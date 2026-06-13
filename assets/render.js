// 렌더링 레이어 — 카드/표를 HTML 문자열로 생성하는 순수 함수만(DOM·이벤트·상태 없음).
// 카드 "표시 구조"를 바꾸려면 여기(특히 cardHTML)를 편집한다. 앱 동작/배선은 app.js.
// 공개 네임스페이스: window.GS = { escHTML, escAttr, tableHTML, cardHTML }
// (빌드 단계 없음 — index.html 에서 app.js 보다 먼저 로드)
(function(){
  var GS = (window.GS = window.GS || {});

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

  function cardHTML(card, catMap, domId){
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
    return '<div class="card" data-dom="'+escAttr(domId)+'" data-cat="'+escAttr(card.category)+'" data-k="'+escAttr(card.keywords)+'" style="border-top-color:'+c.color+'">'+
      head+body+
    '</div>';
  }

  // 정의 시트: 토픽의 "정의문"만 표로. 행=토픽, data-dom/data-cat/data-k 로 필터.
  function defText(card){
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
            '<td class="st-title">'+escHTML(c.title)+(c.compare?' <span class="st-badge">비교</span>':'')+'</td>'+
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
})();
