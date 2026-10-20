/* ============================================================
   CCSP (ISC2 2026-08 Exam Outline) — 학습·퀴즈 데이터
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "CCSP 클라우드보안전문가",
 "brand": "CCSP",
 "tag": "ISC2 CCSP · Exam Outline 2026-08-01 시행",
 "storeKey": "ccsp",
 "topicUnit": "단원",
 "title": "CCSP — 암기·퀴즈 학습",
 "h1": "CCSP",
 "unit": "도메인",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 70,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "Certified Cloud Security Professional (ISC2)",
 "host": "ISC2",
 "type": "CAT 100~150문항 · 객관식 + advanced item types",
 "time": "3시간 · Pearson VUE 시험장",
 "pass": "700 / 1000점",
 "book": "ISC2 CCSP Certification Exam Outline (Effective 2026-08-01) + Official Study Guide",
 "slogan": "CCSP = 개념·아키텍처(17) + 데이터 보안(20) + 플랫폼·인프라(17) + 애플리케이션(16) + 보안 운영(17) + 법률·리스크·컴플라이언스(13) — ★공유책임·데이터 수명주기·관리자 관점★",
 "paperSpec": [
  {
   "s": "s1",
   "n": 21
  },
  {
   "s": "s2",
   "n": 25
  },
  {
   "s": "s3",
   "n": 21
  },
  {
   "s": "s4",
   "n": 20
  },
  {
   "s": "s5",
   "n": 21
  },
  {
   "s": "s6",
   "n": 17
  }
 ],
 "footer": [
  "CCSP / 주관 <b>ISC2</b> · CAT 100~150문항 3시간 · <b>700/1000 합격</b> · Pearson VUE · 영어·중국어·독일어·일본어 · 실무경력 5년(정보보안 3년·클라우드 1년, CISSP 보유 시 전체 대체)",
  "<b>2026-08-01 시행 개정 아웃라인</b> 6개 도메인 평균 배점(17·20·17·16·17·13%)을 따르며, 신규 AI/ML 항목(1.6·2.9)을 포함합니다. 모의고사는 125문항으로 배점 비례 구성.",
  "⚠ CAT 시험은 정답률이 아니라 능력 추정치로 판정합니다. 사이트의 70% 판정은 <b>자체 학습 목표</b>입니다.",
  "⚠ 문항은 공식 아웃라인으로 새로 만든 연습 문제이며 실제 기출이 아닙니다."
 ],
 "info": [
  {
   "title": "CCSP 도메인 평균 배점 (2026-08-01)",
   "type": "table",
   "head": [
    "도메인",
    "배점",
    "하위 항목"
   ],
   "rows": [
    [
     "1 Cloud Concepts, Architecture and Design",
     "17%",
     "1.1~1.6 (1.6 AI/ML 신규)"
    ],
    [
     "2 Cloud Data Security",
     "20%",
     "2.1~2.9 (2.9 AI/ML 데이터 보호 신규)"
    ],
    [
     "3 Cloud Platform and Infrastructure Security",
     "17%",
     "3.1~3.5"
    ],
    [
     "4 Cloud Application Security",
     "16%",
     "4.1~4.7"
    ],
    [
     "5 Cloud Security Operations",
     "17%",
     "5.1~5.6"
    ],
    [
     "6 Legal, Risk and Compliance",
     "13%",
     "6.1~6.5"
    ]
   ]
  },
  {
   "title": "ISC2 문제 푸는 요령",
   "type": "list",
   "items": [
    "★관리자·자문가 관점★ — 기술 조작보다 정책·리스크·비즈니스 요구를 먼저 본다.",
    "공유책임 — 서비스 모델(IaaS→PaaS→SaaS)로 갈수록 고객 책임이 줄지만 ★데이터·접근 책임은 항상 고객★.",
    "법적 책임·컴플라이언스 책임은 아웃소싱해도 고객에게 남는다.",
    "CAT 은 이전 문항으로 돌아갈 수 없다 — 문항마다 확정하고 넘어간다."
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "개념·아키텍처·설계",
  "short": "개념",
  "out": 21,
  "color": "#0f766e",
  "desc": "NIST 800-145 5특성·서비스·배포 모델 · ISO 17789 역할 · 참조 아키텍처 · 공유책임 · 보안 설계 원칙 · CSP 평가(ISO 27017·CSA STAR) · AI/ML 개념 (17%)"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "클라우드 데이터 보안",
  "short": "데이터",
  "out": 25,
  "color": "#2563eb",
  "desc": "데이터 수명주기 · 스토리지 아키텍처 · 암호화·키관리·토큰화·마스킹 · 데이터 발견·분류 · IRM · 보존·삭제(crypto-shredding) · 감사추적 · AI 데이터 보호 ★최대 배점★ (20%)"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "플랫폼·인프라 보안",
  "short": "인프라",
  "out": 21,
  "color": "#7c3aed",
  "desc": "물리·가상 인프라 구성요소 · 하이퍼바이저 · 데이터센터 설계 · 인프라 리스크 · 보안 통제 · BC/DR (17%)"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "애플리케이션 보안",
  "short": "앱",
  "out": 20,
  "color": "#db2777",
  "desc": "보안 교육 · Secure SDLC · 위협모델링 · 테스트(SAST·DAST)·검증 · 검증된 소프트웨어(SCA·SBOM) · 클라우드 앱 아키텍처(WAF·API GW) · IAM(Federation·SSO·MFA) (16%)"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "클라우드 보안 운영",
  "short": "운영",
  "out": 21,
  "color": "#ea580c",
  "desc": "물리·논리 인프라 구축·운영 · 운영 통제·표준(ITIL·ISO 20000-1) · 디지털 포렌식 · 이해관계자 커뮤니케이션 · 보안 운영(SOC·SIEM·IR) (17%)"
 },
 {
  "id": "s6",
  "no": 6,
  "name": "법률·리스크·컴플라이언스",
  "short": "법·리스크",
  "out": 17,
  "color": "#64748b",
  "desc": "법적 요구·eDiscovery · 개인정보(GDPR·ISO 27018·27701) · 감사(SOC·SSAE 18·ISAE 3402) · ERM · 아웃소싱·계약 설계 (13%)"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "정의·특성",
  "front": "NIST SP 800-145",
  "key": "클라우드 정의 표준(5·3·4)",
  "back": "NIST의 클라우드 컴퓨팅 정의 문서. ★5가지 필수 특성·3가지 서비스 모델(SaaS·PaaS·IaaS)·4가지 배포 모델(Public·Private·Community·Hybrid)★로 클라우드를 정의.",
  "tip": "Multi-tenancy는 NIST 5특성에 없음 — ISO/IEC 17788이 추가해 6가지 핵심 특성."
 },
 {
  "s": "s1",
  "g": "정의·특성",
  "front": "Essential Characteristics",
  "key": "온디맨드·광대역·풀링·탄력·계량",
  "back": "On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service. ★Measured service★는 사용량 계량·과금·투명성의 근거.",
  "tip": "Rapid elasticity = 자동 확장·축소(양방향). 확장만 떠올리면 오답."
 },
 {
  "s": "s1",
  "g": "정의·특성",
  "front": "Resource Pooling / Multi-tenancy",
  "key": "자원 공유와 테넌트 격리",
  "back": "CSP가 물리·가상 자원을 여러 고객에게 동적으로 할당. 고객은 정확한 위치를 통제하지 못하는 ★위치 독립성★이 특징이며, 테넌트 간 ★격리(isolation)★가 핵심 보안 요구.",
  "tip": "공유 기술 취약점(shared technology issues)의 근원 — 하이퍼바이저 탈출이 대표 위협."
 },
 {
  "s": "s1",
  "g": "역할",
  "front": "ISO/IEC 17788 · 17789",
  "key": "클라우드 개요·용어 / 참조 아키텍처",
  "back": "17788 = 개요·용어(6특성, 7 서비스 범주, 배포 모델, 교차 관점). 17789 = ★참조 아키텍처(CCRA)★ — 사용자·기능·구현·배치 뷰, 역할·활동 정의.",
  "tip": "역할 3종 CSC·CSP·CSN은 17789의 사용자 뷰에서 나옴."
 },
 {
  "s": "s1",
  "g": "역할",
  "front": "CSC · CSP · CSN",
  "key": "고객·제공자·파트너",
  "back": "Cloud Service Customer(이용), Cloud Service Provider(제공), Cloud Service Partner(지원 — ★cloud auditor, cloud service broker, cloud service developer★ 하위역할).",
  "tip": "브로커·감사자는 독립 역할이 아니라 ISO 17789에선 CSN의 하위역할."
 },
 {
  "s": "s1",
  "g": "역할",
  "front": "Cloud Service Broker",
  "key": "중개·집계·차익(NIST)",
  "back": "NIST SP 500-292의 브로커 서비스 3유형 — ★Service Intermediation(기능 향상), Service Aggregation(여러 서비스 통합), Service Arbitrage(유동적 선택)★.",
  "tip": "CASB(Cloud Access Security Broker)는 보안 통제 도구 — 비즈니스 브로커와 혼동 금지."
 },
 {
  "s": "s1",
  "g": "서비스·배포",
  "front": "Shared Responsibility Model",
  "key": "모델별 책임 경계",
  "back": "IaaS: 고객이 OS·미들웨어·앱·데이터, PaaS: 앱·데이터, SaaS: 데이터·접근 관리. ★데이터에 대한 책임(accountability)은 어느 모델이든 고객★에게 남음.",
  "tip": "책임(responsibility)은 위임 가능, 최종 책임(accountability)은 위임 불가."
 },
 {
  "s": "s1",
  "g": "서비스·배포",
  "front": "Cloud Capability Types",
  "key": "Application·Platform·Infrastructure",
  "back": "ISO/IEC 17788의 기능 유형. Application capability ≈ SaaS, Platform capability ≈ PaaS, Infrastructure capability ≈ IaaS. 서비스 범주(CaaS·CompaaS·DSaaS·NaaS 등)는 이 기능 유형의 조합.",
  "tip": "Capability type(3종)과 Service category(7종)는 다른 축."
 },
 {
  "s": "s1",
  "g": "서비스·배포",
  "front": "Community / Hybrid / Multi-cloud",
  "key": "공동체·혼합·다중",
  "back": "Community = 공통 관심사(규제·미션) 조직군이 공유. Hybrid = ★둘 이상 배포 모델이 표준·독점 기술로 연결★(데이터·앱 이동성). Multi-cloud = 여러 CSP 동일 유형 서비스 병용.",
  "tip": "Hybrid는 '모델 결합', Multi-cloud는 '공급자 다수' — 축이 다름."
 },
 {
  "s": "s1",
  "g": "설계원칙",
  "front": "Reversibility",
  "key": "철수 시 데이터 회수·삭제",
  "back": "ISO/IEC 17788 교차 관점. CSC가 ★데이터·앱을 합리적 기간 내 회수★하고 CSP가 원본·사본을 삭제하는 능력. 출구 전략(exit strategy)의 핵심.",
  "tip": "Portability(이전 용이성)와 달리 '철수+삭제 확인'까지 포함."
 },
 {
  "s": "s1",
  "g": "설계원칙",
  "front": "Vendor Lock-in",
  "key": "공급자 종속",
  "back": "독점 API·데이터 형식 때문에 다른 CSP로 이전이 어려운 상태. 대응 = ★개방 표준·이식 가능한 형식·멀티클라우드·계약상 데이터 반환 조항★.",
  "tip": "Vendor lock-out = CSP 파산·폐업으로 데이터 접근 상실(공급자 생존성 리스크)."
 },
 {
  "s": "s1",
  "g": "보안개념",
  "front": "NIST SP 800-88",
  "key": "Clear·Purge·Destroy",
  "back": "매체 소거 지침. Clear(논리적 덮어쓰기), Purge(실험실 수준 복구 불가 — ★Cryptographic Erase 포함★), Destroy(파쇄·소각·분해). 클라우드에선 물리 매체 접근 불가로 ★crypto erase★가 현실적 수단.",
  "tip": "Degaussing은 SSD·플래시에 무효 — 자기 매체 전용."
 },
 {
  "s": "s1",
  "g": "보안개념",
  "front": "Immutable Architecture",
  "key": "변경 대신 교체",
  "back": "실행 중 서버를 패치·수정하지 않고 ★골든 이미지로 새 인스턴스를 배포해 교체★. 구성 표류(configuration drift) 제거, 롤백 용이.",
  "tip": "패치는 '이미지 재빌드→재배포'로 수행 — SSH로 운영 서버 수정은 원칙 위반."
 },
 {
  "s": "s1",
  "g": "평가·인증",
  "front": "Common Criteria (ISO/IEC 15408)",
  "key": "제품 보안 평가·EAL1~7",
  "back": "PP(Protection Profile)·ST(Security Target)·TOE(평가 대상) 기반 제품 평가. ★EAL은 보증 수준(평가 엄격도)이지 보안 강도 자체가 아님★. CCRA로 국가 간 상호인정.",
  "tip": "CC 인증은 특정 버전·구성 대상 — 설정이 달라지면 보증 범위 밖."
 },
 {
  "s": "s1",
  "g": "평가·인증",
  "front": "FIPS 140-2 / 140-3",
  "key": "암호 모듈 검증 Level 1~4",
  "back": "미 연방 암호 모듈 보안 요구 표준(CMVP 검증). Level 1(기본)~Level 4(물리적 침해 감지·대응). ★FIPS 140-3★가 140-2의 후속(ISO/IEC 19790 기반).",
  "tip": "HSM 선정 시 'FIPS 140 Level 3 이상' 요구가 흔함 — Level 2는 변조 흔적(tamper-evidence) 수준."
 },
 {
  "s": "s1",
  "g": "AI/ML",
  "front": "SOAR",
  "key": "보안 오케스트레이션·자동화·대응",
  "back": "Security Orchestration, Automation and Response. ★플레이북★으로 여러 보안 도구를 연동해 경보 분류·격리 등 대응을 자동화. AI/ML 탐지 결과를 대응으로 연결.",
  "tip": "SIEM = 수집·상관분석, SOAR = 대응 자동화 — 역할 구분."
 },
 {
  "s": "s2",
  "g": "데이터 개념",
  "front": "Data Dispersion",
  "key": "데이터 분산 저장(비트 분할)",
  "back": "데이터를 조각내 여러 위치·노드에 분산 저장하는 기법. ★Bit splitting·Erasure coding★으로 일부 노드 손실에도 복원 가능하고, 단일 조각만으로는 원본 노출이 어려움.",
  "tip": "가용성·기밀성 동시 향상. 단, 조각이 여러 관할에 흩어지면 데이터 위치(주권) 이슈."
 },
 {
  "s": "s2",
  "g": "스토리지",
  "front": "Volume vs Object Storage",
  "key": "블록 볼륨 / 객체 저장소",
  "back": "IaaS 스토리지 2종. ★Volume★ = 인스턴스에 붙는 가상 디스크(블록), ★Object★ = 키·메타데이터 기반 파일 저장(API/HTTP 접근, 대용량·내구성).",
  "tip": "공개 버킷 설정 오류는 Object storage 최대 유출 원인."
 },
 {
  "s": "s2",
  "g": "스토리지",
  "front": "Ephemeral / Raw / Long-term Storage",
  "key": "임시·원시·장기 저장",
  "back": "Ephemeral = 인스턴스 종료 시 소멸(★영속 데이터 저장 금지★). Raw = 물리 LUN을 VM에 직접 매핑(RDM). Long-term = 아카이브용 저비용 저장(검색 지연·보존 정책).",
  "tip": "Ephemeral에 로그·증거를 두면 인스턴스 종료와 함께 소실."
 },
 {
  "s": "s2",
  "g": "암호·키",
  "front": "Envelope Encryption (DEK·KEK)",
  "key": "데이터키를 키로 감싸기",
  "back": "데이터는 DEK(Data Encryption Key)로 암호화하고, DEK는 KMS/HSM의 ★KEK(Key Encryption Key)로 암호화★해 데이터와 함께 저장. 키 순환·대량 데이터 처리 효율.",
  "tip": "KEK 파기 = 그 아래 모든 DEK·데이터 복구 불가 → crypto-shredding 원리."
 },
 {
  "s": "s2",
  "g": "암호·키",
  "front": "HSM · KMS",
  "key": "하드웨어 보안 모듈 / 키 관리 서비스",
  "back": "HSM = 키를 변조 방지 하드웨어 내 생성·저장·연산(FIPS 140 검증). KMS = 키 수명주기(생성·순환·폐기·접근정책) 관리 서비스. ★키는 암호화 데이터와 분리 보관★.",
  "tip": "Keys·secrets·certificates 관리는 Outline 2.3의 별도 항목 — 시크릿(API 키·비밀번호)은 Vault·Secrets Manager로."
 },
 {
  "s": "s2",
  "g": "암호·키",
  "front": "Hashing",
  "key": "무결성 검증(단방향)",
  "back": "임의 길이 입력 → 고정 길이 다이제스트(SHA-256 등). ★무결성★ 검증. 해시를 송신자 개인키로 서명하면 ★디지털 서명 → 부인방지★.",
  "tip": "해시 단독·HMAC은 부인방지 불가(HMAC은 공유키라 누가 만들었는지 증명 못함)."
 },
 {
  "s": "s2",
  "g": "난독화",
  "front": "Tokenization",
  "key": "민감값을 무의미 토큰으로",
  "back": "PAN 등 민감 데이터를 수학적 관계가 없는 토큰으로 대체하고 원본은 ★토큰 볼트(token vault)★에 별도 보관. 토큰 유출만으로 원본 복원 불가 → PCI DSS 범위 축소.",
  "tip": "암호화는 키로 복호 가능, 토큰화는 볼트 조회로만 복원 — '수학적 관계 없음'이 키워드."
 },
 {
  "s": "s2",
  "g": "난독화",
  "front": "Data Masking (Static / Dynamic)",
  "key": "정적·동적 마스킹",
  "back": "Static masking = 비운영(개발·테스트) 사본을 영구 치환. Dynamic masking = 운영 데이터는 그대로 두고 ★조회 시점에 권한별로 가림★. 기법: 치환·셔플·널링·부분 가림.",
  "tip": "테스트 환경에 운영 PII 복제 금지 → 정적 마스킹 사본 사용."
 },
 {
  "s": "s2",
  "g": "난독화",
  "front": "Anonymization vs Pseudonymization",
  "key": "비가역 익명화 / 가역 가명화",
  "back": "익명화 = 재식별 불가하게 식별자 제거(비가역) → GDPR 적용 대상 외. 가명화 = 추가 정보로 재식별 가능 → ★여전히 개인정보★.",
  "tip": "준식별자(우편번호·생년월일·성별) 결합 재식별 위험 — k-익명성 등 검토."
 },
 {
  "s": "s2",
  "g": "데이터 보안",
  "front": "DLP (Data Loss Prevention)",
  "key": "발견·모니터링·차단",
  "back": "구성: ★Discovery·Classification → Monitoring → Enforcement★. 위치별: Network DLP(전송 중), Endpoint DLP(사용 중), Storage DLP(저장 중).",
  "tip": "암호화된 트래픽은 DLP 검사 불가 → TLS 검사 지점 설계 필요."
 },
 {
  "s": "s2",
  "g": "발견·분류",
  "front": "Structured / Semi / Unstructured",
  "key": "정형·반정형·비정형 데이터",
  "back": "정형 = 스키마 DB(RDB), 반정형 = 자기 기술 태그(JSON·XML), 비정형 = 문서·이미지·영상. 비정형은 ★콘텐츠 분석(패턴·ML)★ 기반 발견 필요.",
  "tip": "발견 방식: 메타데이터 기반·라벨 기반·콘텐츠 분석 기반."
 },
 {
  "s": "s2",
  "g": "IRM",
  "front": "IRM (Information Rights Management)",
  "key": "데이터에 붙어 다니는 권한",
  "back": "문서 자체에 ★지속적 보호(persistent protection)★ 적용 — 열람·복사·인쇄·전달 권한, 만료, 원격 폐기(revocation), 감사 추적. 인증서·키 발급과 폐기로 권한 통제.",
  "tip": "DLP는 '유출 경로 차단', IRM은 '유출돼도 사용 통제' — 조직 밖 공유 시 IRM."
 },
 {
  "s": "s2",
  "g": "보존·삭제",
  "front": "Crypto-shredding",
  "key": "키 파기로 데이터 무력화",
  "back": "데이터를 암호화해 저장한 뒤 ★해당 키를 모든 사본까지 안전 파기★해 데이터를 복구 불가로 만드는 클라우드 삭제 방법(cryptographic erase).",
  "tip": "키 백업·에스크로 사본이 남으면 실패 — 키 사본 전수 파기 확인."
 },
 {
  "s": "s2",
  "g": "보존·삭제",
  "front": "Legal Hold",
  "key": "소송 대비 삭제 중단",
  "back": "소송·조사 예상 시 관련 데이터의 ★보존 정책상 삭제를 중단★하고 원형 보존. 승인된 접근(authorized access)만 허용, 삭제 방지(deletion prevention) 통제.",
  "tip": "Legal hold는 보존 정책보다 우선 — 만료 자동삭제도 정지."
 },
 {
  "s": "s2",
  "g": "감사·추적",
  "front": "Chain of Custody",
  "key": "증거 관리 연속성",
  "back": "증거의 수집·이전·보관·분석 전 과정에 ★누가·언제·어디서·무엇을★ 했는지 기록해 무결성과 증거능력 확보. 해시값으로 변조 여부 입증.",
  "tip": "클라우드에선 CSP 협조 필요 — 계약에 포렌식 지원 조항."
 },
 {
  "s": "s2",
  "g": "AI/ML 데이터",
  "front": "Membership Inference / Model Inversion",
  "key": "모델로부터 학습데이터 추론",
  "back": "Membership inference = 특정 레코드가 학습에 포함됐는지 추론. Model inversion = 모델 출력으로 학습 데이터 특성 복원. 대응 = ★차등 프라이버시(DP)·출력 제한·접근통제★.",
  "tip": "Model extraction(도용)은 모델 자체 복제 — 개인정보 공격과 구분."
 },
 {
  "s": "s3",
  "g": "구성요소",
  "front": "Management Plane",
  "key": "클라우드 전체 통제 계층",
  "back": "자원 생성·구성·삭제·과금 등 클라우드를 관리하는 콘솔·API 계층. ★탈취 시 전체 환경 장악★ → 특권 계정 MFA·최소권한·JIT·전용 관리망·전수 로깅.",
  "tip": "Data plane(워크로드 트래픽)·Control plane(라우팅·결정)과 구분."
 },
 {
  "s": "s3",
  "g": "구성요소",
  "front": "Type 1 Hypervisor (Bare-metal)",
  "key": "하드웨어 위 직접 실행",
  "back": "호스트 OS 없이 하드웨어에서 직접 실행(VMware ESXi·Microsoft Hyper-V·Xen). ★공격 표면이 작아★ CSP 데이터센터의 표준.",
  "tip": "KVM은 리눅스 커널 모듈이지만 일반적으로 Type 1로 분류 [확인필요: 교재별 상이]."
 },
 {
  "s": "s3",
  "g": "구성요소",
  "front": "Type 2 Hypervisor (Hosted)",
  "key": "호스트 OS 위 실행",
  "back": "일반 OS 위 애플리케이션처럼 실행(VMware Workstation·Oracle VirtualBox). ★호스트 OS 취약점까지 공격 표면★에 포함돼 대규모 클라우드에 부적합.",
  "tip": "개발·테스트용 데스크톱 가상화에 주로 사용."
 },
 {
  "s": "s3",
  "g": "구성요소",
  "front": "VM Escape",
  "key": "게스트에서 하이퍼바이저 탈출",
  "back": "게스트 VM 내 공격자가 하이퍼바이저 취약점으로 ★호스트·다른 테넌트 VM에 접근★. 멀티테넌시 최악의 위협.",
  "tip": "대응: 하이퍼바이저 신속 패치·최소 기능·관리 인터페이스 분리. 고객 통제 범위 밖 → CSP 보증(SOC 2·ISO 27017) 확인."
 },
 {
  "s": "s3",
  "g": "구성요소",
  "front": "SDN (Software-Defined Networking)",
  "key": "제어·데이터 평면 분리",
  "back": "네트워크 제어 평면(control plane)을 데이터 평면(data plane)에서 분리해 ★중앙 컨트롤러가 프로그래밍 방식으로 제어★. 클라우드 가상 네트워크·NSG의 기반.",
  "tip": "컨트롤러가 단일 장애점·고가치 표적 — 컨트롤러 보호 필수."
 },
 {
  "s": "s3",
  "g": "데이터센터",
  "front": "Uptime Institute Tier I~IV",
  "key": "기본→이중화→동시유지보수→무정지",
  "back": "Tier I 기본 용량, Tier II 이중화 용량 구성요소, ★Tier III 동시 유지보수 가능(concurrently maintainable)★, ★Tier IV 내결함성(fault tolerant)★.",
  "tip": "Tier III = 계획 정비 무중단, Tier IV = 단일 장애에도 무중단 — 키워드 혼동 주의."
 },
 {
  "s": "s3",
  "g": "데이터센터",
  "front": "N / N+1 / 2N Redundancy",
  "key": "용량 이중화 수준",
  "back": "N = 필요 용량만, N+1 = 예비 1대 추가, ★2N = 전체 용량을 독립 두 계통으로 완전 이중화★. 전력·냉각 설계 기준.",
  "tip": "N+1은 구성요소 1개 장애 대응, 계통 전체 장애엔 2N 필요."
 },
 {
  "s": "s3",
  "g": "데이터센터",
  "front": "Multi-vendor Pathway Connectivity",
  "key": "복수 통신사·물리 경로",
  "back": "★서로 다른 통신사와 물리적으로 분리된 인입 경로★로 네트워크를 연결해 단일 회선·공사 사고 장애 방지.",
  "tip": "같은 통신사 회선 2개, 같은 관로 2개 = 진정한 이중화 아님."
 },
 {
  "s": "s3",
  "g": "데이터센터",
  "front": "HVAC · ASHRAE",
  "key": "냉각·온습도 관리",
  "back": "Heating, Ventilation, and Air Conditioning. ASHRAE 권장 흡기 온도 ★약 18~27°C★. 핫/콜드 아일 분리, 냉각 이중화(N+1 이상).",
  "tip": "습도 과다 = 결로·부식, 과소 = 정전기(ESD)."
 },
 {
  "s": "s3",
  "g": "데이터센터",
  "front": "Buy vs Build · Location",
  "key": "구매·임차 대 자체 구축",
  "back": "Build = 통제 최대·초기 비용·시간 큼, Buy/Lease(코로케이션) = 신속·공유 리스크. 입지는 ★자연재해·전력망·통신·법적 관할·인력★ 고려.",
  "tip": "입지 선정은 BC/DR·데이터 주권과 직결."
 },
 {
  "s": "s3",
  "g": "데이터센터",
  "front": "Tenant Partitioning",
  "key": "논리적 테넌트 분리",
  "back": "논리 설계에서 테넌트별 ★네트워크·컴퓨트·스토리지 격리★(VLAN/VXLAN·VPC·전용 호스트)와 접근통제를 적용.",
  "tip": "규제상 물리 분리 요구 시 전용 호스트(dedicated host)·전용 리전 검토."
 },
 {
  "s": "s3",
  "g": "리스크",
  "front": "Risk Treatment",
  "key": "회피·완화·전가·수용",
  "back": "Avoid(활동 중단), Mitigate(통제로 감소), Transfer/Share(보험·계약), Accept(잔여 위험 수용 — ★경영진 승인★).",
  "tip": "Transfer해도 법적 책임·평판 손실은 남음 — accountability 이전 불가."
 },
 {
  "s": "s3",
  "g": "리스크",
  "front": "ALE = SLE × ARO",
  "key": "정량적 위험 산식",
  "back": "SLE(Single Loss Expectancy) = AV(자산가치) × EF(노출계수). ★ALE(연간 기대손실) = SLE × ARO(연간 발생률)★. 통제 비용 < ALE 감소분이면 타당.",
  "tip": "EF는 비율(0~1), ARO는 연간 빈도 — 둘을 혼동하지 말 것."
 },
 {
  "s": "s3",
  "g": "보안통제",
  "front": "Packet Capture in Cloud",
  "key": "트래픽 미러링·플로 로그",
  "back": "고객은 물리 탭 불가 → ★VPC traffic mirroring★ 등 CSP 기능이나 가상 어플라이언스로 패킷 캡처. Flow logs는 메타데이터만(페이로드 없음).",
  "tip": "Flow log만으로는 페이로드 포렌식 불가."
 },
 {
  "s": "s3",
  "g": "BC/DR",
  "front": "RTO · RPO · MTD",
  "key": "복구 시간·복구 시점·최대 허용",
  "back": "RTO = 서비스 복구까지 허용 시간, ★RPO = 허용 가능한 데이터 손실 시점(백업 주기)★, MTD(MAO) = 최대 허용 중단 시간. ★RTO ≤ MTD★.",
  "tip": "RPO는 '시간 간격'이지만 데이터 손실량 관점 — 복제 주기와 연결."
 },
 {
  "s": "s3",
  "g": "BC/DR",
  "front": "Recovery Service Level (RSL)",
  "key": "재해 시 필요한 처리 능력 %",
  "back": "재해 기간 중 정상 대비 ★몇 %의 컴퓨팅 능력★이 필요한지 나타내는 지표. DR 환경 규모(비용) 산정의 근거.",
  "tip": "RSL 50% = DR 사이트는 운영의 절반 용량으로 설계 가능."
 },
 {
  "s": "s4",
  "g": "취약점 목록",
  "front": "OWASP Top 10 (2021)",
  "key": "웹앱 10대 위험 인식 문서",
  "back": "웹 애플리케이션의 가장 중대한 보안 위험 10가지를 정리한 ★인식(awareness) 문서★. 2021판 1위는 ★A01 Broken Access Control★, A03 Injection, A10 SSRF 등이 포함된다.",
  "tip": "Top 10 은 '검증 표준'이 아니라 인식 문서 — 검증 요구사항 체크리스트는 ASVS."
 },
 {
  "s": "s4",
  "g": "취약점 목록",
  "front": "OWASP ASVS",
  "key": "앱 보안 검증 요구사항 표준",
  "back": "Application Security Verification Standard. 설계·개발·테스트 시 사용하는 ★검증 요구사항 목록★으로 ★Level 1(기본)·Level 2(대부분 앱 권장)·Level 3(고위험·핵심)★의 3단계를 둔다.",
  "tip": "보안 요구사항 정의·계약상 검증 기준으로 쓰는 것은 Top 10 이 아니라 ASVS."
 },
 {
  "s": "s4",
  "g": "취약점 목록",
  "front": "OWASP API Security Top 10 (2023)",
  "key": "API 10대 위험 — 1위 BOLA",
  "back": "API 특화 위험 목록. 1위는 ★API1 BOLA(Broken Object Level Authorization)★ — 객체 ID 만 바꿔 남의 데이터에 접근. 그 외 Broken Authentication, BOPLA, Unrestricted Resource Consumption, BFLA, SSRF, Improper Inventory Management 등.",
  "tip": "BOLA=객체 단위 인가 실패, BFLA=기능(관리자 기능) 단위 인가 실패 — 구분."
 },
 {
  "s": "s4",
  "g": "위협 모델링",
  "front": "STRIDE",
  "key": "Microsoft 위협 분류 6종",
  "back": "Spoofing·Tampering·Repudiation·Information disclosure·Denial of service·Elevation of privilege. 각각 ★인증·무결성·부인방지·기밀성·가용성·인가★ 위반에 대응한다.",
  "tip": "Repudiation ↔ 부인방지(로그·전자서명), Tampering ↔ 무결성(해시·서명)."
 },
 {
  "s": "s4",
  "g": "위협 모델링",
  "front": "PASTA",
  "key": "리스크 중심 7단계 위협 모델링",
  "back": "Process for Attack Simulation and Threat Analysis. ★비즈니스 목표 정의에서 시작해 공격 시뮬레이션·리스크/영향 분석까지 7단계★로 진행하는 리스크 중심(attacker-centric) 방법론.",
  "tip": "STRIDE=위협 분류, DREAD=위협 점수화, PASTA=비즈니스 연계 프로세스."
 },
 {
  "s": "s4",
  "g": "보안 테스트",
  "front": "SAST",
  "key": "소스코드 정적 분석 — 화이트박스",
  "back": "Static Application Security Testing. ★실행하지 않고 소스·바이트코드를 분석★하는 화이트박스 테스트로 SDLC 초기(코딩·빌드)에 적용, 정확한 코드 위치를 알려주나 ★오탐(false positive)★이 많다.",
  "tip": "런타임·환경설정 취약점은 SAST 로 찾기 어렵다 → DAST 보완."
 },
 {
  "s": "s4",
  "g": "보안 테스트",
  "front": "DAST",
  "key": "실행 중 앱 외부 공격 — 블랙박스",
  "back": "Dynamic Application Security Testing. ★실행 중인 애플리케이션에 외부에서 요청을 보내는 블랙박스 테스트★. 소스 불필요, 설정·런타임 취약점 탐지에 강하지만 코드 위치를 특정하지 못한다.",
  "tip": "DAST 는 테스트·스테이징 '실행 환경'이 있어야 하므로 SAST 보다 SDLC 후반."
 },
 {
  "s": "s4",
  "g": "보안 테스트",
  "front": "IAST",
  "key": "에이전트 계측 — 실행 중 내부 관찰",
  "back": "Interactive Application Security Testing. 앱 런타임에 ★에이전트(instrumentation)를 심어 테스트 트래픽 처리 중 내부 데이터 흐름을 관찰★ — SAST·DAST 의 장점을 결합해 오탐이 적다.",
  "tip": "IAST 는 '테스트' 중 탐지, RASP 는 '운영' 중 실시간 차단."
 },
 {
  "s": "s4",
  "g": "보안 테스트",
  "front": "SCA · SBOM",
  "key": "오픈소스 구성요소·라이선스 분석",
  "back": "Software Composition Analysis 는 ★서드파티·오픈소스 구성요소의 알려진 취약점(CVE)과 라이선스 위반★을 식별한다. 결과물인 ★SBOM(Software Bill of Materials)★은 SPDX·CycloneDX 형식으로 구성요소 목록을 기술.",
  "tip": "자체 작성 코드 결함은 SAST, 가져다 쓴 라이브러리 결함·라이선스는 SCA."
 },
 {
  "s": "s4",
  "g": "보조 보안 컴포넌트",
  "front": "WAF",
  "key": "L7 HTTP 트래픽 필터",
  "back": "Web Application Firewall. ★HTTP/HTTPS 요청을 애플리케이션 계층(L7)에서 검사★해 SQLi·XSS 등 공격을 차단. 시그니처·규칙(예: OWASP CRS) 기반이며 취약점 수정 전 가상 패치(virtual patching)에 사용.",
  "tip": "WAF 는 시큐어 코딩을 대체하지 않는 보완 통제(compensating control)."
 },
 {
  "s": "s4",
  "g": "보조 보안 컴포넌트",
  "front": "XML Firewall",
  "key": "XML/SOAP 메시지 검증·필터",
  "back": "★XML·SOAP 웹서비스 트래픽을 파싱해 스키마 검증, XXE·XML 폭탄 차단, WS-Security 처리★를 수행하는 애플리케이션 계층 게이트웨이. 보통 앱 서버 앞단 프록시로 배치.",
  "tip": "일반 방화벽·IPS 는 XML 구조를 해석하지 못한다 — 메시지 내용 검증은 XML 방화벽."
 },
 {
  "s": "s4",
  "g": "보조 보안 컴포넌트",
  "front": "API Gateway",
  "key": "API 단일 진입점 — 인증·속도제한",
  "back": "모든 API 호출의 ★단일 진입점으로 인증·인가, rate limiting·throttling, 로깅, 라우팅, 프로토콜 변환★을 중앙 집중 처리. 마이크로서비스 아키텍처의 핵심 구성요소.",
  "tip": "속도 제한(rate limiting)은 OWASP API4 Unrestricted Resource Consumption 대응."
 },
 {
  "s": "s4",
  "g": "연합 인증",
  "front": "SAML 2.0",
  "key": "XML 어서션 기반 웹 SSO",
  "back": "Security Assertion Markup Language. ★IdP(Identity Provider)가 XML 어서션(assertion)을 발급하고 SP(Service Provider)가 이를 신뢰★해 도메인 간 연합 SSO 를 구현하는 OASIS 표준.",
  "tip": "SAML 의 신뢰 근거는 IdP 의 서명된 어서션 — SP 는 사용자 비밀번호를 보지 않는다."
 },
 {
  "s": "s4",
  "g": "연합 인증",
  "front": "OAuth 2.0 / OpenID Connect",
  "key": "OAuth=인가 위임, OIDC=인증 계층",
  "back": "★OAuth 2.0 은 인가(authorization) 위임 프레임워크★로 access token 을 발급. ★OIDC 는 OAuth 2.0 위에 인증(authentication) 계층★을 얹어 JWT 형식 ID Token 으로 사용자 신원을 전달한다.",
  "tip": "'OAuth 로 로그인'은 엄밀히 OIDC — OAuth 자체는 인증 프로토콜이 아님."
 },
 {
  "s": "s4",
  "g": "클라우드 IAM",
  "front": "CASB",
  "key": "사용자↔클라우드 사이 보안 정책 지점",
  "back": "Cloud Access Security Broker. ★가시성·컴플라이언스·데이터 보안·위협 방어★ 4대 기능으로 섀도 IT 탐지, DLP, 접근 통제를 수행. 배치 방식은 ★API 기반(out-of-band)·포워드 프록시·리버스 프록시★.",
  "tip": "API 모드 = 이미 저장된 데이터 사후 점검, 프록시 모드 = 인라인 실시간 통제."
 },
 {
  "s": "s4",
  "g": "클라우드 IAM",
  "front": "Secrets Management",
  "key": "비밀값 중앙 보관·순환",
  "back": "API 키·DB 비밀번호·토큰·인증서 등 ★비밀(secret)을 코드·이미지에 하드코딩하지 않고 볼트(vault)/KMS 에 중앙 보관★, 접근 감사·자동 순환(rotation)·단기 동적 자격증명을 적용.",
  "tip": "Git 저장소에 커밋된 키는 삭제만으로 부족 — 즉시 폐기(revoke)·재발급."
 },
 {
  "s": "s5",
  "g": "하드웨어 보안",
  "front": "HSM (Hardware Security Module)",
  "key": "변조 방지 전용 암호 키 장치",
  "back": "암호 키를 생성·저장·사용하는 ★변조 방지(tamper-resistant) 전용 하드웨어★로 키가 장치 밖으로 평문 반출되지 않는다. ★FIPS 140-2/140-3★ 검증 수준으로 신뢰도를 표시하며, 클라우드에서는 단일 테넌트 Cloud HSM 으로 제공.",
  "tip": "KMS 는 관리 서비스, HSM 은 키를 지키는 하드웨어 — KMS 의 루트 키는 보통 HSM 이 보호."
 },
 {
  "s": "s5",
  "g": "하드웨어 보안",
  "front": "TPM (Trusted Platform Module)",
  "key": "메인보드 신뢰 칩 — 측정 부팅",
  "back": "호스트 메인보드에 장착된 ★신뢰 루트(root of trust) 칩★. 부팅 구성요소 해시를 PCR 에 기록하는 ★측정 부팅(measured boot)·원격 증명(attestation)★, 디스크 암호화 키 봉인(sealing)에 사용. VM 용 가상 TPM(vTPM)도 존재.",
  "tip": "TPM=개별 장치 무결성, HSM=다수 시스템의 키 관리 서비스 규모."
 },
 {
  "s": "s5",
  "g": "가상화",
  "front": "Hypervisor Type 1 vs Type 2",
  "key": "Type 1 베어메탈 / Type 2 호스트형",
  "back": "★Type 1(bare-metal)★은 하드웨어 위에 직접 설치(예: VMware ESXi, Microsoft Hyper-V, Xen)되어 공격 표면이 작아 클라우드 데이터센터 표준. ★Type 2(hosted)★는 호스트 OS 위 애플리케이션(예: VirtualBox, VMware Workstation)으로 호스트 OS 취약점까지 상속한다.",
  "tip": "보안상 선호 = Type 1 — Type 2 는 호스트 OS 가 추가 공격 표면."
 },
 {
  "s": "s5",
  "g": "원격 접근",
  "front": "Jumpbox / Bastion Host",
  "key": "관리망 진입 단일 강화 서버",
  "back": "관리 대상 서버에 직접 접근하지 않고 ★강화(hardening)·MFA·세션 기록이 적용된 단일 중계 호스트를 경유★하도록 해 공격 표면을 줄이고 감사 추적을 확보한다.",
  "tip": "Bastion 은 최소 서비스만 실행하는 '희생 가능' 강화 서버 — 일반 업무 PC 아님."
 },
 {
  "s": "s5",
  "g": "네트워크 보안",
  "front": "DNSSEC",
  "key": "DNS 응답 무결성·출처 인증",
  "back": "DNS 레코드에 ★전자서명(RRSIG)을 붙여 응답의 출처 인증과 무결성을 보장★, 캐시 포이즈닝을 방지한다. ★기밀성(암호화)은 제공하지 않는다★.",
  "tip": "DNS 질의 암호화는 DoH/DoT — DNSSEC 은 서명이지 암호화가 아님."
 },
 {
  "s": "s5",
  "g": "네트워크 보안",
  "front": "Network Security Group / Security Group",
  "key": "클라우드 가상 방화벽 규칙",
  "back": "VM·서브넷·인터페이스 단위로 ★허용 포트·출발지 규칙을 정의하는 클라우드 가상 방화벽★. 기본 거부(default deny) 인바운드와 최소 허용 규칙, IaC 로 관리·검토.",
  "tip": "0.0.0.0/0 에 SSH(22)·RDP(3389) 개방은 대표 오설정."
 },
 {
  "s": "s5",
  "g": "네트워크 보안",
  "front": "Honeypot / Honeynet",
  "key": "공격자 유인용 미끼 시스템",
  "back": "실제 업무 가치가 없는 ★미끼 시스템으로 공격자를 유인해 탐지·전술 수집★. 정상 사용자가 접근할 이유가 없어 접근 자체가 고신뢰 경보가 된다.",
  "tip": "함정 수사(entrapment) 논란 회피 — 유인(enticement)은 가능, 범행 유도는 금지. 법무 검토."
 },
 {
  "s": "s5",
  "g": "가용성",
  "front": "Maintenance Mode",
  "key": "호스트 점검 전 VM 이전·신규 배치 차단",
  "back": "호스트 패치·점검 시 ★실행 중 VM 을 다른 호스트로 라이브 마이그레이션하고 신규 워크로드 배치를 막는 상태★. 유지보수 중 가용성 유지와 관리 작업 격리를 위해 사용.",
  "tip": "maintenance mode 동안 해당 호스트는 스케줄링 대상에서 제외."
 },
 {
  "s": "s5",
  "g": "가용성",
  "front": "DRS / Dynamic Optimization",
  "key": "클러스터 자원 자동 재배치",
  "back": "Distributed Resource Scheduling 은 ★클러스터 내 호스트 자원 사용률을 감시해 VM 을 자동 배치·이전★한다. Dynamic Optimization 은 성능·전력 기준으로 지속 재조정하는 개념.",
  "tip": "HA 는 장애 시 재시작, DRS 는 평시 부하 균형 — 목적 구분."
 },
 {
  "s": "s5",
  "g": "ITSM 프로세스",
  "front": "Change Management (Change Enablement)",
  "key": "변경 리스크 평가·승인",
  "back": "변경의 ★리스크를 평가하고 승인(change authority/CAB)해 성공적 변경을 극대화★. 유형: ★표준(사전 승인·저위험)·정상(normal, 평가·승인)·긴급(emergency, ECAB 신속 승인)★.",
  "tip": "긴급 변경도 사후 문서화·검토는 생략하지 않는다."
 },
 {
  "s": "s5",
  "g": "ITSM 프로세스",
  "front": "Problem Management",
  "key": "근본 원인 제거 — 알려진 오류",
  "back": "인시던트의 ★근본 원인(root cause)을 식별·제거★해 재발을 방지. 원인은 알고 해결 전인 상태를 ★알려진 오류(Known Error)★, 임시 대응을 ★워크어라운드(workaround)★라 한다.",
  "tip": "인시던트 관리=빠른 서비스 복구, 문제 관리=원인 제거."
 },
 {
  "s": "s5",
  "g": "ITSM 표준",
  "front": "ISO/IEC 20000-1",
  "key": "서비스 관리 시스템(SMS) 요구사항",
  "back": "IT ★서비스 관리 시스템(SMS) 수립·운영·개선 요구사항★을 정한 인증 가능한 국제 표준. ITIL 은 모범사례 프레임워크(인증은 개인 자격), ISO/IEC 20000-1 은 조직 인증 표준.",
  "tip": "ITIL=가이드(조직 인증 없음), ISO 20000-1=조직 인증, ISO 27001=ISMS 인증."
 },
 {
  "s": "s5",
  "g": "포렌식",
  "front": "Chain of Custody",
  "key": "증거 이동·취급 연속 기록",
  "back": "증거가 ★언제·누가·어디서·어떻게 수집·이동·보관·분석했는지 끊김 없이 기록★해 법정 증거 능력(admissibility)을 유지. 해시값으로 무결성 확인을 병행.",
  "tip": "기록에 공백이 있으면 증거 무결성 자체가 의심받는다."
 },
 {
  "s": "s5",
  "g": "포렌식",
  "front": "ISO/IEC 27037",
  "key": "디지털 증거 식별·수집·획득·보존",
  "back": "디지털 증거의 ★식별(identification)·수집(collection)·획득(acquisition)·보존(preservation)★ 지침. 27041(조사 방법 적합성 보증), 27042(분석·해석), 27043(조사 원칙·프로세스)과 함께 포렌식 표준군을 구성.",
  "tip": "27037=초동 처리, 27042=분석·해석, 27043=전체 조사 프로세스."
 },
 {
  "s": "s5",
  "g": "보안 운영",
  "front": "SIEM",
  "key": "로그 수집·상관 분석·경보",
  "back": "Security Information and Event Management. 다양한 소스의 ★로그를 중앙 수집·정규화·상관 분석(correlation)해 경보★를 생성하고 보존·보고를 지원. 위협 인텔리전스 연동, SOAR 로 대응 자동화.",
  "tip": "SIEM=탐지·상관, SOAR=플레이북 기반 대응 자동화."
 },
 {
  "s": "s5",
  "g": "보안 운영",
  "front": "Incident Response (NIST SP 800-61)",
  "key": "준비→탐지·분석→봉쇄·근절·복구→사후",
  "back": "NIST SP 800-61 Rev.2 의 IR 생명주기: ★준비 → 탐지·분석 → 봉쇄·근절·복구 → 사후 활동(교훈)★. 2025년 Rev.3 은 NIST CSF 2.0 기능(Govern·Identify·Protect·Detect·Respond·Recover)에 맞춰 재구성.",
  "tip": "클라우드 IR 은 CSP 와의 역할·연락 체계·로그 접근권을 사전에 계약으로 확보."
 },
 {
  "s": "s6",
  "g": "관할권 충돌",
  "front": "CLOUD Act (2018, US)",
  "key": "미국 사업자 해외 저장 데이터 제출",
  "back": "Clarifying Lawful Overseas Use of Data Act. ★미국 관할 서비스 제공자는 데이터가 해외에 저장되어 있어도 적법한 영장에 따라 제출★해야 한다. EU GDPR 의 역외 이전 제한(Art.48 등)과 ★상충(conflicting international legislation)★하는 대표 사례.",
  "tip": "데이터 '저장 위치'보다 '사업자 관할'이 중요 — 데이터 주권(sovereignty) 리스크."
 },
 {
  "s": "s6",
  "g": "eDiscovery",
  "front": "eDiscovery (ISO/IEC 27050)",
  "key": "소송용 전자 정보 식별·보존·제출",
  "back": "소송·조사에 관련된 ★전자 저장 정보(ESI)를 식별·보존·수집·처리·검토·제출★하는 절차. ISO/IEC 27050 시리즈와 CSA Guidance 가 지침을 제공하며, 소송 예상 시 ★법적 보존(legal hold)★으로 삭제·변경을 중단시킨다.",
  "tip": "멀티테넌시 환경에서 타 고객 데이터 노출 없이 범위를 한정하는 것이 클라우드 eDiscovery 핵심 과제."
 },
 {
  "s": "s6",
  "g": "개인정보 유형",
  "front": "Contractual vs Regulated Private Data",
  "key": "계약상 데이터 vs 법규 규제 데이터",
  "back": "★규제 데이터(regulated)★는 법률이 보호 의무를 부과(예: HIPAA 의 PHI, 각국 개인정보법의 PII). ★계약상 데이터(contractual)★는 계약으로 보호 의무가 생김(예: PCI DSS 카드 데이터 — 카드 브랜드와의 계약 기반).",
  "tip": "PCI DSS 는 법률이 아니라 계약상 표준 — CCSP 단골 함정."
 },
 {
  "s": "s6",
  "g": "GDPR",
  "front": "GDPR Data Subject Rights",
  "key": "열람·정정·삭제·처리제한·이동·반대",
  "back": "정보주체 권리: ★열람(Art.15)·정정(16)·삭제/잊힐 권리(17)·처리 제한(18)·이동권(20)·반대권(21)·자동화된 의사결정 대상이 되지 않을 권리(22)★. 위반 시 과징금 최대 ★2,000만 유로 또는 전 세계 연 매출 4% 중 큰 금액★.",
  "tip": "데이터 이동권(portability)은 클라우드 벤더 락인 완화와도 연결."
 },
 {
  "s": "s6",
  "g": "개인정보 표준",
  "front": "ISO/IEC 27018",
  "key": "퍼블릭 클라우드 PII 처리자 보호 지침",
  "back": "★퍼블릭 클라우드에서 PII 처리자(processor) 역할을 하는 CSP★를 위한 PII 보호 실천 지침(ISO/IEC 27002 확장). 고객 지시 범위 내 처리, 마케팅 목적 사용 금지, 하위 처리자 공개, 침해 통지 등.",
  "tip": "27017=클라우드 보안 통제, 27018=클라우드 PII 보호."
 },
 {
  "s": "s6",
  "g": "개인정보 표준",
  "front": "ISO/IEC 27701",
  "key": "개인정보 관리체계(PIMS) 확장",
  "back": "★ISO/IEC 27001(ISMS)·27002 를 확장한 개인정보 정보관리체계(PIMS)★ 요구사항·지침. PII 관리자(controller)와 처리자(processor) 양쪽 통제를 포함하고 GDPR 등 법규 매핑을 제공. 2025년 개정판은 독립 관리체계 표준으로 전환 [확인필요].",
  "tip": "27701 은 27001 을 기반으로 한 '확장' — 단독 인증 여부는 개정판 확인."
 },
 {
  "s": "s6",
  "g": "개인정보 평가",
  "front": "PIA / DPIA",
  "key": "개인정보 영향평가",
  "back": "Privacy Impact Assessment 는 신규 시스템·처리의 ★개인정보 위험을 사전 식별·완화★하는 평가. GDPR 은 ★고위험 처리에 DPIA(Art.35)를 의무화★한다.",
  "tip": "PIA 는 '사후 감사'가 아니라 설계 단계의 '사전 평가'."
 },
 {
  "s": "s6",
  "g": "감사 보고서",
  "front": "SOC 1 / SOC 2 / SOC 3",
  "key": "재무통제 / TSC 상세 / 공개 요약",
  "back": "AICPA SSAE 18 기반 보고서. ★SOC 1★=재무보고 내부통제(ICFR), ★SOC 2★=Trust Services Criteria(보안·가용성·처리 무결성·기밀성·개인정보) 상세(제한 배포), ★SOC 3★=SOC 2 범위의 일반 공개용 요약.",
  "tip": "CSP 보안 실사에는 SOC 2 Type II 가 가장 유용 — SOC 3 은 상세 테스트 결과 없음."
 },
 {
  "s": "s6",
  "g": "감사 보고서",
  "front": "SOC Type I vs Type II",
  "key": "시점 설계 vs 기간 운영 효과성",
  "back": "★Type I★은 특정 시점(point in time)의 통제 ★설계 적정성★, ★Type II★는 일정 기간(통상 6~12개월) 동안의 ★설계 + 운영 효과성(operating effectiveness)★을 평가.",
  "tip": "'실제로 작동했는가'를 보려면 Type II."
 },
 {
  "s": "s6",
  "g": "감사 표준",
  "front": "SSAE 18 · ISAE 3402",
  "key": "미국 AICPA · 국제 IAASB 인증 표준",
  "back": "★SSAE 18★은 AICPA(미국)의 인증 업무 기준으로 SOC 보고서의 근거. ★ISAE 3402★는 IAASB(국제)의 서비스 조직 통제 보증 기준으로 SOC 1 과 대응되는 국제 표준.",
  "tip": "ISAE 3402 = 국제판 SOC 1(재무통제), 비재무 보증은 ISAE 3000."
 },
 {
  "s": "s6",
  "g": "클라우드 보증",
  "front": "CSA STAR",
  "key": "CCM 기반 클라우드 보증 레지스트리",
  "back": "Cloud Security Alliance Security, Trust, Assurance and Risk. ★Level 1 자가 평가(CAIQ)★, ★Level 2 제3자 감사(STAR Certification=ISO 27001+CCM, STAR Attestation=SOC 2+CCM)★, Level 3 지속 모니터링 [확인필요]. 기준은 ★CCM(Cloud Controls Matrix)★.",
  "tip": "Level 1 은 자가 평가라 독립성 없음 — 보증 수준 최저."
 },
 {
  "s": "s6",
  "g": "데이터 역할",
  "front": "Data Roles",
  "key": "소유자·관리자·처리자·수탁자·스튜어드",
  "back": "★Data owner/Controller★는 처리 목적·수단 결정과 책임, ★Processor★는 관리자 대신 처리(CSP), ★Custodian★은 기술적 보관·보호 운영, ★Steward★는 데이터 품질·메타데이터·업무 정의 관리.",
  "tip": "책임(accountability)은 위탁해도 controller 에 남는다."
 },
 {
  "s": "s6",
  "g": "리스크 처리",
  "front": "Risk Treatment",
  "key": "회피·완화·이전·공유·수용",
  "back": "리스크 대응 옵션: ★회피(avoid, 활동 중단)·완화(mitigate, 통제 적용)·이전(transfer, 보험·계약)·공유(share)·수용(accept, 경영진 승인)★. 잔여 리스크는 리스크 수용 기준(appetite) 이내여야 한다.",
  "tip": "보험으로 재무 손실은 이전돼도 평판 손실·법적 책임은 남는다."
 },
 {
  "s": "s6",
  "g": "계약",
  "front": "SLA · MSA · SOW",
  "key": "서비스 수준 / 기본 계약 / 작업 범위",
  "back": "★MSA(Master Service Agreement)★는 전체 관계의 기본 법적 조건, ★SOW(Statement of Work)★는 개별 작업의 범위·산출물·일정, ★SLA★는 가용성·응답시간 등 측정 가능한 서비스 수준과 미달 시 크레딧(페널티).",
  "tip": "SLA 지표는 정의·측정 방법·제외 사항(계획 정비 등)까지 명시해야 의미가 있다."
 },
 {
  "s": "s6",
  "g": "벤더 관리",
  "front": "Vendor Lock-in · Escrow",
  "key": "이전 불가 종속 / 제3자 예치",
  "back": "★벤더 락인★은 독점 API·포맷·과도한 이전 비용으로 다른 CSP 로 옮기기 어려운 상태 — 이식성(portability)·출구 전략(exit strategy)으로 완화. ★에스크로(escrow)★는 소스코드·데이터를 제3자에 예치해 벤더 파산(viability 상실) 시 인도받는 장치.",
  "tip": "출구 전략은 계약 '체결 시점'에 데이터 반환 형식·기간·삭제 증명을 명시."
 },
 {
  "s": "s6",
  "g": "공급망",
  "front": "ISO/IEC 27036",
  "key": "공급자 관계 정보보안",
  "back": "★공급자 관계(supplier relationships)의 정보보안★ 지침 시리즈. Part 4 는 ★클라우드 서비스 보안★을 다루며 공급망 전반의 위험 식별·계약 통제·모니터링을 제시.",
  "tip": "27036=공급자 관계, 27017=클라우드 통제, 27018=클라우드 PII."
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ NIST SP 800-145 클라우드 정의",
  "type": "table",
  "head": [
   "구분",
   "항목"
  ],
  "rows": [
   [
    "5대 필수 특성",
    "주문형 셀프서비스 · 광범위 네트워크 접근 · 자원 풀링 · 신속한 탄력성 · 측정 서비스"
   ],
   [
    "3 서비스 모델",
    "IaaS · PaaS · SaaS"
   ],
   [
    "4 배포 모델",
    "퍼블릭 · 프라이빗 · 커뮤니티 · 하이브리드"
   ],
   [
    "ISO/IEC 17788 추가 특성",
    "멀티테넌시 (6번째 특성)"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 공유책임 모델",
  "type": "table",
  "head": [
   "영역",
   "IaaS",
   "PaaS",
   "SaaS"
  ],
  "rows": [
   [
    "데이터·접근 관리",
    "고객",
    "고객",
    "고객"
   ],
   [
    "애플리케이션",
    "고객",
    "고객",
    "CSP"
   ],
   [
    "런타임·미들웨어·OS",
    "고객",
    "CSP",
    "CSP"
   ],
   [
    "가상화·서버·스토리지·네트워크",
    "CSP",
    "CSP",
    "CSP"
   ],
   [
    "물리 데이터센터",
    "CSP",
    "CSP",
    "CSP"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "ISO/IEC 17789 클라우드 역할",
  "type": "table",
  "head": [
   "역할",
   "설명"
  ],
  "rows": [
   [
    "CSC (Cloud Service Customer)",
    "클라우드 서비스를 사용하는 고객"
   ],
   [
    "CSP (Cloud Service Provider)",
    "클라우드 서비스를 제공"
   ],
   [
    "CSN (Cloud Service Partner)",
    "감사인·브로커·통합업체 등 지원 파트너"
   ],
   [
    "Cloud Service Broker",
    "여러 CSP 서비스를 중개·통합"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 클라우드 데이터 수명주기 (CSA)",
  "type": "table",
  "head": [
   "단계",
   "주요 통제"
  ],
  "rows": [
   [
    "Create",
    "분류·라벨링·소유자 지정"
   ],
   [
    "Store",
    "암호화·접근통제·백업"
   ],
   [
    "Use",
    "DLP·IRM·활동 모니터링"
   ],
   [
    "Share",
    "암호화 전송·IRM·DLP"
   ],
   [
    "Archive",
    "장기 보존·키 관리·포맷 호환"
   ],
   [
    "Destroy",
    "crypto-shredding·덮어쓰기(클라우드에선 물리 파기 불가)"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "데이터 보호 기술 비교",
  "type": "table",
  "head": [
   "기술",
   "원본 복원",
   "용도"
  ],
  "rows": [
   [
    "암호화",
    "O(키 보유)",
    "저장·전송 기밀성"
   ],
   [
    "토큰화(Tokenization)",
    "O(토큰 금고)",
    "결제정보(PCI DSS) 범위 축소"
   ],
   [
    "마스킹(정적/동적)",
    "X(정적) / 원본 유지(동적)",
    "테스트 데이터·화면 표시"
   ],
   [
    "익명화(Anonymization)",
    "X",
    "개인 식별 불가 — GDPR 적용 제외"
   ],
   [
    "가명화(Pseudonymization)",
    "O(추가 정보로)",
    "여전히 개인정보"
   ],
   [
    "해싱",
    "X",
    "무결성 검증"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "스토리지 유형",
  "type": "table",
  "head": [
   "서비스 모델",
   "스토리지"
  ],
  "rows": [
   [
    "IaaS",
    "볼륨(블록) · 오브젝트"
   ],
   [
    "PaaS",
    "구조화(DB) · 비구조화(빅데이터)"
   ],
   [
    "SaaS",
    "정보 저장·관리 · 콘텐츠·파일 저장 · CDN · 임시(ephemeral)"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "하이퍼바이저",
  "type": "table",
  "head": [
   "유형",
   "구조",
   "보안"
  ],
  "rows": [
   [
    "Type 1 (Bare-metal)",
    "하드웨어 위에 직접",
    "공격면 작음 — 클라우드 표준"
   ],
   [
    "Type 2 (Hosted)",
    "호스트 OS 위에서 실행",
    "호스트 OS 취약점 영향"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "Uptime Institute Tier",
  "type": "table",
  "head": [
   "Tier",
   "특징"
  ],
  "rows": [
   [
    "I Basic",
    "이중화 없음"
   ],
   [
    "II Redundant components",
    "구성요소 일부 이중화"
   ],
   [
    "III Concurrently maintainable",
    "운영 중 유지보수 가능"
   ],
   [
    "IV Fault tolerant",
    "단일 장애에도 무중단"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "애플리케이션 보안 테스트",
  "type": "table",
  "head": [
   "기법",
   "방식",
   "특징"
  ],
  "rows": [
   [
    "SAST",
    "소스·바이너리 정적 분석(화이트박스)",
    "SDLC 초기 · 오탐 다수"
   ],
   [
    "DAST",
    "실행 중 앱 외부 공격(블랙박스)",
    "런타임 결함 탐지"
   ],
   [
    "IAST",
    "실행 중 내부 에이전트",
    "SAST+DAST 장점"
   ],
   [
    "RASP",
    "런타임 자기 보호",
    "탐지+차단"
   ],
   [
    "SCA",
    "오픈소스 구성요소 취약점·라이선스",
    "SBOM 생성"
   ],
   [
    "퍼징",
    "비정상 입력 대량 주입",
    "견고성"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "IAM·Federation 표준",
  "type": "table",
  "head": [
   "표준",
   "용도"
  ],
  "rows": [
   [
    "SAML 2.0",
    "XML 기반 SSO·Federation(IdP↔SP)"
   ],
   [
    "OAuth 2.0",
    "★인가(authorization)★ 위임"
   ],
   [
    "OpenID Connect",
    "OAuth 위 ★인증★ 계층(ID 토큰, JWT)"
   ],
   [
    "WS-Federation",
    "MS 계열 Federation"
   ],
   [
    "SCIM",
    "계정 프로비저닝 자동화"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "위협 모델링",
  "type": "table",
  "head": [
   "모델",
   "내용"
  ],
  "rows": [
   [
    "STRIDE",
    "Spoofing·Tampering·Repudiation·Information disclosure·DoS·Elevation of privilege"
   ],
   [
    "DREAD",
    "위험 점수화(Damage·Reproducibility·Exploitability·Affected users·Discoverability)"
   ],
   [
    "PASTA",
    "7단계 위험 중심 모델링"
   ],
   [
    "ATASM",
    "Architecture·Threats·Attack surfaces·Mitigations"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "포렌식 관련 ISO 표준",
  "type": "table",
  "head": [
   "표준",
   "범위"
  ],
  "rows": [
   [
    "ISO/IEC 27037",
    "디지털 증거 식별·수집·획득·보존"
   ],
   [
    "ISO/IEC 27041",
    "조사 방법의 적합성 보증"
   ],
   [
    "ISO/IEC 27042",
    "디지털 증거 분석·해석"
   ],
   [
    "ISO/IEC 27043",
    "인시던트 조사 원칙·프로세스"
   ],
   [
    "ISO/IEC 27050",
    "전자증거개시(eDiscovery)"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ 감사 보고서",
  "type": "table",
  "head": [
   "보고서",
   "대상·내용"
  ],
  "rows": [
   [
    "SOC 1",
    "재무보고 관련 내부통제(ICFR) — 감사인·회계용"
   ],
   [
    "SOC 2",
    "Trust Services Criteria(보안·가용성·처리무결성·기밀성·개인정보) — 제한 배포"
   ],
   [
    "SOC 3",
    "SOC 2 요약 — 공개 배포 가능"
   ],
   [
    "Type I / Type II",
    "특정 시점 설계 / 기간(통상 6~12개월) 운영 효과성"
   ],
   [
    "SSAE 18 / ISAE 3402",
    "미국 / 국제 인증 표준"
   ],
   [
    "CSA STAR",
    "Level 1 자가평가 · Level 2 제3자 인증 · Level 3 지속 모니터링 [확인필요]"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "개인정보 관련 표준·법",
  "type": "table",
  "head": [
   "항목",
   "내용"
  ],
  "rows": [
   [
    "GDPR",
    "EU 개인정보 — 72시간 내 감독기관 통지 · 데이터 주체 권리"
   ],
   [
    "Controller / Processor",
    "처리 목적·수단 결정 / 위탁 처리"
   ],
   [
    "ISO/IEC 27018",
    "퍼블릭 클라우드 PII 처리자 보호"
   ],
   [
    "ISO/IEC 27701",
    "개인정보 관리체계(PIMS) 확장"
   ],
   [
    "ISO/IEC 27017",
    "클라우드 보안 통제 지침"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "Multi-tenancy는 NIST SP 800-145의 5가지 필수 특성 중 하나 — 아니다. NIST 5특성에는 없고 ISO/IEC 17788이 6번째 핵심 특성으로 추가."
 },
 {
  "s": "s1",
  "t": "SaaS로 옮기면 데이터 보호 책임도 CSP로 넘어간다 — 아니다. 데이터 분류·접근 권한·최종 책임(accountability)은 항상 고객(CSC)."
 },
 {
  "s": "s1",
  "t": "Hybrid cloud = 여러 퍼블릭 CSP를 동시에 쓰는 것 — 아니다. 그것은 Multi-cloud. Hybrid는 서로 다른 배포 모델(예 Private+Public)의 결합."
 },
 {
  "s": "s1",
  "t": "Portability와 Interoperability는 같은 말 — 아니다. Portability는 이전 용이성, Interoperability는 시스템 간 상호 작동·데이터 교환 능력."
 },
 {
  "s": "s1",
  "t": "Cloud service broker는 ISO/IEC 17789의 독립 역할 — 아니다. CSN(Cloud Service Partner)의 하위역할. NIST SP 500-292에선 5대 행위자 중 하나."
 },
 {
  "s": "s1",
  "t": "EAL7 제품은 EAL4 제품보다 항상 더 안전하다 — 아니다. EAL은 평가 보증 깊이를 뜻하며, 비교는 동일 PP/ST 기준일 때만 의미."
 },
 {
  "s": "s1",
  "t": "Degaussing으로 클라우드 SSD 데이터를 소거한다 — 아니다. SSD엔 무효이고 고객은 물리 매체 접근권도 없음 → Cryptographic Erase(crypto-shredding)."
 },
 {
  "s": "s1",
  "t": "Rapid elasticity는 수요 증가 시 확장만 의미 — 아니다. 수요에 따라 자동 확장·축소(scale out/in) 모두 포함."
 },
 {
  "s": "s1",
  "t": "SOAR가 있으면 SIEM은 불필요 — 아니다. SIEM은 로그 수집·상관분석, SOAR는 그 결과를 플레이북으로 대응 자동화 — 보완 관계."
 },
 {
  "s": "s1",
  "t": "AI 기반 위협 탐지 모델은 학습만 끝나면 검증이 필요 없다 — 아니다. 학습 데이터 출처 검증(data source validation)·드리프트·오탐률을 지속 검증해야 함."
 },
 {
  "s": "s2",
  "t": "CSA 수명주기에서 Store는 Use 이후 단계 — 아니다. Create 직후 거의 동시 발생하는 2단계."
 },
 {
  "s": "s2",
  "t": "토큰화와 암호화는 같다 — 아니다. 토큰은 원본과 수학적 관계가 없고 볼트 조회로만 복원. 암호문은 키로 복호 가능."
 },
 {
  "s": "s2",
  "t": "가명화(pseudonymization)된 데이터는 GDPR 대상이 아니다 — 아니다. 재식별 가능하므로 여전히 개인정보. 비가역 익명화만 대상 외."
 },
 {
  "s": "s2",
  "t": "해시만으로 부인방지가 된다 — 아니다. 해시는 무결성. 부인방지는 송신자 개인키 디지털 서명이 필요."
 },
 {
  "s": "s2",
  "t": "IRM과 DLP는 기능이 같다 — 아니다. DLP는 유출 탐지·차단, IRM은 데이터에 권한을 내장해 유출 후에도 사용을 통제."
 },
 {
  "s": "s2",
  "t": "Ephemeral storage에 감사 로그를 저장해도 된다 — 아니다. 인스턴스 종료 시 소멸 → 중앙 로그 저장소로 전송."
 },
 {
  "s": "s2",
  "t": "Legal hold 중이라도 보존기간 만료 데이터는 자동 삭제해야 한다 — 아니다. Legal hold가 보존 정책보다 우선."
 },
 {
  "s": "s2",
  "t": "데이터 보존(retention)과 아카이브(archiving)는 같은 개념 — 아니다. 보존은 '얼마나 유지할지' 정책, 아카이브는 비활성 데이터를 장기 저장소로 옮기는 절차."
 },
 {
  "s": "s2",
  "t": "암호화 키를 암호화된 데이터와 같은 스토리지에 두면 관리가 편하므로 권장 — 아니다. 키 분리 보관이 원칙(HSM/KMS)."
 },
 {
  "s": "s2",
  "t": "AI 학습 데이터는 일단 모델에 학습되면 개인정보 위험이 사라진다 — 아니다. Membership inference·Model inversion으로 추론 가능."
 },
 {
  "s": "s3",
  "t": "Type 2 하이퍼바이저가 Type 1보다 공격 표면이 작다 — 아니다. Type 2는 호스트 OS까지 공격 표면에 포함."
 },
 {
  "s": "s3",
  "t": "Uptime Tier III는 내결함성(fault tolerant) — 아니다. Tier III는 동시 유지보수 가능, 내결함성은 Tier IV."
 },
 {
  "s": "s3",
  "t": "RPO는 시스템을 복구하는 데 걸리는 허용 시간 — 아니다. 그것은 RTO. RPO는 허용 가능한 데이터 손실 시점."
 },
 {
  "s": "s3",
  "t": "위험 전가(transfer) 시 책임도 모두 보험사·CSP로 넘어간다 — 아니다. 재무적 영향 일부만 이전, 최종 책임은 조직."
 },
 {
  "s": "s3",
  "t": "같은 통신사 회선 2개를 쓰면 multi-vendor pathway 요구를 충족 — 아니다. 서로 다른 통신사·물리 경로가 필요."
 },
 {
  "s": "s3",
  "t": "Flow logs로 패킷 페이로드까지 분석 가능 — 아니다. 메타데이터(IP·포트·바이트)만 기록. 페이로드는 traffic mirroring."
 },
 {
  "s": "s3",
  "t": "DR 테스트는 운영 환경 전면 중단 테스트부터 시작 — 아니다. 체크리스트→워크스루→시뮬레이션→병행→전면 중단 순으로 위험 증가, 전면 중단은 최후·신중."
 },
 {
  "s": "s3",
  "t": "IaaS에서도 하이퍼바이저 패치는 고객 책임 — 아니다. 하이퍼바이저는 CSP 책임, 고객은 게스트 OS부터."
 },
 {
  "s": "s3",
  "t": "잔여 위험 수용(accept)은 보안팀이 단독 결정 — 아니다. 위험 소유자·경영진이 공식 승인."
 },
 {
  "s": "s3",
  "t": "N+1 이중화면 전력 계통 전체 장애에도 무중단 — 아니다. 독립 계통 완전 이중화는 2N."
 },
 {
  "s": "s4",
  "t": "OWASP Top 10 은 애플리케이션 보안 검증 표준이다 — 인식(awareness) 문서이며, 검증 요구사항 표준은 ASVS"
 },
 {
  "s": "s4",
  "t": "OAuth 2.0 은 사용자 인증 프로토콜이다 — OAuth 는 인가 위임, 인증은 그 위의 OpenID Connect(ID Token)"
 },
 {
  "s": "s4",
  "t": "SAST 는 실행 중인 앱을 외부에서 공격해 본다 — 그것은 DAST(블랙박스), SAST 는 미실행 소스 분석(화이트박스)"
 },
 {
  "s": "s4",
  "t": "IAST 와 RASP 는 같은 것이다 — IAST 는 테스트 단계 탐지, RASP 는 운영 단계 런타임 자기 보호(차단)"
 },
 {
  "s": "s4",
  "t": "WAF 를 도입하면 시큐어 코딩은 생략해도 된다 — WAF 는 보완 통제일 뿐 근본 원인(코드 결함)을 제거하지 못함"
 },
 {
  "s": "s4",
  "t": "SCA 는 개발자가 작성한 코드의 논리 결함을 찾는다 — SCA 는 서드파티·오픈소스 구성요소의 알려진 취약점·라이선스 분석"
 },
 {
  "s": "s4",
  "t": "위협 모델링은 개발 완료 후 침투 테스트 직전에 수행한다 — 설계 단계에서 시작하고 아키텍처 변경 시 반복"
 },
 {
  "s": "s4",
  "t": "STRIDE 의 Repudiation 은 기밀성 위협이다 — 부인(Repudiation)은 부인방지(non-repudiation) 위협, 기밀성은 Information disclosure"
 },
 {
  "s": "s4",
  "t": "CASB 의 API 모드는 실시간 인라인 차단을 제공한다 — API 모드는 out-of-band 사후 점검, 인라인 통제는 프록시 모드"
 },
 {
  "s": "s4",
  "t": "SaaS 를 쓰면 애플리케이션 보안 책임은 모두 CSP 에 있다 — 고객은 여전히 데이터·사용자 접근(IAM)·구성 설정 책임"
 },
 {
  "s": "s5",
  "t": "Type 2 하이퍼바이저가 Type 1 보다 보안상 우수하다 — Type 1(베어메탈)이 호스트 OS 가 없어 공격 표면이 작다"
 },
 {
  "s": "s5",
  "t": "DNSSEC 은 DNS 질의를 암호화해 기밀성을 제공한다 — 서명으로 출처·무결성만 보장, 암호화는 DoH/DoT"
 },
 {
  "s": "s5",
  "t": "인시던트 관리의 목표는 근본 원인 제거이다 — 인시던트 관리는 신속한 서비스 복구, 원인 제거는 문제 관리"
 },
 {
  "s": "s5",
  "t": "ITIL 은 조직이 인증받을 수 있는 국제 표준이다 — 조직 인증 표준은 ISO/IEC 20000-1, ITIL 은 모범사례 프레임워크"
 },
 {
  "s": "s5",
  "t": "긴급 변경은 승인과 문서화를 생략한다 — ECAB 등 신속 승인 경로를 거치고 사후 문서화·검토 수행"
 },
 {
  "s": "s5",
  "t": "포렌식 분석은 원본 디스크에서 직접 수행하는 것이 가장 정확하다 — 검증된 사본(비트 단위 이미지+해시)에서 분석"
 },
 {
  "s": "s5",
  "t": "휘발성 증거는 디스크 이미지 확보 후 수집한다 — 휘발성 순서(Order of volatility)에 따라 메모리 등 휘발성 높은 것부터"
 },
 {
  "s": "s5",
  "t": "고객은 자사 IaaS VM 에 대해 CSP 허락 없이 언제든 침투 테스트할 수 있다 — CSP 의 침투 테스트 정책·허용 범위를 준수"
 },
 {
  "s": "s5",
  "t": "취약점 평가와 침투 테스트는 같다 — 평가는 취약점 식별·목록화, 침투 테스트는 실제 악용으로 영향 검증"
 },
 {
  "s": "s5",
  "t": "데이터 유출 시 규제기관 통지는 홍보팀이 판단해 즉시 언론에 먼저 발표한다 — 법무 검토 후 정해진 대변인·법정 기한(예: GDPR 72시간)에 따라 통지"
 },
 {
  "s": "s6",
  "t": "PCI DSS 는 국가 법률이다 — 카드 브랜드와 계약에 따른 계약상(contractual) 산업 표준"
 },
 {
  "s": "s6",
  "t": "CSP 에 데이터 처리를 위탁하면 개인정보 보호 책임도 CSP 로 이전된다 — 책임(accountability)은 데이터 관리자(controller)인 고객에게 남음"
 },
 {
  "s": "s6",
  "t": "SOC 3 보고서로 CSP 통제의 상세 테스트 결과를 검토할 수 있다 — SOC 3 은 일반 공개 요약, 상세는 SOC 2(Type II)"
 },
 {
  "s": "s6",
  "t": "SOC 2 Type I 은 일정 기간 운영 효과성을 평가한다 — Type I 은 시점 설계, 기간 운영 효과성은 Type II"
 },
 {
  "s": "s6",
  "t": "ISAE 3402 는 SOC 2 의 국제판이다 — ISAE 3402 는 SOC 1(재무보고 통제)에 대응, 비재무는 ISAE 3000"
 },
 {
  "s": "s6",
  "t": "데이터가 EU 리전에 저장되어 있으면 미국 법의 제출 요구에서 완전히 자유롭다 — CLOUD Act 는 미국 관할 사업자에 저장 위치와 무관하게 적용"
 },
 {
  "s": "s6",
  "t": "CSA STAR Level 1 은 독립 제3자 감사 결과이다 — Level 1 은 CAIQ 기반 자가 평가"
 },
 {
  "s": "s6",
  "t": "사이버 보험에 가입하면 리스크가 제거된다 — 재무 영향만 이전, 리스크 자체와 평판·법적 책임은 잔존"
 },
 {
  "s": "s6",
  "t": "퍼블릭 클라우드에서도 고객은 언제든 CSP 데이터센터를 직접 감사할 수 있다 — 대부분 제3자 인증 보고서(SOC 2·ISO 27001·STAR)로 감사권을 대체"
 },
 {
  "s": "s6",
  "t": "ISO/IEC 27018 은 PII 관리자(controller)용 개인정보 관리체계 인증 표준이다 — 27018 은 퍼블릭 클라우드 PII 처리자용 실천 지침, PIMS 는 27701"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "클라우드 개념",
  "title": "클라우드 정의·핵심 특성·역할",
  "ref": "CCSP Exam Outline Domain 1.1·1.2 · NIST SP 800-145 · ISO/IEC 17788/17789 · NIST SP 500-292",
  "body": [
   {
    "h": "NIST SP 800-145 vs ISO/IEC 17788 핵심 특성",
    "tb": {
     "head": [
      "특성",
      "의미",
      "비고"
     ],
     "rows": [
      [
       "On-demand self-service",
       "사람 개입 없이 자원 프로비저닝",
       "NIST·ISO 공통"
      ],
      [
       "Broad network access",
       "표준 메커니즘으로 다양한 단말 접근",
       "NIST·ISO 공통"
      ],
      [
       "Resource pooling",
       "다중 고객 동적 할당, 위치 독립성",
       "NIST·ISO 공통"
      ],
      [
       "Rapid elasticity (and scalability)",
       "자동 확장·축소",
       "ISO는 scalability 병기"
      ],
      [
       "Measured service",
       "사용량 계량·과금·보고",
       "NIST·ISO 공통"
      ],
      [
       "Multi-tenancy",
       "테넌트 간 격리된 자원 공유",
       "★ISO 17788만★"
      ]
     ]
    }
   },
   {
    "h": "역할 (ISO/IEC 17789 vs NIST SP 500-292)",
    "tb": {
     "head": [
      "ISO/IEC 17789",
      "하위역할 예",
      "NIST SP 500-292 대응"
     ],
     "rows": [
      [
       "CSC (Cloud Service Customer)",
       "cloud service user, administrator, business manager",
       "Cloud Consumer"
      ],
      [
       "CSP (Cloud Service Provider)",
       "service manager, operations manager, security/risk manager",
       "Cloud Provider · Carrier(망)"
      ],
      [
       "CSN (Cloud Service Partner)",
       "cloud auditor, cloud service broker, developer",
       "Cloud Auditor · Cloud Broker"
      ],
      [
       "Regulator",
       "규제기관 — 준거성 요구",
       "Outline 1.1에 명시"
      ]
     ]
    }
   },
   {
    "h": "Building block technologies",
    "li": [
     "가상화(Virtualization) — 하이퍼바이저·컨테이너로 자원 추상화",
     "스토리지(Storage) — 블록·파일·객체, 분산 저장",
     "네트워킹(Networking) — SDN·가상 네트워크·NSG",
     "데이터베이스(Databases) — 관리형 RDB·NoSQL",
     "오케스트레이션(Orchestration) — 자원 배치·수명주기 자동화(IaC, Kubernetes)"
    ]
   },
   {
    "h": "Cloud computing activities (ISO/IEC 17789)",
    "li": [
     "CSC 활동: 서비스 사용, 서비스 시험(trial), 모니터링, 보안 관리, 청구 확인",
     "CSP 활동: 시스템 준비, 서비스 제공·모니터링, 보안·감사 데이터 제공, 고객 관계 관리",
     "CSN 활동: 서비스 개발·통합, 감사 수행, 중개(brokerage)",
     "★활동(activity) → 역할(role) → 기능 컴포넌트(functional component)★로 매핑되는 것이 CCRA 구조"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "참조 아키텍처",
  "title": "서비스 범주·배포 모델·교차 관점·관련 기술",
  "ref": "CCSP Exam Outline Domain 1.2 · ISO/IEC 17788",
  "body": [
   {
    "h": "서비스 모델과 공유책임",
    "tb": {
     "head": [
      "모델",
      "CSP 관리 범위",
      "고객(CSC) 관리 범위"
     ],
     "rows": [
      [
       "IaaS",
       "물리·네트워크·하이퍼바이저",
       "게스트 OS·미들웨어·앱·데이터·IAM"
      ],
      [
       "PaaS",
       "IaaS 범위 + OS·런타임·미들웨어",
       "앱 코드·데이터·IAM 설정"
      ],
      [
       "SaaS",
       "애플리케이션까지 전체 스택",
       "데이터·사용자 접근·구성 설정"
      ],
      [
       "공통",
       "인프라 물리 보안",
       "★데이터 최종 책임(accountability)★"
      ]
     ]
    }
   },
   {
    "h": "ISO/IEC 17788 서비스 범주(7)",
    "li": [
     "CaaS(Communications), CompaaS(Compute), DSaaS(Data Storage), IaaS, NaaS(Network), PaaS, SaaS",
     "기능 유형(capability type) 3종: Application · Platform · Infrastructure",
     "배포 모델: Public · Private · Community · Hybrid (+실무 Multi-cloud)"
    ]
   },
   {
    "h": "교차 관점(cross-cutting aspects)",
    "tb": {
     "head": [
      "관점",
      "핵심 질문",
      "실무 수단"
     ],
     "rows": [
      [
       "Interoperability",
       "다른 시스템과 함께 동작하는가",
       "표준 API·데이터 형식"
      ],
      [
       "Portability",
       "다른 CSP로 옮길 수 있는가",
       "컨테이너·개방 형식"
      ],
      [
       "Reversibility",
       "철수 시 회수·삭제되는가",
       "계약 반환·삭제 증명"
      ],
      [
       "Auditability",
       "증거를 수집·검증할 수 있는가",
       "감사 로그·SOC 보고서·Right to audit"
      ],
      [
       "SLA / Governance",
       "수준을 측정·통제하는가",
       "지표·벌칙·책임 매트릭스"
      ],
      [
       "Regulatory / Privacy",
       "법·규제를 충족하는가",
       "데이터 위치·PII 보호(ISO 27018)"
      ]
     ]
    }
   },
   {
    "h": "관련 기술의 영향",
    "li": [
     "AI/ML·데이터 과학 — 대규모 데이터 처리, 모델·학습 데이터 보호 이슈",
     "블록체인 — 분산 원장, 무결성·추적성(단 삭제권과 충돌)",
     "IoT·Edge — 데이터 발생지 근처 처리로 지연 감소, 단말 보안 취약",
     "Containers — 경량 격리, 이미지 공급망 관리 필요",
     "Quantum — Shor 알고리즘이 RSA·ECC 위협 → NIST PQC(FIPS 203 ML-KEM, 204 ML-DSA, 205 SLH-DSA)",
     "Confidential computing — TEE(신뢰 실행 환경)로 ★사용 중 데이터(data in use)★ 보호"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "보안 개념",
  "title": "클라우드 보안 개념",
  "ref": "CCSP Exam Outline Domain 1.3 · NIST SP 800-88 · CSA Top Threats",
  "body": [
   {
    "h": "핵심 보안 개념 맵",
    "tb": {
     "head": [
      "영역",
      "핵심",
      "대표 통제"
     ],
     "rows": [
      [
       "Cryptography·Key mgmt",
       "키는 데이터와 분리 보관",
       "KMS·HSM·BYOK·키 순환"
      ],
      [
       "IAM",
       "user·privileged·service 접근",
       "MFA·최소권한·JIT·서비스 계정 관리"
      ],
      [
       "Media sanitization",
       "물리 매체 접근 불가",
       "Overwriting·Cryptographic erase"
      ],
      [
       "Network security",
       "경계가 소프트웨어로",
       "NSG·트래픽 검사·Geofencing"
      ],
      [
       "Virtualization security",
       "격리가 신뢰의 근거",
       "하이퍼바이저 패치·컨테이너 격리"
      ],
      [
       "Security hygiene",
       "기본기",
       "패치·베이스라인·불변 아키텍처·하드닝"
      ]
     ]
    }
   },
   {
    "h": "가상화·컴퓨트 보안",
    "li": [
     "Hypervisor security — VM escape 방지, 관리 인터페이스 분리·패치",
     "Container security — 이미지 서명·스캔, 루트 실행 금지, 커널 공유 리스크",
     "Ephemeral computing — 짧은 수명 인스턴스, 포렌식 증거 휘발성 ↑",
     "Serverless — 고객은 함수 코드·권한·이벤트 입력만 관리(과다 권한 함수 주의)",
     "Isolation — 테넌트·워크로드 간 논리 분리가 멀티테넌시 보안의 핵심"
    ]
   },
   {
    "h": "공통 클라우드 위협(CSA Top Threats 계열)",
    "li": [
     "Misconfiguration·불충분한 변경 통제(공개 스토리지 버킷)",
     "Identity·접근·키 관리 미흡, 계정 탈취(account hijacking)",
     "안전하지 않은 인터페이스·API",
     "데이터 유출·손실, 악의적 내부자, 공유 기술 취약점",
     "클라우드 서비스 남용(크립토마이닝 등), DoS"
    ]
   },
   {
    "h": "Security hygiene",
    "li": [
     "Patching — 고객 책임 범위(IaaS 게스트 OS 등)는 고객이 패치",
     "Baselining — CIS Benchmarks 등 표준 구성 기준 정의 후 편차 탐지",
     "Immutable architecture — 운영 중 수정 대신 이미지 교체",
     "Hardening — 불필요 서비스·포트 제거, 기본 계정 비활성"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "보안 설계 원칙",
  "title": "안전한 클라우드 설계 원칙",
  "ref": "CCSP Exam Outline Domain 1.4 · CSA Security Guidance · AWS Well-Architected",
  "body": [
   {
    "h": "Cloud secure data lifecycle (CSA)",
    "tb": {
     "head": [
      "단계",
      "주요 활동",
      "핵심 통제"
     ],
     "rows": [
      [
       "Create",
       "생성·수정",
       "분류·라벨링"
      ],
      [
       "Store",
       "저장(생성 직후)",
       "암호화·접근통제·백업"
      ],
      [
       "Use",
       "조회·처리",
       "DLP·IRM·활동 모니터링"
      ],
      [
       "Share",
       "외부 공유",
       "암호화 전송·IRM·DLP"
      ],
      [
       "Archive",
       "장기 보존",
       "보존 정책·키 보존·매체 수명"
      ],
      [
       "Destroy",
       "영구 삭제",
       "Crypto-shredding·소거 증명"
      ]
     ]
    }
   },
   {
    "h": "BC/DR·BIA (설계 관점)",
    "li": [
     "클라우드 기반 BC/DR — 다중 리전·가용영역, 백업을 다른 CSP/리전에 보관하는 선택지",
     "BIA로 핵심 프로세스·MTD·RTO·RPO 산정",
     "CBA(Cost-Benefit Analysis) — 통제 비용이 기대 손실보다 작아야 함",
     "ROI — 클라우드 전환의 비용 절감·민첩성 효과를 정량화"
    ]
   },
   {
    "h": "기능적 보안 요구사항",
    "tb": {
     "head": [
      "요구",
      "의미",
      "리스크"
     ],
     "rows": [
      [
       "Portability",
       "다른 환경으로 이전 용이",
       "독점 형식 시 lock-in"
      ],
      [
       "Interoperability",
       "이기종 간 연동",
       "API 비호환"
      ],
      [
       "Vendor lock-in",
       "공급자 종속",
       "가격 인상·철수 불가"
      ]
     ]
    }
   },
   {
    "h": "설계 패턴 & DevOps 보안",
    "li": [
     "SANS 보안 원칙 — 최소권한·심층방어·직무분리 등 기본 원칙 적용",
     "Well-Architected Framework(AWS) — 6 Pillars 중 Security·Reliability 등",
     "CSA Enterprise Architecture — BOSS·ITOS·보안/리스크 관리 등 도메인 참조 모델",
     "Secure by design — 설계 단계부터 보안 기본값 내장",
     "DevSecOps — CI/CD 파이프라인에 SAST·SCA·IaC 스캔·시크릿 탐지 자동화(shift-left)"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "CSP 평가",
  "title": "CSP 평가 · AI/ML 이해",
  "ref": "CCSP Exam Outline Domain 1.5·1.6 · ISO/IEC 15408 · FIPS 140-3 · NIST AI RMF 1.0 · EU AI Act",
  "body": [
   {
    "h": "CSP 검증 기준(Verification against criteria)",
    "tb": {
     "head": [
      "기준",
      "대상",
      "특징"
     ],
     "rows": [
      [
       "ISO/IEC 27001 (+27017·27018)",
       "조직 ISMS",
       "27017 클라우드 통제, 27018 공개 클라우드 PII"
      ],
      [
       "SOC 2 Type II",
       "서비스 조직 통제",
       "일정 기간 운영 효과성"
      ],
      [
       "CSA STAR",
       "CSP 보안 상태",
       "CCM 기반 Level 1 자가평가 ~ 제3자 인증"
      ],
      [
       "Common Criteria (ISO/IEC 15408)",
       "IT 제품",
       "EAL1~7 보증 수준"
      ],
      [
       "FIPS 140-2/140-3",
       "암호 모듈",
       "Level 1~4, CMVP 검증"
      ],
      [
       "FedRAMP [미 연방]",
       "CSP 서비스",
       "NIST SP 800-53 기반 인가"
      ]
     ]
    }
   },
   {
    "h": "AI/ML in cloud security (1.6)",
    "li": [
     "Cloud threat detection & analysis — UEBA·이상탐지로 계정 탈취·데이터 유출 징후 탐지",
     "Data source validation & verification — 학습·입력 데이터 출처·무결성 확인(오염 방지)",
     "SOAR — 탐지 결과를 플레이북 기반 자동 대응으로 연결",
     "★사람 감독(human-in-the-loop)★ — 오탐·과잉 차단 방지"
    ]
   },
   {
    "h": "윤리·규제 요구",
    "tb": {
     "head": [
      "항목",
      "내용",
      "근거"
     ],
     "rows": [
      [
       "Bias·Fairness",
       "학습 데이터 편향 → 차별적 결과",
       "NIST AI RMF 신뢰성 특성"
      ],
      [
       "Transparency·Explainability",
       "결정 근거 설명 가능성",
       "EU AI Act 투명성 의무"
      ],
      [
       "Accountability",
       "결과 책임 주체 명확화",
       "ISO/IEC 42001 AIMS"
      ],
      [
       "Risk-based regulation",
       "금지·고위험·제한·최소 위험",
       "EU AI Act"
      ],
      [
       "Framework",
       "Govern·Map·Measure·Manage",
       "NIST AI RMF 1.0"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "데이터 개념",
  "title": "클라우드 데이터 개념·스토리지 아키텍처",
  "ref": "CCSP Exam Outline Domain 2.1·2.2 · CSA Security Guidance",
  "body": [
   {
    "h": "데이터 수명주기 단계별 보안 포인트",
    "tb": {
     "head": [
      "단계",
      "위험",
      "통제"
     ],
     "rows": [
      [
       "Create",
       "분류 누락",
       "생성 시 자동 분류·라벨"
      ],
      [
       "Store",
       "무단 접근·설정 오류",
       "저장 암호화·ACL·버전관리"
      ],
      [
       "Use",
       "내부자 오남용",
       "활동 모니터링·DLP·IRM"
      ],
      [
       "Share",
       "외부 유출",
       "IRM·전송 암호화·DLP"
      ],
      [
       "Archive",
       "키 분실로 복구 불가",
       "키 장기 보존·형식 호환"
      ],
      [
       "Destroy",
       "잔존 데이터(remanence)",
       "Crypto-shredding"
      ]
     ]
    }
   },
   {
    "h": "Data dispersion & Data flows",
    "li": [
     "Data dispersion — bit splitting·erasure coding으로 조각 분산 → 가용성·기밀성↑, 관할 다중화 주의",
     "Data flows — 수집→처리→저장→공유 경로를 데이터 흐름도(DFD)로 문서화",
     "흐름도로 ★신뢰 경계(trust boundary)·국경 간 이전·암호화 지점★ 식별",
     "흐름 파악이 DLP 배치·데이터 매핑의 전제"
    ]
   },
   {
    "h": "서비스 모델별 스토리지 유형",
    "tb": {
     "head": [
      "모델",
      "유형",
      "주의점"
     ],
     "rows": [
      [
       "IaaS",
       "Volume(블록), Object",
       "스냅샷 공유·공개 버킷"
      ],
      [
       "IaaS",
       "Ephemeral, Raw(RDM)",
       "종료 시 소멸 / 물리 LUN 직접 노출"
      ],
      [
       "PaaS",
       "Structured(DB), Unstructured(빅데이터)",
       "DB 접근통제·쿼리 감사"
      ],
      [
       "SaaS",
       "Information storage & mgmt, Content/file storage",
       "공유 링크·동기화 유출"
      ],
      [
       "공통",
       "Long-term(아카이브)",
       "보존·검색 지연·삭제 증명"
      ]
     ]
    }
   },
   {
    "h": "스토리지 유형별 위협",
    "li": [
     "무단 접근·설정 오류(공개 버킷) — 정책 스캔·CSPM",
     "스냅샷·백업 경유 유출 — 스냅샷 암호화·공유 권한 점검",
     "데이터 잔존(remanence) — 볼륨 반환 시 crypto erase",
     "랜섬웨어·실수 삭제 — 버전관리·불변(WORM) 백업",
     "관할 위반 — 리전 지정·복제 위치 통제"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "데이터 보안 기술",
  "title": "데이터 보안 기술과 전략",
  "ref": "CCSP Exam Outline Domain 2.3 · NIST SP 800-57 · PCI DSS",
  "body": [
   {
    "h": "데이터 상태별 보호",
    "tb": {
     "head": [
      "상태",
      "기술",
      "예"
     ],
     "rows": [
      [
       "At rest",
       "저장 암호화",
       "볼륨·객체·DB TDE"
      ],
      [
       "In transit",
       "전송 암호화",
       "TLS 1.2/1.3·IPsec"
      ],
      [
       "In use",
       "사용 중 보호",
       "Confidential computing(TEE)·동적 마스킹"
      ]
     ]
    }
   },
   {
    "h": "키·시크릿·인증서 관리",
    "li": [
     "키 수명주기 — 생성·배포·저장·순환·폐기·보관(NIST SP 800-57)",
     "Envelope encryption — DEK를 KEK로 감쌈, KEK는 HSM/KMS",
     "BYOK·HYOK·CSP 관리 키 — 통제 수준과 운영 부담 트레이드오프",
     "시크릿(API 키·DB 비밀번호) — 코드 하드코딩 금지, Secrets Manager·Vault·자동 순환",
     "인증서 — 만료 모니터링, 폐기(CRL·OCSP), 자동 갱신"
    ]
   },
   {
    "h": "난독화·토큰화 비교",
    "tb": {
     "head": [
      "기법",
      "가역성",
      "용도"
     ],
     "rows": [
      [
       "Encryption",
       "키로 가역",
       "기밀성 일반"
      ],
      [
       "Tokenization",
       "볼트 조회로만 가역",
       "PAN·주민번호, 규제 범위 축소"
      ],
      [
       "Static masking",
       "비가역",
       "개발·테스트 사본"
      ],
      [
       "Dynamic masking",
       "원본 유지·표시만 가림",
       "권한별 조회"
      ],
      [
       "Anonymization",
       "비가역",
       "통계·공개 데이터"
      ],
      [
       "Pseudonymization",
       "추가 정보로 가역",
       "분석, 여전히 개인정보"
      ]
     ]
    }
   },
   {
    "h": "Hashing & DLP",
    "li": [
     "Hashing — SHA-2/SHA-3로 무결성, 서명과 결합 시 부인방지",
     "MD5·SHA-1 — 충돌 공격으로 무결성 용도 부적합",
     "DLP 구성 — 발견·분류 → 모니터링 → 정책 집행(차단·격리·암호화·경고)",
     "DLP 위치 — Network(in motion)·Endpoint(in use)·Storage(at rest)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "발견·분류",
  "title": "데이터 발견·분류·IRM",
  "ref": "CCSP Exam Outline Domain 2.4~2.6",
  "body": [
   {
    "h": "데이터 발견(Discovery)",
    "tb": {
     "head": [
      "데이터 유형",
      "예",
      "발견 방법"
     ],
     "rows": [
      [
       "Structured",
       "RDB 테이블",
       "스키마·컬럼 메타데이터 스캔"
      ],
      [
       "Semi-structured",
       "JSON·XML·로그",
       "태그·키 기반 파싱"
      ],
      [
       "Unstructured",
       "문서·이미지·메일",
       "콘텐츠 분석(정규식·ML·OCR)"
      ],
      [
       "Data location",
       "리전·SaaS·섀도우 IT",
       "자산 인벤토리·CASB"
      ]
     ]
    }
   },
   {
    "h": "데이터 분류(Classification)",
    "li": [
     "분류 정책 — 민감도(공개·내부·기밀·제한), 규제 유형(PII·PHI·PCI), 소유자 지정",
     "Data mapping — 원천·목적지 간 필드 대응, 이전 경로·관할 파악",
     "Labeling·tagging — 메타데이터·라벨을 데이터에 부착해 자동 통제(DLP·IRM) 연계",
     "분류 책임 = ★데이터 소유자(owner)★, 구현 = 관리자(custodian)"
    ]
   },
   {
    "h": "IRM 목표와 도구",
    "tb": {
     "head": [
      "항목",
      "내용",
      "비고"
     ],
     "rows": [
      [
       "Data rights",
       "열람·편집·복사·인쇄·전달 권한",
       "객체 단위 세분 통제"
      ],
      [
       "Provisioning",
       "사용자·그룹에 권한 부여·회수",
       "IdP·디렉터리 연동"
      ],
      [
       "Access models",
       "역할·속성 기반, 오프라인 허용 여부",
       "만료(expiration) 설정"
      ],
      [
       "Tools",
       "인증서·키 발급과 폐기(revocation)",
       "폐기 시 원격 무효화"
      ],
      [
       "Audit",
       "지속적 사용 추적",
       "누가 언제 열었는지"
      ]
     ]
    }
   },
   {
    "h": "IRM 과제",
    "li": [
     "클라이언트 에이전트·호환 앱 필요(형식 제약)",
     "외부 사용자 신원 연동(federation) 부담",
     "키·인증서 관리 실패 시 정당 사용자도 접근 불가",
     "화면 캡처 등 아날로그 유출은 완전 차단 불가"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "보존·삭제",
  "title": "보존·삭제·아카이브와 데이터 이벤트 감사",
  "ref": "CCSP Exam Outline Domain 2.7·2.8 · OWASP Logging Cheat Sheet",
  "body": [
   {
    "h": "보존 정책 구성요소",
    "tb": {
     "head": [
      "요소",
      "내용",
      "예"
     ],
     "rows": [
      [
       "Retention period",
       "법·업무상 보존 기간",
       "세무·의료 기록"
      ],
      [
       "Data formats",
       "장기 판독 가능 형식",
       "개방 형식"
      ],
      [
       "Data security",
       "보존 중 암호화·접근통제",
       "키 장기 보존"
      ],
      [
       "Retrieval",
       "검색·복원 절차·시간",
       "아카이브 복원 SLA"
      ],
      [
       "Classification 연계",
       "등급별 차등 보존",
       "등급 매핑표"
      ]
     ]
    }
   },
   {
    "h": "삭제·아카이브·Legal hold",
    "li": [
     "삭제 메커니즘 — 논리 삭제는 불충분, 클라우드는 crypto-shredding이 표준적 수단",
     "아카이브 절차 — 형식·암호화·키 보존·복원 테스트·위치(관할) 확인",
     "Legal hold — 승인된 접근만 허용, 자동삭제 정지(deletion prevention)",
     "보존 기간 만료 시 지체 없이 삭제 — 과보존도 리스크(GDPR 저장 제한 원칙)"
    ]
   },
   {
    "h": "데이터 이벤트 속성(감사)",
    "tb": {
     "head": [
      "속성",
      "내용",
      "예"
     ],
     "rows": [
      [
       "Who (Identity)",
       "사용자·서비스 ID",
       "계정·역할"
      ],
      [
       "Where",
       "IP 주소·지리 위치·리소스",
       "src IP·geolocation"
      ],
      [
       "When",
       "동기화된 타임스탬프",
       "NTP·UTC"
      ],
      [
       "What",
       "행위·대상·결과",
       "읽기/삭제·성공/실패"
      ]
     ]
    }
   },
   {
    "h": "로깅·분석·부인방지",
    "li": [
     "중앙 수집 → 변조 방지 저장(WORM·해시 체인) → SIEM 상관분석",
     "시간 동기화 없으면 상관분석·증거능력 저하",
     "Chain of custody — 증거 이전 기록·해시로 무결성 입증",
     "Non-repudiation — 디지털 서명·강한 인증으로 행위 부인 방지"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "AI/ML 데이터 보호",
  "title": "AI/ML 데이터 보호",
  "ref": "CCSP Exam Outline Domain 2.9 · NIST AI RMF 1.0 · MITRE ATLAS · OWASP Top 10 for LLM",
  "body": [
   {
    "h": "데이터셋·모델 프라이버시",
    "tb": {
     "head": [
      "위협",
      "설명",
      "대응"
     ],
     "rows": [
      [
       "Membership inference",
       "특정 레코드 학습 포함 여부 추론",
       "차등 프라이버시(DP)"
      ],
      [
       "Model inversion",
       "출력으로 학습 데이터 특성 복원",
       "출력 정밀도 제한·접근통제"
      ],
      [
       "Training data leakage",
       "LLM이 학습된 PII 재현",
       "학습 전 PII 제거·마스킹"
      ],
      [
       "Re-identification",
       "익명화 데이터 결합 재식별",
       "k-익명성·합성 데이터"
      ]
     ]
    }
   },
   {
    "h": "데이터셋·모델 보안(검증·확인)",
    "tb": {
     "head": [
      "위협",
      "설명",
      "대응"
     ],
     "rows": [
      [
       "Data poisoning",
       "학습 데이터 오염",
       "출처 검증·이상치 탐지"
      ],
      [
       "Model theft/extraction",
       "질의로 모델 복제",
       "API 속도 제한·워터마크"
      ],
      [
       "Model tampering",
       "모델 파일 변조·백도어",
       "모델 해시·서명·레지스트리"
      ],
      [
       "Evasion(adversarial)",
       "입력 교란으로 오분류",
       "적대적 학습·입력 검증"
      ]
     ]
    }
   },
   {
    "h": "Validation vs Verification",
    "li": [
     "Verification — 명세대로 구축됐는가(무결성·출처·버전 확인)",
     "Validation — 목적에 맞게 동작하는가(정확도·편향·견고성 평가)",
     "데이터 계보(lineage)·데이터시트·모델 카드로 추적성 확보",
     "학습 데이터도 분류·암호화·접근통제·보존 정책 대상"
    ]
   },
   {
    "h": "프라이버시 강화 기술(PET)",
    "li": [
     "Differential privacy — 통계적 잡음으로 개인 기여도 은닉",
     "Federated learning — 데이터는 로컬, 모델 업데이트만 공유",
     "Synthetic data — 통계 특성 보존 합성 데이터",
     "Homomorphic encryption·Confidential computing — 처리 중 보호"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "인프라 구성요소",
  "title": "클라우드 인프라 구성요소",
  "ref": "CCSP Exam Outline Domain 3.1",
  "body": [
   {
    "h": "구성요소별 보안 포인트",
    "tb": {
     "head": [
      "구성요소",
      "핵심",
      "주요 위협·통제"
     ],
     "rows": [
      [
       "Physical environment",
       "데이터센터·하드웨어",
       "CSP 책임, SOC 2·ISO 27001로 보증 확인"
      ],
      [
       "Network & communications",
       "SDN·가상 네트워크",
       "세그멘테이션·NSG·암호화 전송"
      ],
      [
       "Compute",
       "CPU·메모리 자원 풀",
       "사이드채널, 자원 고갈(noisy neighbor)"
      ],
      [
       "Virtualization",
       "하이퍼바이저·컨테이너",
       "VM escape·하이퍼바이저 패치"
      ],
      [
       "Storage",
       "블록·객체·파일",
       "설정 오류·잔존 데이터"
      ],
      [
       "Management plane",
       "콘솔·API",
       "특권 계정 탈취 → 전체 장악"
      ]
     ]
    }
   },
   {
    "h": "Hypervisor Type 1 vs Type 2",
    "tb": {
     "head": [
      "구분",
      "Type 1 (Bare-metal)",
      "Type 2 (Hosted)"
     ],
     "rows": [
      [
       "실행 위치",
       "하드웨어 위 직접",
       "호스트 OS 위"
      ],
      [
       "예",
       "ESXi·Hyper-V·Xen",
       "VMware Workstation·VirtualBox"
      ],
      [
       "공격 표면",
       "작음",
       "호스트 OS 포함, 큼"
      ],
      [
       "용도",
       "CSP·엔터프라이즈",
       "개발·데스크톱"
      ]
     ]
    }
   },
   {
    "h": "네트워크 평면",
    "li": [
     "Management plane — 자원 관리(콘솔·API·CLI)",
     "Control plane — 라우팅·정책 결정(SDN 컨트롤러)",
     "Data plane — 실제 트래픽·워크로드 처리",
     "관리 트래픽은 별도 네트워크로 분리(out-of-band)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "데이터센터 설계",
  "title": "안전한 데이터센터 설계",
  "ref": "CCSP Exam Outline Domain 3.2 · Uptime Institute Tier Standard · ASHRAE TC 9.9",
  "body": [
   {
    "h": "설계 영역",
    "tb": {
     "head": [
      "영역",
      "예",
      "핵심 고려"
     ],
     "rows": [
      [
       "Logical design",
       "테넌트 분리·접근통제",
       "VPC·VLAN/VXLAN·RBAC·관리망 분리"
      ],
      [
       "Physical design",
       "입지·Buy or build",
       "재해·전력·통신·관할·비용"
      ],
      [
       "Environmental design",
       "HVAC·다중 통신 경로",
       "온습도·핫/콜드 아일·통신사 다중화"
      ],
      [
       "Design resilience",
       "전력·HVAC·연결 이중화",
       "UPS·발전기·N+1/2N"
      ]
     ]
    }
   },
   {
    "h": "Uptime Institute Tier",
    "tb": {
     "head": [
      "Tier",
      "명칭",
      "특징"
     ],
     "rows": [
      [
       "I",
       "Basic Capacity",
       "이중화 없음, 정비 시 중단"
      ],
      [
       "II",
       "Redundant Capacity Components",
       "구성요소 이중화, 단일 분배 경로"
      ],
      [
       "III",
       "Concurrently Maintainable",
       "계획 정비 무중단, 복수 분배 경로"
      ],
      [
       "IV",
       "Fault Tolerant",
       "단일 장애에도 무중단, 구획화"
      ]
     ]
    }
   },
   {
    "h": "물리 보안·환경",
    "li": [
     "다층 방어 — 외곽 펜스·차량 방호·출입 통제(배지+생체)·맨트랩·CCTV",
     "전력 — 이중 수전·UPS·발전기·연료 비축 계약",
     "냉각 — ASHRAE 권장 흡기 온도 약 18~27°C, 이중화 냉각",
     "화재 — 조기 감지·청정 소화약제(가스계)·구획",
     "통신 — 서로 다른 통신사·분리된 인입 경로(multi-vendor pathway)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "리스크 분석",
  "title": "클라우드 인프라·플랫폼 리스크 분석",
  "ref": "CCSP Exam Outline Domain 3.3 · ISO/IEC 27005 · CSA Top Threats",
  "body": [
   {
    "h": "위험 평가 단계",
    "li": [
     "Identification — 자산·위협·취약점 식별",
     "Analysis — 가능성·영향 분석(정성: 등급 매트릭스 / 정량: SLE·ALE)",
     "Evaluation — 위험 수용 기준(risk appetite)과 비교",
     "Treatment — 처리 전략 선택·통제 구현·잔여 위험 승인"
    ]
   },
   {
    "h": "클라우드 취약점·위협·공격",
    "tb": {
     "head": [
      "범주",
      "예",
      "책임 주체"
     ],
     "rows": [
      [
       "가상화",
       "VM escape·사이드채널",
       "CSP(하이퍼바이저)"
      ],
      [
       "관리 평면",
       "자격증명 탈취·API 남용",
       "공유(고객 IAM 구성)"
      ],
      [
       "설정",
       "공개 스토리지·과다 권한",
       "고객"
      ],
      [
       "가용성",
       "DDoS·자원 고갈",
       "공유"
      ],
      [
       "내부자",
       "CSP 관리자 오남용",
       "CSP(통제)·고객(암호화)"
      ],
      [
       "공급망·관할",
       "제3자 의존·압수수색",
       "공유·계약"
      ]
     ]
    }
   },
   {
    "h": "위험 처리 전략",
    "tb": {
     "head": [
      "전략",
      "의미",
      "클라우드 예"
     ],
     "rows": [
      [
       "Avoid",
       "위험 활동 중단",
       "규제 데이터 퍼블릭 이전 포기"
      ],
      [
       "Mitigate",
       "통제로 감소",
       "암호화·MFA·멀티 AZ"
      ],
      [
       "Transfer/Share",
       "제3자에 이전·분담",
       "사이버 보험·계약 배상"
      ],
      [
       "Accept",
       "잔여 위험 수용",
       "경영진 서면 승인"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "보안 통제",
  "title": "보안 통제 계획·구현",
  "ref": "CCSP Exam Outline Domain 3.4 · NIST SP 800-53",
  "body": [
   {
    "h": "통제 영역",
    "tb": {
     "head": [
      "영역",
      "통제 예",
      "비고"
     ],
     "rows": [
      [
       "Physical & environmental",
       "출입·CCTV·환경 감시",
       "온프레미스·CSP 데이터센터"
      ],
      [
       "System protection",
       "하드닝·패치·안티멀웨어",
       "게스트 OS = 고객"
      ],
      [
       "Storage protection",
       "암호화·접근정책·버전관리",
       "키 분리 보관"
      ],
      [
       "Communication protection",
       "TLS·IPsec VPN·세그멘테이션",
       "전용선 포함"
      ],
      [
       "IAA",
       "페더레이션·MFA·RBAC/ABAC",
       "특권 계정 최우선"
      ],
      [
       "Audit mechanisms",
       "로그 수집·상관분석·패킷 캡처",
       "SIEM·traffic mirroring"
      ]
     ]
    }
   },
   {
    "h": "클라우드 IAA(식별·인증·인가)",
    "li": [
     "Identification — 고유 ID(사람·서비스·워크로드)",
     "Authentication — MFA, 페더레이션(SAML·OIDC)으로 중앙 IdP",
     "Authorization — 최소권한, 역할·속성 기반, 정책 코드화",
     "특권 접근 — JIT·세션 기록·break-glass 계정 관리"
    ]
   },
   {
    "h": "감사 메커니즘",
    "li": [
     "Log collection — 관리 평면 API 로그(예 감사 추적 서비스)·OS·앱 로그 중앙 수집",
     "Correlation — SIEM에서 다중 소스 상관분석, 시간 동기화 전제",
     "Packet capture — traffic mirroring·가상 IDS, flow logs는 메타데이터만",
     "로그 무결성 — 별도 계정·WORM 저장·해시"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "BC/DR",
  "title": "BC/DR 계획",
  "ref": "CCSP Exam Outline Domain 3.5 · ISO 22301 · NIST SP 800-34",
  "body": [
   {
    "h": "BC/DR 전략(클라우드 시나리오)",
    "tb": {
     "head": [
      "시나리오",
      "설명",
      "고려"
     ],
     "rows": [
      [
       "온프레미스 → 클라우드 DR",
       "운영은 자체, DR은 클라우드",
       "네트워크 대역폭·데이터 동기화"
      ],
      [
       "동일 CSP 다른 리전",
       "리전 간 복제",
       "CSP 전체 장애에 취약"
      ],
      [
       "다른 CSP",
       "멀티 클라우드 DR",
       "이식성·복잡도·비용"
      ],
      [
       "사이트 유형",
       "Hot·Warm·Cold·Pilot light",
       "RTO와 비용 반비례"
      ]
     ]
    }
   },
   {
    "h": "비즈니스 요구 지표",
    "tb": {
     "head": [
      "지표",
      "의미",
      "설계 연결"
     ],
     "rows": [
      [
       "RTO",
       "복구 허용 시간",
       "사이트 유형·자동 장애조치"
      ],
      [
       "RPO",
       "허용 데이터 손실 시점",
       "복제·백업 주기"
      ],
      [
       "RSL",
       "재해 시 필요 처리 능력 %",
       "DR 용량 산정"
      ],
      [
       "MTD/MAO",
       "최대 허용 중단",
       "RTO ≤ MTD"
      ]
     ]
    }
   },
   {
    "h": "계획 수립·구현·테스트",
    "li": [
     "수립 — 범위 정의→요구 수집(BIA)→분석→위험 평가→설계→구현→테스트→보고·개정",
     "테스트 유형(침습성 순) — Checklist(read-through) → Tabletop/Walkthrough → Simulation → Parallel → Full interruption",
     "테스트 후 교훈 반영·정기 갱신(조직·아키텍처 변경 시 재검토)",
     "백업은 운영 계정과 분리된 계정·불변 저장(랜섬웨어 대응)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "앱보안 교육·취약점",
  "title": "클라우드 앱보안 교육과 주요 취약점 목록",
  "ref": "CCSP Exam Outline Domain 4.1 · OWASP",
  "body": [
   {
    "h": "교육·인식(Training & Awareness) 핵심",
    "li": [
     "클라우드 개발 기초(Cloud development basics): API 중심 설계, 공유 책임, 멀티테넌시, 탄력성 가정",
     "흔한 함정(Common pitfalls): 온프레미스 앱을 그대로 이전(lift-and-shift)하며 보안 가정 유지, 하드코딩 비밀, 과도한 IAM 권한, 공개 스토리지 버킷",
     "개발자·운영자·아키텍트 대상 역할별 교육 — 보안 챔피언(Security Champion) 제도"
    ]
   },
   {
    "h": "취약점 목록 비교",
    "tb": {
     "head": [
      "목록",
      "대상",
      "대표 항목"
     ],
     "rows": [
      [
       "OWASP Top 10 (2021)",
       "웹 앱 인식 문서",
       "A01 Broken Access Control, A03 Injection, A10 SSRF"
      ],
      [
       "OWASP ASVS",
       "검증 요구사항(L1~L3)",
       "인증·세션·접근통제·암호 등 요구사항 체크리스트"
      ],
      [
       "OWASP API Security Top 10 (2023)",
       "API",
       "API1 BOLA, API2 Broken Authentication, API4 Unrestricted Resource Consumption"
      ],
      [
       "OWASP Top 10 for LLM (2025)",
       "LLM 응용",
       "LLM01 Prompt Injection, LLM06 Excessive Agency"
      ],
      [
       "CWE/SANS Top 25",
       "SW 약점(CWE) 순위",
       "Out-of-bounds Write, XSS, SQL Injection 등"
      ]
     ]
    }
   },
   {
    "h": "시험 포인트",
    "li": [
     "★목록은 '인식', ASVS 는 '검증 기준'★ — 계약·요구사항에 넣는 것은 ASVS 레벨",
     "OWASP Top 10 2025판(Software Supply Chain Failures 신설 등)이 공개됨 — 시험은 2021판 용어도 출제 가능 [확인필요]"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "Secure SDLC",
  "title": "Secure SDLC 단계와 방법론",
  "ref": "CCSP Exam Outline Domain 4.2·4.3 · NIST SP 800-218(SSDF) · ISO/IEC 27034",
  "body": [
   {
    "h": "단계별 보안 활동",
    "tb": {
     "head": [
      "단계",
      "보안 활동",
      "산출물"
     ],
     "rows": [
      [
       "요구사항(Business requirements)",
       "보안·개인정보·규제 요구 도출, 오용 사례",
       "보안 요구사항(ASVS 레벨)"
      ],
      [
       "설계(Design)",
       "위협 모델링, 보안 아키텍처 검토",
       "위협 모델, 설계 검토 결과"
      ],
      [
       "코딩(Code)",
       "시큐어 코딩 표준, 코드 리뷰, SAST·SCA",
       "검토된 코드, SBOM"
      ],
      [
       "테스트(Test)",
       "DAST·IAST·침투 테스트·오용 사례 테스트",
       "취약점 보고·수정"
      ],
      [
       "배포·유지(Maintain)",
       "패치, 형상관리, 모니터링, 폐기",
       "릴리스 기록, 변경 이력"
      ]
     ]
    }
   },
   {
    "h": "방법론",
    "li": [
     "폭포수(Waterfall): 단계 게이트에서 보안 검토 — 변경 비용 큼",
     "애자일(Agile)/DevSecOps: 스프린트마다 보안 스토리, CI/CD 파이프라인에 자동 보안 테스트(Shift-left)",
     "NIST SSDF(SP 800-218): PO(조직 준비)·PS(SW 보호)·PW(잘 보호된 SW 생산)·RV(취약점 대응) 4개 그룹",
     "ISO/IEC 27034: 애플리케이션 보안 — ONF(Organization Normative Framework)·ANF(Application Normative Framework)"
    ]
   },
   {
    "h": "시큐어 코딩·형상관리",
    "li": [
     "시큐어 코딩 지침: OWASP ASVS, SAFECode(Software Assurance Forum for Excellence in Code) 모범사례",
     "형상관리(Software CM)·버전관리: 코드·IaC·설정의 버전 통제, 코드 서명, 브랜치 보호, 변경 추적",
     "흔한 취약점 회피: 입력 검증, 출력 인코딩, 파라미터화 쿼리, 최소 권한, 안전한 기본값"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "위협 모델링",
  "title": "클라우드 특유 리스크와 위협 모델링 기법",
  "ref": "CCSP Exam Outline Domain 4.3 · Microsoft STRIDE · PASTA",
  "body": [
   {
    "h": "클라우드 특유 리스크(Cloud-specific risks)",
    "li": [
     "공유 기술 이슈(Shared technology issues): 하이퍼바이저·멀티테넌시 격리 실패",
     "CSP 내부자 위협(CSP insider threats)",
     "가시성·통제 부족(Lack of visibility and control)",
     "법률·관할권 이슈(Legal and jurisdiction issues): 데이터 저장 위치, 증거 접근"
    ]
   },
   {
    "h": "STRIDE ↔ 보안 속성",
    "tb": {
     "head": [
      "위협",
      "위반 속성",
      "대표 통제"
     ],
     "rows": [
      [
       "Spoofing",
       "인증",
       "MFA, 강한 인증"
      ],
      [
       "Tampering",
       "무결성",
       "해시·전자서명, 접근통제"
      ],
      [
       "Repudiation",
       "부인방지",
       "감사 로그, 전자서명"
      ],
      [
       "Information disclosure",
       "기밀성",
       "암호화, 접근통제"
      ],
      [
       "Denial of service",
       "가용성",
       "rate limiting, 자동 확장, DDoS 방어"
      ],
      [
       "Elevation of privilege",
       "인가",
       "최소 권한, 입력 검증"
      ]
     ]
    }
   },
   {
    "h": "기법 비교",
    "tb": {
     "head": [
      "기법",
      "성격",
      "특징"
     ],
     "rows": [
      [
       "STRIDE",
       "위협 분류",
       "데이터 흐름도(DFD) 요소별 위협 식별"
      ],
      [
       "DREAD",
       "위험 점수화",
       "Damage·Reproducibility·Exploitability·Affected users·Discoverability"
      ],
      [
       "PASTA",
       "리스크 중심 7단계",
       "비즈니스 목표 → 기술 범위 → 분해 → 위협 → 취약점 → 공격 모델링 → 리스크·영향"
      ],
      [
       "ATASM",
       "아키텍처 중심",
       "Architecture·Threats·Attack Surfaces·Mitigations"
      ]
     ]
    }
   },
   {
    "h": "시험 포인트",
    "li": [
     "위협 모델링은 ★설계 단계★에서 가장 비용 효율적",
     "아웃라인 표기는 DREAD 의 D 를 'Disaster' 로 적었으나 일반 문헌은 Damage(potential)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "보안 테스트·보증",
  "title": "클라우드 소프트웨어 보증·검증 테스트",
  "ref": "CCSP Exam Outline Domain 4.4·4.5 · OWASP",
  "body": [
   {
    "h": "테스트 기법 비교",
    "tb": {
     "head": [
      "기법",
      "관점·시점",
      "강점 / 약점"
     ],
     "rows": [
      [
       "SAST",
       "화이트박스, 코딩·빌드",
       "코드 위치 특정 / 오탐 많음, 런타임 취약점 미탐"
      ],
      [
       "DAST",
       "블랙박스, 테스트·스테이징",
       "런타임·설정 결함 / 코드 위치 모름, 커버리지 한계"
      ],
      [
       "IAST",
       "그레이박스, 테스트 실행 중 에이전트",
       "오탐 적음 / 언어·플랫폼 의존"
      ],
      [
       "SCA",
       "구성요소·의존성",
       "CVE·라이선스 식별, SBOM / 자체 코드 결함 미탐"
      ],
      [
       "침투 테스트",
       "공격자 관점 수동+자동",
       "실제 악용 가능성 확인 / CSP 정책 준수·사전 승인 필요"
      ]
     ]
    }
   },
   {
    "h": "기능·비기능 테스트와 QA",
    "li": [
     "기능 테스트: 요구 기능의 정상 동작(단위·통합·회귀·인수)",
     "비기능 테스트: 성능·부하·확장성·가용성·보안·사용성",
     "CI/CD 파이프라인: 커밋마다 자동 빌드·테스트·보안 스캔, 품질 게이트(Quality Gate)로 배포 차단",
     "QA(Quality Assurance): 프로세스 관점에서 결함 예방, 테스트 결과·표준 준수 확인"
    ]
   },
   {
    "h": "오용 사례(Abuse/Misuse case) 테스트",
    "li": [
     "공격자가 기능을 '어떻게 악용할지'를 시나리오로 작성해 테스트 — 정상 사용 사례(use case)의 반대",
     "예: 비밀번호 재설정 기능으로 계정 열거, 쿠폰 API 반복 호출"
    ]
   },
   {
    "h": "검증된 소프트웨어(4.5)",
    "li": [
     "API 보안: 인증(OAuth·mTLS), 입력 검증, rate limiting, API 인벤토리 관리",
     "공급망 관리: 공급사 평가, 무결성(해시·코드 서명), 진본성, 라이선스",
     "서드파티 SW 관리·검증된 오픈소스(Validated open-source): 출처 확인, 유지보수 활성도, SBOM, 취약점 모니터링"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "IAM 설계",
  "title": "클라우드 앱 아키텍처 보조 컴포넌트와 IAM 설계",
  "ref": "CCSP Exam Outline Domain 4.6·4.7 · OASIS SAML · IETF OAuth 2.0 · OpenID Foundation",
  "body": [
   {
    "h": "보조 보안 컴포넌트(4.6)",
    "tb": {
     "head": [
      "컴포넌트",
      "역할",
      "비고"
     ],
     "rows": [
      [
       "WAF",
       "L7 HTTP 공격 차단",
       "가상 패치, OWASP CRS"
      ],
      [
       "DAM",
       "DB 쿼리 실시간 모니터링·경보",
       "DBA 권한 남용 탐지, 에이전트/네트워크형"
      ],
      [
       "XML 방화벽",
       "XML/SOAP 스키마 검증, XXE 차단",
       "웹서비스 앞단 프록시"
      ],
      [
       "API 게이트웨이",
       "인증·rate limiting·라우팅",
       "마이크로서비스 단일 진입점"
      ],
      [
       "로드밸런서",
       "부하 분산, TLS 종료, 헬스체크",
       "가용성·DDoS 완화 일부"
      ]
     ]
    }
   },
   {
    "h": "암호·샌드박스·오케스트레이션",
    "li": [
     "암호: 전송 중 TLS, 저장 시 암호화, 키는 KMS/HSM, 앱 레벨 필드 암호화·토큰화",
     "샌드박스(Sandboxing): 신뢰되지 않은 코드를 격리 환경에서 실행",
     "애플리케이션 가상화·오케스트레이션: 마이크로서비스, 컨테이너(Docker), Kubernetes — 이미지 스캔, 최소 권한 Pod, 네트워크 정책, 비밀 관리"
    ]
   },
   {
    "h": "연합 인증 프로토콜(4.7)",
    "tb": {
     "head": [
      "프로토콜",
      "목적",
      "토큰·형식"
     ],
     "rows": [
      [
       "SAML 2.0",
       "인증·연합 SSO(엔터프라이즈 웹)",
       "XML 어서션"
      ],
      [
       "OAuth 2.0",
       "인가 위임(API 접근)",
       "Access Token(형식 비규정, JWT 흔함)"
      ],
      [
       "OpenID Connect",
       "OAuth 위 인증 계층",
       "ID Token(JWT)"
      ],
      [
       "WS-Federation",
       "MS 계열 연합",
       "보안 토큰"
      ]
     ]
    }
   },
   {
    "h": "IAM 구성요소",
    "li": [
     "IdP(Identity Provider): 신원 인증·어서션 발급 / SP(RP): 어서션을 신뢰해 서비스 제공",
     "SSO: 1회 인증으로 여러 서비스 접근 — 편의 증가, IdP 침해 시 영향 확대 → MFA 필수",
     "MFA: 지식(Something you know)·소유(have)·생체(are) 중 서로 다른 2개 이상 요소",
     "CASB: 가시성·컴플라이언스·데이터 보안·위협 방어 / API·포워드 프록시·리버스 프록시",
     "비밀·키·인증서 관리: 볼트, 자동 순환, 인증서 수명주기(발급·갱신·폐기) 자동화"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "인프라 구축·하드웨어",
  "title": "물리·논리 인프라 구축: 하드웨어·가상 하드웨어 보안",
  "ref": "CCSP Exam Outline Domain 5.1 · FIPS 140-3 · TCG TPM 2.0",
  "body": [
   {
    "h": "하드웨어 보안 모듈 비교",
    "tb": {
     "head": [
      "구분",
      "HSM",
      "TPM"
     ],
     "rows": [
      [
       "위치",
       "네트워크·PCIe 전용 장치, Cloud HSM",
       "메인보드 칩(또는 vTPM)"
      ],
      [
       "주 용도",
       "키 생성·저장·서명·암호 연산",
       "측정 부팅, 원격 증명, 키 봉인"
      ],
      [
       "검증",
       "FIPS 140-2/140-3 레벨",
       "TCG 규격(TPM 2.0)"
      ],
      [
       "클라우드 활용",
       "BYOK·고객 전용 키 보호",
       "호스트·VM 무결성 증명"
      ]
     ]
    }
   },
   {
    "h": "Secure by default · 관리 평면",
    "li": [
     "Secure by default: 불필요 서비스 비활성, 기본 계정·비밀번호 제거, 최소 권한 기본값",
     "관리 평면(Management plane) 도구 설치·구성: 전용 관리망 분리, MFA, RBAC, 모든 관리 API 호출 로깅",
     "게스트 OS 가상화 도구(예: VMware Tools) 설치: 신뢰된 출처, 최신 패치, 불필요 기능(공유 폴더·클립보드) 비활성"
    ]
   },
   {
    "h": "가상 하드웨어 보안 구성",
    "tb": {
     "head": [
      "영역",
      "보안 구성 요구"
     ],
     "rows": [
      [
       "네트워크",
       "가상 스위치 분리, 무차별 모드(promiscuous) 차단, VLAN·마이크로세그먼트"
      ],
      [
       "스토리지",
       "테넌트별 LUN·볼륨 격리, 저장 암호화, 안전한 삭제(crypto-shredding)"
      ],
      [
       "메모리",
       "메모리 오버커밋·공유(페이지 중복 제거) 시 사이드채널 고려"
      ],
      [
       "CPU",
       "사이드채널(Spectre 계열) 패치, 전용 호스트 옵션"
      ],
      [
       "하이퍼바이저",
       "Type 1 우선, 최소 설치, 패치, 관리 인터페이스 분리"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "인프라 운영·유지",
  "title": "인프라 운영·유지: 접근·네트워크·하드닝·가용성",
  "ref": "CCSP Exam Outline Domain 5.2",
  "body": [
   {
    "h": "원격 접근 통제",
    "li": [
     "RDP·SSH 는 인터넷 직접 노출 금지 → 점프박스/배스천, VPN, 세션 기록",
     "SSH: 키 기반 인증, 루트 로그인 금지 / 콘솔 기반 접근: 관리 콘솔 MFA·RBAC",
     "가상 클라이언트(VDI)·SSO 로 중앙 통제, Just-in-Time 접근"
    ]
   },
   {
    "h": "네트워크 구성·통제",
    "tb": {
     "head": [
      "항목",
      "보안 목적"
     ],
     "rows": [
      [
       "VLAN",
       "논리적 브로드캐스트 도메인 분리"
      ],
      [
       "TLS",
       "전송 구간 기밀성·무결성"
      ],
      [
       "DHCP",
       "주소 자동 할당 — 위조 DHCP 서버(rogue) 방지, 스누핑"
      ],
      [
       "DNSSEC",
       "DNS 응답 출처·무결성(암호화 아님)"
      ],
      [
       "VPN",
       "원격·사이트 간 암호화 터널"
      ],
      [
       "IDS/IPS·방화벽·NSG",
       "탐지/차단·포트 통제"
      ],
      [
       "허니팟·배스천·세그멘테이션",
       "유인 탐지·관리 접근 집중·피해 확산 제한"
      ]
     ]
    }
   },
   {
    "h": "하드닝·패치·가용성",
    "li": [
     "OS 하드닝: CIS Benchmark 등 베이스라인 적용 → 모니터링(드리프트 탐지) → 교정(remediation)",
     "패치 관리: 자산 식별 → 평가·테스트 → 승인(변경관리) → 배포 → 검증, 골든 이미지 갱신",
     "클러스터 가용성: DRS, 동적 최적화, 스토리지 클러스터, 유지보수 모드, HA(장애 호스트 VM 재시작)",
     "모니터링: 성능·용량(네트워크·컴퓨트·스토리지·응답시간), 하드웨어(디스크·CPU·팬 속도·온도)",
     "백업·복원: 호스트·게스트 OS 구성 백업, 복원 테스트 / 관리 평면: 스케줄링·오케스트레이션·유지보수"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "운영 통제·ITSM",
  "title": "운영 통제·표준과 ITSM 프로세스",
  "ref": "CCSP Exam Outline Domain 5.3 · ITIL 4 · ISO/IEC 20000-1",
  "body": [
   {
    "h": "관련 프레임워크",
    "tb": {
     "head": [
      "프레임워크",
      "성격",
      "핵심"
     ],
     "rows": [
      [
       "ITIL",
       "IT 서비스 관리 모범사례",
       "관행(practice) 기반, 개인 자격"
      ],
      [
       "ISO/IEC 20000-1",
       "SMS 인증 표준",
       "조직 인증"
      ],
      [
       "COBIT 2019",
       "IT 거버넌스·관리",
       "거버넌스 목표(EDM)·관리 목표"
      ],
      [
       "COSO",
       "내부통제 프레임워크",
       "통제환경·위험평가·통제활동·정보와 의사소통·모니터링"
      ],
      [
       "CIS Controls",
       "우선순위 보안 통제",
       "v8 기준 18개 통제"
      ],
      [
       "NIST·ISO 27001·HIPAA",
       "보안 통제·인증·규제",
       "SP 800-53, ISMS, 의료정보"
      ]
     ]
    }
   },
   {
    "h": "ITSM 프로세스 요점",
    "tb": {
     "head": [
      "프로세스",
      "목적",
      "키워드"
     ],
     "rows": [
      [
       "변경(Change)",
       "변경 리스크 통제",
       "CAB, 표준·정상·긴급"
      ],
      [
       "인시던트(Incident)",
       "서비스 신속 복구",
       "우선순위=영향×긴급도"
      ],
      [
       "문제(Problem)",
       "근본 원인 제거",
       "Known Error, 워크어라운드"
      ],
      [
       "릴리스(Release)",
       "신규·변경 서비스 제공 가능화",
       "릴리스 패키지"
      ],
      [
       "배포(Deployment)",
       "운영 환경으로 이동",
       "블루/그린, 카나리"
      ],
      [
       "형상(Configuration)",
       "CI 정보·관계 관리",
       "CMDB, CI"
      ],
      [
       "서비스 수준(SLM)",
       "목표 합의·측정",
       "SLA·OLA·UC"
      ],
      [
       "가용성·용량·연속성",
       "가용성 목표·수요 대응·재해 대비",
       "MTBF·MTRS, 용량 계획, BIA·RTO·RPO"
      ],
      [
       "정보보안·지속적 개선",
       "기밀성·무결성·가용성 / 개선",
       "ISMS, CSI(PDCA)"
      ]
     ]
    }
   },
   {
    "h": "시험 포인트",
    "li": [
     "변경 전 CMDB 로 영향 분석 → 변경관리 승인 → 릴리스·배포",
     "반복 인시던트 = 문제 관리로 이관",
     "CSP 와 고객의 변경관리 연계(유지보수 통지) 필요"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "디지털 포렌식",
  "title": "디지털 포렌식 지원: 수집·증거 관리·보존",
  "ref": "CCSP Exam Outline Domain 5.4 · ISO/IEC 27037/27041/27042/27043 · RFC 3227",
  "body": [
   {
    "h": "포렌식 표준군",
    "tb": {
     "head": [
      "표준",
      "범위"
     ],
     "rows": [
      [
       "ISO/IEC 27037",
       "디지털 증거 식별·수집·획득·보존"
      ],
      [
       "ISO/IEC 27041",
       "조사 방법의 적합성·충분성 보증"
      ],
      [
       "ISO/IEC 27042",
       "디지털 증거 분석·해석"
      ],
      [
       "ISO/IEC 27043",
       "사고 조사 원칙·프로세스"
      ],
      [
       "ISO/IEC 27050",
       "eDiscovery(전자증거개시)"
      ]
     ]
    }
   },
   {
    "h": "수집 방법론",
    "li": [
     "휘발성 순서(Order of volatility, RFC 3227): 레지스터·캐시 → 메모리 → 네트워크·프로세스 상태 → 디스크 → 원격 로그·백업",
     "비트 단위 이미징 + 해시(SHA-256)로 원본·사본 일치 증명, 쓰기 방지 장치",
     "클라우드: 물리 접근 불가 → 스냅샷·API 로그·CSP 협조, 멀티테넌시로 타 고객 데이터 혼재 주의"
    ]
   },
   {
    "h": "증거 관리",
    "li": [
     "Chain of custody: 수집자·일시·장소·이동·보관 기록",
     "증거 능력 요건: 관련성(relevance)·신뢰성(reliability)·충분성(sufficiency) [ISO/IEC 27037]",
     "보존(preservation): 접근 통제된 보관, 무결성 해시 재검증, 법적 보존(legal hold)"
    ]
   },
   {
    "h": "클라우드 포렌식 과제",
    "li": [
     "데이터 위치·관할권 분산",
     "CSP 로그 보존 기간·접근권 제한",
     "서비스 모델별 고객 수집 범위(IaaS 넓음 → SaaS 좁음)",
     "계약에 포렌식 지원·증거 제공 조항 필요"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "보안 운영(SOC·IR)",
  "title": "보안 운영 관리와 이해관계자 커뮤니케이션",
  "ref": "CCSP Exam Outline Domain 5.5·5.6 · NIST SP 800-61",
  "body": [
   {
    "h": "SOC 기능",
    "li": [
     "지능형 보안 통제 모니터링: 방화벽·IDS/IPS·허니팟·NSG 이벤트, AI·UEBA 기반 이상 탐지",
     "로그 수집·분석: SIEM, 로그 관리(보존·무결성), 위협 인텔리전스(STIX/TAXII 피드)",
     "SOAR 플레이북으로 반복 대응 자동화, 티어(L1 분류 → L2 분석 → L3 헌팅·포렌식)"
    ]
   },
   {
    "h": "IR 생명주기(SP 800-61 Rev.2)",
    "tb": {
     "head": [
      "단계",
      "핵심 활동"
     ],
     "rows": [
      [
       "준비(Preparation)",
       "IR 계획·팀·도구, CSP 연락체계·계약 조항"
      ],
      [
       "탐지·분석",
       "경보 분류, 범위·영향 판단, 증거 보존"
      ],
      [
       "봉쇄·근절·복구",
       "격리(스냅샷 후), 원인 제거, 정상화"
      ],
      [
       "사후 활동",
       "교훈(lessons learned), 통제 개선"
      ]
     ]
    }
   },
   {
    "h": "취약점 평가 vs 침투 테스트",
    "tb": {
     "head": [
      "구분",
      "취약점 평가",
      "침투 테스트"
     ],
     "rows": [
      [
       "목적",
       "취약점 식별·목록화",
       "실제 악용·영향 검증"
      ],
      [
       "방식",
       "자동 스캐너 위주",
       "수동+자동, 공격 시나리오"
      ],
      [
       "클라우드 주의",
       "CSP 허용 범위",
       "CSP 정책 준수·사전 통지/승인"
      ]
     ]
    }
   },
   {
    "h": "커뮤니케이션(5.5)",
    "li": [
     "대상: 공급업체(Vendors)·고객(Customers)·파트너(Partners)·규제기관(Regulators)·기타 이해관계자",
     "사전 커뮤니케이션 계획: 연락처, 에스컬레이션, 승인된 대변인, 법무 검토",
     "규제기관 통지: 법정 기한 준수(GDPR 감독기관 72시간 등), 고객 통지: 투명성·영향·조치 안내",
     "CSP↔고객: 유지보수·장애 공지, 상태 페이지, SLA 위반 보고"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-1",
  "t": "법적 요구·관할권",
  "title": "클라우드 법적 요구사항과 고유 리스크",
  "ref": "CCSP Exam Outline Domain 6.1 · CLOUD Act · GDPR",
  "body": [
   {
    "h": "충돌하는 국제 법률",
    "li": [
     "CLOUD Act(미국) vs GDPR(EU) — 역외 데이터 제출 요구와 이전 제한 충돌",
     "데이터 현지화(localization)·주권(sovereignty) 법: 특정 국가 내 저장 의무",
     "대응: 데이터 저장 리전 선택, 고객 관리 키(HYOK/BYOK), 계약상 법 집행 요청 통지 조항"
    ]
   },
   {
    "h": "클라우드 특유 법적 리스크 평가",
    "tb": {
     "head": [
      "리스크",
      "내용",
      "대응"
     ],
     "rows": [
      [
       "관할권",
       "데이터·CSP·고객 소재지가 다름",
       "리전 고정, 준거법·관할 법원 계약"
      ],
      [
       "증거 접근",
       "물리 접근 불가, 멀티테넌시",
       "로그 제공·포렌식 지원 조항"
      ],
      [
       "타 테넌트 압수",
       "공동 자원 압수 시 서비스 중단",
       "격리·암호화, BCP"
      ],
      [
       "하위 처리자",
       "제3국 하위 위탁",
       "하위 처리자 목록·승인권"
      ]
     ]
    }
   },
   {
    "h": "법·규제 프레임워크",
    "li": [
     "OECD 프라이버시 가이드라인(1980, 2013 개정), APEC Privacy Framework, EU GDPR",
     "산업 규제: HIPAA/HITECH(의료), GLBA(금융), SOX(재무보고), NERC CIP(전력), PCI DSS(카드, 계약상)",
     "형사·민사 구분: 민사 소송은 eDiscovery, 형사 수사는 영장·국제 사법공조(MLAT)"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-2",
  "t": "eDiscovery·포렌식 요건",
  "title": "eDiscovery 와 포렌식 요구사항",
  "ref": "CCSP Exam Outline Domain 6.1 · ISO/IEC 27050 · ISO/IEC 27037/27041/27042/27043 · CSA Guidance",
  "body": [
   {
    "h": "eDiscovery 흐름(EDRM 기반)",
    "li": [
     "정보 거버넌스 → 식별 → 보존(legal hold) → 수집 → 처리 → 검토 → 분석 → 제출(production) → 제시",
     "ISO/IEC 27050 시리즈: 전자증거개시 개요·거버넌스·실행 지침",
     "CSA Guidance: 클라우드 eDiscovery 시 CSP 협력, 데이터 소재 파악, 보존 능력 계약"
    ]
   },
   {
    "h": "클라우드 eDiscovery 과제",
    "tb": {
     "head": [
      "과제",
      "대응"
     ],
     "rows": [
      [
       "데이터 위치 불명확",
       "데이터 맵·리전 정책"
      ],
      [
       "멀티테넌시",
       "타 고객 데이터 배제 범위 지정"
      ],
      [
       "보존 기간 상이",
       "CSP 보존 정책 확인, legal hold 기능"
      ],
      [
       "SaaS 수집 제한",
       "벤더 내보내기 API·eDiscovery 기능 활용"
      ]
     ]
    }
   },
   {
    "h": "포렌식 요구 표준",
    "tb": {
     "head": [
      "표준",
      "내용"
     ],
     "rows": [
      [
       "ISO/IEC 27037:2012",
       "증거 식별·수집·획득·보존"
      ],
      [
       "ISO/IEC 27041:2015",
       "조사 방법 적합성 보증"
      ],
      [
       "ISO/IEC 27042:2015",
       "분석·해석"
      ],
      [
       "ISO/IEC 27043:2015",
       "조사 원칙·프로세스"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-3",
  "t": "개인정보 보호",
  "title": "개인정보 보호 요구사항",
  "ref": "CCSP Exam Outline Domain 6.2 · GDPR · ISO/IEC 27018/27701 · AICPA/CICA GAPP",
  "body": [
   {
    "h": "국가별 법률",
    "tb": {
     "head": [
      "법률",
      "국가",
      "대상"
     ],
     "rows": [
      [
       "GDPR",
       "EU",
       "EU 정보주체 개인정보(역외 적용)"
      ],
      [
       "HIPAA / HITECH",
       "미국",
       "PHI — 의료기관·비즈니스 어소시에이트(BAA)"
      ],
      [
       "FERPA",
       "미국",
       "교육 기록"
      ],
      [
       "PIPEDA",
       "캐나다",
       "민간 상업 활동 개인정보"
      ],
      [
       "DPDP Act 2023",
       "인도",
       "디지털 개인정보"
      ]
     ]
    }
   },
   {
    "h": "GDPR 핵심",
    "li": [
     "처리 원칙: 적법·공정·투명, 목적 제한, 최소화, 정확성, 보관 기간 제한, 무결성·기밀성, 책임성",
     "역외 이전: 적정성 결정, 표준계약조항(SCC), 구속력 있는 기업규칙(BCR)",
     "침해 통지: 감독기관 72시간 이내(가능한 경우), 고위험 시 정보주체 지체 없이",
     "DPIA(Art.35) 고위험 처리 의무, DPO 지정 요건"
    ]
   },
   {
    "h": "표준 개인정보 요구사항",
    "tb": {
     "head": [
      "표준",
      "핵심"
     ],
     "rows": [
      [
       "ISO/IEC 27018",
       "퍼블릭 클라우드 PII 처리자 실천 지침"
      ],
      [
       "ISO/IEC 27701",
       "PIMS — 27001/27002 확장, controller·processor 통제"
      ],
      [
       "GAPP",
       "AICPA/CICA 10원칙: 관리·고지·선택과 동의·수집·이용/보유/파기·접근·제3자 제공·보안·품질·모니터링과 집행"
      ]
     ]
    }
   },
   {
    "h": "관할권 차이",
    "li": [
     "EU: 기본권 기반 포괄법(omnibus)",
     "미국: 산업별 개별법(sectoral) + 주법(예: CCPA/CPRA)",
     "PIA/DPIA 로 관할별 요구를 설계 단계에 반영"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-4",
  "t": "감사 프로세스",
  "title": "클라우드 감사 프로세스와 방법론",
  "ref": "CCSP Exam Outline Domain 6.3 · AICPA SSAE 18 · IAASB ISAE 3402 · CSA STAR",
  "body": [
   {
    "h": "감사 보고서 유형",
    "tb": {
     "head": [
      "보고서",
      "대상·용도",
      "배포"
     ],
     "rows": [
      [
       "SOC 1 (SSAE 18) / ISAE 3402",
       "재무보고 내부통제(ICFR)",
       "이용자 감사인·고객(제한)"
      ],
      [
       "SOC 2",
       "TSC: 보안·가용성·처리 무결성·기밀성·개인정보",
       "제한(NDA)"
      ],
      [
       "SOC 3",
       "SOC 2 범위 요약",
       "일반 공개"
      ],
      [
       "Type I / Type II",
       "시점 설계 / 기간 운영 효과성",
       "-"
      ],
      [
       "CSA STAR",
       "CCM 기반 L1 자가·L2 제3자",
       "레지스트리 공개"
      ]
     ]
    }
   },
   {
    "h": "클라우드 감사 적응",
    "li": [
     "가상화·클라우드 보증 과제: 하이퍼바이저·공유 자원 직접 검증 불가, 동적 자원, 로그 접근 제한",
     "감사 범위 기술서(scope statement) 제한: 보고서가 다루는 시스템·기간·제외 사항(carve-out·하위 서비스 조직) 확인 필수",
     "내부 감사(독립적 보증·자문) vs 외부 감사(독립 제3자 의견)",
     "갭 분석: 통제 분석, 베이스라인 대비, 리스크·통제 자가평가(RCSA)"
    ]
   },
   {
    "h": "감사 계획·ISMS·이해관계자",
    "li": [
     "감사 계획: 목적·범위 정의 → 기준 선정 → 증거 수집 계획 → 일정·자원 → 보고",
     "내부 ISMS(ISO 27001)·내부 정보보안 통제 체계, 정책(조직·기능·클라우드 정책) 정합",
     "관련 이해관계자 식별·참여: 경영진, 법무, 컴플라이언스, CSP 담당",
     "고규제 산업: NERC CIP, HIPAA, HITECH, PCI DSS / 분산 IT 모델: 다국 관할 교차"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-5",
  "t": "아웃소싱·계약",
  "title": "전사 리스크 관리와 클라우드 계약 설계",
  "ref": "CCSP Exam Outline Domain 6.4·6.5 · ISO 31000 · ISO/IEC 27036",
  "body": [
   {
    "h": "ERM 핵심(6.4)",
    "li": [
     "CSP 리스크 관리 프로그램 평가: 통제·방법론·정책·리스크 프로파일·리스크 수용 수준(appetite)",
     "규제 투명성: 침해 통지, SOX(재무보고 통제), GDPR",
     "리스크 처리: 회피·완화·이전·공유·수용",
     "프레임워크: ISO 31000, ISO/IEC 27005, NIST SP 800-37 RMF, COSO ERM, ENISA 클라우드 리스크 평가",
     "지표: KRI(핵심 위험 지표)·KPI, 리스크 환경 평가(서비스·벤더·인프라·비즈니스)"
    ]
   },
   {
    "h": "데이터 역할",
    "tb": {
     "head": [
      "역할",
      "책임"
     ],
     "rows": [
      [
       "Owner/Controller",
       "목적·수단 결정, 분류, 최종 책임"
      ],
      [
       "Processor",
       "관리자 지시에 따른 처리(CSP)"
      ],
      [
       "Custodian",
       "기술적 보관·백업·접근 통제 운영"
      ],
      [
       "Steward",
       "품질·메타데이터·업무 규칙 관리"
      ]
     ]
    }
   },
   {
    "h": "계약 설계(6.5)",
    "tb": {
     "head": [
      "영역",
      "요소"
     ],
     "rows": [
      [
       "비즈니스 요구",
       "SLA, MSA, SOW"
      ],
      [
       "벤더 관리",
       "벤더 평가, 락인 리스크, 생존 가능성(viability), 에스크로"
      ],
      [
       "계약 관리",
       "감사권, 지표·정의, 해지, 소송, 보증, 컴플라이언스, 데이터 접근, 사이버 보험, 데이터 소유권, 보안 요구"
      ],
      [
       "공급망",
       "ISO/IEC 27036"
      ]
     ]
    }
   },
   {
    "h": "출구 전략 체크",
    "li": [
     "데이터 반환 형식·기한",
     "삭제 증명(crypto-shredding 등)",
     "전환 지원 기간",
     "이식 가능한 포맷·API"
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
  "t": "클라우드 개념",
  "d": 1,
  "q": "NIST SP 800-145가 정의한 클라우드의 필수 특성(essential characteristics)에 해당하지 않는 것은?",
  "c": [
   "Multi-tenancy",
   "Measured service",
   "Resource pooling",
   "Broad network access"
  ],
  "a": 0,
  "e": "NIST 5특성은 온디맨드 셀프서비스·광대역 접근·자원 풀링·신속한 탄력성·계량 서비스. Multi-tenancy는 ISO/IEC 17788이 추가한 특성."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 1,
  "q": "Which cloud characteristic enables billing based on actual consumption and provides transparency to both provider and customer?",
  "c": [
   "Rapid elasticity",
   "On-demand self-service",
   "Measured service",
   "Resource pooling"
  ],
  "a": 2,
  "e": "Measured service meters resource usage (storage, bandwidth, active accounts) so it can be monitored, controlled, reported and billed."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "고객이 자원의 정확한 물리적 위치를 통제하거나 알 수 없는 '위치 독립성'과 가장 밀접한 특성은?",
  "c": [
   "On-demand self-service",
   "Resource pooling",
   "Broad network access",
   "Measured service"
  ],
  "a": 1,
  "e": "자원 풀링은 다중 테넌트에 자원을 동적으로 배정하며 위치 독립성을 수반 — 데이터 주권·관할 리스크의 출발점."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "ISO/IEC 17789 참조 아키텍처에서 cloud auditor와 cloud service broker가 속하는 역할은?",
  "c": [
   "Cloud Service Provider(CSP)",
   "Cloud Service Customer(CSC)",
   "Regulator",
   "Cloud Service Partner(CSN)"
  ],
  "a": 3,
  "e": "ISO/IEC 17789는 CSC·CSP·CSN 3대 역할을 두고 auditor·broker·developer를 CSN의 하위역할로 정의."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "NIST SP 500-292에서 여러 클라우드 서비스를 결합해 새로운 통합 서비스를 제공하는 브로커 서비스 유형은?",
  "c": [
   "Service Arbitrage",
   "Service Intermediation",
   "Service Federation",
   "Service Aggregation"
  ],
  "a": 3,
  "e": "Intermediation은 기존 서비스 기능 향상, Aggregation은 다수 서비스 통합, Arbitrage는 고정되지 않은 서비스를 유동적으로 선택."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 1,
  "q": "In the NIST cloud reference architecture, which actor provides connectivity and transport of cloud services between providers and consumers?",
  "c": [
   "Cloud broker",
   "Cloud carrier",
   "Cloud service partner",
   "Cloud auditor"
  ],
  "a": 1,
  "e": "The cloud carrier is the intermediary providing network connectivity and transport. 'Cloud service partner' is an ISO/IEC 17789 role, not a NIST actor."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 3,
  "q": "규제 산업 기업이 SaaS CRM 도입 후 고객 PII 유출 사고가 발생했다. 원인은 고객사 관리자가 공유 링크를 '전체 공개'로 설정한 것이다. 이 사고에 대한 최종 책임(accountability)은 누구에게 있는가?",
  "c": [
   "고객사(CSC) — 데이터 소유자로서 최종 책임",
   "CSP와 고객 공동 50:50",
   "SaaS 제공자(CSP) — 애플리케이션 운영 주체",
   "클라우드 브로커 — 계약 중개 주체"
  ],
  "a": 0,
  "e": "SaaS에서도 데이터와 접근 구성은 고객 책임이며 accountability는 위임 불가. 설정 오류 역시 고객 책임 영역."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 1,
  "q": "IaaS 모델에서 고객의 보안 책임에 속하는 것은?",
  "c": [
   "하이퍼바이저 패치",
   "스토리지 하드웨어 교체",
   "게스트 OS 패치와 방화벽 규칙 구성",
   "데이터센터 물리 출입 통제"
  ],
  "a": 2,
  "e": "IaaS는 하이퍼바이저 이하를 CSP가, 게스트 OS부터 위를 고객이 관리."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 1,
  "q": "ISO/IEC 17788의 클라우드 기능 유형(capability type) 3가지로 옳은 것은?",
  "c": [
   "SaaS, PaaS, CaaS",
   "Application, Platform, Infrastructure",
   "Compute, Storage, Network",
   "Public, Private, Hybrid"
  ],
  "a": 1,
  "e": "기능 유형은 Application·Platform·Infrastructure 3종. 배포 모델·서비스 범주와 축이 다름."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "공통의 규제 요구와 미션을 가진 여러 병원이 비용을 분담해 공동 운영하는 클라우드 배포 모델은?",
  "c": [
   "Multi-cloud",
   "Private cloud",
   "Hybrid cloud",
   "Community cloud"
  ],
  "a": 3,
  "e": "Community는 공통 관심사(보안 요구·정책·준거성)를 공유하는 특정 조직군이 사용."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "A company runs sensitive workloads in its private cloud and bursts to a public cloud during peak demand using standardized technology. Which deployment model is this?",
  "c": [
   "Distributed private cloud",
   "Multi-cloud",
   "Hybrid cloud",
   "Community cloud"
  ],
  "a": 2,
  "e": "Hybrid = two or more distinct deployment models bound together enabling data/application portability (e.g., cloud bursting)."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "ISO/IEC 17788 교차 관점 중 '서비스 종료 시 고객이 자산을 회수하고 CSP가 데이터를 삭제할 수 있는 능력'은?",
  "c": [
   "Reversibility",
   "Portability",
   "Interoperability",
   "Resiliency"
  ],
  "a": 0,
  "e": "Reversibility는 회수와 삭제를 함께 다룸. Portability는 이전 용이성만, Interoperability는 상호 작동성."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 3,
  "q": "Which cross-cutting aspect is MOST directly addressed by including a 'right to audit' clause and requiring third-party attestation reports in a cloud contract?",
  "c": [
   "Auditability",
   "Maintenance and versioning",
   "Performance",
   "Availability"
  ],
  "a": 0,
  "e": "Auditability is the ability to collect and make available evidence for audit of the service; right-to-audit and SOC reports support it."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "엣지 컴퓨팅 도입이 클라우드 보안에 주는 영향으로 가장 적절한 것은?",
  "c": [
   "공유책임 모델이 적용되지 않음",
   "모든 데이터가 중앙 리전에만 저장돼 데이터 주권 이슈 소멸",
   "데이터 발생지 근처에서 처리해 지연은 줄지만 분산 단말의 물리·패치 관리 부담 증가",
   "TEE가 기본 내장돼 사용 중 데이터 노출 위험 제거"
  ],
  "a": 2,
  "e": "엣지는 지연 감소·대역폭 절감이 이점이나 공격 표면이 분산·확대됨."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 1,
  "q": "클라우드 환경에서 고객이 물리 매체에 접근할 수 없을 때 가장 현실적인 데이터 소거 방법은?",
  "c": [
   "Degaussing",
   "Cryptographic erase(crypto-shredding)",
   "물리적 파쇄",
   "포맷 후 재설치"
  ],
  "a": 1,
  "e": "데이터를 암호화해 두고 키를 안전하게 파기하면 데이터 복구 불가. NIST SP 800-88에서 Purge 수준 기법."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 1,
  "q": "NIST SP 800-88의 매체 소거 단계 중 '실험실 수준 기법으로도 복구 불가능'하게 만드는 단계는?",
  "c": [
   "Format",
   "Clear",
   "Destroy",
   "Purge"
  ],
  "a": 3,
  "e": "Clear는 일반 복구 도구 대응, Purge는 실험실 공격 대응(crypto erase·블록 삭제 등), Destroy는 매체 물리 파괴."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "Which network control restricts access to cloud resources based on the geographic location of the requester?",
  "c": [
   "Micro-segmentation",
   "Network security group",
   "Traffic inspection",
   "Geofencing"
  ],
  "a": 3,
  "e": "Geofencing enforces location-based restrictions (e.g., block logins from outside permitted countries). NSGs filter by IP/port/protocol."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "IaaS의 네트워크 보안 그룹(NSG)에 대한 설명으로 옳은 것은?",
  "c": [
   "애플리케이션 계층 페이로드를 검사하는 WAF",
   "인스턴스·서브넷 단위로 IP·포트·프로토콜 기반 트래픽을 허용·거부하는 가상 방화벽",
   "DNS 질의를 서명하는 확장",
   "물리 스위치의 VLAN 설정"
  ],
  "a": 1,
  "e": "NSG는 L3/L4 규칙 기반 가상 방화벽. L7 검사는 WAF·트래픽 검사 장비 역할."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "서버리스(FaaS) 환경에서 고객이 직접 관리해야 할 보안 요소로 가장 적절한 것은?",
  "c": [
   "함수 코드·실행 권한(IAM 역할)·이벤트 입력 검증",
   "호스트 하이퍼바이저 구성",
   "물리 서버 펌웨어",
   "런타임 OS 커널 패치"
  ],
  "a": 0,
  "e": "서버리스는 런타임·OS를 CSP가 관리. 고객은 코드·권한·입력 처리에 집중 — 과다 권한 함수가 대표 리스크."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 3,
  "q": "An organization wants to eliminate configuration drift and ensure that every production server matches an approved baseline. Which approach BEST achieves this?",
  "c": [
   "Allow administrators to patch servers manually via SSH",
   "Run monthly vulnerability scans only",
   "Adopt immutable architecture and redeploy from hardened golden images",
   "Increase logging verbosity on all servers"
  ],
  "a": 2,
  "e": "Immutable infrastructure replaces instances instead of modifying them, so drift cannot accumulate. Scans and logs detect but do not prevent drift."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "컨테이너 보안에서 VM 대비 특히 주의해야 할 고유 리스크는?",
  "c": [
   "게스트 OS가 각각 존재해 패치 부담이 큼",
   "호스트 커널을 공유하므로 커널 취약점 시 다른 컨테이너까지 영향",
   "하드웨어 가상화로 격리가 과도함",
   "이미지 개념이 없어 무결성 검증 불가"
  ],
  "a": 1,
  "e": "컨테이너는 커널을 공유해 격리 강도가 VM보다 약함 → 이미지 서명·스캔, 루트 금지, seccomp 등 필요."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 3,
  "q": "클라우드 관리 콘솔 관리자 계정이 탈취될 경우 피해가 가장 큰 이유와 우선 통제를 바르게 짝지은 것은?",
  "c": [
   "데이터 평면에 국한 — 데이터 암호화",
   "네트워크 대역폭 소진 — DDoS 방어",
   "게스트 OS만 영향 — 안티바이러스",
   "관리 평면(management plane)이 전체 자원을 통제 — MFA와 최소권한 특권 접근"
  ],
  "a": 3,
  "e": "관리 평면 권한은 모든 자원 생성·삭제·구성을 좌우. 특권 계정 MFA·최소권한·JIT·모니터링이 최우선."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 1,
  "q": "CSA 클라우드 보안 데이터 수명주기의 올바른 순서는?",
  "c": [
   "Create → Share → Store → Use → Archive → Destroy",
   "Store → Create → Use → Archive → Share → Destroy",
   "Create → Store → Use → Share → Archive → Destroy",
   "Create → Use → Store → Share → Destroy → Archive"
  ],
  "a": 2,
  "e": "CSA 6단계: Create·Store·Use·Share·Archive·Destroy. Store는 생성 직후 거의 동시에 발생."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "BIA 과정에서 '통제 도입 비용이 기대 손실 감소분보다 작은지'를 판단하는 기법은?",
  "c": [
   "Cost-Benefit Analysis (CBA)",
   "Threat modeling",
   "Gap analysis",
   "Recovery Point Objective"
  ],
  "a": 0,
  "e": "CBA는 보호 조치 비용과 기대 효익을 비교. ROI는 투자 대비 수익률 지표."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "Which functional security requirement is MOST at risk when a customer builds heavily on a CSP's proprietary serverless APIs?",
  "c": [
   "Portability",
   "Availability",
   "Confidentiality",
   "Measured service"
  ],
  "a": 0,
  "e": "Proprietary APIs create vendor lock-in, reducing the ability to move workloads to another provider (portability)."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "AWS Well-Architected Framework의 Pillar에 해당하지 않는 것은?",
  "c": [
   "Cost Optimization",
   "Reliability",
   "Multi-tenancy",
   "Security"
  ],
  "a": 2,
  "e": "6 Pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "DevSecOps에서 'shift-left'의 의미로 옳은 것은?",
  "c": [
   "보안 책임을 CSP에 이전",
   "보안 테스트·검증을 개발 초기 단계와 CI 파이프라인으로 앞당김",
   "릴리스 후 패치 주기를 늘림",
   "운영 단계에서만 침투 테스트 수행"
  ],
  "a": 1,
  "e": "SAST·SCA·IaC 스캔·시크릿 탐지를 커밋·빌드 단계에 자동화해 결함 수정 비용을 낮춤."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 3,
  "q": "A cloud architect must keep encryption keys under the customer's control while using a SaaS provider's native encryption. Which approach BEST meets this requirement?",
  "c": [
   "Base64 encoding of sensitive fields",
   "Provider-managed default keys",
   "Storing keys in the same database as the data",
   "Bring Your Own Key (BYOK) backed by a customer-managed HSM/KMS"
  ],
  "a": 3,
  "e": "BYOK (or HYOK for stronger control) lets the customer generate, own and revoke keys. Base64 is encoding, not encryption."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 1,
  "q": "CSA Enterprise Architecture(구 Trusted Cloud Initiative)의 도메인에 해당하는 것은?",
  "c": [
   "STRIDE",
   "PASTA",
   "Uptime Tier",
   "BOSS(Business Operation Support Services)"
  ],
  "a": 3,
  "e": "CSA EA는 BOSS·ITOS·Presentation·Application·Information·Infrastructure Services·Security and Risk Management 도메인으로 구성."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 3,
  "q": "클라우드 이전 전 BC/DR 설계에서 가장 먼저 수행해야 할 것은?",
  "c": [
   "전면 중단 테스트 실시",
   "BIA로 핵심 업무와 RTO·RPO 요구를 식별",
   "백업 솔루션 구매",
   "DR 리전 선정과 복제 구성"
  ],
  "a": 1,
  "e": "요구사항(BIA) 없이 기술 선택 불가 — 설계는 RTO·RPO에서 출발."
 },
 {
  "s": "s1",
  "t": "CSP 평가",
  "d": 1,
  "q": "Common Criteria(ISO/IEC 15408)에서 평가 대상 제품을 무엇이라 하는가?",
  "c": [
   "TOE (Target of Evaluation)",
   "ST (Security Target)",
   "PP (Protection Profile)",
   "EAL (Evaluation Assurance Level)"
  ],
  "a": 0,
  "e": "TOE는 평가 대상, PP는 제품군 공통 요구, ST는 특정 제품의 보안 요구·기능 명세, EAL은 보증 수준."
 },
 {
  "s": "s1",
  "t": "CSP 평가",
  "d": 2,
  "q": "A security manager must select an HSM for a regulated workload. Which certification MOST directly validates the cryptographic module itself?",
  "c": [
   "PCI DSS Report on Compliance",
   "ISO/IEC 27001 certificate",
   "FIPS 140-2/140-3 validation",
   "SOC 2 Type II report"
  ],
  "a": 2,
  "e": "FIPS 140 (CMVP) validates cryptographic modules. SOC 2 and ISO 27001 assess organizational controls, not the module."
 },
 {
  "s": "s1",
  "t": "CSP 평가",
  "d": 3,
  "q": "CSP 평가 시 CSP가 제시한 Common Criteria EAL4 인증서를 검토하는 관리자가 가장 먼저 확인할 사항은?",
  "c": [
   "CSP 마케팅 자료의 보안 기능 목록",
   "인증 대상 버전·구성이 실제 사용 구성과 일치하는지",
   "인증서 발급 국가가 자국인지",
   "EAL 숫자가 7인지 여부"
  ],
  "a": 1,
  "e": "CC 인증은 ST에 명시된 특정 버전·구성에만 유효. 운영 구성이 다르면 보증 범위 밖."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 2,
  "q": "AI/ML 기반 클라우드 위협 탐지 모델에 공격자가 조작된 로그를 학습 데이터로 주입하는 공격은?",
  "c": [
   "Membership inference",
   "Prompt injection",
   "Model inversion",
   "Data poisoning"
  ],
  "a": 3,
  "e": "데이터 오염(poisoning)은 학습 데이터를 변조해 모델 판단을 왜곡. 대응은 데이터 출처 검증·무결성 확인."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 1,
  "q": "NIST AI RMF 1.0의 4가지 핵심 기능(Core functions)은?",
  "c": [
   "Identify, Protect, Detect, Respond",
   "Assess, Authorize, Monitor, Retire",
   "Govern, Map, Measure, Manage",
   "Plan, Do, Check, Act"
  ],
  "a": 2,
  "e": "AI RMF Core는 Govern·Map·Measure·Manage. Identify~Respond는 NIST CSF 기능."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 2,
  "q": "Under the EU AI Act, which category applies to AI systems such as social scoring by public authorities?",
  "c": [
   "Unacceptable risk (prohibited)",
   "High risk",
   "Limited risk",
   "Minimal risk"
  ],
  "a": 0,
  "e": "The EU AI Act prohibits certain practices (e.g., social scoring, manipulative techniques) as unacceptable risk."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 3,
  "q": "SOAR 플레이북으로 '의심 계정 자동 비활성화'를 도입하려 한다. 보안 관리자가 가장 우선 고려할 사항은?",
  "c": [
   "오탐 시 업무 영향을 고려한 승인 단계·예외 기준(human-in-the-loop) 정의",
   "플레이북을 문서화하지 않고 신속 배포",
   "SIEM 폐기 후 SOAR 단일화",
   "모든 경보를 즉시 자동 차단"
  ],
  "a": 0,
  "e": "자동 대응은 오탐 시 가용성 손실 — 위험도별 자동/승인 구분과 거버넌스가 우선."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 2,
  "q": "AI 기반 탐지에서 '데이터 출처 검증(data source validation)'의 주된 목적은?",
  "c": [
   "모델 추론 속도 향상",
   "GPU 비용 절감",
   "학습·입력 데이터의 진본성·무결성을 확인해 오염·편향을 방지",
   "로그 저장 기간 단축"
  ],
  "a": 2,
  "e": "신뢰할 수 없는 데이터는 탐지 품질 저하·편향·포이즈닝으로 이어짐."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 1,
  "q": "CSA 데이터 수명주기에서 데이터가 생성 직후 거의 동시에 일어나는 단계는?",
  "c": [
   "Store",
   "Use",
   "Archive",
   "Share"
  ],
  "a": 0,
  "e": "Create 직후 저장 위치에 커밋되는 Store가 즉시 발생 — 이 시점에 암호화·접근통제 적용."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 2,
  "q": "Data dispersion에 대한 설명으로 옳은 것은?",
  "c": [
   "데이터를 익명화해 개인정보성을 제거",
   "데이터를 단일 리전에만 저장해 관할 리스크를 제거",
   "데이터를 조각내 여러 위치에 분산 저장해 일부 노드 손실에도 복원 가능",
   "데이터를 압축해 저장 비용을 절감"
  ],
  "a": 2,
  "e": "Bit splitting·erasure coding 기반. 가용성·기밀성 향상, 단 위치 다중화로 관할 고려."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 2,
  "q": "Which artifact BEST helps a cloud security professional identify where data crosses trust boundaries and jurisdictions?",
  "c": [
   "Business continuity test report",
   "Data flow diagram",
   "Gantt chart",
   "Organizational chart"
  ],
  "a": 1,
  "e": "Data flows document how data moves between systems, revealing trust boundaries, cross-border transfers and encryption points."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 3,
  "q": "데이터 흐름 분석 결과 개인정보가 EU 리전에서 제3국 리전으로 복제되는 것을 발견했다. 보안 관리자의 FIRST 조치는?",
  "c": [
   "DR 목적이므로 문서화 없이 유지",
   "암호화만 적용하면 문제없으므로 무시",
   "복제 즉시 영구 삭제",
   "법무·개인정보 담당과 이전 적법 근거(관할 요건) 검토"
  ],
  "a": 3,
  "e": "국경 간 이전은 법적 근거 확인이 우선 — 기술 조치 전 규제 요구 판단."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 1,
  "q": "IaaS에서 인스턴스에 연결되는 블록 단위 가상 디스크 스토리지는?",
  "c": [
   "Object storage",
   "Information storage and management",
   "Content and file storage",
   "Volume storage"
  ],
  "a": 3,
  "e": "Volume = 블록 디스크, Object = 키·메타데이터 기반 객체, 후자 둘은 SaaS 스토리지 유형."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 2,
  "q": "Which storage type is LEAST appropriate for retaining audit logs required for forensic investigations?",
  "c": [
   "Centralized log management storage",
   "Ephemeral storage",
   "Write-once (WORM) archive storage",
   "Object storage with versioning"
  ],
  "a": 1,
  "e": "Ephemeral storage is lost when the instance terminates, destroying evidence."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 2,
  "q": "Raw storage(raw device mapping)에 대한 설명으로 옳은 것은?",
  "c": [
   "물리 스토리지 LUN을 가상 머신에 직접 매핑하는 방식",
   "HTTP API로 접근하는 객체 저장소",
   "SaaS의 문서 동기화 저장소",
   "인스턴스 종료 시 소멸하는 임시 디스크"
  ],
  "a": 0,
  "e": "RDM은 VM이 물리 LUN에 직접 접근 — 성능 이점, 격리·관리 주의."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 2,
  "q": "PaaS에서 제공되는 스토리지 유형 분류로 옳은 것은?",
  "c": [
   "Ephemeral, Raw",
   "Volume, Object",
   "Structured, Unstructured",
   "Content and file, Information storage"
  ],
  "a": 2,
  "e": "CCSP 관례상 PaaS = 정형(DB)·비정형(빅데이터), IaaS = Volume·Object, SaaS = Information storage & mgmt·Content/file."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 3,
  "q": "객체 스토리지 데이터 유출 사고가 반복된다. 원인은 개발자의 공개 접근 설정이다. BEST 예방 통제는?",
  "c": [
   "버킷 이름을 복잡하게 변경",
   "계정 수준 공개 접근 차단 정책과 CSPM 기반 설정 자동 점검",
   "객체를 압축 저장",
   "분기별 수동 점검"
  ],
  "a": 1,
  "e": "예방적 정책(기본 차단)과 지속적 설정 감시가 근본 대책. 이름 난독화는 보안 아님."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 1,
  "q": "원본 데이터와 수학적 관계가 없는 대체값을 사용하고 원본을 별도 저장소에 보관하는 기법은?",
  "c": [
   "Static masking",
   "Encryption",
   "Hashing",
   "Tokenization"
  ],
  "a": 3,
  "e": "토큰화는 볼트에서만 원본 조회. 암호문은 키로 복호 가능."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 1,
  "q": "Which technique provides data integrity but NOT non-repudiation by itself?",
  "c": [
   "Digital signature",
   "Signed audit log with private key",
   "Hashing",
   "Public key certificate with signature"
  ],
  "a": 2,
  "e": "A hash verifies integrity; non-repudiation requires a digital signature using the sender's private key."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "운영 DB는 그대로 두고 콜센터 직원 조회 화면에서만 주민번호 뒷자리를 가리는 기법은?",
  "c": [
   "Dynamic masking",
   "Anonymization",
   "Static masking",
   "Crypto-shredding"
  ],
  "a": 0,
  "e": "동적 마스킹은 조회 시점에 권한별로 표시만 가림. 정적 마스킹은 사본 자체를 치환."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "개발·테스트 환경에 운영 데이터를 제공할 때 가장 적절한 기법은?",
  "c": [
   "Static masking된 사본 제공",
   "Dynamic masking",
   "운영 데이터 원본 복제",
   "Base64 인코딩"
  ],
  "a": 0,
  "e": "비운영 환경에는 영구 치환된 정적 마스킹 사본. 인코딩은 보호가 아님."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "GDPR 관점에서 가명화(pseudonymized) 데이터에 대한 설명으로 옳은 것은?",
  "c": [
   "익명 데이터로 간주돼 GDPR 적용 제외",
   "삭제권 행사 대상이 아님",
   "추가 정보로 재식별 가능하므로 여전히 개인정보로 취급",
   "암호화와 동일하게 취급돼 유출 통지 면제"
  ],
  "a": 2,
  "e": "가명화는 위험 감소 조치일 뿐 개인정보성 유지. 비가역 익명화만 적용 제외."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "Envelope encryption에서 KEK(Key Encryption Key)의 역할은?",
  "c": [
   "데이터를 직접 암호화",
   "데이터 암호화 키(DEK)를 암호화해 보호",
   "토큰 볼트 인덱스 생성",
   "해시 다이제스트 생성"
  ],
  "a": 1,
  "e": "DEK가 데이터를, KEK가 DEK를 암호화. KEK는 HSM/KMS에 보관."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 3,
  "q": "A company must reduce its PCI DSS scope for stored cardholder data in a cloud application. Which approach is MOST effective?",
  "c": [
   "Store PANs in a private subnet without encryption",
   "Apply dynamic masking on reports only",
   "Hash PANs with MD5",
   "Tokenize PANs and keep the token vault in a segmented, hardened environment"
  ],
  "a": 3,
  "e": "Tokenization removes PANs from most systems, shrinking scope. MD5 is weak; masking reports leaves stored PANs in scope."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "Which DLP deployment is BEST suited to detect sensitive data being copied to a USB drive?",
  "c": [
   "Storage DLP",
   "Cloud object storage lifecycle policy",
   "Network DLP",
   "Endpoint DLP"
  ],
  "a": 3,
  "e": "Endpoint DLP monitors data in use on the device, including removable media and clipboard."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "API 키·DB 비밀번호 등 시크릿 관리로 가장 적절한 것은?",
  "c": [
   "공유 문서에 정리",
   "Secrets Manager·Vault에 저장하고 런타임 조회·자동 순환",
   "환경설정 파일을 Git에 커밋",
   "소스 코드에 하드코딩"
  ],
  "a": 1,
  "e": "시크릿은 중앙 저장·접근 감사·자동 순환이 원칙. 저장소 커밋은 대표 유출 경로."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 3,
  "q": "CSP의 관리자도 고객 데이터 평문에 접근하지 못하게 하려는 요구가 가장 강할 때 BEST 선택은?",
  "c": [
   "HYOK 또는 클라이언트측 암호화(키를 고객 환경에만 보관)",
   "TLS 전송 암호화만 적용",
   "CSP 기본 관리 키",
   "BYOK 후 키를 CSP KMS에만 보관"
  ],
  "a": 0,
  "e": "BYOK도 CSP KMS에서 키가 사용됨. 고객 경계 밖으로 키가 나가지 않는 HYOK·클라이언트측 암호화가 가장 강함."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 1,
  "q": "JSON·XML처럼 태그로 구조를 자기 기술하는 데이터 유형은?",
  "c": [
   "Unstructured data",
   "Raw data",
   "Semi-structured data",
   "Structured data"
  ],
  "a": 2,
  "e": "반정형 데이터는 고정 스키마는 없지만 태그·키로 구조 표현."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 2,
  "q": "Which discovery approach is MOST appropriate for identifying PII inside scanned PDF contracts?",
  "c": [
   "Schema-based column scan",
   "Content analysis (pattern matching, OCR, ML)",
   "Network flow analysis",
   "Metadata-based discovery only"
  ],
  "a": 1,
  "e": "Unstructured data requires inspecting content itself; metadata alone cannot reveal embedded PII."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 2,
  "q": "데이터 분류 등급을 결정할 책임자는?",
  "c": [
   "최종 사용자",
   "데이터 관리자(Custodian)",
   "CSP 운영자",
   "데이터 소유자(Data owner)"
  ],
  "a": 3,
  "e": "소유자가 분류·접근 권한을 결정, 관리자는 구현·운영."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 2,
  "q": "데이터 매핑(data mapping)의 주된 목적은?",
  "c": [
   "네트워크 대역폭 측정",
   "백업 압축률 향상",
   "원천과 목적지 간 데이터 요소 대응·이동 경로를 파악해 일관된 분류·보호 적용",
   "스토리지 용량 계획"
  ],
  "a": 2,
  "e": "매핑으로 데이터가 어디서 어디로 가는지 파악 → 관할·통제 일관성."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 3,
  "q": "데이터 라벨링·태깅을 도입하는 가장 큰 효과는?",
  "c": [
   "DLP·IRM·접근통제 정책이 라벨을 읽어 자동으로 보호를 적용",
   "법적 보존 의무 면제",
   "데이터 저장 용량 감소",
   "암호화 키 순환 불필요"
  ],
  "a": 0,
  "e": "라벨은 기계가 읽을 수 있는 분류 정보 — 통제 자동화의 전제."
 },
 {
  "s": "s2",
  "t": "IRM",
  "d": 1,
  "q": "IRM의 핵심 특징으로 옳은 것은?",
  "c": [
   "데이터가 조직 밖으로 나가도 권한·만료·폐기 통제가 지속됨",
   "네트워크 경계에서 유출을 탐지·차단",
   "로그를 상관분석해 이상 징후 탐지",
   "데이터 저장 위치를 단일 리전으로 고정"
  ],
  "a": 0,
  "e": "IRM은 지속적 보호(persistent protection). 경계 차단은 DLP."
 },
 {
  "s": "s2",
  "t": "IRM",
  "d": 2,
  "q": "IRM 도구에서 퇴사자가 다운로드한 문서 열람을 원격으로 무효화하는 기능의 기반은?",
  "c": [
   "스냅샷 삭제",
   "데이터 분산",
   "인증서·키 폐기(revocation)",
   "정적 마스킹"
  ],
  "a": 2,
  "e": "IRM은 열람 시 권한 서버 확인 → 키·인증서 폐기로 즉시 무효화."
 },
 {
  "s": "s2",
  "t": "IRM",
  "d": 2,
  "q": "Which is a common challenge when deploying IRM to external partners?",
  "c": [
   "IRM cannot set document expiration",
   "Partners need compatible clients/agents and federated identities",
   "IRM works only on structured databases",
   "IRM removes the need for encryption"
  ],
  "a": 1,
  "e": "IRM relies on agents and identity integration; supporting external users increases complexity."
 },
 {
  "s": "s2",
  "t": "IRM",
  "d": 3,
  "q": "외부 법률사무소와 기밀 계약서를 공유하며 인쇄 금지·30일 후 만료·열람 추적이 필요하다. BEST 통제는?",
  "c": [
   "TLS로 이메일 전송",
   "Network DLP 차단 규칙",
   "압축 파일 비밀번호 설정",
   "IRM 정책 적용 후 공유"
  ],
  "a": 3,
  "e": "인쇄 제한·만료·감사 추적은 IRM 고유 기능. 비밀번호 압축은 수신 후 통제 불가."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 1,
  "q": "클라우드에서 데이터를 복구 불가하게 삭제하는 가장 실무적인 방법은?",
  "c": [
   "휴지통 비우기",
   "Degaussing",
   "파일 삭제 명령",
   "Crypto-shredding"
  ],
  "a": 3,
  "e": "물리 매체 접근 불가 → 키 파기로 데이터 무력화."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 2,
  "q": "Legal hold에 대한 설명으로 옳은 것은?",
  "c": [
   "모든 데이터를 공개해 투명성 확보",
   "소송 예상 시 관련 데이터의 정책상 삭제를 중단하고 승인된 접근만 허용",
   "보존 기간 만료 데이터를 즉시 삭제",
   "아카이브 데이터를 압축해 비용 절감"
  ],
  "a": 1,
  "e": "Legal hold는 보존 정책보다 우선하며 삭제 방지가 핵심."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 2,
  "q": "Which element is MOST critical when archiving encrypted data for ten years?",
  "c": [
   "Retaining and protecting the decryption keys for the full retention period",
   "Using ephemeral storage",
   "Disabling integrity checks",
   "Deleting the key after archiving"
  ],
  "a": 0,
  "e": "Without the keys the archive becomes unrecoverable; key retention must match data retention."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 3,
  "q": "보존 기간이 만료된 개인정보를 계속 보관하는 것에 대한 보안 관리자 관점의 평가로 옳은 것은?",
  "c": [
   "향후 분석 가치가 있으므로 무기한 보관 권장",
   "암호화돼 있으면 문제없음",
   "저장 제한 원칙 위반·유출 시 피해 확대 리스크이므로 정책에 따라 삭제",
   "CSP 책임이므로 고객은 관여하지 않음"
  ],
  "a": 2,
  "e": "과보존은 규제 위반·리스크 증가. 정책 기반 삭제와 삭제 증명 필요."
 },
 {
  "s": "s2",
  "t": "감사·추적성",
  "d": 1,
  "q": "데이터 이벤트 로그의 필수 속성 중 'Where'에 해당하는 것은?",
  "c": [
   "사용자 ID",
   "IP 주소·지리 위치",
   "작업 결과",
   "타임스탬프"
  ],
  "a": 1,
  "e": "Who=ID, When=시간, Where=IP·위치·리소스, What=행위·결과."
 },
 {
  "s": "s2",
  "t": "감사·추적성",
  "d": 2,
  "q": "여러 클라우드 서비스 로그를 상관분석할 때 가장 기본 전제는?",
  "c": [
   "로그 영문화",
   "로그 출력 최소화",
   "로그 압축",
   "시간 동기화(NTP·UTC 표준화)"
  ],
  "a": 3,
  "e": "타임스탬프가 어긋나면 사건 순서 재구성 불가."
 },
 {
  "s": "s2",
  "t": "감사·추적성",
  "d": 3,
  "q": "An investigator must prove that cloud audit logs collected as evidence were not altered after collection. What is the BEST method?",
  "c": [
   "Store logs on the original VM",
   "Convert logs to PDF",
   "Record cryptographic hashes at collection and maintain chain of custody documentation",
   "Rely on CSP verbal confirmation"
  ],
  "a": 2,
  "e": "Hashes prove integrity and chain of custody documents every handling step, supporting admissibility."
 },
 {
  "s": "s2",
  "t": "AI/ML 데이터 보호",
  "d": 2,
  "q": "공격자가 모델 API에 반복 질의해 특정 개인의 레코드가 학습 데이터에 포함됐는지 알아내는 공격은?",
  "c": [
   "Membership inference",
   "Evasion attack",
   "Data poisoning",
   "Model extraction"
  ],
  "a": 0,
  "e": "포함 여부 추론 = membership inference. 대응: 차등 프라이버시·출력 제한."
 },
 {
  "s": "s2",
  "t": "AI/ML 데이터 보호",
  "d": 2,
  "q": "Which control BEST verifies that an ML model deployed to production is the same artifact that passed validation?",
  "c": [
   "Cryptographic hash/signature check against the model registry",
   "Disabling inference logging",
   "Larger training dataset",
   "Higher GPU allocation"
  ],
  "a": 0,
  "e": "Model integrity verification (hash/signature, registry) detects tampering or substitution."
 },
 {
  "s": "s2",
  "t": "AI/ML 데이터 보호",
  "d": 3,
  "q": "고객 상담 기록으로 LLM을 미세조정하려 한다. 데이터셋 프라이버시 보호를 위한 FIRST 조치는?",
  "c": [
   "학습률 조정",
   "학습 데이터를 Ephemeral 스토리지에 저장",
   "학습 전 PII 발견·제거(또는 마스킹)와 사용 목적 적법성 검토",
   "모델 배포 후 출력 필터만 적용"
  ],
  "a": 2,
  "e": "학습된 PII는 이후 추출 위험 — 데이터 단계에서 최소화가 우선."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 1,
  "q": "호스트 OS 없이 하드웨어 위에서 직접 실행되는 하이퍼바이저는?",
  "c": [
   "Type 1 (bare-metal)",
   "Container runtime",
   "Emulator",
   "Type 2 (hosted)"
  ],
  "a": 0,
  "e": "Type 1은 하드웨어 직접 실행(ESXi·Hyper-V·Xen). Type 2는 호스트 OS 위."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "Why is a Type 2 hypervisor generally considered less secure for multi-tenant cloud environments?",
  "c": [
   "It does not support virtual networking",
   "It cannot run more than one guest",
   "The underlying host operating system adds to the attack surface",
   "It requires hardware security modules"
  ],
  "a": 2,
  "e": "Type 2 runs on a general-purpose OS; vulnerabilities in that OS can compromise all guests."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "게스트 VM 공격자가 하이퍼바이저 취약점을 이용해 다른 테넌트 VM에 접근하는 공격은?",
  "c": [
   "Live migration",
   "VM escape",
   "Hyperjacking 탐지",
   "VM sprawl"
  ],
  "a": 1,
  "e": "VM escape는 격리 붕괴. VM sprawl은 관리되지 않는 VM 증식."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "SDN의 핵심 특징으로 옳은 것은?",
  "c": [
   "모든 라우팅 결정을 개별 스위치가 독립 수행",
   "물리 케이블 교체로만 토폴로지 변경",
   "암호화를 기본 제공",
   "제어 평면과 데이터 평면을 분리해 중앙 컨트롤러로 프로그래밍"
  ],
  "a": 3,
  "e": "SDN = 제어·데이터 평면 분리 + 중앙 제어. 컨트롤러 보호가 핵심."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 3,
  "q": "Which component, if compromised, would MOST likely give an attacker control over an organization's entire cloud environment?",
  "c": [
   "A load balancer health-check endpoint",
   "An object storage bucket",
   "A single web server VM",
   "Management plane administrative credentials"
  ],
  "a": 3,
  "e": "The management plane controls provisioning, configuration and deletion of all resources."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "같은 물리 호스트의 다른 테넌트가 CPU·디스크 자원을 과점해 성능이 저하되는 현상은?",
  "c": [
   "Side-channel encryption",
   "Noisy neighbor",
   "VM escape",
   "Data remanence"
  ],
  "a": 1,
  "e": "자원 풀링의 부작용 — 자원 할당 한도·QoS로 완화."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 1,
  "q": "클라우드 인프라에서 실제 워크로드 트래픽을 전달·처리하는 평면은?",
  "c": [
   "Data plane",
   "Orchestration plane",
   "Management plane",
   "Control plane"
  ],
  "a": 0,
  "e": "데이터 평면 = 트래픽 처리, 제어 평면 = 결정, 관리 평면 = 자원 관리."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "Spectre·Meltdown 같은 CPU 취약점이 멀티테넌트 클라우드에서 특히 문제가 되는 이유는?",
  "c": [
   "DNS를 변조하기 때문",
   "스토리지 암호화를 무력화하기 때문",
   "사이드채널로 같은 물리 호스트의 다른 테넌트 메모리 정보가 노출될 수 있음",
   "네트워크 대역폭을 고갈시키기 때문"
  ],
  "a": 2,
  "e": "공유 하드웨어(compute)에서 테넌트 경계를 우회 — 공유 기술 취약점."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 1,
  "q": "Uptime Institute Tier 중 '동시 유지보수 가능(concurrently maintainable)'한 등급은?",
  "c": [
   "Tier I",
   "Tier III",
   "Tier II",
   "Tier IV"
  ],
  "a": 1,
  "e": "Tier III = 계획 정비 무중단, Tier IV = 내결함성."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 1,
  "q": "Which Uptime Institute tier is described as fault tolerant?",
  "c": [
   "Tier III",
   "Tier II",
   "Tier I",
   "Tier IV"
  ],
  "a": 3,
  "e": "Tier IV withstands any single unplanned failure without impacting the critical load."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "데이터센터 네트워크 연결의 'multi-vendor pathway connectivity'가 의미하는 것은?",
  "c": [
   "단일 광케이블 대역폭 증설",
   "같은 통신사 회선 2개",
   "서로 다른 통신사와 물리적으로 분리된 경로로 이중 연결",
   "무선 백업 한 개"
  ],
  "a": 2,
  "e": "통신사·관로 모두 분리해야 단일 장애 제거."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 3,
  "q": "A company must decide whether to build its own data center or use colocation. Which factor MOST favors building?",
  "c": [
   "Requirement for maximum physical control and customization over a long horizon",
   "Need for rapid deployment within weeks",
   "Limited capital budget",
   "Lack of in-house facilities staff"
  ],
  "a": 0,
  "e": "Building maximizes control but requires capital, time and expertise; the other factors favor buy/lease."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "데이터센터 논리 설계(logical design)의 예로 옳은 것은?",
  "c": [
   "테넌트 분리와 접근통제",
   "발전기 용량 산정",
   "입지 선정",
   "HVAC 이중화"
  ],
  "a": 0,
  "e": "Outline 3.2: logical = tenant partitioning·access control, physical = location·buy or build."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 3,
  "q": "데이터센터 입지 선정 시 보안 관리자가 BC/DR 관점에서 가장 중시할 요소는?",
  "c": [
   "직원 통근 편의",
   "주차 공간",
   "자연재해 위험과 주 사이트와의 지리적 분리",
   "건물 외관 디자인"
  ],
  "a": 2,
  "e": "같은 재해 영향권이면 DR 무의미 — 위험과 분리 거리 고려."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 1,
  "q": "ASHRAE가 권장하는 데이터센터 서버 흡기 온도 범위로 가장 가까운 것은?",
  "c": [
   "약 0~5°C",
   "약 18~27°C",
   "약 5~10°C",
   "약 30~40°C"
  ],
  "a": 1,
  "e": "ASHRAE TC 9.9 권장 범위(recommended envelope)."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "Which physical control BEST prevents tailgating into a data center?",
  "c": [
   "Perimeter fence",
   "Visitor log book",
   "CCTV camera",
   "Mantrap (access control vestibule)"
  ],
  "a": 3,
  "e": "A mantrap allows only one authenticated person through at a time; CCTV only detects."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 1,
  "q": "위험 처리 전략 중 사이버 보험 가입에 해당하는 것은?",
  "c": [
   "Avoid",
   "Mitigate",
   "Accept",
   "Transfer"
  ],
  "a": 3,
  "e": "재무적 영향 이전. 책임은 남음."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "자산가치 1억 원, 노출계수 0.4, 연간 발생률 0.5일 때 ALE는?",
  "c": [
   "5,000만 원",
   "2,000만 원",
   "1억 원",
   "4,000만 원"
  ],
  "a": 1,
  "e": "SLE = 1억 × 0.4 = 4,000만, ALE = 4,000만 × 0.5 = 2,000만."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "Who should formally approve acceptance of residual risk for a cloud migration?",
  "c": [
   "The risk owner / senior management",
   "The cloud engineer who deployed it",
   "The CSP account manager",
   "The external auditor"
  ],
  "a": 0,
  "e": "Risk acceptance is a business decision by accountable management, not by technical staff, the CSP or auditors."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "위험 평가 단계 중 '가능성과 영향을 추정'하는 단계는?",
  "c": [
   "Risk treatment",
   "Risk identification",
   "Risk analysis",
   "Risk monitoring"
  ],
  "a": 2,
  "e": "Outline 3.3: 식별(identification) → 분석(analysis) → 처리."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 3,
  "q": "규제 데이터를 퍼블릭 클라우드로 이전하는 프로젝트에서 법적으로 허용되지 않는 관할로 데이터가 복제될 위험이 확인됐다. CSP가 리전 고정을 보장하지 못한다. BEST 처리 전략은?",
  "c": [
   "위험 수용",
   "해당 데이터의 이전을 중단(Avoid)하거나 리전 보장이 가능한 대안 선택",
   "보험 가입으로 전가",
   "모니터링만 강화"
  ],
  "a": 1,
  "e": "법적 금지 위험은 수용·전가 불가 — 회피가 적절."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "CSA Top Threats 계열에서 고객 측 원인으로 가장 빈번하게 지적되는 클라우드 위협은?",
  "c": [
   "하이퍼바이저 물리 손상",
   "해저 케이블 절단",
   "데이터센터 화재",
   "설정 오류(misconfiguration)와 부적절한 IAM"
  ],
  "a": 3,
  "e": "고객 책임 영역의 설정·ID 관리 실패가 다수 사고 원인."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 3,
  "q": "A risk assessment of a SaaS provider is limited because the customer cannot perform its own penetration tests. What is the BEST way to obtain assurance?",
  "c": [
   "Accept the provider's verbal assurance",
   "Perform unauthorized scanning of the provider",
   "Review independent third-party attestations such as SOC 2 Type II and ISO/IEC 27001 certificates",
   "Skip the assessment because it is SaaS"
  ],
  "a": 2,
  "e": "When direct testing is not allowed, rely on independent attestations and contractual audit rights."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 1,
  "q": "IaaS 환경에서 고객이 물리 탭 없이 패킷을 수집하는 방법은?",
  "c": [
   "CSP의 트래픽 미러링 기능",
   "물리 스위치 SPAN 포트 직접 연결",
   "하이퍼바이저 콘솔 접속",
   "데이터센터 방문 설치"
  ],
  "a": 0,
  "e": "고객은 물리 접근 불가 → traffic mirroring·가상 IDS."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "VPC flow logs의 한계로 옳은 것은?",
  "c": [
   "패킷 페이로드를 포함하지 않음",
   "관리 평면 API 호출을 기록함",
   "허용·거부 여부를 기록하지 않음",
   "IP 주소를 기록하지 않음"
  ],
  "a": 0,
  "e": "Flow logs는 5-tuple·바이트·허용/거부 등 메타데이터만. API 호출은 별도 감사 로그."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "Which control BEST protects communications between an on-premises data center and an IaaS VPC over the internet?",
  "c": [
   "DNS round robin",
   "Static masking",
   "IPsec site-to-site VPN",
   "Network security group only"
  ],
  "a": 2,
  "e": "IPsec VPN provides encryption and integrity in transit; NSGs filter but do not encrypt."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "클라우드에서 여러 소스 로그를 상관분석해 공격 패턴을 탐지하는 도구는?",
  "c": [
   "HSM",
   "SIEM",
   "CASB",
   "WAF"
  ],
  "a": 1,
  "e": "SIEM = 수집·정규화·상관분석·경보."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 3,
  "q": "관리 평면 감사 로그를 공격자가 삭제하지 못하도록 하는 BEST 설계는?",
  "c": [
   "로그 보존 기간을 1일로 단축",
   "로그 기록 비활성화",
   "운영 계정 버킷에 저장하고 관리자 전원에 권한 부여",
   "로그를 별도 보안 계정의 불변(WORM) 저장소로 전송하고 운영 관리자 삭제 권한 배제"
  ],
  "a": 3,
  "e": "직무분리·불변 저장으로 증거 무결성 확보."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "여러 클라우드 계정에서 사용자가 하나의 기업 ID로 인증하도록 하는 방식은?",
  "c": [
   "API 키 공유",
   "계정별 로컬 사용자 생성",
   "공유 관리자 계정",
   "페더레이션(SAML·OIDC) 기반 중앙 IdP"
  ],
  "a": 3,
  "e": "중앙 IdP로 계정 수명주기·MFA 일관 적용."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 1,
  "q": "온프레미스 데이터센터의 물리·환경 보호 통제에 해당하는 것은?",
  "c": [
   "토큰화",
   "출입 통제와 온습도 감시",
   "RBAC 정책",
   "TLS 인증서 갱신"
  ],
  "a": 1,
  "e": "Outline 3.4 physical and environmental protection(e.g., on-premises)."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 1,
  "q": "재해 발생 시 데이터 손실 허용 시점을 나타내는 지표는?",
  "c": [
   "RPO",
   "RSL",
   "MTD",
   "RTO"
  ],
  "a": 0,
  "e": "RPO = 마지막 복구 가능 시점까지 허용 손실."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 1,
  "q": "What does Recovery Service Level (RSL) measure?",
  "c": [
   "The maximum tolerable data loss",
   "The maximum time to restore service",
   "The percentage of normal production computing capacity required during a disaster",
   "The number of DR tests per year"
  ],
  "a": 2,
  "e": "RSL sizes the DR environment; RTO is time, RPO is data loss."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "RPO를 15분으로 낮추라는 요구에 가장 직접적으로 대응하는 기술 조치는?",
  "c": [
   "관리 콘솔 MFA 적용",
   "15분 이내 주기의 복제·백업(또는 연속 복제)",
   "DR 문서 인쇄 보관",
   "DR 사이트 서버 수 증가"
  ],
  "a": 1,
  "e": "RPO는 복제·백업 주기로 결정. 서버 수는 RSL·RTO 관련."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "Which DR test exercises recovery systems at the alternate site while production continues running?",
  "c": [
   "Checklist test",
   "Tabletop exercise",
   "Full interruption test",
   "Parallel test"
  ],
  "a": 3,
  "e": "A parallel test brings up the DR site without stopping production; full interruption shuts down production."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "RTO와 MTD의 관계로 옳은 것은?",
  "c": [
   "둘은 무관",
   "RTO = RPO × MTD",
   "RTO는 MTD 이하로 설정",
   "RTO는 항상 MTD보다 길어야 함"
  ],
  "a": 2,
  "e": "MTD를 넘기면 조직 생존 위협 — RTO ≤ MTD."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 3,
  "q": "동일 CSP의 다른 리전으로 DR을 구성한 기업이 CSP 전체 장애(글로벌 IAM 장애) 시나리오까지 대비하려 할 때 BEST 대안은?",
  "c": [
   "다른 CSP 또는 온프레미스에 핵심 데이터 백업·복구 경로 확보",
   "백업 주기만 단축",
   "같은 리전 내 가용영역 추가",
   "SLA 크레딧 청구"
  ],
  "a": 0,
  "e": "공통 의존성 제거 — 공급자 다변화. 단 이식성·비용 고려."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 3,
  "q": "클라우드 BC/DR 계획의 테스트 결과 RTO를 충족하지 못했다. 보안 관리자의 다음 조치로 BEST인 것은?",
  "c": [
   "원인 분석 후 계획·아키텍처를 개정하고 재테스트",
   "다음 연도까지 대기",
   "RTO를 실측치로 상향해 문서만 수정",
   "결과를 보고서에서 제외"
  ],
  "a": 0,
  "e": "테스트의 목적은 개선 — 경영진 승인 없이 목표를 낮추는 것은 부적절."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 1,
  "q": "Which recovery site option typically has the LOWEST cost but the LONGEST recovery time?",
  "c": [
   "Warm site",
   "Active-active multi-region",
   "Cold site",
   "Hot site"
  ],
  "a": 2,
  "e": "A cold site provides space and power only; equipment and data must be brought in, so RTO is longest. Hot/active-active are fastest and most expensive."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 1,
  "q": "OWASP Top 10 (2021)에서 1위(A01)에 해당하는 위험은?",
  "c": [
   "Injection",
   "Broken Access Control",
   "Cryptographic Failures",
   "Security Misconfiguration"
  ],
  "a": 1,
  "e": "2021판에서 Broken Access Control 이 A01 로 상승했다. Injection 은 A03, Cryptographic Failures 는 A02, Security Misconfiguration 은 A05."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 2,
  "q": "개발 계약서에 '보안 요구사항 충족 여부를 검증할 기준'을 명시하려 한다. 가장 적합한 OWASP 자료는?",
  "c": [
   "OWASP Top 10",
   "OWASP Cheat Sheet Series",
   "CWE/SANS Top 25",
   "ASVS (Application Security Verification Standard)"
  ],
  "a": 3,
  "e": "ASVS 는 L1~L3 레벨별 검증 요구사항이라 계약·인수 기준으로 적합. Top 10·Top 25 는 인식용 순위 목록, Cheat Sheet 는 구현 가이드."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 2,
  "q": "OWASP API Security Top 10 (2023)의 API1 BOLA 에 해당하는 사례는?",
  "c": [
   "URL 의 주문번호만 바꿔 다른 고객 주문을 조회",
   "일반 사용자가 관리자 전용 엔드포인트를 호출",
   "API 에 초당 수만 건 요청을 보내 자원 고갈",
   "폐기되지 않은 구버전 API 가 노출"
  ],
  "a": 0,
  "e": "BOLA(Broken Object Level Authorization)는 객체 ID 단위 인가 실패. 관리자 기능 호출은 BFLA, 자원 고갈은 API4, 구버전 노출은 API9 Improper Inventory Management."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 2,
  "q": "Which OWASP Top 10 for LLM Applications risk describes granting an LLM-based agent too many permissions or autonomy to take actions?",
  "c": [
   "Prompt Injection",
   "Improper Output Handling",
   "Excessive Agency",
   "Unbounded Consumption"
  ],
  "a": 2,
  "e": "Excessive Agency is about excessive functionality, permissions or autonomy. Prompt Injection manipulates inputs, Improper Output Handling concerns unvalidated output passed downstream, Unbounded Consumption is resource abuse."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 3,
  "q": "온프레미스 애플리케이션을 수정 없이 IaaS 로 이전(lift-and-shift)하는 프로젝트에서 보안 관리자가 개발팀에 가장 먼저 강조해야 할 '흔한 함정'은?",
  "c": [
   "클라우드 서비스의 과금 단위를 확인하지 않는 것",
   "애플리케이션 UI 를 새로 디자인하지 않는 것",
   "기존 네트워크 경계 기반 보안 가정이 클라우드에서 그대로 유효하다고 믿는 것",
   "개발 언어를 최신 버전으로 바꾸지 않는 것"
  ],
  "a": 2,
  "e": "lift-and-shift 의 대표 함정은 경계 방화벽·내부망 신뢰 등 온프레미스 보안 가정의 유지. 과금·UI·언어는 보안 함정의 핵심이 아니다."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 1,
  "q": "Secure SDLC 에서 위협 모델링을 수행하기 가장 비용 효율적인 단계는?",
  "c": [
   "설계(Design)",
   "배포(Deploy)",
   "운영(Operate)",
   "폐기(Dispose)"
  ],
  "a": 0,
  "e": "설계 단계에서 결함을 찾으면 수정 비용이 가장 낮다. 배포·운영 이후 발견은 재설계 비용이 크다."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 2,
  "q": "DevSecOps 의 'Shift-left' 를 가장 잘 설명한 것은?",
  "c": [
   "보안 테스트를 운영 단계로 미뤄 출시를 가속",
   "보안팀을 개발팀 왼쪽 조직도로 배치",
   "취약점 수정 책임을 CSP 로 이전",
   "보안 활동을 SDLC 의 초기 단계와 CI/CD 파이프라인에 앞당겨 통합"
  ],
  "a": 3,
  "e": "Shift-left 는 요구·설계·코딩 단계와 자동화 파이프라인에 보안을 내재화하는 것. 테스트를 미루거나 책임을 이전하는 것은 반대 개념."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 2,
  "q": "NIST SP 800-218 SSDF 의 4개 실천 그룹에 해당하지 않는 것은?",
  "c": [
   "Prepare the Organization (PO)",
   "Deploy the Software (DS)",
   "Protect the Software (PS)",
   "Respond to Vulnerabilities (RV)"
  ],
  "a": 1,
  "e": "SSDF 그룹은 PO·PS·PW(Produce Well-Secured Software)·RV. DS 라는 그룹은 없다."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 2,
  "q": "ISO/IEC 27034 에서 조직 전체의 애플리케이션 보안 모범사례·통제 라이브러리를 담는 프레임워크는?",
  "c": [
   "ANF (Application Normative Framework)",
   "ONF (Organization Normative Framework)",
   "ASMP (Application Security Management Process)",
   "ASC (Application Security Control)"
  ],
  "a": 1,
  "e": "ONF 는 조직 수준 정규 프레임워크(1개), ANF 는 개별 앱별로 ONF 에서 선택한 하위 집합. ASC 는 개별 통제, ASMP 는 관리 프로세스."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 3,
  "q": "Which practice BEST supports integrity and traceability of application code and infrastructure-as-code in the cloud?",
  "c": [
   "Running DAST weekly against production",
   "Increasing log retention to seven years",
   "Deploying a WAF in blocking mode",
   "Software configuration management with version control, branch protection and signed commits"
  ],
  "a": 3,
  "e": "Configuration management and versioning provide change traceability and integrity of code artifacts. DAST, log retention and WAF are other controls that don't track code changes."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 3,
  "q": "애자일 팀이 2주 스프린트로 클라우드 앱을 개발한다. 보안 요구사항을 가장 효과적으로 반영하는 방법은?",
  "c": [
   "보안 요구를 사용자 스토리·인수 조건(Definition of Done)에 포함하고 파이프라인 자동 테스트로 검증",
   "출시 직전에 1회 외부 침투 테스트로 일괄 검증",
   "보안 요구사항을 별도 문서로 작성해 프로젝트 종료 시 검토",
   "개발자 재량에 맡기고 운영 중 사고 발생 시 대응"
  ],
  "a": 0,
  "e": "애자일에서는 보안을 백로그·DoD 에 내재화하고 CI/CD 로 지속 검증하는 것이 BEST. 일회성·사후 검토는 반복 개발 속도에 맞지 않는다."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 1,
  "q": "STRIDE 에서 'Tampering' 위협이 직접 위반하는 보안 속성은?",
  "c": [
   "기밀성(Confidentiality)",
   "가용성(Availability)",
   "무결성(Integrity)",
   "부인방지(Non-repudiation)"
  ],
  "a": 2,
  "e": "Tampering=무단 변조 → 무결성. 기밀성은 Information disclosure, 가용성은 DoS, 부인방지는 Repudiation."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 2,
  "q": "Which threat modeling technique ranks threats using Damage, Reproducibility, Exploitability, Affected users and Discoverability?",
  "c": [
   "STRIDE",
   "PASTA",
   "DREAD",
   "ATASM"
  ],
  "a": 2,
  "e": "DREAD is a risk-rating (scoring) model. STRIDE classifies threats, PASTA is a seven-stage risk-centric process, ATASM walks Architecture-Threats-Attack Surfaces-Mitigations."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 2,
  "q": "PASTA 위협 모델링의 첫 단계는?",
  "c": [
   "비즈니스 목표 정의(Define objectives)",
   "공격 모델링(Attack modeling)",
   "취약점 분석(Vulnerability analysis)",
   "애플리케이션 분해(Application decomposition)"
  ],
  "a": 0,
  "e": "PASTA 는 비즈니스 목표 정의 → 기술 범위 정의 → 애플리케이션 분해 → 위협 분석 → 취약점 분석 → 공격 모델링 → 리스크·영향 분석의 7단계."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 3,
  "q": "Which cloud-specific risk is MOST directly associated with a hypervisor flaw allowing one tenant to access another tenant's memory?",
  "c": [
   "Legal and jurisdiction issues",
   "Vendor lock-in",
   "Lack of business continuity planning",
   "Shared technology issues"
  ],
  "a": 3,
  "e": "Multi-tenancy isolation failure in shared infrastructure (hypervisor, CPU caches) is a shared technology issue. The others are real risks but not this scenario."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 3,
  "q": "보안 아키텍트가 마이크로서비스 기반 신규 SaaS 의 위협 모델링을 준비한다. 가장 먼저 할 일은?",
  "c": [
   "DREAD 점수로 위협 우선순위를 매김",
   "데이터 흐름도(DFD)로 구성요소·신뢰 경계·데이터 흐름을 식별",
   "WAF 규칙을 작성",
   "침투 테스트 업체를 선정"
  ],
  "a": 1,
  "e": "위협을 식별·점수화하려면 먼저 시스템을 분해해 신뢰 경계와 흐름을 파악해야 한다(ATASM 의 Architecture 단계도 동일). 점수화·통제·테스트는 그 이후."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 3,
  "q": "로그가 없어 사용자가 '송금을 요청한 적 없다'고 주장할 때 반박할 수 없다. STRIDE 위협과 가장 적절한 대응은?",
  "c": [
   "Spoofing — 비밀번호 복잡도 강화",
   "Repudiation — 전자서명·무결성 보호된 감사 로그",
   "Information disclosure — 저장 데이터 암호화",
   "Elevation of privilege — 관리자 계정 축소"
  ],
  "a": 1,
  "e": "행위 부인은 Repudiation, 대응은 부인방지 통제(서명·변조 방지 감사 로그). 나머지는 다른 위협 범주."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 1,
  "q": "Which testing method analyzes source code without executing it (white-box)?",
  "c": [
   "DAST",
   "Fuzzing",
   "Penetration testing",
   "SAST"
  ],
  "a": 3,
  "e": "SAST is static white-box analysis. DAST, fuzzing and penetration testing target a running system."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 2,
  "q": "실행 중인 애플리케이션 내부에 에이전트를 설치해, 기능 테스트 트래픽이 흐르는 동안 취약점을 탐지하는 기법은?",
  "c": [
   "IAST",
   "SAST",
   "SCA",
   "DAST"
  ],
  "a": 0,
  "e": "IAST 는 런타임 계측(instrumentation)으로 내부 흐름을 관찰해 오탐이 적다. SAST 는 미실행, SCA 는 구성요소 분석, DAST 는 외부 블랙박스."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 2,
  "q": "개발팀이 사용하는 오픈소스 라이브러리 중 GPL 라이선스 충돌과 알려진 CVE 를 함께 식별하려 한다. 적합한 도구는?",
  "c": [
   "DAST",
   "WAF",
   "SCA (Software Composition Analysis)",
   "DAM"
  ],
  "a": 2,
  "e": "SCA 는 의존성의 취약점과 라이선스를 동시에 식별하고 SBOM 을 산출한다. DAST 는 런타임, WAF·DAM 은 운영 보호 장치."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 3,
  "q": "A team wants security scanning to automatically stop insecure builds from reaching production. What is the BEST approach?",
  "c": [
   "Run a manual penetration test once a year",
   "Rely on the CSP's infrastructure vulnerability scans",
   "Integrate SAST/SCA into the CI/CD pipeline with quality gates that fail the build on critical findings",
   "Enable verbose application logging"
  ],
  "a": 2,
  "e": "Automated scans with pipeline quality gates enforce security before deployment. Annual pentests are too infrequent, CSP scans cover CSP layers, logging is detective."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 3,
  "q": "CSP 의 IaaS 위에서 운영 중인 자사 앱에 침투 테스트를 하려 한다. 보안 관리자가 테스트 착수 전 가장 먼저 확인할 것은?",
  "c": [
   "CSP 의 침투 테스트 정책·허용 범위와 사전 승인 요건",
   "테스트 도구의 라이선스 가격",
   "테스트 결과 보고서 양식",
   "개발팀의 휴가 일정"
  ],
  "a": 0,
  "e": "공유 인프라에서 무단 테스트는 약관 위반·타 테넌트 영향 우려가 있어 CSP 정책 확인·승인이 FIRST. 나머지는 부차적."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 2,
  "q": "QA(Quality Assurance)와 테스트(QC)의 관계로 옳은 것은?",
  "c": [
   "QA 는 운영 단계에서만 수행",
   "테스트가 QA 를 포함하는 상위 개념",
   "QA 는 보안과 무관한 기능 품질만 다룸",
   "QA 는 프로세스로 결함을 예방하고, 테스트는 산출물에서 결함을 발견"
  ],
  "a": 3,
  "e": "QA 는 표준·프로세스 준수를 통한 예방 활동이며 테스트(품질 통제)는 그 일부 수단. 보안 품질도 QA 대상."
 },
 {
  "s": "s4",
  "t": "검증된 SW·공급망",
  "d": 2,
  "q": "소프트웨어 공급망 보안을 위해 공급사가 제공하는 패키지의 무결성과 진본성(authenticity)을 확인하는 가장 직접적인 방법은?",
  "c": [
   "공급사의 매출 규모 확인",
   "코드 서명(digital signature) 검증과 해시 비교",
   "패키지 파일 크기 확인",
   "공급사 홈페이지의 보안 인증 로고 확인"
  ],
  "a": 1,
  "e": "서명 검증은 진본성, 해시는 무결성을 보장. 매출·크기·로고는 기술적 검증이 아니다."
 },
 {
  "s": "s4",
  "t": "검증된 SW·공급망",
  "d": 1,
  "q": "소프트웨어를 구성하는 컴포넌트·버전·의존 관계를 기계가 읽을 수 있게 나열한 목록은?",
  "c": [
   "SLA",
   "SBOM",
   "CMDB",
   "RACI"
  ],
  "a": 1,
  "e": "SBOM(Software Bill of Materials). SLA 는 서비스 수준 계약, CMDB 는 형상 DB, RACI 는 책임 매트릭스."
 },
 {
  "s": "s4",
  "t": "검증된 SW·공급망",
  "d": 3,
  "q": "What is the MOST important consideration when selecting an open-source component for a cloud application?",
  "c": [
   "Whether it has the most GitHub stars",
   "Whether it is written in the same language as the UI",
   "Whether it is free of charge",
   "Its known vulnerabilities, license terms, provenance and maintenance activity"
  ],
  "a": 3,
  "e": "Validated open-source software requires assessing security posture, license, integrity of source and community maintenance. Popularity and cost are not security criteria."
 },
 {
  "s": "s4",
  "t": "검증된 SW·공급망",
  "d": 3,
  "q": "핵심 서비스에 사용 중인 서드파티 라이브러리에 원격 코드 실행 제로데이가 공개됐다. 보안 관리자가 가장 먼저 해야 할 일은?",
  "c": [
   "SBOM·SCA 결과로 해당 라이브러리를 사용하는 자산과 버전을 식별",
   "모든 애플리케이션을 즉시 영구 중단",
   "라이브러리 공급사와의 계약 해지 통보",
   "다음 분기 침투 테스트 일정 조정"
  ],
  "a": 0,
  "e": "영향 범위 파악(자산 식별)이 FIRST — 그래야 패치·완화(WAF 가상 패치 등) 우선순위를 정할 수 있다. 전면 중단·계약 해지는 과잉, 일정 조정은 늦다."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 1,
  "q": "XML 기반 SOAP 웹서비스에 대해 스키마 검증과 XXE 공격 차단을 수행하는 장치는?",
  "c": [
   "로드밸런서",
   "DAM",
   "XML 방화벽",
   "IDS"
  ],
  "a": 2,
  "e": "XML 방화벽은 XML 메시지를 파싱·검증한다. 로드밸런서는 분산, DAM 은 DB 모니터링, IDS 는 일반 침입 탐지."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 2,
  "q": "DBA 의 비정상 대량 SELECT 와 권한 남용을 실시간 탐지하려 할 때 가장 적합한 보조 보안 컴포넌트는?",
  "c": [
   "WAF",
   "API 게이트웨이",
   "DAM (Database Activity Monitoring)",
   "XML 방화벽"
  ],
  "a": 2,
  "e": "DAM 은 DB 에 대한 쿼리·관리자 활동을 실시간 모니터링·경보. WAF·API 게이트웨이·XML 방화벽은 앱 진입 트래픽 대상이라 내부 DBA 행위를 보지 못한다."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 2,
  "q": "Which component provides a single entry point for microservices, enforcing authentication, rate limiting and request routing?",
  "c": [
   "API gateway",
   "Database Activity Monitor",
   "Hardware Security Module",
   "Honeypot"
  ],
  "a": 0,
  "e": "An API gateway centralizes authentication, throttling, routing and logging for APIs. DAM monitors DBs, HSM protects keys, honeypots are decoys."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 3,
  "q": "Kubernetes 로 운영하는 컨테이너 앱의 보안을 강화하려 한다. 가장 효과적인 조합은?",
  "c": [
   "모든 Pod 에 privileged 권한 부여 후 호스트 방화벽 강화",
   "단일 대형 컨테이너로 통합해 관리 포인트 축소",
   "컨테이너 이미지를 매번 latest 태그로 배포",
   "이미지 취약점 스캔·서명, 비루트·최소 권한 Pod, 네트워크 정책, 외부 시크릿 저장소 연동"
  ],
  "a": 3,
  "e": "공급망(이미지)·런타임 권한·네트워크 분리·비밀 관리를 함께 적용하는 것이 심층 방어. privileged·단일 대형·latest 태그는 위험을 키운다."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 3,
  "q": "A critical SQL injection flaw was found in a production web app, but the code fix will take three weeks. What is the BEST interim control?",
  "c": [
   "Move the database to another region",
   "Apply a virtual patch rule on the WAF",
   "Increase the instance size",
   "Disable TLS to inspect traffic more easily"
  ],
  "a": 1,
  "e": "A WAF virtual patch blocks the attack pattern until the code is fixed (compensating control). Region moves and scaling do not address injection; disabling TLS harms confidentiality."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 1,
  "q": "SAML 2.0 에서 사용자를 인증하고 서명된 어서션을 발급하는 주체는?",
  "c": [
   "SP (Service Provider)",
   "IdP (Identity Provider)",
   "CASB",
   "RP 의 데이터베이스"
  ],
  "a": 1,
  "e": "IdP 가 인증·어서션 발급, SP 는 어서션을 신뢰해 서비스 제공."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 2,
  "q": "OAuth 2.0 과 OpenID Connect 의 관계로 옳은 것은?",
  "c": [
   "OAuth 2.0 은 OIDC 위에 인가 계층을 추가한 것이다",
   "둘 다 XML 어서션을 사용한다",
   "OIDC 는 SAML 의 다른 이름이다",
   "OIDC 는 OAuth 2.0 위에 인증 계층을 추가해 ID Token 을 발급한다"
  ],
  "a": 3,
  "e": "OAuth 2.0=인가 위임, OIDC=그 위 인증(ID Token, JWT). XML 어서션은 SAML."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 2,
  "q": "Which pairing of MFA factors is a TRUE multi-factor combination?",
  "c": [
   "Password plus a hardware security key",
   "Password plus a security question",
   "PIN plus a password",
   "Two different passwords"
  ],
  "a": 0,
  "e": "MFA needs factors from different categories (know/have/are). Password + hardware key = know + have. The others are all 'something you know'."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 2,
  "q": "직원들이 승인되지 않은 SaaS 를 사용하는 섀도 IT 를 파악하고 업로드 DLP 를 실시간 적용하려 한다. 적합한 CASB 배치는?",
  "c": [
   "API 기반 out-of-band 모드만 사용",
   "DAM 에이전트",
   "포워드 프록시(Forward proxy) 모드",
   "SAML IdP 단독"
  ],
  "a": 2,
  "e": "관리되지 않은 SaaS 까지 인라인 통제하려면 사용자 측 트래픽을 경유시키는 포워드 프록시. API 모드는 승인된 SaaS 의 사후 점검, DAM·IdP 는 목적이 다르다."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 3,
  "q": "개발자가 실수로 클라우드 액세스 키를 공개 Git 저장소에 커밋했다. 가장 먼저 해야 할 조치는?",
  "c": [
   "커밋 히스토리에서 파일을 삭제",
   "저장소를 비공개로 전환",
   "해당 키를 즉시 폐기(revoke)·교체하고 사용 이력을 조사",
   "개발자에게 보안 교육 이수를 지시"
  ],
  "a": 2,
  "e": "공개된 순간 수집됐을 수 있으므로 키 무효화가 FIRST. 히스토리 삭제·비공개 전환은 노출된 키를 무력화하지 못하고, 교육은 재발 방지 단계."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 3,
  "q": "A company federates its workforce identities to 40 SaaS applications through a single IdP. What is the MOST important control to reduce the risk introduced by SSO?",
  "c": [
   "Enforce phishing-resistant MFA and strong monitoring at the IdP",
   "Disable logging at the IdP to improve performance",
   "Allow each SaaS to keep separate local passwords as backup for all users",
   "Extend session lifetime to 30 days"
  ],
  "a": 0,
  "e": "SSO concentrates risk on the IdP; strong MFA and monitoring there is the key control. Disabling logs, parallel local passwords and long sessions increase risk."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 1,
  "q": "암호 키를 변조 방지 하드웨어 안에서 생성·보관하며 FIPS 140 검증을 받는 장치는?",
  "c": [
   "TPM",
   "HSM",
   "SIEM",
   "NSG"
  ],
  "a": 1,
  "e": "HSM 은 키 관리 전용 변조 방지 장치. TPM 은 메인보드 신뢰 칩, SIEM 은 로그 분석, NSG 는 가상 방화벽."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 2,
  "q": "호스트 부팅 구성요소의 해시를 기록해 원격 증명(attestation)에 사용하는 칩은?",
  "c": [
   "HSM",
   "NIC",
   "BMC",
   "TPM"
  ],
  "a": 3,
  "e": "TPM 은 PCR 에 측정값을 기록해 measured boot·attestation 을 지원. HSM 은 키 서비스, NIC·BMC 는 네트워크·관리 컨트롤러."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 2,
  "q": "Which hypervisor type is generally preferred in cloud data centers because it has a smaller attack surface?",
  "c": [
   "Type 1 (bare-metal)",
   "Type 2 (hosted)",
   "Container runtime",
   "Application sandbox"
  ],
  "a": 0,
  "e": "Type 1 runs directly on hardware without a host OS. Type 2 inherits the host OS attack surface. Container runtimes and sandboxes are not hypervisors."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 3,
  "q": "Which configuration BEST reflects the 'secure by default' principle for newly provisioned cloud hosts?",
  "c": [
   "All ports open initially, closed later as needed",
   "Management console publicly reachable for convenience",
   "Unnecessary services disabled and default credentials removed before delivery",
   "Debug mode left enabled in production"
  ],
  "a": 2,
  "e": "Secure by default means the initial state is hardened. Open ports, public consoles and debug mode are insecure defaults."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 3,
  "q": "게스트 OS 에 가상화 도구(guest tools)를 설치할 때 보안 관리자가 가장 중요하게 확인할 사항은?",
  "c": [
   "설치 파일의 크기",
   "설치 시간이 업무 외 시간인지",
   "신뢰된 출처의 최신 패치 버전인지, 공유 폴더 등 불필요 기능이 비활성인지",
   "게스트 OS 화면 해상도 지원"
  ],
  "a": 2,
  "e": "guest tools 는 호스트-게스트 간 통로가 될 수 있어 출처·패치·기능 최소화가 핵심. 나머지는 운영 편의 문제."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 2,
  "q": "관리 평면(Management plane) 보호 대책으로 가장 적절한 것은?",
  "c": [
   "전용 관리망 분리, 관리자 MFA, 모든 관리 API 호출 로깅",
   "관리자 계정 하나를 팀 전체가 공유",
   "관리 콘솔 세션 타임아웃 해제",
   "관리 API 로그를 비용 절감 위해 비활성화"
  ],
  "a": 0,
  "e": "관리 평면 침해는 전체 테넌트에 영향 — 분리·강한 인증·감사 로깅이 필수."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 1,
  "q": "관리자가 내부 서버에 접근하기 전 반드시 거치도록 강화·감사가 적용된 단일 중계 서버는?",
  "c": [
   "허니팟",
   "프록시 캐시",
   "DHCP 서버",
   "점프박스(Jumpbox)/배스천 호스트"
  ],
  "a": 3,
  "e": "점프박스/배스천은 관리 접근을 집중·감사한다. 허니팟은 미끼, 프록시 캐시·DHCP 는 다른 기능."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 2,
  "q": "DNSSEC 이 제공하는 보안 속성은?",
  "c": [
   "DNS 질의의 기밀성(암호화)",
   "DNS 응답의 출처 인증과 무결성",
   "DNS 서버의 DDoS 내성",
   "사용자 인증"
  ],
  "a": 1,
  "e": "DNSSEC 은 RRSIG 서명으로 출처·무결성 보장. 암호화는 DoH/DoT, DDoS·사용자 인증과 무관."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 3,
  "q": "A security review finds an NSG rule allowing inbound RDP (TCP 3389) from 0.0.0.0/0 to production VMs. What should be done FIRST?",
  "c": [
   "Increase VM size to absorb brute-force attempts",
   "Restrict or remove the rule and route admin access through a bastion/VPN with MFA",
   "Rename the administrator account only",
   "Wait for the next quarterly audit"
  ],
  "a": 1,
  "e": "Remove the internet-exposed management port and force access via bastion/VPN with MFA. Scaling, renaming or waiting leave the exposure open."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 2,
  "q": "OS 하드닝 프로세스의 올바른 흐름은?",
  "c": [
   "교정 → 베이스라인 → 폐기",
   "모니터링 → 베이스라인 삭제 → 재설치",
   "패치 중단 → 베이스라인 → 모니터링",
   "베이스라인(예: CIS Benchmark) 적용 → 드리프트 모니터링 → 교정"
  ],
  "a": 3,
  "e": "아웃라인 5.2: baselines → monitoring → remediation."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 2,
  "q": "클러스터 호스트의 펌웨어를 업데이트하기 전에 실행 중 VM 을 다른 호스트로 옮기고 신규 배치를 막는 기능은?",
  "c": [
   "유지보수 모드(Maintenance mode)",
   "HA 재시작",
   "스냅샷",
   "스토리지 씬 프로비저닝"
  ],
  "a": 0,
  "e": "maintenance mode 는 VM 을 비우고 스케줄링에서 제외한다. HA 는 장애 후 재시작, 스냅샷은 시점 복사."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 3,
  "q": "클라우드 IaaS 에서 수천 대 VM 의 패치를 효율적이고 일관되게 적용하는 가장 좋은 방법은?",
  "c": [
   "각 VM 에 원격 접속해 수동 패치",
   "패치를 연 1회 일괄 적용",
   "골든 이미지를 갱신해 불변(immutable) 방식으로 재배포하고 변경관리로 통제",
   "운영 VM 에서 직접 패치 테스트"
  ],
  "a": 2,
  "e": "이미지 기반 재배포는 일관성·추적성을 확보한다. 수동·연 1회·운영 직접 테스트는 위험·비효율."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 1,
  "q": "다음 중 하드웨어 모니터링 항목에 해당하지 않는 것은?",
  "c": [
   "디스크 상태",
   "팬 속도",
   "사용자 로그인 실패 횟수",
   "CPU 온도"
  ],
  "a": 2,
  "e": "아웃라인 5.2 하드웨어 모니터링: 디스크·CPU·팬 속도·온도. 로그인 실패는 보안 이벤트 모니터링."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 1,
  "q": "IT 서비스 관리 시스템(SMS)에 대한 요구사항을 규정한 조직 인증용 국제 표준은?",
  "c": [
   "ISO/IEC 20000-1",
   "ITIL 4",
   "ISO/IEC 27002",
   "COBIT 2019"
  ],
  "a": 0,
  "e": "ISO/IEC 20000-1 은 SMS 인증 표준. ITIL 은 모범사례, 27002 는 보안 통제 지침, COBIT 은 거버넌스 프레임워크."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "동일 원인으로 장애가 반복된다. 근본 원인을 찾아 제거하는 ITSM 프로세스는?",
  "c": [
   "인시던트 관리",
   "서비스 요청 관리",
   "릴리스 관리",
   "문제 관리(Problem management)"
  ],
  "a": 3,
  "e": "반복 인시던트의 근본 원인 분석은 문제 관리. 인시던트 관리는 신속 복구."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "Which type of change is low-risk, pre-authorized and follows a documented procedure?",
  "c": [
   "Normal change",
   "Standard change",
   "Emergency change",
   "Major change"
  ],
  "a": 1,
  "e": "Standard changes are pre-authorized. Normal changes require assessment and authorization; emergency changes use an expedited path."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "Which ITSM process maintains information about configuration items (CIs) and their relationships, typically in a CMDB?",
  "c": [
   "Capacity management",
   "Configuration management",
   "Problem management",
   "Service-level management"
  ],
  "a": 1,
  "e": "Configuration management maintains CI data and relationships (CMDB) used for impact analysis. The others use CMDB data but don't own it."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "COSO 내부통제 프레임워크의 5개 구성요소에 해당하지 않는 것은?",
  "c": [
   "통제 환경(Control environment)",
   "위험 평가(Risk assessment)",
   "모니터링 활동(Monitoring activities)",
   "침투 테스트(Penetration testing)"
  ],
  "a": 3,
  "e": "COSO 구성요소: 통제 환경·위험 평가·통제 활동·정보와 의사소통·모니터링 활동. 침투 테스트는 기술 활동."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "서비스 제공자와 고객 간 서비스 목표를 합의·측정·보고하는 프로세스는?",
  "c": [
   "서비스 수준 관리(Service-level management)",
   "가용성 관리",
   "용량 관리",
   "배포 관리"
  ],
  "a": 0,
  "e": "SLM 은 SLA 합의·측정·검토. 가용성·용량 관리는 SLA 목표 달성을 지원하는 하위 영역."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 3,
  "q": "CSP 가 고객 영향이 있는 하이퍼바이저 패치를 계획한다. 변경관리 관점에서 가장 적절한 순서는?",
  "c": [
   "즉시 패치 → 장애 발생 시 고객 통지",
   "고객 통지 → 승인 없이 배포 → CMDB 갱신 생략",
   "CMDB 로 영향 분석 → 변경 승인 → 고객 사전 통지 → 유지보수 모드로 배포 → 사후 검토",
   "패치 보류 후 다음 해 일괄 적용"
  ],
  "a": 2,
  "e": "영향 분석·승인·통지·통제된 배포·검토가 변경관리 원칙. 사후 통지·무승인·장기 보류는 리스크."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "Which statement about ITIL 4 release and deployment is CORRECT?",
  "c": [
   "Release and deployment are always the same activity",
   "Deployment management approves changes",
   "Deployment moves components to live environments; release makes new or changed services available for use",
   "Release management restores service after an incident"
  ],
  "a": 2,
  "e": "ITIL 4 separates deployment (moving components) from release (making services available), enabling dark launches. Approval is change enablement; restoration is incident management."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 1,
  "q": "디지털 증거의 식별·수집·획득·보존을 다루는 국제 표준은?",
  "c": [
   "ISO/IEC 27037",
   "ISO/IEC 27042",
   "ISO/IEC 27050",
   "ISO/IEC 27018"
  ],
  "a": 0,
  "e": "27037 은 초동 처리. 27042 분석·해석, 27050 eDiscovery, 27018 퍼블릭 클라우드 PII 보호."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 3,
  "q": "포렌식 수집 시 휘발성 순서(Order of volatility)에 따라 가장 먼저 수집할 대상은?",
  "c": [
   "디스크 이미지",
   "백업 테이프",
   "원격 아카이브 로그",
   "메모리(RAM) 내용"
  ],
  "a": 3,
  "e": "휘발성이 높은 것부터: 레지스터·캐시·메모리 → 디스크 → 원격·아카이브."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "During cloud forensic acquisition, how should the investigator demonstrate that the evidence copy is identical to the original?",
  "c": [
   "Compare file sizes only",
   "Compute and record cryptographic hashes of the original and the copy",
   "Have the CSP verbally confirm",
   "Take screenshots of the directory listing"
  ],
  "a": 1,
  "e": "Matching cryptographic hashes (e.g., SHA-256), recorded in the chain of custody, prove integrity. Sizes, verbal assurance and screenshots are insufficient."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 3,
  "q": "SaaS 를 사용하는 기업이 내부자 정보 유출을 조사하려 한다. 가장 현실적인 증거 확보 방안은?",
  "c": [
   "CSP 데이터센터에 방문해 서버 디스크를 직접 이미징",
   "계약에 근거해 CSP 에 감사 로그 제공을 요청하고 SaaS 관리 API 로그를 보존",
   "SaaS 계정을 삭제해 추가 유출 차단",
   "다른 테넌트 데이터까지 포함해 전체 스토리지 사본을 요구"
  ],
  "a": 1,
  "e": "SaaS 는 고객 수집 범위가 좁아 CSP 협조·로그가 핵심. 물리 접근 불가, 계정 삭제는 증거 훼손, 타 테넌트 데이터 요구는 불가·위법."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "What is the PRIMARY purpose of maintaining a chain of custody?",
  "c": [
   "To speed up evidence deletion",
   "To manage forensic tool licenses",
   "To allow anyone to freely view evidence",
   "To document continuous handling of evidence so its integrity and admissibility can be demonstrated"
  ],
  "a": 3,
  "e": "Chain of custody records who handled evidence, when, where and how, supporting admissibility in court."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "IaaS VM 침해 사고 시 증거 보존을 위해 격리 전에 우선 수행할 조치로 가장 적절한 것은?",
  "c": [
   "메모리 덤프와 디스크 스냅샷을 확보하고 해시를 기록",
   "VM 을 즉시 삭제",
   "VM 을 재부팅해 악성 프로세스 종료",
   "로그를 정리해 저장 공간 확보"
  ],
  "a": 0,
  "e": "삭제·재부팅·로그 정리는 휘발성 증거를 파괴. 스냅샷·메모리 확보 후 격리."
 },
 {
  "s": "s5",
  "t": "이해관계자 커뮤니케이션",
  "d": 2,
  "q": "데이터 침해 발생 시 대외 커뮤니케이션 원칙으로 가장 적절한 것은?",
  "c": [
   "가장 먼저 알게 된 직원이 SNS 에 공지",
   "사실 확인 전 추정 원인을 상세히 공개",
   "사전 승인된 커뮤니케이션 계획에 따라 지정 대변인이 법무 검토 후 발표",
   "규제기관 통지는 소송 종결 후 진행"
  ],
  "a": 2,
  "e": "계획·지정 대변인·법무 검토가 원칙. 무분별한 공개·추정 정보·통지 지연은 법적 리스크."
 },
 {
  "s": "s5",
  "t": "이해관계자 커뮤니케이션",
  "d": 2,
  "q": "Under GDPR, within what timeframe should a controller notify the supervisory authority of a personal data breach, where feasible?",
  "c": [
   "24 hours after the breach occurs",
   "30 days after investigation ends",
   "72 hours after becoming aware",
   "Only when the regulator asks"
  ],
  "a": 2,
  "e": "GDPR Art.33: without undue delay and, where feasible, not later than 72 hours after becoming aware."
 },
 {
  "s": "s5",
  "t": "이해관계자 커뮤니케이션",
  "d": 1,
  "q": "CCSP 아웃라인 5.5 가 명시한 커뮤니케이션 대상에 포함되지 않는 것은?",
  "c": [
   "경쟁사의 마케팅 부서",
   "공급업체(Vendors)",
   "규제기관(Regulators)",
   "파트너(Partners)"
  ],
  "a": 0,
  "e": "대상: Vendors·Customers·Partners·Regulators·Other stakeholders."
 },
 {
  "s": "s5",
  "t": "이해관계자 커뮤니케이션",
  "d": 3,
  "q": "CSP 가 대규모 장애를 겪는 중 고객 문의가 폭주한다. CSP 관점에서 BEST 커뮤니케이션 방안은?",
  "c": [
   "원인 확정 전까지 침묵",
   "개별 고객에게 서로 다른 설명 제공",
   "SLA 크레딧 지급을 거부한다고 먼저 공지",
   "상태 페이지로 영향 범위·진행 상황·다음 업데이트 시각을 주기적으로 공지"
  ],
  "a": 3,
  "e": "투명하고 일관된 정기 공지가 신뢰를 유지. 침묵·불일치·방어적 공지는 역효과."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 1,
  "q": "여러 소스의 로그를 수집·정규화·상관 분석해 경보를 생성하는 시스템은?",
  "c": [
   "DAM",
   "SIEM",
   "HSM",
   "CMDB"
  ],
  "a": 1,
  "e": "SIEM 은 로그 상관 분석. DAM 은 DB 모니터링, HSM 은 키, CMDB 는 형상 정보."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 2,
  "q": "NIST SP 800-61 Rev.2 의 사고 대응 생명주기 순서로 옳은 것은?",
  "c": [
   "탐지 → 준비 → 복구 → 봉쇄",
   "준비 → 탐지·분석 → 봉쇄·근절·복구 → 사후 활동",
   "봉쇄 → 탐지 → 준비 → 사후 활동",
   "준비 → 복구 → 탐지 → 봉쇄"
  ],
  "a": 1,
  "e": "Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 2,
  "q": "SIEM 경보에 대해 정해진 플레이북으로 계정 잠금·IP 차단 등을 자동 실행하는 기술은?",
  "c": [
   "DLP",
   "CASB",
   "WAF",
   "SOAR"
  ],
  "a": 3,
  "e": "SOAR(Security Orchestration, Automation and Response). DLP·CASB·WAF 는 개별 통제."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 2,
  "q": "What is the PRIMARY difference between a vulnerability assessment and a penetration test?",
  "c": [
   "A penetration test attempts to exploit vulnerabilities to validate impact; an assessment identifies and lists them",
   "A vulnerability assessment always requires social engineering",
   "A penetration test is always fully automated",
   "There is no difference"
  ],
  "a": 0,
  "e": "Assessment = identify/enumerate; pentest = exploit to prove impact. Social engineering is optional; pentests are largely manual."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 2,
  "q": "Which pair of standards is used to represent and exchange cyber threat intelligence in machine-readable form?",
  "c": [
   "SAML / OIDC",
   "SPDX / CycloneDX",
   "STIX / TAXII",
   "SNMP / Syslog"
  ],
  "a": 2,
  "e": "STIX describes threat information, TAXII transports it. SAML/OIDC are identity, SPDX/CycloneDX are SBOM formats, SNMP/Syslog are management/log transport."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 3,
  "q": "SOC 가 클라우드 워크로드의 측면 이동(lateral movement)을 놓치는 원인을 분석했더니, 정적 임계치 규칙만 운영 중이었다. 가장 효과적인 개선책은?",
  "c": [
   "경보 임계치를 높여 오탐 감소",
   "로그 보존 기간 단축",
   "UEBA·AI 기반 행위 이상 탐지를 SIEM 에 추가하고 클라우드 흐름 로그를 수집",
   "허니팟을 모두 제거"
  ],
  "a": 2,
  "e": "행위 기반 지능형 모니터링과 흐름 로그로 가시성 확보. 임계치 상향·보존 단축·허니팟 제거는 탐지력 저하."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 3,
  "q": "클라우드 IR 준비(Preparation) 단계에서 고객이 반드시 확보해야 할 것은?",
  "c": [
   "CSP 와의 사고 연락 체계·역할 분담·로그 접근권을 계약과 절차로 명시",
   "모든 CSP 직원의 개인 연락처",
   "CSP 데이터센터 출입 카드",
   "CSP 소스코드 열람권"
  ],
  "a": 0,
  "e": "공유 책임 모델에서 IR 은 CSP 협력이 필수 → 계약·절차로 사전 확보. 나머지는 비현실적."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 2,
  "q": "미국 관할 클라우드 사업자가 해외에 저장한 데이터에 대해서도 미국 영장에 따라 제출하도록 한 법은?",
  "c": [
   "HIPAA",
   "CLOUD Act",
   "FERPA",
   "SOX"
  ],
  "a": 1,
  "e": "CLOUD Act(2018). HIPAA 는 의료정보, FERPA 는 교육기록, SOX 는 재무보고."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 3,
  "q": "Which situation BEST illustrates 'conflicting international legislation' for a cloud customer?",
  "c": [
   "Two departments use different SaaS tools",
   "A CSP raises its prices in two regions",
   "An auditor requests SOC 2 and ISO 27001 reports",
   "A US court orders a US-based CSP to produce EU personal data that GDPR restricts from transfer"
  ],
  "a": 3,
  "e": "A legal obligation in one jurisdiction contradicting another (CLOUD Act vs GDPR) is conflicting legislation. The others are operational or commercial issues."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 1,
  "q": "다음 중 '계약상(contractual)' 보호 의무의 대표 사례는?",
  "c": [
   "PCI DSS",
   "HIPAA",
   "GDPR",
   "FERPA"
  ],
  "a": 0,
  "e": "PCI DSS 는 카드 브랜드와 계약에 따른 표준. 나머지는 법률."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 3,
  "q": "다국적 기업이 EU 고객 데이터를 미국 본사 CSP 에 저장하려 한다. 법적 리스크를 줄이는 BEST 방안은?",
  "c": [
   "미국 리전에 저장하고 별도 조치 없이 사용",
   "데이터를 압축해 저장",
   "EU 리전 저장, 고객 관리 키(BYOK/HYOK), 법 집행 요청 통지 조항과 SCC 등 적법 이전 장치를 결합",
   "CSP 의 마케팅 자료만 신뢰"
  ],
  "a": 2,
  "e": "저장 위치·키 통제·계약·이전 메커니즘을 결합한 다층 대응이 BEST. 나머지는 법적 대응이 아니다."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 2,
  "q": "미국의 의료정보 보호법 HIPAA 를 강화하고 침해 통지 요건을 도입한 2009년 법은?",
  "c": [
   "GLBA",
   "CCPA",
   "HITECH Act",
   "NERC CIP"
  ],
  "a": 2,
  "e": "HITECH(Health Information Technology for Economic and Clinical Health) Act. GLBA 는 금융, CCPA 는 캘리포니아 소비자, NERC CIP 는 전력 인프라."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 1,
  "q": "eDiscovery 지침을 제공하는 ISO/IEC 표준 시리즈는?",
  "c": [
   "ISO/IEC 27050",
   "ISO/IEC 27037",
   "ISO/IEC 27017",
   "ISO/IEC 27036"
  ],
  "a": 0,
  "e": "27050 = 전자증거개시. 27037 수집·보존, 27017 클라우드 통제, 27036 공급자 관계."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 2,
  "q": "소송이 합리적으로 예상될 때 관련 데이터의 삭제·변경을 중단시키는 조치는?",
  "c": [
   "데이터 마스킹",
   "크립토 쉬레딩",
   "데이터 아카이빙 후 삭제",
   "법적 보존(Legal hold)"
  ],
  "a": 3,
  "e": "legal hold 는 보존 의무 이행. 마스킹·쉬레딩·삭제는 증거 훼손 위험."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 3,
  "q": "In a multi-tenant SaaS, what is the MOST significant eDiscovery challenge?",
  "c": [
   "Choosing the font of the production documents",
   "Collecting relevant data without exposing other tenants' data",
   "Lack of internet connectivity",
   "Excessive physical access to CSP servers"
  ],
  "a": 1,
  "e": "Scoping collection to the customer's data in shared infrastructure is the key challenge. Physical access is generally unavailable, not excessive."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 2,
  "q": "포렌식 조사 방법의 적합성·충분성 보증을 다루는 표준은?",
  "c": [
   "ISO/IEC 27042",
   "ISO/IEC 27041",
   "ISO/IEC 27043",
   "ISO/IEC 27037"
  ],
  "a": 1,
  "e": "27041 = assurance for suitability and adequacy of investigative method. 27042 분석, 27043 프로세스, 27037 수집."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 3,
  "q": "클라우드 고객이 향후 소송·조사에 대비해 계약 단계에서 가장 먼저 확보해야 할 것은?",
  "c": [
   "CSP 엔지니어의 개인 연락처",
   "가장 저렴한 스토리지 요금제",
   "CSP 의 홍보 담당자 승인",
   "CSP 의 legal hold·로그 보존·데이터 제공 지원 의무와 기한을 명시한 조항"
  ],
  "a": 3,
  "e": "보존·제공 능력을 계약으로 확보해야 eDiscovery 의무 이행 가능."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 2,
  "q": "ISO/IEC 27043 의 범위로 옳은 것은?",
  "c": [
   "사고 조사의 원칙과 프로세스",
   "퍼블릭 클라우드 PII 보호",
   "공급자 관계 정보보안",
   "클라우드 보안 통제"
  ],
  "a": 0,
  "e": "27043 = incident investigation principles and processes. 27018·27036·27017 은 다른 범위."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 1,
  "q": "GDPR 에서 개인정보 삭제를 요구할 수 있는 권리(잊힐 권리)를 규정한 조항은?",
  "c": [
   "제15조",
   "제20조",
   "제17조",
   "제33조"
  ],
  "a": 2,
  "e": "Art.17 Right to erasure. 15 열람, 20 이동권, 33 감독기관 침해 통지."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 2,
  "q": "퍼블릭 클라우드 CSP 가 PII 처리자로서 따르는 개인정보 보호 실천 지침은?",
  "c": [
   "ISO/IEC 27017",
   "ISO/IEC 20000-1",
   "ISO/IEC 27018",
   "ISO 22301"
  ],
  "a": 2,
  "e": "27018 은 클라우드 PII 처리자 지침. 27017 은 클라우드 보안 통제, 20000-1 은 서비스관리, 22301 은 BCMS."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 2,
  "q": "Which standard extends ISO/IEC 27001 and 27002 with requirements for a Privacy Information Management System (PIMS)?",
  "c": [
   "ISO/IEC 27701",
   "ISO/IEC 27018",
   "ISO/IEC 27050",
   "ISO 31000"
  ],
  "a": 0,
  "e": "ISO/IEC 27701 is the PIMS extension. 27018 is a code of practice for cloud PII processors, 27050 eDiscovery, 31000 risk management."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 2,
  "q": "캐나다의 민간 부문 개인정보 보호법은?",
  "c": [
   "FERPA",
   "DPDP Act",
   "HIPAA",
   "PIPEDA"
  ],
  "a": 3,
  "e": "PIPEDA(Personal Information Protection and Electronic Documents Act). FERPA 미국 교육, DPDP 인도, HIPAA 미국 의료."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 2,
  "q": "When is a DPIA mandatory under GDPR?",
  "c": [
   "For every database query",
   "When processing is likely to result in a high risk to the rights and freedoms of individuals",
   "Only after a breach has occurred",
   "Only for processing outside the EU"
  ],
  "a": 1,
  "e": "Art.35 requires a DPIA for likely high-risk processing, before processing begins. It is not per query, post-breach, or location-only."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 3,
  "q": "신규 클라우드 기반 고객 행동 분석 서비스를 기획 중이다. 개인정보 보호 관점에서 가장 먼저 수행할 것은?",
  "c": [
   "서비스 출시 후 민원 발생 시 대응",
   "PIA(DPIA)로 처리 목적·데이터 흐름·위험을 평가하고 설계에 통제를 반영",
   "CSP 의 ISO 27001 인증서만 확인",
   "모든 데이터를 무기한 보관하도록 설계"
  ],
  "a": 1,
  "e": "Privacy by design — 설계 전 영향평가가 FIRST. 사후 대응·인증서 확인만으로는 처리 위험을 평가하지 못하고, 무기한 보관은 보관 제한 원칙 위반."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 2,
  "q": "PHI(Protected Health Information)를 처리하는 CSP 가 미국 의료기관과 체결해야 하는 계약은?",
  "c": [
   "NDA",
   "SOW",
   "MSA 만으로 충분",
   "BAA (Business Associate Agreement)"
  ],
  "a": 3,
  "e": "HIPAA 는 비즈니스 어소시에이트와 BAA 체결을 요구."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 1,
  "q": "AICPA 의 SOC 보고서 근거가 되는 인증 업무 기준은?",
  "c": [
   "SSAE 18",
   "ISAE 3402",
   "ISO/IEC 27001",
   "COBIT 2019"
  ],
  "a": 0,
  "e": "SSAE 18. ISAE 3402 는 IAASB 국제 기준, 27001 은 ISMS, COBIT 은 거버넌스 프레임워크."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "CSP 의 보안 통제가 1년간 실제로 효과적으로 운영되었는지 확인하려면 어떤 보고서를 요청해야 하는가?",
  "c": [
   "SOC 2 Type I",
   "SOC 3",
   "SOC 2 Type II",
   "SOC 1 Type I"
  ],
  "a": 2,
  "e": "기간 운영 효과성 + 보안 TSC = SOC 2 Type II. Type I 은 시점 설계, SOC 3 은 요약, SOC 1 은 재무통제."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 1,
  "q": "Which report is intended for general public distribution and can be posted on a CSP's website?",
  "c": [
   "SOC 2 Type II",
   "SOC 1 Type II",
   "SOC 3",
   "Penetration test report"
  ],
  "a": 2,
  "e": "SOC 3 is a general-use summary. SOC 1/SOC 2 are restricted-use; pentest reports are confidential."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "SOC 2 Trust Services Criteria 에 포함되지 않는 것은?",
  "c": [
   "수익성(Profitability)",
   "가용성(Availability)",
   "처리 무결성(Processing integrity)",
   "기밀성(Confidentiality)"
  ],
  "a": 0,
  "e": "TSC: 보안·가용성·처리 무결성·기밀성·개인정보. 수익성은 없음."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 3,
  "q": "CSP 의 SOC 2 Type II 보고서를 검토하던 중 데이터센터 운영이 하위 서비스 조직으로 carve-out 되어 있음을 발견했다. 보안 관리자가 해야 할 일은?",
  "c": [
   "보고서에 문제가 없으므로 그대로 수용",
   "CSP 와 즉시 계약 해지",
   "SOC 3 으로 대체해 검토 종료",
   "범위 제외 영역에 대한 하위 서비스 조직의 별도 보증 보고서를 요청·검토"
  ],
  "a": 3,
  "e": "scope statement 제한을 이해하고 carve-out 영역의 보증을 추가 확보해야 한다. 그대로 수용·즉시 해지·SOC 3 대체는 부적절."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "CSA STAR 에서 CAIQ 를 이용한 자가 평가에 해당하는 수준은?",
  "c": [
   "Level 2",
   "Level 1",
   "Level 3",
   "Level 0"
  ],
  "a": 1,
  "e": "Level 1 자가 평가, Level 2 제3자 감사(Certification/Attestation)."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "What is a key assurance challenge of virtualization and cloud for auditors?",
  "c": [
   "Too much physical access to data centers",
   "Inability to directly inspect shared hypervisors and physical infrastructure controlled by the CSP",
   "Absence of any logs in cloud environments",
   "Cloud systems cannot be audited under any standard"
  ],
  "a": 1,
  "e": "Auditors usually cannot directly test CSP-controlled shared layers, so they rely on third-party attestations. Logs exist and cloud can be audited."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 1,
  "q": "데이터 처리의 목적과 수단을 결정하는 GDPR 상 주체는?",
  "c": [
   "처리자(Processor)",
   "수탁자(Custodian)",
   "정보주체(Data subject)",
   "관리자(Controller)"
  ],
  "a": 3,
  "e": "Controller 가 목적·수단 결정, Processor 는 대신 처리."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 2,
  "q": "Purchasing cyber risk insurance is an example of which risk treatment option?",
  "c": [
   "Transfer",
   "Avoid",
   "Mitigate",
   "Accept"
  ],
  "a": 0,
  "e": "Insurance transfers the financial impact to a third party; the risk itself and reputational impact remain."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 2,
  "q": "Which role is responsible for the technical custody and protection of data, such as backups and access controls, on behalf of the owner?",
  "c": [
   "Data steward",
   "Data subject",
   "Data custodian",
   "Data controller"
  ],
  "a": 2,
  "e": "Custodians implement and operate technical protection. Stewards manage quality/metadata; controllers decide purposes; subjects are individuals."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 2,
  "q": "리스크 관리 성과를 조기에 경고하는 지표로 리스크 상승을 나타내는 것은?",
  "c": [
   "KPI 만으로 충분",
   "ROI",
   "KRI (Key Risk Indicator)",
   "NPS"
  ],
  "a": 2,
  "e": "KRI 는 리스크 노출 증가의 선행 지표. KPI 는 성과, ROI·NPS 는 재무·고객 지표."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 3,
  "q": "CSP 를 선정하며 CSP 의 리스크 관리 프로그램을 평가한다. 가장 중요한 확인 사항은?",
  "c": [
   "CSP 의 리스크 프로파일·수용 수준이 자사 리스크 수용 기준과 정합한지",
   "CSP 의 로고 디자인",
   "CSP 직원 수",
   "CSP 의 광고 예산"
  ],
  "a": 0,
  "e": "아웃라인 6.4: 통제·방법론·정책·리스크 프로파일·리스크 수용 수준 평가. 정합성이 핵심."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 2,
  "q": "SOX(Sarbanes-Oxley Act)가 클라우드 이용 기업에 주는 시사점은?",
  "c": [
   "SOX 는 클라우드 기업에 적용되지 않는다",
   "SOX 는 개인정보 삭제권을 규정한다",
   "SOX 는 카드 데이터 표준이다",
   "재무보고 관련 시스템을 CSP 에 두어도 내부통제 책임은 기업에 남아 SOC 1 등 보증이 필요"
  ],
  "a": 3,
  "e": "SOX(404)는 재무보고 내부통제 — 위탁해도 책임은 유지, SOC 1/ISAE 3402 로 보증."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 1,
  "q": "Which contract sets the overall legal terms of the relationship, with individual engagements defined in separate documents?",
  "c": [
   "Statement of Work (SOW)",
   "Master Service Agreement (MSA)",
   "Service-Level Agreement (SLA)",
   "Non-Disclosure Agreement (NDA)"
  ],
  "a": 1,
  "e": "The MSA is the umbrella agreement; SOWs define specific work, SLAs define service levels, NDAs cover confidentiality."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 2,
  "q": "벤더가 파산해도 고객이 소스코드를 확보할 수 있도록 제3자에게 예치하는 장치는?",
  "c": [
   "SLA 크레딧",
   "에스크로(Escrow)",
   "감사권",
   "사이버 보험"
  ],
  "a": 1,
  "e": "source code escrow. SLA 크레딧·감사권·보험은 다른 목적."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 3,
  "q": "What is the BEST way to reduce vendor lock-in risk when adopting a SaaS platform?",
  "c": [
   "Sign the longest possible contract for discounts",
   "Use as many proprietary features as possible",
   "Avoid documenting data flows",
   "Define an exit strategy in the contract with data export formats, timelines and deletion certification"
  ],
  "a": 3,
  "e": "Contractual exit terms and portable formats reduce lock-in. Long terms and proprietary features increase it."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 2,
  "q": "공급자 관계의 정보보안을 다루며 클라우드 서비스 파트를 포함한 ISO/IEC 표준은?",
  "c": [
   "ISO/IEC 27036",
   "ISO/IEC 27050",
   "ISO/IEC 27042",
   "ISO/IEC 27701"
  ],
  "a": 0,
  "e": "27036 supplier relationships(Part 4 클라우드)."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 2,
  "q": "SLA 에 반드시 포함되어야 할 요소로 가장 적절한 것은?",
  "c": [
   "CSP 의 회사 연혁",
   "고객사 조직도",
   "측정 가능한 지표, 측정 방법, 제외 사항, 미달 시 보상",
   "마케팅 슬로건"
  ],
  "a": 2,
  "e": "아웃라인 6.5 계약 관리의 metrics·definitions. 측정 불가능한 SLA 는 의미가 없다."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 3,
  "q": "퍼블릭 CSP 가 고객의 현장 감사권(right to audit) 요구를 거부했다. 보안 관리자의 BEST 대응은?",
  "c": [
   "감사 없이 그대로 계약",
   "CSP 데이터센터에 무단 진입",
   "SOC 2 Type II·ISO 27001·CSA STAR 등 독립 제3자 보증 보고서를 계약상 정기 제공받도록 확보",
   "모든 데이터를 온프레미스로 즉시 회수"
  ],
  "a": 2,
  "e": "현장 감사 대신 제3자 보증을 계약으로 확보하는 것이 일반적 BEST. 무조건 수용·무단 진입·즉시 회수는 부적절."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 3,
  "q": "A CSP's financial stability is questionable. Which contractual and vendor-management measure BEST addresses vendor viability risk?",
  "c": [
   "Escrow arrangements plus tested data portability and termination assistance clauses",
   "Higher SLA uptime targets",
   "More frequent penetration tests",
   "A larger cyber insurance policy for the CSP"
  ],
  "a": 0,
  "e": "Viability risk is about the vendor ceasing to operate; escrow and exit/portability address it. Uptime targets and pentests do not, and the CSP's insurance doesn't protect the customer's continuity."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 1,
  "q": "NIST SP 800-145는 4가지 배포 모델로 Public·Private·Community·Hybrid를 정의한다.",
  "a": true,
  "e": "Multi-cloud는 NIST 정의의 배포 모델이 아니라 실무 용어."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 1,
  "q": "Rapid elasticity는 자원의 자동 확장만 의미하고 축소는 포함하지 않는다.",
  "a": false,
  "e": "수요에 따라 확장·축소 모두 신속히 이루어짐."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "ISO/IEC 17788은 multi-tenancy를 클라우드의 핵심 특성으로 포함한다.",
  "a": true,
  "e": "ISO/IEC 17788은 NIST 5특성에 multi-tenancy를 더한 6특성."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "NIST SP 500-292에서 cloud auditor는 클라우드 서비스·보안 통제를 독립적으로 평가하는 행위자다.",
  "a": true,
  "e": "5대 행위자: consumer·provider·carrier·auditor·broker."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "Regulator는 CCSP 아웃라인 1.1에서 클라우드 역할의 예로 제시된다.",
  "a": true,
  "e": "CSC·CSP·partner·broker·regulator가 예시로 열거."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 1,
  "q": "PaaS에서 고객은 운영체제 패치를 직접 책임진다.",
  "a": false,
  "e": "PaaS의 OS·런타임은 CSP 관리. 고객은 앱·데이터·설정."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "Interoperability는 서비스 종료 시 데이터를 회수하고 삭제하는 능력을 말한다.",
  "a": false,
  "e": "그것은 Reversibility. Interoperability는 시스템 간 상호 작동."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "Confidential computing은 TEE를 사용해 처리 중인 데이터(data in use)를 보호한다.",
  "a": true,
  "e": "저장·전송 중 암호화에 더해 사용 중 데이터 보호를 제공."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "양자 컴퓨팅의 Shor 알고리즘은 대칭키 AES보다 RSA·ECC 공개키 암호에 더 직접적인 위협이다.",
  "a": true,
  "e": "Grover는 대칭키 안전도를 절반 수준으로, Shor는 RSA·ECC를 다항 시간에 해독."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 1,
  "q": "Degaussing은 SSD 데이터 소거에 효과적이다.",
  "a": false,
  "e": "SSD·플래시는 자기 매체가 아니므로 무효."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "불변 아키텍처(immutable architecture)에서는 운영 중 서버에 직접 패치를 적용하는 것이 원칙이다.",
  "a": false,
  "e": "새 이미지를 빌드해 교체 배포."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "Ephemeral 인스턴스는 수명이 짧아 포렌식 증거가 휘발되기 쉬우므로 로그를 외부로 중앙 수집해야 한다.",
  "a": true,
  "e": "인스턴스 종료 시 로컬 증거 소멸 — 중앙 로깅 필수."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "Service access(서비스 간 접근)는 사람 사용자가 아니므로 IAM 관리 대상에서 제외해도 된다.",
  "a": false,
  "e": "서비스 계정·워크로드 ID도 최소권한·키 순환·모니터링 대상."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 1,
  "q": "CSA 데이터 수명주기에서 Archive는 Destroy 바로 앞 단계다.",
  "a": true,
  "e": "Create·Store·Use·Share·Archive·Destroy."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "Vendor lock-out은 CSP의 폐업 등으로 고객이 데이터에 접근할 수 없게 되는 상황을 말한다.",
  "a": true,
  "e": "Lock-in은 이전 곤란, lock-out은 접근 상실."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "Secure by design은 출시 후 보안 패치로 결함을 보완하는 접근이다.",
  "a": false,
  "e": "설계 단계부터 보안을 기본값으로 내장."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 3,
  "q": "BYOK를 사용하면 CSP는 어떤 경우에도 고객 데이터의 평문에 접근할 수 없다.",
  "a": false,
  "e": "BYOK도 키가 CSP KMS에서 사용되므로 처리 중 접근 가능성 존재. 더 강한 통제는 HYOK·클라이언트측 암호화."
 },
 {
  "s": "s1",
  "t": "CSP 평가",
  "d": 1,
  "q": "FIPS 140-3은 FIPS 140-2의 후속 암호 모듈 보안 요구 표준이다.",
  "a": true,
  "e": "ISO/IEC 19790 기반으로 개정."
 },
 {
  "s": "s1",
  "t": "CSP 평가",
  "d": 2,
  "q": "Common Criteria의 EAL은 높을수록 제품의 보안 기능이 많다는 뜻이다.",
  "a": false,
  "e": "EAL은 평가·보증의 깊이와 엄격도이며 기능 양과 무관."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 2,
  "q": "SOAR는 로그를 수집·저장·상관분석하는 것이 주 기능이다.",
  "a": false,
  "e": "그것은 SIEM. SOAR는 오케스트레이션·자동화·대응."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 2,
  "q": "EU AI Act는 AI 시스템을 위험 수준에 따라 차등 규제하는 위험 기반 접근을 채택한다.",
  "a": true,
  "e": "금지·고위험·제한(투명성)·최소 위험 계층."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 1,
  "q": "AI 모델의 편향(bias)은 윤리적 우려 사항으로 학습 데이터 대표성과 관련이 있다.",
  "a": true,
  "e": "대표성 없는 데이터 → 차별적 결과."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 1,
  "q": "CSA 데이터 수명주기의 마지막 단계는 Destroy이다.",
  "a": true,
  "e": "Create·Store·Use·Share·Archive·Destroy."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 2,
  "q": "Data dispersion은 데이터를 단일 위치에 모아 관할 리스크를 줄이는 기법이다.",
  "a": false,
  "e": "조각을 여러 위치에 분산 — 오히려 관할 다중화로 법적 검토 필요."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 1,
  "q": "Object storage는 인스턴스 종료 시 함께 소멸하는 임시 저장소다.",
  "a": false,
  "e": "그것은 Ephemeral. Object는 내구성 높은 영속 저장."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 2,
  "q": "볼륨 스냅샷은 원본 볼륨이 암호화돼 있으면 공유 권한 점검이 필요 없다.",
  "a": false,
  "e": "스냅샷 공유 설정 오류로 유출 가능 — 권한 점검 필수."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 2,
  "q": "SaaS 스토리지 유형으로 Information storage and management와 Content and file storage가 있다.",
  "a": true,
  "e": "CCSP 관례 분류."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 1,
  "q": "토큰화된 값은 키만 있으면 수학적으로 원본을 복원할 수 있다.",
  "a": false,
  "e": "토큰은 수학적 관계 없음 — 볼트 조회로만 복원."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "HMAC은 공유 비밀키를 쓰므로 부인방지를 제공하지 못한다.",
  "a": true,
  "e": "양측 모두 생성 가능 → 생성자 증명 불가."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "익명화(anonymization)는 원칙적으로 비가역이어야 한다.",
  "a": true,
  "e": "재식별 가능하면 가명화에 해당."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "Network DLP는 TLS로 암호화된 트래픽 내용을 별도 조치 없이 검사할 수 있다.",
  "a": false,
  "e": "TLS 복호(검사 지점) 없이는 내용 검사 불가."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "SHA-1은 충돌 저항성이 충분해 현재도 디지털 서명용 해시로 권장된다.",
  "a": false,
  "e": "SHA-1은 실제 충돌이 시연돼 폐기 대상 — SHA-2/SHA-3 사용."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 3,
  "q": "Envelope encryption에서 KEK를 파기하면 그 KEK로 보호된 DEK와 데이터는 복구할 수 없다.",
  "a": true,
  "e": "crypto-shredding의 원리."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 1,
  "q": "이메일 본문·이미지는 비정형 데이터에 해당한다.",
  "a": true,
  "e": "고정 스키마 없음."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 2,
  "q": "데이터 분류 등급은 IT 관리자(custodian)가 최종 결정한다.",
  "a": false,
  "e": "데이터 소유자(owner)가 결정."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 2,
  "q": "데이터 위치(data location) 파악은 데이터 발견 활동의 일부다.",
  "a": true,
  "e": "Outline 2.4 항목 — 리전·섀도우 IT 포함."
 },
 {
  "s": "s2",
  "t": "IRM",
  "d": 1,
  "q": "IRM은 문서가 조직 외부로 나간 뒤에는 통제할 수 없다.",
  "a": false,
  "e": "지속적 보호가 IRM의 핵심."
 },
 {
  "s": "s2",
  "t": "IRM",
  "d": 2,
  "q": "IRM에서 인증서·키 폐기는 원격으로 문서 접근 권한을 회수하는 수단이다.",
  "a": true,
  "e": "Outline 2.6 'issuing and revocation of certificates'."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 1,
  "q": "Legal hold 기간에는 해당 데이터의 자동 삭제를 중지해야 한다.",
  "a": true,
  "e": "삭제 방지(deletion prevention)."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 2,
  "q": "데이터 보존 정책이 길수록 리스크는 항상 감소한다.",
  "a": false,
  "e": "과보존은 유출 피해·규제 위반 리스크 증가."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 2,
  "q": "Crypto-shredding은 키 백업 사본이 남아 있으면 효과가 없다.",
  "a": true,
  "e": "모든 키 사본 파기가 전제."
 },
 {
  "s": "s2",
  "t": "감사·추적성",
  "d": 2,
  "q": "Chain of custody는 증거를 다룬 모든 인원·시간·행위를 기록하는 것이다.",
  "a": true,
  "e": "증거능력 확보의 핵심."
 },
 {
  "s": "s2",
  "t": "감사·추적성",
  "d": 2,
  "q": "로그 저장소에 대한 쓰기·삭제 권한은 로그를 생성하는 시스템 관리자에게 부여하는 것이 바람직하다.",
  "a": false,
  "e": "직무분리 — 관리자가 자기 흔적을 지울 수 있으므로 분리·WORM 저장."
 },
 {
  "s": "s2",
  "t": "AI/ML 데이터 보호",
  "d": 2,
  "q": "차등 프라이버시(differential privacy)는 통계적 잡음을 추가해 개인 기여도를 숨긴다.",
  "a": true,
  "e": "membership inference 대응."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 1,
  "q": "VMware ESXi는 Type 1 하이퍼바이저의 예다.",
  "a": true,
  "e": "Bare-metal 하이퍼바이저."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 1,
  "q": "Oracle VirtualBox는 Type 1 하이퍼바이저다.",
  "a": false,
  "e": "호스트 OS 위에서 실행되는 Type 2."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "IaaS에서 하이퍼바이저 보안 패치는 CSP 책임이다.",
  "a": true,
  "e": "고객은 게스트 OS부터."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "관리 평면 접근은 일반 사용자 인증과 동일한 수준이면 충분하다.",
  "a": false,
  "e": "특권 접근 — MFA·JIT·분리된 관리망 등 강화 필요."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "SDN 컨트롤러는 네트워크 전체를 제어하므로 고가치 공격 표적이다.",
  "a": true,
  "e": "컨트롤러 보호·접근통제 필수."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 1,
  "q": "Uptime Tier II는 구성요소 이중화를 갖추지만 분배 경로는 단일이다.",
  "a": true,
  "e": "Tier III부터 복수 분배 경로."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "Tier III 데이터센터는 어떤 단일 비계획 장애에도 무중단을 보장한다.",
  "a": false,
  "e": "그것은 Tier IV(fault tolerant). Tier III는 계획 정비 무중단."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "N+1 구성은 필요 용량 외에 예비 구성요소 1개를 추가한 것이다.",
  "a": true,
  "e": "2N은 계통 전체 이중화."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "고습 환경은 정전기 방전 위험을 높인다.",
  "a": false,
  "e": "고습은 결로·부식, 저습이 정전기."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "Buy(코로케이션)는 Build에 비해 일반적으로 구축 기간이 짧다.",
  "a": true,
  "e": "통제·맞춤성은 낮아짐."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 1,
  "q": "위험 회피(avoid)는 위험을 발생시키는 활동 자체를 하지 않는 것이다.",
  "a": true,
  "e": "예: 해당 서비스 도입 포기."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "위험을 CSP에 계약으로 전가하면 고객의 법적 책임도 사라진다.",
  "a": false,
  "e": "accountability는 이전 불가."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "SLE는 자산가치에 노출계수를 곱해 산출한다.",
  "a": true,
  "e": "SLE = AV × EF."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "정성적 위험 분석은 금액 수치 없이 등급(상·중·하)으로 평가할 수 있다.",
  "a": true,
  "e": "가능성·영향 매트릭스."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 1,
  "q": "VPC flow logs는 패킷 페이로드를 저장한다.",
  "a": false,
  "e": "메타데이터만."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "SIEM 상관분석의 정확도는 로그 소스 간 시간 동기화에 영향을 받는다.",
  "a": true,
  "e": "NTP·UTC 표준화."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "Network security group은 전송 데이터를 암호화한다.",
  "a": false,
  "e": "NSG는 필터링만. 암호화는 TLS·IPsec."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "Break-glass 계정은 비상용이므로 사용 감시가 필요 없다.",
  "a": false,
  "e": "강한 보호·사용 시 경보·사후 검토 필수."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 1,
  "q": "RTO는 서비스 중단 후 복구까지 허용되는 최대 시간 목표다.",
  "a": true,
  "e": "RPO는 데이터 손실 시점."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "Tabletop 연습은 실제 시스템을 장애조치하는 테스트다.",
  "a": false,
  "e": "토론 기반 연습 — 시스템 전환 없음."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "Full interruption 테스트는 운영을 실제로 중단하므로 가장 위험도가 높다.",
  "a": true,
  "e": "최후 단계·경영진 승인 필요."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "Cold site는 Hot site보다 RTO가 짧다.",
  "a": false,
  "e": "Cold site는 장비·데이터가 준비돼 있지 않아 RTO가 가장 길고 비용은 가장 낮음."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 1,
  "q": "OWASP ASVS 는 Level 1~3 의 검증 수준을 정의한다.",
  "a": true,
  "e": "L1 기본, L2 대부분 앱 권장, L3 고위험 앱."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 2,
  "q": "OWASP API Security Top 10 (2023)에서 1위는 Injection 이다.",
  "a": false,
  "e": "1위는 API1 BOLA(Broken Object Level Authorization)."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 2,
  "q": "OWASP Top 10 for LLM Applications 에서 Prompt Injection 은 최상위 위험으로 분류된다.",
  "a": true,
  "e": "LLM01 Prompt Injection."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 1,
  "q": "보안 요구사항은 SDLC 의 요구사항(비즈니스 요구) 단계에서 정의하는 것이 바람직하다.",
  "a": true,
  "e": "요구 단계에서 보안·규제 요구를 도출해야 설계·테스트로 추적 가능."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 2,
  "q": "폭포수 모델은 단계 간 보안 게이트를 두기 쉬우나 후반 변경 비용이 크다.",
  "a": true,
  "e": "단계 순차형이라 게이트 관리는 명확, 변경은 비싸다."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 2,
  "q": "SAFECode 는 클라우드 서비스 가용성 측정 지표 표준이다.",
  "a": false,
  "e": "SAFECode(Software Assurance Forum for Excellence in Code)는 시큐어 개발 모범사례를 제공하는 업계 단체."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 2,
  "q": "ISO/IEC 27034 의 ANF 는 조직당 하나만 존재하는 조직 수준 프레임워크이다.",
  "a": false,
  "e": "조직 수준은 ONF, ANF 는 애플리케이션별로 존재."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 1,
  "q": "STRIDE 의 Elevation of privilege 는 인가(authorization) 위반과 연결된다.",
  "a": true,
  "e": "권한 상승 = 인가 통제 우회."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 2,
  "q": "PASTA 는 공격자 관점의 리스크 중심 7단계 위협 모델링 방법론이다.",
  "a": true,
  "e": "비즈니스 목표부터 리스크·영향 분석까지 7단계."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 2,
  "q": "위협 모델링은 최초 설계 시 1회만 수행하면 충분하다.",
  "a": false,
  "e": "아키텍처·기능 변경 시마다 갱신해야 한다."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 1,
  "q": "CSP 내부자 위협은 CCSP 가 제시하는 클라우드 특유 리스크의 예이다.",
  "a": true,
  "e": "Domain 4.3 Cloud-specific risks 에 명시."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 1,
  "q": "DAST 를 수행하려면 반드시 소스코드가 필요하다.",
  "a": false,
  "e": "DAST 는 실행 중 앱을 외부에서 테스트하는 블랙박스 기법이라 소스가 필요 없다."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 2,
  "q": "SAST 는 런타임 환경 설정 오류를 탐지하는 데 가장 강하다.",
  "a": false,
  "e": "설정·런타임 결함은 DAST/IAST 가 강하다."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 2,
  "q": "IAST 는 SAST 에 비해 일반적으로 오탐(false positive)이 적다.",
  "a": true,
  "e": "실제 실행 흐름을 관찰하므로 오탐이 적다."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 2,
  "q": "블랙박스 테스트는 테스터가 내부 구조와 소스코드를 완전히 알고 수행한다.",
  "a": false,
  "e": "그것은 화이트박스. 블랙박스는 내부 정보 없이 외부 동작만 검증."
 },
 {
  "s": "s4",
  "t": "검증된 SW·공급망",
  "d": 2,
  "q": "SBOM 의 대표 표준 형식으로 SPDX 와 CycloneDX 가 있다.",
  "a": true,
  "e": "SPDX(Linux Foundation, ISO/IEC 5962), CycloneDX(OWASP)."
 },
 {
  "s": "s4",
  "t": "검증된 SW·공급망",
  "d": 2,
  "q": "오픈소스는 소스가 공개되어 있으므로 별도 검증 없이 신뢰할 수 있다.",
  "a": false,
  "e": "공개 여부와 무관하게 취약점·라이선스·출처·유지보수 상태를 검증해야 한다(Validated open-source)."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 1,
  "q": "API 게이트웨이는 rate limiting 으로 자원 고갈 공격을 완화할 수 있다.",
  "a": true,
  "e": "API4 Unrestricted Resource Consumption 대응."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 2,
  "q": "DAM 은 DB 관리자의 활동도 감시 대상에 포함할 수 있다.",
  "a": true,
  "e": "권한 사용자의 오남용 탐지가 DAM 의 주요 목적 중 하나."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 1,
  "q": "SSO 를 도입하면 IdP 가 침해되더라도 영향 범위가 줄어든다.",
  "a": false,
  "e": "SSO 는 IdP 에 리스크를 집중시킨다 — IdP 침해 시 연동된 모든 서비스가 영향. MFA·모니터링으로 보완."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 2,
  "q": "OAuth 2.0 의 access token 은 표준상 반드시 JWT 형식이어야 한다.",
  "a": false,
  "e": "OAuth 2.0(RFC 6749)은 토큰 형식을 규정하지 않는다. JWT 형식이 필수인 것은 OIDC 의 ID Token."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 2,
  "q": "비밀번호와 보안 질문 답변의 조합은 다중 요소 인증(MFA)이다.",
  "a": false,
  "e": "둘 다 지식 기반(Something you know) — 단일 요소의 다중 사용."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 1,
  "q": "Type 2 하이퍼바이저는 호스트 OS 위에서 애플리케이션처럼 실행된다.",
  "a": true,
  "e": "hosted 하이퍼바이저."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 2,
  "q": "TPM 은 대규모 다수 애플리케이션의 키를 중앙 관리하는 네트워크 장치이다.",
  "a": false,
  "e": "그것은 HSM. TPM 은 개별 메인보드 칩."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 2,
  "q": "가상 스위치에서 무차별 모드(promiscuous mode)를 허용하면 다른 VM 트래픽 도청 위험이 커진다.",
  "a": true,
  "e": "무차별 모드 차단이 권장 기본값."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 2,
  "q": "FIPS 140-3 은 암호 모듈 보안 요구사항 표준이다.",
  "a": true,
  "e": "NIST FIPS 140-3(2019)이 140-2 를 대체."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 1,
  "q": "점프박스는 관리 접근을 한 지점으로 모아 감사 추적을 쉽게 한다.",
  "a": true,
  "e": "접근 집중·세션 기록."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 2,
  "q": "DNSSEC 을 적용하면 DNS 질의 내용이 암호화된다.",
  "a": false,
  "e": "DNSSEC 은 서명(무결성)만, 암호화는 DoH/DoT."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 2,
  "q": "DRS 는 호스트 장애 시 VM 을 재시작하는 기능이다.",
  "a": false,
  "e": "장애 재시작은 HA. DRS 는 부하 균형 재배치."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 2,
  "q": "허니팟에 대한 접근은 정상 업무에서 발생할 이유가 없어 고신뢰 탐지 신호가 된다.",
  "a": true,
  "e": "미끼 시스템 특성."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 1,
  "q": "패치는 운영 환경에서 직접 테스트하는 것이 가장 효율적이다.",
  "a": false,
  "e": "테스트 환경 검증 후 변경관리 승인을 거쳐 배포."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 1,
  "q": "인시던트 관리의 목적은 정상 서비스 운영을 가능한 한 빨리 복구하는 것이다.",
  "a": true,
  "e": "근본 원인 제거는 문제 관리."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "알려진 오류(Known Error)는 근본 원인이 파악되었지만 아직 해결되지 않은 문제이다.",
  "a": true,
  "e": "워크어라운드로 영향 완화."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "ITIL 은 ISO/IEC 20000-1 의 공식 부속서로서 조직 인증 기준이다.",
  "a": false,
  "e": "ITIL 은 독립 모범사례 프레임워크, 조직 인증은 ISO/IEC 20000-1."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "CIS Controls 는 v8 기준 18개 통제로 구성된다.",
  "a": true,
  "e": "CIS Controls v8(2021) 18개."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 2,
  "q": "긴급 변경(Emergency change)은 변경관리 프로세스 밖에서 처리된다.",
  "a": false,
  "e": "신속 승인 경로(ECAB 등)로 프로세스 안에서 처리하고 사후 검토."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 1,
  "q": "포렌식 분석은 원본이 아닌 검증된 사본에서 수행한다.",
  "a": true,
  "e": "원본 훼손 방지."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "ISO/IEC 27042 는 디지털 증거의 분석과 해석에 관한 지침이다.",
  "a": true,
  "e": "27037 수집·보존, 27042 분석·해석."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "SaaS 환경에서 고객은 IaaS 보다 직접 수집할 수 있는 포렌식 증거 범위가 넓다.",
  "a": false,
  "e": "SaaS 는 고객 통제 범위가 가장 좁아 CSP 의존도가 높다."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "휘발성 순서상 디스크 데이터가 CPU 캐시보다 먼저 수집되어야 한다.",
  "a": false,
  "e": "캐시·메모리가 디스크보다 휘발성이 높아 먼저 수집."
 },
 {
  "s": "s5",
  "t": "이해관계자 커뮤니케이션",
  "d": 2,
  "q": "침해 사고 대외 공지는 사전에 지정된 대변인을 통해 일관되게 해야 한다.",
  "a": true,
  "e": "메시지 일관성·법적 리스크 통제."
 },
 {
  "s": "s5",
  "t": "이해관계자 커뮤니케이션",
  "d": 1,
  "q": "규제기관은 CCSP 아웃라인의 커뮤니케이션 대상에 포함되지 않는다.",
  "a": false,
  "e": "Regulators 명시."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 2,
  "q": "SOAR 는 사람의 판단 없이 모든 사고를 완전 자동으로 종결해야 한다.",
  "a": false,
  "e": "SOAR 는 반복 작업 자동화·오케스트레이션, 고위험 판단은 사람 승인(human-in-the-loop)."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 1,
  "q": "SIEM 은 서로 다른 소스의 이벤트를 상관 분석해 공격 징후를 찾는다.",
  "a": true,
  "e": "correlation 이 핵심."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 2,
  "q": "CLOUD Act 는 미국 관할 사업자에게 데이터 저장 위치와 무관하게 적용될 수 있다.",
  "a": true,
  "e": "사업자 관할 기반."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 1,
  "q": "PCI DSS 는 미국 연방 법률이다.",
  "a": false,
  "e": "카드 브랜드 계약 기반 산업 표준."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 2,
  "q": "미국의 개인정보 보호 체계는 EU 처럼 단일 포괄법 중심이다.",
  "a": false,
  "e": "미국은 산업별 개별법(HIPAA·GLBA 등)과 주법 중심."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 1,
  "q": "HITECH Act 는 HIPAA 의 집행과 침해 통지 요건을 강화했다.",
  "a": true,
  "e": "2009년 제정."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 1,
  "q": "legal hold 가 걸린 데이터는 정상 보존 기간 정책에 따라 자동 삭제되어도 된다.",
  "a": false,
  "e": "legal hold 는 자동 삭제를 중단시킨다."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 2,
  "q": "ISO/IEC 27037 은 디지털 증거의 식별·수집·획득·보존을 다룬다.",
  "a": true,
  "e": "초동 처리 표준."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 2,
  "q": "클라우드 eDiscovery 에서는 타 테넌트 데이터가 노출되지 않도록 범위를 제한해야 한다.",
  "a": true,
  "e": "멀티테넌시 과제."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 1,
  "q": "GDPR 은 EU 밖 사업자에게도 EU 정보주체 대상 처리 시 적용될 수 있다.",
  "a": true,
  "e": "Art.3 역외 적용."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 2,
  "q": "GDPR 감독기관 침해 통지는 원칙적으로 인지 후 30일 이내이다.",
  "a": false,
  "e": "가능한 경우 72시간 이내."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 1,
  "q": "ISO/IEC 27018 은 퍼블릭 클라우드에서 PII 처리자로서의 CSP 를 위한 지침이다.",
  "a": true,
  "e": "Code of practice for PII protection in public clouds acting as PII processors."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 1,
  "q": "FERPA 는 미국 교육 기록의 개인정보를 보호한다.",
  "a": true,
  "e": "Family Educational Rights and Privacy Act."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 2,
  "q": "PIA 는 서비스 출시 후 사고가 발생했을 때 수행하는 사후 평가이다.",
  "a": false,
  "e": "설계 단계 사전 평가."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 1,
  "q": "SOC 1 보고서는 재무보고 내부통제(ICFR)와 관련된다.",
  "a": true,
  "e": "이용자 감사인용."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "SOC 2 Type I 은 일정 기간의 운영 효과성을 테스트한다.",
  "a": false,
  "e": "Type I 은 시점 설계, Type II 가 기간 운영 효과성."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "ISAE 3402 는 IAASB 가 발행한 서비스 조직 통제 보증 기준이다.",
  "a": true,
  "e": "국제판 SOC 1 대응."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "CSA STAR Level 1 은 독립 감사인이 수행하는 인증이다.",
  "a": false,
  "e": "자가 평가(CAIQ)."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "감사 보고서 이용자는 범위 기술서(scope statement)의 제외 사항을 확인해야 한다.",
  "a": true,
  "e": "carve-out·제외 시스템·기간 확인."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 1,
  "q": "리스크 회피(avoid)는 리스크를 유발하는 활동 자체를 중단하는 것이다.",
  "a": true,
  "e": "예: 해당 서비스 도입 포기."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 2,
  "q": "데이터 처리를 CSP 에 위탁하면 관리자(controller)의 법적 책임은 사라진다.",
  "a": false,
  "e": "책임은 controller 에 잔존."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 2,
  "q": "데이터 스튜어드는 데이터 품질과 메타데이터·업무 정의를 관리한다.",
  "a": true,
  "e": "Steward 역할."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 2,
  "q": "출구 전략은 CSP 를 떠나기로 결정한 시점에 처음 수립하는 것이 바람직하다.",
  "a": false,
  "e": "계약 체결 시점에 데이터 반환·삭제·전환 지원을 명시."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 1,
  "q": "SLA 는 거래 관계 전체의 기본 법적 조건을 정하는 상위 계약이다.",
  "a": false,
  "e": "상위 기본 계약은 MSA. SLA 는 측정 가능한 서비스 수준과 미달 시 보상을 정한다."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 1,
  "q": "NIST의 클라우드 컴퓨팅 정의 문서 번호는 NIST SP ____ 이다.",
  "a": "800-145",
  "k": [
   "800-145",
   "800145"
  ],
  "e": "5특성·3서비스·4배포 모델 정의."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 1,
  "q": "사람의 개입 없이 고객이 서버·스토리지를 직접 프로비저닝하는 특성은?",
  "a": "On-demand self-service",
  "k": [
   "on-demand",
   "온디맨드",
   "self-service",
   "셀프서비스"
  ],
  "e": "NIST 필수 특성 중 하나."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "ISO/IEC 17789에서 감사자·브로커·개발자를 하위역할로 포함하는 역할의 약어는?",
  "a": "CSN",
  "k": [
   "CSN",
   "cloud service partner",
   "파트너"
  ],
  "e": "Cloud Service Partner."
 },
 {
  "s": "s1",
  "t": "클라우드 개념",
  "d": 2,
  "q": "NIST 브로커 서비스 중 고정되지 않은 여러 서비스 중에서 유동적으로 선택하는 유형은?",
  "a": "Service Arbitrage",
  "k": [
   "arbitrage",
   "차익"
  ],
  "e": "Aggregation과 유사하나 서비스가 고정되지 않음."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 1,
  "q": "둘 이상의 서로 다른 배포 모델을 결합한 클라우드는?",
  "a": "Hybrid cloud",
  "k": [
   "hybrid",
   "하이브리드"
  ],
  "e": "Private+Public 결합 등."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "서비스 종료 시 고객 자산 회수와 CSP 측 삭제를 보장하는 ISO/IEC 17788 교차 관점은?",
  "a": "Reversibility",
  "k": [
   "reversibility",
   "가역성",
   "되돌림"
  ],
  "e": "출구 전략의 핵심."
 },
 {
  "s": "s1",
  "t": "참조 아키텍처",
  "d": 2,
  "q": "TEE를 이용해 처리 중인 데이터를 보호하는 기술은?",
  "a": "Confidential computing",
  "k": [
   "confidential",
   "기밀 컴퓨팅",
   "기밀컴퓨팅"
  ],
  "e": "Intel SGX·AMD SEV 등."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 1,
  "q": "데이터를 암호화한 뒤 키를 파기해 복구 불가능하게 만드는 소거 기법은?",
  "a": "Crypto-shredding",
  "k": [
   "crypto-shredding",
   "crypto shredding",
   "cryptographic erase",
   "암호화 소거",
   "크립토"
  ],
  "e": "NIST SP 800-88의 Cryptographic Erase."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "요청자의 지리적 위치로 접근을 제한하는 네트워크 통제는?",
  "a": "Geofencing",
  "k": [
   "geofencing",
   "지오펜싱"
  ],
  "e": "국가·지역 기반 차단."
 },
 {
  "s": "s1",
  "t": "보안 개념",
  "d": 2,
  "q": "운영 중 수정 대신 골든 이미지로 교체 배포해 구성 표류를 막는 설계는?",
  "a": "Immutable architecture",
  "k": [
   "immutable",
   "불변"
  ],
  "e": "Security hygiene 항목."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "고객이 생성한 키를 CSP KMS로 가져와 사용하는 키 관리 방식의 약어는?",
  "a": "BYOK",
  "k": [
   "BYOK",
   "bring your own key"
  ],
  "e": "더 강한 통제는 HYOK."
 },
 {
  "s": "s1",
  "t": "CSP 평가",
  "d": 1,
  "q": "Common Criteria의 보증 수준을 나타내는 약어(1~7)는?",
  "a": "EAL",
  "k": [
   "EAL",
   "evaluation assurance level"
  ],
  "e": "Evaluation Assurance Level."
 },
 {
  "s": "s1",
  "t": "AI/ML",
  "d": 2,
  "q": "플레이북 기반으로 보안 도구를 연동해 대응을 자동화하는 기술의 약어는?",
  "a": "SOAR",
  "k": [
   "SOAR"
  ],
  "e": "Security Orchestration, Automation and Response."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 1,
  "q": "CSA 데이터 수명주기 6단계 중 다섯 번째 단계는?",
  "a": "Archive",
  "k": [
   "archive",
   "아카이브",
   "보관"
  ],
  "e": "Create·Store·Use·Share·Archive·Destroy."
 },
 {
  "s": "s2",
  "t": "데이터 개념",
  "d": 2,
  "q": "데이터를 조각내 여러 노드에 분산 저장하는 개념은?",
  "a": "Data dispersion",
  "k": [
   "dispersion",
   "분산"
  ],
  "e": "bit splitting·erasure coding."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 1,
  "q": "인스턴스 종료 시 함께 사라지는 임시 스토리지는?",
  "a": "Ephemeral storage",
  "k": [
   "ephemeral",
   "임시"
  ],
  "e": "영속 데이터 저장 금지."
 },
 {
  "s": "s2",
  "t": "스토리지 아키텍처",
  "d": 2,
  "q": "키와 메타데이터로 접근하며 HTTP API를 쓰는 IaaS 스토리지는?",
  "a": "Object storage",
  "k": [
   "object",
   "객체"
  ],
  "e": "공개 버킷 설정 주의."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 1,
  "q": "민감 데이터를 무의미한 대체값으로 바꾸고 원본은 볼트에 두는 기법은?",
  "a": "Tokenization",
  "k": [
   "tokenization",
   "토큰화"
  ],
  "e": "PCI DSS 범위 축소."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "데이터 암호화 키(DEK)를 다른 키로 암호화하는 방식은?",
  "a": "Envelope encryption",
  "k": [
   "envelope",
   "봉투"
  ],
  "e": "KEK가 DEK를 보호."
 },
 {
  "s": "s2",
  "t": "데이터 보안 기술",
  "d": 2,
  "q": "조회 시점에 권한에 따라 표시만 가리는 마스킹은?",
  "a": "Dynamic masking",
  "k": [
   "dynamic",
   "동적"
  ],
  "e": "원본 데이터는 변경 없음."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 2,
  "q": "JSON·XML 같은 데이터 유형은?",
  "a": "Semi-structured data",
  "k": [
   "semi",
   "반정형"
  ],
  "e": "태그로 구조 표현."
 },
 {
  "s": "s2",
  "t": "IRM",
  "d": 1,
  "q": "문서에 열람·인쇄·만료 권한을 내장해 지속 보호하는 기술의 약어는?",
  "a": "IRM",
  "k": [
   "IRM",
   "DRM",
   "information rights"
  ],
  "e": "Information Rights Management(기업용 DRM)."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 2,
  "q": "소송 예상 시 데이터 삭제를 중단하고 보존하는 조치는?",
  "a": "Legal hold",
  "k": [
   "legal hold",
   "리걸 홀드",
   "법적 보존"
  ],
  "e": "보존 정책보다 우선."
 },
 {
  "s": "s2",
  "t": "감사·추적성",
  "d": 2,
  "q": "증거의 수집부터 제출까지 취급 이력을 연속 기록하는 것은?",
  "a": "Chain of custody",
  "k": [
   "chain of custody",
   "관리 연속성",
   "증거 보관"
  ],
  "e": "해시로 무결성 입증."
 },
 {
  "s": "s2",
  "t": "감사·추적성",
  "d": 1,
  "q": "디지털 서명으로 행위자가 자신의 행위를 부인하지 못하게 하는 보안 속성은?",
  "a": "Non-repudiation",
  "k": [
   "non-repudiation",
   "nonrepudiation",
   "부인방지"
  ],
  "e": "개인키 서명 필요."
 },
 {
  "s": "s2",
  "t": "AI/ML 데이터 보호",
  "d": 2,
  "q": "학습 데이터에 오염된 샘플을 주입해 모델을 왜곡하는 공격은?",
  "a": "Data poisoning",
  "k": [
   "poisoning",
   "포이즈닝",
   "오염"
  ],
  "e": "출처 검증으로 대응."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 1,
  "q": "호스트 OS 위에서 실행되는 하이퍼바이저 유형은?",
  "a": "Type 2",
  "k": [
   "type 2",
   "type2",
   "hosted",
   "호스티드",
   "2형"
  ],
  "e": "VirtualBox·VMware Workstation."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "게스트에서 하이퍼바이저를 뚫고 호스트·타 테넌트에 접근하는 공격은?",
  "a": "VM escape",
  "k": [
   "vm escape",
   "escape",
   "탈출"
  ],
  "e": "멀티테넌시 최악의 위협."
 },
 {
  "s": "s3",
  "t": "인프라 구성요소",
  "d": 2,
  "q": "클라우드 자원 생성·구성·삭제를 담당하는 콘솔·API 계층은?",
  "a": "Management plane",
  "k": [
   "management plane",
   "관리 평면",
   "관리평면"
  ],
  "e": "특권 접근 통제 최우선."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 1,
  "q": "Uptime Institute에서 내결함성(fault tolerant) 등급은?",
  "a": "Tier IV",
  "k": [
   "tier iv",
   "tier 4",
   "티어4",
   "4"
  ],
  "e": "단일 장애에도 무중단."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "독립된 두 계통으로 전체 용량을 완전 이중화하는 구성은?",
  "a": "2N",
  "k": [
   "2N"
  ],
  "e": "N+1과 구분."
 },
 {
  "s": "s3",
  "t": "데이터센터 설계",
  "d": 2,
  "q": "냉난방·환기·공조를 뜻하는 약어는?",
  "a": "HVAC",
  "k": [
   "HVAC"
  ],
  "e": "Heating, Ventilation, and Air Conditioning."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 1,
  "q": "연간 기대손실(ALE) = SLE × ____",
  "a": "ARO",
  "k": [
   "ARO",
   "annualized rate of occurrence",
   "연간 발생률"
  ],
  "e": "Annualized Rate of Occurrence."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "통제 적용 후에도 남는 위험은?",
  "a": "Residual risk",
  "k": [
   "residual",
   "잔여"
  ],
  "e": "경영진이 수용 승인."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "물리 탭 없이 VPC 트래픽 사본을 분석 도구로 보내는 기능은?",
  "a": "Traffic mirroring",
  "k": [
   "mirroring",
   "미러링"
  ],
  "e": "페이로드 분석 가능."
 },
 {
  "s": "s3",
  "t": "보안 통제",
  "d": 2,
  "q": "SAML·OIDC로 외부 IdP의 인증을 신뢰하는 방식은?",
  "a": "Federation",
  "k": [
   "federation",
   "페더레이션",
   "연합"
  ],
  "e": "중앙 ID 관리."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 1,
  "q": "허용 가능한 데이터 손실 시점 목표의 약어는?",
  "a": "RPO",
  "k": [
   "RPO",
   "recovery point objective"
  ],
  "e": "복제·백업 주기로 결정."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "재해 시 필요한 정상 대비 처리 능력 비율 지표의 약어는?",
  "a": "RSL",
  "k": [
   "RSL",
   "recovery service level"
  ],
  "e": "DR 용량 산정."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "DR 사이트를 가동하되 운영을 중단하지 않는 테스트는?",
  "a": "Parallel test",
  "k": [
   "parallel",
   "병행"
  ],
  "e": "Full interruption과 구분."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 1,
  "q": "OWASP 의 애플리케이션 보안 검증 요구사항 표준(약어)은?",
  "a": "ASVS",
  "k": [
   "ASVS",
   "Application Security Verification Standard"
  ],
  "e": "L1~L3 검증 수준."
 },
 {
  "s": "s4",
  "t": "앱보안 교육·취약점",
  "d": 1,
  "q": "OWASP API Security Top 10 (2023) 1위, 객체 ID 변경으로 타인 데이터에 접근하는 취약점(약어)은?",
  "a": "BOLA",
  "k": [
   "BOLA",
   "Broken Object Level Authorization"
  ],
  "e": "객체 수준 인가 실패."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 1,
  "q": "Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege 의 머리글자 위협 모델은?",
  "a": "STRIDE",
  "k": [
   "STRIDE"
  ],
  "e": "Microsoft 위협 분류 모델."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 1,
  "q": "비즈니스 목표에서 시작하는 7단계 리스크 중심 위협 모델링 방법론(약어)은?",
  "a": "PASTA",
  "k": [
   "PASTA",
   "Process for Attack Simulation"
  ],
  "e": "Process for Attack Simulation and Threat Analysis."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 1,
  "q": "실행 중 앱 내부 에이전트로 테스트 중 취약점을 찾는 기법(약어)은?",
  "a": "IAST",
  "k": [
   "IAST",
   "Interactive Application Security Testing"
  ],
  "e": "Interactive AST."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 1,
  "q": "서드파티·오픈소스 구성요소의 취약점과 라이선스를 분석하는 기법(약어)은?",
  "a": "SCA",
  "k": [
   "SCA",
   "Software Composition Analysis",
   "구성요소 분석"
  ],
  "e": "Software Composition Analysis."
 },
 {
  "s": "s4",
  "t": "보안 테스트·보증",
  "d": 2,
  "q": "정상 use case 의 반대로, 악의적 사용 시나리오를 기반으로 하는 테스트는?",
  "a": "오용 사례 테스트",
  "k": [
   "abuse case",
   "misuse case",
   "오용",
   "악용 사례"
  ],
  "e": "Abuse case testing."
 },
 {
  "s": "s4",
  "t": "검증된 SW·공급망",
  "d": 1,
  "q": "소프트웨어 구성요소 명세서(약어)는?",
  "a": "SBOM",
  "k": [
   "SBOM",
   "Software Bill of Materials"
  ],
  "e": "SPDX·CycloneDX 형식."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 1,
  "q": "HTTP 요청을 L7 에서 검사해 SQLi·XSS 를 차단하는 장치(약어)는?",
  "a": "WAF",
  "k": [
   "WAF",
   "Web Application Firewall",
   "웹 방화벽"
  ],
  "e": "Web Application Firewall."
 },
 {
  "s": "s4",
  "t": "클라우드 앱 아키텍처",
  "d": 1,
  "q": "DB 쿼리와 관리자 활동을 실시간 감시하는 보조 보안 컴포넌트(약어)는?",
  "a": "DAM",
  "k": [
   "DAM",
   "Database Activity Monitoring"
  ],
  "e": "Database Activity Monitoring."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 1,
  "q": "OAuth 2.0 위에 인증 계층을 추가해 ID Token 을 발급하는 표준(약어)은?",
  "a": "OIDC",
  "k": [
   "OIDC",
   "OpenID Connect"
  ],
  "e": "OpenID Connect."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 1,
  "q": "사용자와 클라우드 서비스 사이에서 가시성·DLP·접근 통제를 제공하는 보안 브로커(약어)는?",
  "a": "CASB",
  "k": [
   "CASB",
   "Cloud Access Security Broker"
  ],
  "e": "Cloud Access Security Broker."
 },
 {
  "s": "s4",
  "t": "IAM 설계",
  "d": 2,
  "q": "SAML 에서 IdP 가 SP 에 전달하는 XML 형식의 인증 정보 문서는?",
  "a": "어서션",
  "k": [
   "assertion",
   "어서션",
   "어써션"
  ],
  "e": "SAML Assertion."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 1,
  "q": "메인보드에 장착되어 측정 부팅과 원격 증명을 지원하는 칩(약어)은?",
  "a": "TPM",
  "k": [
   "TPM",
   "Trusted Platform Module"
  ],
  "e": "Trusted Platform Module."
 },
 {
  "s": "s5",
  "t": "인프라 구축·하드웨어",
  "d": 2,
  "q": "하드웨어 위에 직접 설치되는 베어메탈 하이퍼바이저의 유형은?",
  "a": "Type 1",
  "k": [
   "Type 1",
   "type1",
   "타입 1",
   "타입1",
   "1형",
   "bare-metal",
   "베어메탈"
  ],
  "e": "Type 1 = bare-metal."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 1,
  "q": "DNS 응답에 전자서명을 붙여 출처·무결성을 보장하는 확장(약어)은?",
  "a": "DNSSEC",
  "k": [
   "DNSSEC"
  ],
  "e": "DNS Security Extensions."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 2,
  "q": "관리자 원격 접근을 한 곳으로 모으는 강화된 중계 서버를 무엇이라 하는가?",
  "a": "배스천 호스트",
  "k": [
   "bastion",
   "배스천",
   "jumpbox",
   "점프박스",
   "jump server",
   "점프 서버"
  ],
  "e": "Bastion host / Jumpbox."
 },
 {
  "s": "s5",
  "t": "인프라 운영·유지",
  "d": 1,
  "q": "클러스터 내 호스트 부하를 감시해 VM 을 자동 재배치하는 기능(약어)은?",
  "a": "DRS",
  "k": [
   "DRS",
   "Distributed Resource Scheduling",
   "분산 자원 스케줄링"
  ],
  "e": "Distributed Resource Scheduling."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 1,
  "q": "IT 서비스 관리 시스템 요구사항 국제 표준 번호는?",
  "a": "ISO/IEC 20000-1",
  "k": [
   "20000-1",
   "20000"
  ],
  "e": "SMS 인증 표준."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 1,
  "q": "변경을 평가·승인하는 자문 기구(약어)는?",
  "a": "CAB",
  "k": [
   "CAB",
   "Change Advisory Board",
   "변경 자문 위원회",
   "변경자문위원회"
  ],
  "e": "Change Advisory Board, 긴급은 ECAB."
 },
 {
  "s": "s5",
  "t": "운영 통제·ITSM",
  "d": 1,
  "q": "형상 항목(CI)과 그 관계를 저장하는 데이터베이스(약어)는?",
  "a": "CMDB",
  "k": [
   "CMDB",
   "Configuration Management Database",
   "형상관리 데이터베이스"
  ],
  "e": "Configuration Management Database."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 1,
  "q": "증거 취급 이력을 연속 기록하는 문서·절차는?",
  "a": "Chain of custody",
  "k": [
   "chain of custody",
   "연계 보관성",
   "증거 연속성",
   "관리 연속성",
   "보관 연속성"
  ],
  "e": "증거 능력 유지의 핵심."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "디지털 증거의 분석·해석 지침을 다루는 ISO/IEC 표준 번호는?",
  "a": "ISO/IEC 27042",
  "k": [
   "27042"
  ],
  "e": "27037 수집, 27041 방법 보증, 27042 분석, 27043 프로세스."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "휘발성이 높은 증거부터 수집하라는 원칙(영문)은?",
  "a": "Order of volatility",
  "k": [
   "order of volatility",
   "휘발성 순서",
   "휘발성순서"
  ],
  "e": "RFC 3227."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 1,
  "q": "로그 수집·상관 분석·경보 시스템(약어)은?",
  "a": "SIEM",
  "k": [
   "SIEM",
   "Security Information and Event Management"
  ],
  "e": "Security Information and Event Management."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 1,
  "q": "플레이북 기반 보안 대응 자동화 플랫폼(약어)은?",
  "a": "SOAR",
  "k": [
   "SOAR",
   "Security Orchestration"
  ],
  "e": "Security Orchestration, Automation and Response."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 2,
  "q": "미국 관할 사업자의 해외 저장 데이터 제출 의무를 규정한 2018년 미국 법은?",
  "a": "CLOUD Act",
  "k": [
   "CLOUD Act",
   "CLOUD",
   "클라우드법"
  ],
  "e": "Clarifying Lawful Overseas Use of Data Act."
 },
 {
  "s": "s6",
  "t": "법적 요구·관할권",
  "d": 1,
  "q": "북미 전력 시스템 핵심 기반시설 보호 규제(약어)는?",
  "a": "NERC CIP",
  "k": [
   "NERC"
  ],
  "e": "North American Electric Reliability Corporation CIP."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 1,
  "q": "전자증거개시(eDiscovery) ISO/IEC 표준 번호는?",
  "a": "ISO/IEC 27050",
  "k": [
   "27050"
  ],
  "e": "27050 시리즈."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 2,
  "q": "소송 예상 시 관련 데이터 삭제를 중단시키는 보존 조치는?",
  "a": "Legal hold",
  "k": [
   "legal hold",
   "litigation hold",
   "법적 보존",
   "소송 보존"
  ],
  "e": "Legal/Litigation hold."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 1,
  "q": "퍼블릭 클라우드 PII 처리자 보호 지침 ISO/IEC 표준 번호는?",
  "a": "ISO/IEC 27018",
  "k": [
   "27018"
  ],
  "e": "Code of practice for PII in public clouds."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 1,
  "q": "GDPR 이 고위험 처리에 의무화한 개인정보 영향평가(약어)는?",
  "a": "DPIA",
  "k": [
   "DPIA",
   "Data Protection Impact Assessment",
   "PIA"
  ],
  "e": "Art.35."
 },
 {
  "s": "s6",
  "t": "개인정보 보호",
  "d": 1,
  "q": "캐나다 민간부문 개인정보 보호법(약어)은?",
  "a": "PIPEDA",
  "k": [
   "PIPEDA"
  ],
  "e": "Personal Information Protection and Electronic Documents Act."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "재무보고 내부통제 관련 국제 서비스 조직 보증 기준(IAASB)은?",
  "a": "ISAE 3402",
  "k": [
   "3402",
   "ISAE3402"
  ],
  "e": "국제판 SOC 1."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "일반 공개가 가능한 SOC 보고서 유형은?",
  "a": "SOC 3",
  "k": [
   "SOC 3",
   "SOC3"
  ],
  "e": "General use report."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 1,
  "q": "CSA STAR 의 평가 기준이 되는 클라우드 통제 매트릭스(약어)는?",
  "a": "CCM",
  "k": [
   "CCM",
   "Cloud Controls Matrix"
  ],
  "e": "Cloud Controls Matrix."
 },
 {
  "s": "s6",
  "t": "전사 리스크 관리",
  "d": 1,
  "q": "처리의 목적과 수단을 결정하는 GDPR 상 역할(영문)은?",
  "a": "Controller",
  "k": [
   "controller",
   "관리자",
   "컨트롤러"
  ],
  "e": "Data controller."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 2,
  "q": "벤더 파산에 대비해 소스코드를 제3자에 예치하는 계약 장치는?",
  "a": "Escrow",
  "k": [
   "escrow",
   "에스크로",
   "임치"
  ],
  "e": "Source code escrow."
 },
 {
  "s": "s6",
  "t": "아웃소싱·계약",
  "d": 2,
  "q": "공급자 관계 정보보안 ISO/IEC 표준 번호는?",
  "a": "ISO/IEC 27036",
  "k": [
   "27036"
  ],
  "e": "Part 4 클라우드 서비스."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 1,
  "q": "CSA 클라우드 보안 데이터 수명주기 단계를 순서대로 나열하시오.",
  "steps": [
   "Create",
   "Store",
   "Use",
   "Share",
   "Archive",
   "Destroy"
  ],
  "e": "CSA Security Guidance의 6단계. 실제로는 단계가 반복·병행될 수 있으나 시험은 이 순서."
 },
 {
  "s": "s1",
  "t": "보안 설계 원칙",
  "d": 2,
  "q": "클라우드 BC/DR 설계 절차를 순서대로 나열하시오.",
  "steps": [
   "범위·요구사항 정의(BIA로 RTO·RPO 산정)",
   "위험 분석(클라우드 고유 위협 포함)",
   "BC/DR 전략·아키텍처 설계(리전·복제·백업)",
   "구현 및 테스트",
   "보고 및 개정"
  ],
  "e": "요구사항→리스크→설계→구현·테스트→개정 순으로 진행."
 },
 {
  "s": "s2",
  "t": "발견·분류",
  "d": 2,
  "q": "클라우드 데이터 보호 프로그램 수립 순서를 나열하시오.",
  "steps": [
   "데이터 발견(Discovery — 위치·유형 파악)",
   "데이터 분류(Classification — 등급·규제 유형)",
   "라벨링·태깅(Labeling)",
   "보호 통제 적용(암호화·DLP·IRM)",
   "모니터링 및 감사"
  ],
  "e": "모르는 데이터는 보호할 수 없음 — 발견→분류→라벨→통제→감시."
 },
 {
  "s": "s2",
  "t": "보존·삭제",
  "d": 2,
  "q": "Crypto-shredding 절차를 순서대로 나열하시오.",
  "steps": [
   "삭제 대상 데이터와 관련 키(DEK·KEK) 식별",
   "Legal hold 등 보존 의무 여부 확인",
   "모든 키 사본(백업·에스크로 포함) 파기",
   "키 파기 증빙(로그·인증서) 기록 및 확인"
  ],
  "e": "보존 의무 확인 후 키 전 사본 파기, 증빙 확보."
 },
 {
  "s": "s3",
  "t": "BC/DR",
  "d": 2,
  "q": "DR 테스트 유형을 침습성(운영 영향)이 낮은 것부터 나열하시오.",
  "steps": [
   "Checklist (read-through)",
   "Tabletop / Structured walkthrough",
   "Simulation",
   "Parallel",
   "Full interruption"
  ],
  "e": "문서 검토 → 토론 → 모의 → 병행 가동 → 운영 중단 순으로 위험·현실성 증가."
 },
 {
  "s": "s3",
  "t": "리스크 분석",
  "d": 2,
  "q": "클라우드 인프라 위험 관리 절차를 순서대로 나열하시오.",
  "steps": [
   "자산·위협·취약점 식별(Identification)",
   "가능성·영향 분석(Analysis)",
   "위험 수용 기준 대비 평가(Evaluation)",
   "처리 전략 선택·통제 구현(Treatment)",
   "잔여 위험 승인 및 모니터링"
  ],
  "e": "ISO/IEC 27005 흐름과 동일."
 },
 {
  "s": "s4",
  "t": "위협 모델링",
  "d": 2,
  "q": "PASTA 위협 모델링 7단계를 순서대로 나열하시오",
  "steps": [
   "비즈니스 목표 정의",
   "기술 범위 정의",
   "애플리케이션 분해",
   "위협 분석",
   "취약점·약점 분석",
   "공격 모델링",
   "리스크·영향 분석"
  ],
  "e": "비즈니스 맥락에서 시작해 공격 시뮬레이션 후 리스크·영향으로 마무리하는 리스크 중심 흐름."
 },
 {
  "s": "s4",
  "t": "Secure SDLC",
  "d": 2,
  "q": "Secure SDLC 의 보안 활동을 단계 순서대로 나열하시오",
  "steps": [
   "보안 요구사항 도출(요구사항)",
   "위협 모델링(설계)",
   "시큐어 코딩·SAST·SCA(코딩)",
   "DAST·IAST·침투 테스트(테스트)",
   "패치·형상관리·모니터링(유지)"
  ],
  "e": "요구 → 설계 → 코딩 → 테스트 → 운영·유지 순서로 보안 활동이 배치된다."
 },
 {
  "s": "s5",
  "t": "보안 운영(SOC·IR)",
  "d": 2,
  "q": "NIST SP 800-61 Rev.2 사고 대응 생명주기를 순서대로 나열하시오",
  "steps": [
   "준비(Preparation)",
   "탐지 및 분석(Detection & Analysis)",
   "봉쇄·근절·복구(Containment, Eradication & Recovery)",
   "사후 활동(Post-Incident Activity)"
  ],
  "e": "사후 교훈은 다시 준비 단계로 피드백되는 순환 구조."
 },
 {
  "s": "s5",
  "t": "디지털 포렌식",
  "d": 2,
  "q": "ISO/IEC 27037 이 다루는 디지털 증거 초동 처리 단계를 순서대로 나열하시오",
  "steps": [
   "식별(Identification)",
   "수집(Collection)",
   "획득(Acquisition)",
   "보존(Preservation)"
  ],
  "e": "증거 후보를 식별 → 물리적 수집 또는 → 사본 획득 → 무결성 유지 보존."
 },
 {
  "s": "s6",
  "t": "eDiscovery·포렌식 요건",
  "d": 2,
  "q": "eDiscovery(EDRM 모델 기반) 주요 단계를 순서대로 나열하시오",
  "steps": [
   "식별(Identification)",
   "보존(Preservation)",
   "수집(Collection)",
   "처리·검토·분석(Processing, Review, Analysis)",
   "제출(Production)"
  ],
  "e": "식별 후 즉시 보존(legal hold)해야 이후 수집·검토 단계에서 증거가 유지된다."
 },
 {
  "s": "s6",
  "t": "감사 프로세스",
  "d": 2,
  "q": "클라우드 감사 계획 수립 단계를 순서대로 나열하시오",
  "steps": [
   "감사 목적·범위 정의",
   "감사 기준(표준·통제 프레임워크) 선정",
   "증거 수집 방법·대상(CSP 보고서 포함) 계획",
   "일정·자원 배정 및 이해관계자 통지",
   "감사 수행 후 결과 보고·후속 조치"
  ],
  "e": "목적·범위가 정해져야 기준·증거·자원을 결정할 수 있다."
 }
];

CPPG.selfcheck = [
 {
  "g": "개념",
  "t": "NIST 800-145 5특성·3모델·4배포를 말하고 ISO 17788 멀티테넌시를 안다"
 },
 {
  "g": "개념",
  "t": "서비스 모델별 공유책임 경계를 그린다"
 },
 {
  "g": "개념",
  "t": "CSP 평가 기준(ISO 27017·CSA STAR·FedRAMP 등)을 안다"
 },
 {
  "g": "개념",
  "t": "AI/ML 개념과 클라우드 AI 서비스의 보안 고려사항을 설명한다"
 },
 {
  "g": "데이터",
  "t": "데이터 수명주기 6단계별 통제를 매핑한다"
 },
 {
  "g": "데이터",
  "t": "암호화·토큰화·마스킹·익명화·가명화를 구분한다"
 },
 {
  "g": "데이터",
  "t": "키 관리(KMS·HSM·BYOK·HYOK)와 crypto-shredding 을 설명한다"
 },
 {
  "g": "데이터",
  "t": "데이터 발견·분류·IRM·보존 정책을 안다"
 },
 {
  "g": "인프라",
  "t": "Type 1/2 하이퍼바이저와 가상화 위협을 안다"
 },
 {
  "g": "인프라",
  "t": "데이터센터 설계(Tier)·BC/DR(RPO·RTO)을 설명한다"
 },
 {
  "g": "앱",
  "t": "Secure SDLC·STRIDE·SAST/DAST/SCA 를 구분한다"
 },
 {
  "g": "앱",
  "t": "SAML·OAuth·OIDC 의 인증/인가 차이를 안다"
 },
 {
  "g": "앱",
  "t": "WAF·API 게이트웨이·CASB·시크릿 관리의 역할을 안다"
 },
 {
  "g": "운영",
  "t": "ITIL·ISO 20000-1 운영 프로세스(변경·구성·문제·인시던트)를 안다"
 },
 {
  "g": "운영",
  "t": "클라우드 포렌식 난제와 ISO 27037 계열을 안다"
 },
 {
  "g": "운영",
  "t": "SOC·SIEM·IR 의 클라우드 특수성을 설명한다"
 },
 {
  "g": "법",
  "t": "eDiscovery·관할권·데이터 주권 이슈를 설명한다"
 },
 {
  "g": "법",
  "t": "SOC 1/2/3·Type I/II 를 구분한다"
 },
 {
  "g": "법",
  "t": "GDPR controller/processor·ISO 27018/27701 을 안다"
 },
 {
  "g": "법",
  "t": "SLA·계약 조항(감사권·출구전략·벤더 락인)을 안다"
 }
];

CPPG.roadmap = {
 "8주 표준": [
  "Week 1 — 도메인 1 개념·아키텍처(800-145·17789·공유책임)",
  "Week 2 — 도메인 2 데이터 보안 Ⅰ(수명주기·스토리지·암호화·키관리)",
  "Week 3 — 도메인 2 데이터 보안 Ⅱ(발견·분류·IRM·보존·AI 데이터)",
  "Week 4 — 도메인 3 플랫폼·인프라(가상화·데이터센터·BC/DR)",
  "Week 5 — 도메인 4 애플리케이션(SDLC·테스트·IAM)",
  "Week 6 — 도메인 5 보안 운영(운영 관리·포렌식·SOC)",
  "Week 7 — 도메인 6 법률·리스크·컴플라이언스",
  "Week 8 — 모의고사 125문항 2회 + 오답노트"
 ],
 "시험 3일 전": [
  "D-3 — 공유책임·데이터 수명주기·데이터 보호 기술 시트",
  "D-2 — IAM 표준·테스트 기법·감사 보고서 시트",
  "D-1 — 모의고사 1회 + 함정노트"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "NIST 800-145 정의",
  "공유책임",
  "데이터 수명주기",
  "암호화·키 관리",
  "토큰화·마스킹·익명화",
  "crypto-shredding",
  "IRM",
  "SAML·OAuth·OIDC",
  "SAST·DAST",
  "SOC 1/2/3",
  "GDPR 역할",
  "eDiscovery",
  "BC/DR RPO·RTO"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "ISO 17789 역할",
  "CSA STAR·ISO 27017",
  "하이퍼바이저 유형",
  "데이터센터 Tier",
  "STRIDE",
  "SCA·SBOM",
  "WAF·API GW",
  "CASB",
  "ITIL 운영 프로세스",
  "포렌식 ISO 27037",
  "벤더 락인·출구 전략",
  "ERM"
 ],
 "Tier 3 ★ (2026 개정 신규)": [
  "AI/ML 개념(1.6)",
  "AI/ML 데이터 보호(2.9)",
  "AI 서비스 공유책임",
  "모델·학습 데이터 무결성"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "공유책임 — PaaS 사고의 책임 경계",
  "problem": "한 기업이 PaaS 위에 웹 앱을 운영하던 중 SQL Injection으로 고객 데이터가 유출되었다. 다음 중 옳은 것은?\n① 런타임은 CSP 관리이므로 CSP가 전적으로 책임진다\n② 애플리케이션 코드 결함은 고객 책임 영역이며 데이터 최종 책임도 고객에게 있다\n③ 하이퍼바이저 취약점이므로 CSP 책임이다\n④ PaaS에서는 책임이 정확히 반반으로 나뉜다",
  "steps": [
   "PaaS 책임 경계 확인: CSP는 인프라·OS·런타임, 고객은 앱 코드·데이터·설정",
   "SQL Injection은 앱 코드 입력 검증 결함 → 고객 범위",
   "데이터 accountability는 어느 모델이든 고객"
  ],
  "answer": "② — 앱 코드 결함은 고객 책임이며 데이터 최종 책임은 위임 불가.",
  "traps": [
   "런타임이 CSP 관리라는 점만 보고 ①을 고르는 실수",
   "공유책임을 '반반'으로 오해(④)"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "Which is the BEST evidence when evaluating a CSP?",
  "problem": "A security manager is evaluating a SaaS provider for processing PII in the public cloud. Which evidence BEST supports the provider's PII protection controls?\n① A marketing whitepaper describing encryption\n② ISO/IEC 27018 certification within the scope of the ISO/IEC 27001 ISMS covering the service\n③ A Common Criteria certificate for the provider's firewall appliance\n④ A FIPS 140-2 certificate for a laptop TPM",
  "steps": [
   "Identify the requirement: PII protection by a public cloud processor",
   "ISO/IEC 27018 is the code of practice for PII in public clouds, certified alongside ISO/IEC 27001",
   "CC and FIPS certify products/modules, not the provider's PII processing practices"
  ],
  "answer": "② — 27018 directly addresses PII protection by public cloud processors and is independently certified.",
  "traps": [
   "Choosing a product certification (CC, FIPS) for an organizational control question",
   "Accepting self-published marketing material as assurance"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "토큰화 vs 암호화 vs 마스킹 선택",
  "problem": "온라인 쇼핑몰이 정기결제를 위해 카드번호(PAN)를 저장해야 한다. 주문·분석 시스템 다수가 카드번호 컬럼을 참조한다. PCI DSS 범위를 최소화하는 BEST 방법은?\n① 모든 시스템에서 AES로 PAN을 암호화하고 키를 각 시스템에 배포\n② PAN을 토큰으로 대체하고 토큰 볼트만 PAN을 보관\n③ 분석 화면에 동적 마스킹 적용\n④ PAN을 SHA-1로 해시 저장",
  "steps": [
   "요구 분석: 결제 재사용(원본 필요) + 다수 시스템의 범위 축소",
   "토큰화는 원본을 볼트에만 남기고 나머지 시스템은 무의미 토큰만 보유",
   "암호화는 키 배포 시스템이 모두 범위에 남고, 마스킹은 저장 데이터 그대로, 해시는 원본 복원 불가로 정기결제 불가"
  ],
  "answer": "② — 토큰화가 PAN 보유 시스템을 볼트로 한정해 범위 축소와 원본 재사용을 동시 충족.",
  "traps": [
   "암호화도 '보호'이므로 범위가 줄어든다고 착각",
   "해시는 결제에 필요한 원본 복원이 불가"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "AI training data — FIRST action",
  "problem": "A healthcare company plans to train an ML model in the cloud using patient records. Which should the cloud security professional do FIRST?\n① Deploy the model behind an API gateway with rate limiting\n② Perform data discovery and classification of the training dataset and confirm the lawful basis for use\n③ Apply differential privacy during inference only\n④ Purchase GPU reserved instances",
  "steps": [
   "Data protection starts with knowing what data is in the dataset (PHI/PII)",
   "Classification drives required controls (de-identification, encryption, access, retention)",
   "Deployment and inference controls come later in the lifecycle"
  ],
  "answer": "② — discovery/classification and lawful basis precede technical controls.",
  "traps": [
   "Jumping to deployment-time controls (rate limiting) before addressing training data",
   "Assuming inference-time DP protects data already memorized"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "RTO·RPO·RSL 구분",
  "problem": "전자상거래 기업의 BIA 결과: 주문 시스템은 2시간 내 복구, 데이터 손실은 최대 10분, 재해 시 평소의 40% 처리 능력이면 충분. 다음 중 옳은 것은?\n① RTO 10분, RPO 2시간, RSL 40%\n② RTO 2시간, RPO 10분, RSL 40%\n③ RTO 2시간, RPO 40%, RSL 10분\n④ MTD 10분, RTO 40%, RPO 2시간",
  "steps": [
   "복구 시간 = RTO → 2시간",
   "데이터 손실 허용 = RPO → 10분(복제 주기 10분 이내)",
   "재해 시 필요 처리 능력 = RSL → 40%"
  ],
  "answer": "② — RTO 2시간, RPO 10분, RSL 40%.",
  "traps": [
   "RTO와 RPO 뒤바꾸기",
   "RSL을 시간 지표로 오해"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "Uptime Tier selection",
  "problem": "A financial firm requires that any single unplanned component failure in power or cooling must not affect IT operations, and that maintenance can be performed without downtime. Which minimum Uptime Institute tier meets the requirement?\n① Tier I\n② Tier II\n③ Tier III\n④ Tier IV",
  "steps": [
   "Planned maintenance without downtime = concurrently maintainable (Tier III)",
   "Any single unplanned failure without impact = fault tolerant (Tier IV)",
   "Both requirements → the higher one governs"
  ],
  "answer": "④ — fault tolerance against unplanned failures requires Tier IV (which is also concurrently maintainable).",
  "traps": [
   "Stopping at Tier III because of the maintenance keyword",
   "Confusing redundant components (Tier II) with fault tolerance"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "보안 테스트 기법 선택",
  "problem": "핀테크 기업이 클라우드 네이티브 결제 앱을 개발한다. 요구사항은 (가) 커밋 직후 코드 결함 위치를 개발자에게 알려줄 것, (나) 스테이징에서 실제 HTTP 요청으로 설정 오류를 찾을 것, (다) 오픈소스 라이선스 위반을 막을 것이다. (가)(나)(다)에 맞는 기법 조합은?\n① SAST / DAST / SCA\n② DAST / SAST / IAST\n③ SCA / IAST / SAST\n④ IAST / SCA / DAST",
  "steps": [
   "(가) 미실행 코드·정확한 위치 → SAST",
   "(나) 실행 환경 외부 요청·설정 결함 → DAST",
   "(다) 의존성 라이선스·CVE → SCA"
  ],
  "answer": "① — SAST 는 코드 위치, DAST 는 런타임·설정, SCA 는 오픈소스 라이선스·취약점.",
  "traps": [
   "IAST 도 런타임이지만 '라이선스'는 SCA 만의 영역",
   "DAST 는 코드 위치를 특정하지 못함"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "SaaS 연합 인증 설계",
  "problem": "Which design BEST enables employees to access a third-party SaaS with corporate credentials, while the SaaS never receives user passwords and access is revoked immediately on termination?\n① Federate via SAML 2.0/OIDC with the corporate IdP and deprovision accounts through SCIM\n② Create local SaaS accounts with the same passwords as AD\n③ Share one service account among all employees\n④ Sync AD password hashes directly to the SaaS",
  "steps": [
   "SaaS 가 비밀번호를 받지 않음 → IdP 가 인증하고 어서션/토큰만 전달하는 연합(Federation)",
   "퇴사 즉시 차단 → IdP 계정 비활성화 + SCIM 자동 프로비저닝/디프로비저닝",
   "공유 계정·해시 동기화는 책임추적성·비밀 보호 위배"
  ],
  "answer": "① — 연합 인증은 자격증명을 IdP 에 두고, SCIM 으로 수명주기를 자동화한다.",
  "traps": [
   "SSO 는 비밀번호 '동기화'가 아니라 '신뢰 위임'",
   "공유 계정은 부인방지·감사 불가"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "ITSM 프로세스 구분",
  "problem": "클라우드 운영팀에서 (가) 장애로 중단된 결제 서비스를 30분 내 정상화, (나) 같은 장애가 지난 달 4회 반복되어 원인을 분석, (다) 원인 해결을 위한 DB 설정 변경을 승인하는 활동이 있다. 각 활동의 프로세스는?\n① 인시던트 / 문제 / 변경\n② 문제 / 인시던트 / 릴리스\n③ 변경 / 문제 / 인시던트\n④ 인시던트 / 변경 / 형상",
  "steps": [
   "(가) 신속한 서비스 복구 → 인시던트 관리",
   "(나) 반복 원인 분석·근본 원인 → 문제 관리",
   "(다) 변경 리스크 평가·승인 → 변경 관리"
  ],
  "answer": "① — 복구·원인 제거·변경 승인은 각각 인시던트·문제·변경 관리.",
  "traps": [
   "'반복'이라는 단어가 나오면 문제 관리",
   "릴리스·배포는 승인이 아니라 서비스 제공·이동"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "클라우드 VM 침해 초동 대응",
  "problem": "An IaaS VM shows signs of active compromise. The organization may pursue legal action. What should the incident responder do FIRST?\n① Capture memory and a disk snapshot, compute hashes and start a chain of custody record\n② Terminate the VM immediately to stop the attacker\n③ Reboot the VM and run antivirus\n④ Delete suspicious log files to save space",
  "steps": [
   "법적 조치 가능성 → 증거 능력 유지가 최우선",
   "휘발성 순서상 메모리 먼저, 이후 디스크 스냅샷",
   "해시 기록 + chain of custody 시작, 그 다음 네트워크 격리(NSG 변경)"
  ],
  "answer": "① — 증거 보존 후 봉쇄. 종료·재부팅·로그 삭제는 휘발성 증거를 파괴.",
  "traps": [
   "'공격 중단'이 급해 보여도 VM 삭제는 증거 소실",
   "격리는 VM 을 끄지 않고 네트워크 규칙으로"
  ]
 },
 {
  "s": "s6",
  "d": 2,
  "title": "감사 보고서 선택",
  "problem": "고객사 보안 담당자가 (가) 회계감사인에게 CSP 의 재무보고 관련 통제 보증을 제공, (나) CSP 보안 통제가 지난 12개월간 효과적으로 운영되었는지 상세 확인, (다) 영업팀이 웹사이트에 게시할 공개용 보증 문서를 원한다. 각각에 맞는 보고서는?\n① SOC 1 Type II / SOC 2 Type II / SOC 3\n② SOC 2 Type I / SOC 1 Type II / SOC 3\n③ SOC 3 / SOC 2 Type I / SOC 1\n④ ISAE 3000 / SOC 3 / SOC 2 Type II",
  "steps": [
   "(가) 재무보고 통제 = SOC 1(또는 ISAE 3402)",
   "(나) 보안 TSC + 기간 운영 효과성 = SOC 2 Type II",
   "(다) 일반 공개 = SOC 3"
  ],
  "answer": "① — 재무통제는 SOC 1, 기간 운영 효과성은 Type II, 공개용은 SOC 3.",
  "traps": [
   "Type I 은 시점 설계라 '12개월간 운영' 확인 불가",
   "SOC 2 는 제한 배포라 웹 게시 부적합"
  ]
 },
 {
  "s": "s6",
  "d": 3,
  "title": "벤더 락인과 출구 전략",
  "problem": "A company is signing a 3-year contract with a SaaS CRM provider that stores all customer data in a proprietary format. Which contract provision is MOST important to include from a risk perspective?\n① Data export in a standard, documented format within a defined period after termination, with certified deletion\n② A 15% discount for renewal\n③ A clause allowing the CSP to change features without notice\n④ Exclusive use of the CSP's proprietary integration tools",
  "steps": [
   "리스크 식별: 독점 포맷 → 벤더 락인·이식성 리스크",
   "계약 관리 요소(해지·데이터 접근·데이터 소유권) 중 출구 전략이 직접 대응",
   "할인·무통지 변경·독점 도구는 락인 심화"
  ],
  "answer": "① — 출구 전략(데이터 반환 형식·기한·삭제 증명)이 락인과 생존성 리스크를 동시에 완화.",
  "traps": [
   "'가격'은 리스크 관점 답이 아님",
   "삭제 증명 누락 시 잔존 데이터 리스크"
  ]
 }
];


/* ═══════════════════════════════════════════════════════════
   ✅ 단답형 채점 키워드 정리 — ★반드시 파일 맨 끝에 둔다★
   엔진은 k 의 ★모든★ 키워드가 답에 들어 있어야 정답으로 본다(isRight: k.every).
   k 를 '대안 표기 목록'처럼 쓴 문항은 정답(a)을 그대로 써도 오답이 되므로,
   정답에 포함된 키워드만 남긴다(없으면 정답 자체를 키워드로).
   ═══════════════════════════════════════════════════════════ */
(function () {
const norm = s => String(s).toLowerCase().replace(/[\s·,./\-()]/g, '');
(CPPG.fill || []).forEach(q => {
  const A = norm(q.a);
  if ((q.k || []).every(k => A.includes(norm(k)))) return;
  const k = (q.k || []).filter(k => A.includes(norm(k)));
  q.k = k.length ? k : [q.a];
});
})();

/* 다중 키워드 단답 — 쉼표 입력 채점 회귀 테스트용(키워드 3개 이상 문항 필요) */
CPPG.fill.push({ s:'s1', t:'클라우드 개념', d:1, q:'NIST SP 800-145 가 정의한 3가지 클라우드 서비스 모델을 모두 쓰시오.', a:'IaaS, PaaS, SaaS', k:['iaas','paas','saas'], e:'Infrastructure · Platform · Software as a Service.' });
