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

      '<h3>시험 시간표 (당일 일정)</h3>' +
      '<table><thead><tr><th>구분</th><th>시간</th><th>소요</th></tr></thead><tbody>' +
        '<tr><td>1교시</td><td>09:00 ~ 10:40</td><td>100분</td></tr>' +
        '<tr><td>쉬는시간</td><td>10:40 ~ 11:00</td><td>20분</td></tr>' +
        '<tr><td>2교시</td><td>11:00 ~ 12:40</td><td>100분</td></tr>' +
        '<tr><td>점심시간</td><td>12:40 ~ 14:00</td><td>약 80분</td></tr>' +
        '<tr><td>3교시</td><td>14:00 ~ 15:40</td><td>100분</td></tr>' +
        '<tr><td>쉬는시간</td><td>15:40 ~ 16:00</td><td>20분</td></tr>' +
        '<tr><td>4교시</td><td>16:00 ~ 17:40</td><td>100분</td></tr>' +
      '</tbody></table>' +
      '<div class="info-note">※ 위 시각은 기술사 필기 <b>표준 일정</b> 기준입니다. 시행 회차·고사장 사정에 따라 입실·시작 시각이 달라질 수 있으니, 정확한 시간은 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener">큐넷</a> 수험표·공고를 확인하세요.</div>' +

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
      '<p class="info-sub">공식 세부 채점 루브릭은 비공개입니다. 아래는 ① 공개된 검정 체계 ② 수험가에 알려진 논술 채점 관점 ③ 본 저장소의 답안 작성·채점 기준을 종합한 것입니다.</p>' +

      '<h3>채점 체계 (국가검정)</h3>' +
      '<div class="info-grid">' +
        '<div class="info-kpi"><div class="k">채점위원</div><div class="v">3인</div><div class="d">3인 채점 합산 평가</div></div>' +
        '<div class="info-kpi"><div class="k">합격선</div><div class="v">60점</div><div class="d">400점 만점 240점(평균)</div></div>' +
        '<div class="info-kpi"><div class="k">문항 배점</div><div class="v">25·10</div><div class="d">2~4교시 25점 / 1교시 10점</div></div>' +
        '<div class="info-kpi"><div class="k">부분점수</div><div class="v">있음</div><div class="d">완성도에 따라 부여</div></div>' +
      '</div>' +
      '<p>필기 4교시 400점 만점을 <b>채점위원 3인</b>이 채점하며, 합산 <b>720점 이상</b>(= 평균 60점) 시 합격으로 알려져 있습니다. 논술 문항은 완성도에 따라 부분점수가 부여됩니다.</p>' +

      '<h3>채점위원 구성 &amp; 성향 (공식 + 추론)</h3>' +
      '<p>채점위원은 관련분야 <b>대학교수·기술사·기능장</b> 중 위촉되며(인력풀 등록), 동일 중직무분야 <b>사설학원 강사·수험서 저자는 공백기</b>(공단 기준 약 3년) 후에만 등록 가능 — 현직 실무·학계 중심으로 학원식 정형답안과 거리를 둡니다.</p>' +
      '<table><thead><tr><th>위원 유형</th><th>배경</th><th>채점 성향 (추정)</th><th>대응 페르소나</th></tr></thead><tbody>' +
        '<tr><td>대학교수</td><td>학계</td><td>정의·이론·표준의 정확성, 논리 구조</td><td>학자형</td></tr>' +
        '<tr><td>현직 기술사</td><td>산업 실무</td><td>실무 적용성·최신 트렌드·프로젝트 통찰</td><td>실무형·트렌드형</td></tr>' +
        '<tr><td>기능장·PM</td><td>현장 관리</td><td>절차·표준 준수, 역할·R&amp;R 명확</td><td>관리자형</td></tr>' +
      '</tbody></table>' +
      '<p><b>3인 합산 채점</b>이므로 한 관점에 치우친 답안보다 <b>6-Key가 균형</b> 잡힌 답안이 안정적으로 고득점합니다. <i>(성향은 공개 루브릭이 아니라 위원 구성·통념에 근거한 추정)</i></p>' +

      '<h3>논술 답안 채점 관점 (수험가 정설)</h3>' +
      '<table><thead><tr><th>관점</th><th>설명</th></tr></thead><tbody>' +
        '<tr><td>출제 의도</td><td>질문이 요구한 것에 정확히 답했는가(동문서답 감점)</td></tr>' +
        '<tr><td>논술 구조</td><td>개요(서론)-본론-결론, 두괄식·기승전결 형태</td></tr>' +
        '<tr><td>핵심 키워드</td><td>도입부에 핵심키워드 제시, 상위개념 부각, 결론에서 출제의도 포커스</td></tr>' +
        '<tr><td>이론 충실성</td><td>정의·원리·역사·활용방안의 균형 있는 전개</td></tr>' +
        '<tr><td>그림·표</td><td>창의적 도해·표로 가독성·전문성 확보(자 사용 권장)</td></tr>' +
        '<tr><td>결론 견해</td><td>본인의 관점·실무 통찰을 명확히 표현</td></tr>' +
      '</tbody></table>' +

      '<h3>정보관리기술사 특화 채점 포인트 (검색 + 추론)</h3>' +
      '<p>정보관리기술사는 <b>정보시스템 기획·설계·관리</b>(ISP·EA·PM·거버넌스·SW공학·DB·보안·신기술경영) 중심입니다 — HW/SW 구현 중심의 컴퓨터시스템응용기술사와 구분됩니다. IT 분야 특성상 아래가 고득점을 가릅니다.</p>' +
      '<ul>' +
        '<li><b>최신 기술 트렌드 접목</b> — AI·클라우드·제로트러스트·MSA 등 현재 동향과 신개념(예: ISO 31000 위험관리·보안 프레임워크)을 답안에 반영.</li>' +
        '<li><b>실무 사례·문제해결력</b> — 프로젝트 경험 기반 적용 방안 제시(특히 면접에서 강점).</li>' +
        '<li><b>창의적 도해로 차별화</b> — 시중 교재 그대로가 아닌 자신만의 구성도·표로 전문성 표현. <b>마지막 1~2점은 차별화(+α)</b>에서 갈림.</li>' +
        '<li><b>답안 콘셉트 일관성</b> — 리드키워드→구성도→결론이 하나의 관점으로 연결.</li>' +
      '</ul>' +

      '<h3>답안 템플릿 기준으로 본 채점 (본 저장소)</h3>' +
      '<p>본 저장소의 <b>1교시 22줄 · 2교시 66줄 골격</b>은 채점 4항목을 직접 겨냥해 설계되었습니다.</p>' +
      '<table><thead><tr><th>템플릿 요소</th><th>채점 기여</th></tr></thead><tbody>' +
        '<tr><td>정의 3단(리드키워드·중간문·마무리)</td><td>정확한 정의 전달(1교시 핵심)·두괄식</td></tr>' +
        '<tr><td>구성도(박스·화살표)</td><td>창의적 도해 차별화·가독성</td></tr>' +
        '<tr><td>구성요소 3열표(헤더1+본문6)</td><td>구조·분류의 체계성·정량 점수화 용이</td></tr>' +
        '<tr><td>6-Key 노출(4개+)</td><td>키워드 폭·트렌드·표준·거버넌스 균형</td></tr>' +
        '<tr><td>첨언(※)</td><td>인접 토픽·트렌드 연결로 폭 과시·완결성</td></tr>' +
      '</tbody></table>' +

      '<h3>요소별 채점 루브릭 (추정)</h3>' +
      '<p>공식 세부 배점은 비공개입니다. 아래는 채점 4항목과 <b>답안 템플릿 골격</b>(푸터 › 답안 템플릿)을 근거로 요소별 배점·기준을 추정한 학습용 루브릭입니다.</p>' +
      '<p><b>▸ 1교시 (용어형 · 문항 10점) — 22줄 골격</b></p>' +
      '<table><thead><tr><th>요소(줄)</th><th>배점</th><th>우수(만점) — 템플릿 기준 이행</th><th>보통</th><th>미흡(감점)</th></tr></thead><tbody>' +
        '<tr><td>정의<br>(03~05줄)</td><td>3</td><td>03 리드키워드(로마자 뒤 쌍따옴표·한글8/영문12자) + 04 수단·메커니즘 + 05 목적·범주 <b>명사형 종결</b>, 그리고 <b>그 개념의 널리 알려진 핵심 키워드 3개 이상</b>(표준 용어·구성요소·창시자·표준명)을 정의문에 포함</td><td>정의는 맞으나 표준 키워드 1~2개·목적 약함</td><td>부정확·서술형(~한다)·표준 키워드 부재</td></tr>' +
        '<tr><td>구성도<br>(07~13줄)</td><td>3</td><td>박스<code>[ ]</code>+화살표 <b>5줄</b>, <b>해당 개념의 표준(정설) 구성도를 반영</b>(교과서·표준 도식 기반 — 예: OSI 7계층·MVC 3요소·PDCA 순환·2×2 매트릭스 등, 임의 도식 지양)하되 <b>답안 칸수(1교시 5줄)에 맞게 압축</b>, 세로 <code>↓</code> 방향 명확, <b>13줄 ※첨언</b></td><td>구조는 있으나 표준 도식과 다름·단조</td><td>텍스트 나열·표준 구조 미반영</td></tr>' +
        '<tr><td>구성요소<br>(14~22줄)</td><td>3</td><td><b>3열(구분|구성요소|역할)×7행</b>(헤더1+본문6), 1열 분류 8유형 중 택, 셀 표시폭 ≤30(한글15/영문30) 명사형, <b>22줄 ※첨언(인접토픽)</b></td><td>본문 행 부족·분류 모호</td><td>표 부실·역할 설명 빈약</td></tr>' +
        '<tr><td>완결성</td><td>1</td><td>22줄 골격 정확 + 6-Key 4개↑ + 형용사·부사 ≤5 + 정량표현 1개↑</td><td>일부 충족</td><td>골격 붕괴·수식어 남발</td></tr>' +
      '</tbody></table>' +
      '<p><b>▸ 2교시 (논술형 · 문항 25점) — 66줄 골격</b></p>' +
      '<table><thead><tr><th>요소(대목차)</th><th>배점</th><th>우수 — 템플릿 기준 이행</th><th>미흡(감점)</th></tr></thead><tbody>' +
        '<tr><td>I. 개요</td><td>5</td><td>도식 <b>4행</b>(배경→흐름→효과→표준박스) + 개념 1~2 + ※첨언, 출제의도 정조준</td><td>개요 빈약·도식 없음·동문서답</td></tr>' +
        '<tr><td>II. 핵심기술</td><td>8</td><td>구성도(원리·흐름) + 상세표 <b>본문 8~11행</b>으로 페이지 채움 + 표준·기법명</td><td>단순 나열·표준 부재·페이지 빈줄</td></tr>' +
        '<tr><td>III. 적용·비교</td><td>7</td><td>기준별 비교표(최대 5기준) + 실무 적용·최신 트렌드</td><td>피상적·비교기준 부실</td></tr>' +
        '<tr><td>IV. 결론</td><td>5</td><td>기대효과(정량·정성)·발전방향(단·중장기)·고려사항·인접기술 <b>7~9항목</b> + 본인 견해</td><td>결론 부재·본문 요약만·페이지 빈줄</td></tr>' +
      '</tbody></table>' +

      '<h3>정의문 필수 키워드 — 무엇을·어떻게 넣나</h3>' +
      '<p>정의문에는 <b>그 토픽과의 연관성을 부정할 수 없는 "필수 키워드"</b>가 반드시 들어가야 합니다 — 채점자가 "이 개념을 제대로 아는가"를 즉시 판별하는 핵심입니다. 일반론만 서술하고 필수 키워드가 없으면 "개념 미숙지" 인상으로 감점됩니다.</p>' +
      '<table><thead><tr><th>선정 기준</th><th>무엇을 고르나 — 예시</th></tr></thead><tbody>' +
        '<tr><td>① 표준·정의 반복어</td><td>ISO·RFC·교과서 정의에서 반복되는 핵심 용어 (트랜잭션→<b>ACID</b>, 제로트러스트→<b>최소권한</b>)</td></tr>' +
        '<tr><td>② 구성요소·메커니즘</td><td>그 개념을 이루는 필수 구성/원리 (EVM→<b>PV·EV·AC</b>, SWOT→<b>강점·약점·기회·위협</b>)</td></tr>' +
        '<tr><td>③ 표준명·창시자·모델</td><td>대표 표준·모델·제안자 (가치사슬→<b>Porter</b>, 위험분석→<b>PMBOK</b>, 거버넌스→<b>COBIT·ISO38500</b>)</td></tr>' +
        '<tr><td>④ 변별 키워드</td><td>인접 개념과 구별짓는 결정적 차이어 (OLTP↔OLAP, 대칭키↔비대칭키, 응집도↔결합도)</td></tr>' +
        '<tr><td>⑤ 기출 반복어</td><td>기출·해설에서 그 토픽에 반복 등장하는 용어(빈출 키워드)</td></tr>' +
      '</tbody></table>' +
      '<div class="info-note">※ <b>판정</b>: 위 기준의 필수 키워드가 <b>3개 이상</b> + 리드키워드(03줄)가 이 중 하나(가장 대표적인 상위·표준어)이면 <b>우수</b>. "그 개념이라면 반드시 나와야 할 단어가 빠졌는가?"를 스스로 물어 채운다.</div>' +

      '<h3>우수(만점) 판정 체크리스트 — 채점자 시점</h3>' +
      '<p>"내가 채점위원이면 만점을 주기 위해 확인하는 것" — 아래를 모두 이행하면 우수 인상.</p>' +
      '<ul>' +
        '<li><b>골격 정확</b>: 줄수(1교시 22 / 2교시 66) 준수, 첨언(※) 위치 정확(1교시 13·22 / 2교시 절마다+최종), 2교시는 <b>페이지 22줄 완전 사용</b>(빈줄 없음).</li>' +
        '<li><b>두괄식</b>: 리드키워드를 정의 서두 쌍따옴표에 배치, 결론에서 출제의도 재강조.</li>' +
        '<li><b>키워드 폭</b>: 필수 키워드 3종 전부 + 인접 토픽 1~2개 연결(좁지 않다는 인상).</li>' +
        '<li><b>6-Key 균형</b>: 트렌드·도구·사상·목적·표준·거버넌스 — 1교시 4개↑ / 2교시 각 2회↑.</li>' +
        '<li><b>명료성</b>: 명사형 종결 일관, 형용사·부사 ≤5(1교시)/≤10(2교시), 정량표현(수치·표준명) 1개↑, 약어 첫 등장 시 풀이.</li>' +
        '<li><b>표·도해</b>: 표 셀 표시폭 ≤30(한글15/영문30)·명사형, 구성도 방향(→·↓) 명확, <b>시중 도해가 아닌 자신만의 창의적 도식</b>(차별화 +α).</li>' +
        '<li><b>정보관리 특화</b>: 최신 기술 트렌드(AI·클라우드·제로트러스트)·최신 표준(ISO 31000 등)·실무 사례 반영.</li>' +
        '<li><b>완결</b>: 첨언(※)으로 마무리, 결론에 본인 관점·실무 통찰 명시.</li>' +
      '</ul>' +
      '<div class="info-note">※ 배점·수준은 채점 4항목과 골격에 근거한 <b>학습용 추정치</b>로 공식 기준이 아닙니다. 부분점수·가감점은 채점위원 재량이며, <b>동문서답·백지·골격 붕괴·페이지 빈줄</b>은 큰 감점 요인입니다.</div>' +

      '<h3>1교시 vs 2·3·4교시 채점 차이</h3>' +
      '<table><thead><tr><th>구분</th><th>1교시 (용어형)</th><th>2~4교시 (논술형)</th></tr></thead><tbody>' +
        '<tr><td>형식</td><td>용어 약술(단답 서술)</td><td>서술 논술</td></tr>' +
        '<tr><td>문항 배점</td><td>10점 (13중 10 선택)</td><td>25점 (6중 4 선택)</td></tr>' +
        '<tr><td>채점 초점</td><td>간결·정확한 정의 전달, 그림·공식</td><td>논술 완성도(개요-본론-결론)+결론 견해</td></tr>' +
        '<tr><td>권장 분량</td><td>약 0.5~1면</td><td>약 1.5~3면</td></tr>' +
        '<tr><td>주요 감점</td><td>정의 부정확·핵심 누락</td><td>동문서답·구조 부실·결론 부재</td></tr>' +
      '</tbody></table>' +

      '<h3>문제 유형별 채점 포인트</h3>' +
      '<ul>' +
        '<li><b>설명·약술형</b> — 정확한 정의 + 핵심 특징·구성. 두괄식 리드 키워드.</li>' +
        '<li><b>논술형</b> — 개요→상세(구성도·표)→결론 구조, 본인 견해·실무 통찰.</li>' +
        '<li><b>계산형</b>(EVM·신뢰도·성능·대기행렬 등) — <b>계산식·풀이 과정·답</b>을 모두 기재해야 과정 부분점수 확보. 계산식도 검은펜.</li>' +
        '<li><b>비교형</b>(A vs B) — 공통 상위개념 + 기준별 대비표 + 선정기준·하이브리드 추세.</li>' +
      '</ul>' +

      '<h3>답안 작성 규정 &amp; 순서 (Q-net)</h3>' +
      '<ul>' +
        '<li><b>필기구</b>: 지워지지 않는 <b>검은색만</b> 사용. 연필·유색·지워지는 펜·2색 혼합은 <b>해당 문항 채점 제외</b>.</li>' +
        '<li><b>정정</b>: 틀린 부분에 <b>두 줄(=)</b>을 긋고 재기재. <b>수정테이프 사용 가능</b>(수정액 도포는 규정상 별도 확인 권장).</li>' +
        '<li><b>답안지</b>: 표지·연습지 제외 <b>7매(14면)</b>. 교부 즉시 매수·페이지 순서 확인.</li>' +
        '<li><b>분리·훼손 금지</b>: 답안지·연습지를 <b>1매라도 뜯거나 훼손하면</b> 답안지 전체 또는 해당 문항 <b>0점</b> 처리(연습지 기재는 채점 안 하되 분리 금지).</li>' +
        '<li><b>작성 순서</b>: 순서 무관 — <b>자신 있는 쉬운 문제부터</b> 작성해도 됨. 단 <b>문항 번호를 정확히 기재</b>해 어느 문제의 답인지 명확히 할 것.</li>' +
        '<li>미작성·문항 미표기 답안은 채점 제외(0점). 어려운 건 쉽고 작게, 쉬운 건 깊고 넓게.</li>' +
      '</ul>' +

      '<h3>채점 4항목 (본 저장소 기준 · 각 25점)</h3>' +
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

      '<h3>면접(구술) 채점</h3>' +
      '<p>필기 합격 후 <b>약 20분</b> 구술 면접, 100점 만점 60점 이상 시 최종 합격. 필기 지식의 <b>응용력(문제해결)</b>·PM 등 실무 경력·논리력·태도(말투·자세·인상)를 종합 평가합니다. 모의면접·스터디로 대비를 권장합니다.</p>' +

      '<div class="info-note">※ 채점위원 수·합산 기준·채점 성향 등은 <b>공식 비공개 정보로, 위원 구성과 수험가 통념에 근거한 추정</b>이며 회차·규정에 따라 다를 수 있습니다. 답안 작성 규정·부정행위 처리는 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener">큐넷</a> 수험표·답안지 유의사항을 반드시 확인하세요.</div>' +
      '<div class="info-src">출처: Q-net 검정·답안지 유의사항 · 국가기술자격법 시행규칙(채점위원) · 나무위키(정보관리기술사) · 기술사 논술 채점·답안작성 자료(stechstar 등) · 본 저장소 <code>답안채점</code>(PART3·5)</div>',

    /* ── 3) 답안 템플릿 ── */
    tmpl:
      '<h2><i data-lucide="layout-template"></i>답안 템플릿 (줄별 골격)</h2>' +
      '<p class="info-sub">줄수·첨언 위치·표 행/열은 <b>고정</b>, 내부 콘텐츠만 채웁니다. 셀 10~15자·명사형 종결. 아래는 저장소 실제 템플릿(2교시는 <code>답안구조 v5.0</code> 66줄 완전사용) 기준의 줄별 골격입니다.</p>' +

      '<h3>유형 1 · 1교시 일반형(설명형) — 22줄 / 1면</h3>' +
      '<p>I. 정의(03~05) → II. 구성도 및 구성요소 [ 1.구성도(07~13) · 2.구성요소(14~22) ]</p>' +
      '<table><thead><tr><th>줄</th><th>구분</th><th>템플릿</th></tr></thead><tbody>' +
        '<tr><td>01</td><td>문제</td><td><code>문제 : {토픽}에 대하여 설명하시오.</code></td></tr>' +
        '<tr><td>02</td><td>답</td><td><code>답)</code></td></tr>' +
        '<tr><td>03</td><td>I. 정의(리드)</td><td><code>I. "{리드키워드}" {토픽}의 정의</code></td></tr>' +
        '<tr><td>04</td><td>중간문</td><td>수단·메커니즘·사상 — <code>{도구}를 {원리} 사상으로</code></td></tr>' +
        '<tr><td>05</td><td>마무리</td><td>목적·효과·범주, <b>명사형 종결</b>(<code>~체계.</code>)</td></tr>' +
        '<tr><td>06</td><td>II. 대목차</td><td><code>II. {토픽}의 구성도 및 구성요소</code></td></tr>' +
        '<tr><td>07</td><td>1. 구성도</td><td><code>1. {토픽}의 구성도</code></td></tr>' +
        '<tr><td>08~12</td><td>구성도 5행</td><td>박스 <code>[ ]</code> + 화살표(→ ↓ ↕ ⇄), 표준·통제·피드백 포함</td></tr>' +
        '<tr><td>13</td><td>※ 구성도 첨언</td><td><code>※ {핵심 메커니즘 — 20자 이내}</code></td></tr>' +
        '<tr><td>14</td><td>2. 구성요소</td><td><code>2. {토픽}의 구성요소</code></td></tr>' +
        '<tr><td>15</td><td>표 헤더</td><td><code>{1열분류} | 구성요소 | 역할·기술</code></td></tr>' +
        '<tr><td>16~21</td><td>표 본문 6행</td><td>3열 × 6행, 셀 10~15자·명사형</td></tr>' +
        '<tr><td>22</td><td>※ 최종 첨언</td><td><code>※ {인접 토픽 키워드 포함 — 20자}</code></td></tr>' +
      '</tbody></table>' +
      '<ul>' +
        '<li>리드키워드: 로마자 뒤 쌍따옴표, <b>한글 8자 / 영문·숫자 12자</b> 이내. 4패턴 — 트렌드어 · 상위개념 · "{문제}해결" · 표준/기관명.</li>' +
        '<li>구성요소표 = <b>3열(구분 | 구성요소 | 역할·기술) × 7행(헤더1+본문6)</b>. 1열 분류 8유형(기술·조직·프로세스 / 상위·중간·하위 / 입력·처리·출력 …).</li>' +
        '<li>첨언(※) 2곳 고정: 13줄(구성도)·22줄(최종). 6-Key 4개 이상, 필수 키워드 3종 노출.</li>' +
      '</ul>' +

      '<h3>유형 2 · 1교시 비교형(A vs B) — 22줄 / 1면</h3>' +
      '<p>구성도 대신 <b>좌우 대비 표 2개</b>. I. 정의 비교(2열) → II. 상세 비교(3열)</p>' +
      '<table><thead><tr><th>줄</th><th>구분</th><th>템플릿</th></tr></thead><tbody>' +
        '<tr><td>01~02</td><td>문제·답</td><td><code>문제 : A와 B를 비교하시오.</code> / <code>답)</code></td></tr>' +
        '<tr><td>03</td><td>I. 정의 비교</td><td><code>I. A와 B의 정의 비교</code></td></tr>' +
        '<tr><td>04</td><td>2열 헤더</td><td><code>A | B</code></td></tr>' +
        '<tr><td>05~07</td><td>정의 본문 3행</td><td>본질 / 메커니즘 / 목적·범주(명사형), 좌우 대구</td></tr>' +
        '<tr><td>08</td><td>※ 정의비교 첨언</td><td><code>※ {공통 상위개념 / 본질 분기점}</code></td></tr>' +
        '<tr><td>09</td><td>II. 상세 비교</td><td><code>II. A와 B의 상세 비교</code></td></tr>' +
        '<tr><td>10</td><td>3열 헤더</td><td><code>구분(기준) | A | B</code></td></tr>' +
        '<tr><td>11~21</td><td>비교 본문(최대 11행)</td><td>비교기준 <b>최대 5개</b>, 길면 2~3행 분할(빈 구분셀=병합)</td></tr>' +
        '<tr><td>22</td><td>※ 최종 첨언</td><td><code>※ {선정기준 · 하이브리드 추세}</code></td></tr>' +
      '</tbody></table>' +
      '<ul><li>좌우 셀은 같은 관점으로 대구 정렬(A 빠름 ↔ B 느림), 셀 15자·명사형. 첨언 08(공통 상위개념)·22(선정기준).</li></ul>' +

      '<h3>유형 3 · 2교시 2개 문항형(가·나) — 66줄 / 3면</h3>' +
      '<p>I.개요 → II.요구1 → III.요구2 → IV.비교·결론. (v5.0 · 빈줄 없이 66줄 완전 사용)</p>' +
      '<table><thead><tr><th>줄</th><th>구분</th><th>템플릿</th></tr></thead><tbody>' +
        '<tr><td colspan="3" style="background:var(--surface-3);font-weight:700">1면 (01~22) — 문제 + I.개요 + II.요구1</td></tr>' +
        '<tr><td>01~03</td><td>문제·요구·답</td><td><code>문제 : {토픽}</code> / <code>가. {요구1}  나. {요구2}</code> / <code>답</code></td></tr>' +
        '<tr><td>04</td><td>I. 개요(대목차)</td><td><code>I. {토픽}의 개요</code></td></tr>' +
        '<tr><td>05~08</td><td>도식 4행</td><td>등장배경 → 핵심흐름 → 결과·효과 → 표준·근거 박스</td></tr>' +
        '<tr><td>09~10</td><td>개념 · ※첨언</td><td>핵심 정의 1줄 / <code>※ {개요 첨언}</code></td></tr>' +
        '<tr><td>11</td><td>II. 요구1(대목차)</td><td><code>II. {세부 요구1}</code></td></tr>' +
        '<tr><td>12~16</td><td>1.개요·구성도</td><td>구성도 3행 + <code>※ 구성도 첨언</code></td></tr>' +
        '<tr><td>17~22</td><td>2.상세(표)</td><td>헤더 + 본문 3행 + <code>※ 상세 첨언</code></td></tr>' +
        '<tr><td colspan="3" style="background:var(--surface-3);font-weight:700">2면 (23~44) — III.요구2 (한 면 완결)</td></tr>' +
        '<tr><td>23~24</td><td>III·소목차</td><td><code>III. {세부 요구2}</code> / <code>1. 개요·구성도</code></td></tr>' +
        '<tr><td>25~30</td><td>도식4 · 개념 · ※첨언</td><td>도식 4행 + 개념 1줄 + <code>※ 개요 첨언</code></td></tr>' +
        '<tr><td>31~43</td><td>2.상세(표)</td><td><code>2. 상세</code> + 헤더 + <b>본문 11행</b>(면 채움)</td></tr>' +
        '<tr><td>44</td><td>※ 상세 첨언</td><td><code>※ {상세 첨언}</code></td></tr>' +
        '<tr><td colspan="3" style="background:var(--surface-3);font-weight:700">3면 (45~66) — IV.비교·결론</td></tr>' +
        '<tr><td>45~47</td><td>IV·비교표 헤더</td><td><code>IV. {요구1} vs {요구2} 비교·결론</code> / 비교 헤더</td></tr>' +
        '<tr><td>48~55</td><td>비교 본문 · ※첨언</td><td>비교 7행 + <code>※ 비교 첨언(선택 기준)</code></td></tr>' +
        '<tr><td>56~64</td><td>2.결론</td><td>기대효과(정량·정성) · 발전방향(단기·중장기) · 고려사항 · 인접기술 · 정리문</td></tr>' +
        '<tr><td>65~66</td><td>※최종첨언·마무리</td><td><code>※ {인접 토픽·전망}</code> / 마무리 한 줄</td></tr>' +
      '</tbody></table>' +

      '<h3>유형 4 · 2교시 3개 문항형(가·나·다) — 66줄 / 3면</h3>' +
      '<p>I.요구1 → II.요구2 → III.요구3. <b>각 대목차 = 정확히 1면</b>, 결론절 없음. 각 절 = 개요(도식4+개념+첨언) + 원리·상세(표+첨언).</p>' +
      '<table><thead><tr><th>면</th><th>줄</th><th>구성</th></tr></thead><tbody>' +
        '<tr><td>1면</td><td>01~22</td><td>문제·요구(가·나·다)·답 → <b>I.요구1</b>: 1.개요(06~09 도식4·10 개념·11 ※) · 2.원리상세(13 헤더·14~21 본문 8행·22 ※)</td></tr>' +
        '<tr><td>2면</td><td>23~44</td><td><b>II.요구2</b>: 개요(25~28 도식4·29 개념·30 ※) · 원리상세(32 헤더·33~43 본문 11행·44 ※)</td></tr>' +
        '<tr><td>3면</td><td>45~66</td><td><b>III.요구3</b>: 개요(47~50 도식4·51 개념·52 ※) · 원리상세(54 헤더·55~65 본문 11행·66 ※)</td></tr>' +
      '</tbody></table>' +

      '<h3>공통 작성 규칙 (2교시)</h3>' +
      '<ul>' +
        '<li>총 66줄 / 3면 / 면당 22줄. <b>대목차·소목차는 면 경계(22↔23, 44↔45)를 넘지 않음</b>, 66줄 완전 사용(하단 빈줄 금지).</li>' +
        '<li>I.개요 = 도식4 + 개념1~2 + 첨언1 단일 블록. 도식 패턴: 시계열/계층/대비(AS-IS↔TO-BE)/망형/파이프라인/통제형.</li>' +
        '<li>표는 테두리선 없이 <b>내용 행만</b>(답안지 밑줄이 구분선). 절마다 첨언(※) 1개 + 최종 1개.</li>' +
        '<li>6-Key 각 2회 이상 · 인접 토픽 2개 이상 · 형용사·부사 전체 10개 이하 · 명사형 종결 · 약어 첫 등장 시 풀이.</li>' +
      '</ul>' +
      '<div class="info-note">※ 표·구성도 택1 — 종류·분류·역할=<b>표</b> / 흐름·절차·아키텍처·동작=<b>구성도</b> / A vs B=<b>비교표</b> / 모호하면 표(정량·점수화 용이). 2교시 줄 배치는 저장소에 v5.0(최신·빈줄 없음)과 v4.9(빈줄 포함)가 공존하며, 위는 v5.0 기준입니다.</div>' +
      '<div class="info-src">기준: <code>답안/1교시·2교시 답안구조</code> · <code>답안템플릿_1교시·2교시</code> · 프롬프트 PART1(답안구조)</div>',

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

      '<h3>1교시 카드 골격 체크리스트 <span style="font-weight:400;color:#888;font-size:.85em">(신규 답안 추가 시 전부 통과)</span></h3>' +
      '<table><thead><tr><th>요소</th><th>규칙</th></tr></thead><tbody>' +
        '<tr><td><b>정의</b></td><td>"리드키워드"로 시작(한글 8 / 영·숫 12자, 주제명 반복 금지) · <b>명사형 종결</b></td></tr>' +
        '<tr><td><b>구성도</b></td><td>박스 [ ]+화살표(→↓↕⇄)만, 표 테두리선 금지 · 5줄 권장(최소 3) · 각 줄 표시폭 ≥12 · 본문 <b>한글환산 ≥24</b>(영문은 한글의 1.5~2배 허용)</td></tr>' +
        '<tr><td><b>구성도 첨언</b></td><td>※ + <b>한글 15~25자</b> · 구성도 동어반복 금지</td></tr>' +
        '<tr><td><b>구성요소표</b></td><td>3열[구분·구성요소·역할], 헤더1+본문6=7행 · 셀 표시폭 ≤30 · <b>구분 ≠ 구성요소</b>(상위 범주) · 가능하면 2~3개 구분으로 그룹화(〃 병합)</td></tr>' +
        '<tr><td><b>최종 첨언</b></td><td>※ + <b>한글 15~25자</b> · 동어반복 금지 → 트렌드·트레이드오프·함정·표준 등 <b>새 정보</b></td></tr>' +
        '<tr><td><b>공통</b></td><td>약어 첫 등장 풀이 · 6-Key 4개+ · 형용사·부사 → 수치·표준명 · 사실 수치 임의생성 금지</td></tr>' +
      '</tbody></table>' +

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

/* 헤더 과목·단원 필터 접기/펼치기 — 상태 기억(localStorage) */
(function () {
  var btn = document.getElementById('filterToggle');
  if (!btn) return;
  var KEY = 'gsFacetsCollapsed';
  function apply(col) {
    document.body.classList.toggle('facets-collapsed', col);
    btn.setAttribute('aria-expanded', String(!col));
    btn.classList.toggle('off', col);
  }
  var col = localStorage.getItem(KEY) === '1';
  apply(col);
  btn.addEventListener('click', function () {
    col = !col;
    try { localStorage.setItem(KEY, col ? '1' : '0'); } catch (e) {}
    apply(col);
  });
})();
