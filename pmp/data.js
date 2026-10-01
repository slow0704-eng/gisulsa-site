/* ============================================================
   PMP (Project Management Professional) — 학습·퀴즈 데이터
   소스: PMI PMP Examination Content Outline 2026 (2026-07-09 시행) · PMP Certification Handbook · PMBOK Guide 8판
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "PMP (Project Management Professional)",
 "brand": "PMP",
 "tag": "PMP · ECO 2026",
 "storeKey": "pmp",
 "topicUnit": "단원",
 "title": "PMP — 암기·퀴즈 학습",
 "h1": "PMP (ECO 2026)",
 "unit": "영역",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 70,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "Project Management Professional (PMI) — ECO 2026 기준",
 "host": "PMI (Project Management Institute) · Pearson VUE",
 "type": "180문항 (채점 170) · 단일선택·복수응답·매칭·핫스팟·드롭다운·사례/시나리오·그래픽형",
 "time": "240분 · 10분 휴식 2회",
 "pass": "합격 점수 비공개 (합격/불합격 + 도메인별 진단)",
 "book": "PMP ECO 2026 · PMBOK Guide 8판(2025) · Agile Practice Guide 2판(2026)",
 "slogan": "PMP = People 33% + Process 41% + Business Environment 26% · 예측형 40 / 애자일·하이브리드 60 · 상황형은 PMI 마인드셋으로",
 "paperSpec": [
  {
   "s": "s1",
   "n": 4
  },
  {
   "s": "s2",
   "n": 16
  },
  {
   "s": "s3",
   "n": 10
  },
  {
   "s": "s4",
   "n": 7
  },
  {
   "s": "s5",
   "n": 4
  },
  {
   "s": "s6",
   "n": 13
  },
  {
   "s": "s7",
   "n": 3
  },
  {
   "s": "s8",
   "n": 3
  }
 ],
 "footer": [
  "PMP / 주관 <b>PMI<\/b> · Pearson VUE 시험센터 또는 OnVue 온라인 · 180문항 240분 · <b>한국어 번역 제공<\/b>(문항마다 영어 원문 보기) · 응시료 회원 $405 / 비회원 $655",
  "출제 기준 · <b>PMP ECO 2026 (2026-07-09 시행)<\/b> — People 33% · Process 41% · Business Environment 26%, Task 26개. 2021 ECO 대비 <b>위험·변경·이슈·거버넌스·컴플라이언스가 Business Environment 로 이동<\/b>했습니다.",
  "PMI 는 합격 점수를 공개하지 않습니다. 이 사이트 모의고사의 70% 기준과 영역 배분은 <b>학습용 추정<\/b>입니다(50문항 = 도메인 비중 비례).",
  "데이터 소스: <code>02_타자격증_학습자료/PMP<\/code> · ⚠ 문항은 ECO 로 새로 만든 연습 문제이며 PMI 공식 문항이 아닙니다. [확인필요] 표시는 공식 원문 미확인 항목입니다."
 ],
 "info": [
  {
   "title": "ECO 2026 도메인",
   "type": "table",
   "head": [
    "도메인",
    "비중",
    "Task"
   ],
   "rows": [
    [
     "People",
     "33%",
     "8"
    ],
    [
     "Process",
     "41%",
     "10"
    ],
    [
     "Business Environment",
     "26%",
     "8"
    ]
   ]
  },
  {
   "title": "2021 → 2026 변화",
   "type": "table",
   "head": [
    "항목",
    "2021 ECO",
    "2026 ECO"
   ],
   "rows": [
    [
     "비중",
     "42 / 50 / 8",
     "33 / 41 / 26"
    ],
    [
     "Task 수",
     "35",
     "26"
    ],
    [
     "위험·변경·거버넌스",
     "Process",
     "Business Environment"
    ],
    [
     "신규 강조",
     "—",
     "AI · 지속가능성 · 가치 인도"
    ]
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "시험 개요·PMI 마인드셋",
  "short": "마인드셋",
  "out": 0,
  "color": "#6366f1",
  "desc": "ECO 2026 33/41/26·Task 26 / 180문항·240분·문항 8유형 / ★PMI 마인드셋 12원칙·상황형 풀이★ / PPP·PMO / 예측·적응·하이브리드 선택"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "People (리더십·팀·이해관계자)",
  "short": "People",
  "out": 0,
  "color": "#ec4899",
  "desc": "ECO 2026 People 33% · 8 Task — 공동 비전 / ★갈등 5기법★ / ★서번트 리더십★ / 이해관계자 그리드·참여매트릭스 / Tuckman·동기이론 / 지식이전 / 의사소통 채널 ★최빈출★"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "Process — 예측형 계획·통제",
  "short": "예측형",
  "out": 0,
  "color": "#0ea5e9",
  "desc": "헌장·관리계획서 / 범위 기준선·WBS / CPM·압축 / 예비비 / QA·QC·CoQ / 계약 유형 ★최빈출★"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "Process — 애자일·하이브리드·가치 인도",
  "short": "애자일",
  "out": 0,
  "color": "#10b981",
  "desc": "애자일 선언·스크럼(책임·이벤트·산출물)·칸반 WIP·백로그·스토리 포인트·속도·MVP·하이브리드 ★스프린트 중 변경=PO·백로그 / 가치기반 인도 최빈출★"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "Process — 상태 평가·산출물·종료",
  "short": "평가·종료",
  "out": 0,
  "color": "#f59e0b",
  "desc": "★번다운·번업·CFD 해석★ / KPI·OKR·EVM 지표 / 산출물 테일러링 / 인수 기준·DoD / 교훈 상시 기록 / ★공식 인수 → 이관 → 종료★ (ECO II-9·II-10)"
 },
 {
  "id": "s6",
  "no": 6,
  "name": "Business Environment (거버넌스·위험·변경)",
  "short": "비즈니스환경",
  "out": 0,
  "color": "#8b5cf6",
  "desc": "거버넌스·에스컬레이션 / 컴플라이언스·AI·지속가능성 / ★위험 대응·예비비★ / ★통합 변경 통제·CCB★ / 위험→이슈·장애 제거 / 교훈·편익 / 조직·외부 환경 ★최빈출★"
 },
 {
  "id": "s7",
  "no": 7,
  "name": "원칙·성과영역 (PMBOK 8)",
  "short": "PMBOK",
  "out": 0,
  "color": "#14b8a6",
  "desc": "★8판 6원칙·7성과영역★ / 7판 12원칙·8성과영역 대응 / 가치 인도·테일러링 / 윤리 강령 ★상황형 판단 기준★"
 },
 {
  "id": "s8",
  "no": 8,
  "name": "계산·공식",
  "short": "계산",
  "out": 0,
  "color": "#ef4444",
  "desc": "★EVM(CPI·SPI·EAC 4종·TCPI)★ · CPM 여유·주경로 · PERT · EMV·의사결정나무 · 채널 n(n−1)/2 · PTA · 벨로시티"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "ECO 구조",
  "front": "ECO 2026 Domain Weights",
  "key": "33 · 41 · 26",
  "back": "★People 33%★ · ★Process 41%★ · ★Business Environment 26%★ — 2026-07-09 시행",
  "tip": "2021은 42 · 50 · 8 — 숫자를 섞어 내는 보기에 주의"
 },
 {
  "s": "s1",
  "g": "ECO 구조",
  "front": "Number of Tasks (ECO 2026)",
  "key": "8 + 10 + 8 = 26",
  "back": "People ★8★ · Process ★10★ · Business Environment ★8★ = ★26개★ (2021은 35개)",
  "tip": "Task 수가 가장 많은 도메인 = Process"
 },
 {
  "s": "s1",
  "g": "ECO 구조",
  "front": "Enabler",
  "key": "예시적·비망라",
  "back": "Task 를 수행하는 ★예시 행동★. PMI 정의상 ★illustrative, not exhaustive★",
  "tip": "Enabler 목록에 없다고 출제 범위 밖이 아니다"
 },
 {
  "s": "s1",
  "g": "ECO 구조",
  "front": "Business Environment 도메인의 Task",
  "key": "거·컴·변·장·위·개·조·외",
  "back": "★거버넌스 · 컴플라이언스 · 변경 · 장애/이슈 · 위험 · 지속 개선 · 조직 변화 · 외부 환경★ (III-1~III-8)",
  "tip": "'위험·변경은 Process' 는 2021 기준 — 2026에서는 BE"
 },
 {
  "s": "s1",
  "g": "ECO 구조",
  "front": "Recognize when a risk becomes an issue",
  "key": "III-4 장애·이슈",
  "back": "이 Enabler 는 ★III-4 Remove impediments and manage issues★ 소속 (III-5 위험관리가 아님)",
  "tip": "위험이 '발생'하면 이슈 — 이슈 로그로 관리"
 },
 {
  "s": "s1",
  "g": "시험 형식",
  "front": "PMP Exam Format 2026",
  "key": "180 · 170 · 10 · 240",
  "back": "★180문항★(채점 170 + pretest 10) · ★240분★ · ★10분 휴식 2회★",
  "tip": "pretest 문항은 표시되지 않음 — 모든 문항에 최선을"
 },
 {
  "s": "s1",
  "g": "시험 형식",
  "front": "New Item Types (2026)",
  "key": "Case/Scenario · Graphic",
  "back": "★Case or Scenario★(연속 문항) · ★Graphic-Based★(차트·그래프 해석) 가 새로 추가",
  "tip": "빈칸 채우기는 2026 공식 목록에 없음"
 },
 {
  "s": "s1",
  "g": "시험 형식",
  "front": "CBT-only Item Types",
  "key": "Match · E-Match · Hotspot · Pull-down",
  "back": "★Matching · Enhanced Matching · Point and Click(Hotspot) · Pull-down List★ 는 CBT 전용",
  "tip": "Multiple-Response 는 전 방식 제공"
 },
 {
  "s": "s1",
  "g": "시험 형식",
  "front": "Break Rule",
  "key": "사례연구 후 · 복귀 불가",
  "back": "첫 휴식 = ★사례연구 섹션 종료 후★, 둘째 = 독립 문항 중간. ★휴식 시작 후 이전 섹션 복귀 불가★",
  "tip": "검토 표시(mark)는 그 섹션 안에서 정리"
 },
 {
  "s": "s1",
  "g": "시험 형식",
  "front": "Exam Result",
  "key": "Pass/Fail + 도메인 진단",
  "back": "합격/불합격 + ★도메인별 진단★. 직후 결과는 ★잠정★, 공식 결과는 ★10영업일 이내★. ★컷 점수 비공개★",
  "tip": "'61% 이상 합격' 같은 수치는 공식 근거 없음"
 },
 {
  "s": "s1",
  "g": "응시 자격",
  "front": "Eligibility (Experience)",
  "key": "60 · 48 · 36 · 24",
  "back": "고졸 ★60개월★ / 전문학사 ★48★ / 학사 ★36★ / GAC 학위 ★24★ — ★최근 10년·비중복★ 프로젝트 리딩 경력",
  "tip": "같은 달 두 프로젝트 = 1개월"
 },
 {
  "s": "s1",
  "g": "응시 자격",
  "front": "35 Contact Hours",
  "key": "35h · CAPM 면제",
  "back": "★35시간 교육★ 필수, ★유효한 CAPM 보유자는 면제★. 책·모의고사는 불인정",
  "tip": "2026-12-01부터 라이브 강의는 ATP·China REP·인증 학위과정만"
 },
 {
  "s": "s1",
  "g": "응시 자격",
  "front": "Fee · Renewal",
  "key": "$405 / $655 · 3년 60PDU",
  "back": "회원 ★$405★ / 비회원 ★$655★. 1년 내 ★최대 3회★ 응시. 유지 = ★3년마다 60 PDU★",
  "tip": "회원가는 결제 전에 가입해야 적용"
 },
 {
  "s": "s1",
  "g": "응시 자격",
  "front": "Korean Exam (Translated)",
  "key": "번역 + 영어 Exhibit · ATA",
  "back": "완전 번역 시험 — 문항별 ★Exhibit 버튼으로 영어 원문★. 한국어 OPT 는 ★ATA★ 감독(주말 월 수회)",
  "tip": "예약 후 언어 변경 불가 — 취소 후 재예약"
 },
 {
  "s": "s1",
  "g": "변경점",
  "front": "Project Success (redefined)",
  "key": "가치·성과",
  "back": "일정·예산·범위 준수 중심 → ★이해관계자 가치·원하는 성과(outcome) 달성★",
  "tip": "보기에 '기준선 준수 = 성공' 이 나오면 2026 관점에서 의심"
 },
 {
  "s": "s1",
  "g": "변경점",
  "front": "JTA Input Trends",
  "key": "AI · Sustainability",
  "back": "ECO 2026 직무분석의 입력 트렌드 = ★AI★ 와 ★지속가능성(sustainability)★",
  "tip": "지속가능성은 II-1·II-7·III-2·III-5 Enabler 에 반복 등장"
 },
 {
  "s": "s1",
  "g": "마인드셋",
  "front": "Servant Leadership",
  "key": "섬기는 리더 · 장애 제거",
  "back": "팀을 ★지원·코칭·보호★하고 ★장애(impediment)를 제거★해 팀이 성과를 내게 하는 리더십",
  "tip": "팀 결정을 PM 이 뒤집는 보기는 서번트 리더십 위반"
 },
 {
  "s": "s1",
  "g": "마인드셋",
  "front": "Escalation",
  "key": "권한·임계치 초과 시 · 대안 지참",
  "back": "PM 권한·거버넌스 ★임계치를 넘을 때★ 스폰서·거버넌스에 올린다 — ★분석과 대안★을 들고",
  "tip": "'즉시 스폰서에게' 는 대개 너무 이른 보기"
 },
 {
  "s": "s1",
  "g": "마인드셋",
  "front": "Change in Predictive vs Agile",
  "key": "CCB vs 백로그·PO",
  "back": "예측형: ★CR → 영향분석 → CCB → 기준선·문서 갱신★ / 애자일: ★백로그에 추가 → PO 우선순위★",
  "tip": "PM 단독 승인·거절, 진행 중 스프린트에 끼워 넣기 = 오답"
 },
 {
  "s": "s1",
  "g": "마인드셋",
  "front": "Situational Question — first step",
  "key": "Assess · Evaluate · Analyze",
  "back": "대부분 정답은 ★영향·근본원인 분석★ 또는 ★계획·등록부 참조★로 시작",
  "tip": "예외: 안전·윤리·법규 위반은 ★중단·보고★가 먼저"
 },
 {
  "s": "s1",
  "g": "PPP·PMO",
  "front": "Project vs Program vs Portfolio",
  "key": "일시적 · 편익 · 전략",
  "back": "프로젝트 = ★일시적·고유 산출물★ / 프로그램 = ★관련 프로젝트 조정으로 편익★ / 포트폴리오 = ★전략 목표 달성 집합(연관 불필요)★",
  "tip": "'포트폴리오 구성요소는 서로 관련되어야 한다' = 틀림"
 },
 {
  "s": "s1",
  "g": "PPP·PMO",
  "front": "PMO Types",
  "key": "지원 · 통제 · 지시",
  "back": "★Supportive★(낮음, 템플릿·교훈) → ★Controlling★(중간, 준수 요구) → ★Directive★(높음, 직접 관리)",
  "tip": "통제 수준 순서를 바꿔 내는 문제가 고정 패턴"
 },
 {
  "s": "s1",
  "g": "PPP·PMO",
  "front": "OPA vs EEF",
  "key": "내부 자산 vs 통제 불가 환경",
  "back": "★OPA★ = 템플릿·정책·교훈 등 조직 내부 자산(갱신 가능) / ★EEF★ = 법규·시장·문화 등 PM 이 통제 못하는 요인",
  "tip": "교훈 저장소 = OPA, 정부 규제 = EEF"
 },
 {
  "s": "s1",
  "g": "접근법",
  "front": "Predictive · Iterative · Incremental · Agile",
  "key": "원가 · 정확성 · 속도 · 고객가치",
  "back": "목표 — 예측형 ★원가 관리★ / 반복형 ★해결책의 정확성★ / 증분형 ★속도★ / 애자일 ★잦은 인도·피드백을 통한 고객 가치★",
  "tip": "증분형 = 완성 조각 추가, 반복형 = 피드백으로 다듬기"
 },
 {
  "s": "s1",
  "g": "접근법",
  "front": "Hybrid · Delivery Continuum",
  "key": "예측 + 적응 · 연속체",
  "back": "예측형과 적응형 요소의 조합. APG 2판은 이분법이 아닌 ★delivery continuum★ 으로 본다",
  "tip": "규제 산업에서도 하이브리드·애자일 적용 가능"
 },
 {
  "s": "s2",
  "g": "ECO People",
  "front": "People 도메인 8 Task (ECO 2026)",
  "key": "비갈리 참정기 지소",
  "back": "I-1 ★Develop a common vision★ · I-2 Manage conflicts · I-3 Lead the project team · I-4 Engage stakeholders · I-5 Align stakeholder expectations · I-6 Manage stakeholder expectations · I-7 ★Help ensure knowledge transfer★ · I-8 Plan and manage communication",
  "tip": "People 비중 42% → ★33%★. 비전·지식이전이 새 키워드, 장애 제거는 BE III-4 로 이동"
 },
 {
  "s": "s2",
  "g": "ECO People",
  "front": "Develop a common vision (공동 비전)",
  "key": "공유·전파·최신화·근본원인",
  "back": "Enabler: 핵심 이해관계자와 ★비전 공유★ · 비전 ★전파★ · 비전 ★최신화★ · 비전 오해의 ★근본원인★ 분석",
  "tip": "비전은 한 번 정하고 끝이 아니다 — 목표가 바뀌면 갱신 후 재공유"
 },
 {
  "s": "s2",
  "g": "리더십",
  "front": "Servant leadership (서번트 리더십)",
  "key": "섬김 먼저·장애 제거",
  "back": "팀의 필요를 먼저 섬기는 리더십 — ★장애 제거★, 외부 방해로부터 보호, 코칭으로 성장 지원, ★자기조직화 존중★",
  "tip": "애자일 상황형 문제의 기본 정답 방향. '지시·감독 강화'는 반대말"
 },
 {
  "s": "s2",
  "g": "리더십",
  "front": "Situational Leadership (Hersey–Blanchard)",
  "key": "지시→코칭→지원→위임",
  "back": "S1 ★지시형(Directing)★ 역량↓ → S2 ★코칭형(Coaching)★ → S3 ★지원형(Supporting)★ → S4 ★위임형(Delegating)★ 역량·의지↑",
  "tip": "구성원 성숙도에 맞춰 스타일을 바꾼다 — 신입 팀에 '전면 위임'은 오답"
 },
 {
  "s": "s2",
  "g": "리더십",
  "front": "Transformational vs Transactional",
  "key": "영감 vs 교환",
  "back": "★변혁적★ = 비전·영감·지적 자극·개별 배려로 기대 이상 성과 / ★거래적★ = 목표 달성과 보상 교환·예외 관리",
  "tip": "'거래적 리더가 영감을 준다'는 바꿔치기 함정"
 },
 {
  "s": "s2",
  "g": "리더십",
  "front": "RACI chart",
  "key": "A 는 단 1명",
  "back": "Responsible(실행) · ★Accountable(최종 책임, 활동당 정확히 1명)★ · Consulted(사전 자문, 양방향) · Informed(사후 통보, 단방향)",
  "tip": "R 은 여러 명 가능, A 는 1명. 역할 중복·공백 문제의 해법"
 },
 {
  "s": "s2",
  "g": "팀 개발",
  "front": "Tuckman ladder (팀 개발 단계)",
  "key": "형격규수해",
  "back": "★Forming → Storming → Norming → Performing → Adjourning★ (형성 → 격동 → 규범 → 수행 → 해산)",
  "tip": "팀원이 바뀌면 이전 단계로 되돌아갈 수 있다. Adjourning 은 1977년 추가"
 },
 {
  "s": "s2",
  "g": "팀 개발",
  "front": "Team charter (팀 헌장)",
  "key": "가치·합의·그라운드룰",
  "back": "팀이 ★함께★ 작성하는 협업 약속 — 팀 가치, 업무 합의, ★그라운드룰★, 의사결정·갈등 처리 방식",
  "tip": "PM 이 혼자 써서 배포하면 주인의식이 생기지 않는다"
 },
 {
  "s": "s2",
  "g": "팀 개발",
  "front": "Psychological safety (심리적 안정감)",
  "key": "말해도 안전",
  "back": "실수·반대 의견을 말해도 처벌·창피를 당하지 않는다는 팀 공유 믿음(Edmondson) — 회고·학습의 전제",
  "tip": "회고 결과로 책임자를 가리면 안정감이 무너진다"
 },
 {
  "s": "s2",
  "g": "동기",
  "front": "Herzberg Two-Factor Theory",
  "key": "위생=불만 제거 / 동기=만족",
  "back": "★위생요인(Hygiene)★: 급여·근무조건·정책·감독·관계 → 부족하면 불만 / ★동기요인(Motivators)★: 성취·인정·책임·성장·업무 자체 → 만족·동기",
  "tip": "급여 인상은 불만만 없앤다 — 지루함 호소엔 도전적 업무"
 },
 {
  "s": "s2",
  "g": "동기",
  "front": "McGregor Theory X / Y",
  "key": "X 감독 / Y 자발",
  "back": "★X★: 사람은 일을 싫어해 감독·통제 필요 / ★Y★: 사람은 자발적이고 책임을 추구 → 위임·참여",
  "tip": "Theory Z 는 Ouchi — 학자 바꿔치기 주의"
 },
 {
  "s": "s2",
  "g": "동기",
  "front": "Vroom Expectancy Theory",
  "key": "기대·수단성·유의성",
  "back": "동기 = ★기대(Expectancy: 노력→성과)★ × ★수단성(Instrumentality: 성과→보상)★ × ★유의성(Valence: 보상의 가치)★",
  "tip": "곱셈 구조 — 하나라도 0이면 동기 0"
 },
 {
  "s": "s2",
  "g": "동기",
  "front": "Maslow / McClelland",
  "key": "5단계 / 성취·친교·권력",
  "back": "Maslow: 생리→안전→사회→존중→★자아실현★ / McClelland: ★성취·친교·권력★ 욕구",
  "tip": "성취욕 높은 사람 = 적정 난이도 목표 + 즉각 피드백"
 },
 {
  "s": "s2",
  "g": "갈등",
  "front": "Conflict resolution 5 techniques",
  "key": "회피·완화·타협·강요·협업",
  "back": "Withdraw/Avoid · Smooth/Accommodate · Compromise/Reconcile · Force/Direct · ★Collaborate/Problem solve (Win-Win)★",
  "tip": "기본은 협업, 단 긴급·안전·법규는 강요가 적합"
 },
 {
  "s": "s2",
  "g": "갈등",
  "front": "Compromise (타협)",
  "key": "모두 일부 양보",
  "back": "양측이 ★조금씩 양보★해 일시적·부분적으로 만족 — Lose-Lose 성격의 절충",
  "tip": "'타협 = Win-Win'은 대표 함정. Win-Win 은 협업"
 },
 {
  "s": "s2",
  "g": "협상",
  "front": "BATNA",
  "key": "결렬 시 최선 대안",
  "back": "Best Alternative To a Negotiated Agreement — 협상이 결렬될 때 택할 최선의 대안. BATNA 가 강할수록 협상력↑",
  "tip": "ZOPA(합의 가능 구간)와 구분"
 },
 {
  "s": "s2",
  "g": "이해관계자",
  "front": "Power/Interest grid",
  "key": "밀접·만족·정보·모니터",
  "back": "권력↑관심↑ ★Manage closely★ / 권력↑관심↓ ★Keep satisfied★ / 권력↓관심↑ ★Keep informed★ / 권력↓관심↓ ★Monitor★",
  "tip": "Keep satisfied 와 Keep informed 바꿔치기 단골"
 },
 {
  "s": "s2",
  "g": "이해관계자",
  "front": "Salience model (현저성 모형)",
  "key": "권력·긴급성·정당성",
  "back": "★Power · Urgency · Legitimacy★ — 세 속성을 모두 가진 이해관계자가 가장 우선(definitive)",
  "tip": "'관심(Interest)'은 Salience 속성이 아니다"
 },
 {
  "s": "s2",
  "g": "이해관계자",
  "front": "Stakeholder Engagement Assessment Matrix",
  "key": "U-R-N-S-L · C/D",
  "back": "★Unaware → Resistant → Neutral → Supportive → Leading★, C=현재, D=원하는 수준 — 격차 해소 전략 수립",
  "tip": "순서 바꿔치기(Neutral 과 Resistant) 주의"
 },
 {
  "s": "s2",
  "g": "이해관계자",
  "front": "Stakeholder register vs Engagement plan",
  "key": "누구 vs 어떻게",
  "back": "★등록부★ = 식별 정보·평가·분류(누구인가) / ★참여계획★ = 참여를 끌어낼 전략·행동(어떻게 참여시킬까)",
  "tip": "등록부는 프로젝트 내내 갱신 — 착수 1회 작성 아님"
 },
 {
  "s": "s2",
  "g": "지식 이전",
  "front": "Tacit vs Explicit knowledge",
  "key": "감각 vs 문서",
  "back": "★암묵지★ = 경험·노하우(스토리텔링·잡 섀도잉·페어링으로 이전) / ★형식지★ = 문서·데이터(저장소·교훈 등록부로 이전)",
  "tip": "암묵지는 문서 배포만으로 이전되지 않는다"
 },
 {
  "s": "s2",
  "g": "지식 이전",
  "front": "SECI model (Nonaka)",
  "key": "사표연내",
  "back": "★Socialization(암→암)★ · ★Externalization(암→형)★ · Combination(형→형) · Internalization(형→암)",
  "tip": "노하우를 문서로 만드는 것 = 표출화"
 },
 {
  "s": "s2",
  "g": "의사소통",
  "front": "Communication channels",
  "key": "n(n−1)/2",
  "back": "채널 수 = ★n(n − 1) / 2★ (PM 포함). 10명 45 → 15명 105, 증가분 ★60★",
  "tip": "'추가 채널 수'를 묻는지 '총 채널 수'를 묻는지 확인"
 },
 {
  "s": "s2",
  "g": "의사소통",
  "front": "Interactive · Push · Pull",
  "key": "실시간 · 발송 · 접근",
  "back": "★Interactive★ 실시간 다방향(오해 해소 최적) / ★Push★ 특정인에 발송(이해 보장 X) / ★Pull★ 대량 정보·다수가 필요 시 접근",
  "tip": "인트라넷·위키·정보 방열기 = Pull"
 },
 {
  "s": "s2",
  "g": "의사결정",
  "front": "Fist of Five · Roman voting · Delphi",
  "key": "손가락 · 엄지 · 익명",
  "back": "Fist of Five: 0~5 손가락(★2개 이하면 재논의★) / Roman voting: 엄지 위·옆·아래 / ★Delphi★: 익명 전문가 반복 합의",
  "tip": "Plurality(최다득표) ≠ Majority(과반)"
 },
 {
  "s": "s2",
  "g": "영향력",
  "front": "French & Raven power bases",
  "key": "합보강전준",
  "back": "★Legitimate · Reward · Coercive · Expert · Referent★ — PM 이 가장 권장받는 권력은 ★전문가·준거★(관계·신뢰)",
  "tip": "강압적 권력은 최후 수단"
 },
 {
  "s": "s2",
  "g": "영향력",
  "front": "Emotional Intelligence (EI)",
  "key": "자기인식·자기관리·사회인식·관계관리",
  "back": "★Self-awareness · Self-management · Social awareness · Relationship management(Social skills)★",
  "tip": "기술 전문성·IQ 는 EI 요소가 아니다"
 },
 {
  "s": "s3",
  "g": "통합",
  "front": "Project Charter (프로젝트 헌장)",
  "key": "스폰서 발행 · PM 임명 · 공식 승인",
  "back": "★스폰서/착수자★가 발행해 프로젝트를 ★공식 승인★하고 ★PM에게 조직 자원 사용 권한★을 부여하는 문서. 목적·목표·상위 요구사항·요약 마일스톤·사전 승인 재무자원 포함",
  "tip": "\"PM이 헌장에 서명·발행한다\" ✗ — PM은 작성을 도울 뿐"
 },
 {
  "s": "s3",
  "g": "통합",
  "front": "Project Management Plan (프로젝트 관리계획서)",
  "key": "보조계획 + 기준선 3종",
  "back": "모든 보조 관리계획서 + ★범위·일정·원가 기준선★ + 변경·형상관리계획 + 개발 접근법을 통합한 '어떻게' 문서",
  "tip": "헌장 = 왜·권한 / 관리계획서 = 어떻게"
 },
 {
  "s": "s3",
  "g": "범위",
  "front": "WBS (Work Breakdown Structure)",
  "key": "인도물 중심 계층 분해 · 100% 규칙",
  "back": "프로젝트 전체 작업을 ★인도물 중심★으로 분해한 계층 구조. 최하위 = ★작업 패키지★. 하위 합 = 상위 100%",
  "tip": "WBS에 '활동'이 아니라 인도물·작업이 들어간다"
 },
 {
  "s": "s3",
  "g": "범위",
  "front": "Scope Baseline (범위 기준선)",
  "key": "범위 기술서 + WBS + WBS 사전",
  "back": "승인된 ★프로젝트 범위 기술서 + WBS + WBS 사전★ — 변경통제로만 변경",
  "tip": "요구사항 문서·RTM은 범위 기준선 구성요소 아님"
 },
 {
  "s": "s3",
  "g": "범위",
  "front": "Requirements Traceability Matrix (RTM, 요구사항 추적 매트릭스)",
  "key": "요구 ↔ 목표 ↔ 산출물 ↔ 테스트",
  "back": "각 요구사항의 출처·비즈니스 목표·WBS 인도물·설계·테스트를 연결해 ★누락과 금도금을 방지★하고 변경 영향을 추적",
  "tip": "'이 기능은 왜 있지?' → RTM으로 추적"
 },
 {
  "s": "s3",
  "g": "범위",
  "front": "Validate Scope vs Control Quality",
  "key": "인수(외부) ↔ 정확성(내부)",
  "back": "★Control Quality★ = 내부 검사로 ★검증된 인도물★ 생성 → ★Validate Scope★ = 고객·스폰서가 ★공식 인수★",
  "tip": "순서: QC 먼저 → Validate Scope"
 },
 {
  "s": "s3",
  "g": "범위",
  "front": "Scope Creep vs Gold Plating",
  "key": "통제 안 된 확장 ↔ 자발적 추가",
  "back": "★범위 추가★ = 변경통제 없이 요청 수용 / ★금도금★ = 팀이 요구에 없는 기능을 자발적으로 추가 — 둘 다 지양",
  "tip": "고객이 좋아해도 금도금은 권장 안 됨"
 },
 {
  "s": "s3",
  "g": "일정",
  "front": "Dependency types (의존관계 유형)",
  "key": "필수·임의·외부·내부",
  "back": "★Mandatory★(하드 로직) / ★Discretionary★(선호·소프트 로직 — fast-tracking 대상) / ★External★(프로젝트 밖) / ★Internal★(팀 통제)",
  "tip": "공정 중첩 시 먼저 보는 것 = 임의 의존관계"
 },
 {
  "s": "s3",
  "g": "일정",
  "front": "PDM relationships (FS·SS·FF·SF)",
  "key": "FS 최다 · SF 최소",
  "back": "FS 선행 완료→후행 시작(가장 흔함) / SS 동시 시작 / FF 동시 완료 / SF 선행 시작→후행 완료(가장 드묾)",
  "tip": "SF 예: 신 시스템 가동 시작해야 구 시스템 종료"
 },
 {
  "s": "s3",
  "g": "일정",
  "front": "Total Float vs Free Float",
  "key": "종료일 기준 ↔ 후행 ES 기준",
  "back": "★Total Float★ = LS−ES, 프로젝트 종료일을 늦추지 않는 여유 / ★Free Float★ = 후행 활동의 ES를 늦추지 않는 여유",
  "tip": "주경로 = 가장 긴 경로, 보통 Total Float 0"
 },
 {
  "s": "s3",
  "g": "일정",
  "front": "Crashing vs Fast-tracking",
  "key": "원가↑ ↔ 위험↑",
  "back": "★Crashing★ = 주경로 활동에 자원 추가(비용 기울기 최소부터) / ★Fast-tracking★ = 순차 활동 병행(재작업 위험)",
  "tip": "비주경로 활동을 압축해도 종료일은 그대로"
 },
 {
  "s": "s3",
  "g": "일정",
  "front": "Resource Leveling vs Smoothing",
  "key": "종료일 변경 가능 ↔ float 안",
  "back": "★Leveling★ = 자원 제약 해소를 위해 일정 이동, 주경로·종료일 변경 가능 / ★Smoothing★ = 여유 안에서만 조정, 종료일 불변",
  "tip": "\"평활화는 주경로를 바꾼다\" ✗"
 },
 {
  "s": "s3",
  "g": "원가",
  "front": "Bottom-up vs Analogous estimating",
  "key": "가장 정확 ↔ 빠르고 저렴",
  "back": "★상향식★ = 작업 패키지 단위 추정 후 합산, 가장 정확·시간 소요 / ★유사★ = 과거 유사 실적 기반 top-down, 초기·정보 부족 시",
  "tip": "모수 = 단가×수량 같은 통계 관계"
 },
 {
  "s": "s3",
  "g": "원가",
  "front": "Contingency vs Management Reserve",
  "key": "식별 위험·기준선 안 ↔ 미식별·기준선 밖",
  "back": "★우발 예비비★ = known-unknowns, 원가 기준선 안, PM 사용 / ★관리 예비비★ = unknown-unknowns, 기준선 밖·예산 안, 경영진 승인",
  "tip": "BAC에는 관리 예비비 미포함"
 },
 {
  "s": "s3",
  "g": "품질",
  "front": "Cost of Quality (CoQ, 품질비용)",
  "key": "예방·평가 ↔ 내부·외부 실패",
  "back": "★적합 비용★(예방·평가) + ★부적합 비용★(내부 실패: 재작업·폐기 / 외부 실패: 보증·리콜·평판)",
  "tip": "가장 비싼 것 = 외부 실패. 예방이 가장 경제적"
 },
 {
  "s": "s3",
  "g": "품질",
  "front": "Manage Quality vs Control Quality",
  "key": "프로세스 예방 ↔ 산출물 검사",
  "back": "★Manage Quality(QA)★ = 프로세스 개선·품질 감사로 ★예방★ / ★Control Quality(QC)★ = 산출물 측정·검사로 ★검출★",
  "tip": "품질 감사(audit) = Manage Quality"
 },
 {
  "s": "s3",
  "g": "품질",
  "front": "Control chart — Rule of Seven",
  "key": "한쪽 연속 7점 = 이상",
  "back": "평균선 한쪽에 ★연속 7점★이 찍히면 관리 한계 안이라도 ★특수 원인★ 의심. 관리 한계(±3σ, 프로세스) ≠ 규격 한계(고객)",
  "tip": "관리 한계 밖 1점도 이상"
 },
 {
  "s": "s3",
  "g": "자원",
  "front": "RACI chart",
  "key": "R·A·C·I — A는 한 명",
  "back": "Responsible(수행) · Accountable(최종 책임·승인) · Consulted(자문) · Informed(통보). ★각 작업에 A는 정확히 한 명★",
  "tip": "RACI는 RAM(책임배정매트릭스)의 한 형태"
 },
 {
  "s": "s3",
  "g": "자원",
  "front": "RBS / OBS / WBS",
  "key": "자원 분류 / 조직 분류 / 작업 분류",
  "back": "★RBS★ = 자원 범주·유형별 계층 / ★OBS★ = 조직 단위별 담당 작업 / ★WBS★ = 인도물 중심 작업 분해",
  "tip": "RBS는 위험분류체계(Risk Breakdown Structure)의 약어로도 쓰임 — 문맥 확인"
 },
 {
  "s": "s3",
  "g": "조달",
  "front": "Fixed Price vs Cost-Reimbursable vs T&M",
  "key": "판매자 위험 ↔ 구매자 위험 ↔ 중간",
  "back": "★FP★ = 범위 명확, 판매자 위험 / ★CR★ = 범위 불확실, 구매자 위험 / ★T&M★ = 인력 보강·소규모, 상한(NTE) 권장",
  "tip": "구매자 위험: CPFF > CPIF > T&M > FPIF > FFP"
 },
 {
  "s": "s3",
  "g": "조달",
  "front": "RFI · RFQ · RFP",
  "key": "정보 · 가격 · 해결책",
  "back": "★RFI★ = 판매자 정보 수집 / ★RFQ★ = 명확한 사양에 가격 견적 / ★RFP★ = 복잡한 요구에 해결책 제안",
  "tip": "가격만 비교하면 RFQ, 접근 방법까지 보면 RFP"
 },
 {
  "s": "s3",
  "g": "조달",
  "front": "Bidder Conference (입찰자 회의)",
  "key": "모든 판매자 동일 정보",
  "back": "계약 전 ★모든 잠재 판매자★에게 요구사항을 설명하고 질문에 답해 ★공정·동일한 정보★를 보장하는 회의",
  "tip": "특정 판매자와 개별 접촉 → 공정성 위반"
 },
 {
  "s": "s3",
  "g": "조달",
  "front": "Claim administration (클레임 관리)",
  "key": "협상 → ADR → 소송",
  "back": "이견이 있는 변경 = 클레임. ★협상★으로 먼저 해결 → 안 되면 ★ADR(조정·중재)★ → 소송은 최후",
  "tip": "계약 조건에 정한 절차를 따른다"
 },
 {
  "s": "s3",
  "g": "의사소통·종료",
  "front": "Communication channels (의사소통 채널)",
  "key": "n(n−1)/2",
  "back": "n = PM 포함 인원. 5명 → 10, 10명 → 45. 인원 증가 시 ★추가된 채널 수 = 새 값 − 기존 값★",
  "tip": "PM 포함 여부를 꼭 확인"
 },
 {
  "s": "s3",
  "g": "의사소통·종료",
  "front": "Close Project or Phase (프로젝트·단계 종료)",
  "key": "인수 → 이관 → 교훈 → 보관 → 해제",
  "back": "공식 인수 확인, 운영 이관 준비 검증, 조달 종료, 최종 교훈·OPA 갱신, 기록 보관, 자원 해제. ★취소된 프로젝트도 종료 절차 수행★",
  "tip": "교훈은 전 기간 기록, 종료 시 저장소 반영"
 },
 {
  "s": "s4",
  "g": "애자일 선언",
  "front": "Agile Manifesto — 4 Values",
  "key": "개상·작소·고협·변대",
  "back": "★개인과 상호작용★ > 프로세스·도구 / ★작동하는 소프트웨어★ > 포괄적 문서 / ★고객 협력★ > 계약 협상 / ★변화 대응★ > 계획 준수",
  "tip": "오른쪽도 가치가 있다 — '없애라'가 아니라 '왼쪽을 더'"
 },
 {
  "s": "s4",
  "g": "애자일 선언",
  "front": "Primary measure of progress",
  "key": "작동하는 소프트웨어",
  "back": "12원칙: ★작동하는 소프트웨어가 진척의 주요 척도★다",
  "tip": "투입 공수·문서량·일정 준수율은 오답 보기"
 },
 {
  "s": "s4",
  "g": "생애주기",
  "front": "Iterative vs Incremental",
  "key": "반복=정확성 / 증분=속도",
  "back": "★반복형★: 시제품 피드백으로 해법을 다듬음(정확성) / ★증분형★: 완성된 조각을 자주 인도(속도) / 애자일 = 둘의 결합",
  "tip": "'부분 완성품에 피드백' = 반복형, '쓸 수 있는 조각 인도' = 증분형"
 },
 {
  "s": "s4",
  "g": "스크럼",
  "front": "Scrum accountabilities (2020)",
  "key": "PO·SM·Developers",
  "back": "★Product Owner★(가치·백로그 순서) · ★Scrum Master★(프로세스·장애 제거) · ★Developers★(증분 생성)",
  "tip": "Project Manager·Team Lead는 스크럼 책임이 아니다"
 },
 {
  "s": "s4",
  "g": "스크럼",
  "front": "Scrum artifacts & commitments",
  "key": "PB-PG / SB-SG / Inc-DoD",
  "back": "Product Backlog ↔ ★Product Goal★ / Sprint Backlog ↔ ★Sprint Goal★ / Increment ↔ ★Definition of Done★",
  "tip": "확약 짝 바꿔치기가 단골 함정"
 },
 {
  "s": "s4",
  "g": "스크럼",
  "front": "Scrum timeboxes (1-month sprint)",
  "key": "8·15분·4·3",
  "back": "Sprint ≤ 1개월 / Planning ≤ ★8h★ / Daily ★15분★ / Review ≤ ★4h★ / Retro ≤ ★3h★",
  "tip": "짧은 스프린트는 보통 더 짧게"
 },
 {
  "s": "s4",
  "g": "스크럼",
  "front": "Who can cancel a Sprint?",
  "key": "Product Owner",
  "back": "스프린트 목표가 무의미해지면 ★PO만★ 스프린트를 취소할 수 있다",
  "tip": "SM·스폰서·Developers 아님"
 },
 {
  "s": "s4",
  "g": "칸반·린",
  "front": "Little's Law",
  "key": "CT = WIP ÷ TH",
  "back": "★평균 사이클 타임 = 평균 WIP ÷ 평균 처리량★",
  "tip": "WIP를 줄이면 처리량이 같아도 사이클 타임이 짧아진다"
 },
 {
  "s": "s4",
  "g": "칸반·린",
  "front": "WIP limit",
  "key": "병목 노출·흐름 개선",
  "back": "동시 진행 작업 상한 → 작업 전환↓ · ★병목 노출★ · 리드 타임↓. 당김(pull) 시스템의 핵심",
  "tip": "병목엔 WIP 상한 상향이 아니라 스워밍(완료 지원)"
 },
 {
  "s": "s4",
  "g": "칸반·린",
  "front": "Value Stream Mapping (VSM)",
  "key": "부가가치 ÷ 리드 타임",
  "back": "프로세스 흐름에서 대기·인계 낭비를 찾는 린 도구. ★프로세스 효율 = 부가가치 시간 ÷ 총 리드 타임★",
  "tip": "대기 시간이 가장 큰 낭비인 경우가 많다"
 },
 {
  "s": "s4",
  "g": "XP",
  "front": "Spike",
  "key": "타임박스 조사",
  "back": "기술·설계 ★불확실성을 줄이기 위한 짧은 타임박스 실험★ — 결과는 지식(추정 가능해짐)",
  "tip": "Sprint·Swarm과 혼동 주의"
 },
 {
  "s": "s4",
  "g": "XP",
  "front": "TDD (Test-Driven Development)",
  "key": "Red-Green-Refactor",
  "back": "★실패하는 테스트 먼저★ → 통과하는 최소 코드 → 리팩터링",
  "tip": "테스트를 '나중에' 쓰면 TDD가 아니다"
 },
 {
  "s": "s4",
  "g": "백로그·스토리",
  "front": "INVEST",
  "key": "I-N-V-E-S-T",
  "back": "★Independent · Negotiable · Valuable · Estimable · Small · Testable★",
  "tip": "E는 Essential이 아니라 Estimable"
 },
 {
  "s": "s4",
  "g": "백로그·스토리",
  "front": "3C of user stories",
  "key": "Card·Conversation·Confirmation",
  "back": "카드(간단한 기록) · ★대화★(세부 논의) · 확인(수용 기준)",
  "tip": "스토리 = 대화의 약속(Ron Jeffries)"
 },
 {
  "s": "s4",
  "g": "백로그·스토리",
  "front": "DoR vs DoD",
  "key": "준비 기준 / 완료 기준",
  "back": "DoR = 스프린트에 넣을 ★준비★ 기준(선택 실천) / DoD = 증분 ★완료★ 품질 기준(Increment의 확약)",
  "tip": "DoR은 Scrum Guide에 없다"
 },
 {
  "s": "s4",
  "g": "백로그·스토리",
  "front": "WSJF",
  "key": "CoD ÷ Job size",
  "back": "★Weighted Shortest Job First = 지연비용 ÷ 작업 크기(기간)★, 값이 큰 것부터",
  "tip": "크기가 작고 지연비용이 큰 항목이 1순위"
 },
 {
  "s": "s4",
  "g": "백로그·스토리",
  "front": "MoSCoW",
  "key": "Must·Should·Could·Won't",
  "back": "필수 · 중요 · 있으면 좋음 · ★이번엔 안 함(Won't have this time)★",
  "tip": "W는 '영원히 안 함'이 아니다"
 },
 {
  "s": "s4",
  "g": "추정·속도",
  "front": "Story point",
  "key": "상대 크기",
  "back": "노력·복잡성·불확실성을 합친 ★상대 크기★ 단위 — 시간·원가 아님",
  "tip": "팀마다 기준이 달라 팀 간 비교 불가"
 },
 {
  "s": "s4",
  "g": "추정·속도",
  "front": "Planning Poker",
  "key": "동시 공개·극단값 설명",
  "back": "카드 ★동시 공개★ → 최고·최저 추정자가 근거 설명 → 재추정으로 합의",
  "tip": "평균값 채택·PM 결정은 오답"
 },
 {
  "s": "s4",
  "g": "추정·속도",
  "front": "Velocity",
  "key": "완료 포인트 실적",
  "back": "반복당 ★DoD를 충족한 스토리의 포인트 합★ — 예측용",
  "tip": "부분 완료 0점 · 성과 목표화 금지"
 },
 {
  "s": "s4",
  "g": "가치 인도",
  "front": "MVP vs MMF",
  "key": "학습 / 시장 가치",
  "back": "★MVP★ = 가설 검증·학습용 최소 제품 / ★MMF★ = 고객이 가치를 인지하는 최소 출시 기능",
  "tip": "MVP는 '작은 완성품'이 아니라 '실험'"
 },
 {
  "s": "s4",
  "g": "하이브리드",
  "front": "APG 2nd ed. terms",
  "key": "refinement · daily coordination",
  "back": "backlog grooming → ★backlog refinement★ / daily standup → ★daily coordination meeting★ / 하이브리드 = ★delivery continuum★",
  "tip": "번역 시험에서도 영어 Exhibit로 원어 확인 가능"
 },
 {
  "s": "s4",
  "g": "지표·리더십",
  "front": "Burndown vs Burnup",
  "key": "잔여 / 누적+범위선",
  "back": "번다운 = ★잔여 작업★ / 번업 = ★누적 완료 + 총 범위 선★(범위 변경이 보임)",
  "tip": "범위 증가를 보여 달라 → 번업"
 },
 {
  "s": "s4",
  "g": "지표·리더십",
  "front": "Cumulative Flow Diagram",
  "key": "밴드 폭 = 병목",
  "back": "단계별 누적 항목. ★밴드 폭 확대 = 병목★, 세로 거리 = WIP, 가로 거리 = 리드 타임",
  "tip": "평행한 밴드 = 안정적 흐름"
 },
 {
  "s": "s4",
  "g": "지표·리더십",
  "front": "Servant leadership",
  "key": "섬김·장애 제거",
  "back": "Greenleaf 제시. 리더가 팀을 섬겨 ★장애 제거·보호·코칭★으로 성과를 이끈다",
  "tip": "지시·통제·세부 할당은 오답"
 },
 {
  "s": "s5",
  "g": "지표",
  "front": "KPI (Key Performance Indicator)",
  "key": "현재 성과 지속 감시",
  "back": "핵심성과지표 — 목표치·임계치를 두고 프로젝트 ★건강 상태를 지속 감시★하는 지표 (예: CPI ≥ 0.95, 결함 유출률)",
  "tip": "지표는 '누가 무슨 결정에 쓰는가'에 답해야 한다"
 },
 {
  "s": "s5",
  "g": "지표",
  "front": "OKR (Objectives and Key Results)",
  "key": "O=정성 지향 / KR=측정 결과",
  "back": "Objective는 정성적·도전적 지향점, Key Results는 그 달성을 확인하는 ★측정 가능한 결과★",
  "tip": "KR에 '작업 목록(활동)'을 적으면 함정 — KR은 결과"
 },
 {
  "s": "s5",
  "g": "지표",
  "front": "Leading vs Lagging indicator",
  "key": "예측 vs 확인",
  "back": "★선행 지표★ = 미래 결과 예측(고위험 수 추세, WIP 증가) / ★후행 지표★ = 이미 일어난 결과 확인(완료 원가, 최종 만족도)",
  "tip": "조기 경보는 선행 지표로"
 },
 {
  "s": "s5",
  "g": "지표",
  "front": "Goodhart's Law",
  "key": "지표가 목표가 되면 망가진다",
  "back": "측정치가 평가 목표가 되는 순간 좋은 지표 구실을 못 한다 — 벨로시티 평가 연동 → 포인트 인플레이션",
  "tip": "벨로시티는 계획용, 팀 간 비교·성과평가 금지"
 },
 {
  "s": "s5",
  "g": "지표",
  "front": "Watermelon reporting",
  "key": "겉 녹색 속 빨강",
  "back": "대시보드는 Green인데 실제 상황은 Red인 보고 — 지표 정의·데이터 원천 결함 또는 미화",
  "tip": "현장 신호(팀 대화·결함 추세)와 지표가 어긋나면 지표를 의심"
 },
 {
  "s": "s5",
  "g": "지표",
  "front": "Reconciliation (지표 조정)",
  "key": "원천 간 차이 해소",
  "back": "같은 대상을 다른 원천(재무 시스템·타임시트 등)으로 잰 값의 차이 원인을 밝혀 맞춘 뒤 보고 (ECO II-9)",
  "tip": "한쪽 값만 골라 보고하는 보기는 오답"
 },
 {
  "s": "s5",
  "g": "EVM",
  "front": "CPI · SPI",
  "key": "EV/AC · EV/PV",
  "back": "CPI = EV ÷ AC (<1 원가 초과), SPI = EV ÷ PV (<1 일정 지연)",
  "tip": "SPI는 종료 시 1로 수렴 — 늦게 끝나도 SPI=1"
 },
 {
  "s": "s5",
  "g": "EVM",
  "front": "EAC 4가지 선택",
  "key": "BAC/CPI · AC+(BAC−EV) · AC+(BAC−EV)/(CPI×SPI) · AC+상향식 ETC",
  "back": "CPI 지속 / 일회성 편차 / CPI·SPI 모두 영향 / ★원래 추정이 틀렸으면 재추정★",
  "tip": "상황 단서(원인이 일회성? 추정 결함?)로 공식을 고른다"
 },
 {
  "s": "s5",
  "g": "EVM",
  "front": "TCPI (To-Complete Performance Index)",
  "key": "(BAC−EV)/(BAC−AC)",
  "back": "남은 예산으로 남은 작업을 끝내기 위해 필요한 원가 효율. ★>1이면 지금보다 더 효율적★이어야 함",
  "tip": "TCPI가 현재 CPI보다 크게 높으면 BAC 달성은 비현실적 → EAC 기준 재협의"
 },
 {
  "s": "s5",
  "g": "흐름",
  "front": "Little's Law",
  "key": "Cycle time = WIP ÷ Throughput",
  "back": "평균 사이클타임 = 평균 진행 중 작업 수 ÷ 평균 처리량. WIP를 줄이면 인도가 빨라진다",
  "tip": "WIP 24, 처리량 8/주 → 3주"
 },
 {
  "s": "s5",
  "g": "흐름",
  "front": "Lead time vs Cycle time",
  "key": "요청~인도 ⊇ 착수~완료",
  "back": "리드타임 = 고객 요청부터 인도까지(대기 포함), 사이클타임 = 팀이 작업을 시작해 끝낼 때까지",
  "tip": "고객이 체감하는 것은 리드타임"
 },
 {
  "s": "s5",
  "g": "시각화",
  "front": "Information radiator",
  "key": "크게 걸어 두는 상태판",
  "back": "정보 방열기 — 팀 공간에 크게 게시해 누구나 지나가며 상태를 보는 시각 표시물 (칸반 보드·번다운·장애 목록). Alistair Cockburn 명명",
  "tip": "분산 팀은 온라인 대시보드로. 반대 = 정보 냉장고"
 },
 {
  "s": "s5",
  "g": "시각화",
  "front": "Burndown vs Burnup",
  "key": "남은 일 vs 누적 완료+범위선",
  "back": "번다운은 남은 작업, 번업은 완료 누적과 ★전체 범위선을 따로★ 그려 범위 변경이 보인다",
  "tip": "범위가 자꾸 바뀌는 릴리스 → 번업"
 },
 {
  "s": "s5",
  "g": "시각화",
  "front": "Cumulative Flow Diagram (CFD)",
  "key": "세로=WIP · 가로=리드타임 · 넓어지는 띠=병목",
  "back": "누적흐름도 — 상태별 누적 항목을 띠로 쌓은 그림. 완료선 기울기 = 처리량",
  "tip": "누적 그래프는 내려가지 않는다"
 },
 {
  "s": "s5",
  "g": "산출물",
  "front": "Artifact tailoring",
  "key": "Just enough",
  "back": "산출물의 종류·상세도를 복잡도·규제·거버넌스에 맞춰 ★가치를 주는 만큼만★ 선택 (ECO II-9)",
  "tip": "과한 PMO 템플릿 → 무시도 전부 수용도 아닌 '합의된 테일러링'"
 },
 {
  "s": "s5",
  "g": "산출물",
  "front": "Configuration management",
  "key": "버전·사양 식별·추적",
  "back": "형상관리 — 산출물·제품의 버전과 기술 사양을 식별·추적해 단일 최신본 유지. 변경통제(승인 결정)와 구분",
  "tip": "서로 다른 버전으로 작업해 재작업 발생 → 형상관리 부재"
 },
 {
  "s": "s5",
  "g": "품질",
  "front": "Acceptance criteria vs DoD",
  "key": "개별 항목 vs 모든 항목 공통",
  "back": "인수 기준 = 특정 스토리의 요구 충족 조건(PO·고객) / DoD = 모든 증분에 공통인 완료 품질 체크리스트(팀)",
  "tip": "둘 다 충족해야 '완료' → 아니면 벨로시티 0"
 },
 {
  "s": "s5",
  "g": "품질",
  "front": "Definition of Ready (DoR)",
  "key": "착수 준비 기준",
  "back": "백로그 항목이 반복에 들어갈 만큼 명확한지(인수 기준·크기·의존성) 판단하는 기준",
  "tip": "DoR = 시작 조건, DoD = 끝 조건"
 },
 {
  "s": "s5",
  "g": "품질",
  "front": "Control Quality → Validate Scope",
  "key": "검증된 → 인수된 인도물",
  "back": "QC(내부 정확성 검사)가 먼저 '검증된 인도물'을 만들고, Validate Scope(고객 공식 인수)가 '인수된 인도물'을 만든다",
  "tip": "Validate = 외부·인수, QC = 내부·정확성"
 },
 {
  "s": "s5",
  "g": "품질",
  "front": "Cost of Quality (CoQ)",
  "key": "예방·평가 / 내부·외부 실패",
  "back": "적합 비용(예방·평가) + 부적합 비용(내부 실패·외부 실패). 외부 실패가 가장 비싸다",
  "tip": "교육=예방, 테스트=평가, 재작업=내부, 리콜=외부"
 },
 {
  "s": "s5",
  "g": "지식",
  "front": "Lessons learned register vs repository",
  "key": "프로젝트 문서 vs OPA",
  "back": "등록부는 진행 내내 기록하는 프로젝트 문서, 저장소는 종료 때 이관되는 조직 자산(OPA)",
  "tip": "'교훈은 종료 때 한 번에' = 함정"
 },
 {
  "s": "s5",
  "g": "지식",
  "front": "Tacit vs Explicit knowledge",
  "key": "암묵지 vs 형식지",
  "back": "암묵지 = 경험·노하우(말로 옮기기 어려움) → 페어링·멘토링·쉐도잉 / 형식지 = 문서화 가능 → 저장소·문서",
  "tip": "핵심 인력 퇴사 대비 '문서만 써 달라'는 불충분"
 },
 {
  "s": "s5",
  "g": "지식",
  "front": "SECI model",
  "key": "공동화·표출화·연결화·내면화",
  "back": "노나카·다케우치 지식 변환: 암묵→암묵(S), 암묵→형식(E), 형식→형식(C), 형식→암묵(I)",
  "tip": "표출화(Externalization) = 암묵지를 문서로"
 },
 {
  "s": "s5",
  "g": "종료",
  "front": "Transition readiness",
  "key": "받을 준비가 됐는가",
  "back": "이관 준비도 — 운영 조직·다음 단계가 인수할 역량(교육·매뉴얼·지원 체계·지식)을 갖췄는지 검증 (ECO II-10)",
  "tip": "운영팀 거부 → 준비 기준 대비 부족 항목 확인·보완"
 },
 {
  "s": "s5",
  "g": "종료",
  "front": "Early termination",
  "key": "중단돼도 종료 절차는 수행",
  "back": "조기 종료 시에도 완료·미완 상태 문서화, 교훈, 조달·재무 정산, 자원 해산을 한다",
  "tip": "'즉시 팀 해산'은 오답"
 },
 {
  "s": "s6",
  "g": "거버넌스",
  "front": "Project Governance",
  "key": "구조·규칙·절차·보고·윤리·정책",
  "back": "프로젝트를 지휘·통제·감독하는 틀. ★OPA를 활용해★ 수립, ★성공 지표★와 ★에스컬레이션 경로·임계치★를 정의(ECO III-1)",
  "tip": "누가 결정하나 / 언제 올리나 / 무엇으로 성공 판단하나"
 },
 {
  "s": "s6",
  "g": "거버넌스",
  "front": "OPA vs EEF",
  "key": "내부 자산 vs 통제 불가 환경",
  "back": "★OPA★ = 템플릿·절차·교훈 저장소(프로젝트가 갱신) / ★EEF★ = 문화·구조·법규·시장(PM 통제 불가)",
  "tip": "조직 문화는 OPA가 아니라 ★EEF(내부)★"
 },
 {
  "s": "s6",
  "g": "거버넌스",
  "front": "Escalation threshold",
  "key": "임계치 초과 시에만 + 분석·대안",
  "back": "허용 편차(임계치) 안은 PM이 해결, 넘으면 ★영향 분석과 대안을 들고★ 거버넌스 경로로 상향",
  "tip": "즉시 스폰서에 넘기기 = 책임 회피형 오답"
 },
 {
  "s": "s6",
  "g": "거버넌스",
  "front": "PMO 3유형",
  "key": "Supportive < Controlling < Directive",
  "back": "★Supportive★ 템플릿 제공(통제 낮음) / ★Controlling★ 준수 요구(중간) / ★Directive★ 직접 관리(높음)",
  "tip": "통제 수준 순서로 외운다"
 },
 {
  "s": "s6",
  "g": "컴플라이언스",
  "front": "Compliance categories (ECO III-2)",
  "key": "보안·보건안전·지속가능성·규제",
  "back": "security · health and safety · sustainability · regulatory 요구를 확인·분류하고 ★미준수 결과★를 분석, ★준수 정도를 측정★",
  "tip": "컴플라이언스는 일정 압박에도 생략 불가"
 },
 {
  "s": "s6",
  "g": "컴플라이언스",
  "front": "Triple Bottom Line",
  "key": "People · Planet · Profit",
  "back": "지속가능성의 3중 결산 — 사회(사람)·환경(지구)·경제(이익/번영)",
  "tip": "PMBOK 8 원칙 ★Integrate sustainability★ 와 연결"
 },
 {
  "s": "s6",
  "g": "컴플라이언스",
  "front": "AI governance in projects",
  "key": "데이터 보호·사람 검증·편향·투명성",
  "back": "기밀을 공개 AI에 넣지 않고, AI 산출물은 ★사람이 검증★한 뒤 사용, 결정 책임은 사람",
  "tip": "AI 사용 금지도, 무검증 사용도 오답 — 정책 안에서 활용"
 },
 {
  "s": "s6",
  "g": "위험 분석",
  "front": "Risk",
  "key": "불확실 · 긍정/부정",
  "back": "발생하면 목표에 ★긍정(기회) 또는 부정(위협)★ 영향을 주는 불확실한 사건·조건",
  "tip": "\"위험 = 부정적 사건\" 은 함정"
 },
 {
  "s": "s6",
  "g": "위험 분석",
  "front": "Risk appetite vs Risk threshold",
  "key": "감수 의향 vs 측정 경계",
  "back": "★Appetite★ = 감수할 불확실성 정도(정성) / ★Threshold★ = 그 이상이면 대응·보고하는 수치 경계",
  "tip": "임계치 초과 → 거버넌스 보고"
 },
 {
  "s": "s6",
  "g": "위험 분석",
  "front": "Qualitative vs Quantitative analysis",
  "key": "우선순위 vs 수치 영향",
  "back": "정성 = ★P-I 매트릭스★로 개별 위험 우선순위 / 정량 = ★몬테카를로·토네이도·EMV·의사결정나무★로 전체 영향",
  "tip": "정성이 먼저, 정량은 선택적"
 },
 {
  "s": "s6",
  "g": "위험 분석",
  "front": "EMV (Expected Monetary Value)",
  "key": "확률 × 영향 (위협 −, 기회 +)",
  "back": "개별 EMV를 합산. 우발 예비 산정·의사결정나무 비교에 사용",
  "tip": "부호 실수(기회를 −로) 주의"
 },
 {
  "s": "s6",
  "g": "위험 대응",
  "front": "Threat responses",
  "key": "Escalate·Avoid·Transfer·Mitigate·Accept",
  "back": "상향·회피(제거)·전가(제3자)·완화(확률/영향↓)·수용(능동=예비비/수동)",
  "tip": "Transfer 해도 위험 자체는 사라지지 않는다"
 },
 {
  "s": "s6",
  "g": "위험 대응",
  "front": "Opportunity responses",
  "key": "Escalate·Exploit·Share·Enhance·Accept",
  "back": "상향·활용(실현 보장)·공유(제3자)·증대(확률/영향↑)·수용",
  "tip": "Exploit = 확실히 / Enhance = 높이기"
 },
 {
  "s": "s6",
  "g": "위험 대응",
  "front": "Residual vs Secondary risk",
  "key": "남은 위험 vs 대응이 낳은 위험",
  "back": "★Residual★ = 대응 후에도 남는 위험 / ★Secondary★ = 대응을 실행해서 새로 생긴 위험",
  "tip": "둘을 맞바꾸는 보기가 단골"
 },
 {
  "s": "s6",
  "g": "위험 대응",
  "front": "Contingency vs Fallback vs Workaround",
  "key": "트리거 시 / 실패 시 / 미계획",
  "back": "★Contingency plan★ 트리거 시 실행 / ★Fallback★ 비상계획 실패 시 / ★Workaround★ 미식별 문제에 즉흥 대응",
  "tip": "식별된 위험 발생 → 계획된 대응 실행"
 },
 {
  "s": "s6",
  "g": "위험 대응",
  "front": "Contingency vs Management reserve",
  "key": "known-unknowns vs unknown-unknowns",
  "back": "우발 예비 = 식별 위험, ★원가 기준선 안★ / 관리 예비 = 미식별, ★기준선 밖·예산 안, 사용 시 승인★",
  "tip": "PM이 관리 예비를 단독 집행 = 오답"
 },
 {
  "s": "s6",
  "g": "변경",
  "front": "Integrated Change Control",
  "key": "CR → 영향분석 → CCB → 갱신 → 소통",
  "back": "모든 변경 요청을 문서화해 영향 분석 후 ★CCB/권한자★ 결정, 승인 시 기준선·문서 갱신 후 구현",
  "tip": "PM 단독 승인·거절 금지, 거절도 변경 로그에 기록"
 },
 {
  "s": "s6",
  "g": "변경",
  "front": "Change in agile",
  "key": "PO · 백로그 · 스프린트 목표 보호",
  "back": "새 요청은 ★제품 백로그★에 넣고 ★PO★가 우선순위 결정. 진행 중 스프린트 목표는 보호",
  "tip": "스프린트 도중 즉시 추가 = 오답"
 },
 {
  "s": "s6",
  "g": "변경",
  "front": "Gold plating",
  "key": "요청 없는 추가 = 무단 변경",
  "back": "고객이 요청하지 않은 기능을 팀이 덧붙이는 것. 원가·위험·품질 영향이 통제 밖",
  "tip": "\"고객이 좋아하면 괜찮다\" = 함정"
 },
 {
  "s": "s6",
  "g": "이슈",
  "front": "Risk becomes an issue",
  "key": "발생 = 이슈 로그 + 계획된 대응",
  "back": "식별된 위험이 실현되면 등록부의 대응을 실행하고 ★이슈 로그★ 로 추적(ECO III-4)",
  "tip": "이슈는 확률을 매기지 않는다 — 이미 발생"
 },
 {
  "s": "s6",
  "g": "이슈",
  "front": "Impediment removal",
  "key": "서번트 리더 · 팀 밖 장애",
  "back": "팀이 못 푸는 장애를 PM/SM이 당사자와 직접 협의해 제거, 영향 기준으로 ★우선순위·가시화·재평가★",
  "tip": "일일 조정 회의에선 공유만, 해결은 회의 후"
 },
 {
  "s": "s6",
  "g": "개선·가치",
  "front": "Lessons learned register vs repository",
  "key": "프로젝트 문서 vs OPA",
  "back": "★Register★ 진행 내내 기록(프로젝트 문서) / ★Repository★ 종료 시 이관되는 조직 자산",
  "tip": "교훈은 끝에 한 번이 아니라 지속 수집"
 },
 {
  "s": "s6",
  "g": "개선·가치",
  "front": "Output · Outcome · Benefit · Value",
  "key": "산출물 → 결과 → 편익 → 가치",
  "back": "만든 것 → 사용으로 생긴 변화 → 조직 이득 → 이해관계자가 인식하는 가치",
  "tip": "편익은 종료 후 운영에서 실현되는 경우가 많다"
 },
 {
  "s": "s6",
  "g": "변화·환경",
  "front": "PESTLE",
  "key": "정치·경제·사회·기술·법률·환경",
  "back": "Political · Economic · Social · Technological · Legal · Environmental — 외부 환경 변화 조사 틀(ECO III-8: 규제·기술·지정학·시장)",
  "tip": "외부 환경은 ★지속적★ 재검토"
 },
 {
  "s": "s6",
  "g": "변화·환경",
  "front": "ADKAR / Kotter / Lewin",
  "key": "A-D-K-A-R / 위기감부터 8단계 / 해빙-변화-재동결",
  "back": "조직 변화 관리 모델. 저항은 원인(인식·열망·지식·능력) 파악 후 소통·교육으로 대응",
  "tip": "[확인필요: 2026 출제 근거] — 모델명보다 '문화 평가·영향 평가' 행동이 핵심"
 },
 {
  "s": "s7",
  "g": "PMBOK 8 구조",
  "front": "PMBOK Guide 8th Edition 구조",
  "key": "6원칙·7성과영역·5FA",
  "back": "★6 Principles + 7 Performance Domains★ + 비처방형 프로세스 지침(5 Focus Areas). 2025-11 출간",
  "tip": "12·8은 7판, 49 프로세스는 6판 — 숫자 바꿔치기 주의"
 },
 {
  "s": "s7",
  "g": "PMBOK 8 구조",
  "front": "Non-prescriptive process guidance",
  "key": "비처방·참고용",
  "back": "8판이 다시 넣은 프로세스 지침은 ★의무가 아닌 참고용★ — 프로젝트에 맞게 선택·테일러링",
  "tip": "'8판은 모든 프로세스를 의무화' = 오답"
 },
 {
  "s": "s7",
  "g": "PMBOK 8 구조",
  "front": "PMBOK 6 → 7 → 8 숫자",
  "key": "49 → 12·8 → 6·7",
  "back": "6판: 5 프로세스 그룹·10 지식영역·49 프로세스 / 7판: 12 원칙·8 성과영역 / 8판: 6 원칙·7 성과영역",
  "tip": "7판 공백을 메운 것은 Process Groups: A Practice Guide(2022)"
 },
 {
  "s": "s7",
  "g": "8판 원칙",
  "front": "Adopt a holistic view",
  "key": "전체론·시스템",
  "back": "프로젝트를 상호작용하는 시스템으로 보고 ★부분 변경의 연쇄 영향★을 함께 분석",
  "tip": "7판 Systems thinking·Complexity 원칙의 후신으로 해석"
 },
 {
  "s": "s7",
  "g": "8판 원칙",
  "front": "Focus on value",
  "key": "산출물보다 가치",
  "back": "인도물 완료가 아니라 ★성과·편익·가치 실현★을 기준으로 판단·우선순위",
  "tip": "7판에도 있던 원칙 — '8판 신설' 아님"
 },
 {
  "s": "s7",
  "g": "8판 원칙",
  "front": "Embed quality",
  "key": "검사보다 내재화",
  "back": "품질을 ★프로세스와 산출물에 심는다★ — 마지막 검사로 품질을 만들지 않는다",
  "tip": "8판에 '품질 성과영역'은 없다 — 원칙으로 다룬다"
 },
 {
  "s": "s7",
  "g": "8판 원칙",
  "front": "Lead accountably",
  "key": "책임·투명",
  "back": "결정과 결과에 책임지고 ★실수를 인정·투명하게 보고★",
  "tip": "남 탓·은폐 보기는 즉시 소거"
 },
 {
  "s": "s7",
  "g": "8판 원칙",
  "front": "Integrate sustainability",
  "key": "환경·사회·경제",
  "back": "환경·사회·경제적 영향을 계획·결정에 통합 — ECO II-1·II-7·III-2·III-5에 지속가능성 등장",
  "tip": "규제 의무가 아니어도 '영향 분석 → 대안 제시'가 정답 패턴"
 },
 {
  "s": "s7",
  "g": "8판 원칙",
  "front": "Build empowered teams/culture",
  "key": "팀이 결정",
  "back": "팀에 권한·신뢰를 주어 ★스스로 결정·개선★ — PM은 촉진하는 서번트 리더",
  "tip": "팀이 정할 일을 PM이 대신 정하면 오답"
 },
 {
  "s": "s7",
  "g": "8판 성과영역",
  "front": "7 Performance Domains (8th)",
  "key": "G·S·S·F·S·R·R",
  "back": "★Governance · Scope · Schedule · Finance · Stakeholders · Resources · Risk★",
  "tip": "Uncertainty·Measurement·Delivery·Team은 7판 이름"
 },
 {
  "s": "s7",
  "g": "8판 성과영역",
  "front": "Governance performance domain",
  "key": "결정권·임계치",
  "back": "구조·규칙·보고·에스컬레이션 경로와 임계치를 정해 의사결정·감독 — ECO III-1",
  "tip": "PM 권한을 넘으면 분석+대안을 갖고 에스컬레이션"
 },
 {
  "s": "s7",
  "g": "8판 성과영역",
  "front": "Finance performance domain",
  "key": "자금·예비·편익",
  "back": "재무 필요 분석, 우발·관리 예비, 지출 추적·재무 보고, 편익 회수 — ECO II-6",
  "tip": "원가 기준선만 보는 게 아니라 편익 측정까지"
 },
 {
  "s": "s7",
  "g": "Focus Area",
  "front": "5 Focus Areas",
  "key": "착·기·실·감·종",
  "back": "Initiating · Planning · Executing · Monitoring & Controlling · Closing [2차출처]. 프로세스 수 40개로 알려짐, 목록 [확인필요]",
  "tip": "Focus Area ≠ 생애주기 단계(phase)"
 },
 {
  "s": "s7",
  "g": "7판 대비",
  "front": "PMBOK 7 Performance Domains (8)",
  "key": "이·팀·접·계·작·인·측·불",
  "back": "Stakeholders · Team · Development Approach & Life Cycle · Planning · Project Work · Delivery · Measurement · Uncertainty",
  "tip": "8판 Governance·Finance는 7판에 없던 영역 이름"
 },
 {
  "s": "s7",
  "g": "7판 대비",
  "front": "PMBOK 7 Principles (12)",
  "key": "청·팀·이·가·시·리·테·품·복·위·적·변",
  "back": "Stewardship · Team · Stakeholders · Value · Systems thinking · Leadership · Tailoring · Quality · Complexity · Risk · Adaptability & resiliency · Change",
  "tip": "8판 6원칙 중 7판 이름 그대로 남은 것: Value·Quality"
 },
 {
  "s": "s7",
  "g": "7판 대비",
  "front": "Uncertainty (7th) → ?",
  "key": "Risk",
  "back": "7판 불확실성(위험·모호성·복잡성·변동성) 영역은 8판 ★Risk★ 성과영역으로 대응(해석)",
  "tip": "모호성·변동성 개념은 여전히 문항에 쓰인다"
 },
 {
  "s": "s7",
  "g": "가치 인도",
  "front": "Output → Outcome → Benefit → Value",
  "key": "산·성·편·가",
  "back": "산출물(인도물) → 성과(변화) → 편익(조직 이득) → 가치(이해관계자 가치)",
  "tip": "'테스트 통과한 모듈'은 Outcome이 아니라 Output"
 },
 {
  "s": "s7",
  "g": "가치 인도",
  "front": "Value Delivery System",
  "key": "포·프·프·운+거버넌스",
  "back": "포트폴리오·프로그램·프로젝트·제품·운영이 거버넌스 아래 함께 가치를 만들고, 성과 정보가 상위로 되먹임되는 체계",
  "tip": "프로젝트 종료 ≠ 가치 실현 종료 — 운영이 편익을 지속"
 },
 {
  "s": "s7",
  "g": "테일러링",
  "front": "Tailoring",
  "key": "의도적 조정",
  "back": "환경·작업에 맞게 ★접근법·거버넌스·프로세스를 의도적으로 조정★",
  "tip": "윤리·컴플라이언스는 테일러링 대상 아님"
 },
 {
  "s": "s7",
  "g": "테일러링",
  "front": "Tailoring process (7th, 4 steps)",
  "key": "접근법→조직→프로젝트→개선",
  "back": "① 초기 개발 접근법 선택 → ② 조직에 맞게 → ③ 프로젝트에 맞게 → ④ 지속적 개선",
  "tip": "조직 → 프로젝트 순서 바꿔치기 주의"
 },
 {
  "s": "s7",
  "g": "테일러링",
  "front": "Model · Method · Artifact",
  "key": "사고전략·수단·문서",
  "back": "모델=사고 전략(Tuckman·Cynefin) / 방법=수단(Wideband Delphi·NPV) / 산출물=템플릿·문서(헌장·위험 등록부)",
  "tip": "위험 '등록부'는 산출물, 위험 '분석'은 방법"
 },
 {
  "s": "s7",
  "g": "윤리",
  "front": "PMI Code of Ethics — 4 values",
  "key": "책·존·공·정",
  "back": "★Responsibility · Respect · Fairness · Honesty★, 각각 열망 기준 + 의무 기준",
  "tip": "적용 대상은 회원 + 비회원 자격 보유자·신청자·자원봉사자"
 },
 {
  "s": "s7",
  "g": "윤리",
  "front": "Conflict of interest",
  "key": "공정·적극 공개",
  "back": "이해충돌은 ★공정(Fairness)★ 의무 기준 — 적극적·완전 공개, 승인 전 의사결정 참여 자제",
  "tip": "선물·친인척 채용(정실) 모두 Fairness"
 },
 {
  "s": "s8",
  "g": "EVM",
  "front": "EV · PV · AC (Earned / Planned Value · Actual Cost)",
  "key": "끝낸 일 · 할 일 · 쓴 돈",
  "back": "★EV★ = 완료 작업의 예산가치(BAC × 완료율) / ★PV★ = 계획 작업의 예산 / ★AC★ = 실제 지출",
  "tip": "공식은 언제나 EV가 앞 — EV − AC, EV − PV, EV/AC, EV/PV"
 },
 {
  "s": "s8",
  "g": "EVM",
  "front": "CV · SV (Cost / Schedule Variance)",
  "key": "EV−AC · EV−PV",
  "back": "★CV = EV − AC★(− 원가 초과) / ★SV = EV − PV★(− 일정 지연). 둘 다 금액 단위",
  "tip": "SV가 음수라고 '원가 초과' 라고 쓴 보기는 함정"
 },
 {
  "s": "s8",
  "g": "EVM",
  "front": "CPI · SPI (Cost / Schedule Performance Index)",
  "key": "EV/AC · EV/PV",
  "back": "★CPI = EV/AC★, ★SPI = EV/PV★ — 1보다 크면 좋음, 작으면 나쁨",
  "tip": "CPI 0.8 = 1달러 써서 0.8달러어치 일함"
 },
 {
  "s": "s8",
  "g": "EVM",
  "front": "SPI의 종료 시점 함정",
  "key": "끝나면 SPI = 1",
  "back": "프로젝트 종료 시 EV = PV = BAC → ★SPI는 1로 수렴★. 늦게 끝나도 1",
  "tip": "말기 일정 판단은 SPI 대신 주경로·실제 날짜로"
 },
 {
  "s": "s8",
  "g": "EVM 예측",
  "front": "EAC 4가지 (Estimate at Completion)",
  "key": "BAC/CPI · AC+(BAC−EV) · AC+(BAC−EV)/(CPI×SPI) · AC+ETC",
  "back": "①효율 지속 ★BAC/CPI★ ②일회성 편차 ★AC + (BAC − EV)★ ③원가·일정 모두 ★AC + (BAC − EV)/(CPI × SPI)★ ④추정 결함 ★AC + Bottom-up ETC★",
  "tip": "문제의 '가정' 단어(계속·일회성·둘 다·잘못된 추정)가 공식을 고른다"
 },
 {
  "s": "s8",
  "g": "EVM 예측",
  "front": "ETC · VAC",
  "key": "EAC−AC · BAC−EAC",
  "back": "★ETC = EAC − AC★(남은 돈) / ★VAC = BAC − EAC★(− 완료 시 초과)",
  "tip": "VAC 부호 규칙은 CV와 동일"
 },
 {
  "s": "s8",
  "g": "EVM 예측",
  "front": "TCPI (To-Complete Performance Index)",
  "key": "남은 일 ÷ 남은 돈",
  "back": "★(BAC − EV) / (BAC − AC)★ 또는 (BAC − EV)/(EAC − AC). ★> 1 = 남은 일을 더 효율적으로★ 해야 함",
  "tip": "현 CPI보다 TCPI가 훨씬 크면 BAC 달성은 비현실적 → 수정 EAC로 변경요청"
 },
 {
  "s": "s8",
  "g": "CPM",
  "front": "Forward / Backward Pass",
  "key": "전진 최대 · 후진 최소",
  "back": "전진: ★ES = 선행 EF 최댓값★, EF = ES + D / 후진: ★LF = 후속 LS 최솟값★, LS = LF − D (0 시작 관례)",
  "tip": "1 시작 관례는 EF = ES + D − 1 — 기간·float 결과는 같음"
 },
 {
  "s": "s8",
  "g": "CPM",
  "front": "Total Float vs Free Float",
  "key": "완료일 vs 후속 ES",
  "back": "★TF = LS − ES = LF − EF★(프로젝트 완료일 기준) / ★FF = 후속 ES − 당해 EF★(바로 뒤 활동 기준). FF ≤ TF",
  "tip": "같은 경로 활동들은 TF를 공유 — 앞 활동이 쓰면 뒤 활동 여유가 줄어든다"
 },
 {
  "s": "s8",
  "g": "CPM",
  "front": "Critical Path (주경로)",
  "key": "가장 긴 경로",
  "back": "네트워크에서 ★가장 긴 경로★ = 프로젝트 최단 완료기간. 보통 TF 0, ★제약일이 있으면 음수 가능★",
  "tip": "'가장 짧은 경로' 보기·'float 항상 0' 보기가 함정"
 },
 {
  "s": "s8",
  "g": "CPM",
  "front": "Crashing vs Fast-tracking",
  "key": "원가↑ vs 위험↑",
  "back": "★Crashing★ 자원 추가 → 원가↑, 주경로의 ★기울기 최소★ 활동부터 / ★Fast-tracking★ 순차 → 병행, 재작업 위험↑",
  "tip": "원가 기울기 = (압축원가 − 정상원가) / (정상기간 − 압축기간)"
 },
 {
  "s": "s8",
  "g": "CPM",
  "front": "Resource Leveling vs Smoothing",
  "key": "주경로 변경 가능 vs float 안",
  "back": "★Leveling★ 자원 한도에 맞춤 → 완료일·주경로 바뀔 수 있음 / ★Smoothing★ float 범위 안에서만 조정",
  "tip": "'완료일을 바꾸지 않는 자원 조정' = Smoothing"
 },
 {
  "s": "s8",
  "g": "PERT",
  "front": "PERT(베타) vs 삼각 분포",
  "key": "/6 가중 vs /3 평균",
  "back": "베타 ★E = (O + 4M + P)/6★ / 삼각 ★E = (O + M + P)/3★ / σ = (P − O)/6",
  "tip": "O4·M6·P14 → 베타 7, 삼각 8 — 두 값이 나란히 보기로 나온다"
 },
 {
  "s": "s8",
  "g": "PERT",
  "front": "경로 표준편차",
  "key": "분산을 더하고 루트",
  "back": "★경로 σ = √(Σ σ²)★ — σ 2·1·2 → √9 = 3 (단순합 5는 오답)",
  "tip": "기대값은 단순 합산, 표준편차는 분산 합산"
 },
 {
  "s": "s8",
  "g": "PERT",
  "front": "신뢰구간 1σ · 2σ · 3σ",
  "key": "68 · 95 · 99.7",
  "back": "±1σ ≈ ★68.27%★ / ±2σ ≈ ★95.45%★ / ±3σ ≈ ★99.73%★",
  "tip": "E + 1σ 이내 완료 확률 ≈ 84%"
 },
 {
  "s": "s8",
  "g": "위험·의사결정",
  "front": "EMV (Expected Monetary Value)",
  "key": "확률 × 영향, 위협 −",
  "back": "★Σ(확률 × 영향)★, 위협은 음수, 기회는 양수. ★위험 중립★ 가정",
  "tip": "40% × −$25,000 = −$10,000"
 },
 {
  "s": "s8",
  "g": "위험·의사결정",
  "front": "Decision Tree (의사결정나무)",
  "key": "□결정 ○확률, EMV − 투자",
  "back": "각 대안 ★Σ(확률 × 결과) − 투자비★ 비교 → 가치 최대(원가 최소) 선택",
  "tip": "투자비를 빼먹은 값이 보기에 꼭 있다"
 },
 {
  "s": "s8",
  "g": "위험·의사결정",
  "front": "Contingency vs Management Reserve",
  "key": "식별(기준선 안) vs 미식별(기준선 밖)",
  "back": "★우발예비★ 식별 위험·원가 기준선 안 / ★관리예비★ 미식별 위험·기준선 밖·예산 안, 사용 시 승인",
  "tip": "예산 = 원가 기준선 + 관리예비"
 },
 {
  "s": "s8",
  "g": "의사소통·재무",
  "front": "Communication Channels",
  "key": "n(n−1)/2, PM 포함",
  "back": "★n(n − 1)/2★ — 팀원 9명 + PM = 10명 → 45",
  "tip": "'증가한 채널 수' 는 차이 — 8→12명: 66 − 28 = 38"
 },
 {
  "s": "s8",
  "g": "의사소통·재무",
  "front": "NPV · IRR · BCR · Payback",
  "key": "큰·큰·큰·짧은",
  "back": "NPV·IRR·BCR(ROI)는 ★클수록★, 회수기간은 ★짧을수록★ 유리. NPV는 이미 기간 반영",
  "tip": "매몰비용은 무시, 기회비용 = 포기한 최선 대안의 가치"
 },
 {
  "s": "s8",
  "g": "조달",
  "front": "PTA (Point of Total Assumption)",
  "key": "(상한 − 목표가) / 구매자분담 + 목표원가",
  "back": "FPIF에서 이 원가를 넘으면 초과분 ★전부 판매자 부담★. 예: (120k − 110k)/0.8 + 100k = $112,500",
  "tip": "분모는 ★구매자★ 분담률(80%) — 판매자 20%로 나누면 150,000 함정"
 },
 {
  "s": "s8",
  "g": "조달",
  "front": "계약 유형별 구매자 위험 순서",
  "key": "CPFF > CPIF > T&M > FPIF > FFP",
  "back": "원가정산형일수록 ★구매자★, 고정가일수록 ★판매자★ 위험↑",
  "tip": "범위 명확 → FFP, 범위 불확실·R&D → 원가정산, 빠른 인력 보강 → T&M(+NTE)"
 },
 {
  "s": "s8",
  "g": "애자일",
  "front": "Velocity · Release 계산",
  "key": "완료 포인트만 · 잔여 ÷ 평균",
  "back": "벨로시티 = ★DoD 충족 스토리 포인트 합★ / 잔여 스프린트 = ★잔여 포인트 ÷ 평균 벨로시티★(올림)",
  "tip": "부분 완료 포인트 인정 금지, 팀 간 비교 금지"
 },
 {
  "s": "s8",
  "g": "애자일",
  "front": "Little's Law",
  "key": "Cycle time = WIP / Throughput",
  "back": "★Cycle time = WIP ÷ Throughput★ — WIP 12, 3건/일 → 4일",
  "tip": "WIP 제한을 낮추면 cycle time이 짧아진다. Lead time ⊇ Cycle time"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ ECO 2021 vs ECO 2026 — 숫자·위치 대조표",
  "type": "table",
  "head": [
   "항목",
   "ECO 2021",
   "ECO 2026",
   "시험 함정"
  ],
  "rows": [
   [
    "도메인 비중",
    "People 42 / Process 50 / BE 8",
    "★People 33 / Process 41 / BE 26★",
    "2021 숫자를 섞은 보기"
   ],
   [
    "Task 수",
    "35",
    "★26★ (8 / 10 / 8)",
    "'Process 가 가장 적다'"
   ],
   [
    "위험·변경·이슈·거버넌스·컴플라이언스",
    "Process",
    "★Business Environment★",
    "'위험관리는 Process Task'"
   ],
   [
    "장애 제거(Remove impediments)",
    "People",
    "★BE III-4 (이슈 관리와 결합)★",
    "'People 의 팀 리딩 Task'"
   ],
   [
    "시험 시간",
    "230분",
    "★240분★",
    "'230분'"
   ],
   [
    "문항",
    "180",
    "★180 (채점 170 + pretest 10)★",
    "'180문항 모두 채점'"
   ],
   [
    "새 문항 유형",
    "—",
    "★Case/Scenario · Graphic-Based★",
    "'빈칸 채우기가 새로 추가'"
   ],
   [
    "프로젝트 성공",
    "일정·예산·범위 중심",
    "★이해관계자 가치·성과★",
    "'기준선 준수 = 성공'"
   ],
   [
    "새 키워드",
    "—",
    "공동 비전·지식 이전·가치기반 인도·재무·외부 환경·지속가능성·AI",
    "'가상팀 관리가 새 Task'"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ PMI 마인드셋 — 상황별 정답 행동 vs 전형 오답",
  "type": "table",
  "head": [
   "상황",
   "정답 행동(먼저)",
   "전형 오답",
   "원칙"
  ],
  "rows": [
   [
    "예측형에서 변경 요청",
    "★영향 분석 → 변경 요청 → CCB★",
    "작으니 바로 반영 / PM 이 거절",
    "2 절차 준수"
   ],
   [
    "스프린트 중 새 요구",
    "★백로그에 추가 → PO 우선순위★",
    "현재 스프린트에 즉시 투입",
    "3 애자일 변경"
   ],
   [
    "팀원 간 갈등",
    "★당사자와 사적으로 만나 협업 해결★",
    "PM 이 결론 강요 / 기능 관리자에게 넘김",
    "5 직접 소통"
   ],
   [
    "공급사 지연",
    "★팀과 영향 평가·대응 옵션 검토★",
    "즉시 스폰서 보고 / 즉시 압축 / 계약 해지",
    "1 먼저 분석"
   ],
   [
    "권한 밖 지시하는 이해관계자",
    "★직접 만나 역할·권한·영향 검토★",
    "팀에게 무시하라고 지시 / 즉시 스폰서 보고",
    "5 직접 소통"
   ],
   [
    "식별된 위험 발생",
    "★위험등록부의 계획된 대응 실행★",
    "새 대응 브레인스토밍부터",
    "7 계획 참조"
   ],
   [
    "팀이 장애로 막힘",
    "★PM 이 장애 제거★",
    "팀에게 알아서 해결하라고 함",
    "4 서번트 리더"
   ],
   [
    "임계치 초과 편차",
    "★분석·대안을 갖고 스폰서·거버넌스에 에스컬레이션★",
    "PM 권한으로 혼자 결정",
    "6 에스컬레이션"
   ],
   [
    "안전·규제 위반 발견",
    "★중단·보고★",
    "일정 맞춘 뒤 나중에 보고",
    "10 컴플라이언스"
   ],
   [
    "새 규제 발표",
    "★범위·백로그 영향 평가★",
    "무시하고 진행 / 즉시 범위 삭감",
    "12 선제적 행동"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 프로젝트·프로그램·포트폴리오·PMO·조직구조 한눈에",
  "type": "table",
  "head": [
   "개념",
   "핵심 정의",
   "키워드",
   "함정"
  ],
  "rows": [
   [
    "프로젝트",
    "고유 산출물을 위한 일시적 노력",
    "★시작과 끝★",
    "일시적 ≠ 짧음"
   ],
   [
    "프로그램",
    "관련 프로젝트 조정 관리로 편익 획득",
    "★편익·상호의존성★",
    "관련성 필수"
   ],
   [
    "포트폴리오",
    "전략 목표 달성을 위한 집합",
    "★전략 정렬★",
    "★구성요소 연관 불필요★"
   ],
   [
    "운영",
    "지속·반복 활동",
    "★계속★",
    "프로젝트 산출물을 운영이 인수"
   ],
   [
    "Supportive PMO",
    "템플릿·교훈 제공",
    "★통제 낮음★",
    "—"
   ],
   [
    "Controlling PMO",
    "방법론 준수 요구",
    "★통제 중간★",
    "—"
   ],
   [
    "Directive PMO",
    "프로젝트 직접 관리",
    "★통제 높음★",
    "—"
   ],
   [
    "Functional → Projectized",
    "PM 권한 증가 순",
    "★기능 < 약 < 균형 < 강 < 프로젝트★",
    "약한 매트릭스 PM = 코디네이터"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 개발 접근법 4유형 + 하이브리드 선택표",
  "type": "table",
  "head": [
   "유형",
   "요구사항",
   "인도",
   "목표",
   "적합 상황"
  ],
  "rows": [
   [
    "예측형",
    "고정",
    "단일(마지막)",
    "★원가 관리★",
    "요구 확정·후반 변경 비용 큼(건축)"
   ],
   [
    "반복형",
    "동적",
    "단일",
    "★정확성★",
    "해결책을 피드백으로 다듬어야 할 때(프로토타입)"
   ],
   [
    "증분형",
    "동적",
    "자주·작게",
    "★속도★",
    "완성 기능 조각을 먼저 쓰고 싶을 때"
   ],
   [
    "애자일",
    "동적",
    "자주·작게",
    "★고객 가치★",
    "불확실·혁신, 고객 참여 가능"
   ],
   [
    "하이브리드",
    "혼합",
    "혼합",
    "★맥락 최적화★",
    "규제 부품 + 변동 큰 소프트웨어 혼재"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ People 8 Task — 상황별 정답 행동 대조표",
  "type": "table",
  "head": [
   "Task",
   "상황 신호",
   "정답 쪽 행동",
   "오답 쪽 행동"
  ],
  "rows": [
   [
    "I-1 공동 비전",
    "팀이 목표를 다르게 이해",
    "오해 근본원인 분석 → 비전 재정렬·재공유",
    "지시서 배포 / 즉시 에스컬레이션"
   ],
   [
    "I-2 갈등",
    "팀원 간 언쟁",
    "당사자와 사적·직접 대화 → 협업 해결",
    "공개 지적 / 회피 / 바로 상급자 보고"
   ],
   [
    "I-3 팀 리딩",
    "팀이 장애로 정체 · 결정 의존",
    "장애 제거 · 결정 위임·코칭",
    "팀에 알아서 우회 지시 / PM 독단 결정"
   ],
   [
    "I-4 참여",
    "늦게 발견된 이해관계자·저항",
    "등록부 추가·분석 → 참여계획 갱신 · 1:1 신뢰 구축",
    "범위 확정 이유로 거절 / 배제"
   ],
   [
    "I-5 기대 정렬",
    "부서 간 상충 기대",
    "공동 세션으로 목표 기준 트레이드오프 · 멘토링",
    "권한 높은 쪽 수용 / 모두 수용"
   ],
   [
    "I-6 고객 기대",
    "지표 녹색인데 만족도 하락",
    "원인 분석 → 성과 조정 대응",
    "지표 정상이니 유지"
   ],
   [
    "I-7 지식 이전",
    "핵심 인력 퇴사 예정",
    "핵심 지식 식별 → 페어링·잡 섀도잉·문서화",
    "퇴사 직전 인수인계서 한 부"
   ],
   [
    "I-8 의사소통",
    "정보 누락·보고 불만",
    "정보 요구 확인 → 계획·형식 테일러링",
    "보고 분량·빈도만 늘림"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 갈등 해결 5기법 — 이름·결과·적합 상황",
  "type": "table",
  "head": [
   "기법(English)",
   "결과",
   "언제 쓰나",
   "함정"
  ],
  "rows": [
   [
    "철수/회피(Withdraw/Avoid)",
    "해결 없음(일시 후퇴)",
    "냉각기 필요 · 사소한 사안",
    "'시간이 해결' 은 대부분 오답"
   ],
   [
    "완화/수용(Smooth/Accommodate)",
    "관계 유지, 근본 해결 X",
    "관계가 더 중요할 때",
    "공통점 강조 = 완화"
   ],
   [
    "타협/화해(Compromise/Reconcile)",
    "양측 일부 양보(Lose-Lose)",
    "힘 대등 · 임시 해결",
    "타협 ≠ Win-Win"
   ],
   [
    "강요/지시(Force/Direct)",
    "Win-Lose",
    "긴급 · 안전 · 법규",
    "평상시 남용은 오답"
   ],
   [
    "협업/문제해결(Collaborate/Problem solve)",
    "Win-Win · 근본 해결",
    "시간·신뢰가 있을 때",
    "PMI 기본 지향"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 이론·모형 — 학자·요소 짝 맞추기",
  "type": "table",
  "head": [
   "이론/모형",
   "학자",
   "요소(순서)"
  ],
  "rows": [
   [
    "팀 개발 단계",
    "Tuckman (+Jensen)",
    "Forming → Storming → Norming → Performing → Adjourning"
   ],
   [
    "욕구 단계",
    "Maslow",
    "생리 → 안전 → 사회 → 존중 → 자아실현"
   ],
   [
    "2요인",
    "Herzberg",
    "위생요인(불만) / 동기요인(만족)"
   ],
   [
    "X·Y 이론",
    "McGregor",
    "X 통제 / Y 자발"
   ],
   [
    "Z 이론",
    "Ouchi",
    "장기 고용·집단 의사결정"
   ],
   [
    "기대이론",
    "Vroom",
    "기대 × 수단성 × 유의성"
   ],
   [
    "성취동기",
    "McClelland",
    "성취 · 친교 · 권력"
   ],
   [
    "상황적 리더십",
    "Hersey · Blanchard",
    "지시 → 코칭 → 지원 → 위임"
   ],
   [
    "권력 기반",
    "French · Raven",
    "합법 · 보상 · 강압 · 전문가 · 준거"
   ],
   [
    "현저성 모형",
    "Mitchell · Agle · Wood",
    "권력 · 긴급성 · 정당성"
   ],
   [
    "지식 전환",
    "Nonaka (SECI)",
    "사회화 → 표출화 → 연결화 → 내면화"
   ],
   [
    "원칙적 협상",
    "Fisher · Ury",
    "사람·문제 분리 · 이해관계 · 상호이익 · 객관 기준(BATNA)"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 예측형 핵심 산출물 — 누가 만들고 무엇이 들어가나",
  "type": "table",
  "head": [
   "산출물",
   "작성·승인",
   "핵심 내용",
   "시험 함정"
  ],
  "rows": [
   [
    "프로젝트 헌장",
    "스폰서 발행",
    "목적·목표·상위 요구·요약 마일스톤·PM 권한",
    "PM이 발행 ✗"
   ],
   [
    "프로젝트 관리계획서",
    "PM+팀 작성, 이해관계자 승인",
    "보조계획 + 범위·일정·원가 기준선",
    "헌장과 혼동"
   ],
   [
    "범위 기술서",
    "PM",
    "제품 범위·인도물·인수 기준·★제외 사항★",
    "제외 사항 누락 → 범위 분쟁"
   ],
   [
    "WBS / WBS 사전",
    "PM+팀",
    "인도물 분해·작업 패키지 / 요소별 상세",
    "활동 목록과 혼동"
   ],
   [
    "RTM",
    "PM·BA",
    "요구↔목표↔인도물↔테스트 추적",
    "범위 기준선 구성요소 아님"
   ],
   [
    "일정 기준선",
    "PM, 승인",
    "승인된 일정 모델(시작·종료일)",
    "변경통제 없이 수정 ✗"
   ],
   [
    "원가 기준선",
    "PM, 승인",
    "작업 원가 + 우발 예비비, S-곡선",
    "관리 예비비 포함 ✗"
   ],
   [
    "품질관리계획서",
    "PM",
    "표준·지표·QA/QC 방법",
    "품질 지표 ≠ 규격"
   ],
   [
    "자원관리계획서 / RACI",
    "PM",
    "역할·책임·확보·통제 / A는 1명",
    "A 2명 ✗"
   ],
   [
    "조달관리계획서 / SOW",
    "PM+조달",
    "계약 유형·선정 기준 / 조달 품목 상세",
    "SOW = 조달 품목 범위만(프로젝트 전체 범위 ✗)"
   ],
   [
    "의사소통관리계획서",
    "PM",
    "누구에게·무엇을·언제·어떻게",
    "채널 수 계산 시 PM 포함"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 예측형 용어 쌍 대조표",
  "type": "table",
  "head": [
   "쌍",
   "A",
   "B",
   "구분 포인트"
  ],
  "rows": [
   [
    "Validate Scope ↔ Control Quality",
    "고객 공식 인수(외부)",
    "정확성 검사(내부)",
    "QC → Validate 순서"
   ],
   [
    "Manage Quality ↔ Control Quality",
    "프로세스·예방·감사",
    "산출물·검사·검출",
    "audit = Manage"
   ],
   [
    "Crashing ↔ Fast-tracking",
    "자원 추가 → 원가↑",
    "병행 → 위험·재작업↑",
    "주경로 활동 대상"
   ],
   [
    "Leveling ↔ Smoothing",
    "종료일 변경 가능",
    "float 안에서만",
    "자원 최적화"
   ],
   [
    "Total ↔ Free Float",
    "종료일 기준",
    "후행 ES 기준",
    "주경로 TF = 0"
   ],
   [
    "Contingency ↔ Management Reserve",
    "식별 위험, 기준선 안",
    "미식별, 기준선 밖",
    "BAC엔 관리예비 미포함"
   ],
   [
    "Analogous ↔ Bottom-up",
    "top-down, 빠름",
    "상세 합산, 가장 정확",
    "모수 = 통계 관계"
   ],
   [
    "Mandatory ↔ Discretionary",
    "하드 로직",
    "소프트 로직",
    "fast-tracking 대상 = 임의"
   ],
   [
    "Quality ↔ Grade",
    "요구 충족 정도",
    "기능 범주",
    "낮은 등급은 문제 아님"
   ],
   [
    "Single ↔ Sole source",
    "선호 업체 지정",
    "유일 업체",
    "경쟁 가능 여부"
   ],
   [
    "Scope Creep ↔ Gold Plating",
    "통제 없는 요청 수용",
    "팀 자발적 추가",
    "둘 다 지양"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 계약 유형별 위험·적합 상황",
  "type": "table",
  "head": [
   "계약",
   "구조",
   "구매자 위험",
   "적합 상황"
  ],
  "rows": [
   [
    "FFP",
    "확정 총액",
    "가장 낮음",
    "범위·사양 명확"
   ],
   [
    "FPIF",
    "고정가 + 성과 인센티브(상한가)",
    "낮음",
    "범위 명확 + 성과 동기 부여"
   ],
   [
    "FP-EPA",
    "고정가 + 물가 조정",
    "낮음",
    "다년 계약·환율·물가 변동"
   ],
   [
    "T&M",
    "단가 × 시간 + 자재",
    "중간(NTE 상한)",
    "인력 보강, 범위 확정 전 빠른 착수"
   ],
   [
    "CPIF",
    "원가 + 인센티브 수수료(분담 비율)",
    "높음",
    "불확실 범위 + 원가 절감 유도"
   ],
   [
    "CPAF",
    "원가 + 구매자 주관 평가 보상",
    "높음",
    "성과를 주관적으로 평가"
   ],
   [
    "CPFF",
    "원가 + 고정 수수료",
    "가장 높음(CR 중)",
    "R&D, 범위 매우 불확실"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 스크럼 한눈 정리 — 책임·이벤트·산출물",
  "type": "table",
  "head": [
   "구분",
   "항목",
   "핵심",
   "단골 함정"
  ],
  "rows": [
   [
    "책임",
    "Product Owner",
    "가치 극대화, 백로그 순서",
    "위원회 아님 · 스프린트 취소 권한"
   ],
   [
    "책임",
    "Scrum Master",
    "코칭·촉진·장애 제거",
    "팀에 작업 할당 안 함"
   ],
   [
    "책임",
    "Developers",
    "증분 생성, Sprint Backlog 계획",
    "'Development Team'은 2017판 용어"
   ],
   [
    "이벤트",
    "Sprint Planning",
    "Why·What·How, ≤8h",
    "PO 단독 결정 아님(팀이 양 선택)"
   ],
   [
    "이벤트",
    "Daily Scrum",
    "15분, Developers의 계획·조정",
    "PM 상태보고 회의 아님"
   ],
   [
    "이벤트",
    "Sprint Review",
    "증분 점검·백로그 적응, ≤4h",
    "단순 데모·승인 회의 아님"
   ],
   [
    "이벤트",
    "Retrospective",
    "프로세스·DoD 개선, ≤3h",
    "개인 성과 평가 아님"
   ],
   [
    "산출물",
    "Product Backlog",
    "확약: Product Goal",
    "—"
   ],
   [
    "산출물",
    "Sprint Backlog",
    "확약: Sprint Goal",
    "목표를 위태롭게 하는 변경 금지"
   ],
   [
    "산출물",
    "Increment",
    "확약: Definition of Done",
    "DoD 미충족 = 증분 아님"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 애자일 방법·도구 비교 — 스크럼 vs 칸반 vs XP vs 린",
  "type": "table",
  "head": [
   "구분",
   "스크럼",
   "칸반",
   "XP",
   "린"
  ],
  "rows": [
   [
    "초점",
    "타임박스 반복",
    "흐름·WIP",
    "기술 실천",
    "낭비 제거"
   ],
   [
    "역할 규정",
    "PO·SM·Developers",
    "없음",
    "코치·고객 등(관례)",
    "없음"
   ],
   [
    "주기",
    "≤1개월 스프린트",
    "연속 흐름",
    "짧은 반복·작은 릴리스",
    "흐름"
   ],
   [
    "핵심 지표",
    "속도·번다운",
    "리드/사이클 타임·처리량·CFD",
    "테스트 통과·통합 빈도",
    "VSM 효율"
   ],
   [
    "변경 수용",
    "다음 스프린트(백로그)",
    "언제든(용량 생기면 당김)",
    "다음 반복",
    "결정 연기"
   ],
   [
    "대표 함정",
    "DoD 우회",
    "병목에 WIP 상향",
    "TDD=테스트 나중",
    "추가 기능도 낭비"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 상황별 정답 행동 — 애자일·하이브리드 시나리오",
  "type": "table",
  "head": [
   "상황",
   "정답 행동",
   "오답 패턴"
  ],
  "rows": [
   [
    "스프린트 중 신규 요청",
    "PO에게 전달 → 백로그 우선순위",
    "즉시 반영 / 무조건 거절"
   ],
   [
    "DoD 미충족 스토리",
    "백로그로 복귀·재추정",
    "부분 점수 / 기준 완화"
   ],
   [
    "팀 간 속도 비교 요구",
    "상대 척도 설명, 결과 지표 제안",
    "포인트 표준화·목표 부여"
   ],
   [
    "칸반 병목",
    "팀과 분석, 스워밍·착수 억제",
    "WIP 상향 / 초과근무 지시"
   ],
   [
    "팀 밖 장애",
    "담당자 직접 협의 → 분석 들고 에스컬레이션",
    "방관 / 승인 우회"
   ],
   [
    "가치 하락·채택 저조",
    "가치 재평가·백로그 재조정",
    "범위 완수로 성공 보고"
   ],
   [
    "규제 HW + 변동 SW",
    "하이브리드 + 통합 마일스톤",
    "전부 한 방식 / 마지막에 통합"
   ],
   [
    "이벤트 생략 제안",
    "목적·영향 분석 후 테일러링, 회고 점검",
    "그대로 생략 / 일방 강제"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 상태 그래프 해석 대조표 — 무엇이 보이면 무엇을 의심하나",
  "type": "table",
  "head": [
   "그래프",
   "보이는 패턴",
   "해석",
   "PM·팀의 첫 행동"
  ],
  "rows": [
   [
    "번다운",
    "실제선이 이상선 위, 며칠 수평",
    "완료(DoD) 스토리 없음·장애",
    "데일리 협의 회의에서 장애 확인·제거"
   ],
   [
    "번다운",
    "중간에 위로 튐",
    "범위 추가(번다운에선 원인 구분 불가)",
    "PO와 범위 추가 경위 확인"
   ],
   [
    "번업",
    "범위선 상승, 완료선 기울기 일정",
    "범위 증가로 릴리스 예측 지연",
    "PO·이해관계자와 우선순위·예측 재협의"
   ],
   [
    "CFD",
    "특정 띠가 점점 넓어짐",
    "그 단계 병목·WIP 누적",
    "WIP 제한·스워밍, 병목 원인 분석"
   ],
   [
    "CFD",
    "완료선 평평",
    "인도 중단",
    "막힌 단계 확인"
   ],
   [
    "S-커브",
    "EV < PV, AC > EV",
    "일정 지연·원가 초과",
    "추세·근본 원인 분석 → EAC 예측"
   ],
   [
    "관리도",
    "평균 한쪽 연속 7점 / 한계 밖",
    "이상 원인(특수 원인)",
    "원인 조사(규격 한계와 혼동 금지)"
   ],
   [
    "파레토",
    "상위 2~3개 원인이 대부분",
    "소수 원인 집중",
    "상위 원인부터 개선"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ '완료'와 '인수'를 가르는 기준 비교",
  "type": "table",
  "head": [
   "개념",
   "적용",
   "결정 주체",
   "산출/결과",
   "함정"
  ],
  "rows": [
   [
    "DoR",
    "착수 전 백로그 항목",
    "팀·PO",
    "반복 투입 가능",
    "DoD와 혼동"
   ],
   [
    "인수 기준",
    "개별 스토리·인도물",
    "PO·고객",
    "요구 충족 판정",
    "모호한 표현(사용자 친화적)"
   ],
   [
    "DoD",
    "모든 증분 공통",
    "팀(조직 표준 포함)",
    "출시 가능한 품질",
    "일정 압박 시 항목 생략"
   ],
   [
    "Control Quality",
    "인도물 정확성",
    "팀 내부(QC)",
    "검증된 인도물",
    "Validate보다 먼저"
   ],
   [
    "Validate Scope",
    "완료된 인도물",
    "고객·스폰서",
    "인수된 인도물",
    "QC 통과 = 인수 아님"
   ],
   [
    "종료 승인",
    "프로젝트·단계 전체",
    "스폰서·핵심 이해관계자",
    "공식 종료",
    "기준을 끝에 가서 정함"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 종료(Closure) 활동 — 순서·산출·함정",
  "type": "table",
  "head": [
   "활동",
   "핵심 산출",
   "함정 보기"
  ],
  "rows": [
   [
    "최종 인수 확보",
    "서명된 인수 문서",
    "QC 통과만으로 종료"
   ],
   [
    "운영·다음 단계 이관",
    "이관 준비도 검증, 교육·런북",
    "운영팀 준비 없이 이관"
   ],
   [
    "조달 종결",
    "클레임 해결, 최종 지불, 서면 종결 통지",
    "클레임 미해결 상태로 종결 / 즉시 소송"
   ],
   [
    "재무 정산",
    "계정 마감, 예비비 반환",
    "남은 예산 소진 목적의 추가 작업"
   ],
   [
    "최종 교훈·회고",
    "교훈 저장소(OPA) 갱신",
    "종료 때만 교훈 수집"
   ],
   [
    "최종 보고서",
    "목표 달성도·편익 현황",
    "불리한 정보 생략"
   ],
   [
    "기록 보관",
    "아카이브",
    "개인 PC 보관"
   ],
   [
    "자원 해산·인정",
    "팀 해산, 성과 피드백·축하",
    "가장 먼저 팀 해산"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "지표 선택 가이드 — 접근법별 상태 지표",
  "type": "table",
  "head": [
   "질문",
   "예측형 지표",
   "애자일·흐름 지표",
   "가치 지표"
  ],
  "rows": [
   [
    "얼마나 진척됐나?",
    "EV, % 완료, 마일스톤",
    "번업, 완료 포인트",
    "인도 기능 사용률"
   ],
   [
    "효율은?",
    "CPI, SPI",
    "벨로시티 추세, 처리량",
    "편익-비용 비율"
   ],
   [
    "언제 끝나나?",
    "EAC, 일정 예측",
    "남은 포인트 ÷ 평균 벨로시티",
    "편익 실현 시점"
   ],
   [
    "어디가 막혔나?",
    "차이 분석, 주경로 float",
    "CFD, 사이클타임, WIP",
    "—"
   ],
   [
    "품질은?",
    "결함 밀도, 관리도",
    "유출 결함(Escaped defects)",
    "고객 만족·NPS"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ 위험 대응 전략 — 위협 vs 기회 대조표",
  "type": "table",
  "head": [
   "전략 쌍",
   "위협(Threat)",
   "기회(Opportunity)",
   "시험 함정"
  ],
  "rows": [
   [
    "상향",
    "Escalate — PM 권한·범위 밖",
    "Escalate",
    "상향 후 그 위험은 PM이 계속 관리하지 않는다(소유권 이전 확인)"
   ],
   [
    "제거 ↔ 보장",
    "Avoid — 계획 변경으로 위협 제거",
    "Exploit — 기회 실현을 확실히",
    "Avoid 와 Mitigate 혼동"
   ],
   [
    "제3자",
    "Transfer — 보험·계약·보증",
    "Share — 합작·파트너",
    "Transfer 해도 위험은 사라지지 않음"
   ],
   [
    "크기 조절",
    "Mitigate — 확률·영향 감소",
    "Enhance — 확률·영향 증대",
    "Exploit(확실) vs Enhance(증가) 혼동"
   ],
   [
    "수용",
    "Accept — 능동(예비비)/수동",
    "Accept — 생기면 취함",
    "능동 수용 = 우발 예비비 책정"
   ],
   [
    "대응 후",
    "잔여 위험(남은 것) / 2차 위험(새로 생긴 것)",
    "—",
    "Residual 과 Secondary 맞바꾸기"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ BE 도메인 문서·로그 한눈 비교",
  "type": "table",
  "head": [
   "문서",
   "담는 것",
   "언제",
   "자주 나오는 상황"
  ],
  "rows": [
   [
    "위험 등록부(Risk register)",
    "위험·확률·영향·책임자·트리거·대응",
    "식별 즉시, 상시 갱신",
    "복도에서 들은 잠재 지연 → 기록·분석"
   ],
   [
    "이슈 로그(Issue log)",
    "발생한 문제·책임자·기한·상태",
    "문제 발생 시",
    "위험 실현 → 대응 실행 + 이슈 기록"
   ],
   [
    "변경 로그(Change log)",
    "모든 CR과 결정(승인·거절·보류)",
    "CR 접수 시",
    "거절된 CR도 기록되어 있는가"
   ],
   [
    "교훈 등록부(LL register)",
    "잘된 점·개선점",
    "프로젝트 내내",
    "종료 때만 기록 = 오답"
   ],
   [
    "가정 로그(Assumption log)",
    "가정·제약",
    "착수부터",
    "가정이 틀리면 위험 재식별"
   ],
   [
    "RAID 로그",
    "Risks·Assumptions·Issues·Dependencies 통합",
    "상시",
    "하이브리드 실무 통합 관리"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ 상황형 BE 문항 — 정답 행동 vs 오답 패턴",
  "type": "table",
  "head": [
   "상황",
   "정답 행동(PMI 마인드셋)",
   "오답 패턴"
  ],
  "rows": [
   [
    "예측형 변경 요청",
    "문서화 → 영향 분석 → CCB",
    "바로 구현 / PM 단독 거절"
   ],
   [
    "애자일 변경 요청",
    "PO와 백로그 추가·우선순위",
    "스프린트 중 즉시 투입"
   ],
   [
    "식별된 위험 발생",
    "계획된 대응 실행 + 이슈 로그",
    "새 대응 브레인스토밍부터"
   ],
   [
    "임계치 초과 편차",
    "분석·대안 준비 후 에스컬레이션",
    "예비비로 몰래 흡수 / 보고 보류"
   ],
   [
    "규제·보안 요구 생략 압박",
    "미준수 결과 설명 + 준수 대안",
    "지시대로 생략 / 몰래 진행"
   ],
   [
    "외부 환경 변화(규제·시장)",
    "영향 평가 → 범위·백로그 조정",
    "시행까지 대기 / 즉시 전면 재계획"
   ],
   [
    "팀 밖 장애",
    "PM이 당사자와 직접 협의",
    "팀에 떠넘김 / 즉시 스폰서행"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "★ PMBOK 6·7·8판 구조 비교",
  "type": "table",
  "head": [
   "항목",
   "6판(2017)",
   "7판(2021)",
   "8판(2025-11)"
  ],
  "rows": [
   [
    "중심 체계",
    "프로세스(ITTO)",
    "원칙·성과영역",
    "원칙·성과영역 + 비처방 프로세스"
   ],
   [
    "원칙",
    "—",
    "★12★",
    "★6★"
   ],
   [
    "성과영역/지식영역",
    "10 지식영역",
    "★8 성과영역★",
    "★7 성과영역★"
   ],
   [
    "프로세스",
    "★49★ · 5 프로세스 그룹",
    "본문 제외(2022 Practice Guide로 보완)",
    "재도입 · 5 Focus Areas · 40개로 알려짐 [확인필요]"
   ],
   [
    "품질",
    "지식영역(품질 관리)",
    "원칙(Quality) + Delivery 영역",
    "원칙(Embed quality)"
   ],
   [
    "지속가능성",
    "—",
    "Stewardship 안에 포함",
    "★독립 원칙★(Integrate sustainability)"
   ],
   [
    "신규 강조",
    "애자일 부록",
    "모델·방법·산출물, 테일러링",
    "AI · PMO · 조달 확대, Governance·Finance 영역"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "★ 8판 6원칙 ↔ 7판 12원칙 대응(학습용 해석)",
  "type": "table",
  "head": [
   "8판 원칙",
   "대응하는 7판 원칙",
   "상황형 정답 신호"
  ],
  "rows": [
   [
    "Adopt a holistic view",
    "Systems thinking · Complexity · Adaptability · Change",
    "연쇄 영향 분석"
   ],
   [
    "Focus on value",
    "Value · Stakeholders",
    "편익·성과 기준 판단"
   ],
   [
    "Embed quality",
    "Quality",
    "인수 기준·DoD 준수"
   ],
   [
    "Lead accountably",
    "Leadership · Stewardship",
    "실수 인정·투명 보고"
   ],
   [
    "Integrate sustainability",
    "Stewardship",
    "ESG·장기 영향 분석"
   ],
   [
    "Build empowered teams/culture",
    "Team · Adaptability & resiliency",
    "팀 결정 촉진"
   ],
   [
    "(성과영역 Risk로)",
    "Risk(Optimize risk responses)",
    "계획된 대응 실행"
   ],
   [
    "(전 원칙 적용 방식)",
    "Tailoring",
    "맥락에 맞게 조정"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "★ 성과영역 대응표 — 7판 → 8판 → ECO 2026",
  "type": "table",
  "head": [
   "8판 성과영역",
   "7판 출처(해석)",
   "ECO 2026 Task"
  ],
  "rows": [
   [
    "Governance",
    "Project Work · Development Approach · Measurement 일부",
    "III-1, III-3"
   ],
   [
    "Scope",
    "Planning · Delivery",
    "II-2, II-3"
   ],
   [
    "Schedule",
    "Planning · Development Approach(cadence)",
    "II-8"
   ],
   [
    "Finance",
    "Planning(예산) · Measurement",
    "II-6"
   ],
   [
    "Stakeholders",
    "Stakeholders",
    "I-4, I-5, I-6, I-8"
   ],
   [
    "Resources",
    "Team · Project Work(자원·조달)",
    "II-4, I-3, II-5"
   ],
   [
    "Risk",
    "★Uncertainty★",
    "III-5, III-4"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "★ PMI 윤리 강령 — 상황별 정답 행동",
  "type": "table",
  "head": [
   "상황",
   "관련 가치",
   "정답 행동",
   "오답 패턴"
  ],
  "rows": [
   [
    "공급사 고가 선물",
    "Fairness",
    "정책 확인 → 거절·신고, 이해충돌 공개",
    "'평가에 영향 없으면 수령'"
   ],
   [
    "친인척 채용 압력",
    "Fairness",
    "역량 기준 공정 선발",
    "관리자 요청이니 수용"
   ],
   [
    "지연 은폐 보고 요청",
    "Honesty",
    "정확한 현황+회복 계획 보고",
    "반쪽 진실로 보고"
   ],
   [
    "역량 밖 업무",
    "Responsibility",
    "한계 공개, 지원·교육 대안",
    "일단 수락 후 문제 시 보고"
   ],
   [
    "동료 경력 허위 기재",
    "Responsibility·Honesty",
    "사실 근거로 PMI 보고",
    "모른 척·소문 유포"
   ],
   [
    "팀원 모욕 행동",
    "Respect",
    "사적 대화·그라운드 룰 재확인",
    "공개 질책"
   ],
   [
    "현지 '수수료' 관행",
    "Responsibility(법규)",
    "거부, 법무·컴플라이언스 상의",
    "간접 지급·소액 허용"
   ]
  ]
 },
 {
  "s": "s8",
  "title": "★ EVM 공식 한 장 — 공식·해석·예제값(BAC 100k·PV 50k·EV 40k·AC 50k)",
  "type": "table",
  "head": [
   "지표",
   "공식",
   "좋음/나쁨 기준",
   "예제값"
  ],
  "rows": [
   [
    "CV",
    "EV − AC",
    "+ 절감 / − 초과",
    "−$10,000"
   ],
   [
    "SV",
    "EV − PV",
    "+ 앞섬 / − 지연",
    "−$10,000"
   ],
   [
    "CPI",
    "EV / AC",
    ">1 / <1",
    "0.8"
   ],
   [
    "SPI",
    "EV / PV",
    ">1 / <1 (종료 시 1)",
    "0.8"
   ],
   [
    "EAC① 효율 지속",
    "BAC / CPI",
    "—",
    "$125,000"
   ],
   [
    "EAC② 일회성",
    "AC + (BAC − EV)",
    "—",
    "$110,000"
   ],
   [
    "EAC③ CPI·SPI",
    "AC + (BAC − EV)/(CPI × SPI)",
    "—",
    "$143,750"
   ],
   [
    "EAC④ 재추정",
    "AC + Bottom-up ETC",
    "—",
    "재추정"
   ],
   [
    "ETC",
    "EAC − AC",
    "—",
    "$75,000 (EAC①)"
   ],
   [
    "VAC",
    "BAC − EAC",
    "+ / −",
    "−$25,000"
   ],
   [
    "TCPI(BAC)",
    "(BAC − EV)/(BAC − AC)",
    "<1 쉬움 / >1 어려움",
    "1.2"
   ],
   [
    "TCPI(EAC)",
    "(BAC − EV)/(EAC − AC)",
    "같음",
    "0.8"
   ],
   [
    "%완료 / %소진",
    "EV/BAC · AC/BAC",
    "—",
    "40% / 50%"
   ]
  ]
 },
 {
  "s": "s8",
  "title": "★ 일정·위험·애자일 공식 대조표",
  "type": "table",
  "head": [
   "주제",
   "공식",
   "자주 나오는 함정"
  ],
  "rows": [
   [
    "Total Float",
    "LS − ES = LF − EF",
    "주경로 float '항상 0' (음수 가능)"
   ],
   [
    "Free Float",
    "후속 ES(최소) − 당해 EF",
    "TF와 같다고 착각 (FF ≤ TF)"
   ],
   [
    "Crash 원가 기울기",
    "(압축원가 − 정상원가)/(정상기간 − 압축기간)",
    "비주경로 활동 압축"
   ],
   [
    "PERT 베타",
    "(O + 4M + P)/6",
    "삼각 (O + M + P)/3 과 혼동"
   ],
   [
    "σ / 경로 σ",
    "(P − O)/6 · √Σσ²",
    "σ를 단순 합산"
   ],
   [
    "EMV",
    "Σ 확률 × 영향",
    "기회를 음수로·위협을 양수로"
   ],
   [
    "의사결정나무",
    "Σ(확률 × 결과) − 투자비",
    "투자비 미차감"
   ],
   [
    "의사소통 채널",
    "n(n − 1)/2",
    "PM 제외·증가분 대신 총수"
   ],
   [
    "현재가치",
    "FV / (1 + r)^n",
    "곱하기로 착각"
   ],
   [
    "PTA",
    "(상한 − 목표가)/구매자분담 + 목표원가",
    "판매자 분담률로 나눔"
   ],
   [
    "벨로시티",
    "완료 스토리 포인트 합",
    "부분 완료 포인트 포함"
   ],
   [
    "Little's Law",
    "Cycle time = WIP / Throughput",
    "WIP × Throughput"
   ]
  ]
 },
 {
  "s": "s8",
  "title": "★ 계약 유형 — 위험·지불 계산 비교",
  "type": "table",
  "head": [
   "유형",
   "지불 계산",
   "구매자 위험",
   "선택 상황"
  ],
  "rows": [
   [
    "FFP",
    "확정 금액",
    "가장 낮음",
    "범위 명확"
   ],
   [
    "FPIF",
    "실제원가 + 조정 수수료, 상한가 cap (PTA 이후 판매자 전액 부담)",
    "낮음",
    "범위 명확 + 원가 절감 유인"
   ],
   [
    "FP-EPA",
    "고정가 + 경제지표 조정",
    "낮음",
    "다년 계약·물가 변동"
   ],
   [
    "T&M",
    "단가 × 시간 + 자재 (NTE 권장)",
    "중간",
    "범위 확정 전·인력 보강"
   ],
   [
    "CPIF",
    "실제원가 + 목표수수료 ± 분담 조정",
    "높음",
    "범위 불확실 + 성과 유인"
   ],
   [
    "CPAF",
    "실제원가 + 평가 기반 수수료",
    "높음",
    "주관적 성과 평가"
   ],
   [
    "CPFF",
    "실제원가 + 고정 수수료",
    "가장 높음(CPPC 제외)",
    "R&D·범위 불확실"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "ECO 2026 도메인 비중은 People 42 / Process 50 / BE 8 이다 — 그것은 2021 ECO. 2026은 ★33 / 41 / 26★"
 },
 {
  "s": "s1",
  "t": "위험 계획·관리는 Process 도메인의 Task 다 — 2026에서 위험·변경·이슈·거버넌스·컴플라이언스는 ★Business Environment★"
 },
 {
  "s": "s1",
  "t": "'Recognize when a risk becomes an issue' 는 III-5 위험관리 Task 의 Enabler 다 — ★III-4 장애 제거·이슈 관리★ 소속"
 },
 {
  "s": "s1",
  "t": "ECO 의 Enabler 목록에 없는 행동은 출제되지 않는다 — Enabler 는 ★예시적이며 망라적이지 않다★"
 },
 {
  "s": "s1",
  "t": "180문항 전부가 채점된다 — ★채점 170 + 비채점 pretest 10★"
 },
 {
  "s": "s1",
  "t": "휴식 후에도 앞 섹션 문항으로 돌아가 답을 고칠 수 있다 — ★휴식을 시작하면 이전 섹션 복귀 불가★"
 },
 {
  "s": "s1",
  "t": "2026 시험에 빈칸 채우기 유형이 새로 추가되었다 — 새 유형은 ★Case/Scenario 와 Graphic-Based★, 빈칸 채우기는 공식 목록에 없음"
 },
 {
  "s": "s1",
  "t": "PMP 합격 점수는 정답률 61% 로 공식 발표되어 있다 — ★컷 점수는 비공개★, 결과는 합격/불합격 + 도메인 진단"
 },
 {
  "s": "s1",
  "t": "같은 달에 두 프로젝트를 이끌었으면 경력 2개월로 인정된다 — 경력은 ★월 단위 비중복★, 1개월"
 },
 {
  "s": "s1",
  "t": "2026-12-01 이후에도 어느 교육업체의 실시간 온라인 강의든 35시간으로 인정된다 — 라이브 교육은 ★ATP·China REP·인증 학위과정★만, 자기주도 과정은 기관 무관"
 },
 {
  "s": "s1",
  "t": "애자일 문항은 Process 도메인에서만 출제된다 — 접근법은 ★3개 도메인 전체에 분산★(예측 약 40 / 애자일·하이브리드 약 60)"
 },
 {
  "s": "s1",
  "t": "상황형 문항에서는 문제가 생기면 즉시 스폰서에게 보고하는 것이 가장 안전하다 — ★먼저 분석·팀과 해결★, PM 권한·임계치를 넘을 때만 대안을 들고 에스컬레이션"
 },
 {
  "s": "s1",
  "t": "변경 영향이 작으면 PM 이 승인하고 바로 반영해도 된다 — 예측형은 ★통합변경통제(CCB)★ 절차, 애자일은 ★백로그·PO 우선순위★"
 },
 {
  "s": "s1",
  "t": "포트폴리오의 구성요소는 서로 관련된 프로젝트여야 한다 — 그것은 프로그램. 포트폴리오는 ★전략 목표 기준, 연관 불필요★"
 },
 {
  "s": "s1",
  "t": "'일시적(temporary)'이란 프로젝트 기간이 짧다는 뜻이다 — ★명확한 시작과 끝★이 있다는 뜻, 수년짜리도 프로젝트"
 },
 {
  "s": "s1",
  "t": "Directive PMO 는 템플릿과 교훈만 제공하는 통제 수준이 낮은 PMO 다 — 그것은 ★Supportive★. Directive 는 ★프로젝트를 직접 관리(통제 높음)★"
 },
 {
  "s": "s1",
  "t": "증분형은 미완성 결과를 피드백으로 다듬는 방식이다 — 그것은 ★반복형★. 증분형은 ★완성된 기능 조각을 차례로 인도★"
 },
 {
  "s": "s1",
  "t": "규제가 엄격한 산업에서는 애자일·하이브리드를 쓸 수 없다 — ★테일러링으로 하이브리드 적용 가능★, 규제 요구는 준수 산출물로 반영"
 },
 {
  "s": "s2",
  "t": "타협(Compromise)은 Win-Win 이다 — 타협은 양측이 일부씩 양보하는 Lose-Lose 성격, Win-Win 은 협업/문제해결"
 },
 {
  "s": "s2",
  "t": "협업이 언제나 정답이다 — 안전·법규·긴급 상황에서는 강요/지시(Force)가 적합할 수 있다"
 },
 {
  "s": "s2",
  "t": "갈등이 생기면 즉시 상급자·스폰서에게 보고한다 — 먼저 당사자와 직접·사적으로 원인을 듣고 협업 해결을 시도한다"
 },
 {
  "s": "s2",
  "t": "권력↑·관심↓ 이해관계자는 정보 제공(Keep informed) — 만족 유지(Keep satisfied)다. 권력↓·관심↑ 이 정보 제공"
 },
 {
  "s": "s2",
  "t": "현저성 모형의 속성은 권력·관심·영향이다 — 권력·긴급성·정당성(Power·Urgency·Legitimacy)이다"
 },
 {
  "s": "s2",
  "t": "이해관계자 등록부는 착수 때 한 번 작성하면 끝이다 — 프로젝트 전 기간 지속적으로 식별·갱신한다"
 },
 {
  "s": "s2",
  "t": "Tuckman 단계는 한 번 지나가면 되돌아가지 않는다 — 팀원 교체·큰 변화가 생기면 이전 단계로 돌아갈 수 있다"
 },
 {
  "s": "s2",
  "t": "급여 인상은 동기요인이다 — Herzberg 에서 급여는 위생요인으로 불만만 줄인다"
 },
 {
  "s": "s2",
  "t": "Theory Z 는 McGregor 의 이론이다 — X·Y 가 McGregor, Z 는 Ouchi"
 },
 {
  "s": "s2",
  "t": "RACI 에서 Accountable 은 여러 명 둘 수 있다 — 활동마다 정확히 1명이다(Responsible 은 여러 명 가능)"
 },
 {
  "s": "s2",
  "t": "10명 팀이 15명이 되면 채널이 105개 추가된다 — 총 105개이고 추가된 것은 105 − 45 = 60개"
 },
 {
  "s": "s2",
  "t": "인트라넷·지식저장소는 푸시(Push) 의사소통이다 — 수신자가 필요할 때 접근하는 풀(Pull)이다"
 },
 {
  "s": "s2",
  "t": "교훈은 프로젝트 종료 회의에서 한꺼번에 정리한다 — 프로젝트 내내 수시로 교훈 등록부에 기록하고 종료 시 OPA 로 이관"
 },
 {
  "s": "s2",
  "t": "암묵지는 문서로 배포하면 이전된다 — 잡 섀도잉·페어링·스토리텔링 등 상호작용이 필요하다"
 },
 {
  "s": "s2",
  "t": "일정·원가 지표가 모두 녹색이면 프로젝트는 성공이다 — ECO 2026 은 이해관계자 가치·성과 달성까지 성공으로 본다"
 },
 {
  "s": "s2",
  "t": "비전은 착수 때 승인되면 바꾸지 않는다 — ECO I-1 Enabler 'Keep the vision current' — 갱신·재공유한다"
 },
 {
  "s": "s2",
  "t": "최다득표(Plurality)는 과반 지지다 — 과반은 다수결(Majority), 최다득표는 과반이 안 돼도 가장 많은 표"
 },
 {
  "s": "s3",
  "t": "PM이 프로젝트 헌장을 발행한다 — 헌장은 스폰서(착수자)가 발행하며, PM은 작성을 지원하고 헌장으로 권한을 받는다"
 },
 {
  "s": "s3",
  "t": "범위 기준선에 요구사항 문서가 포함된다 — 범위 기준선은 범위 기술서 + WBS + WBS 사전이다"
 },
 {
  "s": "s3",
  "t": "WBS의 최하위 요소는 활동(activity)이다 — 최하위는 작업 패키지이며, 활동은 일정 관리의 '활동 정의'에서 도출된다"
 },
 {
  "s": "s3",
  "t": "범위 확인(Validate Scope)은 산출물의 정확성을 검사하는 것이다 — 정확성 검사는 품질 통제, 범위 확인은 고객의 공식 인수다"
 },
 {
  "s": "s3",
  "t": "고객이 기뻐할 추가 기능을 넣는 금도금은 가치 제공이다 — 요구되지 않은 추가는 원가·위험을 늘리므로 지양한다"
 },
 {
  "s": "s3",
  "t": "일정을 단축하려면 아무 활동이나 압축하면 된다 — 주경로 활동을 압축해야 종료일이 당겨지고, crashing은 비용 기울기가 가장 작은 활동부터"
 },
 {
  "s": "s3",
  "t": "Fast-tracking은 원가를, Crashing은 위험을 주로 늘린다 — 반대다. Crashing = 원가↑, Fast-tracking = 위험·재작업↑"
 },
 {
  "s": "s3",
  "t": "자원 평활화(Smoothing)는 주경로를 바꿀 수 있다 — 주경로·종료일을 바꿀 수 있는 것은 평준화(Leveling), 평활화는 float 안에서만 조정"
 },
 {
  "s": "s3",
  "t": "관리 예비비는 원가 기준선에 포함된다 — 원가 기준선에는 우발 예비비만, 관리 예비비는 기준선 밖·예산 안이다"
 },
 {
  "s": "s3",
  "t": "관리도의 관리 한계는 고객이 정한다 — 고객 요구는 규격 한계, 관리 한계는 프로세스 데이터(±3σ)로 계산한다"
 },
 {
  "s": "s3",
  "t": "품질 감사(Quality Audit)는 품질 통제(Control Quality)의 도구다 — 감사는 프로세스를 점검하는 품질 관리(Manage Quality)의 도구다"
 },
 {
  "s": "s3",
  "t": "낮은 등급(Grade)의 제품은 품질 문제다 — 등급은 기능 범주일 뿐, 요구를 충족하면 낮은 등급도 문제없다(낮은 품질은 항상 문제)"
 },
 {
  "s": "s3",
  "t": "RACI 차트에서 한 작업의 Accountable은 여러 명일 수 있다 — 최종 책임자(A)는 작업마다 정확히 한 명"
 },
 {
  "s": "s3",
  "t": "원가정산(CR) 계약은 판매자 위험이 크다 — CR은 구매자 위험이 크고, 고정가(FP)가 판매자 위험이 크다"
 },
 {
  "s": "s3",
  "t": "입찰자 회의 후 관심 있는 판매자에게만 추가 정보를 준다 — 모든 잠재 판매자에게 동일 정보를 동시에 제공해야 공정하다"
 },
 {
  "s": "s3",
  "t": "클레임은 즉시 중재·소송으로 해결한다 — 협상(직접 해결)이 우선, 실패 시 ADR(조정·중재), 소송은 최후"
 },
 {
  "s": "s3",
  "t": "취소된 프로젝트는 종료 절차가 필요 없다 — 조기 종료에도 인도 현황 문서화·교훈·조달·재무 종료를 수행한다"
 },
 {
  "s": "s3",
  "t": "의사소통 채널 수 계산 시 PM은 빼고 센다 — n은 PM을 포함한 인원이며 채널 수는 n(n−1)/2"
 },
 {
  "s": "s4",
  "t": "애자일 선언은 문서·계획·계약을 없애라고 한다 — 오른쪽 항목에도 가치가 있으며 왼쪽 항목을 ★더★ 가치 있게 여길 뿐이다"
 },
 {
  "s": "s4",
  "t": "애자일 진척의 주요 척도는 투입 공수·일정 준수율이다 — ★작동하는 소프트웨어★가 주요 척도다"
 },
 {
  "s": "s4",
  "t": "스프린트를 취소할 수 있는 사람은 스크럼 마스터다 — ★Product Owner★만 취소할 수 있다"
 },
 {
  "s": "s4",
  "t": "Sprint Backlog의 확약은 Definition of Done이다 — Sprint Backlog는 ★Sprint Goal★, Increment가 ★DoD★, Product Backlog가 ★Product Goal★"
 },
 {
  "s": "s4",
  "t": "Daily Scrum은 PM에게 개인별 진척을 보고하는 회의다 — ★Developers가 스프린트 목표 진척을 점검·조정★하는 15분 이벤트다"
 },
 {
  "s": "s4",
  "t": "DoR(Definition of Ready)은 Scrum Guide 2020의 필수 요소다 — DoR은 ★팀이 선택하는 보조 실천★이고, DoD만 공식 확약이다"
 },
 {
  "s": "s4",
  "t": "속도(Velocity)에는 90% 완료된 스토리의 포인트도 비례해 넣는다 — ★DoD를 충족한 스토리만★ 센다(부분 완료 0점)"
 },
 {
  "s": "s4",
  "t": "속도가 높은 팀이 더 생산적이므로 팀 간 속도를 비교한다 — 스토리 포인트는 ★팀별 상대 척도★라 비교가 무의미하다"
 },
 {
  "s": "s4",
  "t": "칸반 병목 단계 앞의 WIP 한도를 높이면 흐름이 좋아진다 — WIP 상향은 대기열만 늘린다. ★병목 완료 지원(스워밍)·상류 착수 억제★가 정답"
 },
 {
  "s": "s4",
  "t": "칸반은 2주 고정 반복과 스크럼 마스터 역할을 필수로 둔다 — 칸반은 ★반복 길이·역할을 규정하지 않는 흐름 기반★ 방법이다"
 },
 {
  "s": "s4",
  "t": "INVEST의 E는 Essential(필수)이다 — ★Estimable(추정 가능)★이다"
 },
 {
  "s": "s4",
  "t": "MoSCoW의 W는 'Won't ever(영원히 안 함)'이다 — ★Won't have this time(이번엔 안 함)★이다"
 },
 {
  "s": "s4",
  "t": "MVP는 출시 가능한 작은 완성 제품이다 — MVP는 ★가설 검증·학습★용 최소 제품, 출시 가치 단위는 ★MMF★다"
 },
 {
  "s": "s4",
  "t": "번다운 차트는 범위 증가를 가장 잘 보여준다 — 범위 변경은 ★총 범위 선이 있는 번업 차트★에서 보인다"
 },
 {
  "s": "s4",
  "t": "누적 흐름도(CFD)에서 밴드가 좁아지는 단계가 병목이다 — ★밴드 폭이 넓어지는(쌓이는) 단계★가 병목이다"
 },
 {
  "s": "s4",
  "t": "하이브리드는 예측형과 애자일 중 하나를 고르는 이분법이다 — APG 2판은 ★인도 연속체(delivery continuum)★ 위의 선택으로 본다"
 },
 {
  "s": "s4",
  "t": "테일러링이란 팀이 불편한 이벤트를 빼는 것이다 — ★목적을 유지하며★ 방식을 조정하고 효과를 회고로 점검하는 것이다"
 },
 {
  "s": "s4",
  "t": "가치는 프로젝트 종료 시 한 번 평가하면 된다 — ECO II-3은 ★프로젝트 전 기간 비즈니스 가치 검토★를 요구한다"
 },
 {
  "s": "s5",
  "t": "교훈은 프로젝트 종료 단계에서 한 번에 수집한다 — 교훈 등록부는 진행 내내 기록하고, 종료 때 교훈 저장소(OPA)로 이관한다"
 },
 {
  "s": "s5",
  "t": "번다운 차트로 범위 변경을 명확히 볼 수 있다 — 범위선이 따로 있는 번업 차트가 범위 변경을 보여 준다"
 },
 {
  "s": "s5",
  "t": "CFD에서 띠의 수평 거리가 WIP다 — 수직 거리가 WIP, 수평 거리가 대략의 리드(사이클)타임이다"
 },
 {
  "s": "s5",
  "t": "인수 기준을 충족하면 DoD 항목이 남아 있어도 완료다 — 인수 기준과 DoD를 모두 충족해야 완료이며, 미완 스토리는 벨로시티에 넣지 않는다"
 },
 {
  "s": "s5",
  "t": "벨로시티로 팀 간 생산성을 비교한다 — 포인트는 팀마다 상대 척도라 비교 불가, 평가에 쓰면 포인트가 부풀려진다(굿하트의 법칙)"
 },
 {
  "s": "s5",
  "t": "품질 통제(QC)를 통과하면 고객 인수가 끝난 것이다 — QC는 내부 정확성, 인수는 범위 확인(Validate Scope)에서 고객이 공식 승인한다"
 },
 {
  "s": "s5",
  "t": "프로젝트가 조기 중단되면 종료 절차 없이 팀을 바로 해산한다 — 중단돼도 상태 문서화·교훈·조달·재무 정산을 수행한다"
 },
 {
  "s": "s5",
  "t": "종료 활동 중 팀(자원) 해산을 가장 먼저 한다 — 교훈·문서 정리에 팀이 필요하므로 해산은 보통 마지막이다"
 },
 {
  "s": "s5",
  "t": "SPI가 1이면 프로젝트가 제때 끝났다 — 종료 시 EV=PV가 되어 늦게 끝나도 SPI는 1로 수렴한다"
 },
 {
  "s": "s5",
  "t": "OKR의 Key Result에는 수행할 작업 목록을 적는다 — KR은 활동이 아니라 측정 가능한 결과다"
 },
 {
  "s": "s5",
  "t": "애자일 프로젝트에는 산출물이 필요 없다 — 애자일도 가치를 주는 만큼의 산출물을 테일러링해 관리한다"
 },
 {
  "s": "s5",
  "t": "읽히지 않는 보고서는 분량을 늘려 보강한다 — 이해관계자의 정보 요구·선호 형식을 다시 확인해 테일러링한다"
 },
 {
  "s": "s5",
  "t": "관리도의 관리 한계는 고객이 정한 규격 한계다 — 관리 한계는 프로세스 데이터(±3σ)로 정하고, 규격 한계는 고객 요구다"
 },
 {
  "s": "s5",
  "t": "미해결 클레임은 즉시 소송으로 해결한다 — 협상이 먼저, 그다음 계약에 정한 ADR(조정·중재), 소송은 최후다"
 },
 {
  "s": "s5",
  "t": "편익은 프로젝트 종료 시점에 모두 측정·확정된다 — 많은 편익은 종료 후 실현되므로 측정 책임을 운영·편익 소유자에게 넘긴다"
 },
 {
  "s": "s5",
  "t": "핵심 인력이 떠나면 상세 문서만 받아 두면 충분하다 — 암묵지는 페어링·쉐도잉·멘토링 같은 사람 간 이전이 필요하다"
 },
 {
  "s": "s5",
  "t": "지표가 Red가 되면 스폰서 회의 전까지 Amber로 표기해 우려를 줄인다 — 미화는 정직성 위반, 원인과 회복 대안을 함께 보고한다"
 },
 {
  "s": "s6",
  "t": "위험(Risk)은 부정적 사건만 뜻한다 — 위험은 긍정(기회)·부정(위협) 모두를 포함하는 불확실한 사건·조건이다"
 },
 {
  "s": "s6",
  "t": "관리 예비는 원가 기준선에 포함되어 PM이 재량 사용한다 — 관리 예비는 기준선 밖·예산 안이며 사용 시 경영진 승인(변경 요청)이 필요하다"
 },
 {
  "s": "s6",
  "t": "위험을 전가(Transfer)하면 위험이 없어진다 — 영향·책임이 제3자로 넘어갈 뿐 위험 자체는 남는다"
 },
 {
  "s": "s6",
  "t": "2차 위험은 대응 후 남은 위험이다 — 남은 것은 잔여 위험(Residual), 2차 위험(Secondary)은 대응 때문에 새로 생긴 위험이다"
 },
 {
  "s": "s6",
  "t": "Exploit 는 기회의 확률을 높이는 것이다 — 확률·영향을 높이는 것은 Enhance, Exploit 는 실현을 확실히 하는 것이다"
 },
 {
  "s": "s6",
  "t": "식별된 위험이 발생하면 팀과 새 대응책을 브레인스토밍한다 — 먼저 위험 등록부의 계획된 대응을 실행하고 이슈 로그에 기록한다"
 },
 {
  "s": "s6",
  "t": "정량적 위험 분석은 모든 위험에 반드시 수행한다 — 정성적 분석은 기본, 정량적 분석은 필요·데이터가 있을 때 선택적으로 한다"
 },
 {
  "s": "s6",
  "t": "PM은 사소한 변경이면 기준선 변경을 단독 승인할 수 있다 — 기준선 변경은 정의된 권한(CCB 등)에 따른 통합 변경 통제를 거친다"
 },
 {
  "s": "s6",
  "t": "거절된 변경 요청은 변경 로그에 남기지 않는다 — 승인·거절·보류 모두 기록하고 상태를 요청자에게 소통한다"
 },
 {
  "s": "s6",
  "t": "애자일에서 스프린트 도중 들어온 요청은 즉시 반영해야 고객 만족이다 — 백로그에 넣고 PO가 우선순위를 정하며 진행 중 스프린트 목표는 보호한다"
 },
 {
  "s": "s6",
  "t": "고객이 좋아할 기능을 팀이 미리 추가하는 것은 가치 기반 인도다 — 요청·승인 없는 추가는 골드 플레이팅(무단 변경)이다"
 },
 {
  "s": "s6",
  "t": "이슈는 확률·영향 매트릭스로 우선순위를 매긴다 — 이슈는 이미 발생한 문제이므로 영향·긴급도로 처리하고 확률 평가 대상이 아니다"
 },
 {
  "s": "s6",
  "t": "조직 문화는 조직 프로세스 자산(OPA)이다 — 조직 문화·구조는 기업 환경 요인(EEF)이다"
 },
 {
  "s": "s6",
  "t": "교훈은 프로젝트 종료 회의에서 한 번에 수집한다 — 교훈 등록부는 프로젝트 내내 갱신하고 종료 시 저장소(OPA)로 이관한다"
 },
 {
  "s": "s6",
  "t": "편익은 프로젝트 종료 시점에 모두 실현되어야 한다 — 편익은 운영 이관 후 실현되는 경우가 많아 측정 체계와 편익 책임자를 둔다"
 },
 {
  "s": "s6",
  "t": "규제가 공식 시행되기 전까지는 영향 평가가 필요 없다 — 외부 환경은 지속 검토하고 예정된 변화도 선제적으로 영향을 평가한다"
 },
 {
  "s": "s6",
  "t": "스폰서가 지시하면 보안 감사를 생략할 수 있다 — 컴플라이언스는 타협 불가, 미준수 결과를 설명하고 준수 가능한 대안을 찾는다"
 },
 {
  "s": "s7",
  "t": "PMBOK 8판은 7판을 폐지하고 6판의 49개 프로세스로 돌아갔다 — 8판은 원칙·성과영역 체계를 유지하면서 비처방형 프로세스 지침을 더했다"
 },
 {
  "s": "s7",
  "t": "8판은 12원칙·8성과영역이다 — 12·8은 7판, 8판은 6원칙·7성과영역이다"
 },
 {
  "s": "s7",
  "t": "8판의 프로세스 지침은 모든 프로젝트에 의무 적용된다 — 비처방형(non-prescriptive)이라 맥락에 맞게 선택·테일러링한다"
 },
 {
  "s": "s7",
  "t": "Focus Area(착수~종료)는 프로젝트 생애주기 단계(phase)와 같다 — 한 단계·반복 안에서도 반복되는 활동 묶음이다"
 },
 {
  "s": "s7",
  "t": "Uncertainty·Measurement·Delivery는 8판 성과영역이다 — 모두 7판 성과영역 이름이다"
 },
 {
  "s": "s7",
  "t": "8판에는 품질 성과영역이 있다 — 품질은 원칙(Embed quality)으로 다룬다"
 },
 {
  "s": "s7",
  "t": "지속가능성은 8판에서 독립 성과영역이 됐다 — 독립 '원칙'(Integrate sustainability)이다"
 },
 {
  "s": "s7",
  "t": "Focus on value는 8판에서 새로 만든 원칙이다 — 7판에도 Value 원칙이 있었다"
 },
 {
  "s": "s7",
  "t": "Governance는 7판 8성과영역 중 하나였다 — 7판 성과영역에는 없고 8판에서 영역 이름으로 등장한다"
 },
 {
  "s": "s7",
  "t": "인도물을 일정·예산 안에 완료하면 가치가 실현된 것이다 — 산출물 → 성과 → 편익 → 가치로 이어져야 하며 운영이 편익을 지속한다"
 },
 {
  "s": "s7",
  "t": "테스트를 통과한 소프트웨어 모듈은 성과(Outcome)다 — 산출물(Output)이다. 성과는 그로 인한 변화(처리시간 단축 등)다"
 },
 {
  "s": "s7",
  "t": "테일러링하면 컴플라이언스 요구도 줄일 수 있다 — 윤리·법규·컴플라이언스는 생략할 수 없다"
 },
 {
  "s": "s7",
  "t": "7판 테일러링은 프로젝트에 맞게 → 조직에 맞게 순서다 — 초기 접근법 선택 → 조직 → 프로젝트 → 지속 개선 순서다"
 },
 {
  "s": "s7",
  "t": "위험 등록부는 '방법(method)'이다 — 템플릿·문서이므로 '산출물(artifact)'이다"
 },
 {
  "s": "s7",
  "t": "PMI 윤리 강령은 PMI 회원에게만 적용된다 — 비회원 자격 보유자·신청자·자원봉사자에게도 적용된다"
 },
 {
  "s": "s7",
  "t": "이해충돌 공개는 정직(Honesty) 가치의 의무다 — 공정(Fairness) 가치의 의무 기준이다"
 },
 {
  "s": "s8",
  "t": "SV가 음수이면 원가가 초과되었다 — SV(EV − PV)는 일정편차, 원가 초과는 CV(EV − AC) 음수다"
 },
 {
  "s": "s8",
  "t": "SPI가 1이면 일정 문제가 없다 — 종료 시 SPI는 항상 1로 수렴하고, 집계값이라 주경로 지연을 가릴 수 있다"
 },
 {
  "s": "s8",
  "t": "EAC = BAC × CPI — 틀림. 효율 지속 가정은 BAC ÷ CPI, CPI < 1 이면 EAC는 BAC보다 커진다"
 },
 {
  "s": "s8",
  "t": "CPI·SPI를 함께 반영하면 EAC = BAC / (CPI × SPI) — 틀림. AC + (BAC − EV)/(CPI × SPI), 잔여 작업에만 적용"
 },
 {
  "s": "s8",
  "t": "TCPI가 1보다 작으면 더 효율적으로 일해야 한다 — 반대. TCPI > 1 이 더 높은 효율이 필요한 상태"
 },
 {
  "s": "s8",
  "t": "주경로는 네트워크에서 가장 짧은 경로다 — 가장 긴 경로이며 프로젝트 최단 완료기간을 결정한다"
 },
 {
  "s": "s8",
  "t": "주경로 활동의 총여유는 언제나 0이다 — 강제 마감일이 계획보다 빠르면 음수 float가 생긴다"
 },
 {
  "s": "s8",
  "t": "자유여유와 총여유는 같다 — FF는 후속 활동 ES 기준, TF는 완료일 기준이며 FF ≤ TF"
 },
 {
  "s": "s8",
  "t": "일정 단축을 위해 원가 기울기가 가장 낮은 활동을 압축한다 — '주경로 위' 활동 중 기울기 최소여야 한다. 비주경로 압축은 효과 없음"
 },
 {
  "s": "s8",
  "t": "경로 표준편차는 활동 표준편차를 더한다 — 분산을 더한 뒤 제곱근(√Σσ²)"
 },
 {
  "s": "s8",
  "t": "PERT 기대값은 (O + M + P)/3 이다 — 그것은 삼각분포. PERT(베타)는 (O + 4M + P)/6"
 },
 {
  "s": "s8",
  "t": "의사결정나무에서 초기 투자비는 매몰비용이라 빼지 않는다 — 아직 지출 전인 미래 원가이므로 각 분기 EMV에서 차감한다"
 },
 {
  "s": "s8",
  "t": "팀원 9명과 PM의 채널은 9×8/2 = 36 — PM을 포함해 n = 10, 45개"
 },
 {
  "s": "s8",
  "t": "PTA는 (상한가 − 목표가) ÷ 판매자 분담률 + 목표원가 — 분모는 구매자 분담률"
 },
 {
  "s": "s8",
  "t": "90% 끝난 스토리는 포인트의 90%를 벨로시티에 반영한다 — DoD를 충족한 스토리만 센다(0점)"
 },
 {
  "s": "s8",
  "t": "벨로시티가 높은 팀이 더 생산적이다 — 스토리 포인트는 팀 고유의 상대 척도라 팀 간 비교 불가"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "ECO 2026 구조",
  "title": "ECO 2026 — 3개 도메인 · 26개 Task · Enabler",
  "ref": "PMP ECO 2026 p5–12 (2026-07-09 시행)",
  "body": [
   {
    "h": "ECO(Examination Content Outline, 시험 내용 개요)란",
    "li": [
     "PMP 시험의 ★출제 범위 공식 문서★. 직무분석(JTA, Job Task Analysis) 결과로 만든 ★직무 Task 기반★ 목록이다.",
     "계층: ★도메인(Domain) → Task → Enabler★. Enabler 는 Task 를 수행하는 예시 행동으로 ★예시적(illustrative)이며 망라적이지 않다★.",
     "시험은 각 도메인의 ★모든 Task★ 를 다룬다 — Enabler 목록에 없는 행동도 출제될 수 있다.",
     "★ECO ≠ PMBOK★ — ECO 는 직무 Task 기반, PMBOK 가이드는 지식·원칙 기반이라 차이가 있다. 시험은 특정 교재 하나에 근거하지 않는다."
    ]
   },
   {
    "h": "도메인별 비중과 Task 수 (★2026 기준★)",
    "tb": {
     "head": [
      "도메인",
      "비중",
      "Task 수",
      "핵심 키워드"
     ],
     "rows": [
      [
       "I. People(사람)",
       "★33%★",
       "8",
       "공동 비전·갈등·팀 리딩·이해관계자 참여/기대·지식 이전·의사소통"
      ],
      [
       "II. Process(프로세스)",
       "★41%★",
       "10",
       "통합계획·범위·가치기반 인도·자원·조달·재무·품질·일정·상태 평가·종료"
      ],
      [
       "III. Business Environment(비즈니스 환경)",
       "★26%★",
       "8",
       "거버넌스·컴플라이언스·변경·장애/이슈·위험·지속 개선·조직 변화·외부 환경"
      ],
      [
       "합계",
       "100%",
       "★26★",
       "2021 ECO 의 35개에서 축소"
      ]
     ]
    }
   },
   {
    "h": "Business Environment 8개 Task — 위치 함정 주의",
    "tb": {
     "head": [
      "#",
      "Task (원문)",
      "한 줄 요약"
     ],
     "rows": [
      [
       "III-1",
       "Define and establish project governance",
       "구조·규칙·보고·윤리·정책(OPA 활용), 성공지표, ★에스컬레이션 경로·임계치★"
      ],
      [
       "III-2",
       "Plan and manage project compliance",
       "보안·보건안전·지속가능성·규제 요구 확인, 미준수 결과 분석"
      ],
      [
       "III-3",
       "Manage and control changes",
       "변경통제 절차 실행·변경 상태 소통·승인 변경 구현·문서 갱신"
      ],
      [
       "III-4",
       "Remove impediments and manage issues",
       "장애 영향 평가·우선순위·제거, ★위험이 이슈가 되는 시점 인식★"
      ],
      [
       "III-5",
       "Plan and manage risk",
       "식별·분석·감시, 위험관리계획·위험등록부(예: IT 보안 취약)"
      ],
      [
       "III-6",
       "Continuous improvement",
       "교훈 활용·개선 프로세스 갱신·★OPA 갱신★"
      ],
      [
       "III-7",
       "Support organizational change",
       "조직 문화 평가·조직 변화가 프로젝트에 주는 영향"
      ],
      [
       "III-8",
       "Evaluate external business environment changes",
       "규제·기술·지정학·시장 변화 → 범위/백로그 영향 평가"
      ]
     ]
    }
   },
   {
    "h": "People·Process 의 '새 얼굴' Task",
    "li": [
     "I-1 ★Develop a common vision(공동 비전 수립)★ — 비전 공유·전파·최신화, 비전 오해의 ★근본원인★ 분석.",
     "I-7 ★Help ensure knowledge transfer(지식 이전)★ — 핵심 지식 식별·수집·이전 환경 조성.",
     "II-3 ★Help ensure value-based delivery(가치기반 인도)★ — 가치 요소 식별, 가치·피드백 기반 우선순위, 증분 인도 기회, 편익 측정 체계.",
     "II-6 ★Plan and manage finance(재무 계획·관리)★ — 재무 요구 분석, 위험·우발 예비 정량화, 재무 변동을 거버넌스와 협의, 예비비 관리.",
     "II-1 Enabler 에 ★개발 접근법 권고(predictive, adaptive/agile, hybrid)★ 와 ★지속가능성(sustainability)★ 정보 요구가 명시돼 있다."
    ]
   },
   {
    "h": "접근법 비중 — 도메인과 별개 축",
    "li": [
     "★예측형(Predictive) 약 40%★, 나머지 ★약 60% 는 애자일/적응형(Adaptive/Agile)과 하이브리드(Hybrid)★.",
     "접근법은 ★3개 도메인 전체에 분산★ — '애자일 문항은 Process 에만 나온다'는 틀린 말.",
     "폼(form)마다 정확한 문항 수는 다를 수 있다."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "시험 형식·응시 자격",
  "title": "시험 형식 — 180문항 · 240분 · 문항 8유형",
  "ref": "ECO 2026 p17–20, PMI 새 시험 FAQ, Certification Handbook(2026-06) p16–17",
  "body": [
   {
    "h": "시험 형식 한눈에",
    "tb": {
     "head": [
      "항목",
      "내용"
     ],
     "rows": [
      [
       "문항 수",
       "★180문항★ = 채점 ★170★ + 사전시험(pretest, 비채점) ★10★ — 사전시험 문항은 구별되지 않고 무작위 배치"
      ],
      [
       "시간",
       "★240분(4시간)★ — 2021 체제 230분에서 증가. 튜토리얼·설문은 시간 미포함"
      ],
      [
       "휴식",
       "★10분 × 2회★ — ① 사례연구 섹션 종료 후 ② 독립 문항 구간 대략 중간. ★휴식 시작 후 이전 섹션으로 복귀 불가★"
      ],
      [
       "구성",
       "★사례연구(case-study) 섹션이 먼저★, 이어서 독립 문항. 사례연구 문항 수·시간 배분은 [확인필요]"
      ],
      [
       "접근법",
       "예측형 약 40% / 애자일·하이브리드 약 60%"
      ],
      [
       "채점",
       "준거참조(criteria-based)·심리측정 분석으로 합격선 결정 — ★합격 점수(컷)는 비공개★"
      ],
      [
       "결과",
       "합격/불합격 + ★도메인별 진단 정보★. 시험 직후 결과는 ★잠정(preliminary)★, 공식 결과는 10영업일 이내 온라인 확인"
      ],
      [
       "재응시",
       "1년 자격기간 안에 ★최대 3회★(2·3회차 응시료 재납부). 3회 불합격 시 마지막 응시일로부터 1년간 재신청 불가"
      ]
     ]
    }
   },
   {
    "h": "문항 유형 8종 (ECO 2026 공식 목록)",
    "tb": {
     "head": [
      "유형",
      "설명",
      "제공 방식"
     ],
     "rows": [
      [
       "★Case or Scenario (NEW)★",
       "상세 시나리오(그래프·차트 포함 가능)를 보고 연속 문항에 답함",
       "전 방식"
      ],
      [
       "★Graphic-Based (NEW)★",
       "차트·그래프·다이어그램·이미지 해석",
       "전 방식"
      ],
      [
       "Multiple-Choice Single Response",
       "4지선다 단일 정답",
       "전 방식"
      ],
      [
       "Multiple-Response",
       "정답 2개 이상 복수응답(문항이 고를 개수를 알려 줌)",
       "전 방식"
      ],
      [
       "Enhanced Matching",
       "이미지·다이어그램 위로 드래그해 매칭",
       "★CBT 전용★"
      ],
      [
       "Point and Click (Hotspot)",
       "이미지 안 숨은 핫스팟 클릭",
       "★CBT 전용★"
      ],
      [
       "Matching",
       "열 사이 드래그로 짝짓기",
       "★CBT 전용★"
      ],
      [
       "Pull-down List",
       "드롭다운에서 선택",
       "★CBT 전용★"
      ]
     ]
    }
   },
   {
    "h": "유형별 대비 요령",
    "li": [
     "★빈칸 채우기(Fill-in-the-blank)는 2026 공식 목록에 없다★ — 계산 문제도 MC·Pull-down 형태로 나온다고 보고 대비한다.",
     "Graphic-Based: 번다운·번업·S-curve·관리도·네트워크 다이어그램을 ★읽는★ 연습이 필요하다(계산은 s8, 그래프 해석은 s5).",
     "Case/Scenario: 같은 시나리오에 여러 문항이 묶인다 — 시나리오의 ★접근법(예측/애자일/하이브리드)과 단계★를 먼저 표시해 두면 풀이가 빨라진다.",
     "OPT·PBT 에서 CBT 전용 유형을 무엇으로 대체하는지는 [확인필요]."
    ]
   },
   {
    "h": "시간 전략",
    "li": [
     "240분 ÷ 180문항 ≈ ★문항당 80초★. 사례연구 섹션이 먼저이므로 초반 시간 소모에 주의.",
     "휴식 후에는 앞 섹션으로 돌아갈 수 없으므로 '나중에 검토(mark for review)'는 ★그 섹션 안에서★ 끝낸다."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "시험 형식·응시 자격",
  "title": "응시 자격 · 35시간 교육 · 응시료 · 한국어 시험",
  "ref": "ECO 2026 p13–16·p21–23, PMP 인증 페이지, Certification Handbook(2026-06)",
  "body": [
   {
    "h": "응시 자격 — 학력별 프로젝트 리딩 경력(★최근 10년, 비중복★)",
    "tb": {
     "head": [
      "학력",
      "경력"
     ],
     "rows": [
      [
       "고교 졸업(EQF 4 / ISCED 3–4)",
       "★60개월(5년)★"
      ],
      [
       "전문학사·직업훈련(EQF 5 / ISCED 5)",
       "★48개월(4년)★"
      ],
      [
       "학사 이상(EQF 6 / ISCED 6)",
       "★36개월(3년)★"
      ],
      [
       "PMI GAC 인증 학위(학사·대학원)",
       "★24개월(2년)★"
      ]
     ]
    }
   },
   {
    "h": "35시간 교육(Project Professional training)",
    "li": [
     "모든 학력 경로에 ★35시간 교육★이 필요하다. ★유효한 CAPM 보유자는 면제★.",
     "인정: ATP·China REP·GAC·대학·사내 프로그램·교육업체·★자기주도 온디맨드(종료 평가 포함)★ 과정. ★책·모의고사만으로는 불인정★.",
     "★2026-12-01부터★ 강사가 진행하는 ★라이브 교육(대면·온라인)★은 ★ATP / China REP / 인증 학위과정(GAC 포함)★만 인정. 자기주도 과정은 기관 무관 인정. 2026-12-01 이전 이수분은 기존 기준.",
     "경력은 ★월 단위 비중복★ 계산 — 같은 달에 두 프로젝트를 했어도 1개월. 학교 과제·개인 행사·일상 운영 업무는 불인정. 감사(audit) 대상이면 학력·경력 증빙."
    ]
   },
   {
    "h": "응시료 (USD)",
    "tb": {
     "head": [
      "구분",
      "회원",
      "비회원"
     ],
     "rows": [
      [
       "시험 응시료",
       "★$405★",
       "★$655★"
      ],
      [
       "재시험",
       "[확인필요]",
       "[확인필요]"
      ],
      [
       "일정 변경·취소(시험 30일 이내)",
       "$70 + 세금",
       "시험 48시간 이내는 응시료 몰수"
      ]
     ]
    }
   },
   {
    "h": "결제·언어·응시 방식",
    "li": [
     "응시료는 ★지원서 승인 후 시험 예약 시★ 납부. 회원가는 ★결제 전에 가입★한 회원에게만 적용.",
     "★영어 + 15개 번역 언어★(한국어 포함). 현행 Handbook 표현은 ★완전 번역 시험(translated exam)★ — 문항마다 ★Exhibit 버튼으로 영어 원문★ 확인. 예약 후 언어 변경 불가(취소 후 재예약).",
     "CBT: Pearson VUE 시험센터. OPT(온라인 감독): Pearson VUE OnVue.",
     "★한국·일본 특례★: 현지어 OPT 선택 시 ★ATA★가 감독 — 한국어/일본어 인터페이스, 현지 원어민 감독관, ★주말 월 수회★ 시행.",
     "자격 유지: ★3년마다 60 PDU★ + 갱신비."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "2021→2026 변경점",
  "title": "2021 ECO → 2026 ECO 무엇이 바뀌었나",
  "ref": "PMI 'What's new in the updated PMP exam', ECO 2026 p4–6",
  "body": [
   {
    "h": "숫자로 보는 변경",
    "tb": {
     "head": [
      "항목",
      "ECO 2021",
      "ECO 2026"
     ],
     "rows": [
      [
       "People",
       "42%",
       "★33%★"
      ],
      [
       "Process",
       "50%",
       "★41%★"
      ],
      [
       "Business Environment",
       "8%",
       "★26%★ (3배 이상)"
      ],
      [
       "Task 수",
       "35",
       "★26★"
      ],
      [
       "시험 시간",
       "230분",
       "★240분★"
      ],
      [
       "채점 문항",
       "—",
       "170 + pretest 10"
      ],
      [
       "시행",
       "~2026-07-08",
       "★2026-07-09~★"
      ]
     ]
    }
   },
   {
    "h": "도메인 간 이동 — ★가장 많이 틀리는 포인트★",
    "li": [
     "2021 Process 에 있던 ★위험·변경·이슈·거버넌스·컴플라이언스·지속 개선★ → 2026 ★Business Environment★ 로 이동. 그래서 BE 가 8% → 26%.",
     "2021 People 의 'Remove impediments' → 2026 ★III-4 Remove impediments and manage issues★ 로 이동, 이슈 관리와 결합.",
     "2021 People 의 가상팀(Virtual team)·감성지능·멘토링·교육·협상 등은 독립 Task 에서 빠지거나 Enabler 에 흡수 — 출제 범위에서 완전히 빠졌는지는 [확인필요] → 보조 토픽으로 학습.",
     "일정·범위·품질·조달·자원·종료는 여전히 ★Process★."
    ]
   },
   {
    "h": "새로 들어온 키워드",
    "li": [
     "★공동 비전(I-1)·지식 이전(I-7)·가치기반 인도(II-3)·재무(II-6)·외부 환경(III-8)★.",
     "★지속가능성(sustainability)★ — II-1·II-7·III-2·III-5 Enabler 에 반복 등장.",
     "★AI★ — ECO 서문에서 직무분석(JTA)의 입력 트렌드로 AI·지속가능성을 사용. 시나리오에 AI·지속가능성·이해관계자 참여가 추가됨."
    ]
   },
   {
    "h": "관점의 변화 — 프로젝트 성공의 재정의",
    "li": [
     "성공의 기준을 ★일정·예산·범위 준수★ 중심에서 ★이해관계자 가치·원하는 성과(outcome) 달성★ 으로 확장(PMI 「Maximizing Project Success」).",
     "초점: 산출물(output) → ★결과·가치·비즈니스 영향★. 리더십·기술·전략 역량의 균형, 적응형 현장 동학 반영.",
     "응시 자격: 견습(apprenticeship)·훈련 경로까지 확대, 경력 인정 기간 ★최근 10년★."
    ]
   },
   {
    "h": "참고 문서 세대 교체",
    "tb": {
     "head": [
      "문서",
      "현행",
      "포인트"
     ],
     "rows": [
      [
       "PMBOK 가이드",
       "★8판(2025-11)★",
       "6 원칙 + 7 성과영역, 비처방형 프로세스 가이드 재도입(상세는 s7)"
      ],
      [
       "Agile Practice Guide",
       "★2판(2026-09 공개)★",
       "하이브리드를 ★delivery continuum(연속체)★으로, backlog grooming → ★backlog refinement★, daily standup → ★daily coordination meeting★"
      ],
      [
       "시험 반영",
       "—",
       "APG 2판의 2026 시험 반영 관계는 [확인필요]"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "PMI 마인드셋·상황형 풀이",
  "title": "PMI 마인드셋 12원칙 — 상황형 문제의 판단 기준",
  "ref": "PMI 공식 샘플 문항 정답 패턴 + ECO 2026 Enabler 에서 도출(본 사이트 정리, PMI 공식 목록 아님)",
  "body": [
   {
    "h": "왜 '마인드셋'인가",
    "li": [
     "PMP 문항 대부분은 ★\"프로젝트 관리자는 다음에 무엇을 해야 하는가?\"★ 형 상황형(situational) 문제다.",
     "보기 4개가 ★모두 그럴듯한 행동★이다 — 정답은 'PMI 가 기대하는 PM 의 행동 순서'에 가장 가까운 것.",
     "아래 12원칙은 PMI 공식 샘플 3문항(①변경 요청 → 영향 평가 후 변경통제 ②권한 밖 지시 이해관계자 → 직접 만나 역할·권한 검토 ③공급사 지연 → 팀과 영향 평가·대응 옵션 검토)과 ECO Enabler 에서 도출한 학습용 정리다."
    ]
   },
   {
    "h": "12원칙 ① — 행동 순서",
    "tb": {
     "head": [
      "#",
      "원칙",
      "핵심 문장",
      "ECO 근거"
     ],
     "rows": [
      [
       "1",
       "★먼저 분석★(Assess first)",
       "행동 전 영향·근본원인 분석. '즉시 ~한다'는 대부분 오답",
       "I-1·III-4"
      ],
      [
       "2",
       "★절차 준수★",
       "예측형 변경 = 통합변경통제(CR→영향분석→CCB→문서 갱신). PM 단독 승인·거절 금지",
       "III-3"
      ],
      [
       "3",
       "애자일 변경",
       "백로그에 추가 → ★PO 가 우선순위★. 반복(스프린트) 중 범위 변경은 피함",
       "II-3"
      ],
      [
       "4",
       "★팀 협업·권한 위임★",
       "자기조직화 팀 결정 존중, PM = ★서번트 리더★로 장애 제거",
       "I-3·III-4"
      ],
      [
       "5",
       "★직접 대면 소통★",
       "갈등·이해관계자 문제는 당사자와 직접·사적으로. 기본 지향 = 협업·문제해결",
       "I-2"
      ],
      [
       "6",
       "★에스컬레이션 시점★",
       "PM 권한·임계치를 ★넘을 때만★, 분석과 대안을 갖고",
       "III-1"
      ]
     ]
    }
   },
   {
    "h": "12원칙 ② — 판단 기준",
    "tb": {
     "head": [
      "#",
      "원칙",
      "핵심 문장",
      "ECO 근거"
     ],
     "rows": [
      [
       "7",
       "★계획 먼저 참조★",
       "관리계획·등록부 확인. 식별된 위험 발생 → ★계획된 대응 실행★",
       "III-4·III-5"
      ],
      [
       "8",
       "★가치 중심★",
       "범위·일정·원가 준수보다 ★이해관계자 가치·성과·편익★",
       "II-3"
      ],
      [
       "9",
       "★테일러링★",
       "복잡도·불확실성에 맞춰 예측·애자일·하이브리드 선택(연속체)",
       "II-1"
      ],
      [
       "10",
       "★윤리·컴플라이언스 타협 불가★",
       "규제·보안·안전·지속가능성 우선, 위반은 보고",
       "III-2"
      ],
      [
       "11",
       "★문서화·투명성★",
       "교훈 상시 기록, 결정·변경 문서 반영, 정보 방열기 공개",
       "I-8·III-3·III-6"
      ],
      [
       "12",
       "★선제적 행동★",
       "위험 사전 식별·외부 환경 지속 점검 — 사후 대응보다 예방",
       "III-5·III-8"
      ]
     ]
    }
   },
   {
    "h": "원칙끼리 충돌할 때",
    "li": [
     "윤리·안전·법규(원칙 10)는 다른 모든 원칙보다 우선 — 이때는 '즉시 중단·보고'가 정답이 될 수 있다.",
     "'먼저 분석'(1)과 '에스컬레이션'(6)은 짝이다 — ★분석 없이 올리지 않고, 권한을 넘는데 혼자 결정하지도 않는다★.",
     "애자일 맥락이면 원칙 3·4(팀·PO 중심), 예측형 맥락이면 원칙 2·7(계획·절차 중심)이 먼저 작동한다."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-6",
  "t": "PMI 마인드셋·상황형 풀이",
  "title": "상황형 문항 풀이법 — 4단계 사고와 오답 패턴",
  "ref": "PMI 샘플 문항 정답 패턴, ECO 2026 Enabler(본 사이트 정리)",
  "body": [
   {
    "h": "4단계 풀이 순서",
    "li": [
     "① ★맥락 표시★ — 접근법(예측형/애자일/하이브리드)·생애주기 단계·PM 의 권한 범위를 문제에서 찾아 표시.",
     "② ★진짜 문제 식별★ — 증상(일정 지연)이 아니라 원인(자원 재배치·비전 오해)을 찾는다. 질문 끝 'first / next / best' 를 확인.",
     "③ ★PMI 순서 적용★ — 분석·계획 참조 → 팀·당사자와 협업 해결 → (권한 초과 시) 대안을 들고 에스컬레이션 → 문서 갱신·소통.",
     "④ ★소거★ — 아래 오답 패턴에 걸리는 보기를 지우고, 남은 것 중 '가장 먼저/가장 적절'한 하나를 고른다."
    ]
   },
   {
    "h": "오답 4패턴 — 보기를 지우는 기준",
    "tb": {
     "head": [
      "패턴",
      "전형 보기",
      "왜 오답인가"
     ],
     "rows": [
      [
       "★너무 이름(premature)★",
       "즉시 스폰서에게 에스컬레이션 / 즉시 계약 해지",
       "분석·팀 해결을 건너뜀"
      ],
      [
       "★과함(overreaction)★",
       "즉시 일정 압축(crashing) / 프로젝트 재기준선",
       "영향 평가 전에 큰 비용 행동"
      ],
      [
       "★책임 회피★",
       "기능 관리자에게 맡김 / 무시하고 진행 / 팀에게 알아서 하라",
       "PM·서번트 리더의 역할 포기"
      ],
      [
       "★절차 위반·단독 결정★",
       "작으니 바로 반영 / PM 이 거절 / 팀 결정을 PM 이 뒤집음",
       "변경통제·자기조직화 원칙 위반"
      ]
     ]
    }
   },
   {
    "h": "질문 키워드별 해석",
    "tb": {
     "head": [
      "질문 표현",
      "의미",
      "정답 경향"
     ],
     "rows": [
      [
       "What should the PM do ★first★?",
       "여러 옳은 행동 중 첫 번째",
       "분석·평가·계획 확인"
      ],
      [
       "What should the PM do ★next★?",
       "이미 한 행동 다음 단계",
       "문제에 서술된 '이미 한 일' 다음 순서"
      ],
      [
       "What is the ★best★ way...?",
       "가장 효과적인 방법",
       "협업·근본원인·가치 중심"
      ],
      [
       "What should the PM ★have done★?",
       "예방 차원의 사후 반성",
       "선제적 계획·위험 식별·참여 계획"
      ]
     ]
    }
   },
   {
    "h": "자주 나오는 정답 동사",
    "li": [
     "★Assess / Evaluate / Analyze / Review★ the impact … (영향 평가)",
     "★Meet with / Discuss with★ the stakeholder … (직접 소통)",
     "★Collaborate with the team / Facilitate★ … (팀 협업·촉진)",
     "★Refer to / Consult★ the plan · register … (계획 참조)",
     "★Coach / Remove the impediment★ … (서번트 리더십)",
     "단, 안전·윤리·법규 위반 상황에서는 ★Stop / Report★ 가 정답."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-7",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "title": "프로젝트 · 프로그램 · 포트폴리오 · 운영 · PMO",
  "ref": "PMI 표준 용어(PMBOK·The Standard for Program/Portfolio Management)",
  "body": [
   {
    "h": "PPP + 운영 구분",
    "tb": {
     "head": [
      "구분",
      "정의",
      "초점·성공 기준",
      "관리자"
     ],
     "rows": [
      [
       "★프로젝트(Project)★",
       "고유한 제품·서비스·결과를 만들기 위한 ★일시적(temporary)★ 노력",
       "산출물·성과 인도",
       "프로젝트 관리자"
      ],
      [
       "★프로그램(Program)★",
       "★관련된★ 프로젝트·하위 프로그램·프로그램 활동을 조정 관리해 ★개별 관리로는 얻을 수 없는 편익(benefit)★ 획득",
       "편익 실현·상호의존성 조정",
       "프로그램 관리자"
      ],
      [
       "★포트폴리오(Portfolio)★",
       "★전략 목표★ 달성을 위해 묶어 관리하는 프로젝트·프로그램·하위 포트폴리오·운영의 집합 — ★구성요소가 서로 관련될 필요 없음★",
       "전략 정렬·투자 우선순위",
       "포트폴리오 관리자"
      ],
      [
       "운영(Operations)",
       "조직의 지속적·반복적 활동",
       "효율·지속성",
       "운영 관리자"
      ]
     ]
    }
   },
   {
    "h": "'일시적(temporary)'의 함정",
    "li": [
     "일시적 = ★명확한 시작과 끝이 있다★는 뜻이지 ★짧다★는 뜻이 아니다 — 수년짜리 프로젝트도 있다.",
     "프로젝트는 끝나도 그 ★산출물은 오래 남을 수 있다★(교량·시스템).",
     "프로젝트 종료 사유: 목표 달성, 목표 달성 불가, 자금 소진, 필요 소멸, 자원 부족, 법적·편의상 종료 등.",
     "★Output(산출물) → Outcome(성과·결과 변화) → Benefit(조직의 이득) → Value(가치)★ — 2026 ECO 는 뒤쪽(가치·성과)을 강조."
    ]
   },
   {
    "h": "PMO(Project Management Office) 3유형",
    "tb": {
     "head": [
      "유형",
      "통제 수준",
      "역할"
     ],
     "rows": [
      [
       "★Supportive(지원형)★",
       "낮음",
       "템플릿·모범사례·교육·교훈 저장소 제공(컨설팅)"
      ],
      [
       "★Controlling(통제형)★",
       "중간",
       "프레임워크·방법론·양식·거버넌스 ★준수 요구★, 감사"
      ],
      [
       "★Directive(지시형)★",
       "높음",
       "프로젝트를 ★직접 관리★ — PM 을 PMO 가 배정"
      ]
     ]
    }
   },
   {
    "h": "조직 구조와 PM 권한 (★권한 증가 순★)",
    "tb": {
     "head": [
      "구조",
      "PM 권한",
      "특징"
     ],
     "rows": [
      [
       "기능 조직(Functional)",
       "거의 없음",
       "기능 관리자가 예산·자원 통제, PM 은 조정자"
      ],
      [
       "약한 매트릭스(Weak Matrix)",
       "낮음",
       "PM 은 코디네이터·익스페디터 성격"
      ],
      [
       "균형 매트릭스(Balanced Matrix)",
       "낮음~중간",
       "PM 과 기능 관리자가 권한 공유"
      ],
      [
       "강한 매트릭스(Strong Matrix)",
       "중간~높음",
       "전담 PM, PM 이 예산 통제 비중↑"
      ],
      [
       "프로젝트 조직(Projectized)",
       "높음~전권",
       "팀이 프로젝트에 전속, 종료 후 '돌아갈 곳' 문제"
      ]
     ]
    }
   },
   {
    "h": "OPA vs EEF — 상황형 문항의 배경 지식",
    "tb": {
     "head": [
      "구분",
      "의미",
      "예"
     ],
     "rows": [
      [
       "★OPA(조직 프로세스 자산)★",
       "조직 ★내부★의 계획·프로세스·정책·지식 — 갱신 가능",
       "템플릿·정책·절차·교훈 저장소·과거 프로젝트 파일"
      ],
      [
       "★EEF(기업 환경 요인)★",
       "PM 이 ★통제할 수 없는★ 내외부 조건",
       "법규·시장 상황·조직 문화·인프라·정치 풍토"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-8",
  "t": "개발 접근법 선택",
  "title": "개발 접근법 선택 — 예측형 · 적응형 · 하이브리드",
  "ref": "ECO 2026 II-1, Agile Practice Guide(1판 표 3-1·2판 delivery continuum), PMBOK 7 개발 접근법·생애주기 성과영역",
  "body": [
   {
    "h": "생애주기 4유형 특성",
    "tb": {
     "head": [
      "유형",
      "요구사항",
      "활동",
      "인도",
      "목표"
     ],
     "rows": [
      [
       "★예측형(Predictive)★",
       "고정(사전 확정)",
       "프로젝트 전체에 대해 1회",
       "단일 인도(마지막)",
       "★원가 관리★"
      ],
      [
       "★반복형(Iterative)★",
       "동적",
       "올바를 때까지 반복",
       "단일 인도",
       "★해결책의 정확성★"
      ],
      [
       "★증분형(Incremental)★",
       "동적",
       "증분마다 1회",
       "자주, 작게",
       "★속도★"
      ],
      [
       "★애자일(Agile)★",
       "동적",
       "올바를 때까지 반복",
       "자주, 작게",
       "★잦은 인도·피드백을 통한 고객 가치★"
      ]
     ]
    }
   },
   {
    "h": "반복형 vs 증분형 — 혼동 주의",
    "li": [
     "★반복형★: 미완성 결과에 대한 ★피드백으로 다듬는다★(프로토타입 → 개선).",
     "★증분형★: 완성된 ★기능 조각★을 차례로 더해 인도한다.",
     "★애자일 = 반복형 + 증분형★ — 반복하며 다듬고, 자주 작게 인도한다.",
     "적응형(Adaptive)은 반복·증분·애자일을 포괄하는 말로 쓰인다."
    ]
   },
   {
    "h": "선택 근거 — 어떤 상황에 무엇을",
    "tb": {
     "head": [
      "요인",
      "예측형 쪽",
      "적응형 쪽"
     ],
     "rows": [
      [
       "요구사항 확실성",
       "명확·안정",
       "불명확·자주 변경"
      ],
      [
       "기술 불확실성",
       "검증된 기술",
       "새 기술·혁신"
      ],
      [
       "변경 비용",
       "후반 변경 비용 매우 큼(건축·하드웨어)",
       "변경 비용 낮음(소프트웨어)"
      ],
      [
       "인도 옵션",
       "완성 후 한 번에만 가치",
       "부분 인도로도 가치"
      ],
      [
       "이해관계자 참여",
       "간헐적 검토로 충분",
       "★고객·PO 의 잦은 참여 가능★"
      ],
      [
       "규제·안전",
       "문서·승인 단계 엄격",
       "규제 산업도 ★하이브리드로 적용 가능★"
      ]
     ]
    }
   },
   {
    "h": "하이브리드와 테일러링",
    "li": [
     "★하이브리드(Hybrid)★: 예측형과 적응형 요소의 조합 — 예) 하드웨어·인허가는 예측형, 소프트웨어 UI 는 애자일.",
     "APG 2판: 하이브리드를 이분법이 아닌 ★delivery continuum(인도 연속체)★ 위의 위치로 본다.",
     "★테일러링(Tailoring)★: 접근법·거버넌스·프로세스·산출물을 프로젝트 맥락(복잡도·규모·불확실성·조직 문화)에 맞게 조정하는 것 — ECO II-1 '프로젝트 요구·복잡도·규모 평가 → 개발 접근법 권고'.",
     "스테이시 매트릭스(Stacey matrix): ★요구사항 합의★ × ★기술 확실성★ — 둘 다 높으면 단순(예측형 적합), 둘 중 하나 이상 불확실해 '복잡' 영역이면 적응형이 유리. 둘 다 매우 낮으면 혼돈(chaos)."
    ]
   },
   {
    "h": "상황형 문제에서의 접근법 판단",
    "li": [
     "PM 이 ★일방적으로 정하지 않는다★ — 요구·위험·조직 문화를 평가해 ★권고(recommend)★하고 이해관계자와 합의.",
     "스폰서가 맞지 않는 접근법을 고집하면 ★트레이드오프를 설명★하고 데이터로 설득.",
     "진행 중 변동성이 큰 부분이 드러나면 해당 부분만 적응형으로 바꾸는 ★하이브리드 전환★을 검토(거버넌스 승인 거쳐)."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "공동 비전·팀 리딩",
  "title": "공동 비전 수립과 팀 리딩 — 서번트 리더의 일",
  "ref": "ECO 2026 I-1 Develop a common vision · I-3 Lead the project team",
  "body": [
   {
    "h": "공동 비전(Common vision) — ECO 2026 신설 Task",
    "li": [
     "★I-1 Develop a common vision★ — 2026 ECO 에서 People 도메인 첫 Task 로 새로 들어왔다.",
     "Enabler 4개: ①핵심 이해관계자와 ★비전 공유 보장★ ②비전 ★전파(Promote)★ ③비전 ★최신화(Keep current)★ ④비전 오해의 ★근본원인 분석(root cause)★.",
     "비전은 착수 때 한 번 정하고 끝나는 문서가 아니다 — 사업 목표·외부환경이 바뀌면 ★갱신 후 다시 공유★한다.",
     "상황형 정답 패턴: 팀이 방향을 다르게 이해함 → ★오해의 원인 파악 → 이해관계자·팀과 비전 재정렬 워크숍★. '지시서 배포'·'즉시 에스컬레이션'은 오답 쪽."
    ]
   },
   {
    "h": "I-3 Lead the project team — Enabler 7개",
    "li": [
     "팀 수준의 ★기대 설정(Establish expectations)★ · 팀 ★권한위임(Empower)★ · ★문제 해결(Solve problems)★ · ★팀의 목소리 대변(Represent the voice of the team)★.",
     "팀의 다양한 경험·기술·관점 ★지원(Support diversity)★ · 상황에 맞는 ★리더십 스타일 결정★ · 팀 내 ★역할과 책임(R&R) 명확화★.",
     "★팀의 목소리 대변★ — 팀이 외부(경영진·기능부서)에 직접 말하기 어려운 사안을 PM 이 대변하고 장애를 걷어낸다."
    ]
   },
   {
    "h": "리더십 스타일 비교",
    "tb": {
     "head": [
      "스타일(English)",
      "핵심",
      "적합 상황"
     ],
     "rows": [
      [
       "서번트(Servant)",
       "★섬김 먼저★ — 장애 제거·팀 성장 지원·코칭",
       "애자일·자기조직화 팀(PMI 기본 지향)"
      ],
      [
       "변혁적(Transformational)",
       "비전·영감으로 기대 이상 성과 유도(이상적 영향·영감적 동기·지적 자극·개별 배려)",
       "변화·혁신 추진"
      ],
      [
       "거래적(Transactional)",
       "목표 달성 ↔ ★보상★ 교환, 예외 관리(Management by exception)",
       "명확한 절차·정형 업무"
      ],
      [
       "상황적(Situational)",
       "팀원 ★역량·의지(성숙도)★ 에 따라 스타일 전환",
       "구성원 수준이 제각각일 때"
      ],
      [
       "지시형·독재형(Directive/Autocratic)",
       "리더가 결정하고 지시",
       "위기·안전·법규 긴급 결정"
      ],
      [
       "자유방임(Laissez-faire)",
       "개입 최소, 팀에 전적으로 맡김",
       "고숙련 전문가 팀(남용 시 방치)"
      ]
     ]
    }
   },
   {
    "h": "Hersey–Blanchard 상황적 리더십(Situational Leadership)",
    "tb": {
     "head": [
      "구성원 상태",
      "스타일",
      "리더 행동"
     ],
     "rows": [
      [
       "역량 낮음 · 의지 높음(열정적 초보)",
       "S1 지시형(Directing/Telling)",
       "구체적 지시·밀착 감독"
      ],
      [
       "역량 일부 · 의지 낮음",
       "S2 코칭형(Coaching/Selling)",
       "지시 + 설명·지원"
      ],
      [
       "역량 높음 · 의지 변동",
       "S3 지원형(Supporting/Participating)",
       "함께 결정, 격려 중심"
      ],
      [
       "역량 높음 · 의지 높음",
       "S4 위임형(Delegating)",
       "권한·책임 이양"
      ]
     ]
    }
   },
   {
    "h": "서번트 리더(Servant leader)의 행동 목록",
    "li": [
     "★장애(impediment) 제거★ — 팀이 스스로 못 푸는 조직·외부 장애를 PM 이 해결(2026 ECO 에선 장애 제거 Task 가 Business Environment III-4 로 이동, 그러나 People 의 리더십 맥락에서도 계속 출제).",
     "팀을 ★외부 방해로부터 보호★, ★자기조직화★ 존중, ★코칭·멘토링★ 으로 역량 성장.",
     "팀이 결정할 수 있는 일은 ★팀에 위임★ — 매번 PM 이 결정해 주면 의존이 굳는다.",
     "역할·책임 정리: ★RACI★(Responsible·Accountable·Consulted·Informed) — 활동마다 ★A 는 정확히 1명★."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "팀 개발·동기부여",
  "title": "팀 개발 단계와 동기부여 이론",
  "ref": "ECO 2026 I-3 · 보조 토픽(2021 ECO 팀 구성·교육 흡수)",
  "body": [
   {
    "h": "Tuckman 팀 개발 5단계(Tuckman ladder)",
    "tb": {
     "head": [
      "단계",
      "특징",
      "PM 행동"
     ],
     "rows": [
      [
       "① 형성기(Forming)",
       "서로 낯섦, 예의 바름, 역할 불명확",
       "목표·역할 소개, 팀 헌장 착수"
      ],
      [
       "② 격동기(Storming)",
       "작업 방식·권한 두고 ★갈등 표면화★",
       "갈등을 드러내 논의, 그라운드룰 합의"
      ],
      [
       "③ 규범기(Norming)",
       "규칙·신뢰 형성, 협업 습관",
       "코칭 줄이고 지원으로 전환"
      ],
      [
       "④ 수행기(Performing)",
       "자율·고성과 상호의존",
       "위임, 장애 제거에 집중"
      ],
      [
       "⑤ 해산기(Adjourning)",
       "작업 완료·팀 해체, 상실감",
       "성과 인정·교훈 정리·재배치"
      ]
     ]
    }
   },
   {
    "h": "Tuckman 주의점",
    "li": [
     "Tuckman(1965) 은 4단계, ★해산기(Adjourning)★ 는 1977년 Tuckman·Jensen 이 추가했다.",
     "단계는 ★비가역이 아니다★ — 팀원이 바뀌거나 큰 변화가 생기면 이전 단계(형성·격동)로 ★되돌아갈 수 있다★.",
     "단계를 건너뛰거나 특정 단계에 머무를 수 있다 — '모든 팀이 반드시 수행기에 도달'은 함정."
    ]
   },
   {
    "h": "동기부여 이론 — 학자·이론 짝",
    "tb": {
     "head": [
      "이론(학자)",
      "핵심",
      "시험 포인트"
     ],
     "rows": [
      [
       "욕구 5단계(Maslow)",
       "생리→안전→사회(소속)→존중→자아실현",
       "하위 욕구 충족 후 상위 욕구가 동기"
      ],
      [
       "2요인(Herzberg)",
       "★위생요인★(급여·근무조건·정책·감독) vs ★동기요인★(성취·인정·책임·성장·업무 자체)",
       "위생요인은 ★불만 제거★만, 동기는 못 만든다"
      ],
      [
       "X·Y 이론(McGregor)",
       "X: 사람은 일을 싫어함 → 감독 필요 / Y: 자발적·책임 추구",
       "애자일·서번트 = Y 관점"
      ],
      [
       "기대이론(Vroom)",
       "★기대(노력→성과)·수단성(성과→보상)·유의성(보상 가치)★",
       "셋 중 하나라도 0이면 동기 0"
      ],
      [
       "성취동기(McClelland)",
       "★성취·친교·권력★ 욕구",
       "성취형 = 적정 난이도 목표 + 피드백"
      ],
      [
       "Z 이론(Ouchi)",
       "일본식 장기 고용·집단 의사결정·충성",
       "X·Y 와 학자 바꿔치기 함정"
      ]
     ]
    }
   },
   {
    "h": "고성과 팀 도구",
    "li": [
     "★팀 헌장(Team charter)★ — 팀 가치·업무 합의·★그라운드룰(Ground rules)★·의사결정 방식·갈등 처리 절차를 ★팀이 함께★ 작성.",
     "★심리적 안정감(Psychological safety)★ — 실수·반대 의견을 말해도 처벌받지 않는다는 믿음(Edmondson). Agile Practice Guide 2판이 다루는 주제.",
     "★코칭(Coaching)★ = 특정 역량·성과 향상을 위한 단기·과제 중심 / ★멘토링(Mentoring)★ = 경험자가 장기적 경력·성장을 돕는 관계.",
     "인정과 보상(Recognition & rewards) — 개인 경쟁(승자독식)보다 ★팀 성과 기반 인정★이 협업을 해치지 않는다."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "갈등 관리·협상",
  "title": "갈등 관리 5기법과 협상",
  "ref": "ECO 2026 I-2 Manage conflicts · II-5 협상 Enabler",
  "body": [
   {
    "h": "I-2 Enabler 흐름(순서로 외우기)",
    "li": [
     "① 갈등 ★원천 식별★ → ② 갈등 ★맥락 분석★ → ③ ★합의된 해결전략 실행★ → ④ 갈등관리 원칙을 팀·외부 이해관계자와 ★공유★ → ⑤ 공통 ★그라운드룰 준수 환경★ 조성 → ⑥ 그라운드룰 ★위반 관리·시정★.",
     "갈등은 ★불가피★하며 잘 관리하면 아이디어·혁신의 원천 — 무조건 제거 대상이 아니다.",
     "1차 원칙: 갈등은 ★당사자가 먼저★ 해결하도록 하고, 해결 못하면 PM 이 개입, 그래도 안 되면 공식 절차(징계 포함)."
    ]
   },
   {
    "h": "갈등 해결 5기법(PMBOK 6판 용어 · Thomas-Kilmann 대응)",
    "tb": {
     "head": [
      "기법(English)",
      "TKI 대응",
      "결과·특징",
      "적합 상황"
     ],
     "rows": [
      [
       "철수/회피(Withdraw/Avoid)",
       "Avoiding",
       "후퇴·연기, 해결 없음(Lose-Lose)",
       "냉각기 필요·사안이 사소할 때"
      ],
      [
       "완화/수용(Smooth/Accommodate)",
       "Accommodating",
       "★공통점 강조★·차이 축소, 관계 유지",
       "관계가 사안보다 중요할 때"
      ],
      [
       "타협/화해(Compromise/Reconcile)",
       "Compromising",
       "★양측 일부 양보★(Lose-Lose 성격)",
       "힘이 대등·임시 해결"
      ],
      [
       "강요/지시(Force/Direct)",
       "Competing",
       "한쪽 관점 관철(Win-Lose)",
       "★긴급·안전·법규★ 결정"
      ],
      [
       "협업/문제해결(Collaborate/Problem solve)",
       "Collaborating",
       "★다양한 관점 통합 → 합의·근본 해결(Win-Win)★",
       "시간·신뢰가 있을 때 — PMI 기본 지향"
      ]
     ]
    }
   },
   {
    "h": "갈등 상황형 정답 패턴",
    "li": [
     "당사자와 ★직접·사적으로(가능하면 대면)★ 만나 근거와 원인을 듣는다 → 데이터·목표 기준으로 공동 해결안.",
     "공개 회의에서 한쪽 편을 들거나, 즉시 상급자에게 보고하거나, '시간이 해결' 식 회피는 ★오답★.",
     "단, 안전·법규 위반 등 ★긴급 상황★ 에서는 강요/지시가 정답이 될 수 있다 — '협업이 항상 정답'은 함정."
    ]
   },
   {
    "h": "협상(Negotiation)",
    "li": [
     "★BATNA(Best Alternative To a Negotiated Agreement)★ — 협상이 결렬될 때 택할 수 있는 최선의 대안. BATNA 가 강할수록 협상력이 크다(Fisher·Ury 『Getting to Yes』).",
     "★ZOPA(Zone Of Possible Agreement)★ — 양측의 수용 가능 범위가 겹치는 구간.",
     "원칙적 협상 4원칙: ①사람과 문제 분리 ②★입장(position)이 아니라 이해관계(interest)★ 에 초점 ③상호 이익 대안 개발 ④객관적 기준 사용.",
     "PM 의 협상 대상: 기능 관리자와의 ★자원 협상★, 공급사와의 ★계약 협상(II-5)★, 이해관계자 간 기대 조정. 목표는 ★Win-Win★과 관계 유지."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "이해관계자 식별·참여",
  "title": "이해관계자 식별·분석·참여",
  "ref": "ECO 2026 I-4 Engage stakeholders",
  "body": [
   {
    "h": "I-4 Enabler",
    "li": [
     "이해관계자 ★식별(Identify)★ → ★분석(Analyze)★ → 요구에 맞춘 ★의사소통 분석·맞춤(tailor)★ → ★참여계획 실행★ → 요구·기대·목표 ★정렬 최적화★ → ★신뢰 구축·영향력 행사★.",
     "식별은 ★착수에 한 번이 아니라 프로젝트 전 기간 지속★ — 늦게 발견된 이해관계자(법무·규제기관 등)는 즉시 등록부에 추가하고 분석한다.",
     "★이해관계자 등록부(Stakeholder register)★ — 식별 정보·평가(요구·기대·영향)·분류. 민감 정보가 있어 공개 범위를 조절한다.",
     "★이해관계자 참여계획(Stakeholder engagement plan)★ — 참여를 끌어낼 전략·행동(무엇을 언제 어떻게)."
    ]
   },
   {
    "h": "분석 도구",
    "tb": {
     "head": [
      "도구(English)",
      "축·속성",
      "사용"
     ],
     "rows": [
      [
       "권력/관심 그리드(Power/Interest grid)",
       "권력 × 관심",
       "높음·높음 ★밀접 관리★ / 권력↑관심↓ ★만족 유지★ / 권력↓관심↑ ★정보 제공★ / 둘 다 낮음 ★모니터링★"
      ],
      [
       "권력/영향 · 영향/효과 그리드",
       "권력×영향, 영향×효과",
       "그리드 변형 — 축 이름 바꿔치기 주의"
      ],
      [
       "현저성 모형(Salience model)",
       "★권력·긴급성·정당성★(Power·Urgency·Legitimacy)",
       "세 속성을 모두 가진 '결정적(definitive)' 이해관계자 우선"
      ],
      [
       "영향 방향(Directions of influence)",
       "상향·하향·외향·측면",
       "경영진·팀·외부·동료 PM"
      ],
      [
       "이해관계자 큐브(Stakeholder cube)",
       "그리드 요소를 3차원으로 결합",
       "복합 분석"
      ]
     ]
    }
   },
   {
    "h": "참여평가매트릭스(Stakeholder Engagement Assessment Matrix)",
    "li": [
     "참여 수준 5단계: ★인지 못함(Unaware) → 저항(Resistant) → 중립(Neutral) → 지지(Supportive) → 주도(Leading)★.",
     "★C = 현재(Current)★, ★D = 원하는(Desired)★ 수준 — C 와 D 의 ★격차★를 줄이는 전략을 참여계획에 반영.",
     "저항 이해관계자 → 배제·압박이 아니라 ★직접 만나 우려를 듣고★ 관심사를 반영(신뢰 구축)."
    ]
   },
   {
    "h": "애자일 맥락의 이해관계자 참여",
    "li": [
     "제품 책임자(PO)가 이해관계자 관점을 대변하되, ★스프린트 리뷰·데모★ 에 실제 사용자·고객을 참여시켜 ★짧은 피드백 루프★ 를 만든다.",
     "정보 방열기·투명한 백로그로 이해관계자가 스스로 진행 상황을 확인(Pull).",
     "이해관계자가 팀에 직접 작업을 지시하면 → ★요청 경로(백로그·PO 우선순위)를 설명★하는 것이 정답 패턴."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "기대 정렬·고객 기대 관리",
  "title": "이해관계자 기대 정렬과 고객 기대 관리",
  "ref": "ECO 2026 I-5 Align stakeholder expectations · I-6 Manage stakeholder expectations",
  "body": [
   {
    "h": "I-5 기대 정렬(Align) — Enabler",
    "li": [
     "이해관계자 ★분류(Categorize)★ → ★기대 식별★ → 기대 정렬을 위한 ★논의 퍼실리테이션★ → ★멘토링 기회 조직·실행★.",
     "상충 기대(예: 출시일 vs 추가 시험) → 권한 높은 쪽을 따르거나 둘 다 수용하는 것이 아니라 ★당사자를 모아 목표·가치 기준으로 트레이드오프를 합의★.",
     "★멘토링(Mentoring)★ 이 I-5 Enabler 에 들어 있다 — 경험이 적은 PO·팀원이 이해관계자 조율 역량을 익히도록 PM 이 멘토링 기회를 만든다."
    ]
   },
   {
    "h": "I-6 고객 기대 관리(Manage) — Enabler",
    "li": [
     "★내부·외부 고객★ 기대 식별 → 성과(outcome)를 기대에 ★맞추고 유지★ → 고객 ★만족도·기대 모니터링 및 대응★.",
     "내부 고객 = 조직 안에서 산출물을 쓰는 부서(운영팀·현업). 외부 고객 = 조직 밖 구매자·사용자.",
     "ECO 2026 은 프로젝트 성공을 ★일정·예산·범위 준수 → 이해관계자 가치·원하는 성과 달성★으로 넓혔다 — 지표가 모두 녹색이어도 만족도가 떨어지면 ★원인 분석·대응★ 대상."
    ]
   },
   {
    "h": "기대 관리 행동 비교",
    "tb": {
     "head": [
      "상황",
      "정답 쪽 행동",
      "오답 쪽 행동"
     ],
     "rows": [
      [
       "데모 후 '기대와 다르다'",
       "기대와 인수 기준 차이 구체화 → 백로그·변경 경로로 합의",
       "요구 충족했으니 인수 서명 요구 / 즉시 재작업"
      ],
      [
       "이해관계자가 팀에 직접 작업 지시",
       "직접 만나 요청 경로·역할 설명",
       "팀에 무시 지시 / 작으니 그냥 반영"
      ],
      [
       "상충 요구 두 부서",
       "공동 세션에서 목표 기준 트레이드오프",
       "권한 높은 쪽 수용 / 범위 확대로 모두 수용"
      ],
      [
       "낙관적 일정 압박",
       "가정·제약·불확실성 투명 공유",
       "일단 약속 후 실행 중 조정"
      ]
     ]
    }
   },
   {
    "h": "함정 포인트",
    "li": [
     "기대는 ★변한다★ — 착수 때 확정되는 고정값이 아니므로 지속 모니터링.",
     "'고객이 원하는 것은 무엇이든 즉시 반영'은 ★골드 플레이팅·범위 크리프★ — 변경통제(예측형) 또는 백로그(애자일) 경로로."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-6",
  "t": "지식 이전",
  "title": "지식 이전 — 암묵지·형식지·교훈",
  "ref": "ECO 2026 I-7 Help ensure knowledge transfer",
  "body": [
   {
    "h": "I-7 Enabler (2026 신설 키워드)",
    "li": [
     "프로젝트에 ★결정적인 지식 식별★ → 지식 ★수집(Gather)★ → 지식 이전을 위한 ★환경 조성(Foster an environment)★.",
     "지식이 특정 개인에게 몰린 상태(핵심 인력 퇴사·이동)는 ★지식 이전 위험★ — 퇴사 직전 문서 한 부가 아니라 ★미리★ 페어 작업·잡 섀도잉·문서화로 분산."
    ]
   },
   {
    "h": "암묵지 vs 형식지",
    "tb": {
     "head": [
      "구분",
      "암묵지(Tacit knowledge)",
      "형식지(Explicit knowledge)"
     ],
     "rows": [
      [
       "성격",
       "경험·감각·노하우·신념, 말로 표현 어려움",
       "문서·데이터·그림으로 표현 가능"
      ],
      [
       "예",
       "숙련 엔지니어의 장애 대응 감각",
       "교훈 등록부·매뉴얼·설계서·런북"
      ],
      [
       "이전 방법",
       "★네트워킹·스토리텔링·잡 섀도잉·페어링·워크숍·멘토링★",
       "★지식 저장소·문서·교훈 등록부★"
      ],
      [
       "주의",
       "문서만으로는 이전되지 않는다",
       "맥락 없이 쓰면 오해 — 해석 필요"
      ]
     ]
    }
   },
   {
    "h": "SECI 모형(Nonaka) — 지식 전환 4가지",
    "tb": {
     "head": [
      "전환",
      "이름",
      "예"
     ],
     "rows": [
      [
       "암묵 → 암묵",
       "사회화(Socialization)",
       "도제·옆자리 관찰"
      ],
      [
       "암묵 → 형식",
       "★표출화(Externalization)★",
       "노하우를 문서·모델로 작성"
      ],
      [
       "형식 → 형식",
       "연결화(Combination)",
       "문서 통합·지식베이스 구축"
      ],
      [
       "형식 → 암묵",
       "내면화(Internalization)",
       "매뉴얼을 실습하며 체득"
      ]
     ]
    }
   },
   {
    "h": "교훈(Lessons learned)과 OPA",
    "li": [
     "★교훈 등록부(Lessons learned register)★ 는 ★프로젝트 전 기간 수시로★ 기록 — 종료 때 한꺼번에 적는 것이 아니다.",
     "단계·프로젝트 종료 시 교훈을 ★조직 프로세스 자산(OPA)★ 의 교훈 저장소로 이관(III-6 지속적 개선과 연결).",
     "애자일 ★회고(Retrospective)★ 는 반복마다 교훈을 만들고, 개선 항목을 ★백로그 실행 항목★으로 넣어 실천을 확인한다.",
     "목적은 ★학습·개선★ — 책임자 문책용으로 쓰면 아무도 사실을 말하지 않는다(심리적 안정감).",
     "운영 이관(II-10 Validate readiness for transition) 전 운영팀에 ★교육·공동 운영 기간·런북★ 으로 지식 이전."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-7",
  "t": "의사소통 계획·관리",
  "title": "의사소통 계획·관리와 보고",
  "ref": "ECO 2026 I-8 Plan and manage communication",
  "body": [
   {
    "h": "I-8 Enabler",
    "li": [
     "의사소통 ★전략 정의★ · ★투명성·협업 촉진★ · ★피드백 루프 구축★ · ★보고 요구사항 이해★ · 스폰서·이해관계자 기대에 맞춘 ★보고서 작성★ · ★보고·거버넌스 프로세스 지원★.",
     "★의사소통 관리계획(Communications management plan)★ — 누구에게·무엇을·언제·어떤 방법·누가 전달할지. 정보 문제가 생기면 ★먼저 이 계획과 이해관계자 정보 요구를 검토★."
    ]
   },
   {
    "h": "의사소통 채널 공식",
    "li": [
     "★채널 수 = n(n − 1) / 2★ (n = PM 포함 인원).",
     "예: 8명 → 8×7/2 = ★28★. 10명 → 45, 15명 → 105.",
     "함정: '인원이 10명에서 15명으로 늘면 ★추가된★ 채널 수' → 105 − 45 = ★60★ (105 가 아니다)."
    ]
   },
   {
    "h": "의사소통 방법(Communication methods)",
    "tb": {
     "head": [
      "방법",
      "특징",
      "예"
     ],
     "rows": [
      [
       "상호작용(Interactive)",
       "둘 이상 실시간 다방향 — ★오해 해소에 가장 효과적★",
       "회의·화상회의·전화"
      ],
      [
       "푸시(Push)",
       "특정 수신자에게 발송, 수신·이해 보장 못함",
       "이메일·메모·보고서 발송"
      ],
      [
       "풀(Pull)",
       "★대량 정보·다수 수신자★, 필요할 때 스스로 접근",
       "인트라넷·지식저장소·위키·정보 방열기"
      ]
     ]
    }
   },
   {
    "h": "의사소통 모델과 매체",
    "li": [
     "송신자-수신자 모델: 송신자가 ★부호화(Encode)★ → 매체로 전송 → ★잡음(Noise)★ → 수신자가 ★해독(Decode)★ → ★확인(Acknowledge)★ → ★피드백/응답(Feedback)★.",
     "확인(Acknowledge)은 '받았다'일 뿐 '동의'가 아니다 — 함정.",
     "분산·다중 시간대 팀: ★비동기 채널(공용 보드·기록)★ + 겹치는 핵심 시간대 회의 + 합의된 응답 규칙.",
     "★정보 방열기(Information radiator)★ — 번다운·태스크보드처럼 누구나 볼 수 있는 대형 시각 표시물(투명성, Pull)."
    ]
   },
   {
    "h": "보고와 거버넌스 지원",
    "li": [
     "스폰서·경영진 → ★핵심 지표 요약(대시보드)★ / 팀 → 상세 작업 정보 — ★수신자에 맞게 테일러링★.",
     "PMO 표준 보고와 애자일 지표 충돌 → 거부가 아니라 ★팀 지표(번업·벨로시티)를 PMO 형식에 매핑★.",
     "피드백 루프는 ★짧고 지속적★(리뷰·회고·주기적 설문) — 종료 후 설문 한 번으로는 늦다."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-8",
  "t": "의사결정·영향력",
  "title": "의사결정·권력·감성지능",
  "ref": "ECO 2026 I-3 Solve problems · 보조 토픽(2021 ECO 감성지능·영향력)",
  "body": [
   {
    "h": "집단 의사결정 기법",
    "tb": {
     "head": [
      "기법(English)",
      "방식",
      "포인트"
     ],
     "rows": [
      [
       "만장일치(Unanimity)",
       "전원 동의",
       "시간 소요↑, 몰입↑"
      ],
      [
       "다수결(Majority)",
       "★과반(50% 초과)★ 지지",
       ""
      ],
      [
       "최다득표(Plurality)",
       "과반이 안 돼도 ★가장 많은 표★ 를 얻은 안",
       "다수결과 바꿔치기 함정"
      ],
      [
       "독재적(Autocratic)",
       "한 사람이 결정",
       "긴급 상황"
      ],
      [
       "델파이(Delphi)",
       "★익명★ 전문가 의견을 여러 차례 취합·피드백",
       "권위·집단사고 영향 차단"
      ],
      [
       "Fist of Five",
       "손가락 0~5로 지지 정도 표시",
       "일반적으로 ★2개 이하★ 면 우려를 듣고 재논의"
      ],
      [
       "Roman voting",
       "엄지 위=지지 · 옆=수용 가능 · 아래=반대",
       "반대자는 의견을 말할 기회"
      ],
      [
       "다기준 의사결정 분석(MCDA)",
       "합의된 기준 × 가중치로 대안 점수화",
       "도구·공급사 선정"
      ]
     ]
    }
   },
   {
    "h": "권력(Power)의 유형 — French & Raven 5가지 + α",
    "tb": {
     "head": [
      "유형",
      "근거",
      "PM 관점"
     ],
     "rows": [
      [
       "합법적(Legitimate/Formal)",
       "공식 직위·권한",
       "약한 매트릭스에선 작음"
      ],
      [
       "보상적(Reward)",
       "보상 제공 능력",
       "매트릭스 PM 은 제한적"
      ],
      [
       "강압적(Coercive/Punitive)",
       "처벌·불이익",
       "최후 수단, 관계 훼손"
      ],
      [
       "전문가(Expert)",
       "★지식·기술★",
       "PM 이 키울 수 있는 핵심 권력"
      ],
      [
       "준거적(Referent)",
       "★존경·호감·신뢰★",
       "관계 기반 영향력"
      ],
      [
       "정보적·설득적·관계적 등",
       "정보 통제·논증·네트워크",
       "PMBOK 6판이 추가로 열거[확인필요: 8판 표기]"
      ]
     ]
    }
   },
   {
    "h": "감성지능(Emotional Intelligence, EI) — Goleman 계열",
    "li": [
     "★자기 인식(Self-awareness)★ · ★자기 관리/조절(Self-management)★ · ★사회적 인식/공감(Social awareness)★ · ★관계 관리/사회적 기술(Social skills)★.",
     "기술적 전문성·IQ 는 EI 구성요소가 아니다 — 보기 바꿔치기 함정.",
     "약한 매트릭스에서 공식 권한이 없을 때 → ★관계·신뢰·전문성·상호이익★ 기반 영향력이 정답 패턴."
    ]
   },
   {
    "h": "문제 해결 흐름(I-3 Solve problems)",
    "li": [
     "문제 정의 → ★근본원인 분석(5 Whys·피시본)★ → 대안 도출 → 기준에 따라 선택 → 실행 → 효과 확인.",
     "팀이 해결할 수 있는 문제는 팀이 해결하도록 ★퍼실리테이션★ — PM 독단 결정은 자기조직화를 해친다.",
     "PM 권한·임계치를 넘을 때만 에스컬레이션 — 그때도 ★분석과 대안을 갖고★ 간다."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "통합 — 헌장·관리계획서",
  "title": "프로젝트 헌장·통합 관리계획서·개발 접근법 선택",
  "ref": "ECO 2026 II-1 · PMBOK 8 통합/Governance",
  "body": [
   {
    "h": "프로젝트 헌장(Project Charter)",
    "li": [
     "★스폰서(또는 착수자)가 발행★하여 프로젝트의 존재를 공식 승인하고 ★PM을 임명·권한 부여★하는 문서.",
     "담는 내용 — 목적·측정 가능한 목표·성공 기준, 상위 수준 요구사항·위험, 요약 마일스톤 일정, 사전 승인된 재무 자원, 핵심 이해관계자, 종료 기준, 스폰서 이름·권한.",
     "입력은 ★비즈니스 케이스(Business Case)★와 ★편익관리계획서(Benefits Management Plan)★, 협약(Agreements), 기업환경요인(EEF)·조직프로세스자산(OPA).",
     "PM은 가능하면 ★헌장 작성 단계부터★ 참여하는 것이 바람직하다 — 다만 ★서명·발행 주체는 PM이 아니다★.",
     "헌장이 없는데 작업 지시가 내려오면 → 먼저 스폰서와 ★헌장(권한) 확보★가 우선."
    ]
   },
   {
    "h": "가정(Assumption) vs 제약(Constraint)",
    "li": [
     "★가정★ — 증거 없이 참으로 간주한 사항(예: 공급사가 3월에 납품한다). 틀릴 수 있으므로 ★가정 기록부(Assumption Log)★로 추적하고 위험으로 전환될 수 있다.",
     "★제약★ — 선택지를 제한하는 고정 조건(예: 납기 12월 31일, 예산 상한, 규제).",
     "헌장 단계에서는 상위 수준의 가정·제약을 기록하고, 계획 단계에서 구체화한다."
    ]
   },
   {
    "h": "통합 프로젝트 관리계획서(Project Management Plan)",
    "li": [
     "모든 ★보조 관리계획서(subsidiary plans)★ + ★기준선(baselines)★ + 기타 구성요소(변경관리계획·형상관리계획·성과측정기준선·개발접근법·생애주기 설명)를 통합한 문서.",
     "★기준선 3종★ — 범위 기준선 · 일정 기준선 · 원가 기준선. 셋을 통합한 것이 ★성과측정기준선(PMB)★.",
     "기준선은 승인 후 ★공식 변경통제를 거쳐야만★ 바뀐다(변경통제 절차는 Business Environment III-3 에서 상세).",
     "ECO II-1 Enabler — 프로젝트 필요·복잡도·규모 평가 → 개발 접근법 권고 → 핵심 정보요구(예: ★지속가능성★) 결정 → 통합계획 작성·유지 → 의존성·공백·지속적 비즈니스 가치 검토."
    ]
   },
   {
    "tb": {
     "head": [
      "구분",
      "프로젝트 헌장",
      "프로젝트 관리계획서"
     ],
     "rows": [
      [
       "질문",
       "★왜·무엇을★ 하는가 + 누가 권한을 갖는가",
       "★어떻게★ 실행·감시·통제·종료하는가"
      ],
      [
       "발행·승인",
       "스폰서/착수자",
       "PM이 팀과 작성 → 핵심 이해관계자 승인"
      ],
      [
       "상세도",
       "상위 수준(high-level)",
       "상세 · 점진적 구체화"
      ],
      [
       "변경",
       "거의 바뀌지 않음(바뀌면 프로젝트 정당성 재검토)",
       "변경통제로 갱신"
      ]
     ]
    }
   },
   {
    "tb": {
     "head": [
      "개발 접근법",
      "적합 조건",
      "특징"
     ],
     "rows": [
      [
       "예측형(Predictive)",
       "요구사항 안정·기술 확실·규제 문서화 요구",
       "사전 상세계획, 기준선 통제, 단계별 인도"
      ],
      [
       "적응형/애자일(Adaptive)",
       "요구사항 불확실·잦은 피드백 필요",
       "반복·증분, 백로그, 짧은 주기 인도"
      ],
      [
       "하이브리드(Hybrid)",
       "일부는 확정, 일부는 탐색",
       "APG 2판 — 이분법이 아닌 ★연속체(continuum)★"
      ]
     ]
    }
   },
   {
    "h": "테일러링(Tailoring)과 적합성 판단",
    "li": [
     "접근법은 ★조직 문화·팀 역량·요구사항 안정성·인도 빈도·위험·규제★ 등을 평가해 고른다(애자일 실무가이드의 ★적합성 필터(Suitability Filter)★가 대표 도구).",
     "★함정★ — \"PMI는 항상 애자일을 권한다\" ✗. 정답은 '상황에 맞게 테일러링'."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "범위 관리",
  "title": "요구사항 수집·범위 기술서·WBS·범위 확인/통제",
  "ref": "ECO 2026 II-2 · PMBOK 8 Scope",
  "body": [
   {
    "h": "범위 관리 흐름(예측형)",
    "li": [
     "범위관리계획 + 요구사항관리계획 → ★요구사항 수집(Collect Requirements)★ → ★범위 정의(Define Scope)★ → ★WBS 작성(Create WBS)★ → ★범위 확인(Validate Scope)★ / ★범위 통제(Control Scope)★.",
     "★제품 범위★(제품의 기능·특성) vs ★프로젝트 범위★(그 제품을 인도하기 위해 수행할 작업). 제품 범위는 요구사항 대비, 프로젝트 범위는 관리계획 대비로 완료를 측정한다.",
     "ECO II-2 Enabler — 범위 정의 · ★이해관계자 범위 합의 확보★ · 범위 분할(Break down scope)."
    ]
   },
   {
    "h": "요구사항 수집 기법",
    "li": [
     "데이터 수집 — 인터뷰, 포커스 그룹, 설문, 벤치마킹, ★브레인스토밍★.",
     "★촉진 워크숍(Facilitated Workshop)★ — 부서 간 요구를 한자리에서 조정(예: JAD, QFD). 이견 해소·신뢰 형성에 효과적.",
     "★명목집단기법(Nominal Group Technique)★ — 브레인스토밍 + ★투표로 순위★ 결정. ★친화도(Affinity Diagram)★ — 아이디어를 그룹으로 분류. ★마인드맵★ — 아이디어 연결.",
     "의사결정 — 만장일치 · 과반(majority, 50% 초과) · ★상대다수(plurality, 최다 득표)★ · 독단(autocratic).",
     "★프로토타입★ — 실물 모형으로 조기 피드백. ★상황도(Context Diagram)★ — 시스템과 외부 행위자의 상호작용.",
     "산출 — 요구사항 문서, ★요구사항 추적 매트릭스(RTM)★: 요구사항을 비즈니스 목표·WBS 산출물·테스트까지 연결하여 ★누락·금도금(gold plating) 방지★."
    ]
   },
   {
    "h": "프로젝트 범위 기술서(Project Scope Statement)",
    "li": [
     "제품 범위 설명 · ★인도물(deliverables)★ · ★인수 기준(acceptance criteria)★ · ★제외 사항(exclusions)★.",
     "★제외 사항★ 명시가 범위 분쟁·범위 추가(scope creep) 예방의 핵심.",
     "헌장의 상위 수준 설명을 ★상세화★한 것이 범위 기술서."
    ]
   },
   {
    "h": "WBS(Work Breakdown Structure, 작업분류체계)",
    "li": [
     "프로젝트 전체 작업을 ★인도물 중심으로 계층 분해(decomposition)★한 것. 최하위 = ★작업 패키지(Work Package)★ — 원가·일정을 추정·관리할 수 있는 단위.",
     "★100% 규칙★ — 하위 요소의 합이 상위 요소의 작업을 빠짐없이 100% 포함(그 이상도 이하도 아님).",
     "★통제계정(Control Account)★ — 범위·원가·일정을 통합해 성과를 측정하는 관리 지점(여러 작업 패키지 포함). ★계획 패키지(Planning Package)★ — 일정 활동이 아직 정해지지 않은 통제계정 하위 요소.",
     "★WBS 사전(WBS Dictionary)★ — 각 요소의 상세 설명·책임자·마일스톤·인수 기준.",
     "★범위 기준선★ = 승인된 ★범위 기술서 + WBS + WBS 사전★.",
     "WBS에는 ★활동(activity)이 아니라 인도물·작업★이 들어간다 — 활동 분해는 일정 관리의 '활동 정의'. 먼 미래 작업은 ★연동 기획(Rolling Wave Planning)★으로 나중에 상세화."
    ]
   },
   {
    "tb": {
     "head": [
      "구분",
      "범위 확인(Validate Scope)",
      "범위 통제(Control Scope)",
      "품질 통제(Control Quality)"
     ],
     "rows": [
      [
       "핵심",
       "★고객/스폰서의 공식 인수★",
       "범위 상태 감시·기준선 변경 관리",
       "산출물 ★정확성★ 검사"
      ],
      [
       "주체",
       "고객·스폰서(외부)",
       "PM·팀",
       "품질팀(내부)"
      ],
      [
       "입력→출력",
       "검증된 인도물 → 인수된 인도물",
       "작업성과데이터 → 작업성과정보·변경요청",
       "인도물 → 검증된 인도물"
      ],
      [
       "순서",
       "품질 통제 ★이후★",
       "상시",
       "범위 확인 ★이전★"
      ]
     ]
    }
   },
   {
    "h": "범위 추가 vs 금도금",
    "li": [
     "★범위 추가(Scope Creep)★ — 통제되지 않은 범위 확장(변경통제 없이 요청을 수용).",
     "★금도금(Gold Plating)★ — 팀이 요구되지 않은 기능을 자발적으로 추가. 고객이 좋아해도 ★권장되지 않음★(위험·원가 증가, 기대 왜곡).",
     "애자일·하이브리드 맥락에서는 범위 변동을 ★제품 백로그★에 흡수하고 PO가 우선순위를 정한다."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "일정 관리",
  "title": "활동 정의·순서·기간 추정·CPM·일정 압축",
  "ref": "ECO 2026 II-8 · PMBOK 8 Schedule",
  "body": [
   {
    "h": "일정 수립 흐름(예측형)",
    "li": [
     "일정관리계획 → ★활동 정의★(작업 패키지 → 활동, 활동 목록·속성·마일스톤 목록) → ★활동 순서 배열★ → ★기간 추정★ → ★일정 개발★ → ★일정 통제★.",
     "★마일스톤(Milestone)★ = 중요한 시점·사건, ★기간 0★.",
     "ECO II-8 Enabler — 선택한 개발 접근법에 맞는 일정 준비 · 타 프로젝트·운영과 조율 · 추정(마일스톤·의존관계·스토리 포인트) · 벤치마크·과거 데이터 활용 · 기준선 설정 · 일정 변동 분석."
    ]
   },
   {
    "tb": {
     "head": [
      "PDM 관계",
      "의미",
      "예"
     ],
     "rows": [
      [
       "FS (Finish-to-Start)",
       "선행 ★완료 후★ 후행 시작 — ★가장 흔함★",
       "벽 시공 완료 → 도장 시작"
      ],
      [
       "SS (Start-to-Start)",
       "선행 시작 후 후행 시작",
       "콘크리트 타설 시작 → 표면 정리 시작"
      ],
      [
       "FF (Finish-to-Finish)",
       "선행 완료 후 후행 완료",
       "작성 완료 → 편집 완료"
      ],
      [
       "SF (Start-to-Finish)",
       "선행 시작 후 후행 완료 — ★가장 드묾★",
       "신규 시스템 가동 시작 → 구 시스템 운영 종료"
      ]
     ]
    }
   },
   {
    "h": "의존관계 유형과 Lead/Lag",
    "li": [
     "★필수(Mandatory, 하드 로직)★ — 계약·작업 본질상 불가피(기초 공사 전에 골조 불가).",
     "★임의(Discretionary, 선호·소프트 로직)★ — 모범사례·선호에 따른 순서. ★공정 중첩(fast-tracking) 시 가장 먼저 검토★되는 대상.",
     "★외부(External)★ — 프로젝트 밖 요인(정부 인허가, 공급사 납품). ★내부(Internal)★ — 팀이 통제 가능.",
     "★Lead(선도)★ — 후행 활동을 앞당김(FS −2일). ★Lag(지연)★ — 후행 활동을 늦춤(콘크리트 양생 3일 대기).",
     "★주의★ — Lead/Lag를 위해 일정 논리를 대체하지 말 것. 단순 대기도 '활동'이 아니라 Lag로 표현."
    ]
   },
   {
    "tb": {
     "head": [
      "기간·원가 추정 기법",
      "방법",
      "정확도·시점"
     ],
     "rows": [
      [
       "유사 추정(Analogous)",
       "과거 유사 프로젝트 실적 + 전문가 판단(top-down)",
       "빠르고 저렴, 정확도 낮음 — 초기"
      ],
      [
       "모수 추정(Parametric)",
       "통계적 관계(단가 × 수량, 예: 1m당 2시간)",
       "모델·데이터 품질에 따라 높을 수 있음"
      ],
      [
       "3점 추정(Three-point)",
       "낙관 O · 최빈 M · 비관 P → 삼각 (O+M+P)/3, 베타 (O+4M+P)/6",
       "불확실성 반영"
      ],
      [
       "상향식(Bottom-up)",
       "작업 패키지·활동 단위로 추정 후 합산",
       "★가장 정확★, 시간·비용 큼 — 상세 WBS 필요"
      ]
     ]
    }
   },
   {
    "h": "주경로법(CPM, Critical Path Method)",
    "li": [
     "★전진 계산(Forward Pass)★ → ES·EF, ★후진 계산(Backward Pass)★ → LS·LF.",
     "★총 여유(Total Float)★ = LS − ES = LF − EF : 프로젝트 종료일을 늦추지 않고 지연 가능한 시간.",
     "★자유 여유(Free Float)★ : 후행 활동의 ★조기 시작(ES)★을 늦추지 않고 지연 가능한 시간.",
     "★주경로★ = 네트워크에서 ★가장 긴 경로★ = 일반적으로 총 여유 0. 주경로가 여러 개면 일정 위험 증가. 근접 주경로(near-critical path)도 감시.",
     "주경로 활동이 지연되면 ★프로젝트 종료일이 지연★된다."
    ]
   },
   {
    "tb": {
     "head": [
      "기법",
      "방법",
      "대가",
      "주의"
     ],
     "rows": [
      [
       "공정 압축(Crashing)",
       "자원 추가(초과근무·인력 투입)",
       "★원가 증가★",
       "주경로 활동 중 ★비용 기울기(일당 추가비용) 최소★부터. 비주경로 압축은 효과 없음"
      ],
      [
       "공정 중첩(Fast-tracking)",
       "순차 활동을 ★병행★",
       "★위험·재작업 증가★",
       "임의 의존관계·주경로 활동이 대상"
      ],
      [
       "자원 평준화(Leveling)",
       "자원 과할당 해소를 위해 시작일 조정",
       "★주경로·종료일이 바뀔 수 있음★",
       "자원 제약 우선"
      ],
      [
       "자원 평활화(Smoothing)",
       "★여유(float) 범위 안에서만★ 조정",
       "종료일 불변",
       "모든 과할당 해소는 보장 못함"
      ]
     ]
    }
   },
   {
    "h": "일정 기준선과 표현",
    "li": [
     "승인된 일정 모델이 ★일정 기준선★. 표현 — 간트(막대) 차트, 마일스톤 차트(경영진 보고), 네트워크 다이어그램(논리).",
     "★몬테카를로 시뮬레이션★·What-if 분석으로 일정 확률(예: 80% 확률 완료일)을 분석.",
     "하이브리드 — 상위 마일스톤은 예측형 일정, 내부 인도는 반복(스프린트) 계획으로 운용."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "원가·재무 관리",
  "title": "원가 추정·예산 책정·예비비·자금 한도",
  "ref": "ECO 2026 II-6 · PMBOK 8 Finance",
  "body": [
   {
    "h": "원가(재무) 관리 흐름",
    "li": [
     "원가관리계획 → ★원가 추정★ → ★예산 책정(Determine Budget)★ → ★원가 통제★(EVM — 계산 영역에서 상세).",
     "ECO 2026은 Task 명칭을 ★재무(Finance) 계획·관리★로 넓혔다 — 재정 필요 분석, ★위험·우발 재무 배정의 정량화★, 지출 추적·재무 보고 계획, 재무 변동 감시 및 ★거버넌스 프로세스와 협업★, 재무 예비비 관리.",
     "추정 기법은 일정과 동일(유사·모수·3점·상향식) + ★공급사 입찰 분석(Vendor Bid Analysis)★ · ★예비비 분석★ · ★품질비용★ 고려."
    ]
   },
   {
    "tb": {
     "head": [
      "추정 범위(관례)",
      "정확도",
      "시점"
     ],
     "rows": [
      [
       "개략 추정(ROM, Rough Order of Magnitude)",
       "약 −25% ~ +75%",
       "착수·초기"
      ],
      [
       "확정 추정(Definitive)",
       "약 −5% ~ +10%",
       "계획이 상세해진 뒤"
      ],
      [
       "★주의★",
       "수치는 PMBOK 6판 관례값 — 상황·조직에 따라 다름",
       "점진적 구체화로 범위가 좁아짐"
      ]
     ]
    }
   },
   {
    "tb": {
     "head": [
      "예산 누적 단계(아래→위)",
      "구성",
      "누가 통제"
     ],
     "rows": [
      [
       "활동 원가 추정",
       "각 활동 원가 + 활동 우발예비",
       "PM"
      ],
      [
       "작업 패키지 원가",
       "활동 합산",
       "PM"
      ],
      [
       "통제계정",
       "작업 패키지 합산",
       "PM"
      ],
      [
       "★원가 기준선(Cost Baseline)★",
       "작업 원가 + ★우발 예비비(Contingency Reserve)★ — 시간 단계별(S-곡선)",
       "PM — 변경은 변경통제"
      ],
      [
       "★프로젝트 예산(Budget)★",
       "원가 기준선 + ★관리 예비비(Management Reserve)★",
       "관리 예비비 사용은 ★경영진/스폰서 승인★"
      ]
     ]
    }
   },
   {
    "h": "우발 예비비 vs 관리 예비비",
    "li": [
     "★우발 예비비★ — ★식별된 위험(known-unknowns)★ 대비, ★원가 기준선 안★, PM이 계획된 대응에 사용.",
     "★관리 예비비★ — ★미식별 위험(unknown-unknowns)★ 대비, ★기준선 밖·예산 안★. 사용 시 변경통제로 기준선 갱신.",
     "★EVM 계산에서는 관리 예비비를 BAC에 포함하지 않는다★(BAC = 원가 기준선 총액)."
    ]
   },
   {
    "h": "자금 한도 조정(Funding Limit Reconciliation)",
    "li": [
     "조직이 기간별로 지급할 수 있는 자금 한도와 계획 지출이 충돌하면 → ★작업 일정을 재조정★하여 지출을 평탄화.",
     "자금 요구사항은 원가 기준선 + 관리 예비비를 기준으로 ★단계적(계단형)★으로 지급되는 경우가 많다.",
     "원가 기준선의 누적 그래프 = ★S-곡선★."
    ]
   },
   {
    "h": "재무 의사결정 기본(선정 단계 연계)",
    "li": [
     "★NPV★(큰 값), ★IRR★(큰 값), ★BCR★(>1, 큰 값), ★회수 기간(Payback)★(짧은 값). ★매몰 비용(sunk cost)은 의사결정에서 무시★, 기회비용 = 포기한 대안의 가치.",
     "★생애주기 원가(Life-cycle Costing)★ — 개발비뿐 아니라 운영·유지·폐기 비용까지 고려(지속가능성 고려 포함)."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "품질 관리",
  "title": "품질 계획·관리(QA)·통제(QC)와 품질 도구",
  "ref": "ECO 2026 II-7 · PMBOK 8 원칙 'Embed quality'",
  "body": [
   {
    "tb": {
     "head": [
      "프로세스",
      "핵심",
      "대표 산출·도구"
     ],
     "rows": [
      [
       "품질관리 계획(Plan Quality Mgmt)",
       "품질 요구사항·표준 식별, 준수 입증 방법 계획",
       "품질관리계획서, ★품질 지표(metrics)★, 비용-편익·CoQ, 실험계획법(DOE)"
      ],
      [
       "품질 관리(Manage Quality, ≈QA)",
       "★프로세스★가 품질 요구를 충족하도록 — ★예방★",
       "★품질 감사(Quality Audit)★, 프로세스 분석, 근본원인 분석, DfX(Design for X)"
      ],
      [
       "품질 통제(Control Quality, ≈QC)",
       "★산출물★을 측정·검사 — ★검출★",
       "검사(inspection), 체크시트, 통계적 표본추출, 관리도, ★검증된 인도물★"
      ]
     ]
    }
   },
   {
    "h": "품질 철학 핵심",
    "li": [
     "★품질은 검사가 아니라 계획(설계)으로 만든다★ — 예방 > 검사.",
     "★품질(Quality)★ = 요구사항 충족 정도(낮으면 문제) vs ★등급(Grade)★ = 같은 용도 제품의 기능·특성 범주(낮아도 문제 아님).",
     "★정밀도(Precision)★ = 반복 측정의 일관성 vs ★정확도(Accuracy)★ = 참값과의 근접성.",
     "품질 대가 — ★Deming★(PDCA·지속적 개선), ★Juran★(용도 적합성 fitness for use), ★Crosby★(요구 적합성·무결점 zero defects).",
     "★지속적 개선(Kaizen·PDCA)★, ★지속가능성★ 고려가 ECO 2026 II-7 Enabler에 포함(CoQ and sustainability)."
    ]
   },
   {
    "tb": {
     "head": [
      "품질비용(CoQ)",
      "구분",
      "예"
     ],
     "rows": [
      [
       "적합 비용(Cost of Conformance)",
       "예방 비용(Prevention)",
       "교육, 문서화, 장비, 계획 시간"
      ],
      [
       "",
       "평가 비용(Appraisal)",
       "테스트, 검사, 파괴 시험 손실"
      ],
      [
       "부적합 비용(Cost of Nonconformance)",
       "내부 실패(Internal failure)",
       "재작업, 폐기 — ★출하 전★ 발견"
      ],
      [
       "",
       "외부 실패(External failure)",
       "보증, 리콜, ★평판 손상★, 사업 손실 — 출하 후"
      ]
     ]
    }
   },
   {
    "tb": {
     "head": [
      "기본 품질 도구 7종",
      "용도"
     ],
     "rows": [
      [
       "인과관계도(Ishikawa·Fishbone)",
       "★근본원인★ 후보 구조화(5 Whys와 함께)"
      ],
      [
       "흐름도(Flowchart)",
       "프로세스 단계·결정·낭비 지점 파악(SIPOC)"
      ],
      [
       "체크시트(Check sheet)",
       "결함 데이터 ★수집★(tally)"
      ],
      [
       "파레토 차트(Pareto)",
       "★80/20★ — 빈도순 막대로 소수 핵심 원인 집중"
      ],
      [
       "히스토그램(Histogram)",
       "데이터 ★분포·중심·형태★"
      ],
      [
       "관리도(Control chart)",
       "프로세스 ★안정성(통제 상태)★ 판단"
      ],
      [
       "산점도(Scatter diagram)",
       "두 변수의 ★상관관계★"
      ]
     ]
    }
   },
   {
    "h": "관리도 읽기",
    "li": [
     "★관리 한계(Control Limits)★ = 프로세스 데이터로 계산, 보통 평균 ±3σ. ★규격 한계(Specification Limits)★ = ★고객 요구사항★. 둘은 다르다.",
     "점이 관리 한계 밖 → 이상(특수 원인). ★Rule of Seven★ — 평균 한쪽에 ★연속 7점★이면 한계 안이라도 이상 신호로 조사.",
     "공통 원인(common cause, 무작위 변동) vs 특수 원인(special/assignable cause, 조사 대상).",
     "★표본추출★ — 속성(attribute: 합격/불합격) vs 변수(variable: 연속 척도 측정)."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "자원 관리",
  "title": "자원 계획·확보·통제 — RAM·RACI·RBS",
  "ref": "ECO 2026 II-4 · PMBOK 8 Resources",
  "body": [
   {
    "h": "자원 관리 흐름",
    "li": [
     "자원관리계획 → ★활동 자원 추정★ → ★자원 확보★ → 팀 개발·관리(People 영역) → ★자원 통제★(물적 자원).",
     "ECO II-4 Enabler — ★요구사항에 근거해 자원 정의·계획★, ★자원 필요·가용성의 관리·최적화★.",
     "자원 = ★팀(인적)★ + ★물적(장비·자재·시설·인프라)★. 물적 자원 관리 기법 — JIT, 린, 6시그마, 칸반 등[확인필요: 출제 빈도]."
    ]
   },
   {
    "tb": {
     "head": [
      "산출물",
      "내용",
      "함정"
     ],
     "rows": [
      [
       "자원관리계획서",
       "자원 식별·확보·역할과 책임·교육·인정 보상·통제 방법",
       "팀 헌장과 다름"
      ],
      [
       "★RAM(책임 배정 매트릭스)★",
       "작업 패키지·활동 ↔ 팀원 연결",
       "RACI는 RAM의 한 형태"
      ],
      [
       "★RACI★",
       "Responsible(실행) · Accountable(최종 책임) · Consulted · Informed",
       "★한 작업에 A는 한 명만★"
      ],
      [
       "★RBS(자원분류체계)★",
       "자원을 범주·유형별 계층 분류",
       "위험분류체계(Risk BS)와 약어 혼동"
      ],
      [
       "★OBS(조직분류체계)★",
       "조직 부서별로 담당 작업 표시",
       "WBS·RBS와 혼동"
      ],
      [
       "★자원 달력(Resource Calendar)★",
       "자원이 가용한 기간·근무일",
       "일정 개발·자원 확보 입력"
      ],
      [
       "팀 헌장(Team Charter)",
       "팀 가치·합의·그라운드룰·의사결정 기준",
       "People 영역과 연계"
      ]
     ]
    }
   },
   {
    "h": "자원 확보(Acquire Resources)",
    "li": [
     "★사전 배정(Pre-assignment)★ — 제안서 약속·특수 전문성 등으로 미리 정해진 인원.",
     "★협상(Negotiation)★ — 기능 관리자·다른 PM·외부 조직과 인력 확보 협상(매트릭스 조직에서 핵심).",
     "가상팀(Virtual Team) — 지리적 분산, 시간대·소통 계획 필수. 다중기준 의사결정(가용성·비용·경험·역량·지식) 으로 팀원 선정.",
     "자원이 확보되지 않으면 → 일정·원가·위험에 대한 ★영향 분석 후 대안★(대체 인력, 일정 조정, 스폰서 보고)."
    ]
   },
   {
    "h": "자원 통제 · 최적화",
    "li": [
     "물적 자원의 ★계획 대비 실제 사용 감시★, 부족·잉여 시 조정, 해제.",
     "★자원 최적화★ — 평준화(종료일 변경 가능) vs 평활화(float 안). 일정 노트 참고.",
     "★과할당(over-allocation)★ 발견 시 우선 평활화 → 불가하면 평준화 또는 추가 자원(원가) 검토."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-7",
  "t": "조달 관리",
  "title": "조달 계획·수행·통제 — 계약 유형과 입찰 문서",
  "ref": "ECO 2026 II-5 · PMBOK 8 조달 강화",
  "body": [
   {
    "h": "조달 흐름(구매자 관점)",
    "li": [
     "★조달관리계획★(Make-or-Buy, 계약 유형, SOW, 선정 기준) → ★조달 수행★(입찰자 회의, 제안 평가, 협상, 계약 체결) → ★조달 통제★(성과 검토, 검사·감사, 클레임, 지급, 종료).",
     "ECO II-5 Enabler — 선호 계약 유형 선택 · 공급사 성과 평가 · 협약 목표 충족 확인 · ★협상 참여·협상 전략 결정★ · 공급사·계약 관리 · 조달 전략 계획.",
     "★자체 제작·구매 분석(Make-or-Buy)★ — 직접 비용 + 간접 비용, 역량, 위험, 기밀성, 장기 전략으로 결정. 리스 vs 구매도 같은 원리."
    ]
   },
   {
    "tb": {
     "head": [
      "조달 문서",
      "목적"
     ],
     "rows": [
      [
       "★RFI(정보 요청서)★",
       "판매자 역량·시장 ★정보★ 수집"
      ],
      [
       "★RFQ(견적 요청서)★",
       "명확한 사양에 대한 ★가격★ 견적 — 가격 중심 선정"
      ],
      [
       "★RFP(제안 요청서)★",
       "복잡한 요구에 대한 ★해결책 제안★"
      ],
      [
       "IFB(입찰 공고)",
       "RFQ와 유사, 가격 경쟁 입찰"
      ],
      [
       "★작업 기술서(SOW)★",
       "조달 품목의 상세 설명 — 판매자가 제공 가능 여부 판단. 서비스는 TOR(Terms of Reference)"
      ],
      [
       "★독자 원가 추정(Independent Cost Estimate)★",
       "제안 가격의 적정성 검증용 내부 추정"
      ],
      [
       "★선정 기준(Source Selection Criteria)★",
       "가중치 평가(기술·관리·가격·경험·재무 건전성)"
      ]
     ]
    }
   },
   {
    "tb": {
     "head": [
      "계약 유형",
      "예",
      "위험 부담",
      "적합"
     ],
     "rows": [
      [
       "고정가(Fixed Price)",
       "FFP(확정 고정가) · FPIF(인센티브) · FP-EPA(경제가격조정)",
       "★판매자★ 위험 큼",
       "★범위 명확★. FP-EPA = 장기·물가 변동"
      ],
      [
       "원가정산(Cost-Reimbursable)",
       "CPFF(고정 수수료) · CPIF(인센티브 수수료) · CPAF(성과 보상 수수료)",
       "★구매자★ 위험 큼",
       "★범위 불확실·R&D★"
      ],
      [
       "T&M(시간·자재)",
       "단가 × 시간 + 자재 비용",
       "중간 — ★상한(NTE)★ 설정 권장",
       "인력 보강·소규모·범위 확정 전"
      ]
     ]
    }
   },
   {
    "h": "조달 수행 핵심",
    "li": [
     "★입찰자 회의(Bidder Conference, Pre-bid)★ — ★모든 잠재 판매자에게 동일 정보★를 동시에 제공(공정성). 특정 업체만 따로 설명하면 비윤리.",
     "★단일 소스(Single source)★ = 다른 업체도 있지만 선호 업체를 지정 vs ★유일 소스(Sole source)★ = 공급 가능한 업체가 하나뿐.",
     "★의향서(Letter of Intent)★는 계약이 아니다. 계약은 ★법적 구속력★이 있으며 계약 조건 변경은 공식 변경통제를 거친다.",
     "협상 목표 — ★윈-윈(win-win)★과 장기 관계. 계약 협상은 보통 조달 담당(계약 권한자)이 주도하고 PM이 지원."
    ]
   },
   {
    "h": "조달 통제 · 클레임 · 종료",
    "li": [
     "★클레임(Claim)★ = 이견이 있는 변경(contested change). 해결 순서 — ★협상(직접 해결)★ 우선 → ★대체 분쟁 해결(ADR: 조정·중재)★ → 소송은 최후.",
     "★계약 해지★ — 편의에 의한 해지(termination for convenience) vs 귀책(default)에 의한 해지. 해지 전 계약 조건 확인.",
     "판매자 성과 문제 → ★계약 조건에 따른 문서화된 절차★(성과 검토, 시정 요구 통지).",
     "★조달 종료★ — 인도물 인수, 클레임 정리, 최종 지급, 조달 감사, 기록 보관. 조기 종료 시에도 종료 절차 수행.",
     "PTA(Point of Total Assumption, FPIF) = (상한가 − 목표가) ÷ 구매자 분담률 + 목표 원가 [확인필요: 2026 출제 빈도]."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-8",
  "t": "의사소통 계획·종료",
  "title": "의사소통 관리계획·프로젝트/단계 종료",
  "ref": "ECO 2026 I-8(계획 측면)·II-10",
  "body": [
   {
    "h": "의사소통 관리계획서(Communications Management Plan)",
    "li": [
     "★누구에게 · 무엇을 · 언제 · 어떻게(방법·채널) · 누가 · 얼마나 자주★ 전달할지 정한 계획. 이해관계자 참여계획과 연계.",
     "입력 — ★의사소통 요구사항 분석★(이해관계자 정보 요구, 조직 구조, 위치, 법·규제 보고 요구).",
     "★의사소통 채널 수 = n(n−1)/2★ — n은 PM 포함 인원. 인원 증가 시 채널은 기하급수적으로 증가.",
     "ECO I-8은 '보고 요구사항 이해 · 후원자·이해관계자 기대에 맞춘 보고서 · 피드백 루프'를 강조(상세는 People 영역)."
    ]
   },
   {
    "tb": {
     "head": [
      "의사소통 방법",
      "설명",
      "적합"
     ],
     "rows": [
      [
       "상호작용형(Interactive)",
       "다자 실시간 정보 교환 — 회의, 전화, 화상",
       "★오해·갈등·복잡한 문제★ 해소"
      ],
      [
       "밀어내기(Push)",
       "특정 수신자에게 발송 — 이메일, 메모, 보고서",
       "수신 확인은 보장 안 됨"
      ],
      [
       "끌어오기(Pull)",
       "수신자가 직접 접근 — 인트라넷, 위키, 지식 저장소",
       "★대량 정보·다수 수신자★"
      ]
     ]
    }
   },
   {
    "h": "의사소통 모델과 형식",
    "li": [
     "기본 모델 — 송신자 ★부호화(encode)★ → 메시지·매체 → 수신자 ★해독(decode)★ → ★확인(acknowledge)·피드백★. 잡음(noise)이 왜곡.",
     "형식(formal: 보고서·계약·공식 회의) vs 비형식(informal: 대화·메신저), 수직·수평, 공식 문서는 ★서면 형식★으로.",
     "비언어·준언어(paralingual: 어조·억양)가 메시지의 상당 부분을 전달 — 중요·민감 사안은 대면 권장."
    ]
   },
   {
    "h": "프로젝트·단계 종료(Close Project or Phase)",
    "li": [
     "ECO II-10 — 완료에 대한 ★이해관계자 승인 확보★ · 종료 기준 결정 · ★운영(또는 다음 단계)으로의 이관 준비 검증★ · 최종 교훈·회고·조달·재무·자원 종료.",
     "순서 감각 — ★인도물 공식 인수(Validate Scope 결과)★ → 이관 → ★조달 종료★ → ★최종 교훈 정리·OPA 갱신★ → 기록 보관 → ★자원 해제★ → 최종 보고.",
     "★조기 종료(취소)·중단된 프로젝트도 종료 절차를 반드시 수행★ — 완료된 것·미완료된 것 문서화, 교훈 기록.",
     "★교훈(Lessons Learned)★은 종료 때만이 아니라 ★프로젝트 전 기간에 걸쳐 기록★(교훈 기록부)하고 종료 시 OPA(교훈 저장소)에 반영.",
     "팀원 해제 전에 교훈·인수인계를 마쳐야 지식이 유실되지 않는다."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "애자일 선언·원칙·생애주기",
  "title": "애자일 선언 4가치·12원칙과 생애주기 4유형",
  "ref": "ECO 2026 II-1(개발 접근법 권고) · Agile Manifesto(2001) · Agile Practice Guide",
  "body": [
   {
    "h": "애자일 선언(Agile Manifesto, 2001) — 4가치",
    "li": [
     "2001년 미국 스노버드(Snowbird)에 모인 17명의 실무자가 발표했다.",
     "★개인과 상호작용(Individuals and interactions)★ > 프로세스와 도구",
     "★작동하는 소프트웨어(Working software)★ > 포괄적인 문서",
     "★고객과의 협력(Customer collaboration)★ > 계약 협상",
     "★변화에 대응하기(Responding to change)★ > 계획을 따르기",
     "★함정★ — 오른쪽 항목도 가치가 있다. 왼쪽을 ★더★ 가치 있게 여길 뿐, 문서·계획·계약을 없애라는 뜻이 아니다."
    ]
   },
   {
    "h": "12원칙 중 시험에 자주 쓰이는 문장",
    "li": [
     "가치 있는 소프트웨어를 ★일찍·지속적으로★ 인도해 고객을 만족시킨다.",
     "개발 ★후반부라도★ 요구사항 변경을 환영한다 — 고객의 경쟁우위를 위해 변화를 활용한다.",
     "작동하는 소프트웨어를 짧은 주기(수 주~수 개월, 짧을수록 좋다)로 자주 인도한다.",
     "★작동하는 소프트웨어가 진척의 주요 척도★다(투입 시간·문서량이 아니다).",
     "★지속 가능한 개발 속도(sustainable pace)★를 유지한다 — 상시 초과근무는 원칙 위반이다.",
     "가장 효율적인 소통은 ★대면 대화(face-to-face)★다.",
     "최고의 아키텍처·요구사항·설계는 ★자기조직적 팀(self-organizing team)★에서 나온다.",
     "단순성 — 하지 않아도 되는 일을 최대화하는 기술이 필수다.",
     "팀은 정기적으로 더 효과적인 방법을 ★성찰하고 조정★한다(회고의 근거)."
    ]
   },
   {
    "h": "생애주기(Life cycle) 4유형 비교",
    "tb": {
     "head": [
      "유형",
      "요구사항",
      "인도",
      "변경",
      "목표"
     ],
     "rows": [
      [
       "예측형(Predictive)",
       "초기에 확정",
       "끝에 한 번",
       "통제·제한",
       "원가 관리"
      ],
      [
       "반복형(Iterative)",
       "동적",
       "끝에 한 번(시제품 반복)",
       "반복마다 반영",
       "★정확성★(피드백으로 해법 개선)"
      ],
      [
       "증분형(Incremental)",
       "동적",
       "★자주 작은 단위★",
       "증분마다 반영",
       "★속도★(조기 부분 인도)"
      ],
      [
       "애자일(Agile)",
       "동적",
       "자주·작은 단위",
       "실시간 반영",
       "★고객 가치★(반복+증분 결합)"
      ]
     ]
    }
   },
   {
    "h": "접근법 선택 단서 (ECO II-1 Enabler)",
    "li": [
     "요구사항·기술의 ★불확실성이 높고★ 피드백을 자주 받을 수 있으면 → 적응형(애자일).",
     "범위가 명확하고 규제·계약으로 변경이 어려우면 → 예측형.",
     "두 조건이 섞이면 → ★하이브리드★. APG 2판은 이를 ★인도 연속체(delivery continuum)★ 위의 선택으로 본다.",
     "PM은 접근법을 ★권고(recommend)★하고 근거를 이해관계자와 공유한다 — 조직 관행이라는 이유만으로 고르지 않는다."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "스크럼 프레임워크",
  "title": "스크럼(Scrum) — 3책임·5이벤트·3산출물",
  "ref": "ECO 2026 II-3·II-8·III-4 · Scrum Guide 2020",
  "body": [
   {
    "h": "경험주의 3기둥과 5가치",
    "li": [
     "3기둥: ★투명성(Transparency) · 점검(Inspection) · 적응(Adaptation)★.",
     "5가치: 확약(Commitment) · 집중(Focus) · 개방성(Openness) · 존중(Respect) · 용기(Courage).",
     "스크럼 팀은 ★보통 10명 이하★이며 교차기능(cross-functional)·자기관리(self-managing) 팀이다."
    ]
   },
   {
    "h": "3가지 책임(Accountabilities) — Scrum Guide 2020",
    "tb": {
     "head": [
      "책임",
      "핵심 역할",
      "시험 포인트"
     ],
     "rows": [
      [
       "Product Owner(PO)",
       "★제품 가치 극대화★, Product Backlog 관리·순서 결정",
       "1명(위원회 아님). ★스프린트 취소 권한★. 새 요구는 PO에게"
      ],
      [
       "Scrum Master(SM)",
       "스크럼 확립, 팀 코칭, ★장애 제거★, 이벤트 촉진",
       "★서번트 리더★. APG의 Team Facilitator"
      ],
      [
       "Developers",
       "매 스프린트 사용 가능한 증분 생성, Sprint Backlog 계획",
       "2020판은 'Development Team' 대신 ★Developers★"
      ]
     ]
    }
   },
   {
    "h": "5가지 이벤트와 타임박스(1개월 스프린트 기준 최대)",
    "tb": {
     "head": [
      "이벤트",
      "목적",
      "타임박스"
     ],
     "rows": [
      [
       "Sprint",
       "다른 모든 이벤트를 담는 컨테이너",
       "★1개월 이하★, 일정한 길이"
      ],
      [
       "Sprint Planning",
       "Why(목표)·What(항목)·How(계획)",
       "최대 8시간"
      ],
      [
       "Daily Scrum",
       "Developers가 스프린트 목표 진척 점검·조정",
       "★15분★"
      ],
      [
       "Sprint Review",
       "증분을 이해관계자와 점검, ★백로그 적응★",
       "최대 4시간"
      ],
      [
       "Sprint Retrospective",
       "사람·상호작용·프로세스·도구·DoD 개선 계획",
       "최대 3시간"
      ]
     ]
    }
   },
   {
    "h": "3산출물과 각각의 확약(Commitment)",
    "tb": {
     "head": [
      "산출물",
      "확약",
      "설명"
     ],
     "rows": [
      [
       "Product Backlog",
       "★Product Goal★",
       "제품 개선에 필요한 항목의 순서 목록"
      ],
      [
       "Sprint Backlog",
       "★Sprint Goal★",
       "스프린트 목표 + 선택 항목 + 실행 계획"
      ],
      [
       "Increment",
       "★Definition of Done★",
       "DoD를 충족해야 증분이 된다"
      ]
     ]
    }
   },
   {
    "h": "상황형 정답 패턴",
    "li": [
     "스프린트 중 이해관계자의 신규 요청 → ★PO에게 전달, 백로그에서 우선순위 판단★. 스프린트 목표를 위태롭게 하는 변경은 하지 않는다.",
     "스프린트 목표가 무의미해지면 → PO만 스프린트를 취소할 수 있다.",
     "DoD 미충족 항목 → 증분·데모에 '완료'로 넣지 않고 ★Product Backlog로 되돌린다★.",
     "Daily Scrum이 상태보고 회의로 변질 → Developers의 계획·조정 회의임을 코칭, 상세 논의는 회의 후(parking lot).",
     "Daily Scrum의 '3가지 질문'은 2020판에서 필수가 아니다."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "칸반·린·XP",
  "title": "칸반(Kanban)·린(Lean)·XP — 흐름과 기술 실천",
  "ref": "ECO 2026 II-7·II-8·II-9 · Agile Practice Guide",
  "body": [
   {
    "h": "칸반 — 흐름 중심 방법",
    "li": [
     "★작업 시각화★(보드·카드) · ★WIP(진행 중 작업) 제한★ · ★흐름 관리★ · 명시적 정책 · 피드백 루프 · 협력적 개선.",
     "★당김(Pull) 시스템★ — 다음 단계에 여유(용량)가 생길 때 작업을 끌어온다.",
     "고정 길이 반복·역할을 ★규정하지 않는다★ — 기존 프로세스에서 시작해 점진 개선.",
     "WIP 제한의 효과: 작업 전환 감소, ★병목 노출★, 리드 타임 단축. 병목 시 '더 착수'가 아니라 ★완료를 돕는다(stop starting, start finishing)★."
    ]
   },
   {
    "h": "흐름 지표와 리틀의 법칙(Little's Law)",
    "li": [
     "★평균 사이클 타임 = 평균 WIP ÷ 평균 처리량(Throughput)★.",
     "리드 타임(Lead time) = 요청 접수 → 인도. 사이클 타임(Cycle time) = 작업 착수 → 완료. ★리드 타임 ⊇ 사이클 타임★.",
     "처리량 = 단위 기간당 완료 항목 수.",
     "예: WIP 10개, 처리량 주 5개 → 평균 사이클 타임 2주."
    ]
   },
   {
    "h": "린(Lean) — 낭비 제거와 흐름",
    "li": [
     "도요타 생산 방식(TPS)에서 유래. 낭비(Muda)·불균형(Mura)·과부하(Muri) 제거.",
     "Poppendieck의 린 소프트웨어 개발 7원칙: 낭비 제거 · 품질 내재화 · 지식 창출 · 결정 연기(defer commitment) · 빠른 인도 · 사람 존중 · 전체 최적화.",
     "소프트웨어 7낭비: 부분 완료 작업 · 추가 기능 · 재학습 · 인계(handoff) · 작업 전환 · 지연 · 결함.",
     "★가치흐름지도(VSM)★ — 프로세스 효율 = 부가가치 시간 ÷ 총 리드 타임."
    ]
   },
   {
    "h": "XP(eXtreme Programming) — 기술 실천",
    "tb": {
     "head": [
      "실천법",
      "핵심"
     ],
     "rows": [
      [
       "짝 프로그래밍(Pair programming)",
       "2인 1조, 실시간 리뷰·지식 공유"
      ],
      [
       "테스트 주도 개발(TDD)",
       "★테스트 먼저★ 작성 → 통과 코드 → 리팩터링"
      ],
      [
       "지속적 통합(CI)",
       "하루 여러 번 통합·자동 빌드·테스트"
      ],
      [
       "리팩터링 · 단순 설계",
       "동작은 유지, 구조 개선 → 기술 부채 감소"
      ],
      [
       "공동 코드 소유 · 작은 릴리스",
       "누구나 수정 가능, 자주 출시"
      ],
      [
       "스파이크(Spike)",
       "★불확실성 해소용 타임박스 실험★(추정 전 조사)"
      ],
      [
       "지속 가능한 속도",
       "상시 초과근무 금지(원래 '주 40시간')"
      ]
     ]
    }
   },
   {
    "h": "XP 가치",
    "li": [
     "의사소통(Communication) · 단순성(Simplicity) · 피드백(Feedback) · 용기(Courage) · 존중(Respect).",
     "★함정★ — 5가치 목록은 스크럼(확약·집중·개방성·존중·용기)과 XP가 다르다. '존중·용기'만 공통."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "백로그·사용자 스토리·우선순위",
  "title": "백로그 정제·사용자 스토리·우선순위 기법",
  "ref": "ECO 2026 II-2·II-3 · Agile Practice Guide 2판(backlog refinement)",
  "body": [
   {
    "h": "백로그 계층과 정제(Refinement)",
    "li": [
     "계층: ★에픽(Epic) > 피처(Feature) > 사용자 스토리(User story) > 작업(Task)★.",
     "★백로그 정제(backlog refinement)★ — 항목을 분해·명확화·추정·순서화하는 지속 활동. APG 2판은 'grooming' 대신 ★refinement★로 통일했다.",
     "백로그 상단은 작고 상세하게, 하단은 크고 개략적으로(점진적 구체화·DEEP: Detailed appropriately·Estimated·Emergent·Prioritized).",
     "우선순위(순서) 결정 책임은 ★PO★. 팀은 크기 추정과 기술 의존성 의견을 제공한다."
    ]
   },
   {
    "h": "사용자 스토리 — 형식·3C·INVEST",
    "li": [
     "형식: \"★As a <역할>, I want <기능>, so that <가치>★\" — '왜(가치)'를 반드시 담는다.",
     "3C(Ron Jeffries): ★Card(카드) · Conversation(대화) · Confirmation(확인)★ — 스토리는 대화의 약속이다.",
     "INVEST: ★Independent · Negotiable · Valuable · Estimable · Small · Testable★.",
     "수용 기준(Acceptance criteria) — 검증 가능하게. 대표 형식 ★Given-When-Then★(BDD).",
     "너무 큰 스토리는 워크플로 단계·업무 규칙·데이터 유형 등으로 ★수직 분할(vertical slice)★한다 — 계층별(UI/DB) 수평 분할은 단독 가치가 없다."
    ]
   },
   {
    "h": "DoR vs DoD",
    "tb": {
     "head": [
      "구분",
      "Definition of Ready(DoR)",
      "Definition of Done(DoD)"
     ],
     "rows": [
      [
       "의미",
       "스프린트에 넣을 ★준비★ 기준",
       "증분 ★완료★ 품질 기준"
      ],
      [
       "Scrum Guide 2020",
       "규정 없음(팀이 선택하는 보조 실천)",
       "★Increment의 확약★"
      ],
      [
       "미충족 시",
       "기획에 넣지 않고 정제 계속",
       "증분 불포함 → 백로그 복귀"
      ]
     ]
    }
   },
   {
    "h": "우선순위 기법 비교",
    "tb": {
     "head": [
      "기법",
      "방식",
      "포인트"
     ],
     "rows": [
      [
       "MoSCoW",
       "★Must · Should · Could · Won't(이번엔 안 함)★",
       "DSDM에서 유래"
      ],
      [
       "WSJF",
       "★지연비용(CoD) ÷ 작업 크기(기간)★, 큰 값 먼저",
       "SAFe에서 사용"
      ],
      [
       "Kano 모델",
       "기본(Must-be) · 성능(Performance) · 흥분(Delighter) · 무관심",
       "흥분 요소는 시간이 지나면 기본 요소화"
      ],
      [
       "100점 법",
       "이해관계자가 100점을 항목에 배분",
       "상대 선호 파악"
      ],
      [
       "상대 가중치",
       "편익·벌칙 대비 원가·위험",
       "가치/원가 비율"
      ],
      [
       "위험 기반",
       "고위험·고가치를 먼저 학습",
       "불확실성 조기 제거"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "추정·속도·반복 계획",
  "title": "상대 추정·스토리 포인트·속도·릴리스/반복 계획",
  "ref": "ECO 2026 II-8(Estimate tasks — story points · historical data) · II-1",
  "body": [
   {
    "h": "상대 추정(Relative estimation)",
    "li": [
     "★스토리 포인트(Story point)★ — 노력·복잡성·불확실성을 합친 ★상대 크기★. 시간·원가 단위가 아니다.",
     "수정 피보나치(1·2·3·5·8·13·20·40·100) — 크기가 클수록 ★불확실성이 커지는 것을 반영★해 간격을 벌린다.",
     "★플래닝 포커(Planning Poker)★ — 동시 공개 → 최고·최저 추정자가 근거 설명 → 재추정(앵커링 방지, 와이드밴드 델파이 변형).",
     "★친화도 추정(Affinity estimating)★·★티셔츠 사이징(XS~XL)★ — 많은 항목을 빠르게 상대 그룹화.",
     "이상적 일수(Ideal days) — 방해 없을 때 걸리는 일수(실제 일수와 다르다)."
    ]
   },
   {
    "h": "속도(Velocity)와 용량(Capacity)",
    "tb": {
     "head": [
      "구분",
      "속도(Velocity)",
      "용량(Capacity)"
     ],
     "rows": [
      [
       "정의",
       "반복당 ★완료(DoD 충족)★ 포인트 실적",
       "다음 반복의 가용 역량(휴가·교육 반영)"
      ],
      [
       "용도",
       "★팀 자체★의 예측·계획",
       "반복 계획 시 작업량 상한"
      ],
      [
       "함정",
       "부분 완료 미반영, ★팀 간 비교 금지★, 성과 목표화 금지",
       "직전 속도로 고정하지 않음"
      ]
     ]
    }
   },
   {
    "h": "예측 계산",
    "li": [
     "잔여 반복 수 = ★잔여 포인트 ÷ 평균 속도★(소수점은 올림).",
     "예: 잔여 150점, 평균 속도 25 → 6 스프린트. 2주 스프린트면 약 12주.",
     "새 팀은 과거 속도가 없으므로 ★범위(range)로 예측★하고 2~3회 실측 후 갱신한다.",
     "기간 고정·범위 가변 — 날짜가 고정이면 '이번 릴리스에 들어갈 범위'를 속도로 예측한다."
    ]
   },
   {
    "h": "릴리스 계획 vs 반복 계획",
    "tb": {
     "head": [
      "구분",
      "릴리스 계획",
      "반복(스프린트) 계획"
     ],
     "rows": [
      [
       "범위",
       "여러 반복 · 피처·에픽",
       "1 반복 · 스토리·작업"
      ],
      [
       "입력",
       "제품 비전·로드맵·평균 속도",
       "정제된 백로그·용량·DoD"
      ],
      [
       "산출",
       "릴리스 목표·대략 범위·날짜",
       "스프린트 목표·Sprint Backlog"
      ],
      [
       "갱신",
       "매 반복 후 속도로 재예측(★롤링 웨이브★)",
       "매 반복"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-6",
  "t": "가치 인도·MVP",
  "title": "가치기반 인도 — MVP·MMF·점진적 가치·편익 측정",
  "ref": "ECO 2026 II-3 Help ensure value-based delivery(Enabler 6개 전부)",
  "body": [
   {
    "h": "ECO II-3 Enabler 6개 = 상황형 행동 목록",
    "li": [
     "① 핵심 이해관계자와 ★가치 요소 식별★",
     "② ★가치와 이해관계자 피드백★으로 작업 우선순위 결정",
     "③ ★점진적(증분) 가치 인도 기회★ 평가",
     "④ 프로젝트 전 기간 ★비즈니스 가치 검토★(종료 시 한 번이 아니다)",
     "⑤ ★편익 추적 측정 체계★가 마련되었는지 확인",
     "⑥ 가치를 입증할 인도 옵션 평가"
    ]
   },
   {
    "h": "MVP vs MMF",
    "tb": {
     "head": [
      "구분",
      "MVP(Minimum Viable Product)",
      "MMF(Minimum Marketable Feature)"
     ],
     "rows": [
      [
       "목적",
       "★가설 검증·학습★",
       "★고객이 인지하는 가치★ 제공"
      ],
      [
       "출처",
       "린 스타트업(Eric Ries) Build-Measure-Learn",
       "점진적 가치 인도(증분 출시 단위)"
      ],
      [
       "판단",
       "버려도 학습이 남으면 성공",
       "출시 가능한 최소 기능 단위"
      ]
     ]
    }
   },
   {
    "h": "산출물 → 성과 → 편익 → 가치",
    "tb": {
     "head": [
      "용어",
      "의미",
      "예"
     ],
     "rows": [
      [
       "산출물(Output)",
       "만든 것",
       "모바일 앱 출시"
      ],
      [
       "성과(Outcome)",
       "산출물이 일으킨 변화",
       "고객 이탈률 감소"
      ],
      [
       "편익(Benefit)",
       "조직이 얻은 이득",
       "유지 매출 증가"
      ],
      [
       "가치(Value)",
       "이해관계자가 느끼는 중요성·효용",
       "ECO 2026이 정의한 '프로젝트 성공'의 중심"
      ]
     ]
    }
   },
   {
    "h": "상황형 정답 패턴",
    "li": [
     "범위·일정·원가는 지켰지만 ★채택·편익이 없다★ → '성공 보고'가 아니라 원인 분석 후 백로그 조정.",
     "외부 변화로 잔여 기능의 가치가 하락 → PO·스폰서와 ★가치 재평가·재우선순위★(필요 시 축소·조기 종료 검토).",
     "고객이 일괄 인도만 원함 → 증분 인도의 편익을 ★근거와 함께 제시★하고 합의(일방 결정 금지).",
     "편익 측정 계획이 없음 → 지표·책임자·측정 시점을 정의해 측정 체계를 확인."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-7",
  "t": "하이브리드·테일러링",
  "title": "하이브리드·테일러링·스케일링 (Agile Practice Guide 2판)",
  "ref": "ECO 2026 II-1(Recommend a development approach) · APG 2판(PMI·Agile Alliance, 2026-09 블로그 공개)",
  "body": [
   {
    "h": "APG 2판 핵심 변화(공식 블로그 기준)",
    "li": [
     "하이브리드를 예측형/애자일 ★이분법이 아니라 인도 연속체(delivery continuum)★로 본다.",
     "용어: backlog grooming → ★backlog refinement★, daily standup → ★daily coordination meeting★.",
     "다루는 주제: 제품 관리(product management) · ★심리적 안정감(psychological safety)★ · 생성형 AI 인사이트 · 스케일링.",
     "PMBOK 8판과 정합. 2026-07 시행 시험에 2판이 얼마나 반영되었는지는 [확인필요] — 두 용어를 모두 알아 둔다."
    ]
   },
   {
    "h": "하이브리드 조합 예",
    "tb": {
     "head": [
      "조합",
      "상황",
      "포인트"
     ],
     "rows": [
      [
       "구성요소별 혼합",
       "하드웨어(규제·고정 설계) + 소프트웨어(빈번한 피드백)",
       "통합 ★마일스톤 정렬★"
      ],
      [
       "단계별 전환",
       "애자일로 개발 → 예측형으로 전사 배포·이관",
       "접점 산출물 합의"
      ],
      [
       "예측형 안의 반복",
       "기준선은 예측형, 고불확실 모듈은 반복·프로토타입",
       "불확실성 집중 관리"
      ],
      [
       "애자일 안의 예측 요소",
       "스프린트 운영 + 계약·규제 마일스톤",
       "거버넌스 보고 요건 충족"
      ]
     ]
    }
   },
   {
    "h": "적합성 판단 도구",
    "li": [
     "★애자일 적합성 필터(Agile suitability filter)★ — APG 1판 부록: ★문화(Culture) · 팀(Team) · 프로젝트(Project)★ 3범주로 점수화.",
     "★스테이시 매트릭스(Stacey)★ — 요구사항 불확실성 × 기술 불확실성. 단순 → 복잡(complicated) → ★복잡적응(complex, 애자일 최적)★ → 혼돈.",
     "★커네빈(Cynefin, Snowden)★ — 명확(Clear) · 난해(Complicated) · 복잡(Complex: 탐색-감지-대응) · 혼돈(Chaotic) · 무질서."
    ]
   },
   {
    "h": "테일러링(Tailoring) 4단계 — PMBOK 7판 체계",
    "li": [
     "① 초기 개발 접근법 선택 → ② ★조직★에 맞춰 테일러링 → ③ ★프로젝트★에 맞춰 테일러링 → ④ 지속적 개선 실행.",
     "테일러링은 ★목적을 유지하면서★ 방식을 조정하는 것 — 불편하다고 이벤트·산출물을 근거 없이 빼는 것은 테일러링이 아니다.",
     "효과는 ★회고★로 점검해 다시 조정한다. PMBOK 8판에서의 단계 명칭은 [확인필요]."
    ]
   },
   {
    "h": "스케일링(Scaling)",
    "li": [
     "Scrum of Scrums — 팀 대표가 모여 ★팀 간 의존성·장애★를 조정.",
     "SAFe(Scaled Agile Framework) · LeSS(Large-Scale Scrum) · DA(Disciplined Agile, PMI 보유 툴킷).",
     "의존성 충돌 시 정답: 가시화·조정 회의 — PM이 모든 백로그를 직접 할당하는 중앙 통제는 오답."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-8",
  "t": "애자일 지표·서번트 리더십",
  "title": "애자일 지표·정보 방열기·서번트 리더십·장애 제거·회고",
  "ref": "ECO 2026 II-9(Evaluate project status) · III-4(Remove impediments) · I-3",
  "body": [
   {
    "h": "차트 읽기",
    "tb": {
     "head": [
      "차트",
      "보여주는 것",
      "해석 포인트"
     ],
     "rows": [
      [
       "번다운(Burndown)",
       "★잔여 작업★",
       "실제선이 이상선 ★위★ = 계획보다 늦음, 수평 = 진척 정체"
      ],
      [
       "번업(Burnup)",
       "★누적 완료 + 총 범위 선★",
       "★범위 변경이 별도 선으로 보인다★"
      ],
      [
       "누적 흐름도(CFD)",
       "단계별 누적 항목",
       "밴드 ★폭 확대 = 병목★, 세로 거리 = WIP, 가로 거리 = 리드 타임"
      ],
      [
       "속도 차트",
       "반복별 완료 포인트",
       "추세·안정성 → 예측"
      ]
     ]
    }
   },
   {
    "h": "정보 방열기와 투명성",
    "li": [
     "★정보 방열기(Information radiator)★ — 누구나 한눈에 볼 수 있게 게시한 큰 시각 자료(Big Visible Chart). 칸반 보드·번다운 등.",
     "목적은 ★투명성★ — 상태를 숨기지 않고 공개해 조기 대응을 유도한다.",
     "지표는 팀 개선용이다 — ★개인 평가·팀 간 비교★에 쓰면 지표가 왜곡된다."
    ]
   },
   {
    "h": "서번트 리더십(Servant leadership)",
    "li": [
     "Robert Greenleaf(1970)가 제시. 리더가 ★팀을 섬겨★ 성과를 내도록 돕는다.",
     "행동: ★장애 제거★ · 팀 보호(외부 방해 차단) · 코칭·촉진 · 자기조직화 존중 · 심리적 안정감 조성.",
     "오답 패턴: 작업 세부 할당·일일 지시 통제, 팀 결정을 PM이 대신하기."
    ]
   },
   {
    "h": "장애 제거(ECO III-4)와 회고",
    "li": [
     "절차: 장애 ★영향 평가★ → 우선순위화·가시화(장애 보드) → 개입 전략 적용 → 지속 재평가.",
     "팀 권한 밖이면 담당자와 직접 협의 → 그래도 안 되면 ★분석·대안을 들고★ 에스컬레이션.",
     "회고 5단계(Derby & Larsen): ★분위기 조성 → 데이터 수집 → 통찰 도출 → 실행 결정 → 마무리★.",
     "기법: Start·Stop·Continue, 5 Whys, Mad·Sad·Glad. ★비난 없는(blameless)★ 운영."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "성과 지표·측정",
  "title": "성과 지표의 설계 — KPI·OKR·선행/후행 지표",
  "ref": "ECO 2026 II-9 (Develop project metrics, analysis, and reconciliation) · PMBOK 7판 측정 성과영역",
  "body": [
   {
    "h": "지표(Metric)를 만드는 원칙",
    "li": [
     "지표는 ★의사결정을 위해★ 만든다 — \"이 숫자로 누가 무엇을 결정하는가\"에 답하지 못하면 측정할 이유가 없다.",
     "★SMART★ — 구체적(Specific)·측정 가능(Measurable)·달성 가능(Achievable)·관련성(Relevant)·시의성(Timely).",
     "적게, 의미 있게 — 수집이 쉬운 데이터를 많이 모으는 것보다 ★목표·가치와 연결된 소수 지표★가 낫다.",
     "2026 ECO는 프로젝트 성공을 ★이해관계자 가치·원하는 성과★로 넓혔다 → 일정·원가 지표만으로는 부족하고 ★편익·가치 지표★를 함께 둔다."
    ]
   },
   {
    "h": "KPI vs OKR",
    "tb": {
     "head": [
      "구분",
      "KPI (Key Performance Indicator, 핵심성과지표)",
      "OKR (Objectives and Key Results)"
     ],
     "rows": [
      [
       "성격",
       "현재 성과·건강 상태를 ★지속 감시★",
       "도전적 ★목표 달성★을 향한 정렬 도구"
      ],
      [
       "구성",
       "지표 + 목표치(임계치)",
       "Objective(정성적 지향점) + Key Results(측정 가능한 결과 — 보통 3~5개(관행))"
      ],
      [
       "질문",
       "\"잘 돌아가고 있는가?\"",
       "\"어디로 가고, 도착했는지 어떻게 아는가?\""
      ],
      [
       "예",
       "CPI ≥ 0.95, 결함 유출률",
       "O: 신규 고객 온보딩을 쉽게 / KR: 가입 완료 시간 10분→3분"
      ],
      [
       "함정",
       "지표가 목표 자체가 됨",
       "KR에 ★활동(작업 목록)★을 적음 — KR은 결과여야 한다"
      ]
     ]
    }
   },
   {
    "h": "선행 지표 vs 후행 지표",
    "li": [
     "★선행 지표(Leading)★ — 미래 결과를 ★예측★: 미해결 고위험 수 추세, WIP 증가, 결함 발견 추세, 백로그 정제 수준.",
     "★후행 지표(Lagging)★ — 이미 일어난 결과를 ★확인★: 완료 원가, 최종 고객만족도, 인도 후 결함 수, ROI.",
     "후행 지표만 보면 문제를 늦게 안다 → ★선행 지표로 조기 경보★, 후행 지표로 결과 확인."
    ]
   },
   {
    "h": "PMBOK 7판의 지표 분류 (참고)",
    "tb": {
     "head": [
      "범주",
      "예"
     ],
     "rows": [
      [
       "인도물(Deliverable)",
       "결함 수·오류율, 성능 측정치, 기술 성과"
      ],
      [
       "인도(Delivery)",
       "WIP, 리드타임, 사이클타임, 대기열 크기, 배치 크기, 처리량"
      ],
      [
       "기준선 성과",
       "일정·원가 차이(SV·CV), SPI·CPI"
      ],
      [
       "자원",
       "계획 대비 실제 자원 사용·단가"
      ],
      [
       "비즈니스 가치",
       "편익-비용 비율, 계획 대비 실제 편익, ROI, NPV"
      ],
      [
       "이해관계자",
       "NPS(순추천지수), 무드 차트, 팀 사기·이직"
      ],
      [
       "예측",
       "ETC·EAC·VAC·TCPI, 처리량 기반 예측"
      ]
     ]
    }
   },
   {
    "h": "지표의 함정",
    "li": [
     "★굿하트의 법칙(Goodhart's Law)★ — 지표가 평가 목표가 되면 좋은 지표 구실을 못 한다 (예: 벨로시티를 성과평가에 연동 → 포인트 부풀리기).",
     "★허영 지표(Vanity metric)★ — 보기 좋지만 결정에 쓸모없는 수치(누적 가입자 수 등).",
     "★수박 보고(Watermelon reporting)★ — 겉은 녹색, 속은 빨강. 지표 정의·데이터 원천을 의심하고 현장 대화로 검증한다.",
     "★조정(Reconciliation)★ — 같은 대상을 다른 원천(재무 시스템 vs 타임시트)으로 잰 값이 다르면 차이 원인을 밝혀 맞춘 뒤 보고한다."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "성과 지표·측정",
  "title": "진척 측정·예측 — EVM으로 상태 판정하기",
  "ref": "ECO 2026 II-9 (Assess current progress · Measure, analyze, and update project metrics)",
  "body": [
   {
    "h": "핵심 공식",
    "tb": {
     "head": [
      "지표",
      "공식",
      "판정"
     ],
     "rows": [
      [
       "CV 원가차이",
       "EV − AC",
       "＋ 절감 / － 초과"
      ],
      [
       "SV 일정차이",
       "EV − PV",
       "＋ 앞섬 / － 지연"
      ],
      [
       "CPI",
       "EV / AC",
       "< 1 원가 초과"
      ],
      [
       "SPI",
       "EV / PV",
       "< 1 일정 지연 (종료 시 1로 수렴)"
      ],
      [
       "EAC (CPI 지속)",
       "BAC / CPI",
       "현재 원가 효율이 계속될 때"
      ],
      [
       "EAC (일회성 편차)",
       "AC + (BAC − EV)",
       "편차 원인이 재발하지 않을 때"
      ],
      [
       "EAC (재추정)",
       "AC + 상향식 ETC",
       "★원래 추정 자체가 틀렸을 때★"
      ],
      [
       "TCPI",
       "(BAC − EV) / (BAC − AC)",
       "> 1 남은 작업을 더 효율적으로 해야 함"
      ],
      [
       "VAC",
       "BAC − EAC",
       "－ 이면 예산 초과 예상"
      ]
     ]
    }
   },
   {
    "h": "상태 평가 순서 (상황형 문항의 정답 흐름)",
    "li": [
     "① 데이터 수집·검증(정확성, 원천 간 조정) → ② 기준선 대비 차이 계산 → ③ ★추세★ 확인(한 번의 편차인지 지속인지) → ④ ★근본 원인 분석(팀과 함께)★ → ⑤ 대응 옵션·예측(EAC) 준비 → ⑥ 이해관계자 보고, 권한·임계치를 넘으면 거버넌스로 에스컬레이션.",
     "\"SPI가 낮다 → 즉시 공정 압축(Fast-tracking)\"은 ★분석을 건너뛴 오답★ 패턴이다.",
     "임계치(Threshold) — 예: CPI가 0.9 아래로 2기간 지속되면 스폰서 보고. ★임계치 안의 편차는 PM이 관리★한다."
    ]
   },
   {
    "h": "애자일·흐름 기반 진척",
    "li": [
     "★벨로시티(Velocity)★ — 반복당 ★완료(DoD 충족)★ 스토리 포인트. 덜 끝난 스토리는 0으로 센다. 팀 간 비교 금지.",
     "★처리량(Throughput)★ — 단위 시간당 완료 항목 수. ★리드타임(Lead time)★ — 요청~인도, ★사이클타임(Cycle time)★ — 착수~완료. 리드타임 ⊇ 사이클타임.",
     "★리틀의 법칙(Little's Law)★ — 평균 사이클타임 = 평균 WIP ÷ 평균 처리량. WIP를 줄이면 사이클타임이 줄어든다.",
     "릴리스 예측 — 남은 포인트 ÷ 평균 벨로시티 = 필요한 반복 수 (범위로 제시하는 것이 정직하다)."
    ]
   },
   {
    "h": "가치·편익 측정",
    "li": [
     "ECO II-3 \"편익을 추적할 측정 체계가 있는지 확인\" — 인도한 기능이 ★실제로 쓰이고 효과를 내는지★(사용률, 처리시간 단축 등)를 본다.",
     "산출물(Output) → 결과(Outcome) → 편익(Benefit) → 가치(Value): ★Output 수만 세는 보고★는 2026 ECO 관점에서 부족하다."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "상태 보고·시각화",
  "title": "상태 보고와 정보 방열기 — 누구에게 무엇을 어떻게",
  "ref": "ECO 2026 II-9 (Communicate project status) · I-8 (reporting requirements)",
  "body": [
   {
    "h": "데이터 → 정보 → 보고",
    "li": [
     "작업성과 ★데이터★(원시 측정치: 완료 활동, 실제 원가) → 기준선과 비교·분석한 ★정보★(CV·SV, 추세) → 이해관계자용 ★보고서★(상태·진척·예측).",
     "보고 요구는 ★이해관계자별로 테일러링★ — 스폰서는 결정 사항·위험·예측, 팀은 작업 흐름, 운영 조직은 이관 준비도.",
     "보고서를 아무도 읽지 않으면 분량을 늘리지 말고 ★정보 요구·형식을 다시 확인★한다."
    ]
   },
   {
    "h": "정보 방열기 (Information Radiator)",
    "li": [
     "앨리스터 코오번(Alistair Cockburn)이 붙인 이름 — 팀 공간에 ★크게 걸어 두어 지나가는 누구나 상태를 볼 수 있는★ 시각 표시물. XP의 Big Visible Chart와 같은 개념.",
     "예: 태스크/칸반 보드, 번다운·번업 차트, 장애(Impediment) 목록, 빌드 상태 표시등.",
     "원리: ★당겨 보는(pull) 투명성★ — 물어보지 않아도 정보가 '방사'된다. 분산 팀은 ★온라인 대시보드★(가상 방열기)로 대체.",
     "정보 냉장고(Information refrigerator) — 문서함·폴더 속에 갇혀 찾아야 보이는 정보 (반대 개념)."
    ]
   },
   {
    "h": "보고 형식 비교",
    "tb": {
     "head": [
      "형식",
      "용도",
      "주의"
     ],
     "rows": [
      [
       "상태 보고서(Status)",
       "현재 시점의 위치",
       "숫자만 있고 해석·조치가 없으면 무용"
      ],
      [
       "진척 보고서(Progress)",
       "기간 동안 달성한 것",
       "Output 나열에 그치지 말 것"
      ],
      [
       "예측(Forecast)",
       "EAC·완료 예상일",
       "단일 값보다 범위·신뢰도"
      ],
      [
       "대시보드",
       "핵심 지표 한눈 요약, RAG(Red·Amber·Green) 신호등",
       "★색 바꿔치기(Green-shifting)★ 금지"
      ],
      [
       "차이·추세 분석",
       "원인과 방향",
       "한 번 편차로 단정 금지"
      ]
     ]
    }
   },
   {
    "h": "PMI 마인드셋 — 보고의 윤리",
    "li": [
     "★나쁜 소식도 정확·적시에★ — 지표를 미화하거나 보고를 늦추는 보기는 정직·투명성 위반으로 오답.",
     "red 신호에는 ★원인 + 회복 대안★을 함께 가져간다. PM 권한·임계치를 넘을 때만 거버넌스 경로로 에스컬레이션.",
     "하이브리드 — 팀 수준 흐름 지표(포인트·처리량)를 ★마일스톤·릴리스 진척★으로 매핑해 경영진 보고와 연결한다."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "상태 보고·시각화",
  "title": "그래프 해석 — 번다운·번업·누적흐름도·S-커브·관리도",
  "ref": "ECO 2026 문항유형 Graphic-Based(NEW) · II-9",
  "body": [
   {
    "h": "번다운 vs 번업",
    "tb": {
     "head": [
      "구분",
      "번다운(Burndown)",
      "번업(Burnup)"
     ],
     "rows": [
      [
       "Y축",
       "★남은★ 작업량",
       "★누적 완료★ 작업량 + 전체 범위선"
      ],
      [
       "범위 변경",
       "남은 작업과 섞여 ★안 보임★(선이 튀어 오를 뿐)",
       "범위선이 따로 있어 ★변경이 보임★"
      ],
      [
       "실제선이 이상선 ★위★",
       "계획보다 뒤처짐",
       "(완료선이 아래면) 뒤처짐"
      ],
      [
       "수평 구간",
       "완료(DoD) 스토리가 없음 → 장애·큰 스토리 의심",
       "완료가 멈춤"
      ],
      [
       "주 용도",
       "스프린트 내부 추적",
       "릴리스·제품 수준 예측"
      ]
     ]
    }
   },
   {
    "h": "누적흐름도 (CFD, Cumulative Flow Diagram)",
    "li": [
     "X축 시간, Y축 누적 항목 수, 상태별(할 일·진행·테스트·완료) ★띠(band)★가 쌓인다.",
     "★수직 거리★ = 그 시점의 WIP / ★수평 거리★ = 대략적인 리드(사이클)타임 / ★완료선의 기울기★ = 처리량.",
     "★특정 띠가 점점 넓어짐★ = 그 단계에 작업이 쌓임 → ★병목★. 대응은 WIP 제한·스워밍(팀이 몰려 돕기).",
     "완료선이 평평 = 인도가 멈춤. 누적 그래프이므로 ★선이 아래로 내려가지 않는다★(내려가면 데이터 오류나 항목 삭제)."
    ]
   },
   {
    "h": "S-커브 (EVM)",
    "li": [
     "PV·EV·AC 누적 곡선. ★EV가 PV 아래★ = 일정 지연, ★AC가 EV 위★ = 원가 초과.",
     "곡선 끝의 BAC(계획)와 EAC(예측) 간격이 VAC."
    ]
   },
   {
    "h": "품질 그래프",
    "li": [
     "★관리도(Control chart)★ — 관리 한계(±3σ, 프로세스가 만듦) ≠ 규격 한계(고객 요구). 한계 밖의 점, 또는 평균 한쪽에 ★연속 7점(Rule of Seven)★ → 이상 원인 조사.",
     "★파레토 차트★ — 원인별 빈도 내림차순, 소수 원인이 대부분 결함(80/20) → 개선 우선순위.",
     "★특성요인도(Ishikawa, Fishbone)★ — 근본 원인 브레인스토밍. ★히스토그램★ — 분포."
    ]
   },
   {
    "h": "그래픽형 문항 풀이 요령",
    "li": [
     "① 축·범례부터 읽는다 (남은 것인지 누적인지) → ② 기준선(이상선·PV)과 비교 → ③ ★추세·기울기 변화 시점★ 찾기 → ④ \"그래서 PM은 무엇을\" — 대부분 ★팀과 원인 분석★이 첫 행동."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "산출물 관리",
  "title": "산출물(Artifact) 관리 — 식별·테일러링·접근성·효과성",
  "ref": "ECO 2026 II-9 (Identify and tailor needed artifacts · created, reviewed, updated, documented · accessibility · effectiveness of artifact management)",
  "body": [
   {
    "h": "산출물의 범주 (PMBOK 7판 분류, 참고)",
    "tb": {
     "head": [
      "범주",
      "예"
     ],
     "rows": [
      [
       "전략 산출물",
       "비즈니스 케이스, 프로젝트 헌장, 비전 선언문, 로드맵"
      ],
      [
       "로그·등록부",
       "가정 로그, 이슈 로그, 변경 로그, 위험 등록부, 이해관계자 등록부, 교훈 등록부, 백로그"
      ],
      [
       "계획서",
       "범위·일정·원가·품질·의사소통·위험·조달 관리계획 등"
      ],
      [
       "계층 차트",
       "WBS, OBS(조직 분류), RBS(자원/위험 분류)"
      ],
      [
       "기준선",
       "범위 기준선, 일정 기준선, 원가 기준선, ★성과측정기준선(PMB)★"
      ],
      [
       "시각 데이터·정보",
       "번다운·번업, CFD, 간트, 대시보드, 정보 방열기, S-커브, 스토리 맵"
      ],
      [
       "보고서",
       "상태 보고서, 품질 보고서, 위험 보고서"
      ],
      [
       "합의·계약",
       "계약서, MOU, SLA"
      ]
     ]
    }
   },
   {
    "h": "테일러링 — '적절한 만큼(Just enough)'",
    "li": [
     "산출물은 ★가치를 주는 만큼만★. 복잡도·규제·조직 거버넌스·팀 분산 정도에 맞춰 종류와 상세도를 고른다.",
     "애자일이라고 문서가 0은 아니다 — 애자일 선언은 \"포괄적 문서보다 작동하는 소프트웨어를 ★더★ 중시\"할 뿐이다.",
     "PMO 템플릿이 과하면 무시하지도, 전부 따르지도 말고 ★거버넌스 요구와 대조해 테일러링을 제안·합의★한다.",
     "규제·감사 대상 프로젝트는 추적성·승인 기록 산출물이 ★필수★ — 테일러링으로 빼면 안 된다."
    ]
   },
   {
    "h": "생성·검토·갱신·문서화 & 접근성",
    "li": [
     "산출물마다 ★소유자·갱신 주기·승인자★를 정한다 (예: 위험 등록부 — PM 소유, 매 반복 검토).",
     "★형상관리(Configuration management)★ — 산출물의 버전·기술 사양을 식별·추적해 '단일 진실 원천'을 유지. ★변경통제★는 기준선 변경의 승인 여부를 결정(BE 도메인 III-3).",
     "★접근성★ — 필요한 사람(외부 협력사·분산 팀 포함)이 ★보안 정책 범위 안에서★ 최신본에 접근해야 한다. 개인 이메일 전송은 보안 위반 오답.",
     "결정 기록(Decision log) — 무엇을, 왜, 누가 승인했는지 남겨 감사·이관에 대비."
    ]
   },
   {
    "h": "산출물 관리의 효과성 평가",
    "li": [
     "ECO는 \"산출물 관리의 효과성을 ★지속적으로★ 평가\"하라고 한다.",
     "점검 질문: 이 산출물을 누가 읽는가? 결정에 쓰였는가? 최신인가? 찾기 쉬운가?",
     "읽히지 않는 보고서 → 이해관계자에게 필요성 확인 후 ★형식 개선 또는 폐기★(일방 폐기 금지), 결과를 회고·교훈에 반영."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-6",
  "t": "품질·인수 기준",
  "title": "품질·인수 기준 — 인수 기준·DoD·DoR·범위 확인",
  "ref": "ECO 2026 II-7 (quality requirements · quality reviews) · II-10 (completion approval) · Agile Practice Guide",
  "body": [
   {
    "h": "세 가지 '기준' 구분",
    "tb": {
     "head": [
      "구분",
      "적용 대상",
      "누가 정하나",
      "질문"
     ],
     "rows": [
      [
       "인수 기준(Acceptance Criteria)",
       "★개별★ 스토리·인도물",
       "PO·고객(팀과 협의)",
       "이 기능이 요구를 만족하는가?"
      ],
      [
       "완료 정의(DoD, Definition of Done)",
       "★모든★ 항목·증분 공통",
       "팀(조직 표준 포함)",
       "출시 가능한 품질로 끝났는가?"
      ],
      [
       "준비 정의(DoR, Definition of Ready)",
       "착수 전 백로그 항목",
       "팀·PO",
       "스프린트에 넣을 만큼 명확한가?"
      ]
     ]
    }
   },
   {
    "h": "완료의 판정",
    "li": [
     "스토리는 ★인수 기준 + DoD★를 모두 충족해야 '완료'. 하나라도 빠지면 미완 → ★벨로시티에 포함하지 않고 백로그로 되돌림★.",
     "DoD는 팀이 성숙하면서 ★점진적으로 강화★한다. 일정 압박으로 항목을 빼는 것은 ★기술 부채★를 숨기는 행동.",
     "인수 기준은 ★측정 가능★해야 한다 — \"사용자 친화적\" 대신 \"신규 사용자가 3분 안에 가입 완료\"."
    ]
   },
   {
    "h": "예측형 — 품질 통제와 범위 확인",
    "li": [
     "★품질 통제(Control Quality)★ — 팀 내부에서 인도물의 ★정확성★ 검사 → '검증된 인도물(Verified deliverables)'.",
     "★범위 확인(Validate Scope)★ — 고객·스폰서가 ★공식 인수★ → '인수된 인도물(Accepted deliverables)'. ★QC가 먼저★, 그다음 Validate.",
     "인수된 인도물이 종료 단계로 넘어가 최종 이관된다. 고객이 인수를 거부하면 먼저 ★인수 기준 대비 사유를 함께 검토★."
    ]
   },
   {
    "h": "품질 비용 (CoQ, Cost of Quality)",
    "tb": {
     "head": [
      "구분",
      "항목",
      "예"
     ],
     "rows": [
      [
       "적합 비용(Conformance)",
       "예방 비용",
       "교육, 표준·프로세스 정비, 설계 리뷰"
      ],
      [
       "",
       "평가 비용",
       "검사, 테스트, 감사"
      ],
      [
       "부적합 비용(Nonconformance)",
       "내부 실패",
       "인도 전 발견한 결함 재작업, 폐기"
      ],
      [
       "",
       "외부 실패",
       "보증 수리, 리콜, 고객 클레임, 평판 손실"
      ]
     ]
    }
   },
   {
    "h": "품질 용어 함정",
    "li": [
     "★등급(Grade) ≠ 품질(Quality)★ — 등급이 낮아도 요구를 만족하면 문제 아님. 품질이 낮으면 언제나 문제.",
     "★QA(품질 보증) = 프로세스 예방★, ★QC(품질 통제) = 산출물 검사★. 반복 결함은 검사 인원 추가보다 ★근본 원인 분석·프로세스 개선★(PDCA).",
     "정밀도(Precision, 반복 일관성) ≠ 정확도(Accuracy, 참값 근접)."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-7",
  "t": "교훈·지식 관리",
  "title": "교훈·지식 관리 — 회고, 교훈 등록부, 암묵지 이전",
  "ref": "ECO 2026 II-10 (final lessons learned, retrospectives) · I-7 (knowledge transfer) · III-6 (Utilize lessons learned)",
  "body": [
   {
    "h": "교훈은 '종료 때'가 아니라 '항상'",
    "li": [
     "★교훈 등록부(Lessons learned register)★ — 프로젝트 ★진행 내내★ 기록하는 프로젝트 문서.",
     "★교훈 저장소(Lessons learned repository)★ — 조직 차원의 ★OPA(조직 프로세스 자산)★. 종료 시 등록부 내용을 정리해 이관.",
     "착수 시 ★과거 교훈 저장소부터 검토★ — 비슷한 프로젝트의 실수를 반복하지 않는 첫 행동.",
     "쌓기만 하고 안 쓰는 저장소는 무용 → 태깅·검색, 착수 체크리스트·표준 프로세스에 반영(III-6 OPA 갱신)."
    ]
   },
   {
    "h": "회고 (Retrospective)",
    "li": [
     "★매 반복 종료 시★ 팀이 스스로 프로세스를 점검·개선(+ 릴리스·프로젝트 종료 시 최종 회고).",
     "흔히 쓰는 5단계(Derby & Larsen): ★분위기 조성 → 데이터 수집 → 통찰 도출 → 실행 항목 결정 → 마무리★.",
     "★심리적 안전★이 전제 — 비난 없는(blameless) 진행, Prime Directive(누구나 그때 아는 범위에서 최선을 다했다고 믿는다, Norm Kerth).",
     "결과는 ★소수의 실행 항목★으로 — 담당·기한을 정하고 다음 회고에서 확인. 많은 불만 목록은 개선이 아니다."
    ]
   },
   {
    "h": "형식지 vs 암묵지",
    "tb": {
     "head": [
      "구분",
      "형식지(Explicit)",
      "암묵지(Tacit)"
     ],
     "rows": [
      [
       "성격",
       "글·그림·숫자로 표현 가능",
       "경험·직관·노하우, 말로 옮기기 어려움"
      ],
      [
       "예",
       "매뉴얼, 설계서, 교훈 등록부",
       "장애 대응 감각, 고객과의 관계 맥락"
      ],
      [
       "이전 수단",
       "문서, 저장소, 교육 자료",
       "★페어링·쉐도잉·멘토링·스토리텔링·실천 공동체★"
      ]
     ]
    }
   },
   {
    "h": "SECI 모델 (노나카·다케우치)",
    "tb": {
     "head": [
      "단계",
      "변환",
      "예"
     ],
     "rows": [
      [
       "공동화(Socialization)",
       "암묵 → 암묵",
       "함께 일하며 관찰·모방, 페어 프로그래밍"
      ],
      [
       "표출화(Externalization)",
       "암묵 → 형식",
       "경험을 문서·모델·비유로 표현"
      ],
      [
       "연결화(Combination)",
       "형식 → 형식",
       "여러 문서를 종합·체계화"
      ],
      [
       "내면화(Internalization)",
       "형식 → 암묵",
       "문서를 실천하며 체득"
      ]
     ]
    }
   },
   {
    "h": "ECO I-7 지식 이전 흐름",
    "li": [
     "프로젝트에 ★결정적인 지식 식별★ → ★지식 수집★ → ★지식 이전 환경 조성★(심리적 안전, 시간 확보).",
     "핵심 인력 이탈 예정 → 문서만 요구하지 말고 ★후임과 페어링·쉐도잉★ + 핵심 내용 문서화를 병행."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-8",
  "t": "이관·종료",
  "title": "프로젝트·단계 종료와 운영 이관",
  "ref": "ECO 2026 II-10 (Manage project closure) 4 Enablers",
  "body": [
   {
    "h": "ECO II-10 네 가지 Enabler",
    "li": [
     "① 프로젝트 완료에 대한 ★이해관계자 승인 확보★ (공식 인수, 서명).",
     "② 프로젝트·단계를 성공적으로 종료할 ★기준 결정★ — ★계획 단계에서★ 핵심 이해관계자와 합의해 두어야 끝에서 다툼이 없다.",
     "③ ★이관 준비도 검증★ — 운영 조직 또는 다음 단계가 받을 준비가 됐는가.",
     "④ 종료 활동 마무리 — ★최종 교훈·회고, 조달 종결, 재무 정산, 자원 해산★."
    ]
   },
   {
    "h": "종료 활동 체크리스트 (예측형 기준 흐름)",
    "li": [
     "인도물 ★최종 인수★ 확인 → 제품·서비스 ★이관★(교육·운영 문서·지원 체계) → ★조달 종결★(인도물 확인, 클레임 해결, 최종 지불, 서면 종결 통지) → ★재무 정산★(계정 마감, 잔여 예비비 반환) → ★최종 교훈·OPA 갱신★ → ★최종 보고서★ → ★기록 보관(Archive)★ → ★자원 해산·성과 인정★.",
     "자원(팀) 해산은 보통 ★마지막★ — 교훈·문서 정리에 팀이 필요하다.",
     "최종 보고서 — 범위·품질·일정·원가 목표 달성도, ★편익 실현 계획·현황★, 위험·이슈 요약을 담는다. 불리한 정보도 빼지 않는다."
    ]
   },
   {
    "h": "이관 준비도 (Transition readiness)",
    "tb": {
     "head": [
      "점검 영역",
      "예"
     ],
     "rows": [
      [
       "인수 기준 충족",
       "기능·비기능 요구 충족, 미해결 결함 수준 합의"
      ],
      [
       "운영 역량",
       "운영팀 교육 완료, 운영 매뉴얼·런북"
      ],
      [
       "지원 체계",
       "헬프데스크·장애 대응 절차, 보증·SLA"
      ],
      [
       "지식 이전",
       "핵심 지식 이전 세션, 형상 정보 인계"
      ],
      [
       "편익 소유자",
       "종료 후 편익 측정 책임자 지정"
      ]
     ]
    }
   },
   {
    "h": "특수 상황",
    "li": [
     "★조기 종료(중단·취소)★ — 그래도 ★종료 절차를 수행★: 완료·미완 상태 문서화, 교훈, 조달·재무 정산, 자원 해산. 즉시 해산은 오답.",
     "★미해결 클레임★ — 계약 종결 전 ★협상★으로 해결 시도 → 안 되면 계약에 정한 ★ADR(조정·중재)★ → 소송은 최후.",
     "고객이 서명을 미루며 추가 기능 요청 → 합의된 인수 기준으로 완료 확인 + 추가 요구는 ★변경 요청 또는 후속 프로젝트★로 분리.",
     "★편익은 종료 후에 실현★되는 경우가 많다 → 편익 측정 책임을 운영·편익 소유자에게 넘긴다.",
     "★단계 게이트(Phase gate / Kill point)★ — 단계 종료 시 성과를 검토해 계속·수정·중단을 결정. 미해결 위험을 숨기면 안 된다.",
     "애자일 — 최종 릴리스 후 ★최종 회고 + 제품 운영 이관★, 남은 백로그 항목의 처리는 ★PO가 결정★."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-1",
  "t": "거버넌스 수립",
  "title": "프로젝트 거버넌스 — 구조·규칙·에스컬레이션·성공지표",
  "ref": "ECO 2026 III-1 Define and establish project governance / PMBOK 8 Governance 성과영역",
  "body": [
   {
    "h": "거버넌스(Governance)란",
    "li": [
     "★프로젝트 거버넌스(Project Governance)★ — 프로젝트를 지휘·통제·감독하는 ★구조·규칙·절차·보고·윤리·정책★의 틀. ECO III-1 은 이것을 ★OPA(조직 프로세스 자산)를 활용해★ 정의·수립하라고 한다.",
     "거버넌스가 답하는 질문: ★누가 무엇을 결정하는가 / 언제 위로 올리는가 / 무엇으로 성공을 판단하는가★.",
     "PMBOK 8판은 ★Governance★ 를 7개 성과영역(Governance·Scope·Schedule·Finance·Stakeholders·Resources·Risk)의 하나로 둔다.",
     "거버넌스는 PM 혼자 만드는 것이 아니라 스폰서·운영위원회(Steering Committee)·PMO 등 조직 구조와 정렬해 ★테일러링★한다."
    ]
   },
   {
    "h": "ECO III-1 Enabler 3가지",
    "tb": {
     "head": [
      "Enabler",
      "의미",
      "시험 포인트"
     ],
     "rows": [
      [
       "구조·규칙·절차·보고·윤리·정책 수립(OPA 활용)",
       "의사결정 권한·회의체·보고 주기·승인 절차",
       "새 조직이면 ★기존 OPA 먼저 확인★, 독자 설계는 오답"
      ],
      [
       "성공 지표 정의(Define success metrics)",
       "KPI·OKR·편익 지표·인수 기준",
       "일정·예산만이 아니라 ★가치·성과★ 포함"
      ],
      [
       "에스컬레이션 경로·임계치(paths and thresholds)",
       "어떤 편차를 누구에게 올릴지 사전 합의",
       "★임계치 초과 시에만★ 분석·대안과 함께 상향"
      ]
     ]
    }
   },
   {
    "h": "OPA vs EEF",
    "tb": {
     "head": [
      "구분",
      "조직 프로세스 자산(OPA)",
      "기업 환경 요인(EEF)"
     ],
     "rows": [
      [
       "정의",
       "조직 내부의 계획·프로세스·정책·지식 저장소",
       "프로젝트 팀이 통제할 수 없는 조건"
      ],
      [
       "예",
       "템플릿·절차·교훈 저장소·과거 프로젝트 파일",
       "조직 문화·구조, 법규, 시장 상황, 인프라"
      ],
      [
       "갱신",
       "★프로젝트가 갱신·기여한다★(교훈 반영)",
       "PM이 바꿀 수 없다 — 대응·적응 대상"
      ]
     ]
    }
   },
   {
    "h": "PMO 유형과 조직 구조",
    "li": [
     "★Supportive PMO★ — 템플릿·모범사례 제공, 통제 낮음 / ★Controlling PMO★ — 방법론·준수 요구, 통제 중간 / ★Directive PMO★ — 프로젝트를 직접 관리, 통제 높음.",
     "조직 구조별 PM 권한: ★기능(Functional) < 약 매트릭스 < 균형 매트릭스 < 강 매트릭스 < 프로젝트(Projectized)★.",
     "단계 게이트(Phase gate) — 단계 끝에서 계속·수정·중단을 결정하는 거버넌스 검토 지점. 애자일·하이브리드에서는 ★증분 데모·작동하는 산출물★을 게이트 근거로 테일러링할 수 있다."
    ]
   },
   {
    "h": "에스컬레이션 판단 공식",
    "li": [
     "① PM 권한·허용 임계치 안 → ★PM이 팀과 해결★.",
     "② 임계치 초과 → ★영향 분석 + 대안 준비 → 거버넌스 경로로 상향★.",
     "③ 즉시 스폰서에게 넘기기·보고 보류·예비비로 몰래 흡수 → 모두 오답 패턴."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-2",
  "t": "컴플라이언스·지속가능성·AI",
  "title": "컴플라이언스 · 지속가능성 · AI 거버넌스",
  "ref": "ECO 2026 III-2 Plan and manage project compliance / PMBOK 8 원칙 Integrate sustainability",
  "body": [
   {
    "h": "컴플라이언스(Compliance) 관리 흐름 — ECO III-2 Enabler",
    "li": [
     "① 요구사항 확인 — ★보안(security)·보건안전(health and safety)·지속가능성(sustainability)·규제(regulatory)★.",
     "② 컴플라이언스 범주 분류(Classify compliance categories).",
     "③ 준수를 위협하는 요인 파악(Determine potential threats).",
     "④ 준수 지원 방법 사용 — 감사·체크리스트·DoD 반영·교육.",
     "⑤ ★미준수 결과 분석(consequences of noncompliance)★ — 벌금·인허가 취소·작업 중단·평판 손상·재작업.",
     "⑥ 필요한 접근·조치 결정 → ⑦ ★준수 정도 측정★(measure the extent)."
    ]
   },
   {
    "h": "PMI 마인드셋 — 컴플라이언스는 타협 불가",
    "li": [
     "일정·원가 압박이 있어도 ★법규·보안·안전 요구는 생략하지 않는다★. 스폰서 지시여도 마찬가지.",
     "정답 패턴: 미준수 결과를 설명 → ★준수를 유지하는 일정·범위 대안★을 함께 찾는다.",
     "위반을 발견하면 ★숨기지 않고 보고★하고 시정한다(정직·책임 — PMI 윤리 강령).",
     "애자일에서는 컴플라이언스 기준을 ★DoD(완료 정의)★ 에 넣어 매 증분에서 검증한다 — 마지막에 몰아서 검증하는 것은 위험."
    ]
   },
   {
    "h": "지속가능성(Sustainability)",
    "li": [
     "PMBOK 8판 6원칙 중 하나: ★Integrate sustainability(지속가능성 통합)★.",
     "ECO 2026 에서 지속가능성은 II-1(핵심 정보 요구), II-7(품질·CoQ), ★III-2(컴플라이언스)·III-5(지속가능성 위험)★ 에 등장한다.",
     "★3중 결산(Triple Bottom Line)★ — 사람(People)·지구(Planet)·이익(Profit/Prosperity). ESG(환경·사회·지배구조) 관점과 연결.",
     "예: 자재 선택의 탄소 영향, 폐기물 규제, 공급망 인권 리스크를 요구사항·위험으로 관리."
    ]
   },
   {
    "h": "AI 도입 거버넌스(2026 신설 강조)",
    "tb": {
     "head": [
      "쟁점",
      "PM의 올바른 대응"
     ],
     "rows": [
      [
       "데이터 보호",
       "기밀·개인정보를 ★공개 생성형 AI에 입력 금지★, 조직 AI 정책 확인"
      ],
      [
       "결과 신뢰성",
       "AI가 만든 추정·일정·문서는 ★사람이 검증(human oversight)★ 후 사용"
      ],
      [
       "편향·투명성",
       "AI 판단 근거 설명 가능성·편향 점검, 의사결정 책임은 사람"
      ],
      [
       "활용 기회",
       "위험 예측·보고서 초안·회의 요약 등 생산성 향상 — 정책 범위 안에서 장려"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-3",
  "t": "위험 식별·분석",
  "title": "위험 식별·정성·정량 분석",
  "ref": "ECO 2026 III-5 Plan and manage risk / PMBOK Risk 성과영역",
  "body": [
   {
    "h": "위험(Risk)의 정의",
    "li": [
     "★위험 = 발생하면 프로젝트 목표에 긍정 또는 부정 영향을 주는 불확실한 사건·조건★. 부정 = 위협(Threat), 긍정 = 기회(Opportunity).",
     "개별 위험(individual risk) vs ★전체 프로젝트 위험(overall project risk)★ — 불확실성 전체가 이해관계자에게 주는 노출.",
     "★위험 성향(risk appetite)★ — 감수할 의향이 있는 불확실성 정도 / ★위험 임계치(risk threshold)★ — 그 이상이면 대응·보고해야 하는 측정 가능한 경계."
    ]
   },
   {
    "h": "위험관리 프로세스 흐름(예측형)",
    "li": [
     "① 위험관리 계획(Plan Risk Management) → ② 위험 식별 → ③ ★정성적 분석★ → ④ ★정량적 분석★ → ⑤ 대응 계획 → ⑥ 대응 실행 → ⑦ 위험 감시.",
     "식별 기법: 브레인스토밍·체크리스트·인터뷰·★가정 및 제약 분석★·SWOT·근본원인 분석·★델파이(Delphi, 익명 전문가 합의)★·RBS(위험 분류 체계).",
     "식별된 위험은 즉시 ★위험 등록부(Risk Register)★ 에 기록하고 ★위험 책임자(risk owner)★ 를 지정한다."
    ]
   },
   {
    "h": "정성 vs 정량 분석",
    "tb": {
     "head": [
      "구분",
      "정성적 분석(Qualitative)",
      "정량적 분석(Quantitative)"
     ],
     "rows": [
      [
       "목적",
       "개별 위험 ★우선순위★ 결정",
       "전체 프로젝트 목표에 대한 ★수치 영향★"
      ],
      [
       "도구",
       "확률·영향 매트릭스(P-I Matrix), 위험 데이터 품질 평가, 긴급성 평가",
       "★몬테카를로 시뮬레이션★, 민감도 분석(★토네이도 다이어그램★), EMV, 의사결정나무"
      ],
      [
       "속도·비용",
       "빠르고 저렴 — 모든 프로젝트",
       "시간·데이터 필요 — 대형·고위험 프로젝트에 선택적"
      ],
      [
       "순서",
       "먼저",
       "정성 이후(생략 가능)"
      ]
     ]
    }
   },
   {
    "h": "EMV(기대금전가치) 계산",
    "li": [
     "★EMV = 확률 × 영향★. 위협은 음수(−), 기회는 양수(+).",
     "예: 위협 30% × −20,000달러 = −6,000 / 기회 20% × +10,000 = +2,000 → 합계 ★−4,000달러★.",
     "의사결정나무 — 각 분기 EMV에서 투자비를 반영해 비교, 기대가치가 가장 유리한 대안을 고른다."
    ]
   },
   {
    "h": "애자일·하이브리드의 위험 식별",
    "li": [
     "짧은 반복·잦은 피드백 자체가 위험을 줄인다 — 매 반복 계획·일일 조정 회의·회고에서 위험을 다시 본다.",
     "★스파이크(Spike)★ — 기술 불확실성을 조기에 탐색하는 시간 제한 실험.",
     "★위험 조정 백로그(risk-adjusted backlog)★ — 위험 대응 작업을 백로그 항목으로 넣어 가치와 함께 우선순위화."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-4",
  "t": "위험 대응·통제",
  "title": "위험 대응 전략 · 예비비 · 감시",
  "ref": "ECO 2026 III-5 / II-6 Manage financial reserves",
  "body": [
   {
    "h": "대응 전략 — 위협 5 / 기회 5",
    "tb": {
     "head": [
      "위협(Threat)",
      "의미",
      "기회(Opportunity)",
      "의미"
     ],
     "rows": [
      [
       "Escalate(상향)",
       "PM 권한·범위 밖 → 적절한 책임자에게",
       "Escalate(상향)",
       "권한 밖 기회를 상위로"
      ],
      [
       "Avoid(회피)",
       "계획 변경으로 위협 ★제거★",
       "Exploit(활용)",
       "기회 실현을 ★확실히★(불확실성 제거)"
      ],
      [
       "Transfer(전가)",
       "영향·책임을 ★제3자★에게(보험·계약)",
       "Share(공유)",
       "기회를 가장 잘 살릴 제3자와 공유(JV)"
      ],
      [
       "Mitigate(완화)",
       "확률·영향을 ★감소★",
       "Enhance(증대)",
       "확률·영향을 ★증가★"
      ],
      [
       "Accept(수용)",
       "능동(예비비)·수동(아무것도 안 함)",
       "Accept(수용)",
       "생기면 취함"
      ]
     ]
    }
   },
   {
    "h": "대응 이후 남는 것들",
    "li": [
     "★잔여 위험(Residual risk)★ — 대응 후에도 남는 위험.",
     "★2차 위험(Secondary risk)★ — 대응을 실행했기 때문에 ★새로 생긴★ 위험.",
     "★트리거(Trigger)★ — 위험 발생이 임박했다는 징후 → 계획된 대응 실행 신호.",
     "★비상 계획(Contingency plan)★ — 트리거 시 실행 / ★대체 계획(Fallback plan)★ — 비상 계획이 효과 없을 때.",
     "★우회책(Workaround)★ — 계획에 없던(미식별) 위험·문제에 대한 즉흥 대응."
    ]
   },
   {
    "h": "예비비(Reserve)",
    "tb": {
     "head": [
      "구분",
      "우발 예비(Contingency reserve)",
      "관리 예비(Management reserve)"
     ],
     "rows": [
      [
       "대상",
       "★식별된 위험(known-unknowns)★",
       "★미식별 위험(unknown-unknowns)★"
      ],
      [
       "위치",
       "★원가 기준선 안★",
       "원가 기준선 밖, ★프로젝트 예산 안★"
      ],
      [
       "사용 권한",
       "위험 대응 계획에 따라 PM",
       "★경영진 승인·변경 요청★ 필요"
      ],
      [
       "산정",
       "EMV 합계 등 예비 분석",
       "조직 정책(예: 예산의 일정 비율)"
      ]
     ]
    }
   },
   {
    "h": "위험 감시(Monitor Risks)",
    "li": [
     "위험 재평가·★위험 감사(risk audit)★·예비 분석(reserve analysis)·기술 성과 분석.",
     "식별된 위험이 발생하면 ★새 대응을 고안하지 말고 등록부의 계획된 대응을 실행★ → 이슈 로그에 기록.",
     "애자일: ★위험 번다운 차트★(위험 노출도 추세), 정보 방열기로 투명하게 공유.",
     "위험 상태를 이해관계자에게 소통(ECO III-5 Communicate the status of a risk impact)."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-5",
  "t": "변경 관리·통제",
  "title": "통합 변경 통제와 CCB",
  "ref": "ECO 2026 III-3 Manage and control changes",
  "body": [
   {
    "h": "통합 변경 통제(Integrated Change Control) 흐름",
    "li": [
     "① 변경 요청(CR) ★문서화★ — 구두 요청도 반드시 문서로.",
     "② ★영향 분석★ — 범위·일정·원가·품질·위험·자원 전체.",
     "③ ★CCB(변경통제위원회)★ 또는 권한자 검토 → 승인·연기·거절.",
     "④ 승인 시 계획서·기준선·문서 갱신 → ⑤ 결정 ★소통★ → ⑥ 구현 → ⑦ 구현 결과 검증.",
     "★변경 로그(Change log)★ 에는 승인된 것뿐 아니라 ★거절·보류된 요청까지★ 기록한다."
    ]
   },
   {
    "h": "ECO III-3 Enabler",
    "tb": {
     "head": [
      "Enabler",
      "핵심 행동"
     ],
     "rows": [
      [
       "Execute the change control process",
       "절차 우회 금지 — PM 단독 승인·거절 불가"
      ],
      [
       "Communicate the status of proposed changes",
       "요청자·이해관계자에게 진행 상태 공유"
      ],
      [
       "Implement approved changes",
       "승인된 것만 구현(승인 전 구현 = 무단 변경)"
      ],
      [
       "Update project documentation",
       "계획서·기준선·요구사항·등록부 갱신"
      ]
     ]
    }
   },
   {
    "h": "예측형 vs 애자일 변경",
    "tb": {
     "head": [
      "구분",
      "예측형",
      "애자일"
     ],
     "rows": [
      [
       "변경 관점",
       "기준선 보호 — 공식 통제",
       "★변경을 환영★ — 백로그로 흡수"
      ],
      [
       "결정자",
       "CCB·스폰서(권한 위임 수준에 따라)",
       "★Product Owner★ 가 백로그 우선순위 결정"
      ],
      [
       "진행 중 반복",
       "—",
       "★스프린트 목표 보호★ — 원칙적으로 다음 반복에 반영"
      ],
      [
       "기록",
       "변경 로그·형상관리",
       "백로그 이력·리뷰 피드백"
      ]
     ]
    }
   },
   {
    "h": "관련 용어",
    "li": [
     "★형상 관리(Configuration management)★ — 산출물의 버전·기능·물리 특성을 식별·통제 / 변경 통제는 ★기준선 변경 결정★ 자체.",
     "★골드 플레이팅(Gold plating)★ — 요청 없이 범위를 덧붙이는 것. 고객이 좋아해도 ★무단 변경★.",
     "★범위 추가(Scope creep)★ — 통제되지 않은 범위 확대.",
     "긴급 변경 — 거버넌스에 정의된 ★긴급 절차★ 로 처리하되 ★사후 문서화·승인★ 을 생략하지 않는다."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-6",
  "t": "장애 제거·이슈 관리",
  "title": "장애 제거와 이슈 관리 — 위험이 이슈가 될 때",
  "ref": "ECO 2026 III-4 Remove impediments and manage issues",
  "body": [
   {
    "h": "위험 vs 이슈 vs 장애",
    "tb": {
     "head": [
      "구분",
      "위험(Risk)",
      "이슈(Issue)",
      "장애(Impediment)"
     ],
     "rows": [
      [
       "시점",
       "미래·불확실",
       "★현재 발생★",
       "현재 팀 진행을 막음"
      ],
      [
       "기록",
       "위험 등록부",
       "★이슈 로그★",
       "장애 보드·정보 방열기"
      ],
      [
       "관리",
       "확률·영향 분석, 대응 계획",
       "책임자·기한·해결 조치",
       "서번트 리더가 제거"
      ]
     ]
    }
   },
   {
    "h": "ECO III-4 Enabler 흐름",
    "li": [
     "① 장애 영향 평가 → ② ★우선순위화·가시화★ → ③ 개입 전략 결정·적용 → ④ ★지속 재평가★.",
     "⑤ ★위험이 이슈가 되는 순간 인식(Recognize when a risk becomes an issue)★ → 계획된 대응 실행 + 이슈 로그.",
     "⑥ 관련 이해관계자와 ★협업★ 해 해결 접근법 결정."
    ]
   },
   {
    "h": "서번트 리더의 장애 제거",
    "li": [
     "팀이 스스로 풀 수 있는 문제는 ★팀에 맡긴다★(자기조직화 존중) — PM이 모든 기술 문제를 직접 해결하는 것은 오답.",
     "팀 밖 장애(타 부서 승인·권한·자원)는 ★PM/스크럼 마스터가 직접 당사자와 협의★ 해 제거.",
     "일일 조정 회의(Daily coordination meeting, 구 daily standup)에서는 장애를 ★공유만★ 하고 해결 논의는 회의 후 별도로.",
     "반복되는 장애는 ★근본원인 분석★ 후 회고에서 재발 방지."
    ]
   },
   {
    "h": "에스컬레이션 순서",
    "li": [
     "당사자와 직접 협의 → 해결 불가·권한 밖이면 ★거버넌스 경로로 에스컬레이션★(분석·대안 동반).",
     "★RAID 로그★ — Risks·Assumptions·Issues·Dependencies 를 한 곳에서 관리하는 실무 도구."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-7",
  "t": "지속적 개선·가치 실현",
  "title": "지속적 개선과 가치·편익 실현",
  "ref": "ECO 2026 III-6 Continuous improvement / II-3 가치기반 인도",
  "body": [
   {
    "h": "ECO III-6 지속적 개선 Enabler",
    "li": [
     "① ★교훈 활용(Utilize lessons learned)★ — 착수 시 과거 교훈부터 검토.",
     "② 지속적 개선 프로세스 최신화.",
     "③ ★OPA 갱신★ — 교훈·템플릿을 조직 저장소에 반영."
    ]
   },
   {
    "h": "교훈 문서 구분",
    "tb": {
     "head": [
      "구분",
      "교훈 등록부(Lessons learned register)",
      "교훈 저장소(Lessons learned repository)"
     ],
     "rows": [
      [
       "성격",
       "★프로젝트 문서★",
       "★OPA(조직 자산)★"
      ],
      [
       "시점",
       "★프로젝트 내내★ 기록",
       "단계·프로젝트 종료 시 이관"
      ],
      [
       "활용",
       "현재 프로젝트 즉시 개선",
       "미래 프로젝트 참고"
      ]
     ]
    }
   },
   {
    "h": "개선 기법",
    "li": [
     "★PDCA(Plan-Do-Check-Act)★ — Shewhart 가 제시하고 Deming 이 보급한 개선 주기.",
     "★Kaizen★ — 작고 지속적인 개선. ★회고(Retrospective)★ — 매 반복 끝 팀 프로세스 개선.",
     "교훈은 종료 때만이 아니라 ★진행 중 지속 수집·즉시 적용★ 이 정답."
    ]
   },
   {
    "h": "산출물 → 결과 → 편익 → 가치",
    "tb": {
     "head": [
      "단계",
      "의미",
      "예(CRM 도입)"
     ],
     "rows": [
      [
       "산출물(Output)",
       "프로젝트가 만든 것",
       "CRM 시스템 구축"
      ],
      [
       "결과(Outcome)",
       "산출물 사용으로 생긴 변화",
       "상담 처리 시간 단축"
      ],
      [
       "편익(Benefit)",
       "조직이 얻는 이득",
       "고객 유지율 상승·매출 증가"
      ],
      [
       "가치(Value)",
       "이해관계자가 인식하는 가치(편익−비용 등)",
       "투자 대비 전략 목표 기여"
      ]
     ]
    }
   },
   {
    "h": "편익 관리(Benefits management)",
    "li": [
     "★비즈니스 케이스(Business case)★ — 왜 하는가(정당성) / ★편익 관리 계획서★ — 목표 편익·측정 지표·★편익 책임자(benefits owner)★·실현 시기.",
     "편익은 ★프로젝트 종료 후 운영 단계에서 실현되는 경우가 많다★ — 측정 체계를 미리 마련(ECO II-3 Verify a measurement system).",
     "중간에 비즈니스 가치가 떨어지면 비즈니스 케이스를 재검토하고 스폰서와 ★지속·조정·중단★ 을 판단."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-8",
  "t": "조직 변화·외부 환경",
  "title": "조직 변화 지원과 외부 비즈니스 환경 평가",
  "ref": "ECO 2026 III-7 Support organizational change / III-8 Evaluate external business environment changes",
  "body": [
   {
    "h": "ECO III-7 조직 변화 지원",
    "li": [
     "① ★조직 문화 평가(Assess organizational culture)★ — 위계·위험 감수 성향·변화 준비도.",
     "② ★조직 변화가 프로젝트에 미치는 영향 평가 → 필요한 조치 결정★(재조직·합병·리더 교체·우선순위 변경).",
     "변화 저항에는 ★원인 파악(인식·필요성·역량)★ → 소통·교육·변화 챔피언 → 강요·무시는 오답."
    ]
   },
   {
    "h": "조직 변화 모델 `[확인필요: 2026 출제 근거]`",
    "tb": {
     "head": [
      "모델",
      "단계"
     ],
     "rows": [
      [
       "Lewin",
       "해빙(Unfreeze) → 변화(Change) → 재동결(Refreeze)"
      ],
      [
       "ADKAR(Prosci)",
       "인식(Awareness) → 열망(Desire) → 지식(Knowledge) → 능력(Ability) → 강화(Reinforcement)"
      ],
      [
       "Kotter 8단계",
       "①위기감 조성 ②변화 추진 연합 ③비전·전략 ④비전 전파 ⑤장애 제거·권한 부여 ⑥단기 성과 ⑦성과 기반 가속 ⑧문화에 정착"
      ]
     ]
    }
   },
   {
    "h": "ECO III-8 외부 환경 변화",
    "li": [
     "① 외부 환경 변화 조사 — ★규제·기술·지정학·시장★.",
     "② ★범위·백로그에 대한 영향 평가·우선순위화★.",
     "③ ★지속적으로★ 외부 환경을 재검토(일회성 아님 — 선제적 행동).",
     "분석 틀: ★PESTLE★(Political·Economic·Social·Technological·Legal·Environmental), SWOT."
    ]
   },
   {
    "h": "상황형 정답 패턴",
    "li": [
     "새 규제·관세·경쟁사 출시 → ★먼저 영향 평가★ → 예측형은 변경요청, 애자일은 ★PO와 백로그 재우선순위화★.",
     "\"공식 시행될 때까지 기다린다\"·\"즉시 전면 재계획\" → 오답(각각 수동적·성급).",
     "조직 개편으로 팀이 불안 → 영향 평가 + ★투명한 소통★ + 필요 시 계획·자원 조정."
    ]
   },
   {
    "h": "AI·기술 변화와 외부 환경",
    "li": [
     "생성형 AI 등 기술 변화는 III-8의 ★기술(technology)★ 변화 — 범위·백로그·역량 영향 평가 대상.",
     "도입 시에는 III-2 컴플라이언스(데이터 보호·규제)와 III-7 조직 변화(역량·저항)를 함께 본다."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-1",
  "t": "PMBOK 8 개요·판별 변화",
  "title": "PMBOK 가이드 6·7·8판 변천과 8판의 위치",
  "ref": "PMBOK 8판 공식 페이지(S5) · ECO 2026 p4 · 명세 §3",
  "body": [
   {
    "h": "판별 구조 한눈에",
    "tb": {
     "head": [
      "판",
      "출간",
      "핵심 구조",
      "특징"
     ],
     "rows": [
      [
       "6판",
       "2017",
       "5 프로세스 그룹 · 10 지식영역 · ★49 프로세스★",
       "입력·도구·산출물(ITTO) 중심, 예측형 위주"
      ],
      [
       "7판",
       "2021",
       "★12 원칙 · 8 성과영역★",
       "프로세스 제거, 원칙 기반, 모델·방법·산출물, 테일러링 강조"
      ],
      [
       "(보완)",
       "2022",
       "Process Groups: A Practice Guide",
       "7판에서 빠진 프로세스를 실무 가이드로 보완"
      ],
      [
       "8판",
       "★2025-11★",
       "★6 원칙 · 7 성과영역★ + 5 Focus Areas",
       "7판 체계를 단순화, ★비처방형 프로세스 지침 재도입★, AI·PMO·조달 확대"
      ]
     ]
    }
   },
   {
    "h": "8판의 핵심 변화",
    "li": [
     "원칙 ★12 → 6★: 7판 원칙을 묶고 다듬어 6개로 줄였다(가치·품질은 유지, ★지속가능성★이 원칙 이름으로 전면 등장).",
     "성과영역 ★8 → 7★: ★Governance(거버넌스)·Finance(재무)★가 영역 이름으로 등장하고, 범위·일정·자원·위험·이해관계자가 함께 제시된다.",
     "프로세스 지침 재도입: 6판식 프로세스를 ★비처방형(non-prescriptive)★으로 다시 넣고 ★5 Focus Areas★(착수·기획·실행·감시통제·종료)로 묶었다 [2차출처].",
     "PMI는 8판에서 ★AI·PMO·조달★ 내용을 늘렸다고 소개한다(S5).",
     "40개 프로세스로 알려져 있으나 ★원문 목록은 [확인필요]★ — 개별 프로세스 이름을 단정해 암기하지 말 것."
    ]
   },
   {
    "h": "ECO와 PMBOK의 관계",
    "li": [
     "ECO(시험 내용 개요)는 ★실무 Task 기반★, PMBOK은 ★지식·원칙 기반★ — 둘은 1:1로 겹치지 않는다(ECO p4).",
     "시험은 특정 교재 한 권에 근거하지 않는다(ECO p23). 원칙·성과영역은 ★상황형 문항의 판단 기준★으로 쓰인다.",
     "2026 시험은 8판 체계와 정합한다는 2차 출처 언급이 있고, PMI는 7판 학습자에게 ★핵심 원칙은 동일★하다고 안내한다(S2)."
    ]
   },
   {
    "h": "학습 전략",
    "li": [
     "① 8판 6원칙·7성과영역 이름을 ★영어 원어★로 암기 → ② 7판 12원칙·8성과영역과 대응표로 연결 → ③ ECO Task와 매핑.",
     "예측형 문항(약 40%)은 Focus Area 흐름(헌장 → 계획 → 실행 → 감시통제 → 종료)으로, 애자일·하이브리드 문항(약 60%)은 원칙·테일러링으로 판단한다.",
     "★함정★: '8판은 7판을 버리고 6판으로 돌아갔다' — 원칙·성과영역 체계를 ★유지★하면서 프로세스를 보조 지침으로 더한 것이다."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-2",
  "t": "PMBOK 8 원칙",
  "title": "PMBOK 8판 6원칙 — 상황형 문항의 판단 기준",
  "ref": "PMBOK 8판 공식 페이지(S5) · 명세 §3 · PMI 마인드셋(명세 §4.1)",
  "body": [
   {
    "h": "6원칙 정리",
    "tb": {
     "head": [
      "원칙(영문)",
      "한국어",
      "핵심 의미",
      "정답 신호"
     ],
     "rows": [
      [
       "Adopt a holistic view",
       "전체론적 관점 채택",
       "프로젝트를 상호작용하는 ★시스템★으로 보고 부분 변경의 연쇄 영향을 함께 본다",
       "다른 팀·운영·이해관계자 영향까지 분석"
      ],
      [
       "Focus on value",
       "가치 집중",
       "산출물보다 ★성과·편익·가치★ 실현을 기준으로 판단한다",
       "편익 지표 확인, 가치 기준 우선순위"
      ],
      [
       "Embed quality",
       "품질 내재화",
       "검사보다 ★프로세스·산출물에 품질을 심는다★",
       "인수 기준·DoD 준수, 품질 희생 거부"
      ],
      [
       "Lead accountably",
       "책임 있는 리더십",
       "결정·결과에 ★책임★지고 투명하게 행동한다",
       "실수 인정·투명 보고"
      ],
      [
       "Integrate sustainability",
       "지속가능성 통합",
       "환경·사회·경제적 영향을 계획과 결정에 ★통합★한다",
       "ESG·장기 영향 분석 후 대안 제시"
      ],
      [
       "Build empowered teams/culture",
       "권한 부여된 팀·문화 구축",
       "팀이 ★스스로 결정·개선★하도록 권한과 신뢰를 준다",
       "PM은 촉진, 팀이 결정"
      ]
     ]
    }
   },
   {
    "h": "원칙의 성격",
    "li": [
     "원칙은 ★행동·판단을 안내하는 기준★이지 순서가 있는 절차가 아니다.",
     "7판은 원칙에 ★순서·가중치를 두지 않는다★고 밝혔다. 8판도 같은 취지로 보는 것이 자연스럽지만 원문 문구는 [확인필요].",
     "원칙 영문 표기는 공식 페이지 요약을 따랐다. 6번째 원칙의 정확한 원문(teams/culture)은 [확인필요]."
    ]
   },
   {
    "h": "원칙 ↔ ECO Task 연결",
    "tb": {
     "head": [
      "원칙",
      "연결되는 ECO 2026 Task"
     ],
     "rows": [
      [
       "전체론적 관점",
       "II-1 통합계획(의존성·갭 평가), III-7 조직 변화, III-8 외부환경"
      ],
      [
       "가치 집중",
       "II-3 가치기반 인도, I-1 공동 비전"
      ],
      [
       "품질 내재화",
       "II-7 품질 계획·최적화(CoQ)"
      ],
      [
       "책임 있는 리더십",
       "I-3 팀 리딩, III-1 거버넌스, I-8 보고"
      ],
      [
       "지속가능성 통합",
       "II-1(지속가능성 정보), II-7, III-2 컴플라이언스, III-5 위험"
      ],
      [
       "권한 부여된 팀·문화",
       "I-3 Empower the team, I-7 지식 이전, III-6 지속 개선"
      ]
     ]
    }
   },
   {
    "h": "원칙 적용 상황형 패턴",
    "li": [
     "'즉시 승인·즉시 삭제' 보기 → 대부분 오답. ★먼저 영향 분석★ 후 대안과 함께 의사결정권자와 검토한다.",
     "스폰서 요청이라도 지속가능성·품질을 희생하는 요구는 ★영향을 수치·대안으로 제시★해 판단을 돕는다(무조건 거부도 오답).",
     "팀이 결정할 수 있는 일을 PM이 대신 정하면 '권한 부여' 원칙 위반 — PM은 ★서번트 리더로서 촉진★한다.",
     "자신의 실수를 숨기거나 남 탓으로 돌리는 보기는 '책임 있는 리더십'·윤리(정직) 위반."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-3",
  "t": "PMBOK 8 성과영역",
  "title": "PMBOK 8판 7성과영역과 ECO Task 매핑",
  "ref": "PMBOK 8판 공식 페이지(S5) · ECO 2026 Domain I~III",
  "body": [
   {
    "h": "7성과영역 정리",
    "tb": {
     "head": [
      "성과영역",
      "핵심 질문",
      "주요 ECO 2026 Task"
     ],
     "rows": [
      [
       "★Governance★(거버넌스)",
       "누가 어떤 기준·한도로 결정하고 감독하는가",
       "III-1 거버넌스, III-3 변경 통제, I-8 보고·거버넌스 지원"
      ],
      [
       "Scope(범위)",
       "무엇을 만들고 무엇을 만들지 않는가",
       "II-2 범위, II-3 가치기반 인도"
      ],
      [
       "Schedule(일정)",
       "언제·어떤 순서로 인도하는가",
       "II-8 일정 계획·관리"
      ],
      [
       "★Finance★(재무)",
       "돈을 어떻게 확보·추적·보고하고 가치로 회수하는가",
       "II-6 재무 계획·관리(예비비 포함)"
      ],
      [
       "Stakeholders(이해관계자)",
       "누구의 기대를 어떻게 정렬·관리하는가",
       "I-4·I-5·I-6 이해관계자, I-8 의사소통"
      ],
      [
       "Resources(자원)",
       "사람·장비·자재·공급사를 어떻게 확보·최적화하는가",
       "II-4 자원, I-3 팀 리딩, II-5 조달(연계)"
      ],
      [
       "Risk(위험)",
       "불확실성(위협·기회)을 어떻게 다루는가",
       "III-5 위험, III-4 이슈(위험→이슈 전환)"
      ]
     ]
    }
   },
   {
    "h": "성과영역의 성격",
    "li": [
     "성과영역은 ★서로 영향을 주고받으며 동시에 작동★하는 관련 활동 묶음이다 — 순서대로 끝내는 단계가 아니다.",
     "어떤 개발 접근법(예측·적응·하이브리드)에서도 모든 영역이 적용되며 ★방식만 테일러링★된다.",
     "★품질·지속가능성★은 독립 성과영역이 아니라 ★원칙★(Embed quality·Integrate sustainability)으로 전 영역에 걸쳐 반영된다."
    ]
   },
   {
    "h": "7판 대비 재편 포인트(해석)",
    "li": [
     "7판 Uncertainty(불확실성) → 8판 ★Risk★로 이름이 직접적이 됐다.",
     "7판 Team → 8판 ★Resources★(팀은 자원·리더십 맥락으로) — 팀 문화 측면은 원칙 '권한 부여된 팀·문화'로 이어진다.",
     "7판 Planning·Project Work·Delivery·Measurement·Development Approach의 내용은 Scope·Schedule·Finance·Governance 등에 ★분산★된 것으로 보는 해석이 일반적 — 공식 대응표는 [확인필요].",
     "조달(procurement) 내용이 어느 영역에 주로 배치됐는지 원문은 [확인필요] — Resources·Finance·Governance와 함께 학습한다."
    ]
   },
   {
    "h": "상황형 적용",
    "li": [
     "Governance: PM 권한·임계치를 넘으면 ★정해진 에스컬레이션 경로★로, 분석과 대안을 갖고 올린다(III-1).",
     "Finance: 원가 기준선 준수만이 아니라 ★편익 측정 체계·예비비·재무 보고★까지 본다(II-6).",
     "Risk: 위협과 ★기회★를 모두 다루며, 식별된 위험이 발생하면 계획된 대응 실행 + 이슈 전환 판단(III-4·III-5)."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-4",
  "t": "Focus Area·프로세스",
  "title": "5 Focus Areas와 프로세스 지침의 재도입",
  "ref": "PMBOK 8판 소개(S5) · 2차출처(S7) · 명세 §3",
  "body": [
   {
    "h": "5 Focus Areas [2차출처]",
    "tb": {
     "head": [
      "Focus Area",
      "목적",
      "대표 결과물"
     ],
     "rows": [
      [
       "Initiating(착수)",
       "프로젝트·단계를 정의하고 ★공식 승인★을 얻는다",
       "프로젝트 헌장, 이해관계자 식별 결과"
      ],
      [
       "Planning(기획)",
       "목표 달성을 위한 범위·일정·재무·위험 등의 방법을 정한다",
       "통합 관리계획, 기준선"
      ],
      [
       "Executing(실행)",
       "계획된 작업을 수행해 인도물을 만든다",
       "인도물, 작업성과 데이터"
      ],
      [
       "Monitoring & Controlling(감시·통제)",
       "성과를 측정·분석해 편차를 시정하고 변경을 통제한다",
       "성과 보고, 변경요청, 승인된 변경"
      ],
      [
       "Closing(종료)",
       "프로젝트·단계를 공식 마무리하고 이관한다",
       "최종 인수, 교훈, 이관 기록"
      ]
     ]
    }
   },
   {
    "h": "'비처방형' 재도입의 뜻",
    "li": [
     "8판은 7판에서 빠졌던 프로세스 지침을 ★다시 넣었지만 의무가 아닌 참고용(non-prescriptive)★으로 둔다.",
     "프로젝트 맥락에 맞게 ★선택·조합·테일러링★한다 — '모든 프로세스 산출물 제출 의무화'는 8판 취지와 맞지 않는다.",
     "프로세스 수는 40개로 알려져 있으나(2차 출처) ★목록·영역 배치 원문은 [확인필요]★."
    ]
   },
   {
    "h": "Focus Area ≠ 단계(Phase)",
    "li": [
     "6판 프로세스 그룹과 마찬가지로 Focus Area는 ★생애주기 단계가 아니다★. 한 단계·한 반복 안에서도 착수~종료 활동이 반복될 수 있다.",
     "Closing은 ★프로젝트 종료뿐 아니라 단계 종료★에도 적용된다.",
     "감시·통제는 마지막에 한 번 하는 일이 아니라 ★전 기간에 걸쳐 지속★된다."
    ]
   },
   {
    "h": "예측형 문항 판단 흐름",
    "li": [
     "헌장 승인 전에 상세 계획·작업 착수 → 오답. ★헌장(스폰서 발행)이 PM 권한의 근거★다.",
     "편차 발견 → 즉시 압축·기준선 수정은 오답, ★근본원인 분석 → 시정조치 검토 → 필요 시 변경요청★.",
     "인수 직후 팀 해산 → 오답, ★교훈·조달 종결·재무 마감·운영 이관 확인 후 자원 해제★(ECO II-10)."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-5",
  "t": "PMBOK 7 대비",
  "title": "PMBOK 7판 12원칙·8성과영역과 8판 대응",
  "ref": "PMBOK 7판(2021) · 명세 §3",
  "body": [
   {
    "h": "7판 12원칙과 8판 대응(해석)",
    "tb": {
     "head": [
      "7판 원칙(약칭)",
      "7판 원문 요지",
      "8판 대응(해석)"
     ],
     "rows": [
      [
       "Stewardship",
       "Be a diligent, respectful, and caring steward",
       "책임 있는 리더십 · 지속가능성 통합"
      ],
      [
       "Team",
       "Create a collaborative project team environment",
       "권한 부여된 팀·문화"
      ],
      [
       "Stakeholders",
       "Effectively engage with stakeholders",
       "가치 집중 · 전체론적 관점 (+ 성과영역 Stakeholders)"
      ],
      [
       "Value",
       "Focus on value",
       "★가치 집중(유지)★"
      ],
      [
       "Systems thinking",
       "Recognize, evaluate, and respond to system interactions",
       "전체론적 관점"
      ],
      [
       "Leadership",
       "Demonstrate leadership behaviors",
       "책임 있는 리더십"
      ],
      [
       "Tailoring",
       "Tailor based on context",
       "전 원칙의 적용 방식(테일러링은 8판에서도 핵심 개념)"
      ],
      [
       "Quality",
       "Build quality into processes and deliverables",
       "★품질 내재화(유지)★"
      ],
      [
       "Complexity",
       "Navigate complexity",
       "전체론적 관점"
      ],
      [
       "Risk",
       "Optimize risk responses",
       "(성과영역 Risk로 이동)"
      ],
      [
       "Adaptability & resiliency",
       "Embrace adaptability and resiliency",
       "전체론적 관점 · 권한 부여된 팀"
      ],
      [
       "Change",
       "Enable change to achieve the envisioned future state",
       "전체론적 관점(조직 변화) · 가치 집중"
      ]
     ]
    }
   },
   {
    "h": "7판 8성과영역과 8판 대응(해석)",
    "tb": {
     "head": [
      "7판 성과영역",
      "핵심",
      "8판 대응(해석)"
     ],
     "rows": [
      [
       "Stakeholders",
       "이해관계자 참여",
       "Stakeholders(유지)"
      ],
      [
       "Team",
       "팀 문화·리더십",
       "Resources (+ 원칙 '권한 부여된 팀')"
      ],
      [
       "Development Approach & Life Cycle",
       "예측·적응·하이브리드, 인도 주기(cadence)",
       "테일러링·Governance·Schedule에 분산"
      ],
      [
       "Planning",
       "범위·일정·예산 등 계획",
       "Scope · Schedule · Finance"
      ],
      [
       "Project Work",
       "프로세스·자원·조달·지식 관리",
       "Resources · Governance"
      ],
      [
       "Delivery",
       "범위·품질·가치 인도",
       "Scope (+ 원칙 가치·품질)"
      ],
      [
       "Measurement",
       "지표·성과 측정",
       "Finance · Governance 등에 분산"
      ],
      [
       "Uncertainty",
       "위험·모호성·복잡성·변동성",
       "★Risk★"
      ]
     ]
    }
   },
   {
    "h": "대응표 사용 시 주의",
    "li": [
     "위 두 표는 ★학습용 해석★이다. PMI 공식 7↔8 대응표는 [확인필요] — 시험에서 '공식 대응'을 묻는 형태로는 나오기 어렵다.",
     "확실한 것: 8판에 ★없는★ 7판 영역 이름(Uncertainty·Measurement·Delivery·Planning·Project Work·Team·Development Approach)과 8판에 ★새로 이름이 붙은★ 영역(Governance·Finance·Scope·Schedule·Resources·Risk).",
     "확실한 것: 7판 원칙 중 ★Value·Quality★는 8판 원칙 이름에 그대로 이어지고, ★Sustainability★는 7판 원칙 이름에 없던 단어다(7판에서는 Stewardship 안에 포함)."
    ]
   },
   {
    "h": "7판 학습자 체크포인트",
    "li": [
     "PMI는 7판 학습자에게 '핵심 원칙은 동일'하다고 안내했다(S2) — 사고방식은 그대로, ★이름과 묶음★을 새로 익힌다.",
     "7판 Uncertainty 영역의 ★모호성(ambiguity)·복잡성(complexity)·변동성(volatility)★ 개념은 8판 Risk·전체론적 관점 문항에서 그대로 쓰인다."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-6",
  "t": "가치 인도 시스템",
  "title": "가치 인도 시스템(Value Delivery System)",
  "ref": "PMBOK 7판 Standard · 8판 원칙 'Focus on value' · ECO II-3",
  "body": [
   {
    "h": "가치 사슬",
    "tb": {
     "head": [
      "단계",
      "영문",
      "예시(고객 이탈 감소 프로젝트)"
     ],
     "rows": [
      [
       "산출물",
       "Output / Deliverable",
       "새 고객 포털 시스템"
      ],
      [
       "성과",
       "Outcome",
       "고객 문의 처리 시간 단축, 사용률 증가"
      ],
      [
       "편익",
       "Benefit",
       "이탈률 감소에 따른 매출 유지"
      ],
      [
       "가치",
       "Value",
       "이해관계자가 느끼는 가치·조직 전략 기여"
      ]
     ]
    }
   },
   {
    "h": "시스템 구성요소",
    "li": [
     "★포트폴리오(Portfolio)★: 전략 목표 달성을 위해 관리하는 프로젝트·프로그램·운영의 집합.",
     "★프로그램(Program)★: 개별 관리로는 얻기 어려운 편익을 위해 조율 관리하는 관련 프로젝트·활동의 묶음.",
     "★프로젝트(Project)★: 고유한 산출물을 만드는 일시적 노력.",
     "★운영(Operations)★: 인도물을 이관받아 ★편익을 지속적으로 창출★한다.",
     "★거버넌스 체계★: 의사결정·감독·통제를 제공해 시스템 전체를 정렬한다. 제품 관리 관점에서 프로젝트는 제품 생애주기 안의 한 부분일 수 있다."
    ]
   },
   {
    "h": "정보 흐름",
    "li": [
     "하향: 전략 → 포트폴리오 → 프로그램·프로젝트 → 인도물 → 운영.",
     "상향: 성과·편익 정보가 운영 → 프로젝트·프로그램 → 포트폴리오로 ★되먹임★되어 전략·우선순위를 조정한다.",
     "그래서 비즈니스 케이스 전제가 깨지면 ★거버넌스에 보고해 지속·조정·중단 판단★을 받는다."
    ]
   },
   {
    "h": "시험 포인트",
    "li": [
     "ECO 2026은 프로젝트 성공을 일정·예산·범위에서 ★이해관계자 가치·원하는 성과 달성★으로 넓혔다(ECO p6).",
     "'모든 범위를 일정·예산 안에 인도했으니 성공' → 함정. ★성과·편익이 실현되는지★까지 본다.",
     "편익 측정 책임·시점은 이관 전에 합의(편익관리 계획 등) — ECO II-3 'Verify a measurement system is in place to track benefits'."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-7",
  "t": "테일러링·모델·방법·산출물",
  "title": "테일러링과 모델·방법·산출물",
  "ref": "PMBOK 7판 Guide(테일러링·모델/방법/산출물) · APG 2판 · ECO II-1",
  "body": [
   {
    "h": "테일러링(Tailoring)",
    "li": [
     "정의: 주어진 환경과 작업에 더 적합하도록 ★접근법·거버넌스·프로세스를 의도적으로 조정★하는 것.",
     "대상: ★생애주기·개발 접근법, 프로세스, 참여(engagement), 도구, 방법·산출물★.",
     "고려 요인: 조직 문화, 규모·복잡도, 불확실성, 규제·컴플라이언스, 팀 역량·분산 여부 등.",
     "★윤리·법규·컴플라이언스 요구는 테일러링으로 생략할 수 없다★."
    ]
   },
   {
    "h": "7판 테일러링 4단계",
    "tb": {
     "head": [
      "순서",
      "단계",
      "내용"
     ],
     "rows": [
      [
       "1",
       "초기 개발 접근법 선택",
       "예측·적응·하이브리드 중 출발점 선택"
      ],
      [
       "2",
       "조직에 맞게 테일러링",
       "조직 정책·PMO·거버넌스 요구 반영(추가·제거)"
      ],
      [
       "3",
       "프로젝트에 맞게 테일러링",
       "제품·팀·문화 등 프로젝트 특성 반영"
      ],
      [
       "4",
       "지속적 개선 실행",
       "회고·교훈으로 테일러링 결과를 계속 조정"
      ]
     ]
    }
   },
   {
    "h": "모델·방법·산출물 구분",
    "tb": {
     "head": [
      "구분",
      "정의",
      "예"
     ],
     "rows": [
      [
       "모델(Model)",
       "과정·프레임워크·현상을 설명하는 ★사고 전략★",
       "상황적 리더십, Tuckman 사다리, Cynefin·Stacey, ADKAR·Kotter, Salience 모델"
      ],
      [
       "방법(Method)",
       "성과·산출물·결과를 얻는 ★수단★",
       "Wideband Delphi, 유사·모수 추정, 친화도 그룹화, 대안 분석, NPV·회수기간 분석"
      ],
      [
       "산출물(Artifact)",
       "템플릿·문서·출력물·인도물",
       "헌장, 로드맵, 위험 등록부, 기준선, 번다운 차트, 계약서"
      ]
     ]
    }
   },
   {
    "h": "개발 접근법 테일러링",
    "li": [
     "★예측형★: 요구가 안정적·규제 승인 관문이 있을 때. ★적응형(반복·증분)★: 요구 불확실·빠른 피드백이 필요할 때.",
     "★하이브리드★: 둘을 섞는다. APG 2판은 하이브리드를 이분법이 아닌 ★연속체(delivery continuum)★로 본다(S6).",
     "복잡(complex) 상황(Cynefin)에서는 ★탐색-감지-대응(probe-sense-respond)★ — 작은 실험으로 학습하며 조정한다.",
     "8판에서 모델·방법·산출물의 구체 목록이 어떻게 정리됐는지 원문은 [확인필요] — 개념 구분은 7판 기준으로 학습."
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-8",
  "t": "윤리·직업 행동 강령",
  "title": "PMI 윤리 및 직업 행동 강령",
  "ref": "PMI Code of Ethics and Professional Conduct",
  "body": [
   {
    "h": "4가지 가치",
    "tb": {
     "head": [
      "가치",
      "열망 기준 예",
      "의무 기준 예"
     ],
     "rows": [
      [
       "Responsibility(책임)",
       "역량에 맞는 업무만 수락, 약속 이행, 실수 인정·정정",
       "법규 준수, 비윤리·불법 행위 보고, 사실 근거 고발"
      ],
      [
       "Respect(존중)",
       "타인의 문화·관점 이해, 직접 대화로 갈등 해소",
       "선의로 협상, 지위를 사익에 쓰지 않음, 모욕적 행동 금지"
      ],
      [
       "Fairness(공정)",
       "의사결정의 투명성, 공평한 정보 접근",
       "★이해충돌 적극 공개★, 정실·뇌물·차별 금지"
      ],
      [
       "Honesty(정직)",
       "진실 추구, 정확한 정보 적시 제공",
       "★기만(반쪽 진실·오도) 금지★, 사익 위한 부정직 금지"
      ]
     ]
    }
   },
   {
    "h": "적용 범위·구조",
    "li": [
     "적용 대상: ★PMI 회원 + 비회원 자격 보유자·자격 신청자·자원봉사자★ — 회원만이 아니다.",
     "각 가치는 ★열망 기준(aspirational)★과 ★의무 기준(mandatory)★으로 나뉘며, 의무 기준 위반은 징계 대상이 된다.",
     "다른 사람의 위반(예: 경력 허위 기재)을 알게 되면 ★사실에 근거해 PMI에 보고★한다."
    ]
   },
   {
    "h": "상황형 판단 패턴",
    "li": [
     "공급사 선물·접대 → ★조직 정책 확인 후 거절·신고, 이해충돌 공개★(공정).",
     "현지 관행이라는 '수수료' → 뇌물이면 ★거부 + 법무·컴플라이언스 상의★. 간접 지급도 동일하게 위반.",
     "스폰서의 지연 은폐 보고 요청 → ★정확한 현황과 회복 계획을 보고하도록 설득★(정직).",
     "역량 밖 업무 지시 → ★한계를 밝히고 지원·교육 등 대안 제시★(책임).",
     "팀원 간 모욕·무시 → ★당사자와 사적으로 대화, 그라운드 룰 재확인★(존중)."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-1",
  "t": "EVM 기본 지표",
  "title": "EVM 3요소와 편차·지수 — CV·SV·CPI·SPI",
  "ref": "ECO 2026 II-9(성과 평가)·pmp_spec §5.1",
  "body": [
   {
    "h": "출발점: 3요소 + BAC",
    "li": [
     "★PV(Planned Value, 계획가치)★ — 지금까지 ★하기로 계획한★ 작업의 예산.",
     "★EV(Earned Value, 획득가치)★ — 지금까지 ★실제로 끝낸★ 작업의 예산 가치 = ★BAC × 실제 완료율★.",
     "★AC(Actual Cost, 실제원가)★ — 지금까지 ★실제로 쓴★ 돈.",
     "★BAC(Budget at Completion, 완료시 예산)★ — 원가 기준선 총액. EV·PV는 결국 BAC 위에서 측정된다.",
     "모든 공식은 ★EV가 맨 앞★에 온다 — 'EV 빼기/나누기 무엇' 으로 외우면 부호 실수가 사라진다."
    ]
   },
   {
    "h": "편차·지수 4종",
    "tb": {
     "head": [
      "지표",
      "공식",
      "좋음",
      "나쁨"
     ],
     "rows": [
      [
       "CV 원가편차",
       "EV − AC",
       "+ (원가 절감)",
       "− (원가 초과)"
      ],
      [
       "SV 일정편차",
       "EV − PV",
       "+ (일정 앞섬)",
       "− (일정 지연)"
      ],
      [
       "CPI 원가성과지수",
       "EV / AC",
       "> 1",
       "< 1"
      ],
      [
       "SPI 일정성과지수",
       "EV / PV",
       "> 1",
       "< 1"
      ]
     ]
    }
   },
   {
    "h": "예제 — BAC $100,000, 4개월 차",
    "li": [
     "계획 50% → ★PV = $50,000★ / 실제 완료 40% → ★EV = $40,000★ / 지출 ★AC = $50,000★",
     "CV = 40,000 − 50,000 = ★−$10,000★ (원가 초과) / SV = 40,000 − 50,000 = ★−$10,000★ (일정 지연)",
     "CPI = 40,000 / 50,000 = ★0.8★ → 1달러 써서 0.8달러어치 작업 / SPI = 40,000 / 50,000 = ★0.8★ → 계획 속도의 80%",
     "%완료 = EV/BAC = 40% · %소진 = AC/BAC = 50% — 일한 것보다 돈을 더 썼다."
    ]
   },
   {
    "h": "해석 함정",
    "li": [
     "SV는 ★금액 단위★다. '일정 지연 10,000달러' 라는 표현이 정상이다.",
     "★SPI는 프로젝트 종료 시 EV = PV = BAC 가 되어 1로 수렴★ — 늦게 끝나도 SPI는 1. 말기 SPI는 일정 판단에 부적합.",
     "SPI는 전체 집계값이라 ★주경로 지연을 가릴 수 있다★ — 비주경로 작업을 앞당겨 하면 SPI ≥ 1이어도 완료일은 늦어진다.",
     "PV가 주어지지 않으면 SV·SPI는 ★계산 불가★ — 보기에 SV가 나오면 PV가 있는지부터 본다."
    ]
   },
   {
    "h": "PMI 마인드셋 연결",
    "li": [
     "CPI·SPI < 1 을 보고 '즉시 인력 투입·즉시 에스컬레이션' 은 오답 패턴. ★먼저 원인 분석(근본원인·주경로 영향) → 팀과 대응 옵션 → 권한 초과 시 거버넌스★.",
     "기준선을 실적에 맞춰 고치는 것은 ★변경통제 없이 금지★ — 편차를 숨기는 행위다."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-2",
  "t": "EVM 예측·TCPI",
  "title": "EVM 예측 — EAC 4가지·ETC·VAC·TCPI",
  "ref": "ECO 2026 II-9·pmp_spec §5.1",
  "body": [
   {
    "h": "EAC(Estimate at Completion) 4가지 — '가정'이 공식을 고른다",
    "tb": {
     "head": [
      "상황(문제의 단서)",
      "공식",
      "예제값(BAC 100k·EV 40k·AC 50k·CPI 0.8·SPI 0.8)"
     ],
     "rows": [
      [
       "현재 원가효율이 ★계속★된다(기본값)",
       "BAC / CPI",
       "$125,000"
      ],
      [
       "편차는 ★일회성★, 남은 일은 계획대로",
       "AC + (BAC − EV)",
       "$110,000"
      ],
      [
       "원가·일정 ★둘 다★ 잔여 작업에 영향",
       "AC + (BAC − EV) / (CPI × SPI)",
       "$143,750"
      ],
      [
       "원래 추정이 ★근본적으로 잘못★됨",
       "AC + 상향식(Bottom-up) ETC",
       "재추정치에 따름"
      ]
     ]
    }
   },
   {
    "h": "ETC · VAC",
    "li": [
     "★ETC(Estimate to Complete, 잔여원가)★ = EAC − AC → 예: 125,000 − 50,000 = ★$75,000★",
     "★VAC(Variance at Completion, 완료시 편차)★ = BAC − EAC → 예: 100,000 − 125,000 = ★−$25,000★ (완료 시 초과 예상)",
     "부호 규칙은 CV와 같다: ★음수 = 나쁨★."
    ]
   },
   {
    "h": "TCPI(To-Complete Performance Index, 완료성과지수)",
    "li": [
     "★TCPI(BAC) = (BAC − EV) / (BAC − AC)★ = 남은 일 ÷ 남은 돈 → 예: 60,000 / 50,000 = ★1.2★",
     "의미: 원래 예산을 지키려면 남은 작업에서 ★1달러당 1.2달러어치★ 성과를 내야 한다.",
     "★TCPI > 1 = 더 효율적이어야 함(어려움)★, < 1 = 여유가 있음.",
     "TCPI(EAC) = (BAC − EV) / (EAC − AC) → 예: 60,000 / 75,000 = 0.8 = 승인된 EAC로 목표를 바꾸면 현 CPI(0.8)만 유지하면 된다.",
     "판단: 현재 CPI가 0.8인데 TCPI(BAC)가 1.2 → ★BAC 달성은 비현실적★ → 수정 EAC를 근거로 변경요청·거버넌스 보고."
    ]
   },
   {
    "h": "흔한 실수",
    "li": [
     "BAC / (CPI × SPI) 는 공식이 아니다 — 잔여분에만 (CPI×SPI)를 적용한다(예: 156,250 ≠ 143,750).",
     "'EAC = BAC × CPI' 는 방향이 반대 — CPI < 1 이면 EAC는 BAC보다 ★커져야★ 한다.",
     "TCPI 분모는 '남은 돈(BAC − AC 또는 EAC − AC)', 분자는 '남은 일(BAC − EV)' — 위아래를 바꾸면 해석이 정반대가 된다."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-3",
  "t": "CPM·일정 네트워크",
  "title": "CPM — 전진·후진 계산, 총여유·자유여유, 주경로",
  "ref": "ECO 2026 II-6(일정)·pmp_spec §5.2",
  "body": [
   {
    "h": "관례 먼저 확인",
    "li": [
     "이 사이트는 ★ES 0 시작 관례★: EF = ES + D, LS = LF − D.",
     "★1 시작 관례★: EF = ES + D − 1, 후속 ES = 선행 EF + 1, LS = LF − D + 1. 두 관례의 ★총여유·기간 결과는 같다★.",
     "★Forward pass(전진 계산)★: 선행이 여럿이면 후속 ES = 선행 EF 중 ★최댓값★.",
     "★Backward pass(후진 계산)★: 후속이 여럿이면 선행 LF = 후속 LS 중 ★최솟값★."
    ]
   },
   {
    "h": "예제 네트워크 — A3 → B4·C2 / B → D5 / C → E3 / D·E → F2",
    "tb": {
     "head": [
      "활동",
      "ES–EF",
      "LS–LF",
      "TF",
      "FF"
     ],
     "rows": [
      [
       "A(3)",
       "0–3",
       "0–3",
       "0",
       "0"
      ],
      [
       "B(4)",
       "3–7",
       "3–7",
       "0",
       "0"
      ],
      [
       "C(2)",
       "3–5",
       "7–9",
       "★4★",
       "★0★"
      ],
      [
       "D(5)",
       "7–12",
       "7–12",
       "0",
       "0"
      ],
      [
       "E(3)",
       "5–8",
       "9–12",
       "4",
       "4"
      ],
      [
       "F(2)",
       "12–14",
       "12–14",
       "0",
       "0"
      ]
     ]
    }
   },
   {
    "h": "여유(Float) 3종",
    "li": [
     "★Total Float(총여유) = LS − ES = LF − EF★ — ★프로젝트 완료일★을 늦추지 않고 미룰 수 있는 기간.",
     "★Free Float(자유여유) = 후속 ES(최소) − 당해 EF★ — ★바로 뒤 활동의 ES★를 늦추지 않고 미룰 수 있는 기간. 항상 FF ≤ TF.",
     "예제 C: TF 4, FF 0 — C가 하루만 늦어도 E가 밀린다(완료일은 영향 없음). 경로 C–E가 ★여유 4일을 공유★한다.",
     "★Project Float = 요구 종료일 − 계획 종료일★. 고정 마감이 계획보다 빠르면 ★음수 float★ 가 생긴다."
    ]
   },
   {
    "h": "주경로(Critical Path)",
    "li": [
     "★가장 긴 경로 = 프로젝트 최단 완료기간★. 예제: A–B–D–F = 14일 (A–C–E–F = 10일).",
     "보통 TF = 0 인 경로. 제약일이 있으면 ★음수★도 가능 → '주경로 float는 항상 0' 은 함정.",
     "주경로가 여러 개면(Near-critical 포함) ★일정 위험 증가★."
    ]
   },
   {
    "h": "일정 압축과 자원 최적화",
    "li": [
     "★Crashing(공정압축)★: 자원 추가 → 원가↑. ★주경로 위 활동 중 원가 기울기(slope) 최소★부터. 기울기 = (압축원가 − 정상원가) / (정상기간 − 압축기간).",
     "★Fast-tracking(공정중첩)★: 순차 활동을 병행 → ★재작업 위험↑★. 임의적(soft) 의존관계에서만 가능.",
     "★Resource Leveling(평준화)★: 자원 한도 맞춤 → ★주경로·완료일이 바뀔 수 있음★. ★Smoothing(평활화)★: ★float 안에서만★ 조정.",
     "압축은 비주경로 활동에 하면 효과 없음 — 비주경로를 crashing 하는 보기는 오답."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-4",
  "t": "PERT·3점 추정",
  "title": "PERT·3점 추정 — 기대값·표준편차·신뢰구간",
  "ref": "ECO 2026 II-6·pmp_spec §5.2",
  "body": [
   {
    "h": "3점 추정(Three-Point Estimating)",
    "tb": {
     "head": [
      "분포",
      "기대값 E",
      "특징"
     ],
     "rows": [
      [
       "★베타(PERT)★",
       "(O + 4M + P) / 6",
       "최빈값 M에 가중치 4"
      ],
      [
       "★삼각(Triangular)★",
       "(O + M + P) / 3",
       "세 값 단순 평균"
      ],
      [
       "표준편차 σ (베타)",
       "(P − O) / 6",
       "범위가 넓을수록 불확실성↑"
      ],
      [
       "분산",
       "σ² = ((P − O) / 6)²",
       "경로 합산은 분산으로"
      ]
     ]
    }
   },
   {
    "h": "예제 — O 4일 · M 6일 · P 14일",
    "li": [
     "베타 E = (4 + 24 + 14) / 6 = ★7일★ / 삼각 E = (4 + 6 + 14) / 3 = ★8일★",
     "σ = (14 − 4) / 6 = ★1.67일★ / 분산 = 2.78",
     "문제에 분포 지시가 없으면 ★'PERT·베타'= /6★, '단순 평균·삼각'= /3. 보기에 두 값이 함께 나오는 게 정형 함정."
    ]
   },
   {
    "h": "경로(합산) 표준편차",
    "li": [
     "활동이 독립이라 가정하면 ★경로 분산 = 활동 분산의 합★, ★경로 σ = √(Σσ²)★.",
     "예: σ 2·1·2 → √(4 + 1 + 4) = ★3★ (σ를 그냥 더한 5는 오답).",
     "기대값은 그냥 더한다: 경로 E = ΣE."
    ]
   },
   {
    "h": "신뢰구간(정규분포 근사)",
    "tb": {
     "head": [
      "범위",
      "확률",
      "예: E 30일 · σ 3일"
     ],
     "rows": [
      [
       "±1σ",
       "약 68.27%",
       "27 ~ 33일"
      ],
      [
       "±2σ",
       "약 95.45%",
       "24 ~ 36일"
      ],
      [
       "±3σ",
       "약 99.73%",
       "21 ~ 39일"
      ],
      [
       "E + 1σ 이내 완료",
       "약 84% (50 + 34.13)",
       "33일 이내"
      ]
     ]
    }
   },
   {
    "h": "활용 판단",
    "li": [
     "스폰서가 '95% 확신' 을 요구 → ★E + 2σ★ 를 제시(단측으로는 더 높은 확률, 시험은 보통 ±2σ ≈ 95% 관례).",
     "σ가 큰 활동 = ★불확실성 큰 활동★ → 위험관리·버퍼 대상."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-5",
  "t": "EMV·의사결정나무",
  "title": "EMV·의사결정나무·우발예비",
  "ref": "ECO 2026 III-5(위험)·pmp_spec §5.3",
  "body": [
   {
    "h": "EMV(Expected Monetary Value, 기대금전가치)",
    "li": [
     "★EMV = 확률 × 영향★, 여러 위험은 합산. ★위협 = 음수, 기회 = 양수★.",
     "예: 위협 30% × −$50,000 = −15,000 / 위협 20% × −$20,000 = −4,000 / 기회 25% × +$40,000 = +10,000 → ★순 EMV −$9,000★",
     "EMV는 ★위험 중립(risk-neutral)★ 가정 — 조직의 위험 성향(risk appetite)은 반영하지 않는다."
    ]
   },
   {
    "h": "의사결정나무(Decision Tree)",
    "li": [
     "□ ★결정 노드★(선택지) / ○ ★확률(우연) 노드★(확률 합 = 1) / △ 종료 노드(결과값).",
     "각 대안: ★Σ(확률 × 결과) − 투자비★ → 가치는 최대, 원가는 최소를 고른다.",
     "예 — Build: 투자 $100,000, 수요 高 60% $300,000 / 低 40% $120,000 → 180,000 + 48,000 − 100,000 = ★$128,000★",
     "Buy: 투자 $50,000, 高 60% $200,000 / 低 40% $100,000 → 120,000 + 40,000 − 50,000 = ★$110,000★ → ★Build 선택★",
     "투자비를 빼먹으면 228,000 vs 160,000 이 되어 보기 함정이 된다. 투자비는 ★아직 쓰지 않은 미래 원가★라 매몰비용이 아니다."
    ]
   },
   {
    "h": "예비(Reserve) 계산",
    "tb": {
     "head": [
      "구분",
      "대상",
      "산정",
      "위치"
     ],
     "rows": [
      [
       "★우발예비(Contingency)★",
       "식별된 위험(known-unknowns)",
       "식별 위험 EMV 합 등",
       "원가 기준선 ★안★ · PM 관리"
      ],
      [
       "★관리예비(Management)★",
       "미식별 위험(unknown-unknowns)",
       "조직 정책(% 등)",
       "기준선 ★밖★·예산 안 · 사용 시 승인"
      ],
      [
       "예산(Budget)",
       "—",
       "원가 기준선 + 관리예비",
       "—"
      ]
     ]
    }
   },
   {
    "h": "상황형 연결",
    "li": [
     "식별된 위험이 발생 → ★위험 등록부의 계획된 대응 실행★ + 우발예비 사용. 관리예비 요청·즉시 에스컬레이션은 오답.",
     "미식별 사건 발생 → 워크어라운드(workaround) + 필요 시 관리예비(변경 승인 절차)."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-6",
  "t": "의사소통·재무 계산",
  "title": "의사소통 채널·프로젝트 선정 재무 계산",
  "ref": "ECO 2026 I(의사소통)·III(가치)·pmp_spec §5.4",
  "body": [
   {
    "h": "의사소통 채널(Communication Channels)",
    "li": [
     "★채널 수 = n(n − 1) / 2★, n은 ★PM을 포함한★ 인원.",
     "5명 → 10 / 6명 → 15 / 8명 → 28 / 10명 → 45 / 12명 → 66",
     "함정 ① '팀원 9명 + PM' → n = 10 → 45. ★PM을 빼먹으면 36★.",
     "함정 ② '몇 개가 ★늘었는가★' → 차이를 구한다. 8 → 12명: 66 − 28 = ★38개 증가★.",
     "채널은 ★인원의 제곱에 비례★해 늘어난다 — 인원 2배 ≠ 채널 2배."
    ]
   },
   {
    "h": "프로젝트 선정 재무 지표",
    "tb": {
     "head": [
      "지표",
      "의미",
      "선택 기준"
     ],
     "rows": [
      [
       "NPV(Net Present Value, 순현재가치)",
       "현금흐름을 현재가치로 환산한 순이익",
       "★큰 값★ (기간 이미 반영 — 기간 다시 고려 X)"
      ],
      [
       "IRR(Internal Rate of Return, 내부수익률)",
       "NPV = 0 이 되는 할인율",
       "★큰 값★"
      ],
      [
       "BCR(Benefit-Cost Ratio, 편익비용비)",
       "편익 ÷ 원가",
       "★큰 값★, > 1 이면 편익 > 원가"
      ],
      [
       "Payback Period(회수기간)",
       "투자금 회수에 걸리는 기간",
       "★짧은 값★"
      ],
      [
       "ROI(투자수익률)",
       "(편익 − 원가) / 원가",
       "★큰 값★"
      ]
     ]
    }
   },
   {
    "h": "현재가치(PV)·기회비용·매몰비용",
    "li": [
     "★PV = FV / (1 + r)^n★ — 예: 2년 뒤 $121,000, 이자율 10% → 121,000 / 1.21 = ★$100,000★",
     "★기회비용(Opportunity Cost)★ = 선택하지 않은 대안 중 ★최선의 가치★. A(NPV 80k) 선택, B 60k 포기 → 기회비용 $60,000.",
     "★매몰비용(Sunk Cost)★ = 이미 쓴 돈 → ★의사결정에서 무시★. '이미 많이 썼으니 계속' 은 오답.",
     "감가상각(정액·가속) 계산은 이 영역 학습 범위에서 제외 — 개념만 알면 충분."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-7",
  "t": "조달 계약·PTA",
  "title": "계약 유형별 위험과 PTA·인센티브 계산",
  "ref": "ECO 2026 II-8(조달)·pmp_spec §5.4~5.5",
  "body": [
   {
    "h": "계약 유형과 위험 분담",
    "tb": {
     "head": [
      "유형",
      "예",
      "구매자 위험",
      "판매자 위험",
      "적합 상황"
     ],
     "rows": [
      [
       "★고정가(Fixed Price)★",
       "FFP · FPIF · FP-EPA",
       "낮음",
       "★높음★",
       "범위가 명확"
      ],
      [
       "★원가정산(Cost-Reimbursable)★",
       "CPFF · CPIF · CPAF",
       "★높음★",
       "낮음",
       "범위 불확실·R&D"
      ],
      [
       "★T&M(Time & Material)★",
       "단가 × 시간 + 자재",
       "중간",
       "중간",
       "소규모·인력 보강·범위 확정 전"
      ]
     ]
    }
   },
   {
    "h": "구매자 위험 순서(높음 → 낮음)",
    "li": [
     "★CPFF(·CPPC) > CPIF > T&M > FPIF > FFP★",
     "CPPC(Cost Plus Percentage of Cost)는 원가가 늘수록 수수료도 늘어 구매자에게 가장 불리 — 비권장.",
     "T&M은 ★NTE(Not-to-Exceed, 상한)★ 조항으로 구매자 위험을 줄인다.",
     "FP-EPA(경제가격조정)는 장기 계약의 물가·환율 변동을 반영한다."
    ]
   },
   {
    "h": "FPIF 예제 — 목표원가 $100,000 · 목표수수료 $10,000 · 목표가 $110,000 · 상한가 $120,000 · 분담 80/20(구매자/판매자)",
    "li": [
     "★PTA(Point of Total Assumption, 총부담점) = (상한가 − 목표가) / 구매자 분담률 + 목표원가★",
     "= (120,000 − 110,000) / 0.8 + 100,000 = ★$112,500★ — 실제원가가 이 값을 넘으면 초과분 ★전액을 판매자★가 부담.",
     "실제원가 $90,000(절감 10,000): 수수료 = 10,000 + 20% × 10,000 = 12,000 → 지불 ★$102,000★",
     "실제원가 $112,500: 수수료 = 10,000 − 20% × 12,500 = 7,500 → 120,000 = ★상한가와 일치(PTA 검산)★",
     "실제원가 $115,000: 공식상 122,000 이지만 ★상한가 $120,000만 지불★."
    ]
   },
   {
    "h": "원가정산형 계산",
    "li": [
     "★CPFF★: 실제원가 + ★고정 수수료★(원가가 늘어도 수수료 고정). 예: 실제 120,000 + 고정수수료 8,000 = ★$128,000★",
     "★CPIF★: 실제원가 + 목표수수료 ± 분담 조정. 예: 목표원가 100,000·목표수수료 10,000·70/30, 실제 120,000 → 초과 20,000의 30% = 6,000 감액 → 수수료 4,000 → ★$124,000★ (최소·최대 수수료 한도가 있으면 적용)",
     "★CPAF★: 수수료를 구매자의 주관적 평가로 결정(분쟁 대상 아님).",
     "PTA 출제 빈도는 2026 ECO 에서 [확인필요] — 그래도 공식 1개라 외워두면 손해 없음."
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-8",
  "t": "애자일 지표 계산",
  "title": "애자일 지표 계산 — 벨로시티·릴리스·흐름",
  "ref": "ECO 2026 II-3·II-9·pmp_spec §5.4",
  "body": [
   {
    "h": "벨로시티(Velocity)",
    "li": [
     "★반복(스프린트)당 완료한 스토리 포인트 합★ — ★DoD를 충족한 스토리만★ 센다. 90% 끝난 스토리 = 0점.",
     "예: 약속 30점, 6점 스토리 1개가 미완료 → 벨로시티 ★24★.",
     "벨로시티는 ★팀 고유의 상대 척도★ — 팀 간 비교·성과평가 지표로 쓰면 포인트 인플레이션이 생긴다."
    ]
   },
   {
    "h": "릴리스 계획 계산",
    "li": [
     "★잔여 반복 수 = 잔여 포인트 ÷ 평균 벨로시티★ (나머지가 있으면 올림).",
     "예: 벨로시티 18·22·20 → 평균 20, 잔여 200점 → ★10 스프린트★, 2주 스프린트면 ★20주★.",
     "벨로시티 범위로 예측: 잔여 120점, 15~20점 → ★6~8 스프린트★ — 단일 날짜보다 ★범위 제시★가 애자일다운 답.",
     "고정 일정 릴리스는 ★범위를 조정★(Scope flexes), 고정 범위 릴리스는 ★날짜를 예측★한다."
    ]
   },
   {
    "h": "흐름(Flow) 지표 — Kanban",
    "tb": {
     "head": [
      "지표",
      "공식·정의",
      "예"
     ],
     "rows": [
      [
       "★Little's Law★",
       "Cycle time = WIP / Throughput",
       "WIP 12 ÷ 처리량 3건/일 = ★4일★"
      ],
      [
       "Lead time",
       "요청 접수 → 인도",
       "Cycle time 을 ★포함★(Lead ⊇ Cycle)"
      ],
      [
       "Cycle time",
       "작업 착수 → 완료",
       "WIP를 줄이면 짧아짐"
      ],
      [
       "Throughput",
       "단위 기간 완료 건수",
       "3건/일"
      ]
     ]
    }
   },
   {
    "h": "애자일 EVM·번다운 [확인필요: 2026 출제 빈도]",
    "li": [
     "애자일 EVM: ★EV = (완료 포인트 / 릴리스 계획 포인트) × 릴리스 예산(BAC)★. 예: 100점 중 40점 완료, 예산 $200,000 → EV $80,000.",
     "번다운 차트: ★남은 작업★이 0으로 내려가는 선. 이상선보다 위 = 지연, 아래 = 앞섬.",
     "번업 차트: 완료 작업이 올라가는 선 + ★범위선★ — 범위 증가를 따로 보여 준다."
    ]
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "용어·개념·공식 — 반드시 맞혀야 하는 문항",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "상황 판단(다음 행동) — 합격선을 가르는 문항",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "복합 시나리오·계산 해석 — 변별력 문항",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "PMP ECO 2026의 도메인별 출제 비중으로 옳은 것은?",
  "c": [
   "People 42% · Process 50% · Business Environment 8%",
   "People 33% · Process 41% · Business Environment 26%",
   "People 33% · Process 50% · Business Environment 17%",
   "People 26% · Process 41% · Business Environment 33%"
  ],
  "a": 1,
  "e": "2026-07-09 시행 ECO 2026은 People 33 / Process 41 / BE 26이다. 42 / 50 / 8은 직전 2021 ECO 비중이므로 함정 보기다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "ECO 2026에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "People 도메인은 공동 비전·갈등 관리 등 8개 Task로 구성된다.",
   "Task 수와 출제 비중이 가장 큰 도메인은 Process 도메인이다.",
   "Enabler는 예시적(illustrative)이며 망라적인 목록이 아니다.",
   "위험 계획·관리(Plan and manage risk)는 Process 도메인의 Task다."
  ],
  "a": 3,
  "e": "2026에서 위험 계획·관리는 Business Environment III-5로 이동했다. 나머지는 모두 ECO 2026과 일치한다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "A project manager is reviewing a newly enacted data-protection regulation to assess its impact on the product backlog. Which ECO 2026 domain does this activity primarily belong to?",
  "c": [
   "Business Environment",
   "People and stakeholder engagement",
   "Process and scope management",
   "Agile and hybrid delivery"
  ],
  "a": 0,
  "e": "외부 규제 변화가 범위·백로그에 주는 영향 평가는 III-8(외부 환경 변화 평가)·III-2(컴플라이언스)로 Business Environment 도메인이다. 'Agile Delivery'라는 도메인은 ECO에 없다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "팀원들이 프로젝트의 목표를 서로 다르게 이해해 작업 방향이 엇갈리고 있다. 이 상황에 가장 직접 대응하는 ECO 2026 Task와 Enabler는?",
  "c": [
   "II-2 범위 개발·관리 — 범위 분해",
   "III-3 변경 관리·통제 — 변경통제 절차 실행",
   "I-1 공동 비전 수립 — 비전 오해의 근본원인 분석",
   "II-9 프로젝트 상태 평가 — 지표 측정·갱신"
  ],
  "a": 2,
  "e": "비전에 대한 오해는 People I-1(Develop a common vision)의 Enabler '비전 오해의 근본원인 분석'으로 다룬다. 범위 분해나 변경통제는 증상 대응일 뿐 공통 이해를 만들지 못한다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO 2026에서 Process 도메인의 Task가 아닌 것은?",
  "c": [
   "가치기반 인도 보장(Help ensure value-based delivery)",
   "재무 계획·관리(Plan and manage finance)",
   "이해관계자 참여(Engage stakeholders)",
   "프로젝트 종료 관리(Manage project closure)"
  ],
  "a": 2,
  "e": "이해관계자 참여는 People I-4다. 가치기반 인도(II-3)·재무(II-6)·종료(II-10)는 모두 Process Task다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 3,
  "q": "ECO 2026에서 'Recognize when a risk becomes an issue(위험이 이슈가 되는 시점 인식)' Enabler가 속한 Task는?",
  "c": [
   "III-4 Remove impediments and manage issues",
   "III-5 Plan and manage risk",
   "II-9 Evaluate project status",
   "III-3 Manage and control changes"
  ],
  "a": 0,
  "e": "이 Enabler는 위험관리(III-5)가 아니라 장애 제거·이슈 관리(III-4)에 있다. 위험이 실제로 발생하면 이슈로 관리한다는 흐름이기 때문이다. '위험'이라는 단어에 끌려 III-5를 고르는 것이 함정이다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO 2026의 개발 접근법 비중에 대한 설명으로 옳은 것은?",
  "c": [
   "예측형 약 60%, 애자일·하이브리드 약 40%이며 애자일은 Process 도메인에만 출제된다.",
   "예측형·애자일·하이브리드가 각각 정확히 3분의 1씩 출제된다.",
   "애자일 문항은 Business Environment 도메인에서만 출제된다.",
   "예측형 약 40%, 애자일·하이브리드 약 60%이며 접근법은 3개 도메인 전체에 분산된다."
  ],
  "a": 3,
  "e": "예측형 약 40%, 애자일/적응형과 하이브리드가 약 60%이며 특정 도메인·Task에 국한되지 않는다. 폼마다 정확한 수는 다를 수 있어 '정확히 3분의 1'도 틀리다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "한 수험생이 'PMBOK 가이드만 정독하면 PMP 시험 범위를 모두 다룬다'고 생각한다. 가장 적절한 조언은?",
  "c": [
   "시험은 PMBOK 8판 원문에서 출제되므로 원문 문장을 암기하는 데 집중한다.",
   "ECO는 직무 Task 기반이고 PMBOK과 차이가 있으므로 ECO Task를 기준으로 학습 범위를 잡는다.",
   "PMBOK 7판의 12원칙과 8 성과영역만 외우면 시나리오 문항도 충분히 풀 수 있다.",
   "시험은 Agile Practice Guide 하나에 근거하므로 그 책을 중심으로 학습한다."
  ],
  "a": 1,
  "e": "ECO 2026은 시험이 특정 교재 하나에 근거하지 않으며, ECO(직무 Task)와 PMBOK(지식·원칙)이 다르다고 명시한다. 시나리오 문항은 경험 기반 적용력을 평가하므로 원문 암기만으로는 부족하다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "Which of the following is a Task in the People domain of the PMP ECO 2026?",
  "c": [
   "Help ensure knowledge transfer",
   "Plan and manage finance",
   "Evaluate external business environment changes",
   "Manage project closure"
  ],
  "a": 0,
  "e": "지식 이전 보장은 People I-7이다. 재무 계획·관리(II-6)와 종료 관리(II-10)는 Process, 외부 환경 변화 평가(III-8)는 Business Environment다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "2026 PMP 시험 180문항의 구성으로 옳은 것은?",
  "c": [
   "채점 180문항 전부(사전시험 문항 없음)",
   "채점 175문항 + 비채점 사전시험(pretest) 5문항",
   "채점 170문항 + 비채점 사전시험(pretest) 10문항",
   "채점 160문항 + 비채점 사전시험(pretest) 20문항"
  ],
  "a": 2,
  "e": "2026 시험은 채점 170 + pretest 10이다. pretest 문항은 표시되지 않고 무작위로 섞이므로 모든 문항에 최선을 다해야 한다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "2026 PMP 시험의 휴식 규정에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "10분 휴식이 2회 주어진다.",
   "휴식이 끝난 뒤에도 이전 섹션의 문항으로 돌아가 답을 수정할 수 있다.",
   "첫 번째 휴식은 사례연구 섹션이 끝난 뒤에 주어진다.",
   "두 번째 휴식은 독립 문항 구간의 대략 중간에 주어진다."
  ],
  "a": 1,
  "e": "휴식을 시작하면 이전 섹션으로 돌아갈 수 없다. 그래서 검토 표시한 문항은 휴식 전에 그 섹션 안에서 정리해야 한다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "ECO 2026에서 새로(NEW) 추가된 문항 유형 2가지는?",
  "c": [
   "Fill-in-the-blank, Hotspot",
   "Multiple-Response, Matching",
   "Pull-down List, Enhanced Matching",
   "Case or Scenario, Graphic-Based"
  ],
  "a": 3,
  "e": "공식 목록에서 NEW로 표시된 것은 Case or Scenario와 Graphic-Based다. 빈칸 채우기는 2026 공식 목록에 아예 없다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "PMP 2026 문항 유형 중 CBT(시험센터 컴퓨터 시험) 전용이 아닌 것은?",
  "c": [
   "Matching",
   "Point and Click (Hotspot)",
   "Pull-down List",
   "Multiple-Response"
  ],
  "a": 3,
  "e": "Multiple-Response(복수응답)는 모든 응시 방식에서 제공된다. Matching·Enhanced Matching·Hotspot·Pull-down은 CBT 전용이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "학사 학위 소지자가 최근 10년 동안 비중복 프로젝트 리딩 경력 30개월을 쌓았고 35시간 교육을 이수했다. 응시 자격에 대한 판단으로 옳은 것은?",
  "c": [
   "학사는 24개월이면 되므로 바로 응시할 수 있다.",
   "학사는 36개월이 필요하므로 경력 6개월이 더 필요하다.",
   "35시간 교육을 이수했으므로 경력 요건은 면제된다.",
   "학사는 60개월이 필요하므로 30개월이 더 필요하다."
  ],
  "a": 1,
  "e": "학사 이상은 36개월이 필요하다. 24개월은 PMI GAC 인증 학위, 60개월은 고교 졸업 기준이다. 35시간 교육은 경력과 별도 요건이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 3,
  "q": "2027년 1월에 35시간 교육을 새로 이수하려는 수험생이 있다. 다음 중 35시간으로 인정받지 못하는 과정은?",
  "c": [
   "ATP(Authorized Training Partner)의 대면 강의",
   "기관과 무관한 자기주도 온디맨드 과정(종료 평가 포함)",
   "ATP가 아닌 일반 교육업체의 강사 진행 실시간 온라인 강의",
   "PMI GAC 인증 학위과정의 수업"
  ],
  "a": 2,
  "e": "2026-12-01부터 강사가 진행하는 라이브 교육(대면·온라인)은 ATP·China REP·인증 학위과정만 인정된다. 자기주도 과정은 기관과 무관하게 인정된다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "한 응시자가 1년 자격기간 안에 PMP 시험에 3회 불합격했다. 이후 상황으로 옳은 것은?",
  "c": [
   "마지막 응시일로부터 1년 동안 PMP 재신청을 할 수 없다.",
   "추가 응시료를 내면 즉시 4회차 응시가 가능하다.",
   "다른 PMI 자격 신청도 1년 동안 금지된다.",
   "6개월 뒤 자격기간이 자동으로 연장된다."
  ],
  "a": 0,
  "e": "1년 자격기간에 최대 3회 응시할 수 있고, 3회 불합격 시 마지막 응시일로부터 1년간 PMP 재신청이 불가하다. 다른 PMI 자격 신청은 가능하다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "응시자가 시험을 마치고 화면에서 결과를 확인했다. 이 결과에 대한 설명으로 옳은 것은?",
  "c": [
   "화면 결과가 최종 공식 결과이며, 정답률 61% 이상이면 합격으로 공식 발표되어 있다.",
   "잠정 결과이며 공식 결과는 10영업일 이내 온라인으로 확인하고, 합격 점수는 공개되지 않는다.",
   "총점과 백분위만 표시되고, 도메인별 진단 정보는 별도 신청해야만 제공된다.",
   "결과는 우편으로만 통보되므로 화면에 보이는 결과는 참고용 의미도 없다."
  ],
  "a": 1,
  "e": "시험 직후 결과는 잠정(preliminary)이고 공식 결과는 10영업일 이내 온라인으로 확인한다. 결과는 합격/불합격 + 도메인 진단이며 컷 점수는 비공개다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "A candidate takes the PMP exam in Korean. How can the candidate view the original English wording of a question?",
  "c": [
   "By requesting it from the proctor during a break",
   "By switching the exam language to English mid-exam",
   "English wording is not available in translated exams",
   "By selecting the Exhibit button on each item"
  ],
  "a": 3,
  "e": "현행 Handbook에 따르면 번역 시험에서는 문항마다 Exhibit 버튼으로 영어 원문을 볼 수 있다. 시험 중이나 예약 후에는 언어를 바꿀 수 없다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "2021 ECO에서 Process에 있다가 2026 ECO에서 Business Environment로 이동한 주제가 아닌 것은?",
  "c": [
   "일정 계획·관리",
   "위험 관리",
   "변경 관리·통제",
   "프로젝트 거버넌스"
  ],
  "a": 0,
  "e": "일정 계획·관리는 2026에도 Process II-8이다. 위험·변경·거버넌스·컴플라이언스·지속 개선·이슈는 BE로 이동했다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "2026 ECO에서 독립 Task로 새로 들어온 것이 아닌 것은?",
  "c": [
   "공동 비전 수립(Develop a common vision)",
   "재무 계획·관리(Plan and manage finance)",
   "가상팀 관리(Manage virtual teams)",
   "외부 비즈니스 환경 변화 평가"
  ],
  "a": 2,
  "e": "가상팀은 2021 People의 주제로, 2026에서는 독립 Task에서 빠졌다. 공동 비전(I-1)·재무(II-6)·외부 환경(III-8)은 2026의 새 키워드다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 1,
  "q": "ECO 2026이 반영한 '프로젝트 성공'의 정의 변화로 옳은 것은?",
  "c": [
   "이해관계자 가치 중심에서 일정·예산·범위 준수 중심으로 좁혀졌다.",
   "산출물(output)의 수량이 성공의 유일한 기준이 되었다.",
   "일정·예산·범위 준수 중심에서 이해관계자 가치와 원하는 성과 달성으로 넓어졌다.",
   "프로젝트 성공은 스폰서의 주관적 만족도로만 판단한다."
  ],
  "a": 2,
  "e": "ECO 2026은 PMI 보고서 「Maximizing Project Success」를 바탕으로 성공을 이해관계자 가치·성과 달성으로 넓혔다. 초점이 결과·가치·비즈니스 영향으로 이동했다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 3,
  "q": "2021 ECO의 People 도메인에 있던 'Remove impediments(장애 제거)'는 2026 ECO에서 어떻게 바뀌었는가?",
  "c": [
   "Business Environment III-4로 이동해 이슈 관리와 결합되었다.",
   "People 도메인의 팀 리딩(I-3) Enabler로 그대로 남았다.",
   "Process 도메인의 상태 평가(II-9) Task에 흡수되었다.",
   "출제 범위에서 완전히 삭제되어 더 이상 다루지 않는다."
  ],
  "a": 0,
  "e": "2026에서는 III-4 'Remove impediments and manage issues'로 BE에 들어가 이슈 관리와 합쳐졌다. 서번트 리더십 주제라 People에 있을 것이라 착각하기 쉽다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 1,
  "q": "Which trends were used as inputs to the job task analysis (JTA) for the PMP ECO 2026?",
  "c": [
   "Blockchain and quantum computing",
   "Offshoring and virtual teams",
   "Six Sigma and lean manufacturing",
   "Artificial intelligence and sustainability"
  ],
  "a": 3,
  "e": "ECO 2026 서문은 JTA의 입력 트렌드로 AI와 지속가능성을 들었다. 지속가능성은 II-1·II-7·III-2·III-5 Enabler에도 반복된다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "Agile Practice Guide 2판(PMI·Agile Alliance)의 변화로 옳지 않은 것은?",
  "c": [
   "backlog grooming 대신 backlog refinement라는 용어를 쓴다.",
   "하이브리드를 예측형과 애자일 중 하나를 고르는 이분법으로 정리했다.",
   "daily standup 대신 daily coordination meeting이라는 용어를 쓴다.",
   "PMBOK 8판과 정합되도록 정리되었다."
  ],
  "a": 1,
  "e": "APG 2판은 하이브리드를 이분법이 아닌 delivery continuum(연속체)으로 본다. 용어 변경과 PMBOK 8 정합은 PMI 블로그에서 확인되는 내용이다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 3,
  "q": "2021 교재로 공부한 수험생이 '위험·변경 관리는 비중 8%짜리 영역이라 후순위로 미뤄도 된다'고 계획을 세웠다. 가장 적절한 조언은?",
  "c": [
   "2026에서는 위험·변경·이슈가 Business Environment(26%)로 옮겨 비중이 커졌으므로 핵심 범위로 학습한다.",
   "위험·변경은 2026에도 여전히 Process 도메인이므로 Process 비중(41%)에 맞춰 일부만 학습한다.",
   "Business Environment 비중은 2026에도 그대로 8%이므로 기존 학습 계획을 그대로 유지한다.",
   "위험·변경은 2026 ECO에서 출제 범위에서 빠졌으므로 학습 대상에서 제외해도 된다."
  ],
  "a": 0,
  "e": "2021의 BE 8%는 거버넌스 등 소수 Task였다. 2026에서는 위험·변경·이슈·컴플라이언스가 BE로 옮겨와 26%가 되었으므로 오히려 핵심이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "예측형 프로젝트 실행 중 핵심 이해관계자가 새 기능 추가를 요청했다. 기능은 작아 보이지만 기준선에는 없다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "작은 기능이므로 일정 여유 안에서 팀이 바로 반영하도록 지시한다.",
   "기준선에 없는 요청이므로 PM 판단으로 요청을 즉시 거절한다.",
   "요청의 영향을 분석해 변경 요청을 제출하고 변경통제 절차를 따른다.",
   "스폰서에게 즉시 에스컬레이션해 추가 여부 결정을 맡긴다."
  ],
  "a": 2,
  "e": "예측형 변경은 영향 분석 → 변경 요청 → CCB 승인 → 문서 갱신 순서다(원칙 2). 바로 반영하거나 PM이 단독 거절하는 것은 절차 위반이고, 분석 없이 스폰서에게 넘기는 것은 너무 이르다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "스크럼 팀이 스프린트를 진행하는 중에 고객이 새 기능을 요청했다. 프로젝트 관리자(팀 촉진자)의 가장 적절한 대응은?",
  "c": [
   "고객 요청이므로 현재 스프린트 백로그에 즉시 추가해 착수한다.",
   "요청을 제품 백로그에 추가하고 제품 책임자(PO)가 우선순위를 정하도록 한다.",
   "진행 중인 스프린트를 즉시 중단하고 새 기능을 포함해 재계획한다.",
   "변경통제위원회(CCB)에 공식 변경 요청을 제출하고 승인을 기다린다."
  ],
  "a": 1,
  "e": "애자일에서 새 요구는 제품 백로그로 들어가고 PO가 가치 기준으로 우선순위를 정한다(원칙 3). 진행 중인 스프린트 범위는 보호하며, CCB는 예측형 변경 절차다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "두 시니어 개발자가 아키텍처 방식을 두고 회의 때마다 언쟁해 팀 분위기가 나빠지고 있다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "두 사람을 각각 만나 각자의 근거와 우려를 듣는다.",
   "두 사람이 함께 기술 근거를 비교·검토하는 자리를 촉진한다.",
   "합의된 결정을 기록하고 팀 그라운드룰에 따라 공유한다.",
   "PM이 기술 방식을 정해 두 사람에게 따르도록 지시한다."
  ],
  "a": 3,
  "e": "갈등은 원천·맥락을 파악하고 합의된 해결책을 찾는 협업·문제해결이 기본이다(원칙 5, ECO I-2). 이유를 듣지 않고 결론을 강요(Force)하면 근본 원인이 남아 갈등이 재발한다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "핵심 부품 공급사가 납기를 3주 늦추겠다고 통보했다. 이 부품은 주경로(critical path) 활동에 쓰인다. 프로젝트 관리자가 가장 먼저 해야 할 일은?",
  "c": [
   "즉시 스폰서에게 에스컬레이션한다.",
   "즉시 주경로 활동에 자원을 추가해 일정을 단축(crashing)한다.",
   "계약 위반으로 공급사와의 계약을 해지한다.",
   "팀과 함께 일정 영향을 평가하고 가능한 대응 옵션을 검토한다."
  ],
  "a": 3,
  "e": "PMI 공식 샘플 패턴과 같다 — 먼저 영향 분석과 옵션 검토(원칙 1). 즉시 에스컬레이션은 너무 이르고, 즉시 압축·계약 해지는 영향 평가 전의 과한 대응이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "한 부서장이 프로젝트 팀원들에게 직접 작업 지시를 반복해서 내리고 있다. 그는 프로젝트에 대한 지시 권한이 없다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "팀원들에게 부서장의 지시는 따르지 말고 무시하라고 공지한다.",
   "부서장을 직접 만나 역할·권한과 지시가 프로젝트에 주는 영향을 함께 검토한다.",
   "부서장의 행동을 즉시 스폰서에게 보고하고 조치를 요청한다.",
   "부서장의 지시를 모두 변경 요청으로 등록해 CCB에 올린다."
  ],
  "a": 1,
  "e": "이해관계자 문제는 당사자와 직접 소통해 역할·권한·영향을 검토하는 것이 먼저다(원칙 5, PMI 샘플 패턴). 팀에게 무시를 지시하면 갈등만 키우고, 스폰서 보고는 직접 해결 시도 이전이라 이르다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "위험등록부에 식별되어 대응 계획까지 세워 둔 위험이 실제로 발생했다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "팀을 모아 새로운 대응책을 브레인스토밍한다.",
   "스폰서에게 보고하고 지시를 기다린다.",
   "위험등록부에 정의된 계획된 대응을 실행한다.",
   "관리 예비비를 즉시 사용해 손실을 메운다."
  ],
  "a": 2,
  "e": "식별된 위험이 발생하면 계획된 대응을 실행하고 이슈로 관리한다(원칙 7). 새 대응을 처음부터 찾는 것은 계획을 무시하는 것이고, 관리 예비비는 미식별 위험용이며 사용에 승인이 필요하다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "위험등록부에 없던 문제가 갑자기 발생해 다음 주 마일스톤이 위태로워졌다. 프로젝트 관리자가 가장 먼저 해야 할 일은?",
  "c": [
   "영향을 평가하고 이슈로 기록한 뒤 팀과 대응 방안(임시 대응 포함)을 정한다.",
   "위험등록부에 있는 다른 위험의 대응 계획을 그대로 가져와 적용한다.",
   "마일스톤 날짜를 늦추는 기준선 변경을 PM 판단으로 즉시 확정한다.",
   "문제가 저절로 해결되는지 일주일간 지켜본 뒤 대응 여부를 정한다."
  ],
  "a": 0,
  "e": "미식별 문제가 발생하면 영향 평가 → 이슈 로그 기록 → 팀과 대응(워크어라운드 포함)이 순서다(원칙 1·4·11). 기준선 즉시 변경은 과하고, 관망은 책임 회피다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "평소 성실하던 팀원의 산출물 품질이 최근 몇 주간 눈에 띄게 떨어졌다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "팀원과 사적으로 만나 품질 저하의 원인을 파악한다.",
   "팀 회의에서 해당 팀원의 품질 저하 사례를 공개적으로 지적한다.",
   "필요한 교육·도구 지원이 있는지 팀원과 함께 논의한다.",
   "개선 목표와 후속 점검 일정을 팀원과 함께 정한다."
  ],
  "a": 1,
  "e": "성과 문제는 사적으로 만나 근본 원인을 파악하고 지원하는 것이 원칙이다(원칙 1·5). 공개 지적은 신뢰와 심리적 안정감을 해치는 오답이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "애자일 팀이 지난 반복의 벨로시티를 근거로 이번 반복 작업량을 스스로 정했다. 기능 관리자가 '더 많은 스토리를 넣으라'고 PM에게 요구한다. PM의 가장 적절한 대응은?",
  "c": [
   "기능 관리자 요구대로 스토리를 추가하라고 팀에 지시한다.",
   "팀에게 기능 관리자와 직접 협상하라고 맡긴다.",
   "다음 반복부터 PM이 작업량을 직접 정하겠다고 선언한다.",
   "벨로시티 데이터를 근거로 기능 관리자와 대화해 팀의 계획을 보호한다."
  ],
  "a": 3,
  "e": "PM은 서번트 리더로서 자기조직화 팀의 결정을 존중하고 외부 압력으로부터 보호한다(원칙 4). 팀 결정을 뒤집거나 협상을 떠넘기는 것은 서번트 리더 역할 포기다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "개발팀이 테스트 환경 접근 권한을 받지 못해 이틀째 작업이 막혀 있다고 일일 조정 회의(daily coordination meeting)에서 말했다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "인프라 담당 부서와 직접 협의해 장애를 제거한다.",
   "팀에게 스스로 권한을 요청하라고 안내한다.",
   "다음 회고 때 논의하도록 기록만 해 둔다.",
   "반복 목표를 줄여 일정을 맞춘다."
  ],
  "a": 0,
  "e": "장애(impediment) 제거는 서번트 리더인 PM의 핵심 역할이다(원칙 4, ECO III-4). 팀에 떠넘기거나 회고까지 미루는 것은 책임 회피다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "원가 편차가 거버넌스 계획에 정의된 PM 승인 한도(임계치)를 넘어섰다. 팀과 원인 분석과 복구 대안 검토를 마쳤다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "PM 재량으로 관리 예비비를 사용해 편차를 메우고 다음 보고 때 알린다.",
   "편차가 더 커지는지 확인하기 위해 다음 보고 주기까지 추세를 관찰한다.",
   "분석 결과와 대안을 갖고 정해진 경로에 따라 스폰서·거버넌스 조직에 에스컬레이션한다.",
   "팀에게 초과 근무를 지시해 남은 작업의 원가를 줄여 편차를 회수한다."
  ],
  "a": 2,
  "e": "임계치를 넘었고 분석·대안까지 준비했다면 이제 에스컬레이션이 정답이다(원칙 6, ECO III-1 escalation paths and thresholds). 권한 밖 예비비 사용은 월권이고, 관망은 투명성 위반이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "현장 점검 중 하도급 업체가 마감일을 맞추려고 법정 안전 점검을 생략하고 있는 것을 발견했다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "마감 후에 점검을 보완하도록 업체에 요청한다.",
   "먼저 일정 영향을 분석한 뒤 점검 생략 여부를 결정한다.",
   "해당 작업을 중단시키고 컴플라이언스·거버넌스 절차에 따라 보고한다.",
   "업체 계약서를 검토해 책임 소재부터 정리한다."
  ],
  "a": 2,
  "e": "안전·법규 위반은 타협 불가이며 '먼저 분석' 원칙보다 우선한다(원칙 10). 이 경우 즉시 중단·보고가 정답이고, 일정 분석이나 책임 정리는 그다음이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "The sponsor asks the project manager to report the project status as 'green' at the steering committee, although schedule data shows the project is significantly behind. What should the project manager do?",
  "c": [
   "Report the actual status with supporting data and a recovery plan.",
   "Report 'green' as requested and fix the delay quietly.",
   "Ask the team to adjust the schedule data to match a 'green' status.",
   "Skip the steering committee meeting to avoid conflict."
  ],
  "a": 0,
  "e": "PMI 윤리 강령의 정직(honesty)과 투명성 원칙에 따라 실제 상태를 데이터와 복구 계획과 함께 보고한다(원칙 10·11). 허위 보고·데이터 조작·회피는 모두 윤리 위반이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "팀원이 보고한 품질 결함이 고객 인도 일정에 영향을 줄 수 있다. 프로젝트 관리자의 초기 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "결함의 원인과 범위를 팀과 함께 분석한다.",
   "품질 관리계획과 이슈 로그를 확인한다.",
   "결함이 인도 일정에 주는 영향을 평가한다.",
   "영향 분석 전에 스폰서에게 인도 연기를 즉시 통보한다."
  ],
  "a": 3,
  "e": "PMI 마인드셋의 첫 단계는 분석·계획 참조다(원칙 1·7). 영향도 모른 채 연기를 통보하는 것은 '너무 이른' 오답 패턴이다. 나머지는 모두 적절한 초기 행동이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "정부가 프로젝트 제품에 영향을 줄 수 있는 새 환경 규제를 발표했다. 시행은 6개월 뒤다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "규제가 범위·백로그·일정에 주는 영향을 평가한다.",
   "시행 전까지는 영향이 없으므로 계획대로 진행한다.",
   "컴플라이언스 담당 부서와 세부 요구사항을 확인한다.",
   "관련 위험을 위험등록부에 기록하고 대응을 계획한다."
  ],
  "a": 1,
  "e": "외부 환경 변화는 지속 점검하고 선제적으로 영향을 평가해야 한다(원칙 12, ECO III-8·III-2). 시행일까지 기다리는 것은 선제적 행동 원칙 위반이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "릴리스 검토에서 고객이 '요구사항 명세는 모두 충족했지만 우리 업무 문제는 해결되지 않았다'고 말했다. 프로젝트 관리자의 가장 적절한 대응은?",
  "c": [
   "고객과 함께 기대 가치와 성과를 다시 확인하고 그에 맞춰 남은 작업의 우선순위를 조정한다.",
   "명세를 모두 충족했으므로 계약 조건에 따라 고객에게 인수 승인을 요청한다.",
   "고객 의견을 변경 요청으로만 기록해 두고 예정대로 종료 절차를 진행한다.",
   "개발팀에 요구사항 명세를 처음부터 다시 검증하도록 지시하고 결과를 기다린다."
  ],
  "a": 0,
  "e": "2026 ECO는 프로젝트 성공을 이해관계자 가치·성과로 정의한다(원칙 8, II-3). 명세 충족만을 근거로 인수를 밀어붙이는 것은 가치 중심 원칙에 어긋난다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "During a sprint review, a key stakeholder says the demonstrated increment does not reflect how her department actually works. What should the project manager do first?",
  "c": [
   "Ask the team to rework the increment immediately within the current sprint.",
   "Explain that the increment meets the acceptance criteria and close the discussion.",
   "Capture the feedback and work with the product owner to reflect it in the product backlog.",
   "Escalate the disagreement to the project sponsor."
  ],
  "a": 2,
  "e": "스프린트 리뷰의 목적은 피드백 수집이며, 반영은 PO가 백로그 우선순위로 결정한다(원칙 3·8). 진행 중 스프린트에 즉시 재작업을 넣거나 피드백을 무시·에스컬레이션하는 것은 부적절하다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "A team member complains to the project manager that another member is often late to the daily coordination meeting. What should the project manager do?",
  "c": [
   "Report the late member to the functional manager for corrective action.",
   "Facilitate a team discussion to revisit the team's ground rules in the team charter.",
   "Move the meeting to a new time chosen by the project manager alone.",
   "Tell the complaining member to ignore the issue and focus on work."
  ],
  "a": 1,
  "e": "그라운드룰은 팀이 함께 만들고 지키는 것이므로 팀 헌장(team charter)을 다시 논의하도록 촉진하는 것이 서번트 리더십에 맞다(원칙 4, ECO I-2 ground rules). 기능 관리자 보고·PM 단독 결정·무시는 오답 패턴이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "Midway through a predictive project, the project manager learns that a key engineer will be reassigned to another project next month. What should the project manager do first?",
  "c": [
   "Immediately ask the functional manager for a replacement engineer.",
   "Fast-track the remaining activities to finish before the engineer leaves.",
   "Escalate the reassignment to the sponsor and request that it be cancelled.",
   "Evaluate the impact on the schedule and review the resource management plan."
  ],
  "a": 3,
  "e": "먼저 영향 평가와 자원관리계획 확인이다(원칙 1·7). 대체 인력 요청·공정 중첩(fast-tracking)·에스컬레이션은 영향을 알기 전에 하는 이른·과한 대응이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "한 이해관계자가 '주요 결정 사항을 늘 뒤늦게 전해 듣는다'고 불만을 제기했다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "의사소통 관리계획을 검토한다.",
   "해당 이해관계자의 정보 요구를 다시 파악한다.",
   "이해관계자 참여계획을 갱신해 소통 방식을 조정한다.",
   "기존 보고 주기가 계획대로 운영되고 있으므로 그대로 유지한다."
  ],
  "a": 3,
  "e": "계획대로 운영 중이어도 이해관계자 요구에 맞지 않으면 분석·조정해야 한다(원칙 7·11, ECO I-4·I-8). 불만을 무시하는 것은 책임 회피 패턴이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "PMI 마인드셋에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "PM 권한과 임계치를 넘는 문제는 분석과 대안을 갖고 에스컬레이션한다.",
   "변경 영향이 작다고 PM이 판단하면 변경통제 절차 없이 바로 반영하는 것이 효율적이다.",
   "안전·규제 위반은 일정보다 우선해 중단하고 보고한다.",
   "식별된 위험이 발생하면 계획된 대응을 실행한다."
  ],
  "a": 1,
  "e": "예측형에서 기준선에 영향을 주는 변경은 크기와 상관없이 변경통제 절차를 거친다(원칙 2). 나머지는 원칙 6·10·7에 해당하는 올바른 설명이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "프로젝트 중반에 합류한 신규 팀원이 프로젝트의 목적과 기대 성과를 잘 모른 채 작업하고 있다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "프로젝트 비전과 성과 목표를 공유한다.",
   "핵심 지식과 산출물 위치를 안내한다.",
   "작업 지시서만 주고 스스로 파악하도록 둔다.",
   "경험 있는 팀원을 멘토로 연결한다."
  ],
  "a": 2,
  "e": "공동 비전 공유(I-1)와 지식 이전(I-7)은 2026 ECO의 새 Task다. 방치는 PM의 리딩 역할을 포기하는 오답이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "두 팀원이 같은 주에 휴가를 신청해 테스트 활동 일정이 겹친다. PM 권한으로 조정 가능한 수준이다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "스폰서에게 에스컬레이션해 휴가 승인 여부를 결정해 달라고 한다.",
   "팀과 일정 영향을 검토해 작업 순서를 조정한다.",
   "두 팀원과 대화해 휴가 일정 조율 가능성을 확인한다.",
   "자원 달력을 갱신하고 일정에 반영한다."
  ],
  "a": 0,
  "e": "PM 권한 안에서 해결 가능한 문제를 스폰서에게 올리는 것은 에스컬레이션 원칙(원칙 6) 위반이다. 에스컬레이션은 권한·임계치를 넘을 때 분석·대안을 갖고 한다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "프로젝트 중간 회고에서 팀이 '요구사항 검토 회의가 비효율적'이라는 교훈을 도출했다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "교훈을 교훈 등록부에 기록한다.",
   "교훈은 프로젝트 종료 시점에 한 번에 정리하도록 미룬다.",
   "팀과 합의한 개선 행동을 다음 반복부터 적용한다.",
   "다른 프로젝트에도 유용하면 조직 자산(OPA) 갱신을 제안한다."
  ],
  "a": 1,
  "e": "교훈은 프로젝트 전 기간에 상시 기록·적용하고 OPA 갱신으로 이어진다(원칙 11, ECO III-6). 종료 시점까지 미루면 이번 프로젝트에서 개선할 기회를 잃는다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "The project manager's organization is introducing a generative AI tool to draft project reports. Some stakeholders are concerned about confidential data. Which action is LEAST appropriate?",
  "c": [
   "Assess the security and compliance requirements for the tool.",
   "Add AI-related risks, such as data leakage, to the risk register.",
   "Agree on usage guidelines with the relevant governance stakeholders.",
   "Allow each team member to use the tool freely with any project data."
  ],
  "a": 3,
  "e": "AI 도입은 보안·컴플라이언스 요구와 위험을 평가하고 거버넌스와 사용 지침을 정해야 한다(원칙 10, ECO III-2·III-5). 아무 데이터나 자유롭게 쓰게 하는 것은 거버넌스 공백이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "PMI가 정의하는 프로젝트(project)의 설명으로 옳은 것은?",
  "c": [
   "고유한 제품·서비스·결과를 만들기 위해 수행하는 일시적인 노력",
   "조직이 지속적으로 반복 수행하는 활동",
   "전략 목표 달성을 위해 묶어 관리하는 작업의 집합",
   "관련 프로젝트를 조정 관리해 편익을 얻는 활동"
  ],
  "a": 0,
  "e": "프로젝트는 일시적(temporary)·고유(unique)가 핵심이다. 반복 활동은 운영, 전략 목표 집합은 포트폴리오, 편익을 위한 조정 관리는 프로그램이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "관련된 프로젝트들을 조정된 방식으로 관리해 개별 관리로는 얻을 수 없는 편익을 얻는 것은?",
  "c": [
   "포트폴리오(Portfolio)",
   "운영(Operations)",
   "프로그램(Program)",
   "PMO"
  ],
  "a": 2,
  "e": "프로그램의 핵심은 '관련성'과 '편익(benefit)'이다. 포트폴리오는 관련 없는 구성요소도 전략 목표 기준으로 묶는다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "포트폴리오(Portfolio)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "전략 목표 달성을 위해 묶어 관리한다.",
   "프로젝트·프로그램·하위 포트폴리오·운영을 포함할 수 있다.",
   "포트폴리오의 구성요소는 반드시 서로 관련된 프로젝트여야 한다.",
   "투자 우선순위와 전략 정렬을 판단한다."
  ],
  "a": 2,
  "e": "포트폴리오 구성요소는 서로 관련되거나 의존할 필요가 없다. 상호 관련성이 필수인 것은 프로그램이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "한 임원이 '5년이 걸리는 신공항 건설은 기간이 너무 길어서 프로젝트가 아니라 운영'이라고 말한다. 프로젝트 관리자의 설명으로 옳은 것은?",
  "c": [
   "일시적이란 명확한 시작과 끝이 있다는 뜻이므로 기간이 길어도 프로젝트다.",
   "프로젝트는 1년 이내여야 하므로 운영으로 분류하는 것이 맞다.",
   "프로젝트 산출물은 종료와 함께 사라지므로 공항은 운영 대상이다.",
   "기간이 3년을 넘으면 자동으로 프로그램이 된다."
  ],
  "a": 0,
  "e": "일시적(temporary)은 기간 길이가 아니라 시작과 끝이 정해져 있다는 뜻이다. 공항 같은 산출물은 프로젝트 종료 후 운영으로 넘어가 오래 남는다. 기간으로 프로그램 여부가 정해지지도 않는다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "한 조직이 PMO를 신설하면서 '프로젝트에 템플릿·모범사례·교훈 저장소를 제공하되 프로젝트 운영에는 거의 관여하지 않기'를 원한다. 적합한 PMO 유형은?",
  "c": [
   "통제형(Controlling)",
   "지시형(Directive)",
   "전략형 포트폴리오 위원회",
   "지원형(Supportive)"
  ],
  "a": 3,
  "e": "템플릿·교훈 제공 중심의 낮은 통제는 지원형 PMO다. 준수를 요구하면 통제형, 직접 관리하면 지시형이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "약한 매트릭스(weak matrix) 조직에서 PM에게 필요한 핵심 개발자를 기능 관리자가 다른 업무에 우선 배치하려 한다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "기능 관리자와 만나 프로젝트 일정 영향을 공유한다.",
   "PM 권한으로 개발자에게 프로젝트 업무를 우선하라고 직접 지시한다.",
   "개발자의 투입 시기·비율을 기능 관리자와 협상한다.",
   "합의 결과를 자원 달력과 일정에 반영한다."
  ],
  "a": 1,
  "e": "약한 매트릭스에서 자원 통제권은 기능 관리자에게 있고 PM 권한은 낮다. 협상·협업이 정답이고(원칙 5), PM이 직접 지시하는 것은 월권이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "Two projects within the same program need the same specialized test lab during the same weeks. The project managers cannot agree on a solution. What should one of the project managers do next?",
  "c": [
   "Raise the conflict to the program manager, who coordinates interdependencies across the program.",
   "Book the lab first to secure it for their own project before the other team does.",
   "Ask the portfolio manager to cancel or suspend the other project in the program.",
   "Delay their own project until the other project has finished using the lab."
  ],
  "a": 0,
  "e": "프로그램 관리자는 구성 프로젝트 간 상호의존성·자원 충돌을 조정해 프로그램 편익을 극대화한다. 두 PM이 합의하지 못했으므로 이제 프로그램 수준으로 올리는 것이 적절하다. 선점·일방적 지연은 편익을 해친다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "Which statement best distinguishes a project from operations?",
  "c": [
   "A project is always shorter than one year; operations last longer than one year.",
   "A project has no budget; operations have a fixed budget.",
   "A project is temporary and creates a unique result; operations are ongoing and repetitive.",
   "A project produces services only; operations produce products only."
  ],
  "a": 2,
  "e": "프로젝트는 일시적·고유, 운영은 지속·반복이 구분 기준이다. 기간의 길이나 예산 유무, 산출물 종류는 구분 기준이 아니다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 3,
  "q": "다음 중 기업 환경 요인(EEF)에 해당하는 것은?",
  "c": [
   "조직의 프로젝트 관리 템플릿",
   "국가의 개인정보 보호 법규",
   "과거 프로젝트의 교훈 저장소",
   "조직의 조달 정책·절차"
  ],
  "a": 1,
  "e": "법규·시장 상황·문화처럼 PM이 통제할 수 없는 조건은 EEF다. 템플릿·교훈 저장소·정책·절차는 조직 내부 자산인 OPA다. '조달 정책'처럼 규칙처럼 보이는 OPA가 함정이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "새 주문 시스템을 인도한 프로젝트가 종료되고 6개월 뒤 주문 처리 시간이 30% 줄었다. 이 '처리 시간 단축'은 다음 중 무엇에 해당하는가?",
  "c": [
   "산출물(Output)",
   "가정(Assumption)",
   "제약(Constraint)",
   "성과(Outcome)"
  ],
  "a": 3,
  "e": "주문 시스템 자체는 산출물(output), 그 사용으로 나타난 결과 변화는 성과(outcome)다. 2026 ECO는 산출물보다 성과·가치를 강조한다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 1,
  "q": "스타트업이 아직 시장 반응을 모르는 모바일 서비스를 개발한다. 요구사항은 불명확하지만 제품 책임자가 매주 피드백을 줄 수 있다. 가장 적합한 접근법은?",
  "c": [
   "예측형(폭포수) 접근법",
   "요구사항 전체를 확정한 뒤 시작하는 단계별 승인 방식",
   "단일 인도 반복형 접근법",
   "적응형(애자일) 접근법"
  ],
  "a": 3,
  "e": "요구 불확실성이 높고 고객 참여가 잦으면 애자일이 적합하다. 예측형·전체 확정 방식은 변경 비용이 커지고, 단일 인도로는 시장 학습 기회를 놓친다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "의료기기 프로젝트에서 하드웨어는 인허가 승인 단계가 엄격하고, 사용자 앱 화면은 사용자 피드백에 따라 자주 바뀐다. 가장 적합한 접근법은?",
  "c": [
   "전체를 애자일로 운영하고 인허가 문서는 생략",
   "하드웨어는 예측형, 앱은 애자일로 운영하는 하이브리드",
   "전체를 예측형으로 운영하고 앱 변경은 동결",
   "전체를 증분형으로 운영하고 인허가는 마지막에 일괄 처리"
  ],
  "a": 1,
  "e": "구성요소마다 불확실성과 규제가 다르면 하이브리드로 테일러링한다(원칙 9). 인허가 문서 생략은 컴플라이언스 위반이고, 앱 변경 동결은 가치를 해친다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "Agile Practice Guide(1판)가 정리한 생애주기별 '목표'의 연결로 옳지 않은 것은?",
  "c": [
   "예측형 — 원가 관리",
   "반복형 — 해결책의 정확성",
   "증분형 — 원가 관리",
   "애자일 — 잦은 인도와 피드백을 통한 고객 가치"
  ],
  "a": 2,
  "e": "증분형의 목표는 속도(speed)다. 원가 관리는 예측형의 목표다. 반복형은 정확성, 애자일은 고객 가치다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 3,
  "q": "개발 접근법에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "규제가 엄격한 산업에서는 애자일이나 하이브리드를 사용할 수 없다.",
   "애자일은 반복형과 증분형의 특성을 함께 가진다.",
   "하이브리드는 예측형과 적응형 요소를 조합한다.",
   "접근법 선택은 요구·기술 불확실성, 변경 비용, 조직 문화 등을 고려한다."
  ],
  "a": 0,
  "e": "규제 산업에서도 테일러링을 통해 하이브리드·애자일을 적용할 수 있고, 규제 요구는 준수 산출물로 반영한다. 나머지는 모두 올바른 설명이다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "스테이시 매트릭스(Stacey matrix)에서 요구사항 합의 수준과 기술 확실성이 모두 높은 영역의 프로젝트에 대한 판단으로 옳은 것은?",
  "c": [
   "혼돈(chaos) 영역으로 어떤 계획도 불가능하다.",
   "단순(simple) 영역으로 예측형 접근이 적합하다.",
   "복잡(complex) 영역으로 반드시 애자일을 써야 한다.",
   "불확실성이 가장 커 탐색적 실험이 필수다."
  ],
  "a": 1,
  "e": "요구 합의와 기술 확실성이 모두 높으면 단순 영역으로 예측형이 적합하다. 불확실성이 커져 복잡 영역으로 갈수록 적응형이 유리하고, 둘 다 매우 낮으면 혼돈 영역이다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "A sponsor insists on a fixed, detailed plan and a single delivery at the end, but the project manager expects the requirements to change frequently. What should the project manager do?",
  "c": [
   "Follow the sponsor's request without discussion because the sponsor funds the project.",
   "Run the project with agile practices secretly while reporting progress against a predictive plan.",
   "Refuse to start the project until all requirements are fully documented and frozen.",
   "Explain the trade-offs and recommend an approach tailored to the level of uncertainty, such as a hybrid approach."
  ],
  "a": 3,
  "e": "ECO II-1은 PM이 프로젝트 요구·복잡도를 평가해 개발 접근법을 '권고'하도록 한다(원칙 9). 무조건 따르기는 책임 회피, 몰래 운영은 투명성 위반, 착수 거부는 비현실적이다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "조직 표준 방법론은 대규모 프로젝트용 문서를 모두 요구한다. 3명이 4주 동안 수행하는 소규모 내부 개선 프로젝트를 맡은 PM의 가장 적절한 행동은?",
  "c": [
   "프로젝트 규모·위험에 맞게 산출물과 절차를 테일러링하고 거버넌스 승인을 받는다.",
   "조직 표준이므로 방법론이 요구하는 모든 산출물을 그대로 작성한다.",
   "규모가 작은 내부 프로젝트이므로 문서와 승인 절차를 모두 생략한다.",
   "PMO가 소규모용 방법론을 따로 개정할 때까지 프로젝트 착수를 미룬다."
  ],
  "a": 0,
  "e": "테일러링은 접근법·거버넌스·프로세스·산출물을 맥락에 맞게 조정하는 것이다(원칙 9). 일률 적용은 낭비이고, 전부 생략은 거버넌스 위반이며, 착수 연기는 과한 대응이다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 3,
  "q": "예측형으로 계획된 사내 시스템 프로젝트에서 화면 설계 관련 변경 요청이 매주 쏟아지고 있다. 하드웨어 구축 부분은 계획대로 안정적이다. 프로젝트 관리자의 가장 적절한 조치는?",
  "c": [
   "기준선을 지키기 위해 화면 설계 관련 변경 요청을 모두 거절한다.",
   "프로젝트 전체를 PM 판단으로 즉시 스크럼 방식으로 전환한다.",
   "변동이 큰 화면 부분에 적응형 방식을 도입하는 하이브리드 전환을 이해관계자·거버넌스와 검토한다.",
   "변경 요청을 CCB 검토 없이 개발팀이 접수 즉시 반영하도록 한다."
  ],
  "a": 2,
  "e": "변동성이 큰 부분만 적응형으로 바꾸는 하이브리드 테일러링을 검토하되, 접근법 변경도 거버넌스 승인을 거친다(원칙 9·2). 전부 거절·전면 전환·절차 생략은 극단적이거나 절차 위반이다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 1,
  "q": "Which statement best describes a hybrid approach?",
  "c": [
   "An approach that uses only agile ceremonies without any planning",
   "A predictive approach with two baselines",
   "A combination of predictive and adaptive elements chosen to fit the project context",
   "An approach used only when the project is behind schedule"
  ],
  "a": 2,
  "e": "하이브리드는 맥락에 맞게 예측형과 적응형 요소를 조합한 것이다. APG 2판은 이를 이분법이 아닌 delivery continuum 위의 선택으로 설명한다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "예측형 접근을 선택할 근거로 가장 적절한 것은?",
  "c": [
   "완공 후 변경 비용이 매우 크고 설계가 사전에 확정되는 건축 공사",
   "사용자 반응을 보며 기능을 조정해야 하는 신규 앱",
   "기술 실현 가능성을 실험으로 확인해야 하는 연구 과제",
   "부분 기능을 먼저 출시해 매출을 내야 하는 서비스"
  ],
  "a": 0,
  "e": "후반 변경 비용이 크고 요구가 확정된 경우 예측형이 적합하다. 나머지는 학습·실험·증분 인도의 가치가 커서 적응형이 유리하다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "애자일 프로젝트의 세 번째 스프린트에서, 팀원들이 제품 목표를 서로 다르게 이해해 개발한 기능의 방향이 엇갈리고 있다. 스프린트 리뷰에서 이해관계자들도 혼란을 표했다. 프로젝트 관리자가 다음에 해야 할 일은?",
  "c": [
   "스폰서에게 상황을 에스컬레이션하고 제품 방향에 대한 지시를 요청한다",
   "각 팀원에게 구체적인 작업 지시서를 배포해 개발 방향을 하나로 맞춘다",
   "비전 오해의 원인을 파악하고 이해관계자·팀과 제품 비전을 다시 정리해 공유한다",
   "다음 릴리스까지 진행 상황을 지켜본 뒤 결과를 보고 방향을 판단한다"
  ],
  "a": 2,
  "e": "ECO I-1 은 비전 오해의 근본원인을 분석하고 핵심 이해관계자와 비전을 공유하도록 요구한다. 지시서 배포는 자기조직화를 해치고 원인도 해결하지 못하며, 즉시 에스컬레이션은 PM 수준에서 할 일을 넘기는 것이고, 관망은 낭비를 키운다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "하이브리드 프로젝트 6개월째, 시장 변화로 스폰서가 사업 목표의 우선순위를 조정했다. 그러나 팀은 착수 때 공유된 비전대로 작업을 계속하고 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "착수 때 승인된 비전이므로 그대로 유지하고 팀이 흔들리지 않게 한다",
   "조정된 사업 목표를 반영해 비전을 갱신하고 팀·이해관계자와 다시 공유한다",
   "팀에 알리지 않고 백로그 우선순위만 조용히 바꿔 혼란을 줄인다",
   "프로젝트 관리자가 헌장을 단독으로 다시 작성해 전체에 배포한다"
  ],
  "a": 1,
  "e": "ECO I-1 Enabler 'Keep the vision current' — 비전은 목표가 바뀌면 갱신·재공유한다. 기존 비전 고수는 가치와 어긋나고, 조용한 변경은 투명성 원칙에 어긋나며, 헌장은 스폰서가 발행하는 문서라 PM 단독 재작성은 권한을 넘는다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "스크럼 팀의 퍼실리테이터로 새로 부임한 프로젝트 관리자가 서번트 리더로서 첫 주에 가장 먼저 해야 할 행동은?",
  "c": [
   "팀원별 일일 작업 보고 양식을 새로 만들어 제출하게 한다",
   "다음 스프린트 목표를 직접 정해 팀 전체에 공지한다",
   "지난 스프린트 성과가 낮은 팀원 명단을 정리한다",
   "팀원들과 면담해 작업을 막는 장애와 필요한 지원을 파악한다"
  ],
  "a": 3,
  "e": "서번트 리더는 섬김이 먼저로, 팀의 장애와 필요를 파악해 제거·지원하는 데서 시작한다. 일일 보고 양식은 통제 중심, 목표 일방 결정은 PO·팀의 역할 침해, 저성과자 명단은 강압적 접근이다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "An agile team member reports that a database access request has been pending with the infrastructure group for a week, and the team cannot finish two stories. What should the project manager do?",
  "c": [
   "Tell the team member to find a workaround on their own",
   "Escalate the delay to the project sponsor immediately",
   "Work with the infrastructure group to remove the impediment",
   "Drop the blocked stories from the iteration without discussion"
  ],
  "a": 2,
  "e": "팀이 스스로 풀 수 없는 조직 간 장애를 제거하는 것은 서번트 리더인 PM 의 역할이다. 혼자 우회하라는 것은 책임 회피이고, 스폰서 즉시 에스컬레이션은 PM 수준의 해결 시도 없이 넘기는 것이며, 논의 없는 스토리 제거는 PO·팀과의 협업을 건너뛴다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "Hersey–Blanchard 상황적 리더십 모형에서 역량과 의지가 모두 높은 구성원에게 적합한 리더십 스타일은?",
  "c": [
   "지시형(Directing)",
   "코칭형(Coaching)",
   "위임형(Delegating)",
   "지원형(Supporting)"
  ],
  "a": 2,
  "e": "역량·의지가 모두 높으면 권한과 책임을 넘기는 위임형이 적합하다. 지시형은 역량이 낮은 초보에게, 코칭형은 역량 일부·의지 낮음에, 지원형은 역량은 높지만 의지가 흔들릴 때 쓴다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 3,
  "q": "평소 팀에 결정을 맡겨 온 프로젝트 관리자가 입사 1년 미만 인원으로만 구성된 새 팀을 맡았다. 팀은 첫 작업에서 무엇부터 해야 할지 몰라 진척이 없다. 지금 가장 적절한 리더십 접근은?",
  "c": [
   "자기조직화 원칙대로 팀이 스스로 방법을 찾을 때까지 개입하지 않는다",
   "명확한 기대와 지침을 먼저 주고 역량이 오르는 데 맞춰 권한을 넘긴다",
   "경험 많은 인력으로 팀을 교체해 달라고 기능 관리자에게 요청한다",
   "목표에 미달하면 불이익이 있다고 공지해 팀의 긴장감을 높인다"
  ],
  "a": 1,
  "e": "상황적 리더십은 구성원 성숙도에 맞춰 스타일을 바꾼다. 초보 팀에는 지시·코칭으로 시작해 위임으로 옮긴다. 개입하지 않는 것은 방치이고, 팀 교체 요청은 성장 지원 책임을 회피하며, 불이익 공지는 강압적 권력이라 관계를 해친다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "리더십 스타일에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "변혁적 리더십은 이상적 영향·영감적 동기·지적 자극·개별 배려를 특징으로 한다",
   "거래적 리더십은 목표 달성에 대한 보상과 예외에 의한 관리를 사용한다",
   "서번트 리더십은 리더가 팀의 필요를 먼저 섬기는 것을 강조한다",
   "거래적 리더십은 비전과 영감으로 구성원이 자기 이익을 넘어 헌신하게 만든다"
  ],
  "a": 3,
  "e": "비전·영감으로 기대 이상의 헌신을 끌어내는 것은 변혁적 리더십이다. 거래적 리더십은 목표와 보상의 교환, 예외 관리가 핵심이다. 나머지 보기는 각 스타일의 올바른 설명이다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 3,
  "q": "매트릭스 조직의 프로젝트에서 두 팀원이 같은 통합 테스트 작업을 서로 자기 책임이라 생각해 중복 작업을 했고, 다른 작업은 아무도 맡지 않았다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "팀과 함께 RACI 를 검토해 작업별 역할과 책임을 명확히 한다",
   "작업 담당자를 태스크보드에 공개해 누가 무엇을 하는지 보이게 한다",
   "회고에서 역할 정의 방식의 문제를 팀과 함께 개선 항목으로 다룬다",
   "숙련자 한 명에게 작업을 맡기고 다른 팀원은 지시가 있을 때까지 대기시킨다"
  ],
  "a": 3,
  "e": "한 명을 대기시키는 것은 역할 불명확이라는 근본 원인을 남기고 자원을 낭비한다. RACI 검토·담당자 공개·회고 개선은 ECO I-3 'Establish clear roles and responsibilities' 에 맞는 행동이다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 3,
  "q": "애자일로 전환 중인 조직에서 팀이 작은 기술 선택까지 매번 프로젝트 관리자에게 결정을 요청해 진행이 느려지고 있다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "팀이 스스로 내릴 수 있는 결정 범위를 팀과 합의해 위임한다",
   "진행 속도를 지키기 위해 프로젝트 관리자가 계속 빠르게 결정해 준다",
   "팀이 결정을 내리는 과정을 옆에서 질문으로 코칭한다",
   "위임한 결정의 결과를 회고에서 팀과 함께 돌아본다"
  ],
  "a": 1,
  "e": "PM 이 계속 결정해 주면 의존이 굳어 자기조직화가 자라지 않는다. 결정 범위 위임·코칭·회고 점검은 ECO I-3 'Empower the team' 에 맞는 행동이다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "In a RACI chart, which role should be assigned to exactly one person for each activity?",
  "c": [
   "Responsible",
   "Consulted",
   "Informed",
   "Accountable"
  ],
  "a": 3,
  "e": "Accountable(최종 책임)은 활동마다 정확히 1명이어야 책임이 분산되지 않는다. Responsible(실행)은 여러 명일 수 있고, Consulted 는 사전 자문, Informed 는 사후 통보 대상이다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "Which sequence correctly shows Tuckman's stages of team development?",
  "c": [
   "Forming → Norming → Storming → Performing → Adjourning",
   "Storming → Forming → Norming → Performing → Adjourning",
   "Forming → Storming → Norming → Performing → Adjourning",
   "Forming → Storming → Performing → Norming → Adjourning"
  ],
  "a": 2,
  "e": "Tuckman 사다리는 형성 → 격동 → 규범 → 수행 → 해산 순서다. 격동(갈등 표면화)이 규범(규칙·신뢰 형성)보다 먼저 오고, 수행은 규범 다음이다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "새로 구성된 지 3주 된 팀에서 작업 방식을 두고 언쟁이 잦고, 일부 팀원은 리더의 결정에 공개적으로 이의를 제기한다. 이 팀의 단계와 프로젝트 관리자의 적절한 행동은?",
  "c": [
   "형성기 — 서로를 알 수 있도록 소개 시간만 추가로 마련한다",
   "수행기 — 팀이 자율적으로 일하도록 간섭 없이 위임한다",
   "격동기 — 갈등을 일으키는 팀원을 다른 프로젝트로 교체한다",
   "격동기 — 갈등을 드러내 논의하게 돕고 그라운드룰을 함께 정한다"
  ],
  "a": 3,
  "e": "작업 방식·권한을 둘러싼 갈등이 표면화되는 것은 격동기의 특징이며, PM 은 갈등을 건설적으로 다루고 그라운드룰을 합의하도록 돕는다. 형성기는 아직 서로 조심스러운 단계이고, 수행기는 고성과 단계다. 팀원 교체는 갈등 해결을 회피하는 과한 조치다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "수행기(Performing)에 도달한 애자일 팀에 다른 프로젝트에서 핵심 개발자 두 명이 새로 합류했다. 프로젝트 관리자가 고려할 사항으로 가장 적절한 것은?",
  "c": [
   "이미 수행기에 도달했으므로 새 인원이 와도 팀 역학에는 변화가 없다",
   "팀이 이전 단계로 돌아갈 수 있으므로 온보딩과 팀 헌장 재확인을 지원한다",
   "팀원이 바뀌었으므로 해산기로 넘어간 것으로 보고 교훈 정리를 시작한다",
   "팀 단계는 되돌아가지 않으므로 신규 인원에게 기존 방식만 따르게 한다"
  ],
  "a": 1,
  "e": "Tuckman 단계는 비가역이 아니어서 구성원이 바뀌면 형성·격동으로 돌아갈 수 있다. 온보딩과 팀 합의 재확인이 적절하다. 해산기는 작업 종료·해체 단계이며, '변화 없음'과 '되돌아가지 않음'은 대표적 함정이다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "Herzberg 의 2요인 이론에서 위생요인(Hygiene factor)에 해당하는 것은?",
  "c": [
   "급여와 근무 조건",
   "성취감",
   "성과에 대한 인정",
   "업무에 대한 책임"
  ],
  "a": 0,
  "e": "위생요인은 급여·근무 조건·회사 정책·감독·대인관계처럼 부족하면 불만을 일으키는 요인이다. 성취·인정·책임·성장·업무 자체는 만족과 동기를 만드는 동기요인이다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 3,
  "q": "최근 연봉 인상을 받은 숙련 팀원이 여전히 의욕이 없으며, 같은 유형의 반복 업무만 맡아 지루하다고 말했다. Herzberg 이론에 근거한 프로젝트 관리자의 대응으로 가장 적절한 것은?",
  "c": [
   "추가 성과급을 지급해 금전적 동기를 더 높여 준다",
   "사무 공간과 장비를 개선해 근무 환경을 좋게 한다",
   "도전적인 과제와 더 큰 책임을 맡기고 성과를 인정한다",
   "근무 시간을 줄여 반복 업무의 부담을 낮춰 준다"
  ],
  "a": 2,
  "e": "급여·환경·근무 시간은 위생요인으로 불만을 줄일 뿐 동기를 만들지 못한다. 지루함은 동기요인(성취·책임·인정·업무 자체)의 부족이므로 도전적 과제와 책임 확대가 맞다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "According to McGregor, a manager who believes that people are self-motivated and seek responsibility holds which view?",
  "c": [
   "Theory X",
   "Theory Z",
   "Hygiene theory",
   "Theory Y"
  ],
  "a": 3,
  "e": "McGregor 의 Y 이론은 사람이 자발적이고 책임을 추구한다고 본다. X 이론은 일을 싫어해 통제가 필요하다고 보며, Z 이론은 Ouchi 의 이론이고, 위생 이론은 Herzberg 의 2요인 중 하나다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "한 팀원이 '열심히 해서 목표를 달성해도 회사가 약속한 보상을 준 적이 없다'며 의욕을 잃었다. Vroom 의 기대이론에서 이 팀원에게 낮아진 요소는?",
  "c": [
   "기대(Expectancy)",
   "유의성(Valence)",
   "수단성(Instrumentality)",
   "위생요인(Hygiene)"
  ],
  "a": 2,
  "e": "성과가 보상으로 이어질 것이라는 믿음이 수단성이다. 기대는 노력하면 성과를 낼 수 있다는 믿음, 유의성은 보상의 가치이며, 위생요인은 Herzberg 이론의 용어다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "McClelland 이론으로 보면 성취 욕구가 강한 시니어 개발자가 최근 문서 정리 업무만 맡아 의욕을 잃었다. 프로젝트 관리자가 맡길 업무로 가장 적절한 것은?",
  "c": [
   "팀 친목 행사를 기획하고 운영하는 역할",
   "다른 팀원의 근태를 관리하는 감독 권한",
   "적정 난이도의 목표와 결과 피드백이 분명한 과제",
   "결과 피드백이 거의 없는 장기 조사 과제"
  ],
  "a": 2,
  "e": "성취 욕구가 높은 사람은 달성 가능한 도전 목표와 즉각적 피드백에서 동기를 얻는다. 친목 행사는 친교 욕구, 감독 권한은 권력 욕구에 맞고, 피드백 없는 과제는 성취형의 동기를 떨어뜨린다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "애자일 팀의 회고에서 팀원들이 실수나 문제를 숨기고 형식적인 의견만 말하고 있다. 지난 분기에 회고 내용으로 책임자를 가린 일이 있었다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "회고 결과를 기능 관리자에게 보고해 책임 소재를 명확히 한다",
   "효과가 없으므로 회고를 당분간 생략하고 개발에 집중한다",
   "익명 평가를 실시해 성과가 낮은 팀원을 따로 가려낸다",
   "실수를 처벌하지 않고 학습 기회로 다루는 원칙을 세워 안정감을 회복한다"
  ],
  "a": 3,
  "e": "회고가 문책에 쓰이면 심리적 안정감이 무너져 아무도 사실을 말하지 않는다. PM 은 비난 없는(blameless) 학습 환경을 만들어야 한다. 책임자 보고·저성과자 색출은 문제를 악화시키고, 회고 생략은 지속적 개선 기회를 버린다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "새 하이브리드 프로젝트 팀이 착수했다. 팀원들은 서로 다른 조직 문화를 가지고 있어 회의 규칙, 응답 시간, 의사결정 방식에 대한 기대가 다르다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "프로젝트 관리자가 규칙을 정해 배포하고 팀원 서명만 받는다",
   "팀과 함께 팀 헌장의 가치와 업무 합의를 작성한다",
   "응답 시간과 회의 규칙을 그라운드룰로 함께 정한다",
   "의사결정 방식과 갈등 처리 절차를 팀과 합의한다"
  ],
  "a": 0,
  "e": "팀 헌장과 그라운드룰은 팀이 함께 만들어야 주인의식과 준수가 생긴다. PM 이 정해 서명만 받는 것은 형식적 동의에 그친다. 나머지는 ECO I-2 의 공통 그라운드룰 환경 조성에 맞는 행동이다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "주니어 비즈니스 분석가가 이해관계자 조율 역량을 키우고 장기적인 경력 방향을 고민하고 있다고 프로젝트 관리자에게 털어놓았다. 프로젝트 관리자가 할 수 있는 가장 적절한 지원은?",
  "c": [
   "외부 교육 과정 목록만 안내하고 스스로 고르도록 맡긴다",
   "경험 많은 선임을 멘토로 연결해 장기적인 성장 관계를 만들어 준다",
   "업무 성과가 충분히 나온 뒤에 다시 논의하자고 미룬다",
   "이해관계자 조율 업무를 프로젝트 관리자가 대신 맡아 준다"
  ],
  "a": 1,
  "e": "멘토링은 경험자가 장기적 경력·성장을 돕는 관계이며, ECO I-5 는 멘토링 기회를 조직·실행하도록 요구한다. 목록 안내는 소극적이고, 논의 연기는 성장 지원을 미루며, 업무 대행은 학습 기회를 빼앗는다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 1,
  "q": "Which conflict resolution technique does PMI generally regard as leading to a lasting, win-win resolution?",
  "c": [
   "Collaborate/Problem solve",
   "Compromise/Reconcile",
   "Smooth/Accommodate",
   "Force/Direct"
  ],
  "a": 0,
  "e": "협업/문제해결은 다양한 관점을 통합해 근본 원인을 해결하므로 Win-Win 과 지속적 해결로 이어진다. 타협은 양측 모두 일부를 양보하고, 완화는 차이를 덮으며, 강요는 Win-Lose 다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "두 선임 엔지니어가 아키텍처 선택을 두고 전체 회의에서 언성을 높이며 다투었다. 회의 분위기가 굳어졌고 다른 팀원들은 발언을 꺼리고 있다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "두 사람을 사적으로 만나 근거와 갈등 원인을 듣고 데이터로 함께 해결안을 찾는다",
   "회의를 빨리 끝내기 위해 그 자리에서 프로젝트 관리자가 한쪽 안으로 결정한다",
   "시간이 지나면 진정될 것이므로 이 일을 다시 언급하지 않고 일정대로 진행한다",
   "두 사람의 기능 관리자에게 회의에서의 행동을 보고하고 적절한 조치를 요청한다"
  ],
  "a": 0,
  "e": "갈등은 당사자와 직접·사적으로 원인과 맥락을 분석한 뒤 협업으로 해결하는 것이 기본이다(ECO I-2). 즉석 결정은 강요라 관계를 해치고, 회피는 갈등을 잠복시키며, 바로 보고하는 것은 PM 이 먼저 해야 할 시도를 건너뛴다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "갈등 해결 기법과 설명의 연결로 옳지 않은 것은?",
  "c": [
   "철수/회피(Withdraw) — 갈등 상황에서 물러나거나 결정을 미룬다",
   "완화/수용(Smooth) — 공통점을 강조하고 차이는 덜 드러낸다",
   "타협(Compromise) — 양측이 모두 완전히 만족하는 Win-Win 결과를 만든다",
   "강요/지시(Force) — 한쪽 관점을 관철해 Win-Lose 결과가 된다"
  ],
  "a": 2,
  "e": "타협은 양측이 일부씩 양보해 부분적으로만 만족하는 절충이며 Win-Win 이 아니다. Win-Win 은 협업/문제해결이다. 나머지는 각 기법의 올바른 설명이다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 3,
  "q": "제조 설비 설치 프로젝트에서 안전 인터록 우회 여부를 두고 팀원 의견이 갈렸다. 작업 재개까지 몇 시간밖에 남지 않았고, 우회하면 안전 규정 위반이 된다. 가장 적절한 갈등 해결 방식은?",
  "c": [
   "강요/지시 — 규정을 지키는 결정을 즉시 내리고 이유는 이후에 설명한다",
   "협업 — 모든 팀원이 합의할 때까지 시간을 들여 워크숍을 연다",
   "회피 — 결정을 보류하고 작업을 재개한 뒤에 다시 논의한다",
   "타협 — 우회 범위를 절반으로 줄인 중간안을 팀에 제시한다"
  ],
  "a": 0,
  "e": "안전·법규가 걸린 긴급 상황에서는 강요/지시가 정당하며, 컴플라이언스는 타협 대상이 아니다. 긴 협업은 시간이 없고, 회피는 위험을 방치하며, 규정 위반을 절반으로 줄이는 타협도 여전히 위반이다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "한 팀원이 팀 헌장에 합의한 그라운드룰(데일리 회의 정시 참석, 작업 상태 당일 갱신)을 여러 차례 지키지 않아 다른 팀원들의 불만이 커지고 있다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "해당 팀원과 사적으로 대화해 지키지 못한 사정을 듣는다",
   "합의된 그라운드룰과 그 취지를 해당 팀원과 다시 확인한다",
   "다음 데일리 회의에서 그 팀원의 위반 사례를 공개적으로 지적한다",
   "규칙 자체에 무리가 있으면 팀 회의에서 조정을 논의한다"
  ],
  "a": 2,
  "e": "공개 지적은 관계와 심리적 안정감을 해친다. ECO I-2 'Manage and rectify ground rule violations' 는 당사자와 사적으로 원인을 듣고 시정하는 것이며, 규칙이 비현실적이면 팀 합의로 조정할 수 있다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 1,
  "q": "프로젝트 관리자가 기존 공급업체와 유지보수 단가를 재협상하고 있는데, 공급업체가 큰 폭의 인상을 고집한다. 협상 전에 준비했다면 협상력을 가장 높여 주었을 것은?",
  "c": [
   "첫 제안 가격을 최대한 높게 부를 수 있는 내부 근거 자료",
   "다른 공급업체 견적처럼 협상이 결렬될 때 택할 최선의 대안(BATNA)",
   "공급업체 영업 담당자와 오래 쌓아 온 개인적인 친분 관계",
   "계약서에 넣을 표준 조항 목록과 법무 검토 결과 문서"
  ],
  "a": 1,
  "e": "BATNA 가 강할수록 결렬을 두려워하지 않아 협상력이 커진다(Fisher·Ury). 높은 첫 제안은 앵커링 전술일 뿐이고, 개인 친분과 표준 조항은 가격 협상력의 근거가 되지 못한다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "Two functional managers both claim the same senior tester for overlapping weeks. The project schedule depends on this tester's availability. What should the project manager do FIRST?",
  "c": [
   "Ask the sponsor to assign the tester exclusively to this project",
   "Replan the schedule on the assumption the tester is unavailable",
   "Ask the tester to decide which of the two assignments to accept",
   "Meet both managers to understand their priorities and negotiate a sharing plan"
  ],
  "a": 3,
  "e": "먼저 이해관계자(기능 관리자)와 우선순위를 파악하고 협상으로 Win-Win 배분을 찾는다. 스폰서 요청은 협상이 실패할 때의 에스컬레이션이고, 성급한 재계획은 분석 없이 포기하는 것이며, 테스터에게 결정을 떠넘기는 것은 책임 회피다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 1,
  "q": "원칙적 협상(Principled negotiation)에 대한 설명으로 옳은 것은?",
  "c": [
   "입장(position)이 아니라 이해관계(interest)에 초점을 맞춘다",
   "처음 내세운 입장을 끝까지 고수하는 쪽이 유리하다",
   "관계 문제를 사안과 묶어 상대를 압박하는 데 쓴다",
   "하나의 해결안에 집중하고 다른 대안은 배제한다"
  ],
  "a": 0,
  "e": "Fisher·Ury 의 원칙적 협상은 사람과 문제 분리, 이해관계 중심, 상호이익 대안 개발, 객관적 기준 사용을 원칙으로 한다. 입장 고수·관계 압박·단일안 집착은 모두 이 원칙과 반대다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 3,
  "q": "프로젝트 갈등에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "갈등은 프로젝트에서 피할 수 없으며 잘 관리하면 더 나은 해결안으로 이어진다",
   "갈등은 먼저 당사자들이 스스로 해결하도록 하는 것이 바람직하다",
   "갈등을 다룰 때는 사람의 성격보다 사안과 현재 상황에 초점을 둔다",
   "갈등은 항상 성과를 떨어뜨리므로 프로젝트 관리자는 모든 갈등을 없애야 한다"
  ],
  "a": 3,
  "e": "현대적 관점에서 갈등은 불가피하며 적절히 관리하면 혁신과 더 나은 결정의 원천이 된다. 모든 갈등 제거는 비현실적이고 건설적 논쟁까지 막는다. 나머지는 PMI 가 권장하는 갈등 관리 원칙이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "On a power/interest grid, which strategy is appropriate for a stakeholder with HIGH power and LOW interest?",
  "c": [
   "Manage closely",
   "Keep informed",
   "Keep satisfied",
   "Monitor"
  ],
  "a": 2,
  "e": "권력이 높고 관심이 낮으면 만족 유지(Keep satisfied)한다. 권력·관심 모두 높으면 밀접 관리, 권력 낮고 관심 높으면 정보 제공, 둘 다 낮으면 모니터링이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "프로젝트 착수 몇 주 뒤, 그동안 식별되지 않았던 법무팀이 개인정보 처리에 관한 요구사항을 들고 나타났다. 범위 기준선은 이미 승인되었다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "범위 기준선이 이미 확정되었으므로 다음 단계에서 반영하겠다고 답한다",
   "스폰서에게 요청해 법무팀의 요구사항 제기를 당분간 보류하도록 한다",
   "법무팀 요구사항을 즉시 범위에 모두 추가하고 일정을 다시 조정한다",
   "법무팀을 이해관계자 등록부에 추가하고 요구·영향을 분석해 참여계획을 갱신한다"
  ],
  "a": 3,
  "e": "이해관계자 식별·분석은 프로젝트 전 기간에 지속되며, 늦게 발견된 이해관계자도 바로 등록하고 분석한다. 이후 요구사항 반영은 영향 분석과 변경통제를 거친다. 거절이나 보류 요청은 컴플라이언스 위험을 키우고, 즉시 전부 반영은 절차를 건너뛴다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "현저성 모형(Salience model)이 이해관계자를 분류할 때 사용하는 세 가지 속성은?",
  "c": [
   "권력·관심·영향",
   "권력·긴급성·정당성",
   "영향·효과·긴급성",
   "정당성·관심·태도"
  ],
  "a": 1,
  "e": "현저성 모형은 권력(Power), 긴급성(Urgency), 정당성(Legitimacy)으로 이해관계자를 분류하고, 세 속성을 모두 가진 이해관계자를 가장 우선한다. 관심·영향은 그리드 분석의 축이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "이해관계자 참여평가매트릭스(Stakeholder engagement assessment matrix)의 참여 수준을 낮은 단계부터 옳게 나열한 것은?",
  "c": [
   "인지 못함 → 중립 → 저항 → 지지 → 주도",
   "인지 못함 → 저항 → 중립 → 지지 → 주도",
   "저항 → 인지 못함 → 중립 → 지지 → 주도",
   "인지 못함 → 저항 → 중립 → 주도 → 지지"
  ],
  "a": 1,
  "e": "참여 수준은 Unaware → Resistant → Neutral → Supportive → Leading 순이다. 저항과 중립, 지지와 주도의 순서를 바꾼 보기가 단골 함정이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "이해관계자 참여평가매트릭스에서 핵심 운영 부서장의 현재 수준(C)은 '저항', 원하는 수준(D)은 '지지'로 표시되어 있다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "부서장을 직접 만나 저항의 원인과 우려를 파악한다",
   "저항이 퍼지지 않도록 주요 회의에서 부서장을 당분간 제외한다",
   "부서장의 관심사를 반영한 참여 전략을 계획에 넣는다",
   "프로젝트가 부서에 주는 편익을 근거와 함께 공유한다"
  ],
  "a": 1,
  "e": "배제는 불신과 저항을 키워 C–D 격차를 넓힌다. 원인 파악·관심사 반영·편익 공유는 ECO I-4 '신뢰 구축과 영향력 행사' 에 맞는 행동이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 3,
  "q": "영향력이 큰 고위 임원이 프로젝트에 부정적인 의견을 비공식 자리에서 퍼뜨리고 있다. 이 임원은 공식 회의에는 참석하지 않는다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "스폰서에게 해당 임원의 비공식 반대 행동을 알리고 제재를 건의한다",
   "다음 전체 회의에서 임원의 주장을 데이터로 하나씩 공개 반박한다",
   "임원과 1:1 면담으로 우려를 듣고 임원 관심사와 편익을 연결해 신뢰를 쌓는다",
   "영향력이 큰 다른 지지자들과의 관계 강화에만 시간과 노력을 쏟는다"
  ],
  "a": 2,
  "e": "부정적 이해관계자는 직접 만나 우려를 이해하고 신뢰를 쌓아 영향력을 행사하는 것이 우선이다. 제재 건의는 관계를 악화시키고, 공개 반박은 대립을 키우며, 무시하면 반대 영향력이 계속 커진다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "Midway through a project, a regulatory agency is identified as a new stakeholder. Where should the project manager record the agency's identification details, assessment, and classification?",
  "c": [
   "Issue log",
   "Risk register",
   "Stakeholder register",
   "Requirements traceability matrix"
  ],
  "a": 2,
  "e": "이해관계자 등록부는 식별 정보·평가 정보(요구·기대·영향)·분류를 담는다. 이슈 로그는 현재 문제, 위험 등록부는 불확실한 사건, 요구사항 추적 매트릭스는 요구사항과 산출물의 연결을 기록한다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "애자일 프로젝트에서 제품 책임자(PO)가 실제 사용자 의견을 듣지 않고 백로그 우선순위를 정해 왔고, 첫 릴리스 후 사용자 불만이 쏟아졌다. 팀 퍼실리테이터인 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "PO 의 역량이 부족하다는 이유로 스폰서에게 PO 교체를 공식 요구한다",
   "사용자 요구사항은 다음 프로젝트에서 반영하도록 기록만 남겨 둔다",
   "요구사항 문서를 확정하고 이후의 변경은 원칙적으로 모두 금지한다",
   "스프린트 리뷰에 실제 사용자를 참여시켜 짧은 피드백 루프를 만들도록 PO 와 협력한다"
  ],
  "a": 3,
  "e": "애자일 이해관계자 참여의 핵심은 리뷰·데모를 통한 빠른 피드백이다. PM 은 PO 와 협력해 사용자를 참여시킨다. PO 교체 요구는 협업 없이 과한 조치이고, 반영 연기는 가치를 늦추며, 변경 금지는 적응형 접근과 맞지 않는다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "이해관계자 참여에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "이해관계자 등록부는 착수 때 한 번 작성하면 이후에는 갱신하지 않는다",
   "이해관계자 참여계획은 이해관계자를 참여시키기 위한 전략과 행동을 기술한다",
   "이해관계자 등록부에는 민감한 정보가 있어 공개 범위를 조절해야 할 수 있다",
   "이해관계자의 참여 수준은 프로젝트 진행 중 주기적으로 다시 평가한다"
  ],
  "a": 0,
  "e": "이해관계자는 프로젝트 전 기간에 새로 생기거나 바뀌므로 등록부도 계속 갱신한다. 나머지는 참여계획·등록부·참여 수준 재평가에 대한 올바른 설명이다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "마케팅 부서는 정해진 출시일을 지키길 원하고, 품질 부서는 출시 전 추가 시험 2주를 요구한다. 두 부서 모두 핵심 이해관계자이다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "직급이 더 높은 부서의 요구를 따르고 다른 부서에는 결과를 통보한다",
   "두 부서를 함께 모아 목표·가치 기준으로 트레이드오프를 논의하도록 퍼실리테이트한다",
   "두 부서의 요구를 모두 받아들여 일정과 범위를 함께 늘려 계획한다",
   "곧바로 스폰서에게 두 부서 중 어느 쪽을 따를지 결정해 달라고 한다"
  ],
  "a": 1,
  "e": "ECO I-5 'Facilitate discussions to align expectations' — 상충 기대는 당사자를 모아 목표 기준으로 합의를 끌어낸다. 직급 순 결정은 정렬이 아니고, 모두 수용은 범위·일정 팽창을 부르며, 즉시 스폰서 요청은 PM 의 퍼실리테이션 시도를 건너뛴다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "스프린트 데모 후 고객이 '우리가 기대한 것과 다르다'며 불만을 표했다. 구현된 기능은 합의된 인수 기준을 모두 충족한다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "인수 기준을 충족했다는 근거를 들어 인수 서명부터 요구한다",
   "고객과 만나 기대와 인수 기준 사이의 차이를 구체화한다",
   "확인된 차이를 백로그에 넣을지 PO 와 함께 결정한다",
   "다음 데모 전에 고객 기대를 미리 확인하는 절차를 둔다"
  ],
  "a": 0,
  "e": "기준 충족만 내세우면 고객 만족과 가치를 놓친다(ECO I-6). 차이 구체화·PO 우선순위 경로·사전 기대 확인은 고객 기대를 성과에 맞추는 행동이다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 1,
  "q": "고객 기대 관리에서 내부 고객(Internal customer)에 대한 설명으로 옳은 것은?",
  "c": [
   "조직 내부에 있으므로 기대 관리 대상에서 제외한다",
   "계약을 맺은 외부 공급업체를 가리킨다",
   "착수 때 정해진 기대가 종료 때까지 변하지 않는 고객이다",
   "조직 안에서 프로젝트 산출물을 받아 사용하는 부서나 사람이다"
  ],
  "a": 3,
  "e": "내부 고객은 운영팀·현업 부서처럼 조직 안에서 산출물을 쓰는 사람으로, ECO I-6 은 내부·외부 고객 기대를 모두 관리하도록 한다. 공급업체는 고객이 아니며, 기대는 변하므로 지속적으로 모니터링해야 한다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 3,
  "q": "프로젝트의 일정·원가 지표는 모두 계획 범위 안(녹색)이지만, 분기별 고객 만족도 조사 점수는 두 번 연속 떨어졌다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "만족도 하락 원인을 고객과 분석하고 결과물이 기대 가치를 내도록 대응한다",
   "일정·원가 지표가 모두 정상이므로 현재 방식대로 계속 진행한다",
   "응답률과 점수를 높이도록 만족도 조사 문항과 방식을 바꾼다",
   "만족도는 프로젝트 종료 시점에 평가하는 항목이므로 그때 검토한다"
  ],
  "a": 0,
  "e": "ECO 2026 은 프로젝트 성공을 일정·예산 준수에서 이해관계자 가치와 원하는 성과로 넓혔다. I-6 은 만족도를 모니터링하고 필요하면 대응하도록 요구한다. 지표만 보는 판단, 조사 방식 변경, 종료 시 검토는 모두 신호를 무시하는 선택이다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "During a hybrid project, a senior stakeholder repeatedly asks developers directly to add small features. The developers feel pressured. What should the project manager do?",
  "c": [
   "Meet the stakeholder to explain how requests are prioritized through the backlog",
   "Instruct the developers to ignore every request from the stakeholder",
   "Let the developers add the features because each one is small",
   "Report the stakeholder's behavior to the sponsor right away"
  ],
  "a": 0,
  "e": "권한 밖 요청을 반복하는 이해관계자는 직접 만나 역할과 요청 경로를 검토하는 것이 PMI 샘플 문항의 정답 패턴이다. 무시 지시는 관계를 해치고, 작은 기능 반영은 범위 크리프이며, 즉시 스폰서 보고는 PM 의 직접 대화를 건너뛴다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 1,
  "q": "이해관계자가 40명이 넘는 공공 프로젝트에서 프로젝트 관리자는 모두에게 같은 주간 보고서를 보내고 있다. 그런데 핵심 의사결정자들은 점점 관심을 잃고 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "주간 보고서에 더 많은 세부 정보를 넣어 분량을 늘린다",
   "권력·관심·영향 기준으로 이해관계자를 분류해 참여 방식과 빈도를 차등화한다",
   "모든 이해관계자를 직급 순서대로 나누어 회의를 연다",
   "요청이 먼저 들어온 이해관계자의 요구부터 처리한다"
  ],
  "a": 1,
  "e": "ECO I-5 'Categorize stakeholders' — 분류해 참여 전략을 차등화해야 한정된 자원으로 핵심 이해관계자를 붙잡을 수 있다. 분량 확대는 문제를 키우고, 직급 순·요청 순은 영향도와 가치 기준이 아니다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "새로 임명된 제품 책임자(PO)가 상충하는 이해관계자 기대를 조율한 경험이 없어 백로그 우선순위 회의가 매번 결론 없이 끝난다. 프로젝트 관리자가 할 일은?",
  "c": [
   "프로젝트 관리자가 당분간 PO 역할을 대신 맡아 우선순위를 정한다",
   "PO 가 관련 교육 과정을 이수할 때까지 우선순위 회의를 중단한다",
   "PO 와 멘토링 관계를 만들어 조율 세션을 함께 진행하며 노하우를 전한다",
   "스폰서에게 경험 많은 PO 로 교체해 달라고 공식적으로 요청한다"
  ],
  "a": 2,
  "e": "ECO I-5 Enabler 'Organize and act on mentoring opportunities' — PM 은 멘토링으로 PO 의 역량을 키운다. 역할 대행은 PO 의 권한과 학습을 빼앗고, 회의 중단은 가치 인도를 늦추며, 교체 요청은 지원 없이 내리는 과한 조치다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "이해관계자 기대 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "기대를 맞추기 위해 낙관적인 일정을 먼저 약속하고 실행 중에 조정한다",
   "계획의 가정과 제약 조건을 이해관계자에게 명확히 공유한다",
   "진행 상황과 주요 위험을 정기적으로 투명하게 알린다",
   "이해관계자 만족도를 모니터링하고 필요하면 대응한다"
  ],
  "a": 0,
  "e": "근거 없는 낙관적 약속은 신뢰를 잃게 하며, 기대 관리는 가정·제약·불확실성을 투명하게 공유하는 데서 시작한다. 나머지는 기대 관리의 올바른 행동이다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 1,
  "q": "다음 중 암묵지(Tacit knowledge)의 예로 가장 적절한 것은?",
  "c": [
   "교훈 등록부에 기록된 항목",
   "숙련 엔지니어의 장애 대응 판단 감각",
   "시스템 운영 매뉴얼의 절차",
   "승인된 상세 설계 문서"
  ],
  "a": 1,
  "e": "암묵지는 경험·감각·노하우처럼 말이나 글로 표현하기 어려운 지식이다. 교훈 등록부·매뉴얼·설계 문서는 문서로 표현된 형식지다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 3,
  "q": "핵심 아키텍트가 2개월 뒤 퇴사할 예정이다. 이 사람만 아는 통합 설계 노하우가 많아 팀이 불안해한다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "퇴사 직전 마지막 주에 인수인계서를 한 번에 작성하게 한다",
   "프로젝트에 결정적인 지식이 무엇인지 먼저 식별한다",
   "후임과 페어 작업·잡 섀도잉으로 노하우를 전수한다",
   "주요 설계 결정과 그 근거를 문서로 기록하게 한다"
  ],
  "a": 0,
  "e": "마지막 주 인수인계서는 너무 늦고 암묵지를 담지 못한다. 핵심 지식 식별·페어링·결정 기록은 ECO I-7 의 식별 → 수집 → 이전 환경 조성 흐름에 맞는다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 2,
  "q": "1단계 종료 회의를 앞두고 프로젝트 관리자는 교훈 등록부가 거의 비어 있다는 것을 알았다. 팀원들은 무엇이 있었는지 잘 기억하지 못한다. 다음 단계부터 적용할 개선으로 가장 적절한 것은?",
  "c": [
   "반복·마일스톤마다 교훈을 수시로 기록하고 단계 종료 시 OPA 로 이관한다",
   "종료 회의 때 일괄 작성할 담당자를 미리 한 명 지정한다",
   "문제를 일으킨 실패 사례만 골라 간단히 기록하도록 한다",
   "교훈마다 원인 제공자를 적어 인사 평가 자료로 활용한다"
  ],
  "a": 0,
  "e": "교훈 등록부는 프로젝트 내내 수시로 갱신하고 종료 시 OPA 로 옮긴다. 일괄 작성은 기억 손실을 되풀이하고, 성공 사례도 교훈이며, 문책 목적이면 사실 공유가 막힌다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 2,
  "q": "애자일 팀의 회고에서 같은 개선 항목이 매번 다시 나오지만 실제로는 바뀌는 것이 없다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "효과가 없으므로 회고 횟수를 줄이고 개발 시간을 늘린다",
   "프로젝트 관리자가 개선안을 정해 팀에 실행을 지시한다",
   "개선 항목을 백로그 실행 항목으로 넣고 담당자·확인 시점을 정한다",
   "회고 내용이 밖으로 새지 않도록 기록을 남기지 않는다"
  ],
  "a": 2,
  "e": "회고에서 나온 교훈을 실천하려면 개선 항목을 실행 가능한 작업으로 만들어 추적해야 한다. 횟수 감소는 학습 기회를 줄이고, PM 지시는 자기조직화를 해치며, 기록 생략은 지식 이전을 막는다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 1,
  "q": "Which method is MOST effective for transferring tacit knowledge?",
  "c": [
   "Publishing a lessons learned report",
   "Sharing a link to the document repository",
   "Updating the project schedule baseline",
   "Job shadowing and pairing with an experienced expert"
  ],
  "a": 3,
  "e": "암묵지는 말로 표현하기 어려워 잡 섀도잉·페어링·스토리텔링처럼 사람 간 상호작용으로 이전된다. 보고서·문서 저장소는 형식지 이전 수단이고, 일정 기준선 갱신은 지식 이전과 관계가 없다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 2,
  "q": "Nonaka 의 SECI 모형에서 숙련자의 노하우를 문서·모델로 작성하는 것처럼 암묵지를 형식지로 바꾸는 과정은?",
  "c": [
   "사회화(Socialization)",
   "연결화(Combination)",
   "내면화(Internalization)",
   "표출화(Externalization)"
  ],
  "a": 3,
  "e": "암묵지 → 형식지 전환은 표출화다. 사회화는 암묵 → 암묵(관찰·도제), 연결화는 형식 → 형식(문서 통합), 내면화는 형식 → 암묵(실습으로 체득)이다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 3,
  "q": "시스템을 운영팀에 이관하기 3주 전, 운영팀이 장애 대응 지식이 부족하다며 우려를 표했다. 이관 일정은 사업 일정과 연계되어 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "예정대로 이관하고 운영팀의 지원 요청이 들어오면 그때 대응한다",
   "운영팀과 교육·런북·공동 운영 기간을 합의해 실행하고 이관 준비도를 확인한다",
   "운영 교육은 운영 부서의 책임이므로 프로젝트에서는 관여하지 않는다",
   "곧바로 스폰서에게 이관 일정을 연기해 달라고 공식 요청한다"
  ],
  "a": 1,
  "e": "ECO I-7 지식 이전과 II-10 이관 준비도 검증에 따라, PM 은 이관 전 지식 이전 환경을 만들고 준비도를 확인한다. 사후 대응·불관여는 이관 위험을 운영에 떠넘기고, 즉시 연기 요청은 분석과 대안 없이 에스컬레이션하는 것이다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "A project team has 8 members including the project manager. How many communication channels exist?",
  "c": [
   "56",
   "28",
   "16",
   "36"
  ],
  "a": 1,
  "e": "채널 수 = n(n−1)/2 = 8×7/2 = 28. 56은 2로 나누지 않은 값, 36은 9명일 때의 값이다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 2,
  "q": "프로젝트 관리자를 포함해 10명이던 팀이 15명으로 늘었다. 늘어난 의사소통 채널 수는?",
  "c": [
   "105",
   "45",
   "50",
   "60"
  ],
  "a": 3,
  "e": "10명은 10×9/2 = 45, 15명은 15×14/2 = 105 채널이므로 증가분은 105 − 45 = 60이다. 105는 총 채널 수, 45는 기존 채널 수다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "Which communication method is BEST for sharing large volumes of information with a large audience who access it at their own discretion?",
  "c": [
   "Push communication",
   "Interactive communication",
   "Pull communication",
   "Formal written communication"
  ],
  "a": 2,
  "e": "인트라넷·위키·지식 저장소처럼 수신자가 필요할 때 접근하는 방식은 풀(Pull)이다. 푸시는 특정 수신자에게 보내는 방식이고, 상호작용은 실시간 다방향 소통이다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 3,
  "q": "팀원이 세 대륙에 흩어져 있어 시간대 차이가 크다. 최근 결정 사항이 일부 팀원에게 전달되지 않아 재작업이 생겼다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "결정 사항은 같은 시간대 팀원끼리 먼저 공유하고 나머지는 각자 확인하게 한다",
   "의사소통 관리계획을 팀과 검토해 분산 팀에 맞게 보완한다",
   "공용 비동기 채널에 결정 사항과 근거를 기록하는 규칙을 둔다",
   "모든 시간대가 겹치는 핵심 시간에 짧은 조율 회의를 연다"
  ],
  "a": 0,
  "e": "일부 시간대만의 공유는 정보 단절을 키워 재작업을 반복시킨다. 계획 검토·비동기 기록·핵심 시간대 회의는 ECO I-8 의 투명성·협업 촉진에 맞는 행동이다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 2,
  "q": "스폰서가 매주 받는 30쪽짜리 기술 상세 보고서를 읽지 않아 프로젝트 상황을 제대로 모르고 있다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "기술 세부 내용을 더 보강해 보고서를 빠짐없이 완성한다",
   "보고 빈도를 주 2회로 늘려 스폰서의 정보 노출을 늘린다",
   "스폰서의 정보 요구를 확인해 핵심 지표와 결정 사항 중심 요약으로 바꾼다",
   "조직 표준 템플릿이므로 현재 보고 형식을 그대로 유지한다"
  ],
  "a": 2,
  "e": "ECO I-8 'Create reports aligned with sponsors and stakeholder expectations' — 보고는 수신자 요구에 맞춰 테일러링한다. 분량·빈도를 늘리는 것은 문제를 악화시키고, 템플릿 고수는 정보 전달 목적을 놓친다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "애자일 팀의 진행 상황을 묻는 이해관계자 이메일이 하루 수십 통씩 와서 팀원들이 답장하느라 시간을 빼앗기고 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "모든 이해관계자에게 매일 상세 진행 이메일을 따로 보낸다",
   "문의 창구를 프로젝트 관리자 한 명으로 모두 일원화한다",
   "문의 회신은 주 1회 한 번에 모아서 답한다고 공지한다",
   "태스크보드와 번다운 차트를 정보 방열기로 공개해 누구나 스스로 확인하게 한다"
  ],
  "a": 3,
  "e": "정보 방열기는 누구나 볼 수 있게 공개한 시각 표시물로, 필요한 사람이 스스로 확인하는 Pull 방식이라 투명성을 높이고 반복 문의를 줄인다. 매일 이메일은 Push 부담을 키우고, 창구 일원화와 회신 지연은 투명성을 낮춘다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "송신자-수신자 의사소통 모델에서 수신자가 받은 메시지를 의미로 해석하는 단계는?",
  "c": [
   "부호화(Encode)",
   "해독(Decode)",
   "잡음(Noise)",
   "매체(Medium)"
  ],
  "a": 1,
  "e": "송신자가 생각을 메시지로 부호화하고, 매체를 통해 전달되며, 수신자가 해독해 의미를 해석한다. 잡음은 전달을 방해하는 요소, 매체는 전달 경로다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 3,
  "q": "A project manager notices that weekly status meetings run long and many participants multitask, yet several stakeholders say they still lack the information they need. What should the project manager do FIRST?",
  "c": [
   "Make attendance at the weekly meeting mandatory for all stakeholders",
   "Add more detailed slides to the weekly status presentation",
   "Cancel all status meetings and send email updates only",
   "Review the stakeholders' information needs and adjust the communication approach"
  ],
  "a": 3,
  "e": "회의가 정보 요구를 충족하지 못한다는 신호이므로 먼저 이해관계자 정보 요구를 분석하고 방식을 맞춘다(먼저 분석 원칙). 참석 의무화·슬라이드 추가는 원인을 다루지 않고, 회의 전면 취소는 분석 없이 내리는 극단적 조치다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 2,
  "q": "PMO 는 모든 프로젝트에 월별 표준 상태 보고서를 요구하지만, 애자일 팀은 번업 차트와 벨로시티로 진척을 관리한다. 팀은 PMO 보고가 불필요한 부담이라고 불평한다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "PMO 보고 목적을 확인하고 팀 지표를 PMO 형식에 매핑해 제공한다",
   "애자일 팀이므로 PMO 보고를 따르지 않겠다고 통보한다",
   "PMO 형식에 맞추도록 팀에 상세 간트 차트를 따로 관리시킨다",
   "보고서 대신 스프린트 데모에 참석하라고 PMO 에 알린다"
  ],
  "a": 0,
  "e": "ECO I-8 'Support reporting and governance processes' — PM 은 거버넌스 보고를 지원하되 팀 부담을 줄이도록 기존 지표를 매핑한다. 보고 거부·일방 통보는 거버넌스를 무시하고, 별도 간트 관리는 팀에 불필요한 이중 작업을 지운다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 2,
  "q": "의사소통 피드백 루프(Feedback loop)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "반복 주기마다 리뷰를 통해 이해관계자 피드백을 받는다",
   "회고를 통해 팀 내부의 일하는 방식에 대한 피드백을 얻는다",
   "피드백은 프로젝트 종료 후 한 번의 설문으로 모으는 것이 가장 효과적이다",
   "주기적인 이해관계자 설문으로 의사소통 효과를 확인한다"
  ],
  "a": 2,
  "e": "피드백 루프는 짧고 지속적이어야 조정이 가능하다. 종료 후 한 번의 설문은 결과를 바꿀 수 없는 시점이라 늦다. 나머지는 지속적 피드백 루프의 예다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "프로젝트 관리자가 새 배포 절차 도입에 대해 Fist of Five 로 의견을 물었다. 대부분 손가락 4~5개를 들었지만 한 팀원은 1개를 들었다. 프로젝트 관리자가 다음에 해야 할 일은?",
  "c": [
   "손가락 1개를 든 팀원의 우려를 듣고 필요하면 제안을 보완해 다시 확인한다",
   "다수가 지지하므로 우려와 상관없이 바로 절차를 채택한다",
   "그 팀원의 의견은 기록만 해 두고 원래 계획대로 진행한다",
   "1개를 든 사람이 없어질 때까지 같은 투표를 반복한다"
  ],
  "a": 0,
  "e": "Fist of Five 에서는 보통 2개 이하가 나오면 그 우려를 듣고 재논의한다. 다수 지지만으로 채택하거나 기록만 하는 것은 우려를 무시하는 것이고, 반복 투표는 압박일 뿐 원인을 다루지 않는다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "델파이 기법(Delphi technique)의 특징으로 옳은 것은?",
  "c": [
   "전문가들이 한자리에 모여 공개 토론으로 결론을 낸다",
   "가장 직급이 높은 전문가의 의견을 최종안으로 채택한다",
   "익명의 전문가 의견을 여러 차례 모으고 요약해 다시 돌려 합의에 이른다",
   "한 번의 투표로 가장 많은 표를 받은 안을 택한다"
  ],
  "a": 2,
  "e": "델파이는 익명성과 반복 피드백으로 권위자 영향과 집단사고를 줄인다. 공개 토론은 익명성이 없고, 직급자 결정은 독재적 방식, 한 번의 최다득표는 Plurality 다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 2,
  "q": "팀이 테스트 자동화 도구 세 가지를 놓고 2주째 의견이 갈려 결정을 못 하고 있다. 각자 선호 도구의 장점만 주장한다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "팀과 평가 기준과 기준별 가중치를 먼저 합의한다",
   "더 지연되지 않도록 프로젝트 관리자가 하나를 골라 통보한다",
   "합의한 기준으로 세 도구를 점수화해 비교한다",
   "상위 두 도구를 짧게 시범 적용해 데이터를 모은다"
  ],
  "a": 1,
  "e": "PM 의 일방 통보는 팀 수용도를 낮추고 자기조직화를 해친다. 기준·가중치 합의, 다기준 점수화, 시범 적용은 입장 싸움을 객관적 비교로 바꾸는 의사결정 촉진 방법이다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "프로젝트 관리자가 직위가 아니라 해당 분야의 깊은 지식과 기술 때문에 팀원들에게 존중받아 영향을 미칠 때, 이 권력의 유형은?",
  "c": [
   "전문가 권력(Expert power)",
   "합법적 권력(Legitimate power)",
   "보상적 권력(Reward power)",
   "준거적 권력(Referent power)"
  ],
  "a": 0,
  "e": "지식·기술에 기반한 권력은 전문가 권력이다. 합법적 권력은 공식 직위, 보상적 권력은 보상 제공 능력, 준거적 권력은 개인적 존경·호감에서 나온다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "감성지능(Emotional Intelligence)의 구성요소에 해당하지 않는 것은?",
  "c": [
   "자기 인식(Self-awareness)",
   "기술적 전문성(Technical expertise)",
   "자기 관리(Self-management)",
   "사회적 인식(Social awareness)"
  ],
  "a": 1,
  "e": "감성지능은 자기 인식·자기 관리·사회적 인식·관계 관리로 구성된다. 기술적 전문성은 감성지능이 아니라 업무 역량이다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 3,
  "q": "약한 매트릭스 조직의 프로젝트 관리자는 공식 권한이 거의 없다. 기능 부서 인력이 프로젝트 작업보다 부서 업무를 우선해 일정이 밀리고 있다. 가장 효과적인 접근은?",
  "c": [
   "프로젝트 헌장의 권한을 근거로 팀원에게 작업을 직접 지시한다",
   "기능 관리자·팀원과 신뢰를 쌓고 전문성과 상호 이익으로 협조를 이끈다",
   "스폰서에게 팀원 성과 평가 권한을 프로젝트 관리자에게 달라고 한다",
   "협조하지 않는 팀원 명단을 경영진 보고서에 올려 압박한다"
  ],
  "a": 1,
  "e": "약한 매트릭스에서는 합법적·보상적 권력이 약하므로 관계·전문성·상호 이익 기반의 영향력이 효과적이다. 공식 권한 지시는 효과가 작고, 평가 권한 요청은 구조를 무시하며, 명단 보고는 강압적이라 관계를 해친다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "During sprint planning, the team uses Roman voting to decide whether to adopt a new branching strategy. What does a thumbs-down vote indicate?",
  "c": [
   "The member does not support it and should be heard before deciding",
   "The member fully supports the proposal as written",
   "The member can live with the proposal as written",
   "The member abstains and leaves the choice to others"
  ],
  "a": 0,
  "e": "Roman voting 에서 엄지 위는 지지, 옆은 수용 가능, 아래는 반대이며 반대자의 우려를 듣고 다시 논의한다. 기권 의미는 없다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "집단 의사결정 방식에 대한 설명으로 옳은 것은?",
  "c": [
   "최다득표(Plurality)는 과반에 못 미쳐도 가장 많은 표를 얻은 안을 택한다",
   "다수결(Majority)은 구성원 전원이 동의해야 한다",
   "만장일치(Unanimity)는 가장 많은 표를 얻은 안을 택한다",
   "독재적(Autocratic) 결정은 팀 전체 투표로 이루어진다"
  ],
  "a": 0,
  "e": "최다득표는 과반이 아니어도 가장 큰 집단이 지지한 안을 택한다. 다수결은 과반(50% 초과), 만장일치는 전원 동의, 독재적 결정은 한 사람이 내린다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 3,
  "q": "핵심 모듈 결함의 원인을 두고 개발팀과 테스트팀이 서로를 탓하고 있다. 결함은 세 번째 재발했다. 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "재발 책임이 더 큰 쪽을 가려 해당 기능 관리자에게 보고한다",
   "테스트 기간을 두 배로 늘려 결함을 더 이른 시점에 잡아낸다",
   "결함이 반복되는 모듈의 개발을 외부 업체에 맡기는 계약을 맺는다",
   "두 팀과 함께 근본원인 분석(5 Whys·특성요인도)으로 재발 원인을 확인한다"
  ],
  "a": 3,
  "e": "문제 해결의 출발은 근본원인 분석이며, 두 팀이 함께 참여하면 비난 대신 사실에 집중할 수 있다(ECO I-3 Solve problems, I-2 원천 식별). 책임자 보고는 갈등을 키우고, 테스트 연장·외주 이관은 원인 확인 없이 내린 해결책이다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "기능 관리자가 PM에게 \"신규 고객 포털 개발을 오늘부터 시작하라\"고 구두로 지시했다. 아직 프로젝트 헌장은 없고, 필요한 인력은 다른 부서 소속이다. 프로젝트 관리자는 먼저 무엇을 해야 하는가?",
  "c": [
   "다른 부서 관리자에게 인력 지원을 바로 요청해 작업에 착수한다",
   "상세 WBS를 먼저 작성해 착수 회의에서 배포한다",
   "스폰서를 확인해 프로젝트 헌장 작성·승인을 요청하고 PM 권한을 공식화한다",
   "구두 지시를 이메일로 기록해 두고 일정 수립을 시작한다"
  ],
  "a": 2,
  "e": "헌장은 프로젝트를 공식 승인하고 PM에게 조직 자원을 쓸 권한을 준다. 헌장 없이 타 부서 자원을 요청하거나 상세 계획부터 하는 것은 권한 근거가 없어 '아직 이르다'."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 1,
  "q": "프로젝트 헌장(Project Charter)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "프로젝트를 공식적으로 승인한다",
   "PM을 임명하고 조직 자원 사용 권한을 부여한다",
   "프로젝트 관리자가 발행하며 상세 활동 일정과 예산을 포함한다",
   "상위 수준 요구사항과 요약 마일스톤을 담는다"
  ],
  "a": 2,
  "e": "헌장은 스폰서(착수자)가 발행하는 상위 수준 문서다. 상세 일정·예산은 관리계획서와 기준선의 몫이다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "Which document formally authorizes the existence of a project and gives the project manager authority to apply organizational resources?",
  "c": [
   "Project management plan",
   "Business case",
   "Project charter",
   "Statement of work"
  ],
  "a": 2,
  "e": "프로젝트 헌장이 공식 승인·PM 권한 부여 문서다. 비즈니스 케이스는 헌장의 입력(타당성 근거), 관리계획서는 '어떻게'를 다룬다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 1,
  "q": "성과측정기준선(PMB)을 구성하는 것으로만 묶인 것은?",
  "c": [
   "범위 기준선 · 일정 기준선 · 관리 예비비",
   "프로젝트 헌장 · WBS · 원가 기준선",
   "범위 기준선 · 일정 기준선 · 원가 기준선",
   "요구사항 문서 · 일정 기준선 · 품질관리계획서"
  ],
  "a": 2,
  "e": "PMB는 범위·일정·원가 기준선을 통합한 것이다. 관리 예비비는 원가 기준선 밖이므로 PMB에 포함되지 않는다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "조직이 처음으로 규제 기관 보고가 필수인 의료기기 소프트웨어 프로젝트를 맡았다. 하드웨어 사양은 규제상 확정되어 있지만 사용자 화면 요구사항은 아직 불확실하다. 프로젝트 관리자가 권고할 개발 접근법으로 가장 적절한 것은?",
  "c": [
   "요구사항이 일부 불확실하므로 전체를 순수 스크럼으로 운영한다",
   "규제 프로젝트이므로 UI도 모두 사전 확정하는 예측형으로만 운영한다",
   "하드웨어·인증 부분은 예측형으로, 화면 UI는 반복형으로 운영하는 하이브리드 접근법",
   "접근법은 스폰서가 정할 사항이므로 지시를 기다린다"
  ],
  "a": 2,
  "e": "확정·규제 요소는 예측형, 불확실 요소는 적응형이 적합하므로 하이브리드가 맞다(II-1 개발 접근법 권고). 전부 한쪽으로 몰거나 권고 책임을 미루는 보기는 테일러링 원칙에 어긋난다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 3,
  "q": "프로젝트 관리계획서가 승인된 뒤, 팀원이 \"일정 기준선의 마일스톤 날짜가 비현실적이니 PM이 직접 고쳐 달라\"고 요청했다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "PM 권한으로 일정 기준선을 바로 수정하고 팀에 공지한다",
   "날짜 조정의 근거와 영향을 분석한 뒤 필요하면 변경 요청으로 변경통제 절차에 올린다",
   "기준선은 바꿀 수 없으므로 요청을 거절한다",
   "스폰서에게 즉시 에스컬레이션해 결정을 맡긴다"
  ],
  "a": 1,
  "e": "승인된 기준선은 공식 변경통제로만 바뀐다. 먼저 분석 → 변경 요청이 PMI 마인드셋이다. 단독 수정은 절차 위반, 무조건 거절·즉시 에스컬레이션은 분석을 건너뛴다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "A project manager is preparing the integrated project management plan. Which item is NOT typically a component of the project management plan?",
  "c": [
   "Business case",
   "Scope baseline",
   "Change management plan",
   "Schedule management plan"
  ],
  "a": 0,
  "e": "비즈니스 케이스는 프로젝트 착수의 근거 문서(헌장의 입력)로 관리계획서의 구성요소가 아니다. 기준선·보조계획·변경관리계획은 관리계획서에 포함된다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "WBS(작업분류체계)의 최하위 수준 요소로, 원가와 기간을 추정·관리할 수 있는 단위는?",
  "c": [
   "통제계정(Control Account)",
   "활동(Activity)",
   "작업 패키지(Work Package)",
   "계획 패키지(Planning Package)"
  ],
  "a": 2,
  "e": "WBS 최하위는 작업 패키지다. 활동은 작업 패키지를 일정 관리에서 더 분해한 것이고, 통제계정은 여러 작업 패키지를 묶은 관리 지점이다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "범위 정의 회의에서 영업·운영·재무 부서의 요구가 서로 충돌하고 있다. 부서 간 요구를 한자리에서 조율하고 합의를 빠르게 이끌어 내기 위해 프로젝트 관리자가 활용할 기법으로 가장 적절한 것은?",
  "c": [
   "개별 설문조사",
   "벤치마킹",
   "문서 분석",
   "촉진 워크숍(Facilitated Workshop)"
  ],
  "a": 3,
  "e": "촉진 워크숍은 교차 기능 이해관계자를 모아 요구사항 이견을 조정하고 합의를 형성하는 데 효과적이다. 설문·문서 분석은 개별 정보 수집에는 쓰이지만 충돌 조정에는 약하다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "고객 인수 시험 직전, 개발자가 \"고객이 좋아할 것 같아서\" 요구사항에 없는 리포트 기능을 추가해 두었다는 사실을 알게 되었다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "추가 기능이 범위·품질·일정에 미치는 영향을 팀과 분석하고, 승인된 요구사항 기준으로 처리 방안을 결정한다",
   "고객 만족을 높이므로 인수 시험에 그대로 포함한다",
   "개발자를 공개적으로 문책하고 즉시 코드를 삭제한다",
   "고객에게 추가 비용을 청구할 기회로 활용한다"
  ],
  "a": 0,
  "e": "요구되지 않은 기능 추가는 금도금으로 위험·원가를 늘린다. 먼저 영향을 분석하고 기준선에 맞게 처리해야 한다. 그대로 두는 것은 금도금 용인, 공개 문책은 서번트 리더십에 어긋난다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 3,
  "q": "고객 대표가 인수 회의에서 인도물을 거부하며 \"우리가 원한 것은 이 기능이 아니다\"라고 말했다. 확인 결과 인도물은 승인된 범위 기술서와 인수 기준을 모두 충족한다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "인수 기준과 RTM을 고객과 함께 검토해 차이를 확인하고, 새 요구라면 변경 요청 절차를 안내한다",
   "승인된 기준을 충족했으므로 고객 서명 없이 인수 완료로 처리한다",
   "고객 요구대로 즉시 기능을 수정해 재인도한다",
   "스폰서에게 고객이 비협조적이라고 보고한다"
  ],
  "a": 0,
  "e": "먼저 고객과 직접 기준을 검토해 오해인지 새 요구인지 분석한다. 새 요구라면 변경통제로 처리한다. 일방적 인수 처리나 즉시 수정은 절차를 건너뛴다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "WBS 작성 시 적용하는 '100% 규칙'의 의미로 옳은 것은?",
  "c": [
   "작업 패키지는 100시간 이내로 분해해야 한다",
   "모든 작업 패키지는 착수 전 100% 상세 계획되어야 한다",
   "WBS 요소의 100%를 고객이 승인해야 한다",
   "하위 요소의 합이 상위 요소의 작업 전체를 빠짐없이, 그리고 초과 없이 포함해야 한다"
  ],
  "a": 3,
  "e": "100% 규칙은 분해의 완전성 원칙이다. 작업 패키지 크기 규칙(8/80 등)은 관례적 지침일 뿐이고, 먼 미래 작업은 연동 기획으로 나중에 상세화할 수 있다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "Which document links each requirement to its business objective, the WBS deliverable that satisfies it, and the test that verifies it?",
  "c": [
   "Requirements traceability matrix",
   "WBS dictionary",
   "Scope management plan",
   "Issue log"
  ],
  "a": 0,
  "e": "RTM은 요구사항의 출처·목표·인도물·테스트를 연결한다. WBS 사전은 WBS 요소의 상세 설명이다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "범위 기술서 검토 중 핵심 이해관계자가 \"데이터 이관 작업이 포함되는지\" 계속 질문하고 있다. 향후 범위 분쟁을 예방하기 위해 범위 기술서에서 가장 강화해야 할 항목은?",
  "c": [
   "프로젝트 목적",
   "상위 수준 위험",
   "요약 마일스톤",
   "제외 사항(Exclusions)"
  ],
  "a": 3,
  "e": "범위에 포함되지 않는 것을 명시하는 제외 사항이 범위 분쟁·범위 추가를 예방한다. 나머지는 헌장 수준 정보다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 3,
  "q": "WBS에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "인도물 중심으로 작업을 계층 분해한다",
   "작업 패키지 아래에 일정 활동을 나열한 것이 WBS의 최종 형태이다",
   "통제계정은 범위·원가·일정을 통합 관리하는 지점이다",
   "먼 미래의 작업은 연동 기획으로 나중에 상세화할 수 있다"
  ],
  "a": 1,
  "e": "활동은 일정 관리의 활동 정의 결과로 WBS에 포함되지 않는다. WBS는 인도물·작업 중심 분해다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "선행 활동이 끝나야 후행 활동을 시작할 수 있는 관계로, 선후행 도형법(PDM)에서 가장 흔히 쓰이는 것은?",
  "c": [
   "SS(Start-to-Start)",
   "FS(Finish-to-Start)",
   "FF(Finish-to-Finish)",
   "SF(Start-to-Finish)"
  ],
  "a": 1,
  "e": "FS가 가장 흔하고, SF가 가장 드물다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "프로젝트가 주경로 기준 2주 지연되었다. 스폰서는 종료일 준수를 요구하지만 추가 예산은 없으며, 일부 설계·개발 활동은 선호에 따른 순서로 배열되어 있다. 프로젝트 관리자가 우선 검토할 기법은?",
  "c": [
   "주경로 활동에 인력 추가(Crashing)",
   "비주경로 활동 압축",
   "주경로상 임의 의존관계 활동의 공정 중첩(Fast-tracking)",
   "자원 평활화(Smoothing)"
  ],
  "a": 2,
  "e": "추가 예산이 없으므로 원가가 드는 crashing보다 병행으로 단축하는 fast-tracking이 먼저다(재작업 위험은 분석·관리). 비주경로 압축과 평활화는 종료일을 당기지 못한다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "활동 A(5일) → B(3일) → D(4일), A → C(6일) → D 의 네트워크에서 모든 관계가 FS이고 Lead/Lag가 없다. 활동 B의 총 여유(Total Float)는?",
  "c": [
   "0일",
   "3일",
   "1일",
   "6일"
  ],
  "a": 1,
  "e": "경로 A-B-D = 12일, A-C-D = 15일이 주경로다. B는 C보다 3일 짧으므로 총 여유는 15 − 12 = 3일이다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "Which statement about the critical path is correct?",
  "c": [
   "It is the path with the most activities",
   "It always has positive total float",
   "Crashing any activity on any path shortens it",
   "It is the longest path through the network and determines the shortest possible project duration"
  ],
  "a": 3,
  "e": "주경로는 가장 긴 경로이며 프로젝트의 최단 가능 기간을 결정한다. 활동 수가 많다고 주경로가 아니며, 주경로 밖 활동 압축은 기간을 줄이지 못한다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "팀이 일정을 단축하기 위해 주경로 활동 4개 중 하나에 인력을 추가하려 한다. 1일 단축 시 추가 비용은 E 300만 원, F 120만 원, G 200만 원, H 80만 원이며 H는 주경로가 아니다. 가장 먼저 압축할 활동은?",
  "c": [
   "F",
   "H",
   "E",
   "G"
  ],
  "a": 0,
  "e": "Crashing은 주경로 활동 중 비용 기울기(일당 추가비용)가 가장 작은 활동부터 한다. H가 가장 싸지만 주경로가 아니므로 종료일을 당기지 못한다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 3,
  "q": "핵심 개발자가 두 활동에 동시에 과할당되어 있다. 경영진은 종료일 변경을 절대 허용하지 않는다. 프로젝트 관리자가 우선 적용할 자원 최적화 기법은?",
  "c": [
   "주경로를 바꿀 수 있는 자원 평준화(Leveling)",
   "여유(float) 범위 안에서 활동을 조정하는 자원 평활화(Smoothing)",
   "공정 중첩(Fast-tracking)",
   "해당 활동을 WBS에서 삭제"
  ],
  "a": 1,
  "e": "종료일이 고정되어 있으므로 float 안에서만 조정하는 평활화가 우선이다. 평준화는 종료일을 늦출 수 있고, fast-tracking은 과할당을 오히려 악화시킬 수 있다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "콘크리트 타설 후 3일간 양생한 뒤에야 다음 작업을 시작할 수 있을 때 일정에 반영하는 것은?",
  "c": [
   "선도(Lead)",
   "지연(Lag)",
   "자유 여유(Free Float)",
   "마일스톤"
  ],
  "a": 1,
  "e": "Lag는 후행 활동의 시작을 의도적으로 지연시키는 대기 시간이다. Lead는 후행 활동을 앞당긴다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "외부 인허가 기관의 승인이 나야만 공사를 시작할 수 있다. 이 의존관계의 유형은?",
  "c": [
   "임의 의존관계(Discretionary)",
   "외부 의존관계(External)",
   "내부 의존관계(Internal)",
   "선호 로직(Preferred logic)"
  ],
  "a": 1,
  "e": "프로젝트 팀 밖의 요인에 의한 관계는 외부 의존관계다. 임의(선호) 의존관계는 팀이 모범사례에 따라 정한 순서다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 3,
  "q": "일정 단축 기법에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "공정 압축은 일반적으로 원가를 증가시킨다",
   "공정 중첩은 순차 활동을 병행하여 재작업 위험을 높인다",
   "공정 중첩은 원가를 크게 늘리지만 재작업 위험은 없다",
   "주경로가 아닌 활동을 압축하면 종료일은 단축되지 않는다"
  ],
  "a": 2,
  "e": "Fast-tracking의 주된 대가는 위험·재작업 증가이고, 원가 증가는 crashing의 특징이다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "일정 기준선 승인 후, 공급사 납품이 늦어져 비주경로 활동이 2일 지연될 것으로 예상된다. 해당 활동의 총 여유는 5일이다. 프로젝트 관리자의 대응으로 가장 적절한 것은?",
  "c": [
   "즉시 공정 압축을 승인해 2일을 만회한다",
   "스폰서에게 종료일 지연을 보고하고 기준선 변경을 요청한다",
   "공급사 계약을 해지하고 새 공급사를 찾는다",
   "여유 안의 지연이므로 종료일 영향이 없음을 확인하고, 후행 활동 영향과 여유 소진을 감시한다"
  ],
  "a": 3,
  "e": "총 여유 5일 안의 2일 지연은 종료일에 영향이 없다. 분석 결과에 따라 감시하는 것이 적절하다. 즉시 압축·기준선 변경·계약 해지는 과잉 대응이다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "A project manager learns that a new system must be running before the legacy system can be shut down. Which dependency relationship best describes this?",
  "c": [
   "Start-to-finish",
   "Finish-to-start",
   "Start-to-start",
   "Finish-to-finish"
  ],
  "a": 0,
  "e": "후행(구 시스템 종료)이 끝나려면 선행(신 시스템 가동)이 시작되어야 하므로 SF다. 가장 드문 관계의 대표 예시다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 3,
  "q": "하이브리드 프로젝트에서 상위 고객 마일스톤은 예측형 일정으로, 개발 팀 내부는 2주 반복으로 운영한다. 고객이 3개월 뒤 마일스톤의 달성 가능성을 물었다. 프로젝트 관리자가 가장 먼저 할 일은?",
  "c": [
   "반복 계획은 예측할 수 없으므로 답변을 보류한다",
   "팀에 초과근무를 지시해 마일스톤을 보장한다",
   "팀의 실측 벨로시티와 잔여 백로그로 예측한 완료 시점을 마일스톤 일정과 대조해 근거를 제시한다",
   "마일스톤 날짜를 스프린트 종료일에 맞게 임의로 조정한다"
  ],
  "a": 2,
  "e": "하이브리드에서는 실측 데이터(벨로시티·잔여 포인트)를 근거로 예측해 상위 일정과 연결한다. 답변 보류나 초과근무 지시, 임의 조정은 분석·투명성 원칙에 어긋난다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "계획 단계에서 식별된 위험이 실제로 발생해 우발 예비비로 대응해야 하는 상황이다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "위험관리계획에 정한 대응을 실행하고 우발 예비비를 사용해 기록을 갱신한다",
   "관리 예비비 사용을 위해 경영진 승인을 먼저 받는다",
   "새 위험이므로 위험 식별 워크숍부터 연다",
   "원가 기준선을 늘리는 변경 요청을 제출한다"
  ],
  "a": 0,
  "e": "식별된 위험(known-unknown)에는 계획된 대응과 기준선 안의 우발 예비비를 쓴다. 관리 예비비는 미식별 위험용이며, 기준선 변경도 필요 없다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "프로젝트 중 예상하지 못한 신규 규제가 생겨 추가 작업이 필요해졌고, 우발 예비비에는 이 항목이 없다. 프로젝트 관리자가 할 일로 가장 적절한 것은?",
  "c": [
   "영향을 분석한 뒤 관리 예비비 사용을 위한 변경 요청을 제출해 승인을 받는다",
   "우발 예비비 잔액을 먼저 끌어다 쓴다",
   "PM 권한으로 관리 예비비를 즉시 집행한다",
   "추가 작업을 다음 프로젝트로 미룬다"
  ],
  "a": 0,
  "e": "미식별 위험(unknown-unknown)은 관리 예비비 대상이며, 사용 시 경영진 승인과 변경통제를 거쳐 기준선을 갱신한다. 우발 예비비 전용이나 PM 단독 집행은 절차 위반이다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 1,
  "q": "프로젝트 착수 초기, 정보가 부족한 상태에서 만드는 개략 추정(ROM)의 관례적 정확도 범위는?",
  "c": [
   "약 −25% ~ +75%",
   "약 −5% ~ +10%",
   "약 −10% ~ +10%",
   "약 −50% ~ +50%"
  ],
  "a": 0,
  "e": "PMBOK 관례상 ROM은 −25%~+75%, 확정 추정은 −5%~+10%이다. 수치는 조직·상황에 따라 다를 수 있다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 1,
  "q": "조직 재무팀이 \"분기별 지출 한도가 계획 지출보다 낮다\"고 통보했다. 원가 기준선 총액은 변하지 않는다. 프로젝트 관리자가 사용할 기법은?",
  "c": [
   "자금 한도 조정(Funding Limit Reconciliation)",
   "원가 집계(Cost Aggregation)",
   "유사 추정",
   "공정 압축(Crashing)"
  ],
  "a": 0,
  "e": "기간별 자금 한도와 계획 지출을 맞추기 위해 작업 일정을 재조정하는 기법이 자금 한도 조정이다. Crashing은 오히려 지출을 앞당긴다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "Which statement about management reserve is correct?",
  "c": [
   "It is part of the cost baseline and used by the project manager freely",
   "It is included in the project budget but not in the cost baseline",
   "It covers identified risks with planned responses",
   "It is included in BAC for earned value calculations"
  ],
  "a": 1,
  "e": "관리 예비비는 예산 안·기준선 밖이며 미식별 위험용이다. 식별 위험은 우발 예비비, BAC는 원가 기준선 총액이다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 3,
  "q": "원가·재무 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "상향식 추정은 정확도가 높지만 시간이 많이 든다",
   "원가 기준선을 누적하면 S-곡선 형태가 된다",
   "생애주기 원가는 운영·유지 비용까지 고려한다",
   "프로젝트 선정 시 이미 지출된 매몰 비용을 반드시 반영해야 한다"
  ],
  "a": 3,
  "e": "매몰 비용은 회수할 수 없으므로 의사결정에서 무시한다. 나머지는 옳은 설명이다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 3,
  "q": "분기 재무 검토에서 스폰서가 \"지난달 지출이 계획보다 15% 높다\"고 지적했다. 조직의 거버넌스 임계치는 10% 이다. 프로젝트 관리자가 가장 먼저 할 일은?",
  "c": [
   "다음 달 지출을 줄이도록 팀에 지시해 평균을 맞춘다",
   "편차 원인과 향후 추세를 분석하고, 임계치 초과이므로 분석 결과와 대안을 갖고 거버넌스 절차에 따라 보고한다",
   "관리 예비비를 투입해 편차를 상쇄한다",
   "원가 기준선을 실제 지출에 맞춰 즉시 재설정한다"
  ],
  "a": 1,
  "e": "ECO II-6은 재무 변동을 감시하고 거버넌스 프로세스와 협업하도록 한다. 먼저 원인 분석 후 임계치를 넘었으므로 대안과 함께 보고한다. 임의 삭감·예비비 투입·기준선 재설정은 분석과 승인을 건너뛴다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "The project manager has completed activity cost estimates and is now aggregating them into work packages and control accounts to create a time-phased budget. Which process is being performed?",
  "c": [
   "Estimate Costs",
   "Control Costs",
   "Determine Budget",
   "Plan Cost Management"
  ],
  "a": 2,
  "e": "활동 추정을 작업 패키지·통제계정으로 집계해 시간 단계별 원가 기준선을 만드는 것은 예산 책정이다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 1,
  "q": "고객에게 출하된 제품에서 결함이 발견되어 리콜과 보증 수리 비용이 발생했다. 품질비용(CoQ) 분류상 어디에 해당하는가?",
  "c": [
   "내부 실패 비용",
   "외부 실패 비용",
   "평가 비용",
   "예방 비용"
  ],
  "a": 1,
  "e": "출하 후 발견된 결함으로 인한 비용(보증·리콜·평판)은 외부 실패 비용이며 가장 비싸다. 출하 전 재작업은 내부 실패다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "관리도에서 모든 점이 관리 한계 안에 있으나, 평균선 위쪽에 연속 8개 점이 찍혔다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "관리 한계 안이므로 아무 조치도 하지 않는다",
   "Rule of Seven에 따라 프로세스 이상 신호로 보고 특수 원인을 조사한다",
   "규격 한계를 넓혀 달라고 고객에게 요청한다",
   "관리 한계를 ±2σ로 좁혀 다시 그린다"
  ],
  "a": 1,
  "e": "평균 한쪽에 연속 7점 이상이면 관리 한계 안이라도 비무작위 패턴으로 조사한다. 규격 한계는 고객 요구이므로 임의 변경 대상이 아니다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 1,
  "q": "결함 120건을 원인별로 집계했더니 상위 2개 원인이 전체의 약 80%를 차지했다. 개선 노력을 어디에 집중할지 시각적으로 보여 주는 도구는?",
  "c": [
   "산점도",
   "흐름도",
   "파레토 차트",
   "히스토그램"
  ],
  "a": 2,
  "e": "파레토 차트는 빈도순 막대와 누적선으로 소수 핵심 원인(80/20)을 보여 준다. 히스토그램은 분포를 보이지만 원인 우선순위를 정렬하지는 않는다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 3,
  "q": "품질 관련 개념에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "등급(Grade)이 낮은 제품은 항상 품질 문제로 간주해야 한다",
   "정밀하지만 정확하지 않은 측정이 있을 수 있다",
   "품질은 검사보다 계획과 예방으로 확보한다",
   "관리 한계와 규격 한계는 서로 다를 수 있다"
  ],
  "a": 0,
  "e": "등급은 기능·특성의 범주로, 요구를 충족하면 낮은 등급도 문제가 아니다. 낮은 품질은 항상 문제다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "검사 단계에서 결함 비율이 계속 높게 나온다. 팀은 \"검사 인원을 두 배로 늘리자\"고 제안했다. PMI 품질 관점에서 프로젝트 관리자가 우선 취할 행동은?",
  "c": [
   "검사 인원을 두 배로 늘려 결함을 모두 걸러낸다",
   "인수 기준을 낮춰 결함 비율을 줄인다",
   "고객에게 결함 가능성을 공지하고 출하한다",
   "근본원인 분석으로 결함을 만드는 프로세스를 찾아 개선해 예방한다"
  ],
  "a": 3,
  "e": "품질은 검사가 아니라 예방으로 만든다. 근본원인을 찾아 프로세스를 개선하는 것이 우선이다. 검사 증원은 평가 비용만 늘리고, 기준 하향·결함 출하는 품질 책임 회피다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 1,
  "q": "Which quality tool is best for identifying potential root causes of a defect by grouping them into categories such as people, process, and materials?",
  "c": [
   "Control chart",
   "Scatter diagram",
   "Check sheet",
   "Cause-and-effect (Ishikawa) diagram"
  ],
  "a": 3,
  "e": "인과관계도(피시본)는 원인을 범주별로 구조화해 근본원인 후보를 찾는다. 체크시트는 데이터 수집, 산점도는 두 변수 상관관계용이다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "고객이 환경 규제 준수와 탄소 배출 저감을 품질 요구사항으로 제시했다. 품질관리계획 수립 시 프로젝트 관리자가 할 일로 가장 적절한 것은?",
  "c": [
   "규제 준수는 법무팀 소관이므로 품질 계획에서 제외한다",
   "프로젝트 종료 시 한 번만 점검한다",
   "원가 절감을 위해 지속가능성 요구는 선택 사항으로 둔다",
   "규제·지속가능성 요구를 측정 가능한 품질 지표로 정의하고 확인 방법을 계획에 반영한다"
  ],
  "a": 3,
  "e": "ECO II-7은 규제 준수 확보와 지속가능성을 품질 Enabler로 포함한다. 측정 가능한 지표로 정의해 계획에 반영해야 한다. 제외·사후 점검·선택 처리는 컴플라이언스 타협이다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 1,
  "q": "RACI 차트에서 'A(Accountable)'에 대한 설명으로 옳은 것은?",
  "c": [
   "작업 결과에 최종 책임을 지며 작업마다 한 명만 지정한다",
   "실제로 작업을 수행하는 사람이며 여러 명일 수 있다",
   "의견을 제공하는 자문 역할이다",
   "결과를 통보받기만 하는 사람이다"
  ],
  "a": 0,
  "e": "A는 최종 책임·승인자로 작업당 한 명이다. 수행자는 R, 자문은 C, 통보는 I다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 2,
  "q": "매트릭스 조직에서 일하는 PM이 핵심 DB 전문가를 확보해야 하는데, 해당 인원은 기능 관리자 소속이며 다른 프로젝트에도 배정되어 있다. 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "스폰서에게 즉시 인력 배정을 지시해 달라고 요청한다",
   "기능 관리자와 만나 프로젝트 요구 일정과 필요 역량을 공유하고 배정 시기·비율을 협상한다",
   "해당 전문가에게 직접 연락해 프로젝트에 합류하라고 지시한다",
   "외부 인력을 바로 계약해 투입한다"
  ],
  "a": 1,
  "e": "매트릭스 조직에서 자원 확보의 기본은 기능 관리자와의 협상이다. 즉시 에스컬레이션은 이르고, 직접 지시는 권한 밖이며, 외부 계약은 분석 없이 원가를 늘린다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 2,
  "q": "팀원 두 명이 같은 작업 패키지에 대해 서로 \"내가 최종 승인자\"라고 주장해 결정이 지연되고 있다. 프로젝트 관리자가 할 일로 가장 적절한 것은?",
  "c": [
   "두 사람 모두 승인하도록 이중 결재로 바꾼다",
   "PM이 모든 작업의 최종 승인을 직접 맡는다",
   "갈등이 자연히 해소될 때까지 기다린다",
   "책임 배정 매트릭스(RACI)를 검토·명확화해 작업별 A를 한 명으로 정하고 팀과 공유한다"
  ],
  "a": 3,
  "e": "역할 혼란은 RACI로 명확히 하며 A는 한 명이어야 한다. 이중 결재는 문제를 고착시키고, PM의 모든 승인 독점은 권한 위임에 어긋나며, 방치는 회피다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 1,
  "q": "Which resource optimization technique may change the project's critical path and end date?",
  "c": [
   "Resource leveling",
   "Resource smoothing",
   "Rolling wave planning",
   "Decomposition"
  ],
  "a": 0,
  "e": "평준화는 자원 제약을 우선해 일정을 이동하므로 주경로·종료일이 바뀔 수 있다. 평활화는 float 안에서만 조정한다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 3,
  "q": "계획된 장비 임대가 공급 부족으로 2주 늦어진다는 통보를 받았다. 해당 장비는 주경로 활동에 필요하다. 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "즉시 스폰서에게 종료일 연기를 요청한다",
   "다른 프로젝트의 장비를 허락 없이 전용한다",
   "팀과 함께 일정·원가 영향을 분석하고 대체 장비·작업 순서 조정 등 대응 옵션을 검토한다",
   "다른 주경로 활동을 즉시 공정 압축한다"
  ],
  "a": 2,
  "e": "공급사 지연은 먼저 팀과 영향을 평가하고 대응 옵션을 검토하는 것이 정답 패턴이다. 즉시 에스컬레이션·즉시 압축은 이르고, 무단 전용은 비윤리적이다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 2,
  "q": "자원 관리 산출물에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "자원관리계획서는 자원 확보·통제 방법을 정의한다",
   "RACI는 책임배정매트릭스의 한 형태다",
   "팀 헌장은 그라운드룰과 의사결정 방식을 담는다",
   "자원 달력은 프로젝트 활동의 논리적 순서를 보여 준다"
  ],
  "a": 3,
  "e": "자원 달력은 자원이 가용한 기간·근무일을 보여 준다. 활동의 논리적 순서는 네트워크 다이어그램이 보여 준다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 1,
  "q": "범위가 명확하게 정의되어 있고 구매자가 원가 위험을 최소화하려 할 때 가장 적합한 계약 유형은?",
  "c": [
   "원가 + 고정 수수료(CPFF)",
   "시간·자재(T&M)",
   "원가 + 성과 보상 수수료(CPAF)",
   "확정 고정가(FFP)"
  ],
  "a": 3,
  "e": "FFP는 판매자가 원가 위험을 지므로 구매자 위험이 가장 낮다. 범위가 명확해야 판매자가 고정가를 제시할 수 있다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "신기술 연구개발 프로젝트로 범위가 매우 불확실하다. 판매자는 고정가 제안을 거부하고 있다. 구매자가 선택할 계약 유형으로 가장 적절한 것은?",
  "c": [
   "확정 고정가(FFP) 계약",
   "고정가 + 경제가격조정(FP-EPA) 계약",
   "의향서(Letter of Intent)만으로 착수",
   "원가정산형(Cost-Reimbursable) 계약"
  ],
  "a": 3,
  "e": "범위가 불확실한 R&D에는 원가정산형이 적합하다(구매자 위험 증가는 감수·관리). 의향서는 계약이 아니다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "입찰자 회의가 끝난 뒤, 한 잠재 판매자가 PM에게 개별적으로 연락해 기술 요구사항에 대한 추가 설명을 요청했다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "질문과 답변을 모든 잠재 판매자에게 동일하게 공유한다",
   "요청한 판매자에게만 상세히 설명해 준다",
   "입찰 공정성을 위해 질문을 무시한다",
   "해당 판매자를 입찰에서 제외한다"
  ],
  "a": 0,
  "e": "조달은 모든 판매자에게 동일한 정보를 제공해야 공정하다. 개별 설명은 특혜이고, 무시나 제외는 과잉·부적절한 대응이다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "판매자가 \"요구사항 변경으로 추가 작업이 발생했다\"며 추가 비용을 청구했으나, 구매자는 계약 범위 안의 작업이라고 본다. 프로젝트 관리자가 우선 취할 행동은?",
  "c": [
   "즉시 중재 기관에 회부한다",
   "계약 조건과 변경 이력을 근거로 판매자와 협상해 해결을 시도한다",
   "판매자에게 대금 지급을 전면 중단한다",
   "추가 비용을 그대로 승인해 관계를 유지한다"
  ],
  "a": 1,
  "e": "클레임(이견이 있는 변경)은 계약 조건에 따른 협상이 먼저이며, 실패 시 ADR(조정·중재), 소송은 최후다. 일방적 지급 중단은 계약 위반 소지가 있다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 1,
  "q": "A buyer needs vendors to provide price quotes for a clearly specified commodity. Which procurement document should be issued?",
  "c": [
   "Request for information (RFI)",
   "Request for proposal (RFP)",
   "Request for quotation (RFQ)",
   "Letter of intent"
  ],
  "a": 2,
  "e": "사양이 명확한 품목의 가격 견적은 RFQ다. RFI는 정보 수집, RFP는 해결책 제안 요청이다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 3,
  "q": "판매자의 품질 문제가 반복되자 기능 관리자가 \"당장 계약을 해지하라\"고 요구했다. 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "기능 관리자 요구대로 즉시 해지 통보를 보낸다",
   "판매자에게 비공식적으로 경고만 한다",
   "결함을 내부 팀이 대신 수정하고 판매자에게 알리지 않는다",
   "성과 문제를 문서화하고 계약에 정한 시정 요구·해지 조건을 확인해 절차대로 대응한다"
  ],
  "a": 3,
  "e": "계약은 법적 구속력이 있으므로 성과 검토·문서화·계약상 절차가 먼저다. 즉시 해지는 법적 위험이 있고, 비공식 경고나 은폐는 절차·투명성 위반이다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "조달 관련 용어에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "의향서(Letter of Intent)는 법적 구속력을 갖는 계약이다",
   "작업 기술서(SOW)는 조달 품목을 상세히 설명한다",
   "독자 원가 추정은 제안 가격의 적정성 검증에 쓰인다",
   "유일 소스(sole source)는 공급 가능한 업체가 하나뿐인 경우다"
  ],
  "a": 0,
  "e": "의향서는 계약 의사를 밝히는 문서일 뿐 계약이 아니다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 3,
  "q": "Which contract type places the MOST cost risk on the buyer?",
  "c": [
   "Cost plus fixed fee (CPFF)",
   "Firm fixed price (FFP)",
   "Fixed price incentive fee (FPIF)",
   "Time and material (T&M) with a not-to-exceed clause"
  ],
  "a": 0,
  "e": "CPFF는 판매자의 원가를 모두 보전하고 고정 수수료를 주므로 구매자 위험이 가장 크다. 순서는 CPFF > CPIF > T&M > FPIF > FFP."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "공급사 납품 지연이 예상된다는 보고를 받았다. 계약에는 지체상금 조항이 있다. 프로젝트 관리자가 가장 먼저 할 일은?",
  "c": [
   "즉시 지체상금을 청구하고 계약 해지를 경고한다",
   "스폰서에게 즉시 에스컬레이션한다",
   "팀과 함께 지연이 일정·원가에 미치는 영향을 평가하고 공급사와 원인·만회 계획을 논의한다",
   "다른 공급사와 중복 계약을 바로 체결한다"
  ],
  "a": 2,
  "e": "먼저 영향 평가와 공급사와의 협업이 우선이다(PMI 샘플 패턴). 즉시 청구·에스컬레이션·중복 계약은 분석 없이 과잉 대응한다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 1,
  "q": "PM을 포함해 프로젝트 인원이 6명에서 9명으로 늘었다. 늘어난 의사소통 채널 수는?",
  "c": [
   "15개",
   "36개",
   "21개",
   "3개"
  ],
  "a": 2,
  "e": "6명: 6×5/2 = 15, 9명: 9×8/2 = 36. 증가분은 36 − 15 = 21개다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 1,
  "q": "이해관계자 간에 요구사항 해석을 두고 오해가 생겼다. 신속하게 오해를 해소하기에 가장 적절한 의사소통 방법은?",
  "c": [
   "상호작용형(Interactive) 의사소통 — 회의·화상회의",
   "밀어내기(Push) — 상세 이메일 발송",
   "끌어오기(Pull) — 위키에 문서 게시",
   "공식 보고서 배포"
  ],
  "a": 0,
  "e": "오해·복잡한 사안은 실시간 양방향 교환인 상호작용형이 가장 효과적이다. Push는 이해 여부를 확인하기 어렵다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "글로벌 분산 팀을 꾸린 뒤, 해외 이해관계자들이 \"필요한 보고를 받지 못한다\"고 불만을 제기했다. 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "모든 이해관계자에게 모든 보고서를 매일 발송한다",
   "불만을 제기한 이해관계자를 보고 대상에서 제외한다",
   "의사소통 요구사항을 다시 분석해 의사소통 관리계획서의 대상·빈도·방법을 갱신한다",
   "스폰서에게 해외 이해관계자 관리를 넘긴다"
  ],
  "a": 2,
  "e": "의사소통 문제는 계획을 먼저 참조하고 요구를 재분석해 계획을 갱신한다. 일괄 과다 발송은 정보 과부하, 제외·전가는 책임 회피다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 1,
  "q": "Which of the following best describes the purpose of a communications management plan?",
  "c": [
   "To authorize the project and assign the project manager",
   "To define who needs what information, when, how, and from whom",
   "To list all project risks and their owners",
   "To record formal acceptance of deliverables"
  ],
  "a": 1,
  "e": "의사소통 관리계획서는 누가 어떤 정보를 언제·어떻게·누구로부터 받는지 정의한다. 나머지는 헌장·위험 기록부·인수 문서의 목적이다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 3,
  "q": "스폰서가 전략 변경으로 프로젝트를 50% 진행 시점에 취소했다. 프로젝트 관리자가 다음으로 해야 할 일은?",
  "c": [
   "취소되었으므로 팀을 즉시 해산하고 문서는 폐기한다",
   "스폰서를 설득해 취소를 철회하도록 한다",
   "남은 작업을 계속해 인도물을 완성한다",
   "종료 절차를 시작해 완료·미완료 인도물을 문서화하고 교훈을 정리하며 계약과 자원을 정리한다"
  ],
  "a": 3,
  "e": "조기 종료된 프로젝트도 종료 절차(인도 현황 문서화·교훈·조달·재무·자원 종료)를 수행해야 한다. 즉시 해산은 지식 유실, 작업 지속은 승인 없는 수행이다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "프로젝트 종료 단계에서 수행하는 활동의 순서로 가장 적절한 것은?",
  "c": [
   "자원 해제 → 교훈 정리 → 인도물 인수 → 조달 종료",
   "교훈 정리 → 자원 해제 → 조달 종료 → 인도물 인수",
   "인도물 공식 인수 확인 → 조달 종료 → 교훈 정리·OPA 갱신 → 자원 해제",
   "조달 종료 → 자원 해제 → 인도물 인수 → 교훈 정리"
  ],
  "a": 2,
  "e": "인수가 먼저 확인되어야 종료가 가능하고, 팀이 해산되기 전에 교훈을 정리해야 지식이 남는다. 자원 해제는 마지막이다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 3,
  "q": "프로젝트·단계 종료에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "운영으로의 이관 준비 상태를 검증한다",
   "교훈(Lessons Learned)은 종료 단계에서만 한 번 수집한다",
   "완료에 대한 이해관계자 승인을 확보한다",
   "최종 교훈을 조직 프로세스 자산에 반영한다"
  ],
  "a": 1,
  "e": "교훈은 프로젝트 전 기간에 걸쳐 기록하고, 종료 시 최종 정리해 OPA에 반영한다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "운영 부서로 시스템을 이관하기 직전, 운영팀이 \"운영 매뉴얼과 교육이 없어 인수할 수 없다\"고 했다. 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "이관 준비 기준을 운영팀과 확인해 누락된 이관 산출물을 파악하고 완료 계획을 세운다",
   "계약상 시스템은 완성되었으므로 이관을 강행한다",
   "운영팀장의 상급자에게 인수를 지시하도록 요청한다",
   "프로젝트를 종료하고 운영 문제는 운영팀이 해결하도록 한다"
  ],
  "a": 0,
  "e": "ECO II-10은 운영 이관 준비 검증을 요구한다. 먼저 당사자와 기준을 확인하고 공백을 메운다. 강행·상급자 압박·방치는 가치 인도와 협업 원칙에 어긋난다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "스폰서가 신규 물류 시스템 프로젝트의 헌장 초안 작성을 PM에게 요청했다. 이때 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "비즈니스 케이스와 편익관리계획을 검토해 목표를 측정 가능하게 정리한다",
   "핵심 이해관계자와 상위 요구사항·가정·제약을 확인한다",
   "초안을 스폰서에게 제출해 승인과 발행을 요청한다",
   "초안을 완성한 뒤 PM 명의로 서명·발행해 프로젝트를 공식 승인한다"
  ],
  "a": 3,
  "e": "PM은 헌장 작성을 도울 수 있지만 발행·승인은 스폰서(착수자)의 권한이다. 나머지는 PM이 헌장 개발 시 수행하는 적절한 활동이다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "범위 기준선이 승인된 뒤, 마케팅 이사가 \"간단한 기능이니 바로 넣어 달라\"며 신규 화면을 요청했다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "요청 내용을 문서화하고 범위·일정·원가 영향을 분석한다",
   "개발 팀에 여유가 있으므로 기준선 변경 없이 바로 반영한다",
   "RTM으로 요청이 비즈니스 목표와 연결되는지 확인한다",
   "변경 요청으로 제출하고 승인 결과에 따라 기준선과 문서를 갱신한다"
  ],
  "a": 1,
  "e": "변경통제 없이 요청을 수용하는 것은 범위 추가(scope creep)다. 나머지는 분석 → 변경 요청 → 갱신의 올바른 흐름이다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 3,
  "q": "원가 추정 결과가 스폰서가 기대한 금액보다 20% 높게 나왔다. 스폰서는 \"이사회 보고용이니 숫자를 맞춰 달라\"고 했다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "추정 근거(Basis of Estimates)와 가정을 스폰서와 함께 검토한다",
   "범위 조정·단계적 인도 등 원가를 줄일 수 있는 대안을 제시한다",
   "식별된 위험과 우발 예비비 산정 근거를 투명하게 설명한다",
   "스폰서가 원하는 금액에 맞춰 추정치를 낮춰 보고한다"
  ],
  "a": 3,
  "e": "근거 없이 추정치를 낮추는 것은 PMI 윤리 강령의 정직(honesty) 위반이다. 근거 검토·대안 제시·투명한 설명이 올바른 대응이다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "품질 감사 결과, 팀이 승인된 코드 리뷰 절차를 일부 건너뛰고 있음이 확인되었다. 프로젝트 관리자의 조치로 가장 적절하지 않은 것은?",
  "c": [
   "절차를 건너뛴 근본원인을 팀과 분석한다",
   "프로세스는 그대로 두고 최종 산출물 검사 횟수만 늘린다",
   "필요하면 프로세스 개선을 위한 변경 요청을 제출한다",
   "감사에서 얻은 개선점을 교훈 기록부에 반영한다"
  ],
  "a": 1,
  "e": "감사는 프로세스 개선(예방)을 위한 것이다. 검사만 늘리는 것은 평가 비용만 증가시키고 원인을 남겨 둔다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 2,
  "q": "자원 히스토그램을 보니 한 팀원이 3주 동안 주 60시간 이상 배정되어 있다. 프로젝트 관리자의 조치로 가장 적절하지 않은 것은?",
  "c": [
   "과할당이 발생한 기간과 활동을 구체적으로 확인한다",
   "본인이 동의했으므로 초과 배정을 그대로 유지하고 결과만 지켜본다",
   "여유가 있는 활동부터 평활화로 일정을 조정한다",
   "기능 관리자와 추가 인력 지원 가능성을 협의한다"
  ],
  "a": 1,
  "e": "과할당 방치는 번아웃·품질 저하·일정 위험을 키운다. 분석 → 평활화 → 필요 시 평준화나 추가 자원 협의가 올바른 순서다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 1,
  "q": "애자일 선언(Agile Manifesto)의 가치 진술로 옳지 않은 것은?",
  "c": [
   "프로세스와 도구보다 개인과 상호작용을 더 가치 있게 여긴다",
   "포괄적인 문서보다 작동하는 소프트웨어를 더 가치 있게 여긴다",
   "계약 협상보다 고객과의 협력을 더 가치 있게 여긴다",
   "변화에 대응하기보다 계획을 따르기를 더 가치 있게 여긴다"
  ],
  "a": 3,
  "e": "애자일 선언은 '계획을 따르기보다 변화에 대응하기'를 더 가치 있게 여긴다. 정답 보기는 좌우를 뒤집은 진술이고, 나머지 세 개는 선언의 원래 문장이다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "Which statement best reflects how the Agile Manifesto treats processes, documentation, contracts, and plans?",
  "c": [
   "They have value, but the items on the left are valued more.",
   "They should be removed from agile projects entirely.",
   "They are valued equally with the items on the left.",
   "They apply only when the project uses a predictive approach."
  ],
  "a": 0,
  "e": "선언 끝 문장은 '오른쪽 항목에도 가치가 있지만 왼쪽 항목을 더 가치 있게 여긴다'이다. 오른쪽 항목을 없애라는 뜻이 아니며(1번 오답), 동등하게 여기는 것도 아니다(2번 오답)."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "애자일로 전환한 팀의 한 개발자가 \"애자일 선언에 따라 이제 문서는 전혀 쓰지 않겠다\"고 말했다. 운영팀은 이관을 위해 운영 매뉴얼이 필요하다고 한다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "가치를 주는 최소 필요 문서를 팀과 운영팀이 함께 정하도록 촉진하고 백로그에 반영한다",
   "애자일 선언을 근거로 모든 문서 작성을 중단하도록 승인한다",
   "조직의 예측형 표준 문서 일체를 그대로 작성하도록 지시한다",
   "문서 범위 결정을 즉시 PMO에 에스컬레이션한다"
  ],
  "a": 0,
  "e": "애자일은 문서를 없애는 것이 아니라 가치 있는 만큼만 만든다. 이해관계자 요구(이관)를 반영해 팀과 함께 '필요 충분' 수준을 합의하는 것이 협업형 정답이다. 전부 생략이나 전부 작성은 극단이고, 팀이 해결할 수 있는 일을 바로 PMO에 올리는 것은 과하다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 1,
  "q": "고객이 원하는 화면 흐름을 확신하지 못한다. 팀은 시제품을 몇 차례 보여 주며 피드백으로 설계를 다듬고, 완성된 시스템은 마지막에 한 번 인도하기로 했다. 이 프로젝트가 따르는 생애주기는?",
  "c": [
   "증분형(Incremental)",
   "예측형(Predictive)",
   "반복형(Iterative)",
   "애자일형(Agile)"
  ],
  "a": 2,
  "e": "반복형은 피드백으로 정확성을 높이고 인도는 마지막에 한다. 증분형은 완성된 조각을 자주 인도하고, 애자일은 반복과 증분을 결합해 자주 인도한다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 3,
  "q": "개발 생애주기에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "예측형은 범위·일정·원가를 초기에 정하고 변경을 통제한다",
   "애자일 생애주기는 반복형 특성만 있고 증분형 특성은 없다",
   "증분형은 사용 가능한 기능을 나누어 단계적으로 인도한다",
   "반복형은 피드백을 반영해 해법을 점진적으로 다듬는다"
  ],
  "a": 1,
  "e": "애자일은 반복(피드백으로 다듬기)과 증분(자주 인도)을 모두 결합한 생애주기다. 나머지 진술은 각 생애주기의 표준 설명이다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "신규 고객 포털 프로젝트를 시작한다. 요구사항 변동 가능성이 높고 기술은 팀에 익숙하며, 고객 대표가 2주마다 결과물을 검토할 수 있다. 프로젝트 관리자가 개발 접근법에 대해 해야 할 일은?",
  "c": [
   "조직 표준이 예측형이므로 예측형 계획을 바로 수립한다",
   "요구사항이 모두 확정될 때까지 프로젝트 착수를 보류한다",
   "팀원 투표만으로 접근법을 정하고 결과를 통보한다",
   "적응형(애자일) 접근을 권고하고 그 근거를 핵심 이해관계자와 공유해 합의한다"
  ],
  "a": 3,
  "e": "ECO II-1은 프로젝트 요구·복잡도를 평가해 접근법을 '권고(recommend)'하라고 한다. 요구 불확실성이 높고 피드백이 잦으면 적응형이 적합하다. 관행대로 고르거나, 착수를 미루거나, 이해관계자 합의 없이 통보하는 것은 오답이다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 1,
  "q": "애자일 12원칙에 해당하지 않는 것은?",
  "c": [
   "스폰서·개발자·사용자가 지속 가능한 속도를 유지할 수 있어야 한다",
   "요구사항 변경은 개발 후반에는 받아들이지 않는다",
   "최고의 아키텍처·요구사항·설계는 자기조직적 팀에서 나온다",
   "팀은 정기적으로 더 효과적인 방법을 성찰하고 행동을 조정한다"
  ],
  "a": 1,
  "e": "12원칙은 '개발 후반부라도 요구사항 변경을 환영한다'고 말한다. 후반 변경을 거부하는 것은 예측형의 변경 통제 사고방식이다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "Scrum Guide 2020이 정의한 스크럼 팀의 책임(accountabilities)에 해당하지 않는 것은?",
  "c": [
   "Product Owner",
   "Scrum Master",
   "Project Manager",
   "Developers"
  ],
  "a": 2,
  "e": "2020판의 책임은 Product Owner·Scrum Master·Developers 세 가지다. Project Manager는 스크럼의 책임이 아니며, 하이브리드 환경에서 별도 역할로 존재할 수 있다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "스프린트 진행 중 영업 이사가 개발자에게 직접 찾아와 새 기능을 이번 스프린트에 넣어 달라고 요청했다. 스크럼 마스터 역할을 하는 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "스프린트 목표를 수정해 새 기능을 즉시 반영한다",
   "스프린트 중이므로 요청을 거절하고 다음 릴리스까지 받지 않는다",
   "요청을 Product Owner에게 전달해 Product Backlog에서 우선순위를 판단하도록 안내한다",
   "개발자들에게 초과근무로 새 기능을 함께 처리하도록 요청한다"
  ],
  "a": 2,
  "e": "새 요구는 가치·순서를 책임지는 PO가 백로그에서 판단한다. 스프린트 목표를 위태롭게 하는 변경은 하지 않으며, 무조건 거절도 이해관계자 협업 원칙에 어긋난다. 초과근무는 지속 가능한 속도 원칙 위반이다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "Daily Scrum이 매일 프로젝트 관리자에게 개인별 진척을 보고하는 자리로 바뀌어 30분 넘게 이어진다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "회의 시간을 아끼기 위해 Daily Scrum을 주 1회로 줄인다",
   "질문 목록을 정해 개인별로 빠짐없이 보고하게 한다",
   "Developers가 스프린트 목표 진척을 점검·조정하는 회의임을 코칭하고 상세 논의는 회의 후로 분리한다",
   "회의를 길게 만드는 팀원을 다른 팀으로 재배치한다"
  ],
  "a": 2,
  "e": "Daily Scrum은 Developers의 계획·조정 회의이고 PM 보고 회의가 아니다. 서번트 리더는 목적을 코칭하고 세부 문제 해결은 회의 후(parking lot)로 돌린다. 빈도 축소·보고 강화·인사 조치는 근본원인을 다루지 않는다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "Midway through a Sprint, the company changes its product strategy and the Sprint Goal becomes obsolete. Who has the authority to cancel the Sprint?",
  "c": [
   "The Scrum Master",
   "The Developers",
   "The project sponsor",
   "The Product Owner"
  ],
  "a": 3,
  "e": "Scrum Guide 2020에 따르면 스프린트 취소 권한은 PO에게만 있다. 스폰서나 SM은 PO에게 의견을 줄 수 있지만 결정하지 않는다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 3,
  "q": "스크럼 산출물과 그 확약(commitment)의 짝으로 옳지 않은 것은?",
  "c": [
   "Product Backlog — Product Goal",
   "Increment — Definition of Done",
   "Sprint Backlog — Definition of Done",
   "Sprint Backlog — Sprint Goal"
  ],
  "a": 2,
  "e": "Sprint Backlog의 확약은 Sprint Goal이다. Definition of Done은 Increment의 확약이고, Product Goal은 Product Backlog의 확약이다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "At the Sprint Review, a key stakeholder says a demonstrated feature does not meet the current business need. What should happen next?",
  "c": [
   "The Developers rework the feature during the review meeting.",
   "The Scrum Master escalates the disagreement to the sponsor.",
   "The feature is accepted because it satisfied the Sprint Goal.",
   "The Product Owner captures the feedback and adapts the Product Backlog."
  ],
  "a": 3,
  "e": "Sprint Review의 목적은 증분을 점검하고 Product Backlog를 적응시키는 것이다. 피드백은 PO가 백로그에 반영해 우선순위를 정한다. 회의 중 즉석 재작업이나 즉시 에스컬레이션은 부적절하고, 피드백을 무시하면 가치 중심 원칙에 어긋난다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "스프린트 마지막 날 스토리 하나가 통합 테스트를 마치지 못해 Definition of Done을 충족하지 못했다. Product Owner는 데모에 포함해 '완료'로 보고하고 싶어 한다. 프로젝트 관리자는 무엇을 권해야 하는가?",
  "c": [
   "완료된 비율만큼 포인트를 속도에 반영하고 완료로 보고한다",
   "DoD를 충족하지 못한 항목은 증분에 포함하지 않고 Product Backlog로 되돌려 다시 평가한다",
   "스프린트를 이틀 연장해 테스트를 마친 뒤 종료한다",
   "이번 스프린트에 한해 DoD에서 통합 테스트 조건을 뺀다"
  ],
  "a": 1,
  "e": "DoD는 Increment의 확약이므로 미충족 항목은 증분이 아니다. 스프린트 길이는 일관되게 유지하고, 기준을 그때그때 완화하면 투명성과 품질이 무너진다. 부분 점수 반영은 속도를 왜곡한다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "스프린트 회고(Sprint Retrospective)에서 다루는 내용으로 옳지 않은 것은?",
  "c": [
   "팀원 개인별 성과를 평가해 보상을 결정한다",
   "팀원 간 상호작용과 협업 방식을 점검한다",
   "프로세스·도구의 개선점을 찾아 실행 계획을 세운다",
   "Definition of Done을 보완할지 검토한다"
  ],
  "a": 0,
  "e": "회고는 사람·상호작용·프로세스·도구·DoD를 점검해 개선을 계획하는 팀 학습 이벤트다. 개인 성과 평가·보상은 회고의 목적이 아니며, 이를 섞으면 솔직한 논의가 사라진다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 3,
  "q": "스크럼에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "스프린트 길이는 1개월 이하로 일관되게 유지한다",
   "스크럼 팀은 보통 10명 이하로 구성한다",
   "1개월 스프린트의 Sprint Planning은 최대 8시간이다",
   "스프린트 중 Sprint Goal을 위태롭게 하는 변경도 PO가 승인하면 반영한다"
  ],
  "a": 3,
  "e": "Scrum Guide는 스프린트 중 Sprint Goal을 위태롭게 하는 변경을 하지 않는다고 명시한다. 목표가 무의미해졌다면 PO가 스프린트를 취소한다. 나머지 진술은 2020판 내용과 일치한다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "두 개발자가 기술 구현 방식을 두고 반복적으로 충돌해 Daily Scrum 진행이 지연되고 있다. 스크럼 마스터 역할의 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "기술 리더를 새로 지정해 그의 결정을 따르도록 강제한다",
   "기술 결정을 Product Owner에게 넘겨 정하게 한다",
   "자기조직화 팀이므로 갈등이 저절로 풀릴 때까지 관여하지 않는다",
   "두 사람과 대화해 갈등 원인을 파악하고 팀이 합의한 의사결정 규칙으로 해결하도록 촉진한다"
  ],
  "a": 3,
  "e": "서번트 리더는 갈등의 근본원인을 먼저 파악하고 팀이 스스로 해결하도록 촉진한다(협업·문제해결). 강압은 자기조직화를 해치고, 기술 결정은 PO의 책임이 아니며, 방관은 장애를 키운다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "Which Scrum event is used to inspect the Increment with stakeholders and adapt the Product Backlog?",
  "c": [
   "Sprint Review",
   "Sprint Retrospective",
   "Sprint Planning",
   "Daily Scrum"
  ],
  "a": 0,
  "e": "Sprint Review는 이해관계자와 증분을 점검하고 백로그를 적응시킨다. Retrospective는 프로세스 개선, Planning은 스프린트 작업 계획, Daily Scrum은 Developers의 일일 조정이다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 1,
  "q": "팀원들이 각자 4~5개 작업을 동시에 붙잡고 있어 착수는 많은데 완료가 늦다. 프로젝트 관리자가 칸반 보드에 WIP 제한을 도입하자고 제안하는 주된 이유는?",
  "c": [
   "팀원별 작업 할당량을 늘려 활용률을 높인다",
   "동시에 진행하는 작업을 줄여 흐름을 개선하고 병목을 드러낸다",
   "작업 주기를 고정 길이 반복으로 맞춘다",
   "개별 작업의 추정 정확도를 높인다"
  ],
  "a": 1,
  "e": "WIP 제한은 작업 전환을 줄이고 병목을 드러내 리드 타임을 단축한다. 활용률 극대화는 오히려 대기열을 늘리며, 칸반은 고정 반복을 요구하지 않는다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "A support team using Kanban has an average WIP of 12 items and an average throughput of 4 items per week. A stakeholder asks how long a request typically takes once work starts. Using Little's Law, what should the project manager answer?",
  "c": [
   "3 weeks",
   "48 weeks",
   "0.33 weeks",
   "8 weeks"
  ],
  "a": 0,
  "e": "리틀의 법칙: 평균 사이클 타임 = 평균 WIP ÷ 평균 처리량 = 12 ÷ 4 = 3주. 곱하면 48, 역수로 나누면 0.33이 되는 오답을 노린 보기다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "칸반 보드의 '테스트' 열에 카드가 계속 쌓이고, 완료되는 항목 수는 몇 주째 늘지 않는다. 개발 열에는 여유가 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "개발 열 WIP 한도를 높여 더 많은 작업을 착수시킨다",
   "테스트 담당자에게 병목이 해소될 때까지 초과근무를 지시한다",
   "팀과 테스트 단계 병목을 분석하고, 개발자가 테스트를 돕는 스워밍과 신규 착수 억제를 함께 논의한다",
   "보드에서 테스트 열을 없애 흐름을 단순화한다"
  ],
  "a": 2,
  "e": "병목에서는 '착수를 멈추고 완료를 돕는다'가 칸반 원칙이다. 팀과 분석한 뒤 스워밍을 논의하는 것이 협업형 정답이다. WIP 상향은 대기열만 늘리고, 초과근무 지시는 지속 가능성 위반, 열 삭제는 문제를 숨긴다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 3,
  "q": "칸반(Kanban)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "용량이 생길 때 다음 작업을 끌어오는 당김(pull) 방식을 쓴다",
   "고정 길이 반복과 스크럼 마스터 역할을 필수로 규정한다",
   "작업 흐름 정책을 명시적으로 공개한다",
   "리드 타임·처리량 같은 흐름 지표로 개선을 측정한다"
  ],
  "a": 1,
  "e": "칸반은 기존 프로세스에서 시작해 점진 개선하며 반복 길이나 역할을 규정하지 않는다. 당김 방식, 명시적 정책, 흐름 지표는 칸반의 핵심 실천이다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 1,
  "q": "XP(eXtreme Programming)의 실천법에 해당하지 않는 것은?",
  "c": [
   "짝 프로그래밍",
   "단계별 문서 승인 게이트",
   "테스트 주도 개발(TDD)",
   "지속적 통합(CI)"
  ],
  "a": 1,
  "e": "XP는 짝 프로그래밍·TDD·CI·리팩터링·작은 릴리스 같은 기술 실천을 강조한다. 단계별 문서 승인 게이트는 예측형 거버넌스 장치다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 1,
  "q": "In XP, a short, time-boxed experiment used to reduce technical uncertainty so that a story can be estimated is called a:",
  "c": [
   "Sprint",
   "Swarm",
   "Slack",
   "Spike"
  ],
  "a": 3,
  "e": "스파이크는 불확실성을 줄이기 위한 타임박스 조사·실험이다. Sprint는 스크럼 반복, Swarm은 여러 명이 한 항목을 함께 끝내는 협업 방식, Slack은 계획에 넣는 여유 시간이다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "린 소프트웨어 개발(Poppendieck)에서 말하는 7가지 낭비에 해당하지 않는 것은?",
  "c": [
   "부분 완료 작업",
   "추가 기능(Extra features)",
   "짝 프로그래밍",
   "작업 전환(Task switching)"
  ],
  "a": 2,
  "e": "7낭비는 부분 완료 작업·추가 기능·재학습·인계·작업 전환·지연·결함이다. 짝 프로그래밍은 품질 내재화와 지식 공유를 위한 XP 실천이다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "팀이 매 스프린트 이전 기능의 회귀 결함을 고치느라 신규 작업 비중이 계속 줄고 있다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "회고에서 팀과 근본원인을 분석하고 테스트 자동화·TDD·CI 같은 기술 실천 도입을 합의한다",
   "스프린트 길이를 늘려 테스트 시간을 확보한다",
   "회귀 결함 수정을 다음 릴리스 이후로 미룬다",
   "외부 QA 부서에 최종 검사를 모두 위임한다"
  ],
  "a": 0,
  "e": "반복되는 품질 문제는 근본원인 분석 후 품질을 내재화하는 기술 실천으로 다룬다. 스프린트 연장은 증상만 완화하고, 결함 연기는 기술 부채를 키우며, 외부 검사 위임은 '검사로 품질을 만드는' 방식이라 원칙과 맞지 않는다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 3,
  "q": "가치흐름지도(VSM) 분석 결과 고객 요청부터 인도까지 총 리드 타임이 20일이고, 그중 실제 부가가치 작업 시간은 4일이었다. 프로세스 효율과 프로젝트 관리자의 개선 초점으로 옳은 것은?",
  "c": [
   "25% — 부가가치 작업자의 작업 속도를 높인다",
   "80% — 이미 효율적이므로 현 상태를 유지한다",
   "5% — 작업 단계를 추가해 검사를 강화한다",
   "20% — 인계·승인 대기 같은 비부가가치 대기 시간을 줄인다"
  ],
  "a": 3,
  "e": "프로세스 효율 = 부가가치 시간 ÷ 총 리드 타임 = 4 ÷ 20 = 20%. 16일이 대기이므로 개선 초점은 대기·인계 낭비 제거다. 작업자 속도를 높이는 것은 이미 짧은 부가가치 구간만 건드린다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 1,
  "q": "사용자 스토리 품질 기준 INVEST의 의미로 옳지 않은 것은?",
  "c": [
   "I — Independent(독립적)",
   "E — Essential(필수적)",
   "N — Negotiable(협상 가능)",
   "T — Testable(테스트 가능)"
  ],
  "a": 1,
  "e": "INVEST의 E는 Estimable(추정 가능)이다. Independent·Negotiable·Valuable·Estimable·Small·Testable이 전체 목록이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "Product Owner가 다른 업무로 바빠 백로그 정제에 계속 빠지고 있다. 그 결과 스토리가 모호해 스프린트 기획이 매번 지연된다. 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "PO와 만나 정제 불참의 영향을 공유하고 참여 방식이나 위임 권한을 함께 정한다",
   "팀이 스토리 우선순위를 직접 정해 기획을 진행한다",
   "스폰서에게 즉시 PO 교체를 요청한다",
   "모호한 스토리라도 그대로 스프린트에 넣어 착수한다"
  ],
  "a": 0,
  "e": "먼저 당사자와 직접 영향과 해결책을 논의하는 것이 정답 패턴이다. 우선순위는 PO 책임이라 팀이 대신하면 역할 침범이고, 즉시 교체 요청은 성급하며, 모호한 스토리 착수는 재작업 위험을 키운다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "PO가 WSJF(Weighted Shortest Job First)로 다음 네 항목의 순서를 정하려 한다. 가장 먼저 할 항목은? (지연비용 CoD / 작업 크기)\nA: 20 / 10   B: 15 / 3   C: 30 / 15   D: 8 / 4",
  "c": [
   "A",
   "B",
   "C",
   "D"
  ],
  "a": 1,
  "e": "WSJF = CoD ÷ 작업 크기. A=2, B=5, C=2, D=2이므로 B가 가장 크다. CoD가 가장 큰 C를 고르는 것이 대표 오답이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "A stakeholder asks the team to add a new requirement after a competitor launched a similar product. The project uses Scrum and a Sprint is in progress. What should the project manager do first?",
  "c": [
   "Add the requirement to the current Sprint Backlog immediately.",
   "Submit a formal change request to the change control board.",
   "Ask the Product Owner to evaluate the requirement and order it in the Product Backlog.",
   "Reject it because scope was fixed at release planning."
  ],
  "a": 2,
  "e": "애자일 맥락의 변경은 백로그에 추가하고 PO가 가치에 따라 순서를 정한다. 진행 중 스프린트에 바로 넣으면 스프린트 목표가 흔들리고, CCB 절차는 예측형 방식이며, 거절은 변화 대응 원칙에 어긋난다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 3,
  "q": "카노(Kano) 모델에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "흥분(Delighter) 요소는 없어도 불만이 없지만 있으면 만족이 크게 오른다",
   "성능(Performance) 요소는 충족 수준에 비례해 만족도가 변한다",
   "기본(Must-be) 요소는 충족할수록 만족도가 비례해 계속 높아진다",
   "시간이 지나면 흥분 요소가 기본 요소로 바뀔 수 있다"
  ],
  "a": 2,
  "e": "기본 요소는 없으면 강한 불만을 낳지만 충족해도 만족이 크게 오르지 않는다. 충족 수준에 비례해 만족이 변하는 것은 성능 요소의 설명이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 1,
  "q": "수용 기준이 없어 Product Owner와 Developers가 '완료' 여부를 서로 다르게 해석하고, 스토리 반려가 반복된다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "PM이 각 스토리의 완료 여부를 단독으로 판정한다",
   "스토리 포인트를 늘려 반려에 대비한 여유를 둔다",
   "정제 단계에서 PO와 팀이 스토리별로 검증 가능한 수용 기준(예: Given-When-Then)을 정의하도록 촉진한다",
   "반려된 스토리를 다음 릴리스로 미룬다"
  ],
  "a": 2,
  "e": "해석 차이의 근본원인은 확인(Confirmation) 기준의 부재다. 정제에서 수용 기준을 함께 정하는 것이 예방형 정답이다. PM 단독 판정은 PO 책임 침범이고, 포인트 부풀리기와 연기는 원인을 다루지 않는다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 1,
  "q": "A new team member asks what the Agile Practice Guide, Second Edition calls the ongoing activity of clarifying, splitting, estimating, and ordering backlog items. Which term should the project manager use?",
  "c": [
   "Backlog grooming",
   "Backlog baselining",
   "Backlog freezing",
   "Backlog refinement"
  ],
  "a": 3,
  "e": "APG 2판은 grooming 대신 refinement로 용어를 통일했다. grooming은 이전 용어이고, baselining·freezing은 변경을 막는 예측형 개념이라 애자일 백로그 활동과 맞지 않는다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 3,
  "q": "Definition of Ready(DoR)와 Definition of Done(DoD)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "DoR은 Scrum Guide 2020이 규정한 필수 확약이다",
   "DoD는 증분이 요구 품질을 충족했는지 판단하는 공유 기준이다",
   "DoR은 스토리를 스프린트에 넣을 준비 상태를 판단하는 기준으로 팀이 선택해 쓴다",
   "DoD를 충족하지 못한 작업은 증분에 포함되지 않는다"
  ],
  "a": 0,
  "e": "Scrum Guide 2020의 확약은 Product Goal·Sprint Goal·DoD뿐이다. DoR은 많은 팀이 쓰는 보조 실천이지만 공식 필수 요소가 아니다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "에픽 하나가 너무 커서 한 스프린트에 끝낼 수 없다. 팀은 'UI 작업', 'DB 작업', 'API 작업'으로 나누자고 제안한다. 프로젝트 관리자가 권할 방법은?",
  "c": [
   "팀의 제안대로 기술 계층별로 나누어 진행한다",
   "에픽을 나누지 않고 스프린트 길이를 늘린다",
   "각 조각이 사용자에게 가치를 주도록 워크플로 단계·업무 규칙 기준으로 수직 분할하자고 코칭한다",
   "PO 없이 팀이 분할 기준을 정해 바로 착수한다"
  ],
  "a": 2,
  "e": "계층별(수평) 분할은 조각 단독으로 가치를 주지 못해 검증과 피드백이 늦어진다. 수직 분할은 INVEST의 Valuable·Small을 함께 충족한다. 스프린트 연장은 일관성 원칙에 어긋나고, PO를 빼면 가치 판단이 빠진다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 1,
  "q": "A new developer asks, \"Does a 5-point story mean five hours of work?\" How should the project manager explain story points?",
  "c": [
   "They are hours of effort, so 5 points means five hours.",
   "They convert task cost into a monetary value.",
   "They are a standard unit for comparing productivity across teams.",
   "They express relative size, combining effort, complexity, and uncertainty."
  ],
  "a": 3,
  "e": "스토리 포인트는 노력·복잡성·불확실성을 합친 상대 크기 척도다. 시간·원가 단위가 아니며, 팀마다 기준이 달라 팀 간 생산성 비교에 쓸 수 없다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "잔여 릴리스 백로그가 120점이다. 최근 세 스프린트의 속도는 18, 22, 20점이었다. 스폰서가 릴리스까지 남은 스프린트 수를 묻는다. 프로젝트 관리자가 제시할 값은?",
  "c": [
   "6 스프린트",
   "5 스프린트",
   "7 스프린트",
   "8 스프린트"
  ],
  "a": 0,
  "e": "평균 속도 = (18+22+20) ÷ 3 = 20, 잔여 스프린트 = 120 ÷ 20 = 6. 최고 속도(22)나 최저 속도(18)를 쓰면 다른 값이 나온다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "경영진이 팀 A(속도 40점)와 팀 B(속도 25점)를 비교하며 B팀을 독려하라고 요구한다. 프로젝트 관리자는 어떻게 대응해야 하는가?",
  "c": [
   "스토리 포인트가 팀별 상대 척도라 비교가 무의미함을 설명하고 인도 가치·흐름 같은 결과 지표를 제안한다",
   "B팀 추정치를 A팀 기준으로 다시 맞추도록 지시한다",
   "B팀에 다음 분기 속도 목표 40점을 부여한다",
   "두 팀의 포인트를 시간 단위로 환산해 통일한다"
  ],
  "a": 0,
  "e": "속도는 팀 내부 예측용이며 비교·목표화하면 포인트 인플레이션이 생긴다. 이해관계자 교육과 가치 중심 지표 제안이 정답이다. 나머지 보기는 모두 지표를 왜곡한다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "플래닝 포커에서 한 스토리에 대해 한 개발자는 1점, 다른 개발자는 13점을 냈다. 진행자가 다음에 할 일은?",
  "c": [
   "모든 추정치의 평균을 최종값으로 기록한다",
   "가장 낮게·높게 추정한 사람이 근거를 설명하게 한 뒤 다시 추정한다",
   "PM이 경험에 비추어 최종값을 정한다",
   "가장 경력이 많은 개발자의 값을 채택한다"
  ],
  "a": 1,
  "e": "극단값의 근거에는 누락된 정보나 위험이 숨어 있는 경우가 많다. 대화 후 재추정으로 공유된 이해를 만드는 것이 플래닝 포커의 핵심이다. 평균·권위 결정은 학습을 생략한다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 3,
  "q": "Which statement about team velocity is correct?",
  "c": [
   "Partially completed stories contribute points in proportion to progress.",
   "Velocity should increase every Sprint to demonstrate improvement.",
   "Only stories that meet the Definition of Done count toward velocity.",
   "The Product Owner sets the target velocity before each Sprint."
  ],
  "a": 2,
  "e": "속도는 DoD를 충족한 스토리의 포인트만 센다. 부분 완료는 0점이고, 속도를 매번 올리라는 목표나 PO의 목표 설정은 지표를 왜곡한다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "새로 구성된 애자일 팀이 첫 스프린트를 시작했다. 과거 속도 자료가 없는데 스폰서가 지금 릴리스 날짜를 확정해 달라고 요구한다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "다른 팀의 평균 속도를 그대로 적용해 날짜를 확정한다",
   "초기 추정을 범위로 제시하고 2~3개 스프린트의 실측 속도로 예측을 갱신하겠다고 합의한다",
   "속도가 나올 때까지 어떤 날짜도 제시하지 않는다",
   "팀원별 시간당 처리량을 곱해 확정 날짜를 산출한다"
  ],
  "a": 1,
  "e": "불확실성이 큰 초기에는 범위 예측과 점진적 갱신이 정답이다. 다른 팀 속도는 기준이 달라 쓸 수 없고, 아무 정보도 주지 않는 것은 이해관계자 협업 실패이며, 시간 환산은 상대 추정의 취지와 맞지 않는다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 3,
  "q": "반복(스프린트) 계획에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "팀은 과거 속도와 가용 용량을 고려해 작업량을 선택한다",
   "선택한 스토리를 작업(task)으로 분해해 실행 계획을 세울 수 있다",
   "팀은 스프린트 목표를 함께 정한다",
   "용량(capacity)은 휴가·교육 일정과 관계없이 직전 속도로 고정한다"
  ],
  "a": 3,
  "e": "용량은 다음 반복의 가용 역량이므로 휴가·교육·지원 업무를 반영해 조정한다. 직전 속도로 고정하면 과다 약속이 생긴다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "팀이 세 스프린트 연속으로 계획한 포인트의 약 60%만 완료했다. 스폰서는 진척이 불안정하다고 우려한다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "다음 스프린트 계획량을 늘려 팀에 긴장감을 준다",
   "미완료 스토리의 진척률만큼 포인트를 나누어 속도에 반영한다",
   "회고에서 과다 약속의 원인(추정·작업 중단·의존성)을 팀과 분석하고 실측 속도 기준으로 계획량을 조정한다",
   "스프린트를 4주로 늘려 계획 포인트를 맞춘다"
  ],
  "a": 2,
  "e": "먼저 원인을 분석하고 실측 속도(yesterday's weather)로 계획하는 것이 정답이다. 압박과 부분 점수는 지표를 왜곡하고, 스프린트 연장은 원인을 다루지 않는다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 1,
  "q": "로드맵 워크숍에서 Product Owner가 80개 에픽의 상대 크기를 1시간 안에 대략 분류하고 싶어 한다. 프로젝트 관리자가 제안할 기법으로 가장 적절한 것은?",
  "c": [
   "삼점 추정(Three-point estimating)",
   "티셔츠 사이징(T-shirt sizing)",
   "모수 추정(Parametric estimating)",
   "상향식 추정(Bottom-up estimating)"
  ],
  "a": 1,
  "e": "티셔츠 사이징은 거친 상대 추정으로 초기 로드맵·릴리스 계획에 쓴다. 삼점·모수·상향식 추정은 주로 예측형 기간·원가 추정 기법이다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 1,
  "q": "A client is unsure whether customers will pay for a new subscription service and wants to learn this with minimal investment. What should the project manager propose?",
  "c": [
   "Build a minimum viable product (MVP) to test the hypothesis with real users.",
   "Develop the full product and measure demand after launch.",
   "Create a detailed work breakdown structure for all features first.",
   "Baseline the release scope before any customer contact."
  ],
  "a": 0,
  "e": "가설 검증·학습이 목적이면 MVP(Build-Measure-Learn)가 정답이다. 전체 개발 후 측정은 투자 위험이 크고, WBS 작성이나 범위 기준선 확정은 학습 없이 계획만 고정한다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 2,
  "q": "고객은 9개월 뒤 전체 시스템을 한 번에 인도받기를 원한다. 분석 결과 예약 기능만 먼저 공개해도 3개월 차부터 편익이 생긴다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "고객 요구대로 9개월 뒤 일괄 인도만 계획한다",
   "핵심 이해관계자와 가치 요소를 확인하고 점진적 인도 옵션과 기대 편익을 제시해 합의를 구한다",
   "고객 동의 없이 기능이 완성될 때마다 운영 환경에 배포한다",
   "가치 판단은 팀 내부 기술 기준으로만 결정한다"
  ],
  "a": 1,
  "e": "ECO II-3은 증분 인도 기회를 평가하고 가치 요소를 이해관계자와 식별하라고 한다. 근거를 제시해 합의하는 것이 정답이다. 기회를 무시하는 일괄 인도, 동의 없는 배포, 팀 내부만의 판단은 모두 오답이다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 2,
  "q": "프로젝트 중반, 경쟁사 출시로 남은 기능 일부의 비즈니스 가치가 크게 떨어졌다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "승인된 범위이므로 계획대로 모든 기능을 완수한다",
   "PO·스폰서와 남은 백로그의 가치를 재평가해 우선순위를 조정하거나 범위 축소를 검토한다",
   "팀 사기를 고려해 가치 하락 사실을 공유하지 않는다",
   "즉시 프로젝트 중단을 선언하고 팀을 해산한다"
  ],
  "a": 1,
  "e": "가치는 프로젝트 전 기간 검토 대상이다. 가치가 떨어진 항목은 재평가해 순서를 바꾸거나 제외한다. 계획 고수는 가치 중심 원칙 위반이고, 정보 은폐는 투명성 위반이며, 즉시 중단은 분석 없는 과잉 대응이다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 3,
  "q": "The team delivered all planned features on time and on budget, but benefit tracking shows that customers are not adopting the product. What should the project manager do?",
  "c": [
   "Work with stakeholders to analyze the adoption gap and adjust the backlog to deliver value.",
   "Close the project because the agreed scope has been delivered.",
   "Add more features to make the product more attractive.",
   "Report success because schedule and cost targets were met."
  ],
  "a": 0,
  "e": "ECO 2026은 프로젝트 성공을 일정·예산이 아니라 이해관계자 가치와 성과 달성으로 정의한다. 채택 저조의 원인을 분석해 백로그를 조정해야 한다. 분석 없이 기능을 추가하는 것도 근거 없는 대응이다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 2,
  "q": "스폰서가 \"출시만 하면 된다\"며 편익 측정 계획 없이 프로젝트를 진행하자고 한다. 비즈니스 케이스에는 '콜센터 문의 30% 감소'가 목표로 적혀 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "스폰서의 지시이므로 측정 없이 출시 일정에만 집중한다",
   "편익 지표·측정 책임자·측정 시점을 정의해 편익 추적 측정 체계가 마련되었는지 확인한다",
   "출시 1년 뒤에 측정 방법을 다시 논의하기로 한다",
   "팀원 각자가 체감 효과를 보고하게 한다"
  ],
  "a": 1,
  "e": "ECO II-3은 '편익을 추적할 측정 체계가 마련되었는지 확인'을 명시한다. 목표가 비즈니스 케이스에 있으므로 측정 방법을 지금 정해야 기준값도 확보된다. 측정 연기나 주관적 보고로는 편익을 입증할 수 없다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 3,
  "q": "가치기반 인도(value-based delivery)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "비즈니스 가치는 프로젝트 종료 시점에 한 번 평가하면 충분하다",
   "가치 요소는 핵심 이해관계자와 함께 식별한다",
   "가치와 이해관계자 피드백을 근거로 작업 우선순위를 정한다",
   "가치를 점진적으로 인도할 기회를 평가한다"
  ],
  "a": 0,
  "e": "ECO II-3은 프로젝트 전 기간에 걸쳐 비즈니스 가치를 검토하라고 한다. 나머지 세 진술은 II-3 Enabler 그대로다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 1,
  "q": "다음 중 '성과(Outcome)'에 해당하지 않는 것은?",
  "c": [
   "모바일 앱 출시",
   "신규 앱 도입 후 고객 이탈률 감소",
   "콜센터 문의 건수 감소",
   "온라인 예약 전환율 증가"
  ],
  "a": 0,
  "e": "앱 출시는 만든 결과물인 산출물(Output)이다. 성과(Outcome)는 산출물이 일으킨 변화(이탈률·문의 건수·전환율 변화)를 말한다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "의료기기 프로젝트에서 하드웨어는 규제 승인 때문에 설계를 초기에 고정해야 하고, 연동 앱은 사용자 피드백을 자주 반영해야 한다. 프로젝트 관리자가 권고할 접근법은?",
  "c": [
   "규제가 있으므로 전체를 예측형으로 운영한다",
   "하드웨어는 예측형, 앱은 반복형으로 운영하는 하이브리드를 설계하고 통합 마일스톤을 정렬한다",
   "변화 대응을 위해 전체를 스크럼으로 운영한다",
   "두 팀이 각자 운영하고 통합은 마지막에 한 번 한다"
  ],
  "a": 1,
  "e": "구성요소마다 불확실성과 제약이 다르면 하이브리드가 적합하며, 통합 지점을 계획해야 한다. 전부 한 방식으로 묶으면 한쪽 특성을 무시하게 되고, 통합을 마지막으로 미루면 통합 위험이 커진다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 1,
  "q": "Agile Practice Guide 2판이 하이브리드 접근을 바라보는 관점으로 옳은 것은?",
  "c": [
   "예측형과 애자일 중 하나만 고르는 이분법적 선택",
   "예측형과 애자일 사이의 인도 연속체(delivery continuum) 위에서 고르는 선택",
   "애자일 도입 전 과도기에만 쓰는 임시 방식",
   "규제 산업에서는 사용할 수 없는 방식"
  ],
  "a": 1,
  "e": "APG 2판은 하이브리드를 이분법이 아닌 연속체로 본다. 과도기용 임시 방식이나 규제 산업 배제는 근거 없는 진술이다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 1,
  "q": "According to the Agile Practice Guide, Second Edition, the meeting formerly called the 'daily standup' is referred to as the:",
  "c": [
   "Daily status review",
   "Daily progress report",
   "Daily alignment ceremony",
   "Daily coordination meeting"
  ],
  "a": 3,
  "e": "APG 2판은 daily standup 대신 daily coordination meeting이라는 용어를 쓴다. 상태 보고(status)가 아니라 조정(coordination)이 목적임을 드러낸다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 3,
  "q": "Agile Practice Guide(1판)의 애자일 적합성 필터(suitability filter)가 평가하는 범주에 해당하지 않는 것은?",
  "c": [
   "문화(Culture)",
   "예산 규모(Budget)",
   "팀(Team)",
   "프로젝트(Project)"
  ],
  "a": 1,
  "e": "적합성 필터는 문화(지지·신뢰·의사결정 권한), 팀(규모·경험·고객 접근), 프로젝트(변경 가능성·중요도·증분 인도 가능성) 3범주로 평가한다. 예산 규모는 별도 범주가 아니다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "애자일 전환 중인 팀이 \"회고는 시간 낭비\"라며 회고를 없애자고 제안했다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "팀의 자기조직화를 존중해 회고를 바로 폐지한다",
   "스크럼 규칙이므로 이유를 묻지 않고 현재 방식대로 유지한다",
   "회고를 PM이 진행하는 개인 면담으로 대체한다",
   "회고가 불필요하다고 느끼는 이유와 생략의 영향을 팀과 분석하고, 목적을 유지하는 방식으로 형식을 조정한다"
  ],
  "a": 3,
  "e": "테일러링은 목적을 지키면서 방식을 바꾸는 것이다. 먼저 원인(형식적 운영·실행되지 않는 개선)을 분석해야 한다. 그대로 폐지하거나, 이유를 듣지 않고 강제하거나, 팀 학습을 개인 면담으로 바꾸는 것은 오답이다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "대형 프로그램에서 6개 스크럼 팀이 공통 모듈에 의존하며 팀 간 일정 충돌이 반복된다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "모든 팀의 스프린트를 멈추고 통합 계획을 새로 세운다",
   "PM이 모든 팀의 백로그 항목을 직접 할당한다",
   "팀 대표가 모이는 Scrum of Scrums 같은 조정 회의로 의존성과 장애를 가시화하고 조정한다",
   "의존성이 있는 기능을 범위에서 일괄 제외한다"
  ],
  "a": 2,
  "e": "스케일링 상황의 의존성은 팀 간 조정 메커니즘으로 다룬다. 전 팀 중단은 과잉 대응이고, 중앙 할당은 자기조직화를 해치며, 일괄 제외는 가치 분석 없이 범위를 깎는다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 3,
  "q": "스테이시 매트릭스(Stacey matrix)에서 요구사항 불확실성과 기술 불확실성이 모두 중간 이상이어서 적응형(애자일) 접근이 가장 효과적인 영역은?",
  "c": [
   "복잡(Complex)",
   "단순(Simple)",
   "혼돈(Chaotic)",
   "난해(Complicated)"
  ],
  "a": 0,
  "e": "요구·기술 불확실성이 모두 높아지는 복잡 영역에서 반복·피드백 기반 애자일이 효과적이다. 단순 영역은 예측형으로 충분하고, 혼돈 영역은 먼저 안정화가 필요하다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "애자일 팀이 운영하는 프로젝트에서 PMO가 분기별 거버넌스 보고서와 단계 게이트 승인을 요구한다. 프로젝트 관리자에게 가장 적절하지 않은 대응은?",
  "c": [
   "번업·속도 등 기존 애자일 산출물로 PMO가 필요한 정보를 줄 수 있는지 PMO와 협의한다",
   "단계 게이트를 릴리스 마일스톤에 맞추는 하이브리드 거버넌스를 제안한다",
   "보고 요구의 목적을 확인하고 중복 문서를 줄이는 방법을 함께 찾는다",
   "애자일 원칙에 맞지 않는다며 PMO 보고 요구를 거부한다"
  ],
  "a": 3,
  "e": "거버넌스 보고는 조직의 정당한 요구이며, 애자일 산출물을 테일러링해 충족하는 것이 정답 패턴이다. 일방적으로 거부하는 것은 이해관계자 협업과 거버넌스 정합을 모두 해친다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 1,
  "q": "The sponsor asks, \"Are we late because the team is slow or because scope keeps growing?\" Which chart best answers this question?",
  "c": [
   "A burnup chart showing completed work and total scope lines",
   "A sprint burndown chart showing remaining work",
   "A cumulative flow diagram showing work by stage",
   "A velocity chart showing points per sprint"
  ],
  "a": 0,
  "e": "번업 차트는 누적 완료선과 총 범위선을 함께 그려 범위 증가와 진척 속도를 분리해 보여 준다. 번다운은 잔여 작업만 보여 범위 변경이 섞이고, CFD는 병목, 속도 차트는 팀 실적 추세를 본다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "누적 흐름도(CFD)에서 '코드 리뷰' 단계의 밴드 폭이 몇 주째 계속 넓어지고 있다. 프로젝트 관리자가 내릴 해석과 행동으로 옳은 것은?",
  "c": [
   "처리량이 늘고 있으므로 현재 흐름을 유지한다",
   "리드 타임이 짧아지고 있으므로 착수를 늘린다",
   "범위가 줄고 있으므로 백로그를 보충한다",
   "코드 리뷰가 병목이므로 팀과 리뷰 대기 원인과 WIP 제한·지원 방안을 논의한다"
  ],
  "a": 3,
  "e": "CFD에서 밴드 폭이 넓어지는 단계는 작업이 쌓이는 병목이다. 세로 거리가 커지면 WIP가 늘고 가로 거리가 길어져 리드 타임도 늘어나므로, 착수를 늘리는 것은 반대 방향의 대응이다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 1,
  "q": "팀이 외부 보안팀의 승인을 기다리느라 사흘째 작업이 막혀 있고 팀 자체로는 해결할 수 없다. 스크럼 마스터 역할의 프로젝트 관리자가 취할 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "일정을 지키기 위해 보안 승인 없이 배포를 진행한다",
   "장애를 보드에 가시화하고 일정·가치 영향을 평가한다",
   "보안팀 담당자와 직접 만나 승인 지연 원인을 확인한다",
   "권한 밖이면 영향 분석과 대안을 갖고 스폰서에게 에스컬레이션한다"
  ],
  "a": 0,
  "e": "장애 제거는 서번트 리더의 핵심 역할이며(ECO III-4) 영향 평가 → 직접 협의 → 필요 시 분석과 함께 에스컬레이션 순서가 정답 패턴이다. 승인 우회는 컴플라이언스 위반이라 어떤 일정 압박에도 허용되지 않는다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "새 팀의 회고에서 팀원들이 거의 발언하지 않고, 실수를 숨기는 경향이 보인다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "비난 없는 회고 규칙과 익명 의견 수렴 같은 안전한 형식으로 심리적 안정감을 조성한다",
   "발언하지 않는 팀원을 지목해 의견을 말하게 한다",
   "실수를 숨긴 팀원을 찾아 책임을 묻는다",
   "회고를 PM이 정리한 개선 목록 공유로 대체한다"
  ],
  "a": 0,
  "e": "APG 2판이 강조하는 심리적 안정감이 없으면 문제가 드러나지 않는다. 안전한 참여 형식을 만드는 것이 서번트 리더의 정답 행동이다. 지목·문책은 두려움을 키우고, 일방 공유는 팀 학습을 없앤다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 1,
  "q": "Stakeholders keep interrupting the team to ask about status. The project manager wants anyone to see current progress at a glance in the team area. What should the project manager set up?",
  "c": [
   "A status gate review",
   "A control account",
   "An issue log",
   "An information radiator"
  ],
  "a": 3,
  "e": "정보 방열기는 칸반 보드·번다운처럼 누구나 볼 수 있게 게시한 시각 자료로 투명성을 높인다. Control account는 EVM 관리 단위, Issue log는 이슈 기록 문서다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 1,
  "q": "스폰서가 스프린트 번다운 차트를 보며 실제 잔여 작업선이 이상선보다 계속 위에 있다며 의미를 묻는다. 프로젝트 관리자의 설명으로 옳은 것은?",
  "c": [
   "계획보다 진척이 빨라 여유가 있다",
   "범위가 줄어들어 작업이 빨리 끝나고 있다",
   "팀의 속도가 지난 스프린트보다 높다",
   "계획보다 진척이 늦어 남은 작업이 예상보다 많다"
  ],
  "a": 3,
  "e": "번다운은 잔여 작업을 보이므로 실제선이 이상선 위에 있으면 잔여가 계획보다 많아 진척이 늦다는 뜻이다. 아래에 있으면 앞선 것이다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 3,
  "q": "서번트 리더십(servant leadership)에 해당하지 않는 행동은?",
  "c": [
   "팀 작업을 막는 장애를 찾아 제거한다",
   "외부의 불필요한 방해로부터 팀을 보호한다",
   "작업을 세부 단위로 할당하고 개인별 진척을 매일 지시·점검한다",
   "팀이 스스로 결정할 수 있도록 코칭하고 촉진한다"
  ],
  "a": 2,
  "e": "서번트 리더는 섬김·장애 제거·보호·코칭으로 팀 역량을 끌어낸다. 세부 할당과 일일 지시·통제는 명령·통제형 관리 방식이다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "스프린트 중반 이후 번다운 차트가 사흘째 수평이다. 스폰서가 이유를 묻는다. 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "남은 스토리를 스프린트에서 빼서 차트를 이상선에 맞춘다",
   "스폰서에게 팀 역량 부족을 보고하고 인력 교체를 요청한다",
   "팀과 함께 차단 요인·스토리 크기·완료 기준 문제 등 정체 원인을 확인한다",
   "팀에게 남은 기간 초과근무로 따라잡도록 지시한다"
  ],
  "a": 2,
  "e": "수평선은 완료가 나오지 않는다는 신호다. 큰 스토리가 끝나지 않았거나 장애가 있을 수 있으므로 먼저 원인을 분석한다. 차트 조작·성급한 인력 교체·초과근무 지시는 분석 없는 대응이다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 3,
  "q": "애자일 지표 활용에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "지표는 정보 방열기로 공개해 투명성을 높인다",
   "속도와 번다운은 팀원 개인의 성과 평가에 활용하는 것이 바람직하다",
   "흐름 지표(리드 타임·처리량)는 예측과 프로세스 개선에 쓴다",
   "지표 추세를 회고에서 개선 실험의 근거로 쓴다"
  ],
  "a": 1,
  "e": "팀 지표를 개인 평가에 쓰면 협업이 줄고 지표가 왜곡된다(지표가 목표가 되면 좋은 지표가 아니게 된다). 나머지는 지표의 올바른 용도다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "프로젝트 팀원이 \"회고에서 매번 같은 개선안을 정하는데 실제로는 아무것도 바뀌지 않는다\"고 불만을 말했다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "회고 빈도를 분기 1회로 줄인다",
   "개선안 목록을 더 길게 만들어 놓친 항목이 없게 한다",
   "개선 항목을 1~2개로 좁혀 담당자를 정하고 다음 스프린트 백로그에 넣어 결과를 다음 회고에서 점검한다",
   "개선 실행 책임을 전부 PM이 맡아 처리한다"
  ],
  "a": 2,
  "e": "회고 개선이 실행되지 않으면 실행 가능한 소수 항목을 백로그에 넣어 가시화하고 추적해야 한다(지속적 개선 루프). 빈도 축소와 목록 확대는 원인을 다루지 않고, PM 전담은 팀 주인의식을 약화시킨다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "하이브리드 프로젝트의 스폰서가 \"매주 진척을 판단할 지표\"를 요청했다. 팀은 이미 30개가 넘는 지표를 자동 수집하고 있다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "스폰서가 내려야 할 결정과 비즈니스 목표를 확인하고, 그에 연결된 소수의 핵심 지표를 함께 선정한다",
   "수집 중인 지표 30여 개를 모두 대시보드에 담아 스폰서에게 제공한다",
   "업계에서 널리 쓰는 표준 KPI 목록을 그대로 채택해 보고한다",
   "애자일 팀의 벨로시티만 주간 지표로 보고해 보고 부담을 줄인다"
  ],
  "a": 0,
  "e": "지표는 의사결정을 위해 존재하므로 스폰서의 결정 요구·목표에 맞춘 소수 지표를 합의하는 것이 먼저다(ECO II-9 지표 개발, I-8 보고 요구 이해). 30개 전부 제공은 정보 과잉이고, 표준 목록 그대로나 벨로시티 단독은 스폰서의 요구를 확인하지 않은 일방적 선택이다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "프로젝트 대시보드의 모든 지표가 2개월째 Green이다. 그런데 팀원들이 비공식 대화에서 통합 테스트 결함이 급증하고 있다고 말한다. 프로젝트 관리자는 먼저 무엇을 해야 하는가?",
  "c": [
   "공식 지표가 Green이므로 현재 보고 체계를 그대로 유지한다",
   "팀과 결함 데이터를 함께 분석해 실제 상태를 확인하고, 지표 정의가 이를 반영하는지 검토한다",
   "즉시 스폰서에게 프로젝트 상태를 Red로 보고한다",
   "팀원들에게 우려 사항은 공식 보고 채널로만 제기하라고 안내한다"
  ],
  "a": 1,
  "e": "지표와 현장 신호가 어긋나는 '수박 보고' 상황이다. 먼저 데이터를 분석해 사실을 확인하고 선행 지표(결함 추세)가 빠졌는지 점검한다. 그대로 유지는 문제 방치, 즉시 Red 보고는 분석 전 단정, 공식 채널 강요는 투명성과 심리적 안전을 해친다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 3,
  "q": "경영진이 각 애자일 팀의 벨로시티 증가율을 분기 성과평가에 반영하기 시작했다. 이후 팀들의 스토리 포인트 추정치가 눈에 띄게 커졌지만 인도되는 기능 수는 그대로다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "벨로시티는 팀 내부 계획용 지표임을 경영진에게 설명하고, 인도 가치·결과 중심 지표로 평가 기준을 재협의한다",
   "추정 감사를 실시해 포인트를 부풀린 팀원을 찾아낸다",
   "전 팀의 포인트 기준을 하나로 표준화해 팀 간 벨로시티를 비교 가능하게 만든다",
   "벨로시티 목표치를 낮춰 팀이 부풀릴 유인을 줄인다"
  ],
  "a": 0,
  "e": "지표가 평가 목표가 되면 왜곡된다는 굿하트의 법칙 사례다. 근본 원인은 지표의 오용이므로 경영진과 결과·가치 지표를 합의하는 것이 최선이다. 감사·비난은 원인을 개인에게 돌리고, 포인트 표준화·목표 조정은 벨로시티를 계속 평가 도구로 쓰는 셈이라 문제를 해결하지 못한다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 1,
  "q": "OKR(Objectives and Key Results)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "Objective는 도달하려는 방향을 정성적으로 표현한다",
   "Key Result는 Objective의 달성 여부를 확인할 수 있게 측정 가능해야 한다",
   "Key Result에는 목표 달성을 위해 수행할 작업 목록을 적는다",
   "OKR은 조직·팀의 노력을 공통 목표에 정렬하는 데 쓰인다"
  ],
  "a": 2,
  "e": "Key Result는 활동이 아니라 측정 가능한 결과다(예: 가입 시간 10분→3분). 작업 목록은 Initiative/활동에 해당한다. 나머지는 OKR의 올바른 설명이다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 1,
  "q": "다음 중 선행 지표(leading indicator)에 해당하는 것은?",
  "c": [
   "프로젝트 종료 후 측정한 최종 고객 만족도",
   "완료된 프로젝트의 투자수익률(ROI)",
   "매주 집계한 미해결 고위험 항목 수의 추세",
   "운영 이관 후 6개월간 발생한 결함 수"
  ],
  "a": 2,
  "e": "선행 지표는 미래 결과를 예측하게 해 주는 지표로, 미해결 고위험 수의 증가는 향후 일정·원가 문제를 예고한다. 나머지 셋은 이미 일어난 결과를 확인하는 후행 지표다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "A project has EV = $400,000, AC = $500,000, and PV = $450,000. Which statement best describes the project status?",
  "c": [
   "The project is under budget and behind schedule",
   "The project is over budget and behind schedule",
   "The project is over budget and ahead of schedule",
   "The project is under budget and ahead of schedule"
  ],
  "a": 1,
  "e": "CPI = 400/500 = 0.8(<1, 원가 초과), SPI = 400/450 ≈ 0.89(<1, 일정 지연)이다. CV(-100,000)와 SV(-50,000)가 모두 음수이므로 원가 초과·일정 지연이 맞다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "예측형 프로젝트의 CPI가 0.85로 떨어졌다. 분석 결과 원인은 착수 시 작성한 원가 추정 자체의 결함으로 확인됐다. 스폰서가 완료 시점의 예상 원가를 묻는다. 프로젝트 관리자는 어떻게 해야 하는가?",
  "c": [
   "현재 CPI가 지속된다고 보고 EAC = BAC ÷ CPI로 산정해 보고한다",
   "편차가 일회성이라고 보고 EAC = AC + (BAC − EV)로 산정해 보고한다",
   "남은 작업을 상향식으로 재추정해 EAC = AC + 상향식 ETC로 산정해 보고한다",
   "원래 BAC를 유지해 보고하고 차이는 관리 예비로 흡수한다"
  ],
  "a": 2,
  "e": "원래 추정에 결함이 있으면 과거 효율(CPI)로 외삽해도 신뢰할 수 없으므로 재추정(AC + 상향식 ETC)이 맞다. BAC÷CPI는 현재 효율이 지속될 때, AC+(BAC−EV)는 일회성 편차일 때 쓴다. BAC 유지·예비비 흡수 보고는 사실을 감추는 것이며 관리 예비 사용에는 승인이 필요하다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "Midway through a hybrid project, the project manager notices that the SPI has stayed at 0.92 for three consecutive reporting periods. What should the project manager do first?",
  "c": [
   "Analyze the root cause of the schedule variance with the team",
   "Fast-track the remaining critical path activities immediately",
   "Escalate the delay to the sponsor and request a new deadline",
   "Rebaseline the schedule to reflect the current performance"
  ],
  "a": 0,
  "e": "지속적인 일정 편차가 보이면 먼저 팀과 근본 원인을 분석해야 한다(먼저 분석). 즉시 공정 압축은 원인 미확인 상태의 조치이고, 스폰서 에스컬레이션은 임계치·대안 검토 전이라 이르며, 재기준선은 변경통제 승인이 필요해 첫 행동이 아니다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 1,
  "q": "효과적인 프로젝트 지표의 특성에 대한 설명으로 가장 적절하지 않은 것은?",
  "c": [
   "지표마다 그것을 사용해 내릴 의사결정이 정해져 있다",
   "수집이 쉬운 데이터를 우선해 가능한 한 많은 항목을 측정한다",
   "측정 가능하고 시의적절하게 갱신된다",
   "한 시점의 값뿐 아니라 추세를 볼 수 있다"
  ],
  "a": 1,
  "e": "지표는 목표·의사결정과 연결된 소수로 운영해야 한다. 수집 편의 위주로 많이 측정하면 정보 과잉·허영 지표를 낳는다. 나머지는 SMART 원칙과 추세 관찰이라는 좋은 지표의 특성이다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 3,
  "q": "월말 보고를 준비하던 프로젝트 관리자가 재무 시스템의 실제 원가와 팀 타임시트로 계산한 실제 원가가 12% 차이 나는 것을 발견했다. 보고 마감은 이틀 뒤다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "공식 시스템인 재무 시스템 값만 보고하고 타임시트 값은 무시한다",
   "두 값의 평균을 실제 원가로 보고한다",
   "차이가 다음 달에 자연히 맞춰질 것으로 보고 이번 달은 그대로 보고한다",
   "두 데이터 원천의 차이 원인(미반영 청구, 기간 불일치 등)을 확인해 조정한 뒤 근거와 함께 보고한다"
  ],
  "a": 3,
  "e": "ECO II-9의 '지표 분석과 조정(reconciliation)'에 해당한다. 원천 간 차이를 밝혀 맞춘 뒤 보고해야 정확한 의사결정이 가능하다. 한쪽 값 선택·평균·방치는 원인을 확인하지 않은 채 부정확한 정보를 보고하는 것이다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "예측형 프로젝트의 TCPI(BAC 기준)가 1.25이고 현재 CPI는 0.88이다. 스폰서가 \"원래 예산 안에 끝낼 수 있느냐\"고 묻는다. 프로젝트 관리자의 답변으로 가장 적절한 것은?",
  "c": [
   "TCPI가 1보다 크므로 예산보다 적게 들 것이라고 보고한다",
   "CPI가 1에 가까우므로 원래 예산 안에 끝낼 수 있다고 보고한다",
   "남은 작업을 지금보다 크게 높은 효율로 해야 하므로 BAC 달성은 비현실적이며, EAC 기반의 대안을 제시한다",
   "TCPI는 일정 지표이므로 원가 질문에는 답할 수 없다고 설명한다"
  ],
  "a": 2,
  "e": "TCPI 1.25는 남은 작업을 원가 효율 1.25로 수행해야 BAC를 지킬 수 있다는 뜻인데 현재 0.88과 차이가 커 현실성이 낮다. 정직하게 예측(EAC)과 대안을 제시하는 것이 맞다. TCPI>1은 더 효율적이어야 한다는 의미이며 원가 지표다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "정보 방열기(information radiator)에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "프로젝트 관리자가 매주 스폰서에게 보내는 상세 상태 보고 이메일",
   "팀 공간에 크게 게시해 지나가는 누구나 프로젝트 상태를 볼 수 있게 한 시각 표시물",
   "거버넌스 위원회에만 공유되는 기밀 진척 보고서",
   "위험의 확률과 영향을 기록하는 위험 등록부의 다른 이름"
  ],
  "a": 1,
  "e": "정보 방열기는 묻지 않아도 정보가 '방사'되도록 크게 공개한 시각물(칸반 보드·번다운 등)이다. 이메일·기밀 보고서는 밀어내거나(push) 감춰 둔 정보이고, 위험 등록부는 로그·등록부 산출물이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "2주 스프린트의 7일째, 번다운 차트의 실제선이 이상선보다 위에 있고 최근 3일간 수평이다. 팀 퍼실리테이터 역할의 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "데일리 협의 회의에서 진행을 막고 있는 장애가 무엇인지 팀과 확인하고 제거를 돕는다",
   "스프린트 목표 달성이 불가능하므로 스프린트를 즉시 취소한다",
   "남은 스토리를 다음 스프린트로 이월한다고 이해관계자에게 미리 공지한다",
   "팀원별 작업 시간 기록을 제출받아 지연 책임자를 파악한다"
  ],
  "a": 0,
  "e": "수평 구간은 완료(DoD)된 스토리가 없다는 신호로 장애나 너무 큰 스토리를 의심한다. 서번트 리더로서 장애를 확인·제거하는 것이 먼저다. 취소는 PO 권한이자 과한 조치, 이월 공지는 분석 전 결론, 개인 시간 추적은 자기조직화를 해친다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "번업 차트(burnup chart)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "누적 완료 작업량 선과 전체 범위 선을 따로 그린다",
   "릴리스 수준의 완료 시점 예측에 활용할 수 있다",
   "범위 변경이 남은 작업량과 섞여 표시되므로 범위 증감을 구분하기 어렵다",
   "완료선과 범위선의 간격이 남은 작업량을 나타낸다"
  ],
  "a": 2,
  "e": "범위 변경이 남은 작업과 섞여 보이지 않는 것은 번다운 차트의 한계다. 번업은 범위선을 따로 그려 범위 변경을 드러내므로 릴리스 예측에 유리하다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "칸반 팀의 누적흐름도(CFD)에서 'Testing' 띠의 폭이 지난 4주 동안 계속 넓어지고 있다. 이 패턴의 해석으로 가장 적절한 것은?",
  "c": [
   "테스트 단계의 처리 속도가 빨라지고 있다",
   "완료된 작업의 처리량이 늘고 있다",
   "테스트 단계에 작업이 쌓이고 있어 병목이 생겼다",
   "제품 백로그에 새 항목이 추가되지 않고 있다"
  ],
  "a": 2,
  "e": "CFD에서 띠의 수직 폭은 해당 단계의 WIP다. 폭이 넓어지면 들어오는 양보다 나가는 양이 적어 작업이 쌓이는 병목이다. 처리량은 완료선의 기울기로 보고, 백로그 유입은 맨 위 띠로 본다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 3,
  "q": "누적흐름도(CFD) 해석으로 옳지 않은 것은?",
  "c": [
   "특정 시점에서 띠들 사이의 수직 거리는 진행 중 작업(WIP)을 나타낸다",
   "도착선과 완료선 사이의 수평 거리는 대략적인 리드타임을 나타낸다",
   "완료(Done) 선의 기울기는 처리량(throughput)을 나타낸다",
   "어떤 상태의 띠가 아래로 내려가면 그만큼 작업이 완료된 것이다"
  ],
  "a": 3,
  "e": "CFD는 누적 그래프라 선이 내려가지 않는다. 내려가면 데이터 오류나 항목 삭제를 의심해야 한다. 수직 거리=WIP, 수평 거리=리드타임, 완료선 기울기=처리량은 올바른 해석이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "프로젝트 관리자는 매주 20쪽 분량의 상태 보고서를 스폰서에게 보낸다. 스폰서는 보고서를 거의 읽지 않고, 그 결과 몇 가지 의사결정이 지연됐다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "중요 내용을 빠짐없이 담도록 보고서 분량을 더 늘린다",
   "어차피 읽지 않으므로 보고서 발송을 중단한다",
   "스폰서의 무관심 때문에 결정이 늦어진다고 PMO에 에스컬레이션한다",
   "스폰서와 만나 필요한 정보와 선호 형식을 확인하고, 핵심 지표·결정 사항 중심으로 보고를 테일러링한다"
  ],
  "a": 3,
  "e": "보고는 이해관계자 요구에 맞춰 테일러링해야 한다(ECO I-8, II-9). 먼저 직접 소통해 요구를 확인하는 것이 PMI 마인드셋이다. 분량 증가·발송 중단은 문제를 키우고, PMO 에스컬레이션은 직접 대화 없이 책임을 돌리는 행동이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "The project S-curve shows the EV line below the PV line and the AC line above the EV line. How should the project manager interpret this?",
  "c": [
   "The project is behind schedule and over budget",
   "The project is ahead of schedule and over budget",
   "The project is behind schedule and under budget",
   "The project is on schedule but over budget"
  ],
  "a": 0,
  "e": "EV < PV이면 SV가 음수로 일정 지연, AC > EV이면 CV가 음수로 원가 초과다. S-커브에서 세 곡선의 상대 위치만으로 판정할 수 있다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "A distributed agile team works across three time zones. Several stakeholders complain that they never know the current status of the work. What is the best approach?",
  "c": [
   "Have the project manager write and email a detailed status report every day",
   "Require all stakeholders to attend the team's daily coordination meeting",
   "Set up a shared online dashboard that is updated automatically from the team's work tracking tool",
   "Provide a comprehensive status report at the monthly steering committee"
  ],
  "a": 2,
  "e": "분산 팀에서는 온라인 대시보드가 가상 정보 방열기 역할을 해 누구나 원할 때 최신 상태를 볼 수 있다. 매일 수작업 이메일은 비효율적이고, 데일리 회의는 팀의 조율 회의라 이해관계자 보고 자리가 아니며, 월간 보고는 너무 늦다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 3,
  "q": "프로젝트의 원가 지표가 이번 주 Red로 바뀌었다. 다음 날 스티어링 위원회 회의가 있다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "회의 분위기를 고려해 회복 계획이 확정될 때까지 상태를 Amber로 표기한다",
   "원가 초과의 근본 원인을 팀과 분석해 회복 대안을 준비한다",
   "편차가 위임된 임계치를 넘었다면 정해진 거버넌스 경로로 보고한다",
   "팀과 이해관계자에게 현재 상태를 투명하게 공유한다"
  ],
  "a": 0,
  "e": "상태를 미화하는 'Green-shifting'은 정직성·투명성 위반으로 가장 부적절하다. 원인 분석과 대안 준비, 임계치 초과 시 에스컬레이션, 투명한 공유는 모두 PMI 마인드셋에 맞는 행동이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "대시보드의 RAG 상태 표기에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "Red·Amber·Green의 신호등 색으로 상태를 표시한다",
   "색 판정 기준(임계치)을 사전에 합의해야 일관되게 쓸 수 있다",
   "Amber는 프로젝트가 이미 중단 결정된 상태를 뜻한다",
   "Red 표시에는 원인과 회복 대안을 함께 제시하는 것이 바람직하다"
  ],
  "a": 2,
  "e": "Amber는 주의·위험 징후(목표 이탈 가능성) 상태이며 중단을 의미하지 않는다. 나머지는 RAG를 올바르게 운영하는 방식이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 3,
  "q": "하이브리드 프로그램에서 경영진은 마일스톤과 원가로 진척을 보고, 애자일 개발팀들은 스토리 포인트와 처리량으로 일을 관리한다. 경영진이 \"전체가 계획대로 가는지 모르겠다\"고 한다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "애자일 팀에도 활동별 타임시트를 받아 EVM으로 일괄 보고한다",
   "팀 수준의 흐름 지표를 릴리스·마일스톤 진척으로 연결하는 통합 보고 구조를 경영진·팀과 합의한다",
   "각 팀이 따로 보고서를 내고 경영진이 직접 종합하게 한다",
   "스토리 포인트를 금액으로 환산해 팀별 생산성을 비교 보고한다"
  ],
  "a": 1,
  "e": "하이브리드는 서로 다른 지표 체계를 연결하는 테일러링이 필요하다. 팀 지표를 마일스톤으로 매핑해 양측이 합의하는 것이 최선이다. 타임시트 강제는 팀 방식을 무시하고, 경영진에게 종합을 떠넘기는 것은 PM 책임 회피이며, 포인트 금액 환산·팀 비교는 지표 오용이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "칸반 팀의 평균 WIP는 24개, 평균 처리량은 주당 8개다. 리틀의 법칙에 따른 평균 사이클타임은?",
  "c": [
   "0.33주",
   "16주",
   "3주",
   "192주"
  ],
  "a": 2,
  "e": "평균 사이클타임 = 평균 WIP ÷ 평균 처리량 = 24 ÷ 8 = 3주다. WIP를 줄이면 처리량이 같아도 사이클타임이 짧아진다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "The total scope line on a release burnup chart has risen sharply over the last two iterations, while the slope of the completed-work line has stayed steady. What should the project manager do?",
  "c": [
   "Review the scope growth with the product owner and update stakeholders on the impact to the release forecast",
   "Ask the team to increase its velocity to absorb the additional scope",
   "Remove the scope line from the chart to avoid confusing stakeholders",
   "Extend the iteration length so that more work fits into each iteration"
  ],
  "a": 0,
  "e": "범위선 상승은 범위 증가로 릴리스 예측이 늦어진다는 신호다. PO와 우선순위·범위를 검토하고 이해관계자에게 영향을 투명하게 알린다. 벨로시티 압박은 지속 가능성을 해치고, 범위선 삭제는 정보 은폐, 반복 길이 연장은 근본 대응이 아니다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "칸반으로 운영하는 유지보수 팀의 리드타임이 최근 두 달 동안 계속 늘어 요청 부서의 불만이 커지고 있다. 프로젝트 관리자는 먼저 무엇을 해야 하는가?",
  "c": [
   "인력을 추가 투입해 처리 용량을 늘린다",
   "CFD와 WIP 데이터를 팀과 검토해 작업이 쌓이는 단계를 찾고 WIP 제한 조정을 논의한다",
   "요청 부서에 앞으로 납기를 더 길게 약속하겠다고 통보한다",
   "처리 효율을 높이려고 여러 요청을 큰 묶음(batch)으로 모아 한 번에 처리한다"
  ],
  "a": 1,
  "e": "리드타임 증가는 대개 WIP 누적·병목 때문이므로 흐름 데이터로 원인을 먼저 찾는다. 인력 추가는 원인 분석 전 조치이고, 납기 연장 통보는 고객 가치를 포기하는 것이며, 큰 배치는 오히려 리드타임을 늘린다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "6명으로 진행하는 3개월짜리 내부 애자일 프로젝트에 PMO가 표준 템플릿 40종을 모두 작성하라고 요구한다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "거버넌스상 필수 산출물과 가치를 주는 산출물을 구분한 테일러링안을 만들어 PMO와 합의한다",
   "PMO 표준이므로 40종을 모두 작성한다",
   "애자일 프로젝트이므로 템플릿 요구를 무시하고 진행한다",
   "스폰서에게 요청해 PMO 요구를 면제받는다"
  ],
  "a": 0,
  "e": "ECO II-9는 필요한 산출물을 식별·테일러링하라고 한다. 거버넌스 요구를 존중하면서 가치 중심으로 줄이는 제안을 PMO와 합의하는 것이 최선이다. 전부 작성은 낭비, 무시는 거버넌스 위반, 스폰서를 통한 우회는 당사자와의 직접 소통을 건너뛴다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "Team members discover that they have been building features from two different versions of the requirements document, causing significant rework. What should the project manager do to prevent this from recurring?",
  "c": [
   "Email the latest version of the document to the whole team again",
   "Print the approved requirements and distribute hard copies to each team member",
   "Prohibit everyone except the business analyst from opening the document",
   "Establish a single controlled repository with version control for project artifacts"
  ],
  "a": 3,
  "e": "버전 혼선은 형상관리 부재가 원인이므로 단일 저장소·버전 통제로 '단일 진실 원천'을 만드는 것이 재발 방지책이다. 이메일 재발송·인쇄본은 또 다른 사본을 만들고, 열람 금지는 접근성을 해친다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 1,
  "q": "다음 중 '기준선(baseline)' 범주에 속하는 산출물은?",
  "c": [
   "이슈 로그",
   "번다운 차트",
   "프로젝트 헌장",
   "성과측정기준선(PMB)"
  ],
  "a": 3,
  "e": "성과측정기준선은 범위·일정·원가 기준선을 통합한 기준선이다. 이슈 로그는 로그·등록부, 번다운 차트는 시각 데이터, 프로젝트 헌장은 전략 산출물에 속한다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 3,
  "q": "외부 협력사 개발자들이 사내 위키 접근 권한이 없어 최신 인터페이스 설계서를 보지 못하고, 그 결과 오래된 버전으로 개발하고 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "최신 설계서를 협력사 개발자들의 개인 이메일로 직접 보낸다",
   "보안 정책 범위 안에서 협력사가 필요한 산출물에 접근할 수 있는 권한·공유 채널을 마련한다",
   "필요한 문서는 협력사가 알아서 요청하도록 안내한다",
   "접근 권한 문제는 프로젝트 종료 후 개선 과제로 넘긴다"
  ],
  "a": 1,
  "e": "ECO II-9 '산출물 접근성 확보'에 해당한다. 필요한 사람이 보안 정책 안에서 최신본을 보게 해야 한다. 개인 이메일 전송은 보안·형상관리 위반이고, 협력사에 떠넘기거나 미루는 것은 현재 발생 중인 재작업을 방치한다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "분기 점검에서 프로젝트 관리자는 매주 공들여 작성하는 위험 보고서를 이해관계자 대부분이 열어 보지도 않는다는 것을 알게 됐다. 다음에 무엇을 해야 하는가?",
  "c": [
   "이해관계자가 읽지 않더라도 기존 형식대로 계속 작성한다",
   "이해관계자에게 위험 정보의 필요와 선호 형식을 확인해 보고서를 개선하거나 다른 형태로 바꾼다",
   "아무도 읽지 않으므로 통보 없이 위험 보고서 작성을 중단한다",
   "보고서에 더 많은 상세 분석을 넣어 가치를 높인다"
  ],
  "a": 1,
  "e": "ECO는 산출물 관리의 효과성을 지속적으로 평가하라고 한다. 쓰이지 않는 산출물은 이해관계자와 확인해 개선·대체한다. 그대로 유지는 낭비, 일방 중단은 위험 소통 누락 위험이 있고, 상세화는 원인을 확인하지 않은 조치다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 1,
  "q": "형상관리(configuration management)의 주된 초점으로 가장 적절한 것은?",
  "c": [
   "변경 요청을 승인할지 거절할지 결정하는 것",
   "팀원의 역할과 책임을 배정하는 것",
   "위험의 확률과 영향을 평가하는 것",
   "제품·산출물의 버전과 기술적 사양을 식별하고 추적해 최신 상태를 유지하는 것"
  ],
  "a": 3,
  "e": "형상관리는 무엇이 최신·승인된 버전인지 식별·추적하는 활동이다. 변경 요청의 승인 결정은 변경통제(CCB 등)의 몫이고, 역할 배정은 RACI, 위험 평가는 위험관리 활동이다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 1,
  "q": "Which of the following project artifacts is categorized as a log or register?",
  "c": [
   "Work breakdown structure",
   "Cumulative flow diagram",
   "Lessons learned register",
   "Business case"
  ],
  "a": 2,
  "e": "교훈 등록부는 로그·등록부 범주다. WBS는 계층 차트, CFD는 시각 데이터·정보, 비즈니스 케이스는 전략 산출물이다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 1,
  "q": "산출물 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "산출물마다 소유자와 갱신 주기를 정해 두는 것이 좋다",
   "애자일 프로젝트는 작동하는 제품을 중시하므로 산출물을 작성·관리하지 않는다",
   "규제 대상 프로젝트에서는 추적성·승인 기록 산출물을 테일러링으로 빼면 안 된다",
   "산출물의 종류와 상세도는 프로젝트 복잡도와 거버넌스 요구에 맞춰 조정한다"
  ],
  "a": 1,
  "e": "애자일 선언은 포괄적 문서보다 작동하는 소프트웨어를 '더' 중시할 뿐 문서를 없애라는 뜻이 아니다. 애자일에서도 백로그·DoD·번다운 등 필요한 산출물을 관리한다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 3,
  "q": "내부 감사를 2주 앞두고 프로젝트 관리자는 지난 6개월간의 주요 설계 결정의 근거와 승인자가 어디에도 기록되어 있지 않다는 것을 알았다. 무엇을 해야 하는가?",
  "c": [
   "감사에서 지적받지 않도록 결정 사항을 문서화하지 않은 사실을 보고하지 않는다",
   "감사 일정을 연기해 달라고 감사팀에 요청한다",
   "감사 지적 사항이 나오면 그때 대응한다",
   "관련자들과 함께 주요 결정의 근거·승인 내역을 결정 로그로 정리하고, 이후 결정은 상시 기록하도록 프로세스를 만든다"
  ],
  "a": 3,
  "e": "결정 기록은 투명성·감사·이관의 기반이 되는 산출물이다. 지금 사실대로 정리하고 재발 방지 프로세스를 세우는 것이 최선이다. 은폐는 윤리 위반이고, 연기 요청·사후 대응은 문제를 해결하지 않는다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 1,
  "q": "인수 기준(acceptance criteria)과 완료 정의(DoD)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "인수 기준은 개별 스토리가 요구를 만족하는지 판단하는 조건이다",
   "DoD는 팀이 합의한 품질 체크리스트로 모든 증분에 적용된다",
   "스토리가 완료로 인정되려면 인수 기준과 DoD를 모두 충족해야 한다",
   "인수 기준은 모든 스토리에 공통으로 적용되고, DoD는 스토리마다 다르게 정한다"
  ],
  "a": 3,
  "e": "적용 범위가 뒤바뀌었다. 인수 기준은 스토리별, DoD는 모든 항목·증분 공통이다. 둘 다 충족해야 완료다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "스프린트 리뷰에서 한 스토리가 인수 기준은 모두 충족했지만 DoD에 있는 코드 리뷰와 회귀 테스트가 끝나지 않았다. 이 스토리는 어떻게 처리해야 하는가?",
  "c": [
   "완료로 인정하지 않고 벨로시티에서 제외하며, 남은 작업을 제품 백로그로 돌려 PO가 우선순위를 정하게 한다",
   "인수 기준을 충족했으므로 완료로 인정하고 벨로시티에 포함한다",
   "진행률만큼 스토리 포인트를 나눠 벨로시티에 부분 반영한다",
   "다음 스프린트에서 끝내기로 하고 이번 스프린트에서 완료로 처리한다"
  ],
  "a": 0,
  "e": "완료는 인수 기준과 DoD를 모두 충족해야 한다. 미완 스토리는 0으로 세고 백로그로 돌려 PO가 다시 우선순위를 정한다. 부분 포인트 반영이나 조건부 완료 처리는 벨로시티를 왜곡하고 기술 부채를 숨긴다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "예측형 프로젝트에서 내부 품질 검사를 통과한 인도물을 고객이 인수 거부했다. 프로젝트 관리자는 먼저 무엇을 해야 하는가?",
  "c": [
   "품질 검사 결과를 근거로 고객에게 인수를 요구한다",
   "합의된 인수 기준과 요구사항에 비춰 고객과 함께 거부 사유를 검토한다",
   "팀에 즉시 재작업을 지시한다",
   "고객의 요구가 바뀐 것이므로 변경 요청을 바로 제출한다"
  ],
  "a": 1,
  "e": "먼저 거부 사유를 인수 기준 대비로 분석해야 결함인지 요구 변경인지 판단할 수 있다. QC 통과는 내부 정확성일 뿐 인수가 아니며, 즉시 재작업·즉시 변경 요청은 원인 확인 전 조치다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 1,
  "q": "In a predictive project, which sequence correctly describes how deliverables move toward formal acceptance?",
  "c": [
   "Validate Scope produces verified deliverables, then Control Quality produces accepted deliverables",
   "Validate Scope and Control Quality are the same process performed by the customer",
   "Accepted deliverables are produced first, then verified by the quality team",
   "Control Quality produces verified deliverables, then Validate Scope produces accepted deliverables"
  ],
  "a": 3,
  "e": "QC가 내부 정확성을 검사해 '검증된 인도물'을 만들고, 범위 확인에서 고객이 공식 인수해 '인수된 인도물'이 된다. 순서가 뒤바뀌거나 두 프로세스를 같은 것으로 보면 틀린다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "새 고객 포털 스토리의 인수 기준이 \"사용자 친화적인 가입 화면\"으로만 적혀 있어 개발자와 PO의 해석이 다르다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "PO·사용자 대표와 함께 측정 가능한 조건(예: 신규 사용자가 3분 안에 가입 완료)으로 인수 기준을 구체화하도록 돕는다",
   "개발자들이 전문가로서 판단해 구현하게 한다",
   "출시 후 사용자 반응을 보고 인수 기준을 정한다",
   "모호한 인수 기준은 삭제하고 DoD만으로 완료를 판단한다"
  ],
  "a": 0,
  "e": "인수 기준은 검증 가능해야 한다. 퍼실리테이터로서 PO·사용자와 측정 가능한 기준을 만들게 돕는다. 개발자 단독 판단은 PO의 가치 결정을 침해하고, 사후 정의·삭제는 완료 판정을 불가능하게 한다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 1,
  "q": "품질 비용(CoQ) 분류의 연결로 옳지 않은 것은?",
  "c": [
   "팀원 대상 표준·도구 교육 — 내부 실패 비용",
   "인도 전 테스트·검사 — 평가 비용",
   "인도 전 발견된 결함의 재작업 — 내부 실패 비용",
   "출시 후 보증 수리·고객 클레임 — 외부 실패 비용"
  ],
  "a": 0,
  "e": "교육은 결함을 미리 막는 예방 비용(적합 비용)이다. 테스트는 평가, 인도 전 재작업은 내부 실패, 출시 후 보증·클레임은 외부 실패 비용이다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "An agile team keeps finding the same type of defect in every iteration, even though defects are fixed before each review. What should the project manager do?",
  "c": [
   "Facilitate a root cause analysis in the retrospective and help the team update its process or Definition of Done",
   "Add a dedicated inspector to check every story before the sprint review",
   "Extend the iteration length so the team has more time for testing",
   "Report the repeated defects to the functional managers of the developers"
  ],
  "a": 0,
  "e": "반복 결함은 검사를 늘리기보다 근본 원인을 찾아 프로세스(QA)·DoD를 개선해야 한다. 검사 인원 추가는 사후 검출 강화일 뿐이고, 반복 연장은 원인과 무관하며, 기능 관리자 보고는 팀을 비난하는 책임 전가다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 3,
  "q": "릴리스 일정이 빠듯해지자 일부 팀원이 \"이번 스프린트만 DoD의 성능 테스트 항목을 빼고 완료 처리하자\"고 제안한다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "일정 준수를 위해 이번 스프린트에 한해 DoD 항목을 생략하고 완료로 처리하도록 승인한다",
   "DoD 생략 시 쌓일 기술 부채와 품질 위험을 팀·PO와 함께 검토한다",
   "PO와 범위를 조정해 DoD를 지키면서 끝낼 수 있는 스토리에 집중하게 한다",
   "성능 테스트 병목이 반복되면 회고에서 자동화 등 개선 방안을 논의한다"
  ],
  "a": 0,
  "e": "DoD를 일정 때문에 생략하면 미완 작업을 완료로 위장해 기술 부채와 품질 위험을 숨긴다. 위험 검토, 범위 조정, 회고를 통한 개선은 품질을 지키며 일정 압박에 대응하는 적절한 행동이다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 1,
  "q": "준비 정의(DoR, Definition of Ready)의 목적으로 가장 적절한 것은?",
  "c": [
   "증분이 출시 가능한 품질로 완료됐는지 판단한다",
   "백로그 항목이 반복에 들어가 작업을 시작할 만큼 충분히 명확한지 판단한다",
   "고객이 인도물을 공식 인수했는지 확인한다",
   "프로젝트 종료 조건이 충족됐는지 판단한다"
  ],
  "a": 1,
  "e": "DoR은 착수 조건, DoD는 완료 조건이다. 고객의 공식 인수는 범위 확인, 종료 조건 판단은 종료 기준의 몫이다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "프로젝트 중반에 팀원이 문제 해결 과정에서 얻은 교훈을 공유하려 하자 프로젝트 관리자가 \"교훈은 종료 단계에서 한꺼번에 정리하자\"고 했다. 교훈 관리에 대한 판단으로 가장 적절한 것은?",
  "c": [
   "교훈은 종료 단계에서 한 번에 정리하는 것이 효율적이므로 적절하다",
   "교훈은 진행 내내 교훈 등록부에 기록해 활용하고, 종료 시 조직의 교훈 저장소로 이관해야 한다",
   "교훈은 실패한 프로젝트에서만 정리하면 된다",
   "교훈은 프로젝트 관리자만 기록하고 팀원은 관여하지 않는다"
  ],
  "a": 1,
  "e": "교훈은 기억이 생생할 때 상시 기록해 현재 프로젝트에서도 활용하고, 종료 때 OPA로 이관한다. 종료 시점 일괄 정리는 기억 손실이 크고, 성공 사례도 교훈이며, 팀 전체가 참여해야 한다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "기능 관리자가 참석하기 시작한 뒤로 회고에서 팀원들이 거의 발언하지 않는다. 팀 퍼실리테이터 역할의 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "기능 관리자가 직접 회고를 진행해 발언을 독려하게 한다",
   "효과가 없으므로 회고를 당분간 생략한다",
   "팀과 회고의 참석 범위를 다시 합의하고, 익명 의견 수집 등으로 심리적 안전을 확보한다",
   "모든 팀원이 순서대로 반드시 한 가지씩 문제를 말하도록 규칙을 정한다"
  ],
  "a": 2,
  "e": "회고는 팀이 안전하게 개선점을 말하는 자리라 심리적 안전이 전제다. 참석 범위를 팀과 합의하고 익명 기법을 쓴다. 관리자 진행은 위축을 키우고, 생략은 개선 기회를 없애며, 강제 발언은 형식적 답변만 낳는다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "핵심 아키텍트가 3주 후 퇴사한다. 그는 시스템 장애 대응 노하우를 거의 혼자 갖고 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "퇴사 전까지 모든 노하우를 상세 문서로 작성해 제출하게 한다",
   "이전해야 할 핵심 지식을 식별하고, 후임자와의 페어링·쉐도잉 세션과 핵심 내용 문서화를 병행하도록 계획한다",
   "퇴사 시기를 늦추도록 설득하는 데 집중한다",
   "퇴사 후 외부 컨설턴트를 고용해 공백을 메운다"
  ],
  "a": 1,
  "e": "장애 대응 감각 같은 암묵지는 문서만으로 전달되기 어렵다. ECO I-7에 따라 핵심 지식을 식별하고 사람 간 이전(페어링·쉐도잉)과 문서화를 함께 한다. 문서만 요구는 불충분하고, 퇴사 연기 설득·사후 컨설턴트는 지식 이전 책임을 해결하지 않는다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 1,
  "q": "암묵지(tacit knowledge)와 형식지(explicit knowledge)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "형식지는 글·그림·숫자로 표현해 공유할 수 있다",
   "암묵지는 경험·직관·노하우처럼 말로 옮기기 어렵다",
   "암묵지는 매뉴얼과 저장소를 통해 가장 효과적으로 이전된다",
   "암묵지 이전에는 멘토링·스토리텔링·실천 공동체가 효과적이다"
  ],
  "a": 2,
  "e": "매뉴얼·저장소는 형식지 이전 수단이다. 암묵지는 함께 일하며 관찰하는 페어링·멘토링·스토리텔링 등 사람 간 상호작용으로 이전된다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 1,
  "q": "노나카·다케우치의 SECI 모델에서 경험으로 가진 노하우를 문서·모델로 표현해 형식지로 바꾸는 단계는?",
  "c": [
   "표출화(Externalization)",
   "공동화(Socialization)",
   "연결화(Combination)",
   "내면화(Internalization)"
  ],
  "a": 0,
  "e": "표출화는 암묵지→형식지 변환이다. 공동화는 암묵→암묵, 연결화는 형식→형식, 내면화는 형식→암묵이다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 1,
  "q": "A project manager is starting a new project that is similar to several projects the organization completed in the past. What should the project manager do first to avoid repeating past problems?",
  "c": [
   "Interview the team members after the first iteration to collect lessons learned",
   "Create a new risk register without reference to previous projects",
   "Review the organization's lessons learned repository from the similar projects",
   "Wait for the closing phase to compare results with past projects"
  ],
  "a": 2,
  "e": "교훈 저장소는 조직 프로세스 자산(OPA)으로, 착수 시 먼저 검토해 과거 문제를 예방한다. 첫 반복 후 수집은 늦고, 과거를 참조하지 않은 위험 등록부는 기회를 버리며, 종료 시 비교는 예방이 아니다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 3,
  "q": "조직의 교훈 저장소에 수백 건의 교훈이 쌓여 있지만 새 프로젝트들이 같은 실수를 반복하고 있다. PMO 소속 프로젝트 관리자가 할 일로 가장 적절한 것은?",
  "c": [
   "교훈을 검색하기 쉽게 분류·태깅하고, 착수 체크리스트와 표준 프로세스에 반영해 실제로 쓰이게 한다",
   "프로젝트마다 더 많은 교훈을 기록하도록 의무 건수를 늘린다",
   "교훈 저장소를 폐기하고 프로젝트마다 새로 작성하게 한다",
   "같은 실수를 반복한 프로젝트 관리자 명단을 공개한다"
  ],
  "a": 0,
  "e": "교훈은 활용될 때 가치가 있다. ECO III-6은 교훈 활용과 OPA·지속개선 프로세스 갱신을 요구한다. 기록 건수 증가는 활용 문제를 해결하지 못하고, 폐기는 자산 손실, 명단 공개는 비난 문화를 만든다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "회고(retrospective) 진행 중 팀이 지난 반복의 배포 실패를 논의하고 있다. 프로젝트 관리자의 진행 방식으로 가장 적절하지 않은 것은?",
  "c": [
   "실패의 원인을 시스템·프로세스 관점에서 함께 분석한다",
   "다음 반복에서 실행할 소수의 개선 항목과 담당자를 정한다",
   "배포 실패를 일으킨 팀원을 특정해 회고 기록에 남긴다",
   "모두 당시 알던 범위에서 최선을 다했다는 전제로 논의를 시작한다"
  ],
  "a": 2,
  "e": "회고는 비난 없는(blameless) 진행이 원칙이다. 개인을 지목하면 심리적 안전이 무너져 정보가 숨겨진다. 프로세스 관점 분석, 실행 항목 결정, Prime Directive는 올바른 회고 방식이다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 1,
  "q": "애자일 회고에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "회고는 팀이 스스로 일하는 방식을 점검하고 개선하는 활동이다",
   "회고 결과는 다음 반복에서 실행할 구체적 개선 항목으로 정리한다",
   "회고는 프로젝트가 끝날 때 한 번만 수행한다",
   "릴리스나 프로젝트 종료 시점에는 더 넓은 범위의 회고를 할 수 있다"
  ],
  "a": 2,
  "e": "회고는 매 반복 종료 시 정기적으로 한다. 종료 시점의 최종 회고는 추가로 하는 것이지 유일한 회고가 아니다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "모든 인도물이 완료되어 인수 기준을 충족했다. 그러나 고객은 최종 승인 서명을 미루며 계약에 없는 보고서 기능 두 개를 추가로 요구하고 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "합의된 인수 기준 대비 완료 사실을 고객과 확인해 공식 인수를 요청하고, 추가 기능은 변경 요청이나 후속 작업으로 분리해 논의한다",
   "관계 유지를 위해 추가 기능을 무상으로 구현한 뒤 서명을 받는다",
   "서명 없이 프로젝트 종료를 선언하고 팀을 해산한다",
   "고객이 서명할 때까지 모든 종료 활동을 무기한 보류한다"
  ],
  "a": 0,
  "e": "완료 승인은 합의된 기준에 근거해야 하며(ECO II-10), 추가 요구는 변경통제나 후속 프로젝트로 다룬다. 무상 구현은 금도금(gold plating)·범위 추가이고, 서명 없는 종료는 공식 인수 없이 끝내는 것이며, 무기한 보류는 문제를 해결하지 못한다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "시스템을 운영팀에 이관하려 하자 운영팀이 \"교육도 못 받았고 운영 매뉴얼도 없다\"며 인수를 거부했다. 프로젝트 관리자는 먼저 무엇을 해야 하는가?",
  "c": [
   "계약상 인도 의무는 끝났으므로 이관 완료로 처리한다",
   "스폰서에게 운영팀이 협조하지 않는다고 에스컬레이션한다",
   "프로젝트 팀이 운영 업무를 계속 맡겠다고 약속한다",
   "운영팀과 이관 준비 기준을 확인해 부족한 항목을 파악하고, 교육·매뉴얼 보완 계획을 함께 세운다"
  ],
  "a": 3,
  "e": "ECO II-10은 이관 준비도를 검증하라고 한다. 먼저 운영팀과 기준 대비 부족 항목을 확인해 보완하는 것이 맞다. 일방 이관은 편익 실현을 위협하고, 즉시 에스컬레이션은 직접 협의 전이며, 무기한 운영 대행은 종료를 막는 임시방편이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "전사 전략이 바뀌어 스폰서가 진행 중인 프로젝트의 중단을 결정했다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "중단이 결정됐으므로 오늘 바로 팀을 해산한다",
   "이미 진행한 작업이 아까우므로 남은 작업을 끝낸 뒤 종료한다",
   "중단 결정을 재고해 달라고 스폰서에게 거듭 요청한다",
   "완료·미완 작업 상태를 문서화하고 교훈 정리, 조달·재무 정산, 자원 해산 등 종료 절차를 수행한다"
  ],
  "a": 3,
  "e": "조기 종료도 공식 종료 절차를 거쳐야 이후 재개·감사·교훈 활용이 가능하다. 즉시 해산은 기록·정산을 누락시키고, 남은 작업 완료는 매몰비용 오류이자 결정 무시이며, 반복 재고 요청은 정당한 거버넌스 결정을 따르지 않는 것이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 1,
  "q": "다음 프로젝트 종료 활동 중 일반적으로 가장 나중에 수행하는 것은?",
  "c": [
   "인도물의 최종 인수 확보",
   "조달 계약 종결",
   "프로젝트 팀원 해산",
   "최종 교훈 정리"
  ],
  "a": 2,
  "e": "교훈 정리·문서 보관에 팀이 필요하므로 팀 해산은 보통 마지막이다. 최종 인수 확보는 종료의 출발점이고, 조달 종결과 최종 교훈 정리는 해산 전에 마친다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 3,
  "q": "All deliverables under a fixed-price contract have been accepted, but the seller has submitted a claim for additional costs that is still unresolved. What should the project manager do?",
  "c": [
   "File a lawsuit against the seller to settle the claim quickly",
   "Close the contract and ignore the claim because the deliverables were accepted",
   "Withhold final payment indefinitely until the seller withdraws the claim",
   "Attempt to resolve the claim through negotiation before closing the contract"
  ],
  "a": 3,
  "e": "클레임은 계약 종결 전에 해결하는 것이 원칙이며 협상이 먼저, 안 되면 계약에 정한 ADR(조정·중재), 소송은 최후다. 클레임 무시 종결과 무기한 지불 보류는 계약상 의무를 저버리는 행동이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 3,
  "q": "편익 실현과 프로젝트 종료에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "많은 편익은 프로젝트 종료 후 운영 과정에서 실현된다",
   "종료 시 편익 측정 책임을 운영 조직이나 편익 소유자에게 넘긴다",
   "최종 보고서에는 편익 실현 계획과 현재까지의 현황을 담을 수 있다",
   "프로젝트의 편익은 종료 시점에 모두 측정·확정되므로 종료 후에는 추적하지 않는다"
  ],
  "a": 3,
  "e": "편익은 대개 운영 단계에서 실현되므로 종료 후에도 편익 소유자가 측정한다. ECO II-3도 편익을 추적할 측정 체계를 요구한다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "The customer has formally accepted the final product, and the product has been transitioned to operations. What should the project manager do next?",
  "c": [
   "Release all team members before preparing any closing documentation",
   "Start a new iteration to add features requested during acceptance",
   "Finalize lessons learned, update organizational process assets, and archive project records",
   "Personally measure the product's benefits for the next two years"
  ],
  "a": 2,
  "e": "인수·이관 이후에는 최종 교훈 정리·OPA 갱신·기록 보관 등 행정적 종료를 마무리한다. 문서 정리 전 팀 해산은 순서 오류이고, 추가 기능은 변경·후속 작업이며, 장기 편익 측정은 편익 소유자의 몫이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "애자일 방식으로 개발한 제품의 마지막 릴리스가 끝나 프로젝트를 종료하려 한다. 제품 백로그에는 우선순위가 낮은 항목 15개가 남아 있다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "남은 15개 항목을 모두 완료할 때까지 프로젝트를 연장한다",
   "최종 회고와 운영 이관을 진행하고, 남은 백로그 항목의 처리는 PO가 이해관계자와 결정하게 한다",
   "남은 항목은 의미가 없으므로 기록 없이 삭제한다",
   "팀이 남은 항목 중 하고 싶은 것을 골라 추가 릴리스를 한다"
  ],
  "a": 1,
  "e": "남은 백로그의 가치 판단은 PO의 권한이다(후속 프로젝트·운영 백로그 이관·폐기 등). 종료 시에는 최종 회고와 이관을 수행한다. 무조건 연장은 가치 판단 없는 범위 확대, 기록 없는 삭제는 정보 손실, 팀 임의 선택은 PO 역할 침해다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 3,
  "q": "단계 게이트(phase gate) 검토를 앞두고 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "현 단계 인도물이 종료 기준을 충족했는지 근거와 함께 정리한다",
   "다음 단계 착수 승인을 받기 위해 아직 해결되지 않은 고위험 항목을 보고서에서 제외한다",
   "다음 단계로 넘어갈 이관 준비 상태와 미해결 이슈를 보고한다",
   "단계 중 얻은 교훈을 정리해 다음 단계 계획에 반영한다"
  ],
  "a": 1,
  "e": "단계 게이트는 계속·수정·중단을 결정하는 자리이므로 위험 정보를 숨기면 잘못된 결정을 유도하는 윤리 위반이다. 나머지는 단계 종료의 올바른 활동이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 1,
  "q": "프로젝트 착수 단계에서 종료와 관련해 프로젝트 관리자가 해야 할 일로 가장 적절한 것은?",
  "c": [
   "종료 기준은 종료 단계에 가서 고객과 협상해 정한다",
   "프로젝트·단계를 성공적으로 종료할 기준을 핵심 이해관계자와 정의하고 합의한다",
   "종료 기준은 프로젝트 관리자가 단독으로 정해 통보한다",
   "애자일 요소가 있으면 종료 기준을 정하지 않는다"
  ],
  "a": 1,
  "e": "ECO II-10 '종료 기준 결정'은 미리 합의해 두어야 끝에서 분쟁이 없다. 사후 협상·단독 결정은 이해관계자 정렬에 실패하고, 애자일에서도 릴리스·제품 목표 같은 완료 기준이 필요하다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 1,
  "q": "프로젝트 최종 보고서에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "범위·품질·일정·원가 목표의 달성 정도를 요약한다",
   "편익 실현 계획과 현재까지의 실현 현황을 담는다",
   "프로젝트 중 발생한 주요 위험·이슈와 대응 결과를 요약한다",
   "이해관계자와의 관계를 고려해 목표 미달 사항은 생략한다"
  ],
  "a": 3,
  "e": "최종 보고서는 성과를 정직하게 기록하는 문서로, 불리한 정보도 빼지 않아야 조직이 배울 수 있다. 나머지는 최종 보고서의 일반적 내용이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "프로젝트 종료를 앞두고 팀원 대부분이 다른 프로젝트로 재배치될 예정이다. 프로젝트 관리자가 팀 해산과 관련해 할 일로 가장 적절한 것은?",
  "c": [
   "재배치 일정에 맞춰 교훈 정리 전에 팀원을 먼저 보낸다",
   "팀원 성과 평가는 기능 관리자의 일이므로 관여하지 않는다",
   "남은 예산을 소진하기 위해 팀원들의 재배치를 늦춘다",
   "최종 교훈 정리에 팀을 참여시킨 뒤 팀원별 성과 피드백을 기능 관리자에게 전달하고 성과를 함께 축하한다"
  ],
  "a": 3,
  "e": "자원 해산은 교훈 정리 뒤에 하고, 성과 인정·피드백은 팀 리더로서의 책임이다. 교훈 정리 전 해산은 지식을 잃고, 평가 무관여는 팀 대변 책임 회피이며, 예산 소진 목적의 지연은 재무 정직성에 어긋난다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "운영 조직으로 시스템을 넘기기 전 프로젝트 관리자가 이관 준비도를 점검하려 한다. 점검 항목으로 가장 적절하지 않은 것은?",
  "c": [
   "운영팀 교육 완료 여부와 운영 매뉴얼(런북) 준비 상태",
   "장애 대응·헬프데스크 등 지원 절차와 보증 조건",
   "종료 후 편익을 측정할 책임자 지정 여부",
   "프로젝트 팀원들의 다음 프로젝트 배정 일정"
  ],
  "a": 3,
  "e": "이관 준비도는 받는 쪽(운영 조직)이 인수·운영할 역량을 갖췄는지를 본다. 팀원 재배치 일정은 자원 해산 계획의 일부이지 이관 준비도 점검 항목이 아니다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "애자일 팀의 지표를 운영하는 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "벨로시티 추세를 근거로 릴리스에 담을 수 있는 범위를 예측한다",
   "벨로시티를 팀원 개인별로 나눠 집계해 개인 성과를 비교한다",
   "처리량과 사이클타임을 함께 관찰해 흐름 문제를 찾는다",
   "회고에서 팀과 지표의 유용성을 함께 검토한다"
  ],
  "a": 1,
  "e": "벨로시티는 팀 단위 계획 지표이므로 개인별 비교에 쓰면 협업을 해치고 지표가 왜곡된다. 나머지는 지표를 계획·개선에 쓰는 올바른 방식이다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "새 팀원이 많이 합류한 프로젝트에서 프로젝트 관리자가 지식 이전 환경을 만들려 한다. 가장 적절하지 않은 것은?",
  "c": [
   "지식 공유 활동은 업무 부담을 고려해 업무 시간 외에 자율적으로 하도록 한다",
   "페어 작업과 쉐도잉 시간을 반복 계획에 반영한다",
   "사내 실천 공동체(CoP) 참여를 지원한다",
   "질문해도 불이익이 없다는 분위기를 만든다"
  ],
  "a": 0,
  "e": "ECO I-7은 지식 이전 '환경 조성'을 요구한다. 지식 공유를 업무 외 활동으로 미루면 시간이 확보되지 않아 이전이 일어나지 않는다. 나머지는 시간 확보·공동체·심리적 안전을 통한 올바른 조성 방법이다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 1,
  "q": "프로젝트 거버넌스 프레임워크에서 정의하는 요소로 가장 거리가 먼 것은?",
  "c": [
   "의사결정 권한과 에스컬레이션 경로",
   "보고 체계와 프로젝트 성공 지표",
   "단계 게이트(phase gate) 검토 기준",
   "팀원 개인별 일일 작업 처리 순서"
  ],
  "a": 3,
  "e": "거버넌스는 구조·규칙·절차·보고·에스컬레이션·성공 지표 같은 '지휘·통제 틀'을 정한다(ECO III-1). 팀원의 일일 작업 순서는 자기조직화 팀이나 일정 관리의 영역이지 거버넌스 프레임워크 항목이 아니다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "A project's governance plan states that cost variances above 10% must be reviewed by the steering committee. The project manager forecasts a 12% overrun. What should the project manager do?",
  "c": [
   "Absorb the overrun quietly by using the contingency reserve",
   "Analyze the cause and options, then escalate through the defined path",
   "Hold the report until the next scheduled phase gate review",
   "Direct the team to work overtime until the variance is recovered"
  ],
  "a": 1,
  "e": "편차가 거버넌스에 정의된 임계치(10%)를 넘었으므로 정의된 에스컬레이션 경로로 올려야 하며, 이때 원인 분석과 대안을 함께 가져간다. 예비비로 몰래 흡수하거나 보고를 다음 게이트까지 미루는 것은 투명성 위반이고, 초과 근무 지시는 분석 없는 성급한 조치다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 1,
  "q": "다음 중 조직 프로세스 자산(OPA)에 해당하지 않는 것은?",
  "c": [
   "조직의 변경 승인 절차",
   "표준 보고서 템플릿",
   "과거 프로젝트의 교훈 저장소",
   "조직 문화와 위계 구조"
  ],
  "a": 3,
  "e": "조직 문화·구조는 PM이 통제할 수 없는 내부 기업 환경 요인(EEF)이다. 교훈 저장소·템플릿·절차는 프로젝트가 활용하고 갱신하는 OPA다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "다른 회사에서 이직한 프로젝트 관리자가 새 조직의 첫 프로젝트를 맡았다. 보고·승인 절차가 어떻게 운영되는지 아직 모른다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "PMO와 스폰서에게 기존 거버넌스 구조와 결정 권한을 확인한다",
   "조직의 정책·템플릿·절차 등 OPA를 먼저 검토한다",
   "확인한 OPA를 프로젝트 특성에 맞게 테일러링해 적용한다",
   "이전 회사에서 효과가 좋았던 보고·승인 절차를 그대로 들여온다"
  ],
  "a": 3,
  "e": "ECO III-1은 OPA를 활용해 거버넌스를 정의·수립하라고 한다. 새 조직의 기존 구조와 OPA를 무시하고 이전 회사의 방식을 그대로 들여오는 것은 조직 정렬을 해친다. 나머지는 확인→검토→테일러링의 올바른 흐름이다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 1,
  "q": "A project manager joins a company whose PMO provides templates, training, and lessons learned on request, but does not require projects to follow any methodology. Which PMO type is this?",
  "c": [
   "Directive PMO",
   "Projectized PMO",
   "Supportive PMO",
   "Controlling PMO"
  ],
  "a": 2,
  "e": "요청 시 지원만 하고 준수를 강제하지 않으므로 통제 수준이 낮은 Supportive PMO다. Controlling은 방법론 준수를 요구(중간 통제), Directive는 프로젝트를 직접 관리(높은 통제)한다. 'Projectized'는 조직 구조 유형이지 PMO 유형이 아니다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 3,
  "q": "하이브리드 프로젝트에서 애자일 팀이 2주 반복으로 인도하고 있다. 그런데 조직 거버넌스는 단계마다 두꺼운 설계 문서를 단계 게이트 승인 조건으로 요구해 팀의 불만이 크다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "팀의 불만을 스폰서에게 그대로 전달하고 결정을 전적으로 맡긴다",
   "팀에게 모든 반복마다 예측형 수준의 설계 문서를 작성하게 한다",
   "거버넌스 기구와 협의해 증분 데모를 게이트 증거로 인정받도록 제안한다",
   "애자일 팀이므로 단계 게이트를 생략하고 반복 리뷰만으로 대신한다"
  ],
  "a": 2,
  "e": "거버넌스는 우회 대상이 아니라 테일러링 대상이다. PM이 거버넌스 기구와 협의해 애자일 증거(데모·증분)로 통제 목적을 충족하도록 제안하는 것이 최선이다. 게이트 생략은 거버넌스 위반, 문서 강요는 팀 가치 훼손, 스폰서에게 넘기기는 PM 역할 회피다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "착수 회의에서 스폰서가 프로젝트 관리자에게 '이 프로젝트가 성공했는지 무엇으로 판단할지 성공 지표를 제안하라'고 했다. ECO 2026 관점에서 가장 적절한 제안은?",
  "c": [
   "기한 내 인도한 산출물의 개수로 판단한다",
   "일정·예산과 함께 편익·고객 가치 지표를 포함한다",
   "팀원의 투입 시간 대비 가동률로 판단한다",
   "일정 준수율과 예산 준수율 두 가지로만 판단한다"
  ],
  "a": 1,
  "e": "ECO 2026은 프로젝트 성공을 일정·예산·범위 중심에서 이해관계자 가치·원하는 성과 달성으로 넓혔다. 일정·예산만, 산출물 개수, 가동률은 결과(Outcome)나 가치를 보여주지 못한다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "에스컬레이션(escalation)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "PM 권한 안의 문제도 신속성을 위해 모두 스폰서에게 올린다",
   "임계치를 넘는 편차나 권한 밖 결정이 에스컬레이션 대상이다",
   "에스컬레이션 경로와 임계치는 거버넌스 수립 시 미리 합의한다",
   "에스컬레이션할 때는 영향 분석과 대안을 함께 제시한다"
  ],
  "a": 0,
  "e": "PM 권한·임계치 안의 문제는 PM이 팀과 해결한다. 모든 문제를 스폰서에게 올리는 것은 책임 회피이자 거버넌스 비효율이다. 나머지 설명은 ECO III-1 'escalation paths and thresholds'에 부합한다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 1,
  "q": "프로젝트 관리자는 팀원 배정을 바꾸려면 매번 기능 부서장의 승인을 받아야 하고, 예산도 기능 부서장이 통제한다. 프로젝트 관리자의 권한이 가장 약한 이 조직 구조는?",
  "c": [
   "강 매트릭스(Strong matrix)",
   "기능 조직(Functional)",
   "균형 매트릭스(Balanced matrix)",
   "프로젝트 조직(Projectized)"
  ],
  "a": 1,
  "e": "PM 권한은 기능 < 약 매트릭스 < 균형 매트릭스 < 강 매트릭스 < 프로젝트 조직 순으로 커진다. 기능 부서장이 자원·예산을 모두 통제하는 것은 기능 조직의 특징이다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "건설 프로젝트 실행 중 프로젝트 관리자가 핵심 공급사의 장비가 법규상 필수인 안전 인증을 받지 않았다는 사실을 알게 되었다. 일정이 매우 촉박하다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "영향을 분석해 장비 사용을 보류하고 담당자·공급사와 시정을 협의한다",
   "문제가 알려지지 않게 팀에 함구를 요청하고 대체 장비를 찾는다",
   "일정을 지키기 위해 장비를 먼저 쓰고 인증은 사후에 받게 한다",
   "공급사의 계약상 책임이므로 프로젝트 차원의 조치는 하지 않는다"
  ],
  "a": 0,
  "e": "보건·안전 규제 준수는 타협 불가이며, ECO III-2는 미준수 결과를 분석하고 필요한 조치를 결정하라고 한다. 사후 인증은 위반 상태로 작업하는 것이고, 책임 전가나 은폐는 윤리 강령(정직·책임)에 어긋난다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 1,
  "q": "ECO 2026 컴플라이언스 Task(III-2)가 예시한 요구사항 범주가 아닌 것은?",
  "c": [
   "지속가능성(sustainability)",
   "보안(security)",
   "보건·안전(health and safety)",
   "팀원의 선호 업무 스타일"
  ],
  "a": 3,
  "e": "ECO III-2는 보안·보건안전·지속가능성·규제(regulatory) 요구사항을 확인하라고 예시한다. 팀원의 업무 스타일 선호는 팀 리딩(People) 영역이지 컴플라이언스 범주가 아니다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "팀원이 요구사항 정리 속도를 높이려고 고객 개인정보가 포함된 인터뷰 기록을 공개 생성형 AI 서비스에 붙여 넣어 요약하고 있다는 사실이 확인되었다. 프로젝트 관리자는 먼저 무엇을 해야 하는가?",
  "c": [
   "해당 팀원을 즉시 프로젝트에서 빼 달라고 부서장에게 요청한다",
   "생산성이 높아졌으므로 다른 팀원에게도 같은 방법을 권장한다",
   "사용을 중지시키고 조직의 데이터·AI 정책에 따라 영향을 평가한다",
   "결과물 품질만 검토하고 사용 방식은 팀원 재량에 맡긴다"
  ],
  "a": 2,
  "e": "기밀·개인정보를 공개 AI에 입력하는 것은 데이터 보호 컴플라이언스 위반 소지가 있으므로 즉시 중지하고 정책에 따라 영향 평가·보고하며 팀 지침을 공유한다. 권장하거나 방치하는 것은 위반 확산이고, 즉시 제외 요청은 분석·코칭 없는 과잉 대응이다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "During execution, the project manager learns that a new environmental regulation taking effect in six months will restrict a packaging material the project plans to use. What should the project manager do first?",
  "c": [
   "Continue as planned until the regulation is enforced",
   "Assess the regulation's impact on scope, schedule, and cost",
   "Ask the sponsor for extra budget to buy new materials",
   "Submit a change request to replace all materials immediately"
  ],
  "a": 1,
  "e": "PMI 마인드셋의 '먼저 분석' 원칙이다. 영향 평가 후 필요하면 변경 요청을 제출한다. 분석 없는 즉시 변경 요청·예산 요청은 성급하고, 시행일까지 기다리는 것은 ECO III-8의 선제적 외부 환경 검토에 어긋난다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 1,
  "q": "스폰서가 신규 공장 건설 프로젝트의 지속가능성 성과를 사회·환경·경제 세 측면에서 함께 보고하라고 요청했다. 이 관점을 나타내는 틀의 구성으로 옳은 것은?",
  "c": [
   "가치(Value)·편익(Benefit)·성과(Outcome)",
   "범위(Scope)·일정(Schedule)·원가(Cost)",
   "사람(People)·지구(Planet)·이익(Profit)",
   "품질(Quality)·위험(Risk)·자원(Resource)"
  ],
  "a": 2,
  "e": "사회·환경·경제를 함께 보는 지속가능성 틀은 3중 결산(Triple Bottom Line)이다. 범위·일정·원가는 전통적 삼중 제약이며 나머지 보기는 관리 영역·가치 용어다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 3,
  "q": "프로젝트에서 AI 도구를 활용할 때의 거버넌스 고려사항으로 옳지 않은 것은?",
  "c": [
   "AI 산출물은 사람이 검토·검증한 뒤 의사결정에 사용한다",
   "AI가 산출한 추정치는 객관적이므로 검증 없이 기준선으로 확정한다",
   "기밀·개인정보의 입력 여부를 조직 정책에 따라 통제한다",
   "AI 결과의 편향 가능성과 판단 근거의 투명성을 점검한다"
  ],
  "a": 1,
  "e": "AI 산출물은 오류·편향 가능성이 있어 사람의 감독(human oversight)이 필요하고, 기준선 확정은 검증과 승인을 거친다. 나머지는 데이터 보호·검증·투명성이라는 AI 거버넌스의 핵심 고려사항이다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 3,
  "q": "출시일을 맞추기 어려워지자 스폰서가 프로젝트 관리자에게 '이번에는 의무 보안 감사를 건너뛰고 출시 후에 하자'고 지시했다. 프로젝트 관리자는 어떻게 해야 하는가?",
  "c": [
   "윤리적 갈등이므로 즉시 프로젝트 관리자 직에서 사임한다",
   "미준수 결과를 설명하고 감사를 유지하는 일정 대안을 함께 검토한다",
   "스폰서 몰래 감사를 진행하고 그로 인한 일정 지연은 숨긴다",
   "스폰서의 권한이므로 지시대로 감사를 생략하고 기록만 남긴다"
  ],
  "a": 1,
  "e": "규제·보안 컴플라이언스는 타협 불가이지만 PM은 대립만 하지 않고 미준수 결과(제재·평판·재작업)를 설명한 뒤 준수 가능한 대안을 함께 찾는다(ECO III-2 'Analyze the consequences of noncompliance'). 지시 이행은 위반, 몰래 진행·은폐는 투명성 위반, 즉시 사임은 과잉 대응이다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "애자일 팀이 웹 접근성 법규를 지켜야 하는 서비스를 개발한다. 컴플라이언스를 보장하기 위한 프로젝트 관리자의 접근으로 가장 적절하지 않은 것은?",
  "c": [
   "접근성 검증은 마지막 릴리스 직전 스프린트에 몰아서 한다",
   "완료 정의(DoD)에 접근성 준수 기준을 포함한다",
   "컴플라이언스 담당자와 준수 측정 방법을 미리 합의한다",
   "스프린트 리뷰에서 접근성 준수 여부를 함께 확인한다"
  ],
  "a": 0,
  "e": "애자일에서는 컴플라이언스 기준을 DoD에 넣어 매 증분마다 검증해야 마지막에 대규모 재작업이 생기지 않는다. 막판 일괄 검증은 미준수 위험을 키운다. ECO III-2는 준수 정도를 지속 측정하라고 한다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 1,
  "q": "ECO 2026이 컴플라이언스(III-2)·위험(III-5) Task에 명시한 지속가능성 요구와 직접 연결되는 PMBOK 8판 원칙은?",
  "c": [
   "지속가능성 통합(Integrate sustainability)",
   "가치 집중(Focus on value)",
   "품질 내재화(Embed quality)",
   "책임 있는 리더십(Lead accountably)"
  ],
  "a": 0,
  "e": "PMBOK 8판은 '지속가능성 통합'을 6원칙의 하나로 두었고, ECO 2026은 III-2·III-5에 지속가능성을 명시했다. 다른 보기도 8판 원칙이지만 지속가능성 요구와 직접 연결되지는 않는다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 1,
  "q": "위험(Risk)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "위험은 목표에 부정적 영향을 주는 사건만을 가리킨다",
   "식별된 위험은 위험 등록부에 기록하고 책임자를 지정한다",
   "위험에는 위협(threat)과 기회(opportunity)가 모두 포함된다",
   "위험은 아직 발생하지 않은 불확실한 사건이나 조건이다"
  ],
  "a": 0,
  "e": "위험은 위협(부정)과 기회(긍정)를 모두 포함하는 불확실성이다. 이미 발생한 문제는 이슈로 구분한다. 나머지 보기는 위험의 올바른 설명이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 1,
  "q": "프로젝트 관리자가 워크숍에서 40개의 위험을 식별했다. 제한된 시간 안에 어떤 위험에 먼저 집중할지 빠르게 정하려 한다. 가장 적합한 도구는?",
  "c": [
   "확률·영향 매트릭스",
   "의사결정나무 분석",
   "몬테카를로 시뮬레이션",
   "토네이도 다이어그램"
  ],
  "a": 0,
  "e": "개별 위험의 우선순위를 빠르게 정하는 것은 정성적 분석이며 대표 도구가 확률·영향(P-I) 매트릭스다. 몬테카를로·토네이도·의사결정나무는 시간과 데이터가 필요한 정량적 기법이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "The sponsor asks the project manager, \"What is the probability that we will finish by the end of March?\" Which technique best answers this question?",
  "c": [
   "Monte Carlo simulation",
   "SWOT analysis",
   "Probability and impact matrix",
   "Root cause analysis"
  ],
  "a": 0,
  "e": "몬테카를로 시뮬레이션은 활동별 분포를 반복 표본추출해 전체 일정·원가 목표의 달성 확률을 구하는 정량적 기법이다. P-I 매트릭스는 정성 분석, SWOT·근본원인 분석은 식별 기법이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 1,
  "q": "During a hallway conversation, a team member mentions that a key vendor may be acquired by a competitor, which could delay deliveries. Nothing has happened yet. What should the project manager do?",
  "c": [
   "Replace the vendor with another supplier now",
   "Escalate it to the sponsor as a critical issue",
   "Record it in the risk register and analyze it",
   "Ignore it until the acquisition is announced"
  ],
  "a": 2,
  "e": "아직 발생하지 않은 불확실한 사건이므로 위험이다. 위험 등록부에 기록하고 확률·영향을 분석하며 책임자를 지정한다. 무시는 선제적 위험관리 위반, 즉시 공급사 교체는 분석 없는 과잉 대응, 이슈로 에스컬레이션은 위험과 이슈를 혼동한 것이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "위험 식별(Identify Risks) 기법으로 가장 거리가 먼 것은?",
  "c": [
   "델파이 기법",
   "가정 및 제약 분석",
   "브레인스토밍",
   "팀 벨로시티 산출"
  ],
  "a": 3,
  "e": "벨로시티는 애자일 팀의 반복당 완료량을 측정하는 계획·추정 지표다. 브레인스토밍, 가정·제약 분석(가정이 틀릴 때의 위험), 델파이(익명 전문가 합의)는 대표적 위험 식별 기법이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 3,
  "q": "정량적 위험 분석을 마친 뒤 스폰서가 '총원가 변동에 가장 크게 기여하는 위험이 무엇인지 한눈에 보여 달라'고 요청했다. 프로젝트 관리자가 제시할 도표로 가장 적합한 것은?",
  "c": [
   "관리도(Control chart)",
   "번다운 차트(Burndown)",
   "토네이도 다이어그램",
   "파레토 차트(Pareto)"
  ],
  "a": 2,
  "e": "토네이도 다이어그램은 민감도 분석 결과를 영향이 큰 변수부터 막대 길이 순으로 보여준다. 파레토 차트는 원인의 빈도 순위, 관리도는 프로세스 안정성, 번다운은 잔여 작업 추세를 보여준다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "애자일 팀이 처음 써보는 클라우드 메시징 기술을 도입해야 해서 기술적 불확실성이 크다. 이 위험을 다루는 방법으로 가장 적절하지 않은 것은?",
  "c": [
   "일일 조정 회의와 회고에서 위험 상태를 지속 재점검한다",
   "위험 대응 작업을 백로그에 넣어 가치와 함께 우선순위를 정한다",
   "초기 반복에서 시간 제한 스파이크(spike)로 타당성을 탐색한다",
   "불확실성이 풀릴 때까지 관련 작업을 마지막 반복으로 미룬다"
  ],
  "a": 3,
  "e": "애자일은 고위험 항목을 앞쪽 반복에서 다뤄 불확실성을 조기에 줄인다. 마지막으로 미루면 실패 시 대응 여지가 사라진다. 스파이크·위험 조정 백로그·지속 재점검은 적절한 애자일 위험 대응이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 3,
  "q": "어떤 프로젝트에 30% 확률로 20,000달러 손실을 주는 위협과 20% 확률로 10,000달러 이익을 주는 기회가 있다. 두 위험의 EMV 합계는?",
  "c": [
   "−8,000달러",
   "−6,000달러",
   "−4,000달러",
   "+2,000달러"
  ],
  "a": 2,
  "e": "EMV = 확률 × 영향이며 위협은 음수, 기회는 양수다. 0.3 × (−20,000) = −6,000, 0.2 × 10,000 = +2,000이므로 합계 −4,000달러다. −6,000은 위협만, +2,000은 기회만 계산한 값이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 1,
  "q": "위험 등록부(Risk register)에 일반적으로 기록되는 항목이 아닌 것은?",
  "c": [
   "위험 책임자(risk owner)",
   "위험 트리거(trigger)",
   "팀원의 개인 성과 평가 점수",
   "계획된 위험 대응 방안"
  ],
  "a": 2,
  "e": "위험 등록부에는 위험 설명·확률·영향·책임자·트리거·대응 계획 등이 기록된다. 개인 성과 평가는 자원 관리 영역의 기록이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 1,
  "q": "해외에서 들여오는 고가 장비가 운송 중 파손될 위협이 있어 프로젝트 관리자가 운송 보험에 가입했다. 이 위험 대응 전략은?",
  "c": [
   "수용(Accept)",
   "완화(Mitigate)",
   "전가(Transfer)",
   "회피(Avoid)"
  ],
  "a": 2,
  "e": "보험은 영향(재무적 손실)과 책임을 제3자에게 넘기는 Transfer이며 파손 위험 자체는 남는다. Avoid는 계획 변경으로 위협을 제거, Mitigate는 확률·영향 감소(예: 포장 강화), Accept는 대응하지 않거나 예비비로 대비하는 것이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "위험 등록부에 '핵심 개발자 이탈'이 트리거·비상 계획과 함께 등록되어 있다. 오늘 핵심 개발자가 사직서를 제출했다. 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "팀 회의를 열어 새로운 대응 방안을 처음부터 브레인스토밍한다",
   "즉시 스폰서에게 에스컬레이션하고 지시가 올 때까지 기다린다",
   "등록부의 비상 계획을 실행하고 이를 이슈 로그에 기록한다",
   "변경 요청을 제출해 일정 기준선부터 먼저 조정해 둔다"
  ],
  "a": 2,
  "e": "식별된 위험이 실현되면 새 대응을 고안하기보다 이미 계획된 대응을 실행하고 이슈로 추적한다(ECO III-4 'Recognize when a risk becomes an issue'). 브레인스토밍은 계획이 있을 때 불필요하고, 에스컬레이션·기준선 조정은 대응 결과를 본 뒤 필요할 때 한다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 1,
  "q": "A risk that arises as a direct result of implementing a risk response is called a:",
  "c": [
   "Secondary risk",
   "Residual risk",
   "Workaround",
   "Risk trigger"
  ],
  "a": 0,
  "e": "Secondary risk는 대응을 실행했기 때문에 새로 생긴 위험이다. Residual risk는 대응 후에도 남는 위험, Trigger는 위험 발생 징후, Workaround는 계획되지 않은 즉흥 대응이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "프로젝트 관리자가 국가 전력 규제 변경으로 회사 전체 제조 라인이 영향을 받을 수 있는 위험을 식별했다. 이 위험은 프로젝트 범위와 PM 권한을 넘어선다. 적절한 대응은?",
  "c": [
   "회피(Avoid) — 프로젝트 계획을 바꿔 위험을 제거한다",
   "수용(Accept) — 범위 밖이므로 기록만 하고 대응하지 않는다",
   "완화(Mitigate) — 프로젝트 예산으로 전사 대책을 시행한다",
   "상향(Escalate) — 상위 책임자에게 넘기고 인수를 확인한다"
  ],
  "a": 3,
  "e": "PM 권한·프로젝트 범위를 넘는 위험은 Escalate 전략으로 적절한 책임자(프로그램·포트폴리오·조직)에게 넘긴다. 상향 후에는 프로젝트에서 계속 관리하지 않지만 인수 확인은 필요하다. 수용·회피·프로젝트 예산 완화는 권한 범위를 잘못 판단한 것이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "조기 완료 시 고객이 보너스를 지급하기로 했다. 프로젝트 관리자는 이 기회를 반드시 실현하기 위해 회사에서 가장 숙련된 인력을 해당 작업에 전담 배정했다. 이 대응 전략은?",
  "c": [
   "수용(Accept)",
   "공유(Share)",
   "활용(Exploit)",
   "증대(Enhance)"
  ],
  "a": 2,
  "e": "Exploit는 기회 실현을 보장하도록 불확실성을 제거하는 전략이다. Enhance는 확률·영향을 높이지만 실현을 보장하지 않으며, Share는 제3자와 이익을 나누는 것, Accept는 생기면 취하는 것이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 3,
  "q": "예비비(reserve)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "우발 예비는 식별된 위험(known-unknowns)에 대비한다",
   "관리 예비는 원가 기준선 안에 있어 PM이 재량으로 쓴다",
   "우발 예비는 원가 기준선 안에 포함된다",
   "관리 예비를 사용하려면 변경 승인이 필요하다"
  ],
  "a": 1,
  "e": "관리 예비는 미식별 위험(unknown-unknowns)에 대비하며 원가 기준선 밖·프로젝트 예산 안에 있고, 사용 시 경영진 승인(변경 요청)이 필요하다. 나머지는 우발·관리 예비의 올바른 설명이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 3,
  "q": "아무도 예상하지 못한 지역 홍수로 자재 창고가 침수되었다. 위험 등록부에는 관련 위험이 없다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "우회책으로 즉시 대응하고 분석해 위험 등록부와 교훈을 갱신한다",
   "PM 권한으로 관리 예비를 즉시 집행해 손실을 먼저 메운다",
   "프로젝트를 중단하고 스폰서의 재승인이 날 때까지 기다린다",
   "위험 등록부에서 가장 비슷한 비상 계획을 찾아 그대로 실행한다"
  ],
  "a": 0,
  "e": "미식별 위험이 발생하면 계획된 대응이 없으므로 우회책(workaround)으로 대응하고, 이후 분석해 등록부·교훈을 갱신한다. 관리 예비는 승인 없이 PM이 단독 집행할 수 없고, 프로젝트 중단은 분석 없는 과잉 대응이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 1,
  "q": "애자일 팀이 반복이 진행되면서 위험 노출도가 줄어드는 추세를 이해관계자에게 시각적으로 보여주려 한다. 가장 적합한 도구는?",
  "c": [
   "마일스톤 간트 차트(Gantt chart)",
   "작업분류체계(Work Breakdown Structure)",
   "위험 번다운 차트(Risk burndown chart)",
   "책임배정 매트릭스(RACI chart)"
  ],
  "a": 2,
  "e": "위험 번다운 차트는 반복별 위험 노출도 합계의 감소 추세를 보여주는 정보 방열기다. 간트는 일정, WBS는 범위 분해, RACI는 역할·책임을 나타낸다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "발생 확률과 영향이 모두 낮은 위험에 대해 팀원이 위험 영향 금액보다 비용이 더 큰 완화 대책을 제안했다. 프로젝트 관리자의 판단으로 가장 적절하지 않은 것은?",
  "c": [
   "위험 성향과 임계치에 비추어 적정 대응 수준을 정한다",
   "수동적 수용으로 등록부에 기록하고 지속적으로 감시한다",
   "작은 위험도 반드시 제거해야 하므로 비용과 무관하게 시행한다",
   "대응 비용과 위험 영향을 비교해 비용 효율성을 판단한다"
  ],
  "a": 2,
  "e": "위험 대응은 위험의 중요도와 비용 효율성에 맞춰야 한다. 영향보다 비싼 대응을 무조건 시행하는 것은 자원 낭비다. 저확률·저영향 위험은 수용하고 감시 목록(watch list)에 두는 것이 일반적이다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 1,
  "q": "예측형 프로젝트에서 고객이 개발자에게 직접 새 보고서 기능 추가를 요청했고 개발자가 이를 프로젝트 관리자에게 알렸다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "작은 기능이므로 개발자에게 바로 구현하도록 승인한다",
   "변경 요청을 문서화하고 영향 분석 후 CCB 검토를 받는다",
   "고객이 절차를 어겼다고 스폰서에게 공식 항의한다",
   "기준선에 없는 기능이므로 그 자리에서 즉시 거절한다"
  ],
  "a": 1,
  "e": "예측형 변경은 통합 변경 통제(문서화 → 영향 분석 → CCB 결정)를 따른다. 바로 구현은 무단 변경, PM 단독 거절은 절차 위반, 항의는 협업적 해결이 아니다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "In the middle of a sprint, a key stakeholder asks the team to add an urgent new feature. What should happen?",
  "c": [
   "The project manager rejects it until the next release",
   "The project manager personally reorders the product backlog",
   "The team adds the feature to the current sprint at once",
   "The product owner adds it to the backlog and prioritizes it"
  ],
  "a": 3,
  "e": "애자일에서 새 요청은 제품 백로그에 들어가고 PO가 우선순위를 정하며, 진행 중 스프린트 목표는 원칙적으로 보호한다. 즉시 투입은 스프린트 목표를 흔들고, PM의 거절·직접 우선순위 결정은 PO의 역할을 침해한다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 1,
  "q": "예측형 프로젝트의 변경 관리 계획서에 '기준선에 영향을 주는 변경은 공식 위원회가 승인·연기·거절을 결정한다'고 되어 있다. 이 위원회는?",
  "c": [
   "조달 부서(Procurement)",
   "품질보증팀(QA team)",
   "프로젝트 팀(Project team)",
   "변경통제위원회(CCB)"
  ],
  "a": 3,
  "e": "CCB(Change Control Board)는 변경 요청의 승인·연기·거절을 결정하는 공식 기구다. 품질보증팀·프로젝트 팀·조달 부서는 영향 분석에 참여할 수는 있어도 결정 권한 기구가 아니다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 1,
  "q": "A change request has just been approved by the change control board. What should the project manager do next?",
  "c": [
   "Ask the customer to sign formal acceptance of deliverables",
   "Perform another full impact analysis of the change request",
   "Update the baselines and documents, then communicate the decision",
   "Close the change log entry without any further action"
  ],
  "a": 2,
  "e": "승인 후에는 기준선·문서를 갱신하고 결정을 소통한 뒤 구현한다(ECO III-3 Update project documentation, Communicate status). 영향 분석은 승인 전에 끝났고, 바로 종결하거나 인수 서명을 받는 것은 순서가 틀렸다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 3,
  "q": "통합 변경 통제(Integrated Change Control)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "일정 압박이 크면 PM이 권한 밖 기준선 변경도 단독 승인한다",
   "변경 로그에는 거절·보류된 요청도 함께 기록한다",
   "기준선은 정해진 권한자가 승인한 변경만 반영해 갱신한다",
   "구두로 받은 변경 요청도 문서화해 절차에 따라 처리한다"
  ],
  "a": 0,
  "e": "기준선 변경은 정의된 권한(CCB·스폰서 등)에 따라 결정하며 일정 압박이 절차를 생략할 근거가 되지 못한다. 나머지 설명은 모두 통합 변경 통제의 원칙이다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "CCB가 한 이해관계자의 변경 요청을 거절했고, 해당 이해관계자는 불만을 표시하고 있다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "관계 유지를 위해 요청 기능 일부를 비공식적으로 반영해 준다",
   "필요하면 요청을 보완해 재제출하는 방법을 안내한다",
   "거절 사유와 판단 근거를 이해관계자에게 직접 설명한다",
   "변경 로그에 거절 결정과 그 사유를 기록해 둔다"
  ],
  "a": 0,
  "e": "거절된 요청을 비공식적으로 반영하는 것은 무단 변경이자 거버넌스 위반이다. 결정 사유를 투명하게 소통하고 기록하며 재제출 경로를 안내하는 것이 ECO III-3 'Communicate the status of proposed changes'에 맞다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 3,
  "q": "프로젝트 관리자가 리뷰 중, 한 개발자가 고객이 좋아할 것이라며 승인되지 않은 화면 기능을 이미 구현해 둔 것을 발견했다. 프로젝트 관리자가 가장 먼저 해야 할 일은?",
  "c": [
   "추가 기능의 영향을 평가하고 변경 통제 절차에 따라 처리한다",
   "분석 없이 즉시 해당 코드를 모두 삭제하도록 지시한다",
   "고객 만족에 도움이 되므로 그대로 포함해 인도한다",
   "기능 부서장에게 해당 개발자의 징계를 요청한다"
  ],
  "a": 0,
  "e": "요청 없는 추가는 골드 플레이팅(무단 변경)이므로 먼저 범위·일정·품질 영향을 평가하고 변경 통제 절차로 처리하며 팀과 절차를 다시 공유한다. 그대로 인도는 통제 밖 변경을 승인하는 셈이고, 분석 없는 삭제와 징계 요청은 성급하고 협업적이지 않다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 1,
  "q": "설계 문서 3판과 4판이 공유 폴더에 함께 있어 두 팀이 서로 다른 판으로 작업하는 바람에 재작업이 생겼다. 재발을 막기 위해 프로젝트 관리자가 강화해야 할 활동은?",
  "c": [
   "품질 감사(Quality audit)",
   "형상 관리(Configuration management)",
   "요구사항 추적(Requirements traceability)",
   "자원 평준화(Resource leveling)"
  ],
  "a": 1,
  "e": "형상 관리는 산출물의 버전·특성과 변경 이력을 식별·통제해 모두가 승인된 최신판으로 작업하게 한다. 범위 확인은 고객 인수, 품질 감사는 프로세스 준수 점검, 자원 평준화는 자원 제약에 따른 일정 조정이다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "운영 중인 결제 시스템에 심각한 장애가 발생해 즉시 패치가 필요하다. 정상적인 CCB 회의는 다음 주에 열린다. 프로젝트 관리자는 어떻게 해야 하는가?",
  "c": [
   "긴급 변경 절차로 신속 승인 후 적용하고 사후 문서화를 마친다",
   "다음 주 CCB 회의가 열릴 때까지 패치 적용을 미뤄 둔다",
   "패치를 적용하고 별도 절차 없이 다음 릴리스에 포함한다",
   "긴급 상황이므로 별도 기록 없이 패치를 적용하고 넘어간다"
  ],
  "a": 0,
  "e": "긴급 변경도 통제 밖에 두지 않는다. 거버넌스에 미리 정의된 긴급 절차로 권한자의 신속 승인을 받고 사후 문서화·CCB 보고를 완료한다. 무작정 대기는 비즈니스 피해를 키우고, 기록 없는 적용은 통제 위반이다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 1,
  "q": "통합 테스트 서버가 고장 나 테스트가 이틀째 중단되었다. 프로젝트 관리자는 책임자와 해결 기한을 정해 진행 상황을 추적하려 한다. 이 상황을 기록할 문서는?",
  "c": [
   "이슈 로그(Issue log)",
   "위험 등록부(Risk register)",
   "변경 로그(Change log)",
   "가정 로그(Assumption log)"
  ],
  "a": 0,
  "e": "이미 발생한 문제는 이슈 로그로 추적한다. 위험 등록부는 미래의 불확실성, 변경 로그는 변경 요청, 가정 로그는 가정·제약을 기록한다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 1,
  "q": "일일 조정 회의(daily coordination meeting)에서 한 개발자가 보안 부서의 접근 권한 승인이 사흘째 나지 않아 작업이 막혀 있다고 말했다. 프로젝트 관리자(스크럼 마스터)는 어떻게 해야 하는가?",
  "c": [
   "스프린트 회고 때 다룰 안건으로 기록만 해 둔다",
   "회의를 연장해 팀 전체가 그 자리에서 해결책을 논의한다",
   "개발자에게 스스로 보안 부서를 설득해 보라고 안내한다",
   "회의 후 보안 부서 담당자와 직접 협의해 장애를 제거한다"
  ],
  "a": 3,
  "e": "팀 밖 장애는 서번트 리더인 PM/SM이 당사자와 직접 협의해 제거한다(ECO III-4). 일일 회의는 장애 공유용이라 연장 논의는 부적절하고, 개발자에게 떠넘기거나 회고까지 미루면 작업 정체가 길어진다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "스프린트 중반 팀이 동시에 여러 장애(테스트 환경 불안정, 외부 API 지연, 디자이너 부재)를 보고했다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "처리 과정에서 장애 상태를 지속적으로 재평가한다",
   "각 장애가 스프린트 목표·가치에 주는 영향을 평가한다",
   "영향 기준으로 우선순위를 정해 장애 보드에 가시화한다",
   "보고된 순서대로 하나씩 처리하고 끝나면 다음 것을 본다"
  ],
  "a": 3,
  "e": "ECO III-4는 장애 영향 평가 → 우선순위·가시화 → 개입 → 지속 재평가를 요구한다. 보고 순서대로 처리하면 영향이 큰 장애가 방치될 수 있다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "Which statement best describes the project manager's role in removing impediments on an agile team?",
  "c": [
   "Personally solving every technical problem the team meets",
   "Identifying which team member caused each impediment",
   "Reporting impediments to management without taking action",
   "Facilitating removal of obstacles the team cannot resolve itself"
  ],
  "a": 3,
  "e": "서번트 리더는 팀이 스스로 해결하기 어려운 장애를 제거해 팀이 가치 인도에 집중하게 한다. 모든 문제를 직접 푸는 것은 자기조직화를 해치고, 책임자 색출은 비난 문화, 조치 없는 보고는 책임 회피다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 3,
  "q": "이슈 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "식별된 위험이 실현되면 이슈로 전환해 추적한다",
   "이슈는 확률을 평가해 확률·영향 매트릭스로 순위를 정한다",
   "관련 이해관계자와 협업해 해결 접근 방안을 정한다",
   "각 이슈에 책임자와 해결 기한을 지정해 이슈 로그로 추적한다"
  ],
  "a": 1,
  "e": "이슈는 이미 발생했으므로 확률 평가 대상이 아니라 영향·긴급도로 처리한다. 확률·영향 매트릭스는 위험의 정성 분석 도구다. 나머지는 ECO III-4의 올바른 이슈 관리다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 3,
  "q": "프로젝트에 필요한 전문 테스터를 타 부서장이 약속과 달리 배정하지 않아 일정이 지연되고 있다. 프로젝트 관리자가 가장 먼저 해야 할 일은?",
  "c": [
   "PM 판단으로 외부 테스터를 바로 계약해 현장에 투입한다",
   "즉시 스폰서에게 에스컬레이션해 부서장에게 지시하도록 한다",
   "부서장의 회신을 기다리며 일정 지연을 그대로 수용한다",
   "해당 부서장과 직접 만나 영향과 합의 내용을 검토하고 협의한다"
  ],
  "a": 3,
  "e": "이해관계자와의 이슈는 당사자와 직접 협의하는 것이 먼저이며, 해결되지 않거나 권한 밖일 때 분석과 함께 에스컬레이션한다. 즉시 에스컬레이션은 이르고, 수동적 대기는 방치, 독단적 외부 계약은 조달·예산 절차 우회다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "최근 세 번의 반복에서 같은 유형의 빌드 서버 장애가 반복되어 매번 팀이 하루씩 작업을 잃었다. 프로젝트 관리자는 어떻게 해야 하는가?",
  "c": [
   "팀과 근본원인을 분석해 재발 방지 조치를 정하고 추적한다",
   "빌드 서버 담당자를 교체해 달라고 부서장에게 요청한다",
   "장애 때마다 같은 방법으로 빨리 복구하도록 절차서를 만든다",
   "반복 일정마다 장애 대비 여유 시간을 하루씩 추가한다"
  ],
  "a": 0,
  "e": "반복되는 장애는 증상 복구가 아니라 근본원인을 제거해야 한다(ECO III-4 지속 재평가, III-6 지속적 개선). 회고에서 개선 항목으로 관리한다. 복구 절차서나 여유 시간 추가는 증상 대응이고, 담당자 교체 요청은 분석 없는 비난이다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 1,
  "q": "하이브리드 프로젝트의 관리자가 위험·가정·이슈·의존관계를 서로 다른 문서에 흩어 관리하다 보니 연관 항목을 놓치는 일이 잦다. 네 가지를 한 곳에서 관리하는 실무 도구는?",
  "c": [
   "번업 차트",
   "RACI 매트릭스",
   "WBS 사전",
   "RAID 로그"
  ],
  "a": 3,
  "e": "RAID 로그는 Risks·Assumptions·Issues·Dependencies의 머리글자를 딴 통합 관리 도구다. RACI는 역할·책임, WBS 사전은 작업 패키지 상세, 번업 차트는 누적 완료량을 나타낸다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 1,
  "q": "세 번째 반복 회고에서 '코드 리뷰 대기 시간이 길다'는 개선점이 나왔다. 프로젝트 관리자는 이를 현재 프로젝트에서 바로 관리하기 위해 기록하려 한다. 기록할 문서는?",
  "c": [
   "프로젝트 헌장(Project charter)",
   "이슈 로그(Issue log)",
   "교훈 등록부(Lessons learned register)",
   "교훈 저장소(Lessons learned repository)"
  ],
  "a": 2,
  "e": "교훈 등록부는 진행 중 갱신하는 프로젝트 문서다. 교훈 저장소는 종료 시 이관되는 조직 자산(OPA)이고, 이슈 로그는 발생한 문제, 헌장은 프로젝트 승인 문서다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 2,
  "q": "18개월 프로젝트의 6개월 차에 프로젝트 관리자가 교훈(lessons learned) 관리 방식을 정하려 한다. 가장 적절하지 않은 것은?",
  "c": [
   "교훈은 종료 회의에서 한 번에 모아 저장소에 올린다",
   "착수 시 조직 저장소의 과거 교훈을 검토해 반영한다",
   "반복·단계마다 교훈을 모아 남은 작업에 즉시 적용한다",
   "단계 종료 시 정리된 교훈을 OPA에 갱신한다"
  ],
  "a": 0,
  "e": "교훈은 진행 중 지속 수집·즉시 적용해야 현재 프로젝트에 가치가 있다. 종료 시 한 번만 수집하면 기억 손실이 크고 활용 시점을 놓친다. 나머지는 ECO III-6(교훈 활용·개선 프로세스 갱신·OPA 갱신)에 부합한다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 1,
  "q": "지속적 개선(ECO III-6)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "PDCA는 Plan-Do-Check-Act 순서로 반복하는 개선 주기다",
   "교훈은 현재 프로젝트 안에서만 쓰고 OPA에는 반영하지 않는다",
   "회고(retrospective)는 팀 프로세스 개선의 핵심 이벤트다",
   "Kaizen은 작고 지속적인 개선을 강조한다"
  ],
  "a": 1,
  "e": "ECO III-6은 교훈 활용, 개선 프로세스 최신화와 함께 OPA 갱신을 Enabler로 명시한다. 교훈을 조직 자산에 반영해야 미래 프로젝트가 활용할 수 있다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 2,
  "q": "After the project's deliverables are transitioned to operations, who is typically accountable for tracking and realizing the intended benefits?",
  "c": [
   "The procurement manager who handled contracts",
   "The quality inspector assigned to the project",
   "The project team that built the deliverables",
   "The benefits owner named in the benefits plan"
  ],
  "a": 3,
  "e": "편익은 대개 운영 단계에서 실현되므로 편익 관리 계획서에 지정된 편익 책임자(benefits owner, 보통 사업·운영 측)가 추적한다. 프로젝트 팀은 종료 후 해산되는 경우가 많고, 조달·품질 담당은 편익 실현 책임자가 아니다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 2,
  "q": "고객관계관리(CRM) 시스템 도입 프로젝트의 종료 보고서를 쓰던 프로젝트 관리자가 성과를 산출물·결과·편익으로 나누려 한다. '편익(Benefit)'에 해당하는 것은?",
  "c": [
   "상담 1건당 평균 처리 시간이 줄어든 것",
   "상담원들이 새 시스템을 매일 사용하기 시작한 것",
   "CRM 시스템을 구축해 운영 부서에 인도한 것",
   "고객 유지율 상승으로 연간 매출이 늘어난 것"
  ],
  "a": 3,
  "e": "산출물(시스템 구축) → 결과(사용·처리시간 단축) → 편익(조직 이득: 매출 증가)의 사슬이다. 구축은 산출물, 사용 시작과 처리시간 단축은 결과(Outcome)에 해당한다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 3,
  "q": "편익 관리 계획서(Benefits management plan)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "편익이 실현될 것으로 예상되는 시기를 명시한다",
   "편익은 종료 시점에 모두 실현되므로 종료 후 측정은 불필요하다",
   "목표 편익과 그것을 측정할 지표를 함께 정의한다",
   "편익 실현을 책임질 편익 책임자(benefits owner)를 지정한다"
  ],
  "a": 1,
  "e": "편익은 운영 이관 후 실현되는 경우가 많으므로 종료 후 측정 체계까지 정의해야 한다(ECO II-3 'Verify a measurement system is in place to track benefits'). 나머지는 편익 관리 계획서의 핵심 내용이다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 3,
  "q": "애자일 제품 개발 중반, 시장 조사 결과 남은 기능들의 비즈니스 가치가 크게 떨어졌다는 사실이 확인되었다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "비즈니스 케이스 재검토 결과를 스폰서·PO와 공유해 결정을 돕는다",
   "계획된 기능이므로 기준대로 모두 완료해 인도한다",
   "팀 사기를 고려해 조사 결과를 당분간 공개하지 않는다",
   "PM 판단으로 즉시 프로젝트 중단을 선언한다"
  ],
  "a": 0,
  "e": "가치 중심 판단이 우선이며, 비즈니스 가치는 프로젝트 내내 점검한다(ECO II-3 'Examine the business value throughout the project'). 재검토 결과로 백로그 재우선순위화나 지속 여부를 결정한다. 계획만 고수하거나 정보를 숨기는 것은 가치·투명성 위반이고, 중단 결정은 PM 단독이 아니라 스폰서·거버넌스 권한이다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 1,
  "q": "애자일 팀이 매 반복 같은 코드 리뷰 지연을 겪고 있다. 팀이 일하는 방식 자체를 돌아보고 다음 반복에 적용할 개선 행동을 정하기에 가장 적합한 이벤트는?",
  "c": [
   "백로그 정제(Backlog refinement)",
   "회고(Retrospective)",
   "릴리스 계획(Release planning)",
   "스프린트 리뷰(Sprint review)"
  ],
  "a": 1,
  "e": "회고는 프로세스·협업 개선이 목적이다. 스프린트 리뷰는 제품 증분을 검토하고, 백로그 정제는 항목을 구체화하며, 릴리스 계획은 인도 일정을 계획한다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 1,
  "q": "외부 환경 분석 틀인 PESTLE의 구성 요소로 옳은 것은?",
  "c": [
   "정치·효율·사회·시간·법률·위험",
   "정치·경제·사회·기술·법률·환경",
   "인력·경제·전략·기술·법률·환경",
   "정치·경제·사회·기술·물류·윤리"
  ],
  "a": 1,
  "e": "PESTLE은 Political·Economic·Social·Technological·Legal·Environmental의 머리글자다. ECO III-8은 규제·기술·지정학·시장 변화를 조사하라고 하며 PESTLE이 이를 정리하는 틀로 쓰인다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "A new tariff announced by a foreign government will increase the cost of hardware that the project plans to import next quarter. What should the project manager do first?",
  "c": [
   "Buy all the hardware now, before the tariff starts",
   "Evaluate the impact and analyze alternative suppliers",
   "Wait to see whether the tariff is actually enforced",
   "Ask the sponsor to approve a larger hardware budget"
  ],
  "a": 1,
  "e": "ECO III-8은 외부 환경(지정학·시장) 변화를 조사하고 범위·백로그 영향을 평가·우선순위화하라고 한다. 원가·일정·범위 영향과 대안을 먼저 분석한다. 분석 없는 즉시 구매나 예산 증액 요청은 성급하고, 관망은 선제적 대응 원칙에 어긋난다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "애자일 제품 팀이 개발 중인 기능과 거의 같은 기능을 경쟁사가 먼저 출시했다. 프로덕트 오너는 방향 전환을 고민하고 있다. 프로젝트 관리자는 어떻게 해야 하는가?",
  "c": [
   "스폰서에게 프로젝트를 즉시 중단하자고 건의한다",
   "시장 변화의 영향을 PO·팀과 평가해 백로그 재우선순위화를 돕는다",
   "경쟁사와 무관하게 원래 로드맵대로 개발을 계속 진행한다",
   "경쟁 기능을 그대로 따라 만드는 작업을 이번 스프린트에 넣는다"
  ],
  "a": 1,
  "e": "외부 시장 변화는 영향 평가 후 백로그 우선순위로 반영한다(ECO III-8 'Assess and prioritize the impact on project scope/backlog'). 원래 계획 고수는 가치 무시, 스프린트 중 즉시 추가는 절차 위반, 중단 건의는 분석 없는 극단적 대응이다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "회사 합병 발표 후 보고 라인이 바뀔 예정이라 프로젝트 팀원들이 불안해하며 생산성이 떨어지고 있다. 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "확인된 정보를 팀에 투명하게 공유하고 우려를 경청한다",
   "합병은 범위 밖이므로 업무에만 집중하라고 하고 논의를 막는다",
   "영향 평가 결과에 따라 계획·자원 조정 등 필요한 조치를 정한다",
   "조직 변화가 프로젝트 목표·자원·거버넌스에 주는 영향을 평가한다"
  ],
  "a": 1,
  "e": "ECO III-7은 조직 변화가 프로젝트에 미치는 영향을 평가하고 필요한 조치를 정하라고 한다. 변화를 무시하고 논의를 막으면 불안과 저항이 커진다. 나머지는 영향 평가·투명한 소통·조치 결정이라는 올바른 흐름이다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "위계가 강하고 실패를 용납하지 않는 문화의 조직에서 경영진이 다음 분기부터 모든 프로젝트를 애자일로 전환하라고 했다. 첫 파일럿을 맡은 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "문화가 맞지 않으므로 예측형을 유지하겠다고 경영진에 보고한다",
   "조직 문화와 변화 준비도를 평가해 단계적 도입 방안을 마련한다",
   "애자일 관리 도구부터 구매해 전 팀에 일괄 배포한다",
   "모든 팀에 즉시 스크럼을 적용하고 문제는 회고에서 해결한다"
  ],
  "a": 1,
  "e": "ECO III-7의 첫 Enabler는 조직 문화 평가다. 문화·준비도를 평가해 교육·코칭과 함께 도입 방식을 테일러링해야 저항을 줄일 수 있다. 즉시 전면 적용은 성급하고, 거부 보고는 변화 지원 책임 회피이며, 도구 우선은 본질(문화·역량)을 놓친다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 1,
  "q": "ADKAR 변화 모델에서 열망(Desire) 다음 단계는?",
  "c": [
   "능력(Ability)",
   "강화(Reinforcement)",
   "지식(Knowledge)",
   "인식(Awareness)"
  ],
  "a": 2,
  "e": "ADKAR은 Awareness → Desire → Knowledge → Ability → Reinforcement 순이다. 변화의 필요를 알고(인식) 원한 뒤(열망) 방법을 배우고(지식) 실제로 할 수 있게(능력) 되며 유지(강화)한다. 출제 근거는 [확인필요]."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 3,
  "q": "Which of the following is NOT an appropriate way for a project manager to handle changes in the external business environment?",
  "c": [
   "Waiting until a change causes a failure before assessing it",
   "Continually reviewing the environment for scope and backlog impacts",
   "Assessing and prioritizing the impact of new regulations",
   "Surveying technology and market trends that affect project value"
  ],
  "a": 0,
  "e": "ECO III-8은 외부 환경(규제·기술·지정학·시장)을 지속적으로 검토하고 영향을 평가·우선순위화하라고 한다. 실패가 발생할 때까지 기다리는 것은 선제적 행동 원칙에 어긋난다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 3,
  "q": "새 업무 시스템을 배포했지만 현업 사용자 상당수가 기존 엑셀 방식을 고집하며 사용을 거부하고 있다. 편익 실현이 위태롭다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "경영진에게 요청해 엑셀 사용을 즉시 전면 금지하도록 한다",
   "시스템 인도가 끝났으므로 운영 부서의 문제로 넘긴다",
   "사용자 요구대로 시스템을 엑셀 방식으로 재개발하자고 요청한다",
   "저항 원인을 파악하고 변화 챔피언·교육·소통으로 대응한다"
  ],
  "a": 3,
  "e": "조직 변화 지원(ECO III-7)과 편익 실현을 위해 저항의 원인(필요성 인식·사용 역량 부족 등)을 먼저 파악하고 소통·교육으로 대응한다. 강제 금지는 저항을 키우고, 운영에 떠넘기는 것은 편익 실현 책임 회피, 즉시 재개발은 분석 없는 과잉 변경이다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "규제 기관이 내년부터 데이터 국외 이전을 제한하는 법 개정안을 예고했다. 해외 클라우드 이전 프로젝트를 맡은 프로젝트 관리자의 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "법무·컴플라이언스 담당자와 대응 시나리오를 검토한다",
   "영향이 큰 백로그 항목의 우선순위를 조정해 대비한다",
   "법이 확정·시행될 때까지 아무 검토 없이 기존 계획대로 진행한다",
   "개정안이 범위·아키텍처·일정에 주는 영향을 평가한다"
  ],
  "a": 2,
  "e": "ECO III-8은 외부 환경 변화를 지속적으로 검토하고 범위·백로그 영향을 평가·우선순위화하라고 한다. 예고된 규제를 시행 때까지 무시하는 것은 선제적 대응 원칙에 어긋난다. 나머지는 영향 평가·전문가 협업·우선순위 조정이라는 올바른 대응이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "PMBOK 가이드 8판(2025)의 핵심 구조로 옳은 것은?",
  "c": [
   "6개 원칙과 7개 성과영역",
   "5개 프로세스 그룹과 10개 지식영역",
   "12개 원칙과 8개 성과영역",
   "4개 가치와 12개 원칙"
  ],
  "a": 0,
  "e": "8판은 6원칙·7성과영역 체계에 비처방형 프로세스 지침을 더했다. 12원칙·8성과영역은 7판, 5 프로세스 그룹·10 지식영역은 6판 구조다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "PMBOK 가이드 판별 구조의 연결로 옳지 않은 것은?",
  "c": [
   "8판 — 6개 원칙과 7개 성과영역",
   "7판 — 12개 원칙과 8개 성과영역",
   "7판 — 5개 프로세스 그룹과 49개 프로세스",
   "6판 — 10개 지식영역"
  ],
  "a": 2,
  "e": "49개 프로세스는 6판 구조다. 7판은 프로세스를 본문에서 빼고 원칙·성과영역 체계로 바꿨으며, 빠진 프로세스는 2022년 Process Groups: A Practice Guide가 보완했다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 2,
  "q": "새로 합류한 PMO 분석가가 '8판이 나왔으니 원칙 기반 사고는 버리고 프로세스 체크리스트만 따르면 된다'고 팀에 말했다. 프로젝트 관리자가 팀에 안내할 내용으로 가장 적절한 것은?",
  "c": [
   "8판은 원칙·성과영역 체계를 유지하면서 비처방형 프로세스 지침을 더했으므로 맥락에 맞게 테일러링해 쓴다",
   "8판은 모든 프로세스를 의무화했으므로 체크리스트를 그대로 적용한다",
   "프로세스는 7판에서 폐지됐으므로 8판 프로세스 지침은 무시한다",
   "원칙과 프로세스가 충돌하면 항상 프로세스를 우선한다"
  ],
  "a": 0,
  "e": "8판은 7판 원칙·성과영역을 유지·단순화하면서 프로세스를 참고용으로 다시 넣었다. 의무화나 무시는 모두 8판 취지와 맞지 않고, 원칙보다 프로세스를 앞세우는 판단도 근거가 없다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "Which statement best describes how the PMBOK Guide – Eighth Edition treats process guidance?",
  "c": [
   "It removes all process content and relies only on principles",
   "It replaces performance domains with knowledge areas",
   "It mandates all 49 processes for every project",
   "It reintroduces process guidance in a non-prescriptive way, organized around focus areas"
  ],
  "a": 3,
  "e": "8판은 프로세스 지침을 비처방형으로 다시 도입하고 Focus Area로 묶었다. 프로세스를 모두 뺀 것은 7판이고, 49개 의무 적용이나 지식영역 복귀는 사실과 다르다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 2,
  "q": "PMP ECO와 PMBOK 가이드의 관계에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "시험 문항은 PMBOK 가이드 8판 한 권의 내용에서만 출제된다",
   "PMBOK 8 성과영역은 ECO Task와 대응해 학습할 수 있다",
   "ECO는 실무 Task 기반이고 PMBOK은 지식·원칙 기반이다",
   "시험은 시나리오 문항으로 경험 기반 적용력을 평가한다"
  ],
  "a": 0,
  "e": "ECO 2026은 시험이 특정 교재 하나에 근거하지 않는다고 명시한다. 나머지는 ECO가 밝힌 ECO·PMBOK 관계와 시험 방식에 맞는 설명이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "하이브리드 프로젝트 착수 회의에서 6판으로 공부한 팀원과 7판으로 공부한 팀원이 '지식영역'과 '성과영역' 용어 때문에 계속 엇갈린다. 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "두 용어 체계의 차이를 정리하고 이 프로젝트에서 쓸 공통 용어와 접근법을 팀과 합의한다",
   "PMO에 에스컬레이션해 표준 용어를 정해 달라고 요청한다",
   "용어 문제는 결과와 무관하므로 논의를 중단시킨다",
   "최신판 용어만 쓰도록 지시하고 반대 의견은 받지 않는다"
  ],
  "a": 0,
  "e": "공통 이해를 팀과 함께 만드는 것이 협업·권한 부여 원칙에 맞다. 일방 지시는 팀을 배제하고, 논의 중단은 오해를 남기며, 팀 안에서 풀 수 있는 문제를 바로 에스컬레이션하는 것은 이르다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 1,
  "q": "PMBOK 8판의 6개 원칙에 해당하지 않는 것은?",
  "c": [
   "Embed quality(품질 내재화)",
   "Optimize risk responses(위험 대응 최적화)",
   "Integrate sustainability(지속가능성 통합)",
   "Focus on value(가치 집중)"
  ],
  "a": 1,
  "e": "Optimize risk responses는 7판 12원칙 중 하나이고, 8판에서 위험은 성과영역 Risk로 다룬다. 나머지 셋은 8판 6원칙에 속한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 1,
  "q": "Which of the following is one of the six principles in the PMBOK Guide – Eighth Edition?",
  "c": [
   "Integrate sustainability",
   "Tailor based on context",
   "Enable change",
   "Navigate complexity"
  ],
  "a": 0,
  "e": "Integrate sustainability는 8판 원칙이다. Navigate complexity, Enable change, Tailor based on context는 모두 7판 12원칙의 이름이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "스폰서가 원가를 줄이려고 설계서의 에너지 효율 요구사항을 삭제하라고 요청했다. 이 요구사항은 규제 의무는 아니지만 조직의 ESG 목표와 연결돼 있다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "삭제 시 원가·장기 운영비·환경 영향과 조직 목표 정합성을 분석해 대안과 함께 스폰서와 검토한다",
   "윤리 위반으로 보고 PMI에 신고한다",
   "스폰서 요청이므로 즉시 요구사항을 삭제한다",
   "규제 의무가 아니므로 팀이 판단해 요구사항을 조용히 유지한다"
  ],
  "a": 0,
  "e": "지속가능성 통합 원칙과 '먼저 분석' 마인드셋에 따라 영향을 분석하고 대안을 들고 의사결정권자와 검토한다. 즉시 삭제는 분석이 빠졌고, 몰래 유지는 투명성 위반이며, PMI 신고는 과한 대응이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "모듈 A 팀이 성능을 높이려고 공용 인터페이스를 바꾸겠다고 한다. 변경은 A 팀 범위 안에서는 작다. 전체론적 관점(holistic view) 원칙에 따라 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "인터페이스를 쓰는 다른 모듈·운영·이해관계자에 미치는 연쇄 영향을 함께 분석한다",
   "다른 팀 일정을 미리 압축해 변경에 대비한다",
   "A 팀 범위 안의 일이므로 즉시 승인한다",
   "변경을 금지하고 원래 설계를 고수한다"
  ],
  "a": 0,
  "e": "전체론적 관점은 부분 변경이 시스템 전체에 주는 영향을 보라는 원칙이다. 즉시 승인은 영향 분석이 빠졌고, 사전 압축은 근거 없는 조치이며, 무조건 금지는 가치 있는 개선까지 막는다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "출시 2주 전, 팀이 '테스트는 출시 후 패치로 보완하자'고 제안했다. 프로젝트 관리자의 대응으로 가장 적절한 것은?",
  "c": [
   "일정을 지키기 위해 제안을 그대로 받아들인다",
   "팀에 야근을 지시해 모든 테스트를 마치게 한다",
   "품질·인수 기준을 다시 확인하고 범위 조정 등 품질을 지키는 대안을 팀·제품 책임자와 검토한다",
   "출시 여부 판단을 즉시 스폰서에게 넘긴다"
  ],
  "a": 2,
  "e": "품질 내재화 원칙에 따라 품질 기준을 희생하지 않는 대안(범위 조정 등)을 팀과 찾는다. 제안 수용은 품질 희생, 야근 지시는 지시형 리더십, 스폰서에게 즉시 넘기는 것은 분석 없는 에스컬레이션이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 1,
  "q": "프로젝트 관리자가 자신이 작성한 원가 추정에 계산 오류가 있어 예산이 8% 부족하다는 사실을 발견했다. 아직 아무도 모른다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "관리예비로 조용히 메우고 보고하지 않는다",
   "다음 분기 재추정 때 자연스럽게 반영한다",
   "오류를 인정하고 영향과 수정안을 정리해 스폰서와 관련 이해관계자에게 투명하게 보고한다",
   "추정을 도운 팀원의 실수로 보고한다"
  ],
  "a": 2,
  "e": "책임 있는 리더십과 윤리 강령(책임·정직)은 실수를 인정하고 바로잡을 것을 요구한다. 관리예비는 승인 없이 쓸 수 없고, 남 탓과 보고 지연은 모두 정직 위반이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "애자일 팀이 기술 설계 방식을 두고 프로젝트 관리자에게 '그냥 정해 달라'고 요청한다. 팀은 해당 기술 역량을 충분히 갖추고 있다. 프로젝트 관리자의 행동으로 가장 적절한 것은?",
  "c": [
   "경험에 비추어 프로젝트 관리자가 즉시 결정한다",
   "아키텍트에게 결정을 넘기고 팀은 따르게 한다",
   "결정을 다음 스프린트로 미룬다",
   "선택지와 판단 기준을 정리하도록 촉진하고 팀이 스스로 결정하도록 지원한다"
  ],
  "a": 3,
  "e": "권한 부여된 팀·문화 원칙에서 PM은 서번트 리더로서 팀의 결정을 촉진한다. PM이 대신 정하거나 외부에 넘기면 자기조직화를 약하게 만들고, 결정 연기는 장애를 키운다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 3,
  "q": "모든 요구사항을 일정·예산 안에 인도했지만 고객 사용률이 낮아 기대 편익이 나오지 않고 있다. 가치 집중 원칙에 비추어 프로젝트 관리자가 할 일은?",
  "c": [
   "계약 범위를 모두 인도했으므로 프로젝트를 종료한다",
   "사용자 교육 부족을 운영팀 책임으로 문서화한다",
   "추가 기능을 바로 개발해 사용률을 끌어올린다",
   "이해관계자와 성과 지표를 확인하고 편익 미실현 원인을 분석해 개선 방안을 제시한다"
  ],
  "a": 3,
  "e": "가치 집중 원칙은 산출물이 아니라 성과·편익 실현을 기준으로 본다. 그냥 종료하거나 책임을 넘기는 것은 가치를 외면하는 것이고, 원인 분석 없이 기능을 추가하는 것은 이르다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 3,
  "q": "PMBOK 8판 원칙에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "지속가능성 통합은 환경·사회·경제적 영향을 함께 고려하라는 뜻이다",
   "원칙은 실행 순서가 정해진 처방형 절차다",
   "품질 내재화는 검사보다 프로세스·산출물에 품질을 심는 것을 강조한다",
   "원칙은 행동과 판단을 안내하는 기준이다"
  ],
  "a": 1,
  "e": "원칙은 순서가 있는 절차가 아니라 판단 기준이다. 나머지 세 설명은 원칙의 성격과 지속가능성·품질 원칙의 뜻에 맞다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 3,
  "q": "공급사 선정 과정에서 최저가 업체에 하도급 노동 조건과 관련된 소송 이력이 있는 것이 확인됐다. 다음 중 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "조직의 조달 정책과 컴플라이언스 기준을 확인한다",
   "공표된 기준이 최저가이므로 다른 고려 없이 최저가 업체를 선정한다",
   "필요하면 조달·법무 부서와 함께 위험을 검토한다",
   "평가 기준에 지속가능성·사회적 책임 항목이 있는지 검토한다"
  ],
  "a": 1,
  "e": "지속가능성 통합·컴플라이언스(ECO III-2) 관점에서 사회적 위험을 무시하고 가격만 보는 것은 부적절하다. 나머지는 정책 확인·기준 검토·전문 부서 협업으로 적절한 행동이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "A project manager notices that the team regularly skips peer reviews to save time, and defect rates are rising. What should the project manager do first?",
  "c": [
   "Report the team members to their functional managers",
   "Add a separate inspection stage at the end of the project",
   "Accept the defects as the cost of delivering faster",
   "Discuss the impact of skipped reviews with the team and agree on how to build quality checks into the workflow"
  ],
  "a": 3,
  "e": "품질 내재화 원칙에 따라 팀과 함께 작업 흐름 안에 품질 활동을 다시 넣는다. 마지막 검사 단계 추가는 '검사로 품질 만들기', 기능 관리자 보고는 협업 없는 대응, 결함 수용은 품질 희생이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "애자일 팀 회고에서 클라우드 사용량이 급증해 비용과 탄소 배출이 함께 늘었다는 지표가 공유됐다. 팀 퍼실리테이터인 프로젝트 관리자가 할 일로 가장 적절한 것은?",
  "c": [
   "스폰서에게 예산 증액만 요청한다",
   "인프라팀 소관이므로 회고 논의에서 제외한다",
   "다음 릴리스까지 클라우드 사용을 전면 금지한다",
   "팀이 개선 항목을 도출해 백로그에 반영하도록 촉진한다"
  ],
  "a": 3,
  "e": "지속가능성 통합과 권한 부여 원칙에 따라 팀이 스스로 개선을 정하도록 돕는다. 전면 금지는 과하고, 논의 제외는 문제를 외면하며, 예산 증액만으로는 원인을 해결하지 못한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "A project manager learns that the planned system cutover date conflicts with the finance department's year-end closing. Which action is NOT appropriate for the project manager?",
  "c": [
   "Assess the impact of the conflict on both the project and operations",
   "Discuss alternative cutover windows with the finance department",
   "Update the risk register and schedule once a new date is agreed",
   "Proceed with the cutover as baselined without consulting the finance department"
  ],
  "a": 3,
  "e": "전체론적 관점에서는 프로젝트와 운영 양쪽 영향을 함께 봐야 한다. 재무 부서와 상의 없이 기준선대로 강행하는 것은 운영 위험을 무시하는 행동이다. 영향 분석, 대안 협의, 합의 후 문서 갱신은 적절하다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "사내 교육 자료에 PMBOK 8판 성과영역이 나열돼 있다. 프로젝트 관리자가 잘못 들어간 항목으로 수정해야 할 것은?",
  "c": [
   "Governance(거버넌스)",
   "Resources(자원)",
   "Uncertainty(불확실성)",
   "Finance(재무)"
  ],
  "a": 2,
  "e": "Uncertainty는 7판 성과영역 이름이고 8판에서는 Risk로 대응된다. Governance·Finance·Resources는 8판 7성과영역에 속한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "A sponsor asks the project manager to forecast funding needs, manage reserves, and track spending against expected benefits throughout the life cycle. In PMBOK Guide – Eighth Edition terms, which performance domain is the primary focus?",
  "c": [
   "Finance",
   "Measurement",
   "Delivery",
   "Planning"
  ],
  "a": 0,
  "e": "자금 필요 예측·예비비·지출 추적·편익은 8판 Finance 성과영역(ECO II-6)의 내용이다. Measurement·Delivery·Planning은 7판 성과영역 이름으로 8판 7영역에는 없다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 2,
  "q": "ECO 2026 Task와 PMBOK 8판 성과영역의 대응으로 가장 거리가 먼 것은?",
  "c": [
   "I-4 이해관계자 참여 — Stakeholders",
   "III-5 위험 계획·관리 — Risk",
   "III-1 거버넌스 정의·수립 — Schedule",
   "II-6 재무 계획·관리 — Finance"
  ],
  "a": 2,
  "e": "거버넌스 수립(III-1)은 Governance 성과영역에 대응한다. 나머지 셋은 Task 이름과 성과영역이 직접 대응한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 2,
  "q": "프로젝트 관리자가 승인할 수 있는 한도를 넘는 원가 증가가 예상된다. 영향 분석은 끝났다. 거버넌스 성과영역 관점에서 프로젝트 관리자의 다음 행동은?",
  "c": [
   "정해진 에스컬레이션 경로에 따라 분석 결과와 대안을 들고 변경통제위원회나 스폰서에 올린다",
   "팀 회의에서 다수결로 승인 여부를 정한다",
   "영향 분석이 끝났으므로 프로젝트 관리자가 직접 승인한다",
   "한도를 넘지 않도록 변경을 여러 건으로 나눠 처리한다"
  ],
  "a": 0,
  "e": "거버넌스는 결정 권한과 임계치를 정한다(ECO III-1). 권한을 넘으면 분석과 대안을 갖고 정해진 경로로 올린다. 직접 승인·쪼개기는 통제 회피이고, 팀 다수결은 권한 없는 결정이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 2,
  "q": "중간 점검에서 프로젝트가 편익 실현을 측정할 체계 없이 진행되고 있음을 발견했다. 재무·가치 관점에서 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "원가 기준선만 엄격히 통제한다",
   "스폰서·이해관계자와 편익 지표, 측정 시점과 책임을 정의해 측정 체계를 마련한다",
   "편익은 운영 단계 책임이므로 신경 쓰지 않는다",
   "프로젝트를 중단하고 비즈니스 케이스를 다시 작성한다"
  ],
  "a": 1,
  "e": "ECO II-3은 편익 추적 측정 체계가 있는지 확인하라고 한다. 운영에 미루거나 원가만 보는 것은 가치 관점이 빠졌고, 프로젝트 중단은 과한 대응이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 2,
  "q": "PMBOK 8판 성과영역에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "Risk 성과영역은 위협과 기회를 모두 다룬다",
   "성과영역은 서로 영향을 주고받으며 동시에 작동한다",
   "Governance가 독립 성과영역으로 제시된다",
   "성과영역은 정해진 순서대로 하나씩 끝낸 뒤 다음 영역으로 넘어간다"
  ],
  "a": 3,
  "e": "성과영역은 순차 단계가 아니라 서로 얽혀 동시에 작동하는 활동 묶음이다. 나머지는 8판 성과영역 구성과 위험 개념에 맞는 설명이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 3,
  "q": "팀원이 '8판에는 품질 성과영역이 없으니 이제 품질은 따로 신경 쓰지 않아도 된다'고 말한다. 프로젝트 관리자의 답변으로 가장 적절한 것은?",
  "c": [
   "품질은 PMO가 따로 감사하므로 팀은 관여하지 않는다",
   "품질은 'Embed quality' 원칙으로 모든 성과영역과 산출물에 걸쳐 반영해야 한다",
   "품질은 Risk 성과영역의 하위 활동으로만 다루면 된다",
   "맞다. 품질은 8판에서 제외됐으므로 고객 인수만 받으면 된다"
  ],
  "a": 1,
  "e": "8판에서 품질은 독립 성과영역이 아니라 원칙(품질 내재화)이라 전 영역에 걸쳐 적용된다. 제외됐다는 해석, Risk 하위로 축소, PMO 전담은 모두 원칙과 어긋난다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "핵심 개발자 2명이 다음 달 다른 프로젝트로 재배치될 예정이라는 소식을 기능 관리자에게서 들었다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "기능 관리자와 대체 인력·업무 이관 계획을 협의한다",
   "핵심 지식이 남도록 지식 이전 계획을 세운다",
   "재배치가 확정될 때까지 아무 조치 없이 기다린다",
   "일정·인도물에 미칠 영향을 분석한다"
  ],
  "a": 2,
  "e": "자원 성과영역(ECO II-4)과 선제적 행동 원칙에 따라 영향 분석·자원 소유자 협의·지식 이전(ECO I-7)을 바로 시작한다. 확정될 때까지 기다리는 것은 대응 시간을 잃는 수동적 행동이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 3,
  "q": "Midway through a hybrid project, a new regulatory affairs director joins the client organization and starts questioning approved requirements. What should the project manager do first?",
  "c": [
   "Escalate to the sponsor to limit the director's involvement",
   "Submit change requests for all of the director's comments",
   "Ignore the concerns because the requirements were already approved",
   "Analyze the new stakeholder's interests and influence and update the stakeholder engagement approach"
  ],
  "a": 3,
  "e": "새 이해관계자가 나타나면 먼저 관심·영향력을 분석하고 참여 방식을 갱신한다(ECO I-4). 참여를 막으려는 에스컬레이션이나 무시는 오답이고, 모든 의견을 바로 변경요청으로 올리는 것은 분석 전 행동이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "주요 오픈소스 라이브러리의 라이선스 정책이 바뀔 수 있다는 업계 보도가 나왔다. 프로젝트 관리자가 먼저 할 일은?",
  "c": [
   "법무팀에 소송 대비를 요청한다",
   "위험으로 식별해 확률·영향을 분석하고 위험 등록부에 반영한다",
   "라이브러리를 즉시 다른 제품으로 교체한다",
   "확정된 사실이 아니므로 무시한다"
  ],
  "a": 1,
  "e": "아직 일어나지 않은 불확실한 사건은 위험이다. 식별·분석해 등록부에 올리는 것이 Risk 성과영역(ECO III-5)의 첫 행동이다. 즉시 교체는 분석 전 행동, 무시는 선제 대응 실패, 소송 대비는 과한 대응이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 3,
  "q": "애자일 팀이 승인된 예산 범위 안에서 다음 릴리스의 범위를 조정하려 한다. 조직 거버넌스상 이 수준의 범위 조정은 제품 책임자(PO)의 권한이다. 프로젝트 관리자의 행동으로 가장 적절한 것은?",
  "c": [
   "스폰서 승인 전까지 범위 조정을 막는다",
   "프로젝트 관리자가 범위 조정안을 다시 검토해 최종 승인한다",
   "범위가 바뀌므로 변경통제위원회에 공식 변경요청을 제출하게 한다",
   "PO의 결정 권한을 존중하고 조정 결과가 이해관계자에게 투명하게 공유되도록 지원한다"
  ],
  "a": 3,
  "e": "거버넌스가 정한 권한 안이면 PO가 결정하고, PM은 투명성을 지원한다. 위임된 결정을 CCB나 PM·스폰서 승인으로 끌어올리면 거버넌스 구조를 무시하는 과한 통제가 된다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "PMO가 템플릿에 PMBOK 8판 Focus Area를 표기하려 한다. 잘못 들어간 항목은?",
  "c": [
   "Initiating(착수)",
   "Delivery(인도)",
   "Closing(종료)",
   "Monitoring and Controlling(감시·통제)"
  ],
  "a": 1,
  "e": "5 Focus Areas는 착수·기획·실행·감시통제·종료다. Delivery는 7판 성과영역 이름이다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 2,
  "q": "PMO가 '8판에 프로세스가 다시 들어왔으니 모든 프로젝트는 전 프로세스 산출물을 제출하라'고 공지했다. 소규모 내부 프로젝트를 맡은 프로젝트 관리자가 PMO에 제시할 근거로 가장 적절한 것은?",
  "c": [
   "프로세스 산출물은 인증 심사에만 필요하다",
   "8판 프로세스 지침은 비처방형이므로 프로젝트 맥락에 맞게 선택·테일러링해야 한다",
   "프로세스는 예측형 전용이라 내부 프로젝트에는 해당하지 않는다",
   "8판은 프로세스를 다시 폐지했으므로 공지는 무효다"
  ],
  "a": 1,
  "e": "8판 프로세스는 의무가 아닌 참고 지침이라 규모·위험에 맞게 테일러링한다. 폐지됐다는 주장, 예측형 전용, 인증 심사용이라는 주장은 모두 사실이 아니다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 2,
  "q": "Focus Area(6판의 프로세스 그룹에 해당)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "한 단계나 반복 안에서도 여러 Focus Area 활동이 반복될 수 있다",
   "착수는 프로젝트나 단계를 공식 승인받는 활동을 다룬다",
   "Focus Area는 프로젝트 생애주기 단계(phase)와 같은 개념이다",
   "종료는 프로젝트뿐 아니라 단계 종료에도 적용된다"
  ],
  "a": 2,
  "e": "Focus Area는 단계가 아니라 활동 묶음이라, 한 단계 안에서도 착수~종료가 반복될 수 있다. 나머지는 착수·종료의 성격에 맞는 설명이다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "예측형 프로젝트에서 스폰서가 헌장 승인 전에 상세 일정부터 만들어 달라고 요청했다. 프로젝트 관리자의 대응으로 가장 적절한 것은?",
  "c": [
   "요청대로 상세 일정을 먼저 확정한다",
   "헌장 없이 작업을 시작하고 나중에 소급 승인받는다",
   "목표·범위 개요·PM 권한을 담은 헌장 승인이 먼저 필요함을 설명하고 헌장 작성을 지원한다",
   "일정 수립을 거절하고 PMO에 보고한다"
  ],
  "a": 2,
  "e": "헌장은 프로젝트를 공식 승인하고 PM에게 권한을 주는 근거다. 헌장 없이 계획을 확정하거나 작업을 시작하면 근거가 없고, 거절 후 보고는 협업 없는 대응이다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "주간 성과 데이터에서 SPI가 3주 연속 떨어졌다. 감시·통제 관점에서 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "원인 분석 없이 일정 기준선을 현재 실적에 맞게 고친다",
   "편차의 근본원인을 분석한다",
   "기준선 변경이 필요하면 변경요청으로 공식 처리한다",
   "시정조치가 필요한지 팀과 검토한다"
  ],
  "a": 0,
  "e": "감시·통제는 편차 측정 → 원인 분석 → 시정조치 → 필요 시 변경요청 순으로 간다. 원인 분석 없이 기준선을 실적에 맞추면 편차를 숨기는 것이고 변경 통제도 거치지 않은 것이다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 2,
  "q": "고객이 최종 인도물을 인수했다. 팀원들은 다음 프로젝트로 바로 옮기길 원한다. 종료 관점에서 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "조달 계약과 재무를 마감한다",
   "인수가 끝났으므로 교훈 정리 없이 즉시 팀을 해산한다",
   "운영 이관 준비가 됐는지 확인한다",
   "최종 교훈과 회고 내용을 정리한다"
  ],
  "a": 1,
  "e": "ECO II-10은 교훈·회고·조달·재무·자원을 정리하고 이관 준비를 확인한 뒤 종료하라고 한다. 교훈 없이 바로 해산하면 조직 지식이 사라지고 종료 활동이 빠진다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "In the PMBOK Guide – Eighth Edition, the five focus areas are most similar to which concept from the Sixth Edition?",
  "c": [
   "Performance domains",
   "Process groups",
   "Development approaches",
   "Knowledge areas"
  ],
  "a": 1,
  "e": "착수~종료 5개 Focus Area는 6판의 5개 프로세스 그룹과 같은 틀이다. 지식영역은 10개 주제 분류, 성과영역은 7·8판 개념, 개발 접근법은 예측·적응·하이브리드 구분이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 1,
  "q": "PMBOK 7판의 성과영역이 아닌 것은?",
  "c": [
   "Measurement(측정)",
   "Governance(거버넌스)",
   "Team(팀)",
   "Uncertainty(불확실성)"
  ],
  "a": 1,
  "e": "7판 8성과영역은 Stakeholders·Team·Development Approach & Life Cycle·Planning·Project Work·Delivery·Measurement·Uncertainty다. Governance는 8판에서 성과영역 이름이 됐다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 1,
  "q": "PMBOK 7판 12원칙에 해당하지 않는 것은?",
  "c": [
   "Navigate complexity",
   "Integrate sustainability",
   "Be a diligent, respectful, and caring steward",
   "Embrace adaptability and resiliency"
  ],
  "a": 1,
  "e": "Integrate sustainability는 8판 원칙이다. 7판에서는 지속가능성이 Stewardship 원칙 안에서 다뤄졌다. 나머지 셋은 7판 원칙이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "PMO가 7판 기준으로 만든 교육 자료를 8판 체계로 옮기고 있다. 7판 Uncertainty(불확실성) 성과영역에 있던 위험·모호성·변동성 내용을 옮길 8판 성과영역으로 가장 적절한 것은(학습용 해석)?",
  "c": [
   "Governance(거버넌스)",
   "Stakeholders(이해관계자)",
   "Risk(위험)",
   "Finance(재무)"
  ],
  "a": 2,
  "e": "7판 불확실성 영역은 8판 Risk 성과영역에 대응하는 것으로 본다. 재무·이해관계자·거버넌스 영역도 위험과 관련되지만 불확실성 내용을 직접 받는 영역은 Risk다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "PMBOK 7판 12원칙과 8판 6원칙의 관계(학습용 해석)로 가장 적절하지 않은 것은?",
  "c": [
   "Quality 원칙은 8판 'Embed quality'로 이어진다",
   "Systems thinking·Complexity 원칙은 8판 '전체론적 관점'으로 묶어 볼 수 있다",
   "Stewardship의 책임·배려 개념은 8판 '책임 있는 리더십'과 '지속가능성 통합'으로 이어진다",
   "7판 'Focus on value' 원칙은 8판에서 삭제됐다"
  ],
  "a": 3,
  "e": "가치 집중(Focus on value)은 8판 6원칙에 그대로 남아 있다. 나머지는 일반적인 7↔8판 대응 해석이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "In the PMBOK Guide – Seventh Edition, which performance domain addresses selecting predictive, adaptive, or hybrid approaches and the cadence of delivery?",
  "c": [
   "Development Approach and Life Cycle",
   "Project Work",
   "Planning",
   "Delivery"
  ],
  "a": 0,
  "e": "개발 접근법과 인도 주기(cadence)·생애주기 단계는 7판 Development Approach and Life Cycle 영역의 주제다. Project Work는 프로세스·자원 관리, Delivery는 범위·품질 인도, Planning은 계획 수립이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 3,
  "q": "7판으로 공부해 온 PMP 응시자가 2026년 시험을 준비한다. 다음 중 학습 전략으로 가장 적절하지 않은 것은?",
  "c": [
   "8판에서 이름이 붙은 Governance·Finance 영역을 ECO Task와 연결해 학습한다",
   "상황형 문항은 PMI 마인드셋 원칙으로 판단하는 연습을 한다",
   "7판 원칙의 사고방식은 버리고 8판 프로세스 목록 암기에만 집중한다",
   "7판 원칙의 핵심 사고는 유지하면서 8판 6원칙으로 다시 묶는다"
  ],
  "a": 2,
  "e": "PMI는 핵심 원칙이 같다고 안내했고, 시험은 상황 판단 중심이다. 프로세스 목록 암기에만 매달리는 것은 부적절하며, 8판 40개 프로세스 목록은 원문 확인도 필요하다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "PMBOK 7판 'Uncertainty' 성과영역이 다루는 개념과 가장 거리가 먼 것은?",
  "c": [
   "자원 평준화(resource leveling)",
   "모호성(ambiguity)",
   "변동성(volatility)",
   "복잡성(complexity)"
  ],
  "a": 0,
  "e": "7판 불확실성 영역은 위험과 함께 모호성·복잡성·변동성을 다룬다. 자원 평준화는 일정·자원 관리 기법이다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "가치 인도 시스템에서 프로젝트 결과가 가치로 이어지는 순서로 옳은 것은?",
  "c": [
   "산출물(Output) → 성과(Outcome) → 편익(Benefit) → 가치(Value)",
   "성과(Outcome) → 산출물(Output) → 가치(Value) → 편익(Benefit)",
   "편익(Benefit) → 산출물(Output) → 성과(Outcome) → 가치(Value)",
   "산출물(Output) → 편익(Benefit) → 성과(Outcome) → 가치(Value)"
  ],
  "a": 0,
  "e": "인도물(산출물)이 변화(성과)를 만들고, 그 변화가 조직 이득(편익)이 되어 이해관계자 가치로 이어진다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "In the value delivery system, which component typically sustains and realizes benefits after the project transfers its deliverables?",
  "c": [
   "Project team",
   "Change control board",
   "Operations",
   "Procurement"
  ],
  "a": 2,
  "e": "프로젝트가 인도물을 이관하면 운영(Operations)이 이를 써서 편익을 지속적으로 만든다. 조달·프로젝트 팀·CCB는 편익을 지속하는 주체가 아니다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 2,
  "q": "가치 인도 시스템에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "포트폴리오·프로그램·프로젝트·운영이 함께 가치를 만든다",
   "거버넌스 체계가 의사결정과 감독을 지원한다",
   "전략은 아래로, 성과 정보는 다시 위로 흐른다",
   "프로젝트가 인도물을 완료하면 가치 실현도 끝난다"
  ],
  "a": 3,
  "e": "인도물 완료는 출발점일 뿐이고 편익은 운영 단계에서 실현·지속된다. 나머지는 가치 인도 시스템의 구성과 정보 흐름에 맞는 설명이다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 2,
  "q": "포트폴리오 검토에서 시장 변화 때문에 비즈니스 케이스의 핵심 전제가 더 이상 성립하지 않는다는 분석이 나왔다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?",
  "c": [
   "분석 결과를 스폰서·거버넌스 기구에 보고하고 지속·조정·중단 판단을 요청한다",
   "이미 착수 승인된 프로젝트이므로 계획대로 계속한다",
   "팀에 알리지 않고 종료 절차를 시작한다",
   "범위를 독자적으로 줄여 원가를 낮춘다"
  ],
  "a": 0,
  "e": "비즈니스 케이스 타당성 판단은 거버넌스의 몫이다. PM은 분석을 근거로 보고하고 결정을 요청한다. 무시하고 계속하거나 PM 혼자 범위를 줄이거나 종료하는 것은 권한을 벗어난다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "출시 후 측정해 보니 시스템은 사양대로 작동하지만 고객 이탈률이 줄지 않았다. 비즈니스 케이스의 목표는 이탈률 감소였다. 이 상황을 가장 정확하게 설명한 것은?",
  "c": [
   "범위 확인(Validate Scope)이 실패했다",
   "산출물(Output)은 인도됐지만 기대한 성과(Outcome)는 실현되지 않았다",
   "산출물에 결함이 있다",
   "편익은 실현됐지만 가치는 실현되지 않았다"
  ],
  "a": 1,
  "e": "사양대로 작동하므로 산출물은 문제가 없고, 목표한 변화(이탈률 감소)가 일어나지 않은 것이다. 결함·범위 확인 실패는 사실과 다르고, 이탈률이 그대로이니 편익도 실현되지 않았다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "프로젝트·프로그램·포트폴리오·운영에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "포트폴리오 — 전략 목표 달성을 위해 관리하는 프로젝트·프로그램·운영의 집합",
   "운영 — 계속 수행되며 인도물로 편익을 유지하는 활동",
   "프로젝트 — 고유한 제품·서비스·결과를 만드는 일시적 노력",
   "프로그램 — 고유한 산출물을 만드는 일시적 노력"
  ],
  "a": 3,
  "e": "고유한 산출물을 만드는 일시적 노력은 프로젝트의 정의다. 프로그램은 개별 관리로 얻기 어려운 편익을 위해 관련 프로젝트를 조율 관리하는 묶음이다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 3,
  "q": "하이브리드 프로젝트에서 첫 증분을 출시했다. 제품 책임자가 다음 증분의 우선순위를 정해야 한다. 가치 인도 관점에서 프로젝트 관리자가 지원할 일로 가장 적절한 것은?",
  "c": [
   "가장 큰 기능부터 개발하라고 팀에 지시한다",
   "모든 기능이 끝난 뒤 한 번에 편익을 측정한다",
   "원래 계획서 순서대로 다음 증분을 진행한다",
   "첫 증분의 사용 데이터와 피드백으로 실현된 성과를 측정해 백로그 우선순위에 반영하도록 돕는다"
  ],
  "a": 3,
  "e": "증분 인도의 장점은 실제 성과를 일찍 측정해 우선순위를 조정하는 것이다(ECO II-3). 계획 순서 고수와 일괄 측정은 피드백을 버리고, 크기 기준 지시는 가치 기준이 아니다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 3,
  "q": "Which of the following is NOT an example of an outcome?",
  "c": [
   "A completed software module that passed testing",
   "Increased employee adoption of the new process",
   "Fewer safety incidents on site",
   "Reduced customer wait time"
  ],
  "a": 0,
  "e": "테스트를 통과한 모듈은 인도물, 즉 산출물(Output)이다. 대기 시간 단축·사용 증가·사고 감소는 산출물로 생긴 변화인 성과(Outcome)다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "테일러링(Tailoring)의 의미로 옳은 것은?",
  "c": [
   "계약서 조항을 프로젝트마다 고쳐 쓰는 것",
   "표준 방법론을 빠짐없이 그대로 적용하는 것",
   "고객 취향에 맞춰 산출물 디자인을 바꾸는 것",
   "환경과 작업에 맞도록 접근법·거버넌스·프로세스를 의도적으로 조정하는 것"
  ],
  "a": 3,
  "e": "테일러링은 프로젝트 관리 방식 자체를 맥락에 맞게 조정하는 것이다. 그대로 적용은 테일러링의 반대이고, 디자인·계약 조항 수정은 관리 방식 조정과 다르다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "새 프로젝트를 맡은 프로젝트 관리자가 PMBOK 7판의 테일러링 절차를 따르려 한다. 가장 먼저 할 일은?",
  "c": [
   "초기 개발 접근법 선택",
   "지속적 개선 실행",
   "프로젝트에 맞게 테일러링",
   "조직에 맞게 테일러링"
  ],
  "a": 0,
  "e": "7판 테일러링은 초기 개발 접근법 선택 → 조직에 맞게 → 프로젝트에 맞게 → 지속적 개선 순서다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "PMO가 모든 프로젝트에 40쪽 분량의 표준 보고서 양식을 요구한다. 3개월짜리 소규모 내부 프로젝트를 맡은 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?",
  "c": [
   "줄이는 근거를 정리해 PMO와 협의한다",
   "프로젝트 규모·위험에 맞게 줄인 산출물 안을 마련한다",
   "PMO 양식을 무시하고 구두로만 보고한다",
   "거버넌스가 꼭 요구하는 보고 항목은 유지한다"
  ],
  "a": 2,
  "e": "테일러링은 조직 요구를 무시하는 것이 아니라 근거를 갖고 협의해 조정하는 것이다. 양식을 일방적으로 무시하면 거버넌스 위반이다. 나머지는 올바른 테일러링 행동이다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 3,
  "q": "모델·방법·산출물의 구분으로 옳지 않은 것은?",
  "c": [
   "Wideband Delphi — 방법(Method)",
   "프로젝트 헌장 — 산출물(Artifact)",
   "Tuckman 사다리 — 모델(Model)",
   "위험 등록부(Risk register) — 방법(Method)"
  ],
  "a": 3,
  "e": "위험 등록부는 정보를 기록하는 문서이므로 산출물이다. Tuckman은 팀 발달을 설명하는 모델, Wideband Delphi는 추정 방법, 헌장은 산출물이다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "In the PMBOK Guide, a 'model' is best described as:",
  "c": [
   "A means for achieving an outcome, output, result, or project deliverable",
   "A thinking strategy to explain a process, framework, or phenomenon",
   "A template, document, output, or project deliverable",
   "A mandatory process with defined inputs and outputs"
  ],
  "a": 1,
  "e": "모델은 현상·과정을 설명하는 사고 전략이다. 템플릿·문서는 산출물(artifact), 결과를 얻는 수단은 방법(method)이고, 의무 프로세스는 PMBOK 모델의 정의가 아니다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 2,
  "q": "Which of the following is an artifact?",
  "c": [
   "Affinity grouping",
   "Cynefin framework",
   "Product roadmap",
   "Monte Carlo simulation"
  ],
  "a": 2,
  "e": "제품 로드맵은 문서 형태의 산출물(artifact)이다. Cynefin은 복잡성 모델, 친화도 그룹화와 몬테카를로 시뮬레이션은 방법이다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 3,
  "q": "규제가 엄격한 의료기기 프로젝트에서 소프트웨어 팀은 스크럼을, 하드웨어 팀은 단계별 승인 방식을 원한다. 프로젝트 관리자의 접근으로 가장 적절한 것은?",
  "c": [
   "팀마다 원하는 방식을 쓰게 하고 통합은 마지막에 한다",
   "규제 승인 지점은 예측형 관문으로 두고 소프트웨어 개발은 반복형으로 운영하는 하이브리드를 팀과 설계한다",
   "규제 산업이므로 전 범위를 예측형으로 통일한다",
   "속도를 위해 규제 문서를 줄이고 전 범위를 스크럼으로 운영한다"
  ],
  "a": 1,
  "e": "테일러링은 구성요소별 특성에 맞게 접근법을 섞는 것이다(하이브리드 연속체). 예측형 통일은 소프트웨어의 이점을 버리고, 규제 문서 축소는 컴플라이언스 위반, 마지막 통합은 통합 위험을 키운다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 3,
  "q": "요구사항이 불명확하고 기술도 처음 써 봐서 원인과 결과를 미리 알기 어려운 상황이다. Cynefin 같은 복잡성 모델에 비추어 프로젝트 관리자의 접근으로 가장 적절한 것은?",
  "c": [
   "작은 실험을 반복해 배우고 결과에 따라 방향을 조정하는 적응형 접근을 쓴다",
   "전문가 한 명의 의견으로 모범 사례를 즉시 적용한다",
   "불확실성이 사라질 때까지 착수를 미룬다",
   "처음에 상세 계획을 확정하고 변경을 엄격히 통제한다"
  ],
  "a": 0,
  "e": "복잡(complex) 영역에서는 탐색-감지-대응으로 실험하며 배운다. 상세 계획 고정은 단순·난해(complicated) 영역의 방식이고, 모범 사례 즉시 적용도 단순 영역 방식이며, 착수 연기는 학습 기회를 놓친다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 2,
  "q": "테일러링 대상에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "생애주기와 개발 접근법을 조정할 수 있다",
   "프로세스와 이해관계자 참여 방식을 조정할 수 있다",
   "윤리·컴플라이언스 요구사항도 프로젝트 편의에 따라 생략할 수 있다",
   "도구·방법·산출물을 조정할 수 있다"
  ],
  "a": 2,
  "e": "윤리·법규·컴플라이언스는 테일러링으로 생략할 수 없다. 생애주기·접근법, 프로세스·참여, 도구·방법·산출물은 테일러링 대상이다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "PMI 윤리 및 직업 행동 강령의 4가지 가치에 해당하지 않는 것은?",
  "c": [
   "Fairness(공정)",
   "Respect(존중)",
   "Responsibility(책임)",
   "Efficiency(효율)"
  ],
  "a": 3,
  "e": "4가지 가치는 책임·존중·공정·정직(Honesty)이다. 효율은 강령의 가치가 아니다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "평가 중인 공급사의 영업 담당자가 프로젝트 관리자에게 비싼 공연 티켓을 보냈다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "평가에 영향을 주지 않으면 받아도 된다",
   "조직 정책에 따라 선물을 거절하거나 신고하고 이해충돌 가능성을 공개한다",
   "평가가 끝난 뒤에 받겠다고 답한다",
   "티켓을 팀원들에게 나눠 준다"
  ],
  "a": 1,
  "e": "공정(Fairness) 가치는 이해충돌을 적극 공개하라고 요구한다. 받거나 나눠 주거나 미뤄 받는 것은 모두 이해충돌을 만든다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "PMP 응시를 준비하는 동료가 경력 기간을 부풀려 신청한 사실을 확인했다. 프로젝트 관리자가 할 일로 가장 적절한 것은?",
  "c": [
   "팀 전체에 알려 경각심을 준다",
   "개인 문제이므로 관여하지 않는다",
   "사실에 근거해 PMI에 보고한다",
   "동료에게 비밀을 지켜 주겠다고 약속한다"
  ],
  "a": 2,
  "e": "윤리 강령은 비윤리 행위를 사실에 근거해 보고하라고 한다. 모른 척하거나 비밀을 약속하는 것은 위반을 묵인하는 것이고, 팀에 퍼뜨리는 것은 존중에 어긋난다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 2,
  "q": "스폰서가 경험이 전혀 없는 원자력 안전 인허가 업무까지 프로젝트 관리자에게 맡으라고 지시했다. 프로젝트 관리자의 대응으로 가장 적절한 것은?",
  "c": [
   "자신의 역량 한계를 솔직히 밝히고 전문가 지원·교육 같은 대안을 제안한다",
   "받아들인 뒤 문제가 생기면 보고한다",
   "업무를 거절하고 더 이상 논의하지 않는다",
   "경력에 도움이 되므로 그대로 받아들인다"
  ],
  "a": 0,
  "e": "책임(Responsibility) 가치는 역량에 맞는 업무만 맡고 부족한 부분은 밝히라고 한다. 그냥 수락은 안전 위험을 만들고, 일방 거절은 협업이 아니며, 문제 발생 후 보고는 늦다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 3,
  "q": "PMI 윤리 및 직업 행동 강령에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "각 가치는 열망 기준과 의무 기준으로 나뉜다",
   "강령은 PMI 회원에게만 적용되고 비회원 자격 보유자는 대상이 아니다",
   "정직 가치는 오해를 부르는 반쪽 진실도 금지한다",
   "이해충돌은 적극적으로 공개해야 한다"
  ],
  "a": 1,
  "e": "강령은 회원뿐 아니라 비회원 자격 보유자·신청자·자원봉사자에게도 적용된다. 나머지는 강령의 구조와 공정·정직 기준에 맞는 설명이다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "해외 고객사와 계약 전, 현지 파트너가 '담당자에게 수수료를 주는 것이 관행'이라고 조언했다. 프로젝트 관리자는 어떻게 해야 하는가?",
  "c": [
   "현지 문화를 존중해 소액이면 지급한다",
   "계약 금액에 포함해 공개적으로 지급한다",
   "현지 관행이라도 뇌물에 해당하면 거부하고 조직의 법무·컴플라이언스와 상의한다",
   "파트너 회사를 통해 간접적으로 지급한다"
  ],
  "a": 2,
  "e": "윤리 강령은 법규 준수와 뇌물 금지를 요구하며, 간접 지급도 같은 위반이다. 문화 존중은 위법 행위를 정당화하지 않는다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "A functional manager asks the project manager to hire the manager's nephew, who is less qualified than other candidates. Which value of the PMI Code of Ethics is most directly involved?",
  "c": [
   "Responsibility",
   "Honesty",
   "Fairness",
   "Respect"
  ],
  "a": 2,
  "e": "정실 채용(nepotism) 금지는 공정(Fairness)의 의무 기준이다. 존중·책임·정직도 관련될 수 있지만 가장 직접적인 가치는 공정이다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 2,
  "q": "회의 중에 고참 엔지니어가 신입 팀원의 의견을 반복해서 무시하고 비웃는다. 프로젝트 관리자는 무엇을 해야 하는가?",
  "c": [
   "인사팀에 즉시 징계를 요청한다",
   "신입에게 더 강하게 의견을 말하라고 조언만 한다",
   "회의 중에 공개적으로 엔지니어를 꾸짖는다",
   "회의 후 해당 엔지니어와 따로 대화해 행동의 영향을 짚고 팀 그라운드 룰을 다시 확인한다"
  ],
  "a": 3,
  "e": "존중(Respect) 가치와 갈등관리 원칙은 당사자와 직접·사적으로 대화하라고 한다. 공개 질책은 존중 위반이고, 신입에게만 조언하면 문제 행동이 그대로이며, 즉시 징계 요청은 과하다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 2,
  "q": "스폰서가 진행 보고서에서 '이사회에는 일정 지연 사실을 빼고 보고하라'고 요청했다. 프로젝트 관리자의 행동으로 가장 적절한 것은?",
  "c": [
   "스폰서 지시이므로 지연 사실을 빼고 보고한다",
   "정확한 현황과 회복 계획을 함께 보고하도록 스폰서를 설득한다",
   "지연을 '일부 조정 중'이라고만 모호하게 표현한다",
   "보고서를 내지 않고 다음 회의로 미룬다"
  ],
  "a": 1,
  "e": "정직(Honesty) 가치는 정확한 정보를 제때 주고 오도하는 표현을 금지한다. 누락·모호한 표현은 기만이고, 보고를 미루는 것은 책임 회피다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "원가성과지수(CPI)를 구하는 공식은?",
  "c": [
   "AC / EV",
   "EV / PV",
   "EV / AC",
   "EV − AC"
  ],
  "a": 2,
  "e": "CPI = EV ÷ AC 로, 쓴 돈 1달러당 얻은 작업 가치다. EV/PV는 SPI, EV − AC는 지수가 아닌 원가편차(CV)다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "Which formula calculates schedule variance (SV)?",
  "c": [
   "PV − EV",
   "EV − AC",
   "EV − PV",
   "EV / PV"
  ],
  "a": 2,
  "e": "SV = EV − PV 이며 음수면 일정 지연이다. EV − AC는 CV, EV/PV는 SPI다. EVM 공식은 항상 EV가 앞에 온다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "BAC가 $200,000인 6개월 프로젝트가 3개월 차에 계획 완료율 50%, 실제 완료율 40%이며 실제원가는 $90,000이다. 프로젝트 관리자가 보고할 CPI는 약 얼마인가?",
  "c": [
   "0.80",
   "1.13",
   "0.89",
   "0.90"
  ],
  "a": 2,
  "e": "EV = 200,000 × 40% = 80,000, CPI = 80,000 ÷ 90,000 ≈ 0.89. 0.80은 SPI(80,000 ÷ PV 100,000), 1.13은 AC/EV 로 분자·분모를 뒤집은 값이다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 2,
  "q": "월간 보고에서 CPI 1.1, SPI 0.85가 산출되었다. 이 상태에 대한 해석으로 옳지 않은 것은?",
  "c": [
   "쓴 원가 대비 작업 성과는 양호하다.",
   "계획보다 더 많은 작업을 완료했다.",
   "일정편차(SV)는 음수다.",
   "원가편차(CV)는 양수다."
  ],
  "a": 1,
  "e": "SPI 0.85는 계획한 작업(PV)의 85%만 완료했다는 뜻이므로 '계획보다 많이 완료' 는 틀렸다. CPI > 1 이면 CV 양수·원가 효율 양호, SPI < 1 이면 SV 음수다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 2,
  "q": "예측형 프로젝트의 주경로 작업에서 SPI가 0.82로 두 달 연속 하락했다. 스폰서가 다음 보고 전에 대책을 원한다. 프로젝트 관리자가 먼저 해야 할 일은?",
  "c": [
   "즉시 인력을 추가 투입해 주경로 활동을 압축(crashing)한다.",
   "지연의 근본원인과 완료일 영향을 분석하고 팀과 회복 옵션을 검토한다.",
   "스폰서에게 즉시 에스컬레이션해 일정 연장을 요청한다.",
   "일정 기준선을 현재 실적에 맞춰 조정한다."
  ],
  "a": 1,
  "e": "PMI 마인드셋은 '먼저 분석, 팀과 대응 옵션 검토' 다. 원인 분석 없이 crashing은 이르고, 에스컬레이션은 권한·임계치 초과 판단 후에 한다. 변경통제 없는 기준선 조정은 편차를 숨기는 행위다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "원가편차(CV)와 일정편차(SV)의 부호 해석으로 옳지 않은 것은?",
  "c": [
   "SV가 음수이면 원가가 예산을 초과한 상태다.",
   "CV가 음수이면 원가가 초과된 상태다.",
   "SV가 양수이면 일정이 계획보다 앞선 상태다.",
   "CV는 EV에서 AC를 뺀 값이다."
  ],
  "a": 0,
  "e": "SV(EV − PV)는 일정 지표이므로 음수는 일정 지연을 뜻한다. 원가 초과는 CV 음수로 판단한다. 나머지 설명은 모두 정의 그대로다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 3,
  "q": "EVM 지표 해석으로 옳지 않은 것은?",
  "c": [
   "CPI 0.9는 1달러를 써서 0.9달러어치 작업을 했다는 뜻이다.",
   "SV는 시간이 아니라 금액 단위로 표시된다.",
   "EV는 완료된 작업에 배정된 예산 가치다.",
   "SPI가 1이면 주경로 일정이 지켜지고 있음이 보장된다."
  ],
  "a": 3,
  "e": "SPI는 전체 작업을 합산한 값이라 비주경로 작업을 앞당기면 주경로가 늦어도 1 이상이 될 수 있고, 종료 시에는 항상 1로 수렴한다. 따라서 주경로 준수를 보장하지 않는다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "현재 PV $50,000, EV $50,000, AC $60,000 이다. 프로젝트 관리자가 운영위원회에 보고할 상태로 옳은 것은?",
  "c": [
   "일정과 원가 모두 계획대로다.",
   "일정이 $10,000 지연되었고 원가는 계획대로다.",
   "일정은 앞서 있고 원가는 $10,000 절감되었다.",
   "일정은 계획대로이며 원가는 $10,000 초과다."
  ],
  "a": 3,
  "e": "SV = 50,000 − 50,000 = 0(일정 정상), CV = 50,000 − 60,000 = −10,000(원가 초과). SPI 1.0, CPI 약 0.83 이다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 2,
  "q": "A project shows EV = $45,000, AC = $50,000, and PV = $40,000. Which statement best describes its status?",
  "c": [
   "Under budget and behind schedule",
   "Over budget and behind schedule",
   "Under budget and ahead of schedule",
   "Over budget and ahead of schedule"
  ],
  "a": 3,
  "e": "CPI = 45,000 ÷ 50,000 = 0.9(원가 초과), SPI = 45,000 ÷ 40,000 = 1.125(일정 앞섬). CV −5,000, SV +5,000 으로 부호가 서로 다르다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 3,
  "q": "BAC $400,000인 프로젝트의 현재 EV는 $100,000, AC는 $160,000 이며 PV 자료는 아직 집계되지 않았다. 이 자료로 내린 결론으로 옳지 않은 것은?",
  "c": [
   "작업은 25% 완료되었다.",
   "일정편차(SV)는 −$60,000 이다.",
   "예산은 40% 소진되었다.",
   "원가편차(CV)는 −$60,000 이다."
  ],
  "a": 1,
  "e": "SV = EV − PV 인데 PV가 없으므로 계산할 수 없다. %완료 = 100,000 ÷ 400,000 = 25%, %소진 = 160,000 ÷ 400,000 = 40%, CV = 100,000 − 160,000 = −60,000 은 모두 맞다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 1,
  "q": "In EVM, which formula calculates EAC when the current cost performance is expected to continue?",
  "c": [
   "BAC × CPI",
   "BAC / CPI",
   "AC + (BAC − EV)",
   "BAC − EV"
  ],
  "a": 1,
  "e": "현재 CPI가 지속된다는 가정의 EAC는 BAC ÷ CPI 다. BAC × CPI는 방향이 반대이고, AC + (BAC − EV)는 편차가 일회성일 때의 공식이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 1,
  "q": "BAC $100,000, EV $40,000, AC $50,000, PV $50,000 이다. 팀은 지금까지의 원가 효율이 프로젝트 끝까지 계속될 것으로 본다. 프로젝트 관리자가 산출할 EAC는?",
  "c": [
   "$110,000",
   "$143,750",
   "$125,000",
   "$80,000"
  ],
  "a": 2,
  "e": "CPI = 0.8, EAC = 100,000 ÷ 0.8 = 125,000. 110,000은 일회성 편차 공식, 143,750은 CPI×SPI 공식, 80,000은 BAC × CPI 를 잘못 쓴 값이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "BAC $100,000, EV $40,000, AC $50,000 이다. 원가 초과는 이미 해결된 장비 고장 한 건 때문이며 남은 작업은 원래 추정대로 진행될 것으로 판단된다. 적절한 EAC는?",
  "c": [
   "$110,000",
   "$125,000",
   "$143,750",
   "$100,000"
  ],
  "a": 0,
  "e": "편차가 일회성이면 EAC = AC + (BAC − EV) = 50,000 + 60,000 = 110,000. 125,000은 효율 지속 가정, 100,000은 이미 발생한 초과를 무시한 값이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 3,
  "q": "BAC $100,000, EV $40,000, AC $50,000, PV $50,000 이다. 원가와 일정 성과가 모두 남은 작업에 영향을 줄 것으로 예상된다. EAC는?",
  "c": [
   "$156,250",
   "$125,000",
   "$110,000",
   "$143,750"
  ],
  "a": 3,
  "e": "CPI 0.8 × SPI 0.8 = 0.64, EAC = 50,000 + 60,000 ÷ 0.64 = 50,000 + 93,750 = 143,750. 156,250은 BAC 전체를 0.64로 나눈 오류로, 이미 쓴 AC 부분까지 보정해 버린 값이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "BAC $100,000, EV $40,000, AC $50,000 인 상태에서 스폰서가 '원래 예산으로 끝낼 수 있는가' 를 묻는다. TCPI(BAC 기준)와 그 의미로 옳은 것은?",
  "c": [
   "0.83 — 남은 작업은 현재보다 덜 효율적이어도 된다.",
   "1.2 — 남은 작업에서 1달러당 1.2달러어치 성과를 내야 한다.",
   "1.2 — 현재 효율로도 예산 내 완료가 가능하다.",
   "0.8 — 남은 예산이 남은 작업보다 많다."
  ],
  "a": 1,
  "e": "TCPI = (100,000 − 40,000) ÷ (100,000 − 50,000) = 60,000 ÷ 50,000 = 1.2. 1보다 크므로 현재 CPI(0.8)보다 훨씬 높은 효율이 필요해 BAC 달성은 어렵다. 0.83은 분자·분모를 뒤집은 값이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 1,
  "q": "During a status review, the team discovers that the original cost estimates were fundamentally flawed. Which EAC approach should the project manager use?",
  "c": [
   "AC + bottom-up ETC",
   "BAC / CPI",
   "AC + (BAC − EV)",
   "AC + (BAC − EV) / (CPI × SPI)"
  ],
  "a": 0,
  "e": "원래 추정에 근본적 결함이 있으면 과거 성과 지수로 예측할 근거가 없으므로 남은 작업을 상향식으로 다시 추정한다(AC + Bottom-up ETC). 나머지는 기존 추정·성과를 전제로 한 공식이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "BAC $500,000, AC $200,000, 수정 EAC $550,000 인 프로젝트에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "VAC는 −$50,000 이다.",
   "TCPI(BAC 기준)를 계산하려면 EAC 값이 필요하다.",
   "ETC는 $350,000 이다.",
   "완료 시점에 예산 초과가 예상된다."
  ],
  "a": 1,
  "e": "TCPI(BAC) = (BAC − EV) ÷ (BAC − AC)로 EAC가 필요 없다(EAC는 TCPI(EAC)에 쓴다). VAC = 500,000 − 550,000 = −50,000, ETC = 550,000 − 200,000 = 350,000 은 맞다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "EVM 예측 지표에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "ETC는 EAC에서 AC를 뺀 값이다.",
   "VAC가 음수이면 완료 시 예산 초과가 예상된다.",
   "TCPI가 1보다 작으면 남은 작업을 지금보다 더 효율적으로 수행해야 한다.",
   "원래 추정에 결함이 있으면 상향식으로 ETC를 다시 추정한다."
  ],
  "a": 2,
  "e": "TCPI < 1 은 남은 예산이 남은 작업보다 넉넉해 효율을 낮춰도 된다는 뜻이다. 더 높은 효율이 필요한 쪽은 TCPI > 1 이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 3,
  "q": "현재 CPI는 0.85이고 TCPI(BAC 기준)는 1.45 로 산출되었다. 원가 편차가 조직의 승인 임계치를 넘었다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "편차 분석 결과와 수정 EAC를 근거로 변경 요청을 제기해 거버넌스의 결정을 받는다.",
   "팀에게 남은 작업에서 1.45의 원가 효율을 달성하도록 지시한다.",
   "관리예비를 PM 판단으로 사용해 편차를 메운다.",
   "다음 분기 실적이 나올 때까지 보고를 보류한다."
  ],
  "a": 0,
  "e": "CPI 0.85인 팀이 1.45를 달성하는 것은 비현실적이므로 현실적인 EAC를 근거로 변경통제 절차를 밟고, 임계치를 넘었으니 거버넌스에 올린다. 관리예비는 PM 단독 사용 대상이 아니고 보고 보류는 투명성 위반이다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 1,
  "q": "Which statement best describes the critical path?",
  "c": [
   "The shortest path through the network, which sets the earliest finish date",
   "The longest path through the network, which determines the shortest possible project duration",
   "The path that uses the most resources",
   "The path containing the most expensive activities"
  ],
  "a": 1,
  "e": "주경로는 네트워크에서 가장 긴 경로로, 그 길이가 프로젝트를 끝낼 수 있는 최단 기간이 된다. 자원량·비용과는 무관하다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 1,
  "q": "활동 A(3일, 선행 없음), B(4일, A 후), C(2일, A 후), D(5일, B 후), E(3일, C 후), F(2일, D·E 후)로 구성된 네트워크가 있다(ES 0 시작 관례). 프로젝트 기간은?",
  "c": [
   "10일",
   "14일",
   "19일",
   "12일"
  ],
  "a": 1,
  "e": "경로 A–B–D–F = 3+4+5+2 = 14, A–C–E–F = 3+2+3+2 = 10. 가장 긴 14일이 기간이다. 19일은 모든 활동 기간을 단순 합산한 오류다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "활동 A(3일, 선행 없음), B(4일, A 후), C(2일, A 후), D(5일, B 후), E(3일, C 후), F(2일, D·E 후)로 구성된 네트워크가 있다(ES 0 시작 관례). 계산 결과로 옳지 않은 것은?",
  "c": [
   "주경로는 A–B–D–F 다.",
   "활동 E의 총여유는 4일이다.",
   "활동 C의 최지개시일(LS)은 7일이다.",
   "활동 D의 최조개시일(ES)은 6일이다."
  ],
  "a": 3,
  "e": "D의 ES는 선행 B의 EF = 3 + 4 = 7일이다. E: ES 5, LS 9 → TF 4. C: LF = E의 LS 9, LS = 9 − 2 = 7 이므로 나머지는 맞다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 3,
  "q": "활동 A(3일, 선행 없음), B(4일, A 후), C(2일, A 후), D(5일, B 후), E(3일, C 후), F(2일, D·E 후)로 구성된 네트워크가 있다(ES 0 시작 관례). 활동 C의 자유여유(Free Float)는?",
  "c": [
   "0일",
   "4일",
   "2일",
   "7일"
  ],
  "a": 0,
  "e": "C의 EF = 5, 후속 E의 ES = 5 이므로 FF = 5 − 5 = 0. C의 총여유는 4일이지만 그 여유는 경로 C–E가 공유하며, C가 늦으면 E가 바로 밀린다. 7일은 C의 LS다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "활동 A(3일, 선행 없음), B(4일, A 후), C(2일, A 후), D(5일, B 후), E(3일, C 후), F(2일, D·E 후)로 구성된 네트워크가 있다(ES 0 시작 관례). 활동 E가 공급 지연으로 3일 늦어질 것이 확인되었다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "즉시 주경로 활동을 압축(crashing)해 3일을 만회한다.",
   "스폰서에게 완료일 지연을 에스컬레이션한다.",
   "E의 총여유(4일) 안이므로 완료일 영향이 없음을 확인하고 일정을 갱신해 모니터링한다.",
   "일정 기준선 변경 요청을 제출한다."
  ],
  "a": 2,
  "e": "E의 TF는 4일이라 3일 지연은 완료일(14일)에 영향을 주지 않는다. 먼저 영향을 분석해 보면 압축·에스컬레이션·기준선 변경은 모두 불필요하거나 과한 조치다. 다만 남은 여유가 1일뿐이므로 모니터링한다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "여유(Float)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "총여유는 LS − ES 또는 LF − EF로 구한다.",
   "자유여유는 후속 활동의 최조개시일을 늦추지 않는 범위의 여유다.",
   "강제 마감일이 계획 종료일보다 빠르면 음수 여유가 생길 수 있다.",
   "한 활동의 자유여유는 총여유보다 클 수 있다."
  ],
  "a": 3,
  "e": "자유여유는 항상 총여유 이하(FF ≤ TF)다. 후속 활동 ES를 지키는 조건이 완료일을 지키는 조건보다 엄격하기 때문이다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "프로젝트를 1일 단축해야 한다. 주경로 활동의 일일 압축 원가 기울기는 B $800, D $500, F $1,200 이고, 비주경로 활동 C는 $300 이다. 프로젝트 관리자가 압축할 활동은?",
  "c": [
   "C",
   "B",
   "F",
   "D"
  ],
  "a": 3,
  "e": "Crashing은 주경로 위 활동 중 원가 기울기가 가장 낮은 것부터 한다. C가 가장 싸지만 비주경로라 압축해도 완료일이 줄지 않는다. 주경로 중 최저는 D($500)다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "Which statement about schedule compression is NOT correct?",
  "c": [
   "Fast tracking performs activities in parallel that were planned in sequence.",
   "Fast tracking typically increases the risk of rework.",
   "Crashing adds resources and usually increases cost.",
   "Crashing should start with non-critical activities that have the lowest cost slope."
  ],
  "a": 3,
  "e": "압축은 주경로 활동에 해야 완료일이 줄어든다. 비주경로 활동을 압축하는 것은 원가만 쓰고 효과가 없다. Fast-tracking은 순차 활동 병행으로 재작업 위험이 늘고, Crashing은 자원 추가로 원가가 는다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 3,
  "q": "CPM 일정 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "주경로가 여러 개면 일정 위험이 커진다.",
   "자원 평준화(Leveling)는 주경로를 바꿀 수 있다.",
   "주경로 위 활동의 총여유는 언제나 0이다.",
   "자원 평활화(Smoothing)는 여유 범위 안에서만 조정한다."
  ],
  "a": 2,
  "e": "보통 0이지만 계획 종료일보다 앞선 강제 마감일이 있으면 주경로 여유가 음수가 된다. 따라서 '언제나 0' 은 틀렸다. 평준화는 완료일·주경로를 바꿀 수 있고 평활화는 그렇지 않다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 1,
  "q": "PERT(베타 분포) 3점 추정의 기대값 공식은?",
  "c": [
   "(O + M + P) / 3",
   "(O + 4M + P) / 6",
   "(P − O) / 6",
   "(O + 2M + P) / 4"
  ],
  "a": 1,
  "e": "베타 분포는 최빈값(M)에 가중치 4를 주고 6으로 나눈다. (O + M + P)/3은 삼각 분포, (P − O)/6은 표준편차다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 1,
  "q": "팀원이 한 활동의 기간을 낙관 4일, 최빈 6일, 비관 14일로 추정했다. 프로젝트 관리자가 PERT로 계산한 기대 기간은?",
  "c": [
   "8일",
   "7일",
   "6일",
   "9일"
  ],
  "a": 1,
  "e": "(4 + 4×6 + 14) ÷ 6 = 42 ÷ 6 = 7일. 8일은 삼각 분포 (4+6+14)/3, 9일은 낙관·비관의 단순 평균이다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 1,
  "q": "낙관 4일, 최빈 6일, 비관 14일인 활동의 PERT 표준편차는 약 얼마인가?",
  "c": [
   "3.33일",
   "2.78일",
   "10일",
   "1.67일"
  ],
  "a": 3,
  "e": "σ = (14 − 4) ÷ 6 ≈ 1.67. 2.78은 분산(σ²), 3.33은 3으로 나눈 오류, 10은 범위 그대로다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 2,
  "q": "주경로가 세 활동으로 이루어져 있고 각 활동의 표준편차는 2일, 1일, 2일이다. 활동이 서로 독립이라 할 때 프로젝트 관리자가 보고할 경로 표준편차는?",
  "c": [
   "3일",
   "5일",
   "9일",
   "1.67일"
  ],
  "a": 0,
  "e": "경로 분산 = 4 + 1 + 4 = 9, 경로 σ = √9 = 3. 5일은 표준편차를 단순 합산한 오류, 9일은 분산 자체다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 3,
  "q": "주경로의 PERT 기대 기간은 30일, 표준편차는 3일이다. 스폰서가 약 95% 신뢰 수준의 완료 기간 상한을 요청했다. 프로젝트 관리자가 제시할 값은?",
  "c": [
   "33일",
   "36일",
   "39일",
   "30일"
  ],
  "a": 1,
  "e": "±2σ ≈ 95.45% 이므로 30 + 2×3 = 36일. 33일은 1σ(약 68%), 39일은 3σ(약 99.73%), 30일은 기대값으로 약 50% 수준이다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 1,
  "q": "Using a triangular distribution, what is the expected duration for an activity with optimistic 6 days, most likely 9 days, and pessimistic 18 days?",
  "c": [
   "11 days",
   "10 days",
   "9 days",
   "12 days"
  ],
  "a": 0,
  "e": "삼각 분포 E = (6 + 9 + 18) ÷ 3 = 11일. 10일은 베타(PERT) 공식 (6 + 36 + 18)/6 의 값으로, 분포 지시를 놓친 함정이다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 3,
  "q": "3점 추정에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "베타 분포는 최빈값에 더 큰 가중치를 준다.",
   "독립 활동의 경로 분산은 활동 분산의 합이다.",
   "표준편차가 클수록 추정의 확실성이 높다.",
   "기대값 ±1σ 범위에 들어올 확률은 약 68%다."
  ],
  "a": 2,
  "e": "표준편차는 불확실성의 크기다. 낙관·비관 범위가 넓을수록 σ가 커지고 확실성은 낮아진다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 1,
  "q": "기대금전가치(EMV)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "EMV는 확률과 영향을 곱해 구한다.",
   "위협의 영향은 음수, 기회의 영향은 양수로 둔다.",
   "여러 위험의 EMV는 합산할 수 있다.",
   "EMV는 조직의 위험 성향(risk appetite)을 반영한 값이다."
  ],
  "a": 3,
  "e": "EMV는 위험 중립(risk-neutral)을 가정한 기대값이라 위험 회피·추구 성향은 반영하지 않는다. 나머지는 EMV 계산 규칙이다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "정량적 위험 분석에서 위협 A(30%, −$50,000), 위협 B(20%, −$20,000), 기회 C(25%, +$40,000)가 식별되었다. 프로젝트 관리자가 산출할 순 EMV는?",
  "c": [
   "−$19,000",
   "−$9,000",
   "−$29,000",
   "−$30,000"
  ],
  "a": 1,
  "e": "−15,000 − 4,000 + 10,000 = −9,000. −19,000은 기회를 빠뜨린 값, −29,000은 기회를 음수로 처리한 값, −30,000은 확률 없이 영향만 더한 값이다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "위험 등록부에 식별된 위협 두 건이 있다. 하나는 10% 확률에 $80,000 손실, 다른 하나는 40% 확률에 $10,000 손실이다. EMV로 우발예비를 산정할 때 금액은?",
  "c": [
   "$90,000",
   "$12,000",
   "$45,000",
   "$9,000"
  ],
  "a": 1,
  "e": "8,000 + 4,000 = 12,000. 90,000은 영향 단순 합, 45,000은 확률 합(50%)에 영향 합을 곱한 잘못된 계산이다. 우발예비는 식별 위험용으로 원가 기준선 안에 둔다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "자체 개발(Build)은 투자 $100,000에 수요 고(60%) 시 $300,000, 저(40%) 시 $120,000 의 수익이 예상된다. 구매(Buy)는 투자 $50,000에 고(60%) $200,000, 저(40%) $100,000 이다. 의사결정나무 분석 결과로 옳은 것은?",
  "c": [
   "구매, EMV $110,000",
   "자체 개발, EMV $228,000",
   "자체 개발, EMV $128,000",
   "구매, EMV $160,000"
  ],
  "a": 2,
  "e": "Build: 180,000 + 48,000 − 100,000 = 128,000. Buy: 120,000 + 40,000 − 50,000 = 110,000. 투자비를 빼야 하며, 228,000·160,000은 투자비를 빼지 않은 함정 값이다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 3,
  "q": "의사결정나무 분석에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "확률 노드에서 갈라지는 분기의 확률 합은 1이다.",
   "분기별 EMV를 비교할 때 초기 투자비는 매몰비용이므로 차감하지 않는다.",
   "결정 노드는 보통 사각형으로 표시한다.",
   "기회 대안 중에서는 순 EMV가 가장 큰 것을 고른다."
  ],
  "a": 1,
  "e": "초기 투자비는 아직 지출하지 않은 미래 원가라 매몰비용이 아니며, 각 대안의 기대 결과에서 반드시 차감한다. 매몰비용은 이미 지출해 회수 불가능한 원가다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 1,
  "q": "A risk has a 40% probability of occurring and would cause a cost impact of $25,000. What is its expected monetary value?",
  "c": [
   "−$15,000",
   "−$25,000",
   "−$10,000",
   "−$62,500"
  ],
  "a": 2,
  "e": "EMV = 0.4 × (−25,000) = −10,000. −15,000은 발생하지 않을 확률(60%)을 곱한 값, −62,500은 영향을 확률로 나눈 오류다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "위험 등록부에 계획된 대응이 있는 식별된 위험이 실제로 발생했다. 대응 비용은 $8,000 으로, 남아 있는 우발예비 범위 안이다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "관리예비 사용을 스폰서에게 요청한다.",
   "정량적 위험 분석을 처음부터 다시 수행한다.",
   "변경통제위원회에 원가 기준선 증액을 요청한다.",
   "위험 등록부의 계획된 대응을 실행하고 우발예비에서 비용을 충당한다."
  ],
  "a": 3,
  "e": "식별된 위험(known-unknowns)은 원가 기준선 안의 우발예비로 대응한다. 관리예비는 미식별 위험용이고, 범위 안 비용이라 기준선 증액이나 재분석은 과한 조치다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 1,
  "q": "프로젝트 관리자를 포함해 6명으로 구성된 팀의 의사소통 채널 수는?",
  "c": [
   "15",
   "30",
   "12",
   "36"
  ],
  "a": 0,
  "e": "6 × 5 ÷ 2 = 15. 30은 2로 나누지 않은 값, 36은 6²이다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 2,
  "q": "의사소통 채널 계산 결과로 옳지 않은 것은?",
  "c": [
   "5명 팀의 채널은 10개다.",
   "인원이 두 배가 되면 채널 수도 두 배가 된다.",
   "10명 팀의 채널은 45개다.",
   "4명 팀이 7명이 되면 채널은 15개 늘어난다."
  ],
  "a": 1,
  "e": "채널 = n(n − 1)/2 로 인원의 제곱에 비례해 늘어난다. 5명 10개 → 10명 45개로 4배 이상이다. 4명 6개 → 7명 21개로 15개 증가가 맞다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 1,
  "q": "A project team has 9 members plus the project manager. How many communication channels exist?",
  "c": [
   "45",
   "36",
   "90",
   "55"
  ],
  "a": 0,
  "e": "PM을 포함해 n = 10, 10 × 9 ÷ 2 = 45. 36은 PM을 빼고 9명으로 계산한 함정, 90은 2로 나누지 않은 값이다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 2,
  "q": "포트폴리오 위원회가 두 후보를 검토한다. A는 5년 사업으로 NPV $120,000, B는 3년 사업으로 NPV $95,000 이다. 재무 기준만으로 프로젝트 관리자가 권고할 대안은?",
  "c": [
   "B — 기간이 더 짧기 때문이다.",
   "B — 연평균 NPV가 더 크기 때문이다.",
   "판단 불가 — 할인율을 알아야 한다.",
   "A — NPV가 더 크기 때문이다."
  ],
  "a": 3,
  "e": "NPV는 이미 기간과 할인율을 반영한 값이므로 기간을 다시 고려하지 않고 큰 쪽을 고른다. NPV를 기간으로 나눠 비교하는 것은 잘못된 방식이다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 1,
  "q": "이자율 10%일 때 2년 뒤에 받을 $121,000의 현재가치(PV)는?",
  "c": [
   "$100,000",
   "$110,000",
   "$146,410",
   "$96,800"
  ],
  "a": 0,
  "e": "PV = 121,000 ÷ (1.1)² = 121,000 ÷ 1.21 = 100,000. 146,410은 현재가치가 아니라 미래가치를 한 번 더 복리로 늘린 값이다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 3,
  "q": "프로젝트 선정 재무 지표 해석으로 옳지 않은 것은?",
  "c": [
   "IRR이 높은 대안이 유리하다.",
   "회수기간이 짧은 대안이 유리하다.",
   "이미 투입된 매몰비용이 큰 프로젝트를 우선 계속한다.",
   "BCR이 1보다 크면 편익이 원가보다 크다."
  ],
  "a": 2,
  "e": "매몰비용은 회수할 수 없는 과거 지출이라 의사결정에서 무시한다. 앞으로의 편익과 원가로만 판단한다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 1,
  "q": "Which contract type places the greatest cost risk on the buyer?",
  "c": [
   "Cost Plus Fixed Fee (CPFF)",
   "Firm Fixed Price (FFP)",
   "Fixed Price Incentive Fee (FPIF)",
   "Time and Material (T&M)"
  ],
  "a": 0,
  "e": "원가정산형(CPFF)은 실제 원가를 모두 구매자가 보전하므로 구매자 위험이 가장 크다. 순서: CPFF > CPIF > T&M > FPIF > FFP."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 2,
  "q": "계약 유형별 위험에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "원가정산형 계약은 범위가 불확실한 연구개발에 적합하다.",
   "T&M 계약에는 상한(NTE) 조항을 두는 것이 좋다.",
   "FPIF 계약은 상한가로 구매자 부담을 제한한다.",
   "확정고정가(FFP) 계약에서는 원가 초과 위험을 구매자가 진다."
  ],
  "a": 3,
  "e": "FFP는 가격이 확정되어 원가 초과 위험을 판매자가 진다. 나머지는 계약 유형별 특성과 일치한다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 2,
  "q": "FPIF 계약의 목표원가 $100,000, 목표수수료 $10,000, 상한가 $120,000, 분담비율 80/20(구매자/판매자)이다. 구매 담당과 프로젝트 관리자가 확인할 총부담점(PTA)은?",
  "c": [
   "$112,500",
   "$150,000",
   "$120,000",
   "$110,000"
  ],
  "a": 0,
  "e": "PTA = (120,000 − 110,000) ÷ 0.8 + 100,000 = 112,500. 150,000은 판매자 분담률 0.2로 나눈 함정이다. 실제원가가 112,500을 넘으면 초과분은 판매자가 전부 부담한다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 3,
  "q": "목표원가 $100,000, 목표수수료 $10,000, 상한가 $120,000, 분담비율 80/20(구매자/판매자)인 FPIF 계약에서 실제원가가 $90,000 으로 마감되었다. 구매자가 지불할 총액은?",
  "c": [
   "$108,000",
   "$110,000",
   "$102,000",
   "$100,000"
  ],
  "a": 2,
  "e": "절감 10,000 중 판매자 몫 20% = 2,000 → 수수료 12,000, 지불액 90,000 + 12,000 = 102,000. 108,000은 판매자 몫을 80%로 잘못 적용한 값이다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 1,
  "q": "Under a CPFF contract, the estimated cost was $100,000 with a fixed fee of $8,000. Actual costs were $120,000. What is the total amount the buyer pays?",
  "c": [
   "$108,000",
   "$120,000",
   "$129,600",
   "$128,000"
  ],
  "a": 3,
  "e": "CPFF는 실제원가 + 고정 수수료 = 120,000 + 8,000 = 128,000. 수수료는 원가가 늘어도 고정이므로 129,600(원가의 8%로 재계산)은 틀렸다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 3,
  "q": "범위가 아직 확정되지 않은 상황에서 외부 전문 인력을 빠르게 투입하기 위해 T&M 계약을 맺으려 한다. 재무팀은 비용이 끝없이 늘어날 것을 우려한다. 프로젝트 관리자가 권고할 조치는?",
  "c": [
   "범위가 불확실하므로 CPFF 계약으로 변경한다.",
   "판매자에게 확정고정가(FFP)로 견적을 다시 요구한다.",
   "계약에 상한(Not-to-Exceed) 조항을 넣고 정기적으로 투입 시간을 검토한다.",
   "T&M 계약을 포기하고 범위가 확정될 때까지 착수를 미룬다."
  ],
  "a": 2,
  "e": "T&M의 구매자 위험은 NTE 상한과 정기 검토로 통제한다. CPFF는 구매자 위험이 더 크고, 범위 미확정 상태의 FFP는 판매자에게 과도한 위험 프리미엄을 낳으며, 착수 연기는 가치 인도를 늦춘다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 1,
  "q": "스프린트에서 팀이 30점을 약속했다. 스프린트 종료 시 24점은 DoD를 충족했고, 6점 스토리 하나는 90% 진행된 상태다. 이 스프린트의 벨로시티는?",
  "c": [
   "24점",
   "29.4점",
   "30점",
   "27점"
  ],
  "a": 0,
  "e": "벨로시티는 완료 정의(DoD)를 충족한 스토리만 센다. 부분 진행분(5.4점)을 인정한 29.4점이나 약속치 30점은 틀렸다. 미완료 스토리는 백로그로 돌아가 재추정·재우선순위화한다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 1,
  "q": "최근 세 스프린트의 벨로시티는 18, 22, 20점이고 남은 제품 백로그는 200점이다. 프로젝트 관리자가 예측할 남은 스프린트 수는?",
  "c": [
   "10 스프린트",
   "9 스프린트",
   "11 스프린트",
   "20 스프린트"
  ],
  "a": 0,
  "e": "평균 벨로시티 = 60 ÷ 3 = 20, 200 ÷ 20 = 10 스프린트. 2주 스프린트라면 약 20주이므로 '20' 은 주(週)와 스프린트를 혼동한 값이다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 1,
  "q": "A Kanban team has an average WIP of 12 items and a throughput of 3 items per day. According to Little's Law, what is the average cycle time?",
  "c": [
   "4 days",
   "36 days",
   "0.25 days",
   "9 days"
  ],
  "a": 0,
  "e": "Cycle time = WIP ÷ Throughput = 12 ÷ 3 = 4일. 36은 곱한 값, 0.25는 나눗셈을 뒤집은 값이다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 3,
  "q": "임원이 여러 애자일 팀의 벨로시티를 비교해 성과 순위를 발표하겠다고 한다. 프로젝트 관리자가 해야 할 일은?",
  "c": [
   "모든 팀의 스토리 포인트 기준을 통일해 순위를 산정한다.",
   "임원의 요청이므로 벨로시티 순위를 그대로 공개한다.",
   "스토리 포인트는 팀별 상대 척도라 비교에 부적합함을 설명하고 가치 인도 중심 지표를 제안한다.",
   "벨로시티가 낮은 팀에 다음 스프린트 목표를 높이도록 요구한다."
  ],
  "a": 2,
  "e": "벨로시티를 팀 간 비교·평가에 쓰면 포인트 부풀리기가 생기고 예측 도구로서 가치를 잃는다. 서번트 리더로서 이해관계자를 교육하고 가치·결과 중심 지표로 유도하는 것이 PMI 마인드셋이다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 2,
  "q": "남은 릴리스 백로그는 120점이고 팀의 벨로시티는 스프린트마다 15~20점 사이에서 움직인다. 제품 책임자가 출시 시점을 묻는다. 프로젝트 관리자가 할 답으로 가장 적절한 것은?",
  "c": [
   "최선의 경우인 6 스프린트로 출시일을 약속한다.",
   "팀에게 벨로시티를 25점으로 올리도록 요구해 5 스프린트로 맞춘다.",
   "약 6~8 스프린트가 걸릴 것으로 범위를 제시하고 매 스프린트 갱신한다.",
   "평균값인 7 스프린트를 확정 일정으로 공표한다."
  ],
  "a": 2,
  "e": "120 ÷ 20 = 6, 120 ÷ 15 = 8 이므로 6~8 스프린트 범위가 근거 있는 예측이다. 애자일 예측은 범위로 제시하고 실측 벨로시티로 갱신한다. 최선값 약속이나 벨로시티 강요는 오답이다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 2,
  "q": "애자일 지표 계산에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "Little's Law에 따라 WIP를 줄이면 사이클 타임이 짧아진다.",
   "스프린트 중 미완료 스토리는 진행률만큼 포인트를 벨로시티에 반영한다.",
   "리드 타임은 사이클 타임을 포함한다.",
   "잔여 스프린트 수는 잔여 포인트를 평균 벨로시티로 나눠 구한다."
  ],
  "a": 1,
  "e": "벨로시티는 DoD를 충족한 스토리 포인트만 센다. 진행률 반영은 '거의 다 됨' 을 완료로 착각하게 만든다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 2,
  "q": "팀이 한 활동을 낙관 4일, 최빈 6일, 비관 14일로 추정했다. 이 추정의 계산 결과로 옳지 않은 것은?",
  "c": [
   "베타 분포의 표준편차는 약 3.33일이다.",
   "베타(PERT) 기대값은 7일이다.",
   "삼각 분포 기대값은 8일이다.",
   "베타 분포의 분산은 약 2.78이다."
  ],
  "a": 0,
  "e": "σ = (14 − 4) ÷ 6 ≈ 1.67일이며, 3.33일은 3으로 나눈 오류다. 기대값 42/6 = 7, 삼각 24/3 = 8, 분산 1.67² ≈ 2.78 은 맞다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 3,
  "q": "FPIF(고정가 인센티브 수수료) 계약에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "실제원가가 PTA를 넘으면 초과분은 판매자가 모두 부담한다.",
   "실제원가가 목표원가보다 낮으면 판매자의 수수료가 늘어난다.",
   "구매자의 지불액은 상한가를 넘지 않는다.",
   "실제원가가 늘어날수록 판매자의 수수료도 늘어난다."
  ],
  "a": 3,
  "e": "FPIF에서 원가 초과분은 분담비율만큼 판매자 수수료에서 깎이므로 원가가 늘수록 수수료는 줄어든다. 원가가 늘수록 수수료가 느는 구조는 CPPC(원가 비율 수수료)다."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO 2026의 도메인 비중은 People 33%, Process 41%, Business Environment 26%이다.",
  "a": true,
  "e": "2026-07-09 시행 ECO 2026의 공식 비중이다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO 2026의 Task는 총 35개다.",
  "a": false,
  "e": "26개(8 + 10 + 8)다. 35개는 2021 ECO의 Task 수다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "ECO의 Enabler는 Task 수행에 필요한 행동을 빠짐없이 나열한 목록이다.",
  "a": false,
  "e": "Enabler는 예시적(illustrative)이며 망라적이지 않다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "ECO 2026에서 위험 계획·관리는 Business Environment 도메인의 Task다.",
  "a": true,
  "e": "III-5 Plan and manage risk로 BE 소속이다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "개발 접근법(예측형·애자일·하이브리드)은 3개 도메인 전체에 분산되어 출제된다.",
  "a": true,
  "e": "접근법은 특정 도메인·Task에 국한되지 않는다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 3,
  "q": "'위험이 이슈가 되는 시점 인식' Enabler는 III-5 위험 계획·관리 Task에 속한다.",
  "a": false,
  "e": "III-4 Remove impediments and manage issues에 속한다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO는 직무 Task 기반 문서이며 PMBOK 가이드와 내용이 완전히 같지는 않다.",
  "a": true,
  "e": "ECO는 직무분석 기반, PMBOK은 지식·원칙 기반이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "2026 PMP 시험은 180문항, 240분이다.",
  "a": true,
  "e": "채점 170 + pretest 10, 240분이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "180문항이 모두 점수에 반영된다.",
  "a": false,
  "e": "10문항은 비채점 사전시험(pretest)이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "첫 번째 10분 휴식은 사례연구 섹션이 끝난 뒤 주어진다.",
  "a": true,
  "e": "두 번째 휴식은 독립 문항 구간의 대략 중간이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "휴식이 끝난 뒤에도 이전 섹션 문항을 다시 검토할 수 있다.",
  "a": false,
  "e": "휴식을 시작하면 이전 섹션으로 돌아갈 수 없다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "Hotspot(Point and Click)과 Pull-down List는 CBT 전용 문항 유형이다.",
  "a": true,
  "e": "Matching·Enhanced Matching과 함께 CBT 전용이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "빈칸 채우기(Fill-in-the-blank)는 ECO 2026 공식 문항 유형 목록에 포함되어 있다.",
  "a": false,
  "e": "2026 공식 8유형에 없다. NEW 유형은 Case/Scenario와 Graphic-Based다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "학사 학위 소지자는 최근 10년 내 36개월의 프로젝트 리딩 경력이 필요하다.",
  "a": true,
  "e": "고졸 60, 전문학사 48, 학사 36, GAC 학위 24개월이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "같은 달에 두 프로젝트를 동시에 이끌었다면 경력 2개월로 계산한다.",
  "a": false,
  "e": "경력은 월 단위 비중복으로 계산하므로 1개월이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "유효한 CAPM 보유자는 35시간 교육 요건을 면제받는다.",
  "a": true,
  "e": "CAPM 보유자만 35시간이 면제된다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 3,
  "q": "2026-12-01 이후에는 자기주도 온디맨드 과정도 ATP가 제공한 것만 인정된다.",
  "a": false,
  "e": "ATP 등으로 제한되는 것은 강사 진행 라이브 교육이며, 자기주도 과정은 기관과 무관하게 인정된다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "PMP 합격 점수(컷)는 공식적으로 공개되지 않는다.",
  "a": true,
  "e": "결과는 합격/불합격 + 도메인 진단으로만 제공된다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "한국어 OPT(온라인 감독 시험)를 선택하면 ATA가 감독하며 주말에 월 수회 시행된다.",
  "a": true,
  "e": "한국·일본 현지어 OPT 특례다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 1,
  "q": "2021 ECO의 Business Environment 비중은 8%였다.",
  "a": true,
  "e": "2021은 People 42 / Process 50 / BE 8이었다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "2026 ECO에서 변경 관리·통제는 Process 도메인에 남아 있다.",
  "a": false,
  "e": "III-3 Manage and control changes로 BE로 이동했다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "2026 ECO에서 일정 계획·관리는 Process 도메인의 Task다.",
  "a": true,
  "e": "II-8 Plan and manage schedule이다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "ECO 2026은 프로젝트 성공을 일정·예산·범위 준수로 좁혀 정의했다.",
  "a": false,
  "e": "이해관계자 가치·원하는 성과 달성으로 넓혔다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 1,
  "q": "ECO 2026 직무분석에는 AI와 지속가능성 트렌드가 입력으로 사용되었다.",
  "a": true,
  "e": "ECO 서문에 명시되어 있다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 3,
  "q": "2021 People의 'Remove impediments'는 2026에서 People의 팀 리딩 Task에 흡수되었다.",
  "a": false,
  "e": "BE III-4로 이동해 이슈 관리와 결합되었다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "Agile Practice Guide 2판은 'backlog grooming' 대신 'backlog refinement'를 쓴다.",
  "a": true,
  "e": "daily standup도 daily coordination meeting으로 바꿨다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "상황형 문항에서 정답은 대개 행동 전에 영향·근본원인을 분석하는 보기다.",
  "a": true,
  "e": "PMI 샘플 문항의 공통 패턴이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "예측형 프로젝트에서 영향이 작은 변경은 PM이 단독 승인해 바로 반영하는 것이 바람직하다.",
  "a": false,
  "e": "기준선 영향 변경은 통합변경통제(CCB) 절차를 거친다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "애자일 프로젝트에서 새 요구사항은 제품 백로그에 추가하고 PO가 우선순위를 정한다.",
  "a": true,
  "e": "진행 중 반복의 범위는 보호한다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "팀원 간 갈등은 PM이 신속히 결론을 정해 통보하는 것이 PMI가 기대하는 기본 방식이다.",
  "a": false,
  "e": "당사자와 직접·사적으로 만나 협업·문제해결로 다루는 것이 기본이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "에스컬레이션은 PM 권한·임계치를 넘을 때, 분석과 대안을 갖고 하는 것이 바람직하다.",
  "a": true,
  "e": "ECO III-1의 에스컬레이션 경로·임계치와 연결된다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "안전 규정 위반을 발견해도 '먼저 분석' 원칙에 따라 일정 영향 분석을 마친 뒤 조치한다.",
  "a": false,
  "e": "안전·윤리·법규는 타협 불가 — 중단·보고가 먼저다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "식별된 위험이 발생하면 위험등록부의 계획된 대응을 실행한다.",
  "a": true,
  "e": "계획 먼저 참조 원칙이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "서번트 리더인 PM은 팀의 장애를 팀 스스로 해결하도록 맡기는 것이 원칙이다.",
  "a": false,
  "e": "PM이 장애를 제거해 팀이 일에 집중하게 한다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "교훈(lessons learned)은 프로젝트 종료 시점에만 수집한다.",
  "a": false,
  "e": "프로젝트 전 기간에 상시 기록·적용하고 OPA를 갱신한다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "프로젝트의 '일시적'이란 기간이 짧다는 뜻이다.",
  "a": false,
  "e": "명확한 시작과 끝이 있다는 뜻이며 기간 길이와 무관하다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "포트폴리오 구성요소는 서로 관련되거나 의존하지 않아도 된다.",
  "a": true,
  "e": "관련성이 필수인 것은 프로그램이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "Directive PMO는 프로젝트를 직접 관리하며 통제 수준이 가장 높다.",
  "a": true,
  "e": "Supportive < Controlling < Directive 순이다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "기능 조직(Functional)에서 PM의 권한이 가장 크다.",
  "a": false,
  "e": "PM 권한은 프로젝트 조직(Projectized)에서 가장 크다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 3,
  "q": "과거 프로젝트의 교훈 저장소는 기업 환경 요인(EEF)이다.",
  "a": false,
  "e": "조직 내부 자산이므로 OPA다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 1,
  "q": "애자일은 반복형과 증분형의 특성을 함께 가진다.",
  "a": true,
  "e": "반복하며 다듬고 자주 작게 인도한다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "증분형 생애주기의 주요 목표는 원가 관리다.",
  "a": false,
  "e": "증분형의 목표는 속도, 원가 관리는 예측형의 목표다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "규제가 엄격한 산업에서도 하이브리드 접근을 적용할 수 있다.",
  "a": true,
  "e": "규제 요구를 준수 산출물로 반영하며 테일러링한다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "Agile Practice Guide 2판은 하이브리드를 예측형과 애자일 중 하나를 고르는 이분법으로 본다.",
  "a": false,
  "e": "delivery continuum(연속체)으로 본다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 3,
  "q": "개발 접근법은 PM이 단독으로 결정해 팀에 통보하는 것이 ECO의 기대다.",
  "a": false,
  "e": "ECO II-1은 요구·복잡도를 평가해 접근법을 '권고'하고 이해관계자와 합의하도록 한다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "ECO 2026 People 도메인의 첫 Task 는 '공동 비전 수립(Develop a common vision)'이다.",
  "a": true,
  "e": "2026 ECO 에서 I-1 로 새로 들어온 Task 다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "공동 비전은 착수 때 스폰서가 승인하면 프로젝트 종료까지 바꾸지 않는 것이 원칙이다.",
  "a": false,
  "e": "ECO I-1 Enabler 'Keep the vision current' — 목표가 바뀌면 갱신하고 다시 공유한다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "서번트 리더는 팀이 스스로 해결하기 어려운 장애를 제거하는 것을 중요한 역할로 삼는다.",
  "a": true,
  "e": "장애 제거·보호·코칭이 서번트 리더의 핵심 행동이다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "Hersey–Blanchard 모형에서 역량이 낮은 신입 구성원에게는 위임형(Delegating) 스타일이 가장 적합하다.",
  "a": false,
  "e": "역량이 낮으면 지시형(Directing)으로 시작하고, 역량·의지가 모두 높을 때 위임한다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "RACI 차트에서 Accountable 은 활동마다 정확히 한 명에게 배정한다.",
  "a": true,
  "e": "A 가 여러 명이면 최종 책임이 흐려진다. Responsible 은 여러 명일 수 있다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 3,
  "q": "거래적 리더십은 목표 달성과 보상을 교환하고 예외에 의한 관리를 사용한다.",
  "a": true,
  "e": "비전·영감으로 동기를 부여하는 것은 변혁적 리더십이다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "Tuckman 모형에서 격동기(Storming)는 규범기(Norming)보다 먼저 온다.",
  "a": true,
  "e": "형성 → 격동 → 규범 → 수행 → 해산 순서다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "수행기에 도달한 팀은 팀원이 바뀌어도 이전 단계로 돌아가지 않는다.",
  "a": false,
  "e": "구성원 변화나 큰 변경이 생기면 형성·격동 단계로 되돌아갈 수 있다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "Herzberg 이론에서 급여는 동기요인(Motivator)이다.",
  "a": false,
  "e": "급여는 위생요인으로, 부족하면 불만을 일으키지만 충분해도 동기를 만들지는 못한다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 3,
  "q": "Vroom 의 기대이론에서 수단성(Instrumentality)은 성과를 내면 보상이 따를 것이라는 믿음이다.",
  "a": true,
  "e": "기대는 노력→성과, 수단성은 성과→보상, 유의성은 보상의 가치다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "X·Y 이론과 Z 이론은 모두 McGregor 가 제시했다.",
  "a": false,
  "e": "X·Y 는 McGregor, Z 는 Ouchi 의 이론이다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "팀 헌장은 팀이 함께 작성해야 그라운드룰에 대한 주인의식과 준수가 높아진다.",
  "a": true,
  "e": "PM 이 혼자 작성해 배포하면 수용도가 떨어진다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 3,
  "q": "코칭은 장기적인 경력 성장을, 멘토링은 특정 과제의 단기 성과 향상을 주로 다룬다.",
  "a": false,
  "e": "반대다. 코칭은 특정 역량·성과 중심의 단기 활동, 멘토링은 경험자의 장기적 성장 지원이다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 1,
  "q": "타협(Compromise)은 양측이 모두 완전히 만족하는 Win-Win 해결 방식이다.",
  "a": false,
  "e": "타협은 양측이 일부씩 양보하는 절충이다. Win-Win 은 협업/문제해결이다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "안전 규정 위반이 걸린 긴급 결정에서는 강요/지시(Force) 방식이 적절할 수 있다.",
  "a": true,
  "e": "긴급·안전·법규 상황은 강요가 정당한 대표적 경우다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "팀원 간 갈등이 생기면 프로젝트 관리자는 즉시 기능 관리자에게 보고하는 것이 첫 행동이다.",
  "a": false,
  "e": "먼저 당사자와 직접·사적으로 원인과 맥락을 파악하고 협업 해결을 시도한다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 1,
  "q": "BATNA 는 협상이 결렬될 때 선택할 수 있는 최선의 대안을 뜻한다.",
  "a": true,
  "e": "BATNA 가 강할수록 협상력이 커진다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "원칙적 협상은 이해관계(interest)보다 처음 제시한 입장(position)을 지키는 데 초점을 둔다.",
  "a": false,
  "e": "원칙적 협상은 입장이 아니라 이해관계에 초점을 둔다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 3,
  "q": "ECO I-2 는 갈등관리 원칙을 팀뿐 아니라 외부 이해관계자와도 공유하도록 한다.",
  "a": true,
  "e": "Enabler 'Communicate conflict management principles with the team and external stakeholders'."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "권력은 낮고 관심이 높은 이해관계자에게는 정보 제공(Keep informed) 전략을 쓴다.",
  "a": true,
  "e": "권력↑관심↓ 은 만족 유지, 권력↓관심↑ 은 정보 제공이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "현저성 모형(Salience model)의 세 속성은 권력·관심·영향이다.",
  "a": false,
  "e": "권력·긴급성·정당성이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "참여평가매트릭스에서 C 는 현재 참여 수준, D 는 원하는 참여 수준을 뜻한다.",
  "a": true,
  "e": "C(Current)와 D(Desired)의 격차를 줄이는 전략을 세운다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "범위 기준선이 승인된 뒤 새로 발견된 이해관계자는 다음 프로젝트에서 다루는 것이 원칙이다.",
  "a": false,
  "e": "식별은 프로젝트 전 기간 지속된다. 즉시 등록·분석하고 요구는 변경통제나 백로그로 다룬다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 3,
  "q": "참여 수준에서 '중립(Neutral)'은 '저항(Resistant)'보다 낮은 단계이다.",
  "a": false,
  "e": "Unaware → Resistant → Neutral → Supportive → Leading 이므로 중립이 저항보다 높다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "ECO I-5 기대 정렬 Task 의 Enabler 에는 멘토링 기회를 조직하고 실행하는 것이 포함된다.",
  "a": true,
  "e": "'Organize and act on mentoring opportunities' 가 I-5 Enabler 다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "일정·원가 지표가 모두 계획 범위 안이면 고객 만족도 하락은 대응할 필요가 없다.",
  "a": false,
  "e": "ECO 2026 은 성공을 이해관계자 가치·성과로 넓혔고 I-6 은 만족도 모니터링과 대응을 요구한다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 1,
  "q": "내부 고객도 고객 기대 관리(I-6)의 대상이다.",
  "a": true,
  "e": "I-6 은 내부·외부 고객 기대를 모두 다룬다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "이해관계자가 팀원에게 직접 작은 기능 추가를 요청하면, 팀원이 바로 반영하는 것이 고객 만족에 가장 좋다.",
  "a": false,
  "e": "범위 크리프다. 이해관계자와 직접 만나 요청 경로(백로그·변경통제)를 설명한다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 1,
  "q": "암묵지는 경험·감각·노하우처럼 문서로 표현하기 어려운 지식이다.",
  "a": true,
  "e": "형식지는 문서·데이터로 표현할 수 있는 지식이다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 2,
  "q": "교훈 등록부는 프로젝트 종료 회의에서 한 번 작성하는 문서이다.",
  "a": false,
  "e": "프로젝트 내내 수시로 기록하고 종료 시 OPA 로 이관한다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 2,
  "q": "SECI 모형에서 암묵지를 형식지로 바꾸는 과정은 표출화(Externalization)이다.",
  "a": true,
  "e": "사회화(암→암), 표출화(암→형), 연결화(형→형), 내면화(형→암)."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 2,
  "q": "잡 섀도잉과 페어 작업은 암묵지 이전에 효과적인 방법이다.",
  "a": true,
  "e": "암묵지는 사람 간 상호작용으로 전해진다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "의사소통 채널 수 공식은 n(n − 1) / 2 이다.",
  "a": true,
  "e": "n 은 PM 을 포함한 인원이다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 3,
  "q": "인원이 5명에서 6명으로 늘면 의사소통 채널은 1개 늘어난다.",
  "a": false,
  "e": "5명은 10개, 6명은 15개이므로 5개 늘어난다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "인트라넷과 지식 저장소는 푸시(Push) 의사소통의 예이다.",
  "a": false,
  "e": "수신자가 필요할 때 접근하는 풀(Pull) 방식이다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 3,
  "q": "의사소통 모델에서 수신자의 확인(Acknowledge)은 메시지 내용에 동의한다는 뜻이다.",
  "a": false,
  "e": "확인은 메시지를 받았다는 뜻일 뿐 동의를 의미하지 않는다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 2,
  "q": "상호작용(Interactive) 의사소통은 오해를 해소하는 데 가장 효과적인 방법이다.",
  "a": true,
  "e": "실시간 다방향이라 즉시 질문·확인이 가능하다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "델파이 기법은 전문가 의견을 익명으로 반복 수렴해 합의에 이른다.",
  "a": true,
  "e": "익명성으로 권위자 영향과 집단사고를 줄인다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 2,
  "q": "최다득표(Plurality)는 과반(50% 초과)의 지지를 얻은 안을 택하는 방식이다.",
  "a": false,
  "e": "과반은 다수결(Majority)이다. 최다득표는 과반이 아니어도 가장 많은 표를 얻은 안이다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 2,
  "q": "약한 매트릭스 조직의 프로젝트 관리자는 공식 권한보다 관계·전문성에 기반한 영향력이 더 효과적이다.",
  "a": true,
  "e": "합법적·보상적 권력이 약하므로 전문가·준거 권력에 의존한다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "기술적 전문성은 감성지능의 구성요소이다.",
  "a": false,
  "e": "감성지능은 자기 인식·자기 관리·사회적 인식·관계 관리로 구성된다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 3,
  "q": "Roman voting 에서 엄지를 옆으로 든 것은 제안을 받아들일 수 있다는 뜻이다.",
  "a": true,
  "e": "위는 지지, 옆은 수용 가능(중립), 아래는 반대다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 1,
  "q": "프로젝트 헌장은 스폰서(또는 착수자)가 발행하며 PM에게 조직 자원을 사용할 권한을 부여한다.",
  "a": true,
  "e": "헌장의 핵심 기능은 공식 승인과 PM 권한 부여다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 1,
  "q": "프로젝트 관리계획서는 프로젝트의 존재를 공식 승인하는 문서다.",
  "a": false,
  "e": "공식 승인은 헌장의 역할이다. 관리계획서는 실행·감시·통제 방법을 다룬다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "성과측정기준선(PMB)은 범위·일정·원가 기준선을 통합한 것이다.",
  "a": true,
  "e": "PMB는 세 기준선의 통합이며 관리 예비비는 포함하지 않는다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "승인된 기준선은 PM이 판단하면 변경 요청 없이 수정할 수 있다.",
  "a": false,
  "e": "기준선 변경은 공식 변경통제 승인을 거쳐야 한다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "ECO 2026은 개발 접근법(예측형·적응형·하이브리드)을 권고하는 것을 Process 도메인 Task II-1의 Enabler로 포함한다.",
  "a": true,
  "e": "II-1 Enabler: Recommend a project management development approach."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 3,
  "q": "PMI 관점에서 하이브리드는 예측형과 애자일 중 하나를 고르는 이분법이 아니라 연속체(continuum)로 본다.",
  "a": true,
  "e": "Agile Practice Guide 2판은 하이브리드를 delivery continuum으로 설명한다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "범위 기준선은 프로젝트 범위 기술서, WBS, WBS 사전으로 구성된다.",
  "a": true,
  "e": "세 가지가 승인된 범위 기준선이다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "WBS의 최하위 수준 요소는 일정 활동(activity)이다.",
  "a": false,
  "e": "최하위는 작업 패키지다. 활동은 일정 관리에서 작업 패키지를 분해해 만든다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "범위 확인(Validate Scope)은 고객이나 스폰서가 인도물을 공식적으로 인수하는 과정이다.",
  "a": true,
  "e": "정확성 검사(QC) 후 공식 인수가 범위 확인이다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "고객이 좋아할 만한 기능을 팀이 자발적으로 추가하는 금도금(Gold Plating)은 PMI가 권장하는 가치 제공 방식이다.",
  "a": false,
  "e": "금도금은 원가·위험 증가와 기대 왜곡을 일으키므로 지양한다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "요구사항 추적 매트릭스(RTM)는 요구사항을 비즈니스 목표와 인도물·테스트에 연결해 누락을 방지한다.",
  "a": true,
  "e": "RTM은 요구의 생애주기를 추적한다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 3,
  "q": "명목집단기법(Nominal Group Technique)은 투표 없이 아이디어를 범주별로 묶는 기법이다.",
  "a": false,
  "e": "명목집단기법은 브레인스토밍 후 투표로 순위를 정한다. 범주별로 묶는 것은 친화도(Affinity Diagram)다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "선후행 도형법(PDM)에서 가장 흔히 쓰이는 관계는 FS(Finish-to-Start)이다.",
  "a": true,
  "e": "FS가 가장 흔하고 SF가 가장 드물다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "주경로(Critical Path)는 네트워크에서 가장 짧은 경로다.",
  "a": false,
  "e": "주경로는 가장 긴 경로이며 프로젝트의 최단 가능 기간을 결정한다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "공정 압축(Crashing)은 일반적으로 원가를 증가시킨다.",
  "a": true,
  "e": "자원 추가(초과근무·인력 투입)로 기간을 줄이므로 원가가 늘어난다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "공정 중첩(Fast-tracking)의 주된 대가는 원가 증가이며 재작업 위험은 줄어든다.",
  "a": false,
  "e": "Fast-tracking은 병행으로 위험·재작업이 증가한다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "자원 평활화(Smoothing)는 활동의 여유(float) 범위 안에서만 조정하므로 종료일이 바뀌지 않는다.",
  "a": true,
  "e": "종료일·주경로를 바꿀 수 있는 것은 평준화(Leveling)다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "자유 여유(Free Float)는 프로젝트 종료일을 지연시키지 않고 활동을 늦출 수 있는 시간이다.",
  "a": false,
  "e": "그것은 총 여유다. 자유 여유는 후행 활동의 조기 시작(ES)을 늦추지 않는 여유다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 3,
  "q": "공정 중첩을 검토할 때는 임의(Discretionary) 의존관계가 우선 검토 대상이다.",
  "a": true,
  "e": "선호에 따른 순서이므로 병행 가능성을 먼저 본다. 필수 의존관계는 병행할 수 없다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 3,
  "q": "마일스톤은 일정 활동이므로 일정 기간(duration)을 갖는다.",
  "a": false,
  "e": "마일스톤은 중요한 시점으로 기간이 0이다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 1,
  "q": "관리 예비비(Management Reserve)는 원가 기준선에 포함된다.",
  "a": false,
  "e": "관리 예비비는 기준선 밖·예산 안이다. 원가 기준선에는 우발 예비비가 포함된다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 1,
  "q": "우발 예비비는 식별된 위험(known-unknowns)에 대비한다.",
  "a": true,
  "e": "미식별 위험은 관리 예비비가 담당한다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "상향식 추정은 유사 추정보다 일반적으로 정확하지만 시간과 비용이 더 든다.",
  "a": true,
  "e": "작업 패키지 단위 상세 추정을 합산하기 때문이다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "프로젝트 선정 시 이미 지출한 매몰 비용은 중요한 의사결정 요소다.",
  "a": false,
  "e": "매몰 비용은 회수할 수 없으므로 의사결정에서 무시한다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "자금 한도 조정(Funding Limit Reconciliation)은 기간별 자금 한도에 맞춰 작업 일정을 재조정하는 것이다.",
  "a": true,
  "e": "지출을 평탄화하기 위해 일정을 조정한다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 3,
  "q": "EVM에서 BAC는 관리 예비비를 포함한 프로젝트 예산 총액이다.",
  "a": false,
  "e": "BAC는 원가 기준선(PMB) 총액이며 관리 예비비는 포함하지 않는다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 1,
  "q": "품질 감사(Quality Audit)는 품질 관리(Manage Quality)의 도구다.",
  "a": true,
  "e": "프로세스 점검·개선 활동이므로 Manage Quality에 속한다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 1,
  "q": "제품 리콜·보증 수리 비용은 내부 실패 비용이다.",
  "a": false,
  "e": "출하 후 발생하는 리콜·보증은 외부 실패 비용이다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "관리도의 관리 한계는 고객이 요구하는 규격 한계와 같다.",
  "a": false,
  "e": "관리 한계는 프로세스 데이터(보통 ±3σ)로 계산하고, 규격 한계는 고객 요구다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "등급(Grade)이 낮아도 요구사항을 충족하면 품질 문제가 아니다.",
  "a": true,
  "e": "낮은 등급은 문제가 아니지만 낮은 품질은 항상 문제다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "평균선 한쪽에 연속 7개 점이 찍히면 관리 한계 안이라도 프로세스 이상 여부를 조사한다.",
  "a": true,
  "e": "Rule of Seven — 비무작위 패턴이다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 3,
  "q": "정밀도(Precision)가 높으면 정확도(Accuracy)도 반드시 높다.",
  "a": false,
  "e": "반복 측정이 일관돼도 참값에서 벗어날 수 있다. 둘은 독립적인 개념이다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 1,
  "q": "RACI 차트에서 각 작업의 Accountable은 한 명만 지정한다.",
  "a": true,
  "e": "최종 책임자가 여럿이면 책임이 흐려진다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 2,
  "q": "자원 평준화(Leveling)는 주경로와 프로젝트 종료일을 바꿀 수 있다.",
  "a": true,
  "e": "자원 제약을 우선하므로 일정이 늘어날 수 있다."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 2,
  "q": "매트릭스 조직에서 기능 부서 인력을 확보할 때는 PM이 해당 인력에게 직접 지시하는 것이 원칙이다.",
  "a": false,
  "e": "매트릭스 조직에서는 기능 관리자와 협상해 확보한다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 1,
  "q": "원가정산(Cost-Reimbursable) 계약은 구매자가 원가 위험을 더 많이 부담한다.",
  "a": true,
  "e": "판매자 원가를 보전하므로 구매자 위험이 크다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 1,
  "q": "RFQ(견적 요청서)는 복잡한 요구에 대한 해결책 제안을 요청할 때 사용한다.",
  "a": false,
  "e": "해결책 제안은 RFP다. RFQ는 명확한 사양에 대한 가격 견적이다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "입찰자 회의는 모든 잠재 판매자에게 동일한 정보를 제공해 공정성을 확보한다.",
  "a": true,
  "e": "특정 판매자에게만 정보를 주면 공정성 위반이다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "의향서(Letter of Intent)는 법적 구속력을 갖는 계약이다.",
  "a": false,
  "e": "의향서는 계약 의사를 밝힐 뿐 계약이 아니다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 3,
  "q": "클레임은 협상으로 먼저 해결을 시도하고, 실패하면 조정·중재 같은 대체 분쟁 해결(ADR)을 활용한다.",
  "a": true,
  "e": "소송은 최후 수단이다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 1,
  "q": "PM을 포함한 인원이 5명이면 의사소통 채널은 10개다.",
  "a": true,
  "e": "5 × 4 / 2 = 10."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "끌어오기(Pull) 의사소통은 오해나 갈등을 신속히 해소하는 데 가장 적합하다.",
  "a": false,
  "e": "오해·갈등 해소에는 상호작용형이 적합하다. Pull은 대량 정보·다수 수신자용이다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "조기 종료(취소)된 프로젝트도 종료 절차를 수행해야 한다.",
  "a": true,
  "e": "인도 현황 문서화·교훈·조달·재무·자원 종료를 수행한다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 3,
  "q": "교훈(Lessons Learned)은 팀을 해산한 뒤 종료 보고서 작성 시 한 번에 수집하는 것이 효율적이다.",
  "a": false,
  "e": "교훈은 전 기간 기록하고, 팀 해산 전에 최종 정리해야 지식이 유실되지 않는다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 1,
  "q": "애자일 선언은 2001년 17명의 소프트웨어 실무자가 발표했다.",
  "a": true,
  "e": "2001년 스노버드 모임에서 17명이 발표했다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 1,
  "q": "애자일 선언은 포괄적인 문서와 계획을 가치 없는 것으로 보고 작성하지 말 것을 권한다.",
  "a": false,
  "e": "오른쪽 항목에도 가치가 있으며 왼쪽을 더 가치 있게 여길 뿐이다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "애자일 원칙은 개발 후반부의 요구사항 변경도 환영한다.",
  "a": true,
  "e": "12원칙 2번 — 고객의 경쟁우위를 위해 변화를 활용한다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "증분형 생애주기의 주된 목표는 시제품 피드백을 통한 해법의 정확성 향상이다.",
  "a": false,
  "e": "정확성은 반복형의 목표다. 증분형은 완성된 조각을 자주 인도하는 속도가 목표다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "Agile principles state that the most efficient and effective method of conveying information is face-to-face conversation.",
  "a": true,
  "e": "12원칙은 팀 안팎의 가장 효율적인 소통 방법으로 대면 대화를 든다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 3,
  "q": "마감을 맞추기 위한 장기간의 상시 초과근무는 애자일의 '지속 가능한 속도' 원칙과 충돌하지 않는다.",
  "a": false,
  "e": "지속 가능한 속도는 일정한 페이스를 무기한 유지하는 것이다. 상시 초과근무는 원칙 위반이다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "Scrum Guide 2020에서 스프린트 길이는 1개월 이하이다.",
  "a": true,
  "e": "스프린트는 1개월 이하의 일정한 길이로 운영한다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "Product Owner는 여러 명으로 구성된 위원회가 맡을 수 있다.",
  "a": false,
  "e": "PO는 한 사람이다. 여러 사람의 요구를 대변할 수는 있지만 위원회가 아니다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "Daily Scrum에서 반드시 '어제 한 일·오늘 할 일·장애' 3가지 질문을 사용해야 한다.",
  "a": false,
  "e": "2020판에서는 3질문이 필수가 아니다. Developers가 원하는 구조를 선택한다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "Increment의 확약(commitment)은 Definition of Done이다.",
  "a": true,
  "e": "Product Backlog–Product Goal, Sprint Backlog–Sprint Goal, Increment–DoD."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "Only the Scrum Master can cancel a Sprint.",
  "a": false,
  "e": "스프린트 취소 권한은 Product Owner에게만 있다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 3,
  "q": "Sprint Review는 PO가 증분을 승인하는 공식 인수 회의이므로 이해관계자 피드백으로 Product Backlog를 바꾸지 않는다.",
  "a": false,
  "e": "Sprint Review의 목적은 증분 점검과 Product Backlog 적응이다. 단순 승인 회의가 아니다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "스크럼 마스터는 Developers에게 작업을 할당하는 역할을 맡지 않는다.",
  "a": true,
  "e": "Sprint Backlog 계획은 Developers가 하며 SM은 코칭·촉진·장애 제거를 맡는다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 1,
  "q": "칸반은 용량이 생길 때 작업을 끌어오는 당김(pull) 시스템이다.",
  "a": true,
  "e": "푸시가 아니라 다음 단계 여유에 맞춰 당긴다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "리틀의 법칙에 따르면 처리량이 같을 때 WIP를 줄이면 평균 사이클 타임이 줄어든다.",
  "a": true,
  "e": "사이클 타임 = WIP ÷ 처리량이므로 WIP가 줄면 사이클 타임도 준다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "칸반에서 병목 단계가 생기면 그 앞 단계의 WIP 한도를 올려 대기 작업을 늘리는 것이 바람직하다.",
  "a": false,
  "e": "WIP 상향은 대기열만 늘린다. 병목 완료를 돕고 상류 착수를 억제한다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "TDD는 기능 코드를 먼저 작성하고 나중에 테스트 코드를 보완하는 방식이다.",
  "a": false,
  "e": "TDD는 실패하는 테스트를 먼저 쓰고 이를 통과하는 코드를 작성한 뒤 리팩터링한다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 1,
  "q": "Lead time is generally longer than or equal to cycle time.",
  "a": true,
  "e": "리드 타임은 요청부터 인도까지, 사이클 타임은 착수부터 완료까지라 리드 타임이 이를 포함한다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 3,
  "q": "린의 '결정 연기(defer commitment)'는 의사결정을 무기한 미루라는 뜻이다.",
  "a": false,
  "e": "정보가 충분히 모이는 '마지막 책임 있는 순간'까지 되돌리기 어려운 결정을 미루라는 뜻이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 1,
  "q": "INVEST의 S는 Small, T는 Testable을 뜻한다.",
  "a": true,
  "e": "Independent·Negotiable·Valuable·Estimable·Small·Testable."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "Product Backlog의 순서(우선순위) 결정 책임은 Developers에게 있다.",
  "a": false,
  "e": "순서 결정은 PO의 책임이다. Developers는 크기 추정과 기술 의견을 제공한다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "MoSCoW의 W는 'Won't have this time'으로, 이번 범위에서 제외하되 나중에 다시 고려할 수 있다.",
  "a": true,
  "e": "영구 배제가 아니라 이번 기간에 하지 않는다는 뜻이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "기술 계층(UI·DB·API)별로 스토리를 나누는 수평 분할이 수직 분할보다 가치 인도에 유리하다.",
  "a": false,
  "e": "수평 조각은 단독 가치가 없다. 사용자 가치를 주는 수직 분할이 권장된다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 3,
  "q": "WSJF에서는 지연비용(CoD)이 가장 큰 항목을 항상 먼저 수행한다.",
  "a": false,
  "e": "WSJF = CoD ÷ 작업 크기다. CoD가 커도 크기가 크면 순위가 밀린다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 1,
  "q": "The Agile Practice Guide, Second Edition uses the term 'backlog refinement' instead of 'backlog grooming'.",
  "a": true,
  "e": "APG 2판은 refinement로 용어를 통일했다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 1,
  "q": "스토리 포인트는 작업의 상대적 크기를 나타내며 시간 단위가 아니다.",
  "a": true,
  "e": "노력·복잡성·불확실성을 합친 상대 크기다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "속도(velocity)가 높은 팀이 더 생산적이므로 팀 간 속도 비교는 성과 관리에 유용하다.",
  "a": false,
  "e": "포인트 기준이 팀마다 달라 비교가 무의미하며 포인트 인플레이션을 부른다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "잔여 백로그 200점, 평균 속도 40점이면 남은 스프린트는 5회로 예측한다.",
  "a": true,
  "e": "200 ÷ 40 = 5."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "플래닝 포커는 팀원이 차례로 추정치를 말해 앞사람 값을 참고하도록 한다.",
  "a": false,
  "e": "앵커링을 막기 위해 카드를 동시에 공개한다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 3,
  "q": "90% 완료된 스토리는 다음 스프린트 계획의 정확성을 위해 해당 비율만큼 이번 속도에 포함한다.",
  "a": false,
  "e": "DoD를 충족한 스토리만 센다. 미완료 스토리는 백로그로 돌아가 재추정한다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "Capacity for an upcoming iteration should account for planned vacations and training.",
  "a": true,
  "e": "용량은 다음 반복의 가용 역량이므로 휴가·교육을 반영한다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 1,
  "q": "MVP는 가설을 검증하고 학습하기 위한 최소 제품이다.",
  "a": true,
  "e": "린 스타트업의 Build-Measure-Learn 사이클의 출발점이다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 2,
  "q": "MMF는 학습을 위해 만들고 버려도 되는 실험용 제품을 말한다.",
  "a": false,
  "e": "그것은 MVP의 성격이다. MMF는 고객이 가치를 인지하는 최소 출시 기능이다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 2,
  "q": "ECO 2026은 프로젝트 성공을 일정·예산 준수에서 이해관계자 가치·성과 달성으로 넓혀 정의한다.",
  "a": true,
  "e": "ECO 서문이 PMI 보고서를 인용해 성공 정의를 확장했다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 2,
  "q": "편익 측정 체계는 프로젝트 종료 후 운영 조직이 정하면 되므로 프로젝트 기간에는 확인할 필요가 없다.",
  "a": false,
  "e": "ECO II-3은 편익 추적 측정 체계가 마련되었는지 확인하라고 명시한다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 3,
  "q": "범위·일정·원가를 모두 지켰다면 사용자 채택이 저조해도 프로젝트는 성공으로 보고하는 것이 원칙이다.",
  "a": false,
  "e": "가치·성과 중심 성공 정의에 따라 채택 저조 원인을 분석하고 대응해야 한다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 1,
  "q": "APG 2판은 daily standup 대신 daily coordination meeting이라는 용어를 쓴다.",
  "a": true,
  "e": "조정(coordination)에 초점을 둔 용어로 바꿨다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "하이브리드 접근은 한 프로젝트 안에서 구성요소별로 예측형과 적응형을 섞어 쓸 수 있다.",
  "a": true,
  "e": "예: 하드웨어는 예측형, 소프트웨어는 반복형."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "테일러링이란 팀이 번거롭다고 느끼는 이벤트와 산출물을 제거하는 것을 말한다.",
  "a": false,
  "e": "목적을 유지하면서 방식을 조정하고 효과를 회고로 점검하는 것이다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 3,
  "q": "커네빈(Cynefin) 프레임워크에서 복잡(Complex) 영역은 '탐색 → 감지 → 대응' 방식이 적합하다.",
  "a": true,
  "e": "인과가 사후에야 보이므로 안전한 실험(탐색)으로 학습한다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "Scrum of Scrums is a coordination technique in which representatives of multiple teams meet to manage dependencies.",
  "a": true,
  "e": "여러 팀 대표가 모여 팀 간 의존성·장애를 조정하는 스케일링 기법이다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 1,
  "q": "번업 차트는 총 범위 선을 함께 보여 주어 범위 변경을 확인할 수 있다.",
  "a": true,
  "e": "누적 완료선과 범위선을 함께 그린다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "누적 흐름도(CFD)에서 밴드 폭이 넓어지는 단계는 작업이 원활히 빠지고 있음을 뜻한다.",
  "a": false,
  "e": "밴드 폭이 넓어지면 작업이 쌓이는 병목이다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "서번트 리더는 팀이 해결할 수 없는 조직 장애를 제거하는 데 집중한다.",
  "a": true,
  "e": "장애 제거·팀 보호·코칭이 서번트 리더의 핵심 행동이다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 3,
  "q": "팀 밖의 장애가 생기면 PM은 분석 없이 즉시 스폰서에게 에스컬레이션하는 것이 가장 바람직하다.",
  "a": false,
  "e": "먼저 영향을 평가하고 담당자와 직접 해결을 시도한 뒤, 권한 밖이면 분석과 대안을 들고 에스컬레이션한다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 1,
  "q": "지표는 그것을 사용해 내릴 의사결정이 분명할 때 가치가 있다.",
  "a": true,
  "e": "지표는 의사결정을 위해 만든다. 쓰이지 않는 지표는 수집 비용만 든다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 1,
  "q": "OKR의 Key Result는 목표 달성을 위한 작업 목록이다.",
  "a": false,
  "e": "Key Result는 측정 가능한 결과다. 작업 목록은 활동(Initiative)이다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "미해결 고위험 항목 수의 추세는 후행 지표에 해당한다.",
  "a": false,
  "e": "향후 결과를 예측하게 해 주는 선행 지표다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "CPI가 0.9이면 계획보다 원가를 적게 쓰고 있다는 뜻이다.",
  "a": false,
  "e": "CPI = EV ÷ AC가 1보다 작으면 지출 대비 작업 가치가 적은 원가 초과 상태다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "프로젝트가 늦게 끝나더라도 종료 시점의 SPI는 1이 된다.",
  "a": true,
  "e": "종료 시 EV가 PV(=BAC)와 같아지므로 SPI는 1로 수렴한다. 그래서 후반부 SPI는 일정 판단에 한계가 있다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 3,
  "q": "원래 추정에 결함이 있었다고 판명되면 EAC는 BAC ÷ CPI로 구하는 것이 가장 적절하다.",
  "a": false,
  "e": "추정 결함이면 과거 효율로 외삽할 수 없으므로 AC + 상향식 ETC로 재추정한다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "TCPI가 1보다 크면 남은 작업을 지금까지보다 더 효율적으로 수행해야 목표 예산을 지킬 수 있다.",
  "a": true,
  "e": "TCPI = (BAC − EV) ÷ (BAC − AC). 1 초과는 더 높은 원가 효율이 필요하다는 뜻이다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "벨로시티는 팀 간 생산성을 비교하는 데 적합한 지표다.",
  "a": false,
  "e": "스토리 포인트는 팀마다 상대 척도라 비교할 수 없다. 비교·평가에 쓰면 포인트가 부풀려진다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 3,
  "q": "지표가 평가 목표가 되면 사람들이 지표 자체를 맞추려 해 지표가 왜곡될 수 있다.",
  "a": true,
  "e": "굿하트의 법칙이다. 벨로시티를 성과평가에 연동하면 포인트 인플레이션이 생긴다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "재무 시스템과 타임시트의 실제 원가가 다르면 공식 시스템 값만 보고하면 된다.",
  "a": false,
  "e": "ECO II-9의 조정(reconciliation) — 차이 원인을 밝혀 맞춘 뒤 보고한다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "정보 방열기는 팀 공간에 크게 게시해 누구나 지나가며 상태를 볼 수 있게 한 표시물이다.",
  "a": true,
  "e": "칸반 보드, 번다운 차트, 장애 목록 등이 예다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "번다운 차트의 Y축은 누적 완료 작업량이다.",
  "a": false,
  "e": "번다운의 Y축은 남은 작업량이다. 누적 완료는 번업 차트다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "번업 차트는 범위선과 완료선을 따로 그려 범위 변경을 보여 준다.",
  "a": true,
  "e": "번다운에서는 범위 변경이 남은 작업과 섞여 구분되지 않는다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "번다운 차트에서 실제선이 이상선보다 아래에 있으면 계획보다 뒤처진 것이다.",
  "a": false,
  "e": "남은 작업이 계획보다 적다는 뜻이므로 앞서 있다. 위에 있으면 뒤처진 것이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "CFD에서 띠 사이의 수직 거리는 진행 중 작업(WIP)을 나타낸다.",
  "a": true,
  "e": "수직 거리 = WIP, 수평 거리 = 대략의 리드타임."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "CFD에서 특정 단계의 띠가 점점 좁아지면 그 단계에 병목이 생긴 것이다.",
  "a": false,
  "e": "띠가 넓어질 때 그 단계에 작업이 쌓이는 병목이다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "S-커브에서 AC 곡선이 EV 곡선보다 위에 있으면 원가 초과다.",
  "a": true,
  "e": "AC > EV이면 CV가 음수다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 3,
  "q": "상태가 Red로 바뀌었더라도 회복 계획이 확정될 때까지는 Amber로 보고하는 것이 바람직하다.",
  "a": false,
  "e": "상태 미화는 정직성 위반이다. Red는 원인·대안과 함께 사실대로 보고한다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "분산 팀은 온라인 대시보드를 가상의 정보 방열기로 활용할 수 있다.",
  "a": true,
  "e": "물리 보드를 볼 수 없는 분산 팀에 맞는 테일러링이다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 1,
  "q": "애자일 프로젝트는 문서를 작성하지 않는 것이 원칙이다.",
  "a": false,
  "e": "애자일 선언은 포괄적 문서보다 작동하는 소프트웨어를 '더' 중시할 뿐이다. 필요한 산출물은 관리한다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "산출물의 종류와 상세도는 프로젝트 복잡도·규제·거버넌스 요구에 맞춰 테일러링한다.",
  "a": true,
  "e": "ECO II-9 'Identify and tailor needed artifacts'."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "형상관리는 변경 요청의 승인 여부를 결정하는 활동이다.",
  "a": false,
  "e": "승인 결정은 변경통제다. 형상관리는 버전·사양을 식별·추적한다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "외부 협력사가 문서에 접근하지 못하면 최신본을 개인 이메일로 보내 주는 것이 가장 빠르고 적절하다.",
  "a": false,
  "e": "보안 정책 범위 안에서 정식 접근 권한·공유 채널을 마련해야 한다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "이해관계자가 읽지 않는 보고서는 필요와 형식을 다시 확인해 개선하거나 대체한다.",
  "a": true,
  "e": "산출물 관리의 효과성을 지속적으로 평가하라는 ECO Enabler다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 1,
  "q": "WBS는 로그·등록부 범주의 산출물이다.",
  "a": false,
  "e": "WBS는 OBS·RBS와 함께 계층 차트 범주다. 로그·등록부는 이슈 로그·위험 등록부 등이다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 1,
  "q": "DoD는 모든 백로그 항목과 증분에 공통으로 적용되는 완료 기준이다.",
  "a": true,
  "e": "인수 기준은 스토리별, DoD는 공통이다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "인수 기준을 충족한 스토리는 DoD 항목이 남아 있어도 벨로시티에 포함한다.",
  "a": false,
  "e": "인수 기준과 DoD를 모두 충족해야 완료이며, 미완 스토리는 0으로 센다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "범위 확인(Validate Scope)은 일반적으로 품질 통제(Control Quality) 후에 수행한다.",
  "a": true,
  "e": "QC가 검증된 인도물을 만들고, 범위 확인에서 고객이 공식 인수한다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "인도 전 테스트 비용은 품질 비용 중 예방 비용이다.",
  "a": false,
  "e": "테스트·검사는 평가 비용이다. 예방 비용은 교육·표준 정비 등이다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "등급이 낮은 제품이라도 요구사항을 만족하면 품질 문제는 아니다.",
  "a": true,
  "e": "등급(grade)과 품질(quality)은 다르다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 3,
  "q": "반복적으로 같은 결함이 나오면 검사 인원을 늘리는 것이 가장 근본적인 대응이다.",
  "a": false,
  "e": "근본 원인 분석으로 프로세스·DoD를 개선하는 예방(QA) 대응이 우선이다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 1,
  "q": "DoR은 백로그 항목이 작업을 시작할 만큼 명확한지 판단하는 기준이다.",
  "a": true,
  "e": "DoR = 착수 조건, DoD = 완료 조건."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 1,
  "q": "교훈 등록부는 프로젝트 진행 내내 갱신하는 프로젝트 문서다.",
  "a": true,
  "e": "종료 때 교훈 저장소(OPA)로 이관된다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "교훈은 프로젝트가 실패했을 때만 정리하면 된다.",
  "a": false,
  "e": "성공 요인도 교훈이며, 모든 프로젝트에서 상시 기록한다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "SECI 모델에서 형식지를 실천을 통해 체득하는 단계는 내면화(Internalization)다.",
  "a": true,
  "e": "형식 → 암묵 변환이 내면화다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "회고에서는 문제를 일으킨 개인을 명확히 지목해 기록하는 것이 개선에 효과적이다.",
  "a": false,
  "e": "비난 없는(blameless) 회고가 원칙이다. 개인 지목은 심리적 안전을 무너뜨린다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 1,
  "q": "암묵지는 페어링·쉐도잉·멘토링 같은 사람 간 상호작용으로 잘 이전된다.",
  "a": true,
  "e": "말로 옮기기 어려운 경험·노하우이기 때문이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 1,
  "q": "프로젝트가 조기 중단되면 종료 절차를 생략하고 팀을 즉시 해산한다.",
  "a": false,
  "e": "조기 종료에도 상태 문서화·교훈·정산 등 종료 절차를 수행한다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "프로젝트 종료 기준은 계획 단계에서 핵심 이해관계자와 합의해 두는 것이 바람직하다.",
  "a": true,
  "e": "ECO II-10 '종료 기준 결정'. 끝에서 분쟁을 막는다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "미해결 클레임은 계약 종결 전에 협상으로 먼저 해결을 시도한다.",
  "a": true,
  "e": "협상 → ADR(조정·중재) → 소송 순이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "프로젝트 편익은 모두 종료 시점에 측정·확정된다.",
  "a": false,
  "e": "많은 편익은 종료 후 운영 중에 실현되며, 편익 소유자가 계속 측정한다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 3,
  "q": "종료 활동 중 팀 해산은 교훈 정리보다 먼저 하는 것이 일반적이다.",
  "a": false,
  "e": "교훈·문서 정리에 팀이 필요하므로 해산은 보통 마지막이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "운영팀이 인수할 역량을 갖췄는지 확인하는 것도 프로젝트 종료 관리의 일부다.",
  "a": true,
  "e": "ECO II-10 'Validate readiness for transition'."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 1,
  "q": "ECO 2026에서 거버넌스·위험·변경·이슈·컴플라이언스는 Business Environment 도메인에 속한다.",
  "a": true,
  "e": "2021 ECO에서는 Process에 있던 항목이 2026에서 Business Environment로 옮겨 가 비중이 8%에서 26%로 커졌다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 1,
  "q": "조직 문화와 조직 구조는 조직 프로세스 자산(OPA)에 해당한다.",
  "a": false,
  "e": "조직 문화·구조는 PM이 통제할 수 없는 내부 기업 환경 요인(EEF)이다. OPA는 템플릿·절차·교훈 저장소 등이다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "에스컬레이션 경로와 임계치는 문제가 생겼을 때 그때그때 정하는 것이 바람직하다.",
  "a": false,
  "e": "ECO III-1은 거버넌스 수립 시 에스컬레이션 경로와 임계치를 미리 정의하라고 한다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "Directive PMO는 Supportive PMO보다 프로젝트에 대한 통제 수준이 높다.",
  "a": true,
  "e": "통제 수준은 Supportive < Controlling < Directive 순이다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 3,
  "q": "애자일 팀이라면 조직의 단계 게이트 거버넌스는 적용 대상이 아니므로 생략해도 된다.",
  "a": false,
  "e": "거버넌스는 생략이 아니라 테일러링 대상이다. 증분 데모 등 애자일 증거로 게이트 목적을 충족하도록 협의한다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 1,
  "q": "ECO 2026 컴플라이언스 Task는 보안·보건안전·지속가능성·규제 요구사항 확인을 예시한다.",
  "a": true,
  "e": "III-2 첫 Enabler가 이 네 범주를 예시한다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "스폰서가 승인하면 법규상 필수 검사를 출시 이후로 미룰 수 있다.",
  "a": false,
  "e": "컴플라이언스는 타협 불가다. 미준수 결과를 설명하고 준수 가능한 대안을 찾는다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "애자일 프로젝트에서는 규제 준수 기준을 완료 정의(DoD)에 포함해 매 증분마다 검증하는 것이 효과적이다.",
  "a": true,
  "e": "막판 일괄 검증보다 매 증분 검증이 재작업·미준수 위험을 줄인다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "AI가 생성한 프로젝트 일정은 사람의 검토 없이 그대로 기준선으로 확정해도 된다.",
  "a": false,
  "e": "AI 산출물은 사람의 검증(human oversight)과 승인 절차를 거쳐야 한다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 1,
  "q": "PMBOK 8판의 원칙에는 지속가능성 통합(Integrate sustainability)이 포함된다.",
  "a": true,
  "e": "8판 6원칙: 전체론적 관점·가치 집중·품질 내재화·책임 있는 리더십·지속가능성 통합·권한 부여된 팀."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 1,
  "q": "위험은 부정적 영향을 주는 불확실한 사건만을 의미한다.",
  "a": false,
  "e": "위험은 위협(부정)과 기회(긍정)를 모두 포함한다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 1,
  "q": "정성적 위험 분석은 보통 정량적 위험 분석보다 먼저 수행한다.",
  "a": true,
  "e": "정성 분석으로 우선순위를 정한 뒤 필요할 때 정량 분석을 선택적으로 수행한다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "몬테카를로 시뮬레이션은 정성적 위험 분석 기법이다.",
  "a": false,
  "e": "몬테카를로는 반복 표본추출로 전체 일정·원가 달성 확률을 구하는 정량적 기법이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "위험 임계치(risk threshold)는 그 수준을 넘으면 대응·보고가 필요한 측정 가능한 경계다.",
  "a": true,
  "e": "위험 성향(appetite)이 감수 의향이라면 임계치는 수치 경계다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 3,
  "q": "EMV를 계산할 때 기회의 영향은 음수(−)로 둔다.",
  "a": false,
  "e": "위협은 음수, 기회는 양수로 둔다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 1,
  "q": "위험을 전가(Transfer)하면 위험 자체가 사라진다.",
  "a": false,
  "e": "영향·책임만 제3자에게 넘어가며 위험은 여전히 존재한다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 1,
  "q": "기회 대응 전략에는 활용(Exploit)·공유(Share)·증대(Enhance)·수용(Accept)·상향(Escalate)이 있다.",
  "a": true,
  "e": "위협은 Escalate·Avoid·Transfer·Mitigate·Accept, 기회는 Escalate·Exploit·Share·Enhance·Accept다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "2차 위험(secondary risk)은 위험 대응을 실행한 뒤에도 남아 있는 위험이다.",
  "a": false,
  "e": "남아 있는 위험은 잔여 위험(residual risk)이다. 2차 위험은 대응 때문에 새로 생긴 위험이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "우발 예비(contingency reserve)는 원가 기준선 안에 포함된다.",
  "a": true,
  "e": "우발 예비는 식별된 위험용으로 기준선 안, 관리 예비는 기준선 밖·예산 안이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "관리 예비는 프로젝트 관리자가 승인 없이 재량으로 사용할 수 있다.",
  "a": false,
  "e": "관리 예비 사용에는 경영진 승인(변경 요청)이 필요하다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 3,
  "q": "식별된 위험이 실제로 발생하면 우선 계획된 대응을 실행하고 이를 이슈로 추적한다.",
  "a": true,
  "e": "ECO III-4 'Recognize when a risk becomes an issue'와 III-5 대응 실행에 해당한다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 1,
  "q": "변경 로그에는 승인된 변경 요청만 기록한다.",
  "a": false,
  "e": "승인·거절·보류된 요청을 모두 기록한다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 1,
  "q": "구두로 받은 변경 요청도 문서화해 통합 변경 통제 절차로 처리한다.",
  "a": true,
  "e": "모든 변경 요청은 문서화가 출발점이다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "애자일 프로젝트에서 새 요구사항은 제품 백로그에 추가되고 프로덕트 오너가 우선순위를 정한다.",
  "a": true,
  "e": "PO가 백로그 가치 우선순위를 책임진다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "고객이 좋아할 기능을 팀이 요청 없이 추가하는 것은 바람직한 가치 기반 인도다.",
  "a": false,
  "e": "요청·승인 없는 추가는 골드 플레이팅으로 무단 변경이다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 3,
  "q": "긴급 변경은 신속성이 중요하므로 사후 문서화도 생략할 수 있다.",
  "a": false,
  "e": "긴급 절차로 신속히 처리하되 사후 문서화·보고는 생략하지 않는다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 1,
  "q": "이슈는 이미 발생해 프로젝트에 영향을 주고 있는 문제다.",
  "a": true,
  "e": "위험은 미래의 불확실성, 이슈는 현재의 문제다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "일일 조정 회의 중 보고된 장애는 회의를 연장해 그 자리에서 해결 방안을 끝까지 논의한다.",
  "a": false,
  "e": "일일 회의는 공유용이며 해결 논의는 회의 후 관련자와 별도로 한다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "장애는 영향을 평가해 우선순위를 매기고 가시화하며 지속적으로 재평가한다.",
  "a": true,
  "e": "ECO III-4 Enabler 흐름 그대로다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 3,
  "q": "팀 밖 부서와의 이슈는 당사자와 협의하기 전에 즉시 스폰서에게 에스컬레이션하는 것이 원칙이다.",
  "a": false,
  "e": "먼저 당사자와 직접 협의하고, 해결이 안 되거나 권한 밖일 때 분석과 함께 에스컬레이션한다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 1,
  "q": "서번트 리더는 팀이 스스로 해결할 수 없는 장애를 제거하는 데 집중한다.",
  "a": true,
  "e": "팀이 풀 수 있는 문제는 팀에 맡겨 자기조직화를 존중한다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 1,
  "q": "교훈 저장소(lessons learned repository)는 조직 프로세스 자산(OPA)의 일부다.",
  "a": true,
  "e": "교훈 등록부는 프로젝트 문서, 저장소는 조직 자산이다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 2,
  "q": "교훈은 프로젝트 종료 단계에서만 수집하는 것이 원칙이다.",
  "a": false,
  "e": "교훈은 프로젝트 내내 지속 수집해 즉시 적용하고, 종료 시 저장소로 이관한다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 2,
  "q": "편익은 프로젝트 종료 후 운영 단계에서 실현되는 경우가 많다.",
  "a": true,
  "e": "그래서 편익 책임자와 종료 후 측정 체계를 편익 관리 계획서에 정의한다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 2,
  "q": "상담 처리 시간 단축은 '산출물(Output)'에 해당한다.",
  "a": false,
  "e": "처리 시간 단축은 산출물을 사용해 생긴 변화인 결과(Outcome)다. 산출물은 구축한 시스템 자체다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 1,
  "q": "PDCA 주기는 Plan-Do-Check-Act 순서로 반복한다.",
  "a": true,
  "e": "Shewhart가 제시하고 Deming이 보급한 개선 주기다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 1,
  "q": "ECO 2026 III-8은 외부 환경 변화의 예로 규제·기술·지정학·시장을 든다.",
  "a": true,
  "e": "그 영향을 범위·백로그 관점에서 평가·우선순위화한다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "외부 규제 변화는 공식 시행 전까지는 영향 평가 대상이 아니다.",
  "a": false,
  "e": "외부 환경은 지속적으로 검토하며 예정된 변화도 선제적으로 영향을 평가한다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "ECO III-7 조직 변화 지원의 첫 Enabler는 조직 문화 평가다.",
  "a": true,
  "e": "문화 평가 → 조직 변화 영향 평가·필요 조치 결정 순이다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "ADKAR 모델의 순서는 인식-열망-능력-지식-강화다.",
  "a": false,
  "e": "인식(Awareness)-열망(Desire)-지식(Knowledge)-능력(Ability)-강화(Reinforcement) 순이다. 출제 근거는 [확인필요]."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 3,
  "q": "변화에 저항하는 사용자에게는 원인을 파악하기보다 사용을 의무화하는 것이 가장 효과적이다.",
  "a": false,
  "e": "저항 원인(인식·역량 부족)을 파악해 소통·교육·변화 챔피언으로 대응하는 것이 PMI 관점이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "PMBOK 가이드 8판은 6개 원칙과 7개 성과영역으로 구성된다.",
  "a": true,
  "e": "8판은 6원칙·7성과영역에 비처방형 프로세스 지침을 더했다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "PMBOK 8판은 7판에서 빠졌던 프로세스 지침을 비처방형으로 다시 도입했다.",
  "a": true,
  "e": "프로세스를 참고용으로 다시 넣고 Focus Area로 묶었다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 1,
  "q": "PMBOK 7판은 12개 원칙과 8개 성과영역으로 구성된다.",
  "a": true,
  "e": "7판은 프로세스 대신 원칙·성과영역 체계를 택했다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "Governance(거버넌스)는 PMBOK 8판 성과영역 중 하나다.",
  "a": true,
  "e": "8판 7성과영역: Governance·Scope·Schedule·Finance·Stakeholders·Resources·Risk."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "PMBOK 8판 Finance 성과영역은 ECO 2026의 '재무 계획·관리' Task(II-6)와 대응한다.",
  "a": true,
  "e": "재무 필요 분석·예비비·지출 추적·재무 보고가 II-6의 내용이다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "8판 Focus Area는 착수·기획·실행·감시통제·종료의 5개로 소개된다.",
  "a": true,
  "e": "6판 프로세스 그룹과 같은 틀이다(2차 출처 기준)."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 2,
  "q": "PMBOK 8판에서 품질은 독립 성과영역이 아니라 'Embed quality' 원칙으로 다뤄진다.",
  "a": true,
  "e": "7성과영역에 품질은 없고 원칙으로 전 영역에 걸쳐 적용된다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "가치 인도 시스템에서 결과는 산출물 → 성과 → 편익 → 가치 순으로 이어진다.",
  "a": true,
  "e": "Output → Outcome → Benefit → Value."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "테일러링 대상에는 개발 접근법·프로세스·도구·산출물이 포함된다.",
  "a": true,
  "e": "생애주기·접근법, 프로세스, 참여, 도구, 방법·산출물이 대상이다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 2,
  "q": "PMBOK 7판 테일러링 절차의 첫 단계는 초기 개발 접근법 선택이다.",
  "a": true,
  "e": "접근법 선택 → 조직 → 프로젝트 → 지속 개선 순서다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "PMBOK에서 모델(model)은 과정·프레임워크·현상을 설명하는 사고 전략이다.",
  "a": true,
  "e": "방법은 수단, 산출물은 템플릿·문서다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "Wideband Delphi는 추정에 쓰는 방법(method)이다.",
  "a": true,
  "e": "전문가 합의를 반복해 추정치를 좁히는 방법이다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "PMI 윤리 강령의 4가지 가치는 책임·존중·공정·정직이다.",
  "a": true,
  "e": "Responsibility·Respect·Fairness·Honesty."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "PMI 윤리 강령의 각 가치는 열망 기준과 의무 기준으로 나뉜다.",
  "a": true,
  "e": "의무 기준 위반은 징계 대상이 된다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 3,
  "q": "이해충돌을 적극적으로 공개하는 것은 공정(Fairness) 가치의 의무 기준이다.",
  "a": true,
  "e": "정직이 아니라 공정에 속한다는 점이 함정이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 2,
  "q": "PMBOK 8판 Risk 성과영역은 위협뿐 아니라 기회도 다룬다.",
  "a": true,
  "e": "위험은 부정(위협)·긍정(기회) 불확실성을 모두 포함한다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 2,
  "q": "Focus Area 활동은 한 단계나 반복 안에서도 되풀이될 수 있다.",
  "a": true,
  "e": "Focus Area는 생애주기 단계가 아니라 활동 묶음이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "PMBOK 7판 Uncertainty 성과영역은 모호성·복잡성·변동성 개념을 다룬다.",
  "a": true,
  "e": "위험과 함께 ambiguity·complexity·volatility를 다룬다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 2,
  "q": "운영(Operations)은 프로젝트가 이관한 인도물로 편익을 지속적으로 만든다.",
  "a": true,
  "e": "프로젝트 종료 후 편익 실현은 운영 단계에서 이어진다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 2,
  "q": "ECO 2026은 시험이 특정 교재 한 권에 근거하지 않는다고 밝힌다.",
  "a": true,
  "e": "ECO는 Task 기반이며 PMBOK과 차이가 있다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "PMBOK 8판은 7판의 원칙 체계를 폐지하고 6판의 49개 프로세스 체계로 돌아갔다.",
  "a": false,
  "e": "원칙·성과영역 체계를 유지하면서 비처방형 프로세스 지침을 더했다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 3,
  "q": "8판의 Focus Area는 프로젝트 생애주기 단계(phase)와 같은 개념이다.",
  "a": false,
  "e": "단계가 아니라 단계마다 반복될 수 있는 활동 묶음이다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "PMBOK 8판의 프로세스 지침은 모든 프로젝트에 의무 적용된다.",
  "a": false,
  "e": "비처방형이라 맥락에 맞게 선택·테일러링한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 1,
  "q": "'Navigate complexity'는 PMBOK 8판 6원칙 중 하나다.",
  "a": false,
  "e": "7판 12원칙의 이름이다. 8판에서는 전체론적 관점에 흡수된 것으로 해석한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "Uncertainty는 PMBOK 8판 성과영역 이름이다.",
  "a": false,
  "e": "7판 이름이다. 8판에서는 Risk로 대응한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 3,
  "q": "지속가능성은 PMBOK 8판에서 독립 성과영역이 됐다.",
  "a": false,
  "e": "성과영역이 아니라 원칙(Integrate sustainability)이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "PMBOK 원칙은 정해진 순서대로 적용하는 절차다.",
  "a": false,
  "e": "원칙은 판단 기준이지 순서 있는 절차가 아니다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 2,
  "q": "테일러링은 PMO만 할 수 있으며 프로젝트 관리자는 표준을 그대로 적용해야 한다.",
  "a": false,
  "e": "PM은 팀·이해관계자와 함께 조직 요구를 반영해 테일러링하고, 필요하면 PMO와 협의한다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "프로젝트 헌장은 PMBOK에서 말하는 '모델'에 해당한다.",
  "a": false,
  "e": "헌장은 문서이므로 산출물(artifact)이다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 2,
  "q": "Tuckman 사다리는 산출물(artifact)이다.",
  "a": false,
  "e": "팀 발달 단계를 설명하는 모델이다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 2,
  "q": "산출물(Output)이 인도되면 가치(Value)는 자동으로 실현된다.",
  "a": false,
  "e": "성과·편익으로 이어져야 가치가 생기며, 운영 단계의 실현이 필요하다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "전략 목표 달성을 위해 관리하는 프로젝트·프로그램·운영의 집합을 프로그램이라고 한다.",
  "a": false,
  "e": "포트폴리오의 정의다. 프로그램은 편익을 위해 조율 관리하는 관련 프로젝트의 묶음이다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 2,
  "q": "PMI 윤리 강령은 PMI 회원에게만 적용된다.",
  "a": false,
  "e": "비회원 자격 보유자·신청자·자원봉사자에게도 적용된다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 2,
  "q": "현지에서 관행으로 받아들여지면 소액의 촉진 수수료를 지급해도 윤리 강령에 어긋나지 않는다.",
  "a": false,
  "e": "뇌물에 해당하면 관행과 관계없이 거부하고 법무·컴플라이언스와 상의한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "PMBOK 7판에는 Governance라는 독립 성과영역이 있었다.",
  "a": false,
  "e": "7판 8성과영역에 Governance는 없다. 8판에서 영역 이름이 됐다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 3,
  "q": "PMBOK 7판 본문에는 6판의 49개 프로세스가 그대로 실려 있다.",
  "a": false,
  "e": "7판은 프로세스를 본문에서 빼고 2022년 Process Groups: A Practice Guide로 보완했다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 3,
  "q": "가치 집중 원칙에 따르면 일정·예산 준수가 확인되면 프로젝트는 성공한 것이다.",
  "a": false,
  "e": "성과·편익·이해관계자 가치 실현까지 봐야 한다(ECO의 프로젝트 성공 재정의)."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 3,
  "q": "영향 분석을 마쳤다면 프로젝트 관리자 권한 한도를 넘는 변경도 PM이 직접 승인할 수 있다.",
  "a": false,
  "e": "권한·임계치를 넘으면 정해진 에스컬레이션 경로로 올려야 한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 3,
  "q": "'Focus on value'는 7판에 없던 8판 신설 원칙이다.",
  "a": false,
  "e": "7판에도 Value 원칙(Focus on value)이 있었다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 3,
  "q": "자기조직화 팀이 결정을 요청하면 프로젝트 관리자가 직접 결정해 주는 것이 권한 부여 원칙에 맞다.",
  "a": false,
  "e": "PM은 팀이 스스로 결정하도록 촉진해야 한다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "EV(획득가치)는 BAC에 실제 완료율을 곱해 구할 수 있다.",
  "a": true,
  "e": "EV = BAC × 실제 완료율. 계획 완료율을 곱하면 PV가 된다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "원가편차(CV)는 PV에서 AC를 뺀 값이다.",
  "a": false,
  "e": "CV = EV − AC. PV는 일정 지표(SV·SPI)에 쓴다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "CPI가 1보다 작으면 원가가 예산을 초과하고 있는 것이다.",
  "a": true,
  "e": "CPI = EV/AC < 1 이면 쓴 돈보다 얻은 가치가 적다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 2,
  "q": "SV가 −$5,000 이면 프로젝트가 5,000일 지연되었다는 뜻이다.",
  "a": false,
  "e": "SV는 금액 단위 지표다. −$5,000어치 작업이 계획보다 덜 수행되었다는 뜻이다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 3,
  "q": "SPI가 1 이상이면 주경로 활동도 반드시 계획대로 진행되고 있다.",
  "a": false,
  "e": "SPI는 전체 집계값이라 비주경로 작업이 앞서면 주경로가 늦어도 1 이상일 수 있다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 2,
  "q": "PV가 주어지지 않으면 CV는 계산할 수 있지만 SV는 계산할 수 없다.",
  "a": true,
  "e": "CV = EV − AC, SV = EV − PV 이므로 PV 없이 SV는 구할 수 없다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 1,
  "q": "현재의 원가 효율이 계속된다고 가정하면 EAC = BAC / CPI 다.",
  "a": true,
  "e": "EVM 예측의 기본형이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "편차가 일회성 원인으로 발생했다면 EAC = AC + (BAC − EV)를 쓴다.",
  "a": true,
  "e": "남은 작업은 원래 계획 단가로 수행된다고 보는 공식이다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "CPI와 SPI가 모두 남은 작업에 영향을 줄 때 EAC = BAC / (CPI × SPI) 다.",
  "a": false,
  "e": "AC + (BAC − EV)/(CPI × SPI) 다. 이미 쓴 AC에는 지수를 적용하지 않는다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 1,
  "q": "VAC는 EAC에서 BAC를 뺀 값이다.",
  "a": false,
  "e": "VAC = BAC − EAC 이며 음수면 완료 시 초과다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "TCPI(BAC 기준)가 1.2 이면 남은 작업에서 현재보다 높은 효율이 필요할 수 있다.",
  "a": true,
  "e": "남은 1달러당 1.2달러어치 성과가 필요하다. 현재 CPI가 1.2 미만이면 효율을 높여야 한다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 3,
  "q": "TCPI는 남은 예산을 남은 작업으로 나눈 값이다.",
  "a": false,
  "e": "TCPI = 남은 작업(BAC − EV) ÷ 남은 예산(BAC − AC 또는 EAC − AC). 분자·분모를 뒤집으면 해석이 반대가 된다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 1,
  "q": "주경로는 네트워크에서 가장 긴 경로다.",
  "a": true,
  "e": "가장 긴 경로의 길이가 프로젝트 최단 완료기간이다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 1,
  "q": "후진 계산에서 후속 활동이 여럿이면 선행 활동의 LF는 후속 LS 중 최댓값이다.",
  "a": false,
  "e": "후진 계산은 최솟값을 취한다. 전진 계산이 선행 EF의 최댓값을 취한다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "자유여유는 총여유보다 클 수 없다.",
  "a": true,
  "e": "FF ≤ TF. 후속 ES를 지키는 조건이 완료일 조건보다 엄격하다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "Fast-tracking은 활동에 자원을 추가 투입해 기간을 줄이는 기법이다.",
  "a": false,
  "e": "자원 추가는 Crashing이다. Fast-tracking은 순차 활동을 병행해 재작업 위험이 커진다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "자원 평활화(Smoothing)는 주경로와 완료일을 바꾸지 않는다.",
  "a": true,
  "e": "평활화는 여유 범위 안에서만 조정한다. 완료일이 바뀔 수 있는 것은 평준화(Leveling)다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 3,
  "q": "강제 마감일이 계획 종료일보다 빠르면 주경로의 총여유가 음수가 될 수 있다.",
  "a": true,
  "e": "Project float = 요구 종료일 − 계획 종료일 이 음수가 되는 경우다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "Crashing은 원가 기울기가 가장 낮은 활동부터 하되, 주경로 여부는 고려하지 않는다.",
  "a": false,
  "e": "주경로 위 활동이어야 완료일이 줄어든다. 비주경로 압축은 원가만 늘린다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 1,
  "q": "PERT(베타) 기대값 공식은 (O + 4M + P) / 6 이다.",
  "a": true,
  "e": "최빈값에 가중치 4를 준다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 2,
  "q": "O 2일, M 5일, P 14일의 PERT 기대값은 7일이다.",
  "a": false,
  "e": "(2 + 20 + 14) ÷ 6 = 6일. 7일은 삼각 분포 (2 + 5 + 14)/3 값이다."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 2,
  "q": "여러 독립 활동으로 이루어진 경로의 표준편차는 각 활동 표준편차의 합이다.",
  "a": false,
  "e": "분산을 더한 뒤 제곱근을 취한다(√Σσ²)."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 1,
  "q": "정규분포에서 기대값 ±2σ 범위에 들어올 확률은 약 95%다.",
  "a": true,
  "e": "±2σ ≈ 95.45%."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 3,
  "q": "기대값 20일, σ 2일인 경로가 22일 이내에 끝날 확률은 약 68%다.",
  "a": false,
  "e": "E + 1σ 이내(단측)는 50% + 34.13% ≈ 84%다. 68%는 18~22일(±1σ) 범위의 확률이다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 1,
  "q": "EMV는 확률에 영향을 곱한 값이며 위협은 음수로 표시한다.",
  "a": true,
  "e": "기회는 양수, 위협은 음수로 두고 합산한다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "의사결정나무의 확률 노드에서 나뉘는 분기 확률의 합은 1이어야 한다.",
  "a": true,
  "e": "모든 경우를 포괄해야 기대값이 의미 있다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "의사결정나무에서 아직 지출하지 않은 초기 투자비는 매몰비용이므로 비교에서 제외한다.",
  "a": false,
  "e": "미래 지출이므로 매몰비용이 아니다. 각 대안의 기대 결과에서 차감한다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "관리예비는 식별된 위험에 대응하기 위해 원가 기준선 안에 포함한다.",
  "a": false,
  "e": "식별 위험은 우발예비(기준선 안), 관리예비는 미식별 위험용으로 기준선 밖·예산 안에 둔다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 3,
  "q": "EMV는 위험 중립을 가정하므로 위험 회피 성향이 강한 조직은 EMV가 더 높은 대안을 고르지 않을 수도 있다.",
  "a": true,
  "e": "EMV는 기대값일 뿐 위험 성향을 반영하지 않는다. 의사결정 시 위험 성향·임계치를 함께 고려한다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 2,
  "q": "팀이 5명에서 10명으로 늘면 의사소통 채널은 35개 늘어난다.",
  "a": true,
  "e": "10 → 45 로 35개 증가한다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 2,
  "q": "NPV가 같다면 기간이 긴 프로젝트가 더 불리하므로 NPV는 기간으로 나눠 비교해야 한다.",
  "a": false,
  "e": "NPV는 이미 할인율로 시간가치를 반영한다. 기간으로 나눠 비교하지 않는다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 1,
  "q": "회수기간(Payback Period)은 길수록 유리하다.",
  "a": false,
  "e": "회수기간은 짧을수록 유리하다. 투자금을 빨리 회수할수록 위험이 낮다고 본다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 2,
  "q": "기회비용은 선택한 대안의 가치를 말한다.",
  "a": false,
  "e": "기회비용은 선택하지 않은(포기한) 대안 중 최선의 가치다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 1,
  "q": "확정고정가(FFP) 계약은 판매자의 원가 위험이 가장 크다.",
  "a": true,
  "e": "가격이 확정되어 원가 초과를 판매자가 부담한다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 2,
  "q": "FPIF 계약에서 실제원가가 PTA를 넘으면 초과분은 구매자와 판매자가 분담비율대로 나눈다.",
  "a": false,
  "e": "PTA를 넘는 원가는 판매자가 전부 부담한다(상한가 이상 지불 없음)."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 2,
  "q": "CPFF 계약에서는 실제원가가 늘어도 수수료는 고정된다.",
  "a": true,
  "e": "실제원가 + 고정 수수료. 수수료는 추정원가 기준으로 정해져 바뀌지 않는다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 3,
  "q": "PTA 공식의 분모는 판매자 분담률이다.",
  "a": false,
  "e": "PTA = (상한가 − 목표가) / 구매자 분담률 + 목표원가."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 1,
  "q": "벨로시티는 DoD를 충족한 스토리의 포인트만 합산한다.",
  "a": true,
  "e": "부분 완료 스토리는 0점이다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 2,
  "q": "Little's Law에 따르면 WIP를 늘리면 사이클 타임이 짧아진다.",
  "a": false,
  "e": "Cycle time = WIP / Throughput 이므로 처리량이 같을 때 WIP를 늘리면 사이클 타임이 길어진다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 2,
  "q": "평균 벨로시티 25점, 잔여 백로그 110점이면 남은 스프린트는 5개로 예측한다.",
  "a": true,
  "e": "110 ÷ 25 = 4.4 → 올림해서 5 스프린트."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 3,
  "q": "스토리 포인트 기준을 전사적으로 통일하면 팀 간 벨로시티 비교로 성과를 평가할 수 있다.",
  "a": false,
  "e": "벨로시티는 팀 고유의 상대 척도이며 성과평가에 쓰면 포인트 인플레이션이 생긴다."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO 2026의 세 도메인 이름과 비중을 쓰시오.",
  "a": "People 33%, Process 41%, Business Environment 26%",
  "k": [
   "33",
   "41",
   "26"
  ],
  "e": "2021의 42 / 50 / 8과 구분한다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO 2026의 도메인별 Task 수와 총합을 쓰시오.",
  "a": "People 8, Process 10, Business Environment 8, 총 26개",
  "k": [
   "8",
   "10",
   "26"
  ],
  "e": "2021 ECO는 35개였다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "ECO에서 Task를 수행하는 예시 행동으로, 망라적이지 않은 목록을 무엇이라 하는가?",
  "a": "Enabler",
  "k": [
   "Enabler"
  ],
  "e": "도메인 → Task → Enabler 계층이다."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 2,
  "q": "ECO 2026 Business Environment 도메인에서 '위험이 이슈가 되는 시점 인식' Enabler가 속한 Task의 번호와 이름을 쓰시오.",
  "a": "III-4 Remove impediments and manage issues(장애 제거, 이슈 관리)",
  "k": [
   "III-4",
   "장애",
   "이슈"
  ],
  "e": "위험관리 III-5가 아님에 주의."
 },
 {
  "s": "s1",
  "t": "ECO 2026 구조",
  "d": 1,
  "q": "ECO 2026 시험에서 예측형 문항과 애자일·하이브리드 문항의 대략적 비중을 쓰시오.",
  "a": "예측형 약 40%, 애자일, 하이브리드 약 60%",
  "k": [
   "40",
   "60"
  ],
  "e": "접근법은 3개 도메인 전체에 분산된다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "2026 PMP 시험의 총 문항 수, 채점 문항 수, 시험 시간을 쓰시오.",
  "a": "180문항, 채점 170문항, 240분",
  "k": [
   "180",
   "170",
   "240"
  ],
  "e": "나머지 10문항은 비채점 pretest다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "ECO 2026에서 NEW로 추가된 문항 유형 2가지를 쓰시오.",
  "a": "Case or Scenario, Graphic-Based",
  "k": [
   "Case",
   "Graphic"
  ],
  "e": "빈칸 채우기는 공식 목록에 없다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "PMP 2026 문항 유형 중 CBT 전용인 4가지를 쓰시오.",
  "a": "Matching, Enhanced Matching, Point and Click(Hotspot), Pull-down List",
  "k": [
   "Matching",
   "Hotspot",
   "Pull-down"
  ],
  "e": "Multiple-Choice·Multiple-Response·Case·Graphic은 전 방식이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "학력별 프로젝트 리딩 경력 요건(고졸·전문학사·학사·GAC 학위)을 개월 수로 쓰시오.",
  "a": "60개월, 48개월, 36개월, 24개월",
  "k": [
   "60",
   "48",
   "36",
   "24"
  ],
  "e": "최근 10년 내 비중복 경력이다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "35시간 교육 요건을 면제받을 수 있는 PMI 자격을 쓰시오.",
  "a": "CAPM(유효한 자격 보유 시)",
  "k": [
   "CAPM"
  ],
  "e": "책·모의고사만으로는 교육으로 인정되지 않는다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 3,
  "q": "2026-12-01부터 강사 진행 라이브 교육으로 인정되는 제공처 3종을 쓰시오.",
  "a": "ATP, China REP, 인증 학위과정(GAC 포함)",
  "k": [
   "ATP",
   "REP",
   "학위"
  ],
  "e": "자기주도 과정은 기관 무관 인정."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "PMP 자격 유지 요건(주기와 PDU)을 쓰시오.",
  "a": "3년마다 60 PDU",
  "k": [
   "3년",
   "60"
  ],
  "e": "갱신비도 납부한다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "한국어 번역 시험에서 영어 원문 문항을 볼 수 있게 해 주는 화면 기능을 쓰시오.",
  "a": "Exhibit 버튼",
  "k": [
   "Exhibit"
  ],
  "e": "현행 Handbook은 이를 translated exam + 영어 Exhibit으로 설명한다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 1,
  "q": "2021 ECO의 도메인 비중을 People·Process·BE 순으로 쓰시오.",
  "a": "42%, 50%, 8%",
  "k": [
   "42",
   "50",
   "8"
  ],
  "e": "2026은 33 / 41 / 26."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "2021 Process에서 2026 Business Environment로 이동한 주제 3가지 이상을 쓰시오.",
  "a": "위험, 변경, 이슈, 거버넌스, 컴플라이언스, 지속적 개선",
  "k": [
   "위험",
   "변경",
   "거버넌스"
  ],
  "e": "이 때문에 BE가 8%에서 26%로 늘었다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "ECO 2026 직무분석(JTA)의 입력으로 사용된 두 트렌드를 쓰시오.",
  "a": "AI(인공지능), 지속가능성(sustainability)",
  "k": [
   "AI",
   "지속가능성"
  ],
  "e": "지속가능성은 여러 Enabler에 반복된다."
 },
 {
  "s": "s1",
  "t": "2021→2026 변경점",
  "d": 2,
  "q": "Agile Practice Guide 2판에서 daily standup과 backlog grooming을 대체한 용어를 쓰시오.",
  "a": "daily coordination meeting, backlog refinement",
  "k": [
   "coordination",
   "refinement"
  ],
  "e": "하이브리드는 delivery continuum으로 본다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "예측형 프로젝트의 변경 처리 흐름을 4단계로 쓰시오.",
  "a": "변경 요청(CR) → 영향 분석 → CCB 승인/거절 → 문서, 기준선 갱신",
  "k": [
   "영향",
   "CCB",
   "갱신"
  ],
  "e": "PM 단독 승인·거절은 오답이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 1,
  "q": "팀을 지원·코칭하고 장애를 제거해 팀이 성과를 내도록 돕는 리더십을 무엇이라 하는가?",
  "a": "서번트 리더십(Servant leadership)",
  "k": [
   "서번트"
  ],
  "e": "애자일 맥락 PM의 기본 역할이다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "상황형 문항에서 에스컬레이션이 정답이 되는 조건 2가지를 쓰시오.",
  "a": "PM 권한, 임계치를 넘을 때, 분석과 대안을 갖춘 뒤",
  "k": [
   "권한",
   "임계치",
   "대안"
  ],
  "e": "ECO III-1 escalation paths and thresholds."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 3,
  "q": "'먼저 분석' 원칙보다 우선해 즉시 중단·보고가 정답이 되는 상황의 범주를 쓰시오.",
  "a": "안전, 윤리, 법규(컴플라이언스) 위반",
  "k": [
   "안전",
   "윤리",
   "법규"
  ],
  "e": "윤리·컴플라이언스는 타협 불가."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "상황형 문항의 오답 4패턴을 쓰시오.",
  "a": "너무 이름(성급한 에스컬레이션), 과함(즉시 압축 등), 책임 회피, 절차 위반, 단독 결정",
  "k": [
   "이름",
   "과함",
   "회피",
   "단독"
  ],
  "e": "이 네 패턴을 소거 기준으로 쓴다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 1,
  "q": "관련 프로젝트를 조정 관리해 개별 관리로 얻을 수 없는 편익을 얻는 것을 무엇이라 하는가?",
  "a": "프로그램(Program)",
  "k": [
   "프로그램"
  ],
  "e": "포트폴리오는 전략 목표 기준이며 관련성 불필요."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "PMO 3유형을 통제 수준이 낮은 것부터 쓰시오.",
  "a": "Supportive(지원형) → Controlling(통제형) → Directive(지시형)",
  "k": [
   "Supportive",
   "Controlling",
   "Directive"
  ],
  "e": "지시형은 프로젝트를 직접 관리한다."
 },
 {
  "s": "s1",
  "t": "프로젝트·프로그램·포트폴리오·PMO",
  "d": 2,
  "q": "조직 내부의 템플릿·정책·교훈 저장소와, PM이 통제할 수 없는 법규·시장 조건을 각각 무엇이라 하는가?",
  "a": "OPA(조직 프로세스 자산), EEF(기업 환경 요인)",
  "k": [
   "OPA",
   "EEF"
  ],
  "e": "교훈 저장소 = OPA, 규제 = EEF."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 1,
  "q": "Agile Practice Guide 1판 기준 예측형·반복형·증분형·애자일의 목표를 순서대로 쓰시오.",
  "a": "원가 관리, 해결책의 정확성, 속도, 고객 가치",
  "k": [
   "원가",
   "정확성",
   "속도",
   "가치"
  ],
  "e": "애자일 = 잦은 인도·피드백을 통한 고객 가치."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 2,
  "q": "프로젝트 맥락에 맞게 접근법·거버넌스·프로세스를 조정하는 것을 무엇이라 하는가?",
  "a": "테일러링(Tailoring)",
  "k": [
   "테일러링"
  ],
  "e": "ECO II-1의 개발 접근법 권고와 연결된다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 3,
  "q": "스테이시 매트릭스의 두 축을 쓰시오.",
  "a": "요구사항 합의 수준, 기술 확실성",
  "k": [
   "요구",
   "기술"
  ],
  "e": "둘 다 높으면 단순 → 예측형 적합."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "팀의 장애를 제거하고 구성원 성장을 우선 지원하는, PMI 가 애자일 팀에 권장하는 리더십을 무엇이라 하는가?",
  "a": "서번트 리더십(Servant leadership)",
  "k": [
   "서번트",
   "Servant"
  ],
  "e": "섬김이 먼저인 리더십이다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "Hersey–Blanchard 상황적 리더십의 네 스타일을 구성원 성숙도가 낮은 순으로 쓰시오.",
  "a": "지시형(Directing) → 코칭형(Coaching) → 지원형(Supporting) → 위임형(Delegating)",
  "k": [
   "지시",
   "코칭",
   "지원",
   "위임"
  ],
  "e": "역량·의지가 높아질수록 지시에서 위임으로 옮긴다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 1,
  "q": "RACI 의 네 글자가 뜻하는 역할을 영어로 쓰시오.",
  "a": "Responsible ,  Accountable ,  Consulted ,  Informed",
  "k": [
   "Responsible",
   "Accountable",
   "Consulted",
   "Informed"
  ],
  "e": "A 는 활동당 1명이다."
 },
 {
  "s": "s2",
  "t": "공동 비전·팀 리딩",
  "d": 2,
  "q": "ECO I-1 공동 비전 Task 의 Enabler 중, 비전이 잘못 이해될 때 수행하는 분석은 무엇인가?",
  "a": "비전 오해의 근본원인 분석(root cause)",
  "k": [
   "근본원인"
  ],
  "e": "Break down situations to identify the root cause of a misunderstanding of the vision."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "Tuckman 팀 개발 5단계를 영어로 순서대로 쓰시오.",
  "a": "Forming → Storming → Norming → Performing → Adjourning",
  "k": [
   "Forming",
   "Storming",
   "Norming",
   "Performing",
   "Adjourning"
  ],
  "e": "Adjourning 은 1977년에 추가되었다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "Herzberg 2요인 이론에서 부족하면 불만을 일으키지만 충족되어도 동기를 만들지 못하는 요인은?",
  "a": "위생요인(Hygiene factor)",
  "k": [
   "위생"
  ],
  "e": "급여·근무 조건·정책·감독 등이 해당한다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "Vroom 기대이론의 세 요소를 쓰시오.",
  "a": "기대(Expectancy) ,  수단성(Instrumentality) ,  유의성(Valence)",
  "k": [
   "기대",
   "수단성",
   "유의성"
  ],
  "e": "노력→성과, 성과→보상, 보상의 가치."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "팀이 함께 작성하며 팀 가치·업무 합의·그라운드룰·의사결정 방식을 담는 문서는?",
  "a": "팀 헌장(Team charter)",
  "k": [
   "팀 헌장",
   "Team charter"
  ],
  "e": "프로젝트 헌장(Project charter)과 다른 문서다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 2,
  "q": "실수나 반대 의견을 말해도 처벌받지 않는다는 팀 구성원의 공유된 믿음을 무엇이라 하는가?",
  "a": "심리적 안정감(Psychological safety)",
  "k": [
   "심리적 안정감",
   "Psychological safety"
  ],
  "e": "회고와 학습의 전제 조건이다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 1,
  "q": "PMI 가 기본으로 지향하는 Win-Win 갈등 해결 기법은?",
  "a": "협업/문제해결(Collaborate/Problem solve)",
  "k": [
   "협업",
   "문제해결"
  ],
  "e": "다양한 관점을 통합해 근본 원인을 해결한다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 3,
  "q": "갈등 해결 5기법을 모두 쓰시오(한국어 또는 영어).",
  "a": "철수/회피 ,  완화/수용 ,  타협/화해 ,  강요/지시 ,  협업/문제해결",
  "k": [
   "회피",
   "완화",
   "타협",
   "강요",
   "협업"
  ],
  "e": "Withdraw · Smooth · Compromise · Force · Collaborate."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "협상이 결렬될 때 택할 수 있는 최선의 대안을 뜻하는 약어는?",
  "a": "BATNA(Best Alternative To a Negotiated Agreement)",
  "k": [
   "BATNA"
  ],
  "e": "ZOPA 는 합의 가능 구간이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "권력/관심 그리드에서 권력과 관심이 모두 높은 이해관계자에 대한 전략은?",
  "a": "밀접 관리(Manage closely)",
  "k": [
   "밀접",
   "Manage closely"
  ],
  "e": "권력↑관심↓ 만족 유지, 권력↓관심↑ 정보 제공, 둘 다 낮으면 모니터링."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "현저성 모형(Salience model)의 세 속성을 쓰시오.",
  "a": "권력(Power) ,  긴급성(Urgency) ,  정당성(Legitimacy)",
  "k": [
   "권력",
   "긴급성",
   "정당성"
  ],
  "e": "세 속성을 모두 가진 이해관계자가 최우선이다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "이해관계자 참여 수준 5단계를 낮은 순으로 쓰시오.",
  "a": "인지 못함(Unaware) → 저항(Resistant) → 중립(Neutral) → 지지(Supportive) → 주도(Leading)",
  "k": [
   "인지",
   "저항",
   "중립",
   "지지",
   "주도"
  ],
  "e": "C=현재, D=원하는 수준으로 표시한다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "이해관계자의 식별 정보·평가 정보·분류를 기록하는 문서는?",
  "a": "이해관계자 등록부(Stakeholder register)",
  "k": [
   "이해관계자 등록부",
   "Stakeholder register"
  ],
  "e": "참여 전략은 이해관계자 참여계획에 담는다."
 },
 {
  "s": "s2",
  "t": "기대 정렬·고객 기대 관리",
  "d": 2,
  "q": "ECO I-6 Task 에서 기대를 식별·관리해야 하는 고객의 두 범주를 쓰시오.",
  "a": "내부 고객(Internal) ,  외부 고객(External)",
  "k": [
   "내부",
   "외부"
  ],
  "e": "Identify internal and external customer expectations."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 1,
  "q": "문서로 표현하기 어려운 경험·노하우 형태의 지식을 무엇이라 하는가?",
  "a": "암묵지(Tacit knowledge)",
  "k": [
   "암묵지",
   "Tacit"
  ],
  "e": "문서화된 지식은 형식지(Explicit)다."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 3,
  "q": "SECI 모형의 네 가지 지식 전환을 순서대로 쓰시오.",
  "a": "사회화 → 표출화 → 연결화 → 내면화",
  "k": [
   "사회화",
   "표출화",
   "연결화",
   "내면화"
  ],
  "e": "Socialization · Externalization · Combination · Internalization."
 },
 {
  "s": "s2",
  "t": "지식 이전",
  "d": 2,
  "q": "프로젝트 동안 수시로 교훈을 기록하는 문서와, 종료 시 그 교훈이 이관되는 곳을 쓰시오.",
  "a": "교훈 등록부(Lessons learned register) → 조직 프로세스 자산(OPA)의 교훈 저장소",
  "k": [
   "교훈 등록부",
   "OPA"
  ],
  "e": "III-6 지속적 개선의 'Update OPAs'와 연결된다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 3,
  "q": "PM 을 포함한 12명 팀의 의사소통 채널 수는?",
  "a": "66",
  "k": [
   "66"
  ],
  "e": "12×11/2 = 66."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "의사소통 방법 세 가지(Communication methods)를 쓰시오.",
  "a": "상호작용(Interactive) ,  푸시(Push) ,  풀(Pull)",
  "k": [
   "Interactive",
   "Push",
   "Pull"
  ],
  "e": "오해 해소에는 상호작용이 가장 효과적이다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 1,
  "q": "번다운 차트·태스크보드처럼 누구나 볼 수 있게 공개한 대형 시각 표시물을 무엇이라 하는가?",
  "a": "정보 방열기(Information radiator)",
  "k": [
   "정보 방열기",
   "Information radiator"
  ],
  "e": "투명성을 높이는 Pull 도구다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 3,
  "q": "French & Raven 의 다섯 가지 권력 기반을 쓰시오.",
  "a": "합법적(Legitimate) ,  보상적(Reward) ,  강압적(Coercive) ,  전문가(Expert) ,  준거적(Referent)",
  "k": [
   "합법",
   "보상",
   "강압",
   "전문가",
   "준거"
  ],
  "e": "PM 에게 권장되는 것은 전문가·준거 권력이다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 1,
  "q": "익명의 전문가 의견을 여러 차례 수렴·피드백해 합의에 이르는 기법은?",
  "a": "델파이 기법(Delphi technique)",
  "k": [
   "델파이",
   "Delphi"
  ],
  "e": "권위자 영향과 집단사고를 줄인다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 3,
  "q": "감성지능(EI)의 네 구성요소를 쓰시오.",
  "a": "자기 인식 ,  자기 관리 ,  사회적 인식 ,  관계 관리",
  "k": [
   "자기 인식",
   "자기 관리",
   "사회적 인식",
   "관계 관리"
  ],
  "e": "Self-awareness · Self-management · Social awareness · Relationship management."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 1,
  "q": "프로젝트를 공식 승인하고 PM에게 권한을 부여하며 스폰서가 발행하는 문서는?",
  "a": "프로젝트 헌장(Project Charter)",
  "k": [
   "헌장",
   "Charter"
  ],
  "e": "착수 단계의 핵심 산출물이다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "범위·일정·원가 기준선을 통합한 승인된 계획으로 EVM 비교 기준이 되는 것은?",
  "a": "성과측정기준선(PMB, Performance Measurement Baseline)",
  "k": [
   "성과측정기준선",
   "PMB"
  ],
  "e": "관리 예비비는 포함하지 않는다."
 },
 {
  "s": "s3",
  "t": "통합 — 헌장·관리계획서",
  "d": 2,
  "q": "증거 없이 참으로 간주한 사항을 기록·추적하는 문서는?",
  "a": "가정 기록부(Assumption Log)",
  "k": [
   "가정",
   "Assumption"
  ],
  "e": "가정과 제약을 함께 기록하기도 한다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "WBS의 최하위 수준 요소로, 원가·기간을 추정·관리하는 단위는?",
  "a": "작업 패키지(Work Package)",
  "k": [
   "작업 패키지",
   "Work Package"
  ],
  "e": "활동은 그 아래 일정 관리에서 도출한다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "범위 기준선을 구성하는 세 가지를 쓰시오.",
  "a": "프로젝트 범위 기술서, WBS, WBS 사전",
  "k": [
   "범위 기술서",
   "WBS",
   "WBS 사전"
  ],
  "e": "요구사항 문서·RTM은 포함되지 않는다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "하위 요소의 합이 상위 요소의 작업을 빠짐없이·초과 없이 포함해야 한다는 WBS 원칙은?",
  "a": "100% 규칙(100% Rule)",
  "k": [
   "100%"
  ],
  "e": "분해의 완전성 원칙이다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "요구사항을 비즈니스 목표·인도물·테스트와 연결해 추적하는 표는?",
  "a": "요구사항 추적 매트릭스(RTM)",
  "k": [
   "추적",
   "RTM"
  ],
  "e": "누락·금도금 방지."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 2,
  "q": "먼 미래의 작업은 상위 수준으로 두고 가까운 작업만 상세히 계획하는 점진적 구체화 기법은?",
  "a": "연동 기획(Rolling Wave Planning)",
  "k": [
   "연동",
   "Rolling Wave"
  ],
  "e": "계획 패키지 형태로 남겨 둔다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 3,
  "q": "팀이 요구되지 않은 기능을 자발적으로 추가하는 행위를 무엇이라 하는가?",
  "a": "금도금(Gold Plating)",
  "k": [
   "금도금",
   "Gold Plating"
  ],
  "e": "통제되지 않은 요청 수용은 범위 추가(Scope Creep)."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "프로젝트 종료일을 늦추지 않고 활동을 지연할 수 있는 시간(LS − ES)은?",
  "a": "총 여유(Total Float)",
  "k": [
   "총 여유",
   "Total Float"
  ],
  "e": "후행 ES 기준은 자유 여유."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "주경로 활동에 자원을 추가해 기간을 줄이는 일정 단축 기법은?",
  "a": "공정 압축(Crashing)",
  "k": [
   "압축",
   "Crashing"
  ],
  "e": "원가 증가 — 비용 기울기 최소 활동부터."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "순차 활동을 병행하여 기간을 줄이는 일정 단축 기법은?",
  "a": "공정 중첩(Fast-tracking)",
  "k": [
   "중첩",
   "Fast-tracking"
  ],
  "e": "위험·재작업 증가."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 2,
  "q": "활동 A(4일) → B(6일), A → C(3일) → D(2일), B와 D가 끝나면 E(5일). 모두 FS일 때 프로젝트 기간은?",
  "a": "15일",
  "k": [
   "15"
  ],
  "e": "A-B-E = 15일, A-C-D-E = 14일. 주경로는 A-B-E."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 3,
  "q": "3점 추정에서 낙관 4일, 최빈 7일, 비관 16일일 때 베타(PERT) 분포 기대값은?",
  "a": "8일",
  "k": [
   "8"
  ],
  "e": "(4 + 4×7 + 16) / 6 = 48 / 6 = 8일."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 3,
  "q": "작업자 생산성 데이터(예: 1m당 2시간)처럼 통계적 관계로 기간·원가를 추정하는 기법은?",
  "a": "모수 추정(Parametric Estimating)",
  "k": [
   "모수",
   "Parametric"
  ],
  "e": "모델·데이터 품질이 정확도를 좌우한다."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 1,
  "q": "식별된 위험(known-unknowns)에 대비해 원가 기준선 안에 두는 예비비는?",
  "a": "우발 예비비(Contingency Reserve)",
  "k": [
   "우발",
   "Contingency"
  ],
  "e": "미식별 위험은 관리 예비비."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "원가 기준선에 무엇을 더하면 프로젝트 예산(Project Budget)이 되는가?",
  "a": "관리 예비비(Management Reserve)",
  "k": [
   "관리 예비비",
   "Management Reserve"
  ],
  "e": "사용 시 경영진 승인·변경통제."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "원가 기준선을 시간 축으로 누적해 그린 곡선의 형태는?",
  "a": "S-곡선(S-curve)",
  "k": [
   "S"
  ],
  "e": "초기·말기 지출은 적고 중간에 많다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 1,
  "q": "품질비용(CoQ) 중 교육·문서화·계획 시간처럼 결함을 미리 막기 위한 비용은?",
  "a": "예방 비용(Prevention Cost)",
  "k": [
   "예방",
   "Prevention"
  ],
  "e": "적합 비용 = 예방 + 평가."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "관리도에서 평균 한쪽으로 연속 7점이 찍히면 이상으로 보는 규칙은?",
  "a": "Rule of Seven(7의 규칙)",
  "k": [
   "Seven",
   "7"
  ],
  "e": "관리 한계 안이라도 조사 대상."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "80/20 원칙에 따라 빈도순 막대로 소수 핵심 원인을 보여 주는 도구는?",
  "a": "파레토 차트(Pareto Chart)",
  "k": [
   "파레토",
   "Pareto"
  ],
  "e": "히스토그램의 특수 형태."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 1,
  "q": "R·A·C·I로 작업별 역할을 표시하는 책임배정매트릭스의 대표 형태는?",
  "a": "RACI 차트",
  "k": [
   "RACI"
  ],
  "e": "A는 작업당 한 명."
 },
 {
  "s": "s3",
  "t": "자원 관리",
  "d": 2,
  "q": "자원이 가용한 기간·근무일을 보여 주는 문서는?",
  "a": "자원 달력(Resource Calendar)",
  "k": [
   "자원 달력",
   "Resource Calendar"
  ],
  "e": "일정 개발·자원 확보의 입력이다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 1,
  "q": "명확한 사양의 품목에 대해 판매자에게 가격 견적을 요청하는 문서는?",
  "a": "견적 요청서(RFQ)",
  "k": [
   "RFQ",
   "견적"
  ],
  "e": "해결책 제안은 RFP, 정보 수집은 RFI."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "조달 품목을 상세히 설명해 판매자가 제공 가능 여부를 판단하게 하는 문서는?",
  "a": "작업 기술서(SOW, Statement of Work)",
  "k": [
   "작업 기술서",
   "SOW"
  ],
  "e": "서비스 조달에서는 TOR을 쓰기도 한다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 3,
  "q": "판매자 원가를 보전하고 고정 금액의 수수료를 추가로 지급하는 계약 유형은?",
  "a": "원가 + 고정 수수료(CPFF)",
  "k": [
   "CPFF",
   "고정 수수료"
  ],
  "e": "원가정산형 중 구매자 위험이 가장 크다."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 1,
  "q": "의사소통 채널 수를 구하는 공식은? (n = PM 포함 인원)",
  "a": "n(n−1)/2",
  "k": [
   "n(n-1)/2",
   "n(n−1)/2"
  ],
  "e": "10명이면 45개."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "PM 포함 8명 팀에 4명이 합류하면 늘어나는 의사소통 채널 수는?",
  "a": "38개",
  "k": [
   "38"
  ],
  "e": "8명 28개 → 12명 66개, 차이 38개."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "프로젝트 기간 내내 기록하고 종료 시 조직 저장소에 반영하는, 경험에서 얻은 지식은?",
  "a": "교훈(Lessons Learned)",
  "k": [
   "교훈",
   "Lessons Learned"
  ],
  "e": "종료 시 OPA(교훈 저장소)를 갱신한다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 1,
  "q": "애자일 선언 4가치 중 '포괄적인 문서'보다 더 가치 있게 여기는 것은?",
  "a": "작동하는 소프트웨어(Working software)",
  "k": [
   "작동하는 소프트웨어"
  ],
  "e": "작동하는 소프트웨어가 진척의 주요 척도이기도 하다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "피드백으로 해법을 다듬어 정확성을 높이는 생애주기와, 완성된 조각을 자주 인도해 속도를 높이는 생애주기를 순서대로 쓰시오.",
  "a": "반복형(Iterative), 증분형(Incremental)",
  "k": [
   "반복",
   "증분"
  ],
  "e": "애자일은 두 특성을 결합한다."
 },
 {
  "s": "s4",
  "t": "애자일 선언·원칙·생애주기",
  "d": 2,
  "q": "애자일 12원칙에서 스폰서·개발자·사용자가 일정한 페이스를 무기한 유지할 수 있어야 한다는 개념은?",
  "a": "지속 가능한 속도(Sustainable pace)",
  "k": [
   "지속 가능"
  ],
  "e": "상시 초과근무는 원칙 위반이다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "스크럼 경험주의의 3기둥을 쓰시오.",
  "a": "투명성 ,  점검 ,  적응",
  "k": [
   "투명성",
   "점검",
   "적응"
  ],
  "e": "Transparency · Inspection · Adaptation."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "Scrum Guide 2020의 세 책임(accountabilities)을 쓰시오.",
  "a": "Product Owner ,  Scrum Master ,  Developers",
  "k": [
   "Product Owner",
   "Scrum Master",
   "Developers"
  ],
  "e": "2020판은 Development Team 대신 Developers를 쓴다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "Product Backlog, Sprint Backlog, Increment의 확약(commitment)을 순서대로 쓰시오.",
  "a": "Product Goal, Sprint Goal, Definition of Done",
  "k": [
   "Product Goal",
   "Sprint Goal",
   "Definition of Done"
  ],
  "e": "산출물-확약 짝은 단골 출제 포인트다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "1개월 스프린트 기준 Sprint Planning, Sprint Review, Sprint Retrospective의 최대 타임박스를 순서대로 쓰시오.",
  "a": "8시간, 4시간, 3시간",
  "k": [
   "8",
   "4",
   "3"
  ],
  "e": "Daily Scrum은 15분이다."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 2,
  "q": "스프린트를 취소할 권한을 가진 사람은?",
  "a": "Product Owner",
  "k": [
   "Product Owner"
  ],
  "e": "스프린트 목표가 무의미해졌을 때 PO만 취소한다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "평균 WIP 15건, 평균 처리량 주당 5건일 때 평균 사이클 타임은?",
  "a": "3주",
  "k": [
   "3"
  ],
  "e": "Little's Law: 15 ÷ 5 = 3주."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 1,
  "q": "칸반에서 동시에 진행할 수 있는 작업 수에 상한을 두는 실천을 무엇이라 하는가?",
  "a": "WIP 제한(WIP limit)",
  "k": [
   "WIP"
  ],
  "e": "흐름 개선·병목 노출 효과가 있다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "XP에서 기술적 불확실성을 줄여 추정이 가능하도록 하는 짧은 타임박스 조사·실험은?",
  "a": "스파이크(Spike)",
  "k": [
   "스파이크"
  ],
  "e": "결과물은 제품 기능이 아니라 지식이다."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 3,
  "q": "가치흐름지도에서 총 리드 타임 25일 중 부가가치 시간이 5일일 때 프로세스 효율(%)은?",
  "a": "20%",
  "k": [
   "20"
  ],
  "e": "5 ÷ 25 = 0.2 = 20%."
 },
 {
  "s": "s4",
  "t": "칸반·린·XP",
  "d": 2,
  "q": "실패하는 테스트를 먼저 작성하고 이를 통과하는 코드를 만든 뒤 리팩터링하는 XP 실천은?",
  "a": "테스트 주도 개발(TDD)",
  "k": [
   "TDD"
  ],
  "e": "Red-Green-Refactor 순환이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 1,
  "q": "사용자 스토리 품질 기준 INVEST의 여섯 단어를 쓰시오.",
  "a": "Independent, Negotiable, Valuable, Estimable, Small, Testable",
  "k": [
   "Independent",
   "Negotiable",
   "Valuable",
   "Estimable",
   "Small",
   "Testable"
  ],
  "e": "E는 Estimable이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 1,
  "q": "사용자 스토리의 3C를 쓰시오.",
  "a": "Card, Conversation, Confirmation",
  "k": [
   "Card",
   "Conversation",
   "Confirmation"
  ],
  "e": "Ron Jeffries가 제시했다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "WSJF(Weighted Shortest Job First)의 계산식을 쓰시오.",
  "a": "지연비용(Cost of Delay) ÷ 작업 크기(기간)",
  "k": [
   "지연비용",
   "크기"
  ],
  "e": "값이 큰 항목부터 수행한다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "수용 기준을 '전제 조건 → 행동 → 기대 결과'로 쓰는 BDD 형식은?",
  "a": "Given-When-Then",
  "k": [
   "Given",
   "When",
   "Then"
  ],
  "e": "검증 가능한 수용 기준 작성 형식이다."
 },
 {
  "s": "s4",
  "t": "백로그·사용자 스토리·우선순위",
  "d": 2,
  "q": "Kano 모델에서 없어도 불만은 없지만 있으면 만족이 크게 오르는 요소는?",
  "a": "흥분 요소(Delighter, 매력 품질)",
  "k": [
   "흥분"
  ],
  "e": "시간이 지나면 기본 요소로 바뀔 수 있다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "잔여 백로그 180점, 최근 세 스프린트 속도 28·32·30점일 때 남은 스프린트 수는?",
  "a": "6 스프린트",
  "k": [
   "6"
  ],
  "e": "평균 30, 180 ÷ 30 = 6."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 1,
  "q": "추정자들이 카드를 동시에 공개하고 극단값의 근거를 토론한 뒤 재추정하는 합의형 상대 추정 기법은?",
  "a": "플래닝 포커(Planning Poker)",
  "k": [
   "플래닝 포커"
  ],
  "e": "와이드밴드 델파이의 변형이다."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "반복당 DoD를 충족한 스토리 포인트의 합으로 측정하는 팀 실적 지표는?",
  "a": "속도(Velocity)",
  "k": [
   "속도"
  ],
  "e": "팀 간 비교에 쓰지 않는다."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 1,
  "q": "가설 검증·학습을 위한 최소 제품(약어)과 고객이 가치를 인지하는 최소 출시 기능(약어)을 순서대로 쓰시오.",
  "a": "MVP, MMF",
  "k": [
   "MVP",
   "MMF"
  ],
  "e": "Minimum Viable Product / Minimum Marketable Feature."
 },
 {
  "s": "s4",
  "t": "가치 인도·MVP",
  "d": 2,
  "q": "ECO II-3에서 편익을 추적하기 위해 확인해야 하는 것은?",
  "a": "편익 추적 측정 체계(measurement system)",
  "k": [
   "측정"
  ],
  "e": "Verify a measurement system is in place to track benefits."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 1,
  "q": "APG 2판이 하이브리드를 이분법 대신 바라보는 관점을 영어로 쓰시오.",
  "a": "Delivery continuum(인도 연속체)",
  "k": [
   "continuum"
  ],
  "e": "예측형~적응형 사이의 연속선 위에서 선택한다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "APG 1판 애자일 적합성 필터의 3범주를 쓰시오.",
  "a": "문화(Culture) ,  팀(Team) ,  프로젝트(Project)",
  "k": [
   "문화",
   "팀",
   "프로젝트"
  ],
  "e": "각 범주를 점수화해 적합 접근법을 판단한다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 1,
  "q": "잔여 작업 대신 누적 완료와 총 범위를 함께 그려 범위 변경이 보이는 차트는?",
  "a": "번업 차트(Burnup chart)",
  "k": [
   "번업"
  ],
  "e": "번다운은 잔여 작업만 보인다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "누구나 한눈에 볼 수 있게 게시한 큰 시각 자료로 상태를 공유하는 도구를 무엇이라 하는가?",
  "a": "정보 방열기(Information radiator)",
  "k": [
   "정보 방열기"
  ],
  "e": "Big Visible Chart라고도 한다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "Robert Greenleaf가 제시한, 리더가 팀을 섬기며 장애 제거·코칭으로 성과를 이끄는 리더십은?",
  "a": "서번트 리더십(Servant leadership)",
  "k": [
   "서번트"
  ],
  "e": "스크럼 마스터의 기본 리더십 스타일이다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 1,
  "q": "지표가 평가 목표가 되면 좋은 지표 구실을 못 하게 된다는 법칙의 이름은?",
  "a": "굿하트의 법칙(Goodhart's Law)",
  "k": [
   "굿하트",
   "Goodhart"
  ],
  "e": "벨로시티를 성과평가에 연동하면 포인트가 부풀려지는 현상이 대표 사례다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 1,
  "q": "정성적 목표(Objective)와 측정 가능한 핵심 결과(Key Results)로 구성된 목표 정렬 기법의 약어는?",
  "a": "OKR",
  "k": [
   "OKR"
  ],
  "e": "KR은 활동이 아니라 결과다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "EV = 300, AC = 250일 때 CPI는? (소수 둘째 자리까지)",
  "a": "1.20",
  "k": [
   "1.2"
  ],
  "e": "CPI = EV ÷ AC = 300 ÷ 250 = 1.2. 1보다 크므로 원가 효율이 좋다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "BAC = 1,000, CPI = 0.8이고 현재 원가 효율이 계속된다고 볼 때 EAC는?",
  "a": "1,250",
  "k": [
   "1250",
   "1,250"
  ],
  "e": "EAC = BAC ÷ CPI = 1,000 ÷ 0.8 = 1,250."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 3,
  "q": "BAC = 500, EV = 200, AC = 250일 때 BAC 기준 TCPI는? (소수 둘째 자리까지)",
  "a": "1.20",
  "k": [
   "1.2"
  ],
  "e": "TCPI = (500 − 200) ÷ (500 − 250) = 300 ÷ 250 = 1.2. 남은 작업을 더 효율적으로 해야 한다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "겉으로는 Green이지만 실제로는 Red인 상태 보고를 과일에 빗대 부르는 말은?",
  "a": "수박 보고(Watermelon reporting)",
  "k": [
   "수박",
   "Watermelon"
  ],
  "e": "지표 정의·데이터 원천을 의심하고 현장 신호로 검증해야 한다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "같은 대상을 서로 다른 데이터 원천으로 잰 값의 차이 원인을 밝혀 맞추는 활동(ECO II-9)의 영어 용어는?",
  "a": "Reconciliation(조정)",
  "k": [
   "Reconciliation",
   "조정"
  ],
  "e": "ECO II-9 'Develop project metrics, analysis, and reconciliation'."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "팀 공간에 크게 게시해 누구나 지나가며 상태를 볼 수 있게 한 시각 표시물을 무엇이라 하는가?",
  "a": "정보 방열기(Information radiator)",
  "k": [
   "정보 방열기",
   "Information radiator"
  ],
  "e": "Alistair Cockburn이 붙인 이름. 분산 팀은 온라인 대시보드로 대체한다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "리틀의 법칙에서 평균 사이클타임을 구하는 식은?",
  "a": "평균 WIP ÷ 평균 처리량",
  "k": [
   "WIP",
   "처리량"
  ],
  "e": "Cycle time = WIP / Throughput."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "평균 WIP가 30개, 평균 처리량이 주당 10개일 때 평균 사이클타임은?",
  "a": "3주",
  "k": [
   "3"
  ],
  "e": "30 ÷ 10 = 3주."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "CFD에서 특정 단계의 띠 폭이 계속 넓어지는 것은 무엇을 뜻하는가?",
  "a": "그 단계의 병목(작업 누적)",
  "k": [
   "병목",
   "누적"
  ],
  "e": "띠의 수직 폭이 WIP이므로 넓어지면 작업이 쌓이고 있다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 2,
  "q": "범위선과 누적 완료선을 따로 그려 범위 변경을 보여 주는 차트는?",
  "a": "번업 차트(Burnup chart)",
  "k": [
   "번업",
   "Burnup"
  ],
  "e": "번다운은 범위 변경이 남은 작업과 섞여 보이지 않는다."
 },
 {
  "s": "s5",
  "t": "상태 보고·시각화",
  "d": 1,
  "q": "대시보드에서 상태를 빨강·주황·초록 신호등 색으로 표시하는 방식의 약어는?",
  "a": "RAG",
  "k": [
   "RAG"
  ],
  "e": "Red·Amber·Green."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "산출물의 버전과 기술 사양을 식별·추적해 최신본을 유지하는 활동은?",
  "a": "형상관리(Configuration management)",
  "k": [
   "형상관리",
   "Configuration"
  ],
  "e": "변경 승인 결정(변경통제)과 구분한다."
 },
 {
  "s": "s5",
  "t": "산출물 관리",
  "d": 2,
  "q": "범위·일정·원가 기준선을 통합한 기준선의 이름은?",
  "a": "성과측정기준선(PMB, Performance Measurement Baseline)",
  "k": [
   "성과측정기준선",
   "PMB"
  ],
  "e": "EVM의 비교 기준이 된다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 1,
  "q": "모든 증분에 공통으로 적용되는, 팀이 합의한 완료 기준의 약어는?",
  "a": "DoD(Definition of Done)",
  "k": [
   "DoD",
   "Definition of Done"
  ],
  "e": "인수 기준은 스토리별, DoD는 공통."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "예측형에서 고객이 완료된 인도물을 공식 인수하는 프로세스는?",
  "a": "범위 확인(Validate Scope)",
  "k": [
   "범위 확인",
   "Validate Scope"
  ],
  "e": "품질 통제(Control Quality) 다음에 수행한다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "품질 비용(CoQ) 중 출시 후 보증 수리·리콜·고객 클레임 비용의 분류는?",
  "a": "외부 실패 비용",
  "k": [
   "외부 실패",
   "External failure"
  ],
  "e": "부적합 비용 중 가장 비싼 범주다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "관리도에서 평균선 한쪽에 연속으로 7개 점이 나타나면 이상으로 보는 규칙의 이름은?",
  "a": "Rule of Seven(7의 규칙)",
  "k": [
   "Rule of Seven",
   "7"
  ],
  "e": "관리 한계 안이어도 특수 원인을 조사한다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 1,
  "q": "프로젝트 진행 내내 교훈을 기록하는 프로젝트 문서의 이름은?",
  "a": "교훈 등록부(Lessons learned register)",
  "k": [
   "교훈 등록부",
   "register"
  ],
  "e": "종료 때 조직의 교훈 저장소(repository)로 이관한다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "SECI 모델에서 암묵지를 형식지로 바꾸는 단계는?",
  "a": "표출화(Externalization)",
  "k": [
   "표출화",
   "Externalization"
  ],
  "e": "S: 암묵→암묵, E: 암묵→형식, C: 형식→형식, I: 형식→암묵."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "회고에서 '누구나 당시 아는 범위에서 최선을 다했다'고 전제하는 원칙의 이름은?",
  "a": "Prime Directive(최우선 지침)",
  "k": [
   "Prime Directive"
  ],
  "e": "Norm Kerth가 제시했다. 비난 없는 회고의 바탕이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "ECO II-10에서 운영 조직이나 다음 단계가 인수할 준비가 됐는지 검증하는 것을 무엇이라 하는가?",
  "a": "이관 준비도 검증(Validate readiness for transition)",
  "k": [
   "이관",
   "transition"
  ],
  "e": "교육·매뉴얼·지원 체계·지식 이전을 점검한다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "미해결 클레임을 협상으로 해결하지 못했을 때 소송 전에 쓰는 조정·중재 등의 대체적 분쟁 해결 방식의 약어는?",
  "a": "ADR(Alternative Dispute Resolution)",
  "k": [
   "ADR"
  ],
  "e": "협상 → ADR → 소송 순이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "단계 종료 시 성과를 검토해 계속·수정·중단을 결정하는 검토 지점을 무엇이라 하는가?",
  "a": "단계 게이트(Phase gate, Kill point)",
  "k": [
   "게이트",
   "gate",
   "Kill point"
  ],
  "e": "미해결 위험을 숨기지 않고 보고해야 한다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 1,
  "q": "프로젝트 팀이 통제할 수 없으며 조직 문화·법규·시장 상황 등을 포함하는 요인을 무엇이라 하는가?",
  "a": "기업 환경 요인(EEF, Enterprise Environmental Factors)",
  "k": [
   "기업 환경 요인",
   "EEF"
  ],
  "e": "OPA(조직 프로세스 자산)와 대비된다."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "템플릿·모범사례를 제공하지만 통제 수준이 가장 낮은 PMO 유형은?",
  "a": "지원형 PMO(Supportive PMO)",
  "k": [
   "Supportive",
   "지원형"
  ],
  "e": "Supportive < Controlling < Directive."
 },
 {
  "s": "s6",
  "t": "거버넌스 수립",
  "d": 2,
  "q": "ECO III-1에서 거버넌스 수립 시 함께 정의하라고 한 두 가지(지표, 상향 체계)는?",
  "a": "성공 지표(success metrics)와 에스컬레이션 경로, 임계치(escalation paths and thresholds)",
  "k": [
   "성공 지표",
   "에스컬레이션"
  ],
  "e": "구조·규칙·절차·보고·윤리·정책 수립과 함께 III-1의 세 Enabler를 이룬다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 1,
  "q": "지속가능성의 3중 결산(Triple Bottom Line) 세 요소를 영어로 쓰시오.",
  "a": "People, Planet, Profit",
  "k": [
   "People",
   "Planet",
   "Profit"
  ],
  "e": "사회·환경·경제 측면이다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 2,
  "q": "애자일 팀이 규제 준수 기준을 매 증분에서 검증하도록 넣어 두는 완료 기준 문서(합의)는?",
  "a": "완료 정의(DoD, Definition of Done)",
  "k": [
   "DoD",
   "완료 정의"
  ],
  "e": "DoR(준비 정의)과 구분한다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 3,
  "q": "ECO III-2 Enabler 중 규정 위반 시 벌금·작업 중단·평판 손상 등을 따져 보는 활동을 영어로 쓰시오.",
  "a": "Analyze the consequences of noncompliance(미준수 결과 분석)",
  "k": [
   "noncompliance",
   "미준수"
  ],
  "e": "미준수 결과 분석 후 필요한 접근·조치를 결정하고 준수 정도를 측정한다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 1,
  "q": "위험의 우선순위를 정하는 정성적 분석의 대표 도구는?",
  "a": "확률, 영향 매트릭스(Probability and Impact Matrix)",
  "k": [
   "확률",
   "영향",
   "매트릭스"
  ],
  "e": "정량 도구(몬테카를로·토네이도)와 구분한다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "위협 확률 40%, 영향 −50,000달러일 때 EMV는?",
  "a": "−20,000달러",
  "k": [
   "20,000",
   "−"
  ],
  "e": "0.4 × (−50,000) = −20,000."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "익명의 전문가 의견을 여러 차례 회람해 합의에 이르는 위험 식별 기법은?",
  "a": "델파이 기법(Delphi technique)",
  "k": [
   "델파이",
   "Delphi"
  ],
  "e": "익명성으로 영향력 있는 사람의 편향을 줄인다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 3,
  "q": "애자일 팀이 기술 불확실성을 조기에 탐색하기 위해 수행하는 시간 제한 실험 작업을 무엇이라 하는가?",
  "a": "스파이크(Spike)",
  "k": [
   "스파이크",
   "Spike"
  ],
  "e": "위험 조정 백로그와 함께 애자일 위험 대응 기법이다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 1,
  "q": "위협 대응 전략 5가지를 영어로 쓰시오.",
  "a": "Escalate, Avoid, Transfer, Mitigate, Accept",
  "k": [
   "Escalate",
   "Avoid",
   "Transfer",
   "Mitigate",
   "Accept"
  ],
  "e": "기회는 Escalate·Exploit·Share·Enhance·Accept."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "위험 대응을 실행했기 때문에 새로 생긴 위험을 무엇이라 하는가?",
  "a": "2차 위험(Secondary risk)",
  "k": [
   "2차",
   "Secondary"
  ],
  "e": "대응 후 남은 위험은 잔여 위험(Residual risk)."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 2,
  "q": "미식별 위험(unknown-unknowns)에 대비하며 원가 기준선 밖·프로젝트 예산 안에 두는 예비비는?",
  "a": "관리 예비(Management reserve)",
  "k": [
   "관리 예비",
   "Management"
  ],
  "e": "사용 시 경영진 승인(변경 요청)이 필요하다."
 },
 {
  "s": "s6",
  "t": "위험 대응·통제",
  "d": 3,
  "q": "위험 등록부에 없던 문제가 발생했을 때 즉흥적으로 취하는 대응을 무엇이라 하는가?",
  "a": "우회책(Workaround)",
  "k": [
   "우회책",
   "Workaround"
  ],
  "e": "계획된 대응인 비상 계획(contingency plan)과 구분한다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 1,
  "q": "변경 요청을 검토해 승인·연기·거절을 결정하는 공식 그룹의 약어는?",
  "a": "CCB(Change Control Board, 변경통제위원회)",
  "k": [
   "CCB"
  ],
  "e": "PM 단독 결정 금지."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "고객 요청 없이 팀이 기능을 덧붙이는 행위를 무엇이라 하는가?",
  "a": "골드 플레이팅(Gold plating)",
  "k": [
   "골드 플레이팅",
   "Gold plating"
  ],
  "e": "통제되지 않은 범위 확대는 scope creep."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "승인·거절·보류 여부와 관계없이 모든 변경 요청과 그 결정을 기록하는 문서는?",
  "a": "변경 로그(Change log)",
  "k": [
   "변경 로그",
   "Change log"
  ],
  "e": "결정 상태를 요청자에게 소통하는 근거가 된다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 1,
  "q": "이미 발생한 문제를 책임자·기한·상태와 함께 추적하는 문서는?",
  "a": "이슈 로그(Issue log)",
  "k": [
   "이슈 로그",
   "Issue log"
  ],
  "e": "위험 등록부와 구분한다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "Risks·Assumptions·Issues·Dependencies를 함께 관리하는 로그의 이름은?",
  "a": "RAID 로그",
  "k": [
   "RAID"
  ],
  "e": "하이브리드 실무에서 자주 쓴다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "APG 2판에서 daily standup 대신 쓰는 용어는?",
  "a": "일일 조정 회의(Daily coordination meeting)",
  "k": [
   "coordination",
   "조정"
  ],
  "e": "장애는 이 회의에서 공유하고 해결은 회의 후에 한다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 1,
  "q": "프로젝트 진행 중 교훈을 지속 기록하는 프로젝트 문서는?",
  "a": "교훈 등록부(Lessons learned register)",
  "k": [
   "교훈 등록부",
   "register"
  ],
  "e": "종료 시 교훈 저장소(repository, OPA)로 이관한다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 2,
  "q": "편익 관리 계획서에서 편익 실현을 추적·책임지는 역할은?",
  "a": "편익 책임자(Benefits owner)",
  "k": [
   "편익 책임자",
   "Benefits owner"
  ],
  "e": "보통 사업·운영 측 인물이다."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 3,
  "q": "산출물(Output) → ( ) → 편익(Benefit) → 가치(Value). 빈칸은?",
  "a": "결과(Outcome)",
  "k": [
   "Outcome",
   "결과"
  ],
  "e": "산출물을 사용해 생긴 변화가 결과다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 1,
  "q": "외부 환경 분석 틀 PESTLE의 여섯 요소를 쓰시오.",
  "a": "정치(Political), 경제(Economic), 사회(Social), 기술(Technological), 법률(Legal), 환경(Environmental)",
  "k": [
   "정치",
   "경제",
   "사회",
   "기술",
   "법률",
   "환경"
  ],
  "e": "ECO III-8의 규제·기술·지정학·시장 조사를 정리하는 틀이다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "ECO III-7 '조직 변화 지원'의 두 Enabler를 쓰시오.",
  "a": "조직 문화 평가, 조직 변화가 프로젝트에 미치는 영향 평가와 필요 조치 결정",
  "k": [
   "문화",
   "영향"
  ],
  "e": "Assess organizational culture / Evaluate the impact of organizational change."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "Lewin의 변화 3단계를 순서대로 쓰시오.",
  "a": "해빙(Unfreeze) → 변화(Change) → 재동결(Refreeze)",
  "k": [
   "해빙",
   "변화",
   "재동결"
  ],
  "e": "출제 근거 [확인필요]."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 1,
  "q": "PMBOK 가이드 8판의 원칙 수와 성과영역 수를 순서대로 쓰시오.",
  "a": "6개 원칙, 7개 성과영역",
  "k": [
   "6",
   "7"
  ],
  "e": "12·8은 7판이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 1,
  "q": "PMBOK 가이드 7판의 원칙 수와 성과영역 수를 순서대로 쓰시오.",
  "a": "12개 원칙, 8개 성과영역",
  "k": [
   "12",
   "8"
  ],
  "e": "7판은 프로세스 대신 원칙·성과영역 체계를 택했다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "PMBOK 8판 5개 Focus Area를 영어로 쓰시오.",
  "a": "Initiating, Planning, Executing, Monitoring and Controlling, Closing",
  "k": [
   "Initiating",
   "Planning",
   "Executing",
   "Monitoring",
   "Closing"
  ],
  "e": "6판 프로세스 그룹과 같은 틀이다(2차 출처)."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 3,
  "q": "PMBOK 8판 7개 성과영역을 영어로 쓰시오.",
  "a": "Governance, Scope, Schedule, Finance, Stakeholders, Resources, Risk",
  "k": [
   "Governance",
   "Scope",
   "Schedule",
   "Finance",
   "Stakeholders",
   "Resources",
   "Risk"
  ],
  "e": "Uncertainty·Measurement·Delivery·Team은 7판 이름이다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "가치 사슬 Output → ( ) → Benefit → Value 의 빈칸을 쓰시오.",
  "a": "Outcome(성과)",
  "k": [
   "Outcome"
  ],
  "e": "산출물로 생긴 변화가 성과다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "주어진 환경과 작업에 맞도록 접근법·거버넌스·프로세스를 의도적으로 조정하는 것을 무엇이라 하는가?",
  "a": "테일러링(Tailoring)",
  "k": [
   "테일러링"
  ],
  "e": "윤리·컴플라이언스는 테일러링 대상이 아니다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 2,
  "q": "PMBOK 7판 테일러링 4단계 중 두 번째 단계를 쓰시오.",
  "a": "조직에 맞게 테일러링",
  "k": [
   "조직"
  ],
  "e": "접근법 선택 → 조직 → 프로젝트 → 지속 개선."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 1,
  "q": "PMBOK에서 사고 전략은 모델, 결과를 얻는 수단은 방법이라 한다. 템플릿·문서·인도물은 무엇이라 하는가?",
  "a": "산출물(Artifact)",
  "k": [
   "산출물"
  ],
  "e": "예: 헌장, 위험 등록부, 로드맵."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "PMI 윤리 및 직업 행동 강령의 4가지 가치를 쓰시오.",
  "a": "책임(Responsibility), 존중(Respect), 공정(Fairness), 정직(Honesty)",
  "k": [
   "책임",
   "존중",
   "공정",
   "정직"
  ],
  "e": "효율·성과 등은 포함되지 않는다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 1,
  "q": "PMI 윤리 강령에서 각 가치가 나뉘는 두 가지 기준을 쓰시오.",
  "a": "열망 기준(Aspirational)과 의무 기준(Mandatory)",
  "k": [
   "열망",
   "의무"
  ],
  "e": "의무 기준 위반은 징계 대상이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "PMBOK 7판 Uncertainty 성과영역에 대응하는 8판 성과영역(학습용 해석)을 쓰시오.",
  "a": "Risk(위험)",
  "k": [
   "Risk"
  ],
  "e": "모호성·복잡성·변동성 개념은 그대로 쓰인다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "PMBOK 7판 Team 성과영역에 대응하는 8판 성과영역(학습용 해석)을 쓰시오.",
  "a": "Resources(자원)",
  "k": [
   "Resources"
  ],
  "e": "팀 문화는 원칙 '권한 부여된 팀·문화'로 이어진다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 성과영역",
  "d": 1,
  "q": "ECO 2026 Task III-1 '거버넌스 정의·수립'과 대응하는 PMBOK 8판 성과영역을 쓰시오.",
  "a": "Governance(거버넌스)",
  "k": [
   "Governance"
  ],
  "e": "결정 구조·에스컬레이션 경로·임계치를 다룬다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 3,
  "q": "Cynefin 모델의 복잡(complex) 영역에서 권장되는 대응 순서를 쓰시오.",
  "a": "탐색-감지-대응(probe-sense-respond)",
  "k": [
   "탐색",
   "감지",
   "대응"
  ],
  "e": "작은 실험으로 배우며 조정한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 3,
  "q": "PMBOK 6판의 프로세스 그룹 수, 지식영역 수, 프로세스 수를 순서대로 쓰시오.",
  "a": "5개 프로세스 그룹, 10개 지식영역, 49개 프로세스",
  "k": [
   "5",
   "10",
   "49"
  ],
  "e": "8판 프로세스 수(40개로 알려짐)는 원문 [확인필요]."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 2,
  "q": "7판에서 빠진 프로세스를 보완하려고 2022년에 나온 PMI 실무 가이드의 이름을 쓰시오.",
  "a": "Process Groups: A Practice Guide",
  "k": [
   "Process Groups"
  ],
  "e": "8판은 프로세스 지침을 다시 넣었다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "포트폴리오·프로그램·프로젝트·운영이 거버넌스 아래 함께 가치를 만들고 성과 정보가 위로 되먹임되는 체계를 무엇이라 하는가?",
  "a": "가치 인도 시스템(Value Delivery System)",
  "k": [
   "가치 인도 시스템"
  ],
  "e": "프로젝트는 이 시스템의 한 구성요소다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "전략 목표 달성을 위해 관리하는 프로젝트·프로그램·운영의 집합을 무엇이라 하는가?",
  "a": "포트폴리오(Portfolio)",
  "k": [
   "포트폴리오"
  ],
  "e": "프로그램은 편익을 위해 조율 관리하는 묶음이다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 2,
  "q": "프로젝트가 이관한 인도물로 편익을 지속적으로 만드는 조직 기능을 쓰시오.",
  "a": "운영(Operations)",
  "k": [
   "운영"
  ],
  "e": "프로젝트 종료 후 편익 실현의 주체다."
 },
 {
  "s": "s7",
  "t": "윤리·직업 행동 강령",
  "d": 2,
  "q": "이해충돌 공개, 정실·뇌물 금지가 속하는 윤리 강령 가치를 쓰시오.",
  "a": "공정(Fairness)",
  "k": [
   "공정"
  ],
  "e": "정직과 헷갈리기 쉬운 함정이다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 1,
  "q": "환경·사회·경제적 영향을 계획과 결정에 함께 고려하라는 PMBOK 8판 원칙을 영어로 쓰시오.",
  "a": "Integrate sustainability(지속가능성 통합)",
  "k": [
   "sustainability"
  ],
  "e": "7판에서는 Stewardship 안에서 다뤄졌다."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 1,
  "q": "품질을 마지막 검사가 아니라 프로세스와 산출물에 심으라는 PMBOK 8판 원칙을 영어로 쓰시오.",
  "a": "Embed quality(품질 내재화)",
  "k": [
   "Embed quality"
  ],
  "e": "8판에는 품질 성과영역이 따로 없다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 2,
  "q": "예측·적응·하이브리드 접근법과 인도 주기(cadence)를 다루는 PMBOK 7판 성과영역을 쓰시오.",
  "a": "Development Approach and Life Cycle(개발 접근법 및 생애주기)",
  "k": [
   "Development Approach"
  ],
  "e": "8판에서는 테일러링·Governance·Schedule 등에 분산된 것으로 해석한다."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 3,
  "q": "Agile Practice Guide 2판이 하이브리드를 예측형·애자일 이분법 대신 바라보는 관점을 쓰시오.",
  "a": "연속체(delivery continuum)",
  "k": [
   "연속체"
  ],
  "e": "APG 2판은 PMBOK 8과 정합한다."
 },
 {
  "s": "s7",
  "t": "PMBOK 7 대비",
  "d": 3,
  "q": "PMBOK 7판 Stewardship 원칙의 원문 'Be a diligent, ( ), and caring steward'의 빈칸을 쓰시오.",
  "a": "respectful(존중하는)",
  "k": [
   "respectful"
  ],
  "e": "성실·존중·배려하는 관리자. 8판에서는 책임 있는 리더십·지속가능성 통합으로 이어진다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "EVM에서 일정성과지수(SPI)를 구하는 공식을 쓰시오.",
  "a": "SPI = EV / PV",
  "k": [
   "EV",
   "PV"
  ],
  "e": "EV ÷ PV, 1보다 작으면 일정 지연이다."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 2,
  "q": "BAC $80,000, 계획 완료율 50%, 실제 완료율 45%, AC $40,000 일 때 CV와 SV를 쓰시오.",
  "a": "CV = −$4,000, SV = −$4,000",
  "k": [
   "−4,000",
   "CV",
   "SV"
  ],
  "e": "EV = 36,000, PV = 40,000. CV = 36,000 − 40,000 = −4,000, SV = 36,000 − 40,000 = −4,000."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 2,
  "q": "EV $60,000, AC $75,000 일 때 CPI를 쓰고 그 의미를 한 문장으로 쓰시오.",
  "a": "CPI = 0.8 — 1달러를 써서 0.8달러어치 작업을 하고 있어 원가가 초과되고 있다.",
  "k": [
   "0.8",
   "원가 초과"
  ],
  "e": "60,000 ÷ 75,000 = 0.8."
 },
 {
  "s": "s8",
  "t": "EVM 기본 지표",
  "d": 1,
  "q": "EV를 BAC로 나눈 값과 AC를 BAC로 나눈 값을 각각 무엇이라 하는지 쓰시오.",
  "a": "완료율(% complete), 소진율(% spent)",
  "k": [
   "완료율",
   "소진율"
  ],
  "e": "EV/BAC = %완료, AC/BAC = %소진."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 1,
  "q": "편차가 일회성일 때 쓰는 EAC 공식을 쓰시오.",
  "a": "EAC = AC + (BAC − EV)",
  "k": [
   "AC",
   "BAC − EV"
  ],
  "e": "남은 작업은 계획 단가대로 수행된다고 본다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "BAC $200,000, EV $80,000, AC $100,000, 현재 원가 효율이 계속될 때 EAC·ETC·VAC를 쓰시오.",
  "a": "EAC $250,000 / ETC $150,000 / VAC −$50,000",
  "k": [
   "250,000",
   "150,000",
   "−50,000"
  ],
  "e": "CPI = 0.8, EAC = 200,000 ÷ 0.8 = 250,000, ETC = 250,000 − 100,000 = 150,000, VAC = 200,000 − 250,000 = −50,000."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "BAC $200,000, EV $80,000, AC $100,000 일 때 TCPI(BAC 기준)를 쓰시오.",
  "a": "1.2",
  "k": [
   "1.2"
  ],
  "e": "(200,000 − 80,000) ÷ (200,000 − 100,000) = 120,000 ÷ 100,000 = 1.2."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 3,
  "q": "BAC $100,000, EV $40,000, AC $50,000, CPI 0.8, SPI 0.8 일 때 CPI·SPI 둘 다 반영한 EAC를 쓰시오.",
  "a": "$143,750",
  "k": [
   "143,750"
  ],
  "e": "50,000 + 60,000 ÷ 0.64 = 50,000 + 93,750 = 143,750."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 1,
  "q": "총여유(Total Float)를 구하는 공식 두 가지를 쓰시오.",
  "a": "LS − ES, LF − EF",
  "k": [
   "LS − ES",
   "LF − EF"
  ],
  "e": "두 식의 값은 같다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "활동 X(ES 4, EF 9)의 후속 활동 Y·Z의 ES가 각각 11, 12일 때 X의 자유여유를 쓰시오(0 시작 관례).",
  "a": "2일",
  "k": [
   "2"
  ],
  "e": "FF = 후속 ES 최솟값 11 − EF 9 = 2."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "정상 10일·$5,000, 압축 7일·$8,000 인 활동의 일일 압축 원가 기울기를 쓰시오.",
  "a": "$1,000 / 일",
  "k": [
   "1,000"
  ],
  "e": "(8,000 − 5,000) ÷ (10 − 7) = 1,000."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "요구 종료일이 60일, 계획 종료일이 64일일 때 Project Float를 쓰시오.",
  "a": "−4일",
  "k": [
   "−4",
   "음수"
  ],
  "e": "Project float = 60 − 64 = −4. 4일을 단축하지 않으면 마감을 지킬 수 없다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 1,
  "q": "순차로 계획된 활동을 병행해 일정을 줄이는 기법과, 자원을 추가해 줄이는 기법을 각각 쓰시오.",
  "a": "Fast-tracking(공정중첩), Crashing(공정압축)",
  "k": [
   "Fast-tracking",
   "Crashing"
  ],
  "e": "Fast-tracking은 재작업 위험↑, Crashing은 원가↑."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 2,
  "q": "O 3일, M 6일, P 15일인 활동의 PERT 기대값과 표준편차를 쓰시오.",
  "a": "기대값 7일, 표준편차 2일",
  "k": [
   "7",
   "2"
  ],
  "e": "(3 + 24 + 15) ÷ 6 = 42 ÷ 6 = 7, (15 − 3) ÷ 6 = 2."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 2,
  "q": "표준편차 3일, 4일인 독립 활동 두 개로 된 경로의 표준편차를 쓰시오.",
  "a": "5일",
  "k": [
   "5"
  ],
  "e": "√(9 + 16) = √25 = 5."
 },
 {
  "s": "s8",
  "t": "PERT·3점 추정",
  "d": 3,
  "q": "경로 기대값 40일, 표준편차 4일일 때 약 95% 신뢰 범위를 쓰시오.",
  "a": "32일 ~ 48일",
  "k": [
   "32",
   "48"
  ],
  "e": "±2σ = 40 ± 8."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 1,
  "q": "위험 발생 확률 25%, 영향 −$40,000 인 위협의 EMV를 쓰시오.",
  "a": "−$10,000",
  "k": [
   "−10,000"
  ],
  "e": "0.25 × (−40,000) = −10,000."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "투자 $30,000, 성공 70% 시 $100,000, 실패 30% 시 $20,000 수익이 나는 대안의 순 EMV를 쓰시오.",
  "a": "$46,000",
  "k": [
   "46,000"
  ],
  "e": "70,000 + 6,000 − 30,000 = 46,000."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 1,
  "q": "식별된 위험에 대비해 원가 기준선 안에 두는 예비와, 미식별 위험에 대비해 기준선 밖에 두는 예비를 각각 쓰시오.",
  "a": "우발예비(Contingency Reserve), 관리예비(Management Reserve)",
  "k": [
   "우발예비",
   "관리예비"
  ],
  "e": "예산 = 원가 기준선 + 관리예비."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 2,
  "q": "PM 포함 8명인 팀에 4명이 추가되었을 때 늘어난 의사소통 채널 수를 쓰시오.",
  "a": "38개",
  "k": [
   "38"
  ],
  "e": "12명 66 − 8명 28 = 38."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 2,
  "q": "대안 A(NPV $80,000)를 선택하고 B(NPV $60,000), C(NPV $50,000)를 포기했을 때 기회비용을 쓰시오.",
  "a": "$60,000",
  "k": [
   "60,000"
  ],
  "e": "포기한 대안 중 최선(B)의 가치가 기회비용이다."
 },
 {
  "s": "s8",
  "t": "의사소통·재무 계산",
  "d": 1,
  "q": "미래가치 FV, 이자율 r, 기간 n일 때 현재가치 공식을 쓰시오.",
  "a": "PV = FV / (1 + r)^n",
  "k": [
   "FV",
   "(1 + r)^n"
  ],
  "e": "할인은 나눗셈이다."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 3,
  "q": "목표원가 $200,000, 목표수수료 $20,000, 상한가 $250,000, 분담비율 70/30(구매자/판매자)인 FPIF의 PTA를 쓰시오.",
  "a": "약 $242,857",
  "k": [
   "242,857"
  ],
  "e": "(250,000 − 220,000) ÷ 0.7 + 200,000 = 42,857.14 + 200,000 ≈ 242,857."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 2,
  "q": "CPIF 계약(목표원가 $100,000, 목표수수료 $10,000, 분담 70/30)에서 실제원가 $120,000 일 때 구매자 지불 총액을 쓰시오(수수료 한도 없음).",
  "a": "$124,000",
  "k": [
   "124,000"
  ],
  "e": "초과 20,000 × 판매자 30% = 6,000 감액 → 수수료 4,000, 120,000 + 4,000 = 124,000."
 },
 {
  "s": "s8",
  "t": "조달 계약·PTA",
  "d": 1,
  "q": "구매자 위험이 가장 큰 계약 유형과 가장 작은 계약 유형을 쓰시오(CPPC 제외).",
  "a": "CPFF(가장 큼), FFP(가장 작음)",
  "k": [
   "CPFF",
   "FFP"
  ],
  "e": "순서: CPFF > CPIF > T&M > FPIF > FFP."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 2,
  "q": "평균 벨로시티 30점, 잔여 백로그 200점, 스프린트 2주일 때 남은 스프린트 수와 기간을 쓰시오.",
  "a": "7 스프린트, 14주",
  "k": [
   "7",
   "14"
  ],
  "e": "200 ÷ 30 = 6.67 → 올림 7 스프린트 × 2주 = 14주."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 1,
  "q": "Little's Law 공식을 쓰시오.",
  "a": "Cycle time = WIP / Throughput",
  "k": [
   "WIP",
   "Throughput"
  ],
  "e": "WIP를 줄이면 사이클 타임이 짧아진다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 3,
  "q": "릴리스 계획 100점, 릴리스 예산 $200,000, 완료 40점일 때 애자일 EVM의 EV를 쓰시오. [확인필요: 2026 출제 빈도]",
  "a": "$80,000",
  "k": [
   "80,000"
  ],
  "e": "EV = 40/100 × 200,000 = 80,000."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 1,
  "q": "2026 PMP 시험 당일 진행 순서대로 나열하시오.",
  "steps": [
   "튜토리얼(시간 미포함)",
   "사례연구(case-study) 섹션",
   "첫 번째 10분 휴식",
   "독립 문항 전반부",
   "두 번째 10분 휴식",
   "독립 문항 후반부"
  ],
  "e": "사례연구 섹션이 먼저 나오고 그 종료 후 첫 휴식, 독립 문항 중간에 둘째 휴식이 있다. 휴식 후에는 이전 섹션으로 돌아갈 수 없다."
 },
 {
  "s": "s1",
  "t": "시험 형식·응시 자격",
  "d": 2,
  "q": "PMP 응시 절차를 순서대로 나열하시오.",
  "steps": [
   "경력·35시간 교육 요건 충족",
   "온라인 지원서 제출",
   "지원서 승인",
   "응시료 결제",
   "시험 일정 예약",
   "시험 응시"
  ],
  "e": "응시료는 지원서 승인 후 시험을 예약할 때 낸다. 회원가는 결제 전에 가입해야 적용된다. 감사 대상이 되면 학력·경력을 증빙한다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "상황형 문항의 PMI식 풀이 사고 순서를 나열하시오.",
  "steps": [
   "맥락 표시(접근법·단계·PM 권한)",
   "진짜 문제(근본 원인) 식별",
   "영향 분석·계획/등록부 참조",
   "팀·당사자와 협업해 해결",
   "권한·임계치 초과 시 대안 갖고 에스컬레이션",
   "문서 갱신·소통"
  ],
  "e": "먼저 분석하고 계획을 참조한 뒤 협업으로 해결하며, 권한을 넘을 때만 에스컬레이션한다. 마지막에 결정·변경을 문서에 반영한다."
 },
 {
  "s": "s1",
  "t": "PMI 마인드셋·상황형 풀이",
  "d": 2,
  "q": "예측형 프로젝트에서 이해관계자의 변경 요청을 처리하는 순서를 나열하시오.",
  "steps": [
   "변경 요청 접수·기록",
   "범위·일정·원가 영향 분석",
   "CCB 검토·승인 또는 거절",
   "승인된 변경 실행",
   "기준선·문서 갱신 및 결과 소통"
  ],
  "e": "ECO III-3(변경 관리·통제)의 흐름이다. PM이 영향 분석 없이 반영하거나 단독으로 거절하면 절차 위반이다."
 },
 {
  "s": "s1",
  "t": "개발 접근법 선택",
  "d": 3,
  "q": "개발 접근법을 정하는 ECO II-1 흐름을 순서대로 나열하시오.",
  "steps": [
   "프로젝트 요구·복잡도·규모 평가",
   "요구·기술 불확실성과 변경 비용 분석",
   "예측형·적응형·하이브리드 중 접근법 권고",
   "이해관계자·거버넌스와 합의",
   "통합 관리계획에 반영·유지"
  ],
  "e": "II-1 Enabler는 요구·복잡도 평가 → 개발 접근법 권고 → 통합계획 작성·유지 흐름이다. PM이 단독으로 정하지 않고 권고 후 합의한다."
 },
 {
  "s": "s2",
  "t": "팀 개발·동기부여",
  "d": 1,
  "q": "Tuckman 팀 개발 단계를 순서대로 배열하시오.",
  "steps": [
   "형성기(Forming)",
   "격동기(Storming)",
   "규범기(Norming)",
   "수행기(Performing)",
   "해산기(Adjourning)"
  ],
  "e": "격동이 규범보다 먼저다. 해산기는 1977년에 추가되었다."
 },
 {
  "s": "s2",
  "t": "갈등 관리·협상",
  "d": 2,
  "q": "ECO I-2 갈등 관리 Enabler 를 실행 흐름 순서대로 배열하시오.",
  "steps": [
   "갈등 원천 식별",
   "갈등 맥락 분석",
   "합의된 해결전략 실행",
   "갈등관리 원칙을 팀·외부 이해관계자와 공유",
   "그라운드룰 위반 관리·시정"
  ],
  "e": "원천 식별과 맥락 분석이 해결전략보다 먼저다(먼저 분석 원칙)."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 1,
  "q": "이해관계자 참여 수준을 낮은 단계부터 배열하시오.",
  "steps": [
   "인지 못함(Unaware)",
   "저항(Resistant)",
   "중립(Neutral)",
   "지지(Supportive)",
   "주도(Leading)"
  ],
  "e": "참여평가매트릭스의 5단계다."
 },
 {
  "s": "s2",
  "t": "이해관계자 식별·참여",
  "d": 2,
  "q": "ECO I-4 이해관계자 참여 Enabler 를 흐름 순서대로 배열하시오.",
  "steps": [
   "이해관계자 식별",
   "이해관계자 분석",
   "요구에 맞춘 의사소통 분석·맞춤",
   "이해관계자 참여계획 실행",
   "신뢰 구축과 영향력 행사로 목표 달성"
  ],
  "e": "식별·분석이 앞서고 실행·신뢰 구축이 뒤따른다."
 },
 {
  "s": "s2",
  "t": "의사소통 계획·관리",
  "d": 2,
  "q": "송신자-수신자 의사소통 모델의 흐름을 순서대로 배열하시오.",
  "steps": [
   "송신자가 메시지를 부호화(Encode)",
   "매체를 통해 전송(잡음 개입 가능)",
   "수신자가 해독(Decode)",
   "수신자가 수신 확인(Acknowledge)",
   "수신자가 피드백/응답(Feedback)"
  ],
  "e": "확인은 수신했다는 뜻이고 동의는 아니다."
 },
 {
  "s": "s2",
  "t": "의사결정·영향력",
  "d": 2,
  "q": "문제 해결(Solve problems) 절차를 순서대로 배열하시오.",
  "steps": [
   "문제 정의",
   "근본원인 분석",
   "대안 도출",
   "기준에 따라 대안 선택",
   "실행 후 효과 확인"
  ],
  "e": "원인 분석 없이 해결책을 고르는 보기가 상황형의 대표 오답이다."
 },
 {
  "s": "s3",
  "t": "범위 관리",
  "d": 1,
  "q": "예측형 범위 관리 프로세스를 순서대로 배열하시오.",
  "steps": [
   "요구사항 수집",
   "범위 정의",
   "WBS 작성",
   "범위 확인",
   "범위 통제(상시)"
  ],
  "e": "요구 → 범위 기술서 → WBS → 인수. 범위 통제는 실행 내내 병행한다."
 },
 {
  "s": "s3",
  "t": "일정 관리",
  "d": 1,
  "q": "예측형 일정 수립 프로세스를 순서대로 배열하시오.",
  "steps": [
   "활동 정의",
   "활동 순서 배열",
   "활동 기간 추정",
   "일정 개발",
   "일정 통제"
  ],
  "e": "작업 패키지를 활동으로 분해 → 논리 연결 → 기간 → CPM으로 일정 모델·기준선."
 },
 {
  "s": "s3",
  "t": "원가·재무 관리",
  "d": 2,
  "q": "원가 집계의 아래→위 순서를 배열하시오.",
  "steps": [
   "활동 원가 추정",
   "작업 패키지 원가",
   "통제계정",
   "원가 기준선(+우발 예비비)",
   "프로젝트 예산(+관리 예비비)"
  ],
  "e": "우발 예비비는 기준선 안, 관리 예비비는 기준선 위(예산)에 더한다."
 },
 {
  "s": "s3",
  "t": "품질 관리",
  "d": 2,
  "q": "산출물이 고객 인수에 이르는 품질 흐름을 순서대로 배열하시오.",
  "steps": [
   "품질관리계획 수립",
   "품질 관리(프로세스 감사·개선)",
   "품질 통제(산출물 검사)",
   "검증된 인도물",
   "범위 확인(공식 인수)"
  ],
  "e": "QC를 거친 검증된 인도물이 Validate Scope의 입력이다."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 2,
  "q": "구매자 관점의 조달 절차를 순서대로 배열하시오.",
  "steps": [
   "Make-or-Buy 분석",
   "SOW·조달 문서·선정 기준 작성",
   "입찰자 회의·제안 접수",
   "제안 평가·협상·계약 체결",
   "조달 통제·조달 종료"
  ],
  "e": "계획 → 수행 → 통제·종료."
 },
 {
  "s": "s3",
  "t": "조달 관리",
  "d": 3,
  "q": "판매자와의 클레임 해결 단계를 우선순위대로 배열하시오.",
  "steps": [
   "계약 조건·변경 이력 확인",
   "당사자 간 협상",
   "대체 분쟁 해결(조정·중재)",
   "소송"
  ],
  "e": "협상이 우선, ADR, 소송은 최후."
 },
 {
  "s": "s3",
  "t": "의사소통 계획·종료",
  "d": 2,
  "q": "프로젝트 종료 활동을 순서대로 배열하시오.",
  "steps": [
   "인도물 공식 인수 확인",
   "운영 이관",
   "조달 종료",
   "최종 교훈 정리·OPA 갱신",
   "자원 해제"
  ],
  "e": "팀 해산 전에 교훈을 정리하고, 자원 해제는 마지막."
 },
 {
  "s": "s4",
  "t": "스크럼 프레임워크",
  "d": 1,
  "q": "스크럼 스프린트 안의 이벤트를 일반적인 진행 순서대로 배열하시오.",
  "steps": [
   "Sprint Planning",
   "Daily Scrum(매일)",
   "Sprint Review",
   "Sprint Retrospective"
  ],
  "e": "기획으로 시작해 매일 조정하고, 증분 점검(Review) 뒤 프로세스 개선(Retro)으로 스프린트를 닫는다."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 2,
  "q": "Derby & Larsen의 회고 5단계를 순서대로 배열하시오.",
  "steps": [
   "분위기 조성(Set the stage)",
   "데이터 수집(Gather data)",
   "통찰 도출(Generate insights)",
   "실행 결정(Decide what to do)",
   "회고 마무리(Close the retrospective)"
  ],
  "e": "데이터 없이 결론을 내지 않도록 수집 → 통찰 → 결정 순서를 지킨다."
 },
 {
  "s": "s4",
  "t": "하이브리드·테일러링",
  "d": 2,
  "q": "PMBOK 7판 체계의 테일러링 4단계를 순서대로 배열하시오.",
  "steps": [
   "초기 개발 접근법 선택",
   "조직에 맞춰 테일러링",
   "프로젝트에 맞춰 테일러링",
   "지속적 개선 실행"
  ],
  "e": "접근법을 고른 뒤 조직 → 프로젝트 순으로 맞추고, 운영하면서 계속 개선한다. 8판 명칭은 [확인필요]."
 },
 {
  "s": "s4",
  "t": "추정·속도·반복 계획",
  "d": 2,
  "q": "애자일 팀이 출시 날짜를 예측하는 절차를 순서대로 배열하시오.",
  "steps": [
   "백로그 항목을 상대 추정(스토리 포인트)",
   "몇 개 반복 동안 실측 속도 수집",
   "잔여 포인트 ÷ 평균 속도로 남은 반복 수 산출",
   "매 반복 후 실측 속도로 예측 갱신"
  ],
  "e": "새 팀은 범위로 예측하고 실측 속도가 쌓이면 갱신한다(롤링 웨이브)."
 },
 {
  "s": "s4",
  "t": "애자일 지표·서번트 리더십",
  "d": 3,
  "q": "팀 밖의 장애(impediment)가 발생했을 때 ECO III-4 기준의 대응 순서를 배열하시오.",
  "steps": [
   "장애의 영향 평가",
   "장애 우선순위화·가시화",
   "개입 전략 적용(담당자와 직접 협의)",
   "권한 밖이면 분석·대안과 함께 에스컬레이션",
   "해소 여부 지속 재평가"
  ],
  "e": "먼저 분석하고, 직접 해결을 시도한 뒤 필요할 때만 에스컬레이션하며 끝까지 재평가한다."
 },
 {
  "s": "s5",
  "t": "성과 지표·측정",
  "d": 2,
  "q": "지속적인 일정 편차를 발견했을 때 상태 평가의 올바른 흐름을 순서대로 배열하시오.",
  "steps": [
   "작업성과 데이터 수집·검증",
   "기준선 대비 차이 계산(SV·SPI)",
   "추세 확인",
   "팀과 근본 원인 분석",
   "대응 옵션·예측(EAC) 준비 후 이해관계자 보고"
  ],
  "e": "먼저 데이터를 확인하고 → 차이와 추세를 보고 → 원인을 분석한 뒤 → 대안과 함께 보고한다. 분석 없이 즉시 압축·에스컬레이션하는 보기가 함정이다."
 },
 {
  "s": "s5",
  "t": "품질·인수 기준",
  "d": 2,
  "q": "예측형 프로젝트에서 인도물이 공식 종료에 이르는 흐름을 순서대로 배열하시오.",
  "steps": [
   "인도물 생산",
   "품질 통제(Control Quality)로 검증된 인도물",
   "범위 확인(Validate Scope)으로 인수된 인도물",
   "프로젝트·단계 종료에서 최종 이관"
  ],
  "e": "QC가 먼저 내부 정확성을 확인하고, 고객이 범위 확인에서 공식 인수한 뒤, 종료 단계에서 이관한다."
 },
 {
  "s": "s5",
  "t": "교훈·지식 관리",
  "d": 2,
  "q": "널리 쓰이는 회고 5단계(Derby & Larsen)를 순서대로 배열하시오.",
  "steps": [
   "분위기 조성(Set the stage)",
   "데이터 수집(Gather data)",
   "통찰 도출(Generate insights)",
   "실행 항목 결정(Decide what to do)",
   "회고 마무리(Close the retrospective)"
  ],
  "e": "데이터를 모으기 전에 결론부터 내리지 않는 것이 핵심이다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 3,
  "q": "예측형 프로젝트의 일반적인 종료 활동을 순서대로 배열하시오.",
  "steps": [
   "인도물 최종 인수 확보",
   "운영 이관",
   "조달 계약 종결",
   "최종 교훈 정리·OPA 갱신",
   "프로젝트 기록 보관",
   "팀 해산"
  ],
  "e": "공식 인수가 출발점이고, 팀 해산은 교훈·기록 정리 뒤 마지막이다. 실제 순서는 조직·계약에 따라 일부 병행될 수 있다."
 },
 {
  "s": "s5",
  "t": "이관·종료",
  "d": 2,
  "q": "미해결 계약 클레임의 해결 단계를 순서대로 배열하시오.",
  "steps": [
   "당사자 간 협상",
   "계약에 정한 ADR(조정·중재)",
   "소송"
  ],
  "e": "협상이 먼저, 소송은 최후 수단이다."
 },
 {
  "s": "s6",
  "t": "변경 관리·통제",
  "d": 2,
  "q": "예측형 프로젝트에서 통합 변경 통제의 처리 순서를 바르게 나열하시오.",
  "steps": [
   "변경 요청 문서화",
   "범위·일정·원가 등 영향 분석",
   "CCB 검토 및 승인·거절 결정",
   "기준선·계획서·문서 갱신과 결정 소통",
   "승인된 변경 구현 및 결과 검증"
  ],
  "e": "문서화 → 영향 분석 → 결정 → 갱신·소통 → 구현·검증. 영향 분석 전에 결정하거나 승인 전에 구현하면 오답이다."
 },
 {
  "s": "s6",
  "t": "위험 식별·분석",
  "d": 2,
  "q": "예측형 위험관리 프로세스를 순서대로 나열하시오.",
  "steps": [
   "위험관리 계획",
   "위험 식별",
   "정성적 위험 분석",
   "정량적 위험 분석",
   "위험 대응 계획",
   "위험 대응 실행 및 감시"
  ],
  "e": "정성 분석이 정량 분석보다 먼저다. 대응 계획 뒤 실행과 감시가 이어진다."
 },
 {
  "s": "s6",
  "t": "장애 제거·이슈 관리",
  "d": 2,
  "q": "ECO III-4 Enabler에 따라 장애(impediment)를 다루는 흐름을 순서대로 나열하시오.",
  "steps": [
   "장애의 영향 평가",
   "우선순위화 및 가시화",
   "개입 전략 결정·적용",
   "장애 상태 지속 재평가"
  ],
  "e": "평가 없이 개입하거나 보고 순서대로 처리하는 것은 오답이다."
 },
 {
  "s": "s6",
  "t": "컴플라이언스·지속가능성·AI",
  "d": 3,
  "q": "ECO III-2 컴플라이언스 관리 흐름을 순서대로 나열하시오.",
  "steps": [
   "컴플라이언스 요구사항 확인",
   "컴플라이언스 범주 분류",
   "준수 위협 요인 파악",
   "미준수 결과 분석",
   "필요한 접근·조치 결정",
   "준수 정도 측정"
  ],
  "e": "ECO Enabler 나열 순서를 따른 흐름이다(준수 지원 방법 사용은 실행 전반에 걸친다). 요구 확인과 분류가 먼저, 측정이 마지막이다."
 },
 {
  "s": "s6",
  "t": "조직 변화·외부 환경",
  "d": 2,
  "q": "ADKAR 변화 모델의 단계를 순서대로 나열하시오.",
  "steps": [
   "인식(Awareness)",
   "열망(Desire)",
   "지식(Knowledge)",
   "능력(Ability)",
   "강화(Reinforcement)"
  ],
  "e": "필요를 알고 → 원하고 → 방법을 배우고 → 실제로 할 수 있게 되고 → 유지한다. 출제 근거 [확인필요]."
 },
 {
  "s": "s6",
  "t": "지속적 개선·가치 실현",
  "d": 1,
  "q": "교훈(lessons learned)이 조직 자산으로 쌓이는 흐름을 순서대로 나열하시오.",
  "steps": [
   "착수 시 조직 저장소의 과거 교훈 검토",
   "진행 중 교훈 등록부에 지속 기록",
   "반복·단계 회고에서 개선 행동 적용",
   "단계·프로젝트 종료 시 교훈 저장소(OPA)로 이관"
  ],
  "e": "ECO III-6: 교훈 활용 → 개선 프로세스 갱신 → OPA 갱신."
 },
 {
  "s": "s7",
  "t": "테일러링·모델·방법·산출물",
  "d": 2,
  "q": "PMBOK 7판의 테일러링 절차를 순서대로 배열하시오.",
  "steps": [
   "초기 개발 접근법 선택",
   "조직에 맞게 테일러링",
   "프로젝트에 맞게 테일러링",
   "지속적 개선 실행"
  ],
  "e": "출발점(접근법)을 고른 뒤 조직 요구 → 프로젝트 특성 순으로 조정하고 회고로 계속 개선한다."
 },
 {
  "s": "s7",
  "t": "Focus Area·프로세스",
  "d": 1,
  "q": "PMBOK 8판 Focus Area를 일반적인 흐름 순서로 배열하시오.",
  "steps": [
   "Initiating(착수)",
   "Planning(기획)",
   "Executing(실행)",
   "Monitoring & Controlling(감시·통제)",
   "Closing(종료)"
  ],
  "e": "감시·통제는 실행과 겹쳐 전 기간 진행되지만 일반 흐름은 이 순서다."
 },
 {
  "s": "s7",
  "t": "가치 인도 시스템",
  "d": 1,
  "q": "가치 인도 시스템에서 프로젝트 결과가 가치로 이어지는 순서로 배열하시오.",
  "steps": [
   "산출물(Output)",
   "성과(Outcome)",
   "편익(Benefit)",
   "가치(Value)"
  ],
  "e": "인도물 → 변화 → 조직 이득 → 이해관계자 가치."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 개요·판별 변화",
  "d": 2,
  "q": "PMBOK 관련 PMI 발간물을 시간 순서로 배열하시오.",
  "steps": [
   "6판 — 5 프로세스 그룹·10 지식영역·49 프로세스",
   "7판 — 12 원칙·8 성과영역",
   "Process Groups: A Practice Guide",
   "8판 — 6 원칙·7 성과영역·Focus Area"
  ],
  "e": "2017 → 2021 → 2022 → 2025-11."
 },
 {
  "s": "s7",
  "t": "PMBOK 8 원칙",
  "d": 2,
  "q": "스폰서가 지속가능성 요구사항 삭제를 요청했을 때 프로젝트 관리자의 대응을 순서대로 배열하시오.",
  "steps": [
   "요청 배경과 목적을 확인한다",
   "원가·장기 영향·조직 목표 정합성을 분석한다",
   "대안과 권고안을 마련한다",
   "의사결정권자와 검토하고 결과를 문서화한다"
  ],
  "e": "PMI 마인드셋: 확인 → 분석 → 대안 → 적절한 의사결정권자 검토·문서화."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 2,
  "q": "CPM으로 주경로와 여유를 구하는 절차를 순서대로 배열하시오.",
  "steps": [
   "활동·기간·의존관계로 네트워크 작성",
   "전진 계산으로 ES·EF 산출",
   "후진 계산으로 LS·LF 산출",
   "활동별 총여유·자유여유 계산",
   "여유 0(최소)인 최장 경로를 주경로로 식별"
  ],
  "e": "전진 → 후진 → 여유 → 주경로 순이다. 후진 계산은 전진 계산의 프로젝트 종료일이 있어야 시작할 수 있다."
 },
 {
  "s": "s8",
  "t": "EVM 예측·TCPI",
  "d": 2,
  "q": "EVM 상태 분석에서 원가 예측까지의 계산 순서를 배열하시오.",
  "steps": [
   "완료율로 EV 산출",
   "CV·SV 계산",
   "CPI·SPI 계산",
   "가정에 맞는 EAC 공식 선택·계산",
   "ETC·VAC·TCPI로 잔여 작업 판단"
  ],
  "e": "EV가 모든 지표의 출발점이고, 지수를 구해야 EAC를 예측할 수 있다."
 },
 {
  "s": "s8",
  "t": "EMV·의사결정나무",
  "d": 2,
  "q": "의사결정나무로 대안을 선택하는 절차를 배열하시오.",
  "steps": [
   "결정 노드에서 대안 분기 작성",
   "각 대안의 확률 노드와 결과값 기입",
   "분기별 확률 × 결과 합산",
   "각 대안 EMV에서 투자비 차감",
   "순 EMV가 가장 유리한 대안 선택"
  ],
  "e": "끝(결과)에서 앞(결정)으로 거꾸로 접어 올라오는 계산이다. 투자비 차감을 빼먹지 않는다."
 },
 {
  "s": "s8",
  "t": "CPM·일정 네트워크",
  "d": 3,
  "q": "일정을 단축해야 할 때 Crashing을 적용하는 순서를 배열하시오.",
  "steps": [
   "주경로 확인",
   "주경로 활동별 원가 기울기 계산",
   "기울기가 가장 낮은 활동을 1단위 압축",
   "주경로 재계산(새 주경로 발생 여부 확인)",
   "목표 기간 도달까지 반복"
  ],
  "e": "한 번 압축하면 다른 경로가 주경로가 될 수 있어 매 단계 재계산한다."
 },
 {
  "s": "s8",
  "t": "애자일 지표 계산",
  "d": 2,
  "q": "벨로시티 기반 릴리스 예측 절차를 배열하시오.",
  "steps": [
   "완료된(DoD 충족) 스토리 포인트로 반복별 벨로시티 측정",
   "최근 반복의 평균·범위 산출",
   "잔여 백로그 포인트 추정",
   "잔여 포인트 ÷ 벨로시티로 반복 수 범위 계산",
   "매 반복 실측치로 예측 갱신"
  ],
  "e": "실측 벨로시티가 있어야 예측할 수 있고, 예측은 반복마다 갱신한다."
 }
];

CPPG.selfcheck = [
 {
  "g": "마인드셋",
  "t": "ECO 2026의 도메인 비중(33/41/26)과 Task 수(8/10/8=26)를 2021과 비교해 말할 수 있다"
 },
 {
  "g": "마인드셋",
  "t": "위험·변경·이슈·거버넌스·컴플라이언스가 Business Environment로 이동한 것을 설명할 수 있다"
 },
 {
  "g": "마인드셋",
  "t": "2026 시험 형식(180문항·채점 170·240분·휴식 2회)과 문항 8유형(CBT 전용 4종 포함)을 설명할 수 있다"
 },
 {
  "g": "마인드셋",
  "t": "학력별 경력 요건과 35시간 교육 규정(CAPM 면제, 2026-12-01 라이브 교육 제한)을 설명할 수 있다"
 },
 {
  "g": "마인드셋",
  "t": "PMI 마인드셋 12원칙과 상황형 오답 4패턴으로 보기를 소거할 수 있다"
 },
 {
  "g": "마인드셋",
  "t": "프로젝트·프로그램·포트폴리오·운영과 PMO 3유형·조직구조별 PM 권한을 구분할 수 있다"
 },
 {
  "g": "마인드셋",
  "t": "요구·기술 불확실성과 변경 비용을 근거로 예측형·적응형·하이브리드를 권고할 수 있다"
 },
 {
  "g": "People",
  "t": "ECO 2026 People 도메인 8개 Task 와 2021 대비 바뀐 점(비전·지식이전 신설, 장애 제거 이동)을 설명할 수 있다"
 },
 {
  "g": "People",
  "t": "서번트·변혁적·거래적·상황적 리더십을 구분하고 팀 성숙도에 맞는 스타일을 고를 수 있다"
 },
 {
  "g": "People",
  "t": "Tuckman 5단계와 Herzberg·McGregor·Vroom·McClelland 이론을 학자와 짝지어 설명할 수 있다"
 },
 {
  "g": "People",
  "t": "갈등 해결 5기법의 결과와 적합 상황을 말하고, 상황형 문제에서 '직접·사적 대화 → 협업' 을 적용할 수 있다"
 },
 {
  "g": "People",
  "t": "권력/관심 그리드·현저성 모형·참여평가매트릭스로 이해관계자 전략을 세울 수 있다"
 },
 {
  "g": "People",
  "t": "암묵지·형식지 이전 방법과 교훈 등록부 → OPA 흐름을 설명할 수 있다"
 },
 {
  "g": "People",
  "t": "의사소통 채널 수(총합·증가분)를 계산하고 Interactive·Push·Pull 을 상황에 맞게 고를 수 있다"
 },
 {
  "g": "예측형",
  "t": "프로젝트 헌장과 프로젝트 관리계획서의 발행 주체·내용·목적 차이를 설명할 수 있다"
 },
 {
  "g": "예측형",
  "t": "범위 기준선의 구성요소와 WBS·작업 패키지·100% 규칙을 설명할 수 있다"
 },
 {
  "g": "예측형",
  "t": "CPM으로 주경로·총 여유를 계산하고 Crashing과 Fast-tracking을 상황에 맞게 고를 수 있다"
 },
 {
  "g": "예측형",
  "t": "원가 기준선과 프로젝트 예산의 차이, 우발·관리 예비비의 사용 승인 경로를 설명할 수 있다"
 },
 {
  "g": "예측형",
  "t": "Manage Quality와 Control Quality, CoQ 4분류, 관리도 해석 규칙을 구분할 수 있다"
 },
 {
  "g": "예측형",
  "t": "범위 명확성에 따라 FFP·T&M·원가정산 계약을 고르고 클레임 해결 순서를 설명할 수 있다"
 },
 {
  "g": "예측형",
  "t": "의사소통 채널 수를 계산하고 프로젝트 종료(조기 종료 포함) 활동 순서를 말할 수 있다"
 },
 {
  "g": "애자일",
  "t": "애자일 선언 4가치와 '오른쪽도 가치가 있다'는 의미를 설명할 수 있다"
 },
 {
  "g": "애자일",
  "t": "스크럼의 3책임·5이벤트·3산출물과 각 산출물의 확약을 짝지어 말할 수 있다"
 },
 {
  "g": "애자일",
  "t": "리틀의 법칙과 누적 흐름도(CFD)로 칸반 병목을 찾고 대응을 설명할 수 있다"
 },
 {
  "g": "애자일",
  "t": "INVEST·3C·수용 기준과 MoSCoW·WSJF·Kano 우선순위 기법을 구분할 수 있다"
 },
 {
  "g": "애자일",
  "t": "스토리 포인트·속도·용량으로 남은 반복 수를 계산하고 속도 오용 함정을 설명할 수 있다"
 },
 {
  "g": "애자일",
  "t": "MVP와 MMF를 구분하고 ECO II-3 가치기반 인도 행동 6가지를 말할 수 있다"
 },
 {
  "g": "애자일",
  "t": "하이브리드(인도 연속체)·테일러링·APG 2판 용어 변경을 상황형 문항에 적용할 수 있다"
 },
 {
  "g": "평가·종료",
  "t": "의사결정과 연결된 KPI·OKR을 설계하고 선행·후행 지표를 구분할 수 있다"
 },
 {
  "g": "평가·종료",
  "t": "EVM 지표와 상황에 맞는 EAC 공식을 골라 상태를 판정·예측할 수 있다"
 },
 {
  "g": "평가·종료",
  "t": "번다운·번업·CFD·S-커브·관리도를 보고 문제를 해석하고 첫 행동을 고를 수 있다"
 },
 {
  "g": "평가·종료",
  "t": "산출물을 테일러링하고 접근성·형상관리·효과성 평가를 설명할 수 있다"
 },
 {
  "g": "평가·종료",
  "t": "인수 기준·DoD·DoR·범위 확인·품질 통제의 차이를 설명할 수 있다"
 },
 {
  "g": "평가·종료",
  "t": "교훈 등록부와 저장소, 회고, 암묵지 이전 방법을 설명할 수 있다"
 },
 {
  "g": "평가·종료",
  "t": "공식 인수 → 이관 준비도 → 조달·재무 정산 → 교훈 → 해산의 종료 흐름과 조기 종료 대응을 설명할 수 있다"
 },
 {
  "g": "비즈니스환경",
  "t": "프로젝트 거버넌스의 구성(구조·OPA·성공 지표·에스컬레이션 임계치)과 OPA·EEF 차이를 설명할 수 있다"
 },
 {
  "g": "비즈니스환경",
  "t": "컴플라이언스 4범주와 미준수 결과 분석, AI 사용 시 데이터 보호·사람 검증 원칙을 설명할 수 있다"
 },
 {
  "g": "비즈니스환경",
  "t": "정성·정량 위험 분석 도구를 구분하고 EMV를 계산할 수 있다"
 },
 {
  "g": "비즈니스환경",
  "t": "위협 5·기회 5 대응 전략과 잔여·2차 위험, 우발·관리 예비의 차이를 설명할 수 있다"
 },
 {
  "g": "비즈니스환경",
  "t": "예측형 통합 변경 통제(CCB)와 애자일 백로그 기반 변경 처리를 구분해 상황형 문제에 적용할 수 있다"
 },
 {
  "g": "비즈니스환경",
  "t": "위험이 이슈가 되는 시점을 인식하고 장애 제거·에스컬레이션 순서를 설명할 수 있다"
 },
 {
  "g": "비즈니스환경",
  "t": "교훈 등록부·저장소와 산출물-결과-편익-가치 사슬, 조직 변화·외부 환경 영향 평가를 설명할 수 있다"
 },
 {
  "g": "PMBOK",
  "t": "PMBOK 8판 6원칙을 영어 원어로 말하고 각 원칙의 상황형 정답 신호를 설명할 수 있다"
 },
 {
  "g": "PMBOK",
  "t": "PMBOK 8판 7성과영역을 나열하고 ECO 2026 Task와 연결할 수 있다"
 },
 {
  "g": "PMBOK",
  "t": "6·7·8판의 구조 숫자(49 / 12·8 / 6·7)와 8판의 비처방형 프로세스 재도입을 구분할 수 있다"
 },
 {
  "g": "PMBOK",
  "t": "7판 12원칙·8성과영역이 8판에서 어디로 이어지는지 해석하고, 공식 대응표가 아니라는 점을 설명할 수 있다"
 },
 {
  "g": "PMBOK",
  "t": "산출물·성과·편익·가치를 사례로 구분하고 가치 인도 시스템의 정보 흐름을 설명할 수 있다"
 },
 {
  "g": "PMBOK",
  "t": "테일러링 4단계와 모델·방법·산출물의 차이를 예를 들어 설명할 수 있다"
 },
 {
  "g": "PMBOK",
  "t": "PMI 윤리 강령 4가치와 이해충돌·뇌물·허위 보고 상황의 정답 행동을 설명할 수 있다"
 },
 {
  "g": "계산",
  "t": "PV·EV·AC로 CV·SV·CPI·SPI를 계산하고 부호·크기를 해석할 수 있다"
 },
 {
  "g": "계산",
  "t": "문제의 가정에 맞는 EAC 공식 4가지를 골라 ETC·VAC·TCPI까지 계산할 수 있다"
 },
 {
  "g": "계산",
  "t": "전진·후진 계산으로 주경로와 총여유·자유여유를 구할 수 있다"
 },
 {
  "g": "계산",
  "t": "PERT·삼각 기대값, 표준편차, 경로 σ, 신뢰구간을 계산할 수 있다"
 },
 {
  "g": "계산",
  "t": "EMV와 의사결정나무(투자비 차감)로 대안을 고를 수 있다"
 },
 {
  "g": "계산",
  "t": "의사소통 채널·PTA·CPFF/CPIF 지불액을 계산할 수 있다"
 },
 {
  "g": "계산",
  "t": "벨로시티·Little's Law로 릴리스 범위와 사이클 타임을 예측할 수 있다"
 }
];

CPPG.roadmap = {
 "8주 표준": [
  "Week 1 — 시험 개요·PMI 마인드셋 + PMBOK 8 원칙·성과영역",
  "Week 2~3 — People (리더십·팀·이해관계자) 상황형 집중",
  "Week 4 — Process 예측형 + 계산",
  "Week 5 — Process 애자일·하이브리드",
  "Week 6 — Business Environment (거버넌스·위험·변경)",
  "Week 7 — 상태 평가·종료 + 계산 복습",
  "Week 8 — 모의고사 3회 + 오답노트 + 마인드셋 재정리"
 ],
 "시험 3일 전": [
  "D-3 — 마인드셋 12원칙 + 함정노트",
  "D-2 — 계산 공식 카드 + 애자일 용어",
  "D-1 — 모의고사 1회 + 틀린 상황형 해설 재독"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "PMI 마인드셋 — 먼저 분석·계획 참조·팀 협업·적절한 에스컬레이션",
  "예측형 변경통제(CCB) vs 애자일 백로그·PO 우선순위",
  "서번트 리더십 — 장애 제거·자기조직화 팀 존중",
  "갈등·이해관계자 문제는 직접·사적 소통",
  "안전·윤리·법규 위반은 즉시 중단·보고",
  "개발 접근법 선택(예측·적응·하이브리드)과 테일러링",
  "갈등 상황형 — 당사자와 직접·사적 대화, 협업/문제해결",
  "갈등 5기법 결과 구분(타협 ≠ Win-Win, 긴급 시 강요)",
  "서번트 리더 — 장애 제거·권한 위임·자기조직화 존중",
  "이해관계자 권한 밖 요청 → 직접 만나 역할·요청 경로 검토",
  "권력/관심 그리드 4전략",
  "참여평가매트릭스 5단계 · C/D 격차",
  "의사소통 채널 n(n−1)/2 — 증가분 계산",
  "Tuckman 5단계와 단계 회귀",
  "공동 비전 오해 → 근본원인 분석·재정렬(2026 신설)",
  "헌장(스폰서 발행) vs 관리계획서",
  "범위 기준선 = 범위 기술서 + WBS + WBS 사전",
  "Validate Scope vs Control Quality",
  "CPM 주경로·총 여유 계산",
  "Crashing(원가↑) vs Fast-tracking(위험↑)",
  "우발 예비비 vs 관리 예비비(기준선 안/밖)",
  "Manage Quality(예방·감사) vs Control Quality(검사)",
  "계약 유형별 위험 배분(FP/CR/T&M)",
  "기준선 변경 = 변경통제 경유",
  "공급사 지연 → 먼저 영향 평가",
  "스프린트 중 신규 요청 → PO·백로그로",
  "스크럼 책임(PO·SM·Developers)과 스프린트 취소 권한",
  "산출물-확약 짝(PG·SG·DoD)",
  "DoD 미충족 항목 처리",
  "서번트 리더의 장애 제거·에스컬레이션 시점",
  "속도 계산·팀 간 비교 금지",
  "가치기반 인도(ECO II-3)·증분 인도 합의",
  "하이브리드 설계·통합 마일스톤",
  "번다운·번업·CFD 그래프 해석",
  "CPI·SPI 판정과 EAC 공식 선택",
  "인수 기준 vs DoD (둘 다 충족해야 완료)",
  "Control Quality → Validate Scope 순서",
  "교훈은 상시 기록 → 종료 시 OPA 이관",
  "조기 종료에도 종료 절차 수행",
  "지표 미화 금지·정직한 상태 보고",
  "식별된 위험 발생 → 계획된 대응 실행 + 이슈 로그",
  "예측형 변경: 문서화 → 영향 분석 → CCB / 애자일 변경: PO·백로그",
  "위협·기회 대응 전략 10개 구분(Transfer·Mitigate·Exploit·Enhance)",
  "우발 예비 vs 관리 예비(기준선 안/밖, 승인)",
  "에스컬레이션 경로·임계치 — 분석·대안과 함께 상향",
  "위험 vs 이슈 vs 장애, 서번트 리더의 장애 제거",
  "컴플라이언스 타협 불가 — 미준수 결과 설명 + 대안",
  "8판 6원칙 이름과 상황형 적용(가치·품질·지속가능성·권한 부여)",
  "8판 7성과영역 이름 vs 7판 8성과영역 이름 구분",
  "Output → Outcome → Benefit → Value",
  "테일러링 정의와 '컴플라이언스는 테일러링 불가'",
  "윤리 강령 4가치 — 이해충돌(공정)·정직 상황 판단",
  "거버넌스 임계치 초과 시 분석+대안으로 에스컬레이션",
  "CV·SV·CPI·SPI 계산과 해석",
  "EAC 4가지 공식 선택(가정 단어)",
  "TCPI 의미(>1 어려움)",
  "주경로·총여유 계산",
  "Crashing vs Fast-tracking",
  "PERT (O+4M+P)/6 · σ",
  "EMV·의사결정나무(투자비 차감)",
  "의사소통 채널 n(n−1)/2(PM 포함·증가분)",
  "벨로시티·잔여 스프린트 계산"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "ECO 2026 도메인 비중 33/41/26 · Task 26 · BE 이동 주제",
  "프로젝트·프로그램·포트폴리오·운영 구분",
  "PMO 3유형 · 조직구조별 PM 권한",
  "OPA vs EEF · Output→Outcome→Benefit→Value",
  "생애주기 4유형 목표(원가·정확성·속도·고객 가치)",
  "시험 형식 180/170/240 · 문항 8유형 · 응시 자격",
  "Herzberg 위생 vs 동기요인",
  "McGregor X/Y · Ouchi Z 학자 짝",
  "Vroom 기대·수단성·유의성",
  "상황적 리더십 4스타일",
  "RACI — A 는 1명",
  "현저성 모형 권력·긴급성·정당성",
  "Interactive·Push·Pull 선택",
  "암묵지 이전(잡 섀도잉·페어링) · 교훈 등록부 상시 기록",
  "고객 만족도 하락 대응(가치 중심 성공 정의)",
  "팀 헌장·그라운드룰 위반 시정",
  "BATNA · 원칙적 협상",
  "Fist of Five · Roman voting · Delphi · Plurality vs Majority",
  "권력 5유형 · 감성지능 4요소",
  "PDM 4관계·의존관계 4유형·Lead/Lag",
  "Leveling vs Smoothing",
  "추정 기법 4종(유사·모수·3점·상향식)",
  "CoQ 4분류·관리도 Rule of Seven",
  "7 QC 도구 용도",
  "RACI(A는 1명)·RBS·OBS",
  "RFI·RFQ·RFP·입찰자 회의 공정성",
  "클레임: 협상 → ADR → 소송",
  "의사소통 채널 n(n−1)/2·Push/Pull/Interactive",
  "조기 종료도 종료 절차·교훈 상시 기록",
  "금도금 vs 범위 추가·RTM",
  "칸반 WIP·리틀의 법칙·CFD 병목",
  "INVEST·3C·수용 기준(Given-When-Then)",
  "MoSCoW·WSJF·Kano",
  "플래닝 포커·수정 피보나치",
  "MVP vs MMF",
  "번다운 vs 번업 해석",
  "APG 2판 용어(refinement·daily coordination meeting·continuum)",
  "테일러링 4단계·애자일 적합성 필터",
  "XP 실천(TDD·CI·짝 프로그래밍·스파이크)",
  "린 7낭비·VSM 효율",
  "심리적 안정감·회고 운영",
  "정보 방열기·가상 대시보드",
  "리틀의 법칙·리드타임 vs 사이클타임",
  "산출물 테일러링(PMO 템플릿 과다)",
  "이관 준비도 검증(운영팀 인수)",
  "클레임 해결 순서(협상 → ADR → 소송)",
  "회고 심리적 안전·비난 없는 진행",
  "암묵지 이전(페어링·쉐도잉)",
  "굿하트의 법칙·벨로시티 오용",
  "KPI vs OKR·선행 vs 후행 지표",
  "TCPI 해석",
  "CoQ 4분류",
  "편익은 종료 후 실현·편익 소유자",
  "정성(P-I 매트릭스) vs 정량(몬테카를로·토네이도·EMV)",
  "잔여 위험 vs 2차 위험, 비상 계획 vs 대체 계획 vs 우회책",
  "OPA vs EEF, PMO 3유형, 조직 구조별 PM 권한",
  "교훈 등록부 vs 저장소, OPA 갱신",
  "산출물 → 결과 → 편익 → 가치, 편익 책임자",
  "외부 환경 변화(규제·기술·지정학·시장) 영향 평가 → 범위·백로그",
  "조직 문화 평가와 변화 저항 대응(ADKAR·Kotter·Lewin [확인필요])",
  "AI 거버넌스(데이터 보호·사람 검증)·지속가능성(Triple Bottom Line)",
  "8판 비처방형 프로세스 재도입과 5 Focus Areas",
  "Focus Area ≠ 단계(phase)",
  "7판 12원칙 ↔ 8판 6원칙 대응(해석)",
  "모델·방법·산출물 구분",
  "7판 테일러링 4단계 순서",
  "포트폴리오·프로그램·프로젝트·운영 정의",
  "Cynefin 복잡 영역 — 탐색·감지·대응",
  "자유여유 vs 총여유",
  "경로 σ = √Σσ² · 신뢰구간",
  "삼각 vs 베타 분포",
  "ETC·VAC",
  "우발예비 vs 관리예비",
  "계약 유형별 구매자 위험 순서",
  "NPV·IRR·BCR·Payback·매몰/기회비용",
  "Little's Law",
  "PTA·FPIF 지불액 [확인필요: 2026 빈도]",
  "애자일 EVM [확인필요: 2026 빈도]"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "상황형 — 공급사 지연 (PMI 샘플 패턴)",
  "problem": "예측형 공장 설비 프로젝트에서 핵심 장비 공급사가 납기를 4주 늦추겠다고 통보했다. 이 장비는 주경로 활동에 필요하다. 프로젝트 관리자는 먼저 무엇을 해야 하는가?\n① 즉시 스폰서에게 에스컬레이션해 지시를 받는다.\n② 팀과 함께 일정 영향을 평가하고 대응 옵션을 검토한다.\n③ 즉시 다른 주경로 활동에 인력을 추가해 일정을 단축한다.\n④ 계약 위반을 근거로 공급사와의 계약을 해지한다.",
  "steps": [
   "맥락 표시: 예측형, 실행 단계, 외부 공급사 문제 — 질문은 'first'.",
   "진짜 문제: 아직 영향 규모(주경로 지연 폭, float, 대체 공급처 유무)를 모른다.",
   "PMI 순서 적용: 먼저 분석(원칙 1) → 팀과 옵션 검토(원칙 4) → 권한 초과 시 에스컬레이션(원칙 6).",
   "소거: ①은 너무 이름, ③은 영향 평가 전 과한 대응(원가↑), ④는 과하고 계약 절차 무시.",
   "남는 보기: ②."
  ],
  "answer": "② — 영향 평가와 대응 옵션 검토가 먼저다.",
  "traps": [
   "'주경로'라는 단어에 놀라 즉시 압축을 고르는 실수",
   "에스컬레이션은 분석·대안 확보 후, 권한을 넘을 때만"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "상황형 — 예외 규칙: 안전 위반은 '먼저 분석'보다 우선",
  "problem": "건설 현장에서 하도급 업체가 일정 만회를 위해 고소작업 안전 장비 점검을 생략하고 있는 것을 PM이 발견했다. 프로젝트 관리자는 무엇을 해야 하는가?\n① 점검 생략이 일정에 주는 이득과 위험을 먼저 분석한다.\n② 해당 작업을 중단시키고 컴플라이언스·거버넌스 절차에 따라 보고한다.\n③ 하도급 계약서를 검토해 책임 소재를 먼저 정리한다.\n④ 다음 주간 회의에서 안전 수칙 준수를 당부한다.",
  "steps": [
   "평소라면 '먼저 분석'이 정답 경향이지만, 이 문제는 안전·법규 위반이다.",
   "원칙 10: 윤리·컴플라이언스는 타협 불가 — 다른 원칙보다 우선한다(ECO III-2).",
   "①·③은 '분석·정리'처럼 보여 매력적이지만 위험한 작업이 계속되는 동안 사람이 다칠 수 있다.",
   "④는 미루기(책임 회피)다.",
   "따라서 즉시 중단·보고인 ②."
  ],
  "answer": "② — 안전 위반은 즉시 중단하고 보고한다.",
  "traps": [
   "'즉시'가 들어간 보기는 무조건 오답이라는 과잉 일반화",
   "분석 보기가 늘 정답이라는 기계적 적용"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "Situational (English) — change request in an agile project",
  "problem": "Midway through a two-week sprint, a key customer asks the team to add a new reporting feature that she says is urgent. The team uses Scrum. What should the project manager do?\n① Add the feature to the current sprint backlog so the team can start immediately.\n② Submit a formal change request to the change control board.\n③ Ask the customer to discuss the request with the product owner so it can be added to and prioritized in the product backlog.\n④ Cancel the sprint and start a new one that includes the feature.",
  "steps": [
   "맥락 표시: 애자일(스크럼), 스프린트 진행 중 — 예측형 CCB 절차가 아니다.",
   "원칙 3: 새 요구는 제품 백로그로 → PO가 가치 기준 우선순위.",
   "①은 진행 중 스프린트 범위를 흔들고, ②는 예측형 절차를 잘못 적용, ④는 스프린트 취소 권한은 PO에게 있고 과한 대응이다.",
   "'urgent'라는 말에 끌리지 말 것 — 긴급성 판단도 PO가 우선순위로 한다."
  ],
  "answer": "③ — 제품 백로그에 넣고 PO가 우선순위를 정한다.",
  "traps": [
   "'urgent'에 반응해 현재 스프린트에 끼워 넣는 실수",
   "애자일 맥락에서 CCB를 고르는 접근법 혼동"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "갈등 상황형 — '누구와 · 어디서 · 무엇부터'",
  "problem": "애자일 팀의 두 개발자가 코드 리뷰 방식을 두고 데일리 회의 중에 언쟁을 벌였다. 다른 팀원들은 불편해하고 있으며, 두 사람은 이후 서로의 코드를 리뷰하지 않고 있다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?\n① 다음 회고에서 이 사례를 전체 팀에 공개해 재발 방지책을 정한다\n② 두 개발자와 사적으로 만나 각자의 우려를 듣고 팀 합의 기준에 맞는 리뷰 방식을 함께 찾는다\n③ 코드 리뷰를 일시 중단하고 기능 개발에 집중하게 한다\n④ 두 사람의 기능 관리자에게 알려 업무 태도를 교정하게 한다",
  "steps": [
   "상황의 신호를 읽는다 — 갈등이 이미 표면화됐고 리뷰 중단이라는 업무 영향까지 생겼다. 즉, PM 이 개입할 시점이다.",
   "PMI 마인드셋 '직접·사적 대화 + 먼저 분석' — 당사자와 원인·맥락을 파악하는 보기가 1순위 후보다(②).",
   "①은 공개 지적이라 안정감을 해치고, ③은 회피(Withdraw)라 품질 위험을 키운다.",
   "④는 PM 이 먼저 해야 할 시도를 건너뛴 에스컬레이션이다 — 원인이 '태도'라는 근거도 없다."
  ],
  "answer": "② — 당사자와 직접·사적으로 원인을 듣고 협업으로 해결",
  "traps": [
   "'공개 회의에서 해결' 은 투명해 보이지만 갈등 당사자 처리에는 오답",
   "에스컬레이션 보기는 '권한·임계치를 넘었는가'를 먼저 따진다"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "이해관계자 상황형 — 권한 밖 요청 반복",
  "problem": "예측형 프로젝트의 실행 단계에서, 현업 부서장이 팀원에게 직접 연락해 보고서 양식 몇 가지를 추가해 달라고 여러 번 요청했다. 일부 팀원은 이미 작업을 시작했다. 프로젝트 관리자가 먼저 해야 할 일은?\n① 팀원들에게 부서장의 요청을 모두 거절하라고 지시한다\n② 이미 시작한 작업은 완료하고 이후 요청만 받지 않는다\n③ 부서장을 만나 역할과 요청 경로를 함께 검토하고, 요청은 변경 요청으로 제출해 영향 분석을 받도록 안내한다\n④ 스폰서에게 부서장의 행동을 보고하고 중재를 요청한다",
  "steps": [
   "ECO I-4·I-6 과 PMI 공식 샘플 패턴: 권한 밖 지시를 반복하는 이해관계자 → 직접 만나 역할·권한·영향을 검토.",
   "예측형 맥락이므로 범위 추가는 통합변경통제(CR → 영향분석 → CCB) 경로를 거친다(III-3 연결).",
   "①은 관계를 해치고 요구 자체를 무시하며, ②는 승인 없는 범위 추가(골드 플레이팅·범위 크리프)를 인정한다.",
   "④는 PM 이 직접 대화를 시도하기 전의 에스컬레이션이다."
  ],
  "answer": "③ — 이해관계자와 직접 만나 요청 경로를 정렬하고 변경통제로 연결",
  "traps": [
   "애자일 맥락이면 '변경 요청' 대신 '백로그에 추가하고 PO 가 우선순위' 가 정답 표현",
   "'이미 시작한 작업은 완료' 는 그럴듯하지만 승인 없는 범위 변경"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "의사소통 채널 계산 — 총합 vs 증가분",
  "problem": "프로젝트 관리자를 포함해 6명이던 팀에 4명이 새로 합류했다. 의사소통 채널은 몇 개 늘어나는가?\n① 15\n② 30\n③ 45\n④ 6",
  "steps": [
   "공식 n(n−1)/2 에서 n 은 PM 포함 인원이다.",
   "합류 전 6명: 6×5/2 = 15개. 합류 후 10명: 10×9/2 = 45개.",
   "묻는 것은 '늘어난' 채널 수이므로 45 − 15 = 30."
  ],
  "answer": "② 30",
  "traps": [
   "45(총 채널 수)를 고르는 실수가 가장 많다",
   "PM 을 빼고 n 을 세면 값이 달라진다 — 문제의 '포함' 여부를 먼저 확인"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "CPM — 총 여유와 공정 압축 대상",
  "problem": "다음 네트워크(모두 FS, Lead/Lag 없음)에서 일정을 1일 단축해야 한다. 활동별 1일 단축 비용은 A 50만, B 20만, C 40만, D 30만, E 60만 원이다.\nA(3일) → B(4일) → E(2일)\nA(3일) → C(2일) → D(3일) → E(2일)\n가장 적은 비용으로 종료일을 1일 단축하려면 어느 활동을 압축해야 하는가?\n① B\n② D\n③ C\n④ A",
  "steps": [
   "경로를 모두 나열한다: A-B-E = 3+4+2 = 9일, A-C-D-E = 3+2+3+2 = 10일.",
   "주경로는 A-C-D-E(10일)이다. A-B-E는 총 여유 1일.",
   "주경로 활동(A·C·D·E) 중 단축 비용이 가장 작은 것은 D(30만)이다.",
   "B는 가장 싸지만 비주경로이므로 압축해도 종료일이 줄지 않는다.",
   "D를 1일 단축하면 두 경로 모두 9일 — 주경로가 2개가 되어 일정 위험이 커지는 점도 기억한다."
  ],
  "answer": "② D — 주경로 활동 중 비용 기울기가 가장 작다.",
  "traps": [
   "가장 싼 활동(B)을 고르는 함정 — 주경로 여부부터 확인",
   "A·E는 두 경로 모두에 있어 효과는 확실하지만 비용이 더 크다"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "상황형 — 예비비 종류와 승인 경로",
  "problem": "건설 프로젝트 중 위험 기록부에 등록되어 있던 '장마로 인한 지반 침하'가 발생했다. 동시에, 아무도 예상하지 못한 지자체 조례 개정으로 방음벽 추가 공사가 필요해졌다. 프로젝트 관리자가 할 일로 가장 적절한 것은?\n① 두 건 모두 우발 예비비로 처리한다\n② 지반 침하는 계획된 대응과 우발 예비비로 처리하고, 방음벽은 영향 분석 후 관리 예비비 사용 변경 요청을 제출한다\n③ 두 건 모두 관리 예비비 사용을 즉시 스폰서에게 요청한다\n④ 지반 침하는 관리 예비비로, 방음벽은 우발 예비비로 처리한다",
  "steps": [
   "각 사건이 '식별된 위험'인지 '미식별 위험'인지 먼저 분류한다.",
   "지반 침하는 위험 기록부에 있었다 → known-unknown → 계획된 대응 + 우발 예비비(기준선 안, PM 사용).",
   "조례 개정은 예상하지 못했다 → unknown-unknown → 관리 예비비(기준선 밖).",
   "관리 예비비 사용은 PM 권한 밖이므로 영향 분석 후 변경 요청 → 승인 시 원가 기준선 갱신."
  ],
  "answer": "② — 식별 위험은 우발 예비비, 미식별 위험은 변경통제를 통한 관리 예비비.",
  "traps": [
   "'즉시 스폰서에게' — 분석 없이 에스컬레이션하는 보기는 오답 패턴",
   "우발 예비비를 미식별 위험에 전용하면 원래 위험에 대한 대응 여력이 사라진다"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "계약 유형 선택 — 범위 명확성과 위험 배분",
  "problem": "회사가 사내 교육 플랫폼 구축을 외주로 맡기려 한다. 기능 요구는 아직 탐색 단계라 확정되지 않았지만, 경영진은 총 지출에 상한을 두길 원하며 빨리 착수하고 싶어 한다. 가장 적절한 계약 유형은?\n① 확정 고정가(FFP)\n② 원가 + 고정 수수료(CPFF)\n③ 상한(Not-to-exceed)을 둔 시간·자재(T&M)\n④ 고정가 + 경제가격조정(FP-EPA)",
  "steps": [
   "범위가 불확실하므로 FFP는 판매자가 위험 프리미엄을 크게 붙이거나 거부한다 → 부적합.",
   "CPFF는 범위 불확실에 맞지만 지출 상한이 없어 경영진 요구와 충돌한다.",
   "FP-EPA는 장기 계약의 물가 변동 대응용으로 상황과 무관하다.",
   "T&M은 범위 확정 전 빠른 착수에 적합하고, NTE 상한으로 총 지출을 통제할 수 있다."
  ],
  "answer": "③ 상한을 둔 T&M",
  "traps": [
   "'구매자 위험 최소 = 항상 FFP' 로 외우면 틀린다 — 범위 명확성이 전제",
   "애자일·하이브리드 외주에서 T&M + NTE·반복 단위 계약이 자주 쓰인다[확인필요: 2026 출제 비중]"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "스프린트 중 신규 요청 — 누구에게, 어디로?",
  "problem": "스크럼을 적용하는 프로젝트의 스프린트 6일차, 마케팅 이사가 개발자에게 직접 와서 다음 주 캠페인에 필요한 기능을 이번 스프린트에 추가해 달라고 요청했다. 프로젝트 관리자(스크럼 마스터 역할)는 무엇을 해야 하는가?\n① 스프린트 목표를 수정해 기능을 즉시 추가한다\n② 요청을 Product Owner에게 전달해 Product Backlog에서 가치와 순서를 판단하게 한다\n③ 스프린트 중이므로 요청을 거절하고 다음 분기에 다시 요청하라고 안내한다\n④ 변경통제위원회(CCB)에 변경 요청서를 제출한다",
  "steps": [
   "접근법부터 확인한다 — 스크럼(애자일) 맥락이다. 예측형 CCB 절차(④)는 맥락이 맞지 않는다.",
   "누가 결정하는가 — 가치와 순서를 책임지는 사람은 Product Owner다. PM이나 개발자가 결정하지 않는다.",
   "스프린트 보호 — Sprint Goal을 위태롭게 하는 변경은 하지 않는다(①은 오답). 다만 무조건 거절(③)도 이해관계자 협업 원칙에 어긋난다.",
   "PO가 백로그에서 판단하면 긴급하고 가치가 높을 경우 다음 스프린트 상단에 올라가고, 필요하면 PO가 스프린트 취소까지 판단할 수 있다."
  ],
  "answer": "② — 새 요구는 PO가 Product Backlog에서 가치 기준으로 순서를 정한다.",
  "traps": [
   "'즉시 반영'은 고객 중심처럼 보이지만 스프린트 목표 보호 원칙 위반",
   "애자일 맥락에 예측형 CCB 절차를 끼워 넣는 보기"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "속도 예측 계산 + 완료 정의 함정",
  "problem": "팀의 최근 3개 스프린트 결과는 다음과 같다. 스프린트 1: 완료 21점, 스프린트 2: 완료 18점(별도로 80% 진행된 5점 스토리 1개), 스프린트 3: 완료 24점. 잔여 백로그가 147점일 때 남은 스프린트 수로 가장 적절한 것은?\n① 6\n② 7\n③ 8\n④ 9",
  "steps": [
   "속도는 DoD를 충족한 스토리만 센다 — 80% 진행된 5점 스토리는 0점이다(4점을 더하면 함정).",
   "평균 속도 = (21 + 18 + 24) ÷ 3 = 63 ÷ 3 = 21점.",
   "잔여 스프린트 = 147 ÷ 21 = 7.",
   "만약 부분 점수 4점을 넣으면 평균 약 22.3 → 6.6 → 7로 올림되어 같아 보이지만, 원칙상 부분 점수는 반영하지 않는다는 점을 해설에서 확인한다."
  ],
  "answer": "② 7 스프린트",
  "traps": [
   "부분 완료 스토리의 진척률을 속도에 넣는 실수",
   "최고 속도(24)로 나누어 낙관적으로 6을 고르는 실수"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "하이브리드 + 거버넌스 — 가장 '적절하지 않은' 행동 찾기",
  "problem": "규제 대상 금융 시스템 프로젝트에서 핵심 원장 모듈은 감독기관 승인 일정에 맞춰 예측형으로, 고객 앱은 2주 스프린트로 운영한다. PMO는 월간 단계 보고를 요구하고, 앱 팀은 \"애자일 팀이라 보고서가 필요 없다\"고 말한다. 프로젝트 관리자의 행동으로 가장 적절하지 않은 것은?\n① 원장 모듈의 승인 마일스톤과 앱 릴리스 계획을 통합 로드맵으로 정렬한다\n② 번업 차트·속도 등 기존 애자일 산출물로 PMO 보고 요구를 충족할 수 있는지 협의한다\n③ 앱 팀의 의견을 존중해 PMO 보고 요구에서 앱 팀을 제외해 달라고 통보한다\n④ 두 흐름의 통합 테스트 시점을 초기에 합의해 통합 위험을 줄인다",
  "steps": [
   "'적절하지 않은 것'을 찾는 문항 — 세 보기는 정답 패턴(정렬·테일러링·조기 통합)이고 하나만 원칙 위반이다.",
   "①·④는 하이브리드의 핵심인 통합 마일스톤 정렬과 조기 통합이다.",
   "②는 거버넌스 요구를 애자일 산출물로 충족하는 테일러링이다.",
   "③은 거버넌스 요구를 협의 없이 '통보'로 회피한다 — 이해관계자 협업·거버넌스 정합 위반."
  ],
  "answer": "③ — 거버넌스 요구는 회피 대상이 아니라 테일러링으로 충족할 대상이다.",
  "traps": [
   "'팀 의견 존중'이라는 서번트 리더 표현으로 포장된 책임 회피",
   "하이브리드는 이분법이 아닌 연속체 — 두 방식을 따로 굴리고 끝에서 합치는 설계도 오답"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "그래픽형 — 번다운 차트의 수평 구간 해석",
  "problem": "2주 스프린트 8일째, 번다운 차트를 보니 실제선이 이상선보다 위에 있고 5일째부터 수평이다. 팀원들은 \"모든 스토리를 80% 정도 진행했다\"고 말한다. 프로젝트 관리자(팀 퍼실리테이터)는 무엇을 해야 하는가?\n① 진행률을 반영해 스토리 포인트를 부분 인정하도록 번다운 계산 방식을 바꾼다\n② 팀이 여러 스토리를 동시에 진행하는 대신 소수 스토리를 끝까지 완료하는 데 집중(WIP 제한·스워밍)하도록 팀과 논의한다\n③ 스프린트 목표 달성이 어려우므로 PO에게 스프린트 취소를 요청한다\n④ 팀원별 일일 작업 시간을 보고받아 지연 원인을 찾는다",
  "steps": [
   "차트부터 읽는다 — Y축은 남은 작업량, 수평 구간은 '완료(DoD)된 스토리가 없다'는 신호다.",
   "단서 \"모든 스토리를 80% 진행\" — 동시에 너무 많은 작업을 벌여 아무것도 끝나지 않는 WIP 과다 패턴이다.",
   "대응은 원인에 맞춰야 한다 — 착수보다 완료에 집중(Stop starting, start finishing), 팀이 몰려 하나씩 끝내는 스워밍.",
   "①은 미완 작업을 완료처럼 보이게 하는 지표 왜곡, ③은 과잉 조치, ④는 마이크로매니지먼트로 자기조직화를 해친다."
  ],
  "answer": "② — 수평 번다운의 원인인 WIP 과다를 팀과 함께 해소한다.",
  "traps": [
   "번다운의 수평 구간을 '팀이 일을 안 했다'로 해석하는 오답",
   "부분 완료 포인트 인정은 벨로시티 왜곡"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "EAC 공식 선택 — 상황 단서 읽기",
  "problem": "BAC $200,000인 예측형 프로젝트. 현재 EV $80,000, AC $100,000이다. 분석 결과 원가 초과는 한 번 발생한 장비 고장 수리비 때문이며 재발 가능성은 없다. 스폰서에게 보고할 EAC로 가장 적절한 것은?\n① $250,000\n② $220,000\n③ $200,000\n④ $180,000",
  "steps": [
   "CPI = 80,000 ÷ 100,000 = 0.8.",
   "단서 \"일회성, 재발 없음\" → 남은 작업은 원래 계획 효율로 진행된다고 본다 → EAC = AC + (BAC − EV).",
   "EAC = 100,000 + (200,000 − 80,000) = $220,000.",
   "①($250,000)은 BAC ÷ CPI — CPI가 계속될 때의 공식으로, 일회성 상황에 쓰면 과대 추정이다. ③은 편차를 무시한 값이다."
  ],
  "answer": "② $220,000",
  "traps": [
   "가장 익숙한 BAC ÷ CPI를 기계적으로 고르는 실수",
   "원인이 '원래 추정 결함'이었다면 AC + 상향식 ETC가 정답"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "상황형 — 조기 종료와 이관 준비",
  "problem": "시장 변화로 스폰서가 6개월 차 프로젝트의 중단을 결정했다. 일부 모듈은 이미 운영 환경에서 쓰이고 있고, 외주 계약 2건이 진행 중이다. 프로젝트 관리자는 무엇을 해야 하는가?\n① 즉시 팀을 해산하고 외주사에도 작업 중지를 통보한 뒤 프로젝트를 닫는다\n② 완료·미완 상태를 문서화하고, 운영 중인 모듈의 이관 준비를 확인하며, 외주 계약은 해지 조항에 따라 종결·정산하고 교훈을 정리한다\n③ 이미 투자한 비용이 크므로 남은 모듈을 완료한 뒤 종료하자고 스폰서를 설득한다\n④ 운영 중인 모듈을 포함해 모든 산출물을 폐기한다",
  "steps": [
   "조기 종료도 ECO II-10 종료 활동을 모두 거친다 — 상태 문서화, 이관, 조달·재무 정산, 교훈, 자원 해산.",
   "이미 운영 중인 모듈은 편익을 내고 있으므로 운영 조직에 제대로 이관해야 한다(이관 준비도 검증).",
   "외주 계약은 계약 조항에 따라 해지·정산 — 일방 통보만으로 끝내면 클레임 위험.",
   "③은 매몰비용 오류이자 거버넌스 결정 불복, ①·④는 절차·가치 손실."
  ],
  "answer": "② — 조기 종료에도 공식 종료 절차와 이관을 수행한다.",
  "traps": [
   "'중단 = 즉시 해산'으로 보는 오답",
   "매몰비용을 근거로 계속 진행을 설득하는 보기"
  ]
 },
 {
  "s": "s6",
  "d": 2,
  "title": "위험이 이슈가 되는 순간 — '새 대응'이 아니라 '계획된 대응'",
  "problem": "하이브리드 프로젝트에서 위험 등록부에 '클라우드 공급사 리전 장애' 위험이 트리거(응답 지연 30초 이상)와 비상 계획(보조 리전 전환)과 함께 등록되어 있다. 오늘 아침 트리거 조건이 발생했다. 프로젝트 관리자는 무엇을 해야 하는가?\n① 팀을 소집해 새로운 대응 아이디어를 브레인스토밍한다\n② 비상 계획에 따라 보조 리전으로 전환하고 이슈 로그에 기록한 뒤 이해관계자에게 상황을 알린다\n③ 공급사 계약 위반이므로 즉시 조달 부서에 클레임 제기를 요청한다\n④ 스폰서에게 에스컬레이션해 지시를 기다린다",
  "steps": [
   "상황 분류: 이미 식별·분석된 위험이 트리거로 실현되었다 → 이제는 이슈다.",
   "PMI 마인드셋 7: 계획을 먼저 참조하고 식별된 위험이 발생하면 계획된 대응을 실행한다.",
   "실행과 함께 이슈 로그에 기록하고(ECO III-4) 위험 상태를 소통한다(ECO III-5).",
   "①은 계획이 이미 있는데 시간을 낭비, ③은 원인 분석 전의 성급한 조치, ④는 PM 권한 안의 일을 넘기는 책임 회피."
  ],
  "answer": "② — 계획된 대응 실행 + 이슈 로그 기록 + 소통",
  "traps": [
   "'팀과 협업'이라는 좋은 말이 들어간 ①에 끌리기 쉽다 — 계획이 있으면 실행이 먼저",
   "미식별 위험이었다면 정답은 우회책(workaround)이다"
  ]
 },
 {
  "s": "s6",
  "d": 3,
  "title": "임계치와 에스컬레이션 — 언제 위로 올리는가",
  "problem": "프로젝트 거버넌스 계획에 '일정 지연 2주 이하는 PM 재량, 초과 시 운영위원회 보고'라고 정의되어 있다. 핵심 공급사 문제로 3주 지연이 예상된다. 프로젝트 관리자는 무엇을 해야 하는가?\n① 팀에 초과 근무를 지시해 지연을 2주 이내로 줄인 뒤 보고하지 않는다\n② 지연 원인과 영향을 분석하고 압축·대체 공급 등 대안을 준비해 운영위원회에 보고한다\n③ 공급사를 즉시 교체하고 결과를 운영위원회에 통보한다\n④ 다음 정기 보고까지 상황을 지켜본다",
  "steps": [
   "임계치(2주)를 넘었으므로 에스컬레이션 대상이다(ECO III-1 escalation paths and thresholds).",
   "에스컬레이션은 '문제 던지기'가 아니라 분석 + 대안을 함께 가져가는 것이다(PMI 공식 샘플③ 패턴).",
   "①은 투명성 위반, ③은 분석 없는 독단, ④는 보고 지연."
  ],
  "answer": "② — 분석과 대안을 갖춘 에스컬레이션",
  "traps": [
   "임계치 '안'이었다면 정답은 PM이 팀과 해결 — 에스컬레이션이 항상 정답은 아니다"
  ]
 },
 {
  "s": "s6",
  "d": 2,
  "title": "애자일 변경 요청 — 누가 결정하는가",
  "problem": "스프린트 2일 차에 영업 임원이 '다음 주 고객 시연용으로 대시보드 필터 기능이 꼭 필요하다'며 팀에 직접 요청했다. 스프린트 목표는 결제 모듈 완성이다. 프로젝트 관리자(서번트 리더)는 어떻게 해야 하는가?\n① 임원의 요청이므로 팀에게 이번 스프린트에 즉시 추가하라고 한다\n② 요청을 프로덕트 오너에게 연결해 백로그에 추가하고 우선순위를 정하게 하며, 현재 스프린트 목표는 보호한다\n③ 스프린트 중 변경은 금지이므로 요청을 거절한다\n④ PM이 직접 백로그 우선순위를 조정해 다음 스프린트 첫 항목으로 올린다",
  "steps": [
   "애자일 맥락의 변경은 백로그로 흡수하고 PO가 가치 기준으로 우선순위를 정한다(PMI 마인드셋 3).",
   "진행 중 스프린트 목표는 보호한다 — 정말 긴급하면 PO가 팀과 협의해 판단할 문제다.",
   "①은 스프린트 목표 훼손, ③은 변경을 환영하는 애자일 가치와 협업에 어긋남, ④는 PO 역할 침해."
  ],
  "answer": "② — PO에게 연결 + 백로그 + 스프린트 목표 보호",
  "traps": [
   "예측형이었다면 CCB 절차가 정답 — 접근법에 따라 정답 경로가 달라진다"
  ]
 },
 {
  "s": "s7",
  "d": 2,
  "title": "원칙 vs 지시 — 지속가능성 요구 삭제 요청",
  "problem": "제조 설비 교체 프로젝트에서 스폰서가 예산 압박을 이유로 '폐열 회수 장치' 요구사항을 빼라고 요청했다. 이 장치는 법적 의무는 아니지만 조직의 탄소 감축 목표에 포함돼 있다. 프로젝트 관리자는 다음에 무엇을 해야 하는가?\n① 스폰서 요청이므로 변경요청 없이 즉시 범위에서 뺀다.\n② 법적 의무가 아니므로 요청을 무시하고 원래 설계를 유지한다.\n③ 제거 시 초기 원가 절감과 운영비·탄소 목표 영향을 분석해 대안과 함께 스폰서와 검토한다.\n④ 조직 ESG 위원회에 스폰서를 바로 보고한다.",
  "steps": [
   "관련 원칙을 찾는다 — PMBOK 8판 '지속가능성 통합(Integrate sustainability)'과 '가치 집중'.",
   "마인드셋 1번 '먼저 분석'에 비추어 '즉시'·'무시'·'바로 보고' 보기를 걸러 낸다.",
   "①은 분석도 변경통제도 없다. ②는 의사결정권자를 무시한다. ④는 분석 없는 에스컬레이션으로 과하다.",
   "③은 영향을 수치로 보여 주고 결정권자(스폰서)가 판단하게 한다 — 책임 있는 리더십과도 맞는다."
  ],
  "answer": "③ — 영향 분석과 대안을 갖고 의사결정권자와 검토한다.",
  "traps": [
   "'원칙 준수'를 이유로 스폰서 요청을 무조건 거부하는 보기도 오답",
   "지속가능성은 성과영역이 아니라 원칙이라는 점"
  ]
 },
 {
  "s": "s7",
  "d": 2,
  "title": "판별 숫자 바꿔치기 — 6·7·8판 구조",
  "problem": "PMBOK 가이드 판별 구조에 대한 설명으로 옳지 않은 것은?\n① 6판은 5개 프로세스 그룹과 10개 지식영역, 49개 프로세스로 구성된다.\n② 7판은 12개 원칙과 8개 성과영역으로 구성된다.\n③ 8판은 7판의 원칙 체계를 폐지하고 49개 프로세스를 의무화했다.\n④ 8판은 Governance와 Finance를 성과영역 이름으로 제시한다.",
  "steps": [
   "판마다 '숫자 묶음'을 떠올린다: 6판 5·10·49 / 7판 12·8 / 8판 6·7(+5 Focus Areas).",
   "8판의 프로세스 지침은 '재도입'이지만 '비처방형'이다 — '의무화'는 틀린 표현.",
   "8판은 원칙 체계를 폐지하지 않고 12개를 6개로 단순화했다.",
   "④는 8판 7성과영역(Governance·Scope·Schedule·Finance·Stakeholders·Resources·Risk)과 맞다."
  ],
  "answer": "③ — 8판은 원칙·성과영역을 유지하며 프로세스를 비처방형으로 다시 넣었다.",
  "traps": [
   "8판 프로세스 수(40개로 알려짐)는 원문 [확인필요] — 숫자를 묻는 보기는 신중히",
   "Uncertainty·Measurement는 7판 영역 이름"
  ]
 },
 {
  "s": "s7",
  "d": 3,
  "title": "Output vs Outcome — 가치 인도 상황 해석",
  "problem": "고객센터 챗봇 프로젝트가 사양을 모두 충족해 인수됐다. 6개월 뒤 측정해 보니 상담원 연결 요청 건수가 줄지 않았고, 비즈니스 케이스의 목표였던 상담 비용 절감도 나타나지 않았다. 프로젝트 관리자(현재 후속 단계 담당)가 다음에 할 일로 가장 적절한 것은?\n① 사양을 충족해 인수됐으므로 프로젝트는 성공했다고 보고한다.\n② 사용 데이터와 고객 피드백으로 성과 미실현 원인을 분석하고 이해관계자와 개선 방안을 검토한다.\n③ 챗봇에 결함이 있다고 보고 공급사에 하자 보수를 청구한다.\n④ 운영팀의 활용 부족 탓으로 문서화하고 종결한다.",
  "steps": [
   "상황을 가치 사슬로 나눈다: 챗봇 = 산출물(Output, 인도됨) / 연결 요청 감소 = 성과(Outcome, 미실현) / 비용 절감 = 편익(Benefit, 미실현).",
   "가치 집중 원칙과 ECO II-3(편익 추적)에 따라 '인수 = 성공'(①)은 함정.",
   "③은 사양을 충족했으므로 결함 근거가 없다. ④는 원인 분석 없는 책임 전가다.",
   "②는 먼저 분석하고 이해관계자와 협업하는 PMI 마인드셋과 맞는다."
  ],
  "answer": "② — 산출물은 인도됐지만 성과가 실현되지 않았으므로 원인을 분석해 개선한다.",
  "traps": [
   "'사양 충족 = 가치 실현'으로 보는 보기",
   "Output과 Outcome의 단어 바꿔치기"
  ]
 },
 {
  "s": "s8",
  "d": 2,
  "title": "EVM 종합 — 상태 판단과 EAC 고르기",
  "problem": "BAC $100,000인 프로젝트의 현재 PV $50,000, EV $40,000, AC $50,000 이다. 팀은 지금까지의 원가 효율이 끝까지 계속될 것으로 본다. 다음 중 옳은 것은?\n① CPI 1.25, EAC $80,000\n② CPI 0.8, EAC $125,000\n③ CPI 0.8, EAC $110,000\n④ SPI 1.0, EAC $143,750",
  "steps": [
   "CPI = EV/AC = 40,000/50,000 = 0.8, SPI = EV/PV = 40,000/50,000 = 0.8.",
   "'효율이 계속' → EAC = BAC/CPI = 100,000/0.8 = 125,000.",
   "110,000은 일회성 편차 공식, 143,750은 CPI×SPI 공식, 80,000은 BAC×CPI 로 방향이 반대."
  ],
  "answer": "② CPI 0.8, EAC $125,000",
  "traps": [
   "문제의 가정 문장(계속·일회성·둘 다·추정 결함)을 먼저 찾는다",
   "CPI가 1보다 작으면 EAC는 반드시 BAC보다 커야 한다 — 작으면 오답"
  ]
 },
 {
  "s": "s8",
  "d": 3,
  "title": "네트워크 — 총여유와 자유여유 구분",
  "problem": "A(3일) → B(4일)·C(2일), B → D(5일), C → E(3일), D·E → F(2일). 활동 C에 대한 설명으로 옳은 것은?\n① 주경로 위 활동이다\n② 총여유 4일, 자유여유 4일\n③ 총여유 4일, 자유여유 0일\n④ 총여유 0일, 자유여유 0일",
  "steps": [
   "경로: A–B–D–F 14일, A–C–E–F 10일 → 주경로 A–B–D–F.",
   "C: ES 3, EF 5 / 후진: F LS 12 → E LF 12, LS 9 → C LF 9, LS 7 → TF = 7 − 3 = 4.",
   "FF = 후속 E의 ES 5 − C의 EF 5 = 0. 여유 4일은 C–E 경로가 공유하며 E에 FF 4일로 남는다."
  ],
  "answer": "③ 총여유 4일, 자유여유 0일",
  "traps": [
   "비주경로 활동이라고 FF = TF 라고 단정하는 실수",
   "1 시작 관례로 풀어도 TF·FF 값은 같다"
  ]
 },
 {
  "s": "s8",
  "d": 2,
  "title": "의사결정나무 — 투자비 차감",
  "problem": "Build: 투자 $100,000, 수요 高(60%) $300,000 / 低(40%) $120,000. Buy: 투자 $50,000, 高(60%) $200,000 / 低(40%) $100,000. 올바른 결정은?\n① Build, $228,000\n② Buy, $160,000\n③ Build, $128,000\n④ Buy, $110,000",
  "steps": [
   "Build 기대 수익 = 0.6×300,000 + 0.4×120,000 = 228,000 → 투자 차감 128,000.",
   "Buy 기대 수익 = 0.6×200,000 + 0.4×100,000 = 160,000 → 투자 차감 110,000.",
   "가치 최대 → Build(128,000)."
  ],
  "answer": "③ Build, $128,000",
  "traps": [
   "투자비를 빼지 않은 228,000·160,000 이 보기에 그대로 있다",
   "이 예제는 결론이 같지만, 투자비 차감 여부로 결론이 뒤집히는 문제가 출제된다"
  ]
 },
 {
  "s": "s8",
  "d": 3,
  "title": "FPIF — PTA와 지불액",
  "problem": "FPIF: 목표원가 $100,000, 목표수수료 $10,000, 상한가 $120,000, 분담 80/20(구매자/판매자). 실제원가가 $115,000 일 때 구매자 지불액은?\n① $122,000\n② $120,000\n③ $125,000\n④ $118,000",
  "steps": [
   "PTA = (120,000 − 110,000)/0.8 + 100,000 = 112,500 → 실제원가가 PTA를 넘었다.",
   "공식상: 초과 15,000 × 판매자 20% = 3,000 감액 → 수수료 7,000 → 122,000.",
   "122,000 > 상한가 120,000 이므로 구매자는 상한가 $120,000만 지불한다(PTA 초과분은 판매자 전액 부담)."
  ],
  "answer": "② $120,000",
  "traps": [
   "상한가 cap 을 잊고 122,000 을 고르는 실수",
   "PTA 분모를 판매자 분담률(0.2)로 쓰면 150,000 이 나온다"
  ]
 }
];
