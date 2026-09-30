/* ============================================================
   웹디자인개발기능사 실기 — 학습·퀴즈 데이터
   소스: Q-net 웹디자인개발기능사 2026 공개문제(구조·요구사항 유형) · 실기 출제기준(2025.1.1~2027.12.31)
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */

const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "웹디자인개발기능사 실기",
 "brand": "웹디자인",
 "tag": "웹디자인개발기능사 실기 · 작업형",
 "storeKey": "webdesign",
 "topicUnit": "단원",
 "title": "웹디자인개발기능사 실기 — 암기·퀴즈 학습",
 "h1": "웹디자인개발기능사 실기",
 "unit": "영역",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 60,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "웹디자인개발기능사 (국가기술자격 · 2025년 웹디자인기능사에서 명칭 변경)",
 "host": "한국산업인력공단 (Q-net)",
 "type": "작업형 — 공개문제 24과제 중 1과제 (HTML·CSS·JS/jQuery 로 A 헤더·B 슬라이드·C 콘텐츠·D 푸터 구현)",
 "time": "3시간",
 "pass": "60점 이상 [확인필요] · 실격 6가지(슬라이드 미작동·비번호 폴더 미저장·압축 제출 등)",
 "book": "Q-net 웹디자인개발기능사 공개문제(2026) · 실기 출제기준",
 "slogan": "웹디자인개발 실기 = 제출 규칙·실격 방지 + 시맨틱 HTML + CSS 레이아웃 6계열 + 메뉴 6방식 + 슬라이드 3종·탭·팝업 + W3C 오류 0",
 "paperSpec": [
  {
   "s": "s1",
   "n": 10
  },
  {
   "s": "s2",
   "n": 10
  },
  {
   "s": "s3",
   "n": 10
  },
  {
   "s": "s4",
   "n": 10
  },
  {
   "s": "s5",
   "n": 10
  },
  {
   "s": "s6",
   "n": 10
  }
 ],
 "footer": [
  "웹디자인개발기능사 실기 / 시행 <b>한국산업인력공단<\/b> · 작업형 3시간 · 공개문제 24과제 중 1과제 · 결과물 10MB 이하 · <b>인터넷 차단(CDN 불가)<\/b>, jQuery 는 제공 파일로 로컬 연결",
  "제출 구조 — 바탕화면 <code>비번호/<\/code> 폴더에 <code>index.html<\/code> + <code>css/<\/code> · <code>script/<\/code> · <code>images/<\/code>, 상대경로. W3C HTML/CSS 검사·콘솔 오류 0, 레이아웃 table 금지, 모든 이미지 alt.",
  "이 사이트는 <b>실기를 위한 지식<\/b>(규정·코드 패턴·처리 순서·오류 찾기)을 퀴즈로 다집니다. 실제 코딩 연습은 공개문제로 병행하세요. 공개문제 원문은 공단 저작물이라 싣지 않고 <b>구조·유형<\/b>만 정리했습니다.",
  "데이터 소스: <code>02_타자격증_학습자료/웹디자인개발기능사_실기<\/code> → <code>학습사이트/data.js<\/code> · ⚠ 합격 점수·배점 등 [확인필요] 표시는 공식 원문 미확인 항목입니다."
 ],
 "info": [
  {
   "title": "실기 시험 개요",
   "type": "table",
   "head": [
    "항목",
    "내용"
   ],
   "rows": [
    [
     "형식",
     "작업형 3시간, 공개문제 24과제 중 1과제"
    ],
    [
     "도구",
     "Photoshop · Illustrator · VS Code · Notepad++ · Chrome (EditPlus 선택, Dreamweaver 불가)"
    ],
    [
     "제출",
     "비번호 폴더 · index.html 최상위 · css/script/images · 10MB 이하"
    ],
    [
     "실격",
     "기권 · 용량/시간 초과·현격한 불일치 · 슬라이드 미작동 · 비번호 폴더 미저장 · 압축 제출 · 20% 미만 완성"
    ]
   ]
  },
  {
   "title": "공개문제 변수 축",
   "type": "table",
   "head": [
    "축",
    "유형"
   ],
   "rows": [
    [
     "레이아웃",
     "6계열 (1200px 가운데 / A·D 100% / 1000px 왼쪽 사이드 / 좌측 200px 헤더 / 3열 / 1340px)"
    ],
    [
     "메뉴",
     "6방식"
    ],
    [
     "슬라이드",
     "세로 7 · 가로 9 · Fade 8"
    ],
    [
     "공지·갤러리",
     "탭 8 · 별도 배치 16"
    ],
    [
     "팝업",
     "레이어 13 · 모달 11"
    ]
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "시험 규정·공개문제",
  "short": "규정·유형",
  "out": 0,
  "color": "#ef4444",
  "desc": "3h·10MB·비번호 폴더·★실격 6사유★ / 기술 준수 10조 / 24과제 = 레이아웃 L1~L6 × 메뉴 M1~M6 × 슬라이드 3종 × 탭·모달 ★최빈출★"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "HTML 구조·시맨틱",
  "short": "HTML",
  "out": 0,
  "color": "#f97316",
  "desc": "★DOCTYPE·charset·lang★ / header·nav·section·footer로 A~D 마크업 / ul>li>a 메뉴 / ★alt·href=\"#\"·상대경로★ / W3C ERROR 0"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "CSS 레이아웃",
  "short": "CSS",
  "out": 0,
  "color": "#eab308",
  "desc": "박스모델·box-sizing / margin:0 auto·100% 띠 / float·flex·calc / position relative→absolute·z-index ★최빈출★"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "메뉴 구현",
  "short": "메뉴",
  "out": 0,
  "color": "#22c55e",
  "desc": "ul>li>a 중첩 마크업 / 서브 display:none / ★.stop().slideDown()★ / mouseenter·mouseleave / 메뉴 6방식(M1~M6) / focusin 키보드 접근 ★최빈출★"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "슬라이드·탭·팝업",
  "short": "JS·jQuery",
  "out": 0,
  "color": "#0ea5e9",
  "desc": "★슬라이드 3종(가로·세로·Fade) 3초 이내·자동시작·무한반복★ / 탭 전환 / 레이어·모달 팝업 / document ready·이벤트 바인딩"
 },
 {
  "id": "s6",
  "no": 6,
  "name": "웹표준·점검·시간관리",
  "short": "표준·점검",
  "out": 0,
  "color": "#8b5cf6",
  "desc": "W3C 오류 0 · Console 오류 0 · alt/Tab/# · 상대경로·10MB·미압축 · 로고/이미지 가공 · 3시간 배분 ★최빈출★"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "시험 개요",
  "front": "실기 시험시간·제출 용량",
  "key": "3시간 · 10MB",
  "back": "시험시간 ★3시간★(2025년 제1회부터, 구 4시간), 제출 전체 ★10MB 이하★",
  "tip": "둘 다 넘기면 '작업범위 초과' 실격"
 },
 {
  "s": "s1",
  "g": "시험 개요",
  "front": "사용 불가 소프트웨어",
  "key": "Dreamweaver",
  "back": "시설목록 중 ★Dreamweaver = 사용 불가★. EditPlus는 선택 설치",
  "tip": "필수 설치: Photoshop·Illustrator(CS 이상)·Notepad++(6.9 이상)·VS Code·Chrome(81.0 이상)"
 },
 {
  "s": "s1",
  "g": "시험 개요",
  "front": "인터넷 차단의 결과",
  "key": "CDN·Validator 불가",
  "back": "jQuery CDN·웹폰트 CDN·온라인 W3C Validator ★모두 불가★ → 제공 jQuery 파일 로컬 연결",
  "tip": "HTML 유효성검사 서비스는 시험 시 제공하지 않는다"
 },
 {
  "s": "s1",
  "g": "제출",
  "front": "제출 폴더 이름",
  "key": "비번호",
  "back": "바탕화면에 ★비번호★ 폴더 → 그 안에 index.html(최상위)·css·script·images",
  "tip": "폴더명 오타·다른 위치 저장 = '비번호 폴더 저장 실패' 실격 위험"
 },
 {
  "s": "s1",
  "g": "제출",
  "front": "index.html 위치",
  "key": "비번호 폴더 최상위",
  "back": "메인페이지 index.html은 ★비번호 폴더 바로 아래★. 분류 폴더(images·script·css) 포함 필수",
  "tip": "index.html을 css 폴더 안에 두는 실수 금지"
 },
 {
  "s": "s1",
  "g": "제출",
  "front": "제출 금지 파일",
  "key": "psd · ai",
  "back": "웹에서 사용하지 않는 ★psd·ai 원본★은 제출 금지 — 용량 초과 주범",
  "tip": "고해상도 jpg는 웹용 저장으로 압축"
 },
 {
  "s": "s1",
  "g": "제출",
  "front": "경로 규칙",
  "key": "상대경로",
  "back": "채점위원 PC에서 정상 동작해야 하므로 ★상대경로★(images/logo.png). C:\\Users\\… 절대경로 금지",
  "tip": "파일명 대소문자도 일치시킬 것"
 },
 {
  "s": "s1",
  "g": "준수사항",
  "front": "W3C·Console 기준",
  "key": "ERROR 0 ×3",
  "back": "HTML validator ★ERROR 0★, CSS3 validator ★ERROR 0★, Chrome Console ★ERROR 0★",
  "tip": "WARNING이 아니라 ERROR가 기준"
 },
 {
  "s": "s1",
  "g": "준수사항",
  "front": "CSS·JS 작성 위치",
  "key": "별도 파일",
  "back": "CSS는 ★별도 파일 link★, JS는 ★별도 파일 script src★",
  "tip": "style 속성·<style>·인라인 <script> 코드 = 위반 소지"
 },
 {
  "s": "s1",
  "g": "준수사항",
  "front": "상호작용 요소 링크",
  "key": "href=\"#\" + Tab",
  "back": "로고·메뉴·버튼·바로가기에 ★임시링크 #★ → ★Tab 키로 이동·선택★ 가능해야 함",
  "tip": "a 클릭 핸들러엔 return false로 스크롤 튐 방지"
 },
 {
  "s": "s1",
  "g": "준수사항",
  "front": "공통 컬러",
  "key": "#ffffff / #333333",
  "back": "배경 ★#ffffff★, 기본 텍스트 ★#333333★, charset ★utf-8★",
  "tip": "주조색·보조색은 수험자 자유"
 },
 {
  "s": "s1",
  "g": "준수사항",
  "front": "CSS 해제 시",
  "key": "세로 나열",
  "back": "CSS '사용 안 함' 시 콘텐츠가 ★논리 순서대로 세로 나열★ — 문서 순서가 곧 읽기 순서",
  "tip": "전체 레이아웃 table 금지와 짝으로 외울 것"
 },
 {
  "s": "s1",
  "g": "실격",
  "front": "실격 6사유",
  "key": "기·범·슬·비·압·20",
  "back": "①★기★권 ②작업★범★위 초과(10MB·3h)/현격히 다름 ③★슬★라이드 JS·CSS 미제작 ④★비★번호 폴더 저장 실패 ⑤★압★축 제출 ⑥★20%★ 이상 미완성",
  "tip": "W3C 오류·치수 불일치는 감점이지 실격이 아니다"
 },
 {
  "s": "s1",
  "g": "실격",
  "front": "정지 이미지 슬라이드",
  "key": "실격",
  "back": "움직이지 않는 이미지 1장만 배치 = Slide를 JS·CSS로 제작하지 않은 것 → ★실격★",
  "tip": "시간 부족하면 CSS @keyframes라도 먼저 넣어라"
 },
 {
  "s": "s1",
  "g": "실격",
  "front": "복사된 동일 작품",
  "key": "전원 부정행위",
  "back": "동일 작품 발견 시 ★관련 수험자 전원 부정행위★",
  "tip": "반입 금지물은 지참=실격, 활용=부정행위"
 },
 {
  "s": "s1",
  "g": "공통 뼈대",
  "front": "4개 영역",
  "key": "Header·Slide·Contents·Footer",
  "back": "Ⓐ Header(로고+메뉴) / Ⓑ Slide / Ⓒ Contents(공지·갤러리·배너·바로가기 중 3~4) / Ⓓ Footer",
  "tip": "사이트맵 = 메인 4~5 × 서브 2~4"
 },
 {
  "s": "s1",
  "g": "공통 뼈대",
  "front": "직접 디자인 로고 규격",
  "key": "200×40px",
  "back": "워드타입(심벌 없음) ★200×40px★ / 심벌+로고명 190×45(44)px",
  "tip": "제공 로고는 ★종횡비 유지★, 과제에 따라 색 변경"
 },
 {
  "s": "s1",
  "g": "공통 뼈대",
  "front": "슬라이드 공통 3조건",
  "key": "3초·자동·무한",
  "back": "제공 이미지 3+텍스트 3, ★3초 이내 전환★, ★열자마자 자동 시작★, ★마지막→첫 번째 무한 반복★",
  "tip": "i=(i+1)%3 으로 순환"
 },
 {
  "s": "s1",
  "g": "공통 뼈대",
  "front": "공지 팝업 트리거",
  "key": "첫 번째 글",
  "back": "공지사항 ★첫 번째 글★ 클릭 → 레이어(또는 모달) 팝업, 팝업 안 ★닫기 버튼★",
  "tip": "두 번째 글·자동 팝업은 요구사항 불일치"
 },
 {
  "s": "s1",
  "g": "공통 뼈대",
  "front": "푸터 로고",
  "key": "grayscale",
  "back": "푸터 로고는 ★무채색(grayscale)★ 처리(과제 대부분)",
  "tip": "filter:grayscale(100%) 또는 포토샵 흑백"
 },
 {
  "s": "s1",
  "g": "유형",
  "front": "레이아웃 6계열 과제 번호",
  "key": "4개씩 L1~L6",
  "back": "L1 1~4(1200 가운데) · L2 5~8(Ⓐ·Ⓓ 100%) · L3 9~12(1000 왼쪽, 좌측 헤더) · L4 13~16(100%, 좌 200) · L5 17~20(C 400 열) · L6 21~24(1340 가운데)",
  "tip": "좌측 세로 헤더 = L3·L4·L5 (과제 9~20)"
 },
 {
  "s": "s1",
  "g": "유형",
  "front": "슬라이드 방향 분포",
  "key": "가로9·Fade8·세로7",
  "back": "가로 ★9★ / Fade ★8★ / 세로 ★7★ = 24",
  "tip": "Fade 과제: 3·4·9·10·15·16·21·22"
 },
 {
  "s": "s1",
  "g": "유형",
  "front": "탭 vs 별도",
  "key": "탭 8 / 별도 16",
  "back": "공지·갤러리 ★탭 구성 8과제★(1·3·5·9·13·15·21·23), 나머지 16은 별도 배치",
  "tip": "탭 과제는 모두 홀수 번호"
 },
 {
  "s": "s1",
  "g": "유형",
  "front": "레이어 vs 모달 팝업",
  "key": "레이어 13 / 모달 11",
  "back": "★모달★(배경 덮개) 11과제: 2·6·8·10·12·14·17·18·20·22·24",
  "tip": "모달 = position:fixed; inset:0; 반투명 배경"
 },
 {
  "s": "s1",
  "g": "유형",
  "front": "메뉴 방식과 헤더 위치",
  "key": "상단=M1~3 / 세로=M4~6",
  "back": "상단 헤더 과제 → M1 개별 드롭다운·M2 전체 박스·M3 전체폭 띠 / 좌측 세로 헤더 → M4 아코디언·M5 플라이아웃·M6 전체 패널",
  "tip": "메뉴 방식은 와이어프레임 이미지 판독 [확인필요]"
 },
 {
  "s": "s2",
  "g": "문서 골격",
  "front": "HTML5 문서 첫 줄",
  "key": "<!DOCTYPE html>",
  "back": "html 태그보다 앞, 문서 ★맨 첫 줄★에 `<!DOCTYPE html>` — 표준 모드 선언",
  "tip": "빠지면 쿼크 모드 + W3C ERROR"
 },
 {
  "s": "s2",
  "g": "문서 골격",
  "front": "문서 언어 지정",
  "key": "lang=\"ko\"",
  "back": "`<html lang=\"ko\">` — ko는 ★언어 코드★",
  "tip": "kr은 국가 코드. lang 누락은 ERROR가 아니라 경고"
 },
 {
  "s": "s2",
  "g": "문서 골격",
  "front": "문자 인코딩 선언",
  "key": "meta charset=utf-8",
  "back": "`<meta charset=\"utf-8\">` — ★head 첫 자식★(앞 1024바이트 이내). CSS는 `@charset \"utf-8\";`",
  "tip": "선언과 파일 저장 인코딩이 다르면 한글 깨짐"
 },
 {
  "s": "s2",
  "g": "문서 골격",
  "front": "head의 필수 자식",
  "key": "title",
  "back": "`<title>` — 없거나 비어 있으면 ★ERROR★",
  "tip": "화면 콘텐츠(h1·img)는 head가 아니라 body"
 },
 {
  "s": "s2",
  "g": "외부 연결",
  "front": "CSS 파일 연결",
  "key": "link rel=stylesheet",
  "back": "`<link rel=\"stylesheet\" href=\"css/style.css\">`",
  "tip": "rel 빠지면 적용 안 됨. `<style src>` 같은 문법은 없다"
 },
 {
  "s": "s2",
  "g": "외부 연결",
  "front": "JS 로드 순서",
  "key": "jQuery 먼저",
  "back": "`jquery-…min.js` → `script.js` 순서",
  "tip": "거꾸로면 Console `$ is not defined`"
 },
 {
  "s": "s2",
  "g": "외부 연결",
  "front": "head에 script를 둘 때",
  "key": "ready 또는 defer",
  "back": "`$(function(){ … });` 로 감싸거나 두 script에 `defer`",
  "tip": "async는 실행 순서 보장 안 됨"
 },
 {
  "s": "s2",
  "g": "외부 연결",
  "front": "시험장 jQuery",
  "key": "제공 파일 로컬",
  "back": "지급된 jQuery 파일을 script 폴더에 두고 ★상대경로★ 연결",
  "tip": "CDN은 인터넷 차단으로 실패"
 },
 {
  "s": "s2",
  "g": "시맨틱",
  "front": "A~D 영역 태그",
  "key": "header·section·section·footer",
  "back": "Ⓐ header(h1+nav) / Ⓑ section.slide / Ⓒ section.contents / Ⓓ footer / 팝업 div(body 끝)",
  "tip": "소스 순서 = CSS off 세로 나열 순서"
 },
 {
  "s": "s2",
  "g": "시맨틱",
  "front": "section vs div",
  "key": "제목 있는 묶음 vs 의미 없는 묶음",
  "back": "section = 주제 묶음(h2 권장) / div = 레이아웃용 래퍼",
  "tip": "section 제목 없음은 경고일 뿐, div는 금지 태그 아님"
 },
 {
  "s": "s2",
  "g": "시맨틱",
  "front": "100% 띠 + 1200 내용(L2)",
  "key": "header>.inner",
  "back": "`<header><div class=\"inner\">…<\/div><\/header>` — 바깥 100% 배경, 안쪽 1200px 가운데",
  "tip": "header 하나에 width 1200만 주면 배경이 100%로 안 깔림"
 },
 {
  "s": "s2",
  "g": "시맨틱",
  "front": "로고 마크업",
  "key": "h1>a>img",
  "back": "`<h1><a href=\"#\"><img src=\"images/logo.png\" alt=\"로고명\"><\/a><\/h1>`",
  "tip": "a가 없으면 Tab으로 로고 선택 불가"
 },
 {
  "s": "s2",
  "g": "메뉴·목록",
  "front": "메뉴 구조",
  "key": "nav>ul>li>a + ul.sub",
  "back": "메인 `<li><a href=\"#\">메인<\/a><ul class=\"sub\">…<\/ul><\/li>`",
  "tip": "서브 ul은 ★a 다음, 부모 li 닫기 전★"
 },
 {
  "s": "s2",
  "g": "메뉴·목록",
  "front": "ul의 직계 자식",
  "key": "li만",
  "back": "ul·ol 바로 아래는 ★li★만 — a·div·텍스트는 ERROR",
  "tip": "`<ul><a>` 는 흔한 실수"
 },
 {
  "s": "s2",
  "g": "메뉴·목록",
  "front": "ul / ol / dl",
  "key": "나열·순서·용어쌍",
  "back": "ul 순서 없음 / ol 순서 의미 / dl(dt+dd) 용어-설명",
  "tip": "메뉴·공지·갤러리·SNS는 ul"
 },
 {
  "s": "s2",
  "g": "콘텐츠",
  "front": "슬라이드 HTML",
  "key": "ul>li>img × 3",
  "back": "3장 모두 `<li><img … alt><span>문구<\/span><\/li>`",
  "tip": "정지 이미지 1장 = 실격 사유"
 },
 {
  "s": "s2",
  "g": "콘텐츠",
  "front": "탭 구조",
  "key": "버튼 순서 = 내용 순서",
  "back": "ul.tab-btn의 li 순서와 .tab-cont 안 div 순서를 같게 → index로 연결",
  "tip": "id를 같은 값으로 두 번 쓰는 대응은 ERROR"
 },
 {
  "s": "s2",
  "g": "콘텐츠",
  "front": "팝업 닫기 버튼",
  "key": "button type=button",
  "back": "`<button type=\"button\" class=\"close\">닫기<\/button>`",
  "tip": "type 기본값은 submit"
 },
 {
  "s": "s2",
  "g": "콘텐츠",
  "front": "모달 팝업",
  "key": "덮개 div + 팝업 div",
  "back": "`<div class=\"modal\"><div class=\"popup\">…<\/div><\/div>`",
  "tip": "레이어 팝업과 차이 = 배경 덮개"
 },
 {
  "s": "s2",
  "g": "콘텐츠",
  "front": "패밀리사이트",
  "key": "select>option",
  "back": "`<select title=\"패밀리사이트\"><option>…<\/option><\/select>` (또는 label for)",
  "tip": "select 안에 li를 넣으면 ERROR"
 },
 {
  "s": "s2",
  "g": "경로·alt",
  "front": "모든 img",
  "key": "alt 필수",
  "back": "정보 이미지 = 내용 / 장식 = `alt=\"\"`",
  "tip": "alt 속성 자체를 빼면 ERROR"
 },
 {
  "s": "s2",
  "g": "경로·alt",
  "front": "CSS에서 이미지 경로",
  "key": "../images/",
  "back": "css/style.css 기준 → `url(../images/bg.jpg)`",
  "tip": "JS 안의 경로는 HTML 문서 기준"
 },
 {
  "s": "s2",
  "g": "경로·alt",
  "front": "금지 경로",
  "key": "C:\\ 와 /시작",
  "back": "`C:\\Users\\…` 절대경로, `/images/…` 루트경로 → 채점 PC·로컬에서 깨짐",
  "tip": "슬래시 `/` 사용, 대소문자·확장자 일치"
 },
 {
  "s": "s2",
  "g": "유효성",
  "front": "ERROR vs 경고",
  "key": "기준은 ERROR 0",
  "back": "ERROR: title·alt 누락, id 중복, 중첩 위반, 폐지 요소 / 경고: section 제목 없음, lang 누락, type=text/javascript",
  "tip": "경고까지 0일 필요는 없다"
 },
 {
  "s": "s2",
  "g": "유효성",
  "front": "p 안의 div",
  "key": "p 자동 닫힘",
  "back": "`<p><div>` → p가 먼저 닫히고 뒤의 `<\/p>`가 짝 없는 ERROR",
  "tip": "span 안 div도 ERROR"
 },
 {
  "s": "s3",
  "g": "박스모델",
  "front": "시험장 리셋 CSS 3줄",
  "key": "여백0·border-box·점제거",
  "back": "★* { margin:0; padding:0; box-sizing:border-box; }★ / ul,ol { list-style:none; } / a { text-decoration:none; color:inherit; }",
  "tip": "body 기본 margin 8px 방치 → 100% 띠 양옆 흰 틈"
 },
 {
  "s": "s3",
  "g": "박스모델",
  "front": "박스모델 4층(안→밖)",
  "key": "콘-패-보-마",
  "back": "★content → padding → border → margin★. 배경은 border 까지, margin 은 투명",
  "tip": "padding/margin % 값은 상하도 ★부모 너비★ 기준"
 },
 {
  "s": "s3",
  "g": "박스모델",
  "front": "content-box vs border-box",
  "key": "기본은 content",
  "back": "content-box(기본): width=콘텐츠만 → 200+패딩20+보더10=★230★ / border-box: width 안에 패딩·보더 포함 → ★200★",
  "tip": "border-box 도 margin 은 포함하지 않는다"
 },
 {
  "s": "s3",
  "g": "박스모델",
  "front": "마진 병합",
  "key": "세로만·큰값",
  "back": "상하 인접 블록의 세로 margin → ★큰 값 하나★(30+20→30). 첫 자식 margin-top 이 부모 밖으로 새는 것도 병합",
  "tip": "해결: 부모 padding/border·overflow:hidden·flow-root. flex 아이템은 병합 없음"
 },
 {
  "s": "s3",
  "g": "박스모델",
  "front": "img 아래 틈",
  "key": "baseline",
  "back": "img 는 인라인 → 글자 ★기준선(baseline)★에 정렬되어 아래 몇 px 틈",
  "tip": "img{vertical-align:top} 또는 {display:block}"
 },
 {
  "s": "s3",
  "g": "선택자",
  "front": "자손 vs 자식 선택자",
  "key": "공백=전부, >=직계",
  "back": ".menu li → 서브메뉴 li 까지 ★전부★ / .menu > li → ★메인메뉴만★",
  "tip": "메인 하이라이트 스타일이 서브까지 번지면 > 로 좁힌다"
 },
 {
  "s": "s3",
  "g": "선택자",
  "front": "명시도 (a,b,c)",
  "key": "id-class-요소",
  "back": "a=id, b=class·속성·가상클래스, c=요소·가상요소. * 와 결합자는 0. ★왼쪽 자리부터 비교★",
  "tip": "(1,0,0) > (0,10,0) — id 하나가 class 열 개를 이긴다"
 },
 {
  "s": "s3",
  "g": "선택자",
  "front": "우선순위 사다리",
  "key": "!imp>인라인>id>class>요소",
  "back": "!important > style 속성 > id > class·가상클래스 > 요소 > * ; 동점이면 ★나중 선언★",
  "tip": "명시도가 다르면 선언 순서는 무관"
 },
 {
  "s": "s3",
  "g": "선택자",
  "front": "hover + focus 동시 지정",
  "key": "쉼표 필수",
  "back": "★.menu a:hover, .menu a:focus { … }★ — Tab 이동 시에도 하이라이트",
  "tip": "쉼표 빼면 'hover 요소 안의 focus a' 라는 자손 선택자"
 },
 {
  "s": "s3",
  "g": "선택자",
  "front": "n번째 항목",
  "key": "nth-child 1부터",
  "back": "li:first-child = li:nth-child(1), 셋째 = ★li:nth-child(3)★",
  "tip": ":eq(2) 는 jQuery 전용(0부터) — CSS 파일에 쓰면 무효"
 },
 {
  "s": "s3",
  "g": "정렬",
  "front": "고정폭 블록 가운데",
  "key": "width+margin auto",
  "back": "★width:1200px; margin:0 auto;★ — block + width 지정이 조건",
  "tip": "text-align:center 는 안쪽 인라인 내용만 가운데"
 },
 {
  "s": "s3",
  "g": "정렬",
  "front": "100% 띠 + 가운데 내용",
  "key": "두 겹 박스",
  "back": "header{width:100%; background} + .inner{width:1200px; margin:0 auto}",
  "tip": "header 에 1200 을 주면 배경도 1200 에서 잘림 → 100% 요구 위반"
 },
 {
  "s": "s3",
  "g": "정렬",
  "front": "크기 모르는 박스 정중앙",
  "key": "50% + translate",
  "back": "position:fixed(absolute); ★left:50%; top:50%; transform:translate(-50%,-50%)★",
  "tip": "margin:auto 만으로는 fixed 박스가 가운데로 가지 않는다(left/right 지정 없을 때)"
 },
 {
  "s": "s3",
  "g": "정렬",
  "front": "한 줄 텍스트 세로 가운데",
  "key": "line-height=height",
  "back": "height:50px; ★line-height:50px;★",
  "tip": "vertical-align:middle 은 블록 안 텍스트에 무효"
 },
 {
  "s": "s3",
  "g": "float·flex",
  "front": "float 높이 붕괴 해제",
  "key": "clearfix",
  "back": "★.clearfix::after{content:''; display:block; clear:both;}★ / overflow:hidden / display:flow-root",
  "tip": "content 빠지면 ::after 가 생성되지 않아 무효"
 },
 {
  "s": "s3",
  "g": "float·flex",
  "front": "나머지 폭 계산",
  "key": "calc 공백",
  "back": "★width:calc(100% - 200px)★ — 연산자 양옆 공백 필수",
  "tip": "calc(100%-200px) 은 무효 선언 → 폭 미적용"
 },
 {
  "s": "s3",
  "g": "float·flex",
  "front": "flex 기본값 3종",
  "key": "row·nowrap·shrink1",
  "back": "flex-direction:★row★ / flex-wrap:★nowrap★ / flex-shrink:★1★(넘치면 줄어듦)",
  "tip": "좌측 200px 헤더가 찌그러지면 flex:0 0 200px"
 },
 {
  "s": "s3",
  "g": "float·flex",
  "front": "flex 정렬 두 축",
  "key": "justify=주축",
  "back": "justify-content = ★주축★(row 면 가로) / align-items = ★교차축★(row 면 세로)",
  "tip": "column 으로 바꾸면 두 축의 방향도 바뀐다"
 },
 {
  "s": "s3",
  "g": "position",
  "front": "absolute 의 기준",
  "key": "가까운 non-static 조상",
  "back": "★부모에 position:relative★ → 자식 position:absolute; top:100%; left:0",
  "tip": "기준이 없으면 초기 포함 블록(화면 좌상단) 기준"
 },
 {
  "s": "s3",
  "g": "position",
  "front": "relative 의 성질",
  "key": "자리 유지",
  "back": "원래 자리를 ★그대로 차지★한 채 보이는 위치만 이동 — 뒤 요소는 밀리지 않음",
  "tip": "absolute 는 자리를 비워 뒤 요소가 당겨짐"
 },
 {
  "s": "s3",
  "g": "position",
  "front": "z-index 적용 조건",
  "key": "static 무효",
  "back": "★position 이 static 이 아닌 요소★(및 flex 아이템)에만 적용, 클수록 위",
  "tip": "서브메뉴가 슬라이드 아래 깔리면 header 쪽 z-index 를 올린다"
 },
 {
  "s": "s3",
  "g": "position",
  "front": "슬라이드 영역 필수 CSS",
  "key": "overflow hidden",
  "back": "이동형: .slide{★overflow:hidden★} + ul 가로폭 300% / fade: li 전부 absolute 겹침",
  "tip": "overflow 누락 → 다음 장이 영역 밖으로 보임"
 },
 {
  "s": "s3",
  "g": "레이아웃 계열",
  "front": "L3 1000px 왼쪽정렬",
  "key": "margin auto 없음",
  "back": "#wrap{width:1000px} — ★가운데 정렬 금지★(와이어프레임 왼쪽 붙음)",
  "tip": "습관적으로 margin:0 auto 를 쓰면 계열 오답"
 },
 {
  "s": "s3",
  "g": "레이아웃 계열",
  "front": "L5 슬라이드 폭·높이",
  "key": "600·120",
  "back": "좌 헤더 200 + 콘텐츠 400 → 슬라이드 ★calc(100% - 600px)★, 높이 ★calc(100vh - 120px)★",
  "tip": "height:100% 쓰려면 html,body{height:100%} 체인"
 },
 {
  "s": "s3",
  "g": "규정",
  "front": "공통 컬러·파일 규정",
  "key": "#fff·#333·외부CSS",
  "back": "body{background:#ffffff; color:#333333} + ★<link rel=\"stylesheet\" href=\"css/style.css\">★",
  "tip": "푸터 로고는 filter:grayscale(100%) 로 무채색"
 },
 {
  "s": "s4",
  "g": "마크업",
  "front": "메뉴 기본 마크업 골격",
  "key": "nav > ul > li > a + ul.sub",
  "back": "<nav><ul class=\"menu\"><li><a href=\"#\">메인<\/a><ul class=\"sub\"><li><a href=\"#\">서브<\/a><\/li><\/ul><\/li><\/ul><\/nav> — ★서브 ul 은 메인 li 안★",
  "tip": "서브를 li 밖에 두면 W3C 오류 + hover 가 끊긴다"
 },
 {
  "s": "s4",
  "g": "마크업",
  "front": "ul 의 직계 자식으로 허용되는 요소",
  "key": "li 만",
  "back": "ul·ol 의 직계 자식은 ★li★ 만. div·a·p 를 바로 넣으면 W3C 오류",
  "tip": "서브 ul 도 li 안에 넣어야 ul 직계 규칙을 지킨다"
 },
 {
  "s": "s4",
  "g": "마크업",
  "front": "메뉴 항목에 <a href=\"#\"> 를 쓰는 이유 2가지",
  "key": "임시링크 + Tab 포커스",
  "back": "① 공개문제 준수사항의 임시링크 # 요구 ② a[href] 는 기본 포커스 대상 → Tab 이동·선택 가능",
  "tip": "href 를 뺀 <a> 는 포커스를 받지 않는다"
 },
 {
  "s": "s4",
  "g": "CSS",
  "front": "서브메뉴 초기 CSS 3종 세트",
  "key": "display:none + absolute + z-index",
  "back": ".sub{display:none; position:absolute; top:100%; z-index:10} + 부모 li{position:relative}",
  "tip": "slideDown 은 display:none 인 요소에서만 동작"
 },
 {
  "s": "s4",
  "g": "CSS",
  "front": "`.menu li{float:left}` 의 문제",
  "key": "서브 li 까지 선택",
  "back": "후손 선택자는 서브 li 까지 잡아 서브도 가로로 뜬다 → ★.menu > li★ 자식 결합자 사용",
  "tip": "jQuery 선택자도 같다: '.menu > li'"
 },
 {
  "s": "s4",
  "g": "CSS",
  "front": "서브에 머무는 동안 메인 메뉴 강조 유지",
  "key": ".menu > li:hover > a",
  "back": "li 는 서브를 포함하므로 서브 위에서도 li:hover 가 유지 → 그 li 의 a 를 강조",
  "tip": "a:hover 만 쓰면 서브로 내려가는 순간 메인 강조가 꺼진다"
 },
 {
  "s": "s4",
  "g": "CSS",
  "front": "CSS 만으로 '부드러운' 드롭다운",
  "key": "max-height / opacity + transition",
  "back": "display 는 transition 불가 → max-height:0→200px 또는 opacity·visibility 에 transition",
  "tip": "display:none→block 만 쓰면 즉시 나타남"
 },
 {
  "s": "s4",
  "g": "방식",
  "front": "M1 개별 드롭다운 핵심 코드",
  "key": "$(this).children('.sub').stop().slideDown()",
  "back": "$('.menu > li').mouseenter(function(){ $(this).children('.sub').stop().slideDown(200) }).mouseleave(… slideUp …)",
  "tip": "$(this) 대신 $('.sub') 면 전체가 열린다"
 },
 {
  "s": "s4",
  "g": "방식",
  "front": "M2·M3 전체 서브 핵심 코드",
  "key": "$('.sub, .subbg').stop().slideDown()",
  "back": "이벤트를 메뉴 전체(nav)에 걸고, 모든 서브(+배경 띠)를 동시에 slideDown / slideUp",
  "tip": "li 마다 걸면 메뉴 사이 이동 때 깜빡임"
 },
 {
  "s": "s4",
  "g": "방식",
  "front": "M2 와 M3 의 구분",
  "key": "메뉴 폭 박스 vs 화면 100% 띠",
  "back": "M2 = 메뉴 폭 안 4열 박스 / M3 = 슬라이드 위를 가로로 덮는 전체폭 배경 띠(메가메뉴형)",
  "tip": "둘 다 '모든 서브 동시 표시'는 같다"
 },
 {
  "s": "s4",
  "g": "방식",
  "front": "M3 배경 띠(.subbg) 위치 규칙",
  "key": "이벤트 부모 안 + 서브보다 낮은 z-index",
  "back": "띠는 nav·header 안에 absolute(left:0; width:100%), 서브 ul 은 z-index 를 띠보다 높게",
  "tip": "띠가 이벤트 부모 밖이면 띠로 내려가는 순간 닫힘"
 },
 {
  "s": "s4",
  "g": "방식",
  "front": "M4 아코디언의 서브 position",
  "key": "static (지정 안 함)",
  "back": "서브가 문서 흐름 안에 있어 펼치면 아래 메인 항목이 밀려 내려감 = 제자리 펼침",
  "tip": "absolute 로 두면 아래 메뉴를 덮는다"
 },
 {
  "s": "s4",
  "g": "방식",
  "front": "M5 플라이아웃 서브 위치",
  "key": "left:100%; top:0",
  "back": "li{position:relative} .sub{position:absolute; left:100%; top:0} → li 오른쪽 옆에 붙어 펼침",
  "tip": "옆으로 펼침은 animate({width:'show'}) 또는 fadeIn"
 },
 {
  "s": "s4",
  "g": "방식",
  "front": "M6 세로 + 넓은 패널",
  "key": "우측 큰 패널에 서브 전체",
  "back": "세로 메뉴 오른쪽 큰 사각 영역에 모든 서브를 열로 표시 — 이벤트는 메뉴+패널을 감싼 부모에",
  "tip": "M5(항목 옆 작은 서브)와 판독 구분"
 },
 {
  "s": "s4",
  "g": "jQuery",
  "front": "mouseenter vs mouseover",
  "key": "자식 진입 시 재발생·버블링 여부",
  "back": "mouseenter/leave = 자식 진입에 반응 안 함·버블링 없음 / mouseover/out = 자식 진입마다 발생·버블링",
  "tip": "메뉴는 mouseenter/leave (= hover)"
 },
 {
  "s": "s4",
  "g": "jQuery",
  "front": ".hover(f1, f2) 의 정체",
  "key": "mouseenter + mouseleave",
  "back": ".on('mouseenter', f1).on('mouseleave', f2) 와 같다",
  "tip": "함수 1개만 주면 들어갈 때·나갈 때 같은 함수"
 },
 {
  "s": "s4",
  "g": "jQuery",
  "front": ".stop() 역할과 위치",
  "key": "큐 누적 방지 / 애니메이션 앞",
  "back": "진행 중 애니메이션을 멈추고 새 동작 시작 → .stop().slideDown() 순서",
  "tip": ".slideDown().stop() 은 방금 시작한 동작을 멈춰 버림"
 },
 {
  "s": "s4",
  "g": "jQuery",
  "front": ".stop() 두 인자",
  "key": "clearQueue, jumpToEnd (기본 false)",
  "back": ".stop(true) = 대기 큐 제거 / .stop(true,true) = 큐 제거 + 현재 동작 끝 상태로 점프",
  "tip": ".finish() 는 대기 중인 것까지 모두 끝 상태로"
 },
 {
  "s": "s4",
  "g": "jQuery",
  "front": "slide 계열 기본 속도",
  "key": "400 / fast 200 / slow 600",
  "back": "인자 없으면 400ms, 'fast' 200ms, 'slow' 600ms, 숫자는 ms",
  "tip": "show()·hide() 는 인자 없으면 즉시 — '부드럽게' 아님"
 },
 {
  "s": "s4",
  "g": "jQuery",
  "front": "화살표 함수 안의 $(this)",
  "key": "요소 아님",
  "back": "화살표 함수는 this 를 바꾸지 않음 → 이벤트 요소를 가리키지 않는다. function(){} 또는 $(e.currentTarget) 사용",
  "tip": "메뉴가 '아무 반응 없음'의 흔한 원인"
 },
 {
  "s": "s4",
  "g": "접근성",
  "front": "Tab 으로 숨은 서브 항목에 가려면",
  "key": "focusin 으로 열기",
  "back": "display:none 인 링크는 Tab 순서에서 빠짐 → li 에 focusin(열기)·focusout(닫기) 병행 또는 CSS :focus-within",
  "tip": "focus/blur 는 버블링하지 않아 li 에서 잡히지 않는다"
 },
 {
  "s": "s4",
  "g": "접근성",
  "front": "포커스 표시를 지우면 안 되는 이유",
  "key": "outline:none 금지",
  "back": "Tab 위치가 안 보여 키보드 선택 불가에 가까워짐 → a:focus 에 hover 와 같은 강조를 준다",
  "tip": "a:hover, a:focus{…} 한 번에"
 },
 {
  "s": "s4",
  "g": "점검",
  "front": "메뉴가 전혀 동작하지 않을 때 1순위 확인",
  "key": "jQuery 로드 순서·경로",
  "back": "로컬 jQuery 파일 → script.js 순서, 상대경로(script/…) 확인, Console 오류 확인",
  "tip": "시험장은 인터넷 차단 — CDN 주소는 동작 안 함"
 },
 {
  "s": "s5",
  "g": "jQuery 기본",
  "front": "jQuery 연결 순서",
  "key": "jQuery 먼저, script.js 나중",
  "back": "★jquery-x.x.x.min.js → script.js★ 순서로 script 태그 배치. 상대경로 script/ 폴더.",
  "tip": "반대 순서 → Console `$ is not defined` = 준수사항(Console 오류 0) 위반"
 },
 {
  "s": "s5",
  "g": "jQuery 기본",
  "front": "document ready 단축형",
  "key": "$(function(){ })",
  "back": "`$(document).ready(function(){})` 과 같다 — ★DOM 준비 후★ 실행.",
  "tip": "head 에서 불러오면서 ready 를 빼면 오류 없이 무반응"
 },
 {
  "s": "s5",
  "g": "jQuery 기본",
  "front": "ready vs window load",
  "key": "DOM 완료 vs 리소스 전부",
  "back": "ready = DOM 트리 완성 시점 / `$(window).on('load')` = 이미지까지 로드 완료 시점.",
  "tip": "jQuery 3 에서 `.load(fn)` 이벤트 단축형은 제거 → on('load')"
 },
 {
  "s": "s5",
  "g": "jQuery 기본",
  "front": ".index()",
  "key": "형제 중 몇 번째(0부터)",
  "back": "`$(this).index()` → 클릭한 li 가 형제 중 몇 번째인지 ★0부터★ 반환.",
  "tip": "a 에 걸면 a 는 li 안 첫 자식이라 항상 0"
 },
 {
  "s": "s5",
  "g": "jQuery 기본",
  "front": ".eq(n) vs :eq()",
  "key": "메서드 권장",
  "back": "`.eq(n)` — n번째 요소(0부터). `:eq()`·`:first` 같은 위치 선택자는 3.4 부터 deprecated.",
  "tip": "`.first()`·`.eq(0)` 로 쓰면 안전"
 },
 {
  "s": "s5",
  "g": "이벤트",
  "front": "return false 의 효과",
  "key": "preventDefault + stopPropagation",
  "back": "jQuery 핸들러에서 `return false` = ★기본 동작 막기 + 버블링 중단★.",
  "tip": "a href=\"#\" 클릭 시 맨 위 점프 방지"
 },
 {
  "s": "s5",
  "g": "이벤트",
  "front": "화살표 함수의 this",
  "key": "요소 아님",
  "back": "`() => { $(this) }` 의 this 는 바깥 스코프 → 요소가 아니다. 요소가 필요하면 function 사용.",
  "tip": "탭 index 가 -1·0 고정이면 화살표 함수 의심"
 },
 {
  "s": "s5",
  "g": "이벤트",
  "front": "on() 권장",
  "key": ".on('click', fn)",
  "back": "`.bind()` 3.0 deprecated, `.live()` 1.9 제거 → ★.on()★ 으로 통일.",
  "tip": "여러 이벤트: .on('mouseenter focusin', fn)"
 },
 {
  "s": "s5",
  "g": "슬라이드 공통",
  "front": "슬라이드 3대 요구",
  "key": "3초·자동·무한",
  "back": "★매 3초 이내 전환 / 페이지 로드 시 자동 시작 / 마지막→첫 장 무한 반복★.",
  "tip": "움직이지 않으면 실격(JS·CSS 중 하나 이상 필수)"
 },
 {
  "s": "s5",
  "g": "슬라이드 공통",
  "front": "인덱스 순환 공식",
  "key": "i = (i + 1) % 3",
  "back": "0→1→2→0… 나머지 연산으로 마지막 다음에 0 복귀. 제수 = 장 수.",
  "tip": "% 2 로 쓰면 3번째 장이 영원히 안 나옴"
 },
 {
  "s": "s5",
  "g": "슬라이드 공통",
  "front": "setInterval vs setTimeout",
  "key": "반복 vs 1회",
  "back": "`setInterval(fn, 3000)` = 3초마다 반복 / `setTimeout` = 1회 실행.",
  "tip": "setTimeout 으로 만들면 한 번 넘어가고 멈춤"
 },
 {
  "s": "s5",
  "g": "슬라이드 공통",
  "front": "setInterval 인자",
  "key": "함수 참조, ms",
  "back": "`setInterval(slide, 3000)` — 괄호 없는 함수 참조, 시간 단위 ★밀리초★.",
  "tip": "slide() 로 쓰면 즉시 1회 실행 후 반복 안 됨 / 3 은 3ms"
 },
 {
  "s": "s5",
  "g": "슬라이드 공통",
  "front": "카운터 변수 위치",
  "key": "함수 밖 선언",
  "back": "`let i = 0;` 은 ★setInterval 콜백 밖★ 에 선언해야 값이 누적된다.",
  "tip": "콜백 안에서 선언 → 매번 0 으로 리셋"
 },
 {
  "s": "s5",
  "g": "슬라이드 공통",
  "front": "간격과 애니메이션 시간",
  "key": "animate < interval",
  "back": "애니메이션 시간은 전환 간격보다 짧아야 한다(예 600 < 3000).",
  "tip": "animate 가 더 길면 큐 누적·겹침"
 },
 {
  "s": "s5",
  "g": "가로·세로",
  "front": "가로 슬라이드 필수 CSS",
  "key": "overflow:hidden",
  "back": "창 요소에 `overflow:hidden` — 옆에 대기 중인 장을 가림. ul 은 `width:300%`.",
  "tip": "누락 시 3장이 한 줄로 전부 보임"
 },
 {
  "s": "s5",
  "g": "가로·세로",
  "front": "가로 이동 코드",
  "key": "marginLeft: -1200*i",
  "back": "`$('.slide ul').animate({marginLeft: -1200*i}, 600)` — 이동 거리 = 창 폭 × 인덱스.",
  "tip": "100% 폭 과제는 -100*i + '%'"
 },
 {
  "s": "s5",
  "g": "가로·세로",
  "front": "세로 이동 코드",
  "key": "marginTop: -300*i",
  "back": "`animate({marginTop: -300*i}, 600)` — 이동 단위 = 창 높이.",
  "tip": "left·top 을 쓰려면 position 지정 필요"
 },
 {
  "s": "s5",
  "g": "가로·세로",
  "front": "복제 무한 루프",
  "key": "clone → 즉시 리셋",
  "back": "첫 li 를 끝에 복제 → 마지막(복제본) 도착 후 완료 콜백에서 `css('marginLeft',0)` 즉시 리셋.",
  "tip": "되감기 없이 한 방향으로 계속 흐름"
 },
 {
  "s": "s5",
  "g": "Fade",
  "front": "Fade 겹침 CSS",
  "key": "li position:absolute",
  "back": "모든 li `position:absolute; top:0; left:0` 겹침 + 첫 장만 display:block.",
  "tip": "absolute 빠지면 장이 아래로 쌓임"
 },
 {
  "s": "s5",
  "g": "Fade",
  "front": "크로스페이드",
  "key": "fadeOut·fadeIn 동시",
  "back": "`$li.eq(cur).fadeOut(1000); $li.eq(next).fadeIn(1000);` — 같은 시점에 호출.",
  "tip": "fadeOut 콜백에서 fadeIn 하면 사이에 빈 화면"
 },
 {
  "s": "s5",
  "g": "CSS 슬라이드",
  "front": "CSS 슬라이드 주기",
  "key": "3장 × 3초 = 9s infinite",
  "back": "`animation: slideX 9s infinite` — 주기 = 장 수 × 3초 이내.",
  "tip": "infinite 누락 → 1회 후 정지"
 },
 {
  "s": "s5",
  "g": "탭",
  "front": "탭 전환 3줄",
  "key": "index → on 이동 → eq 표시",
  "back": "`n=$(this).index()` → `addClass('on').siblings().removeClass('on')` → `eq(n).show().siblings().hide()`.",
  "tip": "초기 CSS 에서 첫 내용만 보이게"
 },
 {
  "s": "s5",
  "g": "팝업",
  "front": "팝업 트리거",
  "key": "첫 번째 공지 글",
  "back": "`$('.notice li').first().find('a').click(...)` — ★첫 번째 글★만 팝업.",
  "tip": "초기 .popup {display:none}"
 },
 {
  "s": "s5",
  "g": "팝업",
  "front": "모달 덮개 CSS",
  "key": "fixed + 100% + rgba",
  "back": "`position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.5)`.",
  "tip": "absolute 면 스크롤 시 덮개가 따라오지 않음"
 },
 {
  "s": "s5",
  "g": "팝업",
  "front": "팝업이 슬라이드 밑에 깔림",
  "key": "z-index",
  "back": "팝업·덮개에 슬라이드·서브메뉴보다 큰 z-index(positioned 요소에만 적용).",
  "tip": "position static 이면 z-index 무효"
 },
 {
  "s": "s6",
  "g": "W3C",
  "front": "HTML 유효성 준수 조건",
  "key": "HTML5 · ERROR 0",
  "back": "HTML5 웹표준, ★W3C HTML validator ERROR 0★. 시험장은 인터넷 차단 → ★Validator 미제공★",
  "tip": "오류 0 은 '검사'가 아니라 '작성 습관'으로 만든다"
 },
 {
  "s": "s6",
  "g": "W3C",
  "front": "ul 의 직계 자식",
  "key": "li 만",
  "back": "`ul`·`ol` 바로 아래에는 ★li 만★ — div·a·p 를 바로 넣으면 오류",
  "tip": "메뉴 `ul>li>a` 구조를 깨지 말 것"
 },
 {
  "s": "s6",
  "g": "W3C",
  "front": "img alt 누락",
  "key": "validator 오류",
  "back": "alt 속성이 없는 img 는 ★W3C 오류★ + 준수사항 9(모든 이미지 alt) 위반",
  "tip": "장식 이미지는 `alt=\"\"` 로 속성은 남긴다"
 },
 {
  "s": "s6",
  "g": "W3C",
  "front": "중복 id",
  "key": "반복은 class",
  "back": "id 는 문서에 ★1번만★. 같은 id 두 번 = 오류",
  "tip": "메뉴·갤러리처럼 반복되는 건 class"
 },
 {
  "s": "s6",
  "g": "W3C",
  "front": "lang 속성 누락",
  "key": "경고(Warning)",
  "back": "`<html lang=\"ko\">` 누락은 ★오류가 아닌 경고★",
  "tip": "그래도 기본 골격에 항상 넣는다"
 },
 {
  "s": "s6",
  "g": "W3C",
  "front": "폐지(obsolete) 요소·속성",
  "key": "center·font·align",
  "back": "`<center>` `<font>` `align` `bgcolor` 등 표현용 → HTML5 ★오류★",
  "tip": "표현은 전부 CSS 로"
 },
 {
  "s": "s6",
  "g": "W3C",
  "front": "a 안의 div",
  "key": "HTML5 유효",
  "back": "a 는 ★투명 콘텐츠 모델★ → 부모가 흐름 콘텐츠를 허용하면 `<a><div>` 는 ★유효★",
  "tip": "단 a 안의 button·a(상호작용 중첩)는 오류"
 },
 {
  "s": "s6",
  "g": "CSS",
  "front": "CSS 단위 규칙",
  "key": "0 만 생략",
  "back": "길이 값은 ★단위 필수★(`1200px`), ★0 만 생략 가능★. 숫자-단위 사이 공백 금지",
  "tip": "`width:1200;` 는 CSS 오류"
 },
 {
  "s": "s6",
  "g": "CSS",
  "front": "calc 공백",
  "key": "± 양쪽 공백",
  "back": "`calc(100% - 200px)` — ★+·- 연산자 양쪽 공백 필수★",
  "tip": "`calc(100%-200px)` 는 무효"
 },
 {
  "s": "s6",
  "g": "CSS",
  "front": "CSS 주석",
  "key": "/* */",
  "back": "CSS 주석은 ★`/* … */`★ 만. `//` 는 파싱 오류",
  "tip": "JS 주석 습관이 섞이기 쉬움"
 },
 {
  "s": "s6",
  "g": "Console",
  "front": "`$ is not defined`",
  "key": "jQuery 로드 순서",
  "back": "jQuery 가 로드되지 않았거나 ★script.js 뒤에★ 로드됨",
  "tip": "jQuery → script.js 순서, 로컬 경로"
 },
 {
  "s": "s6",
  "g": "Console",
  "front": "ERR_FILE_NOT_FOUND",
  "key": "경로·파일명",
  "back": "src/href 가 가리키는 파일이 없음 — 오타·대소문자·폴더 누락",
  "tip": "Console 에서 어떤 파일인지 이름이 보인다"
 },
 {
  "s": "s6",
  "g": "Console",
  "front": "Console 여는 단축키",
  "key": "F12 · Ctrl+Shift+J",
  "back": "개발자도구 F12(Ctrl+Shift+I), Console 직행 ★Ctrl+Shift+J★",
  "tip": "새로고침 + 모든 동작 실행 후 확인"
 },
 {
  "s": "s6",
  "g": "접근성",
  "front": "Tab 이동의 조건",
  "key": "a href=\"#\"",
  "back": "상호작용 요소는 ★임시링크 `#`★ → Tab 포커스. href 없는 a·div 는 포커스 안 됨",
  "tip": "닫기는 `<button type=\"button\">`"
 },
 {
  "s": "s6",
  "g": "접근성",
  "front": "CSS 사용 안 함 확인",
  "key": "세로 나열",
  "back": "CSS 끄면 콘텐츠가 ★논리 순서대로 세로 나열★ 되어야 함",
  "tip": "link 주석 처리로 확인 후 ★복원★"
 },
 {
  "s": "s6",
  "g": "접근성",
  "front": "`#` 링크 튐 방지",
  "key": "return false",
  "back": "`#` 클릭 시 페이지 맨 위로 튐 → 핸들러에 ★return false / e.preventDefault()★",
  "tip": "팝업·탭 핸들러 필수"
 },
 {
  "s": "s6",
  "g": "경로",
  "front": "CSS 안 배경 이미지 경로",
  "key": "CSS 파일 기준",
  "back": "`css/style.css` 안에서는 ★`../images/bg.jpg`★ — CSS 파일 위치 기준",
  "tip": "`images/bg.jpg` 로 쓰면 css/images 를 찾음"
 },
 {
  "s": "s6",
  "g": "경로",
  "front": "제출 금지 3종",
  "key": "절대경로·압축·PSD",
  "back": "`C:\\` 절대경로(깨짐), ★압축 제출(실격)★, psd·ai 원본(웹 미사용·용량)",
  "tip": "비번호 폴더 그대로 제출"
 },
 {
  "s": "s6",
  "g": "디자인",
  "front": "Image Size vs Canvas Size",
  "key": "픽셀 vs 영역",
  "back": "이미지 크기(Alt+Ctrl+I) = ★픽셀 리샘플링★ / 캔버스 크기(Alt+Ctrl+C) = ★작업 영역만★ 변경",
  "tip": "로고를 캔버스 크기로 줄이면 잘려 나간다"
 },
 {
  "s": "s6",
  "g": "디자인",
  "front": "로고 규격(직접 디자인)",
  "key": "200×40 · 190×45",
  "back": "워드타입 ★200×40px★(심벌 없음) / 심벌+로고명 ★190×45(44)px★ — 과제별",
  "tip": "제공 로고는 종횡비 유지·색 변경 여부 확인"
 },
 {
  "s": "s6",
  "g": "디자인",
  "front": "JPG vs PNG",
  "key": "사진 vs 투명",
  "back": "JPG = 손실 압축·사진·★투명 불가★ / PNG-24 = 무손실·★알파 투명★",
  "tip": "로고는 PNG, 슬라이드 사진은 JPG"
 },
 {
  "s": "s6",
  "g": "디자인",
  "front": "일러 문자 윤곽선",
  "key": "Shift+Ctrl+O",
  "back": "문자 → ★윤곽선 만들기★ — 폰트 없는 PC 에서도 모양 유지",
  "tip": "PNG 로 내보낸 뒤 .ai 는 제출 폴더에서 제외"
 },
 {
  "s": "s6",
  "g": "디자인",
  "front": "푸터 회색 로고",
  "key": "채도 감소 · grayscale",
  "back": "포토샵 채도 감소(Shift+Ctrl+U)/흑백 저장 또는 CSS `filter:grayscale(100%)`",
  "tip": "과제 대부분이 푸터 로고 무채색 요구"
 },
 {
  "s": "s6",
  "g": "시간",
  "front": "우선순위 원칙",
  "key": "실격>레이아웃>기능>디자인",
  "back": "★실격 방지★ > 레이아웃 일치 > 기능(메뉴·탭·팝업) > 디자인",
  "tip": "슬라이드 미동작 = 실격 → JS 중 슬라이드 최우선"
 },
 {
  "s": "s6",
  "g": "시간",
  "front": "마지막 15분",
  "key": "점검 전용",
  "back": "2:45–3:00 = Console·alt·Tab·경로·불필요 파일 삭제·용량·폴더·★미압축★ 점검(권장안)",
  "tip": "3시간 초과도 실격 사유(작업범위 초과)"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ 24과제 유형 매트릭스 — 레이아웃·메뉴·슬라이드·탭·팝업 (메뉴·레이아웃은 와이어프레임 판독 [확인필요])",
  "type": "table",
  "head": [
   "#",
   "과제명",
   "레이아웃",
   "메뉴",
   "슬라이드",
   "공지/갤러리",
   "팝업"
  ],
  "rows": [
   [
    "1",
    "JUST 쇼핑몰",
    "L1",
    "M2 전체박스",
    "세로",
    "탭",
    "레이어"
   ],
   [
    "2",
    "Green복지재단",
    "L1",
    "M3 전체폭 띠",
    "가로",
    "별도",
    "★모달★"
   ],
   [
    "3",
    "강원천문대",
    "L1",
    "M1 개별",
    "Fade",
    "탭",
    "레이어"
   ],
   [
    "4",
    "유진건설",
    "L1",
    "M3 전체폭 띠",
    "Fade",
    "별도",
    "레이어"
   ],
   [
    "5",
    "대한은행",
    "L2",
    "M2 전체박스",
    "가로",
    "탭",
    "레이어"
   ],
   [
    "6",
    "대한투어",
    "L2",
    "M3 전체폭 띠",
    "세로",
    "별도",
    "★모달★"
   ],
   [
    "7",
    "세계의 미술작품",
    "L2",
    "M1 개별",
    "세로",
    "별도",
    "레이어"
   ],
   [
    "8",
    "산업대학교",
    "L2",
    "M3 전체폭 띠",
    "가로",
    "별도",
    "★모달★"
   ],
   [
    "9",
    "해운대 빛축제",
    "L3",
    "M4 아코디언",
    "Fade",
    "탭",
    "레이어"
   ],
   [
    "10",
    "부여 가을연꽃축제",
    "L3",
    "M4 아코디언",
    "Fade",
    "별도",
    "★모달★"
   ],
   [
    "11",
    "남도맛기행 축제",
    "L3",
    "M5 플라이아웃",
    "가로",
    "별도",
    "레이어"
   ],
   [
    "12",
    "Vallery Festival",
    "L3",
    "M5 플라이아웃",
    "가로",
    "별도",
    "★모달★"
   ],
   [
    "13",
    "조이컨트리클럽",
    "L4",
    "M4 아코디언",
    "세로",
    "탭",
    "레이어"
   ],
   [
    "14",
    "서울구석구석",
    "L4",
    "M4 아코디언",
    "가로",
    "별도",
    "★모달★"
   ],
   [
    "15",
    "푸른마을",
    "L4",
    "M6 전체 패널",
    "Fade",
    "탭",
    "레이어"
   ],
   [
    "16",
    "리빙샵아울렛",
    "L4",
    "M6 전체 패널",
    "Fade",
    "별도",
    "레이어"
   ],
   [
    "17",
    "김치이야기",
    "L5",
    "M4 아코디언",
    "가로",
    "별도",
    "★모달★"
   ],
   [
    "18",
    "역사박물관",
    "L5",
    "M4 아코디언",
    "세로",
    "별도",
    "★모달★"
   ],
   [
    "19",
    "영상박물관",
    "L5",
    "M5 플라이아웃",
    "세로",
    "별도",
    "레이어"
   ],
   [
    "20",
    "철길 마을",
    "L5",
    "M5 플라이아웃",
    "가로",
    "별도",
    "★모달★"
   ],
   [
    "21",
    "주식회사 기능건설",
    "L6",
    "M1 개별",
    "Fade",
    "탭",
    "레이어"
   ],
   [
    "22",
    "기능대학교",
    "L6",
    "M1 개별",
    "Fade",
    "별도",
    "★모달★"
   ],
   [
    "23",
    "오픈뱅킹",
    "L6",
    "M3 전체폭 띠",
    "가로",
    "탭",
    "레이어"
   ],
   [
    "24",
    "하이글로벌컴퍼니",
    "L6",
    "M3 전체폭 띠",
    "세로",
    "별도",
    "★모달★"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 실격 vs 감점 — 판정 대조표",
  "type": "table",
  "head": [
   "상황",
   "판정",
   "근거"
  ],
  "rows": [
   [
    "bihon.zip 으로 압축해 제출",
    "★실격★",
    "압축 파일 제출"
   ],
   [
    "제출 폴더 12MB",
    "★실격★",
    "작업범위 초과(10MB)"
   ],
   [
    "슬라이드 자리에 정지 이미지 1장",
    "★실격★",
    "Slide를 JS·CSS로 미제작"
   ],
   [
    "바탕화면 '새 폴더'에 저장",
    "★실격★",
    "비번호 폴더 저장 실패"
   ],
   [
    "과제 기준 20% 이상 미완성",
    "★실격★",
    "채점위원 판단"
   ],
   [
    "슬라이드가 CSS @keyframes로만 동작",
    "정상",
    "JS·CSS 중 하나 이상이면 충족"
   ],
   [
    "W3C HTML ERROR 3개",
    "감점",
    "준수사항 1 위반(폭 비공개)"
   ],
   [
    "가로 슬라이드 과제를 fade로 구현",
    "감점",
    "요구사항 불일치"
   ],
   [
    "서브메뉴 show()/hide() 즉시 표시",
    "감점",
    "'부드럽게' 미충족"
   ],
   [
    "img alt 누락",
    "감점",
    "준수사항 9 위반"
   ],
   [
    "style.css 대신 <style> 태그 사용",
    "감점",
    "준수사항 2(별도 파일) 위반"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 기술 준수사항 10조 — 위반 예 대조표",
  "type": "table",
  "head": [
   "조항",
   "기준",
   "대표 위반 예"
  ],
  "rows": [
   [
    "HTML5 웹표준",
    "HTML validator ERROR 0",
    "ul 직계에 div, 닫힘 태그 누락, 중복 id"
   ],
   [
    "CSS 별도 파일",
    "CSS3 validator ERROR 0",
    "style 속성, calc(100%-200px) 공백 누락"
   ],
   [
    "JS 별도 파일",
    "Console ERROR 0",
    "jQuery 뒤에 로드, 선택자 오타, CDN 연결"
   ],
   [
    "임시링크·Tab",
    "href=\"#\" + Tab 이동",
    "div에 click만, a에 href 없음"
   ],
   [
    "해상도 일관성",
    "다양한 해상도 유지",
    "고정 좌표 absolute 남발"
   ],
   [
    "table 레이아웃 금지",
    "CSS 레이아웃",
    "전체 틀을 table로 구성"
   ],
   [
    "CSS off 세로 나열",
    "논리적 문서 순서",
    "시각 순서와 다른 마크업 순서"
   ],
   [
    "텍스트 위계",
    "글자체·굵기·색·크기 구분",
    "제목·본문 동일 스타일"
   ],
   [
    "alt 속성",
    "모든 img",
    "갤러리·슬라이드 img alt 누락"
   ],
   [
    "최신 Chrome",
    "레이아웃·크기·위치 정상",
    "다른 브라우저 기준 작업"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ A~D 영역별 마크업 대응표",
  "type": "table",
  "head": [
   "영역",
   "권장 구조",
   "체크포인트"
  ],
  "rows": [
   [
    "head",
    "meta charset → title → link → jQuery → script.js",
    "title 필수, jQuery 먼저"
   ],
   [
    "Ⓐ Header",
    "header > h1>a>img + nav>ul.menu>li>(a + ul.sub)",
    "로고·메뉴 모두 a href=\"#\""
   ],
   [
    "Ⓑ Slide",
    "section.slide > ul > li>img+span × 3",
    "3장 모두, 각 img alt"
   ],
   [
    "Ⓒ 공지·탭",
    "ul>li>a+span / ul.tab-btn + div.tab-cont",
    "첫 글 a = 팝업 트리거, 버튼·내용 순서 일치"
   ],
   [
    "Ⓒ 갤러리·배너",
    "ul>li>a>img × 3 / div>a 텍스트",
    "이미지 통째 삽입 금지"
   ],
   [
    "Ⓓ Footer",
    "footer > img(회색 로고) + ul 하단메뉴 + p &copy; + ul SNS / select",
    "select>option, &copy; 세미콜론"
   ],
   [
    "팝업",
    "div.modal > div.popup > h2 + p + button type=button",
    "body 끝에 배치"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ W3C 메시지 판정표 — ERROR인가 경고인가",
  "type": "table",
  "head": [
   "상황",
   "판정",
   "고치는 법"
  ],
  "rows": [
   [
    "DOCTYPE 없음",
    "ERROR",
    "첫 줄 <!DOCTYPE html>"
   ],
   [
    "title 없음 / 빈 title",
    "ERROR",
    "<title>과제명<\/title>"
   ],
   [
    "img alt 없음",
    "ERROR",
    "alt=\"내용\" 또는 alt=\"\""
   ],
   [
    "같은 id 두 번",
    "ERROR",
    "class로 변경"
   ],
   [
    "ul 바로 아래 a·div",
    "ERROR",
    "li로 감싸기"
   ],
   [
    "width=\"200px\"",
    "ERROR",
    "width=\"200\""
   ],
   [
    "<center>·<font>·border=",
    "ERROR(폐지)",
    "CSS로"
   ],
   [
    "&copy (세미콜론 없음)",
    "ERROR",
    "&copy;"
   ],
   [
    "section 제목 없음",
    "경고",
    "h2 추가(선택)"
   ],
   [
    "html lang 없음",
    "경고",
    "lang=\"ko\""
   ],
   [
    "script type=\"text/javascript\"",
    "경고",
    "type 생략"
   ],
   [
    "<br />",
    "정보",
    "<br> (그대로 둬도 무방)"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 상대경로 계산 — 기준 파일이 어디인가",
  "type": "table",
  "head": [
   "작성 위치",
   "가리킬 파일",
   "정답 경로",
   "흔한 오답"
  ],
  "rows": [
   [
    "index.html의 img",
    "images/logo.png",
    "images/logo.png",
    "C:\\Users\\…\\logo.png"
   ],
   [
    "index.html의 link",
    "css/style.css",
    "css/style.css",
    "style.css (폴더 누락)"
   ],
   [
    "index.html의 script",
    "script/script.js",
    "script/script.js",
    "https://…CDN"
   ],
   [
    "css/style.css의 url()",
    "images/bg.jpg",
    "../images/bg.jpg",
    "images/bg.jpg"
   ],
   [
    "script/script.js의 문자열 경로",
    "images/a.jpg",
    "images/a.jpg (HTML 기준)",
    "../images/a.jpg"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 레이아웃 6계열 — 구조와 CSS 뼈대 한눈표 ([확인필요: 와이어프레임 원본 대조])",
  "type": "table",
  "head": [
   "계열",
   "폭·정렬",
   "헤더 위치",
   "핵심 CSS",
   "흔한 실수"
  ],
  "rows": [
   [
    "L1",
    "1200px ★가운데★",
    "상단",
    "#wrap{width:1200px;margin:0 auto}",
    "body 리셋 누락으로 8px 틈"
   ],
   [
    "L2",
    "Ⓐ·Ⓓ ★100%★, 내부 1200 가운데",
    "상단",
    "header{width:100%} .inner{width:1200px;margin:0 auto}",
    "header 에 1200 을 줘 배경이 잘림"
   ],
   [
    "L3",
    "1000px ★왼쪽★",
    "좌측 세로",
    "#wrap{width:1000px} + float/flex",
    "margin:0 auto 로 가운데 정렬"
   ],
   [
    "L4",
    "★100%★",
    "좌측 200px",
    ".main{width:calc(100% - 200px)} 또는 flex:1",
    "calc 공백 누락 / content-box 로 넘침"
   ],
   [
    "L5",
    "Ⓐ·Ⓓ 100%, 슬라이드 풀높이",
    "좌측 200px + C 400px 열",
    ".slide{width:calc(100% - 600px);height:calc(100vh - 120px)}",
    "height:100% 부모 체인 누락"
   ],
   [
    "L6",
    "1340px ★가운데★",
    "상단(100)",
    "#wrap{width:1340px;margin:0 auto}",
    "1200 으로 습관 입력"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ position 값 비교 — 기준·자리·용도",
  "type": "table",
  "head": [
   "값",
   "위치 기준",
   "원래 자리",
   "z-index",
   "시험 용도"
  ],
  "rows": [
   [
    "static",
    "없음(top 등 무시)",
    "차지",
    "★무효★",
    "기본 흐름"
   ],
   [
    "relative",
    "자기 원래 위치",
    "★차지★",
    "유효",
    "absolute 자식의 기준점"
   ],
   [
    "absolute",
    "가까운 non-static 조상",
    "비움",
    "유효",
    "서브메뉴·슬라이드 문구·fade 겹침"
   ],
   [
    "fixed",
    "뷰포트",
    "비움",
    "유효",
    "모달 덮개(스크롤 무관)"
   ],
   [
    "sticky",
    "스크롤 컨테이너",
    "차지",
    "유효",
    "선택 사항"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 명시도 계산표 — 자주 나오는 선택자",
  "type": "table",
  "head": [
   "선택자",
   "(a,b,c)",
   "비고"
  ],
  "rows": [
   [
    "*",
    "(0,0,0)",
    "전체 선택자는 0"
   ],
   [
    "li",
    "(0,0,1)",
    "요소 1"
   ],
   [
    ".menu > li",
    "(0,1,1)",
    "결합자 > 는 0"
   ],
   [
    "li.on",
    "(0,1,1)",
    ".on (0,1,0) 보다 강함"
   ],
   [
    ".menu a:hover",
    "(0,2,1)",
    "가상클래스 = class 급"
   ],
   [
    "#header .menu li a",
    "(1,1,2)",
    "id 1개가 class 여러 개를 이김"
   ],
   [
    "style=\"…\"",
    "인라인",
    "모든 선택자보다 우선(!important 제외)"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 숨김·겹침·정렬 속성 대조",
  "type": "table",
  "head": [
   "목적",
   "정답 속성",
   "헷갈리는 오답"
  ],
  "rows": [
   [
    "공간까지 숨김",
    "display:none",
    "visibility:hidden(자리 유지)"
   ],
   [
    "영역 밖 잘라내기",
    "overflow:hidden",
    "display:none / z-index:-1"
   ],
   [
    "배경만 반투명",
    "background:rgba(0,0,0,0.5)",
    "opacity:0.5(자식까지 반투명)"
   ],
   [
    "블록 가운데",
    "margin:0 auto (+width)",
    "text-align:center"
   ],
   [
    "한 줄 세로 가운데",
    "line-height = height",
    "vertical-align:middle"
   ],
   [
    "무채색 로고",
    "filter:grayscale(100%)",
    "color:gray / opacity"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 메뉴 6방식(M1~M6) 한눈 비교",
  "type": "table",
  "head": [
   "방식",
   "펼쳐지는 서브",
   "서브 CSS 위치",
   "이벤트 대상",
   "핵심 jQuery",
   "해당 과제(판독)"
  ],
  "rows": [
   [
    "M1 개별 드롭다운",
    "올린 메뉴 1개",
    "absolute; top:100%",
    "각 메인 li",
    "$(this).children('.sub').stop().slideDown()",
    "3·7·21·22"
   ],
   [
    "M2 전체 서브 박스",
    "전체 동시(메뉴 폭 4열)",
    "absolute, 같은 높이",
    "메뉴 전체",
    "$('.sub').stop().slideDown()",
    "1·5"
   ],
   [
    "M3 전체폭 서브 띠",
    "전체 동시 + 100% 띠",
    "서브·띠 absolute, 띠 left:0 width:100%",
    "메뉴+띠 감싼 부모",
    "$('.sub, .subbg').stop().slideDown()",
    "2·4·6·8·23·24"
   ],
   [
    "M4 세로 아코디언",
    "올린 메뉴 1개",
    "static(흐름 안)",
    "각 메인 li",
    "$(this).children('.sub').stop().slideDown()",
    "9·10·13·14·17·18"
   ],
   [
    "M5 세로 플라이아웃",
    "올린 메뉴 1개",
    "absolute; left:100%; top:0",
    "각 메인 li",
    "slideDown / fadeIn / animate({width:'show'})",
    "11·12·19·20"
   ],
   [
    "M6 세로 + 넓은 패널",
    "전체 동시(우측 패널)",
    "패널 absolute(헤더 오른쪽)",
    "메뉴+패널 감싼 부모",
    "$('.sub, .panel').stop().fadeIn()",
    "15·16"
   ],
   [
    "※ 과제 번호",
    "와이어프레임 이미지 판독 결과",
    "[확인필요: 원본 대조]",
    "",
    "",
    ""
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ jQuery 메뉴 API 대조표",
  "type": "table",
  "head": [
   "API",
   "동작",
   "시험 포인트"
  ],
  "rows": [
   [
    "mouseenter / mouseleave",
    "요소 진입·이탈 1회(자식 무시)",
    "메뉴 표준 이벤트"
   ],
   [
    "mouseover / mouseout",
    "자식 진입마다 발생·버블링",
    "떨림·서브에서 닫힘 원인"
   ],
   [
    ".hover(f1,f2)",
    "mouseenter+mouseleave",
    "함수 1개면 양쪽 같은 함수"
   ],
   [
    ".on('a b', f)",
    "여러 이벤트 한 번에",
    "'mouseenter focusin'"
   ],
   [
    "focusin / focusout",
    "포커스 이벤트, 버블링 O",
    "Tab 으로 서브 열기"
   ],
   [
    "focus / blur",
    "버블링 X",
    "li 에 걸면 자식 a 포커스 못 잡음"
   ],
   [
    ".stop()",
    "현재 애니메이션 중단",
    "★항상 애니메이션 앞★"
   ],
   [
    ".slideDown/Up/Toggle(ms)",
    "높이 애니메이션",
    "display:none 에서 시작"
   ],
   [
    ".fadeIn/Out(ms)",
    "투명도 애니메이션",
    "M5·M6 대안"
   ],
   [
    ".show()/.hide()",
    "인자 없으면 즉시",
    "'부드럽게' 미충족"
   ],
   [
    ".children() / .find()",
    "직계 자식 / 모든 후손",
    "3단 메뉴에서 차이"
   ],
   [
    "$(function(){})",
    "DOM 준비 후 실행",
    "head 로드 시 필수"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 메뉴 오류 증상 → 원인 → 처방",
  "type": "table",
  "head": [
   "증상",
   "원인",
   "처방"
  ],
  "rows": [
   [
    "손 뗀 뒤에도 계속 오르내림",
    ".stop() 누락",
    ".stop().slideDown()"
   ],
   [
    "M1 과제인데 전체가 열림",
    "$('.sub') 로 모두 선택",
    "$(this).children('.sub')"
   ],
   [
    "서브로 내려가면 닫힘",
    "서브가 li 밖 / 틈 / mouseout",
    "li 안 + top:100% + mouseleave"
   ],
   [
    "서브가 슬라이드 뒤에 깔림",
    "z-index 부족·헤더 overflow:hidden",
    "z-index 상향·overflow 해제"
   ],
   [
    "서브가 화면 왼쪽 끝에 뜸",
    "li position:relative 누락",
    "li{position:relative}"
   ],
   [
    "서브 li 도 가로로 뜸",
    ".menu li{float:left}",
    ".menu > li"
   ],
   [
    "즉시 튀어나옴",
    "show()/display 전환",
    "slideDown(ms)/transition"
   ],
   [
    "Tab 으로 서브에 못 감",
    "display:none 링크는 포커스 제외",
    "focusin 열기·:focus-within"
   ],
   [
    "아무 반응 없음",
    "jQuery 경로·순서, 화살표 함수 this",
    "로컬 jQuery 먼저, function(){}"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 슬라이드 3종 구현 대조표",
  "type": "table",
  "head": [
   "구분",
   "가로 이동",
   "세로 이동",
   "Fade-in/out"
  ],
  "rows": [
   [
    "li 배치",
    "가로 나열(float·flex), ul width:300%",
    "세로 쌓임(기본 흐름)",
    "position:absolute 겹침"
   ],
   [
    "창 CSS",
    "overflow:hidden",
    "overflow:hidden",
    "position:relative + 높이"
   ],
   [
    "핵심 코드",
    "animate({marginLeft:-W*i})",
    "animate({marginTop:-H*i})",
    "eq(cur).fadeOut() + eq(next).fadeIn()"
   ],
   [
    "초기 상태",
    "marginLeft 0",
    "marginTop 0",
    "첫 li 만 display:block"
   ],
   [
    "무한 반복",
    "i=(i+1)%3 되감기 / clone 리셋",
    "동일",
    "cur=(cur+1)%3"
   ],
   [
    "대표 실수",
    "overflow 누락·이동폭≠창폭",
    "이동 단위≠창 높이",
    "absolute 누락·순차 fade 로 빈 화면"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 타이밍·실격 판정표",
  "type": "table",
  "head": [
   "상황",
   "판정",
   "근거"
  ],
  "rows": [
   [
    "슬라이드 이미지 1장 고정 배치",
    "실격",
    "JS·CSS 중 하나 이상으로 제작하지 않음"
   ],
   [
    "setInterval(fn, 3000) + animate 800",
    "적합",
    "3초 이내 전환·자동·반복"
   ],
   [
    "setInterval(fn, 5000)",
    "요구 위반",
    "3초 초과"
   ],
   [
    "setTimeout(fn, 3000) 1회",
    "요구 위반",
    "무한 반복 아님"
   ],
   [
    "클릭해야 시작하는 슬라이드",
    "요구 위반",
    "페이지 열면 자동 시작"
   ],
   [
    "CSS animation 9s infinite(3장)",
    "적합",
    "CSS 단독 허용, 장당 3초"
   ],
   [
    "가로 과제를 Fade 로 구현",
    "요구 위반",
    "방향 지시 불일치 [확인필요: 감점 폭]"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 탭·팝업 핵심 메서드 한눈표",
  "type": "table",
  "head": [
   "기능",
   "코드",
   "빠뜨리면"
  ],
  "rows": [
   [
    "클릭 위치",
    "$(this).index()",
    "어떤 탭인지 모름"
   ],
   [
    "활성 표시",
    "addClass('on').siblings().removeClass('on')",
    "on 이 여러 개 남음"
   ],
   [
    "내용 전환",
    "eq(n).show().siblings().hide()",
    "모든 내용이 동시에 보임"
   ],
   [
    "기본 동작",
    "return false / e.preventDefault()",
    "맨 위로 점프"
   ],
   [
    "팝업 열기",
    "$('.popup').show() / fadeIn()",
    "—"
   ],
   [
    "팝업 닫기",
    "$('.popup').hide() / fadeOut()",
    "닫기 버튼 요구 위반"
   ],
   [
    "모달 덮개",
    "position:fixed + rgba 배경",
    "모달 과제 요구 위반"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ 오류 판정표 — ERROR / 경고 / 규정위반 구분",
  "type": "table",
  "head": [
   "상황",
   "판정",
   "근거"
  ],
  "rows": [
   [
    "DOCTYPE 누락",
    "HTML ★오류★",
    "validator"
   ],
   [
    "title 누락",
    "HTML ★오류★",
    "head 필수 자식"
   ],
   [
    "img alt 누락",
    "HTML ★오류★ + 준수사항 위반",
    "validator · 준수사항 9"
   ],
   [
    "ul 안에 div 직계",
    "HTML ★오류★",
    "콘텐츠 모델"
   ],
   [
    "중복 id",
    "HTML ★오류★",
    "validator"
   ],
   [
    "lang 누락",
    "경고(Warning)",
    "validator"
   ],
   [
    "`<a href=\"#\"><div>`",
    "★유효★",
    "a 투명 콘텐츠 모델"
   ],
   [
    "`width:1200;`",
    "CSS ★오류★",
    "단위 누락"
   ],
   [
    "`calc(100%-200px)`",
    "CSS ★오류★(무효 값)",
    "연산자 공백"
   ],
   [
    "table 로 전체 레이아웃",
    "★준수사항 6 위반★(validator 오류 아님)",
    "공개문제 준수사항"
   ],
   [
    "`$ is not defined`",
    "Console ★오류★",
    "준수사항 3"
   ],
   [
    "압축 제출",
    "★실격★",
    "실격 사유"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ 3시간 타임라인(권장안) · 우선순위",
  "type": "table",
  "head": [
   "구간",
   "작업",
   "놓치면"
  ],
  "rows": [
   [
    "0:00–0:10",
    "문제 분석 5축 체크 + 비번호 폴더·하위 폴더",
    "메뉴 방식·슬라이드 방향 오답"
   ],
   [
    "0:10–0:40",
    "로고·슬라이드·회색 로고·배너 이미지 가공, 웹 저장",
    "규격·종횡비 감점, 용량 초과"
   ],
   [
    "0:40–1:30",
    "HTML 구조 + CSS 레이아웃",
    "치수 불일치 감점"
   ],
   [
    "1:30–2:20",
    "메뉴 → ★슬라이드★ → 탭 → 팝업",
    "슬라이드 미동작 = ★실격★"
   ],
   [
    "2:20–2:45",
    "텍스트 위계·색 다듬기",
    "위계 미흡 감점"
   ],
   [
    "2:45–3:00",
    "체크리스트 점검·저장·미압축",
    "실격(폴더·압축·용량·시간)"
   ]
  ]
 },
 {
  "s": "s6",
  "title": "★ 이미지 가공 도구·형식 대조",
  "type": "table",
  "head": [
   "작업",
   "도구·메뉴(단축키)",
   "저장"
  ],
  "rows": [
   [
    "로고 직접 디자인",
    "일러 대지 200×40 → 윤곽선(Shift+Ctrl+O)",
    "PNG(투명)"
   ],
   [
    "제공 로고 크기 조정",
    "포토샵 Ctrl+T 비율 유지 / 이미지 크기 Alt+Ctrl+I",
    "PNG"
   ],
   [
    "제공 로고 색 변경",
    "색상/채도·칠 레이어 등",
    "PNG"
   ],
   [
    "푸터 회색 로고",
    "채도 감소 Shift+Ctrl+U 또는 CSS grayscale",
    "PNG / 추가 파일 없음"
   ],
   [
    "슬라이드 3장",
    "자르기(C)로 영역 치수 맞춤 + 텍스트 합성",
    "JPG"
   ],
   [
    "웹 저장",
    "웹용으로 저장 Alt+Shift+Ctrl+S / 내보내기 Alt+Shift+Ctrl+W",
    "품질·용량 미리보기"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "실기 시험시간은 4시간이다 — 2025년 제1회부터 ★3시간★ (4시간은 구 웹디자인기능사)"
 },
 {
  "s": "s1",
  "t": "용량이 크면 zip으로 압축해 제출한다 — ★압축 제출은 실격★, psd·ai 삭제와 이미지 최적화로 10MB 이하를 맞춘다"
 },
 {
  "s": "s1",
  "t": "제출 폴더명은 수험번호·성명이다 — ★비번호★ 폴더"
 },
 {
  "s": "s1",
  "t": "시험장에서 jQuery CDN을 연결하면 된다 — ★인터넷 차단★, 제공된 jQuery 파일을 로컬 상대경로로 연결"
 },
 {
  "s": "s1",
  "t": "HTML 유효성은 시험장에서 온라인 Validator로 확인한다 — 유효성검사 서비스 ★미제공★"
 },
 {
  "s": "s1",
  "t": "W3C WARNING이 0이어야 한다 — 기준은 ★ERROR 0★"
 },
 {
  "s": "s1",
  "t": "<style> 태그로 head에 쓰면 별도 파일로 인정된다 — ★별도 CSS 파일을 link★해야 한다"
 },
 {
  "s": "s1",
  "t": "슬라이드는 반드시 jQuery로 만들어야 한다 — ★JS(jQuery 포함)·CSS 중 하나 이상★, CSS keyframes도 가능"
 },
 {
  "s": "s1",
  "t": "슬라이드가 안 움직여도 이미지만 있으면 감점으로 끝난다 — 정지 이미지 1장 배치는 ★실격★"
 },
 {
  "s": "s1",
  "t": "W3C 오류가 있으면 실격이다 — 준수사항 위반은 ★감점★ 대상(실격 6사유에 없음)"
 },
 {
  "s": "s1",
  "t": "미완성은 30% 이상부터 실격이다 — ★20% 이상★ 미완성"
 },
 {
  "s": "s1",
  "t": "Dreamweaver는 선택 설치 SW다 — Dreamweaver는 ★사용 불가★, 선택 설치는 ★EditPlus★"
 },
 {
  "s": "s1",
  "t": "팝업은 공지사항 아무 글이나 클릭하면 된다 — ★첫 번째 글★ 클릭"
 },
 {
  "s": "s1",
  "t": "전체 레이아웃을 table로 짜면 정렬이 쉬워 권장된다 — 전체 레이아웃 ★table 금지★"
 },
 {
  "s": "s1",
  "t": "배경색·기본 텍스트색은 자유다 — 배경 ★#ffffff★, 기본 텍스트 ★#333333★ (주조·보조색만 자유)"
 },
 {
  "s": "s1",
  "t": "calc(100%-200px) 로 써도 된다 — 연산자 양옆 ★공백 필수★: calc(100% - 200px)"
 },
 {
  "s": "s1",
  "t": "제공 로고는 영역에 맞게 늘려 넣는다 — ★종횡비 유지★"
 },
 {
  "s": "s1",
  "t": "동일 작품이 나오면 나중에 제출한 사람만 실격이다 — 관련자 ★전원 부정행위★"
 },
 {
  "s": "s2",
  "t": "DOCTYPE은 head 안 첫 줄이다 — 아니다. html 태그보다 앞, ★문서 맨 첫 줄★이다"
 },
 {
  "s": "s2",
  "t": "lang=\"kr\" 로 한국어를 지정한다 — 한국어 언어 코드는 ★ko★(KR은 국가 코드)"
 },
 {
  "s": "s2",
  "t": "lang 누락은 W3C ERROR다 — ★경고★다. 반면 title 누락은 ERROR"
 },
 {
  "s": "s2",
  "t": "section에 제목이 없으면 ERROR다 — ★경고★다. ERROR 0 기준에는 걸리지 않는다"
 },
 {
  "s": "s2",
  "t": "HTML5에서는 div를 쓰면 안 된다 — div는 레이아웃 래퍼로 정상 사용한다. 금지는 ★레이아웃용 table★"
 },
 {
  "s": "s2",
  "t": "script.js를 먼저 연결해도 jQuery가 뒤에 있으면 된다 — 순서가 거꾸로면 `$ is not defined`"
 },
 {
  "s": "s2",
  "t": "시험장에서도 jQuery CDN을 쓰면 된다 — 인터넷 차단, ★제공 파일을 상대경로로★"
 },
 {
  "s": "s2",
  "t": "`<script src=\"a.js\" />` 로 닫아도 된다 — script는 반드시 `<\/script>`"
 },
 {
  "s": "s2",
  "t": "서브메뉴 ul은 메인 ul 다음에 따로 둔다 — ★부모 li 안, a 다음★에 중첩"
 },
 {
  "s": "s2",
  "t": "ul 안에 a를 바로 넣어도 된다 — ul 직계 자식은 ★li만★"
 },
 {
  "s": "s2",
  "t": "장식 이미지는 alt를 빼도 된다 — alt 속성은 필수, 값만 ★빈 문자열★"
 },
 {
  "s": "s2",
  "t": "CSS 파일의 url()도 index.html 기준 경로다 — ★CSS 파일 위치 기준★ → `../images/`"
 },
 {
  "s": "s2",
  "t": "`/images/logo.png` 는 상대경로다 — 슬래시로 시작하면 ★루트 기준★, 로컬에서 깨짐"
 },
 {
  "s": "s2",
  "t": "button의 type 기본값은 button이다 — 기본값은 ★submit★"
 },
 {
  "s": "s2",
  "t": "img width=\"200px\" 로 쓴다 — HTML 속성은 ★숫자만★(200), px은 ERROR"
 },
 {
  "s": "s2",
  "t": "a 안에는 블록 요소를 절대 못 넣는다 — HTML5 a는 투명 모델, ★금지는 a·button 같은 대화형 요소★"
 },
 {
  "s": "s2",
  "t": "슬라이드 이미지를 1장만 고정해 두면 감점만 된다 — ★실격 사유★"
 },
 {
  "s": "s2",
  "t": "`onclick=\"\"` 속성으로 JS를 쓰면 별도 파일 조건을 충족한다 — 이벤트도 ★script.js에서 연결★"
 },
 {
  "s": "s3",
  "t": "box-sizing:border-box 면 margin 까지 width 에 포함된다 — margin 은 어떤 경우에도 박스 바깥, width 에 포함되지 않는다"
 },
 {
  "s": "s3",
  "t": "box-sizing 의 기본값은 border-box 다 — 기본값은 content-box, 그래서 리셋에서 border-box 로 바꾼다"
 },
 {
  "s": "s3",
  "t": "ul{list-style:none} 이면 왼쪽 들여쓰기도 사라진다 — 점만 사라진다, padding-left 는 margin·padding 리셋이 없앤다"
 },
 {
  "s": "s3",
  "t": "세로 margin 30px + 20px 사이 간격은 50px — 마진 병합으로 큰 값 30px, 가로 margin 은 병합되지 않는다"
 },
 {
  "s": "s3",
  "t": "text-align:center 로 1200px 래퍼를 가운데 보낸다 — 블록 자체는 width + margin:0 auto, text-align 은 안쪽 인라인 내용만"
 },
 {
  "s": "s3",
  "t": "L3(1000px) 계열도 margin:0 auto — L3 는 왼쪽 정렬, 가운데 정렬은 L1(1200)·L6(1340)"
 },
 {
  "s": "s3",
  "t": "header{width:1200px; background:…} 로 100% 띠 완성 — 배경이 1200 에서 잘림, 바깥 100% + 안쪽 .inner 1200 두 겹"
 },
 {
  "s": "s3",
  "t": "calc(100%-200px) 도 동작한다 — + · - 양옆 공백이 없으면 무효 선언, calc(100% - 200px)"
 },
 {
  "s": "s3",
  "t": "부모에 position:relative 가 없어도 absolute 자식은 부모 기준 — 가장 가까운 non-static 조상, 없으면 초기 포함 블록 기준"
 },
 {
  "s": "s3",
  "t": "relative 로 옮기면 뒤 요소도 따라 밀린다 — relative 는 원래 자리를 유지, 뒤 요소는 그대로"
 },
 {
  "s": "s3",
  "t": "z-index:9999 면 static 요소도 맨 위 — z-index 는 position 이 static 이 아닌 요소(및 flex 아이템)에만 적용"
 },
 {
  "s": "s3",
  "t": "모달 덮개에 opacity:0.5 — 안쪽 팝업 박스까지 반투명, 배경만 rgba(0,0,0,0.5)"
 },
 {
  "s": "s3",
  "t": "clearfix 는 ::after{display:block; clear:both} 두 줄이면 충분 — content:'' 가 없으면 ::after 자체가 생성되지 않는다"
 },
 {
  "s": "s3",
  "t": "flex 컨테이너는 넘치면 자동 줄바꿈 — flex-wrap 기본 nowrap, 대신 flex-shrink:1 로 자식이 줄어든다"
 },
 {
  "s": "s3",
  "t": "#header a 보다 뒤에 쓴 .menu a.on 이 이긴다 — 명시도 (1,0,1) > (0,2,1), 순서는 명시도가 같을 때만 따진다"
 },
 {
  "s": "s3",
  "t": "CSS 파일에 li:eq(2) 로 셋째 항목 선택 — :eq() 는 jQuery 전용, CSS 는 li:nth-child(3)(1부터 셈)"
 },
 {
  "s": "s3",
  "t": "height:100% 면 무조건 화면 높이 — 부모 높이가 정해져 있어야 계산, 화면 기준은 100vh"
 },
 {
  "s": "s4",
  "t": "서브 ul 은 메인 <\/li> 다음(ul 직계)에 둔다 — 틀림. 서브 ul 은 메인 li 의 자식이어야 W3C 를 통과하고 hover 가 유지된다"
 },
 {
  "s": "s4",
  "t": ".slideDown().stop() 순서로 써도 같다 — 틀림. stop() 은 애니메이션 '앞'에: .stop().slideDown()"
 },
 {
  "s": "s4",
  "t": "mouseover/mouseout 은 mouseenter/mouseleave 와 같은 이벤트다 — 틀림. over/out 은 자식 진입마다 발생하고 버블링한다"
 },
 {
  "s": "s4",
  "t": ".hover(f1, f2) 는 mouseover+mouseout 이다 — 틀림. mouseenter+mouseleave 다"
 },
 {
  "s": "s4",
  "t": "show() 로 서브를 띄워도 '부드럽게' 요구를 충족한다 — 틀림. 인자 없는 show() 는 즉시 표시. slideDown(ms)·fadeIn(ms) 사용"
 },
 {
  "s": "s4",
  "t": "서브를 height:0 으로 숨겨 두고 slideDown() 하면 된다 — 틀림. slideDown 은 display:none 인(숨겨진) 요소에서 동작한다"
 },
 {
  "s": "s4",
  "t": "CSS transition 으로 display:none→block 을 부드럽게 할 수 있다 — 틀림. display 는 전환되지 않음. max-height·opacity 를 전환"
 },
 {
  "s": "s4",
  "t": "M1 과제에서 $('.sub').slideDown() 을 써도 된다 — 틀림. 모든 서브가 열리는 M2/M3 동작이 된다. $(this).children('.sub')"
 },
 {
  "s": "s4",
  "t": "M3 전체 서브 띠는 메인 li 마다 이벤트를 건다 — 틀림. 메뉴(와 띠)를 감싸는 부모 하나에 걸어야 메뉴 이동 중 닫히지 않는다"
 },
 {
  "s": "s4",
  "t": "M4 아코디언 서브도 position:absolute 로 띄운다 — 틀림. 흐름 안(static)에 있어야 아래 메뉴를 밀어 내리는 '제자리 펼침'이 된다"
 },
 {
  "s": "s4",
  "t": "focus/blur 를 li 에 걸면 자식 a 의 포커스를 잡는다 — 틀림. 버블링하는 focusin/focusout 을 써야 한다"
 },
 {
  "s": "s4",
  "t": "display:none 인 서브 링크도 Tab 으로 이동된다 — 틀림. 숨은 요소는 Tab 순서에서 빠진다"
 },
 {
  "s": "s4",
  "t": "화살표 함수 안에서도 $(this) 는 이벤트가 걸린 li 다 — 틀림. 화살표 함수는 this 를 바인딩하지 않는다"
 },
 {
  "s": "s4",
  "t": "jQuery 는 CDN 주소로 연결해도 시험장에서 동작한다 — 틀림. 인터넷 차단. 제공 파일을 상대경로로 연결"
 },
 {
  "s": "s4",
  "t": ".menu li{float:left} 로 메인 메뉴를 가로 배치한다 — 틀림. 서브 li 까지 선택된다. .menu > li"
 },
 {
  "s": "s4",
  "t": "outline:none 으로 포커스 테두리를 지워 디자인을 정리한다 — 틀림. Tab 위치가 보이지 않는다. 지웠다면 a:focus 강조로 대체"
 },
 {
  "s": "s5",
  "t": "setTimeout(fn, 3000) 으로 슬라이드를 만들면 3초마다 반복된다 — setTimeout 은 1회 실행, 반복은 setInterval"
 },
 {
  "s": "s5",
  "t": "setInterval 의 시간 인자 3 은 3초다 — 단위는 밀리초, 3초는 3000"
 },
 {
  "s": "s5",
  "t": "setInterval(slide(), 3000) 도 3초마다 slide 를 호출한다 — 괄호를 붙이면 즉시 1회 실행한 반환값을 넘기므로 반복되지 않는다"
 },
 {
  "s": "s5",
  "t": "i = (i + 1) % 2 로 3장을 순환한다 — 제수는 장 수(3)여야 0→1→2→0"
 },
 {
  "s": "s5",
  "t": "카운터 let i = 0 을 setInterval 콜백 안에 두어도 된다 — 매번 0 으로 초기화되어 넘어가지 않는다"
 },
 {
  "s": "s5",
  "t": "슬라이드는 반드시 JavaScript 로만 만들어야 한다 — JS(jQuery 포함)·CSS 중 하나 이상이면 되므로 CSS keyframes 도 허용"
 },
 {
  "s": "s5",
  "t": "슬라이드 자리에 움직이지 않는 이미지 1장을 두면 감점만 된다 — 실격 사유"
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드는 li 를 float:left 로 나열한다 — Fade 는 position:absolute 겹침, float 나열은 가로 이동형"
 },
 {
  "s": "s5",
  "t": "가로 이동 슬라이드에서 overflow:hidden 은 선택 사항이다 — 빠지면 대기 중인 장이 창 밖으로 보인다"
 },
 {
  "s": "s5",
  "t": "화살표 함수 핸들러 안에서도 $(this) 는 클릭한 요소다 — 화살표 함수의 this 는 바깥 스코프"
 },
 {
  "s": "s5",
  "t": "script.js 를 jQuery 파일보다 먼저 불러와도 ready 로 감싸면 괜찮다 — $ 자체가 정의되지 않아 오류"
 },
 {
  "s": "s5",
  "t": "시험장에서는 jQuery CDN 주소를 써도 된다 — 인터넷 차단, 제공 파일을 상대경로로 연결"
 },
 {
  "s": "s5",
  "t": "jQuery 핸들러의 return false 는 기본 동작만 막는다 — preventDefault 와 stopPropagation 을 모두 수행"
 },
 {
  "s": "s5",
  "t": "탭 전환 시 addClass('on') 만 하면 된다 — 형제의 on 을 removeClass 하지 않으면 활성 표시가 누적"
 },
 {
  "s": "s5",
  "t": "모달 덮개는 position:absolute 로 충분하다 — 스크롤과 무관하게 화면 전체를 덮으려면 position:fixed"
 },
 {
  "s": "s5",
  "t": "팝업은 공지사항 아무 글이나 클릭하면 떠도 된다 — 요구는 첫 번째 글 클릭"
 },
 {
  "s": "s5",
  "t": "jQuery animate 로 배경색을 부드럽게 바꿀 수 있다 — 색상 애니메이션은 플러그인(jQuery UI 등) 필요"
 },
 {
  "s": "s6",
  "t": "시험장에서 온라인 W3C Validator 로 검사하면 된다 — 인터넷 차단·Validator 미제공, 오류 0 은 작성 습관으로 보장한다"
 },
 {
  "s": "s6",
  "t": "`<html>` 에 lang 이 없으면 validator 오류다 — lang 누락은 경고(Warning)이고, alt·title·DOCTYPE 누락이 오류다"
 },
 {
  "s": "s6",
  "t": "HTML5 에서 a 안에 div 를 넣으면 무조건 오류다 — a 는 투명 콘텐츠 모델이라 유효, 오류는 a 안의 button·a 같은 상호작용 중첩이다"
 },
 {
  "s": "s6",
  "t": "table 레이아웃은 W3C 오류로 걸린다 — validator 는 통과하지만 준수사항 6(레이아웃 table 금지) 위반이다"
 },
 {
  "s": "s6",
  "t": "장식 이미지는 alt 속성을 빼도 된다 — 속성은 반드시 두고 값을 비운다(alt=\"\")"
 },
 {
  "s": "s6",
  "t": "Console 에 빨간 오류가 없으면 기능도 정상이다 — jQuery 선택자 오타·ready 누락은 오류 없이 동작만 안 한다"
 },
 {
  "s": "s6",
  "t": "jQuery 는 script.js 뒤에 연결해도 된다 — 먼저 로드해야 하며, 뒤에 두면 `$ is not defined`"
 },
 {
  "s": "s6",
  "t": "CSS 파일 안의 배경 이미지 경로는 index.html 기준이다 — CSS 파일 기준이므로 `../images/…`"
 },
 {
  "s": "s6",
  "t": "CSS 에서 0 이 아닌 값도 px 을 생략할 수 있다 — 단위 생략은 0 만 가능"
 },
 {
  "s": "s6",
  "t": "용량을 줄이려고 비번호 폴더를 zip 으로 압축해 제출한다 — 압축 제출은 실격"
 },
 {
  "s": "s6",
  "t": "psd 원본도 함께 제출하면 가점이다 — 웹 미사용 파일은 제출 금지, 10MB 초과 시 실격"
 },
 {
  "s": "s6",
  "t": "캔버스 크기(Canvas Size)로 로고를 200×40 으로 축소한다 — 캔버스 크기는 영역만 자르며, 축소는 이미지 크기(리샘플링)"
 },
 {
  "s": "s6",
  "t": "로고는 투명 배경이 필요해도 JPG 로 저장한다 — JPG 는 투명 불가, PNG(-24) 사용"
 },
 {
  "s": "s6",
  "t": "시간이 부족하면 슬라이드를 이미지 1장으로 두고 다른 기능을 완성한다 — 움직이지 않는 슬라이드는 실격, 슬라이드가 최우선"
 },
 {
  "s": "s6",
  "t": "CSS off 확인을 위해 지운 link 태그는 제출해도 상관없다 — 확인 후 반드시 복원(스타일 전체 소실)"
 },
 {
  "s": "s6",
  "t": "`a{outline:none}` 으로 포커스 테두리를 없애면 깔끔하다 — Tab 이동 위치가 안 보여 접근성 훼손"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "시험 개요·도구",
  "title": "실기 시험 개요와 시험장 도구",
  "ref": "Q-net 2026 공개문제 게시글·출제기준(2025.1.1~2027.12.31)",
  "body": [
   {
    "h": "시험 기본 정보",
    "tb": {
     "head": [
      "항목",
      "내용",
      "비고"
     ],
     "rows": [
      [
       "실기 과목명",
       "웹디자인 실무",
       "출제기준"
      ],
      [
       "검정방법",
       "★작업형★",
       "코딩·이미지 제작 결과물 제출"
      ],
      [
       "시험시간",
       "★3시간★",
       "2025년 제1회부터 4h→3h (종목명 웹디자인기능사→웹디자인개발기능사)"
      ],
      [
       "제출 용량",
       "★10MB 이하★",
       "초과 = 작업범위 초과 실격"
      ],
      [
       "합격기준",
       "100점 만점 60점 이상",
       "[확인필요: Q-net 종목정보 원문]"
      ],
      [
       "배점표",
       "공식 비공개",
       "[확인필요] — 임의 배점 믿지 말 것"
      ],
      [
       "출제기준 적용기간",
       "2025.1.1 ~ 2027.12.31",
       "출제기준 문서"
      ]
     ]
    }
   },
   {
    "h": "시설목록 소프트웨어",
    "tb": {
     "head": [
      "SW",
      "규격",
      "구분"
     ],
     "rows": [
      [
       "Photoshop",
       "CS 이상",
       "필수 설치"
      ],
      [
       "Illustrator",
       "CS 이상",
       "필수 설치"
      ],
      [
       "Notepad++",
       "6.9 이상",
       "필수 설치"
      ],
      [
       "Visual Studio Code",
       "—",
       "필수 설치"
      ],
      [
       "Google Chrome",
       "81.0 이상",
       "필수 설치 · ★채점 기준 = 최신 Chrome★"
      ],
      [
       "EditPlus",
       "3.0 이상",
       "★선택★ 설치"
      ],
      [
       "Dreamweaver",
       "—",
       "★사용 불가★"
      ]
     ]
    }
   },
   {
    "h": "시험장 환경 — 인터넷 차단이 모든 것을 결정",
    "li": [
     "★인터넷 차단★ → jQuery CDN 링크, 웹폰트 CDN, 온라인 W3C Validator 모두 사용 불가.",
     "공개문제: HTML 유효성검사 서비스는 시험 시 ★제공하지 않는다★ → 문법을 손으로 지켜야 한다.",
     "jQuery는 ★제공된 오픈소스 파일★을 로컬로 연결(허용). 제공 파일명·버전은 [확인필요].",
     "정품 SW만 사용. 시설목록 외 정품 SW(폰트 제외)는 ★감독 입회 하★ 설치.",
     "지참 = 수험표·신분증·필기도구. ★개인 USB·키보드·마우스·이어폰·참고자료 반입 불가★."
    ]
   },
   {
    "h": "실기 출제기준 주요항목 6",
    "li": [
     "① 프로토타입 기초데이터 수집 및 스케치 ② 프로토타입 제작 및 사용성 테스트",
     "③ 디자인구성요소설계 ④ 디자인구성요소제작",
     "⑤ ★구현★ (콘텐츠·기능 요소·개발 요소 구현) ⑥ ★구현 응용★",
     "실제 과제는 ⑤·⑥ 구현 비중이 체감상 가장 크다 — 항목별 비중 수치는 [확인필요]."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "제공파일·제출",
  "title": "제공 파일 구조와 제출 폴더 규칙",
  "ref": "2026 공개문제 '제출방법'·'수험자 유의사항'(재서술)",
  "body": [
   {
    "h": "수험자 제공 파일(폴더별)",
    "tb": {
     "head": [
      "폴더",
      "내용"
     ],
     "rows": [
      [
       "Header",
       "로고명 텍스트 ★또는★ 로고 이미지(과제별)"
      ],
      [
       "Slide",
       "★이미지 3개 + 텍스트 3개★"
      ],
      [
       "Contents",
       "공지사항 텍스트, 팝업 제목·내용(일부 이미지), 갤러리 이미지 3개, 배너·바로가기 파일"
      ],
      [
       "Footer",
       "Copyright · SNS · 하단메뉴 · 패밀리사이트 텍스트"
      ],
      [
       "(공통)",
       "jQuery 오픈소스 파일 — 파일명·버전 [확인필요]"
      ]
     ]
    }
   },
   {
    "h": "제출 폴더 트리(표준형)",
    "li": [
     "바탕화면/",
     "└─ {비번호}/  ← ★폴더명 = 비번호★",
     "   ├─ index.html  ← ★반드시 최상위★",
     "   ├─ css/style.css",
     "   ├─ script/jquery-x.x.x.min.js , script/script.js",
     "   └─ images/  (logo, slide1~3, gallery …)"
    ]
   },
   {
    "h": "제출 규칙 핵심",
    "li": [
     "비번호 폴더 안에 images·script·css 등 ★분류 폴더 포함★, index.html은 최상위.",
     "index.html이 참조하는 ★모든 리소스 포함★ + ★채점위원 PC에서 정상 동작★ → ★상대경로★ 필수(C:\\… 절대경로 금지는 여기서 도출).",
     "전체 ★10MB 이하★. psd·ai 등 웹에서 쓰지 않는 원본 파일은 ★제출 금지★.",
     "★압축(zip) 제출 = 실격★. 비번호 폴더 저장 실패도 실격.",
     "참고자료의 오탈자는 ★수정해서★ 작업한다."
    ]
   },
   {
    "h": "경로 사고 방지",
    "li": [
     "파일명 대소문자까지 일치: Logo.PNG ≠ logo.png (채점 환경에서 깨질 수 있음).",
     "<link rel=\"stylesheet\" href=\"css/style.css\"> — 앞에 슬래시·드라이브 문자 없이.",
     "<script src=\"script/jquery-x.x.x.min.js\"><\/script> 를 script.js ★보다 먼저★ 연결."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "기술 준수사항",
  "title": "기술적 준수사항 10조(24과제 공통)",
  "ref": "2026 공개문제 '기술적 준수사항'(재서술)",
  "body": [
   {
    "h": "10개 조항 — 한 줄 요약",
    "tb": {
     "head": [
      "#",
      "조항",
      "판정 기준"
     ],
     "rows": [
      [
       "1",
       "HTML5 웹표준",
       "W3C HTML validator ★ERROR 0★"
      ],
      [
       "2",
       "CSS 별도 파일 링크",
       "CSS3 기준 W3C validator ★ERROR 0★"
      ],
      [
       "3",
       "JS 별도 파일 연결",
       "Chrome 개발자도구 ★Console ERROR 0★"
      ],
      [
       "4",
       "상호작용 요소 임시링크",
       "로고·메뉴·버튼·바로가기에 ★href=\"#\"★ + ★Tab 이동·선택★"
      ],
      [
       "5",
       "해상도 일관성",
       "다양한 해상도에서 레이아웃 유지"
      ],
      [
       "6",
       "레이아웃 table 금지",
       "전체 레이아웃은 ★CSS★로"
      ],
      [
       "7",
       "CSS off 세로 나열",
       "스타일 해제 시 콘텐츠가 ★논리 순서로 세로 나열★"
      ],
      [
       "8",
       "텍스트 위계",
       "타이틀/바디/메뉴의 글자체·굵기·색·크기 구분"
      ],
      [
       "9",
       "이미지 대체텍스트",
       "★모든 img에 alt★"
      ],
      [
       "10",
       "최신 Chrome 정상",
       "레이아웃·크기·위치 정상 표시"
      ]
     ]
    }
   },
   {
    "h": "공통 디자인 조건",
    "li": [
     "HTML·CSS 모두 ★charset utf-8★.",
     "배경색 ★#ffffff★, 기본 텍스트 ★#333333★ — 주조색·보조색은 수험자 자유.",
     "공지·배너·바로가기 등 콘텐츠는 ★HTML로 코딩★ — 포토샵으로 영역 통째 이미지 삽입 금지."
    ]
   },
   {
    "h": "자주 틀리는 해석",
    "li": [
     "'별도 파일' = style 속성·<style> 태그·<script> 인라인 코드 ★모두 위반 소지★.",
     "WARNING은 기준 밖, ★ERROR 0★이 기준.",
     "'Tab 이동' = a·button 같은 포커스 가능 요소 사용. div에 click만 걸면 Tab이 닿지 않는다.",
     "table 금지는 ★전체 레이아웃★ 대상 — 데이터 표 자체를 금지하는 문구는 아님."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "실격·감점",
  "title": "실격 6사유와 감점 포인트",
  "ref": "2026 공개문제 '수험자 유의사항'(재서술)",
  "body": [
   {
    "h": "공식 실격 6사유",
    "tb": {
     "head": [
      "#",
      "실격 사유",
      "메모"
     ],
     "rows": [
      [
       "1",
       "수험 도중 ★기권★",
       "—"
      ],
      [
       "2",
       "★작업범위 초과(10MB·3시간)★ 또는 요구사항과 ★현격히 다른★ 경우",
       "현격 여부 = 채점위원 판단"
      ],
      [
       "3",
       "Slide를 ★JS(jQuery 포함)·CSS 중 하나 이상★으로 제작하지 않음",
       "★정지 이미지 1장 배치도 실격★"
      ],
      [
       "4",
       "★비번호 폴더★에 저장하지 못함",
       "폴더명 오타·위치 오류 주의"
      ],
      [
       "5",
       "★압축 파일★로 제출",
       "zip·7z 등 모두"
      ],
      [
       "6",
       "과제 기준 ★20% 이상 미완성★",
       "채점위원 판단"
      ]
     ]
    }
   },
   {
    "h": "기타 실격·부정행위",
    "li": [
     "컴퓨터 활용 미숙으로 진행이 어려우면 감독위원이 실격 처리 가능.",
     "복사된 동일 작품 → 관련 수험자 ★전원 부정행위★.",
     "반입 금지물: 지참 시 실격, ★활용 시 부정행위★.",
     "인적사항은 ★검은색 필기구★ — 그 외 필기구는 0점."
    ]
   },
   {
    "h": "감점 추정 포인트(배점·감점 폭은 비공개 [확인필요])",
    "li": [
     "W3C·Console ERROR, CSS/JS 인라인 작성.",
     "와이어프레임 치수·배치 불일치(px, 100% 영역, 정렬 방향).",
     "슬라이드 방향 오답(가로 과제에 fade), 3초 초과, 자동시작·반복 누락.",
     "메뉴 '부드럽게' 미구현(show/hide 즉시), 서브 하이라이트 누락.",
     "팝업이 첫 번째 글이 아님·닫기 없음·모달 과제인데 배경 덮개 없음.",
     "alt 누락, # 링크 없음, 로고 종횡비 왜곡·푸터 grayscale 누락, 컬러가이드(#fff/#333) 위반."
    ]
   },
   {
    "h": "실격 vs 감점 구분법",
    "li": [
     "★제출 형식·저장·용량·시간·슬라이드 미동작·20% 미완성★ = 실격.",
     "★품질 문제★(W3C 오류, 치수, 효과 방식, 위계) = 감점.",
     "→ 시간 우선순위: ★실격 방지(슬라이드 동작·저장·용량) > 레이아웃 > 기능 > 디자인★."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-1",
  "t": "공통 뼈대(영역 A~D)",
  "title": "공개문제 공통 뼈대 — 영역 Ⓐ~Ⓓ",
  "ref": "2026 공개문제 24과제 공통 구조(재서술)",
  "body": [
   {
    "h": "문제지 7쪽 구성(모든 과제 동일)",
    "li": [
     "① 요구사항(주제·개요·컬러가이드) → ② 사이트맵 + 와이어프레임 → ③~④ 영역별 세부 지시",
     "⑤ 기술 준수사항·제출방법 → ⑥ 수험자 유의사항 → ⑦ 지급재료",
     "사이트맵: 메인메뉴 ★4~5개★ × 서브메뉴 ★2~4개★.",
     "실제 출제는 공개문제와 ★일부 변경 또는 다를 수 있음★."
    ]
   },
   {
    "h": "영역별 공통 요구",
    "tb": {
     "head": [
      "영역",
      "구성",
      "공통 요구"
     ],
     "rows": [
      [
       "Ⓐ Header",
       "로고 + 메뉴",
       "메뉴 hover 하이라이트·out 해제, 서브 ★부드럽게★ 표시/숨김, 서브 배경색·서브 항목 하이라이트"
      ],
      [
       "Ⓑ Slide",
       "제공 이미지 3 + 텍스트 3",
       "★3초 이내★ 전환, ★자동 시작·무한 반복★(마지막→첫 번째)"
      ],
      [
       "Ⓒ Contents",
       "공지사항·갤러리·배너·바로가기 중 3~4개",
       "공지 ★첫 번째 글 → 레이어 팝업★(닫기 버튼), 갤러리 ★이미지 3개 가로★"
      ],
      [
       "Ⓓ Footer",
       "로고 + Copyright + {SNS/하단메뉴/패밀리사이트}",
       "로고 ★grayscale★(과제 대부분)"
      ]
     ]
    }
   },
   {
    "h": "로고 규격",
    "li": [
     "(a) ★직접 디자인★: 워드타입(심벌 없음) ★200×40px★, 또는 심벌+로고명 190×45(44)px.",
     "(b) ★제공 로고 삽입★: ★종횡비 유지★, 일부 과제는 주제 색상에 맞게 색 변경 필수.",
     "푸터 로고 무채색: CSS filter:grayscale(100%) 또는 포토샵 흑백 이미지."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-2",
  "t": "레이아웃 계열",
  "title": "레이아웃 계열 L1~L6",
  "ref": "2026 공개문제 와이어프레임 판독(재서술) — [확인필요: 이미지 판독, 원본 대조]",
  "body": [
   {
    "h": "6계열 한눈에(과제 4개씩)",
    "tb": {
     "head": [
      "계열",
      "과제",
      "폭·정렬",
      "헤더 위치",
      "영역 높이 등"
     ],
     "rows": [
      [
       "L1",
       "1~4",
       "★1200px 가운데★",
       "상단",
       "A100 / B300 / C200 / D100"
      ],
      [
       "L2",
       "5~8",
       "L1 + ★Ⓐ·Ⓓ 폭 100%★(내부 1200 가운데)",
       "상단",
       "L1과 유사"
      ],
      [
       "L3",
       "9~12",
       "★1000px 왼쪽정렬★",
       "★좌측 세로★(로고+세로메뉴)",
       "B350 / C200 / D100"
      ],
      [
       "L4",
       "13~16",
       "★100%★",
       "좌측 200px",
       "우측(100%−200px)에 B400·콘텐츠, 바로가기 아이콘열"
      ],
      [
       "L5",
       "17~20",
       "Ⓐ·Ⓓ 100%",
       "좌측 200px",
       "C 400px 세로 열 + B(100%−600px) 풀높이, 높이 100%−120px 또는 임의"
      ],
      [
       "L6",
       "21~24",
       "★1340px 가운데★",
       "상단(100)",
       "B350 / C 임의 / D120, 바로가기 5링크 행"
      ]
     ]
    }
   },
   {
    "h": "계열별 핵심 CSS",
    "li": [
     "가운데 고정폭: width:1200px; margin:0 auto;",
     "100% 띠 + 내부 컨테이너: 바깥 div width:100% / 안쪽 div width:1200px; margin:0 auto;",
     "좌측 사이드 + 우측: float:left 또는 display:flex, 우측 width:calc(100% - 200px);",
     "100%−120px 높이: height:calc(100vh - 120px); (calc 연산자 ★양옆 공백 필수★)",
     "C영역 내부 세부 폭은 과제에서 '수험자 판단'으로 두는 경우가 많다."
    ]
   },
   {
    "h": "판독 요령",
    "li": [
     "상단 헤더(L1·L2·L6) vs ★좌측 세로 헤더(L3·L4·L5)★ 부터 가른다 → 메뉴 방식이 따라 정해진다.",
     "'100%' 표기가 어느 영역에 붙었는지(Ⓐ·Ⓓ만? 전체?) 확인 — L1·L2 구분의 유일한 차이.",
     "와이어프레임 px 수치는 과제마다 다를 수 있으니 ★시험지 수치 우선★."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-3",
  "t": "메뉴·슬라이드 유형",
  "title": "메뉴 방식 M1~M6와 슬라이드 3종",
  "ref": "2026 공개문제 와이어프레임 판독(재서술) — 메뉴 방식 [확인필요: 이미지 판독]",
  "body": [
   {
    "h": "메뉴 방식 6종",
    "tb": {
     "head": [
      "방식",
      "모양",
      "과제",
      "구현 핵심"
     ],
     "rows": [
      [
       "M1",
       "개별 드롭다운(해당 메뉴 아래 서브만)",
       "3·7·21·22",
       "$(this).children('.sub').stop().slideDown()"
      ],
      [
       "M2",
       "전체 서브메뉴 박스(메뉴 폭 안 4열 동시)",
       "1·5",
       "$('.menu') 진입 시 .sub 전부 slideDown"
      ],
      [
       "M3",
       "전체폭 서브 띠(슬라이드 위 가로 밴드, 메가형)",
       "2·4·6·8·23·24",
       "배경 띠(.subbg) + .sub 함께 slideDown, z-index"
      ],
      [
       "M4",
       "세로메뉴 제자리 펼침(아코디언)",
       "9·10·13·14·17·18",
       "아래로 slideDown(밀어내기)"
      ],
      [
       "M5",
       "세로메뉴 우측 플라이아웃",
       "11·12·19·20",
       "서브 position:absolute; left:100%"
      ],
      [
       "M6",
       "세로메뉴 + 우측 넓은 전체 서브 패널",
       "15·16",
       "패널 1개를 fadeIn/slideDown"
      ]
     ]
    }
   },
   {
    "h": "슬라이드 3종",
    "tb": {
     "head": [
      "방향",
      "과제",
      "구현"
     ],
     "rows": [
      [
       "세로(위↔아래)",
       "1·6·7·13·18·19·24 (7개)",
       "ul marginTop:-i×높이 animate + overflow:hidden"
      ],
      [
       "가로(좌↔우)",
       "2·5·8·11·12·14·17·20·23 (★9개, 최다★)",
       "ul marginLeft:-i×폭 animate + overflow:hidden"
      ],
      [
       "Fade-in/out",
       "3·4·9·10·15·16·21·22 (8개)",
       "li 전부 position:absolute 겹침 → fadeOut/fadeIn"
      ]
     ]
    }
   },
   {
    "h": "공통 코드 원칙",
    "li": [
     "let i=0; setInterval(function(){ i=(i+1)%3; … }, 3000); → ★자동 시작 + 무한 반복★.",
     "★.stop()★ 누락 → 애니메이션 큐 누적(메뉴가 계속 오르내림).",
     "CSS만으로도 가능: @keyframes + animation: … infinite (JS·CSS ★중 하나 이상★이면 됨).",
     "슬라이드 방향을 바꿔 구현하면(가로 과제에 fade) 요구사항 불일치 감점."
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "2-4",
  "t": "탭·팝업·과제 매트릭스",
  "title": "탭·팝업·푸터 조합과 24과제 매트릭스 읽기",
  "ref": "2026 공개문제 24과제(재서술)",
  "body": [
   {
    "h": "공지/갤러리 배치",
    "li": [
     "★탭 구성★(공지·갤러리를 탭 2개로): 1·3·5·9·13·15·21·23 → ★8과제★.",
     "★별도 구성★(나란히 배치): 나머지 ★16과제★.",
     "탭 코드: var n=$(this).index(); 탭에 on 클래스, $('.tab-cont > div').eq(n).show().siblings().hide();"
    ]
   },
   {
    "h": "팝업 2종",
    "tb": {
     "head": [
      "종류",
      "과제",
      "구현 핵심"
     ],
     "rows": [
      [
       "레이어 팝업",
       "1·3·4·5·7·9·11·13·15·16·19·21·23 (★13개★)",
       "팝업 박스만 show/hide"
      ],
      [
       "★모달★ 레이어 팝업",
       "2·6·8·10·12·14·17·18·20·22·24 (★11개★)",
       "position:fixed; inset:0; 반투명 배경 덮개 + 가운데 박스"
      ]
     ]
    }
   },
   {
    "h": "팝업 공통 규칙",
    "li": [
     "트리거 = 공지사항 ★첫 번째 글★ 클릭.",
     "팝업 안 ★닫기 버튼★ 필수 — <button type=\"button\" class=\"close\">닫기<\/button>.",
     "a 클릭에 ★return false / e.preventDefault()★ — 없으면 # 로 화면이 맨 위로 튄다.",
     "팝업·서브메뉴 z-index가 슬라이드보다 커야 가려지지 않는다."
    ]
   },
   {
    "h": "과제 분석 5축 체크(시작 10분)",
    "li": [
     "① 레이아웃 계열(L1~L6) ② 메뉴 방식(M1~M6) ③ 슬라이드 방향(세로·가로·Fade)",
     "④ 공지/갤러리 탭 여부 ⑤ 팝업 레이어/모달 — 5축이 정해지면 코드 템플릿이 정해진다.",
     "상단 헤더 과제(1~8·21~24) = M1·M2·M3 / 좌측 세로 헤더 과제(9~20) = M4·M5·M6.",
     "푸터 조합: 로고(grayscale) + Copyright + {SNS 3개 / 하단메뉴 / 패밀리사이트} 중 과제별 조합."
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "문서 골격·head",
  "title": "HTML5 문서의 뼈대 — DOCTYPE·lang·charset·title",
  "ref": "공개문제 기술 준수사항(HTML5 웹표준·charset utf-8) / 출제기준 5. 구현",
  "body": [
   {
    "h": "index.html 골격 — 한 줄씩 외운다",
    "li": [
     "`<!DOCTYPE html>` — ★문서 맨 첫 줄★, html 태그보다 앞. HTML5 표준 모드 선언(대소문자 무관)",
     "`<html lang=\"ko\">` — 문서 언어 = 한국어. ★ko★(언어 코드)이지 kr(국가 코드)이 아니다",
     "`<head>`",
     "`<meta charset=\"utf-8\">` — ★head 첫 자식★으로, 문서 앞 1024바이트 이내",
     "`<title>과제명<\/title>` — 브라우저 탭 제목. ★없거나 비어 있으면 W3C ERROR★",
     "`<\/head>` → `<body> … <\/body>` → `<\/html>`"
    ]
   },
   {
    "h": "누락했을 때 무엇이 일어나나",
    "tb": {
     "head": [
      "요소",
      "역할",
      "누락·오류 시"
     ],
     "rows": [
      [
       "<!DOCTYPE html>",
       "표준 모드 렌더링",
       "쿼크 모드 렌더(박스 크기 어긋남) + ★ERROR★"
      ],
      [
       "lang=\"ko\"",
       "문서 언어 명시(스크린리더·번역)",
       "검사기 ★경고★(ERROR 아님)"
      ],
      [
       "<meta charset=\"utf-8\">",
       "문자 인코딩 선언",
       "한글 깨짐 위험 + 검사기 지적"
      ],
      [
       "<title>",
       "탭·즐겨찾기 제목",
       "★ERROR★(head 필수 자식, 빈 값도 ERROR)"
      ]
     ]
    }
   },
   {
    "h": "선언과 실제 저장 인코딩을 일치시킨다",
    "li": [
     "공통 요구: HTML·CSS 모두 ★charset utf-8★",
     "선언은 utf-8인데 파일을 EUC-KR(ANSI)로 저장하면 한글이 깨진다 → 에디터 하단 인코딩이 UTF-8인지 확인",
     "CSS 파일 첫 줄: `@charset \"utf-8\";`",
     "값 오타(`uft-8`)도 선언 실패와 같다"
    ]
   },
   {
    "h": "head 안에 들어가지 않는 것",
    "li": [
     "화면에 보일 콘텐츠(h1·img·ul 등)는 전부 ★body★ 안",
     "`<style>` 블록·`style=\"\"` 속성으로 CSS를 직접 쓰면 ★'CSS 별도 파일' 조건★에 어긋난다",
     "viewport meta는 선택 사항(시험 요구 아님)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "외부 CSS·JS 연결",
  "title": "외부 CSS·JS 연결과 로드 순서",
  "ref": "공개문제 기술 준수사항(CSS·JS 별도 파일, Console ERROR 0) / 제공 jQuery 로컬 사용",
  "body": [
   {
    "h": "연결 코드 3줄",
    "li": [
     "`<link rel=\"stylesheet\" href=\"css/style.css\">` — ★rel=\"stylesheet\"★ 없으면 적용 안 됨",
     "`<script src=\"script/jquery-3.x.x.min.js\"><\/script>` — 제공된 jQuery 파일(파일명·버전은 지급본 그대로) [확인필요: 제공 버전]",
     "`<script src=\"script/script.js\"><\/script>` — 내가 작성한 JS",
     "script는 ★반드시 `<\/script>` 닫는 태그★ — `<script src=\"a.js\" />` 는 닫힌 것으로 처리되지 않는다"
    ]
   },
   {
    "h": "로드 순서가 결과를 바꾼다",
    "tb": {
     "head": [
      "순서",
      "결과"
     ],
     "rows": [
      [
       "jQuery → script.js",
       "정상 — script.js 실행 시점에 `$` 존재"
      ],
      [
       "script.js → jQuery",
       "Console ★`$ is not defined`★ ERROR"
      ],
      [
       "CDN 주소(https://…)로 jQuery 연결",
       "시험장 인터넷 차단 → 로드 실패, 채점 PC 동작 보장 불가"
      ],
      [
       "script.js를 head에 두고 ready 없음",
       "요소가 아직 없어 선택 결과 0개 → 기능 미동작"
      ]
     ]
    }
   },
   {
    "h": "script 위치 선택지",
    "li": [
     "head에 둘 때: script.js 코드를 ★`$(function(){ … });`★(document ready) 안에 작성",
     "또는 두 script에 `defer` — 외부 스크립트 전용, ★문서 순서대로★ HTML 파싱 후 실행",
     "`async`는 다운로드 끝나는 순서대로 실행 → jQuery 순서 보장 안 됨(시험에 부적합)",
     "`<\/body>` 직전에 두면 DOM 생성 뒤 실행 → ready 없이도 동작(ready를 써도 무방)"
    ]
   },
   {
    "h": "'별도 파일' 조건 위반 사례",
    "li": [
     "`<style>` 블록, `style=\"color:red\"` 속성",
     "`onclick=\"…\"`, `onmouseover=\"…\"` 이벤트 속성 → 이벤트는 script.js에서 연결",
     "`type=\"text/javascript\"` 는 적어도 되지만 불필요(검사기 경고 수준)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "시맨틱 영역 마크업",
  "title": "A~D 영역을 시맨틱 태그로 나누기",
  "ref": "공개문제 공통 뼈대(Ⓐ Header·Ⓑ Slide·Ⓒ Contents·Ⓓ Footer) / CSS off 세로 나열",
  "body": [
   {
    "h": "영역 ↔ 태그 대응",
    "tb": {
     "head": [
      "영역",
      "권장 마크업",
      "안에 들어가는 것"
     ],
     "rows": [
      [
       "Ⓐ Header",
       "<header>",
       "<h1> 로고 + <nav> 메뉴"
      ],
      [
       "Ⓑ Slide",
       "<section class=\"slide\">",
       "ul>li>img(3장) + 문구"
      ],
      [
       "Ⓒ Contents",
       "<section class=\"contents\">",
       "공지·갤러리·배너·바로가기(각각 div/article)"
      ],
      [
       "Ⓓ Footer",
       "<footer>",
       "회색 로고·하단메뉴·copyright·SNS/패밀리사이트"
      ],
      [
       "팝업",
       "<div class=\"popup\"> (body 끝)",
       "제목·내용·닫기 버튼"
      ]
     ]
    }
   },
   {
    "h": "시맨틱 태그의 뜻",
    "li": [
     "★header★ 머리말(로고·메뉴) / ★nav★ 주요 내비게이션 / ★footer★ 꼬리말",
     "★section★ 주제별 묶음 — 제목(h2~h6) 권장, 없으면 검사기 ★경고★(ERROR 아님)",
     "★article★ 독립적으로 떼어 써도 의미가 있는 콘텐츠 / ★aside★ 본문과 간접 관련된 보조",
     "★main★ 문서의 주 콘텐츠 — 보이는 main은 ★1개★만",
     "★div★ 의미 없는 묶음 — 레이아웃 래퍼(#wrap, .inner)로 계속 쓴다. 금지 태그 아님"
    ]
   },
   {
    "h": "레이아웃 계열별 래퍼",
    "li": [
     "L1(1200px 가운데): `<div id=\"wrap\">` 하나에 header·slide·contents·footer",
     "L2(Ⓐ·Ⓓ 100% 띠): `<header><div class=\"inner\">…<\/div><\/header>` — header=100% 배경, inner=1200px",
     "L3~L5(좌측 헤더): `<header>` + 오른쪽 묶음 `<div class=\"right\">`(slide·contents) → CSS float/flex로 좌우 배치",
     "레이아웃에 ★table 금지★ — div·시맨틱 태그 + CSS"
    ]
   },
   {
    "h": "제목 위계와 소스 순서",
    "li": [
     "로고 = `<h1><a href=\"#\"><img … alt=\"로고명\"><\/a><\/h1>` — h1은 로고에 1번",
     "공지사항·갤러리 등 영역 제목 = ★h2★ (h1 → h3 건너뛰기 지양)",
     "CSS off 시 세로 나열 순서 = ★HTML 소스 순서★ → Ⓐ→Ⓑ→Ⓒ→Ⓓ 순으로 작성, 팝업은 맨 끝",
     "header 안에 header·footer를 넣으면 ★ERROR★"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "메뉴·목록 마크업",
  "title": "메뉴는 ul>li>a, 서브는 li 안에",
  "ref": "공개문제 사이트맵(메인 4~5 × 서브 2~4) / 메뉴 방식 M1~M6",
  "body": [
   {
    "h": "메뉴 마크업 한 줄씩",
    "li": [
     "`<nav>`",
     "`<ul class=\"menu\">`",
     "`<li><a href=\"#\">메인1<\/a>`",
     "`<ul class=\"sub\">`",
     "`<li><a href=\"#\">서브1-1<\/a><\/li>`",
     "`<\/ul>`",
     "`<\/li>`  ← ★서브 ul은 메인 a 다음, 부모 li가 닫히기 전★",
     "`<\/ul>` `<\/nav>`"
    ]
   },
   {
    "h": "지켜야 할 규칙",
    "li": [
     "ul·ol의 ★직계 자식은 li만★ — ul 바로 아래 a·div·텍스트는 ERROR",
     "모든 메뉴 텍스트는 `<a href=\"#\">` — href가 없으면 Tab 포커스가 안 간다",
     "a 안에 ul/li를 넣지 않는다(`<a><li>` 구조는 ERROR)",
     "메뉴를 이미지 한 장으로 만들지 않는다 — 텍스트 HTML 코딩"
    ]
   },
   {
    "h": "메뉴 방식별 HTML 차이",
    "tb": {
     "head": [
      "방식",
      "HTML",
      "차이를 만드는 곳"
     ],
     "rows": [
      [
       "M1 개별 드롭다운",
       "ul.menu>li>(a + ul.sub)",
       "JS: 해당 li의 sub만"
      ],
      [
       "M2 전체 서브 박스",
       "같음",
       "JS: 모든 sub 동시, CSS 박스 높이 통일"
      ],
      [
       "M3 전체폭 서브 띠",
       "같음 + 배경 띠용 빈 div(.subbg)",
       "CSS: 100% 폭 absolute 띠"
      ],
      [
       "M4·M5·M6 세로 메뉴",
       "같음",
       "CSS 세로 배치 + JS 펼침/옆 플라이아웃"
      ]
     ]
    }
   },
   {
    "h": "목록 태그 고르기",
    "li": [
     "순서 없는 나열(메뉴·공지·갤러리·SNS) → ★ul★",
     "순서가 의미를 가짐(절차·순위) → ★ol★",
     "용어-설명 쌍 → ★dl > dt + dd★"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "콘텐츠·팝업·푸터 마크업",
  "title": "슬라이드·공지·탭·팝업·푸터 마크업",
  "ref": "공개문제 Ⓑ·Ⓒ·Ⓓ 세부 지시(재서술) / 실격: 슬라이드 미제작",
  "body": [
   {
    "h": "슬라이드 — 3장 모두 HTML에",
    "li": [
     "`<section class=\"slide\"><ul>`",
     "`<li><img src=\"images/slide1.jpg\" alt=\"슬라이드1 문구\"><span>문구<\/span><\/li>` × 3",
     "`<\/ul><\/section>`",
     "제공 텍스트는 이미지에 합성하거나 HTML 텍스트로 올린다",
     "★움직이지 않는 이미지 1장 배치 = 실격 사유★ → 3장 마크업 + JS/CSS 동작"
    ]
   },
   {
    "h": "공지·탭·갤러리",
    "li": [
     "공지: `<ul class=\"notice\"><li><a href=\"#\">제목<\/a><span>2026.01.05<\/span><\/li> …<\/ul>`",
     "★첫 번째 글의 a★가 팝업을 여는 트리거 → 식별용 class 부여 권장",
     "탭 버튼: `<ul class=\"tab-btn\"><li class=\"on\"><a href=\"#\">공지사항<\/a><\/li><li><a href=\"#\">갤러리<\/a><\/li><\/ul>`",
     "탭 내용: `<div class=\"tab-cont\"><div>공지<\/div><div>갤러리<\/div><\/div>` — ★버튼 순서 = 내용 순서★(index 대응)",
     "갤러리: `<ul class=\"gallery\"><li><a href=\"#\"><img … alt=\"…\"><\/a><\/li>` × 3 — 3장을 한 장으로 합치지 않는다",
     "배너·바로가기·공지도 ★이미지 통째 삽입 금지★ — HTML 텍스트로"
    ]
   },
   {
    "h": "팝업(레이어 / 모달)",
    "li": [
     "레이어: `<div class=\"popup\"><h2>제목<\/h2><p>내용<\/p><button type=\"button\" class=\"close\">닫기<\/button><\/div>`",
     "모달: `<div class=\"modal\">` (배경 덮개) 안에 `<div class=\"popup\">…<\/div>`",
     "위치: ★body 끝(footer 뒤)★ — CSS off 세로 나열에서도 본문 흐름을 끊지 않음",
     "button의 type 기본값은 ★submit★ → `type=\"button\"` 명시 습관"
    ]
   },
   {
    "h": "푸터 구성 요소",
    "tb": {
     "head": [
      "요소",
      "마크업"
     ],
     "rows": [
      [
       "회색 로고",
       "<img src=\"images/logo_gray.png\" alt=\"로고명\"> (또는 CSS grayscale)"
      ],
      [
       "하단메뉴",
       "<ul><li><a href=\"#\">개인정보처리방침<\/a><\/li>…<\/ul>"
      ],
      [
       "Copyright",
       "<p>COPYRIGHT &copy; … ALL RIGHTS RESERVED.<\/p> — &copy; 는 세미콜론까지"
      ],
      [
       "SNS 3개",
       "<ul><li><a href=\"#\"><img src=\"images/sns1.png\" alt=\"SNS명\"><\/a><\/li>…<\/ul>"
      ],
      [
       "패밀리사이트",
       "<select title=\"패밀리사이트\"><option>패밀리사이트<\/option><option>…<\/option><\/select>"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-6",
  "t": "이미지·링크·상대경로",
  "title": "alt·임시링크·상대경로 — 채점 PC에서 깨지지 않게",
  "ref": "공개문제 기술 준수사항(모든 이미지 alt, 임시링크 #, Tab 이동) / 제출방법(리소스 포함·채점 PC 동작)",
  "body": [
   {
    "h": "img와 alt",
    "li": [
     "`<img src=\"images/logo.png\" alt=\"로고명\">` — ★모든 img에 alt★(누락 = ERROR)",
     "정보를 담은 이미지 → 그 정보(로고명, 슬라이드 문구, 배너 내용)",
     "순수 장식 이미지 → ★alt=\"\"★ 빈 값(속성 자체는 유지)",
     "파일명(`logo.png`)·'이미지'·'사진' 같은 alt는 정보 없음",
     "`width=\"200\" height=\"40\"` 은 ★숫자만★ — `200px` 는 ERROR, `border` 속성은 폐지"
    ]
   },
   {
    "h": "임시 링크와 Tab 이동",
    "li": [
     "로고·메뉴·버튼·바로가기 등 상호작용 요소 = ★`<a href=\"#\">`★",
     "href 없는 `<a>`, 클릭 이벤트만 붙인 `<li>`·`<div>` → ★Tab 포커스가 가지 않는다★",
     "`#` 클릭 시 맨 위로 튀는 것은 JS에서 `return false` / `e.preventDefault()`로 막는다",
     "`target=\"_blank\"` 불필요"
    ]
   },
   {
    "h": "상대경로 계산표",
    "tb": {
     "head": [
      "기준 파일",
      "대상",
      "올바른 경로"
     ],
     "rows": [
      [
       "index.html",
       "images/logo.png",
       "images/logo.png (= ./images/logo.png)"
      ],
      [
       "index.html",
       "css/style.css",
       "css/style.css"
      ],
      [
       "css/style.css",
       "images/bg.jpg",
       "★../images/bg.jpg★ (CSS 파일 위치 기준)"
      ],
      [
       "script/script.js 안의 이미지 경로",
       "images/a.jpg",
       "images/a.jpg (JS는 ★HTML 문서★ 기준)"
      ]
     ]
    }
   },
   {
    "h": "깨지는 경로 유형",
    "li": [
     "`C:\\Users\\…\\logo.png` 절대경로 → 채점 PC에 그 폴더가 없다",
     "`/images/logo.png`(슬래시 시작) → 로컬 파일로 열면 ★드라이브 루트 기준★이 되어 깨짐",
     "역슬래시 `\\` 대신 ★슬래시 `/`★",
     "파일명: 영문 소문자·숫자·`-`·`_`, 공백·한글 회피, ★대소문자·확장자(jpg/png)까지 일치★"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-7",
  "t": "유효성 규칙·W3C 오류",
  "title": "W3C ERROR 0 만들기 — 중첩·속성 규칙",
  "ref": "공개문제 기술 준수사항(W3C HTML validator ERROR 0, 시험 중 검사 서비스 미제공)",
  "body": [
   {
    "h": "자주 나는 ERROR와 수정",
    "tb": {
     "head": [
      "잘못된 코드",
      "원인",
      "수정"
     ],
     "rows": [
      [
       "<ul><div>…<\/div><\/ul>",
       "ul 직계 자식은 li만",
       "<ul><li>…<\/li><\/ul>"
      ],
      [
       "id=\"on\" 두 번",
       "id 중복",
       "class=\"on\" 으로"
      ],
      [
       "<img src=\"a.jpg\">",
       "alt 누락",
       "alt 추가"
      ],
      [
       "<b><i>글<\/b><\/i>",
       "교차 중첩",
       "<b><i>글<\/i><\/b>"
      ],
      [
       "<p><div>…<\/div><\/p>",
       "p는 블록을 못 품어 자동 닫힘 → 짝 없는 <\/p>",
       "p를 div로"
      ],
      [
       "<a href=\"#\"><button>…<\/button><\/a>",
       "대화형 요소 안 대화형 요소",
       "둘 중 하나만"
      ],
      [
       "<center>, <font>, align=, border=",
       "HTML5 폐지 요소·속성",
       "CSS로"
      ],
      [
       "<div class=\"bg\" />",
       "빈 요소가 아닌 태그의 self-closing",
       "<div class=\"bg\"><\/div>"
      ]
     ]
    }
   },
   {
    "h": "ERROR와 경고를 구분한다",
    "li": [
     "기준은 ★ERROR 0★ — 경고(warning)·정보(info)는 ERROR가 아니다",
     "경고: section 제목 없음, lang 누락, script의 `type=\"text/javascript\"`",
     "정보: `<br />` 처럼 빈 요소 뒤 슬래시",
     "ERROR: title 누락·빈 title, alt 누락, id 중복, 중첩 위반, 폐지 요소, 잘못된 속성값"
    ]
   },
   {
    "h": "중첩 규칙의 핵심(HTML5)",
    "li": [
     "span·b·em 같은 ★구문(phrasing) 요소 안에 div 금지★",
     "a는 ★투명(transparent)★ 모델 — 부모가 허용하면 div·img를 품을 수 있지만 ★a·button·select 같은 대화형 요소는 금지★",
     "빈 요소(void): img·br·hr·meta·link·input — 닫는 태그 없음",
     "속성값은 따옴표로(공백 포함 값 `class=\"menu on\"`), 같은 속성 두 번 금지",
     "엔티티는 세미콜론까지: `&copy;` `&amp;` `&lt;`"
    ]
   },
   {
    "h": "시험장에서 자체 점검",
    "li": [
     "인터넷 차단 → ★온라인 Validator 사용 불가★(시험 시 미제공)",
     "여는 태그 작성 즉시 닫는 태그까지 쓰고 들여쓰기로 짝 확인",
     "Chrome 개발자도구 Elements 탭: 브라우저가 고쳐 넣은 구조(자동 닫힘)로 중첩 오류 발견",
     "레이아웃 table 금지(준수사항) — 표 데이터 외 용도로 쓰지 않는다"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "리셋·박스모델",
  "title": "리셋 CSS와 박스모델·box-sizing",
  "ref": "출제기준 5.구현 — 콘텐츠 구현하기 / 공개문제 기술 준수사항(레이아웃 치수 일치)",
  "body": [
   {
    "h": "시험장 표준 리셋 (style.css 맨 위)",
    "li": [
     "* { margin:0; padding:0; box-sizing:border-box; } — 브라우저 기본 여백 제거 + ★치수 계산을 border-box로 통일★",
     "ul, ol { list-style:none; } — 목록 점(●) 제거. ★ul의 padding-left는 list-style이 아니라 * 리셋이 없앤다★",
     "a { text-decoration:none; color:inherit; } — 링크 밑줄 제거, 부모 글자색 상속(#333 유지)",
     "img { vertical-align:top; } 또는 { display:block; } — 인라인 이미지 아래 ★기준선(baseline) 틈★ 제거",
     "body { background:#ffffff; color:#333333; } — 공통 컬러 규정(배경 흰색·기본 텍스트 #333)",
     "Chrome의 body 기본 margin은 8px — 리셋을 빠뜨리면 1200px 래퍼·100% 띠 둘레에 흰 틈이 생긴다."
    ]
   },
   {
    "h": "박스모델 — 안쪽에서 바깥쪽 순서",
    "li": [
     "★content → padding → border → margin★ (margin은 박스 바깥 여백, 배경색이 칠해지지 않음)",
     "padding·border 까지 배경(background)이 칠해지고, margin은 투명하다.",
     "padding·margin 을 %로 주면 ★상하좌우 모두 부모(포함 블록)의 '너비'★ 기준으로 계산된다."
    ]
   },
   {
    "h": "box-sizing 두 값 비교",
    "tb": {
     "head": [
      "구분",
      "content-box (기본값)",
      "border-box (리셋 권장)"
     ],
     "rows": [
      [
       "width 가 가리키는 것",
       "콘텐츠 영역만",
       "content + padding + border"
      ],
      [
       "width:200; padding:10; border:5",
       "실제 폭 ★230px★",
       "실제 폭 ★200px★ (콘텐츠 170)"
      ],
      [
       "margin 포함 여부",
       "미포함",
       "★미포함★(margin은 항상 바깥)"
      ],
      [
       "시험 영향",
       "padding 추가 시 박스가 넘쳐 float 줄바꿈",
       "와이어프레임 px 그대로 입력 가능"
      ]
     ]
    }
   },
   {
    "h": "마진 병합(margin collapse) — 레이아웃 틀어짐 1순위",
    "li": [
     "상하로 인접한 블록의 ★세로 margin은 큰 값 하나로 합쳐진다★ (30px + 20px → 30px). 가로 margin은 병합되지 않는다.",
     "부모에 border·padding이 없으면 ★첫 자식의 margin-top이 부모 밖으로 빠져★ 부모 전체가 내려간다.",
     "해결: 부모에 padding(또는 border) 부여, overflow:hidden, display:flow-root(새 BFC) — box-sizing 변경으로는 해결되지 않는다.",
     "flex 컨테이너 안의 아이템끼리는 margin 병합이 일어나지 않는다."
    ]
   },
   {
    "h": "인라인 vs 블록 — width가 먹지 않는 이유",
    "tb": {
     "head": [
      "display",
      "width·height",
      "줄바꿈",
      "대표 요소"
     ],
     "rows": [
      [
       "block",
       "적용",
       "앞뒤 줄바꿈, 부모 폭 채움",
       "div, header, ul, li, p"
      ],
      [
       "inline",
       "★무시★",
       "한 줄로 흐름",
       "a, span, img(대체요소라 크기는 적용)"
      ],
      [
       "inline-block",
       "적용",
       "한 줄로 흐름(태그 사이 공백 틈 발생)",
       "버튼형 링크"
      ],
      [
       "none",
       "—",
       "공간까지 제거",
       "초기 숨김 서브메뉴·팝업"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "선택자·우선순위",
  "title": "선택자와 명시도(우선순위)",
  "ref": "출제기준 5-2 기능 요소 구현하기 / 메뉴 하이라이트·탭 on 클래스 스타일",
  "body": [
   {
    "h": "시험에 쓰는 선택자 8종",
    "tb": {
     "head": [
      "선택자",
      "예",
      "선택 대상"
     ],
     "rows": [
      [
       "자손(공백)",
       ".menu li",
       ".menu 안 ★모든 깊이★의 li(서브메뉴 li 포함)"
      ],
      [
       "자식(>)",
       ".menu > li",
       ".menu의 ★직계 자식★ li만(메인메뉴만)"
      ],
      [
       "인접 형제(+)",
       "h2 + p",
       "h2 바로 다음 형제 p 하나"
      ],
      [
       "일반 형제(~)",
       "h2 ~ p",
       "h2 뒤의 모든 형제 p"
      ],
      [
       "다중 클래스",
       ".tab.on",
       "tab·on 두 클래스를 ★동시에★ 가진 요소"
      ],
      [
       "그룹(,)",
       "a:hover, a:focus",
       "각각 적용(쉼표를 빼면 자손 선택자가 됨)"
      ],
      [
       "구조 가상클래스",
       "li:first-child / li:nth-child(3)",
       "첫째 / 셋째 li (1부터 셈)"
      ],
      [
       "상태 가상클래스",
       ":hover / :focus / :active",
       "마우스 올림 / 키보드 포커스 / 누르는 중"
      ]
     ]
    }
   },
   {
    "h": "명시도 계산 (a, b, c)",
    "li": [
     "a = ★id★ 개수, b = ★class·속성·가상클래스★ 개수, c = ★요소·가상요소★ 개수. 전체 선택자 *, 결합자(> + ~ 공백)는 0.",
     "왼쪽 자리부터 비교 — ★id 1개는 class가 몇 개든 이긴다★ (1,0,0) > (0,10,0).",
     "style=\"\" 인라인 선언은 모든 선택자보다 우선, !important 는 그보다도 우선(시험 코드에서는 남용 금지).",
     "명시도가 같으면 ★나중에 선언된 규칙★이 이긴다(소스 순서). 명시도가 다르면 순서는 무관.",
     "예) #header .menu li a = (1,1,2) / .menu li a.on = (0,2,2) → 앞의 것이 이긴다."
    ]
   },
   {
    "h": "메뉴·탭 스타일 관용 코드",
    "li": [
     ".menu > li > a:hover, .menu > li > a:focus { background:#주조색; color:#fff; } — ★마우스·Tab 하이라이트 동시 지정★",
     ".sub a:hover { … } — 서브메뉴 항목도 하이라이트(공개문제 공통 요구)",
     ".tab-btn li.on a { … } — jQuery가 붙이는 on 클래스로 활성 탭 표시",
     ".gallery li:nth-child(3) { margin-right:0; } — 마지막 항목 여백 제거(:eq()는 jQuery 전용, CSS에서 무효)"
    ]
   },
   {
    "h": "명시도 충돌로 자주 망가지는 장면",
    "li": [
     "#header a { color:#333 } 를 먼저 써 두면 뒤에 쓴 .menu a.on { color:red } 가 적용되지 않는다 — (1,0,1) > (0,2,1).",
     "해결: 같은 강도의 선택자로 맞추거나(#header .menu a.on), id 사용을 줄이고 class 중심으로 작성."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "가운데 정렬·100% 띠",
  "title": "가운데 정렬·100% 띠·세로 가운데",
  "ref": "공개문제 레이아웃 계열(1200px·1340px 가운데정렬, Ⓐ·Ⓓ 폭 100%)",
  "body": [
   {
    "h": "대상별 가운데 정렬 방법",
    "tb": {
     "head": [
      "대상",
      "코드",
      "조건·주의"
     ],
     "rows": [
      [
       "고정폭 블록(래퍼)",
       "width:1200px; margin:0 auto;",
       "★width 지정 + block★ 필수, inline·float에는 무효"
      ],
      [
       "인라인 내용(텍스트·img·a)",
       "부모에 text-align:center;",
       "박스 자체는 이동하지 않음"
      ],
      [
       "한 줄 텍스트 세로",
       "height:40px; line-height:40px;",
       "두 줄 이상이면 깨짐"
      ],
      [
       "flex 자식 가로·세로",
       "display:flex; justify-content:center; align-items:center;",
       "부모(컨테이너)에 선언"
      ],
      [
       "크기 모르는 팝업",
       "position:fixed; left:50%; top:50%; transform:translate(-50%,-50%);",
       "모달·레이어 팝업 정중앙"
      ],
      [
       "크기 아는 absolute",
       "left:50%; margin-left:-(폭/2)px;",
       "구형 방식, 폭 바뀌면 재계산"
      ]
     ]
    }
   },
   {
    "h": "100% 띠 + 내부 1200px (Ⓐ·Ⓓ 폭 100% 계열)",
    "li": [
     "HTML: <header><div class=\"inner\">로고·메뉴<\/div><\/header>",
     "CSS: header { width:100%; background:#주조색; } — ★배경은 화면 끝까지★",
     "CSS: header .inner { width:1200px; margin:0 auto; } — ★내용은 가운데 1200px★",
     "header 에 width:1200px 을 주면 배경도 1200px에서 잘린다 → 100% 요구 위반."
    ]
   },
   {
    "h": "블록의 기본 폭 규칙",
    "li": [
     "width를 주지 않은 블록은 ★부모 콘텐츠 폭을 가득★ 채운다(width:auto). #wrap이 1200px이면 header·section도 1200px.",
     "그래서 L1 계열은 #wrap 한 곳에만 width·margin을 주면 내부 영역은 높이만 지정하면 된다.",
     "vertical-align:middle 은 인라인·테이블셀 전용 — 블록 안 텍스트 세로 정렬에는 효과 없음."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "float·flex 배치",
  "title": "float 배치와 해제(clearfix)",
  "ref": "공개문제 좌측 세로 헤더 계열·콘텐츠 영역 다단 배치",
  "body": [
   {
    "h": "float 동작",
    "li": [
     "float:left/right 요소는 ★일반 흐름에서 빠져★ 좌·우로 붙고, 뒤따르는 인라인 텍스트가 그 주위를 감싼다.",
     "float 된 요소는 display 가 block 으로 계산 → a·span 에도 width 적용 가능.",
     "float 요소에는 margin:0 auto 가운데 정렬이 통하지 않는다.",
     "형제 합산 폭(padding·border 포함)이 부모보다 1px이라도 크면 마지막 요소가 ★아래 줄로 떨어진다★ → box-sizing:border-box 확인."
    ]
   },
   {
    "h": "부모 높이 붕괴와 해제 방법",
    "tb": {
     "head": [
      "방법",
      "코드",
      "특징"
     ],
     "rows": [
      [
       "clearfix(권장)",
       ".clearfix::after { content:''; display:block; clear:both; }",
       "★content 누락 시 동작 안 함★"
      ],
      [
       "overflow",
       "부모 { overflow:hidden; }",
       "간단, 단 부모 밖으로 나가는 서브메뉴가 잘림"
      ],
      [
       "flow-root",
       "부모 { display:flow-root; }",
       "새 BFC 생성, 부작용 적음"
      ],
      [
       "clear 형제",
       "다음 형제 { clear:both; }",
       "뒤 요소만 내려감"
      ],
      [
       "부모 높이 지정",
       "부모 { height:200px; }",
       "와이어프레임 높이가 고정이면 사실상 해결"
      ]
     ]
    }
   },
   {
    "h": "좌측 200px 헤더 + 우측 나머지 (float 판)",
    "li": [
     "header { float:left; width:200px; height:100%; }",
     ".main { float:left; width:calc(100% - 200px); }",
     "★calc 의 + · - 양옆에는 공백 필수★ — calc(100%-200px) 은 무효 선언.",
     "header 가 position:fixed 인 설계라면 .main { margin-left:200px; } 로 자리를 비워 준다."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "float·flex 배치",
  "title": "flex 로 2~3단·세로 헤더 배치",
  "ref": "출제기준 5-3 개발 요소 구현하기 / 공개문제 L3~L5 좌측 헤더 계열",
  "body": [
   {
    "h": "flex 핵심 속성 (부모 = 컨테이너에 선언)",
    "tb": {
     "head": [
      "속성",
      "기본값",
      "시험 쓰임"
     ],
     "rows": [
      [
       "display:flex",
       "—",
       "자식들을 한 줄로 나란히"
      ],
      [
       "flex-direction",
       "★row★",
       "column → 세로 헤더의 로고·메뉴 위아래 쌓기"
      ],
      [
       "justify-content",
       "flex-start",
       "주축 정렬: center / space-between(양끝)"
      ],
      [
       "align-items",
       "stretch",
       "교차축 정렬: center(세로 가운데)"
      ],
      [
       "flex-wrap",
       "★nowrap★",
       "wrap 이면 넘칠 때 줄바꿈"
      ]
     ]
    }
   },
   {
    "h": "아이템 속성 (자식에 선언)",
    "li": [
     "flex: grow shrink basis — 예) flex:1 → 남은 공간 전부 차지, flex:0 0 200px → ★200px 고정(늘지도 줄지도 않음)★",
     "flex-shrink 기본값 1 → 형제 합이 부모보다 크면 ★자식이 줄어든다★ (좌측 200px 헤더가 180px로 찌그러지는 원인)",
     "flex 아이템에는 float 가 무시되고, 세로 margin 병합도 일어나지 않는다.",
     "order 로 화면 순서만 바꾸면 CSS 끔 상태(소스 순서)와 어긋난다 → 시험에서는 HTML 순서대로 배치."
    ]
   },
   {
    "h": "좌측 헤더 + 우측 콘텐츠 (flex 판)",
    "li": [
     "#wrap { display:flex; }",
     "header { flex:0 0 200px; }  — 또는 width:200px; flex-shrink:0;",
     ".main { flex:1; }  — calc 불필요, 남은 폭 자동",
     "헤더 내부: header { display:flex; flex-direction:column; } 로 로고 → 세로 메뉴 쌓기"
    ]
   },
   {
    "h": "float vs flex 선택 기준",
    "tb": {
     "head": [
      "기준",
      "float",
      "flex"
     ],
     "rows": [
      [
       "높이 붕괴",
       "있음(clearfix 필요)",
       "없음"
      ],
      [
       "남은 폭 채우기",
       "calc(100% - Npx)",
       "flex:1"
      ],
      [
       "세로 가운데",
       "line-height·position 편법",
       "align-items:center"
      ],
      [
       "갤러리 3개 가로",
       "float:left + 폭 계산",
       "display:flex + gap/justify-content"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "position·z-index·overflow",
  "title": "position·z-index·overflow — 겹침 요소 3종",
  "ref": "공개문제 서브메뉴·슬라이드 텍스트·레이어/모달 팝업",
  "body": [
   {
    "h": "position 4값(+sticky)",
    "tb": {
     "head": [
      "값",
      "기준",
      "원래 자리",
      "시험 쓰임"
     ],
     "rows": [
      [
       "static(기본)",
       "없음(top 등 무시)",
       "차지",
       "일반 흐름"
      ],
      [
       "relative",
       "★자기 원래 위치★",
       "★그대로 차지★",
       "absolute 자식의 기준점 만들기"
      ],
      [
       "absolute",
       "★가장 가까운 non-static 조상★(없으면 초기 포함 블록)",
       "비움",
       "서브메뉴·슬라이드 문구·fade li 겹침"
      ],
      [
       "fixed",
       "뷰포트(화면)",
       "비움",
       "모달 덮개, 고정 헤더"
      ],
      [
       "sticky",
       "스크롤 컨테이너",
       "차지",
       "임계점 도달 시 고정(시험 필수 아님)"
      ]
     ]
    }
   },
   {
    "h": "부모 relative → 자식 absolute 공식",
    "li": [
     ".menu > li { position:relative; }  — ★기준점★",
     ".menu .sub { position:absolute; top:100%; left:0; display:none; z-index:10; }  — li 바로 아래에 붙음",
     "부모 relative 누락 → 서브메뉴가 body(초기 포함 블록) 기준으로 화면 좌상단에 붙는다.",
     "전체폭 서브메뉴 띠(M3)는 header 에 relative, 띠에 absolute; left:0; width:100%."
    ]
   },
   {
    "h": "z-index 규칙",
    "li": [
     "★position 이 static 이 아닌 요소★(및 flex·grid 아이템)에만 적용 — static 블록에 z-index 는 무효.",
     "숫자가 클수록 위. 기본 auto, 음수 가능.",
     "부모가 z-index 를 가진 쌓임 맥락(stacking context)이면 자식 z-index 는 ★부모 층 안에서만★ 비교된다 → 서브메뉴가 슬라이드 아래 깔리면 header 자체의 z-index 를 올린다.",
     "opacity<1, transform 도 새 쌓임 맥락을 만든다."
    ]
   },
   {
    "h": "overflow 와 숨김 3종",
    "tb": {
     "head": [
      "선언",
      "공간",
      "용도"
     ],
     "rows": [
      [
       "overflow:hidden",
       "유지, 넘친 부분 잘림",
       "★이동형 슬라이드 영역 필수★"
      ],
      [
       "display:none",
       "★공간 제거★",
       "서브메뉴·팝업 초기 숨김(jQuery show/slideDown)"
      ],
      [
       "visibility:hidden",
       "공간 유지",
       "자리 유지 숨김"
      ],
      [
       "opacity:0",
       "공간 유지, 클릭 가능",
       "fade 전환 효과"
      ]
     ]
    }
   },
   {
    "h": "모달 레이어 팝업 CSS",
    "li": [
     ".modal { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:100; }",
     ".modal .box { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); background:#fff; }",
     "★덮개에 opacity:0.5 를 쓰면 안쪽 팝업 박스까지 반투명★ → 배경만 rgba 로 반투명 처리."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-7",
  "t": "레이아웃 계열 L1~L6",
  "title": "공개문제 레이아웃 6계열 CSS 구현",
  "ref": "wd 명세 2.2 변형 축 — 레이아웃 계열(와이어프레임 이미지 판독, [확인필요: 원본 대조])",
  "body": [
   {
    "h": "6계열 요약 (공개문제 구조 재서술)",
    "tb": {
     "head": [
      "계열",
      "구조",
      "핵심 CSS"
     ],
     "rows": [
      [
       "L1",
       "1200px 가운데, 상단 헤더, A100/B300/C200/D100",
       "#wrap{width:1200px;margin:0 auto}"
      ],
      [
       "L2",
       "L1 + Ⓐ·Ⓓ 폭 100%(내부 1200 가운데)",
       "header,footer{width:100%} .inner{width:1200px;margin:0 auto}"
      ],
      [
       "L3",
       "★1000px 왼쪽정렬★, 좌측 세로 헤더, B350/C200/D100",
       "#wrap{width:1000px} (margin auto ★없음★) + 헤더 float/flex"
      ],
      [
       "L4",
       "100% 폭, 좌측 200px 헤더 + 우측(100%−200px), B400",
       "header{width:200px} .main{width:calc(100% - 200px)}"
      ],
      [
       "L5",
       "Ⓐ·Ⓓ 100%, 좌 200 헤더 + C 400 열 + B(100%−600px), 높이 100%−120px 또는 임의",
       "slide{width:calc(100% - 600px); height:calc(100vh - 120px)}"
      ],
      [
       "L6",
       "1340px 가운데, 상단 헤더 100, B350, D120",
       "#wrap{width:1340px;margin:0 auto}"
      ]
     ]
    }
   },
   {
    "h": "높이 100% 계열 처리",
    "li": [
     "height:100% 는 ★부모 높이가 정해져 있어야★ 계산된다 → html, body { height:100%; } 부터 체인으로 지정.",
     "간단 대안: height:calc(100vh - 120px) — vh 는 뷰포트 높이 1%. 부모 체인 불필요.",
     "calc 연산자 양옆 공백 필수: calc(100vh - 120px) ○ / calc(100vh-120px) ×."
    ]
   },
   {
    "h": "치수 입력 원칙",
    "li": [
     "와이어프레임 px 를 그대로 height·width 에 입력 — border-box 리셋이 전제.",
     "C영역 내부 박스 폭은 문제에서 '수험자 판단'인 경우가 많다 → 합계가 부모 폭을 넘지 않게 calc·flex 로 분배.",
     "★실제 출제는 공개문제와 일부 달라질 수 있다★ — 받은 문제지 와이어프레임 치수가 최우선.",
     "다양한 해상도에서 일관된 레이아웃 요구 → 고정폭 계열은 래퍼 고정, 100% 계열은 %·calc·flex 사용."
    ]
   },
   {
    "h": "L4/L5 뼈대 코드",
    "li": [
     "#wrap { display:flex; }  header { flex:0 0 200px; }",
     "L4: .main { flex:1; }  .slide { height:400px; overflow:hidden; }",
     "L5: .contents { flex:0 0 400px; }  .slide { flex:1; height:calc(100vh - 120px); overflow:hidden; }",
     "Ⓓ 푸터를 100% 로 두려면 flex 행(#wrap) 밖에 footer 를 배치한다."
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-8",
  "t": "색상·텍스트·CSS 규정",
  "title": "색상 기본값·텍스트 위계·CSS 제출 규정",
  "ref": "공개문제 기술적 준수사항(별도 CSS 파일·CSS3 W3C ERROR 0·table 레이아웃 금지·CSS off 세로 나열·배경 #ffffff·텍스트 #333333)",
  "body": [
   {
    "h": "공통 규정 → CSS 반영",
    "tb": {
     "head": [
      "규정",
      "CSS 구현",
      "위반 예"
     ],
     "rows": [
      [
       "배경 #ffffff",
       "body{background:#ffffff}",
       "회색 배경 전체 적용"
      ],
      [
       "기본 텍스트 #333333",
       "body{color:#333333}",
       "기본 검정 #000 방치"
      ],
      [
       "CSS 별도 파일",
       "<link rel=\"stylesheet\" href=\"css/style.css\">",
       "<style> 태그·style 속성 위주 작성"
      ],
      [
       "CSS3 W3C ERROR 0",
       "유효한 속성·값만",
       "color:#33; / font-color / calc(100%-200px)"
      ],
      [
       "table 레이아웃 금지",
       "div·시맨틱 태그 + CSS 배치",
       "<table>로 헤더·콘텐츠 칸 나누기"
      ],
      [
       "CSS off 세로 나열",
       "HTML 소스를 헤더→슬라이드→콘텐츠→푸터 순서로",
       "absolute·order 로만 순서 맞춤"
      ]
     ]
    }
   },
   {
    "h": "텍스트 위계(글자체·굵기·색상·크기)",
    "li": [
     "타이틀: font-size 크게 + font-weight:bold + 주조색",
     "메뉴: 중간 크기 + 굵게 또는 보통, hover 시 배경·색 반전",
     "바디: 기본 크기 + #333 — ★위계는 font-size·font-weight·color(·font-family) 조합★으로 구분",
     "z-index·opacity 는 위계 수단이 아니다."
    ]
   },
   {
    "h": "푸터 로고 무채색",
    "li": [
     "CSS: footer .logo img { filter:grayscale(100%); } — 원본 로고 파일 재사용",
     "또는 포토샵에서 흑백 이미지로 따로 저장 — 둘 다 결과만 무채색이면 된다.",
     "로고 이미지 비율 유지: width 또는 height 한쪽만 지정(나머지 auto)."
    ]
   },
   {
    "h": "색상 표기 유효성",
    "li": [
     "#rgb(3자리)·#rrggbb(6자리)·rgb()·rgba() 사용. ★2자리 #33 은 무효★.",
     "rgba(0,0,0,0.5) — 네 번째 값은 알파(0 투명 ~ 1 불투명).",
     "font-color, bg, align:center 같은 존재하지 않는 속성은 CSS 검사 오류."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "메뉴 마크업",
  "title": "메뉴 마크업 — nav > ul > li > a + 서브 ul",
  "ref": "공개문제 기술 준수사항(HTML5·W3C·Tab 이동) / 명세 3.1",
  "body": [
   {
    "h": "표준 골격 (한 줄씩)",
    "li": [
     "<nav>",
     "  <ul class=\"menu\">",
     "    <li><a href=\"#\">메인1<\/a>",
     "      <ul class=\"sub\"><li><a href=\"#\">서브1-1<\/a><\/li><li><a href=\"#\">서브1-2<\/a><\/li><\/ul>",
     "    <\/li>",
     "    <li><a href=\"#\">메인2<\/a> … <\/li>",
     "  <\/ul>",
     "<\/nav>",
     "★서브 ul 은 반드시 메인 li 의 자식★ — 메인 a 바로 뒤, 닫는 <\/li> 앞에 둔다."
    ]
   },
   {
    "h": "왜 이 구조인가",
    "li": [
     "★ul 의 직계 자식은 li 만★ 허용 — ul 안에 div·a 를 바로 넣으면 W3C 오류.",
     "서브 ul 이 메인 li 안에 있어야 마우스가 서브로 내려가도 ★li 의 hover(mouseenter) 상태가 유지★된다.",
     "모든 메뉴 항목은 ★<a href=\"#\">★ — 임시링크 조건 + a 는 기본적으로 Tab 포커스를 받는다(li 는 못 받음).",
     "CSS 를 끄면 메인1 → 서브1-1 → 서브1-2 → 메인2 … 순으로 ★세로 나열★ — 문서 순서가 논리적이어야 한다.",
     "메뉴 영역은 <nav> 로 감싸 의미를 준다(시맨틱). class 는 여러 번, ★id 는 문서 안에서 한 번만★."
    ]
   },
   {
    "h": "방식별 추가 요소",
    "tb": {
     "head": [
      "메뉴 방식",
      "추가 마크업",
      "비고"
     ],
     "rows": [
      [
       "M1 개별 드롭다운",
       "없음(li 안 서브 ul)",
       "기본형"
      ],
      [
       "M2 전체 서브 박스",
       "없음 또는 배경 박스 div",
       "4열 동시 표시"
      ],
      [
       "M3 전체폭 서브 띠",
       "★배경 띠 div(.subbg)★",
       "띠는 nav·header 안에 둔다"
      ],
      [
       "M4 세로 아코디언",
       "없음(li 안 서브 ul)",
       "서브가 아래 형제를 밀어냄"
      ],
      [
       "M5 세로 플라이아웃",
       "없음(li 안 서브 ul)",
       "서브를 li 오른쪽에 배치"
      ],
      [
       "M6 세로 + 넓은 패널",
       "패널 div(또는 공통 배경)",
       "서브 전체를 우측 패널에"
      ]
     ]
    }
   },
   {
    "h": "자주 나는 마크업 오류",
    "li": [
     "서브 ul 을 <\/li> 뒤, 즉 ul 의 직계 위치에 둠 → W3C 오류 + hover 가 끊긴다.",
     "<a> 를 빼고 <li>서브<\/li> 텍스트만 → Tab 이동 불가(준수사항 위반).",
     "href 값 누락 <a>메뉴<\/a> → 포커스를 받지 않는다. ★href=\"#\" 필수★.",
     "닫는 <\/li>·<\/ul> 누락 → W3C 오류, 서브가 엉뚱한 li 에 속함."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "CSS 메뉴·hover",
  "title": "CSS — 가로 배치·서브 숨김·겹침·하이라이트",
  "ref": "명세 3.2·3.3 / 공개문제 메뉴 요구(하이라이트·서브 배경색)",
  "body": [
   {
    "h": "메인 메뉴 가로 배치",
    "li": [
     ".menu{ list-style:none; margin:0; padding:0; }",
     ".menu > li{ float:left; position:relative; }   (또는 .menu{ display:flex; })",
     ".menu > li > a{ display:block; padding:0 30px; line-height:100px; }",
     "★자식 결합자 > 를 쓴다★ — `.menu li{float:left}` 로 쓰면 서브 li 까지 가로로 떠 버린다.",
     "a 를 display:block 으로 바꿔야 padding·높이가 클릭 영역 전체에 적용된다."
    ]
   },
   {
    "h": "서브메뉴 숨김·겹침",
    "li": [
     ".sub{ display:none; position:absolute; top:100%; left:0; z-index:10; background:#색; }",
     "★display:none 초기값★ — jQuery slideDown() 은 ★숨겨진 요소에만★ 동작한다.",
     "부모 li 에 ★position:relative★ → 서브의 absolute 기준점. 누락 시 기준이 화면(또는 다른 조상)으로 튄다.",
     "서브가 슬라이드 위로 올라와야 하므로 ★z-index★ 를 슬라이드보다 크게. 헤더에 overflow:hidden 을 주면 서브가 잘린다.",
     "서브메뉴 배경색 지정은 공개문제 공통 요구 — .sub 에 background 지정."
    ]
   },
   {
    "h": "하이라이트(mouse over / out)",
    "li": [
     ".menu > li > a:hover{ background:#주조색; color:#fff; }  → 마우스가 떠나면 자동 해제.",
     ".sub a:hover{ background:#보조색; }  → ★서브 항목도 하이라이트★(공통 요구).",
     "서브에 머무는 동안 메인도 강조 유지: ★.menu > li:hover > a{ … }★ — li 는 서브를 포함하므로 hover 가 유지된다.",
     "키보드 사용자용: a:focus 도 같은 스타일 — `a:hover, a:focus{…}`.",
     "★outline:none 으로 포커스 표시를 지우지 말 것★ — Tab 위치가 보이지 않는다."
    ]
   },
   {
    "h": "CSS 만으로 드롭다운 — 한계와 해법",
    "tb": {
     "head": [
      "방법",
      "코드",
      "'부드럽게' 충족"
     ],
     "rows": [
      [
       "display 전환",
       ".menu>li:hover .sub{display:block}",
       "✗ 즉시 나타남(display 는 transition 불가)"
      ],
      [
       "max-height 전환",
       ".sub{max-height:0;overflow:hidden;transition:max-height .3s} li:hover .sub{max-height:200px}",
       "○"
      ],
      [
       "opacity·visibility",
       ".sub{opacity:0;visibility:hidden;transition:.3s} li:hover .sub{opacity:1;visibility:visible}",
       "○ (페이드형)"
      ],
      [
       "키보드 대응",
       "li:focus-within .sub{…}",
       "Tab 진입 시 펼침"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "개별 드롭다운(M1)",
  "title": "M1 개별 드롭다운 — 해당 메뉴 아래 서브만",
  "ref": "명세 2.2 메뉴 방식 M1(과제 3·7·21·22) [확인필요: 이미지 판독] / 3.3",
  "body": [
   {
    "h": "동작 요구",
    "li": [
     "메인 메뉴에 마우스를 올리면 ★그 메뉴의 서브만★ 부드럽게 나타나고, 벗어나면 부드럽게 사라진다.",
     "메인·서브 모두 하이라이트, 서브 영역 배경색 지정.",
     "공개문제 와이어프레임 판독상 과제 3·7·21·22 가 이 방식 [확인필요: 이미지 판독]."
    ]
   },
   {
    "h": "jQuery 표준 코드 (한 줄씩)",
    "li": [
     "$(function(){",
     "  $('.menu > li').mouseenter(function(){",
     "    $(this).children('.sub').stop().slideDown(200);",
     "  }).mouseleave(function(){",
     "    $(this).children('.sub').stop().slideUp(200);",
     "  });",
     "});",
     "같은 뜻: $('.menu > li').hover(function(){ …slideDown… }, function(){ …slideUp… });",
     "★$(this)★ = 지금 마우스가 올라간 그 li 하나 → 그 li 의 서브만 움직인다."
    ]
   },
   {
    "h": "코드 조각별 의미",
    "tb": {
     "head": [
      "조각",
      "역할",
      "빠뜨리면"
     ],
     "rows": [
      [
       "$(function(){ })",
       "DOM 준비 후 실행",
       "head 에서 로드 시 요소를 못 찾아 동작 안 함"
      ],
      [
       "'.menu > li'",
       "메인 li 만 선택",
       "'.menu li' 는 서브 li 까지 선택"
      ],
      [
       "$(this)",
       "이벤트가 난 li",
       "$('.sub') 로 쓰면 모든 서브가 동시에 열림(M2형 오동작)"
      ],
      [
       ".children('.sub')",
       "직계 자식 서브",
       "—  (.find 도 동작, 3단 이상이면 차이)"
      ],
      [
       ".stop()",
       "진행 중 애니메이션 중단",
       "★큐 누적 → 메뉴가 계속 오르내림★"
      ],
      [
       "slideDown(200)",
       "높이를 늘려 표시(200ms)",
       "show() 는 즉시 → '부드럽게' 미충족"
      ]
     ]
    }
   },
   {
    "h": "CSS 짝",
    "li": [
     ".menu > li{ float:left; position:relative; }",
     ".sub{ display:none; position:absolute; top:100%; left:0; width:100%; z-index:10; background:#색; }",
     "메인 a 와 서브 사이에 ★틈(margin)★ 이 있으면 틈을 지나는 순간 mouseleave → 서브가 닫힌다. top:100% 로 딱 붙인다."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "전체 서브메뉴(M2·M3)",
  "title": "M2 전체 서브 박스 · M3 전체폭 서브 띠(메가메뉴형)",
  "ref": "명세 2.2 M2(과제 1·5)·M3(과제 2·4·6·8·23·24) [확인필요: 이미지 판독] / 3.3",
  "body": [
   {
    "h": "M1 과 무엇이 다른가",
    "tb": {
     "head": [
      "구분",
      "M1 개별",
      "M2 전체 박스",
      "M3 전체폭 띠"
     ],
     "rows": [
      [
       "펼쳐지는 서브",
       "올린 메뉴 1개",
       "★모든 서브 동시★",
       "★모든 서브 동시★"
      ],
      [
       "이벤트 대상",
       "각 메인 li",
       "메뉴 전체(.menu 또는 nav)",
       "메뉴 + 띠를 감싸는 부모"
      ],
      [
       "배경",
       "서브 ul 자체",
       "메뉴 폭 안 공통 박스",
       "화면 가로 100% 띠(.subbg)"
      ],
      [
       "선택자",
       "$(this).children('.sub')",
       "$('.sub')",
       "$('.sub, .subbg')"
      ]
     ]
    }
   },
   {
    "h": "M2/M3 jQuery (한 줄씩)",
    "li": [
     "$('nav').mouseenter(function(){",
     "  $('.sub, .subbg').stop().slideDown(300);",
     "}).mouseleave(function(){",
     "  $('.sub, .subbg').stop().slideUp(300);",
     "});",
     "★이벤트는 메인 li 가 아니라 메뉴 전체에★ — li 마다 걸면 메뉴 사이를 옮길 때 닫혔다 열렸다 반복."
    ]
   },
   {
    "h": "M3 전체폭 띠 CSS 포인트",
    "li": [
     "header{ position:relative; z-index:100; }  → 띠·서브가 슬라이드를 덮도록.",
     ".subbg{ display:none; position:absolute; left:0; top:100px; width:100%; height:160px; background:rgba(0,0,0,.7); }",
     ".sub{ display:none; position:absolute; top:100px; height:160px; z-index:2; }  → ★띠보다 위(z-index)★ + ★모든 서브 같은 높이★ 로 열 맞춤.",
     "띠(.subbg)가 이벤트 부모(nav 또는 header) 밖에 있으면 마우스가 띠로 내려가는 순간 mouseleave → 닫힌다. ★띠를 이벤트 부모 안에 둔다★.",
     "L1(1200px 가운데)이라도 헤더가 100% 폭이면 띠는 화면 끝까지. 헤더가 1200px 이면 left:0·width:100% 도 1200px 까지만."
    ]
   },
   {
    "h": "M2 전체 박스 포인트",
    "li": [
     "메인 li 를 같은 폭(예: 4개면 각 25%)으로 나누고, 각 li 아래 서브 ul 을 세로로 → 4열이 한 박스처럼 보인다.",
     "공통 배경은 서브 ul 에 같은 배경색·같은 높이를 주거나 박스 div 하나를 깐다.",
     "박스 폭 = 메뉴 폭(와이어프레임 기준). 띠처럼 화면 전체로 넓히지 않는다 — M3 와의 구분점."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "세로 메뉴(M4~M6)",
  "title": "세로 메뉴 — M4 아코디언 · M5 플라이아웃 · M6 넓은 패널",
  "ref": "명세 2.2 M4(9·10·13·14·17·18)·M5(11·12·19·20)·M6(15·16) [확인필요: 이미지 판독] / 레이아웃 L3~L5",
  "body": [
   {
    "h": "세로 메뉴 공통",
    "li": [
     "L3(좌측 세로 헤더)·L4·L5(좌측 200px 헤더) 레이아웃과 짝을 이룬다.",
     ".menu > li{ float:none; }  또는 display:block — 메인 li 를 세로로 쌓는다.",
     ".menu > li > a{ display:block; height:50px; line-height:50px; }  → 클릭·hover 영역을 가로 전체로."
    ]
   },
   {
    "h": "3방식 비교",
    "tb": {
     "head": [
      "방식",
      "서브 위치(CSS)",
      "애니메이션",
      "주의"
     ],
     "rows": [
      [
       "M4 제자리 펼침(아코디언)",
       "★position 지정 없음(static)★ — 문서 흐름 안",
       "slideDown / slideUp",
       "아래 메인 메뉴가 밀려 내려간다(정상)"
      ],
      [
       "M5 우측 플라이아웃",
       "li{position:relative} .sub{position:absolute; left:100%; top:0}",
       "slideDown 또는 fadeIn, animate({width:'show'})",
       "z-index 로 슬라이드 위에"
      ],
      [
       "M6 우측 넓은 패널(메가)",
       "패널을 헤더 오른쪽에 absolute, 서브 전체를 패널 안에",
       "패널+서브 동시 slideDown/fadeIn",
       "이벤트는 메뉴+패널을 감싼 부모"
      ]
     ]
    }
   },
   {
    "h": "코드 (한 줄씩)",
    "li": [
     "M4·M5: $('.menu > li').mouseenter(function(){ $(this).children('.sub').stop().slideDown(); })",
     "M4·M5: $('.menu > li').mouseleave(function(){ $(this).children('.sub').stop().slideUp(); })",
     "M5 옆으로 펼침: $(this).children('.sub').stop().animate({width:'show'}, 300);",
     "M6: $('header').mouseenter(function(){ $('.sub, .panel').stop().fadeIn(300); })  (나가면 fadeOut)",
     "M4 를 absolute 로 잘못 두면 서브가 아래 메뉴를 ★덮어★ 버려 '제자리 펼침'이 아니게 된다."
    ]
   },
   {
    "h": "판독 요령",
    "li": [
     "와이어프레임에서 서브가 메인 목록 ★사이에 끼어★ 그려져 있으면 M4.",
     "서브가 메인 항목 ★오른쪽 옆★ 에 작게 붙어 있으면 M5.",
     "서브 전체가 오른쪽 ★큰 사각 영역★ 에 열로 모여 있으면 M6."
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-6",
  "t": "jQuery 이벤트·애니메이션",
  "title": "jQuery 이벤트·애니메이션 — mouseenter vs mouseover, stop()",
  "ref": "jQuery 3.x API / 명세 3.3",
  "body": [
   {
    "h": "마우스 이벤트 4종",
    "tb": {
     "head": [
      "이벤트",
      "자식 요소 진입 시",
      "버블링",
      "메뉴 적합성"
     ],
     "rows": [
      [
       "mouseenter",
       "다시 발생하지 않음",
       "없음",
       "★권장★ (hover 첫 함수)"
      ],
      [
       "mouseleave",
       "자식으로 이동해도 발생하지 않음",
       "없음",
       "★권장★ (hover 둘째 함수)"
      ],
      [
       "mouseover",
       "자식 진입 때마다 다시 발생",
       "있음",
       "반복 호출로 떨림 원인"
      ],
      [
       "mouseout",
       "자식으로 이동하면 발생",
       "있음",
       "서브로 내려가면 닫혀 버림"
      ]
     ]
    }
   },
   {
    "h": "등가 표현",
    "li": [
     "$(el).hover(fIn, fOut)  =  $(el).on('mouseenter', fIn).on('mouseleave', fOut)",
     "$(el).hover(f) (함수 1개) → 들어갈 때·나갈 때 ★같은 함수★ 실행 → slideToggle 과 짝지으면 상태 어긋남 위험.",
     "여러 이벤트 한 번에: $(el).on('mouseenter focusin', fIn)",
     "jQuery 3.x 권장 방식은 .on() — .bind() 는 3.0 에서 deprecated, .toggle(f1,f2) 이벤트형은 1.9 에서 제거."
    ]
   },
   {
    "h": ".stop() 이 필요한 이유",
    "li": [
     "jQuery 애니메이션은 요소별 ★큐(queue)★ 에 차례로 쌓인다.",
     "마우스를 빠르게 여러 번 넣었다 빼면 slideDown·slideUp 이 쌓여 ★손을 뗀 뒤에도 계속 오르내린다★.",
     ".stop() = 현재 애니메이션 중단 후 다음 동작 시작 → ★반드시 애니메이션 메서드 앞★: .stop().slideDown()",
     ".stop(clearQueue, jumpToEnd) — 둘 다 기본 false. .stop(true) 는 큐까지 비움, .stop(true,true) 는 끝 상태로 점프.",
     ".finish() — 진행 중·대기 중 애니메이션을 모두 즉시 끝 상태로(1.9+)."
    ]
   },
   {
    "h": "애니메이션 메서드",
    "tb": {
     "head": [
      "메서드",
      "변하는 속성",
      "비고"
     ],
     "rows": [
      [
       "slideDown / slideUp",
       "height(+padding·margin)",
       "★숨긴 요소(display:none)에서 시작★"
      ],
      [
       "slideToggle",
       "위 둘을 상태에 따라",
       "hover 1함수와 쓰면 어긋날 수 있음"
      ],
      [
       "fadeIn / fadeOut",
       "opacity",
       "M5·M6 에 자주"
      ],
      [
       "show() / hide() (인자 없음)",
       "즉시 display 전환",
       "★'부드럽게' 아님★"
      ],
      [
       "animate({height:'show'})",
       "지정 속성",
       "'show'·'hide'·'toggle' 값 사용 가능"
      ],
      [
       "속도 인자",
       "숫자(ms) 또는 'fast'·'slow'",
       "기본 400ms / fast 200 / slow 600"
      ]
     ]
    }
   },
   {
    "h": "this 함정",
    "li": [
     "function(){ $(this) } → 이벤트가 걸린 요소.",
     "★화살표 함수 () => { $(this) } 의 this 는 요소가 아니다★(바깥 this 를 물려받음) → $(this).children() 가 빈 결과.",
     "화살표 함수를 쓰려면 (e) => $(e.currentTarget).children('.sub') …"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-7",
  "t": "키보드 접근·오류 점검",
  "title": "키보드 접근(Tab)·오류 점검",
  "ref": "공개문제 기술 준수사항 4(Tab 이동)·3(Console 0) / 명세 3.3·4.3",
  "body": [
   {
    "h": "Tab 키와 숨은 서브메뉴",
    "li": [
     "준수사항: 상호작용 요소는 ★Tab 키로 이동·선택 가능★해야 한다.",
     "<a href=\"#\"> 는 기본 포커스 대상. <li>·<div> 는 tabindex 없이는 포커스를 받지 않는다.",
     "★display:none·visibility:hidden 인 서브 링크는 Tab 순서에서 빠진다★ → 포커스로 서브를 열어 줘야 서브 항목까지 이동 가능.",
     "opacity:0 으로만 숨기면 포커스는 받지만 보이지 않는 곳에 포커스가 가 버린다."
    ]
   },
   {
    "h": "포커스로 여닫기 (한 줄씩)",
    "li": [
     "$('.menu > li').on('mouseenter focusin', function(){ $(this).children('.sub').stop().slideDown(200); });",
     "$('.menu > li').on('mouseleave focusout', function(){ $(this).children('.sub').stop().slideUp(200); });",
     "★focusin/focusout 은 버블링★ → 자식 a 에 포커스가 가도 li 에서 잡힌다. focus/blur 는 버블링하지 않아 li 에 걸면 동작 안 함.",
     "CSS 만으로: .menu > li:focus-within > .sub{ display:block; }",
     "키보드 반영 여부의 채점 비중은 공식 미공개 [확인필요: 채점 반영 여부]."
    ]
   },
   {
    "h": "메뉴 오류 증상 → 원인",
    "tb": {
     "head": [
      "증상",
      "원인",
      "처방"
     ],
     "rows": [
      [
       "메뉴가 계속 오르내림",
       ".stop() 누락",
       ".stop().slideDown()"
      ],
      [
       "모든 서브가 한꺼번에 열림(M1 과제)",
       "$('.sub') 로 전체 선택",
       "$(this).children('.sub')"
      ],
      [
       "서브로 내려가면 닫힘",
       "서브가 li 밖 / 틈 / mouseout 사용",
       "li 안에 두고 top:100%, mouseleave"
      ],
      [
       "서브가 슬라이드 뒤로 숨음",
       "z-index 부족 / 헤더 overflow:hidden",
       "z-index↑, overflow 해제"
      ],
      [
       "서브가 엉뚱한 곳에 뜸",
       "부모 li position:relative 누락",
       "li{position:relative}"
      ],
      [
       "아무 동작 없음·Console 오류",
       "jQuery 파일 경로 오류, script.js 가 jQuery 보다 먼저",
       "로컬 jQuery 먼저 로드"
      ],
      [
       "slideDown 이 안 먹음",
       "서브가 display:none 이 아님(height:0 등)",
       "초기 display:none"
      ]
     ]
    }
   },
   {
    "h": "제출 전 메뉴 체크리스트",
    "li": [
     "① 메인·서브 전 항목 a href=\"#\"  ② 서브 display:none + 부드럽게 등장  ③ 메인·서브 하이라이트",
     "④ .stop() 전부 적용  ⑤ 과제의 메뉴 방식(M1~M6)과 일치  ⑥ Tab 으로 서브 항목까지 도달",
     "⑦ Console 오류 0(선택자 오타·jQuery 로드 순서)  ⑧ CSS 끄면 메뉴가 세로 목록으로 나열"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "jQuery 기본·이벤트",
  "title": "jQuery 로드 순서와 document ready",
  "ref": "공개문제 기술 준수사항(JS 별도 파일·Console 오류 0) / 출제기준 5. 구현",
  "body": [
   {
    "h": "시험장 연결 규칙",
    "li": [
     "인터넷 차단 → ★CDN 주소 금지★, 제공된 jQuery 파일을 script 폴더에 넣고 ★상대경로★로 연결한다.",
     "로드 순서: ★jQuery 파일 → script.js★. 반대로 두면 script.js 실행 시점에 $ 가 없어 Console 에 `$ is not defined` 오류.",
     "`<script src=\"script/jquery-x.x.x.min.js\"><\/script>` (버전·파일명은 제공 파일 그대로 — [확인필요])",
     "`<script src=\"script/script.js\"><\/script>` — JS 는 ★별도 파일★. HTML 안 인라인 `<script>` 코드 작성은 준수사항 위반 소지.",
     "파일명 대소문자까지 일치시킨다(채점 PC 에서 경로 깨짐 방지)."
    ]
   },
   {
    "h": "document ready — DOM 이 준비된 뒤 실행",
    "li": [
     "`$(document).ready(function(){ ... });` — DOM 트리 생성 완료 후 실행(이미지 로드 완료 전이어도 실행).",
     "단축형: `$(function(){ ... });` — 기능 동일, 시험장에서 가장 많이 쓰는 형태.",
     "head 에서 script.js 를 불러오면서 ready 를 빼먹으면 선택자가 빈 집합 → ★오류 없이 아무 동작도 안 함★(가장 찾기 어려운 실수).",
     "`$(window).on('load', fn)` — 이미지까지 모두 로드된 뒤 실행. jQuery 3 에서 `.load(fn)` 이벤트 단축형은 제거됨.",
     "대안: script 를 `<\/body>` 직전에 두거나 `<script defer>` — 이 경우 ready 없이도 DOM 접근 가능."
    ]
   },
   {
    "h": "시험에 쓰는 선택·탐색 메서드",
    "tb": {
     "head": [
      "메서드",
      "의미",
      "시험 용도"
     ],
     "rows": [
      [
       "$('.a > li')",
       "자식 선택자",
       "메뉴·슬라이드 li 선택"
      ],
      [
       ".eq(n)",
       "n번째(0부터) 요소",
       "현재 슬라이드·탭 콘텐츠 지정"
      ],
      [
       ".index()",
       "형제 중 내 위치(0부터)",
       "클릭한 탭 번호 구하기"
      ],
      [
       ".siblings()",
       "나를 뺀 형제",
       "나머지 탭 on 해제·숨김"
      ],
      [
       ".children() / .find()",
       "직계 자식 / 모든 후손",
       "서브메뉴·팝업 내부 요소"
      ],
      [
       ".first() / .last()",
       "첫·마지막 요소",
       "첫 번째 공지 글(:first 선택자 대체)"
      ]
     ]
    }
   },
   {
    "h": "this 와 화살표 함수",
    "li": [
     "이벤트 핸들러를 `function(){}` 으로 쓰면 `$(this)` = 이벤트가 발생한 요소.",
     "★화살표 함수 `() => {}` 안의 this 는 요소가 아니다★ → `$(this).index()` 가 엉뚱한 값. this 를 쓰는 핸들러는 function 으로 작성.",
     "화살표 함수에서 요소가 필요하면 `(e) => { $(e.currentTarget) }` 사용."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "jQuery 기본·이벤트",
  "title": "이벤트 바인딩과 기본 동작 막기",
  "ref": "공개문제 기술 준수사항(임시링크 #·Tab 이동)",
  "body": [
   {
    "h": "바인딩 방법",
    "li": [
     "단축형: `$('.btn').click(function(){ ... });` — 3.x 에서도 동작.",
     "권장형: `$('.btn').on('click', function(){ ... });` — 여러 이벤트 동시 지정 `on('mouseenter focusin', fn)` 가능.",
     "`.bind()` 는 3.0 부터 deprecated, `.live()` 는 1.9 에서 제거 → ★on() 으로 작성★.",
     "해제: `.off('click')`."
    ]
   },
   {
    "h": "a href=\"#\" 의 기본 동작 막기",
    "li": [
     "링크는 준수사항상 `href=\"#\"` 임시링크 → 클릭 시 ★페이지 맨 위로 튀고 주소에 # 붙음★.",
     "`return false;` — jQuery 핸들러에서 ★preventDefault + stopPropagation★ 동시 효과.",
     "`e.preventDefault();` — 기본 동작만 막음(버블링은 유지). 핸들러에 매개변수 e 를 받아야 한다.",
     "팝업 열기·탭 클릭 핸들러에 빠뜨리면 동작은 되지만 화면이 위로 점프 → 감점 소지."
    ]
   },
   {
    "h": "자주 쓰는 이벤트",
    "tb": {
     "head": [
      "이벤트",
      "발생 시점",
      "비고"
     ],
     "rows": [
      [
       "click",
       "클릭(키보드 Enter 로 a·button 활성 포함)",
       "탭·팝업 열기/닫기"
      ],
      [
       "mouseenter / mouseleave",
       "요소 진입·이탈(자식 이동 시 재발생 안 함)",
       "메뉴·슬라이드 일시정지"
      ],
      [
       "mouseover / mouseout",
       "자식 요소 드나들 때도 발생(버블링)",
       "메뉴 떨림 원인"
      ],
      [
       "focusin / focusout",
       "요소·자식이 포커스 받음/잃음(버블링)",
       "Tab 키 접근 보강"
      ],
      [
       "ready / load",
       "DOM 완료 / 리소스 전부 로드",
       "초기화 시점"
      ]
     ]
    }
   },
   {
    "h": "키보드 접근",
    "li": [
     "탭 버튼·팝업 열기·닫기는 ★a 또는 button★ 으로 만들어야 Tab 키 포커스·Enter 동작이 된다.",
     "`<div class=\"close\">` 에 click 만 걸면 키보드로 닫을 수 없음 → `<button type=\"button\" class=\"close\">` 사용.",
     "button 에 `type=\"button\"` 을 명시(폼 안에서 submit 기본값 방지)."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "슬라이드 공통 로직",
  "title": "슬라이드 공통 로직 — setInterval·인덱스 순환",
  "ref": "공개문제 Slide 요구(3초 이내·자동시작·무한반복) / 실격 사유",
  "body": [
   {
    "h": "요구사항과 실격",
    "li": [
     "제공 이미지 3장 + 텍스트 3개, ★매 3초 이내★ 전환, ★페이지 열면 자동 시작★, ★마지막 → 첫 번째로 무한 반복★.",
     "★슬라이드를 JS(jQuery 포함)·CSS 중 하나 이상으로 제작하지 않으면 실격★ — 움직이지 않는 이미지 1장 배치도 실격.",
     "방향(가로·세로·Fade)은 과제 지시대로 — 가로 과제에 Fade 를 쓰면 요구사항 불일치(감점 추정 [확인필요: 감점 폭]).",
     "시간 우선순위: 메뉴 → ★슬라이드(실격 요소, 최우선)★ → 탭 → 팝업."
    ]
   },
   {
    "h": "순환 로직 3형태",
    "li": [
     "기본: `let i = 0;` 을 함수 밖에 선언 → 콜백 안에서 `i = (i + 1) % 3;`",
     "조건형: `if (i < 2) { i++; } else { i = 0; }`",
     "개수 자동: `const n = $('.slide li').length;` → `i = (i + 1) % n;`",
     "★i 를 콜백 안에서 `let i = 0` 으로 선언하면 매번 0 으로 초기화★ → 첫 장에서 멈춘 듯 보임.",
     "나머지 연산 % 의 제수는 ★장 수(3)★ — 2 를 쓰면 3번째 장이 안 나온다."
    ]
   },
   {
    "h": "타이머",
    "li": [
     "`setInterval(slide, 3000);` — 3000ms 마다 반복 호출(단위 ms).",
     "`setTimeout` 은 ★1회만★ 실행 → 반복하려면 콜백 안에서 다시 setTimeout 을 호출해야 한다.",
     "함수 참조는 괄호 없이: `setInterval(slide, 3000)` ○ / `setInterval(slide(), 3000)` × (즉시 1회 실행 후 undefined 전달).",
     "정지·재시작: `const t = setInterval(...)` → `clearInterval(t)` (호버 일시정지 구현 시).",
     "첫 전환은 페이지 로드 후 3초 뒤 — 그동안 ★첫 장이 보이도록★ CSS 초기 상태 설정."
    ]
   },
   {
    "h": "타이밍 조건 판정",
    "tb": {
     "head": [
      "설정",
      "판정",
      "이유"
     ],
     "rows": [
      [
       "interval 3000 + animate 600",
       "적합",
       "3초마다 전환, 애니메이션이 간격 안에 끝남"
      ],
      [
       "interval 2500 + animate 1000",
       "적합",
       "3초 이내 전환"
      ],
      [
       "interval 4000 + animate 500",
       "부적합",
       "전환 간격 3초 초과"
      ],
      [
       "interval 1000 + animate 1500",
       "부적합(오동작)",
       "애니메이션이 끝나기 전 다음 호출 → 큐 누적"
      ],
      [
       "CSS 9s infinite, 3장",
       "적합",
       "장당 3초(9÷3)"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "가로·세로 슬라이드",
  "title": "가로·세로 이동 슬라이드 — animate",
  "ref": "공개문제 슬라이드 방향(가로·세로) 변형 축",
  "body": [
   {
    "h": "가로 슬라이드 구조",
    "li": [
     "창(보이는 영역): `.slide { width:1200px; height:300px; overflow:hidden; position:relative; }` — ★overflow:hidden 누락 시 옆 장이 삐져나옴★.",
     "필름(ul): li 3개를 가로로 나열 — `.slide ul { width:300%; }` + `.slide li { float:left; width:33.3333%; }` 또는 `display:flex`.",
     "이동: `$('.slide ul').animate({ marginLeft: -1200 * i }, 600);`",
     "left 로 이동하려면 ul 에 `position:absolute`(또는 relative) 필요 — position 없는 요소의 left 는 무효.",
     "폭 100% 과제는 px 대신 백분율: `animate({ marginLeft: -100 * i + '%' })`."
    ]
   },
   {
    "h": "세로 슬라이드 구조",
    "li": [
     "li 를 세로로 쌓는다(기본 블록 흐름) — 각 li 높이 = 슬라이드 창 높이.",
     "이동: `$('.slide ul').animate({ marginTop: -300 * i }, 600);` 또는 `top` (+ position).",
     "창 높이와 이동 단위가 다르면 이미지가 반쯤 걸림 → ★이동 단위 = 창 높이★(예 300px)."
    ]
   },
   {
    "h": "마지막 → 첫 장 복귀 방식",
    "tb": {
     "head": [
      "방식",
      "코드 요지",
      "특징"
     ],
     "rows": [
      [
       "되감기",
       "i=(i+1)%3 → 0 이면 marginLeft 0 으로 animate",
       "간단. 마지막→첫 장이 역방향으로 빠르게 되감김"
      ],
      [
       "복제(clone)",
       "첫 li 를 끝에 복제(4장) → 4번째 도착 후 css('marginLeft',0) 즉시 리셋",
       "항상 같은 방향으로 이어지는 무한 루프"
      ],
      [
       "순환 이동",
       "animate 완료 콜백에서 첫 li 를 appendTo(ul) 후 marginLeft 0",
       "장 수 무관, DOM 순서 변경"
      ]
     ]
    }
   },
   {
    "h": "완료 콜백·큐",
    "li": [
     "`.animate(props, 600, function(){ ... })` — 세 번째 인자 콜백은 ★애니메이션이 끝난 뒤★ 실행 → 즉시 리셋 코드 위치.",
     "animate 기본 duration 400ms, 기본 easing 'swing'(jQuery 기본 제공은 swing·linear 2종).",
     "`.stop()` — 진행 중 애니메이션 중지. 호버 정지·빠른 재호출 시 큐 누적 방지.",
     "색상(color·backgroundColor)은 jQuery UI 등 플러그인 없이 animate 불가 — 수치 속성만."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "Fade 슬라이드",
  "title": "Fade-in/Fade-out 슬라이드",
  "ref": "공개문제 슬라이드 방향(Fade) 변형 축",
  "body": [
   {
    "h": "겹침 구조(CSS)",
    "li": [
     "`.slide { position:relative; height:300px; }`",
     "`.slide li { position:absolute; top:0; left:0; }` — 3장을 ★같은 자리에 겹침★.",
     "`.slide li { display:none; }` + `.slide li:first-child { display:block; }` — 첫 장만 보이게 시작.",
     "absolute 를 빼면 3장이 아래로 쌓여 '세로로 나타났다 사라지는' 엉뚱한 모양."
    ]
   },
   {
    "h": "전환 코드",
    "li": [
     "`let cur = 0; const $li = $('.slide li');`",
     "`setInterval(function(){ const next = (cur + 1) % 3;`",
     "`  $li.eq(cur).fadeOut(1000); $li.eq(next).fadeIn(1000);`",
     "`  cur = next; }, 3000);`",
     "fadeOut 과 fadeIn 을 ★동시에★ 호출 → 크로스페이드. fadeOut 완료 콜백 안에서 fadeIn 하면 사이에 빈 화면(흰 배경)이 비친다.",
     "대안: `.fadeTo(1000, 0)` / `.animate({opacity:0})` — fadeOut 은 끝나면 display:none 까지 처리."
    ]
   },
   {
    "h": "fade 계열 메서드",
    "tb": {
     "head": [
      "메서드",
      "동작",
      "끝 상태"
     ],
     "rows": [
      [
       "fadeIn(ms)",
       "투명도 0→1 로 나타남",
       "display 복원"
      ],
      [
       "fadeOut(ms)",
       "투명도 1→0 으로 사라짐",
       "display:none"
      ],
      [
       "fadeToggle(ms)",
       "보이면 fadeOut, 숨었으면 fadeIn",
       "상태 반전"
      ],
      [
       "fadeTo(ms, 값)",
       "지정 투명도까지 변화",
       "display 유지"
      ]
     ]
    }
   },
   {
    "h": "Fade 판정 포인트",
    "li": [
     "과제 지시가 'Fade-in, Fade-out' 이면 이동(animate marginLeft)으로 만들면 요구사항 불일치.",
     "z-index 조절형: 다음 장을 위로 올리고 fadeIn — 겹침 순서 문제로 안 보이면 z-index 확인.",
     "슬라이드 텍스트(span)는 li 안에 absolute 로 넣어 함께 fade 되게 한다."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-6",
  "t": "CSS 애니메이션 슬라이드",
  "title": "CSS @keyframes 슬라이드(대안)",
  "ref": "공개문제 실격 사유(JS·CSS 중 하나 이상)",
  "body": [
   {
    "h": "허용 근거",
    "li": [
     "실격 기준은 'JS(jQuery 포함)·CSS 중 ★하나 이상★으로 제작하지 않은 경우' → ★CSS 만으로 만든 슬라이드도 허용★.",
     "CSS 는 ★별도 파일(style.css)★ 에 작성 — W3C CSS 검사 오류 0 대상."
    ]
   },
   {
    "h": "가로 이동 예",
    "li": [
     "`.slide ul { width:300%; animation: slideX 9s infinite; }`",
     "`@keyframes slideX { 0%,30% {margin-left:0} 33%,63% {margin-left:-100%} 66%,96% {margin-left:-200%} 100% {margin-left:0} }`",
     "장 3 × 3초 = ★전체 9s★ — 한 장이 약 3초 머무름(정지 구간 + 이동 구간).",
     "`infinite` 누락 시 한 번만 돌고 멈춤 → 무한 반복 요구 위반.",
     "세로는 margin-top(또는 transform: translateY), Fade 는 각 li 에 opacity keyframes + `animation-delay` 로 시차."
    ]
   },
   {
    "h": "animation 속성 정리",
    "tb": {
     "head": [
      "속성",
      "값 예",
      "의미"
     ],
     "rows": [
      [
       "animation-name",
       "slideX",
       "@keyframes 이름"
      ],
      [
       "animation-duration",
       "9s",
       "1회 주기"
      ],
      [
       "animation-iteration-count",
       "infinite",
       "무한 반복"
      ],
      [
       "animation-delay",
       "3s",
       "시작 지연(Fade 시차)"
      ],
      [
       "animation-timing-function",
       "linear / ease",
       "속도 곡선"
      ]
     ]
    }
   },
   {
    "h": "JS 방식과 비교",
    "li": [
     "CSS: 코드 짧음, Console 오류 위험 없음 / 정지 구간 % 계산 필요, 장 수 변경 시 전부 재계산.",
     "JS: 장 수 자동 대응·호버 정지 등 확장 쉬움 / 로드 순서·선택자 오류 위험.",
     "시험장 권장: 익숙한 방식 1개를 ★손에 익혀★ 10분 안에 완성."
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-7",
  "t": "탭 전환",
  "title": "탭 전환 — 공지사항/갤러리",
  "ref": "공개문제 공지/갤러리 배치(탭 구성) 변형 축",
  "body": [
   {
    "h": "마크업 구조",
    "li": [
     "탭 버튼: `<ul class=\"tab-btn\"><li class=\"on\"><a href=\"#\">공지사항<\/a><\/li><li><a href=\"#\">갤러리<\/a><\/li><\/ul>`",
     "탭 내용: `<div class=\"tab-cont\"><div class=\"notice\">…<\/div><div class=\"gallery\">…<\/div><\/div>`",
     "버튼 순서와 내용 순서를 ★같은 인덱스★로 맞춘다(0=공지, 1=갤러리).",
     "갤러리는 제공 이미지 3개 ★가로 배치★(float·flex), img 마다 alt."
    ]
   },
   {
    "h": "전환 코드(인덱스 매칭)",
    "li": [
     "`$('.tab-btn li').click(function(){`",
     "`  const n = $(this).index();`",
     "`  $(this).addClass('on').siblings().removeClass('on');`",
     "`  $('.tab-cont > div').eq(n).show().siblings().hide();`",
     "`  return false; });`",
     "CSS 초기값: `.tab-cont > div { display:none; }` `.tab-cont > div:first-child { display:block; }` — ★처음부터 공지가 보여야★ 한다."
    ]
   },
   {
    "h": "자주 틀리는 곳",
    "tb": {
     "head": [
      "증상",
      "원인",
      "처방"
     ],
     "rows": [
      [
       "클릭해도 on 색이 안 바뀜",
       "addClass 만 하고 형제 removeClass 누락",
       ".siblings().removeClass('on')"
      ],
      [
       "탭 번호가 항상 0",
       "a 에 이벤트를 걸고 $(this).index() 사용(a 는 li 안의 유일한 자식)",
       "li 에 바인딩 또는 $(this).parent().index()"
      ],
      [
       "화면이 맨 위로 점프",
       "a href=\"#\" 기본 동작",
       "return false / e.preventDefault()"
      ],
      [
       "첫 화면에 내용이 없음",
       "초기 CSS 에서 모두 display:none",
       "첫 div 만 block"
      ],
      [
       "this 가 요소가 아님",
       "화살표 함수 핸들러",
       "function 으로 작성"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-8",
  "t": "레이어·모달 팝업",
  "title": "레이어 팝업·모달 팝업 열기/닫기",
  "ref": "공개문제 공지사항 요구(첫 번째 글 → 팝업, 닫기 버튼) / 팝업 변형 축",
  "body": [
   {
    "h": "요구사항",
    "li": [
     "공지사항 ★첫 번째 글★ 클릭 → 레이어 팝업 표시, 팝업 안 ★닫기 버튼★으로 닫힘.",
     "레이어 팝업: 페이지 위에 박스만 뜸 / ★모달★ 레이어 팝업: ★반투명 배경 덮개★ + 가운데 박스(뒤 화면 조작 차단).",
     "window.open 새 창 팝업이 아니라 ★같은 페이지 안의 레이어(div)★로 구현.",
     "팝업 제목·내용은 제공 텍스트를 ★HTML 텍스트★로 코딩(이미지 통째 삽입 금지)."
    ]
   },
   {
    "h": "열기/닫기 코드",
    "li": [
     "열기: `$('.notice li').first().find('a').click(function(){ $('.popup').show(); return false; });`",
     "`:first` 선택자(`$('.notice li:first a')`)도 동작하나 jQuery 3.4 부터 위치 선택자는 deprecated → `.first()`·`.eq(0)` 권장.",
     "닫기: `$('.popup .close').click(function(){ $('.popup').hide(); });`",
     "부드럽게: `fadeIn()`/`fadeOut()` 사용 가능. `.toggle()` 로 열기·닫기를 한 버튼에 몰면 닫기 버튼 요구와 어긋남.",
     "초기 상태 `.popup { display:none; }` — 페이지 열자마자 뜨면 요구사항 불일치."
    ]
   },
   {
    "h": "CSS 구조",
    "tb": {
     "head": [
      "요소",
      "핵심 속성",
      "주의"
     ],
     "rows": [
      [
       "모달 덮개 .modal",
       "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,.5)",
       "fixed → 스크롤해도 화면 전체 덮음"
      ],
      [
       "팝업 박스",
       "position:absolute; top:50%; left:50%; transform:translate(-50%,-50%)",
       "부모 기준 가운데 정렬"
      ],
      [
       "겹침 순서",
       "z-index 를 슬라이드·서브메뉴보다 크게",
       "팝업이 슬라이드 아래 깔림 방지"
      ],
      [
       "초기 숨김",
       "display:none",
       "show()/fadeIn() 으로 표시"
      ]
     ]
    }
   },
   {
    "h": "점검 체크",
    "li": [
     "닫기 버튼은 `<button type=\"button\">` 또는 `<a href=\"#\">` — Tab 이동 가능해야 함.",
     "모달 과제에서 덮개를 빼먹거나 덮개만 닫히고 박스가 남는 구조 실수 → 박스를 덮개 안에 넣고 덮개를 show/hide.",
     "첫 번째 글이 아닌 모든 글에 팝업을 걸어도 동작은 하지만 요구와 다름 — 첫 글만.",
     "Console 에 오류 0 — 닫기 선택자 오타는 오류 없이 무반응이므로 직접 클릭 테스트."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-1",
  "t": "HTML 유효성(W3C)",
  "title": "W3C HTML 유효성 — ERROR 0 을 만드는 규칙",
  "ref": "공개문제 기술적 준수사항 1 · 출제기준 5-3 개발 요소 구현",
  "body": [
   {
    "h": "시험장 전제",
    "li": [
     "준수사항: HTML5 웹표준, ★W3C HTML validator 기준 ERROR 0★.",
     "시험장은 ★인터넷 차단★ — 온라인 Validator 는 ★제공되지 않는다★. 오류 0 은 ★작성 습관으로★ 보장해야 한다.",
     "검사 대상은 ★ERROR★ — Warning·Info 는 준수 조건 문구 밖이지만, 가능하면 없앤다."
    ]
   },
   {
    "h": "문서 골격에서 나는 오류",
    "li": [
     "`<!DOCTYPE html>` 누락 → \"doctype 없이 시작 태그\" ★오류★. 반드시 첫 줄.",
     "`<head>` 안 `<title>` 누락 → 필수 자식 요소 누락 ★오류★.",
     "`<meta charset=\"utf-8\">` — 요구사항(charset utf-8)이자 인코딩 선언. head 앞부분에 둔다.",
     "`<html lang=\"ko\">` — 빠지면 ★경고(Warning)★ 수준. 오류는 아니지만 기본으로 넣는다."
    ]
   },
   {
    "h": "요소 중첩(콘텐츠 모델) 오류",
    "tb": {
     "head": [
      "잘못된 코드",
      "왜 오류인가",
      "고친 코드"
     ],
     "rows": [
      [
       "`<ul><div>…<\/div><\/ul>`",
       "ul·ol 의 ★직계 자식은 li 만★",
       "`<ul><li><div>…<\/div><\/li><\/ul>`"
      ],
      [
       "`<p><div>…<\/div><\/p>`",
       "p 안에 블록(div) → p 가 암묵 종료, 남은 `<\/p>` 가 떠돌이 태그",
       "`<div><div>…<\/div><\/div>`"
      ],
      [
       "`<a href=\"#\"><button>…<\/button><\/a>`",
       "상호작용 요소 안에 ★상호작용 요소 중첩 금지★",
       "a 또는 button 하나만"
      ],
      [
       "`<a><a>…<\/a><\/a>`",
       "a 안에 a 금지",
       "링크 분리"
      ],
      [
       "`<li>` 가 ul 밖에 단독",
       "li 는 ul·ol·menu 안에서만",
       "ul 로 감싼다"
      ]
     ]
    }
   },
   {
    "h": "속성·태그 오류",
    "li": [
     "`<img>` 에 ★alt 누락★ → validator ★오류★ (장식 이미지는 `alt=\"\"` 로라도 속성은 둔다).",
     "같은 문서에 ★같은 id 두 번★ → 중복 id 오류. 반복 요소는 ★class★.",
     "id 값에 ★공백★ 불가 (`id=\"main menu\"` 오류).",
     "닫히지 않은 태그·닫힘 순서 뒤틀림(`<b><i><\/b><\/i>`)·짝 없는 `<\/div>` → 떠돌이 종료 태그 오류.",
     "HTML5 에서 폐지된 `<center>`·`<font>` 와 `align`·`bgcolor` 같은 표현 속성 → ★obsolete 오류★. 표현은 CSS 로.",
     "같은 요소에 같은 속성 두 번(`class=\"a\" class=\"b\"`) → 중복 속성 오류."
    ]
   },
   {
    "h": "오류가 아닌 것(헷갈림 주의)",
    "li": [
     "`<a href=\"#\"><div>…<\/div><\/a>` — HTML5 의 a 는 ★투명 콘텐츠 모델★ → 부모가 흐름 콘텐츠를 허용하면 ★유효★.",
     "`<br>` · `<br/>` 둘 다 허용(void 요소). 단 `<div/>` 처럼 ★비-void 요소 자기닫기★는 오류.",
     "`<script src=\"…\">` 에 `type=\"text/javascript\"` 생략 가능(붙이면 불필요 경고 수준).",
     "table 레이아웃은 validator 오류가 아니라 ★준수사항 6 위반★(레이아웃 table 금지)이다."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-2",
  "t": "CSS 유효성·콘솔 오류",
  "title": "CSS3 유효성 — 별도 파일·ERROR 0",
  "ref": "공개문제 기술적 준수사항 2",
  "body": [
   {
    "h": "요구 조건",
    "li": [
     "CSS 는 ★별도 파일★(`css/style.css`)로 만들어 `<link rel=\"stylesheet\" href=\"css/style.css\">` 로 연결.",
     "CSS3 기준 W3C CSS validator ★ERROR 0★. style 태그·style 속성 남발은 '별도 파일' 조건과 충돌 → 지양.",
     "CSS 파일도 ★utf-8★ 로 저장(한글 폰트명·주석 깨짐 방지). 파일 첫 줄 `@charset \"utf-8\";` 은 선택."
    ]
   },
   {
    "h": "CSS 오류 유형",
    "tb": {
     "head": [
      "유형",
      "잘못된 예",
      "바른 예"
     ],
     "rows": [
      [
       "속성명 오타",
       "`colr:#333;`",
       "`color:#333;`"
      ],
      [
       "단위 누락(0 제외)",
       "`width:1200;`",
       "`width:1200px;`"
      ],
      [
       "숫자-단위 사이 공백",
       "`width:1200 px;`",
       "`width:1200px;`"
      ],
      [
       "값 오류",
       "`display:blok;`",
       "`display:block;`"
      ],
      [
       "중간 세미콜론 누락",
       "`color:#333 font-size:14px;`",
       "`color:#333; font-size:14px;`"
      ],
      [
       "JS식 주석",
       "`// 메뉴`",
       "`/* 메뉴 */`"
      ],
      [
       "중괄호 불일치",
       "`.menu{color:#333;`",
       "`.menu{color:#333;}`"
      ],
      [
       "calc 공백",
       "`calc(100%-200px)`",
       "`calc(100% - 200px)` (± 양쪽 공백 필수)"
      ]
     ]
    }
   },
   {
    "h": "오류 아님",
    "li": [
     "`0` 은 단위 생략 가능(`margin:0;`).",
     "블록의 ★마지막 선언★ 세미콜론은 생략 가능 — 그래도 붙이는 습관이 안전.",
     "색상 `#fff` = `#ffffff` (3자리 축약 유효). 배경 #ffffff·텍스트 #333333 은 ★요구사항★."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-3",
  "t": "CSS 유효성·콘솔 오류",
  "title": "Chrome Console ERROR 0 — 자주 나는 오류와 원인",
  "ref": "공개문제 기술적 준수사항 3",
  "body": [
   {
    "h": "요구 조건",
    "li": [
     "JS 는 ★별도 파일★(`script/script.js`) 연결, Chrome 개발자도구 ★Console 탭 ERROR 0★.",
     "개발자도구 = ★F12★ 또는 Ctrl+Shift+I, Console 바로 열기 = ★Ctrl+Shift+J★.",
     "빨간색 = Error, 노란색 = Warning. 점검은 ★새로고침 후★(로드 시점 오류 포함) + ★모든 동작 실행 후★(클릭·hover 시점 오류 포함)."
    ]
   },
   {
    "h": "대표 오류 메시지와 원인",
    "tb": {
     "head": [
      "Console 메시지(요지)",
      "원인",
      "처방"
     ],
     "rows": [
      [
       "`$ is not defined` / `jQuery is not defined`",
       "jQuery 미로드 — 경로 오타 또는 ★script.js 보다 뒤에 로드★",
       "jQuery `<script>` 를 script.js ★앞★에, 경로 확인"
      ],
      [
       "`Failed to load resource: net::ERR_FILE_NOT_FOUND`",
       "src·href 경로에 파일 없음(오타·대소문자·폴더)",
       "상대경로·파일명 일치"
      ],
      [
       "`Cannot read properties of null (reading 'addEventListener')`",
       "순수 JS 가 ★DOM 생성 전★ 요소를 찾음",
       "`DOMContentLoaded`·`defer` 또는 body 끝에 script"
      ],
      [
       "`… is not a function`",
       "메서드명 오타(`slidedown`) 또는 제공 jQuery 에 없는 기능",
       "대소문자 `slideDown` 확인"
      ],
      [
       "`Unexpected token` / `missing )`",
       "괄호·중괄호·따옴표 짝 불일치",
       "들여쓰기로 짝 맞추기"
      ]
     ]
    }
   },
   {
    "h": "jQuery 가 조용히 실패하는 경우(에러 없음·동작 없음)",
    "li": [
     "head 에서 `$('.menu')` 를 ready 없이 실행 → 빈 집합이라 ★오류 없이 이벤트가 안 붙는다★.",
     "처방: `$(function(){ … });` (= `$(document).ready(...)`) 로 감싼다.",
     "선택자 오타도 빈 집합 → 오류 0 이어도 ★기능 미구현 감점★. 동작 자체를 눈으로 확인."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-4",
  "t": "접근성·Tab 이동",
  "title": "접근성 — alt · 임시링크 # · Tab 이동 · CSS off",
  "ref": "공개문제 기술적 준수사항 4·7·9",
  "body": [
   {
    "h": "준수사항 원칙(재서술)",
    "li": [
     "로고·메뉴·버튼·바로가기 등 상호작용 요소는 ★임시 링크 `#`★ 을 걸고 ★Tab 키로 이동·선택★ 되어야 한다.",
     "★모든 이미지에 alt★ — 의미 있는 이미지는 내용 대체 텍스트, 장식은 `alt=\"\"`.",
     "CSS 를 ★사용 안 함★ 으로 보면 콘텐츠가 ★세로로 나열★ — 문서 순서가 논리적이어야 한다."
    ]
   },
   {
    "h": "Tab 으로 포커스가 가는 것 / 안 가는 것",
    "tb": {
     "head": [
      "요소",
      "Tab 포커스",
      "비고"
     ],
     "rows": [
      [
       "`<a href=\"#\">`",
       "★간다★",
       "href 가 있어야 링크"
      ],
      [
       "`<a>` (href 없음)",
       "안 간다",
       "임시링크 # 필수 이유"
      ],
      [
       "`<button type=\"button\">`",
       "간다",
       "팝업 닫기에 적합"
      ],
      [
       "`<select>`·`<input>`",
       "간다",
       "패밀리사이트 select"
      ],
      [
       "`<div onclick>`·`<li>`",
       "안 간다",
       "tabindex=\"0\" 로 보완 가능하나 a/button 권장"
      ]
     ]
    }
   },
   {
    "h": "접근성 실수",
    "li": [
     "`a{outline:none}` — 포커스 테두리 제거 → 키보드 사용자가 위치를 못 봄. ★지우지 않는다★.",
     "hover 로만 서브메뉴 열기 → 키보드 접근 보완은 `focusin`/`focusout` 병행(채점 반영 여부 [확인필요]).",
     "`#` 링크 클릭 시 화면 맨 위로 튐 → 팝업·탭 핸들러에 `return false` 또는 `e.preventDefault()`.",
     "패밀리사이트 `<select>` 는 `<label>` 또는 `title` 속성으로 이름을 준다.",
     "텍스트 콘텐츠(공지·배너 문구)를 ★이미지로 통째 삽입 금지★ — HTML 텍스트로 코딩."
    ]
   },
   {
    "h": "CSS off 세로 나열 점검법",
    "li": [
     "시험장 Chrome 에 CSS 끄기 버튼은 없다 → `<link>` 를 잠깐 주석 처리해 보고 ★반드시 복원★.",
     "순서가 헤더 → 슬라이드 → 콘텐츠 → 푸터 로 읽히면 통과. 팝업 마크업은 문서 끝에 두면 흐름을 깨지 않는다."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-5",
  "t": "경로·파일·용량",
  "title": "상대경로 · 파일명 · 폴더 · 10MB",
  "ref": "공개문제 제출방법·실격 사유",
  "body": [
   {
    "h": "제출 구조",
    "li": [
     "바탕화면 `{비번호}` 폴더 → 최상위 `index.html` + `css/` `script/` `images/` 분류 폴더.",
     "index.html 이 참조하는 ★모든 리소스 포함★, ★채점위원 PC 에서 정상 동작★ → 상대경로.",
     "★10MB 초과 = 작업범위 초과(실격 사유)★. `.psd`·`.ai` 등 웹 미사용 파일 ★제출 금지★.",
     "★압축 파일 제출 = 실격★. ★비번호 폴더 저장 실패 = 실격★."
    ]
   },
   {
    "h": "경로 규칙",
    "tb": {
     "head": [
      "어디서",
      "무엇을",
      "경로"
     ],
     "rows": [
      [
       "index.html",
       "CSS",
       "`css/style.css`"
      ],
      [
       "index.html",
       "이미지",
       "`images/logo.png`"
      ],
      [
       "css/style.css",
       "배경 이미지",
       "`../images/bg.jpg` (★CSS 파일 기준★)"
      ],
      [
       "script/script.js",
       "(JS 안 경로)",
       "★HTML 문서 기준★으로 해석"
      ],
      [
       "어디서든",
       "금지",
       "`C:\\Users\\…`·`file:///`·CDN `https://…`"
      ]
     ]
    }
   },
   {
    "h": "파일명 원칙",
    "li": [
     "★영문 소문자·숫자·하이픈/언더바★ — 한글·공백·특수문자 지양.",
     "HTML 속 이름과 실제 파일명의 ★대소문자·확장자★ 까지 일치(`Logo.PNG` vs `logo.png`, `.jpg` vs `.jpeg`). 채점 환경에 따라 대소문자 구분이 깨짐 원인이 된다.",
     "jQuery 파일명도 실제 제공 파일명 그대로(버전 문자열 포함) — 제공 버전 [확인필요]."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-6",
  "t": "이미지 가공(포토샵·일러)",
  "title": "포토샵 — 로고·슬라이드·회색 로고 가공",
  "ref": "출제기준 3·4 디자인구성요소 설계·제작",
  "body": [
   {
    "h": "새 문서·크기",
    "li": [
     "새 문서: 단위 ★px★, 색상 모드 ★RGB★(CMYK 는 인쇄용), 해상도 72ppi 관행.",
     "이미지 크기(Image Size) = Alt+Ctrl+I — ★픽셀 수 자체를 바꿈(리샘플링)★, 비율 고정 체인 확인.",
     "캔버스 크기(Canvas Size) = Alt+Ctrl+C — 그림은 그대로, ★작업 영역만★ 늘리거나 자름.",
     "자유 변형 = Ctrl+T — 레이어 크기 조절 시 ★종횡비 유지★(로고 왜곡 = 감점 포인트)."
    ]
   },
   {
    "h": "로고 규격(명세)",
    "li": [
     "직접 디자인형: ★200×40px 워드타입★(심벌 없음) 또는 ★190×45(44)px 심벌+로고명★ — 과제별로 확인.",
     "제공 로고형: ★종횡비 유지★ 삽입, 일부 과제는 ★주제 색으로 색상 변경 필수★.",
     "배경이 비치는 로고 → ★투명 배경 PNG★."
    ]
   },
   {
    "h": "푸터 회색 로고 두 가지 방법",
    "tb": {
     "head": [
      "방법",
      "절차",
      "장단점"
     ],
     "rows": [
      [
       "포토샵",
       "이미지 › 조정 › 채도 감소(Shift+Ctrl+U) 또는 흑백 → 별도 파일 저장",
       "파일 1개 추가, 모든 브라우저 동일"
      ],
      [
       "CSS",
       "`filter:grayscale(100%);`",
       "파일 추가 없음, 같은 로고 재사용"
      ]
     ]
    }
   },
   {
    "h": "슬라이드 이미지",
    "li": [
     "제공 이미지 3장을 ★슬라이드 영역 치수★(예: 1200×300 계열 — 과제 와이어프레임 값)에 맞춰 자르기(C)·크기 조정.",
     "제공 텍스트 3개는 ★이미지에 적용★ — 포토샵 텍스트 합성 또는 HTML 텍스트를 이미지 위에 absolute 로 겹침."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-7",
  "t": "이미지 가공(포토샵·일러)",
  "title": "저장 형식 · 일러스트 로고 · 용량 최적화",
  "ref": "출제기준 4-4 매체성 구성요소 제작",
  "body": [
   {
    "h": "형식 선택",
    "tb": {
     "head": [
      "형식",
      "특성",
      "시험 용도"
     ],
     "rows": [
      [
       "JPG",
       "손실 압축, 사진에 유리, ★투명 불가★",
       "슬라이드·갤러리 사진"
      ],
      [
       "PNG-24",
       "무손실, ★알파 투명★ 지원",
       "로고·아이콘(투명 배경)"
      ],
      [
       "PNG-8 / GIF",
       "최대 256색, 단순 그래픽",
       "단색 아이콘(GIF 애니메이션 사용은 피함)"
      ],
      [
       "PSD / AI",
       "원본 편집 파일",
       "★제출 금지★(용량·웹 미사용)"
      ]
     ]
    }
   },
   {
    "h": "포토샵 웹 저장",
    "li": [
     "웹용으로 저장(레거시) = ★Alt+Shift+Ctrl+S★ — 형식·품질·크기를 미리보며 저장.",
     "내보내기 형식(Export As) = Alt+Shift+Ctrl+W (CC 계열).",
     "JPG 품질을 60~80 수준으로 낮춰도 화면 차이는 작고 용량은 크게 준다 — 수치는 이미지별로 미리보기 판단."
    ]
   },
   {
    "h": "일러스트레이터 로고",
    "li": [
     "대지(Artboard)를 ★200×40 px★ 등 과제 규격으로 생성, RGB.",
     "로고 문자 → ★윤곽선 만들기(Shift+Ctrl+O)★ — 다른 PC 에 폰트가 없어도 모양 유지.",
     "내보내기 › PNG(배경 투명·72ppi) 또는 웹용으로 저장 → `images/logo.png`.",
     "`.ai` 원본은 작업용 — ★제출 폴더에 넣지 않는다★."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-8",
  "t": "시간 배분·작업 순서",
  "title": "3시간 시간 배분과 작업 순서(권장안)",
  "ref": "명세 3.8 권장안 — 공식 배분 아님",
  "body": [
   {
    "h": "타임라인(권장안)",
    "tb": {
     "head": [
      "구간",
      "작업",
      "산출"
     ],
     "rows": [
      [
       "0:00–0:10",
       "문제 분석(레이아웃 계열·메뉴 방식·슬라이드 방향·탭/별도·모달) + 폴더 생성",
       "비번호/css/script/images"
      ],
      [
       "0:10–0:40",
       "포토샵·일러: 로고, 슬라이드 3장, 회색 로고, 배너·바로가기",
       "images/*"
      ],
      [
       "0:40–1:30",
       "HTML 구조 + CSS 레이아웃(치수 정확히)",
       "index.html, style.css"
      ],
      [
       "1:30–2:20",
       "JS: 메뉴 → ★슬라이드(최우선)★ → 탭 → 팝업",
       "script.js"
      ],
      [
       "2:20–2:45",
       "디자인 다듬기(텍스트 위계·색)",
       "—"
      ],
      [
       "2:45–3:00",
       "최종 점검·저장·★미압축★",
       "제출"
      ]
     ]
    }
   },
   {
    "h": "우선순위 원칙",
    "li": [
     "★실격 방지★(슬라이드 동작·비번호 폴더 저장·10MB·미압축) > ★레이아웃 일치★ > ★기능★(메뉴·탭·팝업) > ★디자인★.",
     "슬라이드를 JS·CSS 로 움직이지 않으면 ★실격★ — 멈춘 이미지 1장 배치도 실격. 시간이 모자라면 슬라이드부터 살린다.",
     "과제 기준 ★20% 이상 미완성 = 실격★(채점위원 판단) — 디테일보다 ★전 영역 골격 완성★이 먼저.",
     "시간 초과(3h)도 작업범위 초과 실격 사유 — 마지막 15분은 점검 전용으로 남긴다."
    ]
   },
   {
    "h": "중간 저장 습관",
    "li": [
     "처음부터 ★바탕화면 비번호 폴더 안에서 직접 작업★ — 마지막에 옮기다 누락·오타 방지.",
     "Ctrl+S 수시 저장, 브라우저 새로고침(F5)으로 확인 반복."
    ]
   }
  ]
 },
 {
  "s": "s6",
  "no": "6-9",
  "t": "제출 전 최종점검",
  "title": "제출 전 체크리스트",
  "ref": "공개문제 기술적 준수사항·제출방법·실격 사유 종합",
  "body": [
   {
    "h": "순서대로 점검",
    "li": [
     "① Chrome 으로 index.html 열고 ★Console 오류 0★(새로고침 + 메뉴·슬라이드·탭·팝업 모두 동작).",
     "② 기능 요구: 메뉴 부드럽게, 슬라이드 ★자동 시작·3초 이내·무한 반복★·방향, 첫 글 팝업·닫기, 탭.",
     "③ 표준: DOCTYPE·charset·title·alt 전수·중복 id·태그 짝 — 눈으로 스캔.",
     "④ 접근성: Tab 키로 로고→메뉴→콘텐츠 링크→푸터 이동, 모든 상호작용 요소 `#`.",
     "⑤ 경로: 절대경로·CDN 없음, 파일명 대소문자 일치, 깨진 이미지 없음.",
     "⑥ 폴더: 바탕화면 비번호 폴더, 최상위 index.html, css/script/images.",
     "⑦ 정리: psd·ai·사용 안 한 이미지 삭제 → ★10MB 이하★ 확인(폴더 속성).",
     "⑧ ★압축하지 않고★ 그대로 제출."
    ]
   },
   {
    "h": "요구사항 대조",
    "li": [
     "배경 #ffffff · 기본 텍스트 #333333 · 레이아웃 table 미사용 · CSS/JS 외부 파일.",
     "와이어프레임 치수(px·100%·정렬 방향), 갤러리 가로 3개, 푸터 로고 grayscale.",
     "제공 텍스트 오탈자 수정 여부(유의사항: 참고자료 오탈자는 수정해 작업)."
    ]
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "규정·태그·속성 단일 사실 — 반드시 맞혀야 하는 문항",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "코드 패턴 구분·순서 — 합격선을 가르는 문항",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "오류 찾기·응용 구현 — 변별력 문항",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "웹디자인개발기능사 실기(2025년 제1회부터 적용)의 시험시간은?",
  "c": [
   "2시간",
   "3시간",
   "4시간",
   "5시간"
  ],
  "a": 1,
  "e": "2025년 종목 개편(웹디자인기능사→웹디자인개발기능사)과 함께 3시간으로 줄었다. 4시간은 개편 전 웹디자인기능사 기준이다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "시험장 시설목록 소프트웨어 중 사용이 금지된 것은?",
  "c": [
   "Notepad++",
   "Visual Studio Code",
   "Dreamweaver",
   "Illustrator"
  ],
  "a": 2,
  "e": "시설목록에서 Dreamweaver는 '사용 불가'로 명시된다. VS Code·Notepad++·Illustrator는 필수 설치 항목이다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "실기 시험장 환경에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "HTML 유효성검사 서비스는 시험 시 제공되지 않는다",
   "제공된 jQuery 파일을 로컬로 연결해 사용할 수 있다",
   "인터넷이 차단되어 온라인 Validator를 쓸 수 없다",
   "jQuery는 공식 CDN 주소로 연결하는 것이 원칙이다"
  ],
  "a": 3,
  "e": "시험장은 인터넷이 차단되어 CDN이 동작하지 않고 채점 PC에서도 정상 동작을 보장할 수 없다. jQuery는 제공 파일을 상대경로로 연결한다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "레이아웃·크기·위치가 정상인지 판정하는 기준 브라우저는?",
  "c": [
   "최신 Google Chrome",
   "최신 Mozilla Firefox",
   "Microsoft Edge 레거시",
   "Internet Explorer 11"
  ],
  "a": 0,
  "e": "준수사항은 최신 Chrome에서 레이아웃·크기·위치가 정상일 것을 요구하고, JS 오류도 Chrome 개발자도구 Console로 판정한다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 2,
  "q": "시설목록 소프트웨어 중 '선택 설치'로 분류된 것은?",
  "c": [
   "EditPlus",
   "Photoshop",
   "Notepad++",
   "Google Chrome"
  ],
  "a": 0,
  "e": "EditPlus(3.0 이상)만 선택 설치다. Notepad++·Photoshop·Chrome은 필수 설치 항목이다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 2,
  "q": "시험장 반입·설치 규정에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "시설목록 외 정품 SW(폰트 제외)는 감독 입회하에 설치한다",
   "개인 이어폰은 반입할 수 없다",
   "수험표·신분증·필기도구를 지참한다",
   "본인 USB에 담은 코드 조각은 참고용으로 반입할 수 있다"
  ],
  "a": 3,
  "e": "USB 등 개인 저장·입력장치와 참고자료는 반입 불가다. 나머지 보기는 공개문제 유의사항과 일치한다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 3,
  "q": "웹디자인개발기능사 실기 출제기준(2025.1.1~2027.12.31)의 주요항목에 해당하지 않는 것은?",
  "c": [
   "구현 응용",
   "디자인구성요소설계",
   "서버 구축 및 데이터베이스 연동",
   "프로토타입 제작 및 사용성 테스트"
  ],
  "a": 2,
  "e": "실기 주요항목은 프로토타입 기초데이터 수집·스케치, 프로토타입 제작·사용성 테스트, 디자인구성요소 설계·제작, 구현, 구현 응용의 6개다. 서버·DB 연동은 포함되지 않는다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "완성 작품을 저장·제출하는 폴더의 이름으로 옳은 것은?",
  "c": [
   "과제명",
   "비번호",
   "수험자 성명",
   "수험번호"
  ],
  "a": 1,
  "e": "바탕화면에 비번호 폴더를 만들어 저장한다. 비번호 폴더에 저장하지 못하면 실격 사유다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "메인페이지 index.html의 올바른 위치는?",
  "c": [
   "비번호 폴더의 최상위",
   "비번호 폴더 밖 바탕화면",
   "css 폴더 안",
   "images 폴더 안"
  ],
  "a": 0,
  "e": "index.html은 비번호 폴더 최상위에 두고, images·script·css 같은 분류 폴더를 함께 포함한다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "제출 폴더에 포함하면 안 되는 파일은?",
  "c": [
   "style.css",
   "logo.psd",
   "slide1.jpg",
   "script.js"
  ],
  "a": 1,
  "e": "psd·ai 등 웹에서 사용하지 않는 원본 파일은 제출 금지이며 10MB 초과의 주원인이다. css·js·jpg는 index.html이 참조하는 리소스다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "<img src=\"C:/Users/me/Desktop/01/images/logo.png\" alt=\"로고\"> 의 문제로 옳은 것은?",
  "c": [
   "img 태그에는 src 대신 href를 써야 한다",
   "alt 값은 영문으로만 써야 한다",
   "경로 구분자는 반드시 역슬래시(\\)를 써야 한다",
   "절대경로라서 채점위원 PC에서 이미지가 깨질 수 있다"
  ],
  "a": 3,
  "e": "채점위원 PC에서 정상 동작해야 하므로 images/logo.png 같은 상대경로를 쓴다. 웹 경로 구분자는 슬래시(/)가 맞다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "제공 jQuery 파일과 직접 작성한 script.js를 연결하는 순서로 옳은 것은?",
  "c": [
   "순서와 무관하게 동작한다",
   "script.js → jQuery 파일",
   "jQuery 파일 → script.js",
   "script.js만 연결하면 jQuery가 자동 로드된다"
  ],
  "a": 2,
  "e": "script.js 안의 $ 코드는 jQuery가 먼저 로드되어야 동작한다. 순서가 바뀌면 '$ is not defined' Console 오류가 난다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "수험자 제공 파일 중 Slide 폴더의 구성은?",
  "c": [
   "동영상 1개 + 텍스트 3개",
   "이미지 3개 + 텍스트 3개",
   "이미지 3개만",
   "이미지 5개"
  ],
  "a": 1,
  "e": "Slide 폴더는 이미지 3개와 이미지에 적용할 텍스트 3개로 구성된다. 슬라이드도 3장이 기본이다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "제공 참고자료에 오탈자가 있을 때의 처리로 옳은 것은?",
  "c": [
   "감독에게 신고하고 교체를 기다린다",
   "원문 그대로 입력한다",
   "오탈자를 수정하여 작업한다",
   "해당 문장을 빼고 작업한다"
  ],
  "a": 2,
  "e": "공개문제 유의사항은 참고자료의 오탈자를 수정해 작업하도록 한다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 3,
  "q": "제출 직전 점검 행동으로 옳지 않은 것은?",
  "c": [
   "바탕화면 비번호 폴더에 저장됐는지 확인한다",
   "psd·ai 원본 파일을 폴더에서 삭제한다",
   "파일명 대소문자와 참조 경로를 일치시킨다",
   "용량을 줄이려고 비번호 폴더를 zip으로 압축한다"
  ],
  "a": 3,
  "e": "압축 파일 제출은 실격 사유다. 용량은 원본 삭제·이미지 웹용 저장으로 줄인다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "Footer 폴더 제공 텍스트에 해당하지 않는 것은?",
  "c": [
   "슬라이드 문구",
   "SNS",
   "패밀리사이트",
   "Copyright"
  ],
  "a": 0,
  "e": "Footer 폴더는 Copyright·SNS·하단메뉴·패밀리사이트 텍스트를 담는다. 슬라이드 문구는 Slide 폴더에 있다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "CSS 작성 방식 중 기술적 준수사항을 충족하지 않는 것은?",
  "c": [
   "head 안의 <style> 태그에 모든 스타일 작성",
   "외부 CSS 파일 하나에 모든 스타일 작성",
   "외부 CSS 파일을 둘로 나눠 각각 link로 연결",
   "css/style.css를 link 태그로 연결"
  ],
  "a": 0,
  "e": "준수사항은 CSS를 별도 파일로 링크하도록 한다. <style> 태그·style 속성은 문서 내부 작성이라 조건을 충족하지 못하며, 외부 파일 개수 제한은 없다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "JavaScript 동작의 오류 판정 기준으로 옳은 것은?",
  "c": [
   "Firefox 콘솔 WARNING 0",
   "alert 창이 한 번 이상 뜰 것",
   "Chrome 개발자도구 Console에서 ERROR 0",
   "W3C CSS validator ERROR 0"
  ],
  "a": 2,
  "e": "JS는 별도 파일로 연결하고 Chrome 개발자도구 Console에 ERROR가 없어야 한다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "로고·메뉴·버튼·바로가기 같은 상호작용 요소의 처리 기준은?",
  "c": [
   "링크 없이 div에 click 이벤트만 연결한다",
   "마우스로만 동작하면 충분하다",
   "실제 외부 사이트 URL을 연결한다",
   "임시링크(#)를 걸고 Tab 키로 이동·선택 가능하게 한다"
  ],
  "a": 3,
  "e": "상호작용 요소는 href=\"#\" 임시링크로 Tab 이동·선택이 가능해야 한다. div는 기본적으로 Tab 포커스를 받지 않는다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "기술적 준수사항상 전체 레이아웃 구성에 사용하면 안 되는 것은?",
  "c": [
   "float",
   "table 태그",
   "position",
   "display:flex"
  ],
  "a": 1,
  "e": "전체 레이아웃은 table 태그 없이 CSS로 구성해야 한다. flex·float·position은 CSS 레이아웃 수단이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "브라우저에서 CSS를 '사용 안 함'으로 했을 때 요구되는 상태는?",
  "c": [
   "모든 이미지가 숨겨진다",
   "레이아웃이 그대로 유지된다",
   "콘텐츠가 논리적 순서로 세로 나열된다",
   "빈 화면이 표시된다"
  ],
  "a": 2,
  "e": "CSS 해제 시 콘텐츠가 세로로 나열되어야 하므로 마크업 순서를 논리적으로 작성해야 한다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "24과제 공통 컬러 조건으로 옳은 것은?",
  "c": [
   "배경 #ffffff, 기본 텍스트 #333333",
   "배경 #000000, 기본 텍스트 #ffffff",
   "배경 #f5f5f5, 기본 텍스트 #000000",
   "배경·기본 텍스트 모두 수험자 자유"
  ],
  "a": 0,
  "e": "배경색 #ffffff, 기본 텍스트 #333333이 공통 조건이다. 수험자가 정하는 것은 주조색·보조색이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "공지사항 콘텐츠 제작 방식으로 옳은 것은?",
  "c": [
   "공지 영역을 포토샵으로 만들어 이미지 1장으로 넣는다",
   "공지 내용을 캡처 이미지로 넣고 alt에 글을 쓴다",
   "공지 텍스트를 CSS content 속성으로만 출력한다",
   "제공 텍스트를 HTML 목록으로 코딩한다"
  ],
  "a": 3,
  "e": "공지·배너·바로가기 등 콘텐츠는 HTML로 코딩해야 하며 이미지로 통째 삽입하면 안 된다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 3,
  "q": "다음 중 기술적 준수사항 위반이 아닌 것은?",
  "c": [
   "메뉴 항목을 span으로만 만들어 Tab 이동 불가",
   "슬라이드를 CSS @keyframes만으로 구현",
   "script.js 대신 body 끝 <script> 태그에 코드 작성",
   "갤러리 img의 alt 속성 생략"
  ],
  "a": 1,
  "e": "슬라이드는 JS·CSS 중 하나 이상으로 만들면 되므로 CSS 애니메이션도 인정된다. alt 누락·인라인 스크립트·Tab 불가는 각각 준수사항 위반이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "<meta charset=\"____\"> 빈칸에 들어갈 공통 문자셋은?",
  "c": [
   "utf-8",
   "iso-8859-1",
   "ks_c_5601-1987",
   "euc-kr"
  ],
  "a": 0,
  "e": "HTML·CSS 모두 charset utf-8이 공통 조건이다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 1,
  "q": "공개문제에 명시된 실격 사유에 해당하지 않는 것은?",
  "c": [
   "압축 파일로 제출한 경우",
   "W3C CSS validator에서 WARNING이 나온 경우",
   "Slide를 JS·CSS로 제작하지 않은 경우",
   "비번호 폴더에 저장하지 못한 경우"
  ],
  "a": 1,
  "e": "WARNING은 실격 사유가 아니다(ERROR도 감점 대상). 압축 제출·비번호 폴더 저장 실패·슬라이드 미제작은 실격 6사유에 포함된다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "다음 중 실격에 해당하는 슬라이드 처리는?",
  "c": [
   "순수 JS setInterval로 세로 이동",
   "jQuery animate로 가로 이동",
   "CSS keyframes로 fade 전환",
   "움직이지 않는 이미지 1장만 배치"
  ],
  "a": 3,
  "e": "Slide를 JS(jQuery 포함)·CSS 중 하나 이상으로 제작하지 않으면 실격이며, 정지 이미지 1장 배치도 이에 해당한다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "'작업범위 초과' 실격 기준에 해당하는 것은?",
  "c": [
   "CSS 파일 1,000줄 초과",
   "이미지 파일 5장 초과",
   "제출 용량 10MB 초과",
   "HTML 파일 3개 이상 제출"
  ],
  "a": 2,
  "e": "작업범위 초과는 용량 10MB 초과와 시험시간 3시간 초과를 말한다. 파일 개수·줄 수 제한은 없다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "미완성으로 실격 처리되는 기준은?",
  "c": [
   "과제 기준 10% 이상 미완성",
   "과제 기준 20% 이상 미완성",
   "과제 기준 30% 이상 미완성",
   "과제 기준 50% 이상 미완성"
  ],
  "a": 1,
  "e": "과제 기준 20% 이상 미완성이면 채점위원 판단으로 실격이다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 3,
  "q": "다른 수험자와 복사된 동일 작품이 발견된 경우의 처리로 옳은 것은?",
  "c": [
   "먼저 제출한 수험자만 인정",
   "나중에 제출한 수험자만 실격",
   "양쪽 모두 감점 후 채점",
   "관련 수험자 전원 부정행위 처리"
  ],
  "a": 3,
  "e": "복사된 동일 작품은 관련된 수험자 전원을 부정행위로 처리한다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "수험자 인적사항 기재에 대한 규정으로 옳은 것은?",
  "c": [
   "검은색 필기구만 사용하며 그 외 필기구는 0점",
   "연필로 적고 제출 전 덧쓰기",
   "파란색 필기구만 사용",
   "필기구 색 제한 없음"
  ],
  "a": 0,
  "e": "인적사항은 검은색 필기구로 기재하며 그 외 필기구 사용 시 0점 처리된다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 3,
  "q": "배점·감점에 관한 설명으로 옳은 것은?",
  "c": [
   "W3C 오류 1개당 감점 폭이 공개되어 있다",
   "슬라이드 항목 배점이 공개문제에 명시되어 있다",
   "항목별 배점표는 공식적으로 공개되지 않는다",
   "레이아웃 항목 배점이 공개문제에 명시되어 있다"
  ],
  "a": 2,
  "e": "공개문제·출제기준 어디에도 항목별 배점이 나오지 않는다. 떠도는 배점표는 비공식이므로 신뢰하지 않는다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "다음 중 실격이 아닌 감점 사유로 보는 것이 타당한 것은?",
  "c": [
   "zip 파일로 제출",
   "비번호 폴더 저장 실패",
   "서브메뉴를 show()/hide()로 즉시 표시",
   "수험 도중 기권"
  ],
  "a": 2,
  "e": "'부드럽게' 나타남 조건 미충족은 품질 문제로 감점 대상이다. 나머지는 실격 6사유다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 3,
  "q": "'요구사항과 현격히 다른 경우' 실격 여부를 판단하는 주체는?",
  "c": [
   "수험자 본인",
   "채점위원",
   "시험장 책임자 PC 로그",
   "시험장 자동채점 프로그램"
  ],
  "a": 1,
  "e": "요구사항과 현격히 다른 경우와 20% 이상 미완성은 채점위원 판단으로 실격 처리된다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 1,
  "q": "와이어프레임 Ⓒ Contents 영역에 배치되는 콘텐츠가 아닌 것은?",
  "c": [
   "공지사항",
   "갤러리",
   "바로가기",
   "로고와 메인메뉴"
  ],
  "a": 3,
  "e": "Ⓒ는 공지사항·갤러리·배너·바로가기 중 3~4개로 구성된다. 로고·메뉴는 Ⓐ Header 영역이다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 1,
  "q": "로고를 직접 디자인할 때 워드타입(심벌 없음) 로고의 규격은?",
  "c": [
   "200×40px",
   "250×50px",
   "300×60px",
   "100×20px"
  ],
  "a": 0,
  "e": "직접 디자인 워드타입 로고는 200×40px이다. 심벌+로고명 형은 190×45(44)px로 제시된다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "제공 로고 이미지 처리로 옳지 않은 것은?",
  "c": [
   "원본 종횡비를 유지해 배치한다",
   "영역 크기에 맞게 가로·세로 비율을 바꿔 채운다",
   "img의 alt에 로고명을 넣는다",
   "과제가 요구하면 주제 색상에 맞게 색을 변경한다"
  ],
  "a": 1,
  "e": "제공 로고는 종횡비를 유지해야 한다. 일부 과제는 색 변경을 요구하며, 모든 img에는 alt가 필요하다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "메뉴 영역 공통 요구사항으로 옳지 않은 것은?",
  "c": [
   "mouse over 시 메인메뉴 하이라이트, out 시 해제",
   "서브메뉴 영역의 배경색 지정",
   "서브메뉴 항목도 mouse over 하이라이트",
   "서브메뉴는 즉시 나타나고 즉시 사라지게 한다"
  ],
  "a": 3,
  "e": "서브메뉴는 '부드럽게' 나타나고 사라져야 한다(slideDown·fadeIn 등). 즉시 show/hide는 요구 불충족이다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "슬라이드 공통 요구사항으로 옳은 것은?",
  "c": [
   "페이지를 열면 자동 시작하고 마지막 이미지 후 첫 번째로 무한 반복",
   "마지막 이미지에서 정지한다",
   "5초 간격으로 전환한다",
   "버튼을 클릭해야 시작한다"
  ],
  "a": 0,
  "e": "슬라이드는 자동 시작·무한 반복이며 매 3초 이내에 전환된다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 1,
  "q": "슬라이드 이미지 전환 간격 조건은?",
  "c": [
   "1초 이내",
   "3초 이내",
   "5초 이내",
   "10초 이상"
  ],
  "a": 1,
  "e": "매 3초 이내에 다른 이미지로 전환되어야 한다. setInterval 주기를 3000ms 이하로 둔다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "공지사항에서 레이어 팝업을 여는 트리거는?",
  "c": [
   "더보기(+) 버튼 클릭",
   "페이지 로드 시 자동",
   "첫 번째 글 클릭",
   "마지막 글 클릭"
  ],
  "a": 2,
  "e": "공통 요구는 공지사항 첫 번째 글 클릭 시 레이어(모달) 팝업이 뜨는 것이다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "Ⓓ Footer 영역의 공통 구성에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "푸터 로고는 헤더 로고와 같은 컬러로 유지한다",
   "SNS·하단메뉴·패밀리사이트 중 과제별 조합을 배치한다",
   "대부분의 과제에서 푸터 로고를 무채색(grayscale)으로 처리한다",
   "Copyright 텍스트를 포함한다"
  ],
  "a": 0,
  "e": "대부분의 과제는 푸터 로고를 grayscale로 처리하도록 요구한다(filter:grayscale(100%) 또는 흑백 이미지)."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 3,
  "q": "공개문제 사이트맵의 메뉴 구성 범위로 옳은 것은?",
  "c": [
   "메인메뉴 2~3개 × 서브메뉴 5~6개",
   "메인메뉴 7~8개 × 서브메뉴 1개",
   "메인메뉴 3개 고정 × 서브메뉴 3개 고정",
   "메인메뉴 4~5개 × 서브메뉴 2~4개"
  ],
  "a": 3,
  "e": "24과제 사이트맵은 메인메뉴 4~5개, 각 서브메뉴 2~4개 범위로 구성된다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 1,
  "q": "레이아웃 계열 L1(과제 1~4)의 전체 폭·정렬은?",
  "c": [
   "100% 폭",
   "1340px 가운데정렬",
   "1200px 가운데정렬",
   "1000px 왼쪽정렬"
  ],
  "a": 2,
  "e": "L1은 1200px 가운데정렬에 상단 헤더 구조다. 1000px 왼쪽정렬은 L3, 1340px은 L6이다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "L2(과제 5~8)가 L1과 구별되는 점은?",
  "c": [
   "슬라이드가 풀높이",
   "좌측 세로 헤더",
   "전체 폭 1000px 왼쪽정렬",
   "Ⓐ·Ⓓ 영역만 폭 100%(내부는 1200 가운데)"
  ],
  "a": 3,
  "e": "L2는 L1 구조에 Header·Footer 배경 띠만 100%로 늘리고 내부 콘텐츠는 1200px 가운데로 둔다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "1000px 왼쪽정렬에 좌측 세로 헤더(로고+세로메뉴) 구조인 계열은?",
  "c": [
   "L1(과제 1~4)",
   "L3(과제 9~12)",
   "L4(과제 13~16)",
   "L6(과제 21~24)"
  ],
  "a": 1,
  "e": "L3이 1000px 왼쪽정렬 + 좌측 세로 헤더다. L4는 100% 폭에 좌측 200px 헤더다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "L4에서 좌측 200px 헤더 옆 우측 영역의 폭 지정으로 옳은 것은?",
  "c": [
   "width:calc(100% - 200px);",
   "width:calc(100%-200px);",
   "width:calc(100% - 200);",
   "width:100% - 200px;"
  ],
  "a": 0,
  "e": "calc 안의 +·- 연산자는 양옆 공백이 필수이고 값에는 단위가 있어야 한다. 공백·단위 누락은 CSS 오류다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 3,
  "q": "'높이 100% − 120px' 영역을 뷰포트 기준으로 구현한 것으로 옳은 것은?",
  "c": [
   "height:100vh-120px;",
   "height:calc(100vh - 120);",
   "height:calc(100vh - 120px);",
   "height:calc(100vh-120px);"
  ],
  "a": 2,
  "e": "calc(100vh - 120px)가 올바르다. 공백 누락·calc 없는 식·단위 누락은 무효 값이다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "고정폭 컨테이너를 가운데 정렬하는 CSS로 옳은 것은?",
  "c": [
   "width:1200px; margin:auto 0;",
   "width:1200px; text-align:center;",
   "width:1200px; margin:0 auto;",
   "width:1200px; float:center;"
  ],
  "a": 2,
  "e": "블록 요소는 폭을 지정하고 좌우 margin을 auto로 둔다. text-align은 인라인 콘텐츠 정렬이고 float:center는 없는 값이다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 3,
  "q": "좌측 세로 헤더 구조가 아닌 레이아웃 계열은?",
  "c": [
   "L3",
   "L5",
   "L4",
   "L6"
  ],
  "a": 3,
  "e": "좌측 세로 헤더는 L3·L4·L5(과제 9~20)다. L6은 상단 헤더 1340px 가운데정렬이다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "좌측 세로 헤더 과제(9~20)에서 나타나지 않는 메뉴 방식은?",
  "c": [
   "M1 개별 드롭다운(메뉴 아래로)",
   "M4 세로메뉴 제자리 펼침",
   "M5 세로메뉴 우측 플라이아웃",
   "M6 세로메뉴 + 우측 전체 서브 패널"
  ],
  "a": 0,
  "e": "세로 헤더 과제는 M4·M5·M6을 쓴다(와이어프레임 판독 기준). M1은 상단 헤더 과제(3·7·21·22)의 방식이다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "공개문제 메뉴 방식에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "M4는 세로메뉴가 제자리에서 아래로 펼쳐진다",
   "M5 플라이아웃은 세로메뉴가 제자리에서 아래로 펼쳐진다",
   "M3는 슬라이드 위를 덮는 전체폭 띠에 서브가 나타난다",
   "M1 개별 드롭다운은 해당 메뉴 아래에만 서브가 나타난다"
  ],
  "a": 1,
  "e": "M5 플라이아웃은 세로메뉴의 오른쪽으로 서브가 펼쳐진다. 제자리에서 아래로 펼쳐지는 것은 M4 아코디언형이다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "개별 드롭다운(M1) 메뉴의 mouseenter 처리 코드로 옳은 것은?",
  "c": [
   "$(this).children('.sub').css('slide','down');",
   "$(this).children('.sub').slideDown(200).stop();",
   "$(this).parent('.sub').stop().slideDown(200);",
   "$(this).children('.sub').stop().slideDown(200);"
  ],
  "a": 3,
  "e": "진행 중 애니메이션을 먼저 멈추고(stop) 해당 li의 자식 .sub를 slideDown한다. slideDown 뒤 stop은 방금 시작한 애니메이션을 끊는다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "메뉴 hover 코드에서 .stop()을 빼먹었을 때 나타나는 현상은?",
  "c": [
   "서브메뉴가 전혀 나타나지 않는다",
   "마우스를 여러 번 오가면 애니메이션이 쌓여 계속 오르내린다",
   "Console에 문법 오류가 표시된다",
   "서브메뉴가 즉시(애니메이션 없이) 나타난다"
  ],
  "a": 1,
  "e": "stop() 없이 이벤트가 반복되면 애니메이션 큐가 누적되어 메뉴가 떨린다. 문법 오류는 아니다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 1,
  "q": "슬라이드 구현 방법에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "가로 이동형은 슬라이드 영역에 overflow:hidden을 준다",
   "세로 이동형은 ul의 marginTop 또는 top 값을 바꾼다",
   "Fade 슬라이드는 li를 float:left로 나열하고 marginLeft를 이동한다",
   "Fade 슬라이드는 li를 position:absolute로 같은 자리에 겹친다"
  ],
  "a": 2,
  "e": "fade는 이동이 아닌 투명도 전환이므로 이미지를 한 자리에 겹쳐 두고 fadeOut/fadeIn한다. float 나열 + marginLeft 이동은 가로 슬라이드 방식이다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "슬라이드 3장을 무한 반복시키는 인덱스 갱신 코드로 옳은 것은?",
  "c": [
   "i = (i + 1) % 3;",
   "i = (i + 1) / 3;",
   "i = i + 1;",
   "i = (i - 1) % 3;"
  ],
  "a": 0,
  "e": "나머지 연산으로 0→1→2→0 순환한다. i+1만 하면 3 이후 빈 화면이 된다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 1,
  "q": "공개문제 슬라이드 전환 방식 3종에 해당하지 않는 것은?",
  "c": [
   "가로 이동",
   "Fade-in/Fade-out",
   "세로 이동",
   "3D 회전(flip)"
  ],
  "a": 3,
  "e": "24과제의 슬라이드는 세로·가로·Fade 세 가지로만 구성된다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 3,
  "q": "높이 300px 세로 슬라이드에서 세 번째 이미지를 보이게 하는 코드로 옳은 것은?",
  "c": [
   "$('.slide ul').animate({marginTop:-300}, 600);",
   "$('.slide ul').animate({marginLeft:-600}, 600);",
   "$('.slide ul').animate({marginTop:-600}, 600);",
   "$('.slide ul').animate({marginTop:-900}, 600);"
  ],
  "a": 2,
  "e": "세 번째 장은 인덱스 2이므로 -2×300 = -600px이다. marginLeft는 가로 슬라이드용이다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 1,
  "q": "가로·세로 이동형 슬라이드 영역에 반드시 필요한 CSS는?",
  "c": [
   "z-index:-1",
   "overflow:hidden",
   "display:inline",
   "overflow:visible"
  ],
  "a": 1,
  "e": "이동형은 나열된 이미지가 영역 밖으로 보이지 않도록 overflow:hidden이 필요하다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 3,
  "q": "슬라이드 3장 기준으로 '3초 이내 전환' 조건을 위반하는 것은?",
  "c": [
   "setInterval(next, 4000);",
   "animation: slide 9s infinite;",
   "setInterval(next, 2500);",
   "setInterval(next, 3000);"
  ],
  "a": 0,
  "e": "4초 주기는 조건 위반이다. 9초 애니메이션을 3장으로 나누면 장당 3초라 조건을 만족한다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "탭 전환 코드에서 클릭한 탭의 순번을 구하는 jQuery 메서드는?",
  "c": [
   "$(this).size()",
   "$(this).index()",
   "$(this).eq()",
   "$(this).length"
  ],
  "a": 1,
  "e": "index()는 형제 중 순번(0부터)을 반환한다. size()는 jQuery 3.0에서 제거되었고 length는 개수, eq()는 순번으로 요소를 고른다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "모달 레이어 팝업의 배경 덮개 CSS로 옳은 것은?",
  "c": [
   "position:relative; width:50%; background:#000;",
   "position:static; inset:0; background:rgba(0,0,0,.5);",
   "float:left; width:100%; opacity:0;",
   "position:fixed; inset:0; background:rgba(0,0,0,.5);"
  ],
  "a": 3,
  "e": "모달 덮개는 화면 전체를 고정 덮는 fixed + inset:0 + 반투명 배경이다. static은 위치 지정이 적용되지 않는다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "공지 첫 글(a href=\"#\")을 클릭해 팝업을 열면 화면이 맨 위로 튀는 원인은?",
  "c": [
   "팝업이 display:none으로 시작한다",
   "팝업의 z-index가 너무 크다",
   "클릭 핸들러에 return false(또는 preventDefault)가 없다",
   "jQuery를 script.js보다 먼저 연결했다"
  ],
  "a": 2,
  "e": "# 링크의 기본 동작(문서 맨 위 이동)을 막지 않아서다. 나머지는 정상 설정이다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 3,
  "q": "다음 과제 중 팝업이 '모달' 레이어 팝업이 아닌 것은?",
  "c": [
   "과제 1",
   "과제 8",
   "과제 6",
   "과제 2"
  ],
  "a": 0,
  "e": "모달 과제는 2·6·8·10·12·14·17·18·20·22·24이다. 과제 1은 일반 레이어 팝업이다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "2026 공개문제 24과제 중 공지·갤러리를 탭으로 구성하는 과제 수는?",
  "c": [
   "6개",
   "8개",
   "12개",
   "16개"
  ],
  "a": 1,
  "e": "탭 과제는 1·3·5·9·13·15·21·23의 8개이고 나머지 16개는 별도 구성이다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "24과제의 슬라이드 방향 중 가장 많은 과제에서 쓰이는 방식은?",
  "c": [
   "세 방식이 같은 수",
   "Fade-in/Fade-out",
   "가로 이동",
   "세로 이동"
  ],
  "a": 2,
  "e": "가로 9과제, Fade 8과제, 세로 7과제다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 3,
  "q": "시험 시작 직후 과제 분석에서 확인할 '변형 축'에 해당하지 않는 것은?",
  "c": [
   "레이아웃 계열",
   "메뉴 방식",
   "팝업(레이어/모달)",
   "본문 폰트 종류"
  ],
  "a": 3,
  "e": "변형 축은 레이아웃·메뉴·슬라이드 방향·탭/별도·팝업 5가지다. 폰트는 과제 유형을 가르는 축이 아니다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "푸터 패밀리사이트를 구성할 때 흔히 쓰는 폼 요소는?",
  "c": [
   "<select>",
   "<textarea>",
   "<input type=\"file\">",
   "<progress>"
  ],
  "a": 0,
  "e": "패밀리사이트는 select(+label/title)로 목록을 선택하게 구성하는 경우가 많다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 3,
  "q": "팝업 닫기 버튼 마크업으로 가장 적절한 것은?",
  "c": [
   "<input type=\"submit\" value=\"닫기\">",
   "<div class=\"close\">닫기<\/div>",
   "<button type=\"button\" class=\"close\">닫기<\/button>",
   "<a class=\"close\">닫기<\/a>"
  ],
  "a": 2,
  "e": "button type=\"button\"은 Tab 포커스를 받고 폼 전송을 일으키지 않는다. href 없는 a와 div는 Tab 이동이 안 된다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "HTML5 문서의 첫 줄에 작성하는 문서 형식 선언으로 옳은 것은?",
  "c": [
   "<doctype html5>",
   "<?xml version=\"1.0\"?>",
   "<!DOCTYPE html>",
   "<html5>"
  ],
  "a": 2,
  "e": "HTML5 표준 모드 선언은 `<!DOCTYPE html>` 하나다. `<html5>`·`<doctype html5>` 같은 태그는 존재하지 않고, XML 선언은 HTML 문서의 형식 선언이 아니다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "한국어 문서임을 알리는 html 태그 작성으로 옳은 것은?",
  "c": [
   "<html lang=\"kr\">",
   "<html language=\"ko\">",
   "<html charset=\"ko\">",
   "<html lang=\"ko\">"
  ],
  "a": 3,
  "e": "언어 지정 속성은 lang, 한국어 언어 코드는 ko다. kr은 국가 코드이고, language·charset은 html 요소의 언어 속성이 아니다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "문자 인코딩을 UTF-8로 선언하는 코드로 옳은 것은?",
  "c": [
   "<meta charset=\"utf-8\">",
   "<meta lang=\"utf-8\">",
   "<meta encoding=\"utf-8\">",
   "<charset>utf-8<\/charset>"
  ],
  "a": 0,
  "e": "HTML5의 인코딩 선언은 `<meta charset=\"utf-8\">`다. encoding·lang 속성이나 charset 태그는 인코딩 선언이 아니다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "head 요소 안에 작성하기에 옳지 않은 것은?",
  "c": [
   "<link rel=\"stylesheet\" href=\"css/style.css\">",
   "<meta charset=\"utf-8\">",
   "<title>과제명<\/title>",
   "<h1><img src=\"images/logo.png\" alt=\"로고명\"><\/h1>"
  ],
  "a": 3,
  "e": "화면에 보이는 로고·제목 콘텐츠는 body에 둔다. title·link·meta는 문서 정보라 head에 두는 것이 맞다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 3,
  "q": "W3C HTML 검사에서 경고가 아닌 ERROR로 판정되는 것은?",
  "c": [
   "script 태그에 type=\"text/javascript\"를 적었다",
   "section 안에 제목 요소가 없다",
   "html 태그에 lang 속성이 없다",
   "head 안에 title 요소가 없다"
  ],
  "a": 3,
  "e": "title은 head의 필수 자식이라 누락 시 ERROR다. lang 누락·불필요한 type 속성·section 제목 없음은 경고 수준이라 ERROR 0 기준에 걸리지 않는다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "meta charset 요소의 배치로 가장 적절한 것은?",
  "c": [
   "title 뒤라면 문서 어디든 무관하다",
   "CSS 파일 안에만 작성하면 된다",
   "body의 마지막에 둔다",
   "head의 첫 자식으로 둔다"
  ],
  "a": 3,
  "e": "인코딩 선언은 문서 앞부분(1024바이트 이내)에 있어야 하므로 head 첫 자식이 정석이다. body 안이나 CSS 안의 선언은 HTML 문서의 인코딩을 정하지 못한다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 3,
  "q": "화면의 한글이 깨져 보일 때 원인으로 가장 거리가 먼 것은?",
  "c": [
   "파일을 EUC-KR로 저장하고 utf-8로 선언했다",
   "meta charset 선언을 빠뜨렸다",
   "html의 lang 값을 en으로 적었다",
   "charset 값을 uft-8로 오타 냈다"
  ],
  "a": 2,
  "e": "lang은 언어 정보일 뿐 문자 해석에 관여하지 않는다. 저장 인코딩 불일치·선언 누락·값 오타는 모두 브라우저가 문자를 잘못 해석하게 만든다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "title 요소의 역할로 옳은 것은?",
  "c": [
   "브라우저 탭과 즐겨찾기에 표시되는 문서 제목",
   "메인 메뉴의 제목",
   "로고 이미지의 대체 텍스트",
   "본문 최상단에 크게 보이는 제목"
  ],
  "a": 0,
  "e": "title은 head 안 문서 정보로 탭·즐겨찾기에 쓰인다. 본문 제목은 h1~h6, 이미지 대체 텍스트는 alt가 담당한다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "HTML 기본 골격에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "화면 콘텐츠는 body 안에 둔다",
   "html 요소의 자식은 head, body, footer 세 개다",
   "meta charset은 head 안에 둔다",
   "DOCTYPE 선언은 html 태그보다 앞에 온다"
  ],
  "a": 1,
  "e": "html의 자식은 head와 body 두 개뿐이고 footer는 body 안의 영역 태그다. 나머지는 골격 규칙 그대로다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "외부 CSS 파일을 연결하는 코드로 옳은 것은?",
  "c": [
   "<css href=\"css/style.css\">",
   "<style src=\"css/style.css\"><\/style>",
   "<link href=\"css/style.css\">",
   "<link rel=\"stylesheet\" href=\"css/style.css\">"
  ],
  "a": 3,
  "e": "외부 CSS는 link에 rel=\"stylesheet\"와 href를 함께 쓴다. rel이 없으면 스타일시트로 인식되지 않고, style의 src나 css 태그는 없는 문법이다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "외부 JS 파일을 연결하는 코드로 옳은 것은?",
  "c": [
   "<js src=\"script/script.js\"><\/js>",
   "<link rel=\"script\" href=\"script/script.js\">",
   "<script src=\"script/script.js\"><\/script>",
   "<script href=\"script/script.js\"><\/script>"
  ],
  "a": 2,
  "e": "외부 스크립트는 script의 src 속성으로 연결하고 닫는 태그를 쓴다. href는 link·a의 속성이고, link로는 스크립트를 실행할 수 없다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "Console에 `$ is not defined` 오류가 뜨는 원인으로 가장 적절한 것은?",
  "c": [
   "script.js를 jQuery 파일보다 먼저 불러왔다",
   "CSS를 JS보다 먼저 연결했다",
   "html에 lang 속성이 없다",
   "img에 alt가 없다"
  ],
  "a": 0,
  "e": "`$`는 jQuery가 정의하므로 jQuery가 먼저 로드되어야 한다. CSS 순서·lang·alt는 `$` 정의와 무관하다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "시험장에서 jQuery를 연결하는 방법으로 옳지 않은 것은?",
  "c": [
   "제공된 jQuery 파일을 script 폴더에 두고 상대경로로 연결한다",
   "src에는 제공 파일명을 그대로 적는다",
   "jQuery 파일을 script.js보다 먼저 연결한다",
   "CDN 주소(https://…)로 jQuery를 불러온다"
  ],
  "a": 3,
  "e": "시험장은 인터넷이 차단되어 CDN 로드가 실패하고 채점 PC 동작도 보장되지 않는다. 나머지는 로컬 연결의 정석이다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "script.js를 head에 연결했을 때 요소 선택이 실패하지 않게 하는 방법으로 옳은 것은?",
  "c": [
   "script 태그에 async만 붙인다",
   "script 태그에 type 속성을 추가한다",
   "코드를 `$(function(){ … });` 안에 작성한다",
   "CSS 파일을 먼저 연결한다"
  ],
  "a": 2,
  "e": "document ready 안의 코드는 DOM 생성 뒤 실행된다. async는 실행 순서를 보장하지 않고, CSS 순서나 type 속성은 실행 시점을 바꾸지 않는다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 3,
  "q": "외부 스크립트 연결에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "<\/body> 직전에 두면 DOM 생성 뒤 실행된다",
   "`<script src=\"a.js\" />`처럼 스스로 닫아도 된다",
   "defer는 외부 스크립트에 쓰며 문서 순서대로 실행된다",
   "JavaScript의 type 속성은 생략해도 된다"
  ],
  "a": 1,
  "e": "script는 빈 요소가 아니어서 `/>`로 닫히지 않고 뒤의 마크업을 스크립트로 삼킬 수 있다. defer·body 끝 배치·type 생략은 모두 올바른 설명이다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "기술 준수사항의 'CSS·JS 별도 파일' 조건에 가장 부합하지 않는 것은?",
  "c": [
   "HTML에는 class만 부여하고 모양은 CSS에서 준다",
   "이벤트를 script.js에서 선택자로 연결한다",
   "메뉴 동작을 `onmouseover=\"…\"` 속성으로 HTML에 작성한다",
   "모든 스타일을 css/style.css 한 파일에 작성한다"
  ],
  "a": 2,
  "e": "이벤트 속성은 JS를 HTML 안에 직접 쓰는 방식이라 별도 파일 조건에 어긋난다. 나머지는 구조·표현·동작을 파일로 분리한 방식이다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 3,
  "q": "css 폴더에 style.css가 있는데 `<link rel=\"stylesheet\" href=\"style.css\">`로 연결해 스타일이 적용되지 않았다. 원인은?",
  "c": [
   "CSS는 @import로만 연결된다",
   "rel 값이 잘못되었다",
   "link는 body 안에만 둘 수 있다",
   "경로에 css/ 폴더가 빠졌다"
  ],
  "a": 3,
  "e": "index.html 기준 경로는 css/style.css다. rel=\"stylesheet\"는 올바르고, link는 head에 두며, @import 없이 link로 연결된다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "Ⓐ 영역의 로고와 메뉴를 감싸는 시맨틱 태그로 가장 적절한 것은?",
  "c": [
   "<article>",
   "<header>",
   "<footer>",
   "<aside>"
  ],
  "a": 1,
  "e": "문서 머리말(로고·메뉴)은 header가 담당한다. footer는 꼬리말, aside는 보조 콘텐츠, article은 독립 콘텐츠다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "주 메뉴 목록을 감싸는 시맨틱 태그로 가장 적절한 것은?",
  "c": [
   "<article>",
   "<footer>",
   "<aside>",
   "<nav>"
  ],
  "a": 3,
  "e": "주요 내비게이션 묶음은 nav다. aside·article·footer는 내비게이션을 뜻하지 않는다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "Copyright·하단메뉴·패밀리사이트가 들어가는 Ⓓ 영역의 태그로 옳은 것은?",
  "c": [
   "<header>",
   "<nav>",
   "<footer>",
   "<main>"
  ],
  "a": 2,
  "e": "문서 꼬리말 정보는 footer에 둔다. header는 머리말, nav는 주 메뉴, main은 주 콘텐츠다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "시맨틱 태그에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "aside는 본문과 간접 관련된 보조 콘텐츠다",
   "section은 주제별 묶음으로 제목을 두는 것이 권장된다",
   "div는 HTML5에서 폐지되어 사용하면 ERROR가 난다",
   "article은 독립적으로 떼어 써도 의미가 있는 콘텐츠다"
  ],
  "a": 2,
  "e": "div는 의미 없는 묶음으로 HTML5에서도 정상 요소이며 레이아웃 래퍼로 쓴다. 나머지는 각 시맨틱 태그의 정의다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "CSS를 끈 상태에서 콘텐츠가 Ⓐ→Ⓑ→Ⓒ→Ⓓ 순서로 세로 나열되게 하는 방법은?",
  "c": [
   "z-index 값으로 순서를 조정한다",
   "tabindex 값으로 순서를 조정한다",
   "HTML 소스를 header→slide→contents→footer 순서로 작성한다",
   "CSS float 방향으로 순서를 조정한다"
  ],
  "a": 2,
  "e": "CSS가 꺼지면 소스 순서대로 쌓이므로 마크업 순서가 곧 나열 순서다. float·z-index는 CSS라 꺼지면 효과가 없고, tabindex는 포커스 순서만 바꾼다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 3,
  "q": "시맨틱 요소 중첩으로 옳지 않은 것은?",
  "c": [
   "<section><h2>공지사항<\/h2><\/section>",
   "<footer><ul>…<\/ul><\/footer>",
   "<header><nav>…<\/nav><\/header>",
   "<header><footer>…<\/footer><\/header>"
  ],
  "a": 3,
  "e": "header 안에는 header·footer를 넣을 수 없어 ERROR가 난다. header 안 nav, footer 안 목록, 제목이 있는 section은 정상 구조다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "Tab 키로 로고를 선택할 수 있는 로고 마크업으로 가장 적절한 것은?",
  "c": [
   "<h1><a href=\"#\"><img src=\"images/logo.png\" alt=\"로고명\"><\/a><\/h1>",
   "<h1><img src=\"images/logo.png\" alt=\"로고명\"><\/h1>",
   "<h1><a><img src=\"images/logo.png\" alt=\"로고명\"><\/a><\/h1>",
   "<div class=\"logo\"><\/div>에 CSS 배경으로 로고 지정"
  ],
  "a": 0,
  "e": "href가 있는 a로 감싸야 포커스가 간다. a가 없거나 href가 없으면 Tab 이동이 안 되고, CSS 배경 로고는 alt를 줄 수 없다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 3,
  "q": "Ⓐ·Ⓓ의 배경은 폭 100%, 내용은 1200px 가운데인 과제의 Header 마크업으로 가장 적절한 것은?",
  "c": [
   "<table width=\"100%\"><tr><td>…<\/td><\/tr><\/table>",
   "<header><div class=\"inner\">…<\/div><\/header>",
   "<header><header class=\"inner\">…<\/header><\/header>",
   "<header style=\"width:1200px\">…<\/header>"
  ],
  "a": 1,
  "e": "바깥 header에 100% 배경, 안쪽 .inner에 1200px 가운데를 주면 된다. 인라인 style은 별도 CSS 조건 위반이고, table 레이아웃은 금지, header 중첩은 ERROR다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "문서 전체를 감싸는 래퍼로 오류 없이 쓸 수 있는 것은?",
  "c": [
   "<table id=\"wrap\">",
   "<p id=\"wrap\">",
   "<span id=\"wrap\">",
   "<div id=\"wrap\">"
  ],
  "a": 3,
  "e": "div는 블록 콘텐츠를 품는 범용 래퍼다. span·p 안에는 div·section을 넣을 수 없고, table 레이아웃은 준수사항 위반이다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "로고에 h1을 쓴 문서에서 '공지사항'·'갤러리' 영역 제목에 알맞은 태그는?",
  "c": [
   "<title>",
   "<h1>",
   "<h2>",
   "<b>"
  ],
  "a": 2,
  "e": "하위 영역 제목은 h2로 위계를 잇는다. h1은 로고에 사용했고, b는 굵은 글씨일 뿐 제목이 아니며, title은 head의 문서 제목이다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "메인메뉴 한 항목의 기본 마크업으로 가장 적절한 것은?",
  "c": [
   "<a href=\"#\"><li>메뉴<\/li><\/a>",
   "<li><a href=\"#\">메뉴<\/a><\/li>",
   "<li>메뉴<\/li>",
   "<li onclick=\"\">메뉴<\/li>"
  ],
  "a": 1,
  "e": "li 안에 href=\"#\" 링크를 두어야 Tab 이동이 된다. 링크 없는 li는 포커스가 안 가고, a 안의 li는 ERROR, 이벤트 속성은 별도 파일 조건 위반이다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 2,
  "q": "서브메뉴 ul의 위치로 옳은 것은?",
  "c": [
   "메인 a 다음, 부모 li가 닫히기 전",
   "메인 ul을 닫은 뒤 별도의 ul로",
   "메인 a 태그 안",
   "메인 li 다음 형제로 ul 직접"
  ],
  "a": 0,
  "e": "서브는 해당 메인 li의 자식으로 중첩해야 li 단위로 제어할 수 있다. ul의 직계에 ul을 두거나 a 안에 두면 ERROR다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 2,
  "q": "ul 요소에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "li 안에 ul을 중첩할 수 있다",
   "ul 바로 아래에 div로 항목을 묶어도 오류가 없다",
   "순서가 의미를 가지면 ol을 쓴다",
   "ul의 직계 자식은 li다"
  ],
  "a": 1,
  "e": "ul·ol의 직계 자식은 li만 허용되어 div를 두면 ERROR다. li 안 ul 중첩과 순서 목록의 ol 사용은 올바른 설명이다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 3,
  "q": "W3C 기준으로 올바른 마크업이 아닌 것은?",
  "c": [
   "<ul><li><a href=\"#\">메뉴<\/a><\/li><\/ul>",
   "<ul class=\"menu\"><a href=\"#\">메뉴<\/a><\/ul>",
   "<ol><li>1단계<\/li><\/ol>",
   "<ul><li><a href=\"#\">A<\/a><ul><li><a href=\"#\">B<\/a><\/li><\/ul><\/li><\/ul>"
  ],
  "a": 1,
  "e": "ul 직계에 a가 있어 ERROR다. li 안 서브 ul 중첩, ol 안 li는 정상 구조다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 2,
  "q": "전체폭 서브메뉴 띠(M3) 과제의 HTML 준비로 가장 적절한 것은?",
  "c": [
   "메뉴 ul 구조는 그대로 두고 배경 띠용 빈 div(.subbg)를 추가한다",
   "서브메뉴 4열을 table로 만든다",
   "서브메뉴를 footer 안에 작성한다",
   "서브메뉴를 이미지 한 장으로 만든다"
  ],
  "a": 0,
  "e": "띠는 CSS로 폭 100% 배경을 깔 요소만 있으면 되고 메뉴 마크업은 동일하다. 이미지 통째 삽입과 table 레이아웃은 금지이며 footer 배치는 구조와 맞지 않는다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "순서가 의미를 갖는 목록에 쓰는 태그는?",
  "c": [
   "<dl>",
   "<ul>",
   "<ol>",
   "<nav>"
  ],
  "a": 2,
  "e": "ordered list인 ol이 순서 목록이다. ul은 순서 없는 목록, dl은 용어-설명 목록, nav는 내비게이션 묶음이다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "용어와 그 설명을 짝지어 나열할 때 쓰는 구조는?",
  "c": [
   "ol > li + p",
   "dl > dt + dd",
   "ul > li + li",
   "table > tr + td"
  ],
  "a": 1,
  "e": "dl(설명 목록) 안에 dt(용어)·dd(설명)를 둔다. ul·ol은 항목 나열이고 table은 표 데이터 용도다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 3,
  "q": "세로 아코디언 메뉴(M4)와 가로 개별 드롭다운(M1)의 HTML 차이로 옳은 것은?",
  "c": [
   "세로 메뉴는 반드시 ol을 쓴다",
   "세로 메뉴는 table로 만든다",
   "가로 메뉴는 서브를 nav 밖에 둔다",
   "HTML 구조는 같고 CSS·JS로 방향과 동작을 바꾼다"
  ],
  "a": 3,
  "e": "두 방식 모두 nav>ul>li>(a + ul.sub)이고 배치는 CSS, 펼침은 JS가 만든다. ol 강제·table 레이아웃·nav 밖 서브는 근거가 없다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "팝업 닫기 버튼의 마크업으로 가장 적절한 것은?",
  "c": [
   "<close>닫기<\/close>",
   "<a class=\"close\">닫기<\/a>",
   "<input type=\"close\" value=\"닫기\">",
   "<button type=\"button\" class=\"close\">닫기<\/button>"
  ],
  "a": 3,
  "e": "button에 type=\"button\"을 주면 제출 동작 없이 클릭·Tab이 모두 된다. close 태그·input type=close는 없고, href 없는 a는 포커스가 안 간다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "button 요소의 type 속성을 생략했을 때 기본값은?",
  "c": [
   "reset",
   "none",
   "submit",
   "button"
  ],
  "a": 2,
  "e": "button의 기본 type은 submit이라 폼 안에서는 제출이 일어난다. 그래서 일반 버튼은 type=\"button\"을 명시한다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "Footer 패밀리사이트 select 마크업에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "label 또는 title로 select의 이름을 알려 준다",
   "select 안의 항목은 li로 나열한다",
   "첫 option에 '패밀리사이트' 안내 문구를 둘 수 있다",
   "select 안의 항목은 option으로 작성한다"
  ],
  "a": 1,
  "e": "select의 자식은 option(또는 optgroup)이며 li는 ERROR다. label/title과 안내용 첫 option은 흔한 작성 방식이다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "공지사항 첫 번째 글을 클릭 가능한 팝업 트리거로 만드는 마크업으로 가장 적절한 것은?",
  "c": [
   "<li><a href=\"#\" class=\"pop-open\">제목<\/a><span>날짜<\/span><\/li>",
   "<li onclick=\"\">제목<span>날짜<\/span><\/li>",
   "<li><span>제목<\/span><span>날짜<\/span><\/li>",
   "<li><button><a href=\"#\">제목<\/a><\/button><\/li>"
  ],
  "a": 0,
  "e": "href=\"#\" 링크여야 클릭·Tab이 되고 class로 JS에서 잡기 쉽다. 이벤트 속성은 별도 파일 위반, span만으로는 포커스 불가, button 안 a는 ERROR다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "탭 버튼과 탭 내용을 index로 대응시키기 위한 마크업 원칙은?",
  "c": [
   "탭 내용을 버튼 li 안에 넣는다",
   "탭 전체를 table로 만든다",
   "버튼 li 순서와 내용 div 순서를 같게 배치한다",
   "버튼과 내용에 같은 id 값을 준다"
  ],
  "a": 2,
  "e": "n번째 버튼 → n번째 내용으로 연결하므로 순서가 같아야 한다. 같은 id 두 번은 ERROR, 내용을 버튼 안에 넣으면 구조가 꼬이고 table 레이아웃은 금지다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 3,
  "q": "슬라이드 영역 마크업에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "각 슬라이드 img에 alt를 준다",
   "이미지 1장만 배치하고 CSS로 고정해도 요건을 충족한다",
   "ul>li에 제공 이미지 3장을 배치한다",
   "제공 텍스트는 이미지 합성 또는 HTML 텍스트로 올린다"
  ],
  "a": 1,
  "e": "움직이지 않는 이미지 1장 배치는 실격 사유다. 3장 배치·alt·텍스트 적용은 올바른 설명이다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "모달 레이어 팝업의 마크업 구조로 가장 적절한 것은?",
  "c": [
   "<div class=\"modal\"><div class=\"popup\">…<\/div><\/div>",
   "<div class=\"popup\">…<\/div> 하나만",
   "<iframe src=\"popup.html\"><\/iframe>",
   "script.js의 alert() 호출"
  ],
  "a": 0,
  "e": "모달은 화면 전체를 덮는 배경 덮개(.modal)와 그 위 팝업 박스로 구성한다. 덮개 없는 div는 일반 레이어 팝업이고, iframe·alert는 레이어 팝업 요구와 다르다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "Copyright의 © 기호를 오류 없이 작성한 것은?",
  "c": [
   "&copyright;",
   "&copy;",
   "&c;",
   "&copy"
  ],
  "a": 1,
  "e": "문자 참조는 세미콜론까지 써야 한다. 세미콜론 없는 &copy는 ERROR이고 &c;·&copyright;는 정의되지 않은 참조다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 3,
  "q": "Footer SNS 아이콘 마크업으로 옳지 않은 것은?",
  "c": [
   "<a href=\"#\"><img src=\"images/sns1.png\"><\/a>",
   "<a href=\"#\"><img src=\"images/sns3.png\" alt=\"유튜브\"><\/a>",
   "<li><a href=\"#\"><img src=\"images/sns2.png\" alt=\"인스타그램\"><\/a><\/li>",
   "<a href=\"#\"><img src=\"images/sns1.png\" alt=\"페이스북\"><\/a>"
  ],
  "a": 0,
  "e": "alt가 없어 ERROR이며, 링크 안 유일한 콘텐츠인 이미지라 링크 이름도 사라진다. 나머지는 alt에 SNS 이름을 담았다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "갤러리 이미지 3개를 가로로 배치할 때의 마크업으로 가장 적절한 것은?",
  "c": [
   "ul>li>img를 3개 작성하고 CSS로 가로 배치한다",
   "포토샵에서 3장을 합친 이미지 1장을 넣는다",
   "img 3개를 각각 p 안에 넣고 br로 나눈다",
   "table 한 행에 td 3개로 배치한다"
  ],
  "a": 0,
  "e": "각 이미지를 목록 항목으로 두고 가로 배치는 CSS가 한다. 합성 이미지 통째 삽입과 table 레이아웃은 금지이고, br 나열은 세로가 된다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "공지 날짜를 기계가 읽을 수 있게 표시하는 HTML5 요소는?",
  "c": [
   "<date value=\"2026-01-05\">",
   "<time datetime=\"2026-01-05\">",
   "<cal>2026-01-05<\/cal>",
   "<datetime>2026-01-05<\/datetime>"
  ],
  "a": 1,
  "e": "HTML5의 time 요소가 datetime 속성으로 기계 판독 날짜를 제공한다. date·datetime·cal 요소는 존재하지 않는다(span으로 써도 오류는 아니다)."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "레이어 팝업 div를 두는 위치로 가장 적절한 것은?",
  "c": [
   "head 안",
   "body 끝(footer 뒤)",
   "header 안 로고 앞",
   "html 태그 밖"
  ],
  "a": 1,
  "e": "팝업은 본문 흐름과 별개라 body 끝에 두면 CSS off 나열에서도 A~D 순서를 해치지 않는다. head 안·html 밖은 콘텐츠를 둘 수 없는 위치다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "img 요소의 alt 속성 역할로 옳은 것은?",
  "c": [
   "이미지를 볼 수 없을 때 대신 전달되는 대체 텍스트",
   "이미지의 표시 크기",
   "이미지 파일의 경로",
   "마우스를 올리면 나타나는 툴팁"
  ],
  "a": 0,
  "e": "alt는 스크린리더·이미지 로드 실패 시 쓰이는 대체 텍스트다. 툴팁은 title, 경로는 src, 크기는 width·height 또는 CSS다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "순수 장식용 이미지의 alt 처리로 가장 적절한 것은?",
  "c": [
   "alt=\"image\"를 쓴다",
   "alt=\"\" 처럼 빈 값을 준다",
   "alt 속성을 생략한다",
   "alt=\"장식\"을 반복해 쓴다"
  ],
  "a": 1,
  "e": "장식 이미지는 빈 alt로 '읽을 내용 없음'을 알린다. 속성 생략은 ERROR이고, image·장식 같은 값은 무의미한 낭독을 만든다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "css/style.css에서 images/bg.jpg를 배경으로 지정하는 경로로 옳은 것은?",
  "c": [
   "url(C:\\site\\images\\bg.jpg)",
   "url(images/bg.jpg)",
   "url(/images/bg.jpg)",
   "url(../images/bg.jpg)"
  ],
  "a": 3,
  "e": "CSS 안 경로는 CSS 파일 위치 기준이라 한 단계 올라가야 한다. images/…는 css/images를 찾고, 루트·절대경로는 채점 PC에서 깨진다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "index.html에서 images 폴더의 logo.png를 가리키는 경로로 옳은 것은?",
  "c": [
   "C:\\Users\\user\\Desktop\\images\\logo.png",
   "../images/logo.png",
   "images/logo.png",
   "/logo.png"
  ],
  "a": 2,
  "e": "index.html과 images 폴더가 같은 위치이므로 images/logo.png다. 절대경로는 채점 PC에 없고, ../는 상위 폴더, /logo.png는 루트의 파일을 찾는다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 3,
  "q": "파일명·경로 관리에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "경로 구분자로 역슬래시(\\)를 써도 모든 환경에서 같다",
   "공백·한글 파일명은 피한다",
   "코드의 파일명과 실제 파일명의 대소문자를 일치시킨다",
   "파일명은 영문 소문자·숫자 위주로 짓는다"
  ],
  "a": 0,
  "e": "웹 경로 구분자는 슬래시(/)이며 역슬래시는 환경에 따라 해석이 달라진다. 나머지는 경로 깨짐을 막는 관행이다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "`<a>메뉴<\/a>`처럼 href 없이 작성했을 때의 결과로 옳은 것은?",
  "c": [
   "글자가 화면에 보이지 않는다",
   "W3C ERROR가 발생한다",
   "Console에 오류가 뜬다",
   "Tab 키로 포커스가 이동하지 않는다"
  ],
  "a": 3,
  "e": "href 없는 a는 자리표시 링크라 포커스 대상이 아니다. 문법상 오류는 아니고 글자도 보이며 JS 오류와도 무관하다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "img 속성 작성으로 옳지 않은 것은?",
  "c": [
   "width=\"200px\" height=\"40px\"",
   "width=\"200\" height=\"40\"",
   "alt=\"\"",
   "src=\"images/logo.png\""
  ],
  "a": 0,
  "e": "HTML의 width·height 값은 단위 없는 숫자여야 해서 px를 붙이면 ERROR다. 숫자만 쓴 크기, 빈 alt, 상대경로 src는 정상이다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "기술 준수사항에서 로고·메뉴·버튼 등에 요구하는 임시 링크 값은?",
  "c": [
   "#",
   "about:blank",
   "none",
   "null"
  ],
  "a": 0,
  "e": "임시 링크는 href=\"#\"다. about:blank는 빈 페이지로 이동하고, none·null은 같은 이름의 상대 파일을 찾는다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 3,
  "q": "로고 이미지의 alt 값으로 가장 적절한 것은?",
  "c": [
   "로고에 적힌 사이트명",
   "로고 이미지입니다",
   "이미지",
   "logo.png"
  ],
  "a": 0,
  "e": "대체 텍스트는 이미지가 전하는 정보, 즉 사이트명이다. 파일명·'이미지'·'로고 이미지입니다'는 정보가 없거나 중복 낭독을 만든다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "HTML 문법상 옳지 않은 것은?",
  "c": [
   "같은 id 값을 두 요소에 사용한다",
   "한 요소에 id와 class를 함께 준다",
   "같은 class 값을 여러 요소에 사용한다",
   "한 요소에 class를 여러 개 준다"
  ],
  "a": 0,
  "e": "id는 문서에서 유일해야 해 중복 시 ERROR다. class는 재사용·다중 지정이 가능하고 id와 함께 써도 된다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 3,
  "q": "`<p><div>내용<\/div><\/p>`를 검사했을 때의 설명으로 옳은 것은?",
  "c": [
   "경고만 뜨고 ERROR는 없다",
   "p가 div 앞에서 자동으로 닫혀 짝 없는 <\/p>가 ERROR가 된다",
   "div가 p로 바뀌어 통과한다",
   "문제없이 통과한다"
  ],
  "a": 1,
  "e": "p는 구문 콘텐츠만 품어 div가 오면 암묵적으로 닫힌다. 그래서 마지막 <\/p>의 짝이 없어 ERROR다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "태그가 올바르게 중첩된 것은?",
  "c": [
   "<b>텍스트<i><\/b>강조<\/i>",
   "<b><i>텍스트<\/b><\/i>",
   "<b><i>텍스트<\/i><\/b>",
   "<i><b>텍스트<\/i><\/b>"
  ],
  "a": 2,
  "e": "나중에 연 태그를 먼저 닫아야 한다. 나머지는 여닫는 순서가 교차된 잘못된 중첩이다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 1,
  "q": "HTML5에서 사용할 수 없는(폐지된) 요소는?",
  "c": [
   "<figure>",
   "<nav>",
   "<section>",
   "<center>"
  ],
  "a": 3,
  "e": "center는 HTML5에서 폐지되어 ERROR이며 정렬은 CSS로 한다. section·nav·figure는 HTML5 요소다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 3,
  "q": "a 요소 안에 넣을 수 없는 것은?",
  "c": [
   "<button>",
   "<span>",
   "<img>",
   "<div>"
  ],
  "a": 0,
  "e": "a 안에는 button·a·select 같은 대화형 요소를 넣을 수 없다. a는 투명 모델이라 부모가 허용하면 div도 품을 수 있다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 1,
  "q": "전체 레이아웃에 대한 기술 준수사항으로 옳은 것은?",
  "c": [
   "iframe으로 영역을 나눈다",
   "이미지 한 장에 전체 화면을 그린다",
   "table 태그로 틀을 잡고 CSS는 색만 준다",
   "table 태그를 쓰지 않고 CSS로 레이아웃을 만든다"
  ],
  "a": 3,
  "e": "공개문제는 전체 레이아웃의 table 사용을 금지하고 CSS 레이아웃을 요구한다. iframe 분할·통이미지는 콘텐츠 HTML 코딩 요구에도 어긋난다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "시험장 HTML 검증 환경에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "시험장은 인터넷이 차단된다",
   "시험 중 온라인 W3C Validator에 접속해 확인할 수 있다",
   "JS는 Console ERROR 0이 요구된다",
   "HTML 기준은 validator ERROR 0이다"
  ],
  "a": 1,
  "e": "HTML 유효성 검사 서비스는 시험 중 제공되지 않고 인터넷도 차단된다. ERROR 0·Console 오류 0 요구는 준수사항 그대로다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "HTML5 문법으로 옳지 않은 것은?",
  "c": [
   "<br />",
   "<br>",
   "<div class=\"bg\" />",
   "<img src=\"images/a.jpg\" alt=\"\">"
  ],
  "a": 2,
  "e": "div는 빈 요소가 아니어서 self-closing이 허용되지 않는다. br·img는 빈 요소이며 `<br />`의 슬래시는 정보 메시지 수준이다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 3,
  "q": "W3C 메시지 등급의 연결로 옳지 않은 것은?",
  "c": [
   "img alt 누락 — ERROR",
   "script type=\"text/javascript\" — 경고",
   "section에 제목 없음 — ERROR",
   "id 중복 — ERROR"
  ],
  "a": 2,
  "e": "section 제목 없음은 경고라 ERROR 0 기준에 걸리지 않는다. id 중복·alt 누락은 ERROR, 불필요한 type은 경고가 맞다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "옳지 않은 중첩 구조는?",
  "c": [
   "<div><span>…<\/span><\/div>",
   "<span><div>…<\/div><\/span>",
   "<li><div>…<\/div><\/li>",
   "<a href=\"#\"><span>…<\/span><\/a>"
  ],
  "a": 1,
  "e": "span은 구문 콘텐츠만 품어 div를 넣으면 ERROR다. div 안 span, li 안 div, a 안 span은 모두 허용된다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 1,
  "q": "공백이 포함된 class 값 작성으로 옳은 것은?",
  "c": [
   "class=\"menu\" class=\"on\"",
   "class=menu on",
   "class=\"menu on\"",
   "class=(menu on)"
  ],
  "a": 2,
  "e": "공백이 든 값은 따옴표로 감싸야 한 속성값으로 인식된다. 따옴표 없으면 on이 별도 속성이 되고, 같은 속성 두 번은 ERROR다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "width:200px; padding:10px; border:5px solid #333; 인 요소가 box-sizing 기본값일 때 화면에서 차지하는 가로 폭(margin 제외)은?",
  "c": [
   "200px",
   "220px",
   "230px",
   "215px"
  ],
  "a": 2,
  "e": "기본값 content-box 는 width 가 콘텐츠만 가리키므로 200 + 좌우 padding 20 + 좌우 border 10 = 230px 이다. 200px 은 border-box 일 때의 값이다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "요소의 width 안에 padding 과 border 를 포함시키는 선언은?",
  "c": [
   "box-sizing:padding-box;",
   "box-sizing:content-box;",
   "box-sizing:border-box;",
   "box-sizing:margin-box;"
  ],
  "a": 2,
  "e": "border-box 는 width 에 padding·border 를 포함한다. content-box 는 기본값으로 콘텐츠만 포함하며, margin-box·padding-box 는 표준 값이 아니다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "box-sizing:border-box; width:300px; padding:20px; border:1px solid #333; 인 요소의 콘텐츠 영역 가로 폭은?",
  "c": [
   "342px",
   "260px",
   "258px",
   "300px"
  ],
  "a": 2,
  "e": "border-box 이므로 300 에서 좌우 padding 40 과 좌우 border 2 를 뺀 258px 이 콘텐츠 폭이다. 342px 은 content-box 로 착각해 더한 값이다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "브라우저 기본 여백을 없애는 리셋 코드로 알맞은 것은?",
  "c": [
   "* { margin:auto; padding:auto; }",
   "* { spacing:0; }",
   "* { margin:0; padding:0; }",
   "* { border:0; outline:0; }"
  ],
  "a": 2,
  "e": "전체 선택자로 margin·padding 을 0 으로 만든다. padding 에는 auto 값이 없고, spacing 이라는 속성은 존재하지 않는다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "리셋 CSS 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "a{text-decoration:none} 은 링크 밑줄을 없앤다",
   "*{margin:0; padding:0} 은 body 의 기본 margin 도 제거한다",
   "ul{list-style:none} 을 주면 ul 의 왼쪽 기본 padding 도 함께 사라진다",
   "img 를 display:block 으로 바꾸면 이미지 아래 틈이 사라진다"
  ],
  "a": 2,
  "e": "list-style:none 은 목록 기호만 없앤다. ul 의 왼쪽 들여쓰기는 padding 이므로 padding 리셋이 따로 필요하다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "margin-bottom:30px 인 블록 바로 아래에 margin-top:20px 인 블록이 있을 때 두 블록 사이 간격은?",
  "c": [
   "50px",
   "30px",
   "10px",
   "20px"
  ],
  "a": 1,
  "e": "상하 인접 블록의 세로 margin 은 병합되어 큰 값 하나(30px)만 적용된다. 50px 은 병합을 모를 때 더한 값이다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 3,
  "q": "첫 자식의 margin-top 이 부모 밖으로 빠져 부모 전체가 내려가는 현상의 해결책으로 적절하지 않은 것은?",
  "c": [
   "부모에 box-sizing:border-box 를 준다",
   "부모에 overflow:hidden 을 준다",
   "부모를 display:flow-root 로 바꾼다",
   "부모에 padding-top 을 준다"
  ],
  "a": 0,
  "e": "이 현상은 부모-자식 간 마진 병합으로, 부모에 padding·border 가 생기거나 새 블록 서식 문맥(overflow:hidden, flow-root)이 만들어지면 해결된다. box-sizing 은 폭 계산 방식만 바꿀 뿐 병합과 무관하다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "display 값에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "block 요소는 width 를 주지 않으면 부모 폭을 가득 채운다",
   "display:none 은 차지하던 공간까지 제거한다",
   "inline 요소에 width·height 를 주면 그대로 적용된다",
   "inline-block 은 한 줄로 흐르면서 width·height 가 적용된다"
  ],
  "a": 2,
  "e": "a·span 같은 inline 요소는 width·height 가 무시되므로 display:block 이나 inline-block 으로 바꿔야 한다. 나머지는 옳은 설명이다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "img 아래쪽에 몇 px 의 틈이 생기는 원인은?",
  "c": [
   "img 의 기본 margin-bottom 때문",
   "alt 속성이 여백을 만들기 때문",
   "box-sizing 이 content-box 이기 때문",
   "img 가 인라인 요소라 글자 기준선(baseline)에 정렬되기 때문"
  ],
  "a": 3,
  "e": "인라인 이미지는 글자 기준선에 맞춰 놓이므로 글자 아래 공간만큼 틈이 생긴다. vertical-align:top 이나 display:block 으로 해결하며, img 에 기본 margin 은 없다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 3,
  "q": "padding-top:10% 로 지정했을 때 10% 의 기준은?",
  "c": [
   "포함 블록(부모)의 너비",
   "요소 자신의 높이",
   "뷰포트의 높이",
   "포함 블록(부모)의 높이"
  ],
  "a": 0,
  "e": "padding·margin 의 % 는 상하 방향이라도 포함 블록의 너비를 기준으로 계산한다. 높이 기준이라고 생각하기 쉬운 함정이다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 1,
  "q": "메뉴 ul(.menu)의 직계 자식 li(메인메뉴)만 선택하는 선택자는?",
  "c": [
   ".menu > li",
   ".menu ~ li",
   ".menu + li",
   ".menu li"
  ],
  "a": 0,
  "e": "> 는 직계 자식 결합자다. 공백(자손)은 서브메뉴 li 까지 모두 선택하고, + · ~ 는 형제 선택자다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "다음 중 명시도가 가장 높은 선택자는?",
  "c": [
   ".header .menu li a",
   "header nav ul li a",
   ".menu li a:hover",
   "#header .menu a"
  ],
  "a": 3,
  "e": "#header .menu a 는 (1,1,1) 로 id 가 있어 가장 강하다. .header .menu li a 는 (0,2,2), .menu li a:hover 는 (0,2,2), 요소 5개짜리는 (0,0,5) 다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 3,
  "q": "style.css 에 li.on{color:blue} 가 먼저, .on{color:red} 가 나중에 선언됐다. <li class=\"on\"> 의 글자색은?",
  "c": [
   "blue — li.on 의 명시도가 더 높다",
   "red — 클래스 단독 선택자가 우선한다",
   "red — 나중에 선언된 규칙이 이긴다",
   "#333 — 충돌하면 둘 다 무시된다"
  ],
  "a": 0,
  "e": "li.on 은 (0,1,1), .on 은 (0,1,0) 이므로 li.on 이 이긴다. 선언 순서는 명시도가 같을 때만 따진다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 1,
  "q": "상태 가상 클래스에 대한 설명으로 옳지 않은 것은?",
  "c": [
   ":hover 는 포인터가 요소 위에 올라간 상태를 가리킨다",
   ":visited 는 이미 방문한 링크를 가리킨다",
   ":focus 는 Tab 키 등으로 포커스를 받은 상태를 가리킨다",
   ":active 는 마우스를 요소 위에 올려 둔 상태를 가리킨다"
  ],
  "a": 3,
  "e": "마우스를 올려 둔 상태는 :hover 이고 :active 는 누르고 있는 순간이다. 메뉴 하이라이트에는 :hover 와 :focus 를 함께 쓴다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "마우스 하이라이트와 Tab 키 포커스 하이라이트를 같은 스타일로 지정하는 선택자로 알맞은 것은?",
  "c": [
   ".menu a:hover + a:focus",
   ".menu a:hover, .menu a:focus",
   ".menu a:hover:focus",
   ".menu a:hover .menu a:focus"
  ],
  "a": 1,
  "e": "쉼표로 묶어야 두 상태에 각각 적용된다. 쉼표가 없으면 자손 선택자가 되고, :hover:focus 는 두 상태가 동시에 만족될 때만 적용된다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 1,
  "q": "구조 가상 클래스에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "li:first-child 는 첫 번째 li 를 선택한다",
   "li:nth-child(0) 은 첫 번째 li 를 선택한다",
   "li:nth-child(3) 은 세 번째 li 를 선택한다",
   "li:last-child 는 마지막 li 를 선택한다"
  ],
  "a": 1,
  "e": "nth-child 는 1부터 세므로 (0) 은 아무것도 선택하지 않는다. 첫 번째는 nth-child(1) 또는 first-child 다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "갤러리 li 중 세 번째 항목만 margin-right:0 으로 만들 때 CSS 파일에 쓸 선택자는?",
  "c": [
   ".gallery li:nth(3)",
   ".gallery li:eq(3)",
   ".gallery li:nth-child(3)",
   ".gallery li[3]"
  ],
  "a": 2,
  "e": "CSS 의 구조 가상 클래스는 :nth-child(n) 이고 1부터 센다. :eq() 는 jQuery 전용(0부터)이라 CSS 파일에서는 무효 선택자가 된다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 3,
  "q": "CSS 우선순위에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "!important 선언은 일반 선언보다 우선한다",
   "전체 선택자(*)는 요소 선택자보다 명시도가 높다",
   "명시도가 같으면 나중에 선언된 규칙이 적용된다",
   "style 속성 인라인 선언은 id 선택자보다 우선한다"
  ],
  "a": 1,
  "e": "전체 선택자의 명시도는 (0,0,0) 으로 요소 선택자 (0,0,1) 보다 낮다. 나머지는 모두 옳은 우선순위 규칙이다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 1,
  "q": "class=\"tab on\" 처럼 두 클래스를 동시에 가진 요소만 선택하는 선택자는?",
  "c": [
   ".tab .on",
   ".tab > .on",
   ".tab, .on",
   ".tab.on"
  ],
  "a": 3,
  "e": "클래스를 공백 없이 붙이면 동시 조건이다. 공백은 자손, 쉼표는 각각(그룹), > 는 직계 자식 선택이다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "#header a{color:#333} 가 먼저 선언돼 있어 뒤에 쓴 .menu a.on{color:red} 가 적용되지 않는다. 가장 적절한 수정은?",
  "c": [
   "#header .menu a.on{color:red} 처럼 명시도를 높인다",
   ".menu a.on 규칙을 파일 맨 뒤로 옮긴다",
   ".menu a.on 을 .menu a 로 줄인다",
   "#header a 를 header a 로 바꾸고 .menu a.on 을 삭제한다"
  ],
  "a": 0,
  "e": "(1,0,1) 이 (0,2,1) 보다 강하므로 순서를 옮겨도 소용없다. id 를 포함해 명시도를 맞추거나 높여야 적용된다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 1,
  "q": "고정폭 1200px 블록을 화면 가운데에 두는 CSS 로 알맞은 것은?",
  "c": [
   "width:1200px; margin:auto 0;",
   "width:1200px; margin:0 auto;",
   "width:1200px; text-align:center;",
   "width:1200px; align:center;"
  ],
  "a": 1,
  "e": "좌우 margin 을 auto 로 두면 남는 공간이 양쪽에 균등 배분된다. text-align 은 안쪽 인라인 내용만 정렬하고, align 은 없는 속성이며 margin:auto 0 은 좌우가 0 이다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "margin:0 auto 로 가운데 정렬이 되지 않는 경우는?",
  "c": [
   "요소가 display:block 이고 width:1000px 인 경우",
   "요소가 display:inline 인 경우",
   "요소에 padding:20px 이 있는 경우",
   "부모가 width:100% 인 경우"
  ],
  "a": 1,
  "e": "인라인 요소에는 좌우 margin auto 로 가운데 정렬이 동작하지 않는다. width 가 있는 블록이면 부모 폭·padding 과 무관하게 가운데로 간다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "헤더 배경은 화면 전체, 로고·메뉴는 가운데 1200px 에 두려는 CSS 로 알맞은 것은?",
  "c": [
   "header{width:1200px; float:left}",
   "header{width:100%} header .inner{width:1200px; margin:0 auto}",
   "header{width:1200px; margin:0 auto; background:#eee}",
   "header{width:100%; margin:0 auto; padding:0 1200px}"
  ],
  "a": 1,
  "e": "배경이 걸린 바깥 박스는 100%, 내용을 담는 안쪽 박스를 1200px 가운데로 두는 두 겹 구조다. header 에 1200px 을 주면 배경도 1200px 에서 잘린다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 1,
  "q": "정렬 대상과 방법의 짝으로 옳지 않은 것은?",
  "c": [
   "한 줄 텍스트 세로 가운데 — line-height 를 높이와 같게",
   "flex 자식 세로 가운데(row) — align-items:center",
   "고정폭 블록 박스 자체 가로 가운데 — 부모에 text-align:center",
   "인라인 텍스트 가로 가운데 — 부모에 text-align:center"
  ],
  "a": 2,
  "e": "text-align 은 안쪽 인라인 내용만 정렬하므로 블록 박스 자체는 width 와 margin:0 auto 로 가운데 둔다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "height:50px 인 버튼 안의 한 줄 텍스트를 세로 가운데에 두는 방법은?",
  "c": [
   "vertical-align:middle",
   "text-align:middle",
   "margin:auto 0",
   "line-height:50px"
  ],
  "a": 3,
  "e": "한 줄 텍스트는 line-height 를 높이와 같게 주면 세로 가운데에 놓인다. vertical-align 은 블록 안 텍스트에 효과가 없고 text-align:middle 은 없는 값이다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 3,
  "q": "크기를 알 수 없는 팝업 박스를 화면 정중앙에 두는 CSS 로 알맞은 것은?",
  "c": [
   "position:fixed; left:50%; top:50%; transform:translate(-50%,-50%);",
   "position:fixed; left:50%; top:50%; margin:auto;",
   "position:static; margin:50% auto;",
   "position:fixed; text-align:center; vertical-align:middle;"
  ],
  "a": 0,
  "e": "left·top 50% 로 박스 좌상단을 중앙에 두고 translate(-50%,-50%) 로 자기 크기의 절반만큼 되돌린다. margin:auto 만으로는 좌상단 기준 위치가 보정되지 않는다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 3,
  "q": "flex 정렬에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "row 방향에서 align-items 는 세로(교차축)를 정렬한다",
   "row 방향에서 justify-content 는 가로(주축)를 정렬한다",
   "flex-direction:column 에서도 justify-content 는 가로 방향을 정렬한다",
   "justify-content:center; align-items:center; 로 자식을 정중앙에 둘 수 있다"
  ],
  "a": 2,
  "e": "justify-content 는 주축 정렬이므로 column 이 되면 세로 방향을 정렬한다. 축이 바뀌면 두 속성의 방향도 바뀐다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "#wrap{width:1200px; margin:0 auto} 안의 header·section 에 width 를 주지 않았을 때 이들의 폭은?",
  "c": [
   "부모 폭 1200px 을 가득 채운다",
   "내용 길이만큼만 줄어든다",
   "화면 전체 100% 로 늘어난다",
   "폭이 0 이 되어 보이지 않는다"
  ],
  "a": 0,
  "e": "width 를 주지 않은 블록(width:auto)은 부모 콘텐츠 폭을 채운다. 그래서 L1 계열은 래퍼에만 폭을 주고 내부 영역은 높이만 지정하면 된다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "자식 요소를 모두 float:left 로 배치했을 때 높이를 지정하지 않은 부모의 높이는?",
  "c": [
   "0 으로 줄어든다",
   "가장 높은 자식 높이가 된다",
   "화면 높이(100vh)가 된다",
   "자식 높이의 합이 된다"
  ],
  "a": 0,
  "e": "float 요소는 일반 흐름에서 빠지므로 부모가 높이를 계산하지 못해 붕괴한다. clearfix·overflow:hidden·flow-root 로 해제한다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "float 해제용 clearfix 코드로 알맞은 것은?",
  "c": [
   ".clearfix::after{content:''; display:block; clear:both;}",
   ".clearfix::after{display:block; clear:both;}",
   ".clearfix::before{content:''; clear:none;}",
   ".clearfix::after{content:''; display:inline; float:both;}"
  ],
  "a": 0,
  "e": "가상 요소는 content 가 있어야 생성되고, 블록이어야 clear:both 가 동작한다. content 를 빼면 ::after 가 만들어지지 않고 float:both 는 없는 값이다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "float 로 인한 부모 높이 붕괴를 해결하는 방법으로 옳지 않은 것은?",
  "c": [
   "부모에 position:relative 를 준다",
   "부모를 display:flow-root 로 바꾼다",
   "부모에 overflow:hidden 을 준다",
   "float 요소 다음 형제에 clear:both 를 준다"
  ],
  "a": 0,
  "e": "position:relative 는 위치 기준점만 만들 뿐 float 를 감싸지 않는다. overflow:hidden·flow-root 는 새 블록 서식 문맥을 만들어 float 를 포함한다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "좌측 200px 헤더 옆 우측 영역에 '100% 에서 200px 을 뺀 폭'을 주는 올바른 선언은?",
  "c": [
   "width:calc(100%-200px);",
   "width:calc(100% - 200px);",
   "width:100% - 200px;",
   "width:(100% - 200px);"
  ],
  "a": 1,
  "e": "계산식은 calc() 안에 쓰고 + · - 연산자 양옆에 공백이 있어야 한다. 공백이 없거나 calc 없이 쓰면 무효 선언이 되어 폭이 적용되지 않는다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "flex 로 자식 요소들을 나란히 배치할 때 display:flex 를 선언하는 대상은?",
  "c": [
   "마지막 자식 요소",
   "body 요소",
   "나란히 놓을 자식 요소 각각",
   "배치할 자식들을 감싼 부모 요소"
  ],
  "a": 3,
  "e": "display:flex 는 컨테이너(부모)에 선언하고 그 직계 자식이 flex 아이템이 된다. 자식에 선언하면 그 자식의 자식이 배치된다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "flex 관련 속성의 기본값으로 옳지 않은 것은?",
  "c": [
   "align-items:stretch",
   "flex-wrap:wrap",
   "justify-content:flex-start",
   "flex-direction:row"
  ],
  "a": 1,
  "e": "flex-wrap 의 기본값은 nowrap 이라 넘쳐도 줄바꿈하지 않고 자식이 줄어든다(flex-shrink:1). 나머지는 모두 기본값이다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "flex 아이템 속성에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "flex:0 0 200px 은 200px 로 고정되어 늘지도 줄지도 않는다",
   "flex:1 은 남은 공간을 모두 차지한다",
   "flex 아이템에 float:right 를 주면 오른쪽 끝으로 붙는다",
   "flex-shrink:0 이면 넘쳐도 줄어들지 않는다"
  ],
  "a": 2,
  "e": "flex 아이템에는 float 가 무시된다. 오른쪽 끝 배치는 margin-left:auto 나 justify-content 로 한다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "flex 로 공지사항 박스와 갤러리 박스를 좌우 양끝에 붙여 배치하는 선언은?",
  "c": [
   "text-align:justify;",
   "justify-content:space-between;",
   "align-items:space-between;",
   "flex-direction:space-between;"
  ],
  "a": 1,
  "e": "space-between 은 주축 방향 양끝 배치로 justify-content 의 값이다. align-items 와 flex-direction 은 이 값을 받지 않는다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 3,
  "q": "flex 컨테이너 안 자식들의 width 합이 부모 폭보다 클 때 기본 동작은?",
  "c": [
   "부모 폭이 자식 합만큼 자동으로 늘어난다",
   "flex-shrink 기본값 1 때문에 자식이 줄어들어 한 줄에 배치된다",
   "넘치는 자식은 display:none 처리된다",
   "flex-wrap 기본값이 wrap 이라 다음 줄로 넘어간다"
  ],
  "a": 1,
  "e": "flex-wrap 기본값은 nowrap 이고 flex-shrink 기본값은 1 이라 자식이 비율대로 줄어든다. 좌측 200px 헤더가 찌그러지는 원인이며 flex:0 0 200px 로 막는다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "좌측 세로 헤더 안에서 로고와 메뉴를 위에서 아래로 쌓는 flex 선언은?",
  "c": [
   "flex-wrap:nowrap;",
   "justify-content:column;",
   "flex-direction:column;",
   "flex-direction:row;"
  ],
  "a": 2,
  "e": "column 은 주축을 세로로 바꿔 자식을 위아래로 쌓는다. row 는 가로 배치이고 column 은 justify-content 의 값이 아니다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 3,
  "q": "float:left 된 요소에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "margin:0 auto 로 가운데 정렬할 수 있다",
   "일반 흐름에서 벗어나 부모 높이가 붕괴할 수 있다",
   "뒤따르는 인라인 텍스트가 float 요소 주위를 감싸 흐른다",
   "display 가 block 처럼 계산되어 width 지정이 가능하다"
  ],
  "a": 0,
  "e": "float 요소는 좌·우로 붙는 배치라 margin auto 가운데 정렬이 적용되지 않는다. 나머지는 float 의 기본 성질이다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "갤러리 이미지 3개를 display:inline-block 으로 나란히 두었더니 사이에 몇 px 틈이 생겼다. 원인은?",
  "c": [
   "inline-block 의 기본 margin 이 4px 이기 때문",
   "box-sizing 기본값이 content-box 이기 때문",
   "img 의 alt 텍스트 폭 때문",
   "HTML 태그 사이 공백(줄바꿈)이 글자 간격으로 렌더링되기 때문"
  ],
  "a": 3,
  "e": "inline-block 은 텍스트처럼 흐르므로 태그 사이 공백 문자가 간격으로 보인다. flex 배치나 float 로 바꾸면 틈이 사라진다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 3,
  "q": "float 로 header{float:left; width:200px} .main{float:left; width:calc(100% - 200px); padding:0 20px} 을 짰더니 .main 이 아래 줄로 떨어졌다. 원인은?",
  "c": [
   "calc 는 float 요소에서 동작하지 않는다",
   ".main 에 clear:both 가 자동 적용된다",
   "header 에 z-index 가 없어서",
   "box-sizing 이 content-box 라 padding 40px 만큼 폭이 넘쳤다"
  ],
  "a": 3,
  "e": "content-box 에서는 width 에 padding 이 더해져 합계가 부모보다 40px 커지므로 마지막 float 가 다음 줄로 밀린다. box-sizing:border-box 리셋으로 해결한다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "position:absolute 요소의 위치 기준은?",
  "c": [
   "항상 body 요소",
   "바로 앞 형제 요소",
   "항상 바로 위 부모 요소",
   "가장 가까운 position 이 static 이 아닌 조상 요소"
  ],
  "a": 3,
  "e": "absolute 는 static 이 아닌 가장 가까운 조상을 기준으로 한다. 그런 조상이 없으면 초기 포함 블록 기준이므로 부모에 relative 를 주는 것이다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": ".sub{position:absolute; top:100%; left:0} 서브메뉴가 메뉴 li 아래가 아니라 화면 위쪽 엉뚱한 곳에 붙는다. 원인은?",
  "c": [
   "부모 li 에 position:relative 가 없다",
   "top 대신 bottom 을 써야 한다",
   ".sub 에 z-index 가 없다",
   ".sub 에 overflow:hidden 이 없다"
  ],
  "a": 0,
  "e": "기준이 될 non-static 조상이 없어 상위(최종적으로 초기 포함 블록) 기준으로 배치된 것이다. z-index 는 겹침 순서, overflow 는 잘라내기와 관련된다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "position 값에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "relative 는 자기 원래 위치를 기준으로 이동한다",
   "absolute 는 원래 자리를 그대로 차지한 채 위치만 이동한다",
   "static 에서는 top·left 값이 무시된다",
   "fixed 는 뷰포트(화면)를 기준으로 고정된다"
  ],
  "a": 1,
  "e": "원래 자리를 유지하는 것은 relative 이고 absolute 는 흐름에서 빠져 자리를 비운다. fixed 는 스크롤과 무관하게 화면에 고정된다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "position:relative 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "z-index 를 적용할 수 있다",
   "원래 자리를 유지한 채 보이는 위치만 이동한다",
   "absolute 자식의 위치 기준점이 된다",
   "문서 흐름에서 빠져 뒤 요소가 그 자리를 채운다"
  ],
  "a": 3,
  "e": "흐름에서 빠지는 것은 absolute·fixed 다. relative 는 자리를 유지하므로 top 을 줘도 뒤 요소는 움직이지 않는다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "서브메뉴가 슬라이드 영역 아래로 깔려 보이지 않는다. 가장 적절한 해결은?",
  "c": [
   "서브메뉴(또는 header)에 position 과 더 큰 z-index 를 준다",
   "서브메뉴에 float:left 를 준다",
   "서브메뉴를 display:inline-block 으로 바꾼다",
   "슬라이드에 overflow:visible 을 준다"
  ],
  "a": 0,
  "e": "겹침 순서는 position 이 있는 요소의 z-index 로 정한다. 부모가 쌓임 맥락을 만들면 header 자체의 z-index 를 올려야 한다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "z-index 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "음수 값도 사용할 수 있다",
   "position 이 지정된 요소에서 값이 클수록 위에 표시된다",
   "position:static 인 일반 블록에도 값이 클수록 위에 표시된다",
   "부모가 쌓임 맥락을 만들면 자식 z-index 는 그 안에서만 비교된다"
  ],
  "a": 2,
  "e": "z-index 는 static 이 아닌 위치 지정 요소(및 flex·grid 아이템)에만 적용된다. 서브메뉴가 깔릴 때 부모 header 의 z-index 를 올려야 하는 이유가 쌓임 맥락이다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "이동형 슬라이드에서 영역 밖에 있는 다음 이미지가 보이지 않게 슬라이드 영역에 줄 선언은?",
  "c": [
   "visibility:hidden",
   "display:none",
   "z-index:-1",
   "overflow:hidden"
  ],
  "a": 3,
  "e": "overflow:hidden 은 영역을 넘친 부분만 잘라낸다. display:none·visibility:hidden 은 슬라이드 전체를 숨겨 버린다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "1200px 슬라이드 영역에 이미지 3장을 가로로 늘어놓고 이동시키는 CSS 로 알맞은 것은?",
  "c": [
   ".slide{overflow:visible} .slide ul{width:1200px}",
   ".slide{overflow:scroll} .slide ul{width:3600px}",
   ".slide{overflow:hidden} .slide ul{width:1200px}",
   ".slide{overflow:hidden} .slide ul{width:3600px}"
  ],
  "a": 3,
  "e": "ul 을 3장 폭(300%=3600px)으로 넓혀 li 를 가로 나열하고 영역은 overflow:hidden 으로 잘라야 한다. 1200px 이면 이미지가 세로로 쌓이고, scroll 은 스크롤바가 생긴다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "Fade-in/Fade-out 슬라이드에서 li 3개를 배치하는 CSS 로 알맞은 것은?",
  "c": [
   "li 마다 overflow:hidden 을 준다",
   "li 를 display:inline 으로 한 줄에 놓는다",
   "li 를 float:left 로 가로 나열한다",
   "모든 li 를 position:absolute; top:0; left:0 으로 같은 자리에 겹친다"
  ],
  "a": 3,
  "e": "fade 방식은 이동이 아니라 같은 자리에서 투명도가 바뀌므로 li 를 겹쳐야 한다. 가로 나열은 이동형 슬라이드 방식이다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 3,
  "q": "모달 레이어 팝업의 배경 덮개(overlay)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "덮개에 opacity:0.5 를 주면 배경만 반투명해지고 안쪽 팝업 박스는 불투명하게 유지된다",
   "z-index 를 헤더·슬라이드보다 크게 준다",
   "position:fixed; top:0; left:0; width:100%; height:100% 로 화면 전체를 덮는다",
   "background:rgba(0,0,0,0.5) 로 배경만 반투명하게 한다"
  ],
  "a": 0,
  "e": "opacity 는 요소와 그 자식 전체에 적용되므로 안쪽 팝업 박스까지 반투명해진다. 배경만 반투명하게 하려면 rgba 배경색을 쓴다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "요소 숨김·잘라내기 방식에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "opacity:0 은 보이지 않지만 공간은 유지한다",
   "visibility:hidden 은 차지하던 공간까지 제거한다",
   "display:none 은 차지하던 공간까지 제거한다",
   "overflow:hidden 은 영역을 넘친 부분만 잘라낸다"
  ],
  "a": 1,
  "e": "visibility:hidden 은 보이지 않을 뿐 자리는 유지한다. 공간까지 없애는 것은 display:none 이다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "1000px 왼쪽 정렬·좌측 세로 헤더 계열(L3)의 래퍼 CSS 로 알맞은 것은?",
  "c": [
   "#wrap{width:1000px; float:right;}",
   "#wrap{width:100%; margin-left:1000px;}",
   "#wrap{width:1000px;}",
   "#wrap{width:1000px; margin:0 auto;}"
  ],
  "a": 2,
  "e": "L3 는 왼쪽 정렬이므로 가운데 정렬(margin:0 auto)을 주면 와이어프레임과 달라진다. 폭만 지정하면 블록은 기본으로 왼쪽에 붙는다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "100% 폭 화면에서 좌측 200px 헤더와 우측 콘텐츠를 float 로 구현한 코드로 알맞은 것은?",
  "c": [
   "header{float:left; width:200px} .main{float:left; width:100%}",
   "header{float:left; width:200px} .main{float:left; width:calc(100% + 200px)}",
   "header{width:200px} .main{width:calc(100% - 200px)}",
   "header{float:left; width:200px} .main{float:left; width:calc(100% - 200px)}"
  ],
  "a": 3,
  "e": "두 요소 모두 float 하고 우측을 100% − 200px 로 맞춰야 한 줄에 들어간다. width:100% 는 넘쳐서 아래로 떨어지고, float 가 없으면 위아래로 쌓인다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 1,
  "q": "와이어프레임에 '화면 높이 − 120px' 로 표시된 슬라이드 높이 선언으로 알맞은 것은?",
  "c": [
   "height:calc(100vh - 120px);",
   "height:vh(100) - 120px;",
   "height:100% - 120px;",
   "height:calc(100vh-120px);"
  ],
  "a": 0,
  "e": "vh 는 뷰포트 높이의 1% 단위이고 계산은 calc() 안에서 연산자 양옆 공백을 두고 쓴다. 나머지는 무효 선언이다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 3,
  "q": "섹션에 height:100% 를 주었는데 높이가 0 으로 나온다. 가장 가능성 높은 원인은?",
  "c": [
   "조상인 html·body 에 높이가 지정되지 않았다",
   "box-sizing 이 content-box 이다",
   "width 가 100% 가 아니다",
   "overflow:hidden 이 없다"
  ],
  "a": 0,
  "e": "% 높이는 부모 높이가 정해져 있어야 계산된다. html,body{height:100%} 체인을 주거나 100vh 를 쓴다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "좌측 헤더 200px, 세로 콘텐츠 열 400px 옆에 나머지 폭을 채우는 슬라이드(L5)의 폭은?",
  "c": [
   "600px",
   "calc(100% - 200px)",
   "calc(100% - 600px)",
   "calc(100% - 400px)"
  ],
  "a": 2,
  "e": "고정폭 두 개(200 + 400 = 600px)를 전체에서 뺀 나머지가 슬라이드 폭이다. flex 로 구현하면 슬라이드에 flex:1 을 주어도 된다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "레이아웃 계열별 CSS 구현으로 옳지 않은 것은?",
  "c": [
   "고정폭 가운데 정렬 계열은 래퍼에 width 와 margin:0 auto 를 준다",
   "화면 높이 기반 영역은 100vh 또는 html,body{height:100%} 체인을 쓴다",
   "Ⓐ·Ⓓ 폭 100% 계열은 header·footer 에 width:1200px; margin:0 auto 만 주면 된다",
   "좌측 200px 헤더 계열은 우측에 calc(100% - 200px) 또는 flex:1 을 준다"
  ],
  "a": 2,
  "e": "100% 계열은 배경이 화면 끝까지 가야 하므로 바깥 박스 100% + 안쪽 1200px 가운데의 두 겹 구조가 필요하다. 1200px 만 주면 배경이 잘린다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "와이어프레임 치수대로 1200px 래퍼 안 박스들에 padding·border 를 넣었더니 합계가 넘쳐 줄이 깨진다. 가장 근본적인 해결은?",
  "c": [
   "* { box-sizing:border-box; } 로 치수 계산 방식을 통일한다",
   "래퍼에 overflow:auto 를 준다",
   "래퍼에 margin:0 auto 를 추가한다",
   "박스들의 width 를 모두 auto 로 바꾼다"
  ],
  "a": 0,
  "e": "border-box 이면 입력한 width 안에 padding·border 가 포함되어 와이어프레임 px 합계가 그대로 유지된다. overflow:auto 는 스크롤바만 만든다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 3,
  "q": "L4 를 flex 로 구현했더니(#wrap{display:flex} header{width:200px} .main{width:1800px}) 좁은 화면에서 헤더가 200px 보다 좁아졌다. 알맞은 수정은?",
  "c": [
   "header 에 z-index:10 을 준다",
   "#wrap 에 float:left 를 준다",
   "header 에 flex:0 0 200px 을 주고 .main 은 flex:1 로 바꾼다",
   "#wrap 에 flex-direction:column 을 준다"
  ],
  "a": 2,
  "e": "flex-shrink 기본값 1 때문에 넘칠 때 헤더도 줄어든다. flex:0 0 200px 로 고정하고 우측은 flex:1 로 남은 폭을 받게 한다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 1,
  "q": "레이아웃 계열과 래퍼 CSS 의 짝으로 옳지 않은 것은?",
  "c": [
   "1000px 왼쪽 정렬 — #wrap{width:1000px;}",
   "1340px 가운데 정렬 — #wrap{width:1340px; float:left;}",
   "1200px 가운데 정렬 — #wrap{width:1200px; margin:0 auto;}",
   "100% 폭 — #wrap{width:100%;}"
  ],
  "a": 1,
  "e": "float:left 는 왼쪽에 붙이므로 가운데 정렬이 되지 않는다. 1340px 가운데 정렬도 width 와 margin:0 auto 로 구현한다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "공통 컬러 규정(배경 흰색, 기본 텍스트 #333333)을 반영한 CSS 로 알맞은 것은?",
  "c": [
   "body{bg:#fff; color:#333;}",
   "body{background-color:#fff; font-color:#333;}",
   "body{background:#333333; color:#ffffff;}",
   "body{background:#ffffff; color:#333333;}"
  ],
  "a": 3,
  "e": "배경은 background, 글자색은 color 속성이다. font-color·bg 는 존재하지 않는 속성이라 CSS 검사 오류가 난다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "외부 CSS 파일을 연결하는 코드로 알맞은 것은?",
  "c": [
   "<link rel=\"stylesheet\" href=\"C:/Users/pc/Desktop/css/style.css\">",
   "<script href=\"css/style.css\"><\/script>",
   "<link rel=\"stylesheet\" href=\"css/style.css\">",
   "<style src=\"css/style.css\"><\/style>"
  ],
  "a": 2,
  "e": "CSS 는 link 요소의 rel=\"stylesheet\" 와 상대경로 href 로 연결한다. 절대경로는 채점위원 PC 에서 깨지고, style·script 요소는 외부 CSS 연결 방식이 아니다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "푸터 로고를 무채색(흑백)으로 표시하는 CSS 로 알맞은 것은?",
  "c": [
   "opacity:grayscale;",
   "filter:grayscale(100%);",
   "filter:gray(1);",
   "color:grayscale;"
  ],
  "a": 1,
  "e": "filter 의 grayscale() 함수가 채도를 제거한다. gray() 는 표준 filter 함수가 아니고 color·opacity 는 grayscale 값을 받지 않는다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 2,
  "q": "공개문제 기술적 준수사항 중 CSS 관련 내용으로 옳지 않은 것은?",
  "c": [
   "CSS 는 index.html 의 <style> 태그 안에 모두 작성해도 된다",
   "전체 레이아웃에 table 태그를 사용하지 않는다",
   "CSS3 기준 W3C validator 오류가 없어야 한다",
   "CSS 는 별도 파일로 만들어 링크한다"
  ],
  "a": 0,
  "e": "CSS 는 별도 파일로 링크해야 한다는 것이 공통 준수사항이다. 나머지 세 가지는 모두 공개문제 기술 준수사항에 해당한다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "타이틀·메뉴·본문 텍스트의 위계를 구분하는 수단과 가장 거리가 먼 속성은?",
  "c": [
   "font-size",
   "font-weight",
   "color",
   "z-index"
  ],
  "a": 3,
  "e": "텍스트 위계는 글자체·굵기·색상·크기로 구분한다. z-index 는 요소의 겹침 순서를 정할 뿐 글자 위계와 무관하다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "다음 중 CSS 검사에서 오류가 나는 선언은?",
  "c": [
   "color:#333;",
   "color:#33;",
   "background:rgba(0,0,0,0.5);",
   "margin:0 auto;"
  ],
  "a": 1,
  "e": "16진 색상은 #rgb(3자리)나 #rrggbb(6자리) 형식을 쓴다. 2자리 #33 은 유효하지 않은 색상값이다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 2,
  "q": "CSS 를 끈 상태에서 콘텐츠가 논리적 순서로 세로 나열되게 하는 방법으로 알맞은 것은?",
  "c": [
   "모든 요소를 position:absolute 로 배치하면 HTML 순서는 상관없다",
   "table 로 레이아웃을 잡아 순서를 고정한다",
   "flex 의 order 로 화면 순서만 맞추면 소스 순서는 상관없다",
   "HTML 소스를 헤더 → 슬라이드 → 콘텐츠 → 푸터 순서로 쓰고 배치는 CSS 로만 바꾼다"
  ],
  "a": 3,
  "e": "CSS 가 꺼지면 HTML 소스 순서대로 세로 나열되므로 소스 순서가 곧 논리 순서여야 한다. absolute·order 로 화면 순서만 맞추면 CSS off 상태에서 순서가 뒤섞인다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "메뉴 링크 스타일 선언과 효과의 짝으로 옳지 않은 것은?",
  "c": [
   "color:inherit; — 부모 글자색 상속",
   "text-underline:none; — 밑줄 제거",
   "display:block; — 클릭 영역을 li 전체로 확장",
   "text-decoration:none; — 밑줄 제거"
  ],
  "a": 1,
  "e": "text-underline 은 존재하지 않는 속성이라 CSS 검사 오류가 난다. 밑줄은 text-decoration 으로 제어한다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 3,
  "q": "로고 이미지를 헤더 높이에 맞추면서 종횡비를 유지하는 CSS 로 알맞은 것은?",
  "c": [
   "width:100%; height:100%;",
   "height:40px; width:auto;",
   "transform:scale(0.5, 1);",
   "height:40px; width:200px; (원본 비율과 무관하게 지정)"
  ],
  "a": 1,
  "e": "한 축만 지정하고 다른 축을 auto 로 두면 원본 비율이 유지된다. 두 축을 임의로 고정하거나 가로·세로 배율을 다르게 주면 로고가 왜곡된다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "서브메뉴 ul 을 두어야 하는 위치로 옳은 것은?",
  "c": [
   "메인 <\/li> 바로 뒤",
   "메인 li 안, 메인 a 바로 뒤",
   "<\/nav> 바로 뒤",
   "메인 ul 앞"
  ],
  "a": 1,
  "e": "서브 ul 은 메인 li 의 자식이어야 ul 직계=li 규칙을 지키고 li hover 가 유지된다. <\/li> 뒤에 두면 ul 직계 자식이 ul 이 되어 W3C 오류다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "ul 요소의 직계 자식으로 올 수 있는 요소는?",
  "c": [
   "li",
   "div",
   "a",
   "span"
  ],
  "a": 0,
  "e": "ul·ol 의 직계 자식은 li 만 허용된다. a·div 는 li 안에 넣어야 한다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "메뉴 영역을 감싸는 HTML5 시맨틱 요소로 가장 알맞은 것은?",
  "c": [
   "aside",
   "article",
   "menuitem",
   "nav"
  ],
  "a": 3,
  "e": "주요 내비게이션은 nav 로 감싼다. aside 는 보조 콘텐츠, article 은 독립 콘텐츠다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "메뉴 마크업으로 W3C 오류가 나는 것은?",
  "c": [
   "<ul><li><a href=\"#\">메뉴<\/a><\/li><\/ul>",
   "<li><a href=\"#\">메인<\/a><ul><li>…<\/li><\/ul><\/li>",
   "<ul><a href=\"#\">메뉴<\/a><\/ul>",
   "<nav><ul class=\"menu\">…<\/ul><\/nav>"
  ],
  "a": 2,
  "e": "ul 직계 자식으로 a 가 왔으므로 오류다. 나머지는 li 안 a, li 안 서브 ul, nav 안 ul 로 모두 올바르다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "메뉴 항목을 <a href=\"#\"> 로 작성하는 이유로 옳지 않은 것은?",
  "c": [
   "임시링크 # 요구를 충족한다",
   "a 는 CSS 없이도 자동으로 드롭다운된다",
   "Tab 키 포커스를 기본으로 받는다",
   "Enter 키로 선택할 수 있다"
  ],
  "a": 1,
  "e": "a 에 드롭다운 기능은 없다. 임시링크 요구 충족과 Tab 포커스·Enter 선택이 a[href] 를 쓰는 이유다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "CSS 를 끈 상태에서 올바른 메뉴 마크업이 보이는 모습은?",
  "c": [
   "메인1-서브들-메인2 순의 세로 목록",
   "서브만 먼저 모두 나열",
   "메인 메뉴만 가로 한 줄",
   "아무것도 보이지 않음"
  ],
  "a": 0,
  "e": "문서 순서대로 li 가 세로 목록으로 나열된다. 준수사항 'CSS 사용 안 함 시 세로 나열'이 이 순서를 요구한다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 3,
  "q": "다음 중 Tab 키로 포커스를 받지 못하는 메뉴 항목은?",
  "c": [
   "<a href=\"#\">메뉴<\/a>",
   "<button type=\"button\">메뉴<\/button>",
   "<a href=\"#\" class=\"on\">메뉴<\/a>",
   "<a>메뉴<\/a>"
  ],
  "a": 3,
  "e": "href 가 없는 a 는 링크가 아니어서 포커스를 받지 않는다. button 과 href 있는 a 는 기본 포커스 대상이다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "id·class 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "id 는 문서 안에서 한 번만 쓴다",
   "한 요소에 class 여러 개를 공백으로 줄 수 있다",
   "같은 class 를 여러 요소에 쓰면 W3C 오류다",
   "jQuery 에서 id 는 #, class 는 . 로 선택한다"
  ],
  "a": 2,
  "e": "class 는 여러 요소에 반복 사용할 수 있고, 중복이 오류인 것은 id 다. 서브메뉴처럼 반복되는 요소는 class 로 지정한다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "jQuery slideDown() 으로 열 서브메뉴의 초기 CSS 로 알맞은 것은?",
  "c": [
   "opacity:1",
   "display:none",
   "height:auto",
   "visibility:visible"
  ],
  "a": 1,
  "e": "slideDown 은 숨겨진(display:none) 요소를 높이 애니메이션으로 보여 준다. 처음부터 보이는 요소에는 동작하지 않는다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "서브메뉴의 absolute 기준이 되도록 메인 li 에 주는 속성은?",
  "c": [
   "position:relative",
   "position:static",
   "display:inline",
   "float:none"
  ],
  "a": 0,
  "e": "absolute 는 가장 가까운 position 지정 조상을 기준으로 한다. li 에 relative 를 주어 기준점을 만든다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "메인 메뉴만 가로 배치하고 서브 li 는 세로로 두려 할 때 올바른 선택자는?",
  "c": [
   ".menu li{float:left}",
   ".menu ul li{float:left}",
   "li{float:left}",
   ".menu > li{float:left}"
  ],
  "a": 3,
  "e": "> 자식 결합자는 메인 li 만 선택한다. 후손 선택자 .menu li 는 서브 li 까지 잡아 서브도 가로로 뜬다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "서브가 슬라이드 이미지 뒤로 가려질 때의 처방으로 옳지 않은 것은?",
  "c": [
   "헤더 z-index 를 슬라이드보다 크게 한다",
   "헤더의 overflow:hidden 을 해제한다",
   "서브를 position:static 으로 바꾼다",
   "서브에 position:absolute 와 z-index 를 준다"
  ],
  "a": 2,
  "e": "z-index 는 position 이 지정된 요소에 적용되므로 static 으로 바꾸면 겹침 제어가 사라진다. 나머지는 가려짐의 정상 처방이다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "서브 항목 위에 있는 동안에도 메인 메뉴 강조를 유지하는 선택자는?",
  "c": [
   ".menu > li > a:hover",
   ".menu > li:hover > a",
   ".sub a:hover",
   ".menu:hover .sub"
  ],
  "a": 1,
  "e": "li 는 서브를 포함하므로 서브 위에서도 li:hover 가 유지되어 그 a 를 강조할 수 있다. a:hover 는 서브로 내려가면 풀린다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "CSS 만으로 '부드럽게' 나타나는 드롭다운을 만들 수 없는 방법은?",
  "c": [
   "display:none → block 에 transition 지정",
   "max-height 0 → 200px 에 transition",
   "opacity·visibility 에 transition",
   "transform:scaleY 에 transition"
  ],
  "a": 0,
  "e": "display 는 transition 으로 중간값이 생기지 않아 즉시 바뀐다. max-height·opacity·transform 은 전환된다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 3,
  "q": "헤더에 준 속성 중 서브메뉴가 잘려 보이게 만드는 원인은?",
  "c": [
   "position:relative",
   "z-index:100",
   "height:100px",
   "overflow:hidden"
  ],
  "a": 3,
  "e": "overflow:hidden 은 헤더 박스 밖으로 나간 absolute 서브를 잘라낸다. 높이 지정 자체는 overflow 가 visible 이면 서브를 자르지 않는다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "메뉴 가로 배치 CSS 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   ".menu{display:flex} 로 자식 li 가 가로로 놓인다",
   "float:left 한 li 만 담은 부모는 높이가 0 이 될 수 있다",
   "display:flex 는 부모가 아닌 각 li 에 준다",
   ".menu{list-style:none} 으로 목록 기호를 없앤다"
  ],
  "a": 2,
  "e": "flex 는 부모(.menu)에 주어 자식들을 배치한다. float 요소만 담은 부모는 높이를 잃으므로 해제·높이 지정이 필요하다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "메뉴 하이라이트 CSS 로 옳지 않은 것은?",
  "c": [
   "a:hover, a:focus{background:#0a5}",
   "a:focus{outline:none} 만 두고 대체 강조 없음",
   ".sub a:hover{background:#eee}",
   ".menu > li:hover > a{color:#fff}"
  ],
  "a": 1,
  "e": "포커스 표시를 없애고 대체 강조를 주지 않으면 Tab 위치가 보이지 않는다. 나머지는 메인·서브·포커스 하이라이트의 정상 예다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 3,
  "q": "서브 ul 에 top:100% 를 주는 이유로 가장 알맞은 것은?",
  "c": [
   "메인 바로 아래에 틈 없이 붙여 mouseleave 를 막으려고",
   "서브 높이를 부모와 같게 하려고",
   "서브를 화면 맨 아래로 보내려고",
   "서브를 가로 100% 로 늘리려고"
  ],
  "a": 0,
  "e": "top:100% 는 기준(li) 높이만큼 아래, 즉 메인 바로 밑에 붙인다. 틈이 있으면 틈을 지나는 순간 li 를 벗어나 서브가 닫힌다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "M1 개별 드롭다운에서 마우스를 올린 메뉴의 서브만 선택하는 코드는?",
  "c": [
   "$('.sub')",
   "$('.menu .sub')",
   "$('ul')",
   "$(this).children('.sub')"
  ],
  "a": 3,
  "e": "$(this) 는 이벤트가 난 li 하나를 가리키므로 그 li 의 서브만 움직인다. $('.sub') 는 모든 서브를 선택한다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "M1 에서 서브를 부드럽게 나타내는 메서드로 알맞은 것은?",
  "c": [
   "show()",
   "css('display','block')",
   "slideDown(200)",
   "addClass('on')"
  ],
  "a": 2,
  "e": "slideDown 은 높이를 애니메이션해 부드럽게 표시한다. 인자 없는 show() 와 css() 는 즉시 바뀐다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 2,
  "q": "M1 과제에서 $('.menu > li').mouseenter(function(){ $('.sub').stop().slideDown(); }) 의 결과는?",
  "c": [
   "올린 메뉴의 서브만 열린다",
   "어느 메뉴에 올려도 모든 서브가 열린다",
   "아무 서브도 열리지 않는다",
   "Console 오류가 난다"
  ],
  "a": 1,
  "e": "$('.sub') 는 문서의 모든 서브를 선택한다. 개별 드롭다운이 되려면 $(this).children('.sub') 로 범위를 좁혀야 한다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 2,
  "q": "M1 드롭다운 코드로 옳지 않은 것은?",
  "c": [
   "$('.menu > li').mouseover(function(){ $(this).children('.sub').slideDown(); })",
   "$('.menu > li').hover(function(){ $(this).children('.sub').stop().slideDown(); }, function(){ $(this).children('.sub').stop().slideUp(); })",
   "$('.menu > li').on('mouseenter', function(){ $(this).children('.sub').stop().slideDown(); })",
   "$('.menu > li').mouseleave(function(){ $(this).children('.sub').stop().slideUp(); })"
  ],
  "a": 0,
  "e": "mouseover 는 자식 진입마다 다시 발생하고 stop() 도 없어 애니메이션이 쌓인다. 나머지는 mouseenter/leave(hover) 와 stop() 을 쓴 정상 코드다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 2,
  "q": "메인 a 와 서브 사이에 5px margin 이 있을 때 생기는 문제는?",
  "c": [
   "서브가 두 번 열린다",
   "서브 배경색이 사라진다",
   "Tab 이동이 막힌다",
   "틈을 지나는 순간 서브가 닫힌다"
  ],
  "a": 3,
  "e": "서브가 li 안에 있어도 틈 부분은 li 영역이 아니면 mouseleave 가 발생한다. top:100% 로 딱 붙인다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 3,
  "q": "script.js 를 head 에서 불러오며 $('.menu > li').hover(…) 를 $(function(){}) 없이 바로 썼다. 결과는?",
  "c": [
   "정상 동작한다",
   "모든 서브가 처음부터 열린다",
   "요소가 아직 없어 이벤트가 걸리지 않는다",
   "jQuery 가 자동으로 지연 실행한다"
  ],
  "a": 2,
  "e": "head 에서 실행되는 시점엔 body 의 메뉴가 파싱 전이라 선택 결과가 비어 있다. $(function(){}) 로 DOM 준비 후 실행하거나 스크립트를 body 끝에 둔다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "M1 개별 드롭다운 동작 요구로 옳지 않은 것은?",
  "c": [
   "올린 메뉴의 서브만 나타난다",
   "마우스가 벗어나도 서브는 열린 채로 둔다",
   "서브가 부드럽게 나타나고 사라진다",
   "서브 영역에 배경색을 지정한다"
  ],
  "a": 1,
  "e": "마우스가 벗어나면 서브는 부드럽게 사라져야 한다. 나머지는 개별 드롭다운의 공통 요구다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 3,
  "q": "M1 서브 CSS 로 옳지 않은 것은?",
  "c": [
   ".sub{display:block; height:0}",
   ".sub{display:none}",
   ".sub{position:absolute; top:100%; left:0}",
   ".sub{background:#1a7; z-index:10}"
  ],
  "a": 0,
  "e": "height:0 으로 보이는 상태(display:block)면 jQuery 는 숨겨진 요소로 보지 않아 slideDown 이 동작하지 않는다. 초기값은 display:none 이다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 1,
  "q": "메인 메뉴 하나에 올려도 모든 서브메뉴가 함께 나타나는 방식은?",
  "c": [
   "개별 드롭다운(M1)",
   "세로 아코디언(M4)",
   "플라이아웃(M5)",
   "전체 서브메뉴형(M2·M3)"
  ],
  "a": 3,
  "e": "M2·M3 는 메뉴 영역 진입 시 모든 서브를 동시에 펼친다. M1·M4·M5 는 올린 항목의 서브만 펼친다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 1,
  "q": "M3 전체폭 서브 띠 구현에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "띠는 슬라이드를 덮도록 z-index 를 준다",
   "띠와 서브는 함께 펼쳐진다",
   "배경 띠는 table 로 만들어 열을 맞춘다",
   "띠는 이벤트를 건 부모 안에 둔다"
  ],
  "a": 2,
  "e": "레이아웃에 table 을 쓰는 것은 준수사항 위반이다. 띠는 div 로 만들고 서브와 동시에 slideDown 한다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M2·M3 에서 이벤트를 거는 대상으로 가장 알맞은 것은?",
  "c": [
   "각 메인 li",
   "메뉴(와 띠)를 감싸는 부모 하나",
   "각 서브 a",
   "document 의 click"
  ],
  "a": 1,
  "e": "li 마다 걸면 메뉴 사이를 옮길 때 닫힘·열림이 반복된다. 부모 하나에 걸어야 영역 안에서 계속 열린 상태가 유지된다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M3 에서 서브 ul 과 배경 띠의 z-index 관계로 옳은 것은?",
  "c": [
   "서브 ul 이 배경 띠보다 커야 한다",
   "배경 띠가 서브 ul 보다 커야 한다",
   "둘 다 0 이어야 한다",
   "z-index 는 무관하다"
  ],
  "a": 0,
  "e": "띠는 배경 역할이므로 서브 글자 아래에 깔려야 한다. 띠가 위면 서브 링크를 덮어 클릭·hover 가 안 된다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M3 배경 띠를 nav 밖에 두고 nav 에 mouseenter/mouseleave 를 걸었다. 생기는 문제는?",
  "c": [
   "띠가 두 번 열린다",
   "서브가 가로로 늘어난다",
   "Console 오류가 난다",
   "띠 위로 내려가면 서브가 닫힌다"
  ],
  "a": 3,
  "e": "띠가 이벤트 부모 밖이면 띠 영역 진입이 곧 nav 이탈이라 mouseleave 가 발생한다. 띠를 이벤트 부모 안에 두거나 둘을 감싼 요소에 건다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 3,
  "q": "M3 에서 각 서브 ul 에 같은 height 를 주는 이유는?",
  "c": [
   "slideDown 이 높이 없이는 오류라서",
   "W3C 검사가 요구해서",
   "띠 높이와 서브 열을 가지런히 맞추려고",
   "Tab 순서를 맞추려고"
  ],
  "a": 2,
  "e": "서브 항목 수가 달라도 같은 높이를 주면 띠 안에서 열이 가지런해진다. slideDown 은 높이 지정 없이도 동작한다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M2 와 M3 의 차이로 옳은 것은?",
  "c": [
   "모든 서브가 열리는가 아닌가",
   "배경이 메뉴 폭 박스인가 화면 폭 띠인가",
   "jQuery 를 쓰는가 아닌가",
   "slideDown 인가 fadeIn 인가"
  ],
  "a": 1,
  "e": "둘 다 모든 서브를 동시에 펼친다. M2 는 메뉴 폭 안 박스, M3 는 슬라이드 위를 덮는 전체폭 띠가 차이다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 1,
  "q": "M3 에서 서브와 배경 띠를 함께 펼치는 코드는?",
  "c": [
   "$('.sub, .subbg').stop().slideDown()",
   "$(this).children('.sub').slideDown()",
   "$('.subbg').remove()",
   "$('.sub').css('top', 0)"
  ],
  "a": 0,
  "e": "쉼표로 두 선택자를 묶어 한 번에 애니메이션한다. $(this).children 은 한 li 의 서브만 다룬다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 3,
  "q": "M3 전체 서브 구현으로 옳지 않은 것은?",
  "c": [
   "$('nav').mouseenter(function(){ $('.sub, .subbg').stop().slideDown(); })",
   "$('nav').mouseleave(function(){ $('.sub, .subbg').stop().slideUp(); })",
   "$('nav').on('focusin', function(){ $('.sub, .subbg').stop().slideDown(); })",
   "$('.menu > li').hover(function(){ $('.sub, .subbg').slideDown(); }, function(){ $('.sub, .subbg').slideUp(); })"
  ],
  "a": 3,
  "e": "메인 li 마다 걸고 stop() 도 없어 메뉴 사이 이동 때 닫힘·열림이 큐로 쌓인다. 나머지는 부모 nav 에 stop() 을 쓴 정상 코드다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 3,
  "q": "헤더 폭 1200px 가운데정렬(L1) 안에 .subbg{left:0; width:100%} 를 두면 띠 폭은?",
  "c": [
   "항상 브라우저 전체 폭",
   "0 이 되어 보이지 않음",
   "헤더 폭(1200px)까지만",
   "서브 ul 폭과 같음"
  ],
  "a": 2,
  "e": "absolute 의 % 폭은 기준 조상(헤더)의 폭을 따른다. 화면 전체 띠가 필요하면 헤더(또는 기준 요소)를 100% 폭으로 둔다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 1,
  "q": "세로 메뉴에서 서브가 아래 메인 항목을 밀어 내리며 펼쳐지는 방식은?",
  "c": [
   "플라이아웃(M5)",
   "아코디언(M4)",
   "전체폭 띠(M3)",
   "넓은 패널(M6)"
  ],
  "a": 1,
  "e": "M4 는 서브가 문서 흐름 안에서 펼쳐져 아래 항목을 밀어 낸다. M5 는 옆으로, M6 는 우측 패널에 뜬다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 2,
  "q": "M4 아코디언 서브의 position 으로 알맞은 것은?",
  "c": [
   "지정하지 않음(static)",
   "absolute",
   "fixed",
   "sticky"
  ],
  "a": 0,
  "e": "흐름 안(static)에 있어야 펼칠 때 아래 메뉴가 밀려 내려간다. absolute 면 아래 메뉴를 덮는다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 1,
  "q": "M5 플라이아웃에서 서브를 li 오른쪽 옆에 붙이는 CSS 는?",
  "c": [
   "position:absolute; top:100%; left:0",
   "position:static; float:left",
   "position:fixed; right:0",
   "position:absolute; left:100%; top:0"
  ],
  "a": 3,
  "e": "left:100% 는 기준 li 폭만큼 오른쪽, top:0 은 li 윗변에 맞춘다. top:100% 는 아래로 떨어뜨리는 드롭다운 배치다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 2,
  "q": "M5 서브를 옆으로 펼치는 효과로 적절하지 않은 것은?",
  "c": [
   "animate({width:'show'}, 300)",
   "fadeIn(300)",
   "css('display','block')",
   "slideDown(300)"
  ],
  "a": 2,
  "e": "css() 로 display 를 바꾸면 즉시 나타나 '부드럽게' 요구를 충족하지 못한다. animate·fadeIn·slideDown 은 시간 인자로 부드럽게 표시한다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 2,
  "q": "와이어프레임에서 세로 메뉴 오른쪽 큰 사각 영역에 모든 서브가 열로 모여 있다. 해당 방식은?",
  "c": [
   "M4 아코디언",
   "M6 세로 + 넓은 패널",
   "M5 플라이아웃",
   "M1 개별 드롭다운"
  ],
  "a": 1,
  "e": "서브 전체가 우측 큰 패널에 동시에 표시되는 것이 M6 다. M5 는 올린 항목 옆에 그 서브만 작게 붙는다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 3,
  "q": "M4 과제에서 서브를 position:absolute 로 구현했을 때의 문제로 옳은 것은?",
  "c": [
   "서브가 아래 메인 항목을 덮어 제자리 펼침이 아니다",
   "서브가 전혀 나타나지 않는다",
   "Console 오류가 난다",
   "W3C HTML 오류가 난다"
  ],
  "a": 0,
  "e": "absolute 는 흐름에서 빠져 공간을 차지하지 않으므로 아래 메뉴 위에 겹친다. HTML·JS 오류는 아니지만 요구 동작과 다르다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 1,
  "q": "세로 메뉴(M4~M6)에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "M4 서브는 흐름 안에서 아래 메뉴를 밀어 낸다",
   "M5 서브는 li 오른쪽 옆에 펼쳐진다",
   "M6 는 우측 넓은 패널에 전체 서브를 표시한다",
   "M5 서브는 top:100%; left:0 으로 배치한다"
  ],
  "a": 3,
  "e": "top:100%; left:0 은 아래로 떨어뜨리는 드롭다운 배치다. M5 플라이아웃은 left:100%; top:0 이다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 3,
  "q": "M6 에서 메뉴와 우측 패널을 오갈 때 패널이 닫히지 않게 하는 방법은?",
  "c": [
   "메인 li 마다 mouseenter 를 건다",
   "패널에 mouseout 을 건다",
   "메뉴와 패널을 함께 감싼 부모에 이벤트를 건다",
   "패널에 display:none 을 다시 준다"
  ],
  "a": 2,
  "e": "메뉴와 패널이 한 부모 안에 있어야 둘 사이 이동이 부모 이탈이 아니다. li 마다 걸거나 mouseout 을 쓰면 이동 중 닫힌다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": "자식 요소로 이동할 때 다시 발생하지 않아 메뉴에 권장되는 이벤트는?",
  "c": [
   "mouseover",
   "mouseenter",
   "mouseout",
   "mousemove"
  ],
  "a": 1,
  "e": "mouseenter 는 요소 진입 시 한 번만 발생하고 버블링하지 않는다. mouseover 는 자식 진입마다 다시 발생한다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": ".hover(f1, f2) 와 같은 동작은?",
  "c": [
   "mouseenter 에 f1, mouseleave 에 f2",
   "mouseover 에 f1, mouseout 에 f2",
   "click 에 f1, dblclick 에 f2",
   "focus 에 f1, blur 에 f2"
  ],
  "a": 0,
  "e": ".hover 는 mouseenter/mouseleave 의 단축형이다. mouseover/out 과 혼동하는 것이 대표 함정이다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": ".stop() 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "진행 중인 애니메이션을 멈춘다",
   "두 인자는 기본값이 false 다",
   "애니메이션 메서드 앞에 호출한다",
   "누락해도 애니메이션이 쌓이지 않는다"
  ],
  "a": 3,
  "e": "stop() 을 빼면 애니메이션이 큐에 쌓여 손을 뗀 뒤에도 메뉴가 계속 움직인다. 인자는 clearQueue·jumpToEnd 로 기본 false 다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": ".stop() 을 올바르게 사용한 코드는?",
  "c": [
   "$(this).children('.sub').slideDown().stop()",
   "$(this).stop.children('.sub').slideDown()",
   "$(this).children('.sub').stop().slideDown()",
   "$(this).children('.sub').slideDown(stop)"
  ],
  "a": 2,
  "e": "stop() 은 새 애니메이션 앞에 호출한다. 뒤에 두면 방금 시작한 slideDown 을 멈춰 버린다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": "jQuery 애니메이션 속도 인자에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "인자가 없으면 400ms 다",
   "'slow' 는 1000ms 다",
   "'fast' 는 200ms 다",
   "숫자 인자는 ms 단위다"
  ],
  "a": 1,
  "e": "'slow' 는 600ms 다. 기본 400ms, 'fast' 200ms 와 함께 외운다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": ".stop(true, true) 의 동작으로 옳은 것은?",
  "c": [
   "대기 큐를 비우고 현재 애니메이션을 끝 상태로 점프",
   "현재 애니메이션만 멈추고 큐는 유지",
   "애니메이션을 처음 상태로 되돌림",
   "애니메이션 속도를 두 배로"
  ],
  "a": 0,
  "e": "첫 인자 clearQueue 는 큐 제거, 둘째 jumpToEnd 는 현재 동작을 끝 값으로 완료한다. 둘 다 기본 false 다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": "mouseover/mouseout 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "버블링한다",
   "자식 요소 진입마다 mouseover 가 다시 발생한다",
   "부모에서 자식으로 이동하면 부모에 mouseout 이 발생한다",
   "자식 요소로 이동해도 발생하지 않는다"
  ],
  "a": 3,
  "e": "자식 이동에 반응하지 않는 것은 mouseenter/mouseleave 의 특성이다. over/out 은 자식 이동에도 발생하고 버블링한다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 3,
  "q": "$('.menu > li').hover(function(){ $(this).children('.sub').stop().slideToggle(); }) 의 위험으로 알맞은 것은?",
  "c": [
   "문법 오류로 동작하지 않는다",
   "mouseover 로 바인딩된다",
   "빠른 출입 시 열림·닫힘 상태가 어긋날 수 있다",
   "서브가 절대 닫히지 않는다"
  ],
  "a": 2,
  "e": "함수 1개 hover 는 진입·이탈 모두 같은 토글을 실행한다. stop() 으로 중간에 끊긴 상태를 기준으로 토글하면 반대로 열려 남을 수 있어 slideDown/slideUp 을 나누는 편이 안전하다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 3,
  "q": "$('.menu > li').on('mouseenter', () => { $(this).children('.sub').slideDown(); }) 이 동작하지 않는 이유는?",
  "c": [
   "on() 은 mouseenter 를 지원하지 않는다",
   "화살표 함수의 this 는 이벤트 요소가 아니다",
   "children() 은 클래스 선택자를 받지 않는다",
   "slideDown 은 인자가 반드시 필요하다"
  ],
  "a": 1,
  "e": "화살표 함수는 this 를 바인딩하지 않아 바깥 this 를 그대로 쓴다. function(){} 을 쓰거나 $(e.currentTarget) 을 사용한다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": "여러 이벤트를 한 번에 연결하는 올바른 코드는?",
  "c": [
   "$(el).on('mouseenter focusin', fn)",
   "$(el).on('mouseenter, focusin', fn)",
   "$(el).on(['mouseenter'+'focusin'], fn)",
   "$(el).mouseenter.focusin(fn)"
  ],
  "a": 0,
  "e": ".on() 에 공백으로 구분한 이벤트 이름 문자열을 준다. 쉼표 구분은 올바른 형식이 아니다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": "jQuery 3.x 기준 이벤트 연결 방식에 대한 설명으로 옳지 않은 것은?",
  "c": [
   ".on() 이 권장 방식이다",
   ".bind() 는 3.0 에서 deprecated 되었다",
   ".hover(f1, f2) 는 mouseenter/mouseleave 를 연결한다",
   ".toggle(f1, f2) 로 클릭마다 번갈아 실행할 수 있다"
  ],
  "a": 3,
  "e": "이벤트형 .toggle(f1,f2) 는 1.9 에서 제거되었다. 현재 .toggle() 은 표시/숨김 애니메이션 메서드다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": ".children('.sub') 와 .find('.sub') 의 차이로 옳은 것은?",
  "c": [
   "children 은 모든 후손, find 는 직계만",
   "둘은 완전히 같다",
   "children 은 직계 자식만, find 는 모든 후손을 찾는다",
   "find 는 형제 요소를 찾는다"
  ],
  "a": 2,
  "e": "2단 메뉴에선 결과가 같지만 3단 이상이면 find 가 손자 서브까지 잡는다. 형제는 siblings() 다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": "인자 없이 호출하면 즉시 표시되어 '부드럽게' 요구를 충족하지 못하는 메서드는?",
  "c": [
   "slideDown()",
   "show()",
   "fadeIn()",
   "animate({height:'show'})"
  ],
  "a": 1,
  "e": "show() 는 인자가 없으면 애니메이션 없이 즉시 display 를 바꾼다. 나머지는 기본 시간 동안 애니메이션한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 1,
  "q": "포커스 이벤트에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "focus 는 버블링하므로 li 에 걸어도 자식 a 포커스를 잡는다",
   "focusin 은 버블링한다",
   "focusout 은 포커스가 요소 밖으로 나갈 때 발생한다",
   "mouseenter 와 focusin 을 한 번에 연결할 수 있다"
  ],
  "a": 0,
  "e": "focus·blur 는 버블링하지 않는다. 부모 li 에서 잡으려면 focusin·focusout 을 쓴다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "display:none 인 서브 링크에 대한 설명으로 옳은 것은?",
  "c": [
   "Tab 으로 이동되지만 보이지 않는다",
   "Enter 키로만 선택된다",
   "W3C 오류로 표시된다",
   "Tab 순서에서 빠져 포커스를 받지 못한다"
  ],
  "a": 3,
  "e": "렌더링되지 않는 요소는 포커스 대상에서 제외된다. 그래서 포커스로 서브를 열어 주는 처리가 필요하다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "CSS 만으로 Tab 진입 시 서브를 표시하는 선택자는?",
  "c": [
   ".menu > li:focus > .sub",
   ".menu > li:active > .sub",
   ".menu > li:focus-within > .sub",
   ".menu > li:target > .sub"
  ],
  "a": 2,
  "e": ":focus-within 은 자신이나 후손에 포커스가 있을 때 적용된다. li 자체는 포커스를 받지 않으므로 li:focus 는 적용되지 않는다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 1,
  "q": "메뉴 jQuery 가 전혀 동작하지 않을 때 가장 먼저 확인할 것은?",
  "c": [
   "모니터 해상도",
   "jQuery 파일 경로와 로드 순서",
   "이미지 파일 용량",
   "폰트 설치 여부"
  ],
  "a": 1,
  "e": "script.js 가 jQuery 보다 먼저 로드되거나 경로가 틀리면 $ is not defined 오류로 모든 코드가 멈춘다. Console 에서 확인한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "시험장 jQuery 연결에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "CDN 주소로 연결하면 파일이 필요 없어 권장된다",
   "제공된 jQuery 파일을 script 폴더에 넣는다",
   "상대경로로 연결한다",
   "script.js 보다 먼저 연결한다"
  ],
  "a": 0,
  "e": "시험장은 인터넷이 차단되고 채점 PC 에서 정상 동작해야 하므로 CDN 은 쓰지 않는다. 제공 파일을 상대경로로 먼저 연결한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 3,
  "q": "키보드 접근을 고려한 메뉴 코드로 옳지 않은 것은?",
  "c": [
   "$('.menu > li').on('focusin', function(){ $(this).children('.sub').stop().slideDown(); })",
   "$('.menu > li').on('focusout', function(){ $(this).children('.sub').stop().slideUp(); })",
   "$('.menu > li').on('mouseenter focusin', function(){ $(this).children('.sub').stop().slideDown(); })",
   "$('.menu > li').on('focus', function(){ $(this).children('.sub').stop().slideDown(); })"
  ],
  "a": 3,
  "e": "focus 는 버블링하지 않아 포커스를 받지 않는 li 에 걸면 발생하지 않는다. focusin/focusout 을 써야 한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 3,
  "q": "서브가 화면 왼쪽 끝 엉뚱한 위치에 뜰 때 가장 가능성 높은 원인은?",
  "c": [
   "서브의 display:none 누락",
   ".stop() 누락",
   "메인 li 의 position:relative 누락",
   "a 의 href 누락"
  ],
  "a": 2,
  "e": "기준 조상이 없으면 absolute 가 더 바깥 조상이나 초기 컨테이너를 기준으로 배치된다. li 에 relative 를 준다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "메뉴 관련 제출 전 점검 항목으로 옳지 않은 것은?",
  "c": [
   "모든 메뉴 항목 a href=\"#\" 확인",
   "서브메뉴 항목은 하이라이트하지 않는다",
   "Tab 으로 서브 항목까지 이동 확인",
   "Console 오류 0 확인"
  ],
  "a": 1,
  "e": "공개문제는 서브메뉴 항목에도 하이라이트를 요구한다. 나머지는 준수사항(임시링크·Tab 이동·Console 0) 점검 항목이다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "jQuery 와 script.js 의 올바른 연결 순서는?",
  "c": [
   "jQuery 파일 → script.js",
   "script.js → jQuery 파일",
   "순서 무관",
   "script.js 만 연결하면 jQuery 자동 로드"
  ],
  "a": 0,
  "e": "script.js 가 $ 를 사용하므로 jQuery 가 먼저 로드돼야 한다. 반대 순서면 `$ is not defined` 로 Console 오류가 난다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "`$(function(){ ... });` 와 같은 의미의 코드는?",
  "c": [
   "$(window).scroll(function(){ ... });",
   "setTimeout(function(){ ... }, 0);",
   "$(document).click(function(){ ... });",
   "$(document).ready(function(){ ... });"
  ],
  "a": 3,
  "e": "$(function(){}) 는 document ready 의 단축형이다. scroll·click 은 이벤트 바인딩이고 setTimeout 은 DOM 준비를 보장하지 않는다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "시험장에서 jQuery 를 연결하는 방법으로 적절하지 않은 것은?",
  "c": [
   "제공 파일을 script 폴더에 복사",
   "상대경로 script/파일명 으로 연결",
   "jQuery 공식 CDN 주소로 연결",
   "script.js 보다 먼저 연결"
  ],
  "a": 2,
  "e": "시험장은 인터넷이 차단되어 CDN 이 동작하지 않고 채점 PC 에서도 정상 동작해야 한다. 제공 파일을 상대경로로, script.js 보다 먼저 연결하는 것이 맞다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "head 에서 script.js 를 불러오면서 ready 없이 `$('.slide li')` 를 선택했을 때 나타나는 현상은?",
  "c": [
   "Console 에 문법 오류가 표시된다",
   "선택 결과가 비어 오류 없이 동작하지 않는다",
   "정상 동작한다",
   "브라우저가 자동으로 DOM 로드를 기다린다"
  ],
  "a": 1,
  "e": "DOM 생성 전에 실행되어 빈 jQuery 객체가 되므로 메서드 호출은 조용히 무시된다. jQuery 는 빈 집합에 오류를 내지 않는다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "jQuery 3.x 에서 제거되어 사용하면 안 되는 코드는?",
  "c": [
   "$(window).on('load', function(){ ... });",
   "$(window).load(function(){ ... });",
   "$(function(){ ... });",
   "$('.btn').on('click', function(){ ... });"
  ],
  "a": 1,
  "e": "이벤트 단축형 .load(fn) 은 jQuery 3.0 에서 제거되었다. 이미지까지 로드된 뒤 실행하려면 on('load') 를 쓴다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "클릭한 li 가 형제 중 몇 번째인지(0부터) 구하는 메서드는?",
  "c": [
   ".index()",
   ".eq()",
   ".length",
   ".siblings()"
  ],
  "a": 0,
  "e": ".index() 는 형제 중 위치를 0부터 반환한다. .eq(n) 은 반대로 n번째 요소를 고르는 메서드다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "선택된 요소 중 n번째(0부터) 하나를 고르는 메서드는?",
  "c": [
   ".index(n)",
   ".get(n).show()",
   ".nth(n)",
   ".eq(n)"
  ],
  "a": 3,
  "e": ".eq(n) 은 jQuery 객체로 n번째 요소를 반환한다. .nth 는 없는 메서드이고 .get(n) 은 DOM 요소를 반환해 jQuery 메서드를 바로 쓸 수 없다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "`$('.tab li').click(() => { $(this).addClass('on'); });` 가 기대대로 동작하지 않는 이유는?",
  "c": [
   "addClass 는 li 에 쓸 수 없기 때문",
   "click 은 jQuery 3 에서 제거되었기 때문",
   "화살표 함수의 this 가 클릭한 요소가 아니기 때문",
   "on 클래스는 예약어이기 때문"
  ],
  "a": 2,
  "e": "화살표 함수는 자신의 this 를 갖지 않아 바깥 스코프의 this 를 쓴다. 요소를 가리키려면 function 표현식을 써야 한다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "jQuery 이벤트 핸들러에서 `return false;` 의 효과로 옳은 것은?",
  "c": [
   "기본 동작만 막는다",
   "전파만 막는다",
   "기본 동작 막기와 이벤트 전파 중단을 함께 수행",
   "핸들러를 제거한다"
  ],
  "a": 2,
  "e": "jQuery 에서 return false 는 preventDefault() 와 stopPropagation() 을 모두 호출한 효과다. 핸들러 제거는 .off() 다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "`<a href=\"#\">` 클릭 시 화면이 맨 위로 튀는 것을 막는 코드는?",
  "c": [
   "e.stopImmediatePropagation();",
   "e.preventDefault();",
   "$(this).off();",
   "e.target;"
  ],
  "a": 1,
  "e": "preventDefault 가 링크 이동이라는 기본 동작을 막는다. 전파 중단은 기본 동작과 무관하다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "jQuery 3.x 에서 이벤트 바인딩 방법으로 권장되지 않는 것은?",
  "c": [
   ".live('click', fn)",
   ".on('click', fn)",
   ".click(fn)",
   ".on('mouseenter focusin', fn)"
  ],
  "a": 0,
  "e": ".live() 는 jQuery 1.9 에서 제거되었다. .on() 이 표준이며 .click() 단축형도 3.x 에서 동작한다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 3,
  "q": "jQuery 3.4 부터 deprecated 된 위치 선택자를 대체하는 코드로 옳은 것은?",
  "c": [
   "$('.notice li:first')",
   "$('.notice li:eq(0)')",
   "$('.notice li:odd')",
   "$('.notice li').first()"
  ],
  "a": 3,
  "e": ":first·:eq()·:odd 같은 jQuery 전용 위치 선택자는 3.4 에서 deprecated 되었다. .first()·.eq(0) 메서드로 대체한다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "Tab 키로 포커스·Enter 로 동작하게 만들기에 부적절한 닫기 버튼 마크업은?",
  "c": [
   "<button type=\"button\" class=\"close\">닫기<\/button>",
   "<a href=\"#\" class=\"close\">닫기<\/a>",
   "<button type=\"button\">×<\/button>",
   "<div class=\"close\">닫기<\/div>"
  ],
  "a": 3,
  "e": "div 는 기본적으로 포커스를 받지 못해 Tab 이동이 안 된다. a·button 은 키보드 접근이 기본 제공된다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "요소 진입·이탈 시 자식 요소를 드나들어도 다시 발생하지 않는 이벤트 쌍은?",
  "c": [
   "mouseover / mouseout",
   "focus / blur",
   "mouseenter / mouseleave",
   "keydown / keyup"
  ],
  "a": 2,
  "e": "mouseenter/mouseleave 는 버블링하지 않아 자식 이동 시 재발생하지 않는다. mouseover/mouseout 은 자식을 드나들 때마다 발생한다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 3,
  "q": "ready 없이도 DOM 요소를 안전하게 선택할 수 있는 script 배치로 옳지 않은 것은?",
  "c": [
   "<\/body> 직전에 script 태그 배치",
   "<head> 에 일반 <script src> 로 script.js 연결",
   "<script src=\"script/script.js\" defer>",
   "head 에 두고 코드 전체를 $(function(){}) 로 감쌈"
  ],
  "a": 1,
  "e": "head 의 일반 script 는 파싱 도중 즉시 실행되어 body 요소가 아직 없다. body 끝 배치·defer·ready 감싸기는 모두 DOM 준비 후 실행을 보장한다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "3장 슬라이드의 인덱스를 0→1→2→0 으로 순환시키는 코드는?",
  "c": [
   "i = (i + 1) % 3;",
   "i = (i + 1) % 2;",
   "i = i % 3 + 2;",
   "i = (i - 1) / 3;"
  ],
  "a": 0,
  "e": "나머지 연산의 제수를 장 수로 두면 마지막 다음에 0 으로 돌아온다. % 2 는 0·1 만 반복해 3번째 장이 나오지 않는다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "일정 간격으로 함수를 무한 반복 호출하는 함수는?",
  "c": [
   "setInterval",
   "setTimeout",
   "requestIdleCallback",
   "clearInterval"
  ],
  "a": 0,
  "e": "setInterval 은 지정 간격마다 반복 호출한다. setTimeout 은 1회 실행, clearInterval 은 반복을 멈춘다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "3초마다 slide 함수를 실행하는 코드로 옳은 것은?",
  "c": [
   "setInterval(slide, 3);",
   "setInterval(slide(), 3000);",
   "setTimeout(slide, 3000);",
   "setInterval(slide, 3000);"
  ],
  "a": 3,
  "e": "시간 단위는 밀리초이고 함수는 괄호 없이 참조로 넘긴다. slide() 는 즉시 실행 결과를 넘기며 setTimeout 은 1회만 실행된다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "슬라이드 요구사항에 해당하지 않는 것은?",
  "c": [
   "매 3초 이내 전환",
   "페이지를 열면 자동 시작",
   "사용자가 버튼을 눌러야 시작",
   "마지막 이미지 다음 첫 이미지로 반복"
  ],
  "a": 2,
  "e": "공통 요구는 3초 이내 전환·자동 시작·무한 반복이다. 클릭해야 시작하는 방식은 자동 시작 요구에 어긋난다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "슬라이드 관련 실격 사유에 해당하는 것은?",
  "c": [
   "CSS keyframes 로만 슬라이드 제작",
   "움직이지 않는 슬라이드 이미지 1장만 배치",
   "jQuery animate 로 가로 이동 구현",
   "전환 시간 600ms 적용"
  ],
  "a": 1,
  "e": "슬라이드를 JS·CSS 중 하나 이상으로 제작하지 않으면 실격이며 정지 이미지 1장 배치도 여기에 해당한다. CSS 만으로 만든 슬라이드는 허용된다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "다음 중 3초 이내 전환 조건을 만족하지 않는 설정은?",
  "c": [
   "setInterval 3000 + animate 600",
   "setInterval 4000 + animate 500",
   "setInterval 2500 + animate 1000",
   "setInterval 3000 + fadeIn 1000"
  ],
  "a": 1,
  "e": "전환 간격은 setInterval 값이 결정한다. 4000ms 는 3초를 초과한다. 나머지는 간격이 3초 이하이고 애니메이션이 간격 안에 끝난다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 3,
  "q": "다음 코드에서 슬라이드가 첫 장에서 넘어가지 않는 원인은? `setInterval(function(){ let i=0; i=(i+1)%3; move(i); }, 3000);`",
  "c": [
   "카운터 i 가 콜백 안에서 매번 0 으로 선언됨",
   "% 3 의 제수가 잘못됨",
   "3000 이 3초보다 김",
   "setInterval 은 함수 표현식을 받을 수 없음"
  ],
  "a": 0,
  "e": "i 를 콜백 안에서 선언하면 매 호출마다 0 으로 시작해 항상 1 로 이동한다. 카운터는 콜백 밖에 선언해야 누적된다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "장 수가 바뀌어도 코드 수정 없이 순환하도록 제수를 구하는 코드는?",
  "c": [
   "$('.slide li').index()",
   "$('.slide li').eq()",
   "$('.slide').width()",
   "$('.slide li').length"
  ],
  "a": 3,
  "e": ".length 는 선택된 요소 개수다. i=(i+1)%n 의 n 으로 쓰면 장 수에 자동 대응한다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "setInterval 로 시작한 반복을 멈추는 올바른 방법은?",
  "c": [
   "setInterval(f, 0);",
   "clearTimeout();",
   "const t = setInterval(f, 3000); clearInterval(t);",
   "$('.slide').stop();"
  ],
  "a": 2,
  "e": "setInterval 이 돌려주는 ID 를 clearInterval 에 넘겨야 멈춘다. .stop() 은 진행 중 jQuery 애니메이션만 멈추고 타이머는 남는다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 3,
  "q": "interval 1000ms + animate 1500ms 로 설정했을 때 나타나는 문제는?",
  "c": [
   "슬라이드가 전혀 움직이지 않음",
   "Console 에 문법 오류",
   "애니메이션이 끝나기 전 다음 호출이 쌓여 전환이 밀림",
   "첫 장만 반복 표시"
  ],
  "a": 2,
  "e": "애니메이션 시간이 간격보다 길면 jQuery 효과 큐에 동작이 누적된다. 애니메이션 시간은 전환 간격보다 짧게 잡는다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "시험 3시간 중 JS 작업 순서로 권장되는 흐름에서 가장 먼저 완성해야 할 기능은?",
  "c": [
   "팝업 fadeIn 효과",
   "슬라이드(실격 요소)",
   "탭 on 색상",
   "푸터 패밀리사이트"
  ],
  "a": 1,
  "e": "슬라이드 미구현은 실격 사유이므로 JS 작업에서 최우선이다. 권장 흐름은 메뉴→슬라이드→탭→팝업이며 실격 방지가 가장 높은 우선순위다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "`if(i < 2){ i++; } else { i = 0; }` 와 같은 결과를 내는 코드는?",
  "c": [
   "i = (i + 1) % 3;",
   "i = (i + 1) % 2;",
   "i = i++ % 3;",
   "i = 2 - i;"
  ],
  "a": 0,
  "e": "i 가 0·1 이면 1 증가하고 2 이면 0 으로 돌아가므로 % 3 순환과 같다. 2 - i 는 0과 2 사이를 오간다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 3,
  "q": "슬라이드 코드 작성으로 옳지 않은 것은?",
  "c": [
   "카운터를 콜백 밖에서 선언",
   "전환 간격을 3000 이하로 설정",
   "애니메이션 시간을 간격보다 짧게 설정",
   "setInterval 첫 인자로 slide() 처럼 괄호를 붙여 전달"
  ],
  "a": 3,
  "e": "괄호를 붙이면 즉시 1회 실행한 반환값(undefined)을 넘겨 반복되지 않는다. 나머지는 올바른 작성 방법이다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "가로 이동 슬라이드에서 창 밖 이미지를 가리기 위한 CSS 는?",
  "c": [
   "display:none",
   "visibility:hidden",
   "z-index:-1",
   "overflow:hidden"
  ],
  "a": 3,
  "e": "overflow:hidden 은 창 영역 밖으로 나간 내용을 잘라낸다. display:none 은 슬라이드 전체를 숨긴다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "1200px 폭 가로 슬라이드에서 i번째 장으로 이동하는 코드는?",
  "c": [
   "$('.slide ul').animate({marginTop: -1200*i}, 600);",
   "$('.slide ul').css({width: 1200*i});",
   "$('.slide ul').animate({marginLeft: -1200*i}, 600);",
   "$('.slide ul').fadeIn(1200*i);"
  ],
  "a": 2,
  "e": "가로 이동은 margin-left(또는 left)를 창 폭 × 인덱스만큼 음수로 옮긴다. marginTop 은 세로 이동이다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "높이 300px 세로 슬라이드의 이동 코드로 옳은 것은?",
  "c": [
   "animate({marginLeft: -300*i}, 600)",
   "animate({marginTop: -300*i}, 600)",
   "animate({height: 300*i}, 600)",
   "animate({opacity: -300*i}, 600)"
  ],
  "a": 1,
  "e": "세로 이동은 margin-top(또는 top)을 창 높이 × 인덱스만큼 음수로 옮긴다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "`$('.slide ul').animate({left: -1200*i})` 가 움직이지 않을 때 가장 먼저 확인할 것은?",
  "c": [
   "ul 에 position 지정 여부",
   "ul 의 font-size",
   "li 의 alt 속성",
   "jQuery 버전이 1.x 인지"
  ],
  "a": 0,
  "e": "left·top 은 position 이 relative·absolute 등으로 지정된 요소에서만 효과가 있다. static 이면 값이 무시된다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "3장 가로 슬라이드를 float 로 나열할 때 ul 의 폭으로 알맞은 것은?",
  "c": [
   "300%(창 폭의 3배)",
   "100%",
   "33.33%",
   "auto"
  ],
  "a": 0,
  "e": "3장이 한 줄에 서려면 필름(ul)이 창 폭의 3배여야 한다. 100% 면 li 가 줄바꿈되어 세로로 쌓인다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "jQuery animate() 의 기본 duration 과 easing 으로 옳은 것은?",
  "c": [
   "1000ms, linear",
   "300ms, ease-in",
   "600ms, swing",
   "400ms, swing"
  ],
  "a": 3,
  "e": "animate·fadeIn 등의 기본 시간은 400ms, 기본 easing 은 swing 이다. jQuery 코어가 제공하는 easing 은 swing·linear 두 가지다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "animate 의 세 번째 인자로 넘긴 함수가 실행되는 시점은?",
  "c": [
   "애니메이션 시작 직전",
   "애니메이션 절반 지점",
   "애니메이션이 끝난 뒤",
   "페이지 로드 직후"
  ],
  "a": 2,
  "e": "완료 콜백은 애니메이션 종료 후 실행된다. 복제 방식에서 마지막 장 도착 후 즉시 위치를 리셋하는 코드를 여기에 둔다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 3,
  "q": "첫 li 를 복제해 끝에 붙이는 무한 루프 방식의 핵심 처리로 옳은 것은?",
  "c": [
   "복제본 도착 후 animate 로 천천히 되돌림",
   "복제본 도착 후 css('marginLeft', 0) 으로 즉시 되돌림",
   "복제본을 fadeOut 으로 숨김",
   "setInterval 을 새로 하나 더 생성"
  ],
  "a": 1,
  "e": "복제본은 첫 장과 같은 그림이므로 애니메이션 없이 위치를 0 으로 바꾸면 사용자에게 끊김이 보이지 않는다. animate 로 되돌리면 되감기가 보인다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "jQuery animate() 로 플러그인 없이 애니메이션할 수 없는 속성은?",
  "c": [
   "marginLeft",
   "backgroundColor",
   "top",
   "opacity"
  ],
  "a": 1,
  "e": "jQuery 코어 animate 는 수치 속성만 처리한다. 색상 애니메이션은 jQuery UI 등 플러그인이 필요하다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 3,
  "q": "가로 슬라이드 구현으로 옳지 않은 것은?",
  "c": [
   "이동 거리를 창 폭과 다르게 지정해도 overflow 가 맞춰 준다",
   "창에 overflow:hidden 을 준다",
   "li 를 가로로 나열한다",
   "마지막 다음에 인덱스를 0 으로 되돌린다"
  ],
  "a": 0,
  "e": "overflow 는 넘친 부분을 자를 뿐 위치를 보정하지 않는다. 이동 거리가 창 폭과 다르면 이미지가 걸친 채 멈춘다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "폭 100% 가로 슬라이드에서 이동 코드로 적절한 것은?",
  "c": [
   "animate({marginLeft: -1200*i})",
   "animate({width: 100*i + '%'})",
   "animate({marginTop: -100*i + '%'})",
   "animate({marginLeft: -100*i + '%'})"
  ],
  "a": 3,
  "e": "창 폭이 해상도마다 달라지므로 백분율로 이동해야 한다. 고정 1200px 는 창 폭이 다르면 어긋난다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 3,
  "q": "animate 완료 콜백에서 첫 li 를 ul 끝으로 옮기는 순환 이동 방식에 쓰는 코드는?",
  "c": [
   "$('.slide ul li').first().remove();",
   "$('.slide ul li').last().hide();",
   "$('.slide ul li').first().appendTo('.slide ul');",
   "$('.slide ul').empty();"
  ],
  "a": 2,
  "e": "첫 li 를 appendTo 로 끝에 옮기고 margin 을 0 으로 되돌리면 장 수와 무관하게 한 방향으로 순환한다. remove·empty 는 요소를 없앤다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "진행 중인 jQuery 애니메이션을 멈추는 메서드는?",
  "c": [
   ".pause()",
   ".clearInterval()",
   ".stop()",
   ".off()"
  ],
  "a": 2,
  "e": ".stop() 은 현재 애니메이션을 중지한다. clearInterval 은 전역 함수로 타이머를 멈추며 jQuery 메서드가 아니다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 1,
  "q": "Fade 슬라이드에서 li 를 한 자리에 겹치기 위한 CSS 는?",
  "c": [
   "float:left;",
   "position:absolute; top:0; left:0;",
   "display:inline-block;",
   "position:static;"
  ],
  "a": 1,
  "e": "absolute 로 모든 li 를 같은 좌표에 겹쳐야 교차로 나타났다 사라진다. float 는 가로 나열이다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 1,
  "q": "요소를 서서히 사라지게 하고 끝나면 display:none 으로 만드는 메서드는?",
  "c": [
   ".fadeOut()",
   ".fadeTo()",
   ".slideUp()",
   ".animate({opacity:0})"
  ],
  "a": 0,
  "e": "fadeOut 은 투명도를 0 으로 만든 뒤 display:none 을 적용한다. fadeTo·animate(opacity) 는 display 를 유지한다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "크로스페이드(교차 전환)를 만드는 코드로 옳은 것은?",
  "c": [
   "$li.eq(cur).fadeOut(1000, function(){ $li.eq(next).fadeIn(1000); });",
   "$li.eq(next).slideDown(1000);",
   "$li.fadeToggle(1000);",
   "$li.eq(cur).fadeOut(1000); $li.eq(next).fadeIn(1000);"
  ],
  "a": 3,
  "e": "두 효과를 같은 시점에 호출해야 겹치며 교차한다. 완료 콜백 안에서 fadeIn 하면 사이에 빈 화면이 보인다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "Fade 슬라이드 구현으로 옳지 않은 것은?",
  "c": [
   "첫 li 만 display:block 으로 시작",
   "모든 li 를 position:absolute 로 겹침",
   "fadeOut·fadeIn 을 같은 시점에 호출",
   "모든 li 를 display:none 으로 두고 첫 전환을 기다린다"
  ],
  "a": 3,
  "e": "모두 숨기면 첫 전환(3초 뒤)까지 빈 화면이 보인다. 첫 장만 보이게 시작하고 겹친 li 를 동시에 교차시키는 것이 표준이다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 3,
  "q": "Fade 슬라이드에서 3장이 위아래로 쌓여 보이는 원인은?",
  "c": [
   "fadeIn 시간 과다",
   "setInterval 3000 설정",
   "li 에 position:absolute 누락",
   "overflow:hidden 지정"
  ],
  "a": 2,
  "e": "absolute 가 없으면 li 가 일반 흐름대로 아래로 쌓인다. overflow·시간 설정은 쌓임과 무관하다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "보이면 fadeOut, 숨겨져 있으면 fadeIn 하는 메서드는?",
  "c": [
   ".fadeTo()",
   ".fadeToggle()",
   ".toggleClass()",
   ".slideToggle()"
  ],
  "a": 1,
  "e": "fadeToggle 은 현재 상태를 반전한다. slideToggle 은 높이로 펼침·접힘이다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "Fade 과제의 요구사항을 만족하지 않는 구현은?",
  "c": [
   "animate({marginLeft}) 로 좌우 이동",
   "fadeOut·fadeIn 교차",
   "opacity keyframes 순환",
   "fadeTo(1000,0)·fadeTo(1000,1) 교차"
  ],
  "a": 0,
  "e": "Fade 과제는 투명도 전환이 요구된다. marginLeft 이동은 가로 슬라이드 방식이라 방향 지시와 어긋난다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 3,
  "q": "Fade 슬라이드 코드 `cur=(cur+1)%3` 을 fadeOut·fadeIn 호출보다 먼저 실행하면 생기는 문제는?",
  "c": [
   "현재 장이 아닌 다음 장을 fadeOut 하게 된다",
   "Console 오류 발생",
   "슬라이드 간격이 6초가 됨",
   "문제 없음"
  ],
  "a": 0,
  "e": "cur 를 먼저 바꾸면 eq(cur) 가 이미 다음 장을 가리킨다. next 를 따로 계산하고 전환 뒤 cur = next 로 갱신한다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 1,
  "q": "지정한 투명도까지만 변화시키는 fade 메서드는?",
  "c": [
   ".fadeIn(투명도)",
   ".fadeOut(투명도)",
   ".opacity(투명도)",
   ".fadeTo(시간, 투명도)"
  ],
  "a": 3,
  "e": "fadeTo 는 두 번째 인자로 목표 투명도를 받는다. .opacity() 는 jQuery 메서드가 아니다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 1,
  "q": "CSS 로 슬라이드를 무한 반복시키는 animation 값은?",
  "c": [
   "forever",
   "loop",
   "infinite",
   "repeat"
  ],
  "a": 2,
  "e": "animation-iteration-count 의 무한 값은 infinite 다. 나머지는 CSS 값이 아니다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "3장을 장당 3초로 순환하는 CSS 애니메이션 설정으로 알맞은 것은?",
  "c": [
   "animation: slideX 3s infinite;",
   "animation: slideX 9s infinite;",
   "animation: slideX 9s 1;",
   "animation: slideX 27s infinite;"
  ],
  "a": 1,
  "e": "한 주기에 3장이 모두 지나가야 하므로 3 × 3초 = 9초다. 3s 는 장당 1초, 반복 1회는 무한 반복 위반이다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "CSS 만으로 만든 슬라이드에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "JS·CSS 중 하나 이상 조건을 만족해 허용된다",
   "JS 가 없으므로 실격 사유에 해당한다",
   "별도 파일 style.css 에 작성한다",
   "infinite 로 무한 반복을 만족시킨다"
  ],
  "a": 1,
  "e": "실격 기준은 JS·CSS 중 하나 이상으로 제작하지 않은 경우이므로 CSS 단독 슬라이드는 허용된다. CSS 는 별도 파일로 작성하고 CSS 검사 오류 0 대상이다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "CSS Fade 슬라이드에서 각 li 의 등장 시점을 어긋나게 하는 속성은?",
  "c": [
   "animation-delay",
   "animation-duration",
   "animation-direction",
   "transition-property"
  ],
  "a": 0,
  "e": "같은 keyframes 를 쓰되 li 마다 delay 를 달리 주면 순차로 나타난다. duration 은 주기 길이다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 3,
  "q": "CSS keyframes 슬라이드에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "infinite 를 빼면 한 번 돌고 멈춘다",
   "정지 구간을 같은 값의 % 구간으로 만든다",
   "세로 이동은 margin-top 이나 translateY 로 표현한다",
   "장 수를 바꿔도 % 구간을 다시 계산할 필요가 없다"
  ],
  "a": 3,
  "e": "keyframes 의 % 구간은 장 수 기준으로 나눠 둔 것이라 장 수가 바뀌면 전부 다시 계산해야 한다. JS 방식은 length 로 자동 대응할 수 있다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 1,
  "q": "@keyframes 로 정의한 애니메이션 이름을 요소에 연결하는 속성은?",
  "c": [
   "keyframes-name",
   "transition-name",
   "animation-name",
   "animation-id"
  ],
  "a": 2,
  "e": "animation-name 에 @keyframes 이름을 지정한다. 나머지는 존재하지 않는 속성이다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "`@keyframes s {0%,30%{margin-left:0} 33%,63%{margin-left:-100%} ...}` 에서 0%~30% 구간의 의미는?",
  "c": [
   "첫 장이 이동하는 구간",
   "애니메이션 지연 구간",
   "첫 장이 멈춰 보이는 정지 구간",
   "투명도 변화 구간"
  ],
  "a": 2,
  "e": "시작·끝 값이 같은 구간은 변화가 없으므로 정지 구간이다. 30%~33% 에서 다음 장으로 이동한다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 1,
  "q": "탭 버튼 중 클릭한 것에만 on 클래스를 남기는 코드는?",
  "c": [
   "$(this).addClass('on');",
   "$(this).addClass('on').siblings().removeClass('on');",
   "$(this).toggleClass('on').siblings().addClass('on');",
   "$('.tab li').addClass('on');"
  ],
  "a": 1,
  "e": "클릭한 요소에 on 을 붙이고 형제에게서 on 을 떼야 활성 표시가 하나만 남는다. addClass 만 하면 누적된다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 1,
  "q": "클릭한 탭 번호에 맞는 내용만 보이게 하는 코드는?",
  "c": [
   "$('.tab-cont > div').eq(n).show().siblings().hide();",
   "$('.tab-cont > div').show();",
   "$('.tab-cont > div').eq(n).hide();",
   "$('.tab-cont').eq(n).siblings().show();"
  ],
  "a": 0,
  "e": "n번째 내용만 show 하고 형제는 hide 해야 한다. 전체 show 는 모든 내용을 동시에 보인다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "탭 버튼 a 에 click 을 걸고 `$(this).index()` 를 쓰면 항상 0 이 나오는 이유는?",
  "c": [
   "index() 가 1부터 세기 때문",
   "a 태그는 index() 를 지원하지 않기 때문",
   "click 이벤트가 두 번 발생하기 때문",
   "a 는 li 안의 유일한 자식이라 형제 중 0번째이기 때문"
  ],
  "a": 3,
  "e": "index() 는 형제 중 위치를 구하는데 a 는 각 li 에 하나뿐이다. li 에 바인딩하거나 $(this).parent().index() 를 쓴다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "탭 구성 과제의 초기 화면 CSS 로 옳은 것은?",
  "c": [
   "모든 탭 내용 display:none",
   "모든 탭 내용 display:block",
   "마지막 탭 내용만 display:block",
   "첫 번째 탭 내용만 display:block"
  ],
  "a": 3,
  "e": "페이지를 열었을 때 첫 탭(공지사항)이 보여야 한다. 모두 숨기면 클릭 전까지 빈 영역이 된다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "탭 전환 코드로 옳지 않은 것은?",
  "c": [
   "function 핸들러 안에서 $(this).index() 를 쓴다",
   "return false 로 # 이동을 막는다",
   "탭 버튼 click 핸들러를 화살표 함수로 쓰고 $(this).index() 로 번호를 구한다",
   "siblings() 로 나머지 내용을 숨긴다"
  ],
  "a": 2,
  "e": "화살표 함수에서는 this 가 클릭한 요소가 아니어서 index 가 틀어진다. 나머지는 표준 탭 구현이다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 1,
  "q": "탭 버튼 링크 클릭 시 페이지 맨 위로 튀는 것을 막는 코드는?",
  "c": [
   "return true;",
   "return false;",
   "break;",
   "continue;"
  ],
  "a": 1,
  "e": "jQuery 핸들러에서 return false 는 기본 동작(링크 이동)을 막는다. return true 는 기본 동작을 허용한다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 3,
  "q": "`$('.tab li').click(function(){ var n=$(this).index(); $('.cont div').eq(n).show(); return false; });` 의 결함은?",
  "c": [
   "이전에 보이던 내용을 숨기지 않아 여러 내용이 겹친다",
   "index() 가 동작하지 않는다",
   "return false 때문에 클릭이 막힌다",
   "eq(n) 이 1부터 센다"
  ],
  "a": 0,
  "e": "show 만 하고 형제를 hide 하지 않으면 이전 탭 내용이 남는다. .siblings().hide() 를 이어 써야 한다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "갤러리 탭 요구사항 처리로 옳지 않은 것은?",
  "c": [
   "이미지 3개를 1장으로 합성해 삽입",
   "제공 이미지 3개를 가로 배치",
   "각 img 에 alt 지정",
   "갤러리 탭 클릭 시 갤러리 div 표시"
  ],
  "a": 0,
  "e": "갤러리는 제공 이미지 3개를 가로로 배치하는 것이 공통 요구다. 1장 합성은 배치 요구와 어긋나고 콘텐츠 통째 삽입에 가깝다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 3,
  "q": "탭 버튼과 탭 내용의 연결 방식에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "index 로 같은 순번의 내용을 연다",
   "버튼 0번=공지, 내용 0번=공지로 맞춘다",
   "data 속성·href 로 대상을 지정하는 방법도 있다",
   "버튼 순서와 내용 순서가 달라도 index 매칭은 정상 동작한다"
  ],
  "a": 3,
  "e": "인덱스 매칭은 버튼과 내용의 순서가 같다는 전제에서만 맞다. 순서가 다르면 엉뚱한 내용이 열린다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 1,
  "q": "공지사항 팝업을 띄우는 트리거로 공통 요구사항에 맞는 것은?",
  "c": [
   "페이지 로드 즉시",
   "마지막 공지 글 클릭",
   "첫 번째 공지 글 클릭",
   "슬라이드 이미지 클릭"
  ],
  "a": 2,
  "e": "공통 요구는 공지사항 첫 번째 글을 클릭하면 레이어 팝업이 뜨는 것이다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 1,
  "q": "모달 레이어 팝업이 일반 레이어 팝업과 다른 점은?",
  "c": [
   "새 브라우저 창으로 열린다",
   "뒤 화면을 덮는 반투명 배경 덮개가 있다",
   "닫기 버튼이 없다",
   "자동으로 3초 후 닫힌다"
  ],
  "a": 1,
  "e": "모달은 배경 덮개로 뒤 화면을 가리고 조작을 막는다. 두 방식 모두 같은 페이지 안의 레이어이며 닫기 버튼이 있다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "모달 덮개 CSS 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "position:fixed 로 뷰포트 기준 배치",
   "position:absolute 면 스크롤해도 항상 화면 전체를 덮는다",
   "width·height 100% 로 전체를 덮음",
   "rgba 배경으로 반투명 처리"
  ],
  "a": 1,
  "e": "absolute 는 문서 기준이라 스크롤하면 덮개가 화면에서 벗어난다. 뷰포트 전체를 덮으려면 fixed 를 쓴다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 1,
  "q": "팝업 닫기 버튼 동작 코드로 옳은 것은?",
  "c": [
   "$('.popup .close').click(function(){ $('.popup').hide(); });",
   "$('.popup .close').click(function(){ $('.popup').show(); });",
   "$('.popup').close();",
   "window.close();"
  ],
  "a": 0,
  "e": "닫기는 팝업 레이어를 hide(또는 fadeOut)한다. window.close() 는 브라우저 창을 닫는 것이고 jQuery 에 .close() 메서드는 없다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "팝업이 슬라이드 아래에 깔려 보이지 않을 때 조치로 옳은 것은?",
  "c": [
   "팝업에 overflow:hidden",
   "슬라이드에 display:none",
   "팝업 height 를 0 으로",
   "팝업에 position 지정 후 z-index 를 더 크게"
  ],
  "a": 3,
  "e": "z-index 는 position 이 지정된 요소에서 겹침 순서를 정한다. 슬라이드를 숨기면 요구사항을 어긴다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "레이어 팝업 구현으로 옳지 않은 것은?",
  "c": [
   "div 레이어를 display:none 으로 두었다가 show()",
   "fadeIn()/fadeOut() 으로 부드럽게 표시",
   "window.open() 으로 새 창을 띄운다",
   "닫기를 button type=\"button\" 으로 제작"
  ],
  "a": 2,
  "e": "요구되는 것은 같은 페이지 안의 레이어 팝업이다. 새 창 팝업은 요구와 다르다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "팝업 박스를 화면 정가운데에 놓는 CSS 조합은?",
  "c": [
   "top:50%; left:50%;",
   "margin:auto; float:center;",
   "top:50%; left:50%; transform:translate(-50%,-50%);",
   "text-align:center; vertical-align:middle;"
  ],
  "a": 2,
  "e": "top·left 50% 는 박스의 왼쪽 위 모서리를 가운데에 둔다. translate(-50%,-50%) 로 박스 크기의 절반을 되돌려야 정가운데가 된다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 3,
  "q": "팝업 열기 링크 핸들러에 return false 를 빠뜨렸을 때 증상은?",
  "c": [
   "팝업이 전혀 뜨지 않는다",
   "팝업은 뜨지만 화면이 맨 위로 점프한다",
   "Console 에 오류가 난다",
   "팝업이 새 창으로 열린다"
  ],
  "a": 1,
  "e": "href=\"#\" 의 기본 동작으로 문서 맨 위로 이동한다. show() 는 이미 실행되었으므로 팝업 자체는 뜬다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "팝업 요구사항 처리로 옳지 않은 것은?",
  "c": [
   "페이지를 열면 팝업이 먼저 표시되게 한다",
   ".popup 초기값 display:none",
   "첫 번째 글 클릭 시 show()",
   "닫기 버튼 클릭 시 hide()"
  ],
  "a": 0,
  "e": "팝업은 첫 번째 글을 클릭했을 때 나타나야 하므로 처음에는 숨겨 둔다. 로드 즉시 표시는 요구와 다르다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 3,
  "q": "모달 팝업 구조에서 흔한 실수로 옳은 것은?",
  "c": [
   "박스를 덮개 안에 넣고 덮개를 show/hide",
   "덮개에 rgba 반투명 배경 지정",
   "닫기 버튼에 hide 연결",
   "덮개만 숨기고 박스는 남는 구조로 작성"
  ],
  "a": 3,
  "e": "덮개와 박스를 따로 두고 한쪽만 제어하면 한쪽이 남는다. 박스를 덮개 안에 넣고 덮개 하나를 제어하는 것이 안전하다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 1,
  "q": "첫 번째 공지 글의 링크를 선택하는 권장 코드는?",
  "c": [
   "$('.notice li').last().find('a')",
   "$('.notice a').eq(-1)",
   "$('.notice').children().length",
   "$('.notice li').first().find('a')"
  ],
  "a": 3,
  "e": ".first() 로 첫 li 를 고른 뒤 그 안의 a 를 찾는다. last·eq(-1) 은 마지막 요소다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "팝업 제목·내용 처리로 옳지 않은 것은?",
  "c": [
   "제공 텍스트를 HTML 텍스트로 코딩",
   "제목·내용의 글자 크기·굵기 위계 구분",
   "제공 텍스트를 이미지로 만들어 삽입",
   "참고자료 오탈자는 수정해 작업"
  ],
  "a": 2,
  "e": "콘텐츠는 HTML 코딩이 원칙이고 이미지 통째 삽입은 감점 사유다. 텍스트 위계 구분과 오탈자 수정은 유의사항에 맞는 처리다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "W3C HTML validator 에서 오류가 되는 코드는?",
  "c": [
   "<ul><li>메뉴<\/li><\/ul>",
   "<ul><div>메뉴<\/div><\/ul>",
   "<ol><li>공지<\/li><\/ol>",
   "<li><div>메뉴<\/div><\/li>"
  ],
  "a": 1,
  "e": "ul 의 직계 자식은 li 만 허용된다. li 안에 div 를 넣는 것은 유효하다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "HTML 문서 첫 줄에 반드시 와야 하는 것은?",
  "c": [
   "<!DOCTYPE html>",
   "<html lang=\"ko\">",
   "<meta charset=\"utf-8\">",
   "<head>"
  ],
  "a": 0,
  "e": "DOCTYPE 이 없으면 '시작 태그를 doctype 없이 만남' 오류가 난다. html·meta 는 그 뒤에 온다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "문자 인코딩 요구사항(utf-8)을 HTML 에서 선언하는 코드는?",
  "c": [
   "<meta lang=\"utf-8\">",
   "<html charset=\"utf-8\">",
   "<link charset=\"utf-8\">",
   "<meta charset=\"utf-8\">"
  ],
  "a": 3,
  "e": "HTML5 인코딩 선언은 meta charset 이다. lang 은 언어, html 요소에는 charset 속성이 없다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "W3C HTML validator 에서 오류가 아닌 것은?",
  "c": [
   "<a href=\"#\"><button>닫기<\/button><\/a>",
   "<p><div>공지<\/div><\/p>",
   "<a href=\"#\"><div>배너<\/div><\/a>",
   "<img src=\"images/logo.png\">"
  ],
  "a": 2,
  "e": "HTML5 의 a 는 투명 콘텐츠 모델이라 흐름 콘텐츠 안에서 div 를 감쌀 수 있다. a 안 button 은 상호작용 중첩, p 안 div 는 떠돌이 <\/p>, alt 없는 img 는 오류다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "validator 에서 '경고(Warning)' 수준으로 표시되는 것은?",
  "c": [
   "title 요소 누락",
   "html 요소에 lang 속성 누락",
   "img 의 alt 속성 누락",
   "DOCTYPE 누락"
  ],
  "a": 1,
  "e": "lang 누락은 경고다. title·alt·DOCTYPE 누락은 오류(ERROR)로 표시된다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "같은 스타일을 여러 요소에 줄 때 올바른 선택은?",
  "c": [
   "class 를 여러 요소에 반복 사용",
   "같은 id 를 여러 요소에 반복 사용",
   "id 와 class 를 같은 이름으로 여러 번 사용",
   "요소마다 style 속성 사용"
  ],
  "a": 0,
  "e": "id 는 문서에 한 번만 쓸 수 있어 중복하면 오류다. style 속성 남발은 CSS 별도 파일 조건과도 어긋난다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "HTML5 에서 폐지(obsolete)되어 오류가 나는 코드는?",
  "c": [
   "<nav>메뉴<\/nav>",
   "<section>공지<\/section>",
   "<footer>카피<\/footer>",
   "<center>메뉴<\/center>"
  ],
  "a": 3,
  "e": "center·font 같은 표현 요소는 HTML5 에서 폐지되었다. nav·section·footer 는 HTML5 시맨틱 요소다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "다음 중 validator 오류가 나지 않는 코드는?",
  "c": [
   "<div/>",
   "<div id=\"main menu\">",
   "<br>",
   "<p class=\"a\" class=\"b\">"
  ],
  "a": 2,
  "e": "br 은 void 요소라 그대로 유효하다. 비-void 요소 자기닫기, id 공백, 중복 속성은 모두 오류다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 3,
  "q": "`<p>공지<div>목록<\/div><\/p>` 가 오류인 이유로 옳은 것은?",
  "c": [
   "p 안에는 텍스트를 넣을 수 없다",
   "div 를 만나며 p 가 암묵 종료되어 남은 <\/p> 가 짝 없는 종료 태그가 된다",
   "div 는 반드시 body 직계 자식이어야 한다",
   "p 에 class 가 없어서다"
  ],
  "a": 1,
  "e": "p 는 구문 콘텐츠만 허용하므로 블록 div 시작 시 p 가 자동으로 닫힌다. 그래서 마지막 <\/p> 가 떠돌이 태그로 보고된다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 3,
  "q": "전체 레이아웃을 table 로 짠 답안에 대한 판단으로 옳은 것은?",
  "c": [
   "validator 는 통과할 수 있으나 준수사항(레이아웃 table 금지) 위반이다",
   "validator 오류이므로 즉시 실격이다",
   "HTML5 에서 table 요소가 폐지되어 오류다",
   "table 에 border 만 없으면 허용된다"
  ],
  "a": 0,
  "e": "table 자체는 유효한 요소지만 공개문제 준수사항이 전체 레이아웃의 table 사용을 금지한다. 실격 6사유에는 들지 않는다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "img 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "모든 img 에는 alt 속성이 있어야 한다",
   "장식용 이미지는 alt=\"\" 로 둘 수 있다",
   "로고 이미지의 alt 는 로고명이 적절하다",
   "장식용 이미지는 alt 속성 자체를 생략해야 validator 를 통과한다"
  ],
  "a": 3,
  "e": "alt 속성 자체를 빼면 오류다. 장식은 값을 비워(alt=\"\") 속성은 남긴다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "CSS 파일 연결 코드로 옳은 것은?",
  "c": [
   "<script src=\"css/style.css\"><\/script>",
   "<style src=\"css/style.css\"><\/style>",
   "<link rel=\"stylesheet\" href=\"css/style.css\">",
   "<link href=\"css/style.css\" rel=\"css\">"
  ],
  "a": 2,
  "e": "외부 CSS 는 link rel=\"stylesheet\" 로 연결한다. style 에는 src 속성이 없고 rel 값은 stylesheet 다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "W3C CSS validator 에서 오류가 되는 선언은?",
  "c": [
   "width:1200px;",
   "width:1200;",
   "margin:0;",
   "color:#333;"
  ],
  "a": 1,
  "e": "0 이 아닌 길이 값은 단위가 필수다. margin:0 은 단위 생략이 허용된다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "CSS 로 옳은 코드는?",
  "c": [
   "width:calc(100% - 200px);",
   "width:calc(100%-200px);",
   "width:calc(100% -200px);",
   "width:calc(100%- 200px);"
  ],
  "a": 0,
  "e": "calc 의 + · - 연산자는 양쪽 공백이 필수다. 공백이 없거나 한쪽뿐이면 무효 값이다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "CSS 파일 안 주석으로 옳은 것은?",
  "c": [
   "// 메뉴 영역",
   "<!-- 메뉴 영역 -->",
   "# 메뉴 영역",
   "/* 메뉴 영역 */"
  ],
  "a": 3,
  "e": "CSS 주석은 /* */ 뿐이다. // 는 JS, <!-- --> 는 HTML 주석이다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "CSS validator 오류를 일으키지 않는 것은?",
  "c": [
   "선언 중간의 세미콜론 누락",
   "속성명 오타(colr)",
   "블록의 마지막 선언 뒤 세미콜론 생략",
   "숫자와 단위 사이 공백(1200 px)"
  ],
  "a": 2,
  "e": "마지막 선언의 세미콜론은 생략해도 유효하다. 나머지는 파싱·값 오류다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "Chrome 에서 Console 탭을 바로 여는 단축키는?",
  "c": [
   "Ctrl+Shift+T",
   "Ctrl+Shift+J",
   "Ctrl+U",
   "Ctrl+Shift+N"
  ],
  "a": 1,
  "e": "Ctrl+Shift+J 는 개발자도구 Console 을 바로 연다. Ctrl+U 는 소스 보기, Ctrl+Shift+T 는 닫은 탭 복원, Ctrl+Shift+N 은 시크릿 창이다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "Console 에 `$ is not defined` 가 떴다. 원인으로 가장 적절한 것은?",
  "c": [
   "jQuery 파일을 script.js 보다 뒤에 연결했다",
   "CSS 파일 경로가 틀렸다",
   "img 에 alt 가 없다",
   "slideDown 속도를 200 으로 줬다"
  ],
  "a": 0,
  "e": "$ 는 jQuery 가 만든 전역 함수라 jQuery 가 먼저 로드되어야 한다. CSS 경로·alt 는 Console 의 $ 오류와 무관하다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "`Failed to load resource: net::ERR_FILE_NOT_FOUND` 의 원인은?",
  "c": [
   "jQuery 문법 오류가 있다",
   "CSS 선택자 우선순위가 충돌했다",
   "setInterval 간격이 3초를 넘었다",
   "src·href 가 가리키는 파일이 경로에 없다"
  ],
  "a": 3,
  "e": "이 메시지는 로컬 파일을 찾지 못했다는 뜻이다. 경로 오타·대소문자·폴더 누락을 확인한다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 3,
  "q": "head 에서 ready 없이 `$('.menu > li').hover(...)` 를 실행했을 때 결과는?",
  "c": [
   "`$ is not defined` 오류가 난다",
   "SyntaxError 가 난다",
   "오류 없이 이벤트가 연결되지 않는다",
   "모든 li 에 정상 연결된다"
  ],
  "a": 2,
  "e": "DOM 생성 전이라 선택 결과가 빈 집합이고 jQuery 는 빈 집합에 오류를 내지 않는다. 그래서 Console 은 깨끗해도 메뉴가 동작하지 않는다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 3,
  "q": "head 의 순수 JS `document.querySelector('.close').addEventListener(...)` 가 Console 오류를 낸 이유는?",
  "c": [
   "addEventListener 는 폐지된 API 다",
   "요소 생성 전이라 querySelector 가 null 을 반환했다",
   "class 선택자는 querySelector 에 쓸 수 없다",
   "script 태그에 type 이 없어서다"
  ],
  "a": 1,
  "e": "null 에 메서드를 호출해 TypeError 가 난다. DOMContentLoaded·defer·body 끝 배치로 해결한다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "jQuery 사용 시 Console 오류(… is not a function)를 부르는 코드는?",
  "c": [
   "$('.sub').slidedown(200);",
   "$('.sub').slideDown(200);",
   "$('.sub').stop().slideUp(200);",
   "$('.sub').fadeIn(200);"
  ],
  "a": 0,
  "e": "jQuery 메서드명은 대소문자를 구분하므로 slidedown 은 존재하지 않는다. 나머지는 올바른 메서드다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "JS 준수사항에 맞는 연결 방식은?",
  "c": [
   "<script>…전체 코드…<\/script> 를 body 에 작성",
   "<a onclick=\"…긴 코드…\">",
   "<link rel=\"script\" href=\"script/script.js\">",
   "<script src=\"script/script.js\"><\/script>"
  ],
  "a": 3,
  "e": "준수사항은 JS 를 별도 파일로 연결하도록 요구한다. link 로는 JS 를 불러올 수 없다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 3,
  "q": "Console 점검 방법으로 가장 적절한 것은?",
  "c": [
   "페이지를 연 직후 한 번만 확인한다",
   "Warning 이 없으면 Error 는 확인하지 않는다",
   "새로고침 후 메뉴·슬라이드·탭·팝업을 모두 실행하며 Console 을 본다",
   "Elements 탭에서 HTML 만 확인한다"
  ],
  "a": 2,
  "e": "클릭·hover 시점에 나는 오류는 동작을 실행해야 보인다. 준수사항 기준은 Error 0 이다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 1,
  "q": "Tab 키로 포커스가 이동하지 않는 것은?",
  "c": [
   "<a href=\"#\">메뉴<\/a>",
   "<a>메뉴<\/a>",
   "<button type=\"button\">닫기<\/button>",
   "<select><option>패밀리<\/option><\/select>"
  ],
  "a": 1,
  "e": "href 없는 a 는 링크가 아니라 포커스를 받지 못한다. 그래서 상호작용 요소에 임시링크 # 을 건다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 1,
  "q": "공개문제 준수사항의 '임시 링크' 값으로 옳은 것은?",
  "c": [
   "#",
   "javascript:void(0)",
   "index.html",
   "빈 문자열(href=\"\")"
  ],
  "a": 0,
  "e": "준수사항은 상호작용 요소에 임시 링크 # 를 요구한다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "`#` 링크로 팝업을 열 때 화면이 맨 위로 튀는 것을 막는 코드는?",
  "c": [
   "href 를 지운다",
   "a 에 tabindex=\"-1\" 을 준다",
   "CSS 에 scroll-behavior:smooth 를 준다",
   "핸들러 끝에 return false;"
  ],
  "a": 3,
  "e": "return false(jQuery) 또는 e.preventDefault() 가 기본 이동을 막는다. href 를 지우면 Tab 이동이 깨지고, tabindex=-1 은 Tab 순서에서 뺀다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "접근성 관점에서 옳지 않은 것은?",
  "c": [
   "팝업 닫기를 button type=\"button\" 으로 만든다",
   "패밀리사이트 select 에 title 을 준다",
   "a{outline:none;} 으로 포커스 테두리를 제거한다",
   "로고 img 의 alt 에 로고명을 쓴다"
  ],
  "a": 2,
  "e": "outline 제거는 키보드 사용자에게 현재 위치를 숨긴다. 나머지는 권장 관행이다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "준수사항 'CSS 사용 안 함 시 세로 나열'을 만족하려면?",
  "c": [
   "모든 요소를 position:absolute 로 배치한다",
   "문서 순서를 헤더 → 슬라이드 → 콘텐츠 → 푸터의 논리 순서로 작성한다",
   "레이아웃을 table 로 짠다",
   "콘텐츠를 한 장의 이미지로 넣는다"
  ],
  "a": 1,
  "e": "CSS 를 끄면 HTML 순서대로 보이므로 마크업 순서가 논리적이어야 한다. table·통 이미지는 별도 준수사항 위반이다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 1,
  "q": "공지사항·배너 문구 처리로 옳은 것은?",
  "c": [
   "HTML 텍스트로 코딩한다",
   "문구를 포함한 이미지 한 장으로 넣는다",
   "CSS content 속성으로만 넣는다",
   "alt 에만 문구를 적는다"
  ],
  "a": 0,
  "e": "공통 요구사항은 콘텐츠를 HTML 로 코딩하고 이미지로 통째 삽입하지 말라고 한다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 3,
  "q": "div 에 click 이벤트로 만든 탭 버튼의 문제점과 처방으로 옳은 것은?",
  "c": [
   "validator 오류이므로 span 으로 바꾼다",
   "Console 오류가 나므로 onclick 속성으로 바꾼다",
   "문제 없다",
   "Tab 포커스가 가지 않으므로 a href=\"#\" 로 바꾼다"
  ],
  "a": 3,
  "e": "div 는 기본적으로 포커스를 받지 않아 Tab 이동 조건을 못 지킨다. div 클릭 자체는 validator·Console 오류가 아니다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 3,
  "q": "hover 로 여는 서브메뉴의 키보드 접근 보완으로 적절한 것은?",
  "c": [
   "mouseover 를 mouseenter 로 바꾼다",
   "서브메뉴에 display:none 대신 visibility 를 쓴다",
   "focusin·focusout 이벤트를 함께 연결한다",
   "메뉴 a 의 href 를 없앤다"
  ],
  "a": 2,
  "e": "키보드 포커스 이동은 focusin/focusout 으로 잡을 수 있다(채점 반영 여부는 확인필요). mouse 계열 이벤트는 키보드에 반응하지 않는다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "CSS off 상태를 시험장에서 확인하는 방법으로 적절한 것은?",
  "c": [
   "온라인 CSS Validator 에서 끈다",
   "link 태그를 잠시 주석 처리해 확인하고 복원한다",
   "style.css 파일을 삭제하고 제출한다",
   "Console 에 css off 를 입력한다"
  ],
  "a": 1,
  "e": "시험장은 인터넷이 차단되고 Chrome 기본 CSS 끄기 버튼도 없다. 주석 처리 후 반드시 복원한다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "index.html 에서 images 폴더의 로고를 올바르게 참조한 것은?",
  "c": [
   "images/logo.png",
   "C:\\Users\\user\\Desktop\\01\\images\\logo.png",
   "/images/logo.png",
   "file:///images/logo.png"
  ],
  "a": 0,
  "e": "채점 PC 에서도 동작하려면 index.html 기준 상대경로를 쓴다. 드라이브 절대경로·file 경로는 다른 PC 에서 깨진다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "css/style.css 에서 images/bg.jpg 를 배경으로 쓸 때 옳은 경로는?",
  "c": [
   "url(images/bg.jpg)",
   "url(/css/images/bg.jpg)",
   "url(./bg.jpg)",
   "url(../images/bg.jpg)"
  ],
  "a": 3,
  "e": "CSS 안의 경로는 CSS 파일 위치 기준이라 한 단계 올라가야 한다. images/bg.jpg 는 css/images 를 찾는다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "제출 조건으로 옳지 않은 것은?",
  "c": [
   "index.html 을 비번호 폴더 최상위에 둔다",
   "css·script·images 분류 폴더를 포함한다",
   "용량 절약을 위해 비번호 폴더를 zip 으로 압축한다",
   "전체 용량을 10MB 이하로 맞춘다"
  ],
  "a": 2,
  "e": "압축 파일 제출은 실격 사유다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "제출 폴더에 넣지 말아야 할 파일은?",
  "c": [
   "logo.png",
   "logo.psd",
   "style.css",
   "jquery 파일"
  ],
  "a": 1,
  "e": ".psd·.ai 는 웹에서 쓰지 않는 원본이라 제출 금지이며 용량 초과 원인이 된다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "jQuery 연결로 시험장 조건에 맞는 것은?",
  "c": [
   "제공된 jQuery 파일을 script 폴더에 넣고 상대경로로 연결",
   "CDN 주소로 연결",
   "jQuery 코드를 index.html 에 모두 붙여넣기",
   "script.js 안에서 import 로 불러오기"
  ],
  "a": 0,
  "e": "시험장은 인터넷이 차단되어 CDN 은 로드되지 않는다. 제공 파일을 로컬로 연결한다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 3,
  "q": "HTML 에는 `images/Slide1.JPG`, 폴더에는 `slide1.jpg` 가 있다. 판단으로 옳은 것은?",
  "c": [
   "Windows 이므로 어디서나 항상 안전하다",
   "확장자만 같으면 문제없다",
   "Console 오류가 아니므로 무관하다",
   "대소문자 구분 환경에서 깨질 수 있으므로 표기를 일치시킨다"
  ],
  "a": 3,
  "e": "대소문자까지 일치시키는 것이 원칙이다. 채점 환경을 가정하지 말고 표기를 통일한다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "파일명으로 가장 안전한 것은?",
  "c": [
   "메인 배너.jpg",
   "main banner.jpg",
   "main_banner01.jpg",
   "Main#Banner.JPG"
  ],
  "a": 2,
  "e": "영문 소문자·숫자·언더바 조합이 안전하다. 한글·공백·특수문자는 경로 오류를 부른다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "10MB 초과를 막는 조치로 적절하지 않은 것은?",
  "c": [
   "사진을 JPG 로 품질을 낮춰 저장한다",
   "사진을 PNG-24 로 저장해 화질을 높인다",
   "사용하지 않는 이미지를 삭제한다",
   "psd·ai 원본을 제출 폴더에서 뺀다"
  ],
  "a": 1,
  "e": "사진을 PNG-24 로 저장하면 무손실이라 용량이 커진다. 나머지는 용량 감소 조치다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 1,
  "q": "투명 배경 로고 저장에 알맞은 형식은?",
  "c": [
   "PNG-24",
   "JPG",
   "BMP",
   "PSD"
  ],
  "a": 0,
  "e": "PNG-24 는 알파 투명을 지원한다. JPG 는 투명을 지원하지 않고 PSD 는 제출 금지다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 1,
  "q": "웹 이미지 작업의 색상 모드로 옳은 것은?",
  "c": [
   "CMYK",
   "Lab 전용",
   "Bitmap",
   "RGB"
  ],
  "a": 3,
  "e": "화면용은 RGB 다. CMYK 는 인쇄용이라 브라우저 색이 달라질 수 있다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "포토샵에서 로고의 픽셀 크기 자체를 200×40 으로 줄이는 메뉴는?",
  "c": [
   "캔버스 크기(Alt+Ctrl+C)",
   "자르기 도구(C)만 사용",
   "이미지 크기(Alt+Ctrl+I)",
   "레이어 스타일"
  ],
  "a": 2,
  "e": "이미지 크기는 리샘플링으로 픽셀 수를 바꾼다. 캔버스 크기는 작업 영역만 바꿔 그림이 잘린다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "일러스트레이터에서 로고 문자를 폰트 없는 PC 에서도 같게 보이게 하는 기능은?",
  "c": [
   "문자 스타일 저장",
   "윤곽선 만들기(Shift+Ctrl+O)",
   "대지 도구",
   "그룹(Ctrl+G)"
  ],
  "a": 1,
  "e": "윤곽선 만들기는 문자를 패스로 바꿔 폰트 의존을 없앤다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "푸터 로고 무채색 처리 방법으로 옳지 않은 것은?",
  "c": [
   "CSS opacity:0.5 적용",
   "포토샵 채도 감소(Shift+Ctrl+U)",
   "포토샵 흑백 조정 후 별도 저장",
   "CSS filter:grayscale(100%)"
  ],
  "a": 0,
  "e": "opacity 는 투명도만 낮출 뿐 색은 남는다. 나머지는 모두 무채색 처리다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 1,
  "q": "공개문제 명세상 직접 디자인하는 워드타입 로고 규격은?",
  "c": [
   "300×100px",
   "100×100px",
   "1200×300px",
   "200×40px"
  ],
  "a": 3,
  "e": "직접 디자인형 워드타입 로고는 200×40px 이며, 심벌+로고명형은 190×45(44)px 다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "제공 로고를 삽입할 때 주의점으로 옳은 것은?",
  "c": [
   "영역에 꽉 차도록 가로세로를 따로 늘린다",
   "원본 파일명을 psd 로 바꿔 제출한다",
   "종횡비를 유지하고 과제가 요구하면 주제 색으로 변경한다",
   "로고는 항상 grayscale 로 넣는다"
  ],
  "a": 2,
  "e": "명세는 제공 로고의 종횡비 유지를 요구하고 일부 과제는 색 변경을 필수로 한다. grayscale 은 주로 푸터 로고 요구다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 3,
  "q": "슬라이드 사진 3장의 가공으로 가장 적절한 것은?",
  "c": [
   "원본 고해상도 그대로 PNG-24 로 저장한다",
   "와이어프레임 슬라이드 영역 치수로 자르고 JPG 로 품질을 조절해 저장한다",
   "세 장을 한 이미지로 합쳐 정지 이미지로 넣는다",
   "CMYK 로 변환해 색을 선명하게 한다"
  ],
  "a": 1,
  "e": "영역 치수 맞춤과 JPG 압축이 용량과 레이아웃을 함께 맞춘다. 정지 이미지 한 장은 슬라이드 실격 사유다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "포토샵 '웹용으로 저장(레거시)' 단축키는?",
  "c": [
   "Alt+Shift+Ctrl+S",
   "Alt+Ctrl+I",
   "Shift+Ctrl+U",
   "Ctrl+T"
  ],
  "a": 0,
  "e": "Alt+Ctrl+I 는 이미지 크기, Shift+Ctrl+U 는 채도 감소, Ctrl+T 는 자유 변형이다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 3,
  "q": "로고를 PNG 로 내보낸 뒤 .ai 원본 처리로 옳은 것은?",
  "c": [
   "images 폴더에 함께 둔다",
   "index.html 에 링크한다",
   "zip 으로 묶어 함께 낸다",
   "제출 폴더 밖에 두거나 삭제한다"
  ],
  "a": 3,
  "e": "웹 미사용 파일은 제출 금지이고 압축 제출은 실격이다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 1,
  "q": "실기 시험 시간은?",
  "c": [
   "2시간",
   "4시간",
   "3시간",
   "5시간"
  ],
  "a": 2,
  "e": "2025년 제1회부터 웹디자인개발기능사로 바뀌며 3시간이 되었다(구 웹디자인기능사 4시간)."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "권장 우선순위로 옳은 것은?",
  "c": [
   "디자인 > 기능 > 레이아웃 > 실격 방지",
   "실격 방지 > 레이아웃 일치 > 기능 > 디자인",
   "기능 > 디자인 > 실격 방지 > 레이아웃",
   "레이아웃 > 디자인 > 기능 > 실격 방지"
  ],
  "a": 1,
  "e": "실격이면 나머지 점수가 의미 없으므로 실격 방지가 먼저, 디자인 다듬기는 마지막이다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "JS 구현 시간에 가장 먼저 확보해야 할 기능은?",
  "c": [
   "슬라이드 자동 전환",
   "팝업 닫기 애니메이션",
   "탭 활성 색상",
   "서브메뉴 그림자"
  ],
  "a": 0,
  "e": "슬라이드를 JS·CSS 로 움직이지 않으면 실격이다. 다른 기능 누락은 감점 수준이다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 3,
  "q": "종료 10분 전인데 슬라이드가 멈춰 있다. 가장 적절한 대응은?",
  "c": [
   "팝업 디자인을 먼저 마무리한다",
   "슬라이드 이미지 1장만 고정해 둔다",
   "압축해서 빠르게 제출한다",
   "CSS @keyframes 로라도 자동 무한 반복을 구현하고 점검·저장한다"
  ],
  "a": 3,
  "e": "슬라이드는 JS 또는 CSS 중 하나 이상으로 움직이면 되므로 CSS 애니메이션이 빠른 대안이다. 정지 이미지와 압축 제출은 실격이다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 1,
  "q": "문제 분석 단계(0:00–0:10)에서 체크할 항목이 아닌 것은?",
  "c": [
   "슬라이드 방향(가로·세로·fade)",
   "메뉴 방식",
   "JPG 품질 수치",
   "모달 팝업 여부"
  ],
  "a": 2,
  "e": "첫 10분은 레이아웃·메뉴·슬라이드·탭/별도·모달 5축을 파악한다. JPG 품질은 이미지 가공 단계다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "작업 폴더 운영으로 가장 안전한 것은?",
  "c": [
   "임의 폴더에서 작업 후 마지막에 복사한다",
   "시작부터 바탕화면 비번호 폴더 안에서 작업한다",
   "USB 에 저장해 둔다",
   "다운로드 폴더에서 작업하고 경로만 바꾼다"
  ],
  "a": 1,
  "e": "마지막 이동은 누락·폴더명 오타의 원인이고 비번호 폴더 저장 실패는 실격이다. 개인 USB 는 반입 불가다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 3,
  "q": "과제 기준 20% 이상 미완성 실격을 피하는 전략으로 옳은 것은?",
  "c": [
   "모든 영역(A~D)의 골격을 먼저 완성한 뒤 세부를 다듬는다",
   "헤더를 완벽히 끝낸 뒤 다음 영역으로 간다",
   "디자인 완성도를 먼저 높인다",
   "JS 를 먼저 모두 짠 뒤 HTML 을 만든다"
  ],
  "a": 0,
  "e": "한 영역 완벽주의는 다른 영역 미완성을 부른다. 전 영역 골격 우선이 안전하다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "명세의 권장 타임라인에서 HTML 구조·CSS 레이아웃 구간은?",
  "c": [
   "0:00–0:10",
   "2:20–2:45",
   "2:45–3:00",
   "0:40–1:30"
  ],
  "a": 3,
  "e": "0:40–1:30 이 HTML·CSS, 0:00–0:10 은 분석, 2:20–2:45 는 디자인 다듬기, 2:45–3:00 은 점검이다(공식 아닌 권장안)."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 1,
  "q": "실격 사유에 해당하는 것은?",
  "c": [
   "lang 속성 누락",
   "서브메뉴 속도 200ms",
   "비번호 폴더에 저장하지 못한 경우",
   "갤러리 이미지 alt 를 영어로 작성"
  ],
  "a": 2,
  "e": "비번호 폴더 저장 실패는 공식 실격 사유다. 나머지는 실격 사유가 아니다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 2,
  "q": "제출 전 점검에서 Console 확인 순서로 옳은 것은?",
  "c": [
   "Console 확인 → 새로고침 없이 제출",
   "새로고침 → 모든 기능 동작 → Console 빨간 오류 확인",
   "기능 동작 없이 Elements 만 확인",
   "Warning 만 확인"
  ],
  "a": 1,
  "e": "로드 시점과 동작 시점 오류를 모두 봐야 한다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 2,
  "q": "제출 직전 용량 확인 방법으로 적절한 것은?",
  "c": [
   "비번호 폴더 속성에서 크기를 확인한다",
   "index.html 파일 크기만 본다",
   "zip 으로 압축해 크기를 본다",
   "Console 에서 확인한다"
  ],
  "a": 0,
  "e": "폴더 전체 크기가 10MB 이하여야 한다. 압축본 크기는 기준이 아니며 압축 제출은 실격이다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 1,
  "q": "공통 컬러 요구사항으로 옳은 것은?",
  "c": [
   "배경 #000000, 텍스트 #ffffff",
   "배경 #f5f5f5, 텍스트 #000000",
   "배경·텍스트 모두 자유",
   "배경 #ffffff, 기본 텍스트 #333333"
  ],
  "a": 3,
  "e": "공개문제 공통 요구는 배경 #ffffff·기본 텍스트 #333333, 주조·보조색은 자유다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 3,
  "q": "제출 전 점검에서 찾아야 할 '실격급' 결함은?",
  "c": [
   "공지 날짜 글꼴이 작은 것",
   "배너 모서리가 각진 것",
   "슬라이드가 멈춰 있는 것",
   "메뉴 hover 색이 연한 것"
  ],
  "a": 2,
  "e": "멈춘 슬라이드는 실격이다. 나머지는 디자인 감점 요소다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 2,
  "q": "최종 점검에서 Tab 키로 확인하는 것은?",
  "c": [
   "슬라이드 전환 간격",
   "로고·메뉴·콘텐츠 링크·푸터까지 포커스가 순서대로 이동하는지",
   "CSS 파일 용량",
   "이미지 색상 모드"
  ],
  "a": 1,
  "e": "Tab 이동·선택 가능은 준수사항 4 의 요구다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 3,
  "q": "과제 요구가 fade 슬라이드인데 가로 이동으로 구현했다. 판단으로 옳은 것은?",
  "c": [
   "요구사항 불일치 감점 요소이므로 방향을 맞춘다",
   "움직이기만 하면 요구 충족이다",
   "validator 오류다",
   "Console 오류다"
  ],
  "a": 0,
  "e": "슬라이드가 움직이면 실격은 피하지만 지정 방식과 다르면 감점이다(배점 비공개)."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 1,
  "q": "제공 텍스트에 오탈자가 있을 때 처리는?",
  "c": [
   "원문 그대로 둔다",
   "해당 텍스트를 빼고 작업한다",
   "감독위원에게 새 파일을 요청한다",
   "수정해서 작업한다"
  ],
  "a": 3,
  "e": "유의사항은 참고자료의 오탈자를 수정해 작업하도록 한다."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "웹디자인개발기능사 실기 시험시간은 3시간이다.",
  "a": true,
  "e": "2025년 제1회부터 3시간이다(구 4시간)."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "시험장에서는 온라인 W3C Validator로 제출 전 유효성을 검사할 수 있다.",
  "a": false,
  "e": "인터넷이 차단되고 유효성검사 서비스도 제공하지 않는다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "Dreamweaver는 시험장에서 사용할 수 없다.",
  "a": true,
  "e": "시설목록에 사용 불가로 명시되어 있다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 2,
  "q": "EditPlus는 필수 설치 소프트웨어다.",
  "a": false,
  "e": "EditPlus(3.0 이상)는 선택 설치다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 2,
  "q": "제공된 jQuery 오픈소스 파일을 활용해 제작하는 것은 허용된다.",
  "a": true,
  "e": "제공 리소스(jQuery·이미지·텍스트) 활용이 명시되어 있다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 2,
  "q": "시설목록에 없는 정품 SW는 어떤 경우에도 설치할 수 없다.",
  "a": false,
  "e": "폰트를 제외한 시설목록 외 정품 SW는 감독 입회하에 설치할 수 있다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "제출 폴더명은 수험번호로 한다.",
  "a": false,
  "e": "폴더명은 비번호다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "index.html은 비번호 폴더의 최상위에 있어야 한다.",
  "a": true,
  "e": "메인페이지는 최상위, 리소스는 분류 폴더에 둔다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "용량 절약을 위해 폴더를 zip으로 압축해 제출해도 된다.",
  "a": false,
  "e": "압축 제출은 실격이다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "psd 원본은 작업 증빙이므로 제출 폴더에 함께 넣는 것이 좋다.",
  "a": false,
  "e": "웹에서 사용하지 않는 psd·ai는 제출 금지다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "<link href=\"css/style.css\" rel=\"stylesheet\"> 처럼 상대경로로 연결하면 채점 PC에서도 동작한다.",
  "a": true,
  "e": "상대경로는 폴더를 옮겨도 참조가 유지된다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 3,
  "q": "참고자료에 오탈자가 있어도 원문 그대로 입력해야 감점이 없다.",
  "a": false,
  "e": "오탈자는 수정해서 작업하도록 되어 있다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "CSS는 별도 파일로 링크해야 한다.",
  "a": true,
  "e": "준수사항 2번이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "W3C validator에서 WARNING이 1개라도 있으면 준수사항 위반이다.",
  "a": false,
  "e": "기준은 ERROR 0이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "모든 이미지에는 alt 속성을 넣어야 한다.",
  "a": true,
  "e": "준수사항 9번이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "전체 레이아웃을 table 태그로 구성해도 화면이 같으면 인정된다.",
  "a": false,
  "e": "전체 레이아웃 table 사용은 금지다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "기본 텍스트 색상은 #333333이다.",
  "a": true,
  "e": "배경 #ffffff, 기본 텍스트 #333333이 공통 조건이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 3,
  "q": "<div onclick=\"...\">메뉴<\/div> 로 만든 메뉴도 Tab 이동 조건을 충족한다.",
  "a": false,
  "e": "div는 기본적으로 포커스를 받지 않는다. a href=\"#\"나 button을 써야 한다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 3,
  "q": "CSS를 끄면 콘텐츠가 논리적 순서로 세로 나열되어야 한다.",
  "a": true,
  "e": "문서 순서가 논리적이어야 한다는 요구다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 1,
  "q": "슬라이드 자리에 움직이지 않는 이미지 1장만 넣으면 실격이다.",
  "a": true,
  "e": "Slide를 JS·CSS로 제작하지 않은 경우에 해당한다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "W3C HTML 오류가 있으면 실격이다.",
  "a": false,
  "e": "실격 6사유에 없다. 준수사항 위반 감점 대상이다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 1,
  "q": "과제 기준 20% 이상 미완성이면 실격이다.",
  "a": true,
  "e": "채점위원 판단으로 실격 처리된다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "제출 용량이 10MB를 넘으면 작업범위 초과로 실격이다.",
  "a": true,
  "e": "용량 10MB·시간 3시간 초과가 작업범위 초과다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "반입 금지물을 지참만 하고 사용하지 않았다면 불이익이 없다.",
  "a": false,
  "e": "지참 시 실격, 활용 시 부정행위다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 3,
  "q": "항목별 배점과 감점 폭은 Q-net에 공개되어 있다.",
  "a": false,
  "e": "공식 배점표는 공개되지 않는다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 3,
  "q": "슬라이드를 CSS 애니메이션만으로 구현해도 실격 사유가 아니다.",
  "a": true,
  "e": "JS(jQuery 포함)·CSS 중 하나 이상이면 된다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 1,
  "q": "공개문제 영역은 Header·Slide·Contents·Footer 4개로 구성된다.",
  "a": true,
  "e": "Ⓐ~Ⓓ 4영역이 공통 뼈대다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 1,
  "q": "직접 디자인하는 워드타입 로고 규격은 200×40px이다.",
  "a": true,
  "e": "심벌 없는 워드타입은 200×40px이다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "슬라이드는 사용자가 클릭하면 시작되도록 만들어야 한다.",
  "a": false,
  "e": "페이지를 열면 자동 시작해야 한다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "공지사항 팝업은 첫 번째 글을 클릭했을 때 나타나야 한다.",
  "a": true,
  "e": "공통 요구사항이다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "제공 로고는 영역에 꽉 차도록 가로세로 비율을 바꿔도 된다.",
  "a": false,
  "e": "종횡비를 유지해야 한다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 3,
  "q": "푸터 로고는 대부분의 과제에서 무채색(grayscale)으로 처리한다.",
  "a": true,
  "e": "filter:grayscale(100%) 또는 흑백 이미지를 사용한다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 1,
  "q": "L1 계열은 1200px 가운데정렬, 상단 헤더 구조다.",
  "a": true,
  "e": "과제 1~4가 해당한다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "L3 계열은 1340px 가운데정렬이다.",
  "a": false,
  "e": "L3는 1000px 왼쪽정렬 + 좌측 세로 헤더, 1340px은 L6이다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "calc(100%-200px) 는 올바른 CSS 값이다.",
  "a": false,
  "e": "calc의 +·- 연산자 양옆에 공백이 필요하다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 3,
  "q": "좌측 세로 헤더 계열은 L3·L4·L5로 과제 9~20에 해당한다.",
  "a": true,
  "e": "상단 헤더는 L1·L2·L6이다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 1,
  "q": "Fade 슬라이드는 이미지를 겹쳐 두고 투명도를 전환한다.",
  "a": true,
  "e": "li를 position:absolute로 겹친다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "이동형 슬라이드에서 overflow:hidden을 빼면 다른 이미지가 영역 밖으로 보일 수 있다.",
  "a": true,
  "e": "나열된 이미지가 넘쳐 보이므로 필수다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "메뉴 애니메이션 앞의 .stop()은 선택 사항이며 없어도 동작 차이가 없다.",
  "a": false,
  "e": "없으면 애니메이션 큐가 누적되어 메뉴가 떨린다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 3,
  "q": "가로 슬라이드 과제를 Fade로 구현해도 슬라이드가 움직이므로 요구사항을 모두 충족한다.",
  "a": false,
  "e": "실격은 아니지만 방향 불일치로 감점 대상이다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "24과제 중 모달 레이어 팝업 과제는 레이어 팝업 과제보다 적다.",
  "a": true,
  "e": "모달 11, 레이어 13이다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "탭 구성 과제는 24과제 중 절반인 12개다.",
  "a": false,
  "e": "탭 8개, 별도 16개다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 3,
  "q": "a href=\"#\" 클릭 핸들러에 return false가 없으면 화면이 맨 위로 이동할 수 있다.",
  "a": true,
  "e": "# 링크의 기본 동작 때문이다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "DOCTYPE 선언은 head 안의 첫 줄에 작성한다.",
  "a": false,
  "e": "DOCTYPE은 html 태그보다 앞, 문서 맨 첫 줄에 쓴다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "`<!doctype html>`처럼 소문자로 써도 유효한 선언이다.",
  "a": true,
  "e": "DOCTYPE 선언은 대소문자를 구분하지 않는다. 관례상 대문자를 쓸 뿐이다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "head에 title 요소가 없으면 W3C ERROR가 발생한다.",
  "a": true,
  "e": "title은 head의 필수 자식이다. 비어 있는 title도 ERROR다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "html 태그에 lang 속성이 없으면 W3C ERROR가 발생한다.",
  "a": false,
  "e": "lang 누락은 경고다. 그래도 lang=\"ko\"를 쓰는 것이 표준 관행이다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "meta charset은 body 안 어디에 두어도 효과가 같다.",
  "a": false,
  "e": "인코딩 선언은 head 첫 부분(1024바이트 이내)에 있어야 한다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "meta charset을 utf-8로 선언해도 파일을 다른 인코딩으로 저장하면 한글이 깨질 수 있다.",
  "a": true,
  "e": "선언과 실제 저장 인코딩이 일치해야 한다. 에디터 저장 인코딩을 UTF-8로 확인한다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "CSS를 head의 style 태그 안에 작성하면 'CSS 별도 파일' 조건을 충족한다.",
  "a": false,
  "e": "별도 파일 조건은 link로 외부 CSS를 연결하라는 뜻이다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "jQuery 파일은 script.js보다 먼저 연결해야 한다.",
  "a": true,
  "e": "script.js의 `$`는 jQuery가 정의한다. 거꾸로면 `$ is not defined`."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "시험장에서는 jQuery CDN 주소로 연결해도 정상 동작한다.",
  "a": false,
  "e": "시험장은 인터넷이 차단된다. 제공 jQuery 파일을 상대경로로 연결한다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "script를 <\/body> 직전에 두면 DOM이 만들어진 뒤 실행된다.",
  "a": true,
  "e": "body 끝의 스크립트는 앞의 요소가 모두 파싱된 후 실행된다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "`<script src=\"a.js\"/>`는 HTML5에서 정상적으로 닫힌 태그다.",
  "a": false,
  "e": "script는 빈 요소가 아니므로 반드시 `<\/script>`로 닫는다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 3,
  "q": "link 요소에 rel=\"stylesheet\"가 없으면 CSS가 적용되지 않는다.",
  "a": true,
  "e": "rel이 없으면 스타일시트로 인식되지 않고 검사에서도 ERROR다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 3,
  "q": "async 속성을 붙이면 여러 외부 스크립트가 작성 순서대로 실행된다.",
  "a": false,
  "e": "async는 다운로드 완료 순으로 실행된다. 순서 보장은 defer다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "header 안에 nav를 넣을 수 있다.",
  "a": true,
  "e": "로고와 주 메뉴를 header 안에 두는 것이 일반 구조다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "header 안에 footer를 넣어도 W3C 오류가 없다.",
  "a": false,
  "e": "header 안에는 header·footer를 넣을 수 없어 ERROR다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "section에 제목 요소가 없으면 검사기가 경고를 표시한다.",
  "a": true,
  "e": "section 제목 없음은 경고다. ERROR 0 기준에는 걸리지 않는다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "HTML5에서 div는 사용이 금지된 요소다.",
  "a": false,
  "e": "div는 정상 요소이며 레이아웃 래퍼로 쓴다. 금지는 레이아웃용 table이다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "CSS를 끄면 콘텐츠는 HTML 소스 순서대로 세로 나열된다.",
  "a": true,
  "e": "그래서 A→B→C→D 순서로 마크업한다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 3,
  "q": "한 문서에 보이는 main 요소를 두 개 둘 수 있다.",
  "a": false,
  "e": "보이는 main은 문서당 하나다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "Ⓐ·Ⓓ 100% 배경 과제는 header 안에 1200px 내부 래퍼를 두는 구조가 적합하다.",
  "a": true,
  "e": "바깥은 100% 배경, 안쪽 .inner는 1200px 가운데."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "ul의 직계 자식으로 a를 바로 둘 수 있다.",
  "a": false,
  "e": "ul·ol의 직계 자식은 li만 허용된다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "서브메뉴 ul은 부모 li 안에 중첩한다.",
  "a": true,
  "e": "메인 a 다음, 부모 li 닫기 전에 둔다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 2,
  "q": "메뉴 텍스트 전체를 이미지 한 장으로 넣어도 된다.",
  "a": false,
  "e": "콘텐츠는 HTML 코딩이 원칙이며 개별 메뉴 링크·Tab 이동도 불가능해진다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "순서가 의미를 갖는 목록에는 ol을 쓴다.",
  "a": true,
  "e": "ul은 순서 없는 목록, ol은 순서 목록이다."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 3,
  "q": "세로 메뉴 과제는 가로 메뉴와 다른 HTML 구조(table 등)가 필요하다.",
  "a": false,
  "e": "구조는 nav>ul>li>(a+ul)로 같고 CSS·JS가 방향과 동작을 바꾼다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "button 요소의 type 기본값은 button이다.",
  "a": false,
  "e": "기본값은 submit이다. 그래서 type=\"button\"을 명시한다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "모달 레이어 팝업은 화면을 덮는 배경 요소가 필요하다.",
  "a": true,
  "e": "덮개(.modal) 위에 팝업 박스를 올리는 것이 일반 레이어 팝업과의 차이다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "팝업 div는 body 끝에 두어도 된다.",
  "a": true,
  "e": "본문 흐름과 별개라 footer 뒤에 두면 소스 순서도 자연스럽다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "슬라이드 이미지 1장을 움직이지 않게 배치하면 감점만 받는다.",
  "a": false,
  "e": "Slide를 JS·CSS로 제작하지 않은 경우는 실격 사유다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "공지사항·배너를 포토샵으로 만든 이미지 한 장으로 삽입해도 된다.",
  "a": false,
  "e": "콘텐츠는 HTML로 코딩해야 하며 이미지 통째 삽입은 금지다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "select의 항목은 option 요소로 작성한다.",
  "a": true,
  "e": "select의 자식은 option(또는 optgroup)이다."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "`&copy`처럼 세미콜론을 생략해도 W3C 검사와 무관하다.",
  "a": false,
  "e": "문자 참조는 세미콜론까지 써야 하며 생략은 ERROR다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "장식용 이미지는 alt 속성 자체를 생략해도 된다.",
  "a": false,
  "e": "alt 속성은 필수이고 장식 이미지는 alt=\"\" 빈 값을 준다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "css/style.css 안에서 images 폴더 이미지는 ../images/로 가리킨다.",
  "a": true,
  "e": "CSS 안 경로는 CSS 파일 위치 기준이다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "C:\\로 시작하는 절대경로는 채점 PC에서도 정상적으로 표시된다.",
  "a": false,
  "e": "채점 PC에는 그 경로가 없다. 상대경로를 쓴다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 3,
  "q": "`/images/logo.png`처럼 슬래시로 시작하는 경로는 index.html 기준 상대경로다.",
  "a": false,
  "e": "슬래시 시작은 루트 기준이라 로컬 파일로 열면 드라이브 루트를 찾는다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "img의 width 속성은 `width=\"200\"`처럼 숫자만 쓴다.",
  "a": true,
  "e": "px 단위를 붙이면 ERROR다."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "코드의 파일명과 실제 파일명의 대소문자·확장자를 일치시키는 것이 안전하다.",
  "a": true,
  "e": "환경에 따라 대소문자를 구분하므로 이미지 깨짐을 예방한다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 1,
  "q": "같은 class 값은 여러 요소에 반복해 쓸 수 있다.",
  "a": true,
  "e": "class는 재사용용, id는 유일해야 한다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 1,
  "q": "같은 id 값을 두 요소에 쓰면 W3C ERROR다.",
  "a": true,
  "e": "id 중복은 ERROR다. 반복이 필요하면 class를 쓴다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 1,
  "q": "`<center>`는 HTML5에서 유효한 정렬 요소다.",
  "a": false,
  "e": "center는 폐지 요소로 ERROR다. 정렬은 CSS text-align 등으로."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 3,
  "q": "`<p>` 안에 `<div>`를 넣으면 오류가 발생한다.",
  "a": true,
  "e": "p가 자동으로 닫혀 뒤의 <\/p>가 짝이 없어 ERROR다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "a 요소 안에 button을 넣을 수 있다.",
  "a": false,
  "e": "a 안에는 대화형 요소(a·button·select 등)를 넣을 수 없다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "`<br>`은 닫는 태그 없이 써도 된다.",
  "a": true,
  "e": "br은 빈(void) 요소다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 3,
  "q": "기술 준수사항의 ERROR 0을 맞추려면 경고(warning)까지 모두 없애야 한다.",
  "a": false,
  "e": "기준은 ERROR다. 경고는 ERROR 개수에 포함되지 않는다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "box-sizing 의 기본값은 content-box 이다.",
  "a": true,
  "e": "기본값은 content-box 로 width 가 콘텐츠만 가리킨다. 그래서 리셋에서 border-box 로 바꾼다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "box-sizing:border-box 를 주면 margin 까지 width 에 포함된다.",
  "a": false,
  "e": "border-box 는 padding·border 까지만 포함한다. margin 은 항상 박스 바깥이다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "상하로 인접한 두 블록의 margin 30px 과 20px 은 병합되어 간격이 30px 이 된다.",
  "a": true,
  "e": "세로 마진 병합은 큰 값 하나만 적용한다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "좌우(가로) 방향 margin 도 상하 margin 처럼 병합된다.",
  "a": false,
  "e": "마진 병합은 세로 방향 블록 margin 에서만 일어난다. 가로 margin 은 더해진다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "a 요소는 기본이 인라인이라 display 를 바꾸지 않으면 width·height 가 적용되지 않는다.",
  "a": true,
  "e": "display:block 또는 inline-block 으로 바꿔야 크기가 적용된다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "ul{list-style:none} 만 주면 ul 의 왼쪽 기본 들여쓰기도 사라진다.",
  "a": false,
  "e": "list-style 은 기호만 없앤다. 들여쓰기는 padding 이므로 padding:0 리셋이 필요하다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 1,
  "q": ".menu > li 는 .menu 의 직계 자식 li 만 선택한다.",
  "a": true,
  "e": "> 는 자식 결합자라 서브메뉴 li 는 선택하지 않는다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "id 선택자 1개는 class 선택자 10개보다 명시도가 낮다.",
  "a": false,
  "e": "명시도는 왼쪽 자리부터 비교하므로 (1,0,0) 이 (0,10,0) 보다 높다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "명시도가 같으면 CSS 파일에서 나중에 선언된 규칙이 적용된다.",
  "a": true,
  "e": "동점일 때만 소스 순서로 결정한다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 1,
  "q": ".menu a:hover, .menu a:focus 에서 쉼표를 빼도 같은 의미이다.",
  "a": false,
  "e": "쉼표를 빼면 '호버된 a 안의 포커스된 a' 를 찾는 자손 선택자가 된다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 3,
  "q": "li:nth-child(1) 과 li:first-child 는 같은 요소를 선택한다.",
  "a": true,
  "e": "nth-child 는 1부터 세므로 (1) 이 첫째 자식이다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 3,
  "q": "jQuery 선택자 :eq(0) 은 CSS 파일에서도 유효한 가상 클래스이다.",
  "a": false,
  "e": ":eq() 는 jQuery 확장 선택자로 CSS 표준이 아니다. CSS 에서는 :nth-child() 를 쓴다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 1,
  "q": "margin:0 auto 로 블록을 가운데 정렬하려면 요소에 width 가 지정되어 있어야 한다.",
  "a": true,
  "e": "width 가 auto 면 부모 폭을 가득 채워 남는 공간이 없으므로 가운데로 보이지 않는다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 1,
  "q": "부모에 text-align:center 를 주면 고정폭 블록 자식 박스 자체가 가운데로 이동한다.",
  "a": false,
  "e": "text-align 은 인라인 내용만 정렬한다. 블록 박스는 margin:0 auto 를 쓴다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "배경은 화면 전체, 내용은 1200px 가운데인 영역은 100% 바깥 박스와 1200px 안쪽 박스 두 겹으로 만든다.",
  "a": true,
  "e": "바깥 박스가 배경을, 안쪽 .inner 가 가운데 내용을 담당한다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "vertical-align:middle 은 일반 블록 요소 안 텍스트를 세로 가운데로 정렬한다.",
  "a": false,
  "e": "vertical-align 은 인라인·테이블셀 요소용이다. 한 줄 텍스트는 line-height 를 높이와 같게 준다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 3,
  "q": "position:fixed; left:50%; top:50%; transform:translate(-50%,-50%) 는 크기를 몰라도 요소를 화면 정중앙에 둔다.",
  "a": true,
  "e": "translate 의 % 는 요소 자신 크기 기준이라 폭·높이를 몰라도 절반만큼 되돌린다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "자식이 모두 float 되면 높이를 지정하지 않은 부모의 높이가 0 이 될 수 있다.",
  "a": true,
  "e": "float 는 흐름에서 빠지므로 부모 높이가 붕괴한다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "calc(100%-200px) 처럼 빼기 기호 양옆에 공백이 없어도 정상 동작한다.",
  "a": false,
  "e": "+ · - 양옆 공백이 없으면 무효 선언이다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "flex 컨테이너의 flex-wrap 기본값은 nowrap 이다.",
  "a": true,
  "e": "그래서 넘쳐도 줄바꿈 대신 자식이 줄어든다(flex-shrink:1)."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "display:flex 는 나란히 배치할 자식 요소 각각에 선언한다.",
  "a": false,
  "e": "display:flex 는 부모(컨테이너)에 선언한다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "display:flow-root 는 float 자식을 감싸도록 부모에 새 블록 서식 문맥을 만든다.",
  "a": true,
  "e": "clearfix·overflow:hidden 을 대신하는 부작용 적은 방법이다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 3,
  "q": "flex 아이템에 float:left 를 주면 flex 배치보다 float 가 우선 적용된다.",
  "a": false,
  "e": "flex 아이템에는 float 가 무시된다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "position:absolute 요소는 문서 흐름에서 빠져 원래 자리를 차지하지 않는다.",
  "a": true,
  "e": "뒤 요소가 그 자리를 채운다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "position:relative 요소에 top:20px 을 주면 뒤따르는 요소들도 20px 밀려난다.",
  "a": false,
  "e": "relative 는 원래 자리를 유지한 채 보이는 위치만 옮기므로 뒤 요소는 그대로다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "부모에 position:relative 가 없으면 absolute 자식은 더 위의 non-static 조상(없으면 초기 포함 블록)을 기준으로 배치된다.",
  "a": true,
  "e": "그래서 서브메뉴가 화면 좌상단 쪽에 붙는 버그가 생긴다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "z-index 는 position:static 요소에도 숫자가 클수록 위에 표시된다.",
  "a": false,
  "e": "static 요소(flex·grid 아이템 제외)에는 z-index 가 적용되지 않는다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "이동형 슬라이드 영역에 overflow:hidden 이 없으면 다음 이미지가 영역 밖으로 보인다.",
  "a": true,
  "e": "넘친 부분을 잘라내야 한 장씩만 보인다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 3,
  "q": "모달 덮개에 opacity:0.5 를 주어도 그 안의 팝업 박스는 불투명하게 유지된다.",
  "a": false,
  "e": "opacity 는 자식에게도 적용된다. 배경만 반투명하게 하려면 rgba 배경을 쓴다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "position:fixed 는 스크롤과 관계없이 뷰포트(화면) 기준으로 위치한다.",
  "a": true,
  "e": "모달 덮개에 fixed 를 쓰는 이유다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 1,
  "q": "1200px 가운데 정렬 계열은 래퍼에 width:1200px; margin:0 auto 를 준다.",
  "a": true,
  "e": "고정폭 가운데 정렬의 기본 공식이다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "1000px 왼쪽 정렬 계열도 래퍼에 margin:0 auto 를 주는 것이 와이어프레임에 맞다.",
  "a": false,
  "e": "왼쪽 정렬 계열에 margin:0 auto 를 주면 가운데로 옮겨져 배치가 달라진다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "height:calc(100vh - 120px) 는 화면 높이에서 120px 을 뺀 높이다.",
  "a": true,
  "e": "vh 는 뷰포트 높이의 1% 단위다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "height:100% 는 부모 높이가 지정되지 않아도 항상 화면 높이만큼 늘어난다.",
  "a": false,
  "e": "% 높이는 부모 높이가 정해져 있어야 계산된다. 화면 기준은 100vh 다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 3,
  "q": "실제 출제는 공개문제와 일부 다를 수 있으므로 받은 문제지 와이어프레임 치수를 따른다.",
  "a": true,
  "e": "공개문제에도 실제 문제가 일부 변경되거나 다를 수 있다고 안내되어 있다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "공통 규정상 배경색은 #ffffff, 기본 텍스트 색은 #333333 이다.",
  "a": true,
  "e": "body{background:#ffffff; color:#333333} 로 반영한다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "CSS 를 index.html 요소의 style 속성으로만 작성해도 '별도 파일' 조건을 만족한다.",
  "a": false,
  "e": "CSS 는 별도 파일로 만들어 link 로 연결해야 한다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "전체 레이아웃을 table 태그로 구성하는 것은 금지된다.",
  "a": true,
  "e": "레이아웃은 CSS 로 구성해야 한다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 2,
  "q": "푸터 로고 무채색은 포토샵 흑백 이미지로만 가능하고 CSS 로는 불가능하다.",
  "a": false,
  "e": "filter:grayscale(100%) 로 CSS 처리도 가능하다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 2,
  "q": "CSS 를 껐을 때 콘텐츠가 세로로 논리적으로 나열되려면 HTML 소스 순서가 논리적이어야 한다.",
  "a": true,
  "e": "CSS off 상태는 소스 순서대로 표시된다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 2,
  "q": "#33 처럼 2자리 16진수 색상값도 CSS 검사에서 유효하다.",
  "a": false,
  "e": "3자리 #rgb 또는 6자리 #rrggbb 형식을 써야 한다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "서브메뉴 ul 은 메인 메뉴 li 의 자식으로 넣는다.",
  "a": true,
  "e": "li 안에 넣어야 ul 직계=li 규칙과 hover 유지를 모두 만족한다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "<ul> 안에 <a> 를 li 없이 바로 넣어도 W3C 검사를 통과한다.",
  "a": false,
  "e": "ul 의 직계 자식은 li 만 허용된다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "메뉴 항목은 <a href=\"#\"> 로 작성해 Tab 이동이 가능하게 한다.",
  "a": true,
  "e": "a[href] 는 기본 포커스 대상이며 임시링크 # 요구도 충족한다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "href 속성이 없는 <a>메뉴<\/a> 도 Tab 키 포커스를 받는다.",
  "a": false,
  "e": "href 가 없는 a 는 링크가 아니므로 포커스를 받지 않는다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "CSS 를 끄면 올바른 메뉴 마크업은 메인과 서브가 문서 순서대로 세로 목록으로 보인다.",
  "a": true,
  "e": "준수사항 'CSS 사용 안 함 시 세로 나열'이 이를 요구한다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "같은 모양의 서브메뉴가 여러 개면 모두 id=\"sub\" 로 지정한다.",
  "a": false,
  "e": "id 는 문서 내 고유. 반복은 class 로 한다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "jQuery slideDown 으로 열 서브메뉴는 초기에 display:none 으로 숨겨 둔다.",
  "a": true,
  "e": "slideDown 은 숨겨진 요소에서 동작한다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "서브를 absolute 로 배치할 때 메인 li 에 position:relative 를 준다.",
  "a": true,
  "e": "li 가 absolute 의 기준점이 된다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "`.menu li{float:left}` 는 메인 li 만 가로 배치한다.",
  "a": false,
  "e": "후손 선택자라 서브 li 까지 선택된다. `.menu > li` 를 쓴다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "CSS transition 으로 display:none 에서 display:block 으로 부드럽게 바꿀 수 있다.",
  "a": false,
  "e": "display 는 전환되지 않는다. max-height·opacity 등을 전환한다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "헤더에 overflow:hidden 을 주면 헤더 밖으로 내려오는 서브메뉴가 잘릴 수 있다.",
  "a": true,
  "e": "overflow:hidden 은 박스 밖 내용을 잘라낸다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 3,
  "q": "a:focus{outline:none} 만 지정하고 다른 포커스 표시를 주지 않아도 키보드 사용에 문제가 없다.",
  "a": false,
  "e": "Tab 위치가 보이지 않는다. 지웠다면 대체 강조를 준다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "서브메뉴 항목에도 mouse over 하이라이트를 준다.",
  "a": true,
  "e": "공개문제 공통 요구에 서브 항목 하이라이트가 포함된다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "M1 개별 드롭다운은 마우스를 올린 메뉴의 서브만 펼친다.",
  "a": true,
  "e": "올린 li 의 서브만 $(this).children('.sub') 로 다룬다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 2,
  "q": "M1 에서 $('.sub').stop().slideDown() 을 쓰면 올린 메뉴의 서브만 열린다.",
  "a": false,
  "e": "$('.sub') 는 모든 서브를 선택한다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 2,
  "q": "메인과 서브 사이에 틈이 있으면 틈을 지날 때 서브가 닫힐 수 있다.",
  "a": true,
  "e": "틈이 li 영역 밖이면 mouseleave 가 발생한다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "인자 없는 show() 로 서브를 띄우면 '부드럽게 나타남' 요구를 충족한다.",
  "a": false,
  "e": "인자 없는 show() 는 즉시 표시된다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 3,
  "q": "head 에서 불러온 script.js 는 $(function(){ }) 없이도 body 의 메뉴 요소를 선택할 수 있다.",
  "a": false,
  "e": "실행 시점에 요소가 아직 없다. DOM 준비 후 실행해야 한다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 1,
  "q": "M3 전체폭 서브 띠는 메뉴에 올리면 모든 서브가 함께 나타나는 방식이다.",
  "a": true,
  "e": "M2·M3 는 모든 서브를 동시에 펼친다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M3 는 메인 li 마다 이벤트를 걸어야 메뉴 사이 이동 시 띠가 유지된다.",
  "a": false,
  "e": "메뉴와 띠를 감싼 부모 하나에 건다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M3 배경 띠의 z-index 는 서브 ul 보다 낮아야 한다.",
  "a": true,
  "e": "띠가 위에 오면 서브 링크를 덮는다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 3,
  "q": "M3 배경 띠가 이벤트를 건 nav 밖에 있어도 띠 위에서 서브는 계속 열려 있다.",
  "a": false,
  "e": "띠 진입이 nav 이탈이 되어 mouseleave 로 닫힌다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M2 와 M3 는 모든 서브가 동시에 열린다는 점은 같고 배경 영역의 폭이 다르다.",
  "a": true,
  "e": "M2 는 메뉴 폭 박스, M3 는 전체폭 띠다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 3,
  "q": "absolute 인 띠에 width:100% 를 주면 기준 조상 폭과 상관없이 항상 브라우저 전체 폭이 된다.",
  "a": false,
  "e": "% 폭은 기준 조상의 폭을 따른다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 1,
  "q": "M4 아코디언은 서브가 펼쳐지며 아래 메인 항목을 밀어 내린다.",
  "a": true,
  "e": "서브가 문서 흐름 안(static)에 있기 때문이다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 2,
  "q": "M5 플라이아웃 서브는 left:100%; top:0 으로 li 오른쪽 옆에 배치한다.",
  "a": true,
  "e": "li 를 relative 기준으로 오른쪽에 붙인다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 2,
  "q": "M4 아코디언 서브는 position:absolute 로 두는 것이 정석이다.",
  "a": false,
  "e": "absolute 면 아래 메뉴를 덮는다. 흐름 안에 둔다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 3,
  "q": "M6 는 올린 메인 항목 바로 옆에 해당 서브만 작게 펼치는 방식이다.",
  "a": false,
  "e": "그것은 M5 다. M6 는 우측 넓은 패널에 전체 서브를 표시한다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": "mouseenter 는 자식 요소로 이동할 때 다시 발생하지 않는다.",
  "a": true,
  "e": "mouseover 와의 핵심 차이다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": ".hover(f1, f2) 는 mouseover 와 mouseout 의 단축형이다.",
  "a": false,
  "e": "mouseenter 와 mouseleave 의 단축형이다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": ".stop() 은 애니메이션 메서드 앞에 써야 한다.",
  "a": true,
  "e": ".stop().slideDown() 순서다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": "slideDown() 을 인자 없이 호출하면 600ms 동안 애니메이션한다.",
  "a": false,
  "e": "기본 400ms. 'slow' 가 600ms 다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 3,
  "q": "화살표 함수 안의 $(this) 도 이벤트가 발생한 요소를 가리킨다.",
  "a": false,
  "e": "화살표 함수는 this 를 바인딩하지 않는다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": "mouseover 는 버블링하므로 자식 요소 진입 시 부모에서도 다시 발생한다.",
  "a": true,
  "e": "그래서 메뉴에는 mouseenter 를 쓴다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 3,
  "q": "jQuery 3.x 에서도 .toggle(f1, f2) 로 클릭 시 두 함수를 번갈아 실행할 수 있다.",
  "a": false,
  "e": "이벤트형 toggle 은 1.9 에서 제거되었다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": ".on('mouseenter focusin', fn) 처럼 공백으로 여러 이벤트를 한 번에 연결할 수 있다.",
  "a": true,
  "e": "공백 구분 이벤트 문자열을 지원한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 1,
  "q": "focusin 은 버블링하므로 자식 a 의 포커스를 부모 li 에서 잡을 수 있다.",
  "a": true,
  "e": "focus 는 버블링하지 않는다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "display:none 으로 숨긴 서브 링크도 Tab 키로 순서대로 이동된다.",
  "a": false,
  "e": "숨은 요소는 Tab 순서에서 빠진다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "시험장에서는 jQuery 를 CDN 주소로 연결해도 된다.",
  "a": false,
  "e": "인터넷 차단. 제공 파일을 상대경로로 연결한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 1,
  "q": "script.js 는 jQuery 파일보다 뒤에 연결한다.",
  "a": true,
  "e": "먼저 연결하면 $ is not defined 오류가 난다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": ".menu > li:focus-within > .sub 는 li 안의 링크에 포커스가 있을 때 적용된다.",
  "a": true,
  "e": ":focus-within 은 후손 포커스에도 적용된다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "$(function(){ }) 은 $(document).ready(function(){ }) 의 단축형이다.",
  "a": true,
  "e": "둘 다 DOM 준비 후 실행된다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "jQuery 3.x 에서도 $(window).load(fn) 으로 load 이벤트를 바인딩할 수 있다.",
  "a": false,
  "e": "이벤트 단축형 .load() 는 3.0 에서 제거되었다. on('load', fn) 을 쓴다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "선택자가 아무 요소도 찾지 못하면 jQuery 는 Console 에 오류를 표시한다.",
  "a": false,
  "e": "빈 jQuery 객체가 되어 조용히 무시된다. 그래서 ready 누락이 찾기 어렵다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "화살표 함수로 작성한 이벤트 핸들러 안의 this 는 클릭한 요소를 가리킨다.",
  "a": false,
  "e": "화살표 함수는 바깥 스코프의 this 를 쓴다. 요소가 필요하면 function 을 쓴다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "jQuery 핸들러의 return false 는 preventDefault 와 stopPropagation 을 모두 수행한다.",
  "a": true,
  "e": "기본 동작과 전파를 함께 막는다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": ".index() 는 형제 요소 중 위치를 1부터 센다.",
  "a": false,
  "e": "0부터 센다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "JS 코드를 HTML 안 <script> 태그에 직접 작성해도 준수사항에 맞는다.",
  "a": false,
  "e": "JS 는 별도 파일로 연결하는 것이 준수사항이다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 3,
  "q": "<div> 로 만든 닫기 버튼은 별도 처리 없이 Tab 키로 포커스를 받을 수 있다.",
  "a": false,
  "e": "div 는 기본 포커스 대상이 아니다. a 또는 button 을 쓴다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "mouseover 는 자식 요소를 드나들 때도 다시 발생한다.",
  "a": true,
  "e": "버블링되므로 자식 이동 시 재발생한다. mouseenter 는 그렇지 않다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "슬라이드를 움직이지 않는 이미지 1장으로 배치하면 실격이다.",
  "a": true,
  "e": "JS·CSS 중 하나 이상으로 제작하지 않은 경우 실격이다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "setInterval 의 시간 인자 단위는 초(s)다.",
  "a": false,
  "e": "밀리초(ms)다. 3초는 3000."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "setTimeout(fn, 3000) 한 번 호출로 3초마다 반복 실행된다.",
  "a": false,
  "e": "setTimeout 은 1회만 실행된다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "3장 순환에서 i = (i + 1) % 3 은 0, 1, 2, 0 … 을 만든다.",
  "a": true,
  "e": "나머지 연산으로 마지막 다음에 0 이 된다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "슬라이드는 사용자가 클릭한 뒤 시작해도 요구사항을 만족한다.",
  "a": false,
  "e": "페이지를 열면 자동 시작해야 한다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "전환 간격을 5초로 설정해도 무한 반복만 되면 요구사항을 만족한다.",
  "a": false,
  "e": "매 3초 이내 전환이 요구된다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 3,
  "q": "카운터 변수를 setInterval 콜백 안에서 let 으로 선언하면 매 호출마다 초기화된다.",
  "a": true,
  "e": "콜백 밖에 선언해야 값이 누적된다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "애니메이션 시간은 setInterval 간격보다 짧게 잡는 것이 안전하다.",
  "a": true,
  "e": "길면 효과 큐가 누적되어 전환이 밀린다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "clearInterval 에는 setInterval 이 반환한 ID 를 넘긴다.",
  "a": true,
  "e": "반환 ID 로 해당 타이머를 멈춘다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 3,
  "q": "setInterval(slide(), 3000) 은 3초마다 slide 를 호출한다.",
  "a": false,
  "e": "괄호가 있으면 즉시 1회 실행한 반환값을 넘겨 반복되지 않는다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "가로 이동 슬라이드의 창 요소에는 overflow:hidden 이 필요하다.",
  "a": true,
  "e": "창 밖에 대기 중인 장을 가린다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "position 이 static 인 요소도 animate({left: …}) 로 이동시킬 수 있다.",
  "a": false,
  "e": "left·top 은 position 이 지정된 요소에서만 효과가 있다. static 이면 margin 을 쓴다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "세로 슬라이드는 margin-top 이나 top 값을 바꿔 이동한다.",
  "a": true,
  "e": "창 높이 × 인덱스만큼 음수로 옮긴다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "jQuery animate 의 기본 duration 은 400ms 다.",
  "a": true,
  "e": "시간을 생략하면 400ms 가 적용된다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "jQuery 코어만으로 배경색을 animate 할 수 있다.",
  "a": false,
  "e": "색상 애니메이션은 jQuery UI 등 플러그인이 필요하다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 3,
  "q": "복제 방식 무한 루프에서는 복제본 도착 후 animate 로 천천히 처음 위치로 되돌린다.",
  "a": false,
  "e": "애니메이션 없이 css 로 즉시 되돌려야 끊김이 보이지 않는다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "animate 의 완료 콜백은 애니메이션이 끝난 뒤 실행된다.",
  "a": true,
  "e": "리셋 코드를 완료 콜백에 둔다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 3,
  "q": "폭 100% 가로 슬라이드에서 이동 거리를 1200px 고정으로 써도 모든 해상도에서 맞는다.",
  "a": false,
  "e": "창 폭이 바뀌므로 백분율 이동이 필요하다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 1,
  "q": "Fade 슬라이드에서는 모든 li 를 position:absolute 로 겹친다.",
  "a": true,
  "e": "같은 자리에 겹쳐야 교차 전환이 된다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "fadeOut() 이 끝나면 요소는 display:none 이 된다.",
  "a": true,
  "e": "fadeTo 와 달리 display 까지 처리한다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 3,
  "q": "fadeOut 완료 콜백 안에서 fadeIn 을 호출해야 빈 화면 없이 교차된다.",
  "a": false,
  "e": "순차 호출이면 사이에 빈 화면이 생긴다. 동시에 호출해야 크로스페이드다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "Fade 과제를 좌우 이동 animate 로 만들어도 방향 요구를 만족한다.",
  "a": false,
  "e": "Fade 과제는 투명도 전환이 요구된다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 1,
  "q": "fadeTo(1000, 0.5) 는 투명도를 0.5 까지 바꾼다.",
  "a": true,
  "e": "두 번째 인자가 목표 투명도다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 1,
  "q": "CSS @keyframes 만으로 만든 슬라이드도 허용된다.",
  "a": true,
  "e": "JS·CSS 중 하나 이상이면 된다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "animation 에 infinite 를 빼도 슬라이드는 계속 반복된다.",
  "a": false,
  "e": "기본 반복 횟수는 1회다."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "3장·장당 3초 CSS 슬라이드의 한 주기는 9초다.",
  "a": true,
  "e": "3 × 3초 = 9초."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "keyframes 에서 시작·끝 값이 같은 % 구간은 정지 구간이 된다.",
  "a": true,
  "e": "값 변화가 없으므로 멈춰 보인다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 1,
  "q": "탭 전환 시 클릭한 탭에 on 을 붙이고 형제의 on 을 제거한다.",
  "a": true,
  "e": "addClass + siblings().removeClass 조합."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "탭 버튼 a 에 이벤트를 걸고 $(this).index() 를 쓰면 탭 번호가 정확히 나온다.",
  "a": false,
  "e": "a 는 li 안 유일한 자식이라 항상 0 이다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "탭 구성 과제는 처음 화면에서 첫 번째 탭 내용이 보여야 한다.",
  "a": true,
  "e": "초기 CSS 로 첫 내용만 표시한다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 3,
  "q": "탭 전환에서 해당 내용을 show() 만 하면 이전 내용은 자동으로 숨겨진다.",
  "a": false,
  "e": "형제를 hide() 해야 한다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 1,
  "q": "공지사항 첫 번째 글을 클릭하면 레이어 팝업이 뜨는 것이 공통 요구다.",
  "a": true,
  "e": "첫 번째 글 → 팝업, 팝업 안 닫기 버튼."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 1,
  "q": "레이어 팝업은 window.open() 으로 새 창을 띄우는 방식이다.",
  "a": false,
  "e": "같은 페이지 안의 div 레이어로 구현한다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "모달 팝업의 배경 덮개는 position:fixed 로 화면 전체를 덮는다.",
  "a": true,
  "e": "스크롤과 무관하게 뷰포트 전체를 덮는다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "z-index 는 position 이 static 인 요소에도 적용된다.",
  "a": false,
  "e": "positioned 요소(relative·absolute·fixed 등)에 적용된다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "팝업 열기 핸들러에 return false 가 없으면 팝업이 아예 뜨지 않는다.",
  "a": false,
  "e": "팝업은 뜨지만 # 링크 때문에 화면이 위로 튄다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 3,
  "q": "모달 과제에서 덮개 없이 박스만 띄워도 모달 요구를 만족한다.",
  "a": false,
  "e": "모달은 배경 덮개가 핵심이다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "시험장에서는 W3C 온라인 Validator 를 사용할 수 있다.",
  "a": false,
  "e": "인터넷이 차단되고 HTML 유효성검사 서비스는 제공하지 않는다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "모든 img 요소에는 alt 속성이 있어야 한다.",
  "a": true,
  "e": "validator 오류 방지이자 준수사항 9 다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "`<html>` 에 lang 속성이 없으면 validator ERROR 로 표시된다.",
  "a": false,
  "e": "lang 누락은 경고(Warning)다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "`<ul>` 의 직계 자식으로 `<a>` 를 둘 수 있다.",
  "a": false,
  "e": "ul 의 직계 자식은 li 만 허용된다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 3,
  "q": "HTML5 에서 `<a href=\"#\">` 안에 div 를 넣으면 부모 맥락과 무관하게 항상 오류다.",
  "a": false,
  "e": "a 는 투명 콘텐츠 모델이라 부모가 흐름 콘텐츠를 허용하면 유효하다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "같은 id 를 두 요소에 쓰면 validator 오류다.",
  "a": true,
  "e": "id 는 문서 내 유일해야 한다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "`<center>` 요소는 HTML5 에서 폐지되어 오류가 난다.",
  "a": true,
  "e": "표현용 요소는 CSS 로 대체한다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 3,
  "q": "table 로 전체 레이아웃을 짜면 validator 가 오류로 표시한다.",
  "a": false,
  "e": "validator 오류는 아니지만 준수사항(레이아웃 table 금지) 위반이다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "CSS 는 별도 파일로 만들어 link 로 연결해야 한다.",
  "a": true,
  "e": "준수사항 2 다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "CSS 에서 `margin:0;` 처럼 값이 0 이면 단위를 생략해도 된다.",
  "a": true,
  "e": "0 이 아닌 길이만 단위가 필수다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "`calc(100%-200px)` 는 유효한 CSS 값이다.",
  "a": false,
  "e": "- 연산자 양쪽에 공백이 필요하다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "CSS 에서 `// 주석` 을 써도 validator 를 통과한다.",
  "a": false,
  "e": "CSS 주석은 /* */ 뿐이다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 3,
  "q": "Console 에 오류가 0 이면 jQuery 기능도 모두 정상 동작한다.",
  "a": false,
  "e": "선택자 오타·ready 누락은 오류 없이 동작만 안 한다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "Console 점검 기준은 Chrome 개발자도구의 Error 0 이다.",
  "a": true,
  "e": "준수사항 3 이다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 3,
  "q": "클릭할 때만 발생하는 JS 오류는 페이지를 새로고침만 해도 Console 에 보인다.",
  "a": false,
  "e": "해당 동작을 실행해야 발생·표시된다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 1,
  "q": "href 없는 a 요소도 Tab 키로 포커스된다.",
  "a": false,
  "e": "href 가 있어야 링크로서 포커스를 받는다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 1,
  "q": "로고·메뉴·버튼 등 상호작용 요소에는 임시 링크 # 을 건다.",
  "a": true,
  "e": "준수사항 4 다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "`#` 링크 핸들러에 return false 를 쓰면 페이지 상단 튐을 막을 수 있다.",
  "a": true,
  "e": "jQuery 에서 기본 동작과 전파를 막는다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "장식 이미지는 alt 속성을 생략하는 것이 표준이다.",
  "a": false,
  "e": "속성은 두고 값을 비운다(alt=\"\")."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "공지사항 문구를 이미지 한 장으로 넣어도 alt 만 있으면 요구를 충족한다.",
  "a": false,
  "e": "콘텐츠는 HTML 코딩이 요구된다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 3,
  "q": "CSS 를 끈 상태에서 콘텐츠가 논리 순서대로 세로 나열되어야 한다.",
  "a": true,
  "e": "준수사항 7 이다."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 3,
  "q": "`a:focus{outline:none}` 은 접근성을 높인다.",
  "a": false,
  "e": "포커스 위치를 숨겨 키보드 접근성을 해친다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "압축 파일로 제출하면 실격이다.",
  "a": true,
  "e": "공식 실격 사유다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "전체 제출 용량은 10MB 를 넘으면 안 된다.",
  "a": true,
  "e": "초과 시 작업범위 초과로 실격 사유다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "css/style.css 안의 `url(images/bg.jpg)` 는 index.html 기준으로 해석된다.",
  "a": false,
  "e": "CSS 파일 기준이라 ../images/bg.jpg 가 맞다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "시험장에서 jQuery 를 CDN 링크로 연결하면 로드되지 않는다.",
  "a": true,
  "e": "인터넷 차단 환경이므로 제공 파일을 로컬 상대경로로 연결한다."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 3,
  "q": "psd 원본은 용량만 10MB 이하면 제출 폴더에 넣어도 된다.",
  "a": false,
  "e": "웹 미사용 파일은 용량과 무관하게 제출 금지다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 1,
  "q": "JPG 는 투명 배경을 지원하지 않는다.",
  "a": true,
  "e": "투명은 PNG(-24 알파)·GIF 가 지원한다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "캔버스 크기 조정은 이미지 픽셀을 리샘플링해 전체를 축소한다.",
  "a": false,
  "e": "캔버스 크기는 작업 영역만 바꾼다. 리샘플링은 이미지 크기다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "일러스트 로고 문자를 윤곽선으로 만들면 폰트 없는 환경에서도 모양이 유지된다.",
  "a": true,
  "e": "문자가 패스로 바뀐다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 1,
  "q": "웹용 이미지는 RGB 모드로 작업한다.",
  "a": true,
  "e": "CMYK 는 인쇄용이다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 3,
  "q": "CSS `opacity:0.3` 을 주면 푸터 로고가 무채색이 된다.",
  "a": false,
  "e": "투명도만 바뀐다. 무채색은 grayscale·채도 감소다."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "제공 로고는 영역에 맞춰 가로세로 비율을 자유롭게 바꿔도 된다.",
  "a": false,
  "e": "종횡비 유지가 요구된다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "시간이 부족하면 슬라이드를 정지 이미지 1장으로 두는 것이 안전하다.",
  "a": false,
  "e": "움직이지 않는 슬라이드는 실격이다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "명세의 권장 타임라인은 공단이 정한 공식 배분이다.",
  "a": false,
  "e": "학습용 권장안이며 공식 배분이 아니다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 3,
  "q": "한 영역을 완벽히 끝내고 다음 영역으로 가는 것이 20% 미완성 실격을 피하는 데 유리하다.",
  "a": false,
  "e": "전 영역 골격을 먼저 완성하는 편이 안전하다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 1,
  "q": "비번호 폴더에 저장하지 못하면 실격이다.",
  "a": true,
  "e": "공식 실격 사유다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 2,
  "q": "공통 요구사항의 기본 텍스트 색은 #333333 이다.",
  "a": true,
  "e": "배경은 #ffffff 다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 2,
  "q": "제공 텍스트의 오탈자는 원문 그대로 두어야 한다.",
  "a": false,
  "e": "유의사항은 오탈자를 수정해 작업하도록 한다."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 3,
  "q": "슬라이드가 요구 방향과 달라도 움직이면 실격은 피한다.",
  "a": true,
  "e": "실격은 피하나 요구 불일치 감점 요소다."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "실기 시험시간과 제출 용량 상한을 쓰시오.",
  "a": "3시간, 10MB",
  "k": [
   "3시간",
   "10MB"
  ],
  "e": "둘 다 초과하면 작업범위 초과 실격이다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 1,
  "q": "시설목록에서 '사용 불가'로 지정된 웹 저작 도구는?",
  "a": "Dreamweaver",
  "k": [
   "Dreamweaver"
  ],
  "e": "EditPlus는 선택 설치, 나머지는 필수 설치다."
 },
 {
  "s": "s1",
  "t": "시험 개요·도구",
  "d": 2,
  "q": "채점 기준이 되는 브라우저와 JS 오류를 확인하는 도구를 쓰시오.",
  "a": "최신 Google Chrome, 개발자도구 Console",
  "k": [
   "Chrome",
   "Console"
  ],
  "e": "Console ERROR 0이 기준이다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "제출 폴더명은 무엇으로 하는가?",
  "a": "비번호",
  "k": [
   "비번호"
  ],
  "e": "바탕화면에 비번호 폴더로 저장한다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "<link rel=\"stylesheet\" href=\"____/style.css\"> 빈칸(표준 제출 구조의 CSS 폴더명)은?",
  "a": "css",
  "k": [
   "css"
  ],
  "e": "images·script·css 분류 폴더를 둔다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "<script src=\"____/script.js\"><\/script> 빈칸(공개문제 예시 JS 폴더명)은?",
  "a": "script",
  "k": [
   "script"
  ],
  "e": "공개문제 예시 폴더명은 images·script·css다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "C:\\Users\\… 로 시작하는 경로 대신 써야 하는 경로 방식은?",
  "a": "상대경로",
  "k": [
   "상대경로"
  ],
  "e": "채점위원 PC에서 정상 동작해야 한다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 3,
  "q": "제출 금지인 대표적 원본 파일 확장자 2가지를 쓰시오.",
  "a": "psd, ai",
  "k": [
   "psd",
   "ai"
  ],
  "e": "웹에서 사용하지 않는 파일은 제출하지 않는다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "W3C HTML·CSS validator와 Console에서 요구되는 오류 수는?",
  "a": "ERROR 0",
  "k": [
   "0"
  ],
  "e": "WARNING이 아닌 ERROR 기준이다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 1,
  "q": "공통 배경색과 기본 텍스트 색상 코드를 쓰시오.",
  "a": "#ffffff, #333333",
  "k": [
   "#ffffff",
   "#333333"
  ],
  "e": "주조·보조색만 수험자 자유다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "상호작용 요소에 거는 임시링크의 href 값은?",
  "a": "#",
  "k": [
   "#"
  ],
  "e": "Tab 이동·선택이 가능해야 한다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "전체 레이아웃에 사용이 금지된 HTML 태그는?",
  "a": "table",
  "k": [
   "table"
  ],
  "e": "레이아웃은 CSS로 구성한다."
 },
 {
  "s": "s1",
  "t": "기술 준수사항",
  "d": 2,
  "q": "<img src=\"images/g1.jpg\" ____=\"갤러리1\"> 빈칸의 필수 속성은?",
  "a": "alt",
  "k": [
   "alt"
  ],
  "e": "모든 이미지에 alt가 필요하다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 1,
  "q": "슬라이드를 제작해야 하는 수단 2가지(하나 이상 사용)를 쓰시오.",
  "a": "JS(jQuery 포함), CSS",
  "k": [
   "JS",
   "CSS"
  ],
  "e": "정지 이미지 1장은 실격이다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "미완성 실격 기준 비율은?",
  "a": "과제 기준 20% 이상",
  "k": [
   "20%"
  ],
  "e": "채점위원 판단이다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "복사된 동일 작품이 발견되면 관련 수험자는 어떻게 처리되는가?",
  "a": "전원 부정행위",
  "k": [
   "부정행위"
  ],
  "e": "관련자 전원이다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 3,
  "q": "실격 6사유를 모두 쓰시오.",
  "a": "기권, 작업범위 초과(10MB, 3시간)/현격히 다름, 슬라이드 JS, CSS 미제작, 비번호 폴더 저장 실패, 압축 제출, 20% 이상 미완성",
  "k": [
   "기권",
   "작업범위",
   "슬라이드",
   "비번호",
   "압축",
   "20%"
  ],
  "e": "암기: 기·범·슬·비·압·20."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 1,
  "q": "직접 디자인 워드타입 로고 규격(px)은?",
  "a": "200×40px",
  "k": [
   "200",
   "40"
  ],
  "e": "심벌+로고명은 190×45(44)px."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "슬라이드 전환 간격 조건과 반복 방식을 쓰시오.",
  "a": "3초 이내, 자동 시작, 무한 반복",
  "k": [
   "3초",
   "무한"
  ],
  "e": "마지막 이미지 후 첫 번째로 돌아간다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 2,
  "q": "푸터 로고를 무채색으로 만드는 CSS를 쓰시오.",
  "a": "filter:grayscale(100%)",
  "k": [
   "grayscale"
  ],
  "e": "포토샵 흑백 이미지로 대체 가능하다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "좌측 200px 헤더 옆 우측 영역 폭: width:calc(100% ____ 200px); 빈칸(공백 포함 연산자)은?",
  "a": " - (양옆 공백의 빼기)",
  "k": [
   "-"
  ],
  "e": "연산자 양옆 공백이 없으면 무효다."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 2,
  "q": "1340px 가운데정렬 레이아웃 계열의 과제 번호 범위는?",
  "a": "21~24 (L6)",
  "k": [
   "21",
   "24"
  ],
  "e": "L1은 1~4(1200px)."
 },
 {
  "s": "s1",
  "t": "레이아웃 계열",
  "d": 3,
  "q": "뷰포트 높이에서 120px을 뺀 높이를 CSS로 쓰시오.",
  "a": "height:calc(100vh - 120px)",
  "k": [
   "calc",
   "100vh",
   "120px"
  ],
  "e": "html,body{height:100%} 후 calc(100% - 120px)도 가능."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "$('.menu>li').mouseenter(function(){ $(this).children('.sub').____().slideDown(200); }); 빈칸은?",
  "a": "stop",
  "k": [
   "stop"
  ],
  "e": "애니메이션 큐 누적을 막는다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "슬라이드 3장 순환: i = (i + 1) ____ 3; 빈칸 연산자는?",
  "a": "%",
  "k": [
   "%"
  ],
  "e": "0→1→2→0 순환한다."
 },
 {
  "s": "s1",
  "t": "메뉴·슬라이드 유형",
  "d": 2,
  "q": "이동형 슬라이드 영역에 필수인 CSS 속성과 값은?",
  "a": "overflow:hidden",
  "k": [
   "overflow",
   "hidden"
  ],
  "e": "이미지가 영역 밖으로 보이지 않게 한다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "클릭한 탭의 순번: var n = $(this).____(); 빈칸 메서드는?",
  "a": "index",
  "k": [
   "index"
  ],
  "e": "형제 중 0부터 순번을 반환한다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "모달 배경 덮개를 화면에 고정하는 position 값은?",
  "a": "fixed",
  "k": [
   "fixed"
  ],
  "e": "inset:0 과 반투명 배경을 함께 쓴다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 3,
  "q": "24과제 중 모달 팝업 과제 수와 탭 구성 과제 수를 쓰시오.",
  "a": "모달 11개, 탭 8개",
  "k": [
   "11",
   "8"
  ],
  "e": "레이어 13, 별도 16."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "HTML5 문서 첫 줄 `<!______ html>`의 빈칸은?",
  "a": "DOCTYPE",
  "k": [
   "DOCTYPE"
  ],
  "e": "문서 형식 선언 `<!DOCTYPE html>`."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "`<html ____=\"ko\">`의 빈칸 속성은?",
  "a": "lang",
  "k": [
   "lang"
  ],
  "e": "문서 언어 지정 속성은 lang, 한국어는 ko."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "`<meta ______=\"utf-8\">`의 빈칸 속성은?",
  "a": "charset",
  "k": [
   "charset"
  ],
  "e": "HTML5 인코딩 선언."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "head의 필수 자식으로, 없거나 비어 있으면 W3C ERROR가 나는 요소는?",
  "a": "title",
  "k": [
   "title"
  ],
  "e": "탭·즐겨찾기에 쓰이는 문서 제목."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 2,
  "q": "CSS 파일 첫 줄에 인코딩을 선언하는 규칙을 쓰시오.",
  "a": "@charset \"utf-8\";",
  "k": [
   "@charset",
   "utf-8"
  ],
  "e": "공통 요구 HTML·CSS 모두 utf-8."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "html 요소의 두 자식 요소를 순서대로 쓰시오.",
  "a": "head, body",
  "k": [
   "head",
   "body"
  ],
  "e": "html > head + body."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "`<link rel=\"__________\" href=\"css/style.css\">`의 빈칸은?",
  "a": "stylesheet",
  "k": [
   "stylesheet"
  ],
  "e": "rel이 없거나 틀리면 CSS가 적용되지 않는다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 1,
  "q": "`<script ___=\"script/script.js\"><\/script>`의 빈칸 속성은?",
  "a": "src",
  "k": [
   "src"
  ],
  "e": "외부 스크립트는 src, CSS의 link는 href."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "Console에 `$ is not defined`가 떴다. script.js보다 먼저 연결해야 하는 파일은?",
  "a": "jQuery 파일(jquery-x.x.x.min.js)",
  "k": [
   "jQuery",
   "jquery"
  ],
  "e": "jQuery가 `$`를 정의한다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 3,
  "q": "외부 스크립트를 HTML 파싱 후 작성 순서대로 실행시키는 script 속성은?",
  "a": "defer",
  "k": [
   "defer"
  ],
  "e": "async는 순서를 보장하지 않는다."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "`$(________(){ … });` — DOM 준비 후 실행되는 jQuery 단축 구문의 빈칸은?",
  "a": "function",
  "k": [
   "function"
  ],
  "e": "`$(function(){})` = `$(document).ready(function(){})`."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "로고와 주 메뉴를 감싸는 Ⓐ 영역의 시맨틱 태그는?",
  "a": "header",
  "k": [
   "header"
  ],
  "e": "Ⓐ Header = header(h1 + nav)."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "주 메뉴 ul을 감싸는 시맨틱 태그는?",
  "a": "nav",
  "k": [
   "nav"
  ],
  "e": "주요 내비게이션 묶음."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "section에 제목이 없을 때 W3C 검사 결과의 등급은? (ERROR/경고)",
  "a": "경고",
  "k": [
   "경고"
  ],
  "e": "section 제목 없음은 경고라 ERROR 0에 영향이 없다."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 2,
  "q": "Ⓐ·Ⓓ 100% 배경 과제에서 header 안에 1200px 가운데 내용을 담는 래퍼 태그는?",
  "a": "div (예: <div class=\"inner\">)",
  "k": [
   "div"
  ],
  "e": "의미 없는 레이아웃 래퍼는 div."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "ul·ol의 직계 자식으로 허용되는 요소는?",
  "a": "li",
  "k": [
   "li"
  ],
  "e": "ul 바로 아래 a·div는 ERROR."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 1,
  "q": "순서가 의미를 갖는 목록 태그는?",
  "a": "ol",
  "k": [
   "ol"
  ],
  "e": "ordered list."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 2,
  "q": "`<li><a href=\"#\">메인<\/a><__ class=\"sub\">…<\/__><\/li>` 빈칸 태그는?",
  "a": "ul",
  "k": [
   "ul"
  ],
  "e": "서브메뉴는 부모 li 안의 ul."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "`<button type=\"______\" class=\"close\">닫기<\/button>`의 빈칸은?",
  "a": "button",
  "k": [
   "button"
  ],
  "e": "생략 시 기본값 submit."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 1,
  "q": "패밀리사이트 `<select>` 안 항목 태그는?",
  "a": "option",
  "k": [
   "option"
  ],
  "e": "select > option."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "© 기호의 문자 참조를 세미콜론까지 쓰시오.",
  "a": "&copy;",
  "k": [
   "&copy;"
  ],
  "e": "세미콜론 생략은 ERROR."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 3,
  "q": "공지 날짜를 기계 판독 가능하게 표시하는 HTML5 요소와 속성은?",
  "a": "time 요소, datetime 속성",
  "k": [
   "time",
   "datetime"
  ],
  "e": "`<time datetime=\"2026-01-05\">`."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "`<img src=\"images/logo.png\" ___=\"로고명\">`의 빈칸 속성은?",
  "a": "alt",
  "k": [
   "alt"
  ],
  "e": "모든 img에 alt 필수."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 1,
  "q": "기술 준수사항의 임시 링크 `<a href=\"_\">`의 빈칸은?",
  "a": "#",
  "k": [
   "#"
  ],
  "e": "로고·메뉴·버튼·바로가기에 적용."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "css/style.css에서 `background:url(____/images/bg.jpg)`의 빈칸은?",
  "a": "..",
  "k": [
   ".."
  ],
  "e": "CSS 파일 위치 기준으로 한 단계 위."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 2,
  "q": "순수 장식 이미지의 alt 작성을 쓰시오.",
  "a": "alt=\"\"",
  "k": [
   "alt=\"\"",
   "빈"
  ],
  "e": "속성은 유지, 값은 빈 문자열."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 1,
  "q": "문서 안에서 한 번만 쓸 수 있는(유일한) 식별 속성은?",
  "a": "id",
  "k": [
   "id"
  ],
  "e": "반복이 필요하면 class."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 2,
  "q": "img·br·meta·link처럼 닫는 태그가 없는 요소를 무엇이라 하는가?",
  "a": "빈 요소(void element)",
  "k": [
   "빈 요소",
   "void"
  ],
  "e": "void 요소는 내용과 닫는 태그가 없다."
 },
 {
  "s": "s2",
  "t": "유효성 규칙·W3C 오류",
  "d": 3,
  "q": "`<p><div>A<\/div><\/p>`에서 ERROR로 지적되는 태그는?",
  "a": "마지막 <\/p> (짝 없는 닫는 태그)",
  "k": [
   "<\/p>"
  ],
  "e": "p가 div 앞에서 자동으로 닫혀 마지막 <\/p>가 남는다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "모든 요소의 width 에 padding·border 를 포함시키는 리셋: * { box-sizing: ____; }",
  "a": "border-box",
  "k": [
   "border-box"
  ],
  "e": "기본값 content-box 를 border-box 로 바꿔 와이어프레임 px 를 그대로 입력한다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "기본 여백 리셋: * { margin:0; ____:0; }",
  "a": "padding",
  "k": [
   "padding"
  ],
  "e": "margin·padding 을 모두 0 으로 만든다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "링크 밑줄 제거: a { text-decoration: ____; }",
  "a": "none",
  "k": [
   "none"
  ],
  "e": "text-decoration:none 이 밑줄을 없앤다."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 2,
  "q": "content-box 에서 width:300px; padding:10px; border:2px solid 인 요소의 실제 가로 폭은 ____px 이다.",
  "a": "324",
  "k": [
   "324"
  ],
  "e": "300 + 좌우 padding 20 + 좌우 border 4 = 324px."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 1,
  "q": "메인메뉴만 선택하는 자식 결합자: .menu ____ li",
  "a": ">",
  "k": [
   ">"
  ],
  "e": "> 는 직계 자식만 선택한다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "선택자 #nav .menu li 의 명시도를 (id, class, 요소) 로 쓰시오.",
  "a": "(1,1,1)",
  "k": [
   "1,1,1"
  ],
  "e": "id 1, class 1, 요소 1."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "Tab 이동 시에도 하이라이트: .menu a:hover, .menu a:____ { background:#555; }",
  "a": "focus",
  "k": [
   "focus"
  ],
  "e": ":focus 는 키보드 포커스 상태다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 3,
  "q": "세 번째 li 만 선택: .gallery li:____(3)",
  "a": "nth-child",
  "k": [
   "nth-child"
  ],
  "e": "CSS 구조 가상 클래스는 1부터 센다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 1,
  "q": "1200px 가운데 정렬: #wrap { width:1200px; margin:0 ____; }",
  "a": "auto",
  "k": [
   "auto"
  ],
  "e": "좌우 margin auto 가 남는 공간을 균등 배분한다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "높이 40px 박스 안 한 줄 텍스트 세로 가운데: height:40px; ____:40px;",
  "a": "line-height",
  "k": [
   "line-height"
  ],
  "e": "줄 높이를 박스 높이와 같게 준다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 3,
  "q": "팝업 정중앙: left:50%; top:50%; transform:____(-50%,-50%);",
  "a": "translate",
  "k": [
   "translate"
  ],
  "e": "자기 크기의 절반만큼 되돌려 중앙에 맞춘다."
 },
 {
  "s": "s3",
  "t": "가운데 정렬·100% 띠",
  "d": 2,
  "q": "flex 자식 가로 가운데 justify-content:center; 세로 가운데 ____:center;",
  "a": "align-items",
  "k": [
   "align-items"
  ],
  "e": "row 방향에서 교차축(세로) 정렬 속성이다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 1,
  "q": "우측 영역 폭: width:____(100% - 200px);",
  "a": "calc",
  "k": [
   "calc"
  ],
  "e": "연산자 양옆 공백을 둔다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "clearfix: .clearfix::after { content:''; display:block; ____:both; }",
  "a": "clear",
  "k": [
   "clear"
  ],
  "e": "clear:both 로 float 아래로 내려가 부모 높이를 회복한다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "flex 로 세로 쌓기: flex-direction: ____;",
  "a": "column",
  "k": [
   "column"
  ],
  "e": "주축을 세로로 바꾼다."
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 3,
  "q": "flex 아이템을 200px 로 고정(늘지도 줄지도 않게): flex: 0 ____ 200px;",
  "a": "0",
  "k": [
   "0"
  ],
  "e": "flex: grow shrink basis — shrink 0 이면 줄어들지 않는다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "서브메뉴의 기준점: .menu > li { position: ____; }",
  "a": "relative",
  "k": [
   "relative"
  ],
  "e": "absolute 자식의 기준이 되도록 부모를 relative 로 둔다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 1,
  "q": "슬라이드 영역 밖 숨김: .slide { overflow: ____; }",
  "a": "hidden",
  "k": [
   "hidden"
  ],
  "e": "넘친 부분을 잘라 한 장씩만 보이게 한다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "스크롤과 무관하게 화면 전체를 덮는 모달 덮개: position: ____;",
  "a": "fixed",
  "k": [
   "fixed"
  ],
  "e": "fixed 는 뷰포트 기준이다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "배경만 반투명한 검정: background: ____(0,0,0,0.5);",
  "a": "rgba",
  "k": [
   "rgba"
  ],
  "e": "네 번째 값이 알파(투명도)다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "position 이 지정된 요소의 겹침 순서를 정하는 속성 이름은?",
  "a": "z-index",
  "k": [
   "z-index"
  ],
  "e": "값이 클수록 위에 표시된다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "화면 높이 − 120px: height: calc(100____ - 120px);",
  "a": "vh",
  "k": [
   "vh"
  ],
  "e": "vh 는 뷰포트 높이 1% 단위."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "좌 헤더 200px + 콘텐츠 열 400px 옆 슬라이드 폭: width: calc(100% - ____px);",
  "a": "600",
  "k": [
   "600"
  ],
  "e": "200 + 400 = 600px 을 뺀다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "푸터 로고 무채색: filter: ____(100%);",
  "a": "grayscale",
  "k": [
   "grayscale"
  ],
  "e": "채도를 제거하는 filter 함수다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 1,
  "q": "공통 규정의 기본 텍스트 색: body { color: #____; }",
  "a": "333333",
  "k": [
   "333333",
   "333"
  ],
  "e": "배경 #ffffff, 텍스트 #333333 이 공통 규정이다."
 },
 {
  "s": "s3",
  "t": "색상·텍스트·CSS 규정",
  "d": 2,
  "q": "외부 CSS 연결: <link rel=\"____\" href=\"css/style.css\">",
  "a": "stylesheet",
  "k": [
   "stylesheet"
  ],
  "e": "rel=\"stylesheet\" 로 스타일시트임을 알린다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "메뉴 마크업 빈칸: <nav><ul class=\"menu\"><li><a href=\"____\">메인<\/a> … — 임시링크 값은?",
  "a": "#",
  "k": [
   "#"
  ],
  "e": "상호작용 요소는 임시링크 # 로 연결한다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "ul 요소의 직계 자식으로 허용되는 유일한 요소는?",
  "a": "li",
  "k": [
   "li"
  ],
  "e": "a·div 는 li 안에 넣는다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "서브메뉴 ul 은 어느 요소의 자식으로 넣어야 하는가? (요소명)",
  "a": "메인 메뉴의 li",
  "k": [
   "li"
  ],
  "e": "메인 li 안, a 뒤에 둔다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 2,
  "q": "주요 내비게이션 영역을 감싸는 HTML5 시맨틱 태그는?",
  "a": "nav",
  "k": [
   "nav"
  ],
  "e": "<nav> 로 메뉴를 감싼다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "slideDown 전 서브 초기 CSS: .sub{ display:____ }",
  "a": "none",
  "k": [
   "none"
  ],
  "e": "숨긴 요소에서 slideDown 이 동작한다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 1,
  "q": "서브 absolute 기준점: .menu > li{ position:____ }",
  "a": "relative",
  "k": [
   "relative"
  ],
  "e": "부모 li 를 relative 로."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "메인 li 만 선택하는 자식 결합자 기호: .menu ____ li",
  "a": ">",
  "k": [
   ">"
  ],
  "e": "후손 선택자(공백)는 서브 li 까지 잡는다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "서브를 메인 바로 아래 틈 없이: .sub{ position:absolute; top:____ }",
  "a": "100%",
  "k": [
   "100%"
  ],
  "e": "기준 li 높이만큼 아래에 붙인다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 3,
  "q": "CSS 만으로 Tab 진입 시 서브 표시: .menu > li:____ > .sub{display:block}",
  "a": "focus-within",
  "k": [
   "focus-within"
  ],
  "e": "후손에 포커스가 있을 때 적용되는 가상 클래스다."
 },
 {
  "s": "s4",
  "t": "CSS 메뉴·hover",
  "d": 2,
  "q": "서브가 슬라이드 위에 오도록 쌓임 순서를 정하는 CSS 속성은?",
  "a": "z-index",
  "k": [
   "z-index"
  ],
  "e": "position 이 지정된 요소에 적용된다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "M1: $('.menu > li').mouseenter(function(){ $(____).children('.sub').stop().slideDown(); })",
  "a": "this",
  "k": [
   "this"
  ],
  "e": "이벤트가 발생한 li 하나를 가리킨다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "M1: $(this).children('.sub').____().slideDown(200); — 큐 누적 방지 메서드",
  "a": "stop",
  "k": [
   "stop"
  ],
  "e": "애니메이션 앞에 호출한다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 2,
  "q": "M1: mouseleave 시 서브를 부드럽게 숨기는 메서드: $(this).children('.sub').stop().____(200)",
  "a": "slideUp",
  "k": [
   "slideUp"
  ],
  "e": "slideDown 의 짝이다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 2,
  "q": "DOM 준비 후 실행하는 jQuery 단축 구문: $(____(){ … });",
  "a": "function",
  "k": [
   "function"
  ],
  "e": "$(function(){ }) = $(document).ready(…)"
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M3: 서브와 배경 띠를 함께: $('.sub, ____').stop().slideDown();  (띠 class 가 subbg 일 때)",
  "a": ".subbg",
  "k": [
   ".subbg",
   "subbg"
  ],
  "e": "쉼표로 선택자를 묶는다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M2·M3 에서 이벤트를 거는 대상은 메인 li 가 아니라 메뉴 전체를 감싼 무엇인가?",
  "a": "부모 요소(nav 등)",
  "k": [
   "부모",
   "nav"
  ],
  "e": "li 마다 걸면 메뉴 이동 중 깜빡인다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 3,
  "q": "M3 띠: .subbg{ position:absolute; left:0; width:____ }  (기준 조상 폭 전체)",
  "a": "100%",
  "k": [
   "100%"
  ],
  "e": "기준 조상(헤더)이 100% 폭이어야 화면 전체 띠가 된다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 1,
  "q": "M5 플라이아웃: .sub{ position:absolute; left:____; top:0 }",
  "a": "100%",
  "k": [
   "100%"
  ],
  "e": "li 폭만큼 오른쪽에 붙인다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 2,
  "q": "M4 아코디언에서 서브의 position 값(지정하지 않은 기본값)은?",
  "a": "static",
  "k": [
   "static"
  ],
  "e": "흐름 안에서 아래 메뉴를 밀어 낸다."
 },
 {
  "s": "s4",
  "t": "세로 메뉴(M4~M6)",
  "d": 3,
  "q": "M5 옆으로 펼침: $(this).children('.sub').stop().animate({width:'____'}, 300);",
  "a": "show",
  "k": [
   "show"
  ],
  "e": "'show'·'hide'·'toggle' 값을 쓸 수 있다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 1,
  "q": "자식 이동에 반응하지 않는 진입 이벤트 이름은?",
  "a": "mouseenter",
  "k": [
   "mouseenter"
  ],
  "e": "짝은 mouseleave."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": ".hover(f1, f2) 는 어떤 두 이벤트의 단축형인가?",
  "a": "mouseenter, mouseleave",
  "k": [
   "mouseenter",
   "mouseleave"
  ],
  "e": "mouseover/out 이 아니다."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 2,
  "q": "jQuery 애니메이션 속도 문자열 'fast' 와 'slow' 의 ms 값을 순서대로 쓰시오.",
  "a": "200, 600",
  "k": [
   "200",
   "600"
  ],
  "e": "기본은 400ms."
 },
 {
  "s": "s4",
  "t": "jQuery 이벤트·애니메이션",
  "d": 3,
  "q": ".stop(____, ____) — 큐를 비우고 현재 애니메이션을 끝 상태로 점프하려면?",
  "a": "true, true",
  "k": [
   "true"
  ],
  "e": "clearQueue, jumpToEnd 순서다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 1,
  "q": "Tab 포커스로 서브를 여는 버블링 포커스 이벤트: .on('____', …)",
  "a": "focusin",
  "k": [
   "focusin"
  ],
  "e": "짝은 focusout."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "마우스·키보드 모두 열기: $('.menu > li').on('mouseenter ____', fn)",
  "a": "focusin",
  "k": [
   "focusin"
  ],
  "e": "공백으로 여러 이벤트를 연결한다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "document ready 단축형: `$(____(){ ... });` 빈칸의 키워드는?",
  "a": "function",
  "k": [
   "function"
  ],
  "e": "$(function(){}) = $(document).ready(function(){})."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "`$(document).____(function(){ ... });` — DOM 준비 후 실행. 빈칸은?",
  "a": "ready",
  "k": [
   "ready"
  ],
  "e": "DOM 트리 생성 완료 시점에 실행된다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "jQuery 3 에서 load 이벤트 바인딩: `$(window).____('load', fn);`",
  "a": "on",
  "k": [
   "on"
  ],
  "e": ".load(fn) 단축형은 제거되어 on('load') 를 쓴다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "클릭한 li 의 순번: `const n = $(this).____();`",
  "a": "index",
  "k": [
   "index"
  ],
  "e": "형제 중 위치를 0부터 반환."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "링크 기본 동작 막기: `e.____();`",
  "a": "preventDefault",
  "k": [
   "preventDefault"
  ],
  "e": "href=\"#\" 로 맨 위로 튀는 것을 막는다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 2,
  "q": "jQuery 와 script.js 를 연결할 때 먼저 와야 하는 파일은?",
  "a": "jQuery 파일(jquery-x.x.x.min.js)",
  "k": [
   "jQuery",
   "jquery"
  ],
  "e": "script.js 가 $ 를 쓰므로 jQuery 가 먼저."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 3,
  "q": "jQuery 3.4 에서 deprecated 된 `:first` 선택자를 대체하는 메서드 2가지를 쓰시오.",
  "a": ".first(), .eq(0)",
  "k": [
   "first",
   "eq(0)"
  ],
  "e": "위치 선택자 대신 메서드를 쓴다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "3장 순환: `i = (i + 1) % ____;`",
  "a": "3",
  "k": [
   "3"
  ],
  "e": "제수는 장 수."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 1,
  "q": "3초마다 반복: `setInterval(slide, ____);`",
  "a": "3000",
  "k": [
   "3000"
  ],
  "e": "단위 ms."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "반복 타이머를 멈추는 함수: `____(timer);`",
  "a": "clearInterval",
  "k": [
   "clearInterval"
  ],
  "e": "setInterval 이 반환한 ID 를 넘긴다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "장 수 자동 계산: `const n = $('.slide li').____;`",
  "a": "length",
  "k": [
   "length"
  ],
  "e": "선택된 요소 개수."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "슬라이드 공통 요구 3가지를 쓰시오.",
  "a": "3초 이내 전환, 자동 시작, 무한 반복",
  "k": [
   "3초",
   "자동",
   "반복"
  ],
  "e": "마지막 다음 첫 장으로 무한 반복."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 3,
  "q": "슬라이드가 첫 장에서 안 넘어간다. `setInterval(function(){ let i=0; i=(i+1)%3; move(i); },3000)` 의 수정 방법은?",
  "a": "let i=0 을 setInterval 콜백 밖으로 옮긴다",
  "k": [
   "밖",
   "선언"
  ],
  "e": "콜백 안 선언은 매번 0 으로 초기화된다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "가로 슬라이드 창에 필요한 CSS: `overflow: ____;`",
  "a": "hidden",
  "k": [
   "hidden"
  ],
  "e": "창 밖 이미지를 가린다."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "가로 이동: `$('.slide ul').animate({ ____: -1200*i }, 600);`",
  "a": "marginLeft",
  "k": [
   "marginLeft",
   "left"
  ],
  "e": "left 를 쓰면 position 필요."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 1,
  "q": "세로 이동: `$('.slide ul').animate({ ____: -300*i }, 600);`",
  "a": "marginTop",
  "k": [
   "marginTop",
   "top"
  ],
  "e": "이동 단위 = 창 높이."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "진행 중 애니메이션 중지: `$('.slide ul').____();`",
  "a": "stop",
  "k": [
   "stop"
  ],
  "e": "큐 누적 방지."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 3,
  "q": "복제 방식에서 복제본 도착 후 즉시 처음 위치로: `$('.slide ul').____('marginLeft', 0);`",
  "a": "css",
  "k": [
   "css"
  ],
  "e": "애니메이션 없이 즉시 적용해야 끊김이 없다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 1,
  "q": "Fade 슬라이드 li 겹침: `position: ____;`",
  "a": "absolute",
  "k": [
   "absolute"
  ],
  "e": "top:0; left:0 과 함께 쓴다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "크로스페이드: `$li.eq(cur).fadeOut(1000); $li.eq(next).____(1000);`",
  "a": "fadeIn",
  "k": [
   "fadeIn"
  ],
  "e": "두 효과를 동시에 호출한다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "지정 투명도까지 변화: `$('li').____(1000, 0.5);`",
  "a": "fadeTo",
  "k": [
   "fadeTo"
  ],
  "e": "두 번째 인자가 목표 투명도."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 1,
  "q": "CSS 무한 반복: `animation: slideX 9s ____;`",
  "a": "infinite",
  "k": [
   "infinite"
  ],
  "e": "없으면 1회 재생 후 정지."
 },
 {
  "s": "s5",
  "t": "CSS 애니메이션 슬라이드",
  "d": 2,
  "q": "CSS Fade 슬라이드에서 li 마다 시작 시점을 늦추는 속성은?",
  "a": "animation-delay",
  "k": [
   "animation-delay",
   "delay"
  ],
  "e": "li 마다 다른 지연값을 준다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "탭 활성 표시: `$(this).addClass('on').____().removeClass('on');`",
  "a": "siblings",
  "k": [
   "siblings"
  ],
  "e": "나머지 형제의 on 을 제거."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 2,
  "q": "탭 내용 전환: `$('.tab-cont > div').____(n).show().siblings().hide();`",
  "a": "eq",
  "k": [
   "eq"
  ],
  "e": "n번째 내용만 표시."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 1,
  "q": "팝업 닫기: `$('.popup').____();`",
  "a": "hide",
  "k": [
   "hide",
   "fadeOut"
  ],
  "e": "fadeOut 도 가능."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "모달 덮개 위치 지정: `position: ____;`",
  "a": "fixed",
  "k": [
   "fixed"
  ],
  "e": "뷰포트 전체를 덮는다."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "팝업이 슬라이드 아래 깔릴 때 키워야 하는 CSS 속성은?",
  "a": "z-index",
  "k": [
   "z-index"
  ],
  "e": "position 이 지정된 요소에 적용."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 3,
  "q": "팝업 박스 정가운데: `top:50%; left:50%; transform: ____(-50%,-50%);`",
  "a": "translate",
  "k": [
   "translate"
  ],
  "e": "박스 크기 절반만큼 되돌린다."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "HTML 문서 첫 줄: `<!______ html>`",
  "a": "DOCTYPE",
  "k": [
   "DOCTYPE"
  ],
  "e": "대소문자 무관하나 관행은 DOCTYPE."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "인코딩 선언: `<meta ______=\"utf-8\">`",
  "a": "charset",
  "k": [
   "charset"
  ],
  "e": "HTML·CSS 모두 utf-8 이 요구사항."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 1,
  "q": "언어 선언: `<html ____=\"ko\">`",
  "a": "lang",
  "k": [
   "lang"
  ],
  "e": "누락 시 경고."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "ul·ol 의 직계 자식으로 허용되는 유일한 요소는?",
  "a": "li",
  "k": [
   "li"
  ],
  "e": "ul 안 div 는 오류."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 2,
  "q": "로고 이미지 대체 텍스트: `<img src=\"images/logo.png\" ___=\"로고명\">`",
  "a": "alt",
  "k": [
   "alt"
  ],
  "e": "모든 img 에 alt."
 },
 {
  "s": "s6",
  "t": "HTML 유효성(W3C)",
  "d": 3,
  "q": "반복되는 요소에 id 대신 써야 하는 속성은?",
  "a": "class",
  "k": [
   "class"
  ],
  "e": "id 중복은 오류."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "CSS 연결: `<link rel=\"__________\" href=\"css/style.css\">`",
  "a": "stylesheet",
  "k": [
   "stylesheet"
  ],
  "e": "rel 값은 stylesheet."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 1,
  "q": "CSS 주석 기호(여는 것·닫는 것)를 쓰시오.",
  "a": "/* */",
  "k": [
   "/*",
   "*/"
  ],
  "e": "// 는 CSS 에서 오류."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "우측 영역 폭: `width:calc(100% _ 200px);` 빈칸 연산자와 공백 규칙은?",
  "a": "- (양쪽 공백)",
  "k": [
   "-",
   "공백"
  ],
  "e": "calc 의 ± 는 양쪽 공백 필수."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "Chrome 개발자도구를 여는 기능키는?",
  "a": "F12",
  "k": [
   "F12"
  ],
  "e": "Console 직행은 Ctrl+Shift+J."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "jQuery 미로드 시 Console 메시지: `$ is not ______`",
  "a": "defined",
  "k": [
   "defined"
  ],
  "e": "jQuery 를 script.js 앞에 로드."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 3,
  "q": "DOM 준비 후 실행: `$(________(){ … });`",
  "a": "function",
  "k": [
   "function"
  ],
  "e": "$(function(){}) = $(document).ready()."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 1,
  "q": "임시 링크: `<a href=\"_\">메뉴<\/a>`",
  "a": "#",
  "k": [
   "#"
  ],
  "e": "Tab 이동 가능 조건."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "`#` 링크 기본 동작 막기(jQuery 핸들러 끝): `return _____;`",
  "a": "false",
  "k": [
   "false"
  ],
  "e": "또는 e.preventDefault()."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 2,
  "q": "팝업 닫기 버튼: `<button type=\"______\">닫기<\/button>`",
  "a": "button",
  "k": [
   "button"
  ],
  "e": "기본 type 은 submit."
 },
 {
  "s": "s6",
  "t": "접근성·Tab 이동",
  "d": 3,
  "q": "키보드 포커스로 서브메뉴를 열 때 쓰는 jQuery 이벤트 한 쌍은?",
  "a": "focusin / focusout",
  "k": [
   "focusin",
   "focusout"
  ],
  "e": "채점 반영 여부는 확인필요."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "css/style.css 에서 배경: `background:url(___/images/bg.jpg);`",
  "a": "..",
  "k": [
   ".."
  ],
  "e": "CSS 파일 기준 상위 폴더."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "제출 전체 용량 상한은?",
  "a": "10MB",
  "k": [
   "10MB",
   "10"
  ],
  "e": "초과는 실격 사유."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "제출 폴더 이름은 무엇으로 하는가?",
  "a": "비번호",
  "k": [
   "비번호"
  ],
  "e": "바탕화면 비번호 폴더."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 2,
  "q": "비번호 폴더 최상위에 있어야 하는 메인 파일명은?",
  "a": "index.html",
  "k": [
   "index.html"
  ],
  "e": "분류 폴더 css·script·images 와 함께."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 1,
  "q": "투명 배경 로고 저장 형식은?",
  "a": "PNG(PNG-24)",
  "k": [
   "PNG"
  ],
  "e": "JPG 는 투명 불가."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "포토샵 채도 감소 단축키는?",
  "a": "Shift+Ctrl+U",
  "k": [
   "Shift+Ctrl+U"
  ],
  "e": "푸터 회색 로고 제작."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "CSS 회색 로고: `filter:_________(100%);`",
  "a": "grayscale",
  "k": [
   "grayscale"
  ],
  "e": "추가 이미지 없이 처리."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "일러스트 문자 윤곽선 만들기 단축키는?",
  "a": "Shift+Ctrl+O",
  "k": [
   "Shift+Ctrl+O"
  ],
  "e": "폰트 의존 제거."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 1,
  "q": "직접 디자인 워드타입 로고 규격(가로×세로 px)은?",
  "a": "200×40",
  "k": [
   "200",
   "40"
  ],
  "e": "심벌+로고명형은 190×45(44)."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "JS 구현 중 실격과 직결되어 최우선인 기능은?",
  "a": "슬라이드",
  "k": [
   "슬라이드"
  ],
  "e": "움직이지 않으면 실격."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 2,
  "q": "공통 요구 배경색·기본 텍스트색을 쓰시오.",
  "a": "#ffffff, #333333",
  "k": [
   "#ffffff",
   "#333333"
  ],
  "e": "주조·보조색은 자유."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 1,
  "q": "제출 폴더 트리를 상위→하위 순으로 배열하시오.",
  "steps": [
   "바탕화면",
   "비번호 폴더",
   "index.html·분류 폴더(css·script·images)",
   "css/style.css 등 개별 리소스"
  ],
  "e": "바탕화면의 비번호 폴더 최상위에 index.html, 그 아래 분류 폴더에 리소스를 둔다."
 },
 {
  "s": "s1",
  "t": "제공파일·제출",
  "d": 2,
  "q": "index.html의 head 안 요소를 올바른 작성 순서로 배열하시오.",
  "steps": [
   "<meta charset=\"utf-8\">",
   "<title>과제명<\/title>",
   "<link rel=\"stylesheet\" href=\"css/style.css\">",
   "<script src=\"script/jquery-x.x.x.min.js\"><\/script>",
   "<script src=\"script/script.js\"><\/script>"
  ],
  "e": "charset을 가장 먼저 선언하고, jQuery 파일을 script.js보다 먼저 로드해야 Console 오류가 나지 않는다."
 },
 {
  "s": "s1",
  "t": "공통 뼈대(영역 A~D)",
  "d": 1,
  "q": "공개문제 문제지(7쪽)의 구성 순서대로 배열하시오.",
  "steps": [
   "요구사항(주제·개요·컬러가이드)",
   "사이트맵·와이어프레임",
   "영역별 세부 지시",
   "기술 준수사항·제출방법",
   "수험자 유의사항",
   "지급재료"
  ],
  "e": "요구사항→사이트맵/와이어프레임→세부 지시→준수사항·제출→유의사항→지급재료 순이다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 2,
  "q": "3시간 작업 권장 순서(비공식 전략)로 배열하시오.",
  "steps": [
   "과제 분석·폴더 생성",
   "포토샵·일러스트 이미지 제작",
   "HTML 구조·CSS 레이아웃",
   "JS(메뉴→슬라이드→탭→팝업)",
   "디자인 다듬기",
   "최종 점검·비번호 폴더 저장(미압축)"
  ],
  "e": "분석 10분 → 이미지 → 마크업·레이아웃 → 기능 → 디자인 → 점검. 슬라이드는 실격 요소라 기능 중 최우선으로 확보한다."
 },
 {
  "s": "s1",
  "t": "실격·감점",
  "d": 3,
  "q": "시간이 부족할 때 작업 우선순위를 높은 것부터 배열하시오.",
  "steps": [
   "실격 방지(슬라이드 동작·저장·용량)",
   "와이어프레임 레이아웃 일치",
   "기능(메뉴·탭·팝업)",
   "디자인(텍스트 위계·색)"
  ],
  "e": "실격은 점수 전체를 잃으므로 가장 먼저, 이후 배치→기능→미관 순이다."
 },
 {
  "s": "s1",
  "t": "탭·팝업·과제 매트릭스",
  "d": 2,
  "q": "공지 첫 글 클릭 → 모달 팝업 처리 순서로 배열하시오.",
  "steps": [
   "공지 첫 번째 글 a 클릭",
   "기본 동작(# 이동) 차단",
   "배경 덮개와 팝업 박스 표시",
   "닫기 버튼 클릭",
   "팝업·덮개 숨김"
  ],
  "e": "return false/preventDefault로 스크롤 튐을 막고 show, 닫기 버튼으로 hide한다."
 },
 {
  "s": "s2",
  "t": "문서 골격·head",
  "d": 1,
  "q": "HTML5 문서의 최상위 골격을 위에서부터 순서대로 배열하시오.",
  "steps": [
   "<!DOCTYPE html>",
   "<html lang=\"ko\">",
   "<head> … <\/head>",
   "<body> … <\/body>",
   "<\/html>"
  ],
  "e": "DOCTYPE이 html보다 앞, html 안에 head → body 순서."
 },
 {
  "s": "s2",
  "t": "외부 CSS·JS 연결",
  "d": 2,
  "q": "head 안 요소를 권장 순서대로 배열하시오.",
  "steps": [
   "<meta charset=\"utf-8\">",
   "<title>과제명<\/title>",
   "<link rel=\"stylesheet\" href=\"css/style.css\">",
   "<script src=\"script/jquery-x.x.x.min.js\"><\/script>",
   "<script src=\"script/script.js\"><\/script>"
  ],
  "e": "charset은 첫 자식, jQuery는 script.js보다 먼저."
 },
 {
  "s": "s2",
  "t": "시맨틱 영역 마크업",
  "d": 1,
  "q": "CSS를 껐을 때 A~D 순서로 나열되도록 body 안 요소를 소스 순서대로 배열하시오.",
  "steps": [
   "<header> 로고·메뉴",
   "<section class=\"slide\">",
   "<section class=\"contents\">",
   "<footer>",
   "<div class=\"popup\">"
  ],
  "e": "소스 순서 = CSS off 나열 순서. 팝업은 본문 흐름 밖이라 맨 끝."
 },
 {
  "s": "s2",
  "t": "메뉴·목록 마크업",
  "d": 2,
  "q": "서브메뉴가 있는 메뉴를 여는 태그 순서대로 배열하시오.",
  "steps": [
   "<nav>",
   "<ul class=\"menu\">",
   "<li>",
   "<a href=\"#\">메인1<\/a>",
   "<ul class=\"sub\">",
   "<li><a href=\"#\">서브1-1<\/a><\/li>"
  ],
  "e": "서브 ul은 메인 a 다음, 부모 li 안."
 },
 {
  "s": "s2",
  "t": "콘텐츠·팝업·푸터 마크업",
  "d": 2,
  "q": "모달 레이어 팝업을 바깥 요소부터 순서대로 배열하시오.",
  "steps": [
   "<div class=\"modal\"> (배경 덮개)",
   "<div class=\"popup\"> (팝업 박스)",
   "<h2>팝업 제목<\/h2>",
   "<p>팝업 내용<\/p>",
   "<button type=\"button\" class=\"close\">닫기<\/button>"
  ],
  "e": "덮개 → 박스 → 제목 → 내용 → 닫기 버튼."
 },
 {
  "s": "s2",
  "t": "이미지·링크·상대경로",
  "d": 3,
  "q": "제출 폴더와 HTML 연결을 준비하는 절차를 순서대로 배열하시오.",
  "steps": [
   "바탕화면에 비번호 폴더 생성",
   "그 안에 css·script·images 폴더 생성",
   "제공 jQuery 파일을 script 폴더로 복사",
   "index.html을 비번호 폴더 최상위에 저장",
   "link·script·img를 상대경로로 연결",
   "Chrome으로 열어 Console·이미지 표시 확인"
  ],
  "e": "index.html은 최상위, 리소스는 분류 폴더, 경로는 상대경로."
 },
 {
  "s": "s3",
  "t": "리셋·박스모델",
  "d": 1,
  "q": "박스모델의 층을 안쪽에서 바깥쪽 순서로 배열하시오.",
  "steps": [
   "content",
   "padding",
   "border",
   "margin"
  ],
  "e": "콘텐츠를 padding 이 감싸고, 그 밖에 border, 가장 바깥이 margin 이다."
 },
 {
  "s": "s3",
  "t": "선택자·우선순위",
  "d": 2,
  "q": "명시도(우선순위)가 낮은 것부터 높은 것 순으로 배열하시오.",
  "steps": [
   "*",
   "li",
   "li.on",
   "#menu li",
   "style=\"…\" 인라인 선언"
  ],
  "e": "(0,0,0) < (0,0,1) < (0,1,1) < (1,0,1) < 인라인 선언 순이다."
 },
 {
  "s": "s3",
  "t": "레이아웃 계열 L1~L6",
  "d": 2,
  "q": "고정폭 가운데 정렬(L1) 과제의 CSS 작성 순서(권장)를 배열하시오.",
  "steps": [
   "리셋·공통 색상(body #fff/#333)",
   "래퍼 폭·가운데 정렬(width + margin:0 auto)",
   "영역별 높이(헤더·슬라이드·콘텐츠·푸터)",
   "콘텐츠 내부 다단 배치(float/flex)",
   "겹침 요소(position·z-index·overflow)"
  ],
  "e": "전체 기준을 먼저 세우고 큰 틀 → 영역 → 내부 → 겹침 순으로 좁혀 가야 수정이 적다. (학습용 권장 순서)"
 },
 {
  "s": "s3",
  "t": "float·flex 배치",
  "d": 2,
  "q": "float 높이 붕괴를 발견하고 해결하는 흐름을 순서대로 배열하시오.",
  "steps": [
   "자식 요소에 float:left 적용",
   "부모 높이가 0 이 되어 배경·테두리가 사라짐",
   "부모에 clearfix 클래스 부여",
   "::after 가상 요소가 clear:both 로 float 아래에 생성",
   "부모가 자식 높이만큼 회복"
  ],
  "e": "clearfix 는 부모 끝에 생긴 블록 가상 요소가 float 아래로 내려가며 부모 높이를 되살리는 원리다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 2,
  "q": "가로 이동형 슬라이드의 CSS·JS 준비 순서를 배열하시오.",
  "steps": [
   "슬라이드 영역에 폭·높이 지정",
   "영역에 overflow:hidden",
   "ul 폭을 이미지 3장 폭(300%)으로 확장",
   "li 를 가로로 나열(float 또는 flex)",
   "jQuery 로 ul 의 margin-left 를 이동"
  ],
  "e": "영역 크기와 잘라내기를 먼저 정해야 ul 확장·가로 나열 결과를 확인하며 이동 코드를 붙일 수 있다."
 },
 {
  "s": "s3",
  "t": "position·z-index·overflow",
  "d": 3,
  "q": "서브메뉴 드롭다운을 슬라이드 위에 제대로 띄우기 위한 CSS 를 원인→결과 순으로 배열하시오.",
  "steps": [
   "부모 li 에 position:relative 로 기준점 생성",
   ".sub 에 position:absolute; top:100% 로 li 바로 아래 배치",
   ".sub 에 display:none 으로 초기 숨김",
   "header(또는 .sub)에 z-index 를 주어 슬라이드보다 위로"
  ],
  "e": "기준점이 있어야 absolute 위치가 정해지고, 숨김 상태에서 JS 가 펼칠 때 z-index 로 슬라이드 위에 표시된다."
 },
 {
  "s": "s4",
  "t": "개별 드롭다운(M1)",
  "d": 1,
  "q": "M1 개별 드롭다운을 처음부터 구현하는 순서로 배열하시오.",
  "steps": [
   "nav > ul > li > a 와 li 안 서브 ul 마크업",
   "메인 li 가로 배치 + position:relative",
   "서브 display:none + absolute + z-index",
   "jQuery 로 mouseenter 시 stop().slideDown()",
   "mouseleave 시 stop().slideUp() + 하이라이트 확인"
  ],
  "e": "마크업 → 배치 → 숨김·겹침 → 동작 → 점검 순이다. 서브를 숨기지 않고 jQuery 부터 쓰면 slideDown 이 동작하지 않는다."
 },
 {
  "s": "s4",
  "t": "메뉴 마크업",
  "d": 1,
  "q": "index.html head 에서 파일을 연결하는 올바른 순서로 배열하시오.",
  "steps": [
   "<meta charset=\"utf-8\">",
   "<title>",
   "<link rel=\"stylesheet\" href=\"css/style.css\">",
   "<script src=\"script/jquery-x.x.x.min.js\">",
   "<script src=\"script/script.js\">"
  ],
  "e": "charset 을 먼저 선언하고, jQuery 는 반드시 script.js 보다 먼저 연결한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 2,
  "q": "CSS 를 끈 상태에서 다음 메뉴 마크업이 보이는 순서(메인1: 서브1-1·1-2, 메인2: 서브2-1)로 배열하시오.",
  "steps": [
   "메인1",
   "서브1-1",
   "서브1-2",
   "메인2",
   "서브2-1"
  ],
  "e": "서브 ul 이 메인 li 안에 있으므로 문서 순서대로 메인 다음에 그 서브가 나열된다."
 },
 {
  "s": "s4",
  "t": "전체 서브메뉴(M2·M3)",
  "d": 2,
  "q": "M3 전체폭 서브 띠를 구현하는 순서로 배열하시오.",
  "steps": [
   "header 에 position:relative 와 높은 z-index",
   "nav 안에 .subbg 배경 띠 div 추가",
   ".subbg·.sub 를 display:none + absolute(같은 top·height)",
   "서브 z-index 를 띠보다 크게",
   "nav 에 mouseenter/mouseleave 로 $('.sub, .subbg').stop().slideDown/Up()"
  ],
  "e": "기준·겹침 순서를 먼저 잡고 띠를 이벤트 부모 안에 넣은 뒤 동시 애니메이션을 연결한다."
 },
 {
  "s": "s4",
  "t": "키보드 접근·오류 점검",
  "d": 3,
  "q": "메뉴가 '서브로 내려가면 닫힌다'는 오류를 추적하는 순서로 배열하시오.",
  "steps": [
   "Console 오류 유무 확인",
   "서브 ul 이 메인 li 안에 있는지 마크업 확인",
   "메인과 서브 사이 틈(top·margin) 확인",
   "mouseover/out 대신 mouseenter/leave 사용 확인",
   "M2·M3 라면 이벤트 대상이 부모인지 확인"
  ],
  "e": "스크립트 오류 → 구조 → 배치 → 이벤트 종류 → 이벤트 대상 순으로 좁혀 간다."
 },
 {
  "s": "s5",
  "t": "jQuery 기본·이벤트",
  "d": 1,
  "q": "index.html 에서 JS 관련 파일을 연결하는 순서로 배열하시오.",
  "steps": [
   "css/style.css 링크",
   "script/jquery-x.x.x.min.js 연결",
   "script/script.js 연결",
   "script.js 안에서 $(function(){ }) 로 코드 감싸기"
  ],
  "e": "jQuery 가 script.js 보다 먼저 와야 하고, head 에서 부를 때는 ready 로 감싼다."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 2,
  "q": "setInterval 기반 슬라이드 로직의 실행 순서로 배열하시오.",
  "steps": [
   "document ready 에서 초기화",
   "카운터 let i = 0 을 콜백 밖에 선언",
   "setInterval(slide, 3000) 로 타이머 시작",
   "3초 경과 시 i = (i + 1) % 3 계산",
   "i 번째 장으로 animate/fade 전환"
  ],
  "e": "카운터는 타이머 밖, 전환은 인덱스 갱신 뒤."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 2,
  "q": "가로 이동 슬라이드 제작 순서로 배열하시오.",
  "steps": [
   "ul>li 에 이미지 3장·텍스트 마크업",
   "창에 고정 크기 + overflow:hidden",
   "ul 폭 300% + li 가로 나열",
   "setInterval 로 인덱스 순환",
   "animate({marginLeft:-창폭*i}) 로 이동"
  ],
  "e": "구조 → 창 → 필름 → 타이머 → 이동."
 },
 {
  "s": "s5",
  "t": "가로·세로 슬라이드",
  "d": 3,
  "q": "첫 장 복제 방식 무한 루프 1회 순환의 처리 순서로 배열하시오.",
  "steps": [
   "첫 li 를 clone 해 ul 끝에 추가(4장)",
   "인덱스 1·2·3 순서로 animate 이동",
   "3번(복제본) 도착 — 완료 콜백 실행",
   "css('marginLeft', 0) 으로 즉시 리셋, 인덱스 0",
   "다음 주기에 인덱스 1 로 이동"
  ],
  "e": "복제본은 첫 장과 같은 그림이라 즉시 리셋해도 끊김이 없다."
 },
 {
  "s": "s5",
  "t": "Fade 슬라이드",
  "d": 2,
  "q": "Fade 슬라이드 한 번 전환의 처리 순서로 배열하시오.",
  "steps": [
   "next = (cur + 1) % 3 계산",
   "현재 장 eq(cur).fadeOut()",
   "다음 장 eq(next).fadeIn() (동시 호출)",
   "cur = next 로 갱신"
  ],
  "e": "cur 를 먼저 바꾸면 엉뚱한 장을 fadeOut 한다."
 },
 {
  "s": "s5",
  "t": "탭 전환",
  "d": 1,
  "q": "탭 버튼 클릭 핸들러 내부 처리 순서로 배열하시오.",
  "steps": [
   "n = $(this).index() 로 순번 구하기",
   "클릭한 탭 addClass('on')",
   "형제 탭 removeClass('on')",
   "내용 eq(n).show(), 형제 hide()",
   "return false 로 # 이동 차단"
  ],
  "e": "순번 → 버튼 표시 → 내용 전환 → 기본 동작 차단."
 },
 {
  "s": "s5",
  "t": "레이어·모달 팝업",
  "d": 2,
  "q": "모달 레이어 팝업 구현 순서로 배열하시오.",
  "steps": [
   "덮개 div 안에 팝업 박스·닫기 button 마크업",
   "덮개 position:fixed + rgba 배경 + z-index",
   "초기 display:none",
   "첫 번째 공지 글 a 에 click → show()/fadeIn(), return false",
   "닫기 button click → hide()/fadeOut()"
  ],
  "e": "마크업 → CSS → 초기 숨김 → 열기 → 닫기."
 },
 {
  "s": "s5",
  "t": "슬라이드 공통 로직",
  "d": 3,
  "q": "시험 종료 전 슬라이드 동작 점검 순서로 배열하시오.",
  "steps": [
   "Chrome 에서 index.html 열기",
   "Console 오류 0 확인",
   "로드 후 자동 시작 확인",
   "3초 이내 간격 전환 확인",
   "마지막 장 다음 첫 장 복귀 확인"
  ],
  "e": "오류 → 자동 시작 → 간격 → 무한 반복 순으로 요구사항을 하나씩 확인한다."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "3시간 작업 순서(권장안)를 배열하시오.",
  "steps": [
   "문제 분석·폴더 생성",
   "로고·슬라이드 이미지 가공",
   "HTML 구조·CSS 레이아웃",
   "JS 기능(메뉴·슬라이드·탭·팝업)",
   "디자인 다듬기",
   "최종 점검·제출"
  ],
  "e": "분석 → 이미지 → 구조 → 기능 → 다듬기 → 점검(명세 권장안)."
 },
 {
  "s": "s6",
  "t": "시간 배분·작업 순서",
  "d": 2,
  "q": "JS 기능 구현 순서(권장안)를 배열하시오.",
  "steps": [
   "메뉴",
   "슬라이드",
   "탭",
   "팝업"
  ],
  "e": "명세 권장안은 메뉴 → 슬라이드(실격 요소 최우선 확보) → 탭 → 팝업."
 },
 {
  "s": "s6",
  "t": "제출 전 최종점검",
  "d": 3,
  "q": "제출 전 점검 순서를 배열하시오.",
  "steps": [
   "새로고침·기능 실행하며 Console 오류 확인",
   "표준(DOCTYPE·alt·중복 id) 스캔",
   "Tab 키 이동 확인",
   "상대경로·파일명 확인",
   "psd·ai·미사용 파일 삭제 후 10MB 확인",
   "비번호 폴더 그대로(미압축) 제출"
  ],
  "e": "동작 → 표준 → 접근성 → 경로 → 정리·용량 → 미압축 제출."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "일러스트레이터로 워드타입 로고를 만드는 순서를 배열하시오.",
  "steps": [
   "RGB·px 로 200×40 대지 생성",
   "로고명 입력·서체 지정",
   "윤곽선 만들기",
   "PNG(투명)로 내보내기",
   "images 폴더에 저장, .ai 는 제출 폴더 밖"
  ],
  "e": "대지 → 문자 → 윤곽선 → 내보내기 → 정리."
 },
 {
  "s": "s6",
  "t": "이미지 가공(포토샵·일러)",
  "d": 2,
  "q": "포토샵으로 푸터 회색 로고를 만드는 순서를 배열하시오.",
  "steps": [
   "로고 PNG 열기",
   "채도 감소(Shift+Ctrl+U)",
   "투명 유지 PNG 로 다른 이름 저장",
   "푸터 img src 에 연결·alt 작성"
  ],
  "e": "원본 로고는 헤더에 그대로 쓰고 회색본을 별도 저장한다."
 },
 {
  "s": "s6",
  "t": "CSS 유효성·콘솔 오류",
  "d": 2,
  "q": "Console 에 `$ is not defined` 가 떴을 때 해결 순서를 배열하시오.",
  "steps": [
   "Console 메시지 확인",
   "script 폴더에 jQuery 파일 존재 확인",
   "src 경로·파일명 일치 확인",
   "jQuery 를 script.js 앞으로 이동",
   "새로고침 후 오류 0 확인"
  ],
  "e": "원인 파악 → 파일 → 경로 → 로드 순서 → 재확인."
 },
 {
  "s": "s6",
  "t": "경로·파일·용량",
  "d": 1,
  "q": "제출 폴더를 준비하는 순서를 배열하시오.",
  "steps": [
   "바탕화면에 비번호 폴더 생성",
   "css·script·images 하위 폴더 생성",
   "제공 jQuery 를 script 에 복사",
   "index.html 을 최상위에 저장"
  ],
  "e": "시작부터 제출 구조로 작업하면 옮기다 누락되지 않는다."
 }
];

CPPG.selfcheck = [
 {
  "g": "규정·유형",
  "t": "시험시간·제출 용량·제출 폴더 구조를 그림으로 그릴 수 있다"
 },
 {
  "g": "규정·유형",
  "t": "실격 6사유를 말하고 감점 사유와 구별할 수 있다"
 },
 {
  "g": "규정·유형",
  "t": "기술적 준수사항 10조를 조항별 위반 예와 함께 설명할 수 있다"
 },
 {
  "g": "규정·유형",
  "t": "영역 Ⓐ~Ⓓ의 공통 요구(메뉴·슬라이드·팝업·갤러리·푸터)를 설명할 수 있다"
 },
 {
  "g": "규정·유형",
  "t": "와이어프레임을 보고 레이아웃 계열(L1~L6)과 메뉴 방식(M1~M6)을 판정할 수 있다"
 },
 {
  "g": "규정·유형",
  "t": "24과제의 슬라이드 방향·탭 여부·레이어/모달 분포를 설명할 수 있다"
 },
 {
  "g": "규정·유형",
  "t": "과제 분석 5축을 체크하고 3시간 작업 계획을 세울 수 있다"
 },
 {
  "g": "HTML",
  "t": "DOCTYPE·lang·meta charset·title로 HTML5 골격을 보지 않고 작성할 수 있다"
 },
 {
  "g": "HTML",
  "t": "CSS·jQuery·script.js를 올바른 순서의 상대경로로 연결하고 `$ is not defined` 원인을 설명할 수 있다"
 },
 {
  "g": "HTML",
  "t": "Ⓐ~Ⓓ 영역을 header·nav·section·footer로 나누고 팝업을 body 끝에 둘 수 있다"
 },
 {
  "g": "HTML",
  "t": "nav>ul>li>a 구조에 서브 ul을 올바른 위치에 중첩할 수 있다"
 },
 {
  "g": "HTML",
  "t": "슬라이드·공지·탭·갤러리·모달 팝업·패밀리사이트 select를 마크업할 수 있다"
 },
 {
  "g": "HTML",
  "t": "alt·href=\"#\"·../ 상대경로 규칙을 적용해 채점 PC에서 깨지지 않게 할 수 있다"
 },
 {
  "g": "HTML",
  "t": "W3C ERROR와 경고를 구분하고 ul 직계·id 중복·p 안 div 같은 ERROR를 고칠 수 있다"
 },
 {
  "g": "CSS",
  "t": "content-box 와 border-box 의 실제 폭을 계산하고 시험장 리셋 CSS 를 외워 쓸 수 있다"
 },
 {
  "g": "CSS",
  "t": "id·class·요소 선택자의 명시도를 (a,b,c) 로 계산해 적용될 규칙을 판정할 수 있다"
 },
 {
  "g": "CSS",
  "t": "고정폭 가운데 정렬과 '100% 띠 + 내부 1200px' 구조를 구분해 작성할 수 있다"
 },
 {
  "g": "CSS",
  "t": "float(+clearfix)·flex(flex:1, flex:0 0 200px)·calc 로 좌측 헤더 레이아웃을 구현할 수 있다"
 },
 {
  "g": "CSS",
  "t": "부모 relative → 자식 absolute + z-index 로 서브메뉴·팝업을 배치하고 overflow 로 슬라이드를 잘라낼 수 있다"
 },
 {
  "g": "CSS",
  "t": "레이아웃 6계열 각각의 폭·정렬·헤더 위치를 보고 래퍼 CSS 를 바로 쓸 수 있다"
 },
 {
  "g": "CSS",
  "t": "배경 #ffffff·텍스트 #333333·외부 CSS·table 금지·CSS off 세로 나열 규정을 코드로 반영할 수 있다"
 },
 {
  "g": "메뉴",
  "t": "nav > ul > li > a 와 li 안 서브 ul 구조를 W3C 오류 없이 작성할 수 있다"
 },
 {
  "g": "메뉴",
  "t": "서브메뉴 숨김·겹침 CSS(display:none·absolute·relative·z-index)를 설명할 수 있다"
 },
 {
  "g": "메뉴",
  "t": "M1 개별 드롭다운 jQuery 코드를 stop()·this 를 포함해 외워 쓸 수 있다"
 },
 {
  "g": "메뉴",
  "t": "M2·M3 전체 서브와 M1 의 이벤트 대상·선택자 차이를 설명할 수 있다"
 },
 {
  "g": "메뉴",
  "t": "와이어프레임을 보고 세로 메뉴 M4·M5·M6 를 판별하고 CSS 위치를 정할 수 있다"
 },
 {
  "g": "메뉴",
  "t": "mouseenter vs mouseover, .stop() 위치, 화살표 함수 this 함정을 설명할 수 있다"
 },
 {
  "g": "메뉴",
  "t": "focusin/focusout 또는 :focus-within 으로 Tab 키 서브 이동을 구현할 수 있다"
 },
 {
  "g": "JS·jQuery",
  "t": "jQuery 로드 순서와 document ready 의 필요성을 설명할 수 있다"
 },
 {
  "g": "JS·jQuery",
  "t": "setInterval·% 순환으로 3초 이내·자동·무한 반복 슬라이드를 작성할 수 있다"
 },
 {
  "g": "JS·jQuery",
  "t": "가로·세로 이동 슬라이드의 CSS 구조(overflow·ul 폭)와 animate 코드를 쓸 수 있다"
 },
 {
  "g": "JS·jQuery",
  "t": "Fade 슬라이드를 absolute 겹침과 동시 fadeOut·fadeIn 으로 구현할 수 있다"
 },
 {
  "g": "JS·jQuery",
  "t": "CSS keyframes 슬라이드의 주기(장 수 × 3초)와 infinite 를 설정할 수 있다"
 },
 {
  "g": "JS·jQuery",
  "t": "index·addClass·siblings·eq 로 탭 전환 코드를 쓸 수 있다"
 },
 {
  "g": "JS·jQuery",
  "t": "첫 번째 공지 글 → (모달) 레이어 팝업 열기·닫기를 구현하고 z-index 문제를 해결할 수 있다"
 },
 {
  "g": "표준·점검",
  "t": "W3C HTML 오류 유형(ul 자식·alt·중복 id·폐지 요소)과 경고(lang)를 구분할 수 있다"
 },
 {
  "g": "표준·점검",
  "t": "CSS 단위·calc 공백·주석 오류를 찾아 고칠 수 있다"
 },
 {
  "g": "표준·점검",
  "t": "Console 메시지로 jQuery 로드 순서·경로 오류를 진단할 수 있다"
 },
 {
  "g": "표준·점검",
  "t": "Tab 이동·alt·# 링크·CSS off 세로 나열 요건을 설명할 수 있다"
 },
 {
  "g": "표준·점검",
  "t": "로고·슬라이드·회색 로고를 규격과 형식(PNG/JPG)에 맞게 가공할 수 있다"
 },
 {
  "g": "표준·점검",
  "t": "3시간 타임라인과 실격 방지 우선순위를 설명할 수 있다"
 },
 {
  "g": "표준·점검",
  "t": "제출 전 체크리스트를 순서대로 수행할 수 있다"
 }
];

CPPG.roadmap = {
 "4주 표준": [
  "Week 1 — 시험 규정·제출 구조·실격 + 공개문제 유형 매트릭스",
  "Week 2 — HTML 골격 + CSS 레이아웃 6계열 직접 코딩",
  "Week 3 — 메뉴 6방식 + 슬라이드 3종·탭·팝업 코드 반복",
  "Week 4 — 공개문제 3개 이상 3시간 실전 + W3C·콘솔 점검 체크리스트"
 ],
 "시험 3일 전": [
  "D-3 — 슬라이드 3종 코드 백지 작성",
  "D-2 — 메뉴·탭·팝업 코드 + 제출 전 체크리스트",
  "D-1 — 공개문제 1개 실전 3시간 + 실격 사유 재확인"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "실격 6사유(기·범·슬·비·압·20)",
  "3시간·10MB·비번호 폴더·압축 금지",
  "W3C·Console ERROR 0 + CSS/JS 별도 파일",
  "href=\"#\"·Tab 이동·alt 전수",
  "슬라이드 3초 이내·자동·무한 반복",
  "공지 첫 글 → 팝업·닫기 버튼",
  "배경 #ffffff·텍스트 #333333·utf-8",
  "상대경로·jQuery 먼저 로드",
  "DOCTYPE·lang=ko·meta charset utf-8·title 골격",
  "jQuery → script.js 로드 순서, 제공 파일 상대경로",
  "header(h1+nav)·section·footer 영역 구분과 소스 순서",
  "메뉴 nav>ul>li>a + 서브 ul 위치",
  "모든 img alt, 상호작용 요소 href=\"#\"",
  "CSS url()의 ../images/ 경로",
  "슬라이드 3장 마크업(정지 1장 = 실격)",
  "box-sizing:border-box 리셋",
  "width + margin:0 auto 가운데 정렬",
  "100% 띠 + .inner 1200px",
  "부모 relative → 자식 absolute(서브메뉴·팝업)",
  "z-index 겹침(서브메뉴 > 슬라이드)",
  "슬라이드 overflow:hidden",
  "calc(100% - 200px) 공백 규칙",
  "body #ffffff / #333333",
  "외부 CSS link 연결",
  "서브 ul 은 메인 li 안(ul 직계=li)",
  "서브 display:none + li relative + absolute",
  "M1: $(this).children('.sub').stop().slideDown()",
  ".stop() 은 애니메이션 앞",
  "mouseenter/mouseleave(= hover) vs mouseover/out",
  "메인·서브 하이라이트(a:hover, li:hover>a)",
  "'부드럽게' = slideDown/fadeIn (show·display 즉시 ✗)",
  "a href=\"#\" 임시링크·Tab 이동",
  "슬라이드 3초 이내·자동 시작·무한 반복",
  "슬라이드 미구현 = 실격(JS·CSS 중 하나 이상)",
  "i=(i+1)%3 순환 · setInterval(fn,3000)",
  "과제별 슬라이드 방향(가로·세로·Fade) 일치",
  "공지 첫 번째 글 → 레이어/모달 팝업 + 닫기",
  "jQuery → script.js 로드 순서·document ready",
  "W3C HTML ERROR 0 — ul>li·alt·중복 id·DOCTYPE·title",
  "Console ERROR 0 — jQuery 로드 순서·경로",
  "임시링크 # + Tab 이동",
  "모든 img alt",
  "상대경로·CSS 안 ../ 경로",
  "10MB·psd 제외·미압축·비번호 폴더",
  "슬라이드 최우선(정지 = 실격)"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "레이아웃 L1~L6 과제 번호·폭",
  "메뉴 방식 M1~M6과 헤더 위치",
  "슬라이드 방향 분포(가로9·Fade8·세로7)",
  "탭 8 / 별도 16",
  "모달 11 / 레이어 13",
  "로고 200×40·종횡비 유지·푸터 grayscale",
  "Dreamweaver 불가·EditPlus 선택",
  "calc 공백·overflow:hidden·.stop()",
  "W3C ERROR vs 경고 판정(section 제목·lang·type)",
  "ul 직계 li, id 중복, p·span 안 div, a 안 button",
  "button type 기본값 submit",
  "모달 = 덮개 div + 팝업 div, 팝업 body 끝",
  "select>option 패밀리사이트, &copy; 세미콜론",
  "img width 숫자만, 폐지 요소(center·font·border)",
  "defer vs async, ready 구문",
  "float 높이 붕괴·clearfix",
  "flex 기본값(row·nowrap·shrink 1)",
  "flex:1 / flex:0 0 200px",
  "명시도 (a,b,c) 계산",
  ":hover + :focus 동시 지정",
  "마진 병합",
  "height:100% 부모 체인 vs 100vh",
  "모달 덮개 fixed + rgba",
  "filter:grayscale(100%)",
  "L3 왼쪽 정렬(margin auto 금지)",
  "M2·M3 전체 서브: 부모에 이벤트 + $('.sub, .subbg')",
  "M3 띠 z-index < 서브, 띠는 이벤트 부모 안",
  "M4 static / M5 left:100% / M6 우측 패널",
  "z-index·overflow:hidden 으로 서브 가려짐",
  "focusin/focusout · :focus-within",
  "jQuery 로드 순서·상대경로·$(function(){})",
  "화살표 함수 this 함정",
  ".stop(true,true)·기본 속도 400/200/600",
  "overflow:hidden · ul 300% 가로 구조",
  "Fade absolute 겹침 · 동시 fadeOut/fadeIn",
  "탭 index·siblings·eq 전환",
  "return false / preventDefault (# 점프)",
  "모달 덮개 position:fixed + rgba · z-index",
  "화살표 함수 this 함정",
  "CSS keyframes 9s infinite 대안",
  "CSS 단위·calc 공백·주석",
  "lang 누락 = 경고 / a 안 div = 유효",
  "table 레이아웃 = 준수사항 위반",
  "CSS off 세로 나열",
  "로고 200×40·종횡비·PNG 투명",
  "푸터 grayscale(채도 감소 / filter)",
  "3시간 권장 타임라인·우선순위"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 2,
  "title": "제출 폴더 점검 — 실격 요소 찾기",
  "problem": "다음은 한 수험자의 제출 직전 상태다. 실격에 해당하는 것은?\n① 바탕화면/07/index.html, 07/css/style.css, 07/script/script.js, 07/images/ 구성(07=비번호)\n② images 폴더의 slide1.jpg를 웹용으로 저장해 용량을 줄임\n③ 07 폴더를 07.zip으로 압축하고 원본 폴더는 삭제함\n④ W3C Validator를 쓸 수 없어 태그 닫힘을 눈으로 재점검함",
  "steps": [
   "실격 6사유(기권·작업범위 초과·슬라이드 미제작·비번호 폴더 저장 실패·압축 제출·20% 미완성)를 기준으로 본다.",
   "①은 표준 제출 구조(index.html 최상위 + 분류 폴더)다.",
   "②는 10MB 제한을 맞추는 올바른 조치다. ④도 인터넷 차단 환경의 정상 대응이다.",
   "③은 압축 제출에 해당하고 비번호 폴더도 사라졌으므로 실격이다."
  ],
  "answer": "③ — 압축 파일 제출은 실격(폴더 삭제로 비번호 폴더 저장 요건도 위반).",
  "traps": [
   "'용량을 줄이려고' 압축하는 것이 가장 흔한 실격 경로",
   "W3C 오류는 감점 대상일 뿐 실격 사유가 아니다"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "과제 분석 5축 — 와이어프레임 판독",
  "problem": "어떤 과제가 다음 조건을 가진다. 작업 계획으로 옳지 않은 것은?\n· 좌측 200px 세로 헤더, 우측 100%−200px 영역에 슬라이드·콘텐츠\n· 세로메뉴에 마우스를 올리면 제자리에서 서브가 아래로 펼쳐짐\n· 슬라이드 좌↔우 이동, 공지·갤러리 탭 구성, 배경 덮개 있는 팝업\n① 우측 영역 width:calc(100% - 200px) 지정\n② 메뉴는 아코디언형(M4)으로 slideDown 처리\n③ 슬라이드는 li를 absolute로 겹쳐 fadeIn/fadeOut\n④ 팝업은 position:fixed; inset:0 반투명 덮개를 둔다",
  "steps": [
   "좌측 200px 헤더 + 100% 폭 → L4 계열(과제 13~16형)이다. ①은 올바른 폭 계산이다.",
   "세로메뉴 제자리 펼침 = M4 아코디언. ②는 맞다.",
   "슬라이드 방향이 '좌↔우 이동'이므로 가로 이동형(marginLeft animate + overflow:hidden)이어야 한다. ③의 fade는 방향 불일치.",
   "배경 덮개가 있는 팝업 = 모달. ④는 맞다."
  ],
  "answer": "③ — 가로 이동 과제를 Fade로 구현하면 요구사항 불일치(감점).",
  "traps": [
   "슬라이드가 '움직이기만 하면 된다'는 착각 — 방향도 채점 요소",
   "calc 연산자 공백 누락은 CSS 오류"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "실격 vs 감점 판정 — 2시간 50분 시나리오",
  "problem": "시험 종료 10분 전, 슬라이드 JS가 동작하지 않고 이미지 1장만 보인다. 가장 적절한 조치는?\n① 슬라이드는 포기하고 남은 시간에 텍스트 위계·색을 다듬는다\n② CSS @keyframes로 3장 이미지를 3초 이내로 순환시키는 애니메이션을 급히 넣는다\n③ 슬라이드 이미지를 포토샵에서 1장으로 합쳐 고화질로 교체한다\n④ JS 오류를 숨기기 위해 script.js 연결을 지우고 제출한다",
  "steps": [
   "정지 이미지 1장 배치는 'Slide를 JS·CSS로 제작하지 않은 경우' → 실격이다.",
   "실격 방지가 최우선이므로 ①·③은 실격을 그대로 둔다.",
   "④는 슬라이드가 여전히 정지 상태이고 메뉴·탭 등 다른 JS 기능도 함께 잃는다.",
   "②는 CSS만으로도 슬라이드 요건(JS·CSS 중 하나 이상, 3초 이내, 무한 반복)을 충족할 수 있어 실격을 피한다."
  ],
  "answer": "② — CSS 애니메이션으로라도 슬라이드를 움직이게 해 실격을 피한다.",
  "traps": [
   "디자인 다듬기는 실격 방지보다 후순위",
   "script.js 삭제는 다른 기능까지 무너뜨린다"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "W3C ERROR 찾기 — 경고와 섞어 낸다",
  "problem": "다음 index.html 일부를 W3C HTML 검사기에 넣었을 때 ERROR가 발생하는 줄로만 짝지은 것은?\n(가) <section class=\"slide\"><ul><li><img src=\"images/s1.jpg\" alt=\"슬라이드1\"><\/li><\/ul><\/section>\n(나) <ul class=\"menu\"><a href=\"#\">회사소개<\/a><\/ul>\n(다) <section class=\"banner\"><a href=\"#\">배너 문구<\/a><\/section>\n(라) <img src=\"images/logo.png\" width=\"200px\" alt=\"로고명\">\n① (가), (나)\n② (나), (라)\n③ (다), (라)\n④ (나), (다)",
  "steps": [
   "줄마다 'ERROR인가, 경고인가, 정상인가'를 따로 판정한다.",
   "(가): ul>li>img + alt — 정상.",
   "(나): ul의 직계 자식에 a — ul에는 li만 올 수 있어 ERROR.",
   "(다): 제목 없는 section — '경고'일 뿐 ERROR가 아니다. 이 보기를 ERROR로 착각시키는 것이 함정.",
   "(라): width 값에 px — HTML 속성은 숫자만 허용되어 ERROR."
  ],
  "answer": "② — (나) ul 직계 a, (라) width=\"200px\"",
  "traps": [
   "section 제목 없음·lang 누락·type 속성은 경고라 ERROR 0 판정에 들어가지 않는다",
   "img의 width·height는 단위 없는 숫자"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "상대경로 — 기준 파일이 어디인가",
  "problem": "제출 폴더 구조가 다음과 같다.\n비번호/index.html\n비번호/css/style.css\n비번호/images/bg.jpg\nstyle.css 안에서 bg.jpg를 배경으로 지정하는 코드로 옳은 것은?\n① background:url(images/bg.jpg);\n② background:url(../images/bg.jpg);\n③ background:url(/images/bg.jpg);\n④ background:url(C:\\Users\\user\\Desktop\\비번호\\images\\bg.jpg);",
  "steps": [
   "코드가 적힌 파일이 index.html이 아니라 css/style.css라는 점부터 확인한다.",
   "CSS의 url()은 CSS 파일 위치가 기준 → css 폴더에서 한 단계 위(..)로 올라가 images로 들어간다.",
   "①은 css/images/bg.jpg를 찾는다(index.html 기준으로 착각).",
   "③은 루트 기준, ④는 절대경로 — 채점 PC·로컬 열기에서 깨진다."
  ],
  "answer": "② background:url(../images/bg.jpg);",
  "traps": [
   "같은 이미지라도 index.html의 img는 images/bg.jpg, style.css의 url()은 ../images/bg.jpg",
   "JS 문자열 경로는 JS 파일이 아니라 HTML 문서 기준"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "스크립트 연결 진단 — `$ is not defined`",
  "problem": "Chrome Console에 `Uncaught ReferenceError: $ is not defined`가 떴다. head는 다음과 같다.\n<meta charset=\"utf-8\">\n<title>과제<\/title>\n<link rel=\"stylesheet\" href=\"css/style.css\">\n<script src=\"script/script.js\"><\/script>\n<script src=\"script/jquery-3.x.x.min.js\"><\/script>\n가장 적절한 조치는?\n① link를 script 뒤로 옮긴다\n② 두 script의 순서를 바꿔 jQuery를 먼저 연결한다\n③ jQuery를 CDN 주소로 바꾼다\n④ script.js 코드를 index.html의 script 태그 안에 직접 쓴다",
  "steps": [
   "오류 메시지의 `$`는 jQuery가 만드는 함수 → 'script.js 실행 시점에 jQuery가 아직 없다'로 읽는다.",
   "head를 보면 script.js가 jQuery보다 위 → 순서가 원인.",
   "①은 CSS 순서라 무관, ③은 인터넷 차단으로 오히려 실패, ④는 JS 별도 파일 조건 위반이며 순서 문제도 그대로다.",
   "순서를 바꾼 뒤 script.js가 head에 있으므로 코드를 `$(function(){ … });` 안에 두었는지도 확인한다."
  ],
  "answer": "② jQuery → script.js 순서로 연결",
  "traps": [
   "순서만 고치고 ready를 빼먹으면 선택 결과 0개로 메뉴·슬라이드가 조용히 동작하지 않는다",
   "async를 붙이면 순서 보장이 깨진다"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "서브메뉴가 엉뚱한 곳에 뜨고 슬라이드에 가려지는 버그",
  "problem": "다음 CSS 로 드롭다운 메뉴를 만들었더니 서브메뉴가 메뉴 아래가 아니라 화면 왼쪽 위에 붙고, 슬라이드 영역에 가려진다. 수정해야 할 사항으로 옳은 것을 모두 고른 것은?\n.menu > li { float:left; width:150px; }\n.menu .sub { position:absolute; top:100%; left:0; display:none; }\n.slide { position:relative; z-index:5; }\n㉠ .menu > li 에 position:relative 추가\n㉡ .menu .sub 에 z-index:10 추가(또는 header 에 더 큰 z-index)\n㉢ .slide 에 overflow:visible 추가\n㉣ .menu .sub 에 float:left 추가\n① ㉠ ② ㉠㉡ ③ ㉡㉢ ④ ㉠㉡㉣",
  "steps": [
   "증상 1 '위치가 엉뚱함' → absolute 의 기준이 없다는 신호. 가장 가까운 non-static 조상이 없어 상위(초기 포함 블록) 기준이 됐다 → ㉠ 필요.",
   "증상 2 '슬라이드에 가려짐' → .slide 가 relative + z-index:5 로 위에 쌓였다. 서브메뉴(또는 그 조상 header)에 더 큰 z-index 가 필요 → ㉡ 필요.",
   "㉢ overflow:visible 은 기본값이며 겹침 순서와 무관하다.",
   "㉣ absolute 요소에 float 는 효과가 없다.",
   "따라서 ㉠㉡ = ②."
  ],
  "answer": "② ㉠㉡",
  "traps": [
   "z-index 만 올리고 부모 relative 를 빼먹는 경우",
   "부모 header 가 z-index 를 가진 쌓임 맥락이면 .sub 의 z-index 를 아무리 올려도 header 층 안에서만 비교된다"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "좌측 200px 헤더 레이아웃 — 콘텐츠가 아래로 떨어지는 이유",
  "problem": "100% 폭 화면에 좌측 헤더와 우측 콘텐츠를 나란히 두려고 다음과 같이 작성했다. 리셋에 box-sizing 설정은 없다. .main 이 헤더 아래 줄로 떨어지는 원인과 수정으로 옳은 것은?\nheader { float:left; width:200px; }\n.main { float:left; width:calc(100% - 200px); padding:0 20px; border-left:1px solid #ccc; }\n① calc 는 float 요소에 쓸 수 없다 → width:80% 로 바꾼다\n② content-box 라 padding 40px·border 1px 만큼 폭이 넘친다 → * { box-sizing:border-box; }\n③ header 에 clear:both 가 없다 → header 에 clear:both\n④ .main 에 position:relative 가 없다 → .main 에 relative",
  "steps": [
   "실제 폭 계산: .main = (100% − 200px) + padding 40px + border 1px → 전체 합이 부모보다 41px 크다.",
   "float 형제 합이 부모 폭을 넘으면 마지막 요소가 다음 줄로 밀린다.",
   "box-sizing:border-box 이면 width 안에 padding·border 가 포함되어 합계가 정확히 100% 가 된다 → ②.",
   "① calc 는 float 와 무관하게 동작, ③ clear 는 오히려 줄을 바꾸게 만들고, ④ relative 는 폭 계산과 무관."
  ],
  "answer": "②",
  "traps": [
   "calc 식 자체(100% - 200px)는 맞으므로 식을 의심하게 만드는 함정",
   "flex 로 바꿔도 content-box 에 width 를 고정하면 같은 계산 문제가 남는다(flex:1 이면 해소)"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "명시도 계산 — 활성 메뉴 색이 안 바뀌는 이유",
  "problem": "메뉴 on 클래스에 빨간색을 주었는데 적용되지 않는다. 최종 글자색과 이유로 옳은 것은?\n#header .menu li a { color:#333333; }\n.menu li a.on { color:red; }   ← 파일에서 더 아래에 있음\n<a class=\"on\" href=\"#\">메뉴1<\/a>\n① red — 나중에 선언되었으므로\n② red — 클래스가 2개라 더 강하므로\n③ #333333 — (1,1,2) 가 (0,2,2) 보다 명시도가 높으므로\n④ #333333 — 먼저 선언된 규칙이 우선하므로",
  "steps": [
   "첫 규칙: id 1(#header), class 1(.menu), 요소 2(li, a) → (1,1,2).",
   "둘째 규칙: id 0, class 2(.menu, .on), 요소 2(li, a) → (0,2,2).",
   "왼쪽 자리(id)부터 비교 → 1 > 0 이므로 첫 규칙 승. 선언 순서는 명시도가 같을 때만 따진다.",
   "수정: #header .menu li a.on { color:red; } → (1,2,2) 로 올린다."
  ],
  "answer": "③",
  "traps": [
   "'나중 선언이 이긴다' 는 명시도 동점일 때만",
   "④ 는 결과는 맞지만 이유가 틀린 보기 — 먼저 선언된 규칙이 우선한다는 규칙은 없다"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "M1 드롭다운 — 떨림과 전체 열림 고치기",
  "problem": "개별 드롭다운(M1) 과제에서 다음 코드를 작성했더니 ⓐ 어느 메뉴에 올려도 모든 서브가 열리고 ⓑ 마우스를 빠르게 여러 번 움직이면 손을 뗀 뒤에도 서브가 계속 오르내렸다.\n$('.menu > li').mouseover(function(){\n  $('.sub').slideDown(200);\n}).mouseout(function(){\n  $('.sub').slideUp(200);\n});\n두 증상을 모두 고친 코드로 옳은 것은?\n① $('.menu > li').mouseover(function(){ $('.sub').stop().slideDown(200); }) …\n② $('.menu > li').mouseenter(function(){ $(this).children('.sub').stop().slideDown(200); }).mouseleave(function(){ $(this).children('.sub').stop().slideUp(200); });\n③ $('.menu > li').mouseenter(function(){ $(this).children('.sub').slideDown(200).stop(); }) …\n④ $('.menu').mouseenter(function(){ $('.sub').stop().slideDown(200); }) …",
  "steps": [
   "ⓐ 전체 열림 = 선택 범위 문제. $('.sub') 는 문서의 모든 서브 → $(this).children('.sub') 로 올린 li 의 서브만.",
   "ⓑ 계속 오르내림 = 애니메이션 큐 누적 → .stop() 을 애니메이션 '앞'에.",
   "mouseover/out 은 자식 진입마다 다시 발생·버블링 → mouseenter/mouseleave 로 교체하면 떨림 원인이 하나 더 줄어든다.",
   "①은 범위 문제 그대로, ③은 stop 위치가 뒤라 방금 시작한 slideDown 을 멈춤, ④는 M2/M3(전체 서브) 동작."
  ],
  "answer": "② — this 로 범위 한정 + stop() 선행 + mouseenter/mouseleave",
  "traps": [
   ".slideDown().stop() 순서는 오히려 애니메이션을 멈춰 버린다",
   "메뉴 전체(.menu)에 거는 것은 M2·M3 방식이지 M1 이 아니다"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "M3 전체폭 띠 — 띠 위에서 닫히는 버그",
  "problem": "전체폭 서브 띠(M3) 과제의 마크업과 코드다.\n<header><h1>…<\/h1><nav><ul class=\"menu\">…<\/ul><\/nav><\/header>\n<div class=\"subbg\"><\/div>\n$('nav').mouseenter(function(){ $('.sub, .subbg').stop().slideDown(); })\n        .mouseleave(function(){ $('.sub, .subbg').stop().slideUp(); });\n마우스를 서브 항목 사이 빈 띠 부분으로 옮기면 서브와 띠가 닫힌다. 원인과 처방으로 옳은 것은?\n① .stop() 이 없어서 → stop(true,true) 로 변경\n② 띠가 이벤트 부모(nav) 밖에 있어서 → .subbg 를 nav 안으로 옮기거나 둘을 감싼 header 에 이벤트\n③ slideDown 이라서 → fadeIn 으로 변경\n④ z-index 가 없어서 → .subbg 에 z-index:9999",
  "steps": [
   "증상이 '특정 영역으로 이동할 때 닫힘'이면 이벤트 경계 문제다.",
   ".subbg 는 header 의 형제로 nav 밖에 있다 → 띠 영역 진입 = nav 이탈 → mouseleave.",
   "처방: 띠를 nav 안에 두거나, 이벤트를 nav·띠를 모두 감싼 header 에 건다.",
   "④처럼 띠 z-index 를 높이면 오히려 서브 링크를 덮는다(띠 < 서브)."
  ],
  "answer": "② — 띠를 이벤트 부모 안에 두거나 감싸는 부모에 이벤트를 건다",
  "traps": [
   "애니메이션 방식(slide/fade)은 닫힘 원인과 무관",
   "띠의 z-index 는 서브보다 낮게 유지"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "키보드 접근 — Tab 으로 서브 항목에 가기",
  "problem": "마우스로는 드롭다운이 잘 동작하지만 Tab 키로는 메인 메뉴만 이동하고 서브 항목으로 들어가지 않는다. 서브는 .sub{display:none} 이다. 가장 알맞은 처방은?\n① $('.menu > li').on('focus', function(){ $(this).children('.sub').stop().slideDown(); });\n② $('.menu > li').on('focusin', function(){ $(this).children('.sub').stop().slideDown(); }).on('focusout', function(){ $(this).children('.sub').stop().slideUp(); });\n③ .sub{display:none} 를 .sub{opacity:0} 로만 변경\n④ 모든 li 에 tabindex=\"0\" 추가",
  "steps": [
   "display:none 인 서브 링크는 Tab 순서에서 빠진다 → 포커스가 메인에 왔을 때 서브를 열어 줘야 다음 Tab 이 서브로 간다.",
   "포커스는 a 가 받는다. li 에서 잡으려면 버블링하는 focusin/focusout 이 필요 — ①의 focus 는 li 에서 발생하지 않는다.",
   "③은 보이지 않는 링크에 포커스가 가는 문제, ④는 li 에 불필요한 포커스 정지를 추가할 뿐 서브를 열지 않는다.",
   "CSS 대안: .menu > li:focus-within > .sub{display:block}"
  ],
  "answer": "② — focusin 으로 열고 focusout 으로 닫는다(마우스 이벤트와 병행)",
  "traps": [
   "focus/blur 는 버블링하지 않는다",
   "채점 반영 비중은 공식 미공개 [확인필요]"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "가로 슬라이드가 첫 장에서 멈춤 — 오류 찾기",
  "problem": "다음 script.js 의 가로 슬라이드가 페이지를 열어도 넘어가지 않는다. 원인을 모두 찾으시오.\n$(function(){\n  setInterval(function(){\n    let i = 0;\n    i = (i + 1) % 3;\n    $('.slide ul').animate({left: -1200 * i}, 600);\n  }, 3000);\n});\n(CSS: .slide{width:1200px;overflow:hidden} .slide ul{width:300%} .slide li{float:left;width:33.3333%})",
  "steps": [
   "요구 3가지(3초 이내·자동·무한)부터 대조 — 간격 3000, ready 안에서 시작이므로 자동 시작 조건은 충족.",
   "카운터 i 가 콜백 안에서 매번 0 으로 선언 → 항상 1 로 계산되어 두 번째 장까지만 가거나 같은 위치 반복. → 콜백 밖으로 이동.",
   "animate 가 left 를 바꾸는데 ul 에 position 이 없다(static) → left 무효로 전혀 안 움직임. → ul 에 position:relative 추가하거나 marginLeft 사용.",
   "수정 후: let i=0; 을 setInterval 위에, animate({marginLeft:-1200*i},600)."
  ],
  "answer": "① i 선언 위치(콜백 안 → 밖) ② left 이동인데 ul 에 position 누락 — marginLeft 로 바꾸거나 position:relative 지정",
  "traps": [
   "Console 오류가 없어도 동작 안 하는 결함이 많다 — 직접 3주기 이상 지켜본다",
   "overflow·width 는 맞아서 레이아웃만 보면 정상처럼 보인다"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "Fade 슬라이드 — 빈 화면이 깜빡임",
  "problem": "Fade 과제에서 전환 때마다 흰 화면이 잠깐 보인다. 코드의 문제와 수정안은?\n$li.eq(cur).fadeOut(1000, function(){\n  $li.eq(next).fadeIn(1000);\n});\n① 간격 3000 을 2000 으로 줄인다\n② fadeOut 과 fadeIn 을 동시에 호출한다\n③ fadeIn 을 slideDown 으로 바꾼다\n④ li 의 position:absolute 를 제거한다",
  "steps": [
   "fadeIn 이 fadeOut 의 완료 콜백 안에 있다 → 현재 장이 완전히 사라진 뒤 다음 장이 나타나기 시작 → 그 사이 배경(흰색)이 보인다.",
   "두 호출을 같은 시점에 두면 겹친 li 가 교차하며 크로스페이드가 된다.",
   "① 간격은 3초 조건과 관련될 뿐 빈 화면과 무관. ③ slideDown 은 Fade 가 아니다. ④ absolute 를 빼면 장이 아래로 쌓인다."
  ],
  "answer": "② — `$li.eq(cur).fadeOut(1000); $li.eq(next).fadeIn(1000);` 로 동시 호출",
  "traps": [
   "완료 콜백 = '끝난 뒤' 라는 점을 놓치기 쉽다",
   "Fade 과제에 slide 계열 메서드를 쓰면 방향 요구 위반"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "탭 + 모달 팝업 — 동작 판정",
  "problem": "탭 구성·모달 팝업 과제에서 다음 코드의 결함으로 옳은 것을 모두 고르시오.\n$('.tab-btn a').click(() => {\n  const n = $(this).index();\n  $('.tab-cont > div').eq(n).show();\n});\n$('.notice li a').click(function(){ $('.popup').show(); return false; });\n① 화살표 함수라 this 가 클릭한 요소가 아님\n② a 에 바인딩해 index() 가 li 순번이 아님\n③ 이전 탭 내용을 숨기지 않음 + return false 누락\n④ 모든 공지 글에 팝업이 연결됨",
  "steps": [
   "탭: 화살표 함수 → $(this) 는 요소가 아님(①). function 으로 바꿔도 a 는 li 의 유일한 자식이라 index() 는 항상 0(②) → li 에 바인딩.",
   "show() 만 있어 이전 내용이 남고, return false 가 없어 # 로 점프(③) → .siblings().hide(), return false 추가.",
   "팝업: 요구는 '첫 번째 글' → `.notice li a` 는 모든 글(④) → `$('.notice li').first().find('a')`.",
   "모달 과제이므로 .popup 이 fixed 덮개 구조인지도 함께 확인."
  ],
  "answer": "①②③④ 모두 결함",
  "traps": [
   "동작은 '어느 정도' 되므로 결함을 놓치기 쉽다 — 요구사항 문장(첫 번째 글·탭 전환)과 1:1 대조",
   "화살표 함수 + this 는 Console 오류 없이 틀린다"
  ]
 },
 {
  "s": "s6",
  "d": 2,
  "title": "W3C 오류 찾기 — 메뉴 마크업",
  "problem": "다음 메뉴 마크업에서 W3C HTML validator 오류가 되는 줄을 모두 고르시오.\n① <nav><ul class=\"menu\">\n② <li><a href=\"#\">회사소개<\/a><\/li>\n③ <div class=\"line\"><\/div>\n④ <li><a href=\"#\"><img src=\"images/icon.png\"><\/a><\/li>\n⑤ <\/ul><\/nav>",
  "steps": [
   "ul 의 직계 자식이 li 뿐인지 확인한다 — ③ div 가 ul 안에 직접 있어 오류.",
   "img 의 alt 를 확인한다 — ④ alt 누락 오류.",
   "① ② ⑤ 는 구조상 문제 없다.",
   "처방: ③ 구분선은 CSS border 로, ④ 에 alt=\"회사소개 아이콘\" 추가."
  ],
  "answer": "③, ④",
  "traps": [
   "a 안의 img 는 유효 — 문제는 alt 누락",
   "구분선 div 를 ul 안에 넣는 습관이 흔한 오류원"
  ]
 },
 {
  "s": "s6",
  "d": 3,
  "title": "Console 오류 0 인데 메뉴가 안 움직인다",
  "problem": "head 가 다음과 같다. 메뉴 hover 가 동작하지 않는 원인과 수정 방법은?\n<link rel=\"stylesheet\" href=\"css/style.css\">\n<script src=\"script/script.js\"><\/script>\n<script src=\"script/jquery.min.js\"><\/script>\n(script.js 첫 줄: $('.menu > li').hover(…);)",
  "steps": [
   "script.js 가 jQuery 보다 먼저 로드된다 → 실행 시 $ 가 없어 `$ is not defined` 가 떠야 한다.",
   "문제의 '오류 0' 전제와 비교 — Console 을 새로고침 후 다시 보면 오류가 있다(확인 누락).",
   "순서를 jQuery → script.js 로 바꾼다.",
   "script.js 를 `$(function(){ … });` 로 감싸 DOM 준비 후 연결한다(head 배치이므로 필수).",
   "새로고침 → hover → Console 재확인."
  ],
  "answer": "로드 순서 역전 + ready 누락. jQuery 를 먼저 연결하고 코드를 $(function(){}) 로 감싼다.",
  "traps": [
   "순서만 고치면 ready 없이 빈 집합이 되어 '오류 없이 동작 안 함'이 된다",
   "CDN 으로 바꾸는 것은 인터넷 차단 환경에서 해결책이 아님"
  ]
 },
 {
  "s": "s6",
  "d": 2,
  "title": "시나리오 — 2:50, 무엇부터 할까",
  "problem": "시험 시작 2시간 50분. 현재 상태: 슬라이드 정상, 팝업 닫기 미구현, 푸터 로고 컬러 그대로, 작업 폴더는 '다운로드\\작업', images 에 logo.psd 존재. 남은 10분의 처리 순서로 가장 적절한 것은?\n① 팝업 닫기 → 푸터 회색 → 폴더 이동\n② 비번호 폴더로 이동·psd 삭제·용량 확인 → Console 확인 → 남는 시간에 filter:grayscale\n③ zip 압축 후 제출\n④ 푸터 로고를 포토샵으로 다시 제작",
  "steps": [
   "실격 요인부터 제거: 비번호 폴더 저장 실패·압축 제출·용량/시간 초과.",
   "폴더 이동 후 상대경로가 유지되는지 새로고침으로 확인, psd 삭제.",
   "Console 0 확인.",
   "남는 시간에 CSS 한 줄(grayscale)로 감점 요소 줄이기 — 포토샵 재작업보다 빠르다."
  ],
  "answer": "② — 실격 방지 > 기능 > 디자인 순서.",
  "traps": [
   "③ 압축 제출은 실격",
   "① 폴더 이동을 마지막으로 미루면 시간 초과·저장 실패 위험"
  ]
 }
];
