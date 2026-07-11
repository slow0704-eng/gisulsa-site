// 연습 뷰 — 타자연습식 "따라치기". 토픽 카드의 리드키워드·정의문을 보고 그대로 입력.
// 별도 데이터 없이 window.GISULSA 카드에서 파생(퀴즈와 동일 소스) → 카드가 늘면 연습 항목도 자동 증가.
// 실시간 정확도·진행·속도(타/분) 표시. 과목·모드(키워드+정의/정의문/리드키워드) 자체 필터.
// 공개 네임스페이스: window.GSPractice = { start(container, items) }
//   item = { card, domId, domLabel, secId, secLabel, color }
(function(){
  var GSP = (window.GSPractice = {});
  var GS = window.GS || {};
  function esc(s){ return GS.escHTML ? GS.escHTML(s) : String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // 카드+모드 → 따라칠 대상 문자열(한 줄). kw=리드키워드, def=정의문, both=키워드 — 정의문.
  function targetOf(card, mode){
    var kw  = (card.keyword || card.title || '').trim();
    var def = (GS.defText ? GS.defText(card) : (card.def || '')).trim();
    if(mode==='kw')  return kw;
    if(mode==='def') return def || kw;
    return def ? (kw ? kw + '  —  ' + def : def) : kw;   // both
  }

  // Fisher–Yates 셔플(원본 불변). 브라우저이므로 Math.random 사용 가능.
  function shuffled(a){ var r=a.slice(), i, j, t; for(i=r.length-1;i>0;i--){ j=Math.floor(Math.random()*(i+1)); t=r[i]; r[i]=r[j]; r[j]=t; } return r; }

  function start(host, items){
    if(!host) return;
    items = (items||[]).filter(function(it){ return it && it.card && !it.card.essay; });

    // 과목 목록(등장 순서 유지)
    var domSeen={}, doms=[];
    items.forEach(function(it){ if(!domSeen[it.domId]){ domSeen[it.domId]=1; doms.push({ id:it.domId, label:it.domLabel }); } });

    var st = { mode:'both', dom:'all', order:[], idx:0, started:0, done:false };

    var domOpts = '<option value="all">전체 과목</option>' + doms.map(function(d){ return '<option value="'+esc(d.id)+'">'+esc(d.label)+'</option>'; }).join('');
    host.innerHTML =
      '<div class="pt-wrap">'+
        '<div class="pt-ctrl">'+
          '<label>과목 <select class="pt-sel" data-k="dom">'+domOpts+'</select></label>'+
          '<label>모드 <select class="pt-sel" data-k="mode">'+
            '<option value="both">리드키워드 + 정의문</option>'+
            '<option value="def">정의문만</option>'+
            '<option value="kw">리드키워드만</option>'+
          '</select></label>'+
          '<button type="button" class="pt-btn" data-a="shuffle">🔀 다시 섞기</button>'+
          '<span class="pt-progress" data-el="progress"></span>'+
        '</div>'+
        '<div class="pt-stage" data-el="stage"></div>'+
      '</div>';

    var stageEl = host.querySelector('[data-el="stage"]');
    var progEl  = host.querySelector('[data-el="progress"]');

    function pool(){
      return items.filter(function(it){ return st.dom==='all' || it.domId===st.dom; })
                  .filter(function(it){ return targetOf(it.card, st.mode).length > 0; });
    }
    function rebuild(){
      var p = pool();
      st.order = shuffled(p);
      st.idx = 0;
      renderItem();
    }

    function curItem(){ return st.order.length ? st.order[st.idx % st.order.length] : null; }

    function renderItem(){
      var it = curItem();
      if(!it){ stageEl.innerHTML = '<div class="pt-empty">연습할 항목이 없습니다. 과목·모드를 바꿔 보세요.</div>'; progEl.textContent=''; return; }
      progEl.textContent = (st.idx+1) + ' / ' + st.order.length;
      var c = it.card, target = targetOf(c, st.mode);
      var typeLabel = c.compare ? '비교' : '일반';
      stageEl.innerHTML =
        '<div class="pt-meta"><span class="pt-dom" style="background:'+esc(it.color||'#64748b')+'">'+esc(it.domLabel)+'</span>'+
          '<span class="pt-sec">'+esc(it.secLabel||'')+'</span>'+
          '<span class="pt-title">'+esc(c.title)+' 〔'+typeLabel+'〕</span></div>'+
        '<div class="pt-target" data-el="target"></div>'+
        '<textarea class="pt-input" data-el="input" rows="3" spellcheck="false" autocomplete="off" autocapitalize="off" '+
          'placeholder="위 문장을 그대로 따라 입력하세요 (Enter=다음, Esc=현재 지우기)"></textarea>'+
        '<div class="pt-stats">'+
          '<span class="pt-stat"><b data-el="acc">100</b>%<small>정확도</small></span>'+
          '<span class="pt-stat"><b data-el="prog">0</b>%<small>진행</small></span>'+
          '<span class="pt-stat"><b data-el="spd">0</b><small>타/분</small></span>'+
          '<span class="pt-stat"><b data-el="time">0.0</b>s<small>시간</small></span>'+
          '<span class="pt-badge" data-el="badge"></span>'+
        '</div>'+
        '<div class="pt-nav">'+
          '<button type="button" class="pt-btn" data-a="prev">← 이전</button>'+
          '<button type="button" class="pt-btn" data-a="retry">↺ 다시</button>'+
          '<button type="button" class="pt-btn pt-next" data-a="next">다음 →</button>'+
        '</div>';

      st.started = 0; st.done = false;
      var inputEl = stageEl.querySelector('[data-el="input"]');
      paint('');
      inputEl.value = '';
      inputEl.focus();
    }

    // 대상 문자열을 글자별 span 으로 색칠(ok/bad/cur) + 통계 갱신
    function paint(typed){
      var it = curItem(); if(!it) return;
      var target = targetOf(it.card, st.mode);
      var tEl = stageEl.querySelector('[data-el="target"]');
      var n = target.length, m = typed.length, correct = 0, html = '';
      for(var i=0;i<n;i++){
        var ch = target.charAt(i), cls = '';
        if(i < m){ if(typed.charAt(i)===ch){ cls='ok'; correct++; } else { cls='bad'; } }
        else if(i === m){ cls='cur'; }
        var disp = ch===' ' ? '&nbsp;' : esc(ch);
        html += '<span class="'+cls+'">'+disp+'</span>';
      }
      if(m > n) html += '<span class="over">'+esc(typed.slice(n))+'</span>';   // 초과 입력 표시
      tEl.innerHTML = html;

      var acc = m ? Math.round(correct / m * 100) : 100;
      var prog = Math.round(Math.min(m, n) / n * 100);
      var secs = st.started ? (Date.now() - st.started) / 1000 : 0;
      var spd = (st.started && secs > 0) ? Math.round(m / (secs / 60)) : 0;
      set('acc', acc); set('prog', prog); set('spd', spd); set('time', secs.toFixed(1));

      var done = (m >= n) && (correct === n);
      var badge = stageEl.querySelector('[data-el="badge"]');
      if(done && !st.done){ st.done = true; if(badge) badge.innerHTML = '<span class="pt-ok">✓ 완료! Enter로 다음</span>'; flash(); }
      else if(!done){ st.done = false; if(badge) badge.textContent = ''; }
    }
    function set(k, v){ var e = stageEl.querySelector('[data-el="'+k+'"]'); if(e) e.textContent = v; }
    function flash(){ var s = stageEl.querySelector('[data-el="target"]'); if(!s) return; s.classList.add('pt-flash'); setTimeout(function(){ s.classList.remove('pt-flash'); }, 600); }

    function go(delta){ if(!st.order.length) return; st.idx = (st.idx + delta + st.order.length) % st.order.length; renderItem(); }

    // ---- 이벤트(위임) ----
    host.addEventListener('input', function(e){
      var el = e.target;
      if(el && el.getAttribute && el.getAttribute('data-el')==='input'){
        if(!st.started && el.value.length) st.started = Date.now();
        paint(el.value);
      }
    });
    host.addEventListener('keydown', function(e){
      var el = e.target;
      if(el && el.getAttribute && el.getAttribute('data-el')==='input'){
        if(e.key==='Enter'){ e.preventDefault(); if(st.done || el.value.length===0) go(1); }   // 완료 또는 빈칸이면 다음
        else if(e.key==='Escape'){ e.preventDefault(); el.value=''; st.started=0; paint(''); }
      }
    });
    host.addEventListener('change', function(e){
      var el = e.target;
      if(el && el.classList && el.classList.contains('pt-sel')){
        st[el.getAttribute('data-k')] = el.value;
        rebuild();
      }
    });
    host.addEventListener('click', function(e){
      var b = e.target && e.target.closest ? e.target.closest('[data-a]') : null;
      if(!b) return;
      var a = b.getAttribute('data-a');
      if(a==='next') go(1);
      else if(a==='prev') go(-1);
      else if(a==='shuffle') rebuild();
      else if(a==='retry'){ var i = stageEl.querySelector('[data-el="input"]'); if(i){ i.value=''; st.started=0; st.done=false; i.focus(); paint(''); } }
    });

    rebuild();
  }

  GSP.start = start;
})();
