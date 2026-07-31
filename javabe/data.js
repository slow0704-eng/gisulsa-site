/* ============================================================
   자바 백엔드 개발자 이직 면접 — 학습·퀴즈 데이터
   소스: 03_이직면접/자바백엔드/*.txt (00 개요 + 1~8 영역 + 부록)
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

/* ── 0. 메타 ────────────────────────────────────────────── */
CPPG.meta = {
  name: '자바 백엔드 면접',
  brand: 'Java BE', tag: '자바 백엔드 이직 면접', storeKey: 'javabe',
  title: '자바 백엔드 이직 면접 — 암기·퀴즈 학습',
  h1: '자바 백엔드 개발자 이직 면접',
  unit: '영역',
  outUnit: '%',                          // subjects[].out 은 면접 출제 비중(추정)
  passRule: { pct: 70, per: 0 },         // 합격 기준이 아니라 자체 학습 목표
  footer: [
    '국내 자바·스프링 백엔드 경력 이직 면접 대비 / 기술 면접 + 인성·경험 면접',
    '데이터 소스: <code>03_이직면접/자바백엔드/*.txt</code> → <code>학습사이트/data.js</code> · 진도·오답노트는 브라우저(localStorage)에만 저장됩니다.',
    '⚠ 이것은 <b>자격증이 아니라 면접 준비</b>입니다. 퀴즈의 70%는 합격선이 아니라 <b>자체 학습 목표</b>이고, 영역별 비중은 채용 공고·면접 후기에서 관찰되는 <b>일반적 경향의 추정치</b>입니다. 실제 질문은 <b>지원 회사의 기술 스택과 직급</b>에 따라 크게 달라지니 공고를 먼저 역산하세요.',
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

/* ── 1. 학습 영역 ───────────────────────────────────────── */
CPPG.subjects = [
  { id:'s1', no:1, name:'Java · JVM',            out:20, color:'#f59e0b', desc:'컬렉션·동시성·GC·메모리 구조 ★1차 면접 필수★' },
  { id:'s2', no:2, name:'Spring · Spring Boot',  out:20, color:'#22c55e', desc:'DI·AOP 프록시·트랜잭션 전파·MVC·자동 설정 ★최빈출★' },
  { id:'s3', no:3, name:'JPA · 데이터베이스',     out:18, color:'#3b82f6', desc:'영속성 컨텍스트·N+1·인덱스·격리 수준·락' },
  { id:'s4', no:4, name:'웹 · 네트워크 · 보안',   out:12, color:'#06b6d4', desc:'HTTP·REST·CORS·세션/JWT·Spring Security' },
  { id:'s5', no:5, name:'아키텍처 · 설계',        out:12, color:'#8b5cf6', desc:'SOLID·패턴·MSA·Saga·캐시·시스템 설계' },
  { id:'s6', no:6, name:'인프라 · 데브옵스',      out:8,  color:'#ec4899', desc:'Docker·배포 전략·Redis·Kafka·모니터링·장애 대응' },
  { id:'s7', no:7, name:'자료구조 · 알고리즘 · CS', out:5, color:'#a855f7', desc:'복잡도·자료구조 선택·DFS/BFS·OS 기초' },
  { id:'s8', no:8, name:'인성 · 경험 면접',       out:5,  color:'#ef4444', desc:'STAR·이직 사유·역질문·처우 협의 ★탈락 사유 1순위★' }
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
  { g:'1 Java·JVM', t:'HashMap 내부 동작을 충돌·트리화·리사이즈까지 설명한다' },
  { g:'1 Java·JVM', t:'JVM 메모리 영역과 GC 종류를 구분해 말한다' },
  { g:'1 Java·JVM', t:'OOM 유형별 원인과 분석 절차를 설명한다' },
  { g:'1 Java·JVM', t:'volatile·synchronized·Atomic 을 구분한다' },
  { g:'2 Spring', t:'생성자 주입 권장 이유를 4가지 말한다' },
  { g:'2 Spring', t:'@Transactional 미동작 원인 4가지를 즉답한다' },
  { g:'2 Spring', t:'트랜잭션 전파 REQUIRED·REQUIRES_NEW 를 구분한다' },
  { g:'2 Spring', t:'자동 설정이 @Conditional 로 동작하는 원리를 설명한다' },
  { g:'3 JPA·DB', t:'영속성 컨텍스트의 이점 5가지를 말한다' },
  { g:'3 JPA·DB', t:'N+1 을 겪은 경험을 수치와 함께 설명한다' },
  { g:'3 JPA·DB', t:'컬렉션 fetch join 의 제약과 대안을 안다' },
  { g:'3 JPA·DB', t:'인덱스를 못 타는 경우 4가지를 즉답한다' },
  { g:'4 웹·보안', t:'세션과 JWT 를 트레이드오프로 비교한다' },
  { g:'4 웹·보안', t:'CORS 프리플라이트가 언제 발생하는지 안다' },
  { g:'4 웹·보안', t:'SQLi·XSS·CSRF 의 근본 대응을 각각 말한다' },
  { g:'5 아키텍처', t:'SOLID 를 내 코드 사례로 설명한다' },
  { g:'5 아키텍처', t:'성능 개선을 측정 기반 절차로 설명한다' },
  { g:'5 아키텍처', t:'Saga·아웃박스·멱등 소비를 설명한다' },
  { g:'6 인프라', t:'무중단 배포와 DB 마이그레이션 단계 분리를 설명한다' },
  { g:'6 인프라', t:'장애 대응 순서를 완화 우선으로 설명한다' },
  { g:'7 CS', t:'입력 크기로 허용 복잡도를 역산한다' },
  { g:'8 인성', t:'이직 사유를 지향형으로 30초 안에 답한다' },
  { g:'8 인성', t:'STAR 로 정리한 경험 5개를 수치와 함께 말한다' },
  { g:'8 인성', t:'역질문 3개를 준비했다' }
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
   8. 문제은행 — 8개 영역
   d: 1=기초 · 2=표준 · 3=심화
   ═══════════════════════════════════════════════════════════ */

CPPG.mcq = [
  // ───────── 1. Java · JVM ─────────
  { s:'s1', d:2, q:'자바 8 이상의 HashMap 에서 한 버킷의 충돌이 임계치를 넘으면 어떤 구조로 바뀌는가?', c:['배열','레드-블랙 트리','스킵 리스트','힙'], a:1, e:'최악 O(n)을 O(log n)으로 낮추기 위해 트리화된다.' },
  { s:'s1', d:2, q:'equals() 만 재정의하고 hashCode() 를 재정의하지 않으면 생기는 문제는?', c:['컴파일 오류','HashMap·HashSet 에서 값을 찾지 못한다','직렬화가 실패한다','GC 대상에서 제외된다'], a:1, e:'다른 버킷을 탐색하게 되어 조회에 실패한다.' },
  { s:'s1', d:1, q:'Java 8 부터 클래스 메타데이터가 저장되는 영역은?', c:['PermGen','Metaspace','Young Generation','스택'], a:1, e:'PermGen 이 제거되고 네이티브 메모리의 Metaspace 로 이동했다.' },
  { s:'s1', d:2, q:'GC 의 수거 대상이 되는 객체의 기준은?', c:['참조 카운트가 0인 객체','GC 루트에서 도달할 수 없는 객체','오래된 객체','크기가 큰 객체'], a:1, e:'자바 GC 는 도달 가능성(reachability) 기반이다.' },
  { s:'s1', d:2, q:'volatile 키워드가 보장하는 것은?', c:['원자성','가시성','상호배제','순서와 원자성 모두'], a:1, e:'가시성만 보장하므로 i++ 같은 복합 연산에는 부족하다.' },
  { s:'s1', d:3, q:'멀티스레드 환경에서 카운터를 안전하게 증가시키는 방법으로 적절하지 않은 것은?', c:['AtomicInteger 사용','synchronized 블록','ReentrantLock','volatile int 사용'], a:3, e:'volatile 은 원자성을 보장하지 않는다.' },
  { s:'s1', d:2, q:'ArrayList 와 LinkedList 에 대한 설명으로 옳은 것은?', c:['LinkedList 는 인덱스 조회가 O(1)이다','ArrayList 는 중간 삽입이 O(1)이다','실무에서는 대체로 ArrayList 가 유리하다','LinkedList 는 메모리를 더 적게 쓴다'], a:2, e:'캐시 지역성 때문에 실제 성능은 ArrayList 가 나은 경우가 많다.' },
  { s:'s1', d:2, q:'Executors.newFixedThreadPool() 대신 ThreadPoolExecutor 를 직접 구성하라고 권장하는 이유는?', c:['성능이 더 빠르다','큐·거부 정책을 지정하지 않으면 OOM 위험이 있다','스레드 이름을 지정할 수 없다','예외 처리가 불가능하다'], a:1, e:'기본 팩터리는 무제한 큐를 사용해 메모리가 계속 쌓일 수 있다.' },
  { s:'s1', d:3, q:'스레드 풀 환경에서 ThreadLocal 을 사용할 때 반드시 해야 하는 것은?', c:['static 으로 선언','사용 후 remove() 호출','synchronized 로 감싸기','volatile 선언'], a:1, e:'스레드가 재사용되므로 값이 다음 요청으로 새어 나간다.' },
  { s:'s1', d:2, q:'String 이 불변으로 설계된 이유로 거리가 먼 것은?', c:['문자열 상수 풀 공유','스레드 안전성','해시코드 캐싱','메모리 사용량 최소화'], a:3, e:'불변이라 연결 시 새 객체가 생겨 오히려 메모리를 더 쓸 수 있다.' },
  { s:'s1', d:2, q:'자바 스트림에 대한 설명으로 옳은 것은?', c:['중간 연산에서 즉시 실행된다','한 번 소비한 스트림을 재사용할 수 있다','최종 연산이 호출될 때 실행된다','병렬 스트림은 항상 더 빠르다'], a:2, e:'중간 연산은 지연 평가되고 최종 연산에서 파이프라인이 실행된다.' },
  { s:'s1', d:2, q:'OutOfMemoryError: Metaspace 의 주된 원인은?', c:['객체 누수','클래스가 과도하게 로딩됨','스택 깊이 초과','스레드 수 부족'], a:1, e:'동적 프록시·클래스 리로딩 과다에서 자주 발생한다.' },

  // ───────── 2. Spring · Spring Boot ─────────
  { s:'s2', d:2, q:'생성자 주입을 권장하는 이유로 거리가 먼 것은?', c:['final 로 불변을 보장할 수 있다','순환 참조를 기동 시점에 발견할 수 있다','프레임워크 없이 테스트하기 쉽다','런타임에 의존성을 교체할 수 있다'], a:3, e:'런타임 교체는 생성자 주입의 이점이 아니다.' },
  { s:'s2', d:3, q:'같은 클래스 안의 다른 메서드를 this 로 호출했더니 @Transactional 이 동작하지 않았다. 원인은?', c:['트랜잭션 매니저 미설정','프록시를 거치지 않아서','격리 수준이 낮아서','readOnly 가 true 라서'], a:1, e:'스프링 AOP 는 프록시 기반이라 자기 호출에는 적용되지 않는다.' },
  { s:'s2', d:2, q:'@Transactional 의 기본 롤백 대상은?', c:['모든 예외','체크드 예외','언체크드 예외(RuntimeException·Error)','예외 없이 항상 커밋'], a:2, e:'체크드 예외를 롤백하려면 rollbackFor 를 지정한다.' },
  { s:'s2', d:2, q:'메인 로직이 실패해도 이력은 남겨야 할 때 적절한 트랜잭션 전파 속성은?', c:['REQUIRED','REQUIRES_NEW','SUPPORTS','MANDATORY'], a:1, e:'별도 트랜잭션으로 분리한다. 다만 커넥션을 추가로 점유한다.' },
  { s:'s2', d:2, q:'스프링 AOP 의 프록시 생성 방식에 대한 설명으로 옳은 것은?', c:['항상 JDK 동적 프록시를 사용한다','인터페이스가 없으면 CGLIB 을 사용한다','컴파일 시점에 위빙한다','필드 접근도 가로챌 수 있다'], a:1, e:'스프링 부트는 기본적으로 CGLIB 을 사용한다.' },
  { s:'s2', d:2, q:'싱글턴 빈에 프로토타입 빈을 주입했을 때 나타나는 현상은?', c:['매번 새 인스턴스가 주입된다','최초 주입된 인스턴스가 계속 사용된다','컴파일 오류가 발생한다','요청마다 컨텍스트가 재생성된다'], a:1, e:'ObjectProvider·@Lookup 으로 매번 조회해야 한다.' },
  { s:'s2', d:2, q:'DispatcherServlet 의 요청 처리 순서로 옳은 것은?', c:['HandlerMapping → DispatcherServlet → 컨트롤러','DispatcherServlet → HandlerMapping → HandlerAdapter → 컨트롤러','컨트롤러 → HandlerAdapter → DispatcherServlet','ViewResolver → DispatcherServlet → 컨트롤러'], a:1, e:'프론트 컨트롤러가 매핑과 어댑터를 거쳐 핸들러를 실행한다.' },
  { s:'s2', d:2, q:'CORS 나 문자 인코딩처럼 DispatcherServlet 앞단에서 처리해야 하는 관심사에 적합한 것은?', c:['필터','인터셉터','AOP','ArgumentResolver'], a:0, e:'필터는 서블릿 스펙 레벨로 디스패처보다 앞에 위치한다.' },
  { s:'s2', d:2, q:'Spring Boot 자동 설정이 사용자가 정의한 빈을 덮어쓰지 않는 이유는?', c:['@Primary 때문','@ConditionalOnMissingBean 때문','컴포넌트 스캔 순서 때문','프로파일 때문'], a:1, e:'해당 타입의 빈이 없을 때만 자동 설정이 적용된다.' },
  { s:'s2', d:3, q:'스프링 부트에서 설정 값의 우선순위가 가장 높은 것은?', c:['application.yml','환경 변수','커맨드라인 인자','기본값'], a:2, e:'커맨드라인 인자 → 환경 변수 → 설정 파일 순이다.' },
  { s:'s2', d:2, q:'웹 계층만 빠르게 테스트하려 할 때 적절한 애너테이션은?', c:['@SpringBootTest','@WebMvcTest','@DataJpaTest','@ExtendWith'], a:1, e:'MockMvc 와 함께 컨트롤러 계층만 로딩한다.' },
  { s:'s2', d:3, q:'@Transactional(readOnly = true) 를 붙였을 때 JPA 에서 얻는 이점은?', c:['락을 자동으로 건다','스냅샷 저장과 변경 감지를 생략한다','격리 수준이 올라간다','쿼리가 캐싱된다'], a:1, e:'메모리 사용과 flush 비용이 줄어든다.' },

  // ───────── 3. JPA · 데이터베이스 ─────────
  { s:'s3', d:2, q:'엔티티 값을 수정했는데 update 를 호출하지 않아도 반영되는 이유는?', c:['자동 커밋 때문','변경 감지(Dirty Checking) 때문','2차 캐시 때문','트리거 때문'], a:1, e:'영속성 컨텍스트가 스냅샷과 비교해 UPDATE 를 생성한다.' },
  { s:'s3', d:2, q:'flush() 와 clear() 의 차이로 옳은 것은?', c:['flush 는 컨텍스트를 비우고 clear 는 SQL 을 전송한다','flush 는 SQL 을 전송하고 컨텍스트는 유지된다','둘 다 컨텍스트를 비운다','둘 다 트랜잭션을 커밋한다'], a:1, e:'컨텍스트를 비우는 것은 clear 다.' },
  { s:'s3', d:1, q:'@ManyToOne 의 기본 페치 전략은?', c:['LAZY','EAGER','SELECT','SUBSELECT'], a:1, e:'실무에서는 명시적으로 LAZY 로 바꾸는 것이 원칙이다.' },
  { s:'s3', d:3, q:'컬렉션 fetch join 과 페이징을 함께 사용할 때 발생하는 문제는?', c:['쿼리가 실패한다','전체 데이터를 메모리로 읽어 페이징한다','중복이 제거되지 않는다','인덱스를 타지 못한다'], a:1, e:'하이버네이트가 경고 로그를 남기며 메모리 페이징을 수행한다.' },
  { s:'s3', d:2, q:'페이징이 필요한 목록에서 N+1 을 해결할 때 가장 적절한 방법은?', c:['컬렉션 fetch join','@BatchSize 또는 default_batch_fetch_size','즉시 로딩으로 변경','2차 캐시 활성화'], a:1, e:'IN 절로 묶어 조회하므로 페이징과 함께 쓸 수 있다.' },
  { s:'s3', d:2, q:'OSIV 를 비활성화했을 때 나타나는 변화로 옳은 것은?', c:['커넥션 점유 시간이 늘어난다','컨트롤러에서 지연 로딩이 불가능해진다','트랜잭션이 사라진다','2차 캐시가 비활성화된다'], a:1, e:'서비스 계층에서 필요한 데이터를 모두 로딩해야 한다.' },
  { s:'s3', d:3, q:'@Modifying 벌크 업데이트 실행 후 조회 결과가 이상하다. 원인은?', c:['트랜잭션이 없어서','영속성 컨텍스트를 우회해 1차 캐시와 불일치','인덱스가 없어서','격리 수준이 낮아서'], a:1, e:'실행 후 clear() 로 컨텍스트를 초기화해야 한다.' },
  { s:'s3', d:2, q:'MySQL InnoDB 의 기본 트랜잭션 격리 수준은?', c:['READ UNCOMMITTED','READ COMMITTED','REPEATABLE READ','SERIALIZABLE'], a:2, e:'Oracle·PostgreSQL 은 READ COMMITTED 가 기본이다.' },
  { s:'s3', d:3, q:'충돌이 드물고 대기 비용을 피하고 싶을 때 적합한 동시성 제어는?', c:['비관적 락','낙관적 락(@Version)','테이블 락','SERIALIZABLE 격리'], a:1, e:'충돌 시 예외가 발생하므로 재시도 전략이 함께 필요하다.' },
  { s:'s3', d:2, q:'복합 인덱스 (부서, 입사일) 가 있을 때 인덱스를 활용하지 못하는 조건은?', c:['부서 = ? AND 입사일 > ?','부서 = ?','입사일 > ?','부서 IN (?) AND 입사일 = ?'], a:2, e:'선두 컬럼 없이 후행 컬럼만으로는 인덱스를 타지 못한다.' },
  { s:'s3', d:2, q:'인덱스가 있는데도 풀 스캔이 발생하는 원인으로 거리가 먼 것은?', c:["WHERE DATE(created_at) = '2026-01-01'",'문자 컬럼에 숫자를 비교','조회 컬럼 수가 많음',"LIKE '%검색어'"], a:2, e:'조회 컬럼 수 자체는 인덱스 사용 여부를 결정하지 않는다.' },
  { s:'s3', d:2, q:'merge() 사용을 지양하라고 하는 이유는?', c:['성능이 느려서','null 필드까지 덮어써 데이터가 유실될 수 있어서','트랜잭션이 필요해서','JPQL 을 못 써서'], a:1, e:'조회 후 변경 감지 방식이 안전하다.' },

  // ───────── 4. 웹 · 네트워크 · 보안 ─────────
  { s:'s4', d:2, q:'HTTP 메서드 중 멱등하지 않은 것으로만 묶인 것은?', c:['GET, PUT','POST, PATCH','PUT, DELETE','GET, DELETE'], a:1, e:'POST 와 PATCH 는 반복 호출 시 결과가 달라질 수 있다.' },
  { s:'s4', d:1, q:'인증은 되었으나 해당 자원에 접근할 권한이 없을 때 적절한 상태 코드는?', c:['400','401','403','404'], a:2, e:'401 은 인증 실패, 403 은 인가 실패다.' },
  { s:'s4', d:2, q:'CORS 프리플라이트(OPTIONS) 요청이 발생하는 경우로 옳은 것은?', c:["단순 GET 요청","Content-Type: application/json 인 POST","이미지 로딩","같은 출처 요청"], a:1, e:'단순 요청 조건을 벗어나면 사전 확인 요청이 발생한다.' },
  { s:'s4', d:2, q:'세션 방식과 비교한 JWT 의 가장 큰 단점은?', c:['서버 확장이 어렵다','즉시 무효화가 어렵다','암호화가 불가능하다','HTTPS 를 쓸 수 없다'], a:1, e:'만료 전까지 유효하므로 블랙리스트·짧은 만료로 보완한다.' },
  { s:'s4', d:3, q:'JWT 를 브라우저 로컬 스토리지에 저장할 때 가장 큰 위험은?', c:['CSRF','XSS 로 인한 토큰 탈취','세션 고정','중간자 공격'], a:1, e:'스크립트가 접근할 수 있어 XSS 한 번에 탈취된다.' },
  { s:'s4', d:2, q:'JWT 의 Payload 에 대한 설명으로 옳은 것은?', c:['암호화되어 있어 안전하다','Base64 인코딩일 뿐 누구나 디코딩할 수 있다','서명 검증 없이 신뢰할 수 있다','서버만 읽을 수 있다'], a:1, e:'민감 정보를 담아서는 안 된다.' },
  { s:'s4', d:2, q:'OAuth 2.0 에 대한 설명으로 옳은 것은?', c:['사용자 인증을 위한 프로토콜이다','권한 위임(인가)을 위한 프레임워크다','세션을 대체하는 저장 방식이다','암호화 알고리즘이다'], a:1, e:'인증까지 필요하면 OIDC 를 사용한다.' },
  { s:'s4', d:2, q:'비밀번호 저장 방식으로 가장 적절한 것은?', c:['평문 저장','SHA-256 단일 해시','BCrypt 등 솔트와 반복이 적용된 해시','AES 양방향 암호화'], a:2, e:'단순 해시는 너무 빨라 무차별 대입에 취약하다.' },
  { s:'s4', d:3, q:'결제 API 가 네트워크 재시도로 두 번 호출되는 것을 막는 방법은?', c:['GET 으로 변경','멱등 키(Idempotency-Key) 도입','타임아웃 제거','응답 캐싱'], a:1, e:'서버가 키를 저장해 중복 요청을 같은 결과로 처리한다.' },
  { s:'s4', d:2, q:'XSS 공격의 근본적인 대응 방법은?', c:['입력 길이 제한','출력 시 인코딩','HTTPS 적용','쿠키 삭제'], a:1, e:'CSP·HttpOnly 쿠키를 함께 적용한다.' },

  // ───────── 5. 아키텍처 · 설계 ─────────
  { s:'s5', d:2, q:'스프링의 DI 가 근거로 삼는 SOLID 원칙은?', c:['단일 책임 원칙','개방-폐쇄 원칙','리스코프 치환 원칙','의존 역전 원칙'], a:3, e:'구체가 아니라 추상에 의존하게 만든다.' },
  { s:'s5', d:2, q:'조건 분기가 늘어나는 결제 수단 처리 로직을 개선할 때 적합한 패턴은?', c:['싱글턴','전략 패턴','옵서버','프록시'], a:1, e:'인터페이스 구현체로 분리해 개방-폐쇄 원칙을 만족시킨다.' },
  { s:'s5', d:3, q:'MSA 도입 여부를 묻는 질문에 대한 답변으로 가장 적절한 것은?', c:['확장성이 좋으므로 항상 도입해야 한다','조직 규모·도메인 경계·운영 역량을 기준으로 판단한다','모놀리식은 이제 사용하지 않는다','트래픽이 적어도 미리 나눠야 한다'], a:1, e:'무조건 찬성·반대는 감점 요인이다.' },
  { s:'s5', d:3, q:'분산 환경에서 여러 서비스에 걸친 작업의 일관성을 확보하는 대표적 패턴은?', c:['2PC 만 사용','Saga(보상 트랜잭션)','전역 락','단일 DB 로 통합'], a:1, e:'아웃박스 패턴과 멱등 소비를 함께 설계한다.' },
  { s:'s5', d:2, q:'아웃박스(Outbox) 패턴이 해결하는 문제는?', c:['캐시 일관성','DB 커밋과 메시지 발행의 원자성','인덱스 성능','세션 공유'], a:1, e:'DB 트랜잭션 안에 메시지를 저장하고 별도로 발행한다.' },
  { s:'s5', d:2, q:'조회 성능이 느릴 때 가장 먼저 해야 할 일은?', c:['캐시 도입','비동기 처리로 전환','지표와 로그로 병목 측정','DB 스케일 업'], a:2, e:'측정 없이 캐시를 넣으면 문제를 감추기만 한다.' },
  { s:'s5', d:3, q:'인기 캐시 키가 동시에 만료되어 원본 저장소로 요청이 몰리는 현상은?', c:['캐시 미스','캐시 스탬피드','캐시 오염','콜드 스타트'], a:1, e:'만료 지터·뮤텍스·사전 갱신으로 완화한다.' },
  { s:'s5', d:2, q:'외부 API 호출에 재시도를 추가할 때 반드시 함께 고려해야 하는 것은?', c:['타임아웃과 지수 백오프','로그 레벨','JSON 직렬화 방식','스레드 이름'], a:0, e:'재시도만 넣으면 장애를 증폭시킨다. 서킷 브레이커도 함께.' },
  { s:'s5', d:2, q:'엔티티를 그대로 API 응답으로 반환하면 생기는 문제로 거리가 먼 것은?', c:['DB 스키마와 API 스펙이 결합된다','양방향 연관에서 순환 참조가 발생할 수 있다','불필요한 내부 필드가 노출된다','트랜잭션이 롤백되지 않는다'], a:3, e:'롤백과는 무관하다. DTO 로 분리하는 것이 원칙이다.' },
  { s:'s5', d:3, q:'시스템 설계 면접에서 가장 먼저 해야 할 일은?', c:['아키텍처 다이어그램을 그린다','요구사항과 규모를 확인하는 질문을 한다','기술 스택을 정한다','데이터 모델을 작성한다'], a:1, e:'요구사항 확인 없이 그림부터 그리면 감점된다.' },

  // ───────── 6. 인프라 · 데브옵스 ─────────
  { s:'s6', d:1, q:'컨테이너가 가상 머신보다 가벼운 이유는?', c:['하드웨어를 직접 제어해서','호스트 커널을 공유하고 게스트 OS 가 없어서','메모리를 압축해서','네트워크를 쓰지 않아서'], a:1, e:'기동 속도가 빠르고 오버헤드가 작다.' },
  { s:'s6', d:2, q:'즉시 롤백이 가장 쉬운 배포 전략은?', c:['롤링 업데이트','블루-그린','카나리','재생성(recreate)'], a:1, e:'이전 환경이 그대로 남아 있어 스위치만 되돌리면 된다.' },
  { s:'s6', d:3, q:'무중단 배포 중 DB 컬럼을 제거해야 할 때 올바른 순서는?', c:['컬럼 삭제 후 배포','배포와 동시에 삭제','신규 컬럼 추가 → 배포 → 데이터 이전 → 기존 컬럼 삭제','롤백 후 삭제'], a:2, e:'단계를 분리하지 않으면 배포 중 구버전이 깨진다.' },
  { s:'s6', d:2, q:'Kubernetes 에서 트래픽 투입 여부를 판단하는 프로브는?', c:['Liveness','Readiness','Startup','Termination'], a:1, e:'Liveness 는 재시작 여부를 판단한다.' },
  { s:'s6', d:2, q:'운영 중인 Redis 에서 사용을 피해야 하는 명령은?', c:['GET','SCAN','KEYS','EXPIRE'], a:2, e:'싱글 스레드라 O(n) 명령이 전체를 블로킹한다.' },
  { s:'s6', d:2, q:'Kafka 에서 메시지 순서가 보장되는 범위는?', c:['토픽 전체','파티션 단위','컨슈머 그룹 단위','브로커 단위'], a:1, e:'순서가 필요하면 키를 지정해 같은 파티션으로 보낸다.' },
  { s:'s6', d:3, q:'Kafka 의 일반적인 전달 보장 방식과 그에 따른 소비자 설계 원칙은?', c:['exactly-once 이므로 별도 처리 불필요','at-least-once 이므로 멱등 처리 필요','at-most-once 이므로 재전송 필요','보장이 없으므로 DB 트랜잭션 필요'], a:1, e:'중복 소비를 전제로 처리 이력·유니크 키를 둔다.' },
  { s:'s6', d:2, q:'장애가 발생했을 때 가장 먼저 해야 할 일은?', c:['근본 원인 분석','영향 범위 파악과 완화 조치','포스트모템 작성','코드 리팩터링'], a:1, e:'서비스 회복이 원인 규명보다 우선한다.' },
  { s:'s6', d:2, q:'관측 가능성(Observability)의 3요소로 옳은 것은?', c:['메트릭·로그·트레이스','CPU·메모리·디스크','알림·대시보드·리포트','인증·인가·감사'], a:0, e:'RED·USE 지표와 함께 이해한다.' },
  { s:'s6', d:3, q:'컨테이너에서 자바 애플리케이션이 OOMKilled 되는 것을 막기 위한 조치는?', c:['-Xmx 를 최대한 크게 설정','MaxRAMPercentage 등으로 컨테이너 메모리 한도에 맞춤','GC 를 비활성화','스레드 수를 늘림'], a:1, e:'컨테이너 한도를 인식하지 못하면 호스트 기준으로 힙을 잡는다.' },

  // ───────── 7. CS ─────────
  { s:'s7', d:2, q:'입력 크기 n 이 100,000 일 때 일반적으로 통과 가능한 시간 복잡도는?', c:['O(n²)','O(n log n)','O(2ⁿ)','O(n!)'], a:1, e:'제한 조건이 알고리즘 선택을 사실상 지정한다.' },
  { s:'s7', d:2, q:'가중치가 없는 그래프에서 최단 경로를 구할 때 적절한 알고리즘은?', c:['DFS','BFS','다익스트라','플로이드-워셜'], a:1, e:'가중치가 있으면 다익스트라를 사용한다.' },
  { s:'s7', d:2, q:'LRU 캐시를 자바 표준 컬렉션으로 구현할 때 적합한 것은?', c:['HashMap','LinkedHashMap','TreeMap','PriorityQueue'], a:1, e:'accessOrder 를 켜고 removeEldestEntry 를 재정의한다.' },
  { s:'s7', d:2, q:'자바에서 스택 용도로 Stack 클래스 대신 권장되는 것은?', c:['Vector','ArrayDeque','LinkedList','PriorityQueue'], a:1, e:'Stack 은 동기화된 레거시 클래스다.' },
  { s:'s7', d:3, q:'음수 가중치 간선이 있는 그래프의 최단 경로 알고리즘은?', c:['다익스트라','벨만-포드','BFS','위상 정렬'], a:1, e:'벨만-포드는 음수 사이클 탐지도 가능하다.' },
  { s:'s7', d:2, q:'블로킹 I/O 기반 서버의 동시 처리량을 제한하는 주된 요인은?', c:['CPU 코어 수','스레드 수','디스크 용량','네트워크 대역폭만'], a:1, e:'스레드가 대기에 묶여 있어 스레드 수가 상한이 된다.' },

  // ───────── 8. 인성 ─────────
  { s:'s8', d:2, q:'경험 질문에 답할 때 STAR 기법의 마지막 R 에 반드시 포함해야 하는 것은?', c:['팀 규모','사용 기술 목록','수치로 표현한 결과','일정 지연 사유'], a:2, e:'수치가 없으면 개선을 증명할 수 없다.' },
  { s:'s8', d:2, q:'이직 사유를 답하는 방식으로 가장 적절한 것은?', c:['전 직장의 문제점을 솔직히 지적한다','회피형 대신 지향형으로 말하고 지원 회사와 연결한다','연봉이 주된 이유임을 강조한다','개인 사정이라고만 말한다'], a:1, e:'험담은 즉시 감점 요인이다.' },
  { s:'s8', d:3, q:'모르는 기술 질문을 받았을 때 가장 바람직한 대응은?', c:['아는 척하며 추측으로 자세히 설명한다','아는 범위까지 말하고 모른다고 인정한 뒤 추론 방향을 제시한다','침묵한다','질문을 다른 주제로 돌린다'], a:1, e:'지어내다 꼬리 질문에서 무너지는 것이 가장 치명적이다.' },
  { s:'s8', d:1, q:'면접 마지막 역질문 기회에 가장 피해야 할 답변은?', c:['팀의 코드 리뷰 방식을 묻는다','기술 부채 개선 계획을 묻는다','특별히 없습니다','온보딩 절차를 묻는다'], a:2, e:'관심이 없다는 인상을 준다.' },
  { s:'s8', d:2, q:'기술 질문 답변에서 지원자를 "해본 사람"으로 보이게 하는 요소는?', c:['정의를 정확히 암기','내 경험과 트레이드오프 언급','최신 기술 용어 나열','빠른 답변 속도'], a:1, e:'정의 + 동작 + 경험의 3단 구조가 기본이다.' },
  { s:'s8', d:2, q:'처우 협의에 임하는 태도로 적절하지 않은 것은?', c:['희망 연봉 범위를 미리 정한다','현재 연봉을 실제보다 높여 말한다','총보상 관점으로 검토한다','오퍼 조건을 서면으로 확인한다'], a:1, e:'원천징수영수증 등으로 확인되어 신뢰를 잃는다.' }
];

CPPG.ox = [
  { s:'s1', d:2, q:'HashMap 의 조회는 최악의 경우에도 항상 O(1)이다.', a:false, e:'충돌이 몰리면 O(n), 트리화 이후에는 O(log n)이다.' },
  { s:'s1', d:2, q:'equals 를 재정의하면 hashCode 도 함께 재정의해야 한다.', a:true, e:'규약을 어기면 해시 기반 컬렉션에서 조회에 실패한다.' },
  { s:'s1', d:1, q:'Java 8 부터 PermGen 이 제거되고 Metaspace 가 도입되었다.', a:true, e:'Metaspace 는 네이티브 메모리에 위치한다.' },
  { s:'s1', d:2, q:'volatile 을 사용하면 i++ 연산이 원자적으로 처리된다.', a:false, e:'가시성만 보장하며 원자성은 Atomic·락이 필요하다.' },
  { s:'s1', d:2, q:'System.gc() 를 호출하면 GC 가 반드시 실행된다.', a:false, e:'요청일 뿐 실행이 보장되지 않는다.' },
  { s:'s1', d:2, q:'힙 영역은 모든 스레드가 공유한다.', a:true, e:'스택·PC 레지스터는 스레드별로 존재한다.' },
  { s:'s1', d:2, q:'스레드 풀에서 ThreadLocal 값을 remove 하지 않으면 다른 요청에 값이 남을 수 있다.', a:true, e:'스레드가 재사용되기 때문이다.' },
  { s:'s1', d:2, q:'병렬 스트림은 데이터 크기와 무관하게 항상 더 빠르다.', a:false, e:'분할·병합 오버헤드로 더 느려질 수 있다.' },
  { s:'s1', d:2, q:'한 번 최종 연산을 수행한 스트림은 다시 사용할 수 있다.', a:false, e:'재사용하면 IllegalStateException 이 발생한다.' },
  { s:'s1', d:2, q:'불변 객체를 만들 때 가변 필드는 방어적 복사로 다뤄야 한다.', a:true, e:'그렇지 않으면 외부에서 내부 상태를 바꿀 수 있다.' },
  { s:'s2', d:2, q:'같은 클래스 내부에서 호출한 메서드에도 @Transactional 이 적용된다.', a:false, e:'프록시를 거치지 않아 적용되지 않는다.' },
  { s:'s2', d:2, q:'@Transactional 은 체크드 예외에 대해 기본적으로 롤백한다.', a:false, e:'언체크드 예외만 기본 롤백 대상이다.' },
  { s:'s2', d:2, q:'예외를 try-catch 로 처리하면 트랜잭션이 롤백되지 않을 수 있다.', a:true, e:'예외가 프록시까지 전파되지 않기 때문이다.' },
  { s:'s2', d:2, q:'스프링 AOP 는 필드 접근도 가로챌 수 있다.', a:false, e:'메서드 실행 조인포인트만 지원한다.' },
  { s:'s2', d:2, q:'스프링 부트는 인터페이스가 없어도 CGLIB 으로 프록시를 만든다.', a:true, e:'부트는 기본적으로 CGLIB 프록시를 사용한다.' },
  { s:'s2', d:2, q:'싱글턴 빈에 인스턴스 필드로 상태를 저장해도 안전하다.', a:false, e:'모든 요청이 공유하므로 동시성 문제가 발생한다.' },
  { s:'s2', d:2, q:'자동 설정은 사용자가 정의한 같은 타입의 빈이 있으면 적용되지 않는다.', a:true, e:'@ConditionalOnMissingBean 때문이다.' },
  { s:'s2', d:2, q:'REQUIRES_NEW 는 기존 트랜잭션을 보류하고 새 트랜잭션을 시작한다.', a:true, e:'별도 커넥션을 점유하므로 풀 고갈에 주의한다.' },
  { s:'s2', d:2, q:'@WebMvcTest 는 JPA 리포지터리까지 모두 로딩한다.', a:false, e:'웹 계층만 로딩하는 슬라이스 테스트다.' },
  { s:'s3', d:2, q:'영속 상태 엔티티의 필드를 변경하면 트랜잭션 커밋 시 UPDATE 가 실행된다.', a:true, e:'변경 감지(Dirty Checking) 덕분이다.' },
  { s:'s3', d:2, q:'flush() 를 호출하면 영속성 컨텍스트가 비워진다.', a:false, e:'비우는 것은 clear() 다.' },
  { s:'s3', d:1, q:'@ManyToOne 의 기본 페치 전략은 LAZY 다.', a:false, e:'기본값은 EAGER 이므로 명시적으로 LAZY 로 바꾼다.' },
  { s:'s3', d:2, q:'컬렉션 fetch join 은 두 개 이상 동시에 사용할 수 있다.', a:false, e:'카티션 곱이 발생해 하나만 사용할 수 있다.' },
  { s:'s3', d:2, q:'@BatchSize 는 페이징과 함께 사용할 수 있다.', a:true, e:'IN 절로 묶어 조회하기 때문이다.' },
  { s:'s3', d:2, q:'연관관계 주인이 아닌 쪽에만 값을 설정해도 DB 에 반영된다.', a:false, e:'외래 키를 가진 주인 쪽을 설정해야 한다.' },
  { s:'s3', d:2, q:'벌크 연산은 영속성 컨텍스트를 거치지 않는다.', a:true, e:'실행 후 clear() 로 초기화해야 한다.' },
  { s:'s3', d:2, q:'OSIV 를 켜두면 커넥션 점유 시간이 길어진다.', a:true, e:'트래픽이 많으면 커넥션 고갈 위험이 있다.' },
  { s:'s3', d:2, q:'MySQL InnoDB 의 기본 격리 수준은 READ COMMITTED 다.', a:false, e:'REPEATABLE READ 가 기본이다.' },
  { s:'s3', d:2, q:'복합 인덱스는 선두 컬럼을 조건에 쓰지 않아도 정상 사용된다.', a:false, e:'선두 컬럼 규칙 때문에 사용하지 못한다.' },
  { s:'s3', d:2, q:'인덱스를 많이 만들수록 쓰기 성능이 떨어진다.', a:true, e:'인덱스도 함께 갱신해야 하기 때문이다.' },
  { s:'s4', d:2, q:'PUT 은 멱등하지만 PATCH 는 일반적으로 멱등하지 않다.', a:true, e:'PUT 은 전체 교체, PATCH 는 부분 수정이다.' },
  { s:'s4', d:1, q:'403 은 인증이 되지 않았을 때 반환하는 상태 코드다.', a:false, e:'인증 실패는 401, 403 은 권한 없음이다.' },
  { s:'s4', d:2, q:'CORS 문제는 프론트엔드 설정만으로 해결할 수 있다.', a:false, e:'서버가 허용 헤더를 내려야 한다.' },
  { s:'s4', d:2, q:'Allow-Credentials 를 true 로 두면서 Allow-Origin 을 * 로 설정할 수 있다.', a:false, e:'명시적 출처를 지정해야 한다.' },
  { s:'s4', d:2, q:'JWT 의 페이로드는 암호화되어 있어 민감 정보를 담아도 된다.', a:false, e:'Base64 인코딩일 뿐 누구나 디코딩할 수 있다.' },
  { s:'s4', d:2, q:'JWT 는 발급 후 즉시 무효화하기 어렵다.', a:true, e:'짧은 만료·리프레시 회전·블랙리스트로 보완한다.' },
  { s:'s4', d:2, q:'OAuth 2.0 은 인증 프로토콜이다.', a:false, e:'인가 프레임워크이며 인증은 OIDC 가 담당한다.' },
  { s:'s4', d:2, q:'비밀번호는 BCrypt 처럼 솔트와 반복이 적용된 해시로 저장해야 한다.', a:true, e:'단순 SHA-256 은 너무 빨라 부적절하다.' },
  { s:'s4', d:2, q:'HttpOnly 쿠키는 자바스크립트에서 읽을 수 없다.', a:true, e:'XSS 로 인한 쿠키 탈취를 완화한다.' },
  { s:'s5', d:2, q:'MSA 는 모든 규모의 조직에서 모놀리식보다 우수하다.', a:false, e:'운영 복잡도가 커 조직·규모에 따라 판단해야 한다.' },
  { s:'s5', d:2, q:'성능 문제는 측정보다 캐시 도입을 먼저 시도하는 것이 효율적이다.', a:false, e:'측정 없이 캐시를 넣으면 문제를 감추기만 한다.' },
  { s:'s5', d:2, q:'재시도 로직에는 타임아웃과 백오프가 함께 필요하다.', a:true, e:'재시도만 넣으면 장애가 증폭된다.' },
  { s:'s5', d:2, q:'멱등하지 않은 API 도 자동 재시도를 적용해도 안전하다.', a:false, e:'중복 처리가 발생한다.' },
  { s:'s5', d:2, q:'Saga 패턴은 보상 트랜잭션으로 일관성을 맞춘다.', a:true, e:'최종 일관성을 받아들이는 설계다.' },
  { s:'s5', d:2, q:'엔티티를 그대로 API 응답으로 노출해도 설계상 문제가 없다.', a:false, e:'스키마와 스펙이 결합되고 내부 필드가 노출된다.' },
  { s:'s5', d:2, q:'캐시 스탬피드는 만료 시점 분산(지터)으로 완화할 수 있다.', a:true, e:'뮤텍스·사전 갱신도 함께 쓴다.' },
  { s:'s6', d:1, q:'컨테이너는 게스트 OS 를 포함하지 않는다.', a:true, e:'호스트 커널을 공유해 가볍다.' },
  { s:'s6', d:2, q:'블루-그린 배포는 롤링 배포보다 롤백이 빠르다.', a:true, e:'이전 환경이 그대로 남아 있기 때문이다.' },
  { s:'s6', d:2, q:'무중단 배포 중에도 DB 컬럼을 바로 삭제해도 된다.', a:false, e:'구버전 인스턴스가 깨진다. 단계를 분리해야 한다.' },
  { s:'s6', d:2, q:'Readiness 프로브는 컨테이너 재시작 여부를 결정한다.', a:false, e:'재시작은 Liveness, Readiness 는 트래픽 투입 여부다.' },
  { s:'s6', d:2, q:'운영 중인 Redis 에서 KEYS 명령은 사용하지 않는 것이 좋다.', a:true, e:'싱글 스레드가 블로킹되어 전체 지연이 발생한다.' },
  { s:'s6', d:2, q:'Kafka 는 토픽 전체에서 메시지 순서를 보장한다.', a:false, e:'파티션 단위로만 보장한다.' },
  { s:'s6', d:2, q:'Kafka 소비자는 중복 소비를 전제로 멱등하게 설계해야 한다.', a:true, e:'at-least-once 전달이 일반적이다.' },
  { s:'s6', d:2, q:'장애 발생 시 원인 분석을 완료한 뒤 완화 조치를 해야 한다.', a:false, e:'서비스 회복(완화)이 우선이다.' },
  { s:'s7', d:2, q:'이분 탐색은 정렬되지 않은 배열에서도 사용할 수 있다.', a:false, e:'정렬이 전제 조건이다.' },
  { s:'s7', d:2, q:'가중치가 없는 그래프의 최단 경로는 BFS 로 구할 수 있다.', a:true, e:'가중치가 있으면 다익스트라를 쓴다.' },
  { s:'s7', d:2, q:'자바에서 Stack 클래스보다 ArrayDeque 사용이 권장된다.', a:true, e:'Stack 은 동기화된 레거시 클래스다.' },
  { s:'s7', d:2, q:'대용량 입력 처리에 Scanner 를 쓰면 시간 초과가 날 수 있다.', a:true, e:'BufferedReader 를 사용한다.' },
  { s:'s8', d:2, q:'경험을 말할 때 결과는 가능하면 수치로 표현해야 한다.', a:true, e:'수치가 없으면 개선을 증명할 수 없다.' },
  { s:'s8', d:1, q:'이직 사유로 전 직장의 문제를 구체적으로 지적하는 것이 솔직해서 좋다.', a:false, e:'험담은 즉시 감점 요인이다.' },
  { s:'s8', d:2, q:'모르는 질문에는 모른다고 인정하고 추론 방향을 제시하는 것이 낫다.', a:true, e:'지어내면 꼬리 질문에서 무너진다.' },
  { s:'s8', d:1, q:'역질문 기회에 "없습니다"라고 답해도 평가에 영향이 없다.', a:false, e:'관심 없음으로 읽혀 감점된다.' },
  { s:'s8', d:2, q:'이력서에 적은 기술은 모두 질문 대상이 된다고 보아야 한다.', a:true, e:'설명하지 못할 기술은 적지 않는 것이 안전하다.' }
];

CPPG.fill = [
  { s:'s1', d:2, q:'HashMap 에서 한 버킷의 충돌이 임계치를 넘고 테이블이 충분히 클 때 전환되는 자료구조는?', a:'레드-블랙 트리', k:['트리'], e:'최악 복잡도가 O(n)에서 O(log n)으로 개선된다.' },
  { s:'s1', d:2, q:'equals 와 함께 반드시 재정의해야 하는 메서드와 그 이유를 쓰시오.', a:'hashCode, 해시 기반 컬렉션에서 조회가 실패하기 때문', k:['hashCode','조회'], e:'equals 가 true 면 hashCode 도 같아야 한다.' },
  { s:'s1', d:2, q:'JVM 런타임 데이터 영역 중 모든 스레드가 공유하는 영역 2가지를 쓰시오.', a:'힙(Heap), 메서드 영역(Metaspace)', k:['힙','메서드'], e:'스택·PC 레지스터는 스레드별이다.' },
  { s:'s1', d:2, q:'volatile 이 보장하는 것과 보장하지 않는 것을 각각 쓰시오.', a:'가시성은 보장, 원자성은 보장하지 않음', k:['가시성','원자성'], e:'원자성은 Atomic 이나 락이 필요하다.' },
  { s:'s1', d:3, q:'OutOfMemoryError 의 대표 유형 3가지를 쓰시오.', a:'Java heap space, Metaspace, GC overhead limit exceeded', k:['heap','Metaspace','GC overhead'], e:'유형별로 원인과 대응이 다르다.' },
  { s:'s1', d:2, q:'Java 9 부터 기본으로 사용되는 GC 수집기는?', a:'G1 GC', k:['G1'], e:'저지연이 필요하면 ZGC·Shenandoah 를 고려한다.' },
  { s:'s2', d:2, q:'생성자 주입을 권장하는 이유 3가지 이상을 쓰시오.', a:'불변 보장, 필수 의존 명시, 순환 참조 조기 발견, 테스트 용이', k:['불변','필수','순환','테스트'], e:'필드 주입은 테스트·불변성에 불리하다.' },
  { s:'s2', d:3, q:'@Transactional 이 동작하지 않는 대표 원인 3가지를 쓰시오.', a:'같은 클래스 내부 호출, private 메서드, 예외를 잡아 삼킴, 체크드 예외', k:['내부 호출','private','삼','체크드'], e:'프록시 기반이라는 점에서 대부분의 원인이 나온다.' },
  { s:'s2', d:2, q:'@Transactional 의 기본 롤백 대상 예외 유형은?', a:'언체크드 예외(RuntimeException, Error)', k:['언체크드','RuntimeException'], e:'체크드 예외는 rollbackFor 지정이 필요하다.' },
  { s:'s2', d:2, q:'기존 트랜잭션을 보류하고 항상 새 트랜잭션을 시작하는 전파 속성은?', a:'REQUIRES_NEW', k:['REQUIRES_NEW'], e:'별도 커넥션을 점유하므로 풀 고갈에 주의한다.' },
  { s:'s2', d:2, q:'스프링 AOP 가 프록시를 만드는 두 가지 방식을 쓰시오.', a:'JDK 동적 프록시, CGLIB', k:['JDK','CGLIB'], e:'스프링 부트는 기본적으로 CGLIB 을 사용한다.' },
  { s:'s2', d:2, q:'자동 설정이 사용자 정의 빈을 덮어쓰지 않게 하는 조건 애너테이션은?', a:'@ConditionalOnMissingBean', k:['ConditionalOnMissingBean'], e:'해당 타입의 빈이 없을 때만 적용된다.' },
  { s:'s2', d:2, q:'필터와 인터셉터의 적용 위치를 각각 쓰시오.', a:'필터는 DispatcherServlet 앞단(서블릿 레벨), 인터셉터는 핸들러 전후(스프링 MVC)', k:['앞','핸들러'], e:'AOP 는 메서드 실행 시점이다.' },
  { s:'s3', d:2, q:'영속성 컨텍스트가 제공하는 이점 4가지 이상을 쓰시오.', a:'1차 캐시, 동일성 보장, 쓰기 지연, 변경 감지, 지연 로딩', k:['1차 캐시','동일성','쓰기 지연','변경 감지'], e:'UPDATE 를 직접 호출하지 않아도 되는 이유가 변경 감지다.' },
  { s:'s3', d:2, q:'flush 와 clear 의 차이를 쓰시오.', a:'flush 는 쓰기 지연 SQL 전송이고 컨텍스트는 유지, clear 는 컨텍스트 초기화', k:['SQL','초기화'], e:'flush 는 컨텍스트를 비우지 않는다.' },
  { s:'s3', d:3, q:'N+1 문제의 해결 수단 3가지 이상을 쓰시오.', a:'fetch join, @EntityGraph, @BatchSize, DTO 직접 조회', k:['fetch join','EntityGraph','BatchSize','DTO'], e:'페이징이 필요하면 @BatchSize 가 안전하다.' },
  { s:'s3', d:3, q:'컬렉션 fetch join 의 제약 3가지를 쓰시오.', a:'결과 행 중복, 컬렉션은 하나만 가능, 페이징 불가(메모리 페이징)', k:['중복','하나','페이징'], e:'ToOne 은 fetch join, 컬렉션은 batch size 조합이 정석이다.' },
  { s:'s3', d:2, q:'@ManyToOne 의 기본 페치 전략과 실무 권장 설정을 쓰시오.', a:'기본은 EAGER, 실무는 LAZY 로 변경', k:['EAGER','LAZY'], e:'예측 불가한 조인과 N+1 을 막기 위해서다.' },
  { s:'s3', d:2, q:'MySQL InnoDB 와 Oracle 의 기본 트랜잭션 격리 수준을 각각 쓰시오.', a:'InnoDB 는 REPEATABLE READ, Oracle 은 READ COMMITTED', k:['REPEATABLE','COMMITTED'], e:'PostgreSQL 도 READ COMMITTED 가 기본이다.' },
  { s:'s3', d:2, q:'인덱스를 타지 못하는 대표적인 경우 3가지를 쓰시오.', a:'컬럼 가공, 묵시적 형 변환, 복합 인덱스 선두 컬럼 미사용, 앞 와일드카드 LIKE', k:['가공','형 변환','선두','와일드카드'], e:'EXPLAIN 으로 먼저 확인한다.' },
  { s:'s3', d:2, q:'동시 재고 차감 문제를 해결하는 방법 3가지를 쓰시오.', a:'낙관적 락과 재시도, 비관적 락, DB 원자 UPDATE', k:['낙관','비관','원자'], e:'충돌 빈도와 트래픽에 따라 선택한다.' },
  { s:'s4', d:2, q:'HTTP 메서드 중 멱등하지 않은 것 2가지를 쓰시오.', a:'POST, PATCH', k:['POST','PATCH'], e:'재시도 설계 시 멱등 키가 필요하다.' },
  { s:'s4', d:1, q:'401 과 403 의 의미를 각각 쓰시오.', a:'401 은 인증 실패, 403 은 권한 없음', k:['인증','권한'], e:'혼동이 가장 잦은 상태 코드다.' },
  { s:'s4', d:2, q:'세션 방식과 JWT 의 결정적 차이 2가지를 쓰시오.', a:'서버 상태 보관 여부, 즉시 무효화 가능 여부', k:['상태','무효화'], e:'확장성과 무효화가 트레이드오프의 축이다.' },
  { s:'s4', d:2, q:'JWT 의 세 부분과 페이로드에 대한 주의점을 쓰시오.', a:'Header, Payload, Signature / 페이로드는 암호화가 아니므로 민감 정보 금지', k:['Header','Payload','Signature','민감'], e:'Base64 인코딩일 뿐이다.' },
  { s:'s4', d:2, q:'CORS 프리플라이트 요청에 사용되는 HTTP 메서드는?', a:'OPTIONS', k:['OPTIONS'], e:'단순 요청이 아닐 때 브라우저가 먼저 보낸다.' },
  { s:'s4', d:2, q:'SQL 인젝션과 XSS 의 근본 대응을 각각 쓰시오.', a:'SQL 인젝션은 파라미터 바인딩, XSS 는 출력 인코딩', k:['바인딩','인코딩'], e:'CSRF 는 토큰과 SameSite 쿠키로 대응한다.' },
  { s:'s5', d:2, q:'SOLID 5원칙을 쓰시오.', a:'단일 책임, 개방-폐쇄, 리스코프 치환, 인터페이스 분리, 의존 역전', k:['단일','개방','리스코프','인터페이스','의존'], e:'스프링 DI 는 의존 역전 원칙의 구현이다.' },
  { s:'s5', d:2, q:'성능 문제 접근 순서를 쓰시오.', a:'측정, 병목 식별, 개선, 재측정', k:['측정','병목','개선','재측정'], e:'캐시를 먼저 넣는 것은 안티패턴이다.' },
  { s:'s5', d:3, q:'분산 트랜잭션에서 Saga 패턴이 사용하는 보정 수단은?', a:'보상 트랜잭션', k:['보상'], e:'코레오그래피와 오케스트레이션 방식이 있다.' },
  { s:'s5', d:2, q:'외부 호출 복원성 패턴 4가지를 쓰시오.', a:'타임아웃, 재시도(지수 백오프), 서킷 브레이커, 폴백', k:['타임아웃','재시도','서킷','폴백'], e:'벌크헤드와 레이트 리밋도 함께 쓴다.' },
  { s:'s5', d:2, q:'캐시 스탬피드를 완화하는 방법 2가지를 쓰시오.', a:'만료 시간 지터, 뮤텍스(단일 갱신), 사전 갱신', k:['지터','뮤텍스','사전'], e:'동시 만료로 원본이 폭주하는 현상이다.' },
  { s:'s6', d:2, q:'무중단 배포에서 DB 컬럼을 제거할 때의 단계 순서를 쓰시오.', a:'신규 컬럼 추가, 코드 배포, 데이터 이전, 기존 컬럼 삭제', k:['추가','배포','이전','삭제'], e:'단계를 합치면 배포 중 구버전이 깨진다.' },
  { s:'s6', d:2, q:'Kubernetes 의 Readiness 와 Liveness 프로브의 역할을 각각 쓰시오.', a:'Readiness 는 트래픽 투입 여부, Liveness 는 재시작 여부', k:['트래픽','재시작'], e:'스프링 Actuator health 와 연결해 사용한다.' },
  { s:'s6', d:2, q:'운영 중인 Redis 에서 피해야 할 명령 2가지와 대체 명령을 쓰시오.', a:'KEYS, FLUSHALL / 대체는 SCAN', k:['KEYS','FLUSHALL','SCAN'], e:'싱글 스레드라 O(n) 명령이 전체를 블로킹한다.' },
  { s:'s6', d:2, q:'Kafka 에서 순서가 보장되는 단위와 그 대응 방법을 쓰시오.', a:'파티션 단위 보장, 순서가 필요하면 키로 파티션 고정', k:['파티션','키'], e:'파티션 수 이상으로 컨슈머를 늘려도 병렬도가 오르지 않는다.' },
  { s:'s6', d:2, q:'관측 가능성의 3요소를 쓰시오.', a:'메트릭, 로그, 트레이스', k:['메트릭','로그','트레이스'], e:'RED·USE 지표와 함께 본다.' },
  { s:'s7', d:2, q:'입력 크기 n 이 10만일 때 목표로 삼아야 할 시간 복잡도는?', a:'O(n log n) 이하', k:['n log n'], e:'제한 조건이 알고리즘을 지정한다.' },
  { s:'s7', d:2, q:'LRU 캐시를 자바 표준 컬렉션으로 구현할 때 쓰는 클래스와 설정을 쓰시오.', a:'LinkedHashMap, accessOrder 를 true 로 설정', k:['LinkedHashMap','accessOrder'], e:'removeEldestEntry 를 재정의한다.' },
  { s:'s7', d:2, q:'자바 코딩 테스트에서 대용량 입출력을 처리하는 방법을 쓰시오.', a:'BufferedReader 와 StringTokenizer 로 입력, StringBuilder 로 출력', k:['BufferedReader','StringBuilder'], e:'Scanner 는 느려 시간 초과가 난다.' },
  { s:'s8', d:2, q:'경험 질문에 사용하는 STAR 기법의 네 단계를 쓰시오.', a:'Situation, Task, Action, Result', k:['Situation','Task','Action','Result'], e:'Result 는 반드시 수치로 표현한다.' },
  { s:'s8', d:2, q:'이직 사유를 답할 때 지켜야 할 원칙 2가지를 쓰시오.', a:'전 직장 험담 금지, 회피형이 아닌 지향형으로 말하기', k:['험담','지향'], e:'지향점이 지원 회사에서 가능한지 연결한다.' },
  { s:'s8', d:2, q:'기술 질문 답변의 3단 구조를 쓰시오.', a:'정의 한 줄, 동작과 이유, 내 경험과 트레이드오프', k:['정의','동작','경험'], e:'세 번째가 없으면 공부한 사람으로만 보인다.' },
  { s:'s8', d:2, q:'모르는 질문을 받았을 때의 대응 순서를 쓰시오.', a:'아는 범위까지 말하기, 모른다고 인정, 추론 방향 제시', k:['아는','인정','추론'], e:'지어내면 꼬리 질문에서 무너진다.' }
];
