// 퀴즈 뷰 — 토픽 카드의 요소(리드키워드·정의·구성요소·역할)로 다지선다 문제를 자동 생성.
// 별도 데이터 없이 window.GISULSA 카드에서 파생 → 카드가 늘면 문제도 자동 증가(동기화).
// 공개 네임스페이스: window.GSQuiz = { start(container, items, opts) }
//   item = { card, domId, domLabel, secLabel, color }  (app.js 가 과목/단원 범위로 추려 전달)
(function(){
  var GSQuiz = (window.GSQuiz = {});
  var GS = window.GS || {};
  function esc(s){ return GS.escHTML ? GS.escHTML(s) : String(s==null?'':s); }
  function nl2br(s){ return esc(s).replace(/\n/g,'<br/>'); }

  function shuffle(a){
    for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; }
    return a;
  }
  // pool 에서 exclude(객체 키)에 없는 서로 다른 값 n개 추출
  function sample(pool, n, exclude){
    var out=[], seen={}, cand=shuffle(pool.slice());
    for(var i=0;i<cand.length && out.length<n;i++){
      var v=cand[i];
      if(!v || exclude[v] || seen[v]) continue;
      seen[v]=1; out.push(v);
    }
    return out;
  }
  // def 앞의 "리드키워드" 따옴표부분 제거 → 설명 본문만(키워드 노출 방지)
  function defBody(card){ return (card.def||'').replace(/^\s*"[^"]*"\s*/, ''); }
  // 비교카드 defTable → 출처 표시용 비교 설명문 복원
  function compareDef(c){
    var dt=c.defTable; if(!dt||!dt.rows) return '';
    var a=dt.rows.map(function(r){return r[0];}).join(' ');
    var b=dt.rows.map(function(r){return r[1];}).join(' ');
    return (dt.head&&dt.head[0]?dt.head[0]:'A')+': '+a+'  /  '+(dt.head&&dt.head[1]?dt.head[1]:'B')+': '+b;
  }

  // ---- 문제 은행 생성 ----
  function buildBank(items){
    var keywords=[], defs=[], titles=[], comps=[], roles=[], diags=[], cmpvals=[];
    items.forEach(function(it){
      var c=it.card;
      if(c.keyword) keywords.push(c.keyword);
      titles.push(c.title);
      if(!c.compare && c.def) defs.push(defBody(c));
      if(!c.compare && c.diagram) diags.push(c.diagram);
      if(!c.compare && c.table && c.table.rows){
        c.table.rows.forEach(function(r){ if(r[1])comps.push(r[1]); if(r[2])roles.push(r[2]); });
      }
      if(c.compare && c.table && c.table.rows){
        c.table.rows.forEach(function(r){ if(r.length>=3){ if(r[1])cmpvals.push(r[1]); if(r[2])cmpvals.push(r[2]); } });
      }
    });
    var bank=[];
    function mk(type, stem, answer, pool, exclude, ex){
      var ds=sample(pool, 3, exclude);
      if(ds.length<3) return;
      var opts=shuffle([{t:answer,c:true}].concat(ds.map(function(x){return {t:x,c:false};})));
      bank.push({type:type, stem:stem, opts:opts, ex:ex});
    }
    items.forEach(function(it){
      var c=it.card;
      var ex={title:c.title, dom:it.domLabel, sec:it.secLabel,
        def:(c.compare?compareDef(c):(c.def||'')), color:it.color, compare:!!c.compare};
      var exTitle={}; exTitle[c.title]=1;
      // 1) 토픽 → 리드키워드
      if(c.keyword){ var ek={}; ek[c.keyword]=1;
        mk('kw','「'+c.title+'」의 리드(핵심) 키워드로 옳은 것은?', c.keyword, keywords, ek, ex); }
      if(!c.compare && c.def){
        var body=defBody(c); var ed={}; ed[body]=1;
        // 2) 토픽 → 정의(설명)
        mk('def','「'+c.title+'」의 정의(설명)로 옳은 것은?', body, defs, ed, ex);
        // 3) 정의(설명) → 토픽  (내용 보고 토픽 떠올리기)
        mk('rev','다음 설명에 해당하는 토픽은?\n「 '+body+' 」', c.title, titles, exTitle, ex);
      }
      if(!c.compare && c.table && c.table.rows && c.table.rows.length){
        var ownC={}, ownR={};
        c.table.rows.forEach(function(r){ if(r[1])ownC[r[1]]=1; if(r[2])ownR[r[2]]=1; });
        var row=c.table.rows[Math.floor(Math.random()*c.table.rows.length)];
        // 4) 토픽 → 구성요소
        if(row[1]) mk('comp','「'+c.title+'」의 구성요소(II.구성요소)에 포함되는 것은?', row[1], comps, ownC, ex);
        // 5) 구성요소 → 역할
        if(row[1] && row[2]) mk('role','「'+c.title+'」에서 구성요소 ‘'+row[1]+'’의 역할로 옳은 것은?', row[2], roles, ownR, ex);
      }
      // 6) 구성도 → 토픽,  7) 토픽 → 구성도
      if(!c.compare && c.diagram){
        var dt=sample(titles, 3, exTitle);
        if(dt.length>=3){
          bank.push({type:'diag', stem:'다음 구성도(II.구성도)에 해당하는 토픽은?', stemDiagram:c.diagram,
            opts:shuffle([{t:c.title,c:true}].concat(dt.map(function(x){return {t:x,c:false};}))), ex:ex});
        }
        var exDia={}; exDia[c.diagram]=1;
        var dd=sample(diags, 3, exDia);
        if(dd.length>=3){
          bank.push({type:'diag2', stem:'「'+c.title+'」의 구성도(II.구성도)로 옳은 것은?', optPre:true,
            opts:shuffle([{t:c.diagram,c:true}].concat(dd.map(function(x){return {t:x,c:false};}))), ex:ex});
        }
      }
      // 8) 비교 카드: 구분 항목별 한쪽 특징 맞히기(반대편이 강력 오답)
      if(c.compare && c.table && c.table.head && c.table.head.length>=3 && c.table.rows){
        var head=c.table.head;
        var crows=c.table.rows.filter(function(r){ return r.length>=3 && r[0] && r[1] && r[2]; });
        if(crows.length){
          var r2=crows[Math.floor(Math.random()*crows.length)];
          var side=Math.random()<0.5?1:2;           // 1=A측, 2=B측
          var ans=r2[side], opp=r2[side===1?2:1];     // 정답 / 반대편(강력 오답)
          var exV={}; exV[ans]=1; exV[opp]=1;
          var extra=sample(cmpvals, 2, exV);
          var opts=[{t:ans,c:true},{t:opp,c:false}].concat(extra.map(function(x){return {t:x,c:false};}));
          if(opts.length>=4){
            bank.push({type:'cmp',
              stem:'「'+c.title+'」 비교 — ‘'+r2[0]+'’ 측면에서 ['+head[side]+']의 특징으로 옳은 것은?',
              opts:shuffle(opts.slice(0,4)), ex:ex});
          }
        }
      }
    });
    return bank;
  }

  var TYPE_LABEL={kw:'키워드',def:'정의',rev:'역추적',comp:'구성요소',role:'역할',
    diag:'구성도→토픽',diag2:'토픽→구성도',cmp:'비교'};
  var TYPE_ORDER=['kw','def','rev','comp','role','diag','diag2','cmp'];

  GSQuiz.start = function(container, items, opts){
    opts = opts || {};
    var fullBank = buildBank(items||[]);
    if(!fullBank.length){
      container.innerHTML='<div class="quiz-empty">출제할 문제가 없습니다. 과목/단원 범위를 넓혀 보세요. '+
        '(토픽 카드의 키워드·정의·구성요소·구성도에서 문제가 생성됩니다.)</div>';
      return;
    }
    // 이 범위에서 생성된 문제 유형 목록
    var allTypes = TYPE_ORDER.filter(function(t){ return fullBank.some(function(q){return q.type===t;}); });
    var st={ n:20, idx:0, score:0, total:0, q:[], answered:false, types:{} };
    allTypes.forEach(function(t){ st.types[t]=true; });   // 기본: 전체 유형

    function selTypes(){ return allTypes.filter(function(t){ return st.types[t]; }); }
    function filteredBank(){ return fullBank.filter(function(q){ return st.types[q.type]; }); }

    function pick(){
      var pool=filteredBank();
      var n = (st.n==='all') ? pool.length : Math.min(st.n, pool.length);
      st.q = shuffle(pool.slice()).slice(0, n);
      st.idx=0; st.score=0; st.total=0; st.answered=false;
    }
    function counts(){
      var len=filteredBank().length;
      var sizes=[10,20,50,'all'].filter(function(s){ return s==='all' || s===10 || s<=len; });
      return sizes.map(function(s){
        var on = st.n===s;
        var label = (s==='all') ? ('전체('+len+')') : (s+'문항');
        return '<button class="qn'+(on?' active':'')+'" data-n="'+s+'">'+label+'</button>';
      }).join('');
    }
    function typeChips(){
      var all = allTypes.every(function(t){ return st.types[t]; });
      var h='<button class="qt'+(all?' active':'')+'" data-t="__all">전체 유형</button>';
      h+=allTypes.map(function(t){
        return '<button class="qt'+(st.types[t]?' active':'')+'" data-t="'+t+'">'+TYPE_LABEL[t]+'</button>';
      }).join('');
      return h;
    }
    function header(){
      return '<div class="quiz-top">'+
        '<div class="qn-set">'+counts()+'</div>'+
        '<div class="quiz-score">점수 <b>'+st.score+'</b> / '+st.total+
          ' <span class="quiz-prog">('+Math.min(st.idx+1,st.q.length)+'/'+st.q.length+')</span></div>'+
        '<button class="quiz-reset">↻ 새 문제</button>'+
        '</div>'+
        '<div class="qt-set"><span class="qt-lbl">유형</span>'+typeChips()+'</div>';
    }
    function render(){
      if(!st.q.length){
        container.innerHTML = header()+'<div class="quiz-card"><div class="quiz-empty">'+
          '선택한 유형·범위에 문제가 없습니다. 유형을 더 선택하거나 상단 과목/단원 범위를 넓혀 보세요.</div></div>';
        bindTop(); return;
      }
      if(st.idx>=st.q.length){ renderDone(); return; }
      var q=st.q[st.idx];
      var optHTML=q.opts.map(function(o,i){
        var body = q.optPre ? '<pre class="qdiag">'+esc(o.t)+'</pre>' : esc(o.t);
        return '<button class="qopt'+(q.optPre?' qopt-pre':'')+'" data-i="'+i+'">'+
          '<span class="qk">'+String.fromCharCode(65+i)+'</span><span class="qopt-body">'+body+'</span></button>';
      }).join('');
      container.innerHTML = header()+
        '<div class="quiz-card">'+
          '<div class="qtype">'+(TYPE_LABEL[q.type]||'')+'</div>'+
          '<div class="qstem">'+nl2br(q.stem)+'</div>'+
          (q.stemDiagram ? '<pre class="qdiag qstem-diag">'+esc(q.stemDiagram)+'</pre>' : '')+
          '<div class="qopts">'+optHTML+'</div>'+
          '<div class="qfeed"></div>'+
        '</div>';
      bindTop();
      var optEls=container.querySelectorAll('.qopt');
      optEls.forEach(function(b){ b.addEventListener('click', function(){ answer(b, optEls, q); }); });
    }
    function answer(btn, optEls, q){
      if(st.answered) return;
      st.answered=true; st.total++;
      var i=+btn.getAttribute('data-i');
      var ok=q.opts[i].c;
      if(ok) st.score++;
      optEls.forEach(function(b,bi){
        b.classList.add('done');
        if(q.opts[bi].c) b.classList.add('correct');
        else if(bi===i) b.classList.add('wrong');
      });
      var ex=q.ex;
      var src='<div class="qsrc"><b>'+(ok?'✅ 정답':'❌ 오답')+'</b> · 출처 '+
        '<span class="qsrc-dom" style="background:'+(ex.color||'#64748b')+'">'+esc(ex.dom)+'</span> '+
        esc(ex.sec)+' · 토픽 「'+esc(ex.title)+'」'+(ex.compare?' (비교)':'')+
        '<div class="qsrc-def">'+esc(ex.def)+'</div></div>'+
        '<button class="qnext">다음 →</button>';
      container.querySelector('.qfeed').innerHTML=src;
      container.querySelector('.qnext').addEventListener('click', function(){
        st.idx++; st.answered=false; render();
      });
      // 점수 갱신 표시
      var sc=container.querySelector('.quiz-score');
      if(sc) sc.innerHTML='점수 <b>'+st.score+'</b> / '+st.total+' <span class="quiz-prog">('+Math.min(st.idx+1,st.q.length)+'/'+st.q.length+')</span>';
    }
    function renderDone(){
      var pct = st.total? Math.round(st.score/st.total*100):0;
      container.innerHTML=header()+
        '<div class="quiz-card quiz-result">'+
          '<h3>🏁 완료</h3>'+
          '<p class="qbig">'+st.score+' / '+st.total+' <span>('+pct+'%)</span></p>'+
          '<button class="quiz-reset big">↻ 다시 풀기</button>'+
        '</div>';
      bindTop();
    }
    function bindTop(){
      container.querySelectorAll('.qn').forEach(function(b){
        b.addEventListener('click', function(){
          var v=b.getAttribute('data-n'); st.n = (v==='all')?'all':(+v);
          pick(); render();
        });
      });
      container.querySelectorAll('.qt').forEach(function(b){
        b.addEventListener('click', function(){
          var t=b.getAttribute('data-t');
          if(t==='__all'){ allTypes.forEach(function(x){ st.types[x]=true; }); }
          else {
            st.types[t]=!st.types[t];
            if(selTypes().length===0) st.types[t]=true;   // 최소 1개 유지
          }
          pick(); render();
        });
      });
      var r=container.querySelector('.quiz-reset');
      if(r) r.addEventListener('click', function(){ pick(); render(); });
    }

    pick(); render();
  };
})();
