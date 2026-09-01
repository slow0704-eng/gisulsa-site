/* ============================================================
   AWS SAA-C03 — 학습·퀴즈 데이터 (Solutions Architect Associate)
   소스: 02_타자격증_학습자료/AWS_SAA-C03/*.txt (00~09)
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

/* ── 0. 시험 메타 ───────────────────────────────────────── */
CPPG.meta = {
  name: 'AWS SAA-C03',
  brand: 'SAA', tag: 'AWS SAA-C03', storeKey: 'awssaa',
  title: 'AWS SAA-C03 — 암기·퀴즈 학습',
  h1: 'AWS 솔루션스 아키텍트 어소시에이트',
  unit: '영역',
  passRule: { pct: 72, per: 0 },       // 720/1000점 · 도메인별 과락 없음
  footer: [
    'AWS Certified Solutions Architect – Associate (SAA-C03) / 주관 Amazon Web Services · 시험 Pearson VUE·PSI',
    '데이터 소스: <code>02_타자격증_학습자료/AWS_SAA-C03/*.txt</code> → <code>학습사이트/data.js</code> · 진도·오답노트는 브라우저(localStorage)에만 저장됩니다.',
    '⚠ 공식 배점은 <b>4 도메인(보안 30 · 복원성 26 · 고성능 24 · 비용 20%)</b> 기준입니다. 이 사이트의 5개 학습 영역은 서비스 계열로 재편성한 것이고, 영역별 문항 수는 <b>도메인 비중을 환산한 추정치</b>입니다. 최신 출제 범위는 <b>AWS Exam Guide</b>에서 확인하세요.'
  ],
  full: 'AWS Certified Solutions Architect – Associate',
  host: 'Amazon Web Services (Pearson VUE · PSI)',
  type: '객관식 단일선택 + 복수선택 · 65문항',
  time: '130분 (문항당 약 2분)',
  pass: '1000점 만점 중 720점 (정답률 약 72%)',
  book: 'AWS 공인 솔루션스 아키텍트 스터디 가이드 어소시에이트 4/e (에이콘) + Skill Builder',
  slogan: 'SAA 720점 = VPC(SG·NACL·엔드포인트) + S3 클래스·수명주기 + Multi-AZ vs 읽기 전용 복제본 + IAM·SCP 평가 로직 + DR 4전략'
};

/* ── 1. 학습 영역 ───────────────────────────────────────── */
CPPG.subjects = [
  { id:'s1', no:1, name:'컴퓨트 · 서버리스',      out:11, color:'#f59e0b', desc:'EC2·구매옵션·ASG·ECS/EKS/Fargate·Lambda — Domain 3·4' },
  { id:'s2', no:2, name:'스토리지',               out:11, color:'#10b981', desc:'S3 클래스·수명주기·암호화 / EBS·EFS·FSx·Snow — Domain 3·4' },
  { id:'s3', no:3, name:'네트워킹 · 엣지',        out:16, color:'#3b82f6', desc:'VPC·SG/NACL·엔드포인트·TGW·ELB·Route53·CloudFront ★최중점★' },
  { id:'s4', no:4, name:'데이터베이스 · 분석',    out:13, color:'#8b5cf6', desc:'RDS·Aurora·DynamoDB·ElastiCache·Redshift / Kinesis·Glue·Athena' },
  { id:'s5', no:5, name:'보안 · 아키텍처 · 비용', out:14, color:'#ef4444', desc:'IAM·KMS·Organizations·모니터링 / 복원성·DR·디커플링·비용 ★Domain 1 30%★' }
];

/* ── 2. 암기카드 ────────────────────────────────────────── */
CPPG.cards = [
  // ───── 1영역 컴퓨트 · 서버리스 ─────
  { s:'s1', g:'글로벌 인프라', front:'리전 · AZ · 엣지 로케이션 · Local Zone', key:'', back:'리전=독립 지리 구역(최소 3 AZ) · AZ=1개 이상 데이터센터, 리전 내 저지연 연결 · 엣지 로케이션=CloudFront/R53 캐시 400+ · Local Zone=대도시 밀착 초저지연 · Wavelength=5G', tip:'"다중 AZ = 고가용성" / "다중 리전 = 재해복구·규제 대응"으로 구분' },
  { s:'s1', g:'EC2 요금', front:'EC2 구매 옵션 5종', key:'온·예·절·스·전', back:'온디맨드(유연·최고가) · 예약 인스턴스 RI(1/3년·인스턴스 타입 고정, 최대 72%↓) · Savings Plans(금액 약정·유연) · 스팟(최대 90%↓·2분 전 중단 통보) · 전용 호스트/인스턴스(BYOL·규제)', tip:'"중단돼도 되는 배치·스테이트리스" → 스팟 / "상시·장기" → RI·SP' },
  { s:'s1', g:'EC2 요금', front:'RI vs Savings Plans 차이', key:'', back:'RI=인스턴스 타입·리전 등 속성 약정, 용량 예약(zonal RI만) 가능 / Savings Plans=시간당 $ 약정, Compute SP는 EC2·Fargate·Lambda까지 리전·패밀리 무관 적용', tip:'Compute SP가 가장 유연, EC2 Instance SP가 할인율은 더 큼' },
  { s:'s1', g:'스팟', front:'스팟 인스턴스 중단과 완화', key:'', back:'용량 회수 시 ★2분 전★ 중단 통보(메타데이터·EventBridge) / 완화: Spot Fleet·혼합 인스턴스 정책·용량 최적화 배분 전략·체크포인트 저장', tip:'스팟 블록(정해진 시간 보장)은 신규 사용 불가 — 현재는 중단 허용 워크로드에만' },
  { s:'s1', g:'Auto Scaling', front:'ASG 조정 정책 4종', key:'', back:'대상 추적(목표 CPU 등 지정, 가장 권장) · 단계 조정(알람 임계 구간별) · 단순 조정(쿨다운 필요) · 예약 조정(시간 기반) / 예측 조정=ML 기반 사전 확장', tip:'"주기적으로 예측 가능한 급증" → 예약 조정 / "부하 비례" → 대상 추적' },
  { s:'s1', g:'Auto Scaling', front:'ASG 상태 검사와 수명 주기 훅', key:'', back:'상태 검사=EC2 상태 + ELB 상태(활성화 필요) + 사용자 지정 / 수명 주기 훅=시작·종료 시 대기 상태로 잡아 로그 수집·워밍업 수행 / 워밍업 시간 설정으로 조기 축소 방지', tip:'ELB 상태 검사를 켜야 애플리케이션 장애 인스턴스가 교체된다' },
  { s:'s1', g:'배치 전략', front:'배치 그룹 3종', key:'클·분·파', back:'클러스터=단일 AZ 밀집, 최저 지연·최고 대역(HPC) / 분산(Spread)=랙 분리, 랙당 7대 제한, 최고 가용성 / 파티션=파티션별 랙 분리, 대규모 분산 시스템(HDFS·Kafka)', tip:'"HPC 저지연"=클러스터, "중요 인스턴스 격리"=분산' },
  { s:'s1', g:'Lambda', front:'Lambda 주요 제한과 동시성', key:'', back:'최대 실행 15분 · 메모리 128MB~10,240MB · /tmp 512MB~10GB · 배포 패키지 zip 50MB(압축)·250MB(해제)·컨테이너 이미지 10GB / 리전 기본 동시 실행 1,000 · 예약 동시성·프로비저닝된 동시성(냉시작 완화)', tip:'"15분 초과 처리" → Fargate·Batch·Step Functions로 분할' },
  { s:'s1', g:'컨테이너', front:'ECS vs EKS vs Fargate', key:'', back:'ECS=AWS 자체 오케스트레이션(단순·IAM 통합) / EKS=관리형 쿠버네티스(이식성·생태계) / Fargate=시작 유형(서버리스 데이터 플레인) — ECS·EKS 모두에서 선택 가능', tip:'Fargate는 "오케스트레이터"가 아니라 "실행 방식" — EC2 시작 유형과 대비' },
  { s:'s1', g:'EC2 기본', front:'AMI · 루트 볼륨 · 사용자 데이터', key:'', back:'AMI=OS+구성 이미지(리전 종속, 복사·공유 가능) / 루트 볼륨: EBS 백업(중지 가능·영구) vs 인스턴스 스토어(임시·중지 불가·초고속) / 사용자 데이터=부팅 시 1회 실행 스크립트', tip:'인스턴스 스토어는 중지·최대 절전 시 데이터 소실 — 캐시·버퍼 전용' },
  { s:'s1', g:'EC2 기본', front:'인스턴스 패밀리 선택', key:'', back:'T=버스트 범용(크레딧) · M=범용 · C=컴퓨팅 최적화 · R/X=메모리 최적화 · I/D=스토리지 최적화(NVMe) · G/P/Inf=가속 컴퓨팅(GPU·추론)', tip:'"인메모리 DB·대용량 캐시" → R·X / "고IOPS 로컬 디스크" → I' },

  // ───── 2영역 스토리지 ─────
  { s:'s2', g:'S3 클래스', front:'S3 스토리지 클래스 선택 기준', key:'', back:'Standard(빈번) · Intelligent-Tiering(패턴 불명, 자동 계층) · Standard-IA / One Zone-IA(재생성 가능, 1 AZ) · Glacier Instant / Flexible(분~시간) / Deep Archive(12시간, 최저가)', tip:'"접근 패턴을 모른다" → 무조건 Intelligent-Tiering이 정답 패턴' },
  { s:'s2', g:'S3 클래스', front:'S3 수명 주기와 최소 보관 기간', key:'', back:'전환(Transition) + 만료(Expiration) 규칙, 접두사·태그 기준 / 최소 과금 기간: IA 계열 30일, Glacier Flexible 90일, Deep Archive 180일 / IA 최소 객체 크기 128KB', tip:'"30일 후 IA, 90일 후 Glacier" 형태가 전형적 정답' },
  { s:'s2', g:'S3 기본', front:'S3 내구성 · 가용성 · 일관성', key:'', back:'내구성 99.999999999%(11 9s), 최소 3 AZ 복제(One Zone-IA 제외) / 2020년 12월부터 ★모든 요청에 강력한 읽기·쓰기 일관성★ / 객체 최대 5TB, 단일 PUT 5GB(초과 시 멀티파트)', tip:'"최종 일관성 때문에 지연" 보기는 현재 오답' },
  { s:'s2', g:'S3 보안', front:'S3 암호화 3방식', key:'', back:'SSE-S3(AES-256, AWS 관리 키, 기본 활성) · SSE-KMS(키 정책·CloudTrail 감사·회전, 요청 한도 주의) · SSE-C(고객이 키 제공, AWS 미보관) / DSSE-KMS=이중 암호화', tip:'"키 사용 감사·접근 제어 필요" → SSE-KMS' },
  { s:'s2', g:'S3 보안', front:'버전 관리 · Object Lock · MFA Delete', key:'', back:'버전 관리=덮어쓰기·삭제 보호(삭제 마커) / Object Lock=WORM, 거버넌스 모드(권한 있으면 해제) vs 규정 준수 모드(누구도 해제 불가) / MFA Delete=버전 영구 삭제 시 MFA 요구', tip:'"규제상 변경 불가 보관" → Object Lock 규정 준수 모드' },
  { s:'s2', g:'S3 배포', front:'S3 정적 웹사이트 + CloudFront OAC', key:'', back:'S3 정적 호스팅 + CloudFront + ACM(무료 TLS) + Route 53 별칭 / OAC(Origin Access Control, 구 OAI)로 버킷 직접 접근 차단 → CloudFront 경유만 허용', tip:'ACM 인증서는 CloudFront에 붙일 때 ★us-east-1★에서 발급해야 한다' },
  { s:'s2', g:'S3 전송', front:'S3 성능 최적화 기능', key:'', back:'멀티파트 업로드(100MB↑ 권장, 5GB↑ 필수) · Transfer Acceleration(엣지 경유 원거리 업로드) · 바이트 범위 가져오기 · S3 복제(CRR 리전 간 / SRR 리전 내, 버전 관리 필수)', tip:'"지구 반대편에서 대용량 업로드" → Transfer Acceleration' },
  { s:'s2', g:'EBS', front:'EBS 볼륨 타입 4종', key:'', back:'gp3(기본 3,000 IOPS·125MB/s, 용량과 성능 분리, gp2 대비 저렴) · io1/io2 Block Express(최대 256,000 IOPS·다중 연결) · st1(처리량 HDD, 빅데이터) · sc1(콜드 HDD, 최저가)', tip:'"부팅 볼륨 가능" = gp2·gp3·io1·io2 / st1·sc1은 불가' },
  { s:'s2', g:'EBS', front:'EBS 스냅샷 · 암호화 · 가용 범위', key:'', back:'스냅샷=S3에 증분 저장, 리전 간 복사 가능 / 볼륨은 ★단일 AZ★ 한정 — 다른 AZ로 옮기려면 스냅샷 → 복원 / 암호화 볼륨의 스냅샷·복원본은 자동 암호화(KMS)', tip:'미암호화 볼륨 암호화 = 스냅샷 → 암호화 복사 → 볼륨 생성' },
  { s:'s2', g:'파일 스토리지', front:'EFS vs FSx 선택', key:'', back:'EFS=관리형 NFS, 다중 AZ·Linux 다중 연결, IA 수명 주기 / FSx for Windows=SMB·AD 통합 / FSx for Lustre=HPC·ML 초고속, S3 연동 / FSx for NetApp ONTAP·OpenZFS', tip:'"Windows 파일 공유" → FSx Windows / "리눅스 공유 스토리지" → EFS' },
  { s:'s2', g:'하이브리드', front:'Storage Gateway 3종과 Snow Family', key:'', back:'File Gateway(NFS/SMB → S3) · Volume Gateway(iSCSI, 캐시형/저장형) · Tape Gateway(VTL → Glacier) / Snowcone(8TB) · Snowball Edge(수십 TB) · Snowmobile(엑사바이트급)', tip:'"네트워크 대역폭 부족 + 대용량 일회성 이관" → Snow / "지속 동기화" → DataSync' },

  // ───── 3영역 네트워킹 · 엣지 ─────
  { s:'s3', g:'VPC 기본', front:'VPC · 서브넷 · CIDR 규칙', key:'', back:'VPC CIDR /16~/28, 생성 후 축소 불가(보조 CIDR 추가는 가능) / 서브넷은 ★1개 AZ에 종속★ / 각 서브넷에서 ★5개 IP 예약★(네트워크·VPC 라우터·DNS·예비·브로드캐스트)', tip:'/24 서브넷의 실사용 가능 IP는 256 − 5 = 251개' },
  { s:'s3', g:'VPC 기본', front:'퍼블릭 vs 프라이빗 서브넷', key:'', back:'퍼블릭=라우팅 테이블에 0.0.0.0/0 → IGW 경로 + 퍼블릭 IP 존재 / 프라이빗=IGW 경로 없음, 아웃바운드는 NAT 게이트웨이 경유 / 서브넷 자체 속성이 아니라 ★라우팅으로 결정★', tip:'"프라이빗 서브넷인데 인터넷이 된다" → 라우팅 테이블부터 확인' },
  { s:'s3', g:'VPC 게이트웨이', front:'IGW · NAT GW · NAT 인스턴스 · EIGW', key:'', back:'IGW=VPC당 1개, 양방향 IPv4/IPv6 / NAT GW=관리형·AZ별 배치·EIP 필요·아웃바운드 전용(대역 최대 100Gbps) / NAT 인스턴스=직접 관리·원본/대상 확인 해제 필요 / EIGW=IPv6 전용 아웃바운드', tip:'NAT GW는 AZ 종속 — 고가용성 위해 ★AZ마다 1개★ 배치' },
  { s:'s3', g:'VPC 보안', front:'보안 그룹 vs 네트워크 ACL', key:'SG↔NACL', back:'SG=인스턴스/ENI 단위·Stateful(응답 자동 허용)·허용 규칙만·모든 규칙 평가 / NACL=서브넷 단위·Stateless(인·아웃 각각 필요)·허용+거부·규칙 번호 낮은 순 우선', tip:'"특정 IP 차단" 요구 → NACL만 가능(SG는 Deny 규칙 없음)' },
  { s:'s3', g:'VPC 연결', front:'VPC 엔드포인트 2종', key:'', back:'Gateway 엔드포인트=S3·DynamoDB 전용, 라우팅 테이블에 항목 추가, ★무료★ / Interface 엔드포인트(PrivateLink)=ENI+프라이빗 IP, 대부분 서비스·타사 SaaS, 시간·데이터 과금', tip:'"NAT 비용 없이 S3 접근" → Gateway 엔드포인트' },
  { s:'s3', g:'VPC 연결', front:'Peering vs Transit Gateway vs PrivateLink', key:'', back:'Peering=1:1·비전이적(전이 라우팅 불가)·CIDR 중복 불가 / TGW=다대다 허브, VPN·DX·리전 간 피어링 통합, 라우팅 테이블 분리 / PrivateLink=서비스 단위 단방향 노출(CIDR 중복 무관)', tip:'"VPC 수십 개 상호 연결" → TGW (Peering은 N(N−1)/2개 필요)' },
  { s:'s3', g:'하이브리드', front:'Direct Connect vs Site-to-Site VPN', key:'', back:'DX=전용선(1/10/100Gbps), 일관된 지연·대역, 구축 수주~수개월, 기본은 비암호화(DX+VPN으로 암호화) / VPN=인터넷 경유 IPsec, 수분 내 구축, 저비용, 지연 변동 / DX 이중화 또는 DX+VPN 백업', tip:'"즉시 필요" → VPN, "안정적 대역·지연" → DX, "규제상 암호화" → DX over VPN' },
  { s:'s3', g:'ELB', front:'ELB 4종 구분', key:'', back:'ALB=L7 HTTP/HTTPS, 경로·호스트·헤더 기반 라우팅, 대상 그룹(IP·인스턴스·Lambda) / NLB=L4 TCP/UDP/TLS, 초고성능·초저지연, ★고정 IP·EIP★ / GWLB=L3 보안 어플라이언스 체이닝(GENEVE) / CLB=구세대', tip:'"정적 IP가 필요한 로드 밸런서" → NLB' },
  { s:'s3', g:'ELB', front:'ELB 상태 검사 · 고정 세션 · 교차 영역', key:'', back:'상태 검사 실패 시 트래픽 제외 / 고정 세션(Sticky)=ALB 애플리케이션 쿠키·AWSALB, NLB는 소스 IP 기반 / 교차 영역 부하 분산: ALB 기본 켜짐·무료, NLB/GWLB 기본 꺼짐·AZ 간 요금', tip:'세션은 ELB 고정보다 ★ElastiCache Redis 외부 저장★이 정석' },
  { s:'s3', g:'DNS', front:'Route 53 라우팅 정책 7종', key:'단·가·지·지·장·다·IP', back:'단순 · 가중치(비율·카나리) · 지연 시간(최저 지연 리전) · 지리 위치(사용자 위치 기준) · 장애 조치(Failover, 상태 검사) · 다중 값 응답(간이 분산) · 지리 근접(트래픽 편향)', tip:'"규정상 특정 국가 사용자는 특정 리전" → 지리 위치 / "가장 빠른 응답" → 지연 시간' },
  { s:'s3', g:'DNS', front:'Route 53 별칭(Alias) 레코드', key:'', back:'ELB·CloudFront·S3 웹사이트·API GW·Global Accelerator 등 AWS 리소스를 가리키는 무료 레코드 / ★Zone Apex(example.com)에 사용 가능★ · CNAME은 Apex 불가 / TTL은 대상 서비스가 관리', tip:'"루트 도메인을 ALB에 연결" → 별칭 레코드가 유일한 정답' },
  { s:'s3', g:'엣지', front:'CloudFront vs Global Accelerator', key:'', back:'CloudFront=CDN, HTTP 캐싱·서명 URL/쿠키·WAF·Lambda@Edge·OAC / GA=Anycast 정적 IP 2개, TCP/UDP 비캐시 트래픽을 AWS 백본으로 라우팅·즉시 장애 조치', tip:'"캐시 가능한 정적 콘텐츠" → CloudFront / "게임·IoT 등 비HTTP 저지연" → GA' },

  // ───── 4영역 데이터베이스 · 분석 ─────
  { s:'s4', g:'RDS', front:'Multi-AZ vs 읽기 전용 복제본', key:'', back:'Multi-AZ=동기 복제·대기 인스턴스 ★접근 불가★·자동 장애 조치(고가용성) / 읽기 전용 복제본=비동기·읽기 가능·리전 간 가능·수동 승격(성능 확장) / Multi-AZ DB 클러스터는 읽기 가능한 대기 2대', tip:'"고가용성" → Multi-AZ, "읽기 부하 분산" → 읽기 전용 복제본 — 최다 함정' },
  { s:'s4', g:'RDS', front:'RDS 백업 · 암호화 · 프록시', key:'', back:'자동 백업(1~35일, PITR) + 수동 스냅샷(무기한) / 저장 시 암호화는 ★생성 시점★에만 활성(기존 DB는 스냅샷 복사로 암호화) / RDS Proxy=커넥션 풀링, Lambda 연결 폭주 완화·장애 조치 단축', tip:'읽기 전용 복제본은 백업이 아니다 — 삭제·오손 데이터도 복제된다' },
  { s:'s4', g:'Aurora', front:'Aurora 스토리지 아키텍처', key:'', back:'★3 AZ × 2 = 6개 복사본★, 쓰기 4/6 · 읽기 3/6 정족수 / 스토리지 10GB~128TB 자동 확장, 자가 복구 / 최대 15개 읽기 전용 복제본, 리더 엔드포인트로 부하 분산', tip:'"MySQL/PostgreSQL 호환 + 고성능·고가용" 문장이 나오면 Aurora' },
  { s:'s4', g:'Aurora', front:'Aurora Global Database · Serverless v2', key:'', back:'Global DB=보조 리전에 ★1초 미만★ 복제, 최대 5개 보조 리전, 1분 내 승격(RPO≈1초·RTO≈1분) / Serverless v2=ACU 단위 초 단위 스케일, 예측 불가 워크로드·개발 환경', tip:'"글로벌 DR + 읽기 저지연" → Aurora Global Database' },
  { s:'s4', g:'DynamoDB', front:'DynamoDB 키 설계와 용량 모드', key:'', back:'파티션 키(균등 분산 필수) + 선택적 정렬 키 / 온디맨드=예측 불가·트래픽 급변 / 프로비저닝=예측 가능·저비용, Auto Scaling·예약 용량 / 항목 최대 400KB', tip:'"핫 파티션" 원인은 카디널리티 낮은 파티션 키' },
  { s:'s4', g:'DynamoDB', front:'GSI vs LSI', key:'', back:'GSI=다른 파티션 키 사용, 테이블 생성 후 추가·삭제 가능, 자체 용량, ★최종 일관성만★ / LSI=같은 파티션 키+다른 정렬 키, ★테이블 생성 시에만★ 정의, 강력한 일관성 가능, 파티션당 10GB 제한', tip:'"운영 중인 테이블에 새 조회 조건 추가" → GSI' },
  { s:'s4', g:'DynamoDB', front:'DynamoDB 부가 기능', key:'', back:'DAX=마이크로초 인메모리 캐시(읽기 전용 API 투명 적용) · Streams=변경 캡처 → Lambda 트리거 · Global Tables=다중 리전 다중 쓰기 · TTL=자동 만료 삭제 · PITR 35일', tip:'DynamoDB 캐시는 DAX, RDS 캐시는 ElastiCache — 짝을 바꿔 내는 함정' },
  { s:'s4', g:'캐시', front:'ElastiCache Redis vs Memcached', key:'', back:'Redis=복제·Multi-AZ 장애 조치·영속(AOF/RDB)·정렬셋/Pub-Sub·백업 → 세션·리더보드 / Memcached=순수 멀티스레드 캐시, 샤딩만, 복제·영속 없음 → 단순 캐시', tip:'"세션 저장·고가용" 조건이 하나라도 있으면 Redis' },
  { s:'s4', g:'분석 DB', front:'Redshift 핵심', key:'', back:'컬럼형 MPP 데이터 웨어하우스(OLAP) / RA3=관리형 스토리지 분리 / Spectrum=S3 데이터를 로드 없이 직접 쿼리 / 분산 키·정렬 키 설계가 성능 좌우 / 동시성 확장·Redshift Serverless', tip:'"페타바이트급 BI·복잡한 집계 SQL" → Redshift (RDS 아님)' },
  { s:'s4', g:'마이그레이션', front:'DMS와 SCT', key:'', back:'DMS=최소 다운타임 DB 마이그레이션, 전체 로드 + CDC 지속 복제, 소스·타깃 상이 가능 / SCT=이기종 전환 시 ★스키마·저장 프로시저 변환★ / 동종이면 SCT 불필요', tip:'"Oracle → Aurora PostgreSQL" 같은 이기종은 SCT + DMS 조합' },
  { s:'s4', g:'스트리밍', front:'Kinesis 4종', key:'', back:'Data Streams=샤드 기반 실시간, 보존 24h~365d, 소비자 직접 구현 / Data Firehose=완전관리 전송(S3·Redshift·OpenSearch), 준실시간 버퍼링 / Managed Service for Apache Flink=스트림 분석 / Video Streams', tip:'"코드 없이 S3로 적재" → Firehose / "여러 소비자·재처리" → Data Streams' },
  { s:'s4', g:'분석 파이프라인', front:'Glue · Athena · EMR · QuickSight', key:'', back:'Glue=서버리스 ETL + 데이터 카탈로그 + 크롤러 / Athena=S3 SQL 쿼리, ★스캔량 과금★(Parquet·압축·파티셔닝으로 절감) / EMR=Hadoop·Spark 클러스터 배치 / QuickSight=BI·SPICE / Lake Formation=레이크 권한 통합', tip:'"서버 없이 S3 로그를 SQL로" → Athena, "장시간 Spark 배치" → EMR' },

  // ───── 5영역 보안 · 아키텍처 · 비용 ─────
  { s:'s5', g:'IAM', front:'IAM 정책 평가 로직', key:'', back:'① 명시적 Deny → 즉시 거부 ② SCP(Organizations) 허용 범위 ③ 리소스 기반 정책 ④ 권한 경계(Permissions Boundary) ⑤ 세션 정책 ⑥ 자격 증명 기반 Allow — 하나라도 막히면 거부(암묵적 거부가 기본)', tip:'"IAM에서 허용했는데 안 된다" → SCP·권한 경계·리소스 정책 순으로 점검' },
  { s:'s5', g:'IAM', front:'IAM 역할 · STS · 페더레이션', key:'', back:'역할=임시 자격 증명(액세스 키 하드코딩 금지) / STS AssumeRole·AssumeRoleWithSAML·AssumeRoleWithWebIdentity, 15분~12시간 / IAM Identity Center(구 SSO)=다중 계정 SSO / Cognito=앱 사용자 인증(User Pool·Identity Pool)', tip:'"EC2에서 S3 접근" → 인스턴스 프로파일 역할 (키 파일 배포는 항상 오답)' },
  { s:'s5', g:'거버넌스', front:'Organizations · SCP · OU', key:'', back:'통합 결제·볼륨 할인, OU 계층 구조 / SCP=계정에 대한 ★권한 상한(가드레일)★ — 권한을 부여하지 않고 제한만 함, 관리 계정에는 미적용 / Control Tower=랜딩 존 자동 구축 / RAM=리소스 계정 간 공유', tip:'SCP는 "허용"이 아니라 "최대 한도" — 루트 사용자도 제한된다' },
  { s:'s5', g:'암호화', front:'KMS vs CloudHSM · Secrets vs Parameter Store', key:'', back:'KMS=관리형 멀티테넌트, FIPS 140-2 L2, 대칭·비대칭, 자동 회전 / CloudHSM=단일 테넌트 전용 HSM, L3, 키 완전 소유 / Secrets Manager=자동 교체·RDS 통합(유료) / Parameter Store=구성값·무료 티어', tip:'"DB 암호 자동 교체" → Secrets Manager (Parameter Store는 자동 교체 없음)' },
  { s:'s5', g:'위협 탐지', front:'GuardDuty · Inspector · Macie · Detective · Security Hub', key:'', back:'GuardDuty=로그 기반 위협 탐지(CloudTrail·VPC Flow·DNS) / Inspector=EC2·ECR·Lambda 취약점 스캔 / Macie=S3 민감정보(PII) 탐지 / Detective=원인 분석 그래프 / Security Hub=표준(CIS·PCI) 통합 대시보드', tip:'"S3에 개인정보가 있는지" → Macie, "취약한 패키지" → Inspector' },
  { s:'s5', g:'네트워크 보안', front:'WAF · Shield · Network Firewall · Firewall Manager', key:'', back:'WAF=L7 규칙(SQLi·XSS·속도 기반), CloudFront·ALB·API GW·AppSync에 연결 / Shield Standard=무료 L3·L4 DDoS, Advanced=유료·요금 보호·DRT / Network Firewall=VPC L3~L7 / Firewall Manager=조직 전체 정책 일괄', tip:'"애플리케이션 계층 공격 차단" → WAF, "대규모 DDoS 대응 지원" → Shield Advanced' },
  { s:'s5', g:'모니터링', front:'CloudTrail vs CloudWatch vs Config', key:'', back:'CloudTrail=★누가 무엇을 호출했나★(API 감사, 90일 이벤트 기록·장기 보관은 S3) / CloudWatch=메트릭·로그·알람·대시보드 / Config=리소스 ★구성 변경 이력★과 규정 준수 규칙 평가', tip:'"누가 삭제했는가" → CloudTrail / "설정이 규정에 맞는가" → Config' },
  { s:'s5', g:'디커플링', front:'SQS Standard vs FIFO', key:'', back:'Standard=거의 무제한 처리량·최소 1회 전달·순서 미보장 / FIFO=순서 보장·정확히 1회 처리, 300 TPS(배치 3,000·고처리량 모드 더 높음), 메시지 그룹 ID / 보존 최대 14일, 최대 256KB', tip:'중복 처리에 대비한 ★멱등 설계★가 Standard의 전제' },
  { s:'s5', g:'디커플링', front:'SQS 가시성 시간 초과와 DLQ', key:'', back:'가시성 시간 초과=수신 후 다른 소비자에게 숨기는 시간(기본 30초, 최대 12시간) — 짧으면 중복 처리 / DLQ=maxReceiveCount 초과 메시지 격리 / 긴 폴링(최대 20초)으로 빈 응답 비용 절감', tip:'"메시지가 중복 처리된다" → 가시성 시간 초과를 처리 시간보다 길게' },
  { s:'s5', g:'디커플링', front:'SNS · EventBridge · Step Functions', key:'', back:'SNS=Pub/Sub 푸시(1:N), SQS 팬아웃·필터 정책·FIFO 지원 / EventBridge=이벤트 버스·규칙 필터·스케줄·SaaS 파트너 소스·스키마 레지스트리 / Step Functions=상태 머신 오케스트레이션(표준·Express)', tip:'"한 이벤트를 여러 큐로" → SNS 팬아웃 / "복잡한 워크플로 분기·재시도" → Step Functions' },
  { s:'s5', g:'복원성', front:'DR 4전략과 RTO · RPO', key:'백·파·웜·액', back:'백업·복원(시간 단위·최저 비용) < 파일럿 라이트(핵심만 상시, 수십 분) < 웜 스탠바이(축소판 상시 가동, 분) < 다중 사이트 액티브-액티브(RTO≈0·최고 비용) / RTO=복구 시간, RPO=허용 데이터 손실', tip:'비용과 RTO는 항상 반비례 — 문제의 "예산 제약" 문구가 정답을 가른다' },
  { s:'s5', g:'프레임워크', front:'Well-Architected 6 필러 · 공유 책임 모델', key:'운·보·신·성·비·지', back:'운영 우수성 · 보안 · 신뢰성 · 성능 효율성 · 비용 최적화 · 지속 가능성 / 공유 책임: AWS=클라우드 ★의★ 보안(하드웨어·시설·관리형 서비스 인프라), 고객=클라우드 ★내부의★ 보안(데이터·IAM·OS 패치·SG)', tip:'EC2 게스트 OS 패치는 ★고객★ 책임, RDS 엔진 패치는 AWS 책임' },
  { s:'s5', g:'비용', front:'비용 최적화 도구와 네트워크 요금', key:'', back:'Cost Explorer·예산(Budgets)·비용 이상 탐지 / Trusted Advisor(비용·성능·보안·내결함성·한도) / Compute Optimizer=적정 크기 권장 / 인바운드 무료, 동일 AZ 프라이빗 IP 무료, AZ 간·인터넷 아웃바운드 유료', tip:'"NAT·인터넷 아웃바운드 비용 절감" → VPC 게이트웨이 엔드포인트·CloudFront 캐싱' }
];

/* ── 3. 핵심 정리 시트 ──────────────────────────────────── */
CPPG.sheets = [
  {
    s:'s1', title:'★ EC2 구매 옵션 비교', type:'table',
    head:['옵션','할인','약정','중단','대표 용도'],
    rows:[
      ['온디맨드','없음','없음','없음','단기·예측 불가·개발'],
      ['예약 인스턴스(RI)','최대 72%','1·3년 + 인스턴스 속성','없음','상시 가동 고정 워크로드'],
      ['Savings Plans','최대 72%','1·3년 + 시간당 $','없음','유연한 상시 워크로드(EC2·Fargate·Lambda)'],
      ['스팟','최대 90%','없음','★2분 전 통보★','배치·CI·스테이트리스·내결함 워크로드'],
      ['전용 인스턴스/호스트','—','호스트는 예약 가능','없음','규제 준수·BYOL 라이선스']
    ]
  },
  {
    s:'s2', title:'★ S3 스토리지 클래스 (통암기)', type:'table',
    head:['클래스','AZ','최소 보관','검색 시간','용도'],
    rows:[
      ['Standard','3+','없음','즉시','빈번한 접근·기본값'],
      ['Intelligent-Tiering','3+','없음','즉시','★접근 패턴 불명★ — 자동 계층 이동'],
      ['Standard-IA','3+','30일','즉시','드물지만 즉시 필요'],
      ['One Zone-IA','★1★','30일','즉시','재생성 가능한 사본(저렴)'],
      ['Glacier Instant Retrieval','3+','90일','즉시(ms)','분기 1회 접근 + 즉시 검색'],
      ['Glacier Flexible Retrieval','3+','90일','분~5시간','아카이브·백업'],
      ['Glacier Deep Archive','3+','180일','12~48시간','★최저가★ 장기 규제 보관']
    ]
  },
  {
    s:'s2', title:'★ EBS 볼륨 타입', type:'table',
    head:['타입','매체','성능','부팅','용도'],
    rows:[
      ['gp3','SSD','기본 3,000 IOPS·125MB/s (독립 조정)','가능','기본 선택 — gp2보다 저렴'],
      ['gp2','SSD','3 IOPS/GB (용량 연동)','가능','구세대 범용'],
      ['io1 / io2','SSD','최대 64,000 IOPS','가능','고IOPS DB'],
      ['io2 Block Express','SSD','최대 256,000 IOPS·다중 연결','가능','미션 크리티컬 DB'],
      ['st1','HDD','처리량 최적화','★불가★','빅데이터·로그 순차 처리'],
      ['sc1','HDD','콜드·최저가','★불가★','접근 빈도 낮은 대용량']
    ]
  },
  {
    s:'s3', title:'★ 보안 그룹 vs 네트워크 ACL', type:'table',
    head:['구분','보안 그룹(SG)','네트워크 ACL(NACL)'],
    rows:[
      ['적용 범위','인스턴스·ENI','★서브넷★'],
      ['상태','★Stateful★ (응답 자동 허용)','★Stateless★ (인·아웃 각각 규칙 필요)'],
      ['규칙 종류','허용(Allow)만','허용 + ★거부(Deny)★'],
      ['평가 방식','모든 규칙 종합 평가','규칙 번호 ★낮은 순★ 첫 일치 적용'],
      ['기본값','인바운드 전체 거부 / 아웃바운드 전체 허용','기본 NACL은 인·아웃 전체 허용'],
      ['대표 용도','일반적인 접근 제어','특정 IP 차단·서브넷 경계 방어']
    ]
  },
  {
    s:'s3', title:'★ ELB 4종 비교', type:'table',
    head:['구분','ALB','NLB','GWLB','CLB'],
    rows:[
      ['계층','L7 (HTTP/HTTPS)','L4 (TCP/UDP/TLS)','L3 (GENEVE)','L4·L7 혼합'],
      ['라우팅','경로·호스트·헤더·쿼리','포트 기반','어플라이언스 체이닝','기본'],
      ['정적 IP','불가(고정 DNS)','★가능(AZ별 EIP)★','—','불가'],
      ['성능','일반','★초저지연·초고처리량★','—','일반'],
      ['대상','인스턴스·IP·★Lambda★','인스턴스·IP·ALB','어플라이언스','인스턴스'],
      ['대표 용도','웹·마이크로서비스','게임·IoT·고성능 TCP','타사 방화벽·IDS 통합','레거시(신규 비권장)']
    ]
  },
  {
    s:'s3', title:'★ Route 53 라우팅 정책 7종', type:'table',
    head:['정책','기준','대표 시나리오'],
    rows:[
      ['단순(Simple)','단일 레코드','기본 매핑'],
      ['가중치(Weighted)','비율 분배','블루/그린·카나리 배포'],
      ['지연 시간(Latency)','최저 지연 리전','글로벌 성능 최적화'],
      ['장애 조치(Failover)','상태 검사 결과','★Active-Passive DR★'],
      ['지리 위치(Geolocation)','사용자 위치','국가별 콘텐츠·규제 준수'],
      ['지리 근접(Geoproximity)','위치 + 편향(bias)','리전 간 트래픽 비율 조절'],
      ['다중 값 응답(Multivalue)','최대 8개 + 상태 검사','간이 부하 분산(ELB 대체 아님)']
    ]
  },
  {
    s:'s4', title:'★ 데이터베이스 서비스 선택', type:'table',
    head:['요구','서비스','핵심'],
    rows:[
      ['관계형 OLTP','RDS','6개 엔진·Multi-AZ·읽기 전용 복제본'],
      ['고성능 관계형','Aurora','6복사본·15복제본·Global DB·Serverless v2'],
      ['키-값·서버리스','DynamoDB','ms 응답·무한 확장·GSI·DAX'],
      ['인메모리 캐시','ElastiCache','Redis(복제·영속) / Memcached(단순)'],
      ['데이터 웨어하우스','Redshift','컬럼형 MPP·Spectrum·OLAP'],
      ['문서(MongoDB 호환)','DocumentDB','JSON 문서 워크로드'],
      ['그래프','Neptune','소셜·추천·지식 그래프'],
      ['시계열 / 원장','Timestream / QLDB','IoT 시계열 / 변경 불가 원장']
    ]
  },
  {
    s:'s5', title:'★ DR 4전략 (RTO·RPO·비용)', type:'table',
    head:['전략','RTO','RPO','상시 자원','비용'],
    rows:[
      ['백업 & 복원','시간~일','시간','백업만','★최저★'],
      ['파일럿 라이트','수십 분','분','핵심 DB만 가동','낮음'],
      ['웜 스탠바이','분','초~분','축소판 전체 가동','중간'],
      ['다중 사이트 액티브-액티브','★≈0★','≈0','전체 이중 가동','★최고★']
    ]
  },
  {
    s:'s5', title:'★ 보안·거버넌스 서비스 역할 구분', type:'table',
    head:['서비스','한 줄 역할','헷갈리는 짝'],
    rows:[
      ['GuardDuty','로그 기반 위협 탐지','Inspector(취약점)와 혼동'],
      ['Inspector','EC2·ECR·Lambda 취약점 스캔','GuardDuty와 혼동'],
      ['Macie','S3 민감정보(PII) 탐지','Config(구성)와 혼동'],
      ['Security Hub','보안 표준 통합 대시보드','Detective(원인 분석)'],
      ['CloudTrail','API 호출 감사(누가·언제)','CloudWatch(성능 지표)'],
      ['Config','리소스 구성 변경·규정 준수','CloudTrail(호출 기록)'],
      ['SCP','계정 권한 상한(가드레일)','IAM 정책(권한 부여)'],
      ['권한 경계','자격 증명의 최대 권한','SCP(계정 단위)']
    ]
  },
  {
    s:'s5', title:'★ 시나리오 → 서비스 조합 15종', type:'list',
    items:[
      '정적 웹사이트 최저 비용 → S3 정적 호스팅 + CloudFront + ACM + OAC + Route 53',
      '트래픽 급변 + 세션 유지 → ALB + EC2 ASG + ElastiCache Redis(세션) + Aurora',
      '글로벌 저지연 → 캐시 가능하면 CloudFront / 비HTTP·정적 IP 필요하면 Global Accelerator',
      'DR 비용 대 복구시간 → 백업·복원 < 파일럿 라이트 < 웜 스탠바이 < 액티브-액티브',
      '온프레미스 백업 이관 → 상시 동기화는 DataSync / 대용량 일회성은 Snowball·Snowmobile / 캐시는 File Gateway',
      '느슨한 결합 → 1:1 SQS · 1:N SNS · 팬아웃 SNS+SQS · 이벤트 라우팅 EventBridge · 워크플로 Step Functions',
      '읽기 부하 폭증 → 읽기 전용 복제본 / DynamoDB는 DAX / RDS 앞단은 ElastiCache',
      '다중 계정 중앙 관리 → Organizations + OU + SCP + Control Tower + RAM',
      '엔터프라이즈 SSO → IAM Identity Center + AD·SAML 페더레이션',
      '온프레미스 연결 → 즉시·저비용 VPN / 안정·고대역 Direct Connect / DX + VPN 백업',
      'MSA 디커플링 → ALB 경로 기반 + ECS Fargate + SQS(DLQ 포함)',
      '서버리스 웹 → CloudFront + S3 + API Gateway + Lambda + DynamoDB',
      '빅데이터 파이프라인 → Kinesis Firehose → S3 → Glue → Athena → QuickSight',
      '멀티계정 거버넌스 → Organizations + SCP + Control Tower + Security Hub',
      '글로벌 DR → Route 53 장애 조치 + Aurora Global Database + S3 리전 간 복제(CRR)'
    ]
  }
];

/* ── 4. 함정 노트 ───────────────────────────────────────── */
CPPG.traps = [
  { s:'s1', t:'스팟 인스턴스 중단 통보는 2분 전 — "사전 통보 없음"은 오답' },
  { s:'s1', t:'Savings Plans는 금액 약정, RI는 인스턴스 속성 약정 — 유연성은 SP가 높다' },
  { s:'s1', t:'용량 예약이 필요하면 지역 RI가 아니라 ★영역(zonal) RI★ 또는 On-Demand Capacity Reservation' },
  { s:'s1', t:'Lambda 최대 실행 시간은 15분 — 초과 요구가 보이면 Fargate·Batch·Step Functions' },
  { s:'s1', t:'Fargate는 오케스트레이터가 아니라 시작 유형 — ECS·EKS 양쪽에서 쓴다' },
  { s:'s1', t:'클러스터 배치 그룹 = 저지연(단일 AZ) / 분산 배치 그룹 = 고가용(랙 분리)' },
  { s:'s1', t:'ASG에서 ELB 상태 검사를 켜지 않으면 앱 장애 인스턴스가 교체되지 않는다' },
  { s:'s1', t:'인스턴스 스토어는 중지·최대 절전 시 데이터가 사라진다 — 영구 저장은 EBS' },
  { s:'s2', t:'접근 패턴을 모르면 Intelligent-Tiering — "일단 Standard-IA"는 함정' },
  { s:'s2', t:'One Zone-IA는 AZ 1개 — "가용성이 더 높다"는 서술은 오답' },
  { s:'s2', t:'Glacier Deep Archive 최소 보관 180일·검색 12시간 — "즉시 검색"은 Glacier Instant Retrieval' },
  { s:'s2', t:'S3는 현재 ★강력한 읽기·쓰기 일관성★ — "최종 일관성 지연" 보기는 오답' },
  { s:'s2', t:'S3 복제(CRR·SRR)는 원본·대상 모두 버전 관리가 켜져 있어야 한다' },
  { s:'s2', t:'CloudFront용 ACM 인증서는 반드시 ★us-east-1★에서 발급' },
  { s:'s2', t:'EBS 볼륨은 단일 AZ 종속 — 다른 AZ로 이동은 스냅샷 경유' },
  { s:'s2', t:'st1·sc1(HDD)은 부팅 볼륨으로 사용할 수 없다' },
  { s:'s2', t:'기존 미암호화 RDS·EBS를 직접 암호화할 수 없다 — 스냅샷 암호화 복사 후 복원' },
  { s:'s2', t:'대용량 일회성 이관은 Snowball, 지속 동기화는 DataSync — 목적이 다르다' },
  { s:'s3', t:'서브넷마다 IP 5개가 예약된다 — /24는 251개 사용 가능' },
  { s:'s3', t:'VPC CIDR는 생성 후 축소 불가(보조 CIDR 추가만 가능)' },
  { s:'s3', t:'SG는 Stateful·허용만 / NACL은 Stateless·거부 가능 — 특정 IP 차단은 NACL' },
  { s:'s3', t:'NACL은 규칙 번호가 낮은 것부터 평가되어 ★첫 일치★에서 결정된다' },
  { s:'s3', t:'NAT 게이트웨이는 AZ 종속 — 고가용성은 AZ마다 1개씩 배치' },
  { s:'s3', t:'S3·DynamoDB용 Gateway 엔드포인트는 무료, Interface 엔드포인트는 유료' },
  { s:'s3', t:'VPC 피어링은 전이적 라우팅 불가·CIDR 중복 불가 — 다수 연결은 TGW' },
  { s:'s3', t:'Direct Connect는 기본적으로 암호화되지 않는다 — 필요 시 DX 위에 VPN' },
  { s:'s3', t:'정적 IP가 필요한 로드 밸런서는 NLB (ALB는 DNS 이름만 제공)' },
  { s:'s3', t:'Lambda를 대상으로 삼을 수 있는 로드 밸런서는 ALB뿐' },
  { s:'s3', t:'Zone Apex(루트 도메인)는 CNAME 불가 — Route 53 별칭 레코드 사용' },
  { s:'s3', t:'CloudFront=캐시 가능한 HTTP / Global Accelerator=비캐시 TCP·UDP·정적 IP' },
  { s:'s3', t:'교차 영역 부하 분산은 ALB 기본 켜짐·무료, NLB는 기본 꺼짐·AZ 간 요금 발생' },
  { s:'s4', t:'Multi-AZ 대기 인스턴스는 읽기에 사용할 수 없다 — 읽기 분산은 읽기 전용 복제본' },
  { s:'s4', t:'읽기 전용 복제본은 백업이 아니다 — 삭제·손상도 함께 복제된다' },
  { s:'s4', t:'Aurora 복사본은 3 AZ × 2 = 6개, 쓰기 정족수 4/6 · 읽기 3/6' },
  { s:'s4', t:'LSI는 테이블 생성 시에만 정의 가능 — 나중에 추가하려면 GSI' },
  { s:'s4', t:'GSI는 최종 일관성만 지원 — 강력한 일관성이 필요하면 LSI 또는 기본 테이블' },
  { s:'s4', t:'DynamoDB 캐시는 DAX, RDS 캐시는 ElastiCache — 짝 바꾸기 함정' },
  { s:'s4', t:'Memcached는 복제·영속·장애 조치가 없다 — 세션 저장은 Redis' },
  { s:'s4', t:'이기종 DB 전환은 SCT(스키마) + DMS(데이터) 조합 — 동종이면 SCT 불필요' },
  { s:'s4', t:'Athena는 스캔량 과금 — Parquet 변환·압축·파티셔닝이 비용 절감의 핵심' },
  { s:'s4', t:'Firehose는 준실시간 버퍼링 전송, Data Streams는 샤드 기반 실시간·재처리' },
  { s:'s5', t:'명시적 Deny는 어떤 Allow보다 우선한다 — 평가 로직 1순위' },
  { s:'s5', t:'SCP는 권한을 부여하지 않는다 — 상한만 정한다(관리 계정에는 미적용)' },
  { s:'s5', t:'EC2 접근에 액세스 키를 심는 보기는 항상 오답 — IAM 역할(인스턴스 프로파일)' },
  { s:'s5', t:'KMS=멀티테넌트 FIPS L2 / CloudHSM=단일 테넌트 FIPS L3' },
  { s:'s5', t:'자격 증명 자동 교체는 Secrets Manager — Parameter Store에는 없다' },
  { s:'s5', t:'CloudTrail=API 감사 / CloudWatch=지표·로그 / Config=구성 변경·규정 준수' },
  { s:'s5', t:'SQS FIFO는 순서·정확히 1회를 보장하지만 처리량이 제한된다' },
  { s:'s5', t:'메시지 중복 처리의 주범은 짧은 가시성 시간 초과 — 처리 시간보다 길게 설정' },
  { s:'s5', t:'SQS는 폴링(소비자가 가져감), SNS는 푸시(구독자에게 전달)' },
  { s:'s5', t:'DR 비용과 RTO는 반비례 — 문제의 "예산 제약" 문구가 정답을 가른다' },
  { s:'s5', t:'EC2 게스트 OS 패치는 고객 책임, RDS 엔진 패치는 AWS 책임(공유 책임 모델)' },
  { s:'s5', t:'동일 AZ 프라이빗 IP 통신은 무료, AZ 간·인터넷 아웃바운드는 유료' }
];

/* ── 5. 자가진단 ────────────────────────────────────────── */
CPPG.selfcheck = [
  { g:'1영역 컴퓨트', t:'EC2 구매 옵션 5종과 선택 기준을 즉답할 수 있다' },
  { g:'1영역 컴퓨트', t:'ASG 조정 정책 4종과 수명 주기 훅의 용도를 구분한다' },
  { g:'1영역 컴퓨트', t:'Lambda 제한(15분·10GB·동시성)과 Fargate 전환 기준을 안다' },
  { g:'2영역 스토리지', t:'S3 7개 클래스의 최소 보관 기간과 검색 시간을 표로 그릴 수 있다' },
  { g:'2영역 스토리지', t:'S3 암호화 3방식과 Object Lock 2모드를 구분한다' },
  { g:'2영역 스토리지', t:'EBS 4종 타입과 부팅 가능 여부, 스냅샷 암호화 절차를 안다' },
  { g:'3영역 네트워킹', t:'SG와 NACL의 5가지 차이를 즉시 나열할 수 있다' },
  { g:'3영역 네트워킹', t:'Gateway·Interface 엔드포인트와 Peering·TGW·PrivateLink를 구분한다' },
  { g:'3영역 네트워킹', t:'ELB 4종과 정적 IP·Lambda 대상 조건을 안다' },
  { g:'3영역 네트워킹', t:'Route 53 라우팅 7종을 시나리오와 매핑할 수 있다' },
  { g:'4영역 데이터', t:'Multi-AZ와 읽기 전용 복제본의 차이를 설명할 수 있다' },
  { g:'4영역 데이터', t:'Aurora 6복사본 정족수와 Global Database 복제 지연을 안다' },
  { g:'4영역 데이터', t:'GSI와 LSI의 제약, DAX·ElastiCache 사용처를 구분한다' },
  { g:'5영역 보안·비용', t:'IAM 정책 평가 로직 순서를 명시적 Deny부터 말할 수 있다' },
  { g:'5영역 보안·비용', t:'GuardDuty·Inspector·Macie·Config의 역할을 헷갈리지 않는다' },
  { g:'5영역 보안·비용', t:'DR 4전략을 RTO·RPO·비용 순으로 배열할 수 있다' },
  { g:'5영역 보안·비용', t:'SQS 가시성 시간 초과·DLQ·팬아웃 구조를 설명할 수 있다' },
  { g:'실전', t:'시나리오 15종을 서비스 조합으로 즉시 매핑하고 모의고사 75% 이상이다' }
];

/* ── 6. 로드맵·우선순위 ─────────────────────────────────── */
CPPG.roadmap = {
  '8주 표준': [
    'Week 1 — 시험 개요 · Well-Architected 6필러 · 공유 책임 · 글로벌 인프라',
    'Week 2 — 컴퓨트(EC2 구매 옵션·ASG·컨테이너·Lambda)',
    'Week 3 — 스토리지(S3 클래스·수명 주기·암호화 / EBS·EFS·FSx)',
    'Week 4 — ★VPC 최중점★ (서브넷·SG/NACL·NAT·엔드포인트·TGW·DX/VPN)',
    'Week 5 — 데이터베이스(RDS·Aurora·DynamoDB·ElastiCache·Redshift)',
    'Week 6 — 엣지·분석(Route 53·CloudFront·GA / Kinesis·Glue·Athena)',
    'Week 7 — 보안·거버넌스·복원성·비용(IAM·SCP·KMS·DR·SQS/SNS)',
    'Week 8 — 시나리오 15종 반복 + 모의고사 3회 + 오답 정리'
  ],
  '4주 단기': [
    'Week 1 — 개요 + IAM + 컴퓨트 (Domain 1 우선)',
    'Week 2 — 스토리지 + VPC (출제 비중 최상위 2종)',
    'Week 3 — 데이터베이스 + 엣지 + 복원성·비용',
    'Week 4 — 시나리오 15종 + 모의고사 + 약점 보강'
  ]
};

CPPG.tiers = {
  'Tier 1 ★★★ (매회 출제)': ['VPC 전반(SG·NACL·엔드포인트)','IAM 정책 평가·SCP','S3 클래스·수명 주기·암호화','Multi-AZ vs 읽기 전용 복제본','DynamoDB 키 설계·GSI','ELB 선택·Route 53 라우팅','SQS/SNS 디커플링','Auto Scaling 정책','CloudFront OAC'],
  'Tier 2 ★★ (조건 비교)': ['Aurora 6복사본·Global DB','DMS + SCT','KMS vs CloudHSM','Secrets vs Parameter Store','DX vs VPN','TGW vs Peering vs PrivateLink','Snow Family·Storage Gateway','DR 4전략(RTO·RPO)','EBS 타입 선택'],
  'Tier 3 ★ (서비스 식별)': ['Kinesis 4종','Glue·Athena·EMR·Lake Formation','GuardDuty·Inspector·Macie·Detective','CloudFormation·SAM·CDK','GWLB·Network Firewall','Local Zone·Outposts·Wavelength']
};

/* ── 7. 난이도 정의 ─────────────────────────────────────── */
CPPG.levels = [
  { d:1, name:'기초', desc:'서비스 정의·단일 사실 — 반드시 맞혀야 하는 문항', color:'#34d399' },
  { d:2, name:'표준', desc:'옵션 비교·조건 구분 — 합격선을 가르는 문항',       color:'#5b9dff' },
  { d:3, name:'심화', desc:'시나리오 최적 설계 판단 — 변별력 문항',            color:'#fb7185' }
];

/* ═══════════════════════════════════════════════════════════
   8. 문제은행 — 5개 학습 영역
   d: 1=기초 · 2=표준 · 3=심화
   ═══════════════════════════════════════════════════════════ */

CPPG.mcq = [
  // ───────── 1영역 컴퓨트 · 서버리스 ─────────
  { s:'s1', t:'EC2 구매 옵션', d:2, q:'중단되어도 재시작하면 되는 대규모 배치 분석 작업의 비용을 최소화하려 한다. 가장 적합한 EC2 구매 옵션은?', c:['온디맨드 인스턴스','스팟 인스턴스','예약 인스턴스(3년 선결제)','전용 호스트'], a:1, e:'내결함성 있는 중단 허용 워크로드는 스팟이 최대 90% 저렴하다.' },
  { s:'s1', t:'Lambda · 서버리스', d:2, q:'EC2와 Fargate, Lambda 사용량 전반에 할인을 적용하면서 인스턴스 패밀리 변경도 허용하고 싶다. 무엇을 선택해야 하는가?', c:['Compute Savings Plans','EC2 Instance Savings Plans','표준 예약 인스턴스','전환형 예약 인스턴스'], a:0, e:'Compute Savings Plans는 리전·패밀리·서비스(EC2·Fargate·Lambda)에 무관하게 적용된다.' },
  { s:'s1', t:'EC2 구매 옵션', d:1, q:'스팟 인스턴스가 회수될 때 애플리케이션이 받는 중단 통보 시간은?', c:['30초','2분','5분','통보 없음'], a:1, e:'2분 전 중단 통보가 인스턴스 메타데이터와 EventBridge로 전달된다.' },
  { s:'s1', t:'Auto Scaling', d:2, q:'CPU 사용률을 평균 60%로 유지하도록 자동 확장하려 한다. 가장 적합한 ASG 조정 정책은?', c:['단순 조정','단계 조정','대상 추적 조정','예약 조정'], a:2, e:'목표 지표 값을 지정하는 대상 추적(Target Tracking)이 가장 단순하고 권장된다.' },
  { s:'s1', t:'Auto Scaling', d:3, q:'매주 월요일 오전 9시에 트래픽이 예측 가능하게 급증한다. 가장 적절한 조정 방식은?', c:['예약 조정(Scheduled Scaling)','단순 조정','수동 확장','스팟 플릿 확대'], a:0, e:'시간이 예측 가능하면 예약 조정으로 사전에 용량을 확보한다.' },
  { s:'s1', t:'Auto Scaling', d:2, q:'ASG가 애플리케이션 장애 인스턴스를 교체하지 않는다. 가장 가능성이 높은 원인은?', c:['ELB 상태 검사가 활성화되지 않음','인스턴스 유형이 잘못됨','서브넷이 프라이빗임','최소 용량이 0임'], a:0, e:'기본 EC2 상태 검사만으로는 OS는 정상인데 앱만 죽은 상태를 감지하지 못한다.' },
  { s:'s1', t:'EC2 운영', d:2, q:'HPC 워크로드에서 노드 간 네트워크 지연을 최소화해야 한다. 적절한 배치 그룹은?', c:['분산(Spread) 배치 그룹','파티션 배치 그룹','클러스터 배치 그룹','배치 그룹 사용 안 함'], a:2, e:'클러스터 배치 그룹은 단일 AZ 내 밀집 배치로 최저 지연·최대 대역폭을 제공한다.' },
  { s:'s1', t:'Lambda · 서버리스', d:1, q:'Lambda 함수의 최대 실행 시간은?', c:['5분','15분','30분','제한 없음'], a:1, e:'최대 15분. 더 긴 작업은 Fargate·AWS Batch·Step Functions로 분할한다.' },
  { s:'s1', t:'Lambda · 서버리스', d:2, q:'Lambda 함수의 냉시작(cold start) 지연을 줄이기 위한 기능은?', c:['예약된 동시성','프로비저닝된 동시성','Lambda 계층(Layer)','SnapStart 비활성화'], a:1, e:'프로비저닝된 동시성은 실행 환경을 미리 초기화해 둔다. 예약된 동시성은 한도 배분 기능이다.' },
  { s:'s1', t:'컨테이너', d:2, q:'컨테이너를 실행하되 기반 EC2 인스턴스를 관리하고 싶지 않다. 적절한 선택은?', c:['ECS EC2 시작 유형','ECS 또는 EKS의 Fargate 시작 유형','EC2 Auto Scaling Group','Elastic Beanstalk 단일 인스턴스'], a:1, e:'Fargate는 데이터 플레인을 AWS가 관리하는 서버리스 시작 유형이다.' },
  { s:'s1', t:'EC2 운영', d:1, q:'EC2 인스턴스 스토어에 대한 설명으로 옳은 것은?', c:['인스턴스를 중지해도 데이터가 유지된다','스냅샷을 생성할 수 있다','인스턴스 중지·종료 시 데이터가 소실되는 임시 스토리지다','다른 AZ로 연결할 수 있다'], a:2, e:'인스턴스 스토어는 휘발성 로컬 디스크로 캐시·버퍼 용도다.' },
  { s:'s1', t:'EC2 운영', d:2, q:'인메모리 데이터베이스를 위해 대용량 RAM이 필요한 워크로드에 적합한 인스턴스 패밀리는?', c:['C 패밀리','R 패밀리','I 패밀리','G 패밀리'], a:1, e:'R·X가 메모리 최적화. C는 컴퓨팅, I는 스토리지, G는 GPU 가속이다.' },
  { s:'s1', t:'Auto Scaling', d:3, q:'스테이트리스 웹 계층의 비용을 낮추면서 가용성도 확보하려 한다. 가장 적절한 구성은?', c:['모두 스팟 인스턴스로 구성','온디맨드 기본 용량 + 스팟 혼합 인스턴스 정책','전부 온디맨드로 구성','전용 호스트 예약'], a:1, e:'ASG 혼합 인스턴스 정책으로 기본 용량은 온디맨드, 초과분은 스팟으로 채우는 것이 표준 패턴이다.' },

  // ───────── 2영역 스토리지 ─────────
  { s:'s2', t:'S3 기본', d:2, q:'객체의 접근 패턴을 예측할 수 없고 관리 부담 없이 비용을 최적화하고 싶다. 적절한 S3 클래스는?', c:['S3 Standard','S3 Standard-IA','S3 Intelligent-Tiering','S3 Glacier Deep Archive'], a:2, e:'Intelligent-Tiering이 접근 패턴에 따라 계층을 자동 이동한다.' },
  { s:'s2', t:'S3 스토리지 클래스', d:1, q:'S3 Glacier Deep Archive의 최소 보관 기간은?', c:['30일','90일','180일','365일'], a:2, e:'IA 30일 / Glacier Flexible 90일 / Deep Archive 180일.' },
  { s:'s2', t:'S3 스토리지 클래스', d:2, q:'다시 생성할 수 있는 파생 데이터를 최저 비용으로 보관하되 즉시 접근은 유지해야 한다. 적절한 클래스는?', c:['S3 One Zone-IA','S3 Standard','S3 Glacier Flexible Retrieval','S3 Standard-IA'], a:0, e:'One Zone-IA는 단일 AZ 저장으로 저렴하며 즉시 접근이 가능하다. 재생성 가능한 데이터에 적합하다.' },
  { s:'s2', t:'S3 보안 · 성능', d:2, q:'S3 객체 암호화 중 키 사용 내역을 CloudTrail로 감사하고 키 접근 권한을 제어해야 한다. 적절한 방식은?', c:['SSE-S3','SSE-KMS','SSE-C','클라이언트 측 암호화만 가능'], a:1, e:'SSE-KMS만 키 정책 기반 접근 제어와 CloudTrail 감사를 제공한다.' },
  { s:'s2', t:'S3 기본', d:3, q:'규제 요건상 보관 기간 동안 누구도(관리자 포함) 객체를 삭제·변경할 수 없어야 한다. 적절한 설정은?', c:['버전 관리만 활성화','S3 Object Lock 거버넌스 모드','S3 Object Lock 규정 준수(Compliance) 모드','MFA Delete 활성화'], a:2, e:'거버넌스 모드는 특별 권한으로 해제 가능하지만, 규정 준수 모드는 루트 사용자도 해제할 수 없다.' },
  { s:'s2', t:'S3 보안 · 성능', d:2, q:'CloudFront를 통해서만 S3 버킷 콘텐츠에 접근하도록 제한하려 한다. 적절한 기능은?', c:['버킷 퍼블릭 액세스 허용','Origin Access Control(OAC)','S3 정적 웹사이트 호스팅 엔드포인트 사용','CORS 설정'], a:1, e:'OAC(구 OAI)로 CloudFront 서명 요청만 허용하고 버킷 직접 접근을 차단한다.' },
  { s:'s2', t:'S3 기본', d:2, q:'유럽 지사에서 서울 리전 S3로 수십 GB 파일을 업로드하는 속도를 높이려 한다. 적절한 기능은?', c:['S3 Transfer Acceleration','S3 리전 간 복제','S3 Select','바이트 범위 가져오기'], a:0, e:'Transfer Acceleration은 가까운 엣지 로케이션을 거쳐 AWS 백본으로 전송한다.' },
  { s:'s2', t:'S3 보안 · 성능', d:1, q:'CloudFront 배포에 사용할 ACM 인증서는 어느 리전에서 발급해야 하는가?', c:['배포 대상 리전','us-east-1(버지니아 북부)','ap-northeast-2(서울)','리전 무관'], a:1, e:'CloudFront에 연결하는 인증서는 반드시 us-east-1에서 요청해야 한다.' },
  { s:'s2', t:'EBS', d:2, q:'gp2 대비 비용을 낮추면서 IOPS와 처리량을 용량과 무관하게 지정하려 한다. 적절한 EBS 타입은?', c:['gp3','io2','st1','sc1'], a:0, e:'gp3는 용량과 성능이 분리되어 기본 3,000 IOPS·125MB/s를 제공하며 gp2보다 저렴하다.' },
  { s:'s2', t:'EBS', d:2, q:'EBS 볼륨을 다른 가용 영역의 인스턴스에 연결해야 한다. 올바른 방법은?', c:['볼륨을 분리 후 다른 AZ 인스턴스에 바로 연결','스냅샷을 만들고 대상 AZ에서 볼륨을 생성','다중 연결(Multi-Attach)을 활성화','탄력적 IP를 재할당'], a:1, e:'EBS 볼륨은 단일 AZ에 종속되므로 스냅샷을 경유해야 한다.' },
  { s:'s2', t:'파일 · 하이브리드 스토리지', d:2, q:'여러 Linux EC2 인스턴스가 동시에 마운트해 읽고 쓸 수 있는 관리형 파일 시스템은?', c:['EBS gp3','Amazon EFS','S3 Standard','인스턴스 스토어'], a:1, e:'EFS는 NFS 기반으로 다중 AZ·다중 인스턴스 동시 접근을 지원한다.' },
  { s:'s2', t:'파일 · 하이브리드 스토리지', d:2, q:'Windows 서버들이 SMB 프로토콜과 Active Directory 통합이 필요한 공유 스토리지를 요구한다. 적절한 서비스는?', c:['Amazon EFS','FSx for Windows File Server','FSx for Lustre','S3 File Gateway'], a:1, e:'EFS는 NFS 전용이므로 SMB·AD 통합에는 FSx for Windows가 적합하다.' },
  { s:'s2', t:'파일 · 하이브리드 스토리지', d:3, q:'네트워크 대역폭이 부족한 데이터센터에서 80TB 데이터를 한 번에 AWS로 옮겨야 한다. 가장 적절한 방법은?', c:['AWS DataSync','AWS Snowball Edge','Site-to-Site VPN 경유 복사','S3 Transfer Acceleration'], a:1, e:'대용량 일회성 오프라인 이관은 Snow Family. DataSync는 네트워크 기반 지속 동기화용이다.' },
  { s:'s2', t:'파일 · 하이브리드 스토리지', d:2, q:'온프레미스 애플리케이션이 NFS로 접근하되 데이터는 S3에 영구 저장되도록 하려 한다. 적절한 서비스는?', c:['Volume Gateway','File Gateway','Tape Gateway','Snowcone'], a:1, e:'File Gateway는 NFS·SMB 인터페이스를 제공하고 데이터를 S3 객체로 저장한다.' },

  // ───────── 3영역 네트워킹 · 엣지 ─────────
  { s:'s3', t:'VPC 기본', d:2, q:'VPC에서 /24 서브넷을 만들었을 때 실제로 사용할 수 있는 IP 주소 개수는?', c:['256개','254개','251개','250개'], a:2, e:'AWS는 각 서브넷에서 5개 IP를 예약하므로 256 − 5 = 251개다.' },
  { s:'s3', t:'SG vs NACL', d:2, q:'특정 악성 IP 주소 하나를 차단해야 한다. 사용할 수 있는 것은?', c:['보안 그룹의 거부 규칙','네트워크 ACL의 Deny 규칙','IAM 정책','라우팅 테이블'], a:1, e:'보안 그룹에는 거부 규칙이 없다. 명시적 차단은 NACL에서만 가능하다.' },
  { s:'s3', t:'SG vs NACL', d:1, q:'보안 그룹에 대한 설명으로 옳은 것은?', c:['서브넷 단위로 적용되며 Stateless다','인스턴스·ENI 단위로 적용되며 Stateful이다','거부 규칙을 정의할 수 있다','규칙 번호 순으로 첫 일치가 적용된다'], a:1, e:'나머지는 모두 네트워크 ACL의 특성이다.' },
  { s:'s3', t:'VPC 기본', d:2, q:'프라이빗 서브넷의 인스턴스가 NAT 게이트웨이 비용 없이 S3에 접근하도록 하려 한다. 적절한 방법은?', c:['Interface 엔드포인트(PrivateLink)','Gateway 엔드포인트','Egress-Only 인터넷 게이트웨이','VPC 피어링'], a:1, e:'S3·DynamoDB는 Gateway 엔드포인트를 지원하며 추가 요금이 없다.' },
  { s:'s3', t:'하이브리드 연결', d:3, q:'VPC 40개를 상호 연결하고 온프레미스 VPN까지 통합 라우팅해야 한다. 가장 적절한 구성은?', c:['VPC 피어링 전면 메시','Transit Gateway 허브 앤 스포크','각 VPC마다 NAT 게이트웨이','PrivateLink 엔드포인트 서비스'], a:1, e:'피어링은 비전이적이라 780개 연결이 필요하다. TGW가 허브 역할을 한다.' },
  { s:'s3', t:'VPC 기본', d:2, q:'NAT 게이트웨이의 고가용성을 확보하는 올바른 방법은?', c:['리전당 1개만 배치','각 가용 영역마다 하나씩 배치','퍼블릭 서브넷 대신 프라이빗 서브넷에 배치','NAT 인스턴스로 교체'], a:1, e:'NAT 게이트웨이는 AZ 종속 자원이므로 AZ별 배치와 AZ별 라우팅이 필요하다.' },
  { s:'s3', t:'하이브리드 연결', d:2, q:'온프레미스와 AWS 사이에 일관된 대역폭과 낮은 지연이 필요하며 수개월의 구축 기간을 감수할 수 있다. 적절한 연결은?', c:['Site-to-Site VPN','Direct Connect','Transit Gateway 피어링','Client VPN'], a:1, e:'전용선인 DX가 일관된 성능을 제공한다. VPN은 즉시 구축 가능하나 인터넷 품질에 좌우된다.' },
  { s:'s3', t:'하이브리드 연결', d:3, q:'Direct Connect 회선의 데이터를 암호화해야 하는 규제 요건이 있다. 적절한 구성은?', c:['DX는 기본적으로 암호화되므로 조치 불필요','DX 위에 Site-to-Site VPN(IPsec)을 구성','NACL로 암호화 강제','Interface 엔드포인트 사용'], a:1, e:'DX 자체는 암호화되지 않으므로 DX 위에 IPsec VPN을 얹는다.' },
  { s:'s3', t:'ELB', d:2, q:'수백만 요청을 처리하며 클라이언트가 화이트리스트에 등록할 정적 IP가 필요한 TCP 서비스가 있다. 적절한 로드 밸런서는?', c:['Application Load Balancer','Network Load Balancer','Gateway Load Balancer','Classic Load Balancer'], a:1, e:'NLB만 AZ별 정적 IP·EIP를 지원하며 초고성능 L4 처리를 한다.' },
  { s:'s3', t:'Route 53 · CDN', d:2, q:'URL 경로(/api, /images)에 따라 서로 다른 마이크로서비스로 요청을 보내야 한다. 적절한 것은?', c:['NLB의 포트 기반 라우팅','ALB의 경로 기반 라우팅','Route 53 가중치 라우팅','CloudFront 오리진 그룹'], a:1, e:'L7 콘텐츠 기반 라우팅은 ALB의 기능이다.' },
  { s:'s3', t:'Route 53 · CDN', d:2, q:'루트 도메인 example.com을 ALB로 연결하려 한다. 올바른 방법은?', c:['CNAME 레코드 생성','Route 53 별칭(Alias) 레코드 생성','A 레코드에 ALB IP 직접 입력','NS 레코드 수정'], a:1, e:'Zone Apex에는 CNAME을 쓸 수 없고 ALB는 고정 IP가 없으므로 별칭 레코드를 쓴다.' },
  { s:'s3', t:'Route 53 · CDN', d:2, q:'기본 리전 장애 시 대기 리전으로 DNS를 자동 전환하려 한다. 적절한 Route 53 라우팅 정책은?', c:['가중치 기반','지연 시간 기반','장애 조치(Failover)','다중 값 응답'], a:2, e:'상태 검사와 결합한 장애 조치 정책이 Active-Passive DR의 표준이다.' },
  { s:'s3', t:'Route 53 · CDN', d:3, q:'유럽 개인정보 규제 때문에 EU 사용자 요청은 반드시 프랑크푸르트 리전으로 보내야 한다. 적절한 정책은?', c:['지연 시간 기반 라우팅','지리 위치(Geolocation) 라우팅','지리 근접 라우팅','가중치 기반 라우팅'], a:1, e:'규제·콘텐츠 현지화처럼 사용자 위치가 기준이면 지리 위치 라우팅이다.' },
  { s:'s3', t:'Route 53 · CDN', d:3, q:'캐시가 불가능한 실시간 UDP 게임 트래픽의 글로벌 지연을 줄이고 고정 IP도 필요하다. 적절한 서비스는?', c:['CloudFront','Global Accelerator','Route 53 지연 시간 라우팅','Transit Gateway'], a:1, e:'Global Accelerator는 Anycast 정적 IP 2개로 TCP·UDP 트래픽을 AWS 백본으로 보낸다.' },
  { s:'s3', t:'ELB', d:2, q:'ALB 뒤 EC2들이 사용자 세션을 잃어버린다. 가장 권장되는 해결책은?', c:['ALB 고정 세션만 활성화','세션을 ElastiCache for Redis 등 외부 저장소로 분리','인스턴스를 1대로 축소','NLB로 교체'], a:1, e:'스테이트리스 웹 계층 + 외부 세션 저장이 확장성을 해치지 않는 정석이다.' },

  // ───────── 4영역 데이터베이스 · 분석 ─────────
  { s:'s4', t:'RDS', d:2, q:'RDS의 읽기 부하가 커져 조회 성능을 높이려 한다. 적절한 방법은?', c:['Multi-AZ 활성화','읽기 전용 복제본 추가','인스턴스 중지 후 시작','자동 백업 보존 기간 연장'], a:1, e:'Multi-AZ는 고가용성 기능이며 대기 인스턴스는 읽기에 사용할 수 없다.' },
  { s:'s4', t:'RDS', d:1, q:'RDS Multi-AZ 배포에 대한 설명으로 옳은 것은?', c:['대기 인스턴스로 읽기 쿼리를 분산할 수 있다','동기 복제를 사용하며 장애 시 자동 장애 조치된다','리전 간 복제를 위한 기능이다','비동기 복제를 사용한다'], a:1, e:'Multi-AZ는 동기 복제 + 자동 장애 조치를 제공하는 고가용성 기능이다.' },
  { s:'s4', t:'Aurora', d:3, q:'Aurora 클러스터의 스토리지 복제 구조로 옳은 것은?', c:['2 AZ에 각 2개씩 총 4개','3 AZ에 각 2개씩 총 6개','단일 AZ에 3개','리전당 1개'], a:1, e:'3 AZ × 2 = 6개 복사본이며 쓰기 정족수 4/6, 읽기 정족수 3/6이다.' },
  { s:'s4', t:'Aurora', d:3, q:'다른 리전에서 1초 미만 복제 지연으로 읽기를 제공하고 재해 시 1분 내 승격이 필요하다. 적절한 것은?', c:['RDS 리전 간 읽기 전용 복제본','Aurora Global Database','DynamoDB Global Tables','S3 리전 간 복제'], a:1, e:'Aurora Global Database가 1초 미만 복제와 빠른 승격을 제공한다.' },
  { s:'s4', t:'Aurora', d:2, q:'예측이 어려운 트래픽에 맞춰 초 단위로 용량이 조정되는 Aurora 옵션은?', c:['Aurora Serverless v2','Aurora 읽기 전용 복제본','Aurora Global Database','Aurora Multi-Master'], a:0, e:'Serverless v2는 ACU 단위로 즉각 확장·축소한다.' },
  { s:'s4', t:'DynamoDB', d:2, q:'운영 중인 DynamoDB 테이블에 새로운 조회 조건(다른 파티션 키)이 필요해졌다. 적절한 것은?', c:['LSI 추가','GSI 추가','테이블 재생성','정렬 키 변경'], a:1, e:'LSI는 테이블 생성 시에만 정의 가능하다. 이후 추가는 GSI만 가능하다.' },
  { s:'s4', t:'DynamoDB', d:2, q:'DynamoDB 읽기 응답을 마이크로초 수준으로 낮추려 한다. 적절한 서비스는?', c:['ElastiCache for Memcached','DynamoDB Accelerator(DAX)','CloudFront','RDS Proxy'], a:1, e:'DAX는 DynamoDB 전용 인메모리 캐시로 애플리케이션 코드 변경이 거의 없다.' },
  { s:'s4', t:'DynamoDB', d:3, q:'특정 파티션에만 요청이 몰려 스로틀링이 발생한다. 근본 원인은?', c:['정렬 키가 없기 때문','파티션 키의 카디널리티가 낮아 분산이 균등하지 않기 때문','온디맨드 모드이기 때문','GSI가 없기 때문'], a:1, e:'DynamoDB 성능의 핵심은 균등 분산되는 파티션 키 설계다.' },
  { s:'s4', t:'캐시 · 웨어하우스 · 이관', d:2, q:'세션 데이터를 저장하며 복제와 자동 장애 조치가 필요한 캐시를 선택해야 한다. 적절한 것은?', c:['ElastiCache for Memcached','ElastiCache for Redis','DAX','DocumentDB'], a:1, e:'Memcached는 복제·영속·장애 조치를 지원하지 않는다.' },
  { s:'s4', t:'DynamoDB', d:2, q:'페타바이트 규모 데이터에 대해 복잡한 집계 SQL 분석을 수행해야 한다. 적절한 서비스는?', c:['RDS for PostgreSQL','Amazon Redshift','DynamoDB','ElastiCache'], a:1, e:'Redshift는 컬럼형 MPP 데이터 웨어하우스로 OLAP에 최적화되어 있다.' },
  { s:'s4', t:'Aurora', d:2, q:'Oracle 데이터베이스를 Aurora PostgreSQL로 최소 다운타임으로 이전하려 한다. 필요한 조합은?', c:['DMS만 사용','SCT로 스키마 변환 후 DMS로 데이터 이관','스냅샷 복원','Database Migration Hub'], a:1, e:'이기종 전환은 SCT로 스키마·프로시저를 변환한 뒤 DMS의 전체 로드 + CDC로 이관한다.' },
  { s:'s4', t:'데이터 분석', d:2, q:'스트리밍 데이터를 코드 작성 없이 S3로 적재하고 싶다. 적절한 서비스는?', c:['Kinesis Data Streams','Kinesis Data Firehose','Amazon MSK','SQS'], a:1, e:'Firehose는 완전관리형 전송 서비스로 버퍼링 후 S3·Redshift·OpenSearch로 적재한다.' },
  { s:'s4', t:'데이터 분석', d:2, q:'S3에 쌓인 로그를 서버 프로비저닝 없이 표준 SQL로 조회해야 한다. 적절한 서비스는?', c:['Amazon Athena','Amazon EMR','Redshift 클러스터','Glue ETL 작업'], a:0, e:'Athena는 서버리스로 S3를 직접 쿼리하며 스캔한 데이터량에 과금한다.' },
  { s:'s4', t:'데이터 분석', d:3, q:'Athena 쿼리 비용을 줄이는 가장 효과적인 방법은?', c:['쿼리 결과를 캐싱','데이터를 Parquet으로 변환하고 파티셔닝','인스턴스 크기 확대','S3 Standard-IA로 이동'], a:1, e:'Athena는 스캔량 과금이므로 컬럼형 포맷·압축·파티션 프루닝이 직접적인 비용 절감 수단이다.' },

  // ───────── 5영역 보안 · 아키텍처 · 비용 ─────────
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'EC2 애플리케이션이 S3에 접근해야 한다. 가장 안전한 방법은?', c:['액세스 키를 애플리케이션 설정 파일에 저장','IAM 역할을 인스턴스 프로파일로 연결','루트 사용자 자격 증명 사용','버킷을 퍼블릭으로 공개'], a:1, e:'IAM 역할은 임시 자격 증명을 자동 교체하므로 키 하드코딩이 불필요하다.' },
  { s:'s5', t:'IAM', d:3, q:'IAM 정책 평가에서 가장 먼저 적용되어 최종 결과를 결정하는 요소는?', c:['자격 증명 기반 Allow','명시적 Deny','리소스 기반 정책','권한 경계'], a:1, e:'명시적 Deny는 다른 어떤 Allow보다 우선한다.' },
  { s:'s5', t:'Organizations · 다중 계정', d:2, q:'AWS Organizations의 SCP에 대한 설명으로 옳은 것은?', c:['계정에 권한을 직접 부여한다','계정이 가질 수 있는 최대 권한(상한)을 정의한다','IAM 사용자에게만 적용된다','관리 계정에도 동일하게 적용된다'], a:1, e:'SCP는 가드레일로 권한 상한만 정의하며 관리 계정에는 적용되지 않는다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'RDS 데이터베이스 자격 증명을 30일마다 자동 교체해야 한다. 적절한 서비스는?', c:['Systems Manager Parameter Store','AWS Secrets Manager','AWS KMS','IAM Access Analyzer'], a:1, e:'자동 교체(rotation)는 Secrets Manager의 기능이며 RDS와 기본 통합된다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'전용 하드웨어에서 FIPS 140-2 레벨 3 인증과 키 완전 통제가 요구된다. 적절한 서비스는?', c:['AWS KMS','AWS CloudHSM','Secrets Manager','ACM'], a:1, e:'KMS는 멀티테넌트 레벨 2, CloudHSM은 단일 테넌트 레벨 3이다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'S3 버킷에 개인정보(PII)가 저장되어 있는지 자동으로 탐지하려 한다. 적절한 서비스는?', c:['Amazon Macie','Amazon Inspector','Amazon GuardDuty','AWS Config'], a:0, e:'Macie는 머신러닝으로 S3의 민감 데이터를 식별한다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'VPC 흐름 로그·DNS 로그·CloudTrail을 분석해 비정상 행위를 탐지하는 서비스는?', c:['Amazon Inspector','Amazon GuardDuty','AWS Security Hub','Amazon Detective'], a:1, e:'GuardDuty는 로그 기반 지능형 위협 탐지 서비스다.' },
  { s:'s5', t:'모니터링 · 감사', d:1, q:'"누가 어떤 API를 언제 호출했는가"를 확인하려면 어떤 서비스를 봐야 하는가?', c:['CloudWatch','CloudTrail','AWS Config','Trusted Advisor'], a:1, e:'CloudTrail이 API 호출 감사 기록을 제공한다.' },
  { s:'s5', t:'모니터링 · 감사', d:2, q:'리소스 구성이 사내 규정을 준수하는지 지속적으로 평가하고 변경 이력을 추적하려 한다. 적절한 서비스는?', c:['AWS Config','CloudTrail','CloudWatch Logs','Systems Manager'], a:0, e:'Config는 리소스 구성 스냅샷·변경 이력·규칙 기반 준수 평가를 제공한다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'SQL 인젝션과 XSS 공격을 애플리케이션 계층에서 차단하려 한다. 적절한 서비스는?', c:['AWS Shield Standard','AWS WAF','네트워크 ACL','Security Group'], a:1, e:'WAF는 L7 규칙으로 CloudFront·ALB·API Gateway에 연결한다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:2, q:'주문 처리 순서를 반드시 보장해야 하는 메시지 큐가 필요하다. 적절한 것은?', c:['SQS 표준 큐','SQS FIFO 큐','SNS 표준 주제','EventBridge 버스'], a:1, e:'FIFO 큐만 순서 보장과 정확히 1회 처리를 제공한다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:3, q:'SQS 메시지가 반복해서 중복 처리된다. 가장 먼저 점검할 설정은?', c:['메시지 보존 기간','가시성 시간 초과(Visibility Timeout)','최대 메시지 크기','긴 폴링 대기 시간'], a:1, e:'처리 시간보다 가시성 시간 초과가 짧으면 다른 소비자에게 다시 노출된다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:2, q:'하나의 이벤트를 여러 개의 SQS 큐로 동시에 전달해야 한다. 적절한 구성은?', c:['SQS 큐끼리 연결','SNS 주제에 여러 SQS 큐를 구독시키는 팬아웃','Kinesis 샤드 분할','ALB 대상 그룹 다중화'], a:1, e:'SNS 팬아웃이 표준 패턴이며 필터 정책으로 선별 전달도 가능하다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:3, q:'RTO를 수 분, RPO를 수 초로 맞추되 비용은 액티브-액티브보다 낮춰야 한다. 적절한 DR 전략은?', c:['백업 및 복원','파일럿 라이트','웜 스탠바이','다중 사이트 액티브-액티브'], a:2, e:'웜 스탠바이는 축소판 환경을 상시 가동해 분 단위 RTO를 제공한다.' },
  { s:'s5', t:'IAM', d:1, q:'공유 책임 모델에서 고객의 책임에 해당하는 것은?', c:['데이터센터 물리 보안','하이퍼바이저 패치','EC2 게스트 OS 패치와 보안 그룹 설정','리전 간 백본 네트워크 유지'], a:2, e:'AWS는 클라우드 "의" 보안, 고객은 클라우드 "내부의" 보안을 책임진다.' },
  { s:'s5', t:'Well-Architected · 비용', d:2, q:'Well-Architected Framework의 6개 필러에 포함되지 않는 것은?', c:['운영 우수성','보안','확장성(Scalability)','지속 가능성'], a:2, e:'6필러는 운영 우수성·보안·신뢰성·성능 효율성·비용 최적화·지속 가능성이다.' },
  { s:'s5', t:'Well-Architected · 비용', d:2, q:'프라이빗 서브넷의 EC2가 S3로 대량 데이터를 전송하면서 NAT 게이트웨이 데이터 처리 비용이 급증했다. 해결책은?', c:['NAT 인스턴스로 교체','S3 Gateway 엔드포인트 구성','인터넷 게이트웨이 직접 연결','CloudFront 배포 추가'], a:1, e:'Gateway 엔드포인트는 무료이며 트래픽이 NAT를 우회한다.' },
  { s:'s5', t:'Well-Architected · 비용', d:2, q:'인스턴스 사용률을 분석해 적정 크기를 권장받으려 한다. 적절한 서비스는?', c:['AWS Compute Optimizer','AWS Budgets','Cost Explorer','CloudFormation'], a:0, e:'Compute Optimizer가 지표 기반 적정 크기(rightsizing)를 권장한다.' },
  { s:'s5', t:'Organizations · 다중 계정', d:3, q:'여러 계정에 동일한 인프라 스택을 여러 리전에 걸쳐 일괄 배포해야 한다. 적절한 방법은?', c:['CloudFormation StackSets','CloudFormation 중첩 스택','계정별 수동 배포','Elastic Beanstalk'], a:0, e:'StackSets는 다중 계정·다중 리전 배포를 단일 작업으로 수행한다.' },
  { s:'s5', t:'Organizations · 다중 계정', d:2, q:'다중 계정 환경에서 랜딩 존을 자동 구축하고 가드레일을 적용하려 한다. 적절한 서비스는?', c:['AWS Control Tower','AWS Config','AWS Systems Manager','AWS Service Catalog'], a:0, e:'Control Tower가 Organizations·SCP·CloudTrail·로깅을 표준 구성으로 자동 설정한다.' }
];

CPPG.ox = [
  { s:'s1', t:'EC2 구매 옵션', d:1, q:'스팟 인스턴스는 중단 2분 전에 통보를 받는다.', a:true, e:'인스턴스 메타데이터와 EventBridge로 중단 통보가 전달된다.' },
  { s:'s1', t:'EC2 구매 옵션', d:2, q:'Savings Plans는 특정 인스턴스 타입을 약정하는 방식이다.', a:false, e:'Savings Plans는 시간당 사용 금액($/h)을 약정한다. 인스턴스 속성 약정은 RI다.' },
  { s:'s1', t:'컨테이너', d:2, q:'Fargate는 ECS에서만 사용할 수 있는 시작 유형이다.', a:false, e:'ECS와 EKS 모두에서 Fargate 시작 유형을 사용할 수 있다.' },
  { s:'s1', t:'Lambda · 서버리스', d:1, q:'Lambda 함수는 최대 15분까지 실행할 수 있다.', a:true, e:'이를 초과하면 Fargate·Batch·Step Functions로 분할해야 한다.' },
  { s:'s1', t:'EC2 운영', d:2, q:'클러스터 배치 그룹은 인스턴스를 여러 AZ에 분산시켜 가용성을 높인다.', a:false, e:'클러스터는 단일 AZ 밀집 배치로 저지연이 목적이다. 분산은 Spread 배치 그룹이다.' },
  { s:'s1', t:'Auto Scaling', d:2, q:'ASG의 기본 EC2 상태 검사만으로는 애플리케이션 장애를 감지하지 못할 수 있다.', a:true, e:'ELB 상태 검사를 활성화해야 앱 계층 장애 인스턴스가 교체된다.' },
  { s:'s1', t:'EC2 운영', d:1, q:'인스턴스 스토어 데이터는 인스턴스를 중지해도 유지된다.', a:false, e:'인스턴스 스토어는 휘발성이며 중지·종료 시 소실된다.' },
  { s:'s1', t:'EC2 운영', d:2, q:'AMI는 리전에 종속되며 다른 리전에서 쓰려면 복사해야 한다.', a:true, e:'AMI 복사(Copy AMI)로 리전 간 이동한다.' },
  { s:'s2', t:'S3 스토리지 클래스', d:1, q:'S3 One Zone-IA는 단일 가용 영역에만 데이터를 저장한다.', a:true, e:'그래서 저렴하지만 AZ 장애 시 데이터가 손실될 수 있어 재생성 가능한 데이터에 쓴다.' },
  { s:'s2', t:'S3 기본', d:2, q:'S3는 현재 모든 요청에 대해 강력한 읽기·쓰기 일관성을 제공한다.', a:true, e:'2020년 12월부터 추가 비용·성능 저하 없이 강력한 일관성이 기본이다.' },
  { s:'s2', t:'S3 스토리지 클래스', d:2, q:'S3 Standard-IA의 최소 보관 기간은 90일이다.', a:false, e:'IA 계열은 30일이다. 90일은 Glacier Flexible Retrieval이다.' },
  { s:'s2', t:'S3 기본', d:2, q:'S3 리전 간 복제(CRR)를 사용하려면 원본과 대상 버킷 모두 버전 관리가 활성화되어야 한다.', a:true, e:'복제의 전제 조건이다.' },
  { s:'s2', t:'S3 기본', d:2, q:'Object Lock 규정 준수 모드는 루트 사용자도 보존 기간 중 삭제할 수 없다.', a:true, e:'거버넌스 모드는 특별 권한으로 해제 가능하지만 규정 준수 모드는 불가하다.' },
  { s:'s2', t:'EBS', d:2, q:'st1과 sc1 HDD 볼륨은 EC2 부팅 볼륨으로 사용할 수 있다.', a:false, e:'부팅 볼륨은 gp2·gp3·io1·io2만 가능하다.' },
  { s:'s2', t:'EBS', d:2, q:'EBS 볼륨은 여러 가용 영역의 인스턴스에 동시에 연결할 수 있다.', a:false, e:'EBS는 단일 AZ에 종속된다. 다중 연결(Multi-Attach)도 같은 AZ 내에서만 가능하다.' },
  { s:'s2', t:'파일 · 하이브리드 스토리지', d:2, q:'EFS는 Windows 서버의 SMB 공유에 적합한 서비스다.', a:false, e:'EFS는 NFS 전용이다. SMB·AD 통합은 FSx for Windows File Server다.' },
  { s:'s2', t:'파일 · 하이브리드 스토리지', d:2, q:'대역폭이 부족한 환경에서 대용량 데이터를 일회성으로 옮길 때는 Snow Family가 적합하다.', a:true, e:'지속적인 네트워크 동기화는 DataSync를 쓴다.' },
  { s:'s3', t:'VPC 기본', d:2, q:'AWS는 각 서브넷에서 IP 주소 5개를 예약한다.', a:true, e:'네트워크 주소·VPC 라우터·DNS·향후 사용·브로드캐스트 용도다.' },
  { s:'s3', t:'SG vs NACL', d:1, q:'보안 그룹은 Stateless이므로 인바운드와 아웃바운드 규칙을 모두 설정해야 한다.', a:false, e:'보안 그룹은 Stateful이며 응답 트래픽이 자동 허용된다. Stateless는 NACL이다.' },
  { s:'s3', t:'SG vs NACL', d:2, q:'네트워크 ACL은 규칙 번호가 낮은 것부터 평가되어 첫 일치에서 결정된다.', a:true, e:'그래서 규칙 번호 설계가 중요하다.' },
  { s:'s3', t:'VPC 연결 · 엔드포인트', d:2, q:'S3용 Gateway 엔드포인트에는 시간당 요금이 부과된다.', a:false, e:'Gateway 엔드포인트는 무료다. Interface 엔드포인트가 시간·데이터 과금 대상이다.' },
  { s:'s3', t:'VPC 연결 · 엔드포인트', d:2, q:'VPC 피어링은 전이적 라우팅을 지원한다.', a:false, e:'A-B, B-C가 있어도 A-C는 통신할 수 없다. 전이 라우팅은 Transit Gateway가 담당한다.' },
  { s:'s3', t:'하이브리드 연결', d:2, q:'Direct Connect 회선은 기본적으로 암호화된다.', a:false, e:'암호화되지 않으므로 필요 시 DX 위에 IPsec VPN을 구성한다.' },
  { s:'s3', t:'ELB', d:2, q:'ALB는 Lambda 함수를 대상 그룹의 대상으로 등록할 수 있다.', a:true, e:'NLB는 Lambda를 대상으로 지원하지 않는다.' },
  { s:'s3', t:'ELB', d:2, q:'NLB는 가용 영역별로 정적 IP를 가질 수 있다.', a:true, e:'탄력적 IP 할당도 가능해 방화벽 화이트리스트에 적합하다.' },
  { s:'s3', t:'Route 53 · CDN', d:2, q:'Zone Apex 도메인에는 CNAME 레코드를 사용할 수 있다.', a:false, e:'DNS 표준상 불가하며 Route 53 별칭(Alias) 레코드를 사용한다.' },
  { s:'s3', t:'Route 53 · CDN', d:2, q:'Global Accelerator는 콘텐츠를 엣지에 캐싱한다.', a:false, e:'캐싱은 CloudFront의 역할이다. GA는 라우팅 최적화만 수행한다.' },
  { s:'s3', t:'VPC 기본', d:2, q:'NAT 게이트웨이는 리전 단위 자원이므로 하나만 있으면 모든 AZ가 안전하다.', a:false, e:'AZ 종속 자원이므로 고가용성을 위해 AZ마다 배치한다.' },
  { s:'s4', t:'RDS', d:1, q:'RDS Multi-AZ의 대기 인스턴스는 읽기 쿼리를 처리할 수 있다.', a:false, e:'대기 인스턴스는 접근할 수 없다. 읽기 분산은 읽기 전용 복제본이다.' },
  { s:'s4', t:'RDS', d:2, q:'읽기 전용 복제본은 비동기 복제를 사용하며 다른 리전에도 만들 수 있다.', a:true, e:'승격하면 독립 DB가 되어 DR 용도로도 쓰인다.' },
  { s:'s4', t:'Aurora', d:2, q:'Aurora는 3개 AZ에 걸쳐 6개의 데이터 복사본을 유지한다.', a:true, e:'쓰기 정족수 4/6, 읽기 정족수 3/6이다.' },
  { s:'s4', t:'DynamoDB', d:2, q:'DynamoDB LSI는 테이블 생성 후에도 추가할 수 있다.', a:false, e:'LSI는 생성 시에만 정의 가능하다. 이후 추가는 GSI만 가능하다.' },
  { s:'s4', t:'DynamoDB', d:2, q:'DynamoDB GSI는 강력한 일관성 읽기를 지원한다.', a:false, e:'GSI는 최종 일관성만 지원한다.' },
  { s:'s4', t:'캐시 · 웨어하우스 · 이관', d:2, q:'ElastiCache for Memcached는 복제와 자동 장애 조치를 지원한다.', a:false, e:'Memcached는 단순 캐시로 복제·영속·장애 조치가 없다. Redis가 지원한다.' },
  { s:'s4', t:'캐시 · 웨어하우스 · 이관', d:2, q:'Redshift는 OLTP 트랜잭션 처리에 최적화된 서비스다.', a:false, e:'Redshift는 컬럼형 MPP 기반 OLAP·데이터 웨어하우스용이다.' },
  { s:'s4', t:'캐시 · 웨어하우스 · 이관', d:2, q:'동종 DB 마이그레이션에는 SCT가 필요하지 않다.', a:true, e:'스키마 구조가 같으므로 DMS만으로 충분하다.' },
  { s:'s4', t:'데이터 분석', d:2, q:'Athena는 쿼리가 스캔한 데이터 양에 따라 과금한다.', a:true, e:'그래서 Parquet 변환·압축·파티셔닝이 비용 절감의 핵심이다.' },
  { s:'s4', t:'데이터 분석', d:2, q:'Kinesis Data Firehose는 소비자 애플리케이션을 직접 구현해야 한다.', a:false, e:'Firehose는 완전관리형으로 코드 없이 목적지에 적재한다. 직접 구현은 Data Streams다.' },
  { s:'s5', t:'IAM', d:2, q:'IAM 정책 평가에서 명시적 Deny는 모든 Allow보다 우선한다.', a:true, e:'평가 로직의 1순위다.' },
  { s:'s5', t:'Organizations · 다중 계정', d:2, q:'SCP는 계정에 권한을 직접 부여할 수 있다.', a:false, e:'SCP는 권한 상한만 정의하며 실제 부여는 IAM 정책이 한다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'Systems Manager Parameter Store는 자격 증명 자동 교체 기능을 제공한다.', a:false, e:'자동 교체는 Secrets Manager의 기능이다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'CloudHSM은 단일 테넌트 전용 하드웨어로 FIPS 140-2 레벨 3을 제공한다.', a:true, e:'KMS는 멀티테넌트 레벨 2다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'Amazon Inspector는 S3에 저장된 개인정보를 탐지하는 서비스다.', a:false, e:'그것은 Macie다. Inspector는 EC2·ECR·Lambda 취약점 스캔이다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:2, q:'SQS FIFO 큐는 메시지 순서와 정확히 1회 처리를 보장한다.', a:true, e:'대신 처리량이 표준 큐보다 제한된다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:2, q:'SNS는 구독자에게 메시지를 푸시하고, SQS는 소비자가 폴링해 가져간다.', a:true, e:'푸시 대 폴링이 두 서비스의 근본 차이다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:2, q:'DR 전략 중 파일럿 라이트가 웜 스탠바이보다 RTO가 짧다.', a:false, e:'웜 스탠바이가 축소판을 상시 가동하므로 RTO가 더 짧고 비용은 더 높다.' },
  { s:'s5', t:'IAM', d:1, q:'EC2 게스트 운영체제의 보안 패치는 AWS의 책임이다.', a:false, e:'공유 책임 모델상 게스트 OS 패치는 고객 책임이다.' },
  { s:'s5', t:'IAM', d:2, q:'같은 가용 영역 내 프라이빗 IP 통신은 데이터 전송 요금이 부과되지 않는다.', a:true, e:'AZ 간 통신과 인터넷 아웃바운드는 과금 대상이다.' }
];

CPPG.fill = [
  { s:'s1', t:'EC2 구매 옵션', d:1, q:'EC2 구매 옵션 5종을 쓰시오.', a:'온디맨드, 예약 인스턴스(RI), Savings Plans, 스팟, 전용 호스트/인스턴스', k:['온디맨드','예약','Savings','스팟','전용'], e:'중단 허용 여부와 약정 기간이 선택 기준이다.' },
  { s:'s1', t:'Auto Scaling', d:2, q:'ASG 조정 정책 4종을 쓰시오.', a:'대상 추적, 단계 조정, 단순 조정, 예약 조정', k:['대상 추적','단계','단순','예약'], e:'예측 가능한 시간 급증은 예약 조정, 지표 비례는 대상 추적이다.' },
  { s:'s1', t:'EC2 운영', d:2, q:'EC2 배치 그룹 3종을 쓰시오.', a:'클러스터, 분산(Spread), 파티션', k:['클러스터','분산','파티션'], e:'클러스터=저지연, 분산=고가용, 파티션=대규모 분산 시스템.' },
  { s:'s1', t:'Lambda · 서버리스', d:1, q:'Lambda의 최대 실행 시간과 최대 메모리를 쓰시오.', a:'15분, 10240MB(10GB)', k:['15','10'], e:'배포 패키지는 zip 50MB(압축)·250MB(해제), 컨테이너 이미지 10GB.' },
  { s:'s2', t:'S3 스토리지 클래스', d:2, q:'S3 스토리지 클래스 중 접근 패턴을 알 수 없을 때 선택하는 클래스는?', a:'S3 Intelligent-Tiering', k:['Intelligent'], e:'모니터링 요금만 내고 계층을 자동 이동한다.' },
  { s:'s2', t:'S3 스토리지 클래스', d:2, q:'S3 IA 계열, Glacier Flexible Retrieval, Glacier Deep Archive의 최소 보관 기간을 각각 쓰시오.', a:'30일, 90일, 180일', k:['30','90','180'], e:'조기 삭제 시에도 최소 기간만큼 과금된다.' },
  { s:'s2', t:'S3 보안 · 성능', d:2, q:'S3 서버 측 암호화 3방식을 쓰시오.', a:'SSE-S3, SSE-KMS, SSE-C', k:['SSE-S3','SSE-KMS','SSE-C'], e:'감사·접근 제어가 필요하면 SSE-KMS다.' },
  { s:'s2', t:'EBS', d:2, q:'EBS 볼륨 타입 중 SSD 계열 2종과 HDD 계열 2종을 쓰시오.', a:'SSD: gp3, io2 / HDD: st1, sc1', k:['gp3','io2','st1','sc1'], e:'HDD 계열(st1·sc1)은 부팅 볼륨으로 쓸 수 없다.' },
  { s:'s2', t:'파일 · 하이브리드 스토리지', d:1, q:'Storage Gateway 3종을 쓰시오.', a:'File Gateway, Volume Gateway, Tape Gateway', k:['File','Volume','Tape'], e:'각각 NFS/SMB, iSCSI, VTL 인터페이스를 제공한다.' },
  { s:'s3', t:'SG vs NACL', d:2, q:'보안 그룹과 네트워크 ACL의 상태 처리 방식을 각각 쓰시오.', a:'보안 그룹은 Stateful, 네트워크 ACL은 Stateless', k:['Stateful','Stateless'], e:'NACL은 인바운드·아웃바운드 규칙을 각각 정의해야 한다.' },
  { s:'s3', t:'VPC 기본', d:2, q:'AWS가 각 서브넷에서 예약하는 IP 주소 개수는?', a:'5개', k:['5'], e:'/24 서브넷의 사용 가능 IP는 251개다.' },
  { s:'s3', t:'VPC 연결 · 엔드포인트', d:2, q:'VPC 엔드포인트 2종과 Gateway 엔드포인트를 지원하는 서비스를 쓰시오.', a:'Gateway 엔드포인트, Interface 엔드포인트 / S3, DynamoDB', k:['Gateway','Interface','S3','DynamoDB'], e:'Gateway 엔드포인트는 무료다.' },
  { s:'s3', t:'ELB', d:2, q:'로드 밸런서 4종을 쓰시오.', a:'ALB, NLB, GWLB, CLB', k:['ALB','NLB','GWLB','CLB'], e:'L7=ALB, L4=NLB, L3 어플라이언스=GWLB.' },
  { s:'s3', t:'Route 53 · CDN', d:3, q:'Route 53 라우팅 정책 7종을 쓰시오.', a:'단순, 가중치, 지연 시간, 장애 조치, 지리 위치, 지리 근접, 다중 값 응답', k:['단순','가중치','지연','장애 조치','지리 위치','지리 근접','다중 값'], e:'DR은 장애 조치, 규제 대응은 지리 위치다.' },
  { s:'s3', t:'Route 53 · CDN', d:2, q:'루트 도메인을 ALB에 연결할 때 사용하는 Route 53 레코드 유형은?', a:'별칭(Alias) 레코드', k:['별칭'], e:'Zone Apex에는 CNAME을 쓸 수 없다.' },
  { s:'s4', t:'RDS', d:2, q:'RDS에서 고가용성을 위한 기능과 읽기 확장을 위한 기능을 각각 쓰시오.', a:'고가용성: Multi-AZ / 읽기 확장: 읽기 전용 복제본', k:['Multi-AZ','읽기 전용 복제본'], e:'Multi-AZ 대기 인스턴스는 읽기에 사용할 수 없다.' },
  { s:'s4', t:'Aurora', d:3, q:'Aurora의 스토리지 복사본 개수와 쓰기·읽기 정족수를 쓰시오.', a:'6개(3 AZ × 2), 쓰기 4/6, 읽기 3/6', k:['6','4','3'], e:'스토리지 계층이 자가 복구된다.' },
  { s:'s4', t:'DynamoDB', d:2, q:'DynamoDB에서 테이블 생성 후에도 추가할 수 있는 인덱스는?', a:'GSI(글로벌 보조 인덱스)', k:['GSI'], e:'LSI는 테이블 생성 시에만 정의할 수 있다.' },
  { s:'s4', t:'DynamoDB', d:2, q:'DynamoDB 전용 인메모리 캐시 서비스의 이름은?', a:'DAX(DynamoDB Accelerator)', k:['DAX'], e:'마이크로초 수준 읽기 응답을 제공한다.' },
  { s:'s4', t:'데이터 분석', d:2, q:'Kinesis 계열 서비스 중 완전관리형으로 S3·Redshift에 적재하는 서비스는?', a:'Kinesis Data Firehose', k:['Firehose'], e:'소비자 코드가 필요 없다.' },
  { s:'s4', t:'캐시 · 웨어하우스 · 이관', d:2, q:'이기종 데이터베이스 마이그레이션에 사용하는 두 도구를 쓰시오.', a:'SCT(스키마 변환), DMS(데이터 이관)', k:['SCT','DMS'], e:'동종 마이그레이션이면 SCT는 불필요하다.' },
  { s:'s5', t:'IAM', d:3, q:'IAM 정책 평가에서 가장 우선하는 요소는?', a:'명시적 Deny', k:['Deny'], e:'어떤 Allow보다 우선하며 기본은 암묵적 거부다.' },
  { s:'s5', t:'Organizations · 다중 계정', d:2, q:'AWS Organizations에서 계정의 권한 상한을 정의하는 정책의 약어는?', a:'SCP(서비스 제어 정책)', k:['SCP'], e:'권한을 부여하지 않고 가드레일 역할만 한다.' },
  { s:'s5', t:'암호화 · 보안 서비스', d:2, q:'GuardDuty, Inspector, Macie의 역할을 각각 한 단어로 쓰시오.', a:'GuardDuty: 위협 탐지 / Inspector: 취약점 스캔 / Macie: 민감정보 탐지', k:['위협','취약점','민감'], e:'세 서비스의 역할을 뒤바꾸는 함정이 잦다.' },
  { s:'s5', t:'모니터링 · 감사', d:2, q:'CloudTrail, CloudWatch, Config의 역할을 각각 쓰시오.', a:'CloudTrail: API 호출 감사 / CloudWatch: 지표, 로그, 알람 / Config: 구성 변경 이력과 규정 준수', k:['감사','지표','구성'], e:'"누가 삭제했나"는 CloudTrail, "설정이 규정에 맞나"는 Config.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:2, q:'DR 4전략을 RTO가 긴 순서대로 쓰시오.', a:'백업 및 복원, 파일럿 라이트, 웜 스탠바이, 다중 사이트 액티브-액티브', k:['백업','파일럿','웜','액티브'], e:'RTO가 짧아질수록 비용이 올라간다.' },
  { s:'s5', t:'Well-Architected · 비용', d:2, q:'Well-Architected Framework 6 필러를 쓰시오.', a:'운영 우수성, 보안, 신뢰성, 성능 효율성, 비용 최적화, 지속 가능성', k:['운영','보안','신뢰','성능','비용','지속'], e:'지속 가능성은 2021년에 추가된 여섯 번째 필러다.' },
  { s:'s5', t:'복원성 · DR · 디커플링', d:2, q:'SQS에서 메시지 중복 처리를 유발하는 대표적인 설정과, 실패 메시지를 격리하는 큐를 쓰시오.', a:'가시성 시간 초과, DLQ(데드 레터 큐)', k:['가시성','DLQ'], e:'가시성 시간 초과는 처리 시간보다 길게 설정한다.' }
];

/* ── 8. 개념정리 ────────────────────────────────────────────
   카드·시트가 "요약·암기"라면 이 화면은 ★영역별 개념 전문(全文)★ 이다.
   t(단원) 값은 핵심시트·문제은행과 같은 어휘를 쓴다. */
CPPG.notes = [

/* ───────── s1 컴퓨트 · 서버리스 ───────── */
{ s:'s1', no:'1-1', t:'글로벌 인프라 · 공유 책임', title:'리전 · AZ · 엣지와 공유 책임 모델', ref:'00·01장', body:[
  { h:'글로벌 인프라 4계층', li:[
    '★리전(Region)★ — 지리적으로 분리된 독립 영역. 리전 간에는 기본적으로 데이터가 자동 복제되지 않는다(복제는 명시적 설정).',
    '★가용 영역(AZ)★ — 한 리전 안의 물리적으로 분리된 데이터센터 묶음. 리전당 최소 3개. AZ 간 지연은 1~2ms 수준.',
    '★엣지 로케이션★ — CloudFront·Route 53·Global Accelerator 가 쓰는 캐시·접점. 400개 이상.',
    '★Local Zone / Wavelength / Outposts★ — 사용자 가까이(Local Zone), 5G 통신망 안(Wavelength), 온프레미스 랙(Outposts).',
    '고가용성의 기본 단위는 ★AZ 다중화★, 재해 복구의 단위는 ★리전 다중화★ — 문제에서 요구 수준을 먼저 읽는다.'
  ]},
  { h:'서비스의 범위 — 시험 함정 1순위', tb:{ head:['범위','대표 서비스','주의'], rows:[
    ['글로벌','IAM · Route 53 · CloudFront · WAF(CloudFront용)','리전 선택 자체가 없다'],
    ['리전','S3 버킷 · DynamoDB · RDS · Lambda · SQS','리전 간 이동은 복제·마이그레이션'],
    ['AZ','EBS 볼륨 · 서브넷 · NAT 게이트웨이 · EFS 마운트 타깃','다른 AZ에서 직접 못 쓴다'],
    ['특수','ACM 인증서','CloudFront에 붙일 인증서는 ★반드시 us-east-1★']
  ]}},
  { h:'공유 책임 모델 (Shared Responsibility)', tb:{ head:['구분','책임 주체','예'], rows:[
    ['클라우드 "의" 보안(of the cloud)','AWS','하드웨어·데이터센터 물리 보안·하이퍼바이저·관리형 서비스의 패치'],
    ['클라우드 "에서의" 보안(in the cloud)','고객','OS 패치(EC2) · 보안 그룹 · IAM 권한 · 데이터 암호화 · 네트워크 구성'],
    ['공통','양쪽','패치 관리 · 구성 관리 · 인식 교육']
  ]}},
  { h:'서비스 유형별 경계', li:[
    '★IaaS(EC2·EBS·VPC)★ — 게스트 OS 패치·방화벽 설정까지 전부 고객 책임.',
    '★관리형(RDS·ElastiCache)★ — DB 엔진 패치는 AWS, 계정·권한·암호화 설정·스키마는 고객.',
    '★서버리스(S3·Lambda·DynamoDB)★ — 인프라·런타임은 AWS, 접근 정책·데이터 분류·코드는 고객.',
    '어느 유형이든 ★데이터 자체와 접근 권한은 항상 고객 책임★ 이다 — "AWS가 알아서 암호화해 준다"는 서술은 오답.'
  ]}
]},

{ s:'s1', no:'1-2', t:'EC2 구매 옵션', title:'EC2 구매 옵션 5종과 선택 기준', ref:'01장', body:[
  { h:'5종 비교', tb:{ head:['옵션','약정','할인','중단 위험','대표 용도'], rows:[
    ['온디맨드(On-Demand)','없음','—','없음','예측 불가·단기 부하, 신규 앱 검증'],
    ['예약 인스턴스(RI)','1년 / 3년','최대 72%','없음','상시 가동 기준 부하'],
    ['Savings Plans','1년 / 3년 (시간당 ★금액★ 약정)','최대 72%','없음','인스턴스 패밀리·리전을 바꿔 가며 쓰는 상시 부하'],
    ['스팟(Spot)','없음','최대 90%','★2분 전 통보 후 회수★','중단 허용 배치·CI·빅데이터'],
    ['전용 호스트 / 전용 인스턴스','옵션','—','없음','물리 서버 단위 라이선스(BYOL)·규정 격리']
  ]}},
  { h:'RI vs Savings Plans — 가장 자주 묻는 구분', li:[
    '★RI★ 는 인스턴스 ★속성(패밀리·리전·OS)★ 을 약정한다. 표준 RI는 할인이 크지만 유연성이 낮고, 전환형(Convertible) RI는 속성 변경이 가능한 대신 할인이 작다.',
    '★Savings Plans★ 는 ★시간당 지출 금액★ 을 약정한다. Compute SP는 EC2·Fargate·Lambda까지 덮고 패밀리·리전을 바꿔도 할인이 따라온다.',
    '용량을 ★보장★ 받아야 하면 지역(regional) RI 로는 부족하다 — ★영역(zonal) RI★ 또는 ★On-Demand Capacity Reservation★ 을 쓴다.',
    '"유연성이 필요하다" → Savings Plans / "특정 AZ에 용량을 확보해야 한다" → 영역 RI·용량 예약.'
  ]},
  { h:'스팟 인스턴스 실무 규칙', li:[
    '중단은 ★2분 전 통보(중단 알림)★ 가 온다 — "예고 없이 종료된다"는 서술은 오답.',
    '★스팟 플릿 / ASG 혼합 인스턴스 정책★ 으로 온디맨드 기준선 + 스팟 확장을 조합하는 것이 정석 답안.',
    '중단 동작은 ★종료·중지·최대 절전★ 중 선택. 상태를 EBS·S3·DynamoDB 등 ★외부에 저장★ 해 두는 것이 전제.',
    '★스팟 블록(정해진 기간 보장)★ 은 신규 사용이 중단되었다 — 오래된 자료에만 나오는 개념.'
  ]},
  { h:'T 시리즈 버스터블 주의', li:[
    'T 계열은 ★CPU 크레딧★ 으로 동작한다. 크레딧이 고갈되면 기준 성능으로 떨어져 지속 부하에 부적합.',
    '★Unlimited 모드★ 를 켜면 크레딧 초과분을 추가 과금하고 성능을 유지한다 — 비용 급증의 원인이 되기도 한다.',
    '지속적으로 높은 CPU가 필요하면 T 계열이 아니라 ★M(범용) · C(컴퓨트 최적화)★ 로 바꾸는 것이 정답.'
  ]}
]},

{ s:'s1', no:'1-3', t:'EC2 운영', title:'인스턴스 패밀리 · 배치 그룹 · 스토리지 · AMI', ref:'01장', body:[
  { h:'인스턴스 패밀리 — 첫 글자로 외운다', tb:{ head:['패밀리','성격','대표 용도'], rows:[
    ['T · M','버스터블 · 범용','웹 서버, 소규모 DB, 개발 환경'],
    ['C','컴퓨트 최적화','배치 처리, 고성능 웹, 게임 서버, HPC'],
    ['R · X · z','메모리 최적화','인메모리 DB, 대용량 캐시, SAP HANA'],
    ['I · D · H','스토리지 최적화(로컬 NVMe·HDD)','NoSQL, 데이터 웨어하우스, 분산 파일시스템'],
    ['P · G · Inf · Trn','가속 컴퓨팅(GPU·전용칩)','머신러닝 학습·추론, 그래픽 렌더링']
  ]}},
  { h:'배치 그룹 3종', tb:{ head:['종류','배치','목적','위험'], rows:[
    ['클러스터(Cluster)','★단일 AZ★ 안에 밀집','★가장 낮은 지연·높은 처리량★ (HPC)','랙 장애 시 동시 영향'],
    ['분산(Spread)','서로 다른 랙·전원에 분산','★하드웨어 장애 격리★ (핵심 소수 인스턴스)','AZ당 7개 인스턴스 제한'],
    ['분할(Partition)','파티션 단위로 랙 분리','HDFS·Cassandra 등 ★대규모 분산 시스템★','파티션 내부는 함께 영향']
  ]}},
  { h:'인스턴스 스토어 vs EBS', li:[
    '★인스턴스 스토어★ — 호스트에 직접 붙은 임시 디스크. 매우 빠르지만 ★중지·최대 절전·종료 시 데이터 소멸★. 재부팅은 유지된다.',
    '★EBS★ — 네트워크 연결 블록 스토리지. 인스턴스와 수명이 분리되고 스냅샷으로 백업된다. 영구 저장이 필요하면 EBS.',
    '★EBS 볼륨은 단일 AZ 종속★ — 다른 AZ로 옮기려면 스냅샷을 만들어 그 AZ에서 복원한다.'
  ]},
  { h:'AMI · User Data · 메타데이터', li:[
    '★AMI★ 는 리전 종속 자산이다. 다른 리전에서 쓰려면 ★AMI 복사★, 다른 계정에 주려면 공유 권한을 부여한다.',
    '★User Data★ 는 최초 부팅 시 1회 실행되는 부트스트랩 스크립트다(루트 권한). 매번 실행되게 하려면 별도 설정이 필요하다.',
    '★인스턴스 메타데이터(169.254.169.254)★ 로 역할 자격 증명을 얻는다. ★IMDSv2(토큰 방식)★ 를 강제해 SSRF 공격을 막는 것이 권고 사항.',
    '자격 증명을 AMI·User Data·코드에 ★하드코딩하지 않는다★ — 항상 ★IAM 역할★ 을 인스턴스에 붙인다.'
  ]}
]},

{ s:'s1', no:'1-4', t:'Auto Scaling', title:'ASG 구성 요소와 조정 정책', ref:'01장', body:[
  { h:'ASG 기본 구성', li:[
    '★시작 템플릿(Launch Template)★ — 어떤 AMI·타입·SG·User Data로 띄울지. 버전 관리가 되므로 시작 구성(Launch Configuration)보다 권장된다.',
    '★최소 / 희망 / 최대 용량★ — 스케일링은 희망 용량을 최소~최대 사이에서 조절한다.',
    '★다중 AZ 지정★ 이 고가용성의 출발점이다. ASG는 AZ 간 인스턴스 수를 스스로 균형 맞춘다(AZ Rebalancing).',
    '★상태 검사 유형★ 을 EC2 로만 두면 인스턴스는 살아 있는데 앱이 죽은 경우를 못 잡는다 — ★ELB 상태 검사를 켜야★ 앱 장애 인스턴스가 교체된다.'
  ]},
  { h:'조정 정책', tb:{ head:['정책','기준','특징'], rows:[
    ['대상 추적(Target Tracking)','지표 목표값(예: 평균 CPU 50%)','가장 단순·권장. 자동으로 알람을 만든다'],
    ['단순 조정(Simple Scaling)','알람 1개 → 정해진 수만큼 증감','쿨다운이 끝날 때까지 다음 조정 불가'],
    ['단계 조정(Step Scaling)','알람 초과 폭에 따라 단계별 증감','급격한 부하 변화에 유연'],
    ['예약 조정(Scheduled)','시각 기준','매일 09시 급증처럼 ★예측 가능한 패턴★'],
    ['예측 조정(Predictive)','과거 지표 기반 머신러닝','미리 늘려 두어 준비 시간이 긴 워크로드에 유리']
  ]}},
  { h:'수명 주기를 다루는 부가 기능', li:[
    '★쿨다운(Cooldown)★ — 조정 직후 추가 조정을 막아 과도한 증감(플래핑)을 방지한다.',
    '★수명 주기 훅(Lifecycle Hook)★ — 인스턴스가 뜨거나 내려갈 때 ★대기 상태로 잡아 두고★ 초기화·로그 수집 같은 작업을 끼워 넣는다.',
    '★워밍 풀(Warm Pool)★ — 미리 초기화해 중지해 둔 인스턴스 풀. 부팅이 오래 걸리는 앱의 확장 지연을 줄인다.',
    '★인스턴스 새로 고침(Instance Refresh)★ — 새 시작 템플릿 버전으로 인스턴스를 점진 교체하는 롤링 배포.',
    '★종료 정책★ 기본값은 AZ 균형 → 가장 오래된 시작 템플릿 → 다음 청구 시간에 가까운 인스턴스 순.'
  ]}
]},

{ s:'s1', no:'1-5', t:'컨테이너', title:'ECS · EKS · Fargate 구분', ref:'01장', body:[
  { h:'세 이름의 층위가 다르다 — 최대 함정', li:[
    '★ECS★ 와 ★EKS★ 는 ★오케스트레이터★ 다(무엇이 컨테이너를 배치·관리하는가).',
    '★Fargate★ 는 오케스트레이터가 아니라 ★시작 유형(launch type)★ 이다 — ECS·EKS ★양쪽에서★ 쓸 수 있다.',
    '따라서 "ECS vs Fargate" 라는 대립 구도의 보기는 그 자체가 오답 구성이다.'
  ]},
  { h:'비교표', tb:{ head:['구분','ECS','EKS','Fargate'], rows:[
    ['정체','AWS 자체 오케스트레이터','관리형 Kubernetes','서버리스 실행 방식'],
    ['운영 부담','낮음','중간(K8s 지식 필요)','가장 낮음(노드 관리 없음)'],
    ['이식성','AWS 종속','★표준 K8s — 이식성 높음★','—'],
    ['과금','EC2 노드 요금','노드 요금 + 클러스터 시간당 요금','vCPU·메모리 사용량'],
    ['선택 기준','AWS 안에서 단순하게','K8s 자산·멀티클라우드','노드 관리 자체를 없애고 싶을 때']
  ]}},
  { h:'ECS 핵심 용어', li:[
    '★태스크 정의(Task Definition)★ — 컨테이너 이미지·CPU·메모리·포트·IAM 역할을 담은 청사진.',
    '★태스크★ = 태스크 정의로 실행된 인스턴스, ★서비스★ = 원하는 태스크 수를 유지하고 ELB에 등록해 주는 관리 단위.',
    '★태스크 역할(Task Role)★ 은 컨테이너 안 앱이 쓰는 권한, ★실행 역할(Execution Role)★ 은 ECR 이미지 풀·로그 전송에 쓰는 권한 — 두 역할을 뒤바꾸는 문제가 잦다.',
    'EC2 시작 유형은 ★ECS 에이전트★ 가 설치된 노드가 필요하고, Fargate 시작 유형은 노드가 없다.'
  ]}
]},

{ s:'s1', no:'1-6', t:'Lambda · 서버리스', title:'Lambda 제한 · 동시성 · 콜드 스타트', ref:'01장', body:[
  { h:'외워야 하는 한계값', tb:{ head:['항목','값'], rows:[
    ['최대 실행 시간','★15분★'],
    ['메모리','128MB ~ 10,240MB (CPU가 메모리에 비례)'],
    ['/tmp 임시 디스크','512MB ~ 10,240MB'],
    ['배포 패키지','zip 직접 업로드 50MB · 압축 해제 250MB · 컨테이너 이미지 10GB'],
    ['동기 호출 페이로드','6MB · 비동기 256KB'],
    ['리전당 기본 동시 실행','1,000 (증액 요청 가능)']
  ]}},
  { h:'15분을 넘으면 무엇을 쓰나 — 대체 서비스', li:[
    '장시간 배치 → ★AWS Batch★ 또는 ★ECS/Fargate 태스크★.',
    '여러 단계를 오래 이어 붙여야 하면 → ★Step Functions★ 로 워크플로를 쪼갠다.',
    'ETL 이면 → ★Glue★. "Lambda 타임아웃을 늘린다"는 보기는 15분을 넘길 수 없으므로 오답.'
  ]},
  { h:'동시성 3종', li:[
    '★예약 동시성(Reserved Concurrency)★ — 특정 함수에 동시 실행 수를 ★확보하면서 동시에 상한★ 도 건다. 다운스트림 DB 과부하 방지에 쓴다.',
    '★프로비저닝된 동시성(Provisioned Concurrency)★ — 미리 초기화된 실행 환경을 준비해 ★콜드 스타트를 없앤다★. 추가 비용이 든다.',
    '동시성이 고갈되면 동기 호출은 ★스로틀링(429)★, 비동기 호출은 재시도 후 ★DLQ / 실패 대상★ 으로 간다.'
  ]},
  { h:'콜드 스타트 완화와 VPC 연결', li:[
    '완화 순서 — ① 프로비저닝된 동시성 ② 메모리 증설 ③ 핸들러 밖 초기화 코드 최소화 ④ Java는 ★SnapStart★.',
    'Lambda 를 ★VPC에 연결★ 하면 프라이빗 리소스(RDS 등)에 접근할 수 있지만, ★인터넷·퍼블릭 AWS API 접근은 NAT 게이트웨이나 VPC 엔드포인트가 필요★ 해진다.',
    '★계층(Layer)★ 으로 공통 라이브러리를 분리하면 패키지가 가벼워지고 배포가 빨라진다.'
  ]}
]},

/* ───────── s2 스토리지 ───────── */
{ s:'s2', no:'2-1', t:'S3 기본', title:'S3 기본 특성 · 일관성 · 버전 관리 · Object Lock', ref:'02장', body:[
  { h:'기본 수치', li:[
    '객체 하나의 최대 크기는 ★5TB★, 단일 PUT 으로는 ★5GB★ 까지 — 그 이상은 ★멀티파트 업로드★ 를 쓴다(100MB 이상이면 권장).',
    '표준 클래스의 내구성은 ★99.999999999%(11 nines)★, 가용성은 99.99%.',
    '버킷 이름은 ★전 세계에서 고유★ 하며 버킷 자체는 리전에 속한다.',
    '★현재 S3는 강력한 읽기·쓰기 일관성(strong consistency)★ 을 제공한다 — "최종 일관성 때문에 잠시 옛 데이터가 보인다"는 보기는 오답(2020년 12월 변경).'
  ]},
  { h:'버전 관리와 삭제 표식', li:[
    '버전 관리를 켜면 덮어쓰기·삭제로부터 이전 버전이 보존된다. 한 번 켜면 ★중지(suspend)는 되지만 끄기(disable)는 불가★.',
    '삭제 요청은 실제 삭제가 아니라 ★삭제 표식(Delete Marker)★ 을 올린다 — 표식을 지우면 복구된다.',
    '★MFA Delete★ 는 버전 영구 삭제·버전 관리 중지에 MFA를 요구한다. ★루트 계정만★ 설정할 수 있다.',
    '★S3 복제(CRR·SRR)★ 는 ★원본·대상 버킷 모두 버전 관리가 켜져 있어야★ 동작한다. 기본은 새로 들어오는 객체만 복제하고, 기존 객체는 ★배치 복제★ 로 따로 채운다.'
  ]},
  { h:'Object Lock — 규정 준수용 WORM', tb:{ head:['모드','성격','해제'], rows:[
    ['거버넌스(Governance)','특별 권한이 있으면 해제·단축 가능','s3:BypassGovernanceRetention 권한'],
    ['규정 준수(Compliance)','★루트 계정도 기간 내 삭제·단축 불가★','불가 — 기간 만료까지 기다린다'],
    ['법적 보존(Legal Hold)','기간 없이 무기한 보존','권한 있는 사용자가 해제']
  ]}},
  { h:'접근 제어 우선순위', li:[
    '★버킷 정책(리소스 기반)★ 이 표준이다. ACL 은 레거시로 ★비활성(객체 소유권 강제)★ 이 권장 설정.',
    '★퍼블릭 액세스 차단(Block Public Access)★ 은 계정·버킷 수준에서 정책보다 우선해 공개를 막는다.',
    '★사전 서명 URL(Presigned URL)★ 은 발급자의 권한을 한시적으로 위임한다 — 비공개 버킷에서 임시 다운로드를 열어 줄 때의 정답.',
    '★S3 액세스 포인트★ 는 공유 버킷에 애플리케이션별 진입점·정책을 따로 두는 기능이다.'
  ]}
]},

{ s:'s2', no:'2-2', t:'S3 스토리지 클래스', title:'스토리지 클래스와 수명 주기 규칙', ref:'02장', body:[
  { h:'클래스 비교', tb:{ head:['클래스','AZ','최소 보관','검색 요금','용도'], rows:[
    ['Standard','3+','없음','없음','자주 쓰는 데이터'],
    ['Intelligent-Tiering','3+','없음','없음(모니터링 요금)','★접근 패턴을 모를 때★'],
    ['Standard-IA','3+','30일','있음','드물게 접근하지만 즉시 필요'],
    ['One Zone-IA','★1★','30일','있음','재생성 가능한 사본 — 가용성은 더 낮다'],
    ['Glacier Instant Retrieval','3+','90일','있음','분기 1회 접근 + ★밀리초 즉시 검색★'],
    ['Glacier Flexible Retrieval','3+','90일','있음','분~시간 단위 검색 아카이브'],
    ['Glacier Deep Archive','3+','★180일★','있음','★12시간★ 수준 — 최저가 장기 보관']
  ]}},
  { h:'자주 틀리는 지점', li:[
    '★One Zone-IA 는 AZ 가 1개★ 라 내구성 표기는 같아도 ★가용성이 낮다★ — "가용성이 더 높다"는 서술은 오답.',
    '접근 패턴을 ★모른다·불규칙하다★ 는 조건이면 정답은 ★Intelligent-Tiering★ 이다. "일단 Standard-IA" 는 최소 보관·검색 요금 때문에 오히려 손해.',
    '★즉시★ 꺼내야 하는 아카이브는 Deep Archive 가 아니라 ★Glacier Instant Retrieval★.',
    '최소 보관 기간 전에 삭제·전이하면 ★남은 기간만큼 요금이 청구★ 된다.'
  ]},
  { h:'수명 주기(Lifecycle) 규칙', li:[
    '전이는 ★단방향★ 이다 — Standard → IA → Glacier 방향으로만 자동 전이되고, 되돌리려면 ★복원(restore) 후 복사★ 해야 한다.',
    'Standard → Standard-IA 전이는 ★최소 30일★ 이 지나야 한다. 128KB 미만 객체는 IA 로 전이되지 않는다.',
    '규칙은 ★현재 버전★ 과 ★이전 버전★ 에 따로 걸 수 있고, ★미완료 멀티파트 업로드 정리★ 규칙은 비용 누수를 막는 필수 설정.',
    '만료(Expiration) 규칙으로 보존 기간이 지난 로그를 자동 삭제한다 — "보관 후 자동 삭제" 요구의 정답.'
  ]}
]},

{ s:'s2', no:'2-3', t:'S3 보안 · 성능', title:'암호화 3방식 · 성능 최적화 · CloudFront 연계', ref:'02장', body:[
  { h:'서버 측 암호화 3종', tb:{ head:['방식','키 관리','감사','비고'], rows:[
    ['SSE-S3 (AES-256)','AWS가 전부 관리','불가','기본값. 관리 부담 0'],
    ['SSE-KMS','고객이 KMS 키 관리','★CloudTrail로 키 사용 감사★','키 정책으로 접근 분리. 요청량 많으면 ★버킷 키★ 로 비용·스로틀 완화'],
    ['SSE-C','고객이 키를 직접 제공','—','AWS가 키를 저장하지 않는다. HTTPS 필수']
  ]}},
  { h:'암호화 관련 함정', li:[
    '이미 암호화되지 않은 리소스(EBS·RDS)를 ★그 자리에서 암호화할 수는 없다★ — ★스냅샷을 암호화 옵션으로 복사한 뒤 복원★ 하는 것이 정답 절차.',
    '전송 중 암호화는 ★HTTPS 강제(aws:SecureTransport 조건)★ 로 버킷 정책에 박는다.',
    'CloudFront 배포에 붙일 ★ACM 인증서는 반드시 us-east-1★ 에서 발급해야 한다.'
  ]},
  { h:'성능 최적화', li:[
    '접두사(prefix) 당 ★초당 3,500 쓰기 / 5,500 읽기★ 를 지원한다 — 접두사를 늘리면 선형 확장된다.',
    '★S3 Transfer Acceleration★ — 엣지 로케이션을 경유해 ★원거리 업로드★ 를 가속한다.',
    '★멀티파트 업로드★ — 큰 파일을 병렬 분할 전송하고 실패한 조각만 재전송한다.',
    '★바이트 범위 가져오기(Byte-Range Fetch)★ — 큰 객체의 앞부분만 병렬로 읽는다.',
    '★S3 Select★ — 객체 안에서 SQL 로 필요한 행·열만 꺼내 전송량을 줄인다.'
  ]},
  { h:'정적 웹사이트 + CloudFront', li:[
    'S3 정적 웹사이트 호스팅만으로는 ★HTTPS 를 제공하지 않는다★ — 앞단에 ★CloudFront★ 를 둔다.',
    '버킷은 비공개로 두고 ★OAC(Origin Access Control)★ 로 CloudFront 만 접근하게 한다. ★OAI 는 OAC 로 대체된 구식★.',
    '오리진이 S3 이면 ★S3 오리진 + OAC★, 오리진이 ALB·온프레미스면 ★커스텀 오리진★.'
  ]}
]},

{ s:'s2', no:'2-4', t:'EBS', title:'EBS 볼륨 타입 4종 · 스냅샷 · 암호화', ref:'02장', body:[
  { h:'볼륨 타입', tb:{ head:['타입','매체','최대 IOPS','특징·용도'], rows:[
    ['gp3','SSD','16,000','기본 3,000 IOPS·125MB/s 보장. ★IOPS와 용량이 분리★ 되어 gp2보다 저렴'],
    ['gp2','SSD','16,000','용량 1GB당 3 IOPS — 성능을 올리려면 용량을 키워야 한다'],
    ['io1 / io2 Block Express','SSD','64,000 / 256,000','★프로비저닝 IOPS★ · 최고 성능. ★Multi-Attach 지원★'],
    ['st1','HDD','500','처리량 최적화. 빅데이터·로그 — ★부팅 볼륨 불가★'],
    ['sc1','HDD','250','콜드 HDD, 최저가 — ★부팅 볼륨 불가★']
  ]}},
  { h:'선택 기준 한 줄', li:[
    '대부분의 일반 워크로드 → ★gp3★ (gp2를 쓰고 있다면 무중단 전환 권장).',
    '지연에 민감한 고성능 DB·★16,000 IOPS 초과★ → io1 / io2.',
    '순차 처리량이 중요하고 IOPS는 필요 없다 → st1 / sc1 (단, 부팅 불가).',
    '★Multi-Attach★ 는 io1·io2 에서 ★같은 AZ 안 최대 16 인스턴스★ 에 동시 연결 — 클러스터 파일시스템이 전제다.'
  ]},
  { h:'스냅샷과 암호화', li:[
    '스냅샷은 ★S3에 증분 저장★ 되며 ★리전 단위 자산★ 이다 — 다른 리전·계정으로 복사할 수 있다.',
    '★EBS 볼륨은 AZ 종속★ — 다른 AZ로 옮기려면 스냅샷 → 그 AZ에서 복원.',
    '스냅샷에서 복원한 볼륨은 처음 접근 시 지연이 생긴다 — ★고속 스냅샷 복원(FSR)★ 으로 초기화 지연을 없앤다.',
    '암호화된 볼륨의 스냅샷·복원본은 ★자동으로 암호화★ 된다. 미암호화 볼륨을 암호화하려면 ★스냅샷을 암호화 복사한 뒤 복원★.',
    '★Data Lifecycle Manager(DLM)★ 로 스냅샷 생성·보존을 자동화한다.'
  ]}
]},

{ s:'s2', no:'2-5', t:'파일 · 하이브리드 스토리지', title:'EFS · FSx · Storage Gateway · Snow · DataSync', ref:'02장', body:[
  { h:'공유 파일 스토리지', tb:{ head:['서비스','프로토콜','대상 OS','특징'], rows:[
    ['EFS','NFS','Linux','★다중 AZ 자동 확장★. Elastic·프로비저닝 처리량 모드, IA 클래스로 비용 절감'],
    ['FSx for Windows File Server','SMB','Windows','★Active Directory 통합★ · DFS'],
    ['FSx for Lustre','Lustre','Linux','HPC·머신러닝 ★초고성능★. S3와 연동해 지연 로드'],
    ['FSx for NetApp ONTAP','NFS·SMB·iSCSI','혼합','멀티프로토콜·스냅샷·복제'],
    ['FSx for OpenZFS','NFS','Linux','ZFS 스냅샷 기반 마이그레이션']
  ]}},
  { h:'선택 한 줄 요약', li:[
    'Linux 다중 인스턴스 공유 → ★EFS★ / Windows·AD 파일 공유 → ★FSx for Windows★ / HPC·ML 고속 처리 → ★FSx for Lustre★.',
    'EBS 는 ★한 AZ의 한 인스턴스★ 에 붙는 블록 스토리지다 — "여러 EC2가 동시에 같은 파일을 읽고 쓴다"면 EBS 가 아니라 EFS.'
  ]},
  { h:'하이브리드 · 대량 이관', tb:{ head:['서비스','용도','핵심 구분'], rows:[
    ['Storage Gateway (File)','온프레미스에서 NFS·SMB로 S3 사용','파일 → S3 객체'],
    ['Storage Gateway (Volume)','iSCSI 블록 볼륨을 클라우드에 백업','캐시형 / 저장형'],
    ['Storage Gateway (Tape)','기존 백업 SW의 가상 테이프','Glacier 로 아카이브'],
    ['Snowcone · Snowball Edge','★일회성 대용량 물리 이관★','네트워크가 느리거나 없을 때'],
    ['DataSync','★온라인 지속 동기화·마이그레이션★','에이전트 설치, 스케줄 전송']
  ]}},
  { h:'Snow vs DataSync — 목적이 다르다', li:[
    '★일회성 대용량 오프라인 이관★ 이면 Snowball, ★지속적인 온라인 동기화★ 면 DataSync.',
    '"네트워크 대역폭이 부족하고 수십 TB~PB 를 한 번에" → Snow Family. "매일 밤 변경분을 클라우드로" → DataSync.'
  ]}
]},

/* ───────── s3 네트워킹 · 엣지 ───────── */
{ s:'s3', no:'3-1', t:'VPC 기본', title:'VPC · 서브넷 · 라우팅 · IGW / NAT', ref:'03장', body:[
  { h:'주소 설계', li:[
    'VPC CIDR 은 ★/16 ~ /28★ 범위. 생성 후 축소는 불가하고 ★보조 CIDR 추가★ 만 가능하다.',
    'AWS 는 각 서브넷에서 ★5개 IP를 예약★ 한다 — 네트워크 주소, VPC 라우터, DNS, 예약, 브로드캐스트. /24 서브넷의 가용 IP 는 ★251개★.',
    '서브넷은 ★하나의 AZ 안★ 에만 존재한다 — 여러 AZ에 걸칠 수 없다.',
    '퍼블릭 서브넷의 정의는 "라우팅 테이블에 ★0.0.0.0/0 → IGW★ 경로가 있는 서브넷" 이다. 이름이 아니라 라우팅이 기준.'
  ]},
  { h:'인터넷 접속 경로', tb:{ head:['구성 요소','방향','비고'], rows:[
    ['인터넷 게이트웨이(IGW)','양방향','VPC당 1개. 퍼블릭 IP·EIP 필요'],
    ['NAT 게이트웨이','★아웃바운드 전용★','관리형·고대역폭. ★AZ 종속 → AZ마다 1개★ 배치가 HA 구성'],
    ['NAT 인스턴스','아웃바운드 전용','직접 관리(레거시). ★소스/대상 확인 비활성화 필수★'],
    ['Egress-Only IGW','IPv6 아웃바운드 전용','IPv6에는 NAT GW를 쓰지 않는다']
  ]}},
  { h:'자주 나오는 함정', li:[
    'NAT 게이트웨이는 ★퍼블릭 서브넷★ 에 두고, 프라이빗 서브넷의 라우팅 테이블이 그것을 가리켜야 한다 — 자기 자신을 프라이빗 서브넷에 두는 구성은 동작하지 않는다.',
    'NAT 게이트웨이는 ★AZ 장애에 취약★ 하다. 고가용성 요구가 있으면 ★AZ마다 하나씩★ 만들고 각 AZ 라우팅 테이블을 분리한다.',
    '★IPv6 는 NAT 가 필요 없다★ — 아웃바운드만 열려면 Egress-Only IGW.',
    '★VPC 흐름 로그(Flow Logs)★ 는 트래픽 ★메타데이터★ 만 남긴다 — 패킷 내용은 볼 수 없다. "연결이 차단된 원인" 조사에는 REJECT 레코드를 본다.'
  ]}
]},

{ s:'s3', no:'3-2', t:'SG vs NACL', title:'보안 그룹과 네트워크 ACL', ref:'03장', body:[
  { h:'핵심 비교', tb:{ head:['구분','보안 그룹(SG)','네트워크 ACL'], rows:[
    ['적용 대상','★ENI(인스턴스)★','★서브넷★'],
    ['상태','★Stateful★ — 인바운드 허용 시 응답 자동 허용','★Stateless★ — 인바운드·아웃바운드를 각각 정의'],
    ['규칙','★허용(Allow)만★','허용 + ★거부(Deny) 가능★'],
    ['평가','모든 규칙을 합쳐 평가','★규칙 번호 오름차순 · 첫 일치에서 결정★'],
    ['기본값','인바운드 전부 차단 / 아웃바운드 전부 허용','기본 NACL은 전부 허용, 새로 만든 NACL은 전부 거부']
  ]}},
  { h:'임시 포트(Ephemeral Port) 함정', li:[
    'NACL 은 Stateless 라서 ★응답 트래픽을 위한 아웃바운드 규칙★ 을 따로 열어야 한다.',
    '클라이언트 응답은 ★1024~65535★ 임시 포트로 돌아온다 — 이 범위를 아웃바운드에 허용하지 않으면 "요청은 가는데 응답이 안 온다".',
    '"SG 는 열었는데 통신이 안 된다" 는 시나리오의 정답은 대개 ★NACL 아웃바운드/임시 포트★ 다.'
  ]},
  { h:'다층 방어 설계', li:[
    '★NACL 은 서브넷 단위 굵은 차단(예: 특정 IP 대역 블랙리스트)★, ★SG 는 인스턴스 단위 세밀 허용★ 으로 역할을 나눈다.',
    'SG 규칙의 소스에 ★다른 SG 를 지정★ 할 수 있다 — "웹 SG 에서 오는 트래픽만 DB SG 로" 가 정석 답안(IP 하드코딩보다 낫다).',
    'SG 는 계정·VPC 안에서만 유효하다. VPC 간에는 피어링·TGW 를 거치되 ★SG 참조는 같은 리전 피어링에서만★ 가능하다.'
  ]}
]},

{ s:'s3', no:'3-3', t:'VPC 연결 · 엔드포인트', title:'엔드포인트 · Peering · Transit Gateway · PrivateLink', ref:'03장', body:[
  { h:'VPC 엔드포인트 2종', tb:{ head:['구분','Gateway 엔드포인트','Interface 엔드포인트(PrivateLink)'], rows:[
    ['지원 서비스','★S3 · DynamoDB 뿐★','대부분의 AWS 서비스 + 파트너·자체 서비스'],
    ['동작','★라우팅 테이블에 경로 추가★','서브넷에 ★ENI + 프라이빗 DNS★ 생성'],
    ['요금','★무료★','시간당 + 데이터 처리 요금'],
    ['보안 제어','엔드포인트 정책','엔드포인트 정책 + ★보안 그룹★'],
    ['온프레미스에서 사용','불가','★DX·VPN 경유 가능★']
  ]}},
  { h:'VPC 간 연결 3종', tb:{ head:['방식','구조','전이 라우팅','용도'], rows:[
    ['VPC 피어링','1:1 직접 연결','★불가(전이 라우팅 없음)★','소수 VPC. CIDR 중복 불가'],
    ['Transit Gateway','★허브 앤 스포크★','가능','수십~수백 VPC·VPN·DX 를 한곳에서'],
    ['PrivateLink','서비스 소비자 ↔ 공급자','—','★VPC 전체를 열지 않고 특정 서비스만★ 노출']
  ]}},
  { h:'선택 기준', li:[
    'VPC 가 몇 개뿐이고 전부 서로 통신 → 피어링. ★VPC 수가 늘어 메시가 복잡해지면 TGW★ (피어링은 N(N-1)/2 개 필요).',
    '피어링은 ★전이 라우팅이 안 된다★ — A-B, B-C 가 있어도 A-C 는 통신되지 않는다. 시험 단골.',
    '상대에게 ★내 서비스 하나만★ 안전하게 제공 → PrivateLink(+NLB). VPC 전체 연결이 아니다.',
    '피어링·TGW 모두 ★CIDR 중복은 허용되지 않는다★.'
  ]}
]},

{ s:'s3', no:'3-4', t:'하이브리드 연결', title:'Site-to-Site VPN 과 Direct Connect', ref:'03장', body:[
  { h:'비교', tb:{ head:['구분','Site-to-Site VPN','Direct Connect(DX)'], rows:[
    ['경로','★인터넷 경유★','★전용 물리 회선★'],
    ['암호화','★IPSec 기본 암호화★','★기본 암호화 없음★'],
    ['대역폭','최대 1.25Gbps/터널','50Mbps ~ 100Gbps'],
    ['지연 일관성','인터넷 상황에 좌우','일관·안정'],
    ['구축 기간','수십 분','수 주 ~ 수 개월'],
    ['비용','저렴','고가']
  ]}},
  { h:'가장 자주 묻는 두 지점', li:[
    '★DX 는 기본적으로 암호화되지 않는다★ — "전용선이라 안전하다"는 서술은 오답. 암호화가 요구되면 ★DX 위에 VPN(IPSec)★ 을 얹는다.',
    'DX 는 ★단일 회선이면 그 자체가 SPOF★ 다. 고가용성은 ★DX 2회선(서로 다른 로케이션)★ 또는 ★DX + VPN 백업★.',
    '"당장 필요하고 저렴하게" → VPN, "일관된 대용량·저지연이 필요" → DX, "둘 다" → DX 주회선 + VPN 폴백.'
  ]},
  { h:'DX 가상 인터페이스(VIF)', li:[
    '★Private VIF★ — 내 VPC 의 프라이빗 IP 로 접근.',
    '★Public VIF★ — S3·DynamoDB 같은 퍼블릭 엔드포인트에 전용선으로 접근.',
    '★Transit VIF★ — Direct Connect Gateway 를 통해 ★TGW 와 연결★, 다수 VPC 를 한 회선으로.'
  ]}
]},

{ s:'s3', no:'3-5', t:'ELB', title:'로드 밸런서 4종과 동작 옵션', ref:'03장', body:[
  { h:'4종 비교', tb:{ head:['구분','ALB','NLB','GWLB','CLB(구식)'], rows:[
    ['계층','L7 (HTTP/HTTPS)','L4 (TCP/UDP/TLS)','L3 (GENEVE)','L4/L7'],
    ['라우팅','★경로·호스트·헤더·쿼리 기반★','포트 기반','어플라이언스 체이닝','기본'],
    ['성능','높음','★초고성능·초저지연★','—','낮음'],
    ['고정 IP','불가(Alias 사용)','★AZ당 고정 IP·EIP 지원★','—','불가'],
    ['대상','EC2·IP·★Lambda★·컨테이너','EC2·IP·ALB','방화벽 등 가상 어플라이언스','EC2'],
    ['용도','웹·마이크로서비스','게임·IoT·금융 저지연','서드파티 보안 장비 삽입','레거시']
  ]}},
  { h:'선택 트리거', li:[
    '★Lambda 를 대상으로 삼을 수 있는 로드 밸런서는 ALB 뿐★ 이다.',
    '★정적 IP·EIP 가 필요★ 하거나 ★UDP★ 를 다뤄야 하면 NLB.',
    '★서드파티 방화벽·IDS 어플라이언스★ 를 트래픽 경로에 끼워 넣어야 하면 GWLB.',
    'URL 경로(/api, /img)나 호스트명으로 나눠 보내야 하면 ALB.'
  ]},
  { h:'공통 동작 옵션', li:[
    '★상태 검사(Health Check)★ — 비정상 대상에는 트래픽을 보내지 않는다. ASG 의 상태 검사 유형을 ★ELB★ 로 바꿔야 앱 장애 인스턴스가 교체된다.',
    '★교차 영역 로드 밸런싱★ — ALB 는 ★항상 켜짐(무료)★, NLB·GWLB 는 ★기본 꺼짐★ 이고 켜면 AZ 간 데이터 요금이 붙는다.',
    '★고정 세션(Sticky Session)★ — 같은 클라이언트를 같은 대상으로. 확장성이 떨어지므로 ★세션을 ElastiCache·DynamoDB 로 외부화★ 하는 것이 더 나은 답안.',
    '★연결 드레이닝(등록 취소 지연)★ — 대상을 빼기 전 진행 중 요청을 마치도록 기다린다(기본 300초).',
    '★TLS 종료★ 를 ELB 에서 하면 인증서를 ACM 으로 중앙 관리할 수 있다. ★NLB 는 클라이언트 IP 를 보존★ 하는 특성이 있고, ALB 는 ★X-Forwarded-For★ 헤더로 전달한다.'
  ]}
]},

{ s:'s3', no:'3-6', t:'Route 53 · CDN', title:'라우팅 정책 7종 · Alias · CloudFront · Global Accelerator', ref:'06장', body:[
  { h:'라우팅 정책 7종', tb:{ head:['정책','기준','대표 시나리오'], rows:[
    ['단순(Simple)','단일 레코드','기본'],
    ['가중치(Weighted)','비율 분배','★블루/그린·카나리 배포★'],
    ['지연 시간(Latency)','가장 빠른 리전','전 세계 사용자 응답 속도 최적화'],
    ['장애 조치(Failover)','상태 검사 기반 주/보조','★액티브-패시브 DR★'],
    ['지리 위치(Geolocation)','접속자의 국가·대륙','★규제·라이선스·언어별 분리★'],
    ['지리 근접(Geoproximity)','자원 위치 + 바이어스','트래픽을 지역별로 밀고 당길 때'],
    ['다중 값 응답(Multivalue)','최대 8개 정상 레코드 반환','간이 부하 분산 — LB 대체는 아니다']
  ]}},
  { h:'Alias 레코드 — 시험 단골', li:[
    '★Zone Apex(루트 도메인, example.com)에는 CNAME 을 쓸 수 없다★ — 이때 쓰는 것이 ★Alias 레코드★.',
    'Alias 대상은 ELB·CloudFront·S3 웹사이트 엔드포인트·API Gateway·다른 Route 53 레코드 등 ★AWS 리소스★ 다.',
    'Alias 는 ★질의 요금이 무료★ 이고 대상 IP 변경을 자동 추적한다.'
  ]},
  { h:'CloudFront vs Global Accelerator', tb:{ head:['구분','CloudFront','Global Accelerator'], rows:[
    ['프로토콜','★HTTP/HTTPS(캐시 가능)★','★TCP·UDP(캐시 불가 포함)★'],
    ['핵심 가치','엣지 ★캐싱★','AWS 백본으로 ★경로 최적화★ + ★고정 애니캐스트 IP 2개★'],
    ['장애 전환','오리진 그룹','리전 단위 즉시 전환'],
    ['용도','정적·동적 웹 콘텐츠, 스트리밍','게임·VoIP·IoT, 고정 IP 요구']
  ]}},
  { h:'CloudFront 부가 기능', li:[
    '★서명된 URL / 서명된 쿠키★ — 유료 콘텐츠 접근 제어(단일 파일 / 여러 파일).',
    '★지리적 제한(Geo Restriction)★ — 국가 단위 허용·차단.',
    '★OAC★ 로 S3 오리진을 비공개로 잠근다.',
    '★Lambda@Edge / CloudFront Functions★ — 엣지에서 요청·응답을 변형(A/B 테스트, 헤더 조작). 가벼운 문자열 처리는 CloudFront Functions 가 더 싸고 빠르다.',
    '캐시 무효화는 ★Invalidation★ 이지만 비용·지연이 있으니 ★버전 있는 파일명★ 이 더 나은 답안.'
  ]}
]},

/* ───────── s4 데이터베이스 · 분석 ───────── */
{ s:'s4', no:'4-1', t:'RDS', title:'RDS — Multi-AZ vs 읽기 전용 복제본 · 백업', ref:'04장', body:[
  { h:'Multi-AZ vs 읽기 전용 복제본 ★최빈출★', tb:{ head:['구분','Multi-AZ','읽기 전용 복제본(Read Replica)'], rows:[
    ['목적','★고가용성(HA)★','★읽기 성능 확장★'],
    ['복제 방식','★동기식★','★비동기식★'],
    ['읽기 사용','★불가 — 대기 인스턴스는 트래픽을 받지 않는다★','가능'],
    ['범위','같은 리전의 다른 AZ','같은 AZ·다른 AZ·★다른 리전★'],
    ['장애 조치','★자동(DNS 엔드포인트 전환)★','수동 승격(promote)'],
    ['개수','1 (또는 Multi-AZ 클러스터 2 대기)','엔진별 최대 5~15']
  ]}},
  { h:'헷갈리는 조합', li:[
    '"장애 시 자동 전환" → Multi-AZ. "리포트 조회가 느리다" → 읽기 전용 복제본. ★둘은 배타적이지 않고 함께 쓴다★.',
    '읽기 전용 복제본은 ★비동기★ 라 복제 지연(replica lag)이 생긴다 — "항상 최신 데이터" 요구에는 부적합.',
    '★재해 복구(다른 리전)★ 요구에는 ★크로스 리전 읽기 전용 복제본★ 또는 Aurora Global Database.',
    'Multi-AZ 대기 인스턴스로는 읽기 부하를 못 뺀다 — 이 문장을 뒤집은 보기가 매년 나온다.'
  ]},
  { h:'백업 · 복구', li:[
    '★자동 백업★ — 보존 기간 0~35일. 켜져 있으면 ★특정 시점 복구(PITR)★ 가 가능하다(트랜잭션 로그 5분 단위).',
    '★수동 스냅샷★ — 명시적으로 지우기 전까지 ★영구 보존★. 인스턴스를 삭제해도 남는다.',
    '복원은 언제나 ★새 인스턴스 생성★ 이다 — 기존 인스턴스를 덮어쓰지 않는다. 엔드포인트가 바뀌므로 애플리케이션 전환이 필요.',
    '미암호화 인스턴스를 암호화하려면 ★스냅샷 → 암호화 복사 → 복원★.'
  ]},
  { h:'부가 기능', li:[
    '★RDS Proxy★ — 커넥션 풀링으로 ★Lambda 등 다수 연결★ 을 흡수하고 장애 조치 시간을 단축한다. IAM 인증·Secrets Manager 연동.',
    '★Blue/Green 배포★ — 스테이징 사본에 변경을 적용하고 짧은 전환으로 교체.',
    '★파라미터 그룹★ 은 엔진 설정, ★옵션 그룹★ 은 부가 기능(TDE, Oracle S3 통합 등). 정적 파라미터는 ★재부팅★ 이 필요하다.'
  ]}
]},

{ s:'s4', no:'4-2', t:'Aurora', title:'Aurora 아키텍처 · 엔드포인트 · Global Database', ref:'04장', body:[
  { h:'스토리지 아키텍처', li:[
    'MySQL·PostgreSQL 호환. 표준 대비 ★MySQL 5배 · PostgreSQL 3배★ 성능을 표방한다.',
    '스토리지는 ★3개 AZ에 각 2벌, 총 6벌 복제★ 된다. ★쓰기 정족수 4/6, 읽기 정족수 3/6★.',
    'AZ 하나(2벌)를 잃어도 ★쓰기가 계속★ 되고, 3벌을 잃어도 ★읽기는 유지★ 된다. 스토리지는 ★자가 복구★ 한다.',
    '스토리지는 ★10GB 단위로 최대 128TB 까지 자동 확장★ — 미리 크기를 잡을 필요가 없다.',
    '컴퓨트(인스턴스)와 스토리지가 분리되어 ★복제본 추가가 빠르다★ (최대 15개, 지연 보통 10ms 대).'
  ]},
  { h:'엔드포인트 4종', tb:{ head:['엔드포인트','대상','용도'], rows:[
    ['클러스터(Writer)','현재 기본 인스턴스','쓰기 — 장애 조치 시 자동 전환'],
    ['리더(Reader)','읽기 복제본 전체','읽기 부하 자동 분산'],
    ['사용자 지정(Custom)','지정한 인스턴스 묶음','분석용 대형 인스턴스만 따로'],
    ['인스턴스','개별 인스턴스','진단·특수 목적. 앱에서 직접 쓰지 않는다']
  ]}},
  { h:'특징 기능', li:[
    '★Backtrack★ — 백업 복원 없이 ★클러스터를 과거 시점으로 되감는다★(MySQL 호환). 실수한 DML 을 빠르게 되돌릴 때.',
    '★Aurora Global Database★ — 주 리전 → 보조 리전 복제 지연 ★보통 1초 미만★, 재해 시 ★1분 내 승격★. 크로스 리전 DR 의 정답.',
    '★Aurora Serverless v2★ — ACU 단위로 ★초 단위 세밀 확장★. 예측 불가·간헐적 워크로드에 적합.',
    '★Aurora Replica Auto Scaling★ — 읽기 부하에 따라 복제본 수를 자동 조절.',
    '장애 조치 우선순위는 ★승격 계층(Tier 0~15)★ 으로 정한다.'
  ]}
]},

{ s:'s4', no:'4-3', t:'DynamoDB', title:'키 설계 · GSI/LSI · 용량 모드 · DAX · Streams', ref:'04장', body:[
  { h:'키와 파티션', li:[
    '★파티션 키(해시 키)★ 만 쓰거나 ★파티션 키 + 정렬 키(복합 키)★ 를 쓴다.',
    '파티션 키는 ★카디널리티가 높고 고르게 분산★ 되어야 한다 — 쏠리면 ★핫 파티션★ 이 되어 스로틀링이 발생한다.',
    '해결책은 ★키에 무작위 접미사 부여(write sharding)★ 또는 키 설계 변경.',
    '항목(Item) 최대 크기는 ★400KB★ — 큰 객체는 S3에 두고 ★포인터만 저장★ 하는 것이 정석.'
  ]},
  { h:'GSI vs LSI', tb:{ head:['구분','GSI(글로벌 보조 인덱스)','LSI(로컬 보조 인덱스)'], rows:[
    ['파티션 키','★다르게 지정 가능★','★테이블과 동일★'],
    ['생성 시점','★언제든 추가·삭제★','★테이블 생성 시에만★'],
    ['일관성','★최종 일관성만★','강력한 일관성 가능'],
    ['용량','자체 RCU/WCU','테이블 용량 공유'],
    ['제약','—','파티션 키당 ★10GB★ 제한']
  ]}},
  { h:'용량 모드와 읽기 일관성', li:[
    '★온디맨드★ — 트래픽 예측이 어렵거나 급변할 때. 용량 계획이 필요 없다.',
    '★프로비저닝★ — 예측 가능한 부하에 저렴. ★Auto Scaling★ 을 함께 켜는 것이 정석.',
    '읽기는 기본 ★최종 일관성★ 이며, 강력한 일관성 읽기는 ★RCU 를 2배★ 소비한다.',
    '★DAX★ — DynamoDB 전용 인메모리 캐시로 ★마이크로초★ 읽기. ElastiCache 와 달리 ★애플리케이션 코드 변경이 거의 없다★.'
  ]},
  { h:'Streams · TTL · Global Tables', li:[
    '★DynamoDB Streams★ — 항목 변경을 24시간 보관하는 스트림. ★Lambda 트리거★ 로 이벤트 기반 처리를 붙인다.',
    '★TTL★ — 만료 시각 속성을 두면 자동 삭제된다. ★삭제에 쓰기 용량이 들지 않는다★ — 세션·로그 정리의 정답.',
    '★Global Tables★ — 다중 리전 ★액티브-액티브★ 복제. 최종 일관성이며 충돌은 최종 기록 우선으로 해결.',
    '★PITR★ 로 최근 35일 내 임의 시점 복구가 가능하다.'
  ]}
]},

{ s:'s4', no:'4-4', t:'캐시 · 웨어하우스 · 이관', title:'ElastiCache · Redshift · DMS / SCT', ref:'04장', body:[
  { h:'ElastiCache — Redis vs Memcached', tb:{ head:['구분','Redis','Memcached'], rows:[
    ['자료형','문자열·리스트·셋·정렬셋 등 ★풍부★','단순 key-value'],
    ['영속성·복제','★스냅샷·복제·Multi-AZ 장애 조치★','없음'],
    ['확장','샤딩(클러스터 모드)','노드 추가 — ★멀티스레드★'],
    ['용도','세션·리더보드·큐·Pub/Sub','★단순 캐시·수평 확장★']
  ]}},
  { h:'캐시 전략', li:[
    '★지연 로딩(Lazy Loading)★ — 캐시 미스일 때만 DB 조회 후 채운다. 필요한 것만 캐시하지만 첫 요청이 느리다.',
    '★쓰기 스루(Write-Through)★ — 쓸 때 캐시도 갱신한다. 항상 최신이지만 쓰지 않는 데이터까지 캐시된다.',
    '★TTL★ 을 붙여 오래된 데이터를 자연 만료시키는 조합이 실무 정석.',
    '"RDS 읽기 부하가 심하고 같은 쿼리가 반복" → ElastiCache. "DynamoDB 읽기가 느리다" → DAX.'
  ]},
  { h:'Redshift — 데이터 웨어하우스', li:[
    '★컬럼형 저장 + MPP★ 구조의 ★OLAP★ 서비스다 — OLTP 용도로 쓰면 오답.',
    '★분산 스타일(DISTKEY)★ 과 ★정렬 키(SORTKEY)★ 가 성능의 핵심.',
    '★Redshift Spectrum★ — S3 의 데이터를 로드하지 않고 직접 조회한다.',
    '★RA3 노드★ — 컴퓨트와 관리형 스토리지 분리. ★Concurrency Scaling★ 으로 동시 쿼리 급증을 흡수.'
  ]},
  { h:'DMS · SCT', li:[
    '★DMS★ 는 ★데이터★ 를 옮긴다. 원본을 계속 쓰면서 ★CDC(변경 데이터 캡처)★ 로 최소 다운타임 전환이 가능하다.',
    '★SCT(Schema Conversion Tool)★ 는 ★스키마·저장 프로시저★ 를 변환한다.',
    '★동종 마이그레이션(Oracle → Oracle)에는 SCT 가 필요 없다★ — 이기종(Oracle → Aurora PostgreSQL)일 때만 함께 쓴다.'
  ]}
]},

{ s:'s4', no:'4-5', t:'데이터 분석', title:'Kinesis 계열 · Glue · Athena · EMR · OpenSearch', ref:'07장', body:[
  { h:'Kinesis 계열 구분 ★시험 단골★', tb:{ head:['서비스','성격','핵심'], rows:[
    ['Data Streams','실시간 스트림 저장','★샤드★ 단위 처리, 보존 24시간~365일, ★소비자 코드 필요★'],
    ['Data Firehose','완전관리형 적재','S3·Redshift·OpenSearch·Splunk 로 ★버퍼링 후 자동 적재★, ★코드 불필요·거의 실시간★'],
    ['Managed Service for Apache Flink','스트림 SQL·Flink 처리','실시간 집계·이상 탐지'],
    ['Video Streams','영상 수집','ML 분석 연계']
  ]}},
  { h:'구분 포인트', li:[
    '"소비자 애플리케이션을 직접 만들 필요 없이 S3로" → ★Firehose★.',
    '"여러 소비자가 같은 데이터를 각자 다시 읽어야" → ★Data Streams★ (보존 기간 안에서 재처리 가능).',
    'SQS 와의 차이 — SQS 는 ★읽으면 사라지는 작업 큐★, Kinesis 는 ★여러 소비자가 반복 읽는 스트림★.'
  ]},
  { h:'서버리스 분석 3종', li:[
    '★Glue★ — 서버리스 ETL. ★Glue 데이터 카탈로그★ 가 메타데이터 저장소 역할을 하고 ★크롤러★ 가 스키마를 자동 추론한다.',
    '★Athena★ — S3 데이터를 ★SQL 로 즉시 조회★. 스캔한 데이터량으로 과금하므로 ★Parquet/ORC 컬럼 포맷 + 파티셔닝 + 압축★ 이 비용 절감의 정답.',
    '★QuickSight★ — BI 대시보드. ★SPICE★ 인메모리 엔진.',
    '★EMR★ — Hadoop·Spark 관리형 클러스터. 장시간 대규모 처리이며 서버리스가 아니다.',
    '★OpenSearch Service★ — 로그 검색·분석·시각화(과거 Elasticsearch).'
  ]},
  { h:'선택 한 줄', li:[
    '"S3 로그를 가끔 SQL 로 뒤진다" → Athena(클러스터 구축은 과잉).',
    '"복잡한 Spark 잡을 몇 시간 돌린다" → EMR.',
    '"스키마를 자동으로 잡고 ETL 파이프라인을 만든다" → Glue.',
    '"로그를 전문 검색하고 대시보드로 본다" → OpenSearch.'
  ]}
]},

/* ───────── s5 보안 · 아키텍처 · 비용 ───────── */
{ s:'s5', no:'5-1', t:'IAM', title:'IAM 구성 요소와 정책 평가 로직', ref:'05장', body:[
  { h:'구성 요소', li:[
    '★사용자(User)★ · ★그룹(Group)★ · ★역할(Role)★ · ★정책(Policy)★ 이 기본 4요소다. ★역할에는 그룹을 넣을 수 없다★.',
    '★루트 계정★ 은 MFA 를 켜고 액세스 키를 삭제한 뒤 ★일상 작업에 쓰지 않는다★.',
    'EC2·Lambda 등 서비스에는 ★액세스 키가 아니라 IAM 역할★ 을 붙인다 — 자격 증명 하드코딩은 항상 오답.',
    '교차 계정 접근은 ★역할 위임(AssumeRole) + 신뢰 정책★ 으로 푼다. ★STS★ 가 임시 자격 증명을 발급한다.'
  ]},
  { h:'정책 평가 로직 — 순서를 외운다', li:[
    '① ★명시적 Deny 가 있으면 즉시 거부★ — 어떤 Allow 보다 우선한다.',
    '② SCP·권한 경계·세션 정책 등 ★모든 경계를 통과★ 해야 한다(교집합).',
    '③ 아이덴티티 정책 또는 리소스 정책에 ★명시적 Allow★ 가 있으면 허용.',
    '④ 아무것도 없으면 ★암묵적 거부(기본 거부)★.',
    '즉 "SCP 로 권한을 부여한다"는 서술은 오답 — SCP 는 ★상한(가드레일)★ 만 정한다.'
  ]},
  { h:'정책 유형', tb:{ head:['유형','붙는 곳','예'], rows:[
    ['아이덴티티 기반','사용자·그룹·역할','관리형 정책, 인라인 정책'],
    ['리소스 기반','리소스 자체','S3 버킷 정책, SQS 정책, KMS 키 정책'],
    ['권한 경계(Permissions Boundary)','사용자·역할','부여 가능한 ★최대 권한 상한★'],
    ['SCP','Organizations OU·계정','계정 전체의 ★권한 상한★'],
    ['세션 정책','AssumeRole 시','임시 세션의 권한 축소']
  ]}},
  { h:'인증·자격 증명 도구', li:[
    '★IAM Identity Center(구 SSO)★ — 다중 계정·외부 IdP 연동 통합 로그인.',
    '★Cognito 사용자 풀★ = 앱 사용자 ★인증(로그인)★, ★자격 증명 풀★ = AWS 리소스 접근용 ★임시 자격 증명 발급★. 둘을 뒤바꾸는 문제가 잦다.',
    '★IAM Access Analyzer★ — 외부에 공유된 리소스를 찾아낸다. ★자격 증명 보고서 · Access Advisor★ 로 미사용 권한을 정리한다.'
  ]}
]},

{ s:'s5', no:'5-2', t:'Organizations · 다중 계정', title:'다중 계정 거버넌스와 SCP', ref:'01·05장', body:[
  { h:'AWS Organizations', li:[
    '조직(Organization) → ★루트 → OU(조직 단위) → 계정★ 계층으로 관리한다.',
    '★통합 결제(Consolidated Billing)★ — 사용량을 합산해 ★볼륨 할인·RI/SP 공유★ 혜택을 받는다.',
    '계정 분리는 ★가장 강력한 격리 경계★ 다 — 운영/개발/보안 계정을 나누는 것이 권장 설계.',
    '★Control Tower★ 는 랜딩 존 구축·가드레일 적용을 자동화하고, ★Service Catalog★ 는 승인된 제품만 배포하게 한다.'
  ]},
  { h:'SCP(서비스 제어 정책)', li:[
    'SCP 는 ★권한을 부여하지 않는다★ — 계정이 쓸 수 있는 권한의 ★최대 범위(가드레일)★ 만 정한다.',
    '★관리 계정(Management Account)에는 SCP 가 적용되지 않는다★ — 시험 단골 함정.',
    '실효 권한 = ★SCP ∩ IAM 정책★. IAM 에서 Allow 해도 SCP 가 막으면 거부된다.',
    '전형적 활용 — 특정 리전 사용 금지, CloudTrail 비활성화 금지, 루트 계정 사용 차단.'
  ]},
  { h:'다중 계정 보안 서비스 집계', li:[
    '★CloudTrail 조직 트레일★ · ★Config 애그리게이터★ · ★GuardDuty·Security Hub 위임 관리자★ 로 ★보안 계정에 집중 수집★ 하는 것이 표준 답안.',
    '로그 버킷은 ★별도 계정 + Object Lock★ 으로 두어 침해 시에도 지워지지 않게 한다.'
  ]}
]},

{ s:'s5', no:'5-3', t:'암호화 · 보안 서비스', title:'KMS · Secrets Manager · 위협 탐지 서비스', ref:'05장', body:[
  { h:'KMS 핵심', li:[
    '★KMS 키★ 는 ★리전 종속★ 이다. 다른 리전에서 쓰려면 ★멀티 리전 키★ 를 쓴다.',
    '★AWS 관리형 키★ 는 무료·자동 순환, ★고객 관리형 키★ 는 월 요금이 붙지만 ★키 정책·순환·삭제를 직접 제어★ 한다.',
    '키 삭제는 즉시가 아니라 ★7~30일 대기 기간★ 후에 이뤄진다.',
    '★봉투 암호화(Envelope Encryption)★ — 데이터는 데이터 키로, 데이터 키는 KMS 키로 암호화한다. 4KB 초과 데이터는 이 방식이 전제.',
    '★CloudHSM★ 은 ★전용 하드웨어·고객 단독 관리★ 로, FIPS 140-2 Level 3 등 규정 요구가 있을 때 선택한다.'
  ]},
  { h:'비밀 관리 2종', tb:{ head:['구분','Secrets Manager','Systems Manager 파라미터 스토어'], rows:[
    ['비밀 자동 교체','★지원(RDS 등 통합)★','미지원'],
    ['요금','유료','표준은 ★무료★'],
    ['용도','DB 자격 증명·API 키','설정값·환경 변수·라이선스 키']
  ]}},
  { h:'위협 탐지·보호 서비스 역할 구분 ★혼동 최다★', tb:{ head:['서비스','하는 일'], rows:[
    ['GuardDuty','로그(VPC Flow·CloudTrail·DNS) 분석 기반 ★위협 탐지★'],
    ['Inspector','EC2·컨테이너 이미지·Lambda 의 ★취약점·CVE 스캔★'],
    ['Macie','S3 안의 ★민감정보(PII) 탐지·분류★'],
    ['Detective','탐지된 사건의 ★근본 원인 조사★'],
    ['Security Hub','여러 보안 서비스 결과를 ★통합 대시보드★ 로'],
    ['WAF','L7 웹 공격(SQLi·XSS) 차단 — ALB·CloudFront·API GW 에 부착'],
    ['Shield','★DDoS 방어★ — Standard 무료, Advanced 유료(대응팀 지원·요금 보호)'],
    ['Firewall Manager','조직 전체의 WAF·Shield·SG 규칙 ★일괄 관리★']
  ]}}
]},

{ s:'s5', no:'5-4', t:'모니터링 · 감사', title:'CloudWatch · CloudTrail · Config 역할 구분', ref:'06장', body:[
  { h:'세 서비스 한 줄 구분 ★최빈출★', tb:{ head:['서비스','질문','산출'], rows:[
    ['CloudWatch','★지금 잘 돌아가는가★','지표 · 로그 · 알람 · 대시보드'],
    ['CloudTrail','★누가 무엇을 호출했는가★','API 호출 감사 기록'],
    ['Config','★설정이 규정을 지키는가★','구성 변경 이력 · 규정 준수 평가']
  ]}},
  { h:'CloudWatch 세부', li:[
    '기본 EC2 지표는 ★5분 간격★, ★상세 모니터링★ 을 켜면 1분. ★1분 미만은 고해상도 사용자 지정 지표★.',
    '★메모리 사용률·디스크 사용량은 기본 지표가 아니다★ — ★CloudWatch 에이전트★ 를 설치해야 수집된다. 시험 단골.',
    '★Logs Insights★ 로 로그를 쿼리하고, ★지표 필터★ 로 로그 패턴을 지표·알람으로 승격한다.',
    '★EventBridge(구 CloudWatch Events)★ — 이벤트 패턴·스케줄로 Lambda·SQS·Step Functions 를 트리거하는 이벤트 버스.'
  ]},
  { h:'CloudTrail 세부', li:[
    '관리 이벤트는 기본 기록되고, ★S3 객체 수준·Lambda 호출 같은 데이터 이벤트는 별도로 켜야★ 한다.',
    '콘솔의 이벤트 기록은 ★90일★ 이다 — 장기 보관은 ★S3 로 전달★ 하고 Athena 로 조회한다.',
    '★로그 파일 무결성 검증★ 과 ★조직 트레일★ 이 감사 요구의 표준 답안.',
    '"누가 이 리소스를 삭제했나" → CloudTrail. "언제부터 설정이 이렇게 바뀌었나" → Config.'
  ]},
  { h:'Config 세부', li:[
    '★Config 규칙★ 으로 "EBS 는 반드시 암호화" 같은 기준을 상시 평가하고, ★자동 교정(SSM Automation)★ 을 붙일 수 있다.',
    '★구성 타임라인★ 으로 리소스 설정의 과거 상태를 되짚는다.',
    '조직 전체 집계는 ★애그리게이터★.'
  ]}
]},

{ s:'s5', no:'5-5', t:'복원성 · DR · 디커플링', title:'DR 4전략과 비동기 디커플링', ref:'08장', body:[
  { h:'DR 4전략 ★최빈출★', tb:{ head:['전략','RTO / RPO','상시 실행','비용'], rows:[
    ['백업 및 복원(Backup & Restore)','시간~일','없음','가장 저렴'],
    ['파일럿 라이트(Pilot Light)','수십 분','★핵심(DB)만 상시★','낮음'],
    ['웜 스탠바이(Warm Standby)','분','★축소 규모 전체 스택 상시★','중간'],
    ['다중 사이트 액티브-액티브','거의 0','★양쪽 완전 가동★','가장 비쌈']
  ]}},
  { h:'용어 정리', li:[
    '★RTO(Recovery Time Objective)★ = 얼마나 빨리 복구할 것인가(시간).',
    '★RPO(Recovery Point Objective)★ = 얼마나 최근 데이터까지 살릴 것인가(손실 허용량).',
    'RTO·RPO 를 짧게 요구할수록 비용이 오른다 — "가장 저렴하게" 와 "가장 빠르게" 를 동시에 요구하는 보기는 함정.',
    '"파일럿 라이트 = DB 만 켜 둔다", "웜 스탠바이 = 작게라도 전부 켜 둔다" 로 구분한다.'
  ]},
  { h:'디커플링 서비스', tb:{ head:['서비스','모델','핵심'], rows:[
    ['SQS','큐 — 1:1 작업 분배','표준(최소 1회·순서 미보장) / FIFO(정확히 1회·순서 보장)'],
    ['SNS','펍/섭 — 1:N 팬아웃','주제 구독. SQS·Lambda·HTTP·이메일'],
    ['EventBridge','이벤트 버스 — 규칙 라우팅','SaaS·서비스 이벤트, 스케줄'],
    ['Step Functions','워크플로 오케스트레이션','상태 머신, 재시도·분기·장기 실행']
  ]}},
  { h:'SQS 실무 규칙', li:[
    '★가시성 시간 초과(Visibility Timeout)★ 가 처리 시간보다 짧으면 ★같은 메시지를 다른 소비자가 또 처리★ 한다 — 중복 처리의 대표 원인. 기본 30초.',
    '반복 실패 메시지는 ★DLQ(데드 레터 큐)★ 로 격리해 정상 처리를 막지 않게 한다.',
    '★롱 폴링(최대 20초)★ 으로 빈 응답 요청을 줄여 비용을 낮춘다.',
    '메시지 최대 크기는 256KB — 큰 페이로드는 ★S3에 두고 포인터 전달★.',
    'ASG 를 ★큐 길이(ApproximateNumberOfMessages) 지표★ 로 확장하는 것이 정석 답안.'
  ]}
]},

{ s:'s5', no:'5-6', t:'Well-Architected · 비용', title:'Well-Architected 6필러와 비용 최적화', ref:'00·08장', body:[
  { h:'Well-Architected 6 필러', tb:{ head:['필러','핵심 질문'], rows:[
    ['운영 우수성(Operational Excellence)','자동화·관측·개선 절차가 있는가'],
    ['보안(Security)','최소 권한·암호화·추적이 되는가'],
    ['신뢰성(Reliability)','장애를 견디고 자동 복구되는가'],
    ['성능 효율(Performance Efficiency)','적합한 자원을 적정 규모로 쓰는가'],
    ['비용 최적화(Cost Optimization)','쓰지 않는 비용을 없앴는가'],
    ['지속 가능성(Sustainability)','★2021년 추가★ — 자원·에너지 영향을 줄였는가']
  ]}},
  { h:'비용 최적화 수단', li:[
    '★적정 크기 조정(Right Sizing)★ — CloudWatch 지표로 과대 프로비저닝을 찾아 축소.',
    '★약정 할인★ — 상시 부하는 Savings Plans·RI, 중단 허용 부하는 Spot.',
    '★스토리지 계층화★ — S3 수명 주기, EBS gp2 → gp3, 미사용 EIP·볼륨·스냅샷 정리.',
    '★데이터 전송 비용★ — 아웃바운드 인터넷 전송과 AZ 간 전송이 비용 원천이다. ★CloudFront 캐싱★ 과 ★VPC 엔드포인트★ 로 줄인다.',
    '★서버리스 전환★ — 사용량 기반 과금으로 유휴 비용을 없앤다.'
  ]},
  { h:'비용 관리 도구', tb:{ head:['도구','역할'], rows:[
    ['Cost Explorer','사용량·비용 ★시각화와 예측★'],
    ['AWS Budgets','예산 초과 ★알림·자동 조치★'],
    ['Cost and Usage Report(CUR)','가장 상세한 원천 데이터 — Athena·QuickSight 분석'],
    ['Compute Optimizer','지표 기반 ★인스턴스 타입 추천★'],
    ['Trusted Advisor','비용·성능·보안·내결함성·서비스 한도 ★5개 카테고리 점검★'],
    ['비용 할당 태그','★태그 기반 부서별 비용 배분★ — 활성화해야 리포트에 나온다']
  ]}},
  { h:'문제 풀이 소거법', li:[
    '① ★요구 조건의 핵심어★ 를 찾는다 — 비용 최소 / 운영 부담 최소 / 지연 최소 / 가용성 / 규정 준수.',
    '② ★기술적으로 불가능한 보기★ 를 먼저 지운다(예: Lambda 30분 실행, Gateway 엔드포인트로 SQS 접근).',
    '③ ★요구를 초과하는 과잉 설계★ 를 지운다(단순 로그 조회에 EMR 클러스터).',
    '④ 남은 보기 중 ★관리형·서버리스★ 쪽이 대체로 정답이다 — AWS 는 운영 부담이 적은 답을 선호한다.'
  ]}
]}

];
