/* ============================================================
   CISSP (ISC2 2024-04-15 Exam Outline) — 학습·퀴즈 데이터
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "CISSP 정보시스템보안전문가",
 "brand": "CISSP",
 "tag": "ISC2 CISSP · Exam Outline 2024-04-15 시행",
 "storeKey": "cissp",
 "topicUnit": "단원",
 "title": "CISSP — 암기·퀴즈 학습",
 "h1": "CISSP",
 "unit": "도메인",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 70,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "Certified Information Systems Security Professional (ISC2)",
 "host": "ISC2",
 "type": "CAT(영어) 100~150문항 · 객관식 + advanced item types(드래그앤드롭·핫스팟)",
 "time": "3시간 · Pearson VUE 시험장",
 "pass": "700 / 1000점",
 "book": "ISC2 CISSP Certification Exam Outline (Effective 2024-04-15) + Official Study Guide",
 "slogan": "CISSP = 보안·리스크 관리(16) + 자산(10) + 아키텍처·엔지니어링(13) + 네트워크(13) + IAM(13) + 평가·테스트(12) + 보안 운영(13) + SW 개발 보안(10) — ★관리자 관점·리스크 기반 판단★",
 "paperSpec": [
  {
   "s": "s1",
   "n": 20
  },
  {
   "s": "s2",
   "n": 13
  },
  {
   "s": "s3",
   "n": 16
  },
  {
   "s": "s4",
   "n": 16
  },
  {
   "s": "s5",
   "n": 16
  },
  {
   "s": "s6",
   "n": 15
  },
  {
   "s": "s7",
   "n": 16
  },
  {
   "s": "s8",
   "n": 13
  }
 ],
 "footer": [
  "CISSP / 주관 <b>ISC2</b> · 영어 CAT 100~150문항 3시간 · <b>700/1000 합격</b> · Pearson VUE · 실무경력 5년(8개 도메인 중 2개 이상, 학위·인정 자격으로 1년 면제)",
  "<b>2024-04-15 시행 아웃라인</b> 8개 도메인 배점(16·10·13·13·13·12·13·10%)을 따릅니다. 모의고사는 125문항으로 배점 비례 구성. 차기 개정 일정은 [확인필요].",
  "⚠ CAT 시험은 정답률이 아니라 능력 추정치로 판정합니다. 사이트의 70% 판정은 <b>자체 학습 목표</b>입니다.",
  "⚠ 문항은 공식 아웃라인으로 새로 만든 연습 문제이며 실제 기출이 아닙니다."
 ],
 "info": [
  {
   "title": "CISSP 도메인 배점 (2024-04-15)",
   "type": "table",
   "head": [
    "도메인",
    "배점",
    "하위 항목"
   ],
   "rows": [
    [
     "1 Security and Risk Management",
     "16%",
     "1.1~1.13"
    ],
    [
     "2 Asset Security",
     "10%",
     "2.1~2.6"
    ],
    [
     "3 Security Architecture and Engineering",
     "13%",
     "3.1~3.10"
    ],
    [
     "4 Communication and Network Security",
     "13%",
     "4.1~4.3"
    ],
    [
     "5 Identity and Access Management (IAM)",
     "13%",
     "5.1~5.6"
    ],
    [
     "6 Security Assessment and Testing",
     "12%",
     "6.1~6.5"
    ],
    [
     "7 Security Operations",
     "13%",
     "7.1~7.15"
    ],
    [
     "8 Software Development Security",
     "10%",
     "8.1~8.5"
    ]
   ]
  },
  {
   "title": "ISC2 문제 푸는 요령",
   "type": "list",
   "items": [
    "★관리자·자문가 관점★ — 기술 조작보다 정책·리스크·비즈니스 목표를 먼저 본다(Think like a manager).",
    "인명 안전(Human safety)이 언제나 최우선 — 자산·데이터보다 앞선다.",
    "FIRST·BEST·MOST 문항은 ★모두 맞는 보기 중 가장 상위·선행 조치★를 고른다(정책·경영진 지원 → 절차 → 기술).",
    "최종 책임(accountability)은 위임할 수 없다 — 경영진·데이터 소유자에게 남는다.",
    "CAT 은 이전 문항으로 돌아갈 수 없다 — 문항마다 확정하고 넘어간다."
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "보안·리스크 관리",
  "short": "리스크",
  "out": 20,
  "color": "#1e40af",
  "desc": "CIA·AAA · 보안 거버넌스 · 법·규제·윤리(ISC2 강령) · 정책 체계 · BCP/BIA · 인적 보안 · 리스크 관리·위협 모델링 · SCRM · 보안 인식 교육 ★최대 배점★ (16%)"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "자산 보안",
  "short": "자산",
  "out": 13,
  "color": "#0f766e",
  "desc": "정보·자산 식별·분류 · 소유자·관리자 역할 · 데이터 수명주기 · 보존·파기(sanitization) · 데이터 상태별 보호 · DLP·DRM·CASB (10%)"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "보안 아키텍처·엔지니어링",
  "short": "아키텍처",
  "out": 16,
  "color": "#7c3aed",
  "desc": "보안 설계 원칙 · 보안 모델(BLP·Biba·Clark-Wilson) · 평가 기준(CC) · 취약점(클라우드·IoT·ICS) · 암호(대칭·비대칭·해시·PKI·PQC) · 암호 공격 · 물리 보안 (13%)"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "통신·네트워크 보안",
  "short": "네트워크",
  "out": 16,
  "color": "#0369a1",
  "desc": "OSI·TCP/IP · 보안 프로토콜(IPsec·TLS) · 무선·셀룰러 · CDN·SDN · 네트워크 구성요소 · VPN·원격접속 · 네트워크 공격 대응 (13%)"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "ID·접근 관리(IAM)",
  "short": "IAM",
  "out": 16,
  "color": "#b45309",
  "desc": "물리·논리 접근통제 · 인증 요소·생체(FRR·FAR·CER) · 페더레이션(SAML·OAuth·OIDC) · Kerberos · 접근통제 모델 · 계정 수명주기 · 특권 관리 (13%)"
 },
 {
  "id": "s6",
  "no": 6,
  "name": "보안 평가·테스트",
  "short": "평가",
  "out": 15,
  "color": "#be123c",
  "desc": "평가·감사 전략 · 취약점 스캔·침투테스트 · 코드 리뷰·SAST·DAST·퍼징 · 합성 트랜잭션 · KPI·KRI · SOC 보고서 · 감사 유형 (12%)"
 },
 {
  "id": "s7",
  "no": 7,
  "name": "보안 운영",
  "short": "운영",
  "out": 16,
  "color": "#15803d",
  "desc": "조사·증거·포렌식 · 로깅·SIEM·SOAR · 형상·변경 관리 · 사고 대응 · 탐지·예방 · 백업·복구 사이트 · DR 테스트 · 물리·인적 안전 (13%)"
 },
 {
  "id": "s8",
  "no": 8,
  "name": "SW 개발 보안",
  "short": "SW개발",
  "out": 13,
  "color": "#a21caf",
  "desc": "SDLC·DevSecOps · 성숙도 모델(CMMI·SAMM) · 개발 환경 보안 · OWASP·API 보안 · 시큐어 코딩 · 상용·오픈소스·서드파티 SW 위험 (10%)"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "거버넌스",
  "front": "CIA + 진정성·부인방지",
  "key": "보안 5대 개념(1.2)",
  "back": "Confidentiality(기밀성)·Integrity(무결성)·Availability(가용성)에 ★Authenticity(진정성)·Nonrepudiation(부인방지)★를 더한 것이 2024 아웃라인 1.2의 보안 개념.",
  "tip": "부인방지는 ★전자서명(개인키)★으로 달성 — 대칭키 MAC 은 부인방지 불가."
 },
 {
  "s": "s1",
  "g": "거버넌스",
  "front": "Due Care vs Due Diligence",
  "key": "하는 것 vs 알아보는 것",
  "back": "Due Care = 합리적인 사람이 했을 보호 조치를 ★실제로 시행★(Doing). Due Diligence = 위험을 ★조사·검증·감독★하는 지속적 노력(Knowing/Researching).",
  "tip": "과실(negligence) 판단 기준은 Due Care 결여. '정책 수립·이행' = Care, '점검·평가' = Diligence."
 },
 {
  "s": "s1",
  "g": "거버넌스",
  "front": "정책 문서 계층",
  "key": "Policy→Standard→Procedure",
  "back": "Policy(경영진 의도, 필수·상위) → Standard(필수 기술·수치 요구) → Baseline(최소 보안 수준) → Procedure(단계별 수행 절차) / Guideline(권고, ★선택★).",
  "tip": "Guideline 만 강제성이 없다. 정책은 '무엇·왜', 절차는 '어떻게'."
 },
 {
  "s": "s1",
  "g": "거버넌스",
  "front": "보안 역할과 책임",
  "key": "Senior Mgmt가 최종 책임",
  "back": "고위 경영진 = 보안의 ★최종 책임(accountability)★. Data Owner = 분류·접근 승인, Custodian = 일상 보호 운영, User = 정책 준수, Auditor = 독립 검토.",
  "tip": "책임(accountability)은 위임 불가, 권한·업무(responsibility)는 위임 가능."
 },
 {
  "s": "s1",
  "g": "법규",
  "front": "(ISC)² 윤리강령 4대 규범",
  "key": "사회→정직→주인→직업",
  "back": "① 사회·공익·공공 신뢰·인프라 보호 ② 명예롭고 정직·공정·책임감 있게·합법적으로 행동 ③ 주인(principals)에게 성실·유능한 서비스 ④ 전문직 발전·보호.",
  "tip": "★우선순위 순서★로 적용 — 충돌 시 앞 규범이 우선."
 },
 {
  "s": "s1",
  "g": "법규",
  "front": "지식재산권 4종",
  "key": "저작·상표·특허·영업비밀",
  "back": "Copyright(표현 보호) · Trademark(상호·로고, 갱신 시 무기한) · Patent(발명, 출원일부터 ★20년★) · Trade Secret(비밀 유지 노력 시 보호, 등록 없음).",
  "tip": "알고리즘·소스 공개 없이 보호하려면 영업비밀(NDA). 특허는 공개가 대가."
 },
 {
  "s": "s1",
  "g": "법규",
  "front": "수사 유형별 입증 기준",
  "key": "형사=합리적 의심 없음",
  "back": "Criminal = ★beyond a reasonable doubt★ · Civil = preponderance of the evidence(증거의 우세) · Administrative = 내부 운영 · Regulatory = 규제기관 기준.",
  "tip": "민사가 형사보다 입증 기준이 낮다."
 },
 {
  "s": "s1",
  "g": "법규",
  "front": "GDPR 핵심 수치",
  "key": "72시간·4%",
  "back": "개인정보 침해 인지 후 ★72시간 이내★ 감독기관 통지(지연 시 사유). 과징금 최대 €2,000만 또는 전 세계 연매출 ★4%★ 중 큰 금액.",
  "tip": "정보주체 통지는 '고위험'일 때 지체 없이 — 72시간은 감독기관 기준."
 },
 {
  "s": "s1",
  "g": "위험",
  "front": "정량적 위험 공식",
  "key": "ALE = SLE × ARO",
  "back": "SLE = AV(자산가치) × EF(노출계수). ALE = SLE × ARO(연간 발생률). 통제 가치 = (도입 전 ALE − 도입 후 ALE) − 통제 연간비용.",
  "tip": "ARO 가 0.1 이면 10년에 1번. 통제비용이 ALE 감소분보다 크면 도입하지 않는다."
 },
 {
  "s": "s1",
  "g": "위험",
  "front": "위험 대응 4전략",
  "key": "회피·전가·완화·수용",
  "back": "Avoid(활동 중단) · Transfer/Share(보험·아웃소싱) · Mitigate/Reduce(통제 적용) · Accept(경영진 승인 하 수용). 잔여위험 = 총위험 − 통제 효과.",
  "tip": "★Reject/Ignore(무시)★ 는 적법한 대응이 아니다. 전가해도 법적 책임은 남는다."
 },
 {
  "s": "s1",
  "g": "위험",
  "front": "통제 유형",
  "key": "예방·탐지·교정·억제·복구·보상·지시",
  "back": "기능: Preventive · Detective · Corrective · Deterrent · Recovery · Compensating · Directive. 범주: Administrative(관리) · Technical/Logical(기술) · Physical(물리).",
  "tip": "보상(Compensating) 통제 = 주 통제를 못 쓸 때 대체. 경고 표지판 = 억제(Deterrent)."
 },
 {
  "s": "s1",
  "g": "위험",
  "front": "NIST RMF (SP 800-37 Rev.2)",
  "key": "Prepare→…→Monitor 7단계",
  "back": "Prepare → Categorize → Select → Implement → Assess → Authorize → Monitor. 시스템 보안범주는 FIPS 199, 통제 목록은 SP 800-53.",
  "tip": "Rev.2 에서 ★Prepare★ 단계가 추가되어 7단계."
 },
 {
  "s": "s1",
  "g": "위험",
  "front": "위협 모델링 STRIDE",
  "key": "MS 위협 분류 6",
  "back": "Spoofing(인증) · Tampering(무결성) · Repudiation(부인방지) · Information disclosure(기밀성) · Denial of service(가용성) · Elevation of privilege(인가).",
  "tip": "PASTA = 7단계 위험 중심, DREAD = 위험 등급화, VAST = 대규모 애자일."
 },
 {
  "s": "s1",
  "g": "BCP",
  "front": "BIA 시간 지표",
  "key": "MTD ≥ RTO + WRT",
  "back": "MTD/MAD = 업무 중단 허용 최대 시간. RTO = 시스템 복구 목표 시간. WRT = 복구 후 데이터·업무 검증 시간. RPO = 허용 가능한 ★데이터 손실 시점★.",
  "tip": "RPO 가 작을수록 백업·복제 빈도↑ (비용↑)."
 },
 {
  "s": "s1",
  "g": "BCP",
  "front": "NIST SP 800-34 비상계획 7단계",
  "key": "정책→BIA→예방→전략→계획→시험→유지",
  "back": "① 비상계획 정책 ② BIA ③ 예방 통제 식별 ④ 복구 전략 수립 ⑤ 비상계획 작성 ⑥ 시험·훈련·연습 ⑦ 계획 유지보수.",
  "tip": "BCP 는 ★경영진 지원·승인★ 이 첫 성공 요건."
 },
 {
  "s": "s1",
  "g": "인적보안",
  "front": "직무 분리·순환·의무휴가",
  "key": "부정 예방·탐지",
  "back": "Separation of Duties = 한 사람이 전 과정을 못 하게(예방). Job Rotation·Mandatory Vacation = 부정 ★탐지★ 및 공모 억제. Least Privilege·Need to know 와 함께 적용.",
  "tip": "공모(collusion)는 SoD 의 한계 — 순환·감사로 보완."
 },
 {
  "s": "s2",
  "g": "분류",
  "front": "정부 기밀 등급",
  "key": "TS·S·C·U",
  "back": "Top Secret(★exceptionally grave damage★) · Secret(serious damage) · Confidential(damage) · Unclassified. 등급은 ★공개 시 피해 정도★로 결정.",
  "tip": "등급 결정 기준은 '가치·민감도·피해' — 생성 비용이 아니다."
 },
 {
  "s": "s2",
  "g": "분류",
  "front": "민간 분류 예",
  "key": "Confidential·Private·Sensitive·Public",
  "back": "기업은 보통 Confidential/Proprietary(최고) · Private(개인정보·내부) · Sensitive · Public 등 3~4단계. 단계 명칭은 조직마다 다르다.",
  "tip": "분류 단계가 많을수록 관리 비용↑ — 필요 최소 단계로."
 },
 {
  "s": "s2",
  "g": "분류",
  "front": "분류 책임자",
  "key": "Data Owner",
  "back": "자산 분류·접근 승인·보호 수준 결정은 ★데이터 소유자(Owner)★ 책임. 관리자(Custodian)는 분류에 따라 백업·보호를 ★수행★.",
  "tip": "소유자는 보통 해당 업무의 고위 관리자."
 },
 {
  "s": "s2",
  "g": "분류",
  "front": "자산 인벤토리",
  "key": "분류의 출발점",
  "back": "보호하려면 먼저 무엇이 있는지 알아야 한다 — 하드웨어·소프트웨어·데이터 자산 목록(인벤토리)과 소유자 지정이 분류·취급의 전제(2.1·2.3).",
  "tip": "인벤토리 → 소유자 지정 → 분류 → 취급 요구 → 통제."
 },
 {
  "s": "s2",
  "g": "역할",
  "front": "Controller vs Processor",
  "key": "목적 결정 vs 대리 처리",
  "back": "Data Controller = 처리 ★목적·수단 결정★. Data Processor = 컨트롤러를 대신해 처리. Data Subject = 정보주체. (GDPR 용어)",
  "tip": "클라우드 사업자는 보통 Processor — 책임은 Controller 에 남는다."
 },
 {
  "s": "s2",
  "g": "역할",
  "front": "Data Custodian",
  "key": "일상 보호 수행",
  "back": "소유자가 정한 정책에 따라 백업·복구·접근권한 설정·무결성 확인 등 ★기술적 운영★을 수행하는 역할(주로 IT).",
  "tip": "Custodian 은 분류를 결정하지 않는다."
 },
 {
  "s": "s2",
  "g": "수명주기",
  "front": "NIST SP 800-88 매체 소거",
  "key": "Clear·Purge·Destroy",
  "back": "Clear = 일반 도구로 덮어쓰기(키보드 수준 복구 방지) · Purge = 실험실 수준 복구 방지(디가우징·암호 소거·블록 소거) · Destroy = 물리 파괴(분쇄·소각·용해).",
  "tip": "SSD 는 디가우징 ★무효★ — 암호 소거·제조사 sanitize·물리 파괴."
 },
 {
  "s": "s2",
  "g": "수명주기",
  "front": "데이터 잔존(Remanence)",
  "key": "지워도 남는 흔적",
  "back": "삭제·포맷 후에도 매체에 남는 잔여 데이터. 삭제(delete)는 포인터만 제거. SSD 는 웨어레벨링·오버프로비저닝 때문에 덮어쓰기로 완전 제거가 어렵다.",
  "tip": "삭제·포맷은 소거(sanitization)가 아니다."
 },
 {
  "s": "s2",
  "g": "수명주기",
  "front": "EOL vs EOS",
  "key": "판매 종료 vs 지원 종료",
  "back": "End-of-Life = 제조사가 판매·생산 중단. End-of-Support/End-of-Service = 패치·지원 종료 → ★보안 위험 급증★, 교체·격리 계획 필요(2.5).",
  "tip": "EOS 이후 자산은 보상 통제(격리·모니터링)로 위험 관리."
 },
 {
  "s": "s2",
  "g": "보호",
  "front": "데이터 3상태",
  "key": "저장·전송·사용",
  "back": "At rest(디스크 암호화·접근통제) · In transit(TLS·IPsec·VPN) · In use(메모리, TEE·기밀 컴퓨팅·마스킹).",
  "tip": "사용 중 데이터는 암호화가 가장 어려운 상태."
 },
 {
  "s": "s2",
  "g": "보호",
  "front": "Scoping vs Tailoring",
  "key": "범위 선택 vs 조정",
  "back": "Scoping = 기준 통제 중 ★적용 대상만 선택★. Tailoring = 선택한 통제를 조직 환경에 맞게 ★수정·조정★(보상 통제·파라미터 값 지정 포함).",
  "tip": "Baseline → Scoping → Tailoring 순."
 },
 {
  "s": "s3",
  "g": "보안 모델",
  "front": "Bell-LaPadula (BLP)",
  "key": "기밀성 · No Read Up / No Write Down",
  "back": "군사용 ★기밀성★ 모델. Simple Security Property = No Read Up, ★-Property(Star) = No Write Down, Strong Star = 자기 레벨에서만 읽기·쓰기.",
  "tip": "무결성은 다루지 않는다 — 무결성은 Biba."
 },
 {
  "s": "s3",
  "g": "보안 모델",
  "front": "Biba",
  "key": "무결성 · No Read Down / No Write Up",
  "back": "★무결성★ 모델. Simple Integrity = No Read Down(낮은 무결성 읽지 않음), Star Integrity = No Write Up(높은 무결성 오염 금지), Invocation Property = 상위 주체 호출 금지.",
  "tip": "BLP와 방향이 정반대 — 'Biba는 거꾸로'로 외운다."
 },
 {
  "s": "s3",
  "g": "보안 모델",
  "front": "Clark-Wilson",
  "key": "무결성 · 접근 3요소(주체-프로그램-객체)",
  "back": "상업용 ★무결성★ 모델. 사용자는 TP(Transformation Procedure)를 통해서만 CDI(Constrained Data Item)를 변경, IVP가 무결성 검증. ★직무분리·Well-formed transaction★.",
  "tip": "주체가 객체에 직접 접근하지 않는다 — Access Triple."
 },
 {
  "s": "s3",
  "g": "보안 모델",
  "front": "Brewer-Nash (Chinese Wall)",
  "key": "이해충돌 방지 · 동적 접근통제",
  "back": "사용자의 ★과거 접근 이력★에 따라 동적으로 권한이 바뀌는 모델. 경쟁사 A의 데이터를 본 컨설턴트는 같은 이해충돌 클래스의 B 데이터 접근 차단.",
  "tip": "금융 컨설팅·법률 회사 이해충돌 문제의 정답 모델."
 },
 {
  "s": "s3",
  "g": "평가",
  "front": "Common Criteria (ISO/IEC 15408)",
  "key": "PP · ST · TOE · EAL1~7",
  "back": "제품 보안 평가 국제 표준. PP(Protection Profile)=사용자 요구, ST(Security Target)=벤더 주장, TOE=평가 대상, ★EAL1(기능 시험)~EAL7(정형 검증 설계·시험)★.",
  "tip": "EAL은 ★보증(assurance) 수준★이지 기능의 강도가 아니다."
 },
 {
  "s": "s3",
  "g": "아키텍처",
  "front": "Reference Monitor / TCB",
  "key": "완전중재 · 변조방지 · 검증가능",
  "back": "Reference Monitor = 모든 주체-객체 접근을 중재하는 추상 개념. 구현체가 Security Kernel. TCB = 보안 정책을 강제하는 HW·FW·SW 전체. 요건: ★완전 중재·변조 방지·검증 가능할 만큼 작음★.",
  "tip": "Security Perimeter = TCB와 나머지 시스템의 경계."
 },
 {
  "s": "s3",
  "g": "아키텍처",
  "front": "보안 설계 원칙 (3.1)",
  "key": "Least privilege · Defense in depth · Secure defaults · Fail securely · SoD · KISS · Zero Trust · Privacy by Design · Trust but verify · Shared responsibility",
  "back": "2024 아웃라인 3.1에 명시된 안전 설계 원칙 목록. ★Fail securely = 장애 시 접근 거부(fail-closed)★ 가 기본.",
  "tip": "Fail-safe(사람 안전 우선, 문 개방)와 Fail-secure(자산 보호, 잠김)를 구분."
 },
 {
  "s": "s3",
  "g": "암호학",
  "front": "대칭 vs 비대칭",
  "key": "속도 vs 키 배포",
  "back": "대칭(AES 등)은 빠르고 대량 암호화에 적합하나 키 배포·확장성 문제(n(n-1)/2 키). 비대칭(RSA·ECC)은 키 배포·부인방지·전자서명 제공, 느림(사용자당 2키 → 2n). 실무는 ★하이브리드★.",
  "tip": "100명 대칭 키 수 = 100×99/2 = 4,950."
 },
 {
  "s": "s3",
  "g": "암호학",
  "front": "해시 함수",
  "key": "무결성 · 일방향 · 충돌 저항",
  "back": "임의 길이 입력 → 고정 길이 출력. 일방향성·제2역상 저항·충돌 저항. SHA-2/SHA-3 권장, MD5·SHA-1은 충돌 공격으로 폐기 대상.",
  "tip": "해시만으로는 인증 불가 — 키를 넣은 HMAC 또는 전자서명 필요."
 },
 {
  "s": "s3",
  "g": "암호학",
  "front": "전자서명",
  "key": "송신자 개인키로 서명 → 공개키로 검증",
  "back": "메시지 해시를 ★송신자 개인키★로 서명. 제공: 무결성·인증·★부인방지★. 기밀성은 제공하지 않는다. 표준: DSA·RSA·ECDSA(FIPS 186), PQC ML-DSA(FIPS 204).",
  "tip": "기밀성까지 원하면 수신자 공개키로 별도 암호화."
 },
 {
  "s": "s3",
  "g": "암호학",
  "front": "PKI 구성",
  "key": "CA · RA · CRL · OCSP · X.509",
  "back": "CA=인증서 발급·서명, RA=신원 확인(발급 권한 없음), CRL=폐기 목록(주기적), ★OCSP=실시간 폐기 조회★, 인증서 형식 X.509 v3.",
  "tip": "OCSP stapling — 서버가 OCSP 응답을 붙여 보내 클라이언트 조회 부담 감소."
 },
 {
  "s": "s3",
  "g": "암호학",
  "front": "NIST PQC 표준 (2024-08)",
  "key": "FIPS 203 ML-KEM · 204 ML-DSA · 205 SLH-DSA",
  "back": "양자내성암호 최초 표준. ★FIPS 203 ML-KEM(CRYSTALS-Kyber, 키 캡슐화)★, FIPS 204 ML-DSA(CRYSTALS-Dilithium, 서명), FIPS 205 SLH-DSA(SPHINCS+, 해시 기반 서명).",
  "tip": "Shor 알고리즘은 RSA·ECC를 위협, Grover는 대칭키 강도를 절반으로 → AES-256 권장."
 },
 {
  "s": "s3",
  "g": "물리 보안",
  "front": "CPTED",
  "key": "자연 감시 · 자연 접근통제 · 영역성 강화",
  "back": "환경 설계를 통한 범죄 예방. ★자연적 감시·자연적 접근통제·영역성(territorial reinforcement)★ + 유지관리.",
  "tip": "조경·조명·동선 설계로 억제 — 기술 통제가 아니다."
 },
 {
  "s": "s4",
  "g": "모델",
  "front": "OSI 7계층",
  "key": "Physical·Data Link·Network·Transport·Session·Presentation·Application",
  "back": "1 물리(비트) · 2 데이터링크(프레임, MAC) · 3 네트워크(패킷, IP) · 4 전송(세그먼트, TCP/UDP) · 5 세션 · 6 표현(암호화·인코딩) · 7 응용.",
  "tip": "암기: 'Please Do Not Throw Sausage Pizza Away'(1→7)."
 },
 {
  "s": "s4",
  "g": "모델",
  "front": "TCP/IP 4계층",
  "key": "Link · Internet · Transport · Application",
  "back": "OSI 1·2 → 링크(Network Access), 3 → 인터넷, 4 → 전송, 5·6·7 → 응용.",
  "tip": "ARP는 L2/L3 경계에서 동작 — 시험에서는 보통 L2로 본다."
 },
 {
  "s": "s4",
  "g": "프로토콜",
  "front": "TCP 3-way handshake",
  "key": "SYN → SYN/ACK → ACK",
  "back": "연결 지향·신뢰성 전송. 종료는 FIN 4-way. ★SYN flood★는 half-open 연결로 백로그를 고갈시킨다.",
  "tip": "방어: SYN cookies·백로그 확대·타임아웃 단축."
 },
 {
  "s": "s4",
  "g": "프로토콜",
  "front": "주요 포트",
  "key": "22 SSH · 25 SMTP · 53 DNS · 443 HTTPS · 3389 RDP",
  "back": "20/21 FTP, 23 Telnet, 49 TACACS+, 88 Kerberos, 110 POP3, 143 IMAP, 161/162 SNMP, 389 LDAP, 636 LDAPS, 1812/1813 RADIUS.",
  "tip": "평문 프로토콜(Telnet·FTP·HTTP)은 암호화 대체제로 교체."
 },
 {
  "s": "s4",
  "g": "보안 장비",
  "front": "방화벽 세대",
  "key": "패킷 필터 → 상태 기반 → 프록시 → NGFW",
  "back": "패킷 필터(L3/4, 상태 없음) · Stateful(세션 테이블) · Application proxy(L7, 연결 중계) · ★NGFW(애플리케이션 인식+IPS+사용자 식별)★ · WAF(웹 L7).",
  "tip": "프록시 방화벽은 내부·외부 연결을 분리해 직접 연결을 끊는다."
 },
 {
  "s": "s4",
  "g": "보안 장비",
  "front": "IDS vs IPS",
  "key": "탐지·경보 vs 인라인 차단",
  "back": "IDS는 out-of-band로 복사본을 분석해 경보, IPS는 ★인라인★으로 차단. 탐지 방식: 시그니처(알려진 공격)·이상(anomaly, 기준선)·행위 기반.",
  "tip": "IPS 오탐(false positive)은 정상 트래픽 차단 → 가용성 저하."
 },
 {
  "s": "s4",
  "g": "보안 장비",
  "front": "네트워크 분할",
  "key": "VLAN · DMZ · 마이크로세그멘테이션",
  "back": "DMZ(screened subnet)에 외부 공개 서버 배치. VLAN은 L2 논리 분리, 마이크로세그멘테이션은 워크로드 단위 정책(Zero Trust).",
  "tip": "VLAN hopping(스위치 스푸핑·더블 태깅) 대비 미사용 포트 비활성화·네이티브 VLAN 변경."
 },
 {
  "s": "s4",
  "g": "원격 접속",
  "front": "IPsec",
  "key": "AH · ESP · IKE · 전송/터널 모드",
  "back": "AH=무결성·출처 인증(암호화 없음), ★ESP=기밀성+무결성★, IKE=SA·키 협상. 전송 모드는 페이로드만, 터널 모드는 원본 IP 헤더까지 캡슐화(게이트웨이 간 VPN).",
  "tip": "AH는 IP 헤더도 인증하므로 NAT와 충돌."
 },
 {
  "s": "s4",
  "g": "원격 접속",
  "front": "TLS 1.3",
  "key": "1-RTT · PFS 필수 · 취약 암호 제거",
  "back": "RSA 키 전송 제거 → ★(EC)DHE로 전방향 안전성(PFS)★ 필수, AEAD(GCM·ChaCha20-Poly1305)만 허용, 핸드셰이크 1-RTT(0-RTT 옵션은 재전송 위험).",
  "tip": "SSL 2.0/3.0·TLS 1.0/1.1은 폐기."
 },
 {
  "s": "s4",
  "g": "무선",
  "front": "Wi-Fi 보안 진화",
  "key": "WEP → WPA(TKIP) → WPA2(AES-CCMP) → WPA3(SAE)",
  "back": "WEP는 RC4·24비트 IV 재사용으로 붕괴. WPA2-Personal은 PSK 오프라인 사전공격에 취약, ★WPA3-Personal은 SAE(Dragonfly)★로 오프라인 사전공격 저항·PFS 제공.",
  "tip": "Enterprise 모드 = 802.1X + RADIUS + EAP."
 },
 {
  "s": "s4",
  "g": "무선",
  "front": "802.1X / EAP",
  "key": "Supplicant · Authenticator · Authentication server",
  "back": "포트 기반 NAC. 단말(Supplicant) → 스위치·AP(Authenticator) → RADIUS 서버(AS). EAP-TLS(양방향 인증서, 가장 강함), PEAP·EAP-TTLS(서버 인증서+터널).",
  "tip": "EAP-TLS는 클라이언트 인증서까지 요구."
 },
 {
  "s": "s4",
  "g": "공격",
  "front": "DNS 공격과 DNSSEC",
  "key": "캐시 포이즈닝 · DNSSEC=출처·무결성",
  "back": "DNS 캐시 포이즈닝(Kaminsky)은 위조 응답 주입. ★DNSSEC은 서명으로 출처 인증·무결성★ 제공, 기밀성은 제공하지 않는다(DoH/DoT가 기밀성).",
  "tip": "DNS 증폭 DDoS는 open resolver 악용."
 },
 {
  "s": "s4",
  "g": "기술",
  "front": "융합·SDN",
  "key": "제어평면/데이터평면 분리 · VoIP · iSCSI · FCoE",
  "back": "SDN은 컨트롤러(제어평면)가 데이터평면을 중앙 관리. 융합 프로토콜: FCoE·iSCSI(저장장치 over IP)·VoIP(SIP·RTP→SRTP).",
  "tip": "SDN 컨트롤러는 단일 장애·공격 지점 → 강력한 보호 필요."
 },
 {
  "s": "s5",
  "g": "인증",
  "front": "인증 요소 3유형(+)",
  "key": "Know·Have·Are (+Where·Do)",
  "back": "Type 1 지식(something you know: 비밀번호·PIN) · Type 2 소유(something you have: 토큰·스마트카드) · Type 3 생체(something you are: 지문·홍채). 보조로 위치(somewhere you are)·행동(something you do).",
  "tip": "비밀번호+PIN 은 ★같은 유형 2개★ → MFA 아님(2단계일 뿐)."
 },
 {
  "s": "s5",
  "g": "인증",
  "front": "FRR / FAR / CER",
  "key": "Type I·Type II 오류·교차점",
  "back": "FRR(False Rejection Rate) = Type I 오류: 정당 사용자 거부. FAR(False Acceptance Rate) = Type II 오류: 부정 사용자 수락. 민감도↑ → FRR↑·FAR↓. 두 곡선의 교차점 CER(=EER)이 ★낮을수록 정확한 생체 장치★.",
  "tip": "보안상 더 위험한 것은 FAR(Type II). 장치 비교 기준은 CER."
 },
 {
  "s": "s5",
  "g": "인증",
  "front": "OTP — HOTP vs TOTP",
  "key": "카운터 vs 시간",
  "back": "HOTP(RFC 4226) = HMAC + 이벤트 카운터. TOTP(RFC 6238) = HMAC + 시간 단계(보통 30초). 동기식 토큰은 서버와 카운터/시계를 공유.",
  "tip": "비동기식 토큰 = 챌린지-응답 방식."
 },
 {
  "s": "s5",
  "g": "인증",
  "front": "Kerberos",
  "key": "KDC = AS + TGS · 티켓",
  "back": "대칭키 기반 SSO 프로토콜. 클라이언트가 AS에서 ★TGT★ 획득 → TGS에 TGT 제시해 서비스 티켓(ST) 획득 → 서비스에 ST 제시. 타임스탬프로 재전송 방지.",
  "tip": "약점: KDC 단일 장애점·★시간 동기화 필수★(기본 허용 오차 5분)·KDC에 모든 비밀키 집중."
 },
 {
  "s": "s5",
  "g": "인증",
  "front": "세션 관리",
  "key": "타임아웃·재인증·세션 고정 방지",
  "back": "인증 후 세션 토큰을 안전하게 생성·보호·만료. 유휴 타임아웃·절대 타임아웃, 로그인 시 세션 ID 재발급(세션 고정 방지), 로그아웃 시 서버 측 무효화.",
  "tip": "세션 ID를 URL에 넣으면 Referer·로그로 노출."
 },
 {
  "s": "s5",
  "g": "페더레이션",
  "front": "SAML 2.0",
  "key": "XML 어설션 · IdP→SP",
  "back": "XML 기반 인증·인가 어설션 교환 표준. 주체(Principal) · IdP(어설션 발급) · SP(어설션 소비). 주로 웹 브라우저 SSO에 사용.",
  "tip": "SAML = ★인증 정보 전달★, OAuth = ★권한 위임★ — 구분 필수."
 },
 {
  "s": "s5",
  "g": "페더레이션",
  "front": "OAuth 2.0",
  "key": "권한 위임(authorization)",
  "back": "자원 소유자가 비밀번호를 주지 않고 제3자 앱에 제한된 접근(액세스 토큰·scope)을 위임하는 ★인가 프레임워크★(RFC 6749). 역할: Resource Owner·Client·Authorization Server·Resource Server.",
  "tip": "OAuth 자체는 인증 프로토콜이 아니다."
 },
 {
  "s": "s5",
  "g": "페더레이션",
  "front": "OpenID Connect",
  "key": "OAuth 2.0 위 인증 계층",
  "back": "OAuth 2.0 위에 ★ID 토큰(JWT)★을 추가해 사용자 인증을 제공하는 계층. 소셜 로그인 등에 사용.",
  "tip": "OIDC = OAuth(인가) + ID Token(인증)."
 },
 {
  "s": "s5",
  "g": "페더레이션",
  "front": "IDaaS / 하이브리드 ID",
  "key": "클라우드 ID 서비스",
  "back": "IDaaS는 클라우드에서 SSO·MFA·프로비저닝을 서비스로 제공. 온프레미스 디렉터리와 클라우드 ID를 동기화·연동하는 형태가 하이브리드.",
  "tip": "신원 원천(source of truth)이 어디인지 먼저 정한다."
 },
 {
  "s": "s5",
  "g": "접근통제 모델",
  "front": "DAC / MAC",
  "key": "소유자 재량 vs 레이블",
  "back": "DAC: 객체 ★소유자★가 ACL로 권한 부여(유연·전파 위험). MAC: 시스템이 주체 허가(clearance)와 객체 레이블(classification) 비교로 강제 — 사용자가 변경 불가.",
  "tip": "MAC = 군·정부 기밀 환경, 비재량적."
 },
 {
  "s": "s5",
  "g": "접근통제 모델",
  "front": "RBAC / ABAC / Rule-based",
  "key": "역할·속성·규칙",
  "back": "RBAC: 직무 역할에 권한 할당, 사용자는 역할에 배정. ABAC: 주체·객체·환경 ★속성★과 정책으로 판단(세밀·문맥 인식). Rule-based: 모든 주체에 일괄 적용되는 전역 규칙(예: 방화벽 ACL, 시간대 제한).",
  "tip": "RBAC의 역할 폭증(role explosion)이 ABAC 도입 동기."
 },
 {
  "s": "s5",
  "g": "계정 수명주기",
  "front": "프로비저닝 수명주기",
  "key": "Joiner·Mover·Leaver",
  "back": "입사(생성·최소권한 부여) → 이동(권한 재검토·★이전 권한 회수★) → 퇴사(즉시 비활성화·회수). 주기적 접근 검토(access review)로 권한 누적(privilege creep) 방지.",
  "tip": "직무 이동 시 이전 권한 미회수 = privilege creep의 주원인."
 },
 {
  "s": "s5",
  "g": "계정 수명주기",
  "front": "PAM / JIT",
  "key": "특권 접근 관리 · 적시 권한",
  "back": "특권 계정을 금고(vault)에 보관, 체크아웃·세션 녹화·자동 비밀번호 교체. JIT(Just-in-Time)는 필요한 시점·기간에만 특권 부여 후 자동 회수 → 상시 특권(standing privilege) 제거.",
  "tip": "공유 관리자 계정은 책임추적성(accountability)을 깨뜨린다."
 },
 {
  "s": "s6",
  "g": "평가 전략",
  "front": "평가 주체 3유형",
  "key": "내부·외부·제3자",
  "back": "내부(internal): 자체 감사 조직. 외부(external): 조직이 고용한 외부 감사인(2자 — 예: 고객이 공급사를 감사). 제3자(third-party): 독립 기관이 규제·인증 목적으로 수행.",
  "tip": "독립성: 제3자 > 외부 > 내부. 비용·유연성은 그 반대 경향."
 },
 {
  "s": "s6",
  "g": "평가 전략",
  "front": "KPI / KRI",
  "key": "성과 vs 위험 지표",
  "back": "KPI(Key Performance Indicator): 목표 달성도(예: 패치 적용률). KRI(Key Risk Indicator): 위험 증가의 선행 신호(예: 미패치 치명 취약점 수 추세).",
  "tip": "KRI는 ★선행(leading)★ 지표로 임계치 초과 시 조치."
 },
 {
  "s": "s6",
  "g": "평가 전략",
  "front": "평가 범위·규칙(RoE)",
  "key": "범위·승인·연락체계",
  "back": "평가 전 목표·범위(scope)·시간·허용 기법·금지 행위·비상 연락처를 문서화하고 ★경영진 서면 승인★을 받는다.",
  "tip": "승인 없는 침투 테스트 = 불법 침입."
 },
 {
  "s": "s6",
  "g": "취약점·침투",
  "front": "취약점 스캔 vs 침투 테스트",
  "key": "식별 vs 악용",
  "back": "취약점 스캔: 자동화 도구로 알려진 취약점 식별(넓고 얕게, 오탐 존재). 침투 테스트: 실제 악용으로 영향 입증(좁고 깊게, 수작업 비중 큼).",
  "tip": "스캔 결과 = 가능성, 침투 결과 = 실증."
 },
 {
  "s": "s6",
  "g": "취약점·침투",
  "front": "인증 스캔 vs 비인증 스캔",
  "key": "credentialed scan",
  "back": "인증(credentialed) 스캔은 계정으로 로그인해 패치·설정을 내부에서 확인 → 더 정확, 오탐↓. 비인증 스캔은 외부 공격자 시야.",
  "tip": "정확한 패치 현황 파악에는 인증 스캔."
 },
 {
  "s": "s6",
  "g": "취약점·침투",
  "front": "지식 수준별 테스트",
  "key": "Black·Gray·White box",
  "back": "Black box(zero knowledge): 사전 정보 없음 — 외부 공격자 모사. Gray box(partial): 일부 정보. White box(full knowledge): 소스·구성 전체 제공 — 가장 철저.",
  "tip": "White box는 시간 대비 커버리지가 가장 높다."
 },
 {
  "s": "s6",
  "g": "취약점·침투",
  "front": "침투 테스트 단계(NIST SP 800-115)",
  "key": "계획·발견·공격·보고",
  "back": "NIST SP 800-115: Planning → Discovery → Attack → Reporting. 공격 중 새 정보가 나오면 Discovery로 되돌아간다.",
  "tip": "보고 단계에 개선 권고 포함."
 },
 {
  "s": "s6",
  "g": "SW 테스트",
  "front": "SAST / DAST / IAST",
  "key": "정적·동적·대화형",
  "back": "SAST: 소스·바이너리를 실행 없이 분석(개발 초기, 화이트박스). DAST: 실행 중 앱을 외부에서 공격(블랙박스, 런타임 문제). IAST: 런타임 계측으로 둘을 결합.",
  "tip": "SAST는 오탐 많고 런타임 설정 문제 못 봄."
 },
 {
  "s": "s6",
  "g": "SW 테스트",
  "front": "퍼징(Fuzzing)",
  "key": "Mutation vs Generation",
  "back": "비정상·무작위 입력으로 크래시·예외 유발. Mutation(dumb): 기존 입력 변형. Generation(intelligent): 입력 형식 모델로 새 입력 생성.",
  "tip": "입력 검증·메모리 오류 발견에 강함."
 },
 {
  "s": "s6",
  "g": "SW 테스트",
  "front": "Misuse case / 코드 커버리지",
  "key": "오용 시나리오·검증 범위",
  "back": "Misuse(abuse) case: 공격자 관점 사용 사례로 보안 요구 검증. 코드 커버리지: 테스트로 실행된 코드 비율(문장·분기·조건·함수·루프 등).",
  "tip": "커버리지 100% ≠ 취약점 0."
 },
 {
  "s": "s6",
  "g": "감사·보고",
  "front": "SOC 1 / 2 / 3",
  "key": "재무통제·TSC·공개용",
  "back": "SOC 1: 재무보고 관련 내부통제(ICFR). SOC 2: 보안·가용성·처리 무결성·기밀성·프라이버시(Trust Services Criteria) — 상세, 제한 배포. SOC 3: SOC 2 요약 공개용(general use).",
  "tip": "보안 통제 평가 = SOC 2 Type II가 표준 답."
 },
 {
  "s": "s6",
  "g": "감사·보고",
  "front": "Type I / Type II",
  "key": "시점 설계 vs 기간 운영",
  "back": "Type I: 특정 ★시점★ 통제 설계의 적정성. Type II: 일정 ★기간★(보통 6~12개월) 통제 운영 효과성까지 테스트.",
  "tip": "운영 효과성 확인 = Type II."
 },
 {
  "s": "s7",
  "g": "조사",
  "front": "증거 보관 연속성 (Chain of Custody)",
  "key": "누가·언제·어디서·무엇을",
  "back": "증거의 수집부터 법정 제출까지 ★누가, 언제, 어디서, 왜, 어떻게★ 취급했는지 끊김 없이 기록하는 절차. 한 번이라도 공백이 생기면 증거 능력(admissibility)이 다툼 대상이 된다.",
  "tip": "봉인·라벨·서명된 인수인계 기록이 핵심. '해시값만 있으면 된다'는 오답."
 },
 {
  "s": "s7",
  "g": "조사",
  "front": "증거 허용 요건",
  "key": "관련성·신뢰성·적법성",
  "back": "법정 증거가 되려면 ★관련성(relevant)·중요성(material)·적격성(competent, 적법하게 수집)★을 갖춰야 한다. 또한 진정성(authentic)·완전성·신뢰성이 요구된다.",
  "tip": "적법 절차 없이 수집한 증거는 아무리 결정적이어도 배제될 수 있다."
 },
 {
  "s": "s7",
  "g": "조사",
  "front": "휘발성 순서 (Order of Volatility)",
  "key": "RFC 3227 — 휘발성 높은 것부터",
  "back": "RFC 3227: 레지스터·캐시 → 라우팅 테이블·ARP·프로세스 테이블·커널 통계·메모리 → 임시 파일 시스템 → 디스크 → 원격 로그·모니터링 데이터 → 물리 구성·네트워크 토폴로지 → 보관 매체 순으로 수집.",
  "tip": "메모리를 먼저 덤프하기 전에 전원을 끄면 RAM 증거가 사라진다."
 },
 {
  "s": "s7",
  "g": "조사",
  "front": "조사 유형",
  "key": "행정·형사·민사·규제",
  "back": "행정(administrative, 내부 정책 위반) · 형사(criminal, ★합리적 의심 없는 증명★) · 민사(civil, ★증거의 우월★) · 규제(regulatory, 정부기관·업계 기준) · 업계 표준 조사.",
  "tip": "형사 조사의 입증 기준이 가장 높다."
 },
 {
  "s": "s7",
  "g": "로깅",
  "front": "SIEM",
  "key": "로그 수집·상관분석·경보",
  "back": "Security Information and Event Management — 이기종 로그를 ★중앙 수집·정규화·상관분석★하여 경보·대시보드·보존을 제공. 시간 동기화(NTP)가 상관분석의 전제.",
  "tip": "SIEM은 탐지·분석, SOAR는 플레이북 기반 대응 자동화."
 },
 {
  "s": "s7",
  "g": "로깅",
  "front": "SOAR",
  "key": "오케스트레이션·자동 대응",
  "back": "Security Orchestration, Automation and Response — 플레이북으로 경보 분류·격리·티켓 생성 등 대응 절차를 ★자동화·조율★.",
  "tip": "탐지 자체보다 대응 속도와 일관성 향상이 목적."
 },
 {
  "s": "s7",
  "g": "로깅",
  "front": "UEBA",
  "key": "사용자·개체 행위 기준선",
  "back": "User and Entity Behavior Analytics — 사용자·장치의 정상 행위 기준선(baseline)을 학습하고 이탈을 탐지. 내부자 위협·계정 탈취 탐지에 유용.",
  "tip": "서명(signature) 기반이 아니라 행위·이상 기반."
 },
 {
  "s": "s7",
  "g": "운영",
  "front": "변경 관리 (Change Management)",
  "key": "요청→검토→승인→테스트→구현→문서화",
  "back": "모든 변경은 요청·영향 분석·CAB 승인·테스트·일정 수립·구현·문서화·사후 검토를 거친다. 무단 변경은 가용성·무결성 사고의 주된 원인.",
  "tip": "긴급 변경도 사후 승인·문서화는 생략하지 않는다."
 },
 {
  "s": "s7",
  "g": "운영",
  "front": "구성 관리 기준선 (Baseline)",
  "key": "승인된 표준 구성",
  "back": "시스템의 승인된 보안 구성 상태. 이미징·IaC로 배포하고 정기적으로 ★기준선 대비 편차(drift)★를 점검.",
  "tip": "CIS Benchmark·STIG가 대표적 기준선 출처."
 },
 {
  "s": "s7",
  "g": "운영",
  "front": "직무 순환·강제 휴가",
  "key": "부정 탐지 통제",
  "back": "Job rotation·mandatory vacation은 다른 사람이 업무를 대신하게 해 ★은폐된 부정을 드러내는 탐지 통제★. 직무 분리(SoD)는 예방 통제.",
  "tip": "강제 휴가 = 탐지, 직무 분리 = 예방."
 },
 {
  "s": "s7",
  "g": "사고",
  "front": "ISC2 사고 대응 7단계",
  "key": "탐지→대응→완화→보고→복구→교정→교훈",
  "back": "Detection → Response → Mitigation → Reporting → Recovery → Remediation → Lessons learned. 완화(mitigation)는 ★격리(containment)★가 핵심.",
  "tip": "NIST SP 800-61의 4단계(준비/탐지·분석/격리·근절·복구/사후활동)와 구분."
 },
 {
  "s": "s7",
  "g": "복구",
  "front": "RAID 레벨",
  "key": "0 스트라이핑·1 미러링·5 패리티",
  "back": "RAID 0 스트라이핑(내결함성 없음) · RAID 1 미러링 · RAID 5 분산 패리티(디스크 1개 장애 허용) · RAID 6 이중 패리티(2개) · RAID 10 미러+스트라이프.",
  "tip": "RAID는 가용성 수단이지 ★백업이 아니다★."
 },
 {
  "s": "s7",
  "g": "복구",
  "front": "복구 사이트",
  "key": "Hot·Warm·Cold·Mobile",
  "back": "Hot site: 장비·데이터 준비, 수 시간 내 전환 · Warm: 장비 일부, 데이터 복원 필요 · Cold: 공간·전원만, 가장 저렴·가장 느림 · Mobile·Redundant(미러) site.",
  "tip": "비용 ↑ ⇔ 복구 시간 ↓. 상호 원조 협정은 집행력이 약하다."
 },
 {
  "s": "s7",
  "g": "복구",
  "front": "DR 테스트 유형",
  "key": "체크리스트→탁상→워크스루→시뮬레이션→병행→완전중단",
  "back": "Read-through(checklist) · Structured walk-through(tabletop) · Simulation · Parallel(대체 사이트 가동, 운영 유지) · Full interruption(운영 중단, 위험 최고).",
  "tip": "운영 영향이 없으면서 실제 시스템을 검증하는 최고 수준은 Parallel."
 },
 {
  "s": "s8",
  "g": "SDLC",
  "front": "보안 내재화 SDLC",
  "key": "요구사항 단계부터 보안",
  "back": "보안은 ★요구사항·설계 단계부터★ 반영해야 비용이 가장 적다. 단계: 착수·요구사항 → 설계 → 개발 → 테스트 → 배포 → 운영·유지보수 → 폐기.",
  "tip": "결함 수정 비용은 늦게 발견될수록 커진다."
 },
 {
  "s": "s8",
  "g": "SDLC",
  "front": "CMM / CMMI 성숙도 5단계",
  "key": "초기→반복→정의→관리→최적화",
  "back": "1 Initial · 2 Repeatable(CMMI: Managed) · 3 Defined · 4 Managed(CMMI: Quantitatively Managed) · 5 Optimizing. 정량적 측정은 4단계, 지속적 개선은 5단계.",
  "tip": "SW-CMM 명칭과 CMMI 명칭이 2·4단계에서 다르다."
 },
 {
  "s": "s8",
  "g": "SDLC",
  "front": "OWASP SAMM",
  "key": "SW 보안 보증 성숙도 모델",
  "back": "Software Assurance Maturity Model — 거버넌스·설계·구현·검증·운영 5개 비즈니스 기능별로 보안 실천 성숙도를 평가·개선.",
  "tip": "BSIMM은 실제 조직 관찰 기반 '기술적(descriptive)' 모델, SAMM은 '처방적(prescriptive)' 모델."
 },
 {
  "s": "s8",
  "g": "SDLC",
  "front": "DevSecOps",
  "key": "개발·보안·운영 통합·Shift left",
  "back": "CI/CD 파이프라인에 SAST·SCA·DAST·IaC 스캔 등 보안 검사를 자동화해 ★shift left★. 보안은 모든 구성원의 공동 책임.",
  "tip": "배포 직전 수동 보안 검토만으로는 DevSecOps가 아니다."
 },
 {
  "s": "s8",
  "g": "코딩",
  "front": "SAST vs DAST",
  "key": "정적(소스) vs 동적(실행)",
  "back": "SAST: 실행 없이 소스·바이너리 분석(화이트박스, 개발 초기). DAST: 실행 중 애플리케이션을 외부에서 공격적으로 검사(블랙박스). IAST: 실행 중 내부 계측.",
  "tip": "DAST는 소스 코드가 필요 없다."
 },
 {
  "s": "s8",
  "g": "코딩",
  "front": "입력 검증",
  "key": "서버 측·허용 목록",
  "back": "모든 입력을 ★서버 측에서 허용 목록(allow list)★ 기반으로 검증. 인젝션 방어는 매개변수화 쿼리(prepared statement)가 핵심.",
  "tip": "클라이언트 측 검증은 우회 가능 — 편의 기능일 뿐."
 },
 {
  "s": "s8",
  "g": "코딩",
  "front": "OWASP Top 10 (2021)",
  "key": "A01 접근통제 취약",
  "back": "A01 Broken Access Control · A02 Cryptographic Failures · A03 Injection · A04 Insecure Design · A05 Security Misconfiguration · A06 Vulnerable and Outdated Components · A07 Identification and Authentication Failures · A08 Software and Data Integrity Failures · A09 Security Logging and Monitoring Failures · A10 SSRF.",
  "tip": "2021판에서 XSS는 Injection(A03)에 통합."
 },
 {
  "s": "s8",
  "g": "획득",
  "front": "SBOM",
  "key": "소프트웨어 구성요소 명세",
  "back": "Software Bill of Materials — 소프트웨어에 포함된 구성요소·라이브러리·버전 목록. 신규 취약점 발생 시 영향 범위 파악에 활용. 형식: SPDX, CycloneDX.",
  "tip": "SCA 도구가 SBOM 생성·취약 라이브러리 탐지를 수행."
 },
 {
  "s": "s8",
  "g": "획득",
  "front": "소프트웨어 에스크로",
  "key": "개발사 도산 대비 소스 보관",
  "back": "제3자 에스크로 기관에 소스 코드를 예치해 공급사 파산·지원 중단 시 구매자가 소스를 받을 수 있게 하는 계약.",
  "tip": "COTS 획득 시 공급업체 존속 위험에 대한 통제."
 },
 {
  "s": "s8",
  "g": "DB",
  "front": "ACID",
  "key": "원자성·일관성·고립성·지속성",
  "back": "Atomicity(전부 또는 전무) · Consistency(무결성 규칙 유지) · Isolation(동시 트랜잭션 간 간섭 없음) · Durability(커밋 결과 영구 보존).",
  "tip": "동시성 제어(locking)는 Isolation과 관련."
 },
 {
  "s": "s8",
  "g": "DB",
  "front": "집계·추론 (Aggregation·Inference)",
  "key": "낮은 등급 정보 결합 → 민감정보",
  "back": "집계: 개별적으로는 무해한 정보를 모아 민감정보 생성. 추론: 접근 가능한 정보로 접근 불가 정보를 추측. 대응: 다중인스턴스화(polyinstantiation)·셀 억제·뷰·노이즈 삽입.",
  "tip": "Polyinstantiation은 추론 공격 방어 기법."
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ 정량적 위험 분석 공식",
  "type": "table",
  "head": [
   "항목",
   "공식·의미",
   "예시"
  ],
  "rows": [
   [
    "AV (Asset Value)",
    "자산 가치",
    "서버 $200,000"
   ],
   [
    "EF (Exposure Factor)",
    "사고 1회 손실 비율",
    "화재 시 25%"
   ],
   [
    "SLE",
    "AV × EF",
    "$50,000"
   ],
   [
    "ARO",
    "연간 발생 빈도",
    "5년에 1번 = 0.2"
   ],
   [
    "ALE",
    "SLE × ARO",
    "$10,000/년"
   ],
   [
    "통제 가치",
    "ALE(전) − ALE(후) − 연간 통제비용",
    "양수일 때 도입 정당화"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ BIA 시간·데이터 지표",
  "type": "table",
  "head": [
   "지표",
   "의미",
   "관계"
  ],
  "rows": [
   [
    "MTD / MAD",
    "업무 중단 허용 최대 시간",
    "가장 큰 값"
   ],
   [
    "RTO",
    "시스템·서비스 복구 목표 시간",
    "RTO + WRT ≤ MTD"
   ],
   [
    "WRT",
    "복구 후 검증·데이터 재입력 시간",
    "RTO 이후"
   ],
   [
    "RPO",
    "허용 데이터 손실 시점(백업 간격)",
    "시간 지표가 아닌 '데이터' 지표"
   ],
   [
    "MTBF / MTTR",
    "평균 고장 간격 / 평균 수리 시간",
    "가용성 = MTBF ÷ (MTBF + MTTR)"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 법·규제·수사 핵심",
  "type": "list",
  "items": [
   "형사 = 합리적 의심의 여지 없는 입증 / 민사 = 증거의 우세 / 행정 = 내부 정책 / 규제 = 감독기관 기준",
   "GDPR — 72시간 감독기관 통지 · 과징금 최대 €2,000만 또는 연매출 4% · DPO · 역외 적용",
   "미국 — CFAA(컴퓨터 사기·남용) · ECPA(통신 감청) · HIPAA(의료) · GLBA(금융 개인정보) · SOX(재무보고 내부통제) · FISMA(연방 정보보호)",
   "PCI DSS 는 법이 아니라 ★카드업계 계약상 표준★",
   "수출 통제 — Wassenaar Arrangement(이중용도 품목·암호) · 미국 ITAR(방산)·EAR(상무부 이중용도)",
   "지식재산 — 특허 출원일부터 20년 · 영업비밀은 등록 없이 비밀유지 노력으로 보호",
   "(ISC)² 윤리강령 4규범은 순서대로 우선 — 사회 > 정직·합법 > 주인 > 직업"
  ]
 },
 {
  "s": "s2",
  "title": "★ NIST SP 800-88 매체 소거 수준",
  "type": "table",
  "head": [
   "수준",
   "방법",
   "복구 방지 수준",
   "비고"
  ],
  "rows": [
   [
    "Clear",
    "덮어쓰기·공장 초기화",
    "일반 도구·키보드 수준",
    "재사용, 조직 내부"
   ],
   [
    "Purge",
    "디가우징·암호 소거·Secure Erase",
    "실험실 수준",
    "조직 외부 재사용 가능"
   ],
   [
    "Destroy",
    "분쇄·소각·용해·분해",
    "재사용 불가",
    "가장 확실, 비용↑"
   ],
   [
    "SSD 주의",
    "디가우징 무효",
    "—",
    "암호 소거 또는 물리 파괴"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 데이터 역할 정리",
  "type": "table",
  "head": [
   "역할",
   "책임",
   "핵심 키워드"
  ],
  "rows": [
   [
    "Owner",
    "분류·접근 승인·보호 수준 결정",
    "최종 책임(업무 관리자)"
   ],
   [
    "Controller",
    "처리 목적·수단 결정",
    "GDPR"
   ],
   [
    "Processor",
    "컨트롤러 대신 처리",
    "계약으로 의무 부여"
   ],
   [
    "Custodian",
    "백업·복구·권한 설정 수행",
    "IT 운영"
   ],
   [
    "User",
    "정책에 따라 데이터 사용",
    "최소권한"
   ],
   [
    "Subject",
    "개인정보의 주체",
    "권리 행사"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 보안 모델 비교",
  "type": "table",
  "head": [
   "모델",
   "목표",
   "핵심 규칙",
   "키워드"
  ],
  "rows": [
   [
    "Bell-LaPadula",
    "기밀성",
    "No Read Up · No Write Down(★-property)",
    "군사·격자 기반"
   ],
   [
    "Biba",
    "무결성",
    "No Read Down · No Write Up",
    "BLP의 반대"
   ],
   [
    "Clark-Wilson",
    "무결성",
    "주체→TP→CDI · IVP 검증",
    "상업·직무분리·Access triple"
   ],
   [
    "Brewer-Nash",
    "이해충돌 방지",
    "과거 접근에 따라 동적 차단",
    "Chinese Wall"
   ],
   [
    "Graham-Denning",
    "권한 관리",
    "주체·객체 생성·삭제·권한 부여 8규칙",
    "보호 규칙"
   ],
   [
    "Harrison-Ruzzo-Ullman",
    "권한 변경 무결성",
    "접근행렬 변경의 안전성(결정 불가능 문제)",
    "HRU"
   ],
   [
    "Lipner",
    "기밀성+무결성",
    "BLP와 Biba 결합",
    "상업 적용"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 암호 알고리즘 한눈에",
  "type": "table",
  "head": [
   "구분",
   "알고리즘",
   "비고"
  ],
  "rows": [
   [
    "대칭 블록",
    "AES(128/192/256) · 3DES · Blowfish · Twofish",
    "AES 블록 128비트, DES 56비트 키(폐기)"
   ],
   [
    "대칭 스트림",
    "ChaCha20 · RC4",
    "RC4는 취약 — WEP 실패 원인"
   ],
   [
    "비대칭",
    "RSA(소인수분해) · ECC(타원곡선 이산로그) · Diffie-Hellman · ElGamal",
    "ECC 256비트 ≈ RSA 3072비트"
   ],
   [
    "해시",
    "SHA-2 · SHA-3 · (MD5·SHA-1 폐기)",
    "무결성"
   ],
   [
    "MAC",
    "HMAC · CMAC · GMAC",
    "무결성+출처 인증"
   ],
   [
    "PQC",
    "ML-KEM(FIPS 203) · ML-DSA(FIPS 204) · SLH-DSA(FIPS 205)",
    "2024-08 NIST 확정"
   ],
   [
    "블록 모드",
    "ECB(패턴 노출) · CBC · CTR · GCM(AEAD)",
    "GCM = 기밀성+무결성"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ OSI 계층별 프로토콜·장비·공격",
  "type": "table",
  "head": [
   "계층",
   "PDU",
   "프로토콜·장비",
   "대표 공격"
  ],
  "rows": [
   [
    "7 응용",
    "데이터",
    "HTTP·DNS·SMTP·SNMP · WAF·프록시",
    "SQLi·XSS·DNS 포이즈닝"
   ],
   [
    "6 표현",
    "데이터",
    "TLS(관례상)·JPEG·ASCII",
    "—"
   ],
   [
    "5 세션",
    "데이터",
    "RPC·NetBIOS·SOCKS",
    "세션 하이재킹"
   ],
   [
    "4 전송",
    "세그먼트/데이터그램",
    "TCP·UDP",
    "SYN flood·포트 스캔"
   ],
   [
    "3 네트워크",
    "패킷",
    "IP·ICMP·IPsec·라우터",
    "IP 스푸핑·Smurf"
   ],
   [
    "2 데이터링크",
    "프레임",
    "Ethernet·ARP·802.1X·스위치",
    "ARP 스푸핑·MAC flooding·VLAN hopping"
   ],
   [
    "1 물리",
    "비트",
    "케이블·허브·리피터",
    "도청(tapping)·재밍"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 보안 프로토콜 대체표",
  "type": "table",
  "head": [
   "평문",
   "보안 대체",
   "포트"
  ],
  "rows": [
   [
    "Telnet(23)",
    "SSH",
    "22"
   ],
   [
    "FTP(21)",
    "SFTP(SSH) · FTPS(TLS)",
    "22 / 990"
   ],
   [
    "HTTP(80)",
    "HTTPS",
    "443"
   ],
   [
    "LDAP(389)",
    "LDAPS",
    "636"
   ],
   [
    "SNMPv1/v2c(161)",
    "SNMPv3(인증·암호화)",
    "161"
   ],
   [
    "SMTP(25)",
    "SMTP+STARTTLS / SMTPS",
    "587 / 465"
   ],
   [
    "RTP(VoIP)",
    "SRTP",
    "가변"
   ],
   [
    "DNS(53)",
    "DNSSEC(무결성) · DoT(853)/DoH(443)(기밀성)",
    "53/853/443"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 접근통제 모델 비교",
  "type": "table",
  "head": [
   "모델",
   "결정 주체·기준",
   "특징",
   "대표 예"
  ],
  "rows": [
   [
    "DAC",
    "객체 소유자의 재량",
    "유연, 권한 전파 위험, 트로이목마 취약",
    "Windows NTFS ACL, Unix 퍼미션"
   ],
   [
    "MAC",
    "시스템(레이블 vs 허가)",
    "비재량적, 중앙 강제, 경직",
    "SELinux, 군 기밀 시스템"
   ],
   [
    "RBAC",
    "직무 역할",
    "관리 용이, 직무분리 적용 쉬움",
    "ERP 권한 역할"
   ],
   [
    "Rule-based",
    "전역 규칙",
    "주체 무관 일괄 적용",
    "방화벽 ACL, 근무시간 제한"
   ],
   [
    "ABAC",
    "주체·객체·환경 속성 + 정책",
    "세밀·문맥 인식, 정책 복잡",
    "XACML, 클라우드 IAM 조건"
   ],
   [
    "Risk-based",
    "실시간 위험 점수",
    "적응형 인증(step-up)",
    "이상 위치 로그인 시 MFA 요구"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 페더레이션·SSO 프로토콜",
  "type": "table",
  "head": [
   "프로토콜",
   "목적",
   "형식·핵심"
  ],
  "rows": [
   [
    "SAML 2.0",
    "인증·속성 전달(웹 SSO)",
    "XML 어설션, IdP·SP"
   ],
   [
    "OAuth 2.0",
    "권한 위임(인가)",
    "액세스 토큰·scope, 인가 서버"
   ],
   [
    "OpenID Connect",
    "인증(ID 계층)",
    "OAuth 2.0 + ID 토큰(JWT)"
   ],
   [
    "Kerberos",
    "사내 SSO 인증",
    "대칭키, KDC(AS+TGS), 티켓"
   ],
   [
    "RADIUS",
    "네트워크 접근 AAA",
    "UDP, 비밀번호만 암호화"
   ],
   [
    "TACACS+",
    "장비 관리 AAA",
    "TCP 49, 패킷 전체 암호화, AAA 분리"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ SOC 보고서 비교",
  "type": "table",
  "head": [
   "구분",
   "대상",
   "배포",
   "Type"
  ],
  "rows": [
   [
    "SOC 1",
    "재무보고 관련 내부통제",
    "제한(고객·감사인)",
    "I / II"
   ],
   [
    "SOC 2",
    "TSC(보안·가용성·처리무결성·기밀성·프라이버시)",
    "제한(NDA)",
    "I / II"
   ],
   [
    "SOC 3",
    "TSC 요약",
    "공개(general use)",
    "Type 구분 없음(요약)"
   ],
   [
    "Type I",
    "특정 시점 설계 적정성",
    "—",
    "—"
   ],
   [
    "Type II",
    "기간 동안 운영 효과성",
    "—",
    "—"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ 보안 테스트 기법 비교",
  "type": "table",
  "head": [
   "기법",
   "시점·방식",
   "강점",
   "한계"
  ],
  "rows": [
   [
    "취약점 스캔",
    "자동·주기적",
    "넓은 범위, 저비용",
    "오탐·미탐, 악용 미검증"
   ],
   [
    "침투 테스트",
    "수동 중심·승인 하",
    "실제 영향 입증",
    "범위 제한, 비용, 서비스 영향"
   ],
   [
    "SAST",
    "개발 중·코드 분석",
    "조기 발견, 위치 특정",
    "오탐, 런타임 문제 미탐"
   ],
   [
    "DAST",
    "실행 환경",
    "런타임·설정 문제",
    "코드 위치 특정 어려움"
   ],
   [
    "퍼징",
    "비정상 입력",
    "크래시·메모리 오류",
    "논리 결함 발견 약함"
   ],
   [
    "로그 검토·합성 트랜잭션",
    "운영 중",
    "실사용 탐지·가용성 측정",
    "로그 품질 의존"
   ],
   [
    "Breach & Attack Simulation",
    "자동 공격 시뮬레이션",
    "통제 지속 검증",
    "실제 공격자 창의성 한계"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "★ 백업 유형 비교",
  "type": "table",
  "head": [
   "유형",
   "백업 대상",
   "아카이브 비트",
   "복원 시 필요 세트"
  ],
  "rows": [
   [
    "전체(Full)",
    "모든 데이터",
    "해제(clear)",
    "마지막 전체 1개"
   ],
   [
    "증분(Incremental)",
    "마지막 백업(전체·증분) 이후 변경분",
    "해제",
    "전체 + 이후 모든 증분"
   ],
   [
    "차등(Differential)",
    "마지막 전체 이후 변경분",
    "유지(해제 안 함)",
    "전체 + 마지막 차등 1개"
   ],
   [
    "스냅숏·복제",
    "특정 시점 상태/실시간 사본",
    "해당 없음",
    "스냅숏 시점 — 논리 오류도 복제될 수 있음"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "★ 복구 사이트·DR 테스트",
  "type": "table",
  "head": [
   "구분",
   "항목",
   "특징"
  ],
  "rows": [
   [
    "사이트",
    "Hot",
    "즉시 가동 수준, 비용 최고, RTO 최단"
   ],
   [
    "사이트",
    "Warm",
    "장비 일부·연결 준비, 데이터 복원 필요"
   ],
   [
    "사이트",
    "Cold",
    "공간·전원·HVAC만, 비용 최저, 복구 수 주"
   ],
   [
    "테스트",
    "Read-through / Walk-through",
    "문서 검토·탁상 토의, 운영 영향 없음"
   ],
   [
    "테스트",
    "Simulation",
    "시나리오 기반 연습, 실제 전환 없음"
   ],
   [
    "테스트",
    "Parallel",
    "대체 사이트 실제 가동, 주 사이트 운영 유지"
   ],
   [
    "테스트",
    "Full interruption",
    "주 사이트 중단 후 전환, 위험 최고·경영진 승인 필요"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "★ 사고 대응 단계 비교",
  "type": "table",
  "head": [
   "ISC2 (CISSP CBK)",
   "NIST SP 800-61 Rev.2",
   "핵심 활동"
  ],
  "rows": [
   [
    "(사전 준비)",
    "Preparation",
    "정책·CSIRT·도구·연락망"
   ],
   [
    "Detection",
    "Detection & Analysis",
    "경보 확인·사고 판정·우선순위"
   ],
   [
    "Response",
    "Detection & Analysis",
    "CSIRT 소집·초기 분석·증거 보존"
   ],
   [
    "Mitigation",
    "Containment",
    "격리로 피해 확산 차단"
   ],
   [
    "Reporting",
    "(전 단계)",
    "경영진·규제기관·고객 통지"
   ],
   [
    "Recovery",
    "Eradication & Recovery",
    "정상 운영 복귀"
   ],
   [
    "Remediation",
    "Eradication & Recovery",
    "근본 원인 제거·재발 방지"
   ],
   [
    "Lessons learned",
    "Post-Incident Activity",
    "사후 검토·절차 개선"
   ]
  ]
 },
 {
  "s": "s8",
  "title": "★ 애플리케이션 보안 테스트 비교",
  "type": "table",
  "head": [
   "기법",
   "방식",
   "시점",
   "특징"
  ],
  "rows": [
   [
    "SAST",
    "소스·바이너리 정적 분석",
    "개발·빌드",
    "화이트박스, 위치 특정 쉬움, 오탐 많음"
   ],
   [
    "DAST",
    "실행 앱 외부 공격 시뮬레이션",
    "테스트·운영",
    "블랙박스, 소스 불필요, 런타임·구성 오류 탐지"
   ],
   [
    "IAST",
    "실행 중 내부 에이전트 계측",
    "테스트",
    "SAST+DAST 장점 결합"
   ],
   [
    "SCA",
    "오픈소스·서드파티 구성요소 분석",
    "빌드",
    "취약 라이브러리·라이선스·SBOM"
   ],
   [
    "Fuzzing",
    "비정상·무작위 입력 주입",
    "테스트",
    "충돌·메모리 오류 탐지"
   ],
   [
    "RASP",
    "런타임 자기 보호",
    "운영",
    "앱 내부에서 공격 차단"
   ]
  ]
 },
 {
  "s": "s8",
  "title": "★ 개발 방법론·성숙도 모델",
  "type": "table",
  "head": [
   "구분",
   "항목",
   "핵심"
  ],
  "rows": [
   [
    "방법론",
    "Waterfall",
    "순차 단계, 이전 단계 복귀 어려움"
   ],
   [
    "방법론",
    "Spiral",
    "반복마다 ★위험 분석★ 수행"
   ],
   [
    "방법론",
    "Agile/Scrum",
    "짧은 스프린트, 동작하는 소프트웨어 우선"
   ],
   [
    "방법론",
    "DevOps/DevSecOps",
    "CI/CD 자동화, 보안 shift left"
   ],
   [
    "성숙도",
    "CMM/CMMI",
    "1 초기 → 5 최적화"
   ],
   [
    "성숙도",
    "OWASP SAMM",
    "처방적 SW 보안 성숙도 모델"
   ],
   [
    "성숙도",
    "BSIMM",
    "실제 조직 관찰 기반 기술적 모델"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "Due Diligence 와 Due Care 를 혼동 — 통제를 실제로 '시행'하는 것이 Due Care, 위험을 조사·점검하는 것이 Due Diligence."
 },
 {
  "s": "s1",
  "t": "위험을 '무시(ignore/reject)'하는 것도 수용의 한 형태 — 아니다. 수용은 경영진이 인지·승인·문서화한 경우만 적법."
 },
 {
  "s": "s1",
  "t": "보험으로 위험을 전가하면 책임도 넘어간다 — 아니다. 금전적 손실만 이전되고 법적·평판 책임(accountability)은 조직에 남는다."
 },
 {
  "s": "s1",
  "t": "Guideline 도 Standard 처럼 반드시 따라야 한다 — 아니다. Guideline 은 권고(선택), Standard·Policy·Procedure 는 필수."
 },
 {
  "s": "s1",
  "t": "RPO 는 복구 '시간' 목표 — 아니다. RPO 는 허용 가능한 데이터 손실 '시점'(백업 주기), 시간 목표는 RTO."
 },
 {
  "s": "s1",
  "t": "보안 사고 최종 책임은 CISO — ISC2 관점에서 최종 책임(accountability)은 ★고위 경영진(Senior Management)★."
 },
 {
  "s": "s1",
  "t": "ISC2 윤리강령에서 고용주(주인)에 대한 의무가 가장 우선 — 아니다. 사회·공익 보호가 1순위."
 },
 {
  "s": "s1",
  "t": "PCI DSS 는 미국 연방법 — 아니다. 카드 브랜드가 만든 업계 표준으로 계약으로 강제된다."
 },
 {
  "s": "s1",
  "t": "정량적 분석이 항상 정성적 분석보다 낫다 — 아니다. 정량은 객관적이나 데이터 확보 비용이 크고, 정성은 빠르지만 주관적. 실무는 혼합."
 },
 {
  "s": "s1",
  "t": "ISC2 문제에서 기술적 해결책을 먼저 고른다 — 관리자 관점: 정책·위험 평가·경영진 승인·인명 안전이 우선. 인명 안전은 항상 최우선."
 },
 {
  "s": "s2",
  "t": "데이터 관리자(Custodian)가 분류 등급을 정한다 — 아니다. 분류 결정은 소유자(Owner), Custodian 은 보호 운영."
 },
 {
  "s": "s2",
  "t": "SSD 도 디가우징으로 안전하게 소거된다 — 아니다. 자기 매체가 아니므로 무효. 암호 소거·물리 파괴."
 },
 {
  "s": "s2",
  "t": "파일 삭제·포맷이면 소거 완료 — 아니다. 데이터 잔존(remanence)이 남는다."
 },
 {
  "s": "s2",
  "t": "가명처리(pseudonymization) 데이터는 개인정보가 아니다 — 아니다. 추가 정보로 재식별 가능하므로 GDPR 상 여전히 개인정보. 익명화만 적용 제외."
 },
 {
  "s": "s2",
  "t": "데이터를 오래 보관할수록 안전하다 — 아니다. 보존 기간을 넘긴 데이터는 eDiscovery·유출 위험만 키운다. 정책대로 파기."
 },
 {
  "s": "s2",
  "t": "Scoping 과 Tailoring 은 같은 말 — 아니다. Scoping = 적용 통제 선택, Tailoring = 선택한 통제 조정."
 },
 {
  "s": "s2",
  "t": "분류 등급은 데이터를 만든 비용으로 정한다 — 아니다. 민감도·가치·공개 시 피해로 정한다."
 },
 {
  "s": "s3",
  "t": "Biba의 Star Integrity는 'No Write Down'이다 — 아니다. Biba는 ★No Write Up★(상위 무결성 데이터를 오염시키지 않음). No Write Down은 BLP의 ★-property."
 },
 {
  "s": "s3",
  "t": "EAL7은 가장 안전한 '기능'을 가진 제품이다 — 아니다. EAL은 보증(평가 깊이) 수준이며, 보안 기능 자체는 PP/ST가 정의한다."
 },
 {
  "s": "s3",
  "t": "전자서명은 기밀성을 제공한다 — 아니다. 무결성·인증·부인방지만 제공. 서명은 공개키로 누구나 검증 가능."
 },
 {
  "s": "s3",
  "t": "해시는 암호화이므로 복호화할 수 있다 — 아니다. 해시는 일방향 함수로 복호화 개념이 없다."
 },
 {
  "s": "s3",
  "t": "RA는 인증서를 발급·서명한다 — 아니다. RA는 신원 확인만 하고 발급·서명은 CA가 한다."
 },
 {
  "s": "s3",
  "t": "ECB 모드도 AES를 쓰면 안전하다 — 아니다. 동일 평문 블록 → 동일 암호문 블록이라 패턴이 노출된다(ECB 펭귄)."
 },
 {
  "s": "s3",
  "t": "Fail-safe와 Fail-secure는 같은 말이다 — 아니다. Fail-safe는 사람 안전 우선(문 열림), Fail-secure는 자산 보호(잠김). 사람 생명이 항상 우선."
 },
 {
  "s": "s3",
  "t": "양자컴퓨터는 AES도 완전히 깨뜨린다 — 아니다. Grover 알고리즘은 대칭키 유효 강도를 절반으로 줄일 뿐이며 AES-256으로 대응. 치명적 위협은 RSA·ECC(Shor)."
 },
 {
  "s": "s4",
  "t": "DNSSEC은 DNS 질의를 암호화한다 — 아니다. 서명으로 출처·무결성만 제공. 기밀성은 DoT/DoH."
 },
 {
  "s": "s4",
  "t": "IPsec AH는 기밀성을 제공한다 — 아니다. AH는 무결성·출처 인증만, 암호화는 ESP."
 },
 {
  "s": "s4",
  "t": "IDS는 공격 트래픽을 자동 차단한다 — 아니다. IDS는 탐지·경보(수동), 인라인 차단은 IPS."
 },
 {
  "s": "s4",
  "t": "WPA2 PSK는 오프라인 사전 공격에 강하다 — 아니다. 4-way handshake를 캡처하면 오프라인 대입 가능. WPA3 SAE가 이를 막는다."
 },
 {
  "s": "s4",
  "t": "VLAN만 나누면 완전한 보안 경계가 된다 — 아니다. VLAN hopping 가능, 계층 간 통제는 방화벽·ACL로 해야 한다."
 },
 {
  "s": "s4",
  "t": "UDP는 연결 지향 프로토콜이다 — 아니다. UDP는 비연결형·비신뢰성. 연결 지향·신뢰성은 TCP."
 },
 {
  "s": "s4",
  "t": "SSID 숨김과 MAC 필터링은 강력한 무선 보안 통제다 — 아니다. 둘 다 쉽게 우회되며 암호화·인증(WPA3/802.1X)을 대체하지 못한다."
 },
 {
  "s": "s4",
  "t": "Smurf 공격은 TCP SYN을 이용한다 — 아니다. Smurf는 브로드캐스트 주소로 보낸 ICMP echo(스푸핑된 출발지)를 증폭하는 공격. 원인 차단: directed broadcast 비활성화."
 },
 {
  "s": "s5",
  "t": "비밀번호 + 보안 질문은 다중 요소 인증(MFA)이다 — 아니다. 둘 다 ★지식 기반(Type 1)★이므로 단일 요소의 2단계일 뿐."
 },
 {
  "s": "s5",
  "t": "FAR이 FRR보다 운영 불편이 크다 — 아니다. FRR(Type I)은 불편, ★FAR(Type II)은 보안 위험★. 고보안 환경은 FAR을 낮춘다."
 },
 {
  "s": "s5",
  "t": "OAuth 2.0은 사용자 인증 프로토콜이다 — 아니다. OAuth는 ★인가(권한 위임)★ 프레임워크이며, 인증은 그 위의 OpenID Connect가 담당."
 },
 {
  "s": "s5",
  "t": "Kerberos는 공개키 기반이다 — 아니다. 기본적으로 ★대칭키★ 기반(PKINIT 확장은 예외)이며 시간 동기화가 필수."
 },
 {
  "s": "s5",
  "t": "MAC에서는 데이터 소유자가 레이블을 마음대로 바꿀 수 있다 — 아니다. 레이블·허가는 ★시스템/보안 관리자★가 강제하며 사용자 재량이 없다."
 },
 {
  "s": "s5",
  "t": "Rule-based 접근통제는 RBAC와 같은 것이다 — 아니다. Rule-based는 모든 주체에 일괄 적용되는 전역 규칙, RBAC는 직무 역할 기반."
 },
 {
  "s": "s5",
  "t": "퇴사자 계정은 즉시 삭제하는 것이 최선이다 — 대개 ★즉시 비활성화(disable)★ 후 보존 정책에 따라 삭제. 즉시 삭제는 감사 추적·데이터 소유권 확인을 어렵게 한다."
 },
 {
  "s": "s5",
  "t": "접근 검토(access review)는 IT 관리자 혼자 수행하면 충분하다 — 아니다. 권한의 적정성은 ★데이터 소유자·관리자(manager)★가 확인해야 한다."
 },
 {
  "s": "s6",
  "t": "취약점 스캔과 침투 테스트는 같은 것이다 — 아니다. 스캔은 ★식별★, 침투 테스트는 ★악용으로 실증★."
 },
 {
  "s": "s6",
  "t": "SOC 3은 SOC 2보다 상세한 보고서다 — 아니다. SOC 3은 ★공개용 요약★이며 상세 테스트 결과는 SOC 2."
 },
 {
  "s": "s6",
  "t": "SOC 2 Type I으로 통제 운영 효과성을 확인할 수 있다 — 아니다. Type I은 시점 설계, ★운영 효과성은 Type II★."
 },
 {
  "s": "s6",
  "t": "보안 통제를 평가하려면 SOC 1을 요청한다 — 아니다. SOC 1은 재무보고 통제, 보안은 ★SOC 2★."
 },
 {
  "s": "s6",
  "t": "침투 테스트는 IT 부서장 구두 동의로 시작해도 된다 — 아니다. ★경영진의 서면 승인★과 범위·규칙(RoE) 문서가 먼저."
 },
 {
  "s": "s6",
  "t": "코드 커버리지 100%면 취약점이 없다 — 아니다. 실행됐다는 뜻일 뿐 ★올바른 입력·악용 시나리오★를 검증했다는 뜻이 아니다."
 },
 {
  "s": "s6",
  "t": "SAST는 운영 서버의 설정 오류까지 찾아낸다 — 아니다. 정적 분석은 코드만 본다. 런타임·설정은 DAST·구성 점검."
 },
 {
  "s": "s6",
  "t": "감사에서 발견 사항이 나오면 감사인이 직접 시정한다 — 아니다. 감사인은 ★독립성★ 유지를 위해 보고·권고만, 시정은 경영진 책임."
 },
 {
  "s": "s7",
  "t": "RAID 1·5로 디스크를 이중화했으니 별도 백업은 불필요 — 아니다. RAID는 하드웨어 장애 대비 가용성 수단이며 삭제·랜섬웨어·논리 오류는 그대로 복제된다."
 },
 {
  "s": "s7",
  "t": "차등 백업은 마지막 '백업' 이후 변경분 — 아니다. 마지막 ★전체 백업★ 이후 변경분이며 아카이브 비트를 해제하지 않는다. 마지막 백업 이후 변경분은 증분."
 },
 {
  "s": "s7",
  "t": "사고가 의심되면 즉시 전원을 끈다 — 아니다. 휘발성 증거(메모리·네트워크 연결)가 사라진다. 조직 절차에 따라 격리 후 휘발성 순서대로 수집."
 },
 {
  "s": "s7",
  "t": "사고 대응의 첫 조치는 원인 제거(remediation) — 아니다. 먼저 탐지·대응 후 ★완화(격리)★로 피해 확산을 막고, 근본 원인 제거는 복구 이후 단계."
 },
 {
  "s": "s7",
  "t": "Full interruption 테스트가 가장 좋은 테스트이니 자주 한다 — 아니다. 실제 운영 중단 위험이 가장 커서 드물게, 경영진 승인하에 수행. 일반적으로는 Parallel 테스트가 권장."
 },
 {
  "s": "s7",
  "t": "Cold site는 데이터가 준비돼 있어 하루 내 복구 — 아니다. 공간·전원 등 기반만 있고 장비·데이터가 없어 복구에 수 주가 걸릴 수 있다."
 },
 {
  "s": "s7",
  "t": "강제 휴가는 예방 통제 — 아니다. 대체 인력이 업무를 수행하며 부정이 드러나게 하는 ★탐지 통제★."
 },
 {
  "s": "s7",
  "t": "화재 시 데이터센터 장비 보호가 최우선 — 아니다. CISSP에서 ★인명 안전(human safety)이 언제나 최우선★."
 },
 {
  "s": "s7",
  "t": "SIEM을 도입하면 시간 동기화는 불필요 — 아니다. 이벤트 상관분석과 증거력 모두 NTP 등 시간 동기화를 전제로 한다."
 },
 {
  "s": "s8",
  "t": "클라이언트 측 JavaScript로 입력을 검증했으니 안전 — 아니다. 우회 가능하므로 ★서버 측 검증★이 필수."
 },
 {
  "s": "s8",
  "t": "DAST는 소스 코드가 있어야 수행할 수 있다 — 아니다. DAST는 실행 중인 애플리케이션을 외부에서 검사하는 블랙박스 방식. 소스가 필요한 것은 SAST."
 },
 {
  "s": "s8",
  "t": "CMM 4단계가 지속적 프로세스 개선 단계 — 아니다. 4단계는 정량적 관리, ★지속적 개선은 5단계 Optimizing★."
 },
 {
  "s": "s8",
  "t": "오픈소스는 공개돼 있으니 별도 관리가 필요 없다 — 아니다. SCA·SBOM으로 구성요소·버전·라이선스·취약점을 지속 추적해야 한다."
 },
 {
  "s": "s8",
  "t": "보안 테스트는 개발 마지막 단계에 몰아서 하는 것이 효율적 — 아니다. 요구사항·설계 단계부터 반영해야 수정 비용이 가장 적다(shift left)."
 },
 {
  "s": "s8",
  "t": "Polyinstantiation은 데이터 중복이므로 무결성 결함 — 시험 관점에서는 ★추론 공격 방어 기법★으로 본다."
 },
 {
  "s": "s8",
  "t": "Spiral 모델의 핵심은 빠른 배포 — 아니다. 반복마다 ★위험 분석★을 수행하는 것이 핵심."
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "보안 거버넌스",
  "title": "보안 개념·거버넌스 원칙·정책 체계",
  "ref": "CISSP Exam Outline 2024 Domain 1.1~1.3, 1.7, 1.9",
  "body": [
   {
    "h": "보안 개념(1.2)",
    "tb": {
     "head": [
      "개념",
      "의미",
      "대표 통제"
     ],
     "rows": [
      [
       "Confidentiality",
       "인가된 주체만 열람",
       "암호화·접근통제"
      ],
      [
       "Integrity",
       "무단 변경 방지·탐지",
       "해시·전자서명·변경관리"
      ],
      [
       "Availability",
       "필요할 때 접근 가능",
       "이중화·백업·BCP"
      ],
      [
       "Authenticity",
       "출처·실체가 진짜임",
       "인증·인증서"
      ],
      [
       "Nonrepudiation",
       "행위를 부인 못 함",
       "전자서명·감사로그"
      ]
     ]
    }
   },
   {
    "h": "거버넌스 원칙(1.3)",
    "li": [
     "보안 기능은 ★비즈니스 전략·목표·미션에 정렬★ — 보안은 비즈니스를 지원하는 수단",
     "조직 프로세스: 인수·합병(M&A), 매각(divestiture), 거버넌스 위원회 — 인수 시 상대 보안 수준 평가, 매각 시 데이터·접근 분리",
     "역할: 고위 경영진(최종 책임) · CISO · 데이터 소유자 · 관리자(custodian) · 사용자 · 감사인",
     "통제 프레임워크: ISO/IEC 27001·27002, NIST SP 800-53, NIST CSF 2.0(Govern·Identify·Protect·Detect·Respond·Recover), COBIT",
     "Due Care(시행) / Due Diligence(조사·점검)"
    ]
   },
   {
    "h": "정책 문서 계층(1.7)",
    "tb": {
     "head": [
      "문서",
      "성격",
      "예"
     ],
     "rows": [
      [
       "Policy",
       "필수 · 경영진 승인 · 상위 원칙",
       "정보보호 정책"
      ],
      [
       "Standard",
       "필수 · 구체 기술 요구",
       "AES-256 사용"
      ],
      [
       "Baseline",
       "필수 · 최소 보안 설정",
       "CIS 벤치마크 기반 서버 설정"
      ],
      [
       "Procedure",
       "필수 · 단계별 절차",
       "계정 생성 절차서"
      ],
      [
       "Guideline",
       "★권고·선택★",
       "강한 패스워드 작성 요령"
      ]
     ]
    }
   },
   {
    "h": "인적 보안(1.9)·교육(1.13)",
    "li": [
     "채용 전: 신원·경력 조회, NDA · 재직 중: 직무분리, 직무순환, 의무휴가, 최소권한 · 퇴직: 즉시 계정 비활성화, 자산 회수, 퇴직 면담",
     "외부인력·벤더: 계약·SLA 에 보안 요구 명시",
     "Awareness(인식, 무엇) → Training(훈련, 어떻게) → Education(교육, 왜·심화)",
     "피싱 시뮬레이션·게이미피케이션·보안 챔피언 — 프로그램 효과는 ★주기적 측정·개선★"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "법·규제·윤리",
  "title": "법·규제·윤리·수사",
  "ref": "CISSP Exam Outline 2024 Domain 1.4~1.6",
  "body": [
   {
    "h": "수사 유형(1.6)",
    "tb": {
     "head": [
      "유형",
      "주체",
      "입증 기준"
     ],
     "rows": [
      [
       "Administrative",
       "조직 내부",
       "내부 정책 위반 여부"
      ],
      [
       "Criminal",
       "수사기관·검찰",
       "합리적 의심의 여지 없음"
      ],
      [
       "Civil",
       "당사자 간 소송",
       "증거의 우세"
      ],
      [
       "Regulatory",
       "감독기관",
       "규제 기준 위반 여부"
      ],
      [
       "Industry standards",
       "업계 단체",
       "PCI DSS 등 표준 준수"
      ]
     ]
    }
   },
   {
    "h": "주요 법·규제",
    "li": [
     "사이버범죄·데이터 유출 · 라이선스·지식재산 · 수출입 통제 · 국경 간 데이터 이전 · 프라이버시(GDPR 등)",
     "GDPR — 적법성·목적 제한·최소화·정확성·보관 제한·무결성/기밀성·책임성 원칙 / 72시간 통지",
     "미국 — HIPAA·GLBA·SOX·FISMA·CFAA·ECPA, 주(州) 개인정보 침해 통지법",
     "Wassenaar Arrangement — 재래식 무기·이중용도 품목(암호 포함) 수출 통제 다자 체제"
    ]
   },
   {
    "h": "지식재산",
    "tb": {
     "head": [
      "권리",
      "보호 대상",
      "기간·특징"
     ],
     "rows": [
      [
       "Copyright",
       "저작물의 표현",
       "저자 사후 장기 보호, 아이디어 자체는 아님"
      ],
      [
       "Trademark",
       "상호·로고",
       "사용·갱신 시 지속"
      ],
      [
       "Patent",
       "새롭고 유용하며 자명하지 않은 발명",
       "출원일부터 20년, 내용 공개"
      ],
      [
       "Trade secret",
       "경쟁 우위 비밀 정보",
       "등록 없음, 비밀유지 노력 필요"
      ]
     ]
    }
   },
   {
    "h": "윤리(1.1)",
    "li": [
     "(ISC)² Code of Ethics 4규범 — 사회 보호 → 정직·합법 → 주인 봉사 → 직업 발전 (순서대로 우선)",
     "조직 윤리강령은 별도 — 둘 다 준수",
     "윤리강령 위반 신고는 회원 의무, 위반 시 자격 박탈 가능"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "위험관리",
  "title": "위험관리·위협 모델링·공급망",
  "ref": "CISSP Exam Outline 2024 Domain 1.10~1.12 · NIST SP 800-37 Rev.2 · SP 800-30",
  "body": [
   {
    "h": "위험관리 용어",
    "li": [
     "위험 = 위협 × 취약점 (× 영향) · 자산 · 위협원 · 노출 · 대책",
     "위험 평가 = 식별 → 분석(정량·정성) → 평가 → 대응",
     "잔여위험(residual) = 총위험 − 통제 효과 · 내재위험(inherent) = 통제 전 위험",
     "위험 성향(appetite)·허용 한도(tolerance)는 경영진이 정의"
    ]
   },
   {
    "h": "위험 대응",
    "tb": {
     "head": [
      "전략",
      "의미",
      "예"
     ],
     "rows": [
      [
       "Avoid",
       "위험 활동 중단",
       "취약 서비스 폐지"
      ],
      [
       "Transfer/Share",
       "제3자에 재무 위험 이전",
       "사이버 보험·아웃소싱"
      ],
      [
       "Mitigate",
       "통제로 감소",
       "MFA 도입"
      ],
      [
       "Accept",
       "경영진이 인지·승인",
       "잔여위험 수용 서명"
      ]
     ]
    }
   },
   {
    "h": "프레임워크·모니터링",
    "li": [
     "NIST RMF 7단계 Prepare-Categorize-Select-Implement-Assess-Authorize-Monitor",
     "ISO/IEC 27005·31000, COSO ERM, FAIR(정량 모델)",
     "통제 평가(assessment)·지속 모니터링·KRI·성숙도 모델로 개선",
     "위험 보고는 경영진·이사회 수준의 언어(비즈니스 영향)로"
    ]
   },
   {
    "h": "위협 모델링(1.11)·공급망(1.12)",
    "li": [
     "STRIDE · PASTA(7단계, 공격자·위험 중심) · DREAD · VAST · 공격 트리",
     "SCRM 위험: 제품 변조, 위조품, 구현된 백도어 · 대응: 공급자 평가, SBOM, 제3자 평가·감사, 최소 보안 요구 계약화",
     "SLA·서비스 수준 요구·감사권(right to audit)을 계약에 명시"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "BCP·BIA",
  "title": "업무연속성(BCP)·BIA",
  "ref": "CISSP Exam Outline 2024 Domain 1.8 · NIST SP 800-34 Rev.1",
  "body": [
   {
    "h": "BCP 구성",
    "li": [
     "프로젝트 범위·계획 → BIA → 연속성 전략 → 계획 승인·구현 → 교육·시험 → 유지",
     "★고위 경영진의 지원·승인★이 필수, BCP 팀은 업무부서 대표 포함",
     "BCP = 핵심 업무 지속 / DRP = IT 시스템 복구(BCP 의 하위)"
    ]
   },
   {
    "h": "BIA 산출물",
    "tb": {
     "head": [
      "지표",
      "의미"
     ],
     "rows": [
      [
       "MTD/MAD",
       "중단 허용 최대 시간"
      ],
      [
       "RTO",
       "복구 목표 시간"
      ],
      [
       "RPO",
       "허용 데이터 손실 시점"
      ],
      [
       "WRT",
       "복구 후 검증 시간"
      ],
      [
       "핵심 업무·자원 우선순위",
       "복구 순서 결정 근거"
      ]
     ]
    }
   },
   {
    "h": "NIST SP 800-34 단계",
    "li": [
     "정책 → BIA → 예방 통제 → 복구 전략 → 계획 작성 → 시험·훈련·연습 → 유지보수",
     "정성(평판·법적) 영향과 정량(금전) 영향을 모두 평가",
     "인명 안전이 모든 연속성 의사결정에서 최우선"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "자산 분류·취급",
  "title": "정보·자산 식별·분류·취급",
  "ref": "CISSP Exam Outline 2024 Domain 2.1~2.3",
  "body": [
   {
    "h": "분류 체계",
    "tb": {
     "head": [
      "정부",
      "피해 수준",
      "민간 대응 예"
     ],
     "rows": [
      [
       "Top Secret",
       "exceptionally grave damage",
       "Confidential/Proprietary"
      ],
      [
       "Secret",
       "serious damage",
       "Private"
      ],
      [
       "Confidential",
       "damage",
       "Sensitive"
      ],
      [
       "Unclassified",
       "피해 없음(단 CUI 존재)",
       "Public"
      ]
     ]
    }
   },
   {
    "h": "분류·취급 절차",
    "li": [
     "자산 인벤토리 → 소유자 지정 → 분류 기준(가치·민감도·법적 요구) → 등급 부여 → 표시(marking/labeling) → 취급 요구 → 정기 재분류",
     "취급 요구(2.2): 저장 위치, 전송 방법, 접근 승인, 복제·인쇄 제한, 파기 방법을 등급별로 정의",
     "재분류·하향 조정(declassification)도 소유자 승인으로",
     "자원 안전 프로비저닝(2.3): 정보·자산 소유권, 자산 인벤토리(유형·무형), 자산 관리"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "수명주기·파기",
  "title": "데이터 수명주기·보존·파기",
  "ref": "CISSP Exam Outline 2024 Domain 2.4~2.5 · NIST SP 800-88",
  "body": [
   {
    "h": "데이터 수명주기 관리(2.4)",
    "li": [
     "역할: owners · controllers · custodians · processors · users/subjects",
     "수집 최소화(data collection) · 데이터 위치(location, 국가 간 이전 규제) · 유지(maintenance) · 보존(retention) · 잔존(remanence) · 파기(destruction)",
     "보존 기간은 법·규제·업무 요구로 정하고, 경과 시 정책에 따라 파기"
    ]
   },
   {
    "h": "매체 소거",
    "tb": {
     "head": [
      "방법",
      "설명",
      "적합 매체"
     ],
     "rows": [
      [
       "Overwriting",
       "패턴으로 덮어쓰기",
       "HDD (Clear)"
      ],
      [
       "Degaussing",
       "강한 자기장으로 소거",
       "자기 매체만 (Purge)"
      ],
      [
       "Cryptographic erase",
       "암호 키 폐기",
       "자체암호화 드라이브·클라우드"
      ],
      [
       "Physical destruction",
       "분쇄·소각·용해",
       "모든 매체 (Destroy)"
      ]
     ]
    }
   },
   {
    "h": "자산 보존(2.5)",
    "li": [
     "EOL(판매 종료) · EOS(지원 종료) 일정을 추적해 교체 계획 수립",
     "지원 종료 자산을 계속 써야 하면 격리·모니터링 등 보상 통제와 위험 수용 승인",
     "※ NIST SP 800-88 개정판(Rev.2) 발행 여부·변경점은 [확인필요] — Clear·Purge·Destroy 3분류는 Rev.1 기준"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "데이터 보호 통제",
  "title": "데이터 보안 통제·준거성",
  "ref": "CISSP Exam Outline 2024 Domain 2.6",
  "body": [
   {
    "h": "데이터 상태별 통제",
    "tb": {
     "head": [
      "상태",
      "위협",
      "통제"
     ],
     "rows": [
      [
       "At rest",
       "매체 도난·무단 접근",
       "FDE·DB 암호화·접근통제"
      ],
      [
       "In transit",
       "도청·변조",
       "TLS·IPsec·VPN"
      ],
      [
       "In use",
       "메모리 덤프·화면 노출",
       "TEE·마스킹·DLP"
      ]
     ]
    }
   },
   {
    "h": "통제 선정",
    "li": [
     "Scoping(적용 통제 선택) · Tailoring(조직 환경에 맞게 조정) · 표준 선택(NIST SP 800-53, ISO 27001/27002, CIS Controls 등)",
     "보호 방법: DRM(디지털 권리 관리) · DLP(데이터 유출 방지) · CASB(클라우드 접근 보안 중개)",
     "개인정보 보호 기술: 가명처리(재식별 가능) · 토큰화(원본을 무의미한 토큰으로 대체, 매핑은 금고에) · 익명화(재식별 불가) · 마스킹"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "보안 모델",
  "title": "보안 모델·평가 기준·시스템 보안 역량",
  "ref": "CISSP Exam Outline 2024 Domain 3.1~3.4 · ISO/IEC 15408",
  "body": [
   {
    "h": "보안 모델 핵심 규칙",
    "tb": {
     "head": [
      "모델",
      "규칙 1",
      "규칙 2",
      "목적"
     ],
     "rows": [
      [
       "Bell-LaPadula",
       "Simple Security: No Read Up",
       "★-Property: No Write Down",
       "기밀성"
      ],
      [
       "Biba",
       "Simple Integrity: No Read Down",
       "★-Integrity: No Write Up",
       "무결성"
      ],
      [
       "Clark-Wilson",
       "주체는 TP로만 CDI 변경",
       "IVP로 무결성 검증 · 직무분리",
       "무결성(상업)"
      ],
      [
       "Brewer-Nash",
       "이해충돌 클래스 내 1개 회사만 접근",
       "접근 이력 기반 동적 통제",
       "이해충돌 방지"
      ]
     ]
    }
   },
   {
    "h": "모델 유형",
    "li": [
     "State machine model — 모든 상태 전이가 안전 상태를 유지",
     "Information flow model — 보안 수준 간 정보 흐름 통제(BLP·Biba의 기반)",
     "Noninterference model — 상위 수준 행위가 하위 수준에 관찰되지 않음(은닉 채널 방지)",
     "Lattice-based — 상한(LUB)·하한(GLB)으로 접근 결정"
    ]
   },
   {
    "h": "Common Criteria(ISO/IEC 15408) 구성",
    "tb": {
     "head": [
      "요소",
      "의미"
     ],
     "rows": [
      [
       "TOE",
       "Target of Evaluation — 평가 대상 제품·시스템"
      ],
      [
       "PP",
       "Protection Profile — 제품 유형별 사용자 보안 요구(구현 독립)"
      ],
      [
       "ST",
       "Security Target — 특정 제품의 벤더 보안 주장"
      ],
      [
       "EAL1~7",
       "평가 보증 수준 — 1 기능 시험 ~ 7 정형 검증 설계·시험"
      ]
     ]
    }
   },
   {
    "h": "시스템 보안 역량(3.4)",
    "li": [
     "TPM — 키 저장·측정 부팅(attestation)·봉인(sealing)",
     "HSM — 키 생성·보관 전용 장비(FIPS 140-2/140-3 검증)",
     "메모리 보호 · 프로세스 격리 · 가상화 · Secure boot · TEE(신뢰 실행 환경)",
     "Reference Monitor 요건: 완전 중재 · 변조 방지 · 검증 가능"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "암호학",
  "title": "암호 솔루션·PKI·암호 공격",
  "ref": "CISSP Exam Outline 2024 Domain 3.6~3.7 · NIST FIPS 197 · FIPS 203/204/205",
  "body": [
   {
    "h": "암호 서비스와 수단",
    "tb": {
     "head": [
      "서비스",
      "수단"
     ],
     "rows": [
      [
       "기밀성",
       "대칭·비대칭 암호화"
      ],
      [
       "무결성",
       "해시 · MAC · 전자서명"
      ],
      [
       "인증",
       "MAC · 전자서명 · 인증서"
      ],
      [
       "부인방지",
       "★전자서명(비대칭)★ — 대칭 MAC은 부인방지 불가"
      ]
     ]
    }
   },
   {
    "h": "키 관리 수명주기",
    "li": [
     "생성 → 배포 → 저장 → 사용 → 교체(rotation) → 보관 → 폐기(파기)",
     "Key escrow — 제3자 보관 / Key recovery — 복구 절차",
     "Split knowledge · Dual control — 한 사람이 키 전체를 알지 못하게",
     "Crypto-period — 키 사용 기간 제한(NIST SP 800-57)"
    ]
   },
   {
    "h": "PKI 흐름",
    "li": [
     "RA 신원 확인 → CA 서명·발급(X.509) → 사용 → 폐기 시 CRL 게시 또는 OCSP 응답",
     "신뢰 체인: Root CA(오프라인 보관 권장) → Intermediate CA → 최종 개체 인증서",
     "Certificate pinning — 특정 인증서·공개키만 신뢰해 MITM 방지"
    ]
   },
   {
    "h": "암호 분석 공격",
    "tb": {
     "head": [
      "공격",
      "공격자 보유"
     ],
     "rows": [
      [
       "Ciphertext-only",
       "암호문만"
      ],
      [
       "Known plaintext",
       "평문-암호문 쌍"
      ],
      [
       "Chosen plaintext",
       "선택한 평문을 암호화한 결과"
      ],
      [
       "Chosen ciphertext",
       "선택한 암호문을 복호화한 결과"
      ],
      [
       "Birthday attack",
       "해시 충돌 — n비트 해시는 약 2^(n/2) 시도"
      ],
      [
       "Side-channel",
       "전력·타이밍·전자파 등 물리 누출"
      ],
      [
       "Pass-the-hash / Kerberos 공격",
       "구현 공격(2024 아웃라인 3.7 명시)"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "물리 보안",
  "title": "물리·시설 보안과 사이트 설계",
  "ref": "CISSP Exam Outline 2024 Domain 3.8~3.9",
  "body": [
   {
    "h": "사이트·시설 설계 원칙",
    "li": [
     "CPTED — 자연 감시 · 자연 접근통제 · 영역성 강화",
     "계층 방어: 외곽(펜스·조명) → 건물(출입통제·맨트랩) → 실(서버실) → 랙",
     "서버실은 건물 중앙·창문 없음·지하층·최상층 회피",
     "Mantrap(access control vestibule) — piggybacking·tailgating 방지"
    ]
   },
   {
    "h": "화재 등급과 소화",
    "tb": {
     "head": [
      "등급(US)",
      "연료",
      "소화"
     ],
     "rows": [
      [
       "A",
       "일반 가연물(종이·목재)",
       "물·소다산"
      ],
      [
       "B",
       "가연성 액체",
       "CO2·할론 대체제·폼"
      ],
      [
       "C",
       "전기",
       "CO2·청정소화약제(FM-200 등) — 물 금지"
      ],
      [
       "D",
       "가연성 금속",
       "건식 분말"
      ],
      [
       "K",
       "주방 기름",
       "습식 화학약제"
      ]
     ]
    }
   },
   {
    "h": "스프링클러 유형",
    "li": [
     "Wet pipe — 배관에 항상 물, 가장 빠르나 동파·누수 위험",
     "Dry pipe — 압축공기 충전, 동결 지역",
     "★Pre-action★ — 1차 감지 후 물 충전, 2차(헤드 열) 방출 — 데이터센터 권장",
     "Deluge — 모든 헤드 개방, 대량 방수(데이터센터 부적합)"
    ]
   },
   {
    "h": "환경 통제",
    "li": [
     "전원: Surge(과전압)·Spike(순간 과전압)·Sag(순간 저전압)·Brownout(지속 저전압)·Fault(순간 정전)·Blackout(지속 정전)",
     "온습도: ASHRAE 권고 범위 유지 — 습도 낮으면 정전기, 높으면 결로·부식",
     "UPS(단기 전원) + 발전기(장기 전원)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "네트워크 기초",
  "title": "OSI·TCP/IP 모델과 핵심 프로토콜",
  "ref": "CISSP Exam Outline 2024 Domain 4.1 · RFC 9293(TCP)",
  "body": [
   {
    "h": "OSI ↔ TCP/IP 매핑",
    "tb": {
     "head": [
      "OSI",
      "TCP/IP",
      "주요 기능"
     ],
     "rows": [
      [
       "7·6·5 응용·표현·세션",
       "Application",
       "서비스·인코딩·세션 관리"
      ],
      [
       "4 전송",
       "Transport(Host-to-Host)",
       "TCP 신뢰 전송 · UDP 비연결"
      ],
      [
       "3 네트워크",
       "Internet",
       "IP 주소·라우팅·ICMP"
      ],
      [
       "2·1 데이터링크·물리",
       "Link(Network Access)",
       "MAC·프레임·전송매체"
      ]
     ]
    }
   },
   {
    "h": "IPv4 vs IPv6",
    "li": [
     "IPv4 32비트, 사설 대역 10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16 (RFC 1918)",
     "IPv6 128비트, IPsec 지원 내장(필수 구현→권고로 완화) · ARP 대신 NDP",
     "전환 기술: 듀얼스택 · 터널링(6to4·Teredo) — 터널은 보안 장비 우회 위험"
    ]
   },
   {
    "h": "전송 매체와 토폴로지",
    "li": [
     "광섬유: 전자기 간섭(EMI) 없음·도청 어려움 · UTP: 저렴·EMI 취약",
     "토폴로지: 버스·링·스타·메시 — 메시는 가용성 높고 비용 큼",
     "CSMA/CD(유선 이더넷 충돌 탐지) vs CSMA/CA(무선 충돌 회피)"
    ]
   },
   {
    "h": "융합 프로토콜·신기술",
    "li": [
     "iSCSI · FCoE — 스토리지 프로토콜을 IP/이더넷으로",
     "VoIP: SIP(시그널링)+RTP(미디어) → SRTP로 보호",
     "SDN — 제어평면/데이터평면 분리, SD-WAN, VXLAN(오버레이)",
     "마이크로세그멘테이션 · Edge 네트워크 · 5G/셀룰러 (아웃라인 4.1 명시)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "네트워크 보안",
  "title": "네트워크 구성요소 보안과 분할",
  "ref": "CISSP Exam Outline 2024 Domain 4.2 · NIST SP 800-41(방화벽) · SP 800-207(Zero Trust)",
  "body": [
   {
    "h": "방화벽 유형",
    "tb": {
     "head": [
      "유형",
      "동작 계층",
      "특징"
     ],
     "rows": [
      [
       "Packet filter",
       "L3·L4",
       "ACL 기반, 상태 없음, 빠름"
      ],
      [
       "Stateful inspection",
       "L3·L4(+세션)",
       "세션 테이블로 응답 트래픽 추적"
      ],
      [
       "Application proxy",
       "L7",
       "연결 중계·내용 검사, 지연 증가"
      ],
      [
       "NGFW",
       "L3~L7",
       "앱 식별·IPS·사용자 인식 통합"
      ],
      [
       "WAF",
       "L7(HTTP)",
       "SQLi·XSS 등 웹 공격 차단"
      ]
     ]
    }
   },
   {
    "h": "분할 아키텍처",
    "li": [
     "DMZ(screened subnet) — 외부 공개 서비스 격리, 이중 방화벽 구성",
     "Bastion host — 외부에 노출된 강화(hardened) 호스트",
     "Jump box(점프 서버) — 관리망 접근 단일 통로, 세션 기록",
     "NAC — 접속 전 단말 상태(패치·백신) 검사 후 격리 VLAN 또는 허용",
     "Zero Trust — 위치 기반 신뢰 제거, 정책 결정점(PDP)·정책 집행점(PEP)"
    ]
   },
   {
    "h": "IDS/IPS 탐지 방식",
    "tb": {
     "head": [
      "방식",
      "장점",
      "단점"
     ],
     "rows": [
      [
       "시그니처",
       "알려진 공격 정확 탐지·낮은 오탐",
       "제로데이 탐지 불가"
      ],
      [
       "이상(anomaly)",
       "미지 공격 탐지 가능",
       "기준선 설정·오탐 많음"
      ],
      [
       "행위·휴리스틱",
       "패턴 변형 대응",
       "튜닝 필요"
      ]
     ]
    }
   },
   {
    "h": "가용성 설계",
    "li": [
     "이중화 링크·장비(HA 쌍) · 로드밸런서 · CDN",
     "엔드포인트 보안(EDR)도 4.2에 포함 — 네트워크 경계만으로는 부족"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "무선·원격 접속",
  "title": "보안 통신 채널 — 무선·VPN·원격 접속",
  "ref": "CISSP Exam Outline 2024 Domain 4.3 · IEEE 802.11/802.1X · RFC 4301(IPsec)",
  "body": [
   {
    "h": "무선 보안 표준",
    "tb": {
     "head": [
      "표준",
      "암호",
      "비고"
     ],
     "rows": [
      [
       "WEP",
       "RC4 + 24비트 IV",
       "폐기 — IV 재사용"
      ],
      [
       "WPA",
       "TKIP(RC4 기반)",
       "과도기 표준, 폐기"
      ],
      [
       "WPA2",
       "AES-CCMP",
       "PSK 오프라인 사전공격·KRACK 이슈"
      ],
      [
       "WPA3",
       "AES-CCMP/GCMP, SAE",
       "PFS·PMF 필수, Enterprise 192비트 모드"
      ]
     ]
    }
   },
   {
    "h": "IPsec 구성",
    "li": [
     "AH(프로토콜 51) — 무결성·출처 인증, NAT 비호환",
     "ESP(프로토콜 50) — 기밀성+무결성",
     "IKE(UDP 500, NAT-T 4500) — SA 협상·키 교환",
     "Transport mode(호스트 간, 페이로드 보호) / Tunnel mode(게이트웨이 간, 전체 패킷 캡슐화)"
    ]
   },
   {
    "h": "원격 접속·인증 프로토콜",
    "tb": {
     "head": [
      "프로토콜",
      "전송",
      "특징"
     ],
     "rows": [
      [
       "RADIUS",
       "UDP 1812/1813",
       "인증·인가 결합, 비밀번호만 암호화"
      ],
      [
       "TACACS+",
       "TCP 49",
       "AAA 분리, ★전체 패킷 암호화★, 장비 관리용"
      ],
      [
       "Diameter",
       "TCP/SCTP 3868",
       "RADIUS 후속, 모바일망"
      ],
      [
       "PAP / CHAP",
       "PPP",
       "PAP 평문 / CHAP 챌린지-응답"
      ]
     ]
    }
   },
   {
    "h": "기타 통신 채널",
    "li": [
     "VPN: IPsec · SSL/TLS VPN · WireGuard",
     "Split tunneling — 일부 트래픽만 VPN, 회사 통제 우회 위험",
     "블루투스 공격: Bluejacking(메시지) · Bluesnarfing(데이터 탈취) · Bluebugging(제어)",
     "협업 도구·원격 근무(4.3 명시) — 회의 암호화·접근 통제·데이터 공유 정책"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "인증",
  "title": "식별·인증·인가와 인증 요소",
  "ref": "CISSP Exam Outline Domain 5.2 · NIST SP 800-63B",
  "body": [
   {
    "h": "IAAA 흐름",
    "li": [
     "식별(Identification) — 주체가 신원을 주장(사용자 ID)",
     "인증(Authentication) — 주장을 증명(요소 검증)",
     "인가(Authorization) — 허용된 권한 결정",
     "책임추적성(Accountability) — 감사 로그로 행위를 개인에 귀속",
     "★고유 ID + 공유 계정 금지★가 책임추적성의 전제"
    ]
   },
   {
    "h": "인증 요소",
    "tb": {
     "head": [
      "유형",
      "예",
      "약점"
     ],
     "rows": [
      [
       "Type 1 지식",
       "비밀번호·PIN·보안 질문",
       "추측·피싱·재사용"
      ],
      [
       "Type 2 소유",
       "스마트카드·OTP 토큰·FIDO 키",
       "분실·도난"
      ],
      [
       "Type 3 생체",
       "지문·홍채·얼굴·음성",
       "오인식(FAR/FRR)·변경 불가"
      ],
      [
       "보조 요소",
       "위치·행동(타이핑 리듬)",
       "단독 사용 불가, 위험 점수 보조"
      ]
     ]
    }
   },
   {
    "h": "생체 인식 정확도",
    "li": [
     "FRR = Type I 오류(정당 사용자 거부)",
     "FAR = Type II 오류(부정 사용자 수락) — ★보안상 더 치명적★",
     "CER(EER) = FRR과 FAR이 같아지는 점 — 낮을수록 정확",
     "생체 등록(enrollment) 시간·처리량도 수용성 요소"
    ]
   },
   {
    "h": "비밀번호 정책 (NIST SP 800-63B 경향)",
    "li": [
     "길이 우선, 최소 8자(사용자 선택), 긴 패스프레이즈 허용",
     "주기적 강제 변경 지양 — ★침해 징후 시 변경★",
     "유출 비밀번호 목록 대조",
     "MFA 병행, 저장은 솔트 + 느린 해시"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "페더레이션",
  "title": "페더레이션·SSO·Kerberos",
  "ref": "CISSP Exam Outline Domain 5.3·5.6",
  "body": [
   {
    "h": "프로토콜 역할 구분",
    "tb": {
     "head": [
      "항목",
      "SAML 2.0",
      "OAuth 2.0",
      "OIDC"
     ],
     "rows": [
      [
       "목적",
       "인증·속성 어설션",
       "권한 위임",
       "인증"
      ],
      [
       "토큰",
       "XML 어설션",
       "액세스 토큰",
       "ID 토큰(JWT)"
      ],
      [
       "주 사용처",
       "기업 웹 SSO",
       "API 접근 위임",
       "소셜·모바일 로그인"
      ]
     ]
    }
   },
   {
    "h": "Kerberos 절차",
    "li": [
     "① 클라이언트 → AS: 인증 요청",
     "② AS → 클라이언트: TGT(+세션키) 발급",
     "③ 클라이언트 → TGS: TGT 제시, 서비스 티켓 요청",
     "④ TGS → 클라이언트: 서비스 티켓 발급",
     "⑤ 클라이언트 → 서비스: 서비스 티켓 제시, 접근",
     "약점: KDC 단일 장애점, 시간 동기화 필수, 패스워드 추측(오프라인) 위험"
    ]
   },
   {
    "h": "SSO의 장단점",
    "li": [
     "장점: 비밀번호 피로 감소, 중앙 정책·로그, 퇴사 시 일괄 차단",
     "단점: ★자격 증명 하나가 뚫리면 전부 노출★ → 강한 MFA 필수",
     "신뢰 관계(trust)는 계약·메타데이터 교환으로 수립"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "접근통제 모델",
  "title": "접근통제 모델과 계정 수명주기",
  "ref": "CISSP Exam Outline Domain 5.4·5.5",
  "body": [
   {
    "h": "모델 요약",
    "tb": {
     "head": [
      "모델",
      "핵심"
     ],
     "rows": [
      [
       "DAC",
       "소유자 재량, ACL"
      ],
      [
       "MAC",
       "레이블·허가, 시스템 강제"
      ],
      [
       "RBAC",
       "역할 기반, 직무분리 용이"
      ],
      [
       "Rule-based",
       "전역 규칙"
      ],
      [
       "ABAC",
       "속성·정책, 문맥 인식"
      ],
      [
       "Risk-based",
       "실시간 위험 기반 적응형"
      ]
     ]
    }
   },
   {
    "h": "원칙",
    "li": [
     "최소 권한(least privilege)",
     "알 필요(need to know)",
     "직무 분리(SoD)",
     "기본 거부(implicit deny)",
     "직무 순환·강제 휴가로 부정 탐지"
    ]
   },
   {
    "h": "계정 수명주기",
    "li": [
     "프로비저닝: 승인된 요청 → 신원 확인 → 최소 권한 부여",
     "검토: 정기 접근 검토, 관리자 인증(attestation)",
     "이동: 신규 직무 권한 부여 + ★이전 권한 회수★",
     "비활성화·삭제: 퇴사 즉시 비활성화, 보존 정책 후 삭제",
     "특권: PAM·JIT·세션 기록·비밀번호 자동 교체"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-1",
  "t": "평가 전략",
  "title": "평가·감사 전략 설계",
  "ref": "CISSP Exam Outline Domain 6.1·6.5",
  "body": [
   {
    "h": "평가 주체",
    "tb": {
     "head": [
      "유형",
      "수행자",
      "특징"
     ],
     "rows": [
      [
       "내부",
       "자체 감사·보안팀",
       "비용↓·조직 이해↑, 독립성↓"
      ],
      [
       "외부(2자)",
       "고객·파트너가 공급사 감사",
       "계약상 감사권(right to audit) 근거"
      ],
      [
       "제3자",
       "독립 감사·인증 기관",
       "독립성 최상, 규제·인증 목적"
      ]
     ]
    }
   },
   {
    "h": "전략 수립 절차",
    "li": [
     "목표·요구사항(규제·계약·리스크) 정의",
     "범위(scope)·자산·통제 선정",
     "방법(인터뷰·문서 검토·관찰·테스트)·표본 결정",
     "경영진 승인·RoE 확정",
     "수행 → 발견 사항 → 보고 → 시정 추적(follow-up)"
    ]
   },
   {
    "h": "지표",
    "li": [
     "KPI — 성과(예: 30일 내 치명 패치 적용률)",
     "KRI — 위험 선행 신호(예: 피싱 클릭률 추세)",
     "지표는 SMART하게, 경영진이 의사결정할 수 있는 형태로 보고",
     "프로세스 데이터: 계정 관리, 경영진 검토, 백업 검증, 교육 이수, DR/BC 훈련 결과"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-2",
  "t": "취약점·침투",
  "title": "취약점 평가와 침투 테스트",
  "ref": "CISSP Exam Outline Domain 6.2 · NIST SP 800-115",
  "body": [
   {
    "h": "비교",
    "tb": {
     "head": [
      "항목",
      "취약점 스캔",
      "침투 테스트"
     ],
     "rows": [
      [
       "목적",
       "알려진 취약점 식별",
       "악용 가능성·영향 실증"
      ],
      [
       "방식",
       "자동화",
       "수동 + 도구"
      ],
      [
       "빈도",
       "주기적·지속",
       "연 1회·중대 변경 시"
      ],
      [
       "위험",
       "낮음",
       "서비스 영향 가능 → 승인 필수"
      ]
     ]
    }
   },
   {
    "h": "NIST SP 800-115 침투 테스트 단계",
    "li": [
     "Planning — 규칙·승인·목표",
     "Discovery — 정보 수집, 취약점 분석",
     "Attack — 접근 획득·권한 상승·추가 발견(Discovery로 반복)",
     "Reporting — 발견 사항·위험·권고"
    ]
   },
   {
    "h": "지식 수준·팀",
    "li": [
     "Black / Gray / White box",
     "Red team(공격) · Blue team(방어) · Purple team(협업)",
     "취약점 점수: CVSS, 식별자: CVE, 취약점 유형: CWE",
     "인증(credentialed) 스캔이 더 정확"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-3",
  "t": "SW 테스트",
  "title": "소프트웨어 보안 테스트와 감사 보고서",
  "ref": "CISSP Exam Outline Domain 6.2·6.3·6.4 · AICPA SOC",
  "body": [
   {
    "h": "SW 테스트 기법",
    "li": [
     "SAST — 정적, 개발 초기",
     "DAST — 동적, 실행 중",
     "IAST — 런타임 계측",
     "퍼징 — Mutation / Generation",
     "Misuse case — 공격자 시나리오",
     "인터페이스 테스트 — API·UI·물리 인터페이스",
     "회귀 테스트 — 변경 후 기존 기능·통제 재확인"
    ]
   },
   {
    "h": "SOC 보고서",
    "tb": {
     "head": [
      "보고서",
      "핵심"
     ],
     "rows": [
      [
       "SOC 1",
       "재무보고 내부통제"
      ],
      [
       "SOC 2",
       "보안 등 TSC 상세"
      ],
      [
       "SOC 3",
       "공개용 요약"
      ],
      [
       "Type I",
       "시점 설계"
      ],
      [
       "Type II",
       "기간 운영 효과성"
      ]
     ]
    }
   },
   {
    "h": "보고·예외 처리",
    "li": [
     "발견 사항은 위험 등급·근본 원인·권고 포함",
     "경영진은 시정·수용(예외 승인) 결정 — 예외는 기한·보완통제 문서화",
     "윤리적 공개(ethical disclosure) — 외부 발견 취약점은 벤더에 책임 있게 통보"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-1",
  "t": "조사·증거",
  "title": "조사·디지털 포렌식·증거",
  "ref": "CISSP Exam Outline 7.1 · RFC 3227 · ISO/IEC 27037",
  "body": [
   {
    "h": "조사 유형과 입증 기준",
    "tb": {
     "head": [
      "유형",
      "주체·목적",
      "입증 기준"
     ],
     "rows": [
      [
       "행정(Administrative)",
       "내부 정책 위반·운영 문제",
       "조직 내부 기준"
      ],
      [
       "형사(Criminal)",
       "법 위반, 수사기관 주도",
       "★합리적 의심 없는 증명★"
      ],
      [
       "민사(Civil)",
       "당사자 간 분쟁·손해배상",
       "증거의 우월(preponderance)"
      ],
      [
       "규제(Regulatory)",
       "정부기관·규제 준수 위반",
       "기관·사안별 상이"
      ]
     ]
    }
   },
   {
    "h": "증거 유형",
    "li": [
     "최우선 증거(Best evidence) — 원본 문서. 사본은 원본 부재 사유가 있을 때 허용",
     "2차 증거(Secondary) — 사본·구두 설명",
     "직접 증거 / 정황 증거(circumstantial) / 보강 증거(corroborative)",
     "전문 증거(Hearsay) — 원칙적 배제. 업무상 통상 기록(business records)은 예외로 인정되는 경우가 많다"
    ]
   },
   {
    "h": "포렌식 절차 원칙",
    "li": [
     "식별 → 보존 → 수집 → 검사 → 분석 → 보고",
     "원본은 쓰기 방지(write blocker) 후 ★비트 단위 이미지★ 생성, 해시(SHA-256 등)로 무결성 입증",
     "분석은 원본이 아닌 사본으로 수행",
     "휘발성 순서(RFC 3227) 준수, Chain of custody 전 과정 기록",
     "ISO/IEC 27037 — 디지털 증거 식별·수집·획득·보존 지침"
    ]
   },
   {
    "h": "법적 고려",
    "li": [
     "함정 수사(entrapment)는 불법, 유인(enticement·허니팟)은 일반적으로 합법",
     "eDiscovery — EDRM 모델: 정보 거버넌스→식별→보존→수집→처리→검토→분석→생산→제시",
     "법적 보존 조치(legal hold) 시 정상 파기 일정 중단"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-2",
  "t": "로깅·모니터링",
  "title": "로깅·모니터링·운영 통제",
  "ref": "CISSP Exam Outline 7.2·7.3·7.4·7.5",
  "body": [
   {
    "h": "모니터링 기술",
    "tb": {
     "head": [
      "기술",
      "역할",
      "핵심"
     ],
     "rows": [
      [
       "SIEM",
       "로그 수집·상관분석·경보",
       "NTP 시간 동기화 필수"
      ],
      [
       "SOAR",
       "대응 자동화·플레이북",
       "격리·티켓 자동화"
      ],
      [
       "IDS/IPS",
       "네트워크·호스트 침입 탐지/차단",
       "서명·이상 기반"
      ],
      [
       "UEBA",
       "행위 기준선 이탈 탐지",
       "내부자 위협"
      ],
      [
       "Egress monitoring·DLP",
       "외부 유출 감시",
       "데이터 유출 방지"
      ],
      [
       "Threat intelligence·Threat hunting",
       "위협 정보 활용·능동적 탐색",
       "IoC·TTP(MITRE ATT&CK)"
      ]
     ]
    }
   },
   {
    "h": "로그 관리",
    "li": [
     "클리핑 레벨(clipping level) — 임계치 이하 이벤트는 무시해 경보 피로 감소",
     "로그 무결성 — 별도 로그 서버·WORM 저장·해시 체인",
     "보존 기간은 법·규제·정책에 맞춤",
     "로그 검토는 정기적으로, 결과는 책임 추적(accountability)의 근거"
    ]
   },
   {
    "h": "기본 운영 보안 개념",
    "li": [
     "Need-to-know·최소 권한",
     "직무 분리(SoD)·2인 통제(two-person control)",
     "직무 순환·강제 휴가 — 탐지 통제",
     "특권 계정 관리(PAM)·정기 접근 재검토",
     "SLA·서비스 수준 모니터링"
    ]
   },
   {
    "h": "구성·변경·패치 관리",
    "li": [
     "구성 관리: 프로비저닝 → 기준선 → 자동화(IaC) → 드리프트 점검",
     "변경 관리: 요청 → 검토·영향분석 → 승인(CAB) → 테스트 → 구현 → 문서화",
     "패치 관리: 평가 → 테스트 → 승인 → 배포 → 검증 → 보고"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-3",
  "t": "사고 대응",
  "title": "사고 관리·탐지 및 예방 조치",
  "ref": "CISSP Exam Outline 7.6·7.7 · NIST SP 800-61",
  "body": [
   {
    "h": "ISC2 사고 관리 7단계",
    "tb": {
     "head": [
      "단계",
      "내용"
     ],
     "rows": [
      [
       "1 Detection",
       "로그·경보·사용자 신고로 이벤트 인지, 사고 여부 판정"
      ],
      [
       "2 Response",
       "CSIRT 활성화, 초기 분석, 증거 보존 시작"
      ],
      [
       "3 Mitigation",
       "★격리(containment)★로 확산 차단"
      ],
      [
       "4 Reporting",
       "내부(경영진)·외부(규제기관·고객) 보고 — 법정 기한 준수"
      ],
      [
       "5 Recovery",
       "시스템을 정상 운영 상태로 복귀"
      ],
      [
       "6 Remediation",
       "근본 원인 분석(RCA), 취약점 제거"
      ],
      [
       "7 Lessons learned",
       "사후 검토, 절차·통제 개선"
      ]
     ]
    }
   },
   {
    "h": "탐지·예방 조치",
    "li": [
     "방화벽·IDS/IPS·화이트리스트(allow list)·블랙리스트(deny list)",
     "샌드박스 — 의심 코드를 격리 환경에서 실행·관찰",
     "허니팟·허니넷 — 공격자 유인·분석(유인은 합법, 함정은 불법)",
     "안티멀웨어·EDR",
     "머신러닝·AI 기반 탐지 도구"
    ]
   },
   {
    "h": "이벤트 vs 사고",
    "li": [
     "이벤트(event) — 관찰 가능한 모든 사건",
     "부정적 이벤트(adverse event) — 부정적 결과를 가진 이벤트",
     "사고(incident) — 보안 정책 위반 또는 CIA에 대한 위협이 현실화된 이벤트"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-4",
  "t": "복구·BCP",
  "title": "복구 전략·DRP·BCP 연습·물리 보안·인적 안전",
  "ref": "CISSP Exam Outline 7.10~7.15",
  "body": [
   {
    "h": "복구 전략",
    "li": [
     "백업: 전체·증분·차등, 3-2-1 규칙(사본 3개·매체 2종·오프사이트 1개)",
     "복구 사이트: Hot·Warm·Cold·Mobile·Cloud, 상호 원조 협정",
     "다중 처리 거점·고가용성(클러스터링·로드밸런싱)·RAID",
     "RPO는 데이터 손실 허용량 → 백업 주기 결정, RTO는 복구 시간 → 사이트 유형 결정"
    ]
   },
   {
    "h": "DR 절차",
    "li": [
     "대응 → 인력 소집 → 통신 → 평가 → 복원 → 교육·인식",
     "복구 팀은 주 사이트 → 대체 사이트 전환, 복원(salvage) 팀은 주 사이트 복구",
     "대체 사이트에서 주 사이트로 복귀할 때는 ★가장 덜 중요한 업무부터★ 옮겨 신규 환경을 검증"
    ]
   },
   {
    "h": "DR 테스트 유형",
    "tb": {
     "head": [
      "유형",
      "운영 영향",
      "비고"
     ],
     "rows": [
      [
       "Read-through/Checklist",
       "없음",
       "문서 배포·검토"
      ],
      [
       "Walk-through/Tabletop",
       "없음",
       "관계자 토의"
      ],
      [
       "Simulation",
       "없음",
       "시나리오 기반 연습"
      ],
      [
       "Parallel",
       "없음(대체 사이트 실가동)",
       "주 사이트 유지"
      ],
      [
       "Full interruption",
       "큼",
       "주 사이트 중단"
      ]
     ]
    }
   },
   {
    "h": "물리 보안·인적 안전",
    "li": [
     "인명 안전 최우선 — 비상 시 출입문은 fail-safe(개방)",
     "출장 보안·긴급 상황 관리·협박(duress) 신호",
     "보안 교육·인식, 경계·출입 통제, CCTV"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-1",
  "t": "SDLC·성숙도",
  "title": "SDLC·개발 방법론·성숙도 모델",
  "ref": "CISSP Exam Outline 8.1",
  "body": [
   {
    "h": "개발 방법론",
    "tb": {
     "head": [
      "방법론",
      "특징",
      "보안 관점"
     ],
     "rows": [
      [
       "Waterfall",
       "순차 진행",
       "요구사항 단계에서 보안 요구 확정"
      ],
      [
       "Spiral",
       "반복 + 위험 분석",
       "반복마다 위험 평가"
      ],
      [
       "Agile/Scrum",
       "스프린트·백로그",
       "보안 사용자 스토리·악용 사례(abuse case)"
      ],
      [
       "DevOps/DevSecOps",
       "CI/CD 자동화",
       "파이프라인 보안 검사 자동화"
      ]
     ]
    }
   },
   {
    "h": "성숙도 모델",
    "li": [
     "CMM/CMMI: 1 Initial → 2 Repeatable(Managed) → 3 Defined → 4 Managed(Quantitatively Managed) → 5 Optimizing",
     "OWASP SAMM: 거버넌스·설계·구현·검증·운영 5개 비즈니스 기능",
     "BSIMM: 실제 조직의 보안 활동을 관찰·측정한 기술적 모델"
    ]
   },
   {
    "h": "운영·유지보수 및 변경 관리",
    "li": [
     "변경 관리: 요청 통제 → 변경 통제 → 릴리스 통제",
     "통합 제품팀(IPT) — 다기능 팀 협업",
     "폐기 단계에서도 데이터 삭제·라이선스 정리 필요"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-2",
  "t": "보안 코딩·취약점",
  "title": "보안 코딩·취약점·테스트",
  "ref": "CISSP Exam Outline 8.2·8.3·8.5 · OWASP Top 10 2021",
  "body": [
   {
    "h": "주요 취약점과 대응",
    "tb": {
     "head": [
      "취약점",
      "원인",
      "대응"
     ],
     "rows": [
      [
       "SQL Injection",
       "입력이 쿼리로 해석",
       "매개변수화 쿼리·저장 프로시저·입력 검증"
      ],
      [
       "XSS",
       "출력 시 스크립트 실행",
       "출력 인코딩·CSP·입력 검증"
      ],
      [
       "CSRF",
       "인증된 세션으로 위조 요청",
       "Anti-CSRF 토큰·SameSite 쿠키"
      ],
      [
       "Buffer overflow",
       "경계 검사 부재",
       "경계 검사·안전한 함수·ASLR·DEP"
      ],
      [
       "Race condition (TOCTOU)",
       "검사 시점과 사용 시점 차이",
       "원자적 연산·잠금"
      ],
      [
       "SSRF",
       "서버가 임의 URL 요청",
       "목적지 허용 목록·네트워크 분리"
      ]
     ]
    }
   },
   {
    "h": "API 보안",
    "li": [
     "인증·인가(OAuth 2.0·OIDC), 객체 수준 권한 검증(BOLA 방지)",
     "속도 제한(rate limiting)·입력 검증·TLS",
     "API 게이트웨이로 정책 일원화"
    ]
   },
   {
    "h": "보안 코딩 원칙",
    "li": [
     "서버 측 입력 검증(허용 목록)",
     "출력 인코딩",
     "안전한 오류 처리 — 상세 오류를 사용자에게 노출하지 않음",
     "최소 권한 실행",
     "하드코딩된 자격증명 금지·비밀 관리 도구 사용",
     "코드 서명으로 무결성 확인"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-3",
  "t": "획득·공급망",
  "title": "획득 소프트웨어 보안·DB 보안",
  "ref": "CISSP Exam Outline 8.4 · 8.2",
  "body": [
   {
    "h": "획득 소프트웨어 유형별 위험",
    "tb": {
     "head": [
      "유형",
      "위험",
      "통제"
     ],
     "rows": [
      [
       "COTS",
       "소스 비공개, 공급사 의존",
       "보안 평가·에스크로·계약"
      ],
      [
       "오픈소스",
       "취약 구성요소·라이선스",
       "SCA·SBOM·패치 추적"
      ],
      [
       "서드파티 외주",
       "보안 수준 상이",
       "계약 보안 요구·감사권·코드 검토"
      ],
      [
       "관리형 서비스(SaaS·PaaS·IaaS)",
       "공유책임·가시성 제한",
       "SLA·SOC 2 보고서·구성 관리"
      ]
     ]
    }
   },
   {
    "h": "DB 보안",
    "li": [
     "ACID 트랜잭션 — 원자성·일관성·고립성·지속성",
     "동시성 제어 — 잠금(locking)으로 갱신 손실·더티 리드 방지",
     "집계·추론 공격 — 다중인스턴스화·셀 억제·뷰·노이즈",
     "뷰(view)로 접근 범위 제한"
    ]
   },
   {
    "h": "공급망 보안",
    "li": [
     "SBOM(SPDX·CycloneDX)",
     "코드 서명·빌드 무결성",
     "의존성 혼동(dependency confusion)·타이포스쿼팅 주의"
    ]
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "정의·용어 기억 — 반드시 맞혀야 하는 문항",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "개념 구분·적용 — 합격선을 가르는 문항",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "시나리오·관점(FIRST·BEST·MOST) — 변별력 문항",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 1,
  "q": "보안의 '부인방지(nonrepudiation)'를 제공하는 가장 적합한 기술은?",
  "c": [
   "송신자 개인키로 생성한 전자서명",
   "TLS 세션 암호화",
   "대칭키 기반 MAC",
   "해시 함수 단독 사용"
  ],
  "a": 0,
  "e": "전자서명은 서명자만 가진 개인키로 생성되므로 부인할 수 없다. MAC 은 양측이 같은 키를 공유하므로 부인방지가 안 된다."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 1,
  "q": "정책 문서 중 강제성이 없는 권고 사항은?",
  "c": [
   "Procedure",
   "Guideline",
   "Baseline",
   "Standard"
  ],
  "a": 1,
  "e": "Guideline 만 선택적 권고. 나머지는 필수."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 2,
  "q": "조직이 합리적인 보안 통제를 '실제로 시행'하는 것을 무엇이라 하는가?",
  "c": [
   "Due Diligence",
   "Due Process",
   "Due Care",
   "Due Authority"
  ],
  "a": 2,
  "e": "Due Care = 합리적 보호 조치의 실행. Due Diligence = 조사·점검·검증."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 3,
  "q": "Who holds ultimate accountability for the protection of an organization's information assets?",
  "c": [
   "The CISO",
   "The internal auditor",
   "The data custodian",
   "Senior management"
  ],
  "a": 3,
  "e": "Accountability cannot be delegated; senior management is ultimately accountable. CISO and custodians hold delegated responsibilities."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 2,
  "q": "보안 기능이 조직의 목표와 맞지 않을 때 가장 먼저 해야 할 일은?",
  "c": [
   "보안 전략을 비즈니스 전략·목표·미션에 정렬",
   "외부 감사 의뢰",
   "최신 보안 기술 도입",
   "보안 예산 삭감"
  ],
  "a": 0,
  "e": "거버넌스 원칙(1.3) — 보안은 비즈니스 목표를 지원하도록 정렬되어야 한다."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 3,
  "q": "A company is acquiring another firm. What should the security manager do FIRST regarding the target's environment?",
  "c": [
   "Immediately connect both networks to enable collaboration",
   "Assess the target's security posture and risks before integration",
   "Terminate the target's security staff",
   "Replace all of the target's security tools"
  ],
  "a": 1,
  "e": "M&A requires assessing the acquired organization's security posture and risks before integration (1.3 organizational processes)."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 2,
  "q": "서버 설정에 적용해야 할 '최소 보안 수준'을 정의한 문서는?",
  "c": [
   "Procedure",
   "Guideline",
   "Baseline",
   "Policy"
  ],
  "a": 2,
  "e": "Baseline = 시스템별 최소 보안 설정 수준."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 3,
  "q": "NIST Cybersecurity Framework 2.0 에서 새로 추가된 기능(Function)은?",
  "c": [
   "Recover",
   "Detect",
   "Identify",
   "Govern"
  ],
  "a": 3,
  "e": "CSF 2.0(2024-02)은 Govern 을 추가해 Govern·Identify·Protect·Detect·Respond·Recover 6개 기능."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 1,
  "q": "무결성(integrity)을 검증하는 데 주로 쓰이는 것은?",
  "c": [
   "해시 값 비교",
   "부하 분산",
   "데이터 마스킹",
   "RAID 0"
  ],
  "a": 0,
  "e": "해시 비교로 변경 여부를 탐지한다. RAID 0 은 이중화가 없다."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 1,
  "q": "(ISC)² 윤리강령 규범 중 가장 우선하는 것은?",
  "c": [
   "전문직의 발전과 보호",
   "사회·공익·공공 신뢰·인프라 보호",
   "명예롭고 정직하게 행동",
   "주인에게 성실·유능한 서비스 제공"
  ],
  "a": 1,
  "e": "4규범은 순서대로 우선한다. 1순위는 사회 보호."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "형사 사건에서 요구되는 입증 기준은?",
  "c": [
   "명백하고 설득력 있는 증거",
   "증거의 우세",
   "합리적 의심의 여지가 없는 증명",
   "상당한 이유"
  ],
  "a": 2,
  "e": "형사 = beyond a reasonable doubt. 민사 = preponderance of the evidence."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 3,
  "q": "등록 없이 비밀 유지 노력만으로 보호되며, 소스코드 공개 없이 알고리즘을 보호하기에 적합한 것은?",
  "c": [
   "특허",
   "상표",
   "저작권",
   "영업비밀"
  ],
  "a": 3,
  "e": "영업비밀은 등록·공개가 필요 없다. 특허는 내용 공개가 대가."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 1,
  "q": "미국 특허의 일반적 보호 기간은?",
  "c": [
   "출원일부터 20년",
   "갱신 시 무기한",
   "출원일부터 10년",
   "저자 사후 70년"
  ],
  "a": 0,
  "e": "실용특허는 출원일부터 20년."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "Under the GDPR, within what time should a controller notify the supervisory authority of a personal data breach, where feasible?",
  "c": [
   "24 hours",
   "72 hours",
   "30 days",
   "48 hours"
  ],
  "a": 1,
  "e": "GDPR Art.33: without undue delay and, where feasible, not later than 72 hours after becoming aware."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "PCI DSS 에 대한 설명으로 옳은 것은?",
  "c": [
   "EU 규정이다",
   "미국 연방법이다",
   "카드 업계가 정한 표준으로 계약을 통해 강제된다",
   "ISO 국제표준이다"
  ],
  "a": 2,
  "e": "PCI DSS 는 PCI SSC 의 업계 표준이며 법률이 아니다."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 3,
  "q": "A multinational company plans to export software containing strong encryption. Which framework is MOST relevant to review?",
  "c": [
   "ISO/IEC 27018",
   "SOX Section 404",
   "HIPAA Privacy Rule",
   "Wassenaar Arrangement and national export control regulations"
  ],
  "a": 3,
  "e": "Encryption is a dual-use item governed by export controls (Wassenaar, US EAR)."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "상장기업의 재무보고 내부통제를 규정한 미국 법은?",
  "c": [
   "SOX",
   "GLBA",
   "FERPA",
   "HIPAA"
  ],
  "a": 0,
  "e": "Sarbanes-Oxley Act — 재무보고 내부통제(Section 404)."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 3,
  "q": "직원의 내부 정책 위반 여부를 조사하는 수사 유형에서 가장 중요한 고려사항은?",
  "c": [
   "합리적 의심의 여지 없는 입증",
   "조직의 내부 정책·절차 준수와 증거의 적절한 보존",
   "규제기관 사전 승인",
   "법원 영장 확보"
  ],
  "a": 1,
  "e": "행정(administrative) 조사는 내부 정책 기준. 다만 형사로 확대될 수 있어 증거 보존(Chain of custody)이 중요."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 1,
  "q": "자산가치 $100,000, 노출계수 40%, 연간 발생률 0.5 일 때 ALE 는?",
  "c": [
   "$40,000",
   "$200,000",
   "$20,000",
   "$50,000"
  ],
  "a": 2,
  "e": "SLE = 100,000 × 0.4 = 40,000 · ALE = 40,000 × 0.5 = 20,000."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "사이버 보험 가입은 어떤 위험 대응 전략인가?",
  "c": [
   "수용",
   "완화",
   "회피",
   "전가(공유)"
  ],
  "a": 3,
  "e": "재무적 손실을 제3자에게 전가. 법적 책임은 남는다."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "적법한 위험 대응 전략이 아닌 것은?",
  "c": [
   "Ignore",
   "Mitigate",
   "Avoid",
   "Accept"
  ],
  "a": 0,
  "e": "무시(Ignore/Reject)는 적법한 대응이 아니다."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 3,
  "q": "ALE 가 $50,000 에서 통제 도입 후 $10,000 로 줄고 통제의 연간 비용이 $45,000 이다. 올바른 판단은?",
  "c": [
   "도입한다 — 비용보다 감소분이 크다",
   "도입하지 않는다 — 통제 가치가 음수(−$5,000)",
   "도입한다 — ALE 가 80% 감소",
   "판단할 수 없다"
  ],
  "a": 1,
  "e": "통제 가치 = 50,000 − 10,000 − 45,000 = −5,000. 비용이 효익보다 크다."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "경고 표지판, 보안 카메라 '촬영 중' 안내문은 주로 어떤 통제 기능인가?",
  "c": [
   "탐지",
   "복구",
   "억제",
   "교정"
  ],
  "a": 2,
  "e": "Deterrent — 공격 의지를 꺾는다. 실제 녹화 영상 분석은 탐지."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "주 통제를 적용할 수 없을 때 동등한 수준의 보호를 제공하기 위해 쓰는 통제는?",
  "c": [
   "지시 통제",
   "복구 통제",
   "예방 통제",
   "보상 통제"
  ],
  "a": 3,
  "e": "Compensating control."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 3,
  "q": "NIST RMF(SP 800-37 Rev.2)의 첫 단계는?",
  "c": [
   "Prepare",
   "Assess",
   "Select",
   "Categorize"
  ],
  "a": 0,
  "e": "Rev.2 에서 Prepare 가 추가된 7단계."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "STRIDE 의 'Repudiation' 위협에 대응하는 보안 속성은?",
  "c": [
   "가용성",
   "부인방지",
   "인가",
   "기밀성"
  ],
  "a": 1,
  "e": "Repudiation ↔ Nonrepudiation(감사로그·전자서명)."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 3,
  "q": "Which threat modeling methodology is a seven-stage, risk-centric approach aligning business objectives with technical requirements?",
  "c": [
   "Trike",
   "DREAD",
   "PASTA",
   "STRIDE"
  ],
  "a": 2,
  "e": "PASTA = Process for Attack Simulation and Threat Analysis, seven stages, risk-centric."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 3,
  "q": "공급망 위험관리(SCRM)에서 하드웨어 위조·변조 위험을 줄이는 가장 적절한 조치는?",
  "c": [
   "보증기간 연장",
   "구매 후 즉시 배치",
   "저가 공급자 우선 선택",
   "신뢰할 수 있는 공급자 평가·인증된 유통경로 사용·구성요소 검증"
  ],
  "a": 3,
  "e": "공급자 평가, 인증 유통경로, 검증이 핵심. SBOM 은 소프트웨어 측면."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 3,
  "q": "The MOST important factor when selecting security controls is that they:",
  "c": [
   "Are cost-effective and reduce risk to an acceptable level aligned with business objectives",
   "Use the newest technology",
   "Eliminate all risk",
   "Are recommended by the vendor"
  ],
  "a": 0,
  "e": "Risk can't be eliminated; controls should be cost-justified and bring risk within appetite."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "정성적 위험 분석의 특징으로 옳은 것은?",
  "c": [
   "금전 수치로 ALE 를 산출한다",
   "상·중·하 등 등급과 전문가 판단을 사용한다",
   "항상 정량 분석보다 정확하다",
   "자산 가치 산정이 필수다"
  ],
  "a": 1,
  "e": "정성 = 시나리오·등급·델파이 기법 등. 빠르지만 주관적."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 3,
  "q": "경영진이 잔여위험을 수용할 때 반드시 필요한 것은?",
  "c": [
   "보험 가입",
   "외부 감사 결과 대기",
   "위험 인지 후 공식 승인·문서화",
   "위험을 문서화하지 않는 것"
  ],
  "a": 2,
  "e": "수용은 인지·승인·문서화가 전제."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 1,
  "q": "허용 가능한 최대 데이터 손실(백업 시점)을 정의하는 지표는?",
  "c": [
   "MTD",
   "RTO",
   "WRT",
   "RPO"
  ],
  "a": 3,
  "e": "RPO = Recovery Point Objective."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 2,
  "q": "MTD 가 24시간, WRT 가 6시간일 때 RTO 의 최댓값은?",
  "c": [
   "18시간",
   "30시간",
   "6시간",
   "24시간"
  ],
  "a": 0,
  "e": "RTO + WRT ≤ MTD → RTO ≤ 18시간."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 2,
  "q": "BCP 프로젝트의 성공에 가장 중요한 요소는?",
  "c": [
   "외부 컨설턴트",
   "고위 경영진의 지원과 승인",
   "최신 백업 장비",
   "핫 사이트 계약"
  ],
  "a": 1,
  "e": "경영진 지원 없이 자원·권한 확보 불가."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 2,
  "q": "BIA 의 주요 목적은?",
  "c": [
   "백업 매체 선정",
   "침해사고 원인 분석",
   "핵심 업무와 중단 영향·복구 우선순위 식별",
   "취약점 스캔 수행"
  ],
  "a": 2,
  "e": "BIA 는 핵심 업무·영향·MTD·RTO·RPO 를 도출."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 3,
  "q": "During a disaster, what should be the FIRST priority of the business continuity team?",
  "c": [
   "Restoring the most profitable system",
   "Notifying the media",
   "Activating the hot site",
   "Ensuring the safety of personnel"
  ],
  "a": 3,
  "e": "Human safety is always the top priority in ISC2 questions."
 },
 {
  "s": "s1",
  "t": "인적보안·교육",
  "d": 1,
  "q": "부정행위 '탐지'와 공모 억제에 효과적인 인적 통제는?",
  "c": [
   "직무 순환과 의무 휴가",
   "보안 서약서",
   "NDA",
   "신원조회"
  ],
  "a": 0,
  "e": "순환·의무휴가 중 다른 사람이 업무를 맡아 부정이 드러난다."
 },
 {
  "s": "s1",
  "t": "인적보안·교육",
  "d": 2,
  "q": "직원이 해고될 때 가장 먼저 수행해야 할 것은?",
  "c": [
   "급여 정산",
   "계정·접근 권한 즉시 비활성화",
   "추천서 작성",
   "퇴직 면담 일정 수립"
  ],
  "a": 1,
  "e": "특히 비자발적 퇴직은 통보와 동시에 접근을 차단한다."
 },
 {
  "s": "s1",
  "t": "인적보안·교육",
  "d": 3,
  "q": "Which BEST describes the difference between security awareness and training?",
  "c": [
   "They are identical",
   "Training is optional; awareness is mandatory only for IT",
   "Awareness focuses attention on security (what); training builds skills to perform tasks (how)",
   "Awareness teaches specific skills; training changes attitudes"
  ],
  "a": 2,
  "e": "Awareness = what, Training = how, Education = why/in-depth."
 },
 {
  "s": "s1",
  "t": "인적보안·교육",
  "d": 3,
  "q": "보안 인식 프로그램의 효과를 확인하는 가장 좋은 방법은?",
  "c": [
   "교재 페이지 수 증가",
   "교육 이수자 수 집계",
   "연 1회 서명 수집",
   "피싱 시뮬레이션 클릭률 등 행동 지표의 주기적 측정"
  ],
  "a": 3,
  "e": "효과는 행동 변화 지표로 측정하고 주기적으로 개선(1.13)."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 1,
  "q": "정부 기밀 분류에서 공개 시 '예외적으로 중대한 피해(exceptionally grave damage)'를 초래하는 등급은?",
  "c": [
   "Top Secret",
   "Unclassified",
   "Confidential",
   "Secret"
  ],
  "a": 0,
  "e": "TS = exceptionally grave, Secret = serious, Confidential = damage."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 1,
  "q": "데이터 분류 등급을 결정할 책임자는?",
  "c": [
   "최종 사용자",
   "데이터 소유자(Owner)",
   "보안 감사인",
   "데이터 관리자(Custodian)"
  ],
  "a": 1,
  "e": "Owner 가 분류·접근 승인."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 2,
  "q": "자산 분류 프로그램에서 가장 먼저 수행해야 하는 것은?",
  "c": [
   "암호화 도입",
   "DLP 구축",
   "자산 인벤토리 작성과 소유자 식별",
   "보존 기간 설정"
  ],
  "a": 2,
  "e": "무엇이 있는지 모르면 분류할 수 없다."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 2,
  "q": "데이터 분류 등급을 정하는 주된 기준은?",
  "c": [
   "데이터 생성 비용",
   "생성 부서의 규모",
   "파일 크기",
   "가치·민감도·공개 시 피해"
  ],
  "a": 3,
  "e": "민감도와 피해 수준이 기준."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 3,
  "q": "What is the PRIMARY purpose of labeling classified media?",
  "c": [
   "To ensure appropriate handling according to its classification",
   "To meet warranty requirements",
   "To track media costs",
   "To speed up backups"
  ],
  "a": 0,
  "e": "Marking/labeling communicates classification so people and systems apply the right handling."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 3,
  "q": "분류 단계를 지나치게 많이 둔 조직에서 나타날 가능성이 가장 큰 문제는?",
  "c": [
   "보안 수준이 자동으로 향상된다",
   "관리 복잡성·비용이 증가하고 일관된 적용이 어려워진다",
   "암호화가 불필요해진다",
   "법적 책임이 사라진다"
  ],
  "a": 1,
  "e": "등급은 업무에 필요한 최소 수준으로 단순하게."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 2,
  "q": "등급별 '취급 요구사항(handling requirements)'에 포함되지 않는 것은?",
  "c": [
   "파기 방법",
   "저장·전송 방법",
   "직원 연봉 책정",
   "복제·인쇄 제한"
  ],
  "a": 2,
  "e": "취급 요구는 저장·전송·접근·복제·파기."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 3,
  "q": "An employee finds a report marked 'Confidential' that no longer appears sensitive. What should happen?",
  "c": [
   "The data custodian reclassifies it",
   "It is deleted immediately",
   "The employee downgrades it",
   "The data owner reviews and approves any reclassification"
  ],
  "a": 3,
  "e": "Only the owner can approve reclassification/declassification."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 1,
  "q": "개인정보 처리의 목적과 수단을 결정하는 주체는(GDPR)?",
  "c": [
   "Controller",
   "Processor",
   "Custodian",
   "Data subject"
  ],
  "a": 0,
  "e": "Controller."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 2,
  "q": "백업 수행·복구 테스트·접근권한 설정 등 일상적 보호를 수행하는 역할은?",
  "c": [
   "Data subject",
   "Data custodian",
   "Auditor",
   "Data owner"
  ],
  "a": 1,
  "e": "Custodian = 기술적 운영."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 3,
  "q": "기업이 클라우드 SaaS 에 고객 개인정보 처리를 맡길 때 일반적 역할 관계는?",
  "c": [
   "둘 다 Data subject",
   "기업 = Processor, CSP = Controller",
   "기업 = Controller, CSP = Processor",
   "CSP 가 최종 책임"
  ],
  "a": 2,
  "e": "위탁 처리자는 Processor, 책임은 Controller 에 남는다."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 3,
  "q": "A cloud provider processing data on behalf of a company suffers a breach. Who retains accountability for protecting the personal data toward data subjects?",
  "c": [
   "Only the cloud provider",
   "No one",
   "The data subjects",
   "The data controller (the company)"
  ],
  "a": 3,
  "e": "The controller remains accountable, though processors also have obligations under contract and law."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 3,
  "q": "데이터 소유자에 대한 설명으로 옳은 것은?",
  "c": [
   "보통 해당 업무를 책임지는 관리자이며 보호 수준을 결정한다",
   "분류 권한이 없다",
   "보통 IT 운영 담당자다",
   "데이터 주체와 같다"
  ],
  "a": 0,
  "e": "Owner = 업무 관리자."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 1,
  "q": "SSD 를 안전하게 소거하는 방법으로 부적절한 것은?",
  "c": [
   "암호 소거(crypto erase)",
   "디가우징",
   "물리적 파쇄",
   "제조사 Secure Erase 명령"
  ],
  "a": 1,
  "e": "SSD 는 자기 매체가 아니어서 디가우징 무효."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "NIST SP 800-88 에서 실험실 수준의 복구 기법까지 막는 소거 수준은?",
  "c": [
   "Format",
   "Clear",
   "Purge",
   "Delete"
  ],
  "a": 2,
  "e": "Purge = 실험실 수준 복구 방지."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "매체를 조직 외부로 반출해 재사용할 때 최소한 요구되는 소거 수준은(NIST SP 800-88 관점)?",
  "c": [
   "Quick format",
   "Clear",
   "Delete",
   "Purge"
  ],
  "a": 3,
  "e": "외부 재사용 시 Purge 이상이 일반적 권고."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "데이터 삭제 후에도 매체에 남는 잔여 데이터를 무엇이라 하는가?",
  "c": [
   "Data remanence",
   "Data lineage",
   "Data drift",
   "Data sovereignty"
  ],
  "a": 0,
  "e": "Remanence."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "보존 기간이 지난 데이터를 계속 보관할 때의 가장 큰 위험은?",
  "c": [
   "저장 비용 감소",
   "법적 증거개시(eDiscovery) 부담과 유출 시 피해 확대",
   "가용성 향상",
   "백업 속도 향상"
  ],
  "a": 1,
  "e": "불필요한 보관은 책임만 키운다."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 3,
  "q": "Which method is MOST appropriate for sanitizing data stored in a public cloud where physical media cannot be accessed?",
  "c": [
   "Degaussing",
   "Overwriting with zeros by the customer",
   "Cryptographic erasure (crypto-shredding)",
   "Physical shredding"
  ],
  "a": 2,
  "e": "Destroying the encryption keys renders the data unrecoverable when physical access isn't possible."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "제조사가 제품의 보안 패치 제공을 중단하는 시점을 가리키는 것은?",
  "c": [
   "SLA",
   "MTBF",
   "EOL",
   "EOS"
  ],
  "a": 3,
  "e": "End-of-Support. EOL 은 판매·생산 중단."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 3,
  "q": "지원이 종료(EOS)된 산업 제어 시스템을 즉시 교체할 수 없을 때 가장 적절한 조치는?",
  "c": [
   "네트워크 격리·모니터링 등 보상 통제 적용과 위험 수용 승인",
   "백업을 중단",
   "로그를 삭제",
   "그대로 인터넷에 연결해 운영"
  ],
  "a": 0,
  "e": "보상 통제 + 문서화된 위험 수용, 교체 계획."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 1,
  "q": "전송 중(in transit) 데이터 보호에 적합한 통제는?",
  "c": [
   "데이터 마스킹",
   "TLS",
   "전체 디스크 암호화",
   "디가우징"
  ],
  "a": 1,
  "e": "TLS·IPsec·VPN."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "기준 통제 집합에서 조직 환경에 맞게 통제를 '수정·조정'하는 것은?",
  "c": [
   "Hardening",
   "Baselining",
   "Tailoring",
   "Scoping"
  ],
  "a": 2,
  "e": "Tailoring. 적용 대상 선택은 Scoping."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "원본 카드번호를 무의미한 대체값으로 바꾸고 매핑은 별도 금고에 보관하는 기법은?",
  "c": [
   "해싱",
   "디가우징",
   "익명화",
   "토큰화"
  ],
  "a": 3,
  "e": "Tokenization."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "GDPR 상 재식별이 불가능해 개인정보로 보지 않는 처리는?",
  "c": [
   "익명화",
   "암호화",
   "토큰화",
   "가명처리"
  ],
  "a": 0,
  "e": "익명 정보는 GDPR 적용 제외. 가명·암호화 데이터는 여전히 개인정보."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 3,
  "q": "An organization wants to prevent employees from emailing files containing customer SSNs to external addresses. Which control is MOST appropriate?",
  "c": [
   "Full disk encryption",
   "Network DLP",
   "IDS",
   "DRM"
  ],
  "a": 1,
  "e": "DLP inspects content in motion and can block transmission of sensitive data."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "문서를 외부에 배포한 뒤에도 열람·인쇄·복사 권한을 통제하려면?",
  "c": [
   "NAT",
   "RAID",
   "DRM/IRM",
   "방화벽"
  ],
  "a": 2,
  "e": "디지털 권리 관리는 문서에 붙어 다니며 권한을 통제."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 3,
  "q": "사용 중(in use) 데이터 보호를 위한 기술로 가장 적절한 것은?",
  "c": [
   "테이프 백업",
   "디가우징",
   "TLS 1.3",
   "신뢰 실행 환경(TEE) 기반 기밀 컴퓨팅"
  ],
  "a": 3,
  "e": "메모리 내 처리 데이터는 TEE 로 보호."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 1,
  "q": "Bell-LaPadula 모델의 ★-property(Star property)가 의미하는 것은?",
  "c": [
   "No Read Up",
   "No Write Down",
   "No Read Down",
   "No Write Up"
  ],
  "a": 1,
  "e": "BLP: Simple Security = No Read Up, ★-property = No Write Down(상위 정보가 하위로 흘러내리는 것 방지)."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 1,
  "q": "무결성을 보호하기 위해 '낮은 무결성 수준의 데이터를 읽지 않는다'는 규칙을 가진 모델은?",
  "c": [
   "Biba",
   "Brewer-Nash",
   "Bell-LaPadula",
   "Graham-Denning"
  ],
  "a": 0,
  "e": "Biba의 Simple Integrity Property = No Read Down."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "Clark-Wilson 모델에서 사용자가 CDI(Constrained Data Item)를 변경하는 방법으로 옳은 것은?",
  "c": [
   "객체에 직접 쓰기 권한을 받아 변경",
   "보안 레이블이 높은 경우 자유롭게 변경",
   "IVP를 통해서 직접 수정",
   "TP(Transformation Procedure)를 통해서만 변경"
  ],
  "a": 3,
  "e": "Access triple(주체-TP-CDI). IVP는 무결성을 검증하는 절차이지 변경 수단이 아니다."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "컨설팅 회사의 분석가가 A은행 자료를 열람한 뒤 경쟁사 B은행 자료 접근이 자동 차단되었다. 적용된 모델은?",
  "c": [
   "Bell-LaPadula",
   "Biba",
   "Brewer-Nash",
   "Take-Grant"
  ],
  "a": 2,
  "e": "Chinese Wall — 과거 접근 이력 기반 이해충돌 방지."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "Common Criteria에서 특정 제품 유형에 대해 사용자 측의 구현 독립적인 보안 요구사항을 기술한 문서는?",
  "c": [
   "Security Target",
   "Protection Profile",
   "Target of Evaluation",
   "Evaluation Assurance Level"
  ],
  "a": 1,
  "e": "PP = 사용자 요구, ST = 벤더의 특정 제품 보안 주장."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 3,
  "q": "Common Criteria EAL7에 대한 설명으로 가장 옳은 것은?",
  "c": [
   "정형적으로 검증된 설계와 시험",
   "구조적으로 시험된 수준",
   "방법론적으로 설계·검토된 수준",
   "기능적으로 시험된 수준"
  ],
  "a": 0,
  "e": "EAL1 기능 시험, EAL2 구조 시험, EAL3 방법론적 시험·점검, EAL4 방법론적 설계·시험·검토, EAL5 준정형, EAL6 준정형 검증, EAL7 정형 검증."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "Reference Monitor 개념의 구현 요건이 아닌 것은?",
  "c": [
   "모든 접근을 중재해야 한다",
   "변조로부터 보호되어야 한다",
   "검증 가능할 만큼 작아야 한다",
   "모든 사용자 공간 애플리케이션을 포함해야 한다"
  ],
  "a": 3,
  "e": "완전 중재·변조 방지·검증 가능성. 범위가 클수록 검증이 어려워진다."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 3,
  "q": "Which model is primarily concerned with ensuring that actions at a higher security level cannot be observed or inferred by subjects at a lower level, thereby addressing covert channels?",
  "c": [
   "Clark-Wilson model",
   "Take-Grant model",
   "Noninterference model",
   "State machine model"
  ],
  "a": 2,
  "e": "Noninterference ensures high-level activity does not affect what low-level subjects can see — the basis for covert channel analysis."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "An organization needs a TCB component that mediates every access between subjects and objects. Which term BEST describes the implementation of this concept?",
  "c": [
   "Security perimeter",
   "Security kernel",
   "Trusted path",
   "Protection ring 3"
  ],
  "a": 1,
  "e": "The security kernel is the hardware/software implementation of the reference monitor concept."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 1,
  "q": "100명의 사용자가 서로 대칭키로 1:1 통신하려면 필요한 키의 수는?",
  "c": [
   "4,950",
   "200",
   "100",
   "9,900"
  ],
  "a": 0,
  "e": "n(n-1)/2 = 100×99/2 = 4,950. 비대칭이면 2n = 200개."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 1,
  "q": "전자서명이 제공하지 않는 보안 서비스는?",
  "c": [
   "무결성",
   "부인방지",
   "송신자 인증",
   "기밀성"
  ],
  "a": 3,
  "e": "서명은 공개키로 누구나 검증할 수 있어 기밀성을 제공하지 않는다."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 1,
  "q": "전자서명 생성 시 메시지 해시에 사용하는 키는?",
  "c": [
   "수신자의 공개키",
   "송신자의 공개키",
   "송신자의 개인키",
   "공유 대칭키"
  ],
  "a": 2,
  "e": "송신자 개인키로 서명, 송신자 공개키로 검증."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "동일한 평문 블록이 항상 동일한 암호문 블록을 만들어 패턴이 노출되는 블록 암호 운용 모드는?",
  "c": [
   "CBC",
   "ECB",
   "GCM",
   "CTR"
  ],
  "a": 1,
  "e": "ECB는 IV·체인 없이 블록별 독립 암호화."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "인증서 폐기 상태를 실시간으로 조회하는 프로토콜은?",
  "c": [
   "OCSP",
   "CRL",
   "CSR",
   "LDAP"
  ],
  "a": 0,
  "e": "CRL은 주기적으로 게시되는 목록, OCSP는 실시간 질의·응답."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "2024년 8월 NIST가 표준화한 양자내성 '키 캡슐화 메커니즘' 표준은?",
  "c": [
   "FIPS 197 AES",
   "FIPS 204 ML-DSA",
   "FIPS 205 SLH-DSA",
   "FIPS 203 ML-KEM"
  ],
  "a": 3,
  "e": "ML-KEM(Kyber 기반) = 키 캡슐화. 204·205는 전자서명."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 3,
  "q": "128비트 출력 해시 함수에서 생일 공격으로 충돌을 찾는 데 필요한 대략적 시도 횟수는?",
  "c": [
   "2^32",
   "2^127",
   "2^64",
   "2^128"
  ],
  "a": 2,
  "e": "생일 역설: 약 2^(n/2) = 2^64."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 3,
  "q": "공격자가 피해자의 NTLM 해시를 탈취해 평문 비밀번호 없이 인증에 재사용하는 공격은?",
  "c": [
   "Rainbow table",
   "Pass-the-hash",
   "Kerberoasting",
   "Birthday attack"
  ],
  "a": 1,
  "e": "Pass-the-hash — 해시 자체를 인증 자격으로 사용. 2024 아웃라인 3.7 암호 공격 항목에 포함."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "Which cryptographic control provides integrity and data origin authentication using a shared secret key but does NOT provide nonrepudiation?",
  "c": [
   "HMAC",
   "Digital signature",
   "SHA-256 hash",
   "RSA encryption"
  ],
  "a": 0,
  "e": "HMAC uses a shared symmetric key, so either party could have produced it — no nonrepudiation."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 3,
  "q": "A security manager is planning for 'harvest now, decrypt later' threats to long-lived sensitive data. What should be done FIRST?",
  "c": [
   "Replace all AES-128 keys with RSA-4096",
   "Shorten password expiration periods",
   "Disable TLS on internal networks",
   "Inventory cryptographic assets and data lifetimes to prioritize migration to post-quantum algorithms"
  ],
  "a": 3,
  "e": "Crypto-agility starts with a cryptographic inventory and risk prioritization; RSA itself is quantum-vulnerable."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 1,
  "q": "장애 발생 시 접근을 거부(deny)하는 상태로 전환되도록 설계하는 원칙은?",
  "c": [
   "Fail open",
   "Defense in depth",
   "Fail securely",
   "Keep it simple"
  ],
  "a": 2,
  "e": "Fail securely(fail-closed). 단, 사람 생명이 걸린 출입문은 fail-safe."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 1,
  "q": "부팅 과정의 각 구성요소를 측정해 무결성을 증명(attestation)하고 키를 하드웨어에 봉인하는 칩은?",
  "c": [
   "HSM",
   "TPM",
   "SED",
   "FPGA"
  ],
  "a": 1,
  "e": "TPM — 측정 부팅·원격 증명·sealing. HSM은 별도 키 관리 장비."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 2,
  "q": "산업제어시스템(ICS/OT) 보안 설계에서 가장 우선해야 할 고려사항은?",
  "c": [
   "가용성과 안전(safety)",
   "최신 패치를 즉시 적용",
   "모든 PLC에 백신 설치",
   "인터넷 직접 연결로 원격 관리"
  ],
  "a": 0,
  "e": "OT는 가용성·물리적 안전이 최우선. 패치는 사전 검증 후 계획 적용, 망분리(Purdue 모델) 권장."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 2,
  "q": "가상화 환경에서 게스트 VM의 공격자가 하이퍼바이저를 통해 호스트나 다른 VM에 접근하는 공격은?",
  "c": [
   "VM sprawl",
   "Live migration",
   "Hyperjacking 탐지",
   "VM escape"
  ],
  "a": 3,
  "e": "VM escape — 격리 경계 붕괴. VM sprawl은 관리되지 않는 VM 난립."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 2,
  "q": "상위 보안 수준 프로세스가 공유 자원 사용 패턴(예: CPU 부하·디스크 사용 시간)으로 하위 수준에 정보를 전달하는 것은?",
  "c": [
   "Storage covert channel",
   "Maintenance hook",
   "Timing covert channel",
   "TOCTOU"
  ],
  "a": 2,
  "e": "시간·자원 사용 변조로 신호 전달 = timing covert channel. 저장 위치 값 변경은 storage channel."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 3,
  "q": "권한 검사 시점과 실제 자원 사용 시점 사이의 간격을 이용해 파일을 바꿔치기하는 공격은?",
  "c": [
   "Buffer overflow",
   "TOCTOU(race condition)",
   "Aggregation",
   "Inference"
  ],
  "a": 1,
  "e": "Time-of-check to time-of-use."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 3,
  "q": "A database lets low-cleared users query individual nonsensitive records, but combining many of them reveals classified information. Which threat is this?",
  "c": [
   "Aggregation",
   "Inference",
   "Polyinstantiation",
   "Data remanence"
  ],
  "a": 0,
  "e": "Aggregation combines many low-sensitivity items into higher-sensitivity info. Inference deduces info from observed data; polyinstantiation is a countermeasure."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 2,
  "q": "Which design principle is BEST demonstrated by requiring every access request to be authenticated and authorized regardless of network location?",
  "c": [
   "Trust but verify",
   "Implicit trust zones",
   "Security through obscurity",
   "Zero Trust"
  ],
  "a": 3,
  "e": "Zero Trust (NIST SP 800-207) removes implicit trust based on network location."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 1,
  "q": "데이터센터에 가장 권장되는 스프링클러 방식은?",
  "c": [
   "Wet pipe",
   "Deluge",
   "Pre-action",
   "Dry pipe"
  ],
  "a": 2,
  "e": "Pre-action은 2단계 동작으로 오방수를 줄인다."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 1,
  "q": "전기 화재(미국 기준 Class C)에 물을 사용하면 안 되는 이유와 적합한 소화 수단의 짝으로 옳은 것은?",
  "c": [
   "재발화 — 물",
   "감전 위험 — CO2 또는 청정소화약제",
   "산소 공급 — 폼",
   "금속 반응 — 건식 분말만"
  ],
  "a": 1,
  "e": "전기 화재는 비전도성 소화약제 사용."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 2,
  "q": "인가된 직원 뒤를 따라 출입문을 통과하는 행위를 방지하는 가장 효과적인 통제는?",
  "c": [
   "Mantrap(access control vestibule)",
   "CCTV",
   "경고 표지판",
   "조명 강화"
  ],
  "a": 0,
  "e": "Mantrap은 한 번에 1인 통과를 강제. CCTV는 탐지 통제."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 2,
  "q": "지속적인 저전압 상태를 뜻하는 용어는?",
  "c": [
   "Spike",
   "Sag",
   "Blackout",
   "Brownout"
  ],
  "a": 3,
  "e": "Sag=순간 저전압, Brownout=지속 저전압, Blackout=지속 정전."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 2,
  "q": "A data center door controlled by an electronic lock must be designed for a fire event. Which configuration is MOST appropriate for personnel exit doors?",
  "c": [
   "Fail-secure, to protect assets",
   "Fail-closed, with manual override disabled",
   "Fail-safe, to allow people to exit",
   "Locked, with guard release only"
  ],
  "a": 2,
  "e": "Human safety is always the top priority; personnel egress doors fail safe (unlock)."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 3,
  "q": "CPTED의 3대 전략에 해당하지 않는 것은?",
  "c": [
   "자연적 감시",
   "생체인식 출입통제",
   "영역성 강화",
   "자연적 접근통제"
  ],
  "a": 1,
  "e": "CPTED는 환경 설계 중심 — 생체인식 같은 기술적 통제는 해당하지 않는다."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 1,
  "q": "OSI 모델에서 라우터가 동작하며 IP 주소로 경로를 결정하는 계층은?",
  "c": [
   "데이터링크 계층",
   "네트워크 계층",
   "전송 계층",
   "세션 계층"
  ],
  "a": 1,
  "e": "L3 네트워크 계층 — 패킷·IP·라우팅."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 1,
  "q": "TCP 연결 수립 순서로 옳은 것은?",
  "c": [
   "SYN → SYN/ACK → ACK",
   "SYN → ACK → SYN/ACK",
   "ACK → SYN → FIN",
   "SYN/ACK → SYN → ACK"
  ],
  "a": 0,
  "e": "3-way handshake."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 1,
  "q": "IP 주소를 MAC 주소로 변환하는 프로토콜은?",
  "c": [
   "DNS",
   "DHCP",
   "ICMP",
   "ARP"
  ],
  "a": 3,
  "e": "ARP — 스푸핑 공격 대상."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "TCP와 비교한 UDP의 특징으로 옳은 것은?",
  "c": [
   "연결 지향적이며 순서 보장",
   "흐름 제어와 재전송 지원",
   "비연결형으로 오버헤드가 작다",
   "3-way handshake로 세션 수립"
  ],
  "a": 2,
  "e": "UDP는 비연결·비신뢰성. DNS 질의·스트리밍에 사용."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "TACACS+가 사용하는 전송 프로토콜과 포트는?",
  "c": [
   "UDP 1812",
   "TCP 49",
   "UDP 500",
   "TCP 389"
  ],
  "a": 1,
  "e": "TACACS+는 TCP 49, RADIUS는 UDP 1812/1813."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "스토리지 블록 프로토콜인 SCSI 명령을 IP 네트워크로 전송하는 융합 프로토콜은?",
  "c": [
   "iSCSI",
   "FCoE",
   "MPLS",
   "VXLAN"
  ],
  "a": 0,
  "e": "iSCSI는 IP 위, FCoE는 이더넷 프레임 위(IP 미사용)."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 3,
  "q": "SDN(Software-Defined Networking)의 보안상 가장 핵심적인 고려사항은?",
  "c": [
   "데이터 평면 장비의 펌웨어 색상 규칙",
   "VLAN 사용이 금지됨",
   "IPv4 사용 불가",
   "중앙 컨트롤러가 단일 장애·공격 지점이 될 수 있음"
  ],
  "a": 3,
  "e": "제어평면 집중 → 컨트롤러 보호·이중화·API 인증 필수."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "Which transmission medium is MOST resistant to electromagnetic interference and passive tapping?",
  "c": [
   "Unshielded twisted pair",
   "Coaxial cable",
   "Fiber-optic cable",
   "Shielded twisted pair"
  ],
  "a": 2,
  "e": "Fiber carries light, so it is immune to EMI and difficult to tap without detection."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 3,
  "q": "A network engineer notices IPv6 traffic tunneled over IPv4 (e.g., Teredo) bypassing the perimeter IPS. What is the BEST course of action?",
  "c": [
   "Ignore it because IPv6 has built-in IPsec",
   "Block or inspect tunneling protocols and enforce IPv6-aware security controls",
   "Disable IPv4 entirely",
   "Move the IPS to Layer 1"
  ],
  "a": 1,
  "e": "Tunneling can evade IPv4-only controls; block unused tunnels and deploy IPv6-aware inspection."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 1,
  "q": "인라인으로 배치되어 악성 트래픽을 실시간 차단하는 장비는?",
  "c": [
   "IPS",
   "IDS",
   "SIEM",
   "Honeypot"
  ],
  "a": 0,
  "e": "IPS는 인라인 차단, IDS는 탐지·경보."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 1,
  "q": "외부에 공개되는 웹·메일 서버를 내부망과 분리해 배치하는 네트워크 구역은?",
  "c": [
   "Intranet",
   "Extranet core",
   "VLAN 1",
   "DMZ(screened subnet)"
  ],
  "a": 3,
  "e": "DMZ."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 2,
  "q": "세션 테이블을 유지해 응답 트래픽이 기존 연결에 속하는지 확인하는 방화벽은?",
  "c": [
   "Packet filtering firewall",
   "Circuit-level proxy",
   "Stateful inspection firewall",
   "Static ACL router"
  ],
  "a": 2,
  "e": "Stateful."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 2,
  "q": "기준선(baseline)을 학습해 벗어나는 트래픽을 탐지하므로 제로데이 탐지가 가능하지만 오탐이 많은 방식은?",
  "c": [
   "시그니처 기반",
   "이상(anomaly) 기반",
   "규칙 기반 ACL",
   "해시 기반 화이트리스트"
  ],
  "a": 1,
  "e": "Anomaly-based."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 2,
  "q": "단말이 네트워크에 연결되기 전 패치·백신 상태를 점검해 미준수 시 격리 VLAN으로 보내는 기술은?",
  "c": [
   "NAC",
   "NAT",
   "VPN",
   "QoS"
  ],
  "a": 0,
  "e": "Network Access Control."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 3,
  "q": "VLAN hopping 공격 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "사용하지 않는 포트 비활성화",
   "액세스 포트의 DTP(자동 트렁킹) 비활성화",
   "네이티브 VLAN을 사용하지 않는 ID로 변경",
   "모든 포트를 트렁크 모드로 설정"
  ],
  "a": 3,
  "e": "트렁크 모드 확대는 스위치 스푸핑 위험을 키운다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 2,
  "q": "Which security architecture removes implicit trust based on network location and evaluates each request through a policy decision point?",
  "c": [
   "Castle-and-moat",
   "Flat network",
   "Zero Trust Architecture",
   "Air gap"
  ],
  "a": 2,
  "e": "NIST SP 800-207 Zero Trust."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 3,
  "q": "An organization wants administrators to reach production servers only through a single hardened, monitored host with session recording. Which solution BEST fits?",
  "c": [
   "Split tunneling VPN",
   "Jump server (bastion) with privileged session management",
   "Direct RDP from workstations",
   "Port forwarding on the edge router"
  ],
  "a": 1,
  "e": "A jump box centralizes and audits privileged access."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 3,
  "q": "WAF가 가장 효과적으로 방어하는 공격은?",
  "c": [
   "SQL Injection·XSS",
   "ARP 스푸핑",
   "SYN flood(L4 볼륨)",
   "물리적 도청"
  ],
  "a": 0,
  "e": "WAF는 L7 HTTP 공격 방어."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 1,
  "q": "IPsec에서 기밀성(암호화)을 제공하는 프로토콜은?",
  "c": [
   "AH",
   "ISAKMP",
   "IKE",
   "ESP"
  ],
  "a": 3,
  "e": "ESP. AH는 무결성·인증만."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 1,
  "q": "WPA3-Personal이 오프라인 사전 공격을 막기 위해 도입한 키 교환 방식은?",
  "c": [
   "PSK 4-way handshake",
   "TKIP",
   "SAE",
   "WEP IV"
  ],
  "a": 2,
  "e": "Simultaneous Authentication of Equals(Dragonfly)."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "802.1X 구성에서 스위치·무선 AP의 역할은?",
  "c": [
   "Supplicant",
   "Authenticator",
   "Authentication server",
   "Certificate authority"
  ],
  "a": 1,
  "e": "단말=Supplicant, 스위치·AP=Authenticator, RADIUS=AS."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "게이트웨이 간 site-to-site VPN에서 원본 IP 헤더까지 보호하는 IPsec 모드는?",
  "c": [
   "Tunnel mode",
   "Transport mode",
   "Aggressive mode",
   "Main mode"
  ],
  "a": 0,
  "e": "Main/Aggressive는 IKE 단계 1 모드."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "TLS 1.3에서 필수가 된 특성은?",
  "c": [
   "RSA 키 전송",
   "압축 기능",
   "RC4 지원",
   "전방향 안전성(PFS)을 제공하는 (EC)DHE 키 교환"
  ],
  "a": 3,
  "e": "정적 RSA 키 교환이 제거되었다."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 3,
  "q": "원격 근무자의 VPN에서 split tunneling을 허용할 때 가장 큰 보안 우려는?",
  "c": [
   "VPN 대역폭 증가",
   "IPsec 암호 약화",
   "인터넷 트래픽이 회사 보안 통제를 우회해 단말이 내부망 브리지가 될 수 있음",
   "DNS 사용 불가"
  ],
  "a": 2,
  "e": "Full tunnel은 모든 트래픽을 회사 통제로 보낸다."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "Which EAP method provides the strongest mutual authentication by requiring certificates on both client and server?",
  "c": [
   "EAP-MD5",
   "EAP-TLS",
   "PEAP-MSCHAPv2",
   "LEAP"
  ],
  "a": 1,
  "e": "EAP-TLS uses certificates on both sides."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 3,
  "q": "A company is selecting an AAA protocol for administrator access to network devices and requires per-command authorization and full payload encryption. Which is BEST?",
  "c": [
   "TACACS+",
   "RADIUS",
   "PAP",
   "SNMPv2c"
  ],
  "a": 0,
  "e": "TACACS+ separates AAA functions and encrypts the entire payload."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 1,
  "q": "출발지를 피해자로 위조한 ICMP echo 요청을 브로드캐스트 주소로 보내 증폭하는 공격은?",
  "c": [
   "Land",
   "Fraggle",
   "Teardrop",
   "Smurf"
  ],
  "a": 3,
  "e": "Fraggle은 UDP(echo/chargen) 버전."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 1,
  "q": "half-open TCP 연결을 대량으로 만들어 서버 자원을 고갈시키는 공격은?",
  "c": [
   "Ping of death",
   "Replay",
   "SYN flood",
   "Pharming"
  ],
  "a": 2,
  "e": "대응: SYN cookies."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 2,
  "q": "공격자가 게이트웨이 IP에 자신의 MAC을 매핑한 위조 응답을 보내 트래픽을 가로채는 공격은?",
  "c": [
   "DNS 캐시 포이즈닝",
   "ARP 스푸핑(포이즈닝)",
   "MAC flooding",
   "VLAN hopping"
  ],
  "a": 1,
  "e": "대응: Dynamic ARP Inspection·정적 ARP."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 2,
  "q": "스위치의 CAM 테이블을 가짜 MAC으로 가득 채워 허브처럼 동작하게 만드는 공격의 대응책은?",
  "c": [
   "Port security(포트당 MAC 수 제한)",
   "DNSSEC",
   "IPsec AH",
   "WPA3"
  ],
  "a": 0,
  "e": "MAC flooding 대응."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 2,
  "q": "DNS 응답 위조를 막기 위해 디지털 서명으로 출처와 무결성을 검증하는 기술은?",
  "c": [
   "DoH",
   "DNS sinkhole",
   "Split DNS",
   "DNSSEC"
  ],
  "a": 3,
  "e": "DoH는 기밀성, DNSSEC는 무결성·출처."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 3,
  "q": "Teardrop 공격이 악용하는 것은?",
  "c": [
   "출발지·목적지 IP 동일 패킷",
   "ICMP 브로드캐스트 증폭",
   "IP 단편(fragment)의 오프셋 중첩",
   "DNS 재귀 질의"
  ],
  "a": 2,
  "e": "단편 재조립 오류 유발. 출발지=목적지는 Land 공격."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 3,
  "q": "An organization's public DNS servers are being used to amplify attacks against third parties. What should the security team do FIRST?",
  "c": [
   "Enable DNSSEC signing",
   "Disable open recursion for external clients and apply response rate limiting",
   "Move DNS to TCP only",
   "Change the DNS server IP addresses"
  ],
  "a": 1,
  "e": "DNS amplification abuses open resolvers; restrict recursion and rate-limit responses."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 1,
  "q": "다음 중 다중 요소 인증(MFA)에 해당하는 조합은?",
  "c": [
   "비밀번호 + PIN",
   "스마트카드 + PIN",
   "비밀번호 + 보안 질문",
   "지문 + 홍채"
  ],
  "a": 1,
  "e": "스마트카드(소유) + PIN(지식) = 서로 다른 유형 2개. 지문+홍채는 같은 생체 유형."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 1,
  "q": "생체 인식에서 정당한 사용자를 거부하는 오류는?",
  "c": [
   "Type I 오류(FRR)",
   "FTE",
   "Type II 오류(FAR)",
   "CER"
  ],
  "a": 0,
  "e": "FRR = False Rejection = Type I."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "생체 인식 장치를 비교 선택할 때 가장 적절한 정확도 지표는?",
  "c": [
   "FAR이 가장 높은 장치",
   "등록 시간이 가장 긴 장치",
   "FRR이 가장 낮은 장치",
   "CER이 가장 낮은 장치"
  ],
  "a": 3,
  "e": "CER(교차 오류율)이 낮을수록 전반적 정확도가 높다."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "생체 인식 장치의 민감도를 높이면 일반적으로 나타나는 현상은?",
  "c": [
   "CER 증가",
   "FAR 증가, FRR 감소",
   "FAR 감소, FRR 증가",
   "FAR·FRR 모두 감소"
  ],
  "a": 2,
  "e": "엄격할수록 부정 수락은 줄고 정당 사용자 거부는 늘어난다."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "TOTP 토큰이 HOTP와 구별되는 점은?",
  "c": [
   "대칭키를 사용하지 않는다",
   "이벤트 카운터 대신 시간 단계를 입력으로 쓴다",
   "챌린지-응답 방식이다",
   "생체 정보를 결합한다"
  ],
  "a": 1,
  "e": "TOTP(RFC 6238)는 시간, HOTP(RFC 4226)는 카운터 기반."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "Kerberos 환경에서 클라이언트가 서비스 티켓을 받기 위해 TGS에 제시하는 것은?",
  "c": [
   "TGT",
   "사용자 비밀번호 평문",
   "X.509 인증서",
   "서비스 티켓"
  ],
  "a": 0,
  "e": "AS가 발급한 TGT를 TGS에 제시해 서비스 티켓을 얻는다."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 3,
  "q": "Kerberos 인증이 갑자기 실패하기 시작했다. 가장 먼저 의심할 원인은?",
  "c": [
   "TLS 인증서 만료",
   "방화벽 443 포트 차단",
   "DNS 캐시 크기",
   "클라이언트와 KDC 간 시계 차이"
  ],
  "a": 3,
  "e": "Kerberos는 타임스탬프로 재전송을 막으므로 시간 오차(기본 5분 허용)를 넘으면 실패."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "세션 고정(session fixation) 공격을 막는 가장 효과적인 방법은?",
  "c": [
   "쿠키 만료일 제거",
   "세션 타임아웃 연장",
   "로그인 성공 시 새 세션 ID 발급",
   "세션 ID를 URL에 포함"
  ],
  "a": 2,
  "e": "인증 전후 세션 ID를 교체하면 공격자가 심어 둔 ID가 무효화된다."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 3,
  "q": "Which authentication approach BEST resists phishing of credentials?",
  "c": [
   "SMS one-time passwords",
   "FIDO2/WebAuthn hardware authenticators",
   "Security questions",
   "Longer password expiration intervals"
  ],
  "a": 1,
  "e": "FIDO2 binds the credential to the origin, so a look-alike site cannot reuse it. SMS OTP can be relayed by a phishing proxy."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 1,
  "q": "Which is an example of 'something you have'?",
  "c": [
   "Smart card",
   "Typing rhythm",
   "Fingerprint",
   "Passphrase"
  ],
  "a": 0,
  "e": "Smart cards and tokens are possession factors."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "Which biometric error type is MOST concerning from a security standpoint?",
  "c": [
   "Failure to enroll",
   "Throughput delay",
   "False rejection",
   "False acceptance"
  ],
  "a": 3,
  "e": "False acceptance (Type II) admits an impostor."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 1,
  "q": "SAML 2.0에서 인증 어설션을 발급하는 주체는?",
  "c": [
   "Relying Browser",
   "Service Provider",
   "Identity Provider",
   "Resource Server"
  ],
  "a": 2,
  "e": "IdP가 어설션을 발급하고 SP가 이를 소비한다."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "OAuth 2.0의 주된 목적으로 옳은 것은?",
  "c": [
   "비밀번호 해시 저장",
   "자원 접근 권한의 위임",
   "XML 서명 표준화",
   "사용자 신원 인증"
  ],
  "a": 1,
  "e": "OAuth는 인가(권한 위임) 프레임워크."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "OAuth 2.0 위에 ID 토큰을 추가해 인증 기능을 제공하는 표준은?",
  "c": [
   "OpenID Connect",
   "XACML",
   "SCIM",
   "SAML"
  ],
  "a": 0,
  "e": "OIDC = OAuth 2.0 + ID Token(JWT)."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "여러 조직 간 신뢰 관계를 맺어 한 조직의 자격 증명으로 다른 조직 자원에 접근하게 하는 것은?",
  "c": [
   "Credential stuffing",
   "Role mining",
   "Directory replication",
   "Federated identity management"
  ],
  "a": 3,
  "e": "페더레이션은 조직 경계를 넘는 신원 신뢰."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 3,
  "q": "SSO 도입 시 보안 관리자가 가장 우선적으로 보완해야 할 위험은?",
  "c": [
   "로그 중앙화",
   "사용자 비밀번호 피로",
   "단일 자격 증명 탈취 시 모든 시스템 노출",
   "헬프데스크 비용 증가"
  ],
  "a": 2,
  "e": "SSO는 '모든 열쇠가 하나'가 되므로 강한 MFA·모니터링이 필요."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "사용자 계정 프로비저닝을 서로 다른 도메인 간에 자동화하기 위한 표준은?",
  "c": [
   "RADIUS",
   "SCIM",
   "SAML",
   "LDAP bind"
  ],
  "a": 1,
  "e": "SCIM(System for Cross-domain Identity Management)은 계정 생성·변경·삭제를 표준 API로 자동화."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "Which protocol separates authentication, authorization and accounting and encrypts the entire packet body?",
  "c": [
   "TACACS+",
   "Diameter over UDP",
   "LDAP",
   "RADIUS"
  ],
  "a": 0,
  "e": "TACACS+ uses TCP 49, separates AAA functions and encrypts the full payload; RADIUS encrypts only the password."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 3,
  "q": "A company wants employees to access a third-party SaaS using corporate credentials without the SaaS storing passwords. Which is the BEST solution?",
  "c": [
   "Create shared accounts in the SaaS",
   "Use the SaaS's local accounts with complex passwords",
   "Synchronize password hashes to the SaaS",
   "Implement SAML-based federation with the corporate IdP"
  ],
  "a": 3,
  "e": "Federation lets the IdP authenticate and pass assertions; the SaaS never holds passwords."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 1,
  "q": "In OAuth 2.0, which component issues access tokens?",
  "c": [
   "Resource owner",
   "Client",
   "Authorization server",
   "Resource server"
  ],
  "a": 2,
  "e": "The authorization server issues tokens after the resource owner consents."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 1,
  "q": "객체 소유자가 다른 사용자에게 권한을 부여할 수 있는 접근통제 모델은?",
  "c": [
   "MAC",
   "DAC",
   "Rule-based",
   "Lattice-based"
  ],
  "a": 1,
  "e": "DAC는 소유자 재량."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 1,
  "q": "주체의 보안 허가(clearance)와 객체의 분류 레이블을 비교해 접근을 결정하는 모델은?",
  "c": [
   "MAC",
   "ABAC",
   "DAC",
   "RBAC"
  ],
  "a": 0,
  "e": "MAC은 시스템이 레이블 비교로 강제."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 2,
  "q": "직무 분리(SoD)를 가장 쉽게 구현할 수 있는 접근통제 모델은?",
  "c": [
   "Rule-based",
   "Discretionary ACL",
   "DAC",
   "RBAC"
  ],
  "a": 3,
  "e": "상충 역할을 정의해 동시 배정을 금지하면 된다."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 2,
  "q": "근무 시간·접속 위치·기기 상태 등 여러 조건을 조합해 접근을 판단하는 모델은?",
  "c": [
   "MAC",
   "Non-discretionary RBAC",
   "ABAC",
   "DAC"
  ],
  "a": 2,
  "e": "ABAC는 주체·객체·환경 속성 기반."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 2,
  "q": "방화벽 ACL처럼 모든 주체에 동일하게 적용되는 전역 규칙 기반 모델은?",
  "c": [
   "RBAC",
   "Rule-based access control",
   "DAC",
   "Capability table"
  ],
  "a": 1,
  "e": "Rule-based는 주체와 무관한 전역 규칙."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 3,
  "q": "RBAC 환경에서 예외 요구가 늘어 역할 수가 폭증했다. 가장 적절한 개선 방향은?",
  "c": [
   "속성 기반 정책(ABAC)을 결합",
   "DAC로 전환해 소유자에게 위임",
   "역할 검토 중단",
   "모든 사용자에게 관리자 역할 부여"
  ],
  "a": 0,
  "e": "역할 폭증은 속성 조건으로 세분화해 해결하는 것이 일반적."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 3,
  "q": "Which principle is MOST directly violated when a developer retains production database write access after moving to a testing role?",
  "c": [
   "Defense in depth",
   "Fail secure",
   "Need to know",
   "Least privilege"
  ],
  "a": 3,
  "e": "Accumulated, unnecessary rights violate least privilege (privilege creep)."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 2,
  "q": "Which access control model is BEST suited for a military system handling classified information?",
  "c": [
   "Rule-based",
   "DAC",
   "MAC",
   "RBAC"
  ],
  "a": 2,
  "e": "Mandatory labels and clearances are enforced by the system."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 1,
  "q": "직원이 부서를 옮길 때 가장 먼저 해야 할 계정 관리 조치는?",
  "c": [
   "계정 삭제",
   "이전 직무 권한 회수 및 새 권한 부여",
   "비밀번호 초기화만 수행",
   "권한을 그대로 유지"
  ],
  "a": 1,
  "e": "이동(mover) 시 이전 권한을 회수하지 않으면 privilege creep 발생."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 2,
  "q": "정기 접근 검토(access review)에서 권한 적정성을 승인해야 하는 사람은?",
  "c": [
   "데이터 소유자 또는 사용자의 관리자",
   "외부 감사인",
   "헬프데스크 담당자",
   "해당 사용자 본인"
  ],
  "a": 0,
  "e": "업무 필요성을 아는 소유자·관리자가 인증(attestation)한다."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 2,
  "q": "특권 계정에 상시 권한을 두지 않고 필요할 때만 일시 부여하는 방식은?",
  "c": [
   "Break-glass 계정 상시 사용",
   "Shared admin account",
   "Standing privilege",
   "Just-in-Time access"
  ],
  "a": 3,
  "e": "JIT는 시간 제한 권한 부여 후 자동 회수."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 3,
  "q": "A disgruntled administrator has been terminated. What should be done FIRST?",
  "c": [
   "Change the firewall rules",
   "Delete all files owned by the administrator",
   "Disable the administrator's accounts and revoke access, including privileged credentials",
   "Schedule an exit interview"
  ],
  "a": 2,
  "e": "Access must be revoked immediately, ideally coordinated with the notification; deleting data may destroy evidence."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 2,
  "q": "Which control BEST ensures individual accountability for privileged actions?",
  "c": [
   "Shared administrator account with a strong password",
   "Unique privileged accounts with session recording",
   "Quarterly password changes",
   "Disabling audit logs to reduce noise"
  ],
  "a": 1,
  "e": "Unique IDs plus logging/recording tie each action to a person."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 1,
  "q": "독립성이 가장 높은 감사 유형은?",
  "c": [
   "내부 감사",
   "자체 점검",
   "제3자 감사",
   "부서장 검토"
  ],
  "a": 2,
  "e": "독립 기관이 수행하는 제3자 감사."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "보안 평가 계획에서 가장 먼저 해야 할 일은?",
  "c": [
   "도구 선정",
   "평가 목표와 범위 정의",
   "취약점 스캔 실행",
   "보고서 양식 작성"
  ],
  "a": 1,
  "e": "목표·범위가 정해져야 방법·도구가 결정된다."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "미패치 치명 취약점 수의 증가 추세처럼 위험 증가를 미리 알려 주는 지표는?",
  "c": [
   "KRI",
   "SLA",
   "MTTR",
   "KPI"
  ],
  "a": 0,
  "e": "KRI는 선행 위험 지표."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "고객사가 계약에 근거해 클라우드 공급사를 직접 감사하는 것은 어느 유형인가?",
  "c": [
   "제3자 인증 감사",
   "자체 평가",
   "내부 감사",
   "외부(2자) 감사"
  ],
  "a": 3,
  "e": "고객이 공급사를 감사 = 2자(외부) 감사."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 3,
  "q": "경영진에게 보안 프로그램 효과를 보고할 때 가장 적절한 형태는?",
  "c": [
   "취약점 CVE 목록",
   "원시 로그 전체",
   "비즈니스 위험과 연결된 핵심 지표와 추세",
   "스캐너 출력 원본"
  ],
  "a": 2,
  "e": "경영진은 의사결정 가능한 위험 중심 지표가 필요."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "Which BEST describes the purpose of a key performance indicator in a security program?",
  "c": [
   "Predict future incidents",
   "Measure how well a process meets its objective",
   "Replace audits",
   "List system vulnerabilities"
  ],
  "a": 1,
  "e": "KPIs measure achievement; KRIs signal rising risk."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 3,
  "q": "An organization must demonstrate compliance to a regulator. Which assessment approach is MOST appropriate?",
  "c": [
   "Independent third-party audit",
   "Developer peer review",
   "Automated vulnerability scan",
   "Internal self-assessment only"
  ],
  "a": 0,
  "e": "Regulators typically require independent assurance."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 1,
  "q": "백업 검증·교육 이수율·계정 검토 결과 등 보안 프로세스 데이터를 수집하는 주된 목적은?",
  "c": [
   "서버 성능 향상",
   "라이선스 비용 절감",
   "마케팅 자료 작성",
   "통제가 의도대로 운영되는지 확인"
  ],
  "a": 3,
  "e": "Domain 6.3 — 운영 효과성 확인."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 1,
  "q": "알려진 취약점을 자동으로 식별하는 활동은?",
  "c": [
   "코드 리뷰",
   "침투 테스트",
   "취약점 스캔",
   "레드팀 연습"
  ],
  "a": 2,
  "e": "스캔은 식별, 침투는 악용."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "패치 적용 현황을 가장 정확히 파악할 수 있는 스캔 방식은?",
  "c": [
   "비인증 외부 스캔",
   "인증(credentialed) 스캔",
   "포트 스캔만 수행",
   "핑 스윕"
  ],
  "a": 1,
  "e": "로그인해 내부 정보를 보므로 정확도 높음."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "테스터에게 소스코드·네트워크 구성 등 모든 정보를 제공하는 침투 테스트는?",
  "c": [
   "White box",
   "Double blind",
   "Black box",
   "Gray box"
  ],
  "a": 0,
  "e": "Full knowledge = white box."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "NIST SP 800-115 침투 테스트 4단계 중 공격 중 새로운 정보가 나오면 되돌아가는 단계는?",
  "c": [
   "Reporting",
   "Remediation",
   "Planning",
   "Discovery"
  ],
  "a": 3,
  "e": "Attack ↔ Discovery 반복."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 3,
  "q": "침투 테스트를 시작하기 전 반드시 확보해야 하는 것은?",
  "c": [
   "모든 직원 사전 공지",
   "최신 익스플로잇 도구",
   "경영진 서면 승인과 교전 규칙(RoE)",
   "방화벽 비활성화"
  ],
  "a": 2,
  "e": "승인 없는 테스트는 불법. 직원 공지는 테스트 목적에 따라 선택."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "취약점의 심각도를 0~10 점수로 표현하는 표준은?",
  "c": [
   "CWE",
   "CVSS",
   "CPE",
   "CVE"
  ],
  "a": 1,
  "e": "CVSS = Common Vulnerability Scoring System."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "보안 운영팀이 사전 통보 없이 실제 공격처럼 진행되는 테스트에 대응하도록 하는 방식은?",
  "c": [
   "Double-blind 테스트",
   "White box 테스트",
   "탁상 훈련",
   "체크리스트 검토"
  ],
  "a": 0,
  "e": "Double-blind: 테스터도 정보가 적고 방어팀도 모름."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 3,
  "q": "A vulnerability scan reports a critical flaw on a server that the administrator says is patched. What should the security manager do FIRST?",
  "c": [
   "Immediately take the server offline",
   "Report a breach to regulators",
   "Accept the administrator's statement and close the finding",
   "Validate the finding, for example with a credentialed scan or manual check"
  ],
  "a": 3,
  "e": "Scanners produce false positives; validate before acting."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "Which team combines attackers and defenders collaborating to improve detection?",
  "c": [
   "Red team",
   "Blue team",
   "Purple team",
   "White team"
  ],
  "a": 2,
  "e": "Purple team = red + blue cooperation."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 3,
  "q": "What is the PRIMARY benefit of a penetration test over a vulnerability scan?",
  "c": [
   "Broader coverage of assets",
   "Demonstrating actual exploitability and business impact",
   "No need for authorization",
   "Lower cost"
  ],
  "a": 1,
  "e": "Pen tests prove impact; scans list potential weaknesses."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 1,
  "q": "소스코드를 실행하지 않고 분석하는 테스트 기법은?",
  "c": [
   "SAST",
   "퍼징",
   "부하 테스트",
   "DAST"
  ],
  "a": 0,
  "e": "Static Application Security Testing."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "운영 환경 설정 오류와 런타임 취약점 발견에 더 적합한 기법은?",
  "c": [
   "코드 리뷰",
   "정적 린트",
   "SAST",
   "DAST"
  ],
  "a": 3,
  "e": "DAST는 실행 중 앱을 대상으로 한다."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "기존 정상 입력을 무작위로 변형해 크래시를 유도하는 퍼징 방식은?",
  "c": [
   "Unit testing",
   "Generation fuzzing",
   "Mutation fuzzing",
   "Regression testing"
  ],
  "a": 2,
  "e": "Mutation(dumb) fuzzing."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "공격자가 시스템을 악용하는 시나리오를 작성해 보안 요구사항을 검증하는 기법은?",
  "c": [
   "Use case testing",
   "Misuse case testing",
   "Smoke testing",
   "Load testing"
  ],
  "a": 1,
  "e": "Misuse/abuse case."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "변경 후 기존 기능과 보안 통제가 여전히 정상 동작하는지 확인하는 테스트는?",
  "c": [
   "회귀 테스트",
   "침투 테스트",
   "합성 트랜잭션",
   "퍼징"
  ],
  "a": 0,
  "e": "Regression testing."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 3,
  "q": "Which testing approach is MOST effective early in the SDLC to find coding flaws such as injection?",
  "c": [
   "Annual penetration test",
   "Synthetic transactions",
   "DAST in production",
   "SAST integrated into the build pipeline"
  ],
  "a": 3,
  "e": "SAST runs before deployment and pinpoints the code location."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "Which technique uses scripted transactions to proactively verify that a production service is available and responding correctly?",
  "c": [
   "Static analysis",
   "Real user monitoring",
   "Synthetic transactions",
   "Fuzzing"
  ],
  "a": 2,
  "e": "Synthetic monitoring runs scripted transactions; RUM passively observes real users."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 1,
  "q": "클라우드 공급사의 보안 통제 운영 효과성을 확인하려 할 때 가장 적절한 보고서는?",
  "c": [
   "SOC 1 Type I",
   "SOC 2 Type II",
   "SOC 3",
   "SOC 1 Type II"
  ],
  "a": 1,
  "e": "보안 TSC + 기간 운영 효과성."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 2,
  "q": "일반 대중에게 공개 배포할 수 있는 SOC 보고서는?",
  "c": [
   "SOC 3",
   "SOC 2 Type II",
   "SOC 1",
   "SOC 2"
  ],
  "a": 0,
  "e": "SOC 3은 general use."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 2,
  "q": "SOC Type I 보고서가 평가하는 것은?",
  "c": [
   "재무제표 정확성",
   "침투 테스트 결과",
   "일정 기간의 운영 효과성",
   "특정 시점 통제 설계의 적정성"
  ],
  "a": 3,
  "e": "Type I = 시점 설계."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 3,
  "q": "감사에서 중대한 발견 사항이 나왔다. 감사인의 적절한 역할은?",
  "c": [
   "운영팀에 구두로만 알린다",
   "직접 시스템을 수정한다",
   "발견 사항과 권고를 보고하고 경영진이 시정 계획을 수립하게 한다",
   "발견 사항을 삭제한다"
  ],
  "a": 2,
  "e": "독립성 유지 — 시정은 경영진 책임."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 3,
  "q": "A financial auditor needs assurance over a payroll processor's controls relevant to the customer's financial statements. Which report should be requested?",
  "c": [
   "ISO 27001 certificate",
   "SOC 1",
   "SOC 2",
   "SOC 3"
  ],
  "a": 1,
  "e": "SOC 1 covers internal control over financial reporting."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 1,
  "q": "디지털 증거를 수집할 때 RFC 3227 휘발성 순서상 가장 먼저 수집해야 하는 것은?",
  "c": [
   "하드디스크 이미지",
   "CPU 레지스터·캐시",
   "원격 로그 서버 데이터",
   "백업 테이프"
  ],
  "a": 1,
  "e": "레지스터·캐시 → 메모리 → 임시 파일 → 디스크 → 원격 로그 → 보관 매체 순."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 1,
  "q": "증거가 수집된 시점부터 법정 제출까지 누가 언제 취급했는지를 기록하는 절차는?",
  "c": [
   "Order of volatility",
   "Legal hold",
   "Chain of custody",
   "Due diligence"
  ],
  "a": 2,
  "e": "증거 보관 연속성(Chain of custody)이 끊기면 증거 능력 다툼이 발생."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "포렌식 분석 시 원본 디스크 증거를 다루는 방법으로 가장 적절한 것은?",
  "c": [
   "원본을 직접 마운트해 분석한다",
   "쓰기 방지 장치로 비트 단위 이미지를 만들고 해시를 기록한 뒤 사본을 분석한다",
   "파일 단위로 복사해 USB에 저장한다",
   "원본을 포맷 후 재설치한다"
  ],
  "a": 1,
  "e": "Write blocker + bit-stream image + 해시 검증 + 사본 분석이 표준."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "형사 조사에서 요구되는 입증 기준은?",
  "c": [
   "증거의 우월",
   "명백하고 설득력 있는 증거",
   "합리적 의심 없는 증명",
   "내부 정책 기준"
  ],
  "a": 2,
  "e": "형사는 beyond a reasonable doubt, 민사는 preponderance of the evidence."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "허니팟에 대한 설명으로 옳은 것은?",
  "c": [
   "공격자가 범행 의도 없이 범죄를 저지르도록 유도하는 것은 합법이다",
   "이미 침입 의도가 있는 공격자를 유인(enticement)하는 것은 일반적으로 합법이다",
   "허니팟 로그는 어떤 경우에도 증거로 쓸 수 없다",
   "허니팟은 운영 서버와 같은 데이터를 담아야 한다"
  ],
  "a": 1,
  "e": "유인(enticement)은 일반적으로 합법, 함정(entrapment)은 불법. 실제 운영 데이터를 두어선 안 된다."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 3,
  "q": "During an investigation, an analyst discovers that an evidence drive was left unattended overnight without a custody log entry. What is the MOST likely consequence?",
  "c": [
   "The evidence becomes more reliable",
   "The admissibility of the evidence may be challenged",
   "The hash value automatically changes",
   "The case must move to civil court"
  ],
  "a": 1,
  "e": "A gap in the chain of custody allows opposing counsel to challenge authenticity and admissibility."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "원본 문서 대신 사본이 제출될 때 이를 제한하는 증거 규칙은?",
  "c": [
   "Best evidence rule",
   "Parol evidence rule",
   "Hearsay rule",
   "Exclusionary rule"
  ],
  "a": 0,
  "e": "최우선 증거 규칙 — 원칙적으로 원본을 요구."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 3,
  "q": "소송이 예견되어 법적 보존 조치(legal hold)가 내려졌다. 보안 관리자가 가장 먼저 해야 할 일은?",
  "c": [
   "관련 데이터의 정기 파기 일정을 중단하고 보존한다",
   "관련 데이터를 즉시 암호화 삭제한다",
   "모든 이메일 서버를 종료한다",
   "관련 직원을 해고한다"
  ],
  "a": 0,
  "e": "Legal hold 시 관련 정보의 정상적 파기·변경을 중단해야 한다(증거 인멸 방지)."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "여러 시스템의 로그를 중앙 수집·정규화하고 상관분석해 경보를 생성하는 기술은?",
  "c": [
   "SOAR",
   "SIEM",
   "DLP",
   "CASB"
  ],
  "a": 1,
  "e": "SIEM은 수집·상관분석·경보, SOAR는 대응 자동화."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "SIEM 상관분석의 정확도를 위해 반드시 전제되어야 하는 것은?",
  "c": [
   "모든 로그의 암호화",
   "시스템 간 시간 동기화",
   "로그 압축",
   "로그 실시간 삭제"
  ],
  "a": 1,
  "e": "시간이 맞지 않으면 이벤트 순서 재구성이 불가능하다."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "일정 횟수 이하의 로그인 실패는 무시하고 임계치를 넘을 때만 경보를 발생시키는 기법은?",
  "c": [
   "Clipping level",
   "Baseline",
   "Sampling",
   "Aggregation"
  ],
  "a": 0,
  "e": "Clipping level은 경보 피로를 줄이는 임계치 설정."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "Which technology BEST automates the containment of a compromised endpoint based on a predefined playbook?",
  "c": [
   "SIEM",
   "SOAR",
   "NetFlow",
   "Vulnerability scanner"
  ],
  "a": 1,
  "e": "SOAR orchestrates and automates response actions using playbooks."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 3,
  "q": "정상 사용자 계정이 평소와 달리 새벽에 대량의 파일을 내려받았다. 서명 기반 탐지로는 잡히지 않는 이 행위를 탐지하는 데 가장 적합한 것은?",
  "c": [
   "UEBA",
   "안티바이러스",
   "패킷 필터 방화벽",
   "RAID"
  ],
  "a": 0,
  "e": "UEBA는 행위 기준선 이탈(이상)을 탐지 — 내부자·계정 탈취에 적합."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "외부로 나가는 트래픽을 감시해 민감정보 유출을 탐지·차단하는 활동은?",
  "c": [
   "Ingress filtering",
   "Egress monitoring",
   "Port scanning",
   "Hardening"
  ],
  "a": 1,
  "e": "Egress monitoring·DLP가 데이터 유출을 다룬다."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "공격자의 전술·기법을 체계화해 위협 헌팅과 탐지 규칙 설계에 널리 쓰이는 지식 베이스는?",
  "c": [
   "OWASP Top 10",
   "MITRE ATT&CK",
   "CVSS",
   "ITIL"
  ],
  "a": 1,
  "e": "MITRE ATT&CK는 TTP(전술·기법·절차) 지식 베이스."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 1,
  "q": "ISC2 사고 관리 단계 중 '격리(containment)'로 피해 확산을 막는 단계는?",
  "c": [
   "Detection",
   "Mitigation",
   "Reporting",
   "Lessons learned"
  ],
  "a": 1,
  "e": "Mitigation 단계의 핵심이 격리."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "사고 대응 중 감염된 서버를 발견했다. 증거 보존을 고려할 때 가장 적절한 첫 조치는?",
  "c": [
   "즉시 전원을 차단한다",
   "네트워크에서 격리하고 휘발성 데이터를 수집한다",
   "OS를 재설치한다",
   "백업으로 즉시 덮어쓴다"
  ],
  "a": 1,
  "e": "격리로 확산을 막되 휘발성 증거는 보존한다."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "사고 대응 마지막 단계인 'Lessons learned'의 주된 목적은?",
  "c": [
   "책임자 처벌",
   "보험금 청구",
   "절차·통제 개선으로 재발 방지",
   "증거 파기"
  ],
  "a": 2,
  "e": "사후 검토로 프로세스와 통제를 개선한다."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 3,
  "q": "A security manager confirms a data breach involving customer PII. Which action should be taken FIRST after containment?",
  "c": [
   "Publish details on social media",
   "Follow the incident response plan's reporting requirements, including legal/regulatory notification",
   "Delete all logs to prevent further leakage",
   "Rebuild every server in the enterprise"
  ],
  "a": 1,
  "e": "Reporting obligations (management, legal, regulators, customers) follow the IR plan and statutory deadlines."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "의심스러운 첨부 파일을 격리된 환경에서 실행해 행위를 관찰하는 탐지·예방 수단은?",
  "c": [
   "Sandboxing",
   "Whitelisting",
   "Tokenization",
   "Steganography"
  ],
  "a": 0,
  "e": "샌드박스는 격리 실행 환경."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "다음 중 '사고(incident)'에 가장 가까운 것은?",
  "c": [
   "사용자가 정상 로그인했다",
   "서버 CPU 사용률이 50%이다",
   "공격자가 관리자 계정을 탈취해 데이터를 열람했다",
   "정기 패치가 적용됐다"
  ],
  "a": 2,
  "e": "사고는 보안 정책 위반 또는 CIA 침해가 현실화된 이벤트."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 3,
  "q": "사고의 근본 원인을 분석해 취약점을 제거하는 ISC2 사고 관리 단계는?",
  "c": [
   "Recovery",
   "Remediation",
   "Response",
   "Detection"
  ],
  "a": 1,
  "e": "Remediation은 RCA와 근본 원인 제거. Recovery는 운영 복귀."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 1,
  "q": "마지막 전체 백업 이후 변경된 모든 데이터를 백업하며 아카이브 비트를 해제하지 않는 방식은?",
  "c": [
   "전체 백업",
   "증분 백업",
   "차등 백업",
   "미러 백업"
  ],
  "a": 2,
  "e": "차등 백업 — 복원 시 전체 + 마지막 차등."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 1,
  "q": "디스크 1개 장애를 허용하는 분산 패리티 방식의 RAID 레벨은?",
  "c": [
   "RAID 0",
   "RAID 1",
   "RAID 5",
   "RAID 10"
  ],
  "a": 2,
  "e": "RAID 5는 분산 패리티로 1개 디스크 장애 허용."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 2,
  "q": "비용은 가장 낮지만 복구에 가장 오랜 시간이 걸리는 복구 사이트는?",
  "c": [
   "Hot site",
   "Warm site",
   "Cold site",
   "Mirrored site"
  ],
  "a": 2,
  "e": "Cold site는 공간·전원·HVAC만 제공."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 2,
  "q": "대체 사이트를 실제로 가동해 처리를 수행하되 주 사이트의 운영은 유지하는 DR 테스트는?",
  "c": [
   "Checklist",
   "Simulation",
   "Parallel",
   "Full interruption"
  ],
  "a": 2,
  "e": "Parallel test는 운영 영향 없이 실제 시스템을 검증."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 3,
  "q": "Which DR test carries the GREATEST risk to business operations?",
  "c": [
   "Structured walk-through",
   "Parallel test",
   "Full interruption test",
   "Read-through test"
  ],
  "a": 2,
  "e": "Full interruption shuts down the primary site and requires senior management approval."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 3,
  "q": "재해 후 대체 사이트에서 주 사이트로 복귀할 때 가장 먼저 옮겨야 하는 업무는?",
  "c": [
   "가장 중요한 업무",
   "가장 덜 중요한 업무",
   "매출이 가장 큰 업무",
   "규제 대상 업무"
  ],
  "a": 1,
  "e": "복구된 주 사이트의 안정성을 덜 중요한 업무로 먼저 검증한다."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 2,
  "q": "Which metric MOST directly determines how frequently backups must be taken?",
  "c": [
   "RTO",
   "RPO",
   "MTTR",
   "MTBF"
  ],
  "a": 1,
  "e": "RPO defines the maximum tolerable data loss, which drives backup frequency."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 3,
  "q": "재해 발생 시 출입 통제 도어의 전원이 끊겼다. 데이터센터 직원 대피를 고려할 때 비상구 도어의 적절한 설정은?",
  "c": [
   "Fail-secure (잠김 유지)",
   "Fail-safe (개방)",
   "Fail-closed",
   "Fail-soft"
  ],
  "a": 1,
  "e": "인명 안전 최우선 — 비상구는 fail-safe(전원 상실 시 개방)."
 },
 {
  "s": "s7",
  "t": "운영 통제",
  "d": 1,
  "q": "다른 사람이 업무를 대신 수행하게 함으로써 은폐된 부정을 드러내는 통제는?",
  "c": [
   "직무 분리",
   "강제 휴가",
   "최소 권한",
   "Need-to-know"
  ],
  "a": 1,
  "e": "강제 휴가·직무 순환은 탐지 통제."
 },
 {
  "s": "s7",
  "t": "운영 통제",
  "d": 2,
  "q": "변경 관리 절차에서 변경 승인 전에 반드시 수행되어야 하는 것은?",
  "c": [
   "변경 구현",
   "영향 분석(impact analysis)",
   "사용자 교육",
   "사후 검토"
  ],
  "a": 1,
  "e": "요청 → 영향 분석·검토 → 승인 → 테스트 → 구현 → 문서화."
 },
 {
  "s": "s7",
  "t": "운영 통제",
  "d": 2,
  "q": "Which is the PRIMARY purpose of a configuration baseline?",
  "c": [
   "To track user passwords",
   "To define an approved secure configuration against which systems are measured",
   "To store backup images offsite",
   "To replace change management"
  ],
  "a": 1,
  "e": "A baseline is the approved secure configuration; deviations (drift) are detected against it."
 },
 {
  "s": "s7",
  "t": "운영 통제",
  "d": 3,
  "q": "운영팀이 긴급 보안 패치를 CAB 승인 없이 야간에 적용했다. 변경 관리 관점에서 올바른 후속 조치는?",
  "c": [
   "문제가 없으니 기록할 필요가 없다",
   "긴급 변경 절차에 따라 사후 승인·문서화하고 검토한다",
   "패치를 즉시 롤백한다",
   "담당자를 즉시 해고한다"
  ],
  "a": 1,
  "e": "긴급 변경도 사후 승인·문서화·검토를 거친다."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 1,
  "q": "보안 요구사항을 반영하는 비용이 가장 적은 SDLC 단계는?",
  "c": [
   "요구사항·설계",
   "구현",
   "테스트",
   "운영"
  ],
  "a": 0,
  "e": "결함은 늦게 발견할수록 수정 비용이 커진다."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 1,
  "q": "CMMI에서 지속적 프로세스 개선이 이루어지는 최고 성숙도 단계는?",
  "c": [
   "Defined",
   "Managed",
   "Optimizing",
   "Initial"
  ],
  "a": 2,
  "e": "5단계 Optimizing."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 2,
  "q": "반복마다 위험 분석을 수행하는 것이 특징인 개발 모델은?",
  "c": [
   "Waterfall",
   "Spiral",
   "V-model",
   "Big bang"
  ],
  "a": 1,
  "e": "Spiral 모델은 위험 중심 반복 모델."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 2,
  "q": "SW-CMM에서 프로세스를 정량적으로 측정·관리하는 단계는?",
  "c": [
   "2단계",
   "3단계",
   "4단계",
   "5단계"
  ],
  "a": 2,
  "e": "4단계 Managed(CMMI: Quantitatively Managed)."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 2,
  "q": "Which approach BEST describes DevSecOps?",
  "c": [
   "Security reviews only before production release",
   "Integrating automated security testing throughout the CI/CD pipeline",
   "Separating developers from operations staff",
   "Outsourcing security to a third party"
  ],
  "a": 1,
  "e": "DevSecOps shifts security left by automating checks across the pipeline."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 3,
  "q": "OWASP SAMM과 BSIMM의 차이로 옳은 것은?",
  "c": [
   "SAMM은 처방적 모델, BSIMM은 실제 조직 관찰 기반 기술적 모델이다",
   "둘 다 하드웨어 보안 모델이다",
   "BSIMM은 OWASP가 만든 처방적 모델이다",
   "SAMM은 네트워크 성숙도 모델이다"
  ],
  "a": 0,
  "e": "SAMM = prescriptive, BSIMM = descriptive."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 2,
  "q": "애자일 개발에서 보안 요구사항을 반영하는 방법으로 가장 적절한 것은?",
  "c": [
   "보안은 마지막 스프린트에만 다룬다",
   "보안 사용자 스토리와 악용 사례(abuse case)를 백로그에 포함한다",
   "애자일에서는 보안 요구사항을 다루지 않는다",
   "모든 스프린트를 보안팀이 승인할 때까지 중단한다"
  ],
  "a": 1,
  "e": "보안 스토리·abuse case를 백로그에 넣어 지속적으로 반영."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 1,
  "q": "SQL 인젝션에 대한 가장 효과적인 코드 수준 대응은?",
  "c": [
   "매개변수화 쿼리",
   "클라이언트 측 검증",
   "출력 인코딩",
   "HTTPS 적용"
  ],
  "a": 0,
  "e": "Prepared statement로 입력이 쿼리 구조로 해석되지 않게 한다."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 1,
  "q": "소스 코드를 실행하지 않고 분석하는 보안 테스트 기법은?",
  "c": [
   "DAST",
   "SAST",
   "Fuzzing",
   "Penetration test"
  ],
  "a": 1,
  "e": "SAST — 정적 분석."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "실행 중인 웹 애플리케이션을 소스 코드 없이 외부에서 공격적으로 검사하는 기법은?",
  "c": [
   "SAST",
   "SCA",
   "DAST",
   "Code review"
  ],
  "a": 2,
  "e": "DAST는 블랙박스 동적 분석."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "검사 시점과 사용 시점 사이의 차이를 악용하는 취약점은?",
  "c": [
   "XSS",
   "TOCTOU",
   "CSRF",
   "SSRF"
  ],
  "a": 1,
  "e": "Time-of-check to time-of-use 경쟁 조건."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "인증된 사용자의 브라우저가 의도하지 않은 요청을 보내게 만드는 공격에 대한 대응으로 가장 적절한 것은?",
  "c": [
   "Anti-CSRF 토큰",
   "버퍼 경계 검사",
   "DB 암호화",
   "RAID"
  ],
  "a": 0,
  "e": "CSRF는 예측 불가 토큰·SameSite 쿠키로 방어."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 3,
  "q": "A developer displays full database error messages to end users. Which risk is MOST directly introduced?",
  "c": [
   "Denial of service",
   "Information disclosure that aids attackers",
   "Loss of availability of backups",
   "Privilege escalation through RAID"
  ],
  "a": 1,
  "e": "Verbose errors leak schema and internals; use generic messages and log details server-side."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "OWASP Top 10 2021에서 1위(A01)로 선정된 위험은?",
  "c": [
   "Injection",
   "Broken Access Control",
   "Cryptographic Failures",
   "SSRF"
  ],
  "a": 1,
  "e": "A01 Broken Access Control."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 3,
  "q": "API에서 사용자가 URL의 객체 ID만 바꿔 다른 사용자의 데이터를 조회할 수 있었다. 가장 적절한 대응은?",
  "c": [
   "TLS 버전 상향",
   "요청마다 객체 수준 인가(authorization) 검사",
   "응답 압축",
   "API 문서 비공개"
  ],
  "a": 1,
  "e": "BOLA/IDOR — 서버가 객체 단위 권한을 검증해야 한다."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "무작위·비정상 입력을 대량 주입해 충돌이나 예외를 찾는 테스트 기법은?",
  "c": [
   "Fuzzing",
   "Regression testing",
   "Code signing",
   "Static analysis"
  ],
  "a": 0,
  "e": "퍼징은 입력 처리 결함·메모리 오류 탐지에 효과적."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 3,
  "q": "Which control BEST ensures that software distributed to customers has not been altered after release?",
  "c": [
   "Input validation",
   "Code signing",
   "Obfuscation",
   "Fuzz testing"
  ],
  "a": 1,
  "e": "Digital code signing provides integrity and origin authentication."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 1,
  "q": "소프트웨어에 포함된 구성요소·버전 목록을 뜻하는 용어는?",
  "c": [
   "SLA",
   "SBOM",
   "SOC 2",
   "SDLC"
  ],
  "a": 1,
  "e": "Software Bill of Materials."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 2,
  "q": "COTS 공급업체의 파산에 대비해 소스 코드를 제3자에게 예치하는 계약은?",
  "c": [
   "Software escrow",
   "NDA",
   "SLA",
   "MOU"
  ],
  "a": 0,
  "e": "소스 코드 에스크로."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 2,
  "q": "오픈소스 라이브러리의 알려진 취약점과 라이선스를 식별하는 도구 유형은?",
  "c": [
   "DAST",
   "SCA",
   "SIEM",
   "DLP"
  ],
  "a": 1,
  "e": "Software Composition Analysis."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 3,
  "q": "An organization plans to adopt a SaaS application for HR data. What should the security manager do FIRST?",
  "c": [
   "Perform a security assessment of the provider, including reviewing independent audit reports such as SOC 2",
   "Deploy a WAF in front of the SaaS application",
   "Rewrite the application's source code",
   "Ban all cloud services"
  ],
  "a": 0,
  "e": "Assess the provider's controls (due diligence) before acquisition; SOC 2 Type II gives independent assurance."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 3,
  "q": "새로운 오픈소스 라이브러리 취약점이 공개되었다. 영향받는 사내 애플리케이션을 가장 빨리 파악할 수 있게 해 주는 것은?",
  "c": [
   "최신 SBOM",
   "침입 탐지 시스템",
   "DR 계획",
   "보안 인식 교육"
  ],
  "a": 0,
  "e": "SBOM으로 구성요소 사용처를 즉시 조회."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 2,
  "q": "외주 개발 계약에 포함해야 할 보안 조항으로 가장 적절한 것은?",
  "c": [
   "보안 요구사항·코드 검토와 감사 권한(right to audit)",
   "개발자 연봉 공개",
   "무제한 일정 연장",
   "소스 코드 소유권 포기"
  ],
  "a": 0,
  "e": "계약으로 보안 요구·검증·감사권을 확보한다."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 1,
  "q": "트랜잭션이 전부 수행되거나 전혀 수행되지 않아야 한다는 ACID 속성은?",
  "c": [
   "Atomicity",
   "Consistency",
   "Isolation",
   "Durability"
  ],
  "a": 0,
  "e": "원자성."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 2,
  "q": "같은 기본키에 대해 보안 등급별로 다른 레코드를 두어 추론 공격을 막는 기법은?",
  "c": [
   "Normalization",
   "Polyinstantiation",
   "Aggregation",
   "Replication"
  ],
  "a": 1,
  "e": "다중인스턴스화."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 2,
  "q": "동시에 실행되는 트랜잭션이 서로의 중간 결과를 보지 못하게 하는 ACID 속성은?",
  "c": [
   "Atomicity",
   "Durability",
   "Isolation",
   "Consistency"
  ],
  "a": 2,
  "e": "고립성 — 잠금 등 동시성 제어로 구현."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 3,
  "q": "Which is the BEST way to protect secrets such as API keys used by a CI/CD pipeline?",
  "c": [
   "Hard-code them in the source repository",
   "Store them in a dedicated secrets management vault with access controls and rotation",
   "Email them to developers",
   "Put them in a public wiki"
  ],
  "a": 1,
  "e": "Use a secrets manager with least privilege, auditing and rotation."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 3,
  "q": "개별적으로는 비밀이 아닌 여러 정보를 모아 기밀 정보를 얻는 DB 위협은?",
  "c": [
   "Inference",
   "Aggregation",
   "Deadlock",
   "Rollback"
  ],
  "a": 1,
  "e": "집계(aggregation). 추론은 아는 정보로 모르는 정보를 추측하는 것."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 1,
  "q": "Guideline 은 권고 사항이므로 준수가 필수가 아니다.",
  "a": true,
  "e": "Guideline 만 선택. Policy·Standard·Baseline·Procedure 는 필수."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 2,
  "q": "보안의 최종 책임(accountability)은 CISO 에게 위임할 수 있다.",
  "a": false,
  "e": "책임(accountability)은 위임 불가 — 고위 경영진에게 남는다."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 1,
  "q": "대칭키 MAC 은 부인방지를 제공한다.",
  "a": false,
  "e": "양측이 같은 키를 가져 누가 생성했는지 증명 불가."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 2,
  "q": "Due Diligence 는 위험을 조사·검증·감독하는 지속적인 활동이다.",
  "a": true,
  "e": "시행(Due Care)과 구분."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 2,
  "q": "NIST CSF 2.0 은 Govern 을 포함한 6개 기능으로 구성된다.",
  "a": true,
  "e": "Govern·Identify·Protect·Detect·Respond·Recover."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 1,
  "q": "민사 소송의 입증 기준은 '합리적 의심의 여지가 없는 증명'이다.",
  "a": false,
  "e": "민사 = 증거의 우세. 합리적 의심은 형사."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "(ISC)² 윤리강령 규범은 충돌 시 나열 순서대로 우선한다.",
  "a": true,
  "e": "사회 > 정직·합법 > 주인 > 직업."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "특허를 받으면 발명 내용을 비공개로 유지할 수 있다.",
  "a": false,
  "e": "특허는 공개가 대가. 비공개 보호는 영업비밀."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "GDPR 은 EU 밖에 있는 조직에도 EU 정보주체에게 재화·용역을 제공하면 적용될 수 있다.",
  "a": true,
  "e": "역외 적용(Art.3)."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 1,
  "q": "PCI DSS 는 미국 연방 법률이다.",
  "a": false,
  "e": "업계 표준, 계약상 의무."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 1,
  "q": "ALE 는 SLE 에 ARO 를 곱한 값이다.",
  "a": true,
  "e": "SLE = AV × EF."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "위험을 보험으로 전가하면 법적 책임도 보험사로 이전된다.",
  "a": false,
  "e": "재무 손실만 이전, 책임은 남는다."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "잔여위험은 통제를 적용한 후에도 남아 있는 위험이다.",
  "a": true,
  "e": "Residual risk."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 3,
  "q": "통제의 연간 비용이 ALE 감소분보다 크면 일반적으로 도입하지 않는다.",
  "a": true,
  "e": "비용 대비 효익(cost-benefit) 원칙."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "STRIDE 의 Elevation of privilege 는 가용성 위협이다.",
  "a": false,
  "e": "인가(authorization) 위협. 가용성은 Denial of service."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 1,
  "q": "RTO 는 허용 가능한 데이터 손실 시점을 의미한다.",
  "a": false,
  "e": "그것은 RPO. RTO 는 복구 시간 목표."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 2,
  "q": "RTO 와 WRT 의 합은 MTD 를 넘지 않아야 한다.",
  "a": true,
  "e": "RTO + WRT ≤ MTD."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 2,
  "q": "DRP 는 BCP 의 하위 계획으로 IT 시스템 복구에 초점을 둔다.",
  "a": true,
  "e": "BCP = 업무 지속, DRP = IT 복구."
 },
 {
  "s": "s1",
  "t": "인적보안·교육",
  "d": 1,
  "q": "직무 분리(SoD)는 공모(collusion)를 완벽히 막는다.",
  "a": false,
  "e": "공모 시 우회 가능 — 순환·감사로 보완."
 },
 {
  "s": "s1",
  "t": "인적보안·교육",
  "d": 2,
  "q": "의무 휴가는 부정행위 탐지에 도움이 된다.",
  "a": true,
  "e": "휴가 중 대체자가 업무를 수행하며 이상 징후 발견."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 1,
  "q": "데이터 분류 등급은 데이터 소유자가 결정한다.",
  "a": true,
  "e": "Custodian 은 운영."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 2,
  "q": "분류 등급은 한 번 정하면 변경하지 않는다.",
  "a": false,
  "e": "가치·민감도 변화에 따라 소유자 승인으로 재분류."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 1,
  "q": "Secret 등급은 공개 시 '심각한(serious) 피해'를 초래하는 정보다.",
  "a": true,
  "e": "TS 는 exceptionally grave."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 2,
  "q": "자산 인벤토리는 분류·보호 활동의 전제다.",
  "a": true,
  "e": "모르는 자산은 보호할 수 없다."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 1,
  "q": "Data Processor 는 처리 목적과 수단을 결정한다.",
  "a": false,
  "e": "그것은 Controller."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 2,
  "q": "개인정보 처리를 클라우드에 위탁해도 Controller 의 책임은 남는다.",
  "a": true,
  "e": "책임 위임 불가."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 2,
  "q": "Data Custodian 은 소유자가 정한 정책에 따라 백업과 접근권한 설정을 수행한다.",
  "a": true,
  "e": "기술 운영 역할."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 1,
  "q": "디가우징은 SSD 소거에 효과적이다.",
  "a": false,
  "e": "자기 매체만 해당."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "파일을 삭제하거나 포맷해도 데이터가 복구될 수 있다.",
  "a": true,
  "e": "데이터 잔존."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "암호 소거(crypto erase)는 NIST SP 800-88 에서 Purge 방법으로 인정된다.",
  "a": true,
  "e": "적절히 구현된 경우 Purge."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "EOL 은 제조사가 보안 패치 지원을 종료하는 시점이다.",
  "a": false,
  "e": "그것은 EOS. EOL 은 판매·생산 중단."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "Scoping 은 기준 통제 중 적용할 통제를 선택하는 과정이다.",
  "a": true,
  "e": "Tailoring 은 조정."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "가명처리된 데이터는 GDPR 상 개인정보가 아니다.",
  "a": false,
  "e": "추가 정보로 재식별 가능 — 여전히 개인정보."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 3,
  "q": "사용 중(in use) 데이터는 저장·전송 상태보다 암호화로 보호하기 어렵다.",
  "a": true,
  "e": "처리하려면 복호화가 필요 — TEE·동형암호 등."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 1,
  "q": "Bell-LaPadula 모델은 무결성 보호를 주목적으로 한다.",
  "a": false,
  "e": "BLP는 기밀성. 무결성은 Biba·Clark-Wilson."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 1,
  "q": "Biba 모델의 Star Integrity Property는 No Write Up이다.",
  "a": true,
  "e": "하위 주체가 상위 무결성 객체를 오염시키지 못함."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "Brewer-Nash 모델은 사용자 접근 이력에 따라 권한이 동적으로 변한다.",
  "a": true,
  "e": "Chinese Wall."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "Common Criteria의 Security Target은 사용자 그룹이 작성하는 구현 독립적 요구 문서이다.",
  "a": false,
  "e": "그것은 Protection Profile. ST는 벤더가 특정 제품에 대해 작성."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 1,
  "q": "HMAC은 부인방지를 제공한다.",
  "a": false,
  "e": "공유 대칭키를 사용하므로 부인방지 불가."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 1,
  "q": "AES의 블록 크기는 키 길이와 관계없이 128비트이다.",
  "a": true,
  "e": "키는 128/192/256, 블록은 128 고정."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "OCSP stapling은 웹 서버가 OCSP 응답을 TLS 핸드셰이크에 첨부해 제공하는 방식이다.",
  "a": true,
  "e": "클라이언트 조회 부담과 프라이버시 노출 감소."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "Grover 알고리즘은 AES-256을 다항 시간에 해독할 수 있다.",
  "a": false,
  "e": "탐색 속도를 제곱근으로 줄여 유효 강도가 약 128비트가 될 뿐."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 3,
  "q": "GCM 모드는 기밀성과 무결성을 동시에 제공하는 AEAD 모드이다.",
  "a": true,
  "e": "Galois/Counter Mode — 인증 태그 포함."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 1,
  "q": "Defense in depth는 단일 통제 실패가 전체 보안 실패로 이어지지 않도록 다층 통제를 두는 원칙이다.",
  "a": true,
  "e": "계층 방어."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 2,
  "q": "Polyinstantiation은 서로 다른 보안 수준에 같은 키의 레코드를 여러 개 두어 추론 공격을 막는 기법이다.",
  "a": true,
  "e": "하위 사용자에게 cover story 제공."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 2,
  "q": "Maintenance hook(백도어)은 운영 환경 배포 전에 제거해야 한다.",
  "a": true,
  "e": "개발용 우회 경로는 공격 경로가 된다."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 3,
  "q": "Type 1 하이퍼바이저는 호스트 OS 위에서 애플리케이션처럼 동작한다.",
  "a": false,
  "e": "Type 1은 베어메탈, Type 2가 호스티드."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 1,
  "q": "Deluge 스프링클러는 모든 헤드가 열려 있어 대량의 물을 한 번에 방출한다.",
  "a": true,
  "e": "데이터센터에는 부적합."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 2,
  "q": "서버실은 건물 최상층이나 지하에 두는 것이 가장 안전하다.",
  "a": false,
  "e": "최상층(지붕 누수·화재)·지하(침수) 모두 회피 — 건물 중심부 권장."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 2,
  "q": "출입문 장애 시 사람 안전보다 자산 보호를 우선하는 것이 ISC2 관점이다.",
  "a": false,
  "e": "생명 안전이 항상 최우선."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 1,
  "q": "OSI 전송 계층의 PDU는 세그먼트(TCP) 또는 데이터그램(UDP)이다.",
  "a": true,
  "e": "L4."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 1,
  "q": "광섬유는 UTP보다 전자기 간섭에 취약하다.",
  "a": false,
  "e": "광섬유는 EMI 영향이 없다."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "FCoE는 IP 계층을 사용해 라우팅 가능한 스토리지 프로토콜이다.",
  "a": false,
  "e": "FCoE는 이더넷(L2) 위에서 동작, IP를 쓰는 것은 iSCSI."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "무선 LAN은 충돌 회피 방식인 CSMA/CA를 사용한다.",
  "a": true,
  "e": "유선 이더넷은 CSMA/CD."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 1,
  "q": "IDS는 out-of-band 방식으로 트래픽 복사본을 분석해 경보를 발생시킨다.",
  "a": true,
  "e": "SPAN·TAP 활용."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 2,
  "q": "시그니처 기반 탐지는 제로데이 공격 탐지에 강하다.",
  "a": false,
  "e": "알려진 패턴만 탐지."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 2,
  "q": "Bastion host는 외부 공격에 노출되므로 불필요한 서비스를 제거해 강화(hardening)한다.",
  "a": true,
  "e": "최소 서비스."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 3,
  "q": "마이크로세그멘테이션은 동서(east-west) 트래픽의 횡적 이동을 제한하는 데 효과적이다.",
  "a": true,
  "e": "Zero Trust 구현 요소."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 1,
  "q": "IPsec AH는 페이로드를 암호화한다.",
  "a": false,
  "e": "AH는 암호화하지 않는다."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 1,
  "q": "WEP는 RC4와 24비트 IV를 사용해 IV 재사용 취약점이 있다.",
  "a": true,
  "e": "폐기."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "RADIUS는 TCP를 사용하며 전체 패킷을 암호화한다.",
  "a": false,
  "e": "RADIUS는 UDP, 비밀번호 필드만 암호화. 전체 암호화는 TACACS+."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "SSID 브로드캐스트를 숨기면 무선 네트워크가 효과적으로 보호된다.",
  "a": false,
  "e": "수동 스니핑으로 쉽게 확인 가능."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 3,
  "q": "TLS 1.3의 0-RTT 데이터는 재전송(replay) 공격 위험이 있다.",
  "a": true,
  "e": "멱등 요청에만 사용 권장."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 1,
  "q": "Fraggle 공격은 ICMP 대신 UDP를 이용한 증폭 공격이다.",
  "a": true,
  "e": "Smurf의 UDP 변형."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 2,
  "q": "DNSSEC은 DNS 질의 내용을 암호화해 기밀성을 보장한다.",
  "a": false,
  "e": "무결성·출처 인증만."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 2,
  "q": "Bluesnarfing은 블루투스로 기기의 데이터를 무단 탈취하는 공격이다.",
  "a": true,
  "e": "Bluejacking은 원치 않는 메시지 전송."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 1,
  "q": "비밀번호와 PIN을 함께 사용하는 것은 다중 요소 인증이다.",
  "a": false,
  "e": "둘 다 지식 요소 — 단일 요소."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 1,
  "q": "FAR은 Type II 오류이다.",
  "a": true,
  "e": "False Acceptance = Type II."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "CER이 높을수록 생체 인식 장치가 정확하다.",
  "a": false,
  "e": "CER이 낮을수록 정확."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "Kerberos는 클라이언트와 KDC 간 시간 동기화가 필요하다.",
  "a": true,
  "e": "타임스탬프 기반 재전송 방지."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "HOTP는 시간 단계를 기반으로 일회용 비밀번호를 생성한다.",
  "a": false,
  "e": "HOTP는 카운터, TOTP가 시간 기반."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 3,
  "q": "NIST SP 800-63B는 주기적인 비밀번호 강제 변경을 권장하지 않고 침해 징후 시 변경을 요구한다.",
  "a": true,
  "e": "임의 주기 변경을 요구하지 말 것(SHOULD NOT)으로 권고."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 1,
  "q": "SAML 어설션은 XML 형식이다.",
  "a": true,
  "e": "SAML = Security Assertion Markup Language."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "OAuth 2.0은 그 자체로 사용자 인증을 위한 프로토콜이다.",
  "a": false,
  "e": "인가 프레임워크. 인증은 OIDC."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "RADIUS는 패킷 전체를 암호화한다.",
  "a": false,
  "e": "RADIUS는 비밀번호 속성만 암호화, TACACS+는 본문 전체 암호화."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "SSO는 하나의 자격 증명 탈취가 다수 시스템 침해로 이어질 수 있다.",
  "a": true,
  "e": "그래서 SSO에는 강한 MFA가 필수."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 1,
  "q": "DAC에서는 객체 소유자가 접근 권한을 부여한다.",
  "a": true,
  "e": "소유자 재량."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 2,
  "q": "MAC 환경에서 사용자는 자신이 만든 파일의 분류 레이블을 임의로 낮출 수 있다.",
  "a": false,
  "e": "레이블은 시스템이 강제."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 2,
  "q": "ABAC는 환경 속성(시간·위치)을 접근 결정에 반영할 수 있다.",
  "a": true,
  "e": "주체·객체·환경 속성."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 1,
  "q": "퇴사자 계정은 퇴사 처리와 동시에 비활성화해야 한다.",
  "a": true,
  "e": "즉시 비활성화가 원칙."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 2,
  "q": "Privilege creep은 직무 이동 시 이전 권한을 회수하지 않아 권한이 누적되는 현상이다.",
  "a": true,
  "e": "정기 접근 검토로 방지."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 3,
  "q": "공유 관리자 계정은 비밀번호가 충분히 강하면 책임추적성 문제가 없다.",
  "a": false,
  "e": "누가 했는지 식별 불가 — 강도와 무관."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 1,
  "q": "제3자 감사는 내부 감사보다 독립성이 높다.",
  "a": true,
  "e": "독립 기관 수행."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "KRI는 이미 발생한 사고 건수만을 측정하는 후행 지표이다.",
  "a": false,
  "e": "KRI는 위험 증가의 선행 신호."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "평가 범위와 교전 규칙은 평가 수행 후 결과에 맞춰 작성한다.",
  "a": false,
  "e": "수행 전 문서화·승인."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 3,
  "q": "보안 지표 보고는 경영진이 의사결정할 수 있도록 위험·비즈니스 관점으로 제시해야 한다.",
  "a": true,
  "e": "관리자 관점."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 1,
  "q": "침투 테스트는 취약점을 실제로 악용해 영향을 입증한다.",
  "a": true,
  "e": "스캔과의 차이."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "인증 스캔은 비인증 스캔보다 일반적으로 오탐이 많다.",
  "a": false,
  "e": "내부 정보를 보므로 더 정확."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "Black box 테스트는 테스터에게 사전 정보를 최대한 제공한다.",
  "a": false,
  "e": "그것은 white box."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "CVE는 취약점의 고유 식별자이고 CVSS는 심각도 점수 체계이다.",
  "a": true,
  "e": "CVE=ID, CVSS=점수, CWE=약점 유형."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 3,
  "q": "침투 테스트는 경영진 서면 승인 없이 수행하면 법적 문제가 될 수 있다.",
  "a": true,
  "e": "승인·RoE 필수."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 1,
  "q": "SAST는 애플리케이션을 실행하면서 외부에서 공격을 시도한다.",
  "a": false,
  "e": "그것은 DAST."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "Generation fuzzing은 입력 형식 모델을 이용해 새로운 테스트 입력을 만든다.",
  "a": true,
  "e": "Intelligent fuzzing."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "코드 커버리지 100%는 보안 취약점이 없음을 보장한다.",
  "a": false,
  "e": "실행 여부일 뿐."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 1,
  "q": "SOC 2는 보안·가용성·처리 무결성·기밀성·프라이버시 기준을 다룬다.",
  "a": true,
  "e": "Trust Services Criteria."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 2,
  "q": "SOC 2 Type II는 일정 기간 통제의 운영 효과성을 테스트한다.",
  "a": true,
  "e": "기간 운영 효과성."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 2,
  "q": "SOC 3 보고서는 상세한 통제 테스트 결과를 포함한다.",
  "a": false,
  "e": "공개용 요약."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 1,
  "q": "증거 보관 연속성(chain of custody)은 증거 수집부터 법정 제출까지 모든 취급 이력을 기록한다.",
  "a": true,
  "e": "공백이 생기면 증거 능력이 다투어진다."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "민사 소송의 입증 기준은 '합리적 의심 없는 증명'이다.",
  "a": false,
  "e": "민사는 증거의 우월, 형사가 합리적 의심 없는 증명."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "포렌식 분석은 원본 매체에서 직접 수행하는 것이 가장 정확하다.",
  "a": false,
  "e": "원본은 보존하고 검증된 이미지 사본으로 분석."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 3,
  "q": "허니팟으로 공격 의도가 없는 사람을 범죄로 유도하는 것은 함정(entrapment)으로 불법이 될 수 있다.",
  "a": true,
  "e": "유인(enticement)과 함정(entrapment)을 구분."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "SOAR는 플레이북 기반으로 보안 대응을 자동화·조율한다.",
  "a": true,
  "e": "Orchestration, Automation and Response."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "클리핑 레벨은 모든 이벤트를 빠짐없이 경보로 올리기 위한 설정이다.",
  "a": false,
  "e": "임계치 이하 이벤트를 걸러 경보 피로를 줄인다."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "로그 무결성을 위해 로그를 생성 시스템과 분리된 중앙 서버에 저장하는 것이 좋다.",
  "a": true,
  "e": "공격자가 침해 시스템의 로그를 지우는 것을 방지."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 1,
  "q": "ISC2 사고 관리에서 Mitigation 단계의 핵심은 격리(containment)이다.",
  "a": true,
  "e": "확산 차단이 목적."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "사고 대응에서 Lessons learned 단계는 시간이 남을 때만 선택적으로 수행한다.",
  "a": false,
  "e": "재발 방지를 위한 필수 단계."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "모든 보안 이벤트는 보안 사고(incident)이다.",
  "a": false,
  "e": "사고는 CIA 침해·정책 위반이 현실화된 이벤트로, 이벤트의 부분집합."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 1,
  "q": "RAID는 백업을 대체할 수 있다.",
  "a": false,
  "e": "삭제·랜섬웨어·논리 오류는 RAID로 복구 불가."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 1,
  "q": "증분 백업은 복원 시 전체 백업과 이후의 모든 증분 백업이 필요하다.",
  "a": true,
  "e": "차등은 전체 + 마지막 차등만 필요."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 2,
  "q": "Hot site는 Cold site보다 비용이 높지만 RTO가 짧다.",
  "a": true,
  "e": "비용과 복구 시간은 반비례 관계."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 2,
  "q": "Parallel 테스트는 주 사이트의 운영을 중단한 상태에서 수행한다.",
  "a": false,
  "e": "주 사이트 운영을 유지 — 중단하는 것은 Full interruption."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 3,
  "q": "재해 상황에서 데이터 보호와 인명 안전이 충돌하면 데이터 보호가 우선이다.",
  "a": false,
  "e": "인명 안전이 언제나 최우선."
 },
 {
  "s": "s7",
  "t": "운영 통제",
  "d": 1,
  "q": "직무 분리(SoD)는 한 사람이 중요 업무 전 과정을 단독으로 수행하지 못하게 하는 예방 통제이다.",
  "a": true,
  "e": "공모 없이는 부정이 어렵다."
 },
 {
  "s": "s7",
  "t": "운영 통제",
  "d": 2,
  "q": "긴급 변경은 변경 관리 절차의 적용 대상이 아니다.",
  "a": false,
  "e": "긴급 변경도 사후 승인·문서화가 필요."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 1,
  "q": "보안 요구사항은 SDLC의 요구사항 단계에서부터 반영해야 한다.",
  "a": true,
  "e": "가장 저렴하고 효과적."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 2,
  "q": "CMMI 3단계는 Optimizing이다.",
  "a": false,
  "e": "3단계는 Defined, 5단계가 Optimizing."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 2,
  "q": "Spiral 모델은 반복마다 위험 분석을 수행한다.",
  "a": true,
  "e": "위험 중심 반복 모델."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 3,
  "q": "BSIMM은 실제 조직들의 보안 활동을 관찰해 만든 기술적(descriptive) 모델이다.",
  "a": true,
  "e": "SAMM은 처방적(prescriptive)."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 1,
  "q": "클라이언트 측 입력 검증만으로 인젝션 공격을 막을 수 있다.",
  "a": false,
  "e": "우회 가능 — 서버 측 검증 필수."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "DAST는 소스 코드에 접근하지 않고 수행할 수 있다.",
  "a": true,
  "e": "블랙박스 방식."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "OWASP Top 10 2021에서 XSS는 Injection 범주에 포함되었다.",
  "a": true,
  "e": "A03 Injection에 통합."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 3,
  "q": "상세한 DB 오류 메시지를 사용자에게 보여주면 디버깅에 도움이 되므로 운영 환경에서도 권장된다.",
  "a": false,
  "e": "정보 노출 위험 — 일반 메시지만 표시하고 상세 내용은 서버 로그에 기록."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "코드 서명은 소프트웨어의 무결성과 출처를 검증하는 데 사용된다.",
  "a": true,
  "e": "디지털 서명 기반."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 1,
  "q": "SBOM은 소프트웨어 구성요소와 버전 목록이다.",
  "a": true,
  "e": "SPDX·CycloneDX 형식."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 2,
  "q": "소프트웨어 에스크로는 공급업체 파산 시 구매자가 소스 코드에 접근할 수 있게 한다.",
  "a": true,
  "e": "제3자 예치."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 2,
  "q": "SaaS를 도입하면 데이터 보호에 대한 최종 책임도 공급자에게 이전된다.",
  "a": false,
  "e": "데이터 책임(accountability)은 고객에게 남는다."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 1,
  "q": "ACID의 Durability는 커밋된 트랜잭션 결과가 장애 후에도 유지됨을 의미한다.",
  "a": true,
  "e": "지속성."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 2,
  "q": "다중인스턴스화(polyinstantiation)는 추론 공격을 방어하는 기법이다.",
  "a": true,
  "e": "등급별로 다른 레코드를 둔다."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "위험관리",
  "d": 1,
  "q": "SLE 는 자산가치(AV)에 ____ 를 곱한 값이다. (영문 약어)",
  "a": "EF",
  "k": [
   "ef",
   "exposure factor",
   "노출계수"
  ],
  "e": "SLE = AV × EF."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "SLE $30,000, ARO 0.1 일 때 ALE 는 몇 달러인가? (숫자만)",
  "a": "3000",
  "k": [
   "3000",
   "3,000",
   "$3,000",
   "$3000"
  ],
  "e": "30,000 × 0.1 = 3,000."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "NIST RMF 를 정의한 문서 번호는 NIST SP ____ 이다.",
  "a": "800-37",
  "k": [
   "800-37",
   "80037"
  ],
  "e": "Rev.2 는 7단계."
 },
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "Microsoft 가 개발한 6가지 위협 분류 모델은?",
  "a": "STRIDE",
  "k": [
   "stride",
   "스트라이드"
  ],
  "e": "Spoofing·Tampering·Repudiation·Information disclosure·DoS·Elevation of privilege."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 1,
  "q": "업무 중단을 허용할 수 있는 최대 시간을 뜻하는 약어는? (MAD 와 동의어)",
  "a": "MTD",
  "k": [
   "mtd",
   "maximum tolerable downtime"
  ],
  "e": "MTD ≥ RTO + WRT."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 2,
  "q": "IT 시스템 비상계획 지침을 담은 NIST 문서 번호는 NIST SP ____ 이다.",
  "a": "800-34",
  "k": [
   "800-34",
   "80034"
  ],
  "e": "Contingency Planning Guide."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 1,
  "q": "GDPR 에서 개인정보 침해를 감독기관에 통지해야 하는 기한은 인지 후 몇 시간인가?",
  "a": "72",
  "k": [
   "72",
   "72시간",
   "72 hours"
  ],
  "e": "Art.33."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "미국 실용특허의 보호 기간은 출원일부터 몇 년인가?",
  "a": "20",
  "k": [
   "20",
   "20년"
  ],
  "e": "공개를 대가로 독점권."
 },
 {
  "s": "s1",
  "t": "법·규제·윤리",
  "d": 2,
  "q": "민사 소송의 입증 기준을 영어로 'preponderance of the ____' 라 한다.",
  "a": "evidence",
  "k": [
   "evidence",
   "증거"
  ],
  "e": "형사는 beyond a reasonable doubt."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 1,
  "q": "합리적인 사람이 했을 보호 조치를 실제로 시행하는 것을 'Due ____' 라 한다.",
  "a": "Care",
  "k": [
   "care",
   "due care",
   "케어"
  ],
  "e": "조사·점검은 Due Diligence."
 },
 {
  "s": "s1",
  "t": "보안 거버넌스",
  "d": 2,
  "q": "NIST CSF 2.0 에서 새로 추가된 기능의 영문 이름은?",
  "a": "Govern",
  "k": [
   "govern",
   "거버넌스",
   "통치"
  ],
  "e": "6개 기능 중 중심."
 },
 {
  "s": "s1",
  "t": "인적보안·교육",
  "d": 2,
  "q": "한 사람이 중요한 업무의 전 과정을 수행하지 못하게 나누는 원칙은? (영문 약어)",
  "a": "SoD",
  "k": [
   "sod",
   "separation of duties",
   "직무분리",
   "직무 분리"
  ],
  "e": "Separation of Duties."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 1,
  "q": "NIST SP 800-88 의 소거 수준 3단계 중 물리적으로 파괴하는 단계는?",
  "a": "Destroy",
  "k": [
   "destroy",
   "파괴"
  ],
  "e": "Clear < Purge < Destroy."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "매체 소거 지침을 담은 NIST 문서 번호는 NIST SP ____ 이다.",
  "a": "800-88",
  "k": [
   "800-88",
   "80088"
  ],
  "e": "Guidelines for Media Sanitization."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "삭제 후에도 매체에 데이터가 남아 있는 현상을 영어로?",
  "a": "Data remanence",
  "k": [
   "remanence",
   "data remanence",
   "데이터 잔존",
   "잔존"
  ],
  "e": "삭제·포맷은 소거가 아니다."
 },
 {
  "s": "s2",
  "t": "수명주기·파기",
  "d": 2,
  "q": "강한 자기장으로 자기 매체를 소거하는 방법은?",
  "a": "Degaussing",
  "k": [
   "degaussing",
   "degauss",
   "디가우징",
   "자기소거"
  ],
  "e": "SSD 무효."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 1,
  "q": "정부 분류 중 공개 시 exceptionally grave damage 를 일으키는 등급은?",
  "a": "Top Secret",
  "k": [
   "top secret",
   "topsecret",
   "1급",
   "1급비밀",
   "ts"
  ],
  "e": "최상위 등급."
 },
 {
  "s": "s2",
  "t": "데이터 역할",
  "d": 2,
  "q": "GDPR 에서 컨트롤러를 대신해 개인정보를 처리하는 주체는?",
  "a": "Processor",
  "k": [
   "processor",
   "data processor",
   "처리자",
   "수탁자"
  ],
  "e": "목적 결정은 Controller."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "선택한 기준 통제를 조직 환경에 맞게 수정·조정하는 것은?",
  "a": "Tailoring",
  "k": [
   "tailoring",
   "테일러링",
   "맞춤화"
  ],
  "e": "적용 대상 선택은 Scoping."
 },
 {
  "s": "s2",
  "t": "데이터 보호 통제",
  "d": 2,
  "q": "이메일·웹 등으로 민감정보가 외부로 나가는 것을 탐지·차단하는 솔루션의 약어는?",
  "a": "DLP",
  "k": [
   "dlp",
   "data loss prevention",
   "data leak prevention"
  ],
  "e": "Network·Endpoint·Cloud DLP."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 1,
  "q": "BLP 모델에서 Simple Security Property의 다른 표현은 'No Read ____' 이다.",
  "a": "Up",
  "k": [
   "up",
   "no read up"
  ],
  "e": "상위 등급 읽기 금지."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "Clark-Wilson 모델에서 CDI의 무결성 상태를 검증하는 절차를 약어로 ____ 라 한다.",
  "a": "IVP",
  "k": [
   "ivp",
   "integrity verification procedure"
  ],
  "e": "Integrity Verification Procedure."
 },
 {
  "s": "s3",
  "t": "보안 모델",
  "d": 2,
  "q": "Common Criteria의 국제 표준 번호는 ISO/IEC ____ 이다.",
  "a": "15408",
  "k": [
   "15408"
  ],
  "e": "TOE·PP·ST·EAL."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 1,
  "q": "공개키 인증서의 표준 형식은 ____ v3 이다.",
  "a": "X.509",
  "k": [
   "x.509",
   "x509"
  ],
  "e": "PKI 인증서 형식."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "NIST 양자내성 전자서명 표준 중 CRYSTALS-Dilithium 기반 표준의 이름은?",
  "a": "ML-DSA",
  "k": [
   "ml-dsa",
   "mldsa",
   "fips 204",
   "204",
   "dilithium"
  ],
  "e": "FIPS 204."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "한 사람이 암호키 전체를 알지 못하도록 키를 나누어 여러 사람이 보관하는 원칙은?",
  "a": "Split knowledge",
  "k": [
   "split knowledge",
   "분할 지식",
   "분할지식",
   "m of n",
   "dual control"
  ],
  "e": "Dual control과 함께 쓰인다."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 3,
  "q": "n비트 해시의 충돌을 약 2^(n/2) 시도로 찾는 공격은?",
  "a": "생일 공격",
  "k": [
   "birthday",
   "생일"
  ],
  "e": "Birthday paradox."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 2,
  "q": "보안 정책을 강제하는 하드웨어·펌웨어·소프트웨어의 총합을 약어로?",
  "a": "TCB",
  "k": [
   "tcb",
   "trusted computing base"
  ],
  "e": "Trusted Computing Base."
 },
 {
  "s": "s3",
  "t": "보안 아키텍처",
  "d": 3,
  "q": "검사 시점과 사용 시점 간격을 악용하는 경쟁 조건 공격의 약어는?",
  "a": "TOCTOU",
  "k": [
   "toctou",
   "toc/tou",
   "time of check"
  ],
  "e": "Race condition의 대표 사례."
 },
 {
  "s": "s3",
  "t": "물리 보안",
  "d": 2,
  "q": "자연 감시·자연 접근통제·영역성 강화를 원리로 하는 환경 설계 기반 범죄 예방 기법의 약어는?",
  "a": "CPTED",
  "k": [
   "cpted",
   "셉테드"
  ],
  "e": "Crime Prevention Through Environmental Design."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 1,
  "q": "SSH가 사용하는 기본 TCP 포트 번호는?",
  "a": "22",
  "k": [
   "22"
  ],
  "e": "Telnet(23) 대체."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "IPv6에서 ARP를 대체하는 프로토콜의 약어는?",
  "a": "NDP",
  "k": [
   "ndp",
   "neighbor discovery"
  ],
  "e": "Neighbor Discovery Protocol(ICMPv6 기반)."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 2,
  "q": "RFC 1918 사설 IP 대역 중 /12 대역의 시작 주소는?",
  "a": "172.16.0.0",
  "k": [
   "172.16.0.0",
   "172.16"
  ],
  "e": "172.16.0.0/12."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 2,
  "q": "외부 공개 서버를 두는 내부·외부 사이의 완충 네트워크를 흔히 ____ 라 부른다.",
  "a": "DMZ",
  "k": [
   "dmz",
   "screened subnet",
   "스크린드 서브넷"
  ],
  "e": "Screened subnet."
 },
 {
  "s": "s4",
  "t": "네트워크 보안",
  "d": 3,
  "q": "Zero Trust 아키텍처의 NIST 특별 간행물 번호는 SP ____ 이다.",
  "a": "800-207",
  "k": [
   "800-207",
   "800207"
  ],
  "e": "PDP·PEP 정의."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 1,
  "q": "IPsec에서 SA를 협상하고 키를 교환하는 프로토콜의 약어는?",
  "a": "IKE",
  "k": [
   "ike",
   "ikev2",
   "internet key exchange"
  ],
  "e": "UDP 500."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "포트 기반 네트워크 접근 제어 IEEE 표준 번호는?",
  "a": "802.1X",
  "k": [
   "802.1x",
   "8021x",
   "dot1x"
  ],
  "e": "Supplicant·Authenticator·AS."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "WPA2 개인용 모드에서 사용하는 AES 기반 암호 프로토콜의 약어는?",
  "a": "CCMP",
  "k": [
   "ccmp"
  ],
  "e": "Counter Mode CBC-MAC Protocol."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 2,
  "q": "스위치 포트당 허용 MAC 주소 수를 제한해 MAC flooding을 막는 기능은?",
  "a": "Port security",
  "k": [
   "port security",
   "포트 보안",
   "포트시큐리티",
   "포트 시큐리티"
  ],
  "e": "Cisco 등 스위치 기능."
 },
 {
  "s": "s4",
  "t": "네트워크 공격",
  "d": 3,
  "q": "DNS 서버에 위조 응답을 주입해 사용자를 악성 사이트로 유도하는 공격은?",
  "a": "DNS 캐시 포이즈닝",
  "k": [
   "포이즈닝",
   "poisoning",
   "cache poisoning",
   "dns spoofing",
   "스푸핑"
  ],
  "e": "대응: DNSSEC·포트 무작위화."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 1,
  "q": "정당한 사용자를 거부하는 생체 인식 오류율의 약어는?",
  "a": "FRR",
  "k": [
   "frr",
   "false rejection",
   "오거부율"
  ],
  "e": "Type I 오류."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "FRR과 FAR이 같아지는 지점을 뜻하는 약어는?",
  "a": "CER",
  "k": [
   "cer",
   "eer",
   "교차오류율"
  ],
  "e": "Crossover Error Rate = Equal Error Rate."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "Kerberos에서 AS와 TGS를 합쳐 부르는 구성 요소는?",
  "a": "KDC",
  "k": [
   "kdc",
   "key distribution center",
   "키분배센터"
  ],
  "e": "Key Distribution Center."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "Kerberos에서 AS가 발급하고 TGS에 제시하는 티켓의 약어는?",
  "a": "TGT",
  "k": [
   "tgt",
   "ticket granting ticket"
  ],
  "e": "Ticket Granting Ticket."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "OAuth 2.0 위에 ID 토큰을 추가한 인증 계층 표준은?",
  "a": "OpenID Connect",
  "k": [
   "openid connect",
   "oidc",
   "openid"
  ],
  "e": "OIDC."
 },
 {
  "s": "s5",
  "t": "페더레이션",
  "d": 2,
  "q": "도메인 간 사용자 계정 프로비저닝을 자동화하는 REST 기반 표준의 약어는?",
  "a": "SCIM",
  "k": [
   "scim"
  ],
  "e": "System for Cross-domain Identity Management."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 1,
  "q": "시스템이 보안 레이블로 접근을 강제하는 접근통제 모델의 약어는?",
  "a": "MAC",
  "k": [
   "mac",
   "mandatory access control",
   "강제적접근통제"
  ],
  "e": "Mandatory Access Control."
 },
 {
  "s": "s5",
  "t": "접근통제 모델",
  "d": 2,
  "q": "주체·객체·환경의 속성과 정책으로 접근을 결정하는 모델의 약어는?",
  "a": "ABAC",
  "k": [
   "abac",
   "attribute-based",
   "속성기반"
  ],
  "e": "Attribute-Based Access Control."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 2,
  "q": "직무 이동 후 이전 권한이 회수되지 않아 권한이 누적되는 현상은?",
  "a": "Privilege creep",
  "k": [
   "privilege creep",
   "권한 누적",
   "권한누적",
   "권한 크리프",
   "authorization creep"
  ],
  "e": "정기 접근 검토로 방지."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 2,
  "q": "특권을 필요한 시점에만 일시 부여하고 자동 회수하는 방식을 영어 약어로 쓰면?",
  "a": "JIT",
  "k": [
   "jit",
   "just-in-time",
   "just in time"
  ],
  "e": "Just-in-Time access."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "위험 증가를 미리 알려 주는 핵심 위험 지표의 약어는?",
  "a": "KRI",
  "k": [
   "kri",
   "key risk indicator",
   "핵심위험지표"
  ],
  "e": "Key Risk Indicator."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "침투 테스트 전 범위·허용 기법·연락체계를 정한 문서를 무엇이라 하는가?",
  "a": "Rules of Engagement",
  "k": [
   "rules of engagement",
   "roe",
   "교전 규칙",
   "교전규칙"
  ],
  "e": "RoE."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "취약점 심각도를 0~10으로 점수화하는 표준의 약어는?",
  "a": "CVSS",
  "k": [
   "cvss"
  ],
  "e": "Common Vulnerability Scoring System."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 1,
  "q": "테스터에게 모든 내부 정보를 제공하는 테스트 방식은 ____ box 테스트이다.",
  "a": "White",
  "k": [
   "white",
   "화이트",
   "white box",
   "화이트박스"
  ],
  "e": "Full knowledge."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "침투 테스트 4단계를 정의한 NIST 문서 번호는 SP ____ 이다.",
  "a": "800-115",
  "k": [
   "800-115",
   "800115"
  ],
  "e": "Planning·Discovery·Attack·Reporting."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 1,
  "q": "소스코드를 실행하지 않고 분석하는 보안 테스트의 약어는?",
  "a": "SAST",
  "k": [
   "sast",
   "정적분석",
   "static application security testing"
  ],
  "e": "Static Application Security Testing."
 },
 {
  "s": "s6",
  "t": "SW 테스트",
  "d": 2,
  "q": "비정상·무작위 입력으로 결함을 찾는 테스트 기법은?",
  "a": "Fuzzing",
  "k": [
   "fuzzing",
   "퍼징",
   "fuzz",
   "퍼지 테스트",
   "fuzz testing"
  ],
  "e": "Mutation/Generation."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 1,
  "q": "재무보고 관련 내부통제를 다루는 SOC 보고서는 SOC ____ 이다.",
  "a": "1",
  "k": [
   "1",
   "soc 1",
   "soc1"
  ],
  "e": "ICFR."
 },
 {
  "s": "s6",
  "t": "감사·보고",
  "d": 2,
  "q": "특정 시점이 아니라 일정 기간의 통제 운영 효과성을 평가하는 SOC 보고서 유형은 Type ____ 이다.",
  "a": "II",
  "k": [
   "ii",
   "2",
   "type ii",
   "type 2"
  ],
  "e": "Type II."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 1,
  "q": "증거의 수집·이전·보관 이력을 끊김 없이 기록하는 절차는? (영문)",
  "a": "Chain of custody",
  "k": [
   "chain of custody",
   "custody",
   "보관 연속성",
   "관리 연속성"
  ],
  "e": "증거 능력의 핵심 요건."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "휘발성 순서(Order of Volatility)를 제시한 IETF 문서 번호는 RFC ____ 이다.",
  "a": "3227",
  "k": [
   "3227",
   "rfc3227",
   "rfc 3227"
  ],
  "e": "Guidelines for Evidence Collection and Archiving."
 },
 {
  "s": "s7",
  "t": "조사·증거",
  "d": 2,
  "q": "포렌식 이미지 생성 시 원본 변경을 막는 하드웨어 장치는?",
  "a": "Write blocker",
  "k": [
   "write blocker",
   "writeblocker",
   "쓰기 방지",
   "쓰기방지"
  ],
  "e": "원본 무결성 보존."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "이종 로그를 수집·상관분석하는 보안 관리 플랫폼의 약어는?",
  "a": "SIEM",
  "k": [
   "siem"
  ],
  "e": "Security Information and Event Management."
 },
 {
  "s": "s7",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "사용자와 장치의 정상 행위 기준선을 학습해 이상을 탐지하는 기술의 약어는?",
  "a": "UEBA",
  "k": [
   "ueba",
   "ueba"
  ],
  "e": "User and Entity Behavior Analytics."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "ISC2 사고 관리 7단계 중 마지막 단계는? (영문)",
  "a": "Lessons learned",
  "k": [
   "lessons learned",
   "lesson learned",
   "교훈",
   "사후 검토"
  ],
  "e": "절차 개선·재발 방지."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 1,
  "q": "RAID 레벨 중 미러링만 수행하는 것은 RAID ____ 이다.",
  "a": "1",
  "k": [
   "1",
   "raid1",
   "raid 1"
  ],
  "e": "RAID 0은 스트라이핑, 1은 미러링."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 2,
  "q": "허용 가능한 최대 데이터 손실량(시간)을 뜻하는 지표의 약어는?",
  "a": "RPO",
  "k": [
   "rpo",
   "recovery point objective"
  ],
  "e": "백업 주기를 결정."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 2,
  "q": "공간·전원·HVAC만 갖추고 장비·데이터는 없는 복구 사이트는?",
  "a": "Cold site",
  "k": [
   "cold",
   "cold site",
   "콜드",
   "콜드 사이트"
  ],
  "e": "가장 저렴, 가장 느림."
 },
 {
  "s": "s7",
  "t": "운영 통제",
  "d": 2,
  "q": "승인된 표준 보안 구성 상태를 일컫는 용어는? (영문)",
  "a": "Baseline",
  "k": [
   "baseline",
   "기준선",
   "베이스라인"
  ],
  "e": "드리프트 점검의 기준."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 1,
  "q": "개발·보안·운영을 통합해 CI/CD에 보안 검사를 자동화하는 접근은?",
  "a": "DevSecOps",
  "k": [
   "devsecops",
   "데브섹옵스"
  ],
  "e": "Shift left."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 2,
  "q": "CMMI 성숙도 5단계의 명칭은? (영문)",
  "a": "Optimizing",
  "k": [
   "optimizing",
   "optimising",
   "최적화"
  ],
  "e": "지속적 프로세스 개선."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 1,
  "q": "소스 코드를 실행하지 않고 분석하는 정적 보안 테스트의 약어는?",
  "a": "SAST",
  "k": [
   "sast"
  ],
  "e": "Static Application Security Testing."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "검사 시점과 사용 시점의 차이를 악용하는 경쟁 조건 취약점의 약어는?",
  "a": "TOCTOU",
  "k": [
   "toctou",
   "time of check to time of use"
  ],
  "e": "Race condition의 대표 형태."
 },
 {
  "s": "s8",
  "t": "보안 코딩·취약점",
  "d": 2,
  "q": "OWASP Top 10 2021의 A10 항목인 서버 측 요청 위조의 약어는?",
  "a": "SSRF",
  "k": [
   "ssrf",
   "server side request forgery",
   "server-side request forgery"
  ],
  "e": "서버가 공격자가 지정한 URL로 요청."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 1,
  "q": "소프트웨어 구성요소 명세서의 약어는?",
  "a": "SBOM",
  "k": [
   "sbom",
   "software bill of materials"
  ],
  "e": "취약점 영향 범위 파악."
 },
 {
  "s": "s8",
  "t": "획득·공급망",
  "d": 2,
  "q": "오픈소스 구성요소의 취약점·라이선스를 분석하는 도구 유형의 약어는?",
  "a": "SCA",
  "k": [
   "sca",
   "software composition analysis"
  ],
  "e": "SBOM 생성에도 활용."
 },
 {
  "s": "s8",
  "t": "개발 환경·DB",
  "d": 2,
  "q": "같은 기본키에 대해 보안 등급별 다른 값을 두어 추론을 막는 DB 기법은? (영문)",
  "a": "Polyinstantiation",
  "k": [
   "polyinstantiation",
   "다중인스턴스화",
   "다중 인스턴스화"
  ],
  "e": "추론 공격 방어."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "위험관리",
  "d": 2,
  "q": "NIST RMF(SP 800-37 Rev.2) 단계를 순서대로 나열하시오.",
  "steps": [
   "Prepare",
   "Categorize",
   "Select",
   "Implement",
   "Assess",
   "Authorize",
   "Monitor"
  ],
  "e": "Rev.2 는 Prepare 를 포함한 7단계."
 },
 {
  "s": "s1",
  "t": "BCP·BIA",
  "d": 2,
  "q": "NIST SP 800-34 비상계획 수립 절차를 순서대로 나열하시오.",
  "steps": [
   "비상계획 정책 수립",
   "BIA 수행",
   "예방 통제 식별",
   "복구 전략 수립",
   "비상계획 작성",
   "시험·훈련·연습",
   "계획 유지보수"
  ],
  "e": "정책 → BIA → 예방 → 전략 → 계획 → 시험 → 유지."
 },
 {
  "s": "s2",
  "t": "자산 분류·취급",
  "d": 1,
  "q": "정보 자산 분류 프로그램의 일반적 수행 순서를 나열하시오.",
  "steps": [
   "자산 인벤토리 작성",
   "소유자 지정",
   "분류 기준·등급 정의",
   "자산에 등급 부여·표시",
   "등급별 취급·보호 통제 적용",
   "정기 검토·재분류"
  ],
  "e": "식별 → 소유 → 기준 → 부여 → 통제 → 검토."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "암호키 관리 수명주기 단계를 순서대로 나열하시오.",
  "steps": [
   "생성(Generation)",
   "배포(Distribution)",
   "저장(Storage)",
   "사용(Use)",
   "교체(Rotation)",
   "폐기(Destruction)"
  ],
  "e": "NIST SP 800-57 기반. 보관(archive)·복구 단계가 추가될 수 있다."
 },
 {
  "s": "s3",
  "t": "암호학",
  "d": 2,
  "q": "PKI에서 인증서가 발급되어 폐기되기까지의 흐름을 순서대로 나열하시오.",
  "steps": [
   "키 쌍 생성 및 CSR 제출",
   "RA의 신원 확인",
   "CA의 서명 및 인증서 발급",
   "인증서 사용 및 검증",
   "폐기 시 CRL 게시 또는 OCSP 응답"
  ],
  "e": "RA 확인 → CA 발급 → 사용 → 폐기 공지."
 },
 {
  "s": "s4",
  "t": "네트워크 기초",
  "d": 1,
  "q": "OSI 7계층을 하위(1계층)부터 순서대로 나열하시오.",
  "steps": [
   "물리",
   "데이터링크",
   "네트워크",
   "전송",
   "세션",
   "표현",
   "응용"
  ],
  "e": "Please Do Not Throw Sausage Pizza Away."
 },
 {
  "s": "s4",
  "t": "무선·원격 접속",
  "d": 2,
  "q": "802.1X 기반 무선 접속(EAP-TLS) 인증 흐름을 순서대로 나열하시오.",
  "steps": [
   "단말(Supplicant)이 AP에 연결 요청",
   "AP(Authenticator)가 EAP 신원 요청",
   "AP가 EAP 메시지를 RADIUS 서버로 중계",
   "서버·단말이 인증서로 상호 인증",
   "RADIUS Access-Accept 후 포트 개방·키 생성"
  ],
  "e": "인증 성공 전에는 EAP 트래픽만 허용(포트 통제)."
 },
 {
  "s": "s5",
  "t": "인증",
  "d": 2,
  "q": "Kerberos 인증 절차를 순서대로 나열하시오.",
  "steps": [
   "클라이언트가 AS에 인증 요청",
   "AS가 TGT와 세션키 발급",
   "클라이언트가 TGS에 TGT를 제시하고 서비스 티켓 요청",
   "TGS가 서비스 티켓 발급",
   "클라이언트가 서비스 티켓을 서비스에 제시"
  ],
  "e": "AS → TGT → TGS → 서비스 티켓 → 서비스 접근."
 },
 {
  "s": "s5",
  "t": "계정 수명주기",
  "d": 1,
  "q": "신원·접근 프로비저닝 수명주기를 순서대로 나열하시오.",
  "steps": [
   "접근 요청 및 승인",
   "신원 확인(identity proofing)",
   "계정 생성과 최소 권한 부여",
   "정기 접근 검토",
   "퇴사 시 비활성화 및 회수"
  ],
  "e": "요청·승인 → 신원 확인 → 프로비저닝 → 검토 → 디프로비저닝."
 },
 {
  "s": "s6",
  "t": "취약점·침투",
  "d": 2,
  "q": "NIST SP 800-115의 침투 테스트 단계를 순서대로 나열하시오.",
  "steps": [
   "Planning",
   "Discovery",
   "Attack",
   "Reporting"
  ],
  "e": "Attack 중 새 정보가 나오면 Discovery로 되돌아간다."
 },
 {
  "s": "s6",
  "t": "평가 전략",
  "d": 2,
  "q": "보안 감사 수행 절차를 순서대로 나열하시오.",
  "steps": [
   "목표와 범위 정의",
   "감사 계획 및 경영진 승인",
   "증거 수집과 통제 테스트",
   "발견 사항 분석 및 보고",
   "시정 조치 추적"
  ],
  "e": "계획 → 수행 → 보고 → 후속 조치."
 },
 {
  "s": "s7",
  "t": "사고 대응",
  "d": 2,
  "q": "ISC2(CISSP CBK) 사고 관리 단계를 순서대로 나열하시오.",
  "steps": [
   "Detection",
   "Response",
   "Mitigation",
   "Reporting",
   "Recovery",
   "Remediation",
   "Lessons learned"
  ],
  "e": "탐지 → 대응 → 완화(격리) → 보고 → 복구 → 교정 → 교훈."
 },
 {
  "s": "s7",
  "t": "복구·BCP",
  "d": 1,
  "q": "운영 영향이 작은 것부터 DR 테스트 유형을 순서대로 나열하시오.",
  "steps": [
   "Read-through (Checklist)",
   "Structured walk-through (Tabletop)",
   "Simulation",
   "Parallel",
   "Full interruption"
  ],
  "e": "문서 검토에서 실제 운영 중단까지 위험·현실성이 함께 증가."
 },
 {
  "s": "s8",
  "t": "SDLC·성숙도",
  "d": 1,
  "q": "CMMI 성숙도 단계를 낮은 단계부터 순서대로 나열하시오.",
  "steps": [
   "Initial",
   "Managed",
   "Defined",
   "Quantitatively Managed",
   "Optimizing"
  ],
  "e": "SW-CMM에서는 2단계 Repeatable, 4단계 Managed로 부른다."
 }
];

CPPG.selfcheck = [
 {
  "g": "리스크",
  "t": "CIA·DAD 와 정량 리스크(SLE·ARO·ALE) 공식을 계산한다"
 },
 {
  "g": "리스크",
  "t": "정책·표준·절차·지침·기준선의 차이를 말한다"
 },
 {
  "g": "리스크",
  "t": "BIA 지표(MTD·RTO·RPO·WRT)의 관계를 그린다"
 },
 {
  "g": "리스크",
  "t": "ISC2 윤리강령 4대 규범과 우선순위를 안다"
 },
 {
  "g": "자산",
  "t": "데이터 소유자·관리자(custodian)·처리자 등 역할을 구분한다"
 },
 {
  "g": "자산",
  "t": "Clear·Purge·Destroy 매체 파기 수준(NIST 800-88)을 구분한다"
 },
 {
  "g": "아키텍처",
  "t": "BLP·Biba·Clark-Wilson·Brewer-Nash 규칙을 말한다"
 },
 {
  "g": "아키텍처",
  "t": "대칭·비대칭·해시 알고리즘과 키 개수 공식을 안다"
 },
 {
  "g": "아키텍처",
  "t": "PKI 구성요소와 인증서 폐지(CRL·OCSP)를 설명한다"
 },
 {
  "g": "네트워크",
  "t": "OSI 7계층별 프로토콜·장비·공격을 매핑한다"
 },
 {
  "g": "네트워크",
  "t": "IPsec AH·ESP, 전송·터널 모드를 구분한다"
 },
 {
  "g": "IAM",
  "t": "인증 3요소 + FRR·FAR·CER 를 설명한다"
 },
 {
  "g": "IAM",
  "t": "SAML·OAuth 2.0·OIDC·Kerberos 흐름을 구분한다"
 },
 {
  "g": "IAM",
  "t": "DAC·MAC·RBAC·ABAC 모델을 상황에 맞게 고른다"
 },
 {
  "g": "평가",
  "t": "취약점 스캔과 침투테스트, SOC 1·2·3 / Type I·II 를 구분한다"
 },
 {
  "g": "평가",
  "t": "SAST·DAST·IAST·퍼징·오용 사례 테스트를 구분한다"
 },
 {
  "g": "운영",
  "t": "사고 대응 단계와 증거 보관연속성(chain of custody)을 안다"
 },
 {
  "g": "운영",
  "t": "Hot·Warm·Cold 사이트와 DR 테스트 유형을 구분한다"
 },
 {
  "g": "SW개발",
  "t": "SDLC 단계별 보안 활동과 DevSecOps 시프트 레프트를 설명한다"
 },
 {
  "g": "SW개발",
  "t": "OWASP Top 10 주요 항목과 대응(입력 검증·파라미터화 쿼리)을 안다"
 }
];

CPPG.roadmap = {
 "10주 표준": [
  "Week 1~2 — 도메인 1 보안·리스크 관리(거버넌스·법·BCP·리스크)",
  "Week 3 — 도메인 2 자산 보안(분류·역할·수명주기·파기)",
  "Week 4 — 도메인 3 아키텍처 Ⅰ(설계 원칙·보안 모델·CC)",
  "Week 5 — 도메인 3 아키텍처 Ⅱ(암호·PKI·물리 보안)",
  "Week 6 — 도메인 4 통신·네트워크 보안",
  "Week 7 — 도메인 5 IAM",
  "Week 8 — 도메인 6 평가·테스트 + 도메인 8 SW 개발 보안",
  "Week 9 — 도메인 7 보안 운영(사고 대응·포렌식·DR)",
  "Week 10 — 모의고사 125문항 2회 + 오답노트"
 ],
 "시험 3일 전": [
  "D-3 — 리스크 공식·BIA 지표·보안 모델 시트",
  "D-2 — 암호·네트워크 프로토콜·IAM 표준 시트",
  "D-1 — 모의고사 1회 + 함정노트 + 관리자 관점 정리"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "정량 리스크(ALE)",
  "리스크 처리 4전략",
  "BIA·MTD·RTO·RPO",
  "정책 계층",
  "데이터 역할",
  "보안 모델(BLP·Biba)",
  "대칭·비대칭·해시",
  "PKI",
  "OSI 계층",
  "IPsec·TLS",
  "인증 요소·CER",
  "SAML·OAuth·OIDC",
  "접근통제 모델",
  "SOC 보고서",
  "사고 대응 단계",
  "증거·보관연속성",
  "SDLC 보안"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "ISC2 윤리강령",
  "법·규제(GDPR 등)",
  "SCRM",
  "매체 파기",
  "CC·EAL",
  "PQC",
  "물리 보안",
  "무선 보안",
  "Kerberos",
  "계정 수명주기",
  "침투테스트 단계",
  "백업·RAID",
  "복구 사이트",
  "변경 관리",
  "OWASP Top 10",
  "성숙도 모델"
 ],
 "Tier 3 ★ (변별 문항)": [
  "Brewer-Nash·Clark-Wilson",
  "암호 공격 기법",
  "SDN·CDN",
  "ABAC",
  "합성 트랜잭션",
  "SOAR",
  "DB 동시성·집계·추론",
  "API 보안"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "정량적 위험 분석 — 통제 도입 판단",
  "problem": "데이터센터(자산가치 $500,000)의 홍수 피해 노출계수는 40%, 홍수는 10년에 한 번 발생한다. 방수 차단 설비(연간 비용 $12,000)를 설치하면 ARO 가 0.02 로 낮아진다. 가장 옳은 것은?\n① ALE 20,000 → 4,000 이므로 통제 가치 +4,000, 도입 정당\n② ALE 200,000 이므로 무조건 도입\n③ 통제 가치가 음수이므로 도입하지 않는다\n④ ARO 가 0 이 아니므로 효과 없음",
  "steps": [
   "SLE = 500,000 × 0.4 = 200,000",
   "도입 전 ALE = 200,000 × 0.1 = 20,000 / 도입 후 ALE = 200,000 × 0.02 = 4,000",
   "통제 가치 = 20,000 − 4,000 − 12,000 = +4,000 → 양수"
  ],
  "answer": "① — 통제 가치가 양수이므로 비용 대비 효익이 있다.",
  "traps": [
   "SLE 를 ALE 로 착각(②)",
   "통제 비용을 감소분과 비교하지 않고 판단"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "What should the security manager do FIRST?",
  "problem": "A new regulation requires changes to how customer data is processed. Current controls do not meet the requirement. What should the security manager do FIRST?\n① Purchase a DLP tool immediately\n② Perform a gap analysis and risk assessment, then present options to senior management\n③ Accept the risk on behalf of the company\n④ Ignore the regulation until an audit occurs",
  "steps": [
   "Manager perspective: understand requirements and current state before acting",
   "Gap analysis + risk assessment informs cost-justified options",
   "Senior management decides on risk treatment; the security manager cannot accept risk on its behalf"
  ],
  "answer": "② — assess first, then let senior management decide.",
  "traps": [
   "Jumping to a technical tool (①)",
   "Security manager accepting risk without authority (③)"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "HDD·SSD 혼합 폐기 — 적절한 소거 방법",
  "problem": "임대 계약이 끝난 서버 20대(HDD 10대, SSD 10대)를 리스사에 반환해야 한다. 디스크에는 고객 개인정보가 저장되어 있었다. 가장 적절한 방법은?\n① 모든 디스크를 빠른 포맷 후 반환\n② 모든 디스크를 디가우징 후 반환\n③ HDD 는 Purge 수준 덮어쓰기/디가우징, SSD 는 암호 소거 또는 제조사 sanitize 를 수행하고 검증·기록 후 반환(불가하면 물리 파괴 후 디스크 보상)\n④ 파일만 삭제 후 반환",
  "steps": [
   "외부 반출·재사용 → Purge 수준 필요",
   "SSD 는 디가우징 무효 → 암호 소거/제조사 sanitize",
   "소거 결과 검증과 증적(certificate) 기록"
  ],
  "answer": "③ — 매체 특성별 Purge 수준 소거 + 검증·기록.",
  "traps": [
   "SSD 에도 디가우징이 통한다고 생각(②)",
   "포맷·삭제를 소거로 착각(①·④)"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "보안 모델 선택 — 이해충돌",
  "problem": "회계 감사 법인의 감사인이 같은 업종 경쟁 고객사 두 곳의 자료에 동시에 접근하지 못하도록 해야 한다. 가장 적합한 모델은?\n① Bell-LaPadula\n② Biba\n③ Brewer-Nash\n④ Clark-Wilson",
  "steps": [
   "요구사항: 기밀성 등급도 무결성도 아닌 '이해충돌' 방지",
   "접근 이력에 따라 동적으로 접근 범위가 정해져야 함",
   "Brewer-Nash(Chinese Wall)가 정확히 이 목적"
  ],
  "answer": "③ — 이해충돌 클래스 내 한 회사 자료에 접근하면 경쟁사 접근을 차단한다.",
  "traps": [
   "'기밀 자료'라는 표현만 보고 BLP를 고르는 실수",
   "직무분리 키워드로 Clark-Wilson을 고르는 실수"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "Which control provides nonrepudiation for contracts?",
  "problem": "A company exchanges electronic purchase orders with suppliers and needs to prove that a specific supplier approved an order. Which control BEST meets this requirement?\n① AES-256 encryption with a shared key\n② HMAC-SHA256 with a pre-shared key\n③ Digital signature using the supplier's private key with a CA-issued certificate\n④ TLS 1.3 between the two parties",
  "steps": [
   "Requirement is nonrepudiation — proof of origin attributable to one party",
   "Shared-key mechanisms (AES, HMAC) cannot attribute action to one party",
   "TLS protects the channel, not the document after transmission",
   "Asymmetric signature bound to an identity via certificate provides nonrepudiation"
  ],
  "answer": "③ — only the supplier holds the private key, and the certificate binds it to their identity.",
  "traps": [
   "Picking HMAC because it 'authenticates'",
   "Assuming TLS protection persists after the session"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "무선 보안 개선 우선순위",
  "problem": "중소기업 사무실 무선망이 WPA2-PSK에 공용 비밀번호를 쓰고 있으며 퇴사자도 접속 가능하다. 가장 적절한 개선은?\n① SSID 숨김\n② MAC 주소 필터링\n③ WPA3-Enterprise(802.1X + RADIUS)로 사용자별 인증 도입\n④ AP 출력 축소",
  "steps": [
   "문제의 본질: 공유 비밀(PSK)이라 개인별 폐기 불가",
   "SSID 숨김·MAC 필터는 쉽게 우회",
   "802.1X로 개인 계정·인증서 기반 인증 → 퇴사 시 계정만 비활성화"
  ],
  "answer": "③ — 사용자별 인증으로 계정 단위 접근 통제·폐기가 가능해진다.",
  "traps": [
   "보안처럼 보이는 SSID 숨김(①)",
   "출력 축소로 범위를 줄이는 것(④)은 근본 해결이 아님"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "Which IPsec configuration fits a NAT environment?",
  "problem": "Two branch offices behind NAT devices need a site-to-site VPN that provides confidentiality and integrity of the entire original packet. Which configuration is BEST?\n① AH in transport mode\n② AH in tunnel mode\n③ ESP in tunnel mode with NAT traversal (UDP 4500)\n④ ESP in transport mode without IKE",
  "steps": [
   "Confidentiality is required → ESP (AH provides no encryption)",
   "Site-to-site gateways protecting whole packets → tunnel mode",
   "AH authenticates IP header fields altered by NAT → incompatible",
   "NAT-T encapsulates ESP in UDP 4500"
  ],
  "answer": "③ — ESP tunnel mode with NAT-T provides confidentiality and integrity across NAT.",
  "traps": [
   "Choosing AH for 'integrity of the whole packet' while ignoring confidentiality and NAT",
   "Transport mode protects only the payload between hosts"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "MFA 판정 — 같은 유형 두 개",
  "problem": "한 은행이 인터넷뱅킹 로그인에 '비밀번호 + 보안 질문 답변'을 도입하고 다중 요소 인증이라고 홍보했다. 보안 관리자의 판단으로 옳은 것은?\n① 두 개를 입력하므로 MFA이다\n② 둘 다 지식 요소이므로 MFA가 아니며 소유·생체 요소를 추가해야 한다\n③ 보안 질문은 생체 요소이므로 MFA이다\n④ 비밀번호 길이를 늘리면 MFA가 된다",
  "steps": [
   "각 요소의 유형 분류: 비밀번호=지식, 보안 질문=지식",
   "MFA는 서로 다른 유형의 요소 2개 이상",
   "OTP 토큰·FIDO 키(소유) 또는 생체 추가 필요"
  ],
  "answer": "② — 같은 유형 2개는 2단계 인증일 뿐 MFA가 아니다.",
  "traps": [
   "입력 횟수로 MFA를 판단하는 실수",
   "보안 질문을 별도 유형으로 착각"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "Which is the BEST way to reduce privilege creep?",
  "problem": "An audit finds that many long-tenured employees hold access far beyond their current job functions. What should the security manager do FIRST to address the root cause?\n① Revoke all access and require users to reapply\n② Implement a periodic access review with manager/data owner attestation tied to the mover process\n③ Increase password complexity\n④ Enable full disk encryption",
  "steps": [
   "Identify the problem: accumulated rights after role changes (privilege creep)",
   "Root cause: no revocation during transfers and no periodic recertification",
   "Fix the process: mover workflow revokes old rights + periodic attestation by owners"
  ],
  "answer": "② — Recertification by the people who understand business need, embedded in the lifecycle, addresses the cause.",
  "traps": [
   "Choosing a drastic, business-disruptive action (①)",
   "Picking unrelated technical controls (③④)"
  ]
 },
 {
  "s": "s6",
  "d": 2,
  "title": "SOC 보고서 선택",
  "problem": "한 기업이 고객 개인정보를 처리할 SaaS 공급사를 선정하려 한다. 공급사의 보안 통제가 지난 1년간 실제로 효과적으로 운영되었는지 확인하려면 어떤 보고서를 요청해야 하는가?\n① SOC 1 Type I\n② SOC 2 Type I\n③ SOC 2 Type II\n④ SOC 3",
  "steps": [
   "요구: 보안 통제(재무 아님) → SOC 2",
   "요구: 기간 동안의 운영 효과성 → Type II",
   "SOC 3은 공개용 요약으로 상세 테스트 결과 없음"
  ],
  "answer": "③ — 보안 TSC를 다루면서 기간 운영 효과성까지 테스트하는 SOC 2 Type II.",
  "traps": [
   "보안 통제에 SOC 1을 고르는 실수",
   "Type I(시점 설계)과 Type II(기간 운영) 혼동",
   "SOC 3이 더 상위라고 착각"
  ]
 },
 {
  "s": "s7",
  "d": 2,
  "title": "랜섬웨어 감염 서버 — 첫 조치",
  "problem": "파일 서버에서 랜섬웨어 암호화가 진행 중인 것이 탐지되었다. 사고 대응 관리자로서 가장 먼저 해야 할 조치는?\n① 즉시 전원을 차단한다\n② 서버를 네트워크에서 격리하고 휘발성 증거를 보존한다\n③ 백업으로 즉시 복원한다\n④ 공격자에게 몸값 협상을 시작한다",
  "steps": [
   "ISC2 단계: 탐지 → 대응 → ★완화(격리)★",
   "전원 차단은 메모리상 키·프로세스 증거를 잃게 함",
   "복원은 원인 제거 전이면 재감염 위험",
   "몸값 지불은 법적·정책 검토 대상이지 첫 조치가 아님"
  ],
  "answer": "② — 격리로 확산을 막고 증거를 보존하는 것이 우선.",
  "traps": [
   "'빠른 복구'에 끌려 ③을 고르는 실수",
   "증거 보존을 무시하고 ①을 고르는 실수"
  ]
 },
 {
  "s": "s7",
  "d": 3,
  "title": "Which backup strategy MINIMIZES restore time?",
  "problem": "An organization takes a full backup every Sunday and must restore on Friday with the fewest backup sets. Which daily strategy should it use Monday–Saturday?\n① Incremental backups\n② Differential backups\n③ No backups until next Sunday\n④ RAID 5 instead of backups",
  "steps": [
   "Incremental: restore = full + every incremental (Mon–Thu) → 5 sets",
   "Differential: restore = full + latest differential (Thu) → 2 sets",
   "RAID is not a backup"
  ],
  "answer": "② — Differential needs only the full and the most recent differential, minimizing restore time (at the cost of longer daily backups).",
  "traps": [
   "Confusing incremental (faster backup) with differential (faster restore)",
   "Treating RAID as a backup substitute"
  ]
 },
 {
  "s": "s8",
  "d": 2,
  "title": "DevSecOps — 가장 효과적인 보안 통합 지점",
  "problem": "애자일 팀이 하루에도 여러 번 배포한다. 보안 관리자로서 취약한 코드가 운영에 배포되는 것을 줄이는 가장 효과적인 방법은?\n① 분기마다 외부 모의해킹만 수행한다\n② CI/CD 파이프라인에 SAST·SCA를 자동화하고 심각한 결함 시 빌드를 실패시킨다\n③ 배포 전 보안팀이 모든 변경을 수동 검토한다\n④ 운영 환경에 WAF만 배치한다",
  "steps": [
   "배포 빈도가 높으면 수동 검토(③)는 병목",
   "분기 모의해킹(①)은 주기가 너무 길다",
   "WAF(④)는 보완 통제일 뿐 원인 결함을 제거하지 않음",
   "파이프라인 자동 검사 = shift left"
  ],
  "answer": "② — 자동화된 보안 게이트로 개발 초기에 결함을 차단.",
  "traps": [
   "사람이 직접 검토하는 것이 더 안전하다는 직관(③)",
   "운영 보호 통제(④)를 근본 대책으로 착각"
  ]
 }
];
