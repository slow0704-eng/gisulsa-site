/* ============================================================
   ITIL Foundation — 학습·퀴즈 데이터
   소스: PeopleCert ITIL 4 Foundation 공식 실러버스 · ITIL Foundation (Version 5) 공개 정보
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "ITIL Foundation",
 "brand": "ITIL",
 "tag": "ITIL 4 Foundation · Version 5 대비",
 "storeKey": "itil",
 "topicUnit": "단원",
 "title": "ITIL Foundation — 암기·퀴즈 학습",
 "h1": "ITIL Foundation",
 "unit": "영역",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 65,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "ITIL 4 Foundation (PeopleCert) — Version 5 병행 시행 중",
 "host": "PeopleCert (Axelos)",
 "type": "객관식 40문항 (standard · missing word · list · negative)",
 "time": "60분 (비원어민 75분 — ITIL 4 기준)",
 "pass": "26/40 (65%) · 오픈북 아님",
 "book": "ITIL 4 Foundation 공식 실러버스 (PeopleCert)",
 "slogan": "ITIL Foundation = 핵심 개념(가치·유틸리티·워런티) + 7 지침 원칙 + 4차원·SVS·가치 사슬 + 관행 상세 7개(42.5%) + 관행 목적 8개",
 "paperSpec": [
  {
   "s": "s1",
   "n": 10
  },
  {
   "s": "s2",
   "n": 7
  },
  {
   "s": "s3",
   "n": 17
  },
  {
   "s": "s4",
   "n": 6
  }
 ],
 "footer": [
  "ITIL Foundation / 주관 <b>PeopleCert<\/b> · 40문항 60분 · <b>26/40(65%) 합격<\/b> · 클로즈드북 · 온라인 감독 · <b>한국어 시험 없음<\/b>(ITIL 4 는 12개 언어, 비원어민 75분)",
  "⚠ 2026년 현재 <b>ITIL 4 Foundation 과 ITIL Foundation (Version 5)<\/b> 두 시험이 병행됩니다. PeopleCert 는 ITIL 4 모듈을 <b>2027-12-31<\/b>에 종료할 계획입니다. 이 사이트는 공식 실러버스가 확인된 <b>ITIL 4<\/b> 를 주 트랙으로 하고, Version 5 차이는 별도 영역에 정리했습니다(비공식 출처 표기).",
  "모의고사는 ITIL 4 배점(관행 상세 7개 17문항 등)을 따른 40문항입니다. 용어는 영어 원어를 병기했고 일부 문항은 실제 시험처럼 영어로 출제했습니다.",
  "데이터 소스: <code>02_타자격증_학습자료/ITIL_Foundation<\/code> · ⚠ 문항은 실러버스로 새로 만든 연습 문제이며 실제 기출이 아닙니다. 정의 문구는 공식 출판물로 확인하세요."
 ],
 "info": [
  {
   "title": "ITIL 4 Foundation 배점",
   "type": "table",
   "head": [
    "범위",
    "배점(40)"
   ],
   "rows": [
    [
     "관행 상세 7개 (CI·변경·인시던트·문제·서비스요청·서비스데스크·SLM)",
     "17"
    ],
    [
     "그 외 학습 목표(개념·원칙·4차원·SVS·가치사슬·관행 목적·정의)",
     "23"
    ],
    [
     "블룸 레벨",
     "BL1 기억 9 · BL2 이해 31"
    ]
   ]
  },
  {
   "title": "ITIL 4 vs Version 5",
   "type": "table",
   "head": [
    "항목",
    "ITIL 4",
    "Version 5"
   ],
   "rows": [
    [
     "상태",
     "2027-12-31 종료 예정",
     "2026 출시"
    ],
    [
     "언어",
     "12개",
     "9개"
    ],
    [
     "관행 상세 문항",
     "있음(42.5%)",
     "축소 — 정의만(비공식 출처)"
    ],
    [
     "전환",
     "—",
     "Bridge 과정(ITIL 4 보유자)"
    ]
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "핵심 개념·지침 원칙",
  "short": "개념·원칙",
  "out": 0,
  "color": "#0ea5e9",
  "desc": "서비스·가치 공동창출·산출물vs성과·유틸리티vs워런티·고객/사용자/스폰서 · 7 지침 원칙 ★최빈출★ (LO1 5점 + LO2 6점)"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "4차원·SVS·가치 사슬",
  "short": "SVS·가치사슬",
  "out": 0,
  "color": "#8b5cf6",
  "desc": "4차원+PESTLE / SVS 입력(기회·수요)→출력(가치) 5구성요소 / 가치 사슬 6활동 목적 ★최빈출★"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "관행 상세 7개",
  "short": "관행 상세",
  "out": 0,
  "color": "#ef4444",
  "desc": "지속적 개선(7단계 모델)·변경 실행(표준/일반/긴급)·인시던트(스워밍)·문제(식별·통제·오류 통제)·서비스 요청·서비스 데스크·SLM(SLA) ★LO7 17점 최대 배점★"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "관행 목적·정의·함정",
  "short": "목적·함정",
  "out": 0,
  "color": "#f59e0b",
  "desc": "목적만 외우는 관행 8개 · 필수 용어 7개(LO6, 7점) · 혼동쌍(인시던트/문제·변경/릴리스/배포) ★최빈출★ · 문항 4유형 전략"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "ITIL Version 5 차이",
  "short": "v5 차이",
  "out": 0,
  "color": "#10b981",
  "desc": "ITIL 4 일몰(2027-12-31 예정)·Bridge / 수명주기 8활동 / ITIL 가치 시스템·EDM 거버넌스 / 가치흐름·AI·DevOps ★V5 범주 40%=가치 시스템★"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "서비스 기본",
  "front": "Service",
  "key": "가치 공동창출을 가능하게 하는 수단",
  "back": "고객이 ★특정 비용·위험을 직접 관리하지 않고도★ 원하는 ★성과★를 얻게 하여 가치 공동창출을 가능하게 하는 ★수단(means)★",
  "tip": "서비스=수단 / 서비스 관리=역량 — 바꿔치기 주의"
 },
 {
  "s": "s1",
  "g": "서비스 기본",
  "front": "Service management",
  "key": "전문화된 조직 역량",
  "back": "서비스 형태로 고객에게 가치를 가능하게 하는 ★전문화된 조직 역량(specialized organizational capabilities)★의 집합",
  "tip": "정의에 'capabilities'가 보이면 서비스 관리"
 },
 {
  "s": "s1",
  "g": "서비스 기본",
  "front": "Organization",
  "key": "개인 또는 집단",
  "back": "목표 달성을 위해 자체 기능·책임·권한·관계를 가진 ★개인 또는 집단★",
  "tip": "1인도 조직이 될 수 있다"
 },
 {
  "s": "s1",
  "g": "서비스 기본",
  "front": "Product",
  "key": "조직 자원의 구성",
  "back": "소비자에게 가치를 제공하도록 설계된 ★조직 자원의 구성(configuration)★",
  "tip": "제품 → 오퍼링으로 포장 → 서비스 관계"
 },
 {
  "s": "s1",
  "g": "가치 공동창출",
  "front": "Value",
  "key": "인지된 편익·유용성·중요성",
  "back": "어떤 것에 대해 ★인지된(perceived)★ 편익·유용성·중요성 — ★주관적★",
  "tip": "같은 서비스도 이해관계자별 가치가 다르다"
 },
 {
  "s": "s1",
  "g": "가치 공동창출",
  "front": "Value co-creation",
  "key": "제공자+소비자 공동",
  "back": "가치는 제공자와 소비자가 ★능동적으로 협업★해 함께 만든다 (ITIL 4 핵심 사상)",
  "tip": "'제공자가 가치를 전달한다'는 구 관점"
 },
 {
  "s": "s1",
  "g": "가치 공동창출",
  "front": "Output",
  "key": "활동의 결과물",
  "back": "활동의 ★유형·무형 결과물(deliverable)★",
  "tip": "보고서·영상·수료증 = Output"
 },
 {
  "s": "s1",
  "g": "가치 공동창출",
  "front": "Outcome",
  "key": "이해관계자의 결과",
  "back": "하나 이상의 ★산출물로 가능해지는★ 이해관계자의 결과",
  "tip": "역량 향상·처리시간 단축 = Outcome"
 },
 {
  "s": "s1",
  "g": "가치 공동창출",
  "front": "Cost",
  "key": "지출된 금액",
  "back": "특정 활동·자원에 지출된 금액. 서비스로 ★제거되는 비용★과 ★부과되는 비용★으로 나눠 봄",
  "tip": "부과 비용 예: 요금·교육·네트워크 이용"
 },
 {
  "s": "s1",
  "g": "가치 공동창출",
  "front": "Risk",
  "key": "가능한 사건 / 결과의 불확실성",
  "back": "피해·손실을 일으키거나 목표 달성을 어렵게 할 수 있는 ★가능한 사건★. ★결과의 불확실성★(긍정·부정)으로도 정의",
  "tip": "소비자도 요구 정의 참여·CSF 전달로 위험 감소에 기여"
 },
 {
  "s": "s1",
  "g": "유틸리티·워런티",
  "front": "Utility",
  "key": "기능성 · fit for purpose",
  "back": "특정 요구를 충족하기 위해 제공하는 ★기능성★ — ★무엇을 하는가★, 목적 적합성",
  "tip": "성과 지원 또는 제약 제거"
 },
 {
  "s": "s1",
  "g": "유틸리티·워런티",
  "front": "Warranty",
  "key": "보증 · fit for use",
  "back": "합의된 요구사항을 충족할 것이라는 ★보증★ — ★얼마나 잘 수행하는가★, 사용 적합성",
  "tip": "가용성·용량·보안·연속성"
 },
 {
  "s": "s1",
  "g": "서비스 관계",
  "front": "Customer",
  "key": "요구 정의 + 성과 책임",
  "back": "서비스 ★요구사항을 정의★하고 ★소비 성과에 책임★지는 사람",
  "tip": "고객·사용자·스폰서는 한 사람이 겸할 수 있다"
 },
 {
  "s": "s1",
  "g": "서비스 관계",
  "front": "User",
  "key": "서비스를 사용",
  "back": "서비스를 ★사용★하는 사람",
  "tip": "요구 정의·예산과 무관"
 },
 {
  "s": "s1",
  "g": "서비스 관계",
  "front": "Sponsor",
  "key": "예산 승인",
  "back": "서비스 소비를 위한 ★예산을 승인★하는 사람",
  "tip": "Missing word 단골: authorizes budget"
 },
 {
  "s": "s1",
  "g": "서비스 관계",
  "front": "Service offering",
  "key": "공식 기술 · 3구성요소",
  "back": "특정 소비자 집단 요구를 다루도록 설계된 하나 이상의 서비스에 대한 ★공식 기술★ — 재화·자원 접근·서비스 행위",
  "tip": "재화만 소유권 이전"
 },
 {
  "s": "s1",
  "g": "서비스 관계",
  "front": "Service relationship management",
  "key": "공동 활동",
  "back": "제공자와 소비자가 합의·가용 오퍼링을 기반으로 ★지속적 가치 공동창출★을 보장하는 ★공동(joint) 활동★",
  "tip": "제공자 단독 활동 아님"
 },
 {
  "s": "s1",
  "g": "서비스 관계",
  "front": "Service provision vs consumption",
  "key": "제공 활동 / 소비 활동",
  "back": "제공: 제공자 자원 관리·접근 보장·서비스 행위 이행·재화 공급 / 소비: 소비자 자원 관리·서비스 행위 요청·재화 수령",
  "tip": "'누구의 자원을 관리하는가'로 구분"
 },
 {
  "s": "s1",
  "g": "지침 원칙",
  "front": "Guiding principle",
  "key": "모든 상황의 권고사항",
  "back": "목표·전략·작업 유형·관리 구조가 바뀌어도 ★모든 상황에서★ 조직을 안내하는 ★권고사항★ — 보편적·지속적",
  "tip": "조합해서 쓰고, 관련성을 검토"
 },
 {
  "s": "s1",
  "g": "지침 원칙",
  "front": "Focus on value",
  "key": "모든 것은 가치로 연결",
  "back": "모든 활동을 자신·고객·이해관계자 가치에 연결. 소비자가 누구인지·소비자 관점 가치·CX/UX",
  "tip": "가치는 소비자가 인지하는 것"
 },
 {
  "s": "s1",
  "g": "지침 원칙",
  "front": "Start where you are",
  "key": "백지 재구축 지양 · 관찰",
  "back": "현재 상태를 ★직접 관찰·측정★해 재사용 가능한 것을 찾는다",
  "tip": "측정은 편향될 수 있음 → 관찰로 보완"
 },
 {
  "s": "s1",
  "g": "지침 원칙",
  "front": "Progress iteratively with feedback",
  "key": "작은 단위 + 전·중·후 피드백",
  "back": "큰 과제도 관리 가능한 단위로 나누고 반복 ★전·중·후★ 피드백으로 조정",
  "tip": "반복해도 전체 그림은 유지"
 },
 {
  "s": "s1",
  "g": "지침 원칙",
  "front": "Collaborate and promote visibility",
  "key": "협업 ≠ 합의",
  "back": "사일로 대신 협업, 적절한 이해관계자 참여, 가시적 데이터 기반 결정, 병목·낭비 식별",
  "tip": "만장일치(consensus) 요구가 아니다"
 },
 {
  "s": "s1",
  "g": "지침 원칙",
  "front": "Think and work holistically",
  "key": "단독 존재 없음 · 4차원",
  "back": "서비스·요소는 단독으로 존재하지 않는다 — 전체 시스템·4차원을 고려",
  "tip": "부분 최적화의 합 ≠ 전체 최적화"
 },
 {
  "s": "s1",
  "g": "지침 원칙",
  "front": "Keep it simple and practical / Optimize and automate",
  "key": "최소 단계 / 최적화 후 자동화",
  "back": "가치 없는 활동 제거, 예외마다 규칙 만들지 않기 / 먼저 최적화 → 그다음 자동화, 사람은 가치를 더하는 곳에만",
  "tip": "Automate first 는 오답"
 },
 {
  "g": "4차원",
  "front": "Four dimensions of service management",
  "key": "조직·사람 / 정보·기술 / 파트너·공급자 / 가치흐름·프로세스",
  "back": "SVS 전체를 ★총체적★으로 다루기 위한 4관점. ① Organizations and people ② Information and technology ③ Partners and suppliers ④ Value streams and processes",
  "tip": "두문자 \"O-I-P-V\" — 4차원은 SVS 구성요소가 아니라 SVS 에 적용되는 관점",
  "s": "s2"
 },
 {
  "g": "4차원",
  "front": "Organizations and people",
  "key": "구조·문화·역할·역량",
  "back": "공식 조직 구조, ★문화★, 역할·책임, 인력·★역량★, 권한 체계, 리더십, 의사소통·협업",
  "tip": "\"문화(culture)\"가 보이면 조직과 사람 차원",
  "s": "s2"
 },
 {
  "g": "4차원",
  "front": "Information and technology",
  "key": "정보·지식 + 기술",
  "back": "서비스 관리에 필요한 ★정보·지식★과 이를 지원하는 ★기술★(워크플로·지식 베이스·분석 도구 등). 정보 보안·규제 준수 포함",
  "tip": "\"IT 기술만\"이 아니다 — 정보 자체도 포함",
  "s": "s2"
 },
 {
  "g": "4차원",
  "front": "Partners and suppliers",
  "key": "타 조직과의 관계·소싱 전략",
  "back": "서비스 설계·개발·배포·제공·지원·개선에 관여하는 ★다른 조직과의 관계★. 계약·협약·파트너십, SIAM",
  "tip": "공급자 전략 요인: 전략적 초점·문화·자원 부족·비용·전문성·외부 제약·수요 패턴",
  "s": "s2"
 },
 {
  "g": "4차원",
  "front": "Value streams and processes",
  "key": "통합·조정된 작업 방식",
  "back": "조직의 각 부분이 ★통합·조정된 방식★으로 일해 가치 창출을 가능하게 하는 방법. 가치 흐름과 프로세스 정의",
  "tip": "\"활동을 어떤 순서로·어떻게 연결하나\" = 이 차원",
  "s": "s2"
 },
 {
  "g": "4차원",
  "front": "PESTLE",
  "key": "정치·경제·사회·기술·법률·환경",
  "back": "4차원에 영향을 주는 ★통제 불가능한 외부 요인★: Political, Economic, Social, Technological, Legal, Environmental",
  "tip": "PESTLE 은 4차원 ★바깥★ — 다섯 번째 차원이 아니다",
  "s": "s2"
 },
 {
  "g": "4차원",
  "front": "Process",
  "key": "입력→출력 변환 활동 집합",
  "back": "★입력을 출력으로 변환★하는 상호 연관·상호작용하는 활동의 집합. 순서·의존성 정의",
  "tip": "가치 흐름(소비자까지의 단계)과 혼동 주의",
  "s": "s2"
 },
 {
  "g": "4차원",
  "front": "SIAM (Service Integration and Management)",
  "key": "다중 공급자 통합 관리",
  "back": "여러 공급자를 통합·조정하는 접근. ★통합자(integrator)★ 역할을 두어 공급자 간 협업을 관리 — 파트너와 공급자 차원",
  "tip": "공급자 관련 → Partners and suppliers",
  "s": "s2"
 },
 {
  "g": "SVS",
  "front": "Service Value System (SVS)",
  "key": "구성요소·활동이 하나의 시스템으로 가치 창출",
  "back": "조직의 모든 구성요소·활동이 ★시스템으로 함께 작동★해 가치 창출을 가능하게 하는 방식. 입력 = 기회·수요 / 출력 = 가치",
  "tip": "목적: 이해관계자와 ★지속적 가치 공동창출★",
  "s": "s2"
 },
 {
  "g": "SVS",
  "front": "SVS components (5)",
  "key": "원칙·거버넌스·가치사슬·관행·지속적개선",
  "back": "① Guiding principles ② Governance ③ Service value chain ④ Practices ⑤ Continual improvement",
  "tip": "기회·수요·가치는 입력·출력, 4차원은 관점 — 구성요소 아님",
  "s": "s2"
 },
 {
  "g": "SVS",
  "front": "Opportunity",
  "key": "가치를 더할 선택지·가능성",
  "back": "이해관계자에게 ★가치를 더하거나 조직을 개선★할 수 있는 선택지·가능성",
  "tip": "수요 없이도 존재 — 자원보다 기회가 많으면 ★우선순위화★",
  "s": "s2"
 },
 {
  "g": "SVS",
  "front": "Demand",
  "key": "내·외부 소비자의 필요·욕구",
  "back": "★내부·외부★ 소비자의 제품·서비스에 대한 필요·욕구",
  "tip": "\"외부 고객만\" 은 함정",
  "s": "s2"
 },
 {
  "g": "SVS",
  "front": "Value",
  "key": "지각된 편익·유용성·중요성",
  "back": "무언가의 ★지각된(perceived) 편익·유용성·중요성★. SVS 의 출력",
  "tip": "가치는 공급자가 아니라 이해관계자가 지각",
  "s": "s2"
 },
 {
  "g": "SVS 구성요소",
  "front": "Governance",
  "key": "지시·통제 수단 / EDM",
  "back": "조직을 ★지시하고 통제★하는 수단. 거버닝 바디가 ★평가(Evaluate)·지시(Direct)·모니터(Monitor)★",
  "tip": "\"Manage(관리)\"는 EDM 이 아니다",
  "s": "s2"
 },
 {
  "g": "SVS 구성요소",
  "front": "Governing body",
  "key": "성과·준수에 책임지는 최고 집단",
  "back": "조직의 성과와 ★준수(conformance)★에 ★책임(accountable)★지는 최고 수준의 개인·집단(예: 이사회)",
  "tip": "가치 사슬 Plan 에 정책·요구·제약을 입력",
  "s": "s2"
 },
 {
  "g": "SVS 구성요소",
  "front": "Practice",
  "key": "업무 수행용 조직 자원 집합",
  "back": "업무 수행·목표 달성을 위해 설계된 ★조직 자원의 집합★. ITIL 4 = ★34개★(일반 관리 14·서비스 관리 17·기술 관리 3)",
  "tip": "관행 ≠ 활동, 1:1 대응 아님",
  "s": "s2"
 },
 {
  "g": "SVS 구성요소",
  "front": "Continual improvement (in SVS)",
  "key": "모든 수준의 반복 활동",
  "back": "이해관계자 기대에 성과가 계속 부합하도록 ★모든 수준★에서 수행되는 반복적 조직 활동",
  "tip": "3곳 등장: SVS 구성요소·Improve 활동·지속적 개선 관행",
  "s": "s2"
 },
 {
  "g": "가치 사슬",
  "front": "Service value chain",
  "key": "운영 모델 · 6활동",
  "back": "제품·서비스의 창출·제공·지속적 개선을 위한 ★운영 모델★. Plan·Improve·Engage·Design and transition·Obtain/build·Deliver and support",
  "tip": "활동은 상호 연결, ★선형 순서 아님★",
  "s": "s2"
 },
 {
  "g": "가치 사슬",
  "front": "Plan",
  "key": "비전·현상태·개선방향의 공유된 이해",
  "back": "4차원·모든 제품/서비스의 ★비전, 현 상태, 개선 방향★에 대한 공유된 이해 보장",
  "tip": "거버닝 바디의 정책·요구·제약이 들어오는 활동",
  "s": "s2"
 },
 {
  "g": "가치 사슬",
  "front": "Improve",
  "key": "모든 활동·4차원의 지속적 개선",
  "back": "모든 가치 사슬 활동과 4차원에 걸쳐 ★제품·서비스·관행의 지속적 개선★ 보장",
  "tip": "출력: 개선 이니셔티브·개선 현황 보고서·가치 사슬 성과 정보",
  "s": "s2"
 },
 {
  "g": "가치 사슬",
  "front": "Engage",
  "key": "요구 이해·투명성·좋은 관계",
  "back": "이해관계자 ★요구에 대한 좋은 이해, 투명성, 지속적 참여, 좋은 관계★ 제공",
  "tip": "외부(고객·사용자·공급자)와의 주 접점",
  "s": "s2"
 },
 {
  "g": "가치 사슬",
  "front": "Design and transition",
  "key": "품질·비용·출시 기간",
  "back": "제품·서비스가 ★품질·비용·출시 기간(time to market)★에 대한 이해관계자 기대를 지속 충족하도록 보장",
  "tip": "\"time to market\" 이 보이면 D&T",
  "s": "s2"
 },
 {
  "g": "가치 사슬",
  "front": "Obtain/build",
  "key": "필요한 때·곳에 구성요소 가용",
  "back": "서비스 구성요소가 ★필요한 때·곳에 가용★하고 ★합의된 사양★을 충족하도록 보장",
  "tip": "구성요소 ≠ 서비스 — 서비스 제공은 D&S",
  "s": "s2"
 },
 {
  "g": "가치 사슬",
  "front": "Deliver and support",
  "key": "합의된 사양·기대대로 제공·지원",
  "back": "서비스가 ★합의된 사양과 이해관계자 기대★에 따라 제공·지원되도록 보장",
  "tip": "출력: 고객·사용자에게 제공되는 서비스",
  "s": "s2"
 },
 {
  "g": "가치 흐름",
  "front": "Value stream",
  "key": "소비자에게 가치를 만들어 전달하는 단계",
  "back": "조직이 소비자에게 제품·서비스를 만들어 전달하기 위해 수행하는 ★일련의 단계★. 활동·관행의 ★시나리오별 조합★",
  "tip": "같은 활동이 한 흐름에 여러 번 나올 수 있다",
  "s": "s2"
 },
 {
  "s": "s3",
  "g": "지속적 개선",
  "front": "Continual improvement — purpose",
  "key": "align · changing business needs · ongoing",
  "back": "조직의 관행·서비스를 ★변화하는 비즈니스 요구에 정렬★ — 제품·서비스·관행 등을 ★지속적으로 개선★해서",
  "tip": "‘비즈니스 요구에 정렬’ 이 키워드. 복구·위험평가 같은 단어가 보이면 다른 관행"
 },
 {
  "s": "s3",
  "g": "지속적 개선",
  "front": "Continual improvement model (7 steps)",
  "key": "비현목계실확추",
  "back": "①What is the vision? ②Where are we now? ③Where do we want to be? ④How do we get there? ⑤Take action ⑥Did we get there? ⑦How do we keep the momentum going?",
  "tip": "2단계=기준선 평가, 3단계=측정 가능한 목표·갭 분석"
 },
 {
  "s": "s3",
  "g": "지속적 개선",
  "front": "Continual improvement register (CIR)",
  "key": "아이디어 추적 DB · 여러 개 가능",
  "back": "개선 아이디어를 식별부터 실행·결과까지 ★추적·관리★하는 데이터베이스/구조화된 문서. 조직에 ★여러 CIR★ 존재 가능",
  "tip": "‘조직당 하나’ 는 오답"
 },
 {
  "s": "s3",
  "g": "지속적 개선",
  "front": "Who is responsible for continual improvement?",
  "key": "everyone",
  "back": "★조직 내 모든 사람의 책임★. 대규모 조직은 전담 팀을 둘 수 있으나 다른 사람의 책임이 없어지지 않음",
  "tip": "리더십은 문화·시간·예산 확보"
 },
 {
  "s": "s3",
  "g": "지속적 개선",
  "front": "Baseline assessment",
  "key": "Where are we now?",
  "back": "지속적 개선 모델 ★2단계★에서 수행하는 현재 상태의 객관적 측정 — 이후 개선 효과 비교의 기준",
  "tip": "목표 설정(3단계)과 바꿔치기 주의"
 },
 {
  "s": "s3",
  "g": "변경 실행",
  "front": "Change enablement — purpose",
  "key": "maximize successful changes · risk · authorize · schedule",
  "back": "★성공적인 변경 수를 최대화★ — 위험 평가, 변경 승인, ★변경 일정 관리★를 통해",
  "tip": "‘변경 수 최소화’·‘모든 변경 CAB 승인’ 은 함정"
 },
 {
  "s": "s3",
  "g": "변경 실행",
  "front": "Change (definition)",
  "key": "추가·수정·제거",
  "back": "서비스에 ★직접 또는 간접 영향★을 줄 수 있는 모든 것의 ★추가·수정·제거★",
  "tip": "‘간접’ 까지 포함"
 },
 {
  "s": "s3",
  "g": "변경 실행",
  "front": "Change authority",
  "key": "authorize · person or group",
  "back": "변경을 ★승인하는 사람 또는 그룹★. 변경 유형·모델별로 적절히 지정, 고속 조직은 ★분산(동료 검토)★",
  "tip": "단일 위원회 고정 아님"
 },
 {
  "s": "s3",
  "g": "변경 실행",
  "front": "Standard change",
  "key": "low-risk · pre-authorized",
  "back": "저위험·잘 이해되고 완전 문서화된 변경. ★사전 승인★되어 추가 승인 없이 실행. 위험평가는 ★절차 작성 시★",
  "tip": "흔히 서비스 요청으로 시작"
 },
 {
  "s": "s3",
  "g": "변경 실행",
  "front": "Normal change",
  "key": "RFC · change model",
  "back": "프로세스에 따라 일정·평가·승인이 필요한 변경. ★변경 요청 생성으로 시작★, ★변경 모델★이 권한자 결정",
  "tip": "저위험 일반 변경은 자동화 파이프라인이 승인하기도"
 },
 {
  "s": "s3",
  "g": "변경 실행",
  "front": "Emergency change",
  "key": "ASAP · expedited",
  "back": "인시던트 해결·보안 패치 등 ★가능한 빨리★ 실행. 평가·승인 신속화, 별도 권한자 가능, ★문서화 사후 가능★, 보통 변경 일정에 미포함",
  "tip": "평가·승인 ‘생략’ 이 아니라 ‘신속화’"
 },
 {
  "s": "s3",
  "g": "변경 실행",
  "front": "Change schedule",
  "key": "plan · communicate · avoid conflicts · assign resources",
  "back": "변경 계획·커뮤니케이션·충돌 회피·자원 배정에 사용. 구현 후 ★인시던트·문제 관리·개선 계획★에 정보 제공",
  "tip": "긴급 변경은 보통 미포함"
 },
 {
  "s": "s3",
  "g": "인시던트 관리",
  "front": "Incident management — purpose",
  "key": "minimize negative impact · restore ASAP",
  "back": "정상 서비스 운영을 ★가능한 빨리 복구★해 인시던트의 ★부정적 영향 최소화★",
  "tip": "근본 원인 제거는 문제 관리"
 },
 {
  "s": "s3",
  "g": "인시던트 관리",
  "front": "Incident (definition)",
  "key": "unplanned interruption · reduction in quality",
  "back": "서비스의 ★계획되지 않은 중단★ 또는 ★품질 저하★",
  "tip": "아직 사용자가 못 느낀 품질 저하도 인시던트"
 },
 {
  "s": "s3",
  "g": "인시던트 관리",
  "front": "Incident prioritization",
  "key": "agreed classification · business impact",
  "back": "★합의된 분류★에 따라 ★비즈니스 영향★ 큰 것부터 해결. 목표 해결 시간은 합의·문서화·전달",
  "tip": "‘접수 순서’ 아님"
 },
 {
  "s": "s3",
  "g": "인시던트 관리",
  "front": "Swarming",
  "key": "다 같이 시작 → 적임자 남기",
  "back": "여러 이해관계자가 ★처음부터 함께★ 작업하다가 누가 가장 적합한지 분명해지면 그 사람이 계속하고 나머지는 빠지는 방식",
  "tip": "단계별 에스컬레이션과 대비"
 },
 {
  "s": "s3",
  "g": "문제 관리",
  "front": "Problem management — purpose",
  "key": "reduce likelihood & impact · causes · workarounds · known errors",
  "back": "인시던트의 ★실제·잠재 원인 식별★, ★임시 해결책·알려진 오류 관리★로 인시던트 ★발생 가능성·영향 감소★",
  "tip": "‘빨리 복구’ 는 인시던트 관리"
 },
 {
  "s": "s3",
  "g": "문제 관리",
  "front": "Problem / Known error",
  "key": "cause · analysed but not resolved",
  "back": "문제 = ★하나 이상 인시던트의 원인 또는 잠재 원인★ / 알려진 오류 = ★분석됐으나 해결되지 않은 문제★",
  "tip": "‘해결된 문제’ 가 아님"
 },
 {
  "s": "s3",
  "g": "문제 관리",
  "front": "Three phases of problem management",
  "key": "식별 → 통제 → 오류 통제",
  "back": "★Problem identification★(찾기) → ★Problem control★(분석·임시해결책·알려진 오류 문서화) → ★Error control★(알려진 오류 관리·영구 해결책)",
  "tip": "영구 해결책 식별 = 오류 통제"
 },
 {
  "s": "s3",
  "g": "문제 관리",
  "front": "Workaround",
  "key": "reduce/eliminate impact · any stage",
  "back": "완전한 해결책이 없을 때 영향을 줄이거나 없애는 방안. ★어느 단계에서나★ 문서화, ★문제 기록★에 기록",
  "tip": "분석 완료까지 기다릴 필요 없음"
 },
 {
  "s": "s3",
  "g": "서비스 요청 관리",
  "front": "Service request management — purpose",
  "key": "predefined · user-initiated · user-friendly",
  "back": "★사전 정의·사용자 시작★ 서비스 요청을 효과적이고 사용자 친화적으로 처리해 ★합의된 서비스 품질 지원★",
  "tip": "요청은 장애가 아니라 정상 서비스의 일부"
 },
 {
  "s": "s3",
  "g": "서비스 요청 관리",
  "front": "Types of service request",
  "key": "행위·정보·자원·접근·피드백",
  "back": "서비스 행위 요청 / 정보 요청 / 자원·서비스 제공 요청 / 접근 요청 / ★피드백·칭찬·불만★",
  "tip": "불만(complaint)도 서비스 요청"
 },
 {
  "s": "s3",
  "g": "서비스 데스크",
  "front": "Service desk — purpose",
  "key": "capture demand · entry point · SPOC",
  "back": "인시던트 해결·서비스 요청 ★수요 포착★ + 모든 사용자에 대한 ★진입점·단일 접점(SPOC)★",
  "tip": "인시던트를 ‘해결’ 하는 관행으로 착각 주의"
 },
 {
  "s": "s3",
  "g": "서비스 데스크",
  "front": "Virtual service desk",
  "key": "multiple locations · sophisticated technology",
  "back": "여러 지리적 위치의 인력이 하나의 서비스 데스크처럼 동작. ★더 정교한 기술★(라우팅·협업) 필요",
  "tip": "follow-the-sun 운영 가능"
 },
 {
  "s": "s3",
  "g": "서비스 수준 관리",
  "front": "Service level management — purpose",
  "key": "clear business-based targets",
  "back": "서비스 수준의 ★명확한 비즈니스 기반 목표★ 설정 + 그 목표 대비 서비스 제공을 ★평가·모니터링·관리★",
  "tip": "‘기술 지표 기반’ 이 아님"
 },
 {
  "s": "s3",
  "g": "서비스 수준 관리",
  "front": "Service level agreement (SLA)",
  "key": "documented agreement · provider-customer",
  "back": "서비스 제공자와 고객 간 ★문서화된 합의★ — 필요한 서비스와 기대 수준 명시. 서비스·성과에 연결, 쉬운 언어",
  "tip": "Watermelon effect: 지표 녹색·고객 불만 빨강"
 },
 {
  "s": "s3",
  "g": "서비스 수준 관리",
  "front": "SLM information sources",
  "key": "engagement · feedback · operational · business metrics",
  "back": "★고객 참여★(개방형 질문) · ★고객 피드백★(설문: 이벤트 기반/주기적) · ★운영 지표★ · ★비즈니스 지표★",
  "tip": "이벤트 기반 설문 = 특정 사례 직후"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "Information security management — purpose",
  "key": "정보 보호 · CIA + 인증·부인방지",
  "back": "조직이 업무 수행에 필요한 ★정보를 보호★. 기밀성·무결성·가용성 및 인증·부인방지 관련 위험을 이해·관리.",
  "tip": "그룹은 일반관리. \"IT 부서만의 일\" 아님"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "Relationship management — purpose",
  "key": "이해관계자 연결 구축·육성 · 전략/전술",
  "back": "조직과 이해관계자 사이의 연결을 ★전략적·전술적 수준★에서 ★구축·육성(establish and nurture)★.",
  "tip": "공급자 계약은 공급자 관리, 서비스 목표는 SLM — 혼동 주의"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "Supplier management — purpose",
  "key": "공급자·성과 관리 · 매끄러운 제공",
  "back": "공급자와 그 ★성과★가 적절히 관리되어 품질 높은 제품·서비스의 ★매끄러운 제공★을 지원. 핵심 공급자와 협력 관계 강화.",
  "tip": "4차원 중 '파트너와 공급자' 차원과 연결"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "IT asset management — purpose",
  "key": "전체 수명주기 · 가치↑ 비용 통제 위험 관리",
  "back": "모든 IT 자산의 ★전체 수명주기★를 계획·관리 → 가치 극대화·비용 통제·위험 관리, 구매·재사용·폐기 의사결정, 규제·계약 준수 지원.",
  "tip": "키워드 lifecycle + financial. CI 관계 정보는 구성 관리"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "Monitoring and event management — purpose",
  "key": "체계적 관찰 · 상태 변화 기록·보고",
  "back": "서비스·구성요소를 ★체계적으로 관찰★하고, ★이벤트로 식별된 선택된 상태 변화를 기록·보고★.",
  "tip": "모니터링은 이벤트 없이도 가능, 이벤트 관리는 모니터링에 의존"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "Release management — purpose",
  "key": "make available for use",
  "back": "새롭거나 변경된 서비스·기능을 ★사용 가능하게★ 한다.",
  "tip": "'move'가 보이면 배포, 'available'이 보이면 릴리스"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "Service configuration management — purpose",
  "key": "CI 구성 정보 · 정확·신뢰 · 필요한 때·곳",
  "back": "서비스와 이를 지원하는 ★CI의 구성에 관한 정확·신뢰할 수 있는 정보★가 ★필요한 때·곳★에 있도록. CI 간 관계 포함.",
  "tip": "CMDB는 도구일 뿐 목적이 아니다"
 },
 {
  "s": "s4",
  "g": "관행 목적",
  "front": "Deployment management — purpose",
  "key": "move to live (및 다른 환경)",
  "back": "새롭거나 변경된 HW·SW·문서·프로세스 등 ★구성요소를 라이브 환경으로 이동★. 테스트·스테이징 환경 배포에도 관여 가능.",
  "tip": "8개 중 유일한 ★기술관리★ 그룹"
 },
 {
  "s": "s4",
  "g": "관행 그룹",
  "front": "Practice groups (ITIL 4)",
  "key": "일반 14 · 서비스 17 · 기술 3",
  "back": "일반관리: 정보보안·관계·공급자(+지속적 개선) / 서비스관리: IT자산·모니터링·릴리스·서비스 구성(+변경·인시던트·문제·요청·데스크·SLM) / 기술관리: ★배포★",
  "tip": "34개 = 14+17+3"
 },
 {
  "s": "s4",
  "g": "필수 정의",
  "front": "IT asset",
  "key": "financially valuable component",
  "back": "IT 제품·서비스 제공에 기여할 수 있는 ★재무적 가치가 있는★ 모든 구성요소.",
  "tip": "'needs to be managed'는 CI 정의"
 },
 {
  "s": "s4",
  "g": "필수 정의",
  "front": "Event",
  "key": "change of state · significance",
  "back": "서비스나 다른 CI의 관리에 ★의미가 있는 모든 상태 변화★.",
  "tip": "모든 이벤트가 인시던트는 아니다 — 대부분 정보성"
 },
 {
  "s": "s4",
  "g": "필수 정의",
  "front": "Configuration item (CI)",
  "key": "needs to be managed to deliver an IT service",
  "back": "IT 서비스를 제공하기 위해 ★관리가 필요한★ 모든 구성요소.",
  "tip": "문서·SLA도 CI가 될 수 있다"
 },
 {
  "s": "s4",
  "g": "필수 정의",
  "front": "Change",
  "key": "addition · modification · removal · direct or indirect",
  "back": "서비스에 ★직접 또는 간접★ 영향을 줄 수 있는 것의 ★추가·수정·제거★.",
  "tip": "'removal'(제거)도 변경이다"
 },
 {
  "s": "s4",
  "g": "필수 정의",
  "front": "Incident",
  "key": "unplanned interruption · reduction in quality",
  "back": "서비스의 ★계획되지 않은 중단★ 또는 서비스 ★품질의 저하★.",
  "tip": "아직 사용자가 못 느낀 품질 저하도 인시던트"
 },
 {
  "s": "s4",
  "g": "필수 정의",
  "front": "Problem",
  "key": "cause or potential cause of one or more incidents",
  "back": "하나 이상의 인시던트의 ★원인 또는 잠재적 원인★.",
  "tip": "인시던트가 아직 없어도 '잠재적 원인'이면 문제"
 },
 {
  "s": "s4",
  "g": "필수 정의",
  "front": "Known error",
  "key": "analysed but not resolved",
  "back": "★분석은 됐지만 아직 해결되지 않은★ 문제.",
  "tip": "임시방편(workaround)이 있어도 여전히 known error"
 },
 {
  "s": "s4",
  "g": "혼동쌍",
  "front": "Incident vs Problem",
  "key": "복구 속도 vs 원인·재발 방지",
  "back": "인시던트 관리 = ★가능한 한 빨리 정상 서비스 복구★ / 문제 관리 = ★원인 규명·재발 방지·영향 감소★(식별→통제→오류 통제).",
  "tip": "\"근본 원인 찾을 때까지 복구 보류\" ✗"
 },
 {
  "s": "s4",
  "g": "혼동쌍",
  "front": "Change vs Release vs Deployment",
  "key": "수정 · 공개 · 이동",
  "back": "변경 = 추가·수정·제거(위험 평가·승인) / 릴리스 = 사용 가능하게 만든 ★버전★ / 배포 = 구성요소를 환경으로 ★이동★.",
  "tip": "배포했지만 릴리스 안 함(기능 토글) 가능"
 },
 {
  "s": "s4",
  "g": "혼동쌍",
  "front": "Event vs Alert vs Incident",
  "key": "상태 변화 · 통지 · 중단",
  "back": "이벤트 = 의미 있는 상태 변화 / 경고 = 조치 필요를 알리는 통지 / 인시던트 = 실제 중단·품질 저하.",
  "tip": "Alert 문구는 [확인필요: 공식 용어집]"
 },
 {
  "s": "s4",
  "g": "혼동쌍",
  "front": "Utility vs Warranty",
  "key": "fit for purpose vs fit for use",
  "back": "유틸리티 = ★기능성(무엇을)★ / 워런티 = ★합의된 요구 충족 보증(얼마나 잘)★: 가용성·용량·보안·연속성. 둘 다 있어야 가치.",
  "tip": "'보안·가용성'이 보이면 워런티"
 },
 {
  "s": "s4",
  "g": "혼동쌍",
  "front": "Output vs Outcome",
  "key": "결과물 vs 이해관계자의 결과",
  "back": "산출물 = 활동이 만든 ★유·무형 결과물★ / 성과 = 하나 이상의 산출물이 가능하게 한 ★이해관계자의 결과★.",
  "tip": "서비스 정의의 'facilitating outcomes' — 성과다"
 },
 {
  "s": "s4",
  "g": "혼동쌍",
  "front": "Customer vs User vs Sponsor",
  "key": "요구 정의 · 사용 · 예산 승인",
  "back": "고객 = 요구사항 정의·성과 책임 / 사용자 = 서비스 사용 / 스폰서 = 서비스 소비 자원(예산) 승인.",
  "tip": "Missing word 단골"
 },
 {
  "s": "s4",
  "g": "시험 전략",
  "front": "4 question types",
  "key": "Standard · Missing word · List · Negative",
  "back": "Standard(단순 질문) · Missing word(빈칸) · List(4진술 중 2개 정답 조합) · Negative(NOT, 예외적). 감점 없음 → 전부 응답.",
  "tip": "List형은 확실한 오답 1개로 조합 소거"
 },
 {
  "s": "s5",
  "g": "일정·자격",
  "front": "ITIL 4 sunset date",
  "key": "2027-12-31 예정",
  "back": "PeopleCert FAQ: 모든 ITIL 4 모듈을 ★2027년 12월 31일★ 일몰할 ★계획★",
  "tip": "'확정'이 아니라 '현재 계획' — 보기에 '이미 종료'가 나오면 오답"
 },
 {
  "s": "s5",
  "g": "일정·자격",
  "front": "ITIL Foundation Bridge (Version 5)",
  "key": "ITIL 4 Foundation 보유자 · 1일",
  "back": "★ITIL 4 Foundation 보유자★가 V5로 업데이트하는 1일 과정 — Bridge도 2027-12-31 일몰 예정",
  "tip": "Foundation 미보유자는 Bridge가 아니라 V5 Foundation 본시험"
 },
 {
  "s": "s5",
  "g": "일정·자격",
  "front": "Existing ITIL certifications after V5",
  "key": "리셋 없음",
  "back": "V5 출시 뒤에도 ★기존 ITIL 자격은 유효★ — 리셋되지 않는다(PeopleCert 공식)",
  "tip": "갱신 주기(3년·60 CPD)는 그대로 적용"
 },
 {
  "s": "s5",
  "g": "일정·자격",
  "front": "ITIL Foundation (V5) exam format",
  "key": "40 · 60분 · 26 · Closed",
  "back": "40문항 객관식 · 60분 · ★26/40(65%)★ 합격 · Closed book — ITIL 4와 동일",
  "tip": "응시 언어는 9개, ★한국어 없음★"
 },
 {
  "s": "s5",
  "g": "실러버스",
  "front": "V5 syllabus — largest category",
  "key": "ITIL 가치 시스템 40%",
  "back": "★ITIL Value System 40%(16문항)★ > 핵심 용어 30% > 4차원·수명주기 각 10% > 가치흐름 5% > AI·타 프레임워크 각 2.5% (비공식 출처)",
  "tip": "비중은 교육기관 자료 기준 — 공식 원문 [확인필요]"
 },
 {
  "s": "s5",
  "g": "수명주기",
  "front": "Product and Service Lifecycle — 8 activities",
  "key": "Dis·Des·Acq·Bui·Tra·Ope·Del·Sup",
  "back": "발견 Discover · 설계 Design · 획득 Acquire · 구축 Build · 전환 Transition · 운영 Operate · 제공 Deliver · 지원 Support",
  "tip": "★반복적·비선형★ — 나열 순서대로만 흐르지 않는다"
 },
 {
  "s": "s5",
  "g": "수명주기",
  "front": "Acquire vs Build",
  "key": "외부 조달 vs 내부 제작",
  "back": "★Acquire(획득)★ = 자원·구성요소를 외부에서 확보 / ★Build(구축)★ = 내부에서 만들고 통합",
  "tip": "ITIL 4 가치사슬 'Obtain/build' 하나와 대비"
 },
 {
  "s": "s5",
  "g": "수명주기",
  "front": "Operate vs Deliver vs Support",
  "key": "기술 가동 / 가치 제공 / 사용자 지원",
  "back": "Operate = 기술·구성요소를 가동·유지 / Deliver = 소비자에게 서비스를 제공 / Support = 사용자 문의·이슈 처리",
  "tip": "셋을 하나로 합친 'Deliver & support'는 ITIL 4 가치사슬 활동"
 },
 {
  "s": "s5",
  "g": "가치 시스템",
  "front": "ITIL Value System",
  "key": "SVS의 V5 이름",
  "back": "ITIL 4 '서비스 가치 시스템(SVS)'의 V5 명칭 — 지침 원칙·거버넌스·가치사슬·관행·지속적 개선 ★5구성요소★",
  "tip": "구성요소 골격은 같고 이름이 바뀐 것(2차)"
 },
 {
  "s": "s5",
  "g": "가치 시스템",
  "front": "Governance — EDM",
  "key": "평가 · 지시 · 모니터",
  "back": "★Evaluate(평가) · Direct(지시) · Monitor(모니터)★ — 조직을 지시·통제하는 거버넌스 활동",
  "tip": "거버넌스 = 방향·감독 / 관리 = 실행 — 혼동 금지"
 },
 {
  "s": "s5",
  "g": "가치 시스템",
  "front": "Continual improvement model",
  "key": "7단계 유지",
  "back": "비전 → 현재 위치 → 목표 상태 → 경로 계획 → 실행 → 도달 확인 → 추진력 유지",
  "tip": "V5에서도 유지(2차) — 첫 단계는 'What is the vision?'"
 },
 {
  "s": "s5",
  "g": "가치 시스템",
  "front": "SRE (Site Reliability Engineering)",
  "key": "엔지니어링으로 신뢰성",
  "back": "소프트웨어 엔지니어링 기법으로 운영 신뢰성을 관리 — SLO·오류 예산(error budget)",
  "tip": "V5 가치사슬 핵심 정의에 새로 등장(2차)"
 },
 {
  "s": "s5",
  "g": "가치 시스템",
  "front": "Observability",
  "key": "외부 데이터 → 내부 상태 추론",
  "back": "로그·메트릭·트레이스 등 시스템이 내보내는 데이터로 ★내부 상태를 추론할 수 있는 정도★",
  "tip": "모니터링 = 미리 정한 지표 감시 / 관측성 = 예상 못한 질문에도 답할 수 있는 능력"
 },
 {
  "s": "s5",
  "g": "가치 시스템",
  "front": "Practice groups in V5",
  "key": "3개 → 2개",
  "back": "ITIL 4 일반·서비스·기술 관리 3그룹 → V5 ★일반 관리 · 제품과 서비스 관리★ 2그룹, 34개 관행 명칭 유지",
  "tip": "2차 출처 [확인필요]"
 },
 {
  "s": "s5",
  "g": "가치흐름",
  "front": "Core vs Enabling value stream",
  "key": "직접 가치 vs 내부 지원",
  "back": "★핵심(core)★ = 소비자에게 직접 가치 전달 / ★지원(enabling)★ = 핵심 흐름을 가능케 하는 내부 흐름",
  "tip": "채용·도구 도입은 enabling"
 },
 {
  "s": "s5",
  "g": "가치흐름",
  "front": "Value stream mapping steps",
  "key": "식별→As-Is→분석→To-Be→계획",
  "back": "가치흐름 식별 → 현재 상태(As-Is) 매핑 → 분석 → 미래 상태(To-Be) 설계 → 개선 계획",
  "tip": "As-Is 생략 = 'Start where you are' 위반"
 },
 {
  "s": "s5",
  "g": "AI",
  "front": "Agentic AI",
  "key": "목표 → 계획 → 도구 → 자율 실행",
  "back": "목표를 받아 스스로 계획하고 도구를 사용해 ★여러 단계를 자율 수행★하는 AI",
  "tip": "생성형 AI = 콘텐츠 생성 / 에이전틱 AI = 행동 수행"
 },
 {
  "s": "s5",
  "g": "타 프레임워크",
  "front": "ITIL vs DevOps vs PRINCE2",
  "key": "서비스 / 개발·운영 협업 / 프로젝트",
  "back": "ITIL = 제품·서비스 관리 / DevOps = 개발·운영 협업·자동화 문화 / PRINCE2 = 프로젝트 관리 방법론",
  "tip": "서로 대체가 아니라 ★보완★ 관계"
 },
 {
  "s": "s5",
  "g": "용어",
  "front": "New V5 value terms",
  "key": "UX · Sustainability",
  "back": "유틸리티·워런티에 더해 ★사용자 경험(UX)★·★지속가능성(Sustainability)★ 을 핵심 용어로 다룸(2차)",
  "tip": "범주1(용어 30%) 출제 후보"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ 핵심 정의 대조표 — 정의 문구의 키워드로 용어 찾기",
  "type": "table",
  "head": [
   "용어",
   "정의 키워드",
   "자주 바꿔치기되는 짝"
  ],
  "rows": [
   [
    "Service",
    "means · co-creation · without managing costs/risks",
    "Service management(capabilities)"
   ],
   [
    "Service management",
    "specialized organizational capabilities",
    "Service(means)"
   ],
   [
    "Value",
    "perceived benefits, usefulness, importance",
    "Outcome"
   ],
   [
    "Output",
    "tangible/intangible deliverable of an activity",
    "Outcome"
   ],
   [
    "Outcome",
    "result for a stakeholder enabled by outputs",
    "Output"
   ],
   [
    "Utility",
    "functionality · fit for purpose · what it does",
    "Warranty"
   ],
   [
    "Warranty",
    "assurance of agreed requirements · fit for use",
    "Utility"
   ],
   [
    "Customer",
    "defines requirements · responsible for outcomes",
    "Sponsor"
   ],
   [
    "User",
    "uses services",
    "Customer"
   ],
   [
    "Sponsor",
    "authorizes budget",
    "Customer"
   ],
   [
    "Service offering",
    "formal description · goods/access/actions",
    "Service relationship"
   ],
   [
    "Service relationship mgmt",
    "joint activities · continual value co-creation",
    "Service provision"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 7 지침 원칙 — 핵심 메시지와 함정",
  "type": "table",
  "head": [
   "원칙",
   "핵심 메시지",
   "시험 함정(오답 문장)"
  ],
  "rows": [
   [
    "Focus on value",
    "모든 활동을 이해관계자 가치에 연결, 소비자 관점·CX/UX",
    "가치는 제공자 내부 효율로 정의한다"
   ],
   [
    "Start where you are",
    "현재 상태 직접 관찰·재사용",
    "기존 것을 폐기하고 백지에서 설계한다"
   ],
   [
    "Progress iteratively with feedback",
    "작은 단위·전중후 피드백",
    "모든 작업 완료 후 한 번에 피드백"
   ],
   [
    "Collaborate and promote visibility",
    "협업·이해관계자 참여·가시적 데이터",
    "협업은 만장일치 합의를 뜻한다"
   ],
   [
    "Think and work holistically",
    "전체 시스템·4차원 고려",
    "각 팀이 자기 부분만 최적화하면 된다"
   ],
   [
    "Keep it simple and practical",
    "최소 단계·가치 없는 활동 제거",
    "모든 예외를 처리하는 규칙을 설계한다"
   ],
   [
    "Optimize and automate",
    "최적화 후 자동화·사람은 가치 있는 곳에",
    "먼저 자동화하고 나중에 최적화한다"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 서비스 오퍼링·서비스 관계 구성요소 한눈 비교",
  "type": "table",
  "head": [
   "묶음",
   "요소",
   "구분 포인트"
  ],
  "rows": [
   [
    "오퍼링",
    "재화 Goods",
    "소유권 이전, 이후 책임은 소비자"
   ],
   [
    "오퍼링",
    "자원 접근 Access to resources",
    "소유권 이전 없음, 합의 조건 내 접근"
   ],
   [
    "오퍼링",
    "서비스 행위 Service actions",
    "제공자가 소비자 요구에 맞춰 수행"
   ],
   [
    "서비스 관계",
    "서비스 제공 Provision",
    "제공자 자원 관리·접근 보장·재화 공급"
   ],
   [
    "서비스 관계",
    "서비스 소비 Consumption",
    "소비자 자원 관리·서비스 행위 요청·재화 수령"
   ],
   [
    "서비스 관계",
    "서비스 관계 관리 SRM",
    "제공자·소비자 공동 활동"
   ],
   [
    "소비자 역할",
    "고객 / 사용자 / 스폰서",
    "요구·성과 / 사용 / 예산 승인"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 서비스 관리 4차원 + PESTLE 한눈 비교",
  "type": "table",
  "head": [
   "차원 (English)",
   "다루는 범위",
   "시험 판별 키워드"
  ],
  "rows": [
   [
    "조직과 사람 (Organizations and people)",
    "구조·★문화★·역할·역량·리더십·소통",
    "culture, competencies, roles"
   ],
   [
    "정보와 기술 (Information and technology)",
    "★정보·지식★ + 지원 기술, 보안·규제",
    "knowledge base, tools, security"
   ],
   [
    "파트너와 공급자 (Partners and suppliers)",
    "★타 조직과의 관계★, 계약·소싱 전략",
    "contracts, sourcing, SIAM"
   ],
   [
    "가치 흐름과 프로세스 (Value streams and processes)",
    "★통합·조정된 작업 방식★, 활동 순서",
    "workflow, steps, inputs→outputs"
   ],
   [
    "외부 요인 PESTLE",
    "4차원 ★밖★의 통제 불가 요인",
    "Political·Economic·Social·Technological·Legal·Environmental"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ SVS 입력·구성요소·출력 대조표",
  "type": "table",
  "head": [
   "위치",
   "요소",
   "핵심 의미"
  ],
  "rows": [
   [
    "입력",
    "기회(Opportunity)",
    "가치를 더하거나 개선할 선택지·가능성"
   ],
   [
    "입력",
    "수요(Demand)",
    "내·외부 소비자의 필요·욕구"
   ],
   [
    "구성요소 ①",
    "지침 원칙",
    "모든 상황에서 조직을 안내하는 권고(7개)"
   ],
   [
    "구성요소 ②",
    "거버넌스",
    "지시·통제 수단 — 거버닝 바디의 EDM"
   ],
   [
    "구성요소 ③",
    "서비스 가치 사슬",
    "6활동 운영 모델"
   ],
   [
    "구성요소 ④",
    "관행",
    "조직 자원의 집합 — 34개(14/17/3)"
   ],
   [
    "구성요소 ⑤",
    "지속적 개선",
    "모든 수준의 반복적 개선 활동"
   ],
   [
    "출력",
    "가치(Value)",
    "지각된 편익·유용성·중요성"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 가치 사슬 6활동 — 목적·대표 입력·대표 출력",
  "type": "table",
  "head": [
   "활동",
   "목적 핵심어",
   "대표 입력",
   "대표 출력"
  ],
  "rows": [
   [
    "Plan",
    "비전·현 상태·개선 방향의 ★공유된 이해★",
    "거버닝 바디 정책·제약, 통합된 수요·기회",
    "계획, 포트폴리오 결정, 아키텍처·정책"
   ],
   [
    "Improve",
    "제품·서비스·관행의 ★지속적 개선★",
    "성과 정보, 이해관계자 피드백",
    "개선 이니셔티브, 개선 현황 보고서"
   ],
   [
    "Engage",
    "요구 이해·★투명성·좋은 관계★",
    "고객 수요·요구, 사용자 인시던트·요청",
    "통합된 수요·기회, 요구사항, 사용자 지원 작업"
   ],
   [
    "Design and transition",
    "★품질·비용·출시 기간★ 기대 충족",
    "포트폴리오 결정, 제품·서비스 요구사항",
    "요구사항·사양, 신규·변경 제품·서비스"
   ],
   [
    "Obtain/build",
    "구성요소를 ★필요한 때·곳에★ 가용",
    "요구사항·사양, 공급자 재화·서비스, 변경 요청",
    "서비스 구성요소"
   ],
   [
    "Deliver and support",
    "★합의된 사양·기대★대로 제공·지원",
    "신규·변경 서비스, 구성요소, 사용자 지원 작업",
    "제공되는 서비스, 성과 정보, 변경 요청"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 7개 관행 목적 키워드 대조표 (6.1 i~o · BL1)",
  "type": "table",
  "head": [
   "관행 (English)",
   "목적 핵심 키워드",
   "바꿔치기 함정"
  ],
  "rows": [
   [
    "지속적 개선 (Continual improvement)",
    "★변화하는 비즈니스 요구에 정렬★ · 지속적 개선",
    "‘최대한 빨리 복구’ 를 붙이는 보기"
   ],
   [
    "변경 실행 (Change enablement)",
    "★성공적 변경 최대화★ · 위험 평가 · 승인 · 변경 일정",
    "‘변경 최소화’ / ‘모든 변경 CAB 승인’"
   ],
   [
    "인시던트 관리 (Incident management)",
    "★부정적 영향 최소화★ · ★가능한 빨리 정상 복구★",
    "‘원인 식별·알려진 오류 관리’(=문제 관리)"
   ],
   [
    "문제 관리 (Problem management)",
    "★발생 가능성·영향 감소★ · 원인 식별 · 임시해결책·알려진 오류",
    "‘서비스 즉시 복구’(=인시던트)"
   ],
   [
    "서비스 요청 관리 (Service request management)",
    "★사전 정의·사용자 시작★ 요청 · 사용자 친화적 · 합의된 품질 지원",
    "‘모든 사용자 요구의 단일 접점’(=서비스 데스크)"
   ],
   [
    "서비스 데스크 (Service desk)",
    "★수요 포착★ · ★진입점·단일 접점(SPOC)★",
    "‘요청을 처리해 품질 지원’(=SRM)"
   ],
   [
    "서비스 수준 관리 (Service level management)",
    "★명확한 비즈니스 기반 목표★ · 평가·모니터링·관리",
    "‘고객과의 관계 수립’(=관계 관리)"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 변경 3유형 한눈 비교",
  "type": "table",
  "head": [
   "구분",
   "표준(Standard)",
   "일반(Normal)",
   "긴급(Emergency)"
  ],
  "rows": [
   [
    "위험·성격",
    "저위험·잘 이해됨·완전 문서화",
    "평가 필요한 대부분의 변경",
    "즉시 실행 필요(인시던트·보안 패치)"
   ],
   [
    "승인",
    "★사전 승인★ — 실행 시 추가 승인 없음",
    "★변경 모델★이 정한 권한자",
    "★신속화된★ 평가·승인, 별도 권한자 가능"
   ],
   [
    "위험 평가 시점",
    "★절차를 만들 때★ 1회(절차 변경 시 재평가)",
    "변경마다",
    "가능한 범위에서 신속히"
   ],
   [
    "시작 계기",
    "흔히 ★서비스 요청★",
    "★변경 요청(RFC)★ 생성",
    "인시던트·보안 위협"
   ],
   [
    "변경 일정",
    "포함 가능",
    "포함",
    "★보통 미포함★"
   ],
   [
    "문서화",
    "사전 문서화된 절차",
    "프로세스대로",
    "★사후로 미룰 수 있음★"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 인시던트 vs 문제 vs 서비스 요청 vs 변경",
  "type": "table",
  "head": [
   "구분",
   "인시던트",
   "문제",
   "서비스 요청",
   "변경"
  ],
  "rows": [
   [
    "정의",
    "계획되지 않은 중단·품질 저하",
    "인시던트의 (잠재)원인",
    "사전 정의된 정상 서비스 요청",
    "영향 줄 수 있는 것의 추가·수정·제거"
   ],
   [
    "초점",
    "★복구 속도★",
    "★원인·재발 방지★",
    "★효과적·사용자 친화적 처리★",
    "★위험 평가·승인·일정★"
   ],
   [
    "예",
    "메일 서버 다운",
    "반복되는 메모리 누수",
    "비밀번호 재설정·노트북 지급",
    "서버 OS 패치"
   ],
   [
    "대표 용어",
    "우선순위·스워밍·주요 인시던트",
    "알려진 오류·임시 해결책",
    "워크플로·표준화·자동화",
    "변경 권한자·변경 일정·3유형"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 지속적 개선 모델 7단계 — 질문·활동 매칭",
  "type": "table",
  "head": [
   "단계",
   "질문",
   "대표 활동·산출"
  ],
  "rows": [
   [
    "1",
    "What is the vision?",
    "비전·사명·목표 이해, 개선 범위·방향"
   ],
   [
    "2",
    "Where are we now?",
    "★기준선 평가★(baseline assessment)"
   ],
   [
    "3",
    "Where do we want to be?",
    "★측정 가능한 목표★·CSF·KPI·갭 분석"
   ],
   [
    "4",
    "How do we get there?",
    "개선 계획(반복 접근)"
   ],
   [
    "5",
    "Take action",
    "계획 실행·위험 관리·측정"
   ],
   [
    "6",
    "Did we get there?",
    "목표·★가치 실현★ 확인"
   ],
   [
    "7",
    "How do we keep the momentum going?",
    "성공 공유·학습 정착·다음 개선"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 목적만 외우는 관행 8개 — 핵심 동사 대조표",
  "type": "table",
  "head": [
   "관행",
   "그룹",
   "목적 핵심(영문 키워드)",
   "자주 섞이는 오답"
  ],
  "rows": [
   [
    "정보보안 관리",
    "일반",
    "protect information · CIA·인증·부인방지",
    "관계 관리·IT 자산 관리의 문구"
   ],
   [
    "관계 관리",
    "일반",
    "establish and nurture links · strategic/tactical",
    "공급자 관리(공급자 성과)"
   ],
   [
    "공급자 관리",
    "일반",
    "suppliers and their performance · seamless provision",
    "관계 관리(이해관계자 전반)"
   ],
   [
    "IT 자산 관리",
    "서비스",
    "full lifecycle · maximize value · control costs · manage risks",
    "서비스 구성 관리(CI 정보)"
   ],
   [
    "모니터링 및 이벤트 관리",
    "서비스",
    "systematically observe · record and report changes of state",
    "인시던트 관리(복구)"
   ],
   [
    "릴리스 관리",
    "서비스",
    "make new/changed services and features available for use",
    "배포 관리(move)"
   ],
   [
    "서비스 구성 관리",
    "서비스",
    "accurate and reliable information about configuration · when and where needed",
    "IT 자산 관리(재무)"
   ],
   [
    "배포 관리",
    "★기술★",
    "move new/changed components to live environments",
    "릴리스 관리(available)"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 필수 정의 7개 — 정의 키워드 · 바꿔치기 오답",
  "type": "table",
  "head": [
   "용어",
   "정답 키워드",
   "바꿔치기 오답(실제 주인)"
  ],
  "rows": [
   [
    "IT asset",
    "financially valuable component",
    "needs to be managed (→ CI)"
   ],
   [
    "Event",
    "change of state · significance",
    "unplanned interruption (→ Incident)"
   ],
   [
    "Configuration item",
    "needs to be managed to deliver an IT service",
    "financially valuable (→ IT asset)"
   ],
   [
    "Change",
    "addition, modification or removal · direct or indirect effect",
    "make available for use (→ Release)"
   ],
   [
    "Incident",
    "unplanned interruption · reduction in quality",
    "cause of incidents (→ Problem)"
   ],
   [
    "Problem",
    "cause or potential cause of one or more incidents",
    "analysed but not resolved (→ Known error)"
   ],
   [
    "Known error",
    "problem analysed but not resolved",
    "reduces impact without resolution (→ Workaround)"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 헷갈리는 쌍 총정리",
  "type": "table",
  "head": [
   "쌍",
   "구분 포인트",
   "함정 문장"
  ],
  "rows": [
   [
    "Incident / Problem",
    "복구 속도 / 원인·재발 방지",
    "\"원인을 찾은 뒤 서비스를 복구한다\""
   ],
   [
    "Problem / Known error",
    "원인 / 분석 완료·미해결 문제",
    "\"임시방편이 있으면 문제는 해결된 것\""
   ],
   [
    "Change / Release / Deployment",
    "수정 / 공개(버전) / 이동",
    "\"배포하면 곧 릴리스된다\""
   ],
   [
    "Event / Alert / Incident",
    "상태 변화 / 통지 / 중단·저하",
    "\"모든 이벤트는 인시던트로 기록한다\""
   ],
   [
    "Service request / Incident",
    "정상 서비스의 일부 / 계획 외 중단",
    "\"비밀번호 재설정은 인시던트\""
   ],
   [
    "Utility / Warranty",
    "무엇을(fit for purpose) / 얼마나 잘(fit for use)",
    "\"보안·가용성은 유틸리티\""
   ],
   [
    "Output / Outcome",
    "결과물 / 이해관계자의 결과",
    "\"서비스는 산출물을 촉진한다\""
   ],
   [
    "Customer / User / Sponsor",
    "요구 정의 / 사용 / 예산 승인",
    "\"사용자가 예산을 승인한다\""
   ],
   [
    "SLM / SLA",
    "관행 / 문서화된 합의",
    "\"SLA 지표가 녹색이면 고객 만족\"(워터멜론)"
   ],
   [
    "IT asset / CI",
    "재무 가치 / 관리 필요",
    "\"모든 CI는 IT 자산이다\""
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ ITIL 4 vs Version 5 — 바뀐 것 / 그대로인 것",
  "type": "table",
  "head": [
   "항목",
   "ITIL 4",
   "Version 5",
   "판정"
  ],
  "rows": [
   [
    "시스템 이름",
    "서비스 가치 시스템(SVS)",
    "ITIL 가치 시스템",
    "변경(2차)"
   ],
   [
    "관리 대상",
    "서비스 관리",
    "제품 및 서비스 관리",
    "변경(2차)"
   ],
   [
    "생애 활동",
    "가치사슬 6활동",
    "수명주기 8활동 추가",
    "변경(2차)"
   ],
   [
    "관행 상세 출제",
    "7개 상세 17점",
    "개별 상세 빠짐",
    "변경 [확인필요]"
   ],
   [
    "관행 그룹",
    "3그룹",
    "2그룹",
    "변경 [확인필요]"
   ],
   [
    "7개 지침 원칙",
    "7개",
    "명칭 동일",
    "유지"
   ],
   [
    "4차원·PESTLE",
    "4개",
    "명칭 동일",
    "유지"
   ],
   [
    "지속적 개선 모델",
    "7단계",
    "7단계",
    "유지(2차)"
   ],
   [
    "시험 형식",
    "40·60분·65%",
    "40·60분·65%",
    "유지"
   ],
   [
    "응시 언어",
    "12개(한국어 X)",
    "9개(한국어 X)",
    "변경(공식)"
   ],
   [
    "일몰",
    "2027-12-31 예정",
    "—",
    "공식"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ V5 Foundation 범주 비중 + 수명주기 8활동 (비공식 출처)",
  "type": "table",
  "head": [
   "V5 범주",
   "비중(문항)",
   "외울 핵심"
  ],
  "rows": [
   [
    "1 핵심 용어·정의",
    "30% (12)",
    "재화·디지털 제품·UX·지속가능성·서비스 관계·SLA"
   ],
   [
    "2 4차원",
    "10% (4)",
    "조직과 사람·정보와 기술·파트너와 공급자·가치흐름과 프로세스 + PESTLE"
   ],
   [
    "3 수명주기",
    "10% (4)",
    "Discover·Design·Acquire·Build·Transition·Operate·Deliver·Support"
   ],
   [
    "4 ITIL 가치 시스템",
    "40% (16)",
    "5구성요소·7원칙·EDM·SRE/관측성/CI·CD·CI 모델 7단계"
   ],
   [
    "5 가치흐름",
    "5% (2)",
    "core/enabling · As-Is→To-Be"
   ],
   [
    "6 AI",
    "2.5% (1)",
    "GenAI·Agentic AI·AI 거버넌스·AI Capability Model"
   ],
   [
    "7 타 프레임워크",
    "2.5% (1)",
    "DevOps·PRINCE2(Agile)"
   ],
   [
    "출처",
    "—",
    "교육기관 2차 자료 3곳 일치 — 공식 원문 [확인필요]"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "서비스 제공자가 가치를 만들어 고객에게 전달한다 — ITIL 4에서 가치는 제공자와 소비자가 공동창출(co-create)한다"
 },
 {
  "s": "s1",
  "t": "서비스는 '전문화된 조직 역량의 집합'이다 — 그것은 서비스 관리의 정의이고, 서비스는 가치 공동창출을 가능하게 하는 '수단'이다"
 },
 {
  "s": "s1",
  "t": "보고서·교육 영상은 성과(Outcome)다 — 활동의 결과물은 산출물(Output), 성과는 이해관계자가 얻는 결과다"
 },
 {
  "s": "s1",
  "t": "유틸리티는 fit for use, 워런티는 fit for purpose 다 — 반대다: 유틸리티=fit for purpose(무엇을), 워런티=fit for use(얼마나 잘)"
 },
 {
  "s": "s1",
  "t": "기능이 충분하면 가용성이 낮아도 가치가 창출된다 — 유틸리티와 워런티가 모두 있어야 가치가 생긴다"
 },
 {
  "s": "s1",
  "t": "고객(Customer)은 예산을 승인하는 사람이다 — 예산 승인은 스폰서, 고객은 요구사항 정의·성과 책임"
 },
 {
  "s": "s1",
  "t": "고객·사용자·스폰서는 반드시 서로 다른 사람이어야 한다 — 한 사람이 여러 역할을 겸할 수 있다"
 },
 {
  "s": "s1",
  "t": "자원 접근(Access to resources)은 소유권이 소비자에게 넘어간다 — 소유권 이전은 재화(Goods)뿐이다"
 },
 {
  "s": "s1",
  "t": "서비스 관계 관리는 제공자가 단독으로 수행한다 — 제공자와 소비자의 공동(joint) 활동이다"
 },
 {
  "s": "s1",
  "t": "위험 관리는 제공자의 몫이고 소비자는 관여하지 않는다 — 소비자도 요구 정의 참여·CSF 전달·자원 접근 보장으로 위험 감소에 기여한다"
 },
 {
  "s": "s1",
  "t": "7 지침 원칙은 번호 순서대로 하나씩 적용한다 — 원칙은 상황에 맞게 여러 개를 함께 고려하며 번호는 우선순위가 아니다"
 },
 {
  "s": "s1",
  "t": "Start where you are 는 측정 데이터만 신뢰하라는 뜻이다 — 측정은 편향될 수 있으므로 직접 관찰로 보완한다"
 },
 {
  "s": "s1",
  "t": "협업과 가시성 증진은 모든 이해관계자의 합의(consensus)를 얻는 것이다 — 협업이 만장일치를 뜻하지는 않는다"
 },
 {
  "s": "s1",
  "t": "Keep it simple: 모든 예외 상황을 처리하는 규칙을 미리 만든다 — 예외마다 규칙을 만들면 복잡해지므로 지양한다"
 },
 {
  "s": "s1",
  "t": "Optimize and automate: 먼저 자동화하고 나중에 최적화한다 — 최적화가 먼저, 자동화는 그다음"
 },
 {
  "s": "s1",
  "t": "Progress iteratively: 반복 단위로 일하면 전체 계획은 필요 없다 — 각 반복은 목표를 갖고 전체 그림(holistic view)을 유지해야 한다"
 },
 {
  "s": "s2",
  "t": "4차원은 서로 독립적으로 관리한다 — 4차원은 경계가 불분명하고 서로 겹치며 상호작용하므로 총체적으로 다뤄야 한다"
 },
 {
  "s": "s2",
  "t": "PESTLE 은 서비스 관리의 다섯 번째 차원이다 — PESTLE 은 4차원 밖에서 영향을 주는 통제 불가능한 외부 요인이다"
 },
 {
  "s": "s2",
  "t": "정보와 기술 차원은 IT 인프라(하드웨어·소프트웨어)만 다룬다 — 서비스 관리에 필요한 정보·지식 자체도 포함한다"
 },
 {
  "s": "s2",
  "t": "조직 문화는 정보와 기술 차원에 속한다 — 문화·역할·역량·리더십은 조직과 사람 차원이다"
 },
 {
  "s": "s2",
  "t": "4차원은 특정 관행 하나에만 적용된다 — 4차원은 SVS 전체(모든 구성요소)에 적용된다"
 },
 {
  "s": "s2",
  "t": "기회·수요·가치는 SVS 구성요소다 — 기회·수요는 SVS 의 입력, 가치는 출력이다. 구성요소는 원칙·거버넌스·가치 사슬·관행·지속적 개선 5개"
 },
 {
  "s": "s2",
  "t": "수요는 외부 고객의 요구만 뜻한다 — 내부·외부 소비자 모두의 필요·욕구다"
 },
 {
  "s": "s2",
  "t": "거버닝 바디의 활동은 계획(Plan)·실행(Do)·점검(Check)이다 — 평가(Evaluate)·지시(Direct)·모니터(Monitor)다"
 },
 {
  "s": "s2",
  "t": "가치 사슬 활동과 관행은 1:1 로 대응한다 — 한 관행이 여러 활동에, 한 활동이 여러 관행에 쓰인다"
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동은 Plan → … → Deliver and support 의 고정된 선형 순서로 수행된다 — 활동은 상호 연결되어 트리거를 주고받으며, 순서는 가치 흐름마다 다르다"
 },
 {
  "s": "s2",
  "t": "Obtain/build 의 목적은 서비스를 사용자에게 제공하는 것이다 — 서비스 구성요소를 필요한 때·곳에 가용하게 하는 것이다(제공은 Deliver and support)"
 },
 {
  "s": "s2",
  "t": "품질·비용·출시 기간(time to market) 기대를 충족하는 것은 Deliver and support 의 목적이다 — Design and transition 의 목적이다"
 },
 {
  "s": "s2",
  "t": "비전·현 상태·개선 방향의 공유된 이해는 Improve 의 목적이다 — Plan 의 목적이다"
 },
 {
  "s": "s2",
  "t": "지속적 개선은 Improve 활동에만 존재한다 — SVS 구성요소·Improve 활동·지속적 개선 관행 세 곳에 등장한다"
 },
 {
  "s": "s2",
  "t": "가치 흐름 하나에는 각 가치 사슬 활동이 한 번씩만 나온다 — 같은 활동(예: Engage)이 한 흐름에 여러 번 등장할 수 있다"
 },
 {
  "s": "s2",
  "t": "가치 흐름과 프로세스는 같은 말이다 — 가치 흐름은 소비자에게 가치를 전달하는 단계 전체, 프로세스는 입력을 출력으로 바꾸는 활동 집합이다"
 },
 {
  "s": "s2",
  "t": "ITIL 4 관행은 일반 관리 17·서비스 관리 14·기술 관리 3 이다 — 일반 관리 14·서비스 관리 17·기술 관리 3 (합 34)"
 },
 {
  "s": "s3",
  "t": "지속적 개선은 전담 개선 팀만의 책임이다 — 조직 내 ★모든 사람의 책임★이며 전담 팀은 이끌고 조정할 뿐이다"
 },
 {
  "s": "s3",
  "t": "조직에는 지속적 개선 등록부(CIR)가 하나만 존재해야 한다 — ★여러 개의 CIR★을 둘 수 있다"
 },
 {
  "s": "s3",
  "t": "지속적 개선 모델 2단계(Where are we now?)에서 측정 가능한 목표를 설정한다 — 2단계는 ★기준선 평가★, 목표 설정은 ★3단계★"
 },
 {
  "s": "s3",
  "t": "지속적 개선 모델의 마지막 단계는 ‘Did we get there?’ 이다 — 마지막(7단계)은 ★How do we keep the momentum going?★"
 },
 {
  "s": "s3",
  "t": "변경 실행의 목적은 변경의 수를 최소화해 위험을 줄이는 것이다 — 목적은 ★성공적인 변경의 수를 최대화★하는 것"
 },
 {
  "s": "s3",
  "t": "표준 변경은 실행할 때마다 위험 평가와 승인을 받는다 — ★사전 승인★됨, 위험 평가는 ★절차를 만들 때★ 수행"
 },
 {
  "s": "s3",
  "t": "긴급 변경은 위급하므로 평가와 승인을 생략한다 — 평가·승인은 ★신속화(expedited)★될 뿐이며, ★문서화를 사후로★ 미룰 수 있다"
 },
 {
  "s": "s3",
  "t": "모든 변경은 변경 자문 위원회(CAB) 하나가 승인해야 한다 — 변경 유형·모델별로 ★적절한 변경 권한자★를 지정하고, 고속 조직은 ★분산 승인(동료 검토)★"
 },
 {
  "s": "s3",
  "t": "변경 일정은 변경 구현이 끝나면 쓸모가 없다 — 구현 후에도 ★인시던트·문제 관리·개선 계획★에 정보를 제공한다"
 },
 {
  "s": "s3",
  "t": "인시던트 관리의 목적은 인시던트의 근본 원인을 제거하는 것이다 — 목적은 ★가능한 빨리 정상 서비스를 복구★해 영향 최소화(원인은 문제 관리)"
 },
 {
  "s": "s3",
  "t": "인시던트는 접수된 순서대로 처리한다 — ★합의된 분류★에 따른 ★비즈니스 영향★ 기준 우선순위"
 },
 {
  "s": "s3",
  "t": "스워밍은 1선→2선→3선으로 차례대로 넘기는 방식이다 — 스워밍은 ★여러 사람이 처음부터 함께★ 일하다 적임자가 남는 방식"
 },
 {
  "s": "s3",
  "t": "알려진 오류(Known error)는 해결이 완료된 문제다 — ★분석은 됐지만 해결되지 않은★ 문제"
 },
 {
  "s": "s3",
  "t": "임시 해결책은 문제 분석이 끝난 뒤에만 문서화할 수 있다 — ★어느 단계에서든★ 문서화 가능"
 },
 {
  "s": "s3",
  "t": "영구 해결책의 식별은 문제 통제(Problem control) 단계의 활동이다 — 영구 해결책 식별은 ★오류 통제(Error control)★"
 },
 {
  "s": "s3",
  "t": "서비스 요청은 서비스 실패의 한 종류다 — 서비스 요청은 ★정상적인 서비스 제공의 일부★"
 },
 {
  "s": "s3",
  "t": "사용자의 불만(complaint)은 인시던트로 처리한다 — 피드백·칭찬·★불만도 서비스 요청★의 유형"
 },
 {
  "s": "s3",
  "t": "서비스 데스크는 고도의 기술 인력으로 구성되어야 한다 — 서비스 데스크는 ★고도로 기술적일 필요가 없으며★ 공감·비즈니스 이해가 중요"
 },
 {
  "s": "s3",
  "t": "가상 서비스 데스크는 중앙형보다 단순한 기술로 운영된다 — ★더 정교한 기술★이 필요하다"
 },
 {
  "s": "s3",
  "t": "SLA 를 모두 충족하면 고객은 만족한다 — ★수박 효과★: 지표는 녹색이어도 고객 경험은 나쁠 수 있다"
 },
 {
  "s": "s3",
  "t": "SLA 는 운영 지표(가용성 %)만 담으면 된다 — SLA 는 ★정의된 서비스와 성과(outcome)★에 연결되고 쉬운 언어로 작성"
 },
 {
  "s": "s4",
  "t": "8개 관행은 모두 서비스관리 그룹이다 — 배포 관리는 기술관리, 정보보안·관계·공급자 관리는 일반관리 그룹이다"
 },
 {
  "s": "s4",
  "t": "릴리스 관리의 목적은 구성요소를 라이브 환경으로 옮기는 것이다 — 옮기는 것(move)은 배포 관리, 릴리스는 사용 가능하게(available) 하는 것"
 },
 {
  "s": "s4",
  "t": "배포가 끝나면 그 기능은 곧바로 사용자에게 릴리스된 것이다 — 기능 토글 등으로 배포와 릴리스를 분리할 수 있다"
 },
 {
  "s": "s4",
  "t": "IT 자산은 IT 서비스 제공을 위해 관리가 필요한 구성요소다 — 그것은 CI 정의, IT 자산은 '재무적 가치'가 핵심"
 },
 {
  "s": "s4",
  "t": "모든 CI는 IT 자산이고 모든 IT 자산은 CI다 — 둘은 겹치지만 같지 않다(문서·SLA는 CI이지만 자산이 아닐 수 있음)"
 },
 {
  "s": "s4",
  "t": "이벤트는 서비스의 계획되지 않은 중단이다 — 그것은 인시던트, 이벤트는 관리상 의미 있는 상태 변화"
 },
 {
  "s": "s4",
  "t": "모든 이벤트는 인시던트로 기록·처리해야 한다 — 대부분의 이벤트는 정상 동작을 알리는 정보성 이벤트다"
 },
 {
  "s": "s4",
  "t": "문제는 분석은 됐지만 해결되지 않은 것이다 — 그것은 알려진 오류, 문제는 인시던트의 원인 또는 잠재적 원인"
 },
 {
  "s": "s4",
  "t": "임시방편(workaround)이 마련되면 문제는 해결(closed)된 것이다 — 임시방편은 영향을 줄일 뿐, 문제는 알려진 오류로 남는다"
 },
 {
  "s": "s4",
  "t": "인시던트 관리는 근본 원인을 찾은 뒤 서비스를 복구한다 — 인시던트 관리는 가능한 한 빨리 복구, 원인은 문제 관리"
 },
 {
  "s": "s4",
  "t": "변경은 서비스에 직접 영향을 주는 수정만을 말한다 — 직접·간접 영향을 줄 수 있는 것의 추가·수정·제거 모두"
 },
 {
  "s": "s4",
  "t": "보안·가용성·용량은 유틸리티 요소다 — 그것은 워런티(얼마나 잘, fit for use), 유틸리티는 기능(fit for purpose)"
 },
 {
  "s": "s4",
  "t": "서비스는 고객이 원하는 산출물(output)을 촉진한다 — 서비스는 고객이 원하는 성과(outcome)를 촉진한다"
 },
 {
  "s": "s4",
  "t": "서비스 구성 관리의 목적은 IT 자산의 재무 가치·라이선스를 추적하는 것이다 — 그것은 IT 자산 관리, 구성 관리는 CI 구성·관계 정보"
 },
 {
  "s": "s4",
  "t": "관계 관리는 공급자 계약과 성과를 관리한다 — 그것은 공급자 관리, 관계 관리는 이해관계자 전반과의 연결 구축·육성"
 },
 {
  "s": "s4",
  "t": "ITIL 4 Foundation 은 오답 감점이 있으니 모르는 문항은 비워 둔다 — 감점이 없으므로 모든 문항에 응답한다"
 },
 {
  "s": "s4",
  "t": "List 형 문항은 4개 진술 중 정답이 1개다 — List 형은 정답 진술 2개의 조합을 고른다"
 },
 {
  "s": "s5",
  "t": "ITIL 4는 이미 종료됐다 — 2026-10 현재 병행 시행 중이며, 일몰은 2027-12-31 '예정(현재 계획)'이다"
 },
 {
  "s": "s5",
  "t": "V5가 나오면 기존 ITIL 4 자격은 무효다 — 기존 자격은 리셋 없이 유효하다(PeopleCert 공식)"
 },
 {
  "s": "s5",
  "t": "Bridge 과정은 누구나 V5 자격을 얻는 지름길이다 — ITIL 4 Foundation 보유자 전용 1일 과정이다"
 },
 {
  "s": "s5",
  "t": "V5 Foundation은 한국어로 응시할 수 있다 — 공식 언어 9개에 한국어는 없다(ITIL 4의 12개에도 없음)"
 },
 {
  "s": "s5",
  "t": "V5 Foundation 합격선은 70%다 — ITIL 4와 같은 65%(26/40)다"
 },
 {
  "s": "s5",
  "t": "V5 범주 중 최대 비중은 핵심 용어(30%)다 — 최대는 ITIL 가치 시스템(40%)이다(비공식 출처)"
 },
 {
  "s": "s5",
  "t": "수명주기 8활동은 Discover→Support 순서로만 진행한다 — 반복적·비선형이다"
 },
 {
  "s": "s5",
  "t": "Acquire와 Build는 같은 말이다 — Acquire는 외부 확보, Build는 내부 구축이다"
 },
 {
  "s": "s5",
  "t": "V5에서 7개 지침 원칙이 새 이름으로 바뀌었다 — 명칭은 ITIL 4와 동일하다"
 },
 {
  "s": "s5",
  "t": "거버넌스 활동은 Plan·Do·Check·Act다 — 평가(Evaluate)·지시(Direct)·모니터(Monitor)다"
 },
 {
  "s": "s5",
  "t": "관측성(Observability)은 모니터링의 다른 이름이다 — 출력 데이터로 내부 상태를 추론하는 더 넓은 능력이다"
 },
 {
  "s": "s5",
  "t": "DevOps는 ITIL을 대체한다 — 서로 보완 관계다"
 },
 {
  "s": "s5",
  "t": "PRINCE2는 서비스 운영 프레임워크다 — 프로젝트 관리 방법론이다"
 },
 {
  "s": "s5",
  "t": "가치흐름 개선은 To-Be부터 그린다 — 현재 상태(As-Is) 매핑이 먼저다"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "서비스 관리 기초",
  "title": "서비스·서비스 관리·조직·제품",
  "ref": "ITIL 4 Foundation 실러버스 LO1.1 (교재 2.1~2.2)",
  "body": [
   {
    "h": "핵심 정의 4개 (BL1 암기)",
    "tb": {
     "head": [
      "용어",
      "정의 요지",
      "키워드"
     ],
     "rows": [
      [
       "★서비스(Service)★",
       "고객이 특정 비용·위험을 직접 관리하지 않고도 원하는 성과를 얻도록 하여 ★가치 공동창출(value co-creation)★을 가능하게 하는 수단",
       "means · outcomes · without managing costs and risks"
      ],
      [
       "★서비스 관리(Service management)★",
       "서비스 형태로 고객에게 가치를 가능하게 하는 ★전문화된 조직 역량(specialized organizational capabilities)★의 집합",
       "capabilities · in the form of services"
      ],
      [
       "조직(Organization)",
       "목표 달성을 위해 자체 기능·책임·권한·관계를 가진 ★개인 또는 집단★",
       "person or group"
      ],
      [
       "제품(Product)",
       "소비자에게 가치를 제공하도록 설계된 ★조직 자원의 구성(configuration of resources)★",
       "configuration · resources"
      ]
     ]
    }
   },
   {
    "h": "정의를 읽는 요령",
    "li": [
     "서비스 = ★수단(means)★, 서비스 관리 = ★역량(capabilities)★ — 정의 바꿔치기가 단골 함정.",
     "서비스 정의의 핵심 구절: 고객이 ★특정 비용과 위험을 관리하지 않아도★ 성과를 얻는다.",
     "ITIL 4는 ★'가치 전달(delivering value)'이 아니라 '가치 공동창출'★ — 제공자가 일방적으로 가치를 만들어 넘기는 구도가 아니다.",
     "제품은 제공자 쪽 자원(사람·정보·기술·가치흐름·파트너)의 구성이며, 여러 소비자 집단을 겨냥해 ★서비스 오퍼링★으로 포장된다."
    ]
   },
   {
    "h": "조직의 역할은 관계마다 달라진다",
    "li": [
     "한 조직이 어떤 관계에서는 ★서비스 제공자(service provider)★, 다른 관계에서는 ★서비스 소비자(service consumer)★가 된다.",
     "조직은 1인 개인일 수도, 기업·정부·국가 연합일 수도 있다 — 규모와 법적 형태는 무관.",
     "제공자는 외부 공급업체일 수도, 같은 회사의 내부 IT 부서일 수도 있다."
    ]
   },
   {
    "h": "[v5 차이]",
    "li": [
     "[v5 차이] '서비스 관리'가 '제품 및 서비스 관리(product and service management)'로 확장되고 디지털 제품·재화(goods) 정의가 강조된다 (2차 출처, [확인필요])."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "가치·성과·비용·위험",
  "title": "가치·가치 공동창출과 산출물 vs 성과",
  "ref": "실러버스 LO1.2 (교재 2.1·2.5)",
  "body": [
   {
    "h": "가치(Value)",
    "li": [
     "정의 요지: 어떤 것에 대해 ★인지된(perceived) 편익·유용성·중요성★.",
     "★주관적★ — 같은 서비스도 이해관계자마다 가치가 다르게 인지된다.",
     "★가치 공동창출(co-creation)★: 제공자와 소비자가 능동적으로 협업해 함께 만든다. 소비자는 수동적 수령자가 아니다.",
     "가치는 소비자에게만이 아니라 제공자·직원·주주·사회 등 여러 이해관계자에게 생긴다."
    ]
   },
   {
    "h": "산출물(Output) vs 성과(Outcome) ★최빈출 혼동쌍★",
    "tb": {
     "head": [
      "구분",
      "산출물 Output",
      "성과 Outcome"
     ],
     "rows": [
      [
       "정의 요지",
       "활동의 ★유형·무형 결과물(deliverable)★",
       "하나 이상의 산출물로 가능해지는 ★이해관계자의 결과★"
      ],
      [
       "관점",
       "제공자가 '만든 것'",
       "소비자가 '얻은 것'"
      ],
      [
       "예(교육 서비스)",
       "강의 영상·수료증·보고서",
       "업무 역량 향상·처리 시간 단축"
      ],
      [
       "함정",
       "보고서 건수를 성공지표로 삼음",
       "산출물이 많아도 성과가 없으면 가치 없음"
      ]
     ]
    }
   },
   {
    "h": "이해관계자별 가치 예",
    "tb": {
     "head": [
      "이해관계자",
      "얻는 가치 예"
     ],
     "rows": [
      [
       "서비스 소비자",
       "편익 달성, 비용·위험 최적화"
      ],
      [
       "서비스 제공자",
       "소비자로부터의 자금(수익), 사업 개발, 평판(이미지)"
      ],
      [
       "제공자 직원",
       "금전·비금전 인센티브, 경력·전문성 개발, 일의 의미"
      ],
      [
       "사회·지역사회",
       "고용, 세금, 조직의 지역사회 기여"
      ],
      [
       "주주",
       "배당 등 재무적 이익, 안정감"
      ]
     ]
    }
   },
   {
    "h": "[v5 차이]",
    "li": [
     "[v5 차이] 가치·산출물·성과·비용·위험은 '가치 공동창출' 범주로 그대로 출제되며 V5 범주1(30%)의 중심이다 (2차 출처)."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "가치·성과·비용·위험",
  "title": "비용과 위험 — 제거되는 것 vs 부과되는 것",
  "ref": "실러버스 LO1.2 (교재 2.5)",
  "body": [
   {
    "h": "비용(Cost)",
    "li": [
     "정의 요지: ★특정 활동이나 자원에 지출된 금액★.",
     "★제거되는 비용(costs removed)★ — 소비자가 직접 갖추지 않아도 되는 인력·기술·자원 비용 (가치 제안의 일부).",
     "★부과되는 비용(costs imposed)★ — 서비스 요금(가격), 사용자 교육비, 네트워크 이용비, 조달 비용 등.",
     "소비자는 '제거된 비용 − 부과된 비용'과 성과를 함께 보고 가치를 판단한다."
    ]
   },
   {
    "h": "위험(Risk)",
    "li": [
     "정의 요지: ★피해·손실을 일으키거나 목표 달성을 어렵게 할 수 있는 가능한 사건★. 또한 ★결과의 불확실성★으로 정의되며 긍정적·부정적 결과 모두 포함.",
     "★제거되는 위험★ — 예: 서버 장애 위험을 제공자가 떠안음. ★부과되는 위험★ — 예: 제공자 장애·보안 사고에 노출, 종속(lock-in).",
     "소비자도 위험 감소에 기여한다: ① 요구사항 정의·성과 명확화에 ★능동 참여★ ② ★핵심성공요인(CSF)·제약사항★을 명확히 전달 ③ 제공자가 필요한 ★소비자 자원에 접근★할 수 있게 보장."
    ]
   },
   {
    "h": "가치 판단 공식(개념)",
    "tb": {
     "head": [
      "축",
      "소비자가 평가하는 것"
     ],
     "rows": [
      [
       "성과",
       "원하는 결과를 얻었는가 (유틸리티·워런티로 뒷받침)"
      ],
      [
       "비용",
       "제거된 비용 대비 부과된 비용"
      ],
      [
       "위험",
       "제거된 위험 대비 부과된 위험"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "유틸리티·워런티",
  "title": "유틸리티 vs 워런티",
  "ref": "실러버스 LO1.1·1.2 (교재 2.5.4)",
  "body": [
   {
    "h": "두 정의 대조표",
    "tb": {
     "head": [
      "구분",
      "유틸리티 Utility",
      "워런티 Warranty"
     ],
     "rows": [
      [
       "정의 요지",
       "특정 요구를 충족하기 위해 제품·서비스가 제공하는 ★기능성(functionality)★",
       "제품·서비스가 ★합의된 요구사항을 충족할 것이라는 보증(assurance)★"
      ],
      [
       "한 줄",
       "★무엇을 하는가★ (what it does)",
       "★얼마나 잘 수행하는가★ (how it performs)"
      ],
      [
       "적합성",
       "★목적 적합성 fit for purpose★",
       "★사용 적합성 fit for use★"
      ],
      [
       "예",
       "급여 계산, 보고서 내보내기, 다국어 화면",
       "가용성 99.9%, 용량, 보안, 연속성"
      ],
      [
       "작동 방식",
       "소비자 성과(performance) 지원 또는 ★제약(constraint) 제거★",
       "소비자 요구에 맞춰 합의된 ★서비스 수준★과 관련"
      ]
     ]
    }
   },
   {
    "h": "시험 포인트",
    "li": [
     "★유틸리티와 워런티가 모두 있어야★ 가치가 창출된다 — 한쪽만으로는 부족.",
     "워런티 4대 영역(가용성·용량·보안·연속성)은 '얼마나 잘'의 대표 예. 기능 추가는 유틸리티.",
     "'fit for purpose ↔ fit for use' 를 서로 바꿔치기하는 보기가 단골."
    ]
   },
   {
    "h": "[v5 차이]",
    "li": [
     "[v5 차이] V5는 유틸리티·워런티에 더해 ★사용자 경험(UX)·지속가능성(sustainability)★을 제품·서비스 특성으로 함께 다룬다 (2차 출처, [확인필요])."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "서비스 관계",
  "title": "서비스 제공자·소비자와 고객·사용자·스폰서",
  "ref": "실러버스 LO1.1 (교재 2.2)",
  "body": [
   {
    "h": "소비자 측 3역할 ★Missing word 단골★",
    "tb": {
     "head": [
      "역할",
      "정의 요지",
      "기억법"
     ],
     "rows": [
      [
       "★고객(Customer)★",
       "서비스 ★요구사항을 정의★하고 서비스 소비의 ★성과에 책임★지는 사람",
       "요구·성과"
      ],
      [
       "★사용자(User)★",
       "서비스를 ★사용★하는 사람",
       "사용"
      ],
      [
       "★스폰서(Sponsor)★",
       "서비스 소비를 위한 ★예산을 승인★하는 사람",
       "돈"
      ]
     ]
    }
   },
   {
    "h": "역할 해석",
    "li": [
     "세 역할은 ★서로 다른 사람일 수도, 한 사람이 겸할 수도★ 있다 (예: 개인 소비자는 셋 모두).",
     "기업 예: 영업본부장 = 고객(CRM 요구·성과 책임), CFO = 스폰서(예산 승인), 영업사원 = 사용자.",
     "'스폰서'는 사용자가 아닌 것이 아니라, '예산 승인'으로 정의될 뿐이다 — 역할 정의의 기준을 보라."
    ]
   },
   {
    "h": "제공자 vs 소비자",
    "li": [
     "★서비스 제공자★: 서비스를 제공하는 역할의 조직. ★서비스 소비자★: 서비스를 소비하는 역할의 조직.",
     "같은 조직이 관계에 따라 두 역할을 동시에 가진다 — 서비스 체인·네트워크 형성.",
     "소비자는 서비스로 얻은 ★새 자원·역량★으로 자신의 소비자에게 다시 서비스를 제공할 수 있다."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-6",
  "t": "서비스 관계",
  "title": "서비스 오퍼링과 서비스 관계(제공·소비·관계 관리)",
  "ref": "실러버스 LO1.3 (교재 2.4)",
  "body": [
   {
    "h": "서비스 오퍼링(Service offering)",
    "li": [
     "정의 요지: ★특정 소비자 집단의 요구를 다루도록 설계된 하나 이상의 서비스에 대한 공식 기술(formal description)★.",
     "같은 제품으로 소비자 집단별로 서로 다른 오퍼링을 구성할 수 있다(예: 무료·프리미엄 요금제)."
    ]
   },
   {
    "h": "오퍼링 3구성요소",
    "tb": {
     "head": [
      "구성요소",
      "소유권",
      "예(모바일 통신)"
     ],
     "rows": [
      [
       "★재화(Goods)★",
       "소비자에게 ★이전★ — 이후 사용 책임은 소비자",
       "구매한 휴대폰 단말기"
      ],
      [
       "★자원 접근(Access to resources)★",
       "★이전되지 않음★ — 합의 조건에 따라 접근만 허용",
       "통신망 접속, 클라우드 저장 공간"
      ],
      [
       "★서비스 행위(Service actions)★",
       "해당 없음 — 제공자가 소비자 요구에 맞춰 수행",
       "단말 수리, 요금제 변경 처리, 상담"
      ]
     ]
    }
   },
   {
    "h": "서비스 관계 3요소",
    "tb": {
     "head": [
      "요소",
      "정의 요지",
      "포함 활동 예"
     ],
     "rows": [
      [
       "★서비스 제공(Service provision)★",
       "조직이 서비스를 ★제공★하기 위해 수행하는 활동",
       "제공자 자원 관리, 사용자의 자원 접근 보장, 합의된 서비스 행위 이행, 서비스 성과 관리·지속적 개선, 재화 공급"
      ],
      [
       "★서비스 소비(Service consumption)★",
       "조직이 서비스를 ★소비★하기 위해 수행하는 활동",
       "소비에 필요한 소비자 자원 관리, 사용자의 서비스 행위(제공자 자원 이용·서비스 행위 요청), 재화 수령"
      ],
      [
       "★서비스 관계 관리(Service relationship management)★",
       "제공자와 소비자가 ★합의·가용 오퍼링을 기반으로 지속적 가치 공동창출★을 보장하는 ★공동 활동★",
       "관계 수립·유지, 피드백·조정"
      ]
     ]
    }
   },
   {
    "h": "흐름과 함정",
    "li": [
     "흐름: 제품 → 서비스 오퍼링 → 서비스 관계(제공·소비·관계 관리) → 성과·가치.",
     "서비스 관계 관리는 ★공동(joint)★ 활동 — '제공자 단독' 보기는 오답.",
     "★자원 접근은 소유권 이전 없음★, 재화는 소유권 이전 — 바꿔치기 함정.",
     "[v5 차이] V5는 서비스 관계 유형을 기본(basic)·협력(cooperative)·파트너십(partnership)으로, 참여자에 디지털 제품 벤더를 추가해 다룬다 (2차 출처, [확인필요])."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-1",
  "t": "지침 원칙 개요",
  "title": "지침 원칙의 성격·사용·상호작용",
  "ref": "실러버스 LO2.1 (교재 4.3)",
  "body": [
   {
    "h": "지침 원칙(Guiding principle)이란",
    "li": [
     "정의 요지: 목표·전략·작업 유형·관리 구조가 바뀌어도 ★모든 상황에서 조직을 안내하는 권고사항(recommendation)★.",
     "★보편적(universal)·지속적(enduring)★ — 특정 프로세스의 의무 절차나 규정이 아니다.",
     "ITIL 4 SVS(서비스 가치 시스템)의 구성요소 중 하나이며, 모든 의사결정·활동의 기반이 된다.",
     "Agile·DevOps·Lean·COBIT 등 다른 프레임워크의 원칙과 공통 메시지를 공유 → 통합 적용에 유리."
    ]
   },
   {
    "h": "7원칙 한눈 목록 ★영문 명칭 그대로 출제★",
    "tb": {
     "head": [
      "#",
      "영문",
      "한국어"
     ],
     "rows": [
      [
       "1",
       "Focus on value",
       "가치에 집중"
      ],
      [
       "2",
       "Start where you are",
       "현재 위치에서 시작"
      ],
      [
       "3",
       "Progress iteratively with feedback",
       "피드백 기반 반복 진행"
      ],
      [
       "4",
       "Collaborate and promote visibility",
       "협업과 가시성 증진"
      ],
      [
       "5",
       "Think and work holistically",
       "총체적으로 사고·작업"
      ],
      [
       "6",
       "Keep it simple and practical",
       "단순·실용 유지"
      ],
      [
       "7",
       "Optimize and automate",
       "최적화·자동화"
      ]
     ]
    }
   },
   {
    "h": "상호작용(Interaction)",
    "li": [
     "원칙은 ★독립적으로 하나씩 쓰지 않고★ 상황에 맞게 ★여러 개를 함께★ 고려한다.",
     "모든 원칙이 모든 상황에 똑같이 중요하지는 않다 — ★관련성(relevance)을 검토★해 적용.",
     "예: 반복 진행 시 각 반복이 ★가치에 집중★해야 하고, 피드백은 ★협업과 가시성★을 통해 얻는다.",
     "예: ★최적화 후 자동화★ 전에 ★단순·실용★으로 불필요 단계를 걷어내고, ★현재 위치★를 평가한다.",
     "번호 순서는 우선순위·적용 순서가 아니다."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-2",
  "t": "원칙: 가치·시작·반복",
  "title": "가치에 집중 · 현재 위치에서 시작 · 피드백 기반 반복 진행",
  "ref": "실러버스 LO2.2 a~c (교재 4.3.1~4.3.3)",
  "body": [
   {
    "h": "① Focus on value — 가치에 집중",
    "li": [
     "조직의 모든 활동은 ★직·간접적으로 자신·고객·이해관계자의 가치에 연결★되어야 한다.",
     "적용: ★서비스 소비자가 누구인지★ 파악 → ★소비자 관점의 가치★ 이해 → 운영 활동 중에도 가치에 집중 → 개선 과제에서도 가치에 집중.",
     "가치는 ★고객 경험(CX)·사용자 경험(UX)★의 영향을 받는다.",
     "함정: '제공자 내부 효율'을 가치로 착각 — 가치는 ★소비자가 인지★하는 것."
    ]
   },
   {
    "h": "② Start where you are — 현재 위치에서 시작",
    "li": [
     "처음부터 다시 만들기(build from scratch)보다 ★현재 서비스·프로세스·사람·도구를 평가해 재사용★할 것을 찾는다.",
     "현재 상태는 ★직접 관찰★로 정확히 파악 — 보고서·측정 데이터에만 의존하지 않는다.",
     "★측정의 역할★: 중요하지만 측정 자체가 편향되거나 행동을 왜곡할 수 있으므로 관찰로 보완.",
     "위험관리 기술을 활용해 기존 방식을 유지·폐기·재사용할지 판단.",
     "함정: '기존 것을 모두 폐기하고 백지에서 설계' 보기는 오답."
    ]
   },
   {
    "h": "③ Progress iteratively with feedback — 피드백 기반 반복 진행",
    "li": [
     "한꺼번에 다 하려 하지 않는다 — ★큰 과제도 관리 가능한 작은 단위★로 나눠 적시에 완료.",
     "★반복 전·중·후★에 피드백을 구한다 — 피드백 루프로 최종 사용자의 가치 인식·변화를 파악.",
     "각 반복도 ★명확한 목표★를 가져야 하며 전체 과제의 큰 그림(holistic view)을 잃지 않는다.",
     "상황이 바뀌면 반복의 방향을 재평가·조정한다.",
     "함정: '전체 완료 후 한 번에 피드백', '반복하면 전체 계획 불필요'."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-3",
  "t": "원칙: 협업·총체·단순·자동화",
  "title": "협업·가시성 · 총체적 사고 · 단순·실용 · 최적화·자동화",
  "ref": "실러버스 LO2.2 d~g (교재 4.3.4~4.3.7)",
  "body": [
   {
    "h": "④ Collaborate and promote visibility — 협업과 가시성 증진",
    "li": [
     "사일로(silo)보다 ★협력·협업★ — 경계를 넘어 함께 일할 때 더 나은 결과.",
     "★적절한 이해관계자를 적절한 시점·수준★으로 참여시킨다(고객·사용자·공급자·개발·운영 등).",
     "★협업 ≠ 합의(consensus)★ — 모든 사람의 만장일치가 필요하다는 뜻이 아니다.",
     "청중이 이해할 수 있는 방식으로 소통하고, 의사결정은 ★가시적인 데이터★에 근거한다.",
     "작업 가시성으로 ★병목·낭비·불필요 작업★을 식별하고 긴박감(urgency)을 공유."
    ]
   },
   {
    "h": "⑤ Think and work holistically — 총체적 사고·작업",
    "li": [
     "어떤 서비스·요소도 ★단독으로 존재하지 않는다★ — 전체를 시스템으로 본다.",
     "★4차원(조직과 사람·정보와 기술·파트너와 공급자·가치흐름과 프로세스)★을 모두 고려.",
     "시스템의 복잡성을 인식하고, 요소 간 상호작용의 ★패턴★을 찾는다. 협업이 핵심이며 자동화가 총체적 작업을 돕는다.",
     "함정: '각 팀이 자기 부분만 최적화하면 전체가 최적화된다'."
    ]
   },
   {
    "h": "⑥ Keep it simple and practical — 단순·실용 유지",
    "li": [
     "★최소 단계★로 목표를 달성 — 가치를 만들지 않거나 유용한 산출물을 내지 않는 활동은 ★제거★.",
     "★결과 기반 사고(outcome-based thinking)★로 실용적 해결책을 만든다.",
     "★모든 예외를 처리하는 규칙을 만들지 말 것★ — 예외까지 다 담으면 지나치게 복잡해진다.",
     "'더 적게 하되 더 잘(do fewer things, but do them better)', ★관련자의 시간 존중★, 이해하기 쉬울수록 채택 가능성↑, 빠른 성과(quick wins)."
    ]
   },
   {
    "h": "⑦ Optimize and automate — 최적화·자동화",
    "li": [
     "★먼저 최적화, 그다음 자동화★ — 비효율을 자동화하면 비효율이 빨라질 뿐.",
     "최적화 경로: 맥락 이해·합의 → 현재 상태 평가 → 미래 상태·우선순위 합의 → 이해관계자 참여 보장 → 반복적 개선 실행 → 영향 지속 모니터링.",
     "★사람의 개입은 실제로 가치를 더하는 곳에만★ — 그 외 반복적·표준화된 작업은 자동화 후보.",
     "자동화에 과도하게 의존하지 말 것 — 자동화도 지속적으로 검토."
    ]
   },
   {
    "h": "[v5 차이]",
    "li": [
     "[v5 차이] 7원칙 명칭은 V5에서도 동일하게 유지된다 (2차 출처 S6·S8)."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "4차원과 외부 요인",
  "title": "서비스 관리 4차원 개요와 조직·사람",
  "ref": "ITIL 4 Foundation 실러버스 LO3.1",
  "body": [
   {
    "h": "4차원(Four dimensions of service management)이란",
    "li": [
     "SVS 전체와 모든 제품·서비스를 ★총체적(holistic)★으로 다루기 위해 고려해야 할 ★네 관점★.",
     "① 조직과 사람(Organizations and people) ② 정보와 기술(Information and technology) ③ 파트너와 공급자(Partners and suppliers) ④ 가치 흐름과 프로세스(Value streams and processes).",
     "4차원은 ★SVS 전체★(지침 원칙·거버넌스·가치 사슬·관행·지속적 개선)에 적용된다 — 특정 관행 하나에만 쓰는 도구가 아니다.",
     "어느 한 차원이라도 소홀히 하면 서비스가 ★제공 불가능해지거나 기대 품질·효율에 미달★할 수 있다.",
     "차원 사이에 ★명확한 경계가 없고★ 서로 겹치고 상호작용한다 — \"독립적으로 관리한다\"는 서술은 함정."
    ]
   },
   {
    "h": "① 조직과 사람(Organizations and people)",
    "li": [
     "범위: ★공식 조직 구조★, ★문화(culture)★, 역할·책임, 인력 배치와 ★역량(competencies)★, 권한 체계, 리더십, 의사소통·협업.",
     "조직이 커지고 복잡해질수록 구조뿐 아니라 ★신뢰·투명성의 문화★, 공유된 가치관이 중요해진다.",
     "개인은 자기 전문 분야와 함께 다른 영역에 대한 일반 지식도 갖춘 ★T자형(T-shaped)★ 인재가 바람직하다는 관점과 연결된다. [확인필요: 교재 표현]",
     "모든 구성원이 자신의 기여가 ★가치 창출에 어떻게 연결되는지★ 이해해야 한다."
    ]
   },
   {
    "h": "차원별 핵심 질문",
    "tb": {
     "head": [
      "차원",
      "핵심 질문",
      "키워드"
     ],
     "rows": [
      [
       "조직과 사람",
       "누가, 어떤 구조·문화로 일하는가",
       "문화·역할·역량·리더십"
      ],
      [
       "정보와 기술",
       "어떤 정보·지식과 기술이 필요한가",
       "정보·지식·도구·보안·규제"
      ],
      [
       "파트너와 공급자",
       "다른 조직과 어떤 관계를 맺는가",
       "계약·협약·소싱 전략·SIAM"
      ],
      [
       "가치 흐름과 프로세스",
       "각 부분이 어떻게 통합·조정되어 가치를 만드는가",
       "가치 흐름·프로세스·워크플로"
      ]
     ]
    }
   },
   {
    "h": "[v5 차이]",
    "li": [
     "Version 5 에서는 명칭이 ★\"제품 및 서비스 관리 4차원\"(Four Dimensions of Product and Service Management)★로 바뀐다 — 4개 차원 구성 자체는 같다."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "4차원과 외부 요인",
  "title": "정보와 기술 · 파트너와 공급자",
  "ref": "ITIL 4 Foundation 실러버스 LO3.1",
  "body": [
   {
    "h": "② 정보와 기술(Information and technology)",
    "li": [
     "서비스 관리에 필요한 ★정보와 지식★ + 서비스 관리를 지원하는 ★기술★ 두 측면을 모두 포함한다.",
     "기술 예: 워크플로 관리 시스템, 지식 베이스, 인벤토리(구성) 시스템, 커뮤니케이션 시스템, 분석 도구.",
     "고려사항: 어떤 정보를 관리하는가, 정보의 ★가용성·신뢰성·접근성·적시성·정확성★, 정보 ★보안·규제 준수(compliance)★.",
     "신기술(클라우드·AI·머신러닝·모바일 등)의 활용 가능성과 ★기존 아키텍처와의 호환성★, 조직 문화와의 적합성도 이 차원에서 검토한다.",
     "★함정★ — 이 차원은 \"IT 기술만\"을 뜻하지 않는다. 서비스가 다루는 ★정보★ 자체도 포함된다."
    ]
   },
   {
    "h": "③ 파트너와 공급자(Partners and suppliers)",
    "li": [
     "서비스의 ★설계·개발·배포·제공·지원·지속적 개선★에 관여하는 ★다른 조직과의 관계★를 다룬다.",
     "관계의 형태는 단순 ★계약·협약★부터 공동 목표·위험을 공유하는 ★파트너십★까지 다양하다.",
     "공급자 전략에 영향을 주는 요인: 전략적 초점(핵심 역량 집중 vs 직접 수행), 기업 문화, ★자원 부족★, ★비용★ 문제, 전문 지식 확보, 외부 제약(규제·정책), 수요 패턴.",
     "여러 공급자를 하나로 통합·조정하는 접근이 ★서비스 통합 및 관리(SIAM, Service Integration and Management)★ — 통합자(integrator) 역할을 둔다."
    ]
   },
   {
    "h": "소싱 결정 예시",
    "tb": {
     "head": [
      "요인",
      "직접 수행 쪽",
      "외부 조달 쪽"
     ],
     "rows": [
      [
       "전략적 초점",
       "핵심 역량이라 내재화",
       "비핵심이라 위탁"
      ],
      [
       "자원 부족",
       "필요 인력 보유",
       "희소 전문 인력은 외부에서"
      ],
      [
       "비용",
       "내부 비용이 낮음",
       "외부가 더 경제적"
      ],
      [
       "수요 패턴",
       "수요가 안정적",
       "계절성·변동이 큼 → 탄력 조달"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "4차원과 외부 요인",
  "title": "가치 흐름과 프로세스 · 외부 요인 PESTLE",
  "ref": "ITIL 4 Foundation 실러버스 LO3.1",
  "body": [
   {
    "h": "④ 가치 흐름과 프로세스(Value streams and processes)",
    "li": [
     "조직의 각 부분이 ★통합되고 조정된 방식★으로 일해 제품·서비스를 통한 가치 창출을 가능하게 하는 방법을 다룬다.",
     "★가치 흐름(Value stream)★ — 조직이 소비자에게 제품·서비스를 만들어 전달하기 위해 수행하는 ★일련의 단계★.",
     "★프로세스(Process)★ — ★입력을 출력으로 변환★하는 상호 연관되거나 상호작용하는 활동의 집합. 활동 순서와 의존성을 정의한다.",
     "이 차원의 질문: 어떤 활동을 하고, 어떻게 조직되며, 가치 창출을 어떻게 보장하는가."
    ]
   },
   {
    "h": "가치 흐름 vs 프로세스",
    "tb": {
     "head": [
      "구분",
      "가치 흐름",
      "프로세스"
     ],
     "rows": [
      [
       "초점",
       "소비자에게 가치 전달까지의 ★단계 전체★",
       "입력→출력 ★변환★ 활동 집합"
      ],
      [
       "범위",
       "여러 가치 사슬 활동·관행을 가로지름",
       "보통 한 관행 내부의 작업 절차"
      ],
      [
       "관점",
       "가치·낭비 제거(Lean)",
       "순서·의존성·통제"
      ]
     ]
    }
   },
   {
    "h": "외부 요인 — PESTLE",
    "li": [
     "4차원은 서비스 제공자가 ★통제할 수 없는 외부 요인★의 영향을 받는다. 이를 ★PESTLE★로 정리한다.",
     "★P★olitical(정치) · ★E★conomic(경제) · ★S★ocial(사회) · ★T★echnological(기술) · ★L★egal(법률) · ★E★nvironmental(환경).",
     "예: 개인정보 보호 법규(L), 환율·경기(E), 원격근무 확산(S), 클라우드 확산(T), 탄소 배출 규제(Env).",
     "★함정★ — PESTLE 은 \"4차원 중 하나\"가 아니라 4차원 ★바깥★에서 영향을 주는 요인이다."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "SVS 개요",
  "title": "서비스 가치 시스템(SVS) 개요",
  "ref": "ITIL 4 Foundation 실러버스 LO4.1",
  "body": [
   {
    "h": "SVS(Service Value System)의 정의와 목적",
    "li": [
     "조직의 모든 ★구성요소와 활동이 하나의 시스템으로 함께 작동★하여 가치 창출을 가능하게 하는 방식을 설명한다.",
     "목적: 제품·서비스의 사용과 관리를 통해 ★모든 이해관계자와 지속적으로 가치를 공동창출(co-create)★하도록 보장.",
     "★입력★ = 기회(Opportunity)와 수요(Demand) / ★출력★ = 가치(Value).",
     "SVS 는 조직 내부의 ★사일로(silo)★를 줄이고 통합·조정을 촉진하며, 변화에 대응하는 ★유연성★을 준다."
    ]
   },
   {
    "h": "입력과 출력",
    "tb": {
     "head": [
      "요소",
      "의미",
      "주의"
     ],
     "rows": [
      [
       "기회(Opportunity)",
       "이해관계자 가치를 더하거나 조직을 개선할 ★선택지·가능성★",
       "수요가 없어도 존재 가능"
      ],
      [
       "수요(Demand)",
       "내·외부 소비자의 제품·서비스에 대한 ★필요·욕구★",
       "외부 고객만이 아니라 내부 소비자 포함"
      ],
      [
       "가치(Value)",
       "지각된 ★편익·유용성·중요성★",
       "조직·고객·기타 이해관계자 모두를 위한 가치"
      ]
     ]
    }
   },
   {
    "h": "SVS 구성 그림(말로 그리기)",
    "li": [
     "왼쪽에서 ★기회·수요★가 들어온다 → 가운데 ★가치 사슬★(6활동)이 ★지침 원칙·거버넌스·관행·지속적 개선★에 둘러싸여 작동 → 오른쪽으로 ★가치★가 나간다.",
     "5개 구성요소: ① 지침 원칙(Guiding principles) ② 거버넌스(Governance) ③ 서비스 가치 사슬(Service value chain) ④ 관행(Practices) ⑤ 지속적 개선(Continual improvement).",
     "★함정★ — 기회·수요·가치는 SVS 의 ★입력·출력★이지 \"구성요소\"가 아니다. 4차원도 구성요소가 아니라 SVS 에 적용되는 관점이다."
    ]
   },
   {
    "h": "사일로가 문제인 이유",
    "li": [
     "부서별 사일로는 ★정보·자원의 공유를 막고★ 변화에 대한 대응을 느리게 한다.",
     "SVS 는 조직 전체를 ★가치 중심의 단일 시스템★으로 보게 하여 협업과 가시성을 높인다(지침 원칙 '협업과 가시성 증진'과 연결).",
     "[v5 차이] Version 5 에서는 명칭이 ★ITIL 가치 시스템(ITIL Value System)★으로 바뀐다."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "SVS 구성요소",
  "title": "SVS 구성요소 — 지침 원칙·거버넌스·관행·지속적 개선",
  "ref": "ITIL 4 Foundation 실러버스 LO4.1",
  "body": [
   {
    "h": "① 지침 원칙(Guiding principles)",
    "li": [
     "목표·전략·업무 유형·관리 구조가 바뀌어도 ★모든 상황에서 조직을 안내하는 권고★.",
     "7원칙(가치에 집중 ~ 최적화·자동화)이 SVS 의 ★첫 번째 구성요소★다. 상세는 '지침 원칙' 과목에서."
    ]
   },
   {
    "h": "② 거버넌스(Governance)",
    "li": [
     "조직을 ★지시하고 통제(directed and controlled)★하는 수단.",
     "★거버닝 바디(Governing body)★ — 조직의 성과·준수에 대해 ★책임(accountable)★지는 최고 수준의 개인·집단(예: 이사회).",
     "거버닝 바디의 3활동: ★평가(Evaluate)★ — 전략·포트폴리오·관계 평가 / ★지시(Direct)★ — 전략·정책 책임 할당·준비 / ★모니터(Monitor)★ — 성과·관행·제품·서비스 감시.",
     "거버넌스도 ★지속적 개선★의 대상이며, 가치 사슬·관행이 조직 방향과 ★정렬(aligned)★되도록 한다."
    ]
   },
   {
    "h": "③ 관행(Practices)",
    "li": [
     "업무를 수행하거나 목표를 달성하기 위해 설계된 ★조직 자원의 집합★.",
     "ITIL 4 는 ★34개 관행★: 일반 관리 ★14★ / 서비스 관리 ★17★ / 기술 관리 ★3★.",
     "관행은 4차원 모두를 아우르는 자원(사람·정보·기술·파트너·프로세스)으로 구성되고, ★여러 가치 사슬 활동에 기여★한다.",
     "★함정★ — 관행 ≠ 가치 사슬 활동. \"관행 1개 = 활동 1개\" 1:1 대응은 틀린 서술."
    ]
   },
   {
    "h": "④ 지속적 개선(Continual improvement)",
    "li": [
     "이해관계자 기대에 성과가 계속 부합하도록 ★모든 수준에서 수행되는 반복적 조직 활동★.",
     "ITIL 4 에서 지속적 개선은 ★세 곳★에 등장: SVS ★구성요소★ / 가치 사슬 ★Improve 활동★ / ★지속적 개선 관행★.",
     "지속적 개선 모델(7단계)이 구조화된 접근을 제공한다 — 상세는 '관행 상세' 과목에서."
    ]
   },
   {
    "h": "구성요소 한눈 정리",
    "tb": {
     "head": [
      "구성요소",
      "한 줄 정의",
      "키워드"
     ],
     "rows": [
      [
       "지침 원칙",
       "모든 상황에서 조직을 안내하는 권고",
       "7원칙·보편적"
      ],
      [
       "거버넌스",
       "조직을 지시·통제하는 수단",
       "거버닝 바디·EDM"
      ],
      [
       "서비스 가치 사슬",
       "가치 창출을 위한 운영 모델",
       "6활동·상호연결"
      ],
      [
       "관행",
       "업무 수행용 조직 자원의 집합",
       "34개(14/17/3)"
      ],
      [
       "지속적 개선",
       "모든 수준의 반복적 개선 활동",
       "개선 모델 7단계"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-6",
  "t": "가치 사슬 구조",
  "title": "서비스 가치 사슬의 구조와 상호연결성",
  "ref": "ITIL 4 Foundation 실러버스 LO5.1",
  "body": [
   {
    "h": "서비스 가치 사슬(Service value chain)이란",
    "li": [
     "제품·서비스의 ★창출·제공·지속적 개선★을 위한 ★운영 모델(operating model)★. SVS 의 중심 구성요소.",
     "★6활동★: Plan(계획) · Improve(개선) · Engage(참여) · Design and transition(설계·전환) · Obtain/build(획득·구축) · Deliver and support(제공·지원).",
     "각 활동은 ★입력을 출력으로 변환★한다. 입력은 가치 사슬 밖의 수요이거나 다른 활동의 출력이다.",
     "모든 활동은 ★상호 연결★되어 있고, 서로 ★트리거(trigger)★를 주고받는다 — ★선형 순서가 아니다★."
    ]
   },
   {
    "h": "가치 사슬의 경계 — 무엇이 안팎을 잇는가",
    "li": [
     "★수요·기회★가 가치 사슬로 들어오는 접점과 ★가치(제품·서비스)★가 나가는 접점은 주로 ★Engage★ 활동이다.",
     "외부 공급자의 재화·서비스는 ★Obtain/build★, 거버닝 바디의 정책·요구는 ★Plan★ 으로 들어온다.",
     "Deliver and support 는 ★서비스를 고객·사용자에게 제공★하는 출력을 낸다."
    ]
   },
   {
    "h": "가치 사슬 · 관행 · 가치 흐름의 관계",
    "li": [
     "가치 사슬 활동은 ★관행의 조합★을 사용해 수행된다. 한 관행이 ★여러 활동★에 기여하고, 한 활동이 ★여러 관행★을 쓴다.",
     "특정 시나리오에 맞게 활동·관행을 조합한 경로가 ★가치 흐름(value stream)★이다.",
     "따라서 가치 사슬은 ★유연한 구조★ — 수요 유형에 따라 다양한 가치 흐름을 정의할 수 있다."
    ]
   },
   {
    "h": "SVS vs 가치 사슬 vs 가치 흐름",
    "tb": {
     "head": [
      "개념",
      "무엇인가",
      "비유"
     ],
     "rows": [
      [
       "SVS",
       "기회·수요를 가치로 바꾸는 ★시스템 전체★",
       "공장 전체 운영 체계"
      ],
      [
       "가치 사슬",
       "6개 ★활동★으로 된 운영 모델",
       "공정(라인) 종류 6가지"
      ],
      [
       "가치 흐름",
       "특정 시나리오용 활동·관행의 ★조합 경로★",
       "제품별 실제 작업 동선"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-7",
  "t": "가치 사슬 6활동",
  "title": "가치 사슬 6활동 — 목적과 주요 입출력",
  "ref": "ITIL 4 Foundation 실러버스 LO5.2",
  "body": [
   {
    "h": "활동별 목적 (시험 최빈출)",
    "tb": {
     "head": [
      "활동",
      "목적 핵심어",
      "목적 요지"
     ],
     "rows": [
      [
       "Plan(계획)",
       "공유된 이해",
       "4차원·모든 제품/서비스의 ★비전·현 상태·개선 방향★에 대한 공유된 이해 보장"
      ],
      [
       "Improve(개선)",
       "지속적 개선",
       "모든 가치 사슬 활동·4차원에 걸쳐 제품·서비스·관행의 ★지속적 개선★ 보장"
      ],
      [
       "Engage(참여)",
       "이해관계자 관계",
       "이해관계자 ★요구에 대한 이해·투명성·지속적 참여·좋은 관계★ 제공"
      ],
      [
       "Design and transition(설계·전환)",
       "품질·비용·출시 기간",
       "제품·서비스가 ★품질·비용·출시 기간(time to market)★ 기대를 지속 충족"
      ],
      [
       "Obtain/build(획득·구축)",
       "구성요소 가용성",
       "서비스 구성요소가 ★필요한 때·곳에 가용★하고 합의된 사양 충족"
      ],
      [
       "Deliver and support(제공·지원)",
       "합의된 사양대로 제공",
       "서비스가 ★합의된 사양과 이해관계자 기대★에 따라 제공·지원"
      ]
     ]
    }
   },
   {
    "h": "Plan · Improve 의 주요 입출력",
    "li": [
     "Plan 입력: 거버닝 바디의 ★정책·요구사항·제약★, Engage 의 ★통합된 수요·기회★, Improve 의 가치 사슬 성과 정보·개선 이니셔티브.",
     "Plan 출력: 전략·전술·운영 ★계획★, 설계·전환을 위한 ★포트폴리오 결정★과 ★아키텍처·정책★, Engage 를 위한 ★제품·서비스 포트폴리오★.",
     "Improve 입력: Deliver and support 의 제품·서비스 성과 정보, Engage 의 ★이해관계자 피드백★, 모든 활동의 성과 정보·개선 기회.",
     "Improve 출력: 모든 활동을 위한 ★개선 이니셔티브·개선 현황 보고서★, Plan·거버닝 바디를 위한 ★가치 사슬 성과 정보★."
    ]
   },
   {
    "h": "Engage 의 주요 입출력",
    "li": [
     "입력: 고객의 상위 수요·상세 요구사항·요청·피드백, 사용자의 ★인시던트·서비스 요청★·피드백, 파트너·공급자의 협력 기회, Plan 의 제품·서비스 포트폴리오.",
     "출력: Plan 으로 ★통합된 수요·기회★, Design and transition 으로 ★제품·서비스 요구사항★, Deliver and support 로 ★사용자 지원 작업★, Obtain/build 로 ★변경·프로젝트 착수 요청★, Improve 로 개선 기회·이해관계자 피드백, 고객에게 ★서비스 성과 보고서★.",
     "공급자·파트너와의 ★계약·협약★을 체결해 다른 활동에 제공한다."
    ]
   },
   {
    "h": "Design and transition · Obtain/build · Deliver and support 의 주요 입출력",
    "li": [
     "Design and transition — 입력: Plan 의 포트폴리오 결정·아키텍처·정책, Engage 의 제품·서비스 요구사항, Obtain/build 의 서비스 구성요소 / 출력: Obtain/build 로 ★요구사항·사양★, Deliver and support 로 ★신규·변경된 제품·서비스★.",
     "Obtain/build — 입력: Design and transition 의 요구사항·사양, 공급자의 재화·서비스, Engage 의 변경·프로젝트 착수 요청, Deliver and support 의 ★변경 요청★ / 출력: Design and transition·Deliver and support 로 ★서비스 구성요소★.",
     "Deliver and support — 입력: Design and transition 의 신규·변경 제품·서비스, Obtain/build 의 서비스 구성요소, Engage 의 ★사용자 지원 작업★ / 출력: 고객·사용자에게 ★제공되는 서비스★, Engage 로 사용자 지원 작업 완료 정보, Engage·Improve 로 ★제품·서비스 성과 정보★, Obtain/build 로 변경 요청.",
     "★공통 출력★ — 거의 모든 활동이 Improve 로 ★성과 정보·개선 기회★, Engage 로 ★계약·협약 요구사항★을 보낸다."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-8",
  "t": "가치 흐름",
  "title": "가치 흐름(Value stream)과 시나리오",
  "ref": "ITIL 4 Foundation 실러버스 LO5.1",
  "body": [
   {
    "h": "가치 흐름의 정의",
    "li": [
     "조직이 소비자에게 제품·서비스를 ★만들어 전달하기 위해 수행하는 일련의 단계★.",
     "가치 흐름 = 가치 사슬 ★활동★과 ★관행★의 특정 조합. ★각 가치 흐름은 특정 시나리오★(예: 신규 서비스 개발, 운영 중 서비스 복구)에 맞춰 설계된다.",
     "같은 활동이 하나의 가치 흐름 안에서 ★여러 번 등장★할 수 있다(예: 처음과 끝 모두 Engage)."
    ]
   },
   {
    "h": "예시 ① 운영 중 서비스 복구(인시던트) — 일반적 흐름",
    "li": [
     "Engage — 사용자가 장애를 보고, 서비스 데스크가 접수.",
     "Deliver and support — 진단·복구 시도(인시던트 관리).",
     "Obtain/build — 구성요소 수정·교체가 필요하면 수정분 확보.",
     "Design and transition — 수정분을 운영 환경으로 전환(배포·변경 실행).",
     "Deliver and support → Engage — 복구 확인 후 사용자에게 통보·종료.",
     "※ ITIL 교재의 예시 취지를 일반화한 흐름 — 세부 단계 표현은 [확인필요]."
    ]
   },
   {
    "h": "예시 ② 신규 서비스 개발 — 일반적 흐름",
    "li": [
     "Engage(고객 수요 접수) → Plan(포트폴리오 결정) → Design and transition(요구사항·설계) → Obtain/build(구성요소 구축·조달) → Design and transition(전환) → Deliver and support(운영 제공) → Engage(고객 피드백).",
     "흐름마다 ★Improve★ 는 성과 정보를 받아 개선 기회를 찾는다."
    ]
   },
   {
    "h": "가치 흐름을 쓰는 이유",
    "li": [
     "가치 흐름을 정의·매핑하면 ★병목·낭비(waste)★를 찾아 제거하고(Lean 사상), ★자동화★ 대상과 개선 우선순위를 정할 수 있다.",
     "조직은 수요 유형별로 ★여러 가치 흐름★을 정의하며, 환경 변화에 따라 ★지속적으로 재검토·개선★한다.",
     "[v5 차이] Version 5 에서는 가치 흐름의 식별·매핑·관리가 별도 학습 범주로 강화된다(상세는 Version 5 과목)."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "지속적 개선",
  "title": "지속적 개선(Continual improvement) — 목적·책임·개선 등록부",
  "ref": "실러버스 6.1 i · 7.1 a",
  "body": [
   {
    "h": "목적(Purpose) 요지",
    "li": [
     "★변화하는 비즈니스 요구에 조직의 관행·서비스를 정렬(align)★ — 제품·서비스·관행 등 서비스 관리에 관여하는 모든 요소를 ★지속적으로(ongoing) 개선★해서.",
     "키워드: ★align · changing business needs · ongoing improvement★. ‘비용 절감’·‘장애 복구’ 같은 다른 관행의 목적과 바꿔치기하는 보기가 단골.",
     "지속적 개선은 ★SVS 구성요소이자 동시에 관행★이다 — 가치사슬의 ‘개선(Improve)’ 활동과도 연결된다(세 가지를 혼동하지 말 것).",
     "[v5 차이] Version 5 Foundation 에서도 지속적 개선 모델 7단계는 유지된다고 알려져 있음(2차 자료) [확인필요]."
    ]
   },
   {
    "h": "누가 개선하는가 — ‘모든 사람의 책임’",
    "li": [
     "지속적 개선은 ★조직 내 모든 사람의 책임(everyone's responsibility)★ — 특정 부서만의 일이 아니다.",
     "대규모 조직은 개선을 이끌고 조정하는 ★전담 팀★을 둘 수 있으나, 전담 팀이 있어도 나머지 구성원의 책임이 사라지지 않는다.",
     "★최고 경영진(리더십)★은 개선 문화를 만들고 시간·예산을 확보하는 역할을 진다.",
     "공급자·파트너와의 계약에도 개선에 대한 기여(측정·보고·개선 의무)를 포함할 수 있다."
    ]
   },
   {
    "h": "지속적 개선 등록부(Continual Improvement Register, CIR)",
    "li": [
     "개선 아이디어를 ★식별 → 우선순위 → 실행 → 결과★까지 추적·관리하는 데이터베이스/구조화된 문서.",
     "조직 안에 ★여러 개의 CIR★을 둘 수 있다(개인·팀·부서·조직 전체 단위) — ‘조직당 하나만’은 함정.",
     "아이디어는 기록만 하고 끝내지 않는다 — 평가·우선순위화·재평가가 계속된다(비즈니스 상황 변화 반영)."
    ]
   },
   {
    "h": "핵심 활동(Key activities)",
    "li": [
     "조직 전반에 지속적 개선을 ★장려★ · 개선을 위한 ★시간과 예산 확보★",
     "개선 기회의 ★식별·기록(CIR)★ · ★평가와 우선순위화★",
     "개선 이니셔티브의 ★비즈니스 케이스(business case)★ 작성",
     "개선 계획·실행 → ★측정·평가★ → 조직 전반의 개선 활동 ★조정(coordinating)★"
    ]
   },
   {
    "h": "함께 쓰는 기법(예시)",
    "tb": {
     "head": [
      "기법",
      "어디에 쓰나"
     ],
     "rows": [
      [
       "SWOT 분석",
       "현재 상태 평가(강점·약점·기회·위협)"
      ],
      [
       "균형성과표(Balanced scorecard)",
       "목표·측정 지표 설정"
      ],
      [
       "성숙도 평가(Maturity assessment)",
       "현재 수준의 기준선(baseline) 파악"
      ],
      [
       "Lean · Agile · DevOps",
       "낭비 제거·반복 개선·빠른 피드백"
      ],
      [
       "CSF · KPI",
       "‘원하는 상태’의 측정 가능한 목표 정의"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "지속적 개선",
  "title": "지속적 개선 모델 7단계 — 질문으로 외워라",
  "ref": "실러버스 7.1 a (CI model 포함)",
  "body": [
   {
    "h": "7단계 = 7개의 질문",
    "tb": {
     "head": [
      "#",
      "단계(질문)",
      "핵심 내용"
     ],
     "rows": [
      [
       "1",
       "★비전은 무엇인가?★ (What is the vision?)",
       "조직 비전·사명·목표와 개선 이니셔티브를 연결, 고수준 방향·범위 설정"
      ],
      [
       "2",
       "★현재 위치는?★ (Where are we now?)",
       "★기준선 평가(baseline assessment)★ — 현재 상태를 객관적으로 측정"
      ],
      [
       "3",
       "★어디에 도달하고 싶은가?★ (Where do we want to be?)",
       "★측정 가능한 목표★ 설정(CSF·KPI), 현재와의 갭 분석"
      ],
      [
       "4",
       "★어떻게 갈 것인가?★ (How do we get there?)",
       "개선 계획 수립 — 단순하거나 복잡할 수 있음, 반복 접근 권장"
      ],
      [
       "5",
       "★실행(Take action)★",
       "계획 실행 — 폭포수·애자일 등 방식 무관, 위험 관리·측정 병행"
      ],
      [
       "6",
       "★도달했는가?★ (Did we get there?)",
       "목표 달성 여부와 ★기대한 가치가 실현됐는지★ 확인"
      ],
      [
       "7",
       "★추진력을 어떻게 유지할까?★ (How do we keep the momentum going?)",
       "성공을 알리고 학습 내용을 정착, 다음 개선으로 연결"
      ]
     ]
    }
   },
   {
    "h": "단계 암기법·함정",
    "li": [
     "흐름: ★비전 → 현재 → 목표 → 계획 → 실행 → 확인 → 추진력 유지★ (‘비현목계실확추’).",
     "★2단계(현재 위치)★ 에서 하는 것이 기준선 평가 — ‘목표 설정’과 바꿔치기하는 보기가 자주 나온다.",
     "★3단계★ 가 측정 가능한 목표(CSF·KPI)와 갭 분석. ‘실행 계획 수립’은 4단계.",
     "★6단계★ 는 단순히 ‘끝났는가’가 아니라 ‘원하는 성과·가치를 얻었는가’ 를 묻는다. 미달이면 다시 앞 단계로 돌아간다.",
     "모델은 ★반복(iterative)★ 적용 — 한 번 돌고 끝나는 선형 프로젝트가 아니다.",
     "모델은 전략 수준의 대규모 개선부터 팀 단위의 작은 개선까지 ★모든 수준★에 적용 가능하다."
    ]
   },
   {
    "h": "지침 원칙과의 연결",
    "li": [
     "1단계 ← 가치에 집중(Focus on value)",
     "2단계 ← 현재 위치에서 시작(Start where you are)",
     "4~5단계 ← 피드백 기반 반복 진행(Progress iteratively with feedback)",
     "전 단계 ← 협업·가시성, 총체적 사고, 단순·실용"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "변경 실행",
  "title": "변경 실행(Change enablement) — 3가지 변경 유형·변경 권한자·변경 일정",
  "ref": "실러버스 6.1 j · 7.1 b",
  "body": [
   {
    "h": "목적과 정의",
    "li": [
     "목적 요지: ★성공적인 서비스·제품 변경의 수를 최대화★ — ①위험을 적절히 ★평가★하고 ②변경 진행을 ★승인(authorize)★하며 ③★변경 일정(change schedule)★을 관리해서.",
     "변경(Change) 정의: 서비스에 ★직접·간접 영향을 줄 수 있는 모든 것의 추가·수정·제거★.",
     "변경 범위는 ★각 조직이 정의★한다 — 보통 IT 인프라·애플리케이션·문서·프로세스·공급자 관계 등 서비스에 영향 줄 수 있는 것.",
     "★균형★: 해로운 변경으로부터 보호(위험 관리) ↔ 유익한 변경의 빠른 처리(처리량·throughput) — ‘변경을 최소화’가 목적이 아니다.",
     "명칭 참고: ITIL 4 초판(2019)에서는 ‘변경 통제(Change control)’ 로 불렸고 이후 ‘Change enablement’ 로 개칭됨 [확인필요: 개칭 시점].",
     "[v5 차이] Version 5 Foundation 은 개별 관행 상세를 출제 범위에서 제외한다는 2차 자료가 있음 — ‘변경’은 용어 정의로 출제 [확인필요]."
    ]
   },
   {
    "h": "변경 권한자(Change authority)",
    "li": [
     "★변경을 승인(authorize)하는 사람 또는 그룹★.",
     "변경 유형·모델에 따라 ★적절한 변경 권한자를 지정★해야 효율과 효과를 모두 얻는다 — 모든 변경을 하나의 위원회(CAB)가 승인해야 한다는 것은 함정.",
     "고속(high-velocity) 조직에서는 ★권한을 분산(decentralize)★하는 경향 — 예: ★동료 검토(peer review)★가 승인 수단이 된다.",
     "아주 큰 변경은 이사회(board) 수준에서 승인할 수도 있다."
    ]
   },
   {
    "h": "변경 3유형 비교",
    "tb": {
     "head": [
      "유형",
      "특징",
      "승인 방식"
     ],
     "rows": [
      [
       "★표준 변경(Standard)★",
       "저위험·잘 이해됨·완전 문서화 / 흔히 서비스 요청으로 발생, 운영 변경일 수도",
       "★사전 승인(pre-authorized)★ — 실행 시 추가 승인 불필요. 위험평가는 ★절차 작성 시★ 1회(절차 변경 시 재평가)"
      ],
      [
       "★일반 변경(Normal)★",
       "일정 수립·평가·승인이 프로세스대로 필요 / ★변경 요청(RFC) 생성으로 시작★",
       "★변경 모델★이 권한자 결정 — 저위험은 신속 결정자(종종 자동화 파이프라인), 대규모는 상위 권한자"
      ],
      [
       "★긴급 변경(Emergency)★",
       "★가능한 빨리★ 실행 필요(인시던트 해결·보안 패치 등) / 보통 변경 일정에 미포함",
       "평가·승인 ★신속화(expedited)★, 별도 권한자 지정 가능, ★문서화는 사후로 미룰 수 있음★ — 평가·승인 자체를 생략하는 것은 아님"
      ]
     ]
    }
   },
   {
    "h": "변경 일정(Change schedule)",
    "li": [
     "변경을 ★계획★하고 ★커뮤니케이션★을 돕고 ★충돌을 피하고★ ★자원을 배정★하는 데 사용.",
     "구현 후에도 ★인시던트 관리·문제 관리·개선 계획★에 필요한 정보를 제공한다(최근 변경이 장애 원인일 수 있으므로).",
     "긴급 변경은 보통 사전 일정에 포함되지 않는다."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "인시던트 관리",
  "title": "인시던트 관리(Incident management) — 복구 속도와 스워밍",
  "ref": "실러버스 6.1 k · 7.1 c",
  "body": [
   {
    "h": "목적과 정의",
    "li": [
     "목적 요지: ★정상 서비스 운영을 가능한 빨리 복구(restore)★해서 인시던트의 ★부정적 영향을 최소화★.",
     "인시던트(Incident): 서비스의 ★계획되지 않은 중단(unplanned interruption)★ 또는 ★서비스 품질의 저하★.",
     "초점은 ★복구 속도★ — 근본 원인 규명은 문제 관리의 몫(‘인시던트 관리가 근본 원인을 제거한다’는 함정).",
     "[v5 차이] Version 5 에서는 인시던트가 가치사슬 핵심 정의(용어) 수준으로 출제된다는 2차 자료 [확인필요]."
    ]
   },
   {
    "h": "기록·우선순위·목표 시간",
    "li": [
     "모든 인시던트는 ★기록(log)★되고 관리되어야 한다 — 해결 시간이 고객·사용자 기대를 충족하도록.",
     "★합의된 분류 체계★에 따라 우선순위화 — ★비즈니스 영향(impact)★이 가장 큰 것부터 먼저 해결.",
     "★목표 해결 시간★은 합의·문서화·전달되어 기대치가 현실적이어야 한다.",
     "인시던트 기록은 ★구성항목(CI)·변경·문제·알려진 오류★ 등 다른 정보와 연결될 수 있다 — ★알려진 오류와 매칭★하면 빠른 해결."
    ]
   },
   {
    "h": "인시던트 유형별 처리",
    "li": [
     "★영향이 낮은★ 인시던트 — 효율적으로 처리해 자원 소모를 줄임(사용자 셀프헬프 포함).",
     "★주요 인시던트(major incident)★ — ★별도 프로세스★로 관리.",
     "★정보보안 인시던트★ — 보통 ★별도 프로세스★(정보보안 관리와 연계)."
    ]
   },
   {
    "h": "누가 진단·해결하는가 — 여러 주체",
    "tb": {
     "head": [
      "주체",
      "설명"
     ],
     "rows": [
      [
       "사용자 셀프헬프",
       "셀프서비스 포털·지식 문서로 직접 해결"
      ],
      [
       "서비스 데스크",
       "스크립트로 초기 분류(triage)·1차 해결"
      ],
      [
       "지원 팀(support team)",
       "보다 복잡한 기술적 해결"
      ],
      [
       "공급자·파트너",
       "계약에 인시던트 협력 의무 반영"
      ],
      [
       "임시 팀(temporary team)",
       "복잡한 인시던트에 여러 분야 인력이 함께 — ★스워밍★"
      ],
      [
       "재해 복구 계획",
       "극단적 상황(DR 계획 발동)"
      ]
     ]
    }
   },
   {
    "h": "스워밍(Swarming)",
    "li": [
     "복잡하거나 원인이 불분명한 인시던트에서 ★여러 이해관계자가 처음부터 함께 작업★하고, ★누가 가장 적합한지 분명해지면★ 그 사람/팀이 계속하고 나머지는 빠진다.",
     "전통적 단계별 ‘에스컬레이션(티어 1→2→3)’ 과 대비되는 협업 방식.",
     "효과적인 인시던트 관리는 ★협업 도구·지식 공유★·높은 수준의 협업에 의존한다."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "문제 관리",
  "title": "문제 관리(Problem management) — 식별·통제·오류 통제 3단계",
  "ref": "실러버스 6.1 l · 7.1 d",
  "body": [
   {
    "h": "목적과 용어",
    "li": [
     "목적 요지: 인시던트의 ★실제·잠재 원인을 식별★하고 ★임시 해결책(workaround)과 알려진 오류(known error)를 관리★해 인시던트의 ★발생 가능성과 영향을 줄임★.",
     "문제(Problem): ★하나 이상 인시던트의 원인 또는 잠재 원인★.",
     "알려진 오류(Known error): ★분석은 되었지만 아직 해결되지 않은★ 문제.",
     "임시 해결책(Workaround): 완전한 해결책이 없을 때 인시던트·문제의 ★영향을 줄이거나 없애는 방안★ — 일부는 해결 대신 쓰임.",
     "문제와 인시던트는 ★연관되지만 별개로 관리★ — 인시던트=사용자·비즈니스에 대한 영향, 문제=원인."
    ]
   },
   {
    "h": "3단계 비교",
    "tb": {
     "head": [
      "단계",
      "무엇을",
      "포인트"
     ],
     "rows": [
      [
       "★문제 식별(Problem identification)★",
       "문제를 찾아 기록",
       "인시던트 ★추세 분석★ · 중복·반복 이슈 감지(사용자·서비스 데스크·기술 인력) · ★주요 인시던트 처리 중★ 발견 · 공급자·파트너 정보 · 개발·테스트·프로젝트 팀 정보"
      ],
      [
       "★문제 통제(Problem control)★",
       "문제 ★분석★, 임시 해결책·알려진 오류 ★문서화★",
       "★위험 기반 우선순위★ · 4차원 모두 조사 · 원인은 여러 가지일 수 있음 · ★임시 해결책은 문제 기록에 문서화★"
      ],
      [
       "★오류 통제(Error control)★",
       "★알려진 오류★를 관리",
       "★영구 해결책★ 식별(→변경 요청으로 이어질 수 있음) · 미해결 알려진 오류의 상태 ★주기적 재평가★ · 임시 해결책 개선"
      ]
     ]
    }
   },
   {
    "h": "임시 해결책(Workaround) 포인트",
    "li": [
     "임시 해결책은 ★어느 단계에서든★ 문서화할 수 있다 — 문제 분석이 끝날 때까지 기다릴 필요 없음.",
     "효과적인 임시 해결책이 있으면 문제는 ★알려진 오류 상태로 오래 남을 수 있다★ — 영구 해결의 비용·효과를 따져 결정.",
     "임시 해결책은 해당 문제의 ★문제 기록(problem record)★에 문서화되고, 인시던트 관리가 이를 활용한다."
    ]
   },
   {
    "h": "다른 관행과의 연결",
    "li": [
     "★인시던트 관리★ — 인시던트 해결에 알려진 오류·임시 해결책 제공, 반복 인시던트가 문제 식별의 입력.",
     "★변경 실행★ — 영구 해결책은 보통 ★변경 요청★을 통해 구현된다(문제 관리가 직접 변경을 승인하는 것이 아님).",
     "★위험 관리★ — 문제는 위험으로 간주될 수 있음. ★지식 관리★ — 알려진 오류·임시 해결책 공유.",
     "★지속적 개선★ — 문제 분석 결과가 개선 기회가 된다."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "서비스 요청 관리",
  "title": "서비스 요청 관리(Service request management) — 사전 정의된 요청",
  "ref": "실러버스 6.1 m · 7.1 e",
  "body": [
   {
    "h": "목적과 정의",
    "li": [
     "목적 요지: ★사전 정의된(predefined)★, ★사용자가 시작한(user-initiated)★ 모든 서비스 요청을 ★효과적이고 사용자 친화적으로★ 처리해 ★합의된 서비스 품질을 지원★.",
     "서비스 요청(Service request): 사용자(또는 그 대리인)가 시작하는, ★서비스 제공의 정상적인 일부★로 합의된 서비스 행위에 대한 요청.",
     "핵심: 서비스 요청은 ★실패·장애가 아니다★ — 장애·품질 저하는 인시던트."
    ]
   },
   {
    "h": "서비스 요청의 유형",
    "tb": {
     "head": [
      "유형",
      "예시"
     ],
     "rows": [
      [
       "서비스 제공 행위 요청",
       "보고서 제공, 토너 교체"
      ],
      [
       "정보 요청",
       "문서 작성 방법, 사무실 운영 시간 문의"
      ],
      [
       "자원·서비스 제공 요청",
       "노트북·휴대폰 지급, 가상 서버 제공"
      ],
      [
       "접근 요청",
       "자원(폴더·시스템)에 대한 접근 권한"
      ],
      [
       "피드백·칭찬·불만(complaints)",
       "새 인터페이스 불만, 지원팀 칭찬"
      ]
     ]
    }
   },
   {
    "h": "설계·운영 지침",
    "li": [
     "요청 처리 절차는 ★최대한 표준화·자동화★ — 이미 정의된 ★워크플로 모델★ 활용.",
     "일부 요청은 간단한 워크플로, ★신규 입사자 셋업★처럼 여러 부서가 관여하는 복잡한 워크플로도 있다.",
     "★정책(policy)★으로 어떤 요청을 ★제한된 승인 또는 추가 승인 없이★ 처리할지 정해 처리를 간소화.",
     "★처리 시간에 대한 기대치★를 사용자에게 명확히 — 조직이 현실적으로 제공 가능한 수준으로.",
     "개선 기회를 식별해 처리 시간 단축·자동화를 높인다.",
     "일부 서비스 요청은 ★표준 변경(사전 승인)★ 형태로 처리된다 — 변경 실행과의 접점."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-7",
  "t": "서비스 데스크",
  "title": "서비스 데스크(Service desk) — 단일 접점(SPOC)",
  "ref": "실러버스 6.1 n · 7.1 f",
  "body": [
   {
    "h": "목적과 역할",
    "li": [
     "목적 요지: ★인시던트 해결과 서비스 요청에 대한 수요를 포착(capture)★ — 동시에 서비스 제공자의 ★모든 사용자에 대한 진입점이자 단일 접점(SPOC)★.",
     "사용자가 이슈·질의·요청을 보고하면 그것이 ★접수 확인·분류·소유·조치(acknowledged, classified, owned, actioned)★되도록 명확한 경로 제공.",
     "★기술 이슈만이 아니라 사람과 비즈니스를 지원★하는 데 초점 — 비즈니스·사용자·업무 프로세스에 대한 ★실질적 이해★가 핵심 가치.",
     "서비스 데스크는 반드시 ★고도로 기술적일 필요는 없다★ — 공감·고객 서비스 역량이 중요.",
     "[v5 차이] Version 5 에서는 관행 상세가 Foundation 출제 범위에서 빠졌다는 2차 자료 [확인필요]."
    ]
   },
   {
    "h": "접근 채널(Channels)",
    "tb": {
     "head": [
      "채널",
      "예"
     ],
     "rows": [
      [
       "전화",
       "IVR·컨퍼런스 콜·음성 인식"
      ],
      [
       "서비스 포털·모바일 앱",
       "서비스·요청 카탈로그, 지식 베이스"
      ],
      [
       "라이브 채팅·챗봇",
       "실시간 대화·자동 응답"
      ],
      [
       "이메일",
       "로그·업데이트·후속 조치 확인"
      ],
      [
       "방문(walk-in)",
       "현장 지원 데스크"
      ],
      [
       "문자·소셜미디어·토론 포럼",
       "공개·사내 포럼 포함"
      ]
     ]
    }
   },
   {
    "h": "자동화와 사람",
    "li": [
     "자동화·셀프서비스가 늘수록 기술적 처리는 줄고, 서비스 데스크는 ★공감·감성지능(emotional intelligence)·비즈니스 이해★가 더 중요해진다.",
     "필요 역량: ★고객 서비스·공감·인시던트 분석과 우선순위화·효과적 커뮤니케이션·감성지능★.",
     "자동화가 사람의 지원을 완전히 대체한다는 서술은 함정 — 사용자가 원하면 ★사람에게 연결(escalation)★할 수 있어야 한다."
    ]
   },
   {
    "h": "중앙형 vs 가상 서비스 데스크",
    "tb": {
     "head": [
      "형태",
      "특징",
      "지원 기술"
     ],
     "rows": [
      [
       "중앙형(Centralized)",
       "한 장소에 인력 집중",
       "전화·워크플로 시스템"
      ],
      [
       "★가상(Virtual)★",
       "★여러 지리적 위치★에 흩어진 인력이 하나처럼 동작(follow-the-sun 가능)",
       "★더 정교한 기술★(라우팅·협업 도구) 필요"
      ]
     ]
    }
   },
   {
    "h": "서비스 데스크를 지원하는 기술",
    "li": [
     "지능형 전화 시스템(CTI·IVR·자동 호 분배) · 워크플로 시스템(라우팅·에스컬레이션) · ★지식 베이스★",
     "통화 녹음·품질 관리 · 원격 접속 도구 · 대시보드·모니터링 도구 · 구성 관리 시스템(CMS)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-8",
  "t": "서비스 수준 관리",
  "title": "서비스 수준 관리(Service level management) — SLA·고객 참여·정보원",
  "ref": "실러버스 6.1 o · 7.1 g",
  "body": [
   {
    "h": "목적과 SLA",
    "li": [
     "목적 요지: 서비스 수준에 대한 ★명확한 비즈니스 기반 목표(business-based targets)★를 설정하고, 서비스 제공이 이 목표에 맞게 ★평가·모니터링·관리★되도록 보장.",
     "★SLA(Service Level Agreement)★: 서비스 제공자와 ★고객★ 간의 ★문서화된 합의★ — 필요한 서비스와 기대 서비스 수준을 명시.",
     "SLM 은 ★관행★, SLA 는 그 관행이 만드는 ★문서(합의)★ — 혼동 금지.",
     "SLM 은 서비스의 ★종단간(end-to-end) 가시성★을 제공하고, 서비스 리뷰를 통해 서비스 이슈·성과를 보고."
    ]
   },
   {
    "h": "좋은 SLA 의 요건",
    "li": [
     "★정의된 ‘서비스’에 연결★ — 서비스 카탈로그의 서비스와 맞물려야 함(지표만 나열하면 안 됨).",
     "★정의된 성과(outcome)와 관련★ — 단순한 운영 지표(operational metrics)만이 아니라 고객이 체감하는 결과.",
     "★합의를 반영★ — 서비스 제공자와 소비자 간의 ★참여(engagement)★로 만들어지는 것. 일방 통보 아님.",
     "★단순하고 이해하기 쉬운 언어★ — 모든 당사자가 이해·사용 가능."
    ]
   },
   {
    "h": "수박 효과(Watermelon effect)",
    "li": [
     "SLA 지표는 모두 ★녹색(겉)★인데 고객 만족은 ★빨강(속)★ — 운영 지표만 측정하고 고객 경험을 놓친 결과.",
     "처방: 운영 지표 + ★비즈니스 성과·고객 피드백★을 함께 측정."
    ]
   },
   {
    "h": "SLM 의 정보원(Information sources) — 고객 참여 방식",
    "tb": {
     "head": [
      "정보원",
      "내용"
     ],
     "rows": [
      [
       "★고객 참여(Customer engagement)★",
       "초기 경청·발견·정보 수집 / ★간단한 개방형 질문★: ‘업무가 무엇인가?’ ‘기술이 어떻게 돕는가?’ ‘핵심 업무 시간·영역은?’ ‘가장 중요한 성과는?’"
      ],
      [
       "★고객 피드백(Customer feedback)★",
       "★설문★ — 이벤트 기반(특정 인시던트·요청 처리 직후 등) / 주기적(정기 만족도) · ★비즈니스 관련 핵심 측정치★"
      ],
      [
       "★운영 지표(Operational metrics)★",
       "시스템 가용성, 인시던트 해결 시간, 변경의 적시성·효과, 요청 처리 시간, 핵심 비즈니스 트랜잭션 응답 시간"
      ],
      [
       "★비즈니스 지표(Business metrics)★",
       "고객·이해관계자가 정의한 ★비즈니스 활동의 성공★ 측정"
      ]
     ]
    }
   },
   {
    "h": "SLM 에 필요한 역량",
    "li": [
     "★관계 관리★ · ★비즈니스 연계(business liaison)★ · ★비즈니스 분석★ · ★상업·공급자 관리★",
     "고객과 서비스 목표를 협상하고 성과를 리뷰할 수 있는 소통·협상 능력."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "일반관리 관행 목적",
  "title": "목적만 외우는 관행 8개 — 지도 그리기",
  "ref": "ITIL 4 Foundation 실러버스 LO6.1 a~h (BL1)",
  "body": [
   {
    "h": "실러버스가 요구하는 수준",
    "li": [
     "LO6.1 = 15개 관행의 ★목적(purpose)★ 암기(BL1, 5점). 그중 8개는 ★목적만★, 나머지 7개는 LO7에서 상세까지 묻는다.",
     "이 8개는 \"어떤 활동을 하나\"보다 ★\"이 관행이 왜 존재하나\"★ 한 문장을 알아보는 문제로 나온다 — 보기 4개가 서로 다른 관행의 목적이다.",
     "ITIL 4 전체 관행은 34개(일반관리 14 · 서비스관리 17 · 기술관리 3). Foundation 은 그중 15개만 다룬다.",
     "목적 문구는 공식 교재 요지를 의역한 것이다 — 원문 대조 [확인필요: 공식 교재]."
    ]
   },
   {
    "h": "8개 관행 — 그룹과 핵심 동사",
    "tb": {
     "head": [
      "관행 (English)",
      "관행 그룹",
      "목적의 핵심 동사·키워드"
     ],
     "rows": [
      [
       "정보보안 관리 (Information security management)",
       "일반관리",
       "조직 업무에 필요한 ★정보를 보호★"
      ],
      [
       "관계 관리 (Relationship management)",
       "일반관리",
       "이해관계자와의 ★연결 구축·육성★(전략·전술 수준)"
      ],
      [
       "공급자 관리 (Supplier management)",
       "일반관리",
       "★공급자와 그 성과★를 적절히 관리"
      ],
      [
       "IT 자산 관리 (IT asset management)",
       "서비스관리",
       "IT 자산의 ★전체 수명주기★ 계획·관리 → 가치 극대화·비용 통제·위험 관리"
      ],
      [
       "모니터링 및 이벤트 관리 (Monitoring and event management)",
       "서비스관리",
       "서비스·구성요소를 ★체계적으로 관찰★, 상태 변화를 ★이벤트로 기록·보고★"
      ],
      [
       "릴리스 관리 (Release management)",
       "서비스관리",
       "새롭거나 변경된 서비스·기능을 ★사용 가능하게(available for use)★"
      ],
      [
       "서비스 구성 관리 (Service configuration management)",
       "서비스관리",
       "서비스와 CI 구성에 대한 ★정확·신뢰할 수 있는 정보★를 필요한 때·곳에"
      ],
      [
       "배포 관리 (Deployment management)",
       "★기술관리★",
       "새롭거나 변경된 구성요소를 ★라이브 환경으로 이동(move)★"
      ]
     ]
    }
   },
   {
    "h": "외우는 요령",
    "li": [
     "★동사로 구분★ — protect(보안) · nurture links(관계) · manage suppliers(공급자) · plan & manage lifecycle(자산) · observe & record(모니터링) · make available(릴리스) · accurate information(구성) · move(배포).",
     "배포 관리만 ★기술관리(Technical management)★ 그룹이다 — \"8개 모두 서비스관리\" 같은 서술은 함정.",
     "정보보안·관계·공급자 = 조직 전반에 걸친 ★일반관리★(지속적 개선도 같은 그룹이지만 LO7 상세 대상).",
     "[v5 차이] Version 5 는 관행 그룹을 2개로 재편하고 Foundation 에서 개별 관행 상세 출제를 줄였다는 2차 자료가 있다 [확인필요]."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "일반관리 관행 목적",
  "title": "정보보안 · 관계 · 공급자 관리",
  "ref": "실러버스 LO6.1 a·b·c",
  "body": [
   {
    "h": "정보보안 관리 (Information security management)",
    "li": [
     "목적 요지: 조직이 ★업무를 수행하는 데 필요한 정보를 보호★한다.",
     "방법: 정보의 ★기밀성(Confidentiality)·무결성(Integrity)·가용성(Availability)★ 및 ★인증(Authentication)·부인방지(Non-repudiation)★ 관련 위험을 이해·관리.",
     "보안은 ★예방·탐지·교정★의 균형 — 통제가 과하면 혁신·업무를 막고, 약하면 위험 노출.",
     "함정: \"정보 보안 = IT 부서만의 일\" ✗ — 조직 전체(사람·프로세스·기술)에 걸친 일반관리 관행."
    ]
   },
   {
    "h": "관계 관리 (Relationship management)",
    "li": [
     "목적 요지: 조직과 이해관계자 사이의 연결을 ★전략적·전술적 수준★에서 ★구축하고 육성(establish and nurture)★한다.",
     "관계의 식별·분석·모니터링·지속적 개선을 포함.",
     "함정: \"공급자 계약 관리\"는 공급자 관리, \"서비스 목표 합의\"는 서비스 수준 관리 — 관계 관리는 ★이해관계자 전반★과의 관계 자체."
    ]
   },
   {
    "h": "공급자 관리 (Supplier management)",
    "li": [
     "목적 요지: 조직의 ★공급자와 그 성과★가 적절히 관리되어 ★품질 높은 제품·서비스의 매끄러운 제공★을 지원하게 한다.",
     "핵심 공급자와 ★더 긴밀하고 협력적인 관계★를 만들어 새로운 가치를 발굴하고 실패 위험을 줄인다.",
     "활동 예: 공급자 전략 수립, 공급자 계획, 평가·선정, 계약 협상, 성과 관리, 갱신·종료 [확인필요: 공식 교재 활동 목록].",
     "4차원 중 ★파트너와 공급자(Partners and suppliers)★ 차원과 직접 연결."
    ]
   },
   {
    "h": "세 관행 한눈 비교",
    "tb": {
     "head": [
      "구분",
      "대상",
      "키워드"
     ],
     "rows": [
      [
       "정보보안 관리",
       "정보(데이터)",
       "보호 · CIA · 인증 · 부인방지"
      ],
      [
       "관계 관리",
       "이해관계자 전반",
       "연결 구축·육성 · 전략/전술 수준"
      ],
      [
       "공급자 관리",
       "공급자·파트너",
       "공급자 성과 · 협력 관계 · 매끄러운 제공"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "서비스·기술관리 관행 목적",
  "title": "IT 자산 관리 · 서비스 구성 관리",
  "ref": "실러버스 LO6.1 d·g, LO6.2",
  "body": [
   {
    "h": "IT 자산 관리 (IT asset management)",
    "li": [
     "목적 요지: 모든 IT 자산의 ★전체 수명주기(full lifecycle)★를 계획·관리하여 조직이 ★가치 극대화, 비용 통제, 위험 관리★를 하도록 돕는다.",
     "또한 자산의 ★구매·재사용·폐기(retirement·disposal)★ 의사결정을 지원하고 ★규제·계약 요구사항★ 충족을 돕는다.",
     "IT 자산(IT asset) = 재무적 가치가 있고 IT 제품·서비스 제공에 기여할 수 있는 모든 구성요소.",
     "관점: ★재무·상업(돈·라이선스·계약)★ — \"얼마짜리, 누구 소유, 언제 폐기\"."
    ]
   },
   {
    "h": "서비스 구성 관리 (Service configuration management)",
    "li": [
     "목적 요지: 서비스와 이를 지원하는 ★구성항목(CI)의 구성에 관한 정확하고 신뢰할 수 있는 정보★가 ★필요한 때·필요한 곳★에 있도록 한다.",
     "정보에는 CI가 어떻게 구성되어 있는지와 ★CI 간 관계(relationship)★가 포함된다.",
     "도구: 구성관리시스템(CMS)·구성관리데이터베이스(CMDB) — 도구 이름 자체가 목적은 아니다.",
     "관점: ★구성·관계·영향(무엇이 무엇에 의존하나)★ — 변경 영향 분석, 인시던트 진단의 토대."
    ]
   },
   {
    "h": "IT 자산 vs 구성항목(CI)",
    "tb": {
     "head": [
      "구분",
      "IT 자산",
      "구성항목(CI)"
     ],
     "rows": [
      [
       "기준",
       "★재무적 가치★가 있는가",
       "서비스 제공을 위해 ★관리가 필요★한가"
      ],
      [
       "관행",
       "IT 자산 관리",
       "서비스 구성 관리"
      ],
      [
       "관심사",
       "비용·소유·라이선스·수명주기",
       "구성·속성·관계·의존성"
      ],
      [
       "겹침",
       "서버 1대는 자산이자 CI일 수 있음",
       "문서·SLA처럼 자산이 아닌 CI도 있음"
      ]
     ]
    }
   },
   {
    "h": "함정 포인트",
    "li": [
     "\"모든 IT 자산은 CI다\" / \"모든 CI는 자산이다\" ✗ — 둘은 ★겹치지만 같지 않다★.",
     "\"서비스 구성 관리의 목적 = 모든 IT 자산의 재무 가치 추적\" ✗ — 그것은 IT 자산 관리."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "서비스·기술관리 관행 목적",
  "title": "모니터링·이벤트 관리 · 릴리스 관리 · 배포 관리",
  "ref": "실러버스 LO6.1 e·f·h",
  "body": [
   {
    "h": "모니터링 및 이벤트 관리 (Monitoring and event management)",
    "li": [
     "목적 요지: 서비스와 서비스 구성요소를 ★체계적으로 관찰(observe)★하고, ★이벤트로 식별된 선택된 상태 변화를 기록·보고★한다.",
     "인프라·서비스·비즈니스 프로세스·정보보안 이벤트를 식별·우선순위화하고, 잠재적 장애·인시던트로 이어질 수 있는 상황을 포함해 ★적절한 대응★을 정한다.",
     "★모니터링★ = 관찰(이벤트 없이도 가능) / ★이벤트 관리★ = 의미 있는 상태 변화를 기록·관리(모니터링에 의존).",
     "이벤트 분류 예: 정보성(informational) · 경고(warning) · 예외(exception) [확인필요: 공식 교재 명칭]."
    ]
   },
   {
    "h": "릴리스 관리 (Release management)",
    "li": [
     "목적 요지: 새롭거나 변경된 서비스·기능을 ★사용 가능하게(make available for use)★ 한다.",
     "릴리스(Release) = 사용 가능하게 만든 서비스·CI(또는 CI 묶음)의 ★버전★. 하나의 릴리스에 여러 변경이 묶일 수 있다.",
     "워터폴 환경에서는 릴리스 단위가 크고, 애자일·DevOps 환경에서는 작고 잦다."
    ]
   },
   {
    "h": "배포 관리 (Deployment management)",
    "li": [
     "목적 요지: 새롭거나 변경된 ★하드웨어·소프트웨어·문서·프로세스 등 구성요소를 라이브 환경으로 이동(move)★한다.",
     "테스트·스테이징 등 ★다른 환경으로의 배포★에도 관여할 수 있다.",
     "배포 방식: 단계적(phased) · 지속적 전달(continuous delivery) · 빅뱅(big bang) · 풀(pull) 배포.",
     "그룹: ★기술관리★ — 8개 중 유일."
    ]
   },
   {
    "h": "배포 ≠ 릴리스",
    "tb": {
     "head": [
      "구분",
      "배포 관리",
      "릴리스 관리"
     ],
     "rows": [
      [
       "핵심 동사",
       "★옮긴다(move)★",
       "★사용 가능하게 한다(make available)★"
      ],
      [
       "대상",
       "구성요소(HW·SW·문서 등)",
       "서비스·기능(사용자 관점)"
      ],
      [
       "관계",
       "배포됐지만 아직 릴리스 안 됨 가능",
       "기능 토글(feature flag)로 나중에 공개"
      ],
      [
       "그룹",
       "기술관리",
       "서비스관리"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "필수 용어 정의",
  "title": "실러버스 필수 정의 7개 (LO6.2)",
  "ref": "실러버스 LO6.2 (BL1, 2점) · 원문 대조 [확인필요]",
  "body": [
   {
    "h": "정의 7개 — 키워드로 외우기",
    "tb": {
     "head": [
      "용어 (English)",
      "정의 요지",
      "외울 키워드"
     ],
     "rows": [
      [
       "IT 자산 (IT asset)",
       "IT 제품·서비스 제공에 기여할 수 있는 ★재무적 가치★가 있는 모든 구성요소",
       "financially valuable"
      ],
      [
       "이벤트 (Event)",
       "서비스나 다른 CI 관리에 ★의미가 있는 상태 변화★",
       "change of state · significance"
      ],
      [
       "구성항목 (Configuration item, CI)",
       "IT 서비스를 제공하기 위해 ★관리가 필요한★ 모든 구성요소",
       "needs to be managed"
      ],
      [
       "변경 (Change)",
       "서비스에 ★직·간접 영향★을 줄 수 있는 것의 ★추가·수정·제거★",
       "addition · modification · removal"
      ],
      [
       "인시던트 (Incident)",
       "서비스의 ★계획되지 않은 중단★ 또는 ★품질 저하★",
       "unplanned interruption · reduction in quality"
      ],
      [
       "문제 (Problem)",
       "하나 이상의 인시던트의 ★원인 또는 잠재적 원인★",
       "cause or potential cause"
      ],
      [
       "알려진 오류 (Known error)",
       "★분석은 됐지만 해결되지 않은★ 문제",
       "analysed · not resolved"
      ]
     ]
    }
   },
   {
    "h": "정의 바꿔치기 함정",
    "li": [
     "Event 정의에 \"unplanned interruption\"이 붙으면 ✗ — 그건 Incident.",
     "Problem 정의에 \"analysed but not resolved\"가 붙으면 ✗ — 그건 Known error.",
     "IT asset 정의에 \"needs to be managed\"가 붙으면 ✗ — 그건 CI. 자산은 ★financially valuable★.",
     "Change 정의는 ★direct or indirect effect★ — \"직접 영향만\"으로 좁히면 ✗."
    ]
   },
   {
    "h": "자주 묻는 확장 용어",
    "li": [
     "해결책 임시방편(Workaround) — 완전한 해결이 아직 없는 인시던트·문제의 ★영향을 줄이거나 없애는★ 방법. 문제를 해결한 것은 아니다.",
     "경고(Alert) — 임계치 도달·변화·장애 발생을 알리는 ★통지★ [확인필요: 공식 용어집 문구].",
     "서비스 요청(Service request) — 사용자가 시작한 ★정상 서비스 제공의 일부★로 합의된 조치 요청(정보·접근·표준 변경 등)."
    ]
   },
   {
    "h": "인시던트 → 문제 → 알려진 오류의 흐름",
    "li": [
     "인시던트 발생(복구 우선) → 반복·중대 인시던트에서 ★문제 식별(problem identification)★ → ★문제 통제(problem control)★: 분석·임시방편 문서화 → 알려진 오류 → ★오류 통제(error control)★: 영구 해결은 ★변경 실행(change enablement)★을 통해."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-6",
  "t": "혼동쌍: 운영 용어",
  "title": "운영 혼동쌍 — 인시던트·문제·이벤트·요청",
  "ref": "실러버스 LO6.2·LO7 연계",
  "body": [
   {
    "h": "★최빈출★ 인시던트 vs 문제 vs 알려진 오류",
    "tb": {
     "head": [
      "구분",
      "인시던트",
      "문제",
      "알려진 오류"
     ],
     "rows": [
      [
       "본질",
       "중단·품질 저하라는 ★현상★",
       "인시던트의 ★(잠재)원인★",
       "분석 완료·★미해결★ 문제"
      ],
      [
       "목표",
       "★가능한 한 빨리 정상 서비스 복구★",
       "원인 규명·★재발 방지·영향 감소★",
       "임시방편 유지·영구 해결 대기"
      ],
      [
       "시간 축",
       "지금 당장",
       "근본 원인(시간 걸림)",
       "해결 전 상태"
      ],
      [
       "관행",
       "인시던트 관리",
       "문제 관리",
       "문제 관리(오류 통제)"
      ]
     ]
    }
   },
   {
    "h": "이벤트 vs 경고 vs 인시던트",
    "li": [
     "이벤트 = 관리상 ★의미 있는 상태 변화★ — 대부분은 정상 동작(정보성)이다.",
     "경고(Alert) = 조치가 필요할 수 있음을 알리는 ★통지★.",
     "인시던트 = 실제 ★서비스 중단·품질 저하★.",
     "함정: \"모든 이벤트는 인시던트다\" ✗ / \"인시던트는 항상 이벤트로부터 탐지된다\" ✗(사용자 신고도 있음)."
    ]
   },
   {
    "h": "서비스 요청 vs 인시던트",
    "li": [
     "서비스 요청 = ★정상 서비스 제공의 일부★(비밀번호 재설정, 노트북 지급, 정보 요청) — 계획된·합의된 것.",
     "인시던트 = ★계획되지 않은★ 중단·저하.",
     "함정: \"사용자가 서비스 데스크에 연락했으니 인시던트\" ✗ — 연락 경로가 아니라 ★내용★으로 구분."
    ]
   },
   {
    "h": "서비스 데스크 vs 인시던트 관리",
    "li": [
     "서비스 데스크 = 인시던트 해결과 서비스 요청에 대한 ★수요를 포착하는 진입점·단일 접점(SPOC)★.",
     "인시던트 관리 = 인시던트의 부정적 영향을 줄이기 위해 ★서비스를 신속히 복구★하는 관행.",
     "함정: \"서비스 데스크는 인시던트만 처리\" ✗ — 요청·질문·피드백 등 모든 사용자 접점."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-7",
  "t": "혼동쌍: 가치·변경 용어",
  "title": "가치·변경 혼동쌍 — 변경/릴리스/배포 · 유틸리티/워런티 · 산출물/성과",
  "ref": "실러버스 LO1.1·1.2·6.1·6.2",
  "body": [
   {
    "h": "★최빈출★ 변경 vs 릴리스 vs 배포",
    "tb": {
     "head": [
      "구분",
      "변경 (Change)",
      "릴리스 (Release)",
      "배포 (Deployment)"
     ],
     "rows": [
      [
       "핵심",
       "추가·수정·제거",
       "사용 가능하게 만든 ★버전★",
       "구성요소를 환경으로 ★이동★"
      ],
      [
       "관행",
       "변경 실행(Change enablement)",
       "릴리스 관리",
       "배포 관리"
      ],
      [
       "관심",
       "위험 평가·승인(변경 권한자)",
       "사용자에게 언제 공개하나",
       "어떻게 환경에 옮기나"
      ],
      [
       "그룹",
       "서비스관리",
       "서비스관리",
       "기술관리"
      ]
     ]
    }
   },
   {
    "h": "변경 3유형",
    "li": [
     "표준 변경(Standard) — ★저위험·사전 승인★된 변경. 매번 별도 승인 불필요(서비스 요청으로 처리되기도).",
     "정상 변경(Normal) — 프로세스에 따라 ★일정 수립·평가·승인★ 필요. 변경 권한자(change authority) 승인.",
     "긴급 변경(Emergency) — ★가능한 한 빨리★ 구현해야 하는 변경(예: 인시던트 해결·보안 패치). 평가·승인 신속화, 별도 변경 권한자 가능."
    ]
   },
   {
    "h": "유틸리티 vs 워런티 · 산출물 vs 성과",
    "tb": {
     "head": [
      "쌍",
      "앞쪽",
      "뒤쪽"
     ],
     "rows": [
      [
       "유틸리티 / 워런티",
       "★무엇을 하나★ — 기능성, 목적 적합(fit for purpose)",
       "★얼마나 잘 하나★ — 합의된 요구 충족 보증, 사용 적합(fit for use): 가용성·용량·보안·연속성"
      ],
      [
       "산출물(Output) / 성과(Outcome)",
       "활동이 만든 ★유·무형 결과물★(보고서·기능)",
       "하나 이상의 산출물이 가능하게 한 ★이해관계자의 결과★"
      ],
      [
       "비용 제거 / 비용 부과",
       "서비스 덕분에 소비자가 ★안 써도 되는★ 비용",
       "서비스 소비로 ★새로 생기는★ 비용(요금·교육 등)"
      ],
      [
       "위험 제거 / 위험 부과",
       "소비자에게서 ★없어지는★ 위험",
       "서비스 소비로 ★새로 생기는★ 위험(공급자 장애 등)"
      ]
     ]
    }
   },
   {
    "h": "사람·문서·구조 혼동쌍",
    "li": [
     "고객(Customer) = ★요구사항 정의·성과 책임★ / 사용자(User) = ★사용★ / 스폰서(Sponsor) = ★예산(자원) 승인★ — 한 사람이 셋 다일 수 있다.",
     "서비스 수준 관리(SLM, 관행) vs 서비스 수준 협약(SLA, ★문서화된 합의★). 지표는 녹색인데 고객은 불만 = ★워터멜론 SLA★.",
     "SVS(시스템 전체) ⊃ 서비스 가치 사슬(★6활동★ 운영 모델) ⊃ 가치 흐름(특정 시나리오의 ★활동 조합 경로★)."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-8",
  "t": "시험 유형·풀이 전략",
  "title": "문항 4유형과 풀이·시간 전략",
  "ref": "Candidate Syllabus 시험 형식 (S5) · PeopleCert 상품 페이지",
  "body": [
   {
    "h": "시험 형식 (ITIL 4 Foundation)",
    "li": [
     "40문항 4지선다 · 60분(비모국어 응시 ★25% 추가 = 75분★) · ★26/40(65%) 합격★ · Closed book · ★감점 없음★ → 빈칸 없이 모두 찍는다.",
     "BL1(Recall/Define) 9점 · BL2(Describe/Explain) 31점 — 대부분 ★설명·이해형★.",
     "최대 득점원 = LO7 관행 상세 7개(17점). 이 과목(목적 8·정의 7)은 LO6 7점 — ★짧게 외워 확실히 따는★ 영역.",
     "한국어 시험은 없다 — 영어 원어 키워드(purpose 동사·정의 핵심어)로 외워야 한다."
    ]
   },
   {
    "h": "문항 4유형별 풀이법",
    "tb": {
     "head": [
      "유형",
      "모양",
      "풀이 전략"
     ],
     "rows": [
      [
       "Standard",
       "\"What is the purpose of …?\"",
       "정의·목적의 ★핵심 동사★ 하나로 판정"
      ],
      [
       "Missing word",
       "\"Identify the missing word in the following sentence. A [?] is …\"",
       "빈칸 앞뒤 수식어로 ★정의 원문 키워드★ 매칭"
      ],
      [
       "List",
       "4개 진술 중 ★2개★ 정답, 보기는 조합(1,2 / 1,3 …)",
       "확실히 틀린 진술 1개 → 그 번호가 든 조합 소거"
      ],
      [
       "Negative",
       "\"Which is NOT …?\" (예외적 출제)",
       "NOT 표시 확인 → ★나머지 3개가 참★인지 점검"
      ]
     ]
    }
   },
   {
    "h": "시간·검토 전략",
    "li": [
     "문항당 ★약 1.5분★(60분/40문항). 1차 통독 40분 → 표시 문항 재검토 15분 → 마킹 확인 5분.",
     "보기 4개가 ★모두 다른 관행의 목적★이면 질문의 관행 이름만 보고 동사를 떠올린 뒤 보기를 읽는다.",
     "\"always / only / all / never\" 같은 절대어는 오답 신호인 경우가 많다(단, 정의 원문의 \"any\"는 정답 표현).",
     "모르는 문항도 감점이 없으니 ★반드시 응답★."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "V5 시행 일정·Bridge",
  "title": "두 시험의 병행 — ITIL 4 일몰 일정과 Bridge",
  "ref": "PeopleCert ITIL FAQ·V5 상품 페이지·'New ITIL Explained'(공식) / 출시일은 2차 출처",
  "body": [
   {
    "h": "2026-10 현재 버전 현황",
    "li": [
     "★ITIL 4 Foundation★ 과 ★ITIL Foundation (Version 5)★ 가 ★병행 시행★ 중 — 수험자는 둘 중 하나를 택해 응시한다.",
     "PeopleCert FAQ: \"현재 계획은 ★모든 ITIL 4 모듈을 2027-12-31에 일몰(sunset)★하는 것\" — '계획'이므로 ★예정★ 으로 기억한다.",
     "V5 프레임워크 공개 2026-01-29, Foundation(V5) 시험 출시 2026-02-12 — 교육기관(2차) 정보 [확인필요].",
     "상위 모듈(ITIL Experience·Product·Service 등)은 ★단계적(phased) 출시★ — 단계 출시는 공식, 개별 날짜는 [확인필요].",
     "★기존 ITIL 자격은 리셋되지 않고 유효★ — V5가 나왔다고 ITIL 4 자격이 무효가 되지 않는다."
    ]
   },
   {
    "h": "시험 형식 비교 (두 버전 거의 동일)",
    "tb": {
     "head": [
      "항목",
      "ITIL 4 Foundation",
      "ITIL Foundation (V5)"
     ],
     "rows": [
      [
       "문항·시간",
       "40문항 객관식 · 60분",
       "40문항 객관식 · 60분"
      ],
      [
       "합격선",
       "26/40 (65%)",
       "26/40 (65%)"
      ],
      [
       "오픈북",
       "Closed book",
       "Closed book"
      ],
      [
       "비모국어 추가시간",
       "25% → 75분",
       "[확인필요]"
      ],
      [
       "응시 언어",
       "12개 — ★한국어 없음★",
       "9개 — ★한국어 없음★"
      ],
      [
       "블룸 레벨",
       "BL1·BL2",
       "BL1·BL2 (2차)"
      ],
      [
       "문항 유형",
       "Standard·Missing word·List·Negative",
       "동일 4유형 (2차)"
      ],
      [
       "갱신",
       "3년 · 60 CPD 등",
       "3년 · 60 CPD 등"
      ]
     ]
    }
   },
   {
    "h": "ITIL Foundation Bridge (Version 5)",
    "li": [
     "대상: ★ITIL 4 Foundation 보유자★ — V5로 업데이트하는 ★1일★ 과정.",
     "Bridge 과정 자체도 ★2027-12-31 일몰★ 예정 — ITIL 4 일몰과 같은 날.",
     "Bridge 가격(약 US$263)은 2차 정보 [확인필요].",
     "ITIL 4 Foundation이 없는 사람은 Bridge가 아니라 V5 Foundation 본시험을 본다."
    ]
   },
   {
    "h": "어느 쪽을 볼까 — 선택 기준",
    "li": [
     "ITIL 4: ★공식 실러버스 원문 확보★(학습목표·배점 확정), 문제은행·교재 풍부 — 단 2027-12-31 일몰 예정.",
     "V5: 최신 버전, 일몰 걱정 없음 — 단 공식 v5.0 실러버스 세부(학습목표 번호·배점)는 이 사이트에서 [확인필요].",
     "★[v5 차이]★ 수험 핵심: V5는 ITIL 4의 '관행 상세 7개(17점)' 비중이 빠지고 ★가치 시스템(40%)·용어(30%)★ 로 무게가 옮겨갔다는 것이 2차 출처의 공통 서술."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "V5 실러버스 범주",
  "title": "V5 Foundation 7개 범주와 비중 (비공식 출처)",
  "ref": "교육기관 커리큘럼·실러버스 해설(2차) — 공식 v5.0 실러버스 원문 [확인필요]",
  "body": [
   {
    "h": "★주의★ 출처 등급",
    "li": [
     "아래 범주·비중은 ★비공식 출처★(교육기관 브로슈어·블로그 3곳의 일치 내용)다. PeopleCert 공식 v5.0 실러버스 PDF 원문은 확보하지 못했다 — [확인필요].",
     "공식 원문을 확보하면 이 표부터 갱신한다."
    ]
   },
   {
    "h": "7개 범주 · 비중 · 배점(40문항 환산) (비공식 출처: 교육기관 자료 — 공식 v5.0 실러버스 원문 [확인필요])",
    "tb": {
     "head": [
      "#",
      "범주",
      "비중",
      "배점"
     ],
     "rows": [
      [
       "1",
       "핵심 용어·정의 (Key ITIL terms and definitions)",
       "30%",
       "12"
      ],
      [
       "2",
       "제품·서비스 관리 4차원 (Four Dimensions of Product and Service Management)",
       "10%",
       "4"
      ],
      [
       "3",
       "제품·서비스 수명주기 (Product and Service Lifecycle)",
       "10%",
       "4"
      ],
      [
       "4",
       "★ITIL 가치 시스템 (ITIL Value System)★",
       "★40%★",
       "★16★"
      ],
      [
       "5",
       "가치흐름 식별·매핑·관리 (Value stream identification, mapping and management)",
       "5%",
       "2"
      ],
      [
       "6",
       "ITIL과 AI",
       "2.5%",
       "1"
      ],
      [
       "7",
       "ITIL과 타 프레임워크 (DevOps·PRINCE2 등)",
       "2.5%",
       "1"
      ]
     ]
    }
   },
   {
    "h": "비중이 말해 주는 공부 순서",
    "li": [
     "① ★가치 시스템 40%★ — 7원칙·거버넌스·가치사슬 핵심 정의·관행 구조·지속적 개선 모델.",
     "② ★용어 30%★ — 제품·서비스·재화(goods)·유틸리티·워런티·UX·지속가능성·서비스 관계·SLA 등.",
     "③ 4차원 10% + 수명주기 10% — 8활동 이름과 목적.",
     "④ 가치흐름 5%·AI 2.5%·타 프레임워크 2.5% — 합쳐 약 4문항, 개념 정의 수준.",
     "합 100% = 40문항. 합격선은 26문항 — 1·4범주(28문항)만 확실해도 합격권에 근접."
    ]
   },
   {
    "h": "범주별 주요 토픽 (2차 출처 요지)",
    "li": [
     "범주1: 디지털 제품/서비스, 재화(goods), ★사용자 경험(UX)·지속가능성(sustainability)★, 서비스 오퍼링(재화 이전·자원 접근·서비스 행위), 가치 공동창출, ★디지털 제품 벤더★, 기본/협력/파트너십 관계, 서비스 여정, 서비스 품질·서비스 수준·SLA.",
     "범주4: 5구성요소, 7원칙(명칭 ITIL 4와 동일), 거버넌스 EDM, 가치사슬 핵심 정의(인시던트·이벤트·문제·알려진 오류·★SRE·관측성·CI/CD★), 관행 그룹·지표·CSF, 지속적 개선 모델 7단계.",
     "범주6: AI·AI 성숙도·생성형 AI·에이전틱 AI·AI 거버넌스·ITIL AI Capability Model."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "제품·서비스 수명주기",
  "title": "제품·서비스 수명주기 8활동 (Discover ~ Support)",
  "ref": "V5 범주3 — 교육기관 실러버스 해설(2차) ",
  "body": [
   {
    "h": "8활동과 요지 (활동 목적 문구는 2차 요지 · 공식 원문 [확인필요])",
    "tb": {
     "head": [
      "#",
      "활동",
      "요지"
     ],
     "rows": [
      [
       "1",
       "발견 (Discover)",
       "기회·수요·이해관계자 요구를 탐색하고 이해"
      ],
      [
       "2",
       "설계 (Design)",
       "제품·서비스와 사용자 경험(UX)을 설계"
      ],
      [
       "3",
       "획득 (Acquire)",
       "필요한 자원·구성요소를 ★외부에서★ 확보"
      ],
      [
       "4",
       "구축 (Build)",
       "구성요소를 ★내부에서★ 만들고 통합"
      ],
      [
       "5",
       "전환 (Transition)",
       "새·변경된 제품·서비스를 운영 상태로 이전"
      ],
      [
       "6",
       "운영 (Operate)",
       "기술·구성요소를 정상 상태로 가동·유지"
      ],
      [
       "7",
       "제공 (Deliver)",
       "소비자에게 서비스를 제공해 가치 실현"
      ],
      [
       "8",
       "지원 (Support)",
       "사용자 문의·이슈를 처리해 서비스 이용을 지원"
      ]
     ]
    }
   },
   {
    "h": "성격",
    "li": [
     "8활동은 ★반복적·비선형★ — 나열 순서(Discover→…→Support)는 학습용 순서일 뿐, 실제로는 필요한 활동을 오가며 반복한다.",
     "★Acquire(획득) vs Build(구축)★ — 외부 조달 vs 내부 제작. ITIL 4 가치사슬의 'Obtain/build' 하나가 둘로 나뉜 것처럼 보이는 지점.",
     "★Operate vs Deliver vs Support★ — 기술 운영 / 소비자에게 가치 제공 / 사용자 지원. 세 개를 하나로 뭉뚱그리는 보기가 함정.",
     "ITIL 4 가치사슬 6활동(Plan·Improve·Engage·Design & transition·Obtain/build·Deliver & support)과 단어가 겹쳐 혼동 단골."
    ]
   },
   {
    "h": "수명주기 vs 가치사슬 — 혼동 주의",
    "li": [
     "수명주기 = ★제품·서비스가 거치는 8활동★(발견부터 지원까지).",
     "가치사슬 = 가치 창출 활동의 ★운영 모델★(ITIL 가치 시스템의 구성요소).",
     "V5에서 가치사슬 활동 구성이 ITIL 4의 6활동 유지인지, 8활동으로 재편됐는지 ★2차 출처끼리 상충★ — [확인필요]. 시험 대비는 '수명주기 8활동' 이름·요지를 확실히 외우는 데 집중."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "ITIL 가치 시스템·거버넌스",
  "title": "ITIL 가치 시스템(ITIL Value System)과 거버넌스",
  "ref": "V5 범주4(40%) — 2차 출처 / 지속적 개선 모델·EDM은 ITIL 4와 공통",
  "body": [
   {
    "h": "명칭 변화",
    "li": [
     "ITIL 4 ★서비스 가치 시스템(SVS, Service Value System)★ → V5 ★ITIL 가치 시스템(ITIL Value System)★ (2차).",
     "'서비스 관리' → ★'제품 및 서비스 관리(Product and Service Management)'★ — 4차원의 이름도 '제품·서비스 관리 4차원'.",
     "4차원 자체(조직과 사람·정보와 기술·파트너와 공급자·가치흐름과 프로세스)와 외부요인 ★PESTLE★ 는 그대로."
    ]
   },
   {
    "h": "5구성요소 (ITIL 4 SVS와 같은 골격)",
    "tb": {
     "head": [
      "구성요소",
      "역할 요지"
     ],
     "rows": [
      [
       "지침 원칙 (Guiding principles)",
       "어떤 상황에서도 의사결정을 이끄는 권고 7개 — 명칭 ITIL 4와 동일"
      ],
      [
       "거버넌스 (Governance)",
       "조직을 ★지시·통제★하는 수단 — EDM"
      ],
      [
       "가치사슬 (Value chain)",
       "가치 창출 활동의 운영 모델"
      ],
      [
       "관행 (Practices)",
       "업무 수행·목표 달성을 위한 조직 자원의 집합"
      ],
      [
       "지속적 개선 (Continual improvement)",
       "모든 수준에서 반복되는 개선 — 7단계 모델"
      ]
     ]
    }
   },
   {
    "h": "거버넌스 — 평가·지시·모니터 (EDM)",
    "li": [
     "★평가(Evaluate)★: 조직·전략·포트폴리오·관계를 평가.",
     "★지시(Direct)★: 전략·정책을 정하고 책임을 부여.",
     "★모니터(Monitor)★: 성과·정책 준수를 감시.",
     "V5는 거버넌스를 통제만이 아니라 가치 창출을 ★가능케 하는(enabling)★ 것으로 강조한다는 서술(2차) [확인필요].",
     "★거버넌스 ≠ 관리★ — 거버넌스는 방향 설정·감독(이사회급), 관리는 그 방향 안의 실행."
    ]
   },
   {
    "h": "지속적 개선 모델 7단계 (V5에서도 유지 — 2차)",
    "li": [
     "① 비전은 무엇인가(What is the vision?) → ② 지금 어디에 있는가(Where are we now?) → ③ 어디에 있고 싶은가(Where do we want to be?) → ④ 어떻게 갈 것인가(How do we get there?) → ⑤ 실행(Take action) → ⑥ 도달했는가(Did we get there?) → ⑦ 추진력을 어떻게 유지할까(How do we keep the momentum going?)."
    ]
   },
   {
    "h": "가치사슬 핵심 정의 — V5에서 새로 보이는 용어 (2차)",
    "li": [
     "기존: 인시던트·이벤트·릴리스·서비스 요청·문제·오류·알려진 오류.",
     "★SRE(Site Reliability Engineering, 사이트 신뢰성 엔지니어링)★ — 소프트웨어 엔지니어링 기법으로 운영 신뢰성을 다루는 접근(SLO·오류 예산).",
     "★관측성(Observability)★ — 시스템이 내보내는 데이터(로그·메트릭·트레이스)로 내부 상태를 추론할 수 있는 정도. 정해진 지표만 보는 모니터링보다 넓다.",
     "★CI/CD(Continuous Integration / Continuous Delivery·Deployment)★ — 지속적 통합 / 지속적 전달·배포.",
     "관행: 34개 명칭은 유지, 그룹이 3개(일반·서비스·기술 관리) → ★2개(일반 관리·제품과 서비스 관리)★ 로 재편 (2차) [확인필요]."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "가치흐름 매핑",
  "title": "가치흐름 식별·매핑·관리",
  "ref": "V5 범주5(5%) — 2차 출처 / 매핑 기법은 린(Lean) 일반 개념",
  "body": [
   {
    "h": "가치흐름(Value stream)이란",
    "li": [
     "조직이 제품·서비스를 만들어 소비자에게 ★가치를 전달하기 위해 거치는 일련의 단계★.",
     "★핵심(core) 가치흐름★ — 소비자에게 직접 가치를 전달(예: 신규 서비스 제공, 사용자 이슈 해결).",
     "★지원(enabling) 가치흐름★ — 핵심 가치흐름을 가능하게 하는 내부 흐름(예: 인력 채용, 도구 도입).",
     "가치사슬 = 활동의 '모델', 가치흐름 = 특정 시나리오에 맞춘 활동의 '경로'."
    ]
   },
   {
    "h": "매핑 절차 (2차 출처 요지)",
    "li": [
     "① 가치흐름 ★식별★(트리거와 가치 결과 정의) → ② ★현재 상태(As-Is)★ 매핑 → ③ ★분석★(대기·낭비·병목) → ④ ★미래 상태(To-Be)★ 설계 → ⑤ ★개선 계획★ 수립·실행."
    ]
   },
   {
    "h": "가치흐름 맵의 흔한 요소 (린 일반 개념)",
    "tb": {
     "head": [
      "요소",
      "뜻"
     ],
     "rows": [
      [
       "트리거 (Trigger)",
       "흐름을 시작시키는 수요·이벤트"
      ],
      [
       "단계 (Step)",
       "흐름을 이루는 활동 단위"
      ],
      [
       "처리 시간 (Process/Touch time)",
       "실제로 작업이 진행되는 시간"
      ],
      [
       "대기 시간 (Wait time)",
       "단계 사이에서 일이 멈춰 있는 시간"
      ],
      [
       "리드 타임 (Lead time)",
       "트리거부터 가치 전달까지 전체 경과 시간"
      ],
      [
       "가치 결과 (Value outcome)",
       "흐름이 끝나 소비자가 얻는 성과"
      ]
     ]
    }
   },
   {
    "h": "함정",
    "li": [
     "개선의 첫 대상은 대개 ★처리 시간이 아니라 대기 시간★ — 일이 기다리는 시간이 리드 타임의 큰 몫을 차지하는 경우가 많다.",
     "To-Be를 먼저 그리고 As-Is를 생략하는 것은 'Start where you are(현재 위치에서 시작)' 원칙 위반.",
     "구체 V5 맵 표기·용어는 공식 실러버스 원문 [확인필요]."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-6",
  "t": "AI·타 프레임워크",
  "title": "ITIL과 AI · 타 프레임워크 연계",
  "ref": "V5 범주6·7(각 2.5%) — 2차 출처",
  "body": [
   {
    "h": "AI 관련 용어 (범주6)",
    "li": [
     "★AI(인공지능)★ — 사람의 지능이 필요한 작업을 기계가 수행하도록 하는 기술 전반.",
     "★생성형 AI(Generative AI)★ — 학습한 데이터를 바탕으로 텍스트·이미지·코드 등 새 콘텐츠를 생성.",
     "★에이전틱 AI(Agentic AI)★ — 목표를 받아 계획을 세우고 도구를 써서 ★여러 단계를 자율적으로 수행★하는 AI.",
     "★AI 성숙도(AI maturity)★ — 조직이 AI를 도입·활용하는 수준의 단계.",
     "★AI 거버넌스★ — AI 사용의 책임·위험·윤리·규제 준수를 지시·통제하는 체계(EDM 사상 연장).",
     "★ITIL AI Capability Model★ — V5가 제시하는 AI 역량 모델. 구성 단계·명칭은 공식 원문 [확인필요]."
    ]
   },
   {
    "h": "타 프레임워크와의 관계 (범주7)",
    "tb": {
     "head": [
      "프레임워크",
      "무엇인가",
      "ITIL과의 관계"
     ],
     "rows": [
      [
       "DevOps",
       "개발·운영 협업과 자동화로 빠르고 안정적인 출시를 추구하는 문화·실천",
       "ITIL 관행(변경·릴리스·배포)을 CI/CD·자동화와 결합 — 대체가 아니라 ★보완★"
      ],
      [
       "PRINCE2",
       "PeopleCert(Axelos) 계열의 ★프로젝트 관리★ 방법론",
       "제품·서비스를 만드는 '프로젝트'를 관리 — ITIL은 서비스 생애 전반을 관리"
      ],
      [
       "PRINCE2 Agile",
       "PRINCE2에 애자일 방식을 결합한 지침",
       "반복·점진 개발과 ITIL 'Progress iteratively' 원칙이 맞물림"
      ],
      [
       "SRE",
       "엔지니어링으로 운영 신뢰성을 관리(SLO·오류 예산)",
       "가치사슬 핵심 정의로 등장 — 서비스 수준·인시던트 관리와 연계"
      ]
     ]
    }
   },
   {
    "h": "출제 감각",
    "li": [
     "범주6·7은 ★각 1문항 안팎★(2차 비중 2.5%) — 깊은 이론보다 ★정의·관계 1줄★ 을 묻는다.",
     "함정: \"DevOps는 ITIL을 대체한다\" / \"PRINCE2는 서비스 운영 프레임워크다\" — 둘 다 틀림.",
     "[v5 차이] ITIL 4 Foundation 실러버스에는 AI·타 프레임워크 범주가 ★별도 학습목표로 없다★."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-7",
  "t": "ITIL 4 대비 변경점",
  "title": "ITIL 4 대비 바뀐 점 — 한눈 비교",
  "ref": "PeopleCert 공식(일정·자격) + 교육기관 2차(내용) — 2차 항목 [확인필요]",
  "body": [
   {
    "h": "변경점 대조표",
    "tb": {
     "head": [
      "항목",
      "ITIL 4 Foundation",
      "ITIL Foundation (V5)",
      "근거"
     ],
     "rows": [
      [
       "관리 대상 표현",
       "서비스 관리",
       "★제품 및 서비스 관리★",
       "2차"
      ],
      [
       "시스템 이름",
       "서비스 가치 시스템(SVS)",
       "★ITIL 가치 시스템★",
       "2차"
      ],
      [
       "생애 관점",
       "가치사슬 6활동 중심",
       "★수명주기 8활동★ 추가(Discover~Support)",
       "2차"
      ],
      [
       "관행 출제",
       "15개 목적 + ★7개 상세(17점)★",
       "개별 관행 상세 빠짐 — 그룹·구조 수준",
       "2차 [확인필요]"
      ],
      [
       "관행 그룹",
       "3개(일반 14·서비스 17·기술 3)",
       "2개(일반 관리·제품과 서비스 관리)",
       "2차 [확인필요]"
      ],
      [
       "신규 범주",
       "—",
       "가치흐름 매핑·AI·타 프레임워크",
       "2차"
      ],
      [
       "신규 용어",
       "—",
       "UX·지속가능성·디지털 제품 벤더·SRE·관측성·CI/CD",
       "2차"
      ],
      [
       "응시 언어",
       "12개",
       "9개 (둘 다 한국어 없음)",
       "공식"
      ],
      [
       "일몰",
       "2027-12-31 예정",
       "—",
       "공식"
      ]
     ]
    }
   },
   {
    "h": "그대로 유지된 것 (오답 함정 — '바뀌었다'고 내는 보기)",
    "li": [
     "★7개 지침 원칙의 명칭★ — 동일.",
     "★4차원★ 명칭과 PESTLE 외부요인 — 동일(앞에 '제품·서비스 관리'가 붙을 뿐).",
     "★지속적 개선 모델 7단계★ — 유지.",
     "★34개 관행 명칭★ — 유지(그룹 구성만 변경, 2차).",
     "시험 형식 40문항·60분·65%·Closed book — 동일.",
     "기존 ITIL 자격은 ★리셋 없이 유효★(공식)."
    ]
   },
   {
    "h": "V5에서 강조되는 관점",
    "li": [
     "★제품(Product)★ 과 ★디지털★ — 서비스뿐 아니라 디지털 제품·재화(goods)까지 관리 대상으로 명시.",
     "★경험(Experience)★ — 유틸리티·워런티에 더해 사용자 경험(UX)을 가치 요소로 다룸(2차).",
     "★지속가능성(Sustainability)★ — 환경·사회적 영향도 가치 판단 요소(2차).",
     "★AI·자동화★ — 에이전틱 AI·AI 거버넌스까지 Foundation 범위에 포함."
    ]
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "정의·용어 기억(BL1) — 반드시 맞혀야 하는 문항",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "개념 이해·구분(BL2) — 합격선을 가르는 문항",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "상황 적용·헷갈리는 쌍 — 변별력 문항",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "ITIL 4에서 서비스(Service)의 정의로 가장 적절한 것은?",
  "c": [
   "서비스 형태로 고객에게 가치를 가능하게 하는 전문화된 조직 역량의 집합",
   "고객이 특정 비용·위험을 직접 관리하지 않고도 원하는 성과를 얻도록 하여 가치 공동창출을 가능하게 하는 수단",
   "특정 소비자 집단의 요구를 다루도록 설계된 서비스에 대한 공식 기술",
   "제공자가 소유한 자원의 소유권을 소비자에게 이전하는 거래"
  ],
  "a": 1,
  "e": "서비스는 성과를 촉진해 가치 공동창출을 가능하게 하는 '수단'이다. '조직 역량의 집합'은 서비스 관리, '공식 기술'은 서비스 오퍼링의 정의다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "What is the definition of 'service management'?",
  "c": [
   "A set of specialized organizational capabilities for enabling value for customers in the form of services",
   "A means of enabling value co-creation by facilitating outcomes that customers want to achieve",
   "A formal description of one or more services designed to address the needs of a target consumer group",
   "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation"
  ],
  "a": 0,
  "e": "서비스 관리는 '전문화된 조직 역량(capabilities)'의 집합이다. 'means of enabling value co-creation'은 서비스, 'joint activities'는 서비스 관계 관리의 정의다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "조직(Organization)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "목표 달성을 위해 자체 기능·책임·권한·관계를 가진다",
   "한 사람의 개인도 조직이 될 수 있다",
   "같은 조직이 관계에 따라 제공자 또는 소비자 역할을 할 수 있다",
   "조직은 반드시 법인 등록을 마친 다수 인원의 집단이어야 한다"
  ],
  "a": 3,
  "e": "조직은 목표 달성을 위한 기능·책임·권한·관계를 가진 '개인 또는 집단'이므로 1인도 가능하며 법적 형태와 무관하다. 나머지는 모두 옳은 설명이다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 2,
  "q": "제품(Product)의 정의로 가장 적절한 것은?",
  "c": [
   "소유권이 소비자에게 이전되는 물리적 재화",
   "제공자가 소비자의 요구에 맞춰 수행하는 행위",
   "소비자에게 가치를 제공하도록 설계된, 조직 자원의 구성",
   "서비스 수준 합의서에 기술된 목표치의 묶음"
  ],
  "a": 2,
  "e": "제품은 조직 자원의 구성(configuration of resources)이다. '소유권 이전 재화'는 오퍼링의 재화(goods), '수행하는 행위'는 서비스 행위(service actions)에 해당한다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 2,
  "q": "서비스 정의와 관련된 설명으로 옳지 않은 것은?",
  "c": [
   "서비스는 고객이 원하는 성과 달성을 촉진한다",
   "서비스 제공자가 단독으로 가치를 만들어 고객에게 전달한다",
   "고객은 특정 비용과 위험을 직접 관리하지 않아도 된다",
   "가치는 제공자와 소비자가 함께 창출한다"
  ],
  "a": 1,
  "e": "ITIL 4는 '가치 전달'이 아닌 '가치 공동창출' 관점이다. 제공자 단독으로 가치를 만들어 넘긴다는 서술은 구 관점의 함정이다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 2,
  "q": "Which statement about organizations in service relationships is CORRECT?",
  "c": [
   "The same organization can act as a service provider in one relationship and a service consumer in another",
   "An organization can be either a provider or a consumer, but never both",
   "Only external organizations can act as service providers",
   "Internal IT departments cannot have service relationships with business units"
  ],
  "a": 0,
  "e": "조직의 역할은 관계마다 정해지므로 한 조직이 제공자이자 소비자일 수 있다. 내부 IT 부서도 사업부서와 서비스 관계를 맺는 제공자가 될 수 있다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 3,
  "q": "'성과를 촉진하여 가치 공동창출을 가능하게 하는 수단(means)'은 다음 중 무엇의 정의인가?",
  "c": [
   "서비스 관리(Service management)",
   "서비스 오퍼링(Service offering)",
   "서비스 관계 관리(Service relationship management)",
   "서비스(Service)"
  ],
  "a": 3,
  "e": "'수단(means)'과 '가치 공동창출'이 서비스 정의의 키워드다. 서비스 관리는 '역량', 오퍼링은 '공식 기술', 서비스 관계 관리는 '공동 활동'이 키워드다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "Identify the missing word in the following sentence. A [?] is a configuration of an organization's resources designed to offer value for a consumer.",
  "c": [
   "service",
   "outcome",
   "product",
   "service offering"
  ],
  "a": 2,
  "e": "제품(product)이 '조직 자원의 구성'이다. 서비스 오퍼링은 서비스에 대한 공식 기술(formal description)이며, 제품을 기반으로 구성된다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "가치(Value)의 정의로 가장 적절한 것은?",
  "c": [
   "활동의 유형 또는 무형의 결과물",
   "어떤 것에 대해 인지된 편익·유용성·중요성",
   "특정 활동이나 자원에 지출된 금액",
   "제품·서비스가 제공하는 기능성"
  ],
  "a": 1,
  "e": "가치는 '인지된(perceived)' 편익·유용성·중요성으로 주관적이다. 결과물은 산출물, 지출 금액은 비용, 기능성은 유틸리티다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "산출물(Output)의 정의로 가장 적절한 것은?",
  "c": [
   "활동의 유형 또는 무형의 결과물",
   "하나 이상의 결과물로 가능해지는 이해관계자의 결과",
   "어떤 것에 대해 인지된 편익·유용성·중요성",
   "합의된 요구사항을 충족할 것이라는 보증"
  ],
  "a": 0,
  "e": "산출물은 활동의 deliverable이다. '이해관계자의 결과'는 성과(Outcome), '보증'은 워런티의 정의다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "Which is the definition of an 'outcome'?",
  "c": [
   "A tangible or intangible deliverable of an activity",
   "The perceived benefits, usefulness and importance of something",
   "The amount of money spent on a specific activity or resource",
   "A result for a stakeholder enabled by one or more outputs"
  ],
  "a": 3,
  "e": "성과는 하나 이상의 산출물로 가능해지는 이해관계자의 결과다. 'deliverable of an activity'는 산출물, 'perceived benefits'는 가치, 'money spent'는 비용이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "사내 온라인 교육 서비스에서 성과(Outcome)에 해당하지 않는 것은?",
  "c": [
   "직원의 업무 처리 역량 향상",
   "고객 문의 평균 처리 시간 단축",
   "제공된 강의 동영상 파일",
   "신규 직원의 업무 적응 기간 단축"
  ],
  "a": 2,
  "e": "강의 동영상 파일은 활동의 결과물인 산출물(Output)이다. 나머지는 산출물을 통해 이해관계자가 얻은 결과, 즉 성과다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "비용(Cost)의 정의로 가장 적절한 것은?",
  "c": [
   "피해나 손실을 일으킬 수 있는 가능한 사건",
   "특정 활동이나 자원에 지출된 금액",
   "서비스 소비를 위해 스폰서가 승인한 예산의 총액",
   "소비자가 인지하는 서비스의 중요성"
  ],
  "a": 1,
  "e": "비용은 특정 활동·자원에 쓰인 금액이다. '가능한 사건'은 위험, '인지된 중요성'은 가치의 요소이며, 스폰서의 예산 승인은 역할 정의와 관련된다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "클라우드 서비스를 이용하면서 소비자에게서 '제거되는 비용(costs removed)'의 예로 가장 적절한 것은?",
  "c": [
   "자체 서버 장비의 구매·유지 비용",
   "서비스 월 이용 요금",
   "사용자 교육 비용",
   "서비스 연결을 위한 네트워크 이용 비용"
  ],
  "a": 0,
  "e": "소비자가 직접 갖추지 않아도 되는 인력·기술·자원 비용이 제거되는 비용이다. 요금·교육·네트워크 이용 비용은 소비자에게 부과되는 비용(costs imposed)이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "Which of the following is NOT an example of a cost imposed on the service consumer?",
  "c": [
   "The price of the service",
   "Costs of training users",
   "Costs of network utilization",
   "The cost of hardware the consumer no longer needs to maintain"
  ],
  "a": 3,
  "e": "더 이상 유지할 필요가 없는 하드웨어 비용은 서비스로 '제거되는 비용'이다. 가격·교육·네트워크 이용 비용은 소비자에게 부과되는 비용이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "ITIL에서 위험(Risk)의 정의로 가장 적절한 것은?",
  "c": [
   "서비스가 계획되지 않게 중단되거나 품질이 저하된 상태",
   "활동의 결과물이 이해관계자의 기대에 미치지 못한 상태",
   "피해·손실을 일으키거나 목표 달성을 어렵게 할 수 있는 가능한 사건",
   "하나 이상 인시던트의 근본 원인"
  ],
  "a": 2,
  "e": "위험은 피해·손실 또는 목표 달성 저해를 일으킬 수 있는 '가능한 사건'이며 결과의 불확실성으로도 정의된다. 계획 외 중단은 인시던트, 인시던트의 원인은 문제다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "위험(Risk)에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "위험은 결과의 불확실성으로도 정의되며 긍정적 결과도 포함할 수 있다",
   "위험 관리는 전적으로 서비스 제공자의 몫이며 소비자는 관여하지 않는다",
   "서비스는 소비자로부터 일부 위험을 제거하고 일부 위험을 부과할 수 있다",
   "소비자는 요구사항 정의에 참여해 위험 감소에 기여할 수 있다"
  ],
  "a": 1,
  "e": "소비자도 요구사항 정의 참여, 핵심성공요인·제약 전달, 필요 자원 접근 보장으로 위험 감소에 기여한다. 나머지는 옳은 설명이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "Which TWO are ways a service consumer can contribute to the reduction of risk?\n1. Actively participating in the definition of requirements and the clarification of outcomes\n2. Clearly communicating critical success factors and constraints\n3. Transferring all ownership of risk to the service provider\n4. Avoiding involvement once the service agreement is signed",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 4",
   "3 and 4"
  ],
  "a": 0,
  "e": "소비자는 요구사항 정의·성과 명확화에 능동 참여하고, CSF와 제약을 명확히 전달해 위험 감소에 기여한다. 위험을 전부 넘기거나 계약 후 관여를 피하는 것은 오히려 위험을 키운다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "가치 공동창출(value co-creation)에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "가치는 제공자가 만들어 소비자에게 일방적으로 전달된다",
   "가치는 계약 금액으로 객관적으로 측정된다",
   "가치는 소비자만 정의하며 제공자는 관여하지 않는다",
   "가치는 제공자와 소비자의 능동적 협업으로 함께 만들어진다"
  ],
  "a": 3,
  "e": "ITIL 4는 소비자를 수동적 수령자가 아닌 가치 창출의 능동 참여자로 본다. 가치는 주관적이므로 계약 금액만으로 객관 측정되지 않는다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 3,
  "q": "가치에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "가치는 주관적이며 이해관계자마다 다르게 인지될 수 있다",
   "서비스 제공자도 수익·평판 등의 가치를 얻는다",
   "가치는 모든 이해관계자에게 동일하게 측정되는 객관적인 값이다",
   "소비자는 성과 달성과 비용·위험의 최적화를 함께 고려해 가치를 판단한다"
  ],
  "a": 2,
  "e": "가치는 '인지된' 편익이므로 주관적이며 이해관계자마다 다르다. 제공자·직원·사회 등도 각자 다른 형태의 가치를 얻는다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 3,
  "q": "A service provider measures its success solely by the number of reports it delivers each month. Which concept is the provider actually measuring?",
  "c": [
   "Outcome",
   "Output",
   "Value",
   "Utility"
  ],
  "a": 1,
  "e": "보고서 건수는 활동의 결과물, 즉 산출물(output)이다. 소비자가 그 보고서로 얻은 결과(outcome)나 인지된 가치(value)를 측정한 것이 아니다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "Identify the missing word in the following sentence. An [?] is a tangible or intangible deliverable of an activity.",
  "c": [
   "output",
   "outcome",
   "asset",
   "offering"
  ],
  "a": 0,
  "e": "'deliverable of an activity'는 산출물(output)의 정의 키워드다. outcome은 산출물로 가능해지는 이해관계자의 결과다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "서비스 제공자의 직원(employees)이 얻는 가치의 예로 가장 적절한 것은?",
  "c": [
   "배당금 같은 재무적 이익",
   "고용 창출과 세수 증가",
   "편익 달성과 비용·위험의 최적화",
   "금전·비금전적 인센티브와 경력 개발"
  ],
  "a": 3,
  "e": "제공자 직원은 인센티브·경력·전문성 개발 등의 가치를 얻는다. 배당은 주주, 고용·세수는 사회, 편익 달성·비용·위험 최적화는 서비스 소비자의 가치다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 1,
  "q": "유틸리티(Utility)의 정의로 가장 적절한 것은?",
  "c": [
   "제품·서비스가 합의된 요구사항을 충족할 것이라는 보증",
   "서비스 소비를 위해 승인된 예산",
   "특정 요구를 충족하기 위해 제품·서비스가 제공하는 기능성",
   "특정 소비자 집단을 위한 서비스의 공식 기술"
  ],
  "a": 2,
  "e": "유틸리티는 기능성(functionality), 즉 '무엇을 하는가'다. '합의된 요구사항 충족 보증'은 워런티의 정의다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 1,
  "q": "Which is the definition of 'warranty'?",
  "c": [
   "The functionality offered by a product or service to meet a particular need",
   "Assurance that a product or service will meet agreed requirements",
   "A result for a stakeholder enabled by one or more outputs",
   "A possible event that could cause harm or loss"
  ],
  "a": 1,
  "e": "워런티는 합의된 요구사항을 충족한다는 보증(assurance)이다. 'functionality'는 유틸리티, 'result for a stakeholder'는 성과, 'possible event'는 위험이다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 1,
  "q": "'목적 적합성(fit for purpose)'과 가장 관련 깊은 개념은?",
  "c": [
   "유틸리티(Utility)",
   "워런티(Warranty)",
   "비용(Cost)",
   "위험(Risk)"
  ],
  "a": 0,
  "e": "유틸리티는 '무엇을 하는가', 즉 목적 적합성이다. 워런티는 '얼마나 잘 수행하는가', 즉 사용 적합성(fit for use)이다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "다음 중 워런티(Warranty) 측면에 해당하지 않는 것은?",
  "c": [
   "업무 시간 중 가용성 99.9% 보장",
   "동시 접속 5,000명 처리 용량 확보",
   "재해 시 4시간 내 서비스 복구",
   "급여 계산 기능의 제공"
  ],
  "a": 3,
  "e": "급여 계산 기능은 서비스가 '무엇을 하는가'인 유틸리티다. 가용성·용량·연속성은 '얼마나 잘'에 해당하는 워런티 측면이다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "Which TWO are typically associated with warranty?\n1. Availability\n2. A new reporting feature\n3. Security\n4. Automatic payroll calculation",
  "c": [
   "1 and 2",
   "2 and 4",
   "1 and 3",
   "3 and 4"
  ],
  "a": 2,
  "e": "가용성과 보안은 서비스가 얼마나 잘 수행하는지를 나타내는 워런티 측면이다. 보고 기능·급여 계산은 서비스가 무엇을 하는지, 즉 유틸리티다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "유틸리티와 워런티의 관계로 옳은 것은?",
  "c": [
   "유틸리티가 충족되면 워런티는 선택 사항이다",
   "가치를 창출하려면 유틸리티와 워런티가 모두 충족되어야 한다",
   "워런티가 높으면 유틸리티가 부족해도 가치가 창출된다",
   "유틸리티와 워런티는 같은 개념을 다르게 부르는 말이다"
  ],
  "a": 1,
  "e": "기능(유틸리티)과 그 기능이 합의 수준으로 수행된다는 보증(워런티)이 모두 있어야 가치가 생긴다. 어느 한쪽만으로는 소비자가 원하는 성과를 얻을 수 없다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 3,
  "q": "유틸리티와 워런티에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "워런티는 서비스가 '무엇을 하는가'를, 유틸리티는 '얼마나 잘 수행하는가'를 나타낸다",
   "유틸리티는 소비자의 성과를 지원하거나 제약을 제거하는 기능이다",
   "워런티는 소비자 요구에 맞춰 합의된 서비스 수준과 관련된다",
   "워런티는 가용성·용량·보안·연속성 등으로 표현된다"
  ],
  "a": 0,
  "e": "설명이 뒤바뀌었다. 유틸리티가 '무엇을 하는가(what)', 워런티가 '얼마나 잘(how well)'이다. 나머지는 옳은 설명이다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "A cloud file-sharing service offers sharing and version history features, but it is frequently unavailable during business hours. Which statement is CORRECT?",
  "c": [
   "The service provides warranty but lacks utility",
   "The service lacks both utility and warranty",
   "The service delivers full value because the features exist",
   "The service provides utility but lacks adequate warranty"
  ],
  "a": 3,
  "e": "공유·버전 이력 기능은 유틸리티로 충족되었지만, 업무 시간 중 잦은 중단은 가용성, 즉 워런티 부족이다. 둘 다 있어야 가치가 생기므로 기능만으로 완전한 가치를 낸다고 볼 수 없다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "유틸리티(Utility)가 소비자에게 가치를 주는 두 가지 방식으로 옳은 것은?",
  "c": [
   "가용성 보장과 용량 확보",
   "비용 제거와 위험 부과",
   "소비자의 성과(performance) 지원 또는 제약(constraint) 제거",
   "산출물 생성과 성과 측정"
  ],
  "a": 2,
  "e": "유틸리티는 소비자의 성과를 지원하거나 제약을 제거하는 기능으로 표현된다. 가용성·용량은 워런티 측면이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "고객·사용자·스폰서에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "고객은 서비스 요구사항을 정의하고 소비 성과에 책임지는 사람이다",
   "스폰서는 서비스를 일상적으로 사용하는 사람이다",
   "사용자는 서비스를 사용하는 사람이다",
   "한 사람이 고객·사용자·스폰서 역할을 겸할 수 있다"
  ],
  "a": 1,
  "e": "스폰서는 서비스 소비를 위한 예산을 승인하는 사람이다. 서비스를 사용하는 사람은 사용자다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "Identify the missing word in the following sentence. A [?] is a person who authorizes budget for service consumption.",
  "c": [
   "sponsor",
   "customer",
   "user",
   "supplier"
  ],
  "a": 0,
  "e": "예산 승인(authorizes budget)은 스폰서의 정의 키워드다. 고객은 요구사항 정의·성과 책임, 사용자는 서비스 사용이 키워드다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스 요구사항을 정의하고 서비스 소비의 성과에 책임을 지는 사람은?",
  "c": [
   "사용자(User)",
   "스폰서(Sponsor)",
   "서비스 제공자(Service provider)",
   "고객(Customer)"
  ],
  "a": 3,
  "e": "요구사항 정의와 성과 책임은 고객의 정의다. 사용자는 사용, 스폰서는 예산 승인으로 정의된다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "영업본부장이 신규 CRM 서비스의 요구사항을 정의하고 성과를 책임지며, CFO가 서비스 비용 예산을 승인하고, 영업사원들이 매일 CRM을 사용한다. CFO의 역할은?",
  "c": [
   "고객(Customer)",
   "사용자(User)",
   "스폰서(Sponsor)",
   "서비스 제공자(Service provider)"
  ],
  "a": 2,
  "e": "예산을 승인하는 CFO는 스폰서다. 요구사항 정의·성과 책임을 진 영업본부장이 고객, 매일 사용하는 영업사원이 사용자다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "An individual buys a personal streaming subscription, chooses the plan, pays for it and watches content. Which statement is CORRECT?",
  "c": [
   "These roles must always be held by different people for segregation of duties",
   "One person can act as customer, user and sponsor at the same time",
   "A sponsor cannot also be a user of the same service",
   "Only organizations, not individuals, can be customers"
  ],
  "a": 1,
  "e": "개인 소비자는 요구 정의(고객)·예산 지불 승인(스폰서)·사용(사용자)을 모두 겸한다. ITIL은 세 역할의 분리를 의무로 두지 않는다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스 오퍼링(Service offering)의 정의로 가장 적절한 것은?",
  "c": [
   "특정 소비자 집단의 요구를 다루도록 설계된 하나 이상의 서비스에 대한 공식 기술",
   "제공자와 소비자가 지속적 가치 공동창출을 보장하기 위해 수행하는 공동 활동",
   "서비스 형태로 고객에게 가치를 가능하게 하는 조직 역량",
   "소비자에게 가치를 제공하도록 설계된 조직 자원의 구성"
  ],
  "a": 0,
  "e": "서비스 오퍼링은 대상 소비자 집단을 위한 서비스의 '공식 기술(formal description)'이다. 공동 활동은 서비스 관계 관리, 조직 역량은 서비스 관리, 자원의 구성은 제품이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스 오퍼링을 구성하는 요소로 옳은 것은?",
  "c": [
   "유틸리티 · 워런티 · 가치",
   "서비스 제공 · 서비스 소비 · 서비스 관계 관리",
   "고객 · 사용자 · 스폰서",
   "재화(goods) · 자원 접근(access to resources) · 서비스 행위(service actions)"
  ],
  "a": 3,
  "e": "오퍼링은 재화·자원 접근·서비스 행위를 포함할 수 있다. '제공·소비·관계 관리'는 서비스 관계의 구성요소이고, '고객·사용자·스폰서'는 소비자 측 역할이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "In a service offering, which component involves ownership being transferred to the consumer?",
  "c": [
   "Access to resources",
   "Service actions",
   "Goods",
   "Service level agreement"
  ],
  "a": 2,
  "e": "재화(goods)는 소유권이 소비자에게 이전되고 이후 사용 책임도 소비자가 진다. 자원 접근은 소유권 이전 없이 합의 조건 내 접근만 허용한다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "모바일 통신 서비스 오퍼링에서 '자원 접근(access to resources)'에 해당하는 것은?",
  "c": [
   "구매한 휴대폰 단말기",
   "이동통신망 접속 권한",
   "단말기 수리 지원",
   "상담원의 요금제 변경 처리"
  ],
  "a": 1,
  "e": "통신망은 소유권 이전 없이 접근만 허용되는 자원이다. 단말기는 소유권이 이전되는 재화, 수리 지원·요금제 변경은 제공자가 수행하는 서비스 행위다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 3,
  "q": "서비스 오퍼링에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "자원 접근(access to resources)에서는 자원의 소유권이 소비자에게 이전된다",
   "재화는 소유권이 이전되며 이후 사용 책임은 소비자에게 있다",
   "서비스 행위는 제공자가 소비자 요구에 맞춰 수행한다",
   "같은 제품을 기반으로 소비자 집단마다 다른 오퍼링을 구성할 수 있다"
  ],
  "a": 0,
  "e": "자원 접근은 소유권이 이전되지 않고 합의된 조건 안에서 접근만 허용된다. 소유권 이전은 재화의 특징이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "제공자와 소비자가 합의·가용한 서비스 오퍼링을 기반으로 지속적인 가치 공동창출을 보장하기 위해 수행하는 공동 활동은?",
  "c": [
   "서비스 제공(Service provision)",
   "서비스 소비(Service consumption)",
   "서비스 수준 관리(Service level management)",
   "서비스 관계 관리(Service relationship management)"
  ],
  "a": 3,
  "e": "'공동 활동'과 '지속적 가치 공동창출'이 서비스 관계 관리의 키워드다. 제공·소비는 각각 한쪽 조직이 수행하는 활동이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "Which of the following is part of 'service provision'?",
  "c": [
   "Management of the consumer's resources needed to consume the service",
   "Receiving (acquiring) goods",
   "Ensuring access to the provider's resources for users",
   "Users requesting service actions from the provider"
  ],
  "a": 2,
  "e": "제공자 자원에 대한 사용자 접근 보장은 서비스 제공 활동이다. 소비자 자원 관리·재화 수령·서비스 행위 요청은 서비스 소비 활동이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "서비스 소비(Service consumption) 활동에 해당하지 않는 것은?",
  "c": [
   "서비스 소비에 필요한 소비자 자원의 관리",
   "합의된 서비스 행위의 이행",
   "사용자의 서비스 행위 요청",
   "재화의 수령"
  ],
  "a": 1,
  "e": "합의된 서비스 행위를 이행하는 것은 제공자의 서비스 제공(provision) 활동이다. 나머지는 소비자가 수행하는 소비 활동이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스 관계(service relationship)를 구성하는 세 가지 요소로 옳은 것은?",
  "c": [
   "서비스 제공 · 서비스 소비 · 서비스 관계 관리",
   "계획 · 구축 · 운영",
   "고객 · 사용자 · 스폰서",
   "재화 · 자원 접근 · 서비스 행위"
  ],
  "a": 0,
  "e": "서비스 관계는 제공·소비·관계 관리로 구성된다. 재화·자원 접근·서비스 행위는 서비스 오퍼링의 구성요소다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 3,
  "q": "Which statement about service relationships is INCORRECT?",
  "c": [
   "Service relationships are established between organizations to co-create value",
   "A service consumer may use resources gained from a service to provide services to its own consumers",
   "Service relationships include service provision, service consumption and service relationship management",
   "Service relationship management is performed solely by the service provider"
  ],
  "a": 3,
  "e": "서비스 관계 관리는 제공자와 소비자의 공동(joint) 활동이다. 소비자가 서비스로 얻은 자원으로 다시 제공자가 되는 연쇄(서비스 체인)는 옳은 설명이다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 1,
  "q": "지침 원칙(guiding principle)의 정의로 가장 적절한 것은?",
  "c": [
   "특정 프로세스에서 반드시 따라야 하는 단계별 필수 절차",
   "규제 기관이 요구하는 의무 준수 규정",
   "목표·전략·작업 유형·관리 구조가 바뀌어도 모든 상황에서 조직을 안내하는 권고사항",
   "특정 프로젝트 기간에만 적용되는 임시 지침"
  ],
  "a": 2,
  "e": "지침 원칙은 보편적·지속적인 '권고사항'이다. 특정 프로세스의 필수 절차나 규제 의무, 한시적 지침이 아니다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 2,
  "q": "Which of the following is NOT one of the ITIL 4 guiding principles?",
  "c": [
   "Start where you are",
   "Manage by stages",
   "Keep it simple and practical",
   "Think and work holistically"
  ],
  "a": 1,
  "e": "'Manage by stages'는 PRINCE2의 원칙이다. ITIL 4의 7원칙은 Focus on value, Start where you are, Progress iteratively with feedback, Collaborate and promote visibility, Think and work holistically, Keep it simple and practical, Optimize and automate다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 2,
  "q": "지침 원칙의 성격에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "7개 원칙은 서로 독립적이므로 한 번에 하나만 적용해야 한다",
   "원칙은 보편적이고 지속적인 권고사항이다",
   "모든 원칙이 모든 상황에 똑같이 관련되지는 않으므로 관련성을 검토한다",
   "원칙은 서로 상호작용하므로 함께 고려한다"
  ],
  "a": 0,
  "e": "원칙은 상호작용하며 상황에 맞게 여러 개를 함께 적용한다. 하나씩만 적용한다는 서술은 함정이다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 3,
  "q": "ITIL 지침 원칙과 Agile·DevOps·Lean 등 다른 방법론의 관계에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "ITIL 원칙을 채택하면 다른 방법론은 사용할 수 없다",
   "ITIL 원칙이 다른 방법론의 원칙을 대체하도록 설계되었다",
   "ITIL v3 프로세스 단계를 원칙 형태로 바꾼 것이다",
   "다른 방법론의 원칙과 공통 메시지를 공유하여 함께 적용하기 쉽다"
  ],
  "a": 3,
  "e": "ITIL 4 지침 원칙은 Agile·DevOps·Lean 등에 반영된 메시지와 공통점이 많아 통합 적용을 돕는다. 다른 방법론을 배제하거나 대체하려는 것이 아니다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 3,
  "q": "지침 원칙의 상호작용에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "'현재 위치에서 시작'은 '최적화·자동화'와 상충하므로 함께 쓰지 않는다",
   "'협업과 가시성 증진'은 '단순·실용 유지'와 충돌하므로 둘 중 하나를 택한다",
   "반복 진행 시 각 반복이 가치에 집중해야 하므로 '반복 진행'과 '가치에 집중'은 함께 적용된다",
   "'총체적 사고·작업'을 적용하면 다른 원칙은 고려할 필요가 없다"
  ],
  "a": 2,
  "e": "원칙들은 서로 보완한다. 각 반복은 가치 창출에 초점을 둬야 하고, 최적화 전에는 현재 상태를 평가하는 식으로 함께 쓰인다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 1,
  "q": "Which guiding principle states that everything the organization does should link, directly or indirectly, to value for itself, its customers and other stakeholders?",
  "c": [
   "Start where you are",
   "Focus on value",
   "Think and work holistically",
   "Keep it simple and practical"
  ],
  "a": 1,
  "e": "모든 활동을 이해관계자 가치에 연결하라는 것이 Focus on value의 핵심이다. Think and work holistically는 전체 시스템 관점을 강조한다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 1,
  "q": "'가치에 집중(Focus on value)' 원칙을 적용하는 방법으로 가장 적절한 것은?",
  "c": [
   "서비스 소비자가 누구인지 파악하고 소비자 관점에서 가치를 이해한다",
   "현재 서비스·프로세스를 직접 관찰해 재사용할 요소를 찾는다",
   "작업을 작은 단위로 나누고 반복마다 피드백을 구한다",
   "가치를 만들지 않는 단계를 제거해 절차를 줄인다"
  ],
  "a": 0,
  "e": "Focus on value는 소비자를 식별하고 소비자의 가치 관점을 이해하는 데서 출발한다. 나머지는 각각 Start where you are, Progress iteratively, Keep it simple의 내용이다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "'가치에 집중' 원칙에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "모든 활동은 직·간접적으로 이해관계자의 가치에 연결되어야 한다",
   "고객 경험(CX)과 사용자 경험(UX)이 인지된 가치에 영향을 준다",
   "일상 운영 활동과 개선 과제 모두에서 가치에 집중한다",
   "가치는 서비스 제공자의 내부 효율 지표로 정의한다"
  ],
  "a": 3,
  "e": "가치는 소비자가 인지하는 것이므로 제공자 내부 효율만으로 정의하지 않는다. CX·UX는 가치 인식에 영향을 주는 요소로 강조된다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "An organization plans to replace its service management tool. The existing tool contains useful workflows that work well. Which guiding principle advises assessing and reusing what already exists?",
  "c": [
   "Optimize and automate",
   "Collaborate and promote visibility",
   "Start where you are",
   "Progress iteratively with feedback"
  ],
  "a": 2,
  "e": "기존 서비스·프로세스·도구를 평가해 재사용할 것을 찾고 백지에서 다시 만드는 것을 피하라는 것이 Start where you are다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 3,
  "q": "'현재 위치에서 시작(Start where you are)' 원칙에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "현재 상태를 직접 관찰하여 정확히 파악한다",
   "편향을 피하기 위해 기존 서비스와 방식은 모두 폐기하고 새로 설계한다",
   "측정 데이터는 편향될 수 있으므로 직접 관찰로 보완한다",
   "재사용할 수 있는 기존 요소를 식별한다"
  ],
  "a": 1,
  "e": "Start where you are는 처음부터 재구축하는 것을 지양하고 기존 자산의 재사용을 권고한다. 측정은 중요하지만 직접 관찰로 보완해야 한다는 것도 이 원칙의 내용이다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 1,
  "q": "Which statement about 'Progress iteratively with feedback' is CORRECT?",
  "c": [
   "Feedback should be sought before, during and after each iteration",
   "Feedback should be collected only after the whole initiative is completed",
   "Large initiatives should be delivered in a single release to reduce overhead",
   "Iterations do not need clear objectives because feedback will set them"
  ],
  "a": 0,
  "e": "반복 전·중·후에 피드백을 구해 방향을 조정한다. 큰 과제도 관리 가능한 단위로 나누며 각 반복은 명확한 목표를 가져야 한다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "'피드백 기반 반복 진행' 원칙에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "큰 과제도 관리 가능한 작은 단위로 나누어 수행한다",
   "상황이 바뀌면 반복의 방향을 재평가한다",
   "각 반복도 전체 과제의 큰 그림을 유지해야 한다",
   "피드백은 전체 과제를 완료한 뒤 한 번에 수집하는 것이 효율적이다"
  ],
  "a": 3,
  "e": "피드백은 반복의 전·중·후에 지속적으로 구한다. 완료 후 일괄 수집은 이 원칙과 반대다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 3,
  "q": "Which TWO statements about 'Progress iteratively with feedback' are CORRECT?\n1. Each iteration should be manageable so that it can be completed in a timely manner\n2. Feedback loops help to understand how end users perceive value\n3. Working in iterations removes the need for a holistic view of the initiative\n4. Feedback should come only from senior management",
  "c": [
   "1 and 3",
   "2 and 4",
   "1 and 2",
   "3 and 4"
  ],
  "a": 2,
  "e": "반복은 적시에 끝낼 수 있게 관리 가능한 크기여야 하고, 피드백 루프는 최종 사용자의 가치 인식을 파악하게 한다. 반복해도 전체 그림은 유지해야 하며 피드백은 다양한 이해관계자에게서 구한다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "'협업과 가시성 증진(Collaborate and promote visibility)' 원칙에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "사일로보다 협력과 협업이 더 나은 결과를 낸다",
   "협업이란 모든 이해관계자의 만장일치 합의를 얻는 것이다",
   "적절한 이해관계자를 적절한 시점에 참여시킨다",
   "작업의 가시성을 높여 병목과 낭비를 식별한다"
  ],
  "a": 1,
  "e": "협업이 합의(consensus)를 의미하지는 않는다. 나머지는 사일로 해소·이해관계자 참여·가시성 확보로 모두 이 원칙의 내용이다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 1,
  "q": "Which guiding principle emphasizes that decisions should be made on visible data and that work should be made transparent to identify bottlenecks and waste?",
  "c": [
   "Collaborate and promote visibility",
   "Keep it simple and practical",
   "Focus on value",
   "Start where you are"
  ],
  "a": 0,
  "e": "작업과 정보를 가시화해 데이터 기반으로 결정하고 병목·낭비를 드러내는 것은 Collaborate and promote visibility의 내용이다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "'총체적 사고·작업(Think and work holistically)' 원칙에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "어떤 서비스나 요소도 단독으로 존재하지 않는다",
   "서비스 관리의 4차원을 모두 고려한다",
   "시스템 요소 간 상호작용의 패턴을 찾는다",
   "각 팀이 자기 구성요소만 최적화하면 전체 서비스 가치도 극대화된다"
  ],
  "a": 3,
  "e": "부분 최적화의 합이 전체 최적화가 되지 않는다는 것이 총체적 사고의 출발점이다. 4차원 고려·상호작용 패턴 파악은 이 원칙의 적용 방법이다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "A team introducing a new monitoring tool also reviews staff training, process changes and supplier contracts before go-live. Which guiding principle is being applied MOST directly?",
  "c": [
   "Keep it simple and practical",
   "Start where you are",
   "Think and work holistically",
   "Optimize and automate"
  ],
  "a": 2,
  "e": "도구(정보와 기술)뿐 아니라 사람·프로세스·공급자까지 함께 검토하는 것은 4차원을 모두 고려하는 Think and work holistically의 적용이다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 1,
  "q": "'단순·실용 유지(Keep it simple and practical)' 원칙의 핵심으로 가장 적절한 것은?",
  "c": [
   "모든 활동을 자동화하여 사람의 개입을 없앤다",
   "최소한의 단계로 목표를 달성하고 가치를 만들지 않는 활동은 제거한다",
   "모든 이해관계자의 동의를 얻은 뒤 착수한다",
   "현재 프로세스를 모두 문서화한 뒤 개선을 시작한다"
  ],
  "a": 1,
  "e": "Keep it simple은 최소 단계·결과 기반 사고로 가치 없는 활동을 걷어내는 원칙이다. 전면 자동화나 만장일치는 이 원칙의 내용이 아니다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 3,
  "q": "'단순·실용 유지' 원칙에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "모든 예외 상황을 처리할 수 있도록 규칙을 빠짐없이 설계하는 것이 바람직하다",
   "더 적게 하되 더 잘하는(do fewer things, but do them better) 것을 지향한다",
   "관련된 사람들의 시간을 존중한다",
   "이해하기 쉬운 방식일수록 채택될 가능성이 높다"
  ],
  "a": 0,
  "e": "예외마다 규칙을 만들면 프로세스가 지나치게 복잡해지므로 지양한다. 나머지는 이 원칙의 핵심 메시지다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 1,
  "q": "According to the guiding principle 'Optimize and automate', what should happen BEFORE automation?",
  "c": [
   "All human activities should be identified for replacement",
   "An automation tool should be purchased",
   "A service level agreement for the automation should be signed",
   "The work should be optimized as far as possible"
  ],
  "a": 3,
  "e": "먼저 최적화하고 그다음 자동화한다. 비효율적인 작업을 자동화하면 비효율이 빨라질 뿐이다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 3,
  "q": "'최적화·자동화' 원칙에서 사람의 개입에 대한 관점으로 가장 적절한 것은?",
  "c": [
   "사람의 판단을 대체하기 위해 모든 작업을 자동화한다",
   "자동화는 최적화가 끝난 뒤에도 가능한 한 피한다",
   "사람의 개입은 실제로 가치를 더하는 곳에서만 이루어지도록 한다",
   "자동화는 반복 빈도가 낮은 복잡한 작업부터 적용한다"
  ],
  "a": 2,
  "e": "반복적·표준화된 작업은 자동화하고 사람은 가치를 더하는 곳에 집중시킨다. 모든 작업의 전면 자동화나 자동화 회피 모두 원칙과 다르다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "Which TWO are steps on the road to optimization?\n1. Understand and agree the context in which the proposed optimization exists\n2. Assess the current state of the proposed optimization\n3. Automate all manual activities before analyzing them\n4. Exclude stakeholders to speed up decisions",
  "c": [
   "1 and 3",
   "1 and 2",
   "2 and 4",
   "3 and 4"
  ],
  "a": 1,
  "e": "최적화는 맥락 이해·합의, 현재 상태 평가, 미래 상태 합의, 이해관계자 참여 보장, 반복적 실행, 지속 모니터링으로 진행된다. 분석 없는 자동화와 이해관계자 배제는 원칙에 어긋난다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "Which of the following is NOT a recommendation of the guiding principle 'Optimize and automate'?",
  "c": [
   "Automate first, then optimize the automated workflow",
   "Simplify and optimize before automating",
   "Use automation for frequent and repetitive tasks",
   "Define metrics to evaluate the outcome of optimization and automation"
  ],
  "a": 0,
  "e": "Optimize and automate는 최적화를 먼저 수행한 뒤 자동화한다. 자동화 후 최적화는 비효율을 고착시키는 순서 바꿔치기 함정이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "서비스 관리 4차원에 해당하지 않는 것은?",
  "c": [
   "조직과 사람",
   "정보와 기술",
   "파트너와 공급자",
   "프로젝트와 포트폴리오"
  ],
  "a": 3,
  "e": "4차원은 조직과 사람·정보와 기술·파트너와 공급자·가치 흐름과 프로세스다. '프로젝트와 포트폴리오'는 차원이 아니다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "Which is one of the four dimensions of service management?",
  "c": [
   "Governance and compliance",
   "Products and services",
   "Value streams and processes",
   "Opportunity and demand"
  ],
  "a": 2,
  "e": "4차원 중 하나는 Value streams and processes 다. Governance 는 SVS 구성요소, Opportunity and demand 는 SVS 입력이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "조직의 공식 구조, 문화, 역할과 책임, 인력 역량을 다루는 차원은?",
  "c": [
   "정보와 기술",
   "파트너와 공급자",
   "조직과 사람",
   "가치 흐름과 프로세스"
  ],
  "a": 2,
  "e": "문화·역할·역량·리더십은 조직과 사람 차원의 범위다. 정보와 기술은 정보·지식과 지원 기술을 다룬다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "Which dimension is MOST concerned with the knowledge bases and workflow tools that support service management?",
  "c": [
   "Organizations and people",
   "Partners and suppliers",
   "Information and technology",
   "Value streams and processes"
  ],
  "a": 2,
  "e": "지식 베이스·워크플로 관리 시스템 같은 도구와 정보는 정보와 기술 차원이다. 가치 흐름과 프로세스는 작업의 통합·조정 방식을 다룬다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "파트너와 공급자 차원에서 공급자 전략에 영향을 주는 요인으로 보기 어려운 것은?",
  "c": [
   "조직의 전략적 초점",
   "자원 부족",
   "비용 문제",
   "서비스 데스크 상담원의 응대 화법"
  ],
  "a": 3,
  "e": "공급자 전략 요인은 전략적 초점·기업 문화·자원 부족·비용·전문 지식·외부 제약·수요 패턴이다. 상담원 화법은 공급자 전략과 무관하다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "가치 흐름과 프로세스 차원이 다루는 내용으로 가장 적절한 것은?",
  "c": [
   "외부 조직과 맺는 계약과 협약의 형태",
   "조직 구성원의 역량과 리더십",
   "조직의 각 부분이 통합·조정된 방식으로 일해 가치를 창출하는 방법",
   "서비스 관리에 필요한 정보의 보안과 규제 준수"
  ],
  "a": 2,
  "e": "가치 흐름과 프로세스 차원은 활동이 어떻게 통합·조정되는지를 다룬다. 계약은 파트너와 공급자, 역량은 조직과 사람, 정보 보안은 정보와 기술 차원이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "4차원에 영향을 주는 외부 요인을 정리한 틀로 ITIL 4 가 사용하는 것은?",
  "c": [
   "SWOT",
   "RACI",
   "PDCA",
   "PESTLE"
  ],
  "a": 3,
  "e": "ITIL 4 는 4차원에 영향을 주는 통제 불가능한 외부 요인을 PESTLE(정치·경제·사회·기술·법률·환경)로 설명한다. RACI 는 책임 매트릭스, PDCA 는 개선 사이클이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "Which is NOT one of the external factors described by PESTLE?",
  "c": [
   "Political",
   "Legal",
   "Organizational",
   "Environmental"
  ],
  "a": 2,
  "e": "PESTLE 은 Political·Economic·Social·Technological·Legal·Environmental 이다. Organizational 은 포함되지 않는다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "서비스 관리 4차원에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "각 차원은 경계가 명확해 서로 독립적으로 관리한다",
   "4차원은 서비스 가치 시스템 전체에 적용된다",
   "한 차원이라도 소홀하면 서비스 품질·효율이 떨어질 수 있다",
   "4차원은 외부 요인의 영향을 받는다"
  ],
  "a": 0,
  "e": "4차원은 경계가 불분명하고 서로 상호작용하므로 총체적으로 다뤄야 한다. 나머지는 모두 옳은 서술이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "Which is NOT a consideration of the 'information and technology' dimension?",
  "c": [
   "The information and knowledge needed to manage services",
   "The formal structure and culture of the organization",
   "Security and regulatory compliance of information",
   "Compatibility of new technologies with existing architecture"
  ],
  "a": 1,
  "e": "조직 구조·문화는 조직과 사람 차원이다. 정보·지식, 정보 보안·규제 준수, 신기술 호환성은 정보와 기술 차원의 고려사항이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 3,
  "q": "여러 외부 공급자를 통합자(integrator)를 두어 조정하는 접근인 SIAM 과 가장 관련 깊은 차원은?",
  "c": [
   "조직과 사람",
   "정보와 기술",
   "파트너와 공급자",
   "가치 흐름과 프로세스"
  ],
  "a": 2,
  "e": "SIAM(Service Integration and Management)은 다중 공급자 관계를 통합·관리하는 접근으로 파트너와 공급자 차원에 속한다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 3,
  "q": "다음 중 서비스 관리 4차원에 대한 옳은 설명 두 가지는?\n1. 4차원은 서비스 가치 시스템의 모든 구성요소에 적용된다\n2. PESTLE 은 4차원 중 하나로 외부 환경을 다룬다\n3. 조직 문화는 조직과 사람 차원의 고려사항이다\n4. 프로세스는 파트너와 공급자 차원의 핵심 요소다",
  "c": [
   "1과 2",
   "1과 3",
   "2와 4",
   "3과 4"
  ],
  "a": 1,
  "e": "4차원은 SVS 전체에 적용되고(1), 문화는 조직과 사람 차원이다(3). PESTLE 은 차원이 아닌 외부 요인(2), 프로세스는 가치 흐름과 프로세스 차원(4)이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 3,
  "q": "신규 서비스 도입 시 \"새 개인정보 보호 법규가 데이터 저장 위치를 제한한다\"는 사실은 무엇에 해당하는가?",
  "c": [
   "PESTLE 중 법률(Legal) 외부 요인",
   "조직과 사람 차원의 역량 요소",
   "가치 흐름과 프로세스 차원의 활동",
   "SVS 구성요소 중 거버넌스"
  ],
  "a": 0,
  "e": "법규는 조직이 통제할 수 없는 외부 요인으로 PESTLE 의 Legal 에 해당한다. 거버넌스는 조직 내부의 지시·통제 수단이다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 1,
  "q": "서비스 가치 시스템(SVS)의 입력은?",
  "c": [
   "기회와 수요",
   "가치와 성과",
   "관행과 프로세스",
   "정책과 계획"
  ],
  "a": 0,
  "e": "SVS 의 입력은 기회(opportunity)와 수요(demand), 출력은 가치(value)다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 1,
  "q": "What is the output of the service value system?",
  "c": [
   "Demand",
   "Opportunity",
   "Value",
   "Practices"
  ],
  "a": 2,
  "e": "SVS 의 출력은 가치(value)다. 수요·기회는 입력, 관행은 구성요소다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 1,
  "q": "Which is a component of the service value system?",
  "c": [
   "Demand",
   "Governance",
   "Value",
   "Organizations and people"
  ],
  "a": 1,
  "e": "거버넌스는 SVS 5구성요소 중 하나다. 수요는 입력, 가치는 출력, 조직과 사람은 4차원 중 하나다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "SVS 의 구성요소가 아닌 것은?",
  "c": [
   "지침 원칙",
   "기회와 수요",
   "서비스 가치 사슬",
   "지속적 개선"
  ],
  "a": 1,
  "e": "기회와 수요는 SVS 의 입력이지 구성요소가 아니다. 구성요소는 지침 원칙·거버넌스·가치 사슬·관행·지속적 개선이다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "What is the purpose of the service value system?",
  "c": [
   "To define a fixed sequence of activities for delivering services",
   "To ensure that the organization continually co-creates value with all stakeholders",
   "To replace the need for governance in the organization",
   "To document all IT assets and their relationships"
  ],
  "a": 1,
  "e": "SVS 의 목적은 제품·서비스의 사용·관리를 통해 모든 이해관계자와 지속적으로 가치를 공동창출하는 것이다. 고정 순서 정의는 SVS 의 성격이 아니다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "SVS 가 해소하려는 '사일로(silo)'의 문제로 가장 적절한 것은?",
  "c": [
   "부서 간 정보·자원 공유가 막혀 변화 대응이 느려지는 것",
   "공급자 수가 지나치게 많아지는 것",
   "서비스 요청이 인시던트로 잘못 분류되는 것",
   "관행의 수가 34개로 너무 많은 것"
  ],
  "a": 0,
  "e": "사일로는 부서 간 단절로 정보·자원 공유를 방해하고 변화 대응을 늦춘다. SVS 는 통합·조정과 유연성으로 이를 해소한다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "Which definition describes 'demand' in the ITIL service value system?",
  "c": [
   "Need or desire for products and services among internal and external consumers",
   "Options or possibilities to add value for stakeholders",
   "The perceived benefits, usefulness and importance of something",
   "A set of organizational resources for performing work"
  ],
  "a": 0,
  "e": "수요는 내·외부 소비자의 필요·욕구다. 두 번째는 기회, 세 번째는 가치, 네 번째는 관행의 정의다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 3,
  "q": "기회(opportunity)와 수요(demand)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "기회는 항상 수요가 있을 때만 발생한다",
   "기회는 이해관계자 가치를 더하거나 조직을 개선할 가능성이다",
   "수요에는 내부 소비자의 필요도 포함된다",
   "자원보다 기회가 많으면 우선순위를 정해야 한다"
  ],
  "a": 0,
  "e": "기회는 수요와 무관하게 존재할 수 있다(예: 개선 가능성). 나머지는 옳은 서술이다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 3,
  "q": "다음 중 SVS 에 대한 옳은 설명 두 가지는?\n1. 조직의 구성요소·활동이 하나의 시스템으로 작동하는 방식을 설명한다\n2. 4차원은 SVS 의 다섯 구성요소 중 하나다\n3. SVS 는 조직의 유연성을 높이고 사일로를 줄인다\n4. SVS 의 출력은 수요다",
  "c": [
   "1과 2",
   "1과 3",
   "2와 4",
   "3과 4"
  ],
  "a": 1,
  "e": "SVS 는 구성요소·활동이 시스템으로 작동하는 방식이며(1), 유연성을 높이고 사일로를 줄인다(3). 4차원은 구성요소가 아니고(2), 출력은 가치다(4)."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "조직을 지시하고 통제하는 수단을 뜻하는 SVS 구성요소는?",
  "c": [
   "관행",
   "지침 원칙",
   "서비스 가치 사슬",
   "거버넌스"
  ],
  "a": 3,
  "e": "거버넌스는 조직을 지시·통제하는 수단이다. 관행은 조직 자원의 집합, 지침 원칙은 상황 불문 권고다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "Which activities does the governing body perform according to ITIL 4?",
  "c": [
   "Plan, do, check",
   "Plan, build, run",
   "Identify, assess, treat",
   "Evaluate, direct, monitor"
  ],
  "a": 3,
  "e": "거버닝 바디는 평가(Evaluate)·지시(Direct)·모니터(Monitor)를 수행한다. PDCA 의 Plan-Do-Check 와 혼동하지 말 것."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "Which is the definition of a 'practice' in ITIL 4?",
  "c": [
   "A set of interrelated activities that transform inputs into outputs",
   "A set of organizational resources designed for performing work or accomplishing an objective",
   "A recommendation that guides an organization in all circumstances",
   "The means by which an organization is directed and controlled"
  ],
  "a": 1,
  "e": "관행은 업무 수행·목표 달성을 위해 설계된 조직 자원의 집합이다. 두 번째는 프로세스, 세 번째는 지침 원칙, 네 번째는 거버넌스의 정의다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "ITIL 4 의 관행 수와 구성으로 옳은 것은?",
  "c": [
   "34개 — 일반 관리 17, 서비스 관리 14, 기술 관리 3",
   "26개 — 일반 관리 8, 서비스 관리 15, 기술 관리 3",
   "34개 — 일반 관리 14, 서비스 관리 17, 기술 관리 3",
   "34개 — 일반 관리 14, 서비스 관리 14, 기술 관리 6"
  ],
  "a": 2,
  "e": "ITIL 4 는 34개 관행(일반 관리 14·서비스 관리 17·기술 관리 3)을 정의한다. 일반·서비스 관리 수를 맞바꾼 보기가 단골 함정이다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "목표·전략·업무 유형·관리 구조가 바뀌어도 모든 상황에서 조직을 안내하는 권고에 해당하는 SVS 구성요소는?",
  "c": [
   "거버넌스",
   "관행",
   "지속적 개선",
   "지침 원칙"
  ],
  "a": 3,
  "e": "모든 상황에서 조직을 안내하는 권고는 지침 원칙(guiding principles)의 정의다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "거버닝 바디(governing body)에 대한 설명으로 옳은 것은?",
  "c": [
   "조직의 성과와 준수에 책임을 지는 최고 수준의 개인 또는 집단이다",
   "서비스 데스크 운영을 책임지는 팀이다",
   "가치 사슬 활동 중 하나로 서비스를 제공한다",
   "개별 관행의 프로세스를 설계하는 역할이다"
  ],
  "a": 0,
  "e": "거버닝 바디는 조직 성과·준수에 책임지는 최고 수준 주체(예: 이사회)다. 가치 사슬 활동이나 운영 팀이 아니다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "Continual improvement appears in ITIL 4 at several levels. Which is NOT one of them?",
  "c": [
   "A dimension of service management",
   "A component of the service value system",
   "An activity of the service value chain",
   "A management practice"
  ],
  "a": 0,
  "e": "지속적 개선은 SVS 구성요소·가치 사슬 Improve 활동·지속적 개선 관행 세 곳에 등장한다. 4차원 중 하나는 아니다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "SVS 의 지속적 개선 구성요소에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "이해관계자 기대에 성과가 계속 부합하도록 모든 수준에서 수행되는 반복적 활동",
   "연 1회 경영진이 수행하는 전략 검토",
   "Improve 활동 담당 팀만 수행하는 업무",
   "인시던트 발생 시에만 수행하는 사후 조치"
  ],
  "a": 0,
  "e": "지속적 개선은 조직의 모든 수준에서 반복적으로 수행된다. 특정 팀·시점에 한정하는 보기는 틀렸다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 3,
  "q": "관행(practice)과 가치 사슬 활동의 관계로 옳지 않은 것은?",
  "c": [
   "한 관행이 여러 가치 사슬 활동에 기여할 수 있다",
   "한 활동은 여러 관행을 활용해 수행된다",
   "각 관행은 하나의 가치 사슬 활동에만 대응한다",
   "관행의 조합이 가치 흐름을 구성할 수 있다"
  ],
  "a": 2,
  "e": "관행과 활동은 1:1 대응이 아니다. 하나의 관행이 여러 활동에 기여하고, 하나의 활동이 여러 관행을 쓴다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 3,
  "q": "거버넌스에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "거버넌스는 지속적 개선의 대상이 아니다",
   "거버닝 바디는 전략·포트폴리오를 평가한다",
   "거버닝 바디는 정책 이행 책임을 할당·지시한다",
   "거버닝 바디는 성과와 관행을 모니터한다"
  ],
  "a": 0,
  "e": "거버넌스 역시 지속적 개선의 대상이다. EDM 세 활동에 대한 서술은 모두 옳다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "The ________ is the means by which an organization is directed and controlled.",
  "c": [
   "service value chain",
   "governance",
   "practice",
   "value stream"
  ],
  "a": 1,
  "e": "Missing word 유형. 조직을 지시·통제하는 수단은 거버넌스다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 1,
  "q": "서비스 가치 사슬의 활동 수는?",
  "c": [
   "4개",
   "6개",
   "5개",
   "7개"
  ],
  "a": 1,
  "e": "가치 사슬은 Plan·Improve·Engage·Design and transition·Obtain/build·Deliver and support 의 6활동이다. 7개는 지침 원칙 수와 혼동한 것."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 1,
  "q": "Which is a service value chain activity?",
  "c": [
   "Governance",
   "Obtain/build",
   "Monitor",
   "Continual improvement"
  ],
  "a": 1,
  "e": "Obtain/build 는 가치 사슬 6활동 중 하나다. Governance·Continual improvement 는 SVS 구성요소, Monitor 는 거버넌스 활동이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 1,
  "q": "서비스 가치 사슬 활동이 아닌 것은?",
  "c": [
   "Monitor",
   "Plan",
   "Engage",
   "Deliver and support"
  ],
  "a": 0,
  "e": "Monitor 는 거버닝 바디의 활동(EDM)이지 가치 사슬 활동이 아니다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "서비스 가치 사슬에 대한 설명으로 옳은 것은?",
  "c": [
   "6활동은 Plan 에서 시작해 Deliver and support 로 끝나는 고정 순서다",
   "가치 사슬 활동은 각각 하나의 관행과 동일하다",
   "각 활동은 입력을 출력으로 변환하며 서로 트리거를 주고받는다",
   "가치 사슬은 SVS 의 입력에 해당한다"
  ],
  "a": 2,
  "e": "활동은 상호 연결되어 입력을 출력으로 변환하고 트리거를 주고받는다. 고정 순서·관행과 동일·SVS 입력은 모두 틀린 서술이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "What is the service value chain?",
  "c": [
   "An operating model for the creation, delivery and continual improvement of services",
   "A fixed sequence of six steps for resolving incidents",
   "A set of recommendations that guide decisions in all circumstances",
   "A list of external factors affecting the organization"
  ],
  "a": 0,
  "e": "가치 사슬은 서비스의 창출·제공·지속적 개선을 위한 운영 모델이다. 세 번째는 지침 원칙, 네 번째는 PESTLE 에 가깝다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "가치 사슬 활동의 입력이 될 수 있는 것으로 가장 적절한 것은?",
  "c": [
   "가치 사슬 외부의 수요 또는 다른 가치 사슬 활동의 출력",
   "오직 거버닝 바디의 지시",
   "오직 고객의 요청",
   "오직 Plan 활동의 출력"
  ],
  "a": 0,
  "e": "각 활동의 입력은 외부 수요이거나 다른 활동의 출력이다. '오직' 한 출처로 한정한 보기는 틀렸다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 3,
  "q": "다음 중 서비스 가치 사슬에 대한 옳은 설명 두 가지는?\n1. 가치 사슬 활동들은 상호 연결되어 있다\n2. 가치 사슬 활동은 항상 같은 순서로 수행된다\n3. 가치 사슬은 다양한 가치 흐름을 지원할 수 있다\n4. 가치 사슬은 지속적 개선 관행 안에 포함된다",
  "c": [
   "1과 2",
   "1과 3",
   "2와 4",
   "3과 4"
  ],
  "a": 1,
  "e": "활동은 상호 연결되며(1), 다양한 가치 흐름을 지원한다(3). 순서는 가치 흐름마다 다르고(2), 가치 사슬은 SVS 구성요소이지 관행 안에 있지 않다(4)."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 3,
  "q": "Which value chain activity is the PRIMARY point of interaction with external stakeholders such as customers and users?",
  "c": [
   "Plan",
   "Engage",
   "Obtain/build",
   "Improve"
  ],
  "a": 1,
  "e": "Engage 는 고객·사용자·공급자 등 이해관계자와의 주 접점으로, 수요가 들어오고 서비스 성과 보고서를 내보낸다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "가치 사슬과 가치 흐름의 관계로 옳은 것은?",
  "c": [
   "가치 흐름은 가치 사슬의 상위 개념으로 SVS 와 같다",
   "가치 흐름은 6활동 중 하나다",
   "가치 흐름과 가치 사슬은 동의어다",
   "가치 흐름은 특정 시나리오를 위해 가치 사슬 활동과 관행을 조합한 것이다"
  ],
  "a": 3,
  "e": "가치 흐름은 시나리오별로 활동·관행을 조합한 경로다. SVS·가치 사슬·가치 흐름은 서로 다른 개념이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "What is the purpose of the 'plan' value chain activity?",
  "c": [
   "To ensure that service components are available when and where they are needed",
   "To ensure that services are delivered and supported according to agreed specifications",
   "To ensure a shared understanding of the vision, current status and improvement direction for all four dimensions and all products and services",
   "To provide a good understanding of stakeholder needs and good relationships"
  ],
  "a": 2,
  "e": "Plan 의 목적은 비전·현 상태·개선 방향의 공유된 이해다. 두 번째는 Obtain/build, 세 번째는 Deliver and support, 네 번째는 Engage 의 목적이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "서비스 구성요소가 필요한 때와 장소에 가용하고 합의된 사양을 충족하도록 보장하는 활동은?",
  "c": [
   "Design and transition",
   "Deliver and support",
   "Engage",
   "Obtain/build"
  ],
  "a": 3,
  "e": "구성요소의 가용성과 사양 충족은 Obtain/build 의 목적이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "Which value chain activity ensures that products and services continually meet stakeholder expectations for quality, costs and time to market?",
  "c": [
   "Obtain/build",
   "Design and transition",
   "Plan",
   "Improve"
  ],
  "a": 1,
  "e": "품질·비용·출시 기간(time to market)이 핵심어인 활동은 Design and transition 이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "이해관계자 요구에 대한 좋은 이해, 투명성, 지속적 참여, 좋은 관계를 제공하는 활동은?",
  "c": [
   "Plan",
   "Engage",
   "Improve",
   "Deliver and support"
  ],
  "a": 1,
  "e": "이해관계자 관계·투명성은 Engage 의 목적이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "서비스가 합의된 사양과 이해관계자 기대에 따라 제공·지원되도록 보장하는 활동은?",
  "c": [
   "Deliver and support",
   "Obtain/build",
   "Design and transition",
   "Engage"
  ],
  "a": 0,
  "e": "합의된 사양·기대에 따른 제공·지원은 Deliver and support 의 목적이다. Obtain/build 는 구성요소, D&T 는 품질·비용·출시 기간이 핵심이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Which value chain activity ensures continual improvement of products, services and practices across all value chain activities and the four dimensions?",
  "c": [
   "Plan",
   "Engage",
   "Design and transition",
   "Improve"
  ],
  "a": 3,
  "e": "모든 활동·4차원에 걸친 지속적 개선은 Improve 의 목적이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Plan 활동의 입력으로 옳지 않은 것은?",
  "c": [
   "거버닝 바디의 정책·요구사항·제약",
   "Engage 의 통합된 수요·기회",
   "Deliver and support 의 사용자 지원 작업 완료 정보",
   "Improve 의 가치 사슬 성과 정보"
  ],
  "a": 2,
  "e": "사용자 지원 작업 완료 정보는 Deliver and support 가 Engage 로 보내는 출력이다. 거버닝 바디의 정책·제약, 통합된 수요·기회, 가치 사슬 성과 정보는 Plan 의 입력이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "사용자가 보고한 인시던트와 서비스 요청이 가치 사슬로 들어오는 주 활동은?",
  "c": [
   "Deliver and support",
   "Improve",
   "Engage",
   "Plan"
  ],
  "a": 2,
  "e": "사용자의 인시던트·서비스 요청·피드백은 Engage 의 입력이며, Engage 가 이를 사용자 지원 작업으로 Deliver and support 에 넘긴다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Design and transition 활동의 대표 출력으로 옳은 것은?",
  "c": [
   "Obtain/build 를 위한 요구사항·사양",
   "거버닝 바디를 위한 가치 사슬 성과 정보",
   "Plan 을 위한 통합된 수요·기회",
   "고객을 위한 서비스 성과 보고서"
  ],
  "a": 0,
  "e": "D&T 는 Obtain/build 로 요구사항·사양, Deliver and support 로 신규·변경 제품·서비스를 내보낸다. 통합된 수요·기회·서비스 성과 보고서는 Engage 의 출력이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Plan 활동의 출력으로 보기 어려운 것은?",
  "c": [
   "전략·전술·운영 계획",
   "사용자 지원 작업",
   "설계·전환을 위한 포트폴리오 결정",
   "Engage 를 위한 제품·서비스 포트폴리오"
  ],
  "a": 1,
  "e": "사용자 지원 작업은 Engage 가 Deliver and support 로 보내는 출력이다. 나머지는 Plan 의 출력이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 3,
  "q": "가치 사슬 활동과 목적의 연결로 옳지 않은 것은?",
  "c": [
   "Plan — 비전·현 상태·개선 방향의 공유된 이해",
   "Engage — 이해관계자와의 좋은 관계·투명성",
   "Improve — 제품·서비스·관행의 지속적 개선",
   "Obtain/build — 서비스가 합의된 사양대로 고객에게 제공되도록 보장"
  ],
  "a": 3,
  "e": "합의된 사양대로 서비스를 제공하는 것은 Deliver and support 의 목적이다. Obtain/build 는 구성요소의 가용성이 목적이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 3,
  "q": "Deliver and support 활동이 Obtain/build 로 보내는 출력으로 가장 적절한 것은?",
  "c": [
   "포트폴리오 결정",
   "통합된 수요·기회",
   "변경 요청",
   "아키텍처와 정책"
  ],
  "a": 2,
  "e": "운영 중 필요한 수정은 Deliver and support 가 Obtain/build 로 변경 요청을 보낸다. 포트폴리오 결정·아키텍처는 Plan, 통합된 수요·기회는 Engage 의 출력이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 3,
  "q": "Improve 활동에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "Improve 는 모든 활동을 위한 개선 이니셔티브를 출력한다",
   "Improve 는 Deliver and support 로부터만 입력을 받는다",
   "Engage 로부터 이해관계자 피드백을 입력받는다",
   "Plan 과 거버닝 바디에 가치 사슬 성과 정보를 제공한다"
  ],
  "a": 1,
  "e": "Improve 는 모든 가치 사슬 활동으로부터 성과 정보·개선 기회를 받는다. '~로부터만'이 틀린 부분이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 3,
  "q": "다음 중 Engage 활동의 출력 두 가지는?\n1. Plan 을 위한 통합된 수요와 기회\n2. Deliver and support 를 위한 사용자 지원 작업\n3. 설계·전환을 위한 아키텍처와 정책\n4. 고객·사용자에게 제공되는 서비스",
  "c": [
   "1과 2",
   "1과 3",
   "2와 4",
   "3과 4"
  ],
  "a": 0,
  "e": "Engage 는 통합된 수요·기회(1)와 사용자 지원 작업(2)을 내보낸다. 아키텍처·정책은 Plan(3), 제공되는 서비스는 Deliver and support(4)의 출력이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 1,
  "q": "조직이 소비자에게 제품·서비스를 만들어 전달하기 위해 수행하는 일련의 단계를 무엇이라 하는가?",
  "c": [
   "프로세스(process)",
   "관행(practice)",
   "거버넌스(governance)",
   "가치 흐름(value stream)"
  ],
  "a": 3,
  "e": "가치 흐름의 정의다. 프로세스는 입력을 출력으로 변환하는 활동 집합, 관행은 조직 자원의 집합이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 1,
  "q": "A ________ is a series of steps an organization undertakes to create and deliver products and services to consumers.",
  "c": [
   "process",
   "value stream",
   "practice",
   "service relationship"
  ],
  "a": 1,
  "e": "Missing word 유형. 소비자에게 제품·서비스를 만들어 전달하는 일련의 단계는 value stream 이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "가치 흐름에 대한 설명으로 옳은 것은?",
  "c": [
   "가치 사슬 6활동을 정해진 순서로 한 번씩 거치는 것이다",
   "특정 시나리오에 맞춰 가치 사슬 활동과 관행을 조합한 것이다",
   "하나의 관행 내부에서 입력을 출력으로 바꾸는 절차다",
   "SVS 의 입력으로 들어오는 수요다"
  ],
  "a": 1,
  "e": "가치 흐름은 시나리오별 활동·관행 조합이다. 활동을 한 번씩 고정 순서로 거친다는 것은 틀렸고, 관행 내부 절차는 프로세스다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "Which statement about value streams is CORRECT?",
  "c": [
   "Each value stream must include every value chain activity exactly once",
   "A value stream is the same as a practice",
   "The same value chain activity can appear more than once in a single value stream",
   "Value streams are defined only by the governing body"
  ],
  "a": 2,
  "e": "같은 활동이 한 가치 흐름에 여러 번 등장할 수 있다(예: 처음과 끝의 Engage). 모든 활동을 정확히 한 번씩 포함할 필요는 없다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "운영 중 서비스의 인시던트 복구 가치 흐름에서 사용자가 장애를 보고하는 첫 단계와 가장 관련 깊은 활동은?",
  "c": [
   "Plan",
   "Engage",
   "Design and transition",
   "Obtain/build"
  ],
  "a": 1,
  "e": "사용자의 장애 보고는 이해관계자 접점인 Engage 에서 접수된다. 이후 Deliver and support 가 진단·복구를 수행한다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "가치 흐름을 정의·매핑하는 이점으로 보기 어려운 것은?",
  "c": [
   "작업의 병목을 식별한다",
   "가치를 더하지 않는 낭비를 찾아 제거한다",
   "자동화 대상과 개선 우선순위를 정한다",
   "외부 요인(PESTLE)의 영향을 차단한다"
  ],
  "a": 3,
  "e": "PESTLE 은 조직이 통제할 수 없는 외부 요인이므로 가치 흐름 매핑으로 차단할 수 없다. 병목·낭비 식별과 자동화 우선순위 결정은 매핑의 이점이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 3,
  "q": "가치 흐름과 프로세스의 차이로 옳은 것은?",
  "c": [
   "가치 흐름은 한 관행 내부의 절차, 프로세스는 여러 활동을 가로지른다",
   "둘은 같은 개념으로 ITIL 4 에서 혼용한다",
   "프로세스는 SVS 의 구성요소이고 가치 흐름은 4차원 밖의 외부 요인이다",
   "가치 흐름은 소비자에게 가치를 전달하는 단계 전체, 프로세스는 입력을 출력으로 바꾸는 활동 집합이다"
  ],
  "a": 3,
  "e": "가치 흐름은 가치 전달까지의 단계, 프로세스는 입력→출력 변환 활동 집합이다. 두 번째 보기는 둘을 뒤바꾼 것이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 3,
  "q": "다음 중 가치 흐름에 대한 옳은 설명 두 가지는?\n1. 조직은 수요 유형에 따라 여러 가치 흐름을 정의할 수 있다\n2. 가치 흐름은 한 번 정의하면 변경하지 않는다\n3. 가치 흐름은 가치 사슬 활동과 관행을 조합한다\n4. 가치 흐름은 SVS 의 다섯 구성요소 중 하나다",
  "c": [
   "1과 2",
   "1과 3",
   "2와 4",
   "3과 4"
  ],
  "a": 1,
  "e": "가치 흐름은 수요 유형별로 여러 개 정의되며(1), 활동·관행을 조합한다(3). 지속적으로 재검토되며(2 오답), SVS 구성요소가 아니다(4 오답)."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "조직과 사람 차원의 고려사항으로 보기 어려운 것은?",
  "c": [
   "조직 문화",
   "외부 공급자와의 계약 조건",
   "역할과 책임",
   "인력의 역량"
  ],
  "a": 1,
  "e": "계약 조건은 파트너와 공급자 차원이다. 문화·역할·역량은 조직과 사람 차원이다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "Which is NOT an input or output of the service value system?",
  "c": [
   "Practices",
   "Opportunity",
   "Demand",
   "Value"
  ],
  "a": 0,
  "e": "Practices 는 SVS 구성요소다. Opportunity·Demand 는 입력, Value 는 출력이다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "Which is NOT a component of the ITIL service value system?",
  "c": [
   "Guiding principles",
   "Service value chain",
   "Continual improvement",
   "Four dimensions of service management"
  ],
  "a": 3,
  "e": "4차원은 SVS 전체에 적용되는 관점이지 구성요소가 아니다. 나머지는 SVS 구성요소다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "서비스 가치 사슬에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "가치 사슬은 6개 활동으로 구성된다",
   "각 활동은 다른 활동의 출력을 입력으로 쓸 수 있다",
   "활동 조합으로 여러 가치 흐름을 만들 수 있다",
   "가치 사슬은 SVS 의 입력이 되는 기회를 가리킨다"
  ],
  "a": 3,
  "e": "가치 사슬은 SVS 의 구성요소(운영 모델)이며 입력이 아니다. 나머지는 옳다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Engage 활동의 입력으로 보기 어려운 것은?",
  "c": [
   "사용자의 인시던트와 서비스 요청",
   "고객의 상세 요구사항",
   "파트너·공급자의 협력 기회",
   "Obtain/build 를 위한 요구사항·사양"
  ],
  "a": 3,
  "e": "요구사항·사양은 Design and transition 이 Obtain/build 로 보내는 출력이다. 나머지는 Engage 의 입력이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "Which statement about value streams is NOT correct?",
  "c": [
   "A value stream is designed for a specific scenario",
   "A value stream combines value chain activities and practices",
   "A value stream is one of the six value chain activities",
   "An organization can define several value streams"
  ],
  "a": 2,
  "e": "가치 흐름은 6활동 중 하나가 아니라 활동·관행의 시나리오별 조합이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "What is the purpose of the 'continual improvement' practice?",
  "c": [
   "To align the organization's practices and services with changing business needs",
   "To minimize the negative impact of incidents by restoring normal service operation",
   "To maximize the number of successful service and product changes",
   "To set clear business-based targets for service levels"
  ],
  "a": 0,
  "e": "지속적 개선의 목적 키워드는 ‘변화하는 비즈니스 요구에 정렬(align)’ 이다. 나머지는 각각 인시던트 관리·변경 실행·서비스 수준 관리의 목적이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델의 첫 번째 단계(질문)는?",
  "c": [
   "현재 위치는 어디인가?(Where are we now?)",
   "비전은 무엇인가?(What is the vision?)",
   "어디에 도달하고 싶은가?(Where do we want to be?)",
   "실행(Take action)"
  ],
  "a": 1,
  "e": "모델은 비전 → 현재 위치 → 목표 → 계획 → 실행 → 확인 → 추진력 유지 순이다. ‘현재 위치’ 는 2단계로, 원칙 ‘Start where you are’ 와 헷갈리기 쉽다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "Which continual improvement model step includes a baseline assessment?",
  "c": [
   "What is the vision?",
   "Where do we want to be?",
   "Where are we now?",
   "Did we get there?"
  ],
  "a": 2,
  "e": "기준선 평가(baseline assessment)는 현재 상태를 객관적으로 측정하는 2단계 ‘Where are we now?’ 의 활동이다. 측정 가능한 목표 설정은 3단계다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선 모델에서 측정 가능한 목표(CSF·KPI)를 정하고 현재 상태와의 차이(갭)를 분석하는 단계는?",
  "c": [
   "현재 위치는 어디인가?(Where are we now?)",
   "어떻게 갈 것인가?(How do we get there?)",
   "도달했는가?(Did we get there?)",
   "어디에 도달하고 싶은가?(Where do we want to be?)"
  ],
  "a": 3,
  "e": "3단계에서 기준선 대비 목표 상태를 측정 가능한 형태로 정의하고 갭을 분석한다. 2단계는 기준선 평가, 4단계는 개선 계획 수립이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델의 마지막 단계는?",
  "c": [
   "도달했는가?(Did we get there?)",
   "추진력을 어떻게 유지할 것인가?(How do we keep the momentum going?)",
   "실행(Take action)",
   "비전은 무엇인가?(What is the vision?)"
  ],
  "a": 1,
  "e": "7단계는 성공을 알리고 학습을 정착시켜 다음 개선으로 이어가는 ‘추진력 유지’ 다. ‘Did we get there?’ 는 6단계다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "Who is responsible for continual improvement in an organization?",
  "c": [
   "Only a dedicated continual improvement team",
   "Only the service desk",
   "Everyone in the organization",
   "Only the senior management team"
  ],
  "a": 2,
  "e": "지속적 개선은 조직 내 모든 사람의 책임이다. 전담 팀은 조정·리드 역할을 할 수 있지만 책임을 독점하지 않으며, 경영진은 문화·자원을 뒷받침한다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선 등록부(CIR)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "개선 아이디어를 식별부터 실행까지 추적·관리하는 데 사용된다",
   "아이디어의 우선순위는 상황 변화에 따라 재평가될 수 있다",
   "개인·팀·부서 단위 등 여러 수준에서 운영될 수 있다",
   "조직 전체에 단 하나의 CIR 만 유지해야 한다"
  ],
  "a": 3,
  "e": "조직 안에 여러 CIR 이 존재할 수 있다. 나머지는 CIR 의 올바른 특징(추적·재평가·여러 수준)이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "Which statement about the continual improvement model is CORRECT?",
  "c": [
   "It can be applied to improvements at all levels, from strategic to team level",
   "It must be applied only once, as a linear project",
   "It is used only for improving the service desk",
   "It replaces the need to measure the current state"
  ],
  "a": 0,
  "e": "지속적 개선 모델은 전략 수준부터 팀 단위의 작은 개선까지 반복적으로 적용할 수 있다. 1회성 선형 프로젝트도 아니고, 2단계에서 현재 상태 측정을 요구한다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "다음 중 지속적 개선 관행의 핵심 활동에 해당하는 것 두 가지를 고르면?\n1. 서비스 요청의 처리\n2. 개선 이니셔티브의 비즈니스 케이스 작성\n3. 개선 기회의 식별과 기록\n4. 변경 일정의 관리",
  "c": [
   "1, 3",
   "1, 4",
   "2, 3",
   "2, 4"
  ],
  "a": 2,
  "e": "개선 기회 식별·기록(CIR), 비즈니스 케이스 작성은 지속적 개선의 활동이다. 변경 일정은 변경 실행, 서비스 요청 처리는 서비스 요청 관리의 활동이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "Which continual improvement model step asks whether the expected value has actually been achieved?",
  "c": [
   "Take action",
   "How do we get there?",
   "Where do we want to be?",
   "Did we get there?"
  ],
  "a": 3,
  "e": "6단계 ‘Did we get there?’ 는 목표 달성 여부와 기대 가치 실현을 확인한다. 미달이면 앞 단계로 돌아가 다시 시도한다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 3,
  "q": "지속적 개선에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "전담 개선 팀이 있으면 다른 직원은 개선에 관여할 필요가 없다",
   "지속적 개선은 SVS 의 구성요소이면서 관행이기도 하다",
   "공급자 계약에 개선에 대한 기여를 포함할 수 있다",
   "리더십은 개선을 위한 시간과 예산 확보를 지원한다"
  ],
  "a": 0,
  "e": "전담 팀이 있어도 지속적 개선은 모든 사람의 책임이다. SVS 구성요소이자 관행, 공급자 기여, 리더십의 자원 확보는 모두 맞는 서술이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선 모델의 ‘어떻게 갈 것인가?(How do we get there?)’ 단계에서 주로 하는 일은?",
  "c": [
   "현재 상태의 기준선 평가",
   "목표 상태에 도달하기 위한 개선 계획 수립",
   "개선 결과가 가치를 실현했는지 확인",
   "조직의 비전과 사명 이해"
  ],
  "a": 1,
  "e": "4단계는 갭을 메우기 위한 계획(반복 접근 권장)을 세우는 단계다. 기준선 평가는 2단계, 가치 확인은 6단계, 비전은 1단계다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 3,
  "q": "Which TWO are typical techniques used in continual improvement?\n1. Balanced scorecard\n2. SWOT analysis\n3. Change schedule\n4. Swarming",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 3",
   "2 and 4"
  ],
  "a": 0,
  "e": "SWOT 분석과 균형성과표는 현재 상태 평가·목표 측정에 쓰는 지속적 개선 기법이다. 스워밍은 인시던트 관리, 변경 일정은 변경 실행의 개념이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델 5단계 ‘실행(Take action)’ 에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "폭포수·애자일 등 어떤 방식으로든 계획을 실행할 수 있다",
   "반드시 폭포수 방식으로만 실행해야 한다",
   "실행 중에는 측정을 하지 않는다",
   "실행 단계에서 비전을 새로 수립한다"
  ],
  "a": 0,
  "e": "5단계는 계획을 실행하는 단계로 수행 방식에 제약이 없으며 위험 관리와 진척 측정을 병행한다. 비전 수립은 1단계다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "What is the purpose of the 'change enablement' practice?",
  "c": [
   "To minimize the number of changes in order to reduce risk",
   "To maximize the number of successful service and product changes by ensuring that risks have been properly assessed",
   "To restore normal service operation as quickly as possible",
   "To capture demand for incident resolution and service requests"
  ],
  "a": 1,
  "e": "변경 실행의 목적은 위험 평가·승인·변경 일정 관리로 ‘성공적인 변경 수를 최대화’ 하는 것이다. ‘변경 최소화’ 는 대표적인 함정이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "변경(Change)의 정의로 옳은 것은?",
  "c": [
   "서비스의 계획되지 않은 중단 또는 품질 저하",
   "하나 이상 인시던트의 원인 또는 잠재 원인",
   "서비스에 직접 또는 간접적으로 영향을 줄 수 있는 모든 것의 추가·수정·제거",
   "서비스 관리상 의미가 있는 상태의 변화"
  ],
  "a": 2,
  "e": "변경은 ‘추가·수정·제거’ 다. 나머지는 각각 인시던트·문제·이벤트의 정의다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "What is a 'change authority'?",
  "c": [
   "A person or group responsible for authorizing a change",
   "A list of all planned changes",
   "A pre-authorized low-risk change",
   "A document that describes a change model"
  ],
  "a": 0,
  "e": "변경 권한자는 변경을 승인하는 사람 또는 그룹이다. 계획된 변경 목록은 변경 일정, 사전 승인된 저위험 변경은 표준 변경이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "저위험이고 잘 이해되며 완전히 문서화되어 추가 승인 없이 실행할 수 있는 변경 유형은?",
  "c": [
   "일반 변경(Normal change)",
   "표준 변경(Standard change)",
   "긴급 변경(Emergency change)",
   "주요 변경(Major change)"
  ],
  "a": 1,
  "e": "표준 변경은 사전 승인된(pre-authorized) 변경이다. 일반 변경은 프로세스에 따른 평가·승인, 긴급 변경은 신속 실행이 필요한 변경이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "Which type of change is typically initiated as a service request?",
  "c": [
   "Normal change",
   "Emergency change",
   "Standard change",
   "Problem change"
  ],
  "a": 2,
  "e": "표준 변경은 흔히 서비스 요청으로 시작된다(예: 사전 정의된 소프트웨어 설치). ‘Problem change’ 는 ITIL 의 변경 유형이 아니다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "표준 변경의 위험 평가는 언제 수행되는가?",
  "c": [
   "표준 변경을 실행할 때마다",
   "실행 완료 후 사후 검토 때",
   "변경 자문 위원회 정기 회의 때마다",
   "표준 변경 절차를 처음 만들 때(그리고 절차가 바뀔 때)"
  ],
  "a": 3,
  "e": "표준 변경은 절차 작성 시 위험 평가와 승인을 한 번 받아 두고, 이후에는 추가 승인 없이 실행한다. 절차가 수정되면 다시 평가한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "When should an emergency change be implemented?",
  "c": [
   "Only during the next scheduled maintenance window",
   "As soon as possible, for example to resolve an incident or implement a security patch",
   "Only after full documentation has been completed",
   "Only when the change has been pre-authorized"
  ],
  "a": 1,
  "e": "긴급 변경은 가능한 빨리 실행해야 하는 변경이다. 문서화는 사후로 미룰 수 있고, 사전 승인은 표준 변경의 특징이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "긴급 변경(Emergency change)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "보통 변경 일정에 포함되지 않는다",
   "평가·승인을 신속화하기 위해 별도의 변경 권한자를 둘 수 있다",
   "평가와 승인 절차를 완전히 생략한다",
   "문서화를 실행 이후로 미룰 수 있다"
  ],
  "a": 2,
  "e": "긴급 변경도 평가·승인은 필요하며 그 절차를 ‘신속화(expedited)’ 할 뿐이다. 나머지는 모두 긴급 변경의 올바른 특징이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "일반 변경(Normal change)은 무엇에 의해 시작(initiate)되는가?",
  "c": [
   "인시던트 기록의 종료",
   "서비스 요청의 자동 처리",
   "변경 일정의 게시",
   "변경 요청(Change request)의 생성"
  ],
  "a": 3,
  "e": "일반 변경은 변경 요청이 생성되면서 시작되며, 변경 모델에 따라 평가·승인·일정 수립을 거친다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "Which statement about normal changes is CORRECT?",
  "c": [
   "Change models based on the type of change determine the roles for assessment and authorization",
   "Normal changes never require authorization",
   "All normal changes must be authorized by the board",
   "Normal changes are implemented without being scheduled"
  ],
  "a": 0,
  "e": "일반 변경은 변경 모델이 평가·승인 역할을 결정한다. 저위험은 신속 결정자(자동화 포함), 매우 큰 변경은 이사회 수준일 수 있다 — ‘전부 이사회’ 는 오답."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "변경 일정(Change schedule)의 용도로 적절하지 않은 것은?",
  "c": [
   "변경 계획과 커뮤니케이션 지원",
   "변경 간 충돌 회피와 자원 배정",
   "변경을 사전 승인된 표준 변경으로 지정",
   "인시던트·문제 관리를 위한 정보 제공"
  ],
  "a": 2,
  "e": "변경 일정은 계획·커뮤니케이션·충돌 회피·자원 배정, 그리고 구현 후 인시던트·문제 관리·개선 계획의 정보원으로 쓰인다. 표준 변경 지정은 일정의 역할이 아니다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 3,
  "q": "In high-velocity organizations, how is change authority typically handled?",
  "c": [
   "It is centralized in a single change advisory board for all changes",
   "It is removed entirely so that no change is assessed",
   "It is delegated only to the service desk",
   "It is decentralized, for example by using peer review"
  ],
  "a": 3,
  "e": "고속 조직은 변경 권한을 분산하는 경향이 있으며 동료 검토가 대표 예다. 모든 변경을 단일 CAB 가 승인하는 것은 ITIL 4 가 권하는 방식이 아니다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "다음 중 긴급 변경에 해당하는 사례 두 가지를 고르면?\n1. 사전 정의 절차에 따른 사용자 PC 소프트웨어 설치\n2. 진행 중인 주요 인시던트 해결을 위한 설정 변경\n3. 활발히 악용되는 취약점에 대한 보안 패치\n4. 다음 분기 데이터센터 이전 계획",
  "c": [
   "1, 4",
   "2, 3",
   "2, 4",
   "3, 4"
  ],
  "a": 1,
  "e": "인시던트 해결·긴급 보안 패치처럼 가능한 빨리 실행할 변경이 긴급 변경이다. 사전 정의 절차에 따른 설치는 표준 변경, 데이터센터 이전 계획은 계획된 일반 변경이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 3,
  "q": "변경 실행 관행이 균형을 맞춰야 하는 두 가지로 가장 적절한 것은?",
  "c": [
   "인시던트 해결 속도와 문제 분석 깊이",
   "해로운 변경으로부터의 보호와 유익한 변경의 신속한 처리(처리량)",
   "서비스 요청 자동화와 서비스 데스크 인력 규모",
   "SLA 목표와 고객 만족도"
  ],
  "a": 1,
  "e": "변경 실행은 위험 관리(효과성)와 처리량(throughput)의 균형을 추구한다. 변경을 막는 것이 아니라 성공적으로 많이 처리하는 것이 목표다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "Which of the following is the BEST description of the change schedule?",
  "c": [
   "It is used to authorize standard changes before each implementation",
   "It is used to record the root causes of incidents",
   "It is used to log user requests for information",
   "It is used to help plan changes, assist in communication, avoid conflicts and assign resources"
  ],
  "a": 3,
  "e": "변경 일정은 계획·커뮤니케이션·충돌 회피·자원 배정에 쓰인다. 표준 변경은 매번 승인하지 않으며, 근본 원인 기록은 문제 관리의 영역이다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "What is the purpose of the 'incident management' practice?",
  "c": [
   "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible",
   "To reduce the likelihood and impact of incidents by identifying actual and potential causes",
   "To align practices and services with changing business needs",
   "To handle all predefined, user-initiated service requests"
  ],
  "a": 0,
  "e": "인시던트 관리의 핵심은 ‘가능한 빨리 정상 복구’ 와 ‘부정적 영향 최소화’ 다. 원인 식별로 발생 가능성을 줄이는 것은 문제 관리의 목적이다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "인시던트(Incident)의 정의로 옳은 것은?",
  "c": [
   "하나 이상 인시던트의 원인 또는 잠재 원인",
   "서비스의 계획되지 않은 중단 또는 서비스 품질의 저하",
   "분석되었으나 해결되지 않은 문제",
   "사전 정의된 서비스 행위에 대한 사용자 요청"
  ],
  "a": 1,
  "e": "인시던트는 계획되지 않은 중단·품질 저하다. 나머지는 각각 문제·알려진 오류·서비스 요청의 정의다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "How should incidents be prioritized?",
  "c": [
   "In the order in which they were reported",
   "Based on which support team is available",
   "Based on an agreed classification, so that incidents with the highest business impact are resolved first",
   "Based on the seniority of the user who reported them"
  ],
  "a": 2,
  "e": "인시던트는 합의된 분류 체계에 따라 비즈니스 영향이 큰 것부터 해결한다. 접수 순서·담당팀 가용성·보고자 직급은 우선순위 기준이 아니다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "스워밍(Swarming)에 대한 설명으로 옳은 것은?",
  "c": [
   "여러 이해관계자가 처음부터 함께 작업하다가 가장 적합한 사람이 분명해지면 그 사람이 계속하고 나머지는 빠진다",
   "인시던트를 1선 → 2선 → 3선 지원팀 순서로 차례대로 넘긴다",
   "같은 원인의 인시던트를 묶어 문제 기록으로 전환한다",
   "인시던트를 접수 순서대로 한 사람이 끝까지 처리한다"
  ],
  "a": 0,
  "e": "스워밍은 복잡한 인시던트를 협업으로 다루는 방식으로, 전통적인 단계별 에스컬레이션과 대비된다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "Which statement about incident management is CORRECT?",
  "c": [
   "All incidents must be handled using exactly the same process",
   "Major incidents and information security incidents may need separate processes",
   "Incidents should only be logged when they are resolved",
   "Target resolution times should be kept secret from users"
  ],
  "a": 1,
  "e": "주요 인시던트와 정보보안 인시던트는 별도 프로세스로 관리할 수 있다. 인시던트는 모두 기록되어야 하며, 목표 해결 시간은 합의·문서화·전달되어야 한다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "인시던트 관리에서 목표 해결 시간(target resolution time)에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "지원팀 내부에서만 관리하고 사용자에게 알리지 않는다",
   "모든 인시던트에 동일한 시간을 적용한다",
   "합의·문서화되고 사용자에게 전달되어 기대치가 현실적이도록 해야 한다",
   "인시던트가 종료된 뒤에 정한다"
  ],
  "a": 2,
  "e": "목표 해결 시간은 합의(agreed)·문서화(documented)·전달(communicated)되어야 기대치가 현실적이 된다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "인시던트를 진단·해결할 수 있는 주체로 적절하지 않은 것은?",
  "c": [
   "셀프헬프를 이용하는 사용자",
   "서비스 데스크",
   "공급자와 파트너",
   "변경 권한자(Change authority)만 해결할 수 있다"
  ],
  "a": 3,
  "e": "인시던트는 사용자 셀프헬프·서비스 데스크·지원팀·공급자·임시 팀 등 다양한 주체가 해결할 수 있다. 변경 권한자는 변경 승인 주체다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "Which information can incident records be linked to?",
  "c": [
   "Only the user's name",
   "Configuration items, changes, problems and known errors",
   "Only the service level agreement",
   "Only the change schedule"
  ],
  "a": 1,
  "e": "인시던트 기록은 CI·변경·문제·알려진 오류 등과 연결될 수 있으며, 알려진 오류와 매칭하면 빠르게 해결할 수 있다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 3,
  "q": "인시던트 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "영향이 낮은 인시던트는 자원 소모를 줄이도록 효율적으로 처리한다",
   "복잡한 인시던트에는 임시 팀을 구성할 수 있다",
   "인시던트 관리의 주된 목표는 인시던트의 근본 원인을 제거하여 재발을 막는 것이다",
   "공급자 계약에 인시던트 처리 협력 요건을 반영할 수 있다"
  ],
  "a": 2,
  "e": "근본 원인 제거·재발 방지는 문제 관리의 영역이다. 인시던트 관리는 가능한 빨리 정상 서비스를 복구한다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "Which practice relies on scripts used by the service desk for initial triage of incidents?",
  "c": [
   "Change enablement",
   "Continual improvement",
   "Service level management",
   "Incident management"
  ],
  "a": 3,
  "e": "서비스 데스크가 초기 분류(triage)에 쓰는 스크립트는 인시던트 관리의 일부다. 효과적인 인시던트 관리는 협업·지식 공유에 의존한다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 3,
  "q": "다음 중 인시던트 관리에 대한 올바른 설명 두 가지를 고르면?\n1. 알려진 오류와 매칭하면 인시던트를 빠르게 해결할 수 있다\n2. 인시던트는 사용자가 인지한 경우에만 기록한다\n3. 인시던트는 영구 해결책이 마련될 때까지 종료할 수 없다\n4. 모든 인시던트는 기록되고 관리되어야 한다",
  "c": [
   "1, 4",
   "2, 3",
   "2, 4",
   "3, 4"
  ],
  "a": 0,
  "e": "모든 인시던트는 기록되고, 알려진 오류·임시 해결책을 활용해 빠르게 해결한다. 영구 해결책은 문제 관리 영역이며, 사용자가 인지하지 못한 품질 저하도 인시던트다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "Effective incident management requires which of the following?",
  "c": [
   "Strict separation so that teams never share information",
   "Avoiding the use of collaboration tools",
   "A high level of collaboration within and between teams",
   "Resolving incidents only after the root cause is known"
  ],
  "a": 2,
  "e": "효과적인 인시던트 관리는 팀 내·팀 간의 높은 협업과 협업 도구·지식 공유에 의존한다. 원인 규명 전에도 임시 해결책으로 복구할 수 있다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "What is the purpose of the 'problem management' practice?",
  "c": [
   "To restore normal service operation as quickly as possible",
   "To maximize the number of successful changes",
   "To capture demand for incident resolution and service requests",
   "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors"
  ],
  "a": 3,
  "e": "문제 관리는 원인 식별과 임시 해결책·알려진 오류 관리로 인시던트의 발생 가능성·영향을 줄인다. ‘빨리 복구’ 는 인시던트 관리다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "문제(Problem)의 정의로 옳은 것은?",
  "c": [
   "하나 이상 인시던트의 원인 또는 잠재 원인",
   "서비스의 계획되지 않은 중단",
   "분석되었으나 해결되지 않은 오류",
   "서비스에 영향을 줄 수 있는 것의 추가·수정·제거"
  ],
  "a": 0,
  "e": "문제는 인시던트의 (잠재)원인이다. ‘분석되었으나 해결되지 않은’ 것은 알려진 오류다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "What is a 'known error'?",
  "c": [
   "A problem that has been resolved permanently",
   "A problem that has been analysed but has not been resolved",
   "An incident that has been reported by many users",
   "A change that has failed during implementation"
  ],
  "a": 1,
  "e": "알려진 오류는 분석은 끝났지만 아직 해결되지 않은 문제다. ‘해결된 문제’ 로 바꾸는 보기가 단골 함정이다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "문제 관리의 세 단계를 올바른 순서로 나열한 것은?",
  "c": [
   "문제 통제 → 문제 식별 → 오류 통제",
   "오류 통제 → 문제 식별 → 문제 통제",
   "문제 식별 → 오류 통제 → 문제 통제",
   "문제 식별 → 문제 통제 → 오류 통제"
  ],
  "a": 3,
  "e": "문제를 찾고(식별), 분석·문서화하고(문제 통제), 알려진 오류를 관리하며 영구 해결책을 찾는다(오류 통제)."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "Which problem management phase includes trend analysis of incident records?",
  "c": [
   "Problem identification",
   "Problem control",
   "Error control",
   "Incident control"
  ],
  "a": 0,
  "e": "인시던트 기록의 추세 분석, 반복 이슈 감지 등은 문제 식별 활동이다. ‘Incident control’ 은 문제 관리의 단계가 아니다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "문제 통제(Problem control) 단계의 활동으로 옳은 것은?",
  "c": [
   "인시던트 추세 분석으로 새로운 문제 발견",
   "문제 분석과 임시 해결책·알려진 오류의 문서화",
   "알려진 오류의 상태를 주기적으로 재평가",
   "변경 요청을 승인하고 변경 일정에 등록"
  ],
  "a": 1,
  "e": "문제 통제는 분석과 임시 해결책·알려진 오류 문서화다. 추세 분석은 문제 식별, 알려진 오류 재평가는 오류 통제, 변경 승인은 변경 실행이다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "Which phase of problem management identifies potential permanent solutions that may result in a change request?",
  "c": [
   "Problem identification",
   "Problem control",
   "Error control",
   "Incident management"
  ],
  "a": 2,
  "e": "영구 해결책 식별과 변경 요청은 오류 통제(Error control) 단계의 활동이다. 알려진 오류의 상태 재평가와 임시 해결책 개선도 여기서 한다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "임시 해결책(Workaround)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "문제 분석이 완전히 끝난 뒤에만 문서화할 수 있다",
   "어느 단계에서든 문서화될 수 있다",
   "문제 기록(problem record)에 문서화된다",
   "효과적인 임시 해결책이 있으면 문제가 알려진 오류 상태로 남을 수 있다"
  ],
  "a": 0,
  "e": "임시 해결책은 분석 완료를 기다리지 않고 언제든 문서화할 수 있다. 나머지는 모두 올바른 서술이다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "문제 통제 단계에서 문제의 우선순위를 정하는 기준은?",
  "c": [
   "문제를 보고한 사람의 직급",
   "문제가 초래하는 위험(risk)",
   "문제가 기록된 순서",
   "해당 문제를 해결할 팀의 규모"
  ],
  "a": 1,
  "e": "문제 통제에서는 문제가 초래할 수 있는 위험을 기반으로 우선순위를 정한다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 3,
  "q": "Which statement about problem management is CORRECT?",
  "c": [
   "Problem management only investigates technology components",
   "Problems and incidents are always managed in the same record",
   "Problem investigation should consider all four dimensions of service management",
   "A known error must be resolved before any workaround is documented"
  ],
  "a": 2,
  "e": "문제의 원인은 기술뿐 아니라 사람·프로세스·공급자 등 4차원 전체에 걸칠 수 있으므로 모두 조사한다. 인시던트와 문제는 연관되지만 별도로 관리된다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "다음 중 문제 식별(Problem identification)의 활동 두 가지를 고르면?\n1. 주요 인시던트 처리 중 원인 후보 발견\n2. 알려진 오류의 영구 해결책 비용 평가\n3. 임시 해결책의 효과 개선\n4. 인시던트 기록의 추세 분석",
  "c": [
   "1, 2",
   "1, 4",
   "2, 3",
   "2, 4"
  ],
  "a": 1,
  "e": "추세 분석과 주요 인시던트 처리 중 발견은 문제 식별 활동이다. 영구 해결책 비용 평가와 임시 해결책 개선은 오류 통제 활동이다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 3,
  "q": "오류 통제(Error control)에서 알려진 오류의 상태를 재평가할 때 고려하는 요소가 아닌 것은?",
  "c": [
   "고객에 대한 전반적 영향",
   "알려진 오류를 처음 보고한 사용자의 부서",
   "영구 해결책의 가용성과 비용",
   "임시 해결책의 효과성"
  ],
  "a": 1,
  "e": "오류 통제는 고객에 대한 영향, 영구 해결책의 가용성·비용, 임시 해결책의 효과를 고려해 재평가한다. 보고자의 부서는 기준이 아니다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 3,
  "q": "How are permanent solutions identified by problem management typically implemented?",
  "c": [
   "Directly by the problem manager without assessment",
   "By the service desk during incident logging",
   "Through change enablement, as a change request",
   "By updating the service level agreement"
  ],
  "a": 2,
  "e": "문제 관리가 식별한 영구 해결책은 보통 변경 요청을 통해 변경 실행 관행에서 평가·승인 후 구현된다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "What is the purpose of the 'service request management' practice?",
  "c": [
   "To capture demand for incident resolution and service requests",
   "To restore normal service operation as quickly as possible",
   "To set clear business-based targets for service levels",
   "To support the agreed quality of a service by handling all predefined, user-initiated service requests in an effective and user-friendly manner"
  ],
  "a": 3,
  "e": "서비스 요청 관리의 키워드는 ‘사전 정의·사용자 시작’ 요청과 ‘사용자 친화적 처리’ 다. 수요 포착은 서비스 데스크의 목적이다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "서비스 요청에 대한 설명으로 옳은 것은?",
  "c": [
   "정상적인 서비스 제공의 일부로 합의된 요청이다",
   "서비스의 계획되지 않은 중단이다",
   "인시던트의 근본 원인이다",
   "반드시 변경 권한자의 개별 승인이 필요하다"
  ],
  "a": 0,
  "e": "서비스 요청은 실패가 아니라 정상 서비스 제공의 일부다. 많은 요청은 정책에 따라 추가 승인 없이 처리될 수 있다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "Which is an example of a service request?",
  "c": [
   "A server that unexpectedly stops working",
   "A recurring network outage caused by a faulty switch",
   "A request for a new laptop",
   "Slow application response caused by a software defect"
  ],
  "a": 2,
  "e": "자원(노트북) 제공 요청은 서비스 요청이다. 예기치 않은 중단·성능 저하는 인시던트, 반복 장애의 원인은 문제다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "다음 중 서비스 요청의 유형에 해당하지 않는 것은?",
  "c": [
   "새 인터페이스에 대한 불만 제기",
   "사무실 운영 시간 문의",
   "공유 폴더 접근 권한 요청",
   "운영 중인 서버의 예기치 않은 정지"
  ],
  "a": 3,
  "e": "불만·정보 요청·접근 요청은 모두 서비스 요청 유형이다. 서버의 예기치 않은 정지는 인시던트다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "Which statement about service request management is CORRECT?",
  "c": [
   "Service requests and their fulfilment should be standardized and automated to the greatest degree possible",
   "Every service request must be individually authorized by a change advisory board",
   "Service requests should never use existing workflow models",
   "Fulfilment time expectations should not be communicated to users"
  ],
  "a": 0,
  "e": "요청 처리는 최대한 표준화·자동화하고 기존 워크플로 모델을 활용하며, 처리 시간 기대치를 명확히 해야 한다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "서비스 요청 관리에서 정책(policy)을 수립하는 주된 이유는?",
  "c": [
   "모든 요청을 변경 자문 위원회로 보내기 위해",
   "어떤 요청을 제한된 승인 또는 추가 승인 없이 처리할지 정해 처리를 간소화하기 위해",
   "인시던트의 우선순위를 정하기 위해",
   "SLA 위반 시 벌칙을 정하기 위해"
  ],
  "a": 1,
  "e": "정책으로 승인이 거의 필요 없는 요청을 정해 두면 처리가 빨라진다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 3,
  "q": "Which TWO statements about service request management are CORRECT?\n1. Service requests are failures that need root cause analysis\n2. Some service requests require only simple workflows, while others can be complex\n3. Complaints are handled as incidents, not service requests\n4. Some service requests may be handled as standard changes",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 3",
   "2 and 4"
  ],
  "a": 3,
  "e": "요청은 단순·복잡 워크플로가 모두 가능하며(예: 신규 입사자 셋업), 일부는 표준 변경으로 처리된다. 불만도 서비스 요청이고, 요청은 실패가 아니다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "신규 입사자의 계정·장비·권한을 준비하는 것과 같은 요청에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "여러 팀이 관여하는 복잡한 워크플로를 가진 서비스 요청이다",
   "인시던트로 기록해야 한다",
   "문제 관리의 대상이다",
   "서비스 요청으로 처리할 수 없다"
  ],
  "a": 0,
  "e": "서비스 요청 중에는 신규 입사자 셋업처럼 여러 팀과 시스템이 관여하는 복잡한 워크플로도 있다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "서비스 요청 처리 시간(fulfilment time)에 대한 사용자 기대치를 설정하는 올바른 방법은?",
  "c": [
   "가능한 짧게 약속해 만족도를 높인다",
   "조직이 현실적으로 제공할 수 있는 수준으로 명확히 설정한다",
   "기대치는 설정하지 않는다",
   "요청을 처리한 뒤에 알린다"
  ],
  "a": 1,
  "e": "처리 시간 기대치는 조직이 실제로 제공할 수 있는 수준으로 명확히 설정해야 한다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "Which practice handles a user's request for information, such as how to create a document?",
  "c": [
   "Problem management",
   "Change enablement",
   "Service request management",
   "Incident management"
  ],
  "a": 2,
  "e": "정보 요청(request for information)은 서비스 요청의 한 유형이다. 장애가 아니므로 인시던트·문제 관리가 아니다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 1,
  "q": "What is the purpose of the 'service desk' practice?",
  "c": [
   "To capture demand for incident resolution and service requests, and to be the entry point and single point of contact for all users",
   "To handle all predefined, user-initiated service requests",
   "To set clear business-based targets for service levels",
   "To minimize the negative impact of incidents"
  ],
  "a": 0,
  "e": "서비스 데스크는 수요 포착과 모든 사용자에 대한 단일 접점(SPOC)이다. 요청 처리 자체는 서비스 요청 관리의 목적이다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 1,
  "q": "서비스 데스크에 대한 설명으로 옳은 것은?",
  "c": [
   "인시던트의 근본 원인을 분석하는 전담 조직이다",
   "서비스 제공자와 모든 사용자 간의 진입점이자 단일 접점이다",
   "변경을 승인하는 권한자이다",
   "SLA 를 작성하는 관행이다"
  ],
  "a": 1,
  "e": "서비스 데스크는 단일 접점(SPOC)이다. 근본 원인 분석은 문제 관리, 변경 승인은 변경 권한자의 역할이다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "Which statement about the service desk is CORRECT?",
  "c": [
   "It must consist of highly technical support staff",
   "It should not use automation or self-service",
   "It focuses on supporting people and business rather than simply technical issues",
   "It is only accessible by telephone"
  ],
  "a": 2,
  "e": "서비스 데스크는 기술 이슈보다 사람과 비즈니스 지원에 초점을 둔다. 고도의 기술 인력일 필요가 없고, 다양한 채널과 자동화를 활용한다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "가상 서비스 데스크(virtual service desk)에 대한 설명으로 옳은 것은?",
  "c": [
   "한 장소에 모든 인력이 모여 있다",
   "사용자와 직접 소통하지 않는다",
   "중앙형보다 단순한 기술로 운영된다",
   "여러 지리적 위치의 인력이 하나처럼 일하며 더 정교한 기술이 필요하다"
  ],
  "a": 3,
  "e": "가상 서비스 데스크는 분산된 인력이 함께 일하도록 라우팅·협업 등 더 정교한 기술이 필요하다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "다음 중 서비스 데스크 채널(접근 수단)의 예로 적절한 것 두 가지를 고르면?\n1. 서비스 포털과 모바일 앱\n2. 지속적 개선 등록부\n3. 변경 일정\n4. 라이브 채팅과 챗봇",
  "c": [
   "1, 3",
   "1, 4",
   "2, 4",
   "3, 4"
  ],
  "a": 1,
  "e": "채팅·챗봇, 포털·모바일 앱은 서비스 데스크 채널이다. 변경 일정과 CIR 은 각각 변경 실행·지속적 개선의 도구다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "Which skill is MOST important for service desk staff as automation increases?",
  "c": [
   "Software development",
   "Network engineering",
   "Empathy and emotional intelligence",
   "Database administration"
  ],
  "a": 2,
  "e": "자동화가 늘수록 서비스 데스크는 공감·감성지능·고객 서비스 역량이 더 중요해진다. 서비스 데스크는 고도로 기술적일 필요가 없다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 3,
  "q": "서비스 데스크에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "사용자의 이슈·질의·요청이 접수 확인·분류·소유·조치되도록 명확한 경로를 제공한다",
   "조직·비즈니스 프로세스·사용자에 대한 실질적 이해가 핵심이다",
   "지식 베이스·원격 접속 도구 등의 기술이 지원한다",
   "자동화가 확대되면 사람과의 연결 경로는 제거해야 한다"
  ],
  "a": 3,
  "e": "자동화가 늘어도 사용자가 필요할 때 사람에게 연결될 수 있어야 한다. 나머지는 서비스 데스크의 올바른 특징이다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 1,
  "q": "Which is a technology that supports the service desk?",
  "c": [
   "A knowledge base",
   "A change advisory board",
   "A continual improvement register",
   "A balanced scorecard"
  ],
  "a": 0,
  "e": "지식 베이스는 지능형 전화 시스템·워크플로 시스템·원격 접속 도구 등과 함께 서비스 데스크를 지원하는 기술이다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "서비스 데스크의 가치에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "모든 인시던트를 직접 해결해 지원팀을 대체한다",
   "서비스 수준 목표를 단독으로 결정한다",
   "사용자의 요구를 비즈니스 맥락에서 이해하고 적절히 연결해 준다",
   "문제의 영구 해결책을 승인한다"
  ],
  "a": 2,
  "e": "서비스 데스크의 핵심 가치는 비즈니스·사용자에 대한 실질적 이해를 바탕으로 수요를 포착하고 연결하는 데 있다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 1,
  "q": "다음 중 서비스 데스크 인력에게 요구되는 역량이 아닌 것은?",
  "c": [
   "고객 서비스 역량",
   "인시던트 분석과 우선순위화",
   "효과적인 커뮤니케이션",
   "변경 승인을 위한 위험 평가 권한"
  ],
  "a": 3,
  "e": "서비스 데스크 역량은 고객 서비스·공감·인시던트 분석·우선순위화·커뮤니케이션·감성지능이다. 변경 승인은 변경 권한자의 역할이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 1,
  "q": "What is the purpose of the 'service level management' practice?",
  "c": [
   "To set clear business-based targets for service levels, and to ensure that delivery of services is properly assessed, monitored and managed against these targets",
   "To establish and nurture links between the organization and its stakeholders",
   "To capture demand for incident resolution and service requests",
   "To align practices and services with changing business needs"
  ],
  "a": 0,
  "e": "SLM 의 키워드는 ‘명확한 비즈니스 기반 목표’ 와 그에 대한 평가·모니터링·관리다. 이해관계자와의 연결은 관계 관리의 목적이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 1,
  "q": "SLA(Service Level Agreement)의 정의로 옳은 것은?",
  "c": [
   "서비스 데스크가 사용하는 스크립트 모음",
   "서비스 제공자와 고객 간의 문서화된 합의로, 필요한 서비스와 기대 수준을 명시한다",
   "변경을 승인하는 사람 또는 그룹",
   "개선 아이디어를 추적하는 데이터베이스"
  ],
  "a": 1,
  "e": "SLA 는 제공자-고객 간 문서화된 합의다. 변경 승인자는 변경 권한자, 아이디어 추적 DB 는 CIR 이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "Which is a requirement for a successful SLA?",
  "c": [
   "It should contain only technical operational metrics",
   "It should be defined by the service provider without customer involvement",
   "It should not be related to a defined service",
   "It should be written in simple language that all parties can understand"
  ],
  "a": 3,
  "e": "성공적인 SLA 는 정의된 서비스·성과와 연결되고, 합의를 반영하며, 쉬운 언어로 작성된다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "‘수박 효과(Watermelon effect)’ 가 가리키는 상황은?",
  "c": [
   "SLA 지표는 모두 충족(녹색)되었지만 고객은 불만족(빨강)한 상황",
   "SLA 지표는 미달이지만 고객은 매우 만족한 상황",
   "변경이 많아 인시던트가 증가하는 상황",
   "서비스 요청이 인시던트로 잘못 분류되는 상황"
  ],
  "a": 0,
  "e": "운영 지표만 측정해 고객 경험을 놓치면 겉은 녹색, 속은 빨강인 수박 효과가 생긴다. 성과·고객 피드백을 함께 측정해야 한다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "다음 중 서비스 수준 관리의 정보원으로 ‘운영 지표(operational metrics)’ 에 해당하는 것 두 가지를 고르면?\n1. 인시던트 해결 시간\n2. 고객 만족도 설문\n3. 고객과의 개방형 질문 인터뷰\n4. 시스템 가용성",
  "c": [
   "1, 2",
   "1, 3",
   "1, 4",
   "2, 3"
  ],
  "a": 2,
  "e": "가용성·인시던트 해결 시간·변경 적시성·요청 처리 시간 등이 운영 지표다. 인터뷰는 고객 참여, 설문은 고객 피드백이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "Which approach is used in SLM customer engagement for initial listening, discovery and information capture?",
  "c": [
   "Sending only automated system availability reports",
   "Measuring incident resolution times",
   "Asking simple open questions, such as 'What does your work involve?'",
   "Reviewing the change schedule"
  ],
  "a": 2,
  "e": "고객 참여(Customer engagement)는 초기 경청·발견을 위해 ‘업무가 무엇인가?’ 같은 간단한 개방형 질문을 사용한다. 가용성 보고·해결 시간은 운영 지표다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "SLM 고객 피드백 중 ‘이벤트 기반 설문(event-based survey)’ 에 대한 설명으로 옳은 것은?",
  "c": [
   "특정 사례(예: 인시던트·요청 처리 직후)에 연결되어 수행된다",
   "1년에 한 번 전체 고객에게 정기적으로 수행한다",
   "시스템이 자동으로 측정한 가용성 수치다",
   "SLA 문서에 포함되는 계약 조항이다"
  ],
  "a": 0,
  "e": "이벤트 기반 설문은 특정 사건·사례와 연결된 설문이다. 정기적으로 수행하는 것은 주기적 설문이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 3,
  "q": "서비스 수준 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "서비스에 대한 종단간(end-to-end) 가시성을 제공한다",
   "SLA 는 서비스 제공자가 고객의 참여 없이 정해 통보하는 문서다",
   "서비스 리뷰를 통해 서비스 성과와 이슈를 보고한다",
   "운영 지표와 함께 비즈니스 지표를 활용한다"
  ],
  "a": 1,
  "e": "SLA 는 제공자와 소비자 간의 참여(engagement)로 만들어진 합의를 반영해야 한다. 나머지는 SLM 의 올바른 특징이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 3,
  "q": "Which TWO skills and competencies are required for service level management?\n1. Relationship management\n2. Software coding\n3. Business analysis\n4. Hardware repair",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 3",
   "2 and 4"
  ],
  "a": 1,
  "e": "SLM 에는 관계 관리, 비즈니스 연계, 비즈니스 분석, 상업·공급자 관리 역량이 필요하다. 코딩·하드웨어 수리는 SLM 역량이 아니다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 1,
  "q": "SLM 의 정보원 중 ‘비즈니스 지표(business metrics)’ 가 측정하는 것은?",
  "c": [
   "서버 CPU 사용률",
   "인시던트 해결 시간",
   "변경 실패율",
   "고객·이해관계자가 정의한 비즈니스 활동의 성공"
  ],
  "a": 3,
  "e": "비즈니스 지표는 고객이 정의한 비즈니스 활동의 성공을 측정한다. CPU·해결 시간·변경 실패율은 운영 측면의 지표다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "A service level agreement should relate to which of the following?",
  "c": [
   "Only the number of incidents logged",
   "Defined outcomes, not simply operational metrics",
   "Only internal technical targets",
   "Only the cost of the service provider's staff"
  ],
  "a": 1,
  "e": "SLA 는 고객이 원하는 성과(outcome)와 연결되어야 한다. 운영 지표만 담으면 수박 효과가 생긴다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "Identify the missing word in the following sentence.\nA known error is a [?] that has been analysed but has not been resolved.",
  "c": [
   "incident",
   "change",
   "problem",
   "event"
  ],
  "a": 2,
  "e": "알려진 오류는 ‘분석됐으나 해결되지 않은 문제(problem)’ 다. Missing word 유형의 단골 문항이다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "Identify the missing word in the following sentence.\nAn incident is an unplanned [?] to a service or reduction in the quality of a service.",
  "c": [
   "change",
   "request",
   "improvement",
   "interruption"
  ],
  "a": 3,
  "e": "인시던트는 계획되지 않은 중단(interruption) 또는 품질 저하다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "Identify the missing word in the following sentence.\nA [?] change is a low-risk, pre-authorized change that is well understood and fully documented.",
  "c": [
   "standard",
   "normal",
   "emergency",
   "major"
  ],
  "a": 0,
  "e": "저위험·사전 승인·완전 문서화는 표준 변경의 특징이다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "사용자가 ‘프린터 토너 교체’ 를 요청하려고 연락하는 첫 창구와, 그 요청을 처리하는 관행을 바르게 짝지은 것은?",
  "c": [
   "서비스 데스크 — 인시던트 관리",
   "서비스 수준 관리 — 변경 실행",
   "서비스 데스크 — 서비스 요청 관리",
   "문제 관리 — 서비스 요청 관리"
  ],
  "a": 2,
  "e": "모든 사용자의 단일 접점은 서비스 데스크이고, 토너 교체는 서비스 제공 행위 요청이므로 서비스 요청 관리가 처리한다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 3,
  "q": "같은 증상의 인시던트가 여러 부서에서 반복 보고되었다. 서비스 데스크는 임시 해결책으로 서비스를 복구했다. 이후 가장 적절한 조치는?",
  "c": [
   "인시던트가 복구되었으므로 추가 조치를 하지 않는다",
   "긴급 변경으로 해당 시스템을 즉시 교체한다",
   "SLA 를 수정해 해결 목표 시간을 늘린다",
   "문제를 기록해 원인을 분석하고 임시 해결책을 문제 기록에 문서화한다"
  ],
  "a": 3,
  "e": "반복 인시던트는 문제 식별의 입력이다. 문제 관리가 원인을 분석하고 임시 해결책·알려진 오류를 관리해 재발 가능성을 낮춘다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 3,
  "q": "보안 취약점이 활발히 악용되고 있어 즉시 패치가 필요하다. 이 변경을 처리하는 방법으로 가장 적절한 것은?",
  "c": [
   "긴급 변경으로 신속한 평가·승인을 거쳐 실행하고 문서화는 사후에 보완할 수 있다",
   "표준 변경으로 승인 없이 실행한다",
   "다음 달 변경 일정에 일반 변경으로 등록한다",
   "문제가 해결될 때까지 패치를 보류한다"
  ],
  "a": 0,
  "e": "즉시 실행이 필요한 보안 패치는 긴급 변경이다. 평가·승인은 신속화하고 문서화는 미룰 수 있다. 사전 정의되지 않았다면 표준 변경이 아니다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 3,
  "q": "Which statement about continual improvement is CORRECT?",
  "c": [
   "Continual improvement is only a value chain activity",
   "Continual improvement is both a practice and a component of the service value system",
   "Continual improvement is used only after major incidents",
   "Continual improvement is the responsibility of suppliers only"
  ],
  "a": 1,
  "e": "지속적 개선은 SVS 의 구성요소이면서 동시에 관행이고, 가치사슬의 ‘개선’ 활동과도 연결된다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "다음 중 서비스 수준 관리 관행에 속하는 활동은?",
  "c": [
   "사용자의 비밀번호 재설정 요청 처리",
   "인시던트 추세 분석으로 문제 식별",
   "변경 요청의 위험 평가와 승인",
   "고객과 서비스 수준 목표를 협상하고 서비스 리뷰로 성과를 보고"
  ],
  "a": 3,
  "e": "목표 협상과 서비스 리뷰는 SLM 활동이다. 비밀번호 재설정은 서비스 요청, 추세 분석은 문제 식별, 위험 평가·승인은 변경 실행이다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 3,
  "q": "서비스 요청 관리와 서비스 데스크의 관계에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "서비스 데스크는 요청 수요를 포착하는 접점이고, 서비스 요청 관리는 사전 정의된 요청을 처리한다",
   "두 관행은 동일하며 명칭만 다르다",
   "서비스 요청 관리는 모든 사용자의 단일 접점이다",
   "서비스 데스크는 요청을 받지 않고 인시던트만 받는다"
  ],
  "a": 0,
  "e": "서비스 데스크는 인시던트·요청 수요를 포착하는 SPOC 이고, 실제 요청 처리 방식의 표준화·자동화는 서비스 요청 관리가 담당한다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "Which practice manages workarounds and known errors?",
  "c": [
   "Service desk",
   "Problem management",
   "Service level management",
   "Change enablement"
  ],
  "a": 1,
  "e": "임시 해결책과 알려진 오류의 관리는 문제 관리 목적에 명시된 내용이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "다음 중 일반적으로 사전 승인(pre-authorized)된 변경은?",
  "c": [
   "일반 변경",
   "긴급 변경",
   "표준 변경",
   "모든 변경"
  ],
  "a": 2,
  "e": "사전 승인은 표준 변경만의 특징이다. 일반·긴급 변경은 변경 권한자의 평가·승인이 필요하다(긴급은 신속화)."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "다음 중 인시던트에 해당하는 것은?",
  "c": [
   "백업 서버의 디스크 하나가 고장 나 이중화가 사라졌으나 사용자는 아직 영향을 느끼지 못한 상황",
   "사용자가 새 모니터 지급을 요청한 상황",
   "다음 주 예정된 OS 업그레이드 계획",
   "반복 장애의 원인으로 분석된 펌웨어 결함"
  ],
  "a": 0,
  "e": "이중화 상실은 서비스 품질 저하이므로 사용자가 아직 못 느껴도 인시던트다. 모니터 요청은 서비스 요청, 업그레이드는 변경, 분석된 원인은 문제/알려진 오류다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델의 단계(질문)에 해당하지 않는 것은?",
  "c": [
   "비전은 무엇인가?(What is the vision?)",
   "누가 책임을 질 것인가?(Who is accountable?)",
   "도달했는가?(Did we get there?)",
   "추진력을 어떻게 유지할까?(How do we keep the momentum going?)"
  ],
  "a": 1,
  "e": "7단계는 비전·현재 위치·목표·계획·실행·확인·추진력 유지의 질문으로 구성된다. 책임자를 묻는 단계는 없다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선 등록부(CIR)에 대한 설명으로 적절하지 않은 것은?",
  "c": [
   "개선 아이디어를 기록·추적한다",
   "아이디어를 평가하고 우선순위를 정한다",
   "등록된 아이디어는 우선순위가 한 번 정해지면 다시 바꿀 수 없다",
   "팀이나 부서 단위로도 운영할 수 있다"
  ],
  "a": 2,
  "e": "CIR 의 아이디어는 비즈니스 상황 변화에 따라 재평가·재우선순위화된다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 3,
  "q": "Which statement about the continual improvement model is NOT correct?",
  "c": [
   "The model can be used iteratively",
   "Step 'Did we get there?' checks whether the desired value was achieved",
   "Step 'What is the vision?' links the initiative to the organization's vision and objectives",
   "Step 'Where do we want to be?' is where the baseline assessment is performed"
  ],
  "a": 3,
  "e": "기준선 평가는 2단계 ‘Where are we now?’ 에서 수행한다. 3단계는 측정 가능한 목표와 갭 분석이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "변경 실행(Change enablement)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "성공적인 변경의 수를 최대화하는 것이 목적이다",
   "가능한 한 변경의 수를 줄여 서비스를 안정시키는 것이 목적이다",
   "변경의 위험을 적절히 평가한다",
   "변경 일정을 관리한다"
  ],
  "a": 1,
  "e": "변경 실행은 변경을 억제하는 관행이 아니라 성공적인 변경을 최대화하는 관행이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "표준 변경(Standard change)의 특징으로 옳지 않은 것은?",
  "c": [
   "위험이 낮고 잘 이해되어 있다",
   "완전히 문서화되어 있다",
   "실행할 때마다 변경 권한자의 개별 승인이 필요하다",
   "흔히 서비스 요청으로 시작된다"
  ],
  "a": 2,
  "e": "표준 변경은 사전 승인되어 있어 실행 시 추가 승인이 필요 없다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 3,
  "q": "Which statement about emergency changes is NOT correct?",
  "c": [
   "They must be implemented as soon as possible",
   "Documentation may be deferred",
   "A separate change authority may be used",
   "They are always included in the change schedule well in advance"
  ],
  "a": 3,
  "e": "긴급 변경은 사전에 계획할 수 없으므로 보통 변경 일정에 포함되지 않는다. 나머지는 긴급 변경의 올바른 특징이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "변경 권한자(Change authority)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "조직의 모든 변경은 하나의 중앙 위원회가 승인해야 한다",
   "변경을 승인하는 사람 또는 그룹이다",
   "변경 유형과 모델에 따라 다르게 지정될 수 있다",
   "고속 조직에서는 분산되는 경향이 있다"
  ],
  "a": 0,
  "e": "ITIL 4 는 변경 유형별로 적절한 권한자를 지정하도록 하며, 모든 변경을 단일 위원회가 승인하는 것을 요구하지 않는다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "인시던트의 기록과 우선순위화에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "모든 인시던트는 기록되어야 한다",
   "비즈니스 영향을 기준으로 우선순위를 정한다",
   "인시던트는 보고된 순서대로 처리한다",
   "목표 해결 시간을 합의하고 전달한다"
  ],
  "a": 2,
  "e": "인시던트는 접수 순이 아니라 합의된 분류에 따른 비즈니스 영향으로 우선순위를 정한다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "스워밍(Swarming)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "여러 이해관계자가 처음부터 함께 작업한다",
   "적임자가 분명해지면 나머지 인원은 다른 업무로 돌아간다",
   "복잡하거나 원인이 불분명한 인시던트에 유용하다",
   "티어 1에서 해결하지 못하면 티어 2로 순차 에스컬레이션하는 방식이다"
  ],
  "a": 3,
  "e": "순차적 티어 에스컬레이션은 스워밍과 대비되는 전통적 방식이다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 3,
  "q": "Which is NOT a typical way in which incidents can be resolved?",
  "c": [
   "By waiting until problem management has identified the root cause in every case",
   "By users using self-help",
   "By the service desk",
   "By temporary teams working together on complex incidents"
  ],
  "a": 0,
  "e": "인시던트는 원인 규명을 기다리지 않고 셀프헬프·서비스 데스크·지원팀·임시 팀 등으로 빠르게 복구한다. 원인 규명은 문제 관리가 병행한다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "문제 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "인시던트의 실제·잠재 원인을 식별한다",
   "문제 관리의 목적은 정상 서비스를 가능한 빨리 복구하는 것이다",
   "임시 해결책과 알려진 오류를 관리한다",
   "인시던트의 발생 가능성과 영향을 줄인다"
  ],
  "a": 1,
  "e": "‘가능한 빨리 복구’ 는 인시던트 관리의 목적이다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "알려진 오류(Known error)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "분석이 완료된 문제다",
   "아직 해결되지 않았다",
   "오류 통제 단계에서 관리된다",
   "영구적으로 해결이 완료된 문제를 말한다"
  ],
  "a": 3,
  "e": "알려진 오류는 분석됐지만 해결되지 않은 문제다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 3,
  "q": "Which is NOT an activity of error control?",
  "c": [
   "Performing trend analysis of incident records to detect new problems",
   "Identifying potential permanent solutions",
   "Regularly re-assessing the status of known errors",
   "Improving workarounds"
  ],
  "a": 0,
  "e": "인시던트 추세 분석은 문제 식별(Problem identification)의 활동이다. 영구 해결책 식별·알려진 오류 재평가·임시 해결책 개선은 오류 통제 활동이다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "문제 식별의 정보원으로 적절하지 않은 것은?",
  "c": [
   "인시던트 기록의 추세 분석",
   "SLA 서명 일자",
   "공급자·파트너가 제공한 정보",
   "개발·테스트·프로젝트 팀의 정보"
  ],
  "a": 1,
  "e": "문제는 인시던트 추세, 반복 이슈, 주요 인시던트 처리, 공급자·파트너, 개발·테스트 팀 정보 등으로 식별된다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "서비스 요청의 예로 적절하지 않은 것은?",
  "c": [
   "비밀번호 재설정",
   "신규 소프트웨어 설치 요청",
   "결함 있는 업데이트로 인한 결제 시스템 중단",
   "회의실 프로젝터 대여 요청"
  ],
  "a": 2,
  "e": "서비스 중단은 인시던트다. 나머지는 사전 정의된 서비스 요청이다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "서비스 요청 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "처리 시간 기대치는 사용자에게 알리지 않는 것이 좋다",
   "요청 처리는 가능한 한 표준화·자동화한다",
   "정책으로 승인이 거의 필요 없는 요청을 정한다",
   "개선 기회를 찾아 처리 시간을 단축한다"
  ],
  "a": 0,
  "e": "처리 시간 기대치는 현실적인 수준으로 명확히 전달해야 한다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 1,
  "q": "서비스 데스크의 역할과 채널에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "모든 사용자의 단일 접점이다",
   "서비스 데스크는 전화로만 접근할 수 있어야 한다",
   "인시던트와 서비스 요청 수요를 포착한다",
   "포털·채팅·이메일 등 다양한 채널을 제공한다"
  ],
  "a": 1,
  "e": "서비스 데스크는 전화·포털·채팅·이메일·방문·소셜미디어 등 다양한 채널을 지원한다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 3,
  "q": "Which statement about the service desk is NOT correct?",
  "c": [
   "The service desk should understand the wider organization and its business processes",
   "Service desk staff need empathy and emotional intelligence",
   "A virtual service desk requires less sophisticated technology than a centralized one",
   "The service desk provides a clear path for users to report issues and requests"
  ],
  "a": 2,
  "e": "가상 서비스 데스크는 분산 인력을 하나처럼 운영하기 위해 더 정교한 기술이 필요하다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "서비스 데스크를 지원하는 기술로 적절하지 않은 것은?",
  "c": [
   "지능형 전화 시스템",
   "워크플로 시스템",
   "원격 접속 도구",
   "지속적 개선 모델 7단계"
  ],
  "a": 3,
  "e": "지속적 개선 모델은 기술이 아니라 개선 접근법이다. 나머지는 서비스 데스크 지원 기술이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 1,
  "q": "성공적인 SLA 의 요건으로 적절하지 않은 것은?",
  "c": [
   "정의된 서비스와 연결된다",
   "기술 담당자만 이해할 수 있는 전문 용어로 작성한다",
   "고객이 원하는 성과와 관련된다",
   "제공자와 소비자 간 합의를 반영한다"
  ],
  "a": 1,
  "e": "SLA 는 모든 당사자가 이해할 수 있는 간단한 언어로 작성해야 한다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "SLM 의 운영 지표(operational metrics)에 해당하지 않는 것은?",
  "c": [
   "시스템 가용성",
   "서비스 요청 처리 시간",
   "고객과의 개방형 질문 인터뷰 결과",
   "변경의 적시성과 효과"
  ],
  "a": 2,
  "e": "개방형 질문 인터뷰는 고객 참여(Customer engagement) 정보원이다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 3,
  "q": "Which is NOT one of the SLM information sources described in ITIL 4?",
  "c": [
   "Customer engagement",
   "Customer feedback",
   "Operational metrics",
   "Problem identification"
  ],
  "a": 3,
  "e": "SLM 정보원은 고객 참여·고객 피드백·운영 지표·비즈니스 지표다. 문제 식별은 문제 관리의 단계다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "What is the purpose of the information security management practice?",
  "c": [
   "To protect the information needed by the organization to conduct its business",
   "To ensure that accurate configuration information is available when needed",
   "To establish and nurture links between the organization and its stakeholders",
   "To plan and manage the full lifecycle of all IT assets"
  ],
  "a": 0,
  "e": "정보보안 관리의 목적은 조직 업무에 필요한 정보 보호다. 구성 정보 제공은 서비스 구성 관리, 이해관계자 연결은 관계 관리, 자산 수명주기는 IT 자산 관리의 목적이다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "What is the purpose of the relationship management practice?",
  "c": [
   "To ensure that suppliers and their performance are managed appropriately",
   "To set clear business-based targets for service levels",
   "To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels",
   "To capture demand for incident resolution and service requests"
  ],
  "a": 2,
  "e": "관계 관리는 이해관계자와의 연결을 전략·전술 수준에서 구축·육성한다. 공급자 성과는 공급자 관리, 서비스 수준 목표는 SLM, 수요 포착은 서비스 데스크의 목적이다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "공급자 관리(Supplier management)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "조직의 공급자와 그 성과가 적절히 관리되도록 한다",
   "이해관계자 전반과의 연결을 전략적·전술적 수준에서 육성하는 것이 목적이다",
   "핵심 공급자와 더 긴밀하고 협력적인 관계를 만든다",
   "품질 높은 제품·서비스의 매끄러운 제공을 지원한다"
  ],
  "a": 1,
  "e": "이해관계자 전반과의 연결 육성은 관계 관리의 목적이다. 공급자 관리는 공급자와 그 성과, 핵심 공급자와의 협력 관계에 초점을 둔다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "정보보안 관리 관행이 이해하고 관리하는 위험의 대상으로 가장 거리가 먼 것은?",
  "c": [
   "정보의 기밀성(Confidentiality)",
   "정보의 무결성(Integrity)",
   "인증(Authentication)과 부인방지(Non-repudiation)",
   "서비스 수준 목표(SLA) 달성률"
  ],
  "a": 3,
  "e": "정보보안 관리는 기밀성·무결성·가용성과 인증·부인방지 관련 위험을 다룬다. SLA 달성률은 서비스 수준 관리의 관심사다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "다음 중 '일반관리(General management)' 관행 그룹에 속하는 관행으로 옳은 것은?",
  "c": [
   "배포 관리",
   "릴리스 관리",
   "공급자 관리",
   "모니터링 및 이벤트 관리"
  ],
  "a": 2,
  "e": "정보보안·관계·공급자 관리는 일반관리 그룹이다. 배포 관리는 기술관리, 릴리스·모니터링 및 이벤트 관리는 서비스관리 그룹이다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "관계 관리(Relationship management)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "공급자 계약의 협상과 성과 평가를 주된 목적으로 한다",
   "조직과 이해관계자 사이의 연결을 구축하고 육성한다",
   "전략적·전술적 수준의 관계를 다룬다",
   "관계의 식별·분석·모니터링·지속적 개선을 포함한다"
  ],
  "a": 0,
  "e": "공급자 계약·성과는 공급자 관리의 영역이다. 관계 관리는 이해관계자 전반과의 연결을 전략·전술 수준에서 다룬다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 3,
  "q": "Which practice is concerned with understanding and managing risks to the confidentiality, integrity and availability of information?",
  "c": [
   "Service configuration management",
   "IT asset management",
   "Monitoring and event management",
   "Information security management"
  ],
  "a": 3,
  "e": "CIA(기밀성·무결성·가용성) 위험 관리는 정보보안 관리. 모니터링 및 이벤트 관리가 보안 이벤트를 탐지할 수는 있지만 목적 자체는 관찰·기록이다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "Which practice group does the deployment management practice belong to in ITIL 4?",
  "c": [
   "General management practices",
   "Technical management practices",
   "Service management practices",
   "Product management practices"
  ],
  "a": 1,
  "e": "배포 관리는 기술관리 그룹이다(기술관리 3개: 배포·인프라·소프트웨어 개발). 'Product management practices'는 ITIL 4 그룹명이 아니다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "What is the purpose of the release management practice?",
  "c": [
   "To make new and changed services and features available for use",
   "To move new or changed hardware and software to live environments",
   "To maximize the number of successful IT changes by ensuring risks are properly assessed",
   "To systematically observe services and service components"
  ],
  "a": 0,
  "e": "릴리스 관리 = 사용 가능하게(available for use). 이동은 배포 관리, 위험 평가·변경 성공은 변경 실행, 관찰은 모니터링 및 이벤트 관리."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "What is the purpose of the deployment management practice?",
  "c": [
   "To make new and changed services and features available for use",
   "To ensure accurate and reliable information about the configuration of services is available",
   "To move new or changed hardware, software, documentation, processes, or any other component to live environments",
   "To plan and manage the full lifecycle of all IT assets"
  ],
  "a": 2,
  "e": "배포 관리의 핵심 동사는 move(이동). 사용 가능하게 하는 것은 릴리스 관리다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "What is the purpose of the IT asset management practice?",
  "c": [
   "To ensure accurate and reliable information about CIs and their relationships is available",
   "To plan and manage the full lifecycle of all IT assets",
   "To record and report selected changes of state identified as events",
   "To protect the information needed by the organization"
  ],
  "a": 1,
  "e": "IT 자산 관리는 전체 수명주기 계획·관리로 가치 극대화·비용 통제·위험 관리를 돕는다. CI 관계 정보는 서비스 구성 관리."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "서비스 구성 관리(Service configuration management)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "서비스와 CI 구성에 관한 정확한 정보를 필요한 때·곳에 제공한다",
   "CI가 어떻게 구성되어 있는지와 CI 간 관계 정보를 포함한다",
   "변경 영향 분석과 인시던트 진단에 활용되는 정보를 제공한다",
   "IT 자산의 구매·폐기 결정과 라이선스 비용 통제를 주된 목적으로 한다"
  ],
  "a": 3,
  "e": "구매·폐기 결정과 비용 통제는 IT 자산 관리의 목적이다. 구성 관리는 CI 구성·관계 정보의 정확성과 가용성에 초점을 둔다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "모니터링 및 이벤트 관리(Monitoring and event management)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "서비스와 서비스 구성요소를 체계적으로 관찰한다",
   "이벤트로 식별된 선택된 상태 변화를 기록·보고한다",
   "인시던트를 해결해 정상 서비스를 가능한 한 빨리 복구하는 것이 목적이다",
   "정보보안 이벤트를 포함한 다양한 이벤트를 식별·우선순위화한다"
  ],
  "a": 2,
  "e": "신속한 복구는 인시던트 관리의 목적이다. 모니터링 및 이벤트 관리는 관찰과 상태 변화의 기록·보고, 대응 결정까지를 다룬다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "IT 자산 관리가 지원하는 의사결정으로 가장 적절한 것은?",
  "c": [
   "자산의 구매·재사용·폐기 결정",
   "긴급 변경의 승인 여부",
   "인시던트의 우선순위 결정",
   "서비스 수준 목표의 합의"
  ],
  "a": 0,
  "e": "IT 자산 관리는 구매·재사용·폐기 의사결정과 규제·계약 요구 충족을 지원한다. 긴급 변경 승인은 변경 실행, 우선순위는 인시던트 관리, 목표 합의는 SLM."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "모니터링(Monitoring)과 이벤트 관리(Event management)의 관계로 옳은 것은?",
  "c": [
   "이벤트 관리는 모니터링 없이도 상태 변화를 탐지할 수 있다",
   "모니터링과 이벤트 관리는 같은 활동의 다른 이름이다",
   "모니터링은 인시던트가 발생한 뒤에만 수행된다",
   "모니터링은 이벤트 관리 없이도 수행될 수 있지만, 이벤트 관리는 모니터링에 의존한다"
  ],
  "a": 3,
  "e": "모니터링은 관찰 자체, 이벤트 관리는 의미 있는 상태 변화를 기록·관리하는 것으로 모니터링 결과에 의존한다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "릴리스(Release)와 배포(Deployment)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "구성요소를 라이브 환경에 배포한 뒤 나중에 릴리스할 수 있다",
   "배포가 완료되면 해당 기능은 반드시 즉시 사용자에게 공개된다",
   "릴리스는 사용 가능하게 만든 서비스·CI의 버전이다",
   "배포 관리는 테스트·스테이징 환경 배포에도 관여할 수 있다"
  ],
  "a": 1,
  "e": "배포와 릴리스는 분리할 수 있다(예: 기능 토글로 배포 후 나중에 공개). 따라서 '반드시 즉시 공개'는 틀린 서술이다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "Which practice is MOST concerned with information about how configuration items are configured and the relationships between them?",
  "c": [
   "Service configuration management",
   "IT asset management",
   "Release management",
   "Relationship management"
  ],
  "a": 0,
  "e": "CI의 구성과 CI 간 관계 정보는 서비스 구성 관리의 핵심. 'Relationship management'는 사람·조직 이해관계자의 관계를 다룬다 — 'relationship'이라는 단어에 속지 말 것."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "다음 중 ITIL 4에서 배포 관리가 활용하는 배포 방식으로 언급되지 않는 것은?",
  "c": [
   "단계적(phased) 배포",
   "지속적 전달(continuous delivery)",
   "롤백 전용(rollback-only) 배포",
   "풀(pull) 배포"
  ],
  "a": 2,
  "e": "ITIL 4는 단계적·지속적 전달·빅뱅·풀 배포를 예로 든다. '롤백 전용 배포'라는 방식은 없다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "Which practice identifies and prioritizes infrastructure, services, business processes and information security events?",
  "c": [
   "Incident management",
   "Monitoring and event management",
   "Information security management",
   "Service configuration management"
  ],
  "a": 1,
  "e": "다양한 이벤트의 식별·우선순위화와 대응 결정은 모니터링 및 이벤트 관리의 목적 설명에 포함된다. 정보보안 '이벤트'를 탐지하는 것도 이 관행."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 3,
  "q": "다음 중 '서비스관리' 그룹이 아닌 관행은?",
  "c": [
   "릴리스 관리",
   "IT 자산 관리",
   "서비스 구성 관리",
   "배포 관리"
  ],
  "a": 3,
  "e": "배포 관리만 기술관리 그룹이다. 릴리스·IT 자산·서비스 구성 관리는 모두 서비스관리 그룹이다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 3,
  "q": "릴리스 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "새롭거나 변경된 서비스·기능을 사용 가능하게 한다",
   "애자일·DevOps 환경에서는 릴리스가 작고 잦은 경향이 있다",
   "릴리스 하나에는 오직 하나의 변경만 포함될 수 있다",
   "릴리스는 서비스나 CI 묶음의 버전일 수 있다"
  ],
  "a": 2,
  "e": "하나의 릴리스에는 여러 변경이 묶일 수 있다. '오직 하나'라는 절대어가 오답 신호다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 3,
  "q": "Which TWO statements about deployment management are CORRECT?\n1. It moves new or changed components to live environments\n2. It makes new features available to users\n3. It may also deploy components to other environments for testing or staging\n4. It belongs to the service management practice group",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 4",
   "3 and 4"
  ],
  "a": 1,
  "e": "배포 관리는 구성요소를 라이브(및 테스트·스테이징) 환경으로 옮긴다(1·3 참). 사용 가능하게 하는 것은 릴리스 관리(2 거짓), 그룹은 기술관리(4 거짓)."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 3,
  "q": "Which TWO are purposes of the IT asset management practice?\n1. Maximize value and control costs\n2. Ensure CI relationship information is available when needed\n3. Support decision-making about purchase, re-use and retirement of assets\n4. Record and report changes of state as events",
  "c": [
   "1 and 2",
   "2 and 4",
   "3 and 4",
   "1 and 3"
  ],
  "a": 3,
  "e": "가치 극대화·비용 통제(1)와 구매·재사용·폐기 의사결정 지원(3)이 IT 자산 관리다. 2는 서비스 구성 관리, 4는 모니터링 및 이벤트 관리."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "용어와 정의의 짝으로 옳지 않은 것은?",
  "c": [
   "이벤트 — 서비스의 계획되지 않은 중단",
   "인시던트 — 서비스의 계획되지 않은 중단 또는 품질 저하",
   "문제 — 하나 이상의 인시던트의 원인 또는 잠재적 원인",
   "알려진 오류 — 분석됐지만 해결되지 않은 문제"
  ],
  "a": 0,
  "e": "이벤트는 관리상 의미 있는 상태 변화다. '계획되지 않은 중단'은 인시던트의 정의 키워드다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "Identify the missing word in the following sentence.\nA [?] is a cause, or potential cause, of one or more incidents.",
  "c": [
   "known error",
   "event",
   "change",
   "problem"
  ],
  "a": 3,
  "e": "문제의 정의다. '분석됐지만 미해결'이 붙어야 known error."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "Identify the missing word in the following sentence.\nAn [?] is any change of state that has significance for the management of a service or other configuration item.",
  "c": [
   "incident",
   "event",
   "alert",
   "change"
  ],
  "a": 1,
  "e": "의미 있는 상태 변화 = 이벤트. 'change'는 추가·수정·제거이며 상태 변화(change of state)와 다르다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "What is a known error?",
  "c": [
   "A problem that has been analysed but has not been resolved",
   "An incident that has been resolved using a workaround",
   "A cause of incidents that has not yet been analysed",
   "An event that indicates an exception"
  ],
  "a": 0,
  "e": "알려진 오류 = 분석 완료·미해결 문제. 아직 분석되지 않은 원인은 그냥 문제다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "Identify the missing word in the following sentence.\nA [?] is any component that needs to be managed in order to deliver an IT service.",
  "c": [
   "IT asset",
   "service offering",
   "configuration item",
   "release"
  ],
  "a": 2,
  "e": "'needs to be managed'는 CI(구성항목) 정의의 키워드. 재무 가치가 핵심이면 IT asset."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "인시던트(Incident)에 해당하지 않는 것은?",
  "c": [
   "메일 서버가 예고 없이 중단됨",
   "웹사이트 응답 속도가 평소보다 크게 느려짐",
   "백업 서버의 디스크 하나가 고장 나 이중화가 깨짐(서비스는 정상)",
   "사용자가 새 노트북 지급을 요청함"
  ],
  "a": 3,
  "e": "새 노트북 지급은 정상 서비스 제공의 일부인 서비스 요청이다. 이중화가 깨진 것은 사용자 영향이 없어도 서비스 품질 저하이므로 인시던트로 본다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "문제(Problem)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "하나 이상의 인시던트의 원인 또는 잠재적 원인이다",
   "분석되었으나 해결되지 않으면 알려진 오류가 된다",
   "인시던트가 한 번 이상 발생한 뒤에만 문제로 기록할 수 있다",
   "문제 관리는 인시던트의 발생 가능성과 영향을 줄이는 것을 목표로 한다"
  ],
  "a": 2,
  "e": "문제는 '잠재적' 원인도 포함하므로 인시던트가 아직 없어도 기록할 수 있다(사전적 문제 식별)."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "다음 중 구성항목(CI)과 IT 자산에 대한 설명으로 옳은 것은?",
  "c": [
   "서버 한 대는 IT 자산이면서 동시에 CI일 수 있다",
   "모든 CI는 반드시 재무적 가치가 있어야 한다",
   "IT 자산과 CI는 완전히 같은 개념이다",
   "문서는 어떤 경우에도 CI가 될 수 없다"
  ],
  "a": 0,
  "e": "자산과 CI는 겹치지만 같지 않다. CI 기준은 '관리 필요', 자산 기준은 '재무 가치'이며 문서·SLA도 CI가 될 수 있다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "Which is an example of a change?",
  "c": [
   "A user asking how to use a feature",
   "A monitoring tool reporting that CPU usage is normal",
   "A user reporting that an application has stopped working",
   "Removing an obsolete server from a service's infrastructure"
  ],
  "a": 3,
  "e": "변경에는 '제거(removal)'도 포함된다. 사용법 문의는 서비스 요청(정보 요청), 정상 CPU 보고는 정보성 이벤트, 앱 중단 신고는 인시던트."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "임시방편(Workaround)에 대한 설명으로 옳은 것은?",
  "c": [
   "임시방편이 문서화되면 해당 문제는 종결(closed)된다",
   "완전한 해결책이 아직 없는 인시던트나 문제의 영향을 줄이거나 없애는 방법이다",
   "임시방편은 인시던트에는 쓸 수 없고 문제에만 쓴다",
   "임시방편은 반드시 변경 실행을 거쳐 승인받아야 한다"
  ],
  "a": 1,
  "e": "임시방편은 영향을 줄일 뿐 문제를 해결하지 않으므로 문제는 알려진 오류로 남는다. 인시던트·문제 모두에 쓸 수 있다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 3,
  "q": "Which TWO statements about events are CORRECT?\n1. An event is any change of state that has significance for the management of a service or CI\n2. Every event must be logged as an incident\n3. Events are typically recognized through notifications created by a service, CI or monitoring tool\n4. An event is an unplanned interruption to a service",
  "c": [
   "1 and 3",
   "1 and 2",
   "2 and 4",
   "3 and 4"
  ],
  "a": 0,
  "e": "1·3이 참. 모든 이벤트가 인시던트는 아니며(2 거짓), 계획되지 않은 중단은 인시던트의 정의다(4 거짓)."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 3,
  "q": "Which TWO definitions are CORRECTLY matched?\n1. Known error – a problem that has been analysed but not resolved\n2. IT asset – any component that needs to be managed to deliver an IT service\n3. Incident – a cause, or potential cause, of one or more problems\n4. Change – the addition, modification or removal of anything that could have a direct or indirect effect on services",
  "c": [
   "1 and 2",
   "2 and 3",
   "1 and 4",
   "3 and 4"
  ],
  "a": 2,
  "e": "1·4가 올바른 짝. 2는 CI 정의, 3은 문제 정의를 뒤집은 것이다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 1,
  "q": "인시던트 관리(Incident management)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "근본 원인을 확인한 뒤에 서비스를 복구한다",
   "정상 서비스를 가능한 한 빨리 복구해 부정적 영향을 최소화한다",
   "인시던트는 사용자 신고와 모니터링 양쪽으로 탐지될 수 있다",
   "해결 과정에서 임시방편(workaround)을 활용할 수 있다"
  ],
  "a": 0,
  "e": "인시던트 관리는 복구가 우선이며 근본 원인 규명은 문제 관리의 몫이다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 1,
  "q": "인시던트 관리와 문제 관리의 차이로 옳은 것은?",
  "c": [
   "인시던트 관리는 근본 원인 분석, 문제 관리는 서비스 복구에 초점을 둔다",
   "둘은 같은 관행이며 처리 시점만 다르다",
   "인시던트 관리는 신속한 서비스 복구, 문제 관리는 원인 규명과 재발 방지에 초점을 둔다",
   "문제 관리는 인시던트가 종결된 뒤에만 시작할 수 있다"
  ],
  "a": 2,
  "e": "인시던트 = 복구 속도, 문제 = 원인·재발 방지. 문제 관리는 인시던트와 병행되거나 인시던트 이전(잠재적 원인)에도 시작된다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "서비스 데스크(Service desk)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "인시던트 해결과 서비스 요청에 대한 수요를 포착한다",
   "인시던트만 접수하고 서비스 요청은 다른 경로로 받는다",
   "서비스 제공자와 사용자 사이의 진입점·단일 접점 역할을 한다",
   "전화·포털·채팅 등 여러 채널을 활용할 수 있다"
  ],
  "a": 1,
  "e": "서비스 데스크는 인시던트와 서비스 요청 모두의 수요를 포착하는 진입점·단일 접점이다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "이벤트(Event)와 인시던트(Incident)의 관계로 옳은 것은?",
  "c": [
   "모든 이벤트는 인시던트로 기록해야 한다",
   "인시던트는 항상 모니터링 이벤트로만 탐지된다",
   "이벤트는 서비스의 계획되지 않은 중단을 뜻한다",
   "일부 이벤트는 인시던트로 이어지지만 대부분의 이벤트는 정상 동작을 나타낸다"
  ],
  "a": 3,
  "e": "이벤트는 의미 있는 상태 변화일 뿐이며 상당수는 정보성이다. 인시던트는 사용자 신고로도 탐지된다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "문제 관리의 3단계를 순서대로 바르게 나열한 것은?",
  "c": [
   "문제 통제 → 문제 식별 → 오류 통제",
   "오류 통제 → 문제 식별 → 문제 통제",
   "문제 식별 → 문제 통제 → 오류 통제",
   "문제 식별 → 오류 통제 → 문제 통제"
  ],
  "a": 2,
  "e": "문제 식별(problem identification) → 문제 통제(분석·임시방편) → 오류 통제(알려진 오류 관리·영구 해결) 순이다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 3,
  "q": "알려진 오류(Known error)에 대한 영구 해결이 필요할 때 일반적으로 거쳐야 하는 관행은?",
  "c": [
   "변경 실행(Change enablement)",
   "서비스 데스크",
   "관계 관리",
   "모니터링 및 이벤트 관리"
  ],
  "a": 0,
  "e": "영구 해결은 대개 서비스에 대한 변경이므로 변경 실행을 통해 위험 평가·승인 후 구현한다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 3,
  "q": "Which TWO statements about incidents and problems are CORRECT?\n1. Incident management aims to restore normal service as quickly as possible\n2. A problem can be identified before any incident occurs\n3. Problem management must finish before an incident can be resolved\n4. A known error is a problem that has been resolved",
  "c": [
   "1 and 3",
   "2 and 4",
   "3 and 4",
   "1 and 2"
  ],
  "a": 3,
  "e": "1·2가 참. 인시던트 복구는 문제 해결을 기다리지 않으며(3 거짓), known error는 '미해결' 문제다(4 거짓)."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 1,
  "q": "경고(Alert)에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "서비스의 계획되지 않은 중단 그 자체",
   "인시던트의 근본 원인",
   "변경 권한자의 승인 결과",
   "임계치 도달·변화·장애 발생 등을 알려 조치가 필요할 수 있음을 통지하는 것"
  ],
  "a": 3,
  "e": "경고는 통지(notification)다. 중단 그 자체는 인시던트, 근본 원인은 문제. (공식 용어집 문구 [확인필요])"
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "다음 중 서비스 요청(Service request)에 해당하지 않는 것은?",
  "c": [
   "새 소프트웨어 설치 요청",
   "급여 시스템이 오류를 내며 접속되지 않는다는 신고",
   "공유 폴더 접근 권한 요청",
   "서비스 이용 방법에 대한 정보 요청"
  ],
  "a": 1,
  "e": "시스템 접속 불가는 계획되지 않은 중단이므로 인시던트다. 설치·접근 권한·정보 요청은 정상 서비스 제공의 일부인 서비스 요청."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "Which describes warranty?",
  "c": [
   "Assurance that a product or service will meet agreed requirements",
   "The functionality offered by a product or service to meet a particular need",
   "The perceived benefits, usefulness and importance of something",
   "A tangible or intangible deliverable of an activity"
  ],
  "a": 0,
  "e": "워런티 = 합의된 요구 충족 보증(얼마나 잘). 기능성은 유틸리티, 효익·유용성은 가치, 결과물은 산출물."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "다음 중 워런티(Warranty)와 관련된 요소가 아닌 것은?",
  "c": [
   "가용성",
   "용량",
   "제공되는 기능의 종류",
   "보안"
  ],
  "a": 2,
  "e": "가용성·용량·보안·연속성은 워런티(얼마나 잘)의 요소다. 기능의 종류는 유틸리티(무엇을)다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "산출물(Output)과 성과(Outcome)에 대한 설명으로 옳은 것은?",
  "c": [
   "성과는 활동의 결과물이고, 산출물은 이해관계자가 얻는 결과다",
   "산출물은 활동의 유·무형 결과물이고, 성과는 하나 이상의 산출물이 가능하게 한 이해관계자의 결과다",
   "산출물과 성과는 같은 의미다",
   "서비스는 고객이 원하는 산출물을 촉진한다"
  ],
  "a": 1,
  "e": "산출물=결과물(deliverable), 성과=이해관계자의 결과. 서비스는 성과(outcome)를 촉진한다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "다음 중 변경(Change)에 해당하지 않는 것은?",
  "c": [
   "노후 서버를 서비스 인프라에서 제거함",
   "데이터베이스 설정값을 수정함",
   "애플리케이션에 새 모듈을 추가함",
   "사용자가 서비스 사용 방법을 문의함"
  ],
  "a": 3,
  "e": "변경은 서비스에 영향을 줄 수 있는 것의 추가·수정·제거다. 사용법 문의는 정보 요청(서비스 요청)이다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "변경(Change)·릴리스(Release)·배포(Deployment)에 대한 짝으로 옳지 않은 것은?",
  "c": [
   "변경 — 서비스에 영향을 줄 수 있는 것의 추가·수정·제거",
   "릴리스 — 사용 가능하게 만든 서비스·CI의 버전",
   "배포 — 서비스에 영향을 줄 수 있는 것의 위험을 평가하고 승인한다",
   "배포 — 구성요소를 환경으로 이동"
  ],
  "a": 2,
  "e": "위험 평가·승인은 변경 실행의 몫이다. 배포 관리는 구성요소를 환경으로 옮기는 것."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "변경 유형에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "정상 변경은 사전 승인되어 있어 매번 별도 승인 없이 구현된다",
   "표준 변경은 저위험이며 사전 승인된 변경이다",
   "긴급 변경은 가능한 한 빨리 구현해야 하는 변경이다",
   "정상 변경은 변경 권한자의 승인을 받아 구현한다"
  ],
  "a": 0,
  "e": "사전 승인은 표준 변경의 특징이다. 정상 변경은 일정 수립·평가 후 변경 권한자 승인을 받는다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "긴급 변경(Emergency change)에 대한 설명으로 옳은 것은?",
  "c": [
   "사전 승인된 저위험 변경이라 별도 승인이 필요 없다",
   "변경 일정에 넣어 정기 회의에서 승인한다",
   "긴급 변경에는 어떤 평가도 하지 않는다",
   "가능한 한 빨리 구현해야 하며, 평가와 승인을 신속하게 처리한다"
  ],
  "a": 3,
  "e": "긴급 변경은 신속 구현을 위해 평가·승인을 신속화하지만 생략하지는 않는다. 사전 승인은 표준 변경의 특징."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "Who is responsible for authorizing budget for service consumption?",
  "c": [
   "User",
   "Sponsor",
   "Customer",
   "Service desk"
  ],
  "a": 1,
  "e": "스폰서 = 서비스 소비 자원(예산) 승인. 고객은 요구사항 정의·성과 책임, 사용자는 서비스 사용."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "Identify the missing word in the following sentence.\nA [?] is a person who defines the requirements for a service and takes responsibility for the outcomes of service consumption.",
  "c": [
   "customer",
   "user",
   "sponsor",
   "supplier"
  ],
  "a": 0,
  "e": "요구사항 정의 + 성과 책임 = 고객(customer)."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "서비스 수준 관리(SLM)와 서비스 수준 협약(SLA)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "SLM은 관행이고 SLA는 서비스 제공자와 고객 간 문서화된 합의다",
   "SLA 지표는 녹색인데 고객은 불만인 상태를 '워터멜론 효과'라고 한다",
   "SLA의 모든 지표가 목표를 충족하면 고객 만족도도 반드시 높다",
   "SLM은 고객 경험 전반을 반영하는 지표·피드백을 활용한다"
  ],
  "a": 2,
  "e": "지표 충족과 고객 만족은 다를 수 있다(워터멜론 SLA). 그래서 SLM은 고객 피드백 등 다양한 정보원을 함께 쓴다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "서비스 제공으로 소비자에게 새로 생기는 비용(예: 교육비, 서비스 요금)을 무엇이라 하는가?",
  "c": [
   "제거되는 비용(costs removed)",
   "부과되는 비용(costs imposed)",
   "부과되는 위험(risks imposed)",
   "산출물(output)"
  ],
  "a": 1,
  "e": "서비스 덕분에 소비자가 쓰지 않아도 되는 비용은 제거되는 비용, 새로 생기는 비용은 부과되는 비용이다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 3,
  "q": "서비스 가치 시스템(SVS)·서비스 가치 사슬·가치 흐름의 관계로 옳은 것은?",
  "c": [
   "가치 흐름이 SVS를 포함하는 가장 큰 개념이다",
   "가치 사슬과 가치 흐름은 같은 개념이다",
   "가치 사슬은 SVS 밖의 외부 모델이다",
   "SVS 안에 가치 사슬(6활동)이 있고, 가치 흐름은 특정 시나리오를 위해 가치 사슬 활동을 조합한 경로다"
  ],
  "a": 3,
  "e": "SVS(시스템 전체) ⊃ 가치 사슬(6활동 운영 모델) ⊃ 가치 흐름(특정 시나리오용 활동 조합)."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 3,
  "q": "Which TWO are aspects of warranty?\n1. Availability\n2. Functionality\n3. Security\n4. Features required by the customer",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 4",
   "3 and 4"
  ],
  "a": 1,
  "e": "가용성(1)과 보안(3)은 워런티(얼마나 잘). 기능성·요구 기능(2·4)은 유틸리티(무엇을)."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 3,
  "q": "Which statement about change, release and deployment is CORRECT?",
  "c": [
   "A release always contains exactly one change",
   "Deployment management assesses and authorizes changes",
   "Components can be deployed to live environments without being released to users",
   "Every deployment immediately makes features available to all users"
  ],
  "a": 2,
  "e": "배포와 릴리스는 분리할 수 있다(기능 토글 등). 릴리스엔 여러 변경이 묶일 수 있고, 변경 승인은 변경 실행의 몫이다."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 1,
  "q": "ITIL 4 Foundation 시험의 합격 기준으로 옳은 것은?",
  "c": [
   "40문항 중 26문항 이상(65%)",
   "40문항 중 28문항 이상(70%)",
   "40문항 중 24문항 이상(60%)",
   "40문항 중 30문항 이상(75%)"
  ],
  "a": 0,
  "e": "ITIL 4 Foundation 은 40문항 60분, 26/40(65%) 합격이다."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 1,
  "q": "ITIL 4 Foundation 시험 형식에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "40문항 객관식이며 시험 시간은 60분이다",
   "교재를 볼 수 없는 Closed book 시험이다",
   "비모국어로 응시하면 25% 추가 시간을 받을 수 있다",
   "오답에는 감점이 있으므로 모르는 문항은 비워 두는 것이 유리하다"
  ],
  "a": 3,
  "e": "감점이 없으므로 모든 문항에 응답해야 한다. 나머지는 공식 실러버스의 시험 형식과 일치한다."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "'List' 유형 문항에 대한 설명으로 옳은 것은?",
  "c": [
   "4개 진술 중 옳은 1개를 고른다",
   "4개 진술 중 옳은 2개를 고르며, 보기는 진술 번호의 조합으로 제시된다",
   "옳은 진술을 모두 고르면 부분 점수가 있다",
   "보기 없이 정답 개수를 직접 적는다"
  ],
  "a": 1,
  "e": "List 형은 '두 가지를 고르면?' 형태로 1과 2, 1과 3 같은 조합 보기 4개 중 하나를 고른다."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "List 유형에서 진술 4가 확실히 틀렸다고 판단했다. 가장 효율적인 다음 행동은?",
  "c": [
   "진술 4가 포함된 조합 보기를 모두 소거한다",
   "진술 4가 포함된 보기를 우선 선택한다",
   "남은 진술을 모두 정답으로 표시한다",
   "해당 문항을 비워 두고 넘어간다"
  ],
  "a": 0,
  "e": "확실한 오답 진술 하나로 그 번호가 든 조합을 지우면 남는 보기가 크게 줄어든다. 감점이 없으니 비워 둘 이유는 없다."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "60분에 40문항을 푸는 ITIL 4 Foundation 에서 문항당 평균 시간으로 가장 가까운 것은?",
  "c": [
   "약 1분",
   "약 2분",
   "약 1.5분",
   "약 3분"
  ],
  "a": 2,
  "e": "60분 ÷ 40문항 = 1.5분. 재검토 시간을 남기려면 1차 통독을 더 빠르게 진행한다."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 3,
  "q": "ITIL 4 Foundation 실러버스에서 가장 많은 배점이 걸린 학습목표는?",
  "c": [
   "15개 관행의 목적 암기(LO6.1, 5점)",
   "7개 관행의 상세 이해(LO7, 17점)",
   "7개 지침 원칙(LO2, 6점)",
   "서비스 관리 4차원(LO3, 2점)"
  ],
  "a": 1,
  "e": "LO7(7개 관행 상세, BL2)이 17점으로 최대다. 이 과목의 LO6(목적 5점+정의 2점)은 짧게 외워 확실히 따는 영역."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "다음 중 BL1(Recall/Define) 수준으로 출제되는 학습목표는?",
  "c": [
   "7개 지침 원칙 사용 설명(LO2.2)",
   "서비스 가치 사슬 활동의 목적 설명(LO5.2)",
   "7개 관행 상세 설명(LO7.1)",
   "15개 관행의 목적 암기(LO6.1)"
  ],
  "a": 3,
  "e": "BL1은 LO1.1·6.1·6.2(총 9점). 지침 원칙·가치 사슬·관행 상세는 모두 Describe/Explain 동사의 BL2."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "PeopleCert가 밝힌 ITIL 4 모듈 일몰(sunset) 계획 일자는?",
  "c": [
   "2026-02-12",
   "2026-12-31",
   "2027-12-31",
   "2028-06-30"
  ],
  "a": 2,
  "e": "PeopleCert FAQ는 모든 ITIL 4 모듈을 2027-12-31에 일몰할 계획이라고 밝혔다. 2026-02-12는 V5 Foundation 출시일로 알려진 날짜(2차)라 일몰일이 아니다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "ITIL Foundation Bridge (Version 5)의 응시 대상으로 옳은 것은?",
  "c": [
   "ITIL 4 Foundation 보유자",
   "ITIL 자격이 없는 입문자",
   "PRINCE2 Practitioner 보유자",
   "ITIL v3 Expert 보유자만"
  ],
  "a": 0,
  "e": "Bridge는 ITIL 4 Foundation 보유자가 V5로 업데이트하는 1일 과정이다. 자격이 없는 입문자는 V5 Foundation 본시험을 본다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 2,
  "q": "2026-10 기준 ITIL Foundation 시험 현황에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "ITIL 4 Foundation과 V5 Foundation이 병행 시행 중이다",
   "V5 출시와 함께 기존 ITIL 4 자격은 리셋되었다",
   "ITIL 4 모듈은 2027-12-31 일몰 예정이다",
   "Bridge 과정도 2027-12-31 일몰 예정이다"
  ],
  "a": 1,
  "e": "PeopleCert는 기존 ITIL 자격이 리셋 없이 유효하다고 밝혔다. 나머지는 공식 FAQ 내용과 일치한다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "ITIL Foundation (Version 5) 시험의 합격 기준은?",
  "c": [
   "24/40 (60%)",
   "26/40 (65%)",
   "28/40 (70%)",
   "30/40 (75%)"
  ],
  "a": 1,
  "e": "V5도 ITIL 4와 같이 40문항 중 26문항(65%) 이상이면 합격이다. 70%는 다른 시험과 혼동한 값이다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 2,
  "q": "ITIL 4 Foundation과 V5 Foundation 시험 형식 비교로 옳지 않은 것은?",
  "c": [
   "두 시험 모두 40문항 객관식이다",
   "두 시험 모두 Closed book이다",
   "V5는 공식 응시 언어에 한국어가 포함되었다",
   "두 시험 모두 시간은 60분이다"
  ],
  "a": 2,
  "e": "V5 공식 응시 언어는 9개이고 한국어는 없다. ITIL 4의 12개 언어에도 한국어는 없다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 3,
  "q": "ITIL 4 Foundation 보유자 A가 2027년 중 V5 자격으로 전환하려 한다. 가장 적절한 설명은?",
  "c": [
   "V5 전환은 ITIL 4 Managing Professional 보유자만 가능하다",
   "ITIL 4 자격이 2026-02에 만료되어 V5 본시험만 가능하다",
   "Bridge는 2028년까지 계속 운영된다",
   "Bridge(V5)를 수강·응시할 수 있으며 Bridge도 2027-12-31 일몰 예정이다"
  ],
  "a": 3,
  "e": "PeopleCert FAQ상 Bridge(V5)는 ITIL 4 Foundation 보유자용이며 ITIL 4 모듈과 함께 2027-12-31 일몰 예정이다. ITIL 4 자격은 만료·리셋되지 않는다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "Which statement about existing ITIL certifications after the release of ITIL Version 5 is CORRECT?",
  "c": [
   "They are reset and must be re-taken",
   "They remain valid without reset",
   "They are automatically converted to V5",
   "They expire on 2026-02-12"
  ],
  "a": 1,
  "e": "PeopleCert 공식 안내에 따르면 기존 자격은 리셋되지 않고 유효하다. 자동 V5 전환은 없으며 Bridge 등 별도 경로가 필요하다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 2,
  "q": "Which TWO statements about ITIL Foundation (Version 5) are correct?\n1. It has 40 multiple-choice questions\n2. It is an open-book exam\n3. The pass mark is 65%\n4. It is offered in Korean",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 4",
   "3 and 4"
  ],
  "a": 1,
  "e": "40문항·65% 합격(1·3)이 맞다. 시험은 Closed book이며(2 오답), 공식 언어 목록에 한국어는 없다(4 오답). List형은 오답 2개를 먼저 지우면 빠르다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 1,
  "q": "교육기관(비공식) 자료 기준, V5 Foundation 범주 중 비중이 가장 큰 것은?",
  "c": [
   "ITIL 가치 시스템",
   "핵심 용어·정의",
   "제품·서비스 수명주기",
   "가치흐름 매핑"
  ],
  "a": 0,
  "e": "ITIL 가치 시스템이 40%(16문항)로 가장 크다. 핵심 용어·정의는 30%로 두 번째다. 공식 원문은 [확인필요]."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "비공식 출처 기준 V5 범주 '핵심 용어·정의'의 비중과 40문항 환산 문항 수로 옳은 것은?",
  "c": [
   "10% — 4문항",
   "20% — 8문항",
   "30% — 12문항",
   "40% — 16문항"
  ],
  "a": 2,
  "e": "핵심 용어·정의는 30%로 약 12문항이다. 40%·16문항은 ITIL 가치 시스템의 값이다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 1,
  "q": "V5 Foundation 범주(비공식 출처) 중 비중이 각 2.5%로 가장 작은 두 범주는?",
  "c": [
   "4차원과 수명주기",
   "AI와 타 프레임워크",
   "가치흐름과 AI",
   "용어와 가치 시스템"
  ],
  "a": 1,
  "e": "ITIL과 AI, ITIL과 타 프레임워크가 각 2.5%(약 1문항)다. 가치흐름은 5%, 4차원·수명주기는 각 10%다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "다음 중 V5 Foundation 7개 범주(비공식 출처)에 해당하지 않는 것은?",
  "c": [
   "가치흐름 식별·매핑·관리",
   "ITIL과 AI",
   "7개 관행 상세 이해(17점)",
   "제품·서비스 수명주기"
  ],
  "a": 2,
  "e": "'7개 관행 상세 이해(17점)'는 ITIL 4 Foundation의 학습목표 7이다. 2차 출처에 따르면 V5 Foundation에서는 개별 관행 상세가 출제 범위에서 빠졌다([확인필요])."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 3,
  "q": "V5 Foundation 범주 비중 자료에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "PeopleCert 공식 v5.0 실러버스 원문으로 확정된 수치다",
   "시험마다 무작위로 정해져 의미가 없다",
   "ITIL 4 실러버스 배점을 그대로 옮긴 것이다",
   "교육기관 자료 여러 곳이 일치하는 비공식 수치로, 공식 원문 확인이 필요하다"
  ],
  "a": 3,
  "e": "이 사이트의 V5 범주·비중은 교육기관 2차 자료 3곳이 일치하는 값이며 공식 PDF 원문은 미확보다. ITIL 4 배점(LO1~7)과는 구조가 다르다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 1,
  "q": "According to training-provider sources, which V5 Foundation category carries 40% of the marks?",
  "c": [
   "Key ITIL terms and definitions",
   "ITIL Value System",
   "Product and Service Lifecycle",
   "ITIL and other frameworks"
  ],
  "a": 1,
  "e": "ITIL Value System이 40%(16문항)다. Key terms는 30%, Lifecycle은 10%, 타 프레임워크는 2.5%다(모두 비공식 출처)."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "비공식 출처 기준 V5 범주 '제품·서비스 관리 4차원'과 '제품·서비스 수명주기'의 비중 합은?",
  "c": [
   "10%",
   "15%",
   "20%",
   "30%"
  ],
  "a": 2,
  "e": "두 범주가 각 10%로 합 20%(약 8문항)다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 1,
  "q": "V5 제품·서비스 수명주기 8활동에 해당하지 않는 것은?",
  "c": [
   "Engage",
   "Acquire",
   "Discover",
   "Operate"
  ],
  "a": 0,
  "e": "Engage(참여)는 ITIL 4 가치사슬 6활동의 하나다. 수명주기 8활동은 Discover·Design·Acquire·Build·Transition·Operate·Deliver·Support다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 1,
  "q": "수명주기 8활동 중 첫 번째로 나열되며 기회·수요·이해관계자 요구를 탐색하는 활동은?",
  "c": [
   "Design",
   "Discover",
   "Deliver",
   "Transition"
  ],
  "a": 1,
  "e": "Discover(발견)가 첫 활동으로 나열된다. Design은 그 다음 설계, Deliver는 소비자에게 서비스를 제공하는 활동이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "필요한 자원·구성요소를 조직 외부에서 확보하는 수명주기 활동은?",
  "c": [
   "Build",
   "Transition",
   "Acquire",
   "Support"
  ],
  "a": 2,
  "e": "Acquire(획득)는 외부 확보, Build(구축)는 내부 제작·통합이다. 둘을 바꿔 낸 보기가 단골 함정이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "V5 수명주기 8활동에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "Discover에서 Support까지 8개 활동으로 구성된다",
   "활동은 반복적이며 비선형으로 수행될 수 있다",
   "Acquire와 Build는 서로 다른 활동이다",
   "반드시 나열된 순서대로 한 번씩만 수행해야 한다"
  ],
  "a": 3,
  "e": "8활동은 반복적·비선형이라 나열 순서대로 한 번만 도는 구조가 아니다. 나머지 보기는 옳다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "새로 만들어지거나 변경된 제품·서비스를 운영 상태로 옮기는 수명주기 활동은?",
  "c": [
   "Transition",
   "Operate",
   "Design",
   "Discover"
  ],
  "a": 0,
  "e": "Transition(전환)이 운영 상태로의 이전을 맡는다. Operate는 이전된 뒤 기술·구성요소를 가동·유지하는 활동이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 3,
  "q": "수명주기 활동 Operate·Deliver·Support의 구분으로 옳은 것은?",
  "c": [
   "Operate=사용자 지원, Deliver=기술 가동, Support=가치 제공",
   "Operate=기술 가동·유지, Deliver=소비자에게 서비스 제공, Support=사용자 문의·이슈 처리",
   "세 활동은 모두 ITIL 4의 Deliver & support와 같은 한 활동이다",
   "Operate=외부 조달, Deliver=내부 구축, Support=운영 이전"
  ],
  "a": 1,
  "e": "Operate는 기술 가동, Deliver는 소비자 가치 제공, Support는 사용자 지원이다. V5는 이를 별개 활동으로 나눈다(2차). '외부 조달·내부 구축'은 Acquire·Build다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 1,
  "q": "Which of the following is one of the eight activities of the ITIL V5 Product and Service Lifecycle?",
  "c": [
   "Plan",
   "Improve",
   "Transition",
   "Engage"
  ],
  "a": 2,
  "e": "Transition은 수명주기 8활동에 속한다. Plan·Improve·Engage는 ITIL 4 가치사슬 활동이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "Which lifecycle activity focuses on building components internally rather than obtaining them from outside?",
  "c": [
   "Acquire",
   "Deliver",
   "Discover",
   "Build"
  ],
  "a": 3,
  "e": "Build는 내부 제작·통합이고 Acquire는 외부 확보다. Discover는 탐색, Deliver는 서비스 제공이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 3,
  "q": "V5에서 '수명주기'와 '가치사슬'의 관계에 대한 설명으로 가장 적절한 것은?",
  "c": [
   "수명주기는 제품·서비스가 거치는 8활동이고, 가치사슬은 가치 시스템의 구성요소인 운영 모델이다",
   "두 용어는 완전히 같은 뜻이다",
   "가치사슬은 V5에서 삭제되었다",
   "수명주기는 ITIL 4에서 이미 8활동으로 정의되어 있었다"
  ],
  "a": 0,
  "e": "수명주기(8활동)와 가치사슬(가치 시스템 구성요소)은 다른 개념이다. V5 가치사슬 활동 구성 자체는 2차 출처끼리 상충해 [확인필요]이지만, 가치사슬이 삭제됐다는 근거는 없다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 1,
  "q": "다음 중 V5 수명주기 8활동만으로 짝지어진 것은?",
  "c": [
   "Plan · Improve · Engage",
   "Design · Build · Operate",
   "Obtain/build · Design & transition · Deliver & support",
   "Evaluate · Direct · Monitor"
  ],
  "a": 1,
  "e": "Design·Build·Operate는 8활동에 속한다. Plan·Improve·Engage와 Obtain/build 등은 ITIL 4 가치사슬 활동, EDM은 거버넌스 활동이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "ITIL 4의 '서비스 가치 시스템(SVS)'에 대응하는 V5의 명칭(2차 출처)은?",
  "c": [
   "제품 수명주기 시스템",
   "디지털 가치 사슬",
   "ITIL 가치 시스템(ITIL Value System)",
   "서비스 거버넌스 모델"
  ],
  "a": 2,
  "e": "2차 출처에 따르면 SVS는 V5에서 ITIL Value System으로 불린다. 5구성요소 골격은 유지된다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "거버넌스의 3가지 활동(EDM)으로 옳은 것은?",
  "c": [
   "Explore · Design · Measure",
   "Estimate · Decide · Manage",
   "Engage · Deliver · Maintain",
   "Evaluate · Direct · Monitor"
  ],
  "a": 3,
  "e": "거버넌스는 평가(Evaluate)·지시(Direct)·모니터(Monitor)로 조직을 지시·통제한다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "ITIL 가치 시스템의 5구성요소에 해당하지 않는 것은?",
  "c": [
   "서비스 수명주기 8활동",
   "거버넌스",
   "지침 원칙",
   "지속적 개선"
  ],
  "a": 0,
  "e": "5구성요소는 지침 원칙·거버넌스·가치사슬·관행·지속적 개선이다. 수명주기 8활동은 별도 범주(범주3)다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "V5에서의 7개 지침 원칙에 대한 설명으로 옳은 것은?",
  "c": [
   "9개로 늘어났다",
   "명칭이 ITIL 4와 동일하게 유지된다",
   "'Focus on value'가 삭제되었다",
   "거버넌스로 통합되어 사라졌다"
  ],
  "a": 1,
  "e": "2차 출처는 V5의 7원칙 명칭이 ITIL 4와 같다고 일치되게 서술한다. '원칙이 바뀌었다'는 보기가 함정이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "지속적 개선 모델의 첫 단계는?",
  "c": [
   "Where are we now?",
   "Take action",
   "What is the vision?",
   "Did we get there?"
  ],
  "a": 2,
  "e": "첫 단계는 비전 확인(What is the vision?)이고, 이어 현재 위치(Where are we now?)를 평가한다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "시스템이 내보내는 로그·메트릭·트레이스로 내부 상태를 추론할 수 있는 정도를 뜻하는 V5 핵심 용어는?",
  "c": [
   "연속성(Continuity)",
   "가용성(Availability)",
   "용량(Capacity)",
   "관측성(Observability)"
  ],
  "a": 3,
  "e": "관측성은 출력 데이터로 내부 상태를 추론하는 능력이다. 가용성·용량·연속성은 워런티 측면의 품질 특성이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 3,
  "q": "거버넌스와 관리(management)의 구분으로 옳은 것은?",
  "c": [
   "거버넌스는 방향 설정·감독(EDM)이고, 관리는 그 방향 안에서 실행한다",
   "거버넌스는 일상 운영을 실행하고 관리는 방향을 설정한다",
   "둘은 같은 활동을 다른 말로 부르는 것이다",
   "거버넌스는 V5에서 가치 시스템 구성요소에서 빠졌다"
  ],
  "a": 0,
  "e": "거버넌스는 평가·지시·모니터로 조직을 이끌고 통제하며, 관리는 실행 영역이다. 거버넌스는 V5에서도 가치 시스템 구성요소다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "2차 출처가 서술하는 V5 관행 그룹 구성으로 옳은 것은?",
  "c": [
   "일반 관리·서비스 관리·기술 관리 3그룹",
   "일반 관리·제품과 서비스 관리 2그룹",
   "핵심·지원·기술 3그룹",
   "관행 그룹이 없어졌다"
  ],
  "a": 1,
  "e": "2차 출처는 ITIL 4의 3그룹이 V5에서 일반 관리·제품과 서비스 관리 2그룹으로 재편됐다고 서술한다([확인필요]). 3그룹은 ITIL 4 구성이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "Which of the following are the three governance activities?",
  "c": [
   "Plan, Do, Check",
   "Discover, Design, Deliver",
   "Evaluate, Direct, Monitor",
   "Engage, Improve, Support"
  ],
  "a": 2,
  "e": "거버넌스 활동은 Evaluate·Direct·Monitor다. Plan-Do-Check는 PDCA 사이클, Discover 등은 수명주기 활동이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "Which is the correct sequence of the first three steps of the continual improvement model?",
  "c": [
   "Where are we now? → What is the vision? → Take action",
   "Where do we want to be? → How do we get there? → Where are we now?",
   "Take action → Did we get there? → What is the vision?",
   "What is the vision? → Where are we now? → Where do we want to be?"
  ],
  "a": 3,
  "e": "비전 → 현재 위치 → 목표 상태 순서다. 현재 위치를 비전보다 먼저 두는 보기가 흔한 함정이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "Which TWO terms appear as NEW value chain key definitions in ITIL V5 according to training-provider sources?\n1. Site reliability engineering (SRE)\n2. Observability\n3. Utility\n4. Customer",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 4",
   "3 and 4"
  ],
  "a": 0,
  "e": "2차 출처에서 SRE·관측성·CI/CD가 가치사슬 핵심 정의로 새로 등장한다. 유틸리티·고객은 ITIL 4부터 있던 기본 용어다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 3,
  "q": "Which statement about governance in ITIL V5 is NOT correct?",
  "c": [
   "Governance is a component of the ITIL Value System",
   "Governance activities include evaluate, direct and monitor",
   "Governance replaces the guiding principles in V5",
   "Governance directs and controls the organization"
  ],
  "a": 2,
  "e": "거버넌스는 지침 원칙을 대체하지 않는다. 두 요소 모두 가치 시스템의 별개 구성요소로 유지된다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "CI/CD에서 'CI'가 뜻하는 것은?",
  "c": [
   "Continuous Integration",
   "Continual Improvement",
   "Configuration Item",
   "Customer Interaction"
  ],
  "a": 0,
  "e": "CI/CD의 CI는 지속적 통합(Continuous Integration)이다. Configuration Item(구성항목)·Continual Improvement(지속적 개선)와 약어가 같아 함정이 된다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 1,
  "q": "소비자에게 직접 가치를 전달하는 가치흐름을 무엇이라 하는가?",
  "c": [
   "지원(enabling) 가치흐름",
   "핵심(core) 가치흐름",
   "거버넌스 가치흐름",
   "보조 수명주기"
  ],
  "a": 1,
  "e": "핵심 가치흐름이 소비자에게 직접 가치를 전달한다. 지원 가치흐름은 핵심 흐름을 가능케 하는 내부 흐름이다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 2,
  "q": "다음 중 지원(enabling) 가치흐름의 예로 가장 적절한 것은?",
  "c": [
   "고객의 신규 서비스 신청 처리",
   "사용자 장애 신고 해결",
   "서비스 데스크 인력 채용",
   "고객 주문 상품 배송"
  ],
  "a": 2,
  "e": "인력 채용은 핵심 흐름을 가능케 하는 내부 흐름이다. 나머지는 소비자에게 직접 가치를 전달하는 핵심 흐름이다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 2,
  "q": "가치흐름 매핑 절차(2차 출처)에서 현재 상태(As-Is) 매핑 바로 다음 단계는?",
  "c": [
   "가치흐름 식별",
   "미래 상태(To-Be) 설계",
   "개선 계획 실행",
   "분석(대기·낭비·병목)"
  ],
  "a": 3,
  "e": "식별 → As-Is → 분석 → To-Be → 개선 계획 순서다. As-Is를 분석한 뒤에 To-Be를 설계한다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 3,
  "q": "가치흐름 개선에 관한 설명으로 옳지 않은 것은?",
  "c": [
   "현재 상태 분석 없이 To-Be부터 설계하는 것이 권장된다",
   "대기 시간 축소가 개선의 주된 대상이 되는 경우가 많다",
   "리드 타임은 트리거부터 가치 전달까지의 전체 시간이다",
   "가치흐름은 특정 시나리오에 맞춘 활동의 경로다"
  ],
  "a": 0,
  "e": "As-Is 생략은 'Start where you are' 원칙에 어긋난다. 나머지는 린(Lean) 일반 개념과 일치한다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 1,
  "q": "What is a value stream?",
  "c": [
   "A series of steps an organization undertakes to create and deliver products and services to consumers",
   "A contract that defines service levels",
   "A group of IT assets with financial value",
   "A record of an unplanned interruption"
  ],
  "a": 0,
  "e": "가치흐름은 제품·서비스를 만들어 소비자에게 전달하기 위한 일련의 단계다. 나머지는 SLA·IT 자산·인시던트에 대한 설명이다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 2,
  "q": "In value stream mapping, which time measures the total elapsed time from the trigger to the delivery of value?",
  "c": [
   "Process time",
   "Lead time",
   "Wait time",
   "Touch time"
  ],
  "a": 1,
  "e": "리드 타임이 트리거부터 가치 전달까지의 전체 경과 시간이다. 처리(touch) 시간은 실제 작업 시간, 대기 시간은 멈춰 있는 시간이다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 1,
  "q": "목표를 받아 스스로 계획하고 도구를 활용해 여러 단계를 자율 수행하는 AI 유형은?",
  "c": [
   "생성형 AI",
   "규칙 기반 전문가 시스템",
   "에이전틱 AI",
   "AI 성숙도"
  ],
  "a": 2,
  "e": "에이전틱 AI는 자율적 다단계 수행이 특징이다. 생성형 AI는 콘텐츠 생성이 중심이고, AI 성숙도는 조직의 AI 활용 수준을 말한다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 2,
  "q": "ITIL과 타 프레임워크의 관계로 옳지 않은 것은?",
  "c": [
   "DevOps는 개발·운영 협업과 자동화를 강조한다",
   "PRINCE2는 프로젝트 관리 방법론이다",
   "PRINCE2 Agile은 PRINCE2에 애자일 방식을 결합한다",
   "DevOps가 도입되면 ITIL은 불필요해진다"
  ],
  "a": 3,
  "e": "DevOps와 ITIL은 보완 관계다. ITIL 관행(변경·릴리스·배포)을 CI/CD·자동화와 결합해 쓴다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 1,
  "q": "PRINCE2의 성격으로 옳은 것은?",
  "c": [
   "프로젝트 관리 방법론",
   "서비스 운영 프레임워크",
   "정보보안 관리 표준",
   "소프트웨어 테스트 기법"
  ],
  "a": 0,
  "e": "PRINCE2는 프로젝트 관리 방법론이다. 제품·서비스를 만드는 프로젝트를 관리하는 쪽에서 ITIL과 맞물린다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 2,
  "q": "AI 사용의 책임·위험·윤리·규제 준수를 지시·통제하는 체계를 무엇이라 하는가?",
  "c": [
   "AI 성숙도",
   "AI 거버넌스",
   "생성형 AI",
   "AI 자동화 파이프라인"
  ],
  "a": 1,
  "e": "AI 거버넌스는 AI 사용을 평가·지시·모니터하는 체계다. AI 성숙도는 도입 수준의 단계를 말한다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 1,
  "q": "Which statement best describes the relationship between ITIL and DevOps?",
  "c": [
   "DevOps replaces ITIL entirely",
   "ITIL prohibits automation used in DevOps",
   "They are complementary approaches",
   "DevOps applies only to project management"
  ],
  "a": 2,
  "e": "ITIL과 DevOps는 보완 관계다. ITIL 원칙 'Optimize and automate'도 자동화를 권장한다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 2,
  "q": "Which TWO are AI-related topics in the ITIL V5 Foundation 'ITIL and AI' category (per training-provider sources)?\n1. Agentic AI\n2. PESTLE\n3. ITIL AI Capability Model\n4. Service desk",
  "c": [
   "1 and 2",
   "1 and 3",
   "2 and 4",
   "3 and 4"
  ],
  "a": 1,
  "e": "에이전틱 AI와 ITIL AI Capability Model이 AI 범주 토픽이다. PESTLE은 4차원의 외부요인, 서비스 데스크는 관행이다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 3,
  "q": "V5 Foundation에서 'ITIL과 AI'·'ITIL과 타 프레임워크' 범주에 대한 수험 전략으로 가장 적절한 것은? (비중은 비공식 출처)",
  "c": [
   "두 범주가 합계 40%이므로 최우선으로 공부한다",
   "출제되지 않으므로 생략한다",
   "ITIL 4 실러버스에도 같은 비중으로 있으므로 ITIL 4 교재로 충분하다",
   "각 2.5%(약 1문항)이므로 정의·관계 1줄 수준으로 정리한다"
  ],
  "a": 3,
  "e": "두 범주는 각 2.5%로 약 1문항씩이다. ITIL 4 Foundation 실러버스에는 별도 학습목표가 없으므로 V5 자료로 핵심 정의를 정리한다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 1,
  "q": "V5에서 '서비스 관리'를 대신해 쓰이는 표현(2차 출처)은?",
  "c": [
   "제품 및 서비스 관리",
   "디지털 운영 관리",
   "IT 자산 관리",
   "가치 공동창출 관리"
  ],
  "a": 0,
  "e": "V5는 '제품 및 서비스 관리(Product and Service Management)'라는 표현을 쓴다. 4차원 이름도 이에 맞춰 바뀌었다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 2,
  "q": "ITIL 4 대비 V5에서 유지된 것으로 옳지 않은 것은?",
  "c": [
   "7개 지침 원칙 명칭",
   "관행 그룹 3개(일반·서비스·기술 관리)",
   "지속적 개선 모델 7단계",
   "4차원 명칭"
  ],
  "a": 1,
  "e": "2차 출처에 따르면 관행 그룹은 3개에서 2개로 재편됐다([확인필요]). 7원칙·4차원 명칭과 지속적 개선 모델은 유지된다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 2,
  "q": "ITIL 4 Foundation에서 최대 배점(17점)을 차지했으나 2차 출처상 V5 Foundation에서 빠진 것은?",
  "c": [
   "7개 지침 원칙 설명",
   "서비스 관리 핵심 용어",
   "7개 관행 상세 이해",
   "4차원 설명"
  ],
  "a": 2,
  "e": "ITIL 4 학습목표 7(7개 관행 상세, 17점)이 V5에서는 개별 관행 상세 대신 그룹·구조 수준으로 바뀌었다는 것이 2차 출처의 서술이다([확인필요])."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 1,
  "q": "Which of the following is a NEW key term emphasised in ITIL V5 compared with ITIL 4 Foundation (per training-provider sources)?",
  "c": [
   "Utility",
   "Warranty",
   "Incident",
   "Sustainability"
  ],
  "a": 3,
  "e": "지속가능성(Sustainability)과 UX가 V5 용어로 새로 강조된다. 유틸리티·워런티·인시던트는 ITIL 4부터 있던 용어다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 3,
  "q": "ITIL 4와 V5 비교 설명으로 옳지 않은 것은?",
  "c": [
   "V5에서 34개 관행이 모두 새 이름으로 바뀌었다",
   "V5에는 가치흐름 매핑·AI·타 프레임워크 범주가 추가되었다",
   "V5는 디지털 제품과 재화(goods)까지 관리 대상으로 명시한다",
   "두 Foundation 시험 모두 40문항·60분이다"
  ],
  "a": 0,
  "e": "2차 출처는 34개 관행 명칭이 유지되고 그룹 구성만 바뀌었다고 서술한다. 나머지 보기는 이 사이트의 비교표와 일치한다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 1,
  "q": "V5에서 유틸리티·워런티와 함께 가치 요소로 강조되는 개념(2차 출처)은?",
  "c": [
   "변경 자문 위원회(CAB)",
   "사용자 경험(UX)",
   "구성 관리 DB(CMDB)",
   "서비스 데스크"
  ],
  "a": 1,
  "e": "V5는 UX와 지속가능성을 핵심 용어로 다룬다. CAB·CMDB·서비스 데스크는 관행·도구 관련 용어다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 2,
  "q": "ITIL Foundation Bridge (Version 5)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "ITIL 4 Foundation 보유자를 대상으로 한다",
   "1일 업데이트 과정이다",
   "ITIL 4 일몰 이후에도 계속 운영되는 영구 과정이다",
   "PeopleCert FAQ에서 안내하는 과정이다"
  ],
  "a": 2,
  "e": "Bridge(V5)도 2027-12-31 일몰 예정이다. 나머지는 FAQ 안내와 일치한다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "비공식 출처 기준 V5 범주1 '핵심 용어·정의'의 주요 토픽에 해당하지 않는 것은?",
  "c": [
   "사용자 경험(UX)",
   "지속가능성(Sustainability)",
   "디지털 제품 벤더",
   "지속적 개선 모델 7단계"
  ],
  "a": 3,
  "e": "지속적 개선 모델은 범주4 ITIL 가치 시스템의 토픽이다. UX·지속가능성·디지털 제품 벤더는 범주1 용어다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 3,
  "q": "Which of the following is NOT an activity of the ITIL V5 Product and Service Lifecycle?",
  "c": [
   "Obtain/build",
   "Support",
   "Discover",
   "Acquire"
  ],
  "a": 0,
  "e": "Obtain/build는 ITIL 4 가치사슬 활동이다. V5 수명주기는 이를 Acquire와 Build 두 활동으로 나눠 다룬다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "ITIL 가치 시스템의 구성요소가 아닌 것은?",
  "c": [
   "관행(Practices)",
   "서비스 수준 합의(SLA)",
   "가치사슬(Value chain)",
   "거버넌스(Governance)"
  ],
  "a": 1,
  "e": "SLA는 서비스 제공자와 고객 사이의 문서화된 합의로, 가치 시스템 구성요소가 아니다. 구성요소는 지침 원칙·거버넌스·가치사슬·관행·지속적 개선이다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 2,
  "q": "V5 Foundation 'ITIL과 AI' 범주(비공식 출처)의 토픽으로 옳지 않은 것은?",
  "c": [
   "생성형 AI(Generative AI)",
   "AI 거버넌스",
   "PRINCE2 Agile",
   "ITIL AI Capability Model"
  ],
  "a": 2,
  "e": "PRINCE2 Agile은 '타 프레임워크' 범주 토픽이다. 나머지는 AI 범주 토픽이다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 2,
  "q": "Which of the following did NOT change from ITIL 4 to ITIL V5 (per training-provider sources)?",
  "c": [
   "The name of the value system",
   "The inclusion of an AI category in Foundation",
   "The number of practice groups",
   "The names of the seven guiding principles"
  ],
  "a": 3,
  "e": "7개 지침 원칙 명칭은 그대로다. 가치 시스템 이름·관행 그룹 수·AI 범주 포함은 V5에서 달라진 점이다(2차 출처)."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "ITIL 4에서 서비스(Service)는 고객이 특정 비용과 위험을 직접 관리하지 않고도 원하는 성과를 얻도록 하여 가치 공동창출을 가능하게 하는 수단이다.",
  "a": true,
  "e": "서비스 정의의 핵심 키워드: 수단·성과·비용과 위험을 관리하지 않음·가치 공동창출."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "서비스 관리(Service management)는 '가치 공동창출을 가능하게 하는 수단'으로 정의된다.",
  "a": false,
  "e": "그것은 서비스의 정의다. 서비스 관리는 '전문화된 조직 역량의 집합'이다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "조직(Organization)은 한 사람의 개인일 수도 있다.",
  "a": true,
  "e": "조직은 목표 달성을 위한 기능·책임·권한·관계를 가진 개인 또는 집단이다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 2,
  "q": "한 조직은 서비스 제공자이거나 서비스 소비자 중 하나의 역할만 가질 수 있다.",
  "a": false,
  "e": "같은 조직이 관계에 따라 제공자이자 소비자가 될 수 있다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 2,
  "q": "제품(Product)은 소비자에게 가치를 제공하도록 설계된 조직 자원의 구성이다.",
  "a": true,
  "e": "제품 = configuration of an organization's resources."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 3,
  "q": "ITIL 4는 서비스 제공자가 가치를 만들어 고객에게 전달(deliver)하는 관점을 기본으로 한다.",
  "a": false,
  "e": "ITIL 4는 제공자와 소비자가 함께 만드는 가치 공동창출(co-creation) 관점이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "가치(Value)는 어떤 것에 대해 인지된 편익·유용성·중요성이다.",
  "a": true,
  "e": "가치는 '인지된(perceived)' 것이므로 주관적이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "산출물(Output)은 하나 이상의 성과(Outcome)로 가능해지는 이해관계자의 결과다.",
  "a": false,
  "e": "관계가 뒤바뀌었다. 성과가 하나 이상의 산출물로 가능해지는 결과이고, 산출물은 활동의 결과물이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "교육 서비스에서 발급된 수료증은 성과(Outcome)가 아니라 산출물(Output)에 해당한다.",
  "a": true,
  "e": "수료증은 활동의 결과물이다. 역량 향상이 성과다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "서비스 요금과 사용자 교육 비용은 서비스로 인해 소비자에게서 '제거되는 비용'이다.",
  "a": false,
  "e": "요금·교육비는 소비자에게 '부과되는 비용(costs imposed)'이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "위험(Risk)은 결과의 불확실성으로도 정의되며, 긍정적 결과와 부정적 결과를 모두 포함할 수 있다.",
  "a": true,
  "e": "위험은 피해·손실 가능 사건이자 결과의 불확실성이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "서비스 소비자는 요구사항 정의에 능동적으로 참여함으로써 위험 감소에 기여할 수 있다.",
  "a": true,
  "e": "요구 정의 참여·CSF와 제약 전달·자원 접근 보장이 소비자의 기여 방법이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "가치는 객관적이므로 같은 서비스는 모든 이해관계자에게 같은 가치를 가진다.",
  "a": false,
  "e": "가치는 주관적이며 이해관계자마다 다르게 인지된다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 3,
  "q": "서비스는 소비자로부터 일부 위험을 제거하는 동시에 새로운 위험을 부과할 수도 있다.",
  "a": true,
  "e": "제거되는 위험과 부과되는 위험을 함께 보고 가치를 판단한다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 1,
  "q": "유틸리티(Utility)는 제품·서비스가 특정 요구를 충족하기 위해 제공하는 기능성이다.",
  "a": true,
  "e": "유틸리티 = 무엇을 하는가, fit for purpose."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 1,
  "q": "워런티(Warranty)는 '목적 적합성(fit for purpose)'을 의미한다.",
  "a": false,
  "e": "워런티는 사용 적합성(fit for use)이다. 목적 적합성은 유틸리티다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "가용성·용량·보안·연속성은 워런티와 관련된 대표 영역이다.",
  "a": true,
  "e": "모두 '얼마나 잘 수행하는가'를 나타낸다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "기능(유틸리티)만 충분하면 워런티가 부족해도 소비자는 온전한 가치를 얻는다.",
  "a": false,
  "e": "가치 창출에는 유틸리티와 워런티가 모두 필요하다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 3,
  "q": "유틸리티는 소비자의 성과를 지원하거나 소비자의 제약을 제거하는 방식으로 표현될 수 있다.",
  "a": true,
  "e": "performance supported / constraints removed."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "스폰서(Sponsor)는 서비스 소비를 위한 예산을 승인하는 사람이다.",
  "a": true,
  "e": "예산 승인 = 스폰서."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "고객(Customer)은 서비스를 사용하는 사람으로 정의된다.",
  "a": false,
  "e": "그것은 사용자의 정의다. 고객은 요구사항을 정의하고 성과에 책임지는 사람이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "고객·사용자·스폰서 역할은 직무 분리를 위해 반드시 서로 다른 사람이 맡아야 한다.",
  "a": false,
  "e": "한 사람이 여러 역할을 겸할 수 있다(예: 개인 소비자)."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스 오퍼링은 재화·자원 접근·서비스 행위를 포함할 수 있다.",
  "a": true,
  "e": "오퍼링 3구성요소: goods, access to resources, service actions."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "자원 접근(access to resources)을 제공하면 자원의 소유권이 소비자에게 이전된다.",
  "a": false,
  "e": "소유권 이전은 재화(goods)다. 자원 접근은 합의 조건 내에서 접근만 허용한다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "서비스 관계 관리(Service relationship management)는 서비스 제공자와 소비자가 함께 수행하는 공동 활동이다.",
  "a": true,
  "e": "joint activities 가 정의 키워드다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "소비자 자원의 관리는 서비스 제공(service provision) 활동에 포함된다.",
  "a": false,
  "e": "소비에 필요한 소비자 자원의 관리는 서비스 소비(consumption) 활동이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 3,
  "q": "서비스 소비자는 서비스로 얻은 새로운 자원을 이용해 자신의 소비자에게 서비스를 제공할 수 있다.",
  "a": true,
  "e": "이렇게 서비스 관계가 연쇄되어 서비스 체인·네트워크가 형성된다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 1,
  "q": "지침 원칙은 목표·전략·관리 구조가 바뀌어도 모든 상황에서 조직을 안내하는 권고사항이다.",
  "a": true,
  "e": "보편적·지속적인 권고사항이다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 2,
  "q": "지침 원칙은 번호 순서대로 하나씩 적용해야 한다.",
  "a": false,
  "e": "원칙은 상호작용하며 상황에 맞게 함께 고려한다. 번호는 순서·우선순위가 아니다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 2,
  "q": "모든 지침 원칙이 모든 상황에 똑같이 관련되지는 않으므로 관련성을 검토해야 한다.",
  "a": true,
  "e": "상황별 관련성을 검토해 적절한 원칙을 조합한다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 3,
  "q": "ITIL 4 지침 원칙은 Agile·DevOps·Lean 등 다른 방법론과 함께 쓸 수 없도록 설계되었다.",
  "a": false,
  "e": "공통 메시지를 공유하므로 오히려 통합 적용에 유리하다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 1,
  "q": "'가치에 집중' 원칙은 조직의 모든 활동이 직·간접적으로 이해관계자의 가치에 연결되어야 한다고 본다.",
  "a": true,
  "e": "Focus on value 의 핵심 메시지."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "'현재 위치에서 시작' 원칙은 기존 방식을 모두 버리고 백지에서 새로 설계할 것을 권고한다.",
  "a": false,
  "e": "처음부터 재구축하지 말고 기존 자산을 평가·재사용하라는 원칙이다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "'현재 위치에서 시작' 원칙에 따르면 측정 데이터만으로 현재 상태를 판단하기보다 직접 관찰로 보완해야 한다.",
  "a": true,
  "e": "측정은 편향될 수 있어 직접 관찰이 필요하다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "'피드백 기반 반복 진행' 원칙에서는 반복의 전·중·후에 피드백을 구한다.",
  "a": true,
  "e": "before, during and after each iteration."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 3,
  "q": "작업을 반복 단위로 나누어 진행하면 전체 과제의 큰 그림은 고려하지 않아도 된다.",
  "a": false,
  "e": "각 반복은 목표를 갖되 전체 그림(holistic view)을 유지해야 한다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 1,
  "q": "'협업과 가시성 증진' 원칙에서 협업은 반드시 모든 참여자의 합의(consensus)를 뜻한다.",
  "a": false,
  "e": "협업이 만장일치 합의를 의미하지는 않는다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "'총체적 사고·작업' 원칙은 서비스 관리의 4차원을 모두 고려하라고 권고한다.",
  "a": true,
  "e": "어떤 요소도 단독으로 존재하지 않으므로 4차원 전체를 본다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "'단순·실용 유지' 원칙은 모든 예외 상황마다 별도 규칙을 만들어 둘 것을 권고한다.",
  "a": false,
  "e": "예외마다 규칙을 만들면 복잡해지므로 지양한다."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 1,
  "q": "'최적화·자동화' 원칙에서는 최적화를 먼저 하고 그다음 자동화한다.",
  "a": true,
  "e": "Optimize then automate."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 3,
  "q": "'최적화·자동화' 원칙의 목표는 사람의 개입을 완전히 없애는 것이다.",
  "a": false,
  "e": "사람의 개입은 실제로 가치를 더하는 곳에만 두라는 것이지 완전 제거가 목표는 아니다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "서비스 관리 4차원은 조직과 사람, 정보와 기술, 파트너와 공급자, 가치 흐름과 프로세스다.",
  "a": true,
  "e": "ITIL 4 의 4차원 구성이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "PESTLE 은 서비스 관리의 다섯 번째 차원이다.",
  "a": false,
  "e": "PESTLE 은 4차원에 영향을 주는 외부 요인이지 차원이 아니다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "조직 문화와 리더십은 조직과 사람 차원의 고려사항이다.",
  "a": true,
  "e": "구조·문화·역할·역량·리더십은 조직과 사람 차원이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "정보와 기술 차원은 하드웨어·소프트웨어 등 기술만 다루고 정보 자체는 다루지 않는다.",
  "a": false,
  "e": "서비스 관리에 필요한 정보·지식도 이 차원에 포함된다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "파트너와 공급자 차원은 서비스 설계·제공·지원 등에 관여하는 다른 조직과의 관계를 다룬다.",
  "a": true,
  "e": "타 조직과의 관계·계약·소싱 전략이 이 차원의 범위다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "4차원은 경계가 명확하므로 차원별로 독립 관리하는 것이 권장된다.",
  "a": false,
  "e": "차원은 서로 겹치고 상호작용하므로 총체적으로 다뤄야 한다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "4차원은 SVS 의 모든 구성요소에 적용된다.",
  "a": true,
  "e": "4차원은 SVS 전체에 적용되는 관점이다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 3,
  "q": "자원 부족과 비용 문제는 조직의 공급자 전략에 영향을 주는 요인이다.",
  "a": true,
  "e": "공급자 전략 요인에는 전략적 초점·문화·자원 부족·비용·전문성·외부 제약·수요 패턴이 있다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "프로세스는 입력을 출력으로 변환하는 상호 연관되거나 상호작용하는 활동의 집합이다.",
  "a": true,
  "e": "ITIL 4 의 프로세스 정의 취지다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 1,
  "q": "SVS 의 입력은 기회와 수요이고 출력은 가치다.",
  "a": true,
  "e": "기회·수요 → SVS → 가치."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 1,
  "q": "가치(value)는 SVS 의 다섯 구성요소 중 하나다.",
  "a": false,
  "e": "가치는 SVS 의 출력이다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "수요(demand)는 외부 고객의 필요만을 의미한다.",
  "a": false,
  "e": "내부·외부 소비자 모두의 필요·욕구다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "SVS 는 조직 내 사일로를 줄이고 통합·조정을 촉진한다.",
  "a": true,
  "e": "사일로 해소와 유연성은 SVS 의 효과다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 3,
  "q": "기회(opportunity)는 수요가 있을 때에만 존재한다.",
  "a": false,
  "e": "기회는 수요와 무관하게 가치를 더하거나 개선할 가능성으로 존재할 수 있다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "SVS 의 목적은 이해관계자와 지속적으로 가치를 공동창출하도록 보장하는 것이다.",
  "a": true,
  "e": "SVS 목적의 취지다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "SVS 의 구성요소는 지침 원칙, 거버넌스, 서비스 가치 사슬, 관행, 지속적 개선이다.",
  "a": true,
  "e": "SVS 5구성요소다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "거버닝 바디는 계획(Plan)·실행(Do)·점검(Check) 활동을 수행한다.",
  "a": false,
  "e": "거버닝 바디의 활동은 평가·지시·모니터(EDM)다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "ITIL 4 의 관행은 일반 관리 14개, 서비스 관리 17개, 기술 관리 3개다.",
  "a": true,
  "e": "총 34개 관행이다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "관행과 가치 사슬 활동은 1:1 로 대응한다.",
  "a": false,
  "e": "한 관행이 여러 활동에, 한 활동이 여러 관행에 관련된다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "지속적 개선은 SVS 구성요소이면서 가치 사슬 활동이고 관행이기도 하다.",
  "a": true,
  "e": "세 수준 모두에 등장한다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 3,
  "q": "거버넌스는 지속적 개선의 대상에서 제외된다.",
  "a": false,
  "e": "거버넌스도 지속적 개선의 대상이다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "지침 원칙은 조직의 목표나 구조가 바뀌면 효력이 없어진다.",
  "a": false,
  "e": "지침 원칙은 목표·전략·업무 유형·관리 구조와 관계없이 모든 상황에서 적용되는 권고다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 1,
  "q": "서비스 가치 사슬은 6개 활동으로 구성된다.",
  "a": true,
  "e": "Plan·Improve·Engage·D&T·Obtain/build·Deliver and support."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "가치 사슬 활동은 항상 Plan → Engage → Design and transition → … 의 고정 순서로 수행된다.",
  "a": false,
  "e": "활동은 상호 연결되며 순서는 가치 흐름마다 다르다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "가치 사슬 활동의 입력은 외부 수요이거나 다른 활동의 출력이다.",
  "a": true,
  "e": "활동은 입력을 출력으로 변환하고 트리거를 주고받는다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "가치 사슬은 SVS 의 중심 구성요소로, 서비스의 창출·제공·지속적 개선을 위한 운영 모델이다.",
  "a": true,
  "e": "가치 사슬의 정의 취지다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 3,
  "q": "Monitor 는 서비스 가치 사슬 활동 중 하나다.",
  "a": false,
  "e": "Monitor 는 거버닝 바디의 EDM 활동이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "Plan 의 목적은 비전·현 상태·개선 방향에 대한 공유된 이해를 보장하는 것이다.",
  "a": true,
  "e": "Plan 의 목적 핵심어는 '공유된 이해'다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "Obtain/build 의 목적은 서비스를 사용자에게 직접 제공하는 것이다.",
  "a": false,
  "e": "Obtain/build 는 서비스 구성요소의 가용성이 목적이며, 제공은 Deliver and support 다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "품질·비용·출시 기간에 대한 기대 충족은 Design and transition 의 목적이다.",
  "a": true,
  "e": "time to market 은 D&T 의 판별 키워드다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Engage 는 이해관계자 요구에 대한 이해, 투명성, 좋은 관계를 제공하는 활동이다.",
  "a": true,
  "e": "Engage 의 목적이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "거버닝 바디의 정책과 제약은 Deliver and support 의 주 입력이다.",
  "a": false,
  "e": "거버닝 바디의 정책·요구·제약은 Plan 의 입력이다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 3,
  "q": "Improve 는 모든 가치 사슬 활동으로부터 성과 정보와 개선 기회를 입력받는다.",
  "a": true,
  "e": "Improve 는 전 활동의 성과 정보를 받는다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 3,
  "q": "사용자 지원 작업은 Plan 이 Deliver and support 로 보내는 출력이다.",
  "a": false,
  "e": "사용자 지원 작업은 Engage 가 Deliver and support 로 보낸다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Deliver and support 는 Obtain/build 로 변경 요청을 보낼 수 있다.",
  "a": true,
  "e": "운영 중 필요한 수정은 변경 요청으로 Obtain/build 에 전달된다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 1,
  "q": "가치 흐름은 조직이 소비자에게 제품·서비스를 만들어 전달하기 위해 수행하는 일련의 단계다.",
  "a": true,
  "e": "가치 흐름의 정의 취지다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "하나의 가치 흐름 안에서 같은 가치 사슬 활동이 두 번 이상 나올 수 없다.",
  "a": false,
  "e": "같은 활동(예: Engage)이 여러 번 등장할 수 있다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "가치 흐름은 가치 사슬 활동과 관행의 특정 조합이다.",
  "a": true,
  "e": "시나리오별 조합이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "가치 흐름과 프로세스는 ITIL 4 에서 같은 의미로 쓰인다.",
  "a": false,
  "e": "가치 흐름은 가치 전달 단계 전체, 프로세스는 입력→출력 변환 활동 집합이다."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 3,
  "q": "가치 흐름은 한 번 설계하면 고정되며 재검토하지 않는다.",
  "a": false,
  "e": "환경 변화에 따라 지속적으로 재검토·개선한다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선의 목적은 변화하는 비즈니스 요구에 조직의 관행과 서비스를 정렬하는 것이다.",
  "a": true,
  "e": "‘align with changing business needs’ 가 목적의 핵심이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선은 전담 개선 팀만의 책임이다.",
  "a": false,
  "e": "지속적 개선은 조직 내 모든 사람의 책임이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델의 첫 단계는 ‘What is the vision?’ 이다.",
  "a": true,
  "e": "비전 → 현재 위치 → 목표 → 계획 → 실행 → 확인 → 추진력 유지 순이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "기준선 평가(baseline assessment)는 지속적 개선 모델의 ‘Where do we want to be?’ 단계에서 수행한다.",
  "a": false,
  "e": "기준선 평가는 2단계 ‘Where are we now?’ 의 활동이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "조직에는 여러 개의 지속적 개선 등록부(CIR)가 존재할 수 있다.",
  "a": true,
  "e": "개인·팀·부서·조직 단위로 여러 CIR 을 둘 수 있다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선 모델은 한 번 수행하면 끝나는 선형 절차다.",
  "a": false,
  "e": "모델은 반복적으로 적용되며 미달 시 앞 단계로 돌아간다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 3,
  "q": "지속적 개선은 SVS 의 구성요소이자 관행이다.",
  "a": true,
  "e": "SVS 5구성요소 중 하나이면서 15개 Foundation 관행 중 하나다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "변경 실행의 목적은 성공적인 서비스·제품 변경의 수를 최대화하는 것이다.",
  "a": true,
  "e": "위험 평가·승인·변경 일정 관리로 성공적인 변경을 최대화한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "표준 변경은 사전 승인되어 실행 시 추가 승인이 필요 없다.",
  "a": true,
  "e": "표준 변경은 저위험·잘 이해된·문서화된 사전 승인 변경이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "표준 변경은 실행될 때마다 위험 평가를 수행해야 한다.",
  "a": false,
  "e": "위험 평가는 절차를 만들 때 수행하고, 절차가 바뀌면 재평가한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "긴급 변경은 문서화를 실행 이후로 미룰 수 있다.",
  "a": true,
  "e": "긴급 변경은 평가·승인을 신속화하고 문서화를 사후로 미룰 수 있다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "긴급 변경은 평가와 승인 없이 실행한다.",
  "a": false,
  "e": "평가·승인을 생략하는 것이 아니라 신속화한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "변경 권한자(change authority)는 변경을 승인하는 사람 또는 그룹이다.",
  "a": true,
  "e": "변경 유형·모델에 따라 적절한 권한자를 지정한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "긴급 변경은 일반적으로 변경 일정에 포함된다.",
  "a": false,
  "e": "긴급 변경은 보통 변경 일정에 포함되지 않는다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 3,
  "q": "고속 조직에서는 변경 권한을 분산해 동료 검토(peer review)로 승인하기도 한다.",
  "a": true,
  "e": "ITIL 4 는 권한의 분산을 고속 조직의 일반적 경향으로 설명한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "변경 일정은 인시던트 관리와 문제 관리에도 정보를 제공한다.",
  "a": true,
  "e": "최근 변경 정보는 인시던트 진단·문제 분석에 쓰인다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "인시던트 관리의 목적은 정상 서비스 운영을 가능한 빨리 복구해 부정적 영향을 최소화하는 것이다.",
  "a": true,
  "e": "복구 속도가 핵심이다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "인시던트는 접수된 순서대로 처리한다.",
  "a": false,
  "e": "합의된 분류에 따라 비즈니스 영향이 큰 것부터 처리한다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "스워밍은 인시던트를 1선·2선·3선 지원팀 순서로 넘기는 방식이다.",
  "a": false,
  "e": "스워밍은 여러 사람이 처음부터 함께 일하다 적임자가 남는 협업 방식이다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "주요 인시던트는 별도의 프로세스로 관리할 수 있다.",
  "a": true,
  "e": "주요 인시던트와 정보보안 인시던트는 별도 프로세스가 필요할 수 있다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "목표 해결 시간은 합의·문서화되고 사용자에게 전달되어야 한다.",
  "a": true,
  "e": "기대치를 현실적으로 맞추기 위해서다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 3,
  "q": "사용자가 아직 인지하지 못한 서비스 품질 저하는 인시던트가 아니다.",
  "a": false,
  "e": "품질 저하는 사용자 인지와 무관하게 인시던트다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "문제는 하나 이상 인시던트의 원인 또는 잠재 원인이다.",
  "a": true,
  "e": "문제의 정의다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "알려진 오류는 분석되고 해결이 완료된 문제다.",
  "a": false,
  "e": "알려진 오류는 분석됐지만 아직 해결되지 않은 문제다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "문제 관리의 세 단계는 문제 식별, 문제 통제, 오류 통제다.",
  "a": true,
  "e": "Problem identification → Problem control → Error control."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "임시 해결책은 문제 분석이 끝난 뒤에만 문서화할 수 있다.",
  "a": false,
  "e": "어느 단계에서든 문서화할 수 있다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "영구 해결책의 식별은 오류 통제 단계의 활동이다.",
  "a": true,
  "e": "오류 통제는 알려진 오류를 관리하며 영구 해결책을 식별한다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 3,
  "q": "효과적인 임시 해결책이 있으면 문제가 알려진 오류 상태로 남아 있을 수 있다.",
  "a": true,
  "e": "영구 해결의 비용·효과를 고려해 알려진 오류로 남길 수 있다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 3,
  "q": "문제 관리는 기술 구성요소만 조사한다.",
  "a": false,
  "e": "4차원 모두를 조사한다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "서비스 요청은 정상적인 서비스 제공의 일부다.",
  "a": true,
  "e": "서비스 요청은 실패나 품질 저하가 아니다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "사용자의 불만(complaint)은 서비스 요청의 유형이 아니다.",
  "a": false,
  "e": "피드백·칭찬·불만도 서비스 요청 유형이다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "서비스 요청 처리는 가능한 한 표준화·자동화해야 한다.",
  "a": true,
  "e": "기존 워크플로 모델을 활용해 표준화·자동화한다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "일부 서비스 요청은 표준 변경으로 처리될 수 있다.",
  "a": true,
  "e": "사전 승인된 표준 변경이 서비스 요청으로 시작되는 경우가 많다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 3,
  "q": "모든 서비스 요청은 단순한 워크플로만 가진다.",
  "a": false,
  "e": "신규 입사자 셋업처럼 복잡한 워크플로도 있다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 1,
  "q": "서비스 데스크는 서비스 제공자와 모든 사용자 간의 단일 접점이다.",
  "a": true,
  "e": "진입점·단일 접점(SPOC)이다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "서비스 데스크 인력은 반드시 고도의 기술 전문가여야 한다.",
  "a": false,
  "e": "고도로 기술적일 필요는 없으며 공감·비즈니스 이해가 중요하다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "가상 서비스 데스크는 중앙형보다 더 정교한 기술이 필요하다.",
  "a": true,
  "e": "분산 인력을 하나처럼 운영하기 위한 라우팅·협업 기술이 필요하다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 3,
  "q": "자동화가 확대되면 서비스 데스크에서 공감 역량의 중요성은 줄어든다.",
  "a": false,
  "e": "자동화가 늘수록 공감·감성지능이 더 중요해진다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 1,
  "q": "SLA 는 서비스 제공자와 고객 간의 문서화된 합의다.",
  "a": true,
  "e": "필요한 서비스와 기대 서비스 수준을 명시한다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "SLA 는 운영 지표만 포함하면 충분하다.",
  "a": false,
  "e": "정의된 서비스와 성과에 연결되어야 하며, 운영 지표만으로는 수박 효과가 생긴다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "수박 효과는 SLA 지표는 충족했지만 고객이 불만족한 상황을 말한다.",
  "a": true,
  "e": "겉(지표)은 녹색, 속(경험)은 빨강."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "SLM 의 고객 참여는 간단한 개방형 질문으로 경청과 정보 수집을 시작한다.",
  "a": true,
  "e": "‘업무가 무엇인가?’ 등의 질문을 사용한다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 3,
  "q": "이벤트 기반 설문은 1년 단위로 정기 수행하는 설문이다.",
  "a": false,
  "e": "이벤트 기반 설문은 특정 사례에 연결된 설문이며, 정기 설문은 주기적 설문이다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델의 마지막 단계는 ‘Did we get there?’ 이다.",
  "a": false,
  "e": "마지막 7단계는 ‘How do we keep the momentum going?’ 이다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "서비스 요청은 서비스의 계획되지 않은 중단을 알리는 요청이다.",
  "a": false,
  "e": "계획되지 않은 중단은 인시던트이며, 서비스 요청은 정상 서비스 제공의 일부다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 1,
  "q": "SLA 는 서비스 제공자가 고객과의 협의 없이 일방적으로 정해 통보하는 문서다.",
  "a": false,
  "e": "SLA 는 제공자와 고객 간 참여로 만들어진 문서화된 합의다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "변경 실행의 목적은 변경의 수를 최소화하는 것이다.",
  "a": false,
  "e": "성공적인 변경의 수를 최대화하는 것이 목적이다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "정보보안 관리 관행의 목적은 조직이 업무를 수행하는 데 필요한 정보를 보호하는 것이다.",
  "a": true,
  "e": "기밀성·무결성·가용성 및 인증·부인방지 관련 위험을 이해·관리한다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "관계 관리는 조직과 이해관계자 사이의 연결을 전략적·전술적 수준에서 구축하고 육성한다.",
  "a": true,
  "e": "establish and nurture links — 관계 관리의 핵심 표현."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "공급자 관리의 목적은 이해관계자 전반과의 관계를 전략적 수준에서 육성하는 것이다.",
  "a": false,
  "e": "그것은 관계 관리. 공급자 관리는 공급자와 그 성과를 관리한다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "정보보안 관리, 관계 관리, 공급자 관리는 모두 일반관리(General management) 관행 그룹에 속한다.",
  "a": true,
  "e": "세 관행 모두 일반관리 그룹이다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "공급자 관리는 핵심 공급자와 더 긴밀하고 협력적인 관계를 만들어 새로운 가치를 발굴하는 것을 포함한다.",
  "a": true,
  "e": "협력적 관계로 가치 발굴·실패 위험 감소."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "정보보안 관리가 다루는 위험에는 부인방지(Non-repudiation)가 포함되지 않는다.",
  "a": false,
  "e": "CIA에 더해 인증·부인방지도 포함된다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 3,
  "q": "배포 관리는 일반관리 관행 그룹에 속한다.",
  "a": false,
  "e": "배포 관리는 기술관리 그룹이다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "릴리스 관리의 목적은 새롭거나 변경된 서비스와 기능을 사용 가능하게 하는 것이다.",
  "a": true,
  "e": "make available for use."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "배포 관리의 목적은 새롭거나 변경된 구성요소를 라이브 환경으로 이동하는 것이다.",
  "a": true,
  "e": "move — 배포의 핵심 동사."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "IT 자산 관리는 모든 IT 자산의 전체 수명주기를 계획하고 관리한다.",
  "a": true,
  "e": "가치 극대화·비용 통제·위험 관리를 돕는다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "서비스 구성 관리의 목적은 IT 자산의 재무 가치를 극대화하는 것이다.",
  "a": false,
  "e": "재무 가치는 IT 자산 관리. 구성 관리는 CI 구성·관계 정보의 정확성·가용성."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "모니터링 및 이벤트 관리는 서비스와 구성요소를 체계적으로 관찰하고 선택된 상태 변화를 이벤트로 기록·보고한다.",
  "a": true,
  "e": "관찰 + 기록·보고."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "이벤트 관리는 모니터링 없이도 독립적으로 수행될 수 있다.",
  "a": false,
  "e": "이벤트 관리는 모니터링에 의존한다. 반대로 모니터링은 이벤트 관리 없이도 가능하다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "구성요소를 라이브 환경에 배포한 뒤, 사용자에게는 나중에 릴리스할 수 있다.",
  "a": true,
  "e": "배포와 릴리스는 분리 가능(기능 토글 등)."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "배포 관리는 테스트·스테이징 같은 비운영 환경으로의 배포에도 관여할 수 있다.",
  "a": true,
  "e": "라이브 외 다른 환경 배포에도 관여할 수 있다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 3,
  "q": "서비스 구성 관리가 제공하는 정보에는 CI 간의 관계가 포함되지 않는다.",
  "a": false,
  "e": "CI가 어떻게 구성되어 있는지와 CI 간 관계가 모두 포함된다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "인시던트는 서비스의 계획되지 않은 중단 또는 서비스 품질의 저하다.",
  "a": true,
  "e": "unplanned interruption / reduction in quality."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "알려진 오류는 분석은 됐지만 아직 해결되지 않은 문제다.",
  "a": true,
  "e": "analysed but not resolved."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "IT 자산은 IT 서비스를 제공하기 위해 관리가 필요한 모든 구성요소다.",
  "a": false,
  "e": "그것은 CI 정의. IT 자산은 재무적 가치가 있는 구성요소."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "이벤트는 서비스나 CI 관리에 의미가 있는 상태 변화다.",
  "a": true,
  "e": "change of state that has significance."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "변경은 서비스에 직접 영향을 줄 수 있는 것의 추가·수정만을 말하며 제거는 포함하지 않는다.",
  "a": false,
  "e": "직·간접 영향, 추가·수정·제거 모두 포함."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "문제는 아직 인시던트를 일으키지 않은 잠재적 원인일 수도 있다.",
  "a": true,
  "e": "cause, or potential cause."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "모든 구성항목(CI)은 재무적 가치가 있는 IT 자산이다.",
  "a": false,
  "e": "CI와 IT 자산은 겹치지만 같지 않다."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 3,
  "q": "임시방편이 문서화되면 그 문제는 해결된 것으로 종결한다.",
  "a": false,
  "e": "임시방편은 영향만 줄인다 — 문제는 알려진 오류로 남는다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 1,
  "q": "인시던트 관리의 목표는 가능한 한 빨리 정상 서비스를 복구하는 것이다.",
  "a": true,
  "e": "복구 속도가 핵심."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 1,
  "q": "비밀번호 재설정 요청은 인시던트로 분류한다.",
  "a": false,
  "e": "정상 서비스 제공의 일부인 서비스 요청이다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "모든 이벤트는 인시던트로 기록해야 한다.",
  "a": false,
  "e": "대부분의 이벤트는 정보성이며 인시던트가 아니다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "서비스 데스크는 인시던트 해결과 서비스 요청에 대한 수요를 포착하는 진입점이다.",
  "a": true,
  "e": "SPOC — 단일 접점."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "인시던트 관리는 근본 원인이 밝혀질 때까지 서비스 복구를 미룬다.",
  "a": false,
  "e": "원인 규명은 문제 관리. 인시던트는 복구가 우선."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 3,
  "q": "알려진 오류의 영구 해결은 일반적으로 변경 실행(Change enablement)을 통해 구현된다.",
  "a": true,
  "e": "영구 해결은 서비스 변경이므로 변경 실행을 거친다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "유틸리티는 '무엇을 하는가', 워런티는 '얼마나 잘 하는가'에 해당한다.",
  "a": true,
  "e": "fit for purpose vs fit for use."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "가용성·용량·보안은 유틸리티의 요소다.",
  "a": false,
  "e": "워런티의 요소다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "서비스는 고객이 원하는 산출물(output)을 촉진하는 수단이다.",
  "a": false,
  "e": "서비스 정의는 성과(outcome)를 촉진한다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "표준 변경은 저위험이며 사전 승인되어 매번 별도 승인이 필요 없다.",
  "a": true,
  "e": "standard = pre-authorized."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "고객·사용자·스폰서는 항상 서로 다른 사람이어야 한다.",
  "a": false,
  "e": "한 사람이 여러 역할을 맡을 수 있다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 3,
  "q": "SLA의 모든 지표가 목표를 충족해도 고객이 불만족할 수 있다.",
  "a": true,
  "e": "워터멜론 SLA — 지표와 실제 경험의 괴리."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 3,
  "q": "긴급 변경은 신속성이 중요하므로 평가와 승인을 완전히 생략한다.",
  "a": false,
  "e": "생략이 아니라 신속화한다."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 1,
  "q": "ITIL 4 Foundation 시험은 40문항, 60분, 26문항 이상 정답 시 합격이다.",
  "a": true,
  "e": "26/40(65%)."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 1,
  "q": "ITIL 4 Foundation 시험은 오답에 감점이 있다.",
  "a": false,
  "e": "감점이 없다 — 모든 문항에 응답."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "List 유형 문항은 4개 진술 중 옳은 2개의 조합을 고르는 형식이다.",
  "a": true,
  "e": "보기는 '1과 2', '1과 3' 같은 조합."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "ITIL 4 Foundation 은 한국어로도 응시할 수 있다.",
  "a": false,
  "e": "공식 언어 목록에 한국어가 없다(2026-10 기준)."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "2026-10 현재 ITIL 4 Foundation과 ITIL Foundation (Version 5)는 병행 시행 중이다.",
  "a": true,
  "e": "PeopleCert 공식 페이지에 두 시험이 모두 올라 있다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "PeopleCert는 ITIL 4 모듈을 2026-12-31에 일몰할 계획이라고 밝혔다.",
  "a": false,
  "e": "일몰 계획일은 2027-12-31이다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "ITIL Foundation Bridge (Version 5)는 ITIL 4 Foundation 보유자를 위한 과정이다.",
  "a": true,
  "e": "1일 업데이트 과정이며 Bridge도 2027-12-31 일몰 예정이다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 2,
  "q": "V5 출시로 기존 ITIL 자격은 리셋되어 다시 취득해야 한다.",
  "a": false,
  "e": "PeopleCert 공식 안내상 기존 자격은 리셋 없이 유효하다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "ITIL Foundation (Version 5)는 Closed book 시험이다.",
  "a": true,
  "e": "ITIL 4와 같이 Closed book이다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 2,
  "q": "V5 Foundation 공식 응시 언어에는 한국어가 포함되어 있다.",
  "a": false,
  "e": "공식 언어 9개에 한국어는 없다."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 3,
  "q": "ITIL 4 일몰일 2027-12-31은 PeopleCert가 '현재 계획'으로 밝힌 예정일이다.",
  "a": true,
  "e": "FAQ 문구가 'The current plan is…'이므로 예정으로 기억한다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 1,
  "q": "비공식 출처 기준 V5 Foundation에서 가장 비중이 큰 범주는 ITIL 가치 시스템(40%)이다.",
  "a": true,
  "e": "핵심 용어 30%가 두 번째다. 공식 원문은 [확인필요]."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "V5 Foundation 범주 비중은 PeopleCert 공식 v5.0 실러버스 원문으로 이 사이트에서 확정되어 있다.",
  "a": false,
  "e": "교육기관 2차 자료 기준이며 공식 원문은 미확보([확인필요])다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 1,
  "q": "비공식 출처 기준 'ITIL과 AI' 범주의 비중은 2.5%다.",
  "a": true,
  "e": "약 1문항이며 '타 프레임워크'도 2.5%다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "비공식 출처 기준 V5 범주 비중에서 4차원과 수명주기는 각각 20%다.",
  "a": false,
  "e": "각 10%다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 1,
  "q": "V5 수명주기 8활동에는 Discover와 Support가 포함된다.",
  "a": true,
  "e": "Discover~Support 8활동이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "Engage는 V5 수명주기 8활동 중 하나다.",
  "a": false,
  "e": "Engage는 ITIL 4 가치사슬 활동이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "Acquire는 외부에서 자원을 확보하는 활동이고, Build는 내부에서 구축하는 활동이다.",
  "a": true,
  "e": "둘은 별개 활동이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "수명주기 8활동은 나열 순서대로 한 번씩만 수행하는 선형 구조다.",
  "a": false,
  "e": "반복적·비선형이다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 3,
  "q": "Operate·Deliver·Support는 V5에서 하나의 활동으로 묶여 있다.",
  "a": false,
  "e": "V5 수명주기에서는 세 개의 별개 활동이다(2차). 하나로 묶인 'Deliver & support'는 ITIL 4 가치사슬 활동이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "거버넌스 활동은 평가(Evaluate)·지시(Direct)·모니터(Monitor)다.",
  "a": true,
  "e": "EDM으로 조직을 지시·통제한다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "V5에서 7개 지침 원칙의 명칭은 ITIL 4와 다르게 바뀌었다.",
  "a": false,
  "e": "명칭은 동일하다(2차 출처 일치)."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "지속적 개선 모델은 'What is the vision?'으로 시작한다.",
  "a": true,
  "e": "이어 'Where are we now?'로 현재 위치를 평가한다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "관측성(Observability)과 모니터링은 완전히 같은 개념이다.",
  "a": false,
  "e": "관측성은 출력 데이터로 내부 상태를 추론하는 더 넓은 능력이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "ITIL 가치 시스템의 구성요소에는 지침 원칙·거버넌스·가치사슬·관행·지속적 개선이 있다.",
  "a": true,
  "e": "ITIL 4 SVS와 같은 5구성요소 골격이다."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 3,
  "q": "CI/CD의 CI는 구성항목(Configuration Item)을 뜻한다.",
  "a": false,
  "e": "CI/CD의 CI는 지속적 통합(Continuous Integration)이다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 1,
  "q": "지원(enabling) 가치흐름은 소비자에게 직접 가치를 전달한다.",
  "a": false,
  "e": "직접 전달은 핵심(core) 가치흐름이다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 2,
  "q": "가치흐름 매핑은 현재 상태(As-Is)를 먼저 파악한 뒤 미래 상태(To-Be)를 설계한다.",
  "a": true,
  "e": "'Start where you are' 원칙과도 맞는다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 2,
  "q": "리드 타임은 트리거부터 가치 전달까지 걸린 전체 시간이다.",
  "a": true,
  "e": "처리 시간 + 대기 시간을 포함한다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 1,
  "q": "PRINCE2는 프로젝트 관리 방법론이다.",
  "a": true,
  "e": "ITIL은 제품·서비스 관리, PRINCE2는 프로젝트 관리다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 1,
  "q": "DevOps는 ITIL을 대체하는 프레임워크다.",
  "a": false,
  "e": "보완 관계다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 2,
  "q": "에이전틱 AI는 목표를 받아 여러 단계를 자율적으로 수행하는 AI를 말한다.",
  "a": true,
  "e": "생성형 AI(콘텐츠 생성)와 구분한다."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 3,
  "q": "ITIL 4 Foundation 실러버스에도 'ITIL과 AI'가 별도 학습목표로 있다.",
  "a": false,
  "e": "ITIL 4 Foundation 학습목표 1~7에는 AI 범주가 없다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 1,
  "q": "V5는 '서비스 가치 시스템' 대신 'ITIL 가치 시스템'이라는 명칭을 쓴다(2차 출처).",
  "a": true,
  "e": "구성요소 골격은 유지된다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 2,
  "q": "2차 출처에 따르면 V5에서 34개 관행 명칭은 유지되고 그룹 구성만 바뀌었다.",
  "a": true,
  "e": "3그룹 → 2그룹 재편, [확인필요]."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 2,
  "q": "V5 Foundation 합격선은 ITIL 4보다 높아졌다.",
  "a": false,
  "e": "둘 다 65%(26/40)다."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 3,
  "q": "V5는 사용자 경험(UX)과 지속가능성(Sustainability)을 핵심 용어로 다룬다(2차 출처).",
  "a": true,
  "e": "범주1 핵심 용어에 포함된다."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "고객이 특정 비용·위험을 관리하지 않고도 원하는 성과를 얻도록 하여 가치 공동창출을 가능하게 하는 '수단'은?",
  "a": "서비스(Service)",
  "k": [
   "서비스",
   "Service"
  ],
  "e": "서비스 = means of enabling value co-creation."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 1,
  "q": "서비스 형태로 고객에게 가치를 가능하게 하는 전문화된 조직 역량의 집합을 무엇이라 하는가?",
  "a": "서비스 관리(Service management)",
  "k": [
   "서비스 관리",
   "Service management"
  ],
  "e": "정의 키워드: specialized organizational capabilities."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 2,
  "q": "소비자에게 가치를 제공하도록 설계된 조직 자원의 구성(configuration)을 무엇이라 하는가?",
  "a": "제품(Product)",
  "k": [
   "제품",
   "Product"
  ],
  "e": "제품은 오퍼링으로 포장되어 소비자 집단에 제시된다."
 },
 {
  "s": "s1",
  "t": "서비스 관리 기초",
  "d": 2,
  "q": "ITIL 4에서 가치는 제공자가 일방적으로 전달하는 것이 아니라 제공자와 소비자가 함께 만든다. 이 개념을 무엇이라 하는가?",
  "a": "가치 공동창출(value co-creation)",
  "k": [
   "공동창출",
   "co-creation"
  ],
  "e": "ITIL 4 의 핵심 사상이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "어떤 것에 대해 인지된 편익·유용성·중요성을 무엇이라 하는가?",
  "a": "가치(Value)",
  "k": [
   "가치",
   "Value"
  ],
  "e": "인지된 것이므로 주관적이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "활동의 유형·무형 결과물(deliverable)을 무엇이라 하는가?",
  "a": "산출물(Output)",
  "k": [
   "산출물",
   "Output"
  ],
  "e": "성과(Outcome)와 혼동 주의."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 1,
  "q": "하나 이상의 산출물로 가능해지는 이해관계자의 결과를 무엇이라 하는가?",
  "a": "성과(Outcome)",
  "k": [
   "성과",
   "Outcome"
  ],
  "e": "산출물은 제공자가 만든 것, 성과는 소비자가 얻은 것."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "서비스 이용으로 소비자가 직접 부담하지 않게 되는 비용과, 서비스 이용 때문에 새로 부담하는 비용을 각각 무엇이라 하는가?",
  "a": "제거되는 비용(costs removed), 부과되는 비용(costs imposed)",
  "k": [
   "제거",
   "부과"
  ],
  "e": "요금·교육·네트워크 이용 비용은 부과되는 비용이다."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 2,
  "q": "피해·손실을 일으키거나 목표 달성을 어렵게 할 수 있는 가능한 사건으로, 결과의 불확실성으로도 정의되는 것은?",
  "a": "위험(Risk)",
  "k": [
   "위험",
   "Risk"
  ],
  "e": "긍정적·부정적 결과 모두 포함 가능."
 },
 {
  "s": "s1",
  "t": "가치·성과·비용·위험",
  "d": 3,
  "q": "서비스 소비자가 위험 감소에 기여하는 방법 두 가지를 쓰시오.",
  "a": "요구사항 정의, 성과 명확화에 능동 참여, 핵심성공요인(CSF)과 제약사항의 명확한 전달 (또는 제공자가 필요한 소비자 자원에 접근하도록 보장)",
  "k": [
   "요구사항",
   "핵심성공요인"
  ],
  "e": "세 가지 중 두 가지를 쓰면 된다."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 1,
  "q": "제품·서비스가 특정 요구를 충족하기 위해 제공하는 기능성을 무엇이라 하는가?",
  "a": "유틸리티(Utility)",
  "k": [
   "유틸리티",
   "Utility"
  ],
  "e": "what it does, fit for purpose."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 1,
  "q": "제품·서비스가 합의된 요구사항을 충족할 것이라는 보증을 무엇이라 하는가?",
  "a": "워런티(Warranty)",
  "k": [
   "워런티",
   "Warranty"
  ],
  "e": "how it performs, fit for use."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "유틸리티와 워런티를 각각 영어 적합성 표현(fit for ~)으로 쓰시오.",
  "a": "유틸리티 = fit for purpose, 워런티 = fit for use",
  "k": [
   "fit for purpose",
   "fit for use"
  ],
  "e": "바꿔치기 보기에 주의."
 },
 {
  "s": "s1",
  "t": "유틸리티·워런티",
  "d": 2,
  "q": "워런티와 관련된 대표 영역 네 가지를 쓰시오.",
  "a": "가용성(availability), 용량(capacity), 보안(security), 연속성(continuity)",
  "k": [
   "가용성",
   "용량",
   "보안",
   "연속성"
  ],
  "e": "모두 '얼마나 잘 수행하는가'의 측면이다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스 요구사항을 정의하고 서비스 소비의 성과에 책임지는 사람은?",
  "a": "고객(Customer)",
  "k": [
   "고객",
   "Customer"
  ],
  "e": "사용자·스폰서와 구분."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스 소비를 위한 예산을 승인하는 사람은?",
  "a": "스폰서(Sponsor)",
  "k": [
   "스폰서",
   "Sponsor"
  ],
  "e": "authorizes budget."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 1,
  "q": "서비스를 사용하는 사람은?",
  "a": "사용자(User)",
  "k": [
   "사용자",
   "User"
  ],
  "e": "요구 정의·예산 승인과 무관하다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "서비스 오퍼링을 구성할 수 있는 세 가지 요소를 쓰시오.",
  "a": "재화(goods), 자원 접근(access to resources), 서비스 행위(service actions)",
  "k": [
   "재화",
   "자원 접근",
   "서비스 행위"
  ],
  "e": "재화만 소유권이 이전된다."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "서비스 관계(service relationship)를 구성하는 세 가지 요소를 쓰시오.",
  "a": "서비스 제공(provision), 서비스 소비(consumption), 서비스 관계 관리(service relationship management)",
  "k": [
   "제공",
   "소비",
   "관계 관리"
  ],
  "e": "오퍼링 3요소와 혼동 주의."
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 3,
  "q": "제공자와 소비자가 합의·가용 오퍼링을 기반으로 지속적 가치 공동창출을 보장하기 위해 수행하는 공동 활동은?",
  "a": "서비스 관계 관리(Service relationship management)",
  "k": [
   "서비스 관계 관리",
   "Service relationship management"
  ],
  "e": "공동(joint) 활동이 키워드."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 1,
  "q": "목표·전략·작업 유형·관리 구조가 바뀌어도 모든 상황에서 조직을 안내하는 권고사항을 무엇이라 하는가?",
  "a": "지침 원칙(guiding principle)",
  "k": [
   "지침 원칙",
   "guiding principle"
  ],
  "e": "ITIL 4 는 7개 원칙을 제시한다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 2,
  "q": "ITIL 4 의 7 지침 원칙 영문 명칭을 모두 쓰시오.",
  "a": "Focus on value, Start where you are, Progress iteratively with feedback, Collaborate and promote visibility, Think and work holistically, Keep it simple and practical, Optimize and automate",
  "k": [
   "Focus on value",
   "Start where you are",
   "Progress iteratively",
   "Collaborate",
   "holistically",
   "Keep it simple",
   "Optimize and automate"
  ],
  "e": "영문 명칭 그대로 출제된다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "기존 서비스·프로세스·도구를 객관적으로 평가해 재사용할 것을 찾고, 백지에서 다시 만드는 것을 피하라고 권고하는 원칙은?",
  "a": "현재 위치에서 시작(Start where you are)",
  "k": [
   "Start where you are",
   "현재 위치"
  ],
  "e": "측정은 직접 관찰로 보완."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 2,
  "q": "큰 과제를 관리 가능한 작은 단위로 나누고 각 단위의 전·중·후에 피드백을 구하라는 원칙은?",
  "a": "피드백 기반 반복 진행(Progress iteratively with feedback)",
  "k": [
   "Progress iteratively",
   "반복"
  ],
  "e": "반복도 전체 그림은 유지."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "어떤 서비스·요소도 단독으로 존재하지 않으므로 4차원 전체를 고려하라는 원칙은?",
  "a": "총체적 사고, 작업(Think and work holistically)",
  "k": [
   "holistically",
   "총체"
  ],
  "e": "부분 최적화의 함정을 경계."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "'최적화·자동화' 원칙에서 최적화와 자동화의 올바른 순서를 쓰시오.",
  "a": "최적화 먼저, 그다음 자동화(Optimize, then automate)",
  "k": [
   "최적화",
   "자동화"
  ],
  "e": "비효율을 자동화하면 비효율이 빨라질 뿐."
 },
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 3,
  "q": "'협업과 가시성 증진' 원칙에서 협업이 반드시 의미하지는 않는 것으로 강조되는 개념은?",
  "a": "합의(consensus) — 만장일치",
  "k": [
   "합의",
   "consensus"
  ],
  "e": "협업 ≠ 합의."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "서비스 관리 4차원을 모두 쓰시오.",
  "a": "조직과 사람, 정보와 기술, 파트너와 공급자, 가치 흐름과 프로세스",
  "k": [
   "조직과 사람",
   "정보와 기술",
   "파트너와 공급자",
   "가치 흐름과 프로세스"
  ],
  "e": "Organizations and people / Information and technology / Partners and suppliers / Value streams and processes."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 1,
  "q": "4차원에 영향을 주는 외부 요인 PESTLE 의 여섯 요소를 쓰시오.",
  "a": "정치, 경제, 사회, 기술, 법률, 환경",
  "k": [
   "정치",
   "경제",
   "사회",
   "기술",
   "법률",
   "환경"
  ],
  "e": "Political·Economic·Social·Technological·Legal·Environmental."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "조직의 문화, 역할과 책임, 인력 역량을 다루는 차원은?",
  "a": "조직과 사람(Organizations and people)",
  "k": [
   "조직과 사람"
  ],
  "e": "문화·역량·리더십 = 조직과 사람."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "서비스 관리에 필요한 정보·지식과 이를 지원하는 기술을 다루는 차원은?",
  "a": "정보와 기술(Information and technology)",
  "k": [
   "정보와 기술"
  ],
  "e": "정보 자체와 기술 모두 포함."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "다른 조직과의 관계, 계약·협약, 소싱 전략을 다루는 차원은?",
  "a": "파트너와 공급자(Partners and suppliers)",
  "k": [
   "파트너와 공급자"
  ],
  "e": "SIAM 도 이 차원과 연결된다."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 2,
  "q": "입력을 출력으로 변환하는 상호 연관·상호작용하는 활동의 집합을 무엇이라 하는가?",
  "a": "프로세스(Process)",
  "k": [
   "프로세스"
  ],
  "e": "가치 흐름과 프로세스 차원의 핵심 용어."
 },
 {
  "s": "s2",
  "t": "4차원과 외부 요인",
  "d": 3,
  "q": "여러 공급자를 통합자를 두어 통합·조정하는 접근의 약어와 원어를 쓰시오.",
  "a": "SIAM(Service Integration and Management)",
  "k": [
   "SIAM",
   "Service Integration and Management"
  ],
  "e": "파트너와 공급자 차원의 접근."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 1,
  "q": "SVS 의 두 입력과 하나의 출력을 쓰시오.",
  "a": "입력: 기회, 수요 / 출력: 가치",
  "k": [
   "기회",
   "수요",
   "가치"
  ],
  "e": "Opportunity·Demand → Value."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "이해관계자에게 가치를 더하거나 조직을 개선할 선택지·가능성을 뜻하는 SVS 입력은?",
  "a": "기회(Opportunity)",
  "k": [
   "기회"
  ],
  "e": "수요 없이도 존재 가능."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "내·외부 소비자의 제품·서비스에 대한 필요·욕구를 뜻하는 SVS 입력은?",
  "a": "수요(Demand)",
  "k": [
   "수요"
  ],
  "e": "내부 소비자도 포함."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 2,
  "q": "SVS 가 줄이려는, 부서 간 정보·자원 공유를 막는 단절을 무엇이라 하는가?",
  "a": "사일로(Silo)",
  "k": [
   "사일로"
  ],
  "e": "SVS 는 통합·조정과 유연성으로 사일로를 해소."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "SVS 의 다섯 구성요소를 쓰시오.",
  "a": "지침 원칙, 거버넌스, 서비스 가치 사슬, 관행, 지속적 개선",
  "k": [
   "지침 원칙",
   "거버넌스",
   "가치 사슬",
   "관행",
   "지속적 개선"
  ],
  "e": "기회·수요·가치는 입력·출력."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "거버닝 바디가 수행하는 세 활동을 쓰시오.",
  "a": "평가(Evaluate), 지시(Direct), 모니터(Monitor)",
  "k": [
   "평가",
   "지시",
   "모니터"
  ],
  "e": "EDM."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "ITIL 4 의 관행 총수와 세 그룹별 개수를 쓰시오.",
  "a": "34개 — 일반 관리 14, 서비스 관리 17, 기술 관리 3",
  "k": [
   "34",
   "14",
   "17",
   "3"
  ],
  "e": "일반 14 / 서비스 17 / 기술 3."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 2,
  "q": "업무 수행이나 목표 달성을 위해 설계된 조직 자원의 집합을 무엇이라 하는가?",
  "a": "관행(Practice)",
  "k": [
   "관행"
  ],
  "e": "관행은 4차원의 자원을 아우른다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 3,
  "q": "지속적 개선이 ITIL 4 에 등장하는 세 수준을 쓰시오.",
  "a": "SVS 구성요소, 가치 사슬 Improve 활동, 지속적 개선 관행",
  "k": [
   "구성요소",
   "Improve",
   "관행"
  ],
  "e": "세 곳 모두에서 다뤄진다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 1,
  "q": "서비스 가치 사슬 6활동을 모두 쓰시오.",
  "a": "Plan, Improve, Engage, Design and transition, Obtain/build, Deliver and support",
  "k": [
   "Plan",
   "Improve",
   "Engage",
   "Design and transition",
   "Obtain/build",
   "Deliver and support"
  ],
  "e": "순서가 고정된 단계가 아니다."
 },
 {
  "s": "s2",
  "t": "가치 사슬 구조",
  "d": 2,
  "q": "고객·사용자·공급자 등 외부 이해관계자와의 주 접점이 되는 가치 사슬 활동은?",
  "a": "Engage(참여)",
  "k": [
   "Engage"
  ],
  "e": "수요 유입·서비스 성과 보고서 제공."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "품질·비용·출시 기간(time to market) 기대 충족을 목적으로 하는 활동은?",
  "a": "Design and transition(설계, 전환)",
  "k": [
   "Design and transition"
  ],
  "e": "time to market 키워드."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 1,
  "q": "서비스 구성요소가 필요한 때·곳에 가용하도록 보장하는 활동은?",
  "a": "Obtain/build(획득, 구축)",
  "k": [
   "Obtain/build"
  ],
  "e": "구성요소 가용성."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "비전·현 상태·개선 방향의 공유된 이해를 보장하는 활동은?",
  "a": "Plan(계획)",
  "k": [
   "Plan"
  ],
  "e": "거버닝 바디의 정책이 입력."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 2,
  "q": "Engage 가 Deliver and support 로 보내는 대표 출력은?",
  "a": "사용자 지원 작업(user support tasks)",
  "k": [
   "사용자 지원 작업"
  ],
  "e": "인시던트·서비스 요청 처리 작업."
 },
 {
  "s": "s2",
  "t": "가치 사슬 6활동",
  "d": 3,
  "q": "Improve 가 모든 가치 사슬 활동에 제공하는 대표 출력 두 가지는?",
  "a": "개선 이니셔티브, 개선 현황 보고서",
  "k": [
   "개선 이니셔티브",
   "개선 현황 보고서"
  ],
  "e": "Plan·거버닝 바디에는 가치 사슬 성과 정보."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 1,
  "q": "조직이 소비자에게 제품·서비스를 만들어 전달하기 위해 수행하는 일련의 단계는?",
  "a": "가치 흐름(Value stream)",
  "k": [
   "가치 흐름"
  ],
  "e": "활동·관행의 시나리오별 조합."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "가치 흐름을 매핑해 찾아 제거하려는 대표 대상(Lean 관점)은?",
  "a": "낭비(waste)와 병목",
  "k": [
   "낭비"
  ],
  "e": "제거 후 자동화 대상 선정."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델 7단계를 순서대로 쓰시오.",
  "a": "비전 → 현재 위치 → 목표 → 계획 → 실행 → 확인 → 추진력 유지",
  "k": [
   "비전",
   "현재",
   "목표",
   "계획",
   "실행",
   "추진력"
  ],
  "e": "What is the vision? / Where are we now? / Where do we want to be? / How do we get there? / Take action / Did we get there? / How do we keep the momentum going?"
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "개선 아이디어를 식별부터 실행까지 추적·관리하는 데이터베이스 또는 구조화된 문서의 이름은?",
  "a": "지속적 개선 등록부(Continual Improvement Register, CIR)",
  "k": [
   "CIR",
   "개선 등록부"
  ],
  "e": "조직에 여러 개 존재할 수 있다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선 모델 2단계 ‘Where are we now?’ 에서 수행하는 현재 상태 측정을 무엇이라 하는가?",
  "a": "기준선 평가(baseline assessment)",
  "k": [
   "기준선",
   "baseline"
  ],
  "e": "이후 개선 효과를 비교하는 기준이 된다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선은 조직 내 누구의 책임인가?",
  "a": "모든 사람(everyone)",
  "k": [
   "모든"
  ],
  "e": "전담 팀은 이끌고 조정하는 역할이다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "변경을 승인하는 사람 또는 그룹을 무엇이라 하는가?",
  "a": "변경 권한자(Change authority)",
  "k": [
   "변경 권한자",
   "change authority"
  ],
  "e": "변경 유형·모델에 따라 지정한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 1,
  "q": "ITIL 4 변경 실행에서 다루는 세 가지 변경 유형을 쓰시오.",
  "a": "표준 변경, 일반 변경, 긴급 변경",
  "k": [
   "표준",
   "일반",
   "긴급"
  ],
  "e": "Standard / Normal / Emergency."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "변경을 계획하고 커뮤니케이션을 돕고 충돌을 피하며 자원을 배정하는 데 사용하는 것은?",
  "a": "변경 일정(Change schedule)",
  "k": [
   "변경 일정",
   "change schedule"
  ],
  "e": "구현 후에는 인시던트·문제 관리에 정보를 제공한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "변경 실행 관행의 목적에 나오는 세 가지 수단을 쓰시오.",
  "a": "위험 평가, 변경 승인, 변경 일정 관리",
  "k": [
   "위험",
   "승인",
   "일정"
  ],
  "e": "이를 통해 성공적인 변경의 수를 최대화한다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 3,
  "q": "긴급 변경에서 실행 이후로 미룰 수 있는 것은?",
  "a": "문서화(documentation)",
  "k": [
   "문서화"
  ],
  "e": "평가·승인은 신속화되지만 생략되지 않는다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "일반 변경을 시작(initiate)시키는 것은?",
  "a": "변경 요청(Change request)의 생성",
  "k": [
   "변경 요청"
  ],
  "e": "이후 변경 모델에 따라 평가·승인된다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 1,
  "q": "서비스의 계획되지 않은 중단 또는 품질 저하를 무엇이라 하는가?",
  "a": "인시던트(Incident)",
  "k": [
   "인시던트",
   "incident"
  ],
  "e": "LO 6.2 용어 정의."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "여러 이해관계자가 처음부터 함께 인시던트를 다루다가 적임자가 분명해지면 나머지가 빠지는 협업 방식은?",
  "a": "스워밍(Swarming)",
  "k": [
   "스워밍",
   "swarming"
  ],
  "e": "단계별 에스컬레이션과 대비된다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "인시던트 우선순위화의 기준이 되는 두 가지를 쓰시오.",
  "a": "합의된 분류, 비즈니스 영향",
  "k": [
   "분류",
   "영향"
  ],
  "e": "비즈니스 영향이 큰 인시던트를 먼저 해결한다."
 },
 {
  "s": "s3",
  "t": "인시던트 관리",
  "d": 2,
  "q": "인시던트 관리에서 별도 프로세스로 다룰 수 있는 인시던트 두 종류는?",
  "a": "주요 인시던트, 정보보안 인시던트",
  "k": [
   "주요",
   "보안"
  ],
  "e": "Major incident / Information security incident."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "하나 이상 인시던트의 원인 또는 잠재 원인을 무엇이라 하는가?",
  "a": "문제(Problem)",
  "k": [
   "문제",
   "problem"
  ],
  "e": "인시던트와 별도로 관리된다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "분석되었으나 해결되지 않은 문제를 무엇이라 하는가?",
  "a": "알려진 오류(Known error)",
  "k": [
   "알려진 오류",
   "known error"
  ],
  "e": "오류 통제에서 관리한다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "문제 관리의 세 단계를 순서대로 쓰시오.",
  "a": "문제 식별 → 문제 통제 → 오류 통제",
  "k": [
   "식별",
   "문제 통제",
   "오류 통제"
  ],
  "e": "Problem identification → Problem control → Error control."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "완전한 해결책이 없을 때 인시던트나 문제의 영향을 줄이거나 없애는 방안은?",
  "a": "임시 해결책(Workaround)",
  "k": [
   "임시 해결책",
   "workaround"
  ],
  "e": "문제 기록에 문서화된다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "문제 관리에서 영구 해결책을 식별하고 알려진 오류의 상태를 재평가하는 단계는?",
  "a": "오류 통제(Error control)",
  "k": [
   "오류 통제",
   "error control"
  ],
  "e": "영구 해결책은 변경 요청으로 이어질 수 있다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 1,
  "q": "서비스 요청 관리가 처리하는 요청의 두 가지 특성(목적 문구)을 쓰시오.",
  "a": "사전 정의된(predefined), 사용자가 시작한(user-initiated)",
  "k": [
   "사전 정의",
   "사용자"
  ],
  "e": "효과적이고 사용자 친화적으로 처리한다."
 },
 {
  "s": "s3",
  "t": "서비스 요청 관리",
  "d": 2,
  "q": "서비스 요청의 유형을 세 가지 이상 쓰시오.",
  "a": "서비스 행위 요청, 정보 요청, 자원, 서비스 제공 요청, 접근 요청, 피드백, 칭찬, 불만",
  "k": [
   "정보",
   "접근",
   "불만"
  ],
  "e": "불만도 서비스 요청임에 유의."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 1,
  "q": "서비스 데스크는 서비스 제공자와 모든 사용자 간의 무엇인가?",
  "a": "진입점이자 단일 접점(SPOC, Single Point of Contact)",
  "k": [
   "단일 접점",
   "SPOC"
  ],
  "e": "수요 포착도 목적에 포함된다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "여러 지리적 위치의 인력이 하나처럼 운영되는 서비스 데스크 형태는?",
  "a": "가상 서비스 데스크(Virtual service desk)",
  "k": [
   "가상"
  ],
  "e": "더 정교한 기술이 필요하다."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "자동화 확대에 따라 서비스 데스크 인력에게 더 중요해지는 역량 두 가지를 쓰시오.",
  "a": "공감(empathy), 감성지능(emotional intelligence)",
  "k": [
   "공감",
   "감성"
  ],
  "e": "기술 역량보다 사람·비즈니스 지원이 중요하다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 1,
  "q": "서비스 제공자와 고객 간에 필요한 서비스와 기대 수준을 명시한 문서화된 합의는?",
  "a": "SLA(Service Level Agreement, 서비스 수준 합의서)",
  "k": [
   "SLA"
  ],
  "e": "SLM 관행이 관리한다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "SLA 지표는 녹색인데 고객 만족은 빨강인 현상을 무엇이라 하는가?",
  "a": "수박 효과(Watermelon effect)",
  "k": [
   "수박",
   "watermelon"
  ],
  "e": "운영 지표만 측정한 결과다."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 2,
  "q": "SLM 의 정보원 네 가지를 쓰시오.",
  "a": "고객 참여, 고객 피드백, 운영 지표, 비즈니스 지표",
  "k": [
   "참여",
   "피드백",
   "운영",
   "비즈니스"
  ],
  "e": "Customer engagement / Customer feedback / Operational metrics / Business metrics."
 },
 {
  "s": "s3",
  "t": "서비스 수준 관리",
  "d": 3,
  "q": "SLM 목적에서 서비스 수준 목표를 수식하는 핵심어는?",
  "a": "명확한 비즈니스 기반(clear business-based)",
  "k": [
   "비즈니스 기반"
  ],
  "e": "기술 지표 기반이 아니라 비즈니스 기반 목표다."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "조직이 업무를 수행하는 데 필요한 정보를 보호하는 것을 목적으로 하는 관행은?",
  "a": "정보보안 관리(Information security management)",
  "k": [
   "정보보안",
   "Information security"
  ],
  "e": "CIA·인증·부인방지 위험 관리."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 1,
  "q": "조직과 이해관계자 사이의 연결을 전략적·전술적 수준에서 구축·육성하는 관행은?",
  "a": "관계 관리(Relationship management)",
  "k": [
   "관계 관리",
   "Relationship"
  ],
  "e": "establish and nurture links."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "공급자와 그 성과를 적절히 관리하여 품질 높은 제품·서비스의 매끄러운 제공을 지원하는 관행은?",
  "a": "공급자 관리(Supplier management)",
  "k": [
   "공급자",
   "Supplier"
  ],
  "e": "핵심 공급자와 협력적 관계 강화."
 },
 {
  "s": "s4",
  "t": "일반관리 관행 목적",
  "d": 2,
  "q": "정보보안 관리가 다루는 정보의 세 가지 기본 속성을 쓰시오.",
  "a": "기밀성(Confidentiality), 무결성(Integrity), 가용성(Availability)",
  "k": [
   "기밀성",
   "무결성",
   "가용성"
  ],
  "e": "여기에 인증·부인방지가 더해진다."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "새롭거나 변경된 서비스·기능을 사용 가능하게 하는 관행은?",
  "a": "릴리스 관리(Release management)",
  "k": [
   "릴리스",
   "Release"
  ],
  "e": "make available for use."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "새롭거나 변경된 구성요소를 라이브 환경으로 이동하는 관행은?",
  "a": "배포 관리(Deployment management)",
  "k": [
   "배포",
   "Deployment"
  ],
  "e": "move — 기술관리 그룹."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 1,
  "q": "모든 IT 자산의 전체 수명주기를 계획·관리하는 관행은?",
  "a": "IT 자산 관리(IT asset management)",
  "k": [
   "IT 자산",
   "asset"
  ],
  "e": "가치 극대화·비용 통제·위험 관리."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "서비스와 CI의 구성에 관한 정확·신뢰할 수 있는 정보가 필요한 때와 곳에 있도록 하는 관행은?",
  "a": "서비스 구성 관리(Service configuration management)",
  "k": [
   "구성 관리",
   "configuration"
  ],
  "e": "CI 간 관계 정보 포함."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "서비스와 구성요소를 체계적으로 관찰하고 선택된 상태 변화를 이벤트로 기록·보고하는 관행은?",
  "a": "모니터링 및 이벤트 관리(Monitoring and event management)",
  "k": [
   "모니터링",
   "이벤트"
  ],
  "e": "관찰 + 기록·보고."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 3,
  "q": "목적만 암기하는 8개 관행 중 기술관리(Technical management) 그룹에 속하는 유일한 관행은?",
  "a": "배포 관리(Deployment management)",
  "k": [
   "배포"
  ],
  "e": "나머지는 일반관리 3 + 서비스관리 4."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "하나 이상의 인시던트의 원인 또는 잠재적 원인을 무엇이라 하는가?",
  "a": "문제(Problem)",
  "k": [
   "문제",
   "Problem"
  ],
  "e": "cause or potential cause."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "분석은 됐지만 아직 해결되지 않은 문제를 무엇이라 하는가?",
  "a": "알려진 오류(Known error)",
  "k": [
   "알려진 오류",
   "Known error"
  ],
  "e": "analysed but not resolved."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 1,
  "q": "IT 서비스를 제공하기 위해 관리가 필요한 모든 구성요소를 무엇이라 하는가?",
  "a": "구성항목(Configuration item, CI)",
  "k": [
   "구성항목",
   "CI"
  ],
  "e": "needs to be managed."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "IT 제품·서비스 제공에 기여할 수 있는 재무적 가치가 있는 모든 구성요소를 무엇이라 하는가?",
  "a": "IT 자산(IT asset)",
  "k": [
   "IT 자산",
   "asset"
  ],
  "e": "financially valuable."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "서비스나 CI 관리에 의미가 있는 모든 상태 변화를 무엇이라 하는가?",
  "a": "이벤트(Event)",
  "k": [
   "이벤트",
   "Event"
  ],
  "e": "change of state."
 },
 {
  "s": "s4",
  "t": "필수 용어 정의",
  "d": 2,
  "q": "변경(Change) 정의에 들어가는 세 가지 행위를 쓰시오.",
  "a": "추가(addition), 수정(modification), 제거(removal)",
  "k": [
   "추가",
   "수정",
   "제거"
  ],
  "e": "직·간접 영향 모두 포함."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "완전한 해결책이 아직 없는 인시던트나 문제의 영향을 줄이거나 없애는 방법은?",
  "a": "임시방편(Workaround)",
  "k": [
   "임시방편",
   "Workaround"
  ],
  "e": "문제를 해결하지는 않는다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "문제 관리의 3단계를 순서대로 쓰시오.",
  "a": "문제 식별 → 문제 통제 → 오류 통제",
  "k": [
   "문제 식별",
   "문제 통제",
   "오류 통제"
  ],
  "e": "problem identification → problem control → error control."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 3,
  "q": "인시던트 해결과 서비스 요청에 대한 수요를 포착하는 사용자의 진입점·단일 접점 관행은?",
  "a": "서비스 데스크(Service desk)",
  "k": [
   "서비스 데스크",
   "Service desk"
  ],
  "e": "SPOC."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "제품·서비스가 특정 필요를 충족하기 위해 제공하는 기능성(fit for purpose)을 무엇이라 하는가?",
  "a": "유틸리티(Utility)",
  "k": [
   "유틸리티",
   "Utility"
  ],
  "e": "무엇을 하는가."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 1,
  "q": "제품·서비스가 합의된 요구사항을 충족할 것이라는 보증(fit for use)을 무엇이라 하는가?",
  "a": "워런티(Warranty)",
  "k": [
   "워런티",
   "Warranty"
  ],
  "e": "얼마나 잘 하는가."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "변경의 3유형을 쓰시오.",
  "a": "표준(Standard), 정상(Normal), 긴급(Emergency) 변경",
  "k": [
   "표준",
   "정상",
   "긴급"
  ],
  "e": "사전 승인 / 일반 승인 / 신속 승인."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 가치·변경 용어",
  "d": 2,
  "q": "서비스 소비를 위한 자원(예산)을 승인하는 역할을 무엇이라 하는가?",
  "a": "스폰서(Sponsor)",
  "k": [
   "스폰서",
   "Sponsor"
  ],
  "e": "고객은 요구 정의, 사용자는 사용."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 1,
  "q": "ITIL 4 Foundation 시험의 문항 수·시간·합격 기준을 쓰시오.",
  "a": "40문항 ,  60분 ,  26/40(65%)",
  "k": [
   "40",
   "60",
   "26"
  ],
  "e": "비모국어 응시 시 75분."
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "ITIL 4 Foundation 의 문항 4유형을 쓰시오.",
  "a": "Standard ,  Missing word ,  List ,  Negative",
  "k": [
   "Standard",
   "Missing word",
   "List",
   "Negative"
  ],
  "e": "Negative 는 예외적으로 출제."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "PeopleCert가 밝힌 ITIL 4 모듈 일몰 예정일을 쓰시오.",
  "a": "2027년 12월 31일",
  "k": [
   "2027",
   "12",
   "31"
  ],
  "e": "FAQ: 현재 계획은 2027-12-31 일몰."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 1,
  "q": "ITIL 4 Foundation 보유자가 V5로 업데이트하는 1일 과정의 이름을 쓰시오.",
  "a": "ITIL Foundation Bridge (Version 5)",
  "k": [
   "Bridge"
  ],
  "e": "Bridge도 2027-12-31 일몰 예정."
 },
 {
  "s": "s5",
  "t": "V5 시행 일정·Bridge",
  "d": 2,
  "q": "ITIL Foundation (Version 5) 시험의 문항 수·시간·합격 문항 수를 쓰시오.",
  "a": "40문항 ,  60분 ,  26문항(65%)",
  "k": [
   "40",
   "60",
   "26"
  ],
  "e": "ITIL 4와 형식이 같다."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "비공식 출처 기준 V5 Foundation에서 비중 40%를 차지하는 범주를 쓰시오.",
  "a": "ITIL 가치 시스템(ITIL Value System)",
  "k": [
   "가치 시스템"
  ],
  "e": "두 번째는 핵심 용어 30%."
 },
 {
  "s": "s5",
  "t": "V5 실러버스 범주",
  "d": 2,
  "q": "비공식 출처 기준 V5 Foundation 범주 중 각 2.5%인 두 범주를 쓰시오.",
  "a": "ITIL과 AI, ITIL과 타 프레임워크",
  "k": [
   "AI",
   "프레임워크"
  ],
  "e": "각 약 1문항."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 1,
  "q": "V5 제품·서비스 수명주기 8활동을 영어로 나열 순서대로 쓰시오.",
  "a": "Discover, Design, Acquire, Build, Transition, Operate, Deliver, Support",
  "k": [
   "Discover",
   "Design",
   "Acquire",
   "Build",
   "Transition",
   "Operate",
   "Deliver",
   "Support"
  ],
  "e": "실제 수행은 반복적·비선형."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "수명주기 활동 중 외부에서 자원을 확보하는 활동(①)과 내부에서 만드는 활동(②)을 쓰시오.",
  "a": "① Acquire(획득) ② Build(구축)",
  "k": [
   "Acquire",
   "Build"
  ],
  "e": "ITIL 4 'Obtain/build'와 대비된다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 2,
  "q": "수명주기 활동 중 새·변경된 제품·서비스를 운영 상태로 옮기는 활동을 쓰시오.",
  "a": "Transition(전환)",
  "k": [
   "Transition"
  ],
  "e": "이후 Operate가 가동·유지."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 1,
  "q": "거버넌스의 3가지 활동을 영어로 쓰시오.",
  "a": "Evaluate, Direct, Monitor",
  "k": [
   "Evaluate",
   "Direct",
   "Monitor"
  ],
  "e": "EDM."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "ITIL 가치 시스템의 5구성요소를 쓰시오.",
  "a": "지침 원칙, 거버넌스, 가치사슬, 관행, 지속적 개선",
  "k": [
   "지침 원칙",
   "거버넌스",
   "가치사슬",
   "관행",
   "지속적 개선"
  ],
  "e": "ITIL 4 SVS와 같은 골격."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "지속적 개선 모델의 1단계와 2단계 질문을 영어로 쓰시오.",
  "a": "What is the vision? → Where are we now?",
  "k": [
   "vision",
   "now"
  ],
  "e": "비전 → 현재 위치 순서."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 3,
  "q": "로그·메트릭·트레이스로 시스템 내부 상태를 추론할 수 있는 정도를 뜻하는 용어를 쓰시오.",
  "a": "관측성(Observability)",
  "k": [
   "관측성",
   "Observability"
  ],
  "e": "모니터링보다 넓은 개념."
 },
 {
  "s": "s5",
  "t": "ITIL 가치 시스템·거버넌스",
  "d": 2,
  "q": "SRE의 원어를 쓰시오.",
  "a": "Site Reliability Engineering",
  "k": [
   "Site",
   "Reliability",
   "Engineering"
  ],
  "e": "엔지니어링으로 운영 신뢰성 관리."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 1,
  "q": "소비자에게 직접 가치를 전달하는 가치흐름(①)과 이를 가능하게 하는 내부 가치흐름(②)을 쓰시오.",
  "a": "① 핵심(core) 가치흐름 ② 지원(enabling) 가치흐름",
  "k": [
   "core",
   "enabling"
  ],
  "e": "채용·도구 도입은 enabling."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 2,
  "q": "가치흐름 매핑에서 트리거부터 가치 전달까지의 전체 경과 시간을 쓰시오.",
  "a": "리드 타임(Lead time)",
  "k": [
   "리드 타임"
  ],
  "e": "처리 시간 + 대기 시간."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 1,
  "q": "목표를 받아 계획·도구 사용으로 여러 단계를 자율 수행하는 AI를 쓰시오.",
  "a": "에이전틱 AI(Agentic AI)",
  "k": [
   "에이전틱",
   "Agentic"
  ],
  "e": "생성형 AI와 구분."
 },
 {
  "s": "s5",
  "t": "AI·타 프레임워크",
  "d": 2,
  "q": "PeopleCert 계열의 프로젝트 관리 방법론과, 여기에 애자일을 결합한 지침의 이름을 쓰시오.",
  "a": "PRINCE2, PRINCE2 Agile",
  "k": [
   "PRINCE2",
   "Agile"
  ],
  "e": "ITIL과 보완 관계."
 },
 {
  "s": "s5",
  "t": "ITIL 4 대비 변경점",
  "d": 2,
  "q": "2차 출처 기준 V5 관행 그룹 2개의 이름을 쓰시오.",
  "a": "일반 관리, 제품과 서비스 관리",
  "k": [
   "일반 관리",
   "제품과 서비스 관리"
  ],
  "e": "ITIL 4는 3그룹. [확인필요]"
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "원칙: 협업·총체·단순·자동화",
  "d": 2,
  "q": "'최적화·자동화' 원칙의 최적화 경로(road to optimization)를 순서대로 나열하시오.",
  "steps": [
   "최적화 대상의 맥락을 이해하고 합의한다",
   "현재 상태를 평가한다",
   "미래 상태와 우선순위를 합의한다",
   "적절한 이해관계자 참여를 보장한다",
   "개선을 반복적으로 실행한다",
   "영향을 지속적으로 모니터링한다"
  ],
  "e": "맥락 → 현재 → 미래 → 참여 → 반복 실행 → 모니터링. 자동화는 이렇게 최적화한 뒤에 적용한다. (단계 명칭은 공식 교재 대조 [확인필요])"
 },
 {
  "s": "s1",
  "t": "서비스 관계",
  "d": 2,
  "q": "제공자의 자원이 소비자의 가치로 이어지는 흐름을 순서대로 나열하시오.",
  "steps": [
   "제공자가 자원을 구성해 제품(product)을 만든다",
   "제품을 기반으로 대상 소비자 집단에 맞춘 서비스 오퍼링을 제시한다",
   "제공자와 소비자가 서비스 관계를 맺는다(제공·소비·관계 관리)",
   "소비자가 성과를 얻고 가치가 공동창출된다"
  ],
  "e": "제품 → 오퍼링 → 서비스 관계 → 성과·가치. 오퍼링은 제품을 소비자 집단별로 포장한 공식 기술이다."
 },
 {
  "s": "s1",
  "t": "원칙: 가치·시작·반복",
  "d": 1,
  "q": "'피드백 기반 반복 진행' 원칙에 따라 개선 과제를 수행하는 흐름을 순서대로 나열하시오.",
  "steps": [
   "큰 과제를 관리 가능한 작은 단위로 나눈다",
   "반복 단위의 목표를 정하고 수행한다",
   "반복 중·후에 이해관계자 피드백을 수집한다",
   "피드백을 반영해 다음 반복의 방향을 조정한다"
  ],
  "e": "작게 나누기 → 수행 → 피드백 → 조정의 루프다. 피드백은 반복 전에도 구할 수 있으며, 전체 그림은 계속 유지한다."
 },
 {
  "s": "s1",
  "t": "지침 원칙 개요",
  "d": 3,
  "q": "기존 수작업 승인 절차 개선 시 지침 원칙을 함께 적용하는 자연스러운 흐름을 순서대로 나열하시오.",
  "steps": [
   "현재 절차를 직접 관찰해 재사용할 요소를 찾는다(Start where you are)",
   "가치를 만들지 않는 단계를 제거한다(Keep it simple and practical)",
   "남은 절차를 최적화한다(Optimize)",
   "반복적·표준화된 단계를 자동화한다(Automate)"
  ],
  "e": "원칙은 조합해서 쓰인다. 현재 상태 평가 → 단순화 → 최적화 → 자동화 순서가 '자동화 먼저' 함정을 피하는 흐름이다. 원칙 번호 자체는 적용 순서가 아니다."
 },
 {
  "s": "s2",
  "t": "SVS 개요",
  "d": 1,
  "q": "SVS 에서 기회·수요가 가치로 바뀌는 흐름을 순서대로 배열하시오.",
  "steps": [
   "기회·수요 발생",
   "가치 사슬 활동이 지침 원칙·거버넌스·관행의 지원을 받아 수행",
   "제품·서비스 산출",
   "이해관계자에게 가치 창출"
  ],
  "e": "입력(기회·수요) → 가치 사슬 → 제품·서비스 → 출력(가치). 지속적 개선은 전 과정에 걸쳐 작동한다."
 },
 {
  "s": "s2",
  "t": "SVS 구성요소",
  "d": 1,
  "q": "거버닝 바디의 거버넌스 활동을 순서대로 배열하시오.",
  "steps": [
   "평가(Evaluate)",
   "지시(Direct)",
   "모니터(Monitor)"
  ],
  "e": "평가 → 지시 → 모니터(EDM). PDCA 와 혼동하지 말 것."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "운영 중 서비스의 인시던트 복구 가치 흐름(일반적 예시)을 순서대로 배열하시오.",
  "steps": [
   "Engage — 사용자 장애 보고 접수",
   "Deliver and support — 진단·복구 시도",
   "Obtain/build — 수정 구성요소 확보",
   "Design and transition — 수정분 운영 전환",
   "Engage — 복구 확인 후 사용자 통보"
  ],
  "e": "Engage 가 처음과 끝에 두 번 나온다 — 같은 활동이 한 가치 흐름에 반복될 수 있다. 세부 단계는 교재 예시를 일반화한 것[확인필요]."
 },
 {
  "s": "s2",
  "t": "가치 흐름",
  "d": 2,
  "q": "신규 서비스 개발 가치 흐름(일반적 예시)을 순서대로 배열하시오.",
  "steps": [
   "Engage — 고객 수요 접수",
   "Plan — 포트폴리오 결정",
   "Design and transition — 요구사항·설계",
   "Obtain/build — 구성요소 구축·조달",
   "Deliver and support — 운영 제공"
  ],
  "e": "수요 접수 → 계획 → 설계 → 구축 → 제공. 실제로는 D&T(전환)가 Obtain/build 뒤에 다시 등장할 수 있다."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 1,
  "q": "지속적 개선 모델 7단계를 순서대로 배열하시오.",
  "steps": [
   "What is the vision?",
   "Where are we now?",
   "Where do we want to be?",
   "How do we get there?",
   "Take action",
   "Did we get there?"
  ],
  "e": "비전 → 현재 위치 → 목표 → 계획 → 실행 → 확인 순이며, 마지막 7단계는 ‘How do we keep the momentum going?’ 이다(문항은 6단계까지)."
 },
 {
  "s": "s3",
  "t": "지속적 개선",
  "d": 2,
  "q": "지속적 개선 모델의 후반 단계를 순서대로 배열하시오.",
  "steps": [
   "어떻게 갈 것인가?(계획)",
   "실행(Take action)",
   "도달했는가?(확인)",
   "추진력을 어떻게 유지할까?"
  ],
  "e": "계획 → 실행 → 확인 → 추진력 유지. ‘Did we get there?’ 가 마지막이 아니다."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 1,
  "q": "문제 관리의 세 단계를 순서대로 배열하시오.",
  "steps": [
   "문제 식별(Problem identification)",
   "문제 통제(Problem control)",
   "오류 통제(Error control)"
  ],
  "e": "찾기 → 분석·문서화 → 알려진 오류 관리·영구 해결책."
 },
 {
  "s": "s3",
  "t": "문제 관리",
  "d": 2,
  "q": "반복 인시던트가 영구 해결되기까지의 흐름을 순서대로 배열하시오.",
  "steps": [
   "인시던트 추세 분석으로 문제 식별",
   "문제 분석·임시 해결책 문서화",
   "알려진 오류로 등록·관리",
   "영구 해결책 식별 후 변경 요청",
   "변경 실행에서 평가·승인 후 구현"
  ],
  "e": "문제 식별 → 문제 통제 → 오류 통제 → 변경 실행으로 이어진다. 영구 해결책은 변경을 통해 구현된다."
 },
 {
  "s": "s3",
  "t": "변경 실행",
  "d": 2,
  "q": "일반 변경의 일반적인 진행 흐름을 순서대로 배열하시오.",
  "steps": [
   "변경 요청 생성",
   "변경 모델에 따른 위험 평가",
   "변경 권한자의 승인",
   "변경 일정에 등록",
   "변경 구현"
  ],
  "e": "일반 변경은 변경 요청 생성으로 시작해 평가·승인·일정 수립을 거쳐 구현된다(일반적 흐름 정리)."
 },
 {
  "s": "s3",
  "t": "서비스 데스크",
  "d": 2,
  "q": "사용자가 서비스 데스크에 이슈를 보고했을 때 처리 경로를 순서대로 배열하시오.",
  "steps": [
   "접수 확인(acknowledged)",
   "분류(classified)",
   "소유(owned)",
   "조치(actioned)"
  ],
  "e": "서비스 데스크는 사용자의 이슈·질의·요청이 접수 확인·분류·소유·조치되도록 명확한 경로를 제공한다."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 2,
  "q": "문제 관리의 단계를 순서대로 배열하시오.",
  "steps": [
   "문제 식별(Problem identification)",
   "문제 통제(Problem control)",
   "오류 통제(Error control)"
  ],
  "e": "식별 → 분석·임시방편 문서화(통제) → 알려진 오류 관리·영구 해결(오류 통제)."
 },
 {
  "s": "s4",
  "t": "혼동쌍: 운영 용어",
  "d": 3,
  "q": "반복 장애가 근본 해결되기까지의 일반적 흐름을 순서대로 배열하시오.",
  "steps": [
   "인시던트 발생 및 신속 복구",
   "반복 인시던트로부터 문제 식별",
   "원인 분석 후 알려진 오류·임시방편 문서화",
   "변경 실행을 통한 영구 해결 구현"
  ],
  "e": "인시던트(복구) → 문제(원인) → 알려진 오류(분석·미해결) → 변경 실행(해결)."
 },
 {
  "s": "s4",
  "t": "서비스·기술관리 관행 목적",
  "d": 2,
  "q": "모니터링 및 이벤트 관리의 흐름을 순서대로 배열하시오.",
  "steps": [
   "서비스·구성요소를 체계적으로 관찰",
   "의미 있는 상태 변화를 이벤트로 식별",
   "이벤트를 분류·우선순위화",
   "적절한 대응 결정(필요 시 인시던트로 연계)"
  ],
  "e": "관찰 → 이벤트 식별 → 분류·우선순위 → 대응. [확인필요: 공식 교재 단계 명칭]"
 },
 {
  "s": "s4",
  "t": "시험 유형·풀이 전략",
  "d": 2,
  "q": "List 유형 문항을 푸는 순서를 배열하시오.",
  "steps": [
   "질문이 CORRECT/NOT 중 무엇을 묻는지 확인",
   "4개 진술 각각을 참/거짓으로 판정",
   "확실한 오답 진술이 든 조합 보기 소거",
   "남은 조합 중 정답 선택"
  ],
  "e": "확실한 진술부터 판정해 조합을 소거하면 시간을 줄일 수 있다."
 },
 {
  "s": "s5",
  "t": "제품·서비스 수명주기",
  "d": 1,
  "q": "V5 제품·서비스 수명주기 8활동을 실러버스 나열 순서대로 배열하시오.",
  "steps": [
   "Discover(발견)",
   "Design(설계)",
   "Acquire(획득)",
   "Build(구축)",
   "Transition(전환)",
   "Operate(운영)",
   "Deliver(제공)",
   "Support(지원)"
  ],
  "e": "나열 순서일 뿐 실제 수행은 반복적·비선형이다."
 },
 {
  "s": "s5",
  "t": "가치흐름 매핑",
  "d": 2,
  "q": "가치흐름 매핑 절차(2차 출처 요지)를 순서대로 배열하시오.",
  "steps": [
   "가치흐름 식별",
   "현재 상태(As-Is) 매핑",
   "분석(대기·낭비·병목)",
   "미래 상태(To-Be) 설계",
   "개선 계획 수립·실행"
  ],
  "e": "As-Is를 건너뛰고 To-Be부터 그리면 'Start where you are' 위반."
 }
];

CPPG.selfcheck = [
 {
  "g": "개념·원칙",
  "t": "서비스·서비스 관리·제품·서비스 오퍼링의 정의를 키워드로 구분한다"
 },
 {
  "g": "개념·원칙",
  "t": "산출물과 성과의 차이를 예를 들어 설명한다"
 },
 {
  "g": "개념·원칙",
  "t": "제거되는/부과되는 비용·위험의 예를 들고 소비자의 위험 감소 기여 방법을 설명한다"
 },
 {
  "g": "개념·원칙",
  "t": "유틸리티와 워런티를 fit for purpose/fit for use로 구분하고 둘 다 필요한 이유를 설명한다"
 },
 {
  "g": "개념·원칙",
  "t": "고객·사용자·스폰서와 서비스 제공·소비·관계 관리를 시나리오에서 구분한다"
 },
 {
  "g": "개념·원칙",
  "t": "7 지침 원칙의 영문 명칭과 핵심 메시지·오답 함정을 말한다"
 },
 {
  "g": "개념·원칙",
  "t": "지침 원칙이 서로 상호작용하는 예를 두 가지 이상 든다"
 },
 {
  "g": "SVS·가치사슬",
  "t": "서비스 관리 4차원과 각 차원의 범위를 예를 들어 설명할 수 있다"
 },
 {
  "g": "SVS·가치사슬",
  "t": "PESTLE 외부 요인 여섯 가지를 말하고 4차원과의 관계를 설명할 수 있다"
 },
 {
  "g": "SVS·가치사슬",
  "t": "SVS 의 입력·출력과 다섯 구성요소를 구분할 수 있다"
 },
 {
  "g": "SVS·가치사슬",
  "t": "거버닝 바디의 EDM 활동과 관행 34개(14/17/3) 구성을 설명할 수 있다"
 },
 {
  "g": "SVS·가치사슬",
  "t": "가치 사슬 6활동의 목적을 핵심어로 구분할 수 있다"
 },
 {
  "g": "SVS·가치사슬",
  "t": "가치 사슬 활동 간 주요 입출력(사용자 지원 작업·변경 요청 등)을 설명할 수 있다"
 },
 {
  "g": "SVS·가치사슬",
  "t": "SVS·가치 사슬·가치 흐름·프로세스의 차이를 설명할 수 있다"
 },
 {
  "g": "관행 상세",
  "t": "지속적 개선 모델 7단계를 질문 형태로 순서대로 말하고 각 단계의 대표 활동을 설명할 수 있다"
 },
 {
  "g": "관행 상세",
  "t": "표준·일반·긴급 변경의 승인 방식과 변경 권한자·변경 일정의 역할을 설명할 수 있다"
 },
 {
  "g": "관행 상세",
  "t": "인시던트 우선순위 기준과 스워밍을 설명하고 인시던트 관리와 문제 관리를 구분할 수 있다"
 },
 {
  "g": "관행 상세",
  "t": "문제 식별·문제 통제·오류 통제 단계별 활동과 알려진 오류·임시 해결책을 설명할 수 있다"
 },
 {
  "g": "관행 상세",
  "t": "서비스 요청의 유형과 표준화·자동화·정책의 의미를 설명할 수 있다"
 },
 {
  "g": "관행 상세",
  "t": "서비스 데스크의 목적(SPOC)·채널·가상 서비스 데스크·필요 역량을 설명할 수 있다"
 },
 {
  "g": "관행 상세",
  "t": "SLA 요건, 수박 효과, SLM 정보원 4가지(고객 참여·피드백·운영·비즈니스 지표)를 설명할 수 있다"
 },
 {
  "g": "목적·함정",
  "t": "목적만 외우는 관행 8개의 목적을 핵심 동사로 구분해 설명할 수 있다"
 },
 {
  "g": "목적·함정",
  "t": "8개 관행을 일반관리·서비스관리·기술관리 그룹으로 분류할 수 있다"
 },
 {
  "g": "목적·함정",
  "t": "IT 자산·이벤트·CI·변경·인시던트·문제·알려진 오류의 정의를 영문 키워드로 말할 수 있다"
 },
 {
  "g": "목적·함정",
  "t": "인시던트·문제·알려진 오류·임시방편의 차이를 예를 들어 설명할 수 있다"
 },
 {
  "g": "목적·함정",
  "t": "변경·릴리스·배포, 유틸리티·워런티, 산출물·성과를 구분할 수 있다"
 },
 {
  "g": "목적·함정",
  "t": "Standard·Missing word·List·Negative 문항의 풀이 전략을 설명할 수 있다"
 },
 {
  "g": "v5 차이",
  "t": "ITIL 4 일몰 예정일(2027-12-31)과 Bridge 대상·성격을 설명할 수 있다"
 },
 {
  "g": "v5 차이",
  "t": "V5 Foundation 7개 범주와 비중(비공식 출처)을 말하고 공부 우선순위를 정할 수 있다"
 },
 {
  "g": "v5 차이",
  "t": "수명주기 8활동을 순서대로 말하고 ITIL 4 가치사슬 6활동과 구분할 수 있다"
 },
 {
  "g": "v5 차이",
  "t": "ITIL 가치 시스템 5구성요소·거버넌스 EDM·지속적 개선 7단계를 설명할 수 있다"
 },
 {
  "g": "v5 차이",
  "t": "핵심/지원 가치흐름과 매핑 절차(As-Is→To-Be)를 설명할 수 있다"
 },
 {
  "g": "v5 차이",
  "t": "ITIL 4 대비 V5에서 바뀐 것과 유지된 것을 표로 구분할 수 있다"
 }
];

CPPG.roadmap = {
 "2주 표준": [
  "Week 1 — 핵심 개념·7 지침 원칙·4차원·SVS·가치 사슬 + 카드 영어 원어 암기",
  "Week 2 — 관행 상세 7개(최대 배점) + 관행 목적 8개 + 모의고사 3회 + 헷갈리는 쌍"
 ],
 "시험 3일 전": [
  "D-3 — 관행 상세 7개 노트 재독",
  "D-2 — 정의 카드(영어) + 헷갈리는 쌍 시트",
  "D-1 — 모의고사 1회 + 오답"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "서비스 vs 서비스 관리 정의",
  "산출물(Output) vs 성과(Outcome)",
  "유틸리티 vs 워런티(fit for purpose/use)",
  "고객·사용자·스폰서 정의(Missing word)",
  "7 지침 원칙 영문 명칭·핵심 메시지",
  "Optimize then automate 순서",
  "Start where you are — 재사용·관찰",
  "4차원 이름과 범위(문화=조직과 사람)",
  "SVS 입력(기회·수요)·출력(가치)",
  "SVS 5구성요소 vs 입력·출력·4차원 구분",
  "가치 사슬 6활동 목적 핵심어(공유된 이해·time to market·구성요소 가용 등)",
  "Obtain/build vs Deliver and support 구분",
  "7개 관행 목적 키워드 대조(6.1 i~o)",
  "지속적 개선 모델 7단계 순서·단계별 활동",
  "표준·일반·긴급 변경 구분",
  "인시던트 vs 문제 목적 구분",
  "알려진 오류·임시 해결책 정의",
  "문제 관리 3단계(식별·통제·오류 통제)",
  "서비스 데스크 = SPOC·수요 포착",
  "SLA 정의·요건·수박 효과",
  "인시던트 vs 문제 vs 알려진 오류 정의",
  "릴리스(available) vs 배포(move) 목적",
  "IT 자산(재무 가치) vs CI(관리 필요) 정의",
  "이벤트 정의(의미 있는 상태 변화)",
  "변경 정의(추가·수정·제거, 직·간접)",
  "유틸리티 vs 워런티",
  "ITIL 가치 시스템 5구성요소(V5 40%)",
  "수명주기 8활동 이름·순서",
  "Acquire vs Build / Operate·Deliver·Support 구분",
  "거버넌스 EDM",
  "7원칙·4차원 명칭 유지",
  "V5 신규 용어(UX·지속가능성·SRE·관측성·CI/CD)"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "가치 공동창출·가치의 주관성",
  "비용·위험의 제거/부과",
  "서비스 오퍼링 3요소(재화·자원 접근·서비스 행위)",
  "서비스 관계(제공·소비·관계 관리)",
  "지침 원칙의 성격·상호작용",
  "협업 ≠ 합의",
  "Keep it simple — 예외마다 규칙 금지",
  "PESTLE 여섯 요소",
  "거버닝 바디 EDM",
  "관행 34개(14/17/3)",
  "가치 흐름 정의·같은 활동 반복 가능",
  "가치 사슬 상호연결성·비선형",
  "Engage·Plan 주요 입출력",
  "지속적 개선의 세 수준",
  "변경 권한자·변경 일정의 역할",
  "스워밍",
  "인시던트 우선순위·목표 해결 시간",
  "서비스 요청 유형(불만 포함)·표준화·자동화",
  "가상 서비스 데스크·채널·공감 역량",
  "SLM 정보원 4가지(고객 참여·피드백·운영·비즈니스 지표)",
  "CIR·지속적 개선은 모두의 책임",
  "정보보안·관계·공급자 관리 목적 구분",
  "서비스 구성 관리 목적(정확한 CI 정보)",
  "모니터링 및 이벤트 관리 목적",
  "관행 그룹(배포만 기술관리)",
  "서비스 요청 vs 인시던트",
  "산출물 vs 성과",
  "고객·사용자·스폰서",
  "List 형 조합 소거 전략",
  "ITIL 4 일몰 2027-12-31·Bridge",
  "지속적 개선 모델 7단계",
  "핵심 vs 지원 가치흐름·매핑 절차",
  "에이전틱 AI·AI 거버넌스",
  "DevOps·PRINCE2 관계",
  "관행 그룹 3→2 [확인필요]"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "고객·사용자·스폰서 — 시나리오에서 역할 찾기",
  "problem": "한 병원의 간호부장은 새 간호 기록 시스템의 요구사항을 정의하고 도입 성과를 책임진다. 병원 재무이사는 시스템 사용료 예산을 승인한다. 병동 간호사들이 매일 시스템을 사용한다. 재무이사의 역할은?\n① 고객(Customer)\n② 사용자(User)\n③ 스폰서(Sponsor)\n④ 서비스 제공자(Service provider)",
  "steps": [
   "각 인물의 행동을 정의 키워드로 바꾼다: 요구 정의·성과 책임 / 예산 승인 / 사용.",
   "예산 승인(authorizes budget) = 스폰서. 재무이사가 여기에 해당한다.",
   "간호부장은 고객, 간호사는 사용자다. 서비스 제공자는 시스템을 공급하는 조직이다."
  ],
  "answer": "③ — 예산을 승인하는 사람은 스폰서다.",
  "traps": [
   "'고객 = 돈 내는 사람'이라는 일상 어감에 끌리면 ①을 고른다 — ITIL에서 예산 승인은 스폰서",
   "한 사람이 여러 역할을 겸할 수 있다는 점도 함께 출제된다"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "산출물 vs 성과 — Missing word 형",
  "problem": "Identify the missing word in the following sentence.\nAn [?] is a result for a stakeholder enabled by one or more outputs.\n① outcome\n② output\n③ utility\n④ value",
  "steps": [
   "정의 문장 안에 'enabled by one or more outputs'가 있으므로 정답은 output 자체일 수 없다.",
   "'result for a stakeholder'는 성과(outcome)의 키워드다.",
   "value는 'perceived benefits, usefulness and importance', utility는 'functionality'가 키워드다."
  ],
  "answer": "① outcome",
  "traps": [
   "output/outcome 의 철자가 비슷해 서두르면 ②를 고른다",
   "관사 'An' 은 outcome·output 둘 다에 맞으므로 단서가 되지 않는다"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "지침 원칙 — 시나리오에서 가장 직접적인 원칙 고르기",
  "problem": "한 조직이 서비스 데스크 개선을 위해 새 도구 도입을 검토한다. 컨설턴트는 \"기존 도구의 티켓 분류 체계와 보고서는 잘 작동하니 이를 평가해 유지하고, 문제가 있는 부분만 바꾸자\"고 제안했다. 이 제안에 가장 직접적으로 반영된 원칙은?\n① Focus on value\n② Start where you are\n③ Optimize and automate\n④ Think and work holistically",
  "steps": [
   "핵심 행동: 기존 자산 평가 → 잘 작동하는 것은 재사용 → 필요한 부분만 변경.",
   "처음부터 재구축하지 않고 현재 상태를 평가해 재사용하라는 것은 Start where you are 의 정의다.",
   "Optimize and automate 는 최적화 후 자동화, Holistically 는 4차원 전체 고려가 핵심이라 이 제안의 초점과 다르다."
  ],
  "answer": "② Start where you are",
  "traps": [
   "여러 원칙이 모두 '조금씩' 관련되어 보인다 — 시나리오의 핵심 동사(평가·재사용)에 가장 직접 대응하는 원칙을 고른다",
   "Negative 형으로 '기존 것을 모두 폐기'를 옳다고 내는 변형도 있다"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "가치 사슬 활동 목적 — 핵심어로 판별",
  "problem": "Which value chain activity ensures that service components are available when and where they are needed, and meet agreed specifications?\n① Design and transition\n② Obtain/build\n③ Deliver and support\n④ Engage",
  "steps": [
   "문제의 핵심어를 찾는다 — 'service components', 'available when and where needed', 'agreed specifications'.",
   "'구성요소(components)'의 가용성이 목적인 활동은 Obtain/build 다.",
   "Deliver and support 는 '서비스(services)'를 합의된 사양대로 제공 — 대상이 구성요소가 아니라 서비스다.",
   "Design and transition 의 핵심어는 'quality, costs, time to market' 이다."
  ],
  "answer": "② Obtain/build",
  "traps": [
   "'agreed specifications' 는 Deliver and support 목적에도 나오므로 단어 하나만 보고 고르면 틀린다 — components 냐 services 냐로 구분",
   "time to market 은 D&T 전용 키워드"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "SVS 구성요소 vs 입력·출력·4차원",
  "problem": "다음 중 서비스 가치 시스템(SVS)의 구성요소 두 가지는?\n1. 거버넌스\n2. 수요\n3. 관행\n4. 정보와 기술\n① 1과 2\n② 1과 3\n③ 2와 4\n④ 3과 4",
  "steps": [
   "SVS 5구성요소를 떠올린다 — 지침 원칙·거버넌스·가치 사슬·관행·지속적 개선.",
   "1 거버넌스, 3 관행은 구성요소다.",
   "2 수요는 SVS 의 입력(기회와 함께), 4 정보와 기술은 4차원 중 하나다."
  ],
  "answer": "② 1과 3",
  "traps": [
   "입력(기회·수요)·출력(가치)을 구성요소로 착각",
   "4차원을 SVS 구성요소로 착각 — 4차원은 SVS 전체에 적용되는 관점"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "4차원 판별 — 상황 문장에서 차원 찾기",
  "problem": "한 조직이 신규 서비스를 도입하면서 '팀 간 신뢰와 투명성의 문화를 조성하고, 구성원의 역량 교육 계획을 수립'했다. 이 활동이 주로 다루는 서비스 관리 차원은?\n① 정보와 기술\n② 파트너와 공급자\n③ 조직과 사람\n④ 가치 흐름과 프로세스",
  "steps": [
   "상황 속 키워드 — '문화', '신뢰·투명성', '역량 교육'.",
   "문화·역할·역량·리더십은 조직과 사람 차원의 범위다.",
   "교육 '도구'나 '정보 시스템' 이 언급되지 않았으므로 정보와 기술이 아니다.",
   "외부 조직·계약이 없으므로 파트너와 공급자도 아니다."
  ],
  "answer": "③ 조직과 사람",
  "traps": [
   "'교육 계획' 을 프로세스로 보고 가치 흐름과 프로세스를 고르는 실수",
   "실무에서는 여러 차원이 겹치지만 시험은 '주로' 다루는 차원을 묻는다"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "관행 목적 바꿔치기 — 인시던트 vs 문제",
  "problem": "What is the purpose of the 'problem management' practice?\n① To minimize the negative impact of incidents by restoring normal service operation as quickly as possible\n② To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors\n③ To capture demand for incident resolution and service requests\n④ To maximize the number of successful service and product changes",
  "steps": [
   "문항이 묻는 관행 이름(problem management)을 먼저 확인한다.",
   "목적 문구의 동사·키워드를 대조한다 — 문제 관리는 ‘원인(causes)’ ‘임시 해결책·알려진 오류’ ‘가능성(likelihood)’.",
   "①은 ‘restoring … as quickly as possible’ — 인시던트 관리, ③은 ‘capture demand’ — 서비스 데스크, ④는 ‘successful changes’ — 변경 실행."
  ],
  "answer": "② — 원인 식별과 임시 해결책·알려진 오류 관리로 인시던트의 발생 가능성·영향을 줄인다.",
  "traps": [
   "‘incident’ 라는 단어가 들어 있다고 인시던트 관리로 고르지 말 것 — 문제 관리 목적에도 incidents 가 나온다",
   "‘likelihood’(가능성) 는 문제 관리, ‘as quickly as possible’ 은 인시던트 관리"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "지속적 개선 모델 — 단계와 활동 매칭",
  "problem": "지속적 개선 모델에서 ‘기준선 평가(baseline assessment)’ 를 수행하는 단계는?\n① What is the vision?\n② Where are we now?\n③ Where do we want to be?\n④ Did we get there?",
  "steps": [
   "기준선 = 현재 상태를 객관적으로 측정한 값이다.",
   "‘현재 상태’ 를 묻는 질문은 ‘Where are we now?’(2단계)다.",
   "③ 은 측정 가능한 목표(CSF·KPI)·갭 분석, ④ 는 목표·가치 달성 확인."
  ],
  "answer": "② Where are we now?",
  "traps": [
   "기준선(2단계)과 목표 설정(3단계) 바꿔치기",
   "마지막 단계를 ‘Did we get there?’ 로 착각 — 실제 마지막은 ‘How do we keep the momentum going?’"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "변경 유형 판별 — 사례형",
  "problem": "Which is an example of a STANDARD change?\n① Implementing a security patch to stop an active attack\n② A low-risk, pre-authorized software installation following a documented procedure\n③ Migrating the core banking system to a new data center\n④ Changing firewall rules to resolve a major incident",
  "steps": [
   "표준 변경의 3요건: 저위험·잘 이해됨·완전 문서화 → 사전 승인.",
   "② 는 문서화된 절차에 따른 사전 승인 설치 — 표준 변경, 흔히 서비스 요청으로 시작된다.",
   "① 과 ④ 는 즉시 실행이 필요하므로 긴급 변경, ③ 은 대규모 위험 평가가 필요한 일반 변경."
  ],
  "answer": "② — low-risk, pre-authorized, documented procedure.",
  "traps": [
   "‘보안 패치’ 라는 이유로 표준 변경을 고르는 실수 — 공격 대응은 긴급 변경",
   "긴급 변경도 평가·승인은 필요(신속화)"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "List 형 — SLM 정보원 분류",
  "problem": "Which TWO are examples of operational metrics used in service level management?\n1. System availability\n2. Incident resolution time\n3. Open questions asked in customer engagement\n4. Event-based customer surveys\n① 1 and 2\n② 1 and 3\n③ 2 and 4\n④ 3 and 4",
  "steps": [
   "SLM 정보원 4가지: 고객 참여 / 고객 피드백 / 운영 지표 / 비즈니스 지표.",
   "가용성·인시던트 해결 시간·변경 적시성·요청 처리 시간 = 운영 지표.",
   "개방형 질문 = 고객 참여, 이벤트 기반 설문 = 고객 피드백."
  ],
  "answer": "① 1 and 2",
  "traps": [
   "List 형은 진술 4개 중 정답 2개를 각각 검증한 뒤 조합을 고른다",
   "설문(survey)을 ‘지표(metric)’ 로 착각하지 말 것"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "목적 문구 매칭 — 릴리스 vs 배포",
  "problem": "What is the purpose of the release management practice?\n① To move new or changed hardware, software, documentation and processes to live environments\n② To make new and changed services and features available for use\n③ To ensure that risks are properly assessed and changes are authorized\n④ To ensure accurate and reliable configuration information is available",
  "steps": [
   "질문의 관행 이름(release)을 보고 핵심 동사 'make available for use'를 먼저 떠올린다.",
   "①의 'move … to live environments'는 배포 관리의 동사 — 소거.",
   "③은 변경 실행, ④는 서비스 구성 관리의 목적 — 소거.",
   "남은 ②가 릴리스 관리의 목적과 일치한다."
  ],
  "answer": "② — make available for use 가 릴리스 관리의 핵심 표현.",
  "traps": [
   "배포(move)와 릴리스(available)를 맞바꾸는 것이 고정 패턴",
   "'changes'라는 단어가 보이면 변경 실행으로 끌려가기 쉽다"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "Missing word — 정의 키워드 매칭",
  "problem": "Identify the missing word in the following sentence.\nA [?] is a problem that has been analysed but has not been resolved.\n① workaround\n② known error\n③ incident\n④ event",
  "steps": [
   "빈칸 뒤 'a problem that has been analysed but has not been resolved' — 분석 완료·미해결이 키워드.",
   "workaround는 영향을 줄이는 방법이지 문제의 상태가 아니다 — 소거.",
   "incident(중단·저하), event(상태 변화)는 문제가 아니다 — 소거.",
   "분석됐지만 미해결인 문제 = known error."
  ],
  "answer": "② known error",
  "traps": [
   "임시방편이 있다고 해결된 것이 아니다 — known error 는 그대로 남는다",
   "'potential cause'가 보이면 problem, 'analysed but not resolved'면 known error"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "List 형 — 인시던트·문제 진술 2개 고르기",
  "problem": "Which TWO statements are CORRECT?\n1. Incident management aims to restore normal service operation as quickly as possible\n2. Problem management must identify the root cause before an incident can be resolved\n3. A problem can be a potential cause of incidents that have not yet occurred\n4. A known error is a problem that has been resolved using a workaround\n① 1 and 2\n② 1 and 3\n③ 2 and 4\n④ 3 and 4",
  "steps": [
   "진술 1: 인시던트 관리의 목적 그대로 — 참.",
   "진술 2: 인시던트 복구는 근본 원인 규명을 기다리지 않는다 — 거짓 → ①·③ 소거.",
   "진술 4: known error 는 '미해결' 문제, workaround 는 해결이 아니다 — 거짓 → ④ 소거.",
   "남은 ②(1·3)를 진술 3(잠재적 원인 = 문제)로 확인."
  ],
  "answer": "② 1 and 3",
  "traps": [
   "'must … before'처럼 순서를 강제하는 진술은 오답 신호",
   "List 형은 확실한 오답 하나로 조합 두 개를 한 번에 지운다"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "수명주기 vs 가치사슬 — 활동 이름 섞어 내기",
  "problem": "ITIL Version 5의 제품·서비스 수명주기(Product and Service Lifecycle) 활동으로만 짝지어진 것은?\n① Plan · Discover · Build\n② Acquire · Transition · Support\n③ Engage · Operate · Deliver\n④ Improve · Design · Obtain/build",
  "steps": [
   "수명주기 8활동을 먼저 떠올린다: Discover·Design·Acquire·Build·Transition·Operate·Deliver·Support.",
   "ITIL 4 가치사슬 6활동(Plan·Improve·Engage·Design & transition·Obtain/build·Deliver & support)이 섞인 보기를 지운다.",
   "① Plan, ③ Engage, ④ Improve·Obtain/build가 가치사슬 활동 → 소거.",
   "② Acquire·Transition·Support는 모두 8활동에 속한다."
  ],
  "answer": "② — Acquire·Transition·Support 모두 수명주기 활동.",
  "traps": [
   "'Design'은 수명주기 활동이지만 ITIL 4의 'Design & transition'과 단어가 겹친다",
   "Obtain/build(ITIL 4)와 Acquire·Build(V5)를 같은 것으로 보면 ④를 고르게 된다"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "시행 일정 — '예정'과 '확정'·자격 리셋 함정",
  "problem": "2026-10 현재 ITIL 시험 상황에 대한 설명으로 옳지 않은 것은?\n① ITIL 4 Foundation과 ITIL Foundation (Version 5)가 병행 시행 중이다.\n② PeopleCert는 ITIL 4 모듈을 2027-12-31에 일몰할 계획이다.\n③ ITIL 4 Foundation 보유자는 Bridge(V5) 과정으로 업데이트할 수 있다.\n④ V5 출시로 기존 ITIL 4 자격은 리셋되어 2027년까지 재취득해야 한다.",
  "steps": [
   "공식 출처(PeopleCert FAQ·발표)가 뒷받침하는 사실과 아닌 것을 나눈다.",
   "①: 두 시험 모두 공식 상품 페이지에 있음 → 옳음.",
   "②: FAQ 'current plan … 31 December 2027' → 옳음(예정).",
   "③: Bridge는 ITIL 4 Foundation 보유자용 → 옳음.",
   "④: 공식 안내는 '기존 자격은 리셋 없이 유효' → 틀림."
  ],
  "answer": "④ — 기존 자격은 리셋되지 않는다.",
  "traps": [
   "일몰 '예정'을 '이미 종료'로 바꾼 보기",
   "Bridge 대상을 '모든 수험자'로 넓힌 보기"
  ]
 }
];
