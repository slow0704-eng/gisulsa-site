/* ============================================================
   SQLP (SQL 전문가) — 학습·퀴즈 데이터
   소스: 02_타자격증_학습자료/SQLP_학습자료.txt + KDATA 「SQL 전문가 가이드」 커리큘럼
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */
const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "SQLP SQL 전문가",
 "brand": "SQLP",
 "tag": "SQLP · 한국데이터산업진흥원(KDATA)",
 "storeKey": "sqlp",
 "topicUnit": "단원",
 "title": "SQLP — 암기·퀴즈 학습",
 "h1": "SQLP",
 "unit": "과목",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 75,
  "per": 40
 },
 "shuffleChoices": true,
 "full": "SQLP (SQL Professional) · SQL 전문가",
 "host": "한국데이터산업진흥원(KDATA) · dataq.or.kr",
 "type": "필기(객관식) + 실기(SQL 작성·튜닝 서술형) — 문항 수·배점은 KDATA 공지 확인 [확인필요]",
 "time": "180분 [확인필요]",
 "pass": "총점 75점 이상 + 과목별 40% 이상 [확인필요]",
 "book": "KDATA 「SQL 전문가 가이드」 + 저장소 SQLP_학습자료.txt",
 "slogan": "SQLP = 모델링(정규화·식별자) + SQL 기본(JOIN·서브쿼리·윈도우 함수) + ★고급·튜닝(옵티마이저·인덱스·조인·힌트)★",
 "paperSpec": [
  {
   "s": "s1",
   "n": 10
  },
  {
   "s": "s2",
   "n": 20
  },
  {
   "s": "s3",
   "n": 40
  }
 ],
 "footer": [
  "SQLP / 주관 <b>한국데이터산업진흥원(KDATA)</b> · dataq.or.kr · 응시자격(학력·경력 또는 SQLD 합격+경력) 필요",
  "과목: Ⅰ 데이터 모델링의 이해 · Ⅱ SQL 기본 및 활용 · Ⅲ SQL 고급 활용 및 튜닝 — 시험 문항 수·배점·시간은 개편 여부를 <b>KDATA 공지로 확인</b>하세요 [확인필요].",
  "모의고사는 70문항(10·20·40)으로 Ⅲ과목 비중을 크게 둔 <b>학습 배분</b>이며 공식 배점이 아닙니다. 실기(튜닝 서술)는 📄 예시문제로 훈련합니다.",
  "⚠ 문항은 학습자료로 새로 만든 연습 문제이며 실제 기출이 아닙니다. SQL 문법·동작은 Oracle 기준입니다."
 ],
 "info": [
  {
   "title": "과목 구성",
   "type": "table",
   "head": [
    "과목",
    "핵심 범위"
   ],
   "rows": [
    [
     "Ⅰ 데이터 모델링의 이해",
     "모델링 개념·엔터티·속성·관계·식별자 · 정규화·반정규화 · 성능 모델링"
    ],
    [
     "Ⅱ SQL 기본 및 활용",
     "DDL·DML·TCL·DCL · 함수·NULL · JOIN · 서브쿼리 · 그룹·윈도우 함수 · 계층 쿼리"
    ],
    [
     "Ⅲ SQL 고급 활용 및 튜닝",
     "아키텍처·I/O · 옵티마이저·실행계획 · 인덱스·조인 튜닝 · 힌트 · 소트·DML·파티션·병렬"
    ]
   ]
  },
  {
   "title": "튜닝 문제 푸는 순서",
   "type": "list",
   "items": [
    "실행계획은 ★안쪽(들여쓰기 깊은 곳)·위쪽부터★ 읽는다 — 같은 깊이면 위가 먼저.",
    "인덱스 컬럼 ★가공·묵시적 형변환★ 여부부터 확인 — 인덱스를 못 타는 1순위 원인.",
    "결합 인덱스는 ★선두 컬럼이 = 조건★ 인지 확인 → 범위 조건 뒤 컬럼은 범위를 줄이지 못함.",
    "조인은 드라이빙 집합 크기 → NL(소량·인덱스) / Hash(대량·= 조인) / Sort Merge(정렬 활용)."
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "데이터 모델링의 이해",
  "short": "모델링",
  "out": 10,
  "color": "#0e7490",
  "desc": "모델링 개념·3단계·관점 · 엔터티·속성·관계·식별자 · 정규화(1~5NF·BCNF)·반정규화 · 성능·분산 모델링 · 트랜잭션·NULL"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "SQL 기본 및 활용",
  "short": "SQL 기본",
  "out": 20,
  "color": "#2563eb",
  "desc": "DDL·DML·TCL·DCL · 함수·NULL 처리 · JOIN · 서브쿼리 · GROUP BY·ROLLUP·CUBE · 윈도우 함수 · 계층 쿼리 · PIVOT · Top-N ★실행 결과 계산★"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "SQL 고급 활용 및 튜닝",
  "short": "튜닝",
  "out": 40,
  "color": "#c2410c",
  "desc": "아키텍처·I/O · 옵티마이저·실행계획 · 인덱스 스캔·설계 · NL·Hash·Sort Merge 조인 · 쿼리 변환 · 힌트 · 소트·DML·파티션·병렬 ★최대 비중★"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "모델링 개념",
  "front": "데이터 모델링 3단계",
  "key": "개념 → 논리 → 물리",
  "back": "★개념적★ — 핵심 엔터티·관계, 추상화 수준 가장 높음, 전사적 / ★논리적★ — 키·속성·관계 정확히 표현, ★정규화★ 수행, 재사용성 높음 / ★물리적★ — 실제 DBMS 테이블·인덱스·저장 구조 설계.",
  "tip": "정규화는 논리 단계 — 물리 단계라고 하면 오답"
 },
 {
  "s": "s1",
  "g": "모델링 개념",
  "front": "데이터 모델링 3관점",
  "key": "데이터 · 프로세스 · 상호작용",
  "back": "★데이터 관점(What)★ — 업무가 어떤 데이터와 관련 있나 / ★프로세스 관점(How)★ — 업무가 실제로 무엇을 하나 / ★상호작용 관점★ — 데이터와 프로세스의 관계(CRUD).",
  "tip": "CRUD 매트릭스 = 상호작용 관점"
 },
 {
  "s": "s1",
  "g": "모델링 개념",
  "front": "데이터 모델링 특징 3가지",
  "key": "추상화 · 단순화 · 명확화",
  "back": "★추상화★ — 현실을 일정 형식에 맞춰 표현 / ★단순화★ — 제한된 표기법·언어로 쉽게 이해 / ★명확화★ — 애매모호함을 없애고 한 가지 의미로 해석.",
  "tip": "유의점 3가지(중복·비유연성·비일관성)와 구분"
 },
 {
  "s": "s1",
  "g": "모델링 개념",
  "front": "모델링 유의점",
  "key": "중복 · 비유연성 · 비일관성",
  "back": "★중복★ — 같은 정보를 여러 곳에 저장 / ★비유연성★ — 사소한 업무 변화에도 모델을 자주 바꿔야 함(데이터와 프로세스 분리 필요) / ★비일관성★ — 데이터 간 상호 연관 관계를 명확히 정의하지 않아 불일치.",
  "tip": "특징(추상화·단순화·명확화)과 섞어 내는 보기 주의"
 },
 {
  "s": "s1",
  "g": "모델링 개념",
  "front": "ANSI-SPARC 3단계 스키마",
  "key": "외부 · 개념 · 내부",
  "back": "★외부 스키마★ — 사용자 관점(뷰) / ★개념 스키마★ — 통합 관점, 전체 DB 구조 / ★내부 스키마★ — 물리 저장 구조. 외부↔개념 = ★논리적 독립성★, 개념↔내부 = ★물리적 독립성★.",
  "tip": "논리적 독립성: 개념 스키마가 바뀌어도 외부 스키마 영향 없음"
 },
 {
  "s": "s1",
  "g": "모델링 개념",
  "front": "ER 표기법 3종",
  "key": "Chen · IE(Crow's Foot) · Barker",
  "back": "★Chen★ — 엔터티 사각형·관계 마름모 / ★IE(Information Engineering)★ — 새발(Crow's Foot)로 다수 표현, 국내 실무·시험 최빈출 / ★Barker★ — Oracle Case 도구 표기, 점선으로 선택 표현.",
  "tip": "IE 표기 새발 = 'M(다수)'"
 },
 {
  "s": "s1",
  "g": "엔터티",
  "front": "엔터티 분류 — 유무형",
  "key": "유형 · 개념 · 사건",
  "back": "★유형(Tangible)★ — 물리적 형태, 안정적 (사원·상품) / ★개념(Conceptual)★ — 형태 없는 개념 (조직·보험상품) / ★사건(Event)★ — 업무 수행 중 발생, 발생량 많음 (주문·청구).",
  "tip": "사건 엔터티 = 발생 빈도 높고 통계에 활용"
 },
 {
  "s": "s1",
  "g": "엔터티",
  "front": "엔터티 분류 — 발생 시점",
  "key": "기본 · 중심 · 행위",
  "back": "★기본(키) 엔터티★ — 독립적으로 생성, 자신의 주식별자 보유 (고객·상품) / ★중심(메인) 엔터티★ — 기본에서 발생, 업무 중심 (계약·주문) / ★행위 엔터티★ — 둘 이상 부모에서 발생, 자주 변경·데이터량 증가 (주문이력).",
  "tip": "부모 2개 이상 = 행위 엔터티"
 },
 {
  "s": "s1",
  "g": "엔터티",
  "front": "엔터티의 특징",
  "key": "6가지 조건",
  "back": "업무에 필요한 정보 · ★유일한 식별자★ · ★인스턴스 2개 이상(집합)★ · 업무 프로세스에서 이용 · ★속성 보유★ · ★관계 1개 이상★.",
  "tip": "인스턴스가 1개뿐이면 엔터티가 아니다"
 },
 {
  "s": "s1",
  "g": "속성",
  "front": "속성 분류 — 특성",
  "key": "기본 · 설계 · 파생",
  "back": "★기본 속성★ — 업무 분석으로 도출한 본래 속성 / ★설계 속성★ — 업무에 없지만 설계상 만든 속성(코드·일련번호) / ★파생 속성★ — 다른 속성에서 계산된 값(합계) → 무결성 관리 부담, 최소화.",
  "tip": "파생 속성은 반정규화(컬럼 파생)와 연결"
 },
 {
  "s": "s1",
  "g": "속성",
  "front": "도메인(Domain)",
  "key": "속성이 가질 수 있는 값의 범위",
  "back": "각 속성이 가질 수 있는 ★값의 범위·데이터 타입·크기·제약조건★. 예: 성별 = {M, F}, 나이 = 0~150 정수.",
  "tip": "CHECK 제약조건으로 구현"
 },
 {
  "s": "s1",
  "g": "관계",
  "front": "관계 표기 3요소",
  "key": "관계명 · 차수 · 선택성",
  "back": "★관계명★ — 관계를 맺는 형태(능동·수동) / ★관계 차수(Cardinality)★ — 1:1 · 1:M · M:N / ★관계 선택사양(Optionality)★ — 필수(Mandatory) · 선택(Optional).",
  "tip": "M:N 은 연결(교차) 엔터티로 해소"
 },
 {
  "s": "s1",
  "g": "관계",
  "front": "존재 관계 vs 행위 관계",
  "key": "엔터티 존재 자체 vs 업무 행위",
  "back": "★존재에 의한 관계★ — 한 엔터티의 존재가 다른 엔터티에 영향 (부서–사원) / ★행위에 의한 관계★ — 업무 행위(이벤트)로 연관 (고객–주문).",
  "tip": "ERD 에서는 구분하지 않고, UML 은 연관·의존으로 구분"
 },
 {
  "s": "s1",
  "g": "식별자",
  "front": "주식별자 특징 4가지",
  "key": "유일성 · 최소성 · 불변성 · 존재성",
  "back": "★유일성★ — 인스턴스를 유일하게 구분 / ★최소성★ — 최소 속성 수 / ★불변성★ — 값이 바뀌지 않음 / ★존재성★ — 반드시 값이 있음(NULL 불가).",
  "tip": "대표성은 주·보조 식별자를 나누는 '분류 기준' — 특징 4가지가 아님"
 },
 {
  "s": "s1",
  "g": "식별자",
  "front": "식별자 분류",
  "key": "대표성 · 생성 · 속성 수 · 대체 여부",
  "back": "대표성 여부 — ★주식별자 / 보조식별자★ / 스스로 생성 여부 — ★내부 / 외부 식별자(FK)★ / 속성 수 — ★단일 / 복합★ / 대체 여부 — ★본질 / 인조 식별자★.",
  "tip": "인조 식별자 남용 시 중복 데이터·불필요한 인덱스 위험"
 },
 {
  "s": "s1",
  "g": "식별자",
  "front": "식별 vs 비식별 관계",
  "key": "부모 주식별자가 자식 PK 냐 일반 속성이냐",
  "back": "★식별 관계★ — 부모 주식별자가 자식 ★주식별자의 일부★, 실선, 강한 종속 / ★비식별 관계★ — 부모 주식별자가 자식의 ★일반 속성★, 점선, 약한 종속.",
  "tip": "식별 관계만 이으면 자식 PK 속성 수가 계속 늘어남 → 비식별로 끊기"
 },
 {
  "s": "s1",
  "g": "정규화",
  "front": "정규형 1NF ~ 5NF",
  "key": "원자값 · 부분 · 이행 · 결정자 · 다치 · 조인",
  "back": "★1NF★ 원자값(반복 그룹 제거) / ★2NF★ 부분 함수 종속 제거 / ★3NF★ 이행 함수 종속 제거 / ★BCNF★ 모든 결정자가 후보키 / ★4NF★ 다치 종속 제거 / ★5NF★ 조인 종속 제거.",
  "tip": "두음: 원·부·이·결·다·조"
 },
 {
  "s": "s1",
  "g": "정규화",
  "front": "이상 현상(Anomaly)",
  "key": "삽입 · 갱신 · 삭제",
  "back": "★삽입 이상★ — 불필요한 데이터까지 함께 넣어야 함 / ★갱신 이상★ — 중복 데이터 일부만 수정돼 불일치 / ★삭제 이상★ — 원치 않는 정보까지 함께 삭제.",
  "tip": "정규화의 목적 = 이상 현상 제거"
 },
 {
  "s": "s1",
  "g": "정규화",
  "front": "함수 종속성",
  "key": "X → Y",
  "back": "X 값이 정해지면 Y 값이 하나로 정해지는 관계(X 결정자, Y 종속자). ★부분 종속★ — 복합키 일부에 종속(2NF 대상) / ★이행 종속★ — X→Y, Y→Z 로 X→Z(3NF 대상).",
  "tip": "부분 종속은 복합 PK 에서만 생긴다"
 },
 {
  "s": "s1",
  "g": "반정규화",
  "front": "반정규화 기법",
  "key": "테이블 · 컬럼 · 관계",
  "back": "★테이블★ — 병합(1:1·1:M·슈퍼/서브) · 분할(수직·수평) · 추가(중복·통계·이력·부분) / ★컬럼★ — 중복·파생·이력·PK 의 의미 분리·오류 복구용 / ★관계★ — 중복 관계 추가.",
  "tip": "반정규화 전에 뷰·인덱스·클러스터링 등 다른 방법부터 검토"
 },
 {
  "s": "s1",
  "g": "반정규화",
  "front": "반정규화 절차",
  "key": "대상 조사 → 다른 방법 검토 → 적용",
  "back": "① ★대상 조사★ (범위 처리 빈도·대량 범위 처리·통계성 프로세스·테이블 조인 개수) → ② ★다른 방법 유도 검토★ (뷰·클러스터링·인덱스·응용 애플리케이션) → ③ ★반정규화 적용★.",
  "tip": "무결성 저하를 감수하므로 마지막 수단"
 },
 {
  "s": "s1",
  "g": "성능",
  "front": "슈퍼/서브타입 변환 3방식",
  "key": "One To One · Plus · Single",
  "back": "★One To One Type★ — 슈퍼·서브를 ★각각 개별 테이블★ (개별 트랜잭션 多) / ★Plus Type★ — ★슈퍼+서브타입 테이블★ (서브타입별 테이블에 슈퍼 속성 포함) / ★Single Type(All in One)★ — ★하나의 테이블★ 로 통합 (전체 일괄 처리 多).",
  "tip": "트랜잭션 처리 유형에 맞춰 선택"
 },
 {
  "s": "s1",
  "g": "성능",
  "front": "PK 컬럼 순서",
  "key": "조회 조건 '=' 컬럼을 앞에",
  "back": "PK 는 자동으로 인덱스가 생성되므로 ★자주 쓰는 조회 조건, 특히 '=' 로 비교하는 컬럼을 앞★ 에 둔다. 범위(BETWEEN·LIKE) 조건 컬럼이 앞이면 인덱스 효율 저하.",
  "tip": "PK 순서는 물리 모델링의 성능 포인트"
 },
 {
  "s": "s1",
  "g": "분산",
  "front": "분산 DB 투명성 6가지",
  "key": "분할 · 위치 · 지역사상 · 중복 · 장애 · 병행",
  "back": "★분할★ — 분할 사실을 몰라도 됨 / ★위치★ — 저장 위치를 몰라도 됨 / ★지역사상★ — 지역 DBMS 와 물리 DB 사이 사상 보장 / ★중복★ — 복제 사실을 몰라도 됨 / ★장애★ — 장애에도 무결성 보장 / ★병행★ — 동시 트랜잭션에도 일관성 보장.",
  "tip": "두음: 분·위·지·중·장·병"
 },
 {
  "s": "s1",
  "g": "트랜잭션",
  "front": "트랜잭션 ACID",
  "key": "원자성 · 일관성 · 고립성 · 지속성",
  "back": "★Atomicity★ 전부 반영 또는 전부 취소 / ★Consistency★ 실행 전후 일관된 상태 / ★Isolation★ 동시 실행 트랜잭션 간 간섭 없음 / ★Durability★ 커밋 결과 영구 반영.",
  "tip": "두음: 원·일·격·지"
 },
 {
  "s": "s2",
  "g": "SQL 분류",
  "front": "SQL 4분류",
  "key": "DDL · DML · DCL · TCL",
  "back": "★DDL★ CREATE·ALTER·DROP·TRUNCATE·RENAME / ★DML★ SELECT·INSERT·UPDATE·DELETE·MERGE / ★DCL★ GRANT·REVOKE / ★TCL★ COMMIT·ROLLBACK·SAVEPOINT",
  "tip": "TRUNCATE 는 DML 이 아니라 ★DDL★"
 },
 {
  "s": "s2",
  "g": "SQL 분류",
  "front": "DELETE vs TRUNCATE vs DROP",
  "key": "행 삭제 · 전체 비우기 · 구조 삭제",
  "back": "★DELETE★ DML — 조건 삭제, 로그 기록, ROLLBACK 가능 / ★TRUNCATE★ DDL — 전체 행 삭제·저장공간 해제, Oracle 은 자동 COMMIT 으로 ROLLBACK 불가 / ★DROP★ DDL — 테이블 구조까지 삭제",
  "tip": "SQL Server 는 명시적 트랜잭션 안의 TRUNCATE·DROP 도 ROLLBACK 가능"
 },
 {
  "s": "s2",
  "g": "SQL 기본",
  "front": "SELECT 논리적 실행 순서",
  "key": "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
  "back": "SELECT 절은 ★거의 마지막★ 에 처리 → WHERE 에서는 SELECT 별칭을 쓸 수 없고 ★ORDER BY 에서는 별칭 사용 가능★.",
  "tip": "두음: 프·웨·그·해·셀·오"
 },
 {
  "s": "s2",
  "g": "트랜잭션",
  "front": "트랜잭션 ACID",
  "key": "원자성 · 일관성 · 고립성 · 지속성",
  "back": "★Atomicity★ 전부 아니면 전무 / ★Consistency★ 무결성 유지 / ★Isolation★ 동시 트랜잭션 간섭 차단 / ★Durability★ COMMIT 결과 영구 보존",
  "tip": "두음: 원·일·고·지"
 },
 {
  "s": "s2",
  "g": "트랜잭션",
  "front": "SAVEPOINT",
  "key": "트랜잭션 중간 저장점",
  "back": "ROLLBACK TO 저장점 → 그 이후 변경만 취소, 앞부분은 유지. 같은 이름 SAVEPOINT 를 다시 만들면 ★뒤의 것이 덮어씀★. COMMIT 하면 모든 저장점 소멸.",
  "tip": "Oracle 은 DDL 실행 시 직전 DML 까지 자동 COMMIT"
 },
 {
  "s": "s2",
  "g": "트랜잭션",
  "front": "격리 수준과 이상 현상",
  "key": "Dirty · Non-Repeatable · Phantom",
  "back": "★Read Uncommitted★ Dirty Read 발생 / ★Read Committed★ Non-Repeatable Read 발생 (Oracle 기본) / ★Repeatable Read★ Phantom Read 발생 / ★Serializable★ 모두 방지",
  "tip": "레벨이 높을수록 동시성은 낮아진다"
 },
 {
  "s": "s2",
  "g": "제약조건",
  "front": "제약조건 5종",
  "key": "PK · UNIQUE · NOT NULL · CHECK · FK",
  "back": "★PK★ = UNIQUE + NOT NULL, 테이블당 1개 / ★UNIQUE★ NULL 허용 / ★CHECK★ 값 범위·조건 / ★FK★ 참조 무결성 — ON DELETE CASCADE·SET NULL / DEFAULT 는 기본값 지정",
  "tip": "FK 는 NULL 허용 — 참조 안 해도 됨"
 },
 {
  "s": "s2",
  "g": "DDL",
  "front": "ALTER TABLE 문법 (Oracle)",
  "key": "ADD · MODIFY · DROP COLUMN · RENAME COLUMN",
  "back": "ALTER TABLE T ★ADD★ (C NUMBER) / ★MODIFY★ (C VARCHAR2(20)) / ★DROP COLUMN★ C / ★RENAME COLUMN★ A TO B. SQL Server 는 ALTER COLUMN, 이름 변경은 sp_rename.",
  "tip": "테이블 이름 변경 — RENAME A TO B (Oracle)"
 },
 {
  "s": "s2",
  "g": "DCL",
  "front": "WITH GRANT OPTION vs WITH ADMIN OPTION",
  "key": "객체 권한 vs 시스템 권한 재부여",
  "back": "★WITH GRANT OPTION★ — 객체 권한 재부여, 원 권한 REVOKE 시 ★연쇄 회수★ / ★WITH ADMIN OPTION★ — 시스템 권한·롤 재부여, REVOKE 해도 ★연쇄 회수되지 않음★",
  "tip": "ROLE = 권한 묶음 — CREATE ROLE → GRANT 권한 TO 롤 → GRANT 롤 TO 사용자"
 },
 {
  "s": "s2",
  "g": "DML",
  "front": "MERGE",
  "key": "있으면 UPDATE, 없으면 INSERT",
  "back": "MERGE INTO 대상 USING 원본 ON (조건) WHEN MATCHED THEN UPDATE … WHEN NOT MATCHED THEN INSERT … — 한 문장으로 동기화(UPSERT).",
  "tip": "Oracle 은 MATCHED 절에 DELETE WHERE 도 가능"
 },
 {
  "s": "s2",
  "g": "NULL",
  "front": "NULL 연산 규칙",
  "key": "산술 = NULL · 비교 = UNKNOWN",
  "back": "NULL 이 들어간 ★산술 연산 결과는 NULL★, 비교는 UNKNOWN → WHERE 에서 거짓 취급. 비교는 반드시 ★IS NULL / IS NOT NULL★.",
  "tip": "= NULL 로 비교하면 항상 0건"
 },
 {
  "s": "s2",
  "g": "NULL",
  "front": "NULL 함수 4종",
  "key": "NVL · NVL2 · COALESCE · NULLIF",
  "back": "★NVL(X,Y)★ X 가 NULL 이면 Y / ★NVL2(X,Y,Z)★ X 가 NULL 아니면 Y, NULL 이면 Z / ★COALESCE(…)★ 첫 번째 NULL 아닌 값 / ★NULLIF(X,Y)★ X=Y 면 NULL, 아니면 X",
  "tip": "ISNULL(X,Y) 은 SQL Server 의 NVL"
 },
 {
  "s": "s2",
  "g": "NULL",
  "front": "집계 함수와 NULL",
  "key": "COUNT(*) 만 NULL 포함",
  "back": "★COUNT(*)★ 는 행 수(NULL 포함), ★COUNT(컬럼)·SUM·AVG·MAX·MIN 은 NULL 제외★. AVG(COMM) 은 NULL 이 아닌 행 수로 나눔 → NVL(COMM,0) 과 결과가 다를 수 있다.",
  "tip": "예제 EMP: AVG(COMM)=50, AVG(NVL(COMM,0))=25"
 },
 {
  "s": "s2",
  "g": "NULL",
  "front": "NULL 정렬 위치",
  "key": "Oracle 최대값 · SQL Server 최소값",
  "back": "★Oracle★ 은 NULL 을 가장 큰 값으로 취급 → ASC 정렬 시 ★맨 뒤★ / ★SQL Server★ 는 가장 작은 값 → ASC 시 맨 앞. NULLS FIRST / NULLS LAST 로 지정 가능(Oracle).",
  "tip": "DESC 면 Oracle NULL 이 맨 앞"
 },
 {
  "s": "s2",
  "g": "함수",
  "front": "문자 함수 핵심",
  "key": "SUBSTR · INSTR · LENGTH · LPAD · TRIM · REPLACE",
  "back": "SUBSTR('SQLPROFESSIONAL',4,3)='PRO' / INSTR('ABCABC','C')=3 / LPAD('7',3,'0')='007' / TRIM 양쪽 공백 제거 / REPLACE(문자,찾을,바꿀)",
  "tip": "Oracle SUBSTR 시작 위치는 1부터 — 0 도 1 로 취급"
 },
 {
  "s": "s2",
  "g": "함수",
  "front": "숫자 함수 핵심",
  "key": "ROUND · TRUNC · CEIL · FLOOR · MOD",
  "back": "ROUND(123.456,1)=123.5 / TRUNC(123.456,-1)=120 / CEIL(-1.5)=-1 / FLOOR(-1.5)=-2 / MOD(10,3)=1",
  "tip": "음수 자리수는 정수 쪽 자리에서 반올림·버림"
 },
 {
  "s": "s2",
  "g": "함수",
  "front": "CASE vs DECODE",
  "key": "표준 조건식 vs Oracle 함수",
  "back": "★CASE WHEN 조건 THEN 값 … ELSE 값 END★ — ANSI 표준, 범위 조건 가능 / ★DECODE(컬럼, 값1, 결과1, …, 기본값)★ — Oracle, 동등 비교만",
  "tip": "ELSE 생략 시 해당 없으면 NULL"
 },
 {
  "s": "s2",
  "g": "그룹",
  "front": "WHERE vs HAVING",
  "key": "그룹 전 필터 vs 그룹 후 필터",
  "back": "★WHERE★ 는 GROUP BY 전에 행을 거르고 집계 함수 사용 불가 / ★HAVING★ 은 그룹 후 그룹을 거르고 집계 함수 사용 가능",
  "tip": "GROUP BY 없이 HAVING 만 쓰면 전체를 한 그룹으로 본다"
 },
 {
  "s": "s2",
  "g": "그룹",
  "front": "ROLLUP · CUBE · GROUPING SETS",
  "key": "계층 소계 · 모든 조합 · 지정 집합",
  "back": "ROLLUP(A,B) = (A,B)+(A)+() / CUBE(A,B) = (A,B)+(A)+(B)+() / GROUPING SETS(A,B) = (A)+(B), 총계 없음. 예제 EMP(DEPTNO,JOB): ROLLUP 9행 · CUBE 12행 · GROUPING SETS 6행",
  "tip": "ROLLUP 은 인수 순서가 바뀌면 결과가 달라진다 — CUBE 는 같다"
 },
 {
  "s": "s2",
  "g": "그룹",
  "front": "GROUPING 함수",
  "key": "소계 행의 NULL 식별",
  "back": "ROLLUP·CUBE 결과에서 해당 컬럼이 ★집계로 생긴 NULL 이면 1★, 원래 값이면 0 → CASE WHEN GROUPING(DEPTNO)=1 THEN '전체' … 로 소계 라벨 표시.",
  "tip": "GROUPING_ID 는 여러 컬럼의 GROUPING 비트를 합친 값"
 },
 {
  "s": "s2",
  "g": "조인",
  "front": "JOIN 유형",
  "key": "INNER · OUTER · CROSS · SELF · NATURAL",
  "back": "INNER 양쪽 일치 / LEFT·RIGHT·FULL OUTER 한쪽·양쪽 보존 / CROSS 카티전 곱 / SELF 자기 자신 / NATURAL 같은 이름 컬럼 자동 동등 조인. 예제 EMP×DEPT: INNER 5 · DEPT LEFT JOIN EMP 7 · FULL 8 · CROSS 24",
  "tip": "CROSS JOIN 행 수 = m × n"
 },
 {
  "s": "s2",
  "g": "조인",
  "front": "Oracle (+) 아우터 조인",
  "key": "(+) 는 NULL 이 채워지는 쪽",
  "back": "WHERE D.DEPTNO = E.DEPTNO(+) → ★DEPT 기준 LEFT OUTER JOIN★ ((+) 붙은 EMP 쪽이 부족해 NULL 로 채워짐). (+) 는 ★OR·IN 과 함께 쓸 수 없고★, FULL OUTER 는 표현 불가.",
  "tip": "(+) 위치 = 데이터가 없을 수 있는 쪽"
 },
 {
  "s": "s2",
  "g": "조인",
  "front": "USING · NATURAL JOIN 제약",
  "key": "공통 컬럼에 테이블 별칭 금지",
  "back": "USING(DEPTNO) · NATURAL JOIN 의 ★공통 컬럼은 접두사(E.DEPTNO) 를 붙일 수 없다★. NATURAL JOIN 은 이름이 같은 모든 컬럼을 조인 조건으로 써서 의도치 않은 조인 위험.",
  "tip": "ON 은 컬럼 이름이 달라도 자유롭게 조건 지정"
 },
 {
  "s": "s2",
  "g": "조인",
  "front": "OUTER JOIN 필터 위치",
  "key": "ON 은 보존 · WHERE 는 제거",
  "back": "DEPT LEFT JOIN EMP ON … ★AND E.SAL>=300★ → 조건 불만족 부서도 보존(5행) / ★WHERE E.SAL>=300★ → NULL 행이 걸러져 사실상 INNER(3행)",
  "tip": "아우터 조인의 안쪽 테이블 조건은 ON 에"
 },
 {
  "s": "s2",
  "g": "서브쿼리",
  "front": "서브쿼리 위치별 분류",
  "key": "스칼라 · 인라인 뷰 · 중첩",
  "back": "★스칼라★ SELECT 절, 1행 1열만 / ★인라인 뷰★ FROM 절, 테이블처럼 사용 / ★중첩(Nested)★ WHERE·HAVING 절. ★상관 서브쿼리★ 는 메인 쿼리 컬럼을 참조해 행마다 실행.",
  "tip": "스칼라 서브쿼리가 2행 이상 반환하면 오류"
 },
 {
  "s": "s2",
  "g": "서브쿼리",
  "front": "IN · ANY · ALL · EXISTS",
  "key": "다중 행 연산자",
  "back": "= ANY = IN / ★> ANY = > MIN★ / ★> ALL = > MAX★ / < ALL = < MIN / EXISTS 는 행 존재 여부만 판단(TRUE·FALSE).",
  "tip": "단일 행 연산자(=,>)에 다중 행 서브쿼리 → 오류"
 },
 {
  "s": "s2",
  "g": "서브쿼리",
  "front": "NOT IN 의 NULL 함정",
  "key": "서브쿼리에 NULL 이 있으면 0건",
  "back": "X NOT IN (A, NULL) = X<>A AND X<>NULL → UNKNOWN → ★결과 0건★. 예제: DEPT WHERE DEPTNO NOT IN (SELECT DEPTNO FROM EMP) → 0건, NOT EXISTS → 2건(30·40)",
  "tip": "대책 — NOT EXISTS 또는 서브쿼리에 IS NOT NULL 조건"
 },
 {
  "s": "s2",
  "g": "집합",
  "front": "집합 연산자",
  "key": "UNION · UNION ALL · INTERSECT · MINUS",
  "back": "UNION 중복 제거 / ★UNION ALL 중복 유지·정렬 없음(가장 빠름)★ / INTERSECT 교집합 / MINUS(EXCEPT) 차집합. 예제 T1(1,2,2,3,NULL)·T2(2,3,4): UNION 5 · UNION ALL 8 · INTERSECT 2 · MINUS 2행",
  "tip": "집합 연산은 NULL 끼리 같은 값으로 취급 — 중복 제거됨"
 },
 {
  "s": "s2",
  "g": "윈도우",
  "front": "순위 함수 3종",
  "key": "ROW_NUMBER · RANK · DENSE_RANK",
  "back": "점수 90·90·85·80 → ROW_NUMBER 1·2·3·4 / ★RANK 1·1·3·4★(동순위 후 건너뜀) / ★DENSE_RANK 1·1·2·3★(건너뛰지 않음)",
  "tip": "NTILE(2) → 1·1·2·2"
 },
 {
  "s": "s2",
  "g": "윈도우",
  "front": "윈도우 프레임 ROWS vs RANGE",
  "key": "물리적 행 vs 논리적 값 범위",
  "back": "ORDER BY 만 쓰면 기본 프레임 = ★RANGE UNBOUNDED PRECEDING AND CURRENT ROW★ → 같은 값(동점) 행이 함께 합산. 예제 SAL 400 두 행: RANGE 누적 1700·1700 / ROWS 누적 1300·1700",
  "tip": "ORDER BY 없이 PARTITION BY 만 → 파티션 전체 집계"
 },
 {
  "s": "s2",
  "g": "윈도우",
  "front": "LAG · LEAD",
  "key": "이전 행 · 다음 행 값",
  "back": "LAG(컬럼, n, 기본값) — n 행 앞 / LEAD(컬럼, n, 기본값) — n 행 뒤. 범위를 벗어나면 기본값(생략 시 NULL).",
  "tip": "전월 대비 증감 = AMT - LAG(AMT) OVER (ORDER BY MON)"
 },
 {
  "s": "s2",
  "g": "윈도우",
  "front": "LAST_VALUE 기본 프레임 함정",
  "key": "현재 행까지만 본다",
  "back": "ORDER BY 가 있는 기본 프레임은 ★현재 행까지★ 라 LAST_VALUE 가 ★현재 행 값★ 을 돌려준다 → 파티션 마지막 값은 ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING 지정.",
  "tip": "FIRST_VALUE 는 기본 프레임으로도 첫 값이 나온다"
 },
 {
  "s": "s2",
  "g": "계층",
  "front": "계층형 쿼리 (Oracle)",
  "key": "START WITH · CONNECT BY PRIOR · LEVEL",
  "back": "★START WITH★ 루트 조건 / ★CONNECT BY PRIOR 자식 = 부모★ … PRIOR EMPNO = MGR 이면 ★위→아래(순방향)★, PRIOR MGR = EMPNO 면 아래→위(역방향) / LEVEL 루트=1 / CONNECT_BY_ISLEAF 리프=1 / SYS_CONNECT_BY_PATH 경로",
  "tip": "ORDER SIBLINGS BY — 계층 구조를 유지하며 형제끼리 정렬"
 },
 {
  "s": "s2",
  "g": "PIVOT",
  "front": "PIVOT · UNPIVOT",
  "key": "행 → 열 · 열 → 행",
  "back": "PIVOT (SUM(SAL) FOR JOB IN ('MGR' AS MGR, 'DEV' AS DEV)) — FOR 컬럼 값이 열로, ★나머지 컬럼은 자동 GROUP BY★ / UNPIVOT 은 열을 행으로, 기본 ★EXCLUDE NULLS★",
  "tip": "인라인 뷰로 필요한 컬럼만 넘겨야 의도한 그룹이 된다"
 },
 {
  "s": "s2",
  "g": "Top-N",
  "front": "ROWNUM 과 Top-N",
  "key": "ORDER BY 보다 먼저 부여",
  "back": "ROWNUM 은 WHERE 단계에서 부여 → 정렬 후 상위 N 은 ★인라인 뷰에서 정렬 후 바깥에서 ROWNUM <= N★. ★WHERE ROWNUM > 1 / = 2 는 0건★. 12c 이상은 FETCH FIRST N ROWS ONLY [WITH TIES].",
  "tip": "SQL Server — TOP (N) [WITH TIES], WITH TIES 는 ORDER BY 필수"
 },
 {
  "s": "s2",
  "g": "정규식",
  "front": "정규 표현식 함수",
  "key": "REGEXP_LIKE · SUBSTR · INSTR · REPLACE · COUNT",
  "back": "REGEXP_SUBSTR('ABC123DEF456','[0-9]+') = '123' / REGEXP_COUNT(…,'[0-9]+') = 2 / REGEXP_REPLACE('A1B22','[0-9]','*') = 'A*B**'. 메타문자 ^ 시작 · $ 끝 · . 임의 1자 · * 0회 이상 · + 1회 이상 · ? 0~1회",
  "tip": "[[:digit:]] = \\d = [0-9]"
 },
 {
  "s": "s3",
  "g": "아키텍처",
  "front": "SGA 주요 구성",
  "key": "Buffer Cache · Shared Pool · Redo Log Buffer",
  "back": "★DB 버퍼 캐시★ — 데이터 블록 캐싱 / ★Shared Pool★ — 라이브러리 캐시(SQL·실행계획)·딕셔너리 캐시 / ★Redo Log Buffer★ — 변경 이력 임시 보관. SGA 는 ★모든 프로세스가 공유★.",
  "tip": "PGA 는 프로세스별 전용 — 정렬(Sort Area)·해시(Hash Area) 작업 공간"
 },
 {
  "s": "s3",
  "g": "아키텍처",
  "front": "논리적 I/O vs 물리적 I/O",
  "key": "버퍼 캐시 읽기 vs 디스크 읽기",
  "back": "★논리적 I/O★ — 버퍼 캐시에서 블록을 읽음(Consistent Gets + DB Block Gets) / ★물리적 I/O★ — 캐시에 없어 디스크에서 읽음. ★버퍼 캐시 히트율 = (1 − 물리 읽기 / 논리 읽기) × 100★.",
  "tip": "튜닝 핵심은 히트율이 아니라 ★논리적 I/O 자체를 줄이는 것★"
 },
 {
  "s": "s3",
  "g": "아키텍처",
  "front": "Single Block I/O vs Multiblock I/O",
  "key": "인덱스 접근 vs Full Scan",
  "back": "★Single Block I/O★ — 한 번에 한 블록(인덱스 루트·브랜치·리프, ROWID 테이블 액세스) · 대기 이벤트 db file sequential read / ★Multiblock I/O★ — 여러 블록을 한 번에(Full Table Scan, Index Fast Full Scan) · db file scattered read.",
  "tip": "한 번에 읽는 블록 수는 db_file_multiblock_read_count"
 },
 {
  "s": "s3",
  "g": "아키텍처",
  "front": "Redo 로그",
  "key": "복구(Roll Forward)·Log Force at Commit",
  "back": "데이터 변경 이력. 장애 시 ★Roll Forward(재실행)★ 로 복구. 커밋 시 ★LGWR 가 Redo 를 먼저 디스크에 기록(Log Force at Commit)★ 하면 데이터 블록은 나중에 DBWR 가 기록해도 된다(Write Ahead Logging).",
  "tip": "커밋 성능은 데이터 블록이 아니라 ★Redo 기록★ 에 좌우"
 },
 {
  "s": "s3",
  "g": "아키텍처",
  "front": "Undo",
  "key": "롤백·읽기 일관성·트랜잭션 복구",
  "back": "변경 전 이미지 보관. ★① 트랜잭션 롤백 ② 읽기 일관성(CR 블록 생성) ③ 장애 후 미커밋 트랜잭션 롤백★ 에 사용. 오래 걸리는 조회가 덮어쓰인 Undo 를 찾지 못하면 ORA-01555(Snapshot too old).",
  "tip": "Redo = 재실행(앞으로) / Undo = 되돌림(뒤로)"
 },
 {
  "s": "s3",
  "g": "옵티마이저",
  "front": "CBO vs RBO",
  "key": "비용 기반 vs 규칙 기반",
  "back": "★CBO★ — 통계 정보(행 수·블록 수·NDV·히스토그램)로 ★비용을 추정★ 해 최저 비용 계획 선택 / ★RBO★ — 정해진 ★우선순위 규칙★(ROWID 단일 행 = 1순위, Full Table Scan = 최하위)으로 결정. 현재는 CBO 표준.",
  "tip": "같은 SQL 도 통계가 바뀌면 CBO 실행계획이 바뀐다"
 },
 {
  "s": "s3",
  "g": "옵티마이저",
  "front": "선택도와 카디널리티",
  "key": "Selectivity × 총 행 수 = Cardinality",
  "back": "★선택도★ — 조건을 만족할 것으로 예상되는 행 비율. 히스토그램이 없으면 '=' 조건 선택도 = ★1 / NDV★ / ★카디널리티★ = 총 행 수 × 선택도 → 실행계획의 예상 행 수(Rows).",
  "tip": "예: 10만 건, NDV 100 → '=' 조건 카디널리티 1,000"
 },
 {
  "s": "s3",
  "g": "옵티마이저",
  "front": "실행계획 읽는 순서",
  "key": "안쪽(들여쓰기 깊은 것)부터, 같은 레벨은 위에서 아래",
  "back": "★들여쓰기가 가장 깊은 오퍼레이션부터★, 같은 깊이면 ★위에서 아래★ 로 실행된다. 조인 오퍼레이션의 첫 번째 자식 = NL 의 ★Outer(드라이빙)★ · Hash 의 ★Build Input★.",
  "tip": "Predicate Information 의 access(인덱스 탐색 조건) vs filter(걸러내기) 구분"
 },
 {
  "s": "s3",
  "g": "파싱",
  "front": "하드 파싱 vs 소프트 파싱",
  "key": "라이브러리 캐시 미스 vs 히트",
  "back": "SQL 을 ★라이브러리 캐시에서 찾으면 소프트 파싱★(바로 실행), 없으면 ★하드 파싱★(최적화 + 로우 소스 생성 — CPU·래치 소모 큼). ★리터럴 SQL★ 은 값마다 다른 SQL 이 되어 하드 파싱 반복.",
  "tip": "대책 — ★바인드 변수★ 사용"
 },
 {
  "s": "s3",
  "g": "파싱",
  "front": "바인드 변수",
  "key": "SQL 공유 → 하드 파싱 감소",
  "back": "WHERE 고객번호 = :b1 처럼 값 자리를 변수로 두어 ★SQL 텍스트가 같아지므로 실행계획을 공유★. 단, 값 분포가 치우친 컬럼은 값마다 최적 계획이 달라 불리할 수 있다(바인드 변수 Peeking·Adaptive Cursor Sharing).",
  "tip": "SQL 공유 조건 — 대소문자·공백·주석까지 텍스트가 완전히 같아야 한다"
 },
 {
  "s": "s3",
  "g": "인덱스",
  "front": "B*Tree 인덱스 구조",
  "key": "루트 → 브랜치 → 리프(키 + ROWID)",
  "back": "★수직적 탐색★ 으로 루트·브랜치를 거쳐 시작 리프 블록을 찾고, 리프 블록을 ★수평적 탐색★(양방향 연결 리스트)하며 조건 범위를 스캔. 리프에는 ★인덱스 키 + ROWID★ 저장.",
  "tip": "단일 컬럼 인덱스에는 키가 NULL 인 행이 저장되지 않는다(Oracle)"
 },
 {
  "s": "s3",
  "g": "인덱스",
  "front": "Index Range Scan",
  "key": "선두 컬럼 조건 필수",
  "back": "가장 일반적인 인덱스 스캔. ★인덱스 선두 컬럼이 가공되지 않은 조건★ 으로 쓰여야 범위를 정해 스캔 가능. 성능은 ★인덱스 스캔 범위★ 와 ★테이블 랜덤 액세스 횟수★ 에 좌우.",
  "tip": "선두 컬럼 조건이 없으면 Full Scan 이나 Skip Scan"
 },
 {
  "s": "s3",
  "g": "인덱스",
  "front": "Index Full Scan vs Fast Full Scan",
  "key": "정렬 보장·Single vs 정렬 미보장·Multiblock",
  "back": "★Index Full Scan★ — 리프를 처음부터 끝까지 ★순서대로★(Single Block I/O), 정렬 생략 가능 / ★Index Fast Full Scan★ — 인덱스 세그먼트 전체를 ★Multiblock I/O★ 로 읽음, ★순서 보장 X★, 병렬 가능, 필요한 컬럼이 모두 인덱스에 있어야 함.",
  "tip": "INDEX_FFS 힌트"
 },
 {
  "s": "s3",
  "g": "인덱스",
  "front": "Index Skip Scan",
  "key": "선두 컬럼 조건 없을 때 선두 값 단위로 건너뛰기",
  "back": "결합 인덱스 ★선두 컬럼이 조건에 없고★ 후행 컬럼에 조건이 있을 때, ★선두 컬럼 NDV 가 적으면★ 선두 값별로 서브 인덱스처럼 탐색하며 불필요한 리프를 건너뜀.",
  "tip": "INDEX_SS 힌트 — 선두 NDV 가 크면 비효율"
 },
 {
  "s": "s3",
  "g": "인덱스",
  "front": "인덱스를 못 타는 조건",
  "key": "컬럼 가공·형변환·부정·앞 %",
  "back": "★인덱스 컬럼 가공★(SUBSTR·TO_CHAR·연산) · ★묵시적 형변환으로 컬럼이 변환★ · 부정형(!=, NOT IN) · ★LIKE '%값'★ · IS NULL(단일 컬럼 B*Tree) → Range Scan 불가.",
  "tip": "해결 — 조건을 가공하지 말고 상수 쪽을 변환, 함수 기반 인덱스(FBI)"
 },
 {
  "s": "s3",
  "g": "인덱스",
  "front": "클러스터링 팩터",
  "key": "인덱스 순서와 테이블 저장 순서의 일치도",
  "back": "인덱스 키 순서대로 테이블을 읽을 때 ★블록을 얼마나 자주 바꾸는지★ 의 지표. ★블록 수에 가까울수록 좋고(같은 블록 연속 액세스)★, 행 수에 가까울수록 나쁘다(랜덤 액세스 증가).",
  "tip": "CF 가 나쁘면 같은 건수라도 인덱스 경유 비용이 커져 Full Scan 이 유리"
 },
 {
  "s": "s3",
  "g": "조인",
  "front": "NL 조인",
  "key": "Outer 1행마다 Inner 인덱스 탐색",
  "back": "드라이빙(Outer) 테이블 행마다 Inner 를 반복 탐색. ★Inner 조인 컬럼 인덱스 필수★, ★랜덤 액세스★ 위주, ★부분범위 처리 가능★ → ★소량·OLTP★ 에 적합.",
  "tip": "드라이빙 테이블은 결과 건수가 적은(조건이 강한) 쪽"
 },
 {
  "s": "s3",
  "g": "조인",
  "front": "Hash 조인",
  "key": "작은 쪽으로 해시 맵 Build → 큰 쪽 Probe",
  "back": "작은 집합(★Build Input★)으로 PGA 에 해시 맵을 만들고 큰 집합(★Probe Input★)을 읽으며 탐색. ★등치(=) 조인만★ 가능, 인덱스 불필요, ★대용량·DW★ 에 적합.",
  "tip": "Build Input 이 Hash Area 를 넘으면 Temp 사용으로 성능 저하"
 },
 {
  "s": "s3",
  "g": "조인",
  "front": "Sort Merge 조인",
  "key": "양쪽 정렬 후 병합",
  "back": "양쪽 집합을 조인 컬럼으로 ★정렬한 뒤 병합★. ★비등치(>, <, BETWEEN) 조인 가능★, 인덱스 불필요. 정렬 비용(PGA·Temp)이 크다.",
  "tip": "등치 조인 대용량이면 보통 Hash 조인이 유리"
 },
 {
  "s": "s3",
  "g": "조인",
  "front": "세미 조인 · 안티 조인",
  "key": "EXISTS / NOT EXISTS 의 조인 변환",
  "back": "★세미 조인★ — EXISTS·IN 서브쿼리를 조인으로 처리하되 메인 행을 ★한 번만★ 반환 / ★안티 조인★ — NOT EXISTS·NOT IN 을 조인으로 처리해 ★매칭되지 않는 행★ 반환.",
  "tip": "NOT IN 은 서브쿼리 결과에 NULL 이 있으면 결과가 공집합 — NOT EXISTS 와 다르다"
 },
 {
  "s": "s3",
  "g": "쿼리 변환",
  "front": "서브쿼리 Unnesting",
  "key": "서브쿼리를 풀어 조인으로 변환",
  "back": "중첩된 서브쿼리를 ★조인 형태로 풀어★ 조인 순서·방식을 자유롭게 선택하게 하는 변환. ★UNNEST★ / NO_UNNEST 힌트. 풀지 않으면 ★필터 오퍼레이션★ 으로 메인 행마다 수행(서브쿼리 캐싱 적용).",
  "tip": "필터 방식은 메인 쿼리가 항상 드라이빙"
 },
 {
  "s": "s3",
  "g": "쿼리 변환",
  "front": "뷰 Merging · 조건절 Pushing",
  "key": "뷰를 풀어 합침 · 조건을 뷰 안으로 밀어 넣음",
  "back": "★뷰 Merging★ — 인라인 뷰를 메인 쿼리와 합쳐 최적화 범위 확대(MERGE / ★NO_MERGE★) / ★조건절 Pushing★ — 뷰를 머지하지 못할 때 메인 조건을 ★뷰 안쪽으로 밀어 넣어★ 처리 건수를 줄임(PUSH_PRED).",
  "tip": "GROUP BY·ROWNUM·집합 연산이 있는 뷰는 단순 머지 불가"
 },
 {
  "s": "s3",
  "g": "소트",
  "front": "소트를 유발하는 연산",
  "key": "ORDER BY · GROUP BY · DISTINCT · UNION · 소트 머지 조인",
  "back": "ORDER BY · GROUP BY · DISTINCT · ★UNION·MINUS·INTERSECT★ · 소트 머지 조인 · 윈도우 함수 · 인덱스 생성. 소트 영역(PGA)이 부족하면 ★Temp 디스크 소트★ 로 급격히 느려짐.",
  "tip": "★UNION ALL 은 중복 제거 소트가 없다★ — 중복이 없음이 확실하면 UNION ALL"
 },
 {
  "s": "s3",
  "g": "소트",
  "front": "인덱스로 소트 생략",
  "key": "ORDER BY 컬럼 순서 = 인덱스 순서",
  "back": "조건 컬럼과 ORDER BY 컬럼이 ★인덱스 구성 순서와 일치★ 하면 인덱스를 읽는 순서가 곧 정렬 순서 → 실행계획에서 SORT ORDER BY 가 사라짐(★부분범위 처리 가능★).",
  "tip": "MIN·MAX 도 인덱스 끝 한 건만 읽는 FIRST ROW 처리 가능"
 },
 {
  "s": "s3",
  "g": "힌트",
  "front": "힌트 기본 규칙",
  "key": "/*+ 힌트 */ — SELECT 바로 뒤",
  "back": "주석 형태 ★/*+ ... */★ 를 SELECT·INSERT·UPDATE·DELETE ★키워드 바로 뒤★ 에 쓴다. 테이블에 ★별칭(Alias)을 쓰면 힌트에도 별칭★ 을 써야 한다.",
  "tip": "문법이 틀려도 오류가 나지 않고 ★조용히 무시★ 된다"
 },
 {
  "s": "s3",
  "g": "힌트",
  "front": "LEADING vs ORDERED",
  "key": "조인 순서 지정",
  "back": "★LEADING(t1 t2)★ — 괄호 안 순서대로 조인 / ★ORDERED★ — FROM 절에 나열한 순서대로 조인. 조인 방식은 USE_NL·USE_HASH·USE_MERGE 로 따로 지정.",
  "tip": "예: /*+ LEADING(d) USE_NL(e) */ — d 를 드라이빙, e 를 NL Inner 로"
 },
 {
  "s": "s3",
  "g": "힌트",
  "front": "접근 경로 힌트",
  "key": "FULL · INDEX · INDEX_FFS · INDEX_SS · NO_INDEX",
  "back": "★FULL(t)★ 테이블 풀 스캔 · ★INDEX(t 인덱스명)★ 인덱스 사용 · INDEX_DESC 역순 · ★INDEX_FFS★ Fast Full Scan · ★INDEX_SS★ Skip Scan · NO_INDEX 해당 인덱스 배제.",
  "tip": "존재하지 않는 인덱스명을 쓰면 힌트 무시"
 },
 {
  "s": "s3",
  "g": "힌트",
  "front": "힌트가 무시되는 경우",
  "key": "문법 오류·별칭 불일치·실행 불가",
  "back": "★문법 오류★ · 테이블 별칭이 있는데 ★테이블명 사용★ · 존재하지 않는 인덱스 · ★논리적으로 실행 불가★(비등치 조인에 USE_HASH 등) · 쿼리 변환으로 대상이 사라짐.",
  "tip": "힌트는 ★명령★ 이지만 실행 불가능하면 옵티마이저가 무시한다"
 },
 {
  "s": "s3",
  "g": "힌트",
  "front": "최적화 목표 힌트",
  "key": "ALL_ROWS vs FIRST_ROWS(n)",
  "back": "★ALL_ROWS★ — 전체 처리량(총 비용) 최소화, 배치·DW 기본값 / ★FIRST_ROWS(n)★ — 처음 n 건을 빨리 반환, OLTP 화면 페이징에 적합(NL 조인·인덱스 선호).",
  "tip": "Oracle 기본 OPTIMIZER_MODE = ALL_ROWS"
 },
 {
  "s": "s3",
  "g": "힌트",
  "front": "APPEND 힌트",
  "key": "Direct Path Insert",
  "back": "INSERT /*+ APPEND */ INTO ... SELECT — ★버퍼 캐시를 거치지 않고 HWM 위에 직접 기록★, NOLOGGING 과 함께면 Redo 최소화 → 대량 적재 고속화. 작업 중 대상 테이블에 ★배타 Lock(TM)★.",
  "tip": "INSERT ... VALUES 단건에는 효과 없음(12c 이상은 APPEND_VALUES)"
 },
 {
  "s": "s3",
  "g": "부분범위",
  "front": "부분범위 처리",
  "key": "전체를 다 처리하지 않고 운반 단위만큼 먼저 응답",
  "back": "클라이언트가 요청한 ★Fetch(Array Size) 단위만큼만★ 결과를 만들어 바로 보내고 다음 요청을 기다리는 처리. ★정렬·그룹핑이 없거나 인덱스로 소트를 생략★ 할 수 있어야 가능.",
  "tip": "ORDER BY 를 인덱스로 대체하지 못하면 전체를 읽고 정렬해야 하므로 부분범위 처리 불가"
 },
 {
  "s": "s3",
  "g": "부분범위",
  "front": "ROWNUM 페이징 함정",
  "key": "ROWNUM 은 ORDER BY 이전에 부여",
  "back": "ROWNUM 은 ★WHERE 를 통과하는 순간 부여★ 되므로 같은 블록에서 ORDER BY 와 함께 쓰면 정렬 전 임의 N 건을 자름. ★정렬은 인라인 뷰 안에서, ROWNUM 은 바깥에서★. ROWNUM > 1 은 결과 0건.",
  "tip": "Top-N Stopkey — 인라인 뷰 정렬 + ROWNUM <= N"
 },
 {
  "s": "s3",
  "g": "부분범위",
  "front": "OFFSET-FETCH (표준)",
  "key": "OFFSET n ROWS FETCH NEXT m ROWS ONLY",
  "back": "ANSI 표준 페이징(Oracle 12c 이상). ORDER BY 뒤에 ★OFFSET 건너뛸 행 수★ 와 ★FETCH NEXT 가져올 행 수★ 지정.",
  "tip": "뒤 페이지로 갈수록 앞부분을 읽고 버리는 비용 증가"
 },
 {
  "s": "s3",
  "g": "병렬",
  "front": "병렬 처리 구조",
  "key": "QC + 병렬 서버(Producer/Consumer)",
  "back": "★QC(Query Coordinator)★ 가 작업을 나누고 ★병렬 서버★ 가 실행. 두 단계 작업이면 ★Producer 집합과 Consumer 집합★ 이 함께 일해 ★DOP × 2★ 개의 서버가 쓰일 수 있다.",
  "tip": "/*+ PARALLEL(t 4) */ — DOP 4"
 },
 {
  "s": "s3",
  "g": "병렬",
  "front": "Granule",
  "key": "병렬 작업 분배 단위",
  "back": "★블록 기반 Granule★ — 테이블을 블록 범위로 나눠 분배(기본) / ★파티션 기반 Granule★ — 파티션 단위로 분배(파티션 수가 DOP 를 제한).",
  "tip": "Inter-operation(서버 집합 간) vs Intra-operation(같은 집합 내) 병렬"
 },
 {
  "s": "s3",
  "g": "병렬",
  "front": "병렬 데이터 분배 방식",
  "key": "Range · Hash · Broadcast · Key · Round-Robin",
  "back": "Producer → Consumer 로 데이터를 보내는 방식. ★Broadcast★ — 작은 집합을 모든 서버에 복제(한쪽이 작을 때 유리) / ★Hash★ — 조인 키 해시로 양쪽 재분배(양쪽 대용량) / Range — 정렬용 / Round-Robin — 균등 분배.",
  "tip": "PQ_DISTRIBUTE 힌트로 지정"
 },
 {
  "s": "s3",
  "g": "DML",
  "front": "DML 성능 저하 요인",
  "key": "인덱스·제약·트리거·Redo·Undo·Lock",
  "back": "테이블 행 변경마다 ★인덱스 유지★ · 무결성 제약 검사 · 트리거 · ★Redo·Undo 생성★ · Lock 대기·커밋 빈도가 성능을 좌우. 대량 작업은 ★인덱스 Unusable 후 재생성★·Direct Path 고려.",
  "tip": "커밋을 너무 자주 하면 로그 기록 대기 증가, 너무 드물면 Undo·Lock 부담"
 },
 {
  "s": "s3",
  "g": "파티션",
  "front": "파티션 Pruning",
  "key": "조건에 맞는 파티션만 읽기",
  "back": "파티션 키 조건으로 ★불필요한 파티션을 액세스 대상에서 제외★. 상수 조건이면 파싱 시점 결정(★정적★), 바인드 변수·조인이면 실행 시점 결정(★동적★).",
  "tip": "파티션 키 컬럼을 가공하면 Pruning 불가"
 },
 {
  "s": "s3",
  "g": "파티션",
  "front": "Local vs Global 인덱스",
  "key": "테이블 파티션과 1:1 vs 독립",
  "back": "★Local 인덱스★ — 테이블 파티션과 ★1:1★ 로 파티셔닝, 파티션 관리(DROP·TRUNCATE) 시 자동 관리 / ★Global 인덱스★ — 테이블과 별개로 파티셔닝(또는 비파티션), 파티션 작업 시 Unusable 될 수 있음.",
  "tip": "Local Prefixed = 파티션 키가 인덱스 선두 컬럼"
 },
 {
  "s": "s3",
  "g": "동시성",
  "front": "트랜잭션 격리 수준",
  "key": "Read Uncommitted → Read Committed → Repeatable Read → Serializable",
  "back": "★Read Uncommitted★ Dirty Read 허용 / ★Read Committed★ Non-Repeatable Read 발생 / ★Repeatable Read★ Phantom Read 발생 / ★Serializable★ 모두 방지. ★Oracle 기본은 Read Committed★(Undo 로 문장 수준 읽기 일관성).",
  "tip": "격리 수준을 높일수록 일관성 ↑, 동시성 ↓"
 },
 {
  "s": "s3",
  "g": "동시성",
  "front": "Oracle Lock 특징",
  "key": "읽기는 쓰기를 막지 않는다",
  "back": "Oracle 은 ★SELECT 가 Lock 을 걸지 않고★ Undo 로 일관된 읽기를 제공 → 읽기·쓰기가 서로 막지 않음. DML 시 ★행 Lock(TX)★ + ★테이블 Lock(TM)★, ★Lock 에스컬레이션 없음★.",
  "tip": "SELECT ... FOR UPDATE 로 읽으면서 행 Lock 획득"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ 정규화 단계 총정리",
  "type": "table",
  "head": [
   "정규형",
   "조건",
   "제거 대상",
   "예시 포인트"
  ],
  "rows": [
   [
    "1NF",
    "모든 속성이 ★원자값★",
    "반복 그룹 · 다중값 속성",
    "전화번호 여러 개를 한 컬럼에 → 행·테이블 분리"
   ],
   [
    "2NF",
    "1NF + ★부분 함수 종속 제거★",
    "복합 PK 일부에만 종속된 속성",
    "(주문번호, 상품코드) PK 에서 상품명은 상품코드에만 종속"
   ],
   [
    "3NF",
    "2NF + ★이행 함수 종속 제거★",
    "PK → A → B 형태의 B",
    "사번 → 부서코드 → 부서명"
   ],
   [
    "BCNF",
    "★모든 결정자가 후보키★",
    "후보키가 아닌 결정자",
    "3NF 를 만족해도 위반 가능"
   ],
   [
    "4NF",
    "BCNF + ★다치 종속 제거★",
    "독립적인 다중값 속성 쌍",
    "강좌–교수, 강좌–교재가 독립"
   ],
   [
    "5NF",
    "4NF + ★조인 종속 제거★",
    "후보키를 통하지 않는 조인 종속",
    "분해 후 조인 시 원래 릴레이션 복원"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 엔터티·속성·관계·식별자 분류",
  "type": "table",
  "head": [
   "대상",
   "분류 기준",
   "종류"
  ],
  "rows": [
   [
    "엔터티",
    "유무형",
    "유형 · 개념 · 사건"
   ],
   [
    "엔터티",
    "발생 시점",
    "기본(키) · 중심(메인) · 행위"
   ],
   [
    "속성",
    "특성",
    "기본 · 설계 · 파생"
   ],
   [
    "속성",
    "구성 방식",
    "PK 속성 · FK 속성 · 일반 속성"
   ],
   [
    "관계",
    "표기 요소",
    "관계명 · 차수(1:1·1:M·M:N) · 선택성(필수·선택)"
   ],
   [
    "식별자",
    "대표성 여부",
    "주식별자 · 보조식별자"
   ],
   [
    "식별자",
    "스스로 생성 여부",
    "내부 식별자 · 외부 식별자"
   ],
   [
    "식별자",
    "속성 수",
    "단일 식별자 · 복합 식별자"
   ],
   [
    "식별자",
    "대체 여부",
    "본질 식별자 · 인조 식별자"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 성능·분산 모델링 핵심",
  "type": "table",
  "head": [
   "주제",
   "핵심",
   "포인트"
  ],
  "rows": [
   [
    "반정규화 — 테이블",
    "병합 · 분할(수직·수평) · 추가(중복·통계·이력·부분)",
    "수직 분할 = 컬럼 분리, 수평 분할 = 행 분리"
   ],
   [
    "반정규화 — 컬럼",
    "중복 · 파생 · 이력 · PK 의미 분리 · 오류 복구용",
    "조인 감소·계산 생략"
   ],
   [
    "반정규화 — 관계",
    "중복 관계 추가",
    "조인 경로 단축"
   ],
   [
    "슈퍼/서브타입",
    "One To One · Plus · Single(All in One)",
    "트랜잭션 유형으로 선택"
   ],
   [
    "파티셔닝",
    "Range · List · Hash · Composite",
    "대용량 테이블 성능·관리"
   ],
   [
    "PK 순서",
    "'=' 조회 조건 컬럼을 앞에",
    "범위 조건 컬럼이 앞이면 비효율"
   ],
   [
    "분산 투명성",
    "분할 · 위치 · 지역사상 · 중복 · 장애 · 병행",
    "두음 분·위·지·중·장·병"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 예제 테이블 EMP · DEPT (문항 공통)",
  "type": "table",
  "head": [
   "EMPNO",
   "ENAME",
   "JOB",
   "DEPTNO",
   "SAL",
   "COMM",
   "MGR"
  ],
  "rows": [
   [
    "1",
    "KIM",
    "MGR",
    "10",
    "300",
    "NULL",
    "NULL"
   ],
   [
    "2",
    "LEE",
    "CLERK",
    "10",
    "200",
    "50",
    "1"
   ],
   [
    "3",
    "PARK",
    "MGR",
    "20",
    "400",
    "NULL",
    "1"
   ],
   [
    "4",
    "CHOI",
    "DEV",
    "20",
    "400",
    "100",
    "3"
   ],
   [
    "5",
    "JUNG",
    "DEV",
    "20",
    "250",
    "0",
    "3"
   ],
   [
    "6",
    "KANG",
    "CLERK",
    "NULL",
    "150",
    "NULL",
    "1"
   ],
   [
    "DEPT",
    "10 영업",
    "20 개발",
    "30 인사",
    "40 총무",
    "—",
    "—"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ NULL · 집계 · 조인 결과 요약 (예제 테이블 기준, sqlite 검증)",
  "type": "table",
  "head": [
   "식",
   "결과",
   "포인트"
  ],
  "rows": [
   [
    "COUNT(*) / COUNT(COMM)",
    "6 / 3",
    "COUNT(컬럼)은 NULL 제외"
   ],
   [
    "AVG(COMM) / AVG(NVL(COMM,0))",
    "50 / 25",
    "분모가 다르다"
   ],
   [
    "COUNT(DISTINCT DEPTNO)",
    "2",
    "NULL 은 세지 않음"
   ],
   [
    "GROUP BY DEPTNO 그룹 수",
    "3",
    "NULL 도 하나의 그룹"
   ],
   [
    "EMP JOIN DEPT",
    "5",
    "DEPTNO NULL 인 KANG 제외"
   ],
   [
    "DEPT LEFT JOIN EMP",
    "7",
    "30·40 부서 NULL 행 보존"
   ],
   [
    "EMP FULL JOIN DEPT",
    "8",
    "KANG + 30 + 40 추가"
   ],
   [
    "NOT IN (… DEPTNO 에 NULL)",
    "0",
    "NOT EXISTS 는 2건"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 윈도우 함수 정리",
  "type": "table",
  "head": [
   "함수",
   "용도",
   "포인트"
  ],
  "rows": [
   [
    "ROW_NUMBER",
    "고유 순번",
    "동점도 다른 번호"
   ],
   [
    "RANK",
    "동점 같은 순위 후 건너뜀",
    "1·1·3"
   ],
   [
    "DENSE_RANK",
    "동점 같은 순위, 연속",
    "1·1·2"
   ],
   [
    "NTILE(n)",
    "n 등분 그룹 번호",
    "앞 그룹부터 1개씩 더"
   ],
   [
    "SUM·AVG OVER",
    "누적·이동 집계",
    "ROWS/RANGE 프레임"
   ],
   [
    "LAG / LEAD",
    "이전 / 다음 행",
    "범위 밖은 NULL(기본값 지정 가능)"
   ],
   [
    "FIRST_VALUE / LAST_VALUE",
    "프레임 첫·끝 값",
    "LAST_VALUE 기본 프레임 함정"
   ],
   [
    "CUME_DIST",
    "누적 분포 (현재 이하 비율)",
    "동점은 같은 값"
   ],
   [
    "PERCENT_RANK",
    "(RANK−1)/(행수−1)",
    "첫 행 0"
   ],
   [
    "RATIO_TO_REPORT",
    "전체 합 대비 비율",
    "Oracle"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 다중 행 연산자 · 집합 연산자",
  "type": "table",
  "head": [
   "식",
   "의미",
   "같은 표현"
  ],
  "rows": [
   [
    "= ANY (서브)",
    "하나라도 같음",
    "IN"
   ],
   [
    "> ANY (서브)",
    "최솟값보다 큼",
    "> MIN"
   ],
   [
    "> ALL (서브)",
    "최댓값보다 큼",
    "> MAX"
   ],
   [
    "< ALL (서브)",
    "최솟값보다 작음",
    "< MIN"
   ],
   [
    "EXISTS (서브)",
    "행 존재 여부",
    "NULL 무관"
   ],
   [
    "NOT IN (서브)",
    "어느 것과도 다름",
    "NULL 있으면 0건"
   ],
   [
    "UNION",
    "합집합 중복 제거",
    "정렬 부담"
   ],
   [
    "UNION ALL",
    "합집합 중복 유지",
    "가장 빠름"
   ],
   [
    "INTERSECT · MINUS",
    "교집합 · 차집합",
    "MINUS = EXCEPT"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 인덱스 스캔 방식",
  "type": "table",
  "head": [
   "스캔",
   "언제",
   "I/O·정렬",
   "힌트"
  ],
  "rows": [
   [
    "INDEX UNIQUE SCAN",
    "Unique 인덱스 모든 컬럼에 '=' 조건",
    "1건 · Single Block",
    "INDEX"
   ],
   [
    "★INDEX RANGE SCAN★",
    "선두 컬럼에 가공 없는 범위·'=' 조건",
    "Single Block · 정렬 보장",
    "INDEX"
   ],
   [
    "INDEX RANGE SCAN DESCENDING",
    "역순 범위·MAX 등",
    "Single Block · 역순",
    "INDEX_DESC"
   ],
   [
    "INDEX FULL SCAN",
    "선두 조건 없음 · 정렬 생략 목적",
    "Single Block · 정렬 보장",
    "INDEX"
   ],
   [
    "★INDEX FAST FULL SCAN★",
    "필요 컬럼이 모두 인덱스에 있음",
    "★Multiblock · 정렬 미보장 · 병렬 가능★",
    "INDEX_FFS"
   ],
   [
    "★INDEX SKIP SCAN★",
    "선두 조건 없음 + 선두 NDV 적음 + 후행 조건",
    "선두 값별 건너뛰기",
    "INDEX_SS"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 조인 방식 3종 비교",
  "type": "table",
  "head": [
   "구분",
   "NL 조인",
   "Sort Merge 조인",
   "Hash 조인"
  ],
  "rows": [
   [
    "동작",
    "Outer 행마다 Inner 탐색",
    "양쪽 정렬 후 병합",
    "Build 해시 맵 → Probe 탐색"
   ],
   [
    "인덱스",
    "★Inner 조인 컬럼 필수★",
    "불필요",
    "불필요"
   ],
   [
    "조인 조건",
    "모두 가능",
    "★비등치 가능★",
    "★등치(=)만★"
   ],
   [
    "I/O 특성",
    "★랜덤 액세스★",
    "PGA 정렬",
    "PGA 해시 영역"
   ],
   [
    "부분범위 처리",
    "★가능★",
    "정렬 후 가능",
    "Build 완료 후"
   ],
   [
    "적합",
    "★소량·OLTP★",
    "대량·비등치",
    "★대량·DW★ · 등치"
   ],
   [
    "힌트",
    "USE_NL",
    "USE_MERGE",
    "USE_HASH"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 인덱스를 못 타는 패턴과 개선",
  "type": "table",
  "head": [
   "나쁜 조건",
   "원인",
   "개선"
  ],
  "rows": [
   [
    "WHERE SUBSTR(주문일자,1,6) = '202410'",
    "★컬럼 가공★",
    "주문일자 LIKE '202410%' 또는 BETWEEN"
   ],
   [
    "WHERE 급여 * 12 > 60000000",
    "컬럼 연산",
    "급여 > 60000000 / 12"
   ],
   [
    "WHERE 문자형_고객번호 = 12345",
    "★컬럼이 TO_NUMBER 로 묵시적 변환★",
    "고객번호 = '12345'"
   ],
   [
    "WHERE 이름 LIKE '%철수'",
    "앞쪽 와일드카드",
    "전문 검색·역순 FBI 등 별도 설계"
   ],
   [
    "WHERE NVL(상태,'X') = 'A'",
    "컬럼 가공",
    "상태 = 'A'"
   ],
   [
    "WHERE TO_CHAR(등록일,'YYYYMMDD') = '20241001'",
    "날짜 컬럼 가공",
    "등록일 >= DATE '2024-10-01' AND 등록일 < DATE '2024-10-02'"
   ],
   [
    "WHERE 컬럼 IS NULL (단일 컬럼 B*Tree)",
    "NULL 키 미저장",
    "NOT NULL 컬럼과 결합 인덱스 · 기본값 설계"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 주요 힌트",
  "type": "table",
  "head": [
   "분류",
   "힌트",
   "의미"
  ],
  "rows": [
   [
    "최적화 목표",
    "ALL_ROWS · FIRST_ROWS(n)",
    "전체 처리량 · 첫 n 건 응답"
   ],
   [
    "접근 경로",
    "FULL · INDEX · INDEX_DESC · INDEX_FFS · INDEX_SS · NO_INDEX",
    "풀 스캔 · 인덱스 · 역순 · FFS · Skip · 배제"
   ],
   [
    "조인 순서",
    "★LEADING(t1 t2)★ · ORDERED",
    "지정 순서 · FROM 절 순서"
   ],
   [
    "조인 방식",
    "★USE_NL · USE_HASH · USE_MERGE★",
    "NL · Hash · Sort Merge"
   ],
   [
    "Hash 입력",
    "SWAP_JOIN_INPUTS(t)",
    "t 를 Build Input 으로"
   ],
   [
    "쿼리 변환",
    "UNNEST · NO_UNNEST · MERGE · ★NO_MERGE★ · PUSH_PRED · USE_CONCAT",
    "Unnesting · 뷰 머징 · 조건 Pushing · OR Expansion"
   ],
   [
    "서브쿼리 조인",
    "NL_SJ · HASH_SJ · NL_AJ · HASH_AJ",
    "세미 조인 · 안티 조인 방식"
   ],
   [
    "병렬",
    "PARALLEL(t n) · NO_PARALLEL · PQ_DISTRIBUTE",
    "병렬도 · 비병렬 · 분배 방식"
   ],
   [
    "적재",
    "★APPEND★ · APPEND_VALUES",
    "Direct Path Insert"
   ],
   [
    "WITH 절",
    "MATERIALIZE · INLINE",
    "임시 테이블화 · 인라인 처리"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 격리 수준과 이상 현상",
  "type": "table",
  "head": [
   "격리 수준",
   "Dirty Read",
   "Non-Repeatable Read",
   "Phantom Read"
  ],
  "rows": [
   [
    "Read Uncommitted",
    "발생",
    "발생",
    "발생"
   ],
   [
    "★Read Committed★ (Oracle 기본)",
    "방지",
    "발생",
    "발생"
   ],
   [
    "Repeatable Read",
    "방지",
    "방지",
    "발생"
   ],
   [
    "★Serializable★",
    "방지",
    "방지",
    "방지"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "정규화는 물리 모델링 단계에서 수행한다 — 아니다. 논리 모델링 단계"
 },
 {
  "s": "s1",
  "t": "주식별자 특징에 대표성이 포함된다 — 아니다. 특징은 유일성·최소성·불변성·존재성 4가지. 대표성은 주·보조 식별자를 나누는 분류 기준"
 },
 {
  "s": "s1",
  "t": "2NF 는 이행 함수 종속을 제거한다 — 아니다. 2NF 는 부분 함수 종속, 3NF 가 이행 함수 종속 제거"
 },
 {
  "s": "s1",
  "t": "3NF 를 만족하면 BCNF 도 만족한다 — 아니다. 후보키가 아닌 결정자가 있으면 BCNF 위반"
 },
 {
  "s": "s1",
  "t": "식별 관계는 ERD 에서 점선으로 표시한다 — 아니다. 식별 관계는 실선, 비식별 관계는 점선"
 },
 {
  "s": "s1",
  "t": "M:N 관계는 물리 테이블로 그대로 구현한다 — 아니다. 연결(교차) 엔터티로 1:M 두 개로 해소"
 },
 {
  "s": "s1",
  "t": "반정규화는 정규화 직후 바로 적용한다 — 아니다. 뷰·인덱스·클러스터링 등 다른 방법을 먼저 검토한 뒤 마지막 수단으로"
 },
 {
  "s": "s1",
  "t": "파생 속성은 많을수록 좋다 — 아니다. 값 일관성 관리 부담이 커 최소화"
 },
 {
  "s": "s1",
  "t": "Single Type 은 슈퍼타입과 서브타입을 각각 별도 테이블로 만든다 — 아니다. 그것은 One To One Type. Single Type 은 하나의 테이블로 통합"
 },
 {
  "s": "s1",
  "t": "엔터티는 인스턴스가 1개만 있어도 된다 — 아니다. 인스턴스가 2개 이상인 집합이어야 한다"
 },
 {
  "s": "s1",
  "t": "행위 엔터티는 부모 없이 독립적으로 생성된다 — 아니다. 독립 생성은 기본(키) 엔터티, 행위 엔터티는 둘 이상의 부모에서 발생"
 },
 {
  "s": "s1",
  "t": "외부↔개념 스키마 사이가 물리적 독립성이다 — 아니다. 논리적 독립성. 개념↔내부가 물리적 독립성"
 },
 {
  "s": "s1",
  "t": "인조 식별자는 항상 본질 식별자보다 낫다 — 아니다. 남용하면 중복 데이터를 막지 못하고 불필요한 인덱스가 생긴다"
 },
 {
  "s": "s1",
  "t": "PK 컬럼 순서는 성능과 무관하다 — 아니다. '=' 조회 조건 컬럼을 앞에 두어야 인덱스 효율이 높다"
 },
 {
  "s": "s1",
  "t": "분산 DB 의 위치 투명성은 데이터 복제 사실을 숨기는 것이다 — 아니다. 그것은 중복 투명성. 위치 투명성은 저장 위치를 숨김"
 },
 {
  "s": "s2",
  "t": "TRUNCATE 는 DML 이다 — 아니다. DDL 이며 Oracle 에서는 자동 COMMIT 되어 ROLLBACK 할 수 없다"
 },
 {
  "s": "s2",
  "t": "WHERE 절에서 SELECT 절 별칭을 쓸 수 있다 — 아니다. WHERE 는 SELECT 보다 먼저 처리된다. ORDER BY 는 가능"
 },
 {
  "s": "s2",
  "t": "COMM = NULL 로 NULL 행을 찾는다 — 아니다. 항상 0건. IS NULL 을 써야 한다"
 },
 {
  "s": "s2",
  "t": "COUNT(COMM) 은 전체 행 수와 같다 — 아니다. NULL 을 제외한다. 전체 행 수는 COUNT(*)"
 },
 {
  "s": "s2",
  "t": "AVG(COMM) 과 AVG(NVL(COMM,0)) 은 같다 — 아니다. NULL 행을 분모에서 빼느냐 넣느냐가 다르다"
 },
 {
  "s": "s2",
  "t": "UNIQUE 컬럼에는 NULL 을 넣을 수 없다 — 아니다. UNIQUE 는 NULL 을 허용한다. PK 는 불가"
 },
 {
  "s": "s2",
  "t": "HAVING 은 GROUP BY 없이 쓸 수 없다 — 아니다. 전체를 한 그룹으로 보고 사용할 수 있다"
 },
 {
  "s": "s2",
  "t": "ROLLUP(A,B) 와 ROLLUP(B,A) 는 결과가 같다 — 아니다. 소계 기준이 달라진다. CUBE 는 순서 무관"
 },
 {
  "s": "s2",
  "t": "GROUPING SETS(A,B) 결과에 총계 행이 포함된다 — 아니다. () 를 넣어야 총계가 나온다"
 },
 {
  "s": "s2",
  "t": "LEFT JOIN 후 오른쪽 테이블 조건을 WHERE 에 써도 결과는 같다 — 아니다. NULL 행이 걸러져 INNER 처럼 된다"
 },
 {
  "s": "s2",
  "t": "Oracle (+) 는 모든 행을 보존할 쪽에 붙인다 — 아니다. 데이터가 없어 NULL 로 채워질 쪽에 붙인다"
 },
 {
  "s": "s2",
  "t": "USING(DEPTNO) 사용 시 E.DEPTNO 처럼 접두사를 붙여야 한다 — 아니다. 공통 컬럼에는 접두사를 붙일 수 없다"
 },
 {
  "s": "s2",
  "t": "NOT IN 서브쿼리에 NULL 이 있어도 나머지 값으로 정상 비교된다 — 아니다. 결과가 0건이 된다"
 },
 {
  "s": "s2",
  "t": "> ANY 는 최댓값보다 큰 값을 뜻한다 — 아니다. 최솟값보다 크면 참(> MIN). 최댓값보다 큰 것은 > ALL"
 },
 {
  "s": "s2",
  "t": "스칼라 서브쿼리는 여러 행을 반환해도 첫 행만 사용한다 — 아니다. 2행 이상이면 오류"
 },
 {
  "s": "s2",
  "t": "UNION ALL 은 결과를 정렬한다 — 아니다. 중복도 정렬도 하지 않아 가장 빠르다"
 },
 {
  "s": "s2",
  "t": "RANK 와 DENSE_RANK 는 동점 다음 순위가 같다 — 아니다. RANK 는 건너뛰고(1·1·3) DENSE_RANK 는 연속(1·1·2)"
 },
 {
  "s": "s2",
  "t": "LAST_VALUE(…) OVER (ORDER BY …) 는 파티션의 마지막 값을 준다 — 아니다. 기본 프레임이 현재 행까지라 현재 행 값이 나온다"
 },
 {
  "s": "s2",
  "t": "WHERE ROWNUM = 2 로 두 번째 행을 가져온다 — 아니다. ROWNUM 은 1부터 부여되며 1이 걸러지면 2가 생기지 않아 0건"
 },
 {
  "s": "s2",
  "t": "CONNECT BY PRIOR MGR = EMPNO 는 위에서 아래로 내려간다 — 아니다. PRIOR 가 붙은 쪽이 부모가 되어 아래에서 위(역방향)로 올라간다"
 },
 {
  "s": "s3",
  "t": "버퍼 캐시 히트율이 높으면 튜닝이 잘 된 SQL 이다 — 아니다. 같은 블록을 비효율적으로 반복 읽어도 히트율은 높다. 논리적 I/O 자체를 줄여야 한다"
 },
 {
  "s": "s3",
  "t": "커밋 시 변경된 데이터 블록이 디스크에 즉시 기록된다 — 아니다. Redo 만 LGWR 가 즉시 기록(Log Force at Commit), 데이터 블록은 DBWR 가 나중에"
 },
 {
  "s": "s3",
  "t": "Undo 는 장애 후 커밋된 트랜잭션을 재실행하는 데 쓴다 — 아니다. 재실행(Roll Forward)은 Redo, Undo 는 롤백·읽기 일관성"
 },
 {
  "s": "s3",
  "t": "실행계획은 맨 위 줄부터 실행된다 — 아니다. 들여쓰기가 가장 깊은 것부터, 같은 깊이면 위에서 아래"
 },
 {
  "s": "s3",
  "t": "바인드 변수를 쓰면 항상 최적의 실행계획이 나온다 — 아니다. 값 분포가 치우친 컬럼은 값마다 최적 계획이 다를 수 있다"
 },
 {
  "s": "s3",
  "t": "결합 인덱스 (A, B) 는 B 조건만 있어도 Range Scan 할 수 있다 — 아니다. 선두 컬럼 A 조건이 없으면 Range Scan 불가(Skip Scan·Full Scan)"
 },
 {
  "s": "s3",
  "t": "숫자형 컬럼에 문자 상수를 비교하면(사번 = '123') 인덱스를 못 탄다 — 아니다. 상수 쪽이 숫자로 변환되어 인덱스 사용 가능. 문제는 문자형 컬럼에 숫자를 비교할 때(컬럼이 변환됨)"
 },
 {
  "s": "s3",
  "t": "Index Fast Full Scan 은 인덱스 순서대로 결과를 반환한다 — 아니다. Multiblock I/O 로 읽어 순서를 보장하지 않는다(순서 보장은 Index Full Scan)"
 },
 {
  "s": "s3",
  "t": "인덱스가 있으면 Full Table Scan 보다 항상 빠르다 — 아니다. 대량 범위·나쁜 클러스터링 팩터에서는 랜덤 액세스 비용 때문에 Full Scan 이 빠르다"
 },
 {
  "s": "s3",
  "t": "결합 인덱스에서 범위 조건 컬럼을 앞에 두는 것이 유리하다 — 일반적으로 아니다. '=' 조건 컬럼을 앞에, 범위 조건 컬럼을 뒤에 두어야 스캔 범위가 줄어든다"
 },
 {
  "s": "s3",
  "t": "Hash 조인은 BETWEEN 같은 비등치 조인에도 쓸 수 있다 — 아니다. 등치(=) 조인만 가능. 비등치 대량 조인은 Sort Merge"
 },
 {
  "s": "s3",
  "t": "NL 조인의 Inner 테이블에는 인덱스가 없어도 된다 — 아니다. Inner 조인 컬럼 인덱스가 없으면 Outer 행마다 Inner 를 풀 스캔"
 },
 {
  "s": "s3",
  "t": "Hash 조인에서는 큰 테이블을 Build Input 으로 해야 한다 — 아니다. 작은 집합을 Build Input(해시 맵)으로, 큰 집합을 Probe"
 },
 {
  "s": "s3",
  "t": "UNION 과 UNION ALL 은 성능이 같다 — 아니다. UNION 은 중복 제거를 위한 소트(또는 해시)가 추가된다"
 },
 {
  "s": "s3",
  "t": "NOT IN 과 NOT EXISTS 는 항상 같은 결과를 낸다 — 아니다. NOT IN 서브쿼리 결과에 NULL 이 있으면 결과가 공집합"
 },
 {
  "s": "s3",
  "t": "힌트 문법이 틀리면 SQL 이 오류로 실패한다 — 아니다. 오류 없이 무시된다"
 },
 {
  "s": "s3",
  "t": "테이블에 별칭을 주었어도 힌트에는 테이블명을 써야 한다 — 아니다. 별칭을 썼다면 힌트에도 별칭을 써야 적용된다"
 },
 {
  "s": "s3",
  "t": "ORDERED 와 LEADING 은 조인 방식(NL·Hash)을 지정한다 — 아니다. 조인 순서만 지정, 방식은 USE_NL·USE_HASH·USE_MERGE"
 },
 {
  "s": "s3",
  "t": "SELECT ROWNUM, ... WHERE ROWNUM <= 10 ORDER BY 급여 DESC 는 급여 상위 10명을 구한다 — 아니다. ROWNUM 이 정렬 전에 부여되어 임의 10건을 정렬할 뿐"
 },
 {
  "s": "s3",
  "t": "WHERE ROWNUM = 2 로 두 번째 행을 가져올 수 있다 — 아니다. 첫 행이 1 이 되지 못해 결과 0건. ROWNUM 은 1 부터 순차 부여"
 },
 {
  "s": "s3",
  "t": "병렬 처리는 OLTP 단건 조회도 빠르게 한다 — 아니다. 병렬 서버 할당·조정 오버헤드 때문에 대용량 스캔·정렬·조인에 적합"
 },
 {
  "s": "s3",
  "t": "PARALLEL(t 4) 이면 항상 병렬 서버가 정확히 4개 쓰인다 — 아니다. Producer·Consumer 두 집합이면 최대 8개(DOP × 2)"
 },
 {
  "s": "s3",
  "t": "APPEND 힌트를 쓰면 다른 세션도 동시에 같은 테이블에 DML 할 수 있다 — 아니다. Direct Path Insert 중에는 테이블에 배타 Lock"
 },
 {
  "s": "s3",
  "t": "Oracle 은 많은 행에 Lock 을 걸면 테이블 Lock 으로 에스컬레이션한다 — 아니다. Oracle 은 Lock 에스컬레이션이 없다"
 },
 {
  "s": "s3",
  "t": "Oracle 기본 격리 수준은 Serializable 이다 — 아니다. Read Committed(Undo 기반 문장 수준 읽기 일관성)"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "모델링 개념",
  "title": "데이터 모델링의 개념·단계·관점",
  "ref": "SQLP 학습자료 §1.1~1.2 · SQL 전문가 가이드 과목Ⅰ 1장",
  "body": [
   {
    "h": "모델링의 정의와 특징",
    "li": [
     "현실 세계의 업무를 ★데이터 관점에서 추상화★ 해 일정한 표기법으로 표현하는 과정",
     "특징 — ★추상화 · 단순화 · 명확화★",
     "유의점 — ★중복 · 비유연성 · 비일관성★ 을 피한다",
     "모델링 3요소 — ★엔터티(Things) · 속성(Attributes) · 관계(Relationships)★"
    ]
   },
   {
    "h": "모델링 3단계",
    "tb": {
     "head": [
      "단계",
      "내용",
      "특징"
     ],
     "rows": [
      [
       "★개념적★",
       "핵심 엔터티와 관계 도출 · 전사적 모델",
       "추상화 수준 가장 높음"
      ],
      [
       "★논리적★",
       "키·속성·관계를 정확히 표현 · ★정규화★",
       "재사용성 높음 · 특정 DBMS 독립"
      ],
      [
       "★물리적★",
       "테이블·컬럼·인덱스·저장 구조 설계",
       "DBMS 종속 · 성능 고려"
      ]
     ]
    }
   },
   {
    "h": "모델링 3관점과 표기법",
    "li": [
     "★데이터 관점(What)★ · ★프로세스 관점(How)★ · ★상호작용 관점(데이터↔프로세스, CRUD)★",
     "표기법 — Chen(마름모 관계) · ★IE / Crow's Foot(국내 최빈출)★ · Barker(Oracle)"
    ]
   },
   {
    "h": "ANSI-SPARC 3단계 스키마와 데이터 독립성",
    "tb": {
     "head": [
      "스키마",
      "관점",
      "독립성"
     ],
     "rows": [
      [
       "외부 스키마",
       "사용자·응용(뷰)",
       "외부↔개념 = ★논리적 독립성★"
      ],
      [
       "개념 스키마",
       "통합된 전체 구조",
       "—"
      ],
      [
       "내부 스키마",
       "물리 저장 구조",
       "개념↔내부 = ★물리적 독립성★"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "엔터티·속성·관계",
  "title": "엔터티 · 속성 · 관계",
  "ref": "SQLP 학습자료 §1.3~1.4 · SQL 전문가 가이드 과목Ⅰ 1장",
  "body": [
   {
    "h": "엔터티의 특징",
    "li": [
     "업무에 필요한 정보 · ★유일한 식별자★ · ★인스턴스 2개 이상★ · 업무 프로세스에서 이용 · ★속성 보유★ · ★관계 1개 이상★"
    ]
   },
   {
    "h": "엔터티 분류",
    "tb": {
     "head": [
      "기준",
      "종류",
      "예"
     ],
     "rows": [
      [
       "유무형",
       "★유형 · 개념 · 사건★",
       "사원 · 보험상품 · 주문"
      ],
      [
       "발생 시점",
       "★기본(키) · 중심(메인) · 행위★",
       "고객 · 주문 · 주문이력"
      ]
     ]
    }
   },
   {
    "h": "속성",
    "li": [
     "특성에 따른 분류 — ★기본 · 설계 · 파생★ (파생 속성은 최소화)",
     "구성 방식 — PK 속성 · FK 속성 · 일반 속성 / 단일·복합 속성 / 단일값·다중값 속성",
     "★도메인★ — 속성이 가질 수 있는 값의 범위(타입·크기·제약)"
    ]
   },
   {
    "h": "관계",
    "li": [
     "표기 요소 — ★관계명 · 관계 차수(1:1·1:M·M:N) · 관계 선택사양(필수·선택)★",
     "★M:N★ 은 연결(교차) 엔터티로 해소",
     "존재에 의한 관계(부서–사원) / 행위에 의한 관계(고객–주문)",
     "관계 도출 체크 — 연관 규칙이 있는가 · 정보 조합이 발생하는가 · 업무 기술서에 관계 동사가 있는가"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "식별자",
  "title": "식별자와 식별·비식별 관계",
  "ref": "SQLP 학습자료 §1.5 · SQL 전문가 가이드 과목Ⅰ 1장",
  "body": [
   {
    "h": "주식별자 특징",
    "tb": {
     "head": [
      "특징",
      "의미"
     ],
     "rows": [
      [
       "★유일성★",
       "인스턴스를 유일하게 구분"
      ],
      [
       "★최소성★",
       "유일성을 만족하는 최소 속성 수"
      ],
      [
       "★불변성★",
       "한 번 정해지면 값이 바뀌지 않음"
      ],
      [
       "★존재성★",
       "반드시 값이 존재(NULL 불가)"
      ]
     ]
    }
   },
   {
    "h": "식별자 분류",
    "li": [
     "대표성 여부 — 주식별자 / 보조식별자",
     "스스로 생성 여부 — 내부 식별자 / 외부 식별자(FK)",
     "속성 수 — 단일 / 복합",
     "대체 여부 — ★본질 식별자★ / ★인조 식별자★ (인조 남용 시 중복 데이터·불필요 인덱스)",
     "※ 원자료의 \"식별자 5기준(대표성 포함)\" 은 가이드의 '주식별자 특징 4가지' 와 다름 — 대표성은 분류 기준"
    ]
   },
   {
    "h": "식별 vs 비식별 관계",
    "tb": {
     "head": [
      "구분",
      "식별 관계",
      "비식별 관계"
     ],
     "rows": [
      [
       "부모 주식별자",
       "자식 ★주식별자의 일부★",
       "자식의 ★일반 속성★"
      ],
      [
       "ERD 표기",
       "★실선★",
       "★점선★"
      ],
      [
       "종속 강도",
       "강한 종속",
       "약한 종속"
      ],
      [
       "선택 상황",
       "부모 없이 자식이 존재 불가",
       "자식 PK 독립 · 부모 없는 자식 허용 · PK 속성 과다 방지"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "정규화·반정규화",
  "title": "정규화와 반정규화",
  "ref": "SQLP 학습자료 §1.6~1.7 · SQL 전문가 가이드 과목Ⅰ 2장",
  "body": [
   {
    "h": "이상 현상",
    "li": [
     "★삽입 이상 · 갱신 이상 · 삭제 이상★ — 정규화의 목적은 이상 현상 제거"
    ]
   },
   {
    "h": "정규형",
    "tb": {
     "head": [
      "정규형",
      "조건"
     ],
     "rows": [
      [
       "1NF",
       "★원자값★ — 반복 그룹·다중값 제거"
      ],
      [
       "2NF",
       "★부분 함수 종속★ 제거 (복합 PK)"
      ],
      [
       "3NF",
       "★이행 함수 종속★ 제거"
      ],
      [
       "BCNF",
       "★모든 결정자가 후보키★"
      ],
      [
       "4NF",
       "★다치 종속★ 제거"
      ],
      [
       "5NF",
       "★조인 종속★ 제거"
      ]
     ]
    }
   },
   {
    "h": "반정규화",
    "li": [
     "목적 — ★조회 성능 향상★ (대신 데이터 무결성·일관성 관리 부담 증가)",
     "절차 — ① 대상 조사 → ② ★다른 방법 유도 검토(뷰·클러스터링·인덱스·응용)★ → ③ 반정규화 적용",
     "테이블 — 병합 · 분할(★수직=컬럼 · 수평=행★) · 추가(중복·통계·이력·부분 테이블)",
     "컬럼 — 중복 · 파생 · 이력 · PK 의미 분리 · 오류 복구용 / 관계 — 중복 관계"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "성능·분산 모델링",
  "title": "성능 데이터 모델링 · 분산 DB · 트랜잭션",
  "ref": "SQLP 학습자료 §1.8~1.9 · SQL 전문가 가이드 과목Ⅰ 2장",
  "body": [
   {
    "h": "성능 데이터 모델링 순서",
    "li": [
     "① 정규화를 정확히 → ② DB 용량 산정 → ③ 트랜잭션 유형 파악 → ④ 반정규화 → ⑤ 이력 모델·PK/FK·슈퍼/서브타입 조정 → ⑥ 성능 관점 검증"
    ]
   },
   {
    "h": "슈퍼/서브타입 변환",
    "tb": {
     "head": [
      "방식",
      "구성",
      "적합한 트랜잭션"
     ],
     "rows": [
      [
       "★One To One Type★",
       "슈퍼·서브를 각각 개별 테이블",
       "서브타입별로 개별 처리"
      ],
      [
       "★Plus Type★",
       "슈퍼타입 + 서브타입 테이블",
       "슈퍼+서브를 함께 처리"
      ],
      [
       "★Single Type(All in One)★",
       "하나의 테이블로 통합",
       "전체를 일괄 처리"
      ]
     ]
    }
   },
   {
    "h": "PK 순서 · 파티셔닝",
    "li": [
     "PK 는 인덱스로 생성되므로 ★'=' 조회 조건 컬럼을 앞★ 에 배치",
     "파티셔닝 — ★Range · List · Hash · Composite★ (대용량 테이블)",
     "컬럼이 너무 많은 테이블은 ★수직 분할★ 로 I/O 감소"
    ]
   },
   {
    "h": "분산 DB 투명성",
    "li": [
     "★분할 · 위치 · 지역사상 · 중복 · 장애 · 병행★ 투명성",
     "장점 — 지역 자치·신뢰성·가용성·빠른 응답 / 단점 — 설계·관리 복잡, 통제 어려움, 보안 취약 가능"
    ]
   },
   {
    "h": "트랜잭션과 NULL",
    "li": [
     "★ACID★ — 원자성 · 일관성 · 고립성 · 지속성",
     "NULL — 산술 연산 결과는 NULL · 집계 함수는 NULL 을 제외하고 계산 · 비교는 IS NULL 로"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "SQL 기본·트랜잭션",
  "title": "SQL 분류 · DDL · 제약조건 · 트랜잭션 · DCL",
  "ref": "SQLP 학습자료 §2.1~2.9 · SQL 전문가 가이드",
  "body": [
   {
    "h": "SQL 4분류",
    "tb": {
     "head": [
      "분류",
      "명령",
      "특징"
     ],
     "rows": [
      [
       "★DDL★",
       "CREATE · ALTER · DROP · TRUNCATE · RENAME",
       "구조 정의 — Oracle 은 실행 시 자동 COMMIT"
      ],
      [
       "★DML★",
       "SELECT · INSERT · UPDATE · DELETE · MERGE",
       "데이터 조작 — COMMIT 전까지 ROLLBACK 가능"
      ],
      [
       "★DCL★",
       "GRANT · REVOKE",
       "권한 부여·회수"
      ],
      [
       "★TCL★",
       "COMMIT · ROLLBACK · SAVEPOINT",
       "트랜잭션 제어"
      ]
     ]
    }
   },
   {
    "h": "DELETE · TRUNCATE · DROP",
    "tb": {
     "head": [
      "구분",
      "DELETE",
      "TRUNCATE",
      "DROP"
     ],
     "rows": [
      [
       "분류",
       "DML",
       "DDL",
       "DDL"
      ],
      [
       "대상",
       "조건에 맞는 행",
       "전체 행",
       "테이블 구조 포함"
      ],
      [
       "ROLLBACK (Oracle)",
       "가능",
       "불가(자동 COMMIT)",
       "불가"
      ],
      [
       "저장 공간",
       "유지",
       "초기화(해제)",
       "반납"
      ]
     ]
    }
   },
   {
    "h": "제약조건",
    "li": [
     "★PRIMARY KEY★ = UNIQUE + NOT NULL · 테이블당 하나 · 자동 인덱스",
     "★UNIQUE★ 중복 불가 · ★NULL 허용★ / ★NOT NULL★ / ★CHECK★ 조건식 / DEFAULT 기본값",
     "★FOREIGN KEY★ 참조 무결성 — ON DELETE CASCADE(자식 함께 삭제) · SET NULL(자식 FK 를 NULL) · 기본은 자식이 있으면 부모 삭제 불가",
     "제약조건 추가 — ALTER TABLE T ADD CONSTRAINT 이름 PRIMARY KEY (컬럼)"
    ]
   },
   {
    "h": "트랜잭션",
    "li": [
     "★ACID★ — 원자성 · 일관성 · 고립성 · 지속성",
     "★SAVEPOINT★ — INSERT 1 → SAVEPOINT SP1 → INSERT 2 → SAVEPOINT SP2 → INSERT 3 → ROLLBACK TO SP1 → INSERT 4 → COMMIT ⇒ 남는 행 [1, 4] (sqlite 실행 확인)",
     "Oracle — DDL 실행 시 앞선 DML 까지 ★암묵적 COMMIT★ · SQL Server — 기본 AUTO COMMIT, 명시적 트랜잭션 안에서는 DDL 도 ROLLBACK 가능",
     "격리 수준 — Read Uncommitted(Dirty Read) · Read Committed(Non-Repeatable, Oracle 기본) · Repeatable Read(Phantom) · Serializable"
    ]
   },
   {
    "h": "DCL · ROLE",
    "li": [
     "GRANT SELECT, UPDATE ON EMP TO U1 ★WITH GRANT OPTION★ — 객체 권한 재부여 가능, 회수 시 ★연쇄 회수★",
     "GRANT CREATE TABLE TO U1 ★WITH ADMIN OPTION★ — 시스템 권한 재부여, 회수 시 연쇄 회수 없음",
     "★ROLE★ — 권한 묶음: CREATE ROLE R1 → GRANT 권한 TO R1 → GRANT R1 TO 사용자 (Oracle CONNECT·RESOURCE 롤)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "NULL·함수",
  "title": "NULL 처리와 단일 행 함수",
  "ref": "SQLP 학습자료 §2.5 · §4 함수 100선",
  "body": [
   {
    "h": "NULL 규칙",
    "li": [
     "산술 연산 결과 NULL · 비교 결과 UNKNOWN → WHERE 에서 제외 · 비교는 IS NULL",
     "예제 EMP 에서 SAL + COMM IS NULL 인 행 3개 (COMM 이 NULL 인 KIM·PARK·KANG)",
     "정렬 — Oracle 은 NULL 을 가장 큰 값(ASC 맨 뒤), SQL Server 는 가장 작은 값(ASC 맨 앞)",
     "빈 문자열 '' — Oracle 은 NULL 로 취급"
    ]
   },
   {
    "h": "NULL 함수 (예제 EMP, sqlite 동등 식으로 확인)",
    "tb": {
     "head": [
      "함수",
      "의미",
      "예제 결과"
     ],
     "rows": [
      [
       "NVL(X,Y)",
       "X 가 NULL 이면 Y",
       "NVL(COMM,0) — KIM 0"
      ],
      [
       "NVL2(X,Y,Z)",
       "X 가 NULL 아니면 Y, NULL 이면 Z",
       "NVL2(COMM,'Y','N') — JUNG(COMM 0) Y"
      ],
      [
       "COALESCE(…)",
       "첫 번째 NULL 아닌 값",
       "COALESCE(COMM,MGR,0) — KIM 0 · KANG 1"
      ],
      [
       "NULLIF(X,Y)",
       "X=Y 면 NULL, 아니면 X",
       "NULLIF(SAL,400) — PARK NULL"
      ]
     ]
    }
   },
   {
    "h": "문자 · 숫자 함수",
    "tb": {
     "head": [
      "함수",
      "예",
      "결과"
     ],
     "rows": [
      [
       "SUBSTR",
       "SUBSTR('SQLPROFESSIONAL',4,3)",
       "'PRO'"
      ],
      [
       "INSTR",
       "INSTR('ABCABC','C')",
       "3"
      ],
      [
       "LPAD",
       "LPAD('7',3,'0')",
       "'007'"
      ],
      [
       "ROUND",
       "ROUND(123.456,1)",
       "123.5"
      ],
      [
       "TRUNC",
       "TRUNC(123.456,-1)",
       "120"
      ],
      [
       "CEIL · FLOOR",
       "CEIL(-1.5) · FLOOR(-1.5)",
       "-1 · -2"
      ],
      [
       "MOD",
       "MOD(10,3)",
       "1"
      ]
     ]
    }
   },
   {
    "h": "날짜 · 변환 · 조건",
    "li": [
     "SYSDATE + 1 = 하루 뒤 · SYSDATE + 1/24 = 1시간 뒤 · 날짜 − 날짜 = 일수",
     "명시적 변환 TO_CHAR · TO_NUMBER · TO_DATE / 암시적 변환은 인덱스를 못 탈 수 있어 지양",
     "★CASE★ 표준(범위 조건 가능) · ★DECODE★ Oracle(동등 비교만) — ELSE 없으면 NULL",
     "LIKE — _ 는 1글자, % 는 0글자 이상: ENAME LIKE '_I%' → KIM · BETWEEN 은 양 끝 포함(SAL BETWEEN 200 AND 300 → 3행)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "그룹·집계",
  "title": "그룹 함수 · ROLLUP · CUBE · GROUPING SETS",
  "ref": "SQLP 학습자료 §2.6",
  "body": [
   {
    "h": "집계와 NULL",
    "tb": {
     "head": [
      "식",
      "예제 결과",
      "포인트"
     ],
     "rows": [
      [
       "COUNT(*)",
       "6",
       "NULL 포함 행 수"
      ],
      [
       "COUNT(COMM)",
       "3",
       "NULL 제외 (0 은 포함)"
      ],
      [
       "SUM(COMM)",
       "150",
       "NULL 제외 합"
      ],
      [
       "AVG(COMM)",
       "50",
       "150 ÷ 3"
      ],
      [
       "AVG(NVL(COMM,0))",
       "25",
       "150 ÷ 6"
      ],
      [
       "COUNT(DISTINCT DEPTNO)",
       "2",
       "NULL 제외"
      ]
     ]
    }
   },
   {
    "h": "GROUP BY · HAVING",
    "li": [
     "GROUP BY DEPTNO → 3개 그룹 (10 · 20 · ★NULL 도 한 그룹★)",
     "HAVING SUM(SAL) >= 500 → 2개 그룹 (10:500, 20:1050)",
     "SELECT 절에는 GROUP BY 컬럼 또는 집계 함수만 — 그 외 컬럼은 오류",
     "WHERE 는 집계 함수 사용 불가 → 집계 조건은 HAVING"
    ]
   },
   {
    "h": "ROLLUP · CUBE · GROUPING SETS (예제 GROUP BY DEPTNO, JOB)",
    "tb": {
     "head": [
      "구문",
      "생성 그룹",
      "예제 행 수"
     ],
     "rows": [
      [
       "GROUP BY DEPTNO, JOB",
       "(DEPTNO,JOB)",
       "5"
      ],
      [
       "★ROLLUP(DEPTNO, JOB)★",
       "(DEPTNO,JOB) + (DEPTNO) + ()",
       "9"
      ],
      [
       "★CUBE(DEPTNO, JOB)★",
       "(DEPTNO,JOB) + (DEPTNO) + (JOB) + ()",
       "12"
      ],
      [
       "★GROUPING SETS(DEPTNO, JOB)★",
       "(DEPTNO) + (JOB)",
       "6"
      ]
     ]
    }
   },
   {
    "h": "풀이 요령",
    "li": [
     "행 수 = 각 그룹 기준의 ★서로 다른 값 조합 수★ 의 합 (+ 총계 1)",
     "ROLLUP 은 ★오른쪽부터 하나씩 빼며★ 소계 → 인수 순서가 결과를 바꾼다",
     "GROUPING(컬럼) = 1 이면 소계로 생긴 NULL — 원래 NULL 값(KANG 의 DEPTNO)과 구별할 때 사용",
     "ROLLUP((A,B)) 처럼 괄호로 묶으면 하나의 단위로 취급"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "조인",
  "title": "조인 — 표준 문법 · Oracle (+) · 아우터 조인 필터",
  "ref": "SQLP 학습자료 §5",
  "body": [
   {
    "h": "조인 유형과 예제 결과 (sqlite 실행값)",
    "tb": {
     "head": [
      "조인",
      "설명",
      "EMP·DEPT 결과"
     ],
     "rows": [
      [
       "INNER",
       "양쪽 일치 행",
       "5행"
      ],
      [
       "EMP LEFT JOIN DEPT",
       "EMP 전부 보존",
       "6행"
      ],
      [
       "DEPT LEFT JOIN EMP",
       "DEPT 전부 보존",
       "7행"
      ],
      [
       "FULL OUTER",
       "양쪽 모두 보존",
       "8행"
      ],
      [
       "CROSS",
       "카티전 곱 6 × 4",
       "24행"
      ],
      [
       "SELF",
       "같은 테이블 두 번(별칭 필수)",
       "EMP E, EMP M — 사원·관리자"
      ]
     ]
    }
   },
   {
    "h": "Oracle 전용 문법",
    "li": [
     "WHERE D.DEPTNO = E.DEPTNO(+) — ★(+) 는 NULL 이 채워질 쪽★ → DEPT 기준 LEFT OUTER",
     "(+) 조건에 ★OR · IN 사용 불가★ · 양쪽 (+) 불가 → FULL OUTER 는 ANSI 문법 사용",
     "비등가 조인 — E.SAL BETWEEN G.LOSAL AND G.HISAL (급여 등급)"
    ]
   },
   {
    "h": "ON vs USING vs NATURAL",
    "li": [
     "ON — 자유로운 조건, 컬럼 이름이 달라도 됨",
     "USING(DEPTNO) — 같은 이름 컬럼 지정, ★공통 컬럼에 접두사 금지★, 결과에 한 번만 표시",
     "NATURAL JOIN — 같은 이름 ★모든★ 컬럼으로 자동 등가 조인 · 접두사 금지"
    ]
   },
   {
    "h": "아우터 조인 필터 위치 (DEPT LEFT JOIN EMP)",
    "tb": {
     "head": [
      "조건 위치",
      "의미",
      "결과"
     ],
     "rows": [
      [
       "ON … AND E.SAL >= 300",
       "조인할 상대 행만 제한 — 부서는 모두 보존",
       "5행"
      ],
      [
       "WHERE E.SAL >= 300",
       "조인 후 필터 — NULL 행이 사라져 INNER 화",
       "3행"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "서브쿼리·집합",
  "title": "서브쿼리 · 집합 연산자",
  "ref": "SQLP 학습자료 §6 · §2.7",
  "body": [
   {
    "h": "서브쿼리 분류",
    "tb": {
     "head": [
      "기준",
      "종류",
      "특징"
     ],
     "rows": [
      [
       "위치",
       "스칼라(SELECT) · 인라인 뷰(FROM) · 중첩(WHERE·HAVING)",
       "스칼라는 1행 1열"
      ],
      [
       "반환 행",
       "단일 행 · 다중 행 · 다중 컬럼",
       "단일 행 연산자에 다중 행 → 오류"
      ],
      [
       "참조",
       "비상관 · ★상관★",
       "상관은 메인 쿼리 행마다 실행"
      ]
     ]
    }
   },
   {
    "h": "다중 행 연산자와 예제",
    "li": [
     "SAL > ALL (부서 10 급여) = SAL > MAX(300) → PARK, CHOI",
     "SAL > ANY (부서 10 급여) = SAL > MIN(200) → 4명",
     "상관 서브쿼리 — 자기 부서 평균보다 급여가 높은 사원: KIM, PARK, CHOI (DEPTNO 가 NULL 인 KANG 은 비교 불가로 제외)",
     "EXISTS — 존재 여부만 확인, 서브쿼리 SELECT 목록은 의미 없음(SELECT 1)"
    ]
   },
   {
    "h": "NOT IN 과 NULL",
    "li": [
     "DEPT WHERE DEPTNO NOT IN (SELECT DEPTNO FROM EMP) → ★0건★ (EMP.DEPTNO 에 NULL)",
     "NOT EXISTS 로 바꾸면 2건 (부서 30 · 40)",
     "대책 — NOT EXISTS 사용 또는 서브쿼리에 WHERE DEPTNO IS NOT NULL"
    ]
   },
   {
    "h": "집합 연산자 (T1: 1,2,2,3,NULL / T2: 2,3,4)",
    "tb": {
     "head": [
      "연산",
      "결과 행 수",
      "포인트"
     ],
     "rows": [
      [
       "UNION",
       "5",
       "중복 제거 — NULL 도 하나"
      ],
      [
       "UNION ALL",
       "8",
       "중복 유지 · 정렬 없음"
      ],
      [
       "INTERSECT",
       "2",
       "2 · 3"
      ],
      [
       "MINUS (EXCEPT)",
       "2",
       "1 · NULL"
      ]
     ]
    }
   },
   {
    "h": "집합 연산 규칙",
    "li": [
     "컬럼 수와 데이터 타입이 일치해야 한다 · 컬럼 이름은 ★첫 번째 SELECT★ 기준",
     "ORDER BY 는 ★맨 마지막에 한 번★",
     "WITH 절(CTE) — 반복 사용 서브쿼리를 이름으로 정의, 재귀 CTE 로 계층 쿼리 대체"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-6",
  "t": "윈도우 함수",
  "title": "윈도우 함수 — 순위 · 집계 · 행 참조 · 프레임",
  "ref": "SQLP 학습자료 §7",
  "body": [
   {
    "h": "기본 구조",
    "li": [
     "함수 OVER (PARTITION BY … ORDER BY … ROWS|RANGE BETWEEN …)",
     "PARTITION BY — 그룹을 나누되 ★행 수는 줄지 않는다★(GROUP BY 와 차이)",
     "ORDER BY 가 있으면 기본 프레임 = RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW"
    ]
   },
   {
    "h": "순위 함수 (점수 90·90·85·80, sqlite 실행)",
    "tb": {
     "head": [
      "이름",
      "점수",
      "ROW_NUMBER",
      "RANK",
      "DENSE_RANK",
      "NTILE(2)"
     ],
     "rows": [
      [
       "A",
       "90",
       "1",
       "1",
       "1",
       "1"
      ],
      [
       "B",
       "90",
       "2",
       "1",
       "1",
       "1"
      ],
      [
       "C",
       "85",
       "3",
       "3",
       "2",
       "2"
      ],
      [
       "D",
       "80",
       "4",
       "4",
       "3",
       "2"
      ]
     ]
    }
   },
   {
    "h": "집계 · 행 참조 (SALES 1~4월 100·150·120·200)",
    "li": [
     "누적 합 SUM(AMT) OVER (ORDER BY MON ROWS UNBOUNDED PRECEDING) → 100 · 250 · 370 · 570",
     "3개월 이동 평균 (ROWS 2 PRECEDING) 3월 → 123.33",
     "AMT − LAG(AMT,1,0) → 100 · 50 · -30 · 80",
     "LEAD(AMT) 4월 → NULL (다음 행 없음)",
     "CUME_DIST(85점) = 0.75 · PERCENT_RANK(85점) = 0.667 = (3−1)/(4−1)"
    ]
   },
   {
    "h": "ROWS vs RANGE (EMP SAL 오름차순 누적 합)",
    "tb": {
     "head": [
      "ENAME",
      "SAL",
      "RANGE(기본)",
      "ROWS"
     ],
     "rows": [
      [
       "KANG",
       "150",
       "150",
       "150"
      ],
      [
       "LEE",
       "200",
       "350",
       "350"
      ],
      [
       "JUNG",
       "250",
       "600",
       "600"
      ],
      [
       "KIM",
       "300",
       "900",
       "900"
      ],
      [
       "PARK",
       "400",
       "1700",
       "1300"
      ],
      [
       "CHOI",
       "400",
       "1700",
       "1700"
      ]
     ]
    }
   },
   {
    "h": "함정",
    "li": [
     "동점(SAL 400) 행은 RANGE 에서 ★같은 누적값★ — ROWS 는 행마다 다름",
     "LAST_VALUE + 기본 프레임 → 현재 행 값 (파티션 끝 값을 원하면 UNBOUNDED FOLLOWING)",
     "PARTITION BY DEPTNO 의 SUM — LEE 행 500 (부서 10 합계, 행은 그대로)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-7",
  "t": "계층·PIVOT·Top-N",
  "title": "계층형 쿼리 · PIVOT · Top-N · 정규 표현식",
  "ref": "SQLP 학습자료 §2 · §4",
  "body": [
   {
    "h": "계층형 쿼리 (예제 EMP: MGR 컬럼, 재귀 CTE 로 동등 검증)",
    "tb": {
     "head": [
      "EMPNO",
      "ENAME",
      "LEVEL"
     ],
     "rows": [
      [
       "1",
       "KIM",
       "1"
      ],
      [
       "2",
       "LEE",
       "2"
      ],
      [
       "3",
       "PARK",
       "2"
      ],
      [
       "4",
       "CHOI",
       "3"
      ],
      [
       "5",
       "JUNG",
       "3"
      ],
      [
       "6",
       "KANG",
       "2"
      ]
     ]
    }
   },
   {
    "h": "구문 요소",
    "li": [
     "START WITH MGR IS NULL CONNECT BY ★PRIOR EMPNO = MGR★ → 위에서 아래(순방향), 루트 LEVEL 1",
     "CONNECT BY PRIOR MGR = EMPNO START WITH EMPNO = 4 → 아래에서 위(역방향): 4 → 3 → 1",
     "CONNECT_BY_ISLEAF = 1 인 행 4개 (LEE · CHOI · JUNG · KANG) · SYS_CONNECT_BY_PATH(ENAME,'/') 경로 · CONNECT_BY_ROOT 루트 값",
     "★WHERE 는 계층 전개 후 필터★, CONNECT BY 절 조건은 전개 자체를 제한 · ORDER SIBLINGS BY 형제 정렬 · NOCYCLE 순환 방지"
    ]
   },
   {
    "h": "PIVOT · UNPIVOT",
    "li": [
     "SELECT * FROM (SELECT DEPTNO, JOB, SAL FROM EMP) PIVOT (SUM(SAL) FOR JOB IN ('MGR' AS MGR, 'DEV' AS DEV))",
     "결과 3행 — 남은 컬럼 DEPTNO(10·20·NULL)로 자동 그룹 · 20번 부서 MGR 400 · DEV 650",
     "UNPIVOT — 열을 행으로, 기본 EXCLUDE NULLS (INCLUDE NULLS 로 포함)"
    ]
   },
   {
    "h": "Top-N",
    "li": [
     "ROWNUM 은 WHERE 단계에서 부여 → ★SELECT * FROM (SELECT … ORDER BY SAL DESC) WHERE ROWNUM <= 3★",
     "WHERE ROWNUM = 2 · ROWNUM > 1 → 0건",
     "Oracle 12c+ — ORDER BY SAL DESC FETCH FIRST 3 ROWS ONLY / WITH TIES 는 동점 포함 · OFFSET n ROWS",
     "SQL Server — SELECT TOP (3) [WITH TIES] … ORDER BY …"
    ]
   },
   {
    "h": "정규 표현식",
    "tb": {
     "head": [
      "함수",
      "예",
      "결과"
     ],
     "rows": [
      [
       "REGEXP_SUBSTR",
       "('ABC123DEF456','[0-9]+')",
       "'123'"
      ],
      [
       "REGEXP_COUNT",
       "('ABC123DEF456','[0-9]+')",
       "2"
      ],
      [
       "REGEXP_REPLACE",
       "('A1B22','[0-9]','*')",
       "'A*B**'"
      ],
      [
       "REGEXP_LIKE",
       "(ENAME,'^K')",
       "K 로 시작하면 참"
      ],
      [
       "메타문자",
       "^ $ . * + ? {n} [ ] |",
       "시작 · 끝 · 임의 1자 · 0회+ · 1회+ · 0~1회 · n회 · 문자 집합 · OR"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "아키텍처·I/O",
  "title": "아키텍처 기반 튜닝 원리 — 메모리·I/O·Redo·Undo",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "메모리 구조",
    "tb": {
     "head": [
      "영역",
      "구성",
      "튜닝 관점"
     ],
     "rows": [
      [
       "★SGA★ (공유)",
       "DB 버퍼 캐시 · Shared Pool(라이브러리 캐시·딕셔너리 캐시) · Redo Log Buffer",
       "블록·SQL 재사용"
      ],
      [
       "★PGA★ (프로세스 전용)",
       "Sort Area · Hash Area · 세션 정보",
       "정렬·해시 조인이 부족하면 Temp 사용"
      ],
      [
       "백그라운드 프로세스",
       "★DBWR★(데이터 블록 기록) · ★LGWR★(Redo 기록) · CKPT · SMON · PMON",
       "커밋 = LGWR 기록 완료"
      ]
     ]
    }
   },
   {
    "h": "I/O 종류",
    "tb": {
     "head": [
      "구분",
      "의미",
      "대기 이벤트·예"
     ],
     "rows": [
      [
       "★논리적 I/O★",
       "버퍼 캐시에서 블록 읽기",
       "Consistent Gets · DB Block Gets"
      ],
      [
       "★물리적 I/O★",
       "캐시 미스 → 디스크 읽기",
       "Physical Reads"
      ],
      [
       "★Single Block I/O★",
       "한 블록씩 — 인덱스·ROWID 액세스",
       "db file sequential read"
      ],
      [
       "★Multiblock I/O★",
       "여러 블록 한꺼번에 — Full Scan·Index FFS",
       "db file scattered read"
      ]
     ]
    }
   },
   {
    "h": "Redo 와 Undo",
    "li": [
     "★Redo★ — 변경 이력. ★Log Force at Commit★: 커밋 시 Redo 를 먼저 디스크에 기록 → 데이터 블록은 나중에 기록해도 장애 시 Roll Forward 로 복구(Write Ahead Logging)",
     "★Undo★ — 변경 전 이미지. ★롤백 · 읽기 일관성(CR 블록) · 장애 후 미커밋 트랜잭션 롤백★",
     "버퍼 캐시 히트율 = (1 − 물리 읽기 / 논리 읽기) × 100 — 높아도 ★논리 I/O 가 과다★ 하면 비효율"
    ]
   },
   {
    "h": "튜닝 원칙",
    "li": [
     "SQL 튜닝의 핵심은 ★읽는 블록 수(논리 I/O) 감소★ — 물리 I/O 는 그 결과로 줄어든다",
     "랜덤 액세스(Single Block)는 건당 비용이 크므로 ★테이블 랜덤 액세스 횟수★ 를 줄이는 것이 인덱스 튜닝의 중심",
     "대량 데이터는 Multiblock I/O 의 Full Scan 이 오히려 유리할 수 있다"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "DML·파티션·동시성",
  "title": "트랜잭션·Lock·DML·파티셔닝",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "격리 수준과 이상 현상",
    "tb": {
     "head": [
      "격리 수준",
      "허용되는 이상 현상"
     ],
     "rows": [
      [
       "Read Uncommitted",
       "Dirty Read · Non-Repeatable Read · Phantom Read"
      ],
      [
       "★Read Committed★ (Oracle 기본)",
       "Non-Repeatable Read · Phantom Read"
      ],
      [
       "Repeatable Read",
       "Phantom Read"
      ],
      [
       "★Serializable★",
       "없음"
      ]
     ]
    }
   },
   {
    "h": "Oracle 동시성 제어",
    "li": [
     "★다중 버전 읽기 일관성★ — 조회는 Lock 없이 Undo 로 시작 시점 데이터를 재구성 → ★읽기와 쓰기가 서로 막지 않음★",
     "DML 시 ★행 Lock(TX)★ + 테이블 구조 보호용 ★TM Lock★ · ★Lock 에스컬레이션 없음★",
     "SELECT ... FOR UPDATE [NOWAIT | WAIT n] — 조회하면서 행 Lock",
     "★교착상태(Deadlock)★ — 서로의 Lock 을 기다림 → Oracle 이 한쪽 문장을 롤백"
    ]
   },
   {
    "h": "DML 튜닝",
    "li": [
     "DML 비용 요인 — ★인덱스 유지 · 무결성 제약 · 트리거 · Redo/Undo · Lock · 커밋★",
     "대량 적재 — ★INSERT /*+ APPEND */ ... SELECT★(Direct Path, HWM 위 기록, 버퍼 캐시 우회) · CTAS · NOLOGGING",
     "대량 변경 — 인덱스 Unusable 후 재생성 · 수정 대신 CTAS 로 새 테이블 생성 후 교체",
     "애플리케이션 — ★Array Processing★(배열 단위 처리)로 Call 횟수 감소"
    ]
   },
   {
    "h": "파티셔닝",
    "tb": {
     "head": [
      "유형",
      "분할 기준",
      "예"
     ],
     "rows": [
      [
       "★Range★",
       "값의 범위",
       "주문일자 월별"
      ],
      [
       "★List★",
       "값 목록",
       "지역 코드"
      ],
      [
       "★Hash★",
       "해시 함수",
       "고객번호 균등 분산"
      ],
      [
       "Composite",
       "두 방식 조합",
       "Range-Hash · Range-List"
      ]
     ]
    }
   },
   {
    "h": "파티션 Pruning 과 인덱스",
    "li": [
     "★Pruning★ — 조건에 해당하는 파티션만 액세스 · 상수 조건 = ★정적★, 바인드·조인 = ★동적★",
     "파티션 키 컬럼을 가공하면 Pruning 불가",
     "★Local 인덱스★ — 테이블 파티션과 1:1, 파티션 관리 용이 / ★Global 인덱스★ — 독립 파티셔닝, 파티션 DROP 시 Unusable 가능"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "옵티마이저·실행계획",
  "title": "옵티마이저 원리 — CBO·통계·선택도",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "CBO vs RBO",
    "tb": {
     "head": [
      "구분",
      "RBO",
      "CBO"
     ],
     "rows": [
      [
       "결정 기준",
       "★우선순위 규칙★(1순위 ROWID 단일 행 … 최하위 Full Table Scan)",
       "★통계 기반 예상 비용★"
      ],
      [
       "통계 필요",
       "불필요",
       "★필요★(DBMS_STATS 로 수집)"
      ],
      [
       "현재",
       "지원 중단(RULE 힌트로만)",
       "★표준★"
      ]
     ]
    }
   },
   {
    "h": "통계 정보",
    "tb": {
     "head": [
      "대상",
      "항목"
     ],
     "rows": [
      [
       "테이블",
       "총 행 수 · 블록 수 · 평균 행 길이"
      ],
      [
       "컬럼",
       "★NDV(Number of Distinct Values)★ · NULL 수 · 최솟값·최댓값 · ★히스토그램★"
      ],
      [
       "인덱스",
       "높이 · 리프 블록 수 · ★클러스터링 팩터★"
      ],
      [
       "시스템",
       "CPU 속도 · Single·Multiblock I/O 시간"
      ]
     ]
    }
   },
   {
    "h": "선택도와 카디널리티",
    "li": [
     "★선택도(Selectivity)★ — 조건을 만족할 것으로 예상되는 비율. 히스토그램 없으면 '=' 조건 = ★1 / NDV★",
     "★카디널리티★ = 총 행 수 × 선택도 → 실행계획의 Rows(예상 건수)",
     "예 — 100,000건 · 부서 NDV 50 → 부서 = :b 조건 카디널리티 2,000",
     "값 분포가 치우친 컬럼은 ★히스토그램★ 이 있어야 정확히 추정"
    ]
   },
   {
    "h": "옵티마이저 모드",
    "li": [
     "★ALL_ROWS★ — 전체 처리 비용 최소(기본값) / ★FIRST_ROWS(n)★ — 첫 n 건 응답 최적화",
     "통계가 실제와 다르면 잘못된 계획 → ★통계 최신화★ 가 튜닝의 출발점"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "옵티마이저·실행계획",
  "title": "SQL 처리 과정·SQL 공유·실행계획 읽기",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "SQL 처리 과정",
    "li": [
     "① ★파싱(Parser)★ — 문법(Syntax)·의미(Semantic) 검사, 라이브러리 캐시 탐색",
     "② ★최적화(Optimizer)★ — 실행계획 후보 중 최저 비용 선택 (하드 파싱일 때만)",
     "③ ★로우 소스 생성(Row-Source Generator)★ — 실행 가능한 코드로 변환",
     "④ ★실행(Execute)★ → 인출(Fetch)"
    ]
   },
   {
    "h": "하드 파싱 vs 소프트 파싱",
    "tb": {
     "head": [
      "구분",
      "조건",
      "비용"
     ],
     "rows": [
      [
       "★소프트 파싱★",
       "같은 SQL 이 라이브러리 캐시에 있음",
       "적음 — 바로 실행"
      ],
      [
       "★하드 파싱★",
       "캐시에 없음 → 최적화·로우 소스 생성",
       "★CPU·래치 경합 큼★"
      ]
     ]
    }
   },
   {
    "h": "SQL 공유와 바인드 변수",
    "li": [
     "SQL 텍스트가 ★대소문자·공백·주석까지 완전히 같아야★ 공유",
     "리터럴 SQL(WHERE 고객번호 = 1001, 1002 …)은 값마다 새 SQL → ★하드 파싱 폭증★",
     "★바인드 변수★(WHERE 고객번호 = :b1) 로 하나의 SQL 로 공유",
     "주의 — 값 분포가 치우친 컬럼은 바인드 Peeking 으로 첫 값에 맞춘 계획이 다른 값에 불리할 수 있음"
    ]
   },
   {
    "h": "실행계획 읽기",
    "li": [
     "EXPLAIN PLAN FOR … → SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY) / 실제 수행 통계는 DBMS_XPLAN.DISPLAY_CURSOR · SQL 트레이스(TKPROF)",
     "★들여쓰기가 가장 깊은 것부터, 같은 깊이는 위에서 아래★ 로 실행",
     "조인의 ★첫 번째 자식★ = NL 의 Outer(드라이빙) · Hash 의 Build Input",
     "★Predicate Information★ — ★access★ = 인덱스 탐색 범위를 정하는 조건 / ★filter★ = 읽은 뒤 걸러내는 조건",
     "주요 항목 — Cost · Rows(카디널리티) · Bytes · 실제 수행 시 A-Rows · Buffers"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "인덱스 튜닝",
  "title": "인덱스 튜닝 — 구조·스캔·설계",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "B*Tree 구조와 탐색",
    "li": [
     "루트 → 브랜치 → 리프(★인덱스 키 + ROWID★, 양방향 연결)",
     "★수직적 탐색★ 으로 시작점 찾기 → ★수평적 탐색★ 으로 범위 스캔 → ★ROWID 로 테이블 랜덤 액세스★",
     "단일 컬럼 B*Tree 에는 NULL 키가 저장되지 않음(Oracle) → IS NULL 조건은 인덱스 사용 불가"
    ]
   },
   {
    "h": "인덱스 스캔 방식",
    "tb": {
     "head": [
      "스캔",
      "조건",
      "특징"
     ],
     "rows": [
      [
       "Unique Scan",
       "Unique 인덱스 전 컬럼 '='",
       "1건"
      ],
      [
       "★Range Scan★",
       "★선두 컬럼★ 가공 없는 조건",
       "정렬 보장"
      ],
      [
       "Full Scan",
       "선두 조건 없음",
       "Single Block · 정렬 보장"
      ],
      [
       "★Fast Full Scan★",
       "필요 컬럼 모두 인덱스에 존재",
       "★Multiblock · 정렬 미보장 · 병렬★"
      ],
      [
       "★Skip Scan★",
       "선두 조건 없음 · 선두 NDV 적음",
       "선두 값별 건너뛰기"
      ]
     ]
    }
   },
   {
    "h": "인덱스를 못 타는 조건과 해결",
    "tb": {
     "head": [
      "조건",
      "해결"
     ],
     "rows": [
      [
       "★컬럼 가공★ — SUBSTR·TO_CHAR·NVL·연산",
       "상수 쪽을 변환 · 함수 기반 인덱스(FBI)"
      ],
      [
       "★문자형 컬럼 = 숫자 상수★ (컬럼이 TO_NUMBER 변환)",
       "상수를 문자로 — 컬럼 = '123'"
      ],
      [
       "LIKE '%값' (앞 와일드카드)",
       "검색 요구 재설계"
      ],
      [
       "부정형 !=, NOT IN",
       "긍정 조건으로 변환 · 다른 컬럼 활용"
      ],
      [
       "IS NULL (단일 컬럼 B*Tree)",
       "NOT NULL 컬럼과 결합 인덱스"
      ]
     ]
    }
   },
   {
    "h": "결합 인덱스 설계",
    "li": [
     "★선두 컬럼 조건 필수★ — 없으면 Range Scan 불가",
     "★'=' 조건 컬럼을 앞, 범위(BETWEEN·LIKE·>) 조건 컬럼을 뒤★ — 범위 조건 뒤 컬럼은 액세스 범위를 줄이지 못하고 필터로만 쓰임",
     "자주 쓰는 조건 · ORDER BY 순서까지 고려하면 ★소트 생략★ 가능",
     "★IN-List Iterator★ — 선두 범위 조건을 IN 목록으로 바꿔 '=' 처럼 여러 번 탐색"
    ]
   },
   {
    "h": "테이블 랜덤 액세스와 클러스터링 팩터",
    "li": [
     "인덱스 경유 테이블 액세스는 ★건마다 Single Block 랜덤 I/O★ → 많이 읽으면 Full Scan 보다 느림(인덱스 손익분기점)",
     "★클러스터링 팩터★ — 인덱스 순서와 테이블 저장 순서의 일치도 · 블록 수에 가까울수록 좋음",
     "랜덤 액세스 줄이기 — ★필요 컬럼을 인덱스에 추가(커버링)★ · IOT · 클러스터 테이블"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "조인 튜닝",
  "title": "조인 튜닝 — NL·Sort Merge·Hash",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "조인 방식 비교",
    "tb": {
     "head": [
      "구분",
      "NL",
      "Sort Merge",
      "Hash"
     ],
     "rows": [
      [
       "원리",
       "Outer 행마다 Inner 탐색",
       "양쪽 정렬 → 병합",
       "Build 해시 맵 → Probe"
      ],
      [
       "인덱스",
       "★Inner 필수★",
       "불필요",
       "불필요"
      ],
      [
       "조건",
       "모두",
       "★비등치 가능★",
       "★등치만★"
      ],
      [
       "메모리",
       "—",
       "PGA Sort Area",
       "PGA Hash Area"
      ],
      [
       "적합",
       "★소량·OLTP·부분범위★",
       "대량·비등치",
       "★대량·DW·등치★"
      ]
     ]
    }
   },
   {
    "h": "NL 조인 튜닝",
    "li": [
     "★드라이빙 테이블★ — 조건이 강해 ★결과 건수가 적은 쪽★ 을 Outer 로",
     "Inner 조인 컬럼에 인덱스 · Inner 랜덤 액세스 횟수 = Outer 건수",
     "힌트 — /*+ LEADING(d) USE_NL(e) INDEX(e 사원_부서_IDX) */"
    ]
   },
   {
    "h": "Hash 조인 튜닝",
    "li": [
     "★작은 집합을 Build Input★ — Hash Area 안에 들어가면 가장 빠름(In-Memory)",
     "Build 가 Hash Area 를 넘으면 Temp 사용(Grace·Hybrid) — 성능 저하",
     "Build Input 지정 — LEADING 의 첫 테이블 또는 ★SWAP_JOIN_INPUTS★",
     "대량 등치 조인 · 조인 컬럼 인덱스가 없거나 효율이 낮을 때"
    ]
   },
   {
    "h": "Sort Merge 조인",
    "li": [
     "양쪽을 조인 컬럼으로 정렬해 병합 — ★비등치(>, <, BETWEEN) 대량 조인★",
     "이미 정렬된 인덱스로 읽으면 정렬 생략 가능"
    ]
   },
   {
    "h": "서브쿼리 조인",
    "li": [
     "★세미 조인★(EXISTS·IN) — 매칭 첫 건에서 멈춤 · NL_SJ · HASH_SJ",
     "★안티 조인★(NOT EXISTS·NOT IN) — 매칭 없는 행 · NL_AJ · HASH_AJ",
     "★NOT IN 은 서브쿼리에 NULL 이 있으면 공집합★ — NOT EXISTS 와 결과 차이"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-7",
  "t": "쿼리 변환·소트",
  "title": "쿼리 변환과 소트 튜닝",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "주요 쿼리 변환",
    "tb": {
     "head": [
      "변환",
      "내용",
      "힌트"
     ],
     "rows": [
      [
       "★서브쿼리 Unnesting★",
       "서브쿼리를 조인으로 풀어 순서·방식 선택 폭 확대",
       "UNNEST / NO_UNNEST"
      ],
      [
       "필터 오퍼레이션",
       "Unnesting 안 하면 메인 행마다 서브쿼리 수행(결과 캐싱)",
       "NO_UNNEST"
      ],
      [
       "★뷰 Merging★",
       "인라인 뷰를 메인 쿼리와 병합",
       "MERGE / NO_MERGE"
      ],
      [
       "★조건절 Pushing★",
       "메인 조건을 뷰 안으로 밀어 넣음",
       "PUSH_PRED"
      ],
      [
       "조건절 이행",
       "A=B AND B=10 → A=10 추가 도출",
       "—"
      ],
      [
       "OR Expansion",
       "OR 조건을 UNION ALL 로 분리해 각각 인덱스 사용",
       "USE_CONCAT / NO_EXPAND"
      ],
      [
       "조인 제거",
       "결과에 영향 없는 조인 테이블 제거(FK·PK 관계)",
       "—"
      ]
     ]
    }
   },
   {
    "h": "소트가 발생하는 연산",
    "li": [
     "ORDER BY · GROUP BY · DISTINCT · ★UNION·MINUS·INTERSECT★ · 소트 머지 조인 · 윈도우 함수 · 인덱스 생성",
     "Sort Area(PGA) 부족 → ★Temp 디스크 소트★ (One-Pass · Multi-Pass) 로 급격한 저하"
    ]
   },
   {
    "h": "소트 튜닝 방법",
    "li": [
     "★UNION → UNION ALL★ (중복이 없음이 확실할 때)",
     "★인덱스로 소트 생략★ — 조건·ORDER BY 컬럼을 인덱스 순서에 맞춤 → SORT ORDER BY 사라짐",
     "MIN·MAX → 인덱스 끝 한 건 읽기(FIRST ROW)",
     "불필요한 DISTINCT 제거 · EXISTS 로 대체",
     "정렬 대상 컬럼·건수 줄이기 — 필요한 컬럼만 SELECT, 정렬 전에 필터"
    ]
   },
   {
    "h": "스칼라 서브쿼리 캐싱",
    "li": [
     "SELECT 절 스칼라 서브쿼리는 ★입력 값별 결과를 캐싱★ → 입력 값 종류가 적으면 효과 큼",
     "입력 값 종류가 많으면 캐시 효과 없이 건마다 수행 → 조인으로 변환 검토"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-8",
  "t": "힌트",
  "title": "옵티마이저 힌트",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "사용 규칙",
    "li": [
     "★/*+ 힌트 */★ — SELECT·INSERT·UPDATE·DELETE·MERGE 키워드 ★바로 뒤★",
     "테이블에 ★별칭을 쓰면 힌트에도 별칭★",
     "여러 힌트는 공백으로 나열 — /*+ LEADING(d e) USE_NL(e) INDEX(e IDX1) */",
     "★문법 오류·실행 불가 힌트는 오류 없이 무시★"
    ]
   },
   {
    "h": "자주 쓰는 힌트",
    "tb": {
     "head": [
      "분류",
      "힌트"
     ],
     "rows": [
      [
       "최적화 목표",
       "ALL_ROWS · FIRST_ROWS(n)"
      ],
      [
       "접근 경로",
       "FULL(t) · INDEX(t idx) · INDEX_DESC · INDEX_FFS · INDEX_SS · NO_INDEX"
      ],
      [
       "조인 순서",
       "★LEADING(t1 t2 …)★ · ORDERED"
      ],
      [
       "조인 방식",
       "★USE_NL(t) · USE_HASH(t) · USE_MERGE(t)★ · SWAP_JOIN_INPUTS"
      ],
      [
       "쿼리 변환",
       "UNNEST · NO_UNNEST · MERGE · NO_MERGE · PUSH_PRED · USE_CONCAT"
      ],
      [
       "병렬",
       "PARALLEL(t n) · NO_PARALLEL · PQ_DISTRIBUTE"
      ],
      [
       "기타",
       "APPEND · MATERIALIZE · INLINE · CARDINALITY · DYNAMIC_SAMPLING"
      ]
     ]
    }
   },
   {
    "h": "힌트가 무시되는 경우",
    "li": [
     "문법 오류 · 존재하지 않는 인덱스·테이블 · ★별칭 불일치★",
     "★논리적으로 불가능★ — 비등치 조인에 USE_HASH · 인덱스로 처리할 수 없는 조건에 INDEX",
     "쿼리 변환으로 힌트 대상 쿼리 블록이 사라짐 → QB_NAME 으로 블록 지정"
    ]
   },
   {
    "h": "조인 힌트 조합 예",
    "li": [
     "/*+ LEADING(d) USE_NL(e) */ — d 를 드라이빙, e 를 NL Inner",
     "/*+ LEADING(c) USE_HASH(o) */ — c 를 Build Input, o 를 Probe",
     "/*+ ORDERED USE_MERGE(b) */ — FROM 절 순서대로, b 와 Sort Merge"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-9",
  "t": "부분범위·병렬",
  "title": "부분범위 처리·페이징·병렬 처리",
  "ref": "SQL 전문가 가이드 과목 Ⅲ · SQLP 학습자료 §3·§8~§11",
  "body": [
   {
    "h": "부분범위 처리",
    "li": [
     "결과를 ★Array Size(운반 단위)만큼★ 만들어 먼저 전송하고 다음 Fetch 를 기다림 → OLTP 화면의 ★빠른 첫 응답★",
     "조건 — 전체 정렬·그룹핑이 없거나 ★인덱스로 소트 생략★ 가능해야 함",
     "★FIRST_ROWS(n)★ 힌트 · NL 조인 · 인덱스 소트 생략이 함께 쓰임"
    ]
   },
   {
    "h": "페이징 쿼리 패턴",
    "tb": {
     "head": [
      "방식",
      "형태",
      "포인트"
     ],
     "rows": [
      [
       "★ROWNUM Top-N★",
       "SELECT * FROM (SELECT … ORDER BY 컬럼) WHERE ROWNUM <= 10",
       "★정렬은 안쪽, ROWNUM 은 바깥★ — Stopkey"
      ],
      [
       "ROWNUM 범위",
       "바깥에서 rn >= 11 (안쪽 ROWNUM <= 20 에 별칭 rn)",
       "ROWNUM > 1 직접 사용 시 0건"
      ],
      [
       "★OFFSET-FETCH★",
       "ORDER BY 컬럼 OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY",
       "ANSI 표준(12c 이상)"
      ],
      [
       "ROW_NUMBER()",
       "ROW_NUMBER() OVER (ORDER BY …) <= N",
       "윈도우 함수 Top-N"
      ]
     ]
    }
   },
   {
    "h": "병렬 처리 구조",
    "li": [
     "★QC(Query Coordinator)★ + 병렬 서버 · ★Producer·Consumer★ 두 집합이면 최대 ★DOP × 2★ 서버",
     "★Granule★ — 블록 기반(기본) · 파티션 기반",
     "★Inter-operation★(서버 집합 간 병렬) vs ★Intra-operation★(같은 작업을 나눠 병렬)",
     "활성화 — /*+ PARALLEL(t 4) */ · ALTER TABLE t PARALLEL 4 · 병렬 DML 은 ALTER SESSION ENABLE PARALLEL DML"
    ]
   },
   {
    "h": "데이터 분배 방식 (PQ_DISTRIBUTE)",
    "tb": {
     "head": [
      "방식",
      "동작",
      "적합"
     ],
     "rows": [
      [
       "★Broadcast★",
       "한쪽 결과를 모든 Consumer 에 복제",
       "★한쪽이 작을 때★"
      ],
      [
       "★Hash★",
       "조인 키 해시로 양쪽 재분배",
       "양쪽 대용량 조인"
      ],
      [
       "Range",
       "정렬 키 범위로 분배",
       "병렬 정렬(ORDER BY)"
      ],
      [
       "Key",
       "한쪽만 파티션 키에 맞춰 분배",
       "부분 Partition-Wise 조인"
      ],
      [
       "Round-Robin",
       "순서대로 고르게 분배",
       "균등 분산"
      ]
     ]
    }
   },
   {
    "h": "병렬 처리 주의",
    "li": [
     "적합 — 대용량 Full Scan · 정렬 · 해시 조인 · 대량 DML · 인덱스 생성",
     "부적합 — ★OLTP 소량 조회★ · 인덱스 단건 액세스 (병렬 오버헤드가 더 큼)",
     "과도한 DOP 는 시스템 자원 고갈 — 동시 사용자 고려"
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
  "desc": "계산·실행 결과·시나리오 — 변별력 문항",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 1,
  "q": "데이터 모델링 3단계 중 정규화를 수행하고 재사용성이 가장 높은 단계는?",
  "c": [
   "논리적 모델링",
   "개념적 모델링",
   "물리적 모델링",
   "외부 모델링"
  ],
  "a": 0,
  "e": "논리적 모델링에서 키·속성·관계를 정확히 표현하고 정규화를 수행한다. 개념적은 핵심 엔터티 도출, 물리적은 DBMS 저장 구조 설계 단계이며 외부 모델링은 3단계에 없다."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 1,
  "q": "데이터 모델링의 특징으로 보기 어려운 것은?",
  "c": [
   "추상화",
   "중복화",
   "명확화",
   "단순화"
  ],
  "a": 1,
  "e": "모델링 특징은 추상화·단순화·명확화다. 중복은 오히려 피해야 할 유의점이다."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 2,
  "q": "데이터 모델링 유의점 중 '사소한 업무 변화에도 데이터 모델을 자주 바꿔야 하는 상태'는?",
  "c": [
   "중복",
   "비일관성",
   "비유연성",
   "추상화"
  ],
  "a": 2,
  "e": "비유연성은 데이터와 프로세스를 분리하지 않아 업무 변화에 모델이 자주 바뀌는 문제다. 중복은 같은 정보의 반복 저장, 비일관성은 데이터 간 불일치, 추상화는 특징이다."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 2,
  "q": "CRUD 매트릭스로 데이터와 프로세스의 관계를 분석하는 모델링 관점은?",
  "c": [
   "데이터 관점",
   "프로세스 관점",
   "물리 관점",
   "상호작용 관점"
  ],
  "a": 3,
  "e": "상호작용 관점은 데이터와 프로세스가 어떻게 연관되는지(CRUD)를 본다. 데이터 관점은 What, 프로세스 관점은 How 이며 물리 관점은 3관점에 없다."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 3,
  "q": "개념 스키마가 변경되어도 외부 스키마(응용 프로그램)에 영향을 주지 않는 성질은?",
  "c": [
   "논리적 독립성",
   "물리적 독립성",
   "위치 투명성",
   "병행 투명성"
  ],
  "a": 0,
  "e": "외부↔개념 사이가 논리적 독립성이다. 물리적 독립성은 개념↔내부 스키마 사이이며, 위치·병행 투명성은 분산 DB 개념이다."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 1,
  "q": "국내 실무와 시험에서 가장 많이 쓰이며 새발(Crow's Foot)로 다수(M)를 표현하는 ERD 표기법은?",
  "c": [
   "Chen",
   "IE",
   "Barker",
   "UML"
  ],
  "a": 1,
  "e": "IE(Information Engineering) 표기법이 Crow's Foot 으로 다수를 표현한다. Chen 은 마름모 관계, Barker 는 Oracle Case 표기, UML 은 클래스 다이어그램 표기다."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 3,
  "q": "Which statement about the three levels of data modeling is MOST accurate?",
  "c": [
   "Physical modeling is independent of the target DBMS",
   "Conceptual modeling defines indexes and storage parameters",
   "Logical modeling expresses keys, attributes and relationships precisely and performs normalization",
   "Normalization is performed only in physical modeling"
  ],
  "a": 2,
  "e": "Logical modeling is where keys and relationships are made precise and normalization is applied; physical modeling is DBMS-specific, and indexes/storage belong to physical design."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 1,
  "q": "업무 수행 중 발생하며 발생량이 많고 통계 자료로 활용되는 엔터티는?",
  "c": [
   "유형 엔터티",
   "개념 엔터티",
   "기본 엔터티",
   "사건 엔터티"
  ],
  "a": 3,
  "e": "사건(Event) 엔터티는 주문·청구처럼 업무 중 발생하며 양이 많다. 유형은 물리적 형태, 개념은 형태 없는 개념이며, 기본 엔터티는 발생 시점 기준 분류다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "두 개 이상의 부모 엔터티로부터 발생하고 자주 변경되며 데이터량이 증가하는 엔터티는?",
  "c": [
   "행위 엔터티",
   "중심 엔터티",
   "기본 엔터티",
   "개념 엔터티"
  ],
  "a": 0,
  "e": "행위 엔터티는 둘 이상의 부모에서 발생한다(주문이력 등). 기본 엔터티는 독립 생성, 중심 엔터티는 기본에서 발생하는 업무 중심 엔터티다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "엔터티의 특징으로 옳지 않은 것은?",
  "c": [
   "유일한 식별자로 구분된다",
   "인스턴스가 1개만 존재해도 된다",
   "속성을 반드시 가진다",
   "다른 엔터티와 1개 이상의 관계를 가진다"
  ],
  "a": 1,
  "e": "엔터티는 인스턴스 2개 이상의 집합이어야 한다. 나머지는 엔터티의 특징이다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "업무상 존재하지 않지만 설계상 필요해 새로 만든 속성(예: 코드, 일련번호)은?",
  "c": [
   "기본 속성",
   "파생 속성",
   "설계 속성",
   "복합 속성"
  ],
  "a": 2,
  "e": "설계 속성은 업무 분석이 아닌 설계 과정에서 정의한 속성이다. 기본 속성은 업무에서 도출, 파생 속성은 계산값, 복합 속성은 구성 방식 분류다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 1,
  "q": "속성이 가질 수 있는 값의 범위를 무엇이라 하는가?",
  "c": [
   "인스턴스",
   "카디널리티",
   "디그리",
   "도메인"
  ],
  "a": 3,
  "e": "도메인은 속성 값의 범위(타입·크기·제약)다. 카디널리티는 행(튜플) 수, 디그리는 속성(컬럼) 수, 인스턴스는 엔터티의 개별 값이다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 3,
  "q": "관계 표기에 포함되는 요소로 보기 어려운 것은?",
  "c": [
   "관계 정규형",
   "관계 차수",
   "관계 선택사양",
   "관계명"
  ],
  "a": 0,
  "e": "관계 표기 요소는 관계명·차수(Cardinality)·선택사양(Optionality)이다. 정규형은 관계 표기 요소가 아니다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "M:N 관계를 논리 모델에서 해소하는 일반적인 방법은?",
  "c": [
   "두 엔터티를 하나로 병합",
   "연결(교차) 엔터티를 두어 1:M 관계 두 개로 분리",
   "FK 를 양쪽에 모두 추가",
   "관계를 삭제"
  ],
  "a": 1,
  "e": "연결 엔터티를 만들어 1:M 두 개로 분해한다. 병합·양방향 FK·삭제는 M:N 해소 방법이 아니다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 3,
  "q": "In an IE notation ERD, a line with a crow's foot on the ORDER side and a single bar on the CUSTOMER side BEST represents which rule?",
  "c": [
   "One order belongs to many customers",
   "Each customer has exactly one order",
   "One customer can place many orders",
   "Orders and customers have no relationship"
  ],
  "a": 2,
  "e": "The crow's foot marks the 'many' side, so one customer relates to many orders."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 1,
  "q": "주식별자의 특징으로 보기 어려운 것은?",
  "c": [
   "유일성",
   "최소성",
   "불변성",
   "대표성"
  ],
  "a": 3,
  "e": "주식별자 특징은 유일성·최소성·불변성·존재성 4가지다. 대표성은 주식별자와 보조식별자를 나누는 분류 기준이다."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "주식별자 값이 반드시 존재해야 하며 NULL 이 허용되지 않는다는 특징은?",
  "c": [
   "존재성",
   "최소성",
   "불변성",
   "유일성"
  ],
  "a": 0,
  "e": "존재성은 주식별자에 반드시 값이 있어야 한다는 특징이다. 유일성은 유일 구분, 최소성은 최소 속성 수, 불변성은 값 불변이다."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "업무에 의해 자연스럽게 만들어지는 식별자와 달리, 인위적으로 만든 일련번호 형태의 식별자는?",
  "c": [
   "본질 식별자",
   "인조 식별자",
   "보조 식별자",
   "외부 식별자"
  ],
  "a": 1,
  "e": "인조 식별자는 업무와 무관하게 인위적으로 만든 식별자다. 본질 식별자는 업무적으로 만들어지며, 보조·외부 식별자는 다른 분류 기준이다."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "부모 엔터티의 주식별자가 자식 엔터티의 주식별자 일부가 되는 관계는?",
  "c": [
   "재귀 관계",
   "비식별 관계",
   "식별 관계",
   "배타 관계"
  ],
  "a": 2,
  "e": "식별 관계는 부모 PK 가 자식 PK 의 일부가 되며 실선으로 표기한다. 비식별 관계는 일반 속성으로 상속되고 점선으로 표기한다."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 3,
  "q": "비식별 관계를 선택하는 것이 적절한 상황으로 보기 어려운 것은?",
  "c": [
   "자식 엔터티가 독립적인 주식별자를 가져야 할 때",
   "부모 없이 자식 인스턴스가 생성될 수 있을 때",
   "식별 관계가 이어져 자식 PK 속성 수가 과도하게 늘어날 때",
   "부모가 없으면 자식이 절대 존재할 수 없고 강한 종속이 필요할 때"
  ],
  "a": 3,
  "e": "부모 없이 존재할 수 없는 강한 종속은 식별 관계가 적합하다. 나머지는 비식별 관계를 고려하는 대표 상황이다."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "ERD(IE 표기)에서 비식별 관계를 표시하는 선은?",
  "c": [
   "점선",
   "실선",
   "이중선",
   "굵은 실선"
  ],
  "a": 0,
  "e": "비식별 관계는 점선, 식별 관계는 실선으로 표기한다."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 3,
  "q": "A modeler wants to avoid the primary key of child tables growing longer and longer through chained parent keys. What is the BEST approach?",
  "c": [
   "Use identifying relationships everywhere",
   "Break the chain with a non-identifying relationship where the child can have its own key",
   "Remove all foreign keys",
   "Merge all child tables into the parent"
  ],
  "a": 1,
  "e": "Non-identifying relationships stop the inherited key chain and let the child use its own identifier."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 1,
  "q": "정규화의 주된 목적은?",
  "c": [
   "조회 속도 향상",
   "테이블 수 축소",
   "이상 현상 제거와 데이터 중복 최소화",
   "인덱스 자동 생성"
  ],
  "a": 2,
  "e": "정규화는 삽입·갱신·삭제 이상을 제거하고 중복을 줄이는 것이 목적이다. 조회 속도 향상은 반정규화의 목적이다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "복합 주식별자의 일부에만 종속된 속성을 분리해 해결하는 정규형은?",
  "c": [
   "1NF",
   "BCNF",
   "3NF",
   "2NF"
  ],
  "a": 3,
  "e": "부분 함수 종속 제거는 2NF 다. 1NF 는 원자값, 3NF 는 이행 종속 제거, BCNF 는 결정자가 후보키여야 한다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "사번 → 부서코드 → 부서명 처럼 주식별자가 아닌 속성을 거쳐 종속되는 관계를 제거하는 정규형은?",
  "c": [
   "3NF",
   "2NF",
   "1NF",
   "4NF"
  ],
  "a": 0,
  "e": "이행 함수 종속 제거는 3NF 다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 3,
  "q": "3NF 를 만족하지만 후보키가 아닌 결정자가 존재하는 릴레이션을 분해해 만족시키는 정규형은?",
  "c": [
   "2NF",
   "BCNF",
   "4NF",
   "5NF"
  ],
  "a": 1,
  "e": "BCNF 는 모든 결정자가 후보키여야 한다. 3NF 를 만족해도 후보키가 아닌 결정자가 있으면 BCNF 위반이다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "다치 종속(Multi-valued Dependency)을 제거하는 정규형은?",
  "c": [
   "3NF",
   "BCNF",
   "4NF",
   "5NF"
  ],
  "a": 2,
  "e": "4NF 는 다치 종속을, 5NF 는 조인 종속을 제거한다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 1,
  "q": "중복 데이터 일부만 수정되어 데이터 간 불일치가 생기는 이상 현상은?",
  "c": [
   "삽입 이상",
   "조회 이상",
   "삭제 이상",
   "갱신 이상"
  ],
  "a": 3,
  "e": "갱신 이상이다. 삽입 이상은 불필요한 데이터를 함께 넣어야 하는 문제, 삭제 이상은 원치 않는 정보까지 지워지는 문제이며 조회 이상은 없다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 3,
  "q": "반정규화 절차에서 반정규화 적용 전에 먼저 검토하는 '다른 방법'으로 보기 어려운 것은?",
  "c": [
   "테이블 병합",
   "클러스터링",
   "인덱스 조정",
   "뷰(View) 사용"
  ],
  "a": 0,
  "e": "다른 방법 유도 단계에서는 뷰·클러스터링·인덱스·응용 애플리케이션을 검토한다. 테이블 병합은 반정규화 기법 자체다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "자주 조회하지 않는 대용량 컬럼을 별도 테이블로 분리하는 반정규화 기법은?",
  "c": [
   "수평 분할",
   "수직 분할",
   "중복 테이블 추가",
   "관계 중복"
  ],
  "a": 1,
  "e": "컬럼 단위 분리는 수직 분할이다. 수평 분할은 행 단위, 중복 테이블 추가와 관계 중복은 다른 기법이다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 3,
  "q": "Which is the BEST reason to apply denormalization?",
  "c": [
   "To eliminate update anomalies",
   "To guarantee data integrity",
   "To improve query performance after other options such as indexes and views have been considered",
   "To reduce the number of attributes"
  ],
  "a": 2,
  "e": "Denormalization trades integrity for read performance and should follow evaluation of alternatives like indexes, views and clustering."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "슈퍼타입과 서브타입을 하나의 테이블로 통합하는 변환 방식은?",
  "c": [
   "One To One Type",
   "Plus Type",
   "Partition Type",
   "Single Type(All in One)"
  ],
  "a": 3,
  "e": "Single Type 은 전체를 하나의 테이블로 통합한다. One To One 은 각각 개별 테이블, Plus 는 슈퍼+서브타입 테이블 구성이다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 3,
  "q": "서브타입별로 개별 처리하는 트랜잭션이 대부분인 경우 가장 적합한 슈퍼/서브타입 변환 방식은?",
  "c": [
   "One To One Type",
   "Single Type",
   "All in One Type",
   "Range Type"
  ],
  "a": 0,
  "e": "개별 트랜잭션이 많으면 슈퍼·서브를 각각 개별 테이블로 두는 One To One Type 이 적합하다. 전체 일괄 처리가 많으면 Single(All in One)이 적합하다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 3,
  "q": "PK 컬럼 순서를 정할 때 성능상 권장되는 원칙은?",
  "c": [
   "범위 조건 컬럼을 앞에 둔다",
   "'=' 로 자주 조회하는 컬럼을 앞에 둔다",
   "데이터 타입 길이가 긴 컬럼을 앞에 둔다",
   "순서는 성능과 무관하다"
  ],
  "a": 1,
  "e": "PK 는 인덱스가 되므로 '=' 조회 조건 컬럼을 앞에 둬야 인덱스 범위가 좁아진다. 범위 조건 컬럼이 앞이면 비효율적이다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "분산 DB 에서 사용자가 데이터의 저장 위치를 몰라도 접근할 수 있게 하는 투명성은?",
  "c": [
   "분할 투명성",
   "중복 투명성",
   "위치 투명성",
   "병행 투명성"
  ],
  "a": 2,
  "e": "위치 투명성이다. 분할 투명성은 분할 사실, 중복 투명성은 복제 사실을 숨기고, 병행 투명성은 동시 트랜잭션 일관성을 보장한다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "분산 DB 투명성에 해당하지 않는 것은?",
  "c": [
   "장애 투명성",
   "지역사상 투명성",
   "중복 투명성",
   "정규화 투명성"
  ],
  "a": 3,
  "e": "분산 투명성은 분할·위치·지역사상·중복·장애·병행 6가지다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 1,
  "q": "트랜잭션이 모두 반영되거나 전혀 반영되지 않아야 한다는 성질은?",
  "c": [
   "원자성",
   "일관성",
   "고립성",
   "지속성"
  ],
  "a": 0,
  "e": "원자성(Atomicity)이다. 일관성은 일관된 상태 유지, 고립성은 간섭 배제, 지속성은 커밋 결과의 영구 반영이다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 3,
  "q": "성능 데이터 모델링 수행 순서로 가장 적절한 것은?",
  "c": [
   "반정규화 → 정규화 → 용량 산정 → 검증",
   "정규화 → 용량 산정 → 트랜잭션 유형 파악 → 반정규화 → 조정 → 검증",
   "용량 산정 → 반정규화 → 정규화 → 검증",
   "트랜잭션 유형 파악 → 검증 → 정규화 → 반정규화"
  ],
  "a": 1,
  "e": "정규화를 먼저 정확히 하고 용량·트랜잭션 유형을 파악한 뒤 반정규화, 이력·PK/FK·슈퍼/서브타입 조정, 성능 검증 순으로 진행한다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "범위 값(날짜 구간 등)을 기준으로 데이터를 나누는 파티셔닝 방식은?",
  "c": [
   "Hash 파티셔닝",
   "List 파티셔닝",
   "Range 파티셔닝",
   "Round-robin 파티셔닝"
  ],
  "a": 2,
  "e": "Range 파티셔닝은 값의 범위로 나눈다. List 는 지정 값 목록, Hash 는 해시 함수로 고르게 분산한다."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 3,
  "q": "A table holds both frequently and rarely accessed large columns, causing excessive I/O. Which design change is MOST appropriate?",
  "c": [
   "Horizontal partitioning by date",
   "Converting the table to Single Type",
   "Adding more indexes on the large columns",
   "Vertical split of the rarely used large columns into a separate table"
  ],
  "a": 3,
  "e": "Vertical splitting separates rarely used wide columns, reducing I/O for frequent queries."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 1,
  "q": "TRUNCATE 문이 속하는 SQL 분류는?",
  "c": [
   "DDL",
   "DML",
   "DCL",
   "TCL"
  ],
  "a": 0,
  "e": "TRUNCATE 는 DDL 이다. Oracle 에서는 자동 COMMIT 되어 ROLLBACK 할 수 없다. DML 은 DELETE, DCL 은 GRANT·REVOKE, TCL 은 COMMIT·ROLLBACK 이다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 1,
  "q": "SELECT 문의 논리적 처리 순서로 옳은 것은?",
  "c": [
   "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
   "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
   "FROM → GROUP BY → WHERE → HAVING → SELECT → ORDER BY",
   "FROM → WHERE → HAVING → GROUP BY → ORDER BY → SELECT"
  ],
  "a": 1,
  "e": "FROM 에서 테이블을 정하고 WHERE 로 행을 거른 뒤 GROUP BY·HAVING, SELECT, 마지막에 ORDER BY 순이다. 그래서 ORDER BY 에서는 SELECT 별칭을 쓸 수 있다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "Oracle 에서 다음 중 ROLLBACK 으로 되돌릴 수 있는 작업은?",
  "c": [
   "TRUNCATE TABLE EMP",
   "DROP TABLE EMP",
   "DELETE FROM EMP",
   "CREATE TABLE T (C NUMBER)"
  ],
  "a": 2,
  "e": "DELETE 는 DML 이라 COMMIT 전에 ROLLBACK 할 수 있다. TRUNCATE·DROP·CREATE 는 DDL 로 Oracle 에서 자동 COMMIT 된다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "INSERT 1 → SAVEPOINT SP1 → INSERT 2 → SAVEPOINT SP2 → INSERT 3 → ROLLBACK TO SP1 → INSERT 4 → COMMIT 후 테이블에 남는 값은?",
  "c": [
   "1, 2, 4",
   "1, 2, 3, 4",
   "4",
   "1, 4"
  ],
  "a": 3,
  "e": "ROLLBACK TO SP1 은 SP1 이후의 2·3 삽입만 취소한다. 이어서 4 를 넣고 COMMIT 하므로 1·4 가 남는다(sqlite 실행 확인)."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "PRIMARY KEY 와 UNIQUE 제약조건의 차이로 옳은 것은?",
  "c": [
   "UNIQUE 는 NULL 을 허용하고 PRIMARY KEY 는 허용하지 않는다",
   "둘 다 NULL 을 허용한다",
   "UNIQUE 는 테이블당 하나만 만들 수 있다",
   "PRIMARY KEY 는 중복을 허용한다"
  ],
  "a": 0,
  "e": "PK 는 UNIQUE + NOT NULL 이며 테이블당 하나다. UNIQUE 는 여러 개 만들 수 있고 NULL 을 허용한다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "부모 행을 삭제할 때 참조하는 자식 행도 함께 삭제되도록 하는 FK 옵션은?",
  "c": [
   "ON DELETE SET NULL",
   "ON DELETE CASCADE",
   "ON DELETE RESTRICT",
   "ON UPDATE CASCADE"
  ],
  "a": 1,
  "e": "CASCADE 는 자식 행을 함께 삭제한다. SET NULL 은 자식 FK 를 NULL 로 바꾸고, RESTRICT(기본 동작)는 자식이 있으면 삭제를 막는다. ON UPDATE 는 수정 시 동작이다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 3,
  "q": "U1 에게 GRANT SELECT ON EMP TO U1 WITH GRANT OPTION 으로 권한을 주고 U1 이 U2 에게 다시 부여했다. 이후 U1 의 권한을 REVOKE 하면?",
  "c": [
   "U2 의 권한은 그대로 유지된다",
   "REVOKE 자체가 불가능하다",
   "U2 의 권한도 함께 회수된다",
   "U1 의 권한만 회수하려면 WITH ADMIN OPTION 을 써야 한다"
  ],
  "a": 2,
  "e": "WITH GRANT OPTION 으로 준 객체 권한은 회수 시 연쇄적으로 회수된다. 연쇄 회수가 없는 것은 시스템 권한의 WITH ADMIN OPTION 이다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 3,
  "q": "Read Committed 격리 수준에서 발생할 수 있는 현상은?",
  "c": [
   "Dirty Read",
   "Lost Update 가 항상 방지됨",
   "어떤 이상 현상도 발생하지 않음",
   "Non-Repeatable Read"
  ],
  "a": 3,
  "e": "Read Committed 는 커밋된 데이터만 읽어 Dirty Read 는 막지만, 같은 행을 다시 읽을 때 값이 바뀌는 Non-Repeatable Read 와 Phantom Read 는 발생할 수 있다. Oracle 의 기본 격리 수준이다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "대상 테이블에 일치하는 행이 있으면 UPDATE, 없으면 INSERT 를 한 문장으로 수행하는 SQL 은?",
  "c": [
   "MERGE",
   "UPSERT",
   "REPLACE",
   "INSERT ALL"
  ],
  "a": 0,
  "e": "MERGE INTO … USING … ON … WHEN MATCHED THEN UPDATE WHEN NOT MATCHED THEN INSERT 구문이다. INSERT ALL 은 여러 테이블에 동시 삽입하는 Oracle 구문이다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 1,
  "q": "예제 EMP 테이블에서 SELECT COUNT(*), COUNT(COMM) FROM EMP 의 결과는?\n\nEMP\nEMPNO ENAME JOB   DEPTNO SAL COMM MGR\n1     KIM   MGR   10     300 NULL NULL\n2     LEE   CLERK 10     200 50   1\n3     PARK  MGR   20     400 NULL 1\n4     CHOI  DEV   20     400 100  3\n5     JUNG  DEV   20     250 0    3\n6     KANG  CLERK NULL   150 NULL 1",
  "c": [
   "6, 6",
   "6, 3",
   "3, 3",
   "6, 2"
  ],
  "a": 1,
  "e": "COUNT(*) 는 NULL 을 포함한 행 수 6, COUNT(COMM) 은 NULL 을 제외해 3이다. COMM 이 0 인 JUNG 은 NULL 이 아니므로 포함된다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "예제 EMP 에서 SELECT AVG(COMM), AVG(NVL(COMM,0)) FROM EMP 의 결과는? (COMM: NULL, 50, NULL, 100, 0, NULL)",
  "c": [
   "25, 25",
   "50, 50",
   "50, 25",
   "75, 25"
  ],
  "a": 2,
  "e": "AVG(COMM) 은 NULL 을 제외한 3행 합 150÷3=50, NVL 로 0 을 채우면 150÷6=25 다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 1,
  "q": "COMM 이 NULL 인 행을 찾는 조건으로 옳은 것은?",
  "c": [
   "WHERE COMM = NULL",
   "WHERE COMM = ''",
   "WHERE NVL(COMM) = 0",
   "WHERE COMM IS NULL"
  ],
  "a": 3,
  "e": "= NULL 비교는 UNKNOWN 이라 항상 0건이다. NULL 은 IS NULL 로 비교한다. NVL 은 인수 2개가 필요하다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "NVL2(COMM, 'Y', 'N') 의 결과가 'Y' 인 경우는?",
  "c": [
   "COMM 이 0 일 때",
   "COMM 이 NULL 일 때",
   "COMM 이 NULL 이거나 0 일 때",
   "어떤 경우에도 Y 가 아니다"
  ],
  "a": 0,
  "e": "NVL2 는 첫 인수가 NULL 이 아니면 두 번째 값을 돌려준다. 0 은 NULL 이 아니므로 'Y' 다(JUNG 행 Y)."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "예제 EMP 에서 COALESCE(COMM, MGR, 0) 의 KANG 행 결과는? (KANG: COMM NULL, MGR 1)",
  "c": [
   "0",
   "1",
   "NULL",
   "150"
  ],
  "a": 1,
  "e": "COALESCE 는 왼쪽부터 처음 만나는 NULL 아닌 값을 돌려준다. COMM 이 NULL 이고 MGR 이 1 이므로 1 이다. KIM 은 COMM·MGR 모두 NULL 이라 0 이 된다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "NULLIF(SAL, 400) 의 결과로 옳은 것은? (PARK 의 SAL = 400)",
  "c": [
   "400",
   "0",
   "NULL",
   "오류"
  ],
  "a": 2,
  "e": "NULLIF(X,Y) 는 X 와 Y 가 같으면 NULL, 다르면 X 를 돌려준다. PARK 은 400=400 이라 NULL 이다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 1,
  "q": "SUBSTR('SQLPROFESSIONAL', 4, 3) 의 결과는?",
  "c": [
   "'LPR'",
   "'PROF'",
   "'QLP'",
   "'PRO'"
  ],
  "a": 3,
  "e": "4번째 글자부터 3글자를 자른다. S·Q·L 다음 4번째가 P 라서 PRO 다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "Oracle 에서 ORDER BY COMM ASC 로 정렬할 때 COMM 이 NULL 인 행의 위치는?",
  "c": [
   "맨 뒤",
   "맨 앞",
   "중간(0 다음)",
   "NULL 행은 정렬에서 제외"
  ],
  "a": 0,
  "e": "Oracle 은 NULL 을 가장 큰 값으로 취급해 ASC 에서 맨 뒤에 둔다. SQL Server 는 가장 작은 값으로 취급해 맨 앞에 둔다. NULLS FIRST 로 바꿀 수 있다."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 3,
  "q": "ENAME LIKE '_I%' 조건에 해당하는 예제 EMP 사원은?",
  "c": [
   "KIM, KANG",
   "KIM",
   "LEE",
   "해당 없음"
  ],
  "a": 1,
  "e": "_ 는 정확히 1글자, % 는 0글자 이상이므로 두 번째 글자가 I 인 이름이다. KIM 만 해당한다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "예제 EMP 에서 SELECT DEPTNO, SUM(SAL) FROM EMP GROUP BY DEPTNO 의 결과 행 수는? (DEPTNO: 10,10,20,20,20,NULL)",
  "c": [
   "2",
   "4",
   "3",
   "6"
  ],
  "a": 2,
  "e": "GROUP BY 에서 NULL 도 하나의 그룹이 된다. 10·20·NULL 세 그룹이다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "HAVING 절에 대한 설명으로 옳은 것은?",
  "c": [
   "GROUP BY 보다 먼저 실행된다",
   "집계 함수를 사용할 수 없다",
   "GROUP BY 없이는 절대 사용할 수 없다",
   "그룹화된 결과에 조건을 걸며 집계 함수를 사용할 수 있다"
  ],
  "a": 3,
  "e": "HAVING 은 GROUP BY 후 그룹을 거르며 집계 함수를 쓸 수 있다. GROUP BY 없이 쓰면 전체를 하나의 그룹으로 본다. 집계 함수를 못 쓰는 것은 WHERE 다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 3,
  "q": "예제 EMP 에서 GROUP BY ROLLUP(DEPTNO, JOB) 결과 행 수는? (DEPTNO·JOB 조합 5개, DEPTNO 값 3개)",
  "c": [
   "9",
   "12",
   "6",
   "8"
  ],
  "a": 0,
  "e": "ROLLUP 은 (DEPTNO,JOB) 5행 + DEPTNO 소계 3행 + 총계 1행 = 9행이다. CUBE 는 JOB 소계 3행이 더해져 12행, GROUPING SETS(DEPTNO,JOB) 은 6행이다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 3,
  "q": "같은 조건에서 GROUP BY CUBE(DEPTNO, JOB) 결과 행 수는? (JOB 값 3개)",
  "c": [
   "9",
   "12",
   "10",
   "15"
  ],
  "a": 1,
  "e": "CUBE 는 모든 조합의 소계를 만든다: (DEPTNO,JOB) 5 + DEPTNO 3 + JOB 3 + 총계 1 = 12행."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "GROUPING SETS(DEPTNO, JOB) 와 같은 결과를 내는 표현은?",
  "c": [
   "GROUP BY ROLLUP(DEPTNO, JOB)",
   "GROUP BY CUBE(DEPTNO, JOB)",
   "GROUP BY DEPTNO 결과와 GROUP BY JOB 결과의 UNION ALL",
   "GROUP BY DEPTNO, JOB"
  ],
  "a": 2,
  "e": "GROUPING SETS 는 지정한 그룹별 집계만 만들고 총계는 없다. 각 GROUP BY 결과를 UNION ALL 한 것과 같다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "ROLLUP 결과에서 소계로 생긴 NULL 과 원래 데이터의 NULL 을 구분할 때 쓰는 함수는?",
  "c": [
   "NVL",
   "DECODE",
   "COALESCE",
   "GROUPING"
  ],
  "a": 3,
  "e": "GROUPING(컬럼) 은 집계로 생긴 NULL 이면 1, 원래 값이면 0 을 돌려준다. 예제의 KANG 처럼 DEPTNO 자체가 NULL 인 행과 총계 행을 구분할 수 있다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 1,
  "q": "집계 함수를 사용할 수 없는 절은?",
  "c": [
   "WHERE",
   "HAVING",
   "SELECT",
   "ORDER BY"
  ],
  "a": 0,
  "e": "WHERE 는 GROUP BY 전에 처리되어 집계 함수를 쓸 수 없다. HAVING·SELECT·ORDER BY 에서는 사용할 수 있다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 3,
  "q": "ROLLUP 과 CUBE 에 대한 설명으로 옳은 것은?",
  "c": [
   "CUBE 는 인수 순서에 따라 결과가 달라진다",
   "ROLLUP 은 인수 순서가 바뀌면 결과가 달라지지만 CUBE 는 같다",
   "ROLLUP 은 총계를 만들지 않는다",
   "둘 다 지정한 그룹만 만들고 총계는 없다"
  ],
  "a": 1,
  "e": "ROLLUP 은 오른쪽부터 하나씩 빼며 계층 소계를 만들어 순서가 중요하다. CUBE 는 모든 조합이라 순서와 무관하다. 둘 다 총계를 포함하며, 총계가 없는 것은 GROUPING SETS 다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 1,
  "q": "두 테이블의 모든 행 조합을 만드는 조인은?",
  "c": [
   "INNER JOIN",
   "NATURAL JOIN",
   "CROSS JOIN",
   "SELF JOIN"
  ],
  "a": 2,
  "e": "CROSS JOIN 은 카티전 곱으로 m×n 행을 만든다. 예제 EMP 6행 × DEPT 4행 = 24행."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "예제에서 SELECT * FROM DEPT D LEFT OUTER JOIN EMP E ON D.DEPTNO = E.DEPTNO 의 결과 행 수는?\n\nEMP\nEMPNO ENAME JOB   DEPTNO SAL COMM MGR\n1     KIM   MGR   10     300 NULL NULL\n2     LEE   CLERK 10     200 50   1\n3     PARK  MGR   20     400 NULL 1\n4     CHOI  DEV   20     400 100  3\n5     JUNG  DEV   20     250 0    3\n6     KANG  CLERK NULL   150 NULL 1\n\nDEPT\nDEPTNO DNAME\n10 영업 / 20 개발 / 30 인사 / 40 총무",
  "c": [
   "5",
   "8",
   "4",
   "7"
  ],
  "a": 3,
  "e": "부서 10 이 2행, 20 이 3행, 사원이 없는 30·40 이 NULL 로 1행씩 보존되어 7행이다. DEPTNO 가 NULL 인 KANG 은 DEPT 기준이라 나오지 않는다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "같은 예제에서 EMP 와 DEPT 의 FULL OUTER JOIN 결과 행 수는?",
  "c": [
   "8",
   "7",
   "6",
   "10"
  ],
  "a": 0,
  "e": "일치 5행 + 부서 없는 KANG 1행 + 사원 없는 부서 30·40 2행 = 8행이다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "Oracle 에서 WHERE D.DEPTNO = E.DEPTNO(+) 와 같은 ANSI 표현은?",
  "c": [
   "DEPT D RIGHT OUTER JOIN EMP E ON D.DEPTNO = E.DEPTNO",
   "DEPT D LEFT OUTER JOIN EMP E ON D.DEPTNO = E.DEPTNO",
   "DEPT D FULL OUTER JOIN EMP E ON D.DEPTNO = E.DEPTNO",
   "DEPT D INNER JOIN EMP E ON D.DEPTNO = E.DEPTNO"
  ],
  "a": 1,
  "e": "(+) 는 데이터가 없어 NULL 로 채워질 쪽(EMP)에 붙는다. 따라서 DEPT 를 모두 보존하는 DEPT LEFT OUTER JOIN EMP 와 같다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 3,
  "q": "DEPT D LEFT JOIN EMP E ON D.DEPTNO = E.DEPTNO WHERE E.SAL >= 300 의 결과 행 수는? (예제 테이블)",
  "c": [
   "5",
   "7",
   "3",
   "4"
  ],
  "a": 2,
  "e": "WHERE 조건이 조인 후에 적용되어 E.SAL 이 NULL 인 보존 행(30·40)과 300 미만 행이 사라진다. KIM·PARK·CHOI 3행만 남아 INNER 조인과 같아진다. 조건을 ON 에 두면 5행이다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "USING 절을 사용한 조인에 대한 설명으로 옳은 것은?",
  "c": [
   "공통 컬럼은 결과에 두 번 표시된다",
   "이름이 다른 컬럼도 지정할 수 있다",
   "반드시 NATURAL 키워드와 함께 써야 한다",
   "USING 에 지정한 공통 컬럼에는 테이블 별칭을 붙일 수 없다"
  ],
  "a": 3,
  "e": "USING(DEPTNO) 의 공통 컬럼은 E.DEPTNO 처럼 접두사를 붙일 수 없고 결과에 한 번만 나온다. 이름이 다르면 ON 을 써야 한다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "NATURAL JOIN 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "조인 조건 컬럼을 ON 절로 직접 지정한다",
   "두 테이블의 같은 이름 컬럼을 모두 조건으로 사용한다",
   "공통 컬럼에 테이블 별칭을 붙일 수 없다",
   "등가(=) 조인으로 수행된다"
  ],
  "a": 0,
  "e": "NATURAL JOIN 은 ON·USING 없이 같은 이름의 모든 컬럼으로 자동 등가 조인한다. 의도치 않은 컬럼까지 조건이 되는 위험이 있다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "사원과 그 관리자 이름을 함께 조회할 때 EMP 테이블을 두 번 사용하는 조인은?",
  "c": [
   "CROSS JOIN",
   "SELF JOIN",
   "NATURAL JOIN",
   "FULL OUTER JOIN"
  ],
  "a": 1,
  "e": "SELF JOIN 은 같은 테이블에 별칭(E, M)을 붙여 E.MGR = M.EMPNO 로 조인한다. 관리자가 없는 KIM 까지 보려면 LEFT OUTER 로 해야 한다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 3,
  "q": "Oracle (+) 아우터 조인 문법의 제약으로 옳은 것은?",
  "c": [
   "(+) 를 양쪽에 붙여 FULL OUTER JOIN 을 표현할 수 있다",
   "(+) 는 보존할 테이블 쪽에 붙인다",
   "(+) 를 쓴 조건에 OR 나 IN 을 사용할 수 없다",
   "(+) 는 등가 조건에만 사용할 수 있고 상수 비교에는 쓸 수 없다"
  ],
  "a": 2,
  "e": "(+) 조건은 OR·IN 과 함께 쓸 수 없고 양쪽에 동시에 붙일 수 없어 FULL OUTER 는 ANSI 문법으로 써야 한다. (+) 는 NULL 이 채워질 쪽에 붙이며, E.SAL(+) >= 300 처럼 상수 조건에도 쓸 수 있다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 3,
  "q": "예제에서 SELECT DEPTNO FROM DEPT WHERE DEPTNO NOT IN (SELECT DEPTNO FROM EMP) 의 결과 행 수는? (EMP.DEPTNO 에 NULL 포함)",
  "c": [
   "2",
   "1",
   "4",
   "0"
  ],
  "a": 3,
  "e": "NOT IN 은 목록의 모든 값과 같지 않아야 참인데, NULL 과의 비교가 UNKNOWN 이라 어떤 행도 참이 되지 않아 0건이다. NOT EXISTS 로 바꾸면 30·40 두 건이 나온다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "SAL > ALL (SELECT SAL FROM EMP WHERE DEPTNO = 10) 과 같은 의미는?",
  "c": [
   "SAL > (부서 10 의 최대 급여)",
   "SAL > (부서 10 의 최소 급여)",
   "SAL = (부서 10 의 어느 급여)",
   "SAL < (부서 10 의 최대 급여)"
  ],
  "a": 0,
  "e": "> ALL 은 모든 값보다 커야 하므로 최댓값보다 큰 것과 같다. 예제 결과는 PARK, CHOI 이다. > ANY 는 최솟값보다 큰 것이다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "SELECT 절에서 사용하며 반드시 한 행 한 컬럼만 반환해야 하는 서브쿼리는?",
  "c": [
   "인라인 뷰",
   "스칼라 서브쿼리",
   "중첩 서브쿼리",
   "다중 컬럼 서브쿼리"
  ],
  "a": 1,
  "e": "스칼라 서브쿼리는 SELECT 절에서 값 하나처럼 쓰이며 2행 이상 반환하면 오류다. 인라인 뷰는 FROM 절, 중첩 서브쿼리는 WHERE 절에 쓴다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 3,
  "q": "자기 부서의 평균 급여보다 많이 받는 사원을 구하는 상관 서브쿼리 결과는? (예제 EMP)",
  "c": [
   "KIM, PARK, CHOI, KANG",
   "PARK, CHOI",
   "KIM, PARK, CHOI",
   "KIM, LEE, PARK, CHOI"
  ],
  "a": 2,
  "e": "부서 10 평균 250 → KIM(300), 부서 20 평균 350 → PARK·CHOI(400). KANG 은 DEPTNO 가 NULL 이라 X.DEPTNO = E.DEPTNO 가 성립하지 않아 평균이 NULL 이 되고 비교에서 제외된다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 1,
  "q": "중복 행을 제거하지 않고 정렬도 하지 않아 가장 빠른 집합 연산자는?",
  "c": [
   "UNION",
   "INTERSECT",
   "MINUS",
   "UNION ALL"
  ],
  "a": 3,
  "e": "UNION ALL 은 두 결과를 그대로 이어 붙인다. UNION 은 중복 제거를 위해 정렬·해시 작업이 필요하다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "T1(1,2,2,3,NULL) 과 T2(2,3,4) 에 대해 SELECT X FROM T1 UNION SELECT X FROM T2 의 결과 행 수는?",
  "c": [
   "5",
   "8",
   "4",
   "6"
  ],
  "a": 0,
  "e": "UNION 은 중복을 제거한다. 1·2·3·NULL·4 로 5행이며, 집합 연산에서는 NULL 도 하나의 값으로 취급된다. UNION ALL 은 8행."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "같은 T1·T2 에서 SELECT X FROM T1 MINUS SELECT X FROM T2 의 결과는?",
  "c": [
   "1",
   "1, NULL",
   "1, 2, NULL",
   "4"
  ],
  "a": 1,
  "e": "MINUS 는 T1 에만 있는 값을 중복 없이 돌려준다. 1 과 NULL 로 2행이다. 표준 SQL 에서는 EXCEPT 라고 쓴다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "집합 연산자 사용 규칙으로 옳지 않은 것은?",
  "c": [
   "각 SELECT 의 컬럼 수가 같아야 한다",
   "결과 컬럼 이름은 첫 번째 SELECT 를 따른다",
   "ORDER BY 는 각 SELECT 문마다 따로 쓸 수 있다",
   "대응하는 컬럼의 데이터 타입이 호환되어야 한다"
  ],
  "a": 2,
  "e": "ORDER BY 는 집합 연산 전체의 맨 마지막에 한 번만 쓸 수 있다. 나머지는 모두 올바른 규칙이다."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 3,
  "q": "단일 행 비교 연산자(=)에 2개 이상의 행을 반환하는 서브쿼리를 쓰면?",
  "c": [
   "첫 번째 행으로 비교한다",
   "IN 처럼 동작한다",
   "결과가 0건이 된다",
   "실행 시 오류가 발생한다"
  ],
  "a": 3,
  "e": "단일 행 서브쿼리 연산자(=, >, < 등)는 서브쿼리가 2행 이상이면 오류가 난다. 여러 행이면 IN·ANY·ALL 을 써야 한다."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 1,
  "q": "점수 90, 90, 85, 80 에 RANK() OVER (ORDER BY 점수 DESC) 를 적용한 결과는?",
  "c": [
   "1, 1, 3, 4",
   "1, 1, 2, 3",
   "1, 2, 3, 4",
   "1, 1, 2, 2"
  ],
  "a": 0,
  "e": "RANK 는 동점에 같은 순위를 주고 다음 순위를 건너뛴다. DENSE_RANK 는 1·1·2·3, ROW_NUMBER 는 1·2·3·4, NTILE(2) 는 1·1·2·2 다(sqlite 실행 확인)."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 1,
  "q": "동점에 같은 순위를 주되 다음 순위를 건너뛰지 않는 함수는?",
  "c": [
   "RANK",
   "DENSE_RANK",
   "ROW_NUMBER",
   "NTILE"
  ],
  "a": 1,
  "e": "DENSE_RANK 는 1·1·2 처럼 연속된 순위를 준다. RANK 는 1·1·3 으로 건너뛴다."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "SALES(1월 100, 2월 150, 3월 120, 4월 200) 에서 SUM(AMT) OVER (ORDER BY MON ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) 의 3월 값은?",
  "c": [
   "270",
   "120",
   "370",
   "570"
  ],
  "a": 2,
  "e": "처음부터 현재 행까지 누적 합이다. 100+150+120 = 370."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "같은 SALES 에서 AMT − LAG(AMT, 1, 0) OVER (ORDER BY MON) 의 1월 값은?",
  "c": [
   "NULL",
   "0",
   "-100",
   "100"
  ],
  "a": 3,
  "e": "1월은 이전 행이 없어 LAG 의 기본값 0 이 쓰인다. 100 − 0 = 100. 기본값을 생략하면 NULL 이라 결과도 NULL 이 된다."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 3,
  "q": "LAST_VALUE(SAL) OVER (PARTITION BY DEPTNO ORDER BY SAL) 이 파티션의 마지막 값이 아니라 현재 행 값을 돌려주는 이유는?",
  "c": [
   "ORDER BY 를 쓰면 기본 프레임이 현재 행까지(RANGE … CURRENT ROW)이기 때문",
   "PARTITION BY 와 함께 쓸 수 없기 때문",
   "LAST_VALUE 는 항상 첫 행을 돌려주기 때문",
   "ROWS 프레임만 지원하기 때문"
  ],
  "a": 0,
  "e": "ORDER BY 가 있으면 기본 프레임이 RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW 라서 현재 행이 프레임의 마지막이다. 파티션 끝 값을 원하면 UNBOUNDED FOLLOWING 까지 지정한다."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 3,
  "q": "EMP 를 SAL 오름차순으로 SUM(SAL) OVER (ORDER BY SAL) (기본 프레임) 할 때 SAL 이 400 인 두 행의 값은?",
  "c": [
   "1300, 1700",
   "둘 다 1700",
   "둘 다 400",
   "둘 다 1300"
  ],
  "a": 1,
  "e": "기본 프레임은 RANGE 라서 같은 SAL 값을 가진 행이 함께 포함되어 둘 다 1700 이다. ROWS 로 지정하면 1300, 1700 로 행마다 다르다."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "GROUP BY 와 윈도우 함수 PARTITION BY 의 차이로 옳은 것은?",
  "c": [
   "PARTITION BY 는 그룹당 한 행만 반환한다",
   "GROUP BY 는 원래 행을 모두 유지한다",
   "PARTITION BY 는 결과 행 수를 줄이지 않는다",
   "둘은 결과 행 수가 항상 같다"
  ],
  "a": 2,
  "e": "윈도우 함수는 원래 행을 유지한 채 집계 값을 붙인다. 예: SUM(SAL) OVER (PARTITION BY DEPTNO) 는 LEE 행에 부서 10 합계 500 을 붙인다."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 3,
  "q": "점수 90, 90, 85, 80 에서 85점의 CUME_DIST() OVER (ORDER BY 점수 DESC) 값은?",
  "c": [
   "0.5",
   "0.667",
   "1",
   "0.75"
  ],
  "a": 3,
  "e": "CUME_DIST 는 현재 행 이하(정렬 순서상 앞이거나 같은) 행 비율이다. 85점까지 3행 ÷ 4행 = 0.75. PERCENT_RANK 는 (3−1)/(4−1) ≈ 0.667 이다."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "다음 행의 값을 가져오는 윈도우 함수는?",
  "c": [
   "LEAD",
   "LAG",
   "FIRST_VALUE",
   "NTILE"
  ],
  "a": 0,
  "e": "LEAD 는 이후 행, LAG 는 이전 행 값을 가져온다. 마지막 행의 LEAD 는 다음 행이 없어 NULL(또는 지정한 기본값)이다."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "계층형 쿼리 START WITH MGR IS NULL CONNECT BY PRIOR EMPNO = MGR 의 전개 방향은?",
  "c": [
   "자식에서 부모로(아래에서 위)",
   "부모에서 자식으로(위에서 아래)",
   "형제 순서대로",
   "전개되지 않음"
  ],
  "a": 1,
  "e": "PRIOR 가 붙은 EMPNO 가 이전(부모) 행의 값이므로 부모의 EMPNO 를 MGR 로 가진 자식을 찾아 내려간다. PRIOR MGR = EMPNO 면 거꾸로 올라간다."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "예제 EMP 를 위 조건으로 전개했을 때 CHOI(EMPNO 4) 의 LEVEL 값은? (KIM ← PARK ← CHOI)",
  "c": [
   "2",
   "1",
   "3",
   "4"
  ],
  "a": 2,
  "e": "KIM 이 루트로 LEVEL 1, KIM 을 관리자로 둔 PARK 이 2, PARK 을 관리자로 둔 CHOI 가 3 이다(재귀 CTE 로 확인)."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 3,
  "q": "같은 계층에서 CONNECT_BY_ISLEAF = 1 인 행의 수는?",
  "c": [
   "2",
   "3",
   "6",
   "4"
  ],
  "a": 3,
  "e": "부하 직원이 없는 LEE·CHOI·JUNG·KANG 이 리프다. KIM 과 PARK 은 부하가 있어 0 이다."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 3,
  "q": "계층형 쿼리에서 WHERE 절 조건의 처리 시점으로 옳은 것은?",
  "c": [
   "계층 전개가 끝난 뒤 결과 행을 필터링한다",
   "계층 전개 전에 루트를 정한다",
   "CONNECT BY 조건과 동일하게 전개 자체를 막는다",
   "ORDER SIBLINGS BY 이후에는 적용되지 않는다"
  ],
  "a": 0,
  "e": "WHERE 는 전개 후 필터라서 중간 노드를 걸러도 그 하위는 남을 수 있다. 전개 자체를 제한하려면 CONNECT BY 절에 조건을 넣는다. 루트는 START WITH 로 정한다."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "SELECT ROWNUM, ENAME FROM EMP WHERE ROWNUM = 2 의 결과는?",
  "c": [
   "두 번째 행 1건",
   "0건",
   "첫 두 행",
   "오류"
  ],
  "a": 1,
  "e": "ROWNUM 은 조건을 통과한 행에 1부터 차례로 붙는다. 첫 행이 ROWNUM=1 로 걸러지면 2가 생기지 않아 결과가 없다. ROWNUM <= N 형태로 써야 한다."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 3,
  "q": "급여 상위 3명을 구하는 Oracle 쿼리로 옳은 것은?",
  "c": [
   "SELECT * FROM EMP WHERE ROWNUM <= 3 ORDER BY SAL DESC",
   "SELECT * FROM EMP WHERE ROWNUM BETWEEN 1 AND 3 ORDER BY SAL",
   "SELECT * FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 3",
   "SELECT TOP 3 * FROM EMP ORDER BY SAL DESC"
  ],
  "a": 2,
  "e": "ROWNUM 은 ORDER BY 보다 먼저 부여되므로 인라인 뷰에서 정렬한 뒤 바깥에서 ROWNUM 으로 자른다. 두 번째는 임의 3행을 뽑아 정렬할 뿐이다. TOP 은 SQL Server 문법이다."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "SELECT * FROM (SELECT DEPTNO, JOB, SAL FROM EMP) PIVOT (SUM(SAL) FOR JOB IN ('MGR' AS MGR, 'DEV' AS DEV)) 의 결과 행 수는? (예제 EMP)",
  "c": [
   "2",
   "5",
   "6",
   "3"
  ],
  "a": 3,
  "e": "PIVOT 은 FOR 절 컬럼(JOB)과 집계 컬럼(SAL)을 뺀 나머지 컬럼(DEPTNO)으로 자동 그룹화한다. DEPTNO 가 10·20·NULL 이라 3행이다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 1,
  "q": "Oracle SGA 에서 SQL 문장과 실행계획을 캐싱해 재사용하는 영역은?",
  "c": [
   "라이브러리 캐시(Shared Pool)",
   "DB 버퍼 캐시",
   "Redo Log Buffer",
   "PGA Sort Area"
  ],
  "a": 0,
  "e": "SQL·실행계획은 Shared Pool 의 라이브러리 캐시에 저장되어 공유된다. 버퍼 캐시는 데이터 블록, Redo Log Buffer 는 변경 이력, PGA Sort Area 는 프로세스 전용 정렬 공간이다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 1,
  "q": "프로세스마다 독립적으로 할당되어 정렬·해시 조인 작업에 쓰이는 메모리 영역은?",
  "c": [
   "SGA",
   "PGA",
   "Shared Pool",
   "DB 버퍼 캐시"
  ],
  "a": 1,
  "e": "PGA 는 서버 프로세스 전용 메모리로 Sort Area·Hash Area 가 여기에 있다. SGA·Shared Pool·버퍼 캐시는 모든 프로세스가 공유한다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "논리적 I/O 1,000,000 블록, 물리적 I/O 50,000 블록일 때 버퍼 캐시 히트율은?",
  "c": [
   "5%",
   "50%",
   "95%",
   "99.5%"
  ],
  "a": 2,
  "e": "히트율 = (1 − 물리 읽기 / 논리 읽기) × 100 = (1 − 0.05) × 100 = 95%. 다만 히트율이 높아도 논리 I/O 자체가 과다하면 비효율적인 SQL 이다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "Full Table Scan 시 주로 발생하는 I/O 방식과 대기 이벤트로 옳은 것은?",
  "c": [
   "Single Block I/O — db file sequential read",
   "Multiblock I/O — log file sync",
   "Single Block I/O — db file scattered read",
   "Multiblock I/O — db file scattered read"
  ],
  "a": 3,
  "e": "Full Scan 은 여러 블록을 한 번에 읽는 Multiblock I/O(db file scattered read)를 쓴다. 인덱스·ROWID 액세스는 Single Block I/O(db file sequential read), log file sync 는 커밋 시 Redo 기록 대기다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "커밋 시점에 반드시 디스크에 기록되어야 하는 것은?",
  "c": [
   "Redo 로그",
   "변경된 데이터 블록",
   "Undo 블록 전체",
   "인덱스 블록"
  ],
  "a": 0,
  "e": "Log Force at Commit — 커밋 시 LGWR 가 Redo 를 디스크에 기록하면 커밋이 완료된다. 데이터 블록은 DBWR 가 나중에 기록해도 장애 시 Redo 로 복구할 수 있다(Write Ahead Logging)."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "Undo 의 용도로 옳지 않은 것은?",
  "c": [
   "트랜잭션 롤백",
   "장애 후 커밋된 변경을 재실행(Roll Forward)",
   "읽기 일관성을 위한 CR 블록 생성",
   "장애 후 미커밋 트랜잭션 롤백"
  ],
  "a": 1,
  "e": "커밋된 변경의 재실행은 Redo 의 역할이다. Undo 는 롤백, 읽기 일관성, 장애 후 미커밋 트랜잭션 롤백에 쓰인다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 3,
  "q": "버퍼 캐시 히트율이 99% 인 SQL 에 대한 해석으로 가장 적절한 것은?",
  "c": [
   "히트율이 높으므로 튜닝할 필요가 없다",
   "물리적 I/O 가 없으므로 인덱스가 필요 없다",
   "히트율과 무관하게 논리적 I/O 가 과다하면 튜닝 대상이다",
   "히트율이 높으면 항상 Full Scan 이 일어난 것이다"
  ],
  "a": 2,
  "e": "비효율적인 인덱스 스캔으로 같은 블록을 반복 읽어도 히트율은 높게 나온다. 튜닝의 기준은 히트율이 아니라 읽은 블록 수(논리 I/O)다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 3,
  "q": "조회가 오래 걸리는 동안 다른 트랜잭션이 데이터를 변경·커밋하고 Undo 가 재사용되어 발생하는 오류는?",
  "c": [
   "ORA-00060 Deadlock detected",
   "ORA-01722 Invalid number",
   "ORA-00001 Unique constraint violated",
   "ORA-01555 Snapshot too old"
  ],
  "a": 3,
  "e": "읽기 일관성을 위해 필요한 Undo 가 덮어쓰이면 ORA-01555 가 발생한다. ORA-00060 은 교착상태, ORA-01722 는 형변환 실패, ORA-00001 은 중복 키 오류다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "인덱스 루트·브랜치·리프 블록과 ROWID 를 이용한 테이블 액세스에서 발생하는 I/O 방식은?",
  "c": [
   "Single Block I/O",
   "Multiblock I/O",
   "Direct Path I/O",
   "Asynchronous Multiblock I/O"
  ],
  "a": 0,
  "e": "인덱스 탐색과 ROWID 테이블 액세스는 한 번에 한 블록씩 읽는 Single Block I/O 다. Multiblock I/O 는 Full Scan·Index Fast Full Scan, Direct Path I/O 는 병렬 스캔·Direct Path Insert 등에서 쓰인다."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 1,
  "q": "통계 정보를 바탕으로 실행계획별 예상 비용을 계산해 최저 비용 계획을 고르는 옵티마이저는?",
  "c": [
   "RBO",
   "CBO",
   "Rule 힌트",
   "Parser"
  ],
  "a": 1,
  "e": "CBO(Cost-Based Optimizer)는 통계 기반 비용으로 결정한다. RBO 는 정해진 우선순위 규칙, Parser 는 문법·의미 검사 단계다."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "RBO 우선순위에서 가장 높은(1순위) 액세스 경로는?",
  "c": [
   "Full Table Scan",
   "Index Range Scan",
   "ROWID 에 의한 단일 행 액세스",
   "Sort Merge 조인"
  ],
  "a": 2,
  "e": "RBO 1순위는 ROWID 단일 행, 최하위(15순위)는 Full Table Scan 이다."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "히스토그램이 없는 컬럼의 NDV 가 200, 테이블 총 행 수가 100,000 일 때 '컬럼 = :b' 조건의 예상 카디널리티는?",
  "c": [
   "200",
   "2,000",
   "50,000",
   "500"
  ],
  "a": 3,
  "e": "선택도 = 1 / NDV = 1/200, 카디널리티 = 100,000 × 1/200 = 500."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 1,
  "q": "같은 SQL 이 라이브러리 캐시에 없어 최적화와 로우 소스 생성을 모두 수행하는 파싱은?",
  "c": [
   "하드 파싱",
   "소프트 파싱",
   "바인드 파싱",
   "부분 파싱"
  ],
  "a": 0,
  "e": "캐시에 없으면 하드 파싱, 있으면 소프트 파싱이다. 하드 파싱은 CPU 와 래치 경합 비용이 크다."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "하드 파싱을 줄이기 위한 가장 직접적인 방법은?",
  "c": [
   "모든 SQL 에 RULE 힌트 추가",
   "리터럴 값 대신 바인드 변수 사용",
   "버퍼 캐시 크기 축소",
   "SQL 마다 다른 주석을 붙임"
  ],
  "a": 1,
  "e": "바인드 변수를 쓰면 SQL 텍스트가 같아져 실행계획을 공유한다. 주석이 다르면 오히려 다른 SQL 로 인식된다."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "실행계획을 읽는 순서로 옳은 것은?",
  "c": [
   "맨 위 줄부터 아래로",
   "맨 아래 줄부터 위로",
   "들여쓰기가 가장 깊은 것부터, 같은 깊이는 위에서 아래로",
   "Cost 가 큰 오퍼레이션부터"
  ],
  "a": 2,
  "e": "가장 안쪽(들여쓰기가 깊은) 오퍼레이션이 먼저 실행되고, 같은 레벨은 위에서 아래 순으로 실행된다."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 3,
  "q": "실행계획의 Predicate Information 에서 access 와 filter 의 차이로 옳은 것은?",
  "c": [
   "access 는 테이블 조건, filter 는 인덱스 조건이다",
   "둘 다 인덱스 스캔 범위를 줄인다",
   "filter 조건이 많을수록 스캔 범위가 줄어든다",
   "access 는 인덱스 스캔 범위를 정하는 조건, filter 는 읽은 뒤 걸러내는 조건이다"
  ],
  "a": 3,
  "e": "access 조건만 인덱스 스캔 시작·종료 지점을 결정한다. filter 조건은 이미 읽은 데이터를 걸러낼 뿐 읽는 양을 줄이지 못한다."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 3,
  "q": "SQL 공유 조건에 대한 설명으로 옳은 것은?",
  "c": [
   "대소문자·공백·주석까지 SQL 텍스트가 완전히 같아야 공유된다",
   "의미만 같으면 텍스트가 달라도 공유된다",
   "WHERE 절 상수 값만 달라도 자동으로 같은 커서를 쓴다",
   "스키마가 달라도 텍스트가 같으면 항상 공유된다"
  ],
  "a": 0,
  "e": "라이브러리 캐시는 SQL 텍스트 해시로 찾으므로 텍스트가 완전히 같아야 하고, 참조 객체(스키마)도 같아야 한다. 상수가 다르면 다른 SQL 이다(CURSOR_SHARING 설정 예외)."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 3,
  "q": "통계 정보가 실제 데이터와 크게 다를 때 가장 먼저 의심할 결과는?",
  "c": [
   "SQL 문법 오류가 발생한다",
   "카디널리티 추정 오류로 부적절한 조인 방식·순서가 선택된다",
   "하드 파싱이 사라진다",
   "모든 인덱스가 Unusable 상태가 된다"
  ],
  "a": 1,
  "e": "CBO 는 통계로 예상 건수를 계산하므로 통계가 틀리면 조인 순서·방식·액세스 경로가 잘못 선택된다. 통계 최신화가 튜닝의 출발점이다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 1,
  "q": "B*Tree 인덱스 리프 블록에 저장되는 정보는?",
  "c": [
   "테이블 전체 행 데이터",
   "실행계획",
   "인덱스 키 값과 ROWID",
   "Undo 정보"
  ],
  "a": 2,
  "e": "리프 블록에는 인덱스 키와 테이블 행 위치(ROWID)가 저장되고 양방향 연결 리스트로 이어진다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 1,
  "q": "결합 인덱스 (부서코드, 입사일) 에서 Index Range Scan 을 하려면 반드시 필요한 조건은?",
  "c": [
   "입사일에 대한 조건",
   "ORDER BY 절",
   "부서코드에 대한 함수 적용",
   "부서코드에 대한 조건"
  ],
  "a": 3,
  "e": "Range Scan 은 선두 컬럼에 가공되지 않은 조건이 있어야 한다. 선두 컬럼에 함수를 적용하면 오히려 Range Scan 이 불가능하다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "다음 중 인덱스 컬럼 가공으로 Index Range Scan 을 할 수 없는 조건은?",
  "c": [
   "WHERE TO_CHAR(주문일시, 'YYYYMMDD') = '20241001'",
   "WHERE 주문일시 >= TO_DATE('20241001', 'YYYYMMDD')",
   "WHERE 주문번호 = 1001",
   "WHERE 고객명 LIKE '김%'"
  ],
  "a": 0,
  "e": "인덱스 컬럼(주문일시)에 TO_CHAR 를 적용하면 컬럼이 가공되어 Range Scan 이 불가능하다. 상수 쪽을 변환하거나 범위 조건으로 바꿔야 한다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 3,
  "q": "고객번호 컬럼이 VARCHAR2 이고 인덱스가 있을 때 인덱스를 사용하지 못하는 조건은?",
  "c": [
   "WHERE 고객번호 = '12345'",
   "WHERE 고객번호 = 12345",
   "WHERE 고객번호 LIKE '123%'",
   "WHERE 고객번호 BETWEEN '100' AND '200'"
  ],
  "a": 1,
  "e": "Oracle 은 문자와 숫자를 비교할 때 문자를 숫자로 변환하므로 컬럼이 TO_NUMBER(고객번호) 로 가공되어 인덱스를 쓰지 못한다. 상수를 문자 '12345' 로 써야 한다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "인덱스에 필요한 컬럼이 모두 있을 때, 정렬 순서와 무관하게 인덱스 전체를 Multiblock I/O 로 읽는 스캔은?",
  "c": [
   "Index Full Scan",
   "Index Range Scan",
   "Index Fast Full Scan",
   "Index Unique Scan"
  ],
  "a": 2,
  "e": "Index Fast Full Scan 은 인덱스 세그먼트 전체를 Multiblock I/O 로 읽고 병렬도 가능하지만 결과 순서를 보장하지 않는다. Index Full Scan 은 리프를 순서대로 Single Block I/O 로 읽는다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "결합 인덱스 선두 컬럼에 조건이 없지만 선두 컬럼의 NDV 가 매우 적을 때 활용할 수 있는 스캔은?",
  "c": [
   "Index Unique Scan",
   "Index Range Scan Descending",
   "Bitmap Conversion",
   "Index Skip Scan"
  ],
  "a": 3,
  "e": "Index Skip Scan 은 선두 컬럼 값별로 후행 조건을 탐색하며 불필요한 리프를 건너뛴다. 선두 NDV 가 클수록 비효율적이다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 3,
  "q": "WHERE 지점코드 = 'A01' AND 거래일자 BETWEEN '20240101' AND '20240131' 조건에 가장 효율적인 결합 인덱스는?",
  "c": [
   "(지점코드, 거래일자)",
   "(거래일자, 지점코드)",
   "(거래일자)",
   "(지점코드)"
  ],
  "a": 0,
  "e": "'=' 조건 컬럼을 앞에, 범위 조건 컬럼을 뒤에 두면 스캔 범위가 '지점코드 A01 의 1월분' 으로 좁혀진다. 거래일자를 앞에 두면 1월 전체 지점을 스캔한 뒤 지점코드를 필터로만 쓴다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "인덱스의 클러스터링 팩터에 대한 설명으로 옳은 것은?",
  "c": [
   "값이 테이블 행 수에 가까울수록 좋다",
   "값이 테이블 블록 수에 가까울수록 인덱스 경유 테이블 액세스가 효율적이다",
   "인덱스 높이를 뜻한다",
   "NULL 값의 비율을 뜻한다"
  ],
  "a": 1,
  "e": "클러스터링 팩터는 인덱스 순서대로 읽을 때 테이블 블록을 바꾸는 횟수다. 블록 수에 가까우면 같은 블록을 연속으로 읽어 랜덤 I/O 가 적다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 3,
  "q": "인덱스를 경유해 테이블에서 전체의 40% 를 읽는 쿼리가 Full Table Scan 보다 느린 주된 이유는?",
  "c": [
   "인덱스 높이가 낮기 때문",
   "Multiblock I/O 를 사용하기 때문",
   "건마다 발생하는 Single Block 랜덤 액세스 비용",
   "통계 정보가 최신이기 때문"
  ],
  "a": 2,
  "e": "인덱스 경유 테이블 액세스는 건당 랜덤 Single Block I/O 라 많은 건수를 읽으면 Multiblock I/O 로 한꺼번에 읽는 Full Scan 보다 느려진다(인덱스 손익분기점)."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 3,
  "q": "테이블 랜덤 액세스를 줄이는 방법으로 가장 적절한 것은?",
  "c": [
   "인덱스 컬럼에 함수를 적용",
   "모든 조회에 INDEX_DESC 힌트 사용",
   "통계 수집을 중단",
   "SELECT·WHERE 에 필요한 컬럼을 인덱스에 추가해 테이블 액세스를 생략"
  ],
  "a": 3,
  "e": "필요 컬럼이 모두 인덱스에 있으면(커버링 인덱스) 테이블을 방문하지 않는다. IOT·클러스터 테이블도 같은 목적의 대안이다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "Oracle 단일 컬럼 B*Tree 인덱스에서 WHERE 컬럼 IS NULL 조건으로 인덱스를 사용하지 못하는 이유는?",
  "c": [
   "모든 키 컬럼이 NULL 인 행은 인덱스에 저장되지 않기 때문",
   "NULL 은 정렬할 수 없기 때문",
   "IS NULL 은 문법 오류이기 때문",
   "NULL 은 항상 Undo 에 저장되기 때문"
  ],
  "a": 0,
  "e": "Oracle B*Tree 는 키 컬럼이 모두 NULL 인 행을 저장하지 않는다. NOT NULL 컬럼과 결합 인덱스를 만들면 IS NULL 조건도 인덱스로 처리할 수 있다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 1,
  "q": "소량 데이터를 인덱스로 조인하며 부분범위 처리가 가능해 OLTP 에 적합한 조인 방식은?",
  "c": [
   "Hash 조인",
   "Nested Loop 조인",
   "Sort Merge 조인",
   "Cartesian 조인"
  ],
  "a": 1,
  "e": "NL 조인은 Outer 행마다 Inner 인덱스를 탐색하며 결과를 바로 반환할 수 있다. Hash·Sort Merge 는 대량 처리에 적합하다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 1,
  "q": "등치(=) 조건의 대용량 조인에 가장 적합한 조인 방식은?",
  "c": [
   "Nested Loop 조인",
   "Sort Merge 조인",
   "Hash 조인",
   "Index Skip Scan"
  ],
  "a": 2,
  "e": "Hash 조인은 작은 집합으로 해시 맵을 만들고 큰 집합을 탐색해 대량 등치 조인에 유리하다. Index Skip Scan 은 조인 방식이 아니다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "BETWEEN 같은 비등치 조건으로 대량 조인할 때 적합한 방식은?",
  "c": [
   "Hash 조인",
   "Nested Loop 조인",
   "Hash 세미 조인",
   "Sort Merge 조인"
  ],
  "a": 3,
  "e": "Hash 조인은 등치 조건만 가능하다. 대량 비등치 조인은 양쪽을 정렬해 병합하는 Sort Merge 조인이 적합하다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "NL 조인 성능에 가장 큰 영향을 주는 요소는?",
  "c": [
   "드라이빙(Outer) 테이블의 결과 건수와 Inner 조인 컬럼 인덱스",
   "Hash Area 크기",
   "Sort Area 크기",
   "병렬도(DOP)"
  ],
  "a": 0,
  "e": "NL 조인은 Outer 건수만큼 Inner 를 반복 탐색하므로 드라이빙 건수가 적고 Inner 인덱스가 효율적이어야 한다. Hash·Sort Area 는 다른 조인 방식의 요소다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "Hash 조인의 Build Input 으로 적절한 집합은?",
  "c": [
   "항상 FROM 절의 마지막 테이블",
   "조건을 적용한 뒤 크기가 작은 집합",
   "조건을 적용한 뒤 크기가 큰 집합",
   "인덱스가 있는 테이블"
  ],
  "a": 1,
  "e": "Build Input 은 해시 맵을 만들어 PGA 에 올리므로 작을수록 좋다. 큰 집합은 Probe Input 으로 읽으며 탐색한다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 3,
  "q": "다음 실행계획에서 드라이빙 테이블은?\nNESTED LOOPS\n  TABLE ACCESS BY INDEX ROWID  DEPT\n    INDEX RANGE SCAN  DEPT_LOC_IDX\n  TABLE ACCESS BY INDEX ROWID  EMP\n    INDEX RANGE SCAN  EMP_DEPT_IDX",
  "c": [
   "EMP",
   "EMP_DEPT_IDX",
   "DEPT",
   "DEPT 와 EMP 동시"
  ],
  "a": 2,
  "e": "NL 조인의 첫 번째 자식(DEPT)이 Outer, 즉 드라이빙 테이블이고 두 번째 자식(EMP)이 Inner 로 반복 탐색된다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 3,
  "q": "EXISTS 서브쿼리를 조인으로 처리하되 메인 쿼리 행을 한 번만 반환하는 조인 방식은?",
  "c": [
   "안티 조인",
   "카티션 조인",
   "아우터 조인",
   "세미 조인"
  ],
  "a": 3,
  "e": "세미 조인은 매칭되는 첫 행을 찾으면 멈추고 메인 행을 한 번만 반환한다. 안티 조인은 NOT EXISTS 처럼 매칭되지 않는 행을 반환한다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 3,
  "q": "NOT IN 서브쿼리 결과에 NULL 이 하나라도 포함되면 나타나는 현상은?",
  "c": [
   "메인 쿼리 결과가 0건이 된다",
   "NULL 행만 제외하고 정상 반환된다",
   "오류가 발생한다",
   "NOT EXISTS 와 항상 같은 결과를 낸다"
  ],
  "a": 0,
  "e": "x NOT IN (a, NULL) 은 x <> a AND x <> NULL 이 되어 UNKNOWN 이므로 결과가 공집합이다. NOT EXISTS 는 NULL 의 영향을 받지 않는다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "Hash 조인에서 Build Input 이 Hash Area 크기를 크게 넘을 때의 결과로 옳은 것은?",
  "c": [
   "자동으로 NL 조인으로 바뀐다",
   "Temp 디스크를 사용해 성능이 떨어진다",
   "조인 결과가 틀려진다",
   "Build Input 이 무시된다"
  ],
  "a": 1,
  "e": "Hash Area 를 넘으면 파티션을 Temp 에 내려 쓰는 방식으로 처리되어 디스크 I/O 가 늘어난다. 결과는 정확하다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "서브쿼리를 조인 형태로 풀어 옵티마이저가 조인 순서와 방식을 자유롭게 선택하게 하는 쿼리 변환은?",
  "c": [
   "뷰 Merging",
   "조건절 이행",
   "서브쿼리 Unnesting",
   "OR Expansion"
  ],
  "a": 2,
  "e": "Unnesting 은 중첩 서브쿼리를 조인으로 바꾼다. 뷰 Merging 은 인라인 뷰를 메인 쿼리와 합치고, 조건절 이행은 조건을 추가 도출하며, OR Expansion 은 OR 를 UNION ALL 로 분리한다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "서브쿼리를 Unnesting 하지 않고 메인 행마다 서브쿼리를 수행하면서 결과를 캐싱하는 처리 방식은?",
  "c": [
   "Hash 조인",
   "Sort Merge 조인",
   "Partition Pruning",
   "필터 오퍼레이션"
  ],
  "a": 3,
  "e": "NO_UNNEST 로 서브쿼리를 유지하면 FILTER 오퍼레이션으로 수행되며, 입력 값별 결과를 캐싱해 같은 값이 반복되면 재수행하지 않는다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "메인 쿼리의 조건을 머지되지 않는 인라인 뷰 안쪽으로 밀어 넣어 뷰의 처리 건수를 줄이는 변환은?",
  "c": [
   "조건절 Pushing",
   "서브쿼리 Unnesting",
   "OR Expansion",
   "조인 제거"
  ],
  "a": 0,
  "e": "조건절 Pushing(PUSH_PRED)은 GROUP BY 등으로 머지할 수 없는 뷰에 조건을 밀어 넣어 뷰 안에서 먼저 걸러낸다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 1,
  "q": "다음 중 정렬(소트)을 유발하지 않는 연산은?",
  "c": [
   "UNION",
   "UNION ALL",
   "DISTINCT",
   "ORDER BY"
  ],
  "a": 1,
  "e": "UNION ALL 은 두 결과를 단순히 이어 붙인다. UNION 은 중복 제거, DISTINCT 는 중복 제거, ORDER BY 는 정렬을 위해 소트(또는 해시)가 필요하다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 3,
  "q": "ORDER BY 로 인한 SORT ORDER BY 오퍼레이션을 실행계획에서 없애는 방법으로 가장 적절한 것은?",
  "c": [
   "ORDER BY 를 GROUP BY 로 변경",
   "Sort Area 를 줄임",
   "조건 컬럼과 ORDER BY 컬럼 순서에 맞춘 인덱스를 사용",
   "DISTINCT 를 추가"
  ],
  "a": 2,
  "e": "인덱스를 읽는 순서가 곧 정렬 순서가 되면 소트를 생략할 수 있고 부분범위 처리도 가능해진다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "Sort Area 가 부족해 정렬 중간 결과를 Temp 테이블스페이스에 기록하는 정렬을 무엇이라 하는가?",
  "c": [
   "메모리 소트",
   "인덱스 소트",
   "해시 소트",
   "디스크 소트"
  ],
  "a": 3,
  "e": "PGA Sort Area 안에서 끝나면 메모리 소트, 부족해 Temp 를 쓰면 디스크 소트(One-Pass·Multi-Pass)로 성능이 크게 떨어진다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 3,
  "q": "SELECT 절 스칼라 서브쿼리의 캐싱 효과가 가장 큰 경우는?",
  "c": [
   "서브쿼리에 입력되는 값의 종류가 적을 때",
   "입력 값이 모두 다를 때",
   "메인 쿼리 결과가 1건일 때",
   "서브쿼리에 인덱스가 없을 때"
  ],
  "a": 0,
  "e": "스칼라 서브쿼리는 입력 값별 결과를 캐싱하므로 같은 값이 반복될수록 재수행이 줄어든다. 입력 값이 모두 다르면 캐싱 효과가 없다."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 3,
  "q": "WHERE 조건에 OR 가 있어 각 조건별로 서로 다른 인덱스를 쓰도록 UNION ALL 형태로 분리하는 변환과 힌트는?",
  "c": [
   "뷰 Merging — NO_MERGE",
   "OR Expansion — USE_CONCAT",
   "Unnesting — UNNEST",
   "Pushing — PUSH_PRED"
  ],
  "a": 1,
  "e": "OR Expansion(USE_CONCAT)은 OR 조건을 UNION ALL 로 나눠 각 분기에서 인덱스를 사용할 수 있게 한다. NO_EXPAND 는 이를 막는다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 1,
  "q": "옵티마이저 힌트를 작성하는 위치로 옳은 것은?",
  "c": [
   "FROM 절 바로 뒤",
   "WHERE 절 마지막",
   "SELECT 키워드 바로 뒤의 /*+ */ 주석",
   "SQL 문장 끝의 세미콜론 뒤"
  ],
  "a": 2,
  "e": "힌트는 SELECT·INSERT·UPDATE·DELETE 키워드 바로 뒤에 /*+ … */ 형식으로 쓴다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "FROM EMP E 처럼 별칭을 준 테이블에 Full Scan 을 지정하는 올바른 힌트는?",
  "c": [
   "/*+ FULL(EMP) */",
   "/*+ FULL E */",
   "/* FULL(E) */",
   "/*+ FULL(E) */"
  ],
  "a": 3,
  "e": "별칭을 쓰면 힌트에도 별칭을 써야 한다. 괄호가 없거나 + 가 빠지면 힌트로 인식되지 않는다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "다음 중 조인 '순서' 를 지정하는 힌트는?",
  "c": [
   "LEADING",
   "USE_NL",
   "USE_HASH",
   "INDEX_FFS"
  ],
  "a": 0,
  "e": "LEADING(·ORDERED)은 조인 순서를, USE_NL·USE_HASH·USE_MERGE 는 조인 방식을 지정한다. INDEX_FFS 는 접근 경로 힌트다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "다음 중 힌트가 무시되는 경우가 아닌 것은?",
  "c": [
   "존재하지 않는 인덱스명을 지정한 경우",
   "힌트를 SELECT 바로 뒤에 올바른 문법으로 작성한 경우",
   "별칭이 있는데 테이블명을 쓴 경우",
   "비등치 조인에 USE_HASH 를 지정한 경우"
  ],
  "a": 1,
  "e": "문법 오류, 존재하지 않는 객체, 별칭 불일치, 실행 불가능한 지시는 오류 없이 무시된다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 3,
  "q": "부서(D) 를 먼저 읽고 사원(E) 을 NL 조인 Inner 로 처리하도록 지정하는 힌트는?",
  "c": [
   "/*+ LEADING(E) USE_NL(D) */",
   "/*+ USE_HASH(D E) */",
   "/*+ LEADING(D) USE_NL(E) */",
   "/*+ ORDERED USE_MERGE(E) */"
  ],
  "a": 2,
  "e": "LEADING(D) 로 D 를 드라이빙으로, USE_NL(E) 로 E 를 NL Inner 로 지정한다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "대량 INSERT ... SELECT 를 버퍼 캐시를 거치지 않고 HWM 위에 직접 기록하는 힌트는?",
  "c": [
   "FULL",
   "NOLOGGING",
   "CACHE",
   "APPEND"
  ],
  "a": 3,
  "e": "APPEND 는 Direct Path Insert 를 수행한다. NOLOGGING 은 힌트가 아니라 테이블 속성이며, 함께 쓰면 Redo 를 최소화할 수 있다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 3,
  "q": "인라인 뷰를 메인 쿼리와 합치지 않고 독립적으로 먼저 수행하게 하는 힌트는?",
  "c": [
   "NO_MERGE",
   "MERGE",
   "UNNEST",
   "PUSH_PRED"
  ],
  "a": 0,
  "e": "NO_MERGE 는 뷰 Merging 을 막아 뷰를 먼저 수행한다. MERGE 는 병합을 유도, UNNEST 는 서브쿼리 Unnesting, PUSH_PRED 는 조건절 Pushing 이다."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 3,
  "q": "OLTP 화면에서 처음 20건을 최대한 빨리 보여 주려는 목적에 맞는 최적화 목표 힌트는?",
  "c": [
   "ALL_ROWS",
   "FIRST_ROWS(20)",
   "RULE",
   "PARALLEL(t 20)"
  ],
  "a": 1,
  "e": "FIRST_ROWS(n)은 첫 n 건 응답 시간을 최적화해 인덱스·NL 조인을 선호한다. ALL_ROWS 는 전체 처리량 최적화, PARALLEL 은 병렬 처리다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 1,
  "q": "전체 결과를 만들지 않고 운반 단위(Array Size)만큼 먼저 결과를 보내는 처리 방식은?",
  "c": [
   "전체범위 처리",
   "병렬 처리",
   "부분범위 처리",
   "Direct Path 처리"
  ],
  "a": 2,
  "e": "부분범위 처리는 Fetch 요청 단위만큼 결과를 만들어 바로 전송하므로 첫 응답이 빠르다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "부분범위 처리가 불가능해지는 경우는?",
  "c": [
   "NL 조인을 사용할 때",
   "인덱스로 소트를 생략할 때",
   "ROWNUM 으로 Top-N 을 처리할 때",
   "ORDER BY 컬럼을 인덱스로 정렬 생략할 수 없을 때"
  ],
  "a": 3,
  "e": "정렬을 인덱스로 대체하지 못하면 모든 행을 읽고 정렬해야 첫 행을 보낼 수 있어 전체범위 처리가 된다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 3,
  "q": "급여 상위 10명을 구하는 올바른 Oracle 쿼리는?",
  "c": [
   "SELECT * FROM (SELECT * FROM EMP ORDER BY SAL DESC) WHERE ROWNUM <= 10",
   "SELECT * FROM EMP WHERE ROWNUM <= 10 ORDER BY SAL DESC",
   "SELECT * FROM EMP WHERE ROWNUM > 10 ORDER BY SAL DESC",
   "SELECT * FROM (SELECT * FROM EMP WHERE ROWNUM <= 10) ORDER BY SAL DESC"
  ],
  "a": 0,
  "e": "ROWNUM 은 ORDER BY 보다 먼저 부여되므로 정렬은 인라인 뷰 안에서 하고 ROWNUM 은 바깥에서 제한해야 한다. ROWNUM 을 정렬 전에 적용한 보기들은 임의 10건을 정렬할 뿐이고, ROWNUM > 10 은 결과가 0건이다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "WHERE ROWNUM = 2 조건의 결과로 옳은 것은?",
  "c": [
   "두 번째 행 1건",
   "0건",
   "처음 두 건",
   "오류 발생"
  ],
  "a": 1,
  "e": "첫 번째 후보 행이 ROWNUM 1 을 받아 조건(=2)에 탈락하면 다음 행도 다시 1 이 되므로 어떤 행도 2 가 되지 못한다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "Oracle 12c 이상에서 지원하는 ANSI 표준 페이징 구문은?",
  "c": [
   "LIMIT m OFFSET n",
   "TOP m",
   "OFFSET n ROWS FETCH NEXT m ROWS ONLY",
   "ROWNUM BETWEEN n AND m"
  ],
  "a": 2,
  "e": "OFFSET-FETCH 가 표준 구문이다. LIMIT 는 MySQL·PostgreSQL, TOP 은 SQL Server 구문이며 ROWNUM BETWEEN 은 1 부터가 아니면 0건이 된다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 1,
  "q": "병렬 처리에서 작업을 분배하고 결과를 취합하는 프로세스는?",
  "c": [
   "DBWR",
   "LGWR",
   "PMON",
   "QC(Query Coordinator)"
  ],
  "a": 3,
  "e": "QC 가 병렬 서버에 작업을 나눠 주고 결과를 모아 사용자에게 반환한다. DBWR·LGWR·PMON 은 백그라운드 프로세스다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 3,
  "q": "/*+ PARALLEL(t 4) */ 로 대용량 조인·정렬을 수행할 때 최대로 사용될 수 있는 병렬 서버 수는?",
  "c": [
   "8개 (Producer·Consumer 두 집합)",
   "4개",
   "2개",
   "16개"
  ],
  "a": 0,
  "e": "작업이 두 단계(예: 스캔 → 정렬)이면 Producer 와 Consumer 두 서버 집합이 동시에 일해 DOP × 2 개가 사용될 수 있다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 3,
  "q": "병렬 조인에서 한쪽 테이블이 매우 작을 때 효율적인 데이터 분배 방식은?",
  "c": [
   "Hash",
   "Broadcast",
   "Range",
   "Round-Robin"
  ],
  "a": 1,
  "e": "작은 집합을 모든 병렬 서버에 복제(Broadcast)하면 큰 집합은 재분배 없이 조인할 수 있다. 양쪽이 모두 크면 Hash 분배가 적합하다."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "병렬 처리가 적합하지 않은 작업은?",
  "c": [
   "대용량 테이블 Full Scan 집계",
   "대량 해시 조인",
   "인덱스로 고객 1명을 조회하는 OLTP 쿼리",
   "대용량 인덱스 생성"
  ],
  "a": 2,
  "e": "단건 조회는 병렬 서버 할당·조정 비용이 더 크다. 병렬은 대용량 스캔·조인·정렬·인덱스 생성에 적합하다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 1,
  "q": "Oracle 의 기본 트랜잭션 격리 수준은?",
  "c": [
   "Read Uncommitted",
   "Repeatable Read",
   "Serializable",
   "Read Committed"
  ],
  "a": 3,
  "e": "Oracle 기본은 Read Committed 이며 Undo 를 이용해 문장 수준 읽기 일관성을 보장한다. Serializable 도 설정할 수 있다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "Repeatable Read 격리 수준에서도 발생할 수 있는 이상 현상은?",
  "c": [
   "Phantom Read",
   "Dirty Read",
   "Non-Repeatable Read",
   "Lost Update 만"
  ],
  "a": 0,
  "e": "Repeatable Read 는 이미 읽은 행의 변경은 막지만 새로 삽입된 행이 다시 조회되는 Phantom Read 는 막지 못한다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "Oracle 동시성 제어에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "일반 SELECT 는 Lock 을 걸지 않는다",
   "많은 행에 Lock 이 걸리면 테이블 Lock 으로 에스컬레이션한다",
   "DML 시 행 Lock(TX)과 테이블 Lock(TM)을 획득한다",
   "읽기와 쓰기가 서로를 막지 않는다"
  ],
  "a": 1,
  "e": "Oracle 은 Lock 에스컬레이션이 없다. 조회는 Undo 기반 읽기 일관성으로 Lock 없이 수행된다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "INSERT /*+ APPEND */ ... SELECT (Direct Path Insert)의 특징으로 옳지 않은 것은?",
  "c": [
   "버퍼 캐시를 거치지 않는다",
   "HWM 위에 블록을 기록한다",
   "작업 중에도 다른 세션이 같은 테이블에 자유롭게 DML 할 수 있다",
   "NOLOGGING 테이블이면 Redo 를 최소화할 수 있다"
  ],
  "a": 2,
  "e": "Direct Path Insert 중에는 테이블에 배타 Lock 이 걸려 다른 세션의 DML 이 대기한다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "파티션 키 조건에 맞는 파티션만 읽도록 불필요한 파티션을 제외하는 기능은?",
  "c": [
   "파티션 Merging",
   "Partition Exchange",
   "Index Skip Scan",
   "파티션 Pruning"
  ],
  "a": 3,
  "e": "Pruning 은 파티션 키 조건으로 액세스 대상 파티션을 줄인다. 상수 조건은 정적, 바인드 변수·조인은 동적 Pruning 이다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 3,
  "q": "테이블 파티션과 1:1 로 파티셔닝되어 파티션 DROP·TRUNCATE 시 관리가 쉬운 인덱스는?",
  "c": [
   "Local 인덱스",
   "Global 인덱스",
   "비파티션 인덱스",
   "Bitmap Join 인덱스"
  ],
  "a": 0,
  "e": "Local 인덱스는 테이블 파티션과 같은 기준으로 나뉘어 파티션 작업이 해당 인덱스 파티션에만 영향을 준다. Global 인덱스는 파티션 작업 시 Unusable 이 될 수 있다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 3,
  "q": "대량 데이터 변경 배치의 성능을 높이는 방법으로 가장 적절하지 않은 것은?",
  "c": [
   "인덱스를 Unusable 로 만든 뒤 작업 후 재생성",
   "건마다 커밋해 Lock 을 빨리 해제",
   "Array Processing 으로 Call 횟수 감소",
   "변경 대신 CTAS 로 새 테이블을 만들어 교체"
  ],
  "a": 1,
  "e": "건마다 커밋하면 커밋마다 Redo 기록 대기(log file sync)가 발생해 크게 느려진다. 나머지는 대량 DML 튜닝 기법이다."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 1,
  "q": "정규화는 논리적 데이터 모델링 단계에서 수행한다.",
  "a": true,
  "e": "물리 단계가 아니다."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 2,
  "q": "개념적 모델링은 추상화 수준이 가장 낮고 특정 DBMS 에 종속된다.",
  "a": false,
  "e": "추상화 수준이 가장 높다. DBMS 종속은 물리적 모델링."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 2,
  "q": "외부 스키마와 개념 스키마 사이의 독립성을 물리적 독립성이라 한다.",
  "a": false,
  "e": "논리적 독립성. 물리적 독립성은 개념↔내부."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 1,
  "q": "IE 표기법은 새발(Crow's Foot) 모양으로 다수(M)를 표현한다.",
  "a": true,
  "e": "국내 최빈출 표기법."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 2,
  "q": "데이터 모델링의 유의점에는 중복, 비유연성, 비일관성이 있다.",
  "a": true,
  "e": "특징은 추상화·단순화·명확화."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 1,
  "q": "엔터티는 인스턴스가 2개 이상인 집합이어야 한다.",
  "a": true,
  "e": "인스턴스 1개는 엔터티로 보지 않는다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "파생 속성은 다른 속성에서 계산되므로 많이 둘수록 무결성 관리가 쉬워진다.",
  "a": false,
  "e": "일관성 관리 부담이 커져 최소화한다."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "행위 엔터티는 두 개 이상의 부모 엔터티로부터 발생한다.",
  "a": true,
  "e": "주문이력 등."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 1,
  "q": "M:N 관계는 연결(교차) 엔터티를 사용해 해소한다.",
  "a": true,
  "e": "1:M 관계 두 개로 분해."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "관계 선택사양(Optionality)은 관계가 1:1 인지 1:M 인지를 나타낸다.",
  "a": false,
  "e": "그것은 관계 차수. 선택사양은 필수·선택 여부."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 1,
  "q": "주식별자의 특징은 유일성, 최소성, 불변성, 존재성이다.",
  "a": true,
  "e": "대표성은 분류 기준."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 3,
  "q": "비식별 관계에서 부모의 주식별자는 자식 엔터티의 주식별자 일부가 된다.",
  "a": false,
  "e": "그것은 식별 관계. 비식별은 일반 속성."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "인조 식별자를 사용하면 중복 데이터 발생 가능성이 높아질 수 있다.",
  "a": true,
  "e": "본질 식별자에 유니크 제약을 함께 고려."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 1,
  "q": "ERD 에서 식별 관계는 실선, 비식별 관계는 점선으로 표시한다.",
  "a": true,
  "e": "IE 표기 기준."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "주식별자의 값은 업무 변화에 따라 자주 바뀌는 것이 바람직하다.",
  "a": false,
  "e": "불변성 — 바뀌지 않아야 한다."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 1,
  "q": "2NF 는 부분 함수 종속을 제거한 정규형이다.",
  "a": true,
  "e": "복합 PK 일부 종속 제거."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 3,
  "q": "3NF 를 만족하는 릴레이션은 항상 BCNF 를 만족한다.",
  "a": false,
  "e": "후보키가 아닌 결정자가 있으면 BCNF 위반."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "5NF 는 조인 종속을 제거한 정규형이다.",
  "a": true,
  "e": "4NF 는 다치 종속."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "반정규화는 조회 성능을 높이는 대신 데이터 무결성 관리 부담이 커진다.",
  "a": true,
  "e": "트레이드오프."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "수평 분할은 테이블의 컬럼을 나누어 별도 테이블로 만드는 기법이다.",
  "a": false,
  "e": "컬럼 분할은 수직 분할. 수평 분할은 행 단위."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "Plus Type 은 슈퍼타입과 서브타입을 하나의 테이블로 통합하는 방식이다.",
  "a": false,
  "e": "하나로 통합은 Single Type. Plus 는 슈퍼+서브타입 테이블."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "PK 컬럼 중 '=' 로 자주 조회되는 컬럼을 앞에 두는 것이 성능상 유리하다.",
  "a": true,
  "e": "인덱스 범위 축소."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "분산 DB 의 중복 투명성은 데이터가 여러 사이트에 복제되어 있어도 사용자가 알 필요가 없게 한다.",
  "a": true,
  "e": "복제 사실 은닉."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 1,
  "q": "트랜잭션의 지속성은 커밋된 결과가 영구적으로 반영되는 성질이다.",
  "a": true,
  "e": "Durability."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 3,
  "q": "성능 데이터 모델링에서는 정규화보다 반정규화를 먼저 수행한다.",
  "a": false,
  "e": "정규화를 먼저 정확히 수행한 뒤 반정규화를 검토한다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 1,
  "q": "TRUNCATE 는 DDL 이며 Oracle 에서 ROLLBACK 할 수 없다.",
  "a": true,
  "e": "자동 COMMIT."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 1,
  "q": "ORDER BY 절에서는 SELECT 절의 별칭을 사용할 수 있다.",
  "a": true,
  "e": "SELECT 가 ORDER BY 보다 먼저 처리된다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "Oracle 에서 DDL 을 실행하면 그 전에 수행한 DML 도 자동으로 COMMIT 된다.",
  "a": true,
  "e": "암묵적 COMMIT."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "UNIQUE 제약조건이 걸린 컬럼에는 NULL 을 입력할 수 없다.",
  "a": false,
  "e": "UNIQUE 는 NULL 허용, PK 는 불가."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "WITH ADMIN OPTION 으로 받은 시스템 권한은 원 권한을 회수하면 연쇄적으로 회수된다.",
  "a": false,
  "e": "연쇄 회수는 객체 권한의 WITH GRANT OPTION."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 1,
  "q": "1 + NULL 의 결과는 1 이다.",
  "a": false,
  "e": "NULL 이 포함된 산술 연산 결과는 NULL."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 1,
  "q": "COUNT(*) 는 NULL 이 있는 행도 센다.",
  "a": true,
  "e": "COUNT(컬럼)은 NULL 제외."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "NVL2(X, Y, Z) 는 X 가 NULL 이면 Y 를 반환한다.",
  "a": false,
  "e": "X 가 NULL 이 아니면 Y, NULL 이면 Z."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "COALESCE 는 인수 중 첫 번째로 NULL 이 아닌 값을 반환한다.",
  "a": true,
  "e": "표준 함수."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "Oracle 에서 NULL 은 ASC 정렬 시 맨 앞에 온다.",
  "a": false,
  "e": "Oracle 은 가장 큰 값으로 취급해 맨 뒤."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 1,
  "q": "WHERE 절에서는 SUM, AVG 같은 집계 함수를 사용할 수 없다.",
  "a": true,
  "e": "집계 조건은 HAVING."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "GROUP BY 를 하면 NULL 값을 가진 행은 그룹에서 제외된다.",
  "a": false,
  "e": "NULL 도 하나의 그룹이 된다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "ROLLUP(A, B) 와 ROLLUP(B, A) 의 결과는 같다.",
  "a": false,
  "e": "소계 기준이 달라진다. CUBE 는 같다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "GROUPING SETS(A, B) 결과에는 총계 행이 자동으로 포함된다.",
  "a": false,
  "e": "() 를 넣어야 총계가 나온다."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 3,
  "q": "CUBE(A, B) 는 (A,B), (A), (B), () 네 가지 그룹의 집계를 만든다.",
  "a": true,
  "e": "모든 조합."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 1,
  "q": "CROSS JOIN 의 결과 행 수는 두 테이블 행 수의 곱이다.",
  "a": true,
  "e": "카티전 곱."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "Oracle 의 (+) 기호는 모든 행이 보존되는 테이블 쪽에 붙인다.",
  "a": false,
  "e": "NULL 로 채워질(데이터가 부족한) 쪽에 붙인다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "USING 절의 공통 컬럼에는 테이블 별칭 접두사를 붙일 수 없다.",
  "a": true,
  "e": "NATURAL JOIN 도 동일."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 3,
  "q": "LEFT OUTER JOIN 에서 오른쪽 테이블 조건을 ON 절에 두든 WHERE 절에 두든 결과는 같다.",
  "a": false,
  "e": "WHERE 에 두면 NULL 행이 걸러져 INNER 처럼 된다."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "Oracle 의 (+) 문법으로는 FULL OUTER JOIN 을 직접 표현할 수 없다.",
  "a": true,
  "e": "양쪽 (+) 불가."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "NOT IN 서브쿼리 결과에 NULL 이 포함되면 메인 쿼리 결과는 0건이 된다.",
  "a": true,
  "e": "NOT EXISTS 로 대체."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "> ANY (서브쿼리) 는 서브쿼리 결과의 최댓값보다 크다는 뜻이다.",
  "a": false,
  "e": "최솟값보다 크면 참."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 1,
  "q": "FROM 절에 쓰는 서브쿼리를 인라인 뷰라고 한다.",
  "a": true,
  "e": "테이블처럼 사용."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "집합 연산자를 쓸 때 ORDER BY 는 마지막 SELECT 뒤에 한 번만 쓸 수 있다.",
  "a": true,
  "e": "전체 결과에 적용."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "UNION 은 결과의 중복 행을 제거한다.",
  "a": true,
  "e": "UNION ALL 은 유지."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 1,
  "q": "ROW_NUMBER 는 동점이어도 서로 다른 순번을 부여한다.",
  "a": true,
  "e": "1·2·3·4."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "DENSE_RANK 는 동점 다음 순위를 건너뛴다.",
  "a": false,
  "e": "건너뛰는 것은 RANK."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "윈도우 함수에서 ORDER BY 만 지정하면 기본 프레임은 처음부터 현재 행까지이다.",
  "a": true,
  "e": "RANGE UNBOUNDED PRECEDING AND CURRENT ROW."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "LAG 함수는 범위를 벗어난 행에 대해 기본값을 지정하지 않으면 NULL 을 반환한다.",
  "a": true,
  "e": "세 번째 인수로 기본값 지정."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 3,
  "q": "ROWS 프레임은 값이 같은 행을 하나의 범위로 묶어 함께 집계한다.",
  "a": false,
  "e": "그것은 RANGE. ROWS 는 물리적 행 단위."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "CONNECT BY PRIOR MGR = EMPNO 는 자식에서 부모 방향으로 전개한다.",
  "a": true,
  "e": "역방향."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "계층형 쿼리에서 루트 노드의 LEVEL 값은 0 이다.",
  "a": false,
  "e": "루트는 1."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "WHERE ROWNUM > 1 조건은 결과가 없다.",
  "a": true,
  "e": "ROWNUM 은 1부터 순서대로 부여."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "UNPIVOT 은 기본적으로 NULL 값을 결과에서 제외한다.",
  "a": true,
  "e": "EXCLUDE NULLS 가 기본."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 3,
  "q": "REGEXP_SUBSTR('ABC123DEF456', '[0-9]+') 의 결과는 '123456' 이다.",
  "a": false,
  "e": "첫 번째 일치만 반환 — '123'."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 1,
  "q": "DB 버퍼 캐시는 SGA 에 속하며 모든 서버 프로세스가 공유한다.",
  "a": true,
  "e": "PGA 는 프로세스 전용."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "커밋하면 변경된 데이터 블록이 DBWR 에 의해 즉시 디스크에 기록된다.",
  "a": false,
  "e": "즉시 기록되는 것은 LGWR 의 Redo — Log Force at Commit."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "Full Table Scan 은 Multiblock I/O 로 읽는다.",
  "a": true,
  "e": "db file scattered read."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "버퍼 캐시 히트율이 높으면 SQL 의 논리적 I/O 도 적다.",
  "a": false,
  "e": "같은 블록을 반복 읽어도 히트율은 높다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 3,
  "q": "Undo 는 읽기 일관성을 위한 CR 블록 생성에 사용된다.",
  "a": true,
  "e": "Oracle 다중 버전 읽기 일관성의 기반."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 1,
  "q": "CBO 는 통계 정보를 바탕으로 실행계획의 비용을 추정한다.",
  "a": true,
  "e": "통계가 부정확하면 계획도 부정확."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "히스토그램이 없을 때 '=' 조건의 선택도는 1/NDV 로 추정한다.",
  "a": true,
  "e": "균등 분포 가정."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "실행계획은 맨 위 줄의 오퍼레이션부터 실행된다.",
  "a": false,
  "e": "들여쓰기가 가장 깊은 것부터."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "리터럴 값만 다른 SQL 은 자동으로 같은 실행계획을 공유한다.",
  "a": false,
  "e": "텍스트가 달라 하드 파싱 — 바인드 변수 필요(CURSOR_SHARING 예외)."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 3,
  "q": "Predicate Information 의 filter 조건은 인덱스 스캔 범위를 줄인다.",
  "a": false,
  "e": "스캔 범위를 정하는 것은 access 조건."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 1,
  "q": "결합 인덱스의 선두 컬럼에 조건이 없으면 Index Range Scan 을 할 수 없다.",
  "a": true,
  "e": "Skip Scan·Full Scan 대안."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "Index Fast Full Scan 은 인덱스 키 순서대로 결과를 반환한다.",
  "a": false,
  "e": "Multiblock I/O — 순서 미보장."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 3,
  "q": "숫자형 컬럼에 WHERE 사번 = '100' 처럼 문자 상수를 비교하면 인덱스를 사용할 수 없다.",
  "a": false,
  "e": "상수가 숫자로 변환되어 인덱스 사용 가능."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "클러스터링 팩터가 좋을수록 인덱스를 경유한 테이블 액세스 효율이 높다.",
  "a": true,
  "e": "같은 블록을 연속 액세스."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "WHERE 이름 LIKE '%수' 조건은 이름 인덱스로 Range Scan 할 수 있다.",
  "a": false,
  "e": "앞쪽 와일드카드는 시작점을 정할 수 없다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 1,
  "q": "Hash 조인은 등치(=) 조인 조건에서만 사용할 수 있다.",
  "a": true,
  "e": "비등치는 NL·Sort Merge."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "NL 조인은 Inner 테이블 조인 컬럼에 인덱스가 없어도 효율적이다.",
  "a": false,
  "e": "Outer 건마다 Inner 풀 스캔."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "Hash 조인에서는 작은 집합을 Build Input 으로 사용하는 것이 유리하다.",
  "a": true,
  "e": "해시 맵을 PGA 에 올리므로."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "Sort Merge 조인은 조인 컬럼에 인덱스가 반드시 있어야 한다.",
  "a": false,
  "e": "양쪽을 정렬하므로 인덱스 불필요."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 3,
  "q": "NOT EXISTS 와 NOT IN 은 서브쿼리에 NULL 이 있어도 항상 같은 결과를 낸다.",
  "a": false,
  "e": "NOT IN 은 NULL 이 있으면 공집합."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 1,
  "q": "UNION ALL 은 중복 제거를 위한 정렬을 수행하지 않는다.",
  "a": true,
  "e": "UNION 과의 차이."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "서브쿼리 Unnesting 은 서브쿼리를 조인 형태로 변환한다.",
  "a": true,
  "e": "UNNEST / NO_UNNEST."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "GROUP BY 가 있는 인라인 뷰는 항상 메인 쿼리와 단순 Merging 된다.",
  "a": false,
  "e": "GROUP BY·ROWNUM·집합 연산이 있으면 단순 머지 불가."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 3,
  "q": "조건·ORDER BY 컬럼 순서에 맞는 인덱스를 사용하면 SORT ORDER BY 를 생략할 수 있다.",
  "a": true,
  "e": "부분범위 처리도 가능."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 3,
  "q": "스칼라 서브쿼리 캐싱은 입력 값의 종류가 많을수록 효과가 크다.",
  "a": false,
  "e": "값 종류가 적고 반복될수록 효과."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 1,
  "q": "힌트 문법이 틀리면 SQL 실행이 오류로 중단된다.",
  "a": false,
  "e": "오류 없이 무시."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "테이블에 별칭을 지정했다면 힌트에도 별칭을 써야 한다.",
  "a": true,
  "e": "테이블명을 쓰면 무시."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "LEADING 힌트는 조인 방식(NL·Hash)을 지정한다.",
  "a": false,
  "e": "조인 순서를 지정 — 방식은 USE_NL 등."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "FIRST_ROWS(n) 힌트는 처음 n 건의 응답 시간을 최적화한다.",
  "a": true,
  "e": "OLTP 화면 페이징."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 3,
  "q": "비등치 조인 조건에 USE_HASH 힌트를 주면 옵티마이저가 Hash 조인을 강제로 수행한다.",
  "a": false,
  "e": "실행 불가능한 힌트는 무시."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 1,
  "q": "ROWNUM 은 ORDER BY 로 정렬된 이후에 부여된다.",
  "a": false,
  "e": "WHERE 통과 시점에 부여 — 정렬은 인라인 뷰 안에서."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "WHERE ROWNUM > 1 조건은 결과를 반환하지 않는다.",
  "a": true,
  "e": "첫 행이 1 을 받지 못해 0건."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "OFFSET-FETCH 는 ANSI 표준 페이징 구문이다.",
  "a": true,
  "e": "Oracle 12c 이상."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "병렬 처리는 인덱스를 이용한 단건 OLTP 조회에 적합하다.",
  "a": false,
  "e": "대용량 스캔·조인·정렬에 적합."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 3,
  "q": "병렬 조인에서 한쪽 집합이 작으면 Broadcast 분배 방식이 효율적이다.",
  "a": true,
  "e": "작은 집합을 모든 서버에 복제."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 1,
  "q": "Oracle 의 기본 격리 수준은 Read Committed 이다.",
  "a": true,
  "e": "Serializable 도 설정 가능."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "Oracle 에서 일반 SELECT 문은 조회하는 행에 Lock 을 건다.",
  "a": false,
  "e": "Lock 없이 Undo 로 읽기 일관성."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "Direct Path Insert 는 버퍼 캐시를 거치지 않고 HWM 위에 기록한다.",
  "a": true,
  "e": "APPEND 힌트."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "Local 인덱스는 테이블 파티션과 1:1 로 대응한다.",
  "a": true,
  "e": "파티션 관리 용이."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 3,
  "q": "파티션 키 컬럼에 함수를 적용해도 파티션 Pruning 은 정상적으로 동작한다.",
  "a": false,
  "e": "파티션 키 가공 시 Pruning 불가."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 1,
  "q": "데이터 모델링 3단계를 순서대로 쓰시오.",
  "a": "개념, 논리, 물리",
  "k": [
   "개념",
   "논리",
   "물리"
  ],
  "e": "개념적 → 논리적 → 물리적 모델링."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 2,
  "q": "데이터 모델링의 3가지 특징을 쓰시오.",
  "a": "추상화, 단순화, 명확화",
  "k": [
   "추상화",
   "단순화",
   "명확화"
  ],
  "e": "유의점은 중복·비유연성·비일관성."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 2,
  "q": "개념 스키마와 내부 스키마 사이의 데이터 독립성은?",
  "a": "물리적 독립성",
  "k": [
   "물리적 독립성"
  ],
  "e": "외부↔개념은 논리적 독립성."
 },
 {
  "s": "s1",
  "t": "모델링 개념",
  "d": 1,
  "q": "새발(Crow's Foot)로 다수를 표현하는 ERD 표기법의 약어는?",
  "a": "IE",
  "k": [
   "ie"
  ],
  "e": "Information Engineering."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "엔터티를 유무형에 따라 분류한 3가지를 쓰시오.",
  "a": "유형, 개념, 사건",
  "k": [
   "유형",
   "개념",
   "사건"
  ],
  "e": "발생 시점 분류는 기본·중심·행위."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "엔터티를 발생 시점에 따라 분류할 때 둘 이상의 부모에서 발생하는 엔터티는?",
  "a": "행위 엔터티",
  "k": [
   "행위"
  ],
  "e": "기본(키)·중심(메인)·행위."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 1,
  "q": "성별 = {M, F} 처럼 속성에 허용되는 값의 집합·타입·제약을 정의한 것은?",
  "a": "도메인",
  "k": [
   "도메인"
  ],
  "e": "타입·크기·제약조건."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 2,
  "q": "다른 속성의 값으로부터 계산되어 만들어지는 속성은?",
  "a": "파생 속성",
  "k": [
   "파생"
  ],
  "e": "최소화 대상."
 },
 {
  "s": "s1",
  "t": "엔터티·속성·관계",
  "d": 3,
  "q": "관계 표기의 3요소를 쓰시오.",
  "a": "관계명, 관계 차수, 관계 선택사양",
  "k": [
   "관계명",
   "차수",
   "선택사양"
  ],
  "e": "Cardinality · Optionality."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "주식별자의 4가지 특징을 쓰시오.",
  "a": "유일성, 최소성, 불변성, 존재성",
  "k": [
   "유일성",
   "최소성",
   "불변성",
   "존재성"
  ],
  "e": "대표성은 분류 기준."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 2,
  "q": "업무와 무관하게 인위적으로 만든 일련번호 형태의 식별자는?",
  "a": "인조 식별자",
  "k": [
   "인조"
  ],
  "e": "반대는 본질 식별자."
 },
 {
  "s": "s1",
  "t": "식별자",
  "d": 3,
  "q": "부모 주식별자가 자식의 일반 속성으로 상속되어 점선으로 표시되는 관계는?",
  "a": "비식별 관계",
  "k": [
   "비식별"
  ],
  "e": "식별 관계는 실선."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 1,
  "q": "정규화가 제거하려는 이상 현상 3가지를 쓰시오.",
  "a": "삽입 이상, 갱신 이상, 삭제 이상",
  "k": [
   "삽입",
   "갱신",
   "삭제"
  ],
  "e": "두음: 삽·갱·삭."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "이행 함수 종속을 제거한 정규형은?",
  "a": "3NF",
  "k": [
   "3nf"
  ],
  "e": "제3정규형."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 3,
  "q": "모든 결정자가 후보키인 정규형의 약어는?",
  "a": "BCNF",
  "k": [
   "bcnf"
  ],
  "e": "Boyce-Codd Normal Form."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "다치 종속을 제거한 정규형은?",
  "a": "4NF",
  "k": [
   "4nf"
  ],
  "e": "5NF 는 조인 종속."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "테이블의 컬럼 일부를 별도 테이블로 분리하는 반정규화 기법은?",
  "a": "수직 분할",
  "k": [
   "수직"
  ],
  "e": "행 단위는 수평 분할."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 2,
  "q": "슈퍼/서브타입 변환 중 All in One Type 이라고도 부르는 방식은?",
  "a": "Single Type",
  "k": [
   "single"
  ],
  "e": "All in One Type."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 3,
  "q": "분산 DB 투명성 6가지를 쓰시오.",
  "a": "분할, 위치, 지역사상, 중복, 장애, 병행",
  "k": [
   "분할",
   "위치",
   "지역사상",
   "중복",
   "장애",
   "병행"
  ],
  "e": "두음: 분·위·지·중·장·병."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 1,
  "q": "트랜잭션 4대 특성의 영문 약어는?",
  "a": "ACID",
  "k": [
   "acid"
  ],
  "e": "원자성·일관성·고립성·지속성."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 1,
  "q": "SQL 의 4가지 분류를 약어로 모두 쓰시오.",
  "a": "DDL, DML, DCL, TCL",
  "k": [
   "ddl",
   "dml",
   "dcl",
   "tcl"
  ],
  "e": "정의 · 조작 · 제어 · 트랜잭션 제어."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 1,
  "q": "SELECT 문의 논리적 실행 순서에서 GROUP BY 다음에 처리되는 절은?",
  "a": "HAVING",
  "k": [
   "having"
  ],
  "e": "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "트랜잭션의 4가지 특성(ACID)을 영문으로 모두 쓰시오.",
  "a": "Atomicity, Consistency, Isolation, Durability",
  "k": [
   "atomicity",
   "consistency",
   "isolation",
   "durability"
  ],
  "e": "원자성 · 일관성 · 고립성 · 지속성."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "트랜잭션 중간에 저장점을 만들어 부분 ROLLBACK 할 수 있게 하는 명령은?",
  "a": "SAVEPOINT",
  "k": [
   "savepoint"
  ],
  "e": "ROLLBACK TO 저장점."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "권한을 받은 사용자가 다른 사용자에게 객체 권한을 다시 부여할 수 있게 하는 GRANT 옵션은?",
  "a": "WITH GRANT OPTION",
  "k": [
   "with grant option"
  ],
  "e": "회수 시 연쇄 회수."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 3,
  "q": "권한들을 묶어 한 번에 부여·회수할 수 있게 하는 데이터베이스 객체는?",
  "a": "ROLE",
  "k": [
   "role"
  ],
  "e": "CREATE ROLE → GRANT 권한 TO 롤 → GRANT 롤 TO 사용자."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 1,
  "q": "NULL 여부를 비교할 때 사용하는 연산자는? (NULL 인 경우)",
  "a": "IS NULL",
  "k": [
   "is null"
  ],
  "e": "= NULL 은 항상 UNKNOWN."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "인수 중 첫 번째로 NULL 이 아닌 값을 반환하는 표준 함수는?",
  "a": "COALESCE",
  "k": [
   "coalesce"
  ],
  "e": "NVL 은 Oracle 2인수 함수."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "두 값이 같으면 NULL, 다르면 첫 번째 값을 반환하는 함수는?",
  "a": "NULLIF",
  "k": [
   "nullif"
  ],
  "e": "NULLIF(SAL, 400)."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 2,
  "q": "SELECT AVG(COMM) FROM EMP 의 결과는? (COMM: NULL, 50, NULL, 100, 0, NULL)",
  "a": "50",
  "k": [
   "50"
  ],
  "e": "NULL 제외 3행 평균 — sqlite 확인."
 },
 {
  "s": "s2",
  "t": "NULL·함수",
  "d": 3,
  "q": "LPAD('7', 3, '0') 의 결과는?",
  "a": "007",
  "k": [
   "007"
  ],
  "e": "왼쪽을 지정 문자로 채워 길이 3."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 1,
  "q": "그룹화된 결과에 조건을 거는 절은?",
  "a": "HAVING",
  "k": [
   "having"
  ],
  "e": "WHERE 는 그룹 전."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "계층적 소계와 총계를 만드는 GROUP BY 확장 함수는?",
  "a": "ROLLUP",
  "k": [
   "rollup"
  ],
  "e": "CUBE 는 모든 조합."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 3,
  "q": "예제 EMP 에서 GROUP BY CUBE(DEPTNO, JOB) 결과 행 수는?",
  "a": "12",
  "k": [
   "12"
  ],
  "e": "5 + 3 + 3 + 1."
 },
 {
  "s": "s2",
  "t": "그룹·집계",
  "d": 2,
  "q": "ROLLUP·CUBE 결과에서 소계로 생긴 NULL 이면 1 을 반환하는 함수는?",
  "a": "GROUPING",
  "k": [
   "grouping"
  ],
  "e": "원래 NULL 과 구분."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 1,
  "q": "두 테이블 행의 모든 조합을 만드는 조인은?",
  "a": "CROSS JOIN",
  "k": [
   "cross join"
  ],
  "e": "카티전 곱."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "EMP(6행) 와 DEPT(4행) 의 CROSS JOIN 결과 행 수는?",
  "a": "24",
  "k": [
   "24"
  ],
  "e": "6 × 4."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 2,
  "q": "같은 이름의 모든 컬럼으로 자동 등가 조인하는 조인은?",
  "a": "NATURAL JOIN",
  "k": [
   "natural join"
  ],
  "e": "공통 컬럼 접두사 금지."
 },
 {
  "s": "s2",
  "t": "조인",
  "d": 3,
  "q": "예제에서 EMP FULL OUTER JOIN DEPT 의 결과 행 수는?",
  "a": "8",
  "k": [
   "8"
  ],
  "e": "5 + KANG + 부서 30·40."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "FROM 절에 사용해 테이블처럼 쓰는 서브쿼리를 무엇이라 하는가?",
  "a": "인라인 뷰",
  "k": [
   "인라인 뷰"
  ],
  "e": "Inline View."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "메인 쿼리의 컬럼을 참조해 행마다 실행되는 서브쿼리는?",
  "a": "상관 서브쿼리",
  "k": [
   "상관 서브쿼리"
  ],
  "e": "Correlated Subquery."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 3,
  "q": "NOT IN 서브쿼리의 NULL 문제를 피하기 위해 대신 쓰는 연산자는?",
  "a": "NOT EXISTS",
  "k": [
   "not exists"
  ],
  "e": "행 존재 여부만 판단."
 },
 {
  "s": "s2",
  "t": "서브쿼리·집합",
  "d": 2,
  "q": "중복을 유지하고 정렬도 하지 않는 집합 연산자는?",
  "a": "UNION ALL",
  "k": [
   "union all"
  ],
  "e": "가장 빠름."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 1,
  "q": "점수 90, 90, 85, 80 에 RANK() 를 적용한 순위를 차례대로 쓰시오.",
  "a": "1, 1, 3, 4",
  "k": [
   "1134"
  ],
  "e": "DENSE_RANK 는 1, 1, 2, 3."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "점수 90, 90, 85, 80 에 DENSE_RANK() 를 적용한 순위를 차례대로 쓰시오.",
  "a": "1, 1, 2, 3",
  "k": [
   "1123"
  ],
  "e": "동점 후 연속 순위."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 2,
  "q": "이전 행의 값을 가져오는 윈도우 함수는?",
  "a": "LAG",
  "k": [
   "lag"
  ],
  "e": "LEAD 는 다음 행."
 },
 {
  "s": "s2",
  "t": "윈도우 함수",
  "d": 3,
  "q": "SALES(100, 150, 120, 200) 에서 ORDER BY MON 누적 합의 마지막 값은?",
  "a": "570",
  "k": [
   "570"
  ],
  "e": "전체 합 — sqlite 확인."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "계층형 쿼리에서 루트 노드를 지정하는 절은?",
  "a": "START WITH",
  "k": [
   "start with"
  ],
  "e": "CONNECT BY PRIOR 로 전개."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "계층형 쿼리에서 형제 노드끼리만 정렬하는 구문은?",
  "a": "ORDER SIBLINGS BY",
  "k": [
   "order siblings by"
  ],
  "e": "계층 구조 유지."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 3,
  "q": "Oracle 12c 이상에서 상위 N 행만 가져오는 표준 구문의 키워드를 순서대로 쓰시오 (FETCH ___ N ROWS ONLY).",
  "a": "FETCH FIRST N ROWS ONLY",
  "k": [
   "fetch",
   "first",
   "rows only"
  ],
  "e": "WITH TIES 로 동점 포함."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 1,
  "q": "SQL 과 실행계획을 캐싱해 재사용하는 Shared Pool 내 영역은?",
  "a": "라이브러리 캐시",
  "k": [
   "라이브러리 캐시"
  ],
  "e": "Library Cache."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "커밋 시 Redo 를 먼저 디스크에 기록하는 원칙을 무엇이라 하는가?",
  "a": "Log Force at Commit",
  "k": [
   "log force at commit"
  ],
  "e": "Write Ahead Logging 과 함께 복구의 기반."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "인덱스·ROWID 액세스에서 발생하는 Single Block I/O 의 대기 이벤트는?",
  "a": "db file sequential read",
  "k": [
   "db file sequential read"
  ],
  "e": "Multiblock 은 db file scattered read."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 3,
  "q": "Undo 의 세 가지 용도를 쓰시오.",
  "a": "트랜잭션 롤백, 읽기 일관성, 트랜잭션 복구",
  "k": [
   "롤백",
   "읽기 일관성",
   "복구"
  ],
  "e": "장애 후 미커밋 트랜잭션 롤백 = 트랜잭션 복구."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 1,
  "q": "통계 기반으로 비용을 계산해 실행계획을 고르는 옵티마이저의 약어는?",
  "a": "CBO",
  "k": [
   "cbo"
  ],
  "e": "Cost-Based Optimizer."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "히스토그램이 없을 때 '=' 조건 선택도를 구하는 식은?",
  "a": "1/NDV",
  "k": [
   "1",
   "ndv"
  ],
  "e": "카디널리티 = 총 행 수 × 선택도."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "총 50,000 건, NDV 100 인 컬럼의 '=' 조건 예상 카디널리티는?",
  "a": "500",
  "k": [
   "500"
  ],
  "e": "50,000 × 1/100."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 2,
  "q": "라이브러리 캐시에 SQL 이 없어 최적화부터 수행하는 파싱은?",
  "a": "하드 파싱",
  "k": [
   "하드 파싱"
  ],
  "e": "있으면 소프트 파싱."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 3,
  "q": "SQL 처리 과정의 세 단계를 순서대로 쓰시오.",
  "a": "파싱, 최적화, 로우 소스 생성",
  "k": [
   "파싱",
   "최적화",
   "로우 소스 생성"
  ],
  "e": "Parser → Optimizer → Row-Source Generator 후 실행."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 1,
  "q": "B*Tree 인덱스 리프 블록에 키와 함께 저장되는 행 주소는?",
  "a": "ROWID",
  "k": [
   "rowid"
  ],
  "e": "테이블 랜덤 액세스에 사용."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "결합 인덱스 선두 컬럼 조건이 없을 때 선두 값별로 건너뛰며 탐색하는 스캔은?",
  "a": "Index Skip Scan",
  "k": [
   "skip scan"
  ],
  "e": "INDEX_SS 힌트."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "인덱스를 Multiblock I/O 로 읽어 순서를 보장하지 않는 스캔은?",
  "a": "Index Fast Full Scan",
  "k": [
   "fast full scan"
  ],
  "e": "INDEX_FFS 힌트."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 3,
  "q": "인덱스 순서와 테이블 데이터 저장 순서의 일치도를 나타내는 지표는?",
  "a": "클러스터링 팩터",
  "k": [
   "클러스터링 팩터"
  ],
  "e": "Clustering Factor — 블록 수에 가까울수록 좋음."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 3,
  "q": "인덱스를 못 타는 대표 조건 세 가지를 쓰시오(컬럼에 대한 처리 관점).",
  "a": "컬럼 가공, 묵시적 형변환, 앞 와일드카드 LIKE",
  "k": [
   "가공",
   "형변환",
   "like"
  ],
  "e": "부정형·IS NULL 도 해당."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 1,
  "q": "Outer 행마다 Inner 를 인덱스로 탐색하는 조인 방식은?",
  "a": "Nested Loop 조인",
  "k": [
   "nested loop"
  ],
  "e": "NL 조인 — USE_NL."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "Hash 조인에서 해시 맵을 만드는 쪽 입력의 명칭은?",
  "a": "Build Input",
  "k": [
   "build"
  ],
  "e": "탐색하는 쪽은 Probe Input."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "NL 조인에서 먼저 읽혀 반복 탐색을 이끄는 테이블을 무엇이라 하는가?",
  "a": "드라이빙 테이블",
  "k": [
   "드라이빙"
  ],
  "e": "Outer 테이블."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 3,
  "q": "EXISTS 를 조인으로 처리해 메인 행을 한 번만 반환하는 조인은?",
  "a": "세미 조인",
  "k": [
   "세미 조인"
  ],
  "e": "NOT EXISTS 는 안티 조인."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "서브쿼리를 조인 형태로 풀어내는 쿼리 변환은?",
  "a": "서브쿼리 Unnesting",
  "k": [
   "unnesting"
  ],
  "e": "UNNEST 힌트."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 2,
  "q": "중복 제거 정렬 없이 두 결과를 합치는 집합 연산자는?",
  "a": "UNION ALL",
  "k": [
   "union all"
  ],
  "e": "UNION 은 중복 제거 소트."
 },
 {
  "s": "s3",
  "t": "쿼리 변환·소트",
  "d": 3,
  "q": "OR 조건을 UNION ALL 로 분리하는 쿼리 변환을 유도하는 힌트는?",
  "a": "USE_CONCAT",
  "k": [
   "use_concat"
  ],
  "e": "막는 힌트는 NO_EXPAND."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 1,
  "q": "테이블 풀 스캔을 지정하는 힌트는?",
  "a": "FULL",
  "k": [
   "full"
  ],
  "e": "/*+ FULL(별칭) */."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "조인 순서를 괄호 안 순서대로 지정하는 힌트는?",
  "a": "LEADING",
  "k": [
   "leading"
  ],
  "e": "ORDERED 는 FROM 절 순서."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 2,
  "q": "인라인 뷰가 메인 쿼리와 병합되지 않도록 하는 힌트는?",
  "a": "NO_MERGE",
  "k": [
   "no_merge"
  ],
  "e": "MERGE 는 병합 유도."
 },
 {
  "s": "s3",
  "t": "힌트",
  "d": 3,
  "q": "조인 방식을 지정하는 힌트 세 가지를 쓰시오.",
  "a": "USE_NL, USE_HASH, USE_MERGE",
  "k": [
   "use_nl",
   "use_hash",
   "use_merge"
  ],
  "e": "순서는 LEADING·ORDERED."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 1,
  "q": "병렬 처리에서 작업을 분배·취합하는 프로세스의 약어는?",
  "a": "QC",
  "k": [
   "qc"
  ],
  "e": "Query Coordinator."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 2,
  "q": "ROWNUM 으로 상위 N 건만 읽고 멈추는 실행계획 오퍼레이션 이름은?",
  "a": "COUNT STOPKEY",
  "k": [
   "count stopkey"
  ],
  "e": "Top-N 쿼리의 핵심."
 },
 {
  "s": "s3",
  "t": "부분범위·병렬",
  "d": 3,
  "q": "병렬 조인에서 작은 집합을 모든 병렬 서버에 복제하는 분배 방식은?",
  "a": "Broadcast",
  "k": [
   "broadcast"
  ],
  "e": "양쪽 대용량이면 Hash 분배."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "Repeatable Read 격리 수준에서도 발생하는 이상 현상은?",
  "a": "Phantom Read",
  "k": [
   "phantom"
  ],
  "e": "Serializable 에서 방지."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 2,
  "q": "INSERT ... SELECT 를 Direct Path 로 수행하게 하는 힌트는?",
  "a": "APPEND",
  "k": [
   "append"
  ],
  "e": "버퍼 캐시 우회 · HWM 위 기록."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 1,
  "q": "정규화 단계를 낮은 단계부터 순서대로 나열하시오.",
  "steps": [
   "1NF",
   "2NF",
   "3NF",
   "BCNF",
   "4NF",
   "5NF"
  ],
  "e": "원자값 → 부분 종속 → 이행 종속 → 결정자 → 다치 종속 → 조인 종속."
 },
 {
  "s": "s1",
  "t": "정규화·반정규화",
  "d": 2,
  "q": "반정규화 절차를 순서대로 나열하시오.",
  "steps": [
   "반정규화 대상 조사(범위 처리 빈도·대량 범위·통계·조인 수)",
   "다른 방법 유도 검토(뷰·클러스터링·인덱스·응용)",
   "반정규화 적용"
  ],
  "e": "다른 방법을 먼저 검토한 뒤 마지막 수단으로 적용."
 },
 {
  "s": "s1",
  "t": "성능·분산 모델링",
  "d": 3,
  "q": "성능 데이터 모델링 수행 순서를 나열하시오.",
  "steps": [
   "정규화를 정확히 수행",
   "데이터베이스 용량 산정",
   "트랜잭션 유형 파악",
   "용량과 트랜잭션 유형에 따라 반정규화",
   "이력 모델·PK/FK·슈퍼/서브타입 조정",
   "성능 관점에서 데이터 모델 검증"
  ],
  "e": "정규화가 먼저, 검증이 마지막."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 1,
  "q": "SELECT 문의 논리적 처리 순서를 나열하시오.",
  "steps": [
   "FROM",
   "WHERE",
   "GROUP BY",
   "HAVING",
   "SELECT",
   "ORDER BY"
  ],
  "e": "WHERE 에서 SELECT 별칭을 못 쓰는 이유."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "격리 수준을 낮은 단계부터 높은 단계로 나열하시오.",
  "steps": [
   "Read Uncommitted",
   "Read Committed",
   "Repeatable Read",
   "Serializable"
  ],
  "e": "높을수록 이상 현상이 줄고 동시성이 낮아진다."
 },
 {
  "s": "s2",
  "t": "SQL 기본·트랜잭션",
  "d": 2,
  "q": "역할(ROLE)을 이용해 권한을 부여하는 절차를 나열하시오.",
  "steps": [
   "CREATE ROLE 로 롤 생성",
   "GRANT 권한 TO 롤 로 권한 담기",
   "GRANT 롤 TO 사용자 로 부여",
   "필요 시 REVOKE 롤 FROM 사용자"
  ],
  "e": "권한 관리를 롤 단위로 단순화."
 },
 {
  "s": "s2",
  "t": "계층·PIVOT·Top-N",
  "d": 2,
  "q": "예제 EMP 에서 CONNECT BY PRIOR MGR = EMPNO START WITH EMPNO = 4 로 전개될 때 나오는 사원 번호를 순서대로 나열하시오.",
  "steps": [
   "4",
   "3",
   "1"
  ],
  "e": "CHOI(4) → 관리자 PARK(3) → 관리자 KIM(1), 역방향 전개 — 재귀 CTE 로 확인."
 },
 {
  "s": "s3",
  "t": "옵티마이저·실행계획",
  "d": 1,
  "q": "Oracle 에서 SQL 이 처리되는 과정을 순서대로 나열하시오.",
  "steps": [
   "SQL 파싱 — 문법·의미 검사",
   "라이브러리 캐시 탐색(하드·소프트 파싱 판단)",
   "최적화 — 실행계획 선택",
   "로우 소스 생성",
   "실행 및 결과 인출(Fetch)"
  ],
  "e": "캐시에 있으면(소프트 파싱) 최적화·로우 소스 생성을 건너뛴다."
 },
 {
  "s": "s3",
  "t": "인덱스 튜닝",
  "d": 2,
  "q": "Index Range Scan 후 테이블을 액세스하는 과정을 순서대로 나열하시오.",
  "steps": [
   "루트 블록에서 시작",
   "브랜치 블록을 거쳐 수직적 탐색",
   "시작 리프 블록 도달",
   "리프 블록 수평적 탐색으로 조건 범위 스캔",
   "ROWID 로 테이블 블록 랜덤 액세스"
  ],
  "e": "수직적 탐색으로 시작점을 찾고 수평적 탐색으로 범위를 읽는다."
 },
 {
  "s": "s3",
  "t": "조인 튜닝",
  "d": 2,
  "q": "Hash 조인의 수행 과정을 순서대로 나열하시오.",
  "steps": [
   "Build Input(작은 집합) 읽기",
   "조인 키에 해시 함수를 적용해 PGA 에 해시 맵 생성",
   "Probe Input(큰 집합) 읽기",
   "Probe 행의 조인 키로 해시 버킷 탐색",
   "매칭 행을 결과로 반환"
  ],
  "e": "Build 가 Hash Area 에 들어가면 가장 빠르다."
 },
 {
  "s": "s3",
  "t": "아키텍처·I/O",
  "d": 2,
  "q": "커밋 처리 과정을 순서대로 나열하시오.",
  "steps": [
   "DML 로 버퍼 캐시의 블록 변경, Redo·Undo 생성",
   "Redo Log Buffer 에 변경 이력 기록",
   "COMMIT 요청",
   "LGWR 가 Redo 를 로그 파일에 기록",
   "커밋 완료 응답 — 데이터 블록은 이후 DBWR 가 기록"
  ],
  "e": "Log Force at Commit — 데이터 블록 기록은 커밋과 독립적이다."
 },
 {
  "s": "s3",
  "t": "DML·파티션·동시성",
  "d": 1,
  "q": "트랜잭션 격리 수준을 낮은 것부터 높은 순서로 나열하시오.",
  "steps": [
   "Read Uncommitted",
   "Read Committed",
   "Repeatable Read",
   "Serializable"
  ],
  "e": "높을수록 일관성 ↑ · 동시성 ↓."
 }
];

CPPG.selfcheck = [
 {
  "g": "Ⅰ 모델링",
  "t": "엔터티·속성·관계·식별자의 종류와 표기를 구분한다"
 },
 {
  "g": "Ⅰ 모델링",
  "t": "1NF~BCNF 위반 사례를 보고 정규화 단계를 판단한다"
 },
 {
  "g": "Ⅰ 모델링",
  "t": "반정규화 기법(테이블·컬럼·관계)과 적용 판단 기준을 말한다"
 },
 {
  "g": "Ⅰ 모델링",
  "t": "식별 관계와 비식별 관계의 차이와 선택 기준을 설명한다"
 },
 {
  "g": "Ⅱ SQL 기본",
  "t": "NULL 이 포함된 집계·비교·함수 결과를 정확히 계산한다"
 },
 {
  "g": "Ⅱ SQL 기본",
  "t": "INNER·OUTER·CROSS·NATURAL JOIN 결과 행 수를 계산한다"
 },
 {
  "g": "Ⅱ SQL 기본",
  "t": "서브쿼리 유형(단일행·다중행·상관·인라인 뷰·스칼라)을 구분한다"
 },
 {
  "g": "Ⅱ SQL 기본",
  "t": "RANK·DENSE_RANK·ROW_NUMBER 결과를 동점 포함해 계산한다"
 },
 {
  "g": "Ⅱ SQL 기본",
  "t": "ROLLUP·CUBE·GROUPING SETS 결과 행을 나열한다"
 },
 {
  "g": "Ⅱ SQL 기본",
  "t": "CONNECT BY 계층 쿼리의 전개 순서와 LEVEL 을 계산한다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "실행계획 읽는 순서와 주요 오퍼레이션을 설명한다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "인덱스를 사용하지 못하는 조건(가공·형변환·부정·NULL)을 찾는다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "결합 인덱스 컬럼 순서를 조건절에 맞게 설계한다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "NL·Hash·Sort Merge 조인의 특징과 적합 상황을 고른다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "주요 힌트(LEADING·USE_NL·USE_HASH·INDEX·FULL·PARALLEL)를 쓴다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "바인드 변수·하드 파싱·라이브러리 캐시 관계를 설명한다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "부분범위 처리와 Top-N 페이징 쿼리를 작성한다"
 },
 {
  "g": "Ⅲ 튜닝",
  "t": "Lock·트랜잭션 격리수준과 이상 현상을 짝짓는다"
 }
];

CPPG.roadmap = {
 "10주 표준": [
  "Week 1 — Ⅰ 모델링(엔터티·속성·관계·식별자·정규화)",
  "Week 2 — Ⅱ SQL 기본(DDL·DML·NULL·함수·그룹)",
  "Week 3 — Ⅱ JOIN·서브쿼리·집합 연산",
  "Week 4 — Ⅱ 윈도우 함수·계층 쿼리·PIVOT·Top-N",
  "Week 5 — Ⅲ 아키텍처·I/O·Lock·트랜잭션",
  "Week 6 — Ⅲ 옵티마이저·실행계획·SQL 파싱",
  "Week 7 — Ⅲ 인덱스 튜닝",
  "Week 8 — Ⅲ 조인 튜닝·쿼리 변환·힌트",
  "Week 9 — Ⅲ 소트·DML·파티션·병렬·부분범위",
  "Week 10 — 모의고사 + 예시문제(튜닝 서술) 반복"
 ],
 "시험 3일 전": [
  "D-3 — 윈도우 함수·계층 쿼리 결과 계산",
  "D-2 — 인덱스·조인 튜닝 시트·힌트",
  "D-1 — 모의고사 + 함정노트"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "정규화",
  "식별·비식별 관계",
  "NULL 연산",
  "JOIN 결과",
  "서브쿼리 유형",
  "윈도우 함수 순위",
  "ROLLUP·CUBE",
  "계층 쿼리",
  "실행계획 읽기",
  "인덱스 미사용 조건",
  "결합 인덱스 순서",
  "NL·Hash·Sort Merge",
  "주요 힌트"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "반정규화",
  "슈퍼·서브타입 변환",
  "집합 연산",
  "PIVOT",
  "Top-N·페이징",
  "바인드 변수·파싱",
  "클러스터링 팩터",
  "인덱스 스캔 방식",
  "쿼리 변환(Unnesting·View Merging)",
  "Lock·격리수준",
  "소트 튜닝"
 ],
 "Tier 3 ★ (변별)": [
  "분산 DB 투명성",
  "Direct Path Insert",
  "파티션 Pruning",
  "병렬 분배 방식",
  "Redo·Undo",
  "Skip Scan"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "정규화 단계 판정 — 부분 종속",
  "problem": "주문상세(주문번호, 상품코드, 수량, 상품명, 단가) 테이블의 PK 는 (주문번호, 상품코드)이다. 상품명과 단가는 상품코드만으로 결정된다. 이 테이블이 위반하는 정규형과 해결 방법으로 옳은 것은?\n① 1NF 위반 — 상품명을 원자값으로 분해\n② 2NF 위반 — 상품(상품코드, 상품명, 단가) 테이블로 분리\n③ 3NF 위반 — 수량을 별도 테이블로 분리\n④ BCNF 위반 — 주문번호를 PK 에서 제거",
  "steps": [
   "PK 가 복합키(주문번호, 상품코드)인지 확인",
   "상품명·단가가 PK 일부(상품코드)에만 종속 → 부분 함수 종속",
   "부분 종속 제거 = 2NF → 상품코드를 PK 로 하는 상품 테이블로 분리"
  ],
  "answer": "② — 부분 함수 종속이므로 2NF 위반. 상품 테이블로 분리한다.",
  "traps": [
   "이행 종속(3NF)과 부분 종속(2NF) 혼동",
   "모든 값이 원자값이므로 1NF 는 이미 만족"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "식별·비식별 관계 선택",
  "problem": "고객–주문–주문상세–배송 순으로 모두 식별 관계를 적용했더니 배송 테이블의 PK 가 (고객번호, 주문번호, 상품코드, 배송순번)으로 길어졌고, 고객 없이 생성되는 비회원 주문도 생겨야 한다. 가장 적절한 조치는?\n① 모든 관계를 식별 관계로 유지한다\n② 고객–주문 관계를 비식별 관계로 바꾸고 주문은 주문번호를 독립 PK 로 갖는다\n③ 배송 테이블을 삭제한다\n④ 고객 테이블에 주문 컬럼을 모두 넣는다",
  "steps": [
   "식별 관계가 이어지면 자식 PK 속성이 누적된다",
   "비회원 주문 = 부모(고객) 없는 자식 → 비식별 관계 필요",
   "주문에 독립 PK(주문번호)를 두면 이후 자식들의 PK 도 짧아진다"
  ],
  "answer": "② — 비식별 관계로 끊어 주문을 독립 식별하고, 고객번호는 NULL 허용 일반 속성(FK)으로 둔다.",
  "traps": [
   "식별 관계가 항상 무결성에 유리하다고 보고 ① 선택",
   "반정규화(④)로 해결하려는 오답"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "슈퍼/서브타입 변환 방식 선택",
  "problem": "고객(슈퍼타입) 아래 개인고객·법인고객(서브타입)이 있다. 대부분의 업무가 '전체 고객 목록 조회·일괄 처리'이고, 서브타입별 속성은 몇 개뿐이다. 가장 적합한 변환 방식은?\n① One To One Type\n② Plus Type\n③ Single Type(All in One)\n④ 서브타입마다 별도 DB 구성",
  "steps": [
   "트랜잭션 유형 확인 — 전체 일괄 처리 위주",
   "서브타입 고유 속성이 적어 NULL 낭비가 크지 않음",
   "하나의 테이블로 통합하면 조인 없이 처리"
  ],
  "answer": "③ — 전체 일괄 처리가 많고 서브타입 속성이 적으면 Single Type(All in One)이 적합하다.",
  "traps": [
   "서브타입이 있으면 무조건 개별 테이블(①)로 만든다는 오해",
   "Plus Type 과 Single Type 정의 혼동"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "[결과 계산] NULL 과 집계 함수",
  "problem": "EMP\nEMPNO ENAME JOB   DEPTNO SAL COMM MGR\n1     KIM   MGR   10     300 NULL NULL\n2     LEE   CLERK 10     200 50   1\n3     PARK  MGR   20     400 NULL 1\n4     CHOI  DEV   20     400 100  3\n5     JUNG  DEV   20     250 0    3\n6     KANG  CLERK NULL   150 NULL 1\n\nSELECT COUNT(*), COUNT(COMM), SUM(COMM), AVG(COMM), AVG(NVL(COMM,0)) FROM EMP;\n결과로 옳은 것은?\n① 6, 3, 150, 50, 25\n② 6, 6, 150, 25, 25\n③ 6, 3, 150, 25, 50\n④ 3, 3, 150, 50, 50",
  "steps": [
   "COUNT(*) 는 NULL 포함 6",
   "COUNT(COMM) 은 NULL 제외 3 (0 은 포함)",
   "SUM 150 ÷ 3 = 50",
   "NVL 후 150 ÷ 6 = 25"
  ],
  "answer": "① 6, 3, 150, 50, 25 (sqlite 실행 확인)",
  "traps": [
   "COMM 0 을 NULL 로 착각",
   "AVG 분모를 전체 행 수로 계산"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "[결과 계산] 아우터 조인의 필터 위치",
  "problem": "EMP\nEMPNO ENAME JOB   DEPTNO SAL COMM MGR\n1     KIM   MGR   10     300 NULL NULL\n2     LEE   CLERK 10     200 50   1\n3     PARK  MGR   20     400 NULL 1\n4     CHOI  DEV   20     400 100  3\n5     JUNG  DEV   20     250 0    3\n6     KANG  CLERK NULL   150 NULL 1\n\nDEPT\nDEPTNO DNAME\n10 영업 / 20 개발 / 30 인사 / 40 총무\n\n(가) SELECT COUNT(*) FROM DEPT D LEFT JOIN EMP E ON D.DEPTNO = E.DEPTNO AND E.SAL >= 300;\n(나) SELECT COUNT(*) FROM DEPT D LEFT JOIN EMP E ON D.DEPTNO = E.DEPTNO WHERE E.SAL >= 300;\n(가)·(나) 결과는?\n① 5, 3\n② 3, 3\n③ 7, 3\n④ 5, 5",
  "steps": [
   "(가) 부서 4개는 모두 보존 — 10: KIM 1행, 20: PARK·CHOI 2행, 30·40: NULL 1행씩",
   "(가) = 1 + 2 + 1 + 1 = 5",
   "(나) 조인 후 E.SAL >= 300 필터 → NULL 행 제거",
   "(나) = KIM · PARK · CHOI 3행"
  ],
  "answer": "① 5, 3 (sqlite 실행 확인)",
  "traps": [
   "ON 조건 불만족 시 부서 행까지 사라진다고 착각",
   "WHERE 필터 후에도 NULL 행이 남는다고 착각"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "[결과 계산] NOT IN 과 NOT EXISTS",
  "problem": "EMP\nEMPNO ENAME JOB   DEPTNO SAL COMM MGR\n1     KIM   MGR   10     300 NULL NULL\n2     LEE   CLERK 10     200 50   1\n3     PARK  MGR   20     400 NULL 1\n4     CHOI  DEV   20     400 100  3\n5     JUNG  DEV   20     250 0    3\n6     KANG  CLERK NULL   150 NULL 1\n\nDEPT\nDEPTNO DNAME\n10 영업 / 20 개발 / 30 인사 / 40 총무\n\n(가) SELECT DEPTNO FROM DEPT WHERE DEPTNO NOT IN (SELECT DEPTNO FROM EMP);\n(나) SELECT DEPTNO FROM DEPT D WHERE NOT EXISTS (SELECT 1 FROM EMP E WHERE E.DEPTNO = D.DEPTNO);\n(가)·(나) 결과 행 수는?\n① 0, 2\n② 2, 2\n③ 2, 0\n④ 0, 0",
  "steps": [
   "EMP.DEPTNO 목록 = 10, 10, 20, 20, 20, NULL",
   "(가) DEPTNO <> NULL 이 UNKNOWN → 어떤 부서도 참이 아님 → 0건",
   "(나) 행 존재 여부만 판단 → 사원이 없는 30, 40 → 2건"
  ],
  "answer": "① 0, 2 (sqlite 실행 확인)",
  "traps": [
   "NOT IN 이 NULL 을 무시한다고 착각",
   "대책 — NOT EXISTS 또는 서브쿼리에 IS NOT NULL"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "[결과 계산] ROLLUP · CUBE · GROUPING SETS 행 수",
  "problem": "EMP\nEMPNO ENAME JOB   DEPTNO SAL COMM MGR\n1     KIM   MGR   10     300 NULL NULL\n2     LEE   CLERK 10     200 50   1\n3     PARK  MGR   20     400 NULL 1\n4     CHOI  DEV   20     400 100  3\n5     JUNG  DEV   20     250 0    3\n6     KANG  CLERK NULL   150 NULL 1\n\nGROUP BY 절만 바꿔 실행할 때 결과 행 수를 차례대로 고르시오.\n(가) ROLLUP(DEPTNO, JOB)  (나) CUBE(DEPTNO, JOB)  (다) GROUPING SETS(DEPTNO, JOB)\n① 9, 12, 6\n② 9, 9, 6\n③ 12, 9, 6\n④ 9, 12, 7",
  "steps": [
   "(DEPTNO, JOB) 조합: (10,MGR)(10,CLERK)(20,MGR)(20,DEV)(NULL,CLERK) = 5",
   "DEPTNO 값: 10, 20, NULL = 3 / JOB 값: MGR, CLERK, DEV = 3",
   "ROLLUP = 5 + 3 + 1 = 9",
   "CUBE = 5 + 3 + 3 + 1 = 12",
   "GROUPING SETS = 3 + 3 = 6 (총계 없음)"
  ],
  "answer": "① 9, 12, 6 (UNION ALL 동등 쿼리로 sqlite 확인)",
  "traps": [
   "DEPTNO 의 NULL 그룹을 빠뜨림",
   "GROUPING SETS 에 총계를 더함"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "[결과 계산] 윈도우 함수 RANGE vs ROWS",
  "problem": "EMP\nEMPNO ENAME JOB   DEPTNO SAL COMM MGR\n1     KIM   MGR   10     300 NULL NULL\n2     LEE   CLERK 10     200 50   1\n3     PARK  MGR   20     400 NULL 1\n4     CHOI  DEV   20     400 100  3\n5     JUNG  DEV   20     250 0    3\n6     KANG  CLERK NULL   150 NULL 1\n\nSELECT ENAME, SUM(SAL) OVER (ORDER BY SAL) A, SUM(SAL) OVER (ORDER BY SAL ROWS UNBOUNDED PRECEDING) B FROM EMP;\nSAL 이 400 인 PARK·CHOI 행의 A, B 값으로 옳은 것은? (같은 SAL 은 EMPNO 순으로 처리)\n① PARK(A 1700, B 1300) · CHOI(A 1700, B 1700)\n② PARK(A 1300, B 1300) · CHOI(A 1700, B 1700)\n③ PARK(A 1700, B 1700) · CHOI(A 1700, B 1700)\n④ PARK(A 1300, B 1700) · CHOI(A 1700, B 1300)",
  "steps": [
   "SAL 오름차순: 150, 200, 250, 300, 400, 400",
   "A 는 기본 프레임 RANGE — 같은 SAL 400 두 행이 함께 포함 → 둘 다 1700",
   "B 는 ROWS — PARK 까지 1300, CHOI 까지 1700"
  ],
  "answer": "① A 1700·1700 / B 1300·1700 (sqlite 실행 확인)",
  "traps": [
   "기본 프레임을 ROWS 로 착각",
   "동점 행의 처리 순서를 무시"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[튜닝] 인덱스 컬럼 가공 — 월별 주문 조회",
  "problem": "주문 테이블(1,000만 건)에 주문일자(VARCHAR2(8), 'YYYYMMDD') 단일 인덱스가 있다. 다음 SQL 이 Full Table Scan 으로 수행된다.\n\nSELECT 주문번호, 고객번호, 주문금액\n  FROM 주문\n WHERE SUBSTR(주문일자, 1, 6) = '202410';\n\n① 원인 ② 개선 SQL ③ 기대 효과를 서술하시오.",
  "steps": [
   "인덱스 선두 컬럼 주문일자에 SUBSTR 을 적용 → 컬럼 가공으로 Range Scan 불가",
   "조건을 컬럼이 아닌 상수 쪽으로 표현 — LIKE '202410%' 또는 BETWEEN",
   "1개월분만 Index Range Scan 후 테이블 액세스"
  ],
  "answer": "① 인덱스 컬럼 가공으로 인덱스 사용 불가 → Full Scan\n② WHERE 주문일자 LIKE '202410%'  (또는 WHERE 주문일자 BETWEEN '20241001' AND '20241031')\n③ 1개월 범위만 Index Range Scan — 전체 스캔 대비 읽는 블록 대폭 감소. 조회 컬럼이 적으면 (주문일자, 고객번호, 주문금액) 결합 인덱스로 테이블 액세스까지 생략 가능",
  "traps": [
   "함수 기반 인덱스부터 만드는 것 — 조건 재작성으로 해결되면 인덱스 추가는 불필요",
   "LIKE '%202410%' 처럼 앞에 % 를 붙이는 실수"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[튜닝] 묵시적 형변환 — 문자형 고객번호",
  "problem": "고객 테이블의 고객번호는 VARCHAR2(10) 이고 PK 인덱스가 있다. 다음 SQL 의 실행계획이 TABLE ACCESS FULL 이다.\n\nSELECT * FROM 고객 WHERE 고객번호 = 1004;\n\n원인과 개선 방법을 쓰시오.",
  "steps": [
   "문자형 컬럼과 숫자 상수 비교 → Oracle 은 문자를 숫자로 변환",
   "컬럼이 TO_NUMBER(고객번호) 로 가공되어 PK 인덱스 사용 불가",
   "상수를 컬럼 타입(문자)에 맞춤"
  ],
  "answer": "원인: 묵시적 형변환으로 컬럼이 TO_NUMBER(고객번호) = 1004 로 처리되어 인덱스 컬럼이 가공됨\n개선: WHERE 고객번호 = '1004' — 바인드 변수도 문자형으로 바인딩\n효과: PK Index Unique Scan 으로 1건 액세스",
  "traps": [
   "숫자형 컬럼에 문자 상수를 비교하는 경우와 혼동 — 그때는 상수가 변환되어 인덱스 사용 가능",
   "TO_CHAR(1004) 처럼 상수 변환도 가능하지만 리터럴 자체를 맞추는 것이 기본"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[튜닝] 결합 인덱스 컬럼 순서",
  "problem": "거래 테이블(5,000만 건, 지점 200개)에 인덱스 거래_IDX(거래일자, 지점코드) 가 있다.\n\nSELECT 거래번호, 거래금액\n  FROM 거래\n WHERE 지점코드 = :brch\n   AND 거래일자 BETWEEN :d1 AND :d2;   -- 보통 1개월\n\n실행계획은 INDEX RANGE SCAN 이지만 Buffers 가 매우 크다. 원인과 인덱스 개선안을 쓰시오.",
  "steps": [
   "선두 컬럼 거래일자가 범위 조건 → 1개월 전체 지점의 리프를 모두 스캔",
   "지점코드는 access 가 아닌 filter 로만 작동(범위 조건 뒤 컬럼)",
   "'=' 조건 컬럼을 선두로 재구성"
  ],
  "answer": "원인: 범위 조건 컬럼(거래일자)이 선두라 1개월치 200개 지점 데이터를 모두 스캔한 뒤 지점코드로 걸러냄 → 스캔량 약 200배\n개선: 인덱스를 (지점코드, 거래일자) 로 재구성 — 스캔 범위가 '해당 지점의 1개월분' 으로 축소\n추가: 거래번호·거래금액까지 인덱스에 포함하면 테이블 랜덤 액세스 제거(커버링)",
  "traps": [
   "실행계획에 INDEX RANGE SCAN 이 보이면 효율적이라고 단정하는 실수 — Predicate 의 access/filter 를 확인",
   "기존 인덱스를 쓰는 다른 SQL 영향 검토 없이 삭제"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[튜닝] 대량 NL 조인을 Hash 조인으로",
  "problem": "월말 배치에서 다음 SQL 이 2시간 걸린다. 주문 1,000만 건 중 조건 결과 500만 건, 고객 100만 건.\n\nSELECT /*+ LEADING(o) USE_NL(c) */ c.고객등급, SUM(o.주문금액)\n  FROM 주문 o, 고객 c\n WHERE o.고객번호 = c.고객번호\n   AND o.주문일자 BETWEEN '20240101' AND '20241231'\n GROUP BY c.고객등급;\n\n문제점과 개선안(힌트 포함)을 쓰시오.",
  "steps": [
   "Outer 500만 건 × Inner 인덱스 랜덤 액세스 = 수백만 번 Single Block I/O",
   "대량 등치 조인 → Hash 조인이 적합",
   "작은 집합(고객)을 Build Input 으로, 필요하면 병렬"
  ],
  "answer": "문제점: 대량 집합을 NL 조인으로 처리해 Inner(고객) 랜덤 액세스가 500만 번 발생\n개선: SELECT /*+ LEADING(c) USE_HASH(o) FULL(c) FULL(o) */ …\n  — 고객(작은 집합)을 Build Input 으로 해시 맵 생성, 주문을 Multiblock Full Scan 으로 Probe\n추가: 배치라면 /*+ PARALLEL(o 4) PARALLEL(c 4) */ · 주문일자 파티션이면 Pruning 활용",
  "traps": [
   "NL 조인의 Inner 인덱스를 추가하는 것만으로 해결하려는 시도 — 건수 자체가 문제",
   "큰 주문 테이블을 Build Input 으로 지정하는 실수"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[튜닝] ROWNUM 페이징 오류",
  "problem": "게시판 최신 글 10건을 보여 주려는 SQL 이 엉뚱한 글을 보여 준다(게시판 인덱스: 게시판ID + 등록일시).\n\nSELECT ROWNUM, 글번호, 제목, 등록일시\n  FROM 게시글\n WHERE 게시판ID = :bid\n   AND ROWNUM <= 10\n ORDER BY 등록일시 DESC;\n\n원인과 개선 SQL 을 쓰고, 부분범위 처리가 되는 조건을 설명하시오.",
  "steps": [
   "ROWNUM 은 ORDER BY 이전, WHERE 통과 시점에 부여",
   "임의의 10건을 뽑은 뒤 정렬하는 쿼리가 됨",
   "정렬은 인라인 뷰 안에서, ROWNUM 은 바깥에서 — 인덱스로 소트 생략 시 COUNT STOPKEY"
  ],
  "answer": "원인: ROWNUM <= 10 이 정렬 전에 적용되어 임의 10건을 정렬\n개선:\nSELECT * FROM (\n  SELECT 글번호, 제목, 등록일시 FROM 게시글\n   WHERE 게시판ID = :bid ORDER BY 등록일시 DESC)\n WHERE ROWNUM <= 10;\n부분범위: (게시판ID, 등록일시) 인덱스를 역순으로 읽어 SORT ORDER BY 가 생략되면 10건만 읽고 COUNT STOPKEY 로 멈춤",
  "traps": [
   "바깥 쿼리에 ORDER BY 를 다시 쓰는 것으로 해결했다고 착각",
   "ROWNUM > 10 으로 다음 페이지를 구하는 실수(0건)"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[튜닝] 리터럴 SQL 과 하드 파싱",
  "problem": "온라인 시스템의 CPU 사용률이 높고 라이브러리 캐시 래치 경합이 관찰된다. 상위 SQL 목록에 다음과 같은 문장이 수만 개 있다.\n\nSELECT 이름, 등급 FROM 회원 WHERE 회원번호 = 100231;\nSELECT 이름, 등급 FROM 회원 WHERE 회원번호 = 100232;\n…\n\n원인과 개선 방안을 쓰시오.",
  "steps": [
   "회원번호 값마다 SQL 텍스트가 달라 공유 불가",
   "실행마다 하드 파싱 → CPU·라이브러리 캐시 래치 경합",
   "바인드 변수로 SQL 공유"
  ],
  "answer": "원인: 리터럴 SQL 로 값마다 새로운 SQL 이 되어 매번 하드 파싱 → 최적화·로우 소스 생성 반복으로 CPU 와 래치 경합 증가, Shared Pool 낭비\n개선: WHERE 회원번호 = :mbr_no 바인드 변수 사용(애플리케이션 PreparedStatement 등) → 1개 커서 공유, 소프트 파싱\n보완: 애플리케이션 수정이 어려우면 CURSOR_SHARING=FORCE 를 임시 대안으로 검토",
  "traps": [
   "Shared Pool 을 늘리는 것만으로 해결하려는 시도 — 근본 원인은 SQL 공유 실패",
   "회원번호처럼 값 분포가 고른 PK 조건은 바인드 변수의 단점(Peeking)이 거의 없다"
  ]
 }
];
