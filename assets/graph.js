// 토픽 관계도 — 과목 → 단원 → 토픽 상하관계를 계층형 노드 그래프로 시각화(접기/펼치기).
// 의존: vis-network(CDN, 전역 vis). 데이터: window.GISULSA.
// 공개: window.GSGraph = { build, fit, expandAll, collapseAll }
// 초기엔 root→과목→단원만 표시(토픽 접힘). 단원 노드 클릭 시 그 토픽을 펼침/접음.
(function(){
  var GSGraph = (window.GSGraph = window.GSGraph || {});
  var net = null, nodes = null, edges = null, built = false;
  var topicsBySec = {}, expanded = {}, onTopicClick = null;

  function trunc(s, n){ s = String(s == null ? '' : s); return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  GSGraph.build = function(container, DOMAINS, opts){
    if(built) return true;
    opts = opts || {};
    onTopicClick = opts.onTopicClick || null;
    if(typeof vis === 'undefined'){
      container.innerHTML = '<p class="graph-err">그래프 라이브러리(vis-network)를 불러오지 못했습니다 — 네트워크 연결을 확인하세요.</p>';
      return false;
    }

    var N = [], E = [];
    N.push({ id:'root', label:'정보관리기술사', level:0,
      color:{ background:'#0f172a', border:'#0f172a' }, font:{ color:'#fff', size:18 } });

    DOMAINS.forEach(function(d){
      var dom = 'D:' + d.id;
      N.push({ id:dom, label:(d.icon || '') + ' ' + d.label, level:1,
        color:{ background:d.accent || '#334155', border:d.accent || '#334155' }, font:{ color:'#fff', size:16 } });
      E.push({ id:'e_root_' + dom, from:'root', to:dom });

      var cm = {}; (d.categories || []).forEach(function(c){ cm[c.id] = c; });
      (d.sections || []).forEach(function(s){
        var sec = dom + '/S:' + s.id;
        var col = (cm[s.id] || {}).color || '#64748b';
        N.push({ id:sec, label:trunc(s.title, 24), level:2, borderWidth:2, _sec:true,
          color:{ background:'#ffffff', border:col }, font:{ color:'#1e293b', size:14 } });
        E.push({ id:'e_' + dom + '_' + sec, from:dom, to:sec });

        // 토픽 노드/엣지는 미리 준비만 하고 DataSet 에는 미추가(접힘 상태)
        var arr = (d.cards || []).filter(function(c){ return c.category === s.id; }).map(function(c, i){
          var cid = sec + '/C:' + i;
          return {
            node:{ id:cid, label:trunc(c.title, 18), level:3, _topic:true, _title:c.title, _dom:d.id,
                   color:{ background:'#f8fafc', border:col }, font:{ color:'#334155', size:13 } },
            edge:{ id:'e_' + cid, from:sec, to:cid, color:{ color:'#cbd5e1' } }
          };
        });
        topicsBySec[sec] = arr;
        expanded[sec] = false;
      });
    });

    nodes = new vis.DataSet(N);
    edges = new vis.DataSet(E);
    net = new vis.Network(container, { nodes:nodes, edges:edges }, {
      layout:{ hierarchical:{ enabled:true, direction:'LR', sortMethod:'directed',
        levelSeparation:230, nodeSpacing:40, treeSpacing:80 } },
      physics:false,
      interaction:{ hover:true, dragNodes:true, zoomView:true, dragView:true },
      nodes:{ shape:'box', margin:8, widthConstraint:{ maximum:190 }, shapeProperties:{ borderRadius:8 } },
      edges:{ arrows:{ to:{ enabled:false } },
        smooth:{ type:'cubicBezier', forceDirection:'horizontal', roundness:0.55 }, color:{ color:'#cbd5e1' } }
    });

    net.on('click', function(p){
      if(!p.nodes.length) return;
      var n = nodes.get(p.nodes[0]);
      if(!n) return;
      if(n._sec) toggleSec(n.id);
      else if(n._topic && onTopicClick) onTopicClick(n._title, n._dom);
    });

    built = true;
    return true;
  };

  function setSec(sec, open){
    var arr = topicsBySec[sec] || [];
    if(!arr.length) return;
    if(open && !expanded[sec]){
      arr.forEach(function(t){ nodes.add(t.node); edges.add(t.edge); });
      expanded[sec] = true;
    } else if(!open && expanded[sec]){
      arr.forEach(function(t){ nodes.remove(t.node.id); edges.remove(t.edge.id); });
      expanded[sec] = false;
    }
  }
  function toggleSec(sec){ setSec(sec, !expanded[sec]); }

  GSGraph.expandAll   = function(){ Object.keys(topicsBySec).forEach(function(s){ setSec(s, true); }); GSGraph.fit(); };
  GSGraph.collapseAll = function(){ Object.keys(topicsBySec).forEach(function(s){ setSec(s, false); }); GSGraph.fit(); };
  GSGraph.fit = function(){ if(net) setTimeout(function(){ net.fit({ animation:false }); }, 30); };
})();
