/* ============================================================
   정보통신기사 필기 — 학습·퀴즈 데이터
   소스: 02_타자격증_학습자료/정보통신기사_필기/ 과목별 학습자료 5종
         (기본서 「2025 6주 CUT 이패스 정보통신기사 필기」 기반 정리)
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "정보통신기사 필기",
 "brand": "정보통신기사",
 "tag": "정보통신기사 필기 · 한국방송통신전파진흥원",
 "storeKey": "ict",
 "topicUnit": "단원",
 "title": "정보통신기사 필기 — 암기·퀴즈 학습",
 "h1": "정보통신기사 필기",
 "unit": "과목",
 "outUnit": "문항",
 "passRule": {
  "pct": 60,
  "per": 40
 },
 "shuffleChoices": true,
 "full": "정보통신기사 (국가기술자격 · 직무분야 정보통신)",
 "host": "한국방송통신전파진흥원(KCA)",
 "type": "객관식 4지선다 100문항 (과목당 20문항 × 5과목)",
 "time": "150분",
 "pass": "매 과목 40점 이상 + 전 과목 평균 60점 이상",
 "book": "「2025 6주 CUT 이패스 정보통신기사 필기」(권병철 · 이패스코리아)",
 "slogan": "정보통신기사 합격 = 전송(변조·다중화·샤논) + 기기(단말·방송·IoT) + 네트워크(OSI·서브네팅) + 시스템운용(보안·가용성) + 컴퓨터일반·설비기준",
 "paperSpec": [
  {
   "s": "s1",
   "n": 20
  },
  {
   "s": "s2",
   "n": 20
  },
  {
   "s": "s3",
   "n": 20
  },
  {
   "s": "s4",
   "n": 20
  },
  {
   "s": "s5",
   "n": 20
  }
 ],
 "footer": [
  "정보통신기사 필기 / 주관 <b>한국방송통신전파진흥원(KCA)</b> · 5과목 100문항 · 150분 · <b>과목별 40점 이상 + 평균 60점 이상</b>",
  "과목: 정보전송일반 · 정보통신기기 · 정보통신네트워크 · 정보시스템운용 · 컴퓨터일반 및 정보설비기준",
  "데이터 소스: <code>02_타자격증_학습자료/정보통신기사_필기</code> → <code>학습사이트/data.js</code> · 진도·오답노트는 브라우저(localStorage)에만 저장됩니다. ⚠ 문항은 학습자료를 바탕으로 새로 만든 연습 문제이며 실제 기출이 아닙니다."
 ],
 "info": [
  {
   "title": "필기 구성",
   "type": "table",
   "head": [
    "과목",
    "문항"
   ],
   "rows": [
    [
     "1과목 정보전송일반",
     "20문항"
    ],
    [
     "2과목 정보통신기기",
     "20문항"
    ],
    [
     "3과목 정보통신네트워크",
     "20문항"
    ],
    [
     "4과목 정보시스템운용",
     "20문항"
    ],
    [
     "5과목 컴퓨터일반 및 정보설비기준",
     "20문항"
    ]
   ]
  },
  {
   "title": "합격 기준",
   "type": "table",
   "head": [
    "구분",
    "기준"
   ],
   "rows": [
    [
     "과목별",
     "100점 만점 40점 이상 (과락)"
    ],
    [
     "전체",
     "전 과목 평균 60점 이상"
    ]
   ]
  },
  {
   "title": "시행 방식",
   "type": "table",
   "head": [
    "항목",
    "내용"
   ],
   "rows": [
    [
     "시행",
     "연 3회 정기 (시행 일정은 KCA 국가기술자격 공지 확인)"
    ],
    [
     "시험 시간",
     "150분 (2시간 30분)"
    ],
    [
     "실기",
     "필답형 — 필기 합격 후 응시"
    ]
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "정보전송일반",
  "short": "정보전송",
  "out": 20,
  "color": "#0891b2",
  "desc": "신호·주파수 기초부터 샤논/나이퀴스트 용량, 변조(AM·FM·ASK·FSK·PSK·QAM), PCM, 전송매체(UTP·광섬유·Wi-Fi·위성), 다중화·에러 제어까지 — ★최빈출★ 샤논 공식·bps=Baud×log₂M·PCM 4단계·QAM 비트 수·ARQ 3종"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "정보통신기기",
  "short": "통신기기",
  "out": 20,
  "color": "#8b5cf6",
  "desc": "단말(DTE·DCE·모뎀·DSU)→전송(L1~L7 장비·스위칭·라우팅)→교환(회선·메시지·패킷·셀)→VoIP(SIP·RTP)→서버·스토리지(RAID·NAS·SAN) — ★최빈출★ OSI 계층별 장비·패킷 교환·RAID 계산"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "정보통신네트워크",
  "short": "네트워크",
  "out": 20,
  "color": "#f59e0b",
  "desc": "OSI 7계층·TCP/IP, TCP/UDP·3-way, IPv4 서브네팅·CIDR, Ethernet·CSMA, 포트 번호, 이동통신 세대·5G, Wi-Fi·위성, IPv6·QoS·SDN — ★최빈출★ 과목은 OSI 계층별 PDU·장비·프로토콜과 서브넷 호스트 수 계산"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "정보시스템운용",
  "short": "시스템운용",
  "out": 20,
  "color": "#10b981",
  "desc": "CIA·암호·IPsec·방화벽/IDS/IPS / MTBF·MTTR 가용률·Five Nines 계산 / RTO·RPO·DR Site·백업 ★최빈출★ / FCAPS·TMN·SNMP / ITIL·SLA"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "컴퓨터일반 및 정보설비기준",
  "short": "컴퓨터·설비",
  "out": 20,
  "color": "#ef4444",
  "desc": "CPU 레지스터·파이프라인·캐시, 가상메모리·페이지 교체, 자료구조·정렬 복잡도, ★최빈출★ DB ACID·정규화·SQL, 정보통신공사업법·구내통신선로(MDF·IDF·Cat·OM)·접지까지 20문항"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "신호·전송 기초",
  "front": "주기 T와 주파수 f, 파장 λ의 관계는?",
  "key": "T=1/f · λ=c/f",
  "back": "★T = 1/f★, ★λ = c/f★ (c = 3×10⁸ m/s). 예: 3GHz → λ = 0.1m(10cm), 50Hz → T = 20ms",
  "tip": "주파수가 높을수록 파장은 짧아진다 — 반비례 관계"
 },
 {
  "s": "s1",
  "g": "신호·전송 기초",
  "front": "단방향·반이중·전이중 통신 방식을 구분하면?",
  "key": "Simplex·Half·Full",
  "back": "Simplex = 한 방향만(TV·라디오), ★Half-Duplex = 양방향이나 교대★(무전기), Full-Duplex = 양방향 동시(전화)",
  "tip": "무전기는 '양방향'이지만 동시가 아니므로 반이중"
 },
 {
  "s": "s1",
  "g": "신호·전송 기초",
  "front": "dB와 dBm의 정의는?",
  "key": "10log₁₀ 비",
  "back": "dB = ★10 log₁₀(P₂/P₁)★(상대비), dBm = 10 log₁₀(P/1mW)(절대 전력). 1W = 30dBm, 전력 2배 ≈ 3dB, 10배 = 10dB",
  "tip": "전압비는 20log₁₀ — 전력비 10log와 혼동 주의"
 },
 {
  "s": "s1",
  "g": "전송속도·채널용량",
  "front": "샤논(Shannon) 채널 용량 공식은?",
  "key": "C = B·log₂(1+S/N)",
  "back": "★C = B × log₂(1 + S/N)★ [bps] — 잡음이 있는 채널의 이론적 최대 전송속도",
  "tip": "S/N은 dB가 아닌 '배수'로 대입 — 30dB면 1000"
 },
 {
  "s": "s1",
  "g": "전송속도·채널용량",
  "front": "나이퀴스트(Nyquist) 최대 전송속도 공식은?",
  "key": "C = 2B·log₂M",
  "back": "★C = 2B × log₂M★ — 잡음 없는 이상 채널, M = 신호 레벨 수",
  "tip": "샤논=잡음 있음, 나이퀴스트=잡음 없음"
 },
 {
  "s": "s1",
  "g": "전송속도·채널용량",
  "front": "bps와 Baud의 관계는?",
  "key": "bps = Baud×log₂M",
  "back": "★bps = Baud × log₂M★. Baud = 초당 심볼(신호 변화) 수. 16-QAM 1200Baud → 4800bps",
  "tip": "2진(M=2)일 때만 bps = Baud"
 },
 {
  "s": "s1",
  "g": "전송속도·채널용량",
  "front": "SNR 30dB, 40dB는 각각 몇 배인가?",
  "key": "1000배·10000배",
  "back": "SNR(dB) = 10 log₁₀(S/N) → ★30dB = 1000배, 40dB = 10000배★, 20dB = 100배",
  "tip": "dB 값을 10으로 나눈 수가 0의 개수"
 },
 {
  "s": "s1",
  "g": "아날로그·디지털 변조",
  "front": "AM·FM·PM의 차이는?",
  "key": "진폭·주파수·위상",
  "back": "AM = 반송파 진폭 변화(회로 단순·잡음 취약), ★FM = 주파수 변화(잡음 강·대역폭 넓음)★, PM = 위상 변화",
  "tip": "FM의 대가는 넓은 대역폭(카슨 법칙)"
 },
 {
  "s": "s1",
  "g": "아날로그·디지털 변조",
  "front": "FM의 대역폭(카슨 법칙)은?",
  "key": "BW = 2(Δf + fm)",
  "back": "★BW ≈ 2(Δf + fm)★, 변조지수 β = Δf/fm. 예: Δf 75kHz, fm 15kHz → 180kHz",
  "tip": "β가 클수록 대역폭↑·잡음 개선↑"
 },
 {
  "s": "s1",
  "g": "아날로그·디지털 변조",
  "front": "ASK·FSK·PSK·QAM은 각각 무엇을 바꾸는가?",
  "key": "진폭·주파수·위상·진폭+위상",
  "back": "ASK = 진폭, FSK = 주파수, PSK = 위상, ★QAM = 진폭 + 위상 동시★",
  "tip": "QAM을 '주파수+위상'으로 바꾼 보기가 단골 함정"
 },
 {
  "s": "s1",
  "g": "아날로그·디지털 변조",
  "front": "QPSK·8PSK·16/64/256-QAM의 심볼당 비트 수는?",
  "key": "log₂M",
  "back": "★log₂M★: QPSK 2, 8PSK 3, 16-QAM 4, 64-QAM 6, 256-QAM 8, 1024-QAM 10",
  "tip": "차수↑ → 속도↑, 신호점 간격↓ → 잡음 내성↓"
 },
 {
  "s": "s1",
  "g": "PCM·펄스변조",
  "front": "PCM 4단계를 순서대로 말하면?",
  "key": "표·양·부·복",
  "back": "★표본화 → 양자화 → 부호화 → 복호화★ (송신: 표·양·부 / 수신: 복호화 후 저역통과 필터로 복원)",
  "tip": "양자화 잡음은 '양자화' 단계에서 발생"
 },
 {
  "s": "s1",
  "g": "PCM·펄스변조",
  "front": "표본화 정리(나이퀴스트 표본화)의 조건은?",
  "key": "fs ≥ 2fmax",
  "back": "★fs ≥ 2 × fmax★ — 미달 시 에일리어싱(겹침 왜곡). 음성 4kHz → 8kHz 표본화",
  "tip": "표본화 주기 Ts = 1/fs = 125μs(8kHz)"
 },
 {
  "s": "s1",
  "g": "PCM·펄스변조",
  "front": "전화 음성 PCM 1채널(DS0)의 전송속도는?",
  "key": "64kbps",
  "back": "8,000 표본/s × 8bit = ★64kbps★",
  "tip": "8bit → 2⁸ = 256 양자화 레벨"
 },
 {
  "s": "s1",
  "g": "PCM·펄스변조",
  "front": "양자화 잡음을 줄이는 방법은?",
  "key": "비트 수↑·비균일 양자화",
  "back": "★양자화 비트 수 증가★(1bit당 약 6dB 개선), 비균일 양자화(압신: μ-law·A-law)로 작은 신호 SQNR 개선",
  "tip": "표본화 주파수를 올려도 양자화 잡음 자체는 줄지 않는다"
 },
 {
  "s": "s1",
  "g": "PCM·펄스변조",
  "front": "DM·DPCM·ADPCM의 차이는?",
  "key": "차분 부호화",
  "back": "DM = 차분을 ★1bit★로(경사 과부하·입상 잡음), DPCM = 예측값과 차분을 다비트로, ADPCM = 양자화 스텝을 적응적으로 조정(32kbps 음성)",
  "tip": "DM의 두 잡음: 경사 과부하(급변) vs 입상(평탄)"
 },
 {
  "s": "s1",
  "g": "동기·전송방식·선로부호",
  "front": "비동기식과 동기식 전송의 차이는?",
  "key": "문자 vs 블록",
  "back": "비동기 = ★문자 단위★ Start·Stop 비트, 저속·간단 / 동기 = ★블록 단위★ SYN·플래그(HDLC), 고속",
  "tip": "비동기식은 문자 사이 유휴 시간이 불규칙해도 된다"
 },
 {
  "s": "s1",
  "g": "동기·전송방식·선로부호",
  "front": "맨체스터·AMI·HDB3·B8ZS 선로부호의 특징은?",
  "key": "선로부호",
  "back": "맨체스터 = 비트 중간 천이(클록 포함, 10BASE-T), AMI = 1을 +/- 교대(DC 억제), ★HDB3 = 0 4개 연속 대체(E1)★, B8ZS = 0 8개 연속 대체(T1)",
  "tip": "HDB3는 4, B8ZS는 8 — 숫자 맞바꾸기 함정"
 },
 {
  "s": "s1",
  "g": "전송매체·무선·위성",
  "front": "광섬유의 구조와 전송 원리는?",
  "key": "코어·클래딩·전반사",
  "back": "코어(굴절률 큼) + 클래딩(굴절률 작음) + 버퍼, ★전반사★(임계각 이상 입사)로 빛을 가둠",
  "tip": "코어 굴절률 > 클래딩 굴절률이어야 전반사 성립"
 },
 {
  "s": "s1",
  "g": "전송매체·무선·위성",
  "front": "SMF와 MMF의 차이는?",
  "key": "단일 vs 다중 모드",
  "back": "★SMF = 1310·1550nm, 장거리·광대역, 모드 분산 없음★ / MMF = 850·1300nm, 단거리, 모드 분산 있음(GI형이 SI형보다 분산 적음)",
  "tip": "1550nm가 손실 최소(약 0.2dB/km)"
 },
 {
  "s": "s1",
  "g": "전송매체·무선·위성",
  "front": "UTP 카테고리별 속도·거리는?",
  "key": "Cat5e·6·6a·7·8",
  "back": "Cat5e 1Gbps·100m, Cat6 1Gbps·100m(10G는 55m), ★Cat6a 10Gbps·100m★, Cat7 10Gbps·100m(STP), Cat8 40Gbps·30m",
  "tip": "Cat6의 10Gbps는 55m까지만"
 },
 {
  "s": "s1",
  "g": "전송매체·무선·위성",
  "front": "Wi-Fi 4·5·6·7의 IEEE 표준과 핵심 기술은?",
  "key": "n·ac·ax·be",
  "back": "Wi-Fi 4 = 802.11n(MIMO), Wi-Fi 5 = 802.11ac(MU-MIMO·256QAM), ★Wi-Fi 6 = 802.11ax(OFDMA·1024QAM)★, Wi-Fi 7 = 802.11be(4096QAM·MLO)",
  "tip": "11b·g는 2.4GHz, 11a는 5GHz"
 },
 {
  "s": "s1",
  "g": "전송매체·무선·위성",
  "front": "GEO·MEO·LEO 위성 궤도의 특징은?",
  "key": "35,786km·GPS·Starlink",
  "back": "★GEO 35,786km★(지구와 동기, 3기로 전 지구 커버, 지연 큼), MEO 5,000~20,000km(GPS·갈릴레오), LEO 500~2,000km(Starlink·저지연)",
  "tip": "GEO 왕복(지상→위성→지상) 지연 약 0.25초"
 },
 {
  "s": "s1",
  "g": "다중화·다중접속",
  "front": "FDM·TDM·CDM·WDM·OFDM 다중화를 구분하면?",
  "key": "주파수·시간·코드·파장·직교",
  "back": "FDM = 주파수 분할(보호대역), TDM = 시간 분할(STDM 고정·★ATDM 동적★), CDM = 코드(PN), WDM = 광 파장, OFDM = 직교 부반송파(다중경로 강함)",
  "tip": "WDM은 광섬유, OFDM은 무선 — 혼동 금지"
 },
 {
  "s": "s1",
  "g": "다중화·다중접속",
  "front": "MIMO의 세 가지 이득은?",
  "key": "공간다중화·다이버시티·빔포밍",
  "back": "★공간 다중화(용량↑)★, 다이버시티(신뢰도↑), 빔포밍(방향성 이득). SU-MIMO·MU-MIMO·Massive MIMO(수십~수백 안테나, 5G)",
  "tip": "MU-MIMO = 다중 사용자, Massive = 대량 안테나"
 },
 {
  "s": "s1",
  "g": "에러·흐름 제어",
  "front": "FEC와 BEC(ARQ)의 차이는?",
  "key": "수신측 정정 vs 재전송",
  "back": "★FEC = 수신 측이 스스로 정정, 재전송 없음(실시간·위성)★ / BEC = 오류 검출 후 재전송 요청(ARQ). HARQ = FEC + ARQ(LTE·5G)",
  "tip": "FEC 부호: 해밍·BCH·RS·터보·LDPC·Polar"
 },
 {
  "s": "s1",
  "g": "에러·흐름 제어",
  "front": "해밍 거리 d와 검출·정정 능력의 관계는?",
  "key": "검출 d-1·정정 ⌊(d-1)/2⌋",
  "back": "★검출 = d − 1, 정정 = ⌊(d − 1)/2⌋★. d=3 → 2비트 검출·1비트 정정",
  "tip": "해밍 (7,4) 부호는 d=3 → 1비트 정정"
 },
 {
  "s": "s1",
  "g": "에러·흐름 제어",
  "front": "ARQ 3종의 재전송 방식은?",
  "key": "S&W·GBN·SR",
  "back": "Stop-and-Wait = 1프레임씩 ACK, ★Go-Back-N = 오류 프레임부터 이후 전부★, Selective Repeat = 오류 프레임만",
  "tip": "SR은 수신 버퍼 필요, GBN은 버퍼 단순"
 },
 {
  "s": "s2",
  "g": "단말 장치",
  "front": "DTE와 DCE는 각각 어느 쪽 장비인가?",
  "key": "DTE=사용자 측 / DCE=회선 측",
  "back": "DTE(Data Terminal Equipment)는 ★PC·단말·서버 등 사용자 측★, DCE(Data Circuit-terminating Equipment)는 ★모뎀·DSU·CSU 등 통신 회선 측★ 종단 장치이다.",
  "tip": "모뎀은 DTE가 아니라 DCE — '단말기'라는 말에 속지 말 것"
 },
 {
  "s": "s2",
  "g": "단말 장치",
  "front": "대표적인 DTE-DCE 인터페이스 표준은?",
  "key": "RS-232(EIA-232)·V.24·V.35·X.21",
  "back": "★EIA-232(구 RS-232)★·ITU-T V.24(회로 기능 정의)·V.35(고속 동기)·X.21(공중 데이터망 디지털 접속). X.25는 패킷 교환망 DTE-DCE 접속 규격.",
  "tip": "X.25는 물리 인터페이스가 아니라 패킷망 접속 프로토콜 묶음"
 },
 {
  "s": "s2",
  "g": "단말 장치",
  "front": "RS-232 주요 제어 신호 RTS·CTS·DTR·DSR의 의미는?",
  "key": "송신요구·송신허가·단말준비·장치준비",
  "back": "RTS(Request To Send, 송신 요구)·CTS(Clear To Send, 송신 허가)·DTR(Data Terminal Ready, DTE 준비)·DSR(Data Set Ready, DCE 준비). TD/RD는 송·수신 데이터, DCD는 반송파 검출, RI는 링 지시.",
  "tip": "★RTS/CTS = 하드웨어 흐름 제어★ 쌍으로 기억"
 },
 {
  "s": "s2",
  "g": "단말 장치",
  "front": "다중화기(MUX)와 집중화기(Concentrator)의 차이는?",
  "key": "고정 할당 vs 동적 할당",
  "back": "MUX는 ★입력 채널 용량 합 = 출력 회선 용량★(정적 할당), 집중화기는 ★입력 합 ≥ 출력★으로 버퍼링·동적 할당하는 장치이다.",
  "tip": "통계적 TDM(STDM)은 동적 할당이라 집중화기와 성격이 유사"
 },
 {
  "s": "s2",
  "g": "단말 장치",
  "front": "동기식 TDM과 통계적 TDM(STDM)의 차이는?",
  "key": "고정 슬롯 vs 주소 붙은 동적 슬롯",
  "back": "동기식 TDM은 ★데이터가 없어도 슬롯을 고정 배정★해 낭비가 생기고, STDM은 ★보낼 데이터가 있는 채널에만 슬롯 배정★(주소 정보 필요)해 효율이 높다.",
  "tip": "STDM = 비동기식 TDM·지능형 TDM 같은 말"
 },
 {
  "s": "s2",
  "g": "단말 장치",
  "front": "코덱(Codec)과 모뎀의 변환 방향 차이는?",
  "key": "코덱 A→D / 모뎀 D→A",
  "back": "코덱은 ★아날로그 신호(음성·영상)를 디지털로 부호화★(PCM 등), 모뎀은 ★디지털 데이터를 아날로그 반송파로 변조★한다.",
  "tip": "방향이 반대 — 문제에서 '음성을 디지털로' 하면 코덱"
 },
 {
  "s": "s2",
  "g": "모뎀·DSU·CSU",
  "front": "ITU-T V 시리즈 모뎀 표준 속도를 순서대로?",
  "key": "V.21 300 → V.22 1200 → V.32 9600 → V.34 33.6k → V.90 56k",
  "back": "V.21(300bps)·V.22(1,200bps)·V.32(9,600bps)·V.34(33.6kbps)·V.90(하향 56kbps)·★V.92(56k 계열 최종, 상향 개선)★.",
  "tip": "56k는 하향 기준 — 상향은 V.90 33.6k, V.92 48k"
 },
 {
  "s": "s2",
  "g": "모뎀·DSU·CSU",
  "front": "ADSL과 VDSL의 공통점과 속도 특징은?",
  "key": "비대칭·전화선 공용",
  "back": "둘 다 ★하향이 상향보다 빠른 비대칭★ DSL. ADSL 하향 약 8Mbps·상향 약 1Mbps, VDSL 하향 약 52Mbps·상향 약 16Mbps(거리 짧을수록 고속). SDSL은 대칭.",
  "tip": "'A'symmetric = 비대칭, 'S'ymmetric = 대칭"
 },
 {
  "s": "s2",
  "g": "모뎀·DSU·CSU",
  "front": "DSU의 역할은?",
  "key": "디지털↔디지털 신호 변환",
  "back": "DSU(Data Service Unit)는 DTE의 ★단극성 디지털 신호를 디지털 회선에 맞는 양극성 등 신호로 변환★하는 가입자 측 DCE(베이스밴드 전송).",
  "tip": "모뎀(D↔A)과 구분 — DSU는 변조 없음"
 },
 {
  "s": "s2",
  "g": "모뎀·DSU·CSU",
  "front": "CSU의 역할은?",
  "key": "디지털 회선(T1/E1) 종단·진단",
  "back": "CSU(Channel Service Unit)는 ★통신 사업자 디지털 회선 측 종단★으로 프레임 동기·회선 보호·루프백 시험 등 ★진단·테스트★ 기능을 수행. 보통 CSU/DSU 일체형.",
  "tip": "DSU = 단말 쪽, CSU = 회선 쪽"
 },
 {
  "s": "s2",
  "g": "LAN 장비·스위치",
  "front": "OSI 계층별 대표 장비는?",
  "key": "L1 허브 / L2 스위치 / L3 라우터 / L4·L7 스위치",
  "back": "★L1 Repeater·Hub, L2 Bridge·Switch, L3 Router·L3 Switch, L4 L4 Switch(LB), L7 L7 Switch·Proxy·WAF★, Gateway는 상위 계층 프로토콜 변환.",
  "tip": "브리지를 L1로, 라우터를 L2로 바꿔 놓는 함정 빈출"
 },
 {
  "s": "s2",
  "g": "LAN 장비·스위치",
  "front": "허브·스위치·라우터의 충돌/브로드캐스트 도메인 분리 능력은?",
  "key": "스위치=충돌 분리, 라우터=브로드캐스트 분리",
  "back": "허브는 ★전 포트가 하나의 충돌·브로드캐스트 도메인★, 스위치·브리지는 ★포트마다 충돌 도메인 분리★(브로드캐스트는 그대로), 라우터는 ★브로드캐스트 도메인까지 분리★.",
  "tip": "VLAN을 쓰면 스위치도 브로드캐스트 도메인 분리 가능"
 },
 {
  "s": "s2",
  "g": "LAN 장비·스위치",
  "front": "스위칭 방식 3가지는?",
  "key": "Store-and-Forward·Cut-Through·Fragment-Free",
  "back": "Store-and-Forward: ★프레임 전체 수신 후 CRC 검사★ 뒤 전달(신뢰성↑·지연↑). Cut-Through: ★목적지 MAC만 읽고 즉시 전달★(지연 최소·오류 미검사). Fragment-Free: ★첫 64바이트 수신 후 전달★(충돌 조각 제거).",
  "tip": "64바이트 = 이더넷 최소 프레임 길이 → 충돌 조각 판별 기준"
 },
 {
  "s": "s2",
  "g": "LAN 장비·스위치",
  "front": "VLAN과 IEEE 802.1Q는?",
  "key": "논리적 브로드캐스트 도메인 분리·태깅",
  "back": "VLAN은 물리 위치와 무관하게 ★스위치를 논리적으로 분할해 브로드캐스트 도메인 분리★. 802.1Q는 트렁크에서 ★4바이트 태그(VLAN ID 12비트)★를 삽입하는 표준.",
  "tip": "VLAN 간 통신은 라우터나 L3 스위치 필요"
 },
 {
  "s": "s2",
  "g": "LAN 장비·스위치",
  "front": "STP의 목적과 관련 표준은?",
  "key": "L2 루프 방지 — 802.1D·RSTP 802.1w·MSTP 802.1s",
  "back": "STP(Spanning Tree Protocol)는 ★BPDU를 교환해 루트 브리지를 선출하고 중복 경로 포트를 Blocking★하여 브로드캐스트 스톰·루프를 막는다. RSTP는 빠른 수렴, MSTP는 VLAN 그룹별 트리.",
  "tip": "VTP는 VLAN 정보 동기화 — STP와 혼동 금지"
 },
 {
  "s": "s2",
  "g": "라우터·라우팅",
  "front": "라우터의 핵심 기능은?",
  "key": "L3·IP 기반 최적 경로 결정",
  "back": "라우팅 테이블을 참조해 ★서로 다른 네트워크 간 패킷의 최적 경로를 결정·전달★. 부가 기능으로 NAT·DHCP·ACL(패킷 필터링)을 수행한다.",
  "tip": "같은 네트워크 내 전달은 스위치, 다른 네트워크 간은 라우터"
 },
 {
  "s": "s2",
  "g": "라우터·라우팅",
  "front": "Distance Vector와 Link State 라우팅 차이는?",
  "key": "Bellman-Ford vs Dijkstra",
  "back": "DV는 ★이웃에게 거리(홉)·방향만 주기적으로 전달★(RIP·Bellman-Ford, 느린 수렴·Count to Infinity), LS는 ★전체 토폴로지(LSA)로 최단 경로 계산★(OSPF·IS-IS·Dijkstra, 빠른 수렴).",
  "tip": "BGP는 Path Vector — 둘 다 아님"
 },
 {
  "s": "s2",
  "g": "라우터·라우팅",
  "front": "RIP·OSPF·BGP 핵심 수치는?",
  "key": "RIP 15홉·UDP 520 / OSPF IP 89·Area 0 / BGP TCP 179",
  "back": "RIP: ★최대 15홉(16=도달 불가)★·30초 주기 갱신·UDP 520. OSPF: Cost 메트릭·★Area 0 백본★·IP 프로토콜 89. BGP: ★AS 간 Path Vector·TCP 179★.",
  "tip": "IGP=RIP·OSPF·EIGRP·IS-IS, EGP=BGP"
 },
 {
  "s": "s2",
  "g": "교환 방식",
  "front": "회선·메시지·패킷 교환의 핵심 차이는?",
  "key": "전용 경로 / 전체 축적 / 분할 축적",
  "back": "회선 교환은 ★호 설정 후 전용 경로 독점★(실시간·고정 대역), 메시지 교환은 ★메시지 전체를 축적 후 전달★(지연 큼), 패킷 교환은 ★일정 크기 패킷으로 분할해 축적 후 전달★(회선 공유·효율↑).",
  "tip": "메시지·패킷 모두 Store-and-Forward, 회선 교환은 아님"
 },
 {
  "s": "s2",
  "g": "교환 방식",
  "front": "데이터그램과 가상 회선 방식 차이는?",
  "key": "비연결·개별 경로 vs 연결형·고정 경로",
  "back": "데이터그램은 ★호 설정 없이 패킷마다 독립 경로★(순서 뒤바뀜 가능·IP/UDP), 가상 회선은 ★논리적 연결 설정 후 동일 경로로 순서대로 전달★(X.25·Frame Relay·ATM).",
  "tip": "짧은 메시지는 데이터그램, 긴 연속 전송은 가상 회선 유리"
 },
 {
  "s": "s2",
  "g": "교환 방식",
  "front": "ATM 셀의 구조는?",
  "key": "53바이트 = 헤더 5 + 페이로드 48",
  "back": "ATM은 ★고정 길이 53바이트 셀★(헤더 5·정보 48)로 교환하는 셀 교환. 헤더에 ★VPI·VCI★로 가상 경로·채널 식별, AAL이 상위 데이터를 셀로 분할.",
  "tip": "가변 길이가 아니라 '고정' — 하드웨어 고속 교환의 근거"
 },
 {
  "s": "s2",
  "g": "VoIP·전화 교환",
  "front": "SIP와 H.323의 차이는?",
  "key": "IETF·텍스트 vs ITU-T·바이너리",
  "back": "SIP는 ★IETF 표준·HTTP 유사 텍스트 기반★ 세션 제어(UA·Proxy·Registrar·Redirect), H.323은 ★ITU-T 표준·ASN.1 바이너리★ 우산형 규격(Gatekeeper·Gateway·MCU).",
  "tip": "Gatekeeper는 H.323, Registrar는 SIP 구성요소"
 },
 {
  "s": "s2",
  "g": "VoIP·전화 교환",
  "front": "SIP 주요 메서드 6가지는?",
  "key": "INVITE·ACK·BYE·CANCEL·REGISTER·OPTIONS",
  "back": "★INVITE(세션 초대)·ACK(최종 응답 확인)·BYE(종료)·CANCEL(진행 중 요청 취소)·REGISTER(위치 등록)·OPTIONS(능력 조회)★. 응답은 1xx~6xx(180 Ringing·200 OK).",
  "tip": "통화 종료는 BYE, 걸기 전 취소는 CANCEL"
 },
 {
  "s": "s2",
  "g": "VoIP·전화 교환",
  "front": "RTP·RTCP·SRTP의 역할은?",
  "key": "미디어 전송 / 품질 보고 / 암호화",
  "back": "RTP는 ★UDP 위 실시간 음성·영상 전송(순서번호·타임스탬프)★, RTCP는 ★손실·지터 등 품질 통계 보고★, SRTP는 RTP 암호화·무결성 보호.",
  "tip": "RTP 자체는 QoS를 보장하지 않음 — 측정·보고만"
 },
 {
  "s": "s2",
  "g": "서버·가상화·HA",
  "front": "Type 1과 Type 2 하이퍼바이저 차이는?",
  "key": "베어메탈 vs 호스트 OS 위",
  "back": "Type 1은 ★하드웨어 위에 직접 설치★(ESXi·Hyper-V·Xen·KVM, 서버용·고성능), Type 2는 ★호스트 OS 위 애플리케이션으로 동작★(VirtualBox·VMware Workstation, 개인용).",
  "tip": "오버헤드는 Type 2가 더 큼"
 },
 {
  "s": "s2",
  "g": "서버·가상화·HA",
  "front": "가용성(Availability) 공식은?",
  "key": "MTBF / (MTBF + MTTR)",
  "back": "가용도 = ★MTBF ÷ (MTBF + MTTR)★. MTBF(평균 고장 간격)↑, MTTR(평균 수리 시간)↓일수록 가용성 상승. 99.999%(Five Nines)는 연간 약 5.26분 중단.",
  "tip": "분모에 MTTR을 더하는 것 잊지 말기"
 },
 {
  "s": "s2",
  "g": "스토리지·RAID",
  "front": "DAS·NAS·SAN의 접근 단위와 프로토콜은?",
  "key": "DAS 직접 / NAS 파일·NFS·SMB / SAN 블록·FC·iSCSI",
  "back": "DAS는 ★서버에 직접 연결★(SATA·SAS), NAS는 ★IP망 파일 단위 공유★(NFS·SMB/CIFS·AFP), SAN은 ★전용망 블록 단위 접근★(FC·iSCSI·FCoE).",
  "tip": "iSCSI는 IP를 쓰지만 블록 단위 → SAN 계열"
 },
 {
  "s": "s2",
  "g": "스토리지·RAID",
  "front": "RAID 0·1·5·6·10의 특징과 최소 디스크 수는?",
  "key": "0 스트라이핑 / 1 미러 / 5 분산패리티 / 6 이중패리티 / 10 미러+스트라이프",
  "back": "RAID 0(2개·중복 없음), RAID 1(2개·용량 50%), ★RAID 5(3개·N-1 용량·1개 고장 허용)★, ★RAID 6(4개·N-2 용량·2개 고장 허용)★, RAID 10(4개·용량 50%·고성능).",
  "tip": "RAID 3·4는 전용 패리티 디스크 → 병목"
 },
 {
  "s": "s3",
  "g": "OSI·TCP/IP 계층",
  "front": "OSI 7계층을 상위부터 순서대로 말하면?",
  "key": "응표세전네데물",
  "back": "★응용-표현-세션-전송-네트워크-데이터링크-물리★ (L7→L1)",
  "tip": "하위부터는 '물데네전세표응' — 문제의 기준 방향 확인"
 },
 {
  "s": "s3",
  "g": "OSI·TCP/IP 계층",
  "front": "OSI 계층별 PDU(데이터 단위)는?",
  "key": "Data·Segment·Packet·Frame·Bit",
  "back": "L5~7 ★Data★ · L4 ★Segment★ · L3 ★Packet★ · L2 ★Frame★ · L1 ★Bit★",
  "tip": "UDP의 L4 단위는 Datagram이라고도 부름"
 },
 {
  "s": "s3",
  "g": "OSI·TCP/IP 계층",
  "front": "계층별 대표 네트워크 장비는?",
  "key": "허브 L1·스위치 L2·라우터 L3",
  "back": "L1 ★허브·리피터★ / L2 ★스위치·브리지★ / L3 ★라우터★ / L4 ★L4 스위치★ / L7 게이트웨이",
  "tip": "허브는 충돌 도메인을 나누지 못함, 스위치는 포트마다 분리"
 },
 {
  "s": "s3",
  "g": "OSI·TCP/IP 계층",
  "front": "TCP/IP 4계층과 OSI 대응은?",
  "key": "응용·전송·인터넷·네트워크접근",
  "back": "응용=L5·6·7 / 전송=L4 / ★인터넷=L3★ / 네트워크 접근=L1·L2",
  "tip": "Kurose 5계층은 Link와 Physical을 분리"
 },
 {
  "s": "s3",
  "g": "TCP·UDP",
  "front": "TCP 3-way Handshake 순서는?",
  "key": "SYN → SYN-ACK → ACK",
  "back": "① C→S ★SYN(seq=x)★ ② S→C ★SYN-ACK(seq=y, ack=x+1)★ ③ C→S ★ACK(ack=y+1)★",
  "tip": "ack 번호는 '다음에 받을 순서번호' = 상대 seq+1"
 },
 {
  "s": "s3",
  "g": "TCP·UDP",
  "front": "TCP 연결 종료(4-way)의 흐름은?",
  "key": "FIN·ACK·FIN·ACK",
  "back": "능동 종료측 ★FIN★ → 상대 ★ACK★ → 상대 ★FIN★ → 능동 종료측 ★ACK★(이후 TIME_WAIT)",
  "tip": "연결 설정은 3번, 종료는 4번 — 반이중 종료(half-close) 때문"
 },
 {
  "s": "s3",
  "g": "TCP·UDP",
  "front": "TCP 헤더의 6개 기본 플래그는?",
  "key": "URG·ACK·PSH·RST·SYN·FIN",
  "back": "★URG 긴급·ACK 확인·PSH 즉시전달·RST 강제재설정·SYN 연결요청·FIN 종료★",
  "tip": "RST는 정상 종료가 아니라 비정상 강제 끊기"
 },
 {
  "s": "s3",
  "g": "TCP·UDP",
  "front": "TCP와 UDP의 핵심 차이는?",
  "key": "연결형 신뢰 vs 비연결 고속",
  "back": "TCP ★연결형·신뢰성·순서·흐름/혼잡제어·헤더 20B★ / UDP ★비연결·무확인·헤더 8B★",
  "tip": "DNS 질의·DHCP·VoIP·TFTP는 UDP"
 },
 {
  "s": "s3",
  "g": "TCP·UDP",
  "front": "TCP 혼잡 제어 4가지 기법은?",
  "key": "SS·CA·FR·FR",
  "back": "★Slow Start(지수 증가)·Congestion Avoidance(선형 증가)·Fast Retransmit(3중복 ACK)·Fast Recovery★ — 전체 원리 AIMD",
  "tip": "타임아웃이면 cwnd를 1 MSS로 리셋"
 },
 {
  "s": "s3",
  "g": "IPv4·서브네팅",
  "front": "서브넷의 사용 가능 호스트 수 공식은?",
  "key": "2^(32-n) - 2",
  "back": "★호스트 수 = 2^(32-n) − 2★ (네트워크 주소·브로드캐스트 주소 제외) — /26=62, /27=30, /28=14",
  "tip": "/30은 2개 → 점대점 링크용"
 },
 {
  "s": "s3",
  "g": "IPv4·서브네팅",
  "front": "IPv4 사설 주소 대역 3가지는?",
  "key": "10/8·172.16/12·192.168/16",
  "back": "★10.0.0.0/8 · 172.16.0.0/12(172.16~172.31) · 192.168.0.0/16★ — 169.254.0.0/16은 APIPA",
  "tip": "172.32.x.x는 사설이 아니다"
 },
 {
  "s": "s3",
  "g": "IPv4·서브네팅",
  "front": "IPv4 클래스별 첫 옥텟 범위는?",
  "key": "A 0~127·B 128~191·C 192~223",
  "back": "A ★0~127★(/8) · B ★128~191★(/16) · C ★192~223★(/24) · D 224~239 멀티캐스트 · E 240~255 실험",
  "tip": "127.x는 루프백으로 예약"
 },
 {
  "s": "s3",
  "g": "IPv4·서브네팅",
  "front": "NAT 3종류의 차이는?",
  "key": "Static·Dynamic·PAT",
  "back": "Static ★1:1 고정★ / Dynamic 주소 풀에서 동적 1:1 / ★PAT(NAPT) 포트 번호로 N:1★",
  "tip": "가정용 공유기는 PAT"
 },
 {
  "s": "s3",
  "g": "IPv4·서브네팅",
  "front": "ARP·RARP·ICMP·IGMP의 역할은?",
  "key": "주소변환·오류제어·그룹관리",
  "back": "★ARP IP→MAC★ / RARP MAC→IP(구식) / ★ICMP 오류·진단(ping·traceroute)★ / IGMP 멀티캐스트 그룹 관리",
  "tip": "IPv6에서는 ARP 대신 NDP(ICMPv6)"
 },
 {
  "s": "s3",
  "g": "LAN·WAN",
  "front": "Ethernet 프레임 구성과 크기는?",
  "key": "Preamble~FCS, 64~1518B",
  "back": "Preamble 7+SFD 1 / ★목적지 MAC 6·출발지 MAC 6★ / Type 2 / ★Data 46~1500★ / FCS 4(CRC-32) → 프레임 ★64~1518B★",
  "tip": "최소·최대 프레임 길이에 프리앰블 8B는 포함하지 않음"
 },
 {
  "s": "s3",
  "g": "LAN·WAN",
  "front": "CSMA/CD와 CSMA/CA의 차이는?",
  "key": "충돌 감지 vs 충돌 회피",
  "back": "★CD = 유선 Ethernet(802.3) 충돌 감지 후 재밍·백오프★ / ★CA = 무선 Wi-Fi(802.11) IFS·RTS/CTS로 회피★",
  "tip": "무선은 송신 중 충돌 감지가 어려워 CA 사용"
 },
 {
  "s": "s3",
  "g": "LAN·WAN",
  "front": "주요 IEEE 802 표준 번호는?",
  "key": "802.3·802.11·802.15·802.16",
  "back": "★802.3 Ethernet★ · 802.4 Token Bus · 802.5 Token Ring · ★802.11 무선LAN★ · 802.15 WPAN · 802.16 WiMAX",
  "tip": "802.15.4 = Zigbee 물리/MAC 기반"
 },
 {
  "s": "s3",
  "g": "LAN·WAN",
  "front": "MPLS의 핵심 개념은?",
  "key": "Label Switching·L2.5",
  "back": "IP 대신 ★짧은 라벨로 고속 스위칭★, L2와 L3 사이 ★L2.5★ / LER(가장자리)·LSR(코어)·LSP(경로)·FEC(전달 등가 클래스)",
  "tip": "MPLS는 사업자망, SD-WAN은 인터넷+중앙 정책"
 },
 {
  "s": "s3",
  "g": "응용 프로토콜",
  "front": "주요 응용 프로토콜 포트 번호는?",
  "key": "FTP 20/21·SSH 22·Telnet 23·SMTP 25·DNS 53",
  "back": "★FTP 20/21 · SSH 22 · Telnet 23 · SMTP 25 · DNS 53 · DHCP 67/68 · HTTP 80 · POP3 110 · NTP 123 · IMAP 143 · SNMP 161/162 · HTTPS 443★",
  "tip": "FTP 20은 데이터, 21은 제어"
 },
 {
  "s": "s3",
  "g": "응용 프로토콜",
  "front": "DHCP 주소 할당 4단계는?",
  "key": "DORA",
  "back": "★Discover → Offer → Request → Acknowledge★ (UDP 서버 67·클라이언트 68)",
  "tip": "Discover는 브로드캐스트로 전송"
 },
 {
  "s": "s3",
  "g": "응용 프로토콜",
  "front": "HTTP/2와 HTTP/3의 차이는?",
  "key": "멀티플렉싱 vs QUIC",
  "back": "HTTP/2 ★TCP 위 멀티플렉싱·HPACK 헤더 압축·서버 푸시★ / HTTP/3 ★QUIC(UDP)·0-RTT·HOL 블로킹 완화★",
  "tip": "QUIC는 TCP가 아니라 UDP 기반"
 },
 {
  "s": "s3",
  "g": "이동통신·5G",
  "front": "이동통신 세대별 대표 기술은?",
  "key": "AMPS·GSM/CDMA·WCDMA·LTE·NR",
  "back": "1G ★AMPS 아날로그★ · 2G ★GSM·CDMA 디지털·SMS★ · 3G WCDMA · 4G ★LTE OFDMA·MIMO★ · 5G ★NR★",
  "tip": "디지털 전환은 2G부터"
 },
 {
  "s": "s3",
  "g": "이동통신·5G",
  "front": "5G 3대 서비스 시나리오는?",
  "key": "eMBB·URLLC·mMTC",
  "back": "★eMBB 초광대역★ · ★URLLC 초저지연(1ms)·고신뢰★ · ★mMTC 대규모 IoT 연결★",
  "tip": "자율주행·원격수술 = URLLC"
 },
 {
  "s": "s3",
  "g": "이동통신·5G",
  "front": "LTE 상·하향 다중접속 방식은?",
  "key": "하향 OFDMA·상향 SC-FDMA",
  "back": "하향 ★OFDMA★ / 상향 ★SC-FDMA★(PAPR 낮아 단말 전력 절감)",
  "tip": "상·하향을 바꿔 내는 함정 주의"
 },
 {
  "s": "s3",
  "g": "무선LAN·위성·근거리",
  "front": "Wi-Fi 세대 명칭과 802.11 대응은?",
  "key": "4=n·5=ac·6=ax·7=be",
  "back": "★Wi-Fi 4=802.11n · Wi-Fi 5=802.11ac · Wi-Fi 6/6E=802.11ax · Wi-Fi 7=802.11be(MLO)★",
  "tip": "6E는 6GHz 대역 추가"
 },
 {
  "s": "s3",
  "g": "무선LAN·위성·근거리",
  "front": "위성 궤도 GEO·MEO·LEO의 특징은?",
  "key": "36,000km 정지·GPS·Starlink",
  "back": "★GEO 약 36,000km 정지궤도(3기로 극지 외 전세계)·지연 큼★ / MEO GPS·Galileo / ★LEO 500~2,000km Starlink·지연 작음★",
  "tip": "LEO는 고도가 낮아 많은 위성 군집 필요"
 },
 {
  "s": "s3",
  "g": "IPv6·QoS·SDN",
  "front": "IPv6 주소·헤더의 핵심 특징은?",
  "key": "128bit·40B 고정 헤더",
  "back": "★128bit(16진수 8그룹)★ · ★기본 헤더 40B 고정★ · 체크섬 제거 · 라우터 단편화 없음 · ★브로드캐스트 폐지(애니캐스트 추가)★",
  "tip": "확장 헤더는 Next Header로 연결"
 },
 {
  "s": "s3",
  "g": "IPv6·QoS·SDN",
  "front": "SDN과 NFV의 차이는?",
  "key": "평면 분리 vs 기능 가상화",
  "back": "SDN ★제어 평면·데이터 평면 분리, 중앙 컨트롤러(OpenFlow)★ / NFV ★전용 HW 기능을 SW(VNF)로 가상화, MANO 관리(ETSI)★",
  "tip": "둘은 상호 보완 — 경쟁 기술 아님"
 },
 {
  "s": "s4",
  "g": "ITSM·ITIL·SLA",
  "front": "ITIL이란 무엇이고 버전 흐름은?",
  "key": "ITSM 모범사례",
  "back": "영국 정부 기관(CCTA→OGC)이 정리한 ★IT 서비스 관리(ITSM) 모범사례★. v3(2007) 수명주기 5단계(Strategy→Design→Transition→Operation→CSI) → ★ITIL 4(2019)★ SVS·SVC·34 Practices",
  "tip": "ISO/IEC 20000은 ITSM '인증 표준', ITIL은 '모범사례 가이드' — 둘을 혼동하지 말 것"
 },
 {
  "s": "s4",
  "g": "ITSM·ITIL·SLA",
  "front": "SLA·OLA·UC는 각각 누구와 맺는가?",
  "key": "고객·내부·외부공급자",
  "back": "SLA = 공급자↔★고객★ 서비스 수준 약정 / OLA = ★내부 부서 간★ 운영 수준 약정 / UC = ★외부 공급업체★와의 계약(SLA를 뒷받침)",
  "tip": "'외부'가 두 번 나온다 — 상대가 고객이면 SLA, 공급업체면 UC"
 },
 {
  "s": "s4",
  "g": "ITSM·ITIL·SLA",
  "front": "Incident Management와 Problem Management의 차이는?",
  "key": "복구 vs 근본원인",
  "back": "Incident = ★서비스를 가능한 빨리 정상화★(증상 해소·워크어라운드) / Problem = ★근본 원인(RCA)★ 규명·제거로 재발 방지",
  "tip": "임시조치로 서비스 재개 = Incident, 원인을 찾아 없애기 = Problem"
 },
 {
  "s": "s4",
  "g": "운영체제·가상화",
  "front": "교착상태(Deadlock) 발생 4조건은?",
  "key": "상호배제·점유대기·비선점·순환대기",
  "back": "★상호배제·점유와 대기·비선점·순환대기★ — 네 조건이 동시에 성립해야 발생. 하나라도 깨면 예방, 은행원 알고리즘은 회피",
  "tip": "'선점'은 조건이 아니다 — 조건은 '비선점'"
 },
 {
  "s": "s4",
  "g": "운영체제·가상화",
  "front": "프로세스와 스레드의 차이는?",
  "key": "PCB·독립 vs 공유·경량",
  "back": "프로세스 = 독립 주소공간·★PCB★·문맥교환 비용 큼 / 스레드 = 같은 프로세스의 코드·데이터·힙 공유, 스택·레지스터만 별도 → ★경량★",
  "tip": "스레드끼리는 메모리를 공유하므로 IPC 없이 통신 가능하지만 동기화(Mutex 등)가 필요"
 },
 {
  "s": "s4",
  "g": "운영체제·가상화",
  "front": "CPU 스케줄링 기법을 선점·비선점으로 나누면?",
  "key": "FCFS·SJF / RR·SRT",
  "back": "비선점: FCFS·SJF / 선점: ★Round Robin(시간 할당량)★·SRT·MLFQ (Priority는 양쪽 모두 구현 가능)",
  "tip": "RR의 퀀텀이 너무 크면 FCFS처럼 동작, SJF·Priority의 기아는 에이징(Aging)으로 해결"
 },
 {
  "s": "s4",
  "g": "운영체제·가상화",
  "front": "페이지 교체 알고리즘과 벨레이디 이상?",
  "key": "FIFO·LRU·OPT",
  "back": "FIFO(먼저 들어온 것)·LRU(가장 오래 안 쓴 것)·LFU·★OPT(앞으로 가장 오래 안 쓸 것, 이론적 최적·구현 불가)★. ★FIFO★는 프레임을 늘려도 부재가 늘 수 있음(벨레이디 이상)",
  "tip": "LRU·OPT는 스택 알고리즘이라 벨레이디 이상이 생기지 않는다"
 },
 {
  "s": "s4",
  "g": "운영체제·가상화",
  "front": "Type 1과 Type 2 하이퍼바이저의 차이는?",
  "key": "Bare-metal vs Hosted",
  "back": "Type 1 = 하드웨어 위 직접 설치(★ESXi·Xen·Hyper-V·KVM★), 성능·서버용 / Type 2 = 호스트 OS 위 설치(★VirtualBox·VMware Workstation★), 데스크톱·테스트용",
  "tip": "반가상화(Para)는 게스트 커널 수정+하이퍼콜, 전가상화(Full)는 게스트 무수정"
 },
 {
  "s": "s4",
  "g": "운영체제·가상화",
  "front": "컨테이너 격리를 만드는 리눅스 커널 기능 2가지는?",
  "key": "Namespace·cgroup",
  "back": "★Namespace★ = PID·NET·MNT 등 보이는 자원 격리 / ★cgroup★ = CPU·메모리 등 사용량 제한. 컨테이너는 ★호스트 커널 공유★",
  "tip": "VM은 게스트 OS를 통째로 올리고, 컨테이너는 커널을 공유해 가볍지만 격리 수준은 낮다"
 },
 {
  "s": "s4",
  "g": "정보보호·암호",
  "front": "정보보호 3대 요소(CIA)와 확장 요소는?",
  "key": "기밀·무결·가용 + AAA·부인방지",
  "back": "★기밀성(암호화)·무결성(해시·MAC)·가용성(백업·HA)★ + 인증·인가·책임추적(AAA) + ★부인방지(전자서명)★",
  "tip": "해시는 무결성, 암호화는 기밀성 — 수단과 요소의 짝을 바꿔 내는 문제가 잦다"
 },
 {
  "s": "s4",
  "g": "정보보호·암호",
  "front": "대칭키·비대칭키 대표 알고리즘은?",
  "key": "DES·AES·SEED / RSA·ECC·DH",
  "back": "대칭: DES·3DES·★AES(128/192/256)★·★SEED·ARIA·LEA(국산)★·ChaCha20 / 비대칭: ★RSA(소인수분해)★·ECC·DSA·ElGamal·★DH(키교환)★",
  "tip": "대칭 = 빠름·키 분배 문제, 비대칭 = 키 분배 해결·느림 → 실무는 혼합(하이브리드)"
 },
 {
  "s": "s4",
  "g": "정보보호·암호",
  "front": "해시 알고리즘의 안전성 구분은?",
  "key": "MD5·SHA-1 취약",
  "back": "★MD5(128비트)·SHA-1(160비트)★ = 충돌 공격 실증 → 취약 / ★SHA-2(224/256/384/512)·SHA-3★ = 권고 / HAS-160 = 국산",
  "tip": "해시는 일방향 — 복호화(역산)할 수 없다"
 },
 {
  "s": "s4",
  "g": "정보보호·암호",
  "front": "전자서명과 암호화에 쓰는 키는?",
  "key": "서명=송신자 개인키",
  "back": "전자서명: ★송신자 개인키로 서명 → 송신자 공개키로 검증★(부인방지·무결성) / 기밀성 암호화: ★수신자 공개키로 암호화 → 수신자 개인키로 복호★",
  "tip": "'서명은 내 개인키, 비밀편지는 받는 사람 공개키'"
 },
 {
  "s": "s4",
  "g": "네트워크 보안·공격",
  "front": "방화벽 3가지 유형은?",
  "key": "Packet·Stateful·Proxy",
  "back": "Packet Filter(L3·L4 헤더) → Stateful Inspection(세션 상태 추적) → ★Application Proxy(L7 내용 검사·대리 연결)★, 최신은 NGFW(앱 식별·IPS 통합)",
  "tip": "Proxy는 가장 정밀하지만 가장 느리다"
 },
 {
  "s": "s4",
  "g": "네트워크 보안·공격",
  "front": "IDS와 IPS의 차이는?",
  "key": "탐지·Passive vs 차단·Inline",
  "back": "IDS = 미러 트래픽 분석·★탐지·경보(Passive)★ / IPS = 트래픽 경로에 ★Inline★ 설치·실시간 차단. 탐지 방식: 오용(Signature)·이상(Anomaly)",
  "tip": "제로데이 탐지는 이상(Anomaly) 탐지가 유리하지만 오탐이 많다"
 },
 {
  "s": "s4",
  "g": "네트워크 보안·공격",
  "front": "IPsec 구성 프로토콜(AH·ESP·IKE)의 역할은?",
  "key": "AH 무결성·ESP 암호화·IKE 키교환",
  "back": "★AH★ = 무결성·출발지 인증(암호화 없음) / ★ESP★ = 페이로드 암호화(기밀성)+선택적 인증 / ★IKE★ = SA 협상·키 교환(UDP 500). 모드: Transport(페이로드만)·★Tunnel(전체 패킷·게이트웨이 간)★",
  "tip": "AH는 IP 헤더까지 무결성 검사 → NAT 환경과 충돌"
 },
 {
  "s": "s4",
  "g": "네트워크 보안·공격",
  "front": "보안 솔루션 약어 UTM·WAF·DLP·NAC·EDR·SIEM·SOAR는?",
  "key": "통합·웹·유출·접근·단말·분석·자동대응",
  "back": "UTM=통합위협관리 / WAF=웹 방화벽 / DLP=데이터 유출 방지 / NAC=네트워크 접근 제어 / EDR=엔드포인트 탐지·대응 / ★SIEM=로그 수집·상관분석·경보★ / ★SOAR=대응 자동화·플레이북★",
  "tip": "SIEM은 '알려 주고', SOAR는 '알아서 대응한다'"
 },
 {
  "s": "s4",
  "g": "성능·가용성",
  "front": "가용률 공식과 Five Nines 다운타임은?",
  "key": "A = MTBF/(MTBF+MTTR)",
  "back": "★A = MTBF / (MTBF + MTTR)★ = Uptime/(Uptime+Downtime). 연간: 99%=3.65일, 99.9%=8.76시간, 99.99%=52.6분, ★99.999%=5.26분★",
  "tip": "9가 하나 늘 때마다 허용 다운타임은 1/10 — 단위(일·시간·분)를 꼭 확인"
 },
 {
  "s": "s4",
  "g": "성능·가용성",
  "front": "MTBF·MTTR·MTTF의 의미는?",
  "key": "고장 간격·수리시간·고장까지",
  "back": "MTBF = 평균 고장 간격(★신뢰성★) / MTTR = 평균 수리 시간(★보수성★) / MTTF = 수리 불가 품목의 평균 고장까지 시간. 고장률 λ = 1/MTBF",
  "tip": "가용률을 올리려면 MTBF↑ 또는 MTTR↓"
 },
 {
  "s": "s4",
  "g": "성능·가용성",
  "front": "RAID 레벨별 사용 가능 용량(N개, 각 C)?",
  "key": "0·1·5·6·10",
  "back": "RAID 0 = N×C(장애 허용 0) / RAID 1 = 미러 → 절반 / ★RAID 5 = (N−1)×C★(1개 고장 허용) / ★RAID 6 = (N−2)×C★(2개) / RAID 10 = N×C÷2",
  "tip": "RAID 0은 성능용 스트라이핑 — 이중화가 아니다"
 },
 {
  "s": "s4",
  "g": "재해복구·확장성",
  "front": "RTO와 RPO의 차이는?",
  "key": "복구 시간 vs 복구 시점",
  "back": "★RTO = 서비스를 복구해야 하는 목표 시간(다운 허용)★ / ★RPO = 복구 기준 시점, 데이터 손실 허용 구간★. 보조: RSO(범위)·RCO(소통)",
  "tip": "RPO는 백업·복제 주기로, RTO는 DR 센터 등급·절차로 맞춘다"
 },
 {
  "s": "s4",
  "g": "재해복구·확장성",
  "front": "DR 사이트 4종을 비교하면?",
  "key": "Mirror·Hot·Warm·Cold",
  "back": "★Mirror(실시간 동기·즉시 절체·최고가)★ > Hot(동기/준실시간·수 시간) > Warm(부분 장비·더 김) > ★Cold(시설만·가장 김·최저가)★",
  "tip": "복구가 빠를수록 비용이 크다 — 순서만 정확히 기억하면 대부분 풀린다"
 },
 {
  "s": "s4",
  "g": "재해복구·확장성",
  "front": "백업 3종과 3-2-1 규칙은?",
  "key": "Full·Incr·Diff / 3사본·2매체·1원격",
  "back": "전체(Full) / ★증분 = 직전 백업 이후 변경★(백업 빠름·복구 시 모두 적용) / ★차등 = 마지막 전체 이후 변경★(복구 = 전체+최신 차등 1개). ★3-2-1 = 사본 3·매체 2·원격 1★",
  "tip": "증분과 차등의 '기준 시점'을 바꿔 묻는 함정이 단골"
 },
 {
  "s": "s4",
  "g": "NMS·SNMP",
  "front": "TMN 4계층과 NMS·EMS·OSS·BSS는?",
  "key": "BML·SML·NML·EML",
  "back": "상위→하위 ★BML(사업)·SML(서비스)·NML(망)·EML(요소)★ / NMS=망 전체, EMS=개별 장비, ★OSS=운영(장애·성능·구성)★, ★BSS=과금·청구·CRM★",
  "tip": "장비 단위는 EML/EMS, 돈·고객은 BML/BSS"
 },
 {
  "s": "s4",
  "g": "NMS·SNMP",
  "front": "FCAPS 5대 관리 기능은?",
  "key": "Fault·Config·Accounting·Perf·Security",
  "back": "★F 장애·C 구성·A 과금(Accounting)·P 성능·S 보안★ — ISO/ITU-T 망 관리 기능 분류",
  "tip": "A는 Availability가 아니라 Accounting, C는 Capacity가 아니라 Configuration"
 },
 {
  "s": "s4",
  "g": "NMS·SNMP",
  "front": "SNMP 구성·포트·메시지·버전은?",
  "key": "UDP 161/162·Trap·v3 USM",
  "back": "Manager↔Agent↔MIB(OID 트리) / ★UDP 161(에이전트 요청)·162(Trap 수신)★ / Get·GetNext·Set·★Trap(에이전트 발신 Push)★·GetBulk·Inform(v2~) / v1·v2c 커뮤니티 평문, ★v3 USM(인증·암호)·VACM(접근제어)★",
  "tip": "Get은 Pull(매니저→에이전트), Trap은 Push(에이전트→매니저)"
 },
 {
  "s": "s4",
  "g": "로그·관측·자동화",
  "front": "Syslog 포트와 Severity 0~7은?",
  "key": "UDP 514·0 Emergency",
  "back": "UDP 514(전통)·TCP 6514(TLS) / ★0 Emergency·1 Alert·2 Critical·3 Error·4 Warning·5 Notice·6 Informational·7 Debug★ — ★숫자가 작을수록 심각★",
  "tip": "Facility(발생원)는 24개, Severity(심각도)는 8개 — 개수 바꿔치기 주의"
 },
 {
  "s": "s4",
  "g": "로그·관측·자동화",
  "front": "SRE 4대 골든 시그널과 에러 버짓은?",
  "key": "Latency·Traffic·Errors·Saturation",
  "back": "★Latency·Traffic·Errors·Saturation★ / SLI(측정 지표)→SLO(내부 목표)→SLA(외부 약정) / ★에러 버짓 = 1 − SLO★(허용 장애 몫)",
  "tip": "관측 3기둥(Logs·Metrics·Traces)과 골든 시그널을 섞어 내는 보기에 주의"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "CPU의 3대 구성요소는?",
  "key": "ALU·CU·레지스터",
  "back": "★ALU(산술·논리 연산)★, ★CU(명령 해독·제어 신호)★, 레지스터(고속 임시 기억)",
  "tip": "캐시는 CPU 내부에 있어도 '기억장치 계층'으로 분류"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "다음에 실행할 명령어의 주소를 보관하는 레지스터는?",
  "key": "PC",
  "back": "★PC(Program Counter)★ — Fetch 후 자동 증가, 분기 시 목적지 주소로 변경",
  "tip": "현재 실행 중인 명령어 자체는 IR"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "MAR과 MDR의 역할 차이는?",
  "key": "주소 vs 데이터",
  "back": "★MAR = 접근할 메모리 주소★, ★MDR = 읽고/쓸 데이터★ 를 임시 보관",
  "tip": "MAR→주소버스, MDR↔데이터버스로 짝지어 기억"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "명령어 사이클(메이저 상태) 4단계는?",
  "key": "Fetch·Indirect·Execute·Interrupt",
  "back": "★인출(Fetch) → 간접(Indirect) → 실행(Execute) → 인터럽트(Interrupt)★",
  "tip": "간접 사이클은 간접 주소지정일 때만 수행"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "파이프라인 5단계는?",
  "key": "IF·ID·EX·MEM·WB",
  "back": "★IF(인출)·ID(해독)·EX(실행)·MEM(메모리 접근)·WB(결과 기록)★",
  "tip": "k단계·n명령 이상적 소요 = k+n-1 사이클"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "파이프라인 해저드 3종과 대표 해결책은?",
  "key": "구조·데이터·제어",
  "back": "★구조(자원 충돌)★ → 자원 중복, ★데이터(RAW 등)★ → 포워딩·스톨, ★제어(분기)★ → 분기 예측",
  "tip": "RAW가 진짜 의존(True dependency)"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "RISC와 CISC의 핵심 차이는?",
  "key": "고정 길이 vs 가변 길이",
  "back": "★RISC: 적은 명령·고정 길이·파이프라인 유리(ARM·RISC-V)★ / CISC: 많은 명령·가변 길이(x86)",
  "tip": "RISC는 레지스터 多, 메모리 접근은 Load/Store만"
 },
 {
  "s": "s5",
  "g": "컴퓨터 구조",
  "front": "Flynn 분류 4가지는?",
  "key": "SISD·SIMD·MISD·MIMD",
  "back": "명령·데이터 흐름 수 기준 — ★SIMD = 벡터·GPU★, ★MIMD = 멀티코어·멀티프로세서★",
  "tip": "MISD는 실용 사례가 거의 없음"
 },
 {
  "s": "s5",
  "g": "메모리·입출력",
  "front": "기억장치 계층에서 위로 갈수록의 특징은?",
  "key": "빠름·작음·비쌈",
  "back": "레지스터 → 캐시 → 주기억 → SSD → HDD → 테이프 — ★위로 갈수록 빠르고·작고·비트당 비쌈★",
  "tip": "용량은 아래로 갈수록 커짐"
 },
 {
  "s": "s5",
  "g": "메모리·입출력",
  "front": "캐시 매핑 3방식은?",
  "key": "직접·완전 연관·집합 연관",
  "back": "★직접 사상(위치 고정·충돌 多)★ / 완전 연관(어디든·검색 비용 큼) / ★집합 연관(절충)★",
  "tip": "N-way = 한 집합에 N개 라인"
 },
 {
  "s": "s5",
  "g": "메모리·입출력",
  "front": "Write-Through와 Write-Back의 차이는?",
  "key": "즉시 기록 vs 교체 시 기록",
  "back": "★Write-Through: 캐시·메모리 동시 기록(일관성↑·속도↓)★ / ★Write-Back: 교체 시 기록, Dirty 비트 사용★",
  "tip": "Dirty 비트가 나오면 Write-Back"
 },
 {
  "s": "s5",
  "g": "메모리·입출력",
  "front": "DRAM과 SRAM의 차이는?",
  "key": "Refresh vs 플립플롭",
  "back": "★DRAM: 커패시터·Refresh 필요·주기억장치★ / ★SRAM: 플립플롭·빠름·캐시★",
  "tip": "SRAM은 집적도가 낮고 비쌈"
 },
 {
  "s": "s5",
  "g": "메모리·입출력",
  "front": "DMA(Direct Memory Access)란?",
  "key": "CPU 개입 없는 전송",
  "back": "★DMA 제어기가 CPU 대신 메모리↔I/O 블록 전송★, 완료 시 인터럽트로 통보 — 사이클 스틸링",
  "tip": "채널(Channel)은 자체 I/O 명령까지 실행하는 상위 방식"
 },
 {
  "s": "s5",
  "g": "메모리·입출력",
  "front": "스래싱(Thrashing)이란?",
  "key": "페이지 부재 폭증",
  "back": "★페이지 교체가 과도해 실제 실행보다 페이징에 시간을 더 쓰는 현상★ — 워킹셋·PFF로 완화",
  "tip": "다중 프로그래밍 정도를 높이면 오히려 악화"
 },
 {
  "s": "s5",
  "g": "자료구조·알고리즘",
  "front": "스택과 큐의 차이는?",
  "key": "LIFO vs FIFO",
  "back": "★Stack: LIFO, Push/Pop★ / ★Queue: FIFO, Enqueue/Dequeue★",
  "tip": "함수 호출·후위 표기 계산 = 스택, BFS = 큐"
 },
 {
  "s": "s5",
  "g": "자료구조·알고리즘",
  "front": "O(n²) 정렬과 O(n log n) 정렬을 구분하면?",
  "key": "단순 vs 분할",
  "back": "★버블·선택·삽입 = O(n²)★ / ★병합·퀵(평균)·힙 = O(n log n)★",
  "tip": "퀵 정렬 최악은 O(n²)"
 },
 {
  "s": "s5",
  "g": "자료구조·알고리즘",
  "front": "BFS와 DFS가 사용하는 자료구조는?",
  "key": "큐 vs 스택",
  "back": "★BFS = 큐(무가중 최단경로)★ / ★DFS = 스택·재귀★",
  "tip": "다익스트라는 가중치 음수 불가"
 },
 {
  "s": "s5",
  "g": "자료구조·알고리즘",
  "front": "해시 충돌 해결 방식 2계열은?",
  "key": "체이닝·개방 주소법",
  "back": "★체이닝(연결 리스트)★ / ★개방 주소법(선형·제곱·이중 해싱)★",
  "tip": "선형 조사는 1차 군집(Clustering) 발생"
 },
 {
  "s": "s5",
  "g": "운영체제",
  "front": "교착상태(Deadlock) 4대 필요조건은?",
  "key": "상호배제·점유대기·비선점·순환대기",
  "back": "★상호배제·점유와 대기·비선점·순환 대기★ — 하나라도 깨면 예방",
  "tip": "은행원 알고리즘은 '회피' 기법"
 },
 {
  "s": "s5",
  "g": "운영체제",
  "front": "프로세스와 스레드의 차이는?",
  "key": "독립 vs 자원 공유",
  "back": "프로세스: 독립 주소공간·PCB / ★스레드: 프로세스 자원 공유·경량·문맥교환 비용 작음★",
  "tip": "스레드도 자신의 스택·레지스터는 별도"
 },
 {
  "s": "s5",
  "g": "데이터베이스",
  "front": "트랜잭션 ACID는?",
  "key": "원자·일관·격리·지속",
  "back": "★Atomicity(All or Nothing)·Consistency·Isolation·Durability★",
  "tip": "원자성 = Commit/Rollback, 지속성 = 로그·회복"
 },
 {
  "s": "s5",
  "g": "데이터베이스",
  "front": "1NF·2NF·3NF·BCNF 조건은?",
  "key": "원자값→부분→이행→결정자",
  "back": "★1NF 원자값 / 2NF 부분 함수 종속 제거 / 3NF 이행 함수 종속 제거 / BCNF 모든 결정자가 후보키★",
  "tip": "4NF 다치 종속, 5NF 조인 종속"
 },
 {
  "s": "s5",
  "g": "데이터베이스",
  "front": "SQL 4분류와 대표 명령은?",
  "key": "DDL·DML·DCL·TCL",
  "back": "★DDL: CREATE·ALTER·DROP·TRUNCATE / DML: SELECT·INSERT·UPDATE·DELETE / DCL: GRANT·REVOKE / TCL: COMMIT·ROLLBACK·SAVEPOINT★",
  "tip": "TRUNCATE는 DDL(롤백 불가가 일반적)"
 },
 {
  "s": "s5",
  "g": "데이터베이스",
  "front": "CAP 이론의 3요소는?",
  "key": "일관성·가용성·분할 내성",
  "back": "★Consistency·Availability·Partition Tolerance★ — 분산 환경에서 셋을 동시에 완전 보장 불가",
  "tip": "NoSQL의 BASE = 결과적 일관성"
 },
 {
  "s": "s5",
  "g": "SW 공학",
  "front": "객체지향 SOLID 5원칙은?",
  "key": "SRP·OCP·LSP·ISP·DIP",
  "back": "★단일 책임·개방 폐쇄·리스코프 치환·인터페이스 분리·의존 역전★",
  "tip": "OCP = 확장엔 열려 있고 변경엔 닫힘"
 },
 {
  "s": "s5",
  "g": "정보통신 법규",
  "front": "전기통신기본법과 전기통신사업법의 차이는?",
  "key": "기본 원칙 vs 사업자 규제",
  "back": "★기본법: 전기통신 기본 원칙·정의(1983)★ / ★사업법: 사업자 규제·이용자 보호★",
  "tip": "공사·시공은 정보통신공사업법"
 },
 {
  "s": "s5",
  "g": "정보통신 법규",
  "front": "정보통신기술자 등급 4단계는?",
  "key": "초급·중급·고급·특급",
  "back": "★초급 → 중급 → 고급 → 특급★ — 자격·경력으로 인정",
  "tip": "감리원과 시공기술자를 구분"
 },
 {
  "s": "s5",
  "g": "구내통신·설비기준",
  "front": "MDF와 IDF의 차이는?",
  "key": "주배선반 vs 중간배선반",
  "back": "★MDF(Main Distribution Frame) = 주통신실, 건물 인입·간선 집중★ / ★IDF = 층통신실, 수평배선 분기★",
  "tip": "세대단자함은 각 세대마다 1개 이상"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ 핵심 공식 정리",
  "type": "table",
  "head": [
   "공식",
   "식",
   "예제·포인트"
  ],
  "rows": [
   [
    "주기·주파수",
    "T = 1/f",
    "50Hz → 20ms"
   ],
   [
    "파장",
    "λ = c/f (c=3×10⁸m/s)",
    "3GHz → 10cm"
   ],
   [
    "데시벨",
    "dB = 10log₁₀(P₂/P₁)",
    "100배 → 20dB, 2배 ≈ 3dB"
   ],
   [
    "dBm",
    "10log₁₀(P/1mW)",
    "1W = 30dBm"
   ],
   [
    "샤논 용량",
    "C = B·log₂(1+S/N)",
    "4kHz, S/N 255 → 32kbps"
   ],
   [
    "나이퀴스트 용량",
    "C = 2B·log₂M",
    "3kHz, M=4 → 12kbps"
   ],
   [
    "bps·Baud",
    "bps = Baud × log₂M",
    "16-QAM 1600Baud → 6400bps"
   ],
   [
    "표본화 정리",
    "fs ≥ 2fmax",
    "4kHz → 8kHz"
   ],
   [
    "PCM 속도",
    "fs × n(bit)",
    "8kHz × 8bit = 64kbps"
   ],
   [
    "FM 대역폭(카슨)",
    "BW = 2(Δf + fm)",
    "75k+15k → 180kHz"
   ],
   [
    "AM 총전력",
    "Pt = Pc(1 + m²/2)",
    "100W, m=1 → 150W"
   ],
   [
    "해밍 거리",
    "검출 d-1, 정정 ⌊(d-1)/2⌋",
    "d=5 → 검출 4·정정 2"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 변조 방식 비교",
  "type": "table",
  "head": [
   "방식",
   "변화 요소",
   "특징·비트 수"
  ],
  "rows": [
   [
    "AM",
    "반송파 진폭",
    "회로 단순, 잡음 취약"
   ],
   [
    "FM",
    "반송파 주파수",
    "잡음 강함, 대역폭 넓음"
   ],
   [
    "PM",
    "반송파 위상",
    "FM과 함께 각도 변조"
   ],
   [
    "ASK(OOK)",
    "진폭(ON/OFF)",
    "구현 단순, 잡음 취약"
   ],
   [
    "FSK",
    "주파수",
    "저속 모뎀, 잡음에 비교적 강함"
   ],
   [
    "BPSK",
    "위상 2개",
    "1bit/심볼"
   ],
   [
    "QPSK",
    "위상 4개",
    "2bit/심볼"
   ],
   [
    "8PSK",
    "위상 8개",
    "3bit/심볼"
   ],
   [
    "16-QAM",
    "진폭 + 위상",
    "4bit/심볼"
   ],
   [
    "64-QAM",
    "진폭 + 위상",
    "6bit/심볼"
   ],
   [
    "256-QAM",
    "진폭 + 위상",
    "8bit/심볼(Wi-Fi 5)"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 헷갈리는 쌍 비교",
  "type": "table",
  "head": [
   "구분",
   "A",
   "B"
  ],
  "rows": [
   [
    "샤논 vs 나이퀴스트",
    "잡음 있는 채널, log₂(1+S/N)",
    "잡음 없는 채널, 2B·log₂M"
   ],
   [
    "bps vs Baud",
    "초당 비트 수",
    "초당 심볼(신호 변화) 수"
   ],
   [
    "비동기 vs 동기",
    "문자 단위, Start·Stop",
    "블록 단위, SYN·플래그"
   ],
   [
    "직렬 vs 병렬",
    "1선, 장거리·저비용",
    "다수선, 단거리·고속"
   ],
   [
    "SMF vs MMF",
    "1310/1550nm, 장거리",
    "850/1300nm, 단거리"
   ],
   [
    "FDM vs TDM",
    "주파수 분할, 보호대역",
    "시간 분할, 보호시간"
   ],
   [
    "STDM vs ATDM",
    "고정 슬롯 할당",
    "동적 할당, 주소 필요"
   ],
   [
    "WDM vs OFDM",
    "광섬유 파장 분할",
    "무선 직교 부반송파"
   ],
   [
    "FEC vs BEC",
    "수신 측 정정, 실시간",
    "재전송(ARQ), 신뢰성"
   ],
   [
    "GBN vs SR",
    "오류부터 이후 전체 재전송",
    "오류 프레임만 재전송"
   ],
   [
    "HDB3 vs B8ZS",
    "0 4개 대체(E1)",
    "0 8개 대체(T1)"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ OSI 계층별 장비·도메인 비교",
  "type": "table",
  "head": [
   "장비(계층)",
   "주소·판단 기준",
   "핵심 특징"
  ],
  "rows": [
   [
    "Repeater (L1)",
    "없음(신호)",
    "신호 증폭·재생, 거리 연장(5-4-3 규칙)"
   ],
   [
    "Hub (L1)",
    "없음(신호)",
    "다포트 리피터, 단일 충돌·브로드캐스트 도메인"
   ],
   [
    "Bridge (L2)",
    "MAC 주소",
    "학습·필터링·포워딩, 충돌 도메인 분리(SW 처리)"
   ],
   [
    "Switch (L2)",
    "MAC 주소",
    "다포트 브리지·ASIC, 포트별 충돌 도메인, VLAN"
   ],
   [
    "Router (L3)",
    "IP 주소",
    "경로 결정, 브로드캐스트 도메인 분리, NAT·ACL"
   ],
   [
    "L3 Switch (L3)",
    "IP 주소",
    "ASIC 기반 고속 라우팅, LAN 백본·VLAN 간 라우팅"
   ],
   [
    "L4 Switch (L4)",
    "TCP/UDP 포트",
    "부하 분산(RR·Least Connection·Hash)"
   ],
   [
    "L7 Switch (L7)",
    "URL·쿠키·콘텐츠",
    "콘텐츠 기반 분산, SSL Offloading"
   ],
   [
    "Gateway (상위)",
    "프로토콜 전체",
    "이기종 프로토콜 변환(메일·음성·IoT)"
   ],
   [
    "AP (L2)",
    "MAC 주소",
    "무선↔유선 브리지, 컨트롤러와 CAPWAP"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 교환 방식·라우팅 프로토콜 비교",
  "type": "table",
  "head": [
   "구분",
   "방식·알고리즘",
   "핵심 특징"
  ],
  "rows": [
   [
    "회선 교환",
    "호 설정 후 전용 경로",
    "실시간·고정 대역, 회선 낭비(PSTN)"
   ],
   [
    "메시지 교환",
    "메시지 전체 축적 후 전달",
    "회선 효율↑, 지연 큼(전보·이메일)"
   ],
   [
    "패킷 교환(데이터그램)",
    "비연결·패킷별 경로",
    "순서 보장 X, 경로 장애에 유연(IP)"
   ],
   [
    "패킷 교환(가상회선)",
    "논리 연결·고정 경로",
    "순서 보장(X.25·Frame Relay)"
   ],
   [
    "셀 교환",
    "53바이트 고정 셀",
    "ATM, VPI·VCI, AAL"
   ],
   [
    "RIP",
    "Distance Vector·Bellman-Ford",
    "홉 수, 최대 15홉, 30초 갱신, UDP 520"
   ],
   [
    "OSPF",
    "Link State·Dijkstra",
    "Cost, Area 0 백본, IP 프로토콜 89"
   ],
   [
    "EIGRP",
    "Advanced DV(DUAL)",
    "대역폭·지연 복합 메트릭, Cisco 개발"
   ],
   [
    "IS-IS",
    "Link State·Dijkstra",
    "OSI 기반 IGP, 대형 ISP 백본"
   ],
   [
    "BGP",
    "Path Vector",
    "AS 간 EGP, TCP 179, 인터넷 백본"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ RAID·스토리지·가용성 공식",
  "type": "table",
  "head": [
   "항목",
   "구성·공식",
   "핵심 포인트"
  ],
  "rows": [
   [
    "RAID 0",
    "스트라이핑, 최소 2개",
    "용량 N×C, 결함 허용 0개"
   ],
   [
    "RAID 1",
    "미러링, 최소 2개",
    "용량 50%, 읽기 성능↑"
   ],
   [
    "RAID 3 / 4",
    "바이트 / 블록 + 전용 패리티",
    "패리티 디스크 병목"
   ],
   [
    "RAID 5",
    "블록 + 분산 패리티, 최소 3개",
    "용량 (N-1)×C, 1개 고장 허용"
   ],
   [
    "RAID 6",
    "이중 분산 패리티, 최소 4개",
    "용량 (N-2)×C, 2개 고장 허용"
   ],
   [
    "RAID 10",
    "미러 후 스트라이프, 최소 4개",
    "용량 50%, 고성능·고가용"
   ],
   [
    "NAS",
    "IP망 파일 단위",
    "NFS·SMB/CIFS·AFP"
   ],
   [
    "SAN",
    "전용망 블록 단위",
    "FC·iSCSI·FCoE"
   ],
   [
    "가용도",
    "MTBF ÷ (MTBF + MTTR)",
    "MTTR 단축이 가용성 향상"
   ],
   [
    "Five Nines",
    "99.999%",
    "연간 약 5.26분 중단"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ OSI 7계층 — PDU·장비·대표 프로토콜",
  "type": "table",
  "head": [
   "계층",
   "PDU · 장비",
   "대표 프로토콜 · 기능"
  ],
  "rows": [
   [
    "L7 응용",
    "Data · 게이트웨이",
    "HTTP·FTP·SMTP·DNS — 사용자 서비스"
   ],
   [
    "L6 표현",
    "Data · -",
    "SSL/TLS·JPEG·ASCII — 코드변환·암호화·압축"
   ],
   [
    "L5 세션",
    "Data · -",
    "NetBIOS·RPC — 대화 제어·동기점"
   ],
   [
    "L4 전송",
    "Segment · L4 스위치",
    "TCP·UDP·SCTP — 종단 간 신뢰성·포트"
   ],
   [
    "L3 네트워크",
    "Packet · 라우터",
    "IP·ICMP·OSPF — 논리주소·경로 선택"
   ],
   [
    "L2.5 (참고)",
    "Label · LSR·LER",
    "MPLS — 라벨 스위칭"
   ],
   [
    "L2 데이터링크",
    "Frame · 스위치·브리지",
    "Ethernet·PPP·HDLC — MAC·오류검출(FCS)"
   ],
   [
    "L1 물리",
    "Bit · 허브·리피터·NIC",
    "RS-232·V.35 — 전기·기계적 신호"
   ],
   [
    "TCP/IP 대응",
    "응용·전송·인터넷·접근",
    "L5~7 / L4 / L3 / L1~2"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 주요 포트 번호·전송 프로토콜",
  "type": "table",
  "head": [
   "프로토콜",
   "포트 · 전송",
   "용도"
  ],
  "rows": [
   [
    "FTP",
    "20(데이터)·21(제어) · TCP",
    "파일 전송"
   ],
   [
    "SSH / SFTP",
    "22 · TCP",
    "암호화 원격 접속·파일 전송"
   ],
   [
    "Telnet",
    "23 · TCP",
    "평문 원격 접속"
   ],
   [
    "SMTP",
    "25 · TCP",
    "메일 송신"
   ],
   [
    "DNS",
    "53 · UDP(질의)/TCP(영역전송)",
    "도메인 이름 해석"
   ],
   [
    "DHCP",
    "67(서버)·68(클라이언트) · UDP",
    "IP 자동 할당(DORA)"
   ],
   [
    "TFTP",
    "69 · UDP",
    "간이 파일 전송"
   ],
   [
    "HTTP / HTTPS",
    "80 / 443 · TCP",
    "웹 (HTTPS = HTTP+TLS)"
   ],
   [
    "POP3",
    "110 · TCP",
    "메일 수신(다운로드)"
   ],
   [
    "NTP",
    "123 · UDP",
    "시간 동기화"
   ],
   [
    "IMAP",
    "143 · TCP",
    "메일 서버 동기화"
   ],
   [
    "SNMP",
    "161(요청)·162(Trap) · UDP",
    "네트워크 관리"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 서브넷 Prefix·마스크·호스트 수",
  "type": "table",
  "head": [
   "Prefix",
   "서브넷 마스크",
   "주소 수 / 호스트 수"
  ],
  "rows": [
   [
    "/20",
    "255.255.240.0",
    "4,096 / 4,094"
   ],
   [
    "/21",
    "255.255.248.0",
    "2,048 / 2,046"
   ],
   [
    "/22",
    "255.255.252.0",
    "1,024 / 1,022"
   ],
   [
    "/23",
    "255.255.254.0",
    "512 / 510"
   ],
   [
    "/24",
    "255.255.255.0",
    "256 / 254"
   ],
   [
    "/25",
    "255.255.255.128",
    "128 / 126"
   ],
   [
    "/26",
    "255.255.255.192",
    "64 / 62"
   ],
   [
    "/27",
    "255.255.255.224",
    "32 / 30"
   ],
   [
    "/28",
    "255.255.255.240",
    "16 / 14"
   ],
   [
    "/29",
    "255.255.255.248",
    "8 / 6"
   ],
   [
    "/30",
    "255.255.255.252",
    "4 / 2 (점대점 링크)"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 가용성·신뢰성 공식 정리",
  "type": "table",
  "head": [
   "항목",
   "공식·값",
   "비고"
  ],
  "rows": [
   [
    "가용률",
    "A = MTBF / (MTBF + MTTR)",
    "Uptime/(Uptime+Downtime)"
   ],
   [
    "고장률",
    "λ = 1 / MTBF",
    "MTBF 2,000h → 0.0005/h"
   ],
   [
    "직렬 구성",
    "A = A1 × A2",
    "0.99 × 0.99 = 0.9801"
   ],
   [
    "병렬 구성",
    "A = 1 − (1−A1)(1−A2)",
    "0.9 두 대 → 0.99"
   ],
   [
    "99%",
    "연 약 3.65일",
    "Two Nines"
   ],
   [
    "99.9%",
    "연 약 8.76시간",
    "월(30일) 43.2분"
   ],
   [
    "99.99%",
    "연 약 52.6분",
    "Four Nines"
   ],
   [
    "99.999%",
    "연 약 5.26분",
    "★Five Nines★"
   ],
   [
    "99.9999%",
    "연 약 31.5초",
    "Six Nines"
   ],
   [
    "에러 버짓",
    "1 − SLO",
    "SLO 99.95%·30일 → 21.6분"
   ],
   [
    "N+1 이중화",
    "필요 N대 + 예비 1대",
    "4대 필요 → 5대"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 재해복구·백업·RAID 비교",
  "type": "table",
  "head": [
   "구분",
   "핵심 특징",
   "복구·용량 관점"
  ],
  "rows": [
   [
    "Mirror Site",
    "주 센터와 실시간 동기",
    "즉시 절체·비용 최고"
   ],
   [
    "Hot Site",
    "동기/준실시간 복제·장비 상시 가동",
    "수 시간 내 복구"
   ],
   [
    "Warm Site",
    "주요 장비 일부만 구비",
    "Hot보다 오래 걸림"
   ],
   [
    "Cold Site",
    "공간·전원·공조 등 시설만",
    "가장 느림·비용 최저"
   ],
   [
    "전체 백업",
    "매번 전체 데이터 복사",
    "복구 = 전체 1개"
   ],
   [
    "증분 백업",
    "직전 백업(종류 불문) 이후 변경",
    "복구 = 전체 + 모든 증분"
   ],
   [
    "차등 백업",
    "마지막 전체 백업 이후 변경",
    "복구 = 전체 + 최신 차등"
   ],
   [
    "3-2-1 규칙",
    "사본 3·매체 2·원격 1",
    "랜섬웨어·재해 대비"
   ],
   [
    "RAID 0",
    "스트라이핑",
    "N×C·장애 허용 없음"
   ],
   [
    "RAID 1 / 10",
    "미러링(+스트라이핑)",
    "전체 용량의 절반"
   ],
   [
    "RAID 5",
    "분산 패리티 1개",
    "(N−1)×C·1개 고장 허용"
   ],
   [
    "RAID 6",
    "분산 패리티 2개",
    "(N−2)×C·2개 고장 허용"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 헷갈리는 개념 짝 비교",
  "type": "table",
  "head": [
   "개념 짝",
   "앞쪽",
   "뒤쪽"
  ],
  "rows": [
   [
    "RTO vs RPO",
    "복구 목표 시간(다운 허용)",
    "복구 시점(데이터 손실 허용)"
   ],
   [
    "Incident vs Problem",
    "신속 복구·증상",
    "근본 원인(RCA)·재발 방지"
   ],
   [
    "IDS vs IPS",
    "탐지·Passive",
    "차단·Inline"
   ],
   [
    "SIEM vs SOAR",
    "수집·상관분석·경보",
    "플레이북 자동 대응"
   ],
   [
    "AH vs ESP",
    "무결성·인증(암호화 없음)",
    "암호화(기밀성)+선택적 인증"
   ],
   [
    "Transport vs Tunnel",
    "페이로드만 보호·종단 간",
    "전체 패킷 캡슐화·게이트웨이 간"
   ],
   [
    "대칭 vs 비대칭",
    "빠름·키 분배 문제",
    "느림·키 분배 해결"
   ],
   [
    "SNMP Get vs Trap",
    "매니저→에이전트 Pull",
    "에이전트→매니저 Push"
   ],
   [
    "SNMP v2c vs v3",
    "커뮤니티 문자열 평문",
    "USM 인증·암호, VACM 접근제어"
   ],
   [
    "Scale-Up vs Scale-Out",
    "한 대 성능 증설(수직)",
    "대수 증설·분산(수평)"
   ],
   [
    "Active-Active vs Standby",
    "동시 가동·부하 분산",
    "1대 가동·1대 대기"
   ],
   [
    "OSS vs BSS",
    "운영(장애·성능·구성)",
    "과금·청구·CRM"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 메모리·캐시·I/O 비교표",
  "type": "table",
  "head": [
   "구분",
   "방식·종류",
   "핵심 포인트"
  ],
  "rows": [
   [
    "캐시 매핑",
    "직접 사상",
    "위치 고정·하드웨어 단순·충돌 빈번"
   ],
   [
    "캐시 매핑",
    "완전 연관",
    "어느 라인이든 배치·병렬 태그 비교 비용"
   ],
   [
    "캐시 매핑",
    "집합 연관",
    "N-way·직접과 완전의 절충"
   ],
   [
    "캐시 쓰기",
    "Write-Through",
    "캐시·메모리 동시 기록·일관성 우수"
   ],
   [
    "캐시 쓰기",
    "Write-Back",
    "교체 시 기록·Dirty 비트·버스 트래픽 감소"
   ],
   [
    "교체 정책",
    "LRU·FIFO·LFU·Random",
    "LRU = 가장 오래 미사용, LFU = 사용 횟수 최소"
   ],
   [
    "RAM",
    "DRAM vs SRAM",
    "DRAM 주기억·Refresh / SRAM 캐시·고속"
   ],
   [
    "ROM",
    "Mask·PROM·EPROM·EEPROM·Flash",
    "EPROM 자외선 소거, EEPROM 전기 소거"
   ],
   [
    "I/O",
    "Programmed I/O",
    "CPU가 상태를 반복 검사(폴링)"
   ],
   [
    "I/O",
    "Interrupt·DMA·Channel",
    "DMA = CPU 개입 없는 블록 전송"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ DB 정규화·격리수준·SQL 정리",
  "type": "table",
  "head": [
   "항목",
   "내용",
   "기억 포인트"
  ],
  "rows": [
   [
    "1NF",
    "도메인이 원자값",
    "반복 그룹·다중값 제거"
   ],
   [
    "2NF",
    "부분 함수 종속 제거",
    "복합키 일부에만 종속된 속성 분리"
   ],
   [
    "3NF",
    "이행 함수 종속 제거",
    "A→B, B→C 이면 C 분리"
   ],
   [
    "BCNF",
    "모든 결정자가 후보키",
    "3NF 강화형"
   ],
   [
    "4NF·5NF",
    "다치 종속·조인 종속 제거",
    "출제 빈도 낮음"
   ],
   [
    "Read Uncommitted",
    "미확정 데이터 읽기 허용",
    "Dirty Read 발생"
   ],
   [
    "Read Committed",
    "확정 데이터만 읽기",
    "Non-Repeatable Read 가능"
   ],
   [
    "Repeatable Read",
    "읽은 행 재조회 일관",
    "Phantom Read 가능"
   ],
   [
    "Serializable",
    "직렬 실행과 동일 결과",
    "동시성 최저·일관성 최고"
   ],
   [
    "DDL·DML·DCL·TCL",
    "정의·조작·제어·트랜잭션",
    "GRANT는 DCL, COMMIT은 TCL"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 구내통신 케이블·설비 기준",
  "type": "table",
  "head": [
   "구분",
   "규격·설비",
   "핵심 수치·특징"
  ],
  "rows": [
   [
    "UTP",
    "Cat 5e",
    "1Gbps·100MHz"
   ],
   [
    "UTP",
    "Cat 6",
    "1Gbps·250MHz"
   ],
   [
    "UTP",
    "Cat 6A",
    "10Gbps·500MHz"
   ],
   [
    "STP",
    "Cat 7",
    "10Gbps·600MHz·차폐"
   ],
   [
    "광",
    "SMF(단일모드)",
    "장거리·간선"
   ],
   [
    "광",
    "MMF(다중모드) OM1~OM5",
    "단거리·구내·다중 경로 분산"
   ],
   [
    "통신실",
    "MDF(주통신실)",
    "건물 인입·구내간선 집중"
   ],
   [
    "통신실",
    "IDF(층통신실)",
    "층별 수평배선 분기"
   ],
   [
    "세대",
    "세대단자함",
    "각 세대마다 1개 이상"
   ],
   [
    "전원",
    "상용·예비·UPS·발전기",
    "UPS 순간 정전 보상, 발전기 장시간 대체"
   ],
   [
    "보호",
    "SPD",
    "서지 보호 장치·낙뢰 과전압 억제"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "샤논 공식에는 SNR을 dB 값 그대로 넣는다 — S/N은 배수로 변환해 대입한다(30dB → 1000)."
 },
 {
  "s": "s1",
  "t": "Baud와 bps는 항상 같다 — 2진 신호(M=2)일 때만 같고, 일반적으로 bps = Baud × log₂M이다."
 },
 {
  "s": "s1",
  "t": "나이퀴스트 공식은 잡음이 있는 실제 채널의 한계다 — 잡음 없는 이상 채널의 한계이며, 잡음 채널은 샤논 공식이다."
 },
 {
  "s": "s1",
  "t": "QAM은 주파수와 위상을 함께 바꾼다 — QAM은 진폭과 위상을 함께 바꾼다."
 },
 {
  "s": "s1",
  "t": "QAM 차수를 높이면 속도와 잡음 내성이 모두 좋아진다 — 속도는 오르지만 신호점 간격이 좁아져 잡음 내성은 떨어진다."
 },
 {
  "s": "s1",
  "t": "FM은 AM보다 대역폭이 좁다 — FM은 잡음에 강한 대신 대역폭이 넓다(카슨 법칙 2(Δf+fm))."
 },
 {
  "s": "s1",
  "t": "PCM 순서는 양자화 → 표본화 → 부호화다 — 표본화 → 양자화 → 부호화 → 복호화(표·양·부·복)다."
 },
 {
  "s": "s1",
  "t": "표본화 주파수를 높이면 양자화 잡음이 줄어든다 — 양자화 잡음은 양자화 비트 수(레벨 수)로 줄인다."
 },
 {
  "s": "s1",
  "t": "표본화 주파수는 최고 주파수와 같으면 충분하다 — 최고 주파수의 2배 이상이어야 에일리어싱이 없다."
 },
 {
  "s": "s1",
  "t": "무전기는 양방향 통신이므로 전이중이다 — 동시에 말할 수 없으므로 반이중이다."
 },
 {
  "s": "s1",
  "t": "광섬유는 클래딩의 굴절률이 코어보다 커야 전반사가 일어난다 — 코어 굴절률이 클래딩보다 커야 한다."
 },
 {
  "s": "s1",
  "t": "MMF가 SMF보다 장거리 전송에 유리하다 — 모드 분산이 없는 SMF가 장거리·광대역에 유리하다."
 },
 {
  "s": "s1",
  "t": "Cat6는 10Gbps를 100m까지 지원한다 — Cat6의 10Gbps는 약 55m까지이고, 100m는 Cat6a다."
 },
 {
  "s": "s1",
  "t": "WDM은 무선 OFDM과 같은 개념이다 — WDM은 광섬유 파장 분할, OFDM은 무선의 직교 부반송파 분할이다."
 },
 {
  "s": "s1",
  "t": "통계적 TDM은 모든 채널에 고정 슬롯을 준다 — 고정 슬롯은 동기식 TDM이며, 통계적 TDM은 동적 할당이다."
 },
 {
  "s": "s1",
  "t": "패리티 비트는 모든 오류를 검출한다 — 홀수 개 비트 오류만 검출하고 짝수 개 오류는 놓친다."
 },
 {
  "s": "s1",
  "t": "Go-Back-N은 오류 난 프레임만 재전송한다 — 그것은 Selective Repeat이고, GBN은 오류 프레임부터 이후 전부를 재전송한다."
 },
 {
  "s": "s1",
  "t": "HDB3는 0이 8개 연속될 때 대체한다 — HDB3는 0 4개, B8ZS가 0 8개 연속을 대체한다."
 },
 {
  "s": "s2",
  "t": "모뎀은 사용자 단말이므로 DTE이다 — 모뎀·DSU·CSU는 회선 측 종단 장치인 DCE이고, DTE는 PC·터미널 등 사용자 측 장비이다."
 },
 {
  "s": "s2",
  "t": "DSU도 모뎀처럼 디지털을 아날로그로 변조한다 — DSU는 디지털↔디지털 신호 형태 변환(베이스밴드)만 하며 변조하지 않는다."
 },
 {
  "s": "s2",
  "t": "코덱과 모뎀은 같은 방향의 변환을 한다 — 코덱은 아날로그→디지털(PCM), 모뎀은 디지털→아날로그(변조)로 방향이 반대이다."
 },
 {
  "s": "s2",
  "t": "ADSL은 상·하향 속도가 같은 대칭형이다 — ADSL의 A는 Asymmetric, 하향이 훨씬 빠른 비대칭형이며 대칭형은 SDSL이다."
 },
 {
  "s": "s2",
  "t": "허브는 포트마다 충돌 도메인을 분리한다 — 허브는 전 포트가 하나의 충돌 도메인이며, 포트별 분리는 스위치·브리지의 기능이다."
 },
 {
  "s": "s2",
  "t": "스위치는 브로드캐스트 도메인을 분리한다 — 일반 L2 스위치는 브로드캐스트를 전 포트로 전달한다. 분리하려면 라우터 또는 VLAN이 필요하다."
 },
 {
  "s": "s2",
  "t": "Cut-Through 방식은 CRC 오류 프레임을 걸러낸다 — Cut-Through는 목적지 MAC만 보고 즉시 전달하므로 오류 검사를 하지 않는다. 오류 검사는 Store-and-Forward."
 },
 {
  "s": "s2",
  "t": "STP와 VTP는 모두 루프 방지 프로토콜이다 — STP는 루프 방지, VTP는 스위치 간 VLAN 정보 동기화 프로토콜로 목적이 다르다."
 },
 {
  "s": "s2",
  "t": "RIP의 최대 홉 수는 16이다 — 사용 가능한 최대는 15홉이며 16은 '도달 불가(무한대)'를 뜻한다."
 },
 {
  "s": "s2",
  "t": "OSPF는 Bellman-Ford 알고리즘을 쓴다 — OSPF는 Link State 방식으로 Dijkstra(SPF) 알고리즘을 쓰며, Bellman-Ford는 RIP 등 Distance Vector 방식이다."
 },
 {
  "s": "s2",
  "t": "BGP는 AS 내부 라우팅용 IGP이다 — BGP는 AS 간 경로를 교환하는 EGP(Path Vector)이며 TCP 179를 사용한다."
 },
 {
  "s": "s2",
  "t": "회선 교환도 Store-and-Forward로 동작한다 — 회선 교환은 전용 경로를 독점해 실시간 전달하며, 축적 후 전송은 메시지·패킷 교환의 특징이다."
 },
 {
  "s": "s2",
  "t": "데이터그램 방식은 패킷 도착 순서를 보장한다 — 패킷마다 경로가 달라 순서가 뒤바뀔 수 있으며, 순서 보장은 가상 회선 방식의 특징이다."
 },
 {
  "s": "s2",
  "t": "ATM은 가변 길이 셀을 사용한다 — ATM은 53바이트(헤더 5+정보 48) 고정 길이 셀을 사용한다."
 },
 {
  "s": "s2",
  "t": "SIP는 ITU-T의 바이너리 프로토콜이다 — SIP는 IETF의 텍스트 기반 프로토콜이며, ITU-T 바이너리 규격은 H.323이다."
 },
 {
  "s": "s2",
  "t": "NAS는 블록 단위, SAN은 파일 단위 접근이다 — 반대이다. NAS는 파일 단위(NFS·SMB), SAN은 블록 단위(FC·iSCSI)이다."
 },
 {
  "s": "s2",
  "t": "RAID 5는 디스크 2개까지 동시 고장을 견딘다 — RAID 5는 1개, 이중 패리티를 쓰는 RAID 6이 2개까지 허용한다."
 },
 {
  "s": "s3",
  "t": "허브는 2계층 장비다 — 허브·리피터는 1계층(물리) 장비이며, MAC 주소를 보고 포워딩하는 스위치·브리지가 2계층이다."
 },
 {
  "s": "s3",
  "t": "TCP/IP의 인터넷 계층은 OSI 4계층에 대응한다 — 인터넷 계층은 OSI 3계층(네트워크)에 대응하고, OSI 4계층은 전송 계층이다."
 },
 {
  "s": "s3",
  "t": "TCP 연결 종료도 3-way로 끝난다 — 종료는 FIN·ACK·FIN·ACK의 4-way이며 각 방향을 따로 닫는다(half-close)."
 },
 {
  "s": "s3",
  "t": "UDP 헤더는 TCP처럼 20바이트다 — UDP 헤더는 출발·목적 포트, 길이, 체크섬의 8바이트 고정이다."
 },
 {
  "s": "s3",
  "t": "DNS는 TCP만 사용한다 — 일반 질의는 UDP 53, 영역 전송이나 큰 응답은 TCP 53을 사용한다."
 },
 {
  "s": "s3",
  "t": "/24 서브넷에는 256대의 호스트를 붙일 수 있다 — 주소는 256개지만 네트워크·브로드캐스트 주소를 빼면 호스트는 254대다."
 },
 {
  "s": "s3",
  "t": "172.16.0.0~172.255.255.255 전체가 사설 대역이다 — 사설 대역은 172.16.0.0/12, 즉 172.16~172.31까지만이다."
 },
 {
  "s": "s3",
  "t": "ARP는 MAC 주소로 IP 주소를 알아낸다 — ARP는 IP→MAC, MAC→IP는 RARP(현재는 DHCP로 대체)다."
 },
 {
  "s": "s3",
  "t": "Ethernet 최소 프레임 64바이트에는 프리앰블이 포함된다 — 64바이트는 목적지 MAC부터 FCS까지이며 프리앰블·SFD 8바이트는 제외한다."
 },
 {
  "s": "s3",
  "t": "Wi-Fi는 CSMA/CD로 충돌을 감지한다 — 무선은 송신 중 충돌 감지가 어려워 CSMA/CA(IFS·RTS/CTS)로 충돌을 회피한다."
 },
 {
  "s": "s3",
  "t": "POP3는 메일을 서버에 두고 여러 단말에서 동기화한다 — 그것은 IMAP(143)이며, POP3(110)는 단말로 내려받는 방식이다."
 },
 {
  "s": "s3",
  "t": "LTE는 상향에 OFDMA, 하향에 SC-FDMA를 쓴다 — 반대다. 하향 OFDMA, 상향 SC-FDMA(낮은 PAPR로 단말 전력 절감)다."
 },
 {
  "s": "s3",
  "t": "URLLC는 대량 IoT 연결을 위한 5G 시나리오다 — 대량 IoT는 mMTC, URLLC는 1ms급 초저지연·고신뢰 서비스다."
 },
 {
  "s": "s3",
  "t": "정지궤도(GEO) 위성은 지연이 작아 실시간 게임에 유리하다 — 고도 약 36,000km로 편도 전파 지연만 약 120ms라 지연이 크다. 저지연은 LEO."
 },
 {
  "s": "s3",
  "t": "IPv6도 라우터가 패킷을 단편화한다 — IPv6는 출발지 호스트만 단편화(경로 MTU 탐색)하며 라우터는 단편화하지 않는다."
 },
 {
  "s": "s3",
  "t": "IPv6에도 브로드캐스트 주소가 있다 — IPv6는 브로드캐스트를 폐지하고 멀티캐스트·애니캐스트로 대체했다."
 },
 {
  "s": "s3",
  "t": "SDN과 NFV는 같은 개념이다 — SDN은 제어·데이터 평면 분리, NFV는 네트워크 기능의 SW 가상화로 서로 보완 관계다."
 },
 {
  "s": "s4",
  "t": "OLA는 외부 공급업체와 맺는 계약이다 — OLA는 내부 부서 간 약정이고, 외부 공급업체 계약은 UC(Underpinning Contract)이다."
 },
 {
  "s": "s4",
  "t": "Incident Management는 장애의 근본 원인을 찾는 프로세스다 — 근본 원인 분석은 Problem Management, Incident는 신속한 서비스 복구가 목표다."
 },
 {
  "s": "s4",
  "t": "ITIL 4는 26개 프로세스를 정의한다 — ITIL 4는 34개 프랙티스(Practice), 26개 프로세스는 ITIL v3(2011) 기준이다."
 },
 {
  "s": "s4",
  "t": "교착상태 조건에는 '선점'이 포함된다 — 4조건은 상호배제·점유와 대기·비선점·순환대기이다."
 },
 {
  "s": "s4",
  "t": "컨테이너도 VM처럼 각자 게스트 OS 커널을 가진다 — 컨테이너는 호스트 커널을 공유하고 Namespace·cgroup으로 격리·제한한다."
 },
 {
  "s": "s4",
  "t": "해시는 무결성과 기밀성을 함께 보장한다 — 해시는 무결성 수단이며 일방향이라 복호화가 불가능하다. 기밀성은 암호화로 보장한다."
 },
 {
  "s": "s4",
  "t": "전자서명은 수신자의 공개키로 생성한다 — 서명은 송신자 개인키로 만들고 송신자 공개키로 검증한다."
 },
 {
  "s": "s4",
  "t": "AES는 국산 블록 암호이다 — AES는 미국 NIST 표준이며, 국산은 SEED·ARIA·LEA이다."
 },
 {
  "s": "s4",
  "t": "IPsec AH도 페이로드를 암호화한다 — AH는 무결성·출발지 인증만 제공하며 암호화(기밀성)는 ESP가 담당한다."
 },
 {
  "s": "s4",
  "t": "IPS는 미러링된 트래픽을 받아 탐지만 한다 — 그것은 IDS(Passive)이고, IPS는 Inline으로 설치되어 실시간 차단한다."
 },
 {
  "s": "s4",
  "t": "오용(Signature) 탐지는 제로데이 공격에 강하다 — 시그니처가 없는 신종 공격은 이상(Anomaly) 탐지가 유리하다."
 },
 {
  "s": "s4",
  "t": "가용률 공식은 MTTR / (MTBF + MTTR)이다 — 그것은 비가용률이고, 가용률은 MTBF / (MTBF + MTTR)이다."
 },
 {
  "s": "s4",
  "t": "99.99%의 연간 다운타임은 약 5.26분이다 — 5.26분은 99.999%(Five Nines), 99.99%는 약 52.6분이다."
 },
 {
  "s": "s4",
  "t": "RAID 0은 디스크 장애에 대비한 이중화 방식이다 — RAID 0은 스트라이핑만 하며 디스크 1개만 고장 나도 데이터가 손실된다."
 },
 {
  "s": "s4",
  "t": "RTO는 허용 가능한 데이터 손실 구간이다 — 데이터 손실 허용 시점은 RPO, RTO는 서비스 복구 목표 시간이다."
 },
 {
  "s": "s4",
  "t": "차등 백업은 직전 백업 이후 변경분만 저장한다 — 그것은 증분 백업이고, 차등은 마지막 전체 백업 이후 변경분을 누적 저장한다."
 },
 {
  "s": "s4",
  "t": "FCAPS의 A는 Availability(가용성)이다 — A는 Accounting(과금 관리)이다."
 },
 {
  "s": "s4",
  "t": "Syslog Severity는 숫자가 클수록 심각하다 — 0(Emergency)이 가장 심각하고 7(Debug)이 가장 낮다."
 },
 {
  "s": "s5",
  "t": "IR에 다음 명령어 주소가 저장된다 — 다음 명령어 주소는 PC, IR은 현재 실행 중인 명령어"
 },
 {
  "s": "s5",
  "t": "RISC는 가변 길이 명령어를 쓴다 — RISC는 고정 길이, 가변 길이는 CISC(x86)"
 },
 {
  "s": "s5",
  "t": "SRAM은 Refresh가 필요해 주기억장치로 쓴다 — Refresh가 필요한 것은 DRAM, SRAM은 캐시"
 },
 {
  "s": "s5",
  "t": "Write-Back은 쓰기마다 메모리에 즉시 반영한다 — 즉시 반영은 Write-Through, Write-Back은 교체 시 Dirty 블록만"
 },
 {
  "s": "s5",
  "t": "페이지 프레임을 늘리면 FIFO의 페이지 부재가 항상 줄어든다 — FIFO는 벨레이디 모순으로 오히려 늘 수 있음"
 },
 {
  "s": "s5",
  "t": "DMA 전송 중에도 CPU가 데이터를 한 워드씩 옮긴다 — DMA 제어기가 직접 전송, CPU는 완료 인터럽트만 받음"
 },
 {
  "s": "s5",
  "t": "퀵 정렬은 최악에도 O(n log n)이다 — 최악은 O(n²), 항상 O(n log n)은 병합·힙 정렬"
 },
 {
  "s": "s5",
  "t": "BFS는 스택을 사용한다 — BFS는 큐, DFS가 스택·재귀"
 },
 {
  "s": "s5",
  "t": "은행원 알고리즘은 교착상태 예방 기법이다 — 안전 상태를 유지하는 회피(Avoidance) 기법"
 },
 {
  "s": "s5",
  "t": "스레드는 프로세스와 자원을 공유하지 않는다 — 코드·데이터·힙을 공유, 스택·레지스터만 별도"
 },
 {
  "s": "s5",
  "t": "2NF는 이행 함수 종속을 제거한다 — 2NF는 부분 함수 종속, 이행 종속 제거는 3NF"
 },
 {
  "s": "s5",
  "t": "TRUNCATE는 DML이다 — TRUNCATE는 DDL, DELETE가 DML"
 },
 {
  "s": "s5",
  "t": "GRANT·REVOKE는 TCL이다 — 권한 제어는 DCL, TCL은 COMMIT·ROLLBACK·SAVEPOINT"
 },
 {
  "s": "s5",
  "t": "INNER JOIN은 일치하지 않는 행도 NULL로 보존한다 — NULL 보존은 OUTER JOIN"
 },
 {
  "s": "s5",
  "t": "NoSQL은 ACID의 강한 일관성을 기본으로 한다 — NoSQL은 BASE의 결과적 일관성이 기본"
 },
 {
  "s": "s5",
  "t": "애자일은 문서 중심의 순차 개발이다 — 문서 중심 순차는 폭포수, 애자일은 반복·변화 수용"
 },
 {
  "s": "s5",
  "t": "IDF가 건물의 주통신실이다 — 주통신실은 MDF, IDF는 층통신실"
 },
 {
  "s": "s5",
  "t": "Cat 6는 10Gbps·500MHz 규격이다 — 10Gbps·500MHz는 Cat 6A, Cat 6는 1Gbps·250MHz"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "신호·전송 기초",
  "title": "신호의 분류·매개변수와 통신 방향",
  "ref": "기본서 CHAPTER 01 정보전송 기초 1.1",
  "body": [
   {
    "h": "신호의 분류",
    "tb": {
     "head": [
      "분류",
      "의미",
      "예"
     ],
     "rows": [
      [
       "아날로그",
       "시간·크기가 연속인 신호",
       "음성, 정현파"
      ],
      [
       "디지털",
       "0·1 등 이산값 신호",
       "컴퓨터 데이터"
      ],
      [
       "주기 신호",
       "일정 주기로 반복",
       "사인파"
      ],
      [
       "비주기 신호",
       "반복성 없음",
       "잡음, 단일 펄스"
      ]
     ]
    }
   },
   {
    "h": "신호 매개변수",
    "li": [
     "진폭(A): 신호의 크기(전압·전력)",
     "주파수(f): 1초당 사이클 수[Hz], 주기 T = 1/f",
     "위상(θ): 기준 시점에 대한 파형의 상대 위치(각도)",
     "파장(λ) = c/f, c = 3×10⁸m/s → 300MHz일 때 1m",
     "주기 신호는 기본파와 고조파(정수배 주파수)의 합으로 표현된다(푸리에 급수)"
    ]
   },
   {
    "h": "주파수 대역(ITU 분류)",
    "tb": {
     "head": [
      "대역",
      "범위",
      "용도"
     ],
     "rows": [
      [
       "LF·MF",
       "30kHz~3MHz",
       "AM 방송(지표파)"
      ],
      [
       "HF",
       "3~30MHz",
       "단파(전리층 반사)"
      ],
      [
       "VHF",
       "30~300MHz",
       "FM 방송"
      ],
      [
       "UHF",
       "300MHz~3GHz",
       "TV·이동통신"
      ],
      [
       "SHF",
       "3~30GHz",
       "위성·5G·Wi-Fi"
      ],
      [
       "EHF",
       "30~300GHz",
       "mmWave·6G"
      ]
     ]
    }
   },
   {
    "h": "통신 방향과 데시벨",
    "li": [
     "Simplex(단방향): TV·라디오",
     "Half-Duplex(반이중): 양방향 교대, 무전기",
     "Full-Duplex(전이중): 양방향 동시, 전화(FDD·TDD로 구현)",
     "dB = 10log₁₀(전력비): 2배 ≈ 3dB, 10배 = 10dB, 100배 = 20dB",
     "dBm = 1mW 기준 절대 전력: 1mW = 0dBm, 1W = 30dBm",
     "자유공간 경로손실은 거리 제곱에 비례 → 거리 2배 시 약 6dB 증가"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "전송속도·채널용량",
  "title": "전송속도와 채널 용량(샤논·나이퀴스트)",
  "ref": "기본서 CHAPTER 01 정보전송 기초 1.2",
  "body": [
   {
    "h": "bps와 Baud",
    "li": [
     "bps: 초당 전송 비트 수(데이터 전송속도)",
     "Baud: 초당 신호(심볼) 변화 수(변조속도)",
     "bps = Baud × log₂M (M = 신호 레벨·심볼 수)",
     "M=2 → bps = Baud, M=4(QPSK) → bps = 2×Baud, M=16 → 4×Baud"
    ]
   },
   {
    "h": "채널 용량 공식",
    "tb": {
     "head": [
      "구분",
      "공식",
      "전제"
     ],
     "rows": [
      [
       "샤논",
       "C = B·log₂(1 + S/N)",
       "잡음(백색 가우시안) 있는 채널"
      ],
      [
       "나이퀴스트",
       "C = 2B·log₂M",
       "잡음 없는 이상 채널"
      ],
      [
       "표본화 정리",
       "fs ≥ 2fmax",
       "신호 복원 조건"
      ]
     ]
    }
   },
   {
    "h": "샤논 공식 해석",
    "li": [
     "용량은 대역폭 B에 정비례, S/N에는 로그로 증가",
     "S/N은 배수로 대입: 30dB → 1000, 20dB → 100",
     "S/N = 2ⁿ − 1이면 log₂ 값이 n: S/N 3 → 2, 15 → 4, 255 → 8, 1023 → 10",
     "예: B 4kHz, S/N 255 → C = 4000 × 8 = 32kbps"
    ]
   },
   {
    "h": "SNR 데시벨 환산",
    "tb": {
     "head": [
      "SNR(dB)",
      "S/N(배)",
      "비고"
     ],
     "rows": [
      [
       "10dB",
       "10",
       "—"
      ],
      [
       "20dB",
       "100",
       "—"
      ],
      [
       "30dB",
       "1,000",
       "전화급 회선 예제 단골"
      ],
      [
       "40dB",
       "10,000",
       "—"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-1",
  "t": "아날로그·디지털 변조",
  "title": "아날로그 변조와 디지털 변조",
  "ref": "기본서 CHAPTER 02 변복조 기술 2.1~2.2",
  "body": [
   {
    "h": "아날로그 변조",
    "tb": {
     "head": [
      "방식",
      "원리",
      "특징"
     ],
     "rows": [
      [
       "AM",
       "반송파 진폭을 신호에 따라 변화",
       "회로 단순, 잡음 취약, Pt = Pc(1+m²/2)"
      ],
      [
       "FM",
       "반송파 주파수 변화",
       "잡음 강함, BW ≈ 2(Δf + fm), β = Δf/fm"
      ],
      [
       "PM",
       "반송파 위상 변화",
       "FM과 함께 각도 변조"
      ]
     ]
    }
   },
   {
    "h": "AM의 측파대 방식",
    "li": [
     "DSB: 양측파대, 대역폭 2fm",
     "SSB: 한쪽 측파대만, 대역폭 fm(DSB의 절반), 전력·대역 효율 우수",
     "VSB: 한쪽 측파대 + 다른 쪽 일부(잔류), 아날로그 TV 영상 신호",
     "변조도 m > 1이면 과변조로 왜곡 발생"
    ]
   },
   {
    "h": "디지털 변조(반송파 편이 변조)",
    "tb": {
     "head": [
      "방식",
      "변화 요소",
      "심볼당 비트"
     ],
     "rows": [
      [
       "ASK(OOK)",
       "진폭",
       "1(2진)"
      ],
      [
       "FSK",
       "주파수",
       "1(BFSK)"
      ],
      [
       "BPSK",
       "위상(0·π)",
       "1"
      ],
      [
       "QPSK",
       "위상 4개",
       "2"
      ],
      [
       "8PSK",
       "위상 8개",
       "3"
      ],
      [
       "16/64/256-QAM",
       "진폭+위상",
       "4/6/8"
      ]
     ]
    }
   },
   {
    "h": "성상도와 트레이드오프",
    "li": [
     "성상도(Constellation): 심볼을 I·Q 평면의 점으로 표시",
     "변조 차수 M↑ → 심볼당 비트↑(log₂M) → 동일 대역에서 속도↑",
     "신호점 간격↓ → 같은 잡음에서 비트 오류율↑ → 높은 SNR 필요",
     "적응 변조(AMC): 채널 상태가 좋으면 고차 QAM, 나쁘면 QPSK(LTE·5G·Wi-Fi)",
     "DPSK: 이전 심볼과의 위상 차로 정보 표현 → 동기 검파용 기준 위상 불필요"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-2",
  "t": "PCM·펄스변조",
  "title": "PCM과 펄스 변조",
  "ref": "기본서 CHAPTER 02 변복조 기술 2.3",
  "body": [
   {
    "h": "PCM 4단계(표·양·부·복)",
    "tb": {
     "head": [
      "단계",
      "내용",
      "핵심"
     ],
     "rows": [
      [
       "표본화",
       "일정 간격으로 신호값 추출(PAM)",
       "fs ≥ 2fmax, 미달 시 에일리어싱"
      ],
      [
       "양자화",
       "표본값을 유한 레벨로 근사",
       "양자화 잡음 발생"
      ],
      [
       "부호화",
       "레벨에 이진 코드 할당",
       "n bit → 2ⁿ 레벨"
      ],
      [
       "복호화",
       "수신 측 역변환 후 LPF로 복원",
       "—"
      ]
     ]
    }
   },
   {
    "h": "전화 음성 PCM",
    "li": [
     "음성 대역 약 4kHz → 표본화 8kHz(주기 125μs)",
     "8bit 부호화 → 8,000 × 8 = 64kbps(DS0)",
     "양자화 비트 1개 증가 → 레벨 2배, SQNR 약 6dB 개선",
     "비균일 양자화(압신): μ-law(북미·일본), A-law(유럽) — 작은 신호의 SQNR 개선"
    ]
   },
   {
    "h": "기타 펄스 변조",
    "tb": {
     "head": [
      "방식",
      "정보를 싣는 요소",
      "비고"
     ],
     "rows": [
      [
       "PAM",
       "펄스 진폭",
       "표본화 결과"
      ],
      [
       "PWM",
       "펄스 폭",
       "모터 제어 등"
      ],
      [
       "PPM",
       "펄스 위치",
       "—"
      ],
      [
       "DM",
       "차분(1bit)",
       "경사 과부하·입상 잡음"
      ],
      [
       "DPCM",
       "예측 차분(다비트)",
       "중복성 제거"
      ],
      [
       "ADPCM",
       "적응 스텝 차분",
       "32kbps 음성"
      ]
     ]
    }
   },
   {
    "h": "델타 변조(DM)의 잡음",
    "li": [
     "경사 과부하 잡음: 입력이 급변해 계단 근사가 따라가지 못함 → 스텝 크기 증가로 완화",
     "입상(granular) 잡음: 입력이 평탄할 때 계단이 위아래로 진동 → 스텝 크기 감소로 완화",
     "두 잡음은 스텝 크기에 대해 상충 → 적응형 DM(ADM)으로 절충"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-3",
  "t": "동기·전송방식·선로부호",
  "title": "동기 방식·직렬/병렬·선로부호",
  "ref": "기본서 CHAPTER 02 변복조 기술 2.4~2.5, §5 디지털 신호",
  "body": [
   {
    "h": "비동기식과 동기식",
    "tb": {
     "head": [
      "구분",
      "비동기식",
      "동기식"
     ],
     "rows": [
      [
       "단위",
       "문자(캐릭터)",
       "블록(프레임)"
      ],
      [
       "동기 수단",
       "Start(1)·Stop(1~2) 비트",
       "SYN 문자·플래그(01111110)"
      ],
      [
       "속도",
       "저속(약 1200bps 이하)",
       "고속"
      ],
      [
       "효율",
       "1+8+1비트 → 80%",
       "오버헤드 적어 높음"
      ],
      [
       "예",
       "RS-232 단말",
       "HDLC·SDLC"
      ]
     ]
    }
   },
   {
    "h": "직렬·병렬, 기저대역·광대역",
    "li": [
     "직렬: 1개 선로로 비트 순차 전송 → 장거리·저비용(USB·UART·RS-232)",
     "병렬: 여러 선로로 동시 전송 → 단거리·고속, 선간 스큐 문제",
     "기저대역(Baseband): 디지털 신호를 변조 없이 전송 → 이더넷 LAN",
     "광대역(Broadband): 반송파 변조로 여러 채널 동시 전송 → CATV"
    ]
   },
   {
    "h": "선로부호(라인 코딩)",
    "tb": {
     "head": [
      "부호",
      "규칙",
      "특징"
     ],
     "rows": [
      [
       "NRZ",
       "비트 구간 동안 레벨 유지",
       "단순, 연속 0·1에서 동기 상실"
      ],
      [
       "RZ",
       "비트 중간에 0으로 복귀",
       "동기 유리, 대역폭 증가"
      ],
      [
       "맨체스터",
       "비트 중간 천이(클록 포함)",
       "10BASE-T, 대역폭 2배"
      ],
      [
       "AMI",
       "1을 +/− 교대, 0은 0V",
       "DC 성분 억제, 연속 0 문제"
      ],
      [
       "HDB3",
       "0 4개 연속을 위반 펄스 패턴으로 대체",
       "E1(2.048Mbps)"
      ],
      [
       "B8ZS",
       "0 8개 연속 대체",
       "T1(1.544Mbps)"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "3-1",
  "t": "전송매체·무선·위성",
  "title": "유선·무선 전송매체와 위성통신",
  "ref": "기본서 CHAPTER 03 전송매체 3.1~3.3",
  "body": [
   {
    "h": "유선 매체",
    "li": [
     "트위스티드 페어: 두 선을 꼬아 누화·전자기 간섭 감소, UTP·STP, RJ-45",
     "동축케이블: 내부 도체 + 절연체 + 외부 도체, 50Ω(데이터·RF)·75Ω(CATV), BNC·F형",
     "광섬유: 코어(굴절률 큼) + 클래딩(작음), 전반사 원리, 광대역·전자기 간섭 없음·보안·경량 / 가격·접속 어려움"
    ]
   },
   {
    "h": "UTP 카테고리",
    "tb": {
     "head": [
      "등급",
      "속도",
      "거리"
     ],
     "rows": [
      [
       "Cat5e",
       "1Gbps",
       "100m"
      ],
      [
       "Cat6",
       "1Gbps / 10Gbps",
       "100m / 55m"
      ],
      [
       "Cat6a",
       "10Gbps",
       "100m"
      ],
      [
       "Cat7",
       "10Gbps(STP)",
       "100m"
      ],
      [
       "Cat8",
       "40Gbps",
       "30m"
      ]
     ]
    }
   },
   {
    "h": "광섬유 SMF·MMF",
    "tb": {
     "head": [
      "구분",
      "SMF",
      "MMF"
     ],
     "rows": [
      [
       "파장",
       "1310·1550nm",
       "850·1300nm"
      ],
      [
       "코어 직경",
       "약 9μm",
       "50·62.5μm"
      ],
      [
       "분산",
       "모드 분산 없음",
       "모드 분산(GI형이 SI형보다 작음)"
      ],
      [
       "용도",
       "장거리·기간망",
       "건물 내 단거리"
      ]
     ]
    }
   },
   {
    "h": "무선 LAN(Wi-Fi) 표준",
    "tb": {
     "head": [
      "표준",
      "대역",
      "최대 속도·기술"
     ],
     "rows": [
      [
       "802.11a",
       "5GHz",
       "54Mbps(OFDM)"
      ],
      [
       "802.11b",
       "2.4GHz",
       "11Mbps(DSSS)"
      ],
      [
       "802.11g",
       "2.4GHz",
       "54Mbps(OFDM)"
      ],
      [
       "802.11n(Wi-Fi 4)",
       "2.4/5GHz",
       "600Mbps, MIMO"
      ],
      [
       "802.11ac(Wi-Fi 5)",
       "5GHz",
       "6.9Gbps, MU-MIMO·256QAM"
      ],
      [
       "802.11ax(Wi-Fi 6)",
       "2.4/5GHz(6E는 6GHz)",
       "9.6Gbps, OFDMA·1024QAM"
      ],
      [
       "802.11be(Wi-Fi 7)",
       "2.4/5/6GHz",
       "46Gbps, 4096QAM·MLO"
      ]
     ]
    }
   },
   {
    "h": "근거리 무선·IoT와 위성",
    "li": [
     "Bluetooth: 2.4GHz ISM, PAN, BLE 저전력, Class 1·2·3(송신 출력)",
     "Zigbee: IEEE 802.15.4, 메시, 저전력 홈오토메이션 / NFC: 13.56MHz 근접",
     "LPWAN: LoRa(비면허), NB-IoT·LTE Cat-M1(셀룰러)",
     "GEO 35,786km(정지, 3기로 전 지구, 지상-위성-지상 약 0.25초 지연) / MEO GPS·갈릴레오 / LEO 500~2,000km Starlink·OneWeb(저지연, 다수 위성 필요)",
     "VSAT: 소형 안테나 위성 단말 / 위성 다중접속: FDMA·TDMA·CDMA·SDMA, DAMA(요구 할당)"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "4-1",
  "t": "다중화·다중접속",
  "title": "다중화·다중접속·MIMO",
  "ref": "기본서 CHAPTER 04 다중화·에러 제어 4.1~4.2",
  "body": [
   {
    "h": "다중화 방식",
    "tb": {
     "head": [
      "방식",
      "분할 자원",
      "핵심"
     ],
     "rows": [
      [
       "FDM",
       "주파수",
       "아날로그 중심, 채널 간 보호대역"
      ],
      [
       "TDM",
       "시간",
       "디지털 중심, STDM(고정)·ATDM(동적)"
      ],
      [
       "CDM",
       "코드",
       "PN 코드 확산, CDMA"
      ],
      [
       "WDM",
       "광 파장",
       "CWDM(소수 채널)·DWDM(40~160채널)"
      ],
      [
       "OFDM",
       "직교 부반송파",
       "다중경로 페이딩 강함, Wi-Fi·LTE·5G"
      ],
      [
       "SDM",
       "공간",
       "MIMO 다중 안테나"
      ]
     ]
    }
   },
   {
    "h": "동기식 TDM vs 통계적(비동기) TDM",
    "li": [
     "STDM: 모든 입력에 고정 타임슬롯 → 데이터 없으면 슬롯 낭비",
     "ATDM(통계적): 데이터 있는 채널에만 동적 할당 → 효율↑, 슬롯마다 주소(채널 식별) 정보 필요",
     "T1 = 24채널 × 8bit + 프레이밍 1bit = 193bit × 8,000 = 1.544Mbps / E1 = 32 × 64kbps = 2.048Mbps"
    ]
   },
   {
    "h": "OFDM 요점",
    "li": [
     "부반송파를 서로 직교시켜 스펙트럼을 겹쳐도 간섭 없음 → 주파수 효율↑",
     "고속 직렬 데이터를 다수 저속 병렬 부반송파로 분할 → 심볼 길이↑ → 다중경로에 강함",
     "보호구간(CP, 순환 전치)으로 심볼 간 간섭(ISI) 제거",
     "단점: PAPR(최대 대 평균 전력비)이 높고 주파수 오프셋에 민감 → LTE 상향은 SC-FDMA 사용",
     "OFDMA: 부반송파 묶음을 사용자별로 할당(Wi-Fi 6·5G NR)"
    ]
   },
   {
    "h": "다중접속·MIMO·빔포밍",
    "li": [
     "다중접속: FDMA·TDMA·CDMA·OFDMA·SDMA·NOMA(전력 영역 중첩)",
     "CDMA: 원근 문제 → 전력 제어 필수, 소프트 핸드오프 가능",
     "MIMO 이득: 공간 다중화(용량), 다이버시티(신뢰도), 빔포밍(방향성)",
     "SU-MIMO(단일 사용자) / MU-MIMO(다중 사용자) / Massive MIMO(수십~수백 안테나, 5G)",
     "빔포밍: 위상 배열로 빔 방향 형성 → mmWave 경로손실 보상(5G 핵심)"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "4-2",
  "t": "에러·흐름 제어",
  "title": "에러 검출·정정과 흐름 제어",
  "ref": "기본서 CHAPTER 04 다중화·에러 제어 4.3~4.4",
  "body": [
   {
    "h": "에러 검출 방법",
    "tb": {
     "head": [
      "방법",
      "원리",
      "한계·특징"
     ],
     "rows": [
      [
       "패리티",
       "1의 개수를 홀수/짝수로 맞춤",
       "홀수 개 오류만 검출"
      ],
      [
       "체크섬",
       "1의 보수 합",
       "IP·TCP·UDP 헤더"
      ],
      [
       "CRC",
       "생성 다항식 나눗셈 나머지",
       "버스트 오류에 강함, CRC-16·CRC-32(이더넷)"
      ],
      [
       "해밍 부호",
       "패리티 위치 조합",
       "검출 + 1비트 정정"
      ]
     ]
    }
   },
   {
    "h": "해밍 거리와 해밍 부호",
    "li": [
     "해밍 거리 d: 두 부호어에서 서로 다른 비트 수",
     "검출 가능 = d − 1, 정정 가능 = ⌊(d − 1)/2⌋",
     "패리티 비트 수 p: 2ᵖ ≥ m + p + 1 (m = 데이터 비트) → m=4면 p=3, (7,4) 부호",
     "CRC 검사 비트 수 = 생성 다항식의 최고 차수(x⁴+x+1 → 4비트)"
    ]
   },
   {
    "h": "FEC와 BEC(ARQ)",
    "tb": {
     "head": [
      "구분",
      "FEC(전진 오류 정정)",
      "BEC(후진 오류 정정)"
     ],
     "rows": [
      [
       "방식",
       "수신 측이 직접 정정",
       "검출 후 재전송 요청"
      ],
      [
       "역채널",
       "불필요",
       "필요(ACK/NAK)"
      ],
      [
       "용도",
       "위성·방송·실시간",
       "데이터 신뢰성 중시"
      ],
      [
       "예",
       "해밍·BCH·RS·터보·LDPC·Polar",
       "S&W·GBN·SR ARQ"
      ]
     ]
    }
   },
   {
    "h": "ARQ와 흐름 제어",
    "li": [
     "Stop-and-Wait: 1프레임 → ACK 대기 → 다음, 단순·효율 낮음(전파 지연 클수록 악화)",
     "Go-Back-N: 오류 프레임부터 이후 모두 재전송, 윈도우 ≤ 2ⁿ − 1",
     "Selective Repeat: 오류 프레임만 재전송, 윈도우 ≤ 2ⁿ⁻¹, 수신 버퍼 필요",
     "HARQ: FEC + ARQ, 재전송 신호를 결합(Chase Combining·Incremental Redundancy) — LTE·5G",
     "슬라이딩 윈도우: ACK 없이 윈도우 크기만큼 연속 전송 → 효율↑ / TCP: Slow Start·혼잡 회피(AIMD)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "단말 장치",
  "title": "DTE·DCE와 단말 인터페이스·다중화",
  "ref": "기본서 CHAPTER 01 단말 장치",
  "body": [
   {
    "h": "DTE와 DCE",
    "tb": {
     "head": [
      "구분",
      "의미",
      "예"
     ],
     "rows": [
      [
       "DTE",
       "Data Terminal Equipment, 데이터의 발생·처리 장치(사용자 측)",
       "PC·터미널·서버·호스트"
      ],
      [
       "DCE",
       "Data Circuit-terminating Equipment, 회선 종단·신호 변환 장치(회선 측)",
       "모뎀·DSU·CSU"
      ]
     ]
    }
   },
   {
    "h": "DTE-DCE 인터페이스",
    "li": [
     "EIA-232(구 RS-232): 저속 직렬 인터페이스, DB-25·DB-9 커넥터",
     "ITU-T V.24: 상호접속 회로(신호선) 기능 정의, V.28: 전기적 특성",
     "V.35: 고속 동기식 인터페이스(라우터-CSU/DSU 접속에 흔히 사용)",
     "X.21: 공중 데이터망 디지털 동기식 인터페이스, X.25: 패킷 교환망 DTE-DCE 접속 규격",
     "주요 신호: TD·RD(데이터), RTS·CTS(송신 요구·허가 = 흐름 제어), DTR·DSR(장치 준비), DCD(반송파 검출), RI(링 지시), GND"
    ]
   },
   {
    "h": "다중화기·집중화기",
    "li": [
     "MUX: 여러 저속 채널을 하나의 고속 회선에 실어 보냄 — 입력 용량 합 = 출력 용량(정적 할당)",
     "FDM: 주파수 분할, 채널 간 보호 대역(Guard Band) 필요 / TDM: 시간 슬롯 분할",
     "STDM(통계적·비동기 TDM): 데이터가 있는 채널에만 슬롯 동적 할당, 주소 정보 필요, 효율↑",
     "집중화기(Concentrator): 입력 합 ≥ 출력, 버퍼에 저장 후 동적 할당 — 대표 예 FEP"
    ]
   },
   {
    "h": "코덱(Codec)",
    "li": [
     "Coder-Decoder: 아날로그 음성·영상을 디지털로 부호화하고 다시 복원",
     "음성: G.711(PCM, 64kbps)·G.729(CS-ACELP, 8kbps), 영상: H.264(AVC)·H.265(HEVC)·H.266(VVC)",
     "오디오: AAC·MP3·OPUS"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "모뎀·DSU·CSU",
  "title": "모뎀·DSL·DSU·CSU",
  "ref": "기본서 CHAPTER 01 단말 장치 (1.2·1.3)",
  "body": [
   {
    "h": "모뎀의 원리",
    "li": [
     "Modulator + Demodulator: 디지털 데이터 ↔ 아날로그 반송파 변환",
     "변조 방식: ASK(진폭)·FSK(주파수)·PSK(위상)·QAM(진폭+위상)",
     "종류: 아날로그(전화선) 모뎀·DSL 모뎀·케이블 모뎀(CATV망)·무선 모뎀(LTE·5G)"
    ]
   },
   {
    "h": "ITU-T V 시리즈",
    "tb": {
     "head": [
      "표준",
      "속도",
      "비고"
     ],
     "rows": [
      [
       "V.21",
       "300bps",
       "FSK 전이중"
      ],
      [
       "V.22",
       "1,200bps",
       "PSK"
      ],
      [
       "V.32",
       "9,600bps",
       "QAM·에코 제거"
      ],
      [
       "V.34",
       "33.6kbps",
       "아날로그 모뎀 대칭 최고속"
      ],
      [
       "V.90",
       "하향 56kbps",
       "상향 33.6kbps"
      ],
      [
       "V.92",
       "하향 56kbps",
       "상향 최대 48kbps·56k 계열 최종"
      ]
     ]
    }
   },
   {
    "h": "DSL 종류",
    "tb": {
     "head": [
      "종류",
      "대칭성",
      "특징"
     ],
     "rows": [
      [
       "ADSL",
       "비대칭",
       "하향 약 8Mbps·상향 약 1Mbps, 전화와 동시 사용"
      ],
      [
       "VDSL",
       "비대칭(대칭 모드도 있음)",
       "하향 약 52Mbps·상향 약 16Mbps, 짧은 거리"
      ],
      [
       "SDSL",
       "대칭",
       "상·하향 동일 속도"
      ],
      [
       "HDSL",
       "대칭",
       "T1/E1 대체용 고속 전송"
      ]
     ]
    }
   },
   {
    "h": "DSU·CSU",
    "li": [
     "DSU(Data Service Unit): DTE의 단극성 디지털 신호를 디지털 회선용 양극성 등으로 변환, 가입자 측, 베이스밴드 전송",
     "CSU(Channel Service Unit): 사업자 디지털 회선(T1/E1) 측 종단, 프레이밍·회선 보호·루프백 진단",
     "실무에서는 CSU/DSU 일체형 장비가 일반적",
     "비교: 모뎀 = 디지털↔아날로그, DSU = 디지털↔디지털"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "LAN 장비·스위치",
  "title": "계층별 LAN 장비·스위칭·VLAN·STP",
  "ref": "기본서 CHAPTER 02 전송 장비 (2.1~2.3·2.6)",
  "body": [
   {
    "h": "계층별 장비와 도메인",
    "tb": {
     "head": [
      "장비",
      "충돌 도메인",
      "브로드캐스트 도메인"
     ],
     "rows": [
      [
       "Repeater·Hub (L1)",
       "분리 안 함(전체 1개)",
       "분리 안 함"
      ],
      [
       "Bridge·Switch (L2)",
       "포트마다 분리",
       "분리 안 함(VLAN 시 분리)"
      ],
      [
       "Router (L3)",
       "인터페이스마다 분리",
       "인터페이스마다 분리"
      ]
     ]
    }
   },
   {
    "h": "리피터·허브·브리지",
    "li": [
     "Repeater: 감쇠된 신호 증폭·재생, 10Mbps 이더넷 5-4-3 규칙(세그먼트 5·리피터 4·사용자 세그먼트 3)",
     "Hub: 다포트 리피터, Passive·Active·Intelligent, CSMA/CD 충돌 발생",
     "Bridge: MAC 주소 학습·필터링·포워딩, 소프트웨어 처리로 포트 수 적음"
    ]
   },
   {
    "h": "스위치 동작 방식",
    "tb": {
     "head": [
      "방식",
      "전달 시점",
      "특징"
     ],
     "rows": [
      [
       "Store-and-Forward",
       "프레임 전체 수신 후",
       "CRC 검사, 지연 큼·신뢰성 높음"
      ],
      [
       "Cut-Through",
       "목적지 MAC 수신 직후",
       "지연 최소, 오류 프레임도 전달"
      ],
      [
       "Fragment-Free",
       "첫 64바이트 수신 후",
       "충돌 조각(Runt) 제거, 절충형"
      ]
     ]
    }
   },
   {
    "h": "VLAN·STP",
    "li": [
     "VLAN: 논리적 LAN 분할로 브로드캐스트 도메인 분리·보안 향상, VLAN 간 통신은 L3 장비 필요",
     "IEEE 802.1Q: 4바이트 태그, VLAN ID 12비트(0·4095 예약 → 1~4094 사용), Native VLAN은 태그 없이 전송",
     "VTP: 스위치 간 VLAN 정보 동기화(Cisco)",
     "STP(802.1D): BPDU 교환, Bridge ID(우선순위+MAC) 최소 장비가 Root Bridge, 포트 상태 Blocking→Listening→Learning→Forwarding",
     "RSTP(802.1w) 빠른 수렴, MSTP(802.1s) VLAN 그룹별 다중 트리"
    ]
   },
   {
    "h": "무선 장비",
    "li": [
     "AP: 무선 단말을 유선망에 연결하는 브리지",
     "WLAN Controller: 다수 AP를 CAPWAP으로 중앙 관리(Thin AP 구조)",
     "Wi-Fi Mesh: 다중 노드 자가 치유(Self-Healing), Wi-Fi Alliance EasyMesh"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "라우터·라우팅",
  "title": "라우터·L3~L7 스위치·라우팅 프로토콜",
  "ref": "기본서 CHAPTER 02 전송 장비 (2.4·2.5)",
  "body": [
   {
    "h": "라우터와 상위 계층 장비",
    "li": [
     "Router: IP 주소 기반 경로 결정, 서로 다른 네트워크 연결, NAT·DHCP·ACL 부가 기능",
     "L3 Switch: 라우팅+스위칭을 ASIC으로 가속, LAN 내부 VLAN 간 고속 라우팅",
     "L4 Switch: TCP/UDP 포트 기반 부하 분산 — Round Robin·Least Connection·Hash",
     "L7 Switch: URL·쿠키·콘텐츠 기반 분산, SSL Offloading",
     "Gateway: 서로 다른 프로토콜 체계 간 변환(Email·Voice·IoT Gateway)"
    ]
   },
   {
    "h": "라우팅 분류",
    "li": [
     "정적(Static): 관리자가 수동 설정, 소규모·보안 / 동적(Dynamic): 프로토콜로 자동 학습",
     "Distance Vector: 이웃에게 라우팅 테이블 주기 전달, Bellman-Ford, Count to Infinity → Split Horizon·Poison Reverse·Hold-down으로 완화",
     "Link State: LSA 플러딩으로 전체 토폴로지 DB 구성 후 Dijkstra(SPF) 계산, 빠른 수렴",
     "Path Vector: 경유 AS 경로 목록으로 루프 방지(BGP)"
    ]
   },
   {
    "h": "주요 프로토콜",
    "tb": {
     "head": [
      "프로토콜",
      "분류",
      "핵심 수치·특징"
     ],
     "rows": [
      [
       "RIP",
       "IGP·DV",
       "홉 수, 최대 15, 30초 갱신, UDP 520"
      ],
      [
       "OSPF",
       "IGP·LS",
       "Cost(기준 대역폭/링크 대역폭), Area 0, IP 89"
      ],
      [
       "EIGRP",
       "IGP·하이브리드",
       "DUAL 알고리즘, 대역폭·지연 메트릭"
      ],
      [
       "IS-IS",
       "IGP·LS",
       "OSI 기반, ISP 백본"
      ],
      [
       "BGP",
       "EGP·Path Vector",
       "AS 간, TCP 179, 인터넷 백본"
      ]
     ]
    }
   },
   {
    "h": "OSPF Cost 계산",
    "li": [
     "Cost = 기준 대역폭(기본 100Mbps) ÷ 인터페이스 대역폭",
     "10Mbps → 10, 100Mbps → 1, 1.544Mbps(T1) → 64(소수점 이하 버림)",
     "경로 Cost는 경유 링크 Cost의 합 — 합이 작은 경로 선택"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "교환 방식",
  "title": "회선·메시지·패킷·셀 교환",
  "ref": "기본서 CHAPTER 03 교환 장비 (3.1)",
  "body": [
   {
    "h": "회선 교환",
    "li": [
     "호 설정 → 데이터 전송 → 호 해제 3단계, 통신 중 전용 경로 독점",
     "장점: 일정한 품질·실시간·전송 지연 고정 / 단점: 유휴 시간에도 회선 점유(낭비), 호 설정 지연",
     "예: PSTN(공중 전화망)·ISDN"
    ]
   },
   {
    "h": "메시지 교환",
    "li": [
     "메시지 전체를 교환기에 축적(Store)한 뒤 전달(Forward)",
     "회선 공유로 효율↑, 우선순위·동보(Broadcast) 전송·코드 변환 가능",
     "메시지 길이 제한이 없어 지연이 크고 실시간 부적합 — 전보·이메일형"
    ]
   },
   {
    "h": "패킷 교환",
    "tb": {
     "head": [
      "방식",
      "연결",
      "특징"
     ],
     "rows": [
      [
       "데이터그램",
       "비연결형",
       "패킷마다 독립 경로, 순서 뒤바뀜 가능, 장애에 유연(IP·UDP)"
      ],
      [
       "가상 회선",
       "연결형",
       "논리적 경로 설정 후 같은 경로로 순서대로 전달(X.25·Frame Relay)"
      ]
     ]
    }
   },
   {
    "h": "셀 교환(ATM)",
    "li": [
     "53바이트 고정 셀 = 헤더 5바이트 + 정보 48바이트, 하드웨어 고속 교환",
     "VPI(가상 경로 식별자)·VCI(가상 채널 식별자)로 연결 식별 — 가상 회선 기반",
     "AAL(ATM Adaptation Layer): 상위 데이터를 48바이트 단위로 분할·재조립(AAL1~AAL5)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-6",
  "t": "VoIP·전화 교환",
  "title": "VoIP 프로토콜·품질·전화 교환기",
  "ref": "기본서 CHAPTER 03 교환 장비 (3.2·3.3)",
  "body": [
   {
    "h": "호 제어 프로토콜",
    "tb": {
     "head": [
      "프로토콜",
      "표준화",
      "특징"
     ],
     "rows": [
      [
       "SIP",
       "IETF",
       "텍스트 기반·HTTP 유사, UA·Proxy·Registrar·Redirect"
      ],
      [
       "H.323",
       "ITU-T",
       "바이너리(ASN.1) 우산 규격, Gatekeeper·Gateway·MCU"
      ],
      [
       "MGCP·Megaco(H.248)",
       "IETF·ITU-T",
       "MGC가 MG를 제어하는 주종(Master-Slave) 구조"
      ]
     ]
    }
   },
   {
    "h": "SIP 메시지",
    "li": [
     "요청: INVITE(세션 시작)·ACK(최종 응답 확인)·BYE(종료)·CANCEL(진행 중 요청 취소)·REGISTER(위치 등록)·OPTIONS(능력 조회)",
     "응답: 1xx 임시(100 Trying·180 Ringing), 2xx 성공(200 OK), 3xx 재지정, 4xx 클라이언트 오류(404), 5xx 서버 오류, 6xx 전역 실패",
     "기본 포트 5060(UDP/TCP), TLS는 5061"
    ]
   },
   {
    "h": "미디어 전송과 품질",
    "li": [
     "RTP: UDP 위 실시간 미디어 전송, 순서번호·타임스탬프로 재생 순서·지터 보정",
     "RTCP: 패킷 손실·지터·지연 통계 보고(품질 제어), SRTP: RTP 암호화·인증",
     "품질 지표: 지연(Latency)·지터(Jitter)·패킷 손실, ITU-T G.114 단방향 지연 150ms 이내 권고",
     "MOS(Mean Opinion Score) 1~5점 주관 평가, G.711(PCM) 64kbps가 음성 기준 코덱"
    ]
   },
   {
    "h": "교환기 장비",
    "li": [
     "PBX: 기업 내부 사설 교환기(TDM 기반), 내선 통화·외부 회선 공유",
     "IP-PBX: IP 기반 PBX, SIP 단말 수용(Asterisk·Cisco·Avaya)",
     "SBC(Session Border Controller): SIP 트렁크 경계에서 보안·NAT 통과·세션 제어",
     "ISDN: BRI 2B+D(B 64k×2 + D 16k = 144kbps), PRI 23B+D(T1)·30B+D(E1)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-7",
  "t": "서버·가상화·HA",
  "title": "서버·가상화·클러스터·가용성",
  "ref": "기본서 CHAPTER 04 통신용 컴퓨터·서버 (4.1·4.4)",
  "body": [
   {
    "h": "서버 종류",
    "tb": {
     "head": [
      "구분",
      "역할",
      "제품 예"
     ],
     "rows": [
      [
       "Web Server",
       "정적 콘텐츠(HTML·이미지) 제공",
       "Apache·Nginx·IIS"
      ],
      [
       "WAS",
       "동적 콘텐츠·비즈니스 로직 처리",
       "Tomcat·JBoss·WebLogic·WebSphere"
      ],
      [
       "DB Server",
       "데이터 저장·질의",
       "Oracle·MySQL·PostgreSQL·MSSQL"
      ],
      [
       "기반 서버",
       "이름 해석·메일·파일·시간 동기",
       "DNS·Mail·FTP·NTP"
      ]
     ]
    }
   },
   {
    "h": "폼팩터",
    "li": [
     "Tower: 독립형, 소규모 / Rack: 19인치 랙 장착(U 단위) / Blade: 섀시에 전원·냉각·네트워크 공유, 고밀도",
     "HCI(Hyper-Converged Infrastructure): 컴퓨팅·스토리지·네트워크를 소프트웨어로 통합한 x86 노드"
    ]
   },
   {
    "h": "서버 가상화",
    "li": [
     "Type 1(Bare Metal): 하드웨어 위에 하이퍼바이저 직접 설치 — VMware ESXi·Hyper-V·Xen·KVM",
     "Type 2(Hosted): 호스트 OS 위 응용으로 실행 — VirtualBox·VMware Workstation",
     "전가상화: 게스트 OS 수정 없음 / 반가상화: 게스트 OS 수정해 하이퍼콜 사용(Xen)",
     "컨테이너(Docker): 호스트 OS 커널 공유, 하이퍼바이저보다 가벼움"
    ]
   },
   {
    "h": "클러스터·가용성",
    "li": [
     "Active-Active: 모든 노드 동시 처리·부하 분산 / Active-Standby: 1대 가동·1대 대기(장애 시 Failover)",
     "HPC 클러스터(Beowulf 등): 다수 노드 병렬 고성능 계산",
     "가용도 A = MTBF ÷ (MTBF + MTTR)",
     "99.9% 연 약 8.76시간, 99.99% 약 52.6분, 99.999% 약 5.26분, 99.9999% 약 31.5초 중단"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-8",
  "t": "스토리지·RAID",
  "title": "DAS·NAS·SAN·RAID",
  "ref": "기본서 CHAPTER 04 스토리지 (4.2·4.3)",
  "body": [
   {
    "h": "스토리지 연결 방식",
    "tb": {
     "head": [
      "방식",
      "접근 단위·매체",
      "프로토콜·특징"
     ],
     "rows": [
      [
       "DAS",
       "서버 직접 연결(블록)",
       "SATA·SAS·USB, 공유 어려움"
      ],
      [
       "NAS",
       "IP 네트워크·파일 단위",
       "NFS·SMB/CIFS·AFP, 파일 공유 용이"
      ],
      [
       "SAN",
       "전용 스토리지망·블록 단위",
       "FC·iSCSI·FCoE, 고성능·고가용"
      ]
     ]
    }
   },
   {
    "h": "클라우드·SDS",
    "li": [
     "Object Storage(S3·Swift): 메타데이터+객체, HTTP API",
     "Block Storage(EBS)·File Storage(EFS·FSx)",
     "SDS(Software-Defined Storage): 하드웨어 추상화·통합 관리 — Ceph·GlusterFS·vSAN"
    ]
   },
   {
    "h": "RAID 레벨",
    "tb": {
     "head": [
      "레벨",
      "구성",
      "용량·결함 허용"
     ],
     "rows": [
      [
       "RAID 0",
       "스트라이핑(최소 2)",
       "N×C, 0개"
      ],
      [
       "RAID 1",
       "미러링(최소 2)",
       "50%, 미러 1개"
      ],
      [
       "RAID 2",
       "비트 단위 해밍 코드",
       "거의 사용 안 함"
      ],
      [
       "RAID 3",
       "바이트 단위 + 전용 패리티",
       "(N-1)×C, 1개"
      ],
      [
       "RAID 4",
       "블록 단위 + 전용 패리티",
       "(N-1)×C, 1개, 패리티 병목"
      ],
      [
       "RAID 5",
       "블록 + 분산 패리티(최소 3)",
       "(N-1)×C, 1개"
      ],
      [
       "RAID 6",
       "이중 분산 패리티(최소 4)",
       "(N-2)×C, 2개"
      ],
      [
       "RAID 10",
       "미러 후 스트라이프(최소 4)",
       "50%, 미러 쌍당 1개"
      ]
     ]
    }
   },
   {
    "h": "RAID 계산 요령",
    "li": [
     "예: 2TB 디스크 6개 — RAID 0 12TB, RAID 5 10TB, RAID 6 8TB, RAID 10 6TB",
     "RAID 10(1+0)은 미러 후 스트라이프로 RAID 01(0+1)보다 재구축·내결함성 유리",
     "RAID 50·60은 RAID 5·6 그룹을 다시 스트라이핑한 중첩 구성"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "OSI·TCP/IP 계층",
  "title": "OSI 7계층과 TCP/IP 모델",
  "ref": "기본서 CHAPTER 01 OSI 7 / TCP·IP",
  "body": [
   {
    "h": "OSI 7계층 개요",
    "li": [
     "ISO가 정의한 개방형 시스템 상호접속 참조 모델 — 이론적 표준(두음: 응표세전네데물)",
     "상위 3계층(응용·표현·세션)은 사용자 지원, 하위 4계층(전송·네트워크·데이터링크·물리)은 데이터 전달 담당",
     "각 계층은 바로 아래 계층의 서비스를 사용하고 위 계층에 서비스를 제공(계층 독립성)"
    ]
   },
   {
    "h": "계층별 PDU·장비·프로토콜",
    "tb": {
     "head": [
      "계층",
      "PDU · 장비",
      "프로토콜"
     ],
     "rows": [
      [
       "L7 응용",
       "Data · 게이트웨이",
       "HTTP·FTP·SMTP"
      ],
      [
       "L6 표현",
       "Data",
       "SSL/TLS·JPEG·ASCII"
      ],
      [
       "L5 세션",
       "Data",
       "NetBIOS·RPC"
      ],
      [
       "L4 전송",
       "Segment · L4 스위치",
       "TCP·UDP·SCTP"
      ],
      [
       "L3 네트워크",
       "Packet · 라우터",
       "IP·ICMP·ARP·OSPF"
      ],
      [
       "L2 데이터링크",
       "Frame · 스위치",
       "Ethernet·PPP·HDLC"
      ],
      [
       "L1 물리",
       "Bit · 허브·NIC",
       "RS-232·V.35"
      ]
     ]
    }
   },
   {
    "h": "캡슐화와 역캡슐화",
    "li": [
     "송신: 상위 → 하위로 내려가며 각 계층 헤더 추가 — Data → Segment → Packet → Frame → Bit",
     "데이터링크 계층은 헤더와 함께 트레일러(FCS, CRC-32)도 붙임",
     "수신: 하위 → 상위로 올라가며 헤더 제거(역캡슐화)"
    ]
   },
   {
    "h": "TCP/IP 4계층·5계층",
    "li": [
     "4계층: 응용(OSI L5~7) · 전송(L4) · 인터넷(L3) · 네트워크 접근(L1~2)",
     "5계층(Kurose): Application · Transport · Network · Link · Physical — 링크와 물리를 분리",
     "OSI는 이론적 참조 모델, TCP/IP는 인터넷에서 실제 쓰이는 실용 모델"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "TCP·UDP",
  "title": "전송 계층 — TCP·UDP·QUIC",
  "ref": "기본서 CHAPTER 01 1.3 Transport Layer",
  "body": [
   {
    "h": "TCP 특징과 헤더",
    "li": [
     "연결형·신뢰성·순서 보장·흐름 제어(슬라이딩 윈도)·혼잡 제어",
     "기본 헤더 20바이트(옵션 포함 최대 60), 포트 0~65535(16bit)",
     "주요 필드: 출발/목적 포트, 순서번호(Seq), 확인응답번호(Ack), 플래그, 윈도, 체크섬, 긴급 포인터",
     "플래그 6종: URG·ACK·PSH·RST·SYN·FIN"
    ]
   },
   {
    "h": "연결 설정·종료",
    "tb": {
     "head": [
      "단계",
      "방향",
      "세그먼트"
     ],
     "rows": [
      [
       "설정 ①",
       "클라이언트→서버",
       "SYN (seq=x)"
      ],
      [
       "설정 ②",
       "서버→클라이언트",
       "SYN-ACK (seq=y, ack=x+1)"
      ],
      [
       "설정 ③",
       "클라이언트→서버",
       "ACK (ack=y+1)"
      ],
      [
       "종료 ①~②",
       "능동측→상대, 상대→능동측",
       "FIN, ACK"
      ],
      [
       "종료 ③~④",
       "상대→능동측, 능동측→상대",
       "FIN, ACK (TIME_WAIT)"
      ]
     ]
    }
   },
   {
    "h": "TCP 혼잡 제어",
    "li": [
     "Slow Start: cwnd를 RTT마다 2배(지수)로 늘려 임계값(ssthresh)까지",
     "Congestion Avoidance: 임계값 이후 RTT마다 1 MSS씩 선형 증가",
     "Fast Retransmit: 중복 ACK 3개 수신 시 타임아웃 전에 재전송",
     "Fast Recovery: 임계값을 절반으로 줄이고 Slow Start 없이 회복 — 전체 원리는 AIMD(가법 증가·승법 감소)"
    ]
   },
   {
    "h": "UDP·SCTP·QUIC",
    "li": [
     "UDP: 비연결·확인응답 없음·헤더 8바이트 → 실시간(VoIP·스트리밍)·DNS·DHCP·TFTP",
     "SCTP: 멀티호밍·멀티스트리밍·메시지 단위 전송",
     "QUIC: Google이 제안한 UDP 기반 전송, TLS 1.3 내장, HTTP/3의 기반, 0-RTT 재연결"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "IPv4·서브네팅",
  "title": "IPv4 주소·서브네팅·NAT",
  "ref": "기본서 CHAPTER 01 1.4 Network Layer / IP",
  "body": [
   {
    "h": "IPv4 헤더",
    "li": [
     "버전·헤더 길이(IHL, 4바이트 단위)·ToS(DSCP)·전체 길이·식별자·플래그(DF·MF)·Fragment Offset(8바이트 단위)",
     "TTL(라우터 통과마다 1 감소, 0이면 폐기·ICMP Time Exceeded)·Protocol(1 ICMP, 6 TCP, 17 UDP)·헤더 체크섬",
     "출발지·목적지 IP 각 32bit, 헤더 길이 20~60바이트"
    ]
   },
   {
    "h": "주소 클래스·특수 주소",
    "tb": {
     "head": [
      "구분",
      "범위",
      "비고"
     ],
     "rows": [
      [
       "A",
       "0~127",
       "/8, 호스트 2^24-2"
      ],
      [
       "B",
       "128~191",
       "/16, 호스트 65,534"
      ],
      [
       "C",
       "192~223",
       "/24, 호스트 254"
      ],
      [
       "D / E",
       "224~239 / 240~255",
       "멀티캐스트 / 실험용"
      ],
      [
       "사설",
       "10/8 · 172.16/12 · 192.168/16",
       "인터넷 라우팅 불가"
      ],
      [
       "특수",
       "127.0.0.1 · 169.254/16 · 255.255.255.255",
       "루프백 · APIPA · 제한 브로드캐스트"
      ]
     ]
    }
   },
   {
    "h": "서브네팅·VLSM·CIDR",
    "li": [
     "호스트 수 = 2^(32-n) − 2, 서브넷 크기(블록) = 2^(32-n)",
     "네트워크 주소 = IP AND 마스크, 브로드캐스트 = 블록의 마지막 주소",
     "VLSM: 서브넷마다 다른 길이의 마스크 — 큰 요구부터 할당해 주소 낭비 최소화",
     "CIDR: 클래스 무시, 연속 네트워크를 공통 비트로 묶어 요약(슈퍼네팅) — 예 192.168.4.0/24~7.0/24 → 192.168.4.0/22"
    ]
   },
   {
    "h": "보조 프로토콜·NAT",
    "li": [
     "ARP(IP→MAC, 요청은 브로드캐스트) · RARP(MAC→IP, 구식) · ICMP(ping·traceroute·오류 보고) · IGMP(멀티캐스트 그룹)",
     "Static NAT 1:1 고정 · Dynamic NAT 주소 풀 동적 할당 · PAT(NAPT) 포트 번호로 다수 사설 IP가 공인 IP 1개 공유"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "LAN·WAN",
  "title": "LAN 토폴로지·Ethernet·WAN",
  "ref": "기본서 CHAPTER 02 2.1~2.3",
  "body": [
   {
    "h": "토폴로지",
    "tb": {
     "head": [
      "형태",
      "구조",
      "장단점"
     ],
     "rows": [
      [
       "Bus",
       "공유 간선 케이블",
       "설치 단순 / 간선 단선 시 전체 장애"
      ],
      [
       "Star",
       "중앙 허브·스위치",
       "관리 용이 / 중앙 장비 장애 시 전체"
      ],
      [
       "Ring",
       "원형 연결·토큰",
       "부하 균등 / 링 단절 대비 이중 링(FDDI)"
      ],
      [
       "Mesh",
       "완전 연결",
       "고가용 / 링크 수 n(n-1)/2로 고가"
      ]
     ]
    }
   },
   {
    "h": "IEEE 802와 Ethernet",
    "li": [
     "802.3 Ethernet(CSMA/CD) · 802.4 Token Bus · 802.5 Token Ring · 802.11 무선LAN · 802.15 WPAN · 802.16 WiMAX",
     "속도: 10Base-T → 100Base-T(Fast) → 1000Base-T(Giga) → 10G·40G·100G·400G",
     "프레임: Preamble 7 + SFD 1 + 목적지 MAC 6 + 출발지 MAC 6 + Type 2 + Data 46~1500 + FCS 4 → 64~1518바이트",
     "MAC 주소 48bit = OUI(제조사) 24bit + 일련번호 24bit"
    ]
   },
   {
    "h": "CSMA/CD 동작",
    "li": [
     "반송파 감지(Carrier Sense) → 채널 유휴 시 전송 → 충돌 감지 시 재밍 신호 송출 → 이진 지수 백오프 후 재전송",
     "전이중 스위치 환경에서는 충돌이 없어 사실상 사용되지 않음"
    ]
   },
   {
    "h": "WAN 기술",
    "li": [
     "전통: PSTN · ISDN(BRI 2B+D = 144kbps, PRI) · X.25(패킷 교환) · Frame Relay(DLCI) · ATM(53바이트 셀 = 헤더 5 + 페이로드 48) · SONET/SDH · DWDM",
     "현대: MPLS(라벨 스위칭, L2.5, LER·LSR·LSP·FEC) · SD-WAN(중앙 정책, 다중 회선, 비용 절감) · Carrier Ethernet · VPN(IPsec·SSL·MPLS L3 VPN)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "응용 프로토콜",
  "title": "응용 계층 프로토콜",
  "ref": "기본서 CHAPTER 02 2.4 Application Layer",
  "body": [
   {
    "h": "HTTP 진화",
    "li": [
     "HTTP/1.1: 지속 연결(Keep-Alive)·파이프라이닝",
     "HTTP/2: 바이너리 프레이밍·하나의 TCP 연결에서 멀티플렉싱·HPACK 헤더 압축·서버 푸시",
     "HTTP/3: QUIC(UDP) 기반, 0-RTT, 전송 계층 HOL 블로킹 완화",
     "HTTPS = HTTP + TLS (443)"
    ]
   },
   {
    "h": "포트 번호",
    "tb": {
     "head": [
      "프로토콜",
      "포트",
      "전송"
     ],
     "rows": [
      [
       "FTP",
       "20 데이터 / 21 제어",
       "TCP"
      ],
      [
       "SSH·SFTP / Telnet",
       "22 / 23",
       "TCP"
      ],
      [
       "SMTP / POP3 / IMAP",
       "25 / 110 / 143",
       "TCP"
      ],
      [
       "DNS",
       "53",
       "UDP·TCP"
      ],
      [
       "DHCP",
       "67 서버 / 68 클라이언트",
       "UDP"
      ],
      [
       "NTP / SNMP",
       "123 / 161·162",
       "UDP"
      ]
     ]
    }
   },
   {
    "h": "DHCP·DNS",
    "li": [
     "DHCP DORA: Discover(브로드캐스트) → Offer → Request → Acknowledge",
     "DNS: 도메인 이름 ↔ IP 해석, 질의는 UDP 53, 영역 전송은 TCP 53"
    ]
   },
   {
    "h": "메일·원격 접속",
    "li": [
     "SMTP 송신 / POP3 내려받기(로컬 보관) / IMAP 서버 동기화(다중 단말)",
     "Telnet은 평문 전송이라 도청에 취약 → 암호화된 SSH(22)로 대체"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "이동통신·5G",
  "title": "이동통신 세대·LTE·5G",
  "ref": "기본서 CHAPTER 03 3.1~3.2",
  "body": [
   {
    "h": "세대별 진화",
    "tb": {
     "head": [
      "세대",
      "대표 기술",
      "특징"
     ],
     "rows": [
      [
       "1G",
       "AMPS",
       "아날로그 음성"
      ],
      [
       "2G / 2.5G",
       "GSM·CDMA / GPRS·EDGE",
       "디지털·SMS / 패킷 데이터"
      ],
      [
       "3G / 3.5G",
       "WCDMA / HSDPA",
       "멀티미디어 / 고속 하향"
      ],
      [
       "4G",
       "LTE·LTE-A",
       "All-IP·OFDMA·MIMO·CA"
      ],
      [
       "5G",
       "NR",
       "eMBB·URLLC·mMTC"
      ],
      [
       "6G",
       "THz·AI",
       "2030년 이후 목표"
      ]
     ]
    }
   },
   {
    "h": "LTE 구조",
    "li": [
     "UE → eNodeB → EPC → PDN(외부망)",
     "EPC: MME(이동성·세션 제어) · S-GW(사용자 데이터 중계) · P-GW(외부망 연결·IP 할당) · HSS(가입자 정보)",
     "하향 OFDMA, 상향 SC-FDMA · LTE-A는 Carrier Aggregation·256QAM·4x4 MIMO"
    ]
   },
   {
    "h": "5G 시나리오·핵심 기술",
    "li": [
     "eMBB(초광대역) · URLLC(1ms급 초저지연·고신뢰) · mMTC(대규모 IoT)",
     "mmWave(24~100GHz, 대표 28GHz)·Sub-6(대표 3.5GHz)",
     "Massive MIMO·빔포밍 — 고주파 감쇠 보상",
     "네트워크 슬라이싱(하나의 물리망을 서비스별 가상망으로 분리) · MEC(기지국 근처 엣지 처리) · SBA · NFV·SDN"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-7",
  "t": "무선LAN·위성·근거리",
  "title": "무선LAN·위성·근거리 무선",
  "ref": "기본서 CHAPTER 03 3.3~3.4",
  "body": [
   {
    "h": "Wi-Fi 표준",
    "tb": {
     "head": [
      "표준",
      "대역",
      "최대 속도·특징"
     ],
     "rows": [
      [
       "802.11a",
       "5GHz",
       "54Mbps"
      ],
      [
       "802.11b",
       "2.4GHz",
       "11Mbps"
      ],
      [
       "802.11g",
       "2.4GHz",
       "54Mbps"
      ],
      [
       "802.11n (Wi-Fi 4)",
       "2.4/5GHz",
       "600Mbps·MIMO"
      ],
      [
       "802.11ac (Wi-Fi 5)",
       "5GHz",
       "6.9Gbps·MU-MIMO"
      ],
      [
       "802.11ax (Wi-Fi 6/6E)",
       "2.4/5/6GHz",
       "OFDMA"
      ],
      [
       "802.11be (Wi-Fi 7)",
       "2.4/5/6GHz",
       "46Gbps·MLO"
      ]
     ]
    }
   },
   {
    "h": "CSMA/CA·보안",
    "li": [
     "IFS(프레임 간 간격)만큼 대기 후 랜덤 백오프로 충돌 회피, RTS/CTS로 숨은 노드 문제 완화",
     "WEP(RC4, 취약) → WPA → WPA2(AES-CCMP) → WPA3(SAE, 사전 대입 공격 강화)"
    ]
   },
   {
    "h": "위성",
    "li": [
     "GEO 약 36,000km 정지궤도 — 3기로 극지방 외 전 세계, 지연 큼",
     "MEO — GPS·Galileo 등 항법 위성",
     "LEO 500~2,000km — Starlink·OneWeb, 지연 작음, 다수 위성 군집",
     "GNSS: GPS(미국)·GLONASS(러시아)·Galileo(EU)·BeiDou(중국)·KPS(한국, 2035 계획)"
    ]
   },
   {
    "h": "근거리·IoT 무선",
    "li": [
     "Bluetooth 2.4GHz·피코넷·BLE / Zigbee IEEE 802.15.4·메시·저전력",
     "NFC 13.56MHz·약 10cm / UWB 광대역·정밀 측위 / RFID 능동·수동, LF·HF·UHF",
     "LPWAN(저전력 광역): LoRa·Sigfox·NB-IoT"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-8",
  "t": "IPv6·QoS·SDN",
  "title": "IPv6·QoS·SDN/NFV·IoT",
  "ref": "기본서 CHAPTER 04 IPv6·QoS·SDN/NFV",
  "body": [
   {
    "h": "IPv6 주소·헤더",
    "li": [
     "128bit(약 3.4×10^38개), 16bit씩 8그룹 16진수 — 앞자리 0 생략, 연속 0 그룹은 ::로 한 번만 축약",
     "기본 헤더 40바이트 고정: Version·Traffic Class·Flow Label·Payload Length·Next Header·Hop Limit·출발/목적 주소",
     "헤더 체크섬 제거, 라우터 단편화 없음(출발지만), 옵션은 확장 헤더로"
    ]
   },
   {
    "h": "IPv6 주소 종류·자동 설정",
    "tb": {
     "head": [
      "종류",
      "접두사·예",
      "설명"
     ],
     "rows": [
      [
       "Global Unicast",
       "2000::/3",
       "인터넷 라우팅 가능"
      ],
      [
       "Link-Local",
       "FE80::/10",
       "같은 링크 내 통신"
      ],
      [
       "Unique Local",
       "FC00::/7",
       "사설 주소 성격"
      ],
      [
       "Multicast",
       "FF00::/8",
       "그룹 전송(브로드캐스트 대체)"
      ],
      [
       "Anycast",
       "-",
       "가장 가까운 1개 노드"
      ],
      [
       "SLAAC / DHCPv6",
       "EUI-64·RA / Stateful",
       "무상태 자동 / 상태 기반"
      ]
     ]
    }
   },
   {
    "h": "전환 기술·NDP",
    "li": [
     "Dual Stack(양 스택 동시) · Tunneling(6to4·6in4·ISATAP·Teredo) · Translation(NAT64·DNS64·SIIT)",
     "NDP(ICMPv6): RS·RA·NS·NA·Redirect — ARP·라우터 탐색 기능 대체"
    ]
   },
   {
    "h": "QoS",
    "li": [
     "지표: 대역폭·지연·지터(지연 변동)·패킷 손실, 음성 품질 MOS",
     "IntServ: RSVP로 흐름별 자원 예약(확장성 낮음) / DiffServ: DSCP 6bit(64 클래스)로 클래스별 처리(확장성 높음)",
     "PHB: EF(음성, 최우선)·AF·CS·BE / 메커니즘: 분류·마킹·큐잉(WFQ·CBWFQ·LLQ)·WRED·Policing(초과분 폐기)·Shaping(초과분 버퍼링)"
    ]
   },
   {
    "h": "SDN·NFV·클라우드·IoT",
    "li": [
     "SDN: 제어 평면·데이터 평면 분리, 중앙 컨트롤러(OpenDaylight·ONOS), 남향 OpenFlow·NETCONF/YANG",
     "NFV: 전용 HW 기능을 SW(VNF)로, MANO가 관리, ETSI 표준 / SD-WAN·IBN(의도 기반)",
     "CDN(엣지 캐싱) · 클라우드 IaaS·PaaS·SaaS·FaaS · Edge(디바이스 근처)/Fog(게이트웨이)",
     "IoT: MQTT(Pub/Sub, 브로커, TCP 1883/8883) · CoAP(UDP, RESTful, 저전력) · AMQP(메시지 큐)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "ITSM·ITIL·SLA",
  "title": "ITIL·ITSM과 서비스 수준 약정(SLA·OLA·UC)",
  "ref": "기본서 CHAPTER 01 시스템 관리·운용 — 1.1 ITIL·ITSM, 1.2 SLA·OLA·UC",
  "body": [
   {
    "h": "ITIL의 위상과 버전",
    "li": [
     "ITIL(IT Infrastructure Library)은 영국 정부 기관(CCTA, 이후 ★OGC★)이 정리한 ★IT 서비스 관리(ITSM) 모범사례★ 체계이다. 인증 표준은 ISO/IEC 20000으로 구분한다.",
     "ITIL v3(2007)는 서비스 수명주기 5단계 ★Strategy → Design → Transition → Operation → CSI(지속적 서비스 개선)★ 중심이다.",
     "서비스 설계의 ★4P★: People(인력)·Process(프로세스)·Product(제품·기술)·Partner(파트너·공급자).",
     "ITIL 4(2019)는 ★SVS(서비스 가치 시스템)★를 중심으로 SVC(서비스 가치 사슬, 6활동)·지도 원칙(Guiding Principles) 7개·★Practices 34개★·4차원 모델(조직·인력 / 정보·기술 / 파트너·공급자 / 가치흐름·프로세스)로 구성된다."
    ]
   },
   {
    "h": "주요 서비스 운영 프로세스",
    "tb": {
     "head": [
      "프로세스",
      "목적",
      "시험 포인트"
     ],
     "rows": [
      [
       "Incident Management",
       "서비스 중단을 가장 빨리 정상화",
       "워크어라운드·증상 해소"
      ],
      [
       "Problem Management",
       "근본 원인(RCA) 규명·제거",
       "재발 방지·알려진 오류(Known Error)"
      ],
      [
       "Change Management",
       "변경의 위험 평가·승인·통제",
       "CAB(변경 자문 위원회)"
      ],
      [
       "Release Management",
       "승인된 변경의 배포",
       "배포 패키지·롤백 계획"
      ],
      [
       "Configuration Management",
       "구성항목(CI)과 관계 관리",
       "★CMDB★"
      ],
      [
       "SLM·Capacity·Availability·Continuity",
       "수준·용량·가용성·연속성 관리",
       "SLA 지표와 연계"
      ]
     ]
    }
   },
   {
    "h": "SLA·OLA·UC",
    "tb": {
     "head": [
      "약정",
      "당사자",
      "역할"
     ],
     "rows": [
      [
       "SLA (Service Level Agreement)",
       "서비스 공급자 ↔ ★고객★",
       "서비스 수준·측정 지표·위반 시 페널티/보상"
      ],
      [
       "OLA (Operational Level Agreement)",
       "★내부 부서 간★",
       "SLA 달성을 위한 내부 지원 약정"
      ],
      [
       "UC (Underpinning Contract)",
       "★외부 공급업체★",
       "SLA를 뒷받침하는 외부 계약"
      ]
     ]
    }
   },
   {
    "h": "SLA 지표와 계산",
    "li": [
     "대표 지표: 가용률·응답시간·해결시간·MTTR·MTBF. 고가용성 약정의 상징이 ★Five Nines(99.999%)★이다.",
     "허용 다운타임 = 기간 × (1 − 가용률). 예) 30일(43,200분) × 0.001 = 99.9% 약정의 월 허용 다운타임 ★43.2분★."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "운영체제·가상화",
  "title": "운영체제 핵심(프로세스·스케줄링·메모리·동기화)과 가상화·컨테이너",
  "ref": "기본서 CHAPTER 01 시스템 관리·운용 — 1.3 운영체제, 1.4 가상화·컨테이너",
  "body": [
   {
    "h": "OS 기능과 프로세스·스레드",
    "li": [
     "OS 기능: 프로세스·메모리·파일·입출력·보안 관리.",
     "프로세스는 독립 주소공간과 ★PCB(프로세스 제어 블록)★를 가져 문맥교환 비용이 크다.",
     "스레드는 같은 프로세스의 코드·데이터·힙을 공유하고 스택·레지스터만 따로 가진 ★경량 실행 단위★이다.",
     "스케줄링: FCFS·SJF(비선점) / ★Round Robin★(시간 할당량, 선점)·SRT·Multilevel Queue·MLFQ. 기아(Starvation)는 에이징(Aging)으로 완화한다."
    ]
   },
   {
    "h": "메모리 관리",
    "li": [
     "Paging(고정 크기)·Segmentation(가변 논리 단위)·가상 메모리. 주소 변환은 ★MMU★, 변환 결과 캐시는 ★TLB★.",
     "Page Fault 시 교체 알고리즘: FIFO·LRU·LFU·★OPT(Belady의 최적, 미래 참조 필요 → 구현 불가, 비교 기준)★.",
     "FIFO는 프레임을 늘려도 부재가 늘 수 있는 ★벨레이디 이상★이 생길 수 있고, LRU·OPT(스택 알고리즘)는 생기지 않는다.",
     "페이지 교체가 과도해 CPU 이용률이 급감하는 현상을 스래싱(Thrashing)이라 한다."
    ]
   },
   {
    "h": "동기화·교착상태·파일 시스템",
    "li": [
     "임계구역 보호 수단: Mutex(1 자원 Lock)·Semaphore(카운터, N 자원)·Monitor.",
     "Deadlock 4조건: ★상호배제·점유와 대기·비선점·순환대기★ — 하나를 깨면 예방, 은행원 알고리즘은 회피, 그 외 탐지·회복.",
     "파일 시스템: FAT·NTFS·ext3/ext4(저널링)·★XFS·ZFS·Btrfs★. inode에 파일 메타데이터(권한·소유자·블록 위치)를 저장한다.",
     "Linux 명령: ps·top·htop(프로세스) / netstat·ss·ip(네트워크) / chmod·chown(권한) / grep·awk·sed(텍스트) / systemd·journalctl(서비스·로그). chmod 755 = rwxr-xr-x."
    ]
   },
   {
    "h": "가상화와 컨테이너",
    "tb": {
     "head": [
      "구분",
      "내용",
      "예"
     ],
     "rows": [
      [
       "Type 1 하이퍼바이저",
       "하드웨어 위 직접 설치(Bare-metal)",
       "ESXi·Xen·Hyper-V·KVM"
      ],
      [
       "Type 2 하이퍼바이저",
       "호스트 OS 위 설치(Hosted)",
       "VirtualBox·VMware Workstation"
      ],
      [
       "전가상화 / 반가상화",
       "게스트 무수정 / 게스트 커널 수정+하이퍼콜",
       "하드웨어 지원(Intel VT-x·AMD-V)"
      ],
      [
       "컨테이너",
       "호스트 커널 공유·Namespace 격리·cgroup 자원 제한",
       "Docker·containerd·CRI-O"
      ],
      [
       "오케스트레이션",
       "Pod(최소 배포 단위)·Service·Deployment·Ingress",
       "Kubernetes·Swarm·Nomad"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "정보보호·암호",
  "title": "정보보호 요소와 암호 기술(대칭·비대칭·해시·PKI)",
  "ref": "기본서 CHAPTER 02 정보보호·네트워크 보안 — 2.1 정보보호 3대 요소, 2.2 암호 기술",
  "body": [
   {
    "h": "정보보호 요소",
    "tb": {
     "head": [
      "요소",
      "의미",
      "대표 수단"
     ],
     "rows": [
      [
       "기밀성(Confidentiality)",
       "인가된 자만 열람",
       "★암호화★·접근통제"
      ],
      [
       "무결성(Integrity)",
       "위·변조 방지",
       "★해시·MAC★·전자서명"
      ],
      [
       "가용성(Availability)",
       "필요할 때 사용 가능",
       "★백업·이중화(HA)★·DDoS 대응"
      ],
      [
       "AAA",
       "인증·인가·책임추적",
       "ID/PW·OTP·권한·로그"
      ],
      [
       "부인방지(Non-Repudiation)",
       "송수신 사실 부인 불가",
       "★전자서명★"
      ]
     ]
    }
   },
   {
    "h": "대칭키와 비대칭키",
    "li": [
     "대칭키: DES(64비트 블록·56비트 키)·★3DES★·★AES(128비트 블록, 키 128/192/256)★·★SEED·ARIA·LEA(국산)★·ChaCha20(스트림). 빠르지만 키 분배가 문제이며 n명 상호 통신 시 키 n(n−1)/2개.",
     "비대칭키(공개키): ★RSA(소인수분해)★·DSA·ECC·ECDSA(타원곡선 이산대수)·ElGamal(이산대수)·★Diffie-Hellman(키 교환)★. 키 분배 문제를 해결하지만 느리며 n명에 키 2n개.",
     "실무는 공개키로 세션키를 교환하고 대칭키로 데이터를 암호화하는 하이브리드 방식(TLS 등)."
    ]
   },
   {
    "h": "해시와 메시지 인증",
    "li": [
     "해시는 임의 길이 입력 → 고정 길이 출력의 ★일방향★ 함수. MD5(128비트)·SHA-1(160비트)은 ★충돌 공격 실증으로 취약★.",
     "권고: ★SHA-2(224/256/384/512)·SHA-3★. 국산 HAS-160.",
     "HMAC(해시+비밀키)·CMAC(블록암호 기반)은 무결성과 출처 인증을 함께 제공한다."
    ]
   },
   {
    "h": "PKI와 응용",
    "li": [
     "PKI 구성: CA(인증기관)·RA(등록기관)·인증서(★X.509★)·저장소. 폐지 확인은 CRL(폐지 목록, 주기적 배포)과 ★OCSP(실시간 조회)★.",
     "전자서명: ★송신자 개인키로 서명, 송신자 공개키로 검증★. 기밀 전송: 수신자 공개키로 암호화.",
     "이메일 보안: PGP·S/MIME."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "네트워크 보안·공격",
  "title": "네트워크 보안 장비·VPN·제로 트러스트와 공격 유형",
  "ref": "기본서 CHAPTER 02 정보보호·네트워크 보안 — 2.3 네트워크 보안, 2.4 공격 유형",
  "body": [
   {
    "h": "방화벽·IDS·IPS와 보안 솔루션",
    "li": [
     "방화벽: Packet Filter(헤더) → Stateful Inspection(세션 상태) → ★Application Proxy(L7 내용·대리 연결)★ → NGFW(애플리케이션 식별·IPS 통합).",
     "IDS = 탐지·★Passive★(미러 트래픽), IPS = 차단·★Inline★. 탐지 방식: Signature(오용, 오탐 적음·신종 취약)·Anomaly(이상, 제로데이 유리·오탐 많음)·Heuristic.",
     "UTM(통합 위협 관리)·WAF(웹 방화벽)·DLP(유출 방지)·NAC(접근 제어)·EDR(단말 탐지·대응)·★SIEM(수집·상관분석·경보)★·★SOAR(플레이북 자동 대응)★."
    ]
   },
   {
    "h": "VPN과 IPsec",
    "tb": {
     "head": [
      "구분",
      "내용",
      "비고"
     ],
     "rows": [
      [
       "IPsec (L3)",
       "★AH·ESP·IKE★로 구성",
       "Transport / Tunnel 모드"
      ],
      [
       "AH",
       "무결성·출발지 인증(암호화 없음)",
       "IP 프로토콜 51, NAT와 충돌"
      ],
      [
       "ESP",
       "페이로드 암호화+선택적 인증",
       "IP 프로토콜 50"
      ],
      [
       "IKE",
       "SA 협상·키 교환",
       "UDP 500"
      ],
      [
       "Transport 모드",
       "원래 IP 헤더 유지·페이로드 보호",
       "종단(Host) 간"
      ],
      [
       "Tunnel 모드",
       "전체 패킷 캡슐화·새 IP 헤더",
       "★게이트웨이 간 Site-to-Site★"
      ],
      [
       "SSL/TLS VPN (L7)",
       "웹 브라우저 기반 원격 접속",
       "OpenVPN"
      ],
      [
       "L2TP / MPLS VPN",
       "L2 터널(+IPsec) / 사업자 망 VPN",
       "—"
      ]
     ]
    }
   },
   {
    "h": "제로 트러스트·SASE",
    "li": [
     "제로 트러스트: ★Never Trust, Always Verify★ — 내부망도 신뢰하지 않고 신원·기기·네트워크·애플리케이션을 매 요청 검증, 최소 권한·마이크로 세그멘테이션.",
     "SASE(Secure Access Service Edge): 네트워크(SD-WAN)와 보안(SWG·CASB·ZTNA·FWaaS)을 클라우드 서비스로 통합."
    ]
   },
   {
    "h": "공격 유형",
    "li": [
     "네트워크: DoS·DDoS·★Reflection·Amplification(출발지 위조 + DNS·NTP 등 증폭 응답)★, Sniffing, Spoofing(IP·ARP·DNS·MAC), Hijacking·MITM·Replay.",
     "웹: SQL Injection·XSS(피해자 브라우저에서 스크립트 실행)·CSRF(로그인 세션 악용 위조 요청)·SSRF(서버가 내부 자원 요청)·파일 업로드·Path Traversal. 기준 목록 OWASP Top 10.",
     "악성코드: Virus(숙주 감염)·★Worm(자기 복제·네트워크 전파)★·Trojan(위장)·Backdoor·Ransomware·Spyware·Adware·APT·Zero-Day.",
     "사회공학: Phishing(이메일)·Vishing(음성)·Smishing(SMS)·★Spear Phishing(표적)★·Whaling(경영진)·Pharming(DNS·hosts 변조)·★BEC(기업 이메일 사칭)★."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "성능·가용성",
  "title": "성능 지표와 가용성·신뢰성 계산",
  "ref": "기본서 CHAPTER 03 성능·가용성·재해복구 — 3.1 성능 지표, 3.2 가용성·신뢰성",
  "body": [
   {
    "h": "성능 지표와 측정 도구",
    "li": [
     "네트워크: 대역폭(이론 최대)·Throughput(실효 처리량)·Latency·★RTT(왕복 지연)★·Jitter(지연 변동)·Packet Loss·BER(비트 오류율).",
     "시스템: CPU 사용률·Load Average·메모리·Swap·Disk IOPS·Queue Depth·NIC 사용률.",
     "도구: ping(ICMP RTT)·traceroute·mtr(경로) / ★iperf·iperf3·netperf(처리량)★ / Wireshark·tcpdump(패킷 캡처) / Nagios·Zabbix·★Prometheus·Grafana★(모니터링)."
    ]
   },
   {
    "h": "신뢰성 지표",
    "tb": {
     "head": [
      "지표",
      "의미",
      "관계"
     ],
     "rows": [
      [
       "MTBF",
       "Mean Time Between Failures, 평균 고장 간격",
       "클수록 신뢰성↑, 고장률 λ = 1/MTBF"
      ],
      [
       "MTTR",
       "Mean Time To Repair, 평균 수리 시간",
       "작을수록 보수성↑"
      ],
      [
       "MTTF",
       "Mean Time To Failure, 고장까지 평균 시간",
       "주로 수리 불가 품목"
      ],
      [
       "MTBSI",
       "Mean Time Between Service Incidents",
       "서비스 관점 장애 간격"
      ],
      [
       "가용률",
       "★A = MTBF / (MTBF + MTTR)★",
       "Uptime/(Uptime+Downtime)"
      ]
     ]
    }
   },
   {
    "h": "Nines별 연간 허용 다운타임",
    "tb": {
     "head": [
      "가용률",
      "연간 다운타임",
      "계산"
     ],
     "rows": [
      [
       "99%",
       "약 3.65일",
       "365일 × 0.01"
      ],
      [
       "99.9%",
       "약 8.76시간",
       "8,760h × 0.001"
      ],
      [
       "99.99%",
       "약 52.6분",
       "525,600분 × 0.0001"
      ],
      [
       "★99.999%★",
       "★약 5.26분★",
       "525,600분 × 0.00001"
      ],
      [
       "99.9999%",
       "약 31.5초",
       "31,536,000초 × 0.000001"
      ]
     ]
    }
   },
   {
    "h": "신뢰성 향상과 구성 계산",
    "li": [
     "직렬 구성 A = A1 × A2 (모두 정상이어야 서비스), 병렬 구성 A = 1 − (1−A1)(1−A2) (하나만 정상이어도 서비스).",
     "이중화: ★N+1★(필요 N대 + 예비 1대)·N+M·HA Cluster, Active-Active(동시 가동·부하 분산)·Active-Standby(1대 대기), Failover(절체)·Failback(원복), Load Balancing.",
     "RAID: 0(스트라이핑, N×C, 장애 허용 없음)·1(미러링, 절반)·★5(분산 패리티, (N−1)×C)★·★6(이중 패리티, (N−2)×C)★·10(미러+스트라이프, 절반)."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-6",
  "t": "재해복구·확장성",
  "title": "재해복구(BCP·DRP·RTO·RPO·DR 사이트·백업)와 확장성",
  "ref": "기본서 CHAPTER 03 성능·가용성·재해복구 — 3.3 재해복구·BCP, 3.4 용량 계획·확장성",
  "body": [
   {
    "h": "BCP와 DRP",
    "li": [
     "BCP(업무 연속성 계획): ★전사 차원★에서 핵심 업무를 지속하기 위한 계획. 절차: 범위 설정 → ★BIA(업무 영향 분석)★ → 복구 전략 → 계획 수립 → 시험·훈련·유지보수.",
     "DRP(재해복구 계획): BCP의 하위 계획으로 ★IT 시스템·데이터 복구★에 초점.",
     "BIA에서 업무별 중요도와 허용 중단 시간을 분석해 RTO·RPO를 정한다."
    ]
   },
   {
    "h": "복구 목표 지표",
    "tb": {
     "head": [
      "지표",
      "의미",
      "맞추는 수단"
     ],
     "rows": [
      [
       "★RTO★ (Recovery Time Objective)",
       "서비스 복구까지 허용 시간",
       "DR 사이트 등급·절체 자동화"
      ],
      [
       "★RPO★ (Recovery Point Objective)",
       "복구 기준 시점 = 데이터 손실 허용 구간",
       "백업·복제 주기(동기/비동기, CDP)"
      ],
      [
       "RSO (Recovery Scope Objective)",
       "복구 대상 업무·시스템 범위",
       "BIA 우선순위"
      ],
      [
       "RCO (Recovery Communication Objective)",
       "재해 시 통신·소통 복구 목표",
       "비상 연락 체계"
      ]
     ]
    }
   },
   {
    "h": "DR 사이트와 백업",
    "tb": {
     "head": [
      "유형",
      "구성",
      "복구 속도·비용"
     ],
     "rows": [
      [
       "Mirror Site",
       "★실시간 동기★ 복제·동일 시스템 상시 가동",
       "즉시 절체·최고가"
      ],
      [
       "Hot Site",
       "동기/준실시간 복제·장비 대기",
       "수 시간 내·고가"
      ],
      [
       "Warm Site",
       "주요 장비 일부만 구비",
       "Hot보다 느림·중간"
      ],
      [
       "Cold Site",
       "공간·전원·공조 등 시설만",
       "가장 느림·최저가"
      ],
      [
       "전체 / 증분 / 차등 백업",
       "전부 / 직전 백업 이후 / 마지막 전체 이후",
       "복구: 전체 / 전체+모든 증분 / 전체+최신 차등"
      ],
      [
       "3-2-1 규칙",
       "★사본 3·매체 2·원격 1★",
       "Snapshot·Replication·CDP 병행"
      ]
     ]
    }
   },
   {
    "h": "용량 계획과 확장성",
    "li": [
     "Scale-Up(수직): 한 대의 CPU·메모리 증설 — 구조 단순, 물리적 한계. Scale-Out(수평): 서버 대수 증설 — ★분산·무한 확장성★, 데이터 일관성 관리 필요.",
     "Capacity Planning: 현재(BAU) 사용량 측정 → 미래 수요 예측 → 증설 계획. Headroom·Buffer로 Peak·Burst 대비.",
     "부하 분산: L4(IP·포트) / ★L7(URL·쿠키·헤더)★ / DNS Round Robin / GSLB(지역 분산) / Anycast(동일 IP 다지점)."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-7",
  "t": "NMS·SNMP",
  "title": "TMN·FCAPS와 NMS·EMS·OSS·BSS, SNMP",
  "ref": "기본서 CHAPTER 04 운용기술·NMS·자동화 — 4.1 NMS·EMS·OSS·BSS, 4.2 SNMP",
  "body": [
   {
    "h": "TMN 4계층과 관리 시스템",
    "tb": {
     "head": [
      "계층",
      "관리 대상",
      "대응 시스템"
     ],
     "rows": [
      [
       "BML (Business Management Layer)",
       "사업 목표·수익",
       "BSS(과금·청구·CRM)"
      ],
      [
       "SML (Service Management Layer)",
       "고객 서비스·품질",
       "OSS 서비스 관리"
      ],
      [
       "NML (Network Management Layer)",
       "★망 전체★",
       "NMS"
      ],
      [
       "EML (Element Management Layer)",
       "★개별 장비(요소)★",
       "EMS"
      ]
     ]
    }
   },
   {
    "h": "FCAPS 5대 관리 기능",
    "li": [
     "★Fault(장애)★: 경보 수집·장애 위치 확인·복구.",
     "★Configuration(구성)★: 장비·설정·토폴로지 정보 관리.",
     "★Accounting(과금)★: 사용량 측정·요금.",
     "★Performance(성능)★: 트래픽·지연·이용률 수집·분석.",
     "★Security(보안)★: 접근 제어·인증·보안 로그."
    ]
   },
   {
    "h": "SNMP 구조와 메시지",
    "li": [
     "구성: ★Manager ↔ Agent ↔ MIB★. MIB 객체는 OID 트리로 식별하고 SMI로 정의한다. MIB-II 그룹: System·Interface·IP·TCP·UDP·ICMP·SNMP 등.",
     "전송: ★UDP 161(에이전트가 요청 수신)·UDP 162(매니저가 Trap 수신)★.",
     "메시지: Get·GetNext(다음 OID, 테이블 순회)·Set(값 변경)·★Trap(에이전트가 먼저 보내는 비동기 알림)★·GetBulk(v2, 대량 조회)·Inform(v2+, 응답 확인형 알림)."
    ]
   },
   {
    "h": "SNMP 버전",
    "tb": {
     "head": [
      "버전",
      "특징",
      "보안"
     ],
     "rows": [
      [
       "v1",
       "기본 메시지",
       "Community 문자열 평문"
      ],
      [
       "v2c",
       "★GetBulk·Inform★ 추가",
       "Community 평문(보안 미흡)"
      ],
      [
       "v3",
       "보안 프레임워크",
       "★USM(인증·암호화)·VACM(접근 제어)★"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-8",
  "t": "로그·관측·자동화",
  "title": "로그·관측(Observability)과 IaC·CI/CD·SRE",
  "ref": "기본서 CHAPTER 04 운용기술·NMS·자동화 — 4.3 로그·모니터링, 4.4 자동화·DevOps",
  "body": [
   {
    "h": "Syslog",
    "li": [
     "전송: ★UDP 514★(전통)·TCP 6514(TLS). 구현: rsyslog·syslog-ng·journald.",
     "Facility(발생원) 24개, Severity(심각도) 8개.",
     "Severity(RFC 5424): ★0 Emergency·1 Alert·2 Critical·3 Error·4 Warning·5 Notice·6 Informational·7 Debug★ — 숫자가 작을수록 심각."
    ]
   },
   {
    "h": "관측 가능성 3기둥과 모니터링",
    "tb": {
     "head": [
      "기둥",
      "내용",
      "도구"
     ],
     "rows": [
      [
       "Logs",
       "개별 이벤트 기록",
       "ELK Stack·Splunk"
      ],
      [
       "Metrics",
       "수치형 시계열",
       "Prometheus·Grafana·Zabbix"
      ],
      [
       "★Traces★",
       "요청이 서비스들을 거치는 흐름·구간 지연",
       "OpenTelemetry·Jaeger·Zipkin"
      ]
     ]
    }
   },
   {
    "h": "IaC와 CI/CD",
    "li": [
     "IaC: ★Terraform(선언형 프로비저닝·HCL)★·★Ansible(에이전트리스·SSH·YAML 플레이북)★·Chef·Puppet(에이전트 기반)·SaltStack·Pulumi·CloudFormation(AWS)·ARM(Azure).",
     "CI = 지속적 통합(빌드·테스트 자동화), Continuous Delivery = 배포 가능 상태 유지(운영 반영은 승인), ★Continuous Deployment = 운영까지 자동 배포★.",
     "도구: Jenkins·GitHub Actions·GitLab CI·CircleCI, GitOps는 ArgoCD·Flux."
    ]
   },
   {
    "h": "DevOps·SRE",
    "li": [
     "SRE 4대 골든 시그널: ★Latency·Traffic·Errors·Saturation★.",
     "SLI(측정 지표) → SLO(내부 목표) → SLA(외부 약정). ★에러 버짓 = 1 − SLO★ — 소진 시 신규 배포보다 안정화 우선.",
     "Blameless Postmortem: 개인 비난 없이 장애 원인·개선책을 기록."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "컴퓨터 구조",
  "title": "CPU 구조·레지스터·명령어·파이프라인",
  "ref": "기본서 CHAPTER 01 컴퓨터 구조 (1.1~1.4)",
  "body": [
   {
    "h": "CPU 구성요소",
    "li": [
     "ALU(Arithmetic Logic Unit): 산술·논리·시프트 연산 수행",
     "CU(Control Unit): 명령어 해독 후 제어 신호 발생",
     "레지스터: CPU 내부의 가장 빠른 임시 기억장소",
     "캐시: CPU와 주기억 사이 속도 차 완화(계층상 기억장치)"
    ]
   },
   {
    "h": "주요 레지스터",
    "tb": {
     "head": [
      "레지스터",
      "명칭",
      "역할"
     ],
     "rows": [
      [
       "PC",
       "Program Counter",
       "다음 실행 명령어 주소"
      ],
      [
       "IR",
       "Instruction Register",
       "현재 실행 명령어"
      ],
      [
       "MAR",
       "Memory Address Register",
       "접근할 메모리 주소"
      ],
      [
       "MDR",
       "Memory Data Register",
       "읽고 쓸 데이터"
      ],
      [
       "AC",
       "Accumulator",
       "연산 결과 누적"
      ],
      [
       "SP",
       "Stack Pointer",
       "스택 최상단 주소"
      ],
      [
       "FR",
       "Flag Register",
       "Z·N·C·V 상태 플래그"
      ]
     ]
    }
   },
   {
    "h": "명령어 형식·주소지정",
    "li": [
     "0-주소(스택)·1-주소(누산기)·2-주소·3-주소 형식",
     "즉시(Immediate): 명령어에 데이터 자체 포함 — 메모리 접근 0회",
     "직접(Direct): 주소부 = 실제 주소 / 간접(Indirect): 주소의 주소",
     "레지스터·레지스터 간접·인덱스·베이스·상대(PC Relative) 주소지정"
    ]
   },
   {
    "h": "명령어 사이클·파이프라인",
    "li": [
     "Fetch → Decode → Execute → (Writeback), 메이저 상태: 인출·간접·실행·인터럽트",
     "5단계 파이프라인 IF·ID·EX·MEM·WB, 이상적 소요 사이클 = k + n − 1",
     "해저드: 구조(자원 충돌)·데이터(RAW·WAR·WAW)·제어(분기)",
     "해결: 포워딩·스톨(버블)·분기 예측·비순차 실행(Out-of-Order)"
    ]
   },
   {
    "h": "RISC·CISC와 병렬처리",
    "li": [
     "RISC: 적은 명령·고정 길이·Load/Store 구조·ARM·MIPS·RISC-V",
     "CISC: 많은 명령·가변 길이·x86",
     "Flynn 분류: SISD·SIMD(벡터·GPU)·MISD·MIMD(멀티프로세서)",
     "슈퍼스칼라(다중 파이프라인)·VLIW(컴파일러 병렬화)·SMT(하이퍼스레딩)"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "메모리·입출력",
  "title": "기억장치 계층·캐시·가상메모리·입출력",
  "ref": "기본서 CHAPTER 01 컴퓨터 구조 (1.5~1.6)",
  "body": [
   {
    "h": "기억장치 계층",
    "li": [
     "레지스터 → 캐시(L1·L2·L3) → 주기억 → SSD → HDD → 테이프",
     "위로 갈수록 빠르고 작고 비트당 비용이 큼",
     "지역성(시간·공간)이 캐시 효과의 근거",
     "평균 접근시간 = 적중률×캐시시간 + 실패율×(실패 시 접근시간)"
    ]
   },
   {
    "h": "캐시 매핑·쓰기·교체",
    "tb": {
     "head": [
      "분류",
      "방식",
      "특징"
     ],
     "rows": [
      [
       "매핑",
       "직접 사상",
       "블록 위치 고정·충돌 多"
      ],
      [
       "매핑",
       "완전 연관",
       "자유 배치·태그 비교 비용 큼"
      ],
      [
       "매핑",
       "집합 연관",
       "N-way 절충"
      ],
      [
       "쓰기",
       "Write-Through",
       "동시 기록·일관성↑"
      ],
      [
       "쓰기",
       "Write-Back",
       "교체 시 기록·Dirty 비트"
      ],
      [
       "교체",
       "LRU·FIFO·LFU·Random",
       "LRU 가장 오래 미사용"
      ]
     ]
    }
   },
   {
    "h": "반도체 메모리",
    "li": [
     "DRAM: 커패시터·주기적 Refresh·주기억장치(DDR3·DDR4·DDR5·LPDDR)",
     "SRAM: 플립플롭·Refresh 불요·고속·캐시",
     "ROM: Mask(제조 시 기록)·PROM(1회 기록)·EPROM(자외선 소거)·EEPROM(전기 소거)·Flash(블록 단위 전기 소거)"
    ]
   },
   {
    "h": "가상메모리",
    "li": [
     "페이징(고정 크기 페이지)·세그먼테이션(가변 크기 논리 단위)",
     "페이지 부재(Page Fault) 시 보조기억에서 적재 — 요구 페이징",
     "교체: FIFO(벨레이디 모순 가능)·LRU·LFU·OPT(이론 최적)",
     "스래싱: 과도한 페이지 교체로 처리율 급감 — 워킹셋으로 완화"
    ]
   },
   {
    "h": "입출력·버스·인터럽트",
    "li": [
     "Programmed I/O(폴링) → Interrupt I/O → DMA(사이클 스틸링) → Channel(I/O 전용 프로세서)",
     "시스템 버스: 주소 버스(단방향)·데이터 버스(양방향)·제어 버스",
     "주소선 n개 → 2ⁿ 주소 공간",
     "인터럽트: 하드웨어·소프트웨어·예외(Exception)·NMI(마스크 불가)"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "자료구조·알고리즘",
  "title": "자료구조·알고리즘 복잡도",
  "ref": "기본서 CHAPTER 02 자료구조·알고리즘·OS (2.1~2.2)",
  "body": [
   {
    "h": "선형·비선형 자료구조",
    "li": [
     "선형: 배열·연결 리스트(단방향·양방향·환형)·스택(LIFO)·큐(FIFO)·데크·우선순위 큐",
     "비선형: 트리(이진·BST·AVL·Red-Black·B/B+Tree·힙·트라이)·그래프",
     "B+Tree: 리프가 연결 리스트로 이어져 범위 검색에 유리 — DB 인덱스",
     "깊이 k 이진트리 최대 노드 수 = 2ᵏ − 1"
    ]
   },
   {
    "h": "해시",
    "li": [
     "해시 함수로 키를 버킷 주소로 변환, 평균 O(1) 탐색",
     "충돌 해결: 체이닝 / 개방 주소법(선형·제곱 조사·이중 해싱)",
     "선형 조사는 1차 군집, 제곱 조사는 2차 군집 발생"
    ]
   },
   {
    "h": "정렬 복잡도",
    "tb": {
     "head": [
      "정렬",
      "평균",
      "비고"
     ],
     "rows": [
      [
       "버블·선택·삽입",
       "O(n²)",
       "삽입 정렬은 거의 정렬된 자료에서 O(n)"
      ],
      [
       "퀵",
       "O(n log n)",
       "최악 O(n²)·제자리 정렬"
      ],
      [
       "병합",
       "O(n log n)",
       "항상 n log n·안정·추가 메모리"
      ],
      [
       "힙",
       "O(n log n)",
       "최악도 n log n"
      ],
      [
       "계수·기수·버킷",
       "O(n + k)",
       "비교 기반 아님"
      ]
     ]
    }
   },
   {
    "h": "탐색·설계 기법",
    "li": [
     "선형 탐색 O(n), 이진 탐색 O(log n)(정렬 필수)",
     "그래프: BFS(큐)·DFS(스택)·다익스트라(음수 가중치 불가)·A*(휴리스틱)",
     "DP(부분 문제 결과 저장)·탐욕(Greedy)·분할 정복·백트래킹·분기 한정",
     "Big-O 순서: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "운영체제",
  "title": "운영체제 — 스케줄링·IPC·교착상태",
  "ref": "기본서 CHAPTER 02 자료구조·알고리즘·OS (2.3)",
  "body": [
   {
    "h": "프로세스·스레드",
    "li": [
     "상태 전이: New → Ready → Running → Waiting(Blocked) → Terminated",
     "PCB: 프로세스 상태·PC·레지스터·메모리 정보 보관",
     "스레드: 코드·데이터·힙 공유, 스택·레지스터 별도 — 경량 프로세스"
    ]
   },
   {
    "h": "CPU 스케줄링",
    "tb": {
     "head": [
      "기법",
      "선점 여부",
      "특징"
     ],
     "rows": [
      [
       "FCFS",
       "비선점",
       "도착 순서·호위 효과"
      ],
      [
       "SJF",
       "비선점",
       "평균 대기시간 최소·기아 가능"
      ],
      [
       "SRT",
       "선점",
       "SJF의 선점형"
      ],
      [
       "RR",
       "선점",
       "타임 퀀텀 순환·시분할"
      ],
      [
       "HRRN",
       "비선점",
       "(대기+서비스)/서비스 우선순위·기아 완화"
      ],
      [
       "MLFQ",
       "선점",
       "다단계 피드백 큐"
      ]
     ]
    }
   },
   {
    "h": "IPC(Inter-Process Communication)",
    "li": [
     "파이프·네임드 파이프·메시지 큐·공유 메모리·소켓·시그널·RPC",
     "공유 메모리는 가장 빠르지만 동기화(세마포어·뮤텍스) 필요"
    ]
   },
   {
    "h": "교착상태",
    "li": [
     "필요조건 4: 상호배제·점유와 대기·비선점·순환 대기",
     "대응: 예방(조건 부정)·회피(은행원 알고리즘)·탐지·회복",
     "Wait-Die·Wound-Wait: 타임스탬프 기반 교착 방지",
     "Linux 명령: ps·top·kill(프로세스), chmod·chown(권한), ss·netstat·tcpdump(네트워크)"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "데이터베이스",
  "title": "데이터베이스 — 키·ACID·정규화·SQL·NoSQL",
  "ref": "기본서 CHAPTER 03 데이터베이스·SW 공학 (3.1~3.4)",
  "body": [
   {
    "h": "관계형 DB 키",
    "li": [
     "슈퍼키: 유일성 만족 / 후보키: 유일성 + 최소성",
     "기본키: 후보키 중 선택, NULL 불가 / 대체키: 나머지 후보키",
     "외래키: 다른 릴레이션 기본키 참조 — 참조 무결성",
     "차수(Degree) = 속성 수, 카디널리티 = 튜플 수"
    ]
   },
   {
    "h": "트랜잭션 ACID·격리수준",
    "tb": {
     "head": [
      "항목",
      "의미",
      "관련"
     ],
     "rows": [
      [
       "Atomicity",
       "All or Nothing",
       "Commit·Rollback"
      ],
      [
       "Consistency",
       "일관된 상태 유지",
       "무결성 제약"
      ],
      [
       "Isolation",
       "동시 트랜잭션 간섭 차단",
       "격리수준·잠금"
      ],
      [
       "Durability",
       "커밋 결과 영구 보존",
       "로그·회복"
      ],
      [
       "격리수준",
       "RU < RC < RR < Serializable",
       "Dirty·Non-Repeatable·Phantom"
      ]
     ]
    }
   },
   {
    "h": "정규화",
    "li": [
     "1NF 원자값 → 2NF 부분 함수 종속 제거 → 3NF 이행 함수 종속 제거 → BCNF 모든 결정자가 후보키",
     "4NF 다치 종속 제거, 5NF 조인 종속 제거",
     "반정규화: 성능을 위해 의도적 중복 — 성능과 무결성의 트레이드오프"
    ]
   },
   {
    "h": "SQL",
    "li": [
     "DDL: CREATE·ALTER·DROP·TRUNCATE / DML: SELECT·INSERT·UPDATE·DELETE·MERGE",
     "DCL: GRANT·REVOKE / TCL: COMMIT·ROLLBACK·SAVEPOINT",
     "조인: INNER(일치만)·OUTER(LEFT·RIGHT·FULL, NULL 보존)·CROSS(카티션 곱)·SELF·NATURAL",
     "집합 연산: UNION·INTERSECT·EXCEPT(MINUS), 서브쿼리: EXISTS·IN·ANY·ALL"
    ]
   },
   {
    "h": "NoSQL·빅데이터",
    "li": [
     "Key-Value(Redis·DynamoDB)·Document(MongoDB)·Column(Cassandra·HBase·BigTable)·Graph(Neo4j)",
     "CAP: 일관성·가용성·분할 내성 동시 완전 보장 불가 / BASE: 결과적 일관성",
     "Hadoop: HDFS(저장)·MapReduce(처리)·YARN(자원 관리), Spark·Kafka·Flink",
     "5V: Volume·Velocity·Variety·Veracity·Value"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-6",
  "t": "SW 공학",
  "title": "SW 공학 — 개발 모델·설계·테스트",
  "ref": "기본서 CHAPTER 03 데이터베이스·SW 공학 (3.5)",
  "body": [
   {
    "h": "SDLC 모델",
    "li": [
     "폭포수: 순차·단계 종료 후 다음 단계·문서 중심",
     "V-모델: 개발 단계와 테스트 단계 대응",
     "프로토타입: 시제품으로 요구사항 확인",
     "애자일: 반복·점진·변화 수용(Scrum·Kanban·XP·Lean·SAFe), DevOps: 개발·운영 통합"
    ]
   },
   {
    "h": "스크럼 요소",
    "li": [
     "스프린트: 짧은 반복 개발 주기",
     "제품 백로그·스프린트 백로그",
     "데일리 스크럼·스프린트 회고(Retrospective)",
     "칸반: 작업 시각화·WIP(진행 중 작업) 제한"
    ]
   },
   {
    "h": "설계 원칙·패턴",
    "tb": {
     "head": [
      "구분",
      "내용",
      "예"
     ],
     "rows": [
      [
       "SOLID",
       "SRP·OCP·LSP·ISP·DIP",
       "OCP: 확장 열림·변경 닫힘"
      ],
      [
       "GoF 생성",
       "객체 생성 캡슐화",
       "Singleton·Factory Method·Builder"
      ],
      [
       "GoF 구조",
       "클래스·객체 조합",
       "Adapter·Proxy·Composite"
      ],
      [
       "GoF 행위",
       "객체 간 책임·통신",
       "Observer·Strategy·Iterator"
      ],
      [
       "UML",
       "구조·행위 다이어그램",
       "클래스·시퀀스·유스케이스"
      ]
     ]
    }
   },
   {
    "h": "테스트",
    "li": [
     "단계: 단위 → 통합 → 시스템 → 인수",
     "블랙박스(명세 기반: 동등분할·경계값) / 화이트박스(구조 기반: 문장·분기 커버리지) / 그레이박스",
     "TDD: 테스트 먼저 작성 / BDD: 행위 시나리오 기반"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-7",
  "t": "정보통신 법규",
  "title": "정보통신 관련 법령·정보통신공사업법·전파법",
  "ref": "기본서 CHAPTER 04 정보설비기준·관련 법규 (4.1·4.2·4.5·4.6)",
  "body": [
   {
    "h": "법령 체계",
    "tb": {
     "head": [
      "법령",
      "주요 내용",
      "비고"
     ],
     "rows": [
      [
       "전기통신기본법",
       "전기통신 기본 원칙·정의",
       "1983 제정"
      ],
      [
       "전기통신사업법",
       "사업자 규제·이용자 보호",
       "기간·부가통신"
      ],
      [
       "정보통신공사업법",
       "공사 시공·설계·감리·기술자",
       "최빈출"
      ],
      [
       "전파법",
       "주파수 분배·무선국 개설",
       "전파관리"
      ],
      [
       "정보통신망법",
       "망 이용 촉진·이용자 보호",
       "정보보호"
      ],
      [
       "개인정보보호법",
       "개인정보 처리 일반법",
       ""
      ],
      [
       "지능정보화기본법",
       "국가정보화기본법 전부개정",
       "명칭 변경"
      ]
     ]
    }
   },
   {
    "h": "정보통신공사업법",
    "li": [
     "공사 종류: 통신설비·방송설비·정보설비·구내통신선로·이동통신·소방통신 공사",
     "공사업 등록 요건: 자본금·기술자·시설",
     "정보통신기술자 등급: 초급·중급·고급·특급(자격·경력 인정)",
     "설계·감리: 설계도서·시방서·내역서, 감리원의 감리 보고서, 하자 책임"
    ]
   },
   {
    "h": "전파법·주파수",
    "li": [
     "주파수는 국가가 분배·관리(전파관리), 무선국은 개설·등록·신고·검사 대상",
     "한국방송통신전파진흥원(KCA)·중앙전파관리소가 전파 관련 업무 수행",
     "대역: VLF·LF·MF·HF·VHF(30~300MHz)·UHF(300MHz~3GHz)·SHF(3~30GHz)·EHF(30~300GHz)",
     "이동통신 주요 대역: 800MHz·1.8·2.1·2.6·3.5·28GHz"
    ]
   },
   {
    "h": "자격·시험",
    "li": [
     "정보통신기사 시험 시행: KCA(한국방송통신전파진흥원)",
     "필기 5과목·100문항·150분, 실기 작업형",
     "관련 자격: 정보통신기사·산업기사·기능사, 전파전자통신기사, 방송통신기사"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-8",
  "t": "구내통신·설비기준",
  "title": "구내통신선로설비·접지·전원·방재",
  "ref": "기본서 CHAPTER 04 정보설비기준·관련 법규 (4.3·4.4)",
  "body": [
   {
    "h": "구내통신 구성",
    "li": [
     "MDF(Main Distribution Frame): 주통신실, 국선 인입·구내간선 집중",
     "IDF(Intermediate Distribution Frame): 층통신실, 수평배선 분기",
     "세대단자함: 각 세대마다 1개 이상 설치",
     "통신실 기준 항목: 면적·전원·접지"
    ]
   },
   {
    "h": "선로 구분",
    "li": [
     "건물간선: 건물과 건물 사이 연결",
     "구내간선: 건물 내 MDF↔IDF 연결",
     "수평배선: IDF↔인출구(세대·사무공간) 연결",
     "매체: 동선(UTP·STP)·광케이블(단일모드·다중모드)"
    ]
   },
   {
    "h": "케이블 성능",
    "tb": {
     "head": [
      "규격",
      "전송속도",
      "대역폭"
     ],
     "rows": [
      [
       "Cat 5e",
       "1Gbps",
       "100MHz"
      ],
      [
       "Cat 6",
       "1Gbps",
       "250MHz"
      ],
      [
       "Cat 6A",
       "10Gbps",
       "500MHz"
      ],
      [
       "Cat 7",
       "10Gbps",
       "600MHz·차폐"
      ],
      [
       "SMF",
       "장거리",
       "단일 모드·간선"
      ],
      [
       "MMF OM1~OM5",
       "단거리",
       "다중 모드·구내"
      ]
     ]
    }
   },
   {
    "h": "접지·전원·낙뢰",
    "li": [
     "접지 종별: 1종·2종·3종·특별 3종(기본서 분류), 공통 접지·통합 접지",
     "통합 접지: 전력·통신·피뢰 접지를 하나로 묶어 전위차 최소화",
     "전원: 상용·예비·UPS(무정전 전원)·발전기",
     "SPD(Surge Protective Device) Class I·II·III, 피뢰침·접지와 함께 낙뢰·서지 보호",
     "※ 전기설비 분야는 KEC(한국전기설비규정) 시행으로 종별 접지가 계통 접지 체계로 바뀌었으므로 문제의 기준 시점 확인"
    ]
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "용어·정의·단일 사실 — 반드시 맞혀야 하는 문항",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "개념 구분·비교 — 합격선을 가르는 문항",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "계산·사례 판단·복합 적용 — 변별력 문항",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "주파수가 50Hz인 정현파 신호의 주기는?",
  "c": [
   "2ms",
   "20ms",
   "50ms",
   "200ms"
  ],
  "a": 1,
  "e": "T = 1/f = 1/50 = 0.02s = 20ms이다. 2ms는 500Hz, 50ms는 20Hz, 200ms는 5Hz의 주기다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "주파수 3GHz인 전파의 자유공간 파장은? (광속 3×10⁸m/s)",
  "c": [
   "1cm",
   "1m",
   "10cm",
   "30cm"
  ],
  "a": 2,
  "e": "λ = c/f = 3×10⁸ / 3×10⁹ = 0.1m = 10cm이다. 1m는 300MHz, 1cm는 30GHz, 30cm는 1GHz일 때다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "송수신이 모두 가능하지만 한 시점에는 한쪽만 송신하는 무전기형 통신 방식은?",
  "c": [
   "반이중(Half-Duplex)",
   "단방향(Simplex)",
   "전이중(Full-Duplex)",
   "다중접속(Multiple Access)"
  ],
  "a": 0,
  "e": "교대로 양방향 통신하는 것은 반이중이다. 단방향은 한쪽으로만, 전이중은 동시 양방향(전화), 다중접속은 여러 사용자가 매체를 공유하는 기법이다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 2,
  "q": "ITU 주파수 대역 분류에서 SHF 대역의 범위는?",
  "c": [
   "30~300MHz",
   "300MHz~3GHz",
   "30~300GHz",
   "3~30GHz"
  ],
  "a": 3,
  "e": "SHF는 3~30GHz(위성·5G·Wi-Fi)이다. 30~300MHz는 VHF, 300MHz~3GHz는 UHF, 30~300GHz는 EHF다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 2,
  "q": "출력 전력이 입력 전력의 100배인 증폭기의 이득은?",
  "c": [
   "10dB",
   "20dB",
   "30dB",
   "40dB"
  ],
  "a": 1,
  "e": "10log₁₀(100) = 20dB이다. 10dB는 10배, 30dB는 1000배, 40dB는 10000배다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "송신 전력 1W를 dBm으로 나타내면?",
  "c": [
   "30dBm",
   "0dBm",
   "10dBm",
   "60dBm"
  ],
  "a": 0,
  "e": "dBm = 10log₁₀(1000mW/1mW) = 30dBm이다. 0dBm은 1mW, 10dBm은 10mW, 60dBm은 1kW다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 3,
  "q": "자유공간에서 송수신 거리를 2배로 늘리면 경로손실은 약 얼마 증가하는가?",
  "c": [
   "2dB",
   "3dB",
   "12dB",
   "6dB"
  ],
  "a": 3,
  "e": "자유공간 경로손실은 거리 제곱에 비례하므로 20log₁₀(2) ≈ 6dB 증가한다. 3dB는 전력 2배, 12dB는 거리 4배일 때의 증가량이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 1,
  "q": "잡음이 있는 채널의 이론적 최대 전송용량을 나타내는 샤논 공식은?",
  "c": [
   "C = B·log₂(1 + S/N)",
   "C = 2B·log₂M",
   "C = B·log₂M",
   "C = 2B·(1 + S/N)"
  ],
  "a": 0,
  "e": "샤논 용량은 C = B·log₂(1+S/N)이다. 2B·log₂M은 잡음 없는 채널의 나이퀴스트 공식이고, 나머지는 존재하지 않는 식이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "대역폭 4kHz, 신호 대 잡음비(S/N) 255인 채널의 샤논 용량은?",
  "c": [
   "8kbps",
   "16kbps",
   "32kbps",
   "64kbps"
  ],
  "a": 2,
  "e": "C = 4000 × log₂(1+255) = 4000 × 8 = 32,000bps = 32kbps이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "대역폭 3kHz인 잡음 없는 채널에서 4레벨 신호를 쓸 때 나이퀴스트 최대 전송속도는?",
  "c": [
   "6kbps",
   "12kbps",
   "24kbps",
   "3kbps"
  ],
  "a": 1,
  "e": "C = 2B·log₂M = 2 × 3000 × 2 = 12,000bps이다. 6kbps는 2진(M=2)일 때 값이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 1,
  "q": "신호 대 잡음비 30dB를 전력비(배수)로 나타내면?",
  "c": [
   "1000",
   "30",
   "300",
   "3000"
  ],
  "a": 0,
  "e": "30 = 10log₁₀(S/N) → S/N = 10³ = 1000이다. dB를 10으로 나눈 수만큼 10을 곱한다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "변조속도 1600Baud인 모뎀이 16-QAM을 사용할 때 데이터 전송속도는?",
  "c": [
   "6400bps",
   "3200bps",
   "1600bps",
   "25600bps"
  ],
  "a": 0,
  "e": "bps = Baud × log₂16 = 1600 × 4 = 6400bps이다. 25600은 16을 log 없이 곱한 오류다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "9600bps를 8PSK로 전송할 때 필요한 변조속도는?",
  "c": [
   "1200Baud",
   "4800Baud",
   "3200Baud",
   "9600Baud"
  ],
  "a": 2,
  "e": "8PSK는 log₂8 = 3bit/심볼이므로 Baud = 9600/3 = 3200이다. 4800은 QPSK, 9600은 2진 변조일 때다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 3,
  "q": "대역폭 1MHz, S/N 15인 채널의 샤논 용량은?",
  "c": [
   "2Mbps",
   "4Mbps",
   "15Mbps",
   "16Mbps"
  ],
  "a": 1,
  "e": "C = 10⁶ × log₂(1+15) = 10⁶ × 4 = 4Mbps이다. 16Mbps는 log를 빠뜨린 값이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 3,
  "q": "샤논 용량 C가 대역폭 B의 2배(C = 2B)가 되기 위한 최소 S/N은?",
  "c": [
   "S/N = 1",
   "S/N = 2",
   "S/N = 4",
   "S/N = 3"
  ],
  "a": 3,
  "e": "log₂(1+S/N) = 2 → 1+S/N = 4 → S/N = 3(약 4.8dB)이다. S/N=1이면 C = B다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 3,
  "q": "샤논 공식에서 S/N은 그대로 두고 대역폭만 2배로 늘리면 채널 용량은?",
  "c": [
   "2배로 증가",
   "4배로 증가",
   "변화 없음",
   "√2배로 증가"
  ],
  "a": 0,
  "e": "C는 B에 정비례하므로 2배가 된다. 반면 S/N을 2배로 하면 log 안이므로 용량은 2배보다 훨씬 적게 늘어난다(실제로는 대역 확대 시 잡음 전력도 늘어나는 점은 별도 고려)."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 1,
  "q": "QPSK 변조에서 한 심볼이 전달하는 비트 수는?",
  "c": [
   "1비트",
   "4비트",
   "2비트",
   "3비트"
  ],
  "a": 2,
  "e": "QPSK는 위상 4개(M=4) → log₂4 = 2비트다. 1비트는 BPSK, 3비트는 8PSK, 4비트는 16-QAM이다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 1,
  "q": "반송파의 진폭과 위상을 동시에 변화시키는 디지털 변조 방식은?",
  "c": [
   "ASK",
   "FSK",
   "PSK",
   "QAM"
  ],
  "a": 3,
  "e": "QAM은 진폭과 위상을 함께 바꾼다. ASK는 진폭, FSK는 주파수, PSK는 위상만 바꾼다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "심볼률 2Msps로 64-QAM을 전송할 때 비트율은?",
  "c": [
   "12Mbps",
   "8Mbps",
   "6Mbps",
   "128Mbps"
  ],
  "a": 0,
  "e": "64-QAM은 6bit/심볼 → 2M × 6 = 12Mbps이다. 8Mbps는 16-QAM, 128Mbps는 log를 빠뜨린 값이다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "최대 주파수 편이 75kHz, 최고 변조 주파수 15kHz인 FM 신호의 대역폭(카슨 법칙)은?",
  "c": [
   "150kHz",
   "180kHz",
   "90kHz",
   "30kHz"
  ],
  "a": 1,
  "e": "BW = 2(Δf + fm) = 2(75 + 15) = 180kHz이다. 150kHz는 fm을 빠뜨린 값이다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "최고 변조 주파수가 5kHz인 신호를 DSB-AM으로 변조할 때 점유 대역폭은?",
  "c": [
   "2.5kHz",
   "5kHz",
   "15kHz",
   "10kHz"
  ],
  "a": 3,
  "e": "DSB는 상·하측파대를 모두 가지므로 2fm = 10kHz이다. 5kHz는 SSB의 대역폭이다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 3,
  "q": "반송파 전력 100W인 AM 신호를 변조도 m = 1로 변조할 때 총 송신 전력은?",
  "c": [
   "100W",
   "125W",
   "150W",
   "200W"
  ],
  "a": 2,
  "e": "Pt = Pc(1 + m²/2) = 100 × 1.5 = 150W이다. 측파대 전력은 50W로 총전력의 1/3이다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 3,
  "q": "점유 대역폭이 같을 때 QAM의 변조 차수를 높이면 나타나는 결과는?",
  "c": [
   "전송속도와 잡음 내성 모두 향상",
   "전송속도 향상, 잡음 내성 저하",
   "전송속도 저하, 잡음 내성 향상",
   "전송속도와 잡음 내성 모두 불변"
  ],
  "a": 1,
  "e": "차수↑ → 심볼당 비트↑ → 속도↑, 그러나 성상도 신호점 간격이 좁아져 같은 잡음에서 오류율이 오른다. 그래서 고차 QAM은 높은 SNR이 필요하다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 1,
  "q": "AM 변조 방식 중 SSB의 장점으로 옳은 것은?",
  "c": [
   "반송파 복원이 필요 없음",
   "수신기 구조가 가장 단순함",
   "FM보다 잡음 내성이 우수함",
   "DSB의 절반 대역폭만 점유함"
  ],
  "a": 3,
  "e": "SSB는 한쪽 측파대만 보내 대역폭이 fm(DSB의 절반)이다. 대신 동기 검파·반송파 복원이 필요해 수신기가 복잡하고, 잡음 내성은 FM보다 낮다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "최대 주파수 편이 50kHz, 변조 신호 주파수 10kHz인 FM의 변조지수 β는?",
  "c": [
   "5",
   "0.2",
   "10",
   "60"
  ],
  "a": 0,
  "e": "β = Δf/fm = 50/10 = 5이다. 0.2는 역수, 60은 둘을 더한 값이다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 1,
  "q": "PCM 송수신 과정을 올바른 순서로 나타낸 것은?",
  "c": [
   "양자화 → 표본화 → 부호화 → 복호화",
   "표본화 → 양자화 → 부호화 → 복호화",
   "부호화 → 표본화 → 양자화 → 복호화",
   "표본화 → 부호화 → 양자화 → 복호화"
  ],
  "a": 1,
  "e": "PCM은 표본화 → 양자화 → 부호화 → 복호화(표·양·부·복) 순서다. 연속 신호를 먼저 시간축에서 이산화(표본화)한 뒤 크기를 이산화(양자화)한다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 1,
  "q": "최고 주파수 4kHz인 음성 신호를 왜곡 없이 복원하기 위한 최소 표본화 주파수는?",
  "c": [
   "4kHz",
   "2kHz",
   "8kHz",
   "16kHz"
  ],
  "a": 2,
  "e": "표본화 정리 fs ≥ 2fmax → 8kHz이다. 4kHz 이하로 표본화하면 에일리어싱이 생긴다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "8kHz로 표본화하고 표본당 8비트로 부호화하는 PCM 1채널의 전송속도는?",
  "c": [
   "8kbps",
   "16kbps",
   "32kbps",
   "64kbps"
  ],
  "a": 3,
  "e": "8,000 × 8 = 64,000bps = 64kbps(DS0)이다. 32kbps는 ADPCM(4bit) 음성 속도다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "PCM에서 양자화 잡음을 줄이는 방법으로 옳은 것은?",
  "c": [
   "양자화 비트 수를 늘린다",
   "표본화 주파수를 낮춘다",
   "부호화 비트 수를 줄인다",
   "반송파 주파수를 높인다"
  ],
  "a": 0,
  "e": "양자화 비트를 늘리면 레벨이 촘촘해져 양자화 잡음이 준다. 표본화 주파수를 낮추면 에일리어싱 위험, 비트를 줄이면 잡음 증가, 반송파는 무관하다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 3,
  "q": "균일 양자화 PCM에서 양자화 비트 수를 7비트에서 8비트로 늘리면 신호 대 양자화 잡음비(SQNR)는?",
  "c": [
   "약 3dB 개선",
   "약 6dB 개선",
   "약 10dB 개선",
   "변화 없음"
  ],
  "a": 1,
  "e": "SQNR ≈ 6.02n + 1.76dB이므로 1비트 증가 시 약 6dB 개선된다(레벨 2배 → 잡음 전압 1/2 → 전력 1/4)."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "델타 변조(DM)에 대한 설명으로 옳은 것은?",
  "c": [
   "표본당 8비트로 부호화한다",
   "펄스의 폭에 정보를 싣는다",
   "인접 표본 간 차이를 1비트로 부호화한다",
   "펄스의 위치에 정보를 싣는다"
  ],
  "a": 2,
  "e": "DM은 직전 근사값과의 증감만 1비트로 표현한다. 8비트 부호화는 일반 PCM, 폭은 PWM, 위치는 PPM이다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 3,
  "q": "델타 변조에서 입력 신호가 급격히 변해 계단 근사가 따라가지 못해 생기는 잡음은?",
  "c": [
   "입상 잡음(Granular Noise)",
   "열잡음(Thermal Noise)",
   "누화(Crosstalk)",
   "경사 과부하 잡음(Slope Overload)"
  ],
  "a": 3,
  "e": "급변 신호를 못 따라가면 경사 과부하 잡음이다. 입상 잡음은 반대로 평탄한 신호에서 계단이 진동하며 생긴다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "PCM에서 μ-law·A-law 압신(Companding)을 사용하는 주된 목적은?",
  "c": [
   "표본화 주파수를 줄이기 위해",
   "비균일 양자화로 작은 신호의 SQNR을 개선하기 위해",
   "전송 오류를 정정하기 위해",
   "다중화 효율을 높이기 위해"
  ],
  "a": 1,
  "e": "압신은 작은 진폭에 양자화 레벨을 촘촘히 배정하는 비균일 양자화로, 작은 신호의 SQNR을 개선한다. 표본화·오류 정정·다중화와는 무관하다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 1,
  "q": "비동기식 전송의 특징으로 옳은 것은?",
  "c": [
   "블록 단위로 플래그를 붙여 전송",
   "SYN 문자로 블록 동기를 맞춤",
   "문자마다 Start·Stop 비트를 붙임",
   "송수신 클록을 공유해 고속 전송"
  ],
  "a": 2,
  "e": "비동기식은 문자 단위로 Start·Stop 비트를 붙인다. 블록·플래그·SYN·클록 공유는 동기식의 특징이다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 2,
  "q": "Start 1비트, 데이터 8비트, Stop 1비트로 구성된 비동기 전송의 전송 효율은?",
  "c": [
   "70%",
   "90%",
   "100%",
   "80%"
  ],
  "a": 3,
  "e": "효율 = 8/(1+8+1) = 0.8 = 80%이다. Stop 비트가 2개면 8/11 ≈ 72.7%가 된다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 2,
  "q": "맨체스터(Manchester) 부호의 특징으로 옳은 것은?",
  "c": [
   "비트 구간 동안 레벨을 그대로 유지",
   "비트 중간의 천이로 클록 정보를 함께 전송",
   "1을 + 와 − 로 교대로 표현",
   "연속된 0 8개를 특정 패턴으로 대체"
  ],
  "a": 1,
  "e": "맨체스터는 매 비트 중간에 천이가 있어 자기 동기(클록 복원)가 가능하다(10BASE-T). 레벨 유지는 NRZ, +/− 교대는 AMI, 0 8개 대체는 B8ZS다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 3,
  "q": "E1 회선에 사용되는 HDB3 부호의 동작으로 옳은 것은?",
  "c": [
   "연속된 0 8개를 대체",
   "연속된 1 4개를 대체",
   "연속된 0 4개를 바이폴라 위반 펄스를 포함한 패턴으로 대체",
   "비트 중간에 천이를 삽입"
  ],
  "a": 2,
  "e": "HDB3는 AMI에서 0이 4개 연속되면 위반(V) 펄스를 포함한 패턴으로 바꿔 동기를 유지한다. 0 8개 대체는 T1의 B8ZS다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 2,
  "q": "기저대역(Baseband) 전송에 대한 설명으로 옳은 것은?",
  "c": [
   "디지털 신호를 변조 없이 그대로 전송하며 이더넷 LAN에 쓰인다",
   "반송파 변조로 여러 채널을 동시 전송하며 CATV에 쓰인다",
   "광 파장별로 채널을 나누어 전송한다",
   "위성 중계기를 통해 원거리로 전송한다"
  ],
  "a": 0,
  "e": "기저대역은 변조 없이 디지털 펄스를 그대로 보내는 단거리 방식(이더넷)이다. 변조·다채널 CATV는 광대역(Broadband) 전송이다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 3,
  "q": "AMI(Alternate Mark Inversion) 부호에 대한 설명으로 옳은 것은?",
  "c": [
   "0을 표현할 때 극성을 교대한다",
   "직류(DC) 성분이 커서 변압기 결합에 불리하다",
   "연속된 1이 길게 이어지면 동기를 잃는다",
   "1을 +, − 로 교대 표현하여 DC 성분이 거의 없다"
  ],
  "a": 3,
  "e": "AMI는 1을 교대 극성으로 보내 DC 성분을 억제한다. 0은 0V로 보내므로 연속 0이 길면 동기를 잃으며, 이를 HDB3·B8ZS로 보완한다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 1,
  "q": "광섬유가 빛을 코어 안에 가두어 전송하는 원리는?",
  "c": [
   "굴절",
   "전반사",
   "회절",
   "산란"
  ],
  "a": 1,
  "e": "코어와 클래딩의 굴절률 차이로 임계각 이상 입사한 빛이 전반사된다. 산란은 오히려 손실 원인이다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "단일모드 광섬유(SMF)에 대한 설명으로 옳은 것은?",
  "c": [
   "850nm 파장으로 건물 내 단거리에 주로 쓴다",
   "코어 직경이 50~62.5μm로 크다",
   "1310·1550nm 파장을 쓰며 모드 분산이 없어 장거리에 적합하다",
   "LED 광원을 주로 사용한다"
  ],
  "a": 2,
  "e": "SMF는 코어 약 9μm, 1310·1550nm, 모드 분산 없음으로 장거리용이다. 850nm·50/62.5μm·LED는 MMF의 특징이다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "10Gbps를 100m까지 지원하는 비차폐 UTP 케이블의 최소 카테고리는?",
  "c": [
   "Cat5e",
   "Cat8",
   "Cat6",
   "Cat6a"
  ],
  "a": 3,
  "e": "Cat6a는 10Gbps·100m를 지원한다. Cat6는 10Gbps를 약 55m까지만, Cat5e는 1Gbps, Cat8은 40Gbps·30m다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 1,
  "q": "IEEE 802.11b 무선 LAN의 주파수 대역과 최대 전송속도는?",
  "c": [
   "2.4GHz · 11Mbps",
   "5GHz · 54Mbps",
   "2.4GHz · 54Mbps",
   "5GHz · 6.9Gbps"
  ],
  "a": 0,
  "e": "802.11b는 2.4GHz·11Mbps다. 5GHz·54Mbps는 11a, 2.4GHz·54Mbps는 11g, 5GHz·6.9Gbps는 11ac다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "Wi-Fi 6에 해당하는 IEEE 표준과 핵심 기술의 연결로 옳은 것은?",
  "c": [
   "802.11ac — MU-MIMO·256QAM",
   "802.11ax — OFDMA·1024QAM",
   "802.11n — MIMO 최초 도입",
   "802.11be — MLO·4096QAM"
  ],
  "a": 1,
  "e": "Wi-Fi 6 = 802.11ax(OFDMA·1024QAM)이다. 11ac는 Wi-Fi 5, 11n은 Wi-Fi 4, 11be는 Wi-Fi 7이다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "정지궤도(GEO) 위성의 적도 상공 고도는 약 얼마인가?",
  "c": [
   "550km",
   "20,200km",
   "35,786km",
   "384,000km"
  ],
  "a": 2,
  "e": "GEO는 약 35,786km로 지구 자전과 같은 주기로 돈다. 550km는 LEO(Starlink), 20,200km는 GPS(MEO), 384,000km는 달까지 거리다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 3,
  "q": "저궤도(LEO) 위성통신이 정지궤도(GEO) 위성통신보다 유리한 점은?",
  "c": [
   "위성 1기로 넓은 지역을 고정적으로 커버",
   "지상 안테나의 위성 추적이 불필요",
   "궤도 수명이 가장 김",
   "전파 지연이 짧음"
  ],
  "a": 3,
  "e": "LEO는 고도가 낮아 지연이 수십 ms 수준으로 짧다. 넓은 고정 커버·추적 불필요는 GEO의 장점이고, LEO는 대기 저항으로 수명이 짧고 다수 위성이 필요하다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 3,
  "q": "광섬유에서 전반사가 일어나기 위한 조건으로 옳은 것은?",
  "c": [
   "코어 굴절률이 클래딩보다 크고, 임계각 이상으로 입사",
   "클래딩 굴절률이 코어보다 크고, 임계각 이상으로 입사",
   "코어 굴절률이 클래딩보다 크고, 임계각 미만으로 입사",
   "코어와 클래딩의 굴절률이 같고, 수직으로 입사"
  ],
  "a": 0,
  "e": "전반사는 굴절률이 큰 매질(코어)에서 작은 매질(클래딩)로 임계각 이상 입사할 때 일어난다. 임계각 미만이면 빛이 클래딩으로 빠져나간다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 1,
  "q": "하나의 광섬유에 서로 다른 파장의 빛을 실어 여러 채널을 전송하는 다중화 방식은?",
  "c": [
   "FDM",
   "TDM",
   "CDM",
   "WDM"
  ],
  "a": 3,
  "e": "파장 분할 다중화(WDM)다. FDM은 주파수, TDM은 시간, CDM은 코드로 채널을 나눈다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 2,
  "q": "통계적(비동기식) TDM에 대한 설명으로 옳은 것은?",
  "c": [
   "데이터가 있는 채널에만 슬롯을 동적 할당하며 주소 정보가 필요하다",
   "모든 채널에 고정된 타임슬롯을 할당한다",
   "채널마다 서로 다른 주파수 대역을 할당한다",
   "채널마다 서로 다른 확산 코드를 할당한다"
  ],
  "a": 0,
  "e": "ATDM은 동적 할당으로 효율이 높지만 슬롯마다 채널 식별 주소가 필요하다. 고정 슬롯은 동기식 TDM, 주파수는 FDM, 코드는 CDM이다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 3,
  "q": "OFDM 심볼 앞에 보호구간(CP, 순환 전치)을 삽입하는 주된 목적은?",
  "c": [
   "PAPR을 낮추기 위해",
   "다중경로 지연에 의한 심볼 간 간섭(ISI)을 막기 위해",
   "주파수 효율을 높이기 위해",
   "확산 코드의 직교성을 유지하기 위해"
  ],
  "a": 1,
  "e": "CP는 지연 확산보다 길게 두어 ISI를 제거한다. CP는 오버헤드라 주파수 효율은 오히려 줄고, PAPR과는 무관하며, 확산 코드는 CDMA 개념이다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 2,
  "q": "CDMA 시스템에서 기지국 가까운 단말 신호가 먼 단말 신호를 압도하는 원근 문제의 대책은?",
  "c": [
   "보호대역 확보",
   "보호시간 삽입",
   "빔포밍",
   "전력 제어"
  ],
  "a": 3,
  "e": "CDMA는 모든 단말이 같은 대역을 쓰므로 수신 전력을 맞추는 전력 제어가 필수다. 보호대역은 FDM, 보호시간은 TDM의 기법이다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 1,
  "q": "MIMO의 공간 다중화(Spatial Multiplexing) 이득으로 옳은 것은?",
  "c": [
   "수신 전력이 감소한다",
   "점유 주파수 대역이 확대된다",
   "동일 주파수로 여러 데이터 스트림을 동시 전송해 용량이 증가한다",
   "오류 프레임을 자동 재전송한다"
  ],
  "a": 2,
  "e": "공간 다중화는 다중 안테나로 같은 주파수·시간에 독립 스트림을 보내 용량을 늘린다. 대역 확대나 재전송과는 무관하다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 1,
  "q": "FEC(Forward Error Correction)에 대한 설명으로 옳은 것은?",
  "c": [
   "수신 측이 스스로 오류를 정정하며 재전송이 없다",
   "오류 검출 시 송신 측에 재전송을 요청한다",
   "수신 버퍼 넘침을 막는 흐름 제어 기법이다",
   "네트워크 혼잡을 줄이는 기법이다"
  ],
  "a": 0,
  "e": "FEC는 잉여 비트로 수신 측이 직접 정정하므로 역채널·재전송이 필요 없어 실시간·위성에 적합하다. 재전송 요청은 BEC(ARQ)다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 2,
  "q": "최소 해밍 거리가 5인 부호의 오류 검출·정정 능력은?",
  "c": [
   "검출 5비트, 정정 2비트",
   "검출 4비트, 정정 2비트",
   "검출 4비트, 정정 3비트",
   "검출 2비트, 정정 4비트"
  ],
  "a": 1,
  "e": "검출 = d − 1 = 4, 정정 = ⌊(5 − 1)/2⌋ = 2이다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 2,
  "q": "부호어 1011010과 1001011 사이의 해밍 거리는?",
  "c": [
   "0",
   "1",
   "3",
   "2"
  ],
  "a": 3,
  "e": "비트별 비교 시 3번째(1↔0)와 7번째(0↔1) 두 자리가 다르므로 해밍 거리는 2다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 3,
  "q": "순서 번호에 3비트를 사용하는 Selective Repeat ARQ의 최대 송신 윈도우 크기는?",
  "c": [
   "7",
   "8",
   "4",
   "3"
  ],
  "a": 2,
  "e": "SR은 윈도우 ≤ 2ⁿ⁻¹ = 2² = 4이다. 7(= 2ⁿ − 1)은 Go-Back-N의 최대 윈도우다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 1,
  "q": "단일 패리티 비트 검사의 한계로 옳은 것은?",
  "c": [
   "1비트 오류도 검출하지 못한다",
   "짝수 개의 비트 오류는 검출하지 못한다",
   "오류 위치를 찾아 정정할 수 있다",
   "생성 다항식이 필요하다"
  ],
  "a": 1,
  "e": "패리티는 1의 개수 홀짝만 보므로 짝수 개 오류는 놓친다. 1비트 오류는 검출하며, 정정은 불가, 다항식은 CRC다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 3,
  "q": "데이터 4비트에 해밍 부호를 적용할 때 필요한 최소 패리티 비트 수는?",
  "c": [
   "3",
   "2",
   "4",
   "5"
  ],
  "a": 0,
  "e": "2ᵖ ≥ m + p + 1 → p=3일 때 8 ≥ 8로 성립한다. 따라서 (7,4) 해밍 부호가 된다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 2,
  "q": "Go-Back-N ARQ의 재전송 방식으로 옳은 것은?",
  "c": [
   "오류 프레임만 골라 재전송한다",
   "한 프레임 보내고 ACK를 받은 뒤 다음을 보낸다",
   "오류 프레임부터 그 이후 전송한 프레임까지 모두 재전송한다",
   "FEC로 정정하고 실패 시에만 재전송한다"
  ],
  "a": 2,
  "e": "GBN은 오류 프레임 이후를 모두 재전송한다. 오류 프레임만은 SR, 한 프레임씩은 Stop-and-Wait, FEC 결합은 HARQ다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 2,
  "q": "생성 다항식 G(x) = x⁴ + x + 1을 사용하는 CRC에서 데이터 뒤에 붙는 검사 비트 수는?",
  "c": [
   "3비트",
   "5비트",
   "4비트",
   "16비트"
  ],
  "a": 2,
  "e": "CRC 검사 비트 수는 생성 다항식의 최고 차수와 같으므로 4비트다. 5는 다항식 계수 개수(5비트 제수)와 혼동한 값이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 1,
  "q": "다음 중 DCE(데이터 회선 종단 장치)에 해당하는 것은?",
  "c": [
   "개인용 컴퓨터",
   "단말 터미널",
   "모뎀",
   "호스트 서버"
  ],
  "a": 2,
  "e": "모뎀·DSU·CSU는 통신 회선 측 종단 장치인 DCE이다. PC·터미널·서버는 데이터를 생성·처리하는 DTE이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 1,
  "q": "DTE와 DCE 사이의 물리적 직렬 인터페이스 표준으로 가장 거리가 먼 것은?",
  "c": [
   "IEEE 802.11",
   "EIA-232",
   "ITU-T V.35",
   "ITU-T X.21"
  ],
  "a": 0,
  "e": "EIA-232·V.35·X.21은 DTE-DCE 접속 인터페이스 규격이다. IEEE 802.11은 무선 LAN 표준으로 DTE-DCE 직렬 인터페이스가 아니다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "RS-232 인터페이스에서 DTE가 데이터를 보내도 되는지 DCE에 묻고 허가를 받는 신호 쌍은?",
  "c": [
   "DTR / DSR",
   "TD / RD",
   "DCD / RI",
   "RTS / CTS"
  ],
  "a": 3,
  "e": "RTS(송신 요구)·CTS(송신 허가)는 하드웨어 흐름 제어용 신호 쌍이다. DTR/DSR은 장치 준비 상태, TD/RD는 데이터 송수신선, DCD/RI는 반송파 검출·링 지시이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "입력 채널 용량의 합이 출력 회선 용량보다 클 수 있으며 버퍼에 저장 후 동적으로 회선을 할당하는 장치는?",
  "c": [
   "동기식 시분할 다중화기",
   "집중화기",
   "주파수 분할 다중화기",
   "리피터"
  ],
  "a": 1,
  "e": "집중화기는 입력 합 ≥ 출력이 가능하며 버퍼링·동적 할당을 한다. 동기식 TDM·FDM은 입력 합 = 출력의 정적 할당이고, 리피터는 신호 증폭 장치이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "통계적 시분할 다중화(STDM)에 대한 설명으로 옳은 것은?",
  "c": [
   "데이터가 없어도 각 채널에 슬롯을 고정 할당한다",
   "전송할 데이터가 있는 채널에만 슬롯을 할당한다",
   "채널 간 보호 대역(Guard Band)이 반드시 필요하다",
   "주소 정보 없이 슬롯 위치만으로 채널을 식별한다"
  ],
  "a": 1,
  "e": "STDM은 동적 할당으로 효율이 높고, 슬롯 위치가 고정되지 않으므로 주소 정보가 필요하다. 고정 슬롯은 동기식 TDM, 보호 대역은 FDM의 특징이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "아날로그 음성 신호를 디지털 신호로 변환하는 장치는?",
  "c": [
   "모뎀(Modem)",
   "DSU",
   "CSU",
   "코덱(Codec)"
  ],
  "a": 3,
  "e": "코덱은 아날로그→디지털 부호화(PCM 등)를 한다. 모뎀은 디지털→아날로그 변조, DSU·CSU는 디지털 회선 접속 장치이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 3,
  "q": "PCM 음성에서 표본화 주파수 8kHz, 표본당 8비트로 부호화할 때 한 채널의 전송 속도는?",
  "c": [
   "64kbps",
   "8kbps",
   "32kbps",
   "128kbps"
  ],
  "a": 0,
  "e": "8,000표본/초 × 8비트 = 64,000bps = 64kbps(G.711). 8kbps는 G.729 압축 코덱 속도이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 1,
  "q": "다음 중 영상 부호화 표준이 아닌 것은?",
  "c": [
   "H.264",
   "H.265",
   "G.729",
   "H.266"
  ],
  "a": 2,
  "e": "G.729는 8kbps 음성 코덱이다. H.264(AVC)·H.265(HEVC)·H.266(VVC)은 영상 부호화 표준이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 1,
  "q": "모뎀의 송신 측에서 수행하는 기능은?",
  "c": [
   "아날로그 음성을 디지털로 부호화",
   "디지털 신호를 양극성 디지털로 변환",
   "여러 채널을 시간 슬롯으로 다중화",
   "디지털 데이터를 아날로그 신호로 변조"
  ],
  "a": 3,
  "e": "모뎀 송신 측은 변조(디지털→아날로그), 수신 측은 복조를 수행한다. 음성 부호화는 코덱, 양극성 변환은 DSU, 다중화는 MUX의 기능이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 1,
  "q": "DSU(Data Service Unit)에 대한 설명으로 옳은 것은?",
  "c": [
   "디지털 신호를 아날로그 반송파로 변조한다",
   "음성 신호를 PCM으로 부호화한다",
   "디지털 신호를 디지털 회선에 맞는 형태로 변환한다",
   "IP 주소로 경로를 결정한다"
  ],
  "a": 2,
  "e": "DSU는 디지털↔디지털 변환(베이스밴드)을 하는 가입자 측 DCE이다. 변조는 모뎀, 부호화는 코덱, 경로 결정은 라우터의 기능이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "사업자 디지털 회선 측에 위치하여 프레이밍·회선 보호·루프백 시험 등 진단 기능을 수행하는 장치는?",
  "c": [
   "DSU",
   "CSU",
   "아날로그 모뎀",
   "허브"
  ],
  "a": 1,
  "e": "CSU(Channel Service Unit)는 T1/E1 등 디지털 회선 종단과 진단을 담당한다. DSU는 단말 측 신호 변환, 모뎀은 변·복조, 허브는 L1 집선 장치이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "ADSL에 대한 설명으로 옳은 것은?",
  "c": [
   "하향 속도가 상향 속도보다 빠른 비대칭 방식이다",
   "상향과 하향 속도가 동일한 대칭 방식이다",
   "CATV 동축 케이블망 전용 기술이다",
   "전화 통화와 동시에 사용할 수 없다"
  ],
  "a": 0,
  "e": "ADSL은 Asymmetric DSL로 하향(약 8Mbps)이 상향(약 1Mbps)보다 빠르고, 주파수를 나눠 전화와 동시 사용이 가능하다. 대칭형은 SDSL, CATV망은 케이블 모뎀이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "ITU-T V 시리즈 모뎀 표준 중 하향 56kbps이며 상향 속도를 개선한 56k 계열 최종 표준은?",
  "c": [
   "V.90",
   "V.34",
   "V.92",
   "V.32"
  ],
  "a": 2,
  "e": "V.92는 하향 56kbps를 유지하면서 상향을 최대 48kbps로 개선했다. V.90은 상향 33.6kbps, V.34는 33.6kbps, V.32는 9,600bps이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 3,
  "q": "다음 V 시리즈 표준을 전송 속도가 낮은 것부터 올바르게 나열한 것은?",
  "c": [
   "V.21 → V.22 → V.32 → V.34",
   "V.22 → V.21 → V.34 → V.32",
   "V.21 → V.32 → V.22 → V.34",
   "V.32 → V.21 → V.22 → V.34"
  ],
  "a": 0,
  "e": "V.21(300bps) < V.22(1,200bps) < V.32(9,600bps) < V.34(33.6kbps) 순이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 3,
  "q": "다음 중 장치와 변환 방향의 연결이 옳지 않은 것은?",
  "c": [
   "모뎀 — 디지털 ↔ 아날로그",
   "코덱 — 아날로그 → 디지털 부호화",
   "CSU/DSU — 디지털 회선 접속",
   "DSU — 디지털 ↔ 아날로그"
  ],
  "a": 3,
  "e": "DSU는 디지털↔디지털 변환 장치이다. 디지털↔아날로그는 모뎀의 기능이며 나머지 연결은 모두 옳다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 1,
  "q": "OSI 2계층에서 MAC 주소를 학습해 프레임을 필터링·포워딩하는 장비는?",
  "c": [
   "리피터",
   "스위치",
   "라우터",
   "게이트웨이"
  ],
  "a": 1,
  "e": "스위치(브리지)는 L2 장비로 MAC 주소 테이블을 이용한다. 리피터는 L1, 라우터는 L3, 게이트웨이는 상위 계층 프로토콜 변환 장비이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 1,
  "q": "허브(Hub)에 대한 설명으로 옳은 것은?",
  "c": [
   "포트마다 충돌 도메인을 분리한다",
   "모든 포트가 하나의 충돌 도메인을 이룬다",
   "IP 주소를 기반으로 경로를 결정한다",
   "VLAN 태그를 삽입해 트래픽을 분리한다"
  ],
  "a": 1,
  "e": "허브는 다포트 리피터(L1)로 전 포트가 하나의 충돌 도메인이다. 포트별 분리는 스위치, IP 경로 결정은 라우터, VLAN 태깅은 스위치 기능이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "프레임 전체를 수신해 CRC 오류를 검사한 뒤 전달하는 스위칭 방식은?",
  "c": [
   "Cut-Through",
   "Fragment-Free",
   "Flooding",
   "Store-and-Forward"
  ],
  "a": 3,
  "e": "Store-and-Forward는 전체 수신 후 오류 검사로 신뢰성이 높지만 지연이 크다. Cut-Through는 목적지 MAC만 보고 전달, Fragment-Free는 64바이트 수신 후 전달, Flooding은 미학습 주소에 대한 전 포트 전송이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "Fragment-Free 스위칭이 첫 64바이트를 수신한 후 전달하는 이유는?",
  "c": [
   "이더넷 최소 프레임 길이 이내에서 발생하는 충돌 조각을 걸러내기 위해",
   "목적지 IP 주소를 확인하기 위해",
   "프레임 전체의 CRC를 계산하기 위해",
   "VLAN 태그를 제거하기 위해"
  ],
  "a": 0,
  "e": "충돌은 대부분 최소 프레임 길이(64바이트) 이내에서 발생하므로 이를 받아 보면 Runt(충돌 조각)를 걸러낼 수 있다. CRC 전체 검사는 Store-and-Forward이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "VLAN의 주된 효과로 옳은 것은?",
  "c": [
   "서로 다른 VLAN 간 통신을 라우터 없이 가능하게 한다",
   "물리적 케이블 길이 제한을 늘린다",
   "논리적으로 브로드캐스트 도메인을 분리한다",
   "충돌 도메인을 하나로 통합한다"
  ],
  "a": 2,
  "e": "VLAN은 스위치를 논리 분할해 브로드캐스트 도메인을 나눈다. VLAN 간 통신에는 라우터 또는 L3 스위치가 필요하다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "IEEE 802.1Q 태그에서 VLAN ID 필드가 12비트일 때, 예약값(0과 4095)을 제외한 사용 가능한 VLAN 수는?",
  "c": [
   "4,096개",
   "1,024개",
   "4,095개",
   "4,094개"
  ],
  "a": 3,
  "e": "2^12 = 4,096개 중 0과 4,095가 예약되어 1~4,094의 4,094개를 사용한다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "STP(Spanning Tree Protocol)의 주된 목적은?",
  "c": [
   "스위치 간 VLAN 정보를 동기화한다",
   "AS 간 라우팅 경로를 교환한다",
   "L2 중복 경로에서 발생하는 루프를 방지한다",
   "무선 AP를 중앙에서 관리한다"
  ],
  "a": 2,
  "e": "STP는 BPDU로 루트 브리지를 선출하고 일부 포트를 Blocking해 루프·브로드캐스트 스톰을 막는다. VLAN 동기화는 VTP, AS 간 경로는 BGP, AP 관리는 CAPWAP이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 3,
  "q": "24포트 L2 스위치(VLAN 미설정)에 24대의 PC를 각각 연결했을 때 충돌 도메인과 브로드캐스트 도메인 수는?",
  "c": [
   "충돌 1개, 브로드캐스트 1개",
   "충돌 24개, 브로드캐스트 1개",
   "충돌 24개, 브로드캐스트 24개",
   "충돌 1개, 브로드캐스트 24개"
  ],
  "a": 1,
  "e": "스위치는 포트마다 충돌 도메인을 분리(24개)하지만 브로드캐스트는 전 포트로 전달하므로 브로드캐스트 도메인은 1개이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 3,
  "q": "STP에서 루트 브리지로 선출되는 스위치는?",
  "c": [
   "Bridge ID(우선순위+MAC)가 가장 작은 스위치",
   "포트 수가 가장 많은 스위치",
   "MAC 주소가 가장 큰 스위치",
   "가장 먼저 전원이 켜진 스위치"
  ],
  "a": 0,
  "e": "BPDU의 Bridge ID(우선순위 + MAC 주소)를 비교해 가장 작은 값의 스위치가 루트 브리지가 된다. 우선순위가 같으면 MAC 주소가 작은 쪽이 선출된다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 1,
  "q": "다수의 무선 AP를 중앙에서 관리하는 WLAN 컨트롤러가 AP와 통신할 때 사용하는 표준 프로토콜은?",
  "c": [
   "STP",
   "VTP",
   "CAPWAP",
   "RTCP"
  ],
  "a": 2,
  "e": "CAPWAP(Control And Provisioning of Wireless Access Points)은 컨트롤러-AP 간 관리·제어 프로토콜이다. STP는 루프 방지, VTP는 VLAN 동기화, RTCP는 미디어 품질 보고 프로토콜이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 1,
  "q": "서로 다른 네트워크 간에 IP 주소를 기반으로 최적 경로를 결정하는 장비는?",
  "c": [
   "라우터",
   "허브",
   "리피터",
   "브리지"
  ],
  "a": 0,
  "e": "라우터는 L3 장비로 라우팅 테이블을 이용해 경로를 결정한다. 허브·리피터는 L1, 브리지는 L2 장비이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 1,
  "q": "RIP에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "홉 수를 메트릭으로 사용한다",
   "최대 홉 수는 15이다",
   "UDP 520 포트를 사용한다",
   "Dijkstra 알고리즘으로 최단 경로를 계산한다"
  ],
  "a": 3,
  "e": "RIP는 Distance Vector 방식으로 Bellman-Ford 알고리즘을 사용한다. Dijkstra는 OSPF·IS-IS 등 Link State 방식이 사용한다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 1,
  "q": "AS(자율 시스템) 간 경로 정보를 교환하는 EGP로 인터넷 백본에서 사용하는 프로토콜은?",
  "c": [
   "RIP",
   "BGP",
   "OSPF",
   "EIGRP"
  ],
  "a": 1,
  "e": "BGP는 Path Vector 방식의 EGP로 TCP 179를 사용한다. RIP·OSPF·EIGRP는 AS 내부의 IGP이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "Link State 라우팅 방식의 특징으로 옳은 것은?",
  "c": [
   "이웃에게 자신의 라우팅 테이블 전체를 주기적으로 보낸다",
   "전체 토폴로지 정보를 바탕으로 SPF 알고리즘을 계산한다",
   "Count to Infinity 문제가 대표적 단점이다",
   "경유한 AS 번호 목록으로 루프를 방지한다"
  ],
  "a": 1,
  "e": "Link State는 LSA로 전체 토폴로지 DB를 만든 뒤 Dijkstra(SPF)로 경로를 계산한다. 주기적 테이블 전송·Count to Infinity는 Distance Vector, AS 경로 목록은 Path Vector(BGP)의 특징이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "Distance Vector 라우팅의 루프 문제를 완화하는 기법이 아닌 것은?",
  "c": [
   "Split Horizon",
   "Poison Reverse",
   "Hold-down Timer",
   "Area 분할"
  ],
  "a": 3,
  "e": "Split Horizon·Poison Reverse·Hold-down은 Count to Infinity 완화 기법이다. Area 분할은 OSPF의 계층 구조 설계 방식이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 1,
  "q": "OSPF에서 모든 영역이 반드시 연결되어야 하는 백본 영역의 번호는?",
  "c": [
   "Area 0",
   "Area 1",
   "Area 255",
   "Area 100"
  ],
  "a": 0,
  "e": "OSPF는 계층형 구조로 모든 Area가 백본인 Area 0에 연결되어야 한다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 3,
  "q": "OSPF 기준 대역폭이 100Mbps일 때, 10Mbps 링크 1개와 100Mbps 링크 2개를 거치는 경로의 총 Cost는?",
  "c": [
   "3",
   "21",
   "12",
   "111"
  ],
  "a": 2,
  "e": "Cost = 100Mbps ÷ 링크 대역폭. 10Mbps 링크 = 10, 100Mbps 링크 = 1씩 2개 = 2, 합계 12이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "URL·쿠키 등 애플리케이션 계층 정보를 기반으로 트래픽을 분산하는 장비는?",
  "c": [
   "L4 스위치",
   "L2 스위치",
   "리피터",
   "L7 스위치"
  ],
  "a": 3,
  "e": "L7 스위치는 HTTP URL·쿠키·콘텐츠를 보고 분산하며 SSL Offloading도 수행한다. L4 스위치는 TCP/UDP 포트 기반, L2 스위치는 MAC 기반, 리피터는 신호 증폭 장치이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 3,
  "q": "라우터 R1에 이더넷 인터페이스 3개가 각각 L2 스위치(VLAN 미설정)에 연결되어 있을 때 전체 브로드캐스트 도메인 수는?",
  "c": [
   "1개",
   "6개",
   "3개",
   "스위치 포트 수와 같다"
  ],
  "a": 2,
  "e": "라우터는 인터페이스마다 브로드캐스트 도메인을 분리하므로 3개이다. 스위치는 브로드캐스트 도메인을 나누지 않는다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 1,
  "q": "통신 시작 전에 전용 경로를 설정하고 통신이 끝날 때까지 독점하는 교환 방식은?",
  "c": [
   "메시지 교환",
   "회선 교환",
   "패킷 교환",
   "셀 교환"
  ],
  "a": 1,
  "e": "회선 교환은 호 설정 후 전용 경로를 독점한다(PSTN). 메시지·패킷 교환은 축적 후 전달 방식으로 회선을 공유하며, 셀 교환은 고정 길이 셀을 교환한다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 1,
  "q": "ATM 셀의 크기로 옳은 것은?",
  "c": [
   "53바이트",
   "48바이트",
   "64바이트",
   "1,500바이트"
  ],
  "a": 0,
  "e": "ATM 셀은 헤더 5바이트 + 정보 48바이트 = 53바이트 고정 길이이다. 64바이트는 이더넷 최소 프레임, 1,500바이트는 이더넷 MTU이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "메시지 교환 방식의 특징으로 옳은 것은?",
  "c": [
   "전용 경로를 독점하므로 실시간 대화에 적합하다",
   "53바이트 고정 셀 단위로 교환한다",
   "메시지 전체를 교환기에 저장했다가 전달하므로 지연이 크다",
   "통신 중 회선이 다른 사용자와 공유되지 않는다"
  ],
  "a": 2,
  "e": "메시지 교환은 메시지 단위 Store-and-Forward로 회선 효율은 높지만 지연이 크다. 실시간·독점은 회선 교환, 고정 셀은 ATM의 특징이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "데이터그램 방식 패킷 교환의 특징으로 옳은 것은?",
  "c": [
   "패킷마다 독립적으로 경로가 결정되어 순서가 바뀔 수 있다",
   "논리적 연결을 먼저 설정한 후 같은 경로로 전송한다",
   "패킷 도착 순서가 항상 보장된다",
   "호 설정 단계에서 대역폭을 독점 예약한다"
  ],
  "a": 0,
  "e": "데이터그램은 비연결형으로 패킷별 경로가 달라 순서가 뒤바뀔 수 있으며 수신 측에서 재조립한다. 연결 설정·순서 보장은 가상 회선 방식의 특징이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "가상 회선(Virtual Circuit) 방식을 사용하는 대표적인 망은?",
  "c": [
   "IP·UDP",
   "이더넷 허브망",
   "FDM 반송 전화망",
   "X.25·Frame Relay"
  ],
  "a": 3,
  "e": "X.25·Frame Relay·ATM은 논리적 연결을 설정하는 가상 회선 방식이다. IP·UDP는 데이터그램(비연결) 방식이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "ATM 셀 헤더에서 가상 경로와 가상 채널을 식별하는 필드는?",
  "c": [
   "DLCI·FECN",
   "VPI·VCI",
   "TTL·Protocol",
   "VLAN ID·PCP"
  ],
  "a": 1,
  "e": "ATM은 VPI(Virtual Path Identifier)·VCI(Virtual Channel Identifier)로 연결을 식별한다. DLCI는 Frame Relay, TTL·Protocol은 IP 헤더, VLAN ID·PCP는 802.1Q 태그 필드이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 3,
  "q": "ATM 셀에서 헤더가 차지하는 오버헤드 비율에 가장 가까운 값은?",
  "c": [
   "약 5.0%",
   "약 9.4%",
   "약 10.4%",
   "약 3.1%"
  ],
  "a": 1,
  "e": "헤더 5바이트 ÷ 셀 53바이트 ≈ 0.0943 → 약 9.4%이다. 5÷48(약 10.4%)로 계산하는 실수에 주의한다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 3,
  "q": "1,500바이트 패킷을 10Mbps 링크 3개(중간 라우터 2대)를 거쳐 축적 후 전달 방식으로 보낼 때 전파·처리 지연을 무시한 총 전송 지연은?",
  "c": [
   "1.2ms",
   "0.36ms",
   "12ms",
   "3.6ms"
  ],
  "a": 3,
  "e": "링크당 전송 지연 = 1,500×8비트 ÷ 10×10^6bps = 1.2ms. 각 라우터에서 전체를 수신 후 다시 전송하므로 3개 링크 × 1.2ms = 3.6ms이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 3,
  "q": "음성 통화처럼 지연이 일정해야 하는 실시간 서비스와 버스트성 데이터 서비스를 비교할 때 옳은 판단은?",
  "c": [
   "실시간 음성은 회선 교환, 버스트 데이터는 패킷 교환이 효율적이다",
   "실시간 음성은 메시지 교환, 버스트 데이터는 회선 교환이 효율적이다",
   "두 서비스 모두 메시지 교환이 가장 효율적이다",
   "버스트 데이터는 전용 경로를 독점해야 효율이 높다"
  ],
  "a": 0,
  "e": "회선 교환은 고정 지연·대역 보장으로 실시간에 유리하고, 패킷 교환은 유휴 시간에 회선을 공유해 버스트 데이터에 효율적이다. 메시지 교환은 지연이 커서 실시간에 부적합하다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 1,
  "q": "IETF가 표준화한 텍스트 기반의 VoIP 세션 제어 프로토콜은?",
  "c": [
   "H.323",
   "H.248",
   "SIP",
   "SS7"
  ],
  "a": 2,
  "e": "SIP는 IETF의 HTTP 유사 텍스트 기반 프로토콜이다. H.323은 ITU-T 바이너리 규격, H.248(Megaco)은 게이트웨이 제어, SS7은 공중망 공통선 신호 방식이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 1,
  "q": "SIP에서 성립된 통화를 종료할 때 사용하는 메서드는?",
  "c": [
   "CANCEL",
   "ACK",
   "REGISTER",
   "BYE"
  ],
  "a": 3,
  "e": "BYE는 성립된 세션을 종료한다. CANCEL은 응답 전 진행 중인 요청 취소, ACK는 최종 응답 확인, REGISTER는 위치 등록이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "H.323 시스템에서 주소 변환·수락 제어·대역폭 관리를 담당하는 구성요소는?",
  "c": [
   "Registrar",
   "Redirect Server",
   "Gatekeeper",
   "User Agent"
  ],
  "a": 2,
  "e": "Gatekeeper는 H.323의 주소 변환·수락 제어 요소이다. Registrar·Redirect Server·User Agent는 SIP 구성요소이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "RTCP의 역할로 옳은 것은?",
  "c": [
   "음성·영상 데이터 자체를 실시간 전송한다",
   "패킷 손실·지터 등 수신 품질 통계를 보고한다",
   "세션을 초대하고 종료한다",
   "미디어를 암호화한다"
  ],
  "a": 1,
  "e": "RTCP는 RTP 세션의 품질 정보를 주기적으로 보고한다. 미디어 전송은 RTP, 세션 제어는 SIP, 암호화는 SRTP의 역할이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "SIP 응답 코드 중 착신 단말이 울리고 있음을 알리는 것은?",
  "c": [
   "180 Ringing",
   "200 OK",
   "404 Not Found",
   "302 Moved Temporarily"
  ],
  "a": 0,
  "e": "180은 1xx 임시 응답의 Ringing이다. 200은 성공, 404는 클라이언트 오류(대상 없음), 302는 재지정 응답이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "SIP 트렁크 경계에서 VoIP 보안·NAT 통과·세션 제어를 수행하는 장비는?",
  "c": [
   "CSU",
   "WLAN 컨트롤러",
   "SBC",
   "L2 스위치"
  ],
  "a": 2,
  "e": "SBC(Session Border Controller)는 VoIP 망 경계의 세션 제어·보안 장비이다. CSU는 디지털 회선 종단, WLAN 컨트롤러는 AP 관리, L2 스위치는 프레임 전달 장비이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 3,
  "q": "ISDN 기본 접속(BRI 2B+D)의 사용자 데이터 전송 속도 합계는?",
  "c": [
   "144kbps",
   "128kbps",
   "192kbps",
   "1.544Mbps"
  ],
  "a": 0,
  "e": "B채널 64kbps × 2 + D채널 16kbps = 144kbps이다. 192kbps는 프레이밍 오버헤드를 포함한 회선 속도, 1.544Mbps는 PRI(T1) 속도이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 3,
  "q": "VoIP 품질 평가에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "지터는 패킷 도착 간격의 변동을 의미한다",
   "ITU-T G.114는 단방향 지연 150ms 이내를 권고한다",
   "패킷 손실은 음성 끊김의 주요 원인이다",
   "MOS는 0~10점 척도의 객관적 측정값이다"
  ],
  "a": 3,
  "e": "MOS(Mean Opinion Score)는 1~5점 척도의 주관적 평가 지표이다. 나머지 설명은 옳다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 1,
  "q": "하드웨어 위에 직접 설치되는 Type 1 하이퍼바이저가 아닌 것은?",
  "c": [
   "VMware ESXi",
   "VirtualBox",
   "Microsoft Hyper-V",
   "Xen"
  ],
  "a": 1,
  "e": "VirtualBox는 호스트 OS 위에서 실행되는 Type 2이다. ESXi·Hyper-V·Xen(그리고 KVM)은 Type 1(Bare Metal) 하이퍼바이저이다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 2,
  "q": "Web 서버와 WAS의 역할 구분으로 옳은 것은?",
  "c": [
   "Web 서버는 DB 질의, WAS는 이미지 전송을 담당한다",
   "Web 서버는 정적 콘텐츠, WAS는 동적 로직을 처리한다",
   "WAS는 DNS 이름 해석을 전담한다",
   "Web 서버와 WAS는 동일 제품만 존재한다"
  ],
  "a": 1,
  "e": "Web 서버(Apache·Nginx)는 정적 HTML·이미지를, WAS(Tomcat·JBoss)는 비즈니스 로직 등 동적 처리를 담당한다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 2,
  "q": "1대가 처리하고 1대는 대기하다가 장애 시 넘겨받는 클러스터 구성은?",
  "c": [
   "Active-Active",
   "HPC 클러스터",
   "RAID 0",
   "Active-Standby"
  ],
  "a": 3,
  "e": "Active-Standby는 대기 노드가 장애 시 Failover한다. Active-Active는 모든 노드가 동시 처리, HPC는 병렬 계산용, RAID 0은 스토리지 구성이다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 3,
  "q": "MTBF가 990시간, MTTR이 10시간인 시스템의 가용도는?",
  "c": [
   "99%",
   "99.9%",
   "98%",
   "99.99%"
  ],
  "a": 0,
  "e": "가용도 = MTBF ÷ (MTBF + MTTR) = 990 ÷ 1,000 = 0.99 = 99%이다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 3,
  "q": "가용성 99.999%(Five Nines) 시스템의 연간 허용 중단 시간에 가장 가까운 것은?",
  "c": [
   "약 52.6분",
   "약 8.8시간",
   "약 5.3분",
   "약 32초"
  ],
  "a": 2,
  "e": "1년 525,600분 × 0.00001 = 약 5.26분이다. 52.6분은 99.99%, 8.76시간은 99.9%, 약 31.5초는 99.9999%에 해당한다."
 },
 {
  "s": "s2",
  "t": "스토리지·RAID",
  "d": 1,
  "q": "NAS에서 파일 공유에 사용하는 프로토콜이 아닌 것은?",
  "c": [
   "NFS",
   "SMB/CIFS",
   "AFP",
   "Fibre Channel"
  ],
  "a": 3,
  "e": "Fibre Channel은 SAN의 블록 전송 프로토콜이다. NFS·SMB/CIFS·AFP는 NAS의 파일 단위 공유 프로토콜이다."
 },
 {
  "s": "s2",
  "t": "스토리지·RAID",
  "d": 2,
  "q": "분산 패리티를 사용해 디스크 1개 고장까지 복구 가능하며 최소 3개 디스크가 필요한 RAID 레벨은?",
  "c": [
   "RAID 0",
   "RAID 1",
   "RAID 5",
   "RAID 6"
  ],
  "a": 2,
  "e": "RAID 5는 블록 단위 분산 패리티로 1개 고장을 허용한다. RAID 0은 중복 없음, RAID 1은 미러링, RAID 6은 이중 패리티(최소 4개·2개 고장 허용)이다."
 },
 {
  "s": "s2",
  "t": "스토리지·RAID",
  "d": 3,
  "q": "2TB 디스크 6개로 RAID 6을 구성할 때 사용 가능한 용량은?",
  "c": [
   "10TB",
   "8TB",
   "6TB",
   "12TB"
  ],
  "a": 1,
  "e": "RAID 6 용량 = (N-2) × C = (6-2) × 2TB = 8TB. 10TB는 RAID 5, 6TB는 RAID 10, 12TB는 RAID 0의 용량이다."
 },
 {
  "s": "s2",
  "t": "스토리지·RAID",
  "d": 2,
  "q": "iSCSI에 대한 설명으로 옳은 것은?",
  "c": [
   "TCP/IP 망으로 SCSI 블록 명령을 전달하는 SAN 프로토콜이다",
   "IP 망으로 파일 단위 공유를 제공하는 NAS 프로토콜이다",
   "서버 내부에 디스크를 직결하는 DAS 인터페이스이다",
   "객체 단위 HTTP API를 제공하는 클라우드 스토리지이다"
  ],
  "a": 0,
  "e": "iSCSI는 IP 망을 쓰지만 블록 단위 접근이므로 SAN 계열이다. 파일 단위는 NAS(NFS·SMB), 객체 HTTP API는 S3 등 Object Storage이다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 1,
  "q": "OSI 7계층 중 경로 선택(라우팅)과 논리 주소 지정을 담당하는 계층의 대표 장비는?",
  "c": [
   "라우터",
   "리피터",
   "브리지",
   "허브"
  ],
  "a": 0,
  "e": "라우팅·IP 주소는 3계층(네트워크) 기능으로 라우터가 담당한다. 리피터·허브는 1계층, 브리지는 2계층 장비다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 1,
  "q": "OSI 전송 계층(L4)에서 사용하는 데이터 단위(PDU)는?",
  "c": [
   "프레임(Frame)",
   "패킷(Packet)",
   "비트(Bit)",
   "세그먼트(Segment)"
  ],
  "a": 3,
  "e": "L4 세그먼트, L3 패킷, L2 프레임, L1 비트다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 2,
  "q": "TCP/IP 4계층 모델에서 OSI의 세션·표현·응용 계층을 모두 포괄하는 계층은?",
  "c": [
   "전송 계층",
   "응용 계층",
   "인터넷 계층",
   "네트워크 접근 계층"
  ],
  "a": 1,
  "e": "TCP/IP 응용 계층이 OSI L5~L7을 포괄한다. 전송=L4, 인터넷=L3, 네트워크 접근=L1~L2."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 2,
  "q": "OSI 표현 계층(L6)의 기능으로 가장 적절한 것은?",
  "c": [
   "데이터 코드 변환·암호화·압축",
   "종단 간 오류 복구·흐름 제어",
   "논리 주소 기반 경로 결정",
   "프레임 동기와 MAC 주소 지정"
  ],
  "a": 0,
  "e": "표현 계층은 데이터 형식 변환(ASCII·JPEG)·암호화·압축을 담당한다. 흐름 제어는 L4, 경로 결정은 L3, 프레임·MAC은 L2 기능이다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 3,
  "q": "캡슐화 과정에서 헤더뿐 아니라 오류 검출용 트레일러(FCS)까지 붙이는 계층은?",
  "c": [
   "네트워크 계층",
   "전송 계층",
   "데이터링크 계층",
   "물리 계층"
  ],
  "a": 2,
  "e": "데이터링크 계층은 프레임 끝에 CRC-32 기반 FCS 트레일러를 붙인다. 네트워크·전송 계층은 헤더만 추가하고, 물리 계층은 비트 신호로 변환한다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 3,
  "q": "다음 계층과 프로토콜의 연결 중 옳지 않은 것은?",
  "c": [
   "TCP — 전송 계층",
   "ICMP — 네트워크 계층",
   "HDLC — 데이터링크 계층",
   "SMTP — 전송 계층"
  ],
  "a": 3,
  "e": "SMTP는 메일 송신용 응용 계층 프로토콜로 TCP 25번 포트를 사용한다. 나머지 연결은 모두 옳다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 1,
  "q": "UDP 헤더의 크기는?",
  "c": [
   "12바이트",
   "20바이트",
   "40바이트",
   "8바이트"
  ],
  "a": 3,
  "e": "UDP 헤더는 출발·목적 포트, 길이, 체크섬 각 2바이트로 8바이트다. 20바이트는 TCP·IPv4 기본 헤더, 40바이트는 IPv6 기본 헤더다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 1,
  "q": "TCP 3-way Handshake에서 클라이언트가 가장 먼저 보내는 세그먼트는?",
  "c": [
   "SYN",
   "FIN",
   "SYN-ACK",
   "RST"
  ],
  "a": 0,
  "e": "SYN → SYN-ACK → ACK 순이다. FIN은 종료, RST는 강제 재설정, SYN-ACK는 서버의 응답이다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "클라이언트가 seq=1000으로 SYN을 보내고 서버가 seq=5000으로 SYN-ACK를 응답했다. 서버 SYN-ACK의 ack 값과 클라이언트 최종 ACK의 ack 값은?",
  "c": [
   "1000, 5000",
   "1001, 5001",
   "1001, 5000",
   "5001, 1001"
  ],
  "a": 1,
  "e": "ack는 다음에 받기를 기대하는 순서번호로 상대 seq+1이다. 서버는 ack=1001, 클라이언트는 ack=5001을 보낸다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "다음 중 일반적으로 UDP를 사용하지 않는 응용은?",
  "c": [
   "DNS 질의",
   "DHCP 주소 할당",
   "SSH 원격 접속",
   "VoIP 음성 전송"
  ],
  "a": 2,
  "e": "SSH는 신뢰성이 필요한 TCP 22번을 사용한다. DNS 질의·DHCP·VoIP는 UDP 기반이다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "TCP 헤더 플래그 중 비정상 상황에서 연결을 즉시 강제로 끊을 때 사용하는 것은?",
  "c": [
   "PSH",
   "RST",
   "URG",
   "FIN"
  ],
  "a": 1,
  "e": "RST는 연결을 강제 재설정(중단)한다. FIN은 정상 종료, PSH는 버퍼링 없이 즉시 전달, URG는 긴급 데이터 표시다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 3,
  "q": "TCP 송신 측이 같은 번호의 중복 ACK를 3개 연속 수신했을 때 수행하는 동작은?",
  "c": [
   "혼잡 윈도를 1 MSS로 줄이고 Slow Start 재시작",
   "수신 윈도를 0으로 설정하고 전송 중지",
   "연결을 RST로 끊고 3-way 재수행",
   "타임아웃을 기다리지 않고 해당 세그먼트 즉시 재전송"
  ],
  "a": 3,
  "e": "중복 ACK 3개는 손실 신호로 보고 Fast Retransmit을 수행한다(이후 Fast Recovery). cwnd를 1 MSS로 줄이는 것은 타임아웃일 때다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 3,
  "q": "TCP 수신 윈도가 50,000바이트이고 RTT가 40ms일 때 혼잡이 없다고 가정한 이론상 최대 처리율은?",
  "c": [
   "10Mbps",
   "1.25Mbps",
   "20Mbps",
   "100Mbps"
  ],
  "a": 0,
  "e": "처리율 = 윈도 ÷ RTT = 50,000×8bit ÷ 0.04s = 10,000,000bps = 10Mbps. 1.25는 MB/s 값을 Mbps로 혼동한 수치다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "QUIC 프로토콜에 대한 설명으로 옳은 것은?",
  "c": [
   "TCP 위에서 동작하는 세션 계층 프로토콜이다",
   "UDP 위에서 동작하며 HTTP/3의 전송 기반이다",
   "멀티호밍을 위해 IETF가 만든 SCTP의 별칭이다",
   "암호화를 지원하지 않아 TLS를 별도로 붙인다"
  ],
  "a": 1,
  "e": "QUIC는 Google이 제안한 UDP 기반 전송 프로토콜로 TLS 1.3을 내장하고 HTTP/3에 쓰인다. 멀티호밍은 SCTP의 특징이다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 1,
  "q": "서브넷 마스크 /27에서 사용 가능한 호스트 수는?",
  "c": [
   "30",
   "32",
   "62",
   "14"
  ],
  "a": 0,
  "e": "2^(32-27) − 2 = 32 − 2 = 30. 32는 주소 수, 62는 /26, 14는 /28의 호스트 수다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "호스트 192.168.10.77/26이 속한 네트워크 주소는?",
  "c": [
   "192.168.10.0",
   "192.168.10.72",
   "192.168.10.64",
   "192.168.10.128"
  ],
  "a": 2,
  "e": "/26의 블록 크기는 64(0, 64, 128, 192). 77은 64~127 블록이므로 네트워크 주소는 .64, 브로드캐스트는 .127이다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "172.16.5.130/25의 브로드캐스트 주소는?",
  "c": [
   "172.16.5.255",
   "172.16.5.127",
   "172.16.5.128",
   "172.16.255.255"
  ],
  "a": 0,
  "e": "/25 블록 크기 128 → 130은 128~255 블록. 브로드캐스트는 블록의 마지막 주소 .255다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "한 서브넷에 호스트 50대를 수용하면서 주소 낭비를 최소화하는 프리픽스는?",
  "c": [
   "/27",
   "/25",
   "/26",
   "/28"
  ],
  "a": 2,
  "e": "/26은 62대, /27은 30대로 부족하다. /25(126대)는 가능하지만 낭비가 크다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 3,
  "q": "172.16.0.0/16을 /20 서브넷으로 나눌 때 서브넷 개수와 서브넷당 호스트 수는?",
  "c": [
   "16개, 4,096대",
   "4개, 16,382대",
   "16개, 4,094대",
   "32개, 2,046대"
  ],
  "a": 2,
  "e": "빌린 비트 4 → 2^4 = 16개, 호스트 비트 12 → 2^12 − 2 = 4,094대. 4,096은 주소 수이고 −2를 빠뜨린 값이다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 3,
  "q": "192.168.4.0/24, 192.168.5.0/24, 192.168.6.0/24, 192.168.7.0/24를 하나로 요약(CIDR)한 경로는?",
  "c": [
   "192.168.4.0/23",
   "192.168.4.0/22",
   "192.168.0.0/21",
   "192.168.4.0/24"
  ],
  "a": 1,
  "e": "3번째 옥텟 4~7(00000100~00000111)은 상위 6비트가 같아 8+8+6 = 22비트 공통 → 192.168.4.0/22. /21은 0~7을 포함해 과도 요약된다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 1,
  "q": "다음 중 사설(Private) IPv4 주소는?",
  "c": [
   "172.32.0.1",
   "172.20.1.1",
   "192.169.1.1",
   "11.0.0.1"
  ],
  "a": 1,
  "e": "사설 대역은 10/8, 172.16.0.0/12(172.16~172.31), 192.168/16이다. 172.20은 범위 안, 172.32·192.169·11은 공인 주소다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "프리픽스 /21에 해당하는 서브넷 마스크는?",
  "c": [
   "255.255.240.0",
   "255.255.248.0",
   "255.255.252.0",
   "255.255.255.248"
  ],
  "a": 1,
  "e": "/21 = 8+8+5 → 3번째 옥텟 11111000 = 248. 240은 /20, 252는 /22, 255.255.255.248은 /29다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 3,
  "q": "전체 길이 4,000바이트(헤더 20바이트)인 IPv4 데이터그램이 MTU 1,500바이트 링크를 지날 때 세 번째 조각의 Fragment Offset 값은?",
  "c": [
   "2960",
   "370",
   "185",
   "1480"
  ],
  "a": 1,
  "e": "조각당 데이터는 1,480바이트(8의 배수). 데이터 3,980바이트 → 1,480/1,480/1,020. 세 번째 조각 시작 위치 2,960바이트 ÷ 8 = 370(오프셋은 8바이트 단위)."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "공유기가 내부 여러 사설 IP를 하나의 공인 IP와 서로 다른 포트 번호로 변환하는 방식은?",
  "c": [
   "Static NAT",
   "Dynamic NAT",
   "APIPA",
   "PAT(NAPT)"
  ],
  "a": 3,
  "e": "포트 번호까지 변환해 N:1 공유하는 것이 PAT다. Static은 1:1 고정, Dynamic은 주소 풀 1:1, APIPA는 DHCP 실패 시 169.254 자동 할당이다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 1,
  "q": "IEEE 802.3 Ethernet이 사용하는 매체 접근 제어 방식은?",
  "c": [
   "CSMA/CA",
   "CSMA/CD",
   "토큰 패싱",
   "TDMA"
  ],
  "a": 1,
  "e": "유선 Ethernet은 충돌 감지 방식 CSMA/CD다. CSMA/CA는 무선LAN, 토큰 패싱은 802.4·802.5다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 1,
  "q": "MAC 주소의 길이와 제조사 식별자(OUI)의 길이는?",
  "c": [
   "48bit, 24bit",
   "32bit, 16bit",
   "48bit, 16bit",
   "64bit, 24bit"
  ],
  "a": 0,
  "e": "MAC 주소는 48bit이며 상위 24bit OUI + 하위 24bit 일련번호로 구성된다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "Ethernet 프레임에서 프리앰블·SFD를 제외한 최소 프레임 길이는?",
  "c": [
   "46바이트",
   "72바이트",
   "64바이트",
   "60바이트"
  ],
  "a": 2,
  "e": "MAC 6+6 + Type 2 + 최소 데이터 46 + FCS 4 = 64바이트. 46은 최소 데이터 길이, 72는 프리앰블·SFD 8바이트를 더한 값이다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "노드 6개를 완전 메시(Full Mesh)로 연결할 때 필요한 링크 수는?",
  "c": [
   "30",
   "12",
   "15",
   "36"
  ],
  "a": 2,
  "e": "링크 수 = n(n−1)/2 = 6×5/2 = 15. 30은 2로 나누지 않은 값이다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "ISDN 기본 접속(BRI, 2B+D)의 총 전송 속도는?",
  "c": [
   "144kbps",
   "128kbps",
   "192kbps",
   "64kbps"
  ],
  "a": 0,
  "e": "B채널 64kbps×2 + D채널 16kbps = 144kbps. 128kbps는 B채널 2개만 합한 값이다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 3,
  "q": "1,500바이트 프레임을 100Mbps 링크로 송출할 때의 전송 지연(Transmission Delay)은?",
  "c": [
   "15μs",
   "1.2ms",
   "120μs",
   "12μs"
  ],
  "a": 2,
  "e": "전송 지연 = L/R = 1,500×8bit ÷ 100×10^6bps = 12,000 ÷ 10^8 = 1.2×10^-4s = 120μs."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 3,
  "q": "MPLS에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "짧은 라벨로 고속 스위칭하여 L2.5로 불린다",
   "망 경계의 LER이 라벨을 부착·제거한다",
   "라벨 경로 LSP를 따라 코어 LSR이 전달한다",
   "IP 헤더 전체를 매 홉 조회해 경로를 결정한다"
  ],
  "a": 3,
  "e": "MPLS는 매 홉 IP 라우팅 테이블 조회 대신 라벨만 보고 스위칭하는 것이 핵심이다. 나머지는 옳은 설명이다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 1,
  "q": "DNS가 일반 이름 질의에 사용하는 기본 포트는?",
  "c": [
   "TCP 25",
   "UDP 67",
   "TCP 110",
   "UDP 53"
  ],
  "a": 3,
  "e": "DNS 질의는 UDP 53(영역 전송은 TCP 53). 25는 SMTP, 67은 DHCP 서버, 110은 POP3다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 1,
  "q": "DHCP DORA 과정에서 서버가 클라이언트에게 사용 가능한 IP를 제안하는 메시지는?",
  "c": [
   "Discover",
   "Request",
   "Acknowledge",
   "Offer"
  ],
  "a": 3,
  "e": "Discover(클라이언트 탐색) → Offer(서버 제안) → Request(클라이언트 요청) → Acknowledge(서버 확정)."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 2,
  "q": "메일을 서버에 보관한 채 여러 단말에서 읽음 상태 등을 동기화하는 수신 프로토콜과 포트는?",
  "c": [
   "POP3, 110",
   "SMTP, 25",
   "SNMP, 161",
   "IMAP, 143"
  ],
  "a": 3,
  "e": "IMAP(143)은 서버 동기화 방식이다. POP3(110)는 내려받기 방식, SMTP는 송신, SNMP는 망 관리다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 2,
  "q": "FTP에 대한 설명으로 옳은 것은?",
  "c": [
   "UDP 69번으로 인증 없이 파일을 전송한다",
   "SSH 위에서 22번 포트로 암호화 전송한다",
   "TCP 21번은 제어, 20번은 데이터 전송에 쓴다",
   "TCP 20번은 제어, 21번은 데이터 전송에 쓴다"
  ],
  "a": 2,
  "e": "FTP는 TCP 21 제어·20 데이터. UDP 69는 TFTP, SSH 22 기반은 SFTP다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 2,
  "q": "HTTP/2의 특징이 아닌 것은?",
  "c": [
   "단일 연결 멀티플렉싱",
   "UDP 기반 QUIC 전송",
   "HPACK 헤더 압축",
   "서버 푸시"
  ],
  "a": 1,
  "e": "QUIC(UDP)는 HTTP/3의 특징이다. HTTP/2는 TCP 위에서 멀티플렉싱·HPACK·서버 푸시를 제공한다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 3,
  "q": "프로토콜과 포트 번호의 연결이 옳지 않은 것은?",
  "c": [
   "NTP — 123",
   "Telnet — 23",
   "IMAP — 110",
   "SNMP Trap — 162"
  ],
  "a": 2,
  "e": "IMAP은 143, 110은 POP3다. NTP 123, Telnet 23, SNMP Trap 162는 옳다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 1,
  "q": "Telnet의 평문 전송 취약점을 보완하기 위해 쓰는 암호화 원격 접속 프로토콜은?",
  "c": [
   "SNMP",
   "TFTP",
   "SMTP",
   "SSH"
  ],
  "a": 3,
  "e": "SSH(TCP 22)는 암호화된 원격 접속을 제공한다. 나머지는 원격 접속 프로토콜이 아니다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 1,
  "q": "5G 서비스 시나리오 중 자율주행·원격수술처럼 1ms급 지연과 고신뢰가 필요한 것은?",
  "c": [
   "URLLC",
   "eMBB",
   "mMTC",
   "NB-IoT"
  ],
  "a": 0,
  "e": "URLLC는 초고신뢰·초저지연 시나리오다. eMBB는 초광대역, mMTC는 대규모 IoT, NB-IoT는 LPWAN 기술이다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 2,
  "q": "LTE의 하향·상향 다중접속 방식을 순서대로 옳게 나타낸 것은?",
  "c": [
   "SC-FDMA, OFDMA",
   "CDMA, TDMA",
   "OFDMA, SC-FDMA",
   "OFDMA, CDMA"
  ],
  "a": 2,
  "e": "하향은 OFDMA, 상향은 PAPR이 낮아 단말 배터리에 유리한 SC-FDMA를 쓴다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 2,
  "q": "LTE EPC 구성 요소 중 단말의 이동성 관리와 세션 제어(시그널링)를 담당하는 것은?",
  "c": [
   "MME",
   "S-GW",
   "P-GW",
   "HSS"
  ],
  "a": 0,
  "e": "MME는 제어 평면의 이동성·세션 관리, S-GW는 사용자 데이터 중계, P-GW는 외부망 연결·IP 할당, HSS는 가입자 DB다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 1,
  "q": "2세대(2G) 이동통신의 대표 기술은?",
  "c": [
   "AMPS",
   "WCDMA",
   "LTE",
   "GSM·CDMA"
  ],
  "a": 3,
  "e": "2G는 GSM·CDMA 디지털 방식이다. AMPS는 1G, WCDMA는 3G, LTE는 4G다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 2,
  "q": "하나의 물리적 5G 망을 서비스 요구별로 독립된 여러 가상 망으로 나누어 제공하는 기술은?",
  "c": [
   "캐리어 어그리게이션",
   "네트워크 슬라이싱",
   "빔포밍",
   "핸드오버"
  ],
  "a": 1,
  "e": "네트워크 슬라이싱은 SDN·NFV 기반으로 논리적 가상망을 분리한다. CA는 주파수 묶음, 빔포밍은 전파 집중, 핸드오버는 기지국 전환이다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 3,
  "q": "5G mmWave(예 28GHz) 대역에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "넓은 대역폭으로 고용량 전송이 가능하다",
   "경로 손실이 커 셀 반경이 작다",
   "감쇠 보상을 위해 빔포밍을 활용한다",
   "회절이 잘 되어 건물 뒤까지 넓게 도달한다"
  ],
  "a": 3,
  "e": "주파수가 높을수록 직진성이 강하고 회절·투과가 약하다. 따라서 장애물 뒤 도달성이 떨어지고 소형 셀·빔포밍이 필요하다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 1,
  "q": "무선LAN(802.11)이 사용하는 매체 접근 제어 방식은?",
  "c": [
   "CSMA/CA",
   "CSMA/CD",
   "토큰 링",
   "ALOHA"
  ],
  "a": 0,
  "e": "무선LAN은 송신 중 충돌 감지가 어려워 충돌 회피 방식 CSMA/CA를 쓴다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 2,
  "q": "Wi-Fi 6에 해당하는 IEEE 표준은?",
  "c": [
   "802.11ax",
   "802.11ac",
   "802.11n",
   "802.11be"
  ],
  "a": 0,
  "e": "Wi-Fi 4=n, 5=ac, 6/6E=ax, 7=be다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 2,
  "q": "2.4GHz 대역에서 최대 11Mbps를 제공한 무선LAN 표준은?",
  "c": [
   "802.11a",
   "802.11g",
   "802.11n",
   "802.11b"
  ],
  "a": 3,
  "e": "802.11b는 2.4GHz·11Mbps다. 802.11a는 5GHz·54Mbps, 802.11g는 2.4GHz·54Mbps, 802.11n은 최대 600Mbps다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 3,
  "q": "고도 36,000km 정지궤도 위성까지 전파가 지상에서 올라가는 편도 전파 지연은 약 얼마인가? (전파 속도 3×10^8m/s)",
  "c": [
   "12ms",
   "240ms",
   "1.2ms",
   "120ms"
  ],
  "a": 3,
  "e": "지연 = 거리/속도 = 3.6×10^7m ÷ 3×10^8m/s = 0.12s = 120ms. 지상→위성→지상은 약 240ms다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 2,
  "q": "WPA3에서 사전 공유키(PSK) 방식을 대체해 오프라인 사전 대입 공격을 어렵게 한 인증 방식은?",
  "c": [
   "TKIP",
   "WEP",
   "CCMP",
   "SAE"
  ],
  "a": 3,
  "e": "WPA3-Personal은 SAE(Dragonfly 핸드셰이크)를 쓴다. TKIP는 WPA, CCMP는 WPA2 암호화 프로토콜, WEP는 취약한 구식 방식이다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 1,
  "q": "13.56MHz 대역을 사용하며 약 10cm 이내 근접 통신에 쓰이는 기술은?",
  "c": [
   "UWB",
   "NFC",
   "Zigbee",
   "LoRa"
  ],
  "a": 1,
  "e": "NFC는 13.56MHz·약 10cm 근접 통신이다. UWB는 정밀 측위, Zigbee는 802.15.4 메시, LoRa는 LPWAN이다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 3,
  "q": "무선LAN에서 RTS/CTS 교환을 사용하는 주된 목적은?",
  "c": [
   "전송 데이터의 암호화",
   "채널 대역폭의 확장",
   "숨은 노드(Hidden Node) 문제 완화",
   "IP 주소의 자동 할당"
  ],
  "a": 2,
  "e": "서로 신호가 닿지 않는 단말이 AP에 동시 전송하는 숨은 노드 충돌을 RTS/CTS로 채널을 예약해 줄인다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 1,
  "q": "IPv6 주소의 길이는?",
  "c": [
   "32bit",
   "128bit",
   "64bit",
   "48bit"
  ],
  "a": 1,
  "e": "IPv6는 128bit(16bit×8그룹), IPv4는 32bit, MAC은 48bit다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "2001:0db8:0000:0000:0000:0000:0000:0001을 올바르게 축약한 표기는?",
  "c": [
   "2001::db8::1",
   "2001:db8:1",
   "2001:db8::1",
   "2001:db8::::1"
  ],
  "a": 2,
  "e": "앞자리 0을 생략하고 연속된 0 그룹을 ::로 한 번만 줄인다. ::를 두 번 쓰거나 그룹 수가 모자라면 잘못된 표기다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "IPv4 헤더에는 있으나 IPv6 기본 헤더에서 제거된 필드는?",
  "c": [
   "Hop Limit",
   "헤더 체크섬",
   "Flow Label",
   "Next Header"
  ],
  "a": 1,
  "e": "IPv6는 라우터 부담을 줄이려 헤더 체크섬을 없앴다. Hop Limit(TTL 대체)·Flow Label·Next Header는 IPv6 헤더 필드다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 3,
  "q": "MAC 주소 00-1A-2B-3C-4D-5E로 EUI-64 방식 인터페이스 ID를 만들면?",
  "c": [
   "001A:2BFF:FE3C:4D5E",
   "021A:2BFF:FE3C:4D5E",
   "021A:2BFE:FF3C:4D5E",
   "001A:2BFE:FF3C:4D5E"
  ],
  "a": 1,
  "e": "MAC을 반으로 나눠 가운데 FFFE를 삽입하고, 첫 바이트의 7번째 비트(U/L)를 반전한다. 00 → 02이므로 021A:2BFF:FE3C:4D5E."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "IPv6에서 ARP를 대체해 이웃 주소 확인·라우터 탐색을 수행하는 프로토콜은?",
  "c": [
   "NDP(ICMPv6 기반)",
   "RARP",
   "IGMP",
   "DHCPv4"
  ],
  "a": 0,
  "e": "NDP는 ICMPv6의 RS·RA·NS·NA·Redirect 메시지로 ARP와 라우터 탐색을 대체한다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 1,
  "q": "음성 패킷 도착 시간 간격이 일정하지 않고 변동하는 정도를 뜻하는 QoS 지표는?",
  "c": [
   "처리율(Throughput)",
   "패킷 손실률",
   "지터(Jitter)",
   "대역폭"
  ],
  "a": 2,
  "e": "지터는 지연의 변동(편차)으로 음성·영상 품질에 직접 영향을 준다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "DiffServ에서 패킷 클래스를 표시하는 DSCP 필드의 비트 수와 표현 가능한 코드 수는?",
  "c": [
   "6bit, 64개",
   "3bit, 8개",
   "8bit, 256개",
   "4bit, 16개"
  ],
  "a": 0,
  "e": "DSCP는 ToS/Traffic Class 8bit 중 상위 6bit로 2^6 = 64개 코드다. 3bit·8개는 구 IP Precedence다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 3,
  "q": "QoS 메커니즘 중 WRED의 주된 목적은?",
  "c": [
   "음성 트래픽을 위한 엄격한 우선순위 큐 제공",
   "초과 트래픽을 버퍼에 저장했다가 일정 속도로 송출",
   "큐가 가득 차기 전에 무작위로 폐기해 TCP 전역 동기화 방지",
   "흐름별로 RSVP를 이용한 자원 예약 수행"
  ],
  "a": 2,
  "e": "WRED는 큐 길이에 따라 가중치 기반 무작위 조기 폐기로 Tail Drop에 의한 TCP 전역 동기화를 막는다. 우선순위 큐는 LLQ, 버퍼링 송출은 Shaping, RSVP 예약은 IntServ다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 3,
  "q": "SDN 구조에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "OpenFlow는 컨트롤러와 응용 사이의 북향(Northbound) API다",
   "제어 평면을 데이터 평면에서 분리해 중앙 컨트롤러가 담당한다",
   "OpenDaylight·ONOS는 대표적 SDN 컨트롤러다",
   "데이터 평면 스위치는 플로 테이블에 따라 패킷을 전달한다"
  ],
  "a": 0,
  "e": "OpenFlow는 컨트롤러와 스위치 사이의 남향(Southbound) 인터페이스다. 북향 API는 주로 REST로 응용과 연결된다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 1,
  "q": "ITIL에 대한 설명으로 옳은 것은?",
  "c": [
   "미국 NIST가 제정한 정보보호 관리체계 인증 기준",
   "ISO가 제정한 소프트웨어 품질 평가 모델",
   "IEEE가 정의한 네트워크 관리 프로토콜 규격",
   "영국 정부 기관(CCTA→OGC)이 정리한 IT 서비스 관리 모범사례 체계"
  ],
  "a": 3,
  "e": "ITIL은 영국 정부 기관이 정리한 ITSM 모범사례다. 정보보호 인증 기준·소프트웨어 품질 모델·관리 프로토콜은 ITIL과 무관한 다른 표준을 설명한 것이다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 2,
  "q": "ITIL 변경 관리(Change Management)에서 변경 요청의 위험·영향을 검토해 승인 여부를 자문하는 기구는?",
  "c": [
   "CSI(Continual Service Improvement)",
   "SVC(Service Value Chain)",
   "CMDB(Configuration Management Database)",
   "CAB(Change Advisory Board)"
  ],
  "a": 3,
  "e": "변경 승인을 자문하는 위원회는 CAB다. CSI는 지속적 개선 단계, SVC는 ITIL 4 가치 사슬, CMDB는 구성항목 저장소로 승인 기구가 아니다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 2,
  "q": "IT 서비스 조직이 SLA 이행을 뒷받침하기 위해 외부 공급업체와 체결하는 계약은?",
  "c": [
   "SLA(Service Level Agreement)",
   "UC(Underpinning Contract)",
   "OLA(Operational Level Agreement)",
   "SLR(Service Level Requirement)"
  ],
  "a": 1,
  "e": "외부 공급업체 계약은 UC다. SLA는 고객과의 약정, OLA는 내부 부서 간 약정, SLR은 고객의 서비스 수준 요구사항이다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 2,
  "q": "반복되는 장애의 근본 원인을 규명해 재발을 막는 것을 목적으로 하는 ITIL 프로세스는?",
  "c": [
   "Incident Management",
   "Release Management",
   "Service Level Management",
   "Problem Management"
  ],
  "a": 3,
  "e": "근본 원인(RCA) 규명·제거는 Problem Management다. Incident는 신속 복구, Release는 배포, SLM은 서비스 수준 협의·모니터링이 목적이다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 3,
  "q": "ITIL 4에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "서비스 가치 시스템(SVS)과 서비스 가치 사슬(SVC)을 중심 구조로 한다",
   "7개의 지도 원칙(Guiding Principles)을 제시한다",
   "서비스 수명주기 5단계를 핵심 구조로 하고 26개 프로세스를 정의한다",
   "34개의 관리 프랙티스(Practices)를 정의한다"
  ],
  "a": 2,
  "e": "수명주기 5단계와 26개 프로세스는 ITIL v3(2011)의 구조다. ITIL 4는 SVS·SVC, 지도 원칙 7개, 프랙티스 34개를 핵심으로 한다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 2,
  "q": "월(30일) 기준 가용률 99.9%를 SLA로 약정했을 때 허용되는 최대 누적 다운타임은?",
  "c": [
   "43.2분",
   "4.32분",
   "8.76시간",
   "432분"
  ],
  "a": 0,
  "e": "30일 = 43,200분, 43,200 × (1 − 0.999) = 43.2분. 4.32분은 99.99%, 432분은 99%의 월 값이고, 8.76시간은 99.9%의 연간 값이다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 1,
  "q": "교착상태(Deadlock) 발생의 필요조건이 아닌 것은?",
  "c": [
   "상호배제(Mutual Exclusion)",
   "선점(Preemption)",
   "점유와 대기(Hold and Wait)",
   "순환대기(Circular Wait)"
  ],
  "a": 1,
  "e": "필요조건은 상호배제·점유와 대기·비선점·순환대기다. 조건은 '비선점'이며, 선점을 허용하면 오히려 교착상태를 예방할 수 있다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "스레드(Thread)에 대한 설명으로 옳은 것은?",
  "c": [
   "스레드마다 독립된 주소 공간을 가져 문맥교환 비용이 프로세스보다 크다",
   "스레드 간 통신에는 반드시 파이프·소켓 등 IPC를 사용해야 한다",
   "같은 프로세스의 스레드끼리 코드·데이터·힙 영역을 공유한다",
   "하나의 프로세스는 오직 하나의 스레드만 가질 수 있다"
  ],
  "a": 2,
  "e": "스레드는 프로세스 자원을 공유하는 경량 실행 단위로 스택·레지스터만 따로 가진다. 독립 주소공간·높은 문맥교환 비용은 프로세스의 특징이고, 공유 메모리로 통신할 수 있으며, 다중 스레드가 가능하다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "Round Robin 스케줄링에 대한 설명으로 옳은 것은?",
  "c": [
   "실행 시간이 가장 짧은 작업을 먼저 처리하는 비선점 방식이다",
   "시간 할당량을 너무 크게 잡으면 FCFS와 비슷하게 동작한다",
   "한 번 CPU를 할당받으면 작업이 끝날 때까지 반납하지 않는다",
   "우선순위가 낮은 작업의 기아를 막기 위해 에이징이 필수이다"
  ],
  "a": 1,
  "e": "RR은 시간 할당량마다 CPU를 회수하는 선점 방식이라 퀀텀이 커지면 FCFS에 가까워진다. 최단 작업 우선은 SJF, 끝까지 점유는 비선점 방식, 에이징은 SJF·우선순위 방식의 기아 대책이다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 3,
  "q": "페이지 참조열 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5에 대해 프레임 3개, FIFO 교체를 적용할 때 페이지 부재 횟수는?",
  "c": [
   "7회",
   "8회",
   "10회",
   "9회"
  ],
  "a": 3,
  "e": "1·2·3 적재(3) → 4(1 교체)·1(2 교체)·2(3 교체)·5(4 교체)로 7 → 1·2 적중 → 3(1 교체)·4(2 교체)로 9 → 5 적중. 총 9회. 10회는 같은 참조열을 프레임 4개로 돌린 결과(벨레이디 이상)다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 3,
  "q": "프레임 수를 늘려도 페이지 부재가 증가하는 벨레이디 이상이 발생하지 않는 스택 알고리즘끼리 묶은 것은?",
  "c": [
   "FIFO, LRU",
   "LRU, OPT",
   "FIFO, OPT",
   "FIFO, Second Chance"
  ],
  "a": 1,
  "e": "LRU와 OPT는 스택 알고리즘이라 프레임이 늘면 부재가 늘지 않는다. FIFO와 그 변형인 Second Chance는 벨레이디 이상이 나타날 수 있다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "리눅스 컨테이너에서 컨테이너별 CPU·메모리 사용량을 제한하는 커널 기능은?",
  "c": [
   "cgroup",
   "Namespace",
   "chroot",
   "SELinux"
  ],
  "a": 0,
  "e": "자원 사용량 제한은 cgroup(Control Group)이다. Namespace는 PID·네트워크 등 보이는 자원의 격리, chroot는 루트 디렉터리 변경, SELinux는 강제 접근 통제다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 3,
  "q": "리눅스에서 chmod 640 report.txt를 실행한 뒤의 권한 표시로 옳은 것은?",
  "c": [
   "rw-r--r--",
   "rw-r-----",
   "rwxr-----",
   "r--rw----"
  ],
  "a": 1,
  "e": "6 = rw-(4+2), 4 = r--, 0 = ---이므로 rw-r-----다. rw-r--r--는 644, rwxr-----는 740, r--rw----는 460이다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 1,
  "q": "해시 함수나 MAC을 이용해 데이터가 위·변조되지 않았음을 보장하는 보안 요소는?",
  "c": [
   "기밀성",
   "무결성",
   "가용성",
   "부인방지"
  ],
  "a": 1,
  "e": "위·변조 방지는 무결성이며 해시·MAC이 대표 수단이다. 기밀성은 암호화, 가용성은 백업·이중화, 부인방지는 전자서명이 대표 수단이다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 1,
  "q": "송신자가 메시지를 보낸 사실을 나중에 부인하지 못하게 하는 기술로 가장 적합한 것은?",
  "c": [
   "전자서명",
   "AES 대칭키 암호화",
   "RAID 미러링",
   "패킷 필터링 방화벽"
  ],
  "a": 0,
  "e": "부인방지는 송신자 개인키로 만드는 전자서명이 담당한다. 대칭키 암호화는 양측이 같은 키를 가져 송신자를 특정할 수 없고, RAID·방화벽은 가용성·접근 통제 수단이다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 2,
  "q": "국내에서 개발된 블록 암호 알고리즘으로만 묶은 것은?",
  "c": [
   "AES, SEED, RSA",
   "SEED, ARIA, LEA",
   "ARIA, ECC, HAS-160",
   "DES, LEA, ChaCha20"
  ],
  "a": 1,
  "e": "SEED·ARIA·LEA는 국산 블록 암호다. AES·DES는 미국 표준, RSA·ECC는 공개키, HAS-160은 국산 해시, ChaCha20은 스트림 암호다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 3,
  "q": "공개키 암호 알고리즘과 그 안전성 근거가 옳게 짝지어진 것은?",
  "c": [
   "ECC — 큰 수의 소인수분해 어려움",
   "Diffie-Hellman — 해시 충돌 저항성",
   "AES — 이산대수 문제의 어려움",
   "RSA — 큰 수의 소인수분해 어려움"
  ],
  "a": 3,
  "e": "RSA는 소인수분해 문제에 기반한다. ECC는 타원곡선 이산대수, Diffie-Hellman은 이산대수 문제에 기반하며, AES는 공개키가 아닌 대칭키 알고리즘이다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 2,
  "q": "충돌 공격이 실증되어 신규 시스템 사용을 권고하지 않는 해시 함수로만 묶은 것은?",
  "c": [
   "SHA-256, SHA-3",
   "SHA-384, SHA-512",
   "SHA-1, SHA-256",
   "MD5, SHA-1"
  ],
  "a": 3,
  "e": "MD5와 SHA-1은 충돌 공격이 실증된 취약 해시다. SHA-2 계열(256/384/512)과 SHA-3는 현재 권고 알고리즘이므로 이를 포함한 묶음은 틀리다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 3,
  "q": "A가 B에게 전자서명된 메시지를 보낼 때 서명 생성과 검증에 쓰는 키로 옳은 것은?",
  "c": [
   "A의 개인키로 서명, A의 공개키로 검증",
   "A의 공개키로 서명, A의 개인키로 검증",
   "B의 공개키로 서명, B의 개인키로 검증",
   "A의 개인키로 서명, B의 개인키로 검증"
  ],
  "a": 0,
  "e": "서명은 본인만 가진 송신자 개인키로 만들고, 누구나 송신자 공개키로 검증한다. 수신자 공개키로 암호화하는 것은 기밀성 목적이며 서명이 아니다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 1,
  "q": "인증서의 폐지 여부를 실시간으로 조회하는 프로토콜은?",
  "c": [
   "CRL",
   "OCSP",
   "X.509",
   "S/MIME"
  ],
  "a": 1,
  "e": "OCSP(Online Certificate Status Protocol)가 실시간 상태 조회를 한다. CRL은 주기적으로 배포되는 폐지 목록, X.509는 인증서 형식 표준, S/MIME은 이메일 보안 표준이다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 3,
  "q": "10명이 서로 1:1 비밀 통신을 할 때, 대칭키 방식에 필요한 비밀키 수와 공개키 방식에 필요한 키 총수(공개키+개인키)를 옳게 짝지은 것은?",
  "c": [
   "90개 — 20개",
   "45개 — 20개",
   "45개 — 10개",
   "20개 — 45개"
  ],
  "a": 1,
  "e": "대칭키는 n(n−1)/2 = 10×9/2 = 45개, 공개키는 1인당 2개라 2n = 20개다. 90개는 2로 나누지 않은 값, 10개는 공개키만 센 값이다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 1,
  "q": "트래픽 경로에 인라인(Inline)으로 설치되어 공격 패킷을 실시간 차단하는 장비는?",
  "c": [
   "IDS",
   "IPS",
   "SIEM",
   "NMS"
  ],
  "a": 1,
  "e": "Inline 차단은 IPS다. IDS는 미러 트래픽을 받아 탐지·경보하는 Passive 장비, SIEM은 로그 상관분석, NMS는 망 관리 시스템이다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "IPsec의 AH(Authentication Header)에 대한 설명으로 옳은 것은?",
  "c": [
   "페이로드를 암호화해 기밀성을 제공한다",
   "SA 협상과 키 교환을 담당하며 UDP 500을 사용한다",
   "무결성과 출발지 인증을 제공하지만 페이로드를 암호화하지 않는다",
   "4계층에서 동작해 웹 트래픽만 보호한다"
  ],
  "a": 2,
  "e": "AH는 무결성·인증만 제공한다. 암호화는 ESP, 키 교환은 IKE(UDP 500)의 역할이며, IPsec은 3계층(IP)에서 동작해 상위 트래픽을 모두 보호한다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "본사와 지사 보안 게이트웨이 간 VPN에서 원래 IP 헤더까지 포함한 전체 패킷을 암호화·캡슐화하는 IPsec 모드는?",
  "c": [
   "Transport 모드",
   "Aggressive 모드",
   "Promiscuous 모드",
   "Tunnel 모드"
  ],
  "a": 3,
  "e": "Tunnel 모드는 원 패킷 전체를 감싸 새 IP 헤더를 붙여 게이트웨이 간 VPN에 쓴다. Transport는 페이로드만 보호, Aggressive는 IKE 1단계 교환 방식, Promiscuous는 NIC 수신 모드다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "클라이언트와 서버 사이에서 대리 연결을 맺고 애플리케이션 계층 내용까지 검사하는 방화벽 방식은?",
  "c": [
   "Packet Filtering",
   "Stateful Inspection",
   "NAT 라우터",
   "Application Proxy(Gateway)"
  ],
  "a": 3,
  "e": "응용 계층 내용 검사와 대리 연결은 Application Proxy다. Packet Filtering은 헤더만, Stateful은 세션 상태까지 보며, NAT는 주소 변환 기능이다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 1,
  "q": "SQL Injection·XSS 등 HTTP 요청에 담긴 웹 공격을 탐지·차단하는 데 특화된 보안 장비는?",
  "c": [
   "WAF",
   "NAC",
   "DLP",
   "EDR"
  ],
  "a": 0,
  "e": "웹 애플리케이션 공격 방어는 WAF(웹 방화벽)다. NAC는 단말 접속 통제, DLP는 데이터 유출 방지, EDR은 엔드포인트 위협 탐지·대응이다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "보안 이벤트 대응 절차를 플레이북으로 정의해 자동으로 실행·오케스트레이션하는 솔루션은?",
  "c": [
   "SIEM",
   "UTM",
   "SOAR",
   "NAC"
  ],
  "a": 2,
  "e": "플레이북 기반 자동 대응은 SOAR다. SIEM은 로그 수집·상관분석·경보까지, UTM은 여러 보안 기능을 통합한 장비, NAC는 접근 제어다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "출발지 IP를 피해자 주소로 위조해 DNS·NTP 서버에 작은 요청을 보내고, 큰 응답이 피해자에게 몰리게 하는 공격은?",
  "c": [
   "ARP 스푸핑",
   "SQL 인젝션",
   "반사·증폭(DRDoS) 공격",
   "세션 하이재킹"
  ],
  "a": 2,
  "e": "출발지 위조 + 증폭 응답을 이용하는 것은 반사·증폭형 DDoS(DRDoS)다. ARP 스푸핑은 MAC 주소 위조, SQL 인젝션은 DB 질의 조작, 세션 하이재킹은 세션 탈취다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 3,
  "q": "사용자가 로그인된 상태를 악용해 사용자 의도와 무관한 요청(송금·비밀번호 변경 등)을 해당 사이트로 전송하게 만드는 공격은?",
  "c": [
   "XSS",
   "SSRF",
   "CSRF",
   "Path Traversal"
  ],
  "a": 2,
  "e": "인증된 세션으로 위조 요청을 보내게 하는 것은 CSRF다. XSS는 피해자 브라우저에서 악성 스크립트 실행, SSRF는 서버가 내부 자원을 요청하게 유도, Path Traversal은 상위 경로 파일 접근이다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "제로 트러스트(Zero Trust) 보안 모델의 원칙으로 옳지 않은 것은?",
  "c": [
   "내부망에 접속한 사용자와 기기는 신뢰 구간으로 보고 추가 검증을 생략한다",
   "모든 접근 요청을 매번 인증·인가한다",
   "최소 권한 원칙과 마이크로 세그멘테이션을 적용한다",
   "사용자 신원·기기 상태 등 맥락 정보를 지속적으로 평가한다"
  ],
  "a": 0,
  "e": "제로 트러스트는 Never Trust, Always Verify로 내부망도 신뢰하지 않는다. 내부를 신뢰 구간으로 보는 것은 전통적 경계 보안 모델이다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 1,
  "q": "가용률(Availability)을 구하는 식으로 옳은 것은?",
  "c": [
   "MTTR / (MTBF + MTTR)",
   "(MTBF + MTTR) / MTBF",
   "MTBF / MTTR",
   "MTBF / (MTBF + MTTR)"
  ],
  "a": 3,
  "e": "가용률 = 정상 가동 시간 / 전체 시간 = MTBF/(MTBF+MTTR). MTTR/(MTBF+MTTR)은 비가용률, 나머지 두 식은 1을 넘거나 비율이 아니다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 2,
  "q": "MTBF가 495시간, MTTR이 5시간인 시스템의 가용률은?",
  "c": [
   "99.9%",
   "98%",
   "99.5%",
   "99%"
  ],
  "a": 3,
  "e": "495 / (495 + 5) = 495 / 500 = 0.99 = 99%다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 1,
  "q": "가용률 99.999%(Five Nines)를 만족할 때 연간 허용 다운타임으로 가장 가까운 것은?",
  "c": [
   "약 52.6분",
   "약 8.76시간",
   "약 5.26분",
   "약 31.5초"
  ],
  "a": 2,
  "e": "525,600분 × 0.00001 ≈ 5.26분. 52.6분은 99.99%, 8.76시간은 99.9%, 31.5초는 99.9999%의 값이다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 3,
  "q": "가용률 0.99인 웹 서버와 0.99인 DB 서버가 직렬로 연결되어 둘 다 정상이어야 서비스된다. 전체 가용률은?",
  "c": [
   "0.9999",
   "0.9801",
   "0.9900",
   "0.9950"
  ],
  "a": 1,
  "e": "직렬은 곱이므로 0.99 × 0.99 = 0.9801. 0.9999는 병렬 계산 결과이고, 직렬 가용률은 개별 가용률보다 낮아진다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 3,
  "q": "가용률 0.9인 서버 2대를 병렬로 구성해 1대만 정상이어도 서비스될 때 전체 가용률은? (절체 시간 무시)",
  "c": [
   "0.99",
   "0.81",
   "0.90",
   "0.95"
  ],
  "a": 0,
  "e": "병렬 = 1 − (1 − 0.9)(1 − 0.9) = 1 − 0.01 = 0.99. 0.81은 직렬(곱) 계산을 잘못 적용한 값이다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 1,
  "q": "시스템 가용률을 높이는 방법으로 가장 거리가 먼 것은?",
  "c": [
   "예비 부품을 확보해 MTTR을 줄인다",
   "이중화로 단일 장애점(SPOF)을 제거한다",
   "장애 수리 절차에 수작업 승인 단계를 추가한다",
   "예방 정비로 MTBF를 늘린다"
  ],
  "a": 2,
  "e": "수리 절차가 길어지면 MTTR이 늘어 가용률이 떨어진다. MTTR 단축·MTBF 증가·SPOF 제거는 모두 가용률을 높인다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 2,
  "q": "2TB 디스크 5개로 RAID 5를 구성할 때 실제 사용 가능한 용량은?",
  "c": [
   "8TB",
   "10TB",
   "6TB",
   "5TB"
  ],
  "a": 0,
  "e": "RAID 5는 디스크 1개 분량을 패리티로 쓰므로 (5 − 1) × 2TB = 8TB. 10TB는 RAID 0, 6TB는 패리티 2개(RAID 6)를 뺀 값이다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 3,
  "q": "4TB 디스크 6개로 RAID 6을 구성할 때 사용 가능한 용량은?",
  "c": [
   "20TB",
   "16TB",
   "12TB",
   "24TB"
  ],
  "a": 1,
  "e": "RAID 6은 이중 패리티로 2개 분량을 빼므로 (6 − 2) × 4TB = 16TB. 20TB는 RAID 5, 12TB는 RAID 1/10(절반), 24TB는 RAID 0이다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 1,
  "q": "MTBF가 2,000시간인 장비의 고장률(λ)은? (지수분포 가정)",
  "c": [
   "시간당 0.005회",
   "시간당 0.0005회",
   "시간당 0.002회",
   "시간당 2,000회"
  ],
  "a": 1,
  "e": "고장률 λ = 1/MTBF = 1/2,000 = 0.0005회/시간이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 1,
  "q": "재해로 업무가 중단된 시점부터 서비스를 복구해야 하는 목표 시간을 뜻하는 지표는?",
  "c": [
   "RTO",
   "RPO",
   "RSO",
   "MTBF"
  ],
  "a": 0,
  "e": "복구 목표 시간은 RTO(Recovery Time Objective)다. RPO는 데이터 손실 허용 시점, RSO는 복구 범위, MTBF는 평균 고장 간격이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 3,
  "q": "매일 00시에만 백업하고 그 밖의 복제가 없는 시스템이 23시 장애로 저장소를 잃었다. 최악의 데이터 손실 구간과 관련 지표로 옳은 것은?",
  "c": [
   "약 23시간 — RPO",
   "약 23시간 — RTO",
   "약 1시간 — RPO",
   "약 1시간 — RTO"
  ],
  "a": 0,
  "e": "마지막 백업(00시) 이후 23시까지의 데이터가 사라지므로 손실 구간은 약 23시간이며, 데이터 손실 허용 구간은 RPO로 관리한다. RTO는 복구 소요 시간 목표다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 1,
  "q": "주 센터와 실시간 동기 복제를 유지해 재해 시 거의 즉시 절체할 수 있지만 비용이 가장 큰 복구 센터는?",
  "c": [
   "Hot Site",
   "Warm Site",
   "Cold Site",
   "Mirror Site"
  ],
  "a": 3,
  "e": "실시간 동기·즉시 절체는 Mirror Site다. Hot은 수 시간, Warm은 그보다 길며, Cold는 시설만 있어 복구가 가장 느리다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 3,
  "q": "일요일 전체 백업 후 월~금 매일 증분 백업을 한다. 목요일 백업 직후 장애가 났을 때 복구에 필요한 백업 세트 수는?",
  "c": [
   "5개",
   "2개",
   "4개",
   "6개"
  ],
  "a": 0,
  "e": "증분 백업은 직전 백업 이후 변경분만 담으므로 전체 1개 + 월·화·수·목 증분 4개 = 5개가 필요하다. 2개는 차등 백업일 때의 값이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 2,
  "q": "3-2-1 백업 규칙의 내용으로 옳은 것은?",
  "c": [
   "하루 3회 백업, 2주 보관, 월 1회 검증",
   "전체 3회, 증분 2회, 차등 1회",
   "사본 3개, 서로 다른 매체 2종, 원격지 보관 1개",
   "서버 3대, 스토리지 2대, 테이프 1개"
  ],
  "a": 2,
  "e": "3-2-1은 데이터 사본 3개를 2종 매체에 두고 1개는 원격지(오프사이트)에 보관하라는 규칙이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 2,
  "q": "BCP와 DRP의 관계로 옳은 것은?",
  "c": [
   "DRP가 전사 계획이고 BCP는 IT 시스템 복구 계획이다",
   "BCP는 재해 발생 후에만 수립하는 사후 계획이다",
   "BCP는 전사 업무 연속성 계획이고 DRP는 그중 IT 복구에 초점을 둔 하위 계획이다",
   "BIA는 DRP 수립이 끝난 뒤 마지막 단계에서 수행한다"
  ],
  "a": 2,
  "e": "BCP가 상위 전사 계획, DRP가 IT 중심 하위 계획이다. BCP는 사전 계획이며, BIA는 복구 전략 수립 전 초기 단계에서 수행한다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 2,
  "q": "URL 경로·쿠키·HTTP 헤더를 보고 요청을 서로 다른 서버 그룹으로 분배할 수 있는 부하 분산 방식은?",
  "c": [
   "L7 로드 밸런싱",
   "L4 로드 밸런싱",
   "DNS Round Robin",
   "Anycast"
  ],
  "a": 0,
  "e": "애플리케이션 계층 정보(URL·쿠키·헤더)를 해석하는 것은 L7 LB다. L4는 IP·포트, DNS Round Robin은 이름 해석 단계 순환, Anycast는 동일 IP의 최근접 라우팅이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 1,
  "q": "최대 부하를 처리하는 데 서버 4대가 필요할 때 N+1 이중화 구성에 필요한 서버 수는?",
  "c": [
   "5대",
   "4대",
   "6대",
   "8대"
  ],
  "a": 0,
  "e": "N+1은 필요 대수 N에 예비 1대를 더하므로 4 + 1 = 5대다. 8대는 2N 구성이다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 1,
  "q": "SNMP에서 에이전트가 요청을 수신하는 포트와 매니저가 Trap을 수신하는 포트로 옳은 것은?",
  "c": [
   "TCP 161 — TCP 162",
   "UDP 162 — UDP 161",
   "UDP 161 — UDP 162",
   "UDP 514 — UDP 162"
  ],
  "a": 2,
  "e": "SNMP는 UDP를 쓰며 에이전트는 161, 매니저의 Trap 수신은 162다. UDP 514는 Syslog 포트다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "장애 등 이벤트가 발생하면 에이전트가 매니저의 요청 없이 먼저 보내는 SNMP 메시지는?",
  "c": [
   "GetNext",
   "Set",
   "GetBulk",
   "Trap"
  ],
  "a": 3,
  "e": "에이전트가 능동적으로 보내는(Push) 알림은 Trap이다. GetNext·Set·GetBulk는 모두 매니저가 에이전트에 보내는 요청이다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "SNMPv3에서 사용자 기반 인증과 암호화를 담당하는 보안 모델은?",
  "c": [
   "VACM",
   "USM",
   "MIB",
   "SMI"
  ],
  "a": 1,
  "e": "USM(User-based Security Model)이 인증·암호화를 담당한다. VACM은 뷰 기반 접근 제어, MIB는 관리 객체 정보베이스, SMI는 객체 정의 규칙이다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 3,
  "q": "SNMP 버전에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "SNMPv1은 커뮤니티 문자열을 평문으로 전송한다",
   "GetBulk 메시지는 SNMPv2부터 도입되어 대량 조회에 쓰인다",
   "SNMPv2c는 커뮤니티 문자열을 암호화해 v1보다 인증 보안이 강화되었다",
   "SNMPv3는 VACM으로 MIB 객체별 접근을 제어한다"
  ],
  "a": 2,
  "e": "v2c도 v1처럼 커뮤니티 문자열을 평문으로 보낸다. 인증·암호화 강화는 v3(USM)에서 이루어졌다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 1,
  "q": "망 관리 기능 FCAPS에서 A가 뜻하는 것은?",
  "c": [
   "Availability(가용성 관리)",
   "Authentication(인증 관리)",
   "Accounting(과금 관리)",
   "Alarm(경보 관리)"
  ],
  "a": 2,
  "e": "FCAPS = Fault·Configuration·Accounting·Performance·Security. 경보는 Fault, 인증은 Security 관리에 포함된다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "TMN 논리 계층 구조에서 개별 장비(네트워크 요소)를 직접 관리하는 계층은?",
  "c": [
   "EML(Element Management Layer)",
   "NML(Network Management Layer)",
   "SML(Service Management Layer)",
   "BML(Business Management Layer)"
  ],
  "a": 0,
  "e": "개별 장비 관리는 EML이다. NML은 망 전체, SML은 서비스, BML은 사업 관리 계층이다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "통신사업자 운영 지원 체계 중 과금·청구·고객관리(CRM)를 담당하는 시스템은?",
  "c": [
   "OSS",
   "EMS",
   "NMS",
   "BSS"
  ],
  "a": 3,
  "e": "과금·청구·CRM은 BSS(Business Support System)다. OSS는 장애·성능·구성 등 운영, EMS는 개별 장비, NMS는 망 전체 관리다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 1,
  "q": "전통적인 Syslog가 사용하는 기본 전송 프로토콜과 포트는?",
  "c": [
   "TCP 22",
   "UDP 161",
   "TCP 443",
   "UDP 514"
  ],
  "a": 3,
  "e": "Syslog는 전통적으로 UDP 514를 쓰고, TLS 보안 전송은 TCP 6514다. TCP 22는 SSH, UDP 161은 SNMP, TCP 443은 HTTPS다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 2,
  "q": "Syslog 심각도(Severity) 값 3에 해당하는 수준은?",
  "c": [
   "Critical",
   "Warning",
   "Notice",
   "Error"
  ],
  "a": 3,
  "e": "0 Emergency·1 Alert·2 Critical·3 Error·4 Warning·5 Notice·6 Informational·7 Debug이므로 3은 Error다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 2,
  "q": "분산 시스템에서 하나의 요청이 여러 서비스를 거치는 경로와 구간별 지연을 추적하는 관측 데이터는?",
  "c": [
   "Traces",
   "Logs",
   "Metrics",
   "Alerts"
  ],
  "a": 0,
  "e": "요청 흐름과 구간 지연은 Traces(분산 추적)다. Logs는 개별 이벤트 기록, Metrics는 수치 시계열이며, Alerts는 관측 3기둥이 아니다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 1,
  "q": "SRE 4대 골든 시그널에 해당하지 않는 것은?",
  "c": [
   "Latency(지연)",
   "Traffic(트래픽)",
   "Cost(비용)",
   "Saturation(포화도)"
  ],
  "a": 2,
  "e": "골든 시그널은 Latency·Traffic·Errors·Saturation이다. 비용은 포함되지 않는다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 3,
  "q": "30일 기준 SLO가 99.95%인 서비스의 월간 에러 버짓(허용 장애 시간)은?",
  "c": [
   "43.2분",
   "21.6분",
   "2.16분",
   "216분"
  ],
  "a": 1,
  "e": "43,200분 × (1 − 0.9995) = 43,200 × 0.0005 = 21.6분. 43.2분은 SLO 99.9%일 때의 값이다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 2,
  "q": "에이전트 설치 없이 SSH로 대상 서버에 접속하고 YAML 플레이북으로 구성을 자동화하는 도구는?",
  "c": [
   "Puppet",
   "Chef",
   "Ansible",
   "Prometheus"
  ],
  "a": 2,
  "e": "에이전트리스·SSH·YAML 플레이북은 Ansible의 특징이다. Puppet·Chef는 에이전트 기반, Prometheus는 메트릭 모니터링 도구다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "다음에 실행할 명령어의 주소를 저장하는 레지스터는?",
  "c": [
   "IR",
   "AC",
   "MDR",
   "PC"
  ],
  "a": 3,
  "e": "PC(Program Counter)가 다음 명령어 주소를 보관한다. IR은 현재 명령어, MDR은 메모리 데이터, AC는 연산 결과 누적용이다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "CPU에서 명령어를 해독하고 각 장치에 제어 신호를 보내는 장치는?",
  "c": [
   "DMA 제어기",
   "캐시 메모리",
   "산술논리연산장치(ALU)",
   "제어장치(CU)"
  ],
  "a": 3,
  "e": "CU가 해독·제어를 담당한다. ALU는 연산, 캐시는 기억 계층, DMA 제어기는 I/O 전송 장치다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "피연산자 데이터 값이 명령어 안에 직접 들어 있어 메모리 접근이 필요 없는 주소지정 방식은?",
  "c": [
   "인덱스 주소지정",
   "직접 주소지정",
   "즉시 주소지정",
   "간접 주소지정"
  ],
  "a": 2,
  "e": "즉시(Immediate) 방식은 데이터가 명령어에 포함된다. 직접은 1회, 간접은 2회 이상 메모리 접근, 인덱스는 인덱스 레지스터+주소로 유효 주소를 계산한다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 3,
  "q": "5단계 파이프라인에서 해저드 없이 100개의 명령어를 실행할 때 필요한 총 클록 사이클 수는?",
  "c": [
   "500",
   "104",
   "105",
   "100"
  ],
  "a": 1,
  "e": "이상적 파이프라인 사이클 = k + n − 1 = 5 + 100 − 1 = 104. 500은 파이프라인이 없는 경우(5×100), 100·105는 공식 오적용이다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "앞 명령어의 결과를 다음 명령어가 읽어야 해서 생기는 RAW 해저드의 대표 해결 기법은?",
  "c": [
   "명령어 길이 고정",
   "포워딩(Forwarding)",
   "자원 중복 배치",
   "분기 예측"
  ],
  "a": 1,
  "e": "RAW 데이터 해저드는 결과를 다음 단계로 바로 전달하는 포워딩(또는 스톨)으로 해결한다. 분기 예측은 제어 해저드, 자원 중복은 구조 해저드 대책, 명령어 길이 고정은 해저드 해결 기법이 아니다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "RISC 구조의 특징으로 옳은 것은?",
  "c": [
   "고정 길이 명령어로 파이프라인 구현이 쉽다",
   "메모리 대 메모리 연산 명령이 많다",
   "명령어 수가 많고 길이가 가변적이다",
   "대표 프로세서는 x86 계열이다"
  ],
  "a": 0,
  "e": "RISC는 적은 수의 고정 길이 명령어와 Load/Store 구조로 파이프라인에 유리하다. 나머지는 CISC(x86)의 특징이다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "하나의 명령어로 여러 데이터를 동시에 처리하여 GPU·벡터 연산에 쓰이는 Flynn 분류는?",
  "c": [
   "SISD",
   "SIMD",
   "MISD",
   "MIMD"
  ],
  "a": 1,
  "e": "SIMD는 단일 명령·다중 데이터로 벡터·GPU 연산에 해당한다. SISD는 전통적 단일 프로세서, MISD는 실용 사례가 드물고, MIMD는 멀티프로세서다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "2진수 101101을 10진수로 변환한 값은?",
  "c": [
   "91",
   "53",
   "43",
   "45"
  ],
  "a": 3,
  "e": "32+0+8+4+0+1 = 45. 43·53·91은 자리값을 잘못 더한 결과다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "8비트 2의 보수 표현에서 −20을 나타낸 것은?",
  "c": [
   "11101011",
   "11101100",
   "00010100",
   "10010100"
  ],
  "a": 1,
  "e": "20 = 00010100 → 1의 보수 11101011 → +1 = 11101100. 11101011은 1의 보수, 10010100은 부호-크기 표현, 00010100은 +20이다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 3,
  "q": "명령어 메이저 사이클 중 간접 사이클(Indirect cycle)이 수행되는 경우는?",
  "c": [
   "인터럽트 요청이 발생했을 때",
   "분기 예측이 실패했을 때",
   "즉시 주소지정 명령어를 실행할 때",
   "명령어의 주소부가 유효 주소의 주소를 담고 있을 때"
  ],
  "a": 3,
  "e": "간접 사이클은 간접 주소지정에서 실제 유효 주소를 다시 읽기 위해 수행된다. 인터럽트는 인터럽트 사이클, 즉시 방식은 메모리 접근이 없으며, 분기 예측 실패는 파이프라인 플러시 사유다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 1,
  "q": "주기적인 Refresh가 필요하여 주로 주기억장치로 사용되는 메모리는?",
  "c": [
   "Mask ROM",
   "EEPROM",
   "SRAM",
   "DRAM"
  ],
  "a": 3,
  "e": "DRAM은 커패시터 전하가 누설되어 Refresh가 필요하다. SRAM은 플립플롭(캐시), EEPROM·Mask ROM은 비휘발성 ROM이다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "캐시 쓰기 정책 중 블록이 교체될 때만 주기억장치에 기록하며 Dirty 비트를 사용하는 방식은?",
  "c": [
   "Write-Around",
   "Write-Through",
   "Write-Back",
   "No-Write-Allocate"
  ],
  "a": 2,
  "e": "Write-Back은 수정된(Dirty) 블록만 교체 시 기록한다. Write-Through는 즉시 동시 기록, No-Write-Allocate·Write-Around는 쓰기 실패 시 캐시 적재 여부에 관한 정책이다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "캐시 접근시간 10ns, 주기억 접근시간 100ns, 적중률 90%이다. 실패 시 캐시 확인 후 주기억에 접근(10+100ns)한다고 할 때 평균 접근시간은?",
  "c": [
   "20ns",
   "28ns",
   "11ns",
   "19ns"
  ],
  "a": 0,
  "e": "0.9×10 + 0.1×(10+100) = 9 + 11 = 20ns. 19ns는 실패 시 100ns만 계산한 값, 11ns는 실패 항만 계산한 값이다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "32비트 주소, 16KB 직접 사상 캐시, 블록 크기 16바이트일 때 태그 비트 수는?",
  "c": [
   "18비트",
   "22비트",
   "20비트",
   "14비트"
  ],
  "a": 0,
  "e": "오프셋 = log₂16 = 4비트, 라인 수 = 16KB/16B = 1024 → 인덱스 10비트, 태그 = 32 − 10 − 4 = 18비트."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "프레임 3개, FIFO 교체에서 참조열 1,2,3,4,1,2,5,1,2,3,4,5 의 페이지 부재 횟수는?",
  "c": [
   "12회",
   "9회",
   "8회",
   "10회"
  ],
  "a": 1,
  "e": "1·2·3·4·1·2·5 부재(7회) → 1·2 적중 → 3·4 부재(9회) → 5 적중. 프레임을 4개로 늘리면 10회가 되는 벨레이디 모순 예시다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "프레임 3개, LRU 교체에서 참조열 7,0,1,2,0,3,0,4 의 페이지 부재 횟수는?",
  "c": [
   "5회",
   "7회",
   "6회",
   "8회"
  ],
  "a": 2,
  "e": "7·0·1 부재(3) → 2 부재(7 교체, 4) → 0 적중 → 3 부재(1 교체, 5) → 0 적중 → 4 부재(2 교체, 6). 총 6회."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "주소 버스가 20비트일 때 직접 지정 가능한 최대 메모리 공간은? (바이트 단위 주소)",
  "c": [
   "64KB",
   "4GB",
   "1MB",
   "16MB"
  ],
  "a": 2,
  "e": "2²⁰ = 1,048,576바이트 = 1MB. 64KB는 16비트, 16MB는 24비트, 4GB는 32비트 주소다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "논리주소 32비트, 페이지 크기 4KB인 페이징 시스템에서 페이지 번호 필드의 비트 수는?",
  "c": [
   "22비트",
   "12비트",
   "20비트",
   "32비트"
  ],
  "a": 2,
  "e": "4KB = 2¹² → 오프셋 12비트, 페이지 번호 = 32 − 12 = 20비트. 12비트는 오프셋 길이다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "CPU의 개입 없이 I/O 장치와 메모리 사이에 블록 단위 데이터를 전송하는 방식은?",
  "c": [
   "DMA",
   "소프트웨어 인터럽트",
   "프로그램 I/O",
   "폴링"
  ],
  "a": 0,
  "e": "DMA 제어기가 사이클 스틸링으로 직접 전송하고 완료 시 인터럽트를 보낸다. 프로그램 I/O·폴링은 CPU가 상태를 계속 검사, 소프트웨어 인터럽트는 프로그램이 발생시키는 인터럽트다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "페이지 교체가 과도하게 일어나 CPU 이용률이 급격히 떨어지는 현상은?",
  "c": [
   "벨레이디 모순",
   "단편화",
   "스래싱",
   "기아 현상"
  ],
  "a": 2,
  "e": "스래싱은 페이징 과다로 처리율이 급감하는 현상이다. 단편화는 메모리 낭비, 벨레이디 모순은 프레임 증가 시 부재 증가, 기아는 스케줄링 문제다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 1,
  "q": "스택에 1, 2, 3을 차례로 Push한 뒤 Pop 1회, 4를 Push, Pop 2회 했을 때 꺼낸 순서는?",
  "c": [
   "3, 2, 4",
   "3, 4, 2",
   "1, 2, 3",
   "4, 3, 2"
  ],
  "a": 1,
  "e": "Push 1·2·3 → Pop 3 → Push 4 → Pop 4 → Pop 2. LIFO로 마지막에 넣은 것이 먼저 나온다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "후위 표기식 3 4 + 2 * 의 계산 결과는?",
  "c": [
   "10",
   "24",
   "11",
   "14"
  ],
  "a": 3,
  "e": "3 4 + = 7, 7 2 * = 14. 스택에 피연산자를 넣고 연산자를 만나면 두 개를 꺼내 계산한다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "정렬된 1,023개 원소에서 이진 탐색 시 최악의 비교 횟수는?",
  "c": [
   "10회",
   "9회",
   "512회",
   "11회"
  ],
  "a": 0,
  "e": "최악 비교 = ⌊log₂n⌋ + 1 = ⌊log₂1023⌋ + 1 = 9 + 1 = 10회. 512회는 선형 탐색 평균에 가까운 값이다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "최악의 경우에도 O(n log n)을 보장하며 안정 정렬이지만 추가 메모리가 필요한 정렬은?",
  "c": [
   "퀵 정렬",
   "선택 정렬",
   "병합 정렬",
   "힙 정렬"
  ],
  "a": 2,
  "e": "병합 정렬은 항상 n log n·안정·O(n) 추가 메모리. 퀵은 최악 n², 선택은 n², 힙은 n log n이지만 불안정 정렬이다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "그래프의 너비 우선 탐색(BFS)에 사용하는 자료구조는?",
  "c": [
   "큐",
   "스택",
   "힙",
   "트라이"
  ],
  "a": 0,
  "e": "BFS는 큐로 가까운 정점부터 방문한다. 스택은 DFS, 힙은 우선순위 큐·다익스트라, 트라이는 문자열 검색용이다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "리프 노드들이 연결 리스트로 이어져 범위 검색에 유리하여 DB 인덱스로 많이 쓰이는 트리는?",
  "c": [
   "최대 힙",
   "AVL 트리",
   "B+ 트리",
   "트라이"
  ],
  "a": 2,
  "e": "B+ 트리는 모든 키를 리프에 두고 리프를 연결해 범위 검색이 빠르다. AVL은 메모리 내 균형 BST, 트라이는 문자열, 힙은 우선순위 큐용이다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 1,
  "q": "깊이(레벨 수)가 4인 이진 트리가 가질 수 있는 최대 노드 수는?",
  "c": [
   "15",
   "8",
   "16",
   "31"
  ],
  "a": 0,
  "e": "최대 노드 수 = 2ᵏ − 1 = 2⁴ − 1 = 15. 8은 4번째 레벨의 노드 수, 31은 깊이 5의 값이다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 3,
  "q": "해시 충돌 해결에서 선형 조사(Linear Probing)의 주요 단점은?",
  "c": [
   "탐색이 항상 O(n²)이 됨",
   "버킷마다 연결 리스트 메모리 필요",
   "해시 함수를 두 개 사용해야 함",
   "1차 군집(Primary Clustering) 발생"
  ],
  "a": 3,
  "e": "선형 조사는 연속된 빈칸을 채우며 1차 군집이 생긴다. 연결 리스트는 체이닝의 특징, 해시 함수 두 개는 이중 해싱, O(n²) 탐색은 사실이 아니다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 3,
  "q": "가중치가 음수가 아닌 그래프에서 단일 출발점 최단경로를 구하는 탐욕 알고리즘은?",
  "c": [
   "백트래킹",
   "DFS",
   "크루스칼",
   "다익스트라"
  ],
  "a": 3,
  "e": "다익스트라는 음수 없는 가중 그래프의 단일 출발 최단경로 알고리즘이다. DFS는 탐색, 크루스칼은 최소 신장 트리, 백트래킹은 해 공간 탐색 기법이다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 2,
  "q": "도착 시각이 모두 0이고 실행시간이 각각 6, 8, 7, 3인 4개 프로세스를 SJF로 스케줄링할 때 평균 대기시간은?",
  "c": [
   "7",
   "8",
   "6",
   "10.25"
  ],
  "a": 0,
  "e": "실행 순서 3·6·7·8 → 대기 0·3·9·16, 합 28 ÷ 4 = 7. 10.25는 입력 순서(FCFS)로 계산한 값이다(0+6+14+21=41, 41÷4)."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 2,
  "q": "교착상태 발생의 필요조건이 아닌 것은?",
  "c": [
   "상호배제",
   "선점 가능",
   "점유와 대기",
   "순환 대기"
  ],
  "a": 1,
  "e": "필요조건은 상호배제·점유와 대기·비선점·순환 대기다. '선점 가능'은 오히려 교착상태를 깨는 조건이다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 3,
  "q": "은행원 알고리즘(Banker's Algorithm)이 해당하는 교착상태 대응 기법은?",
  "c": [
   "회복",
   "회피",
   "탐지",
   "예방"
  ],
  "a": 1,
  "e": "은행원 알고리즘은 자원 할당 전 안전 상태를 검사하는 회피 기법이다. 예방은 조건 자체를 부정, 탐지·회복은 발생 후 대응이다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 2,
  "q": "프로세스 상태 중 I/O 완료를 기다리던 프로세스가 I/O가 끝난 뒤 이동하는 상태는?",
  "c": [
   "생성(New)",
   "실행(Running)",
   "준비(Ready)",
   "종료(Terminated)"
  ],
  "a": 2,
  "e": "대기(Waiting) → 준비(Ready)로 이동한 뒤 디스패치되어야 실행된다. 곧바로 실행 상태로 가지 않는다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 3,
  "q": "HRRN 스케줄링에서 대기시간 10, 서비스시간 5인 프로세스의 우선순위 값은?",
  "c": [
   "2",
   "3",
   "15",
   "0.5"
  ],
  "a": 1,
  "e": "(대기 + 서비스) ÷ 서비스 = (10 + 5) ÷ 5 = 3. 2는 대기÷서비스, 15는 단순 합이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 1,
  "q": "트랜잭션의 연산이 모두 반영되거나 전혀 반영되지 않아야 하는 성질은?",
  "c": [
   "원자성",
   "지속성",
   "일관성",
   "격리성"
  ],
  "a": 0,
  "e": "원자성(Atomicity) = All or Nothing. 일관성은 무결성 유지, 격리성은 간섭 차단, 지속성은 커밋 결과 영구 보존이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "부분 함수 종속을 제거하여 얻는 정규형은?",
  "c": [
   "2NF",
   "3NF",
   "BCNF",
   "1NF"
  ],
  "a": 0,
  "e": "2NF가 부분 함수 종속 제거다. 1NF는 원자값, 3NF는 이행 함수 종속 제거, BCNF는 모든 결정자가 후보키다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 3,
  "q": "A→B, B→C 가 성립하는 이행 함수 종속을 제거하는 정규형은?",
  "c": [
   "3NF",
   "2NF",
   "4NF",
   "5NF"
  ],
  "a": 0,
  "e": "이행 종속 제거는 3NF다. 2NF는 부분 종속, 4NF는 다치 종속, 5NF는 조인 종속 제거다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 1,
  "q": "다음 중 DCL에 속하는 SQL 명령은?",
  "c": [
   "UPDATE",
   "COMMIT",
   "GRANT",
   "ALTER"
  ],
  "a": 2,
  "e": "GRANT·REVOKE가 DCL이다. COMMIT은 TCL, ALTER는 DDL, UPDATE는 DML이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "격리수준 Read Committed 에서 여전히 발생할 수 있는 현상은?",
  "c": [
   "Lost Commit",
   "Dirty Read",
   "Non-Repeatable Read",
   "Cascading Abort만 발생"
  ],
  "a": 2,
  "e": "Read Committed는 Dirty Read를 막지만 같은 행 재조회 시 값이 달라지는 Non-Repeatable Read는 허용한다. Dirty Read는 Read Uncommitted에서 발생한다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "튜플 3개인 릴레이션 R과 튜플 4개인 릴레이션 S를 CROSS JOIN 한 결과의 튜플 수는?",
  "c": [
   "12",
   "4",
   "3",
   "7"
  ],
  "a": 0,
  "e": "카티션 곱 = 3 × 4 = 12. 7은 합집합 크기처럼 더한 오답이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "속성 5개, 튜플 8개인 릴레이션의 차수(Degree)는?",
  "c": [
   "5",
   "13",
   "40",
   "8"
  ],
  "a": 0,
  "e": "차수 = 속성 수 = 5, 카디널리티 = 튜플 수 = 8. 두 용어를 바꾸는 것이 함정이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 3,
  "q": "분산 시스템에서 일관성·가용성·분할 내성을 동시에 완전히 만족할 수 없다는 이론은?",
  "c": [
   "BASE 모델",
   "ACID 원칙",
   "CAP 이론",
   "2단계 잠금 규약"
  ],
  "a": 2,
  "e": "CAP 이론의 설명이다. BASE는 NoSQL의 결과적 일관성 모델, ACID는 트랜잭션 성질, 2PL은 직렬성 보장 잠금 규약이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "Cassandra·HBase가 해당하는 NoSQL 유형은?",
  "c": [
   "키-값형",
   "그래프형",
   "문서형",
   "컬럼 패밀리형"
  ],
  "a": 3,
  "e": "Cassandra·HBase·BigTable은 컬럼형이다. Redis는 키-값, MongoDB는 문서, Neo4j는 그래프형이다."
 },
 {
  "s": "s5",
  "t": "SW 공학",
  "d": 1,
  "q": "요구사항 변화를 수용하며 짧은 주기로 반복 개발하는 방법론은?",
  "c": [
   "폭포수 모델",
   "V-모델",
   "나선형 문서 승인 방식",
   "애자일"
  ],
  "a": 3,
  "e": "애자일은 반복·점진·변화 수용이 핵심이다. 폭포수와 V-모델은 순차적이며 문서 중심이다."
 },
 {
  "s": "s5",
  "t": "SW 공학",
  "d": 2,
  "q": "SOLID 원칙 중 '소프트웨어 개체는 확장에는 열려 있고 변경에는 닫혀 있어야 한다'는 원칙은?",
  "c": [
   "LSP",
   "DIP",
   "OCP",
   "SRP"
  ],
  "a": 2,
  "e": "OCP(개방-폐쇄 원칙)다. SRP는 단일 책임, LSP는 하위 타입 치환, DIP는 추상화 의존 원칙이다."
 },
 {
  "s": "s5",
  "t": "SW 공학",
  "d": 2,
  "q": "GoF 디자인 패턴 중 생성(Creational) 패턴에 속하는 것은?",
  "c": [
   "Observer",
   "Adapter",
   "Strategy",
   "Singleton"
  ],
  "a": 3,
  "e": "Singleton은 생성 패턴이다. Adapter는 구조, Observer·Strategy는 행위 패턴이다."
 },
 {
  "s": "s5",
  "t": "SW 공학",
  "d": 1,
  "q": "입력값의 경계 근처를 집중 시험하는 블랙박스 테스트 기법은?",
  "c": [
   "분기 커버리지",
   "기본 경로 테스트",
   "문장 커버리지",
   "경계값 분석"
  ],
  "a": 3,
  "e": "경계값 분석은 명세 기반 블랙박스 기법이다. 나머지는 코드 구조 기반 화이트박스 기법이다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 1,
  "q": "전기통신의 기본 원칙과 용어 정의를 규정하는 법률은?",
  "c": [
   "정보통신공사업법",
   "전파법",
   "전기통신사업법",
   "전기통신기본법"
  ],
  "a": 3,
  "e": "기본 원칙·정의는 전기통신기본법이다. 사업법은 사업자 규제·이용자 보호, 공사업법은 공사·시공, 전파법은 주파수·무선국을 다룬다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 1,
  "q": "정보통신 설비의 시공·설계·감리와 정보통신기술자를 규율하는 법률은?",
  "c": [
   "개인정보보호법",
   "정보통신공사업법",
   "정보통신망법",
   "방송법"
  ],
  "a": 1,
  "e": "공사·설계·감리·기술자는 정보통신공사업법 소관이다. 망법은 망 이용·이용자 보호, 개인정보보호법은 개인정보 처리, 방송법은 방송사업을 다룬다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 2,
  "q": "정보통신기술자 등급을 낮은 것부터 바르게 나열한 것은?",
  "c": [
   "초급 → 고급 → 중급 → 특급",
   "초급 → 중급 → 고급 → 특급",
   "중급 → 초급 → 고급 → 특급",
   "특급 → 고급 → 중급 → 초급"
  ],
  "a": 1,
  "e": "기술자 등급은 초급·중급·고급·특급 순으로 높아진다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 2,
  "q": "국가정보화기본법이 전부개정되면서 바뀐 법률 명칭은?",
  "c": [
   "클라우드컴퓨팅법",
   "지능정보화기본법",
   "전자정부법",
   "정보통신망법"
  ],
  "a": 1,
  "e": "국가정보화기본법은 지능정보화기본법으로 전부개정되었다. 나머지는 별개 법률이다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 2,
  "q": "주파수 대역 UHF의 범위로 옳은 것은?",
  "c": [
   "30MHz ~ 300MHz",
   "300MHz ~ 3GHz",
   "3MHz ~ 30MHz",
   "3GHz ~ 30GHz"
  ],
  "a": 1,
  "e": "UHF는 300MHz~3GHz다. 30~300MHz는 VHF, 3~30GHz는 SHF, 3~30MHz는 HF다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 3,
  "q": "정보통신기사 필기시험의 구성으로 옳은 것은?",
  "c": [
   "5과목·80문항·100분",
   "5과목·100문항·150분",
   "6과목·120문항·180분",
   "4과목·80문항·120분"
  ],
  "a": 1,
  "e": "기본서 기준 정보통신기사 필기는 KCA 시행, 5과목·100문항·150분이다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 1,
  "q": "건물의 주통신실로서 국선 인입과 구내간선이 집중되는 배선반은?",
  "c": [
   "IDF",
   "MDF",
   "인출구",
   "세대단자함"
  ],
  "a": 1,
  "e": "MDF(Main Distribution Frame)가 주통신실이다. IDF는 층통신실, 세대단자함은 세대별, 인출구는 단말 접속점이다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 2,
  "q": "10Gbps 전송을 지원하며 대역폭이 500MHz인 UTP 케이블 규격은?",
  "c": [
   "Cat 6A",
   "Cat 7",
   "Cat 6",
   "Cat 5e"
  ],
  "a": 0,
  "e": "Cat 6A는 10Gbps·500MHz다. Cat 5e는 1Gbps·100MHz, Cat 6는 1Gbps·250MHz, Cat 7은 10Gbps·600MHz(차폐)다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 2,
  "q": "OM1~OM5로 등급이 구분되는 광케이블은?",
  "c": [
   "UTP 케이블",
   "단일모드 광섬유(SMF)",
   "다중모드 광섬유(MMF)",
   "동축 케이블"
  ],
  "a": 2,
  "e": "OM 등급은 다중모드(MMF) 구분이다. SMF는 장거리 간선용으로 OM 등급을 쓰지 않으며, UTP는 Cat 등급, 동축은 별도 규격이다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 2,
  "q": "구내통신선로 중 층통신실(IDF)에서 각 인출구까지 연결하는 배선은?",
  "c": [
   "건물간선",
   "구내간선",
   "수평배선",
   "국선 인입선"
  ],
  "a": 2,
  "e": "IDF↔인출구는 수평배선이다. 건물간선은 건물 사이, 구내간선은 MDF↔IDF, 국선 인입선은 외부 통신망↔MDF 구간이다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 3,
  "q": "전력·통신·피뢰 설비의 접지를 하나로 연결해 설비 간 전위차를 줄이는 접지 방식은?",
  "c": [
   "단독 접지",
   "보호 접지 분리",
   "공통 접지",
   "통합 접지"
  ],
  "a": 3,
  "e": "통합 접지는 전력·통신·피뢰를 모두 하나로 묶는다. 공통 접지는 전력 계통 접지를 공용하는 수준이며, 단독 접지는 설비별로 분리한다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 1,
  "q": "낙뢰·개폐 서지로 인한 과전압으로부터 통신·전원 설비를 보호하는 장치는?",
  "c": [
   "SPD",
   "UPS",
   "DMA",
   "MDF"
  ],
  "a": 0,
  "e": "SPD(Surge Protective Device)가 서지 보호 장치다. UPS는 무정전 전원, MDF는 배선반, DMA는 메모리 전송 방식이다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 3,
  "q": "상용 전원 정전 시 순간 정전을 보상하고 장시간 정전에는 발전기가 이어받도록 구성하는 전원 장치는?",
  "c": [
   "SPD",
   "피뢰침",
   "정류기 없는 직결 회로",
   "UPS"
  ],
  "a": 3,
  "e": "UPS(Uninterruptible Power Supply)가 축전지로 순간 정전을 보상한다. SPD·피뢰침은 서지·낙뢰 보호 장치다."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "주기 신호의 주기 T는 주파수 f의 역수이다.",
  "a": true,
  "e": "T = 1/f이다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "주파수가 높아질수록 전파의 파장은 길어진다.",
  "a": false,
  "e": "λ = c/f이므로 주파수가 높을수록 파장은 짧아진다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "TV·라디오 방송은 단방향(Simplex) 통신의 예이다.",
  "a": true,
  "e": "송신국 → 수신기 한 방향으로만 전달된다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 2,
  "q": "전력비가 2배이면 약 3dB이다.",
  "a": true,
  "e": "10log₁₀2 ≈ 3.01dB이다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 2,
  "q": "UHF 대역은 3~30GHz이다.",
  "a": false,
  "e": "UHF는 300MHz~3GHz이며, 3~30GHz는 SHF이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 1,
  "q": "Baud는 초당 신호 변화(심볼) 수를 의미한다.",
  "a": true,
  "e": "Baud는 변조속도, bps는 데이터 전송속도다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "나이퀴스트 공식 C = 2B·log₂M은 잡음이 있는 채널의 용량을 나타낸다.",
  "a": false,
  "e": "나이퀴스트는 잡음 없는 이상 채널, 잡음 채널은 샤논 공식이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "4진 변조에서 bps는 Baud의 2배이다.",
  "a": true,
  "e": "log₂4 = 2이므로 bps = 2 × Baud이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "SNR 40dB는 신호 전력이 잡음 전력의 400배임을 뜻한다.",
  "a": false,
  "e": "40dB = 10⁴ = 10,000배이다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 3,
  "q": "샤논 용량은 S/N이 2배가 되면 2배가 된다.",
  "a": false,
  "e": "S/N은 로그 안에 있으므로 용량은 2배보다 훨씬 적게 증가한다. 대역폭에는 정비례한다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 1,
  "q": "FM은 AM에 비해 잡음에 강하지만 점유 대역폭이 넓다.",
  "a": true,
  "e": "카슨 법칙 BW ≈ 2(Δf + fm)으로 대역폭이 넓다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "16-QAM은 한 심볼에 4비트를 전송한다.",
  "a": true,
  "e": "log₂16 = 4이다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "PSK는 반송파의 주파수를 바꾸어 정보를 전송한다.",
  "a": false,
  "e": "PSK는 위상을, FSK가 주파수를 바꾼다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "SSB는 DSB에 비해 대역폭이 절반이다.",
  "a": true,
  "e": "SSB 대역폭은 fm, DSB는 2fm이다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 3,
  "q": "DPSK는 수신 측에 기준 위상을 재생하는 동기 검파가 반드시 필요하다.",
  "a": false,
  "e": "DPSK는 이전 심볼과의 위상 차로 판단하므로 기준 위상 재생이 필요 없다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 1,
  "q": "PCM의 첫 단계는 양자화이다.",
  "a": false,
  "e": "첫 단계는 표본화이며, 표본화 → 양자화 → 부호화 → 복호화 순서다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "표본화 주파수가 최고 주파수의 2배 미만이면 에일리어싱이 발생한다.",
  "a": true,
  "e": "나이퀴스트 표본화 조건 fs ≥ 2fmax를 위반한 결과다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "양자화 비트 수가 8비트이면 양자화 레벨 수는 256이다.",
  "a": true,
  "e": "2⁸ = 256이다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "PPM은 펄스의 진폭에 정보를 싣는 펄스 변조이다.",
  "a": false,
  "e": "PPM은 펄스 위치, 진폭은 PAM이다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 3,
  "q": "델타 변조의 스텝 크기를 키우면 입상 잡음과 경사 과부하 잡음이 모두 줄어든다.",
  "a": false,
  "e": "스텝을 키우면 경사 과부하는 줄지만 입상 잡음은 커진다(상충 관계)."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 1,
  "q": "동기식 전송은 블록 단위로 전송하며 SYN 문자나 플래그를 사용한다.",
  "a": true,
  "e": "HDLC는 01111110 플래그를 사용한다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 2,
  "q": "병렬 전송은 직렬 전송보다 장거리 전송에 유리하다.",
  "a": false,
  "e": "병렬은 선간 스큐·비용 문제로 단거리용이며, 장거리는 직렬이 유리하다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 2,
  "q": "B8ZS는 T1 회선에서 연속된 0 8개를 대체하는 선로부호이다.",
  "a": true,
  "e": "E1의 HDB3는 0 4개를 대체한다."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 3,
  "q": "NRZ 부호는 긴 0 또는 1의 연속에서도 클록 동기를 잃지 않는다.",
  "a": false,
  "e": "NRZ는 천이가 없으면 클록 복원이 어려워 동기를 잃을 수 있다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 1,
  "q": "트위스티드 페어는 두 선을 꼬아 누화와 전자기 간섭을 줄인다.",
  "a": true,
  "e": "꼬임으로 유도 잡음이 상쇄된다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "다중모드 광섬유(MMF)는 모드 분산이 없어 장거리 전송에 적합하다.",
  "a": false,
  "e": "모드 분산이 없는 것은 SMF이며, MMF는 단거리용이다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "IEEE 802.11a는 5GHz 대역에서 최대 54Mbps를 지원한다.",
  "a": true,
  "e": "11a는 5GHz·OFDM·54Mbps이다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "Zigbee는 IEEE 802.15.4 기반의 저전력 메시 네트워크 기술이다.",
  "a": true,
  "e": "홈오토메이션·센서망에 쓰인다."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 3,
  "q": "정지궤도 위성은 저궤도 위성보다 전파 지연이 짧다.",
  "a": false,
  "e": "고도 35,786km로 지상-위성-지상 약 0.25초 지연이 생기며, LEO가 훨씬 짧다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 1,
  "q": "FDM은 채널 간 간섭을 막기 위해 보호대역(Guard Band)을 둔다.",
  "a": true,
  "e": "TDM은 보호시간(Guard Time)을 둔다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 2,
  "q": "동기식 TDM은 데이터가 없는 채널에도 타임슬롯을 할당한다.",
  "a": true,
  "e": "고정 할당이므로 슬롯 낭비가 생기며, 이를 통계적 TDM이 개선한다."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 3,
  "q": "OFDM은 PAPR이 낮아 단말 전력 증폭기 효율이 높다.",
  "a": false,
  "e": "OFDM은 PAPR이 높은 것이 단점이며, LTE 상향링크는 이를 줄이려 SC-FDMA를 쓴다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 1,
  "q": "ARQ는 수신 측이 오류를 검출하면 재전송을 요청하는 방식이다.",
  "a": true,
  "e": "BEC(후진 오류 정정)의 대표 방식이다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 2,
  "q": "CRC는 버스트 오류 검출에 약하다.",
  "a": false,
  "e": "CRC는 다항식 나눗셈 기반으로 버스트 오류 검출 능력이 뛰어나다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 2,
  "q": "HARQ는 FEC와 ARQ를 결합한 방식으로 LTE·5G에 사용된다.",
  "a": true,
  "e": "재전송 신호를 결합(Chase Combining 등)해 성공률을 높인다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 1,
  "q": "PC·터미널처럼 데이터를 생성·처리하는 사용자 측 장비를 DTE라 한다.",
  "a": true,
  "e": "DTE는 Data Terminal Equipment로 사용자 측 단말이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 1,
  "q": "CSU는 사용자 측 장비이므로 DTE로 분류된다.",
  "a": false,
  "e": "CSU·DSU·모뎀은 회선 측 종단 장치인 DCE이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "RS-232에서 DTR은 DCE가 동작 준비되었음을 DTE에 알리는 신호이다.",
  "a": false,
  "e": "DTR(Data Terminal Ready)은 DTE 준비 신호이고, DCE 준비는 DSR(Data Set Ready)이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "주파수 분할 다중화(FDM)는 인접 채널 간 간섭을 막기 위해 보호 대역을 둔다.",
  "a": true,
  "e": "FDM은 채널 사이에 Guard Band를 두어 누화를 방지한다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "동기식 TDM은 전송할 데이터가 없는 채널에도 시간 슬롯을 배정한다.",
  "a": true,
  "e": "고정 할당이므로 유휴 채널 슬롯이 낭비된다. 이를 개선한 것이 STDM이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 3,
  "q": "다중화기는 입력 채널 용량의 합이 출력 회선 용량보다 커도 동작하도록 설계된다.",
  "a": false,
  "e": "입력 합 > 출력이 가능한 것은 집중화기이다. 다중화기는 입력 합 = 출력이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 1,
  "q": "모뎀의 수신 측은 아날로그 신호를 디지털 데이터로 복원하는 복조를 수행한다.",
  "a": true,
  "e": "Demodulator 기능이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "DSU는 디지털 데이터를 아날로그 반송파에 실어 전송한다.",
  "a": false,
  "e": "DSU는 디지털↔디지털 변환(베이스밴드)이며 변조는 모뎀의 기능이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "SDSL은 하향 속도가 상향보다 빠른 비대칭형 DSL이다.",
  "a": false,
  "e": "SDSL은 Symmetric DSL로 상·하향 속도가 같은 대칭형이다. 비대칭형은 ADSL·VDSL이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "V.90 모뎀은 상향과 하향 모두 56kbps를 제공한다.",
  "a": false,
  "e": "V.90은 하향 56kbps·상향 33.6kbps의 비대칭이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 3,
  "q": "CSU는 T1/E1 디지털 회선의 루프백 시험 등 회선 진단 기능을 제공한다.",
  "a": true,
  "e": "CSU는 회선 종단·보호·진단을 담당한다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 1,
  "q": "브리지는 IP 주소를 이용해 프레임을 필터링한다.",
  "a": false,
  "e": "브리지는 L2 장비로 MAC 주소를 학습·필터링한다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "Cut-Through 방식은 Store-and-Forward 방식보다 전달 지연이 짧다.",
  "a": true,
  "e": "목적지 MAC만 읽고 즉시 전달하므로 지연이 가장 짧다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "VTP는 L2 루프를 방지하기 위해 일부 포트를 차단하는 프로토콜이다.",
  "a": false,
  "e": "루프 방지는 STP이며 VTP는 VLAN 정보 동기화 프로토콜이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "VLAN이 서로 다른 호스트 간 통신에는 L3 장비의 라우팅이 필요하다.",
  "a": true,
  "e": "VLAN은 별도 브로드캐스트 도메인(서브넷)이므로 라우터 또는 L3 스위치가 필요하다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 3,
  "q": "RSTP는 IEEE 802.1w로 표준화되어 기존 STP보다 수렴 속도가 빠르다.",
  "a": true,
  "e": "RSTP(802.1w)는 빠른 수렴, MSTP(802.1s)는 VLAN 그룹별 다중 트리이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 3,
  "q": "10Mbps 이더넷의 5-4-3 규칙에서 '4'는 사용자가 연결된 세그먼트 수를 뜻한다.",
  "a": false,
  "e": "5는 세그먼트, 4는 리피터 수, 3은 사용자(호스트) 연결 세그먼트 수이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 1,
  "q": "라우터는 브로드캐스트 도메인을 분리한다.",
  "a": true,
  "e": "라우터는 브로드캐스트를 다른 인터페이스로 전달하지 않는다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "OSPF는 홉 수만을 메트릭으로 사용하며 최대 15홉으로 제한된다.",
  "a": false,
  "e": "홉 수·15홉 제한은 RIP이며 OSPF는 대역폭 기반 Cost를 사용한다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "BGP는 UDP 179 포트를 사용해 이웃과 세션을 맺는다.",
  "a": false,
  "e": "BGP는 신뢰성 있는 TCP 179를 사용한다. UDP 520은 RIP이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "L4 스위치는 TCP/UDP 포트 정보를 기반으로 서버 부하를 분산한다.",
  "a": true,
  "e": "L4 스위치는 포트·프로토콜 기반 로드밸런서이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 3,
  "q": "EIGRP와 IS-IS는 모두 AS 간 라우팅에 쓰이는 EGP이다.",
  "a": false,
  "e": "EIGRP·IS-IS는 AS 내부의 IGP이며 EGP는 BGP이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 1,
  "q": "회선 교환 방식은 호 설정·데이터 전송·호 해제의 3단계를 거친다.",
  "a": true,
  "e": "회선 교환의 기본 절차이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "메시지 교환은 메시지 길이에 제한이 없어 실시간 대화형 통신에 적합하다.",
  "a": false,
  "e": "메시지 전체를 축적 후 전달하므로 지연이 커서 실시간 통신에 부적합하다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "가상 회선 방식은 패킷이 송신 순서대로 도착하도록 보장한다.",
  "a": true,
  "e": "동일 논리 경로를 사용하므로 순서가 보장된다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "ATM 셀의 정보(페이로드) 필드 길이는 53바이트이다.",
  "a": false,
  "e": "셀 전체가 53바이트이고 페이로드는 48바이트, 헤더는 5바이트이다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 3,
  "q": "데이터그램 방식은 경로 중 한 노드가 고장 나도 다른 경로로 우회할 수 있어 장애에 유연하다.",
  "a": true,
  "e": "패킷마다 경로를 독립 결정하므로 장애 우회가 쉽다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 1,
  "q": "RTP는 실시간 음성·영상 전송에 주로 UDP를 사용한다.",
  "a": true,
  "e": "재전송 지연을 피하기 위해 UDP 위에서 동작한다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "SIP의 REGISTER 메서드는 사용자의 현재 위치(주소)를 서버에 등록한다.",
  "a": true,
  "e": "Registrar 서버에 위치를 등록한다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "H.323은 IETF가 제정한 텍스트 기반 프로토콜이다.",
  "a": false,
  "e": "H.323은 ITU-T의 바이너리(ASN.1) 규격이다. 텍스트 기반 IETF 표준은 SIP이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 3,
  "q": "RTP 헤더의 순서번호와 타임스탬프는 패킷 재정렬과 지터 보정에 활용된다.",
  "a": true,
  "e": "수신 측 지터 버퍼가 이를 이용해 재생 시점을 맞춘다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 2,
  "q": "Type 2 하이퍼바이저는 호스트 OS 위에서 실행되므로 Type 1보다 오버헤드가 크다.",
  "a": true,
  "e": "호스트 OS를 한 번 더 거치므로 성능 손실이 크다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 3,
  "q": "MTTR이 길어질수록 시스템 가용도는 높아진다.",
  "a": false,
  "e": "가용도 = MTBF ÷ (MTBF + MTTR)이므로 MTTR이 길어지면 가용도는 낮아진다."
 },
 {
  "s": "s2",
  "t": "스토리지·RAID",
  "d": 2,
  "q": "RAID 0은 스트라이핑으로 성능은 높지만 디스크 1개만 고장 나도 데이터를 잃는다.",
  "a": true,
  "e": "RAID 0은 중복(패리티·미러)이 없다."
 },
 {
  "s": "s2",
  "t": "스토리지·RAID",
  "d": 2,
  "q": "SAN은 파일 단위로 접근하며 NFS 프로토콜을 주로 사용한다.",
  "a": false,
  "e": "SAN은 블록 단위(FC·iSCSI)이며 NFS는 NAS 프로토콜이다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 1,
  "q": "OSI 7계층에서 스위치는 2계층, 라우터는 3계층 장비이다.",
  "a": true,
  "e": "스위치는 MAC(L2), 라우터는 IP(L3) 기반으로 전달한다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 1,
  "q": "OSI 네트워크 계층의 PDU는 프레임(Frame)이다.",
  "a": false,
  "e": "네트워크 계층은 패킷, 프레임은 데이터링크 계층 단위다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 2,
  "q": "TCP/IP 모델의 네트워크 접근 계층은 OSI의 물리 계층과 데이터링크 계층에 대응한다.",
  "a": true,
  "e": "네트워크 접근(Link) 계층 = OSI L1·L2."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 2,
  "q": "캡슐화는 하위 계층에서 상위 계층으로 올라가며 헤더를 제거하는 과정이다.",
  "a": false,
  "e": "그것은 역캡슐화다. 캡슐화는 상위→하위로 헤더를 추가한다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 1,
  "q": "TCP는 연결형 프로토콜로 순서 보장과 흐름 제어 기능을 제공한다.",
  "a": true,
  "e": "TCP는 연결형·신뢰성·순서·흐름·혼잡 제어를 제공한다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 1,
  "q": "UDP는 확인응답과 재전송 기능을 기본으로 제공한다.",
  "a": false,
  "e": "UDP는 비연결형으로 확인응답·재전송이 없다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "TCP 연결 종료는 FIN과 ACK를 주고받는 4단계 과정으로 이루어진다.",
  "a": true,
  "e": "FIN·ACK·FIN·ACK의 4-way Handshake다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "TCP Slow Start 단계에서 혼잡 윈도는 RTT마다 1 MSS씩 선형으로 증가한다.",
  "a": false,
  "e": "Slow Start는 지수 증가, 선형 증가는 Congestion Avoidance다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 3,
  "q": "TCP 포트 번호 필드는 16bit이므로 0~65535 범위를 가진다.",
  "a": true,
  "e": "2^16 = 65,536개 포트(0~65535)."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 1,
  "q": "127.0.0.1은 자기 자신을 가리키는 루프백 주소이다.",
  "a": true,
  "e": "127.0.0.0/8은 루프백용으로 예약되어 있다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "B 클래스 IPv4 주소의 첫 옥텟 범위는 128~223이다.",
  "a": false,
  "e": "B는 128~191이며 192~223은 C 클래스다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "/28 서브넷의 사용 가능 호스트 수는 16대이다.",
  "a": false,
  "e": "2^4 − 2 = 14대. 16은 주소 수다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 3,
  "q": "IPv4 헤더의 IHL 값이 6이면 헤더 길이는 24바이트이다.",
  "a": true,
  "e": "IHL은 4바이트 단위 → 6×4 = 24바이트(옵션 4바이트 포함)."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "ICMP는 IPv4 헤더 Protocol 필드 값 17로 식별된다.",
  "a": false,
  "e": "ICMP=1, TCP=6, UDP=17이다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 3,
  "q": "traceroute는 TTL 값을 1부터 늘려 가며 ICMP Time Exceeded 응답으로 경로상 라우터를 확인한다.",
  "a": true,
  "e": "TTL이 0이 되는 라우터가 Time Exceeded를 돌려보내는 원리를 이용한다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 1,
  "q": "스타형 토폴로지는 중앙 허브(스위치)에 장애가 나면 전체 통신이 마비된다.",
  "a": true,
  "e": "스타형은 중앙 장비가 단일 장애점이다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "Ethernet 프레임의 FCS는 CRC-32를 사용해 오류를 검출한다.",
  "a": true,
  "e": "FCS 4바이트는 CRC-32 값이다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "ATM 셀은 헤더 5바이트와 페이로드 53바이트로 이루어진 58바이트 고정 길이이다.",
  "a": false,
  "e": "ATM 셀은 헤더 5바이트 + 페이로드 48바이트 = 53바이트다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 3,
  "q": "Frame Relay는 회선을 식별하기 위해 라벨(Label) 값을 사용하며 이를 LSP라고 한다.",
  "a": false,
  "e": "Frame Relay는 DLCI로 가상 회선을 식별한다. 라벨·LSP는 MPLS 용어다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 1,
  "q": "SMTP는 메일 송신에 사용되며 기본 포트는 25번이다.",
  "a": true,
  "e": "SMTP는 TCP 25번이다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 2,
  "q": "DHCP 클라이언트는 UDP 67번, 서버는 UDP 68번 포트를 사용한다.",
  "a": false,
  "e": "서버 67, 클라이언트 68이다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 2,
  "q": "HTTPS는 HTTP에 TLS 암호화를 결합한 것으로 기본 포트는 80이다.",
  "a": false,
  "e": "HTTPS 기본 포트는 443이며 80은 HTTP다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 3,
  "q": "DNS의 영역 전송(Zone Transfer)은 신뢰성을 위해 TCP 53번을 사용한다.",
  "a": true,
  "e": "대용량 영역 전송은 TCP 53을 쓴다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 1,
  "q": "1세대(1G) 이동통신은 디지털 방식으로 SMS를 처음 지원했다.",
  "a": false,
  "e": "1G(AMPS)는 아날로그 음성, SMS는 2G부터다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 2,
  "q": "mMTC는 단위 면적당 대규모 IoT 기기 연결을 목표로 하는 5G 시나리오이다.",
  "a": true,
  "e": "massive Machine Type Communication."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 2,
  "q": "LTE-A의 캐리어 어그리게이션은 여러 주파수 대역(컴포넌트 캐리어)을 묶어 전송 속도를 높인다.",
  "a": true,
  "e": "CA는 대역폭 확장 기술이다."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 3,
  "q": "LTE EPC에서 외부 패킷망(PDN)과의 연결과 단말 IP 할당은 HSS가 담당한다.",
  "a": false,
  "e": "외부망 연결·IP 할당은 P-GW, HSS는 가입자 정보 DB다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 2,
  "q": "저궤도(LEO) 위성은 정지궤도(GEO) 위성보다 전파 지연이 크다.",
  "a": false,
  "e": "LEO는 고도가 낮아(500~2,000km) 지연이 작다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 2,
  "q": "Zigbee는 IEEE 802.15.4를 기반으로 하는 저전력 메시 네트워크 기술이다.",
  "a": true,
  "e": "Zigbee 물리·MAC은 802.15.4다."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 3,
  "q": "WEP는 AES-CCMP를 사용해 현재도 안전한 무선 보안 방식으로 권장된다.",
  "a": false,
  "e": "WEP는 RC4 기반으로 취약하다. AES-CCMP는 WPA2다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 1,
  "q": "IPv6는 브로드캐스트 주소를 사용하지 않는다.",
  "a": true,
  "e": "멀티캐스트·애니캐스트로 대체되었다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "IPv6 링크 로컬 주소는 FE80::/10 대역을 사용한다.",
  "a": true,
  "e": "Link-Local = FE80::/10."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "IntServ는 DSCP 마킹으로 클래스별 처리를 하므로 대규모 망에서 확장성이 높다.",
  "a": false,
  "e": "설명은 DiffServ다. IntServ는 RSVP로 흐름별 예약을 해 확장성이 낮다."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 3,
  "q": "NFV의 MANO는 VNF와 NFV 인프라의 수명주기·자원을 관리·조정하는 프레임워크이다.",
  "a": true,
  "e": "MANO = NFVO·VNFM·VIM으로 구성된 관리·오케스트레이션."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "MQTT는 UDP 기반의 RESTful 요청·응답 프로토콜이다.",
  "a": false,
  "e": "MQTT는 TCP 기반 Pub/Sub(브로커) 방식이다. UDP·RESTful은 CoAP다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 1,
  "q": "SLA는 서비스 공급자와 고객 사이에 서비스 수준, 측정 지표, 위반 시 보상을 정한 약정이다.",
  "a": true,
  "e": "SLA는 공급자↔고객 간 서비스 수준 약정으로 지표·페널티·보상을 포함한다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 2,
  "q": "OLA는 IT 조직이 외부 공급업체와 체결하는 계약이다.",
  "a": false,
  "e": "OLA는 내부 부서 간 약정이다. 외부 공급업체와의 계약은 UC(Underpinning Contract)다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 2,
  "q": "Incident Management의 1차 목표는 근본 원인 규명보다 서비스를 가능한 빨리 정상화하는 것이다.",
  "a": true,
  "e": "Incident는 신속 복구(워크어라운드 포함), 근본 원인 규명은 Problem Management의 몫이다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 1,
  "q": "교착상태 4조건 중 하나라도 성립하지 않게 하면 교착상태를 예방할 수 있다.",
  "a": true,
  "e": "교착상태는 4조건이 동시에 성립할 때만 발생하므로 하나를 부정하면 예방된다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "세마포어는 0과 1 값만 가질 수 있어 하나의 자원만 보호할 수 있다.",
  "a": false,
  "e": "카운팅 세마포어는 N개의 자원을 관리할 수 있다. 0/1만 쓰는 것은 이진 세마포어(뮤텍스와 유사)다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "OPT 페이지 교체는 앞으로 가장 오랫동안 사용되지 않을 페이지를 교체하지만 미래 참조를 알아야 해 실제 구현이 어렵다.",
  "a": true,
  "e": "OPT(Belady)는 이론적 최적이지만 구현 불가로 다른 알고리즘의 비교 기준으로 쓴다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 1,
  "q": "VirtualBox처럼 호스트 OS 위에 설치되는 하이퍼바이저는 Type 1(Bare-metal)이다.",
  "a": false,
  "e": "호스트 OS 위에 설치되는 것은 Type 2(Hosted)다. Type 1은 ESXi·Xen처럼 하드웨어에 직접 설치된다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "반가상화(Para-virtualization)는 게스트 OS 커널을 수정해 하이퍼콜로 하이퍼바이저와 통신한다.",
  "a": true,
  "e": "반가상화는 게스트 커널 수정이 필요하고, 전가상화는 게스트를 수정하지 않는다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "컨테이너는 가상머신처럼 컨테이너마다 독립된 게스트 OS 커널을 탑재한다.",
  "a": false,
  "e": "컨테이너는 호스트 커널을 공유하고 Namespace·cgroup으로 격리·제한한다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 1,
  "q": "기밀성은 인가되지 않은 사람이 정보를 볼 수 없도록 하는 것으로 주로 암호화로 보장한다.",
  "a": true,
  "e": "기밀성의 대표 수단은 암호화와 접근 통제다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 2,
  "q": "대칭키 암호는 공개키 암호보다 처리 속도가 느리지만 키 분배 문제가 없다.",
  "a": false,
  "e": "대칭키는 공개키보다 빠르지만 키 분배 문제가 있다. 반대로 서술되었다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 2,
  "q": "Diffie-Hellman은 안전하지 않은 채널에서 두 당사자가 공유 비밀키를 합의하는 데 쓰인다.",
  "a": true,
  "e": "DH는 이산대수 문제에 기반한 키 교환(합의) 알고리즘이다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 1,
  "q": "해시 함수는 출력값으로부터 원래 입력을 복원할 수 있는 양방향 함수이다.",
  "a": false,
  "e": "해시는 일방향 함수로 출력에서 입력을 복원할 수 없다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 2,
  "q": "HMAC은 비밀키와 해시 함수를 결합해 메시지 무결성과 출처 인증을 함께 제공한다.",
  "a": true,
  "e": "HMAC은 키 기반 MAC으로 무결성과 송신자 인증을 제공한다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 3,
  "q": "AES는 64비트 블록에 56비트 키를 사용하는 대칭키 알고리즘이다.",
  "a": false,
  "e": "64비트 블록·56비트 키는 DES다. AES는 128비트 블록에 128/192/256비트 키를 쓴다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "IDS는 미러링된 트래픽을 분석하는 Passive 방식이라 일반적으로 공격 패킷을 직접 차단하지 못한다.",
  "a": true,
  "e": "IDS는 탐지·경보, Inline 차단은 IPS의 역할이다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "오용(Signature) 탐지는 알려지지 않은 제로데이 공격 탐지에 가장 유리하다.",
  "a": false,
  "e": "시그니처가 없는 신종 공격은 이상(Anomaly) 탐지가 유리하다. 오용 탐지는 알려진 공격에 오탐이 적다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "IPsec ESP는 페이로드 암호화로 기밀성을 제공하며 인증 기능도 선택적으로 제공한다.",
  "a": true,
  "e": "ESP는 암호화+선택적 무결성·인증을 제공한다. AH는 암호화가 없다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 3,
  "q": "IPsec Transport 모드는 원래 IP 헤더까지 암호화한 뒤 새 IP 헤더를 붙인다.",
  "a": false,
  "e": "원 IP 헤더까지 감싸고 새 헤더를 붙이는 것은 Tunnel 모드다. Transport 모드는 원래 IP 헤더를 유지한다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 1,
  "q": "웜(Worm)은 숙주 파일 없이 스스로 복제해 네트워크로 전파된다.",
  "a": true,
  "e": "바이러스는 숙주 파일에 기생하고, 웜은 독립적으로 자기 복제·전파한다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "스미싱은 음성 전화를 이용해 금융 정보를 빼내는 사회공학 공격이다.",
  "a": false,
  "e": "음성 전화는 비싱(Vishing), 스미싱(Smishing)은 SMS 문자 메시지를 이용한다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "SSRF는 서버가 공격자가 지정한 내부 자원(내부 IP·메타데이터 주소 등)으로 요청을 보내도록 유도하는 공격이다.",
  "a": true,
  "e": "SSRF(Server-Side Request Forgery)는 서버를 경유해 내부망 자원에 접근한다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 1,
  "q": "MTBF가 같을 때 MTTR을 줄이면 가용률은 높아진다.",
  "a": true,
  "e": "A = MTBF/(MTBF+MTTR)에서 MTTR이 작아지면 분모가 줄어 A가 커진다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 2,
  "q": "가용률 99.99%의 연간 허용 다운타임은 약 8.76시간이다.",
  "a": false,
  "e": "99.99%는 연 약 52.6분이다. 8.76시간은 99.9%의 값이다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 3,
  "q": "RAID 5는 패리티를 분산 저장해 디스크 1개 고장까지 데이터를 유지한다.",
  "a": true,
  "e": "RAID 5는 분산 패리티 1개로 단일 디스크 장애를 허용하며, 2개 장애 허용은 RAID 6이다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 2,
  "q": "RAID 0은 미러링 방식이라 디스크 1개가 고장 나도 데이터를 보호한다.",
  "a": false,
  "e": "RAID 0은 스트라이핑만 하며 장애 허용이 없다. 미러링은 RAID 1이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 1,
  "q": "RPO는 재해 시 허용 가능한 데이터 손실 시점(구간)을 나타내는 목표이다.",
  "a": true,
  "e": "RPO는 '어느 시점까지의 데이터로 복구하는가'로 데이터 손실 허용치를 뜻한다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 2,
  "q": "차등 백업은 직전 백업 이후 변경분만 저장하므로 복구 시 모든 차등 백업을 순서대로 적용해야 한다.",
  "a": false,
  "e": "설명은 증분 백업이다. 차등 백업은 마지막 전체 백업 이후 변경분을 누적하므로 전체 + 최신 차등 1개로 복구한다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 2,
  "q": "Cold Site는 기본 시설만 갖춰 비용이 가장 낮지만 복구에 가장 오랜 시간이 걸린다.",
  "a": true,
  "e": "Cold Site는 공간·전원·공조만 있어 장비 반입·설치가 필요하다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 1,
  "q": "Scale-Up은 서버 대수를 늘려 처리량을 높이는 수평 확장 방식이다.",
  "a": false,
  "e": "대수를 늘리는 수평 확장은 Scale-Out이다. Scale-Up은 한 대의 성능을 높이는 수직 확장이다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "SNMP GetNext는 지정한 OID의 다음 객체 값을 요청해 MIB 테이블 순회에 쓰인다.",
  "a": true,
  "e": "GetNext는 사전순 다음 OID를 반환해 MIB 워크(테이블 순회)에 쓰인다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "FCAPS의 C는 Capacity(용량 관리)를 뜻한다.",
  "a": false,
  "e": "C는 Configuration(구성 관리)이다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 2,
  "q": "Syslog 심각도 값은 숫자가 클수록 더 심각한 이벤트를 뜻한다.",
  "a": false,
  "e": "0(Emergency)이 가장 심각하고 7(Debug)이 가장 낮다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 2,
  "q": "Continuous Deployment는 테스트를 통과한 변경을 사람의 승인 없이 운영 환경까지 자동 배포한다.",
  "a": true,
  "e": "Continuous Delivery는 운영 반영에 승인이 필요하고, Continuous Deployment는 운영까지 자동이다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 3,
  "q": "Terraform은 대상 서버마다 에이전트를 설치해 Pull 방식으로 구성을 적용하는 절차형 도구이다.",
  "a": false,
  "e": "Terraform은 선언형(HCL)으로 인프라를 프로비저닝하며 에이전트가 필요 없다. 에이전트 기반 Pull은 Puppet·Chef의 특징이다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "IR(명령어 레지스터)은 현재 실행 중인 명령어를 보관한다.",
  "a": true,
  "e": "IR은 인출된 현재 명령어를 보관한다. 다음 명령어 주소는 PC."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "MAR은 메모리에서 읽어 온 데이터 자체를 저장한다.",
  "a": false,
  "e": "데이터는 MDR, MAR은 접근할 주소를 저장한다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "k단계 파이프라인에서 n개 명령어를 해저드 없이 처리하면 k + n − 1 사이클이 걸린다.",
  "a": true,
  "e": "첫 명령이 k사이클 후 완료되고 이후 매 사이클 1개씩 완료된다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "분기 예측은 구조적 해저드를 해결하기 위한 기법이다.",
  "a": false,
  "e": "분기 예측은 제어 해저드 대책이다. 구조적 해저드는 자원 중복으로 해결한다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "CISC는 가변 길이 명령어를 사용하며 x86이 대표적이다.",
  "a": true,
  "e": "CISC = 많은 명령·가변 길이·x86."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 3,
  "q": "MIMD는 여러 프로세서가 서로 다른 명령어로 서로 다른 데이터를 처리하는 구조다.",
  "a": true,
  "e": "멀티코어·멀티프로세서가 MIMD에 해당한다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "8비트 2의 보수 표현의 수 범위는 −127 ~ +127이다.",
  "a": false,
  "e": "2의 보수 8비트 범위는 −128 ~ +127이다. −127 ~ +127은 1의 보수·부호-크기 표현."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 1,
  "q": "기억장치 계층에서 아래(보조기억)로 갈수록 비트당 가격이 비싸진다.",
  "a": false,
  "e": "위로 갈수록 비싸다. 아래로 갈수록 느리고 크고 싸다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "Write-Through 방식은 캐시와 주기억장치의 일관성 유지에 유리하다.",
  "a": true,
  "e": "쓰기마다 동시에 기록하므로 일관성이 높지만 쓰기 트래픽이 많다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "완전 연관 사상은 블록이 캐시의 정해진 한 라인에만 들어갈 수 있다.",
  "a": false,
  "e": "정해진 한 라인은 직접 사상. 완전 연관은 어느 라인에나 배치 가능."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "FIFO 페이지 교체에서는 프레임 수를 늘려도 페이지 부재가 증가할 수 있다.",
  "a": true,
  "e": "벨레이디 모순(Belady's Anomaly)이다. LRU·OPT에서는 발생하지 않는다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "EPROM은 전기 신호로 내용을 지운다.",
  "a": false,
  "e": "EPROM은 자외선으로 소거, 전기 소거는 EEPROM."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "DMA 전송이 끝나면 DMA 제어기는 인터럽트로 CPU에 완료를 알린다.",
  "a": true,
  "e": "전송 중에는 CPU가 개입하지 않고, 완료 시 인터럽트로 통보한다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "주소 버스는 데이터 버스와 마찬가지로 양방향으로 동작한다.",
  "a": false,
  "e": "주소 버스는 CPU → 메모리·I/O 단방향, 데이터 버스가 양방향."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 1,
  "q": "큐는 먼저 들어온 데이터가 먼저 나가는 FIFO 구조다.",
  "a": true,
  "e": "Enqueue로 넣고 Dequeue로 꺼낸다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "퀵 정렬은 최악의 경우에도 O(n log n)을 보장한다.",
  "a": false,
  "e": "피벗 선택이 나쁘면 O(n²). 최악 n log n 보장은 병합·힙 정렬."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "이진 탐색은 데이터가 정렬되어 있어야 적용할 수 있다.",
  "a": true,
  "e": "중간값 비교로 범위를 반씩 줄이므로 정렬이 전제다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "다익스트라 알고리즘은 음수 가중치 간선이 있어도 항상 올바른 최단경로를 구한다.",
  "a": false,
  "e": "음수 가중치에서는 오답이 날 수 있다. 음수 간선은 벨만-포드 등을 사용."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 3,
  "q": "힙 정렬은 최악의 경우에도 O(n log n)이다.",
  "a": true,
  "e": "힙 구성 O(n) + n번 삭제 O(log n)으로 최악도 n log n."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 1,
  "q": "스레드는 같은 프로세스 내 다른 스레드와 코드·데이터 영역을 공유한다.",
  "a": true,
  "e": "스택·레지스터만 스레드별로 따로 가진다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 2,
  "q": "SJF 스케줄링은 기아(Starvation) 현상이 발생하지 않는다.",
  "a": false,
  "e": "실행시간이 긴 작업이 계속 밀려 기아가 발생할 수 있다. HRRN·에이징으로 완화."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 2,
  "q": "교착상태의 4가지 필요조건 중 하나라도 성립하지 않게 하면 교착상태를 예방할 수 있다.",
  "a": true,
  "e": "예방(Prevention) 기법의 원리다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 3,
  "q": "FCFS는 선점형 스케줄링 기법이다.",
  "a": false,
  "e": "FCFS는 비선점형이다. 선점형은 RR·SRT 등."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 1,
  "q": "기본키는 NULL 값을 가질 수 없다.",
  "a": true,
  "e": "개체 무결성 제약 조건이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "TRUNCATE 명령은 DML에 속한다.",
  "a": false,
  "e": "TRUNCATE는 DDL이다. 행 삭제 DML은 DELETE."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "BCNF는 모든 결정자가 후보키인 정규형이다.",
  "a": true,
  "e": "3NF를 강화한 형태다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "LEFT OUTER JOIN은 왼쪽 테이블의 행 중 일치하지 않는 행을 결과에서 제외한다.",
  "a": false,
  "e": "일치하지 않는 왼쪽 행도 보존하고 오른쪽 값은 NULL로 채운다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 3,
  "q": "Serializable 격리수준에서는 Phantom Read가 발생하지 않는다.",
  "a": true,
  "e": "가장 높은 격리수준으로 직렬 실행과 같은 결과를 보장한다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 3,
  "q": "NoSQL의 BASE 모델은 즉시적인 강한 일관성을 기본으로 한다.",
  "a": false,
  "e": "BASE는 결과적 일관성(Eventual Consistency). 강한 일관성은 ACID."
 },
 {
  "s": "s5",
  "t": "SW 공학",
  "d": 1,
  "q": "폭포수 모델은 각 단계를 순차적으로 진행하며 문서 중심이다.",
  "a": true,
  "e": "단계 종료 후 다음 단계로 넘어가는 순차 모델이다."
 },
 {
  "s": "s5",
  "t": "SW 공학",
  "d": 2,
  "q": "Observer 패턴은 GoF 구조(Structural) 패턴에 속한다.",
  "a": false,
  "e": "Observer는 행위(Behavioral) 패턴이다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 2,
  "q": "전기통신사업법은 전기통신사업자 규제와 이용자 보호를 주로 다룬다.",
  "a": true,
  "e": "기본 원칙·정의는 전기통신기본법이 담당한다."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 1,
  "q": "IDF는 건물 전체의 주통신실 역할을 하는 주배선반이다.",
  "a": false,
  "e": "주통신실은 MDF, IDF는 층통신실(중간배선반)."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 2,
  "q": "Cat 6 케이블의 대역폭은 250MHz이다.",
  "a": true,
  "e": "Cat 6는 1Gbps·250MHz, Cat 6A가 10Gbps·500MHz."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 2,
  "q": "구내통신선로설비에서 세대단자함은 각 세대마다 1개 이상 설치한다.",
  "a": true,
  "e": "기본서 기준 각 세대마다 1개 이상."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 1,
  "q": "주파수 f와 주기 T의 관계식은?",
  "a": "T = 1/f",
  "k": [
   "T=1/f",
   "1/f",
   "역수"
  ],
  "e": "주기는 주파수의 역수다."
 },
 {
  "s": "s1",
  "t": "신호·전송 기초",
  "d": 2,
  "q": "1mW를 기준으로 한 절대 전력 단위로, 1W가 30이 되는 단위는?",
  "a": "dBm",
  "k": [
   "dBm",
   "디비엠"
  ],
  "e": "dBm = 10log₁₀(P/1mW)."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 1,
  "q": "잡음이 있는 채널의 최대 전송용량을 C = B·log₂(1+S/N)으로 나타낸 정리는?",
  "a": "샤논 정리",
  "k": [
   "샤논",
   "Shannon",
   "섀넌",
   "하틀리"
  ],
  "e": "샤논-하틀리 정리라고도 한다."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "bps와 Baud의 관계식에서 신호 레벨 수가 M일 때 bps는?",
  "a": "Baud × log₂M",
  "k": [
   "log2M",
   "log₂M",
   "Baud×log2M",
   "Baud*log2(M)"
  ],
  "e": "M=4이면 bps = 2 × Baud."
 },
 {
  "s": "s1",
  "t": "전송속도·채널용량",
  "d": 2,
  "q": "SNR 20dB를 배수로 환산하면?",
  "a": "100",
  "k": [
   "100",
   "100배"
  ],
  "e": "10^(20/10) = 100."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 1,
  "q": "진폭과 위상을 함께 변화시키는 디지털 변조 방식의 약어는?",
  "a": "QAM",
  "k": [
   "QAM",
   "직교 진폭 변조",
   "Quadrature Amplitude Modulation"
  ],
  "e": "16/64/256-QAM 등."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "64-QAM의 심볼당 비트 수는?",
  "a": "6",
  "k": [
   "6",
   "6비트",
   "6bit"
  ],
  "e": "log₂64 = 6."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "FM 대역폭을 2(Δf + fm)으로 근사하는 법칙은?",
  "a": "카슨 법칙",
  "k": [
   "카슨",
   "Carson"
  ],
  "e": "Δf는 최대 주파수 편이, fm은 최고 변조 주파수."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 3,
  "q": "AM에서 한쪽 측파대만 전송해 대역폭을 DSB의 절반으로 줄인 방식은?",
  "a": "SSB",
  "k": [
   "SSB",
   "단측파대",
   "Single Side Band"
  ],
  "e": "대역폭 fm, 전력 효율 우수."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 1,
  "q": "PCM에서 연속 신호를 일정 시간 간격으로 추출하는 첫 단계는?",
  "a": "표본화",
  "k": [
   "표본화",
   "샘플링",
   "Sampling"
  ],
  "e": "fs ≥ 2fmax를 만족해야 한다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "표본화 주파수가 2fmax보다 낮을 때 스펙트럼이 겹쳐 생기는 왜곡은?",
  "a": "에일리어싱",
  "k": [
   "에일리어싱",
   "Aliasing",
   "겹침 왜곡",
   "앨리어싱"
  ],
  "e": "저역통과 필터(앤티에일리어싱 필터)로 대역 제한한다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 2,
  "q": "표본값을 유한 개 레벨로 근사할 때 생기는 오차성 잡음은?",
  "a": "양자화 잡음",
  "k": [
   "양자화 잡음",
   "양자화 오차",
   "Quantization Noise"
  ],
  "e": "비트 수를 늘리거나 압신으로 줄인다."
 },
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 3,
  "q": "인접 표본 간 차이를 1비트로 부호화하는 펄스 변조 방식의 약어는?",
  "a": "DM",
  "k": [
   "DM",
   "델타 변조",
   "Delta Modulation"
  ],
  "e": "경사 과부하·입상 잡음이 단점."
 },
 {
  "s": "s1",
  "t": "동기·전송방식·선로부호",
  "d": 2,
  "q": "비트 중간에 반드시 천이가 있어 클록 정보를 함께 보내며 10BASE-T에 쓰인 선로부호는?",
  "a": "맨체스터 부호",
  "k": [
   "맨체스터",
   "Manchester"
  ],
  "e": "대역폭이 NRZ의 약 2배."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 1,
  "q": "광섬유에서 빛이 코어 밖으로 나가지 않고 진행하게 하는 원리는?",
  "a": "전반사",
  "k": [
   "전반사",
   "Total Internal Reflection",
   "TIR"
  ],
  "e": "코어 굴절률 > 클래딩 굴절률."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "Wi-Fi 6에 해당하는 IEEE 표준 명칭은?",
  "a": "802.11ax",
  "k": [
   "802.11ax",
   "11ax",
   "ax"
  ],
  "e": "OFDMA·1024QAM 도입."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 2,
  "q": "하나의 광섬유에 여러 파장을 실어 채널을 늘리는 다중화 기법의 약어는?",
  "a": "WDM",
  "k": [
   "WDM",
   "파장 분할 다중화",
   "Wavelength Division Multiplexing"
  ],
  "e": "CWDM·DWDM으로 구분."
 },
 {
  "s": "s1",
  "t": "다중화·다중접속",
  "d": 3,
  "q": "OFDM에서 다중경로에 의한 심볼 간 간섭을 막으려 심볼 앞에 붙이는 구간은?",
  "a": "순환 전치",
  "k": [
   "순환 전치",
   "CP",
   "Cyclic Prefix",
   "보호구간",
   "Guard Interval"
  ],
  "e": "심볼 끝부분을 복사해 앞에 붙인다."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 2,
  "q": "두 부호어 사이에서 서로 다른 비트의 개수를 무엇이라 하는가?",
  "a": "해밍 거리",
  "k": [
   "해밍 거리",
   "Hamming Distance"
  ],
  "e": "검출 d−1, 정정 ⌊(d−1)/2⌋."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 3,
  "q": "FEC와 ARQ를 결합해 재전송 신호를 합성 복호하는 LTE·5G 오류 제어 방식은?",
  "a": "HARQ",
  "k": [
   "HARQ",
   "하이브리드 ARQ",
   "Hybrid ARQ"
  ],
  "e": "Chase Combining·Incremental Redundancy."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 1,
  "q": "모뎀·DSU·CSU처럼 통신 회선 측에서 신호를 변환·종단하는 장치를 무엇이라 하는가?",
  "a": "DCE",
  "k": [
   "DCE",
   "데이터 회선 종단 장치",
   "Data Circuit-terminating Equipment",
   "Data Communication Equipment"
  ],
  "e": "DCE는 회선 측, DTE는 사용자 측 장비이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "RS-232에서 DCE가 DTE에게 송신을 허가하는 신호의 약어는?",
  "a": "CTS",
  "k": [
   "CTS",
   "Clear To Send",
   "송신 허가"
  ],
  "e": "RTS(송신 요구)에 대한 응답이 CTS이다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "데이터가 있는 채널에만 시간 슬롯을 동적으로 할당하는 다중화 방식은?",
  "a": "통계적 시분할 다중화",
  "k": [
   "통계적 시분할 다중화",
   "STDM",
   "통계적 TDM",
   "비동기식 TDM",
   "지능형 TDM"
  ],
  "e": "STDM은 슬롯 효율이 높으나 주소 정보가 필요하다."
 },
 {
  "s": "s2",
  "t": "단말 장치",
  "d": 2,
  "q": "PCM 방식으로 64kbps 음성 부호화를 규정한 ITU-T 코덱 표준은?",
  "a": "G.711",
  "k": [
   "G.711",
   "G711"
  ],
  "e": "8kHz × 8비트 = 64kbps이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 1,
  "q": "디지털↔아날로그 변환을 수행하는 변·복조기의 영문 명칭은?",
  "a": "Modem",
  "k": [
   "Modem",
   "모뎀",
   "Modulator Demodulator",
   "MODEM"
  ],
  "e": "Modulator + Demodulator의 합성어이다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "디지털 신호를 디지털 회선에 맞는 형태로 변환하는 가입자 측 장치의 약어는?",
  "a": "DSU",
  "k": [
   "DSU",
   "Data Service Unit",
   "디지털 서비스 유닛"
  ],
  "e": "DSU는 변조 없이 베이스밴드로 전송한다."
 },
 {
  "s": "s2",
  "t": "모뎀·DSU·CSU",
  "d": 2,
  "q": "하향 속도가 상향보다 빠르며 기존 전화선을 사용하는 대표적 비대칭 DSL은?",
  "a": "ADSL",
  "k": [
   "ADSL",
   "Asymmetric DSL",
   "비대칭 디지털 가입자 회선"
  ],
  "e": "VDSL도 비대칭이지만 대표 정답은 ADSL이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 1,
  "q": "OSI 1계층 장비로 여러 포트를 가진 리피터를 무엇이라 하는가?",
  "a": "허브",
  "k": [
   "허브",
   "Hub",
   "멀티포트 리피터"
  ],
  "e": "허브는 전 포트가 하나의 충돌 도메인이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "트렁크 링크에서 VLAN 식별 태그를 삽입하는 IEEE 표준 번호는?",
  "a": "802.1Q",
  "k": [
   "802.1Q",
   "IEEE 802.1Q",
   "dot1q"
  ],
  "e": "4바이트 태그, VLAN ID 12비트이다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "STP에서 스위치 간 루트 브리지 선출·토폴로지 정보를 교환하는 메시지는?",
  "a": "BPDU",
  "k": [
   "BPDU",
   "Bridge Protocol Data Unit"
  ],
  "e": "BPDU의 Bridge ID 최솟값이 루트 브리지가 된다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 3,
  "q": "첫 64바이트만 수신하고 프레임을 전달하는 스위칭 방식은?",
  "a": "Fragment-Free",
  "k": [
   "Fragment-Free",
   "Fragment Free",
   "프래그먼트 프리",
   "Modified Cut-Through"
  ],
  "e": "충돌 조각(Runt)을 걸러내는 절충형 방식이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "RIP에서 '도달 불가'를 의미하는 홉 수 값은?",
  "a": "16",
  "k": [
   "16",
   "16홉"
  ],
  "e": "최대 사용 홉 수 15, 16은 무한대(도달 불가)이다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 2,
  "q": "OSPF가 최단 경로 계산에 사용하는 알고리즘은?",
  "a": "Dijkstra",
  "k": [
   "Dijkstra",
   "다익스트라",
   "SPF",
   "Shortest Path First"
  ],
  "e": "Link State 방식은 Dijkstra(SPF)를 사용한다."
 },
 {
  "s": "s2",
  "t": "라우터·라우팅",
  "d": 3,
  "q": "AS 간 경로를 Path Vector 방식으로 교환하는 EGP 프로토콜은?",
  "a": "BGP",
  "k": [
   "BGP",
   "Border Gateway Protocol",
   "BGP-4"
  ],
  "e": "TCP 179를 사용한다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "메시지·패킷 교환처럼 교환기에 데이터를 저장했다가 다음 노드로 보내는 방식은?",
  "a": "축적 후 전달",
  "k": [
   "축적 후 전달",
   "Store-and-Forward",
   "축적 전달",
   "저장 후 전송"
  ],
  "e": "회선 교환은 축적 후 전달을 하지 않는다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 2,
  "q": "ATM에서 상위 계층 데이터를 48바이트 단위로 분할·재조립하는 계층의 약어는?",
  "a": "AAL",
  "k": [
   "AAL",
   "ATM Adaptation Layer",
   "ATM 적응 계층"
  ],
  "e": "AAL1~AAL5가 서비스 유형별로 정의된다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "SIP에서 응답을 받기 전 진행 중인 INVITE 요청을 취소하는 메서드는?",
  "a": "CANCEL",
  "k": [
   "CANCEL"
  ],
  "e": "성립된 통화의 종료는 BYE이다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 3,
  "q": "VoIP 통화 품질을 1~5점으로 주관 평가하는 지표의 약어는?",
  "a": "MOS",
  "k": [
   "MOS",
   "Mean Opinion Score",
   "평균 의견 점수"
  ],
  "e": "4점대 이상이면 유선 전화급 품질로 본다."
 },
 {
  "s": "s2",
  "t": "서버·가상화·HA",
  "d": 2,
  "q": "가용도를 구하는 식에서 분자에 들어가는 '평균 고장 간격'의 약어는?",
  "a": "MTBF",
  "k": [
   "MTBF",
   "Mean Time Between Failures",
   "평균 고장 간격"
  ],
  "e": "가용도 = MTBF ÷ (MTBF + MTTR)."
 },
 {
  "s": "s2",
  "t": "스토리지·RAID",
  "d": 2,
  "q": "블록 단위 분산 패리티 2개를 사용해 디스크 2개 고장까지 견디는 RAID 레벨은?",
  "a": "RAID 6",
  "k": [
   "RAID 6",
   "RAID6",
   "레이드 6"
  ],
  "e": "용량은 (N-2)×C, 최소 4개 디스크가 필요하다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 1,
  "q": "OSI 7계층 중 데이터 단위를 비트로 다루며 허브·리피터가 동작하는 계층은?",
  "a": "물리 계층",
  "k": [
   "물리",
   "Physical",
   "L1",
   "1계층"
  ],
  "e": "L1 물리 계층은 전기·기계적 신호로 비트를 전송한다."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 2,
  "q": "상위 계층 데이터에 각 계층의 헤더를 차례로 붙여 하위 계층으로 내려보내는 과정을 무엇이라 하는가?",
  "a": "캡슐화",
  "k": [
   "캡슐화",
   "Encapsulation",
   "인캡슐레이션"
  ],
  "e": "수신 측에서 헤더를 떼는 과정은 역캡슐화다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 1,
  "q": "TCP 연결 설정 시 SYN, SYN-ACK, ACK 세 번의 교환 절차를 무엇이라 하는가?",
  "a": "3-way Handshake",
  "k": [
   "3-way",
   "3 way",
   "쓰리웨이",
   "3방향 핸드셰이크",
   "Handshake"
  ],
  "e": "연결 종료는 4-way Handshake다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "TCP 혼잡 제어에서 혼잡 윈도를 가법적으로 늘리고 혼잡 시 승법적으로 줄이는 원리의 약어는?",
  "a": "AIMD",
  "k": [
   "AIMD",
   "Additive Increase",
   "가법 증가 승법 감소"
  ],
  "e": "Additive Increase Multiplicative Decrease."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "UDP 헤더의 크기는 몇 바이트인가?",
  "a": "8바이트",
  "k": [
   "8",
   "8byte",
   "8바이트"
  ],
  "e": "포트 2+2, 길이 2, 체크섬 2 = 8바이트."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 1,
  "q": "IP 주소를 MAC 주소로 변환하는 프로토콜은?",
  "a": "ARP",
  "k": [
   "ARP",
   "Address Resolution Protocol",
   "주소 결정 프로토콜"
  ],
  "e": "반대 방향은 RARP다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "DHCP 서버를 찾지 못했을 때 윈도 등이 자동으로 부여하는 169.254.0.0/16 대역 주소 기능은?",
  "a": "APIPA",
  "k": [
   "APIPA",
   "Automatic Private IP Addressing",
   "자동 사설 IP"
  ],
  "e": "링크 로컬 자동 할당 대역이다."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 2,
  "q": "서브넷 192.168.1.0/29의 사용 가능 호스트 수는?",
  "a": "6대",
  "k": [
   "6",
   "6대",
   "6개"
  ],
  "e": "2^3 − 2 = 6."
 },
 {
  "s": "s3",
  "t": "IPv4·서브네팅",
  "d": 3,
  "q": "서브넷마다 서로 다른 길이의 마스크를 적용해 주소를 효율적으로 할당하는 기법은?",
  "a": "VLSM",
  "k": [
   "VLSM",
   "Variable Length Subnet Mask",
   "가변 길이 서브넷 마스크"
  ],
  "e": "큰 요구 서브넷부터 할당하는 것이 원칙이다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "Ethernet 프레임 끝에서 CRC-32로 오류를 검출하는 4바이트 필드는?",
  "a": "FCS",
  "k": [
   "FCS",
   "Frame Check Sequence",
   "프레임 검사 순서"
  ],
  "e": "데이터링크 계층의 트레일러다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "충돌 감지 후 재밍 신호를 보내고 이진 지수 백오프로 재전송하는 유선 Ethernet의 접근 방식은?",
  "a": "CSMA/CD",
  "k": [
   "CSMA/CD",
   "CSMACD",
   "Collision Detection",
   "충돌 감지"
  ],
  "e": "무선은 CSMA/CA."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 3,
  "q": "MPLS 망에서 라벨이 붙은 패킷이 지나가는 단방향 경로를 무엇이라 하는가?",
  "a": "LSP",
  "k": [
   "LSP",
   "Label Switched Path",
   "라벨 스위칭 경로"
  ],
  "e": "LER이 라벨을 붙이고 LSR이 LSP를 따라 전달한다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 1,
  "q": "DHCP 주소 할당 4단계를 첫 글자로 줄인 약어는?",
  "a": "DORA",
  "k": [
   "DORA",
   "Discover Offer Request Ack"
  ],
  "e": "Discover → Offer → Request → Acknowledge."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 2,
  "q": "서버에 메일을 둔 채 여러 단말에서 동기화하며 TCP 143번을 쓰는 메일 수신 프로토콜은?",
  "a": "IMAP",
  "k": [
   "IMAP",
   "IMAP4",
   "Internet Message Access Protocol"
  ],
  "e": "POP3(110)는 내려받기 방식."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 3,
  "q": "HTTP/3가 전송 계층으로 사용하는 UDP 기반 프로토콜은?",
  "a": "QUIC",
  "k": [
   "QUIC",
   "퀵"
  ],
  "e": "TLS 1.3 내장, 0-RTT 지원."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 2,
  "q": "5G에서 기지국 근처에 컴퓨팅 자원을 두어 지연을 줄이는 기술의 약어는?",
  "a": "MEC",
  "k": [
   "MEC",
   "Mobile Edge Computing",
   "Multi-access Edge Computing",
   "모바일 엣지 컴퓨팅"
  ],
  "e": "ETSI 명칭은 Multi-access Edge Computing."
 },
 {
  "s": "s3",
  "t": "이동통신·5G",
  "d": 2,
  "q": "LTE 상향링크에서 단말의 PAPR을 낮추기 위해 사용하는 다중접속 방식은?",
  "a": "SC-FDMA",
  "k": [
   "SC-FDMA",
   "SCFDMA",
   "Single Carrier FDMA"
  ],
  "e": "하향은 OFDMA."
 },
 {
  "s": "s3",
  "t": "무선LAN·위성·근거리",
  "d": 2,
  "q": "Wi-Fi 7로 불리며 여러 대역을 동시에 쓰는 MLO를 도입한 IEEE 표준은?",
  "a": "802.11be",
  "k": [
   "802.11be",
   "11be",
   "be"
  ],
  "e": "Wi-Fi 6는 802.11ax."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 2,
  "q": "IPv6에서 라우터 광고와 EUI-64 등으로 서버 없이 주소를 자동 구성하는 방식은?",
  "a": "SLAAC",
  "k": [
   "SLAAC",
   "Stateless Address Autoconfiguration",
   "무상태 자동 구성"
  ],
  "e": "상태 기반 방식은 DHCPv6."
 },
 {
  "s": "s3",
  "t": "IPv6·QoS·SDN",
  "d": 3,
  "q": "SDN에서 컨트롤러와 스위치 사이 남향 인터페이스로 가장 대표적인 프로토콜은?",
  "a": "OpenFlow",
  "k": [
   "OpenFlow",
   "오픈플로우",
   "오픈플로"
  ],
  "e": "ONF가 표준화한 남향 프로토콜이다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 1,
  "q": "구성항목(CI)과 그 관계 정보를 저장·관리하는 ITIL의 데이터베이스는?",
  "a": "CMDB",
  "k": [
   "CMDB",
   "Configuration Management Database",
   "구성관리 데이터베이스",
   "구성 관리 데이터베이스"
  ],
  "e": "CMDB는 구성관리(Configuration Management)의 핵심 저장소다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 1,
  "q": "IT 조직 내부 부서 간에 맺는 운영 수준 약정의 영문 약어는?",
  "a": "OLA",
  "k": [
   "OLA",
   "Operational Level Agreement"
  ],
  "e": "고객은 SLA, 내부 부서는 OLA, 외부 공급업체는 UC다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "교착상태 회피를 위해 자원 할당 전 안전 상태 여부를 검사하는 다익스트라의 알고리즘은?",
  "a": "은행원 알고리즘",
  "k": [
   "은행원",
   "Banker",
   "뱅커"
  ],
  "e": "은행원 알고리즘은 할당 후에도 안전 상태가 유지될 때만 자원을 준다(회피 기법)."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "페이지 교체가 과도하게 발생해 CPU 이용률이 급격히 떨어지는 현상은?",
  "a": "스래싱",
  "k": [
   "스래싱",
   "Thrashing",
   "쓰래싱",
   "스레싱"
  ],
  "e": "프레임 부족으로 페이지 부재 처리에 시간을 대부분 쓰는 현상이다. 워킹 셋·PFF로 완화한다."
 },
 {
  "s": "s4",
  "t": "운영체제·가상화",
  "d": 2,
  "q": "가상 주소를 물리 주소로 변환한 결과를 캐싱해 페이지 테이블 조회를 줄이는 하드웨어 버퍼의 약어는?",
  "a": "TLB",
  "k": [
   "TLB",
   "Translation Lookaside Buffer",
   "변환 색인 버퍼"
  ],
  "e": "TLB는 MMU의 주소 변환 캐시다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 2,
  "q": "AES에서 사용할 수 있는 키 길이 3가지를 비트 단위로 쓰시오.",
  "a": "128, 192, 256비트",
  "k": [
   "128",
   "192",
   "256"
  ],
  "e": "AES 블록은 128비트 고정, 키는 128/192/256비트다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 1,
  "q": "폐지된 인증서의 일련번호를 담아 CA가 주기적으로 배포하는 목록의 약어는?",
  "a": "CRL",
  "k": [
   "CRL",
   "Certificate Revocation List",
   "인증서 폐지 목록"
  ],
  "e": "CRL은 주기 배포 목록이고, 실시간 조회는 OCSP다."
 },
 {
  "s": "s4",
  "t": "정보보호·암호",
  "d": 1,
  "q": "SHA-256 해시 함수의 출력 길이는 몇 비트인가?",
  "a": "256비트",
  "k": [
   "256"
  ],
  "e": "SHA-256은 이름 그대로 256비트 다이제스트를 출력한다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "IPsec에서 보안 연관(SA) 협상과 키 교환을 담당하는 프로토콜은?",
  "a": "IKE",
  "k": [
   "IKE",
   "Internet Key Exchange",
   "IKEv2"
  ],
  "e": "IKE는 UDP 500(NAT-T 시 4500)을 사용한다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 2,
  "q": "DNS 서버나 hosts 파일을 변조해 정상 URL을 입력해도 가짜 사이트로 접속되게 하는 공격은?",
  "a": "파밍",
  "k": [
   "파밍",
   "Pharming"
  ],
  "e": "피싱과 달리 사용자가 올바른 주소를 입력해도 속는다는 점이 파밍의 특징이다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 1,
  "q": "방화벽·IPS·안티바이러스·VPN 등 여러 보안 기능을 한 장비에 통합한 솔루션의 약어는?",
  "a": "UTM",
  "k": [
   "UTM",
   "Unified Threat Management",
   "통합 위협 관리",
   "통합위협관리"
  ],
  "e": "UTM은 중소규모 환경에서 관리 편의성이 장점이며, 단일 장애점이 될 수 있다."
 },
 {
  "s": "s4",
  "t": "네트워크 보안·공격",
  "d": 3,
  "q": "네트워크(SD-WAN)와 보안(SWG·CASB·ZTNA 등)을 클라우드 서비스로 통합한 SASE의 영문 풀네임은?",
  "a": "Secure Access Service Edge",
  "k": [
   "Secure Access Service Edge",
   "SASE"
  ],
  "e": "SASE는 제로 트러스트 기반 원격 접속을 클라우드 엣지에서 제공한다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 1,
  "q": "패킷 도착 지연의 변동(편차)을 뜻하며 VoIP 품질에 큰 영향을 주는 성능 지표는?",
  "a": "지터",
  "k": [
   "지터",
   "Jitter"
  ],
  "e": "지터는 지터 버퍼로 완화한다. 왕복 지연은 RTT다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 2,
  "q": "1TB 디스크 8개로 RAID 1+0을 구성할 때 사용 가능한 용량은?",
  "a": "4TB",
  "k": [
   "4TB",
   "4 TB",
   "4테라"
  ],
  "e": "RAID 10은 미러링으로 절반만 쓰므로 8 × 1TB ÷ 2 = 4TB다."
 },
 {
  "s": "s4",
  "t": "성능·가용성",
  "d": 2,
  "q": "가용률 99%를 만족할 때 연간 허용 다운타임은 약 며칠인가?",
  "a": "약 3.65일",
  "k": [
   "3.65"
  ],
  "e": "365일 × 0.01 = 3.65일이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 2,
  "q": "BCP 수립 시 업무 중단이 조직에 미치는 영향과 복구 우선순위를 분석하는 단계의 약어는?",
  "a": "BIA",
  "k": [
   "BIA",
   "Business Impact Analysis",
   "업무 영향 분석",
   "업무영향분석"
  ],
  "e": "BIA 결과로 업무별 RTO·RPO와 복구 우선순위를 정한다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 3,
  "q": "일요일 전체 백업 후 월~토 매일 차등 백업을 할 때, 금요일 백업 직후 장애 복구에 필요한 백업 세트 수는?",
  "a": "2개",
  "k": [
   "2"
  ],
  "e": "차등 백업은 마지막 전체 이후 변경분을 누적하므로 일요일 전체 + 금요일 차등 = 2개다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "SNMP 관리 객체를 계층 트리 구조로 식별하는 숫자 식별자의 약어는?",
  "a": "OID",
  "k": [
   "OID",
   "Object Identifier",
   "객체 식별자"
  ],
  "e": "예: 1.3.6.1.2.1(mib-2)처럼 점으로 구분한 트리 경로다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 3,
  "q": "SNMPv3에서 MIB 객체에 대한 접근 제어를 담당하는 모델의 약어는?",
  "a": "VACM",
  "k": [
   "VACM",
   "View-based Access Control Model",
   "뷰 기반 접근 제어"
  ],
  "e": "인증·암호화는 USM, 접근 제어는 VACM이다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 1,
  "q": "관측 가능성(Observability) 3기둥 중 수치형 시계열 데이터를 뜻하는 것은?",
  "a": "메트릭",
  "k": [
   "메트릭",
   "Metrics",
   "Metric"
  ],
  "e": "3기둥은 Logs(이벤트)·Metrics(수치)·Traces(요청 흐름)다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "CPU 내부에서 산술 연산과 논리 연산을 수행하는 장치의 영문 약어는?",
  "a": "ALU",
  "k": [
   "ALU",
   "산술논리연산장치",
   "Arithmetic Logic Unit",
   "연산장치"
  ],
  "e": "ALU는 덧셈·뺄셈·AND·OR·시프트 등을 수행한다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "다음에 실행할 명령어의 주소를 보관하는 레지스터 이름은?",
  "a": "PC",
  "k": [
   "PC",
   "프로그램 카운터",
   "Program Counter"
  ],
  "e": "Fetch 후 자동 증가하며 분기 시 목적지 주소로 바뀐다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "2진수 11010을 10진수로 변환한 값은?",
  "a": "26",
  "k": [
   "26"
  ],
  "e": "16 + 8 + 0 + 2 + 0 = 26."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 2,
  "q": "파이프라인에서 분기 명령 때문에 다음 명령을 미리 인출할 수 없어 생기는 해저드는?",
  "a": "제어 해저드",
  "k": [
   "제어 해저드",
   "Control Hazard",
   "분기 해저드",
   "제어"
  ],
  "e": "분기 예측·지연 분기로 완화한다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 3,
  "q": "고정 길이 명령어와 Load/Store 구조를 가지며 ARM·RISC-V가 해당하는 명령어 집합 구조는?",
  "a": "RISC",
  "k": [
   "RISC",
   "Reduced Instruction Set Computer",
   "축소 명령어 집합"
  ],
  "e": "CISC와 대비되며 파이프라인 구현에 유리하다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 1,
  "q": "Refresh가 필요 없고 플립플롭으로 구성되어 캐시에 쓰이는 메모리는?",
  "a": "SRAM",
  "k": [
   "SRAM",
   "Static RAM",
   "정적 램"
  ],
  "e": "DRAM보다 빠르지만 집적도가 낮고 비싸다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "가장 오랫동안 사용되지 않은 페이지를 교체하는 알고리즘의 약어는?",
  "a": "LRU",
  "k": [
   "LRU",
   "Least Recently Used"
  ],
  "e": "LFU(사용 빈도 최소)와 구분한다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "CPU 개입 없이 I/O 장치와 메모리 간 블록 전송을 수행하는 방식의 약어는?",
  "a": "DMA",
  "k": [
   "DMA",
   "Direct Memory Access",
   "직접 메모리 접근"
  ],
  "e": "사이클 스틸링으로 버스를 사용한다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "캐시 적중률 95%, 캐시 접근 5ns, 실패 시 총 접근시간 105ns일 때 평균 접근시간(ns)은?",
  "a": "10",
  "k": [
   "10",
   "10ns"
  ],
  "e": "0.95 × 5 + 0.05 × 105 = 4.75 + 5.25 = 10ns."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 3,
  "q": "Write-Back 캐시에서 블록이 수정되었는지 표시하는 비트는?",
  "a": "Dirty 비트",
  "k": [
   "Dirty 비트",
   "Dirty bit",
   "더티 비트",
   "Modified 비트",
   "변경 비트"
  ],
  "e": "Dirty 비트가 1인 블록만 교체 시 주기억에 기록한다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 1,
  "q": "마지막에 들어온 데이터가 먼저 나가는 자료구조는?",
  "a": "스택",
  "k": [
   "스택",
   "Stack",
   "LIFO"
  ],
  "e": "Push·Pop 연산을 사용한다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 2,
  "q": "평균 O(n log n)이지만 최악의 경우 O(n²)이 되는 분할 정복 정렬은?",
  "a": "퀵 정렬",
  "k": [
   "퀵 정렬",
   "Quick Sort",
   "퀵소트",
   "퀵"
  ],
  "e": "피벗 선택이 치우치면 최악이 된다."
 },
 {
  "s": "s5",
  "t": "자료구조·알고리즘",
  "d": 3,
  "q": "해시에서 같은 버킷에 충돌한 키들을 연결 리스트로 잇는 해결 방식은?",
  "a": "체이닝",
  "k": [
   "체이닝",
   "Chaining",
   "분리 체이닝",
   "Separate Chaining"
  ],
  "e": "개방 주소법(선형·제곱·이중 해싱)과 대비된다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 2,
  "q": "페이지 교체가 지나치게 많아 CPU 이용률이 급감하는 현상은?",
  "a": "스래싱",
  "k": [
   "스래싱",
   "Thrashing",
   "쓰래싱"
  ],
  "e": "워킹셋 모델·PFF로 완화한다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 3,
  "q": "교착상태 회피를 위해 안전 상태 여부를 검사한 뒤 자원을 할당하는 알고리즘은?",
  "a": "은행원 알고리즘",
  "k": [
   "은행원 알고리즘",
   "Banker's Algorithm",
   "Banker",
   "뱅커스 알고리즘"
  ],
  "e": "Dijkstra가 제안한 회피 기법이다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 1,
  "q": "커밋된 트랜잭션의 결과가 장애 후에도 영구히 보존되는 ACID 성질은?",
  "a": "지속성",
  "k": [
   "지속성",
   "Durability",
   "영속성"
  ],
  "e": "로그 기반 회복으로 보장한다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 2,
  "q": "다른 릴레이션의 기본키를 참조하여 참조 무결성을 유지하는 키는?",
  "a": "외래키",
  "k": [
   "외래키",
   "Foreign Key",
   "FK",
   "외부키"
  ],
  "e": "참조되는 값이 존재하거나 NULL이어야 한다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 3,
  "q": "트랜잭션 수행 중 일부 지점까지만 되돌리기 위해 저장점을 지정하는 TCL 명령은?",
  "a": "SAVEPOINT",
  "k": [
   "SAVEPOINT",
   "세이브포인트",
   "저장점"
  ],
  "e": "ROLLBACK TO SAVEPOINT 이름 형태로 부분 복구한다."
 },
 {
  "s": "s5",
  "t": "정보통신 법규",
  "d": 2,
  "q": "정보통신기사 시험을 시행하는 기관의 약어는?",
  "a": "KCA",
  "k": [
   "KCA",
   "한국방송통신전파진흥원"
  ],
  "e": "기본서 기준 KCA 시행, 필기 5과목·100문항·150분."
 },
 {
  "s": "s5",
  "t": "구내통신·설비기준",
  "d": 2,
  "q": "건물의 각 층에 설치되어 수평배선을 분기하는 중간배선반의 약어는?",
  "a": "IDF",
  "k": [
   "IDF",
   "Intermediate Distribution Frame",
   "중간배선반",
   "층통신실"
  ],
  "e": "MDF(주배선반)와 짝으로 출제된다."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "PCM·펄스변조",
  "d": 1,
  "q": "아날로그 음성을 PCM으로 전송·복원하는 과정을 순서대로 배열하시오.",
  "steps": [
   "표본화",
   "양자화",
   "부호화",
   "복호화",
   "저역통과 필터로 아날로그 복원"
  ],
  "e": "표·양·부·복 — 송신 측 표본화·양자화·부호화, 수신 측 복호화 후 LPF로 원신호를 복원한다."
 },
 {
  "s": "s1",
  "t": "아날로그·디지털 변조",
  "d": 2,
  "q": "다음 디지털 변조 방식을 심볼당 비트 수가 적은 것부터 순서대로 배열하시오.",
  "steps": [
   "BPSK(1비트)",
   "QPSK(2비트)",
   "8PSK(3비트)",
   "16-QAM(4비트)",
   "64-QAM(6비트)"
  ],
  "e": "심볼당 비트 = log₂M: 2→1, 4→2, 8→3, 16→4, 64→6."
 },
 {
  "s": "s1",
  "t": "전송매체·무선·위성",
  "d": 2,
  "q": "다음 위성 궤도를 지표면에서 가까운 것부터 순서대로 배열하시오.",
  "steps": [
   "LEO(500~2,000km)",
   "MEO(5,000~20,000km)",
   "GEO(35,786km)"
  ],
  "e": "고도가 낮을수록 지연이 짧고 커버 면적이 좁다. Starlink는 LEO, GPS는 MEO, 정지위성은 GEO."
 },
 {
  "s": "s1",
  "t": "에러·흐름 제어",
  "d": 3,
  "q": "Go-Back-N ARQ에서 프레임 2에 오류가 난 뒤의 처리 과정을 순서대로 배열하시오.",
  "steps": [
   "송신 측이 윈도우 내 프레임 0~4를 연속 전송",
   "수신 측이 프레임 2의 오류를 검출하고 이후 프레임을 폐기",
   "수신 측이 프레임 2를 요구하는 NAK 전송(또는 송신 타이머 만료)",
   "송신 측이 프레임 2부터 4까지 다시 전송"
  ],
  "e": "GBN은 오류 프레임 이후의 정상 프레임도 버리므로 오류 지점부터 전부 재전송한다. SR이라면 프레임 2만 재전송한다."
 },
 {
  "s": "s2",
  "t": "교환 방식",
  "d": 1,
  "q": "회선 교환 방식의 통신 절차를 순서대로 배열하시오.",
  "steps": [
   "발신 측 호 요청(다이얼)",
   "교환기 간 경로 설정",
   "전용 경로로 데이터 전송",
   "호 해제 및 경로 반환"
  ],
  "e": "회선 교환은 호 요청 → 경로 설정(호 설정) → 전송 → 호 해제 순으로 진행되며, 전송 중 경로를 독점한다."
 },
 {
  "s": "s2",
  "t": "VoIP·전화 교환",
  "d": 2,
  "q": "SIP 기반 VoIP 통화의 기본 흐름을 순서대로 배열하시오.",
  "steps": [
   "발신 UA가 INVITE 전송",
   "착신 측 180 Ringing 응답",
   "착신 측 200 OK 응답",
   "발신 측 ACK 전송",
   "RTP로 음성 전송",
   "BYE와 200 OK로 종료"
  ],
  "e": "INVITE → 180 → 200 OK → ACK의 3-way 확인 후 RTP 미디어가 흐르고 BYE로 종료한다."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 3,
  "q": "STP(802.1D)에서 포트가 활성화될 때 거치는 상태를 순서대로 배열하시오.",
  "steps": [
   "Blocking",
   "Listening",
   "Learning",
   "Forwarding"
  ],
  "e": "Blocking(BPDU만 수신) → Listening(역할 결정) → Learning(MAC 학습) → Forwarding(프레임 전달)."
 },
 {
  "s": "s2",
  "t": "LAN 장비·스위치",
  "d": 2,
  "q": "다음 장비를 동작하는 OSI 계층이 낮은 것부터 순서대로 배열하시오.",
  "steps": [
   "리피터",
   "브리지",
   "라우터",
   "L4 스위치",
   "L7 스위치"
  ],
  "e": "리피터 L1 → 브리지 L2 → 라우터 L3 → L4 스위치 L4 → L7 스위치 L7."
 },
 {
  "s": "s3",
  "t": "OSI·TCP/IP 계층",
  "d": 1,
  "q": "송신 측 캡슐화 과정에서 데이터 단위가 바뀌는 순서대로 배열하시오.",
  "steps": [
   "Data (응용)",
   "Segment (전송)",
   "Packet (네트워크)",
   "Frame (데이터링크)",
   "Bit (물리)"
  ],
  "e": "상위 → 하위로 내려가며 헤더가 붙어 Data → Segment → Packet → Frame → Bit가 된다."
 },
 {
  "s": "s3",
  "t": "TCP·UDP",
  "d": 2,
  "q": "TCP 연결 종료(4-way Handshake) 과정을 순서대로 배열하시오.",
  "steps": [
   "능동 종료 측이 FIN 전송",
   "상대가 FIN에 대한 ACK 응답",
   "상대가 남은 데이터 전송 후 자신의 FIN 전송",
   "능동 종료 측이 ACK 응답 후 TIME_WAIT 대기"
  ],
  "e": "각 방향을 따로 닫는 half-close 구조로 FIN·ACK·FIN·ACK 순서가 된다."
 },
 {
  "s": "s3",
  "t": "응용 프로토콜",
  "d": 1,
  "q": "DHCP로 IP 주소를 할당받는 과정을 순서대로 배열하시오.",
  "steps": [
   "Discover — 클라이언트가 서버 탐색(브로드캐스트)",
   "Offer — 서버가 사용 가능 주소 제안",
   "Request — 클라이언트가 제안 주소 요청",
   "Acknowledge — 서버가 할당 확정"
  ],
  "e": "DORA 순서다."
 },
 {
  "s": "s3",
  "t": "LAN·WAN",
  "d": 2,
  "q": "CSMA/CD 방식의 전송 절차를 순서대로 배열하시오.",
  "steps": [
   "반송파 감지로 채널 사용 여부 확인",
   "채널이 유휴 상태면 프레임 전송",
   "전송 중 충돌 감지",
   "재밍(Jam) 신호 송출",
   "이진 지수 백오프 대기 후 재전송"
  ],
  "e": "Carrier Sense → 전송 → Collision Detection → Jam → Backoff 순이다."
 },
 {
  "s": "s4",
  "t": "재해복구·확장성",
  "d": 2,
  "q": "BCP(업무 연속성 계획) 수립 절차를 순서대로 배열하시오.",
  "steps": [
   "프로젝트 범위 설정·착수",
   "업무 영향 분석(BIA)",
   "복구 전략 개발",
   "계획 수립·문서화",
   "시험·훈련·유지보수"
  ],
  "e": "범위를 정한 뒤 BIA로 업무별 영향과 RTO·RPO를 도출하고, 이를 만족하는 전략을 세워 계획으로 문서화한 다음 주기적으로 시험·갱신한다."
 },
 {
  "s": "s4",
  "t": "NMS·SNMP",
  "d": 2,
  "q": "TMN 논리 계층을 상위(사업)에서 하위(장비) 순서대로 배열하시오.",
  "steps": [
   "BML(Business Management Layer)",
   "SML(Service Management Layer)",
   "NML(Network Management Layer)",
   "EML(Element Management Layer)"
  ],
  "e": "사업 → 서비스 → 망 → 요소(장비) 순이다. EML 아래에 실제 장비 계층(NEL)이 위치한다."
 },
 {
  "s": "s4",
  "t": "로그·관측·자동화",
  "d": 3,
  "q": "Syslog 심각도(Severity)를 가장 심각한 것부터 순서대로 배열하시오.",
  "steps": [
   "Emergency(0)",
   "Alert(1)",
   "Critical(2)",
   "Error(3)",
   "Warning(4)",
   "Notice(5)"
  ],
  "e": "숫자가 작을수록 심각하다. 이어서 Informational(6), Debug(7)이 온다."
 },
 {
  "s": "s4",
  "t": "ITSM·ITIL·SLA",
  "d": 2,
  "q": "ITIL 인시던트 관리의 일반적인 처리 흐름을 순서대로 배열하시오.",
  "steps": [
   "인시던트 식별·기록",
   "분류·우선순위 지정",
   "초기 진단·에스컬레이션",
   "해결·복구",
   "종료(Closure)"
  ],
  "e": "접수·기록 후 영향도·긴급도로 우선순위를 정하고, 진단·필요 시 상위 지원으로 이관한 뒤 복구를 확인하고 종료한다."
 },
 {
  "s": "s5",
  "t": "컴퓨터 구조",
  "d": 1,
  "q": "5단계 명령어 파이프라인의 단계를 순서대로 배열하시오.",
  "steps": [
   "IF(명령어 인출)",
   "ID(명령어 해독)",
   "EX(실행)",
   "MEM(메모리 접근)",
   "WB(결과 기록)"
  ],
  "e": "인출 → 해독 → 실행 → 메모리 접근 → 레지스터 기록 순이다."
 },
 {
  "s": "s5",
  "t": "메모리·입출력",
  "d": 2,
  "q": "기억장치 계층을 접근 속도가 빠른 것부터 순서대로 배열하시오.",
  "steps": [
   "레지스터",
   "캐시 메모리",
   "주기억장치(DRAM)",
   "SSD",
   "HDD",
   "자기 테이프"
  ],
  "e": "위로 갈수록 빠르고 작고 비트당 비싸다."
 },
 {
  "s": "s5",
  "t": "운영체제",
  "d": 2,
  "q": "I/O를 요청한 프로세스가 다시 실행되기까지의 상태 전이를 순서대로 배열하시오.",
  "steps": [
   "실행(Running) 중 I/O 요청",
   "대기(Waiting) 상태로 전이",
   "I/O 완료 인터럽트 발생",
   "준비(Ready) 큐로 이동",
   "디스패치되어 실행(Running) 재개"
  ],
  "e": "I/O 완료 후 곧바로 실행되지 않고 반드시 준비 상태를 거친다."
 },
 {
  "s": "s5",
  "t": "데이터베이스",
  "d": 3,
  "q": "정규화 단계를 낮은 정규형부터 순서대로 배열하시오.",
  "steps": [
   "1NF(원자값)",
   "2NF(부분 함수 종속 제거)",
   "3NF(이행 함수 종속 제거)",
   "BCNF(결정자가 모두 후보키)",
   "4NF(다치 종속 제거)",
   "5NF(조인 종속 제거)"
  ],
  "e": "'원부이결다조'로 암기한다."
 }
];

CPPG.selfcheck = [
 {
  "g": "정보전송일반",
  "t": "샤논·나이퀴스트 공식으로 채널 용량을 계산하고, dB를 배수로 환산할 수 있다"
 },
 {
  "g": "정보전송일반",
  "t": "bps = Baud × log₂M을 이용해 변조 방식별 전송속도와 변조속도를 상호 변환할 수 있다"
 },
 {
  "g": "정보전송일반",
  "t": "ASK·FSK·PSK·QAM의 변화 요소와 QPSK·16/64/256-QAM의 심볼당 비트 수를 말할 수 있다"
 },
 {
  "g": "정보전송일반",
  "t": "PCM 4단계(표·양·부·복)와 표본화 정리, 64kbps 산출 과정을 설명할 수 있다"
 },
 {
  "g": "정보전송일반",
  "t": "SMF·MMF, UTP 카테고리, Wi-Fi 표준, GEO·MEO·LEO의 특징을 구분할 수 있다"
 },
 {
  "g": "정보전송일반",
  "t": "FDM·TDM·CDM·WDM·OFDM 다중화와 FEC·ARQ 3종, 해밍 거리 공식을 적용할 수 있다"
 },
 {
  "g": "정보통신기기",
  "t": "DTE·DCE를 구분하고 모뎀·DSU·CSU·코덱의 변환 방향을 설명할 수 있다"
 },
 {
  "g": "정보통신기기",
  "t": "L1~L7 장비와 Gateway를 계층별로 분류하고 충돌·브로드캐스트 도메인 수를 계산할 수 있다"
 },
 {
  "g": "정보통신기기",
  "t": "Store-and-Forward·Cut-Through·Fragment-Free와 VLAN·STP·VTP를 구분할 수 있다"
 },
 {
  "g": "정보통신기기",
  "t": "RIP·OSPF·BGP의 알고리즘·메트릭·포트를 비교하고 OSPF Cost를 계산할 수 있다"
 },
 {
  "g": "정보통신기기",
  "t": "회선·메시지·패킷·셀 교환과 데이터그램·가상 회선의 차이를 설명할 수 있다"
 },
 {
  "g": "정보통신기기",
  "t": "SIP 메서드·H.323 구성요소·RTP/RTCP를 구분하고 RAID 용량과 가용도를 계산할 수 있다"
 },
 {
  "g": "정보통신네트워크",
  "t": "OSI 7계층별 PDU·장비·대표 프로토콜을 짝지어 말할 수 있다"
 },
 {
  "g": "정보통신네트워크",
  "t": "TCP 3-way·4-way Handshake와 seq·ack 번호 변화를 설명할 수 있다"
 },
 {
  "g": "정보통신네트워크",
  "t": "주어진 IP·프리픽스로 네트워크·브로드캐스트 주소와 호스트 수를 계산할 수 있다"
 },
 {
  "g": "정보통신네트워크",
  "t": "주요 응용 프로토콜의 포트 번호와 TCP/UDP 구분을 외워 쓸 수 있다"
 },
 {
  "g": "정보통신네트워크",
  "t": "이동통신 세대별 기술과 5G 3대 시나리오, Wi-Fi 표준을 구분할 수 있다"
 },
 {
  "g": "정보통신네트워크",
  "t": "IPv6 주소 축약·헤더 특징과 QoS·SDN·NFV 개념을 비교할 수 있다"
 },
 {
  "g": "정보시스템운용",
  "t": "ITIL 수명주기·주요 프로세스와 SLA·OLA·UC의 당사자를 구분할 수 있다"
 },
 {
  "g": "정보시스템운용",
  "t": "CIA·부인방지와 대칭·비대칭·해시 대표 알고리즘을 짝지을 수 있다"
 },
 {
  "g": "정보시스템운용",
  "t": "방화벽·IDS·IPS·SIEM·SOAR와 IPsec AH·ESP·IKE·모드의 차이를 설명할 수 있다"
 },
 {
  "g": "정보시스템운용",
  "t": "MTBF·MTTR로 가용률, 직렬·병렬 가용률, Nines별 다운타임, RAID 용량을 계산할 수 있다"
 },
 {
  "g": "정보시스템운용",
  "t": "RTO·RPO, DR 사이트 4종, 증분·차등 백업의 복구 세트 수를 판단할 수 있다"
 },
 {
  "g": "정보시스템운용",
  "t": "TMN 4계층·FCAPS·SNMP 포트·메시지·버전과 Syslog Severity를 구분할 수 있다"
 },
 {
  "g": "컴퓨터일반·정보설비기준",
  "t": "PC·IR·MAR·MDR의 역할과 파이프라인 5단계·해저드 3종을 설명할 수 있다"
 },
 {
  "g": "컴퓨터일반·정보설비기준",
  "t": "캐시 평균 접근시간·주소 필드 분할과 FIFO·LRU 페이지 부재를 계산할 수 있다"
 },
 {
  "g": "컴퓨터일반·정보설비기준",
  "t": "스택·큐·트리·해시와 정렬별 시간 복잡도를 구분할 수 있다"
 },
 {
  "g": "컴퓨터일반·정보설비기준",
  "t": "ACID·격리수준·1NF~BCNF·SQL 4분류를 예시와 함께 말할 수 있다"
 },
 {
  "g": "컴퓨터일반·정보설비기준",
  "t": "전기통신기본법·사업법·정보통신공사업법의 소관과 기술자 등급을 구분할 수 있다"
 },
 {
  "g": "컴퓨터일반·정보설비기준",
  "t": "MDF·IDF·세대단자함과 Cat 5e~7·OM 등급, 통합 접지·SPD·UPS를 설명할 수 있다"
 }
];

CPPG.roadmap = {
 "6주 표준": [
  "Week 1 — 1과목 정보전송일반(신호·변조·전송매체·다중화) + 개념정리 정독",
  "Week 2 — 2과목 정보통신기기(단말·교환·방송·IoT 기기)",
  "Week 3 — 3과목 정보통신네트워크(OSI·TCP/IP·서브네팅·라우팅)",
  "Week 4 — 4과목 정보시스템운용(서버·보안·가용성·운영관리)",
  "Week 5 — 5과목 컴퓨터일반·정보설비기준(구조·OS·법규) + 함정노트",
  "Week 6 — 과목별 약점 보강 + 모의고사 3회 + 오답노트 2회독"
 ],
 "3주 단기": [
  "Week 1 — 1·3과목(계산·서브네팅 비중 큼) + 핵심시트",
  "Week 2 — 2·4·5과목 + 함정노트",
  "Week 3 — 모의고사 3회 + 오답노트 (과락 40점 과목 우선 보강)"
 ],
 "시험 3일 전": [
  "D-3 — 함정노트 전체 + 오답노트 다시 풀기",
  "D-2 — 핵심시트 공식(샤논·나이퀴스트·dB·서브네팅) 백지 복원",
  "D-1 — 모의고사 1회 + 틀린 단원만 개념정리"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "샤논 채널 용량 C = B·log₂(1+S/N)",
  "나이퀴스트 공식 C = 2B·log₂M",
  "bps = Baud × log₂M 변환",
  "PCM 4단계(표·양·부·복)·표본화 정리",
  "ASK·FSK·PSK·QAM 비트/심볼",
  "다중화 FDM·TDM·CDM·WDM·OFDM",
  "에러 제어 FEC·BEC·ARQ 3종",
  "Wi-Fi 표준(a·b·g·n·ac·ax·be)",
  "광섬유 SMF vs MMF·전반사",
  "OSI 계층별 장비(L1~L7·Gateway)",
  "허브·스위치·라우터 도메인 분리",
  "교환 방식 4종(회선·메시지·패킷·셀)",
  "데이터그램 vs 가상 회선",
  "라우팅 프로토콜(RIP·OSPF·BGP)",
  "Distance Vector vs Link State",
  "RAID 0·1·5·6·10 용량·결함 허용",
  "DAS·NAS·SAN 비교",
  "스위칭 방식 3종",
  "OSI 7계층 PDU·장비·프로토콜",
  "TCP vs UDP·3-way·4-way",
  "IPv4 헤더·클래스·사설 IP",
  "서브네팅·VLSM·CIDR 계산",
  "NAT·PAT",
  "Ethernet 프레임·CSMA/CD·CSMA/CA",
  "HTTP·DNS·DHCP·FTP·메일 포트",
  "이동통신 1G~5G",
  "5G eMBB·URLLC·mMTC",
  "Wi-Fi 표준(802.11a~be)",
  "CIA·AAA·부인방지",
  "대칭·비대칭·해시 알고리즘",
  "IPsec AH·ESP·IKE·전송/터널 모드",
  "방화벽·IDS·IPS·UTM·WAF",
  "MTBF·MTTR·가용률 공식",
  "Five Nines 다운타임",
  "RTO·RPO·BCP·DRP",
  "DR 사이트 4종(Mirror·Hot·Warm·Cold)",
  "FCAPS·NMS·EMS·OSS·BSS",
  "SNMP 메시지·v1/v2c/v3",
  "CPU 구성(ALU·CU·레지스터)",
  "PC·IR·MAR·MDR",
  "파이프라인 5단계·해저드",
  "메모리 계층·캐시 매핑·LRU",
  "가상메모리·페이지 부재",
  "DMA·인터럽트",
  "자료구조(스택·큐·트리·그래프)",
  "Big-O·정렬·탐색",
  "DB 키·ACID·격리수준·정규화",
  "정보통신공사업법·구내선로(MDF·IDF·Cat·OM)"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "UTP Cat5e·6·6a·7·8 속도·거리",
  "해밍 거리·CRC 검사 비트",
  "슬라이딩 윈도우·HARQ",
  "위성 GEO·MEO·LEO·VSAT",
  "MIMO·빔포밍·Massive MIMO",
  "OFDMA·NOMA·5G 다중접속",
  "AM·FM 대역폭(DSB·SSB·카슨 법칙)",
  "동기·비동기 전송과 선로부호(맨체스터·AMI·HDB3)",
  "dB·dBm 환산",
  "DTE·DCE·모뎀·DSU·CSU",
  "VoIP 프로토콜(SIP·H.323·RTP·RTCP)",
  "SIP 메서드·응답 코드",
  "VLAN·802.1Q·STP·VTP",
  "Type 1·2 하이퍼바이저",
  "PBX·IP-PBX·SBC",
  "가용도 MTBF·MTTR",
  "ATM 53바이트 셀·VPI·VCI",
  "다중화기·집중화기·STDM",
  "IPv6 헤더·주소 종류·축약",
  "SLAAC·EUI-64·NDP",
  "ARP·ICMP·IGMP",
  "DHCP DORA",
  "QoS·DSCP·IntServ/DiffServ",
  "SDN·NFV·SD-WAN",
  "위성 GEO·MEO·LEO",
  "근거리 무선 BT·Zigbee·NFC·LPWAN",
  "MPLS·ATM·ISDN",
  "ITIL·SLA·OLA·UC",
  "Incident vs Problem",
  "SSL/TLS VPN·제로 트러스트",
  "DoS·DDoS·SQLi·XSS·OWASP Top 10",
  "Failover·HA·Scale-Up/Out",
  "Syslog·Severity 0~7",
  "백업 3-2-1·증분/차등",
  "RAID 레벨별 용량",
  "교착상태 4조건·페이지 교체",
  "RISC vs CISC·Flynn 분류",
  "캐시 쓰기 정책·적중률",
  "OS 스케줄링·교착상태",
  "NoSQL 4유형·CAP",
  "Hadoop·Spark",
  "UML·SOLID·GoF",
  "전파법·주파수 분배",
  "개인정보보호법·정보통신망법",
  "접지·전원(UPS·SPD)"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "샤논 용량 계산 — dB를 배수로 바꾸는 유형",
  "problem": "대역폭 3kHz, 신호 대 잡음비 30dB인 전화 회선의 샤논 채널 용량에 가장 가까운 것은?\n① 약 9kbps\n② 약 30kbps\n③ 약 90kbps\n④ 약 3kbps",
  "steps": [
   "SNR 30dB를 배수로 환산: 10^(30/10) = 1000",
   "C = B·log₂(1 + S/N) = 3000 × log₂(1001)",
   "log₂1001 ≈ log₂1024 = 10 (약 9.97)",
   "C ≈ 3000 × 9.97 ≈ 29,900bps ≈ 30kbps"
  ],
  "answer": "② — S/N = 1000으로 환산하면 log₂(1001) ≈ 10, 3kHz × 10 ≈ 30kbps이다.",
  "traps": [
   "30dB를 그대로 넣어 log₂31 ≈ 5로 계산하면 약 15kbps가 나온다 — 반드시 배수로 환산",
   "나이퀴스트 2B를 섞어 60kbps로 계산하지 않는다 — 샤논은 B를 곱한다"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "bps·Baud 변환 — 변조 방식과 비트 수 연결",
  "problem": "변조속도가 2400Baud로 고정된 모뎀으로 9600bps를 전송하려 한다. 사용해야 할 변조 방식은?\n① BPSK\n② QPSK\n③ 8PSK\n④ 16-QAM",
  "steps": [
   "bps = Baud × log₂M → log₂M = 9600 / 2400 = 4",
   "log₂M = 4 → M = 16",
   "16개 심볼을 갖는 방식은 16-QAM",
   "BPSK 2400bps, QPSK 4800bps, 8PSK 7200bps로 모두 부족"
  ],
  "answer": "④ — 심볼당 4비트가 필요하므로 M = 16, 즉 16-QAM이다.",
  "traps": [
   "bps/Baud = 4를 M으로 착각해 QPSK(4위상)를 고르는 실수",
   "8PSK를 8비트로 착각 — 8PSK는 log₂8 = 3비트"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "해밍 거리와 ARQ 윈도우 — 공식 맞바꾸기 유형",
  "problem": "다음 설명 중 옳지 않은 것은?\n① 최소 해밍 거리 3인 부호는 1비트 오류를 정정할 수 있다.\n② 최소 해밍 거리 4인 부호는 3비트 오류를 검출할 수 있다.\n③ 순서 번호 3비트를 쓰는 Go-Back-N의 최대 윈도우는 7이다.\n④ 순서 번호 3비트를 쓰는 Selective Repeat의 최대 윈도우는 7이다.",
  "steps": [
   "①: 정정 = ⌊(3−1)/2⌋ = 1 — 옳다",
   "②: 검출 = 4 − 1 = 3 — 옳다",
   "③: GBN 윈도우 ≤ 2³ − 1 = 7 — 옳다",
   "④: SR 윈도우 ≤ 2³⁻¹ = 4 — 7이라 했으므로 틀렸다"
  ],
  "answer": "④ — Selective Repeat의 최대 윈도우는 2ⁿ⁻¹ = 4이다.",
  "traps": [
   "GBN(2ⁿ−1)과 SR(2ⁿ⁻¹) 공식을 맞바꾼 보기가 단골",
   "해밍 거리 검출(d−1)과 정정(⌊(d−1)/2⌋)을 바꿔 묻는 보기에 주의"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "RAID 용량·결함 허용 계산",
  "problem": "4TB 디스크 8개로 스토리지를 구성할 때 옳은 것은?\n① RAID 5: 사용 용량 28TB, 디스크 2개 고장 허용\n② RAID 6: 사용 용량 24TB, 디스크 2개 고장 허용\n③ RAID 10: 사용 용량 24TB, 디스크 1개 고장 허용\n④ RAID 0: 사용 용량 28TB, 디스크 1개 고장 허용",
  "steps": [
   "RAID 5 = (N-1)×C = 7×4 = 28TB, 결함 허용 1개 → ①은 허용 개수 오류",
   "RAID 6 = (N-2)×C = 6×4 = 24TB, 결함 허용 2개 → ② 옳음",
   "RAID 10 = 50% = 16TB → ③은 용량 오류",
   "RAID 0 = N×C = 32TB, 결함 허용 0개 → ④ 모두 오류"
  ],
  "answer": "② — RAID 6은 이중 패리티로 (8-2)×4TB = 24TB, 2개 고장 허용",
  "traps": [
   "RAID 5와 6의 허용 디스크 수(1개 vs 2개)를 바꿔 제시",
   "RAID 10 용량을 (N-1)로 계산하는 실수"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "충돌·브로드캐스트 도메인 수 판단",
  "problem": "라우터 1대의 인터페이스 2개에 각각 8포트 스위치(VLAN 미설정)가 연결되고, 각 스위치 포트 중 1개에는 4포트 허브가 연결되어 있다. 브로드캐스트 도메인 수는?\n① 1개\n② 2개\n③ 4개\n④ 16개",
  "steps": [
   "브로드캐스트 도메인은 L3 장비(라우터)만 분리한다",
   "라우터 인터페이스가 2개이므로 각 인터페이스 아래 스위치·허브 전체가 하나의 브로드캐스트 도메인",
   "스위치·허브는 브로드캐스트 도메인을 늘리지 않음 → 2개"
  ],
  "answer": "② — 라우터 인터페이스 수만큼 브로드캐스트 도메인이 생긴다",
  "traps": [
   "스위치 포트 수를 브로드캐스트 도메인 수로 세는 실수(충돌 도메인과 혼동)",
   "허브가 도메인을 분리한다고 착각"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "가용도·중단 시간 계산",
  "problem": "MTBF 4,990시간, MTTR 10시간인 서버의 가용도와 연간(8,760시간) 예상 중단 시간으로 옳은 것은?\n① 99.8%, 약 17.5시간\n② 99.9%, 약 8.8시간\n③ 99.98%, 약 1.75시간\n④ 99.5%, 약 43.8시간",
  "steps": [
   "가용도 = MTBF ÷ (MTBF + MTTR) = 4,990 ÷ 5,000 = 0.998 = 99.8%",
   "비가용도 = 1 - 0.998 = 0.002",
   "연간 중단 = 8,760 × 0.002 = 17.52시간"
  ],
  "answer": "① — 99.8%, 약 17.5시간",
  "traps": [
   "분모에 MTTR을 더하지 않고 MTBF만 쓰는 실수",
   "99.9%(8.76시간)처럼 익숙한 Nines 값에 끌림"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "VLSM 서브넷 할당 — 크기 부족 찾기",
  "problem": "192.168.1.0/24를 VLSM으로 나누어 A부서 100대, B부서 50대, C부서 20대, D 점대점 링크 2대를 큰 요구부터 차례로 할당하려 한다. 할당이 옳지 않은 것은?\n① A: 192.168.1.0/25\n② B: 192.168.1.128/26\n③ C: 192.168.1.192/28\n④ D: 192.168.1.224/30",
  "steps": [
   "요구 호스트 수 ≤ 2^(32-n) − 2 를 만족하는 가장 긴 프리픽스를 고른다.",
   "A 100대 → /25(126대) 192.168.1.0~127 — 맞다.",
   "B 50대 → /26(62대) 192.168.1.128~191 — 맞다.",
   "C 20대 → /27(30대)가 필요하다. /28은 14대뿐이라 부족하다 — 틀렸다(정답은 192.168.1.192/27).",
   "D 2대 → /30(2대) 192.168.1.224~227 — 맞다."
  ],
  "answer": "③ — /28은 호스트 14대로 20대를 수용하지 못하므로 /27(30대)이어야 한다.",
  "traps": [
   "주소 수(2^n)와 호스트 수(2^n − 2)를 혼동하지 말 것",
   "VLSM은 큰 요구부터 할당해야 블록 경계가 겹치지 않는다"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "포트 번호·전송 프로토콜 짝 맞추기",
  "problem": "프로토콜과 포트·전송 계층 프로토콜의 연결로 옳은 것은?\n① DHCP 서버 — UDP 68\n② FTP 제어 — TCP 20\n③ SNMP 요청 — UDP 161\n④ POP3 — TCP 143",
  "steps": [
   "DHCP는 서버 67, 클라이언트 68 → ①은 서버·클라이언트를 바꿨다.",
   "FTP는 21 제어, 20 데이터 → ②는 반대다.",
   "SNMP는 요청 161, Trap 162, UDP 사용 → ③ 맞다.",
   "POP3는 110, 143은 IMAP → ④ 틀렸다."
  ],
  "answer": "③ — SNMP 요청(에이전트)은 UDP 161, Trap은 UDP 162를 쓴다.",
  "traps": [
   "DHCP 67/68, FTP 20/21처럼 쌍으로 된 포트는 역할을 바꿔 내는 함정이 잦다",
   "POP3 110 ↔ IMAP 143을 바꿔 내는 보기에 주의"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "IPv6 표기·헤더 특징 판별",
  "problem": "IPv6에 대한 설명으로 옳지 않은 것은?\n① 2001:db8:0:0:1:0:0:1을 2001:db8::1::1로 줄여 쓸 수 있다\n② 기본 헤더는 40바이트 고정 길이다\n③ 링크 로컬 주소는 FE80::/10을 사용한다\n④ 헤더 체크섬 필드가 제거되었다",
  "steps": [
   "축약 규칙: 각 그룹의 앞자리 0 생략, 연속 0 그룹은 ::로 '한 번만' 축약.",
   "①은 ::를 두 번 사용해 원래 0 그룹의 개수를 알 수 없으므로 잘못된 표기다(올바른 예 2001:db8::1:0:0:1).",
   "② 기본 헤더 40바이트 고정 — 맞다.",
   "③ Link-Local FE80::/10 — 맞다. ④ 체크섬 제거 — 맞다."
  ],
  "answer": "① — ::는 주소 하나에 한 번만 쓸 수 있다.",
  "traps": [
   "IPv6 헤더는 '고정 40바이트'이지만 확장 헤더는 Next Header로 별도 연결된다",
   "Hop Limit는 남아 있고 사라진 것은 체크섬이다"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "복합 구성 가용률 계산 — 병렬 후 직렬",
  "problem": "가용률 0.99인 웹 서버 2대를 병렬(1대만 정상이어도 서비스)로 두고, 그 뒤에 가용률 0.999인 DB 서버 1대를 직렬로 연결했다. 전체 가용률에 가장 가까운 것은?\n① 98.90%\n② 99.80%\n③ 99.89%\n④ 99.99%",
  "steps": [
   "병렬 구간: 1 − (1 − 0.99)² = 1 − 0.0001 = 0.9999",
   "직렬 구간: 0.9999 × 0.999 = 0.9989001",
   "백분율로 약 99.89%",
   "가장 약한 직렬 요소(DB 0.999)가 전체 상한을 결정한다는 점을 확인"
  ],
  "answer": "③ — 병렬 0.9999에 DB 0.999를 곱하면 약 0.99890(99.89%)이다.",
  "traps": [
   "병렬을 곱(0.99 × 0.99)으로 계산하면 엉뚱한 98% 대가 나온다",
   "직렬 구성의 전체 가용률은 가장 낮은 요소의 가용률보다 높을 수 없다"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "RTO·RPO 요구에 맞는 대책 고르기",
  "problem": "매일 00시 전체 백업만 수행하는 시스템에 'RPO 1시간 이내'라는 요구가 새로 생겼다. 가장 적절한 대책은?\n① Cold Site 이용 계약 체결\n② 서버 CPU·메모리 증설(Scale-Up)\n③ 1시간 이내 주기의 증분 백업 또는 비동기 복제 도입\n④ 장애 대응 매뉴얼의 연락망 갱신",
  "steps": [
   "RPO는 데이터 손실 허용 구간 → 백업·복제 주기가 RPO보다 짧아야 한다",
   "현재 손실 구간은 최대 24시간이므로 백업·복제 주기를 1시간 이내로 줄여야 한다",
   "Cold Site·연락망은 복구 시간(RTO)·절차 관련, Scale-Up은 성능 대책",
   "따라서 주기 단축(증분 백업·복제·CDP)이 정답"
  ],
  "answer": "③ — RPO는 백업·복제 주기로 맞춘다.",
  "traps": [
   "DR 센터 등급(Mirror·Hot·Cold)은 주로 RTO에 영향을 준다",
   "'복구'라는 말만 보고 RTO와 RPO를 바꿔 고르기 쉽다"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "SNMP 동작 판단",
  "problem": "SNMP에 대한 설명으로 옳은 것은?\n① Trap은 매니저가 에이전트에게 값을 요청하는 메시지이다.\n② SNMPv2c는 커뮤니티 문자열을 암호화해 전송한다.\n③ 에이전트는 UDP 161에서 요청을 받고, 매니저는 UDP 162에서 Trap을 받는다.\n④ Set은 에이전트의 MIB 값을 읽기만 하는 메시지이다.",
  "steps": [
   "①: Trap은 에이전트 → 매니저 방향의 비동기 알림(Push) — 틀림",
   "②: v2c는 v1처럼 커뮤니티 평문, 암호화는 v3(USM) — 틀림",
   "③: 161 요청 수신, 162 Trap 수신 — 맞음",
   "④: Set은 값을 변경(쓰기)하는 메시지, 읽기는 Get — 틀림"
  ],
  "answer": "③ — SNMP 포트는 에이전트 UDP 161, 매니저 Trap 수신 UDP 162이다.",
  "traps": [
   "Get(Pull)과 Trap(Push)의 방향을 뒤집는 보기",
   "v2c의 'c'를 암호(crypto)로 오해 — c는 community를 뜻한다"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "페이지 교체 부재 횟수 계산",
  "problem": "프레임 3개, 참조열 2,3,2,1,5,2,4,5,3,2 에서 LRU 교체 시 페이지 부재 횟수는?\n① 5회\n② 6회\n③ 7회\n④ 8회",
  "steps": [
   "2·3 부재(2회), 2 적중, 1 부재(3회) → [2,3,1]",
   "5 부재: 최근 사용 2(t3)·3(t2)·1(t4) 중 가장 오래된 3 교체 → [2,1,5] (4회)",
   "2 적중, 4 부재: 1(t4)이 가장 오래됨 → 1 교체 → [2,5,4] (5회)",
   "5 적중, 3 부재: 2(t6)가 가장 오래됨 → 2 교체 → [5,4,3] (6회)",
   "2 부재: 4(t7)가 가장 오래됨 → 4 교체 → [5,3,2] (7회)"
  ],
  "answer": "③ 7회 — 시점마다 '가장 오래 전에 사용된' 페이지를 정확히 추적해야 한다",
  "traps": [
   "적재 순서(FIFO)로 교체하면 다른 값이 나온다",
   "적중 시 최근 사용 시점을 갱신하지 않는 실수"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "직접 사상 캐시 주소 필드 분할",
  "problem": "주소 16비트, 캐시 라인 64개, 블록 크기 8바이트인 직접 사상 캐시의 (태그, 인덱스, 오프셋) 비트 수는?\n① (7, 6, 3)\n② (6, 7, 3)\n③ (8, 6, 2)\n④ (10, 3, 3)",
  "steps": [
   "오프셋 = log₂(블록 크기) = log₂8 = 3비트",
   "인덱스 = log₂(라인 수) = log₂64 = 6비트",
   "태그 = 주소 − 인덱스 − 오프셋 = 16 − 6 − 3 = 7비트"
  ],
  "answer": "① (7, 6, 3) — 오프셋은 블록 크기, 인덱스는 라인 수로 결정",
  "traps": [
   "인덱스와 오프셋을 바꿔 계산",
   "캐시 전체 크기(512B)로 오프셋을 잡는 실수"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "SJF·FCFS 평균 대기시간 비교",
  "problem": "도착 시각 0, 실행시간 P1=8, P2=4, P3=2 이다. SJF 평균 대기시간은?\n① 2.67\n② 4\n③ 7.33\n④ 8",
  "steps": [
   "SJF 순서: P3(2) → P2(4) → P1(8)",
   "대기시간: P3=0, P2=2, P1=6",
   "평균 = (0 + 2 + 6) ÷ 3 ≈ 2.67",
   "비교: FCFS(P1→P2→P3)는 대기 0·8·12, 평균 6.67"
  ],
  "answer": "① 2.67 — 짧은 작업 우선이 평균 대기시간을 최소화",
  "traps": [
   "반환시간(대기+실행)과 대기시간 혼동",
   "입력 순서대로(FCFS) 계산하는 실수"
  ]
 }
];
