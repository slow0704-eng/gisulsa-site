/* ============================================================
   자바 백엔드 개발자 이직 면접 — 학습·퀴즈 데이터
   소스: 03_이직면접/자바백엔드/*.txt (00 개요 + 1~8 분야 + 9 도메인지식 + 부록)
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

/* ── 0. 메타 ────────────────────────────────────────────── */
CPPG.meta = {
  name: '자바 백엔드 면접',
  brand: 'Java BE', tag: '자바 백엔드 이직 면접', storeKey: 'javabe',
  title: '자바 백엔드 이직 면접 — 암기·퀴즈 학습',
  h1: '자바 백엔드 개발자 이직 면접',
  unit: '분야',
  labelStyle: 'named',                   // 자격증이 아니라 면접 — "1영역·2영역"이 아니라 ★분야 이름★으로 표기

  outUnit: '%',                          // subjects[].out 은 면접 출제 비중(추정)
  passRule: { pct: 70, per: 0 },         // 합격 기준이 아니라 자체 학습 목표
  footer: [
    '국내 자바·스프링 백엔드 경력 이직 면접 대비 / 기술 면접 + 인성·경험 면접',
    '데이터 소스: <code>03_이직면접/자바백엔드/*.txt</code> → <code>학습사이트/data.js</code> · 진도·오답노트는 브라우저(localStorage)에만 저장됩니다.',
    '⚠ 이것은 <b>자격증이 아니라 면접 준비</b>입니다. 퀴즈의 70%는 합격선이 아니라 <b>자체 학습 목표</b>이고, 분야별 비중은 채용 공고·면접 후기에서 관찰되는 <b>일반적 경향의 추정치</b>입니다. 실제 질문은 <b>지원 회사의 기술 스택과 직급</b>에 따라 크게 달라지니 공고를 먼저 역산하세요.',
    'ℹ 면접의 승부처는 정의 암기가 아니라 <b>"내 경험으로 설명할 수 있는가"</b>입니다. 카드의 답을 외우는 데서 멈추지 말고 각 항목을 자기 프로젝트와 연결해 소리 내어 말해 보세요.'
  ],
  full: 'Java Backend Engineer — Interview Prep',
  host: '기술 면접 + 컬처핏 면접',
  type: '코딩 테스트 · 1차 기술 면접 · 2차 설계 면접 · 임원 면접',
  time: '기술 면접 회당 40~90분',
  pass: '자체 목표 70% 이상 (합격 기준 아님)',
  book: '지원 회사 채용 공고 + 기술 블로그 + 내 경력기술서',
  slogan: '면접 통과 = 컬렉션·GC + DI·트랜잭션 + 영속성 컨텍스트·N+1 + 세션/JWT + 트레이드오프 + 내 경험 수치'
};

/* ── 1. 학습 분야 ───────────────────────────────────────────
   name  = 화면에 그대로 나가는 정식 명칭
   short = 칩·배지처럼 좁은 자리에서 쓰는 짧은 명칭(번호가 아니라 이름을 줄인 것)
   no    는 정렬·순서용으로만 남긴다(라벨에 쓰지 않는다). */
CPPG.subjects = [
  { id:'s1', no:1, name:'Java · JVM',              short:'Java·JVM',    out:20, color:'#f59e0b', desc:'컬렉션·동시성·GC·메모리 구조 ★1차 면접 필수★' },
  { id:'s2', no:2, name:'Spring · Spring Boot',    short:'Spring',      out:20, color:'#22c55e', desc:'DI·AOP 프록시·트랜잭션 전파·MVC·자동 설정 ★최빈출★' },
  { id:'s3', no:3, name:'JPA · 데이터베이스',       short:'JPA·DB',      out:18, color:'#3b82f6', desc:'영속성 컨텍스트·N+1·인덱스·격리 수준·락' },
  { id:'s4', no:4, name:'웹 · 네트워크 · 보안',     short:'웹·보안',      out:12, color:'#06b6d4', desc:'HTTP·REST·CORS·세션/JWT·Spring Security' },
  { id:'s5', no:5, name:'아키텍처 · 설계',          short:'아키텍처',     out:12, color:'#8b5cf6', desc:'SOLID·패턴·MSA·Saga·캐시·시스템 설계' },
  { id:'s6', no:6, name:'인프라 · 데브옵스',        short:'인프라',       out:8,  color:'#ec4899', desc:'Docker·배포 전략·Redis·Kafka·모니터링·장애 대응' },
  { id:'s7', no:7, name:'자료구조 · 알고리즘 · CS', short:'CS·알고리즘',  out:5,  color:'#a855f7', desc:'복잡도·자료구조 선택·DFS/BFS·OS 기초' },
  { id:'s8', no:8, name:'인성 · 경험 면접',         short:'인성·경험',    out:5,  color:'#ef4444', desc:'STAR·이직 사유·역질문·처우 협의 ★탈락 사유 1순위★' }
];

/* ── 2. 암기카드 ────────────────────────────────────────── */
CPPG.cards = [
  // ───── 1. Java · JVM ─────
  { s:'s1', g:'컬렉션', front:'HashMap 내부 동작', key:'', back:'① hashCode → 버킷 인덱스 ② 충돌 시 ★연결 리스트★ ③ 한 버킷 노드가 임계치(8) 이상 + 테이블 충분히 크면 ★레드-블랙 트리★(최악 O(n)→O(log n)) ④ 로드 팩터 0.75 초과 시 ★리사이즈 + 재해시★', tip:'"O(1)이다"에서 멈추지 말고 충돌·트리화·리사이즈 비용까지 말할 것' },
  { s:'s1', g:'컬렉션', front:'equals·hashCode 규약', key:'', back:'equals()가 true면 hashCode()도 ★반드시 같아야★ 한다 / equals만 재정의하면 해시 기반 컬렉션(HashMap·HashSet)에서 다른 버킷을 찾아 ★조회 실패★', tip:'"put 한 객체를 get 으로 못 찾는다"가 실제 증상' },
  { s:'s1', g:'컬렉션', front:'ArrayList vs LinkedList 실무 선택', key:'', back:'ArrayList=배열 기반·조회 O(1)·중간 삽입 O(n) / LinkedList=삽입·삭제 O(1)(노드를 아는 경우)·조회 O(n) / ★실무는 대부분 ArrayList★ — 캐시 지역성 때문에 LinkedList가 실제로는 더 느린 경우가 많다', tip:'"LinkedList가 삽입에 항상 빠르다"는 전형적 오답' },
  { s:'s1', g:'컬렉션', front:'동시성 컬렉션 선택', key:'', back:'ConcurrentHashMap=버킷 단위 락으로 Hashtable보다 빠름 / CopyOnWriteArrayList=읽기 압도적으로 많을 때 / BlockingQueue=생산자-소비자 / ★Hashtable·Vector는 레거시★', tip:'Collections.synchronizedMap 은 전체 락이라 경합이 크다' },
  { s:'s1', g:'JVM 메모리', front:'런타임 데이터 영역', key:'', back:'★스레드 공유★: Heap(객체·GC 대상), Method Area(클래스 메타·상수 풀·static → Java 8+ ★Metaspace★, 네이티브 메모리) / ★스레드별★: JVM Stack(스택 프레임), PC Register, Native Method Stack', tip:'Java 8에서 PermGen 제거 → Metaspace 이동이 단골 질문' },
  { s:'s1', g:'GC', front:'힙 구조와 GC 종류', key:'', back:'Young(Eden + Survivor 0/1) + Old / ★약한 세대 가설★: 대부분 객체는 금방 죽는다 / Minor GC=Young·짧고 잦음, Major·Full GC=Old 포함·★Stop-The-World★ 영향 큼 / 수집기: Serial·Parallel·G1(9+ 기본)·ZGC(저지연)', tip:'GC 대상은 "GC 루트에서 도달 불가능한 객체"' },
  { s:'s1', g:'GC', front:'OutOfMemoryError 원인 구분과 분석', key:'', back:'Java heap space=객체 누수·과도한 캐시 / Metaspace=클래스 과다 로딩 / GC overhead limit=GC만 돌고 진전 없음 / ★분석★: GC 로그·jstat로 추세 → ★힙 덤프★ → MAT로 지배 트리 분석', tip:'"추측 전에 측정" — 면접에서 절차를 말하면 신뢰를 얻는다' },
  { s:'s1', g:'동시성', front:'volatile vs synchronized vs Atomic', key:'', back:'volatile=★가시성만★(원자성 X) / synchronized=가시성+원자성(상호배제) / Atomic=CAS 기반 원자 연산 / ★i++ 는 읽기-수정-쓰기 3단계라 volatile로 안전하지 않다★', tip:'"volatile로 카운터를 안전하게 증가시킬 수 있나요?" → 불가' },
  { s:'s1', g:'동시성', front:'스레드 풀 설계', key:'', back:'CPU 바운드=코어 수 근처 / I/O 바운드=대기 비율만큼 크게 / ★Executors 기본 팩터리는 무제한 큐·스레드로 OOM 위험★ → ThreadPoolExecutor로 코어·최대·큐·★거부 정책★ 직접 지정', tip:'실측 후 조정이 원칙 — 공식만 말하면 얕아 보인다' },
  { s:'s1', g:'동시성', front:'ThreadLocal 과 교착 상태', key:'', back:'ThreadLocal=스레드별 값 / ★스레드 풀에서 remove() 안 하면 다음 요청에 값이 새어 나간다★ / 교착 4조건: 상호배제·점유와 대기·비선점·환형 대기 → ★락 획득 순서 통일★·tryLock 타임아웃', tip:'스프링 SecurityContextHolder 가 ThreadLocal 기반' },
  { s:'s1', g:'언어 기본', front:'String 불변과 StringBuilder', key:'', back:'String 불변 이유: 상수 풀 공유·스레드 안전·해시 캐싱·보안 / StringBuilder=비동기·빠름, StringBuffer=동기화 / ★반복문 안의 문자열 연결은 컴파일러가 최적화하지 못한다★', tip:'단순 연결은 최적화되지만 루프 안은 직접 StringBuilder' },
  { s:'s1', g:'언어 기본', front:'불변 객체 만들기', key:'', back:'final 클래스 · 모든 필드 final · setter 없음 · 가변 객체는 ★방어적 복사★로 받고 반환 / 이점: 스레드 안전·캐싱 안전·사이드 이펙트 없음', tip:'값 객체(VO) 설계의 기본이며 DDD 질문과도 연결된다' },
  { s:'s1', g:'Java 8+', front:'스트림과 Optional 주의점', key:'', back:'중간 연산은 ★지연★, 최종 연산에서 실행 / ★스트림은 재사용 불가★ / 병렬 스트림은 만능이 아님(작은 데이터·I/O엔 손해) / Optional은 ★반환 타입★ 용도, orElse는 항상 평가·★orElseGet은 필요할 때만★', tip:'Optional을 필드·파라미터에 남용하면 안 된다' },

  // ───── 2. Spring · Spring Boot ─────
  { s:'s2', g:'DI', front:'생성자 주입을 권장하는 이유', key:'', back:'① final 로 ★불변★ 보장 ② 필수 의존이 드러남 ③ ★순환 참조를 기동 시점에 발견★ ④ 프레임워크 없이 테스트 가능 / 필드 주입은 테스트·불변성에 불리해 지양', tip:'부트 2.6+ 는 순환 참조를 기본 금지한다' },
  { s:'s2', g:'DI', front:'빈 스코프와 싱글턴 함정', key:'', back:'singleton(기본)·prototype·request·session / ★싱글턴 빈에 상태를 두면 모든 요청이 공유★ → 동시성 버그 / ★싱글턴에 프로토타입을 주입하면 처음 것만 계속 쓰인다★ → ObjectProvider·@Lookup', tip:'상태는 지역 변수·파라미터로, 꼭 필요하면 ThreadLocal(정리 필수)' },
  { s:'s2', g:'AOP', front:'스프링 AOP 프록시 방식', key:'', back:'★런타임 프록시★ 기반 · 메서드 실행 조인포인트만 지원 / 인터페이스 있으면 JDK 동적 프록시, 없으면 ★CGLIB★(부트 기본 CGLIB) / private·final 메서드는 프록시 적용 불가', tip:'AspectJ 는 컴파일·로드 타임 위빙으로 필드까지 가능하지만 스프링 AOP 는 아니다' },
  { s:'s2', g:'AOP', front:'자기 호출(self-invocation) 함정', key:'', back:'같은 클래스 안에서 this.method() 로 호출하면 ★프록시를 거치지 않아★ @Transactional·@Cacheable·@Async 가 ★동작하지 않는다★ / 해결: 다른 빈으로 분리 · 자기 자신 주입 · AopContext.currentProxy()', tip:'면접에서 가장 자주 나오는 "동작 안 하는 이유" 1순위' },
  { s:'s2', g:'트랜잭션', front:'@Transactional 롤백 규칙', key:'', back:'★기본 롤백 대상은 언체크드(RuntimeException·Error)★ / 체크드 예외는 rollbackFor = Exception.class 지정 필요 / ★try-catch 로 예외를 삼키면 롤백되지 않는다★', tip:'"왜 롤백이 안 됐나요?" 질문의 절반이 예외 삼킴' },
  { s:'s2', g:'트랜잭션', front:'트랜잭션 전파 속성', key:'', back:'REQUIRED(기본)=있으면 참여 / ★REQUIRES_NEW★=항상 새 트랜잭션(기존 보류) / SUPPORTS·MANDATORY·NOT_SUPPORTED·NEVER / NESTED=세이브포인트', tip:'"메인이 실패해도 이력은 남기려면?" → REQUIRES_NEW (단, 커넥션 추가 점유 주의)' },
  { s:'s2', g:'트랜잭션', front:'readOnly 와 격리 수준', key:'', back:'readOnly=true → JPA가 ★스냅샷 저장·변경 감지 생략★(메모리·성능 이점), 읽기 전용 최적화·복제본 라우팅에 활용 / isolation 은 DB 기본을 따르는 경우가 대부분', tip:'조회 전용 서비스 메서드에 습관적으로 붙이면 이점이 크다' },
  { s:'s2', g:'MVC', front:'DispatcherServlet 요청 흐름', key:'', back:'요청 → ★DispatcherServlet(프론트 컨트롤러)★ → HandlerMapping → HandlerAdapter → 컨트롤러 → (ViewResolver→View) 또는 ★HttpMessageConverter(JSON)★ → 응답', tip:'@RestController = @Controller + @ResponseBody' },
  { s:'s2', g:'MVC', front:'필터 vs 인터셉터 vs AOP', key:'', back:'필터=서블릿 스펙·DispatcherServlet ★앞단★(인코딩·CORS·보안) / 인터셉터=스프링 MVC·핸들러 ★전후★(인증·로깅, 핸들러 정보 접근) / AOP=메서드 실행 시점·파라미터 접근', tip:'"어디에 넣을까요?"는 적용 시점으로 답한다' },
  { s:'s2', g:'MVC', front:'전역 예외 처리와 검증', key:'', back:'@ExceptionHandler(컨트롤러 단위) / ★@RestControllerAdvice★(전역·에러 응답 포맷 통일) / @Valid + Bean Validation(@NotNull·@Size) + BindingResult', tip:'에러 응답은 code·message·detail 로 통일하고 상태 코드로 결과를 표현' },
  { s:'s2', g:'Boot', front:'자동 설정 동작 원리', key:'', back:'@SpringBootApplication = @SpringBootConfiguration + ★@EnableAutoConfiguration★ + @ComponentScan / 후보 목록(부트 3.x는 ★AutoConfiguration.imports★)을 읽고 @Conditional 계열로 선별 / ★내가 정의한 빈이 있으면 물러난다(OnMissingBean)★', tip:'"오버라이드가 왜 되나요?"의 답이 OnMissingBean' },
  { s:'s2', g:'Boot', front:'설정 우선순위와 프로파일', key:'', back:'커맨드라인 인자 → 환경 변수 → 프로파일별 설정 → application.yml → 기본값 / @Profile·spring.profiles.active·application-{env}.yml / Actuator health·metrics(★운영에서 노출 범위·인증 제한 필수★)', tip:'컨테이너 환경에서는 환경 변수로 주입하는 패턴이 흔하다' },
  { s:'s2', g:'테스트', front:'슬라이스 테스트로 범위 좁히기', key:'', back:'@SpringBootTest=전체 컨텍스트(느림) / ★@WebMvcTest★=웹 계층(MockMvc) / ★@DataJpaTest★=JPA 계층 / @MockBean(컨텍스트 목) vs @Mock(순수 목)', tip:'단위 테스트는 스프링 없이 — @SpringBootTest 남발은 빌드 시간을 죽인다' },

  // ───── 3. JPA · 데이터베이스 ─────
  { s:'s3', g:'영속성 컨텍스트', front:'영속성 컨텍스트의 5가지 이점', key:'', back:'① ★1차 캐시★(같은 트랜잭션 재조회 없음) ② 동일성 보장(== true) ③ ★쓰기 지연★(커밋 시 모아 전송) ④ ★변경 감지★(스냅샷 비교 → UPDATE 자동) ⑤ 지연 로딩', tip:'"UPDATE 를 왜 호출 안 하나요?" → 변경 감지' },
  { s:'s3', g:'영속성 컨텍스트', front:'엔티티 생명주기와 flush·clear', key:'', back:'비영속 → ★영속★ → 준영속(detach·clear·close) → 삭제 / flush=쓰기 지연 SQL 전송(★컨텍스트를 비우지 않는다★), clear=컨텍스트 초기화 / flush 시점: 커밋·JPQL 실행 직전·명시적 호출', tip:'준영속 상태에서는 변경 감지가 동작하지 않는다' },
  { s:'s3', g:'연관관계', front:'연관관계 주인과 편의 메서드', key:'', back:'★외래 키를 가진 쪽이 주인★, 반대편은 mappedBy(읽기 전용) / ★주인이 아닌 쪽에만 값을 넣으면 DB에 반영되지 않는다★ → 연관관계 편의 메서드로 양쪽 설정', tip:'양방향은 관리 포인트가 늘어난다 — 필요할 때만' },
  { s:'s3', g:'연관관계', front:'지연 로딩을 기본으로 해야 하는 이유', key:'', back:'★@ManyToOne·@OneToOne 기본값은 EAGER★ → 예측 불가한 조인·N+1 유발 / 실무 원칙은 ★전부 LAZY★ 후 필요한 곳만 fetch join / ★mappedBy 쪽 @OneToOne 은 LAZY 가 동작하지 않는다★', tip:'FK가 없어 존재 여부 확인이 필요해 프록시를 만들 수 없다' },
  { s:'s3', g:'N+1', front:'N+1 문제의 원인과 해결 수단', key:'', back:'목록 1 + 연관 N 쿼리 / ★fetch join★(페이징 위험) · ★@EntityGraph★ · ★@BatchSize·default_batch_fetch_size★(IN 절, 페이징과 병행 가능) · ★DTO 직접 조회★(가장 가볍다)', tip:'"겪어보셨나요?"는 사실상 필수 질문 — 수치와 함께 준비' },
  { s:'s3', g:'N+1', front:'컬렉션 fetch join 의 3가지 제약', key:'', back:'① 1:N 조인은 ★결과 행이 뻥튀기★(distinct 필요, 하이버네이트 6+는 기본 제거) ② ★컬렉션 fetch join 은 하나만★(둘 이상은 카티션 곱) ③ ★페이징 불가★ — 전체를 메모리로 읽어 페이징(경고 로그)', tip:'해법: ToOne 은 fetch join, 컬렉션은 @BatchSize' },
  { s:'s3', g:'실무', front:'OSIV 트레이드오프', key:'', back:'스프링 부트 기본 ★true★ — 영속성 컨텍스트를 뷰까지 유지 / 장점: 컨트롤러·뷰에서 지연 로딩 가능 / ★단점: DB 커넥션을 요청 끝까지 점유★ → 트래픽 크면 고갈 / 끄면 서비스 계층에서 전부 로딩해야 한다', tip:'트래픽 많은 서비스는 대체로 false' },
  { s:'s3', g:'실무', front:'벌크 연산과 merge 주의', key:'', back:'@Modifying 벌크 UPDATE·DELETE 는 ★영속성 컨텍스트를 우회★ → 실행 후 ★clear()★ 하지 않으면 1차 캐시와 DB 불일치 / ★merge 는 null 필드까지 덮어쓴다★ → 조회 후 변경 감지 방식 권장', tip:'엔티티에 @Data·@ToString(연관 포함)도 금지' },
  { s:'s3', g:'트랜잭션', front:'격리 수준과 발생 현상', key:'', back:'READ UNCOMMITTED(Dirty·Non-Repeatable·Phantom) → READ COMMITTED(Non-Repeatable·Phantom, ★Oracle·PostgreSQL 기본★) → REPEATABLE READ(Phantom, ★MySQL 기본★) → SERIALIZABLE(없음)', tip:'InnoDB 는 갭 락으로 REPEATABLE READ 에서도 팬텀을 상당 부분 억제' },
  { s:'s3', g:'동시성', front:'낙관적 락 vs 비관적 락', key:'', back:'★낙관적★=@Version 컬럼·충돌이 드물 때·실패 시 재시도 / ★비관적★=SELECT … FOR UPDATE·충돌이 잦을 때 / 대안: ★DB 원자 연산★(UPDATE SET qty = qty - 1 WHERE qty > 0)', tip:'"동시에 재고 차감"은 단골 시나리오 — 트레이드오프로 답한다' },
  { s:'s3', g:'인덱스', front:'인덱스를 못 타는 경우', key:'', back:'① ★컬럼 가공★(DATE(col), col*2, SUBSTR) ② ★묵시적 형 변환★(문자 컬럼에 숫자 비교) ③ ★복합 인덱스 선두 컬럼 미사용★ ④ LIKE \'%값\' ⑤ 카디널리티가 낮음', tip:'먼저 EXPLAIN — type=ALL, Using filesort·temporary 가 경고 신호' },
  { s:'s3', g:'인덱스', front:'인덱스 설계 원칙과 비용', key:'', back:'B+Tree 기본(= 와 범위·정렬 모두) / ★복합 인덱스는 = 조건 컬럼을 선두에★ / 카디널리티 높은 컬럼이 유리 / ★인덱스가 많으면 INSERT·UPDATE·DELETE 가 느려진다★ / 커버링 인덱스면 테이블 접근 생략', tip:'"인덱스를 더 걸면 되지 않나요?"에 쓰기 비용을 말할 수 있어야 한다' },

  // ───── 4. 웹 · 네트워크 · 보안 ─────
  { s:'s4', g:'HTTP', front:'메서드의 안전성·멱등성', key:'', back:'GET=안전·멱등 / ★POST=비멱등★ / PUT=멱등(전체 교체) / ★PATCH=일반적으로 비멱등★(부분 수정) / DELETE=멱등 / ★멱등성은 재시도 설계의 근거★', tip:'비멱등 API 를 재시도하면 중복 처리가 발생한다' },
  { s:'s4', g:'HTTP', front:'상태 코드 구분', key:'', back:'201 Created · 204 No Content / 301 영구·302 임시·304 Not Modified / 400 · ★401 인증 실패(누구인지 모름)★ · ★403 권한 없음★ · 404 · 409 충돌 · 422 검증 · 429 Too Many Requests / 502·503·504', tip:'401↔403 혼동이 가장 흔하다' },
  { s:'s4', g:'CORS', front:'CORS 와 프리플라이트', key:'', back:'브라우저 ★동일 출처 정책★ 때문에 발생 — ★서버가 허용 헤더를 내려야 한다★ / 단순 요청이 아니면 ★OPTIONS 프리플라이트★(커스텀 헤더·JSON Content-Type·PUT/DELETE) / ★Allow-Credentials:true 와 Allow-Origin:* 는 함께 못 쓴다★', tip:'"프론트에서 고칠 수 없다"가 핵심' },
  { s:'s4', g:'인증', front:'세션 vs JWT 트레이드오프', key:'', back:'세션=서버 상태 보관·★즉시 무효화 가능★·저장소 공유 필요 / JWT=★무상태★·서버 확장 유리·★즉시 무효화 어려움★·매 요청 페이로드 전송 / 정답 없음 — ★무효화 요구·확장·클라이언트 종류★ 로 나눠 답한다', tip:'"우리는 즉시 로그아웃이 필요해 세션+Redis"처럼 경험을 붙일 것' },
  { s:'s4', g:'인증', front:'JWT 구조와 저장 위치', key:'', back:'Header.Payload.Signature(Base64URL) — ★인코딩일 뿐 암호화가 아니다★ → 민감 정보 금지 / alg:none 금지·서명 검증 필수·짧은 만료 / 쿠키(HttpOnly)=XSS 강함·CSRF 대책 필요 / 로컬 스토리지=★XSS에 취약★', tip:'리프레시 토큰은 서버 저장 + 회전 + 재사용 탐지' },
  { s:'s4', g:'인증', front:'OAuth 2.0 · OIDC · Spring Security', key:'', back:'★OAuth 2.0 = 인가(권한 위임)★ — 인증 프로토콜이 아니다 / ★OIDC = OAuth + 인증 + ID Token★ / 권장 플로우 ★Authorization Code + PKCE★ / Spring Security=★필터 체인★·UserDetailsService·PasswordEncoder(BCrypt)·SecurityContextHolder', tip:'"OAuth 로 로그인 구현했어요"는 정확히는 OIDC' },
  { s:'s4', g:'보안', front:'웹 취약점 근본 대응', key:'', back:'SQLi → ★파라미터 바인딩★ / XSS → ★출력 인코딩★ + CSP + HttpOnly / CSRF → 토큰·SameSite·Referer / SSRF → URL 화이트리스트·메타데이터 차단 / 비밀번호 → ★BCrypt·Argon2★(솔트+반복)', tip:'단순 SHA-256 은 너무 빨라 비밀번호 저장에 부적절' },
  { s:'s4', g:'API 설계', front:'REST 설계와 멱등 키', key:'', back:'자원(명사)·행위(메서드)·무상태 / 에러 응답 포맷 통일·상태 코드로 결과 표현 / ★결제·주문 생성처럼 중복이 위험한 POST 는 Idempotency-Key★ 로 중복 요청을 같은 결과로 처리', tip:'GET /getUserOrders 처럼 동사를 쓰면 REST 가 아니다' },

  // ───── 5. 아키텍처 · 설계 ─────
  { s:'s5', g:'설계 원칙', front:'SOLID 5원칙', key:'S·O·L·I·D', back:'단일 책임(변경 이유 하나) · 개방-폐쇄(확장 열림·수정 닫힘) · 리스코프 치환 · 인터페이스 분리 · ★의존 역전(구체가 아니라 추상에 의존 — 스프링 DI 의 근거)★', tip:'원칙 이름만 대지 말고 내 코드에서 어겼던 사례를 준비' },
  { s:'s5', g:'설계 원칙', front:'상속보다 조합 · 레이어 의존 방향', key:'', back:'상속=강한 결합·부모 변경 전파 / 조합=런타임 교체 가능 / 레이어드: Controller → Service → Repository ★단방향★ / ★안티패턴★: 컨트롤러의 비즈니스 로직, ★엔티티를 API 응답으로 노출★', tip:'엔티티 노출은 DB 스키마와 API 스펙을 결합시킨다' },
  { s:'s5', g:'패턴', front:'실무에서 쓰이는 디자인 패턴', key:'', back:'★전략★=조건 분기를 구현체로(if-else 제거) / ★템플릿 메서드★=공통 흐름+일부 위임(JdbcTemplate) / ★프록시·데코레이터★=부가 기능(스프링 AOP) / 팩터리·빌더·옵저버(ApplicationEvent)', tip:'패턴 이름 나열은 감점 — 적용 맥락과 대안을 함께' },
  { s:'s5', g:'MSA', front:'모놀리식 vs MSA 판단 기준', key:'', back:'모놀리식=초기 개발 빠름·운영 단순·전체 배포 / MSA=독립 배포·부분 확장·장애 격리, 대신 ★분산 트랜잭션·운영 난이도★ / ★조직 규모·도메인 경계·운영 역량★ 으로 판단 — "무조건 MSA"는 감점', tip:'"경계가 뚜렷해질 때 분리"가 안전한 답' },
  { s:'s5', g:'MSA', front:'분산 트랜잭션 — Saga·아웃박스', key:'', back:'2PC=강한 일관성·가용성 손해(실무 기피) / ★Saga★=로컬 트랜잭션 + ★보상 트랜잭션★(코레오그래피 vs 오케스트레이션) / ★아웃박스 패턴★=DB 커밋과 메시지 발행의 원자성 확보 → 소비자는 ★멱등★', tip:'최종 일관성을 받아들이는 설계라는 점을 명시' },
  { s:'s5', g:'성능', front:'성능 개선 접근 순서', key:'', back:'★측정 → 병목 식별 → 개선 → 재측정★ / 추측으로 캐시부터 넣지 않는다 / 도구: APM·슬로우 쿼리 로그·부하 테스트 / DB 병목 3대 원인: ★N+1·풀 스캔·커넥션 풀 고갈★', tip:'"캐시 먼저"라고 답하면 절차를 모르는 사람으로 읽힌다' },
  { s:'s5', g:'성능', front:'캐시 전략과 스탬피드', key:'', back:'로컬(Caffeine) vs ★분산(Redis)★ / Cache-Aside(가장 흔함)·Write-Through·Write-Behind / ★캐시 스탬피드★=동시 만료로 원본 폭주 → ★만료 지터·뮤텍스·미리 갱신★ / 일관성은 TTL·이벤트 무효화', tip:'"무엇이 오래돼도 괜찮은 데이터인가"가 캐시 설계의 출발점' },
  { s:'s5', g:'장애 대응', front:'복원성 패턴', key:'', back:'★타임아웃(필수)★ · 재시도(+★지수 백오프·지터★) · ★서킷 브레이커★ · 벌크헤드(자원 격리) · 폴백 · 레이트 리밋 / ★재시도만 넣으면 장애를 증폭시킨다★ / 멱등하지 않은 API 는 재시도 금지', tip:'Resilience4j 가 스프링 생태계 표준' },
  { s:'s5', g:'설계 면접', front:'시스템 설계 면접 진행 순서', key:'', back:'① ★요구사항 확인(기능·비기능·규모)★ ② 개략 추정(QPS·저장량) ③ API·데이터 모델 ④ 개략 아키텍처(LB·WAS·DB·캐시·큐) ⑤ 병목·확장·장애 대응 ⑥ 트레이드오프 정리', tip:'혼자 그림부터 그리면 감점 — 면접관과 대화하며 좁혀 간다' },
  { s:'s5', g:'테스트', front:'테스트 피라미드와 좋은 테스트', key:'', back:'단위(다수) > 통합 > E2E(소수) / ★F.I.R.S.T★ Fast·Independent·Repeatable·Self-validating·Timely / given-when-then / ★커버리지 수치보다 중요한 분기를 덮었는가★', tip:'리팩터링은 테스트가 있어야 안전하다는 연결이 자연스럽다' },

  // ───── 6. 인프라 · 데브옵스 ─────
  { s:'s6', g:'컨테이너', front:'Docker 와 VM · 이미지 최적화', key:'', back:'컨테이너=★호스트 커널 공유★(게스트 OS 없음) → 가볍고 빠른 기동 / ★레이어 캐시★: 자주 바뀌는 것을 뒤에(의존성 먼저 빌드) / ★멀티 스테이지 빌드★로 이미지 축소 / 자바는 ★-XX:MaxRAMPercentage★ 로 컨테이너 한도 인식', tip:'힙을 지정하지 않으면 OOMKilled 될 수 있다' },
  { s:'s6', g:'배포', front:'배포 전략 3종', key:'', back:'롤링=순차 교체·자원 적음·롤백 느림 / ★블루-그린★=환경 2벌·★즉시 롤백★·자원 2배 / ★카나리★=소수 트래픽부터 점진 확대·지표 관측 필요 / 기능 플래그=배포와 릴리스 분리', tip:'무중단 전제: 무상태 서버 + 헬스 체크 + 하위 호환 스키마' },
  { s:'s6', g:'배포', front:'무중단 DB 스키마 변경', key:'', back:'★컬럼 추가 → 코드 배포 → 데이터 이전 → 컬럼 삭제★ 단계 분리 / 바로 삭제·이름 변경하면 ★배포 중 구버전이 깨진다★ / 도구: Flyway·Liquibase', tip:'K8s 프로브: Readiness=트래픽 투입 가부, Liveness=재시작 여부' },
  { s:'s6', g:'Redis', front:'Redis 활용과 운영 주의', key:'', back:'활용: 캐시·세션 저장소·★분산 락★·순위표(Sorted Set)·레이트 리밋 / ★싱글 스레드라 O(n) 명령(KEYS·FLUSHALL) 운영 금지★ → SCAN / 영속화 RDB·AOF / 분산 락은 ★만료(PX) + 소유자 토큰 확인 후 해제★', tip:'짧은 임계 구간 + 멱등 설계를 함께 말하면 안전하다' },
  { s:'s6', g:'Kafka', front:'Kafka 순서 보장과 전달 보장', key:'', back:'Producer·Broker·★Topic/Partition★·Consumer Group·Offset / ★파티션 단위로만 순서 보장★ → 순서가 필요하면 키로 파티션 고정 / 파티션 수 ≥ 컨슈머 수 / ★at-least-once 가 일반적★ → ★소비자 멱등 처리 필수★', tip:'exactly-once 는 제약이 커 실무에서는 멱등 소비로 푼다' },
  { s:'s6', g:'모니터링', front:'관측 3요소와 지표', key:'', back:'★메트릭(Prometheus+Grafana·Micrometer)·로그(구조화+중앙 수집)·트레이스(TraceId)★ / ★RED★=Rate·Errors·Duration / ★USE★=Utilization·Saturation·Errors / 자바: 힙·GC 시간·스레드·커넥션 풀', tip:'로그에 토큰·개인정보를 남기면 그 자체가 사고' },
  { s:'s6', g:'장애 대응', front:'장애 대응 순서', key:'', back:'① 인지(알림) ② ★영향 범위 파악★ ③ ★완화(롤백·스케일아웃·서킷)★ ④ 원인 분석 ⑤ 재발 방지 ⑥ ★포스트모템(비난 없는 회고)★ / ★원인 규명보다 서비스 회복이 먼저★', tip:'이 판단을 말할 수 있으면 운영 경험이 있다고 읽힌다' },
  { s:'s6', g:'클라우드', front:'AWS 최소 지식과 선택 근거', key:'', back:'EC2·ECS/EKS·Lambda / ★S3★(정적 파일)·RDS/Aurora·ElastiCache / ★ALB★·Route 53·CloudFront / VPC·보안 그룹(★SG=Stateful·허용만★) / ★IAM 역할★(액세스 키를 코드에 넣지 않는다)', tip:'서비스 나열보다 "왜 그 구성을 골랐는가"' },

  // ───── 7. 자료구조 · 알고리즘 · CS ─────
  { s:'s7', g:'복잡도', front:'입력 크기로 알고리즘 역산', key:'', back:'n≤10 → O(2ⁿ)·O(n!) / n≤1,000 → O(n²) / n≤100,000 → ★O(n log n)★ / n≤1,000,000 → O(n) / ★문제의 제한 조건이 알고리즘을 지정한다★', tip:'복잡도 순서: O(1)<O(log n)<O(n)<O(n log n)<O(n²)<O(2ⁿ)<O(n!)' },
  { s:'s7', g:'자료구조', front:'상황별 자료구조 선택', key:'', back:'중복 제거=HashSet / 키-값=HashMap / ★정렬·범위 조회=TreeMap★ / 순서 유지=LinkedHashMap / ★LRU 캐시=LinkedHashMap(accessOrder)★ / 최댓값 반복 추출=PriorityQueue / ★양끝 삽입=ArrayDeque(Stack 대신)★ / 접두사=Trie / 그룹 병합=Union-Find', tip:'"왜 그 자료구조인가"의 근거를 말하는 것이 면접 포인트' },
  { s:'s7', g:'알고리즘', front:'탐색·최단 경로 알고리즘', key:'', back:'DFS=스택·재귀(경로·백트래킹) / ★BFS=큐·가중치 없는 최단 거리★ / 이분 탐색=정렬 전제 O(log n)·★파라메트릭 서치★ / ★다익스트라★=음수 불가 / 벨만-포드=음수 허용 / 플로이드-워셜=모든 쌍', tip:'투 포인터·슬라이딩 윈도우는 연속 구간 문제의 O(n) 해법' },
  { s:'s7', g:'코딩 테스트', front:'자바 코딩 테스트 실전 팁', key:'', back:'★BufferedReader + StringTokenizer★(Scanner 는 느림) / 출력은 ★StringBuilder 로 모아서★ / ★int 오버플로 → long★(약 21억) / 깊은 재귀는 반복문 전환 / 객체 정렬은 ★TimSort(안정)★, 기본형은 듀얼 피벗 퀵소트', tip:'입출력 최적화만으로 시간 초과가 풀리는 문제가 많다' },
  { s:'s7', g:'OS', front:'프로세스·스레드·I/O 모델', key:'', back:'프로세스=독립 메모리 / 스레드=코드·데이터·힙 공유(스택 개별) / 컨텍스트 스위칭 비용 / ★블로킹 I/O 는 스레드가 대기에 묶여 처리량이 스레드 수에 갇힌다★ → 논블로킹·가상 스레드', tip:'서버 성능 질문과 자연스럽게 연결되는 CS 지식' },

  // ───── 8. 인성 · 경험 면접 ─────
  { s:'s8', g:'STAR', front:'STAR 기법과 수치화', key:'S·T·A·R', back:'Situation(상황) → Task(과제) → ★Action(내가 한 일)★ → ★Result(수치)★ / "팀이" 가 아니라 "내가" / ★결과는 수치로★ — 응답 800ms→120ms, 쿼리 60개→3개', tip:'수치를 모르면 지어내지 말고 "정확히는 기억나지 않지만" 으로 정직하게' },
  { s:'s8', g:'STAR', front:'미리 준비할 경험 5개', key:'', back:'① 성능·품질 개선(수치) ② 장애 해결(원인·조치·재발 방지) ③ ★기술 선택(대안 비교·근거)★ ④ 협업 갈등 조율 ⑤ 실패·배움(무엇을 바꿨나)', tip:'기술 질문 답변 끝에 이 경험을 한 스푼 붙이는 것이 핵심 전략' },
  { s:'s8', g:'이직 사유', front:'이직 사유는 지향형으로', key:'', back:'★전 직장 험담 금지★ / "~가 싫어서"(회피형) → ★"~를 하고 싶어서"(지향형)★ / 그 지향이 ★지원 회사에서 실제 가능한지★ 연결 / 짧은 재직 기간은 사실 + 배운 것 + 다음 선택 기준', tip:'회피형으로 답하면 "같은 이유로 또 나갈 사람"으로 읽힌다' },
  { s:'s8', g:'기술 답변', front:'기술 질문 3단 답변 골격', key:'', back:'① 정의·한 줄 요약 ② 동작·이유 ③ ★내 경험·트레이드오프★ / ★③이 없으면 "공부한 사람", 있으면 "해본 사람"★ / 모르는 질문: 아는 범위 → ★모름 인정★ → 추론 방향', tip:'지어내다 꼬리 질문에 무너지는 것이 가장 치명적' },
  { s:'s8', g:'역질문', front:'역질문 준비', key:'', back:'★"없습니다"는 최악★ — 최소 2개 준비 / 팀: 3~6개월 업무·코드 리뷰 방식 / 기술: 기술 부채·배포 주기·장애 대응·포스트모템 / 성장: 평가 기준·기술 공유 / ★피할 것★: 연봉·복지만, 홈페이지에 있는 내용', tip:'"야근 많나요?" → "일정 관리는 어떻게 하시나요?" 로 순화' },
  { s:'s8', g:'처우', front:'처우 협의 원칙', key:'', back:'★희망 연봉을 미리 정한다★(현재·시세·최소 수용선) / "회사 규정에 따르겠습니다"만 반복하면 협상 여지가 사라진다 / 숫자는 ★범위★로 / ★총보상★(기본급·성과급·스톡·복지) / ★거짓 연봉 기재 금물★ / 오퍼는 ★서면 확인★', tip:'협상 관행은 회사·직급마다 다르다 — 원칙만 지킨다' }
];

/* ── 3. 핵심 정리 시트 ──────────────────────────────────── */
CPPG.sheets = [
  {
    s:'s1', title:'★ 자바 컬렉션 선택과 복잡도', type:'table',
    head:['컬렉션','조회','삽입·삭제','특징'],
    rows:[
      ['ArrayList','O(1)','끝 상각 O(1) / 중간 O(n)','실무 기본 선택'],
      ['LinkedList','O(n)','노드 아는 경우 O(1)','캐시 지역성 나빠 실제로는 느린 편'],
      ['HashMap','평균 O(1)','평균 O(1)','최악 O(log n)(트리화 이후)'],
      ['LinkedHashMap','O(1)','O(1)','순서 유지 · ★LRU 캐시★'],
      ['TreeMap','O(log n)','O(log n)','정렬·범위 조회'],
      ['HashSet','O(1)','O(1)','중복 제거'],
      ['PriorityQueue','peek O(1)','offer/poll O(log n)','힙 · 최댓값 반복 추출'],
      ['ArrayDeque','—','양끝 O(1)','Stack 대신 권장'],
      ['ConcurrentHashMap','O(1)','O(1)','버킷 단위 락 · 동시성']
    ]
  },
  {
    s:'s1', title:'★ JVM 메모리와 GC', type:'table',
    head:['구분','영역·항목','핵심'],
    rows:[
      ['스레드 공유','Heap','객체·배열 · GC 대상'],
      ['스레드 공유','Method Area','클래스 메타·상수 풀·static → Java 8+ ★Metaspace★'],
      ['스레드별','JVM Stack','스택 프레임 · StackOverflowError'],
      ['스레드별','PC Register / Native Stack','—'],
      ['힙 구조','Young(Eden+S0/S1) + Old','약한 세대 가설'],
      ['GC','Minor','Young · 짧고 잦음'],
      ['GC','Major·Full','Old 포함 · ★Stop-The-World★ 영향 큼'],
      ['수집기','G1 (Java 9+ 기본)','리전 기반 · 예측 가능한 정지 시간'],
      ['수집기','ZGC·Shenandoah','저지연 · 대용량 힙'],
      ['OOM','heap space / Metaspace / GC overhead','누수 / 클래스 과다 / GC만 반복']
    ]
  },
  {
    s:'s2', title:'★ @Transactional 이 동작하지 않는 경우 (최빈출)', type:'table',
    head:['원인','이유','해결'],
    rows:[
      ['★같은 클래스 내부 호출★','프록시를 거치지 않음','다른 빈 분리 · 자기 주입 · AopContext'],
      ['private·final 메서드','프록시 적용 불가','public 으로 · 클래스 설계 변경'],
      ['★예외를 try-catch 로 삼킴★','런타임 예외가 전파되지 않음','예외 재던지기 · 명시적 rollback'],
      ['체크드 예외 발생','기본 롤백 대상 아님','rollbackFor = Exception.class'],
      ['프록시 대상이 아닌 객체','스프링 빈이 아님','빈으로 등록'],
      ['트랜잭션 매니저 미설정','인프라 부재','설정 확인']
    ]
  },
  {
    s:'s2', title:'★ 트랜잭션 전파 속성', type:'table',
    head:['전파','기존 트랜잭션 있음','없음','대표 용도'],
    rows:[
      ['REQUIRED(기본)','참여','새로 시작','일반 서비스 메서드'],
      ['REQUIRES_NEW','★보류 후 새로 시작★','새로 시작','이력·알림(메인과 분리)'],
      ['SUPPORTS','참여','트랜잭션 없이','조회 전용 유틸'],
      ['MANDATORY','참여','★예외★','반드시 상위 트랜잭션 필요'],
      ['NOT_SUPPORTED','보류','트랜잭션 없이','장시간 외부 호출'],
      ['NEVER','★예외★','트랜잭션 없이','트랜잭션 금지 구간'],
      ['NESTED','세이브포인트','새로 시작','부분 롤백(JDBC 한정)']
    ]
  },
  {
    s:'s3', title:'★ N+1 해결 수단 비교', type:'table',
    head:['수단','방식','페이징','비고'],
    rows:[
      ['fetch join','JPQL 조인으로 한 번에','★컬렉션은 위험★','ToOne 에는 최적'],
      ['@EntityGraph','애너테이션 기반 fetch join','컬렉션은 동일 제약','스프링 데이터 JPA 궁합'],
      ['★@BatchSize★','IN 절로 N을 N/배치 로','★가능★','컬렉션에 권장'],
      ['default_batch_fetch_size','전역 배치 설정','가능','실무 기본값으로 자주 사용'],
      ['DTO 직접 조회','필요한 컬럼만 select','가능','가장 가볍지만 재사용성 낮음'],
      ['컬렉션 fetch join 제약','행 뻥튀기 · 1개만 · 페이징 불가','—','distinct·메모리 페이징 경고']
    ]
  },
  {
    s:'s3', title:'★ 격리 수준 · 락 · 인덱스', type:'table',
    head:['구분','항목','핵심'],
    rows:[
      ['격리','READ UNCOMMITTED','Dirty·Non-Repeatable·Phantom 모두'],
      ['격리','READ COMMITTED','Non-Repeatable·Phantom (Oracle·PostgreSQL 기본)'],
      ['격리','REPEATABLE READ','Phantom (★MySQL 기본★)'],
      ['격리','SERIALIZABLE','현상 없음 · 성능 최저'],
      ['락','낙관적(@Version)','충돌 드묾 · 실패 시 재시도'],
      ['락','비관적(FOR UPDATE)','충돌 잦음 · 대기 발생'],
      ['락','DB 원자 연산','UPDATE SET qty = qty - 1 WHERE qty > 0'],
      ['인덱스','못 타는 경우','컬럼 가공·형 변환·선두 컬럼 미사용·앞 와일드카드'],
      ['인덱스','쓰기 비용','인덱스가 많을수록 DML 느려짐'],
      ['인덱스','커버링','조회 컬럼이 인덱스에 모두 있으면 테이블 접근 생략']
    ]
  },
  {
    s:'s4', title:'★ HTTP 메서드·상태 코드', type:'table',
    head:['항목','값','의미'],
    rows:[
      ['GET','안전 O · 멱등 O','조회'],
      ['POST','안전 X · ★멱등 X★','생성·처리 (재시도 시 멱등 키 필요)'],
      ['PUT','멱등 O','전체 교체'],
      ['PATCH','★멱등 X★','부분 수정'],
      ['DELETE','멱등 O','삭제'],
      ['401','Unauthorized','★인증 실패★ — 누구인지 모름'],
      ['403','Forbidden','★인가 실패★ — 권한 없음'],
      ['409','Conflict','상태 충돌(중복 생성 등)'],
      ['429','Too Many Requests','레이트 리밋'],
      ['504','Gateway Timeout','상위 게이트웨이 타임아웃']
    ]
  },
  {
    s:'s4', title:'★ 세션 vs JWT (트레이드오프)', type:'table',
    head:['기준','세션','JWT'],
    rows:[
      ['상태','서버가 보관','★무상태★'],
      ['확장','저장소 공유 필요(Redis)','서버 간 공유 불필요'],
      ['즉시 무효화','★가능★','★어려움★(만료 전까지 유효)'],
      ['전송 크기','식별자만','페이로드 전체를 매 요청'],
      ['저장 위치','쿠키(HttpOnly)','쿠키 또는 스토리지'],
      ['주요 위험','세션 고정·탈취','★XSS(스토리지)★ / CSRF(쿠키)'],
      ['보완책','세션 저장소 이중화','짧은 만료 + 리프레시 회전 + 블랙리스트']
    ]
  },
  {
    s:'s5', title:'★ 성능 문제 접근 순서', type:'list',
    items:[
      '① 증상 정의 — 무엇이 얼마나 느린가(p95·p99, 특정 API 인가 전체인가)',
      '② 측정 — APM·슬로우 쿼리 로그·GC 로그·부하 테스트 (★추측 금지★)',
      '③ 병목 계층 특정 — 애플리케이션 / DB / 외부 연동 / 네트워크',
      '④ DB 라면: N+1 → 인덱스 → 쿼리 구조 → 커넥션 풀 순으로 확인',
      '⑤ 애플리케이션이라면: GC·스레드 덤프·락 경합·동기 외부 호출 확인',
      '⑥ 개선 적용 — 가장 싼 것부터(쿼리 수정 > 인덱스 > 캐시 > 구조 변경)',
      '⑦ 재측정 — 개선 폭을 수치로 확인하고 회귀 여부 모니터링',
      '★면접에서는 ②와 ⑦을 빠뜨리지 않는 것이 핵심★',
      '캐시·비동기를 먼저 도입하는 것은 안티패턴 — 문제를 감추기만 한다'
    ]
  },
  {
    s:'s5', title:'★ 복원성 패턴 조합', type:'table',
    head:['패턴','목적','주의'],
    rows:[
      ['타임아웃','무한 대기 방지','★모든 외부 호출에 필수★'],
      ['재시도','일시적 실패 복구','★멱등 API 에만★ · 백오프 필수'],
      ['지수 백오프 + 지터','재시도 폭주 방지','동시 재시도 몰림 완화'],
      ['서킷 브레이커','장애 전파 차단','임계치·복구 시도 설정'],
      ['벌크헤드','자원 격리','스레드 풀·커넥션 분리'],
      ['폴백','부분 기능 유지','캐시된 값·기본값'],
      ['레이트 리밋','과부하 보호','429 응답 + 재시도 안내']
    ]
  },
  {
    s:'s6', title:'★ 배포 전략과 무중단 전제', type:'table',
    head:['전략','방식','롤백','자원'],
    rows:[
      ['롤링','인스턴스 순차 교체','느림','적음'],
      ['블루-그린','환경 2벌 후 스위치','★즉시★','2배'],
      ['카나리','소수 → 점진 확대','빠름','중간'],
      ['기능 플래그','배포와 릴리스 분리','스위치 off','적음'],
      ['전제 ①','무상태 서버','세션은 외부 저장소',''],
      ['전제 ②','헬스 체크','Readiness / Liveness',''],
      ['전제 ③','★하위 호환 스키마★','추가 → 배포 → 이전 → 삭제','']
    ]
  },
  {
    s:'s8', title:'★ 면접 답변 골격과 금지 사항', type:'list',
    items:[
      '기술 질문 3단: ① 정의 한 줄 ② 동작·이유 ③ ★내 경험·트레이드오프★',
      '경험 질문 STAR: 상황 → 과제 → ★내가 한 행동★ → ★수치 결과★',
      '모르는 질문: 아는 범위까지 → ★모른다고 인정★ → 추론 방향 제시',
      '이직 사유: 회피형("~가 싫어서") → ★지향형("~를 하고 싶어서")★',
      '★금지★ 전 직장·상사 험담 — 즉시 감점',
      '★금지★ 성과를 "우리 팀이" 로만 말하기(내 기여가 사라짐)',
      '★금지★ 팀 성과를 전부 내 공으로 말하기(신뢰 상실)',
      '★금지★ 수치 지어내기 — 꼬리 질문에서 무너진다',
      '★금지★ 역질문 "없습니다"',
      '★금지★ "이 기술이 무조건 좋습니다" — 트레이드오프 없는 단정'
    ]
  },
  {
    s:'s1', title:'★ 자바 언어 기본 — 면접 빈출 비교', type:'table',
    head:['주제','구분','핵심'],
    rows:[
      ['오버로딩','같은 클래스 · 매개변수 다름','★컴파일 시점★ 결정(정적 바인딩)'],
      ['오버라이딩','상속 · 시그니처 동일','★런타임★ 결정(동적 바인딩)'],
      ['== / equals','참조(주소) / 논리적 동등성','원시 타입의 == 는 값 비교'],
      ['추상 클래스','상태 보유 · 단일 상속 · is-a','공통 구현을 공유할 때'],
      ['인터페이스','다중 구현 · can-do','무관한 타입에 능력 부여 · default 메서드'],
      ['체크드 예외','컴파일러가 처리 강제(IOException)','★스프링 기본 롤백 대상 아님★'],
      ['언체크드 예외','RuntimeException 계열','스프링 기본 롤백 대상'],
      ['제네릭','타입 안전 · 캐스팅 제거','★타입 소거★ · PECS(읽기 extends, 쓰기 super)'],
      ['상속 vs 조합','상속은 부모 변경이 전파(강한 결합)','★조합 선호★ · 런타임 교체 가능'],
      ['불변 객체','final 클래스·필드 · setter 없음','가변 필드는 ★방어적 복사★']
    ]
  },
  {
    s:'s1', title:'★ 동시성 도구 선택표', type:'table',
    head:['도구','보장 범위','쓰는 자리'],
    rows:[
      ['volatile','★가시성만★ (원자성 X)','종료 플래그 같은 단일 상태'],
      ['synchronized','가시성 + 원자성(상호배제)','짧은 임계 구간'],
      ['ReentrantLock','동일 + tryLock(타임아웃)·공정성','대기 시간을 제어해야 할 때'],
      ['Atomic 계열','CAS 기반 단일 변수 원자 연산','카운터·시퀀스'],
      ['ConcurrentHashMap','버킷 단위 락','공유 맵 (Hashtable 은 레거시)'],
      ['CopyOnWriteArrayList','쓰기 시 전체 복사','읽기가 압도적으로 많을 때'],
      ['BlockingQueue','대기·통지 내장','생산자-소비자'],
      ['ThreadLocal','스레드별 값 보관','★스레드 풀에서 remove 필수★'],
      ['교착 4조건','상호배제·점유와 대기·비선점·환형 대기','락 획득 ★순서 통일★·tryLock'],
      ['가상 스레드(Java 21)','경량 스레드 · 블로킹 대기 시 자원 반납','I/O 대기가 많은 서버']
    ]
  },
  {
    s:'s1', title:'★ Java 버전 변화 · 스트림/Optional 주의', type:'table',
    head:['항목','내용','면접 포인트'],
    rows:[
      ['Java 8','람다·스트림·Optional·default 메서드','★PermGen 제거 → Metaspace★'],
      ['Java 11','var · 새 HttpClient · LTS','부트 2.x 의 표준 실행 환경'],
      ['Java 17','record · sealed · 패턴 매칭 · LTS','★부트 3.x 최소 버전★ · DTO 를 record 로'],
      ['Java 21','★가상 스레드★ · 순차 컬렉션 · LTS','스레드당 요청 모델의 처리량 한계 완화'],
      ['스트림 지연 평가','중간 연산은 지연 · 최종 연산에서 실행','★한 번 소비한 스트림은 재사용 불가★'],
      ['병렬 스트림','공용 ForkJoinPool 사용','작은 데이터·I/O 작업에는 손해'],
      ['Optional','★반환 타입★ 용도','필드·파라미터 남용 금지'],
      ['orElse vs orElseGet','orElse 는 항상 평가','★비용이 크면 orElseGet★']
    ]
  },
  {
    s:'s2', title:'★ 빈 스코프 · 생명주기 · 주입', type:'table',
    head:['항목','내용','주의'],
    rows:[
      ['singleton(기본)','컨테이너당 1개','★인스턴스 필드에 상태 보관 금지★'],
      ['prototype','요청마다 새 객체','컨테이너가 소멸을 관리하지 않음'],
      ['request·session','웹 요청·세션 범위','프록시 모드 필요'],
      ['생명주기','생성 → 주입 → @PostConstruct → 사용 → @PreDestroy','@Bean(initMethod·destroyMethod) 도 가능'],
      ['주입 방식','★생성자 주입 권장★','필드 주입은 테스트·불변성에 불리'],
      ['후보 여러 개','@Primary · @Qualifier','List·Map 으로 전부 주입도 가능'],
      ['싱글턴 ← 프로토타입','처음 주입된 것만 계속 사용','ObjectProvider · @Lookup'],
      ['순환 참조','부트 2.6+ 기본 금지','설계 분리가 정답(@Lazy 는 임시방편)']
    ]
  },
  {
    s:'s2', title:'★ 요청 처리 흐름과 가로채기 3종', type:'list',
    items:[
      '① 클라이언트 → ★DispatcherServlet(프론트 컨트롤러)★',
      '② HandlerMapping — 어떤 컨트롤러가 처리할지 결정',
      '③ HandlerAdapter — 핸들러를 실제로 실행',
      '④ 컨트롤러 실행 → (ViewResolver·View) 또는 ★HttpMessageConverter(JSON)★',
      '⑤ 응답 — @RestController = @Controller + @ResponseBody',
      '★필터★ 서블릿 스펙 · DispatcherServlet ★앞단★ — 인코딩·CORS·보안',
      '★인터셉터★ 스프링 MVC · 핸들러 ★전후★ — 인증·로깅·핸들러 정보 접근',
      '★AOP★ 메서드 실행 시점 · 파라미터 접근 — 트랜잭션·캐시 같은 횡단 관심사',
      '전역 예외 처리는 ★@RestControllerAdvice★ + @ExceptionHandler 로 응답 포맷 통일',
      '검증은 @Valid + Bean Validation(@NotNull·@Size) + BindingResult'
    ]
  },
  {
    s:'s2', title:'★ 자동 설정 동작과 설정 우선순위', type:'table',
    head:['항목','내용','핵심'],
    rows:[
      ['@SpringBootApplication','@SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan','—'],
      ['후보 목록','부트 2.x spring.factories / ★3.x AutoConfiguration.imports★','목록을 읽어 후보를 모은다'],
      ['선별','@ConditionalOnClass·OnProperty·★OnMissingBean★','내가 정의한 빈이 있으면 물러남'],
      ['우선순위 1','커맨드라인 인자','가장 높음'],
      ['우선순위 2','환경 변수 → 프로파일 설정 파일','컨테이너 배포에서 자주 사용'],
      ['우선순위 3','application.yml → 기본값','가장 낮음'],
      ['Actuator','health·info·metrics·prometheus','★민감 엔드포인트는 노출 제한·인증★'],
      ['테스트 범위','@SpringBootTest(전체) / @WebMvcTest(웹) / @DataJpaTest(JPA)','슬라이스로 범위 최소화']
    ]
  },
  {
    s:'s3', title:'★ 영속성 컨텍스트와 엔티티 생명주기', type:'table',
    head:['구분','항목','핵심'],
    rows:[
      ['생명주기','비영속 → 영속 → 준영속 → 삭제','persist·find / detach·clear·close / remove'],
      ['이점','1차 캐시','같은 트랜잭션 내 같은 ID 는 DB 재조회 없음'],
      ['이점','동일성 보장','같은 트랜잭션에서 == 가 true'],
      ['이점','쓰기 지연','flush 시점에 SQL 을 모아 전송'],
      ['이점','★변경 감지★','스냅샷 비교로 UPDATE 자동 생성'],
      ['flush 시점','커밋 · JPQL 실행 직전 · 명시적 flush()','★flush 는 컨텍스트를 비우지 않는다★'],
      ['준영속','변경 감지 미동작','조회 후 수정 권장(merge 는 덮어쓰기)'],
      ['벌크 연산','영속성 컨텍스트 우회','실행 후 ★clear() 필수★']
    ]
  },
  {
    s:'s3', title:'★ JPA 실무 함정 체크리스트', type:'table',
    head:['함정','증상','대응'],
    rows:[
      ['연관관계 주인 아닌 쪽만 설정','DB 에 반영되지 않음','★연관관계 편의 메서드★ 로 양쪽 설정'],
      ['mappedBy 쪽 @OneToOne','LAZY 가 동작하지 않음','FK 가 없어 존재 확인이 필요하기 때문'],
      ['@ManyToOne 기본 EAGER','예측 불가한 조인·N+1','★전부 LAZY 로 명시★'],
      ['cascade = ALL 남용','의도치 않은 연쇄 삭제','★단일 소유일 때만★'],
      ['IDENTITY 전략','persist 즉시 INSERT','쓰기 지연 이점 상실(MySQL 관행)'],
      ['엔티티에 롬복 @Data','equals·hashCode·toString 문제','필요한 메서드만 직접 정의'],
      ['toString 에 연관 엔티티','순환 참조·지연 로딩 폭발','연관 필드 제외'],
      ['커넥션 풀 무작정 확대','오히려 느려짐','DB 코어·디스크가 병목']
    ]
  },
  {
    s:'s4', title:'★ URL 입력 후 응답까지 (백엔드 구간 중심)', type:'list',
    items:[
      '① URL 파싱 → ② DNS 조회(캐시 → 리졸버 → 루트·TLD·권한)',
      '③ TCP 3-way 핸드셰이크(SYN → SYN+ACK → ACK) + TLS 핸드셰이크',
      'TLS: 인증서 검증 → 키 교환(ECDHE) → 대칭키 통신 · ★ECDHE 로 PFS 확보★',
      '④ HTTP 요청 → 로드 밸런서(L4=IP·포트 / ★L7=경로·헤더★)',
      '⑤ WAS 처리 — 스레드 풀 → 컨트롤러 → 서비스 → ★커넥션 풀★ → DB·캐시',
      '⑥ 응답 반환 → ⑦ 브라우저 렌더링',
      '★백엔드 면접은 ③~⑤ 구간을 깊게 판다★ — LB·WAS·커넥션 풀·캐시',
      'HTTP/1.1 은 HOL 블로킹 / 2 는 멀티플렉싱·헤더 압축 / 3 은 QUIC(UDP) 기반',
      '캐시는 Cache-Control · ETag·If-None-Match → 조건부 요청으로 304',
      '세션 고정(sticky session)은 수평 확장·무중단 배포에 불리하다'
    ]
  },
  {
    s:'s4', title:'★ Spring Security 구성요소와 인증 흐름', type:'table',
    head:['구성요소','역할','비고'],
    rows:[
      ['SecurityFilterChain','요청이 거치는 ★필터 체인★','설정의 중심'],
      ['AuthenticationManager','인증 위임·수행','ProviderManager 가 구현'],
      ['UserDetailsService','사용자 정보 조회','DB·외부 연동'],
      ['PasswordEncoder','비밀번호 검증','★BCrypt★ 등 솔트+반복'],
      ['SecurityContextHolder','인증 정보 보관','★ThreadLocal 기반★'],
      ['인증 vs 인가','누구인가 vs 무엇을 할 수 있는가','401 vs 403 과 대응'],
      ['메서드 보안','@PreAuthorize · @Secured','서비스 계층 권한 검사'],
      ['OAuth 2.0 / OIDC','인가 프레임워크 / + 인증·ID Token','★Authorization Code + PKCE★ 권장']
    ]
  },
  {
    s:'s4', title:'★ 웹 취약점과 근본 대응 (OWASP 관점)', type:'table',
    head:['취약점','원인','근본 대응'],
    rows:[
      ['SQL 인젝션','쿼리 문자열 연결','★PreparedStatement·파라미터 바인딩★'],
      ['XSS','사용자 입력을 그대로 출력','★출력 인코딩★ + CSP + HttpOnly 쿠키'],
      ['CSRF','쿠키가 자동 전송됨','CSRF 토큰 · ★SameSite★ · Referer 검증'],
      ['SSRF','서버가 임의 URL 로 요청','URL 화이트리스트 · 메타데이터 IP 차단'],
      ['민감정보 노출','로그·에러 응답에 그대로 출력','토큰·비밀번호 로그 금지 · 스택 비노출'],
      ['의존성 취약점','오래된 라이브러리','SCA 도구(Dependabot·OWASP DC)'],
      ['파일 업로드','실행 가능한 파일 저장','확장자 화이트리스트·매직 넘버·웹 루트 외부'],
      ['과다 요청','제한 없는 호출','레이트 리밋(429) · 요청 크기 제한']
    ]
  },
  {
    s:'s5', title:'★ 디자인 패턴 — 스프링 실무 사용처', type:'table',
    head:['패턴','해결하는 문제','실무 사례'],
    rows:[
      ['★전략★','조건 분기 폭발','결제 수단별 구현체 분리 — OCP 의 정석'],
      ['팩터리','생성 책임 분리','타입에 따른 객체 생성 집중'],
      ['템플릿 메서드','공통 흐름 고정 + 일부 위임','JdbcTemplate · RestTemplate'],
      ['★프록시·데코레이터★','부가 기능 위임','스프링 AOP · 트랜잭션·캐시'],
      ['옵서버','발행-구독 결합도 감소','ApplicationEvent · 도메인 이벤트'],
      ['빌더','파라미터가 많은 객체 생성','롬복 @Builder'],
      ['싱글턴','인스턴스 1개 보장','스프링 빈이 사실상 싱글턴'],
      ['★주의★','패턴 이름 나열은 감점','적용 맥락·대안·비용을 함께 말할 것']
    ]
  },
  {
    s:'s5', title:'★ 시스템 설계 면접 진행 6단계', type:'list',
    items:[
      '① 요구사항 확인 — 기능·비기능·규모를 ★질문으로 먼저★ 좁힌다',
      '② 개략 추정 — QPS·저장량·읽기/쓰기 비율 (숫자를 소리 내어 계산)',
      '③ API 와 데이터 모델 — 엔드포인트·키 설계·인덱스',
      '④ 개략 아키텍처 — LB · WAS · DB · 캐시 · 큐 배치',
      '⑤ 병목과 확장 — 읽기 레플리카·캐시·샤딩·비동기',
      '⑥ 장애 대응과 트레이드오프 정리 — 무엇을 포기했는지 명시',
      '★혼자 결론부터 그리지 말고 면접관과 대화하며 좁혀 간다★',
      '규모 확장은 ★수평 확장★ 이 기본 — 전제는 무상태 서버(세션 외부화)',
      'DB 병목은 인덱스·쿼리 → 읽기 레플리카 → 캐시 → 샤딩 순으로 검토',
      '3대 단골 원인: ★N+1 · 풀 스캔 · 커넥션 풀 고갈★'
    ]
  },
  {
    s:'s6', title:'★ Redis · Kafka 운영 요점', type:'table',
    head:['구분','항목','핵심'],
    rows:[
      ['Redis','명령 처리 모델','★싱글 스레드★ — O(n) 명령이 전체를 블로킹'],
      ['Redis','운영 금지 명령','KEYS · FLUSHALL → ★SCAN★ 으로 대체'],
      ['Redis','활용','캐시 · 세션 저장소 · 분산 락 · 순위표(Sorted Set) · 레이트 리밋'],
      ['Redis','분산 락','SET NX PX(★만료 필수★) + 소유자 토큰 확인 후 해제'],
      ['Redis','영속화','RDB(스냅샷) / AOF(명령 로그) — 조합 사용'],
      ['Kafka','순서 보장','★파티션 단위★ — 필요하면 키로 파티션 고정'],
      ['Kafka','병렬 소비','파티션 수 ≥ 컨슈머 수 여야 병렬도가 오른다'],
      ['Kafka','전달 보장','★at-least-once★ 가 일반 — 소비자 멱등 처리 전제'],
      ['선택','Kafka vs RabbitMQ','대용량 로그·재처리 vs 라우팅·워크 큐']
    ]
  },
  {
    s:'s6', title:'★ 관측 3요소와 장애 대응 순서', type:'table',
    head:['구분','항목','핵심'],
    rows:[
      ['관측','메트릭','Prometheus + Grafana (Micrometer 로 노출)'],
      ['관측','로그','구조화 로그(JSON) + 중앙 수집(ELK·Loki)'],
      ['관측','트레이스','Zipkin·OpenTelemetry — ★TraceId 로 요청 추적★'],
      ['지표','★RED★ (요청 기반)','Rate · Errors · Duration'],
      ['지표','★USE★ (자원 기반)','Utilization · Saturation · Errors'],
      ['지표','자바 특화','힙 사용량 · GC 시간 · 스레드 수 · 커넥션 풀 사용률'],
      ['장애','① 인지 → ② 영향 범위 → ③ ★완화★','롤백·스케일아웃·서킷 — 회복이 원인 규명보다 먼저'],
      ['장애','④ 원인 → ⑤ 재발 방지 → ⑥ 포스트모템','★비난 없는 회고★'],
      ['로그','금지','개인정보·토큰·비밀번호 출력 · ERROR 레벨 남발']
    ]
  },
  {
    s:'s7', title:'★ 입력 크기별 허용 복잡도 (1초 기준)', type:'table',
    head:['입력 크기','허용 복잡도','대표 접근'],
    rows:[
      ['n ≤ 10','O(n!) · O(2ⁿ)','완전 탐색 · 백트래킹'],
      ['n ≤ 1,000','O(n²)','이중 반복 · DP 표'],
      ['n ≤ 100,000','★O(n log n)★','정렬 · 이분 탐색 · 우선순위 큐'],
      ['n ≤ 1,000,000','O(n) · O(n log n)','투 포인터 · 슬라이딩 윈도우 · 해시'],
      ['n ≥ 10,000,000','O(n) 이하','수학적 접근 · 누적합'],
      ['정렬','객체는 ★TimSort(안정)★ / 기본형은 듀얼 피벗 퀵소트','안정성 필요 여부가 선택 근거'],
      ['최단 경로','가중치 없음 BFS / 있음 다익스트라','★음수 간선은 벨만-포드★'],
      ['모든 쌍 최단','플로이드-워셜 O(V³)','정점 수가 작을 때'],
      ['핵심','★제한 조건이 알고리즘을 지정한다★','문제를 읽고 n 부터 확인']
    ]
  },
  {
    s:'s7', title:'★ 요구별 자료구조 선택', type:'table',
    head:['요구','선택','근거'],
    rows:[
      ['인덱스로 빠른 조회','ArrayList · 배열','get O(1) · 캐시 지역성'],
      ['중복 제거','HashSet','평균 O(1) 포함 판정'],
      ['정렬 유지 · 범위 조회','TreeMap · TreeSet','레드-블랙 트리 O(log n)'],
      ['입력 순서 유지','LinkedHashMap · LinkedHashSet','삽입 순서 보존'],
      ['★LRU 캐시★','LinkedHashMap(accessOrder)','removeEldestEntry 재정의'],
      ['최댓값 반복 추출','PriorityQueue(힙)','offer·poll O(log n)'],
      ['양끝 삽입·삭제','★ArrayDeque★','BFS 큐·스택 (Stack 은 레거시)'],
      ['접두사 검색','Trie','자동완성'],
      ['그룹 병합·연결 판정','Union-Find','서로소 집합'],
      ['구간 합·갱신','누적합 · 세그먼트 트리','질의 수가 많을 때']
    ]
  },
  {
    s:'s7', title:'★ 자바 코딩 테스트 실전 팁', type:'list',
    items:[
      '입력이 크면 ★BufferedReader + StringTokenizer★ — Scanner 는 시간 초과의 단골 원인',
      '출력이 많으면 ★StringBuilder 로 모아 한 번에★ 출력',
      'int 범위는 약 ±21억 — 누적합·곱셈은 ★long★ 으로',
      '재귀 깊이가 수십만이면 스택 오버플로 → 반복문(명시적 스택)으로 전환',
      '이분 탐색은 정렬이 전제 — ★정렬 비용까지 복잡도에 포함★',
      '파라메트릭 서치(답 자체를 이분 탐색)는 최근 빈출 유형',
      '그리디는 "왜 최적인가" 근거가 없으면 반례에 걸린다',
      'DFS 는 경로·조합·백트래킹, BFS 는 ★가중치 없는 최단 거리★',
      'Comparator.comparing().thenComparing().reversed() 로 다중 정렬 기준 조합',
      '문제를 읽고 ★n 의 범위부터 확인★ 하는 습관이 절반이다'
    ]
  },
  {
    s:'s8', title:'★ 미리 준비할 경험 5종 (STAR 슬롯)', type:'table',
    head:['슬롯','질문 형태','반드시 담을 것'],
    rows:[
      ['① 성능·품질 개선','가장 성과가 컸던 개선은?','원인 측정 → 조치 → ★수치 결과★'],
      ['② 장애 해결','장애를 겪은 경험은?','완화 우선 판단 · 원인 · 재발 방지'],
      ['③ 기술 선택','왜 그 기술을 골랐나요?','대안 비교 · ★트레이드오프★ · 결과'],
      ['④ 협업·갈등 조율','의견 충돌은 어떻게?','감정 아닌 ★근거·데이터★ · 결정 후 수용'],
      ['⑤ 실패·배움','실패한 경험은?','무엇을 바꿨는가(성찰이 신뢰를 만든다)'],
      ['공통 골격','S 상황 → T 과제 → A ★내가 한 행동★ → R 수치','팀이 아니라 나의 기여'],
      ['수치가 없을 때','정직하게 범위로 말한다','★지어낸 수치는 꼬리 질문에서 무너진다★']
    ]
  },
  {
    s:'s8', title:'★ 이직 사유 — 회피형을 지향형으로', type:'table',
    head:['회피형(감점)','지향형(권장)','비고'],
    rows:[
      ['레거시가 너무 심해서','테스트·리팩터링이 자리 잡은 환경에서 품질을 올리고 싶습니다','문제를 탓하지 않고 목표로 전환'],
      ['야근이 많아서','지속 가능한 개발 문화에서 장기적으로 기여하고 싶습니다','근무 조건은 처우 협의에서'],
      ['연봉이 낮아서','기여한 만큼 평가받는 구조에서 성장하고 싶습니다','연봉은 별도 단계에서 논의'],
      ['사수가 없어서','코드 리뷰와 기술 논의가 활발한 팀에서 배우고 싶습니다','지원 회사에서 가능한지 연결'],
      ['짧은 재직 기간','사실 + 배운 것 + 다음 선택 기준','변명보다 ★성찰★ 이 신뢰를 얻음'],
      ['★절대 금지★','전 직장·상사·동료 험담','나가서도 그렇게 말할 사람으로 읽힘'],
      ['마무리','지향점이 이 회사에서 가능한 이유','30초 안에 끝낼 것']
    ]
  },
  {
    s:'s8', title:'★ 역질문 은행 (면접 유형별 3개씩)', type:'list',
    items:[
      '[실무자 면접] 합류하면 처음 3~6개월 동안 맡게 될 업무는 무엇인가요?',
      '[실무자 면접] 백엔드 팀의 코드 리뷰는 어떤 방식으로 진행되나요?',
      '[실무자 면접] 지금 팀이 겪는 가장 큰 기술적 어려움은 무엇인가요?',
      '[팀장·리드] 팀이 앞으로 1년간 집중할 기술 과제는 무엇인가요?',
      '[팀장·리드] 기술 부채를 개선할 시간이 일정에 반영되나요?',
      '[팀장·리드] 배포 주기와 무중단 배포 방식이 궁금합니다',
      '[임원·인사] 오래 일한 분들은 어떤 점 때문에 남아 계신가요?',
      '[임원·인사] 이 포지션이 조직에서 어떤 역할을 기대받나요?',
      '★피해야 할 역질문★ 연봉·복지만 묻기 · 홈페이지에 다 있는 내용 묻기',
      '"야근 많나요?" 는 ★"일정 관리는 어떻게 하시나요?"★ 로 순화'
    ]
  },
  {
    s:'s5', title:'★ 도메인 공통 설계 문법 (업종 무관)', type:'table',
    head:['문법','내용','면접에서 쓰는 자리'],
    rows:[
      ['★상태 머신★','상태는 열거형 + 허용 전이만 정의','주문·예약·결제 설계 질문'],
      ['현재 상태 + 이력','상태 컬럼과 변경 이력 테이블을 함께','누가·언제·왜 바꿨는가'],
      ['★멱등성★','같은 입력이면 같은 결과','멱등 키·유니크 제약·처리 이력'],
      ['원장(Ledger)','값을 덮어쓰지 않고 쌓고 잔액은 파생','잔액·재고 사고 복구'],
      ['★대사(정합성 검증)★','내부 원장 vs 외부 내역 대조 배치','틀린 것을 찾아내는 장치'],
      ['보상 트랜잭션','외부가 낀 흐름은 반대 동작으로 되돌림','Saga·아웃박스와 연결'],
      ['금액·시간','금액은 정수·BigDecimal(★double 금지★) / 시간은 UTC 저장','정산 오차·마감 기준'],
      ['정책은 데이터로','수수료율·유예 기간은 코드가 아닌 설정·테이블','정책 변경에 배포가 필요한가']
    ]
  },
  {
    s:'s5', title:'★ 업종별 핵심 난제 한 줄 (도메인 면접 대비)', type:'table',
    head:['업종','핵심 난제','대표 답변 키워드'],
    rows:[
      ['커머스','재고 동시성 · 부분 취소 금액 안분','원자 UPDATE · 주문상품 단위 · 금액 스냅샷'],
      ['결제·핀테크','결과를 모르는 상태(In-doubt)','멱등 키 · 조회 API 재확인 · 미결 상태'],
      ['결제·핀테크','승인/매입/취소/환불 용어','매입 전 취소는 전액, 이후는 부분 환불'],
      ['예약·티켓팅','좌석 선점과 만료','TTL 선점 · (자원,시간) 유니크 · 대기열'],
      ['물류·배송','외부 상태 이벤트가 순서 없이 도착','이벤트 시각 기준 최신값 · 역행 무시'],
      ['광고','대량 이벤트 집계와 중복','이벤트 ID dedup · 재실행 가능한 집계'],
      ['소셜·피드','타임라인 생성 비용','fan-out write/read ★혼합★'],
      ['구독·빌링','중도 변경 일할 계산·결제 실패','프로레이션 · 던닝(유예와 재시도)'],
      ['★공통★','도메인 경험이 없을 때','"도메인은 다르지만 문제 구조가 같습니다"']
    ]
  }
];

/* ── 4. 함정 노트 ───────────────────────────────────────── */
CPPG.traps = [
  { s:'s1', t:'"LinkedList 가 삽입에 항상 빠르다"는 오답 — 탐색 비용과 캐시 지역성 때문에 대체로 느리다' },
  { s:'s1', t:'equals 만 재정의하면 해시 기반 컬렉션에서 값을 찾지 못한다' },
  { s:'s1', t:'volatile 은 가시성만 보장한다 — i++ 는 원자적이지 않다' },
  { s:'s1', t:'Java 8 에서 PermGen 은 커진 것이 아니라 제거되고 Metaspace 로 대체됐다' },
  { s:'s1', t:'System.gc() 는 요청일 뿐 GC 실행을 보장하지 않는다' },
  { s:'s1', t:'Executors 기본 팩터리는 무제한 큐·스레드라 OOM 위험이 있다' },
  { s:'s1', t:'ThreadLocal 을 스레드 풀에서 remove 하지 않으면 값이 다음 요청에 새어 나간다' },
  { s:'s1', t:'병렬 스트림은 항상 빠르지 않다 — 작은 데이터·I/O 에는 오히려 손해' },
  { s:'s1', t:'스트림은 재사용할 수 없다 — 한 번 소비하면 끝' },
  { s:'s1', t:'Optional 을 필드·파라미터에 남용하지 않는다(반환 타입 용도)' },
  { s:'s2', t:'같은 클래스 내부 호출에는 @Transactional·@Cacheable·@Async 가 걸리지 않는다' },
  { s:'s2', t:'@Transactional 은 기본적으로 체크드 예외를 롤백하지 않는다' },
  { s:'s2', t:'예외를 try-catch 로 삼키면 롤백되지 않는다' },
  { s:'s2', t:'private·final 메서드에는 프록시가 적용되지 않는다' },
  { s:'s2', t:'싱글턴 빈에 인스턴스 필드로 상태를 두면 동시성 버그가 난다' },
  { s:'s2', t:'싱글턴 빈에 프로토타입 빈을 주입하면 처음 것만 계속 쓰인다' },
  { s:'s2', t:'필드 주입은 테스트·불변성에 불리하므로 지양한다' },
  { s:'s2', t:'REQUIRES_NEW 는 별도 커넥션을 점유해 커넥션 풀 고갈·데드락을 부를 수 있다' },
  { s:'s2', t:'자동 설정은 내가 정의한 빈이 있으면 물러난다(@ConditionalOnMissingBean)' },
  { s:'s2', t:'@SpringBootTest 를 단위 테스트에 남발하면 빌드가 급격히 느려진다' },
  { s:'s2', t:'Actuator 를 인증 없이 열어두면 운영 정보가 노출된다' },
  { s:'s3', t:'@ManyToOne·@OneToOne 의 기본 페치 전략은 EAGER 다 — 명시적으로 LAZY 로' },
  { s:'s3', t:'mappedBy 쪽 @OneToOne 은 지연 로딩이 동작하지 않는다' },
  { s:'s3', t:'컬렉션 fetch join 은 하나만 가능하고 페이징과 함께 쓰면 메모리 페이징이 된다' },
  { s:'s3', t:'연관관계 주인이 아닌 쪽에만 값을 넣으면 DB 에 반영되지 않는다' },
  { s:'s3', t:'벌크 연산은 영속성 컨텍스트를 우회한다 — 실행 후 clear 필요' },
  { s:'s3', t:'merge 는 null 필드까지 덮어쓴다 — 조회 후 변경 감지 방식을 권장' },
  { s:'s3', t:'엔티티에 @Data·연관 포함 @ToString 을 쓰면 순환 참조·지연 로딩이 폭발한다' },
  { s:'s3', t:'flush 는 영속성 컨텍스트를 비우지 않는다(비우는 것은 clear)' },
  { s:'s3', t:'준영속 상태 엔티티는 변경 감지가 동작하지 않는다' },
  { s:'s3', t:'복합 인덱스 (A, B) 에서 B 단독 조건은 인덱스를 타지 못한다' },
  { s:'s3', t:'WHERE 절 컬럼을 가공하거나 형 변환이 일어나면 인덱스를 타지 못한다' },
  { s:'s3', t:'커넥션 풀을 무작정 늘리면 DB 가 병목이 되어 오히려 느려진다' },
  { s:'s4', t:'POST 와 PATCH 는 멱등하지 않다 — 재시도 설계 시 멱등 키가 필요' },
  { s:'s4', t:'401 은 인증 실패, 403 은 권한 없음 — 혼동이 가장 잦다' },
  { s:'s4', t:'CORS 는 서버가 해결한다 — 프론트 설정으로 우회할 수 없다' },
  { s:'s4', t:'Access-Control-Allow-Credentials: true 와 Allow-Origin: * 는 함께 쓸 수 없다' },
  { s:'s4', t:'JWT 페이로드는 Base64 인코딩일 뿐 암호화가 아니다' },
  { s:'s4', t:'JWT 는 즉시 무효화가 어렵다 — 짧은 만료·리프레시 회전·블랙리스트로 보완' },
  { s:'s4', t:'로컬 스토리지의 토큰은 XSS 한 번에 탈취된다' },
  { s:'s4', t:'OAuth 2.0 은 인가 프레임워크다 — 인증까지 필요하면 OIDC' },
  { s:'s4', t:'비밀번호를 단순 SHA-256 으로 저장하면 안 된다(너무 빠름) — BCrypt·Argon2' },
  { s:'s4', t:'세션 고정(sticky session)은 수평 확장·무중단 배포에 불리하다' },
  { s:'s5', t:'"MSA 가 무조건 좋다"는 답은 감점 — 조직·규모·운영 역량 기준으로 답한다' },
  { s:'s5', t:'측정 없이 캐시·비동기부터 도입하는 것은 안티패턴' },
  { s:'s5', t:'재시도만 추가하면 장애가 증폭된다 — 타임아웃·백오프·서킷과 함께' },
  { s:'s5', t:'멱등하지 않은 API 를 재시도하면 중복 처리가 발생한다' },
  { s:'s5', t:'엔티티를 API 응답으로 노출하면 DB 스키마와 API 스펙이 결합된다' },
  { s:'s5', t:'디자인 패턴 이름만 나열하면 오히려 감점 — 적용 맥락과 대안을 말한다' },
  { s:'s5', t:'시스템 설계 질문에서 요구사항 확인 없이 그림부터 그리면 감점' },
  { s:'s5', t:'캐시 스탬피드 대비 없이 TTL 을 동일하게 주면 만료 시점에 원본이 폭주한다' },
  { s:'s6', t:'운영 Redis 에서 KEYS·FLUSHALL 사용 금지 — 싱글 스레드가 블로킹된다' },
  { s:'s6', t:'Kafka 는 토픽 전체가 아니라 파티션 단위로만 순서를 보장한다' },
  { s:'s6', t:'메시지 전달은 대체로 at-least-once — 소비자 멱등 처리가 전제' },
  { s:'s6', t:'배포와 동시에 컬럼 삭제·이름 변경을 하면 배포 중 구버전이 깨진다' },
  { s:'s6', t:'컨테이너에서 JVM 힙을 지정하지 않으면 메모리 한도를 넘겨 OOMKilled 된다' },
  { s:'s6', t:'로그에 토큰·개인정보를 남기면 그 자체가 보안 사고다' },
  { s:'s6', t:'AWS 액세스 키를 소스·이미지에 넣지 않는다 — IAM 역할 사용' },
  { s:'s6', t:'장애 시 원인 규명보다 서비스 회복(완화)이 먼저다' },
  { s:'s7', t:'Scanner 로 대용량 입력을 받으면 시간 초과가 난다 — BufferedReader 사용' },
  { s:'s7', t:'int 범위(약 ±21억)를 넘는 누적합은 long 을 쓴다' },
  { s:'s7', t:'이분 탐색은 정렬이 전제 — 정렬 비용까지 복잡도에 포함한다' },
  { s:'s7', t:'Stack 클래스는 레거시(동기화) — ArrayDeque 를 쓴다' },
  { s:'s7', t:'그리디는 "왜 최적인가" 근거 없이 쓰면 반례에 걸린다' },
  { s:'s8', t:'전 직장·상사 험담은 즉시 감점 요인이다' },
  { s:'s8', t:'이직 사유를 회피형으로 말하면 "같은 이유로 또 나갈 사람"이 된다' },
  { s:'s8', t:'성과를 "우리 팀이" 로만 말하면 내 기여가 드러나지 않는다' },
  { s:'s8', t:'수치를 지어내면 꼬리 질문에서 무너진다 — 모르면 정직하게' },
  { s:'s8', t:'역질문 "없습니다"는 관심 없음으로 읽힌다' },
  { s:'s8', t:'모르는 것을 아는 척하는 것이 모른다고 하는 것보다 훨씬 치명적이다' },
  { s:'s8', t:'이력서에 쓴 기술은 전부 질문 대상 — 설명 못 할 기술은 쓰지 않는다' }
];

/* ── 5. 자가진단 ────────────────────────────────────────── */
CPPG.selfcheck = [
  { s:'s1', t:'HashMap 내부 동작을 충돌·트리화·리사이즈까지 설명한다' },
  { s:'s1', t:'JVM 메모리 영역과 GC 종류를 구분해 말한다' },
  { s:'s1', t:'OOM 유형별 원인과 분석 절차를 설명한다' },
  { s:'s1', t:'volatile·synchronized·Atomic 을 구분한다' },
  { s:'s2', t:'생성자 주입 권장 이유를 4가지 말한다' },
  { s:'s2', t:'@Transactional 미동작 원인 4가지를 즉답한다' },
  { s:'s2', t:'트랜잭션 전파 REQUIRED·REQUIRES_NEW 를 구분한다' },
  { s:'s2', t:'자동 설정이 @Conditional 로 동작하는 원리를 설명한다' },
  { s:'s3', t:'영속성 컨텍스트의 이점 5가지를 말한다' },
  { s:'s3', t:'N+1 을 겪은 경험을 수치와 함께 설명한다' },
  { s:'s3', t:'컬렉션 fetch join 의 제약과 대안을 안다' },
  { s:'s3', t:'인덱스를 못 타는 경우 4가지를 즉답한다' },
  { s:'s4', t:'세션과 JWT 를 트레이드오프로 비교한다' },
  { s:'s4', t:'CORS 프리플라이트가 언제 발생하는지 안다' },
  { s:'s4', t:'SQLi·XSS·CSRF 의 근본 대응을 각각 말한다' },
  { s:'s5', t:'SOLID 를 내 코드 사례로 설명한다' },
  { s:'s5', t:'성능 개선을 측정 기반 절차로 설명한다' },
  { s:'s5', t:'Saga·아웃박스·멱등 소비를 설명한다' },
  { s:'s6', t:'무중단 배포와 DB 마이그레이션 단계 분리를 설명한다' },
  { s:'s6', t:'장애 대응 순서를 완화 우선으로 설명한다' },
  { s:'s7', t:'입력 크기로 허용 복잡도를 역산한다' },
  { s:'s8', t:'이직 사유를 지향형으로 30초 안에 답한다' },
  { s:'s8', t:'STAR 로 정리한 경험 5개를 수치와 함께 말한다' },
  { s:'s8', t:'역질문 3개를 준비했다' }
];

/* ── 6. 로드맵·우선순위 ─────────────────────────────────── */
CPPG.roadmap = {
  '8주 표준': [
    'Week 1 — 이력서·경력기술서 초안 + 프로젝트 회고(수치 복원)',
    'Week 2 — Java·JVM (컬렉션·동시성·GC)',
    'Week 3 — Spring·Spring Boot (DI·AOP·트랜잭션·MVC)',
    'Week 4 — JPA·데이터베이스 (영속성 컨텍스트·N+1·인덱스·격리 수준)',
    'Week 5 — 웹·네트워크·보안 + 아키텍처·설계',
    'Week 6 — 인프라·데브옵스 + 코딩 테스트 감 회복',
    'Week 7 — 시스템 설계 연습 + 모의 면접(★소리 내어 말하기★)',
    'Week 8 — 회사별 맞춤(공고 역산) + 인성·역질문 정리'
  ],
  '4주 단기': [
    'Week 1 — 이력서 + Java·Spring 핵심',
    'Week 2 — JPA·DB + 웹·네트워크',
    'Week 3 — 설계·인프라 + 코딩 테스트',
    'Week 4 — 모의 면접 + 경험 서사 다듬기'
  ]
};

CPPG.tiers = {
  'Tier 1 ★★★ (거의 매번)': ['HashMap 내부 동작','GC·JVM 메모리 구조','생성자 주입·빈 스코프','@Transactional 미동작 원인','트랜잭션 전파','영속성 컨텍스트·변경 감지','★N+1 경험★','인덱스를 못 타는 경우','세션 vs JWT','401 vs 403','★이직 사유★','성능 개선 경험(수치)'],
  'Tier 2 ★★ (자주)': ['동시성(volatile·Atomic·스레드 풀)','AOP 프록시·자기 호출','자동 설정 원리','낙관적/비관적 락','격리 수준','CORS·프리플라이트','Spring Security 필터 체인','SOLID 사례','캐시 전략·스탬피드','배포 전략·무중단','Redis·Kafka 활용','장애 대응 경험'],
  'Tier 3 ★ (직급·회사에 따라)': ['MSA·Saga·아웃박스','시스템 설계 면접','가상 스레드·리액티브','ZGC 등 저지연 GC','Kubernetes 상세','옵저버빌리티 도구 체인','코딩 테스트 고급 알고리즘']
};

/* ── 7. 난이도 정의 ─────────────────────────────────────── */
CPPG.levels = [
  { d:1, name:'기초', desc:'용어·정의 — 막히면 곤란한 문항',            color:'#34d399' },
  { d:2, name:'표준', desc:'동작 원리·비교 — 합격을 가르는 문항',        color:'#5b9dff' },
  { d:3, name:'심화', desc:'사례 판단·트레이드오프 — 변별력 문항',       color:'#fb7185' }
];

/* ═══════════════════════════════════════════════════════════
   8. 문제은행 — 8개 분야
   d: 1=기초 · 2=표준 · 3=심화
   ═══════════════════════════════════════════════════════════ */

CPPG.mcq = [
  // ───────── 1. Java · JVM ─────────
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'자바 8 이상의 HashMap 에서 한 버킷의 충돌이 임계치를 넘으면 어떤 구조로 바뀌는가?', c:['배열','레드-블랙 트리','스킵 리스트','힙'], a:1, e:'최악 O(n)을 O(log n)으로 낮추기 위해 트리화된다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'equals() 만 재정의하고 hashCode() 를 재정의하지 않으면 생기는 문제는?', c:['컴파일 오류','HashMap·HashSet 에서 값을 찾지 못한다','직렬화가 실패한다','GC 대상에서 제외된다'], a:1, e:'다른 버킷을 탐색하게 되어 조회에 실패한다.' },
  { s:'s1', t:'동시성 · Java 8+', d:1, q:'Java 8 부터 클래스 메타데이터가 저장되는 영역은?', c:['PermGen','Metaspace','Young Generation','스택'], a:1, e:'PermGen 이 제거되고 네이티브 메모리의 Metaspace 로 이동했다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'GC 의 수거 대상이 되는 객체의 기준은?', c:['참조 카운트가 0인 객체','GC 루트에서 도달할 수 없는 객체','오래된 객체','크기가 큰 객체'], a:1, e:'자바 GC 는 도달 가능성(reachability) 기반이다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'volatile 키워드가 보장하는 것은?', c:['원자성','가시성','상호배제','순서와 원자성 모두'], a:1, e:'가시성만 보장하므로 i++ 같은 복합 연산에는 부족하다.' },
  { s:'s1', t:'동시성 · Java 8+', d:3, q:'멀티스레드 환경에서 카운터를 안전하게 증가시키는 방법으로 적절하지 않은 것은?', c:['AtomicInteger 사용','synchronized 블록','ReentrantLock','volatile int 사용'], a:3, e:'volatile 은 원자성을 보장하지 않는다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'ArrayList 와 LinkedList 에 대한 설명으로 옳은 것은?', c:['LinkedList 는 인덱스 조회가 O(1)이다','ArrayList 는 중간 삽입이 O(1)이다','실무에서는 대체로 ArrayList 가 유리하다','LinkedList 는 메모리를 더 적게 쓴다'], a:2, e:'캐시 지역성 때문에 실제 성능은 ArrayList 가 나은 경우가 많다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'Executors.newFixedThreadPool() 대신 ThreadPoolExecutor 를 직접 구성하라고 권장하는 이유는?', c:['성능이 더 빠르다','큐·거부 정책을 지정하지 않으면 OOM 위험이 있다','스레드 이름을 지정할 수 없다','예외 처리가 불가능하다'], a:1, e:'기본 팩터리는 무제한 큐를 사용해 메모리가 계속 쌓일 수 있다.' },
  { s:'s1', t:'동시성 · Java 8+', d:3, q:'스레드 풀 환경에서 ThreadLocal 을 사용할 때 반드시 해야 하는 것은?', c:['static 으로 선언','사용 후 remove() 호출','synchronized 로 감싸기','volatile 선언'], a:1, e:'스레드가 재사용되므로 값이 다음 요청으로 새어 나간다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'String 이 불변으로 설계된 이유로 거리가 먼 것은?', c:['문자열 상수 풀 공유','스레드 안전성','해시코드 캐싱','메모리 사용량 최소화'], a:3, e:'불변이라 연결 시 새 객체가 생겨 오히려 메모리를 더 쓸 수 있다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'자바 스트림에 대한 설명으로 옳은 것은?', c:['중간 연산에서 즉시 실행된다','한 번 소비한 스트림을 재사용할 수 있다','최종 연산이 호출될 때 실행된다','병렬 스트림은 항상 더 빠르다'], a:2, e:'중간 연산은 지연 평가되고 최종 연산에서 파이프라인이 실행된다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'OutOfMemoryError: Metaspace 의 주된 원인은?', c:['객체 누수','클래스가 과도하게 로딩됨','스택 깊이 초과','스레드 수 부족'], a:1, e:'동적 프록시·클래스 리로딩 과다에서 자주 발생한다.' },

  // ───────── 2. Spring · Spring Boot ─────────
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'생성자 주입을 권장하는 이유로 거리가 먼 것은?', c:['final 로 불변을 보장할 수 있다','순환 참조를 기동 시점에 발견할 수 있다','프레임워크 없이 테스트하기 쉽다','런타임에 의존성을 교체할 수 있다'], a:3, e:'런타임 교체는 생성자 주입의 이점이 아니다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:3, q:'같은 클래스 안의 다른 메서드를 this 로 호출했더니 @Transactional 이 동작하지 않았다. 원인은?', c:['트랜잭션 매니저 미설정','프록시를 거치지 않아서','격리 수준이 낮아서','readOnly 가 true 라서'], a:1, e:'스프링 AOP 는 프록시 기반이라 자기 호출에는 적용되지 않는다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'@Transactional 의 기본 롤백 대상은?', c:['모든 예외','체크드 예외','언체크드 예외(RuntimeException·Error)','예외 없이 항상 커밋'], a:2, e:'체크드 예외를 롤백하려면 rollbackFor 를 지정한다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'메인 로직이 실패해도 이력은 남겨야 할 때 적절한 트랜잭션 전파 속성은?', c:['REQUIRED','REQUIRES_NEW','SUPPORTS','MANDATORY'], a:1, e:'별도 트랜잭션으로 분리한다. 다만 커넥션을 추가로 점유한다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'스프링 AOP 의 프록시 생성 방식에 대한 설명으로 옳은 것은?', c:['항상 JDK 동적 프록시를 사용한다','인터페이스가 없으면 CGLIB 을 사용한다','컴파일 시점에 위빙한다','필드 접근도 가로챌 수 있다'], a:1, e:'스프링 부트는 기본적으로 CGLIB 을 사용한다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'싱글턴 빈에 프로토타입 빈을 주입했을 때 나타나는 현상은?', c:['매번 새 인스턴스가 주입된다','최초 주입된 인스턴스가 계속 사용된다','컴파일 오류가 발생한다','요청마다 컨텍스트가 재생성된다'], a:1, e:'ObjectProvider·@Lookup 으로 매번 조회해야 한다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'DispatcherServlet 의 요청 처리 순서로 옳은 것은?', c:['HandlerMapping → DispatcherServlet → 컨트롤러','DispatcherServlet → HandlerMapping → HandlerAdapter → 컨트롤러','컨트롤러 → HandlerAdapter → DispatcherServlet','ViewResolver → DispatcherServlet → 컨트롤러'], a:1, e:'프론트 컨트롤러가 매핑과 어댑터를 거쳐 핸들러를 실행한다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'CORS 나 문자 인코딩처럼 DispatcherServlet 앞단에서 처리해야 하는 관심사에 적합한 것은?', c:['필터','인터셉터','AOP','ArgumentResolver'], a:0, e:'필터는 서블릿 스펙 레벨로 디스패처보다 앞에 위치한다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'Spring Boot 자동 설정이 사용자가 정의한 빈을 덮어쓰지 않는 이유는?', c:['@Primary 때문','@ConditionalOnMissingBean 때문','컴포넌트 스캔 순서 때문','프로파일 때문'], a:1, e:'해당 타입의 빈이 없을 때만 자동 설정이 적용된다.' },
  { s:'s2', t:'MVC · Spring Boot', d:3, q:'스프링 부트에서 설정 값의 우선순위가 가장 높은 것은?', c:['application.yml','환경 변수','커맨드라인 인자','기본값'], a:2, e:'커맨드라인 인자 → 환경 변수 → 설정 파일 순이다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'웹 계층만 빠르게 테스트하려 할 때 적절한 애너테이션은?', c:['@SpringBootTest','@WebMvcTest','@DataJpaTest','@ExtendWith'], a:1, e:'MockMvc 와 함께 컨트롤러 계층만 로딩한다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:3, q:'@Transactional(readOnly = true) 를 붙였을 때 JPA 에서 얻는 이점은?', c:['락을 자동으로 건다','스냅샷 저장과 변경 감지를 생략한다','격리 수준이 올라간다','쿼리가 캐싱된다'], a:1, e:'메모리 사용과 flush 비용이 줄어든다.' },

  // ───────── 3. JPA · 데이터베이스 ─────────
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'엔티티 값을 수정했는데 update 를 호출하지 않아도 반영되는 이유는?', c:['자동 커밋 때문','변경 감지(Dirty Checking) 때문','2차 캐시 때문','트리거 때문'], a:1, e:'영속성 컨텍스트가 스냅샷과 비교해 UPDATE 를 생성한다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'flush() 와 clear() 의 차이로 옳은 것은?', c:['flush 는 컨텍스트를 비우고 clear 는 SQL 을 전송한다','flush 는 SQL 을 전송하고 컨텍스트는 유지된다','둘 다 컨텍스트를 비운다','둘 다 트랜잭션을 커밋한다'], a:1, e:'컨텍스트를 비우는 것은 clear 다.' },
  { s:'s3', t:'영속성 컨텍스트', d:1, q:'@ManyToOne 의 기본 페치 전략은?', c:['LAZY','EAGER','SELECT','SUBSELECT'], a:1, e:'실무에서는 명시적으로 LAZY 로 바꾸는 것이 원칙이다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:3, q:'컬렉션 fetch join 과 페이징을 함께 사용할 때 발생하는 문제는?', c:['쿼리가 실패한다','전체 데이터를 메모리로 읽어 페이징한다','중복이 제거되지 않는다','인덱스를 타지 못한다'], a:1, e:'하이버네이트가 경고 로그를 남기며 메모리 페이징을 수행한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'페이징이 필요한 목록에서 N+1 을 해결할 때 가장 적절한 방법은?', c:['컬렉션 fetch join','@BatchSize 또는 default_batch_fetch_size','즉시 로딩으로 변경','2차 캐시 활성화'], a:1, e:'IN 절로 묶어 조회하므로 페이징과 함께 쓸 수 있다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'OSIV 를 비활성화했을 때 나타나는 변화로 옳은 것은?', c:['커넥션 점유 시간이 늘어난다','컨트롤러에서 지연 로딩이 불가능해진다','트랜잭션이 사라진다','2차 캐시가 비활성화된다'], a:1, e:'서비스 계층에서 필요한 데이터를 모두 로딩해야 한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:3, q:'@Modifying 벌크 업데이트 실행 후 조회 결과가 이상하다. 원인은?', c:['트랜잭션이 없어서','영속성 컨텍스트를 우회해 1차 캐시와 불일치','인덱스가 없어서','격리 수준이 낮아서'], a:1, e:'실행 후 clear() 로 컨텍스트를 초기화해야 한다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'MySQL InnoDB 의 기본 트랜잭션 격리 수준은?', c:['READ UNCOMMITTED','READ COMMITTED','REPEATABLE READ','SERIALIZABLE'], a:2, e:'Oracle·PostgreSQL 은 READ COMMITTED 가 기본이다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:3, q:'충돌이 드물고 대기 비용을 피하고 싶을 때 적합한 동시성 제어는?', c:['비관적 락','낙관적 락(@Version)','테이블 락','SERIALIZABLE 격리'], a:1, e:'충돌 시 예외가 발생하므로 재시도 전략이 함께 필요하다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'복합 인덱스 (부서, 입사일) 가 있을 때 인덱스를 활용하지 못하는 조건은?', c:['부서 = ? AND 입사일 > ?','부서 = ?','입사일 > ?','부서 IN (?) AND 입사일 = ?'], a:2, e:'선두 컬럼 없이 후행 컬럼만으로는 인덱스를 타지 못한다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'인덱스가 있는데도 풀 스캔이 발생하는 원인으로 거리가 먼 것은?', c:["WHERE DATE(created_at) = '2026-01-01'",'문자 컬럼에 숫자를 비교','조회 컬럼 수가 많음',"LIKE '%검색어'"], a:2, e:'조회 컬럼 수 자체는 인덱스 사용 여부를 결정하지 않는다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'merge() 사용을 지양하라고 하는 이유는?', c:['성능이 느려서','null 필드까지 덮어써 데이터가 유실될 수 있어서','트랜잭션이 필요해서','JPQL 을 못 써서'], a:1, e:'조회 후 변경 감지 방식이 안전하다.' },

  // ───────── 4. 웹 · 네트워크 · 보안 ─────────
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'HTTP 메서드 중 멱등하지 않은 것으로만 묶인 것은?', c:['GET, PUT','POST, PATCH','PUT, DELETE','GET, DELETE'], a:1, e:'POST 와 PATCH 는 반복 호출 시 결과가 달라질 수 있다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:1, q:'인증은 되었으나 해당 자원에 접근할 권한이 없을 때 적절한 상태 코드는?', c:['400','401','403','404'], a:2, e:'401 은 인증 실패, 403 은 인가 실패다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'CORS 프리플라이트(OPTIONS) 요청이 발생하는 경우로 옳은 것은?', c:["단순 GET 요청","Content-Type: application/json 인 POST","이미지 로딩","같은 출처 요청"], a:1, e:'단순 요청 조건을 벗어나면 사전 확인 요청이 발생한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'세션 방식과 비교한 JWT 의 가장 큰 단점은?', c:['서버 확장이 어렵다','즉시 무효화가 어렵다','암호화가 불가능하다','HTTPS 를 쓸 수 없다'], a:1, e:'만료 전까지 유효하므로 블랙리스트·짧은 만료로 보완한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:3, q:'JWT 를 브라우저 로컬 스토리지에 저장할 때 가장 큰 위험은?', c:['CSRF','XSS 로 인한 토큰 탈취','세션 고정','중간자 공격'], a:1, e:'스크립트가 접근할 수 있어 XSS 한 번에 탈취된다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'JWT 의 Payload 에 대한 설명으로 옳은 것은?', c:['암호화되어 있어 안전하다','Base64 인코딩일 뿐 누구나 디코딩할 수 있다','서명 검증 없이 신뢰할 수 있다','서버만 읽을 수 있다'], a:1, e:'민감 정보를 담아서는 안 된다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'OAuth 2.0 에 대한 설명으로 옳은 것은?', c:['사용자 인증을 위한 프로토콜이다','권한 위임(인가)을 위한 프레임워크다','세션을 대체하는 저장 방식이다','암호화 알고리즘이다'], a:1, e:'인증까지 필요하면 OIDC 를 사용한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'비밀번호 저장 방식으로 가장 적절한 것은?', c:['평문 저장','SHA-256 단일 해시','BCrypt 등 솔트와 반복이 적용된 해시','AES 양방향 암호화'], a:2, e:'단순 해시는 너무 빨라 무차별 대입에 취약하다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:3, q:'결제 API 가 네트워크 재시도로 두 번 호출되는 것을 막는 방법은?', c:['GET 으로 변경','멱등 키(Idempotency-Key) 도입','타임아웃 제거','응답 캐싱'], a:1, e:'서버가 키를 저장해 중복 요청을 같은 결과로 처리한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'XSS 공격의 근본적인 대응 방법은?', c:['입력 길이 제한','출력 시 인코딩','HTTPS 적용','쿠키 삭제'], a:1, e:'CSP·HttpOnly 쿠키를 함께 적용한다.' },

  // ───────── 5. 아키텍처 · 설계 ─────────
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'스프링의 DI 가 근거로 삼는 SOLID 원칙은?', c:['단일 책임 원칙','개방-폐쇄 원칙','리스코프 치환 원칙','의존 역전 원칙'], a:3, e:'구체가 아니라 추상에 의존하게 만든다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'조건 분기가 늘어나는 결제 수단 처리 로직을 개선할 때 적합한 패턴은?', c:['싱글턴','전략 패턴','옵서버','프록시'], a:1, e:'인터페이스 구현체로 분리해 개방-폐쇄 원칙을 만족시킨다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'MSA 도입 여부를 묻는 질문에 대한 답변으로 가장 적절한 것은?', c:['확장성이 좋으므로 항상 도입해야 한다','조직 규모·도메인 경계·운영 역량을 기준으로 판단한다','모놀리식은 이제 사용하지 않는다','트래픽이 적어도 미리 나눠야 한다'], a:1, e:'무조건 찬성·반대는 감점 요인이다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'분산 환경에서 여러 서비스에 걸친 작업의 일관성을 확보하는 대표적 패턴은?', c:['2PC 만 사용','Saga(보상 트랜잭션)','전역 락','단일 DB 로 통합'], a:1, e:'아웃박스 패턴과 멱등 소비를 함께 설계한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'아웃박스(Outbox) 패턴이 해결하는 문제는?', c:['캐시 일관성','DB 커밋과 메시지 발행의 원자성','인덱스 성능','세션 공유'], a:1, e:'DB 트랜잭션 안에 메시지를 저장하고 별도로 발행한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'조회 성능이 느릴 때 가장 먼저 해야 할 일은?', c:['캐시 도입','비동기 처리로 전환','지표와 로그로 병목 측정','DB 스케일 업'], a:2, e:'측정 없이 캐시를 넣으면 문제를 감추기만 한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'인기 캐시 키가 동시에 만료되어 원본 저장소로 요청이 몰리는 현상은?', c:['캐시 미스','캐시 스탬피드','캐시 오염','콜드 스타트'], a:1, e:'만료 지터·뮤텍스·사전 갱신으로 완화한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'외부 API 호출에 재시도를 추가할 때 반드시 함께 고려해야 하는 것은?', c:['타임아웃과 지수 백오프','로그 레벨','JSON 직렬화 방식','스레드 이름'], a:0, e:'재시도만 넣으면 장애를 증폭시킨다. 서킷 브레이커도 함께.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'엔티티를 그대로 API 응답으로 반환하면 생기는 문제로 거리가 먼 것은?', c:['DB 스키마와 API 스펙이 결합된다','양방향 연관에서 순환 참조가 발생할 수 있다','불필요한 내부 필드가 노출된다','트랜잭션이 롤백되지 않는다'], a:3, e:'롤백과는 무관하다. DTO 로 분리하는 것이 원칙이다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'시스템 설계 면접에서 가장 먼저 해야 할 일은?', c:['아키텍처 다이어그램을 그린다','요구사항과 규모를 확인하는 질문을 한다','기술 스택을 정한다','데이터 모델을 작성한다'], a:1, e:'요구사항 확인 없이 그림부터 그리면 감점된다.' },

  // ───────── 6. 인프라 · 데브옵스 ─────────
  { s:'s6', t:'컨테이너 · 배포', d:1, q:'컨테이너가 가상 머신보다 가벼운 이유는?', c:['하드웨어를 직접 제어해서','호스트 커널을 공유하고 게스트 OS 가 없어서','메모리를 압축해서','네트워크를 쓰지 않아서'], a:1, e:'기동 속도가 빠르고 오버헤드가 작다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'즉시 롤백이 가장 쉬운 배포 전략은?', c:['롤링 업데이트','블루-그린','카나리','재생성(recreate)'], a:1, e:'이전 환경이 그대로 남아 있어 스위치만 되돌리면 된다.' },
  { s:'s6', t:'컨테이너 · 배포', d:3, q:'무중단 배포 중 DB 컬럼을 제거해야 할 때 올바른 순서는?', c:['컬럼 삭제 후 배포','배포와 동시에 삭제','신규 컬럼 추가 → 배포 → 데이터 이전 → 기존 컬럼 삭제','롤백 후 삭제'], a:2, e:'단계를 분리하지 않으면 배포 중 구버전이 깨진다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'Kubernetes 에서 트래픽 투입 여부를 판단하는 프로브는?', c:['Liveness','Readiness','Startup','Termination'], a:1, e:'Liveness 는 재시작 여부를 판단한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'운영 중인 Redis 에서 사용을 피해야 하는 명령은?', c:['GET','SCAN','KEYS','EXPIRE'], a:2, e:'싱글 스레드라 O(n) 명령이 전체를 블로킹한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'Kafka 에서 메시지 순서가 보장되는 범위는?', c:['토픽 전체','파티션 단위','컨슈머 그룹 단위','브로커 단위'], a:1, e:'순서가 필요하면 키를 지정해 같은 파티션으로 보낸다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:3, q:'Kafka 의 일반적인 전달 보장 방식과 그에 따른 소비자 설계 원칙은?', c:['exactly-once 이므로 별도 처리 불필요','at-least-once 이므로 멱등 처리 필요','at-most-once 이므로 재전송 필요','보장이 없으므로 DB 트랜잭션 필요'], a:1, e:'중복 소비를 전제로 처리 이력·유니크 키를 둔다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'장애가 발생했을 때 가장 먼저 해야 할 일은?', c:['근본 원인 분석','영향 범위 파악과 완화 조치','포스트모템 작성','코드 리팩터링'], a:1, e:'서비스 회복이 원인 규명보다 우선한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'관측 가능성(Observability)의 3요소로 옳은 것은?', c:['메트릭·로그·트레이스','CPU·메모리·디스크','알림·대시보드·리포트','인증·인가·감사'], a:0, e:'RED·USE 지표와 함께 이해한다.' },
  { s:'s6', t:'컨테이너 · 배포', d:3, q:'컨테이너에서 자바 애플리케이션이 OOMKilled 되는 것을 막기 위한 조치는?', c:['-Xmx 를 최대한 크게 설정','MaxRAMPercentage 등으로 컨테이너 메모리 한도에 맞춤','GC 를 비활성화','스레드 수를 늘림'], a:1, e:'컨테이너 한도를 인식하지 못하면 호스트 기준으로 힙을 잡는다.' },

  // ───────── 7. CS ─────────
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'입력 크기 n 이 100,000 일 때 일반적으로 통과 가능한 시간 복잡도는?', c:['O(n²)','O(n log n)','O(2ⁿ)','O(n!)'], a:1, e:'제한 조건이 알고리즘 선택을 사실상 지정한다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'가중치가 없는 그래프에서 최단 경로를 구할 때 적절한 알고리즘은?', c:['DFS','BFS','다익스트라','플로이드-워셜'], a:1, e:'가중치가 있으면 다익스트라를 사용한다.' },
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'LRU 캐시를 자바 표준 컬렉션으로 구현할 때 적합한 것은?', c:['HashMap','LinkedHashMap','TreeMap','PriorityQueue'], a:1, e:'accessOrder 를 켜고 removeEldestEntry 를 재정의한다.' },
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'자바에서 스택 용도로 Stack 클래스 대신 권장되는 것은?', c:['Vector','ArrayDeque','LinkedList','PriorityQueue'], a:1, e:'Stack 은 동기화된 레거시 클래스다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:3, q:'음수 가중치 간선이 있는 그래프의 최단 경로 알고리즘은?', c:['다익스트라','벨만-포드','BFS','위상 정렬'], a:1, e:'벨만-포드는 음수 사이클 탐지도 가능하다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'블로킹 I/O 기반 서버의 동시 처리량을 제한하는 주된 요인은?', c:['CPU 코어 수','스레드 수','디스크 용량','네트워크 대역폭만'], a:1, e:'스레드가 대기에 묶여 있어 스레드 수가 상한이 된다.' },

  // ───────── 8. 인성 ─────────
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'경험 질문에 답할 때 STAR 기법의 마지막 R 에 반드시 포함해야 하는 것은?', c:['팀 규모','사용 기술 목록','수치로 표현한 결과','일정 지연 사유'], a:2, e:'수치가 없으면 개선을 증명할 수 없다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'이직 사유를 답하는 방식으로 가장 적절한 것은?', c:['전 직장의 문제점을 솔직히 지적한다','회피형 대신 지향형으로 말하고 지원 회사와 연결한다','연봉이 주된 이유임을 강조한다','개인 사정이라고만 말한다'], a:1, e:'험담은 즉시 감점 요인이다.' },
  { s:'s8', t:'STAR · 경험 정리', d:3, q:'모르는 기술 질문을 받았을 때 가장 바람직한 대응은?', c:['아는 척하며 추측으로 자세히 설명한다','아는 범위까지 말하고 모른다고 인정한 뒤 추론 방향을 제시한다','침묵한다','질문을 다른 주제로 돌린다'], a:1, e:'지어내다 꼬리 질문에서 무너지는 것이 가장 치명적이다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:1, q:'면접 마지막 역질문 기회에 가장 피해야 할 답변은?', c:['팀의 코드 리뷰 방식을 묻는다','기술 부채 개선 계획을 묻는다','특별히 없습니다','온보딩 절차를 묻는다'], a:2, e:'관심이 없다는 인상을 준다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'기술 질문 답변에서 지원자를 "해본 사람"으로 보이게 하는 요소는?', c:['정의를 정확히 암기','내 경험과 트레이드오프 언급','최신 기술 용어 나열','빠른 답변 속도'], a:1, e:'정의 + 동작 + 경험의 3단 구조가 기본이다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'처우 협의에 임하는 태도로 적절하지 않은 것은?', c:['희망 연봉 범위를 미리 정한다','현재 연봉을 실제보다 높여 말한다','총보상 관점으로 검토한다','오퍼 조건을 서면으로 확인한다'], a:1, e:'원천징수영수증 등으로 확인되어 신뢰를 잃는다.' },

  // ───────── 보강 1. Java · JVM ─────────
  { s:'s1', t:'자바 기본 · 컬렉션', d:1, q:'오버로딩과 오버라이딩의 결정 시점을 바르게 짝지은 것은?', c:['오버로딩 런타임 · 오버라이딩 컴파일 시점','오버로딩 컴파일 시점 · 오버라이딩 런타임','둘 다 컴파일 시점','둘 다 런타임'], a:1, e:'오버로딩은 정적 바인딩, 오버라이딩은 동적 바인딩이다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'추상 클래스 대신 인터페이스를 선택하는 기준으로 가장 적절한 것은?', c:['공통 상태(필드)를 공유해야 할 때','공통 구현 코드를 물려주고 싶을 때','서로 무관한 타입에 같은 능력을 부여할 때','생성자를 물려주고 싶을 때'], a:2, e:'인터페이스는 can-do, 추상 클래스는 is-a 관계에 가깝다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:1, q:'컴파일러가 처리(try-catch 또는 throws)를 강제하는 예외는?', c:['RuntimeException','Error','체크드 예외','NullPointerException'], a:2, e:'언체크드는 강제하지 않으며 프로그래밍 오류에 해당한다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'for-each 로 순회하면서 컬렉션의 원소를 직접 제거하면 발생하는 예외는?', c:['IllegalStateException','ConcurrentModificationException','UnsupportedOperationException','IndexOutOfBoundsException'], a:1, e:'Iterator.remove() 나 removeIf() 를 사용해야 한다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'ConcurrentHashMap 이 Hashtable 보다 빠른 이유는?', c:['동기화를 아예 하지 않아서','버킷 단위로 락을 나눠 잡아서','읽기 전용이라서','키를 정렬해서'], a:1, e:'Hashtable 은 전체를 동기화하는 레거시 클래스다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:1, q:'입력 순서를 유지하면서 키-값을 저장하는 표준 컬렉션은?', c:['HashMap','LinkedHashMap','TreeMap','Hashtable'], a:1, e:'accessOrder 를 켜면 LRU 캐시로도 활용한다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'제네릭의 타입 소거(Type Erasure)에 대한 설명으로 옳은 것은?', c:['런타임에도 제네릭 타입 정보가 유지된다','컴파일 후 타입 정보가 지워진다','성능 향상을 위한 JIT 기능이다','리플렉션으로 항상 복원할 수 있다'], a:1, e:'그래서 new T() 같은 코드가 불가능하다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:3, q:'PECS 원칙에서 컬렉션에 값을 넣기만 할 때 사용하는 와일드카드는?', c:['? extends T','? super T','?','T'], a:1, e:'Producer-Extends, Consumer-Super 로 기억한다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'클래스 로더의 위임 모델 순서로 옳은 것은?', c:['Application → Platform → Bootstrap','Bootstrap → Platform → Application','Platform → Bootstrap → Application','순서는 정해져 있지 않다'], a:1, e:'상위 로더에 먼저 위임해 중복 로딩과 변조를 막는다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'JVM 실행 엔진에서 JIT 컴파일러의 역할은?', c:['소스를 바이트코드로 변환','자주 실행되는 바이트코드를 기계어로 변환','클래스를 메모리에 적재','가비지 컬렉션 수행'], a:1, e:'인터프리터의 느린 반복 실행을 보완한다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'Minor GC 와 Full GC 의 차이로 옳은 것은?', c:['Minor 는 Old 영역을 수집한다','Full GC 는 Stop-The-World 영향이 크다','Minor GC 는 실행되지 않는 경우가 많다','Full GC 가 항상 더 빠르다'], a:1, e:'Minor 는 Young 대상으로 짧고 잦게 일어난다.' },
  { s:'s1', t:'동시성 · Java 8+', d:3, q:'AtomicInteger 가 락 없이 원자성을 보장하는 방식은?', c:['synchronized 내부 사용','CAS(비교 후 교환) 재시도','volatile 만으로 보장','스레드 우선순위 조정'], a:1, e:'경합이 심하면 재시도가 늘어 오히려 비용이 커질 수 있다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'교착 상태의 4가지 조건에 해당하지 않는 것은?', c:['상호배제','점유와 대기','비선점','우선순위 역전'], a:3, e:'네 번째 조건은 환형 대기다.' },
  { s:'s1', t:'동시성 · Java 8+', d:3, q:'I/O 대기가 많은 작업의 스레드 풀 크기를 정하는 기준으로 가장 적절한 것은?', c:['코어 수와 동일하게','대기 비율을 반영해 코어 수보다 크게','항상 1개','메모리 크기에 비례해'], a:1, e:'CPU 바운드는 코어 수 근처이며 어느 쪽이든 실측 후 조정이 원칙이다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:1, q:'멀티스레드 환경에서 문자열을 이어 붙일 때 안전한 클래스는?', c:['String','StringBuilder','StringBuffer','StringJoiner'], a:2, e:'StringBuffer 는 동기화되어 있고 StringBuilder 는 비동기라 빠르다.' },
  { s:'s1', t:'동시성 · Java 8+', d:3, q:'기본값을 만드는 비용이 클 때 Optional 에서 권장되는 메서드는?', c:['orElse','orElseGet','get','orElseThrow'], a:1, e:'orElse 의 인자는 값이 있어도 항상 평가된다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'Java 21 가상 스레드가 가장 큰 이점을 주는 작업 유형은?', c:['CPU 집약 연산','I/O 대기가 많은 요청 처리','정렬 알고리즘','GC 튜닝'], a:1, e:'블로킹 대기 중 캐리어 스레드를 반납해 처리량이 올라간다.' },
  { s:'s1', t:'동시성 · Java 8+', d:1, q:'Java 17 의 record 가 주로 대체하는 것은?', c:['열거형','값만 담는 불변 DTO·VO 클래스','인터페이스','제네릭'], a:1, e:'생성자·접근자·equals·hashCode·toString 이 자동 생성된다.' },

  // ───────── 보강 2. Spring · Spring Boot ─────────
  { s:'s2', t:'IoC · DI · 빈', d:1, q:'IoC(제어의 역전)를 가장 잘 설명한 것은?', c:['개발자가 객체를 직접 생성한다','객체 생성과 생명주기 제어권을 컨테이너가 가진다','상속으로 기능을 확장한다','예외 처리를 위임한다'], a:1, e:'DI 는 IoC 를 구현하는 방법 중 하나다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'필드 주입(@Autowired)을 지양하는 이유로 가장 적절한 것은?', c:['런타임 성능이 느려서','final 을 쓸 수 없고 프레임워크 없이 테스트하기 어려워서','컴파일 오류가 나서','빈이 두 번 생성되어서'], a:1, e:'생성자 주입은 불변과 필수 의존을 드러낸다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'프로토타입 스코프 빈에 대한 설명으로 옳은 것은?', c:['컨테이너가 소멸 콜백까지 관리한다','요청할 때마다 새 인스턴스가 생성된다','싱글턴보다 항상 빠르다','웹 환경에서만 사용할 수 있다'], a:1, e:'생성 이후의 관리는 사용하는 쪽 책임이다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'같은 타입의 빈이 여러 개일 때 특정 빈을 이름으로 지정하는 애너테이션은?', c:['@Primary','@Qualifier','@Lazy','@Scope'], a:1, e:'@Primary 는 이름 지정 없이 기본 후보를 정한다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'@PostConstruct 가 호출되는 시점은?', c:['빈 인스턴스 생성 직전','의존관계 주입이 끝난 직후','컨테이너 종료 직전','첫 요청이 들어올 때'], a:1, e:'생성 → 주입 → 초기화 콜백 → 사용 → 소멸 순이다.' },
  { s:'s2', t:'IoC · DI · 빈', d:3, q:'스프링 부트 2.6 이상에서 순환 참조가 발생했을 때 가장 바람직한 해결은?', c:['allow-circular-references 를 켠다','@Lazy 를 붙인다','공통 로직 분리나 이벤트로 설계를 바꾼다','필드 주입으로 변경한다'], a:2, e:'설정이나 @Lazy 는 임시방편이며 기본은 순환 참조 금지다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'스프링 AOP 에서 JDK 동적 프록시가 사용되는 조건은?', c:['대상 클래스가 final 일 때','대상이 인터페이스를 구현했을 때','메서드가 private 일 때','빈 스코프가 프로토타입일 때'], a:1, e:'인터페이스가 없으면 CGLIB 이 사용되며 부트 기본값도 CGLIB 이다.' },
  { s:'s2', t:'MVC · Spring Boot', d:3, q:'같은 클래스 안에서 this 로 호출할 때 함께 동작하지 않는 애너테이션으로만 묶인 것은?', c:['@Transactional, @Cacheable, @Async','@Component, @Service','@GetMapping, @PostMapping','@Valid, @NotNull'], a:0, e:'모두 프록시를 거쳐야 적용되는 기능이다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'private 메서드에 @Transactional 을 붙였을 때의 결과는?', c:['정상 동작한다','프록시를 적용할 수 없어 무시된다','컴파일 오류가 발생한다','읽기 전용으로 동작한다'], a:1, e:'public 메서드로 분리하거나 다른 빈으로 옮긴다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'상위 트랜잭션이 반드시 존재해야 하고 없으면 예외를 던지는 전파 속성은?', c:['REQUIRED','MANDATORY','SUPPORTS','NEVER'], a:1, e:'NEVER 는 반대로 트랜잭션이 있으면 예외를 던진다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:3, q:'세이브포인트를 이용해 부분 롤백을 지원하는 전파 속성은?', c:['NESTED','REQUIRES_NEW','NOT_SUPPORTED','SUPPORTS'], a:0, e:'JDBC 드라이버에 의존적이라 사용 전 제약을 확인해야 한다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'모든 컨트롤러의 예외를 한곳에서 처리해 응답 포맷을 통일하는 방법은?', c:['@ControllerAdvice·@RestControllerAdvice','필터에서 try-catch','컨트롤러마다 try-catch','인터셉터 preHandle'], a:0, e:'@ExceptionHandler 와 함께 공통 에러 응답을 만든다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'JPA 리포지터리 계층만 임베디드 DB 로 빠르게 검증하는 슬라이스 테스트 애너테이션은?', c:['@SpringBootTest','@WebMvcTest','@DataJpaTest','@MockBean'], a:2, e:'테스트 범위를 좁혀야 빌드 시간이 유지된다.' },
  { s:'s2', t:'MVC · Spring Boot', d:3, q:'운영 환경에서 Actuator 를 사용할 때 가장 중요한 조치는?', c:['모든 엔드포인트를 공개한다','노출 범위를 제한하고 인증을 건다','health 만 끈다','포트를 8080 으로 고정한다'], a:1, e:'인증 없이 열면 운영 정보가 그대로 노출된다.' },
  { s:'s2', t:'IoC · DI · 빈', d:1, q:'@RestController 와 동일한 조합은?', c:['@Controller + @ResponseBody','@Controller + @RequestMapping','@Component + @Bean','@Service + @ResponseBody'], a:0, e:'반환값이 뷰 이름이 아니라 응답 본문으로 처리된다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'스프링 부트 3.x 로 올릴 때 반드시 확인해야 하는 변화는?', c:['Java 8 지원 강화','javax 에서 jakarta 로 네임스페이스 변경','XML 설정 필수화','내장 서버 제거'], a:1, e:'Java 17 이상이 필수이며 의존 라이브러리 호환성도 함께 본다.' },

  // ───────── 보강 3. JPA · 데이터베이스 ─────────
  { s:'s3', t:'영속성 컨텍스트', d:1, q:'JPA 엔티티의 생명주기 상태에 해당하지 않는 것은?', c:['비영속','영속','준영속','병합'], a:3, e:'상태는 비영속·영속·준영속·삭제 네 가지다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'준영속 상태의 엔티티 필드를 수정했을 때 일어나는 일은?', c:['커밋 시 UPDATE 가 실행된다','변경 감지가 동작하지 않아 반영되지 않는다','예외가 발생한다','즉시 INSERT 된다'], a:1, e:'다시 조회해 수정하거나 merge 를 사용해야 한다.' },
  { s:'s3', t:'영속성 컨텍스트', d:3, q:'mappedBy 로 지정된 쪽의 @OneToOne 에서 지연 로딩이 동작하지 않는 이유는?', c:['JPA 표준이 금지해서','외래 키가 없어 대상 존재 여부를 확인해야 해서','프록시를 지원하지 않아서','캐시 때문에'], a:1, e:'널 여부를 알아야 프록시를 만들 수 있어 결국 조회가 발생한다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'cascade = ALL 을 사용할 때의 원칙으로 옳은 것은?', c:['모든 연관관계에 기본 적용한다','부모가 자식을 단독 소유할 때만 사용한다','양방향에서만 사용한다','조회 성능을 위해 사용한다'], a:1, e:'공유되는 엔티티에 걸면 의도치 않은 연쇄 삭제가 발생한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'기본 키 생성 전략 IDENTITY 의 특징으로 옳은 것은?', c:['시퀀스를 미리 할당해 성능이 좋다','persist 시점에 즉시 INSERT 되어 쓰기 지연이 사라진다','키 테이블을 사용한다','MySQL 에서 사용할 수 없다'], a:1, e:'SEQUENCE 는 allocationSize 로 호출 횟수를 줄일 수 있다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'동적 쿼리를 타입 안전하게 작성하기 위해 실무에서 선호되는 것은?', c:['문자열 JPQL','QueryDSL','네이티브 쿼리','스토어드 프로시저'], a:1, e:'JPQL 은 문자열이라 컴파일 시점에 오류를 잡지 못한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:3, q:'1:N 컬렉션 fetch join 에서 결과 행이 늘어나는 문제의 전통적 해결책은?', c:['distinct 사용','LIMIT 추가','EAGER 로 변경','인덱스 추가'], a:0, e:'하이버네이트 6부터는 기본적으로 중복을 제거한다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'조회하려는 컬럼이 모두 인덱스에 포함되어 테이블 접근을 생략하는 것은?', c:['클러스터드 인덱스','커버링 인덱스','유니크 인덱스','함수 기반 인덱스'], a:1, e:'조회 성능이 크게 개선되지만 인덱스 크기는 커진다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'EXPLAIN 결과에서 성능 경고 신호로 보아야 하는 것은?', c:['type = const','type = ALL','type = ref','rows = 1'], a:1, e:'Using filesort·Using temporary 도 함께 확인한다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'인덱스 효율이 가장 좋은 컬럼은?', c:['카디널리티가 높은 컬럼','값이 두 종류뿐인 컬럼','자주 갱신되는 컬럼','NULL 이 대부분인 컬럼'], a:0, e:'선택도가 높아야 스캔 범위를 크게 줄인다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:3, q:'커넥션 풀 크기를 계속 늘렸는데 오히려 응답이 느려졌다. 가장 타당한 설명은?', c:['풀 크기는 성능과 무관하다','DB 의 코어·디스크가 병목이라 경합만 늘어난다','JVM 힙이 부족해서다','네트워크 대역폭 때문이다'], a:1, e:'적정 크기를 실측으로 찾는 것이 원칙이다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'반정규화를 적용할 때의 기준으로 가장 적절한 것은?', c:['항상 조회 성능이 좋으므로 기본 적용','측정된 병목과 정합성 관리 비용을 근거로 제한적 적용','정규화보다 쉬우므로 우선 적용','저장 공간 절약을 위해 적용'], a:1, e:'중복이 늘어 정합성 관리 비용이 발생한다.' },
  { s:'s3', t:'영속성 컨텍스트', d:1, q:'트랜잭션의 ACID 에 해당하지 않는 것은?', c:['원자성','일관성','격리성','확장성'], a:3, e:'네 번째는 지속성(Durability)이다.' },

  // ───────── 보강 4. 웹 · 네트워크 · 보안 ─────────
  { s:'s4', t:'HTTP · CORS · REST', d:1, q:'TCP 와 UDP 의 차이로 옳은 것은?', c:['UDP 는 연결을 수립하고 순서를 보장한다','TCP 는 흐름·혼잡 제어를 제공한다','TCP 가 항상 더 빠르다','UDP 는 재전송을 보장한다'], a:1, e:'UDP 는 비연결이라 DNS·실시간 스트리밍에 쓰인다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'TCP 3-way 핸드셰이크의 순서로 옳은 것은?', c:['SYN → ACK → FIN','SYN → SYN+ACK → ACK','FIN → ACK → FIN','ACK → SYN → SYN+ACK'], a:1, e:'연결 종료는 FIN → ACK → FIN → ACK 의 4-way 다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'HTTP/2 가 1.1 대비 개선한 항목으로 거리가 먼 것은?', c:['멀티플렉싱','헤더 압축','바이너리 프레이밍','UDP 기반 전송'], a:3, e:'UDP(QUIC) 기반은 HTTP/3 의 특징이다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'ETag 와 If-None-Match 를 사용한 조건부 요청의 응답 코드는?', c:['200','204','304','404'], a:2, e:'변경이 없으면 본문 없이 304 로 응답해 트래픽을 줄인다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'CSRF 완화를 위해 쿠키에 설정하는 속성은?', c:['HttpOnly','Secure','SameSite','Max-Age'], a:2, e:'HttpOnly 는 XSS, Secure 는 평문 전송을 막는 속성이다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:3, q:'공개 클라이언트(모바일·SPA)의 OAuth 2.0 권장 플로우는?', c:['Implicit','Authorization Code + PKCE','Resource Owner Password','Client Credentials'], a:1, e:'Implicit 은 토큰 노출 위험으로 폐기가 권장된다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'Spring Security 가 인증 정보를 보관하는 SecurityContextHolder 의 기본 저장 방식은?', c:['세션 직접 저장','ThreadLocal','정적 필드','Redis'], a:1, e:'비동기·스레드 전환 시 컨텍스트 전파에 주의해야 한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'서버가 공격자가 지정한 내부 주소로 요청을 보내게 되는 취약점은?', c:['XSS','CSRF','SSRF','SQL 인젝션'], a:2, e:'URL 화이트리스트와 메타데이터 주소 차단으로 대응한다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'REST API URI 설계로 가장 적절한 것은?', c:['GET /getUserOrders?id=1','GET /users/1/orders?status=PAID','POST /orders/delete/1','GET /order/getList'], a:1, e:'자원은 명사·복수형, 행위는 HTTP 메서드로 표현한다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:1, q:'클라이언트가 허용된 호출 횟수를 초과했을 때 반환하는 상태 코드는?', c:['409','422','429','503'], a:2, e:'429 와 함께 재시도 안내 헤더를 주는 것이 좋다.' },

  // ───────── 보강 5. 아키텍처 · 설계 ─────────
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'클래스가 변경되어야 하는 이유가 하나여야 한다는 원칙은?', c:['단일 책임 원칙','개방-폐쇄 원칙','인터페이스 분리 원칙','의존 역전 원칙'], a:0, e:'책임이 섞이면 변경이 연쇄적으로 번진다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:3, q:'하위 타입이 상위 타입을 대체해도 프로그램이 정상 동작해야 한다는 원칙은?', c:['SRP','OCP','LSP','ISP'], a:2, e:'상속 관계에서 사전·사후 조건을 어기면 위반이다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'레이어드 아키텍처의 안티패턴으로 거리가 먼 것은?', c:['컨트롤러에 비즈니스 로직 작성','엔티티를 그대로 API 응답으로 노출','서비스 간 무분별한 상호 호출','상위에서 하위로의 단방향 의존'], a:3, e:'단방향 의존은 지켜야 할 원칙이다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:3, q:'헥사고날(포트&어댑터) 아키텍처를 도입할 때 함께 말해야 할 점은?', c:['항상 도입하는 것이 옳다','규모가 작으면 과설계가 될 수 있다','JPA 를 쓸 수 없다','테스트가 어려워진다'], a:1, e:'도메인 격리로 얻는 이점과 구조 비용을 비교해 판단한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'애플리케이션이 캐시를 먼저 조회하고 없으면 DB 에서 읽어 채우는 전략은?', c:['Cache-Aside','Write-Through','Write-Behind','Refresh-Ahead'], a:0, e:'가장 흔한 방식이며 무효화 전략을 함께 설계해야 한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'2PC 대신 Saga 를 선택하는 주된 이유는?', c:['강한 일관성이 필요해서','가용성과 성능 손해가 커서','구현이 더 복잡해서','트랜잭션이 필요 없어서'], a:1, e:'Saga 는 최종 일관성을 받아들이는 대신 가용성을 지킨다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'테스트에 대한 설명으로 가장 적절한 것은?', c:['E2E 테스트를 가장 많이 작성한다','커버리지 수치가 높으면 항상 좋은 테스트다','단위 테스트를 다수, E2E 는 소수로 둔다','테스트는 리팩터링 후에 작성한다'], a:2, e:'중요한 분기를 덮었는지가 수치보다 중요하다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:3, q:'DDD 관점에서 트랜잭션 경계를 잡는 기본 단위는?', c:['테이블','애그리거트','바운디드 컨텍스트','리포지터리'], a:1, e:'애그리거트가 일관성 경계이므로 그 단위로 묶는다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'코드 리뷰에서 지적을 받았을 때 바람직한 태도는?', c:['즉시 모두 수용한다','의도를 확인하고 타당하면 수용, 이견은 근거로 제시한다','다음 리뷰까지 미룬다','리뷰어에게 설명을 요구하지 않는다'], a:1, e:'사람이 아니라 코드에 대한 의견으로 다룬다.' },

  // ───────── 보강 6. 인프라 · 데브옵스 ─────────
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'Dockerfile 에서 빌드 캐시를 잘 활용하는 작성 순서는?', c:['소스 복사 후 의존성 설치','의존성 파일 먼저 복사·설치 후 소스 복사','모든 파일을 한 번에 복사','캐시는 순서와 무관하다'], a:1, e:'자주 바뀌는 레이어를 뒤에 두어야 캐시가 유지된다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'멀티 스테이지 빌드의 주된 목적은?', c:['빌드 속도만 높인다','빌드 도구를 제외해 최종 이미지 크기를 줄인다','컨테이너 보안 그룹을 설정한다','로그를 분리한다'], a:1, e:'실행에는 JRE 슬림 이미지만 남긴다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'소수 트래픽부터 점진적으로 확대하며 지표를 관측하는 배포 전략은?', c:['롤링','블루-그린','카나리','재생성'], a:2, e:'위험을 최소화하지만 관측 지표 설계가 전제다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:3, q:'Redis 분산 락을 구현할 때 반드시 포함해야 하는 요소는?', c:['만료 시간(PX)과 소유자 토큰 확인','KEYS 명령으로 락 조회','무한 대기','AOF 비활성화'], a:0, e:'만료가 없으면 장애 시 락이 영원히 남는다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'AWS 에서 애플리케이션에 권한을 부여하는 올바른 방법은?', c:['액세스 키를 소스에 포함','액세스 키를 이미지에 포함','IAM 역할 부여','보안 그룹에 키 저장'], a:2, e:'키를 코드나 이미지에 넣으면 유출 사고로 직결된다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'AWS 보안 그룹(SG)에 대한 설명으로 옳은 것은?', c:['Stateless 이며 거부 규칙을 쓴다','Stateful 이며 허용 규칙만 정의한다','서브넷 단위로만 동작한다','아웃바운드를 설정할 수 없다'], a:1, e:'Stateless 로 거부 규칙까지 쓰는 것은 NACL 이다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:1, q:'CI 가 제공하는 가장 큰 가치는?', c:['배포 자동화','커밋마다 빌드·테스트로 통합 위험 조기 발견','인프라 프로비저닝','모니터링'], a:1, e:'CD 는 그 이후의 자동 배포 단계다.' },

  // ───────── 보강 7. 자료구조 · 알고리즘 · CS ─────────
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'간선이 적은 희소 그래프에서 일반적으로 선택하는 표현 방식은?', c:['인접 행렬','인접 리스트','해시 테이블','세그먼트 트리'], a:1, e:'인접 행렬은 간선 조회가 O(1)이지만 공간이 V제곱이다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'자바에서 객체 배열을 정렬할 때 사용되는 알고리즘과 성질은?', c:['퀵소트 · 불안정','TimSort · 안정','힙소트 · 안정','버블소트 · 안정'], a:1, e:'기본형 배열은 듀얼 피벗 퀵소트를 사용한다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:3, q:'최댓값을 최소화하라는 유형에서 답 자체를 이분 탐색하는 기법은?', c:['투 포인터','파라메트릭 서치','슬라이딩 윈도우','분할 정복'], a:1, e:'판정 함수가 단조로울 때 성립한다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'컨텍스트 스위칭 비용이 발생하는 주된 이유는?', c:['CPU 클럭이 낮아서','PCB 저장·복원과 캐시 무효화 때문','메모리가 부족해서','디스크 I/O 때문'], a:1, e:'스레드가 프로세스보다 전환 비용이 작다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'뮤텍스와 세마포어의 차이로 옳은 것은?', c:['뮤텍스는 카운트를 가진다','세마포어는 소유권 개념이 핵심이다','뮤텍스는 소유권, 세마포어는 카운트 기반이다','둘은 완전히 같다'], a:2, e:'세마포어는 동시 접근 허용 개수를 제어한다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:1, q:'BFS 구현에 사용하는 자료구조는?', c:['스택','큐','힙','트리'], a:1, e:'DFS 는 스택 또는 재귀를 사용한다.' },

  // ───────── 보강 8. 인성 · 경험 면접 ─────────
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'자기소개 답변으로 가장 바람직한 것은?', c:['이력서를 순서대로 낭독한다','1분 내로 경력 요약과 강점, 지원 동기를 연결한다','성장 배경부터 상세히 말한다','기술 용어를 최대한 많이 나열한다'], a:1, e:'무엇을 잘하는 사람인지 한 문장이 남아야 한다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'약점을 묻는 질문에 대한 답변으로 가장 적절한 것은?', c:['완벽주의라 일을 오래 붙듭니다','약점이 없다고 답한다','실제 약점과 개선을 위해 하고 있는 노력을 말한다','업무와 무관한 성격을 말한다'], a:2, e:'위장형 약점은 준비 부족으로 읽힌다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:3, q:'일정이 촉박한데 품질을 지켜야 하는 상황에 대한 답변으로 가장 적절한 것은?', c:['무조건 일정을 맞춘다','범위·일정·품질 중 조정할 것을 이해관계자와 합의하고 부채를 명시한다','테스트를 생략한다','혼자 야근으로 해결한다'], a:1, e:'회수 계획까지 말하면 신뢰를 얻는다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'희망 연봉을 말하는 방식으로 가장 적절한 것은?', c:['회사 규정에 따르겠다고만 답한다','구체적 범위를 제시하고 총보상 관점으로 논의한다','가능한 한 높은 단일 숫자를 부른다','면접에서는 언급하지 않는다'], a:1, e:'기준 없이 임하면 협상 여지가 사라진다.' },

  // ───────── 보강 5. 도메인 지식 (업종별) ─────────
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'주문 금액을 상품 테이블과 조인해 매번 계산하도록 설계했을 때의 문제는?', c:['조회 성능만 떨어진다','상품 가격이 바뀌면 과거 주문 금액까지 바뀐다','인덱스를 못 탄다','트랜잭션이 길어진다'], a:1, e:'주문 시점 금액을 스냅샷으로 저장해야 한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'단일 컬럼 재고를 동시 차감할 때 가장 단순하면서 안전한 방법은?', c:['조회 후 애플리케이션에서 계산해 저장','UPDATE stock SET qty = qty - 1 WHERE id = ? AND qty > 0','SELECT 후 sleep 재시도','트랜잭션 격리 수준을 낮춘다'], a:1, e:'갱신된 행 수가 0이면 품절로 판단한다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'결제에서 매입(Capture) 이후 금액을 되돌리는 처리는?', c:['승인 취소(Void)','환불(Refund)','망취소','정산'], a:1, e:'매입 전 승인 취소는 전액, 매입 후 환불은 부분도 가능하다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'외부 결제 요청이 타임아웃되어 승인 여부를 알 수 없을 때 올바른 대응은?', c:['즉시 실패로 처리하고 재요청','미결 상태로 두고 조회 API 로 결과를 재확인','사용자에게 성공으로 안내','트랜잭션을 롤백하고 무시'], a:1, e:'멱등 키와 보정 배치를 함께 두어야 중복 결제를 막는다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'정산(Settlement)과 대사(Reconciliation)의 차이로 옳은 것은?', c:['둘은 같은 말이다','정산은 지급액 계산·지급, 대사는 내부와 외부 내역 대조','정산은 배치, 대사는 실시간','대사는 회계 부서만 한다'], a:1, e:'대사 배치는 재실행해도 결과가 같아야 한다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'잔액이나 재고를 컬럼 값 갱신으로만 관리할 때의 근본적인 문제는?', c:['성능이 느리다','사고 발생 시 추적·복구·설명이 불가능하다','인덱스를 못 쓴다','트랜잭션을 못 쓴다'], a:1, e:'거래 내역을 원장으로 쌓고 잔액을 파생시키는 설계가 안전하다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'예약 시스템에서 결제 전 좌석을 잡아 두는 선점(hold) 설계에 반드시 필요한 것은?', c:['영구 잠금','만료 시간과 자동 해제','비관적 락 금지','좌석 삭제'], a:1, e:'(자원, 시간) 유니크 제약이 이중 예약의 최후 방어선이다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'팔로워가 수백만인 사용자의 게시물에서 fan-out on write 방식의 문제는?', c:['읽기가 느려진다','쓰기 시 타임라인 반영량이 폭발한다','정합성이 깨진다','캐시를 못 쓴다'], a:1, e:'일반 사용자는 write, 인플루언서는 read 로 혼합하는 것이 실무 정석이다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'구독 서비스에서 요금제를 중도 변경할 때 남은 기간을 일할 계산하는 개념은?', c:['던닝(Dunning)','프로레이션(Proration)','디퍼드(Deferred)','청산(Clearing)'], a:1, e:'던닝은 결제 실패 시 재시도·안내·해지 절차를 뜻한다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'도메인 경험이 없는 회사에 지원했을 때 가장 바람직한 답변 전략은?', c:['경험이 없다고만 답한다','문제 구조가 같은 내 사례로 연결하고 학습 계획을 덧붙인다','아는 척 지어낸다','기술 스택 이야기로 돌린다'], a:1, e:'상태 머신·멱등성·정합성 검증은 업종이 달라도 통한다.' }
];

CPPG.ox = [
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'HashMap 의 조회는 최악의 경우에도 항상 O(1)이다.', a:false, e:'충돌이 몰리면 O(n), 트리화 이후에는 O(log n)이다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'equals 를 재정의하면 hashCode 도 함께 재정의해야 한다.', a:true, e:'규약을 어기면 해시 기반 컬렉션에서 조회에 실패한다.' },
  { s:'s1', t:'동시성 · Java 8+', d:1, q:'Java 8 부터 PermGen 이 제거되고 Metaspace 가 도입되었다.', a:true, e:'Metaspace 는 네이티브 메모리에 위치한다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'volatile 을 사용하면 i++ 연산이 원자적으로 처리된다.', a:false, e:'가시성만 보장하며 원자성은 Atomic·락이 필요하다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'System.gc() 를 호출하면 GC 가 반드시 실행된다.', a:false, e:'요청일 뿐 실행이 보장되지 않는다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'힙 영역은 모든 스레드가 공유한다.', a:true, e:'스택·PC 레지스터는 스레드별로 존재한다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'스레드 풀에서 ThreadLocal 값을 remove 하지 않으면 다른 요청에 값이 남을 수 있다.', a:true, e:'스레드가 재사용되기 때문이다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'병렬 스트림은 데이터 크기와 무관하게 항상 더 빠르다.', a:false, e:'분할·병합 오버헤드로 더 느려질 수 있다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'한 번 최종 연산을 수행한 스트림은 다시 사용할 수 있다.', a:false, e:'재사용하면 IllegalStateException 이 발생한다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'불변 객체를 만들 때 가변 필드는 방어적 복사로 다뤄야 한다.', a:true, e:'그렇지 않으면 외부에서 내부 상태를 바꿀 수 있다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'같은 클래스 내부에서 호출한 메서드에도 @Transactional 이 적용된다.', a:false, e:'프록시를 거치지 않아 적용되지 않는다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'@Transactional 은 체크드 예외에 대해 기본적으로 롤백한다.', a:false, e:'언체크드 예외만 기본 롤백 대상이다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'예외를 try-catch 로 처리하면 트랜잭션이 롤백되지 않을 수 있다.', a:true, e:'예외가 프록시까지 전파되지 않기 때문이다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'스프링 AOP 는 필드 접근도 가로챌 수 있다.', a:false, e:'메서드 실행 조인포인트만 지원한다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'스프링 부트는 인터페이스가 없어도 CGLIB 으로 프록시를 만든다.', a:true, e:'부트는 기본적으로 CGLIB 프록시를 사용한다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'싱글턴 빈에 인스턴스 필드로 상태를 저장해도 안전하다.', a:false, e:'모든 요청이 공유하므로 동시성 문제가 발생한다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'자동 설정은 사용자가 정의한 같은 타입의 빈이 있으면 적용되지 않는다.', a:true, e:'@ConditionalOnMissingBean 때문이다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'REQUIRES_NEW 는 기존 트랜잭션을 보류하고 새 트랜잭션을 시작한다.', a:true, e:'별도 커넥션을 점유하므로 풀 고갈에 주의한다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'@WebMvcTest 는 JPA 리포지터리까지 모두 로딩한다.', a:false, e:'웹 계층만 로딩하는 슬라이스 테스트다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'영속 상태 엔티티의 필드를 변경하면 트랜잭션 커밋 시 UPDATE 가 실행된다.', a:true, e:'변경 감지(Dirty Checking) 덕분이다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'flush() 를 호출하면 영속성 컨텍스트가 비워진다.', a:false, e:'비우는 것은 clear() 다.' },
  { s:'s3', t:'영속성 컨텍스트', d:1, q:'@ManyToOne 의 기본 페치 전략은 LAZY 다.', a:false, e:'기본값은 EAGER 이므로 명시적으로 LAZY 로 바꾼다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'컬렉션 fetch join 은 두 개 이상 동시에 사용할 수 있다.', a:false, e:'카티션 곱이 발생해 하나만 사용할 수 있다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'@BatchSize 는 페이징과 함께 사용할 수 있다.', a:true, e:'IN 절로 묶어 조회하기 때문이다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'연관관계 주인이 아닌 쪽에만 값을 설정해도 DB 에 반영된다.', a:false, e:'외래 키를 가진 주인 쪽을 설정해야 한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'벌크 연산은 영속성 컨텍스트를 거치지 않는다.', a:true, e:'실행 후 clear() 로 초기화해야 한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'OSIV 를 켜두면 커넥션 점유 시간이 길어진다.', a:true, e:'트래픽이 많으면 커넥션 고갈 위험이 있다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'MySQL InnoDB 의 기본 격리 수준은 READ COMMITTED 다.', a:false, e:'REPEATABLE READ 가 기본이다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'복합 인덱스는 선두 컬럼을 조건에 쓰지 않아도 정상 사용된다.', a:false, e:'선두 컬럼 규칙 때문에 사용하지 못한다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'인덱스를 많이 만들수록 쓰기 성능이 떨어진다.', a:true, e:'인덱스도 함께 갱신해야 하기 때문이다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'PUT 은 멱등하지만 PATCH 는 일반적으로 멱등하지 않다.', a:true, e:'PUT 은 전체 교체, PATCH 는 부분 수정이다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:1, q:'403 은 인증이 되지 않았을 때 반환하는 상태 코드다.', a:false, e:'인증 실패는 401, 403 은 권한 없음이다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'CORS 문제는 프론트엔드 설정만으로 해결할 수 있다.', a:false, e:'서버가 허용 헤더를 내려야 한다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'Allow-Credentials 를 true 로 두면서 Allow-Origin 을 * 로 설정할 수 있다.', a:false, e:'명시적 출처를 지정해야 한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'JWT 의 페이로드는 암호화되어 있어 민감 정보를 담아도 된다.', a:false, e:'Base64 인코딩일 뿐 누구나 디코딩할 수 있다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'JWT 는 발급 후 즉시 무효화하기 어렵다.', a:true, e:'짧은 만료·리프레시 회전·블랙리스트로 보완한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'OAuth 2.0 은 인증 프로토콜이다.', a:false, e:'인가 프레임워크이며 인증은 OIDC 가 담당한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'비밀번호는 BCrypt 처럼 솔트와 반복이 적용된 해시로 저장해야 한다.', a:true, e:'단순 SHA-256 은 너무 빨라 부적절하다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'HttpOnly 쿠키는 자바스크립트에서 읽을 수 없다.', a:true, e:'XSS 로 인한 쿠키 탈취를 완화한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'MSA 는 모든 규모의 조직에서 모놀리식보다 우수하다.', a:false, e:'운영 복잡도가 커 조직·규모에 따라 판단해야 한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'성능 문제는 측정보다 캐시 도입을 먼저 시도하는 것이 효율적이다.', a:false, e:'측정 없이 캐시를 넣으면 문제를 감추기만 한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'재시도 로직에는 타임아웃과 백오프가 함께 필요하다.', a:true, e:'재시도만 넣으면 장애가 증폭된다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'멱등하지 않은 API 도 자동 재시도를 적용해도 안전하다.', a:false, e:'중복 처리가 발생한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'Saga 패턴은 보상 트랜잭션으로 일관성을 맞춘다.', a:true, e:'최종 일관성을 받아들이는 설계다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'엔티티를 그대로 API 응답으로 노출해도 설계상 문제가 없다.', a:false, e:'스키마와 스펙이 결합되고 내부 필드가 노출된다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'캐시 스탬피드는 만료 시점 분산(지터)으로 완화할 수 있다.', a:true, e:'뮤텍스·사전 갱신도 함께 쓴다.' },
  { s:'s6', t:'컨테이너 · 배포', d:1, q:'컨테이너는 게스트 OS 를 포함하지 않는다.', a:true, e:'호스트 커널을 공유해 가볍다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'블루-그린 배포는 롤링 배포보다 롤백이 빠르다.', a:true, e:'이전 환경이 그대로 남아 있기 때문이다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'무중단 배포 중에도 DB 컬럼을 바로 삭제해도 된다.', a:false, e:'구버전 인스턴스가 깨진다. 단계를 분리해야 한다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'Readiness 프로브는 컨테이너 재시작 여부를 결정한다.', a:false, e:'재시작은 Liveness, Readiness 는 트래픽 투입 여부다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'운영 중인 Redis 에서 KEYS 명령은 사용하지 않는 것이 좋다.', a:true, e:'싱글 스레드가 블로킹되어 전체 지연이 발생한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'Kafka 는 토픽 전체에서 메시지 순서를 보장한다.', a:false, e:'파티션 단위로만 보장한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'Kafka 소비자는 중복 소비를 전제로 멱등하게 설계해야 한다.', a:true, e:'at-least-once 전달이 일반적이다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'장애 발생 시 원인 분석을 완료한 뒤 완화 조치를 해야 한다.', a:false, e:'서비스 회복(완화)이 우선이다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'이분 탐색은 정렬되지 않은 배열에서도 사용할 수 있다.', a:false, e:'정렬이 전제 조건이다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'가중치가 없는 그래프의 최단 경로는 BFS 로 구할 수 있다.', a:true, e:'가중치가 있으면 다익스트라를 쓴다.' },
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'자바에서 Stack 클래스보다 ArrayDeque 사용이 권장된다.', a:true, e:'Stack 은 동기화된 레거시 클래스다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'대용량 입력 처리에 Scanner 를 쓰면 시간 초과가 날 수 있다.', a:true, e:'BufferedReader 를 사용한다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'경험을 말할 때 결과는 가능하면 수치로 표현해야 한다.', a:true, e:'수치가 없으면 개선을 증명할 수 없다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:1, q:'이직 사유로 전 직장의 문제를 구체적으로 지적하는 것이 솔직해서 좋다.', a:false, e:'험담은 즉시 감점 요인이다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'모르는 질문에는 모른다고 인정하고 추론 방향을 제시하는 것이 낫다.', a:true, e:'지어내면 꼬리 질문에서 무너진다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:1, q:'역질문 기회에 "없습니다"라고 답해도 평가에 영향이 없다.', a:false, e:'관심 없음으로 읽혀 감점된다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'이력서에 적은 기술은 모두 질문 대상이 된다고 보아야 한다.', a:true, e:'설명하지 못할 기술은 적지 않는 것이 안전하다.' },

  // ───────── 보강 ─────────
  { s:'s1', t:'자바 기본 · 컬렉션', d:1, q:'오버라이딩된 메서드는 런타임에 실제 객체 타입을 기준으로 호출된다.', a:true, e:'동적 바인딩이며 오버로딩은 컴파일 시점에 결정된다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'인터페이스는 자바 8부터 default 메서드로 구현을 가질 수 있다.', a:true, e:'다중 구현이 가능해 무관한 타입에 능력을 부여할 때 쓴다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'제네릭 타입 정보는 런타임에도 그대로 남아 있다.', a:false, e:'타입 소거로 지워지므로 new T() 같은 코드가 불가능하다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'for-each 순회 중 컬렉션을 직접 수정하면 예외가 발생할 수 있다.', a:true, e:'ConcurrentModificationException 이며 Iterator.remove 로 해결한다.' },
  { s:'s1', t:'JVM · GC', d:1, q:'Metaspace 는 힙 안에 위치한다.', a:false, e:'네이티브 메모리에 위치한다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'JIT 컴파일러는 자주 실행되는 바이트코드를 기계어로 변환한다.', a:true, e:'인터프리터의 반복 실행 비용을 줄인다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'CAS 는 경합이 심할수록 재시도가 늘어 비용이 커질 수 있다.', a:true, e:'경합이 매우 심하면 락이 유리한 경우도 있다.' },
  { s:'s1', t:'동시성 · Java 8+', d:3, q:'orElse 에 전달한 값은 Optional 에 값이 있어도 평가된다.', a:true, e:'비용이 크면 orElseGet 을 사용한다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'가상 스레드는 CPU 집약 연산의 처리 속도를 직접 높여 준다.', a:false, e:'I/O 대기가 많은 작업의 동시 처리량을 높이는 기능이다.' },
  { s:'s2', t:'IoC · DI · 빈', d:1, q:'DI 는 IoC 를 구현하는 방법 중 하나다.', a:true, e:'제어권을 컨테이너가 갖는 것이 IoC 다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'프로토타입 스코프 빈은 컨테이너가 소멸 콜백까지 관리한다.', a:false, e:'생성 이후 관리는 사용하는 쪽 책임이다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'@PostConstruct 는 의존관계 주입이 끝난 뒤 호출된다.', a:true, e:'생성 → 주입 → 초기화 콜백 순이다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'스프링 부트 2.6 이상은 순환 참조를 기본적으로 허용한다.', a:false, e:'기본 금지이며 설계를 분리하는 것이 정답이다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'@Cacheable 과 @Async 도 자기 호출에서는 동작하지 않는다.', a:true, e:'모두 프록시를 거쳐야 적용되는 기능이다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'MANDATORY 는 트랜잭션이 없으면 새로 시작한다.', a:false, e:'없으면 예외를 던진다. 새로 시작하는 것은 REQUIRED 다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'설정 값은 application.yml 이 환경 변수보다 우선한다.', a:false, e:'커맨드라인 인자 → 환경 변수 → 설정 파일 순이다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'Actuator 엔드포인트는 운영에서 노출 범위를 제한해야 한다.', a:true, e:'인증 없이 열면 운영 정보가 노출된다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'스프링 부트 3.x 는 javax 대신 jakarta 네임스페이스를 사용한다.', a:true, e:'Java 17 이상이 필수다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'준영속 상태 엔티티의 값을 바꾸면 커밋 시 UPDATE 가 실행된다.', a:false, e:'변경 감지는 영속 상태에서만 동작한다.' },
  { s:'s3', t:'영속성 컨텍스트', d:3, q:'mappedBy 쪽 @OneToOne 은 지연 로딩이 동작하지 않는다.', a:true, e:'외래 키가 없어 존재 여부 확인이 필요하기 때문이다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'IDENTITY 전략을 쓰면 persist 시점에 즉시 INSERT 가 실행된다.', a:true, e:'쓰기 지연 이점이 사라진다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'엔티티에 롬복 @Data 를 붙이는 것은 권장된다.', a:false, e:'equals·hashCode·toString 문제로 지양한다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'커버링 인덱스를 사용하면 테이블 접근을 생략할 수 있다.', a:true, e:'조회 컬럼이 모두 인덱스에 있을 때 가능하다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'EXPLAIN 의 type 이 ALL 이면 풀 스캔을 의미한다.', a:true, e:'Using filesort·Using temporary 도 경고 신호다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'카디널리티가 낮은 컬럼일수록 인덱스 효율이 좋다.', a:false, e:'선택도가 높은(값이 다양한) 컬럼이 유리하다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:3, q:'커넥션 풀 크기를 늘리면 언제나 처리량이 올라간다.', a:false, e:'DB 코어·디스크가 병목이면 경합만 늘어난다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:1, q:'UDP 는 연결을 수립하지 않아 DNS 나 실시간 전송에 쓰인다.', a:true, e:'TCP 는 연결·신뢰·순서·흐름 제어를 제공한다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'HTTP/3 는 TCP 대신 QUIC(UDP) 을 사용한다.', a:true, e:'TCP 단의 HOL 블로킹을 해소한다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'조건부 요청에서 리소스가 변경되지 않았으면 서버는 304 를 반환한다.', a:true, e:'ETag 나 Last-Modified 로 판단한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'SameSite 쿠키 속성은 XSS 를 직접 막아 준다.', a:false, e:'CSRF 완화 수단이며 XSS 는 출력 인코딩과 CSP 로 대응한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:3, q:'OAuth 2.0 의 Implicit 플로우는 현재 권장되는 방식이다.', a:false, e:'Authorization Code + PKCE 가 권장된다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'Spring Security 의 SecurityContextHolder 는 ThreadLocal 기반이다.', a:true, e:'스레드가 바뀌면 컨텍스트 전파에 주의해야 한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'개방-폐쇄 원칙은 확장에는 열려 있고 수정에는 닫혀 있어야 한다는 원칙이다.', a:true, e:'전략 패턴과 추상화가 대표적인 실현 수단이다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'Cache-Aside 는 애플리케이션이 캐시 미스 시 DB 를 읽어 캐시를 채우는 방식이다.', a:true, e:'가장 흔한 전략이며 무효화 설계가 함께 필요하다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'2PC 는 가용성과 성능 손해가 커서 실무 분산 환경에서 널리 쓰인다.', a:false, e:'그래서 Saga 와 최종 일관성을 택하는 경우가 많다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:3, q:'애그리거트는 일관성 경계이므로 트랜잭션 단위로 삼는 것이 기본이다.', a:true, e:'경계를 넘는 일관성은 이벤트로 맞춘다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'테스트 커버리지 수치가 높으면 항상 좋은 테스트다.', a:false, e:'중요한 분기를 덮었는지가 더 중요하다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'Dockerfile 은 자주 바뀌는 파일을 앞쪽에 복사해야 캐시가 잘 활용된다.', a:false, e:'자주 바뀌는 것을 뒤에 두어야 앞 레이어 캐시가 유지된다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'멀티 스테이지 빌드는 최종 이미지에서 빌드 도구를 제외해 크기를 줄인다.', a:true, e:'실행 단계에는 JRE 슬림 이미지만 남긴다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:3, q:'Redis 분산 락은 만료 시간을 설정하지 않아도 안전하다.', a:false, e:'장애 시 락이 영원히 남아 서비스가 멈출 수 있다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'AWS 보안 그룹은 Stateful 이며 허용 규칙만 정의한다.', a:true, e:'Stateless 이며 거부 규칙을 쓰는 것은 NACL 이다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'자바에서 객체 정렬에 사용되는 TimSort 는 안정 정렬이다.', a:true, e:'기본형 배열은 듀얼 피벗 퀵소트를 사용한다.' },
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'인접 행렬은 희소 그래프에서 메모리 효율이 좋다.', a:false, e:'정점 수의 제곱만큼 공간을 쓰므로 희소 그래프에는 리스트가 유리하다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'세마포어는 카운트 기반이고 뮤텍스는 소유권 개념을 가진다.', a:true, e:'세마포어는 동시 접근 허용 개수를 제어한다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'자기소개는 이력서를 순서대로 읽어 주는 것이 안전하다.', a:false, e:'1분 내로 강점과 지원 동기를 연결하는 편이 낫다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'약점 질문에는 실제 약점과 개선 노력을 함께 말하는 것이 낫다.', a:true, e:'위장형 약점은 준비 부족으로 읽힌다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'희망 연봉은 회사 규정에 따르겠다고만 답하는 것이 유리하다.', a:false, e:'기준 없이 임하면 협상 여지가 사라진다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'주문 시점의 금액은 상품 테이블을 참조하지 말고 스냅샷으로 저장해야 한다.', a:true, e:'가격이 바뀌어도 과거 주문은 불변이어야 한다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'매입(Capture) 이후에는 부분 환불이 가능하다.', a:true, e:'매입 전 승인 취소는 전액 단위로 이뤄진다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'외부 결제 연동에 재시도만 추가해도 중복 결제는 발생하지 않는다.', a:false, e:'멱등 키와 상태 조회가 없으면 중복 결제가 난다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'금액 계산에는 double 대신 정수형이나 BigDecimal 을 사용해야 한다.', a:true, e:'부동소수 오차가 정산 단계에서 드러난다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'정산 배치는 같은 날짜로 두 번 실행하면 금액이 두 배가 되어도 정상이다.', a:false, e:'배치는 재실행해도 결과가 같아야(멱등) 복구가 가능하다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'상태 값을 문자열로 두고 어디서나 변경할 수 있게 하면 불가능한 상태 전이가 발생할 수 있다.', a:true, e:'열거형과 허용 전이 규칙으로 통제해야 한다.' }
];

CPPG.fill = [
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'HashMap 에서 한 버킷의 충돌이 임계치를 넘고 테이블이 충분히 클 때 전환되는 자료구조는?', a:'레드-블랙 트리', k:['트리'], e:'최악 복잡도가 O(n)에서 O(log n)으로 개선된다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'equals 와 함께 반드시 재정의해야 하는 메서드와 그 이유를 쓰시오.', a:'hashCode, 해시 기반 컬렉션에서 조회가 실패하기 때문', k:['hashCode','조회'], e:'equals 가 true 면 hashCode 도 같아야 한다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'JVM 런타임 데이터 영역 중 모든 스레드가 공유하는 영역 2가지를 쓰시오.', a:'힙(Heap), 메서드 영역(Metaspace)', k:['힙','메서드'], e:'스택·PC 레지스터는 스레드별이다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'volatile 이 보장하는 것과 보장하지 않는 것을 각각 쓰시오.', a:'가시성은 보장, 원자성은 보장하지 않음', k:['가시성','원자성'], e:'원자성은 Atomic 이나 락이 필요하다.' },
  { s:'s1', t:'JVM · GC', d:3, q:'OutOfMemoryError 의 대표 유형 3가지를 쓰시오.', a:'Java heap space, Metaspace, GC overhead limit exceeded', k:['heap','Metaspace','GC overhead'], e:'유형별로 원인과 대응이 다르다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'Java 9 부터 기본으로 사용되는 GC 수집기는?', a:'G1 GC', k:['G1'], e:'저지연이 필요하면 ZGC·Shenandoah 를 고려한다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'생성자 주입을 권장하는 이유 3가지 이상을 쓰시오.', a:'불변 보장, 필수 의존 명시, 순환 참조 조기 발견, 테스트 용이', k:['불변','필수','순환','테스트'], e:'필드 주입은 테스트·불변성에 불리하다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:3, q:'@Transactional 이 동작하지 않는 대표 원인 3가지를 쓰시오.', a:'같은 클래스 내부 호출, private 메서드, 예외를 잡아 삼킴, 체크드 예외', k:['내부 호출','private','삼','체크드'], e:'프록시 기반이라는 점에서 대부분의 원인이 나온다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'@Transactional 의 기본 롤백 대상 예외 유형은?', a:'언체크드 예외(RuntimeException, Error)', k:['언체크드','RuntimeException'], e:'체크드 예외는 rollbackFor 지정이 필요하다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'기존 트랜잭션을 보류하고 항상 새 트랜잭션을 시작하는 전파 속성은?', a:'REQUIRES_NEW', k:['REQUIRES_NEW'], e:'별도 커넥션을 점유하므로 풀 고갈에 주의한다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'스프링 AOP 가 프록시를 만드는 두 가지 방식을 쓰시오.', a:'JDK 동적 프록시, CGLIB', k:['JDK','CGLIB'], e:'스프링 부트는 기본적으로 CGLIB 을 사용한다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'자동 설정이 사용자 정의 빈을 덮어쓰지 않게 하는 조건 애너테이션은?', a:'@ConditionalOnMissingBean', k:['ConditionalOnMissingBean'], e:'해당 타입의 빈이 없을 때만 적용된다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'필터와 인터셉터의 적용 위치를 각각 쓰시오.', a:'필터는 DispatcherServlet 앞단(서블릿 레벨), 인터셉터는 핸들러 전후(스프링 MVC)', k:['앞','핸들러'], e:'AOP 는 메서드 실행 시점이다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'영속성 컨텍스트가 제공하는 이점 4가지 이상을 쓰시오.', a:'1차 캐시, 동일성 보장, 쓰기 지연, 변경 감지, 지연 로딩', k:['1차 캐시','동일성','쓰기 지연','변경 감지'], e:'UPDATE 를 직접 호출하지 않아도 되는 이유가 변경 감지다.' },
  { s:'s3', t:'영속성 컨텍스트', d:2, q:'flush 와 clear 의 차이를 쓰시오.', a:'flush 는 쓰기 지연 SQL 전송이고 컨텍스트는 유지, clear 는 컨텍스트 초기화', k:['SQL','초기화'], e:'flush 는 컨텍스트를 비우지 않는다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:3, q:'N+1 문제의 해결 수단 3가지 이상을 쓰시오.', a:'fetch join, @EntityGraph, @BatchSize, DTO 직접 조회', k:['fetch join','EntityGraph','BatchSize','DTO'], e:'페이징이 필요하면 @BatchSize 가 안전하다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:3, q:'컬렉션 fetch join 의 제약 3가지를 쓰시오.', a:'결과 행 중복, 컬렉션은 하나만 가능, 페이징 불가(메모리 페이징)', k:['중복','하나','페이징'], e:'ToOne 은 fetch join, 컬렉션은 batch size 조합이 정석이다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'@ManyToOne 의 기본 페치 전략과 실무 권장 설정을 쓰시오.', a:'기본은 EAGER, 실무는 LAZY 로 변경', k:['EAGER','LAZY'], e:'예측 불가한 조인과 N+1 을 막기 위해서다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'MySQL InnoDB 와 Oracle 의 기본 트랜잭션 격리 수준을 각각 쓰시오.', a:'InnoDB 는 REPEATABLE READ, Oracle 은 READ COMMITTED', k:['REPEATABLE','COMMITTED'], e:'PostgreSQL 도 READ COMMITTED 가 기본이다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'인덱스를 타지 못하는 대표적인 경우 3가지를 쓰시오.', a:'컬럼 가공, 묵시적 형 변환, 복합 인덱스 선두 컬럼 미사용, 앞 와일드카드 LIKE', k:['가공','형 변환','선두','와일드카드'], e:'EXPLAIN 으로 먼저 확인한다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'동시 재고 차감 문제를 해결하는 방법 3가지를 쓰시오.', a:'낙관적 락과 재시도, 비관적 락, DB 원자 UPDATE', k:['낙관','비관','원자'], e:'충돌 빈도와 트래픽에 따라 선택한다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'HTTP 메서드 중 멱등하지 않은 것 2가지를 쓰시오.', a:'POST, PATCH', k:['POST','PATCH'], e:'재시도 설계 시 멱등 키가 필요하다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:1, q:'401 과 403 의 의미를 각각 쓰시오.', a:'401 은 인증 실패, 403 은 권한 없음', k:['인증','권한'], e:'혼동이 가장 잦은 상태 코드다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'세션 방식과 JWT 의 결정적 차이 2가지를 쓰시오.', a:'서버 상태 보관 여부, 즉시 무효화 가능 여부', k:['상태','무효화'], e:'확장성과 무효화가 트레이드오프의 축이다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'JWT 의 세 부분과 페이로드에 대한 주의점을 쓰시오.', a:'Header, Payload, Signature / 페이로드는 암호화가 아니므로 민감 정보 금지', k:['Header','Payload','Signature','민감'], e:'Base64 인코딩일 뿐이다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'CORS 프리플라이트 요청에 사용되는 HTTP 메서드는?', a:'OPTIONS', k:['OPTIONS'], e:'단순 요청이 아닐 때 브라우저가 먼저 보낸다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'SQL 인젝션과 XSS 의 근본 대응을 각각 쓰시오.', a:'SQL 인젝션은 파라미터 바인딩, XSS 는 출력 인코딩', k:['바인딩','인코딩'], e:'CSRF 는 토큰과 SameSite 쿠키로 대응한다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'SOLID 5원칙을 쓰시오.', a:'단일 책임, 개방-폐쇄, 리스코프 치환, 인터페이스 분리, 의존 역전', k:['단일','개방','리스코프','인터페이스','의존'], e:'스프링 DI 는 의존 역전 원칙의 구현이다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'성능 문제 접근 순서를 쓰시오.', a:'측정, 병목 식별, 개선, 재측정', k:['측정','병목','개선','재측정'], e:'캐시를 먼저 넣는 것은 안티패턴이다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'분산 트랜잭션에서 Saga 패턴이 사용하는 보정 수단은?', a:'보상 트랜잭션', k:['보상'], e:'코레오그래피와 오케스트레이션 방식이 있다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'외부 호출 복원성 패턴 4가지를 쓰시오.', a:'타임아웃, 재시도(지수 백오프), 서킷 브레이커, 폴백', k:['타임아웃','재시도','서킷','폴백'], e:'벌크헤드와 레이트 리밋도 함께 쓴다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'캐시 스탬피드를 완화하는 방법 2가지를 쓰시오.', a:'만료 시간 지터, 뮤텍스(단일 갱신), 사전 갱신', k:['지터','뮤텍스','사전'], e:'동시 만료로 원본이 폭주하는 현상이다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'무중단 배포에서 DB 컬럼을 제거할 때의 단계 순서를 쓰시오.', a:'신규 컬럼 추가, 코드 배포, 데이터 이전, 기존 컬럼 삭제', k:['추가','배포','이전','삭제'], e:'단계를 합치면 배포 중 구버전이 깨진다.' },
  { s:'s6', t:'컨테이너 · 배포', d:2, q:'Kubernetes 의 Readiness 와 Liveness 프로브의 역할을 각각 쓰시오.', a:'Readiness 는 트래픽 투입 여부, Liveness 는 재시작 여부', k:['트래픽','재시작'], e:'스프링 Actuator health 와 연결해 사용한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'운영 중인 Redis 에서 피해야 할 명령 2가지와 대체 명령을 쓰시오.', a:'KEYS, FLUSHALL / 대체는 SCAN', k:['KEYS','FLUSHALL','SCAN'], e:'싱글 스레드라 O(n) 명령이 전체를 블로킹한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'Kafka 에서 순서가 보장되는 단위와 그 대응 방법을 쓰시오.', a:'파티션 단위 보장, 순서가 필요하면 키로 파티션 고정', k:['파티션','키'], e:'파티션 수 이상으로 컨슈머를 늘려도 병렬도가 오르지 않는다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'관측 가능성의 3요소를 쓰시오.', a:'메트릭, 로그, 트레이스', k:['메트릭','로그','트레이스'], e:'RED·USE 지표와 함께 본다.' },
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'입력 크기 n 이 10만일 때 목표로 삼아야 할 시간 복잡도는?', a:'O(n log n) 이하', k:['n log n'], e:'제한 조건이 알고리즘을 지정한다.' },
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'LRU 캐시를 자바 표준 컬렉션으로 구현할 때 쓰는 클래스와 설정을 쓰시오.', a:'LinkedHashMap, accessOrder 를 true 로 설정', k:['LinkedHashMap','accessOrder'], e:'removeEldestEntry 를 재정의한다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'자바 코딩 테스트에서 대용량 입출력을 처리하는 방법을 쓰시오.', a:'BufferedReader 와 StringTokenizer 로 입력, StringBuilder 로 출력', k:['BufferedReader','StringBuilder'], e:'Scanner 는 느려 시간 초과가 난다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'경험 질문에 사용하는 STAR 기법의 네 단계를 쓰시오.', a:'Situation, Task, Action, Result', k:['Situation','Task','Action','Result'], e:'Result 는 반드시 수치로 표현한다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'이직 사유를 답할 때 지켜야 할 원칙 2가지를 쓰시오.', a:'전 직장 험담 금지, 회피형이 아닌 지향형으로 말하기', k:['험담','지향'], e:'지향점이 지원 회사에서 가능한지 연결한다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'기술 질문 답변의 3단 구조를 쓰시오.', a:'정의 한 줄, 동작과 이유, 내 경험과 트레이드오프', k:['정의','동작','경험'], e:'세 번째가 없으면 공부한 사람으로만 보인다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'모르는 질문을 받았을 때의 대응 순서를 쓰시오.', a:'아는 범위까지 말하기, 모른다고 인정, 추론 방향 제시', k:['아는','인정','추론'], e:'지어내면 꼬리 질문에서 무너진다.' },

  // ───────── 보강 ─────────
  { s:'s1', t:'자바 기본 · 컬렉션', d:1, q:'오버로딩과 오버라이딩의 결정 시점을 각각 쓰시오.', a:'오버로딩은 컴파일 시점(정적 바인딩), 오버라이딩은 런타임(동적 바인딩)', k:['컴파일','런타임'], e:'다형성의 근거가 되는 것은 오버라이딩이다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'HashMap 의 기본 로드 팩터와 초과 시 동작을 쓰시오.', a:'0.75, 초과하면 테이블을 2배로 리사이즈하고 재해시', k:['0.75','리사이즈'], e:'리사이즈 비용까지 말하면 깊이가 드러난다.' },
  { s:'s1', t:'동시성 · Java 8+', d:2, q:'교착 상태의 4가지 조건을 쓰시오.', a:'상호배제, 점유와 대기, 비선점, 환형 대기', k:['상호배제','점유','비선점','환형'], e:'락 획득 순서를 통일하면 환형 대기를 깬다.' },
  { s:'s1', t:'JVM · GC', d:2, q:'클래스 로더의 위임 순서를 쓰시오.', a:'Bootstrap, Platform(Extension), Application 순으로 위임', k:['Bootstrap','Application'], e:'상위에 먼저 위임해 중복 로딩과 변조를 막는다.' },
  { s:'s1', t:'JVM · GC', d:1, q:'JVM 힙의 세대별 구조를 쓰시오.', a:'Young(Eden, Survivor 0/1)과 Old', k:['Eden','Survivor','Old'], e:'약한 세대 가설에 근거한 구조다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:2, q:'불변 객체를 만들기 위한 조건 3가지 이상을 쓰시오.', a:'final 클래스, 모든 필드 final, setter 없음, 가변 필드는 방어적 복사', k:['final','setter','방어적'], e:'스레드 안전과 캐싱 안전이라는 이점이 따라온다.' },
  { s:'s1', t:'자바 기본 · 컬렉션', d:3, q:'제네릭 와일드카드 PECS 원칙을 풀어 쓰시오.', a:'읽기(생산자)는 extends, 쓰기(소비자)는 super', k:['extends','super'], e:'Producer-Extends, Consumer-Super 의 약자다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'스프링 빈의 생명주기 순서를 쓰시오.', a:'생성, 의존관계 주입, @PostConstruct, 사용, @PreDestroy, 소멸', k:['주입','PostConstruct','PreDestroy'], e:'초기화 콜백은 주입이 끝난 뒤 호출된다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:3, q:'자기 호출로 @Transactional 이 동작하지 않을 때의 해결책 3가지를 쓰시오.', a:'다른 빈으로 분리, 자기 자신 주입, AopContext.currentProxy 사용', k:['분리','주입','AopContext'], e:'가장 권장되는 것은 책임을 다른 빈으로 분리하는 것이다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'스프링 부트 설정 값의 우선순위를 높은 것부터 3단계 쓰시오.', a:'커맨드라인 인자, 환경 변수, 설정 파일(application.yml)', k:['커맨드라인','환경 변수','설정 파일'], e:'컨테이너 배포에서는 환경 변수 주입을 많이 쓴다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'슬라이스 테스트 애너테이션 3가지와 각 범위를 쓰시오.', a:'@WebMvcTest 웹 계층, @DataJpaTest JPA 계층, @SpringBootTest 전체 컨텍스트', k:['WebMvcTest','DataJpaTest','SpringBootTest'], e:'범위를 좁혀야 빌드 시간이 유지된다.' },
  { s:'s2', t:'AOP · 트랜잭션', d:2, q:'MANDATORY 와 NEVER 전파 속성의 동작을 각각 쓰시오.', a:'MANDATORY 는 트랜잭션이 없으면 예외, NEVER 는 있으면 예외', k:['없으면','있으면'], e:'경계를 강제하고 싶을 때 사용한다.' },
  { s:'s2', t:'IoC · DI · 빈', d:2, q:'순환 참조가 발생했을 때의 근본 해결 방향을 쓰시오.', a:'공통 로직 분리나 이벤트 기반 분리로 설계를 변경', k:['분리','설계'], e:'@Lazy 는 임시방편이며 부트 2.6+ 는 기본 금지다.' },
  { s:'s2', t:'MVC · Spring Boot', d:2, q:'스프링 부트 3.x 로 올릴 때 확인해야 할 변화 2가지를 쓰시오.', a:'Java 17 이상 필수, javax 에서 jakarta 로 네임스페이스 변경', k:['17','jakarta'], e:'의존 라이브러리 호환성도 함께 확인한다.' },
  { s:'s3', t:'영속성 컨텍스트', d:1, q:'JPA 엔티티의 생명주기 4가지 상태를 쓰시오.', a:'비영속, 영속, 준영속, 삭제', k:['비영속','영속','준영속','삭제'], e:'변경 감지는 영속 상태에서만 동작한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'페이징이 필요한 목록에서 컬렉션 연관을 조회할 때 권장되는 설정을 쓰시오.', a:'@BatchSize 또는 default_batch_fetch_size 로 IN 절 조회', k:['BatchSize','batch_fetch_size'], e:'ToOne 은 fetch join, 컬렉션은 배치가 정석 조합이다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'커버링 인덱스가 무엇인지 쓰시오.', a:'조회 컬럼이 모두 인덱스에 있어 테이블 접근을 생략하는 인덱스', k:['테이블 접근','생략'], e:'조회 성능은 좋아지지만 인덱스 크기는 커진다.' },
  { s:'s3', t:'DB 기본 · 인덱스', d:2, q:'EXPLAIN 결과에서 성능 경고로 보아야 할 신호 2가지를 쓰시오.', a:'type 이 ALL(풀 스캔), Extra 의 Using filesort 또는 Using temporary', k:['ALL','filesort'], e:'추측 전에 실행 계획부터 확인한다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'JPA 기본 키 생성 전략 3가지와 특징을 쓰시오.', a:'IDENTITY 는 즉시 INSERT, SEQUENCE 는 allocationSize 로 최적화, TABLE 은 느림', k:['IDENTITY','SEQUENCE','TABLE'], e:'MySQL 은 IDENTITY, Oracle 은 SEQUENCE 를 주로 쓴다.' },
  { s:'s3', t:'N+1 · JPA 실무', d:2, q:'JPQL 과 QueryDSL 의 차이를 쓰시오.', a:'JPQL 은 문자열이라 컴파일 시 오류를 못 잡고, QueryDSL 은 타입 안전하며 동적 쿼리에 강함', k:['문자열','타입 안전'], e:'복잡한 튜닝 쿼리는 네이티브를 쓰기도 한다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:1, q:'TCP 3-way 핸드셰이크의 순서를 쓰시오.', a:'SYN, SYN+ACK, ACK', k:['SYN','ACK'], e:'종료는 FIN, ACK, FIN, ACK 의 4-way 다.' },
  { s:'s4', t:'HTTP · CORS · REST', d:2, q:'HTTP/2 가 1.1 대비 개선한 점 3가지를 쓰시오.', a:'멀티플렉싱, 헤더 압축(HPACK), 바이너리 프레이밍', k:['멀티플렉싱','헤더 압축','바이너리'], e:'HTTP/3 는 QUIC 기반으로 TCP HOL 블로킹을 해소한다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:2, q:'쿠키의 보안 관련 속성 3가지와 역할을 쓰시오.', a:'HttpOnly 는 스크립트 접근 차단, Secure 는 HTTPS 전용, SameSite 는 교차 사이트 전송 제한', k:['HttpOnly','Secure','SameSite'], e:'SameSite 는 CSRF 완화 수단이다.' },
  { s:'s4', t:'인증 · 인가 · 웹 보안', d:3, q:'모바일 앱이나 SPA 에서 권장되는 OAuth 2.0 플로우를 쓰시오.', a:'Authorization Code 방식에 PKCE 적용', k:['Authorization Code','PKCE'], e:'Implicit 은 폐기가 권장된다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'전략 패턴을 적용해 해결하는 문제와 만족하는 원칙을 쓰시오.', a:'조건 분기 증가를 구현체 분리로 해결하며 개방-폐쇄 원칙을 만족', k:['분기','개방'], e:'결제 수단 추가가 대표적인 사례다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'대표적인 캐시 전략 3가지를 쓰시오.', a:'Cache-Aside, Write-Through, Write-Behind', k:['Aside','Through','Behind'], e:'가장 흔한 것은 Cache-Aside 다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'시스템 설계 면접의 진행 단계를 순서대로 쓰시오.', a:'요구사항 확인, 개략 추정, API와 데이터 모델, 개략 아키텍처, 병목과 확장, 트레이드오프 정리', k:['요구사항','추정','아키텍처','트레이드오프'], e:'요구사항 확인 없이 그림부터 그리면 감점이다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'레이어드 아키텍처의 안티패턴 3가지를 쓰시오.', a:'컨트롤러에 비즈니스 로직, 서비스 간 무분별한 호출, 엔티티를 API 응답으로 노출', k:['컨트롤러','서비스','엔티티'], e:'의존은 상위에서 하위로 단방향이어야 한다.' },
  { s:'s6', t:'컨테이너 · 배포', d:1, q:'대표적인 배포 전략 3가지를 쓰시오.', a:'롤링, 블루-그린, 카나리', k:['롤링','블루','카나리'], e:'기능 플래그는 배포와 릴리스를 분리한다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:3, q:'Redis 분산 락 구현 시 반드시 포함해야 할 요소 2가지를 쓰시오.', a:'만료 시간 설정(SET NX PX), 소유자 토큰 확인 후 해제', k:['만료','소유자'], e:'짧은 임계 구간과 멱등 설계를 함께 말하면 좋다.' },
  { s:'s6', t:'Redis · Kafka · 모니터링', d:2, q:'RED 지표와 USE 지표의 구성 요소를 각각 쓰시오.', a:'RED 는 Rate, Errors, Duration / USE 는 Utilization, Saturation, Errors', k:['Rate','Duration','Utilization','Saturation'], e:'RED 는 요청 기반, USE 는 자원 기반 관점이다.' },
  { s:'s7', t:'복잡도 · 자료구조 선택', d:2, q:'입력 크기 n 이 1,000 과 10 일 때 각각 허용되는 대략적 복잡도를 쓰시오.', a:'n 이 1,000 이면 O(n제곱), n 이 10 이면 O(2의 n승) 또는 O(n!)', k:['제곱','2'], e:'제한 조건이 알고리즘을 사실상 지정한다.' },
  { s:'s7', t:'알고리즘 · OS 기초', d:2, q:'자바가 객체 배열과 기본형 배열 정렬에 사용하는 알고리즘을 각각 쓰시오.', a:'객체는 TimSort(안정), 기본형은 듀얼 피벗 퀵소트(비안정)', k:['TimSort','퀵소트'], e:'안정성이 필요한지가 선택 근거가 된다.' },
  { s:'s8', t:'STAR · 경험 정리', d:2, q:'면접 전에 준비해야 할 경험 5가지 유형을 쓰시오.', a:'성능 개선, 장애 해결, 기술 선택, 협업 갈등 조율, 실패와 배움', k:['성능','장애','기술 선택','협업','실패'], e:'각각을 STAR 로 정리해 소리 내어 연습한다.' },
  { s:'s8', t:'이직 사유 · 역질문', d:2, q:'역질문을 준비할 때의 원칙과 피해야 할 유형을 쓰시오.', a:'면접 유형별로 2~3개 준비, 연봉과 복지만 묻거나 홈페이지에 있는 내용은 피함', k:['준비','연봉'], e:'없습니다 라는 답이 가장 나쁘다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'결제 도메인에서 승인, 매입, 취소, 환불의 차이를 쓰시오.', a:'승인은 한도 확보, 매입은 청구 확정, 취소는 매입 전 전액 되돌림, 환불은 매입 후 부분 가능', k:['승인','매입','취소','환불'], e:'취소와 환불을 구분하지 못하면 도메인 이해가 얕아 보인다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:3, q:'업종과 무관하게 통하는 도메인 설계 문법 4가지 이상을 쓰시오.', a:'상태 머신, 멱등성, 원장과 이력, 정합성 검증(대사), 보상 트랜잭션', k:['상태','멱등','원장','대사'], e:'도메인 경험이 없을 때 이 구조로 답을 연결한다.' },
  { s:'s5', t:'MSA · 대용량 설계', d:2, q:'한정 수량 상품의 재고 차감에서 사용할 수 있는 동시성 제어 수단 3가지를 쓰시오.', a:'DB 원자 UPDATE, 비관적 락, 낙관적 락과 재시도, 분산 락 또는 대기열', k:['원자','비관','낙관'], e:'충돌 빈도와 트래픽 형태로 선택 근거를 말한다.' },
  { s:'s5', t:'설계 원칙 · 패턴', d:2, q:'도메인 데이터에서 금액과 시간을 다루는 원칙을 각각 쓰시오.', a:'금액은 정수 또는 BigDecimal 로 double 금지, 시간은 UTC 로 저장하고 표시 시점에 변환', k:['BigDecimal','UTC'], e:'반올림 규칙과 마감 기준 시각도 함께 정의한다.' }
];

/* ── 8. 개념정리 ────────────────────────────────────────────
   카드·시트가 "요약·암기"라면 이 화면은 ★분야별 개념 전문(全文)★ 이다.
   면접은 정답 암기가 아니라 ★내 경험으로 설명할 수 있는가★ 가 평가 대상이므로,
   각 항목 끝의 "면접 답변 골격"을 자기 사례로 바꿔 두는 것이 목표다. */
CPPG.notes = [

/* ───────── s1 Java · JVM ───────── */
{ s:'s1', no:'1-1', t:'자바 기본 · 컬렉션', title:'객체지향 기본기와 컬렉션 내부 동작', ref:'1_Java_JVM §1~2', body:[
  { h:'자주 묻는 기본기', li:[
    '★OOP 4대 특성★ — 캡슐화 · 상속 · 다형성 · 추상화.',
    '★오버로딩★ 은 같은 클래스에서 매개변수를 달리하는 것(컴파일 시 결정), ★오버라이딩★ 은 상속 관계에서 시그니처를 같게 재정의하는 것(실행 시 동적 바인딩).',
    '★== 는 참조 비교, equals() 는 논리적 동등성★. ★equals() 를 재정의하면 hashCode() 도 함께 재정의★ 해야 HashMap·HashSet 이 정상 동작한다.',
    '★String 은 불변★ 이라 문자열 연결이 잦으면 새 객체가 계속 생긴다 → 단일 스레드는 ★StringBuilder★, 동기화가 필요하면 StringBuffer.',
    '접근 제어자 — public > protected > default(package-private) > ★private★.',
    '★추상 클래스★ 는 상태와 공통 구현을 갖는 단일 상속, ★인터페이스★ 는 규약 중심의 다중 구현.'
  ]},
  { h:'예외', li:[
    '★체크드 예외★ 는 컴파일러가 처리를 강제하고, ★언체크드(RuntimeException)★ 는 강제하지 않는다.',
    '★스프링의 @Transactional 은 기본적으로 언체크드 예외에서만 롤백★ 한다 — 3-1과 연결되는 단골 함정.',
    '예외를 ★삼키지 않는다★ — catch 후 무시하면 롤백도 안 되고 원인 추적도 불가능해진다.'
  ]},
  { h:'컬렉션 선택', tb:{ head:['요구','선택','비고'], rows:[
    ['인덱스 조회가 잦다','ArrayList','get O(1), 중간 삽입·삭제 O(n)'],
    ['중복 제거','HashSet','순서 없음'],
    ['입력 순서 유지','LinkedHashMap / LinkedHashSet','—'],
    ['정렬 상태 유지 · 범위 조회','TreeMap / TreeSet','O(log n), 내부는 Red-Black 트리'],
    ['최대·최소 반복 추출','PriorityQueue','offer/poll O(log n)'],
    ['양끝 삽입·삭제(스택·BFS 큐)','★ArrayDeque★','레거시 Stack 대신 권장']
  ]}},
  { h:'HashMap 내부 동작 ★단골 심화★', li:[
    '키의 해시로 ★버킷 인덱스★ 를 구하고, 충돌하면 같은 버킷에 ★연결 리스트★ 로 매단다.',
    '한 버킷의 노드가 임계치(8)를 넘고 테이블이 충분히 크면 ★트리(Red-Black)로 변환★ 되어 최악이 O(n) → ★O(log n)★ 이 된다.',
    '★로드 팩터(기본 0.75)★ 를 넘으면 ★리사이즈★ 하며 전체 재해싱이 일어난다 — 예상 크기를 알면 초기 용량을 지정하는 것이 좋다.',
    '답변 시 ★충돌 처리와 리사이즈 비용★ 까지 언급하면 깊이가 드러난다.'
  ]},
  { h:'주의할 API', li:[
    '반복 중 컬렉션을 직접 수정하면 ★ConcurrentModificationException★ — ★Iterator.remove()★ 또는 removeIf 를 쓴다.',
    '★Comparable★ 은 클래스 자신의 기본 정렬(compareTo), ★Comparator★ 는 외부에서 주는 정렬 기준(compare).'
  ]}
]},

{ s:'s1', no:'1-2', t:'JVM · GC', title:'JVM 메모리 구조와 GC · OOM 진단', ref:'1_Java_JVM §3', body:[
  { h:'실행 흐름', li:[
    '.java → (javac) → .class 바이트코드 → ★클래스 로더★ → 런타임 데이터 영역 → ★실행 엔진(인터프리터 + JIT 컴파일러)★.',
    '클래스 로더 3단계 — ★로딩 → 링킹(검증·준비·해석) → 초기화★. ★위임 모델★ — Bootstrap → Platform → Application.'
  ]},
  { h:'런타임 데이터 영역', tb:{ head:['영역','공유 범위','내용'], rows:[
    ['★Heap★','스레드 공유','객체·배열 — ★GC 대상★'],
    ['Method Area','스레드 공유','클래스 메타데이터·상수 풀·static — Java 8+ ★Metaspace★(네이티브 메모리)'],
    ['JVM Stack','★스레드별★','스택 프레임 — 깊으면 StackOverflowError'],
    ['PC Register','스레드별','현재 실행 명령 주소'],
    ['Native Method Stack','스레드별','네이티브 호출']
  ]}},
  { h:'Java 8 의 변화', li:[
    '★PermGen 이 제거되고 Metaspace 로 이동★ 했다 — 힙 밖의 네이티브 메모리를 쓰므로 기본적으로 한도가 없다(-XX:MaxMetaspaceSize 로 제한).',
    '"PermGen OutOfMemory 가 사라진 이유" 로 자주 질문된다.'
  ]},
  { h:'힙 구조와 GC', li:[
    '★Young(Eden + Survivor 0/1) + Old★ 구조. 근거는 ★약한 세대 가설(대부분의 객체는 금방 죽는다)★.',
    '★Minor GC★ — Young 영역, 짧고 잦다. ★Major/Full GC★ — Old 포함, 길고 ★Stop-The-World★ 영향이 크다.',
    '알고리즘 — Mark-Sweep-Compact, Young 은 Copy 방식.',
    '수집기 — Serial · Parallel · CMS(폐기) · ★G1(Java 9+ 기본)★ · ZGC·Shenandoah(저지연).'
  ]},
  { h:'OutOfMemoryError 원인 구분 ★실무 질문★', tb:{ head:['메시지','원인'], rows:[
    ['Java heap space','객체 누수 · 과도한 캐시 · 대용량 조회'],
    ['Metaspace','클래스 과다 로딩(동적 프록시·리로딩)'],
    ['GC overhead limit exceeded','GC 시간이 과도해 진전이 없음']
  ]}},
  { h:'진단 흐름 — 답변 골격', li:[
    '① ★힙 덤프 확보★ (-XX:+HeapDumpOnOutOfMemoryError) → ② MAT 등으로 ★지배 트리(Dominator Tree)★ 분석 → ③ 누수 지점 확인.',
    '모니터링 도구 — jstat · jmap · jcmd · VisualVM · APM.',
    '"GC 로그와 힙 사용량 추이를 먼저 보고, 누수인지 단순 부족인지 구분한 뒤 조치했다" 는 순서를 보여 주는 것이 핵심.'
  ]}
]},

{ s:'s1', no:'1-3', t:'동시성 · Java 8+', title:'동기화 · 스레드 풀 · 람다/스트림 · 가상 스레드', ref:'1_Java_JVM §4~5', body:[
  { h:'동기화 도구', tb:{ head:['도구','보장','용도'], rows:[
    ['synchronized','상호배제 + 가시성','메서드·블록 모니터 락, 진입/해제 자동'],
    ['ReentrantLock','상호배제 + 가시성','명시적 lock/unlock · ★tryLock(타임아웃)★ · 공정성 옵션'],
    ['★volatile★','★가시성만(원자성 X)★','플래그 변수'],
    ['Atomic 계열','CAS 기반 원자 연산','AtomicInteger 등 카운터']
  ]}},
  { h:'가장 유명한 함정', li:[
    '"volatile 로 카운터를 안전하게 증가시킬 수 있나요?" → ★불가능★.',
    '★i++ 는 읽기–수정–쓰기 3단계라 원자적이지 않다★ → ★AtomicInteger★ 또는 락을 써야 한다.',
    'volatile 은 ★한 스레드가 쓰고 여러 스레드가 읽는 플래그★ 에 적합하다.'
  ]},
  { h:'스레드 풀', li:[
    'ExecutorService — newFixedThreadPool · newCachedThreadPool · newSingleThreadExecutor.',
    '★실무 권장은 ThreadPoolExecutor 로 코어/최대 스레드·큐 크기·거부 정책을 직접 지정★ 하는 것이다.',
    '★Executors 기본 팩터리는 무제한 큐 또는 무제한 스레드라 OOM 위험★ 이 있다 — 이 이유를 말하면 좋은 인상을 준다.',
    '스레드 안전 컬렉션 — ConcurrentHashMap · CopyOnWriteArrayList · BlockingQueue.'
  ]},
  { h:'교착 상태와 ThreadLocal', li:[
    '교착 상태 4조건 — ★상호배제 · 점유와 대기 · 비선점 · 환형 대기★.',
    '실무 예방 — ★락 획득 순서 통일★ · tryLock 타임아웃 · 락 범위 최소화.',
    '★ThreadLocal 은 스레드 풀에서 remove() 하지 않으면 값이 다음 요청으로 새어 나간다★ — 보안 사고로 이어질 수 있는 단골 질문.'
  ]},
  { h:'Java 8+ 주요 변화', li:[
    'Java 8 — 람다 · 스트림 · Optional · 인터페이스 default 메서드.',
    'Java 11 — var · 새 HttpClient (LTS). Java 17 — ★record · sealed · switch 패턴 매칭★ (LTS).',
    'Java 21 — ★가상 스레드(Virtual Thread)★ · 패턴 매칭 정식화 (LTS). I/O 대기가 많은 서버에 유리하다.',
    'CompletableFuture — thenApply · thenCompose · allOf 로 비동기를 조합한다.'
  ]},
  { h:'스트림 · Optional 주의점', li:[
    '중간 연산은 ★지연(lazy)★ 이며 최종 연산에서 한 번에 실행된다.',
    '★한 번 소비한 스트림은 재사용할 수 없다★.',
    '★병렬 스트림은 만능이 아니다★ — 데이터가 작거나 I/O 작업이면 오히려 손해다(공용 ForkJoinPool 을 공유하는 문제도 있다).',
    'Optional 은 ★반환 타입 용도★ 이며 필드·파라미터에 남용하지 않는다.',
    '★orElse(값)는 항상 평가되고, orElseGet(람다)는 필요할 때만 평가★ 된다 — 비용이 큰 기본값이면 orElseGet.'
  ]}
]},

/* ───────── s2 Spring · Spring Boot ───────── */
{ s:'s2', no:'2-1', t:'IoC · DI · 빈', title:'IoC/DI · 주입 방식 · 빈 스코프와 생명주기', ref:'2_Spring §1', body:[
  { h:'IoC 와 DI', li:[
    '★IoC(제어의 역전)★ — 객체 생성과 생명주기의 제어권을 컨테이너가 가진다.',
    '★DI(의존성 주입)★ — 필요한 의존 객체를 외부에서 넣어 준다.',
    '이 둘의 설계적 근거가 ★SOLID 의 DIP(구체가 아니라 추상에 의존)★ 이다.'
  ]},
  { h:'주입 방식 3가지', tb:{ head:['방식','장점','한계'], rows:[
    ['★생성자 주입(권장)★','final 불변 가능 · 필수 의존이 드러남 · ★순환 참조를 기동 시점에 발견★ · 테스트 쉬움','—'],
    ['Setter 주입','선택적 의존에 적합','불변 보장 불가'],
    ['필드 주입(@Autowired)','간결','★테스트·불변성에 불리★ — 지양']
  ]}},
  { h:'"왜 생성자 주입인가" 답변 골격', li:[
    '① ★final 로 불변★ 을 보장한다.',
    '② 생성자 시그니처만 봐도 ★의존 관계가 드러난다★(의존이 너무 많으면 SRP 위반 신호).',
    '③ ★순환 참조를 애플리케이션 기동 시점에 발견★ 한다.',
    '④ 프레임워크 없이 ★new 로 테스트★ 할 수 있다.'
  ]},
  { h:'빈 등록과 스코프', li:[
    '등록 — @Component(+@Service·@Repository·@Controller) + 컴포넌트 스캔 / ★@Configuration + @Bean★ (외부 라이브러리 객체에 적합).',
    '★singleton(기본)★ — 컨테이너당 1개이므로 ★상태를 가지면 안 된다★.',
    'prototype — 요청마다 새 객체이며 ★컨테이너가 소멸을 관리하지 않는다★.',
    'request · session · application — 웹 스코프.',
    '★함정★ — ★싱글턴 빈에 프로토타입 빈을 주입하면 처음 것만 계속 쓰인다★ → ObjectProvider · Provider · @Lookup 으로 매번 새로 조회한다.'
  ]},
  { h:'생명주기와 후보 선택', li:[
    '생명주기 — 생성 → 의존 주입 → ★@PostConstruct★ → 사용 → ★@PreDestroy★ → 소멸.',
    '@Autowired 후보가 여러 개면 — ★@Primary★(기본 우선) · ★@Qualifier("이름")★ · List/Map 으로 전부 주입받기.'
  ]}
]},

{ s:'s2', no:'2-2', t:'AOP · 트랜잭션', title:'AOP 프록시와 @Transactional 이 안 먹는 이유', ref:'2_Spring §2~3', body:[
  { h:'AOP 기본', li:[
    '로깅·트랜잭션·보안 같은 ★횡단 관심사★ 를 비즈니스 로직에서 분리한다.',
    '용어 — Aspect · Advice(Before·After·Around) · Pointcut · JoinPoint · Weaving.',
    '★스프링 AOP 는 런타임 프록시 기반★ 이며 ★메서드 실행 조인포인트만★ 지원한다(AspectJ 와의 차이).',
    '인터페이스가 있으면 ★JDK 동적 프록시★, 없으면 ★CGLIB★ — ★스프링 부트 기본은 CGLIB★.'
  ]},
  { h:'가장 중요한 함정 — 자기 호출(self-invocation) ★최빈출★', li:[
    '★같은 클래스 안에서 this.method() 로 호출하면 프록시를 거치지 않는다★.',
    '따라서 ★@Transactional · @Cacheable · @Async 가 동작하지 않는다★.',
    '해결 — 다른 빈으로 ★분리★ / 자기 자신을 주입 / AopContext.currentProxy().',
    '두 번째 함정 — ★private · final 메서드에는 프록시를 적용할 수 없다★.'
  ]},
  { h:'@Transactional 기본 동작', li:[
    '프록시가 메서드 시작 시 트랜잭션을 시작하고 정상 종료 시 커밋한다.',
    '★기본 롤백 대상은 언체크드 예외(RuntimeException·Error)★ 다.',
    '★체크드 예외를 롤백하려면 rollbackFor = Exception.class★ 를 지정해야 한다.'
  ]},
  { h:'전파 속성(propagation)', tb:{ head:['속성','동작'], rows:[
    ['REQUIRED(기본)','있으면 참여, 없으면 새로 시작'],
    ['★REQUIRES_NEW★','★항상 새 트랜잭션★ (기존은 보류) — 로그·이력 저장'],
    ['SUPPORTS','있으면 참여, 없으면 트랜잭션 없이 실행'],
    ['MANDATORY','없으면 예외'],
    ['NOT_SUPPORTED','트랜잭션 없이 실행(기존 보류)'],
    ['NEVER','있으면 예외'],
    ['NESTED','세이브포인트 기반 중첩(JDBC 한정)']
  ]}},
  { h:'단골 시나리오와 실패 원인', li:[
    '"메인 로직이 실패해도 이력은 남기려면?" → ★이력 저장을 REQUIRES_NEW 로 분리★. 단, ★별도 커넥션을 쓰므로 커넥션 풀 여유★ 를 고려해야 한다.',
    '트랜잭션이 안 먹는 4대 원인 — ① ★같은 클래스 내부 호출★ ② ★private 메서드★ ③ ★try-catch 로 예외를 삼킴★ ④ ★체크드 예외★.',
    '★readOnly = true★ — JPA 에서 ★스냅샷 저장·변경 감지를 생략★ 해 메모리·성능 이점이 있고, 복제본 라우팅에도 활용된다.',
    '격리 수준 기본값 — ★MySQL(InnoDB) 는 REPEATABLE READ, Oracle·PostgreSQL 은 READ COMMITTED★.'
  ]}
]},

{ s:'s2', no:'2-3', t:'MVC · Spring Boot', title:'MVC 요청 흐름 · 필터/인터셉터/AOP · 자동 설정', ref:'2_Spring §4~5', body:[
  { h:'요청 처리 흐름', li:[
    '클라이언트 → ★DispatcherServlet(프론트 컨트롤러)★ → ★HandlerMapping★(어떤 컨트롤러?) → ★HandlerAdapter★(실행) → 컨트롤러 → (ViewResolver → View) 또는 ★HttpMessageConverter(JSON)★ → 응답.',
    '@RestController = @Controller + @ResponseBody.',
    '@PathVariable(경로 변수) · @RequestParam(쿼리·폼) · @RequestBody(JSON 본문).'
  ]},
  { h:'필터 vs 인터셉터 vs AOP ★단골 비교★', tb:{ head:['구분','소속','시점','용도'], rows:[
    ['필터(Filter)','서블릿 스펙','★DispatcherServlet 앞단★','인코딩 · CORS · 보안'],
    ['인터셉터','스프링 MVC','핸들러 ★전후★','인증 · 로깅 — ★핸들러 정보 접근 가능★'],
    ['AOP','스프링','메서드 실행 시점','파라미터 접근 · 비즈니스 관심사 분리']
  ]}},
  { h:'예외 처리와 검증', li:[
    '@ExceptionHandler(컨트롤러 단위) / ★@RestControllerAdvice★(전역) 로 ★공통 에러 응답 포맷을 통일★ 한다.',
    '검증 — ★@Valid + Bean Validation(@NotNull·@Size·@Pattern) + BindingResult★.'
  ]},
  { h:'Spring Boot 자동 설정', li:[
    '★@SpringBootApplication = @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan★.',
    '부트 2.x 는 spring.factories, ★부트 3.x 는 AutoConfiguration.imports★ 목록을 읽는다.',
    '★@Conditional 계열(@ConditionalOnClass · @ConditionalOnMissingBean · @ConditionalOnProperty)★ 로 선별 적용한다.',
    '★핵심 — 사용자가 직접 정의한 빈이 있으면 자동 설정은 물러난다(OnMissingBean)★.'
  ]},
  { h:'설정 · 운영 · 테스트', li:[
    '설정 우선순위(높은 것부터) — ★커맨드라인 인자 → 환경 변수 → 프로파일별 설정 파일 → application.yml → 기본값★.',
    '프로파일 — @Profile · spring.profiles.active · application-{env}.yml.',
    '★Actuator★ — health · info · metrics · prometheus. ★민감 엔드포인트는 노출 범위와 인증을 반드시 제한★ 한다.',
    '부트 3.x 변화 — ★Java 17+ 필수★ · ★javax → jakarta 네임스페이스★ · GraalVM 네이티브 이미지 지원 강화.',
    '테스트 — @SpringBootTest(전체·느림) / ★@WebMvcTest(웹 계층·MockMvc)★ / ★@DataJpaTest(JPA 계층)★. ★단위 테스트는 스프링 없이, 통합은 슬라이스로 범위를 최소화★ 한다.'
  ]}
]},

/* ───────── s3 JPA · 데이터베이스 ───────── */
{ s:'s3', no:'3-1', t:'영속성 컨텍스트', title:'영속성 컨텍스트의 5가지 이점과 주의점', ref:'3_JPA §1~2', body:[
  { h:'정의와 생명주기', li:[
    '엔티티를 관리하는 논리적 영역으로, EntityManager 가 관리하는 ★1차 캐시★ 다.',
    '엔티티 생명주기 — ★비영속(new) → 영속(persist·find) → 준영속(detach·close·clear) → 삭제(remove)★.'
  ]},
  { h:'5가지 이점', tb:{ head:['이점','내용'], rows:[
    ['★1차 캐시★','같은 트랜잭션에서 같은 ID 조회 시 DB 재조회가 없다'],
    ['★동일성 보장★','같은 트랜잭션 안에서 == 비교가 true'],
    ['★쓰기 지연★','커밋(flush) 시점에 SQL 을 모아 전송'],
    ['★변경 감지(Dirty Checking)★','스냅샷과 비교해 UPDATE 를 자동 생성'],
    ['지연 로딩','연관 엔티티를 실제 사용 시점에 조회']
  ]}},
  { h:'flush 와 clear', li:[
    'flush 시점 — ★트랜잭션 커밋 / JPQL 실행 직전 / 명시적 flush()★.',
    '★flush 는 영속성 컨텍스트를 비우지 않는다★ — 비우는 것은 ★clear()★. 이 구분이 단골 질문.',
    '준영속 엔티티는 변경 감지가 동작하지 않는다 → 조회 후 수정하거나 merge.',
    '★merge 는 "덮어쓰기"★ 라 ★null 필드까지 덮어써 데이터가 유실될 위험★ 이 있다 — 실무에서는 지양하고 조회 후 변경을 권장한다.'
  ]},
  { h:'연관관계 매핑', li:[
    '★연관관계 주인은 외래 키를 가진 쪽★ 이고 반대편은 mappedBy 로 읽기 전용이다.',
    '★함정★ — 주인이 아닌 쪽에만 값을 넣으면 DB 에 반영되지 않는다 → ★연관관계 편의 메서드★ 로 양쪽을 함께 설정한다.',
    '★실무 원칙: 모든 연관관계를 LAZY 로★. ★@ManyToOne·@OneToOne 의 기본값은 EAGER★ 이므로 명시적으로 지정해야 한다.',
    'cascade = ALL 은 ★단일 소유일 때만★, orphanRemoval = true 는 컬렉션에서 빠진 자식을 삭제한다.',
    '★@OneToOne 의 mappedBy 쪽은 LAZY 가 동작하지 않는다★ — FK 가 없어 대상 존재 여부를 확인해야 하기 때문.'
  ]}
]},

{ s:'s3', no:'3-2', t:'N+1 · JPA 실무', title:'N+1 문제와 해결 수단 · OSIV · 벌크 연산', ref:'3_JPA §3~4', body:[
  { h:'N+1 현상과 원인', li:[
    '목록 1번 조회(1) + 각 행의 연관 엔티티 조회(N) = ★1 + N 쿼리★.',
    '원인 — 지연 로딩 상태에서 반복문으로 연관 필드에 접근하거나, EAGER 때문에 개별 조회가 나가는 경우.'
  ]},
  { h:'해결 수단 비교', tb:{ head:['수단','방식','주의'], rows:[
    ['fetch join','JPQL 에서 조인해 한 번에 조회','★컬렉션 조인 시 페이징 위험★'],
    ['@EntityGraph','애너테이션으로 fetch join','스프링 데이터 JPA 와 궁합이 좋다'],
    ['★@BatchSize★','IN 절로 N번을 N/배치 로 축소','★페이징과 함께 사용 가능★'],
    ['default_batch_fetch_size','전역 배치 크기 설정','실무 기본값으로 자주 사용'],
    ['DTO 직접 조회','필요한 컬럼만 select','가장 가볍지만 재사용성이 낮다']
  ]}},
  { h:'컬렉션 fetch join 의 함정', li:[
    '1:N fetch join 은 ★결과 행이 뻥튀기★ 된다 → distinct 필요(하이버네이트 6부터는 기본 중복 제거).',
    '★컬렉션 fetch join 은 하나만 가능★ 하다 — 둘 이상이면 카티션 곱이 된다.',
    '★컬렉션 fetch join 은 페이징이 불가★ 하다 — 하이버네이트가 전체를 메모리로 읽고 페이징하며 경고 로그를 남긴다.',
    '★해결 조합: ToOne 은 fetch join, 컬렉션은 @BatchSize★.'
  ]},
  { h:'면접 답변 골격', li:[
    '"목록 API 응답이 느려 쿼리 로그를 보니 1+N 이었고, ★ToOne 은 fetch join, 컬렉션은 batch size 100★ 으로 바꿔 쿼리 수를 N+1 에서 2~3개로 줄였습니다."',
    '★수치(쿼리 수·p95 응답시간)★ 를 함께 말하는 것이 핵심이다.'
  ]},
  { h:'OSIV 와 기타 실무', li:[
    '★OSIV 기본값은 true★ — 영속성 컨텍스트를 뷰 렌더링까지 유지한다.',
    '장점은 지연 로딩을 컨트롤러·뷰에서 쓸 수 있다는 것이고, ★단점은 DB 커넥션을 요청 끝까지 점유해 트래픽이 크면 커넥션이 고갈★ 된다는 것이다.',
    '실무에서는 ★false 로 끄고 서비스 계층에서 필요한 데이터를 모두 로딩★ 한다.',
    '기본 키 전략 — ★IDENTITY 는 persist 즉시 INSERT 가 나가 쓰기 지연이 무력화★ 된다. SEQUENCE 는 allocationSize 로 성능을 개선한다.',
    '엔티티 설계 — ★기본 생성자 protected★ · setter 남용 금지 · ★@Entity 에 롬복 @Data 금지★ · ★toString 에서 연관 엔티티 참조 금지★.',
    '★벌크 연산(@Modifying)은 영속성 컨텍스트를 우회★ 한다 → 실행 후 ★clear()★ 하지 않으면 1차 캐시와 DB 가 불일치한다.',
    'JPQL(문자열·컴파일 검증 불가) / ★QueryDSL(타입 안전·동적 쿼리에 강함)★ / 네이티브(DB 종속·튜닝용).'
  ]}
]},

{ s:'s3', no:'3-3', t:'DB 기본 · 인덱스', title:'격리 수준 · 락 · 인덱스 · 실행 계획', ref:'3_JPA §5', body:[
  { h:'격리 수준과 이상 현상 ★단골★', tb:{ head:['수준','Dirty','Non-Repeatable','Phantom'], rows:[
    ['READ UNCOMMITTED','발생','발생','발생'],
    ['READ COMMITTED','—','발생','발생'],
    ['REPEATABLE READ','—','—','발생'],
    ['SERIALIZABLE','—','—','—']
  ]}},
  { h:'기본값과 실제', li:[
    '★MySQL(InnoDB) 기본은 REPEATABLE READ, Oracle·PostgreSQL 기본은 READ COMMITTED★.',
    'InnoDB 는 ★갭 락★ 덕분에 REPEATABLE READ 에서도 팬텀이 상당 부분 억제된다 — 이 단서를 붙이면 깊이가 드러난다.'
  ]},
  { h:'락 — "동시에 재고를 차감하면?"', li:[
    '★비관적 락★ — SELECT … FOR UPDATE. ★충돌이 잦을 때★ 유리하나 대기·데드락 위험이 있다.',
    '★낙관적 락★ — ★@Version 컬럼★. ★충돌이 드물 때★ 유리하며 실패 시 ★재시도★ 로직이 필요하다.',
    '★DB 원자 연산★ — UPDATE … SET qty = qty − 1 WHERE qty > 0 처럼 조건부 갱신으로 푸는 방법도 있다.',
    '세 가지를 ★트레이드오프로 비교하고 자신이 고른 근거★ 를 말하는 것이 좋은 답변이다.'
  ]},
  { h:'인덱스 ★최빈출★', li:[
    '구조는 ★B+Tree★ 가 기본이라 = 조건과 ★범위·정렬 모두★ 에 유리하다.',
    '★복합 인덱스는 선두 컬럼부터★ 쓰인다 — (A, B) 인덱스는 ★B 단독 조건에는 쓰이지 않는다★.',
    '★카디널리티가 높은 컬럼★ 이 인덱스 효율이 좋다.',
    '★쓰기 비용★ — 인덱스가 많으면 INSERT·UPDATE·DELETE 가 느려진다.',
    '★커버링 인덱스★ — 조회 컬럼이 모두 인덱스에 있으면 테이블 접근을 생략한다.'
  ]},
  { h:'인덱스를 못 타는 경우', li:[
    '★컬럼 가공★ — WHERE DATE(created_at) = … 또는 WHERE col * 2 = … 형태.',
    '★묵시적 형 변환★ — 문자 컬럼에 숫자를 비교.',
    '★앞에 와일드카드가 오는 LIKE★ 패턴.',
    '부정 조건(!=, NOT IN)과 OR 남용(경우에 따라).'
  ]},
  { h:'실행 계획과 확장', li:[
    'EXPLAIN 으로 ★type(const · ref · range · ALL)★ · rows · Extra 를 확인한다.',
    '★type = ALL(풀 스캔)★ 과 ★Using filesort · Using temporary★ 가 주요 경고 신호다.',
    '읽기 확장 — 리드 레플리카 · 캐시(Redis) / 쓰기 확장 — 샤딩(키 설계가 핵심) · 파티셔닝.',
    '★커넥션 풀은 무작정 키우면 오히려 느려진다★ — DB 코어·디스크가 병목이기 때문이다(HikariCP).'
  ]}
]},

/* ───────── s4 웹 · 네트워크 · 보안 ───────── */
{ s:'s4', no:'4-1', t:'HTTP · CORS · REST', title:'HTTP 메서드와 상태 코드 · CORS · REST 설계', ref:'4_웹 §1~3', body:[
  { h:'메서드와 멱등성', tb:{ head:['메서드','안전','멱등','용도'], rows:[
    ['GET','O','O','조회'],['POST','X','★X★','생성·처리'],
    ['PUT','X','O','전체 교체'],['PATCH','X','★X★','부분 수정'],['DELETE','X','O','삭제']
  ]}},
  { h:'멱등성이 왜 중요한가', li:[
    '★여러 번 호출해도 결과가 같은가★ — 이것이 ★재시도 설계의 근거★ 다.',
    '★멱등하지 않은 API 는 함부로 재시도하면 안 된다★ (중복 결제·중복 주문).',
    '결제·주문 생성처럼 POST 인데 중복 실행이 위험하면 ★멱등 키(Idempotency-Key)★ 를 받아 서버가 같은 결과로 처리한다.'
  ]},
  { h:'상태 코드 핵심', li:[
    '2xx — 200 OK · 201 Created · 202 Accepted · 204 No Content.',
    '3xx — ★301 영구★ · ★302 임시★ · 304 Not Modified(캐시).',
    '4xx — 400 · ★401 인증 실패★ · ★403 권한 없음★ · 404 · 409 충돌 · 422 검증 실패 · 429 Too Many Requests.',
    '5xx — 500 · 502 Bad Gateway · 503 Unavailable · 504 Gateway Timeout.',
    '★401 vs 403 — "누구인지 모름" vs "누구인지 알지만 권한이 없음"★.'
  ]},
  { h:'HTTP 버전과 캐시', li:[
    'HTTP/1.1 — 커넥션 재사용 · ★HOL 블로킹★. HTTP/2 — 바이너리 프레이밍 · ★멀티플렉싱★ · 헤더 압축(HPACK). HTTP/3 — ★QUIC(UDP)★ 기반으로 TCP HOL 블로킹 해소.',
    '캐시 — Cache-Control(max-age · no-cache · no-store) · ★ETag/If-None-Match★ · Last-Modified/If-Modified-Since → 조건부 요청으로 304.'
  ]},
  { h:'CORS ★단골★', li:[
    '브라우저의 ★동일 출처 정책(SOP)★ 때문에 발생하며 ★서버가 허용 헤더를 내려야★ 한다.',
    '★프리플라이트★ — 단순 요청이 아니면 ★OPTIONS★ 로 먼저 확인한다(커스텀 헤더 · Content-Type: application/json · PUT/DELETE 등).',
    '응답 헤더 — Access-Control-Allow-Origin · Methods · Headers · Credentials.',
    '★함정 — Allow-Credentials: true 와 Allow-Origin: * 는 함께 쓸 수 없다★.',
    '★CORS 는 프론트에서 못 고친다★ 는 점을 짚어 주면 좋다.'
  ]},
  { h:'REST API 설계', li:[
    '원칙 — 자원(명사) · 행위(메서드) · 계층 구조 · 무상태.',
    '좋은 예 — GET /users/1/orders?status=PAID / 나쁜 예 — GET /getUserOrders?id=1(동사 사용).',
    '관례 — 복수형 자원명 · 소문자·하이픈 · 버전은 /v1 또는 헤더 · 목록은 페이징(page·size 또는 ★커서★) + 정렬.',
    '★에러 응답 포맷을 통일★ 한다(code · message · detail) — @RestControllerAdvice.',
    '★상태 코드로 결과를 표현★ 한다 — 200 응답에 error 필드를 담지 않는다.',
    '대안 — GraphQL(오버페칭 해소) · gRPC(사내 통신·고성능).'
  ]}
]},

{ s:'s4', no:'4-2', t:'인증 · 인가 · 웹 보안', title:'세션 vs JWT · Spring Security · OWASP 대응', ref:'4_웹 §4~5', body:[
  { h:'세션 vs JWT ★반드시 트레이드오프로 답한다★', tb:{ head:['구분','세션(서버 저장)','JWT(토큰)'], rows:[
    ['상태','서버가 상태 보관','★무상태★'],
    ['확장','세션 저장소 공유 필요(Redis)','서버 간 공유 불필요'],
    ['무효화','★즉시 가능★','★어렵다★ (만료 전까지 유효)'],
    ['크기','쿠키에 식별자만','페이로드만큼 매 요청 전송'],
    ['저장 위치','쿠키(HttpOnly)','쿠키 또는 스토리지(XSS 주의)']
  ]}},
  { h:'JWT 주의점', li:[
    '구조 — Header.Payload.Signature (Base64URL).',
    '★Base64 는 인코딩일 뿐 암호화가 아니다★ → 페이로드에 민감 정보를 넣지 않는다.',
    '★alg: none 허용 금지★ · 서명 검증 필수 · 만료(exp)를 짧게.',
    '★리프레시 토큰은 서버에 저장★ 해 폐기 가능하게 설계한다(회전 + 재사용 탐지).',
    '저장 위치 — ★쿠키(HttpOnly·Secure·SameSite)면 XSS 에 강하지만 CSRF 대책 필요★, ★로컬 스토리지면 CSRF 는 약하지만 XSS 에 취약★.'
  ]},
  { h:'OAuth 2.0 / OIDC', li:[
    '★OAuth 2.0 은 인가(권한 위임) 프레임워크이지 인증 프로토콜이 아니다★ — 가장 많이 틀리는 지점.',
    '★OIDC = OAuth 2.0 + 인증 + ID Token(JWT)★.',
    '권장 플로우는 ★Authorization Code + PKCE★ 이며 Implicit 은 폐기 권장.'
  ]},
  { h:'Spring Security', li:[
    '★필터 체인★ 기반 — 요청이 여러 필터를 거치며 인증·인가가 처리된다.',
    '주요 요소 — SecurityFilterChain · AuthenticationManager · UserDetailsService · ★PasswordEncoder(BCrypt)★ · SecurityContextHolder(ThreadLocal).',
    '★인증(Authentication) = 누구인가 / 인가(Authorization) = 무엇을 할 수 있는가★.',
    '메서드 보안 — @PreAuthorize · @Secured.',
    '비밀번호는 ★해시 + 솔트 + 반복(BCrypt·Argon2)★ 로 저장한다. ★단순 SHA-256 은 너무 빨라 부적절★ 하고 평문·양방향 암호화 저장은 금지.'
  ]},
  { h:'웹 보안 대응 (OWASP 관점)', li:[
    '★SQL 인젝션★ → PreparedStatement / JPA 파라미터 바인딩. ★JPQL 도 문자열 연결은 위험★.',
    '★XSS★ → ★출력 인코딩★ + CSP + HttpOnly 쿠키. Stored / Reflected / DOM 기반 3종.',
    '★CSRF★ → CSRF 토큰 · SameSite 쿠키 · Referer 검증. ★JWT 를 헤더로 보내는 API 는 위험이 낮아 비활성화하기도 하지만, 토큰을 쿠키에 담으면 대책이 여전히 필요★ 하다.',
    '★SSRF★ → URL 화이트리스트 · ★클라우드 메타데이터 차단★.',
    '민감정보 노출 → ★로그에 토큰·비밀번호·주민번호 출력 금지★, 예외 스택 노출 금지.',
    '의존성 취약점 → 버전 관리 · SCA 도구(Dependabot · OWASP Dependency-Check).',
    '기타 — Rate Limiting(429) · 요청 크기 제한 · ★파일 업로드 검증(확장자 화이트리스트 · 매직 넘버 · 실행 권한 제거 · 웹 루트 외부 저장)★.'
  ]},
  { h:'네트워크 상식 — "URL 입력 후 일어나는 일"', li:[
    '① URL 파싱 → ② ★DNS 조회(캐시 → 리졸버 → 루트·TLD·권한)★ → ③ ★TCP 3-way(+TLS 핸드셰이크)★ → ④ HTTP 요청 → ⑤ ★LB → WAS → DB★ 처리 → ⑥ 응답 → ⑦ 렌더링.',
    '★백엔드 면접에서는 ③~⑤ 구간(LB · WAS · 커넥션 풀 · 캐시)을 깊게 묻는다★.',
    'TLS — ★대칭키(속도) + 공개키(키 교환·인증)★ 하이브리드. ★ECDHE 를 쓰면 PFS★ 가 확보된다. TLS 1.2 이상 권장.',
    '로드 밸런싱 — L4(IP·포트) vs L7(경로·헤더). ★세션 고정(sticky)은 확장에 불리★ 하므로 세션은 외부 저장소로 뺀다.'
  ]}
]},

/* ───────── s5 아키텍처 · 설계 ───────── */
{ s:'s5', no:'5-1', t:'설계 원칙 · 패턴', title:'SOLID · 디자인 패턴 · 레이어드 아키텍처', ref:'5_아키텍처 §1', body:[
  { h:'SOLID ★단골★', tb:{ head:['원칙','내용'], rows:[
    ['S 단일 책임(SRP)','클래스는 ★변경 이유가 하나★ 여야 한다'],
    ['O 개방-폐쇄(OCP)','확장에는 열려 있고 수정에는 닫혀 있다(추상화·전략)'],
    ['L 리스코프 치환(LSP)','하위 타입은 상위 타입을 대체할 수 있어야 한다'],
    ['I 인터페이스 분리(ISP)','쓰지 않는 메서드에 의존시키지 않는다'],
    ['D 의존 역전(DIP)','구체가 아니라 ★추상★ 에 의존한다 — ★스프링 DI 의 근거★']
  ]}},
  { h:'면접 포인트', li:[
    '★원칙 이름만 대지 말고 "내 코드에서 이 원칙을 어겼던 사례와 어떻게 분리했는지"★ 를 말한다.',
    '예) "결제 수단이 추가될 때마다 if-else 가 늘어나 ★전략 패턴★ 으로 바꿔 OCP 를 지켰습니다."',
    '★상속보다 조합★ — 상속은 결합이 강하고 부모 변경이 전파되지만, 조합은 런타임 교체가 가능하다.'
  ]},
  { h:'자주 쓰는 디자인 패턴', tb:{ head:['패턴','쓰임'], rows:[
    ['싱글턴','스프링 빈이 사실상 싱글턴 — 직접 구현 시 동시성 주의'],
    ['★전략★','조건 분기를 인터페이스 구현체로 — ★if-else 제거의 정석★'],
    ['★팩터리★','생성 책임 분리'],
    ['템플릿 메서드','공통 흐름 고정 + 일부 단계 위임 (JdbcTemplate)'],
    ['★프록시·데코레이터★','부가 기능 위임 — ★스프링 AOP★'],
    ['옵저버','이벤트 발행·구독 (ApplicationEvent)'],
    ['빌더','파라미터가 많은 객체 생성 (@Builder)']
  ]}},
  { h:'레이어드 아키텍처', li:[
    'Controller(표현) → Service(비즈니스) → Repository(영속) → DB.',
    '★상위 → 하위 단방향 의존★ 이며 도메인은 프레임워크에 덜 의존하게 만든다.',
    '★안티패턴★ — 컨트롤러에 비즈니스 로직 / 서비스에서 다른 서비스를 무분별하게 호출 / ★엔티티를 그대로 API 응답으로 노출(→ DTO 로 분리)★.'
  ]},
  { h:'DDD · 헥사고날 (경량)', li:[
    '엔티티(식별자로 구분) · 값 객체(값으로 구분·불변) · ★애그리거트(일관성 경계)★ · 리포지터리 · 도메인 서비스 · 바운디드 컨텍스트.',
    '면접에서 유용한 한 줄 — "★애그리거트 단위로 트랜잭션 경계를 잡았습니다★".',
    '★헥사고날(포트&어댑터)★ — 도메인을 가운데 두고 입출력을 어댑터로 분리한다. 테스트·기술 교체가 쉬워지지만 ★규모가 작으면 과설계★ 일 수 있다.'
  ]}
]},

{ s:'s5', no:'5-2', t:'MSA · 대용량 설계', title:'모놀리식 vs MSA · Saga · 캐시 · 장애 대응 패턴', ref:'5_아키텍처 §2~3', body:[
  { h:'모놀리식 vs MSA', tb:{ head:['구분','모놀리식','MSA'], rows:[
    ['개발 초기','★빠름★','느림(인프라 선투자)'],
    ['배포','전체 배포','서비스 단위 독립 배포'],
    ['확장','전체 스케일아웃','★필요한 서비스만★'],
    ['장애 격리','약함','강함(단, 전파 설계 필요)'],
    ['트랜잭션','로컬 트랜잭션 단순','★분산 트랜잭션이 어렵다★'],
    ['운영 난이도','낮음','★높음(추적·모니터링 필수)★']
  ]}},
  { h:'"MSA 를 도입해야 할까요?" 좋은 답', li:[
    '"★규모와 조직에 따라 다릅니다★. 팀이 작고 도메인 경계가 안 잡혔으면 모놀리식으로 시작해, 경계가 뚜렷해질 때 분리하는 편이 안전하다고 봅니다."',
    '★무조건 MSA 가 좋다고 답하면 감점★ 요인이다.',
    'MSA 구성 요소 — API Gateway · 서비스 디스커버리 · 설정 서버 · ★서킷 브레이커(Resilience4j)★ · 분산 추적(Zipkin · OpenTelemetry).'
  ]},
  { h:'분산 트랜잭션', li:[
    '★2PC★ — 강한 일관성이지만 가용성·성능 손해가 커 실무에서 잘 쓰지 않는다.',
    '★Saga★ — 로컬 트랜잭션 + ★보상 트랜잭션★. ★코레오그래피(이벤트 기반)★ vs ★오케스트레이션(중앙 조율자)★.',
    '★아웃박스 패턴★ — DB 커밋과 메시지 발행의 원자성을 확보한다(중복 발행에 대비해 ★멱등 소비★).',
    '★최종 일관성★ — 즉시 일관성을 포기하고 이벤트로 수렴시키는 ★CAP 의 현실적 선택★.'
  ]},
  { h:'성능 개선의 순서 ★가장 중요한 태도★', li:[
    '★측정 → 병목 식별 → 개선 → 재측정★.',
    '★추측으로 캐시부터 넣지 않는다★ — APM · 슬로우 쿼리 로그 · 부하 테스트가 먼저다.',
    'DB 병목은 ★인덱스·쿼리 튜닝 → 읽기 레플리카 → 캐시 → 샤딩★ 순으로 검토한다.',
    '3대 단골 원인 — ★N+1 · 풀 스캔 · 커넥션 풀 고갈★.'
  ]},
  { h:'캐시와 비동기', li:[
    '위치 — 로컬 캐시(Caffeine) vs ★분산 캐시(Redis)★.',
    '전략 — ★Cache-Aside(가장 흔함)★ · Write-Through · Write-Behind.',
    '★캐시 스탬피드★ — 동시 만료로 원본이 폭주한다 → ★만료 지터 · 뮤텍스 · 미리 갱신★.',
    '캐시 일관성 → TTL · 이벤트 기반 무효화. "★무엇이 오래돼도 괜찮은 데이터인가★" 를 먼저 정한다.',
    '메시지 큐로 트래픽을 완충하고 결합도를 낮춘다(Kafka · RabbitMQ · SQS). ★적어도 한 번 전달이 일반적이므로 소비자는 멱등하게★ 설계한다.'
  ]},
  { h:'장애 대응 패턴', li:[
    '★타임아웃 설정(필수)★ · 재시도(+★지수 백오프·지터★) · ★서킷 브레이커★ · 벌크헤드(자원 격리) · 폴백 · 레이트 리밋.',
    '★재시도만 넣으면 장애를 증폭시킨다★ — 타임아웃·백오프·서킷과 함께 써야 한다.',
    '★멱등하지 않은 API 는 재시도하면 안 된다★.'
  ]},
  { h:'시스템 설계 면접 진행 요령', li:[
    '① ★요구사항 확인(기능·비기능·규모) — 질문부터★ ② 개략 추정(QPS·저장량) ③ API·데이터 모델 ④ 개략 아키텍처(LB·WAS·DB·캐시·큐) ⑤ 병목·확장·장애 대응 ⑥ 트레이드오프 정리.',
    '★혼자 결론부터 그리지 말고 면접관과 대화하며 좁혀 간다★.'
  ]}
]},

/* ───────── s6 인프라 · 데브옵스 ───────── */
{ s:'s6', no:'6-1', t:'컨테이너 · 배포', title:'Docker · Kubernetes 기초 · 배포 전략과 무중단 배포', ref:'6_인프라 §1~2', body:[
  { h:'Docker', li:[
    '이미지(불변 템플릿) → 컨테이너(실행 인스턴스).',
    'VM 과의 차이 — ★게스트 OS 없이 호스트 커널을 공유★ 하므로 가볍고 기동이 빠르다.',
    '★레이어 캐시★ — 자주 바뀌는 것을 뒤에 둔다(의존성 먼저 복사·빌드 → 소스 복사) → 빌드 시간이 크게 줄어든다.',
    '★멀티 스테이지 빌드★ — 빌드 단계와 실행 단계를 분리해 이미지 크기를 줄인다.',
    '자바 이미지 팁 — JRE 슬림 이미지 사용, ★-XX:MaxRAMPercentage 로 컨테이너 메모리 한도에 맞춘다★.'
  ]},
  { h:'Kubernetes 기초', li:[
    'Pod(최소 배포 단위) · ReplicaSet · Deployment(롤링 업데이트) · Service(내부 로드밸런싱) · Ingress(외부 진입) · ConfigMap/Secret · HPA(오토스케일링).',
    '★프로브 구분 — Liveness 는 "죽었으면 재시작", Readiness 는 "준비될 때까지 트래픽 제외"★.',
    '스프링 ★Actuator health★ 와 연결해 무중단 배포에 활용한다.'
  ]},
  { h:'배포 전략 ★단골 비교★', tb:{ head:['전략','방식','장단'], rows:[
    ['롤링','인스턴스를 순차 교체','추가 자원이 적다 · ★롤백이 느리다★'],
    ['★블루-그린★','동일 환경 2벌 · 스위치로 전환','★즉시 롤백★ · 자원 2배'],
    ['★카나리★','소수 트래픽부터 점진 확대','위험 최소 · 지표 관측 필요'],
    ['기능 플래그','배포와 릴리스를 분리','코드 배포 후 스위치로 노출']
  ]}},
  { h:'무중단 배포의 전제 ★좋은 답변 포인트★', li:[
    '무상태 서버 · 헬스 체크 · ★하위 호환 스키마 변경★.',
    '★DB 마이그레이션 원칙 — 컬럼 추가 → 코드 배포 → 데이터 이전 → 삭제★ 로 단계를 분리한다.',
    '★컬럼을 바로 삭제하거나 이름을 바꾸면 배포 중 구버전이 깨진다★ — 이 설명을 붙이면 실무 경험이 드러난다.',
    '도구 — Flyway · Liquibase.',
    'CI/CD — GitHub Actions · Jenkins · GitLab CI · ArgoCD(GitOps).'
  ]}
]},

{ s:'s6', no:'6-2', t:'Redis · Kafka · 모니터링', title:'Redis 활용과 함정 · Kafka 순서 보장 · 관측 3요소', ref:'6_인프라 §3~5', body:[
  { h:'Redis', li:[
    '명령 처리는 ★싱글 스레드★ 다 → ★O(n) 명령(KEYS · FLUSHALL)은 운영에서 금지★ 하고 ★SCAN★ 을 쓴다.',
    '자료구조 — String · Hash · List · Set · ★Sorted Set★ · Bitmap · HyperLogLog.',
    '활용 — 캐시 · 세션 저장소 · ★분산 락★ · 순위표(Sorted Set) · 레이트 리밋.',
    '영속화 — RDB(스냅샷) / AOF(명령 로그), 보통 조합해서 쓴다.',
    '★분산 락 주의★ — ★SET NX PX(만료 필수)★ + ★소유자 토큰 확인 후 해제★. Redlock 은 논쟁이 있으므로 "짧은 임계 구간 + 멱등 설계" 를 함께 말한다.'
  ]},
  { h:'Kafka', li:[
    '구성 — Producer · Broker · ★Topic/Partition★ · Consumer Group · Offset.',
    '★순서는 파티션 단위로만 보장★ 된다 → ★순서가 중요한 단위를 키로 지정★ 해 같은 파티션으로 보낸다.',
    '★컨슈머 그룹에서 파티션 수 ≥ 컨슈머 수★ 여야 병렬 소비가 가능하다(남는 컨슈머는 놀게 된다).',
    '전달 보장 — at-most-once / ★at-least-once(현실적 선택)★ / exactly-once(제약이 크다).',
    '★소비자 멱등 처리가 실무 전제★ 다.',
    'Kafka vs RabbitMQ — ★대용량 로그·스트림 재처리★ vs ★라우팅·워크 큐★.'
  ]},
  { h:'관측 3요소', tb:{ head:['요소','도구'], rows:[
    ['메트릭','Prometheus + Grafana (Micrometer 로 스프링 지표 노출)'],
    ['로그','구조화 로그(JSON) + 중앙 수집(ELK · Loki)'],
    ['트레이스','분산 추적(Zipkin · Jaeger · OpenTelemetry) — ★TraceId 로 요청 추적★']
  ]}},
  { h:'무엇을 볼 것인가', li:[
    '★RED★ (요청 기반) — Rate · Errors · Duration.',
    '★USE★ (자원 기반) — Utilization · Saturation · Errors.',
    '자바 특화 — ★힙 사용량 · GC 시간 · 스레드 수 · 커넥션 풀 사용률★.'
  ]},
  { h:'장애 대응 흐름 ★면접 포인트★', li:[
    '① 인지(알림) → ② ★영향 범위 파악★ → ③ ★완화(롤백·스케일아웃·서킷)★ → ④ 원인 분석 → ⑤ 재발 방지 → ⑥ ★포스트모템(비난 없는 회고)★.',
    '★"원인을 찾는 것보다 먼저 서비스를 살린다"는 판단★ 을 보여 주는 것이 핵심이다.',
    '로그 원칙 — TraceId 포함 · 레벨 구분(ERROR 남발 금지) · ★개인정보·토큰·비밀번호 로그 금지★ · 예외는 스택과 컨텍스트를 함께 남기고 삼키지 않는다.'
  ]},
  { h:'클라우드 최소 지식 (AWS 기준)', li:[
    'EC2 · ECS/EKS · ★Lambda★ / ★S3★ · RDS/Aurora · ElastiCache / ★ALB★ · Route 53 · CloudFront.',
    '★VPC·보안 그룹★ — SG 는 Stateful·허용만, NACL 은 Stateless·거부 가능.',
    '★IAM 역할 — 액세스 키를 코드에 넣지 않고 역할로 권한을 부여★ 한다.',
    '★면접 포인트★ — 서비스 이름 나열보다 ★"왜 그 구성을 골랐는가"★. 예) "정적 자원은 S3+CloudFront 로 내려 WAS 부하를 줄였습니다."'
  ]}
]},

/* ───────── s7 자료구조 · 알고리즘 · CS ───────── */
{ s:'s7', no:'7-1', t:'복잡도 · 자료구조 선택', title:'시간 복잡도 감각과 자바 컬렉션 선택', ref:'7_CS §1~2', body:[
  { h:'복잡도 순서와 입력 크기 감각', li:[
    '★O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)★.',
    'n ≤ 10 → O(n!)·O(2ⁿ)(완전 탐색·백트래킹) / n ≤ 1,000 → O(n²) / n ≤ 100,000 → O(n log n) / n ≤ 1,000,000 → O(n).',
    '★코딩 테스트에서는 제한 조건(n의 범위)이 알고리즘을 지정한다★ — 문제를 읽자마자 범위를 먼저 본다.'
  ]},
  { h:'자바 컬렉션 복잡도', tb:{ head:['컬렉션','주요 연산'], rows:[
    ['ArrayList','get O(1) · add(끝) 상각 O(1) · 중간 삽입/삭제 O(n) · contains O(n)'],
    ['LinkedList','get O(n) · 노드를 아는 삽입/삭제 O(1)'],
    ['HashMap','평균 O(1) · 최악 ★O(log n)★ (트리화 이후)'],
    ['TreeMap','O(log n) · 정렬·범위 조회 가능'],
    ['PriorityQueue','offer/poll O(log n) · peek O(1)'],
    ['★ArrayDeque★','양끝 삽입/삭제 O(1) — ★Stack 대신 권장★']
  ]}},
  { h:'요구별 자료구조 선택', tb:{ head:['요구','선택'], rows:[
    ['인덱스로 빠른 조회','ArrayList / 배열'],
    ['중복 제거','HashSet'],
    ['정렬 유지 · 범위 조회','TreeMap / TreeSet'],
    ['입력 순서 유지','LinkedHashMap / LinkedHashSet'],
    ['★LRU 캐시★','★LinkedHashMap(accessOrder=true)★ + removeEldestEntry'],
    ['최댓값·최솟값 반복 추출','PriorityQueue(힙)'],
    ['양쪽 삽입·삭제(BFS 큐·스택)','ArrayDeque'],
    ['접두사 검색·자동완성','Trie'],
    ['구간 합·구간 갱신','누적합 / 세그먼트 트리'],
    ['그룹 병합·연결 판정','Union-Find']
  ]}},
  { h:'단골 답변', li:[
    '"ArrayList 와 LinkedList 중?" → ★대부분 ArrayList★. 캐시 지역성과 실제 벤치마크에서 유리하며, LinkedList 는 이론상 삽입 O(1)이지만 ★위치 탐색 비용★ 이 든다.',
    '"HashMap 이 O(1)인 이유와 최악은?" → 해시로 버킷에 직접 접근. 충돌이 몰리면 O(n) 이지만 ★자바 8+ 는 트리화로 O(log n)★.',
    '"LRU 캐시를 구현한다면?" → ★LinkedHashMap(accessOrder) + removeEldestEntry★ 또는 ★HashMap + 이중 연결 리스트로 O(1)★.'
  ]}
]},

{ s:'s7', no:'7-2', t:'알고리즘 · OS 기초', title:'코딩 테스트 필수 알고리즘과 OS 기초', ref:'7_CS §3~4', body:[
  { h:'탐색', li:[
    '★DFS★ — 스택·재귀. 경로·조합·백트래킹.',
    '★BFS★ — 큐. ★가중치가 없는 최단 거리★.',
    '★이분 탐색★ — 정렬이 전제, O(log n). ★파라메트릭 서치(답 자체를 이분 탐색)★ 가 빈출.',
    '투 포인터 · 슬라이딩 윈도우 — 연속 구간 문제를 O(n) 으로.'
  ]},
  { h:'그래프 최단 경로', tb:{ head:['알고리즘','특징','복잡도'], rows:[
    ['★다익스트라★','★음수 가중치 불가★ · 우선순위 큐','O(E log V)'],
    ['벨만-포드','음수 간선 허용 · 음수 사이클 탐지','O(VE)'],
    ['플로이드-워셜','모든 쌍','O(V³)'],
    ['위상 정렬','선후 관계(사이클 없는 그래프)','O(V+E)']
  ]}},
  { h:'정렬과 기타', li:[
    '자바 정렬 — ★기본형은 듀얼 피벗 퀵소트(비안정), 객체는 TimSort(안정)★. ★안정성이 필요한지★ 가 선택 근거가 된다.',
    'Comparator 조합 — Comparator.comparing().thenComparing().reversed().',
    '★DP★ — 메모이제이션·타뷸레이션(배낭·LIS·편집 거리). ★그리디★ — 정렬 후 선택이지만 ★정당성 근거★ 가 필요하다.'
  ]},
  { h:'자바 코딩 테스트 실전 팁', li:[
    '입력이 크면 ★BufferedReader + StringTokenizer★ (Scanner 는 느리다).',
    '출력이 많으면 ★StringBuilder 로 모아 한 번에★ 출력한다.',
    '★int 오버플로 주의 → long★ (약 21억 초과).',
    '재귀 깊이가 깊으면 스택 오버플로 → 반복문으로 전환.',
    '정렬 후 이분 탐색은 Collections.binarySearch / Arrays.binarySearch.'
  ]},
  { h:'OS · 컴퓨터 구조 기초', li:[
    '★프로세스 vs 스레드★ — 독립 메모리 vs ★코드·데이터·힙 공유(스택은 개별)★.',
    '컨텍스트 스위칭 — PCB 저장·복원. 잦으면 오버헤드.',
    'CPU 스케줄링 — FCFS · SJF · 라운드로빈 · 우선순위(선점/비선점 구분).',
    '교착 상태 4조건 — 상호배제 · 점유와 대기 · 비선점 · 환형 대기.',
    '동기화 — ★뮤텍스(소유권)★ vs ★세마포어(카운트)★.',
    '가상 메모리 — 페이징 · 페이지 폴트 · ★지역성★ · LRU/FIFO 교체.',
    '★블로킹 vs 논블로킹, 동기 vs 비동기★ — 서버 성능 이해의 기초다. 스레드가 I/O 대기에 묶이는지가 처리량을 좌우한다(→ Java 21 가상 스레드).'
  ]}
]},

/* ───────── s8 인성 · 경험 면접 ───────── */
{ s:'s8', no:'8-1', t:'STAR · 경험 정리', title:'STAR 기법과 미리 준비할 경험 5개', ref:'8_인성 §1', body:[
  { h:'이 영역의 성격', li:[
    '비중은 작아 보이지만 ★탈락 사유로는 기술보다 흔하다★.',
    '기술 면접을 잘 보고도 "같이 일하고 싶지 않다" 는 인상으로 떨어진다.',
    '★준비 없이 즉흥으로 답하면 반드시 티가 난다★.'
  ]},
  { h:'STAR 기법', tb:{ head:['항목','내용'], rows:[
    ['Situation','어떤 상황이었나 — 배경·제약'],
    ['Task','내가 맡은 과제는 무엇이었나'],
    ['★Action★','★내가★ 무엇을 했나 (팀이 아니라 나)'],
    ['★Result★','결과는 무엇이었나 — ★수치로★']
  ]}},
  { h:'나쁜 예 vs 좋은 예', li:[
    '★나쁜 예★ — "성능이 느려서 개선했습니다. 빨라졌습니다."',
    '★좋은 예★ — "주문 목록 API 가 p95 기준 1.2초였고(S), 300ms 이하로 줄이는 것이 목표였습니다(T). 쿼리 로그에서 N+1 을 확인하고 ToOne 은 fetch join, 컬렉션은 batch size 로 바꿨습니다(A). 쿼리 수가 60여 개에서 3개로, p95 가 180ms 로 줄었습니다(R)."',
    '★수치를 기억 못 하면 정직하게★ — "정확한 수치는 기억나지 않지만 체감상 절반 이하로". ★지어낸 수치는 꼬리 질문에서 무너진다★.'
  ]},
  { h:'미리 준비할 경험 5개', li:[
    '① ★성능·품질을 개선한 경험★ (수치 포함).',
    '② ★장애를 겪고 해결한 경험★ (원인 · 조치 · 재발 방지).',
    '③ ★기술을 선택한 경험★ (대안 비교 · 근거).',
    '④ ★협업에서 갈등·이견을 조율한 경험★.',
    '⑤ ★실패하거나 배운 경험★ (무엇을 바꿨는가).'
  ]}
]},

{ s:'s8', no:'8-2', t:'이직 사유 · 역질문', title:'이직 사유 · 인성 질문 · 역질문 · 처우 협의', ref:'8_인성 §2~5', body:[
  { h:'이직 사유 ★가장 중요한 질문★', li:[
    '★전 직장 험담 금지★ — 회사·상사·동료를 탓하면 "이 사람도 우리를 나가서 그렇게 말하겠구나" 로 읽힌다.',
    '★"~가 싫어서" 가 아니라 "~를 하고 싶어서"★ — 회피형을 지향형으로 바꾼다.',
    '지원 회사에서 ★그 지향이 실제로 가능한지★ 를 연결한다.'
  ]},
  { h:'회피형 → 지향형 변환 예시', tb:{ head:['회피형(나쁨)','지향형(좋음)'], rows:[
    ['"레거시가 너무 심해서"','"테스트와 리팩터링이 자리 잡은 환경에서 코드 품질을 올리는 경험을 하고 싶습니다"'],
    ['"야근이 많아서"','"지속 가능한 개발 문화 속에서 장기적으로 기여하고 싶습니다"'],
    ['"연봉이 낮아서"','"기여한 만큼 평가받는 구조에서 성장하고 싶습니다" (연봉은 처우 협의에서 별도로)'],
    ['"사수가 없어서"','"코드 리뷰와 기술 논의가 활발한 팀에서 배우고 싶습니다"']
  ]}},
  { h:'짧은 재직 기간을 묻는다면', li:[
    '변명보다 ★사실 + 배운 것 + 다음 선택 기준★ 으로 답한다.',
    '"결과적으로 판단이 짧았습니다. 그래서 이번에는 팀 구조와 개발 문화를 먼저 확인하고 지원했습니다." — ★성찰이 보이면 오히려 신뢰를 얻는다★.'
  ]},
  { h:'자주 나오는 인성 질문', li:[
    '★자기소개★ — 1분 내. 경력 요약 → 강점 1~2개(근거 포함) → 지원 동기 연결. ★이력서 낭독이 아니라 "무엇을 잘하는 사람인지" 한 문장이 남아야★ 한다.',
    '★강점·약점★ — 강점은 사례와 함께, 약점은 ★실제 약점 + 개선 노력★. "완벽주의라서" 같은 위장형 약점은 식상하다.',
    '★의견 충돌★ — 감정이 아니라 ★근거·데이터로 논의★ 하고, 결정되면 따르고 회고에서 검증한다.',
    '★코드 리뷰 지적★ — 의도를 먼저 확인하고 타당하면 수용, 이견이 있으면 근거 제시. "코드에 대한 지적이지 사람에 대한 지적이 아니다".',
    '★일정 vs 품질★ — 범위·일정·품질 중 무엇을 조정할지 ★이해관계자와 합의★ 하고, 기술 부채로 남길 부분과 회수 계획을 명시한다.',
    '★학습 방법★ — 공식 문서 → 작은 예제 → 사이드 프로젝트/사내 적용 → 회고·공유. ★최근 학습한 것 1개는 반드시 준비★.'
  ]},
  { h:'역질문 ★"없습니다" 는 최악★', li:[
    '팀·업무 — "합류하면 처음 3~6개월 동안 맡게 될 업무는?", "팀 구성과 시니어·주니어 비율은?", "코드 리뷰는 어떤 방식으로?"',
    '기술·프로세스 — "현재 가장 큰 기술 부채와 개선 계획은?", "배포 주기와 무중단 배포 방식은?", "장애 대응 절차와 포스트모템 문화가 있나요?"',
    '성장·평가 — "개발자의 성장과 평가는 어떤 기준으로?", "기술 공유·스터디 활동이 있나요?"',
    '★피해야 할 역질문★ — 연봉·복지만 묻기, 홈페이지에 다 있는 내용, "야근 많나요?" 를 직설적으로(→ "일정 관리는 어떻게 하시나요?" 로 순화).'
  ]},
  { h:'처우 협의', li:[
    '★희망 연봉을 미리 정해 둔다★ — 현재 연봉 · 시장 시세 · 최소 수용선.',
    '★"회사 규정에 따르겠습니다" 만 반복하면 협상 여지를 스스로 없앤다★.',
    '숫자는 ★범위★ 로 말한다.',
    '★총보상★ 으로 본다 — 기본급 · 성과급 · 스톡 · 복지 · 근무 형태.',
    '★거짓 연봉 기재는 금물★ — 원천징수영수증 등으로 확인된다.',
    '오퍼를 받으면 ★서면(처우 확정서)★ 으로 조건을 확인하고 답한다.'
  ]}
]}

];
