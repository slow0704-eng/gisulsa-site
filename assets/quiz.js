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
  // ---- 도파민 피드백(정답 축포·사운드·연속) ----
  function pickMsg(a){ return a[Math.floor(Math.random()*a.length)]; }
  // 정답=상승 3음 차임 / 오답=하강 버즈. 사용자 클릭 직후라 자동재생 허용.
  function qbeep(ok){
    try{
      var C=window.__qac||(window.__qac=new (window.AudioContext||window.webkitAudioContext)());
      if(C.state==='suspended') C.resume();
      var t=C.currentTime;
      if(ok){
        [784,988,1319].forEach(function(f,k){
          var o=C.createOscillator(), g=C.createGain();
          o.type='sine'; o.frequency.value=f; o.connect(g); g.connect(C.destination);
          var s=t+k*0.09;
          g.gain.setValueAtTime(0.0001,s); g.gain.exponentialRampToValueAtTime(0.16,s+0.02);
          g.gain.exponentialRampToValueAtTime(0.0001,s+0.2); o.start(s); o.stop(s+0.22);
        });
      } else {
        var o=C.createOscillator(), g=C.createGain(); o.type='triangle';
        o.frequency.setValueAtTime(320,t); o.frequency.exponentialRampToValueAtTime(150,t+0.25);
        o.connect(g); g.connect(C.destination);
        g.gain.setValueAtTime(0.10,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.3);
        o.start(t); o.stop(t+0.32);
      }
    }catch(e){}
  }
  // 정답 축포(경량 DOM 파티클, 의존성 없음)
  function qconfetti(host){
    if(!host) return;
    var box=document.createElement('div'); box.className='qconfetti';
    var colors=['#38bdf8','#22c55e','#f59e0b','#ec4899','#a855f7','#ef4444','#14b8a6','#eab308'];
    for(var i=0;i<50;i++){
      var p=document.createElement('i');
      p.style.cssText='left:'+(Math.random()*100)+'%;background:'+colors[i%colors.length]+
        ';animation-duration:'+(1.5+Math.random()*1.2).toFixed(2)+'s;animation-delay:'+(Math.random()*0.35).toFixed(2)+'s;'+
        'width:'+(7+Math.random()*6).toFixed(1)+'px;height:'+(9+Math.random()*8).toFixed(1)+'px;';
      box.appendChild(p);
    }
    host.appendChild(box);
    setTimeout(function(){ box.remove(); }, 3600);
  }
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
  // 난이도별 보기(선택지) 개수 — 오답 수. 쉬움 3(4지)·보통 4(5지)·어려움 5(6지).
  function distractorCount(diff){ return diff==='hard' ? 5 : diff==='easy' ? 3 : 4; }
  // 오답/정답 보기의 출처 설명 — 어느 토픽의 무엇(키워드·정의·구성요소…)인지.
  var KIND_DESC={kw:'리드 키워드',def:'정의',comp:'구성요소',role:'역할',diag:'구성도',diagtok:'구성도 항목',cmp:'비교 항목',dnote:'구성도 첨언',note:'구성요소 첨언',cloze:'정의 핵심어'};
  // 보기 출처 설명. title(토픽명 보기)은 그 토픽의 정의문을 매핑, 그 외는 "「토픽」의 {요소}".
  function describeSrc(src){
    if(!src||!src.owner) return '';
    var o=esc(src.owner), k=src.kind;
    if(k==='title') return src.def ? '<b>「'+o+'」</b> — '+esc(src.def) : '토픽 「'+o+'」';
    if(k==='cmp-opp') return '「'+o+'」의 대비(반대편) 항목';
    if(k==='def') return '「'+o+'」의 정의';
    return '「'+o+'」의 '+(KIND_DESC[k]||'요소')+(src.def?' <span class="qw-od">('+esc(src.def)+')</span>':'');
  }

  // ---- 빈칸 채우기(cloze) 지원 ----
  // 자동: 정의문에서 표준·기법 약어(영문 2~14자)를 빈칸 후보로 추출.
  var CLOZE_STOP={of:1,the:1,to:1,and:1,for:1,in:1,on:1,is:1,as:1,by:1,or:1,vs:1,it:1,an:1,a:1};
  function clozeTerms(s){
    var m=(s||'').match(/[A-Za-z][A-Za-z0-9\-]{1,13}/g)||[], seen={}, out=[];
    m.forEach(function(w){ var k=w.toLowerCase(); if(CLOZE_STOP[k]||seen[k]||w.length<2) return; seen[k]=1; out.push(w); });
    return out;
  }
  // 수동: cloze 필드 "…{정답}…{정답2}…" 파싱. 정답 배열과, 특정 정답만 ____로 가린 렌더.
  function clozeAnswers(raw){
    var a=[], re=/\{([^}]+)\}/g, m; while((m=re.exec(raw))) a.push(m[1]); return a;
  }
  function clozeBlank(raw, targetIdx){
    var i=-1; return raw.replace(/\{([^}]+)\}/g, function(_,ans){ i++; return i===targetIdx?'____':ans; });
  }
  // 구성도 빈칸 후보: 박스 [..] 안의 "의미 있는 노드"만(화살표·기호 제외, 문서 내 1회 등장분만 → 가려도 답이 다른 곳에 안 보임)
  function diagTokens(d){
    var m=(d||'').match(/\[([^\]]+)\]/g)||[], cnt={}, order=[];
    m.forEach(function(x){ var v=x.slice(1,-1).trim(); if(!v) return; if(!(v in cnt)){cnt[v]=0;order.push(v);} cnt[v]++; });
    return order.filter(function(v){
      return cnt[v]===1 && v.length>=1 && v.length<=18 && v!=='____' && !/^[→↓↑↕⇄↔·\-\s]*$/.test(v);
    });
  }
  // 구성도에서 특정 박스 토큰을 [____]로 치환(첫 등장)
  function blankDiagToken(d, tok){ return (d||'').replace('['+tok+']', '[____]'); }
  // 난이도별 오답 추출: pool 항목 {v,dom,sec,owner,kind}. target {dom,sec}. 항목 객체를 반환.
  //  hard=유사 우선(같은 단원→같은 과목→기타), normal=같은 과목 우선, easy=동떨어진 것 우선
  function sampleBy(pool, n, exclude, t, diff){
    var sec=[], dom=[], oth=[];
    shuffle(pool.slice()).forEach(function(e){
      if(!e.v || exclude[e.v]) return;
      if(e.sec===t.sec) sec.push(e);
      else if(e.dom===t.dom) dom.push(e);
      else oth.push(e);
    });
    var order = diff==='hard' ? sec.concat(dom,oth)
              : diff==='easy' ? oth.concat(dom,sec)
              : shuffle(sec.concat(dom)).concat(oth);   // normal: 같은 과목 우선
    var out=[], seen={};
    for(var i=0;i<order.length && out.length<n;i++){ var e=order[i]; if(seen[e.v]) continue; seen[e.v]=1; out.push(e); }
    return out;
  }

  // ---- 문제 은행 생성(난이도 반영) ----
  function buildBank(items, diff){
    var P={kw:[],def:[],title:[],comp:[],role:[],diag:[],diagtok:[],cmp:[],dnote:[],note:[],cloze:[]};
    function push(arr, v, dom, sec, owner, kind, odef, dg){ if(v) arr.push({v:v,dom:dom,sec:sec,owner:owner,kind:kind,odef:odef,dg:dg}); }
    items.forEach(function(it){
      var c=it.card, dom=it.domId, sec=it.domId+'::'+(it.secId||it.secLabel), o=c.title;
      var od=c.compare?compareDef(c):defBody(c);   // 해설용 이 토픽 정의(리드키워드 제거)
      push(P.title, c.title, dom, sec, o, 'title', od, c.diagram);   // 토픽 보기엔 그 토픽의 구성도도 실어 해설에 표시
      if(c.keyword) push(P.kw, c.keyword, dom, sec, o, 'kw', od);
      if(!c.compare && c.def) push(P.def, defBody(c), dom, sec, o, 'def', od);
      // 빈칸 정답 후보 pool: cloze 필드 정답 우선, 없으면 정의문 약어
      if(c.cloze) clozeAnswers(c.cloze).forEach(function(a){ push(P.cloze, a, dom, sec, o, 'cloze', od); });
      else if(!c.compare && c.def) clozeTerms(c.def).forEach(function(w){ push(P.cloze, w, dom, sec, o, 'cloze', od); });
      if(!c.compare && c.diagram){ push(P.diag, c.diagram, dom, sec, o, 'diag', od);
        diagTokens(c.diagram).forEach(function(tk){ push(P.diagtok, tk, dom, sec, o, 'diagtok', od); }); }
      if(!c.compare && c.diagramNote) push(P.dnote, c.diagramNote, dom, sec, o, 'dnote', od);
      if(!c.compare && c.note) push(P.note, c.note, dom, sec, o, 'note', od);
      if(!c.compare && c.table && c.table.rows) c.table.rows.forEach(function(r){
        push(P.comp, r[1], dom, sec, o, 'comp', od); push(P.role, r[2], dom, sec, o, 'role', od); });
      if(c.compare && c.table && c.table.rows) c.table.rows.forEach(function(r){
        if(r.length>=3){ push(P.cmp, r[1], dom, sec, o, 'cmp', od); push(P.cmp, r[2], dom, sec, o, 'cmp', od); } });
    });
    var bank=[];
    items.forEach(function(it){
      var c=it.card;
      var t={dom:it.domId, sec:it.domId+'::'+(it.secId||it.secLabel)};
      var ex={title:c.title, dom:it.domLabel, domId:it.domId, sec:it.secLabel, secKey:t.sec,
        def:(c.compare?compareDef(c):(c.def||'')), color:it.color, compare:!!c.compare, diagram:c.diagram};
      var od=c.compare?compareDef(c):defBody(c);   // 해설용 이 토픽 정의(리드키워드 제거)
      // 정답 kind = pool 종류(kind). 오답도 같은 pool에서 나오므로 owner만 다름.
      function mk(type, stem, answer, pool, exclude, kind, extra){
        var pre = extra && extra.optPre;
        var want = pre ? 3 : distractorCount(diff);   // 구성도 보기는 길어 4지 유지
        var ds=sampleBy(pool, want, exclude, t, diff);
        if(ds.length<3) return;
        var opts=[{t:answer,c:true,src:{owner:ex.title,kind:kind,def:od,dg:ex.diagram}}]
          .concat(ds.map(function(x){return {t:x.v,c:false,src:{owner:x.owner,kind:x.kind,def:x.odef,dg:x.dg}};}));
        var q={type:type, stem:stem, ex:ex, opts:shuffle(opts)};
        if(extra){ for(var k in extra) q[k]=extra[k]; }
        bank.push(q);
      }
      var exTitle={}; exTitle[c.title]=1;
      if(c.keyword){ var ek={}; ek[c.keyword]=1;
        mk('kw','「'+c.title+'」의 리드(핵심) 키워드로 옳은 것은?', c.keyword, P.kw, ek, 'kw'); }
      if(!c.compare && c.def){
        var body=defBody(c); var ed={}; ed[body]=1;
        mk('def','「'+c.title+'」의 정의(설명)로 옳은 것은?', body, P.def, ed, 'def');
        mk('rev','다음 설명에 해당하는 토픽은?\n「 '+body+' 」', c.title, P.title, exTitle, 'title');
      }
      if(!c.compare && c.table && c.table.rows && c.table.rows.length){
        var ownC={}, ownR={};
        c.table.rows.forEach(function(r){ if(r[1])ownC[r[1]]=1; if(r[2])ownR[r[2]]=1; });
        var row=c.table.rows[Math.floor(Math.random()*c.table.rows.length)];
        if(row[1]) mk('comp','「'+c.title+'」의 구성요소(II.구성요소)에 포함되는 것은?', row[1], P.comp, ownC, 'comp');
        if(row[1] && row[2]) mk('role','「'+c.title+'」에서 구성요소 ‘'+row[1]+'’의 역할로 옳은 것은?', row[2], P.role, ownR, 'role');
        // 구성요소 빈칸: 표의 셀 하나(구성요소/역할)를 ____로 가리고 채우기
        var bcol=Math.random()<0.5?1:2, brow=c.table.rows[Math.floor(Math.random()*c.table.rows.length)];
        var bcell=brow&&brow[bcol];
        if(bcell){
          var btbl={head:c.table.head, rows:c.table.rows.map(function(r){ return r===brow?r.map(function(x,ci){return ci===bcol?'____':x;}):r; })};
          var exc={}; c.table.rows.forEach(function(r){ if(r[bcol])exc[r[bcol]]=1; });
          mk('compblank','아래 「'+c.title+'」 구성요소 표의 빈칸(____)에 들어갈 '+(bcol===1?'구성요소':'역할')+'로 옳은 것은?',
             bcell, bcol===1?P.comp:P.role, exc, bcol===1?'comp':'role', {stemTable:btbl});
        }
      }
      if(!c.compare && c.diagram){
        mk('diag','다음 구성도(II.구성도)에 해당하는 토픽은?', c.title, P.title, exTitle, 'title', {stemDiagram:c.diagram});
        var exDia={}; exDia[c.diagram]=1;
        mk('diag2','「'+c.title+'」의 구성도(II.구성도)로 옳은 것은?', c.diagram, P.diag, exDia, 'diag', {optPre:true});
        // 구성도 빈칸: 박스 토큰 하나를 [____]로 가리고 채우기
        var dtoks=diagTokens(c.diagram);
        if(dtoks.length){
          var dpick=dtoks[Math.floor(Math.random()*dtoks.length)], exDt={};
          dtoks.forEach(function(x){ exDt[x]=1; });
          mk('diagblank','아래 「'+c.title+'」 구성도의 빈칸 [ ____ ]에 들어갈 것은?',
             dpick, P.diagtok, exDt, 'diagtok', {stemDiagram:blankDiagToken(c.diagram,dpick)});
        }
      }
      if(!c.compare && c.diagramNote){ var edn={}; edn[c.diagramNote]=1;
        mk('dnote','「'+c.title+'」의 구성도 첨언(※)으로 옳은 것은?', c.diagramNote, P.dnote, edn, 'dnote'); }
      if(!c.compare && c.note){ var ent={}; ent[c.note]=1;
        mk('note','「'+c.title+'」의 구성요소 첨언(※)으로 옳은 것은?', c.note, P.note, ent, 'note'); }
      // 빈칸 채우기: cloze 필드(수동) 우선, 없으면 정의문 약어(자동)
      if(c.cloze){
        var ans=clozeAnswers(c.cloze);
        ans.forEach(function(a,ci){ var exc={}; exc[a]=1;
          mk('cloze','「'+c.title+'」 — 빈칸에 들어갈 말은?\n「 '+clozeBlank(c.cloze,ci)+' 」', a, P.cloze, exc, 'cloze'); });
      } else if(!c.compare && c.def){
        var terms=clozeTerms(c.def);
        if(terms.length){ var a=terms[Math.floor(Math.random()*terms.length)];
          var blanked=c.def.split(a).join('____'); var exc={}; exc[a]=1;
          mk('cloze','「'+c.title+'」 — 정의문 빈칸에 들어갈 용어는?\n「 '+blanked+' 」', a, P.cloze, exc, 'cloze'); }
      }
      if(c.compare && c.table && c.table.head && c.table.head.length>=3 && c.table.rows){
        var head=c.table.head;
        var crows=c.table.rows.filter(function(r){ return r.length>=3 && r[0] && r[1] && r[2]; });
        if(crows.length){
          var r2=crows[Math.floor(Math.random()*crows.length)];
          var side=Math.random()<0.5?1:2, ans=r2[side], opp=r2[side===1?2:1];
          var exV={}; exV[ans]=1; exV[opp]=1;
          var extra=sampleBy(P.cmp, Math.max(1,distractorCount(diff)-1), exV, t, diff);
          var opts=[{t:ans,c:true,src:{owner:ex.title,kind:'cmp',def:od}},
                    {t:opp,c:false,src:{owner:ex.title,kind:'cmp-opp'}}]
            .concat(extra.map(function(x){return {t:x.v,c:false,src:{owner:x.owner,kind:x.kind,def:x.odef}};}));
          if(opts.length>=4) bank.push({type:'cmp', ex:ex,
            stem:'「'+c.title+'」 비교 — ‘'+r2[0]+'’ 측면에서 ['+head[side]+']의 특징으로 옳은 것은?',
            opts:shuffle(opts)});
        }
      }
    });
    return bank;
  }

  var TYPE_LABEL={kw:'키워드',def:'정의',rev:'역추적',cloze:'빈칸채우기',comp:'구성요소',role:'역할',
    compblank:'구성요소 빈칸',diagblank:'구성도 빈칸',
    diag:'구성도→토픽',diag2:'토픽→구성도',dnote:'구성도첨언',note:'구성요소첨언',cmp:'비교'};
  var TYPE_ORDER=['kw','def','rev','cloze','comp','compblank','role','diag','diag2','diagblank','dnote','note','cmp'];
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

    var st={ n:20, diff:'normal', idx:0, score:0, total:0, q:[], answered:false, streak:0, best:0, types:{}, secs:{}, doms:{} };
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
      st.idx=0; st.score=0; st.total=0; st.answered=false; st.streak=0; st.best=0;
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
        (q.stemTable?'<div class="qstem-tbl">'+(GS.tableHTML?GS.tableHTML(q.stemTable):'')+'</div>':'')+
        '<div class="qopts">'+optHTML+'</div><div class="qfeed"></div></div>';
      bindTop();
      var optEls=container.querySelectorAll('.qopt');
      optEls.forEach(function(b){ b.addEventListener('click', function(){ answer(b, optEls, q); }); });
    }
    function answer(btn, optEls, q){
      if(st.answered) return;
      st.answered=true; st.total++;
      var i=+btn.getAttribute('data-i'), ok=q.opts[i].c;
      if(ok){ st.score++; st.streak++; if(st.streak>st.best) st.best=st.streak; } else { st.streak=0; }
      optEls.forEach(function(b,bi){ b.classList.add('done');
        if(q.opts[bi].c) b.classList.add('correct'); else if(bi===i) b.classList.add('wrong'); });
      qbeep(ok);
      if(ok) qconfetti(container.querySelector('.quiz-card'));
      var ex=q.ex;
      var whyHTML=q.opts.map(function(o,oi){
        var letter=String.fromCharCode(65+oi);
        var cls=o.c?'qw-ok':(oi===i?'qw-no':'qw-neu');
        var mark=o.c?'✓':(oi===i?'✗':'');
        // 보기 본문: 구성도 보기(optPre)는 구성도 그대로, 그 외는 텍스트
        var body=q.optPre?('<pre class="qw-dg">'+esc(o.t)+'</pre>'):('<span class="qw-t">'+esc(o.t)+'</span>');
        // 구성도→토픽 문제: 각 보기 토픽의 구성도도 함께 표시(오답 토픽 구성도까지 비교)
        var dgExtra=(q.type==='diag' && o.src && o.src.dg)?('<pre class="qw-dg">'+esc(o.src.dg)+'</pre>'):'';
        return '<li class="'+cls+'"><span class="qw-k">'+letter+'</span>'+body+
               '<span class="qw-src">'+describeSrc(o.src)+'</span>'+
               (mark?'<span class="qw-m">'+mark+'</span>':'')+dgExtra+'</li>';
      }).join('');
      var okMsgs=['정답! 🎯','완벽해요! ✨','좋아요! 👏','바로 그거예요! 💯','명중! 🎪'];
      var noMsgs=['아쉬워요 💪','다시 도전!','해설 보고 가요 📖','괜찮아요, 다음엔!'];
      var strkMsg={3:'3연속 🔥',5:'5연속 불꽃 🔥🔥',7:'7연속 🔥🔥🔥',10:'10연속 신의 경지 👑'};
      var bmsg=ok?pickMsg(okMsgs):pickMsg(noMsgs);
      if(ok&&strkMsg[st.streak]) bmsg+=' · '+strkMsg[st.streak];
      var bStreak=(ok&&st.streak>=2)?'<span class="qstreak">🔥 '+st.streak+'연속</span>':'';
      var banner='<div class="qresult '+(ok?'is-ok':'is-no')+'"><span class="qresult-ic">'+(ok?'🎉':'💪')+'</span><span class="qresult-msg">'+bmsg+'</span>'+bStreak+'</div>';
      container.querySelector('.qfeed').innerHTML= banner+
        '<div class="qsrc"><b>'+(ok?'✅ 정답':'❌ 오답')+'</b> · 출처 '+
        '<span class="qsrc-dom" style="background:'+(ex.color||'#64748b')+'">'+esc(ex.dom)+'</span> '+
        esc(ex.sec)+' · 토픽 「'+esc(ex.title)+'」'+(ex.compare?' (비교)':'')+
        '<div class="qsrc-def">'+esc(ex.def)+'</div></div>'+
        '<div class="qwhy"><div class="qwhy-h">보기 해설 — 각 선택지가 이어지는 토픽</div>'+
        '<ul class="qwhy-list">'+whyHTML+'</ul></div>'+
        '<button class="qnext">다음 →</button>';
      container.querySelector('.qnext').addEventListener('click', function(){ st.idx++; st.answered=false; render(); });
      var sc=container.querySelector('.quiz-score');
      if(sc){ sc.innerHTML='점수 <b>'+st.score+'</b> / '+st.total+' <span class="quiz-prog">('+Math.min(st.idx+1,st.q.length)+'/'+st.q.length+')</span>'+(st.streak>=2?' <span class="qs-streak">🔥'+st.streak+'</span>':'');
        if(ok){ var fl=document.createElement('span'); fl.className='qfloat'; fl.textContent='+1'; sc.appendChild(fl); setTimeout(function(){ fl.remove(); },800); }
      }
    }
    function renderDone(){
      var pct=st.total?Math.round(st.score/st.total*100):0;
      var tier = pct>=90?{e:'🏆',m:'완벽합니다! 명예의 전당',cls:'gold'}
               : pct>=70?{e:'🎉',m:'훌륭해요! 합격권입니다',cls:'good'}
               : pct>=50?{e:'👍',m:'좋아요! 조금만 더',cls:'ok'}
               : {e:'💪',m:'다시 도전해봐요!',cls:'try'};
      container.innerHTML=header()+'<div class="quiz-card quiz-result '+tier.cls+'">'+
        '<div class="qtier">'+tier.e+'</div><div class="qtier-msg">'+tier.m+'</div>'+
        '<p class="qbig">'+st.score+' / '+st.total+' <span>('+pct+'%)</span></p>'+
        (st.best>=3?'<p class="qbest">최고 연속 정답 🔥 '+st.best+'</p>':'')+
        '<button class="quiz-reset big">↻ 다시 풀기</button></div>';
      bindTop();
      if(pct>=70) setTimeout(function(){ qconfetti(container.querySelector('.quiz-result')); }, 60);
    }
    function bindTop(){
      container.querySelectorAll('.qn').forEach(function(b){ b.addEventListener('click', function(){
        var v=b.getAttribute('data-n'); st.n=(v==='all')?'all':(+v); pick(); render(); }); });
      container.querySelectorAll('.qd').forEach(function(b){ b.addEventListener('click', function(){
        st.diff=b.getAttribute('data-d'); rebuild(); pick(); render(); }); });
      container.querySelectorAll('.qt').forEach(function(b){ b.addEventListener('click', function(){
        var t=b.getAttribute('data-t');
        if(t==='__all'){ var on=allTypes.every(function(x){return st.types[x];}); allTypes.forEach(function(x){st.types[x]=!on;}); }   // 전체 토글: 다 켜졌으면 전부 해제
        else { st.types[t]=!st.types[t]; if(selTypes().length===0) st.types[t]=true; }
        pick(); render(); }); });
      container.querySelectorAll('.qm').forEach(function(b){ b.addEventListener('click', function(){
        var m=b.getAttribute('data-m');
        if(m==='__all'){ var on=domList.every(function(d){return st.doms[d.id];}); domList.forEach(function(d){st.doms[d.id]=!on;}); }   // 전체 토글: 다 켜졌으면 전부 해제
        else { st.doms[m]=!st.doms[m]; if(selDoms().length===0) st.doms[m]=true; }
        pick(); render(); }); });
      container.querySelectorAll('.qs').forEach(function(b){ b.addEventListener('click', function(){
        var k=b.getAttribute('data-s');
        if(k==='__all'){ var vs=visSecs(); var on=vs.every(function(s){return st.secs[s.key];}); vs.forEach(function(s){st.secs[s.key]=!on;}); }   // 전체 토글: 다 켜졌으면 전부 해제
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
