/* 시험 안내(메타) 모달 — 푸터 링크로 여는 4개 설명 페이지.
   콘텐츠는 정적 HTML 문자열. cardModal과 독립적으로 자체 열기/닫기 처리. */
(function () {
  var modal = document.getElementById('infoModal');
  if (!modal) return;
  var body = modal.querySelector('.info-body');
  var lastFocused = null;

  var PAGES = {
    /* ── 1) 시험 정보 ── */
    exam:
      '<h2><i data-lucide="clipboard-list"></i>정보관리기술사 시험 정보</h2>' +
      '<p class="info-sub">국가기술자격 최고 등급(기술사)의 정보관리 종목. 시행: 한국산업인력공단(Q-net) · 필기(논술형)와 면접(구술형)으로 검정.</p>' +

      '<div class="info-grid">' +
        '<div class="info-kpi"><div class="k">합격 기준</div><div class="v">60점</div><div class="d">필기·면접 각 100점 만점 60점 이상</div></div>' +
        '<div class="info-kpi"><div class="k">필기 시간</div><div class="v">400분</div><div class="d">4교시 × 각 100분</div></div>' +
        '<div class="info-kpi"><div class="k">면접</div><div class="v">구술형</div><div class="d">약 20분 · 60점 이상</div></div>' +
        '<div class="info-kpi"><div class="k">과락</div><div class="v">없음</div><div class="d">교시별 과락 없이 평균 산정</div></div>' +
      '</div>' +

      '<h3>필기 시험 구성</h3>' +
      '<table><thead><tr><th>교시</th><th>형식</th><th>출제·선택</th><th>배점 · 시간</th></tr></thead><tbody>' +
        '<tr><td>1교시</td><td>단답형(용어 약술)</td><td>13문 중 10문 선택</td><td>문항 10점 · 100분</td></tr>' +
        '<tr><td>2교시</td><td>논술형</td><td>6문 중 4문 선택</td><td>문항 25점 · 100분</td></tr>' +
        '<tr><td>3교시</td><td>논술형</td><td>6문 중 4문 선택</td><td>문항 25점 · 100분</td></tr>' +
        '<tr><td>4교시</td><td>논술형</td><td>6문 중 4문 선택</td><td>문항 25점 · 100분</td></tr>' +
      '</tbody></table>' +
      '<p>교시별 100점 만점(합계 400점). <b>4교시 평균 60점(240점) 이상</b>이면 필기 합격 → 면접(구술) 60점 이상 시 최종 합격.</p>' +

      '<h3>응시 자격 (예시)</h3>' +
      '<ul>' +
        '<li>기사 취득 후 동일·유사 직무분야 <b>실무 4년</b> 이상</li>' +
        '<li>산업기사 취득 후 실무 5년 / 기능사 취득 후 실무 7년 이상</li>' +
        '<li>관련학과 대졸 후 실무 6년 (전문대졸 8년) 등</li>' +
        '<li>동일·유사 직무분야 <b>실무 9년</b> 이상 (무자격)</li>' +
        '<li>다른 종목 기술사 취득자 등</li>' +
      '</ul>' +
      '<div class="info-note">※ 문항 수·응시자격·시행 일정은 회차·규정 개정에 따라 달라질 수 있습니다. 정확한 기준은 반드시 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener">큐넷(q-net.or.kr)</a> 공고를 확인하세요.</div>' +
      '<div class="info-src">출처: 한국산업인력공단 큐넷(Q-net) · 국가기술자격 검정 안내</div>',

    /* ── 2) 채점 방식 ── */
    grade:
      '<h2><i data-lucide="check-check"></i>채점 방식</h2>' +
      '<p class="info-sub">채점자(발주자) 관점 4항목 균형 평가. 이 저장소의 <code>답안채점</code> 스킬·채점자 페르소나 기준을 요약.</p>' +

      '<h3>채점 4항목 (각 25점 · 총 100점)</h3>' +
      '<table><thead><tr><th>항목</th><th>배점</th><th>평가 관점</th></tr></thead><tbody>' +
        '<tr><td>구조</td><td>25</td><td>정의→구성도→구성요소 3단 준수, 1교시 22줄 / 2교시 66줄 골격 부합</td></tr>' +
        '<tr><td>키워드</td><td>25</td><td>필수 키워드 2~3개 + 인접 토픽 1~2개, 6-Key 균형</td></tr>' +
        '<tr><td>가독성</td><td>25</td><td>줄·문단·들여쓰기, 한 줄 15~20자, 구성도 박스·화살표 규칙</td></tr>' +
        '<tr><td>완결성·인상</td><td>25</td><td>형용사·부사 제거(수치·표준명 치환), 첨언 마무리, 컨설팅 톤</td></tr>' +
      '</tbody></table>' +

      '<h3>6-Key 평가 요소</h3>' +
      '<p><b>트렌드 · 도구 · 사상 · 목적 · 표준 · 거버넌스</b> — 1교시는 6개 중 <b>4개 이상</b> 노출, 2교시는 각각 <b>2회 이상</b> 등장 권장.</p>' +

      '<h3>주요 감점 요인</h3>' +
      '<ul>' +
        '<li>키워드 재사용만 반복 → "공허한 답안" 인상</li>' +
        '<li>형용사·부사로 분량 채움 → "준비 부족" 인상</li>' +
        '<li>한 토픽만 깊게 → "폭이 좁다" 인상</li>' +
        '<li>정도부사→수치(<code>매우 빠른→&lt;100ms</code>), 추상 형용사→표준명(<code>다양한 위협→APT·DDoS</code>) 치환 미흡</li>' +
      '</ul>' +

      '<h3>채점자 인상 매트릭스 (8개 점검항목)</h3>' +
      '<table><thead><tr><th>등급</th><th>충족</th><th>인상</th></tr></thead><tbody>' +
        '<tr><td>S</td><td>8개</td><td>탁월</td></tr>' +
        '<tr><td>A</td><td>7개</td><td>준비됨</td></tr>' +
        '<tr><td>B</td><td>5~6개</td><td>표준</td></tr>' +
        '<tr><td>C</td><td>3~4개</td><td>보강 필요</td></tr>' +
        '<tr><td>D</td><td>0~2개</td><td>재작성 필수</td></tr>' +
      '</tbody></table>' +
      '<p>점검: 정확성(필수 키워드 3종) · 폭(인접 토픽·표준명) · 명료성(형용사·부사 ≤5, 셀당 키워드 ≤2) · 컨설팅 톤(정량 표현·약어 일관).</p>' +

      '<h3>채점자 페르소나 4유형</h3>' +
      '<ul>' +
        '<li><b>실무형</b> — 도구·산출물(사례·툴 강조)</li>' +
        '<li><b>학자형</b> — 정의·표준(ISO·RFC 리드문)</li>' +
        '<li><b>관리자형</b> — 절차·R&amp;R(프로세스·역할)</li>' +
        '<li><b>트렌드형</b> — 최신 기술(AI·클라우드·DevOps)</li>' +
      '</ul>' +
      '<div class="info-src">기준: <code>.claude/skills/답안채점</code> · 채점자 페르소나(PART3) · 인상 관리 엔진(PART5)</div>',

    /* ── 3) 답안 템플릿 ── */
    tmpl:
      '<h2><i data-lucide="layout-template"></i>답안 템플릿 (골격)</h2>' +
      '<p class="info-sub">줄수·첨언 위치·표 행/열은 <b>고정</b>, 내부 콘텐츠만 채운다. 셀 10~15자, 명사형 종결.</p>' +

      '<h3>1교시 — 총 22줄 (용어형, 10점)</h3>' +
      '<table><thead><tr><th>줄</th><th>구성</th><th>내용</th></tr></thead><tbody>' +
        '<tr><td>03~05</td><td>I. 정의</td><td>03=제목 <code>I. "리드키워드" 토픽의 정의</code> / 04=중간문(수단·메커니즘) / 05=마무리(목적·효과, 명사형)</td></tr>' +
        '<tr><td>06~13</td><td>II-1. 구성도</td><td>07=<code>1. 구성도</code>, 08~12=박스<code>[ ]</code>+화살표 5줄, <b>13=※ 구성도 첨언</b></td></tr>' +
        '<tr><td>14~22</td><td>II-2. 구성요소</td><td>15=헤더, 16~21=본문 6행(3열: 구분·구성요소·역할), <b>22=※ 최종 첨언</b></td></tr>' +
      '</tbody></table>' +
      '<p>표 = <b>3열 × (헤더1+본문6)=7행</b>. 리드 키워드는 로마자 뒤 쌍따옴표, 한글 8자/영문·숫자 12자 이내. 첨언(※) 2곳(13·22줄).</p>' +

      '<h3>1교시 비교형(A vs B) 변형 — 총 22줄</h3>' +
      '<ul>' +
        '<li><b>I. 정의 비교</b>: 2열표 <code>[A|B]</code>, 헤더1+본문3행 + 첨언(08줄=공통 상위개념)</li>' +
        '<li><b>II. 상세 비교</b>: 3열표 <code>[구분|A|B]</code>, 비교기준 최대 5개(11~21) + 첨언(22줄=선정기준·하이브리드)</li>' +
        '<li>좌우 셀 같은 관점 대구 정렬(A "빠름" ↔ B "느림")</li>' +
      '</ul>' +

      '<h3>2교시 — 총 66줄 (논술형, 25점 · 3페이지)</h3>' +
      '<table><thead><tr><th>페이지</th><th>줄</th><th>내용</th></tr></thead><tbody>' +
        '<tr><td>1p</td><td>01~22</td><td>문제 + I.개요(도식4+개념2+첨언) + II.요구1(개요+상세)</td></tr>' +
        '<tr><td>2p</td><td>23~44</td><td>III.요구2 (개요+상세, 한 페이지 완결)</td></tr>' +
        '<tr><td>3p</td><td>45~66</td><td>IV.비교·결론 (비교표 + 결론)</td></tr>' +
      '</tbody></table>' +
      '<p>첨언(※) 6개: <b>13·22·33·44·55·66줄</b> / 빈줄 3개: 14·34·56 / 대목차: 06·15·35·57. 각 절 = 1.개요(도식4+개념1~2+첨언) + 2.상세(표·구성도 택1).</p>' +
      '<div class="info-note">※ 표·구성도 택1 기준 — 종류·분류·역할=표 / 흐름·절차·아키텍처·동작=구성도 / A vs B=비교표 / 모호하면 표.</div>' +
      '<div class="info-src">기준: <code>CLAUDE.md</code> · <code>답안/1교시·2교시 답안구조</code> · 프롬프트 PART1</div>',

    /* ── 4) 작성 원칙 ── */
    write:
      '<h2><i data-lucide="pen-line"></i>답안 작성 원칙</h2>' +
      '<p class="info-sub">"공부 = 발주자(채점자)에게 답안 납품". 답안=제안서, 시험시간=납기 관점의 작성 4원칙.</p>' +

      '<h3>4원칙</h3>' +
      '<ul>' +
        '<li><b>재사용</b> — 키워드 N개로 여러 토픽 활용</li>' +
        '<li><b>조립</b> — 키워드 + 조사 = 정의문</li>' +
        '<li><b>적합성</b> — 채점자 페르소나 매칭</li>' +
        '<li><b>명료성</b> — 형용사·부사 제거</li>' +
      '</ul>' +

      '<h3>작성 규칙</h3>' +
      '<ul>' +
        '<li>한국어 · UTF-8 · <b>명사형 종결</b>("~기술.", "~체계.", "~모델.")</li>' +
        '<li>형용사·부사 최소화 → <b>수치·표준명·도구명 치환</b>(<code>&lt;100ms</code>, <code>99.9%</code>, <code>1Gbps</code>)</li>' +
        '<li>약어는 첫 등장 시 한글풀이(영문약어) 1회, 이후 약어만</li>' +
        '<li>6-Key(트렌드·도구·사상·목적·표준·거버넌스) <b>4개 이상</b> 노출</li>' +
        '<li>필수 키워드 2~3개 + 인접 토픽 1~2개 연결(폭 과시)</li>' +
        '<li>한 셀 = 1~2개 키워드 (채점자 인지 부담↓)</li>' +
        '<li>시험 통계·수치는 임의 생성 금지 — 미확인은 <code>[확인필요]</code></li>' +
      '</ul>' +

      '<h3>Before → After 예시 (CI/CD)</h3>' +
      '<table><thead><tr><th>구분</th><th>표현</th><th>인상</th></tr></thead><tbody>' +
        '<tr><td>❌ Before</td><td>"효과적인 통합·배포", "매우 다양한", "혁신적 방법론"</td><td>막연·키워드 부족</td></tr>' +
        '<tr><td>✓ After</td><td>"GitOps 실천", "Pipeline 배포주기 단축 IaC", 첨언 "DevSecOps 통합 필수"</td><td>정확+폭+깔끔</td></tr>' +
      '</tbody></table>' +
      '<div class="info-src">기준: <code>.claude/skills/답안작성</code> · 작성철학(PART0) · 인상 관리 엔진(PART5)</div>'
  };

  function open(key) {
    var html = PAGES[key];
    if (!html) return;
    lastFocused = document.activeElement;
    body.innerHTML = html;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    body.scrollTop = 0;
    if (window.lucide) lucide.createIcons();
    var x = modal.querySelector('.cmodal-x');
    if (x) x.focus();
  }
  function close() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    body.innerHTML = '';
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
  }
  function isOpen() { return !modal.classList.contains('hidden'); }

  document.querySelectorAll('.foot-link[data-info]').forEach(function (b) {
    b.addEventListener('click', function () { open(b.getAttribute('data-info')); });
  });
  modal.addEventListener('click', function (e) {
    if (e.target && e.target.getAttribute && e.target.getAttribute('data-close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'Tab') {
      var f = modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
