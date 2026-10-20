/* ============================================================
   Terraform Associate (004) — 학습·퀴즈 데이터
   소스: HashiCorp Exam Content List 004 · Terraform 1.12 문서 · Terraform_Associate_학습자료.txt
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "Terraform Associate",
 "brand": "Terraform",
 "tag": "HashiCorp Certified: Terraform Associate (004) · Terraform 1.12",
 "storeKey": "tfa",
 "topicUnit": "단원",
 "title": "Terraform Associate (004) — 암기·퀴즈 학습",
 "h1": "Terraform Associate",
 "unit": "목표",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 70,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "HashiCorp Certified: Terraform Associate (004)",
 "host": "HashiCorp (IBM)",
 "type": "객관식 — 단일 선택 · 다중 선택 · True/False 등 (약 57문항 [확인필요])",
 "time": "60분 · 온라인 감독(재택)",
 "pass": "합격선 비공개(커뮤니티 통설 약 70%) · 유효기간 2년",
 "book": "HashiCorp 공식 Exam Content List 004 + Terraform 문서(developer.hashicorp.com)",
 "slogan": "Terraform Associate = IaC 개념 + provider·state + init→plan→apply + 구성(변수·표현식·의존성·조건) + 모듈 + backend·잠금 + import·state CLI + HCP Terraform",
 "paperSpec": [
  {
   "s": "s1",
   "n": 4
  },
  {
   "s": "s2",
   "n": 8
  },
  {
   "s": "s3",
   "n": 9
  },
  {
   "s": "s4",
   "n": 12
  },
  {
   "s": "s5",
   "n": 6
  },
  {
   "s": "s6",
   "n": 7
  },
  {
   "s": "s7",
   "n": 5
  },
  {
   "s": "s8",
   "n": 6
  }
 ],
 "footer": [
  "Terraform Associate (004) / 주관 <b>HashiCorp</b> · 60분 · 온라인 감독 · <b>영어 시험</b>(한국어 미지원) · 자격 유효 2년 · <b>Terraform 1.12</b> 기준",
  "⚠ 003 은 <b>2026-01-08</b> 에 004 로 교체되었습니다. 004 는 공식 <b>8개 출제 목표</b>(IaC·기초·워크플로·구성·모듈·상태·유지·HCP)로 구성되며 lifecycle·custom conditions·ephemeral/write-only·HCP projects 가 새로 강조됩니다.",
  "HashiCorp 는 목표별 배점과 합격 점수를 공개하지 않습니다. 모의고사 57문항 구성(목표별 문항 수)은 학습 비중 기반 <b>추정치</b>입니다.",
  "데이터 소스: <code>02_타자격증_학습자료/Terraform_Associate_학습자료.txt</code> + 공식 Exam Content List · ⚠ 문항은 새로 만든 연습 문제이며 실제 기출이 아닙니다. 명령·옵션은 공식 문서로 확인하세요."
 ],
 "info": [
  {
   "title": "Exam Content List (004) — 8개 출제 목표",
   "type": "table",
   "head": [
    "목표",
    "세부(lettered)",
    "사이트 영역"
   ],
   "rows": [
    [
     "1 Infrastructure as Code (IaC) with Terraform",
     "1a IaC 정의 · 1b IaC 이점 · 1c 멀티클라우드·하이브리드·서비스 무관",
     "IaC 개념"
    ],
    [
     "2 Terraform fundamentals",
     "2a provider 설치·버전 · 2b provider 사용 · 2c 다중 provider · 2d state",
     "기초"
    ],
    [
     "3 Core Terraform workflow",
     "3a 워크플로 · 3b init · 3c validate · 3d plan · 3e apply · 3f destroy · 3g fmt",
     "워크플로"
    ],
    [
     "4 Terraform configuration",
     "4a resource/data · 4b 참조 · 4c 변수·출력 · 4d 복합 타입 · 4e 표현식·함수 · 4f 의존성 · 4g custom conditions · 4h 민감정보·Vault",
     "구성 작성"
    ],
    [
     "5 Terraform modules",
     "5a source · 5b 변수 스코프 · 5c 사용 · 5d 버전",
     "모듈"
    ],
    [
     "6 Terraform state management",
     "6a local backend · 6b 잠금 · 6c backend 블록 · 6d drift",
     "상태 관리"
    ],
    [
     "7 Maintain infrastructure with Terraform",
     "7a import · 7b state CLI · 7c verbose logging",
     "인프라 유지"
    ],
    [
     "8 HCP Terraform",
     "8a 인프라 생성 · 8b 협업·거버넌스 · 8c workspaces·projects · 8d 통합",
     "HCP Terraform"
    ]
   ]
  },
  {
   "title": "003 → 004 무엇이 바뀌었나",
   "type": "table",
   "head": [
    "항목",
    "003",
    "004"
   ],
   "rows": [
    [
     "기준 버전",
     "Terraform 1.x (구)",
     "Terraform 1.12"
    ],
    [
     "목표 구성",
     "9개 목표",
     "8개 목표"
    ],
    [
     "신규 강조",
     "—",
     "lifecycle·depends_on, custom conditions, ephemeral·write-only, HCP projects"
    ],
    [
     "상태",
     "2026-01-08 은퇴",
     "현행"
    ]
   ]
  },
  {
   "title": "시험 응시 체크",
   "type": "list",
   "items": [
    "온라인 감독(재택) — 신분증·웹캠·마이크, 책상 위 정리, 다른 모니터·휴대폰 금지",
    "영어 시험 — 영어 원어(state·drift·backend·workspace) 를 그대로 익혀 둘 것",
    "다중 선택 문항은 '정답 개수'를 문제에 명시 — 개수만큼 고르기",
    "응시료·문항 수·합격선은 공식 Cloud Engineer Certification 페이지에서 최종 확인 [확인필요]"
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "IaC 개념",
  "short": "IaC",
  "out": 0,
  "color": "#7b42bc",
  "desc": "IaC 정의·이점(자동화·재현성·버전관리) · 선언형 vs 명령형 · 불변 인프라 · 멀티클라우드·하이브리드·서비스 무관 워크플로 (목표 1)"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "Terraform 기초",
  "short": "기초",
  "out": 0,
  "color": "#5c4ee5",
  "desc": "provider 설치·버전 제약(~>)·lock file · provider tiers · 다중 provider·alias · state 의 역할 ★최빈출★ (목표 2)"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "핵심 워크플로",
  "short": "워크플로",
  "out": 0,
  "color": "#0ea5e9",
  "desc": "Write→Plan→Apply · init·validate·plan·apply·destroy·fmt 옵션 · plan 기호 · 저장된 plan (목표 3)"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "구성 작성",
  "short": "구성",
  "out": 0,
  "color": "#ef4444",
  "desc": "resource vs data · 참조 · 변수 우선순위 ★최빈출★ · 복합 타입 · 함수·for·splat·dynamic · count/for_each · lifecycle · custom conditions · sensitive·ephemeral·Vault (목표 4 · 최대 비중)"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "모듈",
  "short": "모듈",
  "out": 0,
  "color": "#f59e0b",
  "desc": "모듈 source 종류 · root vs child · 변수 스코프(입력·출력) · version 제약 · Registry 게시 요건 (목표 5)"
 },
 {
  "id": "s6",
  "no": 6,
  "name": "상태 관리",
  "short": "상태",
  "out": 0,
  "color": "#10b981",
  "desc": "local backend · state locking·force-unlock · backend 블록(S3·use_lockfile) · 마이그레이션 · drift·refresh-only·-replace·moved·removed (목표 6)"
 },
 {
  "id": "s7",
  "no": 7,
  "name": "인프라 유지",
  "short": "유지",
  "out": 0,
  "color": "#ec4899",
  "desc": "import 명령·import 블록·-generate-config-out · state list/show/mv/rm · TF_LOG 레벨·TF_LOG_PATH (목표 7)"
 },
 {
  "id": "s8",
  "no": 8,
  "name": "HCP Terraform",
  "short": "HCP",
  "out": 0,
  "color": "#6366f1",
  "desc": "VCS/CLI/API 워크플로 · 실행 모드 · 팀·권한·Sentinel/OPA · private registry · workspaces·projects · cloud 블록·terraform login (목표 8)"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "IaC 정의",
  "front": "Infrastructure as Code (IaC)",
  "key": "인프라를 코드로 정의·관리",
  "back": "서버·네트워크 등 인프라를 ★사람이 읽을 수 있는 구성 파일(코드)★로 정의하고 버전 관리·재사용·공유하는 방식. Terraform 은 HCL 로 인프라를 기술한다.",
  "tip": "IaC 의 핵심은 '수작업 콘솔 클릭 대신 코드' — 반복 가능성·일관성."
 },
 {
  "s": "s1",
  "g": "IaC 정의",
  "front": "HCL (HashiCorp Configuration Language)",
  "key": "Terraform 구성 언어",
  "back": "Terraform 구성 파일(.tf)에 쓰는 ★선언형★ 언어. 사람이 읽기 쉬우며 JSON 형식(.tf.json)도 지원한다.",
  "tip": ".tf 와 .tf.json 둘 다 유효한 구성 파일."
 },
 {
  "s": "s1",
  "g": "선언형 vs 명령형",
  "front": "Declarative",
  "key": "원하는 최종 상태를 기술",
  "back": "'무엇(what)'을 원하는지 ★목표 상태(desired state)★만 기술하면 도구가 현재 상태와 비교해 필요한 변경을 계산한다. Terraform 은 선언형.",
  "tip": "단계(how)를 쓰는 건 명령형(imperative) — 스크립트·CLI 호출."
 },
 {
  "s": "s1",
  "g": "선언형 vs 명령형",
  "front": "Imperative",
  "key": "수행 절차를 순서대로 기술",
  "back": "'어떻게(how)' 만들지 단계별 명령을 나열하는 방식. 셸 스크립트·클라우드 CLI 호출이 대표적이며 재실행 시 ★멱등성 보장이 어렵다★.",
  "tip": "선언형=목표 상태, 명령형=명령 순서."
 },
 {
  "s": "s1",
  "g": "IaC 이점",
  "front": "Idempotency",
  "key": "여러 번 적용해도 같은 결과",
  "back": "같은 구성을 여러 번 apply 해도 ★이미 원하는 상태면 변경 없음★. Terraform 은 state 와 실제 인프라를 비교해 차이만 적용한다.",
  "tip": "두 번째 apply 에서 'No changes' 가 나오면 멱등성."
 },
 {
  "s": "s1",
  "g": "IaC 이점",
  "front": "Version control (VCS)",
  "key": "인프라 변경 이력 추적",
  "back": "구성을 Git 등 ★VCS 로 관리★하면 변경 이력·코드 리뷰·롤백·협업이 가능하다.",
  "tip": "state 파일은 VCS 커밋 대상이 아님(민감정보) — 구성(.tf)과 lock 파일만."
 },
 {
  "s": "s1",
  "g": "IaC 이점",
  "front": "Reusability (Modules)",
  "key": "구성 재사용으로 표준화",
  "back": "모듈로 묶은 구성을 ★여러 환경·팀에서 재사용★해 일관성을 높이고 중복을 줄인다.",
  "tip": "재사용·표준화 = IaC 패턴의 대표 이점."
 },
 {
  "s": "s1",
  "g": "IaC 이점",
  "front": "Configuration drift",
  "key": "실제 인프라와 코드의 불일치",
  "back": "콘솔 수작업 등으로 ★실제 리소스가 구성과 달라지는 현상★. Terraform plan 이 차이를 탐지하고 apply 로 코드 상태로 되돌릴 수 있다.",
  "tip": "IaC 는 드리프트를 '탐지·교정'하는 수단."
 },
 {
  "s": "s1",
  "g": "불변 인프라",
  "front": "Immutable infrastructure",
  "key": "변경 대신 교체",
  "back": "배포 후 서버를 수정(in-place)하지 않고 ★새 리소스로 교체★하는 방식. 구성 드리프트를 줄이고 롤백이 단순하다.",
  "tip": "Terraform 의 -/+ (destroy then create) 재생성이 이 패턴과 맞닿음."
 },
 {
  "s": "s1",
  "g": "멀티클라우드",
  "front": "Multi-cloud",
  "key": "여러 클라우드를 한 워크플로로",
  "back": "Terraform 은 provider 플러그인으로 AWS·Azure·GCP 등을 ★하나의 언어·하나의 워크플로★로 관리한다. 클라우드별 도구를 따로 익힐 필요가 줄어든다.",
  "tip": "멀티클라우드 = 장애 허용·벤더 종속 완화."
 },
 {
  "s": "s1",
  "g": "멀티클라우드",
  "front": "Hybrid cloud",
  "key": "온프레미스 + 퍼블릭 클라우드",
  "back": "vSphere 등 온프레미스와 퍼블릭 클라우드를 ★같은 Terraform 워크플로★로 함께 관리할 수 있다.",
  "tip": "provider 만 있으면 데이터센터 장비도 대상."
 },
 {
  "s": "s1",
  "g": "멀티클라우드",
  "front": "Service-agnostic workflow",
  "key": "서비스 무관 공통 워크플로",
  "back": "클라우드뿐 아니라 SaaS(GitHub·Datadog·Kubernetes 등)도 ★Write→Plan→Apply 동일 절차★로 관리한다.",
  "tip": "Terraform = 'API 가 있으면 provider 로 관리 가능'."
 },
 {
  "s": "s1",
  "g": "도구 비교",
  "front": "Provisioning vs Configuration management",
  "key": "생성 도구 vs 설정 도구",
  "back": "Terraform 은 인프라 ★프로비저닝(생성·변경·삭제)★ 중심, Ansible·Chef·Puppet 은 서버 내부 ★구성 관리★ 중심. 함께 쓰는 경우가 많다.",
  "tip": "Terraform 은 에이전트 설치가 필요 없음(API 호출)."
 },
 {
  "s": "s1",
  "g": "도구 비교",
  "front": "Cloud-specific IaC",
  "key": "CloudFormation·ARM·Bicep",
  "back": "AWS CloudFormation·Azure ARM/Bicep 은 ★단일 클라우드 전용★. Terraform 은 provider 생태계로 클라우드 무관.",
  "tip": "'멀티클라우드 단일 도구' 문항이면 Terraform."
 },
 {
  "s": "s2",
  "g": "provider 설치",
  "front": "required_providers",
  "key": "provider 소스·버전 선언",
  "back": "terraform 블록 안에서 provider 의 ★source 주소와 version 제약★을 선언한다. 예 `aws = { source = \"hashicorp/aws\", version = \"~> 5.0\" }`.",
  "tip": "provider 블록(구성)과 required_providers(요구사항)는 별개."
 },
 {
  "s": "s2",
  "g": "provider 설치",
  "front": "Provider source address",
  "key": "[HOSTNAME/]NAMESPACE/TYPE",
  "back": "provider 의 전역 주소. 호스트 생략 시 ★registry.terraform.io★ 가 기본. 예 hashicorp/aws = registry.terraform.io/hashicorp/aws.",
  "tip": "NAMESPACE = 조직(hashicorp), TYPE = provider 이름(aws)."
 },
 {
  "s": "s2",
  "g": "provider 설치",
  "front": ".terraform/providers",
  "key": "provider 플러그인 설치 위치",
  "back": "terraform init 이 provider 바이너리를 작업 디렉터리의 ★.terraform/providers★ 에 내려받는다.",
  "tip": ".terraform 디렉터리는 VCS 커밋 제외."
 },
 {
  "s": "s2",
  "g": "provider 버전",
  "front": ".terraform.lock.hcl",
  "key": "provider 버전·해시 잠금",
  "back": "init 이 생성하는 ★의존성 잠금 파일★. 선택된 provider 버전과 체크섬을 기록하며 ★모듈은 잠그지 않는다★. VCS 커밋 권장.",
  "tip": "버전을 올리려면 terraform init -upgrade."
 },
 {
  "s": "s2",
  "g": "provider 버전",
  "front": "~> (pessimistic constraint)",
  "key": "가장 오른쪽 자리만 증가 허용",
  "back": "`~> 5.0` = >=5.0,<6.0 / `~> 5.10` = >=5.10,<6.0 / `~> 5.10.0` = >=5.10.0,<5.11.0.",
  "tip": "자릿수가 세 개면 패치 버전만 허용."
 },
 {
  "s": "s2",
  "g": "provider 버전",
  "front": "required_version",
  "key": "Terraform CLI 버전 제약",
  "back": "terraform 블록의 `required_version = \">= 1.12\"` 은 ★Terraform CLI 자체★ 버전을 제약한다. provider 버전과 무관.",
  "tip": "provider 버전은 required_providers 의 version."
 },
 {
  "s": "s2",
  "g": "provider 버전",
  "front": "Provider tiers",
  "key": "Official·Partner·Community",
  "back": "Official(HashiCorp 소유·관리) / Partner(기술 파트너 소유·관리, HashiCorp 검증) / Community(개인·커뮤니티 게시) + Archived(관리 중단).",
  "tip": "hashicorp/ 네임스페이스 = Official."
 },
 {
  "s": "s2",
  "g": "provider 구성",
  "front": "provider block",
  "key": "provider 설정(region·인증)",
  "back": "`provider \"aws\" { region = \"us-east-1\" }` 처럼 ★provider 별 설정★을 지정한다. 자격 증명은 하드코딩 대신 환경변수·프로필 권장.",
  "tip": "provider 블록이 없어도 기본 설정으로 동작하는 provider 가 많음."
 },
 {
  "s": "s2",
  "g": "alias 다중 provider",
  "front": "alias",
  "key": "같은 provider 의 추가 구성",
  "back": "`provider \"aws\" { alias = \"west\" region = \"us-west-2\" }` 로 같은 provider 를 ★다른 설정으로 여러 번★ 선언. alias 없는 블록이 기본(default) 구성.",
  "tip": "리소스에서 `provider = aws.west` 로 선택(따옴표 없음)."
 },
 {
  "s": "s2",
  "g": "alias 다중 provider",
  "front": "provider = aws.west",
  "key": "리소스별 provider 선택",
  "back": "리소스·데이터 소스의 메타 인수 ★provider★ 로 alias 구성을 지정한다. 모듈엔 ★providers = { aws = aws.west }★ 맵으로 전달.",
  "tip": "리소스는 provider(단수), module 은 providers(복수 맵)."
 },
 {
  "s": "s2",
  "g": "state 개념",
  "front": "terraform.tfstate",
  "key": "실제 리소스와 구성의 매핑",
  "back": "state 는 ★리소스 주소↔실제 객체 ID 매핑·메타데이터(의존성)·성능 캐시★를 저장. local backend 기본 파일명 terraform.tfstate(JSON).",
  "tip": "직접 편집 금지 — state CLI 사용."
 },
 {
  "s": "s2",
  "g": "state 개념",
  "front": "Sensitive data in state",
  "key": "state 에 평문 저장",
  "back": "리소스 속성(비밀번호 등)이 ★state 에 평문★으로 들어갈 수 있다. sensitive=true 는 출력 마스킹만. 원격 backend 암호화·접근 제어로 보호.",
  "tip": "state 는 민감 파일로 취급."
 },
 {
  "s": "s2",
  "g": "state 관리",
  "front": "Remote backend",
  "key": "state 원격 저장·공유",
  "back": "S3·azurerm·gcs·HCP Terraform 등 ★원격 backend★ 에 state 를 두면 팀 공유·잠금·암호화가 가능하다.",
  "tip": "backend 블록에는 변수 사용 불가."
 },
 {
  "s": "s2",
  "g": "state 관리",
  "front": "State locking",
  "key": "동시 쓰기 방지",
  "back": "state 를 쓰는 작업(plan·apply 등) 중 ★잠금★으로 동시 수정을 막는다. 지원 backend 에서 자동, 실패 잔존 시 `terraform force-unlock LOCK_ID`.",
  "tip": "-lock=false 는 위험 — 권장 안 함."
 },
 {
  "s": "s3",
  "g": "워크플로",
  "front": "Write → Plan → Apply",
  "key": "핵심 워크플로 3단계",
  "back": "★Write★(구성 작성) → ★Plan★(변경 미리보기·검토) → ★Apply★(실제 적용). 개인·팀·HCP Terraform 모두 같은 흐름.",
  "tip": "init 은 Write 이후 최초 1회 + provider/모듈/backend 변경 시."
 },
 {
  "s": "s3",
  "g": "init",
  "front": "terraform init",
  "key": "작업 디렉터리 초기화",
  "back": "★backend 초기화·provider 설치·모듈 다운로드·lock 파일 생성★. 여러 번 실행해도 안전(멱등).",
  "tip": "새 provider·모듈 추가·backend 변경 시 다시 init."
 },
 {
  "s": "s3",
  "g": "init",
  "front": "init 옵션",
  "key": "-upgrade · -reconfigure · -migrate-state",
  "back": "-upgrade: provider·모듈 최신(제약 내) / -reconfigure: 기존 backend 설정 무시 재구성 / -migrate-state: 새 backend 로 state 이전 / -backend=false: backend 초기화 생략 / -backend-config: 부분 구성.",
  "tip": "terraform get 은 모듈만 다운로드."
 },
 {
  "s": "s3",
  "g": "validate",
  "front": "terraform validate",
  "key": "문법·내부 일관성 검사",
  "back": "구성의 ★문법·타입·참조 일관성★만 검사. 원격 state·provider API 는 조회하지 않는다. ★init 이 먼저 필요★(provider 스키마).",
  "tip": "인수 값이 실제 클라우드에서 유효한지는 검사 못함."
 },
 {
  "s": "s3",
  "g": "plan",
  "front": "terraform plan",
  "key": "실행 계획 미리보기",
  "back": "refresh 로 실제 상태를 읽고 구성과 비교해 ★생성·변경·삭제 계획★을 보여 준다. 인프라는 변경하지 않는다.",
  "tip": "plan 은 state 를 영구 갱신하지 않음."
 },
 {
  "s": "s3",
  "g": "plan",
  "front": "plan -out=FILE",
  "key": "저장된 계획 파일",
  "back": "계획을 파일로 저장하고 `terraform apply FILE` 로 ★그 계획 그대로★ 적용. 승인 프롬프트 없이 실행된다.",
  "tip": "저장 plan 파일엔 민감정보가 포함될 수 있음."
 },
 {
  "s": "s3",
  "g": "plan",
  "front": "Plan symbols",
  "key": "+ - ~ -/+ +/- <=",
  "back": "+ 생성 / - 삭제 / ~ in-place 변경 / ★-/+ 삭제 후 생성★ / +/- 생성 후 삭제(create_before_destroy) / <= data 소스 읽기.",
  "tip": "-/+ 는 '# forces replacement' 인수 변경 때문."
 },
 {
  "s": "s3",
  "g": "plan",
  "front": "Plan modes",
  "key": "normal · -destroy · -refresh-only",
  "back": "기본(normal) / ★-destroy★ 전체 삭제 계획 / ★-refresh-only★ 실제 변경을 state 에만 반영하는 계획(구 terraform refresh 대체).",
  "tip": "-refresh=false 는 refresh 생략(모드 아님)."
 },
 {
  "s": "s3",
  "g": "apply",
  "front": "terraform apply",
  "key": "계획 승인 후 적용",
  "back": "새 계획을 만들고 ★yes 승인★ 후 적용, state 갱신. -auto-approve 로 승인 생략, 저장 plan 파일은 승인 없이 적용.",
  "tip": "apply 중 일부 실패 시 성공분은 state 에 남음(자동 롤백 없음)."
 },
 {
  "s": "s3",
  "g": "apply",
  "front": "-replace=ADDR",
  "key": "특정 리소스 강제 교체",
  "back": "`terraform apply -replace=aws_instance.web` 로 변경이 없어도 ★해당 리소스를 재생성★. deprecated 된 taint 대체.",
  "tip": "taint 는 deprecated — 시험 정답은 -replace."
 },
 {
  "s": "s3",
  "g": "apply",
  "front": "-target=ADDR",
  "key": "일부 리소스만 대상",
  "back": "plan/apply 범위를 지정 리소스(+의존성)로 제한. ★예외 상황용★이며 일상적 사용 비권장.",
  "tip": "-target 상시 사용은 state 불일치 위험."
 },
 {
  "s": "s3",
  "g": "destroy",
  "front": "terraform destroy",
  "key": "관리 리소스 전체 삭제",
  "back": "state 가 추적하는 ★모든 리소스 삭제★. `terraform apply -destroy` 의 별칭. 미리보기는 `terraform plan -destroy`.",
  "tip": "의존성 역순으로 삭제. prevent_destroy 리소스는 오류."
 },
 {
  "s": "s3",
  "g": "fmt",
  "front": "terraform fmt",
  "key": "표준 스타일 서식화",
  "back": "구성 파일을 ★HCL 표준 스타일(들여쓰기·= 정렬)★로 재작성. 기본은 현재 디렉터리만, ★-recursive★ 로 하위 포함, ★-check★ 는 수정 없이 검사(CI), -diff 차이 표시.",
  "tip": "fmt 는 문법 오류 검사기 아님(validate)."
 },
 {
  "s": "s3",
  "g": "워크플로",
  "front": "-var / -var-file / -auto-approve",
  "key": "자동화용 공통 옵션",
  "back": "plan·apply 에서 ★-var 'k=v'·-var-file=FILE★ 로 변수 지정(명령줄이 최우선), -input=false 로 입력 프롬프트 차단, apply -auto-approve 로 승인 생략.",
  "tip": "CI 는 plan -out → apply FILE 패턴 권장."
 },
 {
  "s": "s4",
  "g": "resource·data",
  "front": "resource block",
  "key": "인프라 객체 생성·관리",
  "back": "`resource \"TYPE\" \"NAME\" {}` 로 선언하며 Terraform 이 ★생성·변경·삭제(CRUD)★ 를 관리하는 객체. 주소는 `TYPE.NAME`.",
  "tip": "두 라벨 = 리소스 유형 + 로컬 이름(모듈 안에서만 고유)."
 },
 {
  "s": "s4",
  "g": "resource·data",
  "front": "data block (data source)",
  "key": "기존 정보 읽기 전용",
  "back": "`data \"aws_ami\" \"ubuntu\" {}` 처럼 ★외부·기존 객체를 조회만★ 하고 생성·삭제하지 않음. 참조는 `data.TYPE.NAME.ATTR`.",
  "tip": "참조 시 접두어 data. 를 빠뜨리면 resource 로 해석되어 오류."
 },
 {
  "s": "s4",
  "g": "resource·data",
  "front": "meta-arguments",
  "key": "모든 resource 공통 인수",
  "back": "`count`·`for_each`·`depends_on`·`provider`·`lifecycle` 은 provider 와 무관하게 ★Terraform 이 해석하는 메타 인수★.",
  "tip": "ami·instance_type 등은 provider 스키마 인수이지 메타 인수가 아님."
 },
 {
  "s": "s4",
  "g": "resource·data",
  "front": "<= (plan symbol)",
  "key": "data 소스 읽기 표시",
  "back": "plan 에서 `<=` 는 ★data 리소스를 읽을 예정★ 임을 뜻함. 인수가 apply 전에 알 수 없거나 depends_on 이 있으면 읽기가 apply 시점으로 지연.",
  "tip": "data 소스 depends_on 남용 시 (known after apply) 가 늘어 plan 가독성 저하."
 },
 {
  "s": "s4",
  "g": "참조·속성",
  "front": "TYPE.NAME.ATTRIBUTE",
  "key": "리소스 속성 참조",
  "back": "`aws_instance.web.private_ip` 처럼 다른 블록의 속성을 참조하면 ★암시적 의존성★ 이 생겨 생성 순서가 자동 결정.",
  "tip": "count 리소스는 `[0]`, for_each 리소스는 `[\"key\"]` 인덱스 필요."
 },
 {
  "s": "s4",
  "g": "참조·속성",
  "front": "module.NAME.OUTPUT",
  "key": "자식 모듈 출력 참조",
  "back": "부모는 자식 모듈의 ★output 으로 선언된 값만★ `module.vpc.vpc_id` 형식으로 참조 가능.",
  "tip": "자식 모듈 내부 리소스를 직접 참조하는 문법은 없음."
 },
 {
  "s": "s4",
  "g": "참조·속성",
  "front": "local.NAME",
  "key": "locals 값 참조",
  "back": "`locals { ... }` 블록(복수형)에 정의하고 `local.common_tags` (단수형)로 참조. ★표현식·다른 local 참조 가능★.",
  "tip": "정의는 locals, 참조는 local — 철자 함정."
 },
 {
  "s": "s4",
  "g": "참조·속성",
  "front": "path.module / path.root / terraform.workspace",
  "key": "특수 참조 값",
  "back": "`path.module` = 현재 모듈 경로, `path.root` = 루트 모듈 경로, `path.cwd` = 작업 디렉터리, `terraform.workspace` = ★현재 workspace 이름★.",
  "tip": "모듈 안 templatefile 경로는 path.module 기준으로."
 },
 {
  "s": "s4",
  "g": "variables·outputs",
  "front": "variable block",
  "key": "입력 변수 선언",
  "back": "인수 `type`·`default`·`description`·`sensitive`·`nullable`·`ephemeral`·`validation`. 참조는 ★var.NAME★.",
  "tip": "default 는 리터럴만 허용 — 다른 변수·함수 결과 참조 불가."
 },
 {
  "s": "s4",
  "g": "variables·outputs",
  "front": "variable precedence",
  "key": "변수 값 우선순위",
  "back": "낮음→높음: ★default < TF_VAR_ 환경변수 < terraform.tfvars < terraform.tfvars.json < *.auto.tfvars(사전순) < -var / -var-file★(뒤에 온 것이 이김).",
  "tip": "값이 전혀 없을 때만 대화형 프롬프트."
 },
 {
  "s": "s4",
  "g": "variables·outputs",
  "front": "output block",
  "key": "모듈 반환값",
  "back": "`output \"NAME\" { value = ... }` — 루트 모듈 출력은 apply 후 CLI 표시, 자식 모듈 출력은 ★부모에게 값 전달★.",
  "tip": "민감값을 루트 output 에 넣으면 sensitive = true 필요(아니면 오류)."
 },
 {
  "s": "s4",
  "g": "variables·outputs",
  "front": "terraform output -raw / -json",
  "key": "출력 조회 형식",
  "back": "`-raw` 는 문자열을 따옴표 없이(스크립트용), `-json` 은 ★민감값 포함 전체를 JSON★ 으로 출력.",
  "tip": "-json 은 sensitive 값도 평문으로 보여 줌."
 },
 {
  "s": "s4",
  "g": "복합 타입",
  "front": "list / set / map",
  "key": "컬렉션 타입",
  "back": "list = 순서 있음·인덱스 접근, set = ★순서·중복 없음★, map = 문자열 키 → 같은 타입 값.",
  "tip": "set 은 `[0]` 인덱스 접근 불가 → tolist() 후 접근."
 },
 {
  "s": "s4",
  "g": "복합 타입",
  "front": "object / tuple",
  "key": "구조 타입",
  "back": "object = ★이름 있는 속성별 다른 타입★, tuple = 위치별 다른 타입 `tuple([string, number])`.",
  "tip": "map 은 값 타입이 모두 같아야 하고 object 는 달라도 됨."
 },
 {
  "s": "s4",
  "g": "복합 타입",
  "front": "optional()",
  "key": "object 선택 속성",
  "back": "`object({ size = optional(string, \"t3.micro\") })` 처럼 ★속성 생략 허용 + 기본값★ (Terraform 1.3+).",
  "tip": "기본값 없이 생략하면 null."
 },
 {
  "s": "s4",
  "g": "복합 타입",
  "front": "type any / 자동 변환",
  "key": "타입 제약·변환",
  "back": "type 생략 = any. map(string) 에 숫자 1 이 오면 ★\"1\" 로 자동 변환★, 변환 불가 시 오류.",
  "tip": "bool 과 string \"true\" 도 상호 변환됨."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "for expression",
  "key": "컬렉션 변환 식",
  "back": "`[for s in var.names : upper(s)]` → list, `{for k, v in var.m : k => v}` → map, ★if 절로 필터★.",
  "tip": "대괄호 = list 결과, 중괄호 = map/object 결과."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "splat [*]",
  "key": "리스트 속성 일괄 추출",
  "back": "`aws_instance.web[*].id` = `[for o in aws_instance.web : o.id]`. ★count 리소스(list)용★.",
  "tip": "for_each 리소스(map)는 values(aws_instance.web)[*].id 또는 for 식 사용."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "dynamic block",
  "key": "중첩 블록 반복 생성",
  "back": "`dynamic \"ingress\" { for_each = var.rules  content { from_port = ingress.value.port } }` — 반복 변수 기본 이름 = ★블록 라벨★, `iterator` 로 변경.",
  "tip": "resource 전체 반복은 count/for_each, 내부 중첩 블록 반복은 dynamic."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "condition ? a : b",
  "key": "조건식",
  "back": "`var.env == \"prod\" ? 3 : 1` — 두 결과는 ★같은 타입으로 변환 가능★해야 함.",
  "tip": "count = var.create ? 1 : 0 = 조건부 생성 관용구."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "cidrsubnet(prefix, newbits, netnum)",
  "key": "CIDR 하위망 계산",
  "back": "`cidrsubnet(\"10.0.0.0/16\", 8, 2)` = ★\"10.0.2.0/24\"★ (16+8=/24, 2번째 블록).",
  "tip": "newbits 는 \"추가 비트 수\"이지 최종 prefix 길이가 아님."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "lookup / merge / zipmap",
  "key": "map 함수 3종",
  "back": "`lookup(m, k, default)` 키 없으면 기본값, `merge()` ★뒤 인수가 우선★, `zipmap(keys, values)` 두 리스트 → map.",
  "tip": "merge 키 충돌 시 마지막 map 값이 이김."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "try / can",
  "key": "오류 처리 함수",
  "back": "`try(a, b)` = 오류 없는 첫 값 반환, `can(expr)` = ★성공 여부 bool★ (validation 조건에 적합).",
  "tip": "문법적으로 잘못된 참조는 try 로도 못 잡음."
 },
 {
  "s": "s4",
  "g": "표현식·함수",
  "front": "templatefile / jsonencode",
  "key": "파일·데이터 직렬화",
  "back": "`templatefile(\"${path.module}/init.tftpl\", { name = \"web\" })` 로 외부 템플릿 렌더링, `jsonencode()` 는 ★키 사전순 JSON★ 생성.",
  "tip": "IAM policy 는 heredoc 보다 jsonencode 권장."
 },
 {
  "s": "s4",
  "g": "의존성·lifecycle",
  "front": "implicit vs depends_on",
  "key": "의존성 2종",
  "back": "속성 참조 = ★암시적 의존성(권장)★, `depends_on = [aws_iam_role_policy.p]` = 참조가 없는 숨은 의존성 전용.",
  "tip": "depends_on 은 정적 참조 목록만, 표현식 불가."
 },
 {
  "s": "s4",
  "g": "의존성·lifecycle",
  "front": "lifecycle",
  "key": "수명주기 제어 블록",
  "back": "`create_before_destroy`·`prevent_destroy`·`ignore_changes`·`replace_triggered_by`(1.2+)·`precondition`·`postcondition`.",
  "tip": "prevent_destroy 는 블록이 구성에 남아 있을 때만 보호."
 },
 {
  "s": "s4",
  "g": "의존성·lifecycle",
  "front": "count vs for_each",
  "key": "다중 인스턴스",
  "back": "count = 정수·`count.index`(0부터), for_each = ★map 또는 set(string)★·`each.key/each.value`. 동시 사용 불가.",
  "tip": "list 중간 원소 삭제 시 count 는 인덱스 이동으로 재생성 → for_each 권장."
 },
 {
  "s": "s4",
  "g": "custom conditions",
  "front": "validation / precondition / postcondition",
  "key": "사용자 정의 조건",
  "back": "variable 의 `validation`, lifecycle·output 의 `precondition`, `postcondition`(★self 참조★) — 실패 시 ★오류로 중단★.",
  "tip": "필수 인수 = condition + error_message."
 },
 {
  "s": "s4",
  "g": "custom conditions",
  "front": "check block",
  "key": "지속 검증(1.5+)",
  "back": "`check \"health\" { data \"http\" \"x\" {...}  assert { condition = ... error_message = ... } }` — 실패해도 ★경고만, apply 계속★.",
  "tip": "scoped data source 는 check 블록 안에서만 참조 가능."
 },
 {
  "s": "s4",
  "g": "민감정보·Vault",
  "front": "sensitive / ephemeral / write-only",
  "key": "민감정보 3단계",
  "back": "sensitive = ★출력 마스킹만(state 평문)★, ephemeral(1.10+) = state·plan 미저장, write-only 인수(1.11+, `password_wo`) = state 미저장.",
  "tip": "Vault data source 로 읽은 시크릿은 state 에 남음 → ephemeral resource 권장."
 },
 {
  "s": "s5",
  "g": "모듈 개념",
  "front": "Module",
  "key": "리소스 묶음의 재사용 단위",
  "back": "한 디렉터리의 .tf 파일 집합이 하나의 ★모듈★. 모든 구성은 최소 1개의 모듈(root module)을 가지며, module 블록으로 다른 모듈(child module)을 호출한다.",
  "tip": "디렉터리 = 모듈. 파일 하나가 모듈이 아님."
 },
 {
  "s": "s5",
  "g": "모듈 개념",
  "front": "Root module vs Child module",
  "key": "작업 디렉터리 = 루트 모듈",
  "back": "terraform 명령을 실행하는 작업 디렉터리의 구성이 ★root module★, root 가 module 블록으로 호출하는 모듈이 ★child module★.",
  "tip": "child 도 다시 다른 모듈을 호출 가능(중첩), 단 깊은 중첩은 비권장."
 },
 {
  "s": "s5",
  "g": "모듈 개념",
  "front": "Standard module structure",
  "key": "main·variables·outputs·README",
  "back": "권장 구조: main.tf, variables.tf, outputs.tf, README.md, LICENSE, 하위 ★modules/★·★examples/★ 디렉터리. Registry 게시 시 이 구조로 문서가 자동 생성된다.",
  "tip": "파일명은 관례일 뿐 Terraform 은 디렉터리의 모든 .tf 를 합쳐 읽음."
 },
 {
  "s": "s5",
  "g": "모듈 source",
  "front": "source = \"./modules/vpc\"",
  "key": "로컬 경로 모듈",
  "back": "★./ 또는 ../★ 로 시작하면 로컬 경로. 다운로드·복사 없이 직접 참조되며 ★version 인수 사용 불가★.",
  "tip": "로컬 경로는 반드시 ./ 또는 ../ 로 시작 — 'modules/vpc' 는 Registry 주소로 해석됨."
 },
 {
  "s": "s5",
  "g": "모듈 source",
  "front": "source = \"hashicorp/consul/aws\"",
  "key": "Registry 주소 NAMESPACE/NAME/PROVIDER",
  "back": "공개 Terraform Registry 모듈 주소는 ★<NAMESPACE>/<NAME>/<PROVIDER>★. private registry 는 앞에 호스트 추가: ★app.terraform.io/ORG/NAME/PROVIDER★.",
  "tip": "provider 주소(NAMESPACE/TYPE)와 형식 혼동 주의 — 모듈은 3단."
 },
 {
  "s": "s5",
  "g": "모듈 source",
  "front": "git:: · github.com · ?ref=",
  "key": "Git 소스와 ref 고정",
  "back": "Git 소스는 ★git::https://...★ 또는 ★github.com/ORG/REPO★ 형식. 특정 태그·브랜치·커밋은 ★?ref=v1.2.0★, 하위 디렉터리는 ★//subdir★ 로 지정.",
  "tip": "Git 소스엔 version 인수가 아니라 ?ref= 를 쓴다."
 },
 {
  "s": "s5",
  "g": "모듈 source",
  "front": "s3:: · gcs:: · HTTP URL",
  "key": "기타 원격 소스",
  "back": "S3 버킷(★s3::★), GCS(★gcs::★), HTTP URL(zip 등 아카이브), Bitbucket, Mercurial(★hg::★)도 모듈 소스로 지원.",
  "tip": "원격 소스는 init 시 .terraform/modules 로 다운로드."
 },
 {
  "s": "s5",
  "g": "모듈 사용",
  "front": "terraform init / terraform get",
  "key": "모듈 설치 명령",
  "back": "module 블록 추가·source 변경 후 ★terraform init★(또는 terraform get)으로 모듈 설치. 설치 위치는 ★.terraform/modules★.",
  "tip": "init 없이 plan 하면 'Module not installed' 오류."
 },
 {
  "s": "s5",
  "g": "변수 스코프",
  "front": "module.NAME.OUTPUT",
  "key": "부모의 유일한 자식 값 접근 경로",
  "back": "부모는 자식 모듈 내부 리소스에 직접 접근 불가. 자식이 ★output★ 으로 노출한 값만 ★module.<NAME>.<OUTPUT>★ 으로 참조한다.",
  "tip": "module.vpc.aws_vpc.main.id 같은 직접 참조는 오류."
 },
 {
  "s": "s5",
  "g": "변수 스코프",
  "front": "Input variables (module arguments)",
  "key": "부모→자식 값 전달",
  "back": "자식 모듈은 부모의 변수·로컬·리소스를 볼 수 없다. module 블록의 ★인수★로 값을 넘기면 자식의 ★variable★ 에 바인딩된다.",
  "tip": "default 없는 자식 변수는 module 블록에서 반드시 전달(required)."
 },
 {
  "s": "s5",
  "g": "모듈 사용",
  "front": "providers = { aws = aws.west }",
  "key": "모듈에 provider 별칭 전달",
  "back": "기본(default) provider 구성은 자식에 ★암묵 상속★, alias 구성은 module 블록의 ★providers★ 맵으로 명시 전달. 자식은 required_providers 로 요구 provider 선언.",
  "tip": "재사용 모듈 내부에 provider 블록을 두지 말 것 — count/for_each 사용 불가해짐."
 },
 {
  "s": "s5",
  "g": "모듈 사용",
  "front": "count / for_each / depends_on on module",
  "key": "모듈 메타 인수(0.13+)",
  "back": "module 블록도 ★count·for_each·depends_on·providers★ 메타 인수 지원. 인스턴스는 module.NAME[0] 또는 module.NAME[\"key\"] 로 참조.",
  "tip": "count 와 for_each 는 모듈에서도 동시 사용 불가."
 },
 {
  "s": "s5",
  "g": "모듈 버전",
  "front": "version = \"~> 3.0\"",
  "key": "Registry 모듈 버전 제약",
  "back": "★Registry(public/private) 모듈만★ version 인수 지원. ~> 3.0 = >=3.0, <4.0. 운영에선 버전 고정 권장.",
  "tip": "모듈 버전은 .terraform.lock.hcl 에 잠기지 않음 → version 제약으로 관리."
 },
 {
  "s": "s5",
  "g": "모듈 버전",
  "front": "terraform init -upgrade",
  "key": "모듈·provider 최신 허용 버전 재선택",
  "back": "-upgrade 는 제약 범위 내 ★최신 모듈 버전★과 provider 를 다시 받는다. 제약을 바꾼 뒤 사용.",
  "tip": "단순 init 은 이미 설치된 모듈 버전을 유지."
 },
 {
  "s": "s5",
  "g": "모듈 버전",
  "front": "Registry 게시 요건",
  "key": "terraform-<PROVIDER>-<NAME>",
  "back": "공개 Registry 게시: ★GitHub 공개 저장소★, 이름 ★terraform-<PROVIDER>-<NAME>★, 저장소 설명, 표준 모듈 구조, ★x.y.z 시맨틱 버전 태그★(v 접두 허용).",
  "tip": "태그가 없으면 게시 불가 — 브랜치명은 버전이 아님."
 },
 {
  "s": "s6",
  "g": "local backend",
  "front": "backend \"local\"",
  "key": "기본 backend, terraform.tfstate",
  "back": "backend 미지정 시 ★local★ backend 사용. 작업 디렉터리의 ★terraform.tfstate★ 에 저장하고 직전 상태는 terraform.tfstate.backup. ★path★ 인수로 위치 변경.",
  "tip": "CLI workspace 사용 시 terraform.tfstate.d/<이름>/ 아래 저장."
 },
 {
  "s": "s6",
  "g": "state locking",
  "front": "State locking",
  "key": "동시 쓰기로 인한 상태 손상 방지",
  "back": "상태를 쓸 수 있는 작업(plan·apply 등)에서 ★자동 잠금★. 지원하는 backend 에서만 동작하며 실패 시 Terraform 은 진행하지 않는다.",
  "tip": "local backend 도 로컬 시스템 API 로 잠금 지원."
 },
 {
  "s": "s6",
  "g": "state locking",
  "front": "terraform force-unlock LOCK_ID",
  "key": "잠금 수동 해제",
  "back": "비정상 종료로 남은 잠금을 ★LOCK_ID★ 로 해제. ★현재 구성의 잠금만★ 해제하며 다른 사람이 실행 중이면 위험.",
  "tip": "-force 는 확인 프롬프트만 생략 — 잠금 ID 는 여전히 필요."
 },
 {
  "s": "s6",
  "g": "state locking",
  "front": "-lock=false / -lock-timeout=30s",
  "key": "잠금 옵션",
  "back": "-lock=false 는 잠금 비활성(비권장), ★-lock-timeout★ 은 잠금 획득 재시도 대기 시간(기본 0s).",
  "tip": "잠금 충돌 시 무작정 -lock=false 금지."
 },
 {
  "s": "s6",
  "g": "remote backend",
  "front": "backend \"s3\"",
  "key": "S3 원격 상태 + 잠금",
  "back": "bucket·key·region 지정. 잠금은 ★use_lockfile = true★(1.10+ S3 네이티브) 또는 ★dynamodb_table★(1.11 deprecated). encrypt = true, 버킷 버저닝 권장.",
  "tip": "시험엔 DynamoDB 잠금도 나올 수 있으니 둘 다 기억."
 },
 {
  "s": "s6",
  "g": "remote backend",
  "front": "Partial configuration",
  "key": "-backend-config 로 값 주입",
  "back": "backend 블록엔 ★변수·locals·data 사용 불가★. 비우거나 일부만 쓰고 ★terraform init -backend-config=FILE 또는 KEY=VALUE★ 로 나머지 전달.",
  "tip": "자격증명은 backend 블록에 하드코딩 말고 환경변수로."
 },
 {
  "s": "s6",
  "g": "remote backend",
  "front": "init -migrate-state / -reconfigure",
  "key": "backend 변경 후 재초기화",
  "back": "backend 를 바꾸면 ★terraform init★ 필수. ★-migrate-state★ 는 기존 상태 이전, ★-reconfigure★ 는 기존 설정 무시(이전 없음).",
  "tip": "-reconfigure 를 잘못 쓰면 상태 없이 시작 → 전부 생성 계획."
 },
 {
  "s": "s6",
  "g": "remote state",
  "front": "data \"terraform_remote_state\"",
  "key": "다른 구성의 output 읽기",
  "back": "다른 구성의 상태에서 ★root module output 만★ 읽는다: data.terraform_remote_state.NAME.outputs.X.",
  "tip": "읽는 쪽이 상태 스냅샷 전체 접근 권한이 필요 → tfe_outputs·전용 데이터 소스 대안."
 },
 {
  "s": "s6",
  "g": "drift 관리",
  "front": "plan/apply -refresh-only",
  "key": "드리프트를 상태에만 반영",
  "back": "실제 인프라를 읽어 ★상태만 갱신★, 인프라 변경 없음. 구 terraform refresh(deprecated)의 안전한 대체.",
  "tip": "-refresh=false 는 반대로 새로고침을 건너뜀."
 },
 {
  "s": "s6",
  "g": "drift 관리",
  "front": "apply -replace=ADDR",
  "key": "특정 리소스 강제 재생성",
  "back": "손상된 리소스를 ★삭제 후 재생성★ 계획. deprecated 된 ★terraform taint★ 대체(plan 에서 미리 확인 가능).",
  "tip": "taint 는 상태를 즉시 바꿨지만 -replace 는 plan 단계에서 검토."
 },
 {
  "s": "s6",
  "g": "state 리팩터링",
  "front": "moved / removed 블록",
  "key": "코드로 주소 변경·관리 해제",
  "back": "★moved★(1.1+) from/to 로 이름 변경 시 재생성 방지. ★removed★(1.7+) + lifecycle { destroy = false } 로 실제 리소스는 두고 상태에서만 제거.",
  "tip": "removed 의 destroy = true(기본)는 실제 삭제."
 },
 {
  "s": "s6",
  "g": "local backend",
  "front": "State file (serial · lineage)",
  "key": "상태 = 구성↔실제 매핑 JSON",
  "back": "state 는 리소스 ID 매핑·의존성 메타데이터·속성 캐시를 담은 ★JSON★. ★lineage★ 는 상태 고유 ID, ★serial★ 은 쓰기마다 증가하는 번호.",
  "tip": "민감값이 평문 포함 가능 → VCS 커밋 금지, 저장소 암호화."
 },
 {
  "s": "s6",
  "g": "remote backend",
  "front": "Backend types",
  "key": "local · s3 · azurerm · gcs · consul 등",
  "back": "내장 backend: ★local, remote, azurerm, consul, cos, gcs, http, kubernetes, oss, pg, s3★. 잠금 지원 여부는 backend 마다 다름.",
  "tip": "HCP Terraform 연동은 backend \"remote\" 보다 ★cloud 블록★ 권장."
 },
 {
  "s": "s6",
  "g": "remote backend",
  "front": "Remote backend 이점",
  "key": "공유·잠금·암호화·버저닝",
  "back": "팀이 같은 상태를 ★공유★, 동시 실행 ★잠금★, 저장소 ★암호화·버저닝★으로 보호, 로컬 디스크 유실 위험 제거.",
  "tip": "원격 backend 라도 상태 내용은 평문 JSON — 접근제어 필수."
 },
 {
  "s": "s6",
  "g": "drift 관리",
  "front": "Drift",
  "key": "실제 인프라 ≠ 상태/구성",
  "back": "콘솔 수동 변경 등으로 실제가 달라진 상태. 일반 plan 은 ★새로고침으로 감지★ 후 구성대로 복원 계획, -refresh-only 는 상태만 실제에 맞춤.",
  "tip": "수동 변경을 수용하려면 상태뿐 아니라 ★코드도 수정★해야 함."
 },
 {
  "s": "s7",
  "g": "import 명령",
  "front": "terraform import ADDR ID",
  "key": "기존 리소스를 state 로 편입",
  "back": "이미 존재하는 실제 리소스를 지정한 주소로 ★state 에만★ 기록한다. ★구성(.tf) 파일은 생성하지 않으며★, 대상 resource 블록이 구성에 먼저 있어야 한다.",
  "tip": "import 명령 = 한 번에 1개, plan 미리보기 없음 → 1.5+ 에선 import 블록 권장."
 },
 {
  "s": "s7",
  "g": "import 블록",
  "front": "import { to = ... id = ... }",
  "key": "선언형 import(1.5+)",
  "back": "구성 파일에 ★import 블록★(to=대상 주소, id=실제 리소스 ID)을 적고 plan 으로 미리 본 뒤 ★apply 시점에 state 로 편입★한다. CI/CD·코드 리뷰에 적합.",
  "tip": "import 블록은 plan 단계에서 검토 가능 — '명령형 import 와 달리 plannable'이 핵심."
 },
 {
  "s": "s7",
  "g": "import 블록",
  "front": "-generate-config-out=FILE",
  "key": "import 대상 구성 자동 생성",
  "back": "`terraform plan -generate-config-out=generated.tf` 는 import 블록 대상 중 ★resource 블록이 없는 것의 HCL 을 생성★한다. 지정 파일이 ★이미 있으면 오류★이며 생성 결과는 검토·수정이 필요하다.",
  "tip": "명령은 plan 에 붙는다(apply 아님). 기능 자체는 실험적(experimental) 표기."
 },
 {
  "s": "s7",
  "g": "import 블록",
  "front": "import + for_each",
  "key": "여러 리소스 일괄 import(1.7+)",
  "back": "Terraform 1.7+ 부터 import 블록에 ★for_each★ 를 써서 map/set 으로 여러 인스턴스를 한 번에 import 할 수 있다. to 에 `aws_s3_bucket.b[each.key]` 형태 사용.",
  "tip": "import 블록은 root module 에만 둘 수 있다(자식 모듈 내부 X, to 는 모듈 주소 가능)."
 },
 {
  "s": "s7",
  "g": "state 조회",
  "front": "terraform state list",
  "key": "state 내 리소스 주소 목록",
  "back": "state 에 기록된 ★리소스 주소 목록★을 출력한다. 주소 인자나 `-id=ID` 로 필터링 가능.",
  "tip": "속성까지 보려면 list 가 아니라 state show."
 },
 {
  "s": "s7",
  "g": "state 조회",
  "front": "terraform state show ADDR",
  "key": "단일 리소스 속성 상세",
  "back": "지정한 리소스 인스턴스 하나의 ★모든 속성★을 state 기준으로 사람이 읽기 쉬운 형식으로 출력한다.",
  "tip": "terraform show = 전체 state 또는 plan 파일 출력, state show = 리소스 1개."
 },
 {
  "s": "s7",
  "g": "state 수정",
  "front": "terraform state mv SRC DST",
  "key": "state 주소 이동·이름 변경",
  "back": "리소스를 파괴·재생성 없이 ★state 상의 주소만 변경★한다(이름 변경, 모듈로 이동 등). 1.1+ 에서는 코드로 이력이 남는 ★moved 블록★ 권장.",
  "tip": "구성 수정 없이 state mv 만 하면 다음 plan 에 차이가 생김 — 코드도 함께 바꿔야 한다."
 },
 {
  "s": "s7",
  "g": "state 수정",
  "front": "terraform state rm ADDR",
  "key": "state 에서만 제거(실물 유지)",
  "back": "지정 리소스를 ★Terraform 관리 대상에서 제외★한다. 실제 인프라는 ★삭제되지 않는다★. 1.7+ 는 removed 블록(lifecycle { destroy = false }) 권장.",
  "tip": "rm 후 구성에 resource 블록이 남아 있으면 다음 apply 때 새로 생성하려 한다."
 },
 {
  "s": "s7",
  "g": "state 동기화",
  "front": "terraform state pull",
  "key": "원격 state 를 stdout 출력",
  "back": "현재 backend 의 state 를 내려받아 ★JSON 으로 표준출력★한다. 백업·분석(jq) 용도. 로컬 state 에서도 동작.",
  "tip": "pull 은 파일로 저장하지 않는다 → `terraform state pull > backup.tfstate` 로 리다이렉트."
 },
 {
  "s": "s7",
  "g": "state 동기화",
  "front": "terraform state push FILE",
  "key": "로컬 state 파일을 backend 에 덮어쓰기",
  "back": "로컬 state 파일을 원격 backend 로 업로드한다. ★lineage 불일치·serial 이 더 낮으면 거부★되며 `-force` 로만 강제 가능 — 위험한 수동 복구용.",
  "tip": "push 는 최후 수단. 일상 작업은 plan/apply 로만 state 를 갱신."
 },
 {
  "s": "s7",
  "g": "state 수정",
  "front": "terraform state replace-provider",
  "key": "state 의 provider 주소 교체",
  "back": "state 에 기록된 리소스들의 ★provider 소스 주소★를 일괄 변경한다(예 포크한 provider 로 전환).",
  "tip": "리소스 주소 변경은 state mv, provider 주소 변경은 replace-provider."
 },
 {
  "s": "s7",
  "g": "로깅·디버깅",
  "front": "TF_LOG",
  "key": "상세 로그 활성화 환경변수",
  "back": "TF_LOG 를 ★TRACE·DEBUG·INFO·WARN·ERROR★ 중 하나로 설정하면 상세 로그가 ★stderr★ 로 출력된다. TRACE 가 가장 상세. `JSON` 은 TRACE 수준을 JSON 형식으로 출력.",
  "tip": "레벨 순서(상세→간략): TRACE > DEBUG > INFO > WARN > ERROR."
 },
 {
  "s": "s7",
  "g": "로깅·디버깅",
  "front": "TF_LOG_PATH",
  "key": "로그 파일 경로 지정",
  "back": "로그를 지정 파일에 기록한다. ★TF_LOG 가 함께 설정돼 있어야★ 로그가 생성된다.",
  "tip": "TF_LOG_PATH 만 설정하면 아무 로그도 남지 않는다."
 },
 {
  "s": "s7",
  "g": "로깅·디버깅",
  "front": "TF_LOG_CORE / TF_LOG_PROVIDER",
  "key": "코어·provider 로그 분리",
  "back": "TF_LOG_CORE 는 ★Terraform 코어★ 로그만, TF_LOG_PROVIDER 는 ★provider 플러그인★ 로그만 지정 레벨로 켠다. Terraform 이 비정상 종료(panic)하면 작업 디렉터리에 ★crash.log★ 가 생성된다.",
  "tip": "provider API 오류 추적 = TF_LOG_PROVIDER=DEBUG 처럼 범위를 좁혀 로그량 절감."
 },
 {
  "s": "s8",
  "g": "HCP 워크플로",
  "front": "HCP Terraform",
  "key": "HashiCorp 관리형 Terraform 플랫폼",
  "back": "구 ★Terraform Cloud★. 원격 실행·원격 state·잠금·VCS 연동·팀 권한·정책·private registry 를 SaaS 로 제공한다. ★Terraform Enterprise★ 는 같은 기능의 ★자체 호스팅★ 배포판.",
  "tip": "Terraform Cloud = HCP Terraform(개명). Enterprise = self-hosted."
 },
 {
  "s": "s8",
  "g": "HCP 워크플로",
  "front": "VCS-driven workflow",
  "key": "Git 커밋·PR 로 run 트리거",
  "back": "워크스페이스를 GitHub·GitLab 등 저장소에 연결해 ★PR 은 speculative plan★, ★기본 브랜치 머지(push)는 plan+apply run★ 을 자동 실행한다.",
  "tip": "VCS 연결 워크스페이스에서는 CLI 의 terraform apply 를 실행할 수 없다(plan 은 speculative 가능)."
 },
 {
  "s": "s8",
  "g": "HCP 워크플로",
  "front": "CLI-driven workflow",
  "key": "로컬 CLI 로 원격 run 실행",
  "back": "`cloud` 블록 구성 후 로컬에서 terraform plan/apply 를 실행하면 ★구성이 업로드되어 HCP 에서 원격 실행★되고 출력이 터미널로 스트리밍된다.",
  "tip": "업로드 제외 파일은 .terraformignore 로 지정."
 },
 {
  "s": "s8",
  "g": "HCP 워크플로",
  "front": "API-driven workflow",
  "key": "API 로 구성 버전 업로드·run 생성",
  "back": "자체 CI/CD 파이프라인이 ★HCP Terraform API★ 로 configuration version 을 업로드하고 run 을 생성·제어하는 방식. 최대 유연성.",
  "tip": "세 워크플로: VCS / CLI / API — 트리거 주체로 구분."
 },
 {
  "s": "s8",
  "g": "실행·run",
  "front": "Execution mode",
  "key": "remote / local / agent",
  "back": "★remote(기본)★ = HCP 인프라에서 실행, ★local★ = 로컬에서 실행하고 HCP 는 state 저장·잠금만, ★agent★ = 사설망의 HCP Terraform agent 가 실행.",
  "tip": "사설망(온프레미스) 리소스 접근 = agent 모드."
 },
 {
  "s": "s8",
  "g": "실행·run",
  "front": "Speculative plan",
  "key": "적용 불가 plan 전용 run",
  "back": "PR 이나 CLI plan 으로 생성되는 ★plan-only run★. 변경 영향을 검토하는 용도이며 ★apply 할 수 없다★.",
  "tip": "PR 검토 = speculative plan, 머지 후 = 실제 run."
 },
 {
  "s": "s8",
  "g": "실행·run",
  "front": "Run 단계",
  "key": "plan → 비용추정 → 정책 → apply",
  "back": "run 은 대기 → ★plan★ → (cost estimation) → ★policy check★ → 확인(confirm) → ★apply★ 순. 정책 검사는 ★plan 이후 apply 이전★.",
  "tip": "auto-apply 설정이 꺼져 있으면 apply 전 사용자 승인 필요."
 },
 {
  "s": "s8",
  "g": "협업·권한",
  "front": "Organization · Team",
  "key": "조직·팀 기반 권한 관리",
  "back": "organization 이 최상위 단위이며 ★owners 팀★ 이 전체 관리 권한을 가진다. 팀에 ★organization·project·workspace★ 수준 권한을 부여한다.",
  "tip": "권한은 사용자 개인이 아니라 팀 단위로 부여."
 },
 {
  "s": "s8",
  "g": "workspace·project",
  "front": "HCP workspace",
  "key": "구성·변수·state·run 이력 단위",
  "back": "HCP Terraform workspace 는 하나의 구성에 대한 ★state·변수·실행 이력·권한·설정★ 을 묶은 관리 단위. CLI workspace(같은 구성의 state 만 분리)와 개념이 다르다.",
  "tip": "환경(dev/prod)별·컴포넌트별로 workspace 분리."
 },
 {
  "s": "s8",
  "g": "workspace·project",
  "front": "Project",
  "key": "workspace 묶음 + 권한 범위",
  "back": "organization 안에서 여러 workspace 를 ★project 로 그룹화★하고 project 수준으로 팀 권한·variable set·정책을 적용한다.",
  "tip": "계층: organization → project → workspace."
 },
 {
  "s": "s8",
  "g": "workspace·project",
  "front": "Variable set",
  "key": "여러 workspace 공용 변수 묶음",
  "back": "Terraform 변수·환경변수(예 클라우드 자격증명)를 묶어 ★여러 workspace·project 에 일괄 적용★한다. sensitive 로 표시한 값은 UI·API 에서 다시 읽을 수 없다.",
  "tip": "Terraform variable 과 environment variable 두 종류를 구분."
 },
 {
  "s": "s8",
  "g": "정책·거버넌스",
  "front": "Sentinel / OPA",
  "key": "Policy as Code 정책 검사",
  "back": "★Sentinel★(HashiCorp 언어)·★OPA★(Rego) 정책을 policy set 으로 workspace 에 연결해 plan 결과를 검사한다. Sentinel 강제 수준: ★advisory / soft-mandatory / hard-mandatory★.",
  "tip": "soft-mandatory = 권한자 override 가능, hard-mandatory = override 불가."
 },
 {
  "s": "s8",
  "g": "정책·거버넌스",
  "front": "Private registry · Run tasks",
  "key": "사내 모듈 공유·외부 도구 연동",
  "back": "★private registry★ 로 조직 내부 모듈·provider 를 공유(source = `app.terraform.io/ORG/NAME/PROVIDER`)하고, ★run tasks★ 로 보안 스캔 등 외부 서비스를 run 단계(pre-plan·post-plan·pre-apply 등)에 연동한다.",
  "tip": "run tasks 강제 수준: advisory / mandatory."
 },
 {
  "s": "s8",
  "g": "cloud 블록",
  "front": "cloud 블록 · terraform login",
  "key": "CLI 와 HCP 통합",
  "back": "terraform 블록 안 ★cloud { organization = \"org\"  workspaces { name = \"app\" } }★ 로 연결하고, ★terraform login★ 이 API 토큰을 받아 credentials.tfrc.json 에 저장한다. 이후 terraform init 이 로컬 state 마이그레이션을 제안한다.",
  "tip": "cloud 블록과 backend 블록은 동시 사용 불가. hostname 기본값 app.terraform.io."
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "IaC 도구 비교",
  "type": "table",
  "head": [
   "도구",
   "성격",
   "상태"
  ],
  "rows": [
   [
    "Terraform / OpenTofu",
    "선언형·프로비저닝·멀티클라우드(HCL)",
    "state 파일"
   ],
   [
    "CloudFormation",
    "선언형·AWS 전용(JSON/YAML)",
    "AWS 가 관리(stack)"
   ],
   [
    "ARM / Bicep",
    "선언형·Azure 전용",
    "Azure 가 관리"
   ],
   [
    "Pulumi",
    "범용 언어로 IaC(TypeScript·Python 등)",
    "state 백엔드"
   ],
   [
    "Ansible",
    "구성 관리 중심·절차형 플레이북·에이전트리스(SSH)",
    "상태 파일 없음"
   ],
   [
    "Chef · Puppet",
    "구성 관리·에이전트 방식",
    "에이전트가 수렴"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "provider 버전 제약 연산자",
  "type": "table",
  "head": [
   "표기",
   "허용 범위"
  ],
  "rows": [
   [
    "= 5.10.0 (또는 5.10.0)",
    "정확히 그 버전"
   ],
   [
    "!= 5.10.0",
    "그 버전 제외"
   ],
   [
    ">= 5.0, < 6.0",
    "범위 결합(쉼표=AND)"
   ],
   [
    "~> 5.0",
    ">= 5.0, < 6.0"
   ],
   [
    "~> 5.10",
    ">= 5.10, < 6.0"
   ],
   [
    "~> 5.10.0",
    ">= 5.10.0, < 5.11.0"
   ],
   [
    "required_version",
    "Terraform CLI 버전 제약(provider 아님)"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 핵심 명령 한눈에 — 무엇을 바꾸는가",
  "type": "table",
  "head": [
   "명령",
   "하는 일",
   "state 변경",
   "실제 인프라 변경"
  ],
  "rows": [
   [
    "terraform init",
    "provider·모듈 설치, backend 초기화, lock file 생성",
    "X (backend 연결)",
    "X"
   ],
   [
    "terraform validate",
    "문법·내부 일관성 검사(API 호출 없음)",
    "X",
    "X"
   ],
   [
    "terraform fmt",
    "표준 스타일로 재작성(-recursive·-check·-diff)",
    "X",
    "X"
   ],
   [
    "terraform plan",
    "현재 state·실제 ↔ 구성 차이 계산(실행 계획)",
    "X",
    "X"
   ],
   [
    "terraform apply",
    "계획 실행(확인 프롬프트, -auto-approve)",
    "O",
    "O"
   ],
   [
    "terraform destroy",
    "관리 리소스 전부 삭제(= apply -destroy)",
    "O",
    "O"
   ],
   [
    "apply -refresh-only",
    "실제 상태를 state 에 반영(drift 수용)",
    "O",
    "X"
   ],
   [
    "apply -replace=ADDR",
    "특정 리소스 강제 재생성(구 taint)",
    "O",
    "O"
   ],
   [
    "terraform import",
    "기존 리소스를 state 에 등록",
    "O",
    "X"
   ],
   [
    "terraform state rm",
    "state 에서만 제거(리소스 유지)",
    "O",
    "X"
   ],
   [
    "terraform state mv",
    "state 주소 변경(이름·모듈 이동)",
    "O",
    "X"
   ],
   [
    "terraform output",
    "root 모듈 출력값 조회(-json·-raw)",
    "X",
    "X"
   ],
   [
    "terraform show",
    "state 또는 저장된 plan 을 사람이 읽게 출력",
    "X",
    "X"
   ],
   [
    "terraform force-unlock ID",
    "멈춘 state 잠금 강제 해제",
    "잠금만",
    "X"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "plan 출력 기호",
  "type": "table",
  "head": [
   "기호",
   "의미",
   "주로 언제"
  ],
  "rows": [
   [
    "+",
    "create — 새로 생성",
    "새 resource 블록"
   ],
   [
    "-",
    "destroy — 삭제",
    "블록 제거·destroy"
   ],
   [
    "~",
    "update in-place — 그 자리 수정",
    "태그 등 수정 가능한 인수 변경"
   ],
   [
    "-/+",
    "destroy 후 create (재생성)",
    "변경 불가 인수(AMI 등) 변경·-replace"
   ],
   [
    "+/-",
    "create 후 destroy",
    "create_before_destroy = true"
   ],
   [
    "<=",
    "read — data source 읽기",
    "apply 시점까지 값을 모르는 data"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 변수 값 우선순위 — 아래로 갈수록 이긴다",
  "type": "table",
  "head": [
   "순위(낮음→높음)",
   "출처",
   "비고"
  ],
  "rows": [
   [
    "0",
    "variable 블록 default",
    "값이 아무 데도 없으면 사용, 없으면 대화형 입력"
   ],
   [
    "1",
    "환경변수 TF_VAR_name",
    "export TF_VAR_region=us-west-2"
   ],
   [
    "2",
    "terraform.tfvars",
    "자동 로드"
   ],
   [
    "3",
    "terraform.tfvars.json",
    "자동 로드"
   ],
   [
    "4",
    "*.auto.tfvars / *.auto.tfvars.json",
    "파일명 사전순, 뒤 파일이 이김"
   ],
   [
    "5 ★최우선★",
    "-var / -var-file (명령줄)",
    "명령줄에 적은 순서대로, 뒤에 온 것이 이김"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "데이터 타입",
  "type": "table",
  "head": [
   "분류",
   "타입",
   "특징·예"
  ],
  "rows": [
   [
    "원시(primitive)",
    "string · number · bool",
    "\"t3.micro\" · 3 · true"
   ],
   [
    "컬렉션(collection)",
    "list(T)",
    "순서 O·중복 O · var.azs[0]"
   ],
   [
    "",
    "set(T)",
    "순서 X·중복 X · for_each 에 toset()"
   ],
   [
    "",
    "map(T)",
    "키=값, 값 타입 동일 · var.tags[\"Name\"]"
   ],
   [
    "구조(structural)",
    "object({...})",
    "속성마다 타입 다름 · optional() 지원"
   ],
   [
    "",
    "tuple([...])",
    "위치마다 타입 다름 · [\"a\", 1, true]"
   ],
   [
    "특수",
    "any · null",
    "any=타입 추론 / null=인수 생략과 동일"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ count vs for_each",
  "type": "table",
  "head": [
   "항목",
   "count",
   "for_each"
  ],
  "rows": [
   [
    "입력",
    "정수(number)",
    "map 또는 set(string)"
   ],
   [
    "인스턴스 주소",
    "aws_instance.web[0]",
    "aws_instance.web[\"dev\"]"
   ],
   [
    "반복 변수",
    "count.index",
    "each.key · each.value"
   ],
   [
    "중간 항목 삭제",
    "뒤 인덱스가 밀려 재생성 위험",
    "키로 식별 — 해당 항목만 삭제"
   ],
   [
    "적합한 경우",
    "동일 리소스 N개",
    "항목마다 설정이 다른 경우"
   ],
   [
    "제약",
    "for_each 와 한 블록에 동시 사용 불가",
    "키는 plan 시점에 알려진 값이어야 함"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ lifecycle·조건 블록 정리",
  "type": "table",
  "head": [
   "블록/인수",
   "효과",
   "실패 시"
  ],
  "rows": [
   [
    "create_before_destroy",
    "새것 먼저 생성 후 기존 삭제(다운타임 최소)",
    "—"
   ],
   [
    "prevent_destroy",
    "삭제를 계획하면 오류로 거부",
    "plan 오류"
   ],
   [
    "ignore_changes",
    "지정 속성의 외부 변경 무시(all 가능)",
    "—"
   ],
   [
    "replace_triggered_by",
    "참조 대상 변경 시 이 리소스 재생성(1.2+)",
    "—"
   ],
   [
    "precondition",
    "리소스 평가 전 가정 검사",
    "오류로 중단"
   ],
   [
    "postcondition",
    "적용 후 결과(self) 보장 검사",
    "오류로 중단"
   ],
   [
    "variable validation",
    "입력 변수 값 검사",
    "오류로 중단"
   ],
   [
    "check 블록(1.5+)",
    "인프라 전체 상태 검증(assert)",
    "★경고만★ — apply 계속"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "민감 정보 처리 비교",
  "type": "table",
  "head": [
   "방법",
   "CLI 출력",
   "state 저장"
  ],
  "rows": [
   [
    "sensitive = true (변수·출력)",
    "(sensitive value) 마스킹",
    "★평문 저장★"
   ],
   [
    "ephemeral 변수·출력·리소스(1.10+)",
    "표시 안 함",
    "저장 안 함"
   ],
   [
    "write-only 인수(1.11+, *_wo)",
    "—",
    "저장 안 함"
   ],
   [
    "Vault provider data source",
    "값은 마스킹 가능",
    "읽은 값이 state 에 남음(ephemeral 권장)"
   ],
   [
    "환경변수 TF_VAR_ / HCP 변수(sensitive)",
    "코드·VCS 에 노출 안 됨",
    "state 는 별도 보호 필요"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "자주 나오는 함수 결과",
  "type": "table",
  "head": [
   "식",
   "결과"
  ],
  "rows": [
   [
    "length([\"a\",\"b\",\"c\"])",
    "3"
   ],
   [
    "join(\"-\", [\"a\",\"b\"])",
    "\"a-b\""
   ],
   [
    "split(\",\", \"a,b\")",
    "[\"a\",\"b\"]"
   ],
   [
    "lookup({a=1}, \"b\", 0)",
    "0"
   ],
   [
    "merge({a=1}, {a=2,b=3})",
    "{a=2, b=3} — 뒤가 이김"
   ],
   [
    "zipmap([\"a\",\"b\"], [1,2])",
    "{a=1, b=2}"
   ],
   [
    "element([\"a\",\"b\"], 3)",
    "\"b\" — 인덱스 순환(3 mod 2 = 1)"
   ],
   [
    "flatten([[1,2],[3]])",
    "[1,2,3]"
   ],
   [
    "coalesce(\"\", \"x\")",
    "\"x\" — 첫 non-null·non-empty"
   ],
   [
    "cidrsubnet(\"10.0.0.0/16\", 8, 2)",
    "\"10.0.2.0/24\""
   ],
   [
    "cidrhost(\"10.0.0.0/24\", 5)",
    "\"10.0.0.5\""
   ],
   [
    "max(5, 12, 9)",
    "12"
   ],
   [
    "try(var.x.y, \"def\")",
    "평가 실패 시 \"def\""
   ]
  ]
 },
 {
  "s": "s5",
  "title": "모듈 source 형식",
  "type": "table",
  "head": [
   "종류",
   "예",
   "version 인수"
  ],
  "rows": [
   [
    "로컬 경로",
    "./modules/vpc · ../shared",
    "X (같은 코드 사용)"
   ],
   [
    "Terraform Registry",
    "terraform-aws-modules/vpc/aws",
    "O"
   ],
   [
    "Private Registry(HCP)",
    "app.terraform.io/ORG/vpc/aws",
    "O"
   ],
   [
    "GitHub",
    "github.com/org/repo",
    "X → ?ref=v1.2.0"
   ],
   [
    "Git 일반",
    "git::https://example.com/vpc.git?ref=v1.2.0",
    "X → ?ref="
   ],
   [
    "HTTP·S3·GCS",
    "https://…/vpc.zip · s3::https://… · gcs::https://…",
    "X"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ state 를 바꾸는 방법 비교",
  "type": "table",
  "head": [
   "상황",
   "권장 방법",
   "대안(구식)"
  ],
  "rows": [
   [
    "리소스 이름·모듈 이동",
    "moved 블록(1.1+)",
    "terraform state mv"
   ],
   [
    "관리에서 빼되 리소스 유지",
    "removed 블록 + destroy = false(1.7+)",
    "terraform state rm"
   ],
   [
    "기존 리소스 편입",
    "import 블록(1.5+) + plan -generate-config-out",
    "terraform import"
   ],
   [
    "강제 재생성",
    "apply -replace=ADDR",
    "terraform taint (deprecated)"
   ],
   [
    "외부 변경을 state 에 반영",
    "apply -refresh-only",
    "terraform refresh (deprecated)"
   ],
   [
    "로컬 → 원격 이전",
    "backend/cloud 블록 추가 후 init -migrate-state",
    "state pull/push"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "backend 정리",
  "type": "table",
  "head": [
   "backend",
   "잠금",
   "메모"
  ],
  "rows": [
   [
    "local(기본)",
    "O(로컬 파일 잠금)",
    "terraform.tfstate · 1인 작업"
   ],
   [
    "s3",
    "use_lockfile(1.10+) 또는 dynamodb_table(1.11 deprecated)",
    "encrypt = true 권장"
   ],
   [
    "azurerm",
    "O(Blob lease)",
    "Storage Account 컨테이너"
   ],
   [
    "gcs",
    "O",
    "버킷 + prefix"
   ],
   [
    "consul · kubernetes · pg · http",
    "대부분 O",
    "http 는 선택적"
   ],
   [
    "cloud 블록(HCP Terraform)",
    "O(자동)",
    "backend 블록과 동시 사용 불가"
   ]
  ]
 },
 {
  "s": "s7",
  "title": "TF_LOG 정리",
  "type": "table",
  "head": [
   "변수",
   "값·용도"
  ],
  "rows": [
   [
    "TF_LOG",
    "TRACE(가장 상세) · DEBUG · INFO · WARN · ERROR · JSON"
   ],
   [
    "TF_LOG_CORE",
    "Terraform 코어 로그만 레벨 지정"
   ],
   [
    "TF_LOG_PROVIDER",
    "provider 플러그인 로그만 레벨 지정"
   ],
   [
    "TF_LOG_PATH",
    "로그를 파일로 저장(TF_LOG 설정 필요)"
   ],
   [
    "crash.log",
    "Terraform 이 패닉 시 생성 — 버그 리포트에 첨부"
   ]
  ]
 },
 {
  "s": "s8",
  "title": "★ HCP Terraform 핵심 용어",
  "type": "table",
  "head": [
   "용어",
   "의미"
  ],
  "rows": [
   [
    "Organization",
    "최상위 단위 — 팀·정책·VCS 연결·요금"
   ],
   [
    "Project",
    "워크스페이스 묶음, 팀 권한을 프로젝트 단위로 부여"
   ],
   [
    "Workspace",
    "구성 + 변수 + state + 실행 이력의 단위(CLI workspace 와 다름)"
   ],
   [
    "Run",
    "plan → (policy check) → apply 한 번의 실행"
   ],
   [
    "실행 모드",
    "remote(기본) · local(state 만 HCP) · agent(사설망 에이전트)"
   ],
   [
    "워크플로",
    "VCS-driven · CLI-driven(cloud 블록) · API-driven"
   ],
   [
    "Sentinel / OPA",
    "Policy as Code — advisory · soft-mandatory · hard-mandatory"
   ],
   [
    "Run triggers",
    "다른 워크스페이스 apply 성공 시 연쇄 실행"
   ],
   [
    "Health assessments",
    "drift detection · continuous validation"
   ],
   [
    "Private registry",
    "조직 전용 모듈·provider 공유"
   ],
   [
    "Variable sets",
    "여러 워크스페이스에 공통 변수 재사용"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "Terraform 은 명령형 도구다 — ✗ 선언형(declarative): 목표 상태를 기술하면 Terraform 이 변경 계획을 계산."
 },
 {
  "s": "s1",
  "t": "IaC 를 쓰면 드리프트가 절대 발생하지 않는다 — ✗ 콘솔 수작업으로 드리프트는 생길 수 있고, IaC 는 plan 으로 탐지·apply 로 교정."
 },
 {
  "s": "s1",
  "t": "Terraform 은 클라우드 리소스만 관리한다 — ✗ provider 가 있으면 SaaS·온프레미스(vSphere)·Kubernetes 등 API 대상 모두 관리."
 },
 {
  "s": "s1",
  "t": "Terraform 은 대상 서버에 에이전트 설치가 필요하다 — ✗ provider 가 대상 API 를 호출하므로 에이전트 불필요."
 },
 {
  "s": "s1",
  "t": "Terraform 이 Ansible 같은 구성 관리 도구를 완전히 대체한다 — ✗ 프로비저닝 중심이며 서버 내부 설정은 구성 관리 도구와 병행하는 것이 일반적."
 },
 {
  "s": "s1",
  "t": "멀티클라우드에선 클라우드마다 다른 Terraform 워크플로를 써야 한다 — ✗ provider 만 다를 뿐 Write→Plan→Apply 워크플로는 동일."
 },
 {
  "s": "s1",
  "t": "IaC 의 주 이점은 비용 자동 절감이다 — ✗ 핵심 이점은 반복 가능성·일관성·버전 관리·재사용·자동화(비용은 부수 효과)."
 },
 {
  "s": "s1",
  "t": "state 파일도 구성과 함께 Git 에 커밋하는 것이 IaC 모범 사례다 — ✗ state 에는 민감정보가 평문으로 들어가므로 원격 backend 사용, VCS 커밋 지양."
 },
 {
  "s": "s1",
  "t": "Terraform 구성은 .tf 파일만 가능하다 — ✗ JSON 형식 .tf.json 도 지원."
 },
 {
  "s": "s2",
  "t": ".terraform.lock.hcl 은 provider 와 모듈 버전을 모두 잠근다 — ✗ provider 버전·해시만 잠금, 모듈은 대상 아님."
 },
 {
  "s": "s2",
  "t": "~> 5.10 은 5.10.x 패치만 허용한다 — ✗ >=5.10, <6.0. 5.10.x 만 허용하려면 ~> 5.10.0."
 },
 {
  "s": "s2",
  "t": "required_version 은 provider 버전을 제약한다 — ✗ Terraform CLI 버전 제약. provider 는 required_providers 의 version."
 },
 {
  "s": "s2",
  "t": "alias 를 지정한 리소스는 provider = \"aws.west\" 처럼 따옴표로 쓴다 — ✗ provider = aws.west (참조식, 따옴표 없음)."
 },
 {
  "s": "s2",
  "t": "alias 가 있는 provider 블록이 기본 구성이다 — ✗ alias 없는 provider 블록이 default, alias 구성은 명시적으로 선택해야 사용."
 },
 {
  "s": "s2",
  "t": "sensitive = true 로 지정하면 state 에서도 값이 암호화된다 — ✗ CLI 출력만 마스킹, state 에는 평문."
 },
 {
  "s": "s2",
  "t": "Partner provider 는 HashiCorp 가 직접 유지보수한다 — ✗ Partner 는 기술 파트너가 소유·관리(HashiCorp 검증), Official 이 HashiCorp 관리."
 },
 {
  "s": "s2",
  "t": "lock 파일은 생성 후 수정할 수 없다 — ✗ terraform init -upgrade 로 제약 범위 내 최신 버전으로 갱신."
 },
 {
  "s": "s2",
  "t": "state 파일은 Terraform 이 없으면 안 되는 캐시일 뿐이라 삭제해도 무방하다 — ✗ 삭제 시 매핑 소실 → Terraform 이 기존 리소스를 모르고 중복 생성 시도."
 },
 {
  "s": "s3",
  "t": "terraform validate 는 클라우드 API 를 호출해 인수 값을 검증한다 — ✗ 문법·내부 일관성만, 원격 호출 없음(init 필요)."
 },
 {
  "s": "s3",
  "t": "terraform plan 은 state 를 실제 상태로 영구 갱신한다 — ✗ plan 은 메모리에서만 refresh, state 반영은 apply(-refresh-only 포함)."
 },
 {
  "s": "s3",
  "t": "특정 리소스 재생성의 정답은 terraform taint — ✗ taint 는 deprecated, terraform apply -replace=ADDR."
 },
 {
  "s": "s3",
  "t": "terraform refresh 가 권장 명령이다 — ✗ deprecated, terraform apply -refresh-only 사용."
 },
 {
  "s": "s3",
  "t": "terraform fmt 는 기본적으로 하위 디렉터리까지 서식화한다 — ✗ 현재 디렉터리만, 하위는 -recursive."
 },
 {
  "s": "s3",
  "t": "apply 도중 실패하면 Terraform 이 이미 만든 리소스를 자동 롤백한다 — ✗ 롤백 없음, 성공분은 state 에 기록되고 재 apply 로 마무리."
 },
 {
  "s": "s3",
  "t": "terraform destroy 는 계정의 모든 리소스를 삭제한다 — ✗ 현재 state 가 추적하는 리소스만 삭제."
 },
 {
  "s": "s3",
  "t": "저장된 plan 파일을 apply 하면 다시 yes 승인을 묻는다 — ✗ 저장 plan 은 이미 검토된 것으로 보고 승인 없이 적용."
 },
 {
  "s": "s3",
  "t": "init 은 프로젝트당 한 번만 실행할 수 있다 — ✗ 여러 번 실행해도 안전, provider·모듈·backend 변경 시 재실행 필요."
 },
 {
  "s": "s4",
  "t": "data 블록도 리소스를 만든다 — data 는 기존 객체를 ★읽기만★ 하며 생성·삭제하지 않음."
 },
 {
  "s": "s4",
  "t": "locals 로 정의한 값은 locals.NAME 으로 참조 — 참조는 ★local.NAME★(단수형)."
 },
 {
  "s": "s4",
  "t": "variable default 에 var.other 를 쓸 수 있다 — default 는 ★리터럴만★, 계산값은 locals 사용."
 },
 {
  "s": "s4",
  "t": "terraform.tfvars 가 -var 보다 우선 — 명령줄 ★-var/-var-file 이 최우선★."
 },
 {
  "s": "s4",
  "t": "TF_VAR_region 이 terraform.tfvars 를 덮어쓴다 — 환경변수는 ★tfvars 파일보다 낮음★."
 },
 {
  "s": "s4",
  "t": "sensitive = true 이면 state 에도 암호화 저장 — ★출력 마스킹만★, state 는 평문."
 },
 {
  "s": "s4",
  "t": "set 은 var.s[0] 로 접근 가능 — set 은 ★순서가 없어 인덱스 접근 불가★(tolist 필요)."
 },
 {
  "s": "s4",
  "t": "for_each 에 list(string) 을 그대로 넣는다 — ★map 또는 set(string)★ 만 허용, toset() 변환."
 },
 {
  "s": "s4",
  "t": "count.index 는 1부터 시작 — ★0부터★ 시작."
 },
 {
  "s": "s4",
  "t": "merge 키 충돌 시 첫 번째 map 이 우선 — ★마지막(뒤) 인수가 우선★."
 },
 {
  "s": "s4",
  "t": "cidrsubnet 의 두 번째 인수는 결과 prefix 길이 — ★추가할 비트 수(newbits)★."
 },
 {
  "s": "s4",
  "t": "splat [*] 로 for_each 리소스의 id 목록을 바로 얻는다 — for_each 결과는 map → ★values()[*] 또는 for 식★."
 },
 {
  "s": "s4",
  "t": "toset 은 입력 순서를 유지 — set 은 순서 개념이 없고 문자열은 ★사전순으로 표시★."
 },
 {
  "s": "s4",
  "t": "try 는 모든 오류를 흡수 — 선언되지 않은 참조 같은 ★정적 오류는 잡지 못함★."
 },
 {
  "s": "s4",
  "t": "dynamic 블록 안에서 each.value 로 원소 참조 — ★블록라벨.value★(또는 iterator 이름)."
 },
 {
  "s": "s4",
  "t": "depends_on 은 의존성을 명확히 하므로 항상 쓰는 것이 좋다 — ★숨은 의존성에만★, 기본은 암시적 참조."
 },
 {
  "s": "s4",
  "t": "prevent_destroy 를 건 리소스 블록을 지우면 계속 보호된다 — 블록이 사라지면 설정도 사라져 ★destroy 계획됨★."
 },
 {
  "s": "s4",
  "t": "check 블록 assert 실패 시 apply 가 중단 — check 는 ★경고만★, 중단은 precondition/postcondition."
 },
 {
  "s": "s4",
  "t": "replace_triggered_by 에 var.version 을 직접 쓴다 — ★관리 리소스(또는 그 속성)만★ 참조, 변수는 terraform_data 로 감쌈."
 },
 {
  "s": "s4",
  "t": "ephemeral 값을 일반 리소스 인수에 넣을 수 있다 — ★ephemeral 컨텍스트(write-only 인수·provider 설정·ephemeral 변수/출력·locals)만★ 허용."
 },
 {
  "s": "s5",
  "t": "로컬 경로 모듈도 version 인수로 버전을 고정할 수 있다 — version 은 Registry 모듈 전용, 로컬은 불가."
 },
 {
  "s": "s5",
  "t": "Git 소스 모듈은 version = \"1.2.0\" 으로 고정한다 — Git 은 source 의 ?ref=v1.2.0 으로 고정."
 },
 {
  "s": "s5",
  "t": "자식 모듈은 부모의 var.region 을 그대로 읽을 수 있다 — 자식은 부모 스코프 접근 불가, module 인수로 전달해야 함."
 },
 {
  "s": "s5",
  "t": "부모는 module.app.aws_instance.web.id 로 자식 리소스를 참조한다 — 자식이 output 으로 노출한 값만 module.app.OUTPUT 으로 접근."
 },
 {
  "s": "s5",
  "t": "source = \"modules/network\" 는 로컬 경로다 — ./ 또는 ../ 로 시작해야 로컬, 그렇지 않으면 Registry 주소로 해석."
 },
 {
  "s": "s5",
  "t": ".terraform.lock.hcl 이 모듈 버전도 잠근다 — 잠금 파일은 provider 만, 모듈은 version 제약으로 관리."
 },
 {
  "s": "s5",
  "t": "module 블록에 source 를 바꾸면 바로 plan 할 수 있다 — source·version 변경 후 terraform init(또는 get) 필요."
 },
 {
  "s": "s5",
  "t": "Registry 게시 저장소는 아무 이름이나 된다 — terraform-<PROVIDER>-<NAME> 형식 + 시맨틱 버전 태그 필수."
 },
 {
  "s": "s5",
  "t": "alias provider 도 자식 모듈에 자동 상속된다 — 자동 상속은 default provider 만, alias 는 providers 맵으로 전달."
 },
 {
  "s": "s5",
  "t": "모듈 출력은 자동으로 terraform output 에 표시된다 — 루트에서 output 으로 다시 노출해야 CLI 출력에 보임."
 },
 {
  "s": "s6",
  "t": "backend 블록 bucket 에 var.bucket_name 을 쓸 수 있다 — backend 블록은 변수·locals 불가, -backend-config 사용."
 },
 {
  "s": "s6",
  "t": "terraform refresh 가 드리프트 처리의 권장 명령이다 — deprecated, plan/apply -refresh-only 로 검토 후 반영."
 },
 {
  "s": "s6",
  "t": "-refresh-only apply 는 실제 리소스를 구성에 맞게 고친다 — 인프라는 그대로, 상태만 실제에 맞춤."
 },
 {
  "s": "s6",
  "t": "모든 backend 가 state locking 을 지원한다 — backend 마다 다름, 미지원 backend 도 존재."
 },
 {
  "s": "s6",
  "t": "force-unlock 은 잠금 ID 없이 실행한다 — terraform force-unlock LOCK_ID 형식으로 ID 필수."
 },
 {
  "s": "s6",
  "t": "terraform_remote_state 로 자식 모듈 output 까지 읽는다 — root module output 만 읽힘."
 },
 {
  "s": "s6",
  "t": "sensitive 로 표시하면 원격 상태에서도 암호화된다 — 상태엔 평문, backend 저장소 암호화(encrypt·접근제어)로 보호."
 },
 {
  "s": "s6",
  "t": "backend 를 바꾸고 init -reconfigure 하면 상태가 자동 이전된다 — 이전은 -migrate-state, -reconfigure 는 이전 없이 재설정."
 },
 {
  "s": "s6",
  "t": "removed 블록은 항상 실제 리소스를 남긴다 — lifecycle { destroy = false } 일 때만 유지, 기본은 삭제."
 },
 {
  "s": "s6",
  "t": "S3 잠금은 DynamoDB 테이블이 유일한 방법이다 — 1.10+ use_lockfile = true 로 S3 네이티브 잠금, dynamodb_table 은 1.11 deprecated."
 },
 {
  "s": "s7",
  "t": "terraform import 는 구성 파일(.tf)도 함께 만들어 준다 — 명령형 import 는 state 만 갱신, HCL 생성은 import 블록 + plan -generate-config-out."
 },
 {
  "s": "s7",
  "t": "-generate-config-out 은 apply 옵션이다 — terraform plan 옵션이다."
 },
 {
  "s": "s7",
  "t": "terraform state rm 은 실제 클라우드 리소스도 삭제한다 — state 에서만 제거, 실물은 그대로 남는다."
 },
 {
  "s": "s7",
  "t": "terraform state mv 를 쓰면 구성 코드는 수정하지 않아도 된다 — 구성의 주소도 함께 바꾸지 않으면 다음 plan 에서 생성/삭제 차이가 생긴다."
 },
 {
  "s": "s7",
  "t": "TF_LOG_PATH 만 설정해도 로그 파일이 생긴다 — TF_LOG(또는 TF_LOG_CORE/PROVIDER) 레벨 설정이 함께 필요하다."
 },
 {
  "s": "s7",
  "t": "가장 상세한 로그 레벨은 DEBUG 이다 — TRACE 가 가장 상세하다."
 },
 {
  "s": "s7",
  "t": "terraform state pull 은 원격 state 를 로컬 terraform.tfstate 로 저장한다 — stdout 으로 출력만 하므로 리다이렉트가 필요하다."
 },
 {
  "s": "s7",
  "t": "import 블록은 apply 즉시 리소스를 새로 생성한다 — 기존 리소스를 state 로 가져올 뿐 생성하지 않는다(plan 에 'will be imported' 표시)."
 },
 {
  "s": "s7",
  "t": "state push 는 serial 이 낮아도 항상 덮어쓴다 — lineage 불일치·낮은 serial 은 거부되며 -force 가 필요하다."
 },
 {
  "s": "s8",
  "t": "Terraform Enterprise 는 HashiCorp 가 호스팅하는 SaaS 이다 — SaaS 는 HCP Terraform, Enterprise 는 자체 호스팅."
 },
 {
  "s": "s8",
  "t": "speculative plan 도 승인하면 apply 할 수 있다 — speculative plan 은 plan 전용으로 apply 불가."
 },
 {
  "s": "s8",
  "t": "Sentinel 정책 검사는 apply 이후 실행된다 — plan 이후 apply 이전에 실행된다."
 },
 {
  "s": "s8",
  "t": "soft-mandatory 정책 실패는 누구도 무시할 수 없다 — 권한 있는 사용자가 override 가능, override 불가는 hard-mandatory."
 },
 {
  "s": "s8",
  "t": "HCP Terraform workspace 와 CLI workspace 는 같은 개념이다 — HCP workspace 는 구성·변수·state·이력 단위, CLI workspace 는 state 분리만."
 },
 {
  "s": "s8",
  "t": "local execution mode 에서는 HCP 가 state 도 저장하지 않는다 — 실행만 로컬, state 저장·잠금은 HCP 가 담당."
 },
 {
  "s": "s8",
  "t": "cloud 블록과 backend 블록을 함께 선언해 이중 저장할 수 있다 — 둘은 동시 사용 불가."
 },
 {
  "s": "s8",
  "t": "VCS 연결 워크스페이스에서도 로컬 terraform apply 로 적용할 수 있다 — VCS-driven 워크스페이스는 CLI apply 불가, VCS 커밋으로 run."
 },
 {
  "s": "s8",
  "t": "terraform login 은 클라우드 공급자(AWS 등) 자격증명을 저장한다 — HCP Terraform API 토큰을 credentials.tfrc.json 에 저장."
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "IaC 정의",
  "title": "Infrastructure as Code 란",
  "ref": "Exam objective 1a · developer.hashicorp.com/terraform/intro",
  "body": [
   {
    "h": "정의",
    "li": [
     "인프라(컴퓨트·네트워크·DNS·SaaS 설정)를 ★코드로 정의·버전관리·재사용★하는 방식",
     "Terraform: HashiCorp 의 IaC 도구, HCL(선언형)로 구성 작성",
     "구성 파일 확장자 .tf (JSON 형식 .tf.json 도 가능)"
    ]
   },
   {
    "h": "수작업 vs IaC",
    "tb": {
     "head": [
      "항목",
      "수작업(ClickOps)",
      "IaC"
     ],
     "rows": [
      [
       "반복성",
       "사람마다 다름",
       "같은 코드 → 같은 결과"
      ],
      [
       "이력",
       "추적 어려움",
       "VCS 커밋 이력"
      ],
      [
       "검토",
       "사후 확인",
       "plan + 코드 리뷰"
      ],
      [
       "확장",
       "느림·오류",
       "모듈 재사용"
      ]
     ]
    }
   },
   {
    "h": "Terraform 동작 개요",
    "li": [
     "Terraform Core: 구성 해석·의존성 그래프·plan 계산",
     "Provider 플러그인: 대상 API 호출(AWS·Azure·GitHub 등)",
     "State: 실제 리소스와 구성의 매핑 기록"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "선언형 vs 명령형",
  "title": "선언형(Declarative) vs 명령형(Imperative)",
  "ref": "Exam objective 1a · developer.hashicorp.com/terraform/intro",
  "body": [
   {
    "h": "비교",
    "tb": {
     "head": [
      "구분",
      "선언형",
      "명령형"
     ],
     "rows": [
      [
       "기술 대상",
       "목표 상태(what)",
       "절차(how)"
      ],
      [
       "예",
       "Terraform·CloudFormation",
       "셸 스크립트·CLI 호출"
      ],
      [
       "재실행",
       "차이만 적용(멱등)",
       "중복 생성 위험"
      ],
      [
       "순서",
       "도구가 의존성으로 결정",
       "작성자가 직접 지정"
      ]
     ]
    }
   },
   {
    "h": "시험 포인트",
    "li": [
     "'desired state 를 기술' = 선언형 = Terraform",
     "Terraform 은 의존성 그래프로 생성 순서를 ★자동 결정★(병렬 처리 기본 10)",
     "멱등성(idempotency): 이미 원하는 상태면 'No changes'"
    ]
   },
   {
    "h": "함정",
    "li": [
     "HCL 에 for 표현식·조건식이 있어도 언어 성격은 선언형",
     "provisioner(local-exec 등)는 명령형 탈출구 — 최후의 수단(last resort)"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "IaC 이점",
  "title": "IaC 패턴의 이점",
  "ref": "Exam objective 1b · developer.hashicorp.com/terraform/intro/use-cases",
  "body": [
   {
    "h": "대표 이점",
    "li": [
     "반복 가능성·일관성(같은 환경을 dev/stage/prod 로 복제)",
     "버전 관리·코드 리뷰·감사 추적",
     "자동화(CI/CD 파이프라인 통합)",
     "재사용(모듈)·표준화",
     "드리프트 탐지·교정",
     "셀프서비스 인프라"
    ]
   },
   {
    "h": "이점 ↔ Terraform 기능",
    "tb": {
     "head": [
      "이점",
      "Terraform 기능",
      "비고"
     ],
     "rows": [
      [
       "검토 후 변경",
       "terraform plan",
       "실행 전 미리보기"
      ],
      [
       "재사용",
       "module",
       "Registry 공유"
      ],
      [
       "협업",
       "원격 backend·locking",
       "HCP Terraform"
      ],
      [
       "드리프트 대응",
       "plan -refresh-only",
       "실제 상태 반영"
      ]
     ]
    }
   },
   {
    "h": "주의",
    "li": [
     "비용 절감은 부수 효과 — 핵심은 일관성·자동화",
     "state 파일은 민감정보 포함 → VCS 커밋 지양"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "멀티클라우드",
  "title": "멀티클라우드·하이브리드·서비스 무관 워크플로",
  "ref": "Exam objective 1c · developer.hashicorp.com/terraform/intro/use-cases",
  "body": [
   {
    "h": "핵심",
    "li": [
     "provider 플러그인 = 대상 API 추상화 → ★하나의 언어(HCL)·하나의 워크플로★",
     "멀티클라우드: AWS+Azure+GCP 를 한 구성에서 관리 가능",
     "하이브리드: 온프레미스(vSphere 등)+퍼블릭 클라우드",
     "서비스 무관: GitHub·Kubernetes·Datadog·DNS 등 SaaS 도 관리"
    ]
   },
   {
    "h": "멀티클라우드 이점",
    "tb": {
     "head": [
      "이점",
      "설명",
      "Terraform 관점"
     ],
     "rows": [
      [
       "장애 허용",
       "한 클라우드 장애 대비",
       "동일 코드 패턴"
      ],
      [
       "벤더 종속 완화",
       "특정 도구 의존 감소",
       "provider 교체"
      ],
      [
       "학습 비용",
       "도구 하나로 통일",
       "HCL·CLI 공통"
      ]
     ]
    }
   },
   {
    "h": "주의",
    "li": [
     "provider 별 리소스 타입은 다름 — 코드가 자동으로 클라우드 간 이식되지는 않음",
     "워크플로·언어·state 관리 방식이 공통이라는 의미"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "도구 비교",
  "title": "IaC 도구 분류와 Terraform 위치",
  "ref": "Exam objective 1a·1c · developer.hashicorp.com/terraform/intro/vs",
  "body": [
   {
    "h": "도구 비교",
    "tb": {
     "head": [
      "도구",
      "분류",
      "특징"
     ],
     "rows": [
      [
       "Terraform",
       "프로비저닝·선언형",
       "멀티클라우드·에이전트 불필요"
      ],
      [
       "CloudFormation",
       "프로비저닝·선언형",
       "AWS 전용"
      ],
      [
       "ARM/Bicep",
       "프로비저닝·선언형",
       "Azure 전용"
      ],
      [
       "Ansible",
       "구성 관리",
       "절차형 플레이북·에이전트리스"
      ],
      [
       "Chef/Puppet",
       "구성 관리",
       "에이전트 기반"
      ]
     ]
    }
   },
   {
    "h": "불변 인프라",
    "li": [
     "Immutable: 수정 대신 새 리소스로 교체 → 드리프트 감소",
     "Packer(이미지) + Terraform(배포) 조합이 대표 패턴",
     "Mutable: 기존 서버를 in-place 수정(구성 관리 도구 영역)"
    ]
   },
   {
    "h": "시험 포인트",
    "li": [
     "'single tool for multiple clouds' → Terraform",
     "Terraform 은 state 로 실제 리소스를 추적(CloudFormation 은 스택이 상태 역할)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "provider 설치",
  "title": "provider 설치와 소스 주소",
  "ref": "Exam objective 2a · developer.hashicorp.com/terraform/language/providers/requirements",
  "body": [
   {
    "h": "설치 흐름",
    "li": [
     "terraform 블록의 required_providers 에 source·version 선언",
     "terraform init → Registry 에서 provider 다운로드 → .terraform/providers 설치",
     "선택된 버전·해시를 .terraform.lock.hcl 에 기록",
     "terraform providers 로 구성이 요구하는 provider 확인"
    ]
   },
   {
    "h": "소스 주소",
    "tb": {
     "head": [
      "부분",
      "예",
      "설명"
     ],
     "rows": [
      [
       "HOSTNAME",
       "registry.terraform.io",
       "생략 시 기본 호스트"
      ],
      [
       "NAMESPACE",
       "hashicorp",
       "게시 조직"
      ],
      [
       "TYPE",
       "aws",
       "provider 이름"
      ]
     ]
    }
   },
   {
    "h": "코드",
    "li": [
     "terraform { required_providers { aws = { source = \"hashicorp/aws\", version = \"~> 5.0\" } } }",
     "local name(aws)은 구성 안에서 provider 를 부르는 이름"
    ]
   },
   {
    "h": "Provider tiers",
    "tb": {
     "head": [
      "Tier",
      "소유·관리",
      "예"
     ],
     "rows": [
      [
       "Official",
       "HashiCorp",
       "hashicorp/aws"
      ],
      [
       "Partner",
       "기술 파트너(검증됨)",
       "파트너사 namespace"
      ],
      [
       "Community",
       "개인·커뮤니티",
       "개인 namespace"
      ],
      [
       "Archived",
       "관리 중단",
       "-"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "provider 버전",
  "title": "버전 제약과 의존성 잠금 파일",
  "ref": "Exam objective 2a · developer.hashicorp.com/terraform/language/expressions/version-constraints",
  "body": [
   {
    "h": "버전 제약 연산자",
    "tb": {
     "head": [
      "표기",
      "허용 범위",
      "메모"
     ],
     "rows": [
      [
       "= 5.31.0",
       "정확히 5.31.0",
       "연산자 생략도 동일"
      ],
      [
       ">= 5.0",
       "5.0 이상",
       "상한 없음"
      ],
      [
       "~> 5.0",
       ">=5.0, <6.0",
       "마이너 증가 허용"
      ],
      [
       "~> 5.10",
       ">=5.10, <6.0",
       "마이너 증가 허용"
      ],
      [
       "~> 5.10.0",
       ">=5.10.0, <5.11.0",
       "패치만 허용"
      ],
      [
       ">= 5.0, < 5.50",
       "범위 조합",
       "쉼표 = AND"
      ]
     ]
    }
   },
   {
    "h": ".terraform.lock.hcl",
    "li": [
     "init 이 생성·갱신, ★provider 버전·해시만★ 기록(모듈 X)",
     "VCS 커밋 권장 → 팀원·CI 가 같은 provider 버전 사용",
     "버전 올리기: terraform init -upgrade",
     "다른 플랫폼 해시 추가: terraform providers lock -platform=linux_amd64"
    ]
   },
   {
    "h": "required_version",
    "li": [
     "terraform { required_version = \">= 1.12.0\" } — CLI 버전 제약",
     "조건 불충족 시 init·plan 등이 오류"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "alias 다중 provider",
  "title": "provider 구성과 alias(다중 구성)",
  "ref": "Exam objective 2b·2c · developer.hashicorp.com/terraform/language/providers/configuration",
  "body": [
   {
    "h": "provider 블록",
    "li": [
     "provider \"aws\" { region = \"us-east-1\" } — 구성 인수는 provider 별 문서 참고",
     "자격 증명은 환경변수(AWS_ACCESS_KEY_ID 등)·프로필·IAM 역할 권장(하드코딩 금지)",
     "provider 블록은 루트 모듈에 두는 것이 권장(재사용 모듈엔 지양)"
    ]
   },
   {
    "h": "alias 사용",
    "li": [
     "provider \"aws\" { alias = \"west\"  region = \"us-west-2\" }",
     "resource \"aws_instance\" \"w\" { provider = aws.west ... }",
     "module \"m\" { source = \"./m\"  providers = { aws = aws.west } }",
     "alias 없는 블록 = 기본 구성(provider 지정 없는 리소스가 사용)"
    ]
   },
   {
    "h": "구분",
    "tb": {
     "head": [
      "위치",
      "인수",
      "형식"
     ],
     "rows": [
      [
       "resource/data",
       "provider",
       "aws.west (단일 참조)"
      ],
      [
       "module",
       "providers",
       "{ aws = aws.west } 맵"
      ],
      [
       "모듈 내부 선언",
       "configuration_aliases",
       "required_providers 안"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "state 개념",
  "title": "Terraform state 의 목적",
  "ref": "Exam objective 2d · developer.hashicorp.com/terraform/language/state/purpose",
  "body": [
   {
    "h": "state 의 4가지 목적",
    "tb": {
     "head": [
      "목적",
      "설명",
      "비고"
     ],
     "rows": [
      [
       "실제 세계 매핑",
       "리소스 주소 ↔ 실제 객체 ID",
       "핵심 목적"
      ],
      [
       "메타데이터",
       "의존성 등 기록",
       "삭제 순서 결정"
      ],
      [
       "성능",
       "속성 캐시",
       "-refresh=false 시 활용"
      ],
      [
       "동기화",
       "팀 공유",
       "원격 backend·잠금"
      ]
     ]
    }
   },
   {
    "h": "주의",
    "li": [
     "state 에 민감정보 평문 저장 가능 → 원격 backend 암호화·접근 제어",
     "직접 편집 금지 — terraform state list/show/mv/rm 사용",
     "local backend 기본: terraform.tfstate (+ 백업 terraform.tfstate.backup)"
    ]
   },
   {
    "h": "state 와 plan",
    "li": [
     "plan 시 refresh 로 실제 상태를 읽어 state·구성과 비교",
     "구성에서 블록을 지우면 Terraform 은 state 에 남은 객체를 삭제 대상으로 계획"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "state 관리",
  "title": "state 저장·공유·잠금",
  "ref": "Exam objective 2d · developer.hashicorp.com/terraform/language/state/remote",
  "body": [
   {
    "h": "local vs remote",
    "tb": {
     "head": [
      "구분",
      "local",
      "remote"
     ],
     "rows": [
      [
       "위치",
       "작업 디렉터리 terraform.tfstate",
       "S3·azurerm·gcs·HCP Terraform"
      ],
      [
       "공유",
       "어려움",
       "팀 공유"
      ],
      [
       "잠금",
       "로컬 시스템 API",
       "backend 별 지원"
      ],
      [
       "보안",
       "로컬 파일",
       "암호화·접근 제어"
      ]
     ]
    }
   },
   {
    "h": "잠금",
    "li": [
     "state 를 쓰는 명령에서 자동 잠금",
     "잔존 잠금 해제: terraform force-unlock LOCK_ID",
     "S3: Terraform 1.10+ use_lockfile = true(S3 네이티브 잠금), dynamodb_table 은 1.11 에서 deprecated"
    ]
   },
   {
    "h": "다른 구성의 state 읽기",
    "li": [
     "data \"terraform_remote_state\" — 대상 state 의 ★root module output★ 만 읽음",
     "HCP Terraform 은 tfe_outputs 데이터 소스도 제공"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "워크플로",
  "title": "핵심 워크플로 Write → Plan → Apply",
  "ref": "Exam objective 3a · developer.hashicorp.com/terraform/intro/core-workflow",
  "body": [
   {
    "h": "3단계",
    "tb": {
     "head": [
      "단계",
      "개인",
      "팀(VCS)"
     ],
     "rows": [
      [
       "Write",
       "편집기에서 .tf 작성·plan 반복",
       "브랜치에서 작성"
      ],
      [
       "Plan",
       "terraform plan 검토",
       "PR 에 plan 결과 첨부·리뷰"
      ],
      [
       "Apply",
       "terraform apply 승인",
       "병합 후 apply(HCP 자동화)"
      ]
     ]
    }
   },
   {
    "h": "명령 전체 흐름",
    "li": [
     "terraform init → (fmt·validate) → plan → apply → (destroy)",
     "init: 최초·provider/모듈/backend 변경 시",
     "fmt·validate 는 CI 의 사전 검사 단계로 자주 사용"
    ]
   },
   {
    "h": "자동화 패턴",
    "li": [
     "terraform plan -out=tfplan → terraform apply tfplan",
     "-input=false 로 입력 프롬프트 방지, TF_IN_AUTOMATION 환경변수로 출력 간소화",
     "apply -auto-approve 는 승인 생략(주의)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "init",
  "title": "terraform init",
  "ref": "Exam objective 3b · developer.hashicorp.com/terraform/cli/commands/init",
  "body": [
   {
    "h": "init 이 하는 일",
    "li": [
     "backend 초기화(state 저장 위치 설정)",
     "자식 모듈 다운로드(.terraform/modules)",
     "provider 설치(.terraform/providers)",
     ".terraform.lock.hcl 생성·갱신"
    ]
   },
   {
    "h": "주요 옵션",
    "tb": {
     "head": [
      "옵션",
      "용도",
      "비고"
     ],
     "rows": [
      [
       "-upgrade",
       "provider·모듈 최신(제약 내)",
       "lock 갱신"
      ],
      [
       "-reconfigure",
       "기존 backend 설정 무시",
       "state 이전 안 함"
      ],
      [
       "-migrate-state",
       "새 backend 로 state 이전",
       "backend 변경 시"
      ],
      [
       "-backend=false",
       "backend 초기화 생략",
       "validate 용 CI"
      ],
      [
       "-backend-config",
       "부분 backend 구성 주입",
       "파일 또는 k=v"
      ]
     ]
    }
   },
   {
    "h": "포인트",
    "li": [
     "멱등 — 여러 번 실행해도 안전",
     "plan/validate 전에 반드시 필요",
     "terraform get = 모듈만 다운로드(init 의 일부)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "validate",
  "title": "terraform validate 와 fmt",
  "ref": "Exam objective 3c·3g · developer.hashicorp.com/terraform/cli/commands/validate",
  "body": [
   {
    "h": "비교",
    "tb": {
     "head": [
      "항목",
      "validate",
      "fmt"
     ],
     "rows": [
      [
       "목적",
       "문법·내부 일관성 검사",
       "표준 스타일 서식화"
      ],
      [
       "파일 수정",
       "안 함",
       "함(-check 시 안 함)"
      ],
      [
       "init 필요",
       "예(provider 스키마)",
       "아니오"
      ],
      [
       "원격 호출",
       "없음",
       "없음"
      ],
      [
       "CI 옵션",
       "-json",
       "-check·-diff·-recursive"
      ]
     ]
    }
   },
   {
    "h": "validate 가 잡는 것",
    "li": [
     "잘못된 블록·인수 이름, 타입 불일치",
     "선언되지 않은 변수·리소스 참조",
     "잡지 못하는 것: 실제 클라우드에서 유효하지 않은 값(예 없는 AMI ID)"
    ]
   },
   {
    "h": "fmt 옵션",
    "li": [
     "terraform fmt — 현재 디렉터리 .tf 서식화",
     "-recursive 하위 디렉터리 포함",
     "-check 수정 없이 검사(서식 불일치 시 0 이 아닌 종료코드)",
     "-diff 변경 차이 출력"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "plan",
  "title": "terraform plan 해석",
  "ref": "Exam objective 3d · developer.hashicorp.com/terraform/cli/commands/plan",
  "body": [
   {
    "h": "plan 기호",
    "tb": {
     "head": [
      "기호",
      "의미",
      "원인"
     ],
     "rows": [
      [
       "+",
       "생성",
       "새 리소스 블록"
      ],
      [
       "-",
       "삭제",
       "블록 제거"
      ],
      [
       "~",
       "in-place 변경",
       "수정 가능한 인수 변경"
      ],
      [
       "-/+",
       "삭제 후 생성",
       "forces replacement 인수"
      ],
      [
       "+/-",
       "생성 후 삭제",
       "create_before_destroy"
      ],
      [
       "<=",
       "data 읽기",
       "apply 시점 읽기"
      ]
     ]
    }
   },
   {
    "h": "plan 모드·옵션",
    "li": [
     "-destroy: 전체 삭제 계획",
     "-refresh-only: 실제 변경을 state 에 반영하는 계획",
     "-refresh=false: refresh 생략(빠르지만 드리프트 미탐지)",
     "-out=FILE 저장, -var/-var-file 변수",
     "-detailed-exitcode: 0 변경없음·1 오류·2 변경있음"
    ]
   },
   {
    "h": "포인트",
    "li": [
     "plan 은 인프라·state 를 변경하지 않음",
     "요약 줄: Plan: X to add, Y to change, Z to destroy"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "apply",
  "title": "terraform apply 와 destroy",
  "ref": "Exam objective 3e·3f · developer.hashicorp.com/terraform/cli/commands/apply",
  "body": [
   {
    "h": "apply 방식",
    "tb": {
     "head": [
      "방식",
      "명령",
      "승인"
     ],
     "rows": [
      [
       "자동 계획",
       "terraform apply",
       "yes 입력"
      ],
      [
       "승인 생략",
       "terraform apply -auto-approve",
       "없음"
      ],
      [
       "저장 계획",
       "terraform apply tfplan",
       "없음"
      ],
      [
       "강제 교체",
       "terraform apply -replace=ADDR",
       "yes 입력"
      ],
      [
       "state 동기화",
       "terraform apply -refresh-only",
       "yes 입력"
      ]
     ]
    }
   },
   {
    "h": "destroy",
    "li": [
     "terraform destroy = terraform apply -destroy",
     "미리보기: terraform plan -destroy",
     "state 추적 리소스만, 의존성 역순 삭제",
     "lifecycle prevent_destroy = true 리소스는 오류로 중단",
     "특정 리소스만 지우려면 구성에서 블록 제거 후 apply(권장) 또는 -target"
    ]
   },
   {
    "h": "주의",
    "li": [
     "apply 부분 실패 시 자동 롤백 없음",
     "-target 은 예외 상황용",
     "-parallelism=N 기본 10"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "resource·data",
  "title": "resource 와 data 블록 구분",
  "ref": "Exam objective 4a · developer.hashicorp.com/terraform/language/resources · /language/data-sources",
  "body": [
   {
    "h": "핵심 구분",
    "tb": {
     "head": [
      "구분",
      "resource",
      "data"
     ],
     "rows": [
      [
       "역할",
       "인프라 객체 생성·변경·삭제",
       "기존·외부 정보 조회(읽기 전용)"
      ],
      [
       "선언",
       "resource \"aws_instance\" \"web\" {}",
       "data \"aws_ami\" \"ubuntu\" {}"
      ],
      [
       "참조",
       "aws_instance.web.id",
       "data.aws_ami.ubuntu.id"
      ],
      [
       "plan 기호",
       "+ / ~ / - / -/+",
       "<= (읽기)"
      ]
     ]
    }
   },
   {
    "h": "블록 문법",
    "li": [
     "첫 라벨 = 리소스 유형(TYPE), 둘째 라벨 = 로컬 이름(NAME)",
     "유형 접두어(aws_)로 기본 provider 결정, 다른 구성은 provider = aws.west",
     "로컬 이름은 같은 모듈·같은 유형 안에서만 고유"
    ]
   },
   {
    "h": "메타 인수(meta-arguments)",
    "li": [
     "count / for_each — 다중 인스턴스",
     "depends_on — 숨은 의존성",
     "provider — 비기본 provider 구성 선택",
     "lifecycle — 수명주기 제어(resource 전용)"
    ]
   },
   {
    "h": "data 소스 읽기 시점",
    "li": [
     "인수가 모두 알려져 있으면 plan(refresh) 단계에서 읽음",
     "인수가 (known after apply) 이거나 depends_on 이 있으면 apply 시점으로 지연",
     "data 소스도 count / for_each 사용 가능"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "참조·속성",
  "title": "속성 참조와 이름 공간",
  "ref": "Exam objective 4b · developer.hashicorp.com/terraform/language/expressions/references",
  "body": [
   {
    "h": "참조 형식 총정리",
    "tb": {
     "head": [
      "대상",
      "형식",
      "예"
     ],
     "rows": [
      [
       "리소스 속성",
       "TYPE.NAME.ATTR",
       "aws_instance.web.public_ip"
      ],
      [
       "count 인스턴스",
       "TYPE.NAME[i].ATTR",
       "aws_instance.web[0].id"
      ],
      [
       "for_each 인스턴스",
       "TYPE.NAME[\"k\"].ATTR",
       "aws_instance.web[\"app\"].id"
      ],
      [
       "data 소스",
       "data.TYPE.NAME.ATTR",
       "data.aws_vpc.main.cidr_block"
      ],
      [
       "입력 변수",
       "var.NAME",
       "var.region"
      ],
      [
       "로컬 값",
       "local.NAME",
       "local.common_tags"
      ],
      [
       "모듈 출력",
       "module.NAME.OUTPUT",
       "module.vpc.vpc_id"
      ]
     ]
    }
   },
   {
    "h": "인수(argument) vs 속성(attribute)",
    "li": [
     "인수 = 구성에 직접 쓰는 입력값(ami, instance_type)",
     "속성 = provider 가 생성 후 내보내는 값(id, arn, public_ip) — 참조 가능",
     "apply 전 미정 값은 plan 에 (known after apply)"
    ]
   },
   {
    "h": "특수 참조",
    "li": [
     "path.module / path.root / path.cwd",
     "terraform.workspace — 현재 CLI workspace 이름",
     "count.index, each.key, each.value, self(조건·provisioner 안)"
    ]
   },
   {
    "h": "참조의 부수효과",
    "li": [
     "참조 자체가 암시적 의존성(implicit dependency) → 생성 순서 자동 결정",
     "terraform console 로 참조·함수 결과를 대화형 확인"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "variables·outputs",
  "title": "입력 변수와 출력값",
  "ref": "Exam objective 4c · developer.hashicorp.com/terraform/language/values/variables · /values/outputs",
  "body": [
   {
    "h": "variable 인수",
    "tb": {
     "head": [
      "인수",
      "의미",
      "비고"
     ],
     "rows": [
      [
       "type",
       "타입 제약",
       "생략 시 any"
      ],
      [
       "default",
       "기본값",
       "리터럴만, 있으면 선택 변수"
      ],
      [
       "description",
       "설명",
       "문서화"
      ],
      [
       "sensitive",
       "출력 마스킹",
       "state 는 평문"
      ],
      [
       "nullable",
       "null 허용 여부",
       "false 면 null → default"
      ],
      [
       "ephemeral",
       "state·plan 미저장",
       "1.10+"
      ],
      [
       "validation",
       "값 검증",
       "condition + error_message"
      ]
     ]
    }
   },
   {
    "h": "값 우선순위(낮음 → 높음)",
    "li": [
     "default",
     "환경변수 TF_VAR_name",
     "terraform.tfvars",
     "terraform.tfvars.json",
     "*.auto.tfvars / *.auto.tfvars.json (파일명 사전순)",
     "-var / -var-file (명령줄, 뒤에 온 것이 이김)",
     "값이 없을 때만 대화형 입력(-input=false 면 오류)"
    ]
   },
   {
    "h": "output",
    "li": [
     "output \"ip\" { value = aws_instance.web.public_ip }",
     "인수: value(필수), description, sensitive, depends_on, precondition, ephemeral(자식 모듈)",
     "루트 output 이 민감값을 참조하면 sensitive = true 필수",
     "terraform output / -raw / -json 으로 조회"
    ]
   },
   {
    "h": "locals 와 비교",
    "li": [
     "locals = 모듈 내부 계산값, 외부 입력 불가, 표현식 자유",
     "variable = 외부 입력 인터페이스, default 는 리터럴"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "복합 타입",
  "title": "복합 타입(Complex Types)",
  "ref": "Exam objective 4d · developer.hashicorp.com/terraform/language/expressions/type-constraints",
  "body": [
   {
    "h": "타입 분류",
    "tb": {
     "head": [
      "분류",
      "타입",
      "특징"
     ],
     "rows": [
      [
       "기본(primitive)",
       "string / number / bool",
       "자동 상호 변환 가능"
      ],
      [
       "컬렉션",
       "list(T)",
       "순서 있음, 인덱스 0부터"
      ],
      [
       "컬렉션",
       "set(T)",
       "순서·중복 없음, 인덱스 불가"
      ],
      [
       "컬렉션",
       "map(T)",
       "string 키, 값 타입 동일"
      ],
      [
       "구조",
       "object({a=string,b=number})",
       "이름별 다른 타입"
      ],
      [
       "구조",
       "tuple([string,number])",
       "위치별 다른 타입"
      ]
     ]
    }
   },
   {
    "h": "optional 속성(1.3+)",
    "li": [
     "type = object({ name = string, size = optional(string, \"t3.micro\") })",
     "생략 시 기본값, 기본값 미지정이면 null"
    ]
   },
   {
    "h": "변환 규칙",
    "li": [
     "map(string) 에 1 → \"1\"",
     "list ↔ set 변환: toset() / tolist()",
     "변환 불가(예 \"abc\" → number) 시 오류",
     "any = 타입을 런타임에 추론"
    ]
   },
   {
    "h": "선택 지침",
    "li": [
     "for_each 입력 = map 또는 set(string)",
     "속성 이름이 고정되고 타입이 섞이면 object",
     "키가 가변이고 값 타입 동일하면 map"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "표현식·함수",
  "title": "표현식과 내장 함수",
  "ref": "Exam objective 4e · developer.hashicorp.com/terraform/language/functions · /expressions/for",
  "body": [
   {
    "h": "자주 나오는 함수 결과(검산)",
    "tb": {
     "head": [
      "식",
      "결과",
      "포인트"
     ],
     "rows": [
      [
       "cidrsubnet(\"10.0.0.0/16\", 8, 2)",
       "\"10.0.2.0/24\"",
       "16+8=/24"
      ],
      [
       "cidrsubnet(\"10.1.0.0/16\", 4, 3)",
       "\"10.1.48.0/20\"",
       "3×16=48"
      ],
      [
       "lookup({a=\"x\"}, \"c\", \"z\")",
       "\"z\"",
       "키 없음 → 기본값"
      ],
      [
       "merge({a=1,b=2},{b=3,c=4})",
       "{a=1,b=3,c=4}",
       "뒤가 우선"
      ],
      [
       "zipmap([\"a\",\"b\"],[1,2])",
       "{a=1,b=2}",
       "키·값 리스트"
      ],
      [
       "flatten([[\"a\"],[],[\"b\",\"c\"]])",
       "[\"a\",\"b\",\"c\"]",
       "빈 리스트 제거"
      ],
      [
       "element([\"a\",\"b\",\"c\"], 4)",
       "\"b\"",
       "길이로 나머지(wrap)"
      ],
      [
       "coalesce(\"\", \"b\", \"c\")",
       "\"b\"",
       "null·빈 문자열 건너뜀"
      ],
      [
       "join(\"-\", [\"a\",\"b\"]) / split(\",\", \"a,b\")",
       "\"a-b\" / [\"a\",\"b\"]",
       "역함수 관계"
      ],
      [
       "jsonencode({b=1,a=\"x\"})",
       "{\"a\":\"x\",\"b\":1}",
       "키 사전순"
      ]
     ]
    }
   },
   {
    "h": "for 식·조건식",
    "li": [
     "[for s in var.l : upper(s)] → list",
     "{for k, v in var.m : k => v * 2} → map",
     "[for n in [1,2,3,4] : n if n % 2 == 0] → [2,4]",
     "var.env == \"prod\" ? 3 : 1"
    ]
   },
   {
    "h": "splat 과 dynamic",
    "li": [
     "aws_instance.web[*].id — count(list) 리소스 id 목록",
     "for_each(map) 리소스는 values(aws_instance.web)[*].id",
     "dynamic \"ingress\" { for_each = var.rules  content { from_port = ingress.value.from } }",
     "iterator = rule 로 반복 변수 이름 변경"
    ]
   },
   {
    "h": "오류 처리·템플릿",
    "li": [
     "try(local.cfg.port, 8080) — 첫 성공 값",
     "can(regex(\"^ami-\", var.ami)) — bool",
     "templatefile(\"${path.module}/user_data.tftpl\", { name = \"web\" })",
     "terraform console 로 함수 결과 검산"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-6",
  "t": "의존성·lifecycle",
  "title": "리소스 의존성과 lifecycle",
  "ref": "Exam objective 4f · developer.hashicorp.com/terraform/language/meta-arguments/lifecycle · /depends_on",
  "body": [
   {
    "h": "의존성 종류",
    "tb": {
     "head": [
      "종류",
      "방법",
      "용도"
     ],
     "rows": [
      [
       "암시적(implicit)",
       "속성 참조",
       "기본·권장"
      ],
      [
       "명시적(explicit)",
       "depends_on = [ ... ]",
       "참조 없는 숨은 의존성"
      ],
      [
       "모듈 단위",
       "module 블록 depends_on",
       "모듈 전체 대기"
      ]
     ]
    }
   },
   {
    "h": "lifecycle 인수",
    "tb": {
     "head": [
      "인수",
      "동작",
      "주의"
     ],
     "rows": [
      [
       "create_before_destroy",
       "새 객체 먼저 생성 후 삭제",
       "이름 고유 제약 충돌 가능"
      ],
      [
       "prevent_destroy",
       "삭제 계획 시 오류",
       "블록 삭제 시 보호 소멸"
      ],
      [
       "ignore_changes",
       "지정 속성 외부 변경 무시",
       "all 가능"
      ],
      [
       "replace_triggered_by",
       "참조 대상 변경 시 교체",
       "1.2+, 관리 리소스만"
      ]
     ]
    }
   },
   {
    "h": "count vs for_each",
    "li": [
     "count = 정수, count.index 0부터, 동일 리소스 N개",
     "for_each = map / set(string), each.key·each.value, 이름 붙은 인스턴스",
     "list 중간 원소 제거 시 count 는 뒤 인덱스 전부 재생성 위험",
     "둘을 같은 블록에 동시 사용 불가"
    ]
   },
   {
    "h": "실행 순서",
    "li": [
     "의존성 그래프(DAG) 기반 병렬 처리(기본 -parallelism=10)",
     "terraform graph 로 그래프 출력(DOT)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-7",
  "t": "custom conditions",
  "title": "사용자 정의 조건(Custom Conditions)",
  "ref": "Exam objective 4g · developer.hashicorp.com/terraform/language/expressions/custom-conditions · /checks",
  "body": [
   {
    "h": "4가지 조건 비교",
    "tb": {
     "head": [
      "종류",
      "위치",
      "실패 시"
     ],
     "rows": [
      [
       "validation",
       "variable 블록",
       "오류(입력 거부)"
      ],
      [
       "precondition",
       "resource/data lifecycle, output",
       "오류(평가 전 중단)"
      ],
      [
       "postcondition",
       "resource/data lifecycle",
       "오류(self 검증)"
      ],
      [
       "check + assert",
       "최상위 check 블록(1.5+)",
       "경고(apply 계속)"
      ]
     ]
    }
   },
   {
    "h": "문법",
    "li": [
     "validation { condition = can(regex(\"^ami-\", var.ami))  error_message = \"ami- 로 시작해야 함\" }",
     "precondition { condition = data.aws_ami.x.architecture == \"x86_64\"  error_message = \"...\" }",
     "postcondition { condition = self.public_dns != \"\"  error_message = \"...\" }"
    ]
   },
   {
    "h": "버전 포인트",
    "li": [
     "1.2 — precondition / postcondition 도입",
     "1.5 — check 블록 도입(scoped data source 허용)",
     "1.9 — validation 에서 다른 변수·모듈 내 객체 참조 허용"
    ]
   },
   {
    "h": "설계 지침",
    "li": [
     "입력 가정 = validation / precondition",
     "결과 보장 = postcondition",
     "운영 상태 모니터링(헬스체크) = check",
     "HCP Terraform 은 check 결과로 지속 검증(continuous validation)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-8",
  "t": "민감정보·Vault",
  "title": "민감정보와 Vault 연동",
  "ref": "Exam objective 4h · developer.hashicorp.com/terraform/language/manage-sensitive-data · /resources/ephemeral",
  "body": [
   {
    "h": "보호 수준 비교",
    "tb": {
     "head": [
      "기법",
      "CLI 출력",
      "state/plan 저장"
     ],
     "rows": [
      [
       "sensitive = true",
       "(sensitive value) 마스킹",
       "평문 저장"
      ],
      [
       "ephemeral 변수·출력(1.10+)",
       "표시 안 됨",
       "저장 안 됨"
      ],
      [
       "ephemeral resource(1.10+)",
       "-",
       "저장 안 됨"
      ],
      [
       "write-only 인수(1.11+)",
       "-",
       "저장 안 됨"
      ]
     ]
    }
   },
   {
    "h": "ephemeral 사용처",
    "li": [
     "ephemeral \"aws_secretsmanager_secret_version\" \"db\" { secret_id = \"...\" }",
     "참조 = ephemeral.TYPE.NAME.ATTR",
     "허용 컨텍스트: write-only 인수, provider 블록, locals, ephemeral 변수·출력",
     "수명: open → (renew) → close, 매 실행마다 새로 읽음"
    ]
   },
   {
    "h": "write-only 인수",
    "li": [
     "password_wo = ephemeral.random_password.db.result",
     "password_wo_version 값 변경으로 재전송 트리거",
     "provider 가 지원하는 인수(_wo)만 가능"
    ]
   },
   {
    "h": "Vault 연동",
    "li": [
     "provider \"vault\" {} + data \"vault_kv_secret_v2\" → 값이 state 에 남음",
     "ephemeral \"vault_kv_secret_v2\" → state 미저장(권장)",
     "Vault 동적 시크릿 = 짧은 TTL 자격증명 자동 발급·폐기",
     "state 보호: 암호화 원격 backend + 접근 통제, .tfstate VCS 커밋 금지"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "모듈 개념",
  "title": "모듈의 구조와 root/child 관계",
  "ref": "Exam objective 5c · developer.hashicorp.com/terraform/language/modules",
  "body": [
   {
    "h": "모듈이란",
    "li": [
     "한 디렉터리 안의 .tf 파일 묶음 = 모듈(Module)",
     "모든 Terraform 구성은 root module 1개를 가짐",
     "module 블록으로 호출되는 모듈 = child module",
     "목적: 재사용·캡슐화·일관성·조직 표준화"
    ]
   },
   {
    "h": "모듈 종류",
    "tb": {
     "head": [
      "구분",
      "의미",
      "예"
     ],
     "rows": [
      [
       "Root module",
       "작업 디렉터리 구성",
       "terraform apply 실행 위치"
      ],
      [
       "Child module",
       "module 블록이 호출",
       "module \"vpc\" { source = \"./modules/vpc\" }"
      ],
      [
       "Published module",
       "Registry 게시 모듈",
       "terraform-aws-modules/vpc/aws"
      ]
     ]
    }
   },
   {
    "h": "표준 모듈 구조",
    "li": [
     "main.tf / variables.tf / outputs.tf / README.md / LICENSE",
     "modules/ 하위 중첩 모듈, examples/ 사용 예",
     "파일명은 관례 — Terraform 은 디렉터리 내 모든 .tf 를 병합",
     "재사용 모듈 안에는 provider 블록 대신 required_providers 만 선언"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "모듈 source",
  "title": "모듈 source 주소 유형",
  "ref": "Exam objective 5a · developer.hashicorp.com/terraform/language/modules/sources",
  "body": [
   {
    "h": "source 유형",
    "tb": {
     "head": [
      "유형",
      "형식",
      "version 인수"
     ],
     "rows": [
      [
       "Local path",
       "./modules/app , ../shared",
       "불가"
      ],
      [
       "Terraform Registry",
       "NAMESPACE/NAME/PROVIDER",
       "가능"
      ],
      [
       "Private registry",
       "app.terraform.io/ORG/NAME/PROVIDER",
       "가능"
      ],
      [
       "GitHub",
       "github.com/ORG/REPO",
       "불가(?ref=)"
      ],
      [
       "Generic Git",
       "git::https://host/repo.git?ref=v1.0",
       "불가(?ref=)"
      ],
      [
       "S3 / GCS / HTTP",
       "s3::https://... / gcs::https://... / https://.../m.zip",
       "불가"
      ]
     ]
    }
   },
   {
    "h": "세부 규칙",
    "li": [
     "로컬 경로는 반드시 ./ 또는 ../ 로 시작",
     "하위 디렉터리: source = \"git::https://example.com/net.git//modules/vpc?ref=v1.2.0\"",
     "원격 모듈은 init 시 .terraform/modules 에 다운로드, 로컬은 직접 참조",
     "SSH Git: git::ssh://git@example.com/repo.git 또는 git@github.com:ORG/REPO.git"
    ]
   },
   {
    "h": "시험 포인트",
    "li": [
     "'version 을 쓸 수 있는 source 는?' → Registry(public·private)",
     "'Git 태그 고정 방법은?' → ?ref=",
     "source 는 리터럴 문자열 — 변수 사용 불가"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "변수 스코프",
  "title": "모듈 간 데이터 흐름: input variable 과 output",
  "ref": "Exam objective 5b · developer.hashicorp.com/terraform/language/values",
  "body": [
   {
    "h": "스코프 원칙",
    "li": [
     "각 모듈은 독립 네임스페이스 — 부모·자식 서로의 변수·locals·리소스를 직접 볼 수 없음",
     "부모→자식: module 블록 인수 → 자식 variable",
     "자식→부모: 자식 output → module.NAME.OUTPUT",
     "형제 모듈 간: 부모에서 module.a.out 을 module b 인수로 연결"
    ]
   },
   {
    "h": "방향별 정리",
    "tb": {
     "head": [
      "방향",
      "수단",
      "참조 문법"
     ],
     "rows": [
      [
       "부모 → 자식",
       "module 인수",
       "module \"db\" { instance_class = var.cls }"
      ],
      [
       "자식 내부",
       "input variable",
       "var.instance_class"
      ],
      [
       "자식 → 부모",
       "output 블록",
       "module.db.endpoint"
      ],
      [
       "루트 → CLI",
       "루트 output",
       "terraform output endpoint"
      ]
     ]
    }
   },
   {
    "h": "주의",
    "li": [
     "default 없는 자식 변수 = 필수 인수 (누락 시 오류)",
     "자식 output 이 sensitive 면 부모에서 재노출 시에도 sensitive = true 필요",
     "자식 output 은 루트 output 으로 재노출해야 CLI 에 표시"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "모듈 사용",
  "title": "module 블록 인수와 메타 인수",
  "ref": "Exam objective 5c · developer.hashicorp.com/terraform/language/modules/syntax",
  "body": [
   {
    "h": "module 블록 인수",
    "tb": {
     "head": [
      "인수",
      "역할",
      "비고"
     ],
     "rows": [
      [
       "source",
       "모듈 위치(필수)",
       "리터럴만"
      ],
      [
       "version",
       "버전 제약",
       "Registry 전용"
      ],
      [
       "count / for_each",
       "다중 인스턴스",
       "동시 사용 불가(0.13+)"
      ],
      [
       "providers",
       "provider 구성 전달",
       "alias 전달 시 필수"
      ],
      [
       "depends_on",
       "명시 의존성",
       "숨은 의존성에만"
      ]
     ]
    }
   },
   {
    "h": "provider 전달",
    "li": [
     "default provider 구성은 자식에 암묵 상속",
     "alias 구성: providers = { aws = aws.west } 또는 { aws.dst = aws.west }",
     "자식이 alias 를 받으려면 required_providers 에 configuration_aliases = [aws.dst] 선언",
     "모듈 내부 provider 블록(legacy)이 있으면 count·for_each·depends_on 사용 불가"
    ]
   },
   {
    "h": "설치·갱신",
    "li": [
     "module 추가·source 변경 → terraform init (또는 terraform get)",
     "terraform get -update 로 모듈만 갱신 가능",
     "모듈 인스턴스 주소 예: module.web[0].aws_instance.this, module.web[\"prod\"]"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "모듈 버전",
  "title": "모듈 버전 관리와 Registry 게시",
  "ref": "Exam objective 5d · developer.hashicorp.com/terraform/registry/modules/publish",
  "body": [
   {
    "h": "버전 제약",
    "tb": {
     "head": [
      "제약",
      "허용 범위",
      "용도"
     ],
     "rows": [
      [
       "= 3.1.0",
       "3.1.0 만",
       "완전 고정"
      ],
      [
       "~> 3.1",
       "3.1 이상 4.0 미만",
       "마이너 업데이트 허용"
      ],
      [
       "~> 3.1.0",
       "3.1.0 이상 3.2.0 미만",
       "패치만 허용"
      ],
      [
       ">= 3.0, < 4.0",
       "범위 명시",
       "복합 제약"
      ]
     ]
    }
   },
   {
    "h": "운영 권장",
    "li": [
     "프로덕션은 버전 고정(또는 ~> 패치 범위)",
     "모듈 버전은 .terraform.lock.hcl 대상 아님 → version 제약이 유일한 통제",
     "init -upgrade 시 제약 내 최신 버전 재선택",
     "Git 소스는 ?ref=태그 로 불변 참조"
    ]
   },
   {
    "h": "공개 Registry 게시 요건",
    "li": [
     "GitHub 공개 저장소",
     "저장소 이름 terraform-<PROVIDER>-<NAME> (예 terraform-aws-vpc)",
     "저장소 설명 + 표준 모듈 구조",
     "x.y.z 시맨틱 버전 태그(v1.0.0 허용) — 태그 푸시 시 새 버전 자동 게시",
     "private registry(HCP Terraform)는 조직 내부 공유용"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-1",
  "t": "local backend",
  "title": "state 와 local backend",
  "ref": "Exam objective 6a · developer.hashicorp.com/terraform/language/backend/local",
  "body": [
   {
    "h": "state 역할",
    "li": [
     "구성 ↔ 실제 리소스 매핑(리소스 ID 저장)",
     "메타데이터(의존성)·성능(캐시) 제공",
     "JSON 형식, serial(변경 번호)·lineage(상태 고유 ID) 포함",
     "민감값이 평문으로 들어갈 수 있어 보호 필요"
    ]
   },
   {
    "h": "local backend",
    "tb": {
     "head": [
      "항목",
      "내용",
      "비고"
     ],
     "rows": [
      [
       "기본 여부",
       "backend 미지정 시 기본",
       "—"
      ],
      [
       "파일",
       "terraform.tfstate",
       "path 인수로 변경"
      ],
      [
       "백업",
       "terraform.tfstate.backup",
       "직전 상태"
      ],
      [
       "workspace",
       "terraform.tfstate.d/<이름>/",
       "default 는 루트 파일"
      ],
      [
       "잠금",
       "로컬 시스템 API",
       "같은 머신 내 동시 실행 방지"
      ]
     ]
    }
   },
   {
    "h": "한계",
    "li": [
     "팀 공유 불가·노트북 분실 시 상태 유실",
     "VCS 커밋 금지(민감정보·충돌) → .gitignore",
     "협업은 remote backend 또는 HCP Terraform"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-2",
  "t": "state locking",
  "title": "State locking 동작과 해제",
  "ref": "Exam objective 6b · developer.hashicorp.com/terraform/language/state/locking",
  "body": [
   {
    "h": "동작",
    "li": [
     "상태를 쓸 수 있는 모든 작업에서 자동 잠금",
     "잠금 실패 시 작업 중단(진행 안 함)",
     "backend 마다 지원 여부 상이",
     "잠금 상태는 출력에 'Acquiring state lock' 으로 표시"
    ]
   },
   {
    "h": "관련 옵션·명령",
    "tb": {
     "head": [
      "옵션/명령",
      "의미",
      "주의"
     ],
     "rows": [
      [
       "-lock=false",
       "잠금 비활성",
       "비권장(손상 위험)"
      ],
      [
       "-lock-timeout=60s",
       "잠금 대기 재시도",
       "기본 0s"
      ],
      [
       "terraform force-unlock LOCK_ID",
       "잔여 잠금 해제",
       "다른 실행 중이면 위험"
      ],
      [
       "force-unlock -force",
       "확인 프롬프트 생략",
       "ID 는 여전히 필요"
      ]
     ]
    }
   },
   {
    "h": "backend 별 잠금 예",
    "li": [
     "S3: use_lockfile = true (1.10+) / dynamodb_table (1.11 deprecated)",
     "azurerm: Blob lease 기반 잠금",
     "gcs: 잠금 지원",
     "HCP Terraform: 워크스페이스 단위 자동 잠금"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-3",
  "t": "remote backend",
  "title": "backend 블록과 원격 상태 구성",
  "ref": "Exam objective 6c · developer.hashicorp.com/terraform/language/backend",
  "body": [
   {
    "h": "backend 블록 규칙",
    "li": [
     "terraform { backend \"s3\" { ... } } — 구성당 backend 1개",
     "변수·locals·data 참조 불가 → 부분 구성(partial configuration)",
     "예: terraform init -backend-config=prod.s3.tfbackend -backend-config=\"key=app/terraform.tfstate\"",
     "backend 설정 변경 시 terraform init 필수"
    ]
   },
   {
    "h": "init 옵션",
    "tb": {
     "head": [
      "옵션",
      "동작",
      "사용 상황"
     ],
     "rows": [
      [
       "-migrate-state",
       "기존 상태를 새 backend 로 복사",
       "local → s3 이전"
      ],
      [
       "-reconfigure",
       "기존 backend 설정 무시, 이전 없음",
       "새로 시작"
      ],
      [
       "-backend-config",
       "부분 구성 값 주입",
       "환경별 버킷·키"
      ],
      [
       "-backend=false",
       "backend 초기화 생략",
       "모듈·provider 만 설치"
      ]
     ]
    }
   },
   {
    "h": "S3 backend 예",
    "li": [
     "backend \"s3\" { bucket = \"tf-state\" key = \"app/terraform.tfstate\" region = \"ap-northeast-2\" encrypt = true use_lockfile = true }",
     "버킷 버저닝 활성화로 상태 이력 복구",
     "자격증명은 환경변수·프로파일 사용, 블록 하드코딩 금지",
     "backend 설정·자격증명은 .terraform/ 및 plan 파일에 기록될 수 있음"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-4",
  "t": "remote state",
  "title": "terraform_remote_state 로 구성 간 값 공유",
  "ref": "Exam objective 6c · developer.hashicorp.com/terraform/language/state/remote-state-data",
  "body": [
   {
    "h": "사용법",
    "li": [
     "data \"terraform_remote_state\" \"net\" { backend = \"s3\" config = { bucket = \"tf-state\" key = \"net/terraform.tfstate\" region = \"ap-northeast-2\" } }",
     "참조: data.terraform_remote_state.net.outputs.subnet_id",
     "읽을 수 있는 값 = 대상 구성의 root module output 만"
    ]
   },
   {
    "h": "대안 비교",
    "tb": {
     "head": [
      "방법",
      "장점",
      "단점"
     ],
     "rows": [
      [
       "terraform_remote_state",
       "설정 간단",
       "상태 전체 접근 권한 필요"
      ],
      [
       "tfe_outputs (HCP)",
       "output 만 노출",
       "HCP Terraform 전용"
      ],
      [
       "provider 데이터 소스",
       "상태 비의존",
       "조회 대상 API 필요"
      ],
      [
       "SSM·Consul 등 저장소",
       "명시적 게시",
       "별도 쓰기 리소스 필요"
      ]
     ]
    }
   },
   {
    "h": "주의",
    "li": [
     "자식 모듈 output 은 루트 output 으로 재노출해야 원격에서 읽힘",
     "읽기 측에 상태 스냅샷(민감값 포함) 읽기 권한 부여 → 최소권한 검토"
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-5",
  "t": "drift 관리",
  "title": "드리프트와 상태 리팩터링(refresh-only·-replace·moved·removed)",
  "ref": "Exam objective 6d · developer.hashicorp.com/terraform/cli/state/refresh",
  "body": [
   {
    "h": "드리프트(Drift)",
    "li": [
     "콘솔 수동 변경 등으로 실제 인프라 ≠ 상태/구성",
     "plan 시 기본 새로고침이 드리프트를 감지",
     "plan -refresh-only: 상태와 실제 차이만 표시",
     "apply -refresh-only: 인프라 변경 없이 상태만 갱신(구 terraform refresh 대체)"
    ]
   },
   {
    "h": "도구 비교",
    "tb": {
     "head": [
      "도구",
      "효과",
      "구버전/대체 대상"
     ],
     "rows": [
      [
       "apply -refresh-only",
       "상태만 실제에 맞춤",
       "terraform refresh(deprecated)"
      ],
      [
       "apply -replace=ADDR",
       "특정 리소스 재생성",
       "terraform taint(deprecated)"
      ],
      [
       "moved { from to }",
       "주소 변경, 재생성 없음(1.1+)",
       "terraform state mv"
      ],
      [
       "removed { from lifecycle { destroy = false } }",
       "상태에서만 제거(1.7+)",
       "terraform state rm"
      ],
      [
       "-refresh=false",
       "새로고침 생략",
       "대규모 구성 속도"
      ]
     ]
    }
   },
   {
    "h": "선택 기준",
    "li": [
     "수동 변경을 받아들일 것 → refresh-only 후 구성 코드도 맞춤",
     "수동 변경을 되돌릴 것 → 일반 plan/apply 로 구성대로 복원",
     "손상 리소스 → -replace",
     "코드 리팩터링 → moved 블록(리뷰·이력 남음)"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-1",
  "t": "import 명령",
  "title": "기존 인프라 가져오기 — terraform import 명령",
  "ref": "Exam objective 7a · developer.hashicorp.com/terraform/cli/commands/import",
  "body": [
   {
    "h": "개념",
    "li": [
     "콘솔·스크립트로 만든 기존 리소스를 Terraform 관리 대상으로 편입하는 작업 = import",
     "`terraform import aws_instance.web i-0abc123` — 주소(ADDR)와 provider 고유 ID",
     "★state 만★ 갱신, resource 블록은 사용자가 미리 작성해야 함"
    ]
   },
   {
    "h": "절차",
    "li": [
     "① 구성에 빈(또는 초안) resource 블록 작성",
     "② terraform import ADDR ID 실행",
     "③ terraform plan 으로 구성과 실물 차이 확인",
     "④ 차이가 없어질 때까지 구성 속성 보완"
    ]
   },
   {
    "h": "한계",
    "tb": {
     "head": [
      "항목",
      "import 명령",
      "비고"
     ],
     "rows": [
      [
       "미리보기(plan)",
       "없음(즉시 state 기록)",
       "실수 시 state rm 으로 되돌림"
      ],
      [
       "대상 수",
       "1회 1개",
       "반복 스크립트 필요"
      ],
      [
       "구성 생성",
       "안 함",
       "블록 방식 + -generate-config-out"
      ],
      [
       "원격 state",
       "지원(잠금 적용)",
       "HCP 워크스페이스도 가능"
      ]
     ]
    }
   },
   {
    "h": "주소 형식",
    "li": [
     "count: `aws_instance.web[0]`",
     "for_each: `aws_instance.web[\"a\"]` (셸 따옴표 이스케이프 주의)",
     "모듈: `module.vpc.aws_vpc.this`"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-2",
  "t": "import 블록",
  "title": "선언형 import 블록과 구성 자동 생성",
  "ref": "Exam objective 7a · developer.hashicorp.com/terraform/language/import",
  "body": [
   {
    "h": "문법",
    "li": [
     "`import { to = aws_instance.web  id = \"i-0abc123\" }` (Terraform 1.5+)",
     "to = 대상 리소스 주소, id = provider 의 import ID",
     "★root module★ 에만 선언 가능",
     "1.7+ for_each 로 다건 import"
    ]
   },
   {
    "h": "워크플로",
    "li": [
     "① import 블록 작성",
     "② `terraform plan -generate-config-out=generated.tf` (resource 블록 없을 때)",
     "③ generated.tf 검토·정리(불필요 속성 제거, 변수화)",
     "④ terraform apply → state 편입",
     "⑤ import 블록은 이후 삭제하거나 이력으로 유지 가능"
    ]
   },
   {
    "h": "명령형 vs 선언형",
    "tb": {
     "head": [
      "구분",
      "terraform import",
      "import 블록"
     ],
     "rows": [
      [
       "방식",
       "CLI 명령(명령형)",
       "HCL 코드(선언형)"
      ],
      [
       "plan 검토",
       "불가",
       "가능(will be imported)"
      ],
      [
       "구성 생성",
       "불가",
       "-generate-config-out"
      ],
      [
       "다건 처리",
       "반복 실행",
       "블록 여러 개·for_each"
      ],
      [
       "CI/CD·코드리뷰",
       "부적합",
       "적합"
      ]
     ]
    }
   },
   {
    "h": "주의",
    "li": [
     "-generate-config-out 대상 파일이 이미 존재하면 오류",
     "생성 기능은 experimental 표기 — 결과를 그대로 신뢰하지 말 것",
     "import 는 리소스를 '생성'하지 않음"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-3",
  "t": "state 조회",
  "title": "state CLI — 조회 명령(list·show)",
  "ref": "Exam objective 7b · developer.hashicorp.com/terraform/cli/commands/state",
  "body": [
   {
    "h": "원칙",
    "li": [
     "state 파일을 직접 편집하지 말고 ★terraform state 하위 명령★ 사용",
     "원격 backend 에도 동일하게 동작(잠금 적용)"
    ]
   },
   {
    "h": "조회 명령",
    "tb": {
     "head": [
      "명령",
      "출력",
      "용도"
     ],
     "rows": [
      [
       "terraform state list",
       "리소스 주소 목록",
       "관리 대상 파악·필터"
      ],
      [
       "terraform state show ADDR",
       "리소스 1개 속성",
       "ID·속성 확인"
      ],
      [
       "terraform show",
       "전체 state/plan",
       "사람이 읽는 형식"
      ],
      [
       "terraform show -json",
       "기계 판독 JSON",
       "자동화·정책 도구"
      ],
      [
       "terraform output",
       "root output 값",
       "다른 도구 연계"
      ]
     ]
    }
   },
   {
    "h": "예시",
    "li": [
     "`terraform state list module.vpc` — 모듈 내 리소스만",
     "`terraform state list -id=i-0abc123` — 특정 ID 리소스 찾기",
     "`terraform state show 'aws_instance.web[0]'`"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-4",
  "t": "state 수정",
  "title": "state CLI — 수정·동기화(mv·rm·pull·push)",
  "ref": "Exam objective 7b · developer.hashicorp.com/terraform/cli/state",
  "body": [
   {
    "h": "수정 명령",
    "tb": {
     "head": [
      "명령",
      "효과",
      "코드 대안"
     ],
     "rows": [
      [
       "state mv SRC DST",
       "주소 변경(재생성 없음)",
       "moved 블록(1.1+)"
      ],
      [
       "state rm ADDR",
       "관리 해제(실물 유지)",
       "removed 블록(1.7+)"
      ],
      [
       "state replace-provider",
       "provider 주소 교체",
       "-"
      ],
      [
       "state pull",
       "state JSON stdout",
       "-"
      ],
      [
       "state push FILE",
       "원격 state 덮어쓰기",
       "-force 는 최후 수단"
      ]
     ]
    }
   },
   {
    "h": "안전장치",
    "li": [
     "로컬 state 수정 시 자동 백업(`terraform.tfstate.backup`, -backup 옵션)",
     "push 는 lineage·serial 검사로 잘못된 덮어쓰기 차단",
     "수정 전 `terraform state pull > backup.tfstate` 로 백업 권장"
    ]
   },
   {
    "h": "moved/removed 블록 권장 이유",
    "li": [
     "코드 리뷰·plan 으로 변경을 검토 가능",
     "팀원 모두의 환경·CI 에 동일하게 적용",
     "명령 이력이 남지 않는 CLI 수동 조작 감소"
    ]
   }
  ]
 },
 {
  "s": "s7",
  "no": "7-5",
  "t": "로깅·디버깅",
  "title": "TF_LOG 상세 로깅과 crash.log",
  "ref": "Exam objective 7c · developer.hashicorp.com/terraform/internals/debugging",
  "body": [
   {
    "h": "환경변수",
    "tb": {
     "head": [
      "변수",
      "값",
      "의미"
     ],
     "rows": [
      [
       "TF_LOG",
       "TRACE/DEBUG/INFO/WARN/ERROR/JSON",
       "전체 로그 레벨"
      ],
      [
       "TF_LOG_CORE",
       "레벨",
       "Terraform 코어만"
      ],
      [
       "TF_LOG_PROVIDER",
       "레벨",
       "provider 플러그인만"
      ],
      [
       "TF_LOG_PATH",
       "파일 경로",
       "로그 파일 저장(레벨 설정 필수)"
      ]
     ]
    }
   },
   {
    "h": "사용 예",
    "li": [
     "Linux/macOS: `export TF_LOG=DEBUG; export TF_LOG_PATH=./terraform.log`",
     "PowerShell: `$env:TF_LOG=\"TRACE\"`",
     "해제: `unset TF_LOG` (또는 빈 값)"
    ]
   },
   {
    "h": "포인트",
    "li": [
     "기본 출력 대상 = stderr",
     "TRACE 가 가장 상세, JSON 은 TRACE 수준을 JSON 으로",
     "panic 시 작업 디렉터리에 crash.log 생성 → 이슈 보고 시 첨부",
     "로그에 민감정보가 포함될 수 있으므로 공유 전 확인"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-1",
  "t": "HCP 워크플로",
  "title": "HCP Terraform 개요와 3가지 워크플로",
  "ref": "Exam objective 8a · developer.hashicorp.com/terraform/cloud-docs/run/remote-operations",
  "body": [
   {
    "h": "개요",
    "li": [
     "HCP Terraform = 구 Terraform Cloud, HashiCorp 관리형(SaaS)",
     "Terraform Enterprise = 동일 기능 계열의 자체 호스팅(self-hosted) 배포판",
     "제공: 원격 실행·원격 state·state 잠금·버전 이력·VCS 연동·팀 권한·정책·private registry",
     "요금제·플랜별 기능은 변동 — 공식 페이지 확인 [확인필요]"
    ]
   },
   {
    "h": "워크플로 비교",
    "tb": {
     "head": [
      "워크플로",
      "트리거",
      "적합 상황"
     ],
     "rows": [
      [
       "VCS-driven",
       "PR(speculative)·머지(run)",
       "GitOps·코드리뷰 중심"
      ],
      [
       "CLI-driven",
       "로컬 terraform plan/apply",
       "기존 CLI 습관 유지"
      ],
      [
       "API-driven",
       "API 로 구성 업로드·run 생성",
       "자체 CI/CD 파이프라인"
      ]
     ]
    }
   },
   {
    "h": "포인트",
    "li": [
     "VCS 연결 workspace 는 CLI apply 불가",
     "CLI-driven 은 구성을 업로드 → 원격 실행 → 로그 스트리밍",
     ".terraformignore 로 업로드 제외"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-2",
  "t": "실행·run",
  "title": "Run 수명주기와 실행 모드",
  "ref": "Exam objective 8a · developer.hashicorp.com/terraform/cloud-docs/run/states",
  "body": [
   {
    "h": "Run 단계",
    "li": [
     "Pending(대기) → Plan → Cost estimation → Policy check → (Run tasks) → Confirm → Apply",
     "정책 검사 = plan 이후 apply 이전",
     "auto-apply 꺼짐 = 사람 승인 후 apply",
     "run 중 workspace 자동 잠금"
    ]
   },
   {
    "h": "실행 모드",
    "tb": {
     "head": [
      "모드",
      "실행 위치",
      "HCP 역할"
     ],
     "rows": [
      [
       "remote(기본)",
       "HCP 관리 인프라",
       "실행·state·로그"
      ],
      [
       "local",
       "사용자 로컬",
       "state 저장·잠금만"
      ],
      [
       "agent",
       "사설망 agent",
       "오케스트레이션·state"
      ]
     ]
    }
   },
   {
    "h": "관련 기능",
    "li": [
     "speculative plan: plan 전용, apply 불가",
     "run triggers: 원본 workspace apply 성공 시 대상 workspace run 연쇄",
     "health assessments: drift detection·continuous validation(check 블록 등)",
     "dynamic provider credentials: OIDC 기반 단기 자격증명"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-3",
  "t": "협업·권한",
  "title": "협업·거버넌스 — 팀 권한·정책·registry·run tasks",
  "ref": "Exam objective 8b · developer.hashicorp.com/terraform/cloud-docs/policy-enforcement",
  "body": [
   {
    "h": "팀·권한",
    "li": [
     "organization 단위, owners 팀이 전체 관리",
     "권한 범위: organization / project / workspace",
     "workspace 권한 예: read · plan · write · admin (+ custom)"
    ]
   },
   {
    "h": "정책 강제 수준",
    "tb": {
     "head": [
      "엔진",
      "수준",
      "실패 시"
     ],
     "rows": [
      [
       "Sentinel",
       "advisory",
       "경고만, run 계속"
      ],
      [
       "Sentinel",
       "soft-mandatory",
       "중단, 권한자 override 가능"
      ],
      [
       "Sentinel",
       "hard-mandatory",
       "중단, override 불가"
      ],
      [
       "OPA(Rego)",
       "advisory / mandatory",
       "mandatory 실패 시 중단(override 가능 여부는 설정) [확인필요]"
      ]
     ]
    }
   },
   {
    "h": "registry·run tasks",
    "li": [
     "private registry: 조직 내부 모듈·provider 공유, source `app.terraform.io/ORG/NAME/PROVIDER`",
     "run tasks: 외부 도구(보안·비용 스캔)를 pre-plan·post-plan·pre-apply·post-apply 단계에 연동",
     "run tasks 강제: advisory / mandatory"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-4",
  "t": "workspace·project",
  "title": "workspace·project 로 인프라 조직화",
  "ref": "Exam objective 8c · developer.hashicorp.com/terraform/cloud-docs/workspaces",
  "body": [
   {
    "h": "계층",
    "li": [
     "organization → project → workspace",
     "project: workspace 묶음 + 팀 권한·variable set 범위",
     "workspace: 구성·변수·state·run 이력·설정 단위"
    ]
   },
   {
    "h": "HCP vs CLI workspace",
    "tb": {
     "head": [
      "구분",
      "HCP workspace",
      "CLI workspace"
     ],
     "rows": [
      [
       "단위",
       "구성·변수·state·이력",
       "같은 구성의 state 만"
      ],
      [
       "변수",
       "workspace 별 저장",
       "공유(tfvars 별도)"
      ],
      [
       "권한",
       "팀 권한 부여",
       "없음(backend 권한)"
      ],
      [
       "참조",
       "-",
       "terraform.workspace"
      ]
     ]
    }
   },
   {
    "h": "변수·상태 공유",
    "li": [
     "Terraform variable vs environment variable 구분",
     "variable set: 여러 workspace/project 에 공용 적용",
     "sensitive 변수는 저장 후 읽기 불가(write-only)",
     "다른 workspace 출력 참조: tfe_outputs 데이터 소스 또는 terraform_remote_state(remote state 공유 허용 필요)"
    ]
   }
  ]
 },
 {
  "s": "s8",
  "no": "8-5",
  "t": "cloud 블록",
  "title": "cloud 블록 통합과 state 마이그레이션",
  "ref": "Exam objective 8d · developer.hashicorp.com/terraform/cli/cloud/settings",
  "body": [
   {
    "h": "cloud 블록",
    "li": [
     "`terraform { cloud { organization = \"acme\"  workspaces { name = \"app-prod\" } } }`",
     "workspaces 는 name(단일) 또는 tags(다수 매칭) 중 하나, project 지정 가능",
     "hostname 기본 app.terraform.io (Enterprise 는 자체 호스트)",
     "backend 블록과 동시 사용 불가"
    ]
   },
   {
    "h": "인증",
    "li": [
     "`terraform login [hostname]` → 브라우저로 API 토큰 발급",
     "토큰 저장: ~/.terraform.d/credentials.tfrc.json (Windows 는 %APPDATA%\\terraform.d)",
     "terraform logout 으로 제거",
     "CI 에서는 TF_TOKEN_app_terraform_io 환경변수 사용 가능"
    ]
   },
   {
    "h": "마이그레이션 절차",
    "tb": {
     "head": [
      "단계",
      "작업",
      "결과"
     ],
     "rows": [
      [
       "1",
       "terraform login",
       "API 토큰 저장"
      ],
      [
       "2",
       "cloud 블록 추가(backend 블록 제거)",
       "대상 org·workspace 지정"
      ],
      [
       "3",
       "terraform init",
       "기존 state 이전 여부 확인 프롬프트"
      ],
      [
       "4",
       "yes 응답",
       "state 가 HCP workspace 로 이전"
      ],
      [
       "5",
       "로컬 state 파일 정리",
       "이중 관리 방지"
      ]
     ]
    }
   },
   {
    "h": "환경변수",
    "li": [
     "TF_CLOUD_ORGANIZATION · TF_CLOUD_HOSTNAME · TF_CLOUD_PROJECT · TF_WORKSPACE 로 cloud 블록 값 대체 가능"
    ]
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "정의·명령·옵션 기억 — 반드시 맞혀야 하는 문항",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "개념 구분·옵션 선택 — 합격선을 가르는 문항",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "코드 해석·시나리오·헷갈리는 쌍 — 변별력 문항",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 1,
  "q": "Infrastructure as Code(IaC)의 정의로 가장 적절한 것은?",
  "c": [
   "인프라를 사람이 읽을 수 있는 구성 파일로 정의하고 버전 관리하는 방식",
   "클라우드 콘솔에서 리소스를 수동으로 생성하는 방식",
   "서버 운영체제를 컨테이너로 패키징하는 방식",
   "애플리케이션 소스 코드를 자동 테스트하는 방식"
  ],
  "a": 0,
  "e": "IaC = 인프라를 코드(구성 파일)로 정의·버전관리·재사용. 콘솔 수작업은 IaC 의 반대, 컨테이너·테스트는 별개 개념."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 1,
  "q": "Which language is primarily used to write Terraform configuration files?",
  "c": [
   "YAML",
   "Python",
   "HashiCorp Configuration Language (HCL)",
   "PowerShell DSC"
  ],
  "a": 2,
  "e": "Terraform configurations are written in HCL (.tf). A JSON-compatible syntax (.tf.json) is also supported; YAML/Python are not native configuration languages."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 1,
  "q": "Terraform 구성 파일로 인식되는 확장자 조합은?",
  "c": [
   ".tf 만",
   ".tf 와 .tfvars",
   ".tf 와 .tf.json",
   ".hcl 과 .yaml"
  ],
  "a": 2,
  "e": "Terraform 은 .tf(HCL)와 .tf.json(JSON) 을 구성 파일로 읽는다. .tfvars 는 변수 값 파일이지 구성 파일이 아니다."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 2,
  "q": "Terraform 아키텍처에서 '대상 플랫폼의 API 를 호출해 리소스를 생성·수정'하는 구성요소는?",
  "c": [
   "Terraform Core",
   "State 파일",
   "Backend",
   "Provider 플러그인"
  ],
  "a": 3,
  "e": "Core 는 구성 해석·그래프·plan 계산, 실제 API 호출은 provider 플러그인. state 는 매핑 기록, backend 는 state 저장 위치."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 1,
  "q": "Terraform 이 채택한 IaC 접근 방식은?",
  "c": [
   "선언형(Declarative)",
   "명령형(Imperative)",
   "절차형 스크립트(Procedural script)",
   "이벤트 기반(Event-driven)"
  ],
  "a": 0,
  "e": "Terraform 은 목표 상태를 기술하는 선언형. 명령형·절차형은 셸 스크립트처럼 단계를 직접 나열하는 방식."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 2,
  "q": "What best describes the declarative approach used by Terraform?",
  "c": [
   "You list each API call in the order it must run",
   "You must manually specify the creation order of every resource",
   "You describe the desired end state and Terraform determines the actions needed",
   "You write scripts that run on each target server"
  ],
  "a": 2,
  "e": "Declarative = describe the desired state; Terraform compares it with state/real infrastructure and computes the plan, including ordering via the dependency graph."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 2,
  "q": "다음 중 '명령형(imperative)' 방식의 특징은?",
  "c": [
   "의존성 그래프로 생성 순서를 자동 결정",
   "수행할 명령을 순서대로 작성하며 재실행 시 중복 생성 위험",
   "현재 상태와 목표 상태의 차이만 적용",
   "구성 파일에 최종 상태만 기술"
  ],
  "a": 1,
  "e": "명령형은 how(절차) 를 기술 → 재실행 시 멱등성 보장이 어렵다. 나머지는 선언형 특징."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 2,
  "q": "Terraform 이 리소스 생성 순서를 결정하는 근거는?",
  "c": [
   "파일 이름의 알파벳 순서",
   "리소스 블록이 작성된 줄 순서",
   "provider 블록의 선언 순서",
   "리소스 간 참조로 만든 의존성 그래프"
  ],
  "a": 3,
  "e": "Terraform 은 참조(implicit)와 depends_on 으로 의존성 그래프를 만들어 순서·병렬성을 결정한다. 파일·줄 순서는 무관."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 3,
  "q": "구성을 변경하지 않은 채 terraform apply 를 두 번 연속 실행했다. 두 번째 실행 결과로 옳은 것은? (외부 변경 없음)",
  "c": [
   "No changes — 인프라가 이미 구성과 일치",
   "모든 리소스가 한 번 더 생성됨",
   "모든 리소스가 삭제 후 재생성됨",
   "state 잠금 오류로 실패"
  ],
  "a": 0,
  "e": "선언형 + state 비교 → 차이가 없으면 변경 없음(멱등성). 명령형 스크립트였다면 중복 생성 위험이 있었을 것."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 1,
  "q": "Which is a primary benefit of Infrastructure as Code?",
  "c": [
   "It eliminates the need for any cloud provider accounts",
   "It guarantees zero infrastructure cost",
   "It removes the need for networking knowledge",
   "It makes infrastructure changes repeatable and version-controlled"
  ],
  "a": 3,
  "e": "IaC enables repeatable, consistent, reviewable, version-controlled infrastructure. It does not remove accounts, guarantee cost, or replace domain knowledge."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "IaC 를 VCS(Git)로 관리할 때 얻는 이점이 아닌 것은?",
  "c": [
   "변경 이력 추적",
   "Pull Request 기반 코드 리뷰",
   "실제 리소스 장애 자동 복구",
   "이전 버전으로 롤백 용이"
  ],
  "a": 2,
  "e": "VCS 는 이력·리뷰·롤백·협업을 제공. 장애 자동 복구는 VCS 기능이 아니다(모니터링·오토스케일링 영역)."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "동일한 네트워크 구성을 dev·stage·prod 세 환경에 일관되게 배포하고 싶다. 가장 적합한 IaC 패턴은?",
  "c": [
   "환경마다 콘솔에서 수동 생성",
   "공통 구성을 모듈로 만들어 변수만 바꿔 재사용",
   "prod 를 만든 뒤 스냅샷을 복사",
   "환경마다 별도 셸 스크립트 작성"
  ],
  "a": 1,
  "e": "모듈 + 입력 변수 = 재사용·표준화. 수작업·스크립트는 일관성 저하, 스냅샷 복사는 IaC 아님."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "IaC 에서 '구성 드리프트(configuration drift)'란?",
  "c": [
   "provider 버전이 올라가는 현상",
   "state 파일이 손상되는 현상",
   "모듈 버전이 고정되지 않은 상태",
   "실제 인프라가 코드로 정의한 상태와 달라진 현상"
  ],
  "a": 3,
  "e": "드리프트 = 콘솔 수작업 등으로 실제 리소스 ≠ 구성. Terraform plan(또는 -refresh-only)으로 탐지한다."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "Terraform 이 '변경을 적용하기 전에 무엇이 바뀌는지 검토'할 수 있게 해 주는 기능은?",
  "c": [
   "terraform plan",
   "terraform fmt",
   "terraform output",
   "terraform providers"
  ],
  "a": 0,
  "e": "plan 은 실행 계획(생성·변경·삭제)을 미리 보여 준다. fmt 는 서식, output 은 출력값, providers 는 요구 provider 목록."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "An operator changed a security group rule manually in the cloud console. How can Terraform help?",
  "c": [
   "Terraform automatically blocks all console access",
   "Terraform cannot see changes made outside of it",
   "terraform plan can detect the difference and apply can restore the configured state",
   "Terraform deletes the whole security group immediately"
  ],
  "a": 2,
  "e": "Terraform refreshes real state during plan, detects drift, and apply reconciles to the configuration. It doesn't block console access or delete without a plan."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 1,
  "q": "IaC 도입의 이점으로 가장 거리가 먼 것은?",
  "c": [
   "반복 가능한 환경 구성",
   "변경의 자동화·CI/CD 통합",
   "인프라 구성의 코드 리뷰",
   "애플리케이션 버그 자동 제거"
  ],
  "a": 3,
  "e": "IaC 는 인프라 관리 방식의 개선. 애플리케이션 버그 제거와는 무관."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 3,
  "q": "팀이 Terraform 으로 인프라를 관리하면서 terraform.tfstate 를 Git 저장소에 커밋하고 있다. 가장 적절한 개선은?",
  "c": [
   "state 파일 이름을 바꿔 커밋",
   "원격 backend(예 HCP Terraform·S3)에 state 를 저장하고 잠금 사용",
   "state 를 삭제하고 매번 import",
   "구성 파일을 커밋하지 않고 state 만 커밋"
  ],
  "a": 1,
  "e": "state 에는 민감정보가 평문으로 포함될 수 있고 동시 수정 충돌 위험 → 원격 backend + locking 이 모범 사례."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "Which statement about Terraform and CI/CD is correct?",
  "c": [
   "Terraform cannot run non-interactively",
   "Terraform commands can be automated in pipelines, e.g. using -auto-approve or saved plan files",
   "CI/CD tools must replace terraform plan",
   "Terraform requires a GUI to approve changes"
  ],
  "a": 1,
  "e": "Terraform CLI is scriptable: plan -out=FILE then apply FILE, or apply -auto-approve. That's a key IaC automation benefit."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 1,
  "q": "Terraform 이 여러 클라우드를 관리할 수 있게 하는 핵심 메커니즘은?",
  "c": [
   "Provider 플러그인",
   "Workspace",
   "Backend",
   "Provisioner"
  ],
  "a": 0,
  "e": "provider 가 각 플랫폼 API 를 추상화. workspace 는 state 분리, backend 는 state 저장, provisioner 는 리소스 내부 명령 실행."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "What does 'multi-cloud deployment' with Terraform provide?",
  "c": [
   "Automatic translation of AWS resources into Azure resources",
   "A single workflow and language to manage resources across multiple cloud providers",
   "Free cross-cloud networking",
   "Elimination of provider-specific resource types"
  ],
  "a": 1,
  "e": "Terraform gives one workflow/language across providers. Resource types remain provider-specific; code is not auto-translated."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "온프레미스 VMware vSphere 와 AWS 를 함께 Terraform 으로 관리하는 시나리오를 가장 잘 설명하는 용어는?",
  "c": [
   "단일 클라우드",
   "서버리스",
   "하이브리드 클라우드",
   "엣지 컴퓨팅"
  ],
  "a": 2,
  "e": "온프레미스 + 퍼블릭 클라우드 = 하이브리드. Terraform 은 vSphere provider 로 온프레미스도 관리 가능."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "Terraform 이 '서비스 무관(service-agnostic)' 워크플로를 제공한다는 의미는?",
  "c": [
   "클라우드 리소스만 관리 가능",
   "provider 를 설치하지 않아도 모든 서비스를 관리",
   "모든 서비스에 같은 리소스 타입 이름을 사용",
   "API 를 가진 SaaS·플랫폼도 같은 Write→Plan→Apply 절차로 관리"
  ],
  "a": 3,
  "e": "GitHub·Kubernetes·Datadog 등도 provider 만 있으면 같은 워크플로로 관리. provider 설치는 필요하며 리소스 타입은 서비스마다 다르다."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "멀티클라우드 전략의 이점으로 가장 적절한 것은?",
  "c": [
   "한 클라우드 장애에 대비한 내결함성·벤더 종속 완화",
   "모든 클라우드 비용의 자동 통합 청구",
   "리소스 코드의 자동 이식",
   "보안 설정 불필요"
  ],
  "a": 0,
  "e": "멀티클라우드 = 장애 허용(fault tolerance)·벤더 종속 완화. 코드 자동 이식·통합 청구는 Terraform 기능 아님."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 1,
  "q": "Which of the following can Terraform manage through providers?",
  "c": [
   "Only AWS resources",
   "Only virtual machines",
   "Only resources in HashiCorp products",
   "Cloud resources, SaaS settings such as GitHub repositories, and on-premises platforms"
  ],
  "a": 3,
  "e": "Any platform exposing an API can be managed via a provider — clouds, SaaS, on-prem."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 3,
  "q": "한 구성에서 AWS 에 VM 을, Cloudflare 에 DNS 레코드를 만들고 DNS 레코드가 VM 의 공인 IP 를 참조하게 하려 한다. 옳은 설명은?",
  "c": [
   "provider 가 다르면 한 구성에서 참조할 수 없다",
   "두 provider 를 한 구성에 선언하고 aws_instance 속성을 DNS 리소스 인수로 참조하면 Terraform 이 순서를 결정",
   "DNS 리소스를 먼저 만들고 수동으로 IP 를 입력해야 한다",
   "Cloudflare 는 provider 가 없어 스크립트로만 가능"
  ],
  "a": 1,
  "e": "서로 다른 provider 리소스 간에도 참조 → 암묵적 의존성 → 생성 순서 자동 결정. 서비스 무관 워크플로의 대표 예."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "멀티클라우드 환경에서 Terraform 사용에 대한 설명으로 틀린 것은?",
  "c": [
   "하나의 구성에 여러 provider 를 선언할 수 있다",
   "provider 마다 리소스 타입 이름이 다르다",
   "AWS 용 코드는 provider 만 바꾸면 Azure 에서 그대로 동작한다",
   "모든 provider 에 같은 plan/apply 워크플로를 사용한다"
  ],
  "a": 2,
  "e": "리소스 타입·인수가 provider 마다 다르므로 코드가 자동 이식되지 않는다. 워크플로와 언어가 공통일 뿐."
 },
 {
  "s": "s1",
  "t": "도구 비교",
  "d": 2,
  "q": "Terraform 과 Ansible 의 관계로 가장 적절한 것은?",
  "c": [
   "Terraform 은 구성 관리, Ansible 은 프로비저닝 전용",
   "둘은 같은 기능이라 함께 쓸 수 없다",
   "Ansible 은 Terraform 의 provider 다",
   "Terraform 은 인프라 프로비저닝, Ansible 은 서버 내부 구성 관리에 강점 — 병행 가능"
  ],
  "a": 3,
  "e": "Terraform=프로비저닝(생성·변경·삭제), Ansible=구성 관리. 실무에서 함께 사용."
 },
 {
  "s": "s1",
  "t": "도구 비교",
  "d": 2,
  "q": "Which is a key difference between Terraform and AWS CloudFormation?",
  "c": [
   "Terraform supports many providers across clouds; CloudFormation is AWS-specific",
   "CloudFormation is declarative; Terraform is imperative",
   "Terraform requires agents on servers; CloudFormation does not",
   "Only CloudFormation can track resource state"
  ],
  "a": 0,
  "e": "Both are declarative; Terraform is cloud-agnostic via providers, agentless, and tracks resources in its state file."
 },
 {
  "s": "s1",
  "t": "도구 비교",
  "d": 1,
  "q": "Terraform 이 대상 리소스를 관리하기 위해 필요한 것은?",
  "c": [
   "대상 서버마다 Terraform 에이전트 설치",
   "대상 플랫폼 API 에 접근할 provider 와 자격 증명",
   "전용 하드웨어 어플라이언스",
   "클라우드 콘솔 로그인 세션 유지"
  ],
  "a": 1,
  "e": "Terraform 은 에이전트리스 — provider 가 자격 증명으로 API 를 호출한다."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 2,
  "q": "불변 인프라(immutable infrastructure)의 설명으로 옳은 것은?",
  "c": [
   "배포 후 서버를 접속해 패치를 직접 적용",
   "구성 변경 시 기존 리소스를 수정하지 않고 새 리소스로 교체",
   "리소스를 절대 삭제하지 않는 정책",
   "state 파일을 읽기 전용으로 만드는 기능"
  ],
  "a": 1,
  "e": "불변 인프라 = 교체(replace) 기반 변경 → 드리프트 감소·롤백 단순. in-place 패치는 가변(mutable) 방식."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 2,
  "q": "Which tool pairing is commonly used to implement immutable infrastructure with HashiCorp tools?",
  "c": [
   "Vault to build images, Consul to deploy",
   "Packer to build machine images, Terraform to provision instances from them",
   "Terraform to patch running servers in place",
   "Nomad to write HCL modules"
  ],
  "a": 1,
  "e": "Packer builds golden images; Terraform deploys new instances from them — a classic immutable pattern."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 3,
  "q": "인스턴스의 AMI(이미지) 를 바꾸도록 구성을 수정한 뒤 plan 을 실행했더니 해당 리소스에 -/+ 가 표시되었다. 의미로 옳은 것은?",
  "c": [
   "기존 리소스를 in-place 로 수정",
   "기존 리소스를 삭제한 뒤 새로 생성(replace)",
   "data 소스를 읽기만 함",
   "state 에서만 제거"
  ],
  "a": 1,
  "e": "-/+ = destroy then create 교체. 수정 불가 인수 변경 시 발생하며 불변 인프라 방식과 일치. ~ 는 in-place, <= 는 data 읽기."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 2,
  "q": "Terraform 의 state 가 IaC 에서 수행하는 역할은?",
  "c": [
   "구성 파일의 문법 검사",
   "provider 바이너리 저장",
   "구성의 리소스와 실제 인프라 객체 간 매핑·메타데이터 기록",
   "변수 기본값 정의"
  ],
  "a": 2,
  "e": "state = 리소스 주소 ↔ 실제 객체 ID 매핑, 메타데이터·의존성 기록, 성능 캐시. 문법 검사는 validate, provider 는 .terraform 디렉터리."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 3,
  "q": "A team wants to stop creating infrastructure through tickets and manual console work, and instead let developers request standard environments via reviewed code. Which IaC benefit is this?",
  "c": [
   "Self-service infrastructure with consistent, reviewed, reusable modules",
   "Configuration drift",
   "Mutable infrastructure",
   "Provider tiering"
  ],
  "a": 0,
  "e": "IaC + modules enables self-service provisioning with guardrails and code review. Drift is a problem, not a benefit; mutable infra is the opposite pattern."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 1,
  "q": "Terraform 이 구성에 필요한 provider 플러그인을 내려받는 명령은?",
  "c": [
   "terraform init",
   "terraform plan",
   "terraform get",
   "terraform validate"
  ],
  "a": 0,
  "e": "init 이 provider·모듈 설치와 backend 초기화. get 은 모듈만, plan/validate 는 설치하지 않음."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 1,
  "q": "Where does terraform init install provider plugins by default?",
  "c": [
   "~/.terraform.d/state",
   "Inside terraform.tfstate",
   "/usr/bin/terraform-providers",
   "The .terraform/providers directory inside the working directory"
  ],
  "a": 3,
  "e": "Providers are installed under .terraform/providers in the working directory (unless a plugin cache is configured)."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "source = \"hashicorp/aws\" 의 전체 주소로 옳은 것은?",
  "c": [
   "github.com/hashicorp/aws",
   "app.terraform.io/hashicorp/aws",
   "registry.terraform.io/hashicorp/aws",
   "releases.hashicorp.com/aws"
  ],
  "a": 2,
  "e": "호스트 생략 시 기본 호스트는 registry.terraform.io. 형식 [HOSTNAME/]NAMESPACE/TYPE."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "provider 소스 주소 `hashicorp/aws` 에서 hashicorp 는 무엇인가?",
  "c": [
   "TYPE",
   "HOSTNAME",
   "local name",
   "NAMESPACE"
  ],
  "a": 3,
  "e": "NAMESPACE = 게시 조직, TYPE = aws. local name 은 required_providers 의 키."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "provider 요구사항(source·version)을 선언하는 위치로 옳은 것은?",
  "c": [
   "terraform 블록의 required_providers",
   "provider 블록의 version 인수",
   "variable 블록",
   "backend 블록"
  ],
  "a": 0,
  "e": "required_providers(terraform 블록)에 선언. provider 블록의 version 인수는 구식이며 권장되지 않는다."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 1,
  "q": "Which command shows the providers required by the current configuration?",
  "c": [
   "terraform providers",
   "terraform show",
   "terraform state list",
   "terraform version -providers"
  ],
  "a": 0,
  "e": "terraform providers prints provider requirements for the configuration and its modules (and state). terraform version shows installed versions, but there's no -providers flag."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "HashiCorp 가 직접 소유·유지보수하는 provider tier 는?",
  "c": [
   "Partner",
   "Community",
   "Official",
   "Archived"
  ],
  "a": 2,
  "e": "Official = HashiCorp. Partner 는 기술 파트너 소유(검증), Community 는 개인·커뮤니티, Archived 는 관리 중단."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "A provider published and maintained by a third-party technology company, verified by HashiCorp, belongs to which tier?",
  "c": [
   "Official",
   "Community",
   "Partner",
   "Archived"
  ],
  "a": 2,
  "e": "Partner providers are owned and maintained by third-party companies that participate in HashiCorp's partner program."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 1,
  "q": "version = \"~> 5.0\" 이 허용하는 범위는?",
  "c": [
   ">= 5.0, < 6.0",
   ">= 5.0, < 5.1",
   "정확히 5.0.0",
   "5.0 이상 제한 없음"
  ],
  "a": 0,
  "e": "~> 는 가장 오른쪽 자리만 증가 허용 → 5.x 전체."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "version = \"~> 5.10.0\" 일 때 설치될 수 있는 버전은?",
  "c": [
   "5.11.0",
   "6.0.0",
   "5.9.9",
   "5.10.7"
  ],
  "a": 3,
  "e": "~> 5.10.0 = >=5.10.0, <5.11.0 → 패치만 허용."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "Which constraint allows any 4.x version from 4.2 upward but never 5.0?",
  "c": [
   "~> 4.2.0",
   "= 4.2",
   ">= 4.2",
   "~> 4.2"
  ],
  "a": 3,
  "e": "~> 4.2 means >= 4.2, < 5.0. ~> 4.2.0 limits to 4.2.x; >= 4.2 has no upper bound."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 1,
  "q": ".terraform.lock.hcl 파일을 생성하는 명령은?",
  "c": [
   "terraform plan",
   "terraform apply",
   "terraform init",
   "terraform fmt"
  ],
  "a": 2,
  "e": "의존성 잠금 파일은 init 이 생성·갱신한다."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": ".terraform.lock.hcl 에 대한 설명으로 옳은 것은?",
  "c": [
   "모듈과 provider 의 버전을 모두 잠근다",
   "민감정보가 들어 있어 VCS 커밋을 피해야 한다",
   "terraform apply 가 매번 다시 만든다",
   "provider 의 선택 버전과 체크섬을 기록하며 VCS 커밋이 권장된다"
  ],
  "a": 3,
  "e": "provider 버전·해시만 기록(모듈 X), 민감정보 없음 → 커밋 권장. init 이 생성."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "lock 파일에 기록된 provider 버전보다 새 버전(제약 범위 내)을 쓰고 싶다. 올바른 명령은?",
  "c": [
   "terraform init -upgrade",
   "terraform apply -upgrade",
   "terraform providers -update",
   "lock 파일을 직접 편집"
  ],
  "a": 0,
  "e": "init -upgrade 가 제약 범위 내 최신 버전을 선택해 lock 파일을 갱신."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "terraform { required_version = \">= 1.12.0\" } 의 의미는?",
  "c": [
   "모든 provider 가 1.12.0 이상이어야 함",
   "구성을 실행하는 Terraform CLI 가 1.12.0 이상이어야 함",
   "state 파일 형식 버전",
   "모듈 버전 제약"
  ],
  "a": 1,
  "e": "required_version = Terraform CLI 버전 제약. provider 는 required_providers 의 version."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 3,
  "q": "Your team commits .terraform.lock.hcl. A colleague runs terraform init on a new machine. What happens?",
  "c": [
   "Terraform installs the latest provider available, ignoring the lock file",
   "Terraform fails until the lock file is deleted",
   "Terraform installs the exact provider versions recorded in the lock file (if they satisfy constraints)",
   "Terraform downloads modules listed in the lock file"
  ],
  "a": 2,
  "e": "init honors the lock file selections, ensuring consistent provider versions across machines. Modules are not recorded in it."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 3,
  "q": "lock 파일에는 aws 5.30.0 이 기록되어 있는데 누군가 구성의 제약을 \"~> 5.40\" 으로 바꿨다. 이후 terraform init(옵션 없음) 실행 결과로 가장 적절한 것은?",
  "c": [
   "lock 의 5.30.0 을 그대로 설치",
   "제약 불일치 오류가 나며 init -upgrade 로 갱신해야 함",
   "lock 파일을 자동 삭제",
   "제약을 무시하고 최신 6.x 설치"
  ],
  "a": 1,
  "e": "기록된 버전이 새 제약을 만족하지 않으면 init 이 오류를 내고 -upgrade 로 새 버전 선택을 요구한다."
 },
 {
  "s": "s2",
  "t": "provider 구성",
  "d": 1,
  "q": "provider \"aws\" { region = \"us-east-1\" } 블록의 역할은?",
  "c": [
   "provider 플러그인 다운로드 위치 지정",
   "provider 버전 제약 선언",
   "state 저장 위치 지정",
   "aws provider 의 구성(리전 등) 지정"
  ],
  "a": 3,
  "e": "provider 블록 = provider 구성 인수. 버전은 required_providers, state 위치는 backend."
 },
 {
  "s": "s2",
  "t": "provider 구성",
  "d": 2,
  "q": "provider 자격 증명 관리 방법으로 가장 권장되는 것은?",
  "c": [
   "provider 블록에 access key 하드코딩",
   "환경변수·공유 프로필·IAM 역할 등 외부 메커니즘 사용",
   "terraform.tfstate 에 저장",
   "output 으로 노출"
  ],
  "a": 1,
  "e": "하드코딩은 VCS 유출 위험. 환경변수·프로필·역할(또는 Vault 동적 자격 증명) 권장."
 },
 {
  "s": "s2",
  "t": "provider 구성",
  "d": 2,
  "q": "Where should provider configuration blocks generally be placed?",
  "c": [
   "In the root module; reusable child modules should receive providers from the caller",
   "Only inside every child module",
   "Inside the backend block",
   "In terraform.tfvars"
  ],
  "a": 0,
  "e": "Best practice: configure providers in the root module and pass them to child modules (implicitly or via providers = {...})."
 },
 {
  "s": "s2",
  "t": "provider 구성",
  "d": 2,
  "q": "required_providers 에 local name 을 `mycloud = { source = \"hashicorp/aws\" }` 로 선언했다. provider 블록 이름으로 올바른 것은?",
  "c": [
   "provider \"aws\"",
   "provider \"hashicorp\"",
   "provider \"mycloud\"",
   "provider \"hashicorp/aws\""
  ],
  "a": 2,
  "e": "provider 블록 이름은 local name 을 사용. 다만 관례적으로 local name 은 TYPE 과 같게 둔다."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 1,
  "q": "같은 provider 를 서로 다른 리전으로 두 번 구성할 때 사용하는 인수는?",
  "c": [
   "count",
   "alias",
   "for_each",
   "depends_on"
  ],
  "a": 1,
  "e": "alias 로 추가 구성을 만든다."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 2,
  "q": "alias = \"west\" 인 aws provider 를 리소스에서 사용하는 올바른 표기는?",
  "c": [
   "provider = \"aws.west\"",
   "provider = aws[\"west\"]",
   "alias = aws.west",
   "provider = aws.west"
  ],
  "a": 3,
  "e": "provider 메타 인수는 따옴표 없는 참조 <PROVIDER>.<ALIAS>."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 2,
  "q": "Two aws provider blocks exist: one without alias (us-east-1) and one with alias = \"eu\". A resource has no provider argument. Which configuration does it use?",
  "c": [
   "The default (non-aliased) provider in us-east-1",
   "The aliased eu provider",
   "Terraform errors because it is ambiguous",
   "Both, creating two copies"
  ],
  "a": 0,
  "e": "Resources without a provider argument use the default (non-aliased) configuration of the matching provider."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 2,
  "q": "자식 모듈에 alias 구성 aws.west 를 넘기는 올바른 방법은?",
  "c": [
   "module 블록에 provider = aws.west",
   "module 블록에 providers = { aws = aws.west }",
   "모듈 변수로 region 만 전달하면 자동 연결",
   "모듈 내부에 alias 를 다시 선언"
  ],
  "a": 1,
  "e": "module 은 providers 맵(복수)을 사용. 리소스는 provider(단수)."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 3,
  "q": "자식 모듈이 두 개의 aws 구성(기본·aws.replica)을 받아야 한다. 모듈 안 required_providers 에 필요한 선언은?",
  "c": [
   "configuration_aliases = [aws.replica]",
   "alias = \"replica\"",
   "providers = [aws.replica]",
   "depends_on = [aws.replica]"
  ],
  "a": 0,
  "e": "모듈이 받을 alias 를 configuration_aliases 로 선언하고, 호출 측 providers 맵으로 전달."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 3,
  "q": "Given: provider \"aws\" { alias = \"dr\" region = \"us-west-2\" } and no other aws provider block. A resource \"aws_s3_bucket\" \"logs\" {} has no provider argument. What happens?",
  "c": [
   "It uses the dr provider automatically",
   "Terraform uses an empty default aws configuration (e.g. region from environment) for that resource",
   "Terraform refuses to plan any resources",
   "The bucket is created in both regions"
  ],
  "a": 1,
  "e": "Aliased configs are only used when explicitly selected. A resource without provider uses the default aws config, which Terraform creates implicitly with empty arguments if no non-aliased block exists."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 1,
  "q": "Terraform state 의 핵심 목적은?",
  "c": [
   "구성 파일의 문법 저장",
   "구성의 리소스를 실제 인프라 객체에 매핑",
   "provider 바이너리 캐시",
   "변수 기본값 저장"
  ],
  "a": 1,
  "e": "state = 실제 세계 매핑 + 메타데이터 + 성능 + 동기화."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 1,
  "q": "local backend 를 사용할 때 기본 state 파일 이름은?",
  "c": [
   "state.tf",
   ".terraform.lock.hcl",
   "terraform.tfvars",
   "terraform.tfstate"
  ],
  "a": 3,
  "e": "기본 terraform.tfstate, 이전 버전은 terraform.tfstate.backup."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 2,
  "q": "Which statement about sensitive values and state is true?",
  "c": [
   "Marking an output sensitive encrypts it in the state file",
   "Terraform never writes secrets to state",
   "State may contain sensitive values in plain text, so it must be protected",
   "State is automatically deleted after apply"
  ],
  "a": 2,
  "e": "sensitive only redacts CLI output; values can be stored in plain text in state. Protect state with an encrypted remote backend and access controls."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 2,
  "q": "state 파일을 다루는 방법으로 옳은 것은?",
  "c": [
   "텍스트 편집기로 직접 수정",
   "terraform state 하위 명령(list·show·mv·rm)으로 조작",
   "Git 에 커밋해 공유",
   "apply 후 매번 삭제"
  ],
  "a": 1,
  "e": "직접 편집은 손상 위험 → state CLI 사용. 공유는 원격 backend."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 3,
  "q": "누군가 실수로 local terraform.tfstate 를 삭제했다(백업 없음). 이후 terraform plan 결과로 예상되는 것은?",
  "c": [
   "기존 리소스를 자동 인식해 No changes",
   "기존 리소스를 모르므로 모든 리소스를 새로 생성하려고 계획",
   "모든 실제 리소스를 삭제하려고 계획",
   "plan 이 실행되지 않음"
  ],
  "a": 1,
  "e": "매핑이 사라져 Terraform 은 리소스가 없다고 판단 → 생성 계획(중복·이름 충돌 위험). import 로 복구 필요."
 },
 {
  "s": "s2",
  "t": "state 관리",
  "d": 2,
  "q": "팀이 같은 state 를 안전하게 공유하기 위한 방법으로 가장 적절한 것은?",
  "c": [
   "state 를 공유 폴더에 복사",
   "원격 backend + state locking 사용",
   "각자 별도 state 로 같은 리소스 관리",
   "-lock=false 로 실행"
  ],
  "a": 1,
  "e": "원격 backend 로 공유하고 잠금으로 동시 쓰기를 방지."
 },
 {
  "s": "s2",
  "t": "state 관리",
  "d": 2,
  "q": "An apply crashed and left a stale lock on the remote state. Which command removes the lock?",
  "c": [
   "terraform state rm",
   "terraform unlock",
   "terraform force-unlock LOCK_ID",
   "terraform init -reconfigure"
  ],
  "a": 2,
  "e": "terraform force-unlock LOCK_ID manually releases a stuck lock. Use only when sure no other operation is running."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 1,
  "q": "Terraform 핵심 워크플로의 올바른 순서는?",
  "c": [
   "Write → Plan → Apply",
   "Plan → Write → Apply",
   "Apply → Plan → Write",
   "Init → Apply → Plan"
  ],
  "a": 0,
  "e": "Write(작성) → Plan(미리보기) → Apply(적용)."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 1,
  "q": "In the core Terraform workflow, which step lets you preview changes before they are made?",
  "c": [
   "Write",
   "Init",
   "Plan",
   "Apply"
  ],
  "a": 2,
  "e": "Plan shows the execution plan without changing infrastructure."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 2,
  "q": "팀 단위 Terraform 워크플로에서 'Plan' 단계의 모범 사례는?",
  "c": [
   "plan 없이 바로 apply",
   "plan 결과를 state 파일에 직접 저장",
   "각자 로컬 state 로 apply",
   "Pull Request 에 plan 결과를 첨부해 리뷰"
  ],
  "a": 3,
  "e": "팀 워크플로: 브랜치 작성 → PR + plan 리뷰 → 병합 후 apply."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 2,
  "q": "CI 파이프라인에서 '검토한 계획 그대로' 적용하기 위한 패턴은?",
  "c": [
   "terraform apply -auto-approve 만 사용",
   "terraform plan 후 다시 terraform apply 실행",
   "terraform plan -out=tfplan → terraform apply tfplan",
   "terraform refresh → terraform apply"
  ],
  "a": 2,
  "e": "저장 plan 파일을 apply 하면 계획과 동일하게 적용된다. 별도 apply 는 새 계획을 만들어 차이가 생길 수 있다."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 3,
  "q": "A pipeline runs terraform plan, waits for approval, then runs terraform apply -auto-approve (no plan file). What is the risk?",
  "c": [
   "apply creates a new plan, which may differ from the reviewed one if infrastructure or code changed",
   "None; it applies exactly the reviewed plan",
   "apply -auto-approve skips state locking",
   "apply -auto-approve deletes the state file"
  ],
  "a": 0,
  "e": "Without a saved plan file, apply generates a fresh plan. Use plan -out and apply the file to guarantee the reviewed plan is executed."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 1,
  "q": "새로 클론한 Terraform 프로젝트에서 가장 먼저 실행해야 하는 명령은?",
  "c": [
   "terraform plan",
   "terraform validate",
   "terraform apply",
   "terraform init"
  ],
  "a": 3,
  "e": "init 이 backend·provider·모듈을 준비해야 다른 명령이 동작한다."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 1,
  "q": "Which of the following does terraform init NOT do?",
  "c": [
   "Download provider plugins",
   "Initialize the backend",
   "Create infrastructure resources",
   "Download child modules"
  ],
  "a": 2,
  "e": "init prepares the working directory; it never creates infrastructure."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "구성에 새 모듈 블록을 추가한 뒤 plan 을 실행했더니 'Module not installed' 오류가 났다. 해결책은?",
  "c": [
   "terraform init 실행",
   "terraform fmt 실행",
   "terraform apply -refresh-only",
   "terraform validate 실행"
  ],
  "a": 0,
  "e": "새 모듈·provider 추가 시 init(또는 get)으로 설치해야 한다."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "backend 를 local 에서 S3 로 변경하고 기존 state 를 옮기려 한다. 올바른 명령은?",
  "c": [
   "terraform init -reconfigure",
   "terraform apply -backend=s3",
   "terraform init -migrate-state",
   "terraform state push"
  ],
  "a": 2,
  "e": "-migrate-state 가 기존 state 를 새 backend 로 이전. -reconfigure 는 기존 설정 무시(이전 안 함)."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "CI 에서 원격 backend 접근 권한 없이 validate 만 수행하려 한다. 적절한 init 옵션은?",
  "c": [
   "-backend=false",
   "-upgrade",
   "-migrate-state",
   "-lock=false"
  ],
  "a": 0,
  "e": "-backend=false 로 backend 초기화를 건너뛰고 provider·모듈만 설치 → validate 가능."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "Is it safe to run terraform init multiple times?",
  "c": [
   "No, it overwrites the state file",
   "No, it destroys existing resources",
   "Only if .terraform is deleted first",
   "Yes, it is idempotent and safe to re-run"
  ],
  "a": 3,
  "e": "init is safe to run repeatedly; re-run after changing providers, modules, or backend configuration."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 3,
  "q": "backend \"s3\" { bucket = var.bucket } 처럼 backend 블록에 변수를 쓰자 init 이 실패했다. 올바른 대안은?",
  "c": [
   "locals 로 바꾼다",
   "provider 블록으로 옮긴다",
   "terraform apply -var 로 전달",
   "backend 블록을 비우고 terraform init -backend-config=\"bucket=...\" 로 부분 구성"
  ],
  "a": 3,
  "e": "backend 블록에는 변수·locals 사용 불가 → -backend-config 부분 구성(파일 또는 k=v)."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 1,
  "q": "terraform validate 가 검사하는 것은?",
  "c": [
   "클라우드 리소스의 실제 존재 여부",
   "구성의 문법과 내부 일관성",
   "코드 서식(들여쓰기)",
   "state 잠금 상태"
  ],
  "a": 1,
  "e": "validate = 문법·타입·참조 일관성. 원격 API 호출 없음, 서식은 fmt."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 2,
  "q": "Which statement about terraform validate is true?",
  "c": [
   "It requires valid cloud credentials",
   "It refreshes the state file",
   "It requires an initialized working directory but does not access remote services",
   "It reformats configuration files"
  ],
  "a": 2,
  "e": "validate needs provider schemas (init) but makes no remote API calls and doesn't modify files."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 2,
  "q": "다음 중 terraform validate 로 탐지할 수 없는 오류는?",
  "c": [
   "선언되지 않은 변수 참조",
   "존재하지 않는 AMI ID 지정",
   "잘못된 인수 이름",
   "문자열 자리에 리스트 전달"
  ],
  "a": 1,
  "e": "실제 클라우드의 값 유효성(AMI 존재)은 API 호출이 필요 → plan/apply 단계에서 발견."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 3,
  "q": "init 하지 않은 디렉터리에서 terraform validate 를 실행하면?",
  "c": [
   "정상적으로 문법만 검사",
   "자동으로 init 을 실행",
   "provider·모듈이 설치되지 않아 init 필요 오류",
   "state 를 새로 만든다"
  ],
  "a": 2,
  "e": "validate 는 provider 스키마가 필요하므로 init 선행(-backend=false 가능)."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 1,
  "q": "plan 출력에서 `~` 기호의 의미는?",
  "c": [
   "리소스 생성",
   "리소스 삭제",
   "data 소스 읽기",
   "리소스 in-place 변경"
  ],
  "a": 3,
  "e": "+ 생성, - 삭제, ~ 변경, <= data 읽기, -/+ 교체."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "plan 에 `-/+ resource \"aws_instance\" \"web\"` 와 `# forces replacement` 가 보인다. 의미는?",
  "c": [
   "in-place 로 태그만 수정",
   "변경 불가 인수가 바뀌어 삭제 후 재생성",
   "새 리소스 추가 후 기존 유지",
   "state 에서만 제거"
  ],
  "a": 1,
  "e": "-/+ = destroy then create. forces replacement 인수(예 AMI) 변경 때문."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "What does `<=` indicate in a plan output?",
  "c": [
   "A data source will be read",
   "A resource will be destroyed",
   "A resource will be imported",
   "A variable is sensitive"
  ],
  "a": 0,
  "e": "<= means a data source read (deferred to apply time when its arguments are unknown)."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "terraform plan 실행이 인프라와 state 에 미치는 영향은?",
  "c": [
   "인프라를 변경하고 state 갱신",
   "인프라는 그대로, state 를 실제 값으로 영구 갱신",
   "인프라·state 모두 변경하지 않음",
   "state 만 삭제"
  ],
  "a": 2,
  "e": "plan 은 refresh 결과를 메모리에서만 사용 — 인프라·state 무변경."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "콘솔에서 변경된 실제 상태를 리소스 변경 없이 state 에만 반영하는 권장 방법은?",
  "c": [
   "terraform refresh",
   "terraform apply -refresh-only",
   "terraform plan -refresh=false",
   "terraform state push"
  ],
  "a": 1,
  "e": "refresh 는 deprecated → apply -refresh-only(계획 검토 후 state 반영)."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "terraform plan -refresh=false 의 효과는?",
  "c": [
   "삭제 계획 생성",
   "state 만 갱신",
   "plan 파일 저장",
   "실제 인프라 조회(refresh)를 생략해 빠르지만 드리프트를 탐지하지 못함"
  ],
  "a": 3,
  "e": "-refresh=false 는 refresh 생략 옵션. -refresh-only 모드와 다르다."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 3,
  "q": "plan 요약이 `Plan: 1 to add, 0 to change, 1 to destroy.` 이고 해당 리소스에 `+/-` 가 표시됐다. 옳은 해석은?",
  "c": [
   "두 개의 서로 다른 리소스가 추가·삭제됨",
   "create_before_destroy 로 새 객체를 먼저 만든 뒤 기존 객체 삭제",
   "기존 리소스를 먼저 삭제한 뒤 생성",
   "data 소스를 두 번 읽음"
  ],
  "a": 1,
  "e": "+/- = 교체 시 생성 먼저(create_before_destroy). 교체는 add 1 + destroy 1 로 집계된다."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 3,
  "q": "In CI you want terraform plan to exit with code 2 when changes are present. Which flag?",
  "c": [
   "-detailed-exitcode",
   "-out",
   "-compact-warnings",
   "-json"
  ],
  "a": 0,
  "e": "-detailed-exitcode: 0 = no changes, 1 = error, 2 = changes present."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 1,
  "q": "terraform apply 를 옵션 없이 실행했을 때 기본 동작은?",
  "c": [
   "계획 없이 즉시 적용",
   "계획을 보여 주고 yes 승인 후 적용",
   "state 만 갱신",
   "plan 파일만 저장"
  ],
  "a": 1,
  "e": "apply 는 새 계획을 만들어 표시하고 yes 입력 시 적용."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 1,
  "q": "Which flag skips the interactive approval of terraform apply?",
  "c": [
   "-force",
   "-yes",
   "-no-confirm",
   "-auto-approve"
  ],
  "a": 3,
  "e": "-auto-approve skips the prompt. Use carefully in automation."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 2,
  "q": "변경 사항이 없는 aws_instance.web 를 강제로 재생성하는 권장 명령은?",
  "c": [
   "terraform taint aws_instance.web",
   "terraform apply -replace=aws_instance.web",
   "terraform state rm aws_instance.web",
   "terraform destroy 후 apply"
  ],
  "a": 1,
  "e": "-replace 가 taint(deprecated) 대체. state rm 은 추적만 해제, destroy 는 전체 삭제."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 2,
  "q": "apply 도중 10개 중 3번째 리소스에서 API 오류가 발생했다. 결과로 옳은 것은?",
  "c": [
   "모든 변경이 자동 롤백",
   "성공한 리소스는 state 에 기록되고 실패분은 다음 apply 에서 다시 시도",
   "state 파일이 삭제됨",
   "실패한 리소스는 구성 파일에서 자동 제거됨"
  ],
  "a": 1,
  "e": "Terraform 은 트랜잭션 롤백이 없다. 성공분은 state 에 남고 오류 수정 후 재 apply."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 2,
  "q": "Which is true when applying a saved plan file (terraform apply tfplan)?",
  "c": [
   "Terraform asks for approval again",
   "Terraform re-plans and may apply different changes",
   "Variables can be overridden with -var",
   "Terraform applies the saved plan without prompting for approval"
  ],
  "a": 3,
  "e": "A saved plan is considered already reviewed; it's applied without prompting. Variables are baked into the plan."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 3,
  "q": "-target 옵션에 대한 설명으로 옳은 것은?",
  "c": [
   "일상적인 배포에서 권장되는 방법",
   "지정 리소스와 그 의존 대상만 계획·적용하며 예외 상황에 한해 사용",
   "지정 리소스를 state 에서 제거",
   "지정 리소스의 의존성은 무시"
  ],
  "a": 1,
  "e": "-target 은 범위를 제한하는 예외 도구. 상시 사용 시 구성과 state 불일치 위험."
 },
 {
  "s": "s3",
  "t": "destroy",
  "d": 1,
  "q": "terraform destroy 와 동일한 명령은?",
  "c": [
   "terraform apply -destroy",
   "terraform state rm -all",
   "terraform plan -destroy",
   "terraform delete"
  ],
  "a": 0,
  "e": "destroy = apply -destroy 별칭. plan -destroy 는 미리보기만."
 },
 {
  "s": "s3",
  "t": "destroy",
  "d": 2,
  "q": "terraform destroy 가 삭제하는 대상은?",
  "c": [
   "클라우드 계정의 모든 리소스",
   "현재 작업 디렉터리 state 가 추적하는 리소스",
   "Terraform 외부에서 만든 리소스 포함 전체",
   "구성 파일에 선언되지 않은 리소스만"
  ],
  "a": 1,
  "e": "state 가 관리하는 리소스만 삭제한다."
 },
 {
  "s": "s3",
  "t": "fmt",
  "d": 1,
  "q": "Which command rewrites Terraform configuration files to the canonical style?",
  "c": [
   "terraform validate",
   "terraform lint",
   "terraform fmt",
   "terraform style"
  ],
  "a": 2,
  "e": "terraform fmt formats .tf files; there is no built-in lint/style command."
 },
 {
  "s": "s3",
  "t": "fmt",
  "d": 2,
  "q": "CI 에서 파일을 수정하지 않고 서식 준수 여부만 확인(불일치 시 실패)하려면?",
  "c": [
   "terraform fmt -check",
   "terraform fmt -write=true",
   "terraform validate -fmt",
   "terraform fmt -diff 만"
  ],
  "a": 0,
  "e": "-check 는 수정 없이 검사, 서식 불일치 시 0 이 아닌 종료 코드. -recursive 로 하위 포함."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 1,
  "q": "data 블록(data source)의 역할로 옳은 것은?",
  "c": [
   "기존·외부 객체의 정보를 읽기 전용으로 조회",
   "새 인프라 객체를 생성하고 state 에 기록",
   "state 파일에서 리소스를 제거",
   "재사용 가능한 모듈을 정의"
  ],
  "a": 0,
  "e": "data 는 생성·삭제 없이 ★조회만★ 수행. 생성은 resource, state 제거는 state rm, 모듈 정의는 module 디렉터리."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 1,
  "q": "Which block type lets Terraform read information about an existing object that the current configuration does not manage?",
  "c": [
   "resource",
   "locals",
   "provider",
   "data"
  ],
  "a": 3,
  "e": "A ★data★ block queries existing objects read-only. resource creates/manages objects; locals holds computed values; provider configures the plugin."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "data \"aws_ami\" \"ubuntu\" {} 의 id 속성을 참조하는 올바른 식은?",
  "c": [
   "aws_ami.ubuntu.id",
   "data.ubuntu.aws_ami.id",
   "data.aws_ami.ubuntu.id",
   "ami.data.ubuntu.id"
  ],
  "a": 2,
  "e": "data 소스 참조는 ★data.TYPE.NAME.ATTR★. 접두어 없는 aws_ami.ubuntu 는 managed resource 로 해석되어 선언되지 않은 리소스 오류."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "resource \"aws_instance\" \"web\" {} 에서 두 라벨이 의미하는 것은?",
  "c": [
   "provider 이름과 리전",
   "리소스 유형과 모듈 내 로컬 이름",
   "클라우드 리소스 이름과 Name 태그",
   "모듈 이름과 리소스 ID"
  ],
  "a": 1,
  "e": "첫 라벨 aws_instance = ★리소스 유형★, 둘째 web = 같은 모듈에서만 의미 있는 ★로컬 이름★. 클라우드 측 실제 이름·태그와 무관."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "plan 출력에서 `<= data.aws_ami.latest` 처럼 `<=` 기호가 붙은 줄의 의미는?",
  "c": [
   "리소스를 삭제 후 재생성",
   "data 소스를 읽을 예정임",
   "리소스를 제자리 변경",
   "리소스를 state 에서 제거"
  ],
  "a": 1,
  "e": "`<=` = ★data 리소스 읽기★. -/+ 는 대체, ~ 는 in-place 변경, state 제거는 plan 기호가 아니라 removed/state rm."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 3,
  "q": "data 소스에 depends_on 을 지정했을 때 나타날 수 있는 현상은?",
  "c": [
   "읽기가 apply 시점으로 지연되어 의존 값이 (known after apply) 로 표시",
   "data 소스가 리소스로 변환되어 생성",
   "depends_on 이 무시되고 경고만 출력",
   "plan 단계에서 대상 리소스가 먼저 생성"
  ],
  "a": 0,
  "e": "data 의 depends_on 대상에 변경 예정이 있으면 Terraform 은 ★읽기를 apply 로 미룸★. 그 결과 하위 값이 미정이 되어 plan 이 불명확해지므로 꼭 필요할 때만 사용."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "How does Terraform determine which provider manages `resource \"aws_instance\" \"web\"` when no `provider` meta-argument is set?",
  "c": [
   "It uses the first provider block in the root module",
   "It prompts the user during terraform init",
   "It uses the provider with the highest version",
   "It uses the resource type prefix (aws) as the provider local name"
  ],
  "a": 3,
  "e": "By default Terraform takes the ★prefix of the resource type★ (aws_ → aws) and uses the default (un-aliased) configuration of that provider. A different configuration requires provider = aws.alias."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 1,
  "q": "다음 중 resource 블록의 메타 인수(meta-argument)가 아닌 것은?",
  "c": [
   "count",
   "provider",
   "ami",
   "lifecycle"
  ],
  "a": 2,
  "e": "메타 인수 = count·for_each·depends_on·provider·lifecycle. ★ami 는 aws_instance 의 provider 스키마 인수★."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "resource \"aws_instance\" \"web\" { count = 3 } 에서 첫 번째 인스턴스의 id 참조는?",
  "c": [
   "aws_instance.web[1].id",
   "aws_instance.web.0.id",
   "aws_instance.web[0].id",
   "aws_instance.web.id[0]"
  ],
  "a": 2,
  "e": "count 인덱스는 ★0부터★, 인스턴스 선택은 리소스 주소 뒤 대괄호 [0]."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "for_each = toset([\"app\", \"db\"]) 로 만든 aws_instance.web 중 \"app\" 인스턴스의 id 참조는?",
  "c": [
   "aws_instance.web[0].id",
   "aws_instance.web[\"app\"].id",
   "aws_instance.web.app.id",
   "each.value[\"app\"].id"
  ],
  "a": 1,
  "e": "for_each 인스턴스는 ★키 문자열 인덱스★ [\"app\"]. 숫자 인덱스는 count 전용, each 는 블록 내부에서만 사용."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "부모 모듈에서 module \"vpc\" 의 출력값 vpc_id 를 참조하는 식은?",
  "c": [
   "module.vpc.vpc_id",
   "module.vpc.output.vpc_id",
   "var.vpc_id",
   "output.vpc.vpc_id"
  ],
  "a": 0,
  "e": "자식 모듈 출력 참조는 ★module.NAME.OUTPUT★. 자식 내부 리소스는 output 으로 노출되어야만 접근 가능."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "locals { common_tags = { env = \"dev\" } } 에 정의한 값을 참조하는 식은?",
  "c": [
   "locals.common_tags",
   "var.common_tags",
   "local[\"common_tags\"]",
   "local.common_tags"
  ],
  "a": 3,
  "e": "정의 블록은 locals(복수), 참조는 ★local.NAME(단수)★."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "Which named value returns the filesystem path of the module in which the expression is written?",
  "c": [
   "path.root",
   "path.cwd",
   "terraform.workspace",
   "path.module"
  ],
  "a": 3,
  "e": "★path.module★ = the module containing the expression. path.root = root module, path.cwd = working directory, terraform.workspace = current workspace name."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "plan 에서 aws_instance.web.id 가 (known after apply) 로 표시되는 이유는?",
  "c": [
   "id 인수가 구성에서 누락되었기 때문",
   "state 가 잠겨 있기 때문",
   "id 는 리소스 생성 후 provider 가 반환하는 속성이기 때문",
   "provider 버전이 고정되지 않았기 때문"
  ],
  "a": 2,
  "e": "id·arn 같은 ★계산 속성(computed attribute)★ 은 apply 후에야 결정. 구성 누락·잠금·버전과 무관."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 3,
  "q": "In `subnet_id = aws_subnet.main.id` inside an aws_instance block, what is the effect besides passing the value?",
  "c": [
   "Terraform imports the subnet into state",
   "Terraform creates an implicit dependency so the subnet is created before the instance",
   "Terraform marks the subnet as sensitive",
   "Terraform requires depends_on to order the resources"
  ],
  "a": 1,
  "e": "Referencing another resource's attribute creates an ★implicit dependency★ in the graph; depends_on is unnecessary here."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "현재 선택된 CLI workspace 이름을 구성 안에서 얻는 식은?",
  "c": [
   "terraform.workspace",
   "var.workspace",
   "path.workspace",
   "local.workspace"
  ],
  "a": 0,
  "e": "★terraform.workspace★ 는 내장 named value. 예 name = \"web-${terraform.workspace}\"."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 1,
  "q": "variable \"region\" {} 의 값을 참조하는 식은?",
  "c": [
   "var.region",
   "variable.region",
   "input.region",
   "local.region"
  ],
  "a": 0,
  "e": "입력 변수 참조 = ★var.NAME★."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "같은 변수에 다음 방식이 모두 지정되었을 때 최종 적용되는 것은?",
  "c": [
   "variable 블록의 default",
   "환경변수 TF_VAR_x",
   "terraform.tfvars 파일",
   "-var 명령줄 옵션"
  ],
  "a": 3,
  "e": "우선순위 ★default < TF_VAR < terraform.tfvars < *.auto.tfvars < -var/-var-file★. 명령줄이 최상위."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 3,
  "q": "default = \"us-east-1\", TF_VAR_region=\"eu-west-1\", terraform.tfvars 에 region=\"ap-northeast-1\", prod.auto.tfvars 에 region=\"ap-northeast-2\" 일 때 plan(옵션 없음)의 var.region 은?",
  "c": [
   "\"us-east-1\"",
   "\"eu-west-1\"",
   "\"ap-northeast-2\"",
   "\"ap-northeast-1\""
  ],
  "a": 2,
  "e": "*.auto.tfvars 가 terraform.tfvars·환경변수·default 보다 높음 → ★ap-northeast-2★."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 1,
  "q": "변수 db_user 를 환경변수로 전달하는 올바른 이름은?",
  "c": [
   "TF_db_user",
   "TF_VAR_db_user",
   "TERRAFORM_VAR_db_user",
   "VAR_db_user"
  ],
  "a": 1,
  "e": "환경변수 접두어 = ★TF_VAR_★ + 변수 이름(대소문자 구분)."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "A root module output references a variable declared with sensitive = true, but the output itself is not marked sensitive. What happens?",
  "c": [
   "The value is printed in plain text with a warning",
   "Terraform returns an error asking you to set sensitive = true on the output",
   "The output is silently omitted",
   "The variable's sensitive flag is removed automatically"
  ],
  "a": 1,
  "e": "Terraform ★refuses to plan★ until the output is declared sensitive = true, so sensitive data is not exposed unintentionally."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 1,
  "q": "output 블록에서 반드시 지정해야 하는 인수는?",
  "c": [
   "value",
   "description",
   "sensitive",
   "type"
  ],
  "a": 0,
  "e": "output 의 필수 인수는 ★value★ 하나. type 은 output 인수가 아님."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "default 가 없는 변수에 아무 값도 주지 않고 대화형 터미널에서 plan 을 실행하면?",
  "c": [
   "빈 문자열로 자동 설정",
   "null 로 설정되어 계속 진행",
   "변수 블록이 무시됨",
   "값 입력을 요청하는 프롬프트가 표시"
  ],
  "a": 3,
  "e": "필수 변수는 ★대화형 입력★ 을 요청. -input=false 이거나 자동화 환경이면 오류."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "nullable = false 인 변수에 모듈 호출자가 null 을 넘기면?",
  "c": [
   "null 이 그대로 저장",
   "빈 문자열로 변환",
   "default 가 있으면 default 값이 사용되고 변수가 null 이 되지 않음",
   "변수가 sensitive 로 표시"
  ],
  "a": 2,
  "e": "nullable = false 는 ★변수 값이 null 이 되는 것을 금지★. default 가 있으면 대체, 없으면 오류."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 3,
  "q": "A shell script needs the value of output db_endpoint without surrounding quotes. Which command fits?",
  "c": [
   "terraform output db_endpoint",
   "terraform show -raw db_endpoint",
   "terraform output -raw db_endpoint",
   "terraform state show db_endpoint"
  ],
  "a": 2,
  "e": "★-raw★ prints a string output with no quotes or newline formatting, suitable for scripts. Plain terraform output NAME prints it quoted."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 1,
  "q": "Which type constraint represents an ordered sequence of values of the same type?",
  "c": [
   "set",
   "list",
   "map",
   "object"
  ],
  "a": 1,
  "e": "★list★ keeps order and allows index access. set has no order, map uses string keys, object has named attributes."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 1,
  "q": "원소 순서가 없고 중복이 제거되는 컬렉션 타입은?",
  "c": [
   "set",
   "list",
   "tuple",
   "map"
  ],
  "a": 0,
  "e": "★set★ 은 순서·중복이 없고 인덱스 접근 불가. for_each 입력에 자주 사용."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "map 타입과 object 타입의 차이로 옳은 것은?",
  "c": [
   "map 은 키가 숫자, object 는 문자열",
   "map 은 순서가 있고 object 는 없음",
   "object 는 for_each 에 사용할 수 없고 map 은 함수 인자로 쓸 수 없음",
   "map 은 모든 값이 같은 타입, object 는 속성마다 다른 타입 가능"
  ],
  "a": 3,
  "e": "map(T) = ★가변 키·단일 값 타입★, object({...}) = ★고정 속성 이름·속성별 타입★."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "tuple([string, number, bool]) 타입에 맞는 값은?",
  "c": [
   "[\"web\", \"2\", \"true\", \"x\"]",
   "{ name = \"web\", n = 2, ok = true }",
   "[2, \"web\", true]",
   "[\"web\", 2, true]"
  ],
  "a": 3,
  "e": "tuple 은 ★위치별 타입·길이 고정★. 길이 4 는 불일치, object 리터럴은 타입 다름, [2, \"web\", true] 는 \"web\" 을 number 로 변환할 수 없어 오류."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 3,
  "q": "type = object({ name = string, size = optional(string, \"t3.micro\") }) 변수에 { name = \"web\" } 만 넘기면 size 값은?",
  "c": [
   "null",
   "\"\"",
   "\"t3.micro\"",
   "타입 오류 발생"
  ],
  "a": 2,
  "e": "optional(TYPE, DEFAULT) 는 ★생략 시 기본값 적용★(1.3+). 기본값을 주지 않았다면 null."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "Which type constraint accepts { name = \"web\", port = 80 } with fixed attribute names and differing value types?",
  "c": [
   "map(string)",
   "object({ name = string, port = number })",
   "list(any)",
   "set(object)"
  ],
  "a": 1,
  "e": "Fixed attribute names with per-attribute types = ★object★. map(string) would convert 80 to \"80\" and loses the number type; list/set don't fit a key-value literal."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "type = map(string) 변수에 { a = 1, b = true } 를 넘기면?",
  "c": [
   "{ a = \"1\", b = \"true\" } 로 자동 변환",
   "타입 오류로 실패",
   "a 만 남고 b 는 제거",
   "map(any) 로 타입이 변경"
  ],
  "a": 0,
  "e": "기본 타입은 ★string 으로 자동 변환★ 가능하므로 1 → \"1\", true → \"true\"."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 1,
  "q": "Which of the following is NOT a primitive type in Terraform?",
  "c": [
   "list",
   "string",
   "number",
   "bool"
  ],
  "a": 0,
  "e": "Primitive types are ★string, number, bool★. list is a collection type."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "cidrsubnet(\"10.0.0.0/16\", 8, 2) 의 결과는?",
  "c": [
   "\"10.0.0.2/24\"",
   "\"10.2.0.0/24\"",
   "\"10.0.8.0/18\"",
   "\"10.0.2.0/24\""
  ],
  "a": 3,
  "e": "/16 에 8비트 추가 → ★/24★, netnum 2 → 세 번째 옥텟 2 → 10.0.2.0/24."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 3,
  "q": "cidrsubnet(\"10.1.0.0/16\", 4, 3) 의 결과는?",
  "c": [
   "\"10.1.3.0/20\"",
   "\"10.1.12.0/20\"",
   "\"10.1.48.0/20\"",
   "\"10.1.0.48/20\""
  ],
  "a": 2,
  "e": "/16+4 = /20, 각 블록 크기 = 세 번째 옥텟 16 단위 → 3 × 16 = ★48★ → 10.1.48.0/20."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "What does lookup({ a = \"x\", b = \"y\" }, \"c\", \"z\") return?",
  "c": [
   "null",
   "\"z\"",
   "an error",
   "\"\""
  ],
  "a": 1,
  "e": "Key \"c\" does not exist, so lookup returns the ★default argument \"z\"★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "merge({ a = 1, b = 2 }, { b = 3, c = 4 }) 의 결과는?",
  "c": [
   "{ a = 1, b = 2, c = 4 }",
   "{ a = 1, b = 3, c = 4 }",
   "{ b = 3, c = 4 }",
   "중복 키로 오류"
  ],
  "a": 1,
  "e": "merge 는 키 충돌 시 ★뒤 인수 값이 우선★ → b = 3."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "zipmap([\"a\", \"b\"], [1, 2]) 의 결과는?",
  "c": [
   "{ a = 1, b = 2 }",
   "[[\"a\", 1], [\"b\", 2]]",
   "{ 1 = \"a\", 2 = \"b\" }",
   "[\"a\", \"b\", 1, 2]"
  ],
  "a": 0,
  "e": "zipmap(keys, values) = ★첫 리스트가 키, 둘째가 값★ 인 map."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "flatten([[\"a\", \"b\"], [], [\"c\"]]) 의 결과는?",
  "c": [
   "[\"a\", \"b\", [], \"c\"]",
   "[[\"a\", \"b\", \"c\"]]",
   "[\"a\", \"b\", null, \"c\"]",
   "[\"a\", \"b\", \"c\"]"
  ],
  "a": 3,
  "e": "flatten 은 중첩 리스트를 ★한 단계 리스트로 펼치며 빈 리스트는 사라짐★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "length(toset([\"b\", \"a\", \"b\"])) 의 결과는?",
  "c": [
   "3",
   "1",
   "2",
   "오류"
  ],
  "a": 2,
  "e": "toset 이 중복 \"b\" 를 제거 → {\"a\", \"b\"} → ★2★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "What does element([\"a\", \"b\", \"c\"], 4) return?",
  "c": [
   "\"c\"",
   "an out-of-range error",
   "\"b\"",
   "null"
  ],
  "a": 2,
  "e": "element ★wraps around★ using index modulo length: 4 % 3 = 1 → \"b\"."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 1,
  "q": "What is the result of join(\"-\", [\"a\", \"b\", \"c\"])?",
  "c": [
   "[\"a-b-c\"]",
   "\"a-b-c\"",
   "\"abc-\"",
   "\"a b c\""
  ],
  "a": 1,
  "e": "join(separator, list) concatenates the elements with the ★separator★ into a single string."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 1,
  "q": "split(\",\", \"a,b,c\") 의 결과 타입과 값은?",
  "c": [
   "list [\"a\", \"b\", \"c\"]",
   "string \"abc\"",
   "set {\"a\", \"b\", \"c\"}",
   "map { 0 = \"a\", 1 = \"b\", 2 = \"c\" }"
  ],
  "a": 0,
  "e": "split(separator, string) 은 ★문자열 리스트★ 반환. join 의 역함수."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "coalesce(\"\", \"b\", \"c\") 의 결과는?",
  "c": [
   "\"\"",
   "\"c\"",
   "[\"b\", \"c\"]",
   "\"b\""
  ],
  "a": 3,
  "e": "coalesce 는 ★null 과 빈 문자열을 건너뛰고★ 첫 값을 반환."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "try 와 can 함수의 차이로 옳은 것은?",
  "c": [
   "try 는 bool, can 은 값을 반환",
   "둘 다 문법 오류까지 잡아 기본값을 반환",
   "can 은 provider 호출 실패를 재시도",
   "try 는 오류 없는 첫 식의 값을, can 은 식 평가 성공 여부(bool)를 반환"
  ],
  "a": 3,
  "e": "can(expr) → ★true/false★ (validation 조건에 적합), try(a, b) → ★첫 성공 값★. 정적 오류는 둘 다 못 잡음."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "Given var.names = [\"a\", \"b\"], what does [for s in var.names : upper(s)] produce?",
  "c": [
   "{ a = \"A\", b = \"B\" }",
   "\"AB\"",
   "[\"A\", \"B\"]",
   "[\"a\", \"b\", \"A\", \"B\"]"
  ],
  "a": 2,
  "e": "A for expression in ★square brackets★ produces a list of transformed elements."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 3,
  "q": "{ for k, v in { a = 1, b = 2 } : k => v * 2 if v > 1 } 의 결과는?",
  "c": [
   "{ a = 2, b = 4 }",
   "{ b = 4 }",
   "[4]",
   "{ a = 1, b = 4 }"
  ],
  "a": 1,
  "e": "if 필터로 v > 1 인 b 만 남고 값은 2 × 2 = 4 → ★{ b = 4 }★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "count = 3 인 aws_instance.web 의 모든 id 를 리스트로 얻는 가장 간결한 식은?",
  "c": [
   "aws_instance.web[*].id",
   "aws_instance.web.*",
   "aws_instance.web.id",
   "values(aws_instance.web.id)"
  ],
  "a": 0,
  "e": "splat ★[*]★ = [for o in aws_instance.web : o.id] 와 동일."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 3,
  "q": "Inside a dynamic \"ingress\" block that has no iterator argument, how do you reference the current element's port attribute?",
  "c": [
   "ingress.value.port",
   "each.value.port",
   "dynamic.value.port",
   "count.value.port"
  ],
  "a": 0,
  "e": "The temporary iterator variable is named after the ★block label★ (ingress) and exposes .key and .value. Set iterator = rule to rename it."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 1,
  "q": "외부 파일 user_data.tftpl 에 변수를 주입해 문자열로 렌더링하는 함수는?",
  "c": [
   "file",
   "jsondecode",
   "fileset",
   "templatefile"
  ],
  "a": 3,
  "e": "★templatefile(path, vars)★ 가 템플릿 렌더링. file 은 원문 그대로 읽기, fileset 은 파일 목록, jsondecode 는 JSON 파싱."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "jsonencode({ b = 1, a = \"x\" }) 의 결과 문자열은?",
  "c": [
   "{\"b\":1,\"a\":\"x\"}",
   "{ a = \"x\", b = 1 }",
   "{\"a\":\"x\",\"b\":1}",
   "[{\"a\":\"x\"},{\"b\":1}]"
  ],
  "a": 2,
  "e": "jsonencode 는 map/object 키를 ★사전순 정렬★ 하고 공백 없는 JSON 을 생성."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 1,
  "q": "Terraform 에서 암시적 의존성(implicit dependency)이 생기는 방식은?",
  "c": [
   "depends_on 을 지정할 때만 생성",
   "다른 리소스의 속성을 참조할 때 자동 생성",
   "같은 파일에 선언할 때 생성",
   "리소스 이름이 사전순일 때 생성"
  ],
  "a": 1,
  "e": "속성 참조가 그래프 간선이 되어 ★순서 자동 결정★. 파일 위치·이름 순서는 무관."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "depends_on 을 사용해야 하는 상황으로 가장 적절한 것은?",
  "c": [
   "subnet_id 로 서브넷을 이미 참조할 때",
   "EC2 의 앱이 IAM 정책 적용을 필요로 하지만 구성상 직접 참조가 없을 때",
   "리소스 생성 속도를 높이고 싶을 때",
   "count 로 여러 인스턴스를 만들 때"
  ],
  "a": 1,
  "e": "depends_on 은 ★참조로 드러나지 않는 숨은 의존성★ 전용. 이미 참조가 있으면 불필요, 병렬성은 오히려 감소."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 1,
  "q": "When a change forces replacement, which lifecycle setting makes Terraform create the new object before destroying the old one?",
  "c": [
   "create_before_destroy = true",
   "prevent_destroy = true",
   "ignore_changes = all",
   "replace_triggered_by = [self]"
  ],
  "a": 0,
  "e": "★create_before_destroy★ reverses the default destroy-then-create order (plan shows +/-)."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "lifecycle { prevent_destroy = true } 인 리소스를 삭제하는 plan 이 만들어지면?",
  "c": [
   "경고만 출력하고 삭제 진행",
   "리소스를 state 에서만 제거",
   "자동으로 create_before_destroy 적용",
   "Terraform 이 오류를 내고 계획을 거부"
  ],
  "a": 3,
  "e": "prevent_destroy 는 ★삭제를 포함한 plan 을 오류로 거부★. -replace 로 인한 교체도 거부됨."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "An external tagging tool keeps changing an instance's tags, and you want Terraform to stop reverting them. What should you configure?",
  "c": [
   "lifecycle { prevent_destroy = true }",
   "depends_on = [aws_instance.web]",
   "lifecycle { ignore_changes = [tags] }",
   "lifecycle { create_before_destroy = true }"
  ],
  "a": 2,
  "e": "★ignore_changes★ tells Terraform to ignore differences in the listed attributes after creation."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 3,
  "q": "launch template 이 변경될 때마다 이를 직접 참조하지 않는 aws_instance 를 강제로 교체하고 싶다. 알맞은 설정은?",
  "c": [
   "depends_on = [aws_launch_template.app]",
   "lifecycle { ignore_changes = [ami] }",
   "lifecycle { replace_triggered_by = [aws_launch_template.app] }",
   "count = length(aws_launch_template.app)"
  ],
  "a": 2,
  "e": "★replace_triggered_by★(1.2+) 는 참조한 관리 리소스·속성이 변경되면 해당 리소스를 교체. depends_on 은 순서만 정함."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 3,
  "q": "prevent_destroy = true 가 설정된 resource 블록을 구성 파일에서 통째로 지우고 apply 하면?",
  "c": [
   "prevent_destroy 가 state 에 남아 삭제가 거부",
   "블록과 함께 보호 설정도 사라져 리소스 삭제가 계획됨",
   "리소스가 자동으로 state 에서만 제거",
   "Terraform 이 블록 복원을 요구하는 경고만 출력"
  ],
  "a": 1,
  "e": "lifecycle 설정은 ★구성에 있을 때만★ 유효. 실제 객체를 남기려면 removed { lifecycle { destroy = false } } 사용."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "Why is for_each usually preferred over count for a list of named users?",
  "c": [
   "Removing an element from the middle with count shifts indexes and causes unrelated instances to be replaced",
   "for_each creates resources faster in parallel",
   "count cannot be used with variables",
   "for_each stores no data in state"
  ],
  "a": 0,
  "e": "count addresses by ★position★, so deleting index 1 renumbers later items. for_each addresses by stable ★keys★."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 1,
  "q": "한 resource 블록에 count 와 for_each 를 동시에 지정하면?",
  "c": [
   "count 가 우선 적용",
   "for_each 가 우선 적용",
   "두 값을 곱한 개수만큼 생성",
   "구성 오류로 사용할 수 없음"
  ],
  "a": 3,
  "e": "count 와 for_each 는 ★상호 배타★ — 함께 쓰면 오류."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 1,
  "q": "variable 블록의 validation 에 반드시 들어가는 두 인수는?",
  "c": [
   "assert 와 message",
   "check 와 warning",
   "rule 과 description",
   "condition 과 error_message"
  ],
  "a": 3,
  "e": "validation { ★condition★ = ...  ★error_message★ = \"...\" }."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "check 블록의 assert 조건이 실패하면?",
  "c": [
   "apply 가 즉시 중단",
   "해당 리소스가 자동 교체",
   "경고만 출력되고 plan/apply 는 계속 진행",
   "state 가 이전 버전으로 롤백"
  ],
  "a": 2,
  "e": "check(1.5+) 는 ★비차단 경고★. 차단이 필요하면 precondition/postcondition 사용."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "Inside a postcondition of a resource, how do you refer to the resource's own attributes?",
  "c": [
   "this",
   "self",
   "each.value",
   "resource"
  ],
  "a": 1,
  "e": "postcondition can use ★self★ to reference the object being validated (e.g., self.public_dns)."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "precondition 을 선언할 수 있는 위치로 옳은 것은?",
  "c": [
   "resource·data 의 lifecycle 블록 또는 output 블록",
   "variable 블록",
   "provider 블록",
   "terraform 블록"
  ],
  "a": 0,
  "e": "precondition 은 ★lifecycle(resource/data) 와 output★ 에 선언. 변수 검증은 validation."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 3,
  "q": "You want Terraform to stop before creating an instance if the selected AMI is not x86_64. What is the most appropriate approach?",
  "c": [
   "Add a precondition in the aws_instance lifecycle block checking data.aws_ami.selected.architecture",
   "Add a check block that asserts the architecture",
   "Add depends_on to the data source",
   "Add a postcondition on the provider block"
  ],
  "a": 0,
  "e": "A ★precondition★ evaluated before the resource change fails the run with an error. A check block only warns; provider blocks do not support conditions."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "validation 의 condition 에 regex 대신 can(regex(\"^ami-\", var.ami)) 를 쓰는 이유는?",
  "c": [
   "정규식 성능을 높이려고",
   "값을 sensitive 로 표시하려고",
   "plan 결과를 캐싱하려고",
   "일치하지 않을 때 regex 오류 대신 false 를 반환하게 하려고"
  ],
  "a": 3,
  "e": "regex 는 불일치 시 ★오류★. can() 으로 감싸면 ★bool★ 이 되어 condition 에 적합."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 3,
  "q": "Terraform 1.12 기준 variable validation 의 condition 에 대한 설명으로 옳은 것은?",
  "c": [
   "자기 자신 변수만 참조 가능",
   "함수 호출이 금지",
   "같은 모듈의 다른 변수나 객체를 참조할 수 있음",
   "check 블록 안에서만 선언 가능"
  ],
  "a": 2,
  "e": "Terraform ★1.9 부터★ validation 이 다른 입력 변수·data·local 등을 참조 가능. 이전엔 자기 변수만."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "Which custom condition can contain its own scoped data source and reports failures as warnings after plan and apply?",
  "c": [
   "variable validation",
   "check block",
   "precondition",
   "postcondition"
  ],
  "a": 1,
  "e": "A ★check★ block (1.5+) may include one nested data block used only by its assertions, and failures are warnings."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 1,
  "q": "variable 에 sensitive = true 를 지정했을 때의 효과는?",
  "c": [
   "state 파일에서 값이 암호화",
   "plan·apply CLI 출력에서 값이 마스킹되지만 state 에는 평문 저장",
   "값이 state 와 plan 에 저장되지 않음",
   "변수 값을 Vault 에 자동 저장"
  ],
  "a": 1,
  "e": "sensitive 는 ★표시 마스킹만★. state 미저장은 ephemeral / write-only."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 2,
  "q": "What is a key characteristic of an ephemeral resource (Terraform 1.10+)?",
  "c": [
   "Its values are never persisted to the plan or state file",
   "It is destroyed automatically after 24 hours",
   "It can only be used in root module outputs",
   "It is encrypted in state with a KMS key"
  ],
  "a": 0,
  "e": "Ephemeral resources are opened each run and their data is ★not stored in plan or state★."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 2,
  "q": "write-only 인수(예 password_wo, Terraform 1.11+)에 대한 설명으로 옳은 것은?",
  "c": [
   "값이 state 에 저장되고 출력만 숨김",
   "모든 리소스 인수에 _wo 접미사를 붙이면 사용 가능",
   "값 변경이 매 plan 마다 자동 감지",
   "값이 provider 에 전달되지만 plan·state 에 저장되지 않음"
  ],
  "a": 3,
  "e": "write-only 인수는 ★저장되지 않으므로 변경 감지 불가★ → password_wo_version 같은 버전 인수로 갱신 트리거. provider 지원 인수만 가능."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 2,
  "q": "Secrets read through data \"vault_kv_secret_v2\" are...",
  "c": [
   "never stored anywhere by Terraform",
   "encrypted by Vault inside the state file",
   "written to the Terraform state file in plain text",
   "stored only in the .terraform directory"
  ],
  "a": 2,
  "e": "Data source results are ★persisted in state★, so state must be protected; ephemeral \"vault_kv_secret_v2\" avoids this."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 3,
  "q": "ephemeral 리소스의 값을 write-only 가 아닌 일반 리소스 인수(예 aws_db_instance 의 password)에 넣으면?",
  "c": [
   "자동으로 sensitive 처리되어 저장",
   "값이 비어 있는 채로 리소스 생성",
   "ephemeral 값 사용 불가 위치라 오류 발생",
   "경고 후 state 에 평문 저장"
  ],
  "a": 2,
  "e": "ephemeral 값은 ★ephemeral 컨텍스트에서만★ 허용 → 일반 인수에 넣으면 오류. write-only 인수(password_wo)를 사용."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 2,
  "q": "state 파일의 민감정보 노출 위험을 줄이는 가장 적절한 방법은?",
  "c": [
   ".tfstate 를 Git 에 커밋해 이력 관리",
   "암호화와 접근 통제를 지원하는 원격 backend 사용",
   "모든 변수에 description 작성",
   "terraform fmt 로 state 정리"
  ],
  "a": 1,
  "e": "state 에는 민감값이 남을 수 있으므로 ★암호화·접근 통제 원격 backend★(S3+KMS, HCP Terraform 등) 사용, VCS 커밋 금지."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 1,
  "q": "Which function removes the sensitive marking from a value?",
  "c": [
   "nonsensitive()",
   "sensitive()",
   "tostring()",
   "unmask()"
  ],
  "a": 0,
  "e": "★nonsensitive()★ removes the marking (use carefully); sensitive() adds it. unmask() does not exist."
 },
 {
  "s": "s5",
  "t": "모듈 개념",
  "d": 1,
  "q": "Terraform 에서 '모듈(module)'의 단위로 옳은 것은?",
  "c": [
   "한 디렉터리에 있는 .tf 파일들의 집합",
   "하나의 .tf 파일",
   "하나의 resource 블록",
   "하나의 provider 플러그인"
  ],
  "a": 0,
  "e": "모듈은 디렉터리 단위. 파일 하나·리소스 하나가 아니며 provider 는 플러그인이다."
 },
 {
  "s": "s5",
  "t": "모듈 개념",
  "d": 1,
  "q": "What is the root module in a Terraform configuration?",
  "c": [
   "The first module downloaded from the Terraform Registry",
   "Any module that has no input variables",
   "The configuration in the working directory where Terraform commands are run",
   "The module stored in .terraform/modules"
  ],
  "a": 2,
  "e": "Root module = 작업 디렉터리 구성. Registry·변수 유무와 무관, .terraform/modules 는 다운로드된 자식 모듈 위치."
 },
 {
  "s": "s5",
  "t": "모듈 개념",
  "d": 2,
  "q": "표준 모듈 구조(standard module structure)에서 권장되지 않는 것은?",
  "c": [
   "main.tf·variables.tf·outputs.tf 분리",
   "재사용 모듈 안에 provider 블록과 자격증명 하드코딩",
   "examples/ 디렉터리에 사용 예 제공",
   "README.md 에 입력·출력 문서화"
  ],
  "a": 1,
  "e": "재사용 모듈은 provider 구성을 호출자에게 맡기고 required_providers 만 선언. 나머지는 권장 구조."
 },
 {
  "s": "s5",
  "t": "모듈 개념",
  "d": 2,
  "q": "모듈 사용 이점으로 가장 거리가 먼 것은?",
  "c": [
   "반복 코드를 재사용해 일관성 확보",
   "조직 표준 구성을 캡슐화해 공유",
   "복잡한 리소스 묶음을 단순한 인터페이스로 노출",
   "모듈을 쓰면 state 파일이 모듈별로 자동 분리된다"
  ],
  "a": 3,
  "e": "child 모듈 리소스는 루트와 같은 state 에 module.NAME 주소로 저장된다. 상태 분리는 별도 구성·workspace 의 몫."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 1,
  "q": "로컬 경로 모듈 source 로 올바른 것은?",
  "c": [
   "source = \"modules/network\"",
   "source = \"local::modules/network\"",
   "source = \"file://modules/network\"",
   "source = \"./modules/network\""
  ],
  "a": 3,
  "e": "로컬 경로는 ./ 또는 ../ 로 시작해야 한다. 'modules/network' 는 Registry 주소로 해석된다."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 1,
  "q": "Which is the correct format for a public Terraform Registry module source?",
  "c": [
   "<PROVIDER>/<NAMESPACE>/<NAME>",
   "<NAMESPACE>/<NAME>/<PROVIDER>",
   "<NAMESPACE>/<TYPE>",
   "registry::<NAME>@<VERSION>"
  ],
  "a": 1,
  "e": "공개 Registry 모듈은 NAMESPACE/NAME/PROVIDER (예 hashicorp/consul/aws). NAMESPACE/TYPE 은 provider 소스 주소."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "Git 저장소의 v2.1.0 태그를 모듈로 사용하는 올바른 source 는?",
  "c": [
   "source = \"git::https://example.com/vpc.git?ref=v2.1.0\"",
   "source = \"git::https://example.com/vpc.git\" 와 version = \"2.1.0\"",
   "source = \"git::https://example.com/vpc.git@v2.1.0\"",
   "source = \"git::https://example.com/vpc.git#v2.1.0\""
  ],
  "a": 0,
  "e": "Git 소스는 ?ref= 쿼리로 태그·브랜치·커밋을 지정. version 인수는 Registry 전용."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "Git 저장소의 하위 디렉터리 modules/db 를 모듈로 쓰려면?",
  "c": [
   "source = \"git::https://example.com/infra.git/modules/db\"",
   "source = \"git::https://example.com/infra.git?path=modules/db\"",
   "source = \"git::https://example.com/infra.git//modules/db\"",
   "source = \"git::https://example.com/infra.git\" 와 path = \"modules/db\""
  ],
  "a": 2,
  "e": "이중 슬래시 // 뒤가 저장소 내부 하위 디렉터리. ?ref= 와 함께 쓸 땐 //modules/db?ref=v1.0 순서."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "Which module source types support the version argument?",
  "c": [
   "Public and private registry modules",
   "Local paths and Git repositories",
   "Git and GitHub sources",
   "S3 and GCS buckets"
  ],
  "a": 0,
  "e": "version 인수는 Terraform Registry 프로토콜을 쓰는 public/private registry 모듈만 지원."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "HCP Terraform private registry 모듈 source 형식은?",
  "c": [
   "<ORG>/<NAME>/<PROVIDER>",
   "tfe::<ORG>/<NAME>",
   "app.terraform.io/<ORG>/<NAME>/<PROVIDER>",
   "registry.terraform.io/<NAME>"
  ],
  "a": 2,
  "e": "private registry 는 호스트명을 앞에 붙인 HOSTNAME/NAMESPACE(조직)/NAME/PROVIDER. 호스트 생략 시 공개 registry.terraform.io 로 해석."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 3,
  "q": "source = var.module_path 로 모듈 경로를 변수화했다. 결과는?",
  "c": [
   "정상 — 실행 시 변수로 경로가 결정된다",
   "오류 — source 는 리터럴 문자열이어야 한다",
   "경고만 표시되고 기본 경로를 사용한다",
   "-var 로 넘길 때만 동작한다"
  ],
  "a": 1,
  "e": "모듈 source·version 은 init 단계에서 해석되므로 변수·표현식을 쓸 수 없다."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 1,
  "q": "부모 모듈이 자식 모듈 'vpc' 의 output 'vpc_id' 를 참조하는 문법은?",
  "c": [
   "var.vpc.vpc_id",
   "output.vpc.vpc_id",
   "module.vpc.outputs.vpc_id",
   "module.vpc.vpc_id"
  ],
  "a": 3,
  "e": "자식 output 은 module.<NAME>.<OUTPUT>. outputs. 접두는 terraform_remote_state 에서 쓰는 형식."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "A child module needs the region value defined as var.region in the root module. How should it get the value?",
  "c": [
   "Reference var.region directly in the child; it inherits root variables",
   "Use module.root.region in the child",
   "Set a locals block in the root; locals are shared with children",
   "Declare variable \"region\" in the child and pass region = var.region in the module block"
  ],
  "a": 3,
  "e": "자식은 부모 스코프를 볼 수 없다. 자식에 variable 을 선언하고 module 블록 인수로 전달."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "자식 모듈 내부 리소스 aws_instance.web 의 id 를 루트에서 쓰려 한다. 올바른 방법은?",
  "c": [
   "module.NAME.aws_instance.web.id 로 직접 참조",
   "자식에 output 을 정의하고 module.NAME.OUTPUT 으로 참조",
   "data 소스로 자식 모듈을 조회",
   "depends_on 으로 자식 리소스를 연결"
  ],
  "a": 1,
  "e": "자식 내부 리소스는 캡슐화되어 직접 참조 불가. output 이 유일한 공개 인터페이스."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "자식 모듈 변수 variable \"name\" {} 에 default 가 없다. module 블록에서 name 을 생략하면?",
  "c": [
   "필수 인수 누락 오류",
   "빈 문자열로 처리",
   "null 로 처리되어 생략됨",
   "대화형 프롬프트로 입력 요청"
  ],
  "a": 0,
  "e": "default 없는 자식 변수는 module 블록의 필수 인수. 대화형 입력은 root 변수에만 해당."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "Which statement about module outputs is TRUE?",
  "c": [
   "All child module outputs automatically appear in terraform output",
   "Outputs from child modules are stored outside the state file",
   "Child module outputs are not shown by terraform output unless re-exported by a root output",
   "A child module output can be read by sibling modules without the parent"
  ],
  "a": 2,
  "e": "terraform output 은 root 출력만 표시. 형제 모듈 연결도 부모가 module.a.out 을 b 인수로 전달."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 3,
  "q": "자식 모듈 output \"db_password\" { value = random_password.p.result sensitive = true } 를 루트에서 output \"pw\" { value = module.db.db_password } 로 재노출했다. 결과는?",
  "c": [
   "오류 — 루트 output 에도 sensitive = true 가 필요",
   "정상 — 평문으로 출력",
   "정상 — 자동으로 마스킹",
   "경고 후 빈 값 출력"
  ],
  "a": 0,
  "e": "민감값을 참조하는 output 은 sensitive = true 를 선언하지 않으면 plan 시 오류가 난다."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 3,
  "q": "module \"app\" 이 module \"network\" 의 subnet_ids 를 필요로 한다. 올바른 연결은?",
  "c": [
   "app 모듈 내부에서 module.network.subnet_ids 직접 참조",
   "app 모듈에 depends_on = [module.network] 만 지정",
   "루트에서 module \"app\" { subnet_ids = module.network.subnet_ids }",
   "network 모듈에서 var.app 으로 push"
  ],
  "a": 2,
  "e": "모듈 간 값은 공통 부모(루트)가 output→인수로 배선. 참조 자체가 암묵 의존성을 만들어 depends_on 불필요."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 1,
  "q": "module 블록을 새로 추가한 뒤 plan 전에 실행해야 하는 명령은?",
  "c": [
   "terraform validate",
   "terraform init",
   "terraform fmt",
   "terraform refresh"
  ],
  "a": 1,
  "e": "모듈 설치(또는 로컬 모듈 등록)는 init(또는 get)이 수행. 없으면 'Module not installed' 오류."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 1,
  "q": "Where does terraform init place downloaded remote modules?",
  "c": [
   ".terraform/providers",
   "terraform.tfstate.d",
   "~/.terraform.d/modules",
   ".terraform/modules"
  ],
  "a": 3,
  "e": "모듈은 .terraform/modules, provider 플러그인은 .terraform/providers."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "모듈 블록에서 사용할 수 없는 메타 인수는?",
  "c": [
   "count",
   "for_each",
   "depends_on",
   "lifecycle"
  ],
  "a": 3,
  "e": "module 블록은 count·for_each·depends_on·providers 를 지원. lifecycle 은 resource 전용."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "module \"bucket\" { source = \"./s3\" for_each = toset([\"logs\",\"data\"]) } 에서 logs 인스턴스 주소는?",
  "c": [
   "module.bucket[0]",
   "module.bucket[\"logs\"]",
   "module.bucket.logs",
   "module.logs.bucket"
  ],
  "a": 1,
  "e": "for_each 모듈 인스턴스는 키로 주소 지정. 정수 인덱스는 count 일 때."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "루트에 provider \"aws\" { alias = \"west\" region = \"us-west-2\" } 가 있다. 자식 모듈이 이 구성을 기본 aws 로 쓰게 하려면?",
  "c": [
   "providers = { aws = aws.west }",
   "provider = aws.west",
   "alias = \"west\"",
   "depends_on = [provider.aws.west]"
  ],
  "a": 0,
  "e": "alias 구성은 자동 상속되지 않으므로 module 블록 providers 맵으로 매핑."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "By default, how do child modules obtain provider configurations?",
  "c": [
   "They must always define their own provider blocks",
   "They download separate provider credentials from the registry",
   "They inherit the default (non-aliased) provider configurations from the parent",
   "They cannot use providers unless passed via the providers argument"
  ],
  "a": 2,
  "e": "default provider 구성은 암묵 상속, alias 구성만 providers 로 명시 전달."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 3,
  "q": "재사용 모듈 내부에 provider \"aws\" { region = \"us-east-1\" } 블록이 있다. 이 모듈을 for_each 로 호출하면?",
  "c": [
   "오류 — 자체 provider 구성을 가진 legacy 모듈은 count·for_each·depends_on 불가",
   "정상 — 인스턴스마다 provider 가 복제됨",
   "정상 — 단 region 이 무시됨",
   "경고 후 첫 인스턴스만 생성"
  ],
  "a": 0,
  "e": "모듈 내부 provider 블록(legacy)은 count/for_each/depends_on 과 함께 쓸 수 없다. provider 는 호출자에서 전달."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 3,
  "q": "module \"web\" { source = \"./web\" count = 2 } 를 for_each 로 바꾸면서 기존 인스턴스 재생성을 막으려면?",
  "c": [
   "terraform init -upgrade 실행",
   "module 블록에 version 추가",
   "moved { from = module.web[0] to = module.web[\"a\"] } 등 moved 블록 추가",
   "-refresh-only apply 실행"
  ],
  "a": 2,
  "e": "인스턴스 키가 바뀌면 주소 변경 → moved 블록으로 상태 주소를 옮겨 destroy/create 를 방지."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 1,
  "q": "version = \"~> 4.2\" 이 허용하는 모듈 버전 범위는?",
  "c": [
   ">= 4.2, < 4.3",
   ">= 4.2, < 5.0",
   "= 4.2 만",
   "< 4.2"
  ],
  "a": 1,
  "e": "~> 4.2 는 마지막 자리(마이너)만 증가 허용 → 4.x (4.2 이상)."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 1,
  "q": "Which file locks provider versions but NOT module versions?",
  "c": [
   "terraform.tfstate",
   "versions.tf",
   "terraform.tfvars",
   ".terraform.lock.hcl"
  ],
  "a": 3,
  "e": ".terraform.lock.hcl 은 provider 버전·해시만. 모듈은 version 제약으로 관리."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "version = \"~> 1.4.0\" 의 허용 범위는?",
  "c": [
   ">= 1.4.0, < 2.0.0",
   "= 1.4.0 만",
   ">= 1.0.0, < 1.4.0",
   ">= 1.4.0, < 1.5.0"
  ],
  "a": 3,
  "e": "세 자리 ~> 는 패치만 허용."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "version 제약을 올린 뒤 새 모듈 버전을 받으려면?",
  "c": [
   "terraform plan -upgrade",
   "terraform init -upgrade",
   "terraform get -lock",
   "terraform apply -refresh-only"
  ],
  "a": 1,
  "e": "init -upgrade 가 제약 범위 내 최신 모듈·provider 를 재선택. 일반 init 은 설치본 유지."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "To publish a module to the public Terraform Registry, which requirement is correct?",
  "c": [
   "A public GitHub repository named terraform-<PROVIDER>-<NAME> with semantic version tags",
   "A private GitLab repository with any name",
   "A ZIP file uploaded directly to registry.terraform.io",
   "A repository with a version.txt file instead of tags"
  ],
  "a": 0,
  "e": "공개 GitHub 저장소, terraform-<PROVIDER>-<NAME> 이름, x.y.z 태그, 표준 구조가 요건."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "다음 중 공개 Registry 게시 저장소 이름으로 유효한 것은?",
  "c": [
   "aws-vpc-module",
   "terraform_vpc_aws",
   "terraform-aws-vpc",
   "vpc-terraform-aws"
  ],
  "a": 2,
  "e": "형식 terraform-<PROVIDER>-<NAME>, 하이픈 구분."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "프로덕션 환경의 Registry 모듈 사용 모범 사례는?",
  "c": [
   "version 을 명시해 고정(또는 좁은 범위)한다",
   "version 을 생략해 항상 최신을 받는다",
   "source 에 latest 를 붙인다",
   "lock 파일에 모듈 버전을 수동 기입한다"
  ],
  "a": 0,
  "e": "version 생략 시 init 때 최신 버전 선택 → 예기치 않은 변경. lock 파일은 모듈 미지원."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 3,
  "q": "A team uses source = \"terraform-aws-modules/vpc/aws\" with no version argument. A new major version is released. What happens on a fresh terraform init in a new clone?",
  "c": [
   "The version recorded in .terraform.lock.hcl is used",
   "Terraform errors because version is required",
   "The latest available version is downloaded, possibly introducing breaking changes",
   "The oldest published version is selected"
  ],
  "a": 2,
  "e": "version 없으면 최신 버전 선택. 잠금 파일은 모듈을 기록하지 않으므로 새 클론에서 메이저 변경이 유입될 수 있다."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 3,
  "q": "로컬 모듈 source = \"../modules/app\" 에 version = \"1.0.0\" 을 추가했다. 결과는?",
  "c": [
   "정상 — 버전 검사 없이 무시",
   "init 오류 — 로컬 경로 모듈은 version 미지원",
   "Git 태그 1.0.0 을 체크아웃",
   "Registry 에서 1.0.0 을 내려받음"
  ],
  "a": 1,
  "e": "version 은 registry 소스 전용. 로컬·Git 등에 지정하면 오류."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 1,
  "q": "Which command downloads and updates modules only, without initializing the backend or providers?",
  "c": [
   "terraform providers",
   "terraform fmt",
   "terraform workspace new",
   "terraform get"
  ],
  "a": 3,
  "e": "terraform get(-update)은 모듈만 다운로드. init 은 backend·provider·모듈 전체."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 1,
  "q": "backend 를 지정하지 않았을 때 Terraform 이 사용하는 backend 는?",
  "c": [
   "local",
   "s3",
   "remote",
   "consul"
  ],
  "a": 0,
  "e": "기본은 local backend, 작업 디렉터리의 terraform.tfstate."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 1,
  "q": "By default, where does the local backend store state?",
  "c": [
   ".terraform/terraform.tfstate",
   "~/.terraform.d/state.json",
   "terraform.tfstate in the working directory",
   "terraform.tfvars"
  ],
  "a": 2,
  "e": "local backend 기본 파일은 terraform.tfstate. .terraform/terraform.tfstate 는 backend 설정 캐시."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 2,
  "q": "local backend 에서 CLI workspace 'dev' 의 상태 파일 위치는?",
  "c": [
   "terraform.dev.tfstate",
   "terraform.tfstate.d/dev/terraform.tfstate",
   ".terraform/dev.tfstate",
   "dev/terraform.tfstate"
  ],
  "a": 1,
  "e": "default 외 workspace 는 terraform.tfstate.d/<이름>/ 아래 저장."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 2,
  "q": "state 파일을 Git 저장소에 커밋하지 말아야 하는 주된 이유는?",
  "c": [
   "파일 크기가 커서 Git 이 거부",
   "Terraform 이 Git 디렉터리의 상태를 읽지 못함",
   "state 파일은 바이너리 형식",
   "민감값이 평문으로 포함될 수 있고 동시 작업 충돌·잠금 부재"
  ],
  "a": 3,
  "e": "state 는 JSON 평문, 비밀번호 등 포함 가능. VCS 는 잠금을 제공하지 않는다."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 2,
  "q": "apply 직전의 상태를 보관하는 local backend 파일은?",
  "c": [
   "terraform.tfstate.old",
   ".terraform.lock.hcl",
   "crash.log",
   "terraform.tfstate.backup"
  ],
  "a": 3,
  "e": "apply 시 이전 상태를 terraform.tfstate.backup 에 보관."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 1,
  "q": "State locking 의 목적은?",
  "c": [
   "상태 파일 암호화",
   "여러 사용자의 동시 실행으로 인한 상태 손상 방지",
   "provider 버전 고정",
   "드리프트 자동 복구"
  ],
  "a": 1,
  "e": "잠금은 동시 쓰기 방지. 암호화는 저장소 기능, 버전 고정은 lock 파일."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 1,
  "q": "Which command manually removes a stuck state lock?",
  "c": [
   "terraform force-unlock LOCK_ID",
   "terraform state unlock",
   "terraform unlock -all",
   "terraform init -unlock"
  ],
  "a": 0,
  "e": "force-unlock 에 잠금 ID 를 지정."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "잠금 획득에 실패하면 Terraform 의 동작은?",
  "c": [
   "잠금 없이 계속 진행",
   "기존 잠금을 자동 해제 후 진행",
   "작업을 진행하지 않고 오류를 출력",
   "상태 사본을 만들어 진행"
  ],
  "a": 2,
  "e": "잠금 실패 시 진행하지 않는다. -lock-timeout 으로 대기 재시도 가능."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "다른 팀원의 apply 가 끝날 때까지 최대 5분 기다리게 하려면?",
  "c": [
   "terraform apply -lock-timeout=5m",
   "terraform apply -lock=false",
   "terraform apply -wait=300",
   "terraform force-unlock -timeout=5m"
  ],
  "a": 0,
  "e": "-lock-timeout 은 잠금 획득 재시도 시간(기본 0s)."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "Which statement about state locking is TRUE?",
  "c": [
   "Locking must be enabled with terraform lock before each apply",
   "Locking only applies to HCP Terraform",
   "Not all backends support locking; when supported, it happens automatically on operations that could write state",
   "The local backend never locks state"
  ],
  "a": 2,
  "e": "지원 backend 에서 자동. local 도 시스템 API 로 잠금."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 3,
  "q": "CI 작업이 강제 종료되어 S3 backend 잠금이 남았다. 확인 결과 실행 중인 다른 작업은 없다. 적절한 조치는?",
  "c": [
   "모든 명령에 -lock=false 를 영구 추가",
   "출력된 잠금 ID 로 terraform force-unlock LOCK_ID",
   "S3 버킷의 상태 파일 삭제",
   "terraform init -reconfigure"
  ],
  "a": 1,
  "e": "다른 실행이 없음을 확인한 뒤 force-unlock. -lock=false 상시 사용·상태 삭제는 손상 위험."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "S3 backend 에서 Terraform 1.10+ 가 지원하는 S3 네이티브 잠금 인수는?",
  "c": [
   "dynamodb_table = \"locks\"",
   "lock = \"s3\"",
   "enable_locking = true",
   "use_lockfile = true"
  ],
  "a": 3,
  "e": "use_lockfile = true 는 S3 에 .tflock 객체로 잠금. dynamodb_table 은 1.11 에서 deprecated."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 1,
  "q": "backend 블록이 위치하는 곳은?",
  "c": [
   "provider 블록 안",
   "resource 블록 안",
   "module 블록 안",
   "terraform { } 블록 안"
  ],
  "a": 3,
  "e": "terraform { backend \"s3\" { ... } }."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 1,
  "q": "Why use a remote backend instead of local state for a team?",
  "c": [
   "It makes terraform plan skip refresh",
   "Shared access to state with locking and centralized storage",
   "It removes the need for providers",
   "It converts state to HCL format"
  ],
  "a": 1,
  "e": "원격 backend 는 공유·잠금·중앙 저장(암호화·버저닝)을 제공."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "backend \"s3\" { bucket = var.bucket } 로 작성했다. 결과는?",
  "c": [
   "오류 — backend 블록에 변수 사용 불가",
   "정상 — var.bucket 값 사용",
   "init 시 프롬프트로 입력",
   "locals 로 바꾸면 정상"
  ],
  "a": 0,
  "e": "backend 는 변수·locals·data 모두 불가. -backend-config 부분 구성 사용."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "환경별로 다른 S3 버킷을 쓰되 backend 블록은 공통으로 두려면?",
  "c": [
   "backend 블록에 count 사용",
   "workspace 마다 backend 블록 복제",
   "빈 backend 블록 + terraform init -backend-config=dev.s3.tfbackend",
   "TF_VAR_bucket 환경변수 설정"
  ],
  "a": 2,
  "e": "부분 구성(partial configuration)으로 init 시 파일·KEY=VALUE 주입. TF_VAR_ 은 backend 에 적용 안 됨."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "local 에서 s3 backend 로 바꾼 뒤 기존 상태를 새 backend 로 옮기는 명령은?",
  "c": [
   "terraform init -migrate-state",
   "terraform init -reconfigure",
   "terraform state push",
   "terraform apply -refresh-only"
  ],
  "a": 0,
  "e": "-migrate-state 가 상태 이전. -reconfigure 는 이전 없이 재설정."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "You changed the backend configuration block. What must you run before plan?",
  "c": [
   "terraform validate",
   "terraform refresh",
   "terraform init",
   "terraform fmt"
  ],
  "a": 2,
  "e": "backend 변경은 init 으로 재초기화(필요 시 migrate)해야 한다."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "backend 자격증명 관리로 권장되는 방법은?",
  "c": [
   "backend 블록에 access_key 하드코딩",
   "환경변수·프로파일·자격증명 파일로 제공",
   "terraform.tfvars 에 기입",
   "output 으로 노출"
  ],
  "a": 1,
  "e": "하드코딩한 backend 값은 .terraform/ 디렉터리와 plan 파일에 기록될 수 있다."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 3,
  "q": "init -reconfigure 를 잘못 사용해 새 backend 가 비어 있게 되었다. 다음 plan 결과로 예상되는 것은?",
  "c": [
   "변경 없음",
   "모든 리소스 삭제(-) 계획",
   "오류로 plan 불가",
   "기존 리소스까지 모두 새로 생성(+)하는 계획"
  ],
  "a": 3,
  "e": "상태가 비면 Terraform 은 구성의 모든 리소스를 미관리로 보고 생성 계획을 세운다. -migrate-state 로 이전했어야 함."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "Which backend option enables server-side encryption of the state object in S3?",
  "c": [
   "sensitive = true",
   "secure_state = true",
   "kms = \"enabled\"",
   "encrypt = true"
  ],
  "a": 3,
  "e": "S3 backend 의 encrypt = true (kms_key_id 로 CMK 지정 가능). sensitive 는 변수·output 속성."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 3,
  "q": "terraform init -backend=false 의 효과는?",
  "c": [
   "local backend 로 강제 전환",
   "backend 초기화를 건너뛰고 모듈·provider 만 설치",
   "상태 파일 삭제",
   "원격 상태 잠금 해제"
  ],
  "a": 1,
  "e": "validate 등 상태가 필요 없는 CI 단계에서 사용."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 1,
  "q": "다른 구성의 출력값을 읽는 데이터 소스는?",
  "c": [
   "terraform_remote_state",
   "terraform_outputs",
   "remote_backend",
   "state_reader"
  ],
  "a": 0,
  "e": "data \"terraform_remote_state\". HCP 에서는 tfe_outputs 도 가능."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 2,
  "q": "data.terraform_remote_state.net 에서 vpc_id 를 읽는 올바른 참조는?",
  "c": [
   "data.terraform_remote_state.net.vpc_id",
   "module.net.vpc_id",
   "data.terraform_remote_state.net.outputs.vpc_id",
   "data.terraform_remote_state.net.resources.vpc_id"
  ],
  "a": 2,
  "e": "outputs 속성 아래에 root output 이 맵으로 노출."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 2,
  "q": "What values can terraform_remote_state read from another configuration?",
  "c": [
   "Only the root module outputs",
   "All resource attributes",
   "Only variables marked sensitive",
   "Child module outputs directly"
  ],
  "a": 0,
  "e": "root output 만. 자식 모듈 값은 루트 output 으로 재노출 필요."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 3,
  "q": "terraform_remote_state 사용 시 보안상 주의점은?",
  "c": [
   "output 이 자동 암호화되어 복호화 키 필요",
   "대상 구성이 매번 apply 됨",
   "읽는 쪽이 대상 상태 스냅샷 전체(민감값 포함) 접근 권한을 가져야 함",
   "잠금이 영구 유지됨"
  ],
  "a": 2,
  "e": "output 만 쓰더라도 상태 전체 읽기 권한이 필요 → tfe_outputs·전용 데이터 소스 고려."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 2,
  "q": "네트워크 팀 구성의 subnet_id 를 앱 팀 구성에서 쓰려 한다. 앱 팀 구성 쪽에서 필요한 것은?",
  "c": [
   "네트워크 구성을 module 로 복사",
   "terraform_remote_state 데이터 소스에 네트워크 상태 backend·config 지정",
   "네트워크 상태 파일을 앱 디렉터리로 복사",
   "depends_on 으로 네트워크 구성 지정"
  ],
  "a": 1,
  "e": "구성 간 공유는 remote state 데이터 소스(또는 provider 데이터 소스). 상태 복사는 이중 관리."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 1,
  "q": "Which command updates state to match real infrastructure without changing infrastructure?",
  "c": [
   "terraform apply -replace",
   "terraform plan -destroy",
   "terraform state rm",
   "terraform apply -refresh-only"
  ],
  "a": 3,
  "e": "-refresh-only 는 상태만 갱신. -replace 는 재생성."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 1,
  "q": "deprecated 된 terraform refresh 를 대체하는 권장 방법은?",
  "c": [
   "terraform init -upgrade",
   "terraform validate",
   "terraform get -update",
   "terraform plan/apply -refresh-only"
  ],
  "a": 3,
  "e": "refresh 는 검토 없이 상태를 덮어써 위험 → -refresh-only 로 검토 후 반영."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "누군가 콘솔에서 보안그룹 규칙을 수정했다. 구성 코드는 그대로 두고 일반 terraform apply 를 실행하면?",
  "c": [
   "수동 변경이 구성 파일에 자동 반영된다",
   "구성에 정의된 값으로 되돌리는 변경이 계획된다",
   "변경 없음으로 표시된다",
   "상태만 수동 변경 값으로 갱신된다"
  ],
  "a": 1,
  "e": "plan 은 새로고침으로 드리프트를 감지하고 구성을 원하는 상태로 보아 복원 계획. 코드 자동 수정은 없음."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "terraform taint 를 대체하는 명령은?",
  "c": [
   "terraform apply -replace=aws_instance.web",
   "terraform apply -refresh-only",
   "terraform state rm aws_instance.web",
   "terraform plan -target=aws_instance.web"
  ],
  "a": 0,
  "e": "-replace 는 plan 에서 재생성을 검토할 수 있어 taint 대비 안전."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "Which flag skips the refresh step to speed up plan on large configurations?",
  "c": [
   "-refresh-only",
   "-lock=false",
   "-refresh=false",
   "-parallelism=0"
  ],
  "a": 2,
  "e": "-refresh=false 는 새로고침 생략(드리프트 미감지 위험). -refresh-only 와 반대 개념."
 },
 {
  "s": "s6",
  "t": "state 리팩터링",
  "d": 2,
  "q": "aws_instance.app 을 aws_instance.web 으로 이름만 바꿀 때 재생성 없이 처리하는 선언적 방법은?",
  "c": [
   "moved { from = aws_instance.app to = aws_instance.web }",
   "removed { from = aws_instance.app }",
   "lifecycle { prevent_destroy = true }",
   "apply -replace=aws_instance.web"
  ],
  "a": 0,
  "e": "moved 블록(1.1+)은 상태 주소를 옮겨 destroy/create 를 방지."
 },
 {
  "s": "s6",
  "t": "state 리팩터링",
  "d": 2,
  "q": "리소스를 Terraform 관리에서 빼되 실제 리소스는 유지하는 1.7+ 선언 방식은?",
  "c": [
   "removed { from = aws_s3_bucket.logs }",
   "moved { from = aws_s3_bucket.logs to = null }",
   "removed { from = aws_s3_bucket.logs lifecycle { destroy = false } }",
   "lifecycle { ignore_changes = all }"
  ],
  "a": 2,
  "e": "destroy = false 여야 상태에서만 제거. 생략 시 기본 destroy = true 로 실제 삭제."
 },
 {
  "s": "s6",
  "t": "state 리팩터링",
  "d": 3,
  "q": "An EC2 instance is corrupted at the OS level but its attributes have not changed. How do you force Terraform to recreate only that instance?",
  "c": [
   "terraform apply -refresh-only",
   "terraform apply -replace=aws_instance.web",
   "terraform state rm aws_instance.web and then apply",
   "terraform destroy and terraform apply"
  ],
  "a": 1,
  "e": "-replace 는 해당 리소스만 재생성 계획. state rm 후 apply 는 기존 인스턴스를 고아로 남기고 중복 생성."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 3,
  "q": "수동 변경(태그 추가)을 정식으로 받아들이려 한다. 가장 적절한 절차는?",
  "c": [
   "apply -refresh-only 만 실행하고 코드는 유지",
   "terraform taint 로 재생성",
   "state rm 후 import",
   "구성 코드에 태그를 반영하고 plan 으로 변경 없음 확인(필요 시 -refresh-only 로 상태 갱신)"
  ],
  "a": 3,
  "e": "refresh-only 만 하면 다음 일반 apply 에서 코드 기준으로 되돌린다. 코드와 상태를 모두 맞춰야 한다."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 1,
  "q": "기존에 콘솔로 만든 EC2 인스턴스를 Terraform state 로 가져오는 CLI 명령은?",
  "c": [
   "terraform import",
   "terraform refresh",
   "terraform state push",
   "terraform apply -refresh-only"
  ],
  "a": 0,
  "e": "import 가 기존 리소스를 state 에 편입. refresh/-refresh-only 는 이미 관리 중인 리소스의 상태만 갱신, state push 는 state 파일 업로드."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 2,
  "q": "Which statement about the `terraform import` CLI command is true?",
  "c": [
   "It generates a matching resource block in a new .tf file.",
   "It creates a new resource if the ID does not exist.",
   "It can only be used with local state.",
   "It records the existing resource in state but does not write configuration."
  ],
  "a": 3,
  "e": "Command-line import only updates state; you must write the resource block yourself. It does not create resources and works with remote backends too."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 2,
  "q": "terraform import aws_instance.web i-0abc 실행 시 'resource address does not exist in the configuration' 오류가 났다. 원인은?",
  "c": [
   "provider 가 import 를 지원하지 않음",
   "state 가 잠겨 있음",
   "구성에 aws_instance.web resource 블록이 없음",
   "-generate-config-out 옵션을 빠뜨림"
  ],
  "a": 2,
  "e": "명령형 import 는 대상 resource 블록이 구성에 먼저 있어야 한다. -generate-config-out 은 plan 옵션이며 import 명령에는 없음."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 1,
  "q": "terraform import 명령의 두 인자(ADDR ID)에서 ID 가 의미하는 것은?",
  "c": [
   "Terraform state 의 serial 번호",
   "provider 가 정의한 실제 리소스의 고유 식별자",
   "resource 블록의 로컬 이름",
   "워크스페이스 ID"
  ],
  "a": 1,
  "e": "ADDR = Terraform 리소스 주소, ID = provider 별 import ID(예 EC2 인스턴스 ID). 형식은 provider 문서의 Import 절 참조."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 3,
  "q": "for_each 로 정의된 리소스 인스턴스를 Linux 셸에서 import 하려 한다. 올바른 주소 표기는?",
  "c": [
   "terraform import aws_s3_bucket.b.logs my-logs",
   "terraform import 'aws_s3_bucket.b[\"logs\"]' my-logs",
   "terraform import aws_s3_bucket.b[logs] my-logs",
   "terraform import aws_s3_bucket.b(0) my-logs"
  ],
  "a": 1,
  "e": "for_each 인스턴스 키는 문자열이므로 [\"key\"] 형식, 셸이 따옴표를 해석하지 않도록 전체를 작은따옴표로 감싼다."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 1,
  "q": "Terraform 1.5 에서 도입된, 구성 파일 안에 선언하여 plan 으로 미리 볼 수 있는 import 방식은?",
  "c": [
   "import 블록",
   "moved 블록",
   "removed 블록",
   "data 블록"
  ],
  "a": 0,
  "e": "import 블록(to·id)은 선언형·plannable. moved 는 주소 변경, removed 는 관리 해제, data 는 읽기 전용 조회."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 1,
  "q": "What are the two required arguments of an `import` block (when using `id`)?",
  "c": [
   "from and to",
   "address and source",
   "resource and identifier",
   "to and id"
  ],
  "a": 3,
  "e": "`import { to = aws_instance.web id = \"i-123\" }`. from/to is the moved block syntax."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 블록 대상의 resource 블록을 자동으로 작성하려면 어떤 명령을 실행하는가?",
  "c": [
   "terraform apply -generate-config-out=generated.tf",
   "terraform import -generate=generated.tf",
   "terraform plan -generate-config-out=generated.tf",
   "terraform init -generate-config"
  ],
  "a": 2,
  "e": "구성 생성은 plan 의 -generate-config-out 옵션. apply·init·import 명령에는 해당 옵션이 없다."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "terraform plan -generate-config-out=main.tf 를 실행했는데 오류가 발생했다. 가장 가능성 높은 원인은?",
  "c": [
   "import 블록에 id 가 있음",
   "backend 가 원격임",
   "main.tf 파일이 이미 존재함",
   "provider 버전 잠금 파일이 있음"
  ],
  "a": 2,
  "e": "-generate-config-out 은 새 파일만 작성하며 기존 파일이 있으면 오류. 별도 파일명(예 generated.tf)을 지정한다."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 블록을 사용한 plan 출력에서 import 대상 리소스는 어떻게 표시되는가?",
  "c": [
   "+ create 로 표시되고 새로 생성",
   "will be imported 로 표시되고 apply 시 state 에 편입",
   "-/+ 로 표시되고 재생성",
   "<= read 로 표시되고 매번 조회"
  ],
  "a": 1,
  "e": "import 는 생성이 아니라 편입. 구성과 실물 속성이 다르면 import 와 함께 in-place 변경(~)이 같이 표시될 수 있다."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "Where can an `import` block be declared?",
  "c": [
   "Only in the root module",
   "Only inside child modules",
   "In any module, including registry modules",
   "Only in a separate imports.tfvars file"
  ],
  "a": 0,
  "e": "Import blocks must be in the root module; the `to` address may still point into a child module (e.g. module.vpc.aws_vpc.this)."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 3,
  "q": "여러 S3 버킷을 한 번에 import 하려 한다. Terraform 1.7+ 에서 가장 적절한 방법은?",
  "c": [
   "terraform import 에 쉼표로 ID 를 나열",
   "import 블록에 count 를 사용",
   "state push 로 미리 작성한 state 업로드",
   "import 블록에 for_each 를 사용해 map 으로 to·id 지정"
  ],
  "a": 3,
  "e": "1.7+ import 블록은 for_each 지원. 명령형 import 는 1회 1개, state push 수동 작성은 위험."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 3,
  "q": "import 블록 + -generate-config-out 으로 생성된 구성을 다룰 때 권장 사항이 아닌 것은?",
  "c": [
   "불필요하거나 충돌하는 속성 정리",
   "하드코딩 값을 변수·참조로 치환",
   "plan 을 다시 실행해 차이 없음 확인",
   "생성된 파일은 수정하지 말고 그대로 커밋"
  ],
  "a": 3,
  "e": "생성 구성은 초안이다. 검토·정리·변수화 후 plan 으로 no changes 를 확인하는 것이 권장 흐름."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 블록으로 리소스를 편입한 apply 이후 import 블록 처리에 대한 설명으로 옳은 것은?",
  "c": [
   "반드시 남겨야 다음 apply 에서 리소스가 유지됨",
   "삭제하면 리소스가 state 에서 제거됨",
   "삭제해도 되고, 이력으로 남겨도 재 import 되지 않음",
   "남겨두면 매 apply 마다 리소스를 재생성"
  ],
  "a": 2,
  "e": "이미 state 에 있는 주소면 import 블록은 무시(멱등). 제거해도 state 에는 영향 없음."
 },
 {
  "s": "s7",
  "t": "state 조회",
  "d": 1,
  "q": "현재 state 에 기록된 모든 리소스 주소를 나열하는 명령은?",
  "c": [
   "terraform state show",
   "terraform state list",
   "terraform output",
   "terraform providers"
  ],
  "a": 1,
  "e": "list = 주소 목록, show = 리소스 1개 상세, output = 출력값, providers = 필요 provider 트리."
 },
 {
  "s": "s7",
  "t": "state 조회",
  "d": 1,
  "q": "Which command displays all attributes of a single resource instance from state?",
  "c": [
   "terraform state show ADDR",
   "terraform state list ADDR",
   "terraform state pull ADDR",
   "terraform console ADDR"
  ],
  "a": 0,
  "e": "`state show` prints one instance's attributes. `state list` prints addresses only; `state pull` dumps the whole state as JSON."
 },
 {
  "s": "s7",
  "t": "state 조회",
  "d": 2,
  "q": "state 전체 또는 저장된 plan 파일을 사람이 읽을 수 있게 보여 주고, -json 으로 기계 판독 형식도 제공하는 명령은?",
  "c": [
   "terraform show",
   "terraform state show",
   "terraform graph",
   "terraform validate"
  ],
  "a": 0,
  "e": "terraform show [plan파일] — 인자가 없으면 현재 state. state show 는 리소스 1개만."
 },
 {
  "s": "s7",
  "t": "state 조회",
  "d": 2,
  "q": "인스턴스 ID i-0abc 로 state 내 어떤 주소인지 찾으려면?",
  "c": [
   "terraform state show -id=i-0abc",
   "terraform import -find i-0abc",
   "terraform state pull -id=i-0abc",
   "terraform state list -id=i-0abc"
  ],
  "a": 3,
  "e": "state list 는 -id 옵션으로 ID 기준 필터를 지원한다."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 1,
  "q": "리소스 이름을 aws_instance.a 에서 aws_instance.b 로 바꾸면서 재생성을 피하려 할 때 쓰는 CLI 명령은?",
  "c": [
   "terraform state rm aws_instance.a",
   "terraform apply -replace=aws_instance.b",
   "terraform state mv aws_instance.a aws_instance.b",
   "terraform import aws_instance.b"
  ],
  "a": 2,
  "e": "state mv 는 주소만 변경. 1.1+ 에서는 moved 블록으로 코드화하는 것이 권장."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 1,
  "q": "What happens to the real infrastructure after `terraform state rm aws_instance.web`?",
  "c": [
   "It is destroyed immediately.",
   "It keeps running; Terraform just stops tracking it.",
   "It is destroyed on the next apply regardless of configuration.",
   "It is tagged as deprecated in the provider."
  ],
  "a": 1,
  "e": "state rm only removes the binding from state. If the resource block remains in config, the next plan proposes creating a new one."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "state rm 후 구성에 해당 resource 블록을 그대로 두고 plan 을 실행하면?",
  "c": [
   "변경 없음(No changes)",
   "새 리소스 생성(+)이 계획됨",
   "기존 리소스 삭제(-)가 계획됨",
   "자동으로 다시 import 됨"
  ],
  "a": 1,
  "e": "Terraform 은 state 에 없는 resource 블록을 새로 만들 대상으로 본다. 관리 해제가 목적이면 블록도 제거(또는 removed 블록 사용)."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "state mv 와 moved 블록을 비교한 설명으로 옳은 것은?",
  "c": [
   "moved 블록은 코드에 남아 plan 으로 검토되고 모든 사용자에게 적용",
   "state mv 만 모듈 간 이동을 지원",
   "moved 블록은 원격 backend 에서 사용 불가",
   "두 방식 모두 리소스를 재생성"
  ],
  "a": 0,
  "e": "moved(1.1+)는 선언형·리뷰 가능·공유 모듈 리팩터링에 적합. 둘 다 재생성 없이 주소만 변경."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "Terraform 1.7+ 에서 리소스를 파괴하지 않고 관리에서 제외하는 선언형 방법은?",
  "c": [
   "moved 블록 + to = null",
   "import 블록 + id = \"\"",
   "lifecycle { prevent_destroy = true }",
   "removed 블록 + lifecycle { destroy = false }"
  ],
  "a": 3,
  "e": "removed 블록은 state rm 의 선언형 대체. prevent_destroy 는 삭제 계획을 오류로 막을 뿐 관리 해제가 아님."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 3,
  "q": "단일 리소스를 모듈로 옮기는 리팩터링: aws_vpc.main → module.network.aws_vpc.this. 재생성 없이 처리하는 CLI 명령은?",
  "c": [
   "terraform state rm aws_vpc.main 후 apply",
   "terraform state replace-provider aws_vpc.main module.network",
   "terraform state mv aws_vpc.main module.network.aws_vpc.this",
   "terraform apply -replace=module.network.aws_vpc.this"
  ],
  "a": 2,
  "e": "state mv 는 모듈 경로를 포함한 주소 이동 지원. rm 후 apply 는 새 리소스 생성, -replace 는 재생성."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "state 에 기록된 provider 소스 주소를 hashicorp/aws 에서 사내 포크 주소로 일괄 변경하는 명령은?",
  "c": [
   "terraform state mv",
   "terraform init -upgrade",
   "terraform state replace-provider",
   "terraform providers lock"
  ],
  "a": 2,
  "e": "replace-provider 는 provider 주소 교체 전용. init -upgrade 는 버전 갱신, providers lock 은 잠금 파일 해시 기록."
 },
 {
  "s": "s7",
  "t": "state 동기화",
  "d": 1,
  "q": "원격 backend 의 현재 state 를 JSON 으로 표준출력하는 명령은?",
  "c": [
   "terraform state push",
   "terraform state pull",
   "terraform state list",
   "terraform refresh"
  ],
  "a": 1,
  "e": "pull = 다운로드·stdout, push = 업로드. 파일 저장은 리다이렉트(> backup.tfstate)."
 },
 {
  "s": "s7",
  "t": "state 동기화",
  "d": 2,
  "q": "You run `terraform state push old.tfstate` and it is rejected. What is the most likely reason?",
  "c": [
   "The file has a different lineage or a lower serial than the remote state.",
   "state push only works with HCP Terraform.",
   "The file is in JSON format.",
   "TF_LOG is not set."
  ],
  "a": 0,
  "e": "Terraform protects remote state by checking lineage and serial; `-force` overrides but is risky."
 },
 {
  "s": "s7",
  "t": "state 동기화",
  "d": 3,
  "q": "state 수동 수정이 꼭 필요한 장애 상황에서 가장 안전한 순서는?",
  "c": [
   "state 파일을 직접 편집 → state push -force",
   "원격 state 삭제 → init → apply",
   "terraform destroy → 재생성",
   "state pull 로 백업 → state 하위 명령으로 수정 → plan 으로 검증"
  ],
  "a": 3,
  "e": "백업 우선, 지원되는 state 하위 명령 사용, plan 으로 결과 검증. 직접 편집·-force 는 최후 수단."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 1,
  "q": "Terraform 상세 로그를 켜는 환경변수는?",
  "c": [
   "TF_DEBUG",
   "TERRAFORM_VERBOSE",
   "TF_CLI_ARGS",
   "TF_LOG"
  ],
  "a": 3,
  "e": "TF_LOG 에 레벨 지정. TF_CLI_ARGS 는 명령 인자 주입용 환경변수."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 1,
  "q": "Which TF_LOG level produces the most verbose output?",
  "c": [
   "DEBUG",
   "INFO",
   "TRACE",
   "WARN"
  ],
  "a": 2,
  "e": "Order from most to least verbose: TRACE, DEBUG, INFO, WARN, ERROR."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 2,
  "q": "TF_LOG_PATH=./tf.log 만 설정하고 apply 했더니 로그 파일이 생기지 않았다. 이유는?",
  "c": [
   "상대 경로는 지원하지 않음",
   "TF_LOG 등 로그 레벨이 설정되지 않음",
   "apply 는 로그를 남기지 않음",
   "TF_LOG_PATH 는 Windows 전용"
  ],
  "a": 1,
  "e": "TF_LOG_PATH 는 출력 위치만 지정. 레벨(TF_LOG 또는 TF_LOG_CORE/PROVIDER)이 있어야 로그가 생성된다."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 2,
  "q": "provider 플러그인의 API 호출 로그만 DEBUG 수준으로 보고 싶다. 적절한 설정은?",
  "c": [
   "TF_LOG_PROVIDER=DEBUG",
   "TF_LOG_CORE=DEBUG",
   "TF_LOG=PROVIDER",
   "TF_PROVIDER_LOG=DEBUG"
  ],
  "a": 0,
  "e": "TF_LOG_PROVIDER 는 provider 로그만, TF_LOG_CORE 는 코어만 활성화."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 2,
  "q": "Terraform 이 panic 으로 비정상 종료했을 때 작업 디렉터리에 생성되는 파일은?",
  "c": [
   "crash.log",
   "terraform.tfstate.backup",
   "panic.trace",
   ".terraform.lock.hcl"
  ],
  "a": 0,
  "e": "crash.log 에 패닉 메시지·스택 트레이스가 기록되며 버그 보고 시 첨부."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 3,
  "q": "Setting `TF_LOG=JSON` results in which behavior?",
  "c": [
   "Only errors are logged as JSON.",
   "Plan output is written as JSON to stdout.",
   "Logs are disabled and plan is saved as JSON.",
   "Logs at TRACE level are emitted in JSON format."
  ],
  "a": 3,
  "e": "JSON is a special TF_LOG value: TRACE-level logs in machine-readable JSON. For JSON plan output use `terraform show -json`."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 1,
  "q": "Terraform Cloud 의 현재 공식 명칭은?",
  "c": [
   "HCP Terraform",
   "Terraform Enterprise",
   "Terraform Registry",
   "HashiCorp Vault"
  ],
  "a": 0,
  "e": "Terraform Cloud 는 HCP Terraform 으로 개명. Enterprise 는 자체 호스팅 버전, Registry 는 모듈·provider 배포처."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 1,
  "q": "Which offering is the self-hosted distribution of HCP Terraform features?",
  "c": [
   "Terraform Community Edition",
   "HCP Packer",
   "Terraform Registry",
   "Terraform Enterprise"
  ],
  "a": 3,
  "e": "Terraform Enterprise is installed and operated by the customer; HCP Terraform is the HashiCorp-managed SaaS."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 2,
  "q": "저장소의 PR 생성 시 speculative plan, 기본 브랜치 머지 시 실제 run 이 자동 실행되는 워크플로는?",
  "c": [
   "CLI-driven workflow",
   "API-driven workflow",
   "VCS-driven workflow",
   "Local execution mode"
  ],
  "a": 2,
  "e": "VCS 연동 workspace 의 특징. CLI-driven 은 로컬 명령, API-driven 은 API 호출이 트리거."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 2,
  "q": "A team already has a custom CI/CD pipeline and wants it to upload configuration versions and create runs programmatically. Which workflow fits best?",
  "c": [
   "VCS-driven workflow",
   "API-driven workflow",
   "CLI-driven workflow with local execution",
   "Speculative plan only"
  ],
  "a": 1,
  "e": "The API-driven workflow lets external tooling upload configuration versions and queue runs via the HCP Terraform API."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 2,
  "q": "CLI-driven workflow 에서 terraform plan 실행 시 일어나는 일은?",
  "c": [
   "로컬에서 plan 후 결과 파일만 업로드",
   "구성이 HCP 로 업로드되어 원격 실행되고 출력이 로컬로 스트리밍됨",
   "VCS 저장소에 커밋이 생성됨",
   "plan 없이 즉시 apply"
  ],
  "a": 1,
  "e": "remote 실행 모드 기준. 업로드 제외 파일은 .terraformignore."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 3,
  "q": "VCS 연결 workspace 에 cloud 블록으로 연결된 로컬에서 terraform apply 를 실행했다. 결과는?",
  "c": [
   "VCS 연결 workspace 는 CLI apply 를 허용하지 않아 실패",
   "원격 apply 가 즉시 실행",
   "로컬에서 apply 후 state 만 업로드",
   "VCS 에 자동 커밋 후 apply"
  ],
  "a": 0,
  "e": "VCS-driven workspace 의 apply 는 VCS 변경으로만 트리거. CLI 에서는 speculative plan 만 가능."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 2,
  "q": "CLI-driven workflow 에서 구성 업로드 시 특정 파일을 제외하려면?",
  "c": [
   ".gitignore 에만 추가하면 자동 제외",
   "cloud 블록에 exclude 인수 지정",
   "TF_IGNORE 환경변수 설정",
   ".terraformignore 파일 작성"
  ],
  "a": 3,
  "e": ".terraformignore 가 업로드 제외 규칙. cloud 블록에는 exclude 인수가 없다."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 1,
  "q": "HCP Terraform workspace 의 기본 실행 모드는?",
  "c": [
   "local",
   "agent",
   "remote",
   "hybrid"
  ],
  "a": 2,
  "e": "기본 remote. local 은 state 저장만, agent 는 사설망 실행. hybrid 모드는 없음."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "온프레미스 사설망의 vSphere 를 관리해야 하는데 HCP 관리 인프라에서는 접근할 수 없다. 적절한 실행 모드는?",
  "c": [
   "remote",
   "local 실행 + state 미사용",
   "agent",
   "speculative"
  ],
  "a": 2,
  "e": "HCP Terraform agent 를 사설망에 설치하면 아웃바운드 연결로 작업을 받아 실행."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "In local execution mode, what does HCP Terraform still provide?",
  "c": [
   "Remote plan and apply execution",
   "State storage and locking",
   "Sentinel policy checks on every run",
   "Automatic VCS-triggered runs"
  ],
  "a": 1,
  "e": "With local execution, plans and applies run on your machine; HCP Terraform only stores state and handles locking."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 1,
  "q": "PR 검토용으로 생성되며 적용할 수 없는 plan 을 무엇이라 하는가?",
  "c": [
   "speculative plan",
   "refresh-only plan",
   "destroy plan",
   "saved plan"
  ],
  "a": 0,
  "e": "speculative plan = plan 전용. refresh-only 는 state 동기화 plan, saved plan 은 apply 가능."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "HCP Terraform run 에서 Sentinel/OPA 정책 검사가 실행되는 시점은?",
  "c": [
   "init 이전",
   "apply 이후",
   "plan 이전",
   "plan 이후, apply 이전"
  ],
  "a": 3,
  "e": "정책은 plan 결과를 입력으로 평가하므로 plan 이후, 실제 변경 전인 apply 이전."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "workspace A(네트워크) apply 성공 시 workspace B(앱) run 을 자동으로 시작하게 하는 기능은?",
  "c": [
   "run tasks",
   "variable sets",
   "health assessments",
   "run triggers"
  ],
  "a": 3,
  "e": "run triggers = workspace 연쇄 실행. run tasks 는 외부 도구 연동, health assessments 는 drift 감지."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "Which HCP Terraform feature periodically detects drift between state and real infrastructure?",
  "c": [
   "Run triggers",
   "Speculative plans",
   "Health assessments (drift detection)",
   "Private registry"
  ],
  "a": 2,
  "e": "Health assessments run drift detection and continuous validation (e.g., check blocks) on a schedule."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 3,
  "q": "auto-apply 가 꺼진 workspace 에서 plan·정책 검사가 통과한 run 의 다음 상태는?",
  "c": [
   "즉시 apply",
   "사용자 confirm(승인) 대기",
   "run 자동 취소",
   "speculative plan 으로 전환"
  ],
  "a": 1,
  "e": "auto-apply 꺼짐 = 권한자가 Confirm & Apply 해야 apply 진행."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 3,
  "q": "정적 클라우드 키를 workspace 변수에 저장하지 않고, run 마다 OIDC 로 단기 자격증명을 받는 HCP 기능은?",
  "c": [
   "dynamic provider credentials",
   "variable sets",
   "sensitive variables",
   "terraform login"
  ],
  "a": 0,
  "e": "workload identity(OIDC) 기반으로 AWS·Azure·GCP·Vault 단기 자격증명 발급. variable set 은 값 공유일 뿐 정적 키."
 },
 {
  "s": "s8",
  "t": "협업·권한",
  "d": 1,
  "q": "HCP Terraform 에서 조직 전체 관리 권한을 기본으로 가지는 팀은?",
  "c": [
   "owners",
   "admins",
   "root",
   "maintainers"
  ],
  "a": 0,
  "e": "organization 생성 시 owners 팀이 만들어지며 삭제할 수 없다."
 },
 {
  "s": "s8",
  "t": "협업·권한",
  "d": 2,
  "q": "HCP Terraform 에서 권한을 부여하는 기본 주체는?",
  "c": [
   "개별 Git 커밋",
   "provider",
   "state 파일",
   "팀(team)"
  ],
  "a": 3,
  "e": "사용자는 팀에 속하고 팀에 organization·project·workspace 권한을 부여."
 },
 {
  "s": "s8",
  "t": "협업·권한",
  "d": 2,
  "q": "Which is NOT a scope at which team permissions can be granted in HCP Terraform?",
  "c": [
   "Organization",
   "Project",
   "Individual resource in state",
   "Workspace"
  ],
  "a": 2,
  "e": "Permissions apply at organization, project, and workspace levels; not per resource address."
 },
 {
  "s": "s8",
  "t": "협업·권한",
  "d": 2,
  "q": "다른 workspace 의 output 을 읽어오는 HCP 전용 데이터 소스는?",
  "c": [
   "terraform_data",
   "tfe_outputs",
   "aws_ssm_parameter",
   "local_file"
  ],
  "a": 1,
  "e": "tfe provider 의 tfe_outputs. terraform_remote_state 도 가능하나 원본 workspace 의 remote state 공유 설정 필요."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 1,
  "q": "HCP Terraform 이 지원하는 Policy as Code 프레임워크 2가지는?",
  "c": [
   "Sentinel 과 Checkov",
   "Sentinel 과 OPA",
   "OPA 와 tflint",
   "Vault 와 Consul"
  ],
  "a": 1,
  "e": "Sentinel(HashiCorp)·OPA(Rego) 기본 지원. Checkov 등은 run tasks 로 연동."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 1,
  "q": "Which Sentinel enforcement level allows a failed policy to be overridden by an authorized user?",
  "c": [
   "soft-mandatory",
   "hard-mandatory",
   "advisory-only-locked",
   "strict"
  ],
  "a": 0,
  "e": "advisory warns only, soft-mandatory can be overridden, hard-mandatory cannot be overridden."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "정책 실패 시 경고만 표시하고 run 을 계속 진행시키는 Sentinel 강제 수준은?",
  "c": [
   "soft-mandatory",
   "hard-mandatory",
   "mandatory-override",
   "advisory"
  ],
  "a": 3,
  "e": "advisory = 정보성 경고."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "'모든 S3 버킷은 암호화 필수, 예외 불가' 정책에 적절한 Sentinel 강제 수준은?",
  "c": [
   "advisory",
   "soft-mandatory",
   "hard-mandatory",
   "speculative"
  ],
  "a": 2,
  "e": "예외 불가 = override 불가 = hard-mandatory."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "조직 내부에서 검증된 모듈을 공유하고 버전 관리하는 HCP Terraform 기능은?",
  "c": [
   "public Terraform Registry",
   "variable sets",
   "private registry",
   "run triggers"
  ],
  "a": 2,
  "e": "private registry 는 조직 내부 전용 모듈·provider 배포처."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 3,
  "q": "private registry 모듈을 사용하는 올바른 source 형식은?",
  "c": [
   "source = \"registry.terraform.io/private/acme/vpc\"",
   "source = \"app.terraform.io/acme/vpc/aws\"",
   "source = \"tfe::acme/vpc\"",
   "source = \"acme/vpc/aws?private=true\""
  ],
  "a": 1,
  "e": "<HOSTNAME>/<ORGANIZATION>/<NAME>/<PROVIDER>. version 인수로 버전 제약 가능."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "외부 보안 스캐너를 plan 이후 단계에 연동해 결과에 따라 run 을 막을 수 있게 하는 기능은?",
  "c": [
   "run tasks",
   "run triggers",
   "health assessments",
   "agent pools"
  ],
  "a": 0,
  "e": "run tasks 는 pre-plan·post-plan·pre-apply·post-apply 단계에서 외부 서비스 호출, mandatory 면 실패 시 중단."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 3,
  "q": "Sentinel 정책이 OPA 와 다른 점으로 옳은 것은?",
  "c": [
   "Sentinel 만 plan 데이터를 검사",
   "OPA 는 apply 이후에만 검사",
   "Sentinel 은 Terraform Enterprise 에서만 지원",
   "Sentinel 은 HashiCorp 정책 언어, OPA 는 Rego 언어 사용"
  ],
  "a": 3,
  "e": "둘 다 policy set 으로 plan 이후 평가. 언어가 다르다."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 1,
  "q": "HCP Terraform 에서 여러 workspace 를 묶고 팀 권한을 일괄 부여하는 단위는?",
  "c": [
   "module",
   "variable set",
   "policy set",
   "project"
  ],
  "a": 3,
  "e": "organization → project → workspace 계층."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 2,
  "q": "What does an HCP Terraform workspace contain that a CLI workspace does not?",
  "c": [
   "A separate state file only",
   "A different backend type",
   "Its own variables, run history, and team permissions",
   "A unique provider lock file"
  ],
  "a": 2,
  "e": "CLI workspaces only separate state within one backend. HCP workspaces bundle configuration, variables, state versions, runs, and access control."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 2,
  "q": "AWS 자격증명 환경변수를 20개 workspace 에 공통으로 적용하는 가장 효율적인 방법은?",
  "c": [
   "각 workspace 에 수동 입력",
   "variable set 을 만들어 대상 workspace 또는 project 에 적용",
   "terraform.tfvars 를 모든 저장소에 커밋",
   "cloud 블록에 access_key 기입"
  ],
  "a": 1,
  "e": "variable set 으로 공용 변수 일괄 적용. 자격증명 커밋은 보안 위험."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 2,
  "q": "HCP workspace 변수에서 AWS_ACCESS_KEY_ID 처럼 provider 가 읽는 값은 어떤 범주로 등록하는가?",
  "c": [
   "environment variable",
   "Terraform variable",
   "output",
   "local value"
  ],
  "a": 0,
  "e": "Terraform variable 은 variable 블록 입력, environment variable 은 실행 환경 변수(TF_VAR_ 접두로 Terraform 변수 지정도 가능)."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 1,
  "q": "HCP Terraform API 토큰을 발급받아 로컬에 저장하는 CLI 명령은?",
  "c": [
   "terraform login",
   "terraform init -cloud",
   "terraform auth",
   "terraform workspace new"
  ],
  "a": 0,
  "e": "terraform login 은 credentials.tfrc.json 에 토큰 저장. logout 으로 제거."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 3,
  "q": "Given `terraform { cloud { organization = \"acme\" workspaces { tags = [\"app\"] } } }`, what does the `tags` setting do?",
  "c": [
   "Applies the tag to every AWS resource",
   "Selects exactly one workspace named app",
   "Filters which variables are uploaded",
   "Maps CLI workspace commands to all HCP workspaces with the matching tag"
  ],
  "a": 3,
  "e": "With tags, `terraform workspace list/select` operate over HCP workspaces carrying those tags; `name` pins a single workspace."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 1,
  "q": "Terraform 구성은 HCL 로 작성하며 JSON 형식(.tf.json)도 사용할 수 있다.",
  "a": true,
  "e": "Terraform 은 .tf(HCL)와 .tf.json 을 모두 구성 파일로 읽는다."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 1,
  "q": "Terraform 은 명령을 순서대로 기술하는 명령형 도구다.",
  "a": false,
  "e": "Terraform 은 목표 상태를 기술하는 선언형 도구."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 2,
  "q": "Terraform 은 리소스 블록의 작성 순서대로 리소스를 생성한다.",
  "a": false,
  "e": "작성 순서가 아니라 참조·depends_on 으로 만든 의존성 그래프로 순서를 결정(독립 리소스는 병렬)."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 2,
  "q": "외부 변경이 없다면 같은 구성으로 apply 를 반복해도 변경이 발생하지 않는다.",
  "a": true,
  "e": "선언형 + state 비교 → 멱등성. 'No changes' 출력."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 1,
  "q": "IaC 구성 파일을 VCS 로 관리하면 변경 이력 추적과 코드 리뷰가 가능하다.",
  "a": true,
  "e": "버전 관리·리뷰·롤백·협업은 IaC 의 대표 이점."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "IaC 를 도입하면 구성 드리프트가 원천적으로 발생할 수 없다.",
  "a": false,
  "e": "콘솔 수작업으로 드리프트는 생길 수 있다. IaC 는 탐지·교정 수단."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "state 파일은 구성 파일과 함께 Git 에 커밋하는 것이 권장된다.",
  "a": false,
  "e": "state 에 민감정보가 평문 저장될 수 있어 원격 backend 사용이 권장된다."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "terraform plan 은 변경을 적용하기 전에 생성·변경·삭제될 리소스를 보여 준다.",
  "a": true,
  "e": "plan = 실행 계획 미리보기. 검토 후 apply."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 3,
  "q": "모듈과 입력 변수를 활용하면 같은 인프라 패턴을 여러 환경에 일관되게 배포할 수 있다.",
  "a": true,
  "e": "재사용·표준화는 IaC 패턴의 핵심 이점."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 1,
  "q": "Terraform 은 AWS 리소스만 관리할 수 있다.",
  "a": false,
  "e": "provider 생태계로 Azure·GCP·SaaS·온프레미스까지 관리."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "하나의 Terraform 구성에 여러 클라우드 provider 를 함께 선언할 수 있다.",
  "a": true,
  "e": "required_providers 에 여러 provider 를 두고 한 구성에서 관리 가능."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "AWS 용으로 작성한 Terraform 코드는 provider 만 바꾸면 Azure 에서 그대로 동작한다.",
  "a": false,
  "e": "리소스 타입·인수가 provider 별로 다르다. 공통인 것은 언어와 워크플로."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "Terraform 은 GitHub 저장소나 Datadog 모니터 같은 SaaS 설정도 provider 로 관리할 수 있다.",
  "a": true,
  "e": "API 가 있는 서비스면 provider 로 관리 — 서비스 무관 워크플로."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 3,
  "q": "서로 다른 provider 의 리소스끼리는 속성을 참조할 수 없다.",
  "a": false,
  "e": "provider 가 달라도 참조 가능하며 암묵적 의존성이 생긴다(예 AWS IP → DNS 레코드)."
 },
 {
  "s": "s1",
  "t": "도구 비교",
  "d": 1,
  "q": "Terraform 은 관리 대상 서버에 에이전트를 설치해야 동작한다.",
  "a": false,
  "e": "에이전트리스 — provider 가 API 를 직접 호출."
 },
 {
  "s": "s1",
  "t": "도구 비교",
  "d": 2,
  "q": "AWS CloudFormation 은 AWS 전용이지만 Terraform 은 여러 클라우드를 지원한다.",
  "a": true,
  "e": "Terraform 은 provider 로 클라우드 무관, CloudFormation 은 AWS 전용."
 },
 {
  "s": "s1",
  "t": "도구 비교",
  "d": 2,
  "q": "Terraform 은 프로비저닝 중심 도구이며 Ansible 같은 구성 관리 도구와 함께 사용할 수 있다.",
  "a": true,
  "e": "프로비저닝(Terraform) + 구성 관리(Ansible) 병행이 일반적."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 2,
  "q": "불변 인프라는 배포된 서버에 접속해 설정을 직접 수정하는 방식이다.",
  "a": false,
  "e": "그것은 가변(mutable) 방식. 불변은 새 리소스로 교체."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 2,
  "q": "plan 에서 -/+ 표시는 리소스를 삭제한 뒤 다시 생성함을 뜻한다.",
  "a": true,
  "e": "-/+ = destroy then create replace. +/- 는 create_before_destroy 교체."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 2,
  "q": "Terraform Core 가 클라우드 API 를 직접 호출하고 provider 는 구성 해석만 담당한다.",
  "a": false,
  "e": "반대. Core 는 구성 해석·그래프·plan, provider 가 API 호출."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 1,
  "q": "terraform init 은 required_providers 에 선언된 provider 를 다운로드한다.",
  "a": true,
  "e": "init 이 provider·모듈 설치, backend 초기화."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "source 주소에서 호스트를 생략하면 registry.terraform.io 가 사용된다.",
  "a": true,
  "e": "기본 호스트는 public Terraform Registry."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "Partner tier provider 는 HashiCorp 가 직접 소유·유지보수한다.",
  "a": false,
  "e": "Partner 는 기술 파트너가 소유·관리. HashiCorp 소유는 Official."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 1,
  "q": ".terraform 디렉터리는 VCS 에 커밋하는 것이 권장된다.",
  "a": false,
  "e": ".terraform(provider 바이너리 등)은 커밋 제외. lock 파일은 커밋 권장."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 1,
  "q": "~> 5.0 은 5.x 의 모든 버전(6.0 미만)을 허용한다.",
  "a": true,
  "e": ">=5.0, <6.0."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "~> 5.10 은 5.10.x 패치 버전만 허용한다.",
  "a": false,
  "e": "~> 5.10 = >=5.10, <6.0. 패치만이면 ~> 5.10.0."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": ".terraform.lock.hcl 은 모듈 버전도 잠근다.",
  "a": false,
  "e": "provider 만 잠근다."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "terraform init -upgrade 는 제약 범위 내 최신 provider 를 선택해 lock 파일을 갱신한다.",
  "a": true,
  "e": "-upgrade 없으면 lock 의 버전을 유지."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "required_version 은 Terraform CLI 의 버전을 제약한다.",
  "a": true,
  "e": "provider 버전 제약은 required_providers."
 },
 {
  "s": "s2",
  "t": "provider 구성",
  "d": 2,
  "q": "provider 자격 증명은 provider 블록에 하드코딩하는 것이 가장 안전하다.",
  "a": false,
  "e": "환경변수·프로필·역할·Vault 사용 권장."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 1,
  "q": "alias 를 사용하면 같은 provider 를 여러 구성으로 선언할 수 있다.",
  "a": true,
  "e": "예 리전별 aws provider."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 2,
  "q": "alias 를 지정한 provider 블록은 provider 인수가 없는 리소스의 기본 구성으로 사용된다.",
  "a": false,
  "e": "기본 구성은 alias 없는 블록. alias 는 명시적으로 선택해야 한다."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 2,
  "q": "모듈에 alias provider 를 넘길 때는 module 블록의 providers 맵을 사용한다.",
  "a": true,
  "e": "providers = { aws = aws.west }."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 3,
  "q": "리소스의 provider 인수는 provider = \"aws.west\" 처럼 문자열로 쓴다.",
  "a": false,
  "e": "따옴표 없는 참조 provider = aws.west."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 1,
  "q": "state 는 구성의 리소스와 실제 인프라 객체의 매핑을 저장한다.",
  "a": true,
  "e": "state 의 핵심 목적."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 2,
  "q": "output 에 sensitive = true 를 지정하면 state 파일에서도 값이 암호화된다.",
  "a": false,
  "e": "CLI 출력만 마스킹, state 엔 평문."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 2,
  "q": "state 는 리소스 간 의존성 같은 메타데이터도 기록해 삭제 순서 결정에 활용된다.",
  "a": true,
  "e": "구성에서 제거된 리소스의 삭제 순서를 위해 의존성 메타데이터 저장."
 },
 {
  "s": "s2",
  "t": "state 관리",
  "d": 2,
  "q": "state locking 은 여러 사용자가 동시에 state 를 수정하는 것을 막는다.",
  "a": true,
  "e": "지원 backend 에서 쓰기 작업 시 자동 잠금."
 },
 {
  "s": "s2",
  "t": "state 관리",
  "d": 2,
  "q": "terraform_remote_state 데이터 소스는 다른 구성 state 의 모든 리소스 속성을 읽을 수 있다.",
  "a": false,
  "e": "root module 의 output 만 읽는다."
 },
 {
  "s": "s2",
  "t": "state 관리",
  "d": 3,
  "q": "Terraform 1.10 이상에서 S3 backend 는 use_lockfile = true 로 DynamoDB 없이 잠금할 수 있다.",
  "a": true,
  "e": "S3 네이티브 잠금. dynamodb_table 은 1.11 에서 deprecated."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 1,
  "q": "Terraform 핵심 워크플로는 Write → Plan → Apply 이다.",
  "a": true,
  "e": "작성 → 미리보기 → 적용."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 2,
  "q": "저장된 plan 파일을 apply 하면 다시 승인을 묻는다.",
  "a": false,
  "e": "저장 plan 은 승인 없이 적용."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 1,
  "q": "terraform init 은 인프라 리소스를 생성한다.",
  "a": false,
  "e": "작업 디렉터리 초기화만(backend·provider·모듈)."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 1,
  "q": "terraform init 은 여러 번 실행해도 안전하다.",
  "a": true,
  "e": "멱등. 구성 변경 시 재실행."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "init -reconfigure 는 기존 state 를 새 backend 로 이전한다.",
  "a": false,
  "e": "이전은 -migrate-state, -reconfigure 는 기존 설정 무시."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "backend 블록에는 입력 변수를 사용할 수 없다.",
  "a": true,
  "e": "-backend-config 부분 구성 사용."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 1,
  "q": "terraform validate 는 원격 state 와 provider API 에 접근한다.",
  "a": false,
  "e": "로컬 문법·일관성 검사만."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 2,
  "q": "terraform validate 를 실행하려면 먼저 init 이 필요하다.",
  "a": true,
  "e": "provider 스키마 필요."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 2,
  "q": "terraform validate 는 코드 들여쓰기를 표준 스타일로 고쳐 준다.",
  "a": false,
  "e": "그건 fmt. validate 는 파일을 수정하지 않는다."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 1,
  "q": "plan 의 + 기호는 리소스 생성을 의미한다.",
  "a": true,
  "e": "+ 생성, - 삭제, ~ 변경."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "terraform plan 은 refresh 결과로 state 파일을 영구 갱신한다.",
  "a": false,
  "e": "plan 은 state 무변경. 반영은 apply -refresh-only."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "-/+ 는 기존 리소스를 먼저 삭제한 뒤 새로 생성함을 뜻한다.",
  "a": true,
  "e": "+/- 는 반대(생성 먼저)."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "terraform refresh 는 deprecated 이며 apply -refresh-only 로 대체된다.",
  "a": true,
  "e": "검토 가능한 refresh-only 모드 권장."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 3,
  "q": "plan -detailed-exitcode 는 변경이 있을 때 종료 코드 2 를 반환한다.",
  "a": true,
  "e": "0 변경 없음, 1 오류, 2 변경 있음."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 1,
  "q": "terraform apply -auto-approve 는 승인 프롬프트를 생략한다.",
  "a": true,
  "e": "자동화용, 주의해서 사용."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 2,
  "q": "리소스 강제 재생성의 권장 방법은 terraform taint 이다.",
  "a": false,
  "e": "taint deprecated → apply -replace=ADDR."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 2,
  "q": "apply 중 오류가 나면 Terraform 은 이미 생성한 리소스를 자동으로 롤백한다.",
  "a": false,
  "e": "롤백 없음, 성공분은 state 에 기록."
 },
 {
  "s": "s3",
  "t": "destroy",
  "d": 2,
  "q": "terraform destroy 는 Terraform 외부에서 만든 리소스도 삭제한다.",
  "a": false,
  "e": "state 추적 리소스만."
 },
 {
  "s": "s3",
  "t": "destroy",
  "d": 2,
  "q": "lifecycle prevent_destroy = true 리소스가 있으면 destroy 는 오류로 중단된다.",
  "a": true,
  "e": "삭제 계획 시 오류."
 },
 {
  "s": "s3",
  "t": "fmt",
  "d": 1,
  "q": "terraform fmt 는 기본적으로 하위 디렉터리까지 재귀 처리한다.",
  "a": false,
  "e": "현재 디렉터리만, -recursive 필요."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 1,
  "q": "data 블록은 대상 객체를 읽기만 하고 생성·삭제하지 않는다.",
  "a": true,
  "e": "data 소스 = ★읽기 전용★ 조회."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "data 블록에는 count 나 for_each 를 사용할 수 없다.",
  "a": false,
  "e": "data 블록도 ★count·for_each★ 지원."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "resource 블록의 로컬 이름(두 번째 라벨)은 전체 구성에서 전역적으로 고유해야 한다.",
  "a": false,
  "e": "로컬 이름은 ★같은 모듈·같은 유형 안에서만★ 고유하면 됨."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 1,
  "q": "lifecycle 은 resource 블록에서 사용하는 메타 인수이다.",
  "a": true,
  "e": "lifecycle·count·for_each·depends_on·provider 가 메타 인수."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 3,
  "q": "data 소스 인수가 apply 전에 알 수 없는 값을 참조하면 읽기가 apply 단계로 미뤄진다.",
  "a": true,
  "e": "plan 에 ★<= read (data resources)★ 와 (known after apply) 표시."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "count 로 만든 리소스의 첫 번째 인스턴스 인덱스는 1 이다.",
  "a": false,
  "e": "count.index 는 ★0부터★."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "부모 모듈은 자식 모듈 내부 리소스 속성을 module.NAME.aws_instance.web.id 처럼 직접 참조할 수 있다.",
  "a": false,
  "e": "자식 모듈은 ★output 으로 노출된 값만★ module.NAME.OUTPUT 으로 접근."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "다른 리소스의 속성을 참조하면 Terraform 이 생성 순서를 자동으로 결정한다.",
  "a": true,
  "e": "참조 = ★암시적 의존성★."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "locals 블록에 정의한 값은 locals.NAME 으로 참조한다.",
  "a": false,
  "e": "정의는 locals, 참조는 ★local.NAME★(단수)."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "terraform console 명령으로 함수·표현식 결과를 대화형으로 확인할 수 있다.",
  "a": true,
  "e": "console 은 현재 state·구성 기반 ★표현식 평가 REPL★."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 1,
  "q": "환경변수 TF_VAR_region 은 terraform.tfvars 의 region 값보다 우선한다.",
  "a": false,
  "e": "환경변수는 ★tfvars 파일보다 낮음★."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "*.auto.tfvars 파일은 -var-file 로 지정하지 않아도 자동으로 로드된다.",
  "a": true,
  "e": "terraform.tfvars(.json)·*.auto.tfvars(.json) 는 ★자동 로드★."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "variable 블록의 default 에 var.other 같은 다른 변수 참조를 쓸 수 있다.",
  "a": false,
  "e": "default 는 ★리터럴 값만★. 파생값은 locals."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "terraform output NAME 으로 특정 sensitive 출력을 조회하면 실제 값이 표시된다.",
  "a": true,
  "e": "목록 표시에서는 <sensitive>, 이름 지정·-json 조회는 ★평문 표시★."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 1,
  "q": "variable 블록에 type 을 생략하면 어떤 타입의 값도 받을 수 있다(any).",
  "a": true,
  "e": "type 생략 = ★any★."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "자식 모듈의 output 은 부모 모듈로 값을 전달하는 유일한 공식 수단이다.",
  "a": true,
  "e": "부모 → 자식 = input variable, 자식 → 부모 = ★output★."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 1,
  "q": "set 타입 값은 var.s[0] 처럼 인덱스로 접근할 수 있다.",
  "a": false,
  "e": "set 은 순서가 없어 ★인덱스 불가★ — tolist() 후 접근."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 1,
  "q": "tuple 타입은 모든 원소가 같은 타입이어야 한다.",
  "a": false,
  "e": "tuple([string, number]) 처럼 ★위치별로 다른 타입★ 가능 — 같은 타입 제약은 list."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "map(number) 타입의 키는 숫자이다.",
  "a": false,
  "e": "map 의 키는 항상 ★string★, (number) 는 값 타입."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "object 타입 속성에 optional() 수식어를 써서 기본값을 지정하는 기능은 Terraform 1.3 부터 정식 지원된다.",
  "a": true,
  "e": "optional(type, default) ★1.3+★."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 3,
  "q": "type = list(number) 변수에 [\"1\", \"2\"] 를 넘기면 자동으로 [1, 2] 로 변환된다.",
  "a": true,
  "e": "숫자로 해석 가능한 문자열은 ★number 로 자동 변환★, \"a\" 같은 값은 오류."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "merge 함수에서 같은 키가 여러 map 에 있으면 첫 번째 map 의 값이 사용된다.",
  "a": false,
  "e": "★마지막 인수★ 값이 우선."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "jsonencode 는 map 의 키를 사전순으로 정렬해 출력한다.",
  "a": true,
  "e": "jsonencode({b=1,a=2}) = ★{\"a\":2,\"b\":1}★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "coalesce 함수는 null 과 빈 문자열을 건너뛰고 첫 번째 값을 반환한다.",
  "a": true,
  "e": "coalesce(\"\", \"b\") = ★\"b\"★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 3,
  "q": "try 함수는 선언되지 않은 리소스 참조 같은 정적 오류도 잡아 기본값을 반환한다.",
  "a": false,
  "e": "try 는 ★런타임 동적 오류만★ 처리. 어떤 입력에도 잘못인 식은 그대로 오류."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "splat 식 [*] 는 for_each 로 만든 리소스(map)에 바로 적용해 id 리스트를 얻는 용도로 쓴다.",
  "a": false,
  "e": "splat 은 list/set/tuple 용. for_each 결과는 map 이므로 ★values(...)[*].id 또는 for 식★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "cidrsubnet(\"10.0.0.0/16\", 8, 255) 의 결과는 \"10.0.255.0/24\" 이다.",
  "a": true,
  "e": "/24, netnum 255 → 세 번째 옥텟 ★255★."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 1,
  "q": "for 식을 중괄호 { } 로 감싸면 결과가 map(또는 object) 형태가 된다.",
  "a": true,
  "e": "{for k, v in ... : k => v} → ★map/object★, [ ] 는 list/tuple."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "dynamic 블록의 반복 변수 이름은 iterator 인수로 바꿀 수 있다.",
  "a": true,
  "e": "기본은 블록 라벨, ★iterator = rule★ 로 변경."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 1,
  "q": "element([\"a\", \"b\", \"c\"], 3) 은 범위 초과 오류를 낸다.",
  "a": false,
  "e": "element 는 ★순환(wrap)★ → 3 % 3 = 0 → \"a\"."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 1,
  "q": "count 와 for_each 는 같은 resource 블록에 함께 쓸 수 없다.",
  "a": true,
  "e": "★상호 배타★."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "for_each 에 list(string) 값을 그대로 넣을 수 있다.",
  "a": false,
  "e": "★map 또는 set(string)★ 만 — toset(var.list) 필요."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "depends_on 값으로 조건식 같은 임의 표현식을 쓸 수 있다.",
  "a": false,
  "e": "depends_on 은 ★정적 참조 목록★ 만 허용."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "ignore_changes 에 all 을 지정하면 생성 후 모든 속성 변경을 무시한다.",
  "a": true,
  "e": "ignore_changes = ★all★ 가능."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 3,
  "q": "replace_triggered_by 에는 입력 변수 var.app_version 을 직접 넣을 수 있다.",
  "a": false,
  "e": "★관리 리소스·속성만★ 참조 가능 — 변수는 terraform_data 리소스의 input 으로 감싸서 참조."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "create_before_destroy 는 이름이 고유해야 하는 리소스에서 이름 충돌을 일으킬 수 있다.",
  "a": true,
  "e": "새 객체가 먼저 생기므로 ★고유 이름 제약★ 주의(name_prefix 활용)."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "check 블록의 assert 가 실패하면 apply 가 오류로 중단된다.",
  "a": false,
  "e": "check 는 ★경고만★."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "postcondition 안에서는 self 로 해당 리소스의 속성을 참조할 수 있다.",
  "a": true,
  "e": "★self★ 참조 가능."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 1,
  "q": "precondition 은 variable 블록 안에 선언한다.",
  "a": false,
  "e": "variable 은 ★validation★, precondition 은 lifecycle·output."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 1,
  "q": "sensitive = true 로 표시한 값도 state 파일에는 평문으로 저장된다.",
  "a": true,
  "e": "sensitive 는 ★출력 마스킹만★."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 2,
  "q": "ephemeral = true 로 선언한 변수 값은 plan 파일과 state 에 저장되지 않는다.",
  "a": true,
  "e": "ephemeral 변수(★1.10+★) 는 미저장."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 2,
  "q": "Vault data source 로 읽은 시크릿은 state 에 저장되지 않는다.",
  "a": false,
  "e": "data 소스 결과는 ★state 에 저장★ — ephemeral 리소스로 회피."
 },
 {
  "s": "s5",
  "t": "모듈 개념",
  "d": 1,
  "q": "모든 Terraform 구성에는 최소 하나의 root module 이 있다.",
  "a": true,
  "e": "작업 디렉터리 구성 자체가 root module."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 1,
  "q": "source = \"modules/app\" 은 로컬 경로 모듈로 해석된다.",
  "a": false,
  "e": "./ 또는 ../ 로 시작해야 로컬. 그렇지 않으면 Registry 주소로 해석."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "Git 소스 모듈의 버전 고정에는 ?ref= 쿼리를 사용한다.",
  "a": true,
  "e": "태그·브랜치·커밋 SHA 지정 가능."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 1,
  "q": "version 인수는 로컬 경로 모듈에도 사용할 수 있다.",
  "a": false,
  "e": "Registry(public/private) 모듈 전용."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "자식 모듈은 부모 모듈의 locals 값을 직접 참조할 수 있다.",
  "a": false,
  "e": "모듈 스코프는 격리. module 인수로 전달."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 1,
  "q": "부모 모듈은 module.NAME.OUTPUT 형식으로 자식 output 에 접근한다.",
  "a": true,
  "e": "output 이 자식의 공개 인터페이스."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "module 블록은 count 와 for_each 메타 인수를 지원한다.",
  "a": true,
  "e": "0.13+ 지원, 단 둘을 동시에 쓸 수는 없다."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "alias 가 지정된 provider 구성은 자식 모듈에 자동으로 상속된다.",
  "a": false,
  "e": "자동 상속은 default 구성만. alias 는 providers 맵 필요."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": ".terraform.lock.hcl 은 모듈 버전을 기록하지 않는다.",
  "a": true,
  "e": "provider 버전·해시만 잠근다."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "공개 Registry 에 게시하려면 x.y.z 형식 릴리스 태그가 필요하다.",
  "a": true,
  "e": "v 접두 허용, 태그 푸시 시 새 버전 반영."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 1,
  "q": "원격 모듈은 terraform init 시 .terraform/modules 에 다운로드된다.",
  "a": true,
  "e": "provider 는 .terraform/providers."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "모듈 source 값에 변수를 사용해 동적으로 경로를 바꿀 수 있다.",
  "a": false,
  "e": "source 는 리터럴만 허용(init 시 해석)."
 },
 {
  "s": "s5",
  "t": "모듈 개념",
  "d": 2,
  "q": "child 모듈의 리소스는 루트와 별도 state 파일에 저장된다.",
  "a": false,
  "e": "같은 state 에 module.NAME 접두 주소로 저장."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "private registry 모듈 주소는 호스트명을 포함한 4단 형식이다.",
  "a": true,
  "e": "HOSTNAME/NAMESPACE/NAME/PROVIDER."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "default 가 없는 자식 모듈 변수는 module 블록에서 필수 인수가 된다.",
  "a": true,
  "e": "누락 시 오류."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 3,
  "q": "모듈 내부에 provider 블록이 있으면 그 모듈을 for_each 로 호출할 수 없다.",
  "a": true,
  "e": "legacy 모듈은 count·for_each·depends_on 불가."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "version 을 생략한 Registry 모듈은 init 시 최신 버전이 선택된다.",
  "a": true,
  "e": "버전 고정 권장 이유."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "자식 모듈의 output 은 루트 output 으로 재노출하지 않아도 terraform output 에 표시된다.",
  "a": false,
  "e": "terraform output 은 root output 만."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 3,
  "q": "~> 2.3.0 은 2.4.0 버전을 허용한다.",
  "a": false,
  "e": ">= 2.3.0, < 2.4.0 — 패치만."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "terraform get 은 모듈만 다운로드하며 backend 를 초기화하지 않는다.",
  "a": true,
  "e": "init 은 backend·provider·모듈 모두."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 1,
  "q": "backend 를 선언하지 않으면 local backend 가 사용된다.",
  "a": true,
  "e": "기본 terraform.tfstate."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "local backend 는 state locking 을 지원하지 않는다.",
  "a": false,
  "e": "로컬 시스템 API 로 잠금 지원."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 1,
  "q": "terraform force-unlock 은 잠금 ID 를 인수로 받는다.",
  "a": true,
  "e": "terraform force-unlock LOCK_ID."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "backend 블록에서 var. 참조를 사용할 수 있다.",
  "a": false,
  "e": "변수·locals 불가, -backend-config 사용."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "S3 backend 의 dynamodb_table 잠금은 Terraform 1.11 에서 deprecated 되었다.",
  "a": true,
  "e": "use_lockfile = true 가 대안(1.10+)."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "terraform init -reconfigure 는 기존 상태를 새 backend 로 복사한다.",
  "a": false,
  "e": "복사는 -migrate-state. -reconfigure 는 기존 설정 무시."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 2,
  "q": "terraform_remote_state 는 대상 구성의 모든 리소스 속성을 읽을 수 있다.",
  "a": false,
  "e": "root module output 만."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "apply -refresh-only 는 실제 인프라를 변경하지 않는다.",
  "a": true,
  "e": "상태만 실제에 맞춘다."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 1,
  "q": "terraform taint 는 deprecated 이며 apply -replace 로 대체된다.",
  "a": true,
  "e": "-replace 는 plan 단계에서 검토 가능."
 },
 {
  "s": "s6",
  "t": "state 리팩터링",
  "d": 3,
  "q": "removed 블록에 lifecycle 을 생략하면 실제 리소스는 유지되고 상태에서만 제거된다.",
  "a": false,
  "e": "기본 destroy = true → 실제 삭제. 유지하려면 destroy = false."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 2,
  "q": "state 파일은 민감값이 평문으로 들어갈 수 있으므로 보호해야 한다.",
  "a": true,
  "e": "sensitive 는 출력 마스킹만."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "-lock-timeout 의 기본값은 0s 이다.",
  "a": true,
  "e": "즉시 실패, 지정 시 재시도."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 3,
  "q": "잠금 충돌이 나면 -lock=false 로 실행하는 것이 권장 해결책이다.",
  "a": false,
  "e": "동시 쓰기로 상태 손상 위험. 원인 확인 후 대기·force-unlock."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 1,
  "q": "하나의 구성에는 backend 블록을 하나만 둘 수 있다.",
  "a": true,
  "e": "여러 backend 동시 사용 불가."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "backend 설정을 바꾸면 terraform init 을 다시 실행해야 한다.",
  "a": true,
  "e": "init 이 변경을 감지해 이전 여부를 묻는다."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 3,
  "q": "terraform_remote_state 로 값을 읽으려면 읽는 쪽에 대상 상태 읽기 권한이 필요하다.",
  "a": true,
  "e": "상태 스냅샷 전체 접근 → 최소권한 검토."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "plan -refresh-only 는 상태 파일을 변경한다.",
  "a": false,
  "e": "plan 은 계획만, 반영은 apply -refresh-only."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "-refresh=false 를 쓰면 드리프트가 감지되지 않을 수 있다.",
  "a": true,
  "e": "새로고침 생략."
 },
 {
  "s": "s6",
  "t": "state 리팩터링",
  "d": 2,
  "q": "moved 블록은 리소스 이름 변경 시 재생성을 방지한다.",
  "a": true,
  "e": "1.1+, 상태 주소 이동."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "S3 backend 에서 TF_VAR_ 환경변수로 bucket 값을 지정할 수 있다.",
  "a": false,
  "e": "TF_VAR_ 은 input variable 용. backend 는 -backend-config."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 1,
  "q": "terraform import 명령은 대상 리소스의 resource 블록을 자동 생성한다.",
  "a": false,
  "e": "state 만 갱신. 구성 생성은 import 블록 + plan -generate-config-out."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 1,
  "q": "terraform import 는 원격 backend(예 S3, HCP Terraform)를 사용할 때도 동작한다.",
  "a": true,
  "e": "state 가 원격이어도 import 결과는 해당 backend 에 기록된다."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 2,
  "q": "명령형 terraform import 는 실행 전 plan 으로 결과를 미리 검토할 수 있다.",
  "a": false,
  "e": "즉시 state 에 기록된다. 미리보기가 필요하면 import 블록 사용."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 1,
  "q": "import 블록은 Terraform 1.5 부터 지원된다.",
  "a": true,
  "e": "1.5 도입, 1.7 에서 for_each 지원 추가."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 블록은 자식 모듈 내부에도 선언할 수 있다.",
  "a": false,
  "e": "root module 에만 선언. to 주소는 모듈 내부 리소스를 가리킬 수 있다."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "-generate-config-out 으로 지정한 파일이 이미 존재하면 Terraform 은 내용을 덧붙여 쓴다.",
  "a": false,
  "e": "기존 파일이 있으면 오류. 새 파일명을 지정해야 한다."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 블록의 to 와 id 는 각각 대상 리소스 주소와 provider 의 import ID 이다.",
  "a": true,
  "e": "예: import { to = aws_instance.web  id = \"i-0abc\" }"
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 3,
  "q": "import 블록이 이미 state 에 있는 주소를 가리키면 apply 때마다 리소스를 다시 가져와 덮어쓴다.",
  "a": false,
  "e": "이미 관리 중이면 import 는 무시된다(멱등)."
 },
 {
  "s": "s7",
  "t": "state 조회",
  "d": 1,
  "q": "terraform state list 는 리소스 주소를, terraform state show 는 리소스 1개의 속성을 출력한다.",
  "a": true,
  "e": "list = 목록, show = 상세."
 },
 {
  "s": "s7",
  "t": "state 조회",
  "d": 2,
  "q": "terraform show 는 인자 없이 실행하면 현재 state 를 사람이 읽기 쉬운 형식으로 출력한다.",
  "a": true,
  "e": "plan 파일을 인자로 주면 해당 plan 을 출력."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 1,
  "q": "terraform state rm 을 실행하면 해당 클라우드 리소스가 삭제된다.",
  "a": false,
  "e": "state 에서만 제거, 실물은 유지."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "terraform state mv 는 리소스를 파괴·재생성하지 않고 state 상의 주소만 바꾼다.",
  "a": true,
  "e": "구성 코드의 주소도 함께 맞춰야 한다."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "로컬 state 에서 state mv/rm 을 실행하면 백업 파일이 자동으로 남는다.",
  "a": true,
  "e": "terraform.tfstate.backup 등 백업 생성(-backup 옵션으로 경로 지정)."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 3,
  "q": "팀 공유 모듈의 리소스 이름 변경은 state mv 보다 moved 블록이 권장된다.",
  "a": true,
  "e": "moved 블록은 코드로 배포돼 모든 사용자 state 에 동일 적용."
 },
 {
  "s": "s7",
  "t": "state 동기화",
  "d": 1,
  "q": "terraform state pull 은 state 를 현재 디렉터리의 terraform.tfstate 로 자동 저장한다.",
  "a": false,
  "e": "stdout 출력. 파일 저장은 리다이렉트."
 },
 {
  "s": "s7",
  "t": "state 동기화",
  "d": 2,
  "q": "terraform state push 는 lineage 가 다르면 기본적으로 거부한다.",
  "a": true,
  "e": "-force 로 강제 가능하나 위험."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 1,
  "q": "TF_LOG 레벨 중 ERROR 가 가장 상세한 로그를 남긴다.",
  "a": false,
  "e": "TRACE 가 가장 상세, ERROR 가 가장 간략."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 1,
  "q": "TF_LOG 의 기본 출력 대상은 표준 오류(stderr)이다.",
  "a": true,
  "e": "파일로 남기려면 TF_LOG_PATH 지정."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 2,
  "q": "TF_LOG_PATH 만 설정하면 기본 INFO 레벨 로그가 파일에 기록된다.",
  "a": false,
  "e": "레벨(TF_LOG 등) 설정이 있어야 기록된다."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 2,
  "q": "TF_LOG_CORE 와 TF_LOG_PROVIDER 로 코어와 provider 로그 레벨을 따로 지정할 수 있다.",
  "a": true,
  "e": "범위를 좁혀 로그량 절감."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 1,
  "q": "HCP Terraform 은 이전 명칭이 Terraform Cloud 이다.",
  "a": true,
  "e": "개명. 기능 계열 동일."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 1,
  "q": "Terraform Enterprise 는 HashiCorp 가 운영하는 멀티테넌트 SaaS 이다.",
  "a": false,
  "e": "Enterprise 는 자체 호스팅. SaaS 는 HCP Terraform."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 2,
  "q": "VCS-driven workspace 에서 PR 을 열면 apply 가능한 run 이 생성된다.",
  "a": false,
  "e": "PR 은 speculative plan(apply 불가). 머지 시 실제 run."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 2,
  "q": "API-driven workflow 는 외부 CI/CD 가 configuration version 을 업로드하고 run 을 생성한다.",
  "a": true,
  "e": "가장 유연한 통합 방식."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 1,
  "q": "local execution mode 에서도 state 는 HCP Terraform 에 저장된다.",
  "a": true,
  "e": "실행만 로컬, state·잠금은 HCP."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "agent execution mode 를 쓰려면 사설망에서 HCP 로 인바운드 포트를 열어야 한다.",
  "a": false,
  "e": "agent 는 HCP 로 아웃바운드 연결해 작업을 가져온다 [확인필요: 네트워크 요구사항 세부]."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "Sentinel 정책 검사는 plan 이후 apply 이전에 수행된다.",
  "a": true,
  "e": "plan 결과를 평가."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "run triggers 는 외부 보안 스캐너를 run 단계에 연동하는 기능이다.",
  "a": false,
  "e": "그것은 run tasks. run triggers 는 workspace 연쇄 실행."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 3,
  "q": "health assessments 의 drift detection 은 감지한 drift 를 자동으로 apply 해 복구한다.",
  "a": false,
  "e": "감지·알림 기능. 복구는 사용자가 run 으로 수행."
 },
 {
  "s": "s8",
  "t": "협업·권한",
  "d": 1,
  "q": "HCP Terraform 의 owners 팀은 organization 전체를 관리할 수 있다.",
  "a": true,
  "e": "기본 관리자 팀."
 },
 {
  "s": "s8",
  "t": "협업·권한",
  "d": 2,
  "q": "HCP Terraform 권한은 project 수준에서도 팀에 부여할 수 있다.",
  "a": true,
  "e": "organization / project / workspace 수준."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 1,
  "q": "hard-mandatory 정책 실패는 organization owner 가 override 할 수 있다.",
  "a": false,
  "e": "override 불가. override 가능은 soft-mandatory."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "HCP Terraform 은 Sentinel 외에 OPA(Open Policy Agent) 정책도 지원한다.",
  "a": true,
  "e": "Rego 언어 정책."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "private registry 모듈은 source 에 app.terraform.io/ORG/NAME/PROVIDER 형식을 사용한다.",
  "a": true,
  "e": "Enterprise 는 자체 호스트명."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 1,
  "q": "HCP Terraform workspace 와 CLI workspace 는 동일하게 state 만 분리하는 개념이다.",
  "a": false,
  "e": "HCP workspace 는 변수·이력·권한까지 포함."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 2,
  "q": "variable set 은 여러 workspace 와 project 에 공통 변수를 적용할 수 있다.",
  "a": true,
  "e": "자격증명·공통 태그 등."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 2,
  "q": "sensitive 로 표시한 workspace 변수는 저장 후 UI 에서 값을 다시 확인할 수 있다.",
  "a": false,
  "e": "write-only — 재조회 불가, 덮어쓰기만 가능."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 1,
  "q": "cloud 블록과 backend 블록은 같은 구성에서 동시에 사용할 수 있다.",
  "a": false,
  "e": "동시 사용 불가."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 2,
  "q": "cloud 블록 추가 후 terraform init 을 실행하면 기존 로컬 state 를 HCP workspace 로 이전할지 묻는다.",
  "a": true,
  "e": "state 마이그레이션 프롬프트."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 2,
  "q": "terraform login 은 발급받은 토큰을 credentials.tfrc.json 파일에 저장한다.",
  "a": true,
  "e": "기본 ~/.terraform.d/credentials.tfrc.json."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 1,
  "q": "인프라를 코드로 정의·버전관리하는 방식의 약어는?",
  "a": "IaC",
  "k": [
   "IaC",
   "Infrastructure as Code",
   "코드형 인프라"
  ],
  "e": "Infrastructure as Code."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 1,
  "q": "Terraform 구성 언어의 약어(HashiCorp Configuration Language)는?",
  "a": "HCL",
  "k": [
   "HCL"
  ],
  "e": ".tf 파일에 쓰는 선언형 언어."
 },
 {
  "s": "s1",
  "t": "IaC 정의",
  "d": 1,
  "q": "HCL 대신 JSON 문법으로 작성한 Terraform 구성 파일의 확장자는?",
  "a": ".tf.json",
  "k": [
   "tf.json"
  ],
  "e": "JSON 형식도 구성 파일로 인식."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 1,
  "q": "'목표 상태(what)'를 기술하는 IaC 방식(영문)은?",
  "a": "Declarative",
  "k": [
   "declarative",
   "선언형"
  ],
  "e": "Terraform 은 선언형."
 },
 {
  "s": "s1",
  "t": "선언형 vs 명령형",
  "d": 2,
  "q": "같은 작업을 여러 번 수행해도 결과가 같은 성질(영문)은?",
  "a": "Idempotency",
  "k": [
   "idempoten",
   "멱등"
  ],
  "e": "두 번째 apply 의 'No changes'."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "콘솔 수작업 등으로 실제 인프라가 구성과 달라지는 현상(영문 2단어)은?",
  "a": "Configuration drift",
  "k": [
   "drift",
   "드리프트"
  ],
  "e": "plan 으로 탐지, apply 로 교정."
 },
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 1,
  "q": "적용 전에 변경 내용을 미리 보여 주는 Terraform 명령은?",
  "a": "terraform plan",
  "k": [
   "plan"
  ],
  "e": "실행 계획 검토."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 1,
  "q": "Terraform 이 각 플랫폼 API 와 통신하게 해 주는 플러그인은?",
  "a": "provider",
  "k": [
   "provider",
   "프로바이더"
  ],
  "e": "AWS·Azure·GitHub 등 provider."
 },
 {
  "s": "s1",
  "t": "멀티클라우드",
  "d": 2,
  "q": "온프레미스와 퍼블릭 클라우드를 함께 쓰는 환경(영문 2단어)은?",
  "a": "Hybrid cloud",
  "k": [
   "hybrid",
   "하이브리드"
  ],
  "e": "Terraform 은 vSphere 등 온프레미스도 관리."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 2,
  "q": "리소스를 수정하지 않고 교체하는 인프라 패턴(영문)은?",
  "a": "Immutable infrastructure",
  "k": [
   "immutable",
   "불변"
  ],
  "e": "Packer + Terraform 조합이 대표."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 2,
  "q": "불변 인프라용 머신 이미지를 빌드하는 HashiCorp 도구는?",
  "a": "Packer",
  "k": [
   "packer"
  ],
  "e": "Packer 로 이미지, Terraform 으로 배포."
 },
 {
  "s": "s1",
  "t": "도구 비교",
  "d": 2,
  "q": "AWS 전용 선언형 IaC 서비스는?",
  "a": "CloudFormation",
  "k": [
   "cloudformation",
   "CFN"
  ],
  "e": "Terraform 과 달리 AWS 전용."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 1,
  "q": "provider source·version 을 선언하는 terraform 블록 안의 중첩 블록 이름은?",
  "a": "required_providers",
  "k": [
   "required_providers"
  ],
  "e": "terraform { required_providers { ... } }."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "provider 소스 주소에서 호스트 생략 시 기본 호스트는?",
  "a": "registry.terraform.io",
  "k": [
   "registry.terraform.io"
  ],
  "e": "public Terraform Registry."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 1,
  "q": "init 이 provider 플러그인을 설치하는 디렉터리는?",
  "a": ".terraform/providers",
  "k": [
   ".terraform"
  ],
  "e": "작업 디렉터리 하위."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 1,
  "q": "provider 버전·해시를 기록하는 의존성 잠금 파일 이름은?",
  "a": ".terraform.lock.hcl",
  "k": [
   "terraform.lock.hcl",
   "lock.hcl"
  ],
  "e": "init 이 생성, 커밋 권장."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "lock 파일을 제약 범위 내 최신 버전으로 갱신하는 init 옵션은?",
  "a": "-upgrade",
  "k": [
   "upgrade"
  ],
  "e": "terraform init -upgrade."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "Terraform CLI 버전을 제약하는 terraform 블록 인수는?",
  "a": "required_version",
  "k": [
   "required_version"
  ],
  "e": "예 >= 1.12.0."
 },
 {
  "s": "s2",
  "t": "provider 버전",
  "d": 2,
  "q": "~> 3.4.0 의 상한(미포함) 버전은?",
  "a": "3.5.0",
  "k": [
   "3.5.0",
   "3.5"
  ],
  "e": ">=3.4.0, <3.5.0."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 1,
  "q": "같은 provider 의 추가 구성을 구분하는 인수는?",
  "a": "alias",
  "k": [
   "alias"
  ],
  "e": "provider \"aws\" { alias = \"west\" }."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 2,
  "q": "자식 모듈이 받을 alias provider 를 선언하는 required_providers 내부 인수는?",
  "a": "configuration_aliases",
  "k": [
   "configuration_aliases"
  ],
  "e": "예 configuration_aliases = [aws.replica]."
 },
 {
  "s": "s2",
  "t": "state 개념",
  "d": 1,
  "q": "local backend 의 기본 state 파일 이름은?",
  "a": "terraform.tfstate",
  "k": [
   "terraform.tfstate",
   "tfstate"
  ],
  "e": "백업은 terraform.tfstate.backup."
 },
 {
  "s": "s2",
  "t": "state 관리",
  "d": 2,
  "q": "잔존한 state 잠금을 수동 해제하는 명령은?",
  "a": "terraform force-unlock",
  "k": [
   "force-unlock"
  ],
  "e": "terraform force-unlock LOCK_ID."
 },
 {
  "s": "s2",
  "t": "state 관리",
  "d": 2,
  "q": "다른 구성 state 의 root module output 을 읽는 데이터 소스는?",
  "a": "terraform_remote_state",
  "k": [
   "terraform_remote_state",
   "remote_state"
  ],
  "e": "HCP 는 tfe_outputs 도 제공."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 1,
  "q": "작업 디렉터리를 초기화(backend·provider·모듈)하는 명령은?",
  "a": "terraform init",
  "k": [
   "init"
  ],
  "e": "최초 1회 + 변경 시."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "backend 변경 시 기존 state 를 새 backend 로 옮기는 init 옵션은?",
  "a": "-migrate-state",
  "k": [
   "migrate-state",
   "migrate"
  ],
  "e": "-reconfigure 는 이전 안 함."
 },
 {
  "s": "s3",
  "t": "init",
  "d": 2,
  "q": "backend 블록에 값을 외부에서 주입하는 init 옵션(부분 구성)은?",
  "a": "-backend-config",
  "k": [
   "backend-config"
  ],
  "e": "파일 또는 key=value."
 },
 {
  "s": "s3",
  "t": "validate",
  "d": 1,
  "q": "구성의 문법·내부 일관성을 검사하는 명령은?",
  "a": "terraform validate",
  "k": [
   "validate"
  ],
  "e": "원격 호출 없음."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 1,
  "q": "plan 을 파일로 저장하는 옵션은?",
  "a": "-out",
  "k": [
   "-out",
   "out="
  ],
  "e": "terraform plan -out=tfplan."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "plan 기호 중 data 소스 읽기를 뜻하는 기호는?",
  "a": "<=",
  "k": [
   "<="
  ],
  "e": "+ 생성, - 삭제, ~ 변경."
 },
 {
  "s": "s3",
  "t": "plan",
  "d": 2,
  "q": "실제 변경을 state 에만 반영하는 plan/apply 모드 옵션은?",
  "a": "-refresh-only",
  "k": [
   "refresh-only"
  ],
  "e": "terraform refresh 대체."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 1,
  "q": "apply 승인 프롬프트를 생략하는 옵션은?",
  "a": "-auto-approve",
  "k": [
   "auto-approve"
  ],
  "e": "자동화용."
 },
 {
  "s": "s3",
  "t": "apply",
  "d": 2,
  "q": "taint 를 대체해 특정 리소스를 강제 재생성하는 apply 옵션은?",
  "a": "-replace",
  "k": [
   "-replace",
   "replace="
  ],
  "e": "terraform apply -replace=ADDR."
 },
 {
  "s": "s3",
  "t": "destroy",
  "d": 1,
  "q": "terraform destroy 와 같은 동작의 apply 옵션은?",
  "a": "-destroy",
  "k": [
   "-destroy",
   "apply -destroy"
  ],
  "e": "plan -destroy 는 미리보기."
 },
 {
  "s": "s3",
  "t": "fmt",
  "d": 1,
  "q": "구성 파일을 표준 스타일로 서식화하는 명령은?",
  "a": "terraform fmt",
  "k": [
   "fmt"
  ],
  "e": "-recursive·-check·-diff."
 },
 {
  "s": "s3",
  "t": "fmt",
  "d": 2,
  "q": "fmt 가 하위 디렉터리까지 처리하도록 하는 옵션은?",
  "a": "-recursive",
  "k": [
   "recursive"
  ],
  "e": "기본은 현재 디렉터리."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 1,
  "q": "기존 객체 정보를 읽기 전용으로 조회하는 블록 유형은?",
  "a": "data",
  "k": [
   "data"
  ],
  "e": "data 블록 = data source."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "plan 출력에서 data 소스 읽기를 나타내는 기호는?",
  "a": "<=",
  "k": [
   "<="
  ],
  "e": "<= read (data resources)."
 },
 {
  "s": "s4",
  "t": "resource·data",
  "d": 2,
  "q": "비기본 provider 구성(alias)을 리소스에 지정하는 메타 인수는?",
  "a": "provider",
  "k": [
   "provider"
  ],
  "e": "provider = aws.west."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "count 리소스 블록 안에서 현재 인스턴스 번호를 나타내는 식은?",
  "a": "count.index",
  "k": [
   "count.index"
  ],
  "e": "0부터 시작."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 1,
  "q": "for_each 블록 안에서 현재 원소의 키를 나타내는 식은?",
  "a": "each.key",
  "k": [
   "each.key"
  ],
  "e": "값은 each.value."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "현재 식이 들어 있는 모듈의 파일시스템 경로를 나타내는 named value 는?",
  "a": "path.module",
  "k": [
   "path.module"
  ],
  "e": "templatefile 경로 기준."
 },
 {
  "s": "s4",
  "t": "참조·속성",
  "d": 2,
  "q": "모듈 내부 계산값을 정의하는 블록 이름은?",
  "a": "locals",
  "k": [
   "locals"
  ],
  "e": "참조는 local.NAME."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 1,
  "q": "변수 값을 환경변수로 전달할 때 붙이는 접두어는?",
  "a": "TF_VAR_",
  "k": [
   "TF_VAR_",
   "TF_VAR"
  ],
  "e": "예 TF_VAR_region."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "terraform.tfvars 외에 자동 로드되는 변수 파일의 이름 패턴은?",
  "a": "*.auto.tfvars",
  "k": [
   "auto.tfvars"
  ],
  "e": "파일명 사전순 로드, terraform.tfvars 보다 우선."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "모든 출력값을 민감값까지 포함해 기계 판독 형식으로 출력하는 terraform output 플래그는?",
  "a": "-json",
  "k": [
   "-json",
   "json"
  ],
  "e": "-json 은 sensitive 값도 평문."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "모듈 호출자가 null 을 넘겨도 변수 값이 null 이 되지 않게 하는 variable 인수는?",
  "a": "nullable = false",
  "k": [
   "nullable"
  ],
  "e": "null → default 대체."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 1,
  "q": "object 타입 속성을 생략 가능하게 하는 타입 수식어는?",
  "a": "optional",
  "k": [
   "optional"
  ],
  "e": "optional(string, \"x\") 1.3+."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "리스트를 중복 제거된 set 으로 변환하는 함수는?",
  "a": "toset",
  "k": [
   "toset"
  ],
  "e": "for_each 입력 변환에 사용."
 },
 {
  "s": "s4",
  "t": "복합 타입",
  "d": 2,
  "q": "속성 이름은 고정이고 속성마다 타입이 다른 구조 타입은?",
  "a": "object",
  "k": [
   "object"
  ],
  "e": "위치 기반은 tuple."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "cidrsubnet(\"10.0.0.0/16\", 8, 5) 의 결과는?",
  "a": "10.0.5.0/24",
  "k": [
   "10.0.5.0/24"
  ],
  "e": "16+8=/24, netnum 5."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 1,
  "q": "join(\",\", [\"x\", \"y\"]) 의 결과 문자열은?",
  "a": "x,y",
  "k": [
   "x,y"
  ],
  "e": "구분자로 연결."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 1,
  "q": "length(\"terraform\") 의 결과는?",
  "a": "9",
  "k": [
   "9"
  ],
  "e": "문자 수 9."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "for 식에서 원소를 걸러내는 키워드는?",
  "a": "if",
  "k": [
   "if"
  ],
  "e": "[for n in l : n if n > 0]."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "count 리소스의 속성을 리스트로 일괄 추출하는 [*] 연산자의 이름은?",
  "a": "splat",
  "k": [
   "splat",
   "[*]"
  ],
  "e": "aws_instance.web[*].id."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "중첩 리스트를 한 단계 리스트로 펼치는 함수는?",
  "a": "flatten",
  "k": [
   "flatten"
  ],
  "e": "빈 리스트 제거."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "키 리스트와 값 리스트로 map 을 만드는 함수는?",
  "a": "zipmap",
  "k": [
   "zipmap"
  ],
  "e": "zipmap([\"a\"],[1]) = {a=1}."
 },
 {
  "s": "s4",
  "t": "표현식·함수",
  "d": 2,
  "q": "dynamic 블록의 반복 변수 이름을 바꾸는 인수는?",
  "a": "iterator",
  "k": [
   "iterator"
  ],
  "e": "기본은 블록 라벨."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 1,
  "q": "참조 관계가 없는 숨은 의존성을 명시하는 메타 인수는?",
  "a": "depends_on",
  "k": [
   "depends_on"
  ],
  "e": "정적 참조 목록."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "삭제를 포함한 plan 을 오류로 거부하는 lifecycle 인수는?",
  "a": "prevent_destroy",
  "k": [
   "prevent_destroy"
  ],
  "e": "블록이 구성에 있을 때만 유효."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "외부에서 바뀐 속성을 무시하는 lifecycle 인수는?",
  "a": "ignore_changes",
  "k": [
   "ignore_changes"
  ],
  "e": "all 지정 가능."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 1,
  "q": "check 블록 안에서 조건을 단언하는 중첩 블록 이름은?",
  "a": "assert",
  "k": [
   "assert"
  ],
  "e": "실패 시 경고."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 2,
  "q": "식 평가 성공 여부를 bool 로 반환해 validation 에 자주 쓰는 함수는?",
  "a": "can",
  "k": [
   "can"
  ],
  "e": "can(regex(...))."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 2,
  "q": "state 와 plan 에 저장되지 않는 리소스를 선언하는 블록 키워드는?(1.10+)",
  "a": "ephemeral",
  "k": [
   "ephemeral"
  ],
  "e": "ephemeral \"TYPE\" \"NAME\" {}."
 },
 {
  "s": "s5",
  "t": "모듈 개념",
  "d": 1,
  "q": "terraform 명령을 실행하는 작업 디렉터리의 구성을 무엇이라 하는가?",
  "a": "root module",
  "k": [
   "root",
   "루트"
  ],
  "e": "자식은 child module."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 1,
  "q": "로컬 경로 모듈 source 는 반드시 어떤 접두로 시작해야 하는가? (현재 디렉터리 기준)",
  "a": "./",
  "k": [
   "./",
   "../"
  ],
  "e": "./ 또는 ../."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "Git 소스에서 태그 v1.0 을 고정하는 쿼리 문자열은?",
  "a": "?ref=v1.0",
  "k": [
   "ref"
  ],
  "e": "git::https://...?ref=v1.0."
 },
 {
  "s": "s5",
  "t": "모듈 source",
  "d": 2,
  "q": "모듈 source 에서 저장소 내부 하위 디렉터리를 구분하는 기호는?",
  "a": "//",
  "k": [
   "//"
  ],
  "e": "repo.git//modules/vpc."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 1,
  "q": "자식 모듈 'db' 의 output 'endpoint' 참조 문법은?",
  "a": "module.db.endpoint",
  "k": [
   "module.db.endpoint"
  ],
  "e": "module.NAME.OUTPUT."
 },
 {
  "s": "s5",
  "t": "변수 스코프",
  "d": 2,
  "q": "부모가 자식 모듈로 값을 전달할 때 자식 쪽에 선언하는 블록은?",
  "a": "variable",
  "k": [
   "variable",
   "input variable",
   "입력 변수"
  ],
  "e": "module 인수 → 자식 variable."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 1,
  "q": "원격 모듈이 설치되는 디렉터리는?",
  "a": ".terraform/modules",
  "k": [
   ".terraform/modules"
  ],
  "e": "provider 는 .terraform/providers."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "alias provider 구성을 자식 모듈에 넘기는 module 블록 인수는?",
  "a": "providers",
  "k": [
   "providers"
  ],
  "e": "providers = { aws = aws.west }."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "자식 모듈이 alias provider 를 받기 위해 required_providers 에 선언하는 속성은?",
  "a": "configuration_aliases",
  "k": [
   "configuration_aliases"
  ],
  "e": "configuration_aliases = [aws.dst]."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 1,
  "q": "Registry 모듈 버전을 지정하는 module 블록 인수는?",
  "a": "version",
  "k": [
   "version"
  ],
  "e": "Registry 전용."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "제약 범위 내 최신 모듈 버전을 다시 받는 init 옵션은?",
  "a": "-upgrade",
  "k": [
   "upgrade"
  ],
  "e": "terraform init -upgrade."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 2,
  "q": "공개 Registry 모듈 저장소 이름 형식은? (terraform-?-?)",
  "a": "terraform-<PROVIDER>-<NAME>",
  "k": [
   "terraform-<provider>-<name>",
   "terraform-aws-"
  ],
  "e": "예 terraform-aws-vpc."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 1,
  "q": "local backend 의 기본 상태 파일 이름은?",
  "a": "terraform.tfstate",
  "k": [
   "terraform.tfstate"
  ],
  "e": "백업은 terraform.tfstate.backup."
 },
 {
  "s": "s6",
  "t": "local backend",
  "d": 2,
  "q": "local backend 에서 non-default workspace 상태가 저장되는 디렉터리는?",
  "a": "terraform.tfstate.d",
  "k": [
   "tfstate.d"
  ],
  "e": "terraform.tfstate.d/<이름>/."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 1,
  "q": "남아 있는 상태 잠금을 수동 해제하는 명령은?",
  "a": "terraform force-unlock",
  "k": [
   "force-unlock"
  ],
  "e": "잠금 ID 필요."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "잠금 획득을 기다리는 시간을 지정하는 옵션은?",
  "a": "-lock-timeout",
  "k": [
   "lock-timeout"
  ],
  "e": "기본 0s."
 },
 {
  "s": "s6",
  "t": "state locking",
  "d": 2,
  "q": "Terraform 1.10+ S3 backend 네이티브 잠금을 켜는 인수는? (이름 = true)",
  "a": "use_lockfile",
  "k": [
   "use_lockfile"
  ],
  "e": "dynamodb_table 대체."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "backend 블록에 넣지 못한 값을 init 시 주입하는 옵션은?",
  "a": "-backend-config",
  "k": [
   "backend-config"
  ],
  "e": "부분 구성(partial configuration)."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "backend 변경 시 기존 상태를 새 backend 로 옮기는 init 옵션은?",
  "a": "-migrate-state",
  "k": [
   "migrate-state"
  ],
  "e": "-reconfigure 는 이전 없음."
 },
 {
  "s": "s6",
  "t": "remote state",
  "d": 1,
  "q": "다른 구성의 root output 을 읽는 데이터 소스 이름은?",
  "a": "terraform_remote_state",
  "k": [
   "terraform_remote_state",
   "remote_state"
  ],
  "e": "data.terraform_remote_state.NAME.outputs.X."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 1,
  "q": "인프라 변경 없이 상태만 실제와 맞추는 plan/apply 옵션은?",
  "a": "-refresh-only",
  "k": [
   "refresh-only"
  ],
  "e": "refresh 대체."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "terraform taint 를 대체하는 apply 옵션은?",
  "a": "-replace",
  "k": [
   "replace"
  ],
  "e": "apply -replace=ADDR."
 },
 {
  "s": "s6",
  "t": "state 리팩터링",
  "d": 2,
  "q": "리소스 주소 변경 시 재생성을 막는 선언적 블록은? (1.1+)",
  "a": "moved",
  "k": [
   "moved"
  ],
  "e": "from/to 지정."
 },
 {
  "s": "s6",
  "t": "state 리팩터링",
  "d": 3,
  "q": "removed 블록에서 실제 리소스를 유지하려면 lifecycle 안에 무엇을 지정하는가?",
  "a": "destroy = false",
  "k": [
   "destroy = false",
   "destroy=false"
  ],
  "e": "기본은 destroy = true."
 },
 {
  "s": "s7",
  "t": "import 명령",
  "d": 1,
  "q": "기존 리소스를 state 로 가져오는 CLI 하위 명령은 terraform ____ 이다.",
  "a": "import",
  "k": [
   "import"
  ],
  "e": "terraform import ADDR ID"
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 1,
  "q": "import 블록에서 대상 리소스 주소를 지정하는 인수 이름은?",
  "a": "to",
  "k": [
   "to"
  ],
  "e": "import { to = ADDR  id = ID }"
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 대상의 HCL 구성을 생성하려면 terraform plan 에 어떤 옵션을 붙이는가?",
  "a": "-generate-config-out",
  "k": [
   "generate-config-out"
  ],
  "e": "terraform plan -generate-config-out=generated.tf"
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 블록에서 여러 인스턴스를 일괄 import 하기 위해 1.7 부터 쓸 수 있는 메타 인수는?",
  "a": "for_each",
  "k": [
   "for_each"
  ],
  "e": "count 가 아니라 for_each."
 },
 {
  "s": "s7",
  "t": "state 조회",
  "d": 1,
  "q": "state 의 리소스 주소 목록을 출력하는 명령은 terraform state ____ 이다.",
  "a": "list",
  "k": [
   "list"
  ],
  "e": "show 는 리소스 1개 상세."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 1,
  "q": "실물은 남기고 Terraform 관리에서만 제외하는 state 하위 명령은?",
  "a": "rm",
  "k": [
   "rm",
   "state rm"
  ],
  "e": "terraform state rm ADDR"
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "state mv 의 선언형 대체로 1.1 에 도입된 블록은?",
  "a": "moved",
  "k": [
   "moved"
  ],
  "e": "moved { from = ...  to = ... }"
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "state rm 의 선언형 대체로 1.7 에 도입된 블록은?",
  "a": "removed",
  "k": [
   "removed"
  ],
  "e": "removed { from = ADDR  lifecycle { destroy = false } }"
 },
 {
  "s": "s7",
  "t": "state 동기화",
  "d": 2,
  "q": "원격 state 를 JSON 으로 stdout 에 출력하는 state 하위 명령은?",
  "a": "pull",
  "k": [
   "pull",
   "state pull"
  ],
  "e": "백업: terraform state pull > backup.tfstate"
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 1,
  "q": "TF_LOG 에서 가장 상세한 로그 레벨은?",
  "a": "TRACE",
  "k": [
   "trace"
  ],
  "e": "TRACE > DEBUG > INFO > WARN > ERROR"
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 1,
  "q": "로그를 파일로 저장할 경로를 지정하는 환경변수는?",
  "a": "TF_LOG_PATH",
  "k": [
   "tf_log_path"
  ],
  "e": "TF_LOG 와 함께 설정해야 함."
 },
 {
  "s": "s7",
  "t": "로깅·디버깅",
  "d": 2,
  "q": "Terraform panic 시 작업 디렉터리에 생성되는 파일 이름은?",
  "a": "crash.log",
  "k": [
   "crash.log",
   "crash"
  ],
  "e": "버그 보고 시 첨부."
 },
 {
  "s": "s8",
  "t": "HCP 워크플로",
  "d": 1,
  "q": "HCP Terraform 기능을 자체 인프라에 설치해 운영하는 배포판은 Terraform ____ 이다.",
  "a": "Enterprise",
  "k": [
   "enterprise",
   "TFE"
  ],
  "e": "SaaS = HCP Terraform."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 1,
  "q": "PR 검토용으로 생성되며 apply 할 수 없는 plan 은?",
  "a": "speculative plan",
  "k": [
   "speculative"
  ],
  "e": "plan-only run."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "사설망 리소스 관리를 위해 HCP 대신 사내 agent 가 run 을 실행하는 실행 모드는?",
  "a": "agent",
  "k": [
   "agent"
  ],
  "e": "remote / local / agent."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "source workspace 의 apply 성공 시 다른 workspace 의 run 을 자동 시작시키는 기능은?",
  "a": "run triggers",
  "k": [
   "run trigger"
  ],
  "e": "run tasks 와 구분."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 1,
  "q": "HashiCorp 가 만든 Policy as Code 언어·프레임워크 이름은?",
  "a": "Sentinel",
  "k": [
   "sentinel"
  ],
  "e": "OPA 는 Rego."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "Sentinel 강제 수준 중 override 가 불가능한 것은?",
  "a": "hard-mandatory",
  "k": [
   "hard-mandatory",
   "hard mandatory",
   "hard"
  ],
  "e": "advisory < soft-mandatory < hard-mandatory."
 },
 {
  "s": "s8",
  "t": "정책·거버넌스",
  "d": 2,
  "q": "외부 서비스(보안·비용 스캔)를 run 단계에 연동하는 HCP 기능은?",
  "a": "run tasks",
  "k": [
   "run task"
  ],
  "e": "pre-plan·post-plan·pre-apply·post-apply."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 1,
  "q": "여러 workspace 를 묶어 권한을 관리하는 HCP Terraform 단위는?",
  "a": "project",
  "k": [
   "project",
   "프로젝트"
  ],
  "e": "organization → project → workspace."
 },
 {
  "s": "s8",
  "t": "workspace·project",
  "d": 2,
  "q": "여러 workspace 에 공통 변수를 일괄 적용하는 기능은?",
  "a": "variable set",
  "k": [
   "variable set",
   "varset",
   "변수 세트"
  ],
  "e": "자격증명 공유에 활용."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 1,
  "q": "HCP Terraform API 토큰을 받아 저장하는 명령은 terraform ____ 이다.",
  "a": "login",
  "k": [
   "login"
  ],
  "e": "토큰 제거는 logout."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 2,
  "q": "CLI 구성을 HCP Terraform 에 연결하기 위해 terraform 블록 안에 넣는 블록 이름은?",
  "a": "cloud",
  "k": [
   "cloud"
  ],
  "e": "backend 블록과 동시 사용 불가."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 2,
  "q": "terraform login 이 토큰을 저장하는 파일 이름은?",
  "a": "credentials.tfrc.json",
  "k": [
   "credentials.tfrc.json",
   "credentials.tfrc"
  ],
  "e": "~/.terraform.d/ 아래."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "IaC 이점",
  "d": 2,
  "q": "IaC 기반 인프라 변경의 일반적인 협업 흐름을 순서대로 나열하시오",
  "steps": [
   "구성 코드 수정(브랜치)",
   "Pull Request 생성·terraform plan 결과 첨부",
   "코드 리뷰·승인",
   "main 병합 후 terraform apply"
  ],
  "e": "IaC 는 코드 리뷰 + plan 검토 후 적용 → 변경 이력·승인 추적이 남는다."
 },
 {
  "s": "s1",
  "t": "불변 인프라",
  "d": 2,
  "q": "불변 인프라(Packer + Terraform) 배포 흐름을 순서대로 나열하시오",
  "steps": [
   "Packer 로 새 머신 이미지 빌드",
   "Terraform 구성의 이미지 ID 변수 갱신",
   "terraform plan 으로 교체(-/+ 또는 +/-) 확인",
   "terraform apply 로 새 인스턴스 배포·구 인스턴스 제거"
  ],
  "e": "수정 대신 교체 — 이미지 갱신 → 계획 확인 → 적용."
 },
 {
  "s": "s2",
  "t": "provider 설치",
  "d": 2,
  "q": "새 provider 를 구성에 추가해 사용하기까지의 순서를 나열하시오",
  "steps": [
   "required_providers 에 source·version 선언",
   "provider 블록에 구성(region 등) 작성",
   "terraform init 으로 provider 설치·lock 파일 갱신",
   "terraform plan 으로 계획 확인"
  ],
  "e": "선언 → 구성 → init(설치·잠금) → plan. init 없이 plan 하면 provider 미설치 오류."
 },
 {
  "s": "s2",
  "t": "alias 다중 provider",
  "d": 3,
  "q": "자식 모듈에서 두 번째 리전 provider 를 쓰도록 연결하는 순서를 나열하시오",
  "steps": [
   "루트에 provider \"aws\" { alias = \"west\" region = \"us-west-2\" } 선언",
   "자식 모듈 required_providers 에 configuration_aliases = [aws.west] 선언",
   "모듈 리소스에 provider = aws.west 지정",
   "module 블록에 providers = { aws.west = aws.west } 전달"
  ],
  "e": "루트 alias 구성 → 모듈의 수신 선언 → 모듈 리소스 선택 → 호출 측 providers 맵 연결."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 1,
  "q": "새 프로젝트에서 인프라를 처음 배포하는 명령 순서를 나열하시오",
  "steps": [
   "terraform init",
   "terraform validate",
   "terraform plan -out=tfplan",
   "terraform apply tfplan"
  ],
  "e": "init(준비) → validate(검사) → plan 저장 → 저장 계획 적용."
 },
 {
  "s": "s3",
  "t": "워크플로",
  "d": 2,
  "q": "CI 파이프라인의 권장 검사·적용 단계를 순서대로 나열하시오",
  "steps": [
   "terraform fmt -check -recursive",
   "terraform init -input=false",
   "terraform validate",
   "terraform plan -out=tfplan 후 리뷰·승인",
   "terraform apply tfplan"
  ],
  "e": "fmt -check 는 init 불필요라 가장 먼저 가능. validate 는 init 후. 검토한 plan 파일을 그대로 apply."
 },
 {
  "s": "s4",
  "t": "variables·outputs",
  "d": 2,
  "q": "변수 값 우선순위를 낮은 것부터 높은 것 순으로 나열하시오",
  "steps": [
   "환경변수 TF_VAR_name",
   "terraform.tfvars",
   "*.auto.tfvars",
   "-var 명령줄 옵션"
  ],
  "e": "default < ★TF_VAR < terraform.tfvars(.json) < *.auto.tfvars < -var/-var-file★."
 },
 {
  "s": "s4",
  "t": "의존성·lifecycle",
  "d": 2,
  "q": "create_before_destroy = true 인 리소스가 교체될 때의 처리 순서를 나열하시오",
  "steps": [
   "새 객체 생성",
   "의존 리소스가 새 객체를 참조하도록 갱신",
   "기존 객체 삭제",
   "state 에 새 객체만 기록"
  ],
  "e": "기본은 삭제→생성(-/+), ★create_before_destroy 는 생성→삭제(+/-)★."
 },
 {
  "s": "s4",
  "t": "custom conditions",
  "d": 3,
  "q": "리소스 1개와 check 블록이 있는 구성의 apply 시 조건 평가 순서를 나열하시오",
  "steps": [
   "variable validation 평가",
   "resource precondition 평가",
   "리소스 생성 후 postcondition 평가",
   "check 블록 assert 평가(경고)"
  ],
  "e": "입력 검증 → ★변경 전 precondition → 변경 후 postcondition → 마지막 check★."
 },
 {
  "s": "s4",
  "t": "민감정보·Vault",
  "d": 3,
  "q": "ephemeral 리소스로 DB 비밀번호를 전달하는 실행 흐름을 나열하시오",
  "steps": [
   "ephemeral 리소스 open(시크릿 조회)",
   "ephemeral.TYPE.NAME 값을 write-only 인수 password_wo 에 전달",
   "provider 가 DB 리소스 생성",
   "ephemeral 리소스 close(state 에 미저장)"
  ],
  "e": "ephemeral 은 ★매 실행 open → 사용 → close★, plan·state 에 남지 않음."
 },
 {
  "s": "s5",
  "t": "모듈 사용",
  "d": 2,
  "q": "Registry 모듈을 새로 도입해 배포하는 순서대로 나열하시오",
  "steps": [
   "module 블록에 source·version 작성",
   "terraform init 으로 모듈 설치",
   "terraform plan 으로 변경 검토",
   "terraform apply 로 적용"
  ],
  "e": "모듈 추가 → init(설치) → plan → apply."
 },
 {
  "s": "s5",
  "t": "모듈 버전",
  "d": 3,
  "q": "자체 모듈을 공개 Terraform Registry 에 게시하는 순서대로 나열하시오",
  "steps": [
   "표준 구조로 모듈 작성(main·variables·outputs·README)",
   "GitHub 공개 저장소 terraform-<PROVIDER>-<NAME> 생성·푸시",
   "x.y.z 시맨틱 버전 태그 생성·푸시",
   "Registry 에 GitHub 계정으로 로그인해 저장소 선택 후 Publish"
  ],
  "e": "게시 후에는 새 태그 푸시 시 버전 자동 반영."
 },
 {
  "s": "s6",
  "t": "remote backend",
  "d": 2,
  "q": "local 상태를 S3 backend 로 이전하는 순서대로 나열하시오",
  "steps": [
   "S3 버킷 준비(버저닝·암호화)",
   "terraform { backend \"s3\" { ... } } 블록 추가",
   "terraform init -migrate-state 실행 후 이전 승인",
   "terraform plan 으로 변경 없음 확인"
  ],
  "e": "이전 후 plan 이 no changes 면 성공."
 },
 {
  "s": "s6",
  "t": "drift 관리",
  "d": 2,
  "q": "드리프트를 검토 후 상태에 반영하는 순서대로 나열하시오",
  "steps": [
   "콘솔 수동 변경 등 드리프트 발생",
   "terraform plan -refresh-only 로 차이 검토",
   "terraform apply -refresh-only 로 상태 갱신",
   "구성 코드를 실제와 일치하도록 수정 후 plan 확인"
  ],
  "e": "상태만 맞추고 코드를 안 고치면 다음 apply 에서 되돌림."
 },
 {
  "s": "s7",
  "t": "import 블록",
  "d": 2,
  "q": "import 블록으로 기존 리소스를 편입하는 권장 절차를 순서대로 나열하시오",
  "steps": [
   "import 블록(to·id) 작성",
   "terraform plan -generate-config-out=generated.tf 실행",
   "생성된 구성 검토·정리",
   "terraform plan 으로 import 및 차이 확인",
   "terraform apply 로 state 편입"
  ],
  "e": "선언 → 구성 생성(plan 옵션) → 정리 → 재검토 → apply. 구성 생성은 apply 가 아니라 plan 단계."
 },
 {
  "s": "s7",
  "t": "state 수정",
  "d": 2,
  "q": "명령형 import 로 기존 VM 을 관리 대상으로 만드는 절차를 순서대로 나열하시오",
  "steps": [
   "구성에 resource 블록 초안 작성",
   "terraform init",
   "terraform import ADDR ID",
   "terraform plan 으로 구성과 실물 차이 확인",
   "차이가 없어질 때까지 구성 보완"
  ],
  "e": "명령형 import 는 resource 블록이 먼저 필요하고 state 만 갱신하므로 plan 으로 구성 정합을 맞춰야 한다."
 },
 {
  "s": "s8",
  "t": "cloud 블록",
  "d": 2,
  "q": "로컬 state 를 쓰던 구성을 HCP Terraform 으로 이전하는 절차를 순서대로 나열하시오",
  "steps": [
   "terraform login 으로 API 토큰 저장",
   "terraform 블록에 cloud 블록(organization·workspaces) 추가",
   "terraform init 실행",
   "state 마이그레이션 프롬프트에 yes 응답",
   "terraform plan 으로 No changes 확인"
  ],
  "e": "인증 → 연결 선언 → init 이 마이그레이션 수행 → 결과 검증."
 },
 {
  "s": "s8",
  "t": "실행·run",
  "d": 2,
  "q": "HCP Terraform run 의 진행 단계를 순서대로 나열하시오(auto-apply 꺼짐)",
  "steps": [
   "Pending(대기열)",
   "Plan",
   "Cost estimation",
   "Policy check(Sentinel/OPA)",
   "Confirm(사용자 승인)",
   "Apply"
  ],
  "e": "정책 검사는 plan 이후 apply 이전, auto-apply 가 꺼져 있으면 승인 후 apply."
 }
];

CPPG.selfcheck = [
 {
  "g": "IaC",
  "t": "IaC 의 이점(자동화·재현성·버전관리·협업)과 선언형 vs 명령형을 설명한다"
 },
 {
  "g": "IaC",
  "t": "Terraform 이 멀티클라우드·서비스 무관 워크플로를 어떻게 제공하는지(provider) 설명한다"
 },
 {
  "g": "기초",
  "t": "required_providers 의 source·version 과 ~> 연산자 범위를 계산한다"
 },
 {
  "g": "기초",
  "t": ".terraform.lock.hcl 의 역할·생성 시점·갱신(init -upgrade)을 안다"
 },
 {
  "g": "기초",
  "t": "provider alias 로 다중 리전을 구성하고 resource 에서 provider = aws.west 로 지정한다"
 },
 {
  "g": "기초",
  "t": "state 의 목적 4가지(매핑·메타데이터·성능·협업)를 말한다"
 },
 {
  "g": "워크플로",
  "t": "init·validate·fmt·plan·apply·destroy 의 역할과 주요 옵션을 구분한다"
 },
 {
  "g": "워크플로",
  "t": "plan 기호(+ - ~ -/+ <=)를 읽고 plan -out 저장 plan 을 적용한다"
 },
 {
  "g": "구성",
  "t": "resource 와 data 블록의 차이, 참조 형식(TYPE.NAME.ATTR / data.TYPE.NAME.ATTR)을 안다"
 },
 {
  "g": "구성",
  "t": "변수 값 우선순위 6단계를 순서대로 말한다"
 },
 {
  "g": "구성",
  "t": "list·set·map·object·tuple 을 구분하고 for 식·splat 을 해석한다"
 },
 {
  "g": "구성",
  "t": "count 와 for_each 의 차이와 선택 기준을 설명한다"
 },
 {
  "g": "구성",
  "t": "lifecycle 4 인수와 depends_on 사용 시점을 안다"
 },
 {
  "g": "구성",
  "t": "validation·precondition·postcondition·check 의 실패 결과 차이를 안다"
 },
 {
  "g": "구성",
  "t": "sensitive·ephemeral·write-only 의 state 저장 차이와 Vault 연계를 설명한다"
 },
 {
  "g": "모듈",
  "t": "모듈 source 종류와 version 인수를 쓸 수 있는 경우를 구분한다"
 },
 {
  "g": "모듈",
  "t": "자식 모듈 변수 스코프 — 입력 변수로 넣고 output 으로만 꺼낸다"
 },
 {
  "g": "상태",
  "t": "state locking 이 필요한 이유와 force-unlock 사용 시점을 안다"
 },
 {
  "g": "상태",
  "t": "S3 backend 설정과 backend 블록 제약(변수 불가·부분 구성)을 안다"
 },
 {
  "g": "상태",
  "t": "drift 대응(refresh-only·-replace·moved·removed)을 상황별로 고른다"
 },
 {
  "g": "유지",
  "t": "import 블록·-generate-config-out 으로 기존 리소스를 편입한다"
 },
 {
  "g": "유지",
  "t": "state list·show·mv·rm 의 차이를 안다"
 },
 {
  "g": "유지",
  "t": "TF_LOG 레벨과 TF_LOG_PATH 를 설정해 디버깅한다"
 },
 {
  "g": "HCP",
  "t": "HCP Terraform 워크플로 3종·실행 모드 3종을 구분한다"
 },
 {
  "g": "HCP",
  "t": "Sentinel enforcement 3단계와 policy check 시점을 안다"
 },
 {
  "g": "HCP",
  "t": "workspaces·projects·variable sets·run triggers 의 쓰임을 안다"
 },
 {
  "g": "HCP",
  "t": "cloud 블록 + terraform login 으로 CLI-driven 워크플로를 구성한다"
 }
];

CPPG.roadmap = {
 "4주 표준": [
  "Week 1 — IaC 개념 + provider·버전·lock file + state 개념 + 핵심 워크플로(init~destroy) 실습",
  "Week 2 — 구성 작성: 변수·출력·타입·함수·for·count/for_each·lifecycle·custom conditions·민감정보",
  "Week 3 — 모듈 + backend·잠금·원격 state + import·moved·removed·state CLI·TF_LOG",
  "Week 4 — HCP Terraform(워크스페이스·프로젝트·Sentinel·cloud 블록) + 모의고사 3회 + 오답노트"
 ],
 "시험 3일 전": [
  "D-3 — 명령 비교 시트 + plan 기호 + 변수 우선순위",
  "D-2 — count/for_each·lifecycle·조건 블록·민감정보 시트 + 함정노트",
  "D-1 — 모의고사 1회 + 오답만 다시 풀기 + HCP 용어 시트"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "init·validate·fmt·plan·apply·destroy 역할",
  "plan -out / apply 저장 plan",
  "변수 우선순위",
  "~> 버전 제약 계산",
  ".terraform.lock.hcl 커밋·init -upgrade",
  "state 의 목적·민감정보 평문",
  "resource vs data",
  "count vs for_each",
  "remote backend·state locking",
  "모듈 source·version",
  "terraform import / import 블록",
  "state rm vs destroy",
  "-replace (구 taint)",
  "-refresh-only (구 refresh)",
  "HCP Terraform workspace vs CLI workspace",
  "Sentinel enforcement 3단계"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "provider alias",
  "provider tiers",
  "dynamic 블록",
  "splat·for 식",
  "lifecycle 4 인수",
  "depends_on",
  "sensitive 출력",
  "TF_LOG·TF_LOG_PATH",
  "moved·removed 블록",
  "terraform_remote_state",
  "Registry 게시 요건",
  "VCS/CLI/API 워크플로",
  "run triggers·health assessments",
  "private registry",
  "cloud 블록 마이그레이션"
 ],
 "Tier 3 ★ (004 신규 강조)": [
  "precondition·postcondition",
  "check 블록(경고만)",
  "ephemeral 값·리소스(1.10+)",
  "write-only 인수(1.11+)",
  "HCP projects",
  "variable validation",
  "Vault 연계 best practice"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "선언형 IaC 의 특징 판별",
  "problem": "Terraform 이 선언형(declarative) 도구라는 설명과 거리가 먼 것은?\n① 사용자는 원하는 최종 상태를 구성 파일에 기술한다\n② Terraform 이 현재 상태와 비교해 필요한 변경을 계산한다\n③ 사용자는 리소스 생성 순서를 반드시 줄 순서로 지정해야 한다\n④ 같은 구성을 반복 적용해도 차이가 없으면 변경이 없다",
  "steps": [
   "선언형 = what(목표 상태) 기술, how 는 도구가 결정",
   "생성 순서는 참조 기반 의존성 그래프로 Terraform 이 결정",
   "③ 은 명령형 특징 → 오답 문장"
  ],
  "answer": "③ — 순서는 의존성 그래프가 결정하며 줄 순서는 무관",
  "traps": [
   "HCL 의 for·조건식 때문에 명령형으로 착각",
   "depends_on 이 있으니 순서를 직접 지정해야 한다고 오해(숨은 의존성에만 사용)"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "멀티클라우드·서비스 무관 워크플로 시나리오",
  "problem": "회사는 AWS 에 웹 서버, Azure 에 백업 스토리지, GitHub 에 저장소 권한을 관리한다. 운영팀이 하나의 도구로 일관된 절차를 원한다. 가장 적절한 접근은?\n① 클라우드별 네이티브 도구(CloudFormation·ARM)와 GitHub UI 를 각각 사용\n② Terraform 에 aws·azurerm·github provider 를 선언하고 동일한 plan/apply 워크플로 사용\n③ Ansible 플레이북만으로 모든 리소스를 프로비저닝\n④ Terraform 으로 AWS 만 관리하고 나머지는 수작업",
  "steps": [
   "요구: 단일 도구·일관 워크플로·클라우드+SaaS",
   "Terraform provider 생태계 = 서비스 무관 Write→Plan→Apply",
   "네이티브 도구 병행은 도구 분산, 수작업은 드리프트 위험"
  ],
  "answer": "② — provider 만 다를 뿐 언어·워크플로·state 관리가 공통",
  "traps": [
   "멀티클라우드 = 코드 자동 이식으로 오해",
   "Terraform 은 클라우드만 관리한다는 오해(GitHub provider 존재)"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "버전 제약 해석",
  "problem": "required_providers 에 aws = { source = \"hashicorp/aws\", version = \"~> 5.31\" } 이 있다. 설치될 수 없는 버전은?\n① 5.31.0\n② 5.31.4\n③ 5.80.0\n④ 6.0.0",
  "steps": [
   "~> 5.31 = 가장 오른쪽(마이너) 자리만 증가 허용",
   "범위 = >=5.31, <6.0",
   "6.0.0 은 상한 초과"
  ],
  "answer": "④ — ~> 5.31 은 6.0 미만까지 허용",
  "traps": [
   "~> 5.31 을 5.31.x 만 허용으로 착각(그건 ~> 5.31.0)",
   "lock 파일이 있으면 init -upgrade 전까지 기록 버전 유지"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "다중 리전 provider 시나리오",
  "problem": "us-east-1 에 기본 리소스를, us-west-2 에 복제 버킷을 만들려 한다. 옳은 구성은?\n① provider \"aws\" { region = \"us-east-1\" } 와 provider \"aws\" { region = \"us-west-2\" } 를 alias 없이 둘 다 선언\n② 두 번째 블록에 alias = \"west\" 를 두고 복제 버킷에 provider = aws.west 지정\n③ 복제 버킷에 region = \"us-west-2\" 메타 인수 지정\n④ 두 번째 리전용으로 별도 terraform 블록 선언",
  "steps": [
   "같은 provider 를 두 번 선언하려면 하나 이상에 alias 필요(중복 기본 구성 오류)",
   "리소스는 provider = <이름>.<alias> 로 선택",
   "region 은 리소스 메타 인수가 아님"
  ],
  "answer": "② — alias 구성 + provider = aws.west",
  "traps": [
   "provider = \"aws.west\" 처럼 따옴표 사용",
   "모듈이라면 providers 맵 사용(단수 provider 아님)"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "plan 기호 해석",
  "problem": "plan 출력에 다음이 보인다: `~ aws_s3_bucket.logs`, `-/+ aws_instance.web (forces replacement)`, `<= data.aws_ami.ubuntu`. 옳은 설명은?\n① logs 버킷은 삭제 후 재생성된다\n② web 인스턴스는 in-place 로 수정된다\n③ data.aws_ami.ubuntu 는 apply 시 읽힌다\n④ 요약은 2 to add 로 집계된다",
  "steps": [
   "~ = in-place 변경 → ① 오답",
   "-/+ = 삭제 후 생성 → ② 오답, 교체는 1 add + 1 destroy → ④ 오답",
   "<= = data 소스 읽기 → ③ 정답"
  ],
  "answer": "③ — <= 는 data 소스 읽기",
  "traps": [
   "-/+ 와 +/- 순서 혼동(+/- 는 create_before_destroy)",
   "~ 를 교체로 착각"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "드리프트·재생성 명령 선택",
  "problem": "운영자가 콘솔에서 인스턴스 태그를 바꿨고, 별도로 손상된 VM 하나는 코드 변경 없이 재생성하고 싶다. 각각의 권장 명령 조합은?\n① terraform refresh / terraform taint\n② terraform apply -refresh-only(태그를 state 에 반영) 또는 apply(코드 상태 복원) / terraform apply -replace=ADDR\n③ terraform validate / terraform destroy\n④ terraform state rm / terraform import",
  "steps": [
   "refresh·taint 는 deprecated → 시험 정답은 -refresh-only·-replace",
   "드리프트: 실제를 수용하면 -refresh-only, 코드로 되돌리면 일반 apply",
   "재생성: apply -replace=aws_instance.vm"
  ],
  "answer": "② — refresh-only/apply 와 -replace 가 현행 권장",
  "traps": [
   "deprecated 명령(refresh·taint)을 정답으로 선택",
   "state rm 은 실제 리소스를 지우지 않고 추적만 해제"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "for 식과 cidrsubnet 으로 서브넷 맵 만들기",
  "problem": "locals { azs = [\"a\", \"b\", \"c\"] }\nsubnets = { for i, az in local.azs : az => cidrsubnet(\"10.0.0.0/16\", 8, i + 10) }\nsubnets[\"c\"] 의 값은?\n① \"10.0.2.0/24\"\n② \"10.0.12.0/24\"\n③ \"10.0.10.0/24\"\n④ \"10.0.0.12/24\"",
  "steps": [
   "list 를 for i, az 로 순회하면 i 는 0부터 인덱스",
   "\"c\" 는 i = 2 → netnum = 2 + 10 = 12",
   "/16 + 8 = /24, 세 번째 옥텟 12 → 10.0.12.0/24"
  ],
  "answer": "② \"10.0.12.0/24\" — netnum 은 i + 10 = 12",
  "traps": [
   "i 가 1부터라고 착각해 13 으로 계산",
   "netnum 을 네 번째 옥텟에 넣는 실수(④)"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "count 인덱스 이동 vs for_each 키",
  "problem": "var.users = [\"kim\", \"lee\", \"park\"] 로 aws_iam_user.u 를 count = length(var.users) 로 만들었다. \"lee\" 를 목록에서 지우면?\n① lee 만 삭제\n② u[1] 이 park 으로 변경되고 u[2] 삭제\n③ 아무 변화 없음\n④ 전체 재생성",
  "steps": [
   "count 주소는 위치 기반 u[0], u[1], u[2]",
   "삭제 후 목록 [kim, park] → u[1] 의 name 이 lee → park 로 바뀜",
   "u[2] 는 대상이 없어 삭제 → for_each = toset(var.users) 이면 u[\"lee\"] 만 삭제"
  ],
  "answer": "② u[1] 변경(사용자명은 교체 유발 가능) + u[2] 삭제 — 키 기반 for_each 권장",
  "traps": [
   "count 도 이름 기반이라고 착각",
   "for_each 에 list 를 그대로 넣어 오류"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "검증 수단 선택 — validation / precondition / check",
  "problem": "요구사항: (가) 변수 env 는 dev·prod 만 허용 (나) 선택한 AMI 가 arm64 이면 인스턴스 생성 중단 (다) 배포 후 웹 URL 이 200 이 아니면 알림만\n올바른 조합은?\n① 가 validation · 나 precondition · 다 check\n② 가 check · 나 validation · 다 postcondition\n③ 가 precondition · 나 check · 다 validation\n④ 모두 validation",
  "steps": [
   "(가) 입력값 제약 → variable validation, condition = contains([\"dev\", \"prod\"], var.env)",
   "(나) 변경 전 차단 → aws_instance lifecycle precondition(오류)",
   "(다) 비차단 모니터링 → check 블록 + scoped data \"http\" + assert(경고)"
  ],
  "answer": "① — 입력은 validation, 차단은 precondition, 경고는 check",
  "traps": [
   "check 로 차단하려는 실수(경고만)",
   "precondition 을 variable 블록에 넣는 실수"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "DB 비밀번호를 state 에 남기지 않기",
  "problem": "Vault 에 저장된 DB 비밀번호를 aws_db_instance 에 넣되 state·plan 에 남기지 않으려 한다. 가장 적절한 구성은?\n① data \"vault_kv_secret_v2\" + password\n② variable { sensitive = true } + password\n③ ephemeral \"vault_kv_secret_v2\" + password_wo + password_wo_version\n④ locals 에 비밀번호 하드코딩",
  "steps": [
   "data 소스 결과는 state 저장 → ① 탈락",
   "sensitive 는 마스킹만, state 평문 → ② 탈락",
   "ephemeral 리소스(1.10+) 값은 미저장, write-only 인수(1.11+) 로만 전달 가능 → ③",
   "write-only 는 변경 감지가 없으므로 password_wo_version 증가로 갱신"
  ],
  "answer": "③ — ephemeral 리소스 + write-only 인수",
  "traps": [
   "sensitive = 암호화라고 착각",
   "ephemeral 값을 일반 password 인수에 넣어 오류"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "모듈 출력값 참조 오류 분석",
  "problem": "루트 main.tf:\nmodule \"net\" { source = \"./network\" }\nresource \"aws_instance\" \"app\" { subnet_id = module.net.aws_subnet.private.id }\n위 코드의 문제와 해결로 옳은 것은?\n① 자식 output 을 정의하고 module.net.OUTPUT 으로 참조\n② source 에 version 을 추가\n③ depends_on = [module.net] 추가\n④ terraform init -upgrade 실행",
  "steps": [
   "자식 모듈 리소스는 부모에서 직접 참조 불가(캡슐화)",
   "network 모듈에 output \"private_subnet_id\" { value = aws_subnet.private.id } 정의",
   "루트에서 subnet_id = module.net.private_subnet_id 로 참조 — 암묵 의존성도 자동 형성"
  ],
  "answer": "① — 부모는 자식 output 만 module.NAME.OUTPUT 으로 접근 가능",
  "traps": [
   "로컬 모듈에 version 추가는 오류",
   "depends_on 은 참조 문제를 해결하지 않음"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "모듈 source 와 버전 고정 방식 구분",
  "problem": "다음 중 버전 고정 방식이 잘못된 것은?\n① source = \"hashicorp/consul/aws\" version = \"0.11.0\"\n② source = \"git::https://example.com/vpc.git?ref=v1.2.0\"\n③ source = \"../modules/app\" version = \"1.0.0\"\n④ source = \"app.terraform.io/acme/vpc/aws\" version = \"~> 2.0\"",
  "steps": [
   "version 인수는 public·private registry 모듈만 지원 → ①④ 정상",
   "Git 은 ?ref= 로 태그 고정 → ② 정상",
   "로컬 경로에 version 지정 → init 오류"
  ],
  "answer": "③ — 로컬 경로 모듈은 version 인수를 지원하지 않음",
  "traps": [
   "private registry(④)도 version 지원",
   "Git 에 version 인수를 쓰는 오답 패턴 주의"
  ]
 },
 {
  "s": "s6",
  "d": 2,
  "title": "backend 부분 구성과 이전",
  "problem": "팀이 dev·prod 버킷을 분리하려고 backend \"s3\" { bucket = var.bucket key = \"app.tfstate\" } 를 작성했다. 올바른 조치는?\n① bucket 을 지우고 init -backend-config=\"bucket=dev-state\" 로 주입\n② TF_VAR_bucket 환경변수 설정\n③ locals 로 bucket 값 정의\n④ backend 블록을 workspace 마다 복제",
  "steps": [
   "backend 블록은 변수·locals·data 사용 불가",
   "부분 구성: 블록에 공통값만 두고 환경별 값은 -backend-config 파일·KEY=VALUE 로 init 시 주입",
   "기존 local 상태가 있다면 -migrate-state 로 이전"
  ],
  "answer": "① — 부분 구성(partial configuration)이 공식 방식",
  "traps": [
   "TF_VAR_ 은 backend 에 적용 안 됨",
   "구성당 backend 블록은 1개"
  ]
 },
 {
  "s": "s6",
  "d": 3,
  "title": "드리프트 대응 도구 선택",
  "problem": "상황별 도구가 잘못 짝지어진 것은?\n① 콘솔 수동 변경을 상태에 반영 → apply -refresh-only\n② OS 손상된 인스턴스 재생성 → apply -replace=aws_instance.web\n③ 리소스 이름 변경 시 재생성 방지 → moved 블록\n④ 실제 리소스를 남기고 관리 해제 → removed 블록(lifecycle 생략)",
  "steps": [
   "①②③ 은 공식 권장 매핑",
   "removed 블록의 기본 destroy = true → 실제 리소스 삭제",
   "관리만 해제하려면 lifecycle { destroy = false } 필요"
  ],
  "answer": "④ — destroy = false 를 지정해야 실제 리소스 유지",
  "traps": [
   "terraform refresh·taint 는 deprecated",
   "-refresh-only 는 인프라를 바꾸지 않음"
  ]
 },
 {
  "s": "s7",
  "d": 3,
  "title": "state rm 이후의 plan 결과 해석",
  "problem": "운영자가 aws_s3_bucket.logs 를 다른 팀 관리로 넘기기 위해 terraform state rm aws_s3_bucket.logs 를 실행했다. 구성 파일의 resource 블록은 그대로 두었다. 다음 terraform plan 의 결과는?\n① No changes\n② aws_s3_bucket.logs 삭제(-) 계획\n③ aws_s3_bucket.logs 생성(+) 계획\n④ 자동 re-import 후 No changes",
  "steps": [
   "state rm 은 state 에서 바인딩만 제거하고 실물 버킷은 유지한다",
   "plan 은 구성에 있으나 state 에 없는 리소스를 '새로 생성할 대상'으로 판단한다",
   "따라서 동일 이름 버킷 생성(+)이 계획되며 이름 충돌로 apply 가 실패할 수 있다",
   "올바른 처리: resource 블록 삭제 또는 removed 블록(destroy = false) 사용"
  ],
  "answer": "③ — state 에 없는 resource 블록은 생성 대상이 된다.",
  "traps": [
   "state rm 이 실물을 지운다고 착각해 ②를 고름",
   "Terraform 이 자동으로 다시 가져온다고 오해(④)"
  ]
 },
 {
  "s": "s7",
  "d": 2,
  "title": "디버그 로그 수집 설정",
  "problem": "provider 의 API 인증 오류를 조사하려 한다. 로그를 ./debug.log 파일에 남기는 올바른 설정은?\n① TF_LOG_PATH=./debug.log 만 설정\n② TF_LOG=DEBUG, TF_LOG_PATH=./debug.log\n③ TF_DEBUG=1, TF_LOG_FILE=./debug.log\n④ terraform apply -log=./debug.log",
  "steps": [
   "로그 생성 조건 = 레벨 지정(TF_LOG 또는 TF_LOG_CORE/PROVIDER)",
   "TF_LOG_PATH 는 출력 위치만 지정",
   "TF_DEBUG·TF_LOG_FILE·-log 옵션은 존재하지 않음",
   "범위를 provider 로 좁히려면 TF_LOG_PROVIDER=DEBUG 도 가능"
  ],
  "answer": "② — 레벨과 경로를 함께 설정해야 파일 로그가 생성된다.",
  "traps": [
   "TF_LOG_PATH 단독 설정으로 충분하다고 오해",
   "존재하지 않는 CLI 옵션(-log)"
  ]
 },
 {
  "s": "s8",
  "d": 3,
  "title": "정책 강제 수준 선택",
  "problem": "보안팀 요구: (가) 프로덕션 DB 는 퍼블릭 접근 금지 — 어떤 예외도 불가, (나) 태그 누락 — 알림만, (다) 대형 인스턴스 사용 — 클라우드 운영팀 승인 시 허용. Sentinel 강제 수준 조합으로 옳은 것은?\n① (가) hard-mandatory (나) advisory (다) soft-mandatory\n② (가) soft-mandatory (나) advisory (다) hard-mandatory\n③ (가) hard-mandatory (나) soft-mandatory (다) advisory\n④ (가) advisory (나) hard-mandatory (다) soft-mandatory",
  "steps": [
   "advisory = 경고만, run 계속",
   "soft-mandatory = 중단되지만 권한자 override 가능 → '승인 시 허용'",
   "hard-mandatory = override 불가 → '예외 불가'",
   "요구를 각 수준에 대응"
  ],
  "answer": "① — 예외 불가=hard, 알림만=advisory, 승인 시 허용=soft.",
  "traps": [
   "soft 와 hard 의 override 가능 여부 혼동",
   "advisory 도 run 을 멈춘다고 오해"
  ]
 },
 {
  "s": "s8",
  "d": 2,
  "title": "사설망 리소스와 실행 모드",
  "problem": "HCP Terraform 으로 사내 데이터센터 내부망의 vSphere 를 관리해야 한다. 내부망은 인터넷 인바운드를 허용하지 않는다. state 는 HCP 에 두고 run 이력도 HCP 에서 보고 싶다. 가장 적절한 구성은?\n① remote 실행 모드 그대로 사용\n② agent 실행 모드 + 내부망에 HCP Terraform agent 배치\n③ local 실행 모드 + 수동 state push\n④ VCS 연결 해제 후 speculative plan 만 사용",
  "steps": [
   "remote 모드는 HCP 관리 인프라에서 실행 → 내부망 접근 불가",
   "agent 는 내부망에서 HCP 로 아웃바운드 연결해 run 을 수행",
   "state·run 이력은 HCP 에 유지",
   "local 모드는 실행이 개인 PC 에 묶이고 state push 는 위험"
  ],
  "answer": "② — agent 모드가 사설망 실행과 HCP 중앙관리를 동시에 충족.",
  "traps": [
   "local 모드도 HCP 가 run 을 실행한다고 오해",
   "speculative plan 으로 변경 적용이 가능하다고 오해"
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
