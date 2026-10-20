/* ============================================================
   정보보안기사 실기 — 학습·퀴즈 데이터
   소스: 02_타자격증_학습자료/정보보안기사_실기/ (00 시험개요·실기전략 + 공부자료 5과목
         + 예시문제_예시답변 단답·서술·실무)
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ※ 실기는 필답형 — 단답(fill)이 주력 유형, 서술·실무형은 examples(모범답안)로 훈련.
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "정보보안기사 실기",
 "brand": "정보보안기사 실기",
 "tag": "정보보안기사 실기 · 한국방송통신전파진흥원",
 "storeKey": "infosecprac",
 "topicUnit": "단원",
 "title": "정보보안기사 실기 — 단답·서술·실무 훈련",
 "h1": "정보보안기사 실기",
 "unit": "과목",
 "outUnit": "문항",
 "passRule": {
  "pct": 60,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "정보보안기사 실기 (국가기술자격 · 직무분야 정보통신)",
 "host": "한국방송통신전파진흥원(KCA) · 시행 협력 한국인터넷진흥원(KISA)",
 "type": "필답형(주관식) — 단답형 + 서술형 + 실무형",
 "time": "180분",
 "pass": "100점 만점 60점 이상 (과목 구분·과락 없음)",
 "book": "저장소 자료 「정보보안기사_실기」 공부자료 5과목 + 예시문제·예시답변",
 "slogan": "정보보안기사 실기 합격 = 단답(약어·포트·로그 경로) + 서술(정의→원리→대응 항목화) + 실무(iptables·Snort 룰·로그·코드 분석)",
 "paperSpec": [
  {
   "s": "s1",
   "n": 2
  },
  {
   "s": "s2",
   "n": 2
  },
  {
   "s": "s3",
   "n": 2
  },
  {
   "s": "s4",
   "n": 2
  },
  {
   "s": "s5",
   "n": 2
  }
 ],
 "footer": [
  "정보보안기사 실기 / 주관 <b>한국방송통신전파진흥원(KCA)</b> · 필답형 180분 · <b>100점 만점 60점 이상</b> (과목 구분 없음)",
  "영역: 시스템 보안 · 네트워크 보안 · 애플리케이션 보안 · 정보보안 일반 · 정보보안 관리·법규 — 사이트의 영역별 20문항은 학습 배분용이며 공식 배점이 아닙니다.",
  "데이터 소스: <code>02_타자격증_학습자료/정보보안기사_실기</code> → <code>학습사이트/data.js</code> · 진도·오답노트는 브라우저(localStorage)에만 저장됩니다. ⚠ 문항은 학습자료를 바탕으로 새로 만든 연습 문제이며 실제 기출이 아닙니다. 실기는 필답형이므로 퀴즈의 4지선다·OX 는 개념 점검용, ★단답 입력과 📄 예시문제(서술·실무 모범답안)★ 가 실전 훈련입니다."
 ],
 "info": [
  {
   "title": "실기 구성 (대략 — 회차별 변동, 정확 배점은 KCA 공지 확인)",
   "type": "table",
   "head": [
    "유형",
    "배점(대략)",
    "내용"
   ],
   "rows": [
    [
     "단답형",
     "약 30점",
     "용어·약어·포트·로그 경로 등 1~2줄 답"
    ],
    [
     "서술형",
     "약 40점",
     "공격 원리·절차·대응 방안 서술"
    ],
    [
     "실무형",
     "약 30점",
     "명령어·방화벽/IDS 룰·로그/패킷·코드 취약점 분석"
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
     "전체",
     "100점 만점 60점 이상"
    ],
    [
     "과목별",
     "과목 구분 없음 (과락 없음)"
    ],
    [
     "응시 자격",
     "필기 합격자"
    ]
   ]
  },
  {
   "title": "180분 시간 배분 (권장)",
   "type": "table",
   "head": [
    "단계",
    "시간",
    "할 일"
   ],
   "rows": [
    [
     "전체 훑기",
     "5분",
     "아는 것·모르는 것 표시"
    ],
    [
     "단답",
     "25~30분",
     "확실한 것부터 채워 선확보"
    ],
    [
     "서술",
     "60~70분",
     "정의→원리→대응, 항목화·두괄식"
    ],
    [
     "실무",
     "50~60분",
     "명령어·옵션·경로 정확히"
    ],
    [
     "검토",
     "15~20분",
     "빈칸 메우기·약어 풀이·오타 확인"
    ]
   ]
  },
  {
   "title": "채점 = 키워드 매칭 — 답안 작성 7원칙",
   "type": "table",
   "head": [
    "원칙",
    "요령"
   ],
   "rows": [
    [
     "핵심 키워드 우선",
     "결론·핵심 용어를 첫 줄에"
    ],
    [
     "두괄식 + 항목화",
     "한 항목 = 한 채점 키워드"
    ],
    [
     "용어 정확 표기",
     "표준·프로토콜명 정자·대소문자 그대로"
    ],
    [
     "부분점수 확보",
     "아는 키워드라도 빈칸 없이"
    ],
    [
     "약어 풀어쓰기",
     "영문 풀네임 + 한글 의미 병기"
    ],
    [
     "명령어 정확 표기",
     "옵션·하이픈·경로 한 글자도 틀리지 않게"
    ],
    [
     "가독성",
     "번호·들여쓰기·소제목으로 구분"
    ]
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "시스템 보안",
  "short": "시스템",
  "out": 20,
  "color": "#3b82f6",
  "desc": "Linux 권한(chmod·SetUID·umask)·계정(/etc/passwd·shadow)·로그(secure·wtmp·btmp·lastlog)·Windows 레지스트리·이벤트로그·악성코드·버퍼 오버플로·레이스 컨디션 — ★실무형 단골★ 권한 숫자 변환·SetUID 탐색 find·로그 경로·last/lastb"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "네트워크 보안",
  "short": "네트워크",
  "out": 20,
  "color": "#0ea5e9",
  "desc": "TCP/IP·포트·3-way handshake·스캔 유형 식별(플래그 패턴)·DoS/DDoS 탐지·대응·스니핑·스푸핑 방어·tcpdump 패킷 분석·iptables·Snort 룰·VPN/IPsec·무선 보안 — ★실무형 단골★ 방화벽·IDS 룰 작성·패킷 판독"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "애플리케이션 보안",
  "short": "애플리케이션",
  "out": 20,
  "color": "#f59e0b",
  "desc": "HTTP·웹 구조·OWASP Top 10·인젝션·XSS·CSRF 대응·파일 업로드/다운로드 취약점 조치·웹 로그(access_log) 분석·시큐어코딩(Prepared Statement·출력 인코딩)·웹서버 보안 설정·DNS·메일·전자상거래 보안 — ★실무형 단골★ 로그 판독·취약 코드 수정"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "정보보안 일반",
  "short": "보안일반",
  "out": 20,
  "color": "#8b5cf6",
  "desc": "대칭/공개키·블록암호 운용모드·해시·MAC·전자서명·PKI·키 교환·인증(SSO·OTP·Kerberos)·접근통제(DAC·MAC·RBAC·BLP·Biba) — ★단답·서술 단골★ 원리 비교·절차 서술"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "정보보안 관리·법규",
  "short": "관리·법규",
  "out": 20,
  "color": "#ef4444",
  "desc": "ISMS-P·위험관리(분석 기법·처리 전략)·BCP/DRP·RTO/RPO·개인정보보호법·정보통신망법·안전성 확보조치 — ★단답·서술 단골★ 인증 기준·위험 처리 4전략·법정 의무 키워드"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "Linux 권한",
  "front": "r·w·x 권한 비트의 8진수 값과 755의 rwx 표기는?",
  "key": "r=4, w=2, x=1 / 755=rwxr-xr-x",
  "back": "권한은 ★소유자·그룹·기타 3그룹 × r·w·x 3비트★. 그룹별 합산(0~7) → 755 = rwx(7) r-x(5) r-x(5).",
  "tip": "4·2·1 합산 — rwx=7, r-x=5, r--=4"
 },
 {
  "s": "s1",
  "g": "Linux 권한",
  "front": "umask 022일 때 새 파일·디렉터리의 기본 권한은?",
  "key": "파일 644 / 디렉터리 755",
  "back": "기본 최대 권한은 ★파일 666, 디렉터리 777★. 결과 = 기본권한 & ~umask → 022 → 644/755, ★보안 권장 027 → 640/750★.",
  "tip": "파일은 666에서 출발 — 실행비트를 원래 주지 않는다"
 },
 {
  "s": "s1",
  "g": "Linux 권한",
  "front": "디렉터리 안 파일의 삭제 가능 여부를 결정하는 권한은?",
  "key": "상위 디렉터리의 w 권한",
  "back": "삭제·생성·이름변경은 ★파일 자신이 아니라 디렉터리의 w★로 결정. 디렉터리 r=목록(ls), x=진입(cd)·접근.",
  "tip": "삭제는 '방(디렉터리)'의 쓰기 권한"
 },
 {
  "s": "s1",
  "g": "Linux 권한",
  "front": "SetUID·SetGID·Sticky Bit의 8진수 값은?",
  "key": "4000 / 2000 / 1000",
  "back": "특수권한은 ★4번째(맨 앞) 8진수 자리★. SetUID=u의 x자리 s, SetGID=g의 x자리 s, Sticky=o의 x자리 t.",
  "tip": "4·2·1 — 일반권한과 같은 순서(U·G·O)"
 },
 {
  "s": "s1",
  "g": "Linux 권한",
  "front": "/usr/bin/passwd가 -rwsr-xr-x(4755)인 이유는?",
  "key": "SetUID — /etc/shadow 수정을 위해 root 권한으로 실행",
  "back": "SetUID는 실행자가 아닌 ★파일 소유자(root) 권한★으로 프로세스가 동작(EUID=0). 일반 사용자가 root만 쓸 수 있는 shadow를 갱신하려면 필요.",
  "tip": "실행자 권한 X, ★소유자 권한★ O"
 },
 {
  "s": "s1",
  "g": "Linux 권한",
  "front": "권한 표기에서 소문자 s와 대문자 S의 차이는?",
  "key": "s=실행권한 있음 / S=실행권한 없음(오설정)",
  "back": "특수권한 위치에 ★x가 있으면 소문자 s·t, 없으면 대문자 S·T★. 대문자는 실행 불가한 비정상 설정 신호.",
  "tip": "대문자 = 비어 있는(x 없는) 특수권한"
 },
 {
  "s": "s1",
  "g": "Linux 권한",
  "front": "시스템 전체에서 SetUID 파일을 찾는 명령은?",
  "key": "find / -perm -4000 -type f 2>/dev/null",
  "back": "★-perm -4000★ = 4000 비트를 '포함'하는 파일. SetGID는 -2000, 둘 다 -6000, Sticky 디렉터리는 -1000 -type d.",
  "tip": "하이픈(-) 빠지면 '정확히 4000'만 검색 — 감점"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "/etc/passwd 7개 필드를 순서대로 쓰면?",
  "key": "계정명:x:UID:GID:GECOS:홈:셸",
  "back": "예 root:x:0:0:root:/root:/bin/bash. ★UID 0 = root★, 셸을 ★/sbin/nologin★으로 두면 로그인 차단.",
  "tip": "계·패·U·G·설·홈·셸"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "passwd 2번째 필드가 x인 이유는?",
  "key": "해시를 /etc/shadow로 분리 저장",
  "back": "passwd는 모든 사용자가 읽어야 하므로(644) 해시를 ★root만 읽는 shadow(600)★로 분리 — 오프라인 크래킹 방지.",
  "tip": "x = 'shadow 보세요' 표시"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "/etc/shadow 해시 접두어 $1$·$5$·$6$의 의미는?",
  "key": "MD5 / SHA-256 / SHA-512",
  "back": "형식 ★$id$salt$hash★. 비밀번호 필드가 ★! 또는 *★면 잠금(로그인 불가). 9개 필드: 계정·해시·최종변경·Min·Max·Warn·Inactive·Expire·예약.",
  "tip": "6이 가장 큼 = SHA-512"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "PAM의 4가지 관리 타입은?",
  "key": "auth · account · password · session",
  "back": "auth=인증(패스워드 확인), account=계정 유효성(만료·시간), password=패스워드 변경(복잡도), session=세션 시작·종료 처리. 설정 위치 ★/etc/pam.d/서비스명★.",
  "tip": "인증→계정→비번→세션"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "PAM Control Flag required와 requisite의 차이는?",
  "key": "required=끝까지 진행 후 실패 / requisite=즉시 중단",
  "back": "required는 실패해도 나머지 모듈을 수행한 뒤 ★최종 실패★, requisite는 ★실패 즉시 반환★. sufficient=성공 시 즉시 통과, optional=결과 무시.",
  "tip": "requisite의 'site' = 그 자리에서 끝"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "wheel 그룹 사용자만 su를 허용하는 방법은?",
  "key": "/etc/pam.d/su에 pam_wheel.so",
  "back": "auth required pam_wheel.so use_uid (group=wheel) 설정 후 usermod -aG wheel admin 으로 허용 사용자 추가.",
  "tip": "su 제한 = wheel(바퀴)를 쥔 사람만"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "패스워드 복잡도·로그인 실패 잠금 PAM 모듈은?",
  "key": "pam_pwquality.so / pam_faillock.so",
  "back": "복잡도: pam_pwquality(구 pam_cracklib), /etc/security/pwquality.conf의 minlen·ucredit 등. 실패 잠금: pam_faillock(구 pam_tally2), deny=5 unlock_time=900 형식.",
  "tip": "quality=품질(복잡도), fail+lock=실패잠금"
 },
 {
  "s": "s1",
  "g": "계정·인증",
  "front": "sudoers 파일을 편집할 때 반드시 쓰는 명령과 이유는?",
  "key": "visudo — 문법 검사·동시편집 잠금",
  "back": "직접 vi로 편집 중 문법 오류가 나면 ★sudo 전체 불능★. visudo는 저장 시 문법을 검사하고 잠금 처리. 사용 이력은 secure/auth.log에 기록.",
  "tip": "sudoers는 vi 말고 visudo"
 },
 {
  "s": "s1",
  "g": "Linux 로그",
  "front": "wtmp·btmp·lastlog·utmp를 조회하는 명령은?",
  "key": "last / lastb / lastlog / who·w",
  "back": "wtmp=로그인 성공·로그아웃·부팅, ★btmp=로그인 실패★, lastlog=사용자별 최종 로그인, utmp(/var/run)=현재 접속자. ★모두 바이너리 → cat 불가★.",
  "tip": "b(bad)tmp = 실패 = lastb"
 },
 {
  "s": "s1",
  "g": "Linux 로그",
  "front": "RHEL과 Debian 계열의 인증 로그 파일은?",
  "key": "/var/log/secure / /var/log/auth.log",
  "back": "SSH 로그인 성공(Accepted)·실패(Failed password)·su·sudo 기록. 배포판 구분이 단골 함정.",
  "tip": "Red Hat = secure, Debian = auth"
 },
 {
  "s": "s1",
  "g": "Windows 보안",
  "front": "윈도우 로그온 성공·실패·로그오프 이벤트 ID는?",
  "key": "4624 / 4625 / 4634",
  "back": "Security 로그. ★4625 단시간 다수 = 무차별 대입·패스워드 스프레이★. 4624는 Logon Type으로 방식 구분.",
  "tip": "24 성공, 25 실패(하나 더=실패), 34 로그오프"
 },
 {
  "s": "s1",
  "g": "Windows 보안",
  "front": "4672·4720·4732·1102·7045 이벤트의 의미는?",
  "key": "특수권한 로그온·계정생성·로컬그룹 추가·감사로그 삭제·서비스 설치",
  "back": "4672=관리자급 권한 부여, 4720=계정 생성, 4732=보안 로컬그룹 멤버 추가(권한상승 흔적), ★1102=감사 로그 삭제(흔적 제거)★, 7045=새 서비스 설치(백도어 의심).",
  "tip": "1102 = 지운 흔적 / 7045 = 서비스 심기"
 },
 {
  "s": "s1",
  "g": "Windows 보안",
  "front": "Logon Type 2·3·10의 의미는?",
  "key": "2=대화형(콘솔) / 3=네트워크 / 10=원격대화형(RDP)",
  "back": "4624·4625와 함께 출제. 4=배치, 5=서비스, 7=잠금해제.",
  "tip": "10 = RDP(원격데스크톱)"
 },
 {
  "s": "s1",
  "g": "Windows 보안",
  "front": "SID에서 RID 500과 501은?",
  "key": "500=Administrator / 501=Guest",
  "back": "형식 S-1-5-21-<도메인>-<RID>. 일반 사용자는 1000부터. ★계정명이 바뀌어도 SID는 불변★ → 권한은 SID 기준.",
  "tip": "500 관리자, 501 손님"
 },
 {
  "s": "s1",
  "g": "Windows 보안",
  "front": "악성코드가 재부팅 후 자동 실행되도록 등록하는 레지스트리 키는?",
  "key": "HKLM·HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run(RunOnce)",
  "back": "지속성(Persistence) 확보의 대표 경로. reg query 또는 Autoruns로 점검.",
  "tip": "Run = 부팅 시 뛰어나오는 키"
 },
 {
  "s": "s1",
  "g": "Windows 보안",
  "front": "로컬 계정 해시 저장소와 Mimikatz가 노리는 프로세스는?",
  "key": "SAM / lsass.exe",
  "back": "SAM(HKLM\\SAM, %SystemRoot%\\System32\\config\\SAM)에 NTLM 해시 저장. Mimikatz는 ★lsass 메모리★에서 해시·티켓 탈취 → Pass-the-Hash/Ticket. 대응: Credential Guard.",
  "tip": "LSA = 인증 중재자, 그 프로세스 lsass"
 },
 {
  "s": "s1",
  "g": "악성코드",
  "front": "Virus·Worm·Trojan의 차이는?",
  "key": "Virus=숙주 필요·자기복제 / Worm=독립·자가전파 / Trojan=정상 위장·복제 X",
  "back": "비교 기준 ★자기복제·숙주·전파★로 서술. 논리폭탄=조건(날짜·이벤트) 충족 시 동작.",
  "tip": "웜은 혼자 기어간다(숙주 불필요)"
 },
 {
  "s": "s1",
  "g": "악성코드",
  "front": "루트킷 탐지가 어려운 이유와 점검 방법은?",
  "key": "커널 후킹으로 ps·netstat·ls 결과 위조 → 외부 부팅·무결성 비교·rkhunter",
  "back": "감염 시스템의 명령 출력 자체를 신뢰할 수 없음. ★신뢰 매체 부팅, 기준선 해시 비교, chkrootkit·rkhunter★로 점검.",
  "tip": "숨기는 놈은 밖에서 본다"
 },
 {
  "s": "s1",
  "g": "메모리·권한상승",
  "front": "BOF 위험 함수와 안전 대체 함수는?",
  "key": "gets·strcpy·strcat·sprintf → fgets·strncpy·strncat·snprintf",
  "back": "원인 = ★경계 검사 없는 입력 복사★. 대체 함수는 길이 인자로 버퍼 크기를 제한.",
  "tip": "n이 붙으면 길이 제한"
 },
 {
  "s": "s1",
  "g": "메모리·권한상승",
  "front": "ASLR·DEP(NX)·Stack Canary의 역할은?",
  "key": "주소 임의화 / 데이터 영역 실행 금지 / 리턴주소 앞 값 검증",
  "back": "ASLR=스택·힙·라이브러리 주소 무작위, DEP=W^X로 쉘코드 실행 차단, Canary(SSP)=변조 시 abort. RELRO=GOT 보호.",
  "tip": "주소 섞고·실행 막고·카나리로 감시"
 },
 {
  "s": "s1",
  "g": "메모리·권한상승",
  "front": "TOCTOU 레이스 컨디션의 원리와 대응은?",
  "key": "검사 시점과 사용 시점 사이 심볼릭 링크 교체 → O_EXCL·mkstemp·O_NOFOLLOW",
  "back": "SetUID 프로그램이 임시파일 확인 후 사용하는 틈에 ★심볼릭 링크로 교체★ → root 권한으로 다른 파일 덮어쓰기. 원자적 연산·안전 임시파일·SetUID 최소화.",
  "tip": "Check와 Use 사이의 빈틈"
 },
 {
  "s": "s1",
  "g": "무결성·점검",
  "front": "무결성 점검 원리와 기준선 DB 생성 시점은?",
  "key": "해시 기준선 비교(Tripwire·AIDE) / 도입 직후(침해 전)",
  "back": "해시·권한·소유자·크기·inode를 DB로 저장 후 주기 비교. ★침해 후 생성한 기준선은 무의미★, DB는 읽기전용·원격 보관.",
  "tip": "깨끗할 때 사진을 찍어둔다"
 },
 {
  "s": "s1",
  "g": "무결성·점검",
  "front": "특정 포트(8080)를 점유한 프로세스를 찾는 명령은?",
  "key": "lsof -i :8080 (또는 netstat -ntlp | grep 8080)",
  "back": "netstat·ss 옵션: n=숫자, t=TCP, u=UDP, l=LISTEN, p=PID/프로그램. 실행파일 실경로는 ls -l /proc/PID/exe.",
  "tip": "lsof = list open files"
 },
 {
  "s": "s2",
  "g": "TCP/IP·포트",
  "front": "3-way Handshake 순서와 seq/ack 규칙",
  "key": "SYN → SYN+ACK → ACK",
  "back": "① C→S SYN(seq=x) ② S→C SYN+ACK(seq=y, ack=x+1) ③ C→S ACK(seq=x+1, ack=y+1). ★ack = 상대 seq + 1★.",
  "tip": "②까지만 진행된 상태 = Half-Open(SYN_RECV)"
 },
 {
  "s": "s2",
  "g": "TCP/IP·포트",
  "front": "4-way 종료 후 능동 종료 측이 머무는 상태",
  "key": "TIME_WAIT (2MSL)",
  "back": "FIN→ACK→FIN→ACK. 마지막 ACK를 보낸 쪽이 ★TIME_WAIT★로 2MSL 대기 — 지연 패킷 소멸·마지막 ACK 재전송 보장.",
  "tip": "수동 종료 측은 CLOSE_WAIT"
 },
 {
  "s": "s2",
  "g": "TCP/IP·포트",
  "front": "TCP 플래그 6종",
  "key": "SYN·ACK·FIN·RST·PSH·URG",
  "back": "SYN=연결 동기화, ACK=확인, FIN=정상 종료, RST=강제 종료·거부, PSH=즉시 전달, URG=긴급(Urgent Pointer 유효).",
  "tip": "Closed 포트의 응답 = RST"
 },
 {
  "s": "s2",
  "g": "TCP/IP·포트",
  "front": "tcp[13] 플래그 옥텟 비트값",
  "key": "FIN1 SYN2 RST4 PSH8 ACK16 URG32",
  "back": "TCP 헤더 13번째 바이트가 플래그. SYN+ACK = 2+16 = ★18★, 순수 SYN = 2.",
  "tip": "XMAS(FIN+PSH+URG) = 1+8+32 = 41"
 },
 {
  "s": "s2",
  "g": "TCP/IP·포트",
  "front": "ICMP Type 3 Code 3",
  "key": "Port Unreachable",
  "back": "목적지 포트 도달 불가. ★UDP Closed 포트의 응답★. Type 8/0 = Echo Request/Reply, Type 11 = Time Exceeded(traceroute).",
  "tip": "Type 5 = Redirect"
 },
 {
  "s": "s2",
  "g": "TCP/IP·포트",
  "front": "DNS 질의와 Zone Transfer 포트",
  "key": "UDP 53 / TCP 53",
  "back": "일반 질의는 UDP 53, ★Zone Transfer(AXFR)는 TCP 53★. AXFR 허용 IP를 보조 DNS로 제한해야 내부 호스트 목록 유출 방지.",
  "tip": "질의·전송 포트 혼동 주의"
 },
 {
  "s": "s2",
  "g": "스캔 탐지",
  "front": "로그에 SYN 후 즉시 RST가 반복되는 패턴",
  "key": "SYN(Half-Open) 스캔",
  "back": "대상이 SYN+ACK를 보내면 스캐너가 ★RST로 끊어★ 3-way가 완성되지 않음 → 애플리케이션 세션 로그가 남지 않아 '스텔스 스캔'이라 함. 방화벽·IDS의 SYN 카운트로 탐지.",
  "tip": "Connect 스캔은 3-way 완성 → 서비스 로그 남음"
 },
 {
  "s": "s2",
  "g": "스캔 탐지",
  "front": "FIN·NULL·XMAS 스캔의 판정 원리",
  "key": "무응답=Open / RST=Closed",
  "back": "RFC 793 규칙상 Closed 포트는 비정상 패킷에 RST 응답, Open 포트는 무응답. ★SYN 스캔과 반대 해석★. RFC 미준수 OS(Windows 등)에서는 부정확.",
  "tip": "NULL=플래그 0, XMAS=FIN+PSH+URG"
 },
 {
  "s": "s2",
  "g": "스캔 탐지",
  "front": "ACK 스캔의 목적",
  "key": "방화벽 룰(필터링) 매핑",
  "back": "Open/Closed 판정이 아니라 RST가 돌아오면 unfiltered, 무응답·ICMP 오류면 filtered → ★상태 추적 방화벽 존재 여부★ 파악.",
  "tip": "포트 개방 여부 판단 용도 아님"
 },
 {
  "s": "s2",
  "g": "스캔 탐지",
  "front": "UDP 스캔이 느린 이유",
  "key": "무응답 시 재전송·타임아웃 대기",
  "back": "UDP는 응답이 없으면 Open|filtered로 판단해야 해서 재전송·타임아웃을 기다림. Closed는 ICMP Type3 Code3 응답. ICMP 응답 속도 제한도 지연 원인.",
  "tip": "ICMP 3/3 = Closed"
 },
 {
  "s": "s2",
  "g": "DoS 대응",
  "front": "SYN Flood의 고갈 대상",
  "key": "반연결 큐(Backlog)",
  "back": "SYN만 대량 수신 후 ACK가 오지 않아 SYN_RECV 상태가 Backlog를 채움 → 정상 연결 거부. 탐지: ss -tan state syn-recv | wc -l 급증.",
  "tip": "대역폭이 아니라 연결 큐 고갈"
 },
 {
  "s": "s2",
  "g": "DoS 대응",
  "front": "SYN Cookie",
  "key": "seq에 연결 정보 인코딩",
  "back": "SYN 수신 시 큐에 저장하지 않고 ISN(초기 seq)에 정보를 인코딩 → 정상 ACK가 오면 복원. Linux: sysctl -w net.ipv4.tcp_syncookies=1.",
  "tip": "Backlog 크기와 무관하게 동작"
 },
 {
  "s": "s2",
  "g": "DoS 대응",
  "front": "Smurf vs Fraggle",
  "key": "ICMP vs UDP 증폭",
  "back": "둘 다 출발지를 피해자로 위조 + 브로드캐스트 주소로 전송해 응답 증폭. Smurf=ICMP Echo, Fraggle=UDP(echo·chargen). 대응: ★Directed Broadcast 차단★.",
  "tip": "프로토콜만 다름"
 },
 {
  "s": "s2",
  "g": "DoS 대응",
  "front": "Slowloris",
  "key": "연결 슬롯 고갈(L7, 저대역)",
  "back": "HTTP 헤더를 완료하지 않고 조금씩 보내 연결을 오래 유지 → 웹서버 동시 연결 슬롯 고갈. 대응: 요청 헤더 타임아웃(mod_reqtimeout), IP당 동시 연결 제한, 리버스 프록시.",
  "tip": "대역폭 공격 아님"
 },
 {
  "s": "s2",
  "g": "DoS 대응",
  "front": "DDoS 3분류",
  "key": "Volume·Protocol·Application",
  "back": "Volume(대역폭): UDP/ICMP Flood, DNS·NTP·Memcached 증폭 / Protocol(자원): SYN Flood, Ping of Death / Application(L7): HTTP Flood, Slowloris, RUDY.",
  "tip": "증폭 공격의 전제 = 출발지 IP 위조"
 },
 {
  "s": "s2",
  "g": "DoS 대응",
  "front": "Land 공격 대응",
  "key": "Ingress Filtering",
  "back": "출발지 IP = 목적지 IP인 패킷으로 자기 참조 루프 유발. 경계에서 내부 주소를 출발지로 한 외부 유입 패킷 차단(Ingress Filter)으로 대응.",
  "tip": "출발지 위조 공격 공통 대응 = Ingress/Egress Filtering(BCP 38)"
 },
 {
  "s": "s2",
  "g": "스니핑·스푸핑 대응",
  "front": "ARP 스푸핑 탐지 징후",
  "key": "게이트웨이 MAC 변경·한 MAC에 여러 IP",
  "back": "위조 ARP Reply로 캐시가 '게이트웨이 IP ↔ 공격자 MAC'으로 오염 → MITM. arp -a에서 서로 다른 IP가 같은 MAC을 가리키면 의심. 탐지 도구 arpwatch.",
  "tip": "ARP는 무상태 — 요청 없는 Reply도 반영"
 },
 {
  "s": "s2",
  "g": "스니핑·스푸핑 대응",
  "front": "ARP 스푸핑 대응 4가지",
  "key": "Static ARP·DAI·DHCP Snooping·Port Security",
  "back": "정적 ARP 등록(arp -s / ip neigh add … nud permanent), 스위치 DAI(Dynamic ARP Inspection)+DHCP Snooping 바인딩, 포트당 MAC 수 제한(Port Security), arpwatch 모니터링.",
  "tip": "DAI는 DHCP Snooping 바인딩 테이블을 근거로 검사"
 },
 {
  "s": "s2",
  "g": "스니핑·스푸핑 대응",
  "front": "Promiscuous Mode",
  "key": "자기 MAC이 아닌 프레임도 수신",
  "back": "NIC 설정. 스니핑의 전제. 탐지: ip link의 PROMISC 플래그, 로그의 'entered promiscuous mode'. Port Mirroring(SPAN)은 스위치 측 설정.",
  "tip": "스니핑=수동 공격(기밀성 위협)"
 },
 {
  "s": "s2",
  "g": "스니핑·스푸핑 대응",
  "front": "MAC Flooding(Switch Jamming) 대응",
  "key": "Port Security",
  "back": "위조 MAC 대량 유입으로 스위치 MAC 테이블(CAM)을 가득 채우면 스위치가 허브처럼 플러딩 → 스니핑 가능. 대응: 포트당 허용 MAC 수 제한·위반 시 shutdown.",
  "tip": "CAM 테이블 고갈"
 },
 {
  "s": "s2",
  "g": "스니핑·스푸핑 대응",
  "front": "DNS 캐시 포이즈닝 대응",
  "key": "DNSSEC·포트 랜덤화",
  "back": "위조 응답이 Transaction ID·출발지 포트·질의 이름을 맞추면 캐시 오염. 대응: ★DNSSEC(응답 전자서명 검증)★, Source Port Randomization, DoH/DoT, 재귀 질의 허용 범위 제한.",
  "tip": "DoH/DoT는 암호화, DNSSEC는 무결성·출처 인증"
 },
 {
  "s": "s2",
  "g": "스니핑·스푸핑 대응",
  "front": "세션 하이재킹 대응(웹)",
  "key": "HTTPS·쿠키 속성·재인증",
  "back": "HTTPS 강제, 쿠키 HttpOnly(스크립트 접근 차단)·Secure(HTTPS만)·SameSite, 세션 타임아웃, 중요 기능 재인증, 로그인 시 세션 ID 재발급.",
  "tip": "HSTS로 SSL Strip 방어"
 },
 {
  "s": "s2",
  "g": "패킷 분석",
  "front": "tcpdump 캡처 필터 vs Wireshark 디스플레이 필터",
  "key": "BPF vs 디스플레이 문법",
  "back": "tcpdump: 'tcp[13] & 2 != 0', host·port 키워드(BPF) / Wireshark: tcp.flags.syn == 1, ip.addr == x (디스플레이 필터). 문법이 서로 다름.",
  "tip": "SYN만: tcp.flags.syn==1 && tcp.flags.ack==0"
 },
 {
  "s": "s2",
  "g": "패킷 분석",
  "front": "덤프에서 SYN Flood 판별",
  "key": "SYN 다수 + ACK 없음",
  "back": "같은 목적지 포트로 다수 출발지(대개 위조)의 SYN만 반복, 서버의 SYN+ACK에 ACK가 돌아오지 않음, SYN_RECV 급증.",
  "tip": "RST가 대량이면 스캔 의심"
 },
 {
  "s": "s2",
  "g": "방화벽·iptables",
  "front": "DROP vs REJECT",
  "key": "무응답 폐기 vs 거부 응답",
  "back": "DROP은 패킷을 조용히 버림(상대는 타임아웃), REJECT는 ICMP Port Unreachable 또는 TCP RST로 거부 회신.",
  "tip": "외부 노출 정보 최소화엔 DROP"
 },
 {
  "s": "s2",
  "g": "방화벽·iptables",
  "front": "iptables 룰 매칭 순서",
  "key": "위→아래, 첫 매칭 적용",
  "back": "체인 안 룰을 순서대로 비교해 처음 일치한 룰의 타깃 적용. -A=끝에 추가, -I 체인 1=맨 앞 삽입. 허용 예외는 차단 룰보다 위에.",
  "tip": "기본정책(-P)은 아무 룰도 안 맞을 때"
 },
 {
  "s": "s2",
  "g": "방화벽·iptables",
  "front": "iptables 화이트리스트 기본 골격",
  "key": "-P INPUT DROP + ESTABLISHED 허용",
  "back": "iptables -P INPUT DROP / -A INPUT -i lo -j ACCEPT / -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT / 필요한 서비스 포트만 ACCEPT.",
  "tip": "원격 작업 중 DROP 정책 먼저 걸면 접속 끊김"
 },
 {
  "s": "s2",
  "g": "IDS·Snort 룰",
  "front": "IDS vs IPS",
  "key": "out-of-band 탐지 vs inline 차단",
  "back": "IDS는 미러 트래픽을 받아 탐지·경보만, IPS는 트래픽 경로에 inline 배치되어 실시간 차단. 탐지 방식: Signature(알려진 패턴) / Anomaly(정상 기준 이탈, Zero-Day 탐지 가능·오탐 많음).",
  "tip": "IPS 장애 시 서비스 영향 → fail-open/close 정책"
 },
 {
  "s": "s2",
  "g": "IDS·Snort 룰",
  "front": "Snort 룰 헤더 구성",
  "key": "action proto src sport -> dst dport",
  "back": "예: alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:\"…\"; content:\"…\"; sid:1000001; rev:1;). 방향 -> 단방향, <> 양방향.",
  "tip": "로컬 룰 sid는 1,000,000 이상"
 },
 {
  "s": "s2",
  "g": "VPN·무선",
  "front": "IPSec AH vs ESP",
  "key": "ESP만 암호화",
  "back": "AH: 무결성·출처 인증(암호화 없음, NAT 통과 불가) / ESP: 무결성·인증·★기밀성★. Transport 모드=원본 IP 헤더 유지, Tunnel 모드=새 IP 헤더로 전체 캡슐화.",
  "tip": "NAT 환경은 NAT-T(UDP 4500)"
 },
 {
  "s": "s3",
  "g": "HTTP",
  "front": "HTTP 상태코드 계열",
  "key": "2xx 성공·3xx 이동·4xx 클라이언트 오류·5xx 서버 오류",
  "back": "200 OK, 301/302 리다이렉트, 401 인증 필요, 403 접근 거부, 404 없음, 500 서버 내부 오류. ★로그 분석에서 공격 성공 여부 판단의 1차 근거★.",
  "tip": "401=인증 안 됨, 403=인증됐어도 권한 없음"
 },
 {
  "s": "s3",
  "g": "HTTP",
  "front": "안전하지 않은 HTTP 메서드",
  "key": "PUT·DELETE·TRACE 비활성화",
  "back": "운영 웹서버는 필요한 메서드(GET·POST 등)만 허용. TRACE 는 XST(Cross Site Tracing) 우려로 비활성화(Apache TraceEnable Off).",
  "tip": "OPTIONS 응답의 Allow 헤더로 허용 메서드 점검"
 },
 {
  "s": "s3",
  "g": "입력값 검증",
  "front": "SQL 인젝션 근본 대책",
  "key": "PreparedStatement(바인딩 변수)",
  "back": "사용자 입력을 SQL 문 구조와 ★분리★해 데이터로만 전달. 쿼리 구조가 미리 컴파일되므로 입력값이 구문으로 해석되지 않는다.",
  "tip": "WAF·필터링은 보조 수단 — 근본 대책은 파라미터화 쿼리"
 },
 {
  "s": "s3",
  "g": "입력값 검증",
  "front": "MyBatis #{} vs ${}",
  "key": "#{} = 바인딩 / ${} = 문자열 치환",
  "back": "#{} 는 PreparedStatement 바인딩으로 안전, ${} 는 문자열을 그대로 SQL 에 이어 붙여 위험. 정렬 컬럼명 등 불가피하면 허용목록으로 검증.",
  "tip": "시험 단골: '${} 사용 금지'"
 },
 {
  "s": "s3",
  "g": "입력값 검증",
  "front": "XSS 근본 대책",
  "key": "출력 인코딩(HTML 엔티티)",
  "back": "사용자 입력을 화면에 출력할 때 컨텍스트(HTML 본문·속성·JS·URL)에 맞게 인코딩해 브라우저가 코드로 해석하지 않게 한다. 보조: 입력 검증, CSP, HttpOnly.",
  "tip": "입력 필터는 보조, ★출력 인코딩★이 핵심"
 },
 {
  "s": "s3",
  "g": "입력값 검증",
  "front": "XSS 3유형",
  "key": "Stored·Reflected·DOM",
  "back": "Stored=서버(게시판 등)에 저장돼 열람자에게 실행, Reflected=요청 파라미터가 응답에 즉시 반사, DOM=서버 응답과 무관하게 클라이언트 스크립트의 DOM 처리에서 발생.",
  "tip": "DOM 기반은 서버 로그에 흔적이 남지 않을 수 있다"
 },
 {
  "s": "s3",
  "g": "입력값 검증",
  "front": "운영체제 명령어 삽입 대책",
  "key": "시스템 명령 호출 자제 + 인자 분리",
  "back": "언어 라이브러리 기능으로 대체, 불가피하면 셸을 거치지 않도록 인자를 배열로 분리(ProcessBuilder), 입력값 허용목록 검증, 웹 프로세스 최소 권한.",
  "tip": "PHP escapeshellarg() 는 인자 이스케이프"
 },
 {
  "s": "s3",
  "g": "입력값 검증",
  "front": "SSRF 대책",
  "key": "URL 허용목록 + 내부 IP 차단",
  "back": "서버가 사용자 지정 URL 로 요청을 보내는 기능에서 내부망·클라우드 메타데이터(169.254.169.254) 접근을 차단. 허용 도메인·스킴만, DNS 해석 후 실제 IP 재검증, AWS IMDSv2 적용.",
  "tip": "http/https 외 스킴 금지"
 },
 {
  "s": "s3",
  "g": "세션·쿠키",
  "front": "CSRF 대책",
  "key": "CSRF 토큰 + SameSite",
  "back": "요청마다 서버가 발급한 예측 불가 토큰을 검증(Synchronizer Token). 쿠키 SameSite=Lax/Strict, Origin/Referer 검증, 중요 거래 재인증, 상태 변경은 GET 금지.",
  "tip": "XSS 대책(출력 인코딩)으로는 CSRF 가 막히지 않는다"
 },
 {
  "s": "s3",
  "g": "세션·쿠키",
  "front": "쿠키 보안 속성",
  "key": "Secure·HttpOnly·SameSite",
  "back": "Secure=HTTPS 에서만 전송, HttpOnly=스크립트(document.cookie) 접근 차단, SameSite=교차 사이트 요청 시 쿠키 전송 제한(Strict/Lax/None).",
  "tip": "SameSite=None 은 반드시 Secure 와 함께"
 },
 {
  "s": "s3",
  "g": "세션·쿠키",
  "front": "세션 고정 대책",
  "key": "로그인 성공 시 세션 ID 재발급",
  "back": "인증 전 세션 ID 를 인증 후에도 그대로 쓰면 공격자가 미리 정한 ID 로 세션을 공유할 수 있다. ★인증 직후 새 세션 ID 발급★, 기존 세션 무효화.",
  "tip": "Java: request.changeSessionId()"
 },
 {
  "s": "s3",
  "g": "세션·쿠키",
  "front": "세션 관리 기준",
  "key": "예측 불가 ID·타임아웃·로그아웃 무효화",
  "back": "충분한 길이의 난수 세션 ID, URL 에 세션 ID 노출 금지, 유휴 타임아웃, 로그아웃 시 서버 측 세션 파기, 중복 로그인 정책.",
  "tip": "세션 ID 는 쿠키로만 전달"
 },
 {
  "s": "s3",
  "g": "파일 처리",
  "front": "파일 업로드 대책",
  "key": "확장자 허용목록 + 실행 권한 제거",
  "back": "허용 확장자만 수용, MIME·파일 시그니처 검증, 업로드 디렉터리 스크립트 실행 차단, 웹루트 외부 저장, 파일명 난수화(UUID), 크기 제한·악성코드 검사.",
  "tip": "차단목록(블랙리스트)보다 ★허용목록★"
 },
 {
  "s": "s3",
  "g": "파일 처리",
  "front": "파일 다운로드(경로 조작) 대책",
  "key": "정규화 경로 검증 + ID 간접 참조",
  "back": "요청 파일 경로를 정규화(getCanonicalPath)한 뒤 허용 기준 디렉터리 안에 있는지 확인. 다운로드는 파일 ID ↔ 실제 경로 매핑으로 간접 참조.",
  "tip": "경로를 사용자 입력으로 직접 구성하지 않는다"
 },
 {
  "s": "s3",
  "g": "파일 처리",
  "front": "RFI 대책(PHP)",
  "key": "allow_url_include=Off",
  "back": "원격 파일 포함 취약점은 외부 URL 의 코드를 include 하는 것. php.ini 에서 allow_url_include=Off, 포함 대상은 고정 목록에서만 선택.",
  "tip": "allow_url_fopen 도 필요 없으면 Off"
 },
 {
  "s": "s3",
  "g": "웹 로그",
  "front": "Apache Combined 로그 필드",
  "key": "IP·사용자·시간·요청·상태·크기·Referer·UA",
  "back": "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\". 상태코드와 응답 크기로 요청 결과를, User-Agent 로 자동화 도구를 판단.",
  "tip": "%b = 응답 바이트(헤더 제외)"
 },
 {
  "s": "s3",
  "g": "웹 로그",
  "front": "공격 성공 여부 판단",
  "key": "상태코드 + 응답 크기 비교",
  "back": "같은 페이지의 정상 응답 크기와 비교해 크기가 크게 달라진 200 응답은 데이터 노출 가능성. 404·403 다수는 탐색 단계, 500 다수는 입력이 서버 오류를 유발한 정황.",
  "tip": "200 이라고 무조건 성공은 아니다 — 크기·내용 확인"
 },
 {
  "s": "s3",
  "g": "웹 로그",
  "front": "자동화 스캐너 흔적",
  "key": "짧은 시간 대량 요청 + 다양한 경로 404",
  "back": "한 IP 에서 초당 수십 건, 존재하지 않는 관리 페이지·백업 파일명 요청이 연속되고 User-Agent 에 Nikto·sqlmap·Nessus 등 도구명이 나타나면 자동 점검·공격 도구.",
  "tip": "UA 는 위조 가능 — 요청 패턴으로 함께 판단"
 },
 {
  "s": "s3",
  "g": "시큐어코딩",
  "front": "행정안전부 시큐어코딩 7대 영역",
  "key": "입력검증·보안기능·시간및상태·에러처리·코드오류·캡슐화·API오용",
  "back": "소프트웨어 개발보안 가이드의 보안약점 분류. 입력데이터 검증 및 표현, 보안기능, 시간 및 상태, 에러처리, 코드오류, 캡슐화, API 오용.",
  "tip": "SQL 삽입·XSS 는 '입력데이터 검증 및 표현'"
 },
 {
  "s": "s3",
  "g": "시큐어코딩",
  "front": "에러 처리 원칙",
  "key": "상세 오류 메시지 노출 금지",
  "back": "스택 트레이스·DB 오류문은 내부 구조를 드러낸다. 사용자에게는 일반 오류 페이지, 상세 내용은 서버 로그에만 기록.",
  "tip": "web.xml error-page, 커스텀 에러 페이지"
 },
 {
  "s": "s3",
  "g": "시큐어코딩",
  "front": "CSP",
  "key": "Content-Security-Policy 헤더",
  "back": "브라우저가 실행·로드할 수 있는 스크립트 출처를 서버가 지정. default-src 'self' 로 자기 출처만 허용하고 인라인 스크립트를 제한해 XSS 피해를 줄인다.",
  "tip": "보조 방어 — 출력 인코딩을 대신하지 않는다"
 },
 {
  "s": "s3",
  "g": "웹서버",
  "front": "Apache 보안 설정",
  "key": "Options -Indexes·ServerTokens Prod·ServerSignature Off",
  "back": "디렉터리 리스팅 차단, 응답 헤더·오류 페이지의 버전 정보 최소화, 불필요 모듈 제거, LimitExcept 로 메서드 제한, 웹 프로세스 전용 계정 실행.",
  "tip": "Nginx: autoindex off, server_tokens off"
 },
 {
  "s": "s3",
  "g": "메일·DNS",
  "front": "메일 발신 인증 3종",
  "key": "SPF·DKIM·DMARC",
  "back": "SPF=발신 허용 서버 IP 를 DNS TXT 로 공개, DKIM=메일 헤더·본문 전자서명, DMARC=SPF·DKIM 결과에 따른 처리 정책(none/quarantine/reject)과 보고.",
  "tip": "스팸·발신자 위조 대응"
 },
 {
  "s": "s3",
  "g": "메일·DNS",
  "front": "DNSSEC",
  "key": "DNS 응답 전자서명",
  "back": "DNS 응답의 출처 인증·무결성을 전자서명(RRSIG)으로 검증해 캐시 포이즈닝을 방지. 기밀성(암호화)은 제공하지 않는다.",
  "tip": "암호화는 DoH·DoT"
 },
 {
  "s": "s4",
  "g": "대칭키·운영모드",
  "front": "사용자 N명이 대칭키로 서로 통신할 때 필요한 키 개수는?",
  "key": "N(N-1)/2개",
  "back": "대칭키는 쌍마다 별도 비밀키가 필요해 ★N(N-1)/2★개로 폭증한다(키 관리 문제). 공개키는 1인당 키쌍 1개라 ★2N★개.",
  "tip": "대칭=조합(nC2), 비대칭=2N"
 },
 {
  "s": "s4",
  "g": "대칭키·운영모드",
  "front": "DES가 폐기된 이유는?",
  "key": "56bit 키 → 무차별 대입 가능",
  "back": "64bit 키 중 패리티 8bit를 제외한 ★실효 키 56bit★가 짧아 현대 연산력으로 ★무차별 대입(brute force)★이 가능하기 때문.",
  "tip": "DES 64블록·56키·Feistel"
 },
 {
  "s": "s4",
  "g": "대칭키·운영모드",
  "front": "AES의 블록 크기·키 길이·라운드 수는?",
  "key": "128bit 블록 · 128/192/256 · 10/12/14R",
  "back": "AES: ★블록 128bit★, 키 128/192/256bit, 라운드 ★10/12/14★, ★SPN★ 구조, 2001 현행 표준.",
  "tip": "128→10, 192→12, 256→14 (키 64bit 늘 때 2라운드↑)"
 },
 {
  "s": "s4",
  "g": "대칭키·운영모드",
  "front": "Feistel 구조와 SPN 구조의 차이는?",
  "key": "Feistel=좌우분할·교환 / SPN=치환+순열",
  "back": "★Feistel★: 블록을 L·R로 분할, R에 F함수 적용 후 L과 XOR·교환 반복 → ★암·복호화 회로 동일★(DES·SEED). ★SPN★: 치환+순열 반복, ★병렬 유리★·확산 큼(AES·ARIA).",
  "tip": "DES·SEED=Feistel / AES·ARIA=SPN"
 },
 {
  "s": "s4",
  "g": "대칭키·운영모드",
  "front": "ECB 모드를 사용하면 안 되는 이유는?",
  "key": "동일 평문 블록 → 동일 암호문 블록",
  "back": "ECB는 IV 없이 블록을 독립 암호화 → ★같은 평문 블록이 항상 같은 암호문★이 되어 평문 반복 패턴(이미지 윤곽 등)이 노출된다.",
  "tip": "ECB 펭귄 그림 — 윤곽이 그대로 보임"
 },
 {
  "s": "s4",
  "g": "대칭키·운영모드",
  "front": "CBC 모드에서 IV의 역할은?",
  "key": "같은 평문도 매번 다른 암호문",
  "back": "첫 블록을 ★IV와 XOR★해 같은 평문이라도 IV가 다르면 다른 암호문 생성. Cᵢ = E_k(Pᵢ ⊕ Cᵢ₋₁), C₀=IV. IV는 ★예측 불가 난수·재사용 금지★.",
  "tip": "IV 필요 = CBC·CFB·OFB (CTR은 Nonce)"
 },
 {
  "s": "s4",
  "g": "대칭키·운영모드",
  "front": "병렬 암호화가 가능한 운영모드와 그 이유는?",
  "key": "CTR·ECB — 블록 간 의존 없음",
  "back": "★CTR·ECB★는 각 블록이 이전 블록 결과에 의존하지 않아 병렬 처리 가능. CBC는 체이닝이라 ★암호화 직렬★(복호화는 병렬 가능).",
  "tip": "CTR = 고성능·랜덤 접근"
 },
 {
  "s": "s4",
  "g": "공개키·키교환",
  "front": "공개키 암호로 기밀성과 부인방지를 구현할 때 사용하는 키는?",
  "key": "기밀=수신자 공개키 / 서명=송신자 개인키",
  "back": "기밀성: ★수신자 공개키로 암호화★ → 수신자 개인키로만 복호. 부인방지: ★송신자 개인키로 서명★ → 누구나 송신자 공개키로 검증.",
  "tip": "공개키 암호화=기밀, 개인키 서명=부인방지"
 },
 {
  "s": "s4",
  "g": "공개키·키교환",
  "front": "RSA의 안전성 근거는?",
  "key": "큰 수의 소인수분해 난해성",
  "back": "두 큰 소수 p·q의 곱 n은 쉽게 만들지만 n에서 ★p·q를 역산(소인수분해)하는 것은 계산상 불가능★. RSA는 암호화·서명 모두 가능, 2048bit 이상 권장.",
  "tip": "RSA=소인수분해 / DH=이산대수 / ECC=ECDLP"
 },
 {
  "s": "s4",
  "g": "공개키·키교환",
  "front": "ECC가 RSA보다 짧은 키로 동등 안전강도를 내는 이유는?",
  "key": "ECDLP가 비트당 더 어려움",
  "back": "타원곡선 이산대수 문제(★ECDLP★)는 소인수분해보다 단위 비트당 깨기 어려워 짧은 키로 동등 강도. ★ECC 256bit ≈ RSA 3072bit★ → IoT·모바일 유리.",
  "tip": "ECC 서명=ECDSA, 키교환=ECDH"
 },
 {
  "s": "s4",
  "g": "공개키·키교환",
  "front": "Diffie-Hellman 키 교환 원리는?",
  "key": "g^a, g^b 교환 → 공유키 g^(ab)",
  "back": "공개 p·g. A는 g^a mod p, B는 g^b mod p 전송 → 각자 상대 값에 자기 비밀지수를 거듭제곱해 ★g^(ab) mod p★ 공유. a·b는 ★전송하지 않음★ → 이산대수 문제로 도청자 계산 불가.",
  "tip": "DH = 키 합의 전용(암호화·서명 X)"
 },
 {
  "s": "s4",
  "g": "공개키·키교환",
  "front": "DH 키 교환의 약점과 대응은?",
  "key": "MITM → 인증서·서명으로 공개값 인증",
  "back": "DH는 상대 공개값을 인증하지 않아 ★중간자(MITM) 공격★에 취약 → 인증서/전자서명으로 공개값을 인증하는 ★인증된 DH★ 사용.",
  "tip": "DH 약점 = MITM"
 },
 {
  "s": "s4",
  "g": "공개키·키교환",
  "front": "PFS(Perfect Forward Secrecy)란?",
  "key": "장기키 유출돼도 과거 세션 안전",
  "back": "★DHE·ECDHE★처럼 세션마다 임시키로 키 교환 → 서버 장기 개인키가 유출돼도 ★과거 세션 키를 복원할 수 없음★.",
  "tip": "E(Ephemeral)=임시 → PFS"
 },
 {
  "s": "s4",
  "g": "해시·MAC·서명",
  "front": "해시 함수의 3대 안전성은?",
  "key": "역상 저항 · 제2역상 저항 · 충돌 저항",
  "back": "① ★일방향성(역상 저항)★ h(x)→x 불가 ② ★제2 역상 저항★ x₁ 주어질 때 같은 해시 x₂ 불가 ③ ★충돌 저항★ 임의 x₁≠x₂ 동일해시 불가.",
  "tip": "일·제2·충"
 },
 {
  "s": "s4",
  "g": "해시·MAC·서명",
  "front": "HMAC이 단순 해시보다 안전한 이유는?",
  "key": "비밀키를 함께 해시 → 인증+무결성",
  "back": "단순 해시는 누구나 재계산 가능해 위조 메시지에 새 해시를 붙일 수 있다. HMAC = ★H((K⊕opad)∥H((K⊕ipad)∥m))★로 키를 모르면 MAC 생성 불가 → ★메시지 인증+무결성★, 길이 확장 공격 방어.",
  "tip": "HMAC = 해시 + 비밀키 (RFC 2104)"
 },
 {
  "s": "s4",
  "g": "해시·MAC·서명",
  "front": "전자서명 생성·검증 절차는?",
  "key": "해시 → 개인키 서명 → 공개키 검증·비교",
  "back": "송신: 메시지 해시 → ★송신자 개인키로 암호화(서명)★ → 메시지+서명 전송. 수신: ★송신자 공개키로 서명 복호★한 다이제스트와 수신 메시지 해시를 비교, 같으면 무결성·인증 확인.",
  "tip": "전자서명은 기밀성 X"
 },
 {
  "s": "s4",
  "g": "암호공격·솔트",
  "front": "생일 공격으로 n비트 해시의 충돌을 찾는 데 필요한 시도 횟수는?",
  "key": "약 2^(n/2)",
  "back": "생일 역설로 충돌은 2ⁿ이 아니라 ★약 2^(n/2)★회 시도로 50% 확률 도달. 예) SHA-256의 충돌저항 강도는 ★2^128★.",
  "tip": "충돌 강도 = 출력 길이의 절반"
 },
 {
  "s": "s4",
  "g": "암호공격·솔트",
  "front": "솔트(Salt)의 정의와 효과는?",
  "key": "사용자별 난수 추가 → 레인보우 테이블 무력화",
  "back": "비밀번호 해시 전 ★사용자마다 다른 난수★를 덧붙임 → ① 같은 비밀번호도 해시가 달라져 ★레인보우 테이블 무력화★ ② 동일 비밀번호 사용자 식별 불가.",
  "tip": "솔트=다양화, 스트레칭=지연"
 },
 {
  "s": "s4",
  "g": "암호공격·솔트",
  "front": "키 스트레칭(Key Stretching)과 대표 함수는?",
  "key": "반복 해시 → PBKDF2·bcrypt·scrypt·Argon2",
  "back": "해시를 ★수천~수십만 회 반복★해 1회 검증 비용을 키워 무차별·사전 공격 속도를 늦춤. ★PBKDF2·bcrypt·scrypt·Argon2★.",
  "tip": "MD5+솔트도 고속이라 부족 → 전용 해시"
 },
 {
  "s": "s4",
  "g": "암호공격·솔트",
  "front": "재전송(Replay) 공격의 대응책은?",
  "key": "Nonce · Timestamp · 순서번호",
  "back": "정상 인증 메시지를 가로채 그대로 재전송하는 공격 → ★Nonce(일회성 난수)·Timestamp·순서번호★로 메시지를 유일하게 만들어 무효화.",
  "tip": "Kerberos는 타임스탬프로 재전송 방어"
 },
 {
  "s": "s4",
  "g": "사용자 인증",
  "front": "인증 3요소와 MFA 조건은?",
  "key": "지식·소유·생체, 서로 다른 요소 2개 이상",
  "back": "★지식★(비밀번호·PIN) / ★소유★(OTP 토큰·스마트카드) / ★생체★(지문·홍채). MFA는 ★서로 다른 요소★ 2개 이상 결합 — 비밀번호 2개는 MFA 아님.",
  "tip": "두음 지·소·생"
 },
 {
  "s": "s4",
  "g": "사용자 인증",
  "front": "HOTP와 TOTP의 차이는?",
  "key": "HOTP=카운터(이벤트) / TOTP=시간",
  "back": "둘 다 서버·토큰이 ★같은 비밀키★를 공유하고 HMAC으로 OTP 생성. 동기화 기준이 ★HOTP=카운터(이벤트)★, ★TOTP=시간(30초 등 윈도우)★.",
  "tip": "RFC 4226 HOTP / 6238 TOTP"
 },
 {
  "s": "s4",
  "g": "사용자 인증",
  "front": "챌린지-리스폰스 인증 흐름과 장점은?",
  "key": "난수 챌린지 → 비밀키 연산 응답 → 검증",
  "back": "① 서버가 ★난수 챌린지★ 전송 ② 클라이언트가 공유 비밀키/개인키로 연산해 응답 ③ 서버가 동일 연산으로 검증. 비밀번호 미전송·매번 챌린지가 달라 ★재전송·도청 방어★.",
  "tip": "FIDO도 공개키 챌린지-리스폰스"
 },
 {
  "s": "s4",
  "g": "Kerberos·SSO",
  "front": "Kerberos 인증 6단계 흐름은?",
  "key": "AS→TGT, TGS→서비스티켓, 서버 접근",
  "back": "① Client→AS 인증요청 ② AS→Client ★TGT★+세션키 ③ Client→TGS TGT 제시 ④ TGS→Client ★서비스 티켓★ ⑤ Client→서버 티켓 제시 ⑥ 서버 검증·접근 허용. ★대칭키 기반·KDC SPOF·시간 동기 필수★.",
  "tip": "KDC = AS + TGS"
 },
 {
  "s": "s4",
  "g": "Kerberos·SSO",
  "front": "FIDO가 비밀번호 방식보다 안전한 이유는?",
  "key": "서버에 공개키만 저장 → 유출돼도 위조 불가",
  "back": "개인키는 단말 보안영역, 서버엔 ★공개키만★ 등록 → DB 유출돼도 인증 위조 불가. 단말에서 생체/PIN 해제 후 ★개인키로 챌린지 서명★. FIDO2 = WebAuthn + CTAP.",
  "tip": "passwordless = FIDO"
 },
 {
  "s": "s4",
  "g": "PKI·인증서",
  "front": "CRL과 OCSP의 차이는?",
  "key": "CRL=폐기목록 일괄 / OCSP=실시간 개별 질의",
  "back": "★CRL★: 폐기 목록을 주기적으로 통째 다운로드 → 실시간성↓·용량↑. ★OCSP★: 특정 인증서 상태를 실시간 질의 → 즉시성↑, CA 부하는 ★OCSP Stapling★으로 완화.",
  "tip": "RFC 5280 X.509 / RFC 6960 OCSP"
 },
 {
  "s": "s4",
  "g": "접근통제 정책·모델",
  "front": "BLP 모델의 두 규칙과 보호 목표는?",
  "key": "기밀성 — No Read Up · No Write Down",
  "back": "★No Read Up(ss-property)★: 하위 주체는 상위 읽기 금지. ★No Write Down(*-property)★: 상위 주체는 하위 쓰기 금지 → 기밀이 아래로 유출 방지.",
  "tip": "상위 비밀 누설 막기 = BLP"
 },
 {
  "s": "s4",
  "g": "접근통제 정책·모델",
  "front": "Biba 모델의 두 규칙과 보호 목표는?",
  "key": "무결성 — No Read Down · No Write Up",
  "back": "★No Read Down★: 상위 주체는 하위(오염) 데이터 읽기 금지. ★No Write Up★: 하위 주체는 상위 데이터 쓰기 금지. BLP와 ★방향 정반대★.",
  "tip": "하위 오염 막기 = Biba"
 },
 {
  "s": "s4",
  "g": "접근통제 정책·모델",
  "front": "ACL과 Capability List의 차이는?",
  "key": "ACL=객체(열) 기준 / Capability=주체(행) 기준",
  "back": "접근통제 행렬(행=주체, 열=객체)을 ★열 단위(객체 기준)로 저장=ACL★, ★행 단위(주체 기준)로 저장=Capability List★.",
  "tip": "객체에 붙은 목록 = ACL"
 },
 {
  "s": "s4",
  "g": "접근통제 정책·모델",
  "front": "DAC와 MAC의 가장 큰 차이는?",
  "key": "권한 결정 주체 — 소유자 재량 vs 시스템 강제",
  "back": "★DAC★: 자원 소유자가 재량으로 권한 부여(UNIX 권한·ACL), 트로이목마 취약. ★MAC★: 시스템이 ★보안등급(라벨)★에 따라 강제, 소유자도 변경 불가.",
  "tip": "D=Discretionary(재량), M=Mandatory(강제)"
 },
 {
  "s": "s5",
  "g": "거버넌스·조직",
  "front": "정책·표준·지침·절차 중 강제력이 없는 권고·참고 문서는?",
  "key": "지침(Guideline)",
  "back": "정책(최상위·경영진 승인) → 표준(★의무·강제★) → 지침(★권고·선택★) → 절차(Who/When 실행 매뉴얼).",
  "tip": "정·표·지·절 — '지'침은 '지'켜도 되고 안 지켜도 되는 권고"
 },
 {
  "s": "s5",
  "g": "거버넌스·조직",
  "front": "CISO와 CPO의 근거 법령은?",
  "key": "CISO=정보통신망법 제45조의3, CPO=개인정보보호법 제31조",
  "back": "CISO(정보보호최고책임자)는 정보보호 전반·★과기정통부 장관 신고★, CPO(개인정보보호책임자)는 개인정보 처리 전반. ★별개 직위★.",
  "tip": "망법 CISO / 개보법 CPO"
 },
 {
  "s": "s5",
  "g": "ISMS-P 인증",
  "front": "ISMS-P 인증기준 3개 영역과 통제 수는?",
  "key": "관리체계 수립·운영 16 / 보호대책 64 / 개인정보 처리단계 22",
  "back": "총 ★102개★ 통제. ISMS 인증은 1+2영역(80개), ISMS-P는 1+2+3 전체.",
  "tip": "16·64·22 = 102"
 },
 {
  "s": "s5",
  "g": "ISMS-P 인증",
  "front": "ISMS-P 인증 유효기간과 사후심사 주기는?",
  "key": "유효기간 3년, 사후심사 연 1회 이상",
  "back": "최초심사 → 매년 ★사후심사★ → 만료 전 ★갱신심사★(유효기간 3년).",
  "tip": "3년짜리 자격증, 매년 건강검진"
 },
 {
  "s": "s5",
  "g": "ISMS-P 인증",
  "front": "ISMS-P 인증 절차 순서는?",
  "key": "신청→계약→심사→결함조치→심의→인증서 발급",
  "back": "심의는 ★인증위원회★가 수행. 결함조치 후 심의를 거쳐 인증서 발급.",
  "tip": "신·계·심·결·심·발"
 },
 {
  "s": "s5",
  "g": "ISMS-P 인증",
  "front": "ISMS-P 인증기관과 정책기관은?",
  "key": "인증기관 KISA / 정책기관 과기정통부·개인정보보호위원회",
  "back": "과기정통부와 개인정보보호위원회가 ★공동 운영★, 실무 인증은 ★KISA(한국인터넷진흥원)★.",
  "tip": "정책 둘, 인증 KISA"
 },
 {
  "s": "s5",
  "g": "위험관리",
  "front": "위험(Risk)의 3요소 공식은?",
  "key": "위험 = 자산 × 위협 × 취약점",
  "back": "위협이 취약점을 이용해 자산에 손실을 일으킬 가능성. 셋 중 하나라도 빠지면 서술 감점.",
  "tip": "자·위·취"
 },
 {
  "s": "s5",
  "g": "위험관리",
  "front": "SLE와 ALE 공식은?",
  "key": "SLE = AV × EF, ALE = SLE × ARO",
  "back": "AV(자산가치), EF(노출계수), ARO(연간발생률). 예) 1억 × 50% = SLE 5천만, ARO 0.2 → ALE 1천만/년.",
  "tip": "S는 Single(1회), A는 Annual(연간)"
 },
 {
  "s": "s5",
  "g": "위험관리",
  "front": "DoA란?",
  "key": "수용가능 위험수준(Degree of Assurance)",
  "back": "위험평가 결과가 DoA를 ★초과★하면 감소·전가·회피, ★이하★면 수용. 위험처리 의사결정의 ★기준선★.",
  "tip": "DoA = 합격선"
 },
 {
  "s": "s5",
  "g": "위험관리",
  "front": "위험처리 4유형은?",
  "key": "감소·전가·수용·회피",
  "back": "감소=통제 적용 / 전가=보험·아웃소싱 / 수용=DoA 이하 잔여위험 인정 / 회피=활동 자체 중단.",
  "tip": "감전수회"
 },
 {
  "s": "s5",
  "g": "위험관리",
  "front": "정량적 vs 정성적 위험분석의 결과 형태는?",
  "key": "정량=금액(수치), 정성=등급(상·중·하)",
  "back": "정량: ALE·과거자료·확률분포·수학모델, ★객관적★·시간·비용 多. 정성: 델파이·시나리오·순위결정, 빠름·★주관적★.",
  "tip": "정량=돈, 정성=등급"
 },
 {
  "s": "s5",
  "g": "위험관리",
  "front": "잔여위험(Residual Risk)이란?",
  "key": "위험처리(통제 적용) 후에도 남는 위험",
  "back": "잔여위험의 수용 여부는 ★경영진★이 결정하고 지속 모니터링·재평가한다.",
  "tip": "완벽한 통제는 없다 — 남는 것이 잔여"
 },
 {
  "s": "s5",
  "g": "위험관리",
  "front": "전문가 익명 설문을 반복 수렴해 합의를 도출하는 정성적 기법은?",
  "key": "델파이법(Delphi)",
  "back": "정성 3기법: 델파이법·시나리오법·순위결정법. 정량: 과거자료분석·수학공식·확률분포.",
  "tip": "델파이 = 익명 반복 설문"
 },
 {
  "s": "s5",
  "g": "BCP·재해복구",
  "front": "RTO와 RPO의 차이는?",
  "key": "RTO=복구 목표 시간, RPO=복구 목표 시점(데이터 손실 허용량)",
  "back": "RTO는 ★시간축★(얼마나 빨리), RPO는 ★데이터 손실량★(얼마나 과거 시점까지). RPO가 작을수록 백업 주기↓·비용↑.",
  "tip": "T=Time, P=Point"
 },
 {
  "s": "s5",
  "g": "BCP·재해복구",
  "front": "MTD와 RTO·WRT의 관계는?",
  "key": "MTD = RTO + WRT",
  "back": "MTD(최대허용중단시간), WRT(Work Recovery Time, 복구 후 정상화 시간).",
  "tip": "Max = 복구 + 정상화"
 },
 {
  "s": "s5",
  "g": "BCP·재해복구",
  "front": "BIA의 정의와 산출물은?",
  "key": "업무영향분석 — 복구 우선순위와 RTO·RPO 도출",
  "back": "BCP 수립의 ★출발점★. 핵심업무 식별 → 중단영향 분석 → RTO·RPO 설정 → 우선순위 결정.",
  "tip": "BIA가 먼저, BCP가 나중"
 },
 {
  "s": "s5",
  "g": "BCP·재해복구",
  "front": "DR 사이트를 RTO가 빠른 순으로 나열하면?",
  "key": "Mirror < Hot < Warm < Cold",
  "back": "Mirror 실시간 동기화(RTO 0)·최고비용, Hot 수시간, Warm 수일(주기적 백업), Cold 수주(공간만). 비용은 ★반비례★.",
  "tip": "미·핫·웜·콜 — 빠를수록 비싸다"
 },
 {
  "s": "s5",
  "g": "BCP·재해복구",
  "front": "BCP와 DRP의 관계는?",
  "key": "BCP ⊃ DRP",
  "back": "BCP는 조직 전체 업무 지속, DRP는 ★IT 시스템·인프라 복구★에 초점.",
  "tip": "BCP가 큰 우산"
 },
 {
  "s": "s5",
  "g": "개인정보보호법",
  "front": "개인정보의 법적 정의 요건은?",
  "key": "살아있는 개인을 식별하거나 다른 정보와 쉽게 결합해 식별 가능한 정보",
  "back": "가명정보 포함. ★사망자·법인 정보는 개인정보 아님★.",
  "tip": "살아있는·식별·쉽게 결합"
 },
 {
  "s": "s5",
  "g": "개인정보보호법",
  "front": "고유식별정보 4종은?",
  "key": "주민등록번호·여권번호·운전면허번호·외국인등록번호",
  "back": "개보법 ★제24조★. 별도 동의 또는 법령 근거로 처리. 주민등록번호는 ★제24조의2★로 더 강화.",
  "tip": "주·여·운·외"
 },
 {
  "s": "s5",
  "g": "개인정보보호법",
  "front": "주민등록번호를 정보주체 동의만으로 처리할 수 있는가?",
  "key": "불가 — 법령 근거 필수",
  "back": "주민등록번호는 동의가 있어도 ★법령 근거 없으면 처리 불가★(제24조의2).",
  "tip": "주민번호는 동의로도 안 된다"
 },
 {
  "s": "s5",
  "g": "개인정보보호법",
  "front": "위탁과 제3자 제공의 동의 요건 차이는?",
  "key": "위탁=처리방침 공개(동의 불요), 제3자 제공=별도 동의",
  "back": "위탁은 ★위탁자의 업무★를 위한 처리, 관리·감독 책임은 위탁자. 제3자 제공은 ★제공받는 자의 목적★.",
  "tip": "누구 일을 하느냐"
 },
 {
  "s": "s5",
  "g": "개인정보보호법",
  "front": "개인정보 파기 시한은?",
  "key": "지체없이(5일 이내)",
  "back": "보유기간 경과·목적 달성 시. ★복구 불가능한 방법★: 전자=영구삭제·물리적 파괴, 종이=파쇄·소각.",
  "tip": "5일 안에 복구 불가로"
 },
 {
  "s": "s5",
  "g": "안전조치·유출대응",
  "front": "개인정보 유출 시 정보주체 통지 시한과 기관 신고 기준은?",
  "key": "72시간 이내 통지 / 1,000명 이상 시 72시간 이내 신고",
  "back": "신고처: ★개인정보보호위원회 또는 KISA★. 항목 특정 곤란 시 우선 신고 후 추가 신고 가능.",
  "tip": "72시간·1,000명"
 },
 {
  "s": "s5",
  "g": "안전조치·유출대응",
  "front": "접속기록 보관 기간은?",
  "key": "원칙 1년 이상, 5만명 이상·고유식별·민감정보 처리 시 2년 이상",
  "back": "안전성 확보조치 중 ★접속기록 보관 및 점검★ 항목.",
  "tip": "기본 1년, 무거우면 2년"
 },
 {
  "s": "s5",
  "g": "안전조치·유출대응",
  "front": "PIA(개인정보 영향평가)란?",
  "key": "개인정보파일 구축·운용 시 침해 위험을 사전 분석·개선하는 제도",
  "back": "★공공기관★ 일정 규모 이상 의무, 민간 권장. 절차: 사전준비 → 영향평가 수행 → 이행점검.",
  "tip": "Privacy Impact = 짓기 전에 평가"
 },
 {
  "s": "s5",
  "g": "망법·신용·망분리",
  "front": "정보통신망법상 영리목적 광고성 정보 전송 규칙 3가지는?",
  "key": "사전 동의(Opt-in), 야간(21~08시) 별도 동의, 2년마다 수신동의 확인",
  "back": "수신거부 의사 표시 후에는 전송 금지.",
  "tip": "옵트인·야간·2년"
 },
 {
  "s": "s5",
  "g": "망법·신용·망분리",
  "front": "물리적 망분리와 논리적 망분리의 차이는?",
  "key": "물리=PC 물리 분리, 논리=가상화(VDI/SBC)",
  "back": "내부 업무망과 외부 인터넷망을 분리해 침해 확산·정보유출 차단.",
  "tip": "PC 두 대 vs 가상화 한 대"
 },
 {
  "s": "s5",
  "g": "CSAP·CC 평가",
  "front": "CSAP 등급 3단계와 하등급의 특징은?",
  "key": "상·중·하, 하등급=공개 가능 정보·완화 기준",
  "back": "상=민감정보·국방·외교(물리분리), 중=비공개 업무정보, 하=공개 정보. 근거 ★클라우드컴퓨팅법★, 인증기관 KISA.",
  "tip": "하등급은 문턱을 낮춤"
 },
 {
  "s": "s5",
  "g": "CSAP·CC 평가",
  "front": "CC의 국제표준 번호와 EAL 등급 범위는?",
  "key": "ISO/IEC 15408, EAL1~EAL7",
  "back": "PP(보호프로파일)·ST(보안목표)·TOE(평가대상). EAL4=상용 일반 최고, EAL7=정형화 검증 최고. ★보증 수준★.",
  "tip": "15408, 1~7"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ 리눅스 로그 파일·조회 명령",
  "type": "table",
  "head": [
   "파일",
   "형식",
   "내용",
   "조회 명령"
  ],
  "rows": [
   [
    "/var/log/messages",
    "텍스트",
    "시스템 일반 메시지(RHEL)",
    "cat·grep·tail"
   ],
   [
    "/var/log/secure",
    "텍스트",
    "인증·sudo·su(RHEL)",
    "grep \"Failed password\""
   ],
   [
    "/var/log/auth.log",
    "텍스트",
    "인증 로그(Debian/Ubuntu)",
    "grep \"Accepted password\""
   ],
   [
    "/var/log/wtmp",
    "바이너리",
    "로그인 성공·로그아웃·부팅",
    "last"
   ],
   [
    "/var/log/btmp",
    "바이너리",
    "로그인 실패",
    "lastb"
   ],
   [
    "/var/log/lastlog",
    "바이너리",
    "사용자별 마지막 로그인",
    "lastlog"
   ],
   [
    "/var/run/utmp",
    "바이너리",
    "현재 접속자",
    "who, w, users"
   ],
   [
    "/var/log/cron",
    "텍스트",
    "cron 작업 실행",
    "grep·tail"
   ],
   [
    "/var/log/dmesg",
    "텍스트",
    "부팅 커널 메시지",
    "dmesg"
   ],
   [
    "/var/log/audit/audit.log",
    "텍스트",
    "auditd 감사 로그",
    "ausearch·grep"
   ],
   [
    "journald",
    "바이너리",
    "systemd 저널",
    "journalctl -u sshd"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 윈도우 보안 이벤트 ID·Logon Type",
  "type": "table",
  "head": [
   "ID·Type",
   "의미",
   "분석 포인트"
  ],
  "rows": [
   [
    "4624",
    "로그온 성공",
    "Logon Type으로 방식 구분"
   ],
   [
    "4625",
    "로그온 실패",
    "단시간 다수 → 무차별 대입"
   ],
   [
    "4634",
    "로그오프",
    "세션 종료"
   ],
   [
    "4648",
    "명시적 자격증명 로그온",
    "RunAs·Pass-the-Hash 흔적"
   ],
   [
    "4672",
    "특수 권한 부여(관리자 로그온)",
    "권한 계정 사용 추적"
   ],
   [
    "4688",
    "새 프로세스 생성",
    "악성 프로세스 추적"
   ],
   [
    "4720 / 4726",
    "계정 생성 / 삭제",
    "비인가 계정 생성"
   ],
   [
    "4728 / 4732",
    "보안 그룹(전역/로컬) 멤버 추가",
    "권한 상승 흔적"
   ],
   [
    "1102",
    "감사 로그 삭제",
    "공격자 흔적 제거"
   ],
   [
    "7045",
    "새 서비스 설치",
    "백도어 서비스 의심"
   ],
   [
    "Type 2",
    "대화형(콘솔)",
    "직접 로그온"
   ],
   [
    "Type 3",
    "네트워크",
    "파일공유·원격 접근"
   ],
   [
    "Type 10",
    "원격 대화형",
    "RDP 접속"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 시스템 점검 명령어 모음",
  "type": "table",
  "head": [
   "점검 목적",
   "명령",
   "포인트"
  ],
  "rows": [
   [
    "SetUID 파일 탐색",
    "find / -perm -4000 -type f 2>/dev/null",
    "-perm -4000 = 포함"
   ],
   [
    "SetUID·SetGID 동시",
    "find / -perm -6000 -type f",
    "SetGID 단독은 -2000"
   ],
   [
    "UID 0 계정",
    "awk -F: '$3==0 {print $1}' /etc/passwd",
    "root 외 출력 시 백도어"
   ],
   [
    "빈 패스워드 계정",
    "awk -F: '($2==\"\"){print $1}' /etc/shadow",
    "패스워드 미설정"
   ],
   [
    "계정 만료 정보",
    "chage -l user",
    "chage -M 90 으로 변경"
   ],
   [
    "sudo 허용 명령",
    "sudo -l",
    "NOPASSWD·ALL 남용 점검"
   ],
   [
    "로그인 실패 이력",
    "lastb",
    "btmp 조회"
   ],
   [
    "열린 포트·PID",
    "netstat -ntlp / ss -ntlp",
    "미상 LISTEN 포트"
   ],
   [
    "포트 점유 프로세스",
    "lsof -i :8080",
    "PID → /proc/PID/exe"
   ],
   [
    "프로세스 트리",
    "ps -ef --forest",
    "비정상 부모-자식"
   ],
   [
    "최근 변경 파일",
    "find / -mtime -1 -type f",
    "침해 추적"
   ],
   [
    "패키지 무결성",
    "rpm -Va / debsums",
    "변조 바이너리 탐지"
   ],
   [
    "루트킷 점검",
    "chkrootkit / rkhunter --check",
    "외부 매체 병행"
   ],
   [
    "위험 capability",
    "getcap -r / 2>/dev/null",
    "cap_setuid 등"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 관찰 패턴 → 공격 판별 → 대응",
  "type": "table",
  "head": [
   "관찰 패턴",
   "판별",
   "대응"
  ],
  "rows": [
   [
    "SYN 다수, ACK 미회신, SYN_RECV 급증",
    "SYN Flood",
    "tcp_syncookies=1·Backlog 증대·SYN Proxy"
   ],
   [
    "SYN → SYN+ACK → RST 반복, 여러 포트",
    "SYN(Half-Open) 스캔",
    "임계치 탐지·출발지 차단"
   ],
   [
    "플래그 0 또는 FIN+PSH+URG 패킷",
    "NULL·XMAS 스캔",
    "비정상 플래그 조합 DROP"
   ],
   [
    "포트별 ICMP Type3 Code3 다수 회신",
    "UDP 스캔",
    "ICMP 오류 응답 속도 제한"
   ],
   [
    "브로드캐스트 목적지 ICMP Echo, 출발지 위조",
    "Smurf",
    "Directed Broadcast 차단"
   ],
   [
    "작은 DNS ANY 질의 → 큰 응답이 한 IP로 집중",
    "DNS 증폭",
    "Open Resolver 차단·응답 속도 제한"
   ],
   [
    "출발지 IP = 목적지 IP",
    "Land",
    "Ingress Filtering"
   ],
   [
    "게이트웨이 MAC 변경, 한 MAC에 여러 IP",
    "ARP 스푸핑",
    "Static ARP·DAI·arpwatch"
   ],
   [
    "HTTP 연결 다수가 헤더 미완성 상태로 장시간 유지",
    "Slowloris",
    "헤더 타임아웃·IP당 연결 제한"
   ],
   [
    "외부에서 AXFR(TCP 53) 요청",
    "Zone Transfer 정보 수집",
    "allow-transfer 로 보조 DNS만 허용"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 방어·탐지 명령 모음",
  "type": "table",
  "head": [
   "목적",
   "명령/룰",
   "포인트"
  ],
  "rows": [
   [
    "SYN Cookie 활성화",
    "sysctl -w net.ipv4.tcp_syncookies=1",
    "영구는 /etc/sysctl.conf"
   ],
   [
    "반연결 수 확인",
    "ss -tan state syn-recv | wc -l",
    "netstat -an | grep SYN_RECV"
   ],
   [
    "특정 IP 차단",
    "iptables -A INPUT -s 203.0.113.7 -j DROP",
    "급할 땐 -I INPUT 1"
   ],
   [
    "SSH 특정 IP만 허용",
    "-A INPUT -p tcp -s 10.0.0.5 --dport 22 -j ACCEPT 후 --dport 22 -j DROP",
    "허용을 위에"
   ],
   [
    "SYN 속도 제한",
    "iptables -A INPUT -p tcp --syn -m limit --limit 10/s -j ACCEPT",
    "초과분은 다음 룰 DROP"
   ],
   [
    "IP당 동시 연결 제한",
    "-p tcp --dport 80 -m connlimit --connlimit-above 20 -j DROP",
    "Slowloris 완화"
   ],
   [
    "NULL·XMAS 차단",
    "-p tcp --tcp-flags ALL NONE -j DROP / --tcp-flags ALL FIN,PSH,URG -j DROP",
    "비정상 플래그"
   ],
   [
    "룰 영구 저장",
    "iptables-save > /etc/sysconfig/iptables",
    "재부팅 후 소실 방지"
   ],
   [
    "firewalld 영구 반영",
    "firewall-cmd --permanent --add-service=https ; firewall-cmd --reload",
    "--reload 필수"
   ],
   [
    "정적 ARP",
    "ip neigh replace 192.168.0.1 lladdr 00:11:22:33:44:55 dev eth0 nud permanent",
    "Windows: arp -s"
   ],
   [
    "SYN만 캡처",
    "tcpdump -nn 'tcp[13] & 2 != 0'",
    "SYN+ACK만 = 'tcp[13]==18'"
   ],
   [
    "캡처 저장·재분석",
    "tcpdump -i eth0 -w dump.pcap / tcpdump -r dump.pcap",
    "-c 개수, -X 페이로드"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ Snort 룰 옵션 정리",
  "type": "table",
  "head": [
   "옵션",
   "의미",
   "예"
  ],
  "rows": [
   [
    "msg",
    "경보 메시지",
    "msg:\"Telnet access\";"
   ],
   [
    "content",
    "페이로드 문자열 매칭",
    "content:\"union select\";"
   ],
   [
    "nocase",
    "대소문자 무시",
    "content 바로 뒤"
   ],
   [
    "offset / depth",
    "매칭 시작 위치 / 검사 범위",
    "offset:0; depth:4;"
   ],
   [
    "flags",
    "TCP 플래그",
    "flags:S; (SYN), flags:0; (NULL)"
   ],
   [
    "flow",
    "세션 방향·상태",
    "flow:to_server,established;"
   ],
   [
    "itype / icode",
    "ICMP Type / Code",
    "itype:8;"
   ],
   [
    "detection_filter / threshold",
    "임계치 기반 경보",
    "track by_src, count 5, seconds 60"
   ],
   [
    "sid / rev",
    "룰 ID / 개정 번호",
    "sid:1000001; rev:1;"
   ],
   [
    "pcre",
    "정규표현식 매칭",
    "pcre:\"/…/i\";"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 웹 취약점별 핵심 대응 (원인 → 대책)",
  "type": "table",
  "head": [
   "취약점",
   "원인",
   "핵심 대책"
  ],
  "rows": [
   [
    "SQL 인젝션",
    "입력값이 SQL 구문에 그대로 결합",
    "PreparedStatement·ORM 바인딩, 최소 권한, 오류 메시지 차단"
   ],
   [
    "XSS",
    "입력값이 인코딩 없이 화면에 출력",
    "출력 인코딩, CSP, HttpOnly, 입력 검증(보조)"
   ],
   [
    "CSRF",
    "인증된 브라우저가 의도치 않은 요청 전송",
    "CSRF 토큰, SameSite, Origin 검증, 재인증"
   ],
   [
    "파일 업로드",
    "업로드 파일이 서버에서 실행 가능",
    "확장자 허용목록, 실행 권한 제거, 웹루트 외부 저장"
   ],
   [
    "경로 조작",
    "사용자 입력으로 파일 경로 구성",
    "경로 정규화 후 기준 디렉터리 검증, ID 간접 참조"
   ],
   [
    "OS 명령어 삽입",
    "입력값이 셸 명령에 결합",
    "명령 호출 자제, 인자 배열 분리, 허용목록"
   ],
   [
    "SSRF",
    "서버가 사용자 지정 URL 로 요청",
    "URL 허용목록, 내부 IP·메타데이터 차단, IMDSv2"
   ],
   [
    "세션 고정",
    "인증 전후 같은 세션 ID 사용",
    "로그인 시 세션 ID 재발급"
   ],
   [
    "정보 노출",
    "상세 오류·버전 정보 노출",
    "커스텀 에러 페이지, ServerTokens Prod"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 웹서버 보안 설정 점검표",
  "type": "table",
  "head": [
   "점검 항목",
   "Apache",
   "Nginx"
  ],
  "rows": [
   [
    "디렉터리 리스팅 차단",
    "Options -Indexes",
    "autoindex off"
   ],
   [
    "버전 정보 숨김",
    "ServerTokens Prod / ServerSignature Off",
    "server_tokens off"
   ],
   [
    "TRACE 비활성화",
    "TraceEnable Off",
    "기본 미지원(필요 시 메서드 제한)"
   ],
   [
    "메서드 제한",
    "<LimitExcept GET POST> Require all denied",
    "limit_except GET POST { deny all; }"
   ],
   [
    "업로드 폴더 실행 차단",
    "해당 디렉터리 스크립트 핸들러 제거",
    "해당 location 에서 스크립트 처리 미연결"
   ],
   [
    "실행 계정",
    "User/Group 전용 저권한 계정",
    "user 전용 저권한 계정"
   ],
   [
    "상위 경로 심볼릭 링크 제한",
    "Options -FollowSymLinks",
    "disable_symlinks on"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 보안 응답 헤더",
  "type": "table",
  "head": [
   "헤더",
   "역할",
   "예시 값"
  ],
  "rows": [
   [
    "Content-Security-Policy",
    "스크립트·리소스 로드 출처 제한",
    "default-src 'self'"
   ],
   [
    "Strict-Transport-Security",
    "HTTPS 강제(HSTS)",
    "max-age=31536000; includeSubDomains"
   ],
   [
    "X-Frame-Options",
    "프레임 삽입 차단(클릭재킹 대응)",
    "DENY / SAMEORIGIN"
   ],
   [
    "X-Content-Type-Options",
    "MIME 스니핑 차단",
    "nosniff"
   ],
   [
    "Referrer-Policy",
    "Referer 정보 노출 제한",
    "strict-origin-when-cross-origin"
   ],
   [
    "Set-Cookie 속성",
    "쿠키 전송·접근 제한",
    "Secure; HttpOnly; SameSite=Lax"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 암호 알고리즘 총정리",
  "type": "table",
  "head": [
   "알고리즘",
   "분류",
   "구조·기반",
   "블록·키·출력",
   "상태·특징"
  ],
  "rows": [
   [
    "DES",
    "대칭 블록",
    "Feistel",
    "블록 64 / 키 56bit",
    "폐기(키 짧음)"
   ],
   [
    "3DES",
    "대칭 블록",
    "Feistel(EDE 3회)",
    "블록 64 / 키 112·168bit",
    "과도기 방식"
   ],
   [
    "AES",
    "대칭 블록",
    "SPN",
    "블록 128 / 키 128·192·256",
    "현행 표준, 라운드 10·12·14"
   ],
   [
    "SEED",
    "대칭 블록",
    "Feistel",
    "블록 128 / 키 128",
    "한국 KISA(1999)"
   ],
   [
    "ARIA",
    "대칭 블록",
    "SPN",
    "블록 128 / 키 128·192·256",
    "한국 국가표준(2004)"
   ],
   [
    "RSA",
    "공개키",
    "소인수분해",
    "2048bit 이상 권장",
    "암호화+서명"
   ],
   [
    "DH",
    "공개키",
    "이산대수(DLP)",
    "-",
    "키 교환 전용, MITM 취약"
   ],
   [
    "ECC",
    "공개키",
    "타원곡선 이산대수(ECDLP)",
    "256bit ≈ RSA 3072",
    "ECDSA·ECDH, IoT 유리"
   ],
   [
    "MD5",
    "해시",
    "-",
    "출력 128bit",
    "폐기(충돌 발견)"
   ],
   [
    "SHA-1",
    "해시",
    "-",
    "출력 160bit",
    "폐기(2017 SHAttered)"
   ],
   [
    "SHA-256",
    "해시",
    "SHA-2 계열",
    "출력 256bit",
    "현행 권장, 충돌강도 2^128"
   ],
   [
    "SHA-3",
    "해시",
    "Keccak",
    "가변",
    "SHA-2 보완"
   ],
   [
    "HMAC",
    "MAC",
    "해시+비밀키(ipad·opad)",
    "해시 출력 길이",
    "인증+무결성(RFC 2104)"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 블록 암호 운영모드 판단표",
  "type": "table",
  "head": [
   "모드·항목",
   "핵심 동작",
   "IV",
   "병렬",
   "특징·주의"
  ],
  "rows": [
   [
    "ECB",
    "블록 독립 암호화",
    "없음",
    "가능",
    "동일평문→동일암호, 패턴 노출·사용 금지"
   ],
   [
    "CBC",
    "이전 암호문 XOR 후 암호화",
    "필수",
    "암호화 X / 복호화 O",
    "Cᵢ=E(Pᵢ⊕Cᵢ₋₁), 오류 다음 블록까지 전파"
   ],
   [
    "CFB",
    "이전 암호문 암호화 후 XOR",
    "필수",
    "암호화 X",
    "스트림처럼 동작"
   ],
   [
    "OFB",
    "키스트림 자체 피드백",
    "필수",
    "암호화 X",
    "키스트림 사전 생성, 오류 전파 없음"
   ],
   [
    "CTR",
    "카운터 암호화 후 XOR",
    "Nonce·카운터",
    "가능",
    "고성능·랜덤 접근, 오류 전파 없음"
   ],
   [
    "GCM",
    "CTR + GHASH 인증",
    "Nonce",
    "가능",
    "AEAD(암호화+무결성)"
   ],
   [
    "IV 필요 모드",
    "CBC·CFB·OFB",
    "-",
    "-",
    "ECB만 IV 없음"
   ],
   [
    "병렬 암호화 가능",
    "CTR·ECB",
    "-",
    "-",
    "블록 간 의존 없음"
   ],
   [
    "오류 전파 없음",
    "OFB·CTR",
    "-",
    "-",
    "해당 비트만 영향(스트림 성질)"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 접근통제 정책·모델 비교",
  "type": "table",
  "head": [
   "구분",
   "이름",
   "핵심 기준·규칙",
   "특징"
  ],
  "rows": [
   [
    "정책",
    "DAC",
    "자원 소유자 재량(UNIX 권한·ACL)",
    "유연, 트로이목마 취약"
   ],
   [
    "정책",
    "MAC",
    "시스템이 보안등급(라벨) 강제",
    "군·정부, 소유자도 변경 불가"
   ],
   [
    "정책",
    "RBAC",
    "사용자→역할→권한",
    "대규모 관리 용이, 최소권한·SoD"
   ],
   [
    "정책",
    "ABAC",
    "주체·자원·환경 속성 조합",
    "동적 결정(XACML)"
   ],
   [
    "모델",
    "BLP",
    "No Read Up / No Write Down",
    "기밀성"
   ],
   [
    "모델",
    "Biba",
    "No Read Down / No Write Up",
    "무결성, BLP와 정반대"
   ],
   [
    "모델",
    "Clark-Wilson",
    "정형 트랜잭션 + 직무분리",
    "상업적 무결성"
   ],
   [
    "모델",
    "Chinese Wall",
    "과거 접근이력으로 동적 제한",
    "이해충돌 방지"
   ],
   [
    "행렬 구현",
    "ACL",
    "접근통제 행렬의 열(객체 기준)",
    "객체마다 허용 주체 목록"
   ],
   [
    "행렬 구현",
    "Capability List",
    "접근통제 행렬의 행(주체 기준)",
    "주체마다 접근 가능 객체 목록"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 법령·제도 핵심 수치",
  "type": "table",
  "head": [
   "항목",
   "수치·기준",
   "근거·비고"
  ],
  "rows": [
   [
    "유출 통지(정보주체)",
    "안 때부터 72시간 이내",
    "개인정보보호법 제34조"
   ],
   [
    "유출 신고(기관)",
    "1,000명 이상, 72시간 이내",
    "개인정보위 또는 KISA"
   ],
   [
    "개인정보 파기",
    "지체없이(5일 이내)",
    "복구 불가능한 방법"
   ],
   [
    "접속기록 보관(원칙)",
    "1년 이상",
    "안전성 확보조치"
   ],
   [
    "접속기록 보관(강화)",
    "2년 이상",
    "5만명 이상·고유식별·민감정보"
   ],
   [
    "광고 야간 전송",
    "21:00~08:00 별도 동의",
    "정보통신망법"
   ],
   [
    "광고 수신동의 확인",
    "2년마다",
    "정보통신망법"
   ],
   [
    "ISMS-P 유효기간",
    "3년",
    "만료 전 갱신심사"
   ],
   [
    "ISMS-P 사후심사",
    "연 1회 이상",
    "유지 여부 확인"
   ],
   [
    "ISMS-P 통제 수",
    "16 + 64 + 22 = 102",
    "ISMS는 80"
   ],
   [
    "CC EAL",
    "1~7",
    "ISO/IEC 15408, EAL4 상용 일반"
   ],
   [
    "CISO 근거",
    "정보통신망법 제45조의3",
    "과기정통부 장관 신고"
   ],
   [
    "CPO 근거",
    "개인정보보호법 제31조",
    "지정·공개"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 위험관리·재해복구 비교",
  "type": "table",
  "head": [
   "구분",
   "핵심",
   "예시·포인트"
  ],
  "rows": [
   [
    "위험감소",
    "통제 적용으로 위험 저감",
    "방화벽·암호화·접근통제"
   ],
   [
    "위험전가",
    "제3자에게 위험 이전",
    "사이버보험·아웃소싱"
   ],
   [
    "위험수용",
    "DoA 이하 잔여위험 인정",
    "대책비용 > 손실"
   ],
   [
    "위험회피",
    "위험 유발 활동 중단",
    "서비스 폐쇄·기능 제거"
   ],
   [
    "정량 분석",
    "금액(ALE)·객관적",
    "시간·비용 多·데이터 의존"
   ],
   [
    "정성 분석",
    "등급(상·중·하)·주관적",
    "델파이·시나리오·순위결정"
   ],
   [
    "SLE",
    "AV × EF",
    "1회 사고 손실"
   ],
   [
    "ALE",
    "SLE × ARO",
    "연간 손실 기대값"
   ],
   [
    "Mirror 사이트",
    "실시간 동기화, RTO 0",
    "비용 최고"
   ],
   [
    "Hot 사이트",
    "근실시간, 수시간",
    "비용 高"
   ],
   [
    "Warm 사이트",
    "주기적 백업, 수일",
    "비용 中"
   ],
   [
    "Cold 사이트",
    "공간만, 수주",
    "비용 低"
   ],
   [
    "MTD",
    "RTO + WRT",
    "최대허용중단시간"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 개인정보 처리 요건 정리",
  "type": "table",
  "head": [
   "구분",
   "대상·내용",
   "처리 요건"
  ],
  "rows": [
   [
    "일반 개인정보",
    "살아있는 개인 식별 정보",
    "동의·법령·계약 등 적법근거"
   ],
   [
    "민감정보(제23조)",
    "사상·신념·노조·정치·건강·유전·범죄경력 등",
    "별도 동의 또는 법령 근거"
   ],
   [
    "고유식별정보(제24조)",
    "주민·여권·운전면허·외국인등록번호",
    "별도 동의 또는 법령 구체적 근거"
   ],
   [
    "주민등록번호(제24조의2)",
    "강화 보호",
    "법령 근거 필수(동의로도 불가)"
   ],
   [
    "제3자 제공",
    "제공받는 자의 목적",
    "고지 후 별도 동의"
   ],
   [
    "처리위탁",
    "위탁자의 업무 처리",
    "처리방침 공개(동의 불요)"
   ],
   [
    "목적 외 이용·제공",
    "원칙 금지",
    "법령·정보주체 동의 등 예외"
   ],
   [
    "파기",
    "보유기간 경과·목적 달성",
    "5일 이내, 복구 불가 방법"
   ],
   [
    "국외이전",
    "해외로 개인정보 이전",
    "동의·법령·국제협정·인정·계약 이행"
   ],
   [
    "가명정보",
    "추가정보 없이 식별 불가",
    "개인정보에 포함"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "umask는 파일도 777에서 뺀다 — 파일은 666, 디렉터리는 777에서 빼므로 022 → 파일 644·디렉터리 755"
 },
 {
  "s": "s1",
  "t": "파일 삭제 가능 여부는 그 파일의 w 권한으로 결정된다 — 상위 디렉터리의 w 권한으로 결정(Sticky Bit가 본인 파일로 제한)"
 },
 {
  "s": "s1",
  "t": "SetUID 파일은 실행한 사용자의 권한으로 동작한다 — 파일 소유자의 권한으로 동작(EUID=소유자)"
 },
 {
  "s": "s1",
  "t": "rwS의 대문자 S는 SetUID가 정상 설정된 상태다 — 대문자 S는 실행권한(x)이 없는 비정상 설정"
 },
 {
  "s": "s1",
  "t": "find / -perm 4000 으로 SetUID 파일을 모두 찾는다 — 하이픈 없는 4000은 '정확히 4000'만, 포함 검색은 -perm -4000"
 },
 {
  "s": "s1",
  "t": "-rwsrwxrwx를 8진수 777로 쓴다 — SetUID 비트 포함 4자리 4777"
 },
 {
  "s": "s1",
  "t": "drwxrwxrwt(/tmp)는 위험한 권한이므로 즉시 회수한다 — 1777 Sticky Bit는 공용 디렉터리의 정상 설정"
 },
 {
  "s": "s1",
  "t": "shadow 해시 $5$는 SHA-512다 — $5$=SHA-256, $6$=SHA-512, $1$=MD5"
 },
 {
  "s": "s1",
  "t": "/etc/login.defs를 수정하면 기존 계정의 만료 정책도 즉시 바뀐다 — 신규 계정에만 적용, 기존 계정은 chage로 개별 조정"
 },
 {
  "s": "s1",
  "t": "PAM requisite는 실패해도 나머지 모듈을 계속 수행한다 — 그것은 required, requisite는 실패 즉시 중단"
 },
 {
  "s": "s1",
  "t": "sudoers는 vi로 직접 편집해도 된다 — 문법 오류 시 sudo 전체 불능, 반드시 visudo"
 },
 {
  "s": "s1",
  "t": "wtmp·btmp는 cat이나 grep으로 바로 읽는다 — 바이너리 로그, last·lastb 전용 명령 사용"
 },
 {
  "s": "s1",
  "t": "/var/log/secure는 모든 리눅스 배포판의 인증 로그다 — RHEL 계열, Debian/Ubuntu는 /var/log/auth.log"
 },
 {
  "s": "s1",
  "t": "rsyslog의 @@는 UDP 전송이다 — @=UDP, @@=TCP"
 },
 {
  "s": "s1",
  "t": "syslog Severity는 숫자가 클수록 심각하다 — 0(emerg)이 가장 심각, 7(debug)이 가장 낮음"
 },
 {
  "s": "s1",
  "t": "윈도우 로그온 실패 이벤트는 4624다 — 4624=성공, 4625=실패, 4634=로그오프"
 },
 {
  "s": "s1",
  "t": "RDP 원격데스크톱 로그온은 Logon Type 3이다 — 3은 네트워크, RDP는 10(RemoteInteractive)"
 },
 {
  "s": "s1",
  "t": "Worm은 숙주 파일에 기생해 전파한다 — 숙주가 필요한 것은 Virus, Worm은 독립 실행·자가 전파"
 },
 {
  "s": "s1",
  "t": "ASLR은 데이터 영역의 코드 실행을 막는 기법이다 — 그것은 DEP(NX), ASLR은 메모리 주소 임의화"
 },
 {
  "s": "s1",
  "t": "무결성 기준선 DB는 침해가 의심될 때 생성한다 — 도입 직후(신뢰 가능한 상태)에 생성해야 의미"
 },
 {
  "s": "s2",
  "t": "Stealth Scan은 TCP Connect 스캔(-sT)이다 — SYN(Half-Open) 스캔(-sS). Connect는 3-way를 완성해 로그가 남는다"
 },
 {
  "s": "s2",
  "t": "FIN·NULL·XMAS 스캔에서 RST 응답은 Open을 뜻한다 — RST는 Closed, 무응답이 Open|filtered"
 },
 {
  "s": "s2",
  "t": "XMAS 패킷은 모든 플래그가 켜진 패킷이다 — FIN+PSH+URG 세 개만 켠다"
 },
 {
  "s": "s2",
  "t": "AH도 페이로드를 암호화한다 — 암호화(기밀성)는 ESP만 제공, AH는 무결성·인증"
 },
 {
  "s": "s2",
  "t": "AH는 NAT 환경에서도 문제없이 동작한다 — IP 헤더 무결성 검증 때문에 NAT 통과 불가, NAT-T는 ESP를 UDP 4500으로 캡슐화"
 },
 {
  "s": "s2",
  "t": "DROP과 REJECT는 상대에게 같은 결과를 준다 — DROP은 무응답, REJECT는 거부 패킷 회신"
 },
 {
  "s": "s2",
  "t": "iptables -A로 허용 룰을 추가하면 기존 차단 룰보다 먼저 적용된다 — -A는 맨 끝, 앞서 차단 룰이 있으면 허용이 적용되지 않음(-I 사용)"
 },
 {
  "s": "s2",
  "t": "firewall-cmd --permanent만 실행하면 즉시 반영된다 — --reload 해야 런타임에 반영"
 },
 {
  "s": "s2",
  "t": "Snort 로컬 룰 sid는 아무 번호나 써도 된다 — 1,000,000 이상(공식 룰과 충돌 방지)"
 },
 {
  "s": "s2",
  "t": "DNS Zone Transfer는 UDP 53을 사용한다 — TCP 53, 일반 질의는 UDP 53"
 },
 {
  "s": "s2",
  "t": "Smurf와 Fraggle은 같은 프로토콜을 쓴다 — Smurf=ICMP, Fraggle=UDP"
 },
 {
  "s": "s2",
  "t": "Slowloris는 대역폭을 고갈시키는 공격이다 — 저대역으로 연결 슬롯을 고갈"
 },
 {
  "s": "s2",
  "t": "SYN Cookie는 Backlog 큐를 늘리는 기법이다 — 큐에 저장하지 않고 ISN에 정보를 인코딩"
 },
 {
  "s": "s2",
  "t": "Promiscuous Mode는 스위치에서 설정한다 — NIC 설정, 스위치 쪽은 Port Mirroring(SPAN)"
 },
 {
  "s": "s2",
  "t": "tcp[13]에서 SYN+ACK 값은 3이다 — SYN 2 + ACK 16 = 18"
 },
 {
  "s": "s2",
  "t": "스니핑은 데이터를 변조하는 능동 공격이다 — 수동 공격(기밀성 위협), 스푸핑·하이재킹이 능동"
 },
 {
  "s": "s2",
  "t": "DNSSEC은 DNS 질의를 암호화한다 — 응답의 전자서명으로 무결성·출처를 검증, 암호화는 DoH/DoT"
 },
 {
  "s": "s2",
  "t": "ACK 스캔으로 포트 Open 여부를 판단한다 — 방화벽 필터링 여부(filtered/unfiltered) 파악용"
 },
 {
  "s": "s2",
  "t": "IDS는 inline으로 배치되어 공격을 차단한다 — IDS는 out-of-band 탐지·경보, 차단은 IPS"
 },
 {
  "s": "s2",
  "t": "WPA2는 SAE 핸드셰이크로 오프라인 사전 공격을 막는다 — SAE(Dragonfly)는 WPA3, WPA2-PSK는 4-way handshake"
 },
 {
  "s": "s3",
  "t": "SQL 인젝션 근본 대책은 WAF 다 — 아니다. 근본은 PreparedStatement(파라미터화 쿼리), WAF 는 보조"
 },
 {
  "s": "s3",
  "t": "XSS 근본 대책은 입력 필터링이다 — 출력 시점의 ★컨텍스트별 출력 인코딩★이 핵심, 입력 검증은 보조"
 },
 {
  "s": "s3",
  "t": "HttpOnly 는 XSS 를 막는다 — 스크립트의 쿠키 접근만 막아 피해(세션 탈취)를 줄일 뿐 XSS 실행 자체는 막지 못한다"
 },
 {
  "s": "s3",
  "t": "CSRF 는 XSS 대책(출력 인코딩)으로 막힌다 — 별도 대책(CSRF 토큰·SameSite)이 필요하다"
 },
 {
  "s": "s3",
  "t": "Secure 속성은 쿠키를 암호화한다 — HTTPS 연결에서만 전송하게 할 뿐 쿠키 값 자체를 암호화하지 않는다"
 },
 {
  "s": "s3",
  "t": "MyBatis 에서 ${} 는 바인딩이다 — #{} 가 바인딩, ${} 는 문자열 치환으로 위험"
 },
 {
  "s": "s3",
  "t": "파일 업로드는 확장자 차단목록으로 충분하다 — 허용목록 + 시그니처 검증 + 실행 권한 제거 + 웹루트 외부 저장을 함께"
 },
 {
  "s": "s3",
  "t": "403 은 존재하지 않는 페이지다 — 404 가 없음, 403 은 접근 거부"
 },
 {
  "s": "s3",
  "t": "상태코드 200 이면 공격이 성공한 것이다 — 응답 크기·내용을 정상 응답과 비교해야 판단 가능"
 },
 {
  "s": "s3",
  "t": "User-Agent 로 공격 도구를 확정할 수 있다 — UA 는 위조 가능, 요청 빈도·경로 패턴과 함께 판단"
 },
 {
  "s": "s3",
  "t": "DNSSEC 은 DNS 질의를 암호화한다 — 서명으로 무결성·출처 인증만, 암호화는 DoH·DoT"
 },
 {
  "s": "s3",
  "t": "SPF 는 메일 본문에 서명한다 — 서명은 DKIM, SPF 는 발신 허용 IP 목록"
 },
 {
  "s": "s3",
  "t": "세션 고정 대책은 세션 타임아웃 단축이다 — 핵심은 ★로그인 성공 시 세션 ID 재발급★"
 },
 {
  "s": "s3",
  "t": "SameSite=None 은 단독으로 쓸 수 있다 — 최신 브라우저는 Secure 속성이 함께 있어야 허용"
 },
 {
  "s": "s3",
  "t": "CSP 를 적용하면 출력 인코딩은 필요 없다 — CSP 는 보조 방어, 출력 인코딩은 여전히 필수"
 },
 {
  "s": "s4",
  "t": "BLP는 No Read Down·No Write Up 이다 — BLP(기밀성)는 No Read Up·No Write Down, Biba(무결성)가 No Read Down·No Write Up."
 },
 {
  "s": "s4",
  "t": "Biba는 기밀성 보호 모델이다 — Biba는 무결성 모델, 기밀성 모델은 BLP."
 },
 {
  "s": "s4",
  "t": "기밀성을 위해 송신자 개인키로 암호화한다 — 기밀성은 수신자 공개키로 암호화, 송신자 개인키는 서명(부인방지)."
 },
 {
  "s": "s4",
  "t": "전자서명은 메시지 내용의 기밀성을 보장한다 — 서명은 무결성·인증·부인방지만, 기밀성은 별도 암호화 필요."
 },
 {
  "s": "s4",
  "t": "Kerberos는 공개키 기반 인증 프로토콜이다 — 기본은 대칭키 티켓 기반, KDC가 SPOF이며 시간 동기 필수."
 },
 {
  "s": "s4",
  "t": "ECB 모드도 IV를 사용한다 — ECB만 IV가 없다(IV 필요: CBC·CFB·OFB, CTR은 Nonce)."
 },
 {
  "s": "s4",
  "t": "CBC는 암호화를 병렬 처리할 수 있다 — CBC 암호화는 체이닝이라 직렬, 복호화만 병렬 가능. 병렬 암호화는 CTR·ECB."
 },
 {
  "s": "s4",
  "t": "SHA-256의 충돌저항 강도는 2^256이다 — 생일 공격으로 2^(n/2)=2^128."
 },
 {
  "s": "s4",
  "t": "단순 해시만으로 메시지 인증(송신자 확인)이 가능하다 — 해시는 누구나 계산 가능, 비밀키를 쓰는 HMAC이라야 메시지 인증."
 },
 {
  "s": "s4",
  "t": "DH 키 교환은 데이터를 직접 암호화한다 — DH는 공유키 합의 전용, 암호화·서명 기능 없음."
 },
 {
  "s": "s4",
  "t": "DH는 그 자체로 중간자 공격에 안전하다 — 공개값을 인증하지 않아 MITM 취약, 인증서·서명으로 인증된 DH 필요."
 },
 {
  "s": "s4",
  "t": "비밀번호와 PIN을 함께 쓰면 MFA다 — 둘 다 지식 요소, MFA는 서로 다른 요소 2개 이상."
 },
 {
  "s": "s4",
  "t": "HOTP는 시간 기반, TOTP는 카운터 기반이다 — HOTP=카운터(이벤트), TOTP=시간."
 },
 {
  "s": "s4",
  "t": "CRL은 실시간으로 개별 인증서 상태를 질의한다 — 실시간 개별 질의는 OCSP, CRL은 폐기목록 주기적 일괄 다운로드."
 },
 {
  "s": "s4",
  "t": "MD5에 솔트만 추가하면 비밀번호 저장에 충분하다 — MD5는 고속이라 GPU 무차별에 약함, bcrypt·scrypt·Argon2·PBKDF2 전용 해시 + 키 스트레칭."
 },
 {
  "s": "s4",
  "t": "솔트는 모든 사용자에게 동일한 값을 쓴다 — 솔트는 사용자마다 다른 난수여야 레인보우 테이블·동일 비밀번호 식별 방어."
 },
 {
  "s": "s4",
  "t": "ACL은 접근통제 행렬의 행(주체) 기준 저장이다 — ACL=열(객체) 기준, 행(주체) 기준은 Capability List."
 },
 {
  "s": "s4",
  "t": "하이브리드 암호에서 데이터를 공개키로 암호화한다 — 데이터는 대칭키(세션키), 세션키만 수신자 공개키로 암호화."
 },
 {
  "s": "s4",
  "t": "대칭키 사용자 N명의 키 수는 2N이다 — 대칭은 N(N-1)/2, 공개키가 2N."
 },
 {
  "s": "s4",
  "t": "루트 CA 인증서는 상위 CA가 서명한다 — 루트 CA 인증서는 자기 서명(self-signed)."
 },
 {
  "s": "s5",
  "t": "RTO는 데이터 손실 허용 시점이다 — RTO는 복구 목표 '시간', 데이터 손실 시점은 RPO"
 },
 {
  "s": "s5",
  "t": "보험 가입은 위험회피다 — 보험·아웃소싱은 위험전가, 회피는 활동 자체 중단"
 },
 {
  "s": "s5",
  "t": "위험수용은 아무 통제도 하지 않는 것이다 — DoA 이하 잔여위험을 인정하는 의사결정"
 },
 {
  "s": "s5",
  "t": "EAL7은 가장 안전한 제품이다 — EAL은 보안 강도가 아니라 보증(평가 신뢰) 수준"
 },
 {
  "s": "s5",
  "t": "주민등록번호는 정보주체 동의로 처리할 수 있다 — 법령 근거 없으면 동의로도 불가"
 },
 {
  "s": "s5",
  "t": "처리위탁도 제3자 제공처럼 별도 동의가 필요하다 — 위탁은 처리방침 공개로 동의 불요"
 },
 {
  "s": "s5",
  "t": "유출 통지는 '지체없이'라고만 쓰면 된다 — 72시간 이내를 명시해야 함"
 },
 {
  "s": "s5",
  "t": "ISMS 인증은 3개 영역 102개 통제다 — ISMS는 1+2영역 80개, ISMS-P가 102개"
 },
 {
  "s": "s5",
  "t": "Cold 사이트가 가장 비싸다 — 비용은 Mirror > Hot > Warm > Cold, RTO와 반비례"
 },
 {
  "s": "s5",
  "t": "Hot 사이트는 RTO 0이다 — RTO 0(실시간 이중화)은 Mirror, Hot은 수시간"
 },
 {
  "s": "s5",
  "t": "CISO와 CPO는 같은 법에 근거한다 — CISO는 정보통신망법, CPO는 개인정보보호법"
 },
 {
  "s": "s5",
  "t": "정량적 분석은 주관적, 정성적 분석은 객관적이다 — 반대, 정량=객관·금액, 정성=주관·등급"
 },
 {
  "s": "s5",
  "t": "사망자 정보도 개인정보다 — 개인정보는 살아있는 개인에 관한 정보"
 },
 {
  "s": "s5",
  "t": "ALE = 자산가치 × EF다 — 그것은 SLE, ALE = SLE × ARO"
 },
 {
  "s": "s5",
  "t": "BIA는 BCP 수립 후 수행한다 — BIA가 BCP 수립의 출발점"
 },
 {
  "s": "s5",
  "t": "DRP가 BCP를 포함한다 — BCP ⊃ DRP, DRP는 IT 복구에 초점"
 },
 {
  "s": "s5",
  "t": "지침(Guideline)은 반드시 지켜야 하는 의무 문서다 — 의무는 표준, 지침은 권고"
 },
 {
  "s": "s5",
  "t": "PIA는 시스템 운영 후 사후 점검 제도다 — 구축·변경 전 사전 평가 제도"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "Linux 권한",
  "title": "리눅스 파일 권한·umask·특수 권한",
  "ref": "공부자료 1과목 §1~§2",
  "body": [
   {
    "h": "권한 비트와 디렉터리 의미",
    "li": [
     "r=4, w=2, x=1 — 소유자(u)·그룹(g)·기타(o) 그룹별 합산 → 755 = rwxr-xr-x",
     "맨 앞 1자 파일 형식: - 일반, d 디렉터리, l 심볼릭링크, b/c 장치, s 소켓, p 파이프",
     "디렉터리 r=목록 조회(ls), w=생성·삭제·이름변경, x=진입(cd)·내부 접근",
     "파일 삭제 가능 여부는 상위 디렉터리의 w 권한이 결정"
    ]
   },
   {
    "h": "umask 계산",
    "tb": {
     "head": [
      "umask",
      "파일",
      "디렉터리",
      "의미"
     ],
     "rows": [
      [
       "022",
       "644",
       "755",
       "일반 기본값"
      ],
      [
       "027",
       "640",
       "750",
       "보안 권장"
      ],
      [
       "077",
       "600",
       "700",
       "본인만 접근"
      ],
      [
       "002",
       "664",
       "775",
       "그룹 협업"
      ]
     ]
    }
   },
   {
    "h": "특수 권한",
    "tb": {
     "head": [
      "권한",
      "8진수",
      "의미",
      "표기"
     ],
     "rows": [
      [
       "SetUID",
       "4000",
       "실행 시 파일 소유자 권한",
       "u의 x자리 s"
      ],
      [
       "SetGID",
       "2000",
       "실행 시 파일 그룹 권한 / 디렉터리는 그룹 상속",
       "g의 x자리 s"
      ],
      [
       "Sticky",
       "1000",
       "디렉터리 내 본인 파일만 삭제",
       "o의 x자리 t"
      ]
     ]
    }
   },
   {
    "h": "명령·점검·대응",
    "li": [
     "chmod 755 file(8진수) / chmod u+x,go-w file(심볼릭) / chown user:group file",
     "chmod 4755 또는 u+s(SetUID), 2755 또는 g+s(SetGID), 1777 또는 +t(Sticky)",
     "find / -perm -4000 -type f 2>/dev/null — SetUID 전수 탐색(-2000 SetGID, -6000 둘 다)",
     "대응: 불필요 SetUID 제거(chmod u-s), 정상 목록 기준선 저장 후 주기 비교"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "계정·인증",
  "title": "계정 파일·패스워드 정책·PAM·sudo",
  "ref": "공부자료 1과목 §3~§6",
  "body": [
   {
    "h": "/etc/passwd·/etc/shadow",
    "li": [
     "passwd 7필드: 계정명:x:UID:GID:GECOS:홈:셸 (예 root:x:0:0:root:/root:/bin/bash)",
     "UID 0 = root, 1~999 시스템, 1000~ 일반(배포판별) — root 외 UID 0은 백도어 의심",
     "shadow 9필드: 계정·해시·최종변경·Min·Max·Warn·Inactive·Expire·예약",
     "해시 $1$=MD5, $5$=SHA-256, $6$=SHA-512 / ! 또는 * = 잠금",
     "shadow 권한 600(root:root), 로그인 차단 셸 /sbin/nologin"
    ]
   },
   {
    "h": "패스워드 정책",
    "tb": {
     "head": [
      "설정",
      "위치",
      "예"
     ],
     "rows": [
      [
       "최대·최소 사용일·경고",
       "/etc/login.defs",
       "PASS_MAX_DAYS 90, PASS_MIN_DAYS 1, PASS_WARN_AGE 7"
      ],
      [
       "복잡도",
       "pam_pwquality.so / pwquality.conf",
       "minlen=8, ucredit=-1"
      ],
      [
       "실패 잠금",
       "pam_faillock.so",
       "deny=5 unlock_time=900"
      ],
      [
       "기존 계정 만료",
       "chage",
       "chage -M 90 -m 1 -W 7 user"
      ]
     ]
    }
   },
   {
    "h": "PAM",
    "tb": {
     "head": [
      "구분",
      "항목",
      "의미"
     ],
     "rows": [
      [
       "Type",
       "auth",
       "사용자 인증"
      ],
      [
       "",
       "account",
       "계정 유효성(만료·시간)"
      ],
      [
       "",
       "password",
       "패스워드 변경·복잡도"
      ],
      [
       "",
       "session",
       "세션 시작·종료"
      ],
      [
       "Flag",
       "required",
       "실패해도 진행 후 최종 실패"
      ],
      [
       "",
       "requisite",
       "실패 즉시 중단"
      ],
      [
       "",
       "sufficient",
       "성공 시 즉시 통과"
      ],
      [
       "",
       "optional",
       "결과 무시"
      ]
     ]
    }
   },
   {
    "h": "su·sudo",
    "li": [
     "su 제한: /etc/pam.d/su에 auth required pam_wheel.so use_uid → wheel 그룹만 허용",
     "sudo: 본인 패스워드·명령 단위 허용·감사 로그 / su: root 패스워드·전권",
     "sudoers 문법: user host=(runas) commands, 편집은 반드시 visudo",
     "sudo -l로 허용 명령 확인, NOPASSWD·ALL 남용 점검"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "Linux 로그",
  "title": "리눅스 로그 분석과 syslog",
  "ref": "공부자료 1과목 §7~§8",
  "body": [
   {
    "h": "주요 로그 파일",
    "tb": {
     "head": [
      "파일",
      "내용",
      "명령"
     ],
     "rows": [
      [
       "/var/log/secure",
       "인증·sudo(RHEL)",
       "grep"
      ],
      [
       "/var/log/auth.log",
       "인증(Debian/Ubuntu)",
       "grep"
      ],
      [
       "/var/log/wtmp",
       "로그인 성공·부팅",
       "last"
      ],
      [
       "/var/log/btmp",
       "로그인 실패",
       "lastb"
      ],
      [
       "/var/log/lastlog",
       "최종 로그인",
       "lastlog"
      ],
      [
       "/var/run/utmp",
       "현재 접속자",
       "who, w"
      ]
     ]
    }
   },
   {
    "h": "공격 흔적 분석",
    "li": [
     "grep \"Failed password\" /var/log/secure — 인증 실패 추출",
     "동일 IP 반복 실패 + 다수 계정명 시도(invalid user) → 무차별 대입·사전 공격",
     "last reboot — 재부팅 이력, lastb | head — 최근 실패",
     "대응: fail2ban, PermitRootLogin no, 공개키 인증, 원격 syslog로 로그 위변조 대비"
    ]
   },
   {
    "h": "syslog·rsyslog·journald",
    "li": [
     "Facility(kern·auth/authpriv·cron·daemon·local0~7) + Severity로 라우팅",
     "Severity 0 emerg·1 alert·2 crit·3 err·4 warning·5 notice·6 info·7 debug (낮을수록 심각)",
     "authpriv.* /var/log/secure — 인증 로그 분리",
     "*.* @@logserver:514 — @@=TCP, @=UDP 원격 전송",
     "journalctl -u sshd / --since \"1 hour ago\", logger로 테스트 기록, logrotate로 순환"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "Windows 보안",
  "title": "윈도우 이벤트 로그·SID·레지스트리",
  "ref": "공부자료 1과목 §9~§10",
  "body": [
   {
    "h": "핵심 이벤트 ID",
    "tb": {
     "head": [
      "ID",
      "의미"
     ],
     "rows": [
      [
       "4624 / 4625",
       "로그온 성공 / 실패"
      ],
      [
       "4634",
       "로그오프"
      ],
      [
       "4648",
       "명시적 자격증명 로그온"
      ],
      [
       "4672",
       "특수 권한 부여"
      ],
      [
       "4688",
       "새 프로세스 생성"
      ],
      [
       "4720 / 4726",
       "계정 생성 / 삭제"
      ],
      [
       "4728 / 4732",
       "보안 그룹 멤버 추가"
      ],
      [
       "1102",
       "감사 로그 삭제"
      ],
      [
       "7045",
       "새 서비스 설치"
      ]
     ]
    }
   },
   {
    "h": "Logon Type·로그 위치",
    "li": [
     "2=대화형(콘솔), 3=네트워크, 4=배치, 5=서비스, 7=잠금해제, 10=RDP",
     "로그 파일 %SystemRoot%\\System32\\winevt\\Logs\\*.evtx, 뷰어 eventvwr.msc",
     "wevtutil qe Security /c:5 /f:text, Get-WinEvent -FilterHashtable @{LogName='Security';Id=4625}"
    ]
   },
   {
    "h": "계정·인증 구성요소",
    "li": [
     "SID S-1-5-21-<도메인>-<RID>: 500 Administrator, 501 Guest, 1000~ 일반",
     "SAM: 로컬 계정 해시 저장(HKLM\\SAM) / LSA(lsass.exe): 인증 중재",
     "Mimikatz: lsass 메모리에서 해시·티켓 탈취 → Pass-the-Hash/Ticket, 대응 Credential Guard",
     "whoami /user, net localgroup administrators, wmic useraccount get name,sid"
    ]
   },
   {
    "h": "레지스트리·자동실행",
    "li": [
     "루트 키: HKCR, HKCU, HKLM(시스템 전체·SAM), HKU, HKCC",
     "자동실행: HKLM·HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run, RunOnce",
     "점검: reg query, Autoruns, sc query, tasklist /svc"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "악성코드",
  "title": "악성코드 유형과 백도어·루트킷 점검",
  "ref": "공부자료 1과목 §11",
  "body": [
   {
    "h": "유형 비교",
    "tb": {
     "head": [
      "유형",
      "특징",
      "대응"
     ],
     "rows": [
      [
       "Virus",
       "숙주 파일 필요·자기복제",
       "백신·시그니처"
      ],
      [
       "Worm",
       "독립 실행·네트워크 자가전파",
       "패치·세그먼트화"
      ],
      [
       "Trojan",
       "정상 위장·복제 없음",
       "출처 검증·해시 확인"
      ],
      [
       "Backdoor",
       "인증 우회 접근 경로",
       "비인가 포트·계정 점검"
      ],
      [
       "Rootkit",
       "커널/시스템 은닉",
       "무결성 점검·외부 부팅"
      ],
      [
       "Logic Bomb",
       "조건 충족 시 동작",
       "코드 리뷰"
      ],
      [
       "Ransomware",
       "파일 암호화·금전 요구",
       "백업·복원"
      ]
     ]
    }
   },
   {
    "h": "루트킷이 어려운 이유",
    "li": [
     "커널 후킹으로 ps·netstat·ls 출력 자체를 위조",
     "감염 시스템 명령을 신뢰할 수 없음 → 신뢰 매체 부팅·기준선 해시 비교",
     "도구: chkrootkit, rkhunter --check"
    ]
   },
   {
    "h": "백도어 점검 명령",
    "li": [
     "netstat -ntlp / ss -ntlp — 비정상 LISTEN 포트",
     "ps -ef --forest — 비정상 부모-자식 프로세스",
     "crontab -l, ls -al /etc/cron* — 악성 예약작업",
     "find / -mtime -1 -type f — 최근 변경 파일, rpm -Va / debsums — 패키지 변조"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-6",
  "t": "메모리·권한상승",
  "title": "버퍼 오버플로우·레이스 컨디션·권한 상승",
  "ref": "공부자료 1과목 §12~§13",
  "body": [
   {
    "h": "메모리 공격 유형",
    "tb": {
     "head": [
      "종류",
      "원리"
     ],
     "rows": [
      [
       "Stack BOF",
       "지역 버퍼 초과 → Return Address 덮어쓰기 → EIP/RIP 탈취"
      ],
      [
       "Heap BOF",
       "malloc 영역 메타데이터 변조"
      ],
      [
       "Format String",
       "printf(user_input) — %x 누출, %n 쓰기"
      ],
      [
       "Integer Overflow",
       "정수 범위 초과 → 크기 검증 우회"
      ],
      [
       "UAF",
       "free 후 포인터 재사용"
      ]
     ]
    }
   },
   {
    "h": "원인 함수와 대응 기법",
    "li": [
     "위험: gets·strcpy·strcat·sprintf·scanf → 대체: fgets·strncpy·strncat·snprintf",
     "ASLR: 스택·힙·라이브러리 주소 임의화",
     "DEP/NX: 데이터 영역 실행 금지(W^X)",
     "Stack Canary(SSP): 리턴주소 앞 값 검증, 변조 시 abort / RELRO: GOT 보호"
    ]
   },
   {
    "h": "레이스 컨디션(TOCTOU)",
    "li": [
     "Time of Check와 Time of Use 사이의 타이밍 차 악용",
     "SetUID 프로그램의 임시파일을 심볼릭 링크로 교체 → root 권한으로 다른 파일 덮어쓰기",
     "대응: O_CREAT|O_EXCL 원자적 생성, mkstemp, O_NOFOLLOW, umask 강화, SetUID 최소화"
    ]
   },
   {
    "h": "권한 상승 경로·대응",
    "li": [
     "수직(일반→관리자) / 수평(동급 타 계정)",
     "경로: 잘못된 SetUID, sudo 오설정(NOPASSWD·와일드카드), 커널 취약점(Dirty COW), 쓰기 가능 cron·PATH 하이재킹",
     "윈도우: 미인용 서비스 경로, 토큰 탈취, DLL 하이재킹",
     "점검: sudo -l, find / -perm -4000, getcap -r / / 대응: 최소권한·패치·SELinux/AppArmor"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-7",
  "t": "무결성·점검",
  "title": "무결성 점검과 프로세스·포트 점검",
  "ref": "공부자료 1과목 §14~§15",
  "body": [
   {
    "h": "무결성 점검 원리",
    "li": [
     "해시(MD5/SHA-256)·권한·소유자·크기·inode를 기준선 DB로 저장 후 주기 비교",
     "HIDS 핵심 — 도구 Tripwire·AIDE·OSSEC",
     "기준선은 도입 직후(침해 전) 생성, DB는 읽기전용 매체·원격 보관"
    ]
   },
   {
    "h": "AIDE 절차",
    "li": [
     "aide --init — 기준선 생성(aide.db.new.gz)",
     "mv aide.db.new.gz aide.db.gz — 기준선 적용",
     "aide --check — 현재 상태 비교",
     "aide --update — 정상 변경 반영 / Tripwire: tripwire --init·--check"
    ]
   },
   {
    "h": "프로세스·포트 명령",
    "tb": {
     "head": [
      "명령",
      "용도"
     ],
     "rows": [
      [
       "ps -ef / ps aux",
       "전체 프로세스"
      ],
      [
       "ps -ef --forest",
       "프로세스 트리"
      ],
      [
       "netstat -ntlp / ss -ntlp",
       "LISTEN 포트와 PID"
      ],
      [
       "lsof -i :포트",
       "포트 사용 프로세스"
      ],
      [
       "lsof -p PID",
       "프로세스가 연 파일·소켓"
      ],
      [
       "ls -l /proc/PID/exe",
       "실행파일 실경로"
      ],
      [
       "kill -15 / kill -9",
       "정상 종료 / 강제 종료(SIGKILL)"
      ]
     ]
    }
   },
   {
    "h": "백도어 포트 점검 절차",
    "li": [
     "LISTEN 포트 목록 → 미상 포트 PID 확인 → /proc/PID/exe 실경로 → 해시·무결성 확인",
     "대응: 방화벽 차단(iptables/firewalld), 프로세스 격리·종료"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "TCP/IP·포트",
  "title": "TCP/IP 핵심 — 연결·플래그·ICMP·ARP·DNS",
  "ref": "공부자료 2과목 §1 · RFC 793·792·826",
  "body": [
   {
    "h": "TCP 연결 수립·종료",
    "li": [
     "3-way: SYN(seq=x) → SYN+ACK(seq=y, ack=x+1) → ACK(ack=y+1) — ack는 상대 seq+1",
     "4-way: FIN → ACK → FIN → ACK, 마지막 ACK 측 TIME_WAIT(2MSL) — 지연 패킷 소멸·ACK 재전송 보장",
     "Half-Open(SYN_RECV): SYN+ACK까지만 진행된 상태 → 대량이면 SYN Flood 징후"
    ]
   },
   {
    "h": "포트 상태별 응답",
    "tb": {
     "head": [
      "보낸 패킷",
      "Open 포트",
      "Closed 포트"
     ],
     "rows": [
      [
       "SYN",
       "SYN+ACK",
       "RST"
      ],
      [
       "FIN·NULL·XMAS",
       "무응답",
       "RST"
      ],
      [
       "UDP",
       "무응답(또는 응답)",
       "ICMP Type3 Code3"
      ]
     ]
    }
   },
   {
    "h": "ICMP·ARP·DNS 요점",
    "li": [
     "ICMP Type 8/0 Echo, Type 3 Unreachable(Code 3 Port), Type 11 Time Exceeded(traceroute), Type 5 Redirect",
     "ARP: IP→MAC, Request 브로드캐스트·Reply 유니캐스트, 무상태라 위조 Reply가 캐시에 반영됨",
     "DNS: 질의 UDP 53, Zone Transfer TCP 53 — allow-transfer로 보조 DNS만 허용"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "스캔 탐지",
  "title": "포트 스캔 식별과 대응 — 패킷 패턴으로 판별",
  "ref": "공부자료 2과목 §2 · Nmap Reference Guide",
  "body": [
   {
    "h": "스캔 유형별 관찰 패턴",
    "tb": {
     "head": [
      "유형(nmap 옵션)",
      "관찰 패턴",
      "특징"
     ],
     "rows": [
      [
       "SYN(-sS)",
       "SYN → SYN+ACK → 스캐너 RST",
       "3-way 미완성, 스텔스"
      ],
      [
       "Connect(-sT)",
       "3-way 완성 후 즉시 종료",
       "서비스 로그에 남음"
      ],
      [
       "FIN/NULL/XMAS(-sF/-sN/-sX)",
       "비정상 플래그 단독 패킷",
       "무응답=Open, RST=Closed"
      ],
      [
       "ACK(-sA)",
       "ACK 단독",
       "방화벽 필터링 매핑"
      ],
      [
       "UDP(-sU)",
       "UDP + ICMP 3/3 회신",
       "느림"
      ],
      [
       "Idle(-sI)",
       "제3 호스트(좀비) IPID 이용",
       "실제 출발지 은닉"
      ]
     ]
    }
   },
   {
    "h": "탐지·대응",
    "li": [
     "짧은 시간 한 출발지에서 다수 포트로 SYN·RST가 반복되면 스캔 — IDS 임계치(detection_filter) 경보",
     "비정상 플래그 조합(NULL·XMAS·SYN+FIN) DROP: iptables --tcp-flags ALL NONE / ALL FIN,PSH,URG",
     "불필요 포트 닫기·배너 최소화(-sV 버전 탐지 노출 감소)",
     "기본정책 DROP으로 Closed 포트도 RST 대신 무응답 → 정보 노출 감소"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "DoS 대응",
  "title": "DoS·DDoS 원리와 대응",
  "ref": "공부자료 2과목 §3.1",
  "body": [
   {
    "h": "공격 유형별 원리·대응",
    "tb": {
     "head": [
      "공격",
      "원리",
      "대응"
     ],
     "rows": [
      [
       "SYN Flood",
       "반연결 큐(Backlog) 고갈",
       "SYN Cookie·Backlog 증대·SYN Proxy"
      ],
      [
       "Smurf / Fraggle",
       "출발지 위조 + 브로드캐스트 증폭(ICMP/UDP)",
       "Directed Broadcast 차단"
      ],
      [
       "UDP Flood",
       "임의 포트 UDP 대량 → ICMP 오류 폭증",
       "속도 제한·필터"
      ],
      [
       "Land",
       "출발지=목적지",
       "Ingress Filtering"
      ],
      [
       "Teardrop",
       "Fragment Offset 중첩",
       "패치·재조립 검증"
      ],
      [
       "Ping of Death",
       "65,535바이트 초과 ICMP",
       "패치·크기 제한"
      ],
      [
       "Slowloris",
       "헤더 미완성 연결 유지 → 슬롯 고갈",
       "헤더 타임아웃·연결 수 제한"
      ]
     ]
    }
   },
   {
    "h": "DDoS 3분류",
    "li": [
     "Volume(대역폭): UDP/ICMP Flood, DNS·NTP·Memcached 증폭 — ISP·클린존(스크러빙)·CDN",
     "Protocol(자원): SYN Flood, Ping of Death — SYN Cookie·방화벽 상태 테이블 관리",
     "Application(L7): HTTP Flood, Slowloris, RUDY — WAF·속도 제한·캡차·타임아웃"
    ]
   },
   {
    "h": "탐지 명령",
    "li": [
     "ss -tan state syn-recv | wc -l — 반연결 수 급증 확인",
     "netstat -an | grep SYN_RECV | awk '{print $5}' | sort | uniq -c — 출발지 분포",
     "sysctl net.ipv4.tcp_max_syn_backlog — Backlog 크기 확인"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "스니핑·스푸핑 대응",
  "title": "스니핑·스푸핑·MITM 탐지와 대응",
  "ref": "공부자료 2과목 §1.4·§1.5·§3.2",
  "body": [
   {
    "h": "유형 비교",
    "tb": {
     "head": [
      "구분",
      "성격",
      "대응"
     ],
     "rows": [
      [
       "스니핑",
       "수동, 기밀성 위협",
       "암호화(TLS·SSH·IPSec)·VLAN"
      ],
      [
       "ARP 스푸핑",
       "능동, MITM 진입",
       "Static ARP·DAI·Port Security"
      ],
      [
       "MAC Flooding",
       "CAM 테이블 고갈 → 플러딩",
       "Port Security"
      ],
      [
       "DNS 스푸핑",
       "위조 응답으로 피싱 유도",
       "DNSSEC·포트 랜덤화"
      ],
      [
       "세션 하이재킹",
       "세션 쿠키·seq 탈취",
       "HTTPS·HttpOnly·Secure·재인증"
      ]
     ]
    }
   },
   {
    "h": "ARP 스푸핑 탐지 포인트",
    "li": [
     "arp -a / ip neigh 에서 게이트웨이 MAC이 평소와 다름",
     "서로 다른 IP가 같은 MAC으로 매핑",
     "arpwatch 'changed ethernet address' 경보",
     "Wireshark arp 필터에서 요청 없는 Reply 반복(duplicate use of IP 경고)"
    ]
   },
   {
    "h": "MITM 방어",
    "li": [
     "상호 인증(mTLS)·인증서 검증 경고 무시 금지",
     "HSTS로 HTTPS 강제(SSL Strip 차단)",
     "Rogue AP 탐지(WIPS)·802.1X"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "패킷 분석",
  "title": "패킷 분석 — tcpdump·Wireshark 필터",
  "ref": "공부자료 2과목 §4",
  "body": [
   {
    "h": "tcpdump(BPF 캡처 필터)",
    "tb": {
     "head": [
      "목적",
      "표현",
      "비고"
     ],
     "rows": [
      [
       "호스트",
       "host 10.0.0.5",
       "src host / dst host"
      ],
      [
       "포트",
       "port 80",
       "tcp port 443"
      ],
      [
       "SYN만",
       "'tcp[13] & 2 != 0'",
       "tcp[tcpflags] & tcp-syn != 0"
      ],
      [
       "SYN+ACK만",
       "'tcp[13] == 18'",
       "2+16"
      ],
      [
       "저장·읽기",
       "-w dump.pcap / -r dump.pcap",
       "-nn 이름 변환 끔"
      ]
     ]
    }
   },
   {
    "h": "Wireshark(디스플레이 필터)",
    "li": [
     "ip.addr == 10.0.0.5 / ip.src == … && ip.dst == …",
     "tcp.flags.syn == 1 && tcp.flags.ack == 0 — 순수 SYN",
     "tcp.flags.reset == 1 — RST(닫힌 포트·강제 종료)",
     "tcp.analysis.retransmission — 재전송",
     "http.request.method == \"POST\" / dns / arp"
    ]
   },
   {
    "h": "덤프 해석 요령",
    "li": [
     "SYN 다수 + ACK 없음 = SYN Flood",
     "한 출발지 → 여러 포트 SYN + RST 회신 다수 = 포트 스캔",
     "ICMP 3/3 다수 = UDP 스캔 또는 UDP Flood 부작용",
     "같은 IP에 서로 다른 MAC의 ARP Reply = ARP 스푸핑"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-6",
  "t": "방화벽·iptables",
  "title": "iptables·firewalld 방화벽 룰",
  "ref": "공부자료 2과목 §5.1·§5.2 · iptables man",
  "body": [
   {
    "h": "구조와 옵션",
    "tb": {
     "head": [
      "항목",
      "내용",
      "비고"
     ],
     "rows": [
      [
       "테이블",
       "filter(기본)·nat·mangle",
       "-t 지정"
      ],
      [
       "체인",
       "INPUT·OUTPUT·FORWARD",
       "nat: PREROUTING·POSTROUTING"
      ],
      [
       "추가/삽입",
       "-A 끝 / -I 체인 번호",
       "-D 삭제, -F 초기화"
      ],
      [
       "매칭",
       "-p -s -d --sport --dport -i -o",
       "-m multiport --dports"
      ],
      [
       "상태",
       "-m state --state NEW,ESTABLISHED,RELATED",
       "conntrack 동일"
      ],
      [
       "타깃",
       "ACCEPT·DROP·REJECT·LOG",
       "-j"
      ]
     ]
    }
   },
   {
    "h": "실무 룰 예",
    "li": [
     "iptables -A INPUT -s 203.0.113.77 -j DROP — 공격 IP 차단",
     "iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT — 웹 허용",
     "iptables -A INPUT -p icmp --icmp-type echo-request -j DROP — ping 차단",
     "iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 5 -j DROP — SSH 무차별 대입 완화",
     "iptables-save > /etc/sysconfig/iptables — 영구 저장"
    ]
   },
   {
    "h": "firewalld",
    "li": [
     "zone(신뢰 수준) 기반, firewall-cmd --get-active-zones",
     "--permanent 변경 후 --reload 해야 반영",
     "--add-service=https / --add-port=8080/tcp / --remove-service=ssh",
     "--list-all 로 확인"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-7",
  "t": "IDS·Snort 룰",
  "title": "IDS·IPS와 Snort 룰 작성",
  "ref": "공부자료 2과목 §5.3·§5.4 · Snort Users Manual",
  "body": [
   {
    "h": "IDS vs IPS",
    "tb": {
     "head": [
      "구분",
      "IDS",
      "IPS"
     ],
     "rows": [
      [
       "배치",
       "out-of-band(미러)",
       "inline"
      ],
      [
       "동작",
       "탐지·경보",
       "탐지+차단"
      ],
      [
       "장애 영향",
       "서비스 무관",
       "서비스 경로 영향"
      ]
     ]
    }
   },
   {
    "h": "탐지 방식",
    "li": [
     "Signature(오용) — 알려진 패턴, 오탐 적음, Zero-Day 탐지 불가",
     "Anomaly(이상) — 정상 기준 이탈, Zero-Day 탐지 가능, 오탐 많음",
     "NIDS·HIDS·NIPS·HIPS"
    ]
   },
   {
    "h": "Snort 룰 예",
    "li": [
     "alert tcp any any -> $HOME_NET 23 (msg:\"Telnet access\"; sid:1000001; rev:1;)",
     "alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:\"SQLi union select\"; flow:to_server,established; content:\"union select\"; nocase; sid:1000002; rev:1;)",
     "alert icmp any any -> $HOME_NET any (msg:\"ICMP Ping\"; itype:8; sid:1000003;)",
     "alert tcp any any -> $HOME_NET any (msg:\"SYN Flood\"; flags:S; detection_filter:track by_dst, count 100, seconds 1; sid:1000004;)",
     "alert tcp any any -> $HOME_NET any (msg:\"NULL scan\"; flags:0; sid:1000005;)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "웹 기초·HTTP",
  "title": "HTTP 구조와 보안 관점",
  "ref": "공부자료 3과목 · RFC 9110",
  "body": [
   {
    "h": "상태코드 — 로그 분석의 기준",
    "tb": {
     "head": [
      "코드",
      "의미",
      "보안 해석"
     ],
     "rows": [
      [
       "200",
       "성공",
       "응답 크기를 정상과 비교해 이상 여부 판단"
      ],
      [
       "301·302",
       "리다이렉트",
       "로그인 후 이동·개방형 리다이렉트 점검"
      ],
      [
       "401",
       "인증 필요",
       "반복 시 계정 대입 시도 정황"
      ],
      [
       "403",
       "접근 거부",
       "보호 경로 접근 시도"
      ],
      [
       "404",
       "없음",
       "대량 발생 시 경로 탐색(스캐닝)"
      ],
      [
       "500",
       "서버 오류",
       "입력값이 서버 처리 오류를 유발 — 취약점 탐색 정황"
      ]
     ]
    }
   },
   {
    "h": "메서드 보안",
    "li": [
     "GET 은 조회 전용 — 상태 변경(송금·삭제)을 GET 으로 처리하지 않는다(CSRF·로그 노출)",
     "민감정보는 URL 쿼리 대신 POST 본문으로 — URL 은 로그·Referer·브라우저 기록에 남는다",
     "PUT·DELETE·TRACE 등 불필요 메서드 비활성화, OPTIONS 응답으로 허용 메서드 점검"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "입력값 검증",
  "title": "입력값 검증 — 인젝션 계열 대응",
  "ref": "공부자료 3과목 · 행정안전부 SW 개발보안 가이드 · OWASP Top 10(2021) A03",
  "body": [
   {
    "h": "인젝션 공통 원리",
    "li": [
     "원인: 신뢰할 수 없는 입력이 명령·쿼리의 ★구조(코드)★ 로 해석됨",
     "영향: 데이터 유출·변조, 인증 우회, 서버 명령 실행",
     "공통 대책: 코드와 데이터 분리(바인딩), 허용목록 검증, 최소 권한, 오류 정보 차단"
    ]
   },
   {
    "h": "유형별 대책",
    "tb": {
     "head": [
      "유형",
      "근본 대책",
      "보조 대책"
     ],
     "rows": [
      [
       "SQL 인젝션",
       "PreparedStatement·ORM #{}",
       "DB 최소 권한, 오류 메시지 차단, WAF"
      ],
      [
       "OS 명령어 삽입",
       "명령 호출 대신 라이브러리, 인자 배열 분리",
       "허용목록 정규식, 저권한 실행"
      ],
      [
       "XSS",
       "컨텍스트별 출력 인코딩",
       "CSP, HttpOnly, 입력 검증"
      ],
      [
       "SSRF",
       "URL·IP 허용목록",
       "메타데이터 IP 차단, IMDSv2, 리다이렉트 미추적"
      ]
     ]
    }
   },
   {
    "h": "안전한 코드 예 (Java)",
    "li": [
     "PreparedStatement ps = conn.prepareStatement(\"SELECT * FROM member WHERE id = ?\");",
     "ps.setString(1, userId);  // 입력값은 바인딩 변수로만 전달",
     "출력 시: Encode.forHtml(value) (OWASP Java Encoder) 또는 JSTL <c:out value=\"${v}\"/>"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "세션·쿠키 보안",
  "title": "세션·쿠키 보안과 CSRF",
  "ref": "공부자료 3과목 · OWASP Session Management Cheat Sheet",
  "body": [
   {
    "h": "쿠키 속성",
    "tb": {
     "head": [
      "속성",
      "효과",
      "주의"
     ],
     "rows": [
      [
       "Secure",
       "HTTPS 에서만 전송",
       "값 암호화는 아님"
      ],
      [
       "HttpOnly",
       "스크립트 접근 차단",
       "XSS 실행 자체는 못 막음"
      ],
      [
       "SameSite=Strict",
       "교차 사이트 요청에 쿠키 미전송",
       "외부 링크 진입 시 로그인 풀림"
      ],
      [
       "SameSite=Lax",
       "최상위 GET 이동만 전송",
       "주요 브라우저 기본값"
      ],
      [
       "SameSite=None",
       "교차 사이트 허용",
       "Secure 필수"
      ]
     ]
    }
   },
   {
    "h": "CSRF 대응 절차",
    "li": [
     "서버가 세션별 예측 불가 토큰 발급 → 폼 hidden 필드·헤더로 전달",
     "상태 변경 요청마다 세션 토큰과 요청 토큰 일치 검증, 불일치 시 거부",
     "SameSite 쿠키, Origin/Referer 검증, 송금 등 중요 거래는 재인증(비밀번호·OTP)"
    ]
   },
   {
    "h": "안전한 쿠키 설정 예",
    "li": [
     "Set-Cookie: SESSIONID=<난수>; Path=/; Secure; HttpOnly; SameSite=Lax",
     "로그인 성공 직후 세션 ID 재발급(세션 고정 대응), 로그아웃 시 서버 세션 무효화"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "파일 처리 보안",
  "title": "파일 업로드·다운로드 보안",
  "ref": "공부자료 3과목 · 행정안전부 SW 개발보안 가이드",
  "body": [
   {
    "h": "업로드 보안 요구사항",
    "li": [
     "확장자 ★허용목록★(이미지·문서 등 업무상 필요한 것만)",
     "MIME 타입 + 파일 시그니처(매직넘버) 검증",
     "업로드 디렉터리 스크립트 실행 권한 제거, 가능하면 ★웹루트 외부★ 저장",
     "저장 파일명 난수화(UUID), 원본 파일명은 DB 에만",
     "용량 제한, 악성코드 검사"
    ]
   },
   {
    "h": "다운로드(경로 조작) 보안",
    "li": [
     "파일 ID 로 요청 → 서버가 DB 매핑으로 실제 경로 결정(간접 참조)",
     "부득이 경로를 받으면 정규화(getCanonicalPath) 후 기준 디렉터리 하위인지 검증",
     "PHP: allow_url_include=Off 로 원격 파일 포함 차단"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "웹 로그 분석",
  "title": "웹 로그 분석 — 공격 시도와 성공 판단",
  "ref": "공부자료 3과목 · Apache mod_log_config",
  "body": [
   {
    "h": "Combined Log Format",
    "tb": {
     "head": [
      "필드",
      "지시자",
      "분석 포인트"
     ],
     "rows": [
      [
       "클라이언트 IP",
       "%h",
       "동일 IP 집중 여부"
      ],
      [
       "시간",
       "%t",
       "초당 요청 수·야간 집중"
      ],
      [
       "요청 라인",
       "\"%r\"",
       "메서드·경로·파라미터 이상 여부"
      ],
      [
       "상태코드",
       "%>s",
       "200/403/404/500 분포"
      ],
      [
       "응답 크기",
       "%b",
       "정상 응답 대비 급증·급감"
      ],
      [
       "User-Agent",
       "\"%{User-Agent}i\"",
       "스캐너 도구명"
      ]
     ]
    }
   },
   {
    "h": "판단 기준",
    "li": [
     "탐색 단계: 짧은 시간에 다양한 경로 요청, 404·403 다수, 스캐너 UA",
     "취약점 시도: SQL 구문 문자·스크립트 태그 등 비정상 문자가 포함된 파라미터, 500 증가",
     "성공 의심: 비정상 파라미터 요청인데 200 응답이고 크기가 정상보다 현저히 큼",
     "대응: 해당 IP 차단, 취약 페이지 코드 수정, 동일 기간 DB·시스템 로그 교차 분석"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "웹서버·메일·DNS 보안",
  "title": "웹서버·메일·DNS 보안 설정",
  "ref": "공부자료 3과목 · KISA 주요정보통신기반시설 기술적 취약점 분석·평가 가이드",
  "body": [
   {
    "h": "웹서버 하드닝",
    "li": [
     "Apache: Options -Indexes, ServerTokens Prod, ServerSignature Off, TraceEnable Off",
     "Nginx: autoindex off, server_tokens off, limit_except 로 메서드 제한",
     "전용 저권한 계정으로 실행, 불필요 모듈·샘플 페이지 삭제, 관리자 페이지 접근 IP 제한"
    ]
   },
   {
    "h": "메일·DNS",
    "tb": {
     "head": [
      "기술",
      "보호 대상",
      "핵심"
     ],
     "rows": [
      [
       "SPF",
       "발신 서버",
       "허용 IP 를 DNS TXT 로 공개"
      ],
      [
       "DKIM",
       "메일 무결성",
       "헤더·본문 전자서명"
      ],
      [
       "DMARC",
       "정책·보고",
       "none/quarantine/reject"
      ],
      [
       "DNSSEC",
       "DNS 응답 무결성",
       "RRSIG 서명 검증, 암호화 아님"
      ],
      [
       "DoH·DoT",
       "DNS 기밀성",
       "HTTPS·TLS 로 질의 암호화"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "대칭키·운영모드",
  "title": "대칭키 암호와 블록 암호 운영모드",
  "ref": "공부자료 4과목 §1~§2",
  "body": [
   {
    "h": "대칭키 핵심",
    "li": [
     "하나의 비밀키로 암·복호화 — 빠르고 대용량 처리에 적합",
     "약점: ★키 분배 문제★ + 사용자 N명 시 ★N(N-1)/2★개 키 폭증",
     "DES 폐기 사유: 실효 키 ★56bit★ → 무차별 대입 가능",
     "3DES: DES ★EDE★ 3회(2키 112bit / 3키 168bit)"
    ]
   },
   {
    "h": "주요 대칭 알고리즘",
    "tb": {
     "head": [
      "알고리즘",
      "블록",
      "키",
      "구조"
     ],
     "rows": [
      [
       "DES",
       "64",
       "56",
       "Feistel"
      ],
      [
       "AES",
       "128",
       "128/192/256",
       "SPN(라운드 10/12/14)"
      ],
      [
       "SEED",
       "128",
       "128",
       "Feistel(KISA)"
      ],
      [
       "ARIA",
       "128",
       "128/192/256",
       "SPN(국가표준)"
      ]
     ]
    }
   },
   {
    "h": "Feistel vs SPN",
    "li": [
     "Feistel: L·R 분할 → F함수·XOR·교환 반복, ★암·복호화 회로 동일★",
     "SPN: ★치환+순열★ 반복, 병렬 유리·확산/혼돈 큼"
    ]
   },
   {
    "h": "운영모드 요약",
    "tb": {
     "head": [
      "모드",
      "IV",
      "병렬 암호화",
      "핵심"
     ],
     "rows": [
      [
       "ECB",
       "없음",
       "가능",
       "동일평문→동일암호(사용 금지)"
      ],
      [
       "CBC",
       "필수",
       "불가",
       "Cᵢ=E(Pᵢ⊕Cᵢ₋₁)"
      ],
      [
       "CFB",
       "필수",
       "불가",
       "스트림처럼 동작"
      ],
      [
       "OFB",
       "필수",
       "불가",
       "키스트림 피드백·오류전파 없음"
      ],
      [
       "CTR",
       "Nonce",
       "가능",
       "카운터 암호화 XOR·랜덤 접근"
      ]
     ]
    }
   },
   {
    "h": "서술 포인트",
    "li": [
     "ECB 금지 이유 = ★패턴 노출★",
     "CBC IV = 같은 평문도 다른 암호문, ★예측 불가·재사용 금지★",
     "GCM = CTR + GHASH = ★AEAD★"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "공개키·키교환",
  "title": "공개키 암호와 Diffie-Hellman 키 교환",
  "ref": "공부자료 4과목 §3",
  "body": [
   {
    "h": "공개키 알고리즘",
    "tb": {
     "head": [
      "알고리즘",
      "수학적 기반",
      "기능"
     ],
     "rows": [
      [
       "RSA",
       "소인수분해",
       "암호화+서명"
      ],
      [
       "DH",
       "이산대수",
       "키 교환 전용"
      ],
      [
       "ECC",
       "ECDLP",
       "암호화+서명(ECDSA·ECDH)"
      ]
     ]
    }
   },
   {
    "h": "키 방향",
    "li": [
     "기밀성: ★수신자 공개키★ 암호화 → 수신자 개인키 복호",
     "부인방지: ★송신자 개인키★ 서명 → 송신자 공개키 검증",
     "ECC 256bit ≈ RSA 3072bit — 짧은 키로 동등 강도"
    ]
   },
   {
    "h": "DH 흐름",
    "li": [
     "공개 파라미터: 소수 p, 생성자 g",
     "A→B: g^a mod p / B→A: g^b mod p",
     "양측 계산 결과 ★g^(ab) mod p★ 공유 — a·b는 전송하지 않음",
     "약점 ★MITM★ → 인증서·서명으로 공개값 인증(인증된 DH)"
    ]
   },
   {
    "h": "하이브리드·PFS",
    "li": [
     "실무: ★데이터=대칭키(세션키), 세션키 전달=공개키★ (TLS·PGP)",
     "DHE·ECDHE: 세션별 임시키 → ★PFS★(장기키 유출돼도 과거 세션 안전)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "해시·MAC·서명",
  "title": "해시·HMAC·전자서명",
  "ref": "공부자료 4과목 §4~§5",
  "body": [
   {
    "h": "해시 3대 안전성",
    "li": [
     "① 역상 저항(일방향성)",
     "② 제2 역상 저항",
     "③ 충돌 저항",
     "해시 단독으로는 키가 없어 ★인증 불가★"
    ]
   },
   {
    "h": "해시 알고리즘",
    "tb": {
     "head": [
      "알고리즘",
      "출력",
      "상태"
     ],
     "rows": [
      [
       "MD5",
       "128bit",
       "폐기(충돌)"
      ],
      [
       "SHA-1",
       "160bit",
       "폐기(SHAttered 2017)"
      ],
      [
       "SHA-256",
       "256bit",
       "권장"
      ],
      [
       "SHA-3",
       "가변",
       "Keccak 기반"
      ]
     ]
    }
   },
   {
    "h": "HMAC",
    "li": [
     "HMAC(K,m) = H((K⊕opad) ∥ H((K⊕ipad) ∥ m))",
     "비밀키를 함께 해시 → ★메시지 인증 + 무결성★",
     "이중 해시 구조로 ★길이 확장 공격★ 방어 (RFC 2104)"
    ]
   },
   {
    "h": "전자서명 흐름",
    "li": [
     "송신: 메시지 해시 → ★송신자 개인키로 서명★ → 메시지+서명 전송",
     "수신: ★송신자 공개키로 서명 복호★ → 다이제스트① / 메시지 재해시 → 다이제스트②",
     "①=② 이면 무결성·인증 확인",
     "5대 특성: 위조불가·서명자인증·★부인방지★·변경불가·재사용불가",
     "함정: 전자서명은 ★기밀성 제공 X★"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "암호공격·솔트",
  "title": "암호 공격과 솔트·키 스트레칭",
  "ref": "공부자료 4과목 §6",
  "body": [
   {
    "h": "공격 유형",
    "tb": {
     "head": [
      "공격",
      "원리",
      "대응"
     ],
     "rows": [
      [
       "무차별 대입",
       "모든 키 전수 대입",
       "키 길이↑·키 스트레칭"
      ],
      [
       "사전 공격",
       "자주 쓰는 단어 목록 대입",
       "복잡도 정책·키 스트레칭"
      ],
      [
       "레인보우 테이블",
       "해시-평문 사전계산표 역추적",
       "★솔트★"
      ],
      [
       "생일 공격",
       "충돌을 약 2^(n/2) 시도로 발견",
       "출력 길이 확대"
      ],
      [
       "중간자(MITM)",
       "양측에 각각 위장",
       "인증서·서명으로 인증"
      ],
      [
       "재전송(Replay)",
       "정상 인증 메시지 재사용",
       "Nonce·Timestamp·순서번호"
      ]
     ]
    }
   },
   {
    "h": "솔트",
    "li": [
     "사용자마다 다른 난수를 비밀번호에 덧붙여 해시",
     "같은 비밀번호도 해시 상이 → ★레인보우 테이블 무력화★",
     "동일 비밀번호 사용자 식별 불가"
    ]
   },
   {
    "h": "키 스트레칭",
    "li": [
     "해시를 수천~수십만 회 반복 → 1회 검증 비용 증가",
     "대표: ★PBKDF2·bcrypt·scrypt·Argon2★",
     "비밀번호 저장 3원칙: 전용 해시 + 솔트 + 키 스트레칭"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "사용자 인증",
  "title": "사용자 인증 — 3요소·OTP·챌린지-리스폰스",
  "ref": "공부자료 4과목 §7",
  "body": [
   {
    "h": "인증 3요소",
    "tb": {
     "head": [
      "요소",
      "예"
     ],
     "rows": [
      [
       "지식(Knowledge)",
       "비밀번호·PIN"
      ],
      [
       "소유(Possession)",
       "OTP 토큰·스마트카드·휴대폰"
      ],
      [
       "생체(Biometric)",
       "지문·홍채·얼굴"
      ]
     ]
    }
   },
   {
    "h": "MFA·생체 지표",
    "li": [
     "MFA = ★서로 다른 요소★ 2개 이상(비밀번호 2개는 아님)",
     "FAR(오수락률) 낮을수록 안전 / FRR(오거부율) 낮을수록 편의",
     "EER = FAR과 FRR 교차점, ★낮을수록 우수★"
    ]
   },
   {
    "h": "OTP",
    "tb": {
     "head": [
      "방식",
      "동기 기준",
      "표준"
     ],
     "rows": [
      [
       "HOTP",
       "카운터(이벤트)",
       "RFC 4226"
      ],
      [
       "TOTP",
       "시간(30초 등)",
       "RFC 6238"
      ]
     ]
    }
   },
   {
    "h": "챌린지-리스폰스",
    "li": [
     "① 서버 난수 챌린지 → ② 비밀키로 연산해 응답 → ③ 서버 동일 연산 검증",
     "비밀번호 미전송, 매번 응답이 달라 ★재전송·도청 방어★"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-6",
  "t": "Kerberos·SSO",
  "title": "Kerberos·SSO·FIDO",
  "ref": "공부자료 4과목 §8~§9",
  "body": [
   {
    "h": "Kerberos 구성",
    "tb": {
     "head": [
      "요소",
      "역할"
     ],
     "rows": [
      [
       "KDC",
       "AS + TGS (신뢰된 제3자)"
      ],
      [
       "AS",
       "사용자 인증 → TGT 발급"
      ],
      [
       "TGS",
       "TGT 검증 → 서비스 티켓 발급"
      ],
      [
       "TGT",
       "티켓을 받을 자격 증명"
      ],
      [
       "서비스 티켓",
       "특정 서비스 접근 티켓"
      ]
     ]
    }
   },
   {
    "h": "Kerberos 흐름",
    "li": [
     "① Client→AS 인증 요청 ② AS→Client TGT+세션키(사용자 비밀키로 암호화)",
     "③ Client→TGS TGT 제시 ④ TGS→Client 서비스 티켓+서비스 세션키",
     "⑤ Client→서버 티켓 제시 ⑥ 서버 검증 후 접근 허용",
     "특징: ★대칭키★·KDC ★SPOF★·★시간 동기(타임스탬프)★로 재전송 방지 (RFC 4120)"
    ]
   },
   {
    "h": "SSO",
    "li": [
     "한 번 인증으로 여러 시스템 접근 — 편의·계정 통합관리",
     "위험: 인증 서버 SPOF·탈취 시 전체 노출 → MFA 병행",
     "구현: Kerberos(사내)·SAML(기업 웹)·OIDC(소셜 로그인)"
    ]
   },
   {
    "h": "FIDO",
    "li": [
     "passwordless — 개인키는 단말 보안영역, 서버엔 ★공개키만★",
     "생체/PIN으로 단말 해제 → 개인키로 챌린지 서명 → 서버 공개키 검증",
     "U2F·UAF / FIDO2 = ★WebAuthn + CTAP★(Passkey)"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-7",
  "t": "PKI·인증서",
  "title": "PKI·X.509 인증서·CRL/OCSP",
  "ref": "공부자료 4과목 §10",
  "body": [
   {
    "h": "PKI 구성요소",
    "tb": {
     "head": [
      "요소",
      "역할"
     ],
     "rows": [
      [
       "CA",
       "인증서 발급·서명"
      ],
      [
       "RA",
       "신원 등록·확인 대행"
      ],
      [
       "VA",
       "인증서 유효성 검증"
      ],
      [
       "CRL",
       "폐기 인증서 목록"
      ],
      [
       "OCSP",
       "실시간 인증서 상태 질의"
      ]
     ]
    }
   },
   {
    "h": "X.509 v3 주요 필드",
    "li": [
     "Version · Serial Number · Signature Algorithm",
     "Issuer(발급 CA) · Validity(Not Before~Not After)",
     "Subject(소유자) · Subject Public Key · Extensions(Key Usage·SAN)",
     "★CA의 전자서명★ (RFC 5280)"
    ]
   },
   {
    "h": "신뢰 원리",
    "li": [
     "CA가 ★자신의 개인키로★ 사용자 공개키+신원에 서명",
     "검증자는 신뢰하는 CA 공개키로 서명 검증 → 가짜 공개키(MITM) 차단",
     "루트 CA 인증서는 ★자기 서명(self-signed)★"
    ]
   },
   {
    "h": "CRL vs OCSP",
    "tb": {
     "head": [
      "구분",
      "CRL",
      "OCSP"
     ],
     "rows": [
      [
       "방식",
       "폐기목록 일괄 다운로드",
       "개별 인증서 실시간 질의"
      ],
      [
       "실시간성",
       "낮음(주기 갱신)",
       "높음"
      ],
      [
       "단점",
       "목록 용량 증가",
       "CA 부하 → OCSP Stapling"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-8",
  "t": "접근통제 정책·모델",
  "title": "접근통제 정책(DAC·MAC·RBAC)과 모델(BLP·Biba)",
  "ref": "공부자료 4과목 §11~§12",
  "body": [
   {
    "h": "정책 비교",
    "tb": {
     "head": [
      "정책",
      "결정 주체",
      "기준",
      "특징"
     ],
     "rows": [
      [
       "DAC",
       "자원 소유자",
       "소유자 재량(ACL)",
       "유연·트로이목마 취약"
      ],
      [
       "MAC",
       "시스템",
       "보안등급 라벨",
       "강제·유연성↓"
      ],
      [
       "RBAC",
       "관리자",
       "역할",
       "최소권한·SoD"
      ],
      [
       "ABAC",
       "정책",
       "속성 조합",
       "동적(XACML)"
      ]
     ]
    }
   },
   {
    "h": "보안 모델",
    "tb": {
     "head": [
      "모델",
      "목표",
      "읽기",
      "쓰기"
     ],
     "rows": [
      [
       "BLP",
       "기밀성",
       "No Read Up",
       "No Write Down"
      ],
      [
       "Biba",
       "무결성",
       "No Read Down",
       "No Write Up"
      ],
      [
       "Clark-Wilson",
       "무결성",
       "정형 트랜잭션",
       "직무분리"
      ],
      [
       "Chinese Wall",
       "이해충돌",
       "과거 접근이력",
       "동적 제한"
      ]
     ]
    }
   },
   {
    "h": "암기 문장",
    "li": [
     "상위 비밀 누설 막기 = BLP / 하위 오염 막기 = Biba",
     "BLP No Write Down 이유: 상위 주체가 하위로 쓰면 ★기밀이 낮은 등급으로 유출★",
     "DAC 트로이목마 취약: 악성 프로그램이 ★사용자 재량 권한을 그대로 이용★"
    ]
   },
   {
    "h": "접근통제 행렬",
    "li": [
     "행=주체, 열=객체, 칸=권한(r/w/x)",
     "열(객체) 기준 저장 = ★ACL★",
     "행(주체) 기준 저장 = ★Capability List★"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "거버넌스·조직",
  "title": "정보보호 거버넌스와 문서체계·책임자",
  "ref": "공부자료 5과목 §1",
  "body": [
   {
    "h": "거버넌스 개념",
    "li": [
     "경영진이 정보보호를 경영 활동의 일부로 통합·감독하는 체계",
     "정책→표준→지침→절차 4계층 문서체계로 구현"
    ]
   },
   {
    "h": "4계층 문서체계",
    "tb": {
     "head": [
      "계층",
      "내용",
      "성격"
     ],
     "rows": [
      [
       "정책 Policy",
       "최상위·방향·What/Why",
       "경영진 승인"
      ],
      [
       "표준 Standard",
       "의무 사항·How",
       "강제"
      ],
      [
       "지침 Guideline",
       "권고·참고",
       "권고(선택)"
      ],
      [
       "절차 Procedure",
       "상세 실행단계·Who/When",
       "실행 매뉴얼"
      ]
     ]
    }
   },
   {
    "h": "CISO vs CPO",
    "tb": {
     "head": [
      "구분",
      "CISO",
      "CPO"
     ],
     "rows": [
      [
       "근거",
       "정보통신망법 제45조의3",
       "개인정보보호법 제31조"
      ],
      [
       "대상",
       "정보보호 전반",
       "개인정보 처리 전반"
      ],
      [
       "신고",
       "과기정통부 장관 신고",
       "지정·공개"
      ]
     ]
    }
   },
   {
    "h": "서술 포인트",
    "li": [
     "CISO와 CPO는 별개 직위 — 동일인 겸임 가능하나 근거법·역할이 다름",
     "지침은 강제력 없음, 표준은 강제"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "ISMS-P 인증",
  "title": "ISMS-P 인증기준·절차·심사",
  "ref": "공부자료 5과목 §2",
  "body": [
   {
    "h": "개념",
    "li": [
     "ISMS-P = 정보보호 및 개인정보보호 관리체계 인증",
     "정책기관: 과기정통부·개인정보보호위원회 공동, 인증기관: KISA"
    ]
   },
   {
    "h": "인증기준 3개 영역",
    "tb": {
     "head": [
      "영역",
      "통제 수",
      "핵심"
     ],
     "rows": [
      [
       "관리체계 수립 및 운영",
       "16",
       "기반마련·위험관리·운영·점검개선(PDCA)"
      ],
      [
       "보호대책 요구사항",
       "64",
       "정책·인적·외부자·물리·접근통제·암호·운영·재해"
      ],
      [
       "개인정보 처리단계별 요구사항",
       "22",
       "수집·이용제공·보유파기·정보주체 권리"
      ]
     ]
    }
   },
   {
    "h": "인증 절차·심사 종류",
    "li": [
     "신청 → 계약 → 심사 → 결함조치 → 심의(인증위원회) → 인증서 발급",
     "최초심사: 인증 범위 전체",
     "사후심사: 연 1회 이상 유지 확인",
     "갱신심사: 유효기간(3년) 만료 전"
    ]
   },
   {
    "h": "암기",
    "li": [
     "ISMS = 1+2영역(80개), ISMS-P = 1+2+3영역(102개)",
     "의무대상 근거: 정보통신망법 제47조 (ISP·IDC 등)"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "위험관리",
  "title": "위험관리 절차·분석·처리",
  "ref": "공부자료 5과목 §3",
  "body": [
   {
    "h": "위험관리 절차",
    "li": [
     "① 자산식별·평가(CIA 기준 가치산정)",
     "② 위협·취약점 분석",
     "③ 위험분석(산정)",
     "④ 위험평가(DoA와 비교)",
     "⑤ 위험처리(감소·전가·수용·회피)",
     "⑥ 잔여위험 관리·모니터링·재평가"
    ]
   },
   {
    "h": "정량 vs 정성",
    "tb": {
     "head": [
      "구분",
      "정량적",
      "정성적"
     ],
     "rows": [
      [
       "방법",
       "ALE·과거자료·확률분포·수학모델",
       "델파이·시나리오·순위결정"
      ],
      [
       "결과",
       "금액(수치)",
       "등급(상·중·하)"
      ],
      [
       "장점",
       "객관적·비용효과 산출",
       "빠름·간단"
      ],
      [
       "단점",
       "시간·비용 多",
       "주관적"
      ]
     ]
    }
   },
   {
    "h": "정량 공식",
    "li": [
     "SLE = AV × EF",
     "ALE = SLE × ARO",
     "예) 1억 × 50% = 5,000만원, ARO 0.2 → ALE 1,000만원/년",
     "대책 타당성: (대책 전 ALE − 대책 후 ALE) > 대책 비용"
    ]
   },
   {
    "h": "위험처리 4유형",
    "tb": {
     "head": [
      "유형",
      "설명",
      "예시"
     ],
     "rows": [
      [
       "감소",
       "통제로 수용가능 수준까지 저감",
       "방화벽·암호화·접근통제"
      ],
      [
       "전가",
       "제3자에게 이전",
       "사이버보험·아웃소싱"
      ],
      [
       "수용",
       "DoA 이하 위험 인정",
       "잔여위험 수용"
      ],
      [
       "회피",
       "위험 발생 활동 중단",
       "서비스 폐쇄·기능 제거"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "BCP·재해복구",
  "title": "BCP·DRP·BIA와 복구 지표",
  "ref": "공부자료 5과목 §4",
  "body": [
   {
    "h": "BCP vs DRP",
    "li": [
     "BCP(업무연속성계획) ⊃ DRP(재해복구계획)",
     "BCP=조직 전체 업무 지속, DRP=IT 시스템·인프라 복구"
    ]
   },
   {
    "h": "BIA 업무영향분석",
    "li": [
     "BCP 수립의 출발점",
     "핵심업무 식별 → 중단영향 분석 → RTO·RPO 설정 → 우선순위 결정"
    ]
   },
   {
    "h": "복구 지표",
    "tb": {
     "head": [
      "지표",
      "의미",
      "포인트"
     ],
     "rows": [
      [
       "RTO",
       "복구 완료까지 목표 시간",
       "얼마나 빨리"
      ],
      [
       "RPO",
       "복구 가능한 데이터 시점",
       "얼마나 적은 손실"
      ],
      [
       "MTD",
       "최대허용중단시간",
       "RTO + WRT"
      ],
      [
       "WRT",
       "복구 후 정상화 시간",
       "Work Recovery Time"
      ]
     ]
    }
   },
   {
    "h": "DR 사이트",
    "tb": {
     "head": [
      "사이트",
      "동기화",
      "RTO·비용"
     ],
     "rows": [
      [
       "Mirror",
       "실시간",
       "즉시(0)·최고"
      ],
      [
       "Hot",
       "실시간/근실시간",
       "수시간·高"
      ],
      [
       "Warm",
       "주기적 백업",
       "수일·中"
      ],
      [
       "Cold",
       "없음(공간만)",
       "수주·低"
      ],
      [
       "Reciprocal",
       "상호협정",
       "저비용·불확실"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "개인정보보호법",
  "title": "개인정보보호법 정의·특수정보·생명주기",
  "ref": "공부자료 5과목 §5",
  "body": [
   {
    "h": "개인정보 정의",
    "li": [
     "살아있는 개인에 관한 정보",
     "그 자체로 식별 또는 다른 정보와 쉽게 결합해 식별 가능(가명정보 포함)",
     "사망자·법인 정보는 개인정보 아님",
     "소관: 개인정보보호위원회(PIPC)"
    ]
   },
   {
    "h": "특수 개인정보",
    "tb": {
     "head": [
      "구분",
      "종류",
      "요건"
     ],
     "rows": [
      [
       "민감정보(제23조)",
       "사상·신념·노조·정치·건강·성생활·유전·범죄경력·인종·민족",
       "별도 동의 또는 법령"
      ],
      [
       "고유식별정보(제24조)",
       "주민·여권·운전면허·외국인등록번호",
       "별도 동의 또는 법령"
      ],
      [
       "주민등록번호(제24조의2)",
       "강화",
       "법령 근거 필수"
      ]
     ]
    }
   },
   {
    "h": "생명주기",
    "li": [
     "수집·이용: 적법근거, 수집 최소화",
     "제3자 제공: 제공받는 자·목적·항목·보유기간 고지 후 별도 동의",
     "목적 외 이용·제공: 원칙 금지",
     "파기: 지체없이(5일 이내), 복구 불가 방법"
    ]
   },
   {
    "h": "정보주체 권리",
    "li": [
     "열람·정정·삭제·처리정지 요구권, 동의 철회권",
     "개인정보 전송요구권(마이데이터)",
     "자동화된 결정 거부·설명 요구권(2024 신설)",
     "손해배상청구권(고의·중과실 시 징벌적 손해배상)"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-6",
  "t": "안전조치·유출대응",
  "title": "안전성 확보조치·PIA·유출 대응",
  "ref": "공부자료 5과목 §5",
  "body": [
   {
    "h": "안전성 확보조치(제29조·고시)",
    "li": [
     "내부관리계획 수립·시행",
     "접근권한 관리 / 접근통제",
     "개인정보 암호화 / 접속기록 보관·점검",
     "악성프로그램 방지 / 물리적 안전조치",
     "재해·재난 대비 / 출력·복사 시 안전조치 / 파기"
    ]
   },
   {
    "h": "접속기록·암호화",
    "li": [
     "접속기록 원칙 1년 이상, 5만명 이상·고유식별·민감정보 2년 이상",
     "암호화 대상: 주민번호·고유식별정보·비밀번호(일방향)·바이오정보·카드번호·계좌번호",
     "저장 시 암호화, 전송 시 SSL/TLS"
    ]
   },
   {
    "h": "PIA 개인정보 영향평가",
    "li": [
     "개인정보파일 구축·운용 시 침해 위험 사전 분석·개선",
     "공공기관 일정 규모 이상 의무, 민간 권장",
     "사전준비 → 영향평가 수행 → 이행점검"
    ]
   },
   {
    "h": "유출 통지·신고",
    "li": [
     "정보주체 통지: 안 때부터 72시간 이내",
     "기관 신고: 1,000명 이상 시 72시간 이내 개인정보위/KISA",
     "항목: 유출 항목·시점·경위·피해 최소화 방법·대응조치·피해구제 절차·담당부서 연락처",
     "항목 특정 곤란 시 우선 신고 후 추가 신고"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-7",
  "t": "망법·신용·망분리",
  "title": "정보통신망법·신용정보법·망분리",
  "ref": "공부자료 5과목 §6",
  "body": [
   {
    "h": "정보통신망법",
    "li": [
     "소관 과기정통부",
     "2020 데이터3법 개정으로 개인정보 조항은 개보법으로 일원화",
     "광고성 정보: 사전 동의(Opt-in), 수신거부 후 전송 금지",
     "야간(21:00~08:00) 별도 동의, 2년마다 수신동의 확인"
    ]
   },
   {
    "h": "신용정보법",
    "li": [
     "소관 금융위원회",
     "본인신용정보관리업(마이데이터) 근거법",
     "전송요구권으로 개인신용정보 이동"
    ]
   },
   {
    "h": "망분리",
    "tb": {
     "head": [
      "방식",
      "설명",
      "비고"
     ],
     "rows": [
      [
       "물리적 망분리",
       "업무용·인터넷용 PC 물리 분리",
       "보안성 높음"
      ],
      [
       "논리적 망분리",
       "가상화(VDI/SBC)로 논리 분리",
       "PC 1대"
      ]
     ]
    }
   },
   {
    "h": "정보통신기반 보호법",
    "li": [
     "주요정보통신기반시설 지정 → 취약점 분석·평가 → 보호대책 수립·시행"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-8",
  "t": "CSAP·CC 평가",
  "title": "CSAP 클라우드 인증과 CC·EAL",
  "ref": "공부자료 5과목 §7·§8",
  "body": [
   {
    "h": "CSAP",
    "li": [
     "공공기관에 클라우드 제공 시 받는 국내 클라우드 보안인증",
     "근거: 클라우드컴퓨팅법, 인증기관 KISA",
     "국외 비교: 미국 FedRAMP·EU GAIA-X·호주 IRAP·일본 ISMAP"
    ]
   },
   {
    "h": "CSAP 등급",
    "tb": {
     "head": [
      "등급",
      "대상",
      "특징"
     ],
     "rows": [
      [
       "상",
       "민감정보·국방·외교",
       "최고 보안·물리분리"
      ],
      [
       "중",
       "비공개 업무정보",
       "표준 기준"
      ],
      [
       "하",
       "공개 가능 정보",
       "완화 기준"
      ]
     ]
    }
   },
   {
    "h": "CC 구성 개념",
    "li": [
     "CC = ISO/IEC 15408, 국가 간 상호인정(CCRA)",
     "PP: 보호프로파일(요구사항 명세)",
     "ST: 보안목표(제품 명세)",
     "TOE: 평가대상, EAL: 평가보증등급"
    ]
   },
   {
    "h": "EAL",
    "tb": {
     "head": [
      "등급",
      "의미",
      "비고"
     ],
     "rows": [
      [
       "EAL1",
       "기능 시험",
       ""
      ],
      [
       "EAL2",
       "구조 시험",
       ""
      ],
      [
       "EAL3",
       "체계적 시험·점검",
       ""
      ],
      [
       "EAL4",
       "체계적 설계·시험",
       "상용 일반 최고"
      ],
      [
       "EAL5",
       "준정형화 설계·시험",
       ""
      ],
      [
       "EAL6",
       "준정형화 검증된 설계",
       ""
      ],
      [
       "EAL7",
       "정형화 검증된 설계",
       "최고 보증"
      ]
     ]
    }
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "용어·약어·단일 사실 — 단답형 기본 득점",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "개념 구분·비교·절차 — 서술형 핵심",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "명령어·룰·로그·코드 판단 — 실무형 변별력",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 1,
  "q": "-rwxr-x--- 권한을 8진수로 표기한 것은?",
  "c": [
   "740",
   "750",
   "754",
   "770"
  ],
  "a": 1,
  "e": "rwx=7, r-x=5, ---=0 → 750. 740은 그룹 r--, 770은 그룹 rwx."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "umask가 027일 때 새로 생성되는 일반 파일의 기본 권한은?",
  "c": [
   "640",
   "750",
   "755",
   "644"
  ],
  "a": 0,
  "e": "파일 기본 666에서 027을 마스킹 → 640. 750은 디렉터리 결과, 644는 umask 022의 파일 결과."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 3,
  "q": "다음 ls -l 출력 중 즉시 조치가 필요한 가장 위험한 항목은?\n① drwxrwxrwt root root /tmp\n② -rwsr-xr-x root root /usr/bin/passwd\n③ -rwsrwxrwx root root /tmp/sh.bak\n④ -rw-r--r-- root root /etc/passwd",
  "c": [
   "①",
   "②",
   "③",
   "④"
  ],
  "a": 2,
  "e": "/tmp/sh.bak은 root 소유 SetUID 셸(4777)로 누구나 실행해 root 권한 획득 가능. ① /tmp 1777과 ② passwd 4755, ④ passwd 644는 정상."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "SetUID와 SetGID가 모두 설정된 파일을 찾는 find 옵션은?",
  "c": [
   "-perm -2000",
   "-perm -4000",
   "-perm -1000",
   "-perm -6000"
  ],
  "a": 3,
  "e": "4000+2000=6000, 하이픈은 '포함' 검색. -2000은 SetGID, -4000은 SetUID, -1000은 Sticky."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 1,
  "q": "/tmp처럼 누구나 쓰기 가능하지만 본인 파일만 삭제하도록 하는 특수 권한은?",
  "c": [
   "Sticky Bit",
   "SetUID",
   "SetGID",
   "umask"
  ],
  "a": 0,
  "e": "Sticky Bit(1000, t 표기). SetUID·SetGID는 실행 권한 위임, umask는 기본 권한 마스크."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "디렉터리에 x 권한 없이 r 권한만 있을 때 가능한 동작은?",
  "c": [
   "cd로 진입",
   "내부 파일 내용 읽기",
   "파일 이름 목록 조회",
   "파일 생성"
  ],
  "a": 2,
  "e": "디렉터리 r=목록 조회. 진입·내부 접근은 x, 생성은 w+x가 필요."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "/etc/passwd의 필드 순서로 옳은 것은?",
  "c": [
   "계정명:x:UID:GID:GECOS:홈:셸",
   "계정명:UID:x:GID:GECOS:셸:홈",
   "계정명:x:GID:UID:홈:GECOS:셸",
   "UID:계정명:x:GID:GECOS:홈:셸"
  ],
  "a": 0,
  "e": "root:x:0:0:root:/root:/bin/bash — 계정·x·UID·GID·설명·홈·셸 순."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 3,
  "q": "/etc/passwd에서 다음 줄의 보안상 문제는?\nbackupsvc:x:0:0::/home/backupsvc:/bin/bash",
  "c": [
   "셸이 bash로 설정됨",
   "홈 디렉터리가 /home에 있음",
   "GECOS 필드가 비어 있음",
   "UID 0으로 root와 동일한 권한 보유"
  ],
  "a": 3,
  "e": "root 외 UID 0 계정은 숨겨진 root 권한 계정(백도어 의심). awk -F: '$3==0' 로 점검. 나머지는 일반적 설정."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "/etc/shadow 비밀번호 필드가 $6$로 시작할 때 해시 알고리즘은?",
  "c": [
   "MD5",
   "SHA-256",
   "SHA-512",
   "bcrypt"
  ],
  "a": 2,
  "e": "$1$=MD5, $5$=SHA-256, $6$=SHA-512. bcrypt는 $2a$ 등 별도 접두어."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "패스워드 복잡도(대·소문자·숫자·특수문자)를 강제하는 PAM 모듈은?",
  "c": [
   "pam_wheel.so",
   "pam_pwquality.so",
   "pam_faillock.so",
   "pam_securetty.so"
  ],
  "a": 1,
  "e": "pam_pwquality(구 pam_cracklib). pam_wheel=su 제한, pam_faillock=실패 잠금, pam_securetty=root 터미널 제한."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "PAM 제어 플래그 중 실패 시 즉시 중단하고 실패를 반환하는 것은?",
  "c": [
   "requisite",
   "required",
   "sufficient",
   "optional"
  ],
  "a": 0,
  "e": "requisite=즉시 중단. required는 나머지 모듈 수행 후 최종 실패, sufficient는 성공 시 통과, optional은 결과 무시."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 3,
  "q": "다음 /etc/sudoers 설정의 의미로 옳은 것은?\nweb  ALL=(root) NOPASSWD: /bin/systemctl restart httpd",
  "c": [
   "web 사용자가 모든 명령을 root로 실행",
   "web 사용자가 httpd 재시작만 패스워드 없이 root로 실행",
   "web 그룹 전체가 systemctl 사용",
   "root가 web 사용자로 httpd 재시작"
  ],
  "a": 1,
  "e": "user host=(runas) NOPASSWD: 명령 — 지정 명령만 root 권한, 패스워드 생략. 그룹은 %web 표기."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "/etc/sudoers를 안전하게 편집하는 명령은?",
  "c": [
   "vipw",
   "sudoedit",
   "chage",
   "visudo"
  ],
  "a": 3,
  "e": "visudo는 문법 검사·잠금 수행. vipw는 passwd 편집, chage는 만료 정책, sudoedit는 일반 파일을 sudo 권한으로 편집."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "이미 생성된 계정의 패스워드 최대 사용일을 90일로 바꾸는 명령은?",
  "c": [
   "chage -M 90 user",
   "passwd -l user",
   "usermod -L user",
   "chage -W 90 user"
  ],
  "a": 0,
  "e": "chage -M=최대 사용일. -W는 경고일, passwd -l·usermod -L은 계정 잠금."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "리눅스에서 로그인 실패 이력을 기록하는 로그 파일은?",
  "c": [
   "/var/log/wtmp",
   "/var/log/btmp",
   "/var/log/lastlog",
   "/var/run/utmp"
  ],
  "a": 1,
  "e": "btmp=실패(lastb). wtmp=성공·부팅(last), lastlog=최종 로그인, utmp=현재 접속자."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "현재 시스템에 접속 중인 사용자와 실행 중인 작업을 함께 보여주는 명령은?",
  "c": [
   "last",
   "lastlog",
   "w",
   "lastb"
  ],
  "a": 2,
  "e": "w=utmp 기반 현재 접속자+작업·부하. last·lastb는 과거 성공·실패, lastlog는 최종 로그인 시각."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 3,
  "q": "다음 /var/log/secure 로그에서 판단할 수 있는 공격은?\nFailed password for root from 203.0.113.77 port 51122 ssh2\nFailed password for invalid user admin from 203.0.113.77 port 51141 ssh2\nFailed password for invalid user oracle from 203.0.113.77 port 51150 ssh2",
  "c": [
   "SYN Flooding",
   "세션 하이재킹",
   "SQL Injection",
   "무차별 대입(사전) 공격"
  ],
  "a": 3,
  "e": "동일 IP에서 초 단위 Failed password 반복 + 공통 계정명 순차 시도(invalid user) → Brute Force/Dictionary."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 2,
  "q": "Debian/Ubuntu 계열에서 SSH 인증 성공·실패가 기록되는 파일은?",
  "c": [
   "/var/log/auth.log",
   "/var/log/secure",
   "/var/log/messages",
   "/var/log/cron"
  ],
  "a": 0,
  "e": "Debian 계열=auth.log, RHEL 계열=secure. messages는 일반 시스템 메시지."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 3,
  "q": "rsyslog 설정 '*.* @@logserver:514'의 의미로 옳은 것은?",
  "c": [
   "모든 로그를 UDP로 원격 전송",
   "인증 로그만 로컬 저장",
   "모든 로그를 TCP로 원격 전송",
   "514 포트로 로그 수신"
  ],
  "a": 2,
  "e": "@@=TCP, @=UDP. *.*=모든 Facility·Severity. 원격 보관으로 로그 위변조 대비."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 2,
  "q": "syslog Severity 중 가장 심각한 수준은?",
  "c": [
   "crit",
   "alert",
   "err",
   "emerg"
  ],
  "a": 3,
  "e": "0 emerg가 최고 심각도, 이어서 alert(1)·crit(2)·err(3) 순. 숫자가 낮을수록 심각."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 3,
  "q": "SSH 무차별 대입 공격의 근본 대응으로 적절하지 않은 것은?",
  "c": [
   "PermitRootLogin no 설정",
   "PasswordAuthentication no(공개키 인증)",
   "wtmp 파일 삭제",
   "fail2ban 도입"
  ],
  "a": 2,
  "e": "wtmp 삭제는 증적 훼손일 뿐 대응이 아님. 나머지는 root 직접 로그인 차단·키 인증·자동 IP 차단."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 1,
  "q": "윈도우 Security 로그에서 로그온 실패를 나타내는 이벤트 ID는?",
  "c": [
   "4624",
   "4625",
   "4634",
   "4672"
  ],
  "a": 1,
  "e": "4625=실패. 4624=성공, 4634=로그오프, 4672=특수 권한 부여."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "보안 감사 로그가 삭제되었음을 나타내는 이벤트 ID는?",
  "c": [
   "7045",
   "4720",
   "1102",
   "4688"
  ],
  "a": 2,
  "e": "1102=감사 로그 삭제(흔적 제거 신호). 7045=서비스 설치, 4720=계정 생성, 4688=프로세스 생성."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 3,
  "q": "이벤트 4624의 Logon Type이 10으로 기록되었다. 접속 방식은?",
  "c": [
   "콘솔 직접 로그온",
   "네트워크 파일 공유",
   "서비스 계정 로그온",
   "원격 데스크톱(RDP)"
  ],
  "a": 3,
  "e": "10=RemoteInteractive(RDP). 2=대화형(콘솔), 3=네트워크, 5=서비스."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "SID가 S-1-5-21-…-500인 계정은?",
  "c": [
   "내장 Administrator",
   "Guest",
   "첫 번째 일반 사용자",
   "SYSTEM"
  ],
  "a": 0,
  "e": "RID 500=Administrator, 501=Guest, 1000부터 일반 사용자."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "악성코드가 지속성 확보를 위해 주로 등록하는 레지스트리 경로는?",
  "c": [
   "HKLM\\SYSTEM\\Select",
   "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
   "HKCR\\.txt",
   "HKCC\\System"
  ],
  "a": 1,
  "e": "Run/RunOnce 키는 로그온·부팅 시 자동실행. 나머지는 부팅 구성·파일 연결·하드웨어 프로필."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 3,
  "q": "짧은 시간 4625가 수백 건 발생한 뒤 같은 IP에서 4624와 4672가 기록됐다. 가장 타당한 해석은?",
  "c": [
   "정상 관리자 로그온",
   "무차별 대입 성공 후 관리자 권한 로그온",
   "서비스 설치를 통한 백도어",
   "감사 로그 삭제 시도"
  ],
  "a": 1,
  "e": "대량 실패(4625) 후 성공(4624)+특수권한(4672) → 계정 탈취 후 관리자 권한 사용. 서비스 설치는 7045, 로그 삭제는 1102."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "Mimikatz가 자격증명(해시·티켓)을 탈취하기 위해 메모리를 읽는 프로세스는?",
  "c": [
   "explorer.exe",
   "svchost.exe",
   "winlogon.exe",
   "lsass.exe"
  ],
  "a": 3,
  "e": "LSA 서버 프로세스 lsass.exe가 인증 자격증명을 보관. 대응은 Credential Guard·LSA 보호."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 1,
  "q": "숙주 없이 독립 실행되며 네트워크로 스스로 전파하는 악성코드는?",
  "c": [
   "Virus",
   "Trojan",
   "Worm",
   "Logic Bomb"
  ],
  "a": 2,
  "e": "Worm=독립·자가전파. Virus=숙주 필요, Trojan=위장·복제 없음, Logic Bomb=조건 트리거."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 2,
  "q": "커널 후킹으로 ps·netstat 출력까지 위조해 자신을 숨기는 악성코드는?",
  "c": [
   "Rootkit",
   "Ransomware",
   "Adware",
   "Trojan"
  ],
  "a": 0,
  "e": "Rootkit은 시스템 명령 결과를 조작해 은닉. 탐지는 외부 부팅·무결성 비교·rkhunter."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 2,
  "q": "정상 프로그램으로 위장하며 자기복제는 하지 않는 악성코드는?",
  "c": [
   "Worm",
   "Virus",
   "Rootkit",
   "Trojan"
  ],
  "a": 3,
  "e": "Trojan(트로이목마)=정상 위장·복제 X. Worm·Virus는 자기복제."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 3,
  "q": "리눅스 백도어 의심 시 점검 명령으로 적절하지 않은 것은?",
  "c": [
   "netstat -ntlp",
   "crontab -l",
   "chmod 777 /etc/shadow",
   "chkrootkit"
  ],
  "a": 2,
  "e": "shadow를 777로 바꾸면 오히려 해시 노출. 나머지는 LISTEN 포트·예약작업·루트킷 점검."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "Stack 버퍼 오버플로우 공격에서 제어 흐름을 탈취하기 위해 덮어쓰는 대상은?",
  "c": [
   "GOT 테이블",
   "힙 메타데이터",
   "Return Address",
   "환경변수"
  ],
  "a": 2,
  "e": "지역 버퍼를 넘쳐 Return Address를 쉘코드 주소로 변조 → EIP/RIP 탈취. 힙 메타데이터는 Heap BOF."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "경계 검사가 없어 BOF를 유발하는 함수가 아닌 것은?",
  "c": [
   "gets",
   "strcpy",
   "sprintf",
   "fgets"
  ],
  "a": 3,
  "e": "fgets는 길이 인자가 있는 안전 대체 함수. gets·strcpy·sprintf는 위험 함수."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "리턴 주소 앞에 임의 값을 두고 함수 복귀 전 변조 여부를 검사하는 기법은?",
  "c": [
   "ASLR",
   "Stack Canary(SSP)",
   "DEP",
   "RELRO"
  ],
  "a": 1,
  "e": "Stack Canary(SSP). ASLR=주소 임의화, DEP=데이터 실행 금지, RELRO=GOT 보호."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 3,
  "q": "다음 코드의 취약점은?\nvoid log_msg(char *input){ printf(input); }",
  "c": [
   "Integer Overflow",
   "Use After Free",
   "Race Condition",
   "Format String"
  ],
  "a": 3,
  "e": "사용자 입력을 포맷 문자열로 직접 사용 → %x로 메모리 누출, %n으로 쓰기. printf(\"%s\", input)로 수정."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 3,
  "q": "SetUID 프로그램이 /tmp 임시파일을 검사한 후 사용하기 전 공격자가 심볼릭 링크로 바꾸는 공격은?",
  "c": [
   "TOCTOU 레이스 컨디션",
   "포맷 스트링",
   "힙 스프레이",
   "DLL 하이재킹"
  ],
  "a": 0,
  "e": "Time of Check~Time of Use 틈 악용. 대응: O_EXCL, mkstemp, O_NOFOLLOW."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "권한 상승 점검을 위해 현재 사용자에게 허용된 sudo 명령을 확인하는 명령은?",
  "c": [
   "sudo -i",
   "sudo -l",
   "sudo -u root",
   "su -"
  ],
  "a": 1,
  "e": "sudo -l=허용 명령 목록(NOPASSWD·와일드카드 오설정 확인). -i는 root 셸, -u는 사용자 지정 실행."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 1,
  "q": "파일 해시 기준선 DB와 현재 상태를 비교해 변조를 탐지하는 도구는?",
  "c": [
   "AIDE",
   "Nmap",
   "Wireshark",
   "John the Ripper"
  ],
  "a": 0,
  "e": "AIDE·Tripwire는 무결성 점검(HIDS). Nmap=포트 스캔, Wireshark=패킷 분석, John=패스워드 크래킹."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 3,
  "q": "8080 포트를 사용하는 프로세스를 확인하는 명령으로 옳은 것은?",
  "c": [
   "ps -ef 8080",
   "lsof -i :8080",
   "kill -9 8080",
   "who 8080"
  ],
  "a": 1,
  "e": "lsof -i :8080 또는 netstat -ntlp | grep 8080. kill -9 8080은 PID 8080을 강제 종료하는 명령."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "TCP 3-way Handshake의 두 번째 패킷에 설정되는 플래그는?",
  "c": [
   "SYN+ACK",
   "SYN",
   "ACK",
   "FIN+ACK"
  ],
  "a": 0,
  "e": "SYN → SYN+ACK → ACK."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "클라이언트가 seq=1000으로 SYN을 보냈고 서버가 seq=5000으로 응답했다. 서버의 SYN+ACK와 클라이언트의 마지막 ACK에 담기는 ack 번호를 순서대로 고르면?",
  "c": [
   "1000, 5000",
   "1001, 5001",
   "1001, 5000",
   "1000, 5001"
  ],
  "a": 1,
  "e": "ack는 상대 seq+1 → 서버 ack=1001, 클라이언트 ack=5001."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "TIME_WAIT 상태에 대한 설명으로 옳은 것은?",
  "c": [
   "수동 종료 측이 FIN 수신 직후 들어가는 상태",
   "SYN을 받고 ACK를 기다리는 상태",
   "능동 종료 측이 마지막 ACK를 보낸 뒤 2MSL 동안 대기하는 상태",
   "RST 수신 후 즉시 들어가는 상태"
  ],
  "a": 2,
  "e": "능동 종료 측 TIME_WAIT(2MSL) — 지연 패킷 소멸·마지막 ACK 재전송 보장. 수동 측은 CLOSE_WAIT."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "UDP로 Closed 포트에 패킷을 보냈을 때 일반적으로 돌아오는 응답은?",
  "c": [
   "TCP RST",
   "ICMP Type 0",
   "ICMP Type 11",
   "ICMP Type 3 Code 3"
  ],
  "a": 3,
  "e": "Port Unreachable(Type 3 Code 3)."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "DNS 서버 보안 점검에서 외부 임의 호스트의 요청을 막아야 하는 것으로 가장 적절한 것은?",
  "c": [
   "TCP 53 Zone Transfer(AXFR)",
   "UDP 53 일반 질의",
   "TCP 443 DoH",
   "UDP 123 NTP"
  ],
  "a": 0,
  "e": "AXFR이 열려 있으면 내부 호스트 목록이 노출 → allow-transfer로 보조 DNS만 허용."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "방화벽 로그에서 한 외부 IP가 수백 개 포트로 SYN을 보내고, 열린 포트에서 SYN+ACK가 나가면 곧바로 그 IP가 RST를 보내는 패턴이 보였다. 해당 활동은?",
  "c": [
   "TCP Connect 스캔",
   "SYN(Half-Open) 스캔",
   "ACK 스캔",
   "UDP 스캔"
  ],
  "a": 1,
  "e": "SYN+ACK 수신 후 RST로 끊어 3-way를 완성하지 않는 스텔스 스캔."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "FIN 스캔으로 보이는 트래픽에서 특정 포트가 아무 응답도 하지 않았다. 표준(RFC 793) 동작 기준 이 포트의 해석은?",
  "c": [
   "Closed",
   "unfiltered",
   "Open 또는 filtered",
   "판정 불가 — 항상 재전송"
  ],
  "a": 2,
  "e": "FIN·NULL·XMAS는 무응답=Open|filtered, RST=Closed."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 3,
  "q": "다음 tcpdump 출력이 가리키는 스캔 유형은?\n10:01:02 IP 198.51.100.9.41200 > 10.0.0.5.22: Flags [FPU], seq 0, win 1024\n10:01:02 IP 10.0.0.5.23 > 198.51.100.9.41200: Flags [R.], seq 0, ack 1\n① NULL 스캔 ② SYN 스캔 ③ XMAS 스캔 ④ ACK 스캔",
  "c": [
   "①",
   "②",
   "③",
   "④"
  ],
  "a": 2,
  "e": "Flags [FPU] = FIN+PSH+URG → XMAS 스캔. 응답 없는 포트는 Open|filtered, RST 회신(23번)은 Closed."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "ACK 스캔을 탐지했을 때 공격자가 얻으려는 정보로 가장 적절한 것은?",
  "c": [
   "서비스 버전",
   "포트 Open 여부",
   "운영체제 종류",
   "방화벽의 필터링(상태 추적) 여부"
  ],
  "a": 3,
  "e": "RST 회신=unfiltered, 무응답=filtered → 방화벽 룰 매핑."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 3,
  "q": "Linux 서버에서 NULL 스캔과 XMAS 스캔 패킷을 차단하는 iptables 룰 조합으로 옳은 것은?",
  "c": [
   "--tcp-flags ALL NONE -j DROP / --tcp-flags ALL FIN,PSH,URG -j DROP",
   "--tcp-flags SYN SYN -j DROP / --tcp-flags ALL ALL -j ACCEPT",
   "--syn -j DROP / --tcp-flags FIN FIN -j ACCEPT",
   "--tcp-flags ALL ACK -j DROP / --tcp-flags ALL RST -j DROP"
  ],
  "a": 0,
  "e": "ALL NONE = 플래그 0(NULL), ALL FIN,PSH,URG = XMAS. --syn 전체 차단은 정상 연결까지 막음."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 1,
  "q": "SYN Flood가 고갈시키는 자원은?",
  "c": [
   "네트워크 대역폭",
   "반연결 큐(Backlog)",
   "ARP 캐시",
   "DNS 캐시"
  ],
  "a": 1,
  "e": "SYN_RECV 상태가 Backlog를 채워 정상 연결 거부."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "웹서버에서 `ss -tan state syn-recv | wc -l` 결과가 평소 5에서 40,000으로 급증했다. 커널 수준의 즉각 완화책으로 가장 적절한 것은?",
  "c": [
   "net.ipv4.ip_forward=1",
   "net.ipv4.icmp_echo_ignore_all=0",
   "net.ipv4.tcp_syncookies=1",
   "net.ipv4.tcp_timestamps=0"
  ],
  "a": 2,
  "e": "SYN Cookie — 큐에 저장하지 않고 ISN에 인코딩해 Backlog 고갈 회피."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "출발지를 피해자 IP로 위조한 ICMP Echo Request를 브로드캐스트 주소로 보내 응답을 증폭시키는 공격과 그 대응이 바르게 짝지어진 것은?",
  "c": [
   "Fraggle — SYN Cookie",
   "Land — 포트 랜덤화",
   "Teardrop — DNSSEC",
   "Smurf — Directed Broadcast 차단"
  ],
  "a": 3,
  "e": "Smurf(ICMP). Fraggle은 UDP 버전."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 3,
  "q": "웹서버 대역폭 사용량은 평소 수준인데 Apache 동시 연결 슬롯이 가득 차 신규 요청이 거부된다. 연결은 대부분 요청 헤더가 끝나지 않은 상태로 수 분간 유지된다. 가장 적절한 판단과 대응은?",
  "c": [
   "Slowloris — 요청 헤더 타임아웃(mod_reqtimeout)·IP당 연결 제한",
   "UDP Flood — ISP 대역폭 증설",
   "SYN Flood — SYN Cookie",
   "Smurf — 브로드캐스트 차단"
  ],
  "a": 0,
  "e": "저대역 L7 공격으로 연결 슬롯 고갈."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "DNS·NTP·Memcached 증폭 공격이 성립하기 위한 공통 전제는?",
  "c": [
   "TCP 3-way 완성",
   "출발지 IP 위조 + 요청보다 큰 응답",
   "피해자 측 Promiscuous Mode",
   "IPSec 미적용"
  ],
  "a": 1,
  "e": "UDP 기반 서비스의 응답 증폭과 출발지 위조 — 대응은 Open Resolver 차단·BCP 38."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "PC에서 `arp -a`를 확인하니 게이트웨이 192.168.0.1과 다른 PC 192.168.0.23이 같은 MAC 주소로 표시된다. 가장 가능성 높은 상황은?",
  "c": [
   "DHCP 임대 만료",
   "DNS 캐시 포이즈닝",
   "ARP 스푸핑에 의한 MITM",
   "MAC Flooding"
  ],
  "a": 2,
  "e": "게이트웨이 IP가 공격자 MAC으로 오염된 전형적 징후."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "스위치에서 DHCP Snooping 바인딩 테이블을 근거로 위조 ARP 패킷을 폐기하는 기능은?",
  "c": [
   "Port Mirroring",
   "STP",
   "VTP",
   "DAI(Dynamic ARP Inspection)"
  ],
  "a": 3,
  "e": "DAI는 IP–MAC 바인딩과 불일치하는 ARP를 차단."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 3,
  "q": "Which control BEST prevents an attacker on the same switched LAN from reading captured credentials even if ARP spoofing succeeds?",
  "c": [
   "End-to-end encryption such as TLS/SSH",
   "Port Security limiting MACs per port",
   "Static ARP on the gateway only",
   "Disabling ICMP"
  ],
  "a": 0,
  "e": "ARP 대응은 진입을 막는 통제이고, 진입이 성공해도 내용 노출을 막는 것은 암호화."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "DNS 캐시 포이즈닝 대응으로 '응답의 출처와 무결성을 전자서명으로 검증'하는 기술은?",
  "c": [
   "DoH",
   "DNSSEC",
   "DoT",
   "Split DNS"
  ],
  "a": 1,
  "e": "DoH/DoT는 전송 암호화, DNSSEC은 서명 검증."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 1,
  "q": "스니핑을 위해 NIC가 자신에게 오지 않은 프레임도 수신하도록 하는 모드는?",
  "c": [
   "Monitor Mode",
   "Trunk Mode",
   "Promiscuous Mode",
   "Access Mode"
  ],
  "a": 2,
  "e": "Promiscuous Mode — 탐지는 PROMISC 플래그 확인."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 1,
  "q": "tcpdump에서 SYN 플래그가 설정된 패킷만 캡처하는 필터는?",
  "c": [
   "tcp.flags.syn == 1",
   "'tcp[13] == 16'",
   "syn only",
   "'tcp[13] & 2 != 0'"
  ],
  "a": 3,
  "e": "tcp[13]=플래그 옥텟, SYN 비트값 2. ①은 Wireshark 문법."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "Wireshark에서 연결 시도(순수 SYN)만 보려면?",
  "c": [
   "tcp.flags.syn == 1 && tcp.flags.ack == 0",
   "tcp.flags.syn == 1",
   "tcp.flags.ack == 1",
   "tcp.flags.reset == 1"
  ],
  "a": 0,
  "e": "SYN+ACK를 제외해야 순수 SYN."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "tcpdump 필터 'tcp[13] == 18'이 캡처하는 패킷은?",
  "c": [
   "SYN",
   "SYN+ACK",
   "FIN+ACK",
   "RST+ACK"
  ],
  "a": 1,
  "e": "SYN 2 + ACK 16 = 18."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 3,
  "q": "다음 덤프의 판단으로 옳은 것은?\n10:00:01 IP 45.1.2.3.1111 > 10.0.0.5.80: Flags [S]\n10:00:01 IP 10.0.0.5.80 > 45.1.2.3.1111: Flags [S.]\n10:00:01 IP 77.8.9.1.2222 > 10.0.0.5.80: Flags [S]\n10:00:01 IP 10.0.0.5.80 > 77.8.9.1.2222: Flags [S.]\n(초당 수천 건, 이후 [.] ACK 없음)\n① 정상 접속 증가 ② 포트 스캔 ③ ARP 스푸핑 ④ SYN Flood",
  "c": [
   "①",
   "②",
   "③",
   "④"
  ],
  "a": 3,
  "e": "다수 출발지 SYN + 서버 SYN+ACK + ACK 없음 → 반연결 누적, SYN Flood."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "Wireshark에서 ARP 스푸핑 분석 시 우선 적용할 디스플레이 필터는?",
  "c": [
   "dns",
   "icmp",
   "arp",
   "http"
  ],
  "a": 2,
  "e": "arp 필터 후 요청 없는 Reply·duplicate IP 경고 확인."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 1,
  "q": "iptables에서 패킷을 응답 없이 조용히 버리는 타깃은?",
  "c": [
   "REJECT",
   "LOG",
   "RETURN",
   "DROP"
  ],
  "a": 3,
  "e": "REJECT는 거부 응답 회신."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "다음 룰이 순서대로 적용될 때 10.0.0.5의 SSH 접속 결과는?\n1) iptables -A INPUT -p tcp --dport 22 -j DROP\n2) iptables -A INPUT -p tcp -s 10.0.0.5 --dport 22 -j ACCEPT",
  "c": [
   "차단",
   "허용",
   "REJECT 응답",
   "LOG 후 허용"
  ],
  "a": 0,
  "e": "첫 매칭 룰(1번 DROP) 적용. 허용 룰은 -I INPUT 1로 앞에 넣어야 함."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "기본정책을 DROP으로 바꾸기 전에 반드시 추가해야 원격 관리 세션과 응답 트래픽이 끊기지 않는 룰은?",
  "c": [
   "-A OUTPUT -j DROP",
   "-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
   "-A FORWARD -j ACCEPT",
   "-F"
  ],
  "a": 1,
  "e": "기존 연결·관련 트래픽 허용 + 관리 포트 허용 후 -P INPUT DROP."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "firewalld에서 https 서비스를 영구 허용하고 즉시 반영하는 올바른 절차는?",
  "c": [
   "--add-service=https 만 실행",
   "--reload 후 --add-service=https",
   "--permanent --add-service=https 후 --reload",
   "--remove-service=https --permanent"
  ],
  "a": 2,
  "e": "--permanent는 설정 파일만 변경 → --reload로 런타임 반영."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 3,
  "q": "SSH 무차별 대입이 /var/log/secure에서 확인됐다. 서비스는 유지하면서 '60초 안에 5회 넘게 새 연결을 시도하는 IP'를 차단하는 iptables 모듈은?",
  "c": [
   "multiport",
   "mac",
   "owner",
   "recent"
  ],
  "a": 3,
  "e": "-m recent --update --seconds 60 --hitcount 5 -j DROP (사전에 --set 으로 기록)."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 1,
  "q": "IDS와 IPS의 차이로 옳은 것은?",
  "c": [
   "IDS는 탐지·경보, IPS는 inline 배치로 차단까지",
   "IDS는 inline 차단, IPS는 미러 탐지",
   "둘 다 Anomaly 방식만 사용",
   "IPS는 HIDS에만 존재"
  ],
  "a": 0,
  "e": "IDS=out-of-band, IPS=inline."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Snort 룰 `alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:\"SQLi\"; content:\"union select\"; nocase; sid:1000002; rev:1;)`에서 nocase의 역할은?",
  "c": [
   "룰 비활성화",
   "대소문자 구분 없이 content 매칭",
   "패킷 차단",
   "세션 방향 지정"
  ],
  "a": 1,
  "e": "UNION SELECT 등 대소문자 변형까지 탐지."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "사용자 정의(로컬) Snort 룰의 sid 범위로 권장되는 것은?",
  "c": [
   "1~100",
   "100~999",
   "1,000,000 이상",
   "음수"
  ],
  "a": 2,
  "e": "공식 룰셋과의 충돌 방지."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 3,
  "q": "1초에 같은 목적지로 SYN이 100개 이상 들어오면 경보하는 Snort 룰로 가장 적절한 것은?",
  "c": [
   "alert udp any any -> $HOME_NET any (msg:\"SYN Flood\"; flags:S; sid:1000004;)",
   "pass tcp any any -> $HOME_NET any (flags:S; count 100;)",
   "alert tcp any any <> any any (msg:\"SYN\"; content:\"SYN\"; sid:4;)",
   "alert tcp any any -> $HOME_NET any (msg:\"SYN Flood\"; flags:S; detection_filter:track by_dst, count 100, seconds 1; sid:1000004;)"
  ],
  "a": 3,
  "e": "flags:S + detection_filter(track by_dst) 임계치. SYN은 TCP 플래그이지 페이로드 문자열이 아님."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Signature 기반 탐지의 한계로 옳은 것은?",
  "c": [
   "알려지지 않은 Zero-Day 공격 탐지가 어렵다",
   "오탐이 매우 많다",
   "정상 기준선 학습이 필요하다",
   "inline 배치가 불가능하다"
  ],
  "a": 0,
  "e": "패턴이 있어야 탐지 — Zero-Day는 Anomaly 방식이 유리."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 1,
  "q": "IPSec에서 기밀성(암호화)을 제공하는 프로토콜은?",
  "c": [
   "AH",
   "ESP",
   "IKE",
   "ISAKMP"
  ],
  "a": 1,
  "e": "AH는 무결성·인증만."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 2,
  "q": "원본 IP 헤더까지 보호해야 하는 게이트웨이 간 VPN에 적합한 IPSec 모드는?",
  "c": [
   "Transport",
   "Aggressive",
   "Tunnel",
   "Main"
  ],
  "a": 2,
  "e": "Tunnel 모드는 새 IP 헤더로 원본 패킷 전체 캡슐화. Main/Aggressive는 IKE Phase1 모드."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 2,
  "q": "WPA3가 WPA2-PSK 대비 오프라인 사전 공격을 막기 위해 도입한 방식은?",
  "c": [
   "TKIP",
   "WEP 키 순환",
   "EAP-MD5",
   "SAE(Dragonfly)"
  ],
  "a": 3,
  "e": "SAE — 전방향 비밀성 제공."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 2,
  "q": "802.1X 구성에서 Authenticator 역할을 하는 장비는?",
  "c": [
   "스위치·AP",
   "단말(노트북)",
   "RADIUS 서버",
   "DHCP 서버"
  ],
  "a": 0,
  "e": "Supplicant(단말)–Authenticator(스위치/AP)–Authentication Server(RADIUS)."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 3,
  "q": "Which statement about NAT and IPSec is CORRECT?",
  "c": [
   "AH works through NAT because it encrypts the header",
   "ESP can traverse NAT using NAT-T (UDP 4500), while AH breaks because its integrity check covers the IP header",
   "Tunnel mode makes AH NAT-compatible",
   "NAT-T uses TCP 443"
  ],
  "a": 1,
  "e": "AH는 IP 헤더 무결성 검증 → NAT가 주소를 바꾸면 실패."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 1,
  "q": "인증은 되었지만 해당 자원에 대한 권한이 없을 때 반환되는 HTTP 상태코드는?",
  "c": [
   "403",
   "401",
   "404",
   "500"
  ],
  "a": 0,
  "e": "401=인증 필요, 403=권한 없음(접근 거부), 404=자원 없음, 500=서버 오류."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 1,
  "q": "XST(Cross Site Tracing) 우려로 운영 웹서버에서 비활성화를 권고하는 HTTP 메서드는?",
  "c": [
   "GET",
   "TRACE",
   "POST",
   "HEAD"
  ],
  "a": 1,
  "e": "Apache 는 TraceEnable Off 로 비활성화한다."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "민감한 파라미터를 GET 쿼리 문자열로 전송하면 안 되는 이유로 가장 적절한 것은?",
  "c": [
   "GET 은 암호화가 불가능하기 때문",
   "GET 은 서버가 처리할 수 없기 때문",
   "URL 이 웹 로그·브라우저 기록·Referer 에 남기 때문",
   "GET 은 쿠키를 전송하지 않기 때문"
  ],
  "a": 2,
  "e": "HTTPS 라도 URL 은 서버 로그와 브라우저 기록에 남는다. 민감정보는 POST 본문으로 전송."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "브라우저가 응답의 Content-Type 을 무시하고 내용을 추측(MIME 스니핑)하지 못하게 하는 헤더는?",
  "c": [
   "X-Frame-Options: DENY",
   "Referrer-Policy: no-referrer",
   "Cache-Control: no-store",
   "X-Content-Type-Options: nosniff"
  ],
  "a": 3,
  "e": "nosniff 는 선언된 MIME 타입대로만 처리하게 한다."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "클릭재킹(Clickjacking) 대응을 위해 다른 사이트의 프레임 삽입을 막는 헤더는?",
  "c": [
   "X-Frame-Options",
   "Strict-Transport-Security",
   "X-Content-Type-Options",
   "Set-Cookie"
  ],
  "a": 0,
  "e": "DENY 또는 SAMEORIGIN. CSP 의 frame-ancestors 지시어로도 지정 가능."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 1,
  "q": "SQL 인젝션의 근본적인 대응책으로 가장 적절한 것은?",
  "c": [
   "WAF 도입",
   "PreparedStatement 를 이용한 파라미터화 쿼리",
   "에러 메시지 숨김",
   "입력 길이 제한"
  ],
  "a": 1,
  "e": "입력값을 쿼리 구조와 분리하는 바인딩이 근본 대책이고 나머지는 보조 수단이다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "MyBatis 매퍼에서 SQL 인젝션에 취약한 표기는?",
  "c": [
   "#{userId}",
   "#{userId, jdbcType=VARCHAR}",
   "${userId}",
   "#{param.userId}"
  ],
  "a": 2,
  "e": "#{} 는 바인딩, ${} 는 문자열 치환이라 입력이 SQL 구문에 그대로 들어간다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "XSS 의 근본 대책으로 가장 적절한 것은?",
  "c": [
   "쿠키 HttpOnly 설정",
   "입력값 길이 제한",
   "HTTPS 적용",
   "출력 시 컨텍스트에 맞는 인코딩"
  ],
  "a": 3,
  "e": "HttpOnly 는 피해 축소, HTTPS 는 전송 보호일 뿐 스크립트 실행을 막지 못한다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "서버 응답과 무관하게 클라이언트 스크립트의 DOM 조작 과정에서 발생해 서버 로그에 흔적이 남지 않을 수 있는 XSS 유형은?",
  "c": [
   "DOM 기반 XSS",
   "Stored XSS",
   "Reflected XSS",
   "CSRF"
  ],
  "a": 0,
  "e": "DOM XSS 대책: innerHTML 대신 textContent 사용, 안전한 DOM API."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 3,
  "q": "게시판 글에 저장된 입력이 다른 사용자가 열람할 때마다 실행되는 취약점에 대한 대응으로 가장 적절하지 않은 것은?",
  "c": [
   "출력 시 HTML 엔티티 인코딩",
   "게시글 저장 시 HTTPS 로만 전송하도록 강제",
   "CSP 로 인라인 스크립트 제한",
   "허용 태그 화이트리스트 기반 필터(HTML Sanitizer)"
  ],
  "a": 1,
  "e": "Stored XSS 문제. HTTPS 는 전송 구간 보호일 뿐 저장된 입력의 실행을 막지 못한다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 3,
  "q": "Java 에서 운영체제 명령 실행 기능이 불가피할 때 가장 안전한 구현 방식은?",
  "c": [
   "Runtime.exec 에 입력값을 문자열로 이어 붙여 전달",
   "셸(sh -c)을 통해 한 줄 명령으로 실행",
   "ProcessBuilder 에 명령과 인자를 배열로 분리해 전달하고 인자는 허용목록으로 검증",
   "입력값의 공백만 제거한 뒤 실행"
  ],
  "a": 2,
  "e": "셸을 거치지 않고 인자를 분리하면 입력이 명령 구조로 해석되지 않는다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 3,
  "q": "클라우드 서버의 URL 미리보기 기능에서 SSRF 를 막기 위한 조치로 가장 적절하지 않은 것은?",
  "c": [
   "169.254.169.254 등 내부·메타데이터 주소 차단",
   "DNS 해석 후 실제 IP 가 허용 대역인지 재검증",
   "AWS IMDSv2(토큰 기반) 적용",
   "응답 내용을 사용자에게 그대로 전달"
  ],
  "a": 3,
  "e": "응답을 그대로 돌려주면 내부 정보가 노출된다. 응답 노출 최소화가 대책."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "Which control is the PRIMARY defense against SQL injection according to OWASP?",
  "c": [
   "Use of prepared statements with parameterized queries",
   "Escaping all user input",
   "Deploying a web application firewall",
   "Hiding database error messages"
  ],
  "a": 0,
  "e": "OWASP SQL Injection Prevention Cheat Sheet: Option 1 is prepared statements; escaping is strongly discouraged as a primary defense."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 1,
  "q": "쿠키를 JavaScript(document.cookie)로 읽지 못하게 하는 속성은?",
  "c": [
   "Secure",
   "HttpOnly",
   "SameSite",
   "Path"
  ],
  "a": 1,
  "e": "HttpOnly 는 XSS 발생 시 세션 쿠키 탈취 피해를 줄인다."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "SameSite=None 속성을 사용할 때 함께 지정해야 하는 속성은?",
  "c": [
   "HttpOnly",
   "Domain",
   "Secure",
   "Max-Age"
  ],
  "a": 2,
  "e": "최신 브라우저는 Secure 없는 SameSite=None 쿠키를 거부한다."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "CSRF 대응책으로 가장 거리가 먼 것은?",
  "c": [
   "요청별 CSRF 토큰 검증",
   "SameSite 쿠키 속성",
   "중요 거래 시 재인증",
   "출력 값 HTML 인코딩"
  ],
  "a": 3,
  "e": "출력 인코딩은 XSS 대책이다."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "세션 고정(Session Fixation) 공격의 핵심 대응책은?",
  "c": [
   "로그인 성공 시 새 세션 ID 발급",
   "세션 타임아웃 단축",
   "세션 ID 길이 축소",
   "로그아웃 버튼 제거"
  ],
  "a": 0,
  "e": "인증 전 세션 ID 를 인증 후에도 쓰지 않도록 재발급하고 기존 세션을 무효화한다."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 3,
  "q": "인터넷뱅킹 이체 요청이 사용자 모르게 다른 사이트에서 발생했다. 서버 로그상 요청은 정상 세션 쿠키를 포함했고 Referer 는 외부 도메인이었다. 가장 우선 적용할 대책은?",
  "c": [
   "세션 쿠키에 Secure 속성 추가",
   "이체 요청에 CSRF 토큰 검증과 재인증 적용",
   "이체 페이지에 HSTS 적용",
   "로그인 비밀번호 복잡도 강화"
  ],
  "a": 1,
  "e": "정상 세션으로 외부에서 위조 요청이 들어온 CSRF 정황이다. 토큰·재인증이 직접 대책."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 1,
  "q": "파일 업로드 취약점 대응으로 가장 적절한 확장자 검증 방식은?",
  "c": [
   "차단목록(블랙리스트)",
   "확장자 대소문자 무시",
   "허용목록(화이트리스트)",
   "검증하지 않고 파일명만 변경"
  ],
  "a": 2,
  "e": "업무에 필요한 확장자만 허용하는 방식이 차단목록보다 안전하다."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "업로드 파일이 서버에서 실행되는 위험을 줄이는 조치로 가장 적절하지 않은 것은?",
  "c": [
   "웹루트 외부 저장",
   "업로드 디렉터리 스크립트 실행 권한 제거",
   "저장 파일명을 UUID 로 난수화",
   "업로드 파일을 웹루트 하위의 실행 가능한 디렉터리에 원래 이름으로 저장"
  ],
  "a": 3,
  "e": "웹루트 내부 실행 가능 위치에 원래 이름으로 두면 URL 로 직접 접근·실행될 수 있다."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "파일 다운로드 기능의 경로 조작 대응으로 가장 적절한 것은?",
  "c": [
   "파일 ID 로 요청받아 서버가 DB 매핑으로 실제 경로를 결정",
   "사용자가 보낸 전체 경로를 그대로 사용",
   "파일명에서 공백만 제거",
   "다운로드 URL 을 HTTPS 로 변경"
  ],
  "a": 0,
  "e": "간접 참조로 사용자 입력이 경로를 직접 구성하지 못하게 한다. 부득이하면 정규화 후 기준 디렉터리 검증."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "PHP 에서 원격 파일 포함(RFI)을 차단하기 위한 php.ini 설정은?",
  "c": [
   "display_errors = On",
   "allow_url_include = Off",
   "file_uploads = On",
   "short_open_tag = On"
  ],
  "a": 1,
  "e": "allow_url_include=Off 로 외부 URL 의 include 를 막는다."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 1,
  "q": "Apache Combined 로그에서 응답 바이트 수를 기록하는 지시자는?",
  "c": [
   "%h",
   "%t",
   "%b",
   "%u"
  ],
  "a": 2,
  "e": "%h=클라이언트 IP, %t=시간, %u=인증 사용자, %b=응답 크기(헤더 제외)."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 2,
  "q": "웹 로그에서 한 IP 가 1분 동안 수백 개의 서로 다른 관리자 페이지 경로를 요청했고 대부분 404 였다. 가장 적절한 해석은?",
  "c": [
   "정상 사용자의 페이지 이용",
   "서버 내부 오류 발생",
   "세션 만료로 인한 재로그인",
   "자동화 도구를 이용한 경로 탐색(스캐닝)"
  ],
  "a": 3,
  "e": "짧은 시간 다양한 경로 + 다수 404 는 탐색 단계의 전형적 패턴."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 3,
  "q": "같은 게시판 조회 페이지의 정상 응답 크기는 약 4KB 다. SQL 구문 문자가 포함된 파라미터 요청 중 상태코드 200, 응답 크기 180KB 인 로그가 있다. 가장 적절한 판단은?",
  "c": [
   "비정상 파라미터로 대량 데이터가 응답된 정황 — 공격 성공 가능성이 높다",
   "상태코드 200 이므로 정상 요청이다",
   "응답 크기는 의미가 없으므로 무시한다",
   "404 가 아니므로 탐색 단계로만 본다"
  ],
  "a": 0,
  "e": "정상 대비 응답 크기 급증은 데이터 노출 정황. DB 로그와 교차 확인 후 차단·코드 수정."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 2,
  "q": "웹 로그 User-Agent 필드만으로 공격 도구 사용을 확정하기 어려운 이유는?",
  "c": [
   "User-Agent 는 로그에 기록되지 않기 때문",
   "User-Agent 는 클라이언트가 임의로 바꿀 수 있기 때문",
   "User-Agent 는 암호화되어 있기 때문",
   "User-Agent 는 서버가 생성하기 때문"
  ],
  "a": 1,
  "e": "요청 빈도·경로 패턴·상태코드와 함께 판단한다."
 },
 {
  "s": "s3",
  "t": "시큐어코딩",
  "d": 1,
  "q": "행정안전부 소프트웨어 개발보안 가이드에서 SQL 삽입·XSS 가 속하는 보안약점 분류는?",
  "c": [
   "보안기능",
   "시간 및 상태",
   "입력데이터 검증 및 표현",
   "캡슐화"
  ],
  "a": 2,
  "e": "7대 분류: 입력데이터 검증 및 표현, 보안기능, 시간 및 상태, 에러처리, 코드오류, 캡슐화, API 오용."
 },
 {
  "s": "s3",
  "t": "시큐어코딩",
  "d": 2,
  "q": "운영 환경에서 DB 오류 메시지와 스택 트레이스를 사용자 화면에 그대로 보여 줄 때의 주된 위험은?",
  "c": [
   "화면 로딩 속도가 느려진다",
   "세션이 즉시 만료된다",
   "HTTPS 연결이 끊긴다",
   "내부 구조 정보가 노출되어 공격에 활용된다"
  ],
  "a": 3,
  "e": "사용자에게는 일반 오류 페이지, 상세 내용은 서버 로그에만 기록."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 1,
  "q": "Apache 에서 디렉터리 리스팅을 차단하는 설정은?",
  "c": [
   "Options -Indexes",
   "ServerTokens Full",
   "AllowOverride All",
   "KeepAlive On"
  ],
  "a": 0,
  "e": "Nginx 는 autoindex off."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 2,
  "q": "Which DNS record type is used to publish an SPF policy today?",
  "c": [
   "MX",
   "TXT",
   "PTR",
   "CNAME"
  ],
  "a": 1,
  "e": "RFC 7208 deprecated the dedicated SPF record type; SPF policies are published as TXT records."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 1,
  "q": "현행 미국 표준 대칭 블록 암호 AES의 블록 크기는?",
  "c": [
   "128bit",
   "64bit",
   "56bit",
   "256bit"
  ],
  "a": 0,
  "e": "AES 블록은 128bit 고정이며 키만 128/192/256bit로 선택한다. 64bit는 DES·3DES 블록, 56bit는 DES 실효 키."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 2,
  "q": "Feistel 구조를 사용하는 알고리즘만 묶은 것은?",
  "c": [
   "AES, ARIA",
   "AES, SEED",
   "DES, ARIA",
   "DES, SEED"
  ],
  "a": 3,
  "e": "DES·3DES·SEED가 Feistel, AES·ARIA는 SPN 구조다."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 2,
  "q": "IV를 사용하지 않아 동일 평문 블록이 동일 암호문 블록이 되는 운영모드는?",
  "c": [
   "CBC",
   "OFB",
   "ECB",
   "CTR"
  ],
  "a": 2,
  "e": "ECB만 IV가 없다. CBC·CFB·OFB는 IV 필수, CTR은 Nonce·카운터를 사용한다."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 3,
  "q": "다음 식이 나타내는 운영모드는?  Cᵢ = Pᵢ ⊕ E_k(Nonce∥i)",
  "c": [
   "CBC",
   "CFB",
   "ECB",
   "CTR"
  ],
  "a": 3,
  "e": "카운터 값을 암호화한 키스트림을 평문과 XOR하므로 CTR. CBC는 Cᵢ=E_k(Pᵢ⊕Cᵢ₋₁)."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 3,
  "q": "대용량 디스크 암호화에서 임의 블록에 직접 접근(랜덤 접근)하고 멀티코어 병렬 암호화가 필요할 때 가장 적합한 모드는?",
  "c": [
   "CBC",
   "CFB",
   "OFB",
   "CTR"
  ],
  "a": 3,
  "e": "CTR은 블록 간 의존이 없어 병렬·랜덤 접근이 가능하다. CBC·CFB·OFB는 암호화가 직렬이다."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 1,
  "q": "큰 정수의 소인수분해 난해성에 기반한 공개키 알고리즘은?",
  "c": [
   "Diffie-Hellman",
   "ECC",
   "RSA",
   "AES"
  ],
  "a": 2,
  "e": "RSA=소인수분해, DH=이산대수, ECC=타원곡선 이산대수, AES는 대칭키."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "A가 B에게 B만 읽을 수 있는 메시지를 보내려 한다. A가 사용할 키는?",
  "c": [
   "A의 개인키",
   "A의 공개키",
   "B의 공개키",
   "B의 개인키"
  ],
  "a": 2,
  "e": "기밀성은 수신자(B) 공개키로 암호화해 B의 개인키로만 복호되게 한다. A의 개인키는 서명용."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "Diffie-Hellman 키 교환에 대한 설명으로 옳은 것은?",
  "c": [
   "메시지를 직접 암호화하고 전자서명도 생성한다",
   "양측이 비밀지수 a, b를 서로 교환한다",
   "공유 비밀키 합의 전용이며 인증이 없으면 중간자 공격에 취약하다",
   "소인수분해 문제에 안전성을 둔다"
  ],
  "a": 2,
  "e": "DH는 키 합의 전용, 비밀지수는 전송하지 않으며 이산대수 문제 기반이다. 인증 부재로 MITM에 취약."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 3,
  "q": "TLS 설정에서 서버 장기 개인키가 유출돼도 과거 세션이 복호되지 않도록 하려면 선택해야 할 키 교환은?",
  "c": [
   "RSA 키 전송",
   "정적 DH",
   "ECDHE",
   "PSK"
  ],
  "a": 2,
  "e": "ECDHE는 세션마다 임시키를 사용해 PFS를 제공한다. RSA 키 전송·정적 DH는 장기키로 과거 세션키 복원이 가능하다."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 3,
  "q": "ECC 256bit와 동등한 안전강도를 갖는 RSA 키 길이는?",
  "c": [
   "1024bit",
   "2048bit",
   "3072bit",
   "15360bit"
  ],
  "a": 2,
  "e": "ECC 256bit ≈ RSA 3072bit. ECC는 ECDLP가 비트당 더 어려워 짧은 키로 동등 강도를 낸다."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 1,
  "q": "현재 충돌이 발견되어 폐기된 해시 함수로 짝지어진 것은?",
  "c": [
   "SHA-256, SHA-3",
   "MD5, SHA-1",
   "SHA-1, SHA-256",
   "MD5, SHA-512"
  ],
  "a": 1,
  "e": "MD5(128bit)·SHA-1(160bit)은 충돌이 현실적으로 발견돼 폐기, SHA-2·SHA-3 계열이 권장."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "x₁이 주어졌을 때 h(x₁)=h(x₂)인 다른 x₂를 찾기 어려운 해시의 성질은?",
  "c": [
   "제2 역상 저항성",
   "역상 저항성",
   "충돌 저항성",
   "눈사태 효과"
  ],
  "a": 0,
  "e": "특정 x₁이 주어진 경우는 제2 역상 저항, 임의의 쌍을 찾는 것은 충돌 저항, h(x)로 x를 찾는 것은 역상 저항."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "HMAC이 제공하는 보안 서비스로 옳은 것은?",
  "c": [
   "기밀성과 부인방지",
   "기밀성과 무결성",
   "부인방지와 가용성",
   "메시지 인증과 무결성"
  ],
  "a": 3,
  "e": "HMAC은 공유 비밀키로 메시지 인증+무결성을 제공한다. 키를 공유하므로 부인방지는 불가하고 암호화가 아니므로 기밀성도 없다."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 3,
  "q": "다음 HMAC 구조에서 이중 해시가 주로 방어하는 공격은?  H((K⊕opad)∥H((K⊕ipad)∥m))",
  "c": [
   "재전송 공격",
   "중간자 공격",
   "길이 확장 공격",
   "사전 공격"
  ],
  "a": 2,
  "e": "H(K∥m) 단순 구조는 길이 확장 공격에 취약하며 HMAC의 ipad·opad 이중 해시가 이를 방어한다."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 3,
  "q": "수신자가 전자서명을 검증할 때의 처리로 옳은 것은?",
  "c": [
   "수신자 개인키로 서명을 복호한 값과 메시지를 비교",
   "송신자 공개키로 서명을 복호한 값과 수신 메시지의 해시를 비교",
   "송신자 개인키로 메시지를 다시 서명해 비교",
   "CA 개인키로 서명을 복호해 비교"
  ],
  "a": 1,
  "e": "서명은 송신자 개인키로 생성되므로 송신자 공개키로 복호해 다이제스트를 얻고, 수신 메시지 해시와 비교한다."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 1,
  "q": "해시-평문 대응을 미리 계산한 테이블로 비밀번호 해시를 역추적하는 공격은?",
  "c": [
   "레인보우 테이블 공격",
   "생일 공격",
   "재전송 공격",
   "중간자 공격"
  ],
  "a": 0,
  "e": "사전계산 테이블 = 레인보우 테이블, 대응은 사용자별 솔트."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 2,
  "q": "출력 160bit 해시 함수에 대한 생일 공격의 대략적 시도 횟수는?",
  "c": [
   "2^160",
   "2^80",
   "2^40",
   "2^128"
  ],
  "a": 1,
  "e": "생일 공격은 2^(n/2) — 160bit면 2^80."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 2,
  "q": "키 스트레칭 함수가 아닌 것은?",
  "c": [
   "SHA-1",
   "PBKDF2",
   "bcrypt",
   "Argon2"
  ],
  "a": 0,
  "e": "PBKDF2·bcrypt·scrypt·Argon2는 반복 연산으로 비용을 늘리는 비밀번호 전용 함수다. SHA-1은 일반 해시이며 폐기되었다."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 3,
  "q": "다음 DB 덤프를 보고 판단할 수 있는 가장 직접적인 문제는?\nuser1 | 5f4dcc3b5aa765d61d8327deb882cf99\nuser2 | 5f4dcc3b5aa765d61d8327deb882cf99",
  "c": [
   "해시 길이가 256bit라 충돌 위험이 있다",
   "HMAC을 사용해 키가 노출되었다",
   "전자서명이 위조되었다",
   "솔트 미사용으로 동일 비밀번호 사용자가 노출된다"
  ],
  "a": 3,
  "e": "두 계정 해시가 같다는 것은 솔트가 없다는 의미다. 32자리 16진수는 128bit(MD5 형태)로 256bit가 아니다."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 3,
  "q": "인증 서버가 로그인 요청에 매번 새 난수를 포함시키고 사용된 값을 거부하도록 했다. 주된 방어 대상은?",
  "c": [
   "생일 공격",
   "재전송 공격",
   "사전 공격",
   "레인보우 테이블"
  ],
  "a": 1,
  "e": "Nonce(일회성 난수)·Timestamp·순서번호는 재전송(Replay) 공격 대응책이다."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 1,
  "q": "인증 3요소 중 OTP 토큰이 해당하는 것은?",
  "c": [
   "소유 기반",
   "지식 기반",
   "생체 기반",
   "행위 기반"
  ],
  "a": 0,
  "e": "OTP 토큰·스마트카드·휴대폰은 소유(Possession) 요소다."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 2,
  "q": "다중요소 인증(MFA)에 해당하는 것은?",
  "c": [
   "비밀번호 + PIN",
   "비밀번호 + 보안질문",
   "지문 + 지문",
   "비밀번호 + TOTP"
  ],
  "a": 3,
  "e": "MFA는 서로 다른 요소 결합. 비밀번호·PIN·보안질문은 모두 지식 요소다."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 2,
  "q": "TOTP의 OTP 생성 동기화 기준은?",
  "c": [
   "카운터",
   "시간",
   "챌린지",
   "서버 순서번호"
  ],
  "a": 1,
  "e": "TOTP=시간(30초 등), HOTP=카운터(이벤트)."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 3,
  "q": "생체인증 장비 평가에서 FAR을 낮추도록 임계값을 높였을 때 일반적으로 나타나는 현상은?",
  "c": [
   "FRR이 증가한다",
   "FRR이 감소한다",
   "EER이 0이 된다",
   "FAR과 FRR이 함께 감소한다"
  ],
  "a": 0,
  "e": "FAR과 FRR은 트레이드오프 관계로 보안(FAR↓)을 높이면 정상 사용자 거부(FRR)가 늘어난다. EER은 두 값의 교차점."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 3,
  "q": "챌린지-리스폰스 인증이 재전송 공격에 강한 이유는?",
  "c": [
   "비밀번호를 평문으로 전송해 서버가 즉시 확인한다",
   "응답을 CA가 서명하기 때문이다",
   "클라이언트가 챌린지를 직접 생성하기 때문이다",
   "매번 다른 난수 챌린지로 응답이 달라져 가로챈 응답을 재사용할 수 없다"
  ],
  "a": 3,
  "e": "서버가 매번 새 난수를 발행하므로 이전 응답은 무효다. 비밀번호 자체도 전송하지 않는다."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 1,
  "q": "Kerberos에서 KDC를 구성하는 두 서버는?",
  "c": [
   "CA와 RA",
   "AS와 VA",
   "RA와 TGS",
   "AS와 TGS"
  ],
  "a": 3,
  "e": "KDC = AS(인증·TGT 발급) + TGS(서비스 티켓 발급). CA·RA·VA는 PKI 구성요소."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 2,
  "q": "Kerberos에 대한 설명으로 틀린 것은?",
  "c": [
   "공개키 암호를 기본으로 사용해 KDC가 필요 없다",
   "대칭키 기반 티켓을 사용한다",
   "KDC가 단일 장애점이 될 수 있다",
   "시간 동기화에 의존한다"
  ],
  "a": 0,
  "e": "Kerberos는 대칭키 기반이며 신뢰된 제3자 KDC가 필수다."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 2,
  "q": "FIDO 인증에서 서버에 등록·저장되는 정보는?",
  "c": [
   "사용자 공개키",
   "사용자 개인키",
   "비밀번호 해시",
   "생체 원본 템플릿"
  ],
  "a": 0,
  "e": "개인키·생체정보는 단말 보안영역에 남고 서버엔 공개키만 저장돼 유출돼도 위조 불가."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 3,
  "q": "도메인 환경에서 클라이언트·KDC 간 시계가 크게 어긋나 인증이 실패했다. 원인이 되는 Kerberos 특성은?",
  "c": [
   "CRL 갱신 주기",
   "OCSP Stapling 실패",
   "재전송 방지를 위한 타임스탬프 검증",
   "솔트 불일치"
  ],
  "a": 2,
  "e": "Kerberos는 재전송 방지에 타임스탬프를 사용하므로 시간 동기가 어긋나면 인증이 실패한다."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 3,
  "q": "사내 Kerberos, 기업 웹 SAML, 소셜 로그인 OIDC의 공통 목적과 공통 위험으로 옳은 것은?",
  "c": [
   "부인방지 — 개인키 분실",
   "SSO 구현 — 인증 서버가 단일 장애점·탈취 시 전체 노출",
   "기밀성 — 세션키 재사용",
   "가용성 — DDoS 증폭"
  ],
  "a": 1,
  "e": "세 기술 모두 SSO 구현 수단이며 인증 서버가 SPOF가 되므로 MFA를 병행한다."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 1,
  "q": "PKI에서 신원 등록·확인을 대행하는 기관은?",
  "c": [
   "RA",
   "CA",
   "VA",
   "OCSP"
  ],
  "a": 0,
  "e": "RA=등록, CA=발급·서명, VA=유효성 검증, OCSP=실시간 상태 질의 프로토콜."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 2,
  "q": "X.509 인증서에서 인증서를 발급한 CA를 나타내는 필드는?",
  "c": [
   "Subject",
   "Issuer",
   "Validity",
   "Serial Number"
  ],
  "a": 1,
  "e": "Issuer=발급 CA, Subject=소유자, Validity=유효기간, Serial Number=일련번호."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 2,
  "q": "OCSP가 CRL에 비해 갖는 장점은?",
  "c": [
   "개별 인증서 상태를 실시간 질의한다",
   "폐기 목록 전체를 오프라인으로 보관한다",
   "CA 부하가 전혀 없다",
   "인증서 서명이 필요 없다"
  ],
  "a": 0,
  "e": "OCSP는 해당 인증서만 실시간 질의해 즉시성이 높다. CA 부하는 OCSP Stapling으로 완화한다."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 3,
  "q": "다음 openssl x509 -text 출력 일부로 판단할 수 있는 것은?\nIssuer: CN=Example Root CA\nSubject: CN=Example Root CA",
  "c": [
   "폐기된 인증서이다",
   "자기 서명(self-signed)된 루트 CA 인증서이다",
   "OCSP Stapling이 적용된 인증서이다",
   "중간 CA가 서명한 서버 인증서이다"
  ],
  "a": 1,
  "e": "Issuer와 Subject가 같으면 자기 서명 인증서이며, 루트 CA 인증서는 self-signed다."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 3,
  "q": "웹 서버가 OCSP 응답을 미리 받아 TLS 핸드셰이크 때 함께 전달하는 방식은?",
  "c": [
   "CRL 배포점",
   "OCSP Stapling",
   "인증서 피닝",
   "HSTS"
  ],
  "a": 1,
  "e": "OCSP Stapling은 CA(OCSP 응답자) 부하와 클라이언트 지연을 줄인다."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 1,
  "q": "자원 소유자가 재량으로 권한을 부여하는 접근통제 정책은?",
  "c": [
   "MAC",
   "RBAC",
   "DAC",
   "ABAC"
  ],
  "a": 2,
  "e": "DAC=소유자 재량, MAC=보안등급 강제, RBAC=역할, ABAC=속성."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 2,
  "q": "Biba 모델의 규칙으로 옳은 것은?",
  "c": [
   "No Read Up, No Write Down",
   "No Read Down, No Write Up",
   "No Read Up, No Write Up",
   "No Read Down, No Write Down"
  ],
  "a": 1,
  "e": "Biba(무결성)=No Read Down·No Write Up, BLP(기밀성)=No Read Up·No Write Down."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 2,
  "q": "인사이동 시 사용자의 역할만 바꾸면 권한이 일괄 조정되는 접근통제는?",
  "c": [
   "DAC",
   "MAC",
   "RBAC",
   "Capability List"
  ],
  "a": 2,
  "e": "RBAC는 사용자→역할→권한 구조로 대규모 관리·최소권한·직무분리에 유리하다."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 3,
  "q": "BLP 모델에서 '비밀(S)' 등급 주체가 '대외비(C)' 등급 파일에 쓰기를 시도했다. 판정과 근거는?",
  "c": [
   "허용 — No Read Up만 적용된다",
   "거부 — No Read Down",
   "허용 — 상위 주체는 모두 가능하다",
   "거부 — No Write Down(*-property)"
  ],
  "a": 3,
  "e": "BLP는 상위 주체가 하위 객체에 쓰는 것을 금지(No Write Down)해 기밀 유출을 막는다."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 3,
  "q": "다음 접근통제 행렬에서 File2 열만 잘라 객체에 저장한 형태는?\n        File1  File2\nAlice | r,w  | r\nBob   | r    | r,w,x",
  "c": [
   "Capability List",
   "보안 레이블",
   "역할 테이블",
   "ACL"
  ],
  "a": 3,
  "e": "열(객체) 기준 = ACL, 행(주체) 기준 = Capability List."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 1,
  "q": "정보보호 문서체계 중 '반드시 지켜야 할 의무 요구사항'을 규정하는 문서는?",
  "c": [
   "지침",
   "절차",
   "가이드라인 부록",
   "표준"
  ],
  "a": 3,
  "e": "표준은 정책 달성을 위한 강제 요구사항. 지침은 권고, 절차는 실행 단계, 부록은 체계 계층이 아니다."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 2,
  "q": "CISO에 대한 설명으로 옳은 것은?",
  "c": [
   "정보통신망법 제45조의3에 근거하며 과기정통부 장관에게 신고한다",
   "개인정보보호법 제31조에 근거한다",
   "CPO와 반드시 동일인이어야 한다",
   "개인정보 처리 업무만 총괄한다"
  ],
  "a": 0,
  "e": "CISO는 망법 제45조의3·과기정통부 신고. 제31조는 CPO, 겸임은 가능하나 의무 아님, 대상은 정보보호 전반."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 3,
  "q": "다음 문서 내용은 어느 계층인가?\n'보안담당자는 매월 첫째 주 월요일 09시에 방화벽 정책을 export하여 변경 이력을 대조하고 결과를 팀장에게 보고한다.'",
  "c": [
   "절차",
   "정책",
   "표준",
   "지침"
  ],
  "a": 0,
  "e": "누가·언제·어떻게를 단계별로 기술한 실행 문서는 절차. 정책은 방향 선언, 표준은 의무 수준, 지침은 권고."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 1,
  "q": "ISMS-P 인증기관은?",
  "c": [
   "금융감독원",
   "국가정보원",
   "한국정보통신기술협회(TTA)",
   "KISA(한국인터넷진흥원)"
  ],
  "a": 3,
  "e": "ISMS-P 인증기관은 KISA. 정책기관은 과기정통부·개인정보보호위원회."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증기준 영역과 통제 수의 연결로 옳은 것은?",
  "c": [
   "관리체계 수립 및 운영 — 22개",
   "개인정보 처리단계별 요구사항 — 16개",
   "보호대책 요구사항 — 64개",
   "보호대책 요구사항 — 80개"
  ],
  "a": 2,
  "e": "관리체계 16, 보호대책 64, 개인정보 처리단계 22. 80은 ISMS(1+2영역) 합계."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS(정보보호 관리체계) 인증만 받을 때 적용되는 통제 수는?",
  "c": [
   "80개",
   "102개",
   "64개",
   "86개"
  ],
  "a": 0,
  "e": "ISMS = 관리체계(16) + 보호대책(64) = 80개. 102는 ISMS-P 전체."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 1,
  "q": "ISMS-P 인증의 유효기간은?",
  "c": [
   "1년",
   "2년",
   "3년",
   "5년"
  ],
  "a": 2,
  "e": "유효기간 3년, 사후심사 연 1회 이상, 만료 전 갱신심사."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 3,
  "q": "A사는 2년 전 ISMS-P를 최초 취득했다. 올해 수행해야 할 심사는?",
  "c": [
   "최초심사",
   "갱신심사",
   "심사 면제",
   "사후심사"
  ],
  "a": 3,
  "e": "유효기간 3년 중 매년 사후심사(연 1회 이상)로 유지 여부 확인. 갱신심사는 만료 전."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증 절차에서 '심의'를 수행하는 주체는?",
  "c": [
   "정보주체",
   "인증위원회",
   "CISO",
   "감사원"
  ],
  "a": 1,
  "e": "신청→계약→심사→결함조치→심의(인증위원회)→발급."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "위험의 구성요소로 묶인 것은?",
  "c": [
   "자산·통제·감사",
   "자산·위협·취약점",
   "위협·탐지·대응",
   "정책·표준·절차"
  ],
  "a": 1,
  "e": "위험 = 자산 × 위협 × 취약점."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "자산가치 2억원, 노출계수(EF) 25%, 연간발생률(ARO) 0.4일 때 ALE는?",
  "c": [
   "5,000만원",
   "8,000만원",
   "2,000만원",
   "1,250만원"
  ],
  "a": 2,
  "e": "SLE = 2억 × 0.25 = 5,000만원, ALE = 5,000만 × 0.4 = 2,000만원. 5,000만은 SLE."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "ALE가 대책 전 3,000만원, 대책 후 1,000만원인 보안대책의 연간 비용이 2,500만원이다. 판단으로 옳은 것은?",
  "c": [
   "ALE가 줄었으므로 타당하다",
   "대책 후 ALE가 0이 아니므로 판단 불가",
   "비용이 대책 전 ALE보다 작으므로 타당하다",
   "절감액 2,000만원 < 비용 2,500만원이므로 타당하지 않다"
  ],
  "a": 3,
  "e": "타당성 = (대책 전 ALE − 대책 후 ALE) > 대책 비용. 2,000만 < 2,500만 → 부적합."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "정성적 위험분석 기법이 아닌 것은?",
  "c": [
   "델파이법",
   "확률분포법",
   "시나리오법",
   "순위결정법"
  ],
  "a": 1,
  "e": "확률분포법은 정량적 기법. 델파이·시나리오·순위결정은 정성적."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "회사가 해킹 손해를 대비해 사이버보험에 가입했다. 이 위험처리 유형은?",
  "c": [
   "위험전가",
   "위험회피",
   "위험감소",
   "위험수용"
  ],
  "a": 0,
  "e": "보험·아웃소싱은 제3자에게 위험을 이전하는 전가. 회피는 활동 중단."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "취약한 레거시 파일공유 서비스를 이용자가 적다는 이유로 폐지했다. 위험처리 유형은?",
  "c": [
   "위험전가",
   "위험수용",
   "위험회피",
   "위험감소"
  ],
  "a": 2,
  "e": "위험 발생 활동 자체를 중단하는 것이 회피."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "DoA에 대한 설명으로 옳은 것은?",
  "c": [
   "연간 손실 예상액",
   "위험처리 의사결정의 기준이 되는 수용가능 위험수준",
   "통제 적용 후 남는 위험",
   "자산의 노출계수"
  ],
  "a": 1,
  "e": "DoA 초과 → 감소·전가·회피, 이하 → 수용. 연간손실은 ALE, 남는 위험은 잔여위험."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "정량적 위험분석의 특징은?",
  "c": [
   "전문가 의견에 의존해 빠르다",
   "결과가 금액으로 표현되어 비용효과 분석이 쉽다",
   "결과를 상·중·하 등급으로 표현한다",
   "데이터가 필요 없다"
  ],
  "a": 1,
  "e": "정량은 금액·객관적이나 시간·비용이 많고 데이터 의존. 나머지는 정성 특징."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "위험처리 후에도 남아 경영진이 수용 여부를 결정하는 위험은?",
  "c": [
   "잔여위험",
   "고유위험",
   "전가위험",
   "잠재위협"
  ],
  "a": 0,
  "e": "통제 적용 후 남는 위험 = 잔여위험(Residual Risk)."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "재해 발생 후 복구 완료까지의 목표 시간을 의미하는 지표는?",
  "c": [
   "RPO",
   "RTO",
   "MTBF",
   "WRT"
  ],
  "a": 1,
  "e": "RTO=시간, RPO=데이터 시점, WRT=복구 후 정상화 시간."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 3,
  "q": "백업을 매일 00시에 1회 수행하는 시스템이 23시에 장애가 났다. 최대 데이터 손실과 관련된 지표와 값은?",
  "c": [
   "RTO — 약 23시간",
   "RPO — 약 1시간",
   "RPO — 약 23시간",
   "MTD — 약 24시간"
  ],
  "a": 2,
  "e": "마지막 백업(00시) 이후 23시간치 데이터가 손실 가능 → RPO 관점. RTO는 복구 시간."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 3,
  "q": "RTO 15일, 비용 최소화가 요구되는 비핵심 업무에 적합한 DR 사이트는?",
  "c": [
   "Cold 사이트",
   "Mirror 사이트",
   "Hot 사이트",
   "Warm 사이트"
  ],
  "a": 0,
  "e": "Cold 사이트는 수주 RTO·최저비용. Warm은 수일 수준."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 3,
  "q": "온라인 결제 서비스로 RTO 0, 데이터 손실 0이 요구된다. 적합한 DR 방식은?",
  "c": [
   "Hot 사이트",
   "Warm 사이트",
   "Mirror 사이트",
   "상호협정(Reciprocal)"
  ],
  "a": 2,
  "e": "Mirror는 실시간 동기화 이중화로 RTO 0. Hot은 수시간."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "MTD가 24시간, WRT가 6시간이면 RTO의 최댓값은?",
  "c": [
   "30시간",
   "24시간",
   "18시간",
   "6시간"
  ],
  "a": 2,
  "e": "MTD = RTO + WRT → RTO = 24 − 6 = 18시간."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "BIA의 주된 목적은?",
  "c": [
   "취약점 진단",
   "침해사고 원인 분석",
   "업무 중단 영향 분석으로 복구 우선순위와 RTO·RPO 도출",
   "인증 범위 설정"
  ],
  "a": 2,
  "e": "BIA는 BCP 수립의 출발점으로 우선순위·복구목표 도출."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 1,
  "q": "개인정보에 해당하는 것은?",
  "c": [
   "사망자의 진료기록",
   "살아있는 고객의 이름과 휴대전화번호",
   "법인의 사업자등록번호",
   "익명 처리된 통계"
  ],
  "a": 1,
  "e": "개인정보는 살아있는 개인 식별 정보. 사망자·법인 정보는 해당 없음."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "민감정보에 해당하지 않는 것은?",
  "c": [
   "여권번호",
   "건강 정보",
   "유전정보",
   "범죄경력"
  ],
  "a": 0,
  "e": "여권번호는 고유식별정보(제24조). 나머지는 민감정보(제23조)."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 3,
  "q": "쇼핑몰이 배송업체에 배송 업무를 맡겨 주소를 넘겼다. 옳은 것은?",
  "c": [
   "제3자 제공이므로 별도 동의가 필수다",
   "목적 외 이용이므로 금지된다",
   "고유식별정보 처리에 해당한다",
   "처리위탁이므로 처리방침 공개로 처리할 수 있다"
  ],
  "a": 3,
  "e": "위탁자(쇼핑몰)의 업무를 위한 처리 → 위탁, 처리방침 공개로 동의 불요, 관리·감독 책임은 위탁자."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 3,
  "q": "회원 가입 시 '주민등록번호 수집 동의'를 받았으나 법령 근거는 없다. 판단은?",
  "c": [
   "동의가 있으므로 처리 가능",
   "암호화하면 처리 가능",
   "CPO 승인 시 처리 가능",
   "동의가 있어도 처리 불가"
  ],
  "a": 3,
  "e": "주민등록번호는 제24조의2에 따라 법령 근거 필수, 동의로 대체 불가."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "개인정보 파기에 대한 설명으로 옳은 것은?",
  "c": [
   "보유기간 경과 시 지체없이(5일 이내) 복구 불가능하게 파기",
   "보유기간 경과 후 30일 이내 파기",
   "종이 문서는 보관함 이동으로 갈음",
   "전자파일은 휴지통 이동으로 충분"
  ],
  "a": 0,
  "e": "지체없이(5일 이내), 전자=영구삭제·물리적 파괴, 종이=파쇄·소각."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "2024년 신설된 정보주체의 권리는?",
  "c": [
   "열람 요구권",
   "정정·삭제 요구권",
   "처리정지 요구권",
   "자동화된 결정에 대한 거부·설명 요구권"
  ],
  "a": 3,
  "e": "자동화된 결정 거부·설명 요구권은 2024 신설. 나머지는 기존 권리."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 1,
  "q": "개인정보 유출 시 정보주체 통지 시한은?",
  "c": [
   "안 때부터 72시간 이내",
   "24시간 이내",
   "7일 이내",
   "30일 이내"
  ],
  "a": 0,
  "e": "유출 사실을 안 때부터 72시간 이내 통지."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 3,
  "q": "고객 3,000명의 개인정보 유출을 확인했다. 조치로 옳은 것은?",
  "c": [
   "정보주체 통지만 하면 된다",
   "1만명 미만이므로 신고 불요",
   "72시간 이내 정보주체 통지와 개인정보위 또는 KISA 신고",
   "경찰에만 신고하면 된다"
  ],
  "a": 2,
  "e": "1,000명 이상 유출 시 72시간 이내 기관 신고 + 정보주체 통지."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 3,
  "q": "8만명의 고객 정보를 처리하는 개인정보처리시스템의 접속기록 보관 기간은?",
  "c": [
   "6개월 이상",
   "1년 이상",
   "3년 이상",
   "2년 이상"
  ],
  "a": 3,
  "e": "5만명 이상 정보주체 개인정보 처리 시 2년 이상, 원칙은 1년 이상."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 2,
  "q": "비밀번호 저장 시 요구되는 암호화 방식은?",
  "c": [
   "양방향 대칭키 암호화",
   "평문 저장 후 접근통제",
   "Base64 인코딩",
   "일방향 암호화(해시)"
  ],
  "a": 3,
  "e": "비밀번호는 일방향 암호화. Base64는 인코딩일 뿐 암호화 아님."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 2,
  "q": "개인정보 영향평가(PIA)에 대한 설명으로 옳은 것은?",
  "c": [
   "민간기업 전체 의무",
   "공공기관 일정 규모 이상 개인정보파일 구축·운용 시 의무",
   "유출 사고 발생 후 수행",
   "ISMS-P 인증으로 대체"
  ],
  "a": 1,
  "e": "PIA는 사전 평가, 공공기관 의무·민간 권장."
 },
 {
  "s": "s5",
  "t": "망법·신용·망분리",
  "d": 2,
  "q": "정보통신망법상 영리목적 광고성 정보를 야간에 전송하려면 별도 동의가 필요한 시간대는?",
  "c": [
   "22:00~06:00",
   "21:00~08:00",
   "20:00~09:00",
   "00:00~06:00"
  ],
  "a": 1,
  "e": "야간 21시~08시 전송 시 별도 동의."
 },
 {
  "s": "s5",
  "t": "망법·신용·망분리",
  "d": 2,
  "q": "본인신용정보관리업(마이데이터)의 근거 법률은?",
  "c": [
   "정보통신망법",
   "신용정보법",
   "전자서명법",
   "클라우드컴퓨팅법"
  ],
  "a": 1,
  "e": "신용정보의 이용 및 보호에 관한 법률, 소관 금융위."
 },
 {
  "s": "s5",
  "t": "망법·신용·망분리",
  "d": 3,
  "q": "한 대의 PC에서 VDI로 업무망과 인터넷망을 분리한 방식은?",
  "c": [
   "물리적 망분리",
   "DMZ 구성",
   "논리적 망분리",
   "VLAN 트렁킹"
  ],
  "a": 2,
  "e": "가상화(VDI/SBC) 기반은 논리적 망분리, PC 분리는 물리적."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 2,
  "q": "CSAP '하' 등급의 대상 정보는?",
  "c": [
   "공개 가능 정보",
   "민감정보",
   "국방·외교 정보",
   "비공개 업무정보"
  ],
  "a": 0,
  "e": "상=민감·국방·외교, 중=비공개 업무정보, 하=공개 가능 정보."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 2,
  "q": "CC에서 제품이 만족하는 보안요구 명세서로, 특정 제품(TOE)에 종속되는 문서는?",
  "c": [
   "PP(보호프로파일)",
   "EAL",
   "CCRA",
   "ST(보안목표)"
  ],
  "a": 3,
  "e": "ST는 특정 제품의 명세, PP는 제품군 요구사항 명세, EAL은 보증등급, CCRA는 상호인정 협정."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 1,
  "q": "umask 022일 때 새로 만든 디렉터리의 권한은 755이다.",
  "a": true,
  "e": "디렉터리 777 & ~022 = 755. 파일은 644."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "umask 022일 때 새로 만든 일반 파일의 권한은 755이다.",
  "a": false,
  "e": "파일은 666에서 출발하므로 644. 실행비트는 기본 부여되지 않는다."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 1,
  "q": "SetUID가 설정된 파일은 실행한 사용자의 권한으로 동작한다.",
  "a": false,
  "e": "파일 소유자의 권한(EUID=소유자)으로 동작한다."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "-rwSr--r--의 대문자 S는 SetUID는 있으나 소유자 실행권한이 없음을 뜻한다.",
  "a": true,
  "e": "특수권한 자리에 x가 없으면 대문자 S·T로 표기 — 비정상 설정."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 3,
  "q": "find / -perm 4000 은 SetUID 비트가 포함된 모든 파일을 찾는다.",
  "a": false,
  "e": "하이픈 없는 4000은 권한이 정확히 4000인 파일만. 포함 검색은 -perm -4000."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "디렉터리 내 파일 삭제 가능 여부는 상위 디렉터리의 쓰기 권한으로 결정된다.",
  "a": true,
  "e": "삭제·생성·이름변경은 디렉터리 w 권한. Sticky Bit가 이를 본인 파일로 제한."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "/etc/passwd 두 번째 필드의 x는 패스워드 해시가 /etc/shadow에 저장됨을 의미한다.",
  "a": true,
  "e": "모두가 읽는 passwd에서 해시를 분리해 root만 읽는 shadow(600)에 저장."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "/etc/shadow의 $5$ 접두어는 SHA-512 해시를 의미한다.",
  "a": false,
  "e": "$5$=SHA-256, $6$=SHA-512, $1$=MD5."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "/etc/login.defs의 PASS_MAX_DAYS를 바꾸면 기존 계정 모두에 즉시 적용된다.",
  "a": false,
  "e": "신규 생성 계정에 적용. 기존 계정은 chage -M 으로 개별 조정."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "pam_wheel.so는 wheel 그룹 사용자만 su를 사용하도록 제한할 때 쓴다.",
  "a": true,
  "e": "/etc/pam.d/su에 auth required pam_wheel.so use_uid 설정."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "sudo는 su와 달리 대상 계정(root)의 패스워드 대신 본인 패스워드로 인증한다.",
  "a": true,
  "e": "sudo=본인 패스워드·명령 단위 허용·감사 로그, su=대상 계정 패스워드·전권."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "PAM의 required 플래그는 모듈이 실패하면 즉시 인증을 중단한다.",
  "a": false,
  "e": "required는 나머지 모듈을 끝까지 수행한 뒤 최종 실패. 즉시 중단은 requisite."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "/var/log/btmp는 cat 명령으로 바로 내용을 읽을 수 있는 텍스트 로그이다.",
  "a": false,
  "e": "btmp는 바이너리 — lastb로 조회. wtmp·lastlog·utmp도 바이너리."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "last 명령은 /var/log/wtmp를 읽어 로그인 성공·재부팅 이력을 보여준다.",
  "a": true,
  "e": "last=wtmp, lastb=btmp, lastlog=lastlog, who/w=utmp."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 2,
  "q": "rsyslog에서 '@logserver:514'는 TCP로 로그를 전송한다.",
  "a": false,
  "e": "@ 한 개=UDP, @@=TCP."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 3,
  "q": "로그 'Accepted password for app from 198.51.100.20'은 인증 실패 기록이다.",
  "a": false,
  "e": "Accepted password=로그인 성공. 실패는 Failed password."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 2,
  "q": "로그를 원격 로그 서버로 전송하면 공격자의 로컬 로그 삭제에 대비할 수 있다.",
  "a": true,
  "e": "원격 보관으로 증적 무결성 확보(로그 위변조 방지)."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 1,
  "q": "윈도우 이벤트 ID 4624는 로그온 성공을 의미한다.",
  "a": true,
  "e": "4624=성공, 4625=실패, 4634=로그오프."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "이벤트 ID 7045는 감사 로그 삭제를 의미한다.",
  "a": false,
  "e": "7045=새 서비스 설치. 감사 로그 삭제는 1102."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "윈도우에서 계정명을 바꾸어도 SID는 변하지 않는다.",
  "a": true,
  "e": "권한은 SID 기준 — 계정명 변경과 무관하게 SID 불변."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 3,
  "q": "Logon Type 3은 원격 데스크톱(RDP) 접속을 의미한다.",
  "a": false,
  "e": "3=네트워크(파일공유 등), RDP는 10."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "로컬 계정의 패스워드 해시는 SAM 데이터베이스에 저장된다.",
  "a": true,
  "e": "SAM(%SystemRoot%\\System32\\config\\SAM). 도메인 환경은 NTDS.dit."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 1,
  "q": "Virus는 숙주 파일 없이 독립적으로 네트워크를 통해 전파된다.",
  "a": false,
  "e": "숙주 없이 독립 전파는 Worm. Virus는 숙주 필요."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 2,
  "q": "논리폭탄은 특정 날짜·이벤트 등 조건이 충족될 때 악성 기능이 동작한다.",
  "a": true,
  "e": "Logic Bomb=조건 트리거. 탐지는 코드 리뷰."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 3,
  "q": "루트킷 감염이 의심되면 감염된 시스템의 ps·netstat 결과만으로 충분히 판단할 수 있다.",
  "a": false,
  "e": "루트킷이 명령 출력을 위조 — 외부 매체 부팅·무결성 비교·rkhunter 병행."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 1,
  "q": "strncpy·fgets·snprintf는 길이를 제한해 BOF 위험을 줄이는 대체 함수이다.",
  "a": true,
  "e": "strcpy·gets·sprintf의 안전 대체 함수."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "ASLR은 데이터 영역에서 코드 실행을 금지하는 기법이다.",
  "a": false,
  "e": "그것은 DEP(NX). ASLR은 메모리 주소 임의화."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 3,
  "q": "printf(\"%s\", input)은 포맷 스트링 취약점을 방지하는 올바른 사용법이다.",
  "a": true,
  "e": "사용자 입력을 포맷 문자열이 아닌 인자로 전달하면 %n 등 해석 방지."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 2,
  "q": "무결성 점검 기준선 DB는 침해가 의심된 시점에 생성하는 것이 가장 효과적이다.",
  "a": false,
  "e": "침해 후 기준선은 오염 상태를 정상으로 기록 — 도입 직후 생성."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 1,
  "q": "kill -9는 프로세스를 SIGKILL로 강제 종료한다.",
  "a": true,
  "e": "kill -15(SIGTERM)=정상 종료, kill -9(SIGKILL)=강제 종료."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "TCP 3-way Handshake에서 서버의 응답 ack 번호는 클라이언트 seq + 1이다.",
  "a": true,
  "e": "±1 규칙."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "Closed TCP 포트에 SYN을 보내면 SYN+ACK가 돌아온다.",
  "a": false,
  "e": "Closed → RST."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "traceroute는 TTL을 1씩 늘리며 각 홉이 돌려주는 ICMP Type 11을 이용한다.",
  "a": true,
  "e": "Time Exceeded."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "ARP는 요청을 보내지 않았어도 수신한 Reply를 캐시에 반영할 수 있다.",
  "a": true,
  "e": "무상태 — 스푸핑의 원인."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 1,
  "q": "SYN 스캔은 3-way Handshake를 완성하지 않는다.",
  "a": true,
  "e": "SYN+ACK 수신 후 RST."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "NULL 스캔은 SYN·ACK 두 플래그만 켠 패킷을 보낸다.",
  "a": false,
  "e": "모든 플래그 0."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "TCP Connect 스캔은 대상 서비스 로그에 접속 기록이 남아 탐지가 쉽다.",
  "a": true,
  "e": "3-way 완성."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 3,
  "q": "Windows 계열처럼 RFC 793을 따르지 않는 스택에서는 FIN·NULL·XMAS 스캔 결과가 부정확할 수 있다.",
  "a": true,
  "e": "모든 포트가 RST로 응답해 Closed로 보일 수 있음."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 1,
  "q": "SYN Cookie는 SYN 정보를 Backlog 큐에 더 많이 저장하는 방식이다.",
  "a": false,
  "e": "큐에 저장하지 않고 ISN에 인코딩."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "Fraggle은 ICMP 대신 UDP echo·chargen을 이용한 증폭 공격이다.",
  "a": true,
  "e": "Smurf의 UDP 버전."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "Slowloris는 대량의 패킷으로 대역폭을 소진시키는 Volume 공격이다.",
  "a": false,
  "e": "저대역 L7 — 연결 슬롯 고갈."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "Land 공격은 출발지와 목적지 IP를 같게 만든 패킷을 이용한다.",
  "a": true,
  "e": "Ingress Filtering으로 대응."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 3,
  "q": "증폭 공격 대응으로 자기 네트워크에서 나가는 패킷 중 내부 대역이 아닌 출발지 주소를 차단(Egress Filtering)하는 것도 유효하다.",
  "a": true,
  "e": "BCP 38 — 위조 출발지 송출 방지."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 1,
  "q": "스니핑은 기밀성을 위협하는 수동적 공격이다.",
  "a": true,
  "e": "변조 없음."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "스위치 환경에서는 ARP 스푸핑이나 MAC Flooding 없이도 다른 호스트의 유니캐스트를 그대로 볼 수 있다.",
  "a": false,
  "e": "스위치는 목적지 포트로만 전달 — 선행 공격이나 SPAN 필요."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "Port Security는 포트당 허용 MAC 수를 제한해 MAC Flooding을 완화한다.",
  "a": true,
  "e": "위반 시 shutdown/restrict."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "DoH·DoT는 DNS 응답에 전자서명을 붙여 위조를 검증하는 기술이다.",
  "a": false,
  "e": "전송 암호화. 서명 검증은 DNSSEC."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 3,
  "q": "쿠키에 HttpOnly 속성을 주면 HTTPS가 아닌 연결에서는 쿠키가 전송되지 않는다.",
  "a": false,
  "e": "HTTPS 전용은 Secure, HttpOnly는 스크립트 접근 차단."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 1,
  "q": "tcpdump의 -w 옵션은 캡처를 파일로 저장한다.",
  "a": true,
  "e": "-r로 읽기."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "tcp.flags.syn == 1 은 tcpdump 캡처 필터 문법이다.",
  "a": false,
  "e": "Wireshark 디스플레이 필터."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "tcpdump -nn 은 IP와 포트 이름 변환을 모두 끈다.",
  "a": true,
  "e": "-n은 IP만."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 3,
  "q": "덤프에서 한 출발지가 여러 목적지 포트로 SYN을 보내고 대부분 RST가 돌아온다면 포트 스캔을 의심할 수 있다.",
  "a": true,
  "e": "Closed 포트의 RST."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 1,
  "q": "iptables -A 는 체인의 맨 앞에 룰을 넣는다.",
  "a": false,
  "e": "맨 끝. 맨 앞은 -I."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "iptables 룰은 재부팅해도 자동으로 유지된다.",
  "a": false,
  "e": "iptables-save 등으로 영구 저장 필요."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "REJECT 타깃은 상대에게 거부 응답을 회신한다.",
  "a": true,
  "e": "ICMP Unreachable 또는 TCP RST."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 1,
  "q": "IDS는 트래픽 경로에 inline으로 배치되어 공격 패킷을 차단한다.",
  "a": false,
  "e": "그것은 IPS."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Snort 룰에서 -> 대신 <> 를 쓰면 양방향 트래픽을 검사한다.",
  "a": true,
  "e": "방향 연산자."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Anomaly 탐지는 Signature 탐지보다 오탐이 적다.",
  "a": false,
  "e": "일반적으로 오탐이 더 많다."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 1,
  "q": "AH는 무결성과 출처 인증을 제공하지만 암호화는 제공하지 않는다.",
  "a": true,
  "e": "암호화는 ESP."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 2,
  "q": "WEP은 RC4와 짧은 24비트 IV 재사용 문제로 취약하다.",
  "a": true,
  "e": "WPA2(AES-CCMP)·WPA3 사용 권장."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 1,
  "q": "HTTP 상태코드 401 은 인증이 필요하거나 인증에 실패했음을 의미한다.",
  "a": true,
  "e": "권한 부족은 403."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 1,
  "q": "상태 변경(삭제·송금) 요청은 GET 메서드로 처리하는 것이 안전하다.",
  "a": false,
  "e": "GET 은 조회 전용. 상태 변경은 POST 등 + CSRF 토큰."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "HSTS 헤더는 브라우저가 해당 도메인에 HTTPS 로만 접속하도록 강제한다.",
  "a": true,
  "e": "Strict-Transport-Security: max-age=..."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "HTTPS 를 적용하면 URL 쿼리 문자열은 서버 접근 로그에 남지 않는다.",
  "a": false,
  "e": "전송 구간만 암호화될 뿐 서버 로그에는 요청 URL 이 기록된다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 1,
  "q": "PreparedStatement 를 사용하면 입력값이 SQL 구문 구조로 해석되지 않는다.",
  "a": true,
  "e": "쿼리 구조가 미리 컴파일되고 입력은 데이터로만 바인딩된다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 1,
  "q": "XSS 의 근본 대책은 쿠키에 HttpOnly 속성을 설정하는 것이다.",
  "a": false,
  "e": "근본 대책은 출력 인코딩. HttpOnly 는 피해 축소."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "MyBatis 의 #{} 표기는 내부적으로 PreparedStatement 바인딩을 사용한다.",
  "a": true,
  "e": "${} 는 문자열 치환이라 위험."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "DOM 기반 XSS 는 항상 서버 접근 로그에 공격 흔적이 남는다.",
  "a": false,
  "e": "클라이언트 측(예: URL 프래그먼트 처리)에서만 발생해 서버 로그에 남지 않을 수 있다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "SSRF 대응을 위해 클라우드 메타데이터 주소(169.254.169.254) 접근을 차단한다.",
  "a": true,
  "e": "AWS 는 IMDSv2(세션 토큰 필요) 적용 권고."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 3,
  "q": "입력값 차단목록(블랙리스트) 필터만으로 인젝션 계열 취약점을 완전히 방어할 수 있다.",
  "a": false,
  "e": "차단목록은 우회 여지가 있어 보조 수단. 근본은 코드·데이터 분리와 허용목록."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 1,
  "q": "Secure 속성이 있는 쿠키는 HTTPS 연결에서만 전송된다.",
  "a": true,
  "e": "쿠키 값 자체를 암호화하지는 않는다."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "SameSite=Lax 쿠키는 다른 사이트에서 발생한 POST 요청에 전송되지 않는다.",
  "a": true,
  "e": "Lax 는 최상위 GET 이동에만 전송."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "세션 고정 공격은 로그인 후 세션 ID 를 재발급하면 방어할 수 있다.",
  "a": true,
  "e": "Java Servlet 3.1+ request.changeSessionId()."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 3,
  "q": "XSS 취약점이 없다면 CSRF 공격은 발생할 수 없다.",
  "a": false,
  "e": "CSRF 는 XSS 없이도 외부 사이트에서 위조 요청을 보내는 방식으로 발생한다."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 1,
  "q": "파일 업로드 시 확장자 허용목록 방식이 차단목록 방식보다 안전하다.",
  "a": true,
  "e": "필요한 확장자만 허용."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "업로드 파일은 웹루트 외부에 저장하고 다운로드 전용 핸들러로 제공하는 것이 좋다.",
  "a": true,
  "e": "URL 로 직접 접근·실행되는 것을 막는다."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "파일 다운로드 시 경로를 정규화(getCanonicalPath)한 뒤 허용 디렉터리 하위인지 검증한다.",
  "a": true,
  "e": "정규화 전 문자열 비교는 우회 가능성이 있다."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 1,
  "q": "Apache Combined 로그의 %h 는 클라이언트 IP 주소를 의미한다.",
  "a": true,
  "e": "%t 시간, %r 요청 라인, %>s 최종 상태코드."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 2,
  "q": "웹 로그 상태코드가 200 이면 공격은 반드시 성공한 것이다.",
  "a": false,
  "e": "응답 크기·내용을 정상 응답과 비교해야 판단 가능."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 2,
  "q": "짧은 시간에 다수의 404 응답이 한 IP 에서 발생하면 경로 탐색(스캐닝) 정황으로 본다.",
  "a": true,
  "e": "존재하지 않는 경로를 대량 요청하는 패턴."
 },
 {
  "s": "s3",
  "t": "시큐어코딩",
  "d": 1,
  "q": "운영 환경에서는 상세 오류 메시지 대신 일반 오류 페이지를 보여 준다.",
  "a": true,
  "e": "상세 내용은 서버 로그에만."
 },
 {
  "s": "s3",
  "t": "시큐어코딩",
  "d": 2,
  "q": "CSP 를 적용하면 출력 인코딩은 생략해도 된다.",
  "a": false,
  "e": "CSP 는 보조 방어. 출력 인코딩은 필수."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 1,
  "q": "Apache 의 ServerTokens Prod 설정은 응답 헤더의 버전 정보 노출을 최소화한다.",
  "a": true,
  "e": "ServerSignature Off 와 함께."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 2,
  "q": "DNSSEC 은 DNS 질의와 응답을 암호화해 기밀성을 제공한다.",
  "a": false,
  "e": "서명으로 무결성·출처 인증만. 암호화는 DoH·DoT."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 1,
  "q": "DES의 실효 키 길이는 56bit이다.",
  "a": true,
  "e": "64bit 중 패리티 8bit를 제외한 56bit."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 2,
  "q": "AES-256의 라운드 수는 10이다.",
  "a": false,
  "e": "AES-128=10, AES-192=12, AES-256=14."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 2,
  "q": "Feistel 구조는 암호화와 복호화 회로가 동일하다.",
  "a": true,
  "e": "F함수의 역함수가 필요 없어 같은 회로에 키 순서만 바꿔 쓴다."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 3,
  "q": "OFB·CTR 모드는 암호문 1비트 오류가 해당 비트에만 영향을 준다.",
  "a": true,
  "e": "스트림 성질로 오류가 전파되지 않는다. CBC는 다음 블록까지 전파."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 1,
  "q": "Diffie-Hellman은 이산대수 문제에 기반한다.",
  "a": true,
  "e": "DH=이산대수, RSA=소인수분해."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "부인방지를 위해서는 송신자의 공개키로 서명한다.",
  "a": false,
  "e": "서명은 송신자 개인키로, 검증은 송신자 공개키로 한다."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "DH 키 교환에서 양측은 비밀지수 a·b를 상대에게 전송한다.",
  "a": false,
  "e": "g^a mod p, g^b mod p만 전송하고 a·b는 전송하지 않는다."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 3,
  "q": "정적 RSA 키 전송 방식의 TLS는 서버 개인키 유출 시 과거 녹화 세션이 복호될 수 있다.",
  "a": true,
  "e": "세션키가 서버 장기 공개키로 암호화돼 전달되므로 PFS가 없다. DHE·ECDHE가 PFS 제공."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 1,
  "q": "해시 함수는 임의 길이 입력에 대해 고정 길이 출력을 만든다.",
  "a": true,
  "e": "출력=다이제스트(예 SHA-256은 256bit)."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "전자서명만으로 메시지 내용의 기밀성이 보장된다.",
  "a": false,
  "e": "서명은 무결성·인증·부인방지. 기밀성은 수신자 공개키 암호화를 병행해야 한다."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "HMAC은 공유 비밀키를 사용하므로 부인방지를 제공한다.",
  "a": false,
  "e": "양측이 같은 키를 가지므로 누가 만들었는지 증명할 수 없다. 부인방지는 전자서명."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 3,
  "q": "$ openssl dgst -sha256 file 명령은 file의 SHA-256 다이제스트를 출력한다.",
  "a": true,
  "e": "openssl dgst로 해시를 계산한다. -sha256 옵션 지정."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 1,
  "q": "솔트는 레인보우 테이블 공격을 무력화한다.",
  "a": true,
  "e": "사용자별 난수로 같은 비밀번호도 해시가 달라져 사전계산표가 무용."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 2,
  "q": "SHA-256의 충돌저항 강도는 2^256이다.",
  "a": false,
  "e": "생일 공격으로 2^(n/2)=2^128."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 2,
  "q": "키 스트레칭은 해시를 반복 적용해 무차별 대입 속도를 늦춘다.",
  "a": true,
  "e": "PBKDF2·bcrypt·scrypt·Argon2."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 3,
  "q": "PHP에서 password_hash($pw, PASSWORD_BCRYPT)를 사용하면 솔트를 별도로 생성해 저장해야 한다.",
  "a": false,
  "e": "password_hash는 솔트·비용 인자를 결과 문자열에 자동 포함하며 password_verify로 검증한다."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 1,
  "q": "비밀번호와 PIN을 함께 요구하는 것은 2요소 인증이다.",
  "a": false,
  "e": "둘 다 지식 요소라 MFA가 아니다."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 2,
  "q": "HOTP는 HMAC과 카운터 값을 이용해 OTP를 생성한다.",
  "a": true,
  "e": "HOTP=HMAC+카운터(RFC 4226), TOTP=HMAC+시간(RFC 6238)."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 2,
  "q": "생체인증에서 EER이 낮을수록 우수한 시스템이다.",
  "a": true,
  "e": "EER은 FAR=FRR 교차점이며 낮을수록 정확."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 3,
  "q": "TOTP 서버는 단말과의 시계 오차를 허용하기 위해 시간 윈도우를 둔다.",
  "a": true,
  "e": "TOTP는 시간 동기 기반이라 오차 윈도우가 필요하다."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 1,
  "q": "Kerberos는 대칭키 기반 티켓을 사용하는 인증 프로토콜이다.",
  "a": true,
  "e": "RFC 4120. 공개키 기반이 아니다."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 2,
  "q": "Kerberos에서 TGT는 TGS가 최초로 발급한다.",
  "a": false,
  "e": "TGT는 AS가 발급하고, TGS는 TGT를 검증해 서비스 티켓을 발급한다."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 2,
  "q": "Kerberos 인증 과정에서 사용자 비밀번호는 네트워크로 전송되지 않는다.",
  "a": true,
  "e": "AS가 사용자 비밀키로 암호화한 응답을 보내 정당한 사용자만 복호한다."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 3,
  "q": "FIDO 서버 DB가 유출되면 저장된 정보로 사용자 인증을 위조할 수 있다.",
  "a": false,
  "e": "서버엔 공개키만 있어 개인키 없이 챌린지 서명을 만들 수 없다."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 1,
  "q": "루트 CA의 인증서는 자기 서명(self-signed) 인증서이다.",
  "a": true,
  "e": "최상위 신뢰점이라 스스로 서명한다."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 2,
  "q": "CRL은 특정 인증서 상태를 실시간으로 질의하는 프로토콜이다.",
  "a": false,
  "e": "실시간 질의는 OCSP. CRL은 폐기목록을 주기적으로 일괄 다운로드."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 3,
  "q": "인증서의 Validity 기간이 남아 있어도 CRL에 일련번호가 등재되어 있으면 유효하지 않다.",
  "a": true,
  "e": "폐기(revoked) 인증서는 유효기간과 무관하게 신뢰하면 안 된다."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 1,
  "q": "BLP 모델은 기밀성을 보호하는 모델이다.",
  "a": true,
  "e": "No Read Up·No Write Down."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 2,
  "q": "Biba 모델에서 하위 등급 주체는 상위 등급 객체에 쓸 수 있다.",
  "a": false,
  "e": "Biba는 No Write Up — 하위 주체의 상위 쓰기 금지."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 3,
  "q": "접근통제 행렬을 주체(행) 기준으로 저장한 것이 ACL이다.",
  "a": false,
  "e": "주체(행) 기준=Capability List, 객체(열) 기준=ACL."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 1,
  "q": "지침(Guideline)은 강제력이 없는 권고·참고 문서이다.",
  "a": true,
  "e": "지침은 권고(선택), 표준이 강제."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 2,
  "q": "CISO와 CPO는 모두 개인정보보호법에 근거한다.",
  "a": false,
  "e": "CISO는 정보통신망법 제45조의3, CPO는 개인정보보호법 제31조."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 2,
  "q": "CISO와 CPO는 동일인이 겸할 수 있으나 법적 근거와 역할이 다르다.",
  "a": true,
  "e": "별개 직위로 근거·역할 상이."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 1,
  "q": "ISMS-P 인증기준은 총 102개 통제로 구성된다.",
  "a": true,
  "e": "16 + 64 + 22 = 102."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS 인증만 받는 경우에도 개인정보 처리단계별 요구사항(22개)을 적용한다.",
  "a": false,
  "e": "ISMS는 1+2영역(80개), 3영역은 ISMS-P에만."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 사후심사는 유효기간 3년 동안 연 1회 이상 수행한다.",
  "a": true,
  "e": "사후심사 연 1회 이상, 갱신은 만료 전."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증 절차에서 결함조치는 심의 이후 인증서 발급 다음에 수행한다.",
  "a": false,
  "e": "심사 → 결함조치 → 심의 → 인증서 발급."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "ALE는 SLE에 ARO를 곱한 값이다.",
  "a": true,
  "e": "ALE = SLE × ARO."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "자산가치 1억원, EF 50%이면 SLE는 5,000만원이다.",
  "a": true,
  "e": "SLE = AV × EF = 1억 × 0.5."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "정량적 분석은 주관적이며 결과를 상·중·하 등급으로 표현한다.",
  "a": false,
  "e": "정량=객관·금액, 정성=주관·등급."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "보안대책 비용이 예상 손실보다 커서 DoA 이하의 위험을 그대로 인정했다면 위험수용이다.",
  "a": true,
  "e": "대책비용 > 손실 시 DoA 이하 잔여위험 인정 = 수용."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "중요 업무를 외부 전문업체에 아웃소싱해 위험을 이전한 것은 위험회피이다.",
  "a": false,
  "e": "아웃소싱은 위험전가. 회피는 활동 중단."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "위험평가 결과가 DoA를 초과하면 감소·전가·회피 등으로 처리한다.",
  "a": true,
  "e": "DoA 초과 위험은 처리 대상."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "델파이법은 정량적 위험분석 기법이다.",
  "a": false,
  "e": "델파이법은 정성적(전문가 익명 반복 설문)."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "RPO는 복구 가능한 데이터 시점, 즉 허용 데이터 손실량을 의미한다.",
  "a": true,
  "e": "RPO = Recovery Point Objective."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "DR 사이트 중 Cold 사이트가 RTO가 가장 짧다.",
  "a": false,
  "e": "RTO는 Mirror < Hot < Warm < Cold, Cold가 가장 김."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "DR 사이트의 비용과 RTO는 반비례 관계이다.",
  "a": true,
  "e": "빠를수록 비싸다: Mirror가 최고비용·최단 RTO."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 3,
  "q": "MTD 72시간, RTO 60시간이면 WRT는 최대 12시간이다.",
  "a": true,
  "e": "MTD = RTO + WRT → 72 − 60 = 12."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "BIA는 BCP 수립이 완료된 후 검증 단계에서 수행한다.",
  "a": false,
  "e": "BIA는 BCP 수립의 출발점."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 3,
  "q": "백업 주기를 1일에서 1시간으로 줄이면 RPO가 작아지고 비용은 증가한다.",
  "a": true,
  "e": "RPO가 작을수록 백업 주기가 짧아 비용 증가."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 1,
  "q": "법인의 정보는 개인정보에 해당하지 않는다.",
  "a": true,
  "e": "개인정보는 살아있는 개인에 관한 정보."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "가명정보는 개인정보에 포함되지 않는다.",
  "a": false,
  "e": "가명정보도 개인정보에 포함(추가정보 결합 시 식별 가능)."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 3,
  "q": "정보주체가 명시적으로 동의하면 법령 근거가 없어도 주민등록번호를 수집할 수 있다.",
  "a": false,
  "e": "주민등록번호는 법령 근거 필수, 동의로도 불가."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "제3자 제공 시에는 제공받는 자·목적·항목·보유기간을 고지하고 별도 동의를 받아야 한다.",
  "a": true,
  "e": "제3자 제공의 고지 사항과 별도 동의."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 3,
  "q": "콜센터 업무 위탁 시 수탁자 관리·감독 책임은 수탁자에게만 있다.",
  "a": false,
  "e": "위탁 시 관리·감독 책임은 위탁자."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 2,
  "q": "개인정보 유출 통지는 '지체없이'로 충분하며 시간 제한은 없다.",
  "a": false,
  "e": "안 때부터 72시간 이내."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 1,
  "q": "1,000명 이상 개인정보 유출 시 72시간 이내 개인정보위 또는 KISA에 신고한다.",
  "a": true,
  "e": "기관 신고 기준."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 3,
  "q": "고유식별정보를 처리하는 시스템의 접속기록은 1년만 보관하면 된다.",
  "a": false,
  "e": "고유식별정보·민감정보 처리 시 2년 이상."
 },
 {
  "s": "s5",
  "t": "망법·신용·망분리",
  "d": 2,
  "q": "영리목적 광고성 정보 수신동의 여부는 2년마다 확인해야 한다.",
  "a": true,
  "e": "정보통신망법상 2년마다 확인."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 2,
  "q": "EAL7을 받은 제품은 EAL4 제품보다 반드시 보안 기능이 강하다.",
  "a": false,
  "e": "EAL은 보증(평가 신뢰) 수준이지 보안 강도가 아님."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 1,
  "q": "-rwxr-x--- 를 8진수 3자리로 쓰면?",
  "a": "750",
  "k": [
   "750"
  ],
  "e": "rwx=7, r-x=5, ---=0."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "umask 027일 때 새로 생성되는 일반 파일의 기본 권한(8진수)은?",
  "a": "640",
  "k": [
   "640"
  ],
  "e": "파일 666 & ~027 = 640. 디렉터리는 750."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "umask 077일 때 새로 생성되는 디렉터리의 기본 권한(8진수)은?",
  "a": "700",
  "k": [
   "700"
  ],
  "e": "디렉터리 777 & ~077 = 700, 파일은 600."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 1,
  "q": "/tmp 디렉터리의 표준 권한을 특수권한 포함 8진수 4자리로 쓰면?",
  "a": "1777",
  "k": [
   "1777"
  ],
  "e": "Sticky(1000) + 777 = drwxrwxrwt."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "-rwsrwxrwx 권한을 8진수 4자리로 쓰면?",
  "a": "4777",
  "k": [
   "4777"
  ],
  "e": "SetUID 4 + rwx 7·7·7. 777만 쓰면 SetUID 누락."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 1,
  "q": "공용 디렉터리에서 본인 파일만 삭제하도록 제한하는 특수 권한의 이름은?",
  "a": "Sticky Bit",
  "k": [
   "sticky"
  ],
  "e": "권한값 1000, o의 x자리에 t 표기."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 3,
  "q": "SetUID와 SetGID가 모두 설정된 파일을 찾는 명령: find / -perm ____ -type f — 빈칸은?",
  "a": "-6000",
  "k": [
   "6000"
  ],
  "e": "4000+2000. 하이픈은 '포함' 검색."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 2,
  "q": "파일에 SetUID를 부여하는 심볼릭 방식 chmod 인자는?",
  "a": "u+s",
  "k": [
   "u+s"
  ],
  "e": "8진수 방식은 chmod 4755. 제거는 u-s."
 },
 {
  "s": "s1",
  "t": "Linux 권한",
  "d": 3,
  "q": "불필요한 SetUID 권한을 제거하는 심볼릭 방식 chmod 명령은?",
  "a": "chmod u-s 파일",
  "k": [
   "chmod",
   "us"
  ],
  "e": "또는 8진수로 chmod 0755."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "/etc/passwd의 세 번째 필드는?",
  "a": "UID",
  "k": [
   "uid"
  ],
  "e": "계정명:x:UID:GID:GECOS:홈:셸."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "/etc/shadow 해시 접두어 $6$가 나타내는 해시 알고리즘은?",
  "a": "SHA-512",
  "k": [
   "sha512"
  ],
  "e": "$1$=MD5, $5$=SHA-256, $6$=SHA-512."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "로그인을 차단하기 위해 /etc/passwd 7번째 필드에 지정하는 셸 경로는?",
  "a": "/sbin/nologin",
  "k": [
   "nologin"
  ],
  "e": "배포판에 따라 /usr/sbin/nologin, /bin/false도 사용."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "계정을 잠그는 passwd 명령 옵션은? (명령 전체)",
  "a": "passwd -l",
  "k": [
   "passwd -l"
  ],
  "e": "shadow 해시 앞에 !를 추가. 해제는 passwd -u, usermod -L/-U와 동일 효과."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "/etc/login.defs에서 패스워드 최대 사용일을 지정하는 항목명은?",
  "a": "PASS_MAX_DAYS",
  "k": [
   "pass_max_days"
  ],
  "e": "예 PASS_MAX_DAYS 90. 최소는 PASS_MIN_DAYS, 경고는 PASS_WARN_AGE."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 3,
  "q": "기존 계정의 패스워드 만료 정보를 조회·변경하는 명령은?",
  "a": "chage",
  "k": [
   "chage"
  ],
  "e": "chage -l user 조회, chage -M 90 user 최대 사용일 변경."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "패스워드 복잡도를 검사하는 PAM 모듈명은?",
  "a": "pam_pwquality.so",
  "k": [
   "pwquality"
  ],
  "e": "설정 파일 /etc/security/pwquality.conf (구 pam_cracklib)."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "로그인 N회 실패 시 계정을 잠그는 PAM 모듈명은?",
  "a": "pam_faillock.so",
  "k": [
   "faillock"
  ],
  "e": "deny=5 unlock_time=900 형식 (구 pam_tally2)."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "wheel 그룹 사용자만 su를 허용하기 위해 /etc/pam.d/su에 설정하는 PAM 모듈명은?",
  "a": "pam_wheel.so",
  "k": [
   "pam_wheel"
  ],
  "e": "auth required pam_wheel.so use_uid."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 1,
  "q": "/etc/sudoers를 문법 검사와 함께 안전하게 편집하는 명령은?",
  "a": "visudo",
  "k": [
   "visudo"
  ],
  "e": "직접 편집 시 문법 오류로 sudo 전체 불능 위험."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "PAM 제어 플래그 중 실패 시 즉시 중단·실패를 반환하는 것은?",
  "a": "requisite",
  "k": [
   "requisite"
  ],
  "e": "required는 끝까지 수행 후 최종 실패."
 },
 {
  "s": "s1",
  "t": "계정·인증",
  "d": 2,
  "q": "PAM 4개 타입 중 계정 만료·접근 시간 등 계정 유효성을 검사하는 타입은?",
  "a": "account",
  "k": [
   "account"
  ],
  "e": "auth=인증, password=변경, session=세션."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "로그인 실패 이력이 저장되는 바이너리 로그 파일 경로는?",
  "a": "/var/log/btmp",
  "k": [
   "btmp"
  ],
  "e": "조회 명령 lastb."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "로그인 성공·로그아웃·재부팅 이력이 저장되는 바이너리 로그 파일 경로는?",
  "a": "/var/log/wtmp",
  "k": [
   "wtmp"
  ],
  "e": "조회 명령 last."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 2,
  "q": "현재 로그인한 사용자 정보가 저장되는 파일(who·w가 참조)은?",
  "a": "/var/run/utmp",
  "k": [
   "utmp"
  ],
  "e": "현재 접속자 정보 — 바이너리."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "사용자별 마지막 로그인 시각을 출력하는 명령은?",
  "a": "lastlog",
  "k": [
   "lastlog"
  ],
  "e": "/var/log/lastlog를 읽는다."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "RHEL/CentOS 계열에서 인증·sudo 기록이 남는 로그 파일 경로는?",
  "a": "/var/log/secure",
  "k": [
   "secure"
  ],
  "e": "Debian 계열은 /var/log/auth.log."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "Debian/Ubuntu 계열의 인증 로그 파일 경로는?",
  "a": "/var/log/auth.log",
  "k": [
   "auth.log"
  ],
  "e": "RHEL 계열은 /var/log/secure."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 2,
  "q": "rsyslog에서 로그를 TCP로 원격 전송할 때 서버 주소 앞에 붙이는 기호는?",
  "a": "@@",
  "k": [
   "@@"
  ],
  "e": "@=UDP, @@=TCP. 예 *.* @@logserver:514."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 1,
  "q": "systemd journald 로그를 조회하는 명령은?",
  "a": "journalctl",
  "k": [
   "journalctl"
  ],
  "e": "journalctl -u sshd, --since \"1 hour ago\"."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 2,
  "q": "syslog Severity 중 숫자 0에 해당하는 가장 심각한 수준의 키워드는?",
  "a": "emerg",
  "k": [
   "emerg"
  ],
  "e": "0 emerg ~ 7 debug, 숫자가 낮을수록 심각."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 3,
  "q": "SSH 인증 실패 줄만 추출하는 명령: grep \"________\" /var/log/secure — 빈칸 문자열은?",
  "a": "Failed password",
  "k": [
   "failed password"
  ],
  "e": "성공은 Accepted password."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 3,
  "q": "반복 인증 실패 IP를 로그 기반으로 자동 차단하는 오픈소스 도구는?",
  "a": "fail2ban",
  "k": [
   "fail2ban"
  ],
  "e": "임계 실패 시 iptables 규칙으로 차단."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 1,
  "q": "윈도우 Security 로그에서 로그온 성공 이벤트 ID는?",
  "a": "4624",
  "k": [
   "4624"
  ],
  "e": "실패 4625, 로그오프 4634."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 1,
  "q": "윈도우에서 무차별 대입 공격 탐지의 핵심이 되는 로그온 실패 이벤트 ID는?",
  "a": "4625",
  "k": [
   "4625"
  ],
  "e": "단시간 다수 발생 시 Brute Force·패스워드 스프레이 의심."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "관리자급 특수 권한이 부여된 로그온을 나타내는 이벤트 ID는?",
  "a": "4672",
  "k": [
   "4672"
  ],
  "e": "권한 계정 사용 추적에 활용."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "보안 감사 로그 삭제를 나타내는 이벤트 ID는?",
  "a": "1102",
  "k": [
   "1102"
  ],
  "e": "공격자의 흔적 제거 신호."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "새 서비스 설치를 나타내는 이벤트 ID는? (System 로그)",
  "a": "7045",
  "k": [
   "7045"
  ],
  "e": "백도어 서비스 등록 의심 지표."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "원격 데스크톱(RDP) 접속을 나타내는 Logon Type 번호는?",
  "a": "10",
  "k": [
   "10"
  ],
  "e": "2=콘솔, 3=네트워크."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 1,
  "q": "윈도우 내장 Administrator 계정의 RID는?",
  "a": "500",
  "k": [
   "500"
  ],
  "e": "Guest=501, 일반 사용자 1000~."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 1,
  "q": "윈도우 로컬 계정 패스워드 해시가 저장되는 데이터베이스 약어는?",
  "a": "SAM",
  "k": [
   "sam"
  ],
  "e": "Security Account Manager, HKLM\\SAM."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 2,
  "q": "Mimikatz가 자격증명 탈취를 위해 메모리를 덤프하는 윈도우 프로세스명은?",
  "a": "lsass.exe",
  "k": [
   "lsass"
  ],
  "e": "LSA 서버 프로세스. 대응 Credential Guard."
 },
 {
  "s": "s1",
  "t": "Windows 보안",
  "d": 3,
  "q": "새 프로세스 생성을 기록하는 윈도우 보안 이벤트 ID는?",
  "a": "4688",
  "k": [
   "4688"
  ],
  "e": "악성 프로세스 실행 추적."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 1,
  "q": "숙주 없이 독립 실행되며 네트워크로 자가 전파하는 악성코드의 영문 명칭은?",
  "a": "Worm",
  "k": [
   "worm"
  ],
  "e": "Virus는 숙주 필요."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 1,
  "q": "커널 후킹 등으로 자신과 공격 흔적을 은닉하는 악성코드의 영문 명칭은?",
  "a": "Rootkit",
  "k": [
   "rootkit"
  ],
  "e": "탐지: chkrootkit, rkhunter, 무결성 비교."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 2,
  "q": "rkhunter와 함께 쓰이는 대표적 리눅스 루트킷 점검 도구는?",
  "a": "chkrootkit",
  "k": [
   "chkrootkit"
  ],
  "e": "외부 신뢰 매체 부팅 병행 권장."
 },
 {
  "s": "s1",
  "t": "악성코드",
  "d": 3,
  "q": "RPM 패키지 파일의 변조 여부를 전체 검증하는 명령은?",
  "a": "rpm -Va",
  "k": [
   "rpm",
   "va"
  ],
  "e": "Debian 계열은 debsums."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "Stack BOF에서 공격자가 덮어써 실행 흐름을 바꾸는 스택 상의 값(영문)은?",
  "a": "Return Address",
  "k": [
   "return address"
  ],
  "e": "쉘코드 주소로 바꿔 EIP/RIP 탈취."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 1,
  "q": "BOF 위험 함수 gets의 안전한 대체 함수는?",
  "a": "fgets",
  "k": [
   "fgets"
  ],
  "e": "버퍼 크기 인자로 입력 길이 제한."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 1,
  "q": "스택·힙·라이브러리 주소를 무작위 배치하는 메모리 보호 기법의 약어는?",
  "a": "ASLR",
  "k": [
   "aslr"
  ],
  "e": "Address Space Layout Randomization."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "리턴 주소 앞에 값을 두어 변조 시 프로그램을 중단시키는 기법은?",
  "a": "Stack Canary",
  "k": [
   "canary"
  ],
  "e": "SSP(Stack Smashing Protector)로 구현."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "포맷 스트링 취약점에서 메모리에 값을 쓰게 하는 서식 지시자는?",
  "a": "%n",
  "k": [
   "%n"
  ],
  "e": "%x는 스택 메모리 누출."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 3,
  "q": "레이스 컨디션 방지를 위해 안전하게 고유 임시파일을 생성하는 C 함수는?",
  "a": "mkstemp",
  "k": [
   "mkstemp"
  ],
  "e": "O_CREAT|O_EXCL로 원자적 생성."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 2,
  "q": "AIDE에서 기준선 DB를 최초 생성하는 명령은?",
  "a": "aide --init",
  "k": [
   "aide",
   "init"
  ],
  "e": "비교는 aide --check, 갱신은 aide --update."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 3,
  "q": "8080 포트를 사용하는 프로세스를 lsof로 확인하는 명령은?",
  "a": "lsof -i :8080",
  "k": [
   "lsof",
   "i:8080"
  ],
  "e": "netstat -ntlp | grep 8080 도 가능."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 3,
  "q": "PID의 실제 실행파일 경로를 확인하는 /proc 하위 심볼릭 링크 경로는?",
  "a": "/proc/PID/exe",
  "k": [
   "exe"
  ],
  "e": "ls -l /proc/PID/exe 로 확인."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "TCP 연결 수립 3단계의 플래그를 순서대로 쓰시오.",
  "a": "SYN, SYN+ACK, ACK",
  "k": [
   "syn",
   "syn+ack"
  ],
  "e": "ack = 상대 seq + 1."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "연결을 강제로 끊거나 Closed 포트가 응답할 때 쓰는 TCP 플래그는?",
  "a": "RST",
  "k": [
   "rst"
  ],
  "e": "Closed 포트 + SYN → RST."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "4-way 종료에서 마지막 ACK를 보낸 능동 종료 측이 2MSL 동안 머무는 상태는?",
  "a": "TIME_WAIT",
  "k": [
   "time_wait"
  ],
  "e": "지연 패킷 소멸·ACK 재전송 보장."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "UDP Closed 포트가 회신하는 ICMP 메시지의 Type과 Code는? (예: Type x Code y)",
  "a": "Type 3 Code 3",
  "k": [
   "type 3 code 3",
   "type3 code3"
  ],
  "e": "Port Unreachable."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "IP 주소를 MAC 주소로 변환하는 프로토콜은?",
  "a": "ARP",
  "k": [
   "arp"
  ],
  "e": "L2, 같은 브로드캐스트 도메인."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "DNS Zone Transfer가 사용하는 전송 계층 프로토콜과 포트는?",
  "a": "TCP 53",
  "k": [
   "tcp 53",
   "tcp/53"
  ],
  "e": "일반 질의는 UDP 53."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 2,
  "q": "traceroute가 경로 추적에 이용하는 ICMP Type 번호는?",
  "a": "11",
  "k": [
   "11"
  ],
  "e": "Time Exceeded."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 1,
  "q": "3-way를 완성하지 않아 '스텔스 스캔'으로 불리는 스캔은?",
  "a": "SYN 스캔",
  "k": [
   "syn"
  ],
  "e": "SYN+ACK 받으면 RST."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "FIN·PSH·URG 세 플래그를 켠 패킷을 이용하는 스캔은?",
  "a": "XMAS 스캔",
  "k": [
   "xmas"
  ],
  "e": "무응답=Open, RST=Closed."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "모든 TCP 플래그를 0으로 둔 패킷을 이용하는 스캔은?",
  "a": "NULL 스캔",
  "k": [
   "null"
  ],
  "e": "Snort에서는 flags:0 으로 탐지."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "포트 개방 여부가 아니라 방화벽의 필터링 여부를 파악하는 스캔은?",
  "a": "ACK 스캔",
  "k": [
   "ack"
  ],
  "e": "RST=unfiltered."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 3,
  "q": "제3의 유휴 호스트(좀비)의 IPID 증가를 이용해 실제 출발지를 숨기는 스캔은?",
  "a": "Idle 스캔",
  "k": [
   "idle"
  ],
  "e": "좀비 IPID 관찰."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 3,
  "q": "iptables에서 NULL 패킷을 차단할 때 --tcp-flags 뒤에 오는 두 인자를 쓰시오.",
  "a": "ALL NONE",
  "k": [
   "all none"
  ],
  "e": "검사 대상 ALL 중 켜진 플래그 NONE."
 },
 {
  "s": "s2",
  "t": "스캔 탐지",
  "d": 2,
  "q": "nmap에서 서비스 배너를 이용해 버전을 식별하는 옵션은? (방어 측은 배너 최소화로 대응)",
  "a": "-sV",
  "k": [
   "-sv",
   "sv"
  ],
  "e": "버전 정보 노출 줄이기."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 1,
  "q": "SYN Flood에 대응해 Backlog에 저장하지 않고 ISN에 연결 정보를 담는 기법은?",
  "a": "SYN Cookie",
  "k": [
   "syn cookie",
   "syncookie"
  ],
  "e": "Linux tcp_syncookies=1."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "SYN Cookie를 켜는 Linux 커널 파라미터 이름은?",
  "a": "net.ipv4.tcp_syncookies",
  "k": [
   "tcp_syncookies",
   "net.ipv4.tcp_syncookies"
  ],
  "e": "sysctl -w net.ipv4.tcp_syncookies=1."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "SYN Flood가 고갈시키는 반연결 대기 큐의 이름은?",
  "a": "Backlog 큐",
  "k": [
   "backlog"
  ],
  "e": "SYN_RECV 상태 누적."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "ICMP Echo + 출발지 위조 + 브로드캐스트로 응답을 증폭시키는 공격은?",
  "a": "Smurf",
  "k": [
   "smurf"
  ],
  "e": "대응: Directed Broadcast 차단."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "HTTP 헤더를 완료하지 않고 연결을 오래 유지해 웹서버 연결 슬롯을 고갈시키는 공격은?",
  "a": "Slowloris",
  "k": [
   "slowloris"
  ],
  "e": "헤더 타임아웃으로 대응."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 3,
  "q": "Apache에서 요청 헤더·본문 수신 시간을 제한해 Slowloris를 완화하는 모듈은?",
  "a": "mod_reqtimeout",
  "k": [
   "mod_reqtimeout",
   "reqtimeout"
  ],
  "e": "RequestReadTimeout 지시자."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "출발지 IP와 목적지 IP를 같게 만든 패킷을 이용하는 DoS는?",
  "a": "Land 공격",
  "k": [
   "land"
  ],
  "e": "Ingress Filtering."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 3,
  "q": "IP Fragment Offset을 서로 겹치게 조작해 재조립 오류를 유발하는 공격은?",
  "a": "Teardrop",
  "k": [
   "teardrop"
  ],
  "e": "패치·재조립 검증."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "DDoS 3분류 중 HTTP Flood·Slowloris가 속하는 계층 유형은?",
  "a": "Application",
  "k": [
   "application"
  ],
  "e": "Volume·Protocol·Application."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 1,
  "q": "NIC가 자기 MAC이 아닌 프레임도 수신하도록 하는 모드는?",
  "a": "Promiscuous Mode",
  "k": [
   "promiscuous"
  ],
  "e": "스니핑 전제."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "위조 ARP Reply로 게이트웨이 MAC을 바꿔 트래픽을 가로채는 공격은?",
  "a": "ARP 스푸핑",
  "k": [
   "arp 스푸핑"
  ],
  "e": "MITM 진입 수단."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "DHCP Snooping 바인딩 테이블로 위조 ARP를 차단하는 스위치 기능의 약어는?",
  "a": "DAI",
  "k": [
   "dai"
  ],
  "e": "Dynamic ARP Inspection."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "ARP 변경을 감시해 MAC 주소 변경을 경보하는 Linux 도구는?",
  "a": "arpwatch",
  "k": [
   "arpwatch"
  ],
  "e": "changed ethernet address 경보."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "위조 MAC을 대량으로 보내 스위치 CAM 테이블을 고갈시키는 공격은?",
  "a": "MAC Flooding",
  "k": [
   "mac flooding"
  ],
  "e": "Port Security로 대응."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "DNS 응답에 전자서명을 붙여 위조 여부를 검증하는 기술은?",
  "a": "DNSSEC",
  "k": [
   "dnssec"
  ],
  "e": "무결성·출처 인증."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 3,
  "q": "브라우저가 HTTPS로만 접속하도록 강제해 SSL Strip을 막는 응답 헤더는?",
  "a": "HSTS",
  "k": [
   "hsts"
  ],
  "e": "Strict-Transport-Security."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "쿠키가 JavaScript(document.cookie)로 읽히지 않게 하는 속성은?",
  "a": "HttpOnly",
  "k": [
   "httponly"
  ],
  "e": "Secure는 HTTPS 전용."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 1,
  "q": "tcpdump에서 캡처 결과를 파일로 저장하는 옵션은?",
  "a": "-w",
  "k": [
   "-w"
  ],
  "e": "-r로 읽기."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "tcpdump에서 SYN 패킷만 잡는 필터 표현식을 쓰시오. (tcp[13] 사용)",
  "a": "tcp[13] & 2 != 0",
  "k": [
   "tcp[13]&2!=0",
   "tcp[13] & 2 != 0",
   "tcp[13]&2 != 0"
  ],
  "e": "SYN 비트값 2."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "tcp[13] 옥텟에서 SYN+ACK 패킷의 값(10진수)은?",
  "a": "18",
  "k": [
   "18"
  ],
  "e": "2+16."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "Wireshark에서 RST 패킷만 보는 디스플레이 필터는?",
  "a": "tcp.flags.reset == 1",
  "k": [
   "tcp.flags.reset==1",
   "tcp.flags.reset == 1"
  ],
  "e": "닫힌 포트·강제 종료."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "Wireshark에서 IP 10.0.0.5가 출발지 또는 목적지인 패킷을 보는 필터는?",
  "a": "ip.addr == 10.0.0.5",
  "k": [
   "ip.addr==10.0.0.5",
   "ip.addr == 10.0.0.5"
  ],
  "e": "src/dst 모두."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 3,
  "q": "Wireshark에서 TCP 재전송만 보는 필터는?",
  "a": "tcp.analysis.retransmission",
  "k": [
   "tcp.analysis.retransmission"
  ],
  "e": "지연·유실 진단."
 },
 {
  "s": "s2",
  "t": "패킷 분석",
  "d": 2,
  "q": "tcpdump에서 IP와 포트 이름 변환을 모두 끄는 옵션은?",
  "a": "-nn",
  "k": [
   "-nn"
  ],
  "e": "-n은 IP만."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 1,
  "q": "iptables에서 룰을 체인 맨 끝에 추가하는 옵션은?",
  "a": "-A",
  "k": [
   "-a"
  ],
  "e": "맨 앞 삽입은 -I."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "iptables INPUT 체인의 기본정책을 DROP으로 설정하는 명령을 쓰시오.",
  "a": "iptables -P INPUT DROP",
  "k": [
   "iptables -p input drop",
   "-p input drop"
  ],
  "e": "화이트리스트 방식."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "203.0.113.77에서 오는 모든 패킷을 차단하는 iptables 룰을 쓰시오.",
  "a": "iptables -A INPUT -s 203.0.113.77 -j DROP",
  "k": [
   "iptables -a input -s 203.0.113.77 -j drop",
   "-s 203.0.113.77 -j drop"
  ],
  "e": "긴급 시 -I INPUT 1."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "iptables에서 이미 수립된 연결과 관련 트래픽을 허용할 때 쓰는 state 값 두 가지는? (쉼표로)",
  "a": "ESTABLISHED, RELATED",
  "k": [
   "established",
   "related"
  ],
  "e": "-m state --state ESTABLISHED,RELATED."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "현재 iptables 룰을 파일로 내보내 영구 저장할 때 쓰는 명령은?",
  "a": "iptables-save",
  "k": [
   "iptables-save"
  ],
  "e": "iptables-restore로 복원."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "firewalld에서 --permanent 변경을 런타임에 반영하는 옵션은?",
  "a": "--reload",
  "k": [
   "--reload",
   "reload"
  ],
  "e": "firewall-cmd --reload."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 3,
  "q": "iptables에서 IP당 동시 연결 수를 제한하는 매치 모듈은?",
  "a": "connlimit",
  "k": [
   "connlimit"
  ],
  "e": "--connlimit-above N."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 2,
  "q": "iptables에서 80과 443을 한 룰로 지정할 때 쓰는 모듈은?",
  "a": "multiport",
  "k": [
   "multiport"
  ],
  "e": "--dports 80,443."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 1,
  "q": "탐지·경보만 하는 IDS와 달리 inline으로 차단까지 하는 장비는?",
  "a": "IPS",
  "k": [
   "ips"
  ],
  "e": "Intrusion Prevention System."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Snort 룰에서 페이로드 문자열을 매칭하는 옵션은?",
  "a": "content",
  "k": [
   "content"
  ],
  "e": "nocase와 함께 자주 사용."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Snort 룰에서 TCP SYN 플래그만 설정된 패킷을 지정하는 옵션 표기는?",
  "a": "flags:S",
  "k": [
   "flags:s",
   "flags: s"
  ],
  "e": "NULL은 flags:0."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Snort 룰 옵션 중 경보 메시지를 지정하는 것은?",
  "a": "msg",
  "k": [
   "msg"
  ],
  "e": "msg와 sid는 필수."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 3,
  "q": "Snort에서 '출발지별 60초에 5회 초과' 같은 임계치 탐지를 지정하는 옵션은?",
  "a": "detection_filter",
  "k": [
   "detection_filter"
  ],
  "e": "track by_src, count, seconds."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 2,
  "q": "Snort 룰에서 ICMP Echo Request(Type 8)를 지정하는 옵션 표기는?",
  "a": "itype:8",
  "k": [
   "itype:8",
   "itype: 8"
  ],
  "e": "icode는 Code."
 },
 {
  "s": "s2",
  "t": "IDS·Snort 룰",
  "d": 3,
  "q": "Snort 룰에서 서버 방향의 수립된 세션만 검사하도록 하는 옵션 표기는?",
  "a": "flow:to_server,established",
  "k": [
   "flow:to_server,established",
   "to_server,established"
  ],
  "e": "세션 방향·상태 지정."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 1,
  "q": "IPSec에서 암호화(기밀성)까지 제공하는 프로토콜은?",
  "a": "ESP",
  "k": [
   "esp"
  ],
  "e": "AH는 인증·무결성."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 2,
  "q": "802.1X 구성에서 RADIUS 서버의 역할 명칭은?",
  "a": "Authentication Server",
  "k": [
   "authentication server"
  ],
  "e": "Supplicant–Authenticator–Authentication Server."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 1,
  "q": "요청 자원이 서버에 없을 때 반환되는 HTTP 상태코드는?",
  "a": "404",
  "k": [
   "404"
  ],
  "e": "Not Found."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 1,
  "q": "서버 내부 처리 오류를 나타내는 HTTP 상태코드는?",
  "a": "500",
  "k": [
   "500"
  ],
  "e": "Internal Server Error."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "브라우저가 HTTPS 로만 접속하도록 강제하는 응답 헤더의 약어는?",
  "a": "HSTS",
  "k": [
   "hsts"
  ],
  "e": "HTTP Strict Transport Security."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "다른 사이트의 프레임 삽입을 차단해 클릭재킹을 막는 응답 헤더는?",
  "a": "X-Frame-Options",
  "k": [
   "x-frame-options"
  ],
  "e": "값: DENY / SAMEORIGIN."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "MIME 스니핑을 차단하는 X-Content-Type-Options 헤더의 값은?",
  "a": "nosniff",
  "k": [
   "nosniff"
  ],
  "e": "선언된 Content-Type 대로만 처리."
 },
 {
  "s": "s3",
  "t": "웹 기초·HTTP",
  "d": 2,
  "q": "Apache 에서 TRACE 메서드를 비활성화하는 지시어는?",
  "a": "TraceEnable Off",
  "k": [
   "traceenable off",
   "traceenable"
  ],
  "e": "XST 대응."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 1,
  "q": "SQL 구문과 입력값을 분리해 미리 컴파일된 쿼리에 값을 바인딩하는 Java 인터페이스는?",
  "a": "PreparedStatement",
  "k": [
   "preparedstatement",
   "prepared statement"
  ],
  "e": "SQL 인젝션 근본 대책."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "MyBatis 에서 바인딩 방식으로 안전하게 값을 전달하는 표기 기호는?",
  "a": "#{}",
  "k": [
   "#{}",
   "#"
  ],
  "e": "${} 는 문자열 치환."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 1,
  "q": "XSS 의 근본 대책으로 출력 시 특수문자를 엔티티로 바꾸는 처리는?",
  "a": "출력 인코딩",
  "k": [
   "출력 인코딩",
   "출력인코딩"
  ],
  "e": "컨텍스트별(HTML·속성·JS·URL) 적용."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "게시판 등 서버에 저장된 입력이 열람자 브라우저에서 실행되는 XSS 유형은?",
  "a": "Stored XSS",
  "k": [
   "stored"
  ],
  "e": "Reflected 는 즉시 반사, DOM 은 클라이언트 처리."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "요청 파라미터가 응답에 즉시 반사되어 실행되는 XSS 유형은?",
  "a": "Reflected XSS",
  "k": [
   "reflected"
  ],
  "e": "주로 링크 클릭을 유도해 발생."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "서버가 사용자가 지정한 URL 로 요청을 보내는 기능을 악용해 내부 자원에 접근하는 취약점의 약어는?",
  "a": "SSRF",
  "k": [
   "ssrf"
  ],
  "e": "Server-Side Request Forgery."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 3,
  "q": "AWS 에서 세션 토큰을 요구해 SSRF 를 통한 메타데이터 탈취를 어렵게 하는 메타데이터 서비스 버전은?",
  "a": "IMDSv2",
  "k": [
   "imdsv2",
   "imds v2"
  ],
  "e": "PUT 으로 토큰 발급 후 헤더에 포함."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 3,
  "q": "Java 에서 셸을 거치지 않고 명령과 인자를 배열로 분리해 프로세스를 실행하는 클래스는?",
  "a": "ProcessBuilder",
  "k": [
   "processbuilder"
  ],
  "e": "인자 분리로 입력이 명령 구조로 해석되지 않는다."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 2,
  "q": "PHP 에서 셸 명령 인자 하나를 안전하게 따옴표 처리하는 함수는?",
  "a": "escapeshellarg",
  "k": [
   "escapeshellarg",
   "escapeshellarg()"
  ],
  "e": "명령 전체는 escapeshellcmd. 근본은 명령 호출 자제."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 1,
  "q": "쿠키를 스크립트에서 읽지 못하게 하는 속성은?",
  "a": "HttpOnly",
  "k": [
   "httponly"
  ],
  "e": "세션 탈취 피해 축소."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 1,
  "q": "쿠키가 HTTPS 연결에서만 전송되게 하는 속성은?",
  "a": "Secure",
  "k": [
   "secure"
  ],
  "e": "값 암호화는 아님."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "교차 사이트 요청 시 쿠키 전송을 제한하는 쿠키 속성은?",
  "a": "SameSite",
  "k": [
   "samesite"
  ],
  "e": "Strict / Lax / None."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "CSRF 대응을 위해 서버가 세션별로 발급하고 요청마다 검증하는 값은?",
  "a": "CSRF 토큰",
  "k": [
   "csrf 토큰",
   "csrf토큰"
  ],
  "e": "Synchronizer Token Pattern."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "인증 전 세션 ID 를 인증 후에도 그대로 사용해 발생하는 취약점은?",
  "a": "세션 고정",
  "k": [
   "세션 고정",
   "세션고정"
  ],
  "e": "로그인 시 세션 ID 재발급."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 3,
  "q": "Java Servlet 3.1 이상에서 기존 세션을 유지한 채 세션 ID 만 새로 발급하는 메서드는?",
  "a": "changeSessionId",
  "k": [
   "changesessionid",
   "changesessionid()"
  ],
  "e": "HttpServletRequest.changeSessionId()."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 3,
  "q": "SameSite=None 쿠키에 반드시 함께 지정해야 하는 속성은?",
  "a": "Secure",
  "k": [
   "secure"
  ],
  "e": "없으면 최신 브라우저가 쿠키를 거부."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 1,
  "q": "업로드 확장자 검증에서 허용할 것만 정하는 방식은?",
  "a": "화이트리스트",
  "k": [
   "화이트리스트"
  ],
  "e": "차단목록보다 안전."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "확장자와 별도로 파일 앞부분의 고유 바이트로 실제 형식을 확인하는 값은?",
  "a": "매직넘버",
  "k": [
   "매직넘버",
   "매직 넘버"
  ],
  "e": "MIME 타입 + 시그니처 검증."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "업로드 파일명을 충돌 없이 예측 불가하게 바꾸는 데 쓰는 128비트 식별자는?",
  "a": "UUID",
  "k": [
   "uuid"
  ],
  "e": "원본 파일명은 DB 에만 저장."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "경로 조작 대응을 위해 Java File 객체의 절대·정규 경로를 구하는 메서드는?",
  "a": "getCanonicalPath",
  "k": [
   "getcanonicalpath",
   "getcanonicalpath()"
  ],
  "e": "정규화 후 기준 디렉터리 하위인지 검증."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "PHP 에서 원격 URL 의 include 를 차단하는 php.ini 설정 항목은?",
  "a": "allow_url_include",
  "k": [
   "allow_url_include"
  ],
  "e": "Off 로 설정."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 3,
  "q": "다운로드 요청을 파일 경로가 아닌 파일 ID 로 받아 서버가 실제 경로를 결정하는 방식은?",
  "a": "간접 참조",
  "k": [
   "간접 참조",
   "간접참조"
  ],
  "e": "사용자 입력이 경로를 직접 구성하지 못하게 한다."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 1,
  "q": "Apache 로그 포맷에서 클라이언트 IP 를 나타내는 지시자는?",
  "a": "%h",
  "k": [
   "%h"
  ],
  "e": "Combined: %h %l %u %t \"%r\" %>s %b ..."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 1,
  "q": "Apache 로그 포맷에서 최종 상태코드를 나타내는 지시자는?",
  "a": "%>s",
  "k": [
   "%>s"
  ],
  "e": "%s 는 원래 요청의 상태."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 2,
  "q": "Apache 기본 로그 형식 중 Referer 와 User-Agent 를 포함하는 형식의 이름은?",
  "a": "Combined",
  "k": [
   "combined"
  ],
  "e": "Common 형식에는 두 필드가 없다."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 2,
  "q": "웹 로그에서 공격 성공 여부를 판단할 때 상태코드와 함께 정상 응답과 비교하는 값은?",
  "a": "응답 크기",
  "k": [
   "응답 크기",
   "응답크기"
  ],
  "e": "급증은 데이터 노출 정황."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 3,
  "q": "웹 로그 User-Agent 에서 자주 확인되는 오픈소스 웹서버 취약점 스캐너 이름은?",
  "a": "Nikto",
  "k": [
   "nikto"
  ],
  "e": "UA 는 위조 가능하므로 패턴과 함께 판단."
 },
 {
  "s": "s3",
  "t": "시큐어코딩",
  "d": 1,
  "q": "브라우저가 실행할 수 있는 스크립트 출처를 서버가 지정하는 응답 헤더의 약어는?",
  "a": "CSP",
  "k": [
   "csp"
  ],
  "e": "Content-Security-Policy."
 },
 {
  "s": "s3",
  "t": "시큐어코딩",
  "d": 2,
  "q": "CSP 에서 자기 출처의 리소스만 허용하는 지시어 값은?",
  "a": "default-src 'self'",
  "k": [
   "default-src 'self'",
   "'self'",
   "self"
  ],
  "e": "인라인 스크립트도 기본 차단."
 },
 {
  "s": "s3",
  "t": "시큐어코딩",
  "d": 2,
  "q": "행정안전부 SW 개발보안 가이드의 보안약점 분류 개수는?",
  "a": "7",
  "k": [
   "7"
  ],
  "e": "입력검증·보안기능·시간및상태·에러처리·코드오류·캡슐화·API오용."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 1,
  "q": "Apache 에서 디렉터리 목록 노출을 차단하는 Options 설정은?",
  "a": "-Indexes",
  "k": [
   "-indexes"
  ],
  "e": "Nginx: autoindex off."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 2,
  "q": "Nginx 에서 응답 헤더의 버전 정보를 숨기는 설정은?",
  "a": "server_tokens off",
  "k": [
   "server_tokens off",
   "server_tokens"
  ],
  "e": "Apache: ServerTokens Prod."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 2,
  "q": "메일 헤더와 본문에 전자서명을 넣어 위변조를 확인하는 메일 인증 기술은?",
  "a": "DKIM",
  "k": [
   "dkim"
  ],
  "e": "SPF=허용 IP, DMARC=정책."
 },
 {
  "s": "s3",
  "t": "웹서버·메일·DNS 보안",
  "d": 2,
  "q": "DNS 응답에 전자서명을 붙여 캐시 포이즈닝을 막는 기술은?",
  "a": "DNSSEC",
  "k": [
   "dnssec"
  ],
  "e": "기밀성은 제공하지 않음."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 1,
  "q": "하나의 비밀키로 암호화와 복호화를 모두 수행하는 암호 방식은?",
  "a": "대칭키 암호",
  "k": [
   "대칭키"
  ],
  "e": "공개키(비대칭)는 키쌍 사용."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 1,
  "q": "현행 대칭 블록 암호 표준으로 블록 128bit, 키 128/192/256bit를 지원하는 알고리즘은?",
  "a": "AES",
  "k": [
   "AES"
  ],
  "e": "Advanced Encryption Standard, SPN 구조."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 1,
  "q": "KISA가 1999년 개발한 128bit 블록의 국산 Feistel 구조 대칭 암호는?",
  "a": "SEED",
  "k": [
   "SEED"
  ],
  "e": "국산 SPN 구조 표준은 ARIA."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 2,
  "q": "AES-192의 라운드 수는?",
  "a": "12",
  "k": [
   "12"
  ],
  "e": "128=10, 192=12, 256=14."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 2,
  "q": "블록 암호 운영모드 CBC의 영문 풀이는?",
  "a": "Cipher Block Chaining",
  "k": [
   "Cipher Block Chaining"
  ],
  "e": "직전 암호문 블록과 XOR 후 암호화."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 2,
  "q": "CTR 모드처럼 암호화와 GHASH 인증을 결합해 기밀성과 무결성을 동시에 제공하는 운영모드는?",
  "a": "GCM",
  "k": [
   "GCM"
  ],
  "e": "Galois/Counter Mode, AEAD."
 },
 {
  "s": "s4",
  "t": "대칭키·운영모드",
  "d": 3,
  "q": "CBC 암호화 식 Cᵢ = E_k(Pᵢ ⊕ Cᵢ₋₁)에서 C₀에 해당하는 값은?",
  "a": "IV",
  "k": [
   "IV"
  ],
  "e": "초기화 벡터(Initialization Vector) — 예측 불가 난수, 재사용 금지."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 1,
  "q": "공개키 암호 RSA의 안전성 근거가 되는 수학 문제는?",
  "a": "소인수분해",
  "k": [
   "소인수분해"
  ],
  "e": "DH는 이산대수, ECC는 타원곡선 이산대수."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 1,
  "q": "이산대수 문제에 기반해 공개 채널에서 공유 비밀키를 합의하는 최초의 공개키 키 교환 알고리즘은?",
  "a": "Diffie-Hellman",
  "k": [
   "Diffie-Hellman"
  ],
  "e": "키 교환 전용, 인증 없으면 MITM 취약."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "타원곡선 암호 기반 전자서명 알고리즘의 약어는?",
  "a": "ECDSA",
  "k": [
   "ECDSA"
  ],
  "e": "Elliptic Curve Digital Signature Algorithm. 키 교환은 ECDH."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "DH 키 교환에서 A가 비밀 a, B가 비밀 b를 쓸 때 양측이 얻는 공유 비밀값은? (p, g 사용)",
  "a": "g^(ab) mod p",
  "k": [
   "g^(ab)",
   "mod p"
  ],
  "e": "A는 (g^b)^a, B는 (g^a)^b를 계산."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "인증되지 않은 DH 키 교환이 취약한 공격은?",
  "a": "중간자 공격(MITM)",
  "k": [
   "MITM"
  ],
  "e": "공격자가 양측에 자기 공개값을 끼워 넣는다 → 인증된 DH."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 3,
  "q": "세션마다 임시키로 키를 교환해 장기 개인키가 유출돼도 과거 세션을 보호하는 성질의 약어는?",
  "a": "PFS",
  "k": [
   "PFS"
  ],
  "e": "Perfect Forward Secrecy — DHE·ECDHE."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 3,
  "q": "대용량 데이터는 대칭 세션키로 암호화하고 세션키만 수신자 공개키로 암호화해 전달하는 방식은?",
  "a": "하이브리드 암호",
  "k": [
   "하이브리드"
  ],
  "e": "TLS·PGP에서 사용."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 1,
  "q": "임의 길이 입력을 고정 길이 다이제스트로 변환하는 단방향 함수는?",
  "a": "해시 함수",
  "k": [
   "해시"
  ],
  "e": "무결성 검증에 사용, 키가 없어 단독 인증 불가."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 1,
  "q": "SHA-256의 출력 길이(bit)는?",
  "a": "256",
  "k": [
   "256"
  ],
  "e": "SHA-2 계열, MD5=128, SHA-1=160."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "서로 다른 두 입력 x₁≠x₂에 대해 h(x₁)=h(x₂)인 쌍을 찾기 어려운 해시 성질은?",
  "a": "충돌 저항성",
  "k": [
   "충돌"
  ],
  "e": "해시 3대 안전성: 역상·제2역상·충돌 저항."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "해시 함수에 비밀키를 결합해 메시지 인증과 무결성을 제공하는 MAC 표준(RFC 2104)은?",
  "a": "HMAC",
  "k": [
   "HMAC"
  ],
  "e": "H((K⊕opad)∥H((K⊕ipad)∥m))."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "전자서명 생성 시 메시지 다이제스트를 암호화하는 데 사용하는 키는?",
  "a": "송신자 개인키",
  "k": [
   "송신자",
   "개인키"
  ],
  "e": "검증은 송신자 공개키."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 3,
  "q": "HMAC 내부 해시에서 키와 XOR하는 패딩 상수의 이름은?",
  "a": "ipad",
  "k": [
   "ipad"
  ],
  "e": "외부 해시는 opad."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 3,
  "q": "파일의 SHA-256 해시를 계산하는 openssl 명령은? (파일명 file)",
  "a": "openssl dgst -sha256 file",
  "k": [
   "openssl",
   "dgst",
   "sha256"
  ],
  "e": "Linux 단독 명령은 sha256sum file."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 1,
  "q": "비밀번호 해시 전 사용자마다 다른 난수를 덧붙이는 값은?",
  "a": "솔트(Salt)",
  "k": [
   "솔트"
  ],
  "e": "레인보우 테이블 무력화, 동일 비밀번호 식별 방지."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 1,
  "q": "해시를 수천~수십만 회 반복해 검증 비용을 높이는 기법은?",
  "a": "키 스트레칭(Key Stretching)",
  "k": [
   "키스트레칭"
  ],
  "e": "PBKDF2·bcrypt·scrypt·Argon2."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 2,
  "q": "생일 역설을 이용해 해시 충돌을 약 2^(n/2) 시도로 찾는 공격은?",
  "a": "생일 공격(Birthday Attack)",
  "k": [
   "생일"
  ],
  "e": "SHA-256 충돌강도 2^128."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 2,
  "q": "128bit 해시의 충돌을 찾기 위한 생일 공격의 대략적 시도 횟수는?",
  "a": "2^64",
  "k": [
   "2^64"
  ],
  "e": "2^(n/2) = 2^64."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 2,
  "q": "해시-평문 쌍을 사전 계산해 둔 테이블로 비밀번호 해시를 역추적하는 공격은?",
  "a": "레인보우 테이블 공격",
  "k": [
   "레인보우"
  ],
  "e": "솔트로 대응."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 3,
  "q": "정상 인증 메시지를 가로채 그대로 다시 보내는 공격은?",
  "a": "재전송 공격(Replay Attack)",
  "k": [
   "재전송"
  ],
  "e": "대응: Nonce·Timestamp·순서번호."
 },
 {
  "s": "s4",
  "t": "암호공격·솔트",
  "d": 3,
  "q": "PHP에서 bcrypt로 솔트·스트레칭이 자동 포함된 비밀번호 해시를 만드는 함수는?",
  "a": "password_hash",
  "k": [
   "password_hash"
  ],
  "e": "예) password_hash($pw, PASSWORD_BCRYPT), 검증은 password_verify."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 1,
  "q": "매 인증마다 한 번만 유효한 비밀번호의 약어는?",
  "a": "OTP",
  "k": [
   "OTP"
  ],
  "e": "One-Time Password."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 1,
  "q": "서로 다른 인증 요소 2개 이상을 결합하는 인증의 약어는?",
  "a": "MFA",
  "k": [
   "MFA"
  ],
  "e": "Multi-Factor Authentication."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 2,
  "q": "HMAC과 시간값으로 OTP를 생성하는 방식의 약어는?",
  "a": "TOTP",
  "k": [
   "TOTP"
  ],
  "e": "RFC 6238, 30초 등 시간 윈도우."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 2,
  "q": "HMAC과 카운터(이벤트) 값으로 OTP를 생성하는 방식의 약어는?",
  "a": "HOTP",
  "k": [
   "HOTP"
  ],
  "e": "RFC 4226."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 2,
  "q": "생체인증에서 타인을 본인으로 잘못 수락하는 비율의 약어는?",
  "a": "FAR",
  "k": [
   "FAR"
  ],
  "e": "False Acceptance Rate — 낮을수록 안전."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 3,
  "q": "생체인증에서 FAR과 FRR이 같아지는 교차점의 약어는?",
  "a": "EER",
  "k": [
   "EER"
  ],
  "e": "Equal Error Rate — 낮을수록 우수."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 3,
  "q": "서버가 난수를 보내고 클라이언트가 비밀키로 연산해 응답하는 인증 방식은?",
  "a": "챌린지-리스폰스",
  "k": [
   "챌린지"
  ],
  "e": "비밀번호 미전송, 재전송 방어."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 1,
  "q": "Kerberos에서 AS와 TGS를 합쳐 부르는 신뢰된 제3자의 약어는?",
  "a": "KDC",
  "k": [
   "KDC"
  ],
  "e": "Key Distribution Center."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 1,
  "q": "Kerberos에서 AS가 최초 발급해 TGS에 제시하는 티켓의 약어는?",
  "a": "TGT",
  "k": [
   "TGT"
  ],
  "e": "Ticket Granting Ticket."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 2,
  "q": "Kerberos에서 TGT를 검증하고 서비스 티켓을 발급하는 서버의 약어는?",
  "a": "TGS",
  "k": [
   "TGS"
  ],
  "e": "Ticket Granting Server."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 2,
  "q": "한 번 인증으로 여러 시스템에 재인증 없이 접근하는 방식의 약어는?",
  "a": "SSO",
  "k": [
   "SSO"
  ],
  "e": "Single Sign-On — 인증 서버 SPOF 주의."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 3,
  "q": "FIDO2를 구성하는 두 표준은? (웹 API, 인증기 프로토콜)",
  "a": "WebAuthn, CTAP",
  "k": [
   "WebAuthn",
   "CTAP"
  ],
  "e": "Passkey의 기반."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 3,
  "q": "XML 기반으로 기업 웹 SSO에서 인증·인가 정보를 교환하는 표준의 약어는?",
  "a": "SAML",
  "k": [
   "SAML"
  ],
  "e": "소셜 로그인은 OIDC."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 1,
  "q": "PKI에서 인증서를 발급하고 서명하는 기관의 약어는?",
  "a": "CA",
  "k": [
   "CA"
  ],
  "e": "Certificate Authority."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 1,
  "q": "폐기된 인증서의 목록의 약어는?",
  "a": "CRL",
  "k": [
   "CRL"
  ],
  "e": "Certificate Revocation List."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 2,
  "q": "특정 인증서의 폐기 여부를 실시간 질의하는 프로토콜의 약어는?",
  "a": "OCSP",
  "k": [
   "OCSP"
  ],
  "e": "Online Certificate Status Protocol (RFC 6960)."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 2,
  "q": "공개키 인증서의 표준 형식(ITU-T)은?",
  "a": "X.509",
  "k": [
   "X509"
  ],
  "e": "현행 v3, RFC 5280."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 2,
  "q": "X.509 인증서에서 인증서 소유자를 나타내는 필드명은?",
  "a": "Subject",
  "k": [
   "Subject"
  ],
  "e": "발급 CA는 Issuer."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 3,
  "q": "웹 서버가 OCSP 응답을 미리 받아 TLS 핸드셰이크에 첨부해 CA 부하를 줄이는 기법은?",
  "a": "OCSP Stapling",
  "k": [
   "Stapling"
  ],
  "e": "클라이언트의 별도 OCSP 질의 불필요."
 },
 {
  "s": "s4",
  "t": "PKI·인증서",
  "d": 3,
  "q": "Issuer와 Subject가 동일한 인증서를 무엇이라 하는가?",
  "a": "자기 서명 인증서(self-signed)",
  "k": [
   "자기서명"
  ],
  "e": "루트 CA 인증서가 대표적."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 1,
  "q": "보안등급(라벨)에 따라 시스템이 강제로 접근을 통제하는 정책의 약어는?",
  "a": "MAC",
  "k": [
   "MAC"
  ],
  "e": "Mandatory Access Control."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 1,
  "q": "역할에 권한을 부여하고 사용자를 역할에 할당하는 접근통제의 약어는?",
  "a": "RBAC",
  "k": [
   "RBAC"
  ],
  "e": "Role-Based Access Control."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 2,
  "q": "BLP 모델에서 상위 등급 주체의 하위 등급 객체 쓰기를 금지하는 규칙은?",
  "a": "No Write Down",
  "k": [
   "No Write Down"
  ],
  "e": "*-property, 기밀 유출 방지."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 2,
  "q": "Biba 모델에서 상위 등급 주체의 하위 등급 객체 읽기를 금지하는 규칙은?",
  "a": "No Read Down",
  "k": [
   "No Read Down"
  ],
  "e": "오염 데이터 유입 방지(무결성)."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 2,
  "q": "정형 트랜잭션과 직무분리로 상업적 무결성을 보장하는 접근통제 모델은?",
  "a": "Clark-Wilson",
  "k": [
   "Clark-Wilson"
  ],
  "e": "사용자는 검증된 프로그램을 통해서만 데이터 변경."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 3,
  "q": "주체·자원·환경 속성을 조합해 동적으로 접근을 결정하는 접근통제의 약어는?",
  "a": "ABAC",
  "k": [
   "ABAC"
  ],
  "e": "정책 언어 XACML."
 },
 {
  "s": "s4",
  "t": "접근통제 정책·모델",
  "d": 3,
  "q": "접근통제 행렬을 주체(행) 기준으로 저장한 목록은?",
  "a": "Capability List",
  "k": [
   "Capability"
  ],
  "e": "객체(열) 기준은 ACL."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 1,
  "q": "정책을 달성하기 위해 반드시 지켜야 하는 강제적 의무 요구사항 문서는?",
  "a": "표준(Standard)",
  "k": [
   "표준"
  ],
  "e": "정책-표준(강제)-지침(권고)-절차(실행)."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 1,
  "q": "누가·언제·어떻게 수행하는지 단계별로 기술한 실행 문서는?",
  "a": "절차(Procedure)",
  "k": [
   "절차"
  ],
  "e": "Who/When 실행 매뉴얼."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 1,
  "q": "정보통신망법 제45조의3에 근거한 정보보호 총괄 책임자의 약어는?",
  "a": "CISO",
  "k": [
   "CISO"
  ],
  "e": "Chief Information Security Officer, 과기정통부 신고."
 },
 {
  "s": "s5",
  "t": "거버넌스·조직",
  "d": 1,
  "q": "개인정보보호법 제31조에 근거한 개인정보 처리 총괄 책임자의 약어는?",
  "a": "CPO",
  "k": [
   "CPO"
  ],
  "e": "Chief Privacy Officer."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 1,
  "q": "정보보호 및 개인정보보호 관리체계 인증의 약어는?",
  "a": "ISMS-P",
  "k": [
   "ISMS-P"
  ],
  "e": "Personal Information & Information Security Management System."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 1,
  "q": "ISMS-P 인증을 수행하는 인증기관(약어)은?",
  "a": "KISA",
  "k": [
   "KISA"
  ],
  "e": "한국인터넷진흥원."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증기준 중 64개 통제로 구성된 영역의 명칭은?",
  "a": "보호대책 요구사항",
  "k": [
   "보호대책"
  ],
  "e": "관리체계 16, 보호대책 64, 개인정보 처리단계 22."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증기준 중 16개 통제로 구성된 영역은?",
  "a": "관리체계 수립 및 운영",
  "k": [
   "관리체계"
  ],
  "e": "PDCA 기반 관리체계 운영 요구사항."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증기준 중 22개 통제로 구성된 영역은?",
  "a": "개인정보 처리단계별 요구사항",
  "k": [
   "처리단계"
  ],
  "e": "수집→이용·제공→보유·파기 + 정보주체 권리."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 1,
  "q": "ISMS-P 인증기준 통제 항목의 총 개수는?",
  "a": "102개",
  "k": [
   "102"
  ],
  "e": "16+64+22."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증 유효기간 중 매년 1회 이상 유지 여부를 확인하는 심사는?",
  "a": "사후심사",
  "k": [
   "사후심사"
  ],
  "e": "최초·사후·갱신심사."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 유효기간(3년) 만료 전에 받는 심사는?",
  "a": "갱신심사",
  "k": [
   "갱신심사"
  ],
  "e": "유효기간 3년."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 2,
  "q": "ISMS-P 인증 절차에서 결함조치 후 인증 여부를 심의하는 기구는?",
  "a": "인증위원회",
  "k": [
   "인증위원회"
  ],
  "e": "심사→결함조치→심의(인증위원회)→발급."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 3,
  "q": "ISMS 인증 의무대상을 규정한 정보통신망법 조문은?",
  "a": "제47조",
  "k": [
   "47"
  ],
  "e": "정보통신망법 제47조 — ISP·IDC 등."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "위험 = 자산 × 위협 × ( )에서 빈칸은?",
  "a": "취약점",
  "k": [
   "취약점"
  ],
  "e": "위협이 취약점을 이용해 자산에 손실."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "1회 사고 발생 시 예상 손실액(SLE)을 구하는 식은?",
  "a": "SLE = AV × EF",
  "k": [
   "AV",
   "EF"
  ],
  "e": "자산가치 × 노출계수."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "ALE를 구하는 식에서 SLE에 곱하는 값의 약어는?",
  "a": "ARO",
  "k": [
   "ARO"
  ],
  "e": "Annual Rate of Occurrence, 연간발생률."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "자산가치 5,000만원, EF 40%, ARO 0.5일 때 ALE(만원)는?",
  "a": "1,000만원",
  "k": [
   "1000"
  ],
  "e": "SLE = 5,000 × 0.4 = 2,000만원, ALE = 2,000 × 0.5 = 1,000만원."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "자산가치 10억원, EF 10%, ARO 2일 때 SLE(만원)는?",
  "a": "1억원(10,000만원)",
  "k": [
   "1억"
  ],
  "e": "SLE = 10억 × 0.1 = 1억원. ALE는 2억원."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "위험처리 의사결정의 기준선인 수용가능 위험수준의 약어는?",
  "a": "DoA",
  "k": [
   "DoA"
  ],
  "e": "Degree of Assurance."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 1,
  "q": "통제 적용 후에도 남아 있는 위험은?",
  "a": "잔여위험(Residual Risk)",
  "k": [
   "잔여위험"
  ],
  "e": "경영진이 수용 여부 결정."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "통제를 적용해 위험을 수용가능 수준으로 낮추는 위험처리 유형은?",
  "a": "위험감소",
  "k": [
   "감소"
  ],
  "e": "방화벽·암호화·접근통제 도입."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "위험 발생 활동 자체를 중단하는 위험처리 유형은?",
  "a": "위험회피",
  "k": [
   "회피"
  ],
  "e": "서비스 폐쇄·기능 제거."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 3,
  "q": "사이버보험에 가입하는 위험처리 유형은?",
  "a": "위험전가",
  "k": [
   "전가"
  ],
  "e": "제3자에게 위험 이전."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "전문가 집단 익명 설문을 반복 수렴해 합의를 도출하는 정성적 기법은?",
  "a": "델파이법",
  "k": [
   "델파이"
  ],
  "e": "정성: 델파이·시나리오·순위결정."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "특정 위협 상황을 가정해 발생 가능 결과를 추정하는 정성적 기법은?",
  "a": "시나리오법",
  "k": [
   "시나리오"
  ],
  "e": "가정 상황 기반 추정."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "재해 발생 후 복구 완료까지 목표 시간의 약어는?",
  "a": "RTO",
  "k": [
   "RTO"
  ],
  "e": "Recovery Time Objective."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "복구 가능한 데이터 시점(허용 데이터 손실량)을 뜻하는 지표의 약어는?",
  "a": "RPO",
  "k": [
   "RPO"
  ],
  "e": "Recovery Point Objective."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "최대허용중단시간의 약어는?",
  "a": "MTD",
  "k": [
   "MTD"
  ],
  "e": "Maximum Tolerable Downtime = RTO + WRT."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "MTD = RTO + ( )에서 빈칸의 약어는?",
  "a": "WRT",
  "k": [
   "WRT"
  ],
  "e": "Work Recovery Time, 복구 후 정상화 시간."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "업무 중단 영향을 분석해 복구 우선순위와 RTO·RPO를 도출하는 활동의 약어는?",
  "a": "BIA",
  "k": [
   "BIA"
  ],
  "e": "Business Impact Analysis."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "조직 전체 업무 지속을 위한 업무연속성계획의 약어는?",
  "a": "BCP",
  "k": [
   "BCP"
  ],
  "e": "BCP ⊃ DRP."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "실시간 동기화로 RTO가 0에 가까운 DR 사이트는?",
  "a": "Mirror 사이트",
  "k": [
   "Mirror"
  ],
  "e": "최고 비용."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "주기적 백업 기반으로 수일 내 복구하는 중간 비용의 DR 사이트는?",
  "a": "Warm 사이트",
  "k": [
   "Warm"
  ],
  "e": "Hot(수시간)과 Cold(수주) 사이."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 3,
  "q": "MTD 48시간, WRT 8시간일 때 허용 가능한 최대 RTO(시간)는?",
  "a": "40시간",
  "k": [
   "40"
  ],
  "e": "RTO = MTD − WRT."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "유사 조직 간 재해 시 상호 복구를 지원하기로 맺는 저비용 협정 방식은?",
  "a": "상호협정(Reciprocal Agreement)",
  "k": [
   "상호협정"
  ],
  "e": "저비용이지만 불확실."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 1,
  "q": "주민등록번호·여권번호·운전면허번호·외국인등록번호를 통칭하는 용어는?",
  "a": "고유식별정보",
  "k": [
   "고유식별정보"
  ],
  "e": "개인정보보호법 제24조."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "사상·신념·건강·유전정보·범죄경력 등을 규정한 개인정보보호법 조문은?",
  "a": "제23조(민감정보)",
  "k": [
   "23"
  ],
  "e": "별도 동의 또는 법령 근거."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "주민등록번호 처리 제한을 별도로 강화한 개인정보보호법 조문은?",
  "a": "제24조의2",
  "k": [
   "24조의2"
  ],
  "e": "법령 근거 필수, 동의로도 불가."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 1,
  "q": "개인정보 보유기간 경과 시 '지체없이' 파기해야 하는 기한(일)은?",
  "a": "5일 이내",
  "k": [
   "5일"
  ],
  "e": "복구 불가능한 방법으로 파기."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 2,
  "q": "위탁자의 업무를 위해 개인정보 처리를 맡기는 것으로 처리방침 공개로 갈음하는 것은?",
  "a": "처리위탁",
  "k": [
   "위탁"
  ],
  "e": "제3자 제공과 구분."
 },
 {
  "s": "s5",
  "t": "개인정보보호법",
  "d": 3,
  "q": "정보주체가 자신의 개인정보를 다른 사업자에게 이동하도록 요구하는 권리(마이데이터)는?",
  "a": "개인정보 전송요구권",
  "k": [
   "전송요구권"
  ],
  "e": "신용정보법·개인정보보호법 마이데이터."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 1,
  "q": "개인정보 유출 사실을 안 때부터 정보주체 통지 시한은?",
  "a": "72시간 이내",
  "k": [
   "72시간"
  ],
  "e": "기관 신고도 72시간 이내."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 2,
  "q": "개인정보위 또는 KISA 신고 의무가 발생하는 유출 인원 기준은?",
  "a": "1,000명 이상",
  "k": [
   "1000명"
  ],
  "e": "1,000명 이상 시 72시간 이내 신고."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 2,
  "q": "접속기록 보관 원칙 기간은?",
  "a": "1년 이상",
  "k": [
   "1년"
  ],
  "e": "5만명 이상·고유식별·민감정보는 2년 이상."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 2,
  "q": "비밀번호를 저장할 때 적용해야 하는 암호화 방식은?",
  "a": "일방향 암호화",
  "k": [
   "일방향"
  ],
  "e": "복호화 불가 해시."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 2,
  "q": "개인정보 전송 구간 암호화에 사용하는 대표 프로토콜은?",
  "a": "SSL/TLS",
  "k": [
   "TLS"
  ],
  "e": "저장 시 암호화, 전송 시 SSL/TLS."
 },
 {
  "s": "s5",
  "t": "안전조치·유출대응",
  "d": 1,
  "q": "개인정보파일 구축·운용 전 침해 위험을 사전 분석하는 제도의 약어는?",
  "a": "PIA",
  "k": [
   "PIA"
  ],
  "e": "Privacy Impact Assessment, 공공기관 의무."
 },
 {
  "s": "s5",
  "t": "망법·신용·망분리",
  "d": 2,
  "q": "정보통신망법상 광고성 정보 수신동의 여부 재확인 주기는?",
  "a": "2년마다",
  "k": [
   "2년"
  ],
  "e": "야간 21~08시 별도 동의."
 },
 {
  "s": "s5",
  "t": "망법·신용·망분리",
  "d": 2,
  "q": "가상화(VDI/SBC)로 한 PC에서 업무망과 인터넷망을 분리하는 방식은?",
  "a": "논리적 망분리",
  "k": [
   "논리적"
  ],
  "e": "물리적=PC 분리."
 },
 {
  "s": "s5",
  "t": "망법·신용·망분리",
  "d": 3,
  "q": "주요정보통신기반시설의 취약점 분석·평가와 보호대책 수립을 의무화한 법률은?",
  "a": "정보통신기반 보호법",
  "k": [
   "정보통신기반"
  ],
  "e": "전력·금융·통신 등 국가핵심시설."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 1,
  "q": "공공기관 대상 클라우드 서비스 보안인증의 약어는?",
  "a": "CSAP",
  "k": [
   "CSAP"
  ],
  "e": "Cloud Security Assurance Program, KISA."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 2,
  "q": "정보보호제품 국제 공통평가기준(CC)의 ISO/IEC 표준 번호는?",
  "a": "ISO/IEC 15408",
  "k": [
   "15408"
  ],
  "e": "CCRA로 상호인정."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 2,
  "q": "CC에서 평가 대상이 되는 제품·시스템을 뜻하는 약어는?",
  "a": "TOE",
  "k": [
   "TOE"
  ],
  "e": "Target of Evaluation."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 3,
  "q": "CC 평가보증등급 중 정형화 검증된 설계를 요구하는 최고 등급은?",
  "a": "EAL7",
  "k": [
   "EAL7"
  ],
  "e": "상용 일반 최고는 EAL4."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 2,
  "q": "AIDE를 이용한 무결성 점검 절차를 순서대로 배열하시오.",
  "steps": [
   "감시 대상·속성 정책 설정",
   "aide --init 으로 기준선 DB 생성",
   "aide.db.new.gz를 aide.db.gz로 적용",
   "aide --check 로 주기 비교",
   "정상 변경은 aide --update 로 반영"
  ],
  "e": "정책 → 기준선 생성(침해 전) → 적용 → 주기 검사 → 정상 변경 갱신."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 2,
  "q": "Stack 버퍼 오버플로우 공격 과정을 순서대로 배열하시오.",
  "steps": [
   "경계 검사 없는 함수(strcpy 등)로 입력 복사",
   "지역 버퍼 크기 초과",
   "SFP와 Return Address 덮어쓰기",
   "함수 복귀 시 EIP가 공격자 주소로 이동",
   "쉘코드 실행"
  ],
  "e": "버퍼 초과 → 리턴 주소 변조 → 복귀 시 흐름 탈취 → 쉘코드 실행."
 },
 {
  "s": "s1",
  "t": "메모리·권한상승",
  "d": 3,
  "q": "TOCTOU 레이스 컨디션 공격 과정을 순서대로 배열하시오.",
  "steps": [
   "SetUID 프로그램이 임시파일 존재·권한 검사",
   "공격자가 임시파일을 삭제",
   "같은 이름의 심볼릭 링크를 /etc/passwd 등으로 생성",
   "프로그램이 root 권한으로 링크 대상에 쓰기",
   "중요 파일 변조로 권한 상승"
  ],
  "e": "Check와 Use 사이 틈에 심볼릭 링크 교체 → root 권한 쓰기."
 },
 {
  "s": "s1",
  "t": "무결성·점검",
  "d": 3,
  "q": "백도어 의심 포트를 점검하는 절차를 순서대로 배열하시오.",
  "steps": [
   "netstat -ntlp 로 LISTEN 포트 목록 확인",
   "미상 포트의 PID 식별",
   "ls -l /proc/PID/exe 로 실행파일 실경로 확인",
   "해시·무결성 비교로 변조 여부 판단",
   "방화벽 차단 및 프로세스 격리·종료"
  ],
  "e": "포트 → PID → 실경로 → 무결성 확인 → 차단·격리."
 },
 {
  "s": "s1",
  "t": "Linux 로그",
  "d": 3,
  "q": "SSH 무차별 대입 공격을 로그로 탐지·대응하는 절차를 순서대로 배열하시오.",
  "steps": [
   "grep \"Failed password\" 로 실패 로그 추출",
   "awk·sort·uniq -c 로 출발지 IP별 집계",
   "임계치 초과 IP 식별",
   "iptables -A INPUT -s IP -j DROP 으로 차단",
   "PermitRootLogin no·공개키 인증·fail2ban 적용"
  ],
  "e": "추출 → 집계 → 공격 IP 식별 → 차단 → 근본 대응."
 },
 {
  "s": "s2",
  "t": "TCP/IP·포트",
  "d": 1,
  "q": "TCP 4-way 종료 과정을 순서대로 배열하시오.",
  "steps": [
   "능동 측 FIN",
   "수동 측 ACK (CLOSE_WAIT)",
   "수동 측 FIN",
   "능동 측 ACK (TIME_WAIT 2MSL)"
  ],
  "e": "FIN→ACK→FIN→ACK."
 },
 {
  "s": "s2",
  "t": "스니핑·스푸핑 대응",
  "d": 2,
  "q": "ARP 스푸핑이 MITM으로 이어지는 과정을 순서대로 배열하시오.",
  "steps": [
   "위조 ARP Reply 지속 전송",
   "피해자 ARP 캐시에 게이트웨이 IP ↔ 공격자 MAC 기록",
   "피해자 트래픽이 공격자 경유",
   "공격자가 IP 포워딩으로 실제 게이트웨이에 중계(통신 유지)"
  ],
  "e": "중계를 해야 피해자가 이상을 못 느낌 → 탐지는 MAC 변경 감시."
 },
 {
  "s": "s2",
  "t": "DoS 대응",
  "d": 2,
  "q": "SYN Flood 발생 시 웹서버 관리자의 대응 절차를 순서대로 배열하시오.",
  "steps": [
   "SYN_RECV 수 급증 확인(ss·netstat)",
   "tcpdump로 SYN 패턴·출발지 분포 분석",
   "tcp_syncookies=1 적용·Backlog 조정",
   "방화벽·상위 장비에서 속도 제한·차단",
   "증거 보존·보고 및 재발 방지 점검"
  ],
  "e": "탐지→분석→즉시 완화→차단→사후."
 },
 {
  "s": "s2",
  "t": "방화벽·iptables",
  "d": 3,
  "q": "원격으로 접속한 서버에 화이트리스트 방화벽을 적용하는 안전한 순서를 배열하시오.",
  "steps": [
   "루프백 허용(-A INPUT -i lo -j ACCEPT)",
   "ESTABLISHED,RELATED 허용",
   "관리용 SSH(허용 IP) 허용",
   "서비스 포트(80·443) 허용",
   "기본정책 -P INPUT DROP",
   "iptables-save로 영구 저장"
  ],
  "e": "DROP 정책을 마지막에 걸어야 세션이 끊기지 않음."
 },
 {
  "s": "s2",
  "t": "VPN·무선",
  "d": 2,
  "q": "IPSec VPN 연결 수립 순서를 배열하시오.",
  "steps": [
   "IKE Phase 1 — ISAKMP SA 협상(Main/Aggressive)",
   "상호 인증(PSK·인증서)",
   "IKE Phase 2 — IPSec SA 협상(Quick Mode)",
   "ESP/AH로 데이터 보호 통신"
  ],
  "e": "Phase1에서 보호 채널을 만든 뒤 Phase2에서 IPSec SA."
 },
 {
  "s": "s3",
  "t": "세션·쿠키 보안",
  "d": 2,
  "q": "CSRF 토큰 검증 흐름을 순서대로 배열하시오.",
  "steps": [
   "사용자 로그인 시 서버가 세션별 예측 불가 토큰 생성·저장",
   "폼 hidden 필드 또는 요청 헤더로 토큰 전달",
   "상태 변경 요청 시 토큰을 함께 전송",
   "서버가 세션 토큰과 요청 토큰 일치 여부 검증",
   "불일치 시 요청 거부 및 로그 기록"
  ],
  "e": "Synchronizer Token Pattern."
 },
 {
  "s": "s3",
  "t": "파일 처리 보안",
  "d": 2,
  "q": "안전한 파일 업로드 처리 순서를 배열하시오.",
  "steps": [
   "업로드 크기 제한 확인",
   "확장자 허용목록 검증",
   "MIME 타입·파일 시그니처 검증",
   "악성코드 검사",
   "UUID 파일명으로 웹루트 외부 저장, 원본명은 DB 기록"
  ],
  "e": "가벼운 검사부터 수행하고 저장은 실행 불가 위치에."
 },
 {
  "s": "s3",
  "t": "웹 로그 분석",
  "d": 3,
  "q": "웹 로그로 침해 여부를 분석하는 절차를 순서대로 배열하시오.",
  "steps": [
   "분석 대상 기간·서버의 접근 로그 확보(원본 보존)",
   "IP·시간대별 요청 빈도 집계로 이상 IP 선별",
   "이상 IP 요청의 경로·파라미터·상태코드 확인",
   "정상 대비 응답 크기 비교로 성공 여부 판단",
   "DB·시스템 로그 교차 분석 후 차단·코드 수정"
  ],
  "e": "증거 보존 → 선별 → 상세 → 판단 → 대응."
 },
 {
  "s": "s3",
  "t": "입력값 검증",
  "d": 1,
  "q": "PreparedStatement 사용 순서를 배열하시오.",
  "steps": [
   "물음표(?) 자리표시자를 둔 SQL 문 준비(prepareStatement)",
   "setString 등으로 입력값 바인딩",
   "executeQuery 로 실행",
   "ResultSet 처리 후 자원 해제"
  ],
  "e": "구조 먼저, 값은 나중에 바인딩."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 2,
  "q": "Diffie-Hellman 키 교환 절차를 순서대로 배열하시오.",
  "steps": [
   "소수 p와 생성자 g를 공개 파라미터로 합의",
   "A가 비밀 a를 골라 g^a mod p 전송",
   "B가 비밀 b를 골라 g^b mod p 전송",
   "A가 (g^b)^a mod p 계산",
   "B가 (g^a)^b mod p 계산해 동일한 공유키 g^(ab) 도출"
  ],
  "e": "비밀지수 a·b는 전송하지 않고 공개값만 교환한다. 인증이 없으면 MITM에 취약."
 },
 {
  "s": "s4",
  "t": "해시·MAC·서명",
  "d": 2,
  "q": "전자서명 생성·검증 과정을 순서대로 배열하시오.",
  "steps": [
   "메시지를 해시해 다이제스트 생성",
   "다이제스트를 송신자 개인키로 암호화(서명)",
   "메시지와 서명 전송",
   "수신자가 송신자 공개키로 서명 복호",
   "수신 메시지를 재해시해 두 다이제스트 비교"
  ],
  "e": "같으면 무결성·인증 확인, 다르면 위·변조."
 },
 {
  "s": "s4",
  "t": "Kerberos·SSO",
  "d": 3,
  "q": "Kerberos 인증 흐름을 순서대로 배열하시오.",
  "steps": [
   "Client가 AS에 사용자 ID로 인증 요청",
   "AS가 TGT와 세션키 발급",
   "Client가 TGS에 TGT 제시하며 서비스 요청",
   "TGS가 서비스 티켓 발급",
   "Client가 서비스 서버에 티켓 제시",
   "서버가 티켓 검증 후 접근 허용"
  ],
  "e": "AS→TGT, TGS→서비스 티켓. TGT 유효기간 내에는 재인증 없이 SSO."
 },
 {
  "s": "s4",
  "t": "사용자 인증",
  "d": 1,
  "q": "챌린지-리스폰스 인증 절차를 순서대로 배열하시오.",
  "steps": [
   "클라이언트가 인증 요청",
   "서버가 난수 챌린지 전송",
   "클라이언트가 비밀키로 챌린지 연산해 응답",
   "서버가 동일 연산으로 검증"
  ],
  "e": "비밀번호를 보내지 않고 매번 챌린지가 달라 재전송·도청을 방어한다."
 },
 {
  "s": "s4",
  "t": "공개키·키교환",
  "d": 3,
  "q": "하이브리드 암호 방식으로 메시지를 보내는 절차를 순서대로 배열하시오.",
  "steps": [
   "송신자가 임의 세션키(대칭키) 생성",
   "세션키로 메시지를 대칭 암호화",
   "세션키를 수신자 공개키로 암호화",
   "암호문과 암호화된 세션키 전송",
   "수신자가 개인키로 세션키 복호 후 메시지 복호"
  ],
  "e": "데이터=대칭키(속도), 세션키 전달=공개키(키 분배 해결). TLS·PGP."
 },
 {
  "s": "s5",
  "t": "위험관리",
  "d": 2,
  "q": "위험관리 절차를 순서대로 배열하시오.",
  "steps": [
   "자산식별·평가",
   "위협·취약점 분석",
   "위험분석(산정)",
   "위험평가(DoA 비교)",
   "위험처리",
   "잔여위험 모니터링·재평가"
  ],
  "e": "자산 → 위협·취약점 → 산정 → DoA 비교 → 처리 → 잔여위험 관리."
 },
 {
  "s": "s5",
  "t": "ISMS-P 인증",
  "d": 1,
  "q": "ISMS-P 인증 절차를 순서대로 배열하시오.",
  "steps": [
   "신청",
   "계약",
   "심사",
   "결함조치",
   "심의(인증위원회)",
   "인증서 발급"
  ],
  "e": "신·계·심·결·심·발."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 2,
  "q": "BIA(업무영향분석) 수행 절차를 순서대로 배열하시오.",
  "steps": [
   "핵심업무 식별",
   "중단영향 분석",
   "복구목표(RTO·RPO) 설정",
   "복구 우선순위 결정"
  ],
  "e": "BIA 결과가 BCP 수립의 출발점."
 },
 {
  "s": "s5",
  "t": "BCP·재해복구",
  "d": 1,
  "q": "DR 사이트를 RTO가 짧은 순으로 배열하시오.",
  "steps": [
   "Mirror",
   "Hot",
   "Warm",
   "Cold"
  ],
  "e": "비용은 반대로 Mirror가 가장 비쌈."
 },
 {
  "s": "s5",
  "t": "CSAP·CC 평가",
  "d": 3,
  "q": "CSAP 인증 절차를 순서대로 배열하시오.",
  "steps": [
   "신청",
   "사전협의",
   "평가·인증(서류·현장)",
   "보안조치(결함 조치)",
   "인증위원회 심의",
   "인증서 발급"
  ],
  "e": "발급 후 사후관리. 사전협의에서 준비·평가범위 확정."
 }
];

CPPG.selfcheck = [
 {
  "g": "1과목 시스템 보안",
  "t": "rwx 표기와 8진수를 상호 변환하고 umask로 파일·디렉터리 기본 권한을 계산할 수 있다"
 },
 {
  "g": "1과목 시스템 보안",
  "t": "SetUID·SetGID·Sticky Bit의 의미·표기를 설명하고 find 점검 명령과 제거 명령을 쓸 수 있다"
 },
 {
  "g": "1과목 시스템 보안",
  "t": "/etc/passwd·/etc/shadow 필드를 해석해 UID 0·잠금·해시 알고리즘을 판단할 수 있다"
 },
 {
  "g": "1과목 시스템 보안",
  "t": "wtmp·btmp·lastlog·utmp와 secure·auth.log를 구분하고 무차별 대입 흔적을 분석할 수 있다"
 },
 {
  "g": "1과목 시스템 보안",
  "t": "윈도우 이벤트 ID(4624·4625·4672·4720·4732·1102·7045)와 Logon Type으로 공격 타임라인을 재구성할 수 있다"
 },
 {
  "g": "1과목 시스템 보안",
  "t": "BOF·포맷스트링·TOCTOU의 원리와 ASLR·DEP·Canary 등 대응 기법을 서술할 수 있다"
 },
 {
  "g": "2과목 네트워크 보안",
  "t": "TCP 3-way handshake·플래그와 주요 포트를 쓰고 tcpdump 출력에서 세션 흐름을 판독할 수 있다"
 },
 {
  "g": "2과목 네트워크 보안",
  "t": "SYN·FIN·NULL·Xmas 스캔을 응답 패턴으로 식별하고 탐지·차단 방안을 제시할 수 있다"
 },
 {
  "g": "2과목 네트워크 보안",
  "t": "SYN Flooding·Smurf·DRDoS 의 원리와 syncookies·Rate limit·Ingress 필터링 대응을 서술할 수 있다"
 },
 {
  "g": "2과목 네트워크 보안",
  "t": "ARP·DNS 스푸핑을 탐지하고 정적 ARP·DAI·DNSSEC 등 방어 대책을 쓸 수 있다"
 },
 {
  "g": "2과목 네트워크 보안",
  "t": "iptables 체인·타깃·옵션으로 요구사항에 맞는 방화벽 룰을 작성할 수 있다"
 },
 {
  "g": "2과목 네트워크 보안",
  "t": "Snort 룰 헤더·옵션(content·flags·threshold)을 해석하고 탐지 룰을 작성할 수 있다"
 },
 {
  "g": "3과목 애플리케이션 보안",
  "t": "HTTP 메서드·상태코드·쿠키 속성(Secure·HttpOnly·SameSite)을 보안 관점으로 설명할 수 있다"
 },
 {
  "g": "3과목 애플리케이션 보안",
  "t": "SQL 인젝션 시도를 웹 로그에서 식별하고 Prepared Statement 로 코드를 수정할 수 있다"
 },
 {
  "g": "3과목 애플리케이션 보안",
  "t": "Stored·Reflected·DOM XSS 와 CSRF 를 구분하고 출력 인코딩·CSP·CSRF 토큰 대응을 쓸 수 있다"
 },
 {
  "g": "3과목 애플리케이션 보안",
  "t": "파일 업로드·다운로드(경로 조작) 취약점의 조치 방안을 항목화해 서술할 수 있다"
 },
 {
  "g": "3과목 애플리케이션 보안",
  "t": "access_log 필드를 해석해 공격 시도·성공 여부(상태코드·응답 크기)를 판단할 수 있다"
 },
 {
  "g": "3과목 애플리케이션 보안",
  "t": "Apache·Nginx 보안 설정(디렉터리 리스팅·버전 노출·메서드 제한)을 적용할 수 있다"
 },
 {
  "g": "4과목 정보보안 일반",
  "t": "블록 암호 운영모드(ECB·CBC·CFB·OFB·CTR)의 IV 사용·병렬성·오류전파를 구분해 서술할 수 있다"
 },
 {
  "g": "4과목 정보보안 일반",
  "t": "RSA·DH·ECC의 수학적 기반과 DH 키 교환 절차·MITM 대응을 설명할 수 있다"
 },
 {
  "g": "4과목 정보보안 일반",
  "t": "해시 3대 안전성, HMAC 구조, 전자서명 생성·검증 흐름을 단계별로 쓸 수 있다"
 },
 {
  "g": "4과목 정보보안 일반",
  "t": "솔트·키 스트레칭으로 비밀번호 저장 코드를 개선하고 생일 공격 강도를 계산할 수 있다"
 },
 {
  "g": "4과목 정보보안 일반",
  "t": "Kerberos 6단계(AS·TGT·TGS·서비스 티켓)와 FIDO·SSO의 원리를 설명할 수 있다"
 },
 {
  "g": "4과목 정보보안 일반",
  "t": "BLP·Biba 규칙으로 읽기/쓰기 허용 여부를 판정하고 ACL·Capability를 구분할 수 있다"
 },
 {
  "g": "5과목 정보보안 관리·법규",
  "t": "ISMS-P 3개 영역과 통제 수(16·64·22)를 쓰고 ISMS와의 차이를 설명할 수 있다"
 },
 {
  "g": "5과목 정보보안 관리·법규",
  "t": "위험관리 절차와 위험처리 4유형을 예시와 함께 서술할 수 있다"
 },
 {
  "g": "5과목 정보보안 관리·법규",
  "t": "SLE·ALE를 계산하고 보안대책 도입 타당성을 판단할 수 있다"
 },
 {
  "g": "5과목 정보보안 관리·법규",
  "t": "RTO·RPO·MTD·WRT를 구분하고 BIA 결과로 DR 사이트를 선정할 수 있다"
 },
 {
  "g": "5과목 정보보안 관리·법규",
  "t": "민감정보·고유식별정보·주민등록번호의 처리 요건과 위탁·제3자 제공을 구분할 수 있다"
 },
 {
  "g": "5과목 정보보안 관리·법규",
  "t": "유출 통지·신고 시한(72시간)·기준(1,000명)과 접속기록 보관 기간을 적용할 수 있다"
 }
];

CPPG.roadmap = {
 "6주 표준": [
  "Week 1 — 시험개요·답안 7원칙 + 4과목 정보보안 일반(암호·인증·접근통제) 단답 암기",
  "Week 2 — 5과목 관리·법규(ISMS-P·위험관리·개인정보보호법) + 함정노트",
  "Week 3 — 1과목 시스템 보안(권한·계정·로그 경로·명령어) — 실무형 직접 타이핑",
  "Week 4 — 2과목 네트워크 보안(스캔·DoS·iptables·Snort 룰·패킷 분석)",
  "Week 5 — 3과목 애플리케이션 보안(OWASP·SQLi·XSS·CSRF·웹 로그·시큐어코딩)",
  "Week 6 — 예시문제 서술·실무 손으로 작성 + 시험지 생성 3회 + 오답노트 2회독"
 ],
 "3주 단기": [
  "Week 1 — 4·5과목 단답 암기(약어·법규 키워드) + 핵심시트",
  "Week 2 — 1·2·3과목 실무형(명령어·룰·로그·코드) + 예시문제",
  "Week 3 — 서술형 모범답안 백지 재현 + 오답노트"
 ],
 "시험 3일 전": [
  "D-3 — 함정노트 전체 + 헷갈리는 쌍(IDS/IPS·DAC/MAC/RBAC·인증/인가)",
  "D-2 — iptables·tcpdump·Snort 룰·/var/log 경로 손으로 써 보기",
  "D-1 — 예시문제 서술형 키워드 복원 + 단답 오답만 다시 풀기"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "SetUID·SetGID·Sticky Bit (4000·2000·1000)",
  "find / -perm -4000 -type f",
  "umask 계산 (파일 666·디렉터리 777 기준)",
  "/etc/passwd 7필드·/etc/shadow 해시($1·$5·$6)",
  "wtmp(last)·btmp(lastb)·lastlog·utmp(who)",
  "/var/log/secure vs /var/log/auth.log",
  "윈도우 이벤트 4624·4625·4634",
  "Logon Type 10 = RDP",
  "버퍼 오버플로우 원리·위험 함수",
  "ASLR·DEP(NX)·Stack Canary",
  "무결성 점검 Tripwire·AIDE",
  "블록 운영모드 ECB·CBC·CTR(IV·병렬·패턴 노출)",
  "RSA 소인수분해 vs DH 이산대수",
  "DH 키 교환 절차·MITM 대응",
  "HMAC 구조·단순 해시와 차이",
  "전자서명 생성·검증 흐름",
  "Kerberos AS·TGS·TGT 흐름",
  "BLP(NRU·NWD) vs Biba(NRD·NWU)",
  "CRL vs OCSP",
  "솔트·키 스트레칭(bcrypt·PBKDF2)",
  "기밀성(수신자 공개키) vs 서명(송신자 개인키)",
  "ISMS-P 3영역·통제 수(16·64·22=102)",
  "위험처리 4유형(감소·전가·수용·회피)",
  "SLE·ALE 계산",
  "RTO vs RPO",
  "DR 사이트(Mirror·Hot·Warm·Cold)",
  "개인정보 유출 통지·신고(72시간·1,000명)",
  "안전성 확보조치 항목",
  "민감정보·고유식별정보·주민등록번호",
  "위탁 vs 제3자 제공",
  "정량 vs 정성 위험분석(델파이)",
  "TCP 플래그·3-way handshake",
  "스캔 유형 식별(SYN·FIN·NULL·Xmas)",
  "SYN Flooding·syncookies",
  "iptables 룰 작성",
  "Snort 룰 구조(헤더·옵션)",
  "ARP 스푸핑 탐지·대응",
  "SQL 인젝션 로그 식별·Prepared Statement",
  "XSS 유형·출력 인코딩",
  "CSRF 토큰·SameSite",
  "파일 업로드 취약점 조치",
  "access_log 분석(상태코드·응답 크기)"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "PAM 4타입·Control Flag",
  "pam_pwquality·pam_faillock·pam_wheel",
  "sudo vs su, visudo",
  "/etc/login.defs PASS_MAX_DAYS",
  "rsyslog @·@@ 원격 전송·Severity",
  "4672·4720·4732·1102·7045",
  "SID RID 500·501, SAM·lsass·Mimikatz",
  "레지스트리 Run·RunOnce 자동실행",
  "Virus·Worm·Trojan·Rootkit 비교",
  "TOCTOU 레이스 컨디션·심볼릭 링크",
  "netstat·ss·lsof·ps 점검 명령",
  "AES 블록·키·라운드(10/12/14)",
  "Feistel vs SPN 구조",
  "ECC 256 ≈ RSA 3072",
  "PFS(DHE·ECDHE)",
  "생일 공격 2^(n/2)",
  "HOTP vs TOTP",
  "인증 3요소·MFA·FAR/FRR/EER",
  "챌린지-리스폰스",
  "FIDO2(WebAuthn·CTAP)",
  "X.509 필드·self-signed 루트 CA",
  "DAC·MAC·RBAC·ABAC",
  "ACL vs Capability List",
  "정책·표준·지침·절차",
  "CISO vs CPO 근거법",
  "ISMS-P 심사 종류(최초·사후·갱신)",
  "BIA·MTD = RTO + WRT",
  "DoA·잔여위험",
  "개인정보 영향평가(PIA)",
  "접속기록 보관(1년·2년)",
  "개인정보 파기(5일 이내)",
  "정보통신망법 광고(Opt-in·야간·2년)",
  "망분리(물리·논리 VDI)",
  "CSAP 상·중·하 등급",
  "CC·EAL1~7(PP·ST·TOE)",
  "Smurf·DRDoS·Ingress 필터링",
  "tcpdump 필터 표현식",
  "IPsec AH·ESP·IKE",
  "WPA2·WPA3",
  "DNS 스푸핑·DNSSEC",
  "HTTP 메서드·상태코드",
  "쿠키 속성(Secure·HttpOnly)",
  "CSP",
  "경로 조작(../) 대응",
  "Apache·Nginx 보안 설정",
  "SPF·DKIM·DMARC"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "[서술형] SetUID 보안 위협과 점검·대응",
  "problem": "리눅스 특수 권한 SetUID의 개념과 보안 위협을 설명하고, 이를 점검(탐지)하는 방법과 대응 방안을 서술하시오.",
  "steps": [
   "정의를 두괄식으로: 실행자가 아닌 파일 소유자 권한으로 실행",
   "위협: root 소유 SetUID 파일 취약점 → 권한 상승, 공격 표면 확대",
   "표기: 소유자 x자리 s, 8진수 4000",
   "점검: find 명령 + 정상 목록(기준선) 비교",
   "대응: 권한 제거 명령까지 구체화"
  ],
  "answer": "1) 정의: SetUID는 실행 파일에 설정 시 실행 사용자가 아닌 파일 소유자(주로 root) 권한으로 프로세스가 동작(EUID=소유자)하게 하는 특수 권한이다. 표기 -rwsr-xr-x, 8진수 4000 (예 /usr/bin/passwd 4755).\n2) 보안 위협: ① root 소유 SetUID 파일에 BOF 등 취약점이 있으면 일반 사용자가 root 권한 획득(권한 상승) ② 불필요한 SetUID 파일은 공격 표면 확대 ③ 공격자가 SetUID 셸을 백도어로 심음.\n3) 점검: ① find / -perm -4000 -type f 2>/dev/null 로 전수 탐색(SetGID -2000) ② 결과를 인가된 정상 목록과 비교 ③ ls -l 로 s 비트 확인.\n4) 대응: ① 불필요 SetUID 제거 chmod u-s 파일 ② 꼭 필요한 파일만 유지(최소 권한) ③ Tripwire·AIDE 무결성 점검으로 신규 SetUID 상시 감시.",
  "traps": [
   "'실행자 권한으로 실행'이라고 쓰면 오답 — 소유자 권한",
   "점검 명령에서 -perm 4000(하이픈 없음)은 정확히 4000만 검색",
   "대응을 '삭제'로만 쓰지 말고 chmod u-s 로 구체화"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "[서술형] 버퍼 오버플로우 원리와 대응 기법",
  "problem": "Stack 버퍼 오버플로우의 동작 원리를 리턴 주소 관점에서 설명하고, 원인 함수와 운영체제·컴파일러 차원의 대응 기법 3가지를 서술하시오.",
  "steps": [
   "원리: 지역 버퍼 초과 → Return Address 덮어쓰기 → EIP 탈취",
   "원인 함수와 안전 대체 함수 쌍으로 제시",
   "대응 기법 3개를 각각 한 줄 정의(혼동 금지)"
  ],
  "answer": "1) 원리: 경계 검사 없이 입력을 스택의 지역 버퍼에 복사하면 버퍼를 넘친 데이터가 SFP와 Return Address를 덮어쓴다. 함수 복귀 시 변조된 주소로 EIP/RIP가 이동해 공격자 쉘코드가 실행된다.\n2) 원인 함수: gets, strcpy, strcat, sprintf, scanf → 대체: fgets, strncpy, strncat, snprintf(길이 제한).\n3) 대응 기법: ① ASLR — 스택·힙·라이브러리 주소 임의화로 쉘코드 주소 예측 방지 ② DEP/NX — 데이터 영역 실행 금지(W^X) ③ Stack Canary(SSP) — 리턴 주소 앞 카나리 값을 복귀 전 검증, 변조 시 abort. (추가: RELRO, 안전 언어·경계 검사)",
  "traps": [
   "ASLR(주소 임의화)과 DEP(실행 금지) 역할을 바꿔 쓰지 않기",
   "Heap BOF(메타데이터 변조)와 Stack BOF 원리 혼동 금지",
   "대체 함수를 쓸 때 길이 인자를 버퍼 크기로 지정해야 의미"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "[실무형] ls -l·/etc/passwd 분석 — 위험 요소 조치",
  "problem": "침해 의심 서버의 출력이다.\n\n$ ls -l /usr/local/bin /tmp\n-rwsr-xr-x 1 root root 42112 Mar  2 10:11 backup\n-rwsr-xr-x 1 root root 90233 Mar  2 10:12 .helper\n-rwsrwxrwx 1 root root  8421 Jun  1 03:02 sh.bak\ndrwxrwxrwt 8 root root  4096 Jun  1 03:10 .\n\n$ cat /etc/passwd (일부)\nroot:x:0:0:root:/root:/bin/bash\nbackupsvc:x:0:0::/home/backupsvc:/bin/bash\napp:x:1001:1001::/home/app:/bin/bash\n\n(1) SetUID 파일 전수 탐색 명령 (2) sh.bak 권한의 8진수 (3) 즉시 조치 위험 요소 2가지와 조치 명령",
  "steps": [
   "SetUID 탐색은 -perm -4000 -type f",
   "rws rwx rwx → 특수권한 4 + 777",
   "others 실행 가능 + root SetUID 셸 → 권한 상승 백도어",
   "passwd 3번째 필드 UID 0 중복 계정 식별",
   "/tmp의 t(Sticky)는 정상 — 오인 금지"
  ],
  "answer": "(1) find / -perm -4000 -type f 2>/dev/null\n(2) 4777\n(3) ① /tmp/sh.bak: root 소유 SetUID 셸을 누구나 실행 → root 권한 획득 백도어. 조치 rm -f /tmp/sh.bak (보존 필요 시 chmod 700 후 격리)\n② backupsvc: UID 0 → 숨겨진 root 계정. 조치 usermod -L backupsvc(또는 passwd -l), UID 변경·계정 삭제 후 감사\n(+ 숨김 파일 .helper SetUID는 무결성·해시 검증)",
  "traps": [
   "8진수를 777로만 쓰면 SetUID 비트 누락",
   "drwxrwxrwt(/tmp, 1777)는 정상 Sticky Bit",
   "-perm 4000(하이픈 없음)은 정확히 일치 검색"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "[실무형] /var/log/secure 분석 — 무차별 대입 판단·차단",
  "problem": "RHEL 서버의 /var/log/secure 발췌다.\n\nJun  9 02:11:03 web01 sshd[2841]: Failed password for root from 203.0.113.77 port 51122 ssh2\nJun  9 02:11:05 web01 sshd[2843]: Failed password for root from 203.0.113.77 port 51130 ssh2\nJun  9 02:11:07 web01 sshd[2845]: Failed password for invalid user admin from 203.0.113.77 port 51141 ssh2\nJun  9 02:11:09 web01 sshd[2847]: Failed password for invalid user oracle from 203.0.113.77 port 51150 ssh2\nJun  9 02:13:44 web01 sshd[2902]: Accepted password for app from 198.51.100.20 port 60002 ssh2\n\n(1) 공격 유형과 근거 2가지 (2) 실패 IP 집계 명령 (3) 차단 명령과 근본 대응 3가지",
  "steps": [
   "Failed password 반복 + 동일 IP + 초 단위 간격",
   "invalid user + 공통 계정명 순차 → 사전 공격",
   "Accepted 줄은 정상 로그인 — 공격 IP와 구분",
   "IP 필드는 from 뒤 — awk $(NF-3)",
   "iptables DROP + sshd_config 설정 + fail2ban"
  ],
  "answer": "(1) 무차별 대입(Brute Force)·사전(Dictionary) 공격. 근거 ① 동일 IP 203.0.113.77에서 2초 간격 Failed password 반복 ② root·admin·oracle 등 공통 계정명 순차 시도(invalid user).\n(2) grep \"Failed password\" /var/log/secure | awk '{print $(NF-3)}' | sort | uniq -c | sort -nr → 203.0.113.77\n(3) 차단: iptables -A INPUT -s 203.0.113.77 -j DROP (또는 /etc/hosts.deny 에 sshd: 203.0.113.77)\n근본 대응: ① PermitRootLogin no ② PasswordAuthentication no(공개키 인증) ③ fail2ban 도입·MaxAuthTries 축소. (로그는 원격 syslog로 보존)",
  "traps": [
   "198.51.100.20(Accepted)은 정상 로그인 — 공격 IP로 쓰지 않기",
   "Debian 계열이면 /var/log/auth.log",
   "lastb(btmp)로도 실패 이력 확인 가능 — wtmp(last)는 성공 이력"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "[실무형] 윈도우 보안 이벤트 로그 타임라인 분석",
  "problem": "윈도우 서버 Security 로그 요약이다.\n\n02:10~02:14  4625 (Logon Type 10, 원본 IP 203.0.113.9) × 812건\n02:15:03     4624 (Logon Type 10, 계정 svc_admin, 원본 IP 203.0.113.9)\n02:15:03     4672 (svc_admin)\n02:17:40     4720 (계정 생성: helpdesk$)\n02:17:52     4732 (helpdesk$ → Administrators)\n02:21:10     1102\n\n(1) 공격 흐름을 단계별로 해석 (2) 각 단계의 이벤트 ID 근거 (3) 대응 방안",
  "steps": [
   "4625 대량 + Type 10 → RDP 무차별 대입",
   "4624 Type 10 + 4672 → 탈취 계정으로 관리자 권한 로그온",
   "4720 + 4732 → 지속성용 계정 생성·관리자 그룹 추가",
   "1102 → 흔적 제거 시도",
   "대응은 차단·계정·정책·로그 보존 축으로"
  ],
  "answer": "(1)(2) ① 초기 침투: 4625(Type 10) 812건 → RDP 무차별 대입 ② 계정 탈취: 4624 Type 10 성공 + 4672 특수 권한 → svc_admin으로 관리자 권한 원격 로그온 ③ 지속성 확보: 4720 계정 생성, 4732 로컬 Administrators 그룹 추가(권한 상승) ④ 흔적 제거: 1102 감사 로그 삭제.\n(3) 대응: ① 203.0.113.9 차단, RDP 외부 노출 제거(VPN·NLA) ② svc_admin 패스워드 변경·helpdesk$ 삭제·관리자 그룹 점검 ③ 계정 잠금 정책·MFA ④ 로그를 SIEM·원격 서버로 전송해 삭제 대비, 감사 정책(로그온·계정관리·프로세스 추적) 활성화.",
  "traps": [
   "4624=성공, 4625=실패 혼동 금지",
   "Logon Type 10=RDP, 3=네트워크",
   "1102 이후 로컬 로그 공백 — 원격 수집 로그로 보완 분석"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "[실무형] 패킷 덤프로 SYN Flood 판별·필터·대응",
  "problem": "웹서버(10.0.0.5) 응답이 느려졌다.\n\n$ tcpdump -nn -c 6 port 80\n10:00:01.001 IP 45.1.2.3.1111 > 10.0.0.5.80: Flags [S], seq 100\n10:00:01.001 IP 10.0.0.5.80 > 45.1.2.3.1111: Flags [S.], seq 900, ack 101\n10:00:01.002 IP 77.8.9.1.2222 > 10.0.0.5.80: Flags [S], seq 300\n10:00:01.002 IP 10.0.0.5.80 > 77.8.9.1.2222: Flags [S.], seq 700, ack 301\n(같은 패턴 초당 수천 건, 이후 ACK 없음)\n$ ss -tan state syn-recv | wc -l\n38211\n\n(1) 공격 명칭과 근거 (2) tcpdump·Wireshark에서 순수 SYN만 보는 표현식 (3) 커널 설정 1가지와 방화벽 대응 1가지",
  "steps": [
   "다수 출발지 SYN → 서버 SYN+ACK → ACK 미회신 확인",
   "SYN_RECV 38,211 = 반연결 큐 고갈",
   "tcp[13] SYN 비트 2 / Wireshark syn==1 && ack==0",
   "SYN Cookie로 Backlog 우회",
   "속도 제한 또는 상위 장비 차단"
  ],
  "answer": "(1) SYN Flood — 다수(위조) 출발지의 SYN에 서버가 SYN+ACK를 보내지만 ACK가 오지 않아 SYN_RECV 반연결이 누적, Backlog 고갈\n(2) tcpdump 'tcp[13] == 2' (SYN 포함은 'tcp[13] & 2 != 0') / Wireshark tcp.flags.syn == 1 && tcp.flags.ack == 0\n(3) sysctl -w net.ipv4.tcp_syncookies=1 (Backlog 증대 net.ipv4.tcp_max_syn_backlog 병행)\n   iptables -A INPUT -p tcp --syn -m limit --limit 20/s -j ACCEPT 후 -p tcp --syn -j DROP, 또는 ISP·DDoS 대응 장비 연계",
  "traps": [
   "출발지가 위조라 단일 IP 차단만으로는 효과 제한",
   "SYN Cookie를 'Backlog 증설'로 설명하면 감점",
   "Wireshark 문법을 tcpdump에 쓰는 혼동"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "[실무형] iptables 룰 순서 오류 수정",
  "problem": "관리자가 다음 순서로 룰을 입력했지만 관리 PC(10.0.0.5)에서 SSH가 되지 않는다.\n\n# iptables -L INPUT -n --line-numbers\n1  DROP    tcp  --  0.0.0.0/0   0.0.0.0/0   tcp dpt:22\n2  ACCEPT  tcp  --  10.0.0.5    0.0.0.0/0   tcp dpt:22\n\n(1) 접속이 안 되는 이유 (2) 1번 룰은 유지한 채 해결하는 명령 (3) 재부팅 후에도 유지되게 하는 방법",
  "steps": [
   "iptables는 위에서 아래로 첫 매칭 적용",
   "1번 DROP이 먼저 매칭",
   "-I INPUT 1 로 허용 룰을 맨 앞에",
   "중복된 2번 룰 삭제",
   "iptables-save로 저장"
  ],
  "answer": "(1) 룰은 위→아래 순서로 처음 일치한 룰이 적용되므로 1번 DROP이 먼저 매칭되어 2번 ACCEPT에 도달하지 못함\n(2) iptables -I INPUT 1 -p tcp -s 10.0.0.5 --dport 22 -j ACCEPT (기존 2번은 iptables -D INPUT 3 으로 정리)\n(3) iptables-save > /etc/sysconfig/iptables (Debian 계열은 netfilter-persistent save)",
  "traps": [
   "-A로 다시 추가하면 여전히 DROP 뒤",
   "-I 뒤 번호 생략 시 기본 1(맨 앞)이지만 명시가 안전",
   "저장하지 않으면 재부팅 시 룰 소실"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "[실무형] Snort 탐지 룰 작성",
  "problem": "다음 요구에 맞는 Snort 룰을 작성하시오. (로컬 룰 sid는 1000101부터)\n(1) 외부에서 내부 Telnet(23) 접속 시도 경보\n(2) 외부→내부 웹(80) 요청에 대소문자 무관 'union select' 문자열이 있으면 경보\n(3) 동일 출발지가 60초 안에 내부 SSH(22)로 SYN을 5회 넘게 보내면 경보",
  "steps": [
   "헤더: action proto src sport -> dst dport",
   "옵션 필수 msg·sid, rev 권장",
   "content + nocase, flow로 서버 방향 지정",
   "flags:S + detection_filter track by_src"
  ],
  "answer": "(1) alert tcp $EXTERNAL_NET any -> $HOME_NET 23 (msg:\"Telnet access attempt\"; flags:S; sid:1000101; rev:1;)\n(2) alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:\"SQLi union select\"; flow:to_server,established; content:\"union select\"; nocase; sid:1000102; rev:1;)\n(3) alert tcp $EXTERNAL_NET any -> $HOME_NET 22 (msg:\"SSH brute force\"; flags:S; detection_filter:track by_src, count 5, seconds 60; sid:1000103; rev:1;)",
  "traps": [
   "sid를 1,000,000 미만으로 쓰면 공식 룰과 충돌",
   "방향 연산자 누락·포트 위치 혼동",
   "임계치를 track by_dst로 쓰면 출발지별 집계가 아님"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "[서술형] ARP 스푸핑의 원리·탐지·대응",
  "problem": "사내 LAN에서 일부 PC의 통신이 외부로 유출된 정황이 있다. ARP 스푸핑의 (1) 원리 (2) 탐지 방법 2가지 (3) 대응 방안 3가지를 서술하시오.",
  "steps": [
   "ARP 무상태 특성 → 위조 Reply 수용",
   "게이트웨이 IP ↔ 공격자 MAC 오염 → MITM",
   "arp -a 비교·arpwatch",
   "단말: 정적 ARP / 스위치: DAI·DHCP Snooping·Port Security / 근본: 암호화"
  ],
  "answer": "(1) 원리: ARP는 요청 없이 받은 Reply도 캐시에 반영하는 무상태 프로토콜이므로, 공격자가 '게이트웨이 IP = 공격자 MAC'인 위조 Reply를 반복 전송해 피해자 캐시를 오염시키고 트래픽을 자신에게 경유시켜(MITM) 스니핑·변조함\n(2) 탐지: ① arp -a / ip neigh 로 게이트웨이 MAC이 정상값과 다른지, 서로 다른 IP가 같은 MAC을 가리키는지 확인 ② arpwatch·IDS로 MAC 변경 경보, Wireshark arp 필터로 요청 없는 Reply 반복 확인\n(3) 대응: ① 게이트웨이 정적 ARP 등록 ② 스위치 DHCP Snooping + DAI ③ Port Security, 그리고 TLS·SSH 등 암호화로 유출 내용 보호",
  "traps": [
   "'ARP는 L3 프로토콜' 등 계층 오기",
   "대응을 단말 조치 하나로만 쓰면 부분점수",
   "MAC Flooding과 원리 혼동"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "[서술형] IPSec AH·ESP와 전송·터널 모드 비교",
  "problem": "본사–지사 간 VPN을 설계한다. (1) AH와 ESP의 보안 서비스 차이 (2) Transport와 Tunnel 모드의 차이 (3) 지사가 NAT 뒤에 있을 때 권장 구성을 서술하시오.",
  "steps": [
   "AH: 무결성·출처 인증, 암호화 없음",
   "ESP: 기밀성 + 무결성·인증",
   "Transport: 원본 IP 헤더 유지, 종단 간",
   "Tunnel: 새 IP 헤더, 게이트웨이 간",
   "NAT: AH 불가 → ESP + NAT-T(UDP 4500)"
  ],
  "answer": "(1) AH는 무결성·데이터 출처 인증·재전송 방지를 제공하나 암호화는 없음. ESP는 이에 더해 페이로드 암호화로 기밀성을 제공\n(2) Transport 모드는 원본 IP 헤더를 유지하고 페이로드만 보호(호스트 간), Tunnel 모드는 원본 패킷 전체를 캡슐화하고 새 IP 헤더를 붙여 내부 주소까지 보호(게이트웨이 간)\n(3) 본사–지사 게이트웨이 간 ESP Tunnel 모드 + NAT-T(UDP 4500 캡슐화). AH는 IP 헤더 무결성 검증 때문에 NAT를 통과할 수 없음",
  "traps": [
   "AH도 암호화한다고 쓰는 오류",
   "Main/Aggressive(IKE Phase1 모드)와 Transport/Tunnel 혼동",
   "NAT-T 포트를 500으로 쓰는 실수(IKE는 500, NAT-T는 4500)"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[서술형] SQL 인젝션의 원리와 대응 방안",
  "problem": "SQL 인젝션 취약점의 발생 원리와 영향, 개발·운영 측면의 대응 방안을 서술하시오.",
  "steps": [
   "원리: 입력값이 SQL 문에 문자열로 결합되어 쿼리 구조로 해석",
   "영향: 인증 우회, 데이터 유출·변조, DB 권한에 따라 시스템 명령 실행",
   "개발: PreparedStatement·ORM 바인딩, 허용목록 검증",
   "운영: DB 계정 최소 권한, 상세 오류 메시지 차단, WAF 보조"
  ],
  "answer": "① 정의: 검증되지 않은 입력이 SQL 구문에 결합되어 공격자가 의도한 쿼리가 실행되는 취약점\n② 영향: 인증 우회, 데이터 유출·변조·삭제\n③ 대응(개발): PreparedStatement(파라미터화 쿼리)·MyBatis #{} 사용, 입력값 화이트리스트 검증\n④ 대응(운영): DB 계정 최소 권한, 상세 오류 메시지 노출 차단, WAF 를 보조 수단으로 적용",
  "traps": [
   "WAF 를 근본 대책으로 쓰면 감점",
   "${} 를 안전한 방식으로 서술하면 오답"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[서술형] XSS 와 CSRF 의 차이와 각각의 대응",
  "problem": "XSS 와 CSRF 를 공격 대상·원리 측면에서 비교하고 각각의 대응 방안을 쓰시오.",
  "steps": [
   "XSS: 사용자 브라우저에서 악성 스크립트 실행 — 사용자를 공격",
   "CSRF: 인증된 사용자의 브라우저로 위조 요청 전송 — 서버(사용자 권한)를 악용",
   "XSS 대응: 출력 인코딩, CSP, HttpOnly",
   "CSRF 대응: CSRF 토큰, SameSite, 재인증"
  ],
  "answer": "① XSS: 입력값이 인코딩 없이 출력되어 피해자 브라우저에서 스크립트가 실행됨 → 세션 탈취·화면 변조. 대응: 컨텍스트별 출력 인코딩, CSP, 쿠키 HttpOnly\n② CSRF: 로그인된 사용자의 브라우저가 공격자가 유도한 요청을 서버로 보냄 → 사용자 권한으로 송금·정보 변경. 대응: 요청별 CSRF 토큰 검증, SameSite 쿠키, Origin 검증, 중요 거래 재인증\n③ 핵심 차이: XSS 는 클라이언트에서 코드 실행, CSRF 는 서버가 사용자의 정상 요청으로 오인",
  "traps": [
   "HttpOnly 를 CSRF 대책으로 쓰면 오답",
   "출력 인코딩을 CSRF 대책으로 쓰면 오답"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[실무형] 웹 로그로 공격 성공 여부 판단",
  "problem": "다음은 게시판 조회 페이지의 접근 로그 요약이다(파라미터 원문은 생략).\n\n· 09:12:01~09:12:40  IP A, 같은 조회 URL 에 SQL 구문 문자가 포함된 파라미터로 120회 요청\n· 대부분 응답: 상태코드 500, 응답 크기 1.2KB\n· 09:12:41  IP A, 상태코드 200, 응답 크기 186KB\n· 같은 페이지의 평상시 정상 응답: 상태코드 200, 약 4KB\n· User-Agent: sqlmap/1.x\n\n(1) 공격 유형 (2) 성공 여부와 판단 근거 (3) 즉시 조치 2가지",
  "steps": [
   "SQL 구문 문자 파라미터 + 자동화 도구 UA → SQL 인젝션 시도",
   "500 다수 = 입력이 쿼리 오류 유발(취약 정황)",
   "마지막 200·186KB 는 정상 4KB 대비 급증 → 데이터 대량 응답",
   "조치: IP 차단·해당 페이지 코드 수정·DB 로그 확인"
  ],
  "answer": "(1) 자동화 도구(sqlmap)를 이용한 SQL 인젝션 공격\n(2) 성공 가능성 높음 — 오류(500) 반복 후 200 응답의 크기가 정상(4KB)보다 약 46배(186KB) 커서 DB 데이터가 대량 응답된 정황\n(3) ① 공격 IP 차단(방화벽·WAF) ② 해당 쿼리를 PreparedStatement 로 수정하고 오류 메시지 노출 차단 (+ DB 접근 로그로 유출 범위 확인, 필요 시 개인정보 유출 신고)",
  "traps": [
   "200 만 보고 정상이라 판단하면 오답",
   "UA 만으로 확정하지 말고 크기·상태코드를 근거로"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[실무형] 쿠키·웹서버 설정 보안 수정",
  "problem": "점검 결과 다음 설정이 확인되었다.\n\n· Set-Cookie: SESSIONID=8f3a...; Path=/\n· Apache: Options Indexes FollowSymLinks / ServerTokens Full / TraceEnable On\n· 응답 헤더에 X-Frame-Options·CSP 없음\n\n(1) 쿠키 설정을 보안 기준으로 수정 (2) Apache 설정 3항목 수정 (3) 추가할 보안 헤더 2가지와 값",
  "steps": [
   "쿠키: Secure·HttpOnly·SameSite 추가",
   "디렉터리 리스팅·심볼릭 링크 제한",
   "버전 노출 최소화, TRACE 비활성화",
   "클릭재킹·스크립트 출처 제한 헤더"
  ],
  "answer": "(1) Set-Cookie: SESSIONID=8f3a...; Path=/; Secure; HttpOnly; SameSite=Lax\n(2) Options -Indexes -FollowSymLinks / ServerTokens Prod (+ ServerSignature Off) / TraceEnable Off\n(3) X-Frame-Options: DENY(또는 SAMEORIGIN), Content-Security-Policy: default-src 'self'",
  "traps": [
   "Secure 를 '암호화'로 설명하면 감점",
   "SameSite=None 을 Secure 없이 쓰면 오답"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "서술형 — 대칭키·공개키 비교와 하이브리드 암호",
  "problem": "대칭키 암호와 공개키 암호의 차이점(키·속도·키 개수·제공 기능)을 비교하고, 두 방식을 결합한 하이브리드 암호의 동작을 서술하시오. (10점)",
  "steps": [
   "키 구조 비교: 1키 vs 키쌍",
   "속도·용도 비교: 대칭 빠름(대용량) vs 공개키 느림(키교환·서명)",
   "키 개수: N(N-1)/2 vs 2N",
   "제공 기능: 부인방지는 공개키만",
   "하이브리드 3단계 서술"
  ],
  "answer": "① 키: 대칭=암·복호화 동일 비밀키 / 공개키=공개키·개인키 쌍\n② 속도: 대칭 빠름(대용량 데이터) / 공개키 느림(키 교환·전자서명)\n③ 키 개수(N명): 대칭 N(N-1)/2 / 공개키 2N → 대칭은 키 분배·관리 문제\n④ 기능: 부인방지·전자서명은 공개키만 가능(대칭은 키 공유)\n⑤ 대표: AES·SEED·ARIA / RSA·ECC·DH\n⑥ 하이브리드: 1) 세션키(대칭키)로 데이터 암호화 2) 세션키를 수신자 공개키로 암호화해 함께 전송 3) 수신자는 개인키로 세션키 복호 후 데이터 복호 → 속도와 키 분배 동시 해결(TLS·PGP)",
  "traps": [
   "데이터 자체를 공개키로 암호화한다고 쓰면 오답 — 공개키로는 세션키만",
   "키 개수를 대칭 2N으로 바꿔 쓰는 실수",
   "대칭키로 부인방지가 된다고 서술"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "서술형 — BLP·Biba 규칙 판정",
  "problem": "보안등급 TS > S > C > U 인 시스템에서 다음 요청의 허용/거부를 BLP 모델과 Biba 모델(무결성 등급 동일 서열 가정) 각각으로 판정하고 근거를 쓰시오. (10점)\n(가) S 등급 주체가 TS 등급 문서를 읽기\n(나) S 등급 주체가 C 등급 문서에 쓰기\n(다) S 등급 주체가 C 등급 문서를 읽기",
  "steps": [
   "BLP=기밀성: No Read Up, No Write Down",
   "Biba=무결성: No Read Down, No Write Up",
   "각 요청의 방향(상위/하위·읽기/쓰기) 식별",
   "모델별로 규칙 대입"
  ],
  "answer": "(가) 상위 읽기: BLP 거부(No Read Up) / Biba 허용(상위 읽기는 오염 위험 없음)\n(나) 하위 쓰기: BLP 거부(No Write Down — 기밀이 하위로 유출) / Biba 허용(하위 쓰기 허용)\n(다) 하위 읽기: BLP 허용 / Biba 거부(No Read Down — 하위 오염 데이터 유입)\n※ 정리: BLP는 기밀성(NRU·NWD), Biba는 무결성(NRD·NWU)으로 방향이 정반대",
  "traps": [
   "BLP와 Biba 규칙 방향을 뒤바꾸는 실수",
   "판정만 쓰고 규칙명(No Read Up 등)·보호 목표를 누락하면 감점",
   "Biba를 기밀성 모델로 서술"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "서술형 — 인증서 신뢰 원리와 CRL·OCSP",
  "problem": "PKI에서 인증서가 공개키의 신뢰를 보장하는 원리를 설명하고, 인증서 폐기 확인 방식인 CRL과 OCSP를 비교하시오. (10점)",
  "steps": [
   "CA가 공개키+신원에 서명하는 구조",
   "검증자의 CA 공개키 검증 과정",
   "MITM 방지 효과",
   "CRL·OCSP 방식·실시간성·단점 비교"
  ],
  "answer": "① 원리: CA가 자신의 개인키로 사용자 공개키+신원(Subject)에 전자서명한 X.509 인증서 발급\n② 검증: 검증자는 신뢰하는 CA(루트는 self-signed) 공개키로 서명 검증 → 위·변조·위장 여부 확인, 가짜 공개키 주입(MITM) 차단\n③ CRL: 폐기 인증서 목록을 주기적으로 일괄 다운로드 → 실시간성 낮음, 목록 용량 증가\n④ OCSP: 특정 인증서 상태를 실시간 질의 → 즉시성 높음, CA 부하는 OCSP Stapling으로 완화\n⑤ 구성요소: CA(발급)·RA(등록)·VA(검증)",
  "traps": [
   "CA가 사용자 개인키로 서명한다고 쓰는 실수 — CA 자신의 개인키",
   "CRL을 실시간 질의로 서술",
   "OCSP Stapling을 누락하면 가점 기회 상실"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "실무형 — 비밀번호 저장 DB·코드 분석",
  "problem": "다음은 회원 비밀번호 저장 코드와 DB 일부이다.\n\n$hash = md5($_POST['pw']);\n$db->query(\"UPDATE users SET pw='$hash' WHERE id='$id'\");\n\nid     | pw\nalice  | 5f4dcc3b5aa765d61d8327deb882cf99\nbob    | 5f4dcc3b5aa765d61d8327deb882cf99\n\n(1) 문제점 3가지를 쓰시오.\n(2) 안전한 저장 방안을 함수명을 포함해 쓰시오.",
  "steps": [
   "해시 길이(32 hex=128bit)로 MD5 판단",
   "두 계정 해시 동일 → 솔트 부재 판단",
   "쿼리 문자열 직접 결합 → SQL 인젝션 판단",
   "전용 해시·솔트·키 스트레칭·바인딩으로 개선"
  ],
  "answer": "(1) ① MD5 사용 — 충돌 발견·고속 연산으로 무차별·레인보우 테이블에 취약\n    ② 솔트 미사용 — alice·bob 해시가 같아 동일 비밀번호 노출, 사전계산 공격 용이\n    ③ SQL 인젝션 — $hash·$id를 쿼리에 직접 삽입(바인딩 없음)\n(2) ① 비밀번호 전용 해시: bcrypt·scrypt·Argon2·PBKDF2\n    ② 사용자별 랜덤 솔트 + 키 스트레칭(반복·work factor)\n    ③ PHP 예: $hash = password_hash($_POST['pw'], PASSWORD_BCRYPT); 검증은 password_verify\n    ④ 쿼리는 prepare()/바인딩(PreparedStatement)으로 실행",
  "traps": [
   "MD5에 솔트만 추가하면 충분하다고 서술 — 고속 해시라 GPU 무차별에 약함",
   "SHA-256만 쓰고 솔트·스트레칭 누락 시 부분 감점",
   "SQL 인젝션 문제를 놓치는 실수"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "실무형 — openssl 명령 점검",
  "problem": "운영자가 백업 파일 보호에 다음 명령을 사용했다.\n\n$ openssl genrsa -out server.key 1024\n$ openssl enc -aes-128-ecb -in backup.tar -out backup.enc -k pass123\n$ openssl dgst -md5 backup.enc > backup.md5\n\n(1) 각 명령의 보안상 문제점을 쓰시오.\n(2) 개선된 명령(옵션)을 제시하시오.",
  "steps": [
   "RSA 키 길이 기준(2048bit 이상) 대조",
   "ECB 모드의 패턴 노출 문제 식별",
   "약한 패스워드 기반 키 유도 확인",
   "MD5 무결성 검증의 충돌 문제 식별"
  ],
  "answer": "(1) ① genrsa 1024 — RSA 키 길이 부족(2048bit 이상 권장)\n    ② -aes-128-ecb — ECB는 동일 평문 블록→동일 암호문, 패턴 노출 / 약한 패스워드(pass123)로 키 유도\n    ③ dgst -md5 — MD5는 충돌이 발견돼 무결성 검증에 부적합, 키 없는 해시는 위조 후 재계산 가능\n(2) ① openssl genrsa -out server.key 2048 (또는 그 이상)\n    ② openssl enc -aes-256-cbc -salt -pbkdf2 -iter 100000 -in backup.tar -out backup.enc (랜덤 IV·솔트·키 스트레칭, 강한 패스워드)\n    ③ openssl dgst -sha256 backup.enc 사용, 위조 방지가 필요하면 HMAC(-hmac 키) 또는 전자서명(-sign)",
  "traps": [
   "ECB 문제를 키 길이 문제로만 서술하면 핵심 누락",
   "해시값 파일만으로 송신자 인증·위조 방지가 된다고 서술 — 키가 필요(HMAC·서명)",
   "-pbkdf2·-iter 의미(키 스트레칭)를 설명하지 않으면 감점 가능"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "[서술형] 위험관리 절차와 위험처리 4대 전략",
  "problem": "정보보안 위험관리 절차를 단계별로 서술하고, 위험처리 4가지 전략을 각각 예시와 함께 설명하시오. (10점)",
  "steps": [
   "위험 정의를 공식으로 제시: 위험 = 자산 × 위협 × 취약점",
   "절차 6단계를 순서대로: 자산식별 → 위협·취약점 분석 → 위험분석 → 위험평가(DoA) → 위험처리 → 잔여위험 관리",
   "4전략마다 '정의 + 예시' 쌍으로 서술",
   "DoA·잔여위험 키워드로 마무리"
  ],
  "answer": "1) 위험 = 자산 × 위협 × 취약점 — 위협이 취약점을 이용해 자산에 손실을 일으킬 가능성\n2) 절차: ① 자산식별·평가(CIA 기준 가치산정) ② 위협·취약점 분석 ③ 위험분석(정량 ALE / 정성 델파이 등) ④ 위험평가 — DoA(수용가능 위험수준)와 비교 ⑤ 위험처리 ⑥ 잔여위험 모니터링·재평가\n3) 위험처리 4전략\n - 감소: 통제 적용으로 위험 저감(방화벽·암호화·접근통제)\n - 전가: 제3자에게 이전(사이버보험·아웃소싱)\n - 수용: DoA 이하 잔여위험 인정(대책비용 > 손실)\n - 회피: 위험 유발 활동 중단(서비스 폐쇄·기능 제거)\n4) 잔여위험은 경영진이 수용 여부 결정",
  "traps": [
   "위험 공식에서 위협·취약점·자산가치 중 하나라도 빠뜨리면 감점",
   "보험을 회피로 쓰는 오류 — 보험은 전가",
   "수용을 '아무것도 안 함'으로 쓰지 말고 DoA 이하 잔여위험 인정으로 서술"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "[서술형] ISMS-P 3개 영역과 개인정보 영향평가(PIA)",
  "problem": "ISMS-P 인증기준 3개 영역을 통제 수와 함께 설명하고, ISMS와 ISMS-P의 적용 범위 차이를 쓰시오. 또한 개인정보 영향평가(PIA)의 개념·대상·절차를 서술하시오. (10점)",
  "steps": [
   "ISMS-P 정의와 기관(과기정통부·개인정보위 / KISA)",
   "3영역 × 통제 수(16·64·22) 매칭",
   "ISMS=1+2(80), ISMS-P=1+2+3(102)",
   "PIA: 사전 평가·공공기관 의무·3단계 절차"
  ],
  "answer": "1) ISMS-P: 정보보호 및 개인정보보호 관리체계 인증, 정책기관 과기정통부·개인정보보호위원회, 인증기관 KISA\n2) 3개 영역\n - 관리체계 수립 및 운영(16): 기반마련·위험관리·운영·점검개선(PDCA)\n - 보호대책 요구사항(64): 정책·인적·외부자·물리·접근통제·암호·운영·재해\n - 개인정보 처리단계별 요구사항(22): 수집·이용제공·보유파기·정보주체 권리\n3) ISMS = 1+2영역 80개 / ISMS-P = 1+2+3영역 102개\n4) 인증: 유효기간 3년, 사후심사 연 1회 이상, 만료 전 갱신심사\n5) PIA: 개인정보파일 구축·운용(변경) 전 침해 위험을 사전 분석·개선하는 제도, 공공기관 일정 규모 이상 의무·민간 권장, 절차 = 사전준비 → 영향평가 수행 → 이행점검",
  "traps": [
   "ISMS와 ISMS-P의 영역 범위 혼동",
   "통제 수 16/64/22를 영역과 잘못 매칭",
   "PIA를 사후 점검으로 서술하면 오답 — 사전(예방적) 평가"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "[실무형] ALE 계산과 보안대책 타당성 판단",
  "problem": "다음 자료를 보고 물음에 답하시오.\n- 고객DB 서버 자산가치(AV): 4억원\n- 랜섬웨어 1회 감염 시 노출계수(EF): 25%\n- 연간발생률(ARO): 대책 전 0.5, EDR 도입 후 0.1\n- EDR 연간 비용: 3,000만원\n(1) 대책 전 SLE와 ALE를 구하시오.\n(2) 대책 후 ALE를 구하시오.\n(3) EDR 도입의 타당성을 판단하고, 도입하지 않을 경우 해당하는 위험처리 유형을 쓰시오.",
  "steps": [
   "SLE = AV × EF = 4억 × 0.25 = 1억원",
   "대책 전 ALE = 1억 × 0.5 = 5,000만원",
   "대책 후 ALE = 1억 × 0.1 = 1,000만원",
   "절감액 4,000만원 > 비용 3,000만원 → 타당",
   "도입하지 않고 그대로 두면 위험수용(DoA 이하일 때)"
  ],
  "answer": "(1) SLE = 4억 × 25% = 1억원, ALE = 1억 × 0.5 = 5,000만원/년\n(2) 대책 후 ALE = 1억 × 0.1 = 1,000만원/년\n(3) (대책 전 ALE − 대책 후 ALE) = 4,000만원 > 대책 비용 3,000만원 → 연 1,000만원 순편익으로 타당. EDR 도입은 '위험감소'. 도입하지 않고 위험을 인정하면 '위험수용'(단, DoA 이하일 때)",
  "traps": [
   "SLE를 ALE로 답하는 실수",
   "타당성은 ALE 절감액과 대책 비용을 비교 — 대책 후 ALE와 비용을 직접 비교하지 않음",
   "단위(만원/년) 누락"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "[실무형] 접속기록 분석과 개인정보 유출 대응",
  "problem": "고객 12만명의 개인정보를 처리하는 쇼핑몰의 개인정보처리시스템 접속기록 일부이다.\n\n2026-09-14 02:11:05 user=dev_kim ip=203.0.113.77 action=SELECT target=customer rows=1\n2026-09-14 02:13:41 user=dev_kim ip=203.0.113.77 action=EXPORT target=customer rows=4800 file=cust_all.csv\n2026-09-14 02:15:09 user=dev_kim ip=203.0.113.77 action=DOWNLOAD file=cust_all.csv\n\n(유출 항목: 이름·전화번호·주소, 9월 15일 10시 담당자가 인지)\n(1) 이상 징후 2가지를 쓰시오.\n(2) 정보주체 통지·기관 신고 시한과 신고 대상 기관을 쓰시오.\n(3) 이 시스템 접속기록의 법정 보관 기간과 근거를 쓰시오.\n(4) 통지 항목을 3가지 이상 쓰시오.",
  "steps": [
   "새벽 시간대·외부 IP·대량 EXPORT/DOWNLOAD 확인",
   "4,800명 ≥ 1,000명 → 기관 신고 대상",
   "인지 시점(9/15 10시) 기준 72시간 → 9/18 10시까지",
   "정보주체 5만명 이상 → 접속기록 2년 이상",
   "통지 항목 나열"
  ],
  "answer": "(1) ① 새벽(02시) 비업무 시간대 접속 ② 외부 IP에서 개발자 계정으로 고객 테이블 4,800건 대량 추출(EXPORT)·다운로드 — 권한 오남용 또는 계정 탈취 의심\n(2) 유출 사실을 안 때(9/15 10시)부터 72시간 이내 정보주체 통지, 1,000명 이상이므로 72시간 이내 개인정보보호위원회 또는 KISA 신고\n(3) 5만명 이상 정보주체 개인정보 처리 → 접속기록 2년 이상 보관(안전성 확보조치 기준)\n(4) 유출된 항목, 유출 시점·경위, 피해 최소화 방법, 대응조치·피해구제 절차, 신고 접수 담당부서·연락처",
  "traps": [
   "시한 기준을 사고 발생 시점(9/14 02시)으로 계산하는 오류 — '안 때'부터",
   "'지체없이'만 쓰면 감점 — 72시간 명시",
   "접속기록을 원칙 1년으로 답하는 오류 — 5만명 이상이므로 2년"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "[실무형] 복구 요구사항에 따른 DR 전략 선정",
  "problem": "다음 BIA 결과를 보고 물음에 답하시오.\n\n업무        MTD     WRT    요구 데이터 손실\n인터넷뱅킹   1시간   1시간   0 (손실 불가)\n사내메일     72시간  12시간  최근 24시간 허용\n인사기록     30일    2일     최근 7일 허용\n\n(1) 각 업무의 RTO를 구하시오.\n(2) 각 업무에 적합한 DR 사이트 유형을 선정하시오.\n(3) 사내메일 업무의 RPO를 쓰고 RTO와의 차이를 설명하시오.",
  "steps": [
   "RTO = MTD − WRT 적용",
   "인터넷뱅킹 RTO 0·손실 0 → Mirror",
   "사내메일 RTO 60시간(수일) → Warm",
   "인사기록 RTO 28일(수주) → Cold",
   "RPO=허용 데이터 손실 시점 24시간"
  ],
  "answer": "(1) 인터넷뱅킹 RTO = 1 − 1 = 0(즉시), 사내메일 RTO = 72 − 12 = 60시간, 인사기록 RTO = 30 − 2 = 28일\n(2) 인터넷뱅킹: Mirror 사이트(실시간 동기화, RTO 0) / 사내메일: Warm 사이트(주기적 백업, 수일) / 인사기록: Cold 사이트(공간만, 수주·최저비용)\n(3) 사내메일 RPO = 24시간(최근 24시간치 데이터 손실 허용 → 백업 주기 24시간 이내). RTO는 복구 완료까지 '시간', RPO는 복구 가능한 데이터 '시점(손실량)'",
  "traps": [
   "MTD를 그대로 RTO로 쓰는 오류 — WRT를 빼야 함",
   "RTO와 RPO 혼동",
   "Hot과 Mirror 혼동 — 손실 0·RTO 0은 Mirror"
  ]
 }
];
