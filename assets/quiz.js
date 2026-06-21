// 퀴즈 뷰 — 토픽 카드의 요소(리드키워드·정의·구성도·구성요소·역할·비교)로 다지선다를 자동 생성.
// 별도 데이터 없이 window.GISULSA 카드에서 파생 → 카드가 늘면 문제도 자동 증가(동기화).
// 필터: 과목·단원·유형(다중) + 난이도(오답이 유사 토픽에서 나올수록 어려움).
// 공개 네임스페이스: window.GSQuiz = { start(container, items) }
//   item = { card, domId, domLabel, secId, secLabel, color }
(function(){
  var GSQuiz = (window.GSQuiz = {});
  var GS = window.GS || {};
  function esc(s){ return GS.escHTML ? GS.escHTML(s) : String(s==null?'':s); }
  function nl2br(s){ return esc(s).replace(/\n/g,'<br/>'); }
  function shuffle(a){
    for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; }
    return a;
  }
  function defBody(card){ return (card.def||'').replace(/^\s*"[^"]*"\s*/, ''); }
  function compareDef(c){
    var dt=c.defTable; if(!dt||!dt.rows) return '';
    var a=dt.rows.map(function(r){return r[0];}).join(' ');
    var b=dt.rows.map(function(r){return r[1];}).join(' ');
    return (dt.head&&dt.head[0]?dt.head[0]:'A')+': '+a+'  /  '+(dt.head&&dt.head[1]?dt.head[1]:'B')+': '+b;
  }
  // 난이도별 오답 추출: pool 항목 {v,dom,sec}. target {dom,sec}.
  //  hard=유사 우선(같은 단원→같은 과목→기타), normal=같은 과목 우선, easy=동떨어진 것 우선
  function sampleBy(pool, n, exclude, t, diff){
    var sec=[], dom=[], oth=[];
    shuffle(pool.slice()).forEach(function(e){
      if(!e.v || exclude[e.v]) return;
      if(e.sec===t.sec) sec.push(e.v);
      else if(e.dom===t.dom) dom.push(e.v);
      else oth.push(e.v);
    });
    var order = diff==='hard' ? sec.concat(dom,oth)
              : diff==='easy' ? oth.concat(dom,sec)
              : shuffle(sec.concat(dom)).concat(oth);   // normal: 같은 과목 우선
    var out=[], seen={};
    for(var i=0;i<order.length && out.length<n;i++){ var v=order[i]; if(seen[v]) continue; seen[v]=1; out.push(v); }
    return out;
  }

  // ---- 문제 은행 생성(난이도 반영) ----
  function buildBank(items, diff){
    var P={kw:[],def:[],title:[],comp:[],role:[],diag:[],cmp:[]};
    function push(arr, v, dom, sec){ if(v) arr.push({v:v,dom:dom,sec:sec}); }
    items.forEach(function(it){
      var c=it.card, dom=it.domId, sec=it.domId+'::'+(it.secId||it.secLabel);
      push(P.title, c.title, dom, sec);
      if(c.keyword) push(P.kw, c.keyword, dom, sec);
      if(!c.compare && c.def) push(P.def, defBody(c), dom, sec);
      if(!c.compare && c.diagram) push(P.diag, c.diagram, dom, sec);
      if(!c.compare && c.table && c.table.rows) c.table.rows.forEach(function(r){
        push(P.comp, r[1], dom, sec); push(P.role, r[2], dom, sec); });
      if(c.compare && c.table && c.table.rows) c.table.rows.forEach(function(r){
        if(r.length>=3){ push(P.cmp, r[1], dom, sec); push(P.cmp, r[2], dom, sec); } });
    });
    var bank=[];
    items.forEach(function(it){
      var c=it.card;
      var t={dom:it.domId, sec:it.domId+'::'+(it.secId||it.secLabel)};
      var ex={title:c.title, dom:it.domLabel, domId:it.domId, sec:it.secLabel, secKey:t.sec,
        def:(c.compare?compareDef(c):(c.def||'')), color:it.color, compare:!!c.compare};
      function mk(type, stem, answer, pool, exclude, extra){
        var ds=sampleBy(pool, 3, exclude, t, diff);
        if(ds.length<3) return;
        var q={type:type, stem:stem, ex:ex,
          opts:shuffle([{t:answer,c:true}].concat(ds.map(function(x){return {t:x,c:false};})))};
        if(extra){ for(var k in extra) q[k]=extra[k]; }
        bank.push(q);
      }
      var exTitle={}; exTitle[c.title]=1;
      if(c.keyword){ var ek={}; ek[c.keyword]=1;
        mk('kw','「'+c.title+'」의 리드(핵심) 키워드로 옳은 것은?', c.keyword, P.kw, ek); }
      if(!c.compare && c.def){
        var body=defBody(c); var ed={}; ed[body]=1;
        mk('def','「'+c.title+'」의 정의(설명)로 옳은 것은?', body, P.def, ed);
        mk('rev','다음 설명에 해당하는 토픽은?\n「 '+body+' 」', c.title, P.title, exTitle);
      }
      if(!c.compare && c.table && c.table.rows && c.table.rows.length){
        var ownC={}, ownR={};
        c.table.rows.forEach(function(r){ if(r[1])ownC[r[1]]=1; if(r[2])ownR[r[2]]=1; });
        var row=c.table.rows[Math.floor(Math.random()*c.table.rows.length)];
        if(row[1]) mk('comp','「'+c.title+'」의 구성요소(II.구성요소)에 포함되는 것은?', row[1], P.comp, ownC);
        if(row[1] && row[2]) mk('role','「'+c.title+'」에서 구성요소 ‘'+row[1]+'’의 역할로 옳은 것은?', row[2], P.role, ownR);
      }
      if(!c.compare && c.diagram){
        mk('diag','다음 구성도(II.구성도)에 해당하는 토픽은?', c.title, P.title, exTitle, {stemDiagram:c.diagram});
        var exDia={}; exDia[c.diagram]=1;
        mk('diag2','「'+c.title+'」의 구성도(II.구성도)로 옳은 것은?', c.diagram, P.diag, exDia, {optPre:true});
      }
      if(c.compare && c.table && c.table.head && c.table.head.length>=3 && c.table.rows){
        var head=c.table.head;
        var crows=c.table.rows.filter(function(r){ return r.length>=3 && r[0] && r[1] && r[2]; });
        if(crows.length){
          var r2=crows[Math.floor(Math.random()*crows.length)];
          var side=Math.random()<0.5?1:2, ans=r2[side], opp=r2[side===1?2:1];
          var exV={}; exV[ans]=1; exV[opp]=1;
          var extra=sampleBy(P.cmp, 2, exV, t, diff);
          var opts=[{t:ans,c:true},{t:opp,c:false}].concat(extra.map(function(x){return {t:x,c:false};}));
          if(opts.length>=4) bank.push({type:'cmp', ex:ex,
            stem:'「'+c.title+'」 비교 — ‘'+r2[0]+'’ 측면에서 ['+head[side]+']의 특징으로 옳은 것은?',
            opts:shuffle(opts.slice(0,4))});
        }
      }
    });
    return bank;
  }

  var TYPE_LABEL={kw:'키워드',def:'정의',rev:'역추적',comp:'구성요소',role:'역할',
    diag:'구성도→토픽',diag2:'토픽→구성도',cmp:'비교'};
  var TYPE_ORDER=['kw','def','rev','comp','role','diag','diag2','cmp'];
  var DIFFS=[['easy','쉬움'],['normal','보통'],['hard','어려움']];

  GSQuiz.start = function(container, items){
    items = items||[];
    // 과목·단원 목록(items 순서 유지)
    var domList=[], domSeen={}, secList=[], secSeen={};
    items.forEach(function(it){
      if(!domSeen[it.domId]){ domSeen[it.domId]=1; domList.push({id:it.domId, label:it.domLabel}); }
      var k=it.domId+'::'+(it.secId||it.secLabel);
      if(!secSeen[k]){ secSeen[k]=1; secList.push({key:k, domId:it.domId, label:it.secLabel, dom:it.domLabel}); }
    });
    var multiDom = domList.length>1;

    var st={ n:20, diff:'normal', idx:0, score:0, total:0, q:[], answered:false, types:{}, secs:{}, doms:{} };
    domList.forEach(function(d){ st.doms[d.id]=true; });
    secList.forEach(function(s){ st.secs[s.key]=true; });

    var fullBank=[], allTypes=[];
    function rebuild(){
      fullBank = buildBank(items, st.diff);
      if(!allTypes.length) allTypes = TYPE_ORDER.filter(function(t){ return fullBank.some(function(q){return q.type===t;}); });
      allTypes.forEach(function(t){ if(!(t in st.types)) st.types[t]=true; });
    }
    function selTypes(){ return allTypes.filter(function(t){ return st.types[t]; }); }
    function selDoms(){ return domList.filter(function(d){ return st.doms[d.id]; }); }
    function visSecs(){ return secList.filter(function(s){ return st.doms[s.domId]; }); }   // 선택된 과목의 단원만
    function selSecs(){ return visSecs().filter(function(s){ return st.secs[s.key]; }); }
    function filteredBank(){
      return fullBank.filter(function(q){
        return st.types[q.type] && st.doms[q.ex.domId] && st.secs[q.ex.secKey];
      });
    }
    function pick(){
      var pool=filteredBank();
      var n=(st.n==='all')?pool.length:Math.min(st.n, pool.length);
      st.q=shuffle(pool.slice()).slice(0,n);
      st.idx=0; st.score=0; st.total=0; st.answered=false;
    }

    function counts(){
      var len=filteredBank().length;
      return [10,20,50,'all'].filter(function(s){ return s==='all'||s===10||s<=len; }).map(function(s){
        return '<button class="qn'+(st.n===s?' active':'')+'" data-n="'+s+'">'+(s==='all'?('전체('+len+')'):(s+'문항'))+'</button>';
      }).join('');
    }
    function diffChips(){
      return DIFFS.map(function(d){
        return '<button class="qd'+(st.diff===d[0]?' active':'')+'" data-d="'+d[0]+'">'+d[1]+'</button>';
      }).join('');
    }
    function chipRow(lbl, cls, allBtn, list){
      return '<div class="qt-set '+cls+'"><span class="qt-lbl">'+lbl+'</span>'+allBtn+list+'</div>';
    }
    function typeChips(){
      var all=allTypes.every(function(t){return st.types[t];});
      return '<button class="qt'+(all?' active':'')+'" data-t="__all">전체 유형</button>'+
        allTypes.map(function(t){ return '<button class="qt'+(st.types[t]?' active':'')+'" data-t="'+t+'">'+TYPE_LABEL[t]+'</button>'; }).join('');
    }
    function domChips(){
      var all=domList.every(function(d){return st.doms[d.id];});
      return '<button class="qm'+(all?' active':'')+'" data-m="__all">전체 과목</button>'+
        domList.map(function(d){ return '<button class="qm'+(st.doms[d.id]?' active':'')+'" data-m="'+esc(d.id)+'">'+esc(d.label)+'</button>'; }).join('');
    }
    function secChips(){
      var vis=visSecs();
      var all=vis.every(function(s){return st.secs[s.key];});
      return '<button class="qs'+(all?' active':'')+'" data-s="__all">전체 단원</button>'+
        vis.map(function(s){
          var label=(multiDom?(s.dom+' · '):'')+s.label;
          return '<button class="qs'+(st.secs[s.key]?' active':'')+'" data-s="'+esc(s.key)+'">'+esc(label)+'</button>';
        }).join('');
    }
    function header(){
      var h='<div class="quiz-top"><div class="qn-set">'+counts()+'</div>'+
        '<div class="quiz-score">점수 <b>'+st.score+'</b> / '+st.total+
          ' <span class="quiz-prog">('+Math.min(st.idx+1,st.q.length)+'/'+st.q.length+')</span></div>'+
        '<button class="quiz-reset">↻ 새 문제</button></div>';
      h+=chipRow('난이도','qd-set','',diffChips());
      h+=chipRow('유형','','',typeChips());
      if(multiDom) h+=chipRow('과목','qm-set','',domChips());
      if(visSecs().length>1) h+=chipRow('단원','qs-set','',secChips());
      return h;
    }
    function render(){
      if(!st.q.length){
        container.innerHTML=header()+'<div class="quiz-card"><div class="quiz-empty">'+
          '선택한 과목·단원·유형 범위에 문제가 없습니다. 필터를 더 켜 보세요.</div></div>';
        bindTop(); return;
      }
      if(st.idx>=st.q.length){ renderDone(); return; }
      var q=st.q[st.idx];
      var optHTML=q.opts.map(function(o,i){
        var body=q.optPre?('<pre class="qdiag">'+esc(o.t)+'</pre>'):esc(o.t);
        return '<button class="qopt'+(q.optPre?' qopt-pre':'')+'" data-i="'+i+'">'+
          '<span class="qk">'+String.fromCharCode(65+i)+'</span><span class="qopt-body">'+body+'</span></button>';
      }).join('');
      container.innerHTML=header()+'<div class="quiz-card">'+
        '<div class="qtype">'+(TYPE_LABEL[q.type]||'')+'</div>'+
        '<div class="qstem">'+nl2br(q.stem)+'</div>'+
        (q.stemDiagram?'<pre class="qdiag qstem-diag">'+esc(q.stemDiagram)+'</pre>':'')+
        '<div class="qopts">'+optHTML+'</div><div class="qfeed"></div></div>';
      bindTop();
      var optEls=container.querySelectorAll('.qopt');
      optEls.forEach(function(b){ b.addEventListener('click', function(){ answer(b, optEls, q); }); });
    }
    function answer(btn, optEls, q){
      if(st.answered) return;
      st.answered=true; st.total++;
      var i=+btn.getAttribute('data-i'), ok=q.opts[i].c;
      if(ok) st.score++;
      optEls.forEach(function(b,bi){ b.classList.add('done');
        if(q.opts[bi].c) b.classList.add('correct'); else if(bi===i) b.classList.add('wrong'); });
      var ex=q.ex;
      container.querySelector('.qfeed').innerHTML=
        '<div class="qsrc"><b>'+(ok?'✅ 정답':'❌ 오답')+'</b> · 출처 '+
        '<span class="qsrc-dom" style="background:'+(ex.color||'#64748b')+'">'+esc(ex.dom)+'</span> '+
        esc(ex.sec)+' · 토픽 「'+esc(ex.title)+'」'+(ex.compare?' (비교)':'')+
        '<div class="qsrc-def">'+esc(ex.def)+'</div></div><button class="qnext">다음 →</button>';
      container.querySelector('.qnext').addEventListener('click', function(){ st.idx++; st.answered=false; render(); });
      var sc=container.querySelector('.quiz-score');
      if(sc) sc.innerHTML='점수 <b>'+st.score+'</b> / '+st.total+' <span class="quiz-prog">('+Math.min(st.idx+1,st.q.length)+'/'+st.q.length+')</span>';
    }
    function renderDone(){
      var pct=st.total?Math.round(st.score/st.total*100):0;
      container.innerHTML=header()+'<div class="quiz-card quiz-result"><h3>🏁 완료</h3>'+
        '<p class="qbig">'+st.score+' / '+st.total+' <span>('+pct+'%)</span></p>'+
        '<button class="quiz-reset big">↻ 다시 풀기</button></div>';
      bindTop();
    }
    function bindTop(){
      container.querySelectorAll('.qn').forEach(function(b){ b.addEventListener('click', function(){
        var v=b.getAttribute('data-n'); st.n=(v==='all')?'all':(+v); pick(); render(); }); });
      container.querySelectorAll('.qd').forEach(function(b){ b.addEventListener('click', function(){
        st.diff=b.getAttribute('data-d'); rebuild(); pick(); render(); }); });
      container.querySelectorAll('.qt').forEach(function(b){ b.addEventListener('click', function(){
        var t=b.getAttribute('data-t');
        if(t==='__all'){ allTypes.forEach(function(x){st.types[x]=true;}); }
        else { st.types[t]=!st.types[t]; if(selTypes().length===0) st.types[t]=true; }
        pick(); render(); }); });
      container.querySelectorAll('.qm').forEach(function(b){ b.addEventListener('click', function(){
        var m=b.getAttribute('data-m');
        if(m==='__all'){ domList.forEach(function(d){st.doms[d.id]=true;}); }
        else { st.doms[m]=!st.doms[m]; if(selDoms().length===0) st.doms[m]=true; }
        pick(); render(); }); });
      container.querySelectorAll('.qs').forEach(function(b){ b.addEventListener('click', function(){
        var k=b.getAttribute('data-s');
        if(k==='__all'){ visSecs().forEach(function(s){st.secs[s.key]=true;}); }
        else { st.secs[k]=!st.secs[k]; if(selSecs().length===0) st.secs[k]=true; }
        pick(); render(); }); });
      var r=container.querySelector('.quiz-reset');
      if(r) r.addEventListener('click', function(){ pick(); render(); });
    }

    rebuild();
    if(!fullBank.length){
      container.innerHTML='<div class="quiz-empty">출제할 문제가 없습니다. (토픽 카드의 키워드·정의·구성도·구성요소에서 문제가 생성됩니다.)</div>';
      return;
    }
    pick(); render();
  };
})();
