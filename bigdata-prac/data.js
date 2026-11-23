/* ============================================================
   빅데이터분석기사 실기 — 학습·퀴즈 데이터
   소스: 02_타자격증_학습자료/빅데이터분석기사_실기 (00~06 + 기출예시_라인바이라인)
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */
const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "빅데이터분석기사 실기",
 "brand": "빅분기 실기",
 "tag": "빅데이터분석기사 실기 · 한국데이터산업진흥원(KDATA)",
 "storeKey": "bigdataprac",
 "topicUnit": "단원",
 "title": "빅데이터분석기사 실기 — 작업형 Python 훈련",
 "h1": "빅데이터분석기사 실기",
 "unit": "영역",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 60,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "빅데이터분석기사 실기 (국가기술자격 · 작업형 Python/R)",
 "host": "한국데이터산업진흥원(KDATA) · dataq.or.kr",
 "type": "작업형 — 제1유형 전처리 3문항×10점 · 제2유형 모형 구축 1문항×40점 · 제3유형 통계 검정 2문항×15점",
 "time": "180분 (클라우드 IDE · 인터넷 차단 · help()/dir() 만 참고)",
 "pass": "100점 만점 60점 이상",
 "book": "저장소 자료 「빅데이터분석기사_실기」 00~06 + 기출예시 라인바이라인 풀이",
 "slogan": "빅분기 실기 합격 = 제1유형 pandas 정답 출력 + ★제2유형 result.csv 제출 형식★ + 제3유형 검정 함수·해석 암기",
 "paperSpec": [
  {
   "s": "s1",
   "n": 5
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
   "n": 5
  }
 ],
 "footer": [
  "빅데이터분석기사 실기 / 주관 <b>한국데이터산업진흥원(KDATA)</b> · dataq.or.kr · 작업형 180분 · <b>100점 만점 60점 이상</b>",
  "유형: 제1유형 데이터 처리(30) · 제2유형 모형 구축(40) · 제3유형 통계 검정(30) — 사이트 모의고사 40문항(5·10·10·10·5)은 학습 배분이며 공식 배점이 아닙니다. 응시료·일정은 dataq.or.kr 공지 확인 [확인필요].",
  "데이터 소스: <code>02_타자격증_학습자료/빅데이터분석기사_실기</code> → <code>학습사이트/data.js</code> · 진도·오답노트는 브라우저(localStorage)에만 저장됩니다.",
  "⚠ 문항은 학습자료를 바탕으로 새로 만든 연습 문제이며 실제 기출이 아닙니다. 실기는 코드 작성형이므로 4지선다·OX 는 개념 점검용, ★단답(함수명·인자)과 📄 예시문제(전체 풀이 코드)★ 가 실전 훈련입니다. 코드·수치는 pandas·scikit-learn·scipy·statsmodels 로 실행 검증했습니다(시험장 라이브러리 버전 [확인필요])."
 ],
 "info": [
  {
   "title": "시험 구성",
   "type": "table",
   "head": [
    "유형",
    "내용",
    "배점",
    "핵심"
   ],
   "rows": [
    [
     "제1유형",
     "데이터 처리·전처리",
     "3문항 × 10점",
     "결측·이상치·스케일링·집계 → 값 print"
    ],
    [
     "제2유형",
     "데이터 모형 구축·예측",
     "1문항 × 40점",
     "train/test 전처리 → 모델 → ★CSV 제출★"
    ],
    [
     "제3유형",
     "통계적 가설검정",
     "2문항 × 15점",
     "scipy·statsmodels 검정통계량·p-value·판정"
    ]
   ]
  },
  {
   "title": "실수 방지 요령",
   "type": "list",
   "items": [
    "제1·3유형은 ★print()★ 로 명시 출력 — 출력 안 하면 채점 불가.",
    "제2유형은 ★컬럼명·행 수·index=False★ 가 정확도보다 먼저 — 형식 오류는 0점 위험.",
    "인자가 기억나지 않으면 ★help(함수)★ · dir(객체) — 인터넷은 차단."
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "시험 환경·Python 기초",
  "short": "환경·기초",
  "out": 5,
  "color": "#0e7490",
  "desc": "시험 구성·배점 · 구름 IDE 제약(help·dir·print) · pandas DataFrame·인덱싱·필터·집계·결합 · 문자열·날짜 · NumPy"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "제1유형 데이터 전처리",
  "short": "제1유형",
  "out": 10,
  "color": "#2563eb",
  "desc": "결측치 · 이상치(IQR·Z) · 스케일링(Min-Max·표준화) · groupby 집계 · 정렬·순위 · 통계량(ddof·분위수) · 출력 형식 (30점)"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "제2유형 머신러닝 모형",
  "short": "제2유형",
  "out": 10,
  "color": "#7c3aed",
  "desc": "모델링 7단계 · 인코딩·train/test 정합 · RandomForest 분류·회귀 · 평가지표(AUC·F1·RMSE) · 검증 분할 · result.csv 제출 ★40점★"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "제3유형 통계 검정",
  "short": "제3유형",
  "out": 10,
  "color": "#c2410c",
  "desc": "가설·p-value 판정 · 정규성·등분산 · t검정 3종 · ANOVA · 카이제곱 · 비모수 · 상관 · 선형·로지스틱 회귀 (30점)"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "빈출·함정·시간 전략",
  "short": "함정·전략",
  "out": 5,
  "color": "#15803d",
  "desc": "180분 시간 배분 · 출력·제출 형식 실수 · 빈출 함정 · 암기 스니펫 · 60점 득점 시나리오"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "시험 구성·환경",
  "front": "빅데이터분석기사 실기 시험 구성·시간·합격 기준은?",
  "key": "작업형 3유형 / 180분 / 100점 중 60점 이상",
  "back": "전부 ★컴퓨터 작업형★. 제1유형 데이터 전처리 / 제2유형 모형 구축·예측 / 제3유형 통계 검정. ★100점 만점 60점 이상 합격★.",
  "tip": "180분 · 100점 · 60점"
 },
 {
  "s": "s1",
  "g": "시험 구성·환경",
  "front": "유형별 문항 수와 배점은?",
  "key": "1유형 3×10=30 / 2유형 1×40=40 / 3유형 2×15=30",
  "back": "제1유형 ★3문항×10점★ / 제2유형 ★1문항 40점(최대 배점)★ / 제3유형 ★2문항×15점★. 제3유형은 6회(2023)부터 신설.",
  "tip": "30·40·30 — 2유형 한 문항이 40점"
 },
 {
  "s": "s1",
  "g": "시험 구성·환경",
  "front": "실기 코딩 환경과 핵심 제약은?",
  "key": "클라우드 웹 IDE(구름) / 인터넷 차단 / 패키지 설치 불가",
  "back": "시험용 ★클라우드 웹 IDE(구름 EXAM)★에서 작성·제출. ★인터넷 차단★ / 외부 라이브러리 설치 불가(제공 패키지만) / 자동완성 미흡 → 함수·인자 암기.",
  "tip": "검색 불가 — 암기 + help()"
 },
 {
  "s": "s1",
  "g": "시험 구성·환경",
  "front": "시험 중 함수 인자를 잊었을 때 참고 수단은?",
  "key": "help(함수) / dir(객체)",
  "back": "인터넷이 막혀 있어 ★help(pd.read_csv)★로 시그니처·파라미터 확인, ★dir(객체)★로 메서드·속성 목록 확인. 짧게 보려면 print(함수.__doc__[:500]).",
  "tip": "help = 설명서, dir = 목차"
 },
 {
  "s": "s1",
  "g": "시험 구성·환경",
  "front": "제1·3유형 답이 채점에 인식되려면?",
  "key": "print()로 명시적 출력",
  "back": "변수명만 적으면 화면에 값이 안 나올 수 있음 → ★print(결과)★ 필수. 문제 지시대로 ★반올림 자릿수★ 맞춰 출력(round).",
  "tip": "print 없으면 0점 위험"
 },
 {
  "s": "s1",
  "g": "시험 구성·환경",
  "front": "제2유형 결과 제출 방식은?",
  "key": "예측 결과 CSV 파일 저장 / index=False",
  "back": "예측값을 지정 파일명·컬럼명으로 ★df.to_csv('파일명', index=False)★ 저장. index=False 누락 시 불필요한 인덱스 열 생성. 성능보다 ★제출 형식★ 우선.",
  "tip": "파일명·컬럼명·index=False 3종 체크"
 },
 {
  "s": "s1",
  "g": "시험 구성·환경",
  "front": "응시 언어 선택 규칙은?",
  "key": "Python 또는 R 중 응시자 선택",
  "back": "★Python·R 중 선택★. Python은 pandas·sklearn·scipy 생태계로 다수가 선택(체감). R도 동일 배점. 혼용보다 ★한 언어 통일★ 권장.",
  "tip": "Python = pandas·sklearn·scipy"
 },
 {
  "s": "s1",
  "g": "DataFrame 기초",
  "front": "딕셔너리로 DataFrame 만드는 코드는?",
  "key": "pd.DataFrame({'a':[1,2], 'b':['x','y']})",
  "back": "키 = 컬럼명, 값 = 리스트. 2차원 리스트는 ★pd.DataFrame(리스트, columns=[...])★. Series는 pd.Series(값, index=[...], name='val').",
  "tip": "dict 키 → 컬럼"
 },
 {
  "s": "s1",
  "g": "DataFrame 기초",
  "front": "read_csv 주요 인자 4가지는?",
  "key": "encoding / sep / index_col / header=None",
  "back": "한글 깨짐 → ★encoding='cp949'★ / 탭 → sep='\\t' / 특정 열을 인덱스로 → index_col / 헤더 없음 → header=None / 일부 열 → usecols.",
  "tip": "UnicodeDecodeError → encoding"
 },
 {
  "s": "s1",
  "g": "DataFrame 기초",
  "front": "속성(괄호 없음)과 메서드(괄호 필요) 구분은?",
  "key": "속성 shape·dtypes·columns / 메서드 info()·describe()·head()",
  "back": "★df.shape★ (행,열) 튜플·★df.dtypes★·df.columns·df.index는 괄호 없음. ★df.info()★·df.describe()·df.head()·df.isnull().sum()은 괄호 필수.",
  "tip": "shape() 쓰면 TypeError"
 },
 {
  "s": "s1",
  "g": "DataFrame 기초",
  "front": "값별 빈도와 비율을 구하는 함수는?",
  "key": "value_counts() / value_counts(normalize=True)",
  "back": "★빈도 내림차순★이 기본. normalize=True → 비율. 고유값 개수 = nunique()(NaN 제외), 고유값 배열 = unique().",
  "tip": "최빈 범주 = value_counts().index[0]"
 },
 {
  "s": "s1",
  "g": "DataFrame 기초",
  "front": "apply와 map의 차이는?",
  "key": "map = Series 값 매핑(dict) / apply = 함수 적용·axis=1 행 단위",
  "back": "★Series.map(dict)★은 사전에 없는 값 → ★NaN★. Series.apply(lambda) 원소별 함수. ★DataFrame.apply(f, axis=1)★ 행 단위. DataFrame 원소별은 applymap → DataFrame.map(2.1+).",
  "tip": "map 후 NaN 확인 습관"
 },
 {
  "s": "s1",
  "g": "인덱싱·필터",
  "front": "loc과 iloc의 차이는?",
  "key": "loc = 라벨·끝 포함 / iloc = 정수 위치·끝 미포함",
  "back": "★df.loc[0:2]★ → 라벨 0,1,2 (3행). ★df.iloc[0:2]★ → 위치 0,1 (2행). loc은 열 이름, iloc은 열 번호. 마지막 행 = iloc[-1].",
  "tip": "loc 끝 포함, iloc 끝 제외"
 },
 {
  "s": "s1",
  "g": "인덱싱·필터",
  "front": "복수 조건 필터링 문법은?",
  "key": "(조건1) & (조건2) / | / ~ — 괄호 필수",
  "back": "★df[(df['a']>1) & (df['b']=='x')]★. and·or 대신 ★& | ~★. 괄호 빠지면 연산자 우선순위로 오류. 포함 = isin([...]), 범위 = between(a,b)(양끝 포함).",
  "tip": "and/or 쓰면 ValueError"
 },
 {
  "s": "s1",
  "g": "인덱싱·필터",
  "front": "query로 변수 참조하는 방법은?",
  "key": "df.query('score >= @th')",
  "back": "문자열 조건 'age > 30 and gender == \"M\"'처럼 ★and/or 사용 가능★. 외부 변수는 ★@변수명★.",
  "tip": "query 안에서는 and OK"
 },
 {
  "s": "s1",
  "g": "인덱싱·필터",
  "front": "필터 후 인덱스를 0부터 다시 매기려면?",
  "key": "reset_index(drop=True)",
  "back": "필터·dropna 후 원래 인덱스(0,1,4…)가 유지됨 → ★reset_index(drop=True)★. drop=False면 기존 인덱스가 열로 추가.",
  "tip": "iloc 충돌 예방"
 },
 {
  "s": "s1",
  "g": "집계·결합",
  "front": "그룹별 집계와 결과 인덱스 처리는?",
  "key": "df.groupby('키')['값'].mean() → 키가 인덱스",
  "back": "결과는 ★키가 인덱스인 Series★. 컬럼으로 되돌리기 → ★reset_index()★ 또는 groupby(..., as_index=False). 복수 집계 → agg(['mean','max']) / 이름 지정 agg(avg=('score','mean')).",
  "tip": "count는 NaN 제외, size는 포함"
 },
 {
  "s": "s1",
  "g": "집계·결합",
  "front": "그룹 집계값을 원래 행 수 그대로 붙이려면?",
  "key": "groupby(...)['값'].transform('mean')",
  "back": "★transform★은 원본과 ★같은 길이★ 반환 → 그룹 평균 대비 비교·그룹별 결측 대체에 사용. agg/mean은 그룹 수만큼 축약.",
  "tip": "행 수 유지 = transform"
 },
 {
  "s": "s1",
  "g": "집계·결합",
  "front": "merge how 4종과 기본값은?",
  "key": "inner(기본) / left / right / outer",
  "back": "★pd.merge(df1, df2, on='id', how='left')★. 키 이름 다르면 left_on·right_on. 동일 컬럼명 → ★_x, _y★ 접미사(suffixes로 변경). 매칭 없으면 NaN.",
  "tip": "기본 inner — 행이 줄 수 있음"
 },
 {
  "s": "s1",
  "g": "집계·결합",
  "front": "concat 사용법과 인덱스 재설정은?",
  "key": "pd.concat([df1, df2], ignore_index=True)",
  "back": "기본 ★axis=0 행 방향★, 원 인덱스 유지(0,1,2,0,1,2) → ★ignore_index=True★로 재부여. axis=1 열 방향. join='inner' 공통 컬럼만.",
  "tip": "리스트로 묶어 전달"
 },
 {
  "s": "s1",
  "g": "문자열·날짜",
  "front": "문자열 컬럼 처리 접근자와 대표 메서드는?",
  "key": ".str — contains / replace / split / strip / len / 슬라이싱",
  "back": "★df['c'].str.contains('서울', na=False)★ (NaN → False). str.split('-', expand=True) → DataFrame. str[0:4] 앞 4글자. str.extract(r'(\\d+)') 정규식 추출.",
  "tip": "Series 메서드 아닌 .str 경유"
 },
 {
  "s": "s1",
  "g": "문자열·날짜",
  "front": "날짜 요소 추출 순서는?",
  "key": "pd.to_datetime() 변환 → .dt.year/.month/.day/.dayofweek",
  "back": "문자열에는 .dt 불가 → ★먼저 pd.to_datetime★(errors='coerce' 실패 → NaT). ★dayofweek 0=월요일~6=일요일★. 경과 일수 = (end-start).dt.days.",
  "tip": "월요일 = 0"
 },
 {
  "s": "s1",
  "g": "NumPy",
  "front": "NumPy 배열 생성 함수 핵심은?",
  "key": "np.array / arange(start,stop,step) / linspace / zeros / ones",
  "back": "★np.arange(0,10,3)★ → [0 3 6 9] (stop 미포함). linspace(0,1,5) → 끝 포함 5등분. reshape(-1,2) 행 자동 계산. np.where(조건, 참값, 거짓값).",
  "tip": "arange stop 제외, linspace stop 포함"
 },
 {
  "s": "s1",
  "g": "NumPy",
  "front": "np.std와 pandas std의 기본 ddof 차이는?",
  "key": "np.std ddof=0(모) / Series.std ddof=1(표본)",
  "back": "같은 데이터라도 값이 다름 — [1,2,3,4] → np.std 1.118 / Series.std 1.291. 문제에서 ★표본·모집단★ 지시 확인 후 ddof 명시.",
  "tip": "numpy 0, pandas 1"
 },
 {
  "s": "s2",
  "g": "결측치",
  "front": "결측치 탐지",
  "key": "isnull().sum()",
  "back": "★df.isnull().sum()★ — 컬럼별 결측 개수 / ★isnull().mean()★ — 결측 비율 / isna() 는 isnull() 별칭 / notnull() 은 반대",
  "tip": "결측 비율 최대 컬럼 = df.isnull().mean().idxmax()"
 },
 {
  "s": "s2",
  "g": "결측치",
  "front": "fillna 대체 3종",
  "key": "평균·중앙값·최빈값",
  "back": "평균 ★fillna(df[c].mean())★ / 중앙값 ★fillna(df[c].median())★ / 최빈값 ★fillna(df[c].mode()[0])★ / 통계량은 NaN 제외하고 계산됨",
  "tip": "문제의 \"평균/중앙값/최빈값\" 단어 그대로 함수 선택"
 },
 {
  "s": "s2",
  "g": "결측치",
  "front": "재할당 원칙",
  "key": "df[c] = df[c].fillna(v)",
  "back": "fillna·dropna 는 기본 ★새 객체 반환★ / 원본 반영은 ★재할당★ / df[c].fillna(v, inplace=True) 같은 체인 inplace 는 최신 pandas(Copy-on-Write)에서 원본에 반영 안 됨",
  "tip": "버전 무관 안전한 방식 = 재할당"
 },
 {
  "s": "s2",
  "g": "결측치",
  "front": "mode()[0]",
  "key": "최빈값은 Series",
  "back": "mode() 는 최빈값이 여러 개일 수 있어 ★Series 반환★(오름차순) / 스칼라는 ★mode()[0]★ / 동률이면 가장 작은 값이 [0]",
  "tip": "fillna(df[c].mode()) 는 인덱스 정렬 대입 → 의도와 다름"
 },
 {
  "s": "s2",
  "g": "결측치",
  "front": "dropna 옵션",
  "key": "subset · thresh · axis",
  "back": "★subset=[c]★ — 해당 컬럼 결측 행만 제거 / ★thresh=n★ — 유효값 n개 미만 행 제거 / ★axis=1★ — 결측 있는 열 제거 / how='all' — 전부 결측일 때만",
  "tip": "\"특정 컬럼 결측 행 제거\" → subset"
 },
 {
  "s": "s2",
  "g": "결측치",
  "front": "그룹별 평균 대체",
  "key": "groupby + transform",
  "back": "df[c] = df[c].fillna(★df.groupby(g)[c].transform('mean')★) / transform 은 원본 길이·인덱스 유지 → 행 단위로 정렬되어 채워짐",
  "tip": "agg/mean 결과는 그룹 수 길이라 바로 fillna 불가"
 },
 {
  "s": "s2",
  "g": "결측치",
  "front": "앞·뒤 값 채우기",
  "key": "ffill · bfill",
  "back": "★s.ffill()★ — 앞(위) 값으로 / ★s.bfill()★ — 뒤(아래) 값으로 / fillna(method='ffill') 는 2.1 에서 deprecated, 3.0 에서 제거",
  "tip": "시계열 결측 = ffill 우선 고려"
 },
 {
  "s": "s2",
  "g": "이상치",
  "front": "IQR 경계",
  "key": "Q1−1.5·IQR ~ Q3+1.5·IQR",
  "back": "Q1 = quantile(0.25) / Q3 = quantile(0.75) / ★IQR = Q3 − Q1★ / 하한 ★Q1 − 1.5×IQR★ / 상한 ★Q3 + 1.5×IQR★",
  "tip": "1.5 배수 누락이 단골 실수"
 },
 {
  "s": "s2",
  "g": "이상치",
  "front": "이상치 제거 vs 개수",
  "key": "범위 안 & / 범위 밖 |",
  "back": "정상 유지 ★(s >= lo) & (s <= up)★ / 이상치 선택 ★(s < lo) | (s > up)★ / 각 조건 ★괄호 필수★(& 가 비교연산보다 우선)",
  "tip": "이상치 개수 = 불리언.sum()"
 },
 {
  "s": "s2",
  "g": "이상치",
  "front": "Z-score 기준",
  "key": "|z| > 3",
  "back": "z = (x − 평균) / 표준편차 / 관례 기준 ★|z| > 3★ (문제가 2 등 지정 시 지시 따름) / pandas std(ddof=1) vs numpy·sklearn(ddof=0) 에 따라 z 값 달라짐",
  "tip": "경계값 근처 개수는 ddof 에 따라 바뀜"
 },
 {
  "s": "s2",
  "g": "이상치",
  "front": "clip",
  "key": "경계값으로 자르기",
  "back": "★s.clip(lower=lo, upper=up)★ — 범위 밖 값을 경계값으로 대체(제거 아님, 행 수 유지) / \"이상치를 상·하한값으로 대체\" 문제에 사용",
  "tip": "제거 문제에 clip 쓰면 행 수가 달라 오답"
 },
 {
  "s": "s2",
  "g": "스케일링",
  "front": "Min-Max 정규화",
  "key": "(x−min)/(max−min)",
  "back": "★(x − min) / (max − min)★ → 0~1 / sklearn ★MinMaxScaler()★ 결과와 동일 / 최솟값 → 0, 최댓값 → 1",
  "tip": "분모는 max − min (평균 아님)"
 },
 {
  "s": "s2",
  "g": "스케일링",
  "front": "표준화",
  "key": "(x−평균)/표준편차",
  "back": "수식 ★(x − mean) / std★ → 평균 0, 표준편차 1 / sklearn ★StandardScaler★ 는 ★ddof=0★(모표준편차) / pandas .std() 는 ddof=1",
  "tip": "\"sklearn 사용\" 지시 → StandardScaler, 수식 지시 → 지시된 std"
 },
 {
  "s": "s2",
  "g": "스케일링",
  "front": "sklearn 입력 형태",
  "key": "df[[c]] 2차원",
  "back": "fit_transform 은 ★2차원 입력★ → ★df[['c']]★ (대괄호 2개) / df['c'] 1차원 Series 넣으면 ValueError / 결과는 numpy 2차원 배열",
  "tip": "단일 열 결과 대입: df['z'] = scaler.fit_transform(df[['c']])"
 },
 {
  "s": "s2",
  "g": "집계·날짜",
  "front": "groupby 기본",
  "key": "groupby(g)[c].집계()",
  "back": "★df.groupby(g)[c].mean()★ → 그룹명이 ★인덱스★인 Series / .max() 값, ★.idxmax()★ 그룹명 / 키가 NaN 인 행은 기본 제외(dropna=True)",
  "tip": "값을 묻는가, 이름을 묻는가 먼저 확인"
 },
 {
  "s": "s2",
  "g": "집계·날짜",
  "front": "agg vs transform",
  "key": "요약 vs 원본 길이",
  "back": "★agg/mean★ — 그룹당 1행 요약 / ★transform★ — 원본 행 수 유지(각 행에 그룹 통계 배치) / 컬럼별 다른 함수 agg({'A':'sum','B':'mean'})",
  "tip": "\"그룹 평균보다 큰 행\" → transform 으로 비교"
 },
 {
  "s": "s2",
  "g": "집계·날짜",
  "front": "조건 필터 후 집계",
  "key": "필터 먼저",
  "back": "★df[조건].groupby(g)[c].sum()★ / \"이상\" >= · \"초과\" > · \"이하\" <= · \"미만\" < / 복수 조건 (A) & (B), (A) | (B)",
  "tip": "필터 순서 바꾸면 값이 달라짐"
 },
 {
  "s": "s2",
  "g": "집계·날짜",
  "front": "날짜 파생",
  "key": "to_datetime → .dt",
  "back": "★pd.to_datetime(df[c])★ 변환 후 .dt 접근 / ★dt.year·dt.month·dt.day·dt.hour★ / dt.quarter 분기 / ★dt.dayofweek 0=월 ~ 6=일★ / dt.day_name() 영문 요일",
  "tip": "문자열 그대로 .dt 쓰면 AttributeError"
 },
 {
  "s": "s2",
  "g": "집계·날짜",
  "front": "날짜 차이",
  "key": "(끝 − 시작).dt.days",
  "back": "두 datetime 컬럼 차 → Timedelta / ★.dt.days★ 로 일수 / 스칼라 Timedelta 는 ★.days★ / 윤년 2월(2024) 29일 주의",
  "tip": "시간 단위: .dt.total_seconds() / 3600"
 },
 {
  "s": "s2",
  "g": "정렬·순위",
  "front": "정렬",
  "key": "sort_values",
  "back": "★sort_values(c, ascending=False)★ 내림차순 / 복수 키 sort_values([a,b], ascending=[True,False]) / 정렬 후 위치 접근은 ★iloc★",
  "tip": "정렬 후 loc[0] 은 원래 라벨 0 행"
 },
 {
  "s": "s2",
  "g": "정렬·순위",
  "front": "n번째로 큰 값",
  "key": "nlargest(n).iloc[-1]",
  "back": "★s.nlargest(n).iloc[-1]★ = ★s.sort_values(ascending=False).iloc[n-1]★ / 상위 n개 합 nlargest(n).sum() / 하위 nsmallest(n)",
  "tip": "iloc[n] 으로 쓰면 n+1 번째"
 },
 {
  "s": "s2",
  "g": "정렬·순위",
  "front": "상위 N개 값 교체 패턴",
  "key": "N번째 값으로 대체",
  "back": "내림차순 정렬 → ★N번째 값 v = sorted.iloc[N-1]★ → 상위 N개 행의 값을 v 로 교체 → 이후 조건 필터·평균 / 교체는 ★원본 인덱스 기준★ df.loc[top.index, c] = v",
  "tip": "정렬본에만 바꾸고 원본 df 로 계산하면 미반영"
 },
 {
  "s": "s2",
  "g": "정렬·순위",
  "front": "rank 동점 처리",
  "key": "average · min · dense · first",
  "back": "기본 ★average★(평균 순위) / ★min★ 1,2,2,4 / ★dense★ 1,2,2,3 / first 등장순 / ascending=False 면 큰 값이 1위 / 결과는 float",
  "tip": "\"공동 순위 다음은 건너뜀\" = min, \"건너뛰지 않음\" = dense"
 },
 {
  "s": "s2",
  "g": "정렬·순위",
  "front": "앞부분 비율 슬라이스",
  "key": "head(int(len*0.7))",
  "back": "\"앞에서부터 70%\" → ★df.iloc[:int(len(df)*0.7)]★ 또는 head(int(len(df)*0.7)) / int 는 내림(버림)",
  "tip": "정렬 지시가 없으면 원래 순서 그대로"
 },
 {
  "s": "s2",
  "g": "통계량·출력",
  "front": "분산·표준편차 ddof",
  "key": "pandas 1 / numpy 0",
  "back": "pandas ★Series.var()/std() ddof=1★(표본) / numpy ★np.var/np.std ddof=0★(모집단) / 모분산 지시 → ★ddof=0★ / sklearn StandardScaler 도 ddof=0",
  "tip": "문제의 \"표본/모집단\" 단어 확인"
 },
 {
  "s": "s2",
  "g": "통계량·출력",
  "front": "왜도·첨도",
  "key": "skew · kurt",
  "back": "pandas ★skew()★ 왜도, ★kurt()★ 첨도 = ★초과첨도★(정규분포 0) / pandas 는 표본 보정값 → scipy.stats.skew·kurtosis 는 기본 bias=True 라 값이 다름(bias=False 로 일치)",
  "tip": "왜도 > 0 오른쪽 꼬리"
 },
 {
  "s": "s2",
  "g": "통계량·출력",
  "front": "분위수",
  "key": "quantile 선형보간",
  "back": "★quantile(q)★ 기본 interpolation='linear' / quantile(0.5) = median / 리스트 입력 quantile([.25,.75]) → Series",
  "tip": "[1,2,3,4] 의 Q1 = 1.75"
 },
 {
  "s": "s2",
  "g": "통계량·출력",
  "front": "반올림·정수 출력",
  "key": "round · int",
  "back": "★round(x, n)★ n자리 반올림 / 파이썬 round 는 ★은행원 반올림★(round(2.5)=2) / ★int()★ 는 버림(int(3.9)=3) / 소수 자리 고정 표기 f'{x:.2f}'",
  "tip": "\"정수로 출력\" → int(round(x)) 또는 지시대로"
 },
 {
  "s": "s2",
  "g": "통계량·출력",
  "front": "print 1줄 제출",
  "key": "값 1개 출력",
  "back": "작업형 1유형 답은 ★print()★ 로 값 1개 출력 / 지시된 자릿수·타입(정수/소수) 준수 / 부분점수 없음",
  "tip": "중간 확인용 print 는 제출 전 정리"
 },
 {
  "s": "s3",
  "g": "7단계 템플릿",
  "front": "작업형 제2유형의 문제 구조와 제출물은?",
  "key": "train(타깃 포함)으로 학습 / test(타깃 없음) 예측 → result.csv 제출",
  "back": "★1문항 40점★. train.csv = 피처+타깃, test.csv = 피처만. 예측값을 ★문제 지정 파일명·컬럼명★의 CSV로 저장.",
  "tip": "성능보다 ★제출 형식★이 먼저"
 },
 {
  "s": "s3",
  "g": "7단계 템플릿",
  "front": "제2유형 표준 풀이 7단계 순서는?",
  "key": "로드 → EDA → 전처리 → 검증분리 → 학습 → 평가 → 예측·CSV 저장",
  "back": "1 read_csv / 2 info·isnull·value_counts / 3 fillna·drop ID·인코딩 / 4 train_test_split / 5 fit / 6 지표 확인 / ★7 predict(test) → to_csv(index=False)★",
  "tip": "로·탐·전·분·학·평·제"
 },
 {
  "s": "s3",
  "g": "7단계 템플릿",
  "front": "test.csv 에서 X_test 를 만드는 올바른 방법은?",
  "key": "test.copy() 또는 ID만 drop (타깃 drop 금지)",
  "back": "test에는 ★타깃 컬럼이 없음★ → drop(columns=[target]) 하면 KeyError. ID 컬럼만 양쪽 동일하게 제거.",
  "tip": "test엔 정답이 없다"
 },
 {
  "s": "s3",
  "g": "7단계 템플릿",
  "front": "타깃 형태로 분류·회귀를 판단하는 기준은?",
  "key": "0/1·Yes/No → 이진분류 / 3개 이상 범주 → 다중분류 / 연속 실수 → 회귀",
  "back": "EDA에서 분류는 ★value_counts()★, 회귀는 ★describe()★로 타깃 확인. 숫자라도 등급(1~5)처럼 이산 범주면 분류.",
  "tip": "문제 지표가 RMSE면 회귀, AUC·F1이면 분류"
 },
 {
  "s": "s3",
  "g": "7단계 템플릿",
  "front": "검증 분리 후 최종 제출 전 권장 동작은?",
  "key": "전체 train(X_train, y_train)으로 재학습 후 test 예측",
  "back": "검증셋(X_val)은 ★성능 가늠용★. 확인이 끝나면 ★model.fit(X_train, y_train)★으로 데이터 100% 활용.",
  "tip": "검증은 리허설, 제출은 본공연"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "train·test 결합 전처리의 목적과 코드는?",
  "key": "인코딩 값 정합 / pd.concat([X_train, X_test]) → 처리 → iloc[:n_train] 분리",
  "back": "X_all = pd.concat([...]).reset_index(drop=True), n_train = len(X_train). ★같은 범주 = 같은 정수★ 보장, unseen category 오류 방지.",
  "tip": "합쳤다가 n_train 경계로 다시 자르기"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "get_dummies 를 train·test 따로 적용했을 때 필수 후처리는?",
  "key": "X_test = X_test.reindex(columns=X_train.columns, fill_value=0)",
  "back": "범주 구성이 다르면 ★컬럼 수·순서 불일치★ → predict 오류(feature names mismatch). reindex로 ★train 기준 정렬·없는 컬럼 0·여분 컬럼 제거★.",
  "tip": "기준은 언제나 train 컬럼"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "LabelEncoder 를 train fit → test transform 할 때 위험은?",
  "key": "test에 처음 보는 범주 → ValueError(unseen labels)",
  "back": "해결: ★결합 후 fit_transform★ 또는 train 기준 매핑. 컬럼마다 ★새 LabelEncoder★ 생성(classes_ 섞임 방지).",
  "tip": "LabelEncoder는 본래 타깃용 — 피처는 OrdinalEncoder도 가능"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "수치형·범주형 결측 대체 기본 원칙은?",
  "key": "수치형 median(또는 mean) / 범주형 mode()[0] 또는 'Unknown'",
  "back": "로지스틱·SVM·KNN 등은 결측 시 ★Input X contains NaN★ 오류(RF는 sklearn 1.4+부터 NaN 허용하나 시험장 버전 [확인필요] → fillna가 안전). mode()는 Series 반환 → ★[0]★ 필수. 결측 의미가 '없음'이면 0 대체도 가능.",
  "tip": "중앙값은 이상치에 강함"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "범주형 컬럼 목록을 안전하게 뽑는 코드는?",
  "key": "X.select_dtypes(exclude='number').columns",
  "back": "pandas 3.0부터 문자열 기본 dtype이 ★str(StringDtype)★ → dtype=='object' 비교가 False가 될 수 있음. ★exclude='number'★는 2.x·3.x 공통 안전.",
  "tip": "시험장 pandas 버전은 [확인필요] — 버전 무관 코드 사용"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "스케일러 fit/transform 원칙은?",
  "key": "fit(또는 fit_transform)은 train만 / test는 transform만",
  "back": "test에 fit하면 ★데이터 누수(leakage)★. StandardScaler z=(x-μ)/σ, MinMaxScaler (x-min)/(max-min).",
  "tip": "트리 모델(RF·XGB)은 스케일링 불필요"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "ID 컬럼 처리 원칙은?",
  "key": "train·test 양쪽에서 동일하게 drop (제출에 필요하면 test ID 따로 보관)",
  "back": "식별자는 예측력 없음 → 과적합·컬럼 불일치 원인. drop(columns=drop_cols, errors='ignore'). ★ID를 제출해야 하면 test_id = test['id']★ 먼저 저장.",
  "tip": "지우기 전에 챙기기"
 },
 {
  "s": "s3",
  "g": "전처리·인코딩",
  "front": "날짜 문자열 컬럼의 처리법은?",
  "key": "pd.to_datetime → dt.year·month·hour·day_of_week 파생 → 원본 drop",
  "back": "문자열 그대로면 모델 입력 불가. ★파생변수로 쪼갠 뒤 원본 제거★.",
  "tip": "시간대(hour)가 수요 예측의 핵심 변수인 경우 많음"
 },
 {
  "s": "s3",
  "g": "모델 선택",
  "front": "제2유형 기본 추천 모델은?",
  "key": "RandomForestClassifier / RandomForestRegressor (n_estimators=100~300, random_state=42)",
  "back": "스케일링 불필요·결측 외 전처리 부담 적음·기본값 성능 무난. ★분류=Classifier, 회귀=Regressor★ 혼동 금지.",
  "tip": "RF 먼저 제출 → 시간 남으면 개선"
 },
 {
  "s": "s3",
  "g": "모델 선택",
  "front": "회귀 문제에서 predict_proba 를 쓰면?",
  "key": "AttributeError — 회귀 모델엔 predict_proba 없음",
  "back": "회귀는 ★predict()★로 연속 수치 그대로 제출. 확률은 분류 전용.",
  "tip": "회귀 = predict 하나뿐"
 },
 {
  "s": "s3",
  "g": "모델 선택",
  "front": "SVC 로 predict_proba 를 쓰려면?",
  "key": "SVC(probability=True) 로 생성",
  "back": "기본 ★probability=False★ → predict_proba 사용 불가. 스케일링도 필수.",
  "tip": "SVM·KNN·로지스틱은 스케일링 필요"
 },
 {
  "s": "s3",
  "g": "모델 선택",
  "front": "XGBoost 사용 시 버전 주의점은?",
  "key": "use_label_encoder 인자 제거(xgboost 2.x) / 타깃은 0부터 정수",
  "back": "XGBClassifier(n_estimators, learning_rate, max_depth, eval_metric='logloss', random_state). 문자열 타깃은 ★LabelEncoder로 0..K-1 변환★ 후 inverse_transform. 시험장 설치 여부 [확인필요].",
  "tip": "모르면 sklearn RF로 충분"
 },
 {
  "s": "s3",
  "g": "평가지표",
  "front": "이진분류 ROC-AUC 계산 입력값은?",
  "key": "roc_auc_score(y_val, model.predict_proba(X_val)[:, 1])",
  "back": "predict_proba는 [P(0), P(1)] 2열 → ★[:,1] = 양성 확률★. predict(0/1)를 넣으면 AUC가 왜곡.",
  "tip": "AUC = 확률, Accuracy = 레이블"
 },
 {
  "s": "s3",
  "g": "평가지표",
  "front": "다중분류 F1 계산 코드는?",
  "key": "f1_score(y_val, pred, average='macro')",
  "back": "기본 average='binary'는 다중에서 ValueError. ★macro=클래스 단순평균★, weighted=support 가중, micro=전체 합산.",
  "tip": "문제에 macro F1이면 average='macro'"
 },
 {
  "s": "s3",
  "g": "평가지표",
  "front": "sklearn 1.6+ 에서 RMSE 계산법은?",
  "key": "root_mean_squared_error(y, p) 또는 np.sqrt(mean_squared_error(y, p))",
  "back": "mean_squared_error(..., ★squared=False★)는 1.4에서 deprecated, ★1.6에서 제거★ → TypeError. 버전 무관 안전식은 ★np.sqrt(MSE)★.",
  "tip": "외울 건 np.sqrt 하나"
 },
 {
  "s": "s3",
  "g": "평가지표",
  "front": "회귀 지표 R²·RMSE·MAE 의 좋은 방향은?",
  "key": "R² 1에 가까울수록 / RMSE·MAE 0에 가까울수록 좋음",
  "back": "R²는 ★음수 가능★(평균 예측보다 나쁨). RMSE는 큰 오차에 민감, MAE는 이상치에 덜 민감.",
  "tip": "R²만 '클수록', 오차 지표는 '작을수록'"
 },
 {
  "s": "s3",
  "g": "평가지표",
  "front": "문자열 타깃('Yes'/'No') 이진 F1 계산 시 필요한 인자는?",
  "key": "f1_score(y_val, pred, pos_label='Yes')",
  "back": "기본 pos_label=1 → 문자열 레이블이면 ValueError. 양성 클래스를 ★pos_label★로 지정.",
  "tip": "precision·recall도 동일"
 },
 {
  "s": "s3",
  "g": "튜닝·검증",
  "front": "train_test_split 표준 인자는?",
  "key": "test_size=0.2, random_state=42, stratify=y (분류만)",
  "back": "stratify=y → ★클래스 비율 유지★. 회귀 연속 타깃에 stratify 쓰면 오류(클래스당 표본 부족). random_state로 재현성.",
  "tip": "분류 = stratify, 회귀 = 빼기"
 },
 {
  "s": "s3",
  "g": "튜닝·검증",
  "front": "cross_val_score 회귀 RMSE scoring 문자열은?",
  "key": "'neg_root_mean_squared_error' (음수로 반환 → -scores.mean())",
  "back": "sklearn scorer는 ★클수록 좋게★ 통일 → 오차 지표는 neg_ 접두. 분류: 'accuracy','f1','f1_macro','roc_auc'.",
  "tip": "neg_ 붙으면 부호 뒤집어 읽기"
 },
 {
  "s": "s3",
  "g": "튜닝·검증",
  "front": "GridSearchCV 결과 속성 3가지는?",
  "key": "best_params_ / best_score_ / best_estimator_",
  "back": "gs = GridSearchCV(model, param_grid, cv=5, scoring=..., n_jobs=-1).fit(X, y). ★best_score_는 CV 평균 점수★.",
  "tip": "탐색은 시간 남을 때만"
 },
 {
  "s": "s3",
  "g": "튜닝·검증",
  "front": "RandomForest 주요 하이퍼파라미터는?",
  "key": "n_estimators / max_depth / min_samples_leaf / max_features / class_weight",
  "back": "트리 수↑ 안정, max_depth·min_samples_leaf로 ★과적합 제어★, 불균형 분류는 class_weight='balanced'.",
  "tip": "기본값 RF로도 무난"
 },
 {
  "s": "s3",
  "g": "제출 형식",
  "front": "제출 CSV 저장 표준 코드는?",
  "key": "pd.DataFrame({'pred': pred}).to_csv('result.csv', index=False)",
  "back": "to_csv 기본 ★index=True★ → 첫 열에 0,1,2… 행번호 삽입 = 형식 오류. 컬럼명·파일명은 ★문제 지시 문자열 그대로★.",
  "tip": "index=False 는 손이 먼저"
 },
 {
  "s": "s3",
  "g": "제출 형식",
  "front": "제출 직전 확인 4항목은?",
  "key": "파일명 / 컬럼명 / 행 수 == len(test) / index 열 없음 (+결측 없음)",
  "back": "chk = pd.read_csv('result.csv'); print(chk.shape, chk.columns.tolist(), chk.isnull().sum()). 확률 제출이면 값이 ★0~1★인지.",
  "tip": "다시 읽어서 눈으로 확인"
 },
 {
  "s": "s3",
  "g": "제출 형식",
  "front": "'확률' 요구 vs '여부·등급' 요구 시 제출값은?",
  "key": "확률 → predict_proba(X_test)[:,1] / 여부·등급 → predict(X_test)",
  "back": "평가지표가 ROC-AUC면 확률 제출이 유리·일반적. 문제 문장의 ★'확률'★ 단어가 결정 신호.",
  "tip": "문장에 '확률' 있으면 proba"
 },
 {
  "s": "s4",
  "g": "가설·판정",
  "front": "귀무가설 H₀ vs 대립가설 H₁",
  "key": "차이 없음 vs 연구자 주장",
  "back": "★H₀★ — 차이·효과·연관 없음(=, 독립, ρ=0, 계수=0) / ★H₁★ — 증명하려는 주장(≠, >, <) / p-value 는 ★H₀ 가 참이라는 가정★ 아래에서 계산",
  "tip": "'같다·없다·독립이다'가 들어간 쪽이 H₀"
 },
 {
  "s": "s4",
  "g": "가설·판정",
  "front": "p-value 판정 규칙",
  "key": "p < α → 기각",
  "back": "★p < α(0.05)★ → H₀ 기각, 통계적으로 유의 / ★p ≥ α★ → H₀ 기각 실패, 유의하지 않음 / 기각 실패 ≠ H₀ 참 증명(증거 부족일 뿐)",
  "tip": "답안 표기('기각'/'채택')는 문제 지시 문구를 그대로 따름"
 },
 {
  "s": "s4",
  "g": "가설·판정",
  "front": "양측·단측 alternative",
  "key": "'two-sided' / 'greater' / 'less'",
  "back": "★'two-sided'★ 기본값, H₁: ≠ / ★'greater'★ H₁: 첫 인자 > 둘째 인자(또는 popmean) / ★'less'★ H₁: 첫 인자 < 둘째 / ttest·mannwhitneyu·wilcoxon 공통",
  "tip": "'차이가 있는가' → 양측, '크다·감소했다·향상됐다' → 단측"
 },
 {
  "s": "s4",
  "g": "가설·판정",
  "front": "1종 오류 vs 2종 오류",
  "key": "α vs β",
  "back": "★1종 오류(α)★ — 참인 H₀ 를 기각 / ★2종 오류(β)★ — 거짓인 H₀ 를 기각하지 못함 / ★검정력 = 1−β★",
  "tip": "유의수준 α = 1종 오류 허용 상한"
 },
 {
  "s": "s4",
  "g": "가설·판정",
  "front": "검정 함수 반환값",
  "key": "대부분 (통계량, p)",
  "back": "ttest·levene·shapiro·f_oneway·chisquare·mannwhitneyu·wilcoxon·kruskal → ★(통계량, p)★ / pearsonr·spearmanr → ★(상관계수, p)★ / chi2_contingency → ★(χ², p, dof, expected) 4개★ / res.statistic · res.pvalue 속성도 가능",
  "tip": "p 를 먼저 받는 언패킹 실수 주의"
 },
 {
  "s": "s4",
  "g": "가설·판정",
  "front": "반올림·출력 형식",
  "key": "round(값, 4)",
  "back": "★round(x, 4)★ → 0.00004 는 0.0 / ★f\"{x:.4f}\"★ → '0.0000' 문자열 / 소문항별 print 분리 / 자릿수는 문제 지시 우선",
  "tip": "아주 작은 p 는 0.0 으로 찍혀도 '0 미만 반올림'일 뿐 — 기각 판정은 원래 값 기준"
 },
 {
  "s": "s4",
  "g": "정규성·등분산",
  "front": "Shapiro-Wilk 정규성 검정",
  "key": "stats.shapiro(x)",
  "back": "★H₀: 정규분포를 따른다★ / p ≥ 0.05 → 정규성 가정 유지 → 모수 검정 / p < 0.05 → 비모수 전환 / 대응표본은 ★차이 d★ 에 적용",
  "tip": "귀무가설 방향이 평균 검정과 반대 느낌 — 기각돼야 '비정규'"
 },
 {
  "s": "s4",
  "g": "정규성·등분산",
  "front": "levene vs bartlett",
  "key": "등분산 검정 2종",
  "back": "★levene★ — 기본 center='median', 정규성 이탈에 덜 민감 / ★bartlett★ — 정규성 가정, 이탈에 민감 / 공통 ★H₀: 모든 집단 분산 동일★ / 3집단 이상 가능",
  "tip": "문제에서 지정 없으면 levene 이 무난"
 },
 {
  "s": "s4",
  "g": "정규성·등분산",
  "front": "equal_var 결정",
  "key": "levene p 로 결정",
  "back": "levene ★p ≥ 0.05★ → equal_var=True (Student t) / ★p < 0.05★ → equal_var=False (Welch t) / ttest_ind 기본값 ★True★",
  "tip": "예: levene p=0.0166 → Welch → p 0.0084 (Student 면 0.0047)"
 },
 {
  "s": "s4",
  "g": "정규성·등분산",
  "front": "정규성 위반 시 비모수 대안",
  "key": "모수 ↔ 비모수 짝",
  "back": "1표본·대응 t → ★wilcoxon★ / 독립 t → ★mannwhitneyu★ / 일원 ANOVA → ★kruskal★ / 피어슨 → ★spearmanr★",
  "tip": "비모수 = 순위 기반, 중앙값·분포 위치 비교"
 },
 {
  "s": "s4",
  "g": "t검정",
  "front": "1표본 t검정",
  "key": "stats.ttest_1samp(x, popmean=μ₀)",
  "back": "표본 평균 vs 기준값 / ★H₀: μ = μ₀★ / 자유도 n−1 / t>0 → 표본평균 > μ₀",
  "tip": "인자명 popmean — mu 아님"
 },
 {
  "s": "s4",
  "g": "t검정",
  "front": "독립 2표본 t검정",
  "key": "stats.ttest_ind(a, b, equal_var=?)",
  "back": "서로 다른 두 집단 / ★H₀: μ₁ = μ₂★ / equal_var 는 levene 로 결정 / t 부호 = ★a 평균 − b 평균★ 방향",
  "tip": "DataFrame 통째가 아니라 1차원 Series 두 개"
 },
 {
  "s": "s4",
  "g": "t검정",
  "front": "대응표본 t검정",
  "key": "stats.ttest_rel(before, after)",
  "back": "같은 대상 전·후·짝 / ★H₀: 차이 평균 = 0★ / 두 배열 길이 같아야 함 / ★ttest_1samp(before−after, 0) 과 동일★ / 자유도 n−1",
  "tip": "독립 t 로 풀면 짝 정보 손실 — 예제에서 p 0.0035 → 0.4481 로 결론이 뒤집힘"
 },
 {
  "s": "s4",
  "g": "t검정",
  "front": "alternative 방향 = 인자 순서",
  "key": "'greater' → H₁: 첫 인자 > 둘째",
  "back": "'감소했다' → ★ttest_rel(before, after, alternative='greater')★ / 순서를 (after, before) 로 바꾸면 'less' / 순서·방향 둘 다 뒤집으면 같은 검정",
  "tip": "방향 틀리면 p 가 1−p/2 로 바뀌어 결론 반대"
 },
 {
  "s": "s4",
  "g": "분산분석",
  "front": "일원 분산분석 f_oneway",
  "key": "stats.f_oneway(a, b, c)",
  "back": "3집단 이상 평균 비교 / ★H₀: μ₁=μ₂=…=μk★ / ★H₁: 적어도 하나 다름★ / 집단을 각각 인자로, 리스트면 f_oneway(*groups)",
  "tip": "t검정 반복 금지 — 1종 오류 누적"
 },
 {
  "s": "s4",
  "g": "분산분석",
  "front": "ols + anova_lm 분산분석표",
  "key": "ols('y ~ C(g)', data=df).fit()",
  "back": "from statsmodels.stats.anova import anova_lm (= sm.stats.anova_lm) / 컬럼 ★df · sum_sq · mean_sq · F · PR(>F)★ / 값 꺼내기 ★table.loc['C(g)','PR(>F)']★ 또는 .iloc[0]",
  "tip": "pandas 3 에서 table['F'][0] 은 KeyError"
 },
 {
  "s": "s4",
  "g": "분산분석",
  "front": "C() 범주형 처리",
  "key": "숫자 코드 집단 → C(g) 필수",
  "back": "숫자(1·2·3) 코드 그대로 → ★회귀(기울기 1개, df=1)★ 로 오인 / ★C(g)★ → 더미 요인(df=k−1) / 문자열 컬럼은 C() 없어도 범주형이지만 명시가 안전",
  "tip": "변수명을 C 로 만들면 수식의 C() 와 충돌해 PatsyError"
 },
 {
  "s": "s4",
  "g": "분산분석",
  "front": "Tukey HSD 사후검정",
  "key": "pairwise_tukeyhsd(endog, groups, alpha)",
  "back": "from statsmodels.stats.multicomp import pairwise_tukeyhsd / ANOVA 기각 후 ★어느 쌍이 다른지★ / ★reject=True★ 쌍 = 유의 / p-adj = 다중비교 보정 p",
  "tip": "ANOVA 자체는 '어딘가 다르다'까지만"
 },
 {
  "s": "s4",
  "g": "분산분석",
  "front": "ANOVA 자유도·F",
  "key": "k−1 / N−k",
  "back": "집단간 df ★k−1★ / 집단내(잔차) df ★N−k★ / ★F = MS집단간 / MS집단내★ / MS = SS / df",
  "tip": "3집단×5명 → df (2, 12)"
 },
 {
  "s": "s4",
  "g": "카이제곱·비모수",
  "front": "카이제곱 독립성 검정",
  "key": "stats.chi2_contingency(ct)",
  "back": "입력 = ★pd.crosstab 교차표(빈도)★ / 반환 ★chi2, p, dof, expected★ / ★H₀: 두 변수 독립★ / dof = (행−1)(열−1)",
  "tip": "기각 → '독립 아님 = 연관 있음'"
 },
 {
  "s": "s4",
  "g": "카이제곱·비모수",
  "front": "correction (Yates 보정)",
  "key": "기본 True, dof=1 에만 적용",
  "back": "★2×2 표(dof=1)★ 에서만 연속성 보정 / 예 [[30,20],[15,35]] → 기본 7.9192, ★correction=False★ 9.0909 / 2×3 이상은 결과 동일",
  "tip": "문제가 '보정 없이'라 하면 correction=False"
 },
 {
  "s": "s4",
  "g": "카이제곱·비모수",
  "front": "카이제곱 적합도 검정",
  "key": "stats.chisquare(f_obs, f_exp)",
  "back": "관측빈도 vs 이론(기대)빈도 / ★f_exp 생략 → 균등★ / ★H₀: 관측 분포 = 이론 분포★ / dof = 범주수−1 / f_obs 합과 f_exp 합 같아야 함",
  "tip": "비율이면 f_exp = 비율 × 총합"
 },
 {
  "s": "s4",
  "g": "카이제곱·비모수",
  "front": "Mann-Whitney U",
  "key": "stats.mannwhitneyu(x, y, alternative)",
  "back": "독립 2집단 비모수 / ★H₀: 두 분포 동일(위치 차이 없음)★ / 순위합 기반 / alternative 명시 권장",
  "tip": "대응표본엔 쓰지 않음 → wilcoxon"
 },
 {
  "s": "s4",
  "g": "카이제곱·비모수",
  "front": "Wilcoxon 부호순위",
  "key": "stats.wilcoxon(x, y) 또는 wilcoxon(d)",
  "back": "대응표본·1표본 비모수 / ★H₀: 차이 중앙값 = 0★ / 양측 통계량 = ★min(W+, W−)★, 단측은 W+ / 1표본 기준값 μ₀ → wilcoxon(x − μ₀)",
  "tip": "예제: 양측 W=1.0, 'greater' W=35.0 — 통계량 정의가 달라짐"
 },
 {
  "s": "s4",
  "g": "카이제곱·비모수",
  "front": "Kruskal-Wallis",
  "key": "stats.kruskal(a, b, c)",
  "back": "3집단 이상 비모수 (ANOVA 대안) / ★H 통계량★ / H₀: 모든 집단 분포 동일",
  "tip": "사후 비교는 집단쌍 mannwhitneyu + 보정 [확인필요: 출제 범위]"
 },
 {
  "s": "s4",
  "g": "상관·회귀",
  "front": "pearsonr vs spearmanr",
  "key": "선형·정규 vs 순위·단조",
  "back": "★pearsonr★ — 선형 상관, 정규성 가정 / ★spearmanr★ — 순위 상관, 비정규·서열 / 반환 ★(r, p)★ / ★H₀: ρ = 0★",
  "tip": "|r| ≥ 0.7 강함 · 0.4~0.7 중간 · 0.2~0.4 약함 (관례)"
 },
 {
  "s": "s4",
  "g": "상관·회귀",
  "front": "OLS 결과 속성",
  "key": "params · pvalues · rsquared",
  "back": "★params★ 계수 / ★pvalues★ 계수 p(t검정) / tvalues / ★rsquared★ · rsquared_adj / ★fvalue · f_pvalue★ 모형 전체 / conf_int() / resid / ★predict(new_df)★",
  "tip": "변수명 키로 인덱싱: model.params['x1']"
 },
 {
  "s": "s4",
  "g": "상관·회귀",
  "front": "로지스틱 회귀·오즈비",
  "key": "logit('y ~ x', data=df).fit()",
  "back": "종속 0/1 / 계수 = 로그오즈 변화 / ★오즈비 = np.exp(model.params)★ / OR>1 증가, OR<1 감소 / k단위 증가 → np.exp(k×coef) / predict = ★확률★",
  "tip": "fit(disp=0) 으로 수렴 로그 숨김"
 },
 {
  "s": "s4",
  "g": "상관·회귀",
  "front": "로지스틱 이탈도·적합도",
  "key": "잔차이탈도 = −2·llf",
  "back": "★잔차이탈도 = −2 × model.llf★ / 영(null)이탈도 = −2 × model.llnull / ★AIC = −2·llf + 2·(모수 수)★ / prsquared = McFadden 의사 R² / GLM(Binomial) 은 .deviance 직접 제공",
  "tip": "Logit 결과 객체엔 .deviance 속성 없음 — llf 로 계산"
 },
 {
  "s": "s5",
  "g": "시간 배분",
  "front": "180분 시간 배분표",
  "key": "제1 40분 / 제2 80분 / 제3 40분 / 검토 20분",
  "back": "★제1유형★ 3문항 40분(문항당 약 13분, 상한 20분) / ★제2유형★ 1문항 80분 — 배점 최대(40점) / ★제3유형★ 2문항 40분(문항당 15~20분) / ★마지막 20분★ — 전체 재실행·제출 파일 확인·반올림 검수.",
  "tip": "합계 160분 + 여유 20분 = 180분"
 },
 {
  "s": "s5",
  "g": "시간 배분",
  "front": "막히면 넘어가기 규칙",
  "key": "문항당 15분 초과 → 부분 답 출력 후 이동",
  "back": "제1유형은 ★부분 점수 없음★(정확 일치해야 10점) → 한 문항에 매달리면 다른 문항까지 손실. 15분 초과 시 현재까지 결과 print 후 다음 문항, 남는 시간에 복귀.",
  "tip": "시간 상한을 미리 정해두고 지키기"
 },
 {
  "s": "s5",
  "g": "득점 전략",
  "front": "합격 전략 3원칙",
  "key": "제2 형식 / 제1 속도 / 제3 함수·해석",
  "back": "① ★제2유형★ — 제출 형식 정확성 우선(파일명·컬럼명·index=False) ② ★제1유형★ — 빠른 정답, 과도한 정교화 금지 ③ ★제3유형★ — 검정 함수 암기 + p-value 해석 서술 패턴 고정.",
  "tip": "형식 > 성능, 정답 > 정교함"
 },
 {
  "s": "s5",
  "g": "득점 전략",
  "front": "60점 합격 시나리오",
  "key": "제2 40 + 제1 30 = 70점 구조",
  "back": "00 개요 기준 ★제2유형 템플릿 암기(40점) + 제1유형 정답(30점) = 70점★ → 안정 합격. 제3유형(30점)은 함수 암기로 추가 확보 → 실수 흡수용 버퍼.",
  "tip": "제2유형 제출 실패 = 합격 시나리오 붕괴(최대 60점)"
 },
 {
  "s": "s5",
  "g": "득점 전략",
  "front": "제2유형 형식 3종 무결성",
  "key": "index=False · 컬럼명 · predict_proba",
  "back": "★index=False★ 누락 → 행번호 열 삽입 / ★컬럼명★ 'pred' vs 'prediction' 등 지시와 불일치 → 채점 인식 실패 / ★predict_proba[:,1]★ — 확률 요구 시 0/1 레이블 제출 금지.",
  "tip": "완벽한 RF보다 제출 가능한 LogisticRegression이 고득점"
 },
 {
  "s": "s5",
  "g": "출력·제출 형식",
  "front": "print() 명시 출력",
  "key": "변수만 쓰면 채점 화면 미표시",
  "back": "클라우드 IDE(구름 EXAM)는 ★print()로 명시 출력★해야 채점 인식. 셀 마지막 줄 변수 표시에 의존 금지 → print(round(result, 2)) 형태로 마무리.",
  "tip": "중간 검증 print는 제출 전 주석 처리 권장"
 },
 {
  "s": "s5",
  "g": "출력·제출 형식",
  "front": "round vs 정수 변환",
  "key": "round(x,n) 반올림 / int(x) 버림",
  "back": "round(3.14159, 2) → 3.14 / round(3.14159, 0) → 3.0(float) / round(3.14159) → 3(int) / ★int(3.9) → 3★(소수점 버림, 반올림 아님) / \"정수로 출력\" 지시 시 버림인지 반올림인지 지시 의미 확인.",
  "tip": "int(round(3.7)) → 4"
 },
 {
  "s": "s5",
  "g": "출력·제출 형식",
  "front": "round의 짝수 반올림",
  "key": "round(2.5)=2, round(3.5)=4",
  "back": "Python round는 ★짝수 쪽 반올림(banker's rounding)★ + 부동소수 표현 오차 → round(2.675, 2) = 2.67. 문제가 요구하는 자릿수 지시를 그대로 따르는 것이 원칙.",
  "tip": "경계값(…5)에서 결과가 예상과 다를 수 있음"
 },
 {
  "s": "s5",
  "g": "출력·제출 형식",
  "front": "제출 직전 확인 코드",
  "key": "read_csv로 재로딩 후 shape·columns·head",
  "back": "result = pd.read_csv('result.csv') → print(result.shape) (test 행 수 일치) / print(result.columns) (지시 컬럼명) / print(result.head()) (확률이면 0~1) / print(result.isnull().sum()) (결측 없음).",
  "tip": "len(result) == len(test) 확인"
 },
 {
  "s": "s5",
  "g": "빈출 함정",
  "front": "ddof — 표본 vs 모집단",
  "key": "pandas std ddof=1 / numpy·Scaler ddof=0",
  "back": "★pandas .std()·.var()★ 기본 ddof=1(표본) / ★np.std()★ 기본 ddof=0 / ★StandardScaler★ ddof=0 → 같은 데이터라도 표준화 값 미세 차이. [1,2,3,4] → pandas std 1.291 / np.std 1.118.",
  "tip": "문제 지시(표본/모집단) 확인 후 ddof 지정"
 },
 {
  "s": "s5",
  "g": "빈출 함정",
  "front": "fit은 train에만",
  "key": "fit_transform(train) → transform(test)",
  "back": "Scaler·Encoder를 test에 다시 fit → ★데이터 누수★ + 기준 불일치. LabelEncoder를 test에 새로 fit하면 클래스 번호가 달라짐. 안전책 — train·test concat 후 한 번에 인코딩.",
  "tip": "get_dummies는 reindex(columns=train.columns, fill_value=0)"
 },
 {
  "s": "s5",
  "g": "빈출 함정",
  "front": "단측/양측 판단",
  "key": "\"차이가 있는가\" 양측 / \"크다·작다\" 단측",
  "back": "scipy 검정 기본 alternative='two-sided'. \"A가 B보다 크다\" → alternative='greater', \"작다\" → 'less'. 방향 지정 안 하면 p-value 약 2배 차이 → 판정 뒤집힘 가능.",
  "tip": "help(stats.ttest_ind)로 alternative 옵션 확인"
 },
 {
  "s": "s5",
  "g": "빈출 함정",
  "front": "RMSE 버전 함정",
  "key": "squared=False 제거된 버전 존재",
  "back": "sklearn 신버전(1.6 이후)에선 mean_squared_error(..., squared=False) → ★TypeError★. ★np.sqrt(mean_squared_error(y, pred))★는 버전 무관 안전. 시험 환경 sklearn 버전 [확인필요].",
  "tip": "root_mean_squared_error는 신버전 전용"
 },
 {
  "s": "s5",
  "g": "암기 스니펫",
  "front": "help()·dir() 활용",
  "key": "인터넷 차단 → 내장 도움말로 인자 확인",
  "back": "help(stats.ttest_ind) — alternative 옵션 / help(mean_squared_error) — squared 존재 여부 / help(pd.read_csv) — encoding / print(dir(StandardScaler)) — 메서드 목록 / print(pd.read_csv.__doc__[:500]) — 앞부분만.",
  "tip": "Jupyter에선 stats.ttest_ind? 단축"
 },
 {
  "s": "s5",
  "g": "암기 스니펫",
  "front": "카이제곱 독립성 스니펫",
  "key": "crosstab → chi2_contingency → 4개 반환",
  "back": "ct = pd.crosstab(df['a'], df['b']) / chi2, p, dof, expected = stats.chi2_contingency(ct) — ★raw 데이터 전달 금지★(교차표 입력). 2×2 표는 기본 correction=True(Yates 보정) 적용.",
  "tip": "반환값 4개 언패킹 순서 암기"
 },
 {
  "s": "s5",
  "g": "득점 전략",
  "front": "제출 전 최종 점검",
  "key": "Restart & Run All → 오류 0 → 파일 존재",
  "back": "모든 셀 처음부터 재실행 / 오류 없이 전체 실행 / 제출 파일 존재 확인 / ★시간 잔여 20분 전 최종 제출★.",
  "tip": "중간 수정 후 재실행 안 하면 변수 상태 꼬임"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "시험 구성·환경 한눈에",
  "type": "table",
  "head": [
   "항목",
   "내용",
   "대비 포인트"
  ],
  "rows": [
   [
    "유형·배점",
    "제1유형 3×10=30 / 제2유형 1×40=40 / 제3유형 2×15=30",
    "제2유형 제출 형식이 합격 좌우"
   ],
   [
    "시간·합격",
    "180분 / 100점 만점 60점 이상",
    "권장 배분 40·80·40분 + 검토 20분"
   ],
   [
    "환경",
    "클라우드 웹 IDE(구름 EXAM)",
    "로컬 파일·자료 반입 불가"
   ],
   [
    "제약",
    "인터넷 차단 / 패키지 설치 불가 / 자동완성 미흡",
    "함수·인자 암기"
   ],
   [
    "참고 수단",
    "help(함수) / dir(객체) / 함수.__doc__",
    "help(pd.read_csv) 로 인자 확인"
   ],
   [
    "출력",
    "print()로 명시 출력 / 반올림 지시 준수",
    "변수만 쓰면 값 미표시 위험"
   ],
   [
    "제출",
    "제2유형 CSV 파일 저장",
    "to_csv(파일명, index=False)"
   ],
   [
    "언어",
    "Python 또는 R 선택",
    "한 언어로 통일 권장"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "pandas 핵심 문법 치트시트",
  "type": "table",
  "head": [
   "목적",
   "코드",
   "주의"
  ],
  "rows": [
   [
    "생성",
    "pd.DataFrame({'a':[1,2]})",
    "dict 키 = 컬럼명"
   ],
   [
    "읽기",
    "pd.read_csv(path, encoding='cp949')",
    "한글 깨짐 시 인코딩"
   ],
   [
    "탐색",
    "df.shape / df.info() / df.describe()",
    "shape·dtypes는 괄호 없음"
   ],
   [
    "빈도",
    "df['c'].value_counts(normalize=True)",
    "기본 빈도 내림차순"
   ],
   [
    "라벨 선택",
    "df.loc[0:2, 'a':'c']",
    "끝 라벨 포함"
   ],
   [
    "위치 선택",
    "df.iloc[0:2, 0:2]",
    "끝 위치 미포함"
   ],
   [
    "조건",
    "df[(df.a>1) & (df.b=='x')]",
    "& | ~ + 괄호"
   ],
   [
    "정렬",
    "df.sort_values(['a','b'], ascending=[True,False])",
    "기본 오름차순"
   ],
   [
    "집계",
    "df.groupby('k')['v'].agg(['mean','max'])",
    "키가 인덱스 → reset_index"
   ],
   [
    "행 수 유지",
    "df.groupby('k')['v'].transform('mean')",
    "원본 길이 반환"
   ],
   [
    "결합",
    "pd.merge(a, b, on='id', how='left')",
    "기본 inner"
   ],
   [
    "연결",
    "pd.concat([a, b], ignore_index=True)",
    "기본 axis=0"
   ],
   [
    "문자열",
    "df['c'].str.contains('x', na=False)",
    ".str 접근자"
   ],
   [
    "날짜",
    "pd.to_datetime(df['d']).dt.month",
    "변환 먼저"
   ],
   [
    "저장",
    "df.to_csv('result.csv', index=False)",
    "index=False 필수"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "NumPy 핵심 함수",
  "type": "table",
  "head": [
   "분류",
   "함수",
   "결과·주의"
  ],
  "rows": [
   [
    "생성",
    "np.arange(0, 10, 3)",
    "[0 3 6 9] — stop 미포함"
   ],
   [
    "생성",
    "np.linspace(0, 1, 5)",
    "0, 0.25, 0.5, 0.75, 1 — 끝 포함"
   ],
   [
    "생성",
    "np.zeros((3,4)) / np.ones / np.full",
    "기본 dtype float64"
   ],
   [
    "형태",
    "arr.reshape(-1, 2)",
    "-1 = 자동 계산"
   ],
   [
    "형태",
    "arr.flatten() / arr.T",
    "1차원 펼치기 / 전치"
   ],
   [
    "정보",
    "arr.shape / ndim / size / dtype",
    "모두 속성"
   ],
   [
    "통계",
    "np.mean / np.std / np.percentile(arr, 75)",
    "np.std 기본 ddof=0"
   ],
   [
    "축",
    "np.sum(arr, axis=0)",
    "axis=0 열별, axis=1 행별"
   ],
   [
    "조건",
    "np.where(cond, a, b)",
    "벡터화 if-else"
   ],
   [
    "결측",
    "np.nanmean / np.isnan",
    "np.mean은 NaN 있으면 nan"
   ],
   [
    "고유값",
    "np.unique(arr, return_counts=True)",
    "정렬된 고유값 + 빈도"
   ],
   [
    "위치",
    "np.argmax / np.argmin",
    "최대·최소 위치 인덱스"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 결측치 처리 함수 한눈에",
  "type": "table",
  "head": [
   "목적",
   "코드",
   "주의"
  ],
  "rows": [
   [
    "컬럼별 결측 수",
    "df.isnull().sum()",
    "isna() 동일"
   ],
   [
    "결측 비율",
    "df.isnull().mean()",
    "sum()/len(df) 와 동일"
   ],
   [
    "평균 대체",
    "df[c] = df[c].fillna(df[c].mean())",
    "★재할당★"
   ],
   [
    "중앙값 대체",
    "df[c] = df[c].fillna(df[c].median())",
    "이상치에 강건"
   ],
   [
    "최빈값 대체",
    "df[c] = df[c].fillna(df[c].mode()[0])",
    "★[0] 필수★"
   ],
   [
    "그룹 평균 대체",
    "df[c].fillna(df.groupby(g)[c].transform('mean'))",
    "transform = 원본 길이"
   ],
   [
    "앞값/뒷값",
    "s.ffill() / s.bfill()",
    "method= 인자 사용 X"
   ],
   [
    "행 제거",
    "df.dropna(subset=[c])",
    "thresh=n 유효값 기준"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 이상치·스케일링 수식",
  "type": "table",
  "head": [
   "기법",
   "수식",
   "pandas 코드",
   "비고"
  ],
  "rows": [
   [
    "IQR 경계",
    "Q1−1.5·IQR ~ Q3+1.5·IQR",
    "q1,q3 = s.quantile([.25,.75])",
    "IQR = Q3−Q1"
   ],
   [
    "Z-score",
    "(x−μ)/σ",
    "(s-s.mean())/s.std()",
    "|z|>3 관례 · ddof 주의"
   ],
   [
    "상하한 대체",
    "경계 밖 → 경계값",
    "s.clip(lo, up)",
    "행 수 유지"
   ],
   [
    "Min-Max",
    "(x−min)/(max−min)",
    "(s-s.min())/(s.max()-s.min())",
    "MinMaxScaler 동일"
   ],
   [
    "표준화(sklearn)",
    "(x−μ)/σ, σ ddof=0",
    "StandardScaler().fit_transform(df[[c]])",
    "2차원 입력"
   ],
   [
    "로그 변환",
    "log(1+x)",
    "np.log1p(s)",
    "오른쪽 꼬리 완화"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 통계량 함수 기본값 비교 (ddof·bias)",
  "type": "table",
  "head": [
   "함수",
   "기본값",
   "의미"
  ],
  "rows": [
   [
    "pandas s.var() / s.std()",
    "ddof=1",
    "표본 분산·표준편차"
   ],
   [
    "np.var / np.std (배열)",
    "ddof=0",
    "모분산·모표준편차"
   ],
   [
    "sklearn StandardScaler",
    "ddof=0",
    "모표준편차로 나눔"
   ],
   [
    "pandas s.skew()",
    "표본 보정",
    "scipy skew(bias=False) 와 같음"
   ],
   [
    "pandas s.kurt()",
    "초과첨도·표본 보정",
    "정규분포 ≈ 0"
   ],
   [
    "scipy.stats.skew / kurtosis",
    "bias=True",
    "pandas 값과 다름"
   ],
   [
    "s.quantile(q)",
    "interpolation='linear'",
    "선형 보간"
   ],
   [
    "s.rank()",
    "method='average', ascending=True",
    "동점 평균 순위"
   ]
  ]
 },
 {
  "s": "s2",
  "title": "★ 문제 문구 → 코드 매핑",
  "type": "table",
  "head": [
   "문제 문구",
   "코드",
   "함정"
  ],
  "rows": [
   [
    "~ 이상 / 초과",
    ">= / >",
    "경계 포함 여부"
   ],
   [
    "~ 이하 / 미만",
    "<= / <",
    "경계 포함 여부"
   ],
   [
    "n번째로 큰 값",
    "s.nlargest(n).iloc[-1]",
    "iloc[n] 은 n+1번째"
   ],
   [
    "가장 큰 그룹의 이름",
    "grp.idxmax()",
    "max() 는 값"
   ],
   [
    "앞에서 70%",
    "df.iloc[:int(len(df)*0.7)]",
    "정렬하지 않음"
   ],
   [
    "소수점 둘째 자리",
    "round(x, 2)",
    "은행원 반올림"
   ],
   [
    "정수로 출력",
    "int(x) 또는 int(round(x))",
    "int 는 버림"
   ],
   [
    "비율",
    "(조건).sum() / len(df)",
    "분모 = 전체 행 수"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "제2유형 7단계 템플릿",
  "type": "table",
  "head": [
   "단계",
   "작업",
   "핵심 코드",
   "주의"
  ],
  "rows": [
   [
    "1 로드",
    "train/test 읽기·타깃 분리",
    "pd.read_csv / train.drop(columns=[target])",
    "test엔 타깃 없음 → copy"
   ],
   [
    "2 EDA",
    "형태·결측·타깃 분포",
    "shape·info()·isnull().sum()·value_counts()",
    "회귀 타깃은 describe()"
   ],
   [
    "3 전처리",
    "ID 제거·결측·인코딩",
    "concat → fillna → LabelEncoder/get_dummies → iloc 분리",
    "train·test 동일 처리"
   ],
   [
    "4 검증 분리",
    "학습/검증 나누기",
    "train_test_split(test_size=0.2, random_state=42, stratify=y)",
    "회귀는 stratify 제거"
   ],
   [
    "5 학습",
    "모델 생성·fit",
    "RandomForestClassifier/Regressor(random_state=42).fit",
    "분류·회귀 모델 혼동 금지"
   ],
   [
    "6 평가",
    "검증 점수 확인",
    "roc_auc(proba[:,1]) / f1 / RMSE·R²",
    "squared=False 대신 np.sqrt"
   ],
   [
    "7 제출",
    "test 예측·CSV 저장",
    "pd.DataFrame({'pred': p}).to_csv('result.csv', index=False)",
    "컬럼명·행 수·파일명"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "분류 vs 회귀 차이",
  "type": "table",
  "head": [
   "항목",
   "분류",
   "회귀"
  ],
  "rows": [
   [
    "타깃",
    "0/1·Yes/No·등급(범주)",
    "연속 수치(가격·수요량)"
   ],
   [
    "모델",
    "RandomForestClassifier",
    "RandomForestRegressor"
   ],
   [
    "타깃 EDA",
    "value_counts()",
    "describe()"
   ],
   [
    "split",
    "stratify=y 유지",
    "stratify 제거"
   ],
   [
    "예측",
    "predict(레이블) / predict_proba[:,1](확률)",
    "predict(수치)"
   ],
   [
    "평가지표",
    "Accuracy·F1·ROC-AUC",
    "RMSE·MAE·R²"
   ],
   [
    "CV 분할",
    "StratifiedKFold",
    "KFold(shuffle=True)"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "평가지표 코드 맵",
  "type": "table",
  "head": [
   "지표",
   "코드",
   "입력값",
   "좋은 방향"
  ],
  "rows": [
   [
    "Accuracy",
    "accuracy_score(y, pred)",
    "predict 레이블",
    "클수록"
   ],
   [
    "F1(이진)",
    "f1_score(y, pred)",
    "레이블 (문자열이면 pos_label)",
    "클수록"
   ],
   [
    "F1(다중)",
    "f1_score(y, pred, average='macro')",
    "레이블",
    "클수록"
   ],
   [
    "ROC-AUC(이진)",
    "roc_auc_score(y, proba[:,1])",
    "양성 확률",
    "클수록 (0.5=무작위)"
   ],
   [
    "ROC-AUC(다중)",
    "roc_auc_score(y, proba, multi_class='ovr')",
    "확률 행렬 전체",
    "클수록"
   ],
   [
    "RMSE",
    "root_mean_squared_error(y, p) / np.sqrt(mean_squared_error(y, p))",
    "예측 수치",
    "작을수록"
   ],
   [
    "MAE",
    "mean_absolute_error(y, p)",
    "예측 수치",
    "작을수록"
   ],
   [
    "R²",
    "r2_score(y, p)",
    "예측 수치",
    "1에 가까울수록 (음수 가능)"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "자주 나는 오류와 해결",
  "type": "table",
  "head": [
   "오류 메시지",
   "원인",
   "해결"
  ],
  "rows": [
   [
    "could not convert string to float",
    "범주형 미인코딩",
    "LabelEncoder 또는 get_dummies"
   ],
   [
    "Input contains NaN",
    "결측 남음",
    "fillna 후 isnull().sum() 재확인"
   ],
   [
    "feature names / X has n features",
    "train·test 컬럼 불일치",
    "drop 양쪽 동일, reindex(columns=X_train.columns, fill_value=0)"
   ],
   [
    "KeyError: 타깃명",
    "test에서 타깃 drop",
    "test.copy() 또는 ID만 drop"
   ],
   [
    "y contains previously unseen labels",
    "LabelEncoder에 새 범주",
    "train·test 결합 후 fit_transform"
   ],
   [
    "unexpected keyword argument 'squared'",
    "sklearn 1.6+에서 squared 제거",
    "np.sqrt(mean_squared_error) 또는 root_mean_squared_error"
   ],
   [
    "predict_proba is not available",
    "SVC 기본 probability=False / 회귀 모델",
    "SVC(probability=True), 회귀는 predict"
   ],
   [
    "Target is multiclass but average='binary'",
    "다중분류 기본 average",
    "average='macro' 또는 'weighted'"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 검정 선택표 — 상황 → 함수 → 귀무가설",
  "type": "table",
  "head": [
   "상황",
   "함수",
   "귀무가설 H₀"
  ],
  "rows": [
   [
    "1표본 평균 vs 기준값",
    "ttest_1samp(x, popmean)",
    "μ = μ₀"
   ],
   [
    "독립 2집단 평균(등분산)",
    "ttest_ind(a, b)",
    "μ₁ = μ₂"
   ],
   [
    "독립 2집단 평균(이분산)",
    "ttest_ind(a, b, equal_var=False)",
    "μ₁ = μ₂"
   ],
   [
    "대응(전·후) 평균",
    "ttest_rel(before, after)",
    "차이 평균 = 0"
   ],
   [
    "3집단↑ 평균",
    "f_oneway / ols+anova_lm",
    "모든 평균 동일"
   ],
   [
    "ANOVA 후 쌍 비교",
    "pairwise_tukeyhsd",
    "각 쌍 평균 동일"
   ],
   [
    "정규성",
    "shapiro(x)",
    "정규분포 따름"
   ],
   [
    "등분산",
    "levene / bartlett",
    "분산 동일"
   ],
   [
    "독립 2집단 비모수",
    "mannwhitneyu(x, y)",
    "두 분포 동일"
   ],
   [
    "대응·1표본 비모수",
    "wilcoxon(x, y)",
    "차이 중앙값 = 0"
   ],
   [
    "3집단↑ 비모수",
    "kruskal(a, b, c)",
    "모든 분포 동일"
   ],
   [
    "범주 × 범주 연관",
    "chi2_contingency(crosstab)",
    "두 변수 독립"
   ],
   [
    "관측 vs 이론 빈도",
    "chisquare(f_obs, f_exp)",
    "이론 분포 따름"
   ],
   [
    "연속 × 연속 상관",
    "pearsonr / spearmanr",
    "ρ = 0"
   ],
   [
    "연속 종속 회귀",
    "ols('y ~ x1 + x2', data).fit()",
    "계수 = 0"
   ],
   [
    "이진 종속 회귀",
    "logit('y ~ x', data).fit()",
    "계수 = 0 (OR = 1)"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 반환값 언패킹·값 꺼내기",
  "type": "table",
  "head": [
   "함수",
   "반환",
   "꺼내는 코드"
  ],
  "rows": [
   [
    "ttest_1samp / ind / rel",
    "(t, p)",
    "t, p = stats.ttest_ind(a, b)"
   ],
   [
    "f_oneway",
    "(F, p)",
    "f, p = stats.f_oneway(a, b, c)"
   ],
   [
    "shapiro / levene / bartlett",
    "(통계량, p)",
    "w, p = stats.shapiro(x)"
   ],
   [
    "chisquare",
    "(χ², p)",
    "c2, p = stats.chisquare(obs, exp)"
   ],
   [
    "chi2_contingency",
    "(χ², p, dof, expected)",
    "c2, p, dof, ex = stats.chi2_contingency(ct)"
   ],
   [
    "pearsonr / spearmanr",
    "(r, p)",
    "r, p = stats.pearsonr(x, y)"
   ],
   [
    "mannwhitneyu / wilcoxon / kruskal",
    "(통계량, p)",
    "u, p = stats.mannwhitneyu(x, y)"
   ],
   [
    "anova_lm",
    "DataFrame",
    "table.loc['C(g)', 'PR(>F)']"
   ],
   [
    "pairwise_tukeyhsd",
    "결과 객체",
    "print(tk.summary()) → reject 열"
   ],
   [
    "ols / logit",
    "결과 객체",
    "model.params['x'] / model.pvalues['x']"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ 핵심 인자·기본값",
  "type": "table",
  "head": [
   "함수",
   "인자",
   "기본값",
   "주의"
  ],
  "rows": [
   [
    "ttest_ind",
    "equal_var",
    "True",
    "levene p<0.05 → False(Welch)"
   ],
   [
    "ttest 3종·mannwhitneyu·wilcoxon",
    "alternative",
    "'two-sided'",
    "'greater' = 첫 인자가 큼"
   ],
   [
    "ttest_1samp",
    "popmean",
    "필수",
    "기준값 μ₀"
   ],
   [
    "levene",
    "center",
    "'median'",
    "'mean' 이면 원래 Levene"
   ],
   [
    "chi2_contingency",
    "correction",
    "True",
    "dof=1(2×2)에만 Yates 적용"
   ],
   [
    "chisquare",
    "f_exp",
    "None(균등)",
    "합계를 f_obs 와 맞출 것"
   ],
   [
    "pairwise_tukeyhsd",
    "alpha",
    "0.05",
    "endog=값, groups=집단"
   ],
   [
    "anova_lm",
    "typ",
    "1",
    "일원은 typ 무관, 다원·불균형은 문제 지시"
   ],
   [
    "Logit.fit",
    "disp",
    "True(로그 출력)",
    "disp=0 으로 숨김"
   ]
  ]
 },
 {
  "s": "s4",
  "title": "★ statsmodels 결과 속성 — OLS vs Logit",
  "type": "table",
  "head": [
   "구하는 값",
   "OLS (ols)",
   "Logit (logit)"
  ],
  "rows": [
   [
    "회귀계수",
    "model.params",
    "model.params (로그오즈)"
   ],
   [
    "계수 p-value",
    "model.pvalues (t검정)",
    "model.pvalues (z검정)"
   ],
   [
    "검정통계량",
    "model.tvalues",
    "model.tvalues (z값)"
   ],
   [
    "설명력",
    "model.rsquared / rsquared_adj",
    "model.prsquared (McFadden)"
   ],
   [
    "모형 전체 유의성",
    "model.fvalue / f_pvalue",
    "model.llr / llr_pvalue"
   ],
   [
    "오즈비",
    "—",
    "np.exp(model.params)"
   ],
   [
    "로그우도",
    "model.llf",
    "model.llf / llnull"
   ],
   [
    "이탈도",
    "—",
    "−2 × model.llf (잔차) / −2 × llnull (영)"
   ],
   [
    "AIC",
    "model.aic",
    "model.aic"
   ],
   [
    "예측",
    "model.predict(new_df) → 값",
    "model.predict(new_df) → 확률"
   ],
   [
    "신뢰구간",
    "model.conf_int()",
    "model.conf_int()"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "유형별 배점·시간 배분",
  "type": "table",
  "head": [
   "유형",
   "내용",
   "문항·배점",
   "권장시간",
   "핵심 원칙"
  ],
  "rows": [
   [
    "제1유형",
    "데이터 전처리·변환",
    "3문항 × 10점 = 30점",
    "40분",
    "문항당 13분 목표·20분 상한, print 확인 후 이동"
   ],
   [
    "제2유형",
    "분류·회귀 모델 구축·CSV 제출",
    "1문항 × 40점",
    "80분",
    "제출 형식 오류 = 0점 유발 → 형식 최우선"
   ],
   [
    "제3유형",
    "통계 검정 + p-value 해석",
    "2문항 × 15점 = 30점",
    "40분",
    "문항당 15~20분, 함수 암기 시 10분 내"
   ],
   [
    "검토",
    "전체 재실행·제출 파일·반올림 검수",
    "—",
    "20분",
    "Restart & Run All, read_csv로 제출 파일 재확인"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "자주 틀리는 출력·제출 형식",
  "type": "table",
  "head": [
   "실수",
   "결과",
   "대처"
  ],
  "rows": [
   [
    "print() 없이 변수만 작성",
    "채점 화면에 값 미표시",
    "print(round(값, n)) 명시"
   ],
   [
    "반올림 미적용·자릿수 착오",
    "채점 기준 불일치",
    "문제 지시 자릿수로 round"
   ],
   [
    "\"정수로\"인데 float 출력",
    "3.0 형태로 출력",
    "int(result) 변환"
   ],
   [
    "to_csv index 기본값(True)",
    "첫 열에 0,1,2… 행번호 삽입",
    "index=False 명시"
   ],
   [
    "제출 컬럼명·파일명 오타",
    "채점 프로그램 인식 실패",
    "지시 문자열 그대로 복사(대소문자 구분)"
   ],
   [
    "확률 요구인데 predict",
    "0/1 레이블 제출",
    "predict_proba(X_test)[:,1]"
   ],
   [
    "전처리 중 test 행 탈락",
    "제출 행 수 불일치",
    "test에 dropna 금지, len(result)==len(test)"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "빈출 함정 요약 (06 §4 발췌)",
  "type": "table",
  "head": [
   "영역",
   "함정",
   "정답 대처"
  ],
  "rows": [
   [
    "결측",
    "mode() 그대로 대입",
    "mode()[0]로 스칼라 추출"
   ],
   [
    "결측",
    "fillna 결과 재할당 누락",
    "df['c'] = df['c'].fillna(…)"
   ],
   [
    "필터",
    "조건 괄호 누락",
    "(df['A']>1) & (df['B']<5)"
   ],
   [
    "스케일",
    "test에 fit",
    "train fit_transform / test transform"
   ],
   [
    "인코딩",
    "train/test 별도 LabelEncoder",
    "concat 후 일괄 인코딩 또는 reindex"
   ],
   [
    "모델",
    "ID 컬럼 학습 포함",
    "drop(columns=['id','target']), ID 별도 보관"
   ],
   [
    "평가",
    "RMSE 자리에 MSE",
    "np.sqrt(mean_squared_error(…))"
   ],
   [
    "검정",
    "단측/양측 혼동",
    "alternative='greater'/'less' 지정"
   ],
   [
    "검정",
    "chi2에 raw 데이터",
    "pd.crosstab 먼저"
   ],
   [
    "파일",
    "한글 인코딩 오류",
    "encoding='cp949' 또는 'euc-kr'"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "제3유형은 1문항 30점이다 — 아니다. 2문항 × 15점 = 30점"
 },
 {
  "s": "s1",
  "t": "제2유형은 여러 문항으로 나뉜다 — 아니다. 1문항 40점으로 단일 문항 최대 배점"
 },
 {
  "s": "s1",
  "t": "시험 중 인터넷 검색으로 문서를 볼 수 있다 — 아니다. 인터넷 차단, help()·dir()만 가능"
 },
 {
  "s": "s1",
  "t": "필요한 패키지는 pip install로 설치하면 된다 — 아니다. 제공된 패키지만 사용 가능"
 },
 {
  "s": "s1",
  "t": "마지막 줄에 변수만 쓰면 답이 채점된다 — 아니다. print()로 명시 출력해야 안전"
 },
 {
  "s": "s1",
  "t": "df.shape()로 행·열 수를 확인한다 — 아니다. shape는 속성이므로 괄호 없이 df.shape"
 },
 {
  "s": "s1",
  "t": "df.loc[0:2]와 df.iloc[0:2]는 같은 행을 반환한다 — 아니다. loc은 끝 라벨 포함(3행), iloc은 끝 미포함(2행)"
 },
 {
  "s": "s1",
  "t": "복수 조건에 and/or를 쓴다 — 아니다. & | ~ 를 쓰고 각 조건을 괄호로 감싼다(query 문자열 안에서만 and/or)"
 },
 {
  "s": "s1",
  "t": "df['a'] == np.nan 으로 결측을 찾는다 — 아니다. NaN != NaN 이라 항상 False, isnull()/isna() 사용"
 },
 {
  "s": "s1",
  "t": "Series.map(dict)은 사전에 없는 값을 그대로 둔다 — 아니다. 매핑 안 된 값은 NaN"
 },
 {
  "s": "s1",
  "t": "groupby count()와 size()는 같다 — 아니다. count는 NaN 제외, size는 NaN 포함 행 수"
 },
 {
  "s": "s1",
  "t": "pd.merge 기본값은 left join이다 — 아니다. 기본 how='inner'"
 },
 {
  "s": "s1",
  "t": "np.std와 Series.std는 같은 값을 준다 — 아니다. np.std ddof=0, pandas std ddof=1"
 },
 {
  "s": "s1",
  "t": "dt.dayofweek에서 0은 일요일이다 — 아니다. 0=월요일, 6=일요일"
 },
 {
  "s": "s2",
  "t": "df[c].fillna(값) 한 줄만 쓰면 원본이 바뀐다 — 아니다. 새 Series 반환, df[c] = df[c].fillna(값) 재할당 필요"
 },
 {
  "s": "s2",
  "t": "fillna(df[c].mode()) 로 최빈값 대체가 된다 — 아니다. mode() 는 Series, mode()[0] 으로 스칼라 추출"
 },
 {
  "s": "s2",
  "t": "결측치를 평균으로 대체하면 표준편차도 그대로다 — 아니다. 평균은 유지되지만 표준편차는 작아짐"
 },
 {
  "s": "s2",
  "t": "len(df) 와 df[c].count() 는 항상 같다 — 아니다. count() 는 결측 제외 개수"
 },
 {
  "s": "s2",
  "t": "IQR 경계는 Q1 ~ Q3 이다 — 아니다. Q1−1.5×IQR ~ Q3+1.5×IQR"
 },
 {
  "s": "s2",
  "t": "df[df[c] >= lo & df[c] <= up] 로 필터된다 — 아니다. & 우선순위 때문에 각 조건을 괄호로 묶어야 함"
 },
 {
  "s": "s2",
  "t": "이상치 제거 후 통계량도 원본 df 로 구한다 — 아니다. 제거된 새 DataFrame 기준으로 재계산"
 },
 {
  "s": "s2",
  "t": "clip 은 이상치 행을 제거한다 — 아니다. 경계값으로 대체, 행 수 유지"
 },
 {
  "s": "s2",
  "t": "pandas std() 와 StandardScaler 표준편차는 같다 — 아니다. pandas ddof=1, StandardScaler ddof=0"
 },
 {
  "s": "s2",
  "t": "scaler.fit_transform(df[c]) 로 한 컬럼 표준화가 된다 — 아니다. 2차원 df[[c]] 입력 필요"
 },
 {
  "s": "s2",
  "t": "Min-Max 분모는 표준편차다 — 아니다. max − min"
 },
 {
  "s": "s2",
  "t": "groupby 결과에서 가장 큰 그룹명은 max() 로 얻는다 — 아니다. max() 는 값, idxmax() 가 그룹명"
 },
 {
  "s": "s2",
  "t": "dt.dayofweek 는 0 이 일요일이다 — 아니다. 0=월요일, 5=토, 6=일"
 },
 {
  "s": "s2",
  "t": "3번째로 큰 값은 sort_values(ascending=False).iloc[3] 이다 — 아니다. iloc[2] 또는 nlargest(3).iloc[-1]"
 },
 {
  "s": "s2",
  "t": "정렬 후 .loc[0] 은 첫 번째 행이다 — 아니다. loc 은 라벨, 정렬 후 첫 행은 iloc[0]"
 },
 {
  "s": "s2",
  "t": "rank() 기본은 동점에 같은 최소 순위를 준다 — 아니다. 기본 method=average(평균 순위)"
 },
 {
  "s": "s2",
  "t": "pandas kurt() 는 정규분포에서 3 이다 — 아니다. 초과첨도라 정규분포 ≈ 0"
 },
 {
  "s": "s2",
  "t": "round(2.5) 는 3 이다 — 아니다. 파이썬은 은행원 반올림으로 2"
 },
 {
  "s": "s2",
  "t": "int(3.9) 는 4 다 — 아니다. int 는 소수점 버림으로 3"
 },
 {
  "s": "s2",
  "t": "\"정수로 출력\" 이면 15.0 출력도 정답이다 — 아니다. int() 로 15 형식 맞춤"
 },
 {
  "s": "s3",
  "t": "test.csv 에서도 타깃 컬럼을 drop 해야 한다 — 아니다. test엔 타깃이 없으므로 drop하면 KeyError, test.copy() 또는 ID만 제거"
 },
 {
  "s": "s3",
  "t": "to_csv('result.csv') 만 쓰면 충분하다 — 아니다. 기본 index=True라 행번호 열이 추가되므로 index=False 필수"
 },
 {
  "s": "s3",
  "t": "ROC-AUC 는 predict 결과(0/1)로 계산한다 — 아니다. predict_proba(X)[:,1] 양성 확률을 넣어야 정확"
 },
 {
  "s": "s3",
  "t": "RMSE 는 mean_squared_error(y, p, squared=False) 로 구하면 된다 — 아니다. squared는 sklearn 1.6에서 제거, np.sqrt(mean_squared_error) 또는 root_mean_squared_error 사용"
 },
 {
  "s": "s3",
  "t": "회귀에서도 train_test_split 에 stratify=y 를 넣는다 — 아니다. 연속 타깃은 층화 불가(오류), stratify는 분류 전용"
 },
 {
  "s": "s3",
  "t": "get_dummies 를 train·test 에 따로 쓰면 컬럼이 자동으로 맞는다 — 아니다. 범주 구성이 다르면 불일치, reindex(columns=X_train.columns, fill_value=0) 필요"
 },
 {
  "s": "s3",
  "t": "스케일러는 test 에도 fit_transform 한다 — 아니다. fit은 train만, test는 transform만 (데이터 누수 방지)"
 },
 {
  "s": "s3",
  "t": "RandomForest 도 스케일링을 꼭 해야 한다 — 아니다. 트리 기반은 스케일 영향 없음, 로지스틱·SVM·KNN에서 필요"
 },
 {
  "s": "s3",
  "t": "다중분류 f1_score 는 기본값으로 계산된다 — 아니다. 기본 average='binary'는 오류, average='macro'/'weighted' 지정"
 },
 {
  "s": "s3",
  "t": "회귀 모델도 predict_proba 로 확률을 낼 수 있다 — 아니다. 회귀는 predict만, predict_proba는 분류 전용"
 },
 {
  "s": "s3",
  "t": "제출 컬럼명은 대소문자가 달라도 된다 — 아니다. 'Pred'와 'pred'는 다른 컬럼, 문제 지시 문자열 그대로"
 },
 {
  "s": "s3",
  "t": "모델 성능을 끌어올리는 것이 제출 형식보다 우선이다 — 아니다. 형식이 틀리면 채점 자체가 불가, 형식 확보가 1순위"
 },
 {
  "s": "s3",
  "t": "LabelEncoder 를 train에 fit 하고 test 에 transform 하면 항상 안전하다 — 아니다. test에 새 범주가 있으면 ValueError, 결합 후 fit_transform 권장"
 },
 {
  "s": "s3",
  "t": "mode() 는 단일 값을 반환하므로 fillna(df[c].mode()) 로 충분하다 — 아니다. mode()는 Series 반환, mode()[0] 필요"
 },
 {
  "s": "s3",
  "t": "결측 확인은 train 만 하면 된다 — 아니다. test에도 결측이 있을 수 있어 결합 X_all 기준으로 처리·확인"
 },
 {
  "s": "s3",
  "t": "pandas 에서 문자열 컬럼은 항상 dtype == 'object' 로 판별된다 — 아니다. pandas 3.0부터 기본 str 타입, select_dtypes(exclude='number')가 안전"
 },
 {
  "s": "s3",
  "t": "검증용으로 쪼갠 X_tr 로 학습한 모델로 바로 제출해야 한다 — 아니다. 검증 후 전체 train으로 재학습하면 데이터를 모두 활용"
 },
 {
  "s": "s3",
  "t": "로그 변환한 타깃으로 학습했으면 예측값을 그대로 제출한다 — 아니다. np.expm1 등으로 원래 단위로 역변환 후 제출"
 },
 {
  "s": "s4",
  "t": "p ≥ 0.05 이면 귀무가설이 참으로 증명된다 — 아니다. '기각할 증거 부족(기각 실패)'일 뿐"
 },
 {
  "s": "s4",
  "t": "p-value 는 귀무가설이 참일 확률이다 — 아니다. H₀ 가 참일 때 관측값 이상 극단적 결과가 나올 확률"
 },
 {
  "s": "s4",
  "t": "'A가 B보다 큰지' 검정에 양측 p 를 그대로 쓴다 — 아니다. alternative='greater' (양측 p 의 절반, 방향 일치 시)"
 },
 {
  "s": "s4",
  "t": "양측 p/2 는 언제나 단측 p 다 — 아니다. t 부호가 H₁ 방향과 반대면 단측 p = 1 − p/2"
 },
 {
  "s": "s4",
  "t": "shapiro p < 0.05 면 정규분포를 따른다 — 아니다. H₀(정규성) 기각 → 비정규 → 비모수 검정"
 },
 {
  "s": "s4",
  "t": "levene p < 0.05 인데 equal_var=True 로 둔다 — 아니다. 이분산 → equal_var=False (Welch)"
 },
 {
  "s": "s4",
  "t": "ttest_ind 의 equal_var 기본값은 False 다 — 아니다. 기본값 True — 확인 없이 두면 Student t"
 },
 {
  "s": "s4",
  "t": "같은 사람의 전·후 비교에 ttest_ind 를 쓴다 — 아니다. ttest_rel (짝 정보 사용, 예제 p 0.0035 vs 0.4481)"
 },
 {
  "s": "s4",
  "t": "'감소했다' 검정에 ttest_rel(before, after, alternative='less') — 아니다. before > after 이므로 'greater'"
 },
 {
  "s": "s4",
  "t": "3집단 비교는 t검정 3번이면 된다 — 아니다. 1종 오류 누적 → f_oneway / anova_lm"
 },
 {
  "s": "s4",
  "t": "ANOVA 기각 = 모든 집단이 서로 다르다 — 아니다. 적어도 하나 다름 → 쌍은 Tukey HSD 로 확인"
 },
 {
  "s": "s4",
  "t": "숫자 코드(1·2·3) 집단을 ols('y ~ g') 로 넣어도 ANOVA 다 — 아니다. 회귀(df=1)로 처리 → C(g) 필수"
 },
 {
  "s": "s4",
  "t": "anova_lm 결과는 table['F'][0] 으로 꺼낸다 — 아니다. 인덱스가 문자열이라 pandas 3 에서 KeyError → .iloc[0] 또는 .loc['C(g)','F']"
 },
 {
  "s": "s4",
  "t": "chi2_contingency 에 df['a'], df['b'] 두 컬럼을 넣는다 — 아니다. pd.crosstab 교차표(빈도) 하나를 넣는다"
 },
 {
  "s": "s4",
  "t": "chi2, p = stats.chi2_contingency(ct) — 아니다. 반환 4개(chi2, p, dof, expected) 언패킹"
 },
 {
  "s": "s4",
  "t": "2×2 교차표 χ² 는 보정 여부와 무관하다 — 아니다. 기본 Yates 보정(7.9192) vs correction=False(9.0909)"
 },
 {
  "s": "s4",
  "t": "독립성 검정을 chisquare 로 한다 — 아니다. chisquare 는 적합도(관측 vs 이론), 독립성은 chi2_contingency"
 },
 {
  "s": "s4",
  "t": "pearsonr 은 (p, r) 순서로 반환한다 — 아니다. (r, p) — 상관계수가 먼저"
 },
 {
  "s": "s4",
  "t": "상관이 유의하면 인과관계다 — 아니다. 상관 ≠ 인과"
 },
 {
  "s": "s4",
  "t": "로지스틱 계수 0.3039 = 나이 1세당 확률 0.3039 증가 — 아니다. 로그오즈 증가, 오즈비 np.exp(0.3039)=1.3551배"
 },
 {
  "s": "s4",
  "t": "sm.OLS(y, X) 도 절편이 자동 포함된다 — 아니다. 행렬 API 는 sm.add_constant(X) 필요, formula ols 만 자동"
 },
 {
  "s": "s4",
  "t": "Logit 결과의 model.deviance 로 잔차이탈도를 구한다 — 아니다. Logit 은 −2 × model.llf (GLM 은 .deviance)"
 },
 {
  "s": "s5",
  "t": "제2유형은 모델 성능이 최우선이다 — 아니다. 제출 형식(파일명·컬럼명·index=False)이 채점기에 읽히는 것이 우선"
 },
 {
  "s": "s5",
  "t": "to_csv는 기본적으로 인덱스를 저장하지 않는다 — 아니다. 기본값 index=True → 행번호 열 삽입, index=False 명시"
 },
 {
  "s": "s5",
  "t": "셀 마지막 줄에 변수만 쓰면 채점된다 — 아니다. print()로 명시 출력해야 채점 인식"
 },
 {
  "s": "s5",
  "t": "int()는 반올림이다 — 아니다. int(3.9)=3, 소수점 버림(0 방향 절사)"
 },
 {
  "s": "s5",
  "t": "round(2.5)는 3이다 — 아니다. Python round는 짝수 쪽 반올림 → 2"
 },
 {
  "s": "s5",
  "t": "pandas std와 np.std는 같은 값이다 — 아니다. pandas ddof=1(표본), numpy 기본 ddof=0(모집단)"
 },
 {
  "s": "s5",
  "t": "StandardScaler 결과는 (x-mean)/df.std()와 같다 — 아니다. Scaler는 ddof=0 → 미세 차이"
 },
 {
  "s": "s5",
  "t": "test 데이터에도 scaler.fit_transform을 쓴다 — 아니다. test는 transform만, fit은 train에만(누수 방지)"
 },
 {
  "s": "s5",
  "t": "LabelEncoder는 train·test 각각 fit해도 된다 — 아니다. 클래스 번호 불일치, 동일 객체 또는 concat 후 일괄 인코딩"
 },
 {
  "s": "s5",
  "t": "get_dummies를 train·test 따로 하면 컬럼이 같다 — 아니다. 범주 차이로 컬럼 불일치, reindex(columns=train.columns, fill_value=0)"
 },
 {
  "s": "s5",
  "t": "ROC-AUC 평가 문제는 predict 결과를 제출한다 — 아니다. predict_proba(X_test)[:,1] 확률 제출"
 },
 {
  "s": "s5",
  "t": "mean_squared_error는 RMSE를 반환한다 — 아니다. 기본은 MSE, np.sqrt로 RMSE"
 },
 {
  "s": "s5",
  "t": "squared=False는 모든 sklearn 버전에서 동작한다 — 아니다. 신버전에선 제거되어 TypeError, np.sqrt 방식이 안전"
 },
 {
  "s": "s5",
  "t": "\"A가 B보다 크다\" 검정도 기본 양측으로 충분하다 — 아니다. alternative='greater' 단측 지정"
 },
 {
  "s": "s5",
  "t": "chi2_contingency에 두 컬럼 raw 데이터를 넣는다 — 아니다. pd.crosstab 교차표를 입력"
 },
 {
  "s": "s5",
  "t": "p-value ≥ 0.05면 귀무가설이 참으로 증명된다 — 아니다. 기각 실패(유의한 차이 없음)일 뿐"
 },
 {
  "s": "s5",
  "t": "mode()는 최빈값 스칼라를 반환한다 — 아니다. Series 반환 → mode()[0]"
 },
 {
  "s": "s5",
  "t": "df['c'].fillna(0)만 쓰면 원본이 바뀐다 — 아니다. 재할당 필요(pandas 3 CoW에선 chained inplace도 미반영)"
 },
 {
  "s": "s5",
  "t": "df[df['A']>1 & df['B']<5]도 정상 필터다 — 아니다. &가 비교보다 우선 → 각 조건 괄호 필수"
 },
 {
  "s": "s5",
  "t": "test에 dropna를 해도 제출에는 문제없다 — 아니다. 행 수가 줄어 제출 행 수 불일치, test는 대체(fillna)로 처리"
 },
 {
  "s": "s5",
  "t": "인터넷이 막혀 함수 인자를 확인할 방법이 없다 — 아니다. help(함수)·dir(객체)로 확인 가능"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "시험 구성·환경",
  "title": "실기 시험 구성·배점·코딩 환경",
  "ref": "00_시험개요_환경.txt §0~§1 / 06_빈출_함정_시간전략.txt §1",
  "body": [
   {
    "h": "시험 구성·배점",
    "tb": {
     "head": [
      "유형",
      "내용",
      "문항·배점",
      "권장 시간"
     ],
     "rows": [
      [
       "제1유형",
       "데이터 처리·전처리",
       "3문항 × 10점 = 30점",
       "40분"
      ],
      [
       "제2유형",
       "데이터 모형 구축·예측",
       "1문항 × 40점 = 40점",
       "80분"
      ],
      [
       "제3유형",
       "통계적 가설검정·분석",
       "2문항 × 15점 = 30점",
       "40분"
      ]
     ]
    }
   },
   {
    "h": "핵심 사실",
    "li": [
     "전부 컴퓨터 작업형 / 180분 / 100점 만점 ★60점 이상 합격★",
     "제3유형은 6회(2023) 시험부터 신설",
     "주관 한국데이터산업진흥원(KDATA), 원서접수 dataq.or.kr — 응시료·일정 등 변동 수치는 공지 확인 [확인필요]",
     "합격 전략: 제2유형 템플릿(40) + 제1유형 정답(30) = 70점 안정권"
    ]
   },
   {
    "h": "코딩 환경·제약",
    "li": [
     "클라우드 웹 IDE(구름 EXAM)에서 작성·제출 — 로컬 파일·자료 반입 불가",
     "★인터넷 차단★ / 외부 라이브러리 설치 불가(제공 패키지만)",
     "자동완성 미흡 → 함수·인자 암기 필수",
     "Python·R 중 선택, 한 언어로 통일 권장",
     "시험 환경 패키지 버전은 공지·화면으로 확인 [확인필요] — 버전 민감 문법(fillna(method=...) 등)은 피한다"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "시험 구성·환경",
  "title": "help·dir·print — 인터넷 없이 살아남기",
  "ref": "06_빈출_함정_시간전략.txt §4(함정 9·10·20)·§5",
  "body": [
   {
    "h": "help·dir 활용",
    "li": [
     "help(pd.read_csv) — 시그니처·파라미터 전체",
     "print(pd.read_csv.__doc__[:500]) — 앞부분만 짧게",
     "print(dir(df)) / dir(StandardScaler) — 메서드·속성 목록",
     "help(df.groupby) 처럼 메서드 단위로도 조회 가능",
     "Jupyter 계열이면 함수명? 도 가능 (환경에 따라 다름 [확인필요])"
    ]
   },
   {
    "h": "출력·제출 원칙",
    "li": [
     "제1·3유형: print(결과) 명시 — 변수만 쓰면 값 미표시 위험",
     "반올림 지시 준수: print(round(값, 4))",
     "제2유형: df.to_csv('파일명', index=False) — 파일명·컬럼명 지시 그대로",
     "파일 경로 오류(FileNotFoundError) → 지정 경로 복붙, os.getcwd() 확인",
     "주의: Python round()는 은행가 반올림 — round(2.5)=2, round(3.5)=4"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "DataFrame 기초",
  "title": "DataFrame 생성·읽기·탐색",
  "ref": "04_Pandas_Numpy_치트시트.txt §1~§2·실수 방지 박스",
  "body": [
   {
    "h": "생성·입출력",
    "li": [
     "pd.DataFrame({'a':[1,2,3], 'b':['x','y','z']}) — dict 키 = 컬럼",
     "pd.DataFrame([[1,'a'],[2,'b']], columns=['num','char'])",
     "pd.read_csv('f.csv', encoding='cp949') — 한글 UnicodeDecodeError 대응",
     "sep='\\t' / index_col='id' / header=None / usecols=[...] / nrows=100",
     "df.to_csv('result.csv', index=False) — 인덱스 열 제외"
    ]
   },
   {
    "h": "탐색 — 속성 vs 메서드",
    "tb": {
     "head": [
      "구분",
      "예",
      "반환"
     ],
     "rows": [
      [
       "속성(괄호 X)",
       "df.shape",
       "(행, 열) 튜플"
      ],
      [
       "속성(괄호 X)",
       "df.dtypes / df.columns / df.index",
       "타입 / 컬럼 Index / 인덱스"
      ],
      [
       "메서드",
       "df.info()",
       "컬럼·타입·결측 요약 출력"
      ],
      [
       "메서드",
       "df.describe()",
       "count·mean·std·min·25%·50%·75%·max"
      ],
      [
       "메서드",
       "df['c'].value_counts()",
       "빈도 내림차순"
      ],
      [
       "메서드",
       "df.nunique() / unique()",
       "고유값 개수(NaN 제외) / 배열"
      ]
     ]
    }
   },
   {
    "h": "변환",
    "li": [
     "astype(int/float/str) 타입 변환, pd.to_numeric(errors='coerce') 숫자 변환 실패 → NaN",
     "Series.map({'M':'남','F':'여'}) — 없는 키 → NaN",
     "Series.apply(lambda x: ...) / df.apply(f, axis=1) 행 단위",
     "rename(columns={'old':'new'}) / drop(columns=[...]) 또는 drop('c', axis=1)"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "인덱싱·필터",
  "title": "인덱싱·필터·정렬",
  "ref": "04_Pandas_Numpy_치트시트.txt §3·§6",
  "body": [
   {
    "h": "loc vs iloc",
    "tb": {
     "head": [
      "구분",
      "기준",
      "슬라이스 끝",
      "예"
     ],
     "rows": [
      [
       "loc",
       "라벨(이름)",
       "포함",
       "df.loc[0:2, 'a':'c']"
      ],
      [
       "iloc",
       "정수 위치",
       "미포함",
       "df.iloc[0:2, 0:2]"
      ]
     ]
    }
   },
   {
    "h": "조건 필터",
    "li": [
     "df[(df['age'] > 30) & (df['gender'] == 'M')] — 조건마다 괄호",
     "df[~df['city'].isin(['서울','부산'])] — NOT",
     "df[df['age'].between(20, 40)] — 양끝 포함",
     "df.query('score >= @th') — 외부 변수 @",
     "단일 컬럼 df['a'] → Series / 이중 대괄호 df[['a']] → DataFrame",
     "필터 결과 수정 시 .copy() — SettingWithCopyWarning 방지"
    ]
   },
   {
    "h": "정렬·순위",
    "li": [
     "sort_values('score', ascending=False) / 복수: sort_values(['dept','score'], ascending=[True, False])",
     "NaN은 기본 맨 뒤(na_position='last')",
     "rank() 기본 average(동점 평균), method='min'·'dense'",
     "nlargest(5, 'score') / nsmallest / idxmax()",
     "필터 후 reset_index(drop=True)"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "집계·결합",
  "title": "groupby·merge·concat 기초",
  "ref": "04_Pandas_Numpy_치트시트.txt §7~§8·실수 방지 박스 [8][9]",
  "body": [
   {
    "h": "groupby",
    "li": [
     "df.groupby('dept')['score'].mean() — dept가 인덱스",
     "reset_index() 또는 as_index=False 로 컬럼화",
     "agg(['mean','std','count']) / 이름 지정 agg(avg=('score','mean'))",
     "transform('mean') — 원본 행 수 유지",
     "count = NaN 제외 개수, size = NaN 포함 행 수",
     "pivot_table(values, index, columns, aggfunc, fill_value) / crosstab 빈도표"
    ]
   },
   {
    "h": "merge·concat",
    "tb": {
     "head": [
      "함수",
      "핵심 인자",
      "주의"
     ],
     "rows": [
      [
       "pd.merge",
       "on / how / left_on·right_on / suffixes",
       "기본 inner, 중복 컬럼 _x·_y"
      ],
      [
       "pd.concat",
       "axis / ignore_index / join",
       "기본 axis=0, 인덱스 중복 유지"
      ],
      [
       "df.join",
       "how / lsuffix·rsuffix",
       "인덱스 기준, 기본 left"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-6",
  "t": "NumPy",
  "title": "문자열·날짜·NumPy 기초",
  "ref": "04_Pandas_Numpy_치트시트.txt §9·§10·§12",
  "body": [
   {
    "h": "문자열 .str",
    "li": [
     "str.contains('김', na=False) / str.startswith / str.endswith",
     "str.replace('-', '') / str.strip() / str.upper() / str.len()",
     "str.split('-', expand=True) → 여러 컬럼 / str[0:4] 슬라이싱",
     "str.extract(r'(\\d+)') 정규식 첫 그룹 추출"
    ]
   },
   {
    "h": "날짜 .dt",
    "li": [
     "pd.to_datetime(df['d'], errors='coerce') — 실패 → NaT",
     "dt.year / month / day / hour / quarter / day_name()",
     "dt.dayofweek 0=월 ~ 6=일 (pandas 3에서는 day_of_week 권장 경고 — 둘 다 동작)",
     "(end - start).dt.days — 경과 일수 정수",
     "dt.strftime('%Y-%m') — 문자열 포맷",
     "resample 별칭은 버전별 차이('M'→'ME') — 시험 환경 확인 [확인필요]"
    ]
   },
   {
    "h": "NumPy",
    "li": [
     "np.arange(0, 10, 3) → [0 3 6 9] / np.linspace(0, 1, 5) 끝 포함",
     "reshape(-1, 2) / flatten() / T / shape·ndim·size·dtype",
     "np.sum(arr, axis=0) 열별, axis=1 행별",
     "np.where(cond, 참, 거짓) / np.unique(return_counts=True)",
     "np.std 기본 ddof=0 (pandas std는 ddof=1)",
     "np.mean은 NaN 있으면 nan → np.nanmean",
     "브로드캐스팅: (2,3) 배열 * (3,) 배열 → 각 행에 적용"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-1",
  "t": "통계량·출력",
  "title": "제1유형 개요와 풀이 루틴",
  "ref": "01_작업형1_데이터전처리.txt §0 · 기출예시_라인바이라인/작업형1_데이터전처리_예시.txt 마무리",
  "body": [
   {
    "h": "출제 형식",
    "li": [
     "★3문항 × 10점 = 30점★",
     "CSV 로드 → 전처리 → ★값 1개를 print()★",
     "부분점수 없음 → 자릿수·타입까지 정확히 일치",
     "실제 데이터는 수백~수천 행 — 코드 동선이 핵심"
    ]
   },
   {
    "h": "빈출 패턴 8",
    "tb": {
     "head": [
      "패턴",
      "예시 질문"
     ],
     "rows": [
      [
       "결측 처리 후 통계",
       "중앙값 대체 후 평균"
      ],
      [
       "이상치 제거 후 통계",
       "IQR 제거 후 Q3"
      ],
      [
       "조건 필터 + 집계",
       "그룹 필터 후 상위 n 합"
      ],
      [
       "정렬 + n번째",
       "상위 3번째 행 값"
      ],
      [
       "그룹 집계",
       "그룹 평균 중 최댓값"
      ],
      [
       "날짜 연산",
       "날짜 차이 일수 · 특정 월 건수"
      ],
      [
       "표준화 후 통계",
       "표준화 값 3번째 큰 값"
      ],
      [
       "파생 변수",
       "두 컬럼 연산 후 비율"
      ]
     ]
    }
   },
   {
    "h": "머릿속 루틴",
    "li": [
     "① read_csv → ② info()/isnull().sum()",
     "③ 결측·이상치 처리(재할당/새 변수)",
     "④ 변환·파생",
     "⑤ 필터·그룹·정렬 집계",
     "⑥ round/int 맞춰 print() 1줄"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-2",
  "t": "결측치",
  "title": "결측치 — 탐지·제거·대체",
  "ref": "01_작업형1_데이터전처리.txt §2 · 기출예시_라인바이라인/작업형1_데이터전처리_예시.txt 문제①",
  "body": [
   {
    "h": "탐지",
    "li": [
     "df.isnull().sum()  # 컬럼별 결측 수",
     "df.isnull().mean()  # 결측 비율",
     "df.isnull().mean().idxmax()  # 결측 비율 최대 컬럼"
    ]
   },
   {
    "h": "제거",
    "li": [
     "df.dropna()  # 결측 있는 행 전부",
     "df.dropna(subset=['A'])  # A 결측 행만",
     "df.dropna(thresh=3)  # 유효값 3개 미만 행 제거",
     "df.dropna(axis=1)  # 결측 있는 열 제거"
    ]
   },
   {
    "h": "대체",
    "li": [
     "df[c] = df[c].fillna(df[c].mean())",
     "df[c] = df[c].fillna(df[c].median())",
     "df[c] = df[c].fillna(df[c].mode()[0])  # ★[0]★",
     "df[c] = df[c].fillna(df.groupby(g)[c].transform('mean'))",
     "df[c] = df[c].ffill()  # 앞값 채우기"
    ]
   },
   {
    "h": "포인트",
    "li": [
     "통계량(mean·median)은 NaN 제외 계산",
     "★평균 대체 → 평균 유지, 표준편차 감소★",
     "대체 전·후 어느 시점 통계인지 문제 확인",
     "재할당이 버전 무관 안전(체인 inplace 지양)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-3",
  "t": "이상치",
  "title": "이상치 — IQR · Z-score · clip",
  "ref": "01_작업형1_데이터전처리.txt §3 · 기출예시_라인바이라인/작업형1_데이터전처리_예시.txt 문제②",
  "body": [
   {
    "h": "IQR",
    "li": [
     "q1 = df[c].quantile(0.25); q3 = df[c].quantile(0.75)",
     "iqr = q3 - q1",
     "lo, up = q1 - 1.5*iqr, q3 + 1.5*iqr",
     "df2 = df[(df[c] >= lo) & (df[c] <= up)]  # 제거",
     "n_out = ((df[c] < lo) | (df[c] > up)).sum()  # 개수"
    ]
   },
   {
    "h": "Z-score",
    "li": [
     "z = (df[c] - df[c].mean()) / df[c].std()",
     "df2 = df[z.abs() <= 3]",
     "관례 3, 문제 지정값 우선 · ddof 에 따라 z 달라짐"
    ]
   },
   {
    "h": "대체형",
    "li": [
     "df[c] = df[c].clip(lo, up)  # 경계값으로 대체",
     "제거 vs 대체 — 행 수 달라짐"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-4",
  "t": "스케일링",
  "title": "스케일링 — Min-Max · 표준화",
  "ref": "01_작업형1_데이터전처리.txt §4 · 기출예시_라인바이라인/작업형1_데이터전처리_예시.txt 문제⑤",
  "body": [
   {
    "h": "수식 직접",
    "li": [
     "mm = (s - s.min()) / (s.max() - s.min())",
     "z = (s - s.mean()) / s.std()  # ddof=1",
     "z0 = (s - s.mean()) / s.std(ddof=0)  # sklearn 과 동일"
    ]
   },
   {
    "h": "sklearn",
    "li": [
     "from sklearn.preprocessing import MinMaxScaler, StandardScaler",
     "df['mm'] = MinMaxScaler().fit_transform(df[['c']])",
     "df['z'] = StandardScaler().fit_transform(df[['c']])",
     "★입력 2차원 df[[c]]★ · 출력 numpy 2차원"
    ]
   },
   {
    "h": "비교",
    "tb": {
     "head": [
      "방식",
      "표준편차",
      "결과"
     ],
     "rows": [
      [
       "pandas 수식",
       "ddof=1",
       "|z| 약간 작음"
      ],
      [
       "StandardScaler",
       "ddof=0",
       "|z| 약간 큼"
      ],
      [
       "MinMax",
       "해당 없음",
       "0~1"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-5",
  "t": "집계·날짜",
  "title": "집계·그룹 — groupby · 필터 · 빈도",
  "ref": "01_작업형1_데이터전처리.txt §1·§6 · 기출예시_라인바이라인/작업형1_데이터전처리_예시.txt 문제③",
  "body": [
   {
    "h": "그룹 집계",
    "li": [
     "df.groupby('g')['v'].mean().max()  # 그룹 평균 중 최댓값",
     "df.groupby('g')['v'].sum().idxmax()  # 합계 최대 그룹명",
     "df.groupby('g').agg({'A':'sum','B':'mean'})",
     "df.groupby('g')['v'].transform('mean')  # 원본 길이"
    ]
   },
   {
    "h": "조건·빈도",
    "li": [
     "df[(df['a'] > 1) & (df['b'] == 'M')]",
     "df[df['c'].isin(['A','B'])]",
     "df['c'].value_counts()  # 내림차순 빈도",
     "df['c'].value_counts(normalize=True)  # 비율",
     "(df['v'] >= 80).sum()  # 조건 행 수"
    ]
   },
   {
    "h": "포인트",
    "li": [
     "필터 → 그룹 순서",
     "groupby 결과 인덱스 = 그룹명 → grp['Seoul']",
     "키 NaN 행 기본 제외(dropna=True)"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-6",
  "t": "집계·날짜",
  "title": "날짜 파생 — to_datetime · dt",
  "ref": "01_작업형1_데이터전처리.txt §5 · 기출예시_라인바이라인/작업형1_데이터전처리_예시.txt 문제④",
  "body": [
   {
    "h": "변환·추출",
    "li": [
     "df['d'] = pd.to_datetime(df['d'])",
     "df['d'].dt.year / .dt.month / .dt.day / .dt.hour",
     "df['d'].dt.quarter  # 분기",
     "df['d'].dt.dayofweek  # 0=월 … 6=일",
     "df['d'].dt.day_name()  # 'Monday'"
    ]
   },
   {
    "h": "차이·필터·집계",
    "li": [
     "(df['end'] - df['start']).dt.days",
     "df[df['d'] >= '2023-06-01']",
     "df[df['d'].dt.dayofweek >= 5]  # 주말",
     "df.groupby(df['d'].dt.month)['v'].sum()"
    ]
   },
   {
    "h": "함정",
    "li": [
     "변환 전 .dt → AttributeError",
     "2024년 2월 = 29일",
     "요일 0 = 월요일"
    ]
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-7",
  "t": "정렬·순위",
  "title": "정렬·순위 — 상위 N · n번째 · 교체",
  "ref": "01_작업형1_데이터전처리.txt §6·§7 패턴3·4",
  "body": [
   {
    "h": "정렬·상위",
    "li": [
     "df.sort_values('c', ascending=False).head(10)",
     "df['c'].nlargest(10).sum()  # 상위 10개 합",
     "df['c'].nlargest(3).iloc[-1]  # 3번째 큰 값",
     "df.sort_values('c', ascending=False).iloc[2]['name']"
    ]
   },
   {
    "h": "상위 N개 값 교체 패턴",
    "li": [
     "top = df['c'].sort_values(ascending=False)",
     "v = top.iloc[N-1]  # N번째 값",
     "df.loc[top.index[:N], 'c'] = v  # 원본 인덱스로 교체",
     "print(df[df['age'] >= 50]['c'].mean())"
    ]
   },
   {
    "h": "rank",
    "tb": {
     "head": [
      "method",
      "[10,20,20,30] 오름차순"
     ],
     "rows": [
      [
       "average(기본)",
       "1, 2.5, 2.5, 4"
      ],
      [
       "min",
       "1, 2, 2, 4"
      ],
      [
       "dense",
       "1, 2, 2, 3"
      ],
      [
       "first",
       "1, 2, 3, 4"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s2",
  "no": "2-8",
  "t": "통계량·출력",
  "title": "통계량·출력 형식 — ddof · 왜도·첨도 · 반올림",
  "ref": "01_작업형1_데이터전처리.txt §6·§8 · 04_Pandas_Numpy_치트시트.txt",
  "body": [
   {
    "h": "통계량",
    "li": [
     "s.var() / s.std()  # ddof=1",
     "s.var(ddof=0) / np.var(s.values)  # 모분산",
     "s.skew() / s.kurt()  # 왜도 / 초과첨도",
     "s.quantile(0.75)  # 선형보간",
     "df['a'].corr(df['b'])  # 피어슨 상관"
    ]
   },
   {
    "h": "출력 형식",
    "li": [
     "print(round(x, 2))  # 둘째 자리",
     "print(int(x))  # 버림 정수",
     "print(int(round(x)))  # 반올림 정수",
     "print(f'{x:.2f}')  # 자리 고정 표기",
     "★round 은행원 반올림★ round(2.5)=2"
    ]
   },
   {
    "h": "scipy 와의 차이",
    "li": [
     "scipy.stats.skew/kurtosis 기본 bias=True → pandas 와 다름",
     "bias=False 지정 시 pandas 값과 일치",
     "문제에서 지정한 라이브러리 사용"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "7단계 템플릿",
  "title": "제2유형 문제 구조와 분류·회귀 판단",
  "ref": "02_작업형2_머신러닝.txt §1 / 00_시험개요_환경.txt",
  "body": [
   {
    "h": "문제 구조",
    "li": [
     "1문항 40점 — 제1유형 30점·제3유형 30점과 함께 100점 만점 60점 합격",
     "train.csv = 피처 + 타깃 / test.csv = 피처만 (타깃 없음)",
     "목표: test 예측값을 문제가 지정한 파일명·컬럼명의 CSV로 저장",
     "클라우드 IDE(구름) · 인터넷 차단 · 제공 패키지만 · help()/dir() 로 인자 확인",
     "평가지표별 점수 구간(몇 점 이상 → 몇 점) 산정 기준 [확인필요 — 공식 공개 범위 확인]"
    ]
   },
   {
    "h": "타깃으로 유형 판단",
    "tb": {
     "head": [
      "타깃 형태",
      "유형",
      "대표 지표"
     ],
     "rows": [
      [
       "0/1, Yes/No",
       "이진분류",
       "ROC-AUC · F1 · Accuracy"
      ],
      [
       "3개 이상 범주(등급)",
       "다중분류",
       "macro F1 · Accuracy"
      ],
      [
       "연속 수치",
       "회귀",
       "RMSE · MAE · R²"
      ]
     ]
    }
   },
   {
    "h": "판단 팁",
    "li": [
     "분류 EDA: y.value_counts() — 클래스 수·불균형 확인",
     "회귀 EDA: y.describe() — 범위·왜도 확인",
     "문제 지표가 RMSE·MAE·R² → 회귀, AUC·F1 → 분류",
     "'확률' 요구 → predict_proba[:,1] / '여부·등급' 요구 → predict"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "7단계 템플릿",
  "title": "7단계 통합 템플릿 (분류 기준)",
  "ref": "02_작업형2_머신러닝.txt §3~§4 / 기출예시 작업형2 [공통]",
  "body": [
   {
    "h": "1~2단계 로드·EDA",
    "li": [
     "train = pd.read_csv('train.csv'); test = pd.read_csv('test.csv')",
     "X_train_raw = train.drop(columns=['id', target]); y = train[target]",
     "X_test_raw = test.drop(columns=['id'])  # 타깃 drop 금지",
     "print(train.shape, test.shape); print(train.isnull().sum()); print(y.value_counts())"
    ]
   },
   {
    "h": "3단계 결합 전처리",
    "li": [
     "X_all = pd.concat([X_train_raw, X_test_raw]).reset_index(drop=True); n_train = len(X_train_raw)",
     "수치형 fillna(median) / 범주형 fillna(mode()[0]) → LabelEncoder().fit_transform",
     "X_train = X_all.iloc[:n_train]; X_test = X_all.iloc[n_train:]"
    ]
   },
   {
    "h": "4~6단계 분리·학습·평가",
    "li": [
     "X_tr, X_val, y_tr, y_val = train_test_split(X_train, y, test_size=0.2, random_state=42, stratify=y)",
     "model = RandomForestClassifier(n_estimators=200, random_state=42, n_jobs=-1).fit(X_tr, y_tr)",
     "print(roc_auc_score(y_val, model.predict_proba(X_val)[:, 1]))"
    ]
   },
   {
    "h": "7단계 제출",
    "li": [
     "model.fit(X_train, y)  # 전체 train 재학습(권장)",
     "pd.DataFrame({'pred': model.predict_proba(X_test)[:, 1]}).to_csv('result.csv', index=False)",
     "★표시 부분(타깃명·제출 컬럼명·파일명·ID명)만 문제에 맞게 교체"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "전처리·인코딩",
  "title": "결측치 처리",
  "ref": "02_작업형2_머신러닝.txt §3 3단계 / 06_빈출_함정 §4 16·19",
  "body": [
   {
    "h": "기본 규칙",
    "li": [
     "수치형: median(이상치에 강함) 또는 mean",
     "범주형: mode()[0] 또는 'Unknown' 같은 새 범주",
     "결측 자체가 의미(환불 없음 등)면 0 대체 + 결측 여부 파생변수",
     "결측이 남으면 로지스틱·SVM·KNN 등은 fit에서 'Input X contains NaN' 오류 (RF는 sklearn 1.4+ NaN 허용 — 버전 불확실하므로 fillna 권장)"
    ]
   },
   {
    "h": "버전 무관 코드",
    "li": [
     "num_cols = X_all.select_dtypes(include='number').columns",
     "cat_cols = X_all.select_dtypes(exclude='number').columns",
     "for c in num_cols: X_all[c] = X_all[c].fillna(X_all[c].median())",
     "for c in cat_cols: X_all[c] = X_all[c].fillna(X_all[c].mode()[0])",
     "pandas 3.0+ 문자열 기본 dtype = str → dtype == 'object' 분기는 실패 가능(소스 템플릿 주의)"
    ]
   },
   {
    "h": "대안",
    "li": [
     "SimpleImputer(strategy='median' | 'mean' | 'most_frequent' | 'constant')",
     "imp.fit_transform(X_train) → imp.transform(X_test) (fit은 train만)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "전처리·인코딩",
  "title": "범주형 인코딩과 train·test 컬럼 정합",
  "ref": "02_작업형2_머신러닝.txt §7 / 05_Sklearn_Scipy_치트시트.txt §1",
  "body": [
   {
    "h": "3가지 방법 비교",
    "tb": {
     "head": [
      "방법",
      "코드",
      "장점",
      "주의"
     ],
     "rows": [
      [
       "A 결합 후 처리(권장)",
       "concat → LabelEncoder/get_dummies → iloc 분리",
       "값·컬럼 정합 보장",
       "n_train 경계 기억"
      ],
      [
       "B 따로 get_dummies",
       "get_dummies 각각 → reindex",
       "직관적",
       "reindex(columns=X_train.columns, fill_value=0) 필수"
      ],
      [
       "C train fit → test transform",
       "le.fit(train) → le.transform(test)",
       "누수 원칙에 충실",
       "test 새 범주 → ValueError"
      ]
     ]
    }
   },
   {
    "h": "코드 요령",
    "li": [
     "컬럼마다 새 LabelEncoder() — 하나를 재사용하면 classes_가 덮어써짐",
     "pd.get_dummies(X, columns=['col'], drop_first=True) — 선형모델 다중공선성 완화",
     "OneHotEncoder(handle_unknown='ignore', sparse_output=False) — sklearn 1.2+ 인자명 sparse_output",
     "문자열 타깃은 RF에서 그대로 사용 가능 / XGBoost는 0..K-1 정수로 변환"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "전처리·인코딩",
  "title": "스케일링과 데이터 누수",
  "ref": "02_작업형2_머신러닝.txt §8 / 05 치트시트 §9-3",
  "body": [
   {
    "h": "원칙",
    "li": [
     "scaler.fit_transform(X_train) → scaler.transform(X_val), scaler.transform(X_test)",
     "test에 fit하면 데이터 누수 — test 분포 정보가 학습에 섞임",
     "StandardScaler: z=(x-μ)/σ / MinMaxScaler: (x-min)/(max-min)"
    ]
   },
   {
    "h": "필요 여부",
    "tb": {
     "head": [
      "모델",
      "스케일링"
     ],
     "rows": [
      [
       "RandomForest · DecisionTree · XGBoost",
       "불필요(트리 분할은 순서만 사용)"
      ],
      [
       "LogisticRegression · SVM · KNN · 신경망",
       "필요"
      ],
      [
       "Ridge · Lasso",
       "권장(규제 강도가 스케일에 의존)"
      ]
     ]
    }
   },
   {
    "h": "누수의 다른 형태",
    "li": [
     "타깃과 직결된 컬럼(사후 정보·정답 복사본)을 피처로 사용",
     "ID·순번이 타깃과 우연히 상관 → 과적합"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "모델 선택",
  "title": "모델 선택과 하이퍼파라미터",
  "ref": "05_Sklearn_Scipy_치트시트.txt §2~§3 / 02 §10·부록",
  "body": [
   {
    "h": "분류 모델",
    "tb": {
     "head": [
      "모델",
      "주요 인자",
      "비고"
     ],
     "rows": [
      [
       "RandomForestClassifier",
       "n_estimators, max_depth, min_samples_leaf, class_weight",
       "기본 추천"
      ],
      [
       "LogisticRegression",
       "C, max_iter=1000",
       "스케일링 필요·빠름"
      ],
      [
       "SVC",
       "C, kernel='rbf', probability=True",
       "proba 쓰려면 probability=True"
      ],
      [
       "XGBClassifier",
       "n_estimators, learning_rate, max_depth, eval_metric",
       "use_label_encoder 제거(2.x), 설치 여부 [확인필요]"
      ]
     ]
    }
   },
   {
    "h": "회귀 모델",
    "tb": {
     "head": [
      "모델",
      "주요 인자",
      "비고"
     ],
     "rows": [
      [
       "RandomForestRegressor",
       "n_estimators, max_depth, min_samples_leaf",
       "기본 추천"
      ],
      [
       "LinearRegression",
       "(거의 없음)",
       "coef_, intercept_"
      ],
      [
       "Ridge / Lasso",
       "alpha (L2 / L1)",
       "Lasso는 변수 선택 효과"
      ],
      [
       "XGBRegressor",
       "n_estimators, learning_rate, max_depth",
       "부스팅"
      ]
     ]
    }
   },
   {
    "h": "튜닝 요령",
    "li": [
     "random_state=42 — 모델·split 모두 고정해 재현성 확보",
     "n_estimators 200~300 → 안정, max_depth·min_samples_leaf → 과적합 제어",
     "불균형 분류: class_weight='balanced', stratify=y",
     "회귀 타깃 왜도 큼: np.log1p(y)로 학습 → np.expm1(pred)로 역변환"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-7",
  "t": "평가지표",
  "title": "평가지표와 sklearn 버전 주의",
  "ref": "02_작업형2_머신러닝.txt §6 / 05 치트시트 §4~§5",
  "body": [
   {
    "h": "분류",
    "li": [
     "accuracy_score(y, pred) / f1_score(y, pred) — 이진 기본 average='binary', pos_label=1",
     "문자열 양성: f1_score(y, pred, pos_label='Yes')",
     "다중: f1_score(y, pred, average='macro') — macro=클래스 단순평균, weighted=support 가중",
     "roc_auc_score(y, model.predict_proba(X)[:, 1]) — 확률 입력",
     "다중 AUC: roc_auc_score(y, model.predict_proba(X), multi_class='ovr')",
     "confusion_matrix 이진 반환 [[TN, FP], [FN, TP]]"
    ]
   },
   {
    "h": "회귀",
    "li": [
     "MSE = mean_squared_error(y, p) / MAE = mean_absolute_error(y, p) / R² = r2_score(y, p)",
     "RMSE = np.sqrt(mean_squared_error(y, p)) — 모든 버전 안전",
     "root_mean_squared_error(y, p) — sklearn 1.4+",
     "mean_squared_error(..., squared=False) — 1.4 deprecated, 1.6 제거 → TypeError (소스 자료의 squared=False는 구버전 기준)"
    ]
   },
   {
    "h": "scoring 문자열(CV·GridSearch)",
    "li": [
     "'accuracy', 'f1', 'f1_macro', 'roc_auc', 'r2'",
     "'neg_root_mean_squared_error', 'neg_mean_absolute_error' — 음수 반환, 부호 반전해 해석"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-8",
  "t": "제출 형식",
  "title": "제출 형식 체크리스트와 교차검증",
  "ref": "02_작업형2_머신러닝.txt §9~§10 / 기출예시 작업형2 부록B / 06 §7",
  "body": [
   {
    "h": "제출 형식",
    "tb": {
     "head": [
      "항목",
      "올바른 처리"
     ],
     "rows": [
      [
       "index",
       "to_csv(..., index=False)"
      ],
      [
       "컬럼명",
       "문제 지시 문자열 그대로(대소문자·공백)"
      ],
      [
       "파일명",
       "문제 지정 이름·경로 그대로 (예 result.csv)"
      ],
      [
       "행 수",
       "len(result) == len(test) — 전처리 중 행 삭제 금지"
      ],
      [
       "값",
       "확률 요구 → 0~1 / 레이블 요구 → 원래 클래스 / 회귀 → 수치 그대로"
      ],
      [
       "ID 동반 제출",
       "test_id 먼저 보관 → DataFrame({'id': test_id, 'pred': p})"
      ]
     ]
    }
   },
   {
    "h": "최종 점검 코드",
    "li": [
     "chk = pd.read_csv('result.csv')",
     "print(chk.shape, chk.columns.tolist())",
     "print(chk.head()); print(chk.isnull().sum())"
    ]
   },
   {
    "h": "교차검증(시간 남을 때)",
    "li": [
     "cross_val_score(model, X, y, cv=5, scoring='roc_auc').mean()",
     "분류: StratifiedKFold(n_splits=5, shuffle=True, random_state=42)",
     "GridSearchCV(model, param_grid, cv=5, scoring=..., n_jobs=-1) → best_params_ · best_score_ · best_estimator_",
     "test 행을 dropna 등으로 지우면 행 수 불일치 — test는 채우기만"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-1",
  "t": "가설·판정",
  "title": "가설검정 기초 — 가설·p-value·단측/양측",
  "ref": "03_작업형3_통계검정.txt §1 · §9 / 기출예시 작업형3 부록 A",
  "body": [
   {
    "h": "핵심 용어",
    "tb": {
     "head": [
      "용어",
      "의미"
     ],
     "rows": [
      [
       "H₀ 귀무가설",
       "차이·효과·연관 없음 (=)"
      ],
      [
       "H₁ 대립가설",
       "증명하려는 주장 (≠, >, <)"
      ],
      [
       "α 유의수준",
       "1종 오류 허용 상한, 보통 0.05"
      ],
      [
       "p-value",
       "H₀ 참일 때 관측값 이상 극단 결과 확률"
      ],
      [
       "검정력",
       "1 − β (거짓 H₀ 를 기각할 확률)"
      ]
     ]
    }
   },
   {
    "h": "판정·서술",
    "li": [
     "★p < α★ → H₀ 기각 — '유의수준 0.05에서 유의한 차이(연관·영향)가 있다'",
     "★p ≥ α★ → H₀ 기각 실패 — '유의한 차이가 있다고 할 근거 부족' (H₀ 증명 아님)",
     "답안 표기 '기각/채택'은 문제가 요구한 문구 그대로"
    ]
   },
   {
    "h": "단측·양측",
    "li": [
     "alternative='two-sided'(기본) / 'greater' / 'less' — 첫 인자 기준 방향",
     "양측 p → 단측 변환: 방향 일치 시 p/2, 반대면 1 − p/2 — 가능하면 alternative 인자 사용"
    ]
   },
   {
    "h": "출력 규칙",
    "li": [
     "round(x, 4) 관례, 문제 지시 우선 / f\"{x:.4f}\" 는 '0.0000' 처럼 자리 고정",
     "소문항 (1)(2)(3) 별로 print 분리"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-2",
  "t": "정규성·등분산",
  "title": "정규성·등분산 사전검정",
  "ref": "03_작업형3_통계검정.txt §7-1 · §8 / 05_Sklearn_Scipy_치트시트.txt §7-1",
  "body": [
   {
    "h": "함수",
    "tb": {
     "head": [
      "검정",
      "함수",
      "H₀"
     ],
     "rows": [
      [
       "정규성",
       "stats.shapiro(x)",
       "정규분포 따름"
      ],
      [
       "등분산(강건)",
       "stats.levene(a, b, ...)",
       "분산 동일 (center='median' 기본)"
      ],
      [
       "등분산(정규 가정)",
       "stats.bartlett(a, b, ...)",
       "분산 동일"
      ]
     ]
    }
   },
   {
    "h": "흐름",
    "li": [
     "정규성 O → 등분산 O → Student t / 등분산 X → Welch t (equal_var=False)",
     "정규성 X → mannwhitneyu · wilcoxon · kruskal",
     "대응표본은 ★차이 d = before − after★ 에 shapiro",
     "n 큰 경우 shapiro 대신 kstest·anderson 권장 (자료 기준 n > 5,000)"
    ]
   },
   {
    "h": "예제 수치 (a=[82,75,90,68,85,79,88,73], b=[70,72,65,74,69,71,68,73])",
    "li": [
     "shapiro p: a 0.8867, b 0.9206 → 정규성 유지",
     "levene W=7.405, p=0.0166 → 이분산 / bartlett 5.3478, p=0.0207"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-3",
  "t": "t검정",
  "title": "t검정 3종 — 1표본·독립·대응",
  "ref": "03_작업형3_통계검정.txt §2 / 기출예시 작업형3 문제①②",
  "body": [
   {
    "h": "함수 비교",
    "tb": {
     "head": [
      "구분",
      "함수",
      "자유도"
     ],
     "rows": [
      [
       "1표본",
       "ttest_1samp(x, popmean=μ₀)",
       "n − 1"
      ],
      [
       "독립(Student)",
       "ttest_ind(a, b)",
       "n₁ + n₂ − 2"
      ],
      [
       "독립(Welch)",
       "ttest_ind(a, b, equal_var=False)",
       "Welch–Satterthwaite 근사"
      ],
      [
       "대응",
       "ttest_rel(before, after)",
       "쌍 수 − 1"
      ]
     ]
    }
   },
   {
    "h": "포인트",
    "li": [
     "t 부호 = 첫 인자 평균 − 둘째(또는 μ₀) 방향",
     "ttest_rel(b, a) ≡ ttest_1samp(b − a, 0)",
     "'감소' 검정 → ttest_rel(before, after, alternative='greater')",
     "결과 객체 res.statistic · res.pvalue · res.df 속성 사용 가능"
    ]
   },
   {
    "h": "검산 수치",
    "li": [
     "볼트 10개 vs 50 → t=3.2697, 양측 p=0.0097, greater 0.0048, less 0.9952",
     "전·후 8쌍 → t=4.3137, 양측 p=0.0035, greater 0.0018 / 잘못 ttest_ind 면 p=0.4481"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-4",
  "t": "분산분석",
  "title": "분산분석·사후검정",
  "ref": "03_작업형3_통계검정.txt §3 / 기출예시 작업형3 문제③ / 05_Sklearn_Scipy_치트시트.txt §8-4",
  "body": [
   {
    "h": "두 가지 방법",
    "li": [
     "scipy: f, p = stats.f_oneway(a, b, c)",
     "statsmodels: model = ols('y ~ C(g)', data=df).fit(); table = anova_lm(model)",
     "anova_lm import: from statsmodels.stats.anova import anova_lm (sm.stats.anova_lm 과 동일)"
    ]
   },
   {
    "h": "분산분석표 (A=[23,25,21,24,22], B=[28,30,27,29,31], C=[22,27,25,24,28])",
    "tb": {
     "head": [
      "요인",
      "df",
      "sum_sq",
      "mean_sq",
      "F",
      "PR(>F)"
     ],
     "rows": [
      [
       "C(method)",
       "2",
       "92.1333",
       "46.0667",
       "12.9159",
       "0.0010"
      ],
      [
       "Residual",
       "12",
       "42.8000",
       "3.5667",
       "NaN",
       "NaN"
      ]
     ]
    }
   },
   {
    "h": "사후검정 Tukey HSD",
    "li": [
     "pairwise_tukeyhsd(df['score'], df['method'], alpha=0.05).summary()",
     "A-B p-adj 0.0008 reject True / A-C 0.198 False / B-C 0.02 True",
     "reject=False ≠ 평균 같음 증명"
    ]
   },
   {
    "h": "함정",
    "li": [
     "숫자 코드 집단은 C(g) 필수 — 안 감싸면 df=1 회귀 (같은 자료 F=1.2806, p=0.2782 로 결론 반대)",
     "table['F'][0] → pandas 3 KeyError, .iloc[0] 사용"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-5",
  "t": "카이제곱·비모수",
  "title": "카이제곱 — 독립성·적합도",
  "ref": "03_작업형3_통계검정.txt §4 / 기출예시 작업형3 문제④",
  "body": [
   {
    "h": "구분",
    "tb": {
     "head": [
      "검정",
      "함수",
      "자유도"
     ],
     "rows": [
      [
       "독립성(범주×범주)",
       "chi2_contingency(pd.crosstab(...))",
       "(행−1)(열−1)"
      ],
      [
       "적합도(관측 vs 이론)",
       "chisquare(f_obs, f_exp)",
       "범주수 − 1"
      ],
      [
       "소표본 2×2",
       "fisher_exact(table)",
       "—"
      ]
     ]
    }
   },
   {
    "h": "correction",
    "li": [
     "기본 True — ★dof=1(2×2)일 때만★ Yates 연속성 보정",
     "[[30,20],[15,35]] → 보정 7.9192(p 0.0049) / correction=False 9.0909(p 0.0026)",
     "2×3 [[40,30,30],[20,35,45]] → 10.0513, p 0.0066, dof 2 (보정 무관)"
    ]
   },
   {
    "h": "주의",
    "li": [
     "입력은 빈도 교차표 — 비율·원본 컬럼 금지",
     "expected 에서 5 미만 셀 20% 초과 → fisher_exact 고려",
     "적합도: f_exp 생략 시 균등, 비율이면 비율×총합으로 기대빈도 작성"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-6",
  "t": "카이제곱·비모수",
  "title": "비모수 검정",
  "ref": "03_작업형3_통계검정.txt §7-2 · §7-3 / 05_Sklearn_Scipy_치트시트.txt §7-3",
  "body": [
   {
    "h": "모수 ↔ 비모수",
    "tb": {
     "head": [
      "모수",
      "비모수",
      "함수"
     ],
     "rows": [
      [
       "1표본 t",
       "Wilcoxon 부호순위",
       "wilcoxon(x − μ₀)"
      ],
      [
       "대응 t",
       "Wilcoxon 부호순위",
       "wilcoxon(before, after)"
      ],
      [
       "독립 t",
       "Mann-Whitney U",
       "mannwhitneyu(x, y)"
      ],
      [
       "일원 ANOVA",
       "Kruskal-Wallis",
       "kruskal(a, b, c)"
      ],
      [
       "피어슨",
       "스피어만",
       "spearmanr(x, y)"
      ]
     ]
    }
   },
   {
    "h": "검산 수치",
    "li": [
     "독립 a·b → mannwhitneyu U=56.0, p=0.0134",
     "전·후 8쌍 → wilcoxon 양측 W=1.0, p=0.0156 / 'greater' W=35.0, p=0.0078",
     "3집단 → kruskal H=9.298, p=0.0096"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-7",
  "t": "상관·회귀",
  "title": "상관·선형회귀 (statsmodels ols)",
  "ref": "03_작업형3_통계검정.txt §5 · §6-1 / 기출예시 작업형3 문제⑤ / 05_Sklearn_Scipy_치트시트.txt §8-1",
  "body": [
   {
    "h": "상관",
    "li": [
     "r, p = stats.pearsonr(x, y) / rho, p = stats.spearmanr(x, y)",
     "단순회귀 R² = r² (0.9079² ≈ 0.8242)"
    ]
   },
   {
    "h": "ols 속성",
    "tb": {
     "head": [
      "값",
      "코드"
     ],
     "rows": [
      [
       "계수",
       "model.params['x']"
      ],
      [
       "계수 p",
       "model.pvalues['x']"
      ],
      [
       "R² / 수정 R²",
       "model.rsquared / model.rsquared_adj"
      ],
      [
       "모형 F / p",
       "model.fvalue / model.f_pvalue"
      ],
      [
       "예측",
       "model.predict(pd.DataFrame({'x': [값]}))"
      ]
     ]
    }
   },
   {
    "h": "검산 (hours 2~11, score 10개)",
    "li": [
     "pearson r=0.9079, p=0.0003 / score = 48.7515 + 3.3152·hours",
     "R² 0.8242, 수정 R² 0.8022, F 37.5043 / hours=12 예측 88.5333"
    ]
   },
   {
    "h": "주의",
    "li": [
     "개별 계수 p(t검정) ≠ 모형 전체 f_pvalue(F검정)",
     "formula ols 는 절편 자동, sm.OLS 는 add_constant 필요",
     "계수 해석: 다른 변수 고정 시 x 1단위 증가당 y 변화량"
    ]
   }
  ]
 },
 {
  "s": "s4",
  "no": "4-8",
  "t": "상관·회귀",
  "title": "로지스틱 회귀 — 오즈비·이탈도",
  "ref": "03_작업형3_통계검정.txt §6-2 / 05_Sklearn_Scipy_치트시트.txt §8-3",
  "body": [
   {
    "h": "코드",
    "li": [
     "model = logit('buy ~ age', data=df).fit(disp=0)",
     "오즈비 np.exp(model.params) / 예측확률 model.predict(new_df)",
     "잔차이탈도 −2 * model.llf / 영이탈도 −2 * model.llnull / AIC model.aic"
    ]
   },
   {
    "h": "검산 (age 20명, buy 0/1)",
    "tb": {
     "head": [
      "항목",
      "값"
     ],
     "rows": [
      [
       "age 계수 (p)",
       "0.3039 (0.0300)"
      ],
      [
       "오즈비",
       "1.3551"
      ],
      [
       "10세 증가 오즈비",
       "np.exp(10×0.3039) = 20.8742"
      ],
      [
       "잔차이탈도 / 영이탈도",
       "10.3383 / 27.7259"
      ],
      [
       "age=50 예측확률",
       "0.8691"
      ]
     ]
    }
   },
   {
    "h": "해석",
    "li": [
     "계수 = 로그오즈 변화 — 확률 변화량이 아님",
     "OR > 1 → x 증가 시 사건 오즈 증가 / OR < 1 감소 / OR = 1 영향 없음",
     "GLM(family=Binomial) 이면 .deviance 로 잔차이탈도 직접 조회"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "시간 배분",
  "title": "180분 시간 배분과 진행 순서",
  "ref": "06_빈출_함정_시간전략.txt §1 유형별 배점·시간 배분 표 / 00_시험개요_환경.txt §0",
  "body": [
   {
    "h": "배점·권장시간",
    "tb": {
     "head": [
      "유형",
      "배점",
      "권장시간",
      "문항당"
     ],
     "rows": [
      [
       "제1유형",
       "30점(10×3)",
       "40분",
       "약 13분, 상한 20분"
      ],
      [
       "제2유형",
       "40점(40×1)",
       "80분",
       "—"
      ],
      [
       "제3유형",
       "30점(15×2)",
       "40분",
       "15~20분"
      ],
      [
       "검토",
       "—",
       "20분",
       "재실행·제출 확인"
      ]
     ]
    }
   },
   {
    "h": "시간 배분 원칙",
    "li": [
     "★제2유형 80분★ — 배점 최대, 제출 형식 오류가 0점 유발",
     "제1유형 문항당 13분 목표 — 복잡 전처리도 20분 상한",
     "제3유형 — 검정 함수 암기 완료 시 10분 내 처리 가능",
     "★마지막 20분★ — 전체 재실행·제출 파일 확인·반올림 검수"
    ]
   },
   {
    "h": "막힘 대처",
    "li": [
     "15분 초과 시 부분 답안 print 후 다음 문항",
     "제1유형은 부분 점수 없음 → 정확 일치 아니면 0점, 시간 손실 최소화",
     "풀이 순서 자체는 자료에 규정 없음 — 자신 있는 유형부터 점수 확보 [확인필요]"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "득점 전략",
  "title": "득점 전략 — 60점 합격 시나리오",
  "ref": "06_빈출_함정_시간전략.txt §2 합격 전략 3원칙·§8 합격 한 줄 요약 / 00_시험개요_환경.txt §2·§4",
  "body": [
   {
    "h": "합격 전략 3원칙",
    "li": [
     "① 제2유형 — 제출 형식 정확성 우선(기본 점수 확보)",
     "② 제1유형 — 빠른 정답, 과도한 정교화 금지(fillna·dropna / IQR / StandardScaler 3종 패턴 반복)",
     "③ 제3유형 — 검정 함수 암기 + \"p-value < 0.05이므로 귀무가설 기각\" 서술 패턴 고정"
    ]
   },
   {
    "h": "점수 구조",
    "tb": {
     "head": [
      "시나리오",
      "구성",
      "합계"
     ],
     "rows": [
      [
       "안정 합격(00 개요)",
       "제2유형 40 + 제1유형 30",
       "70점"
      ],
      [
       "버퍼 확보",
       "위 + 제3유형 일부",
       "70점+"
      ],
      [
       "위험",
       "제2유형 제출 실패 → 제1+제3 만점 필요",
       "최대 60점"
      ]
     ]
    }
   },
   {
    "h": "한 줄 요약",
    "li": [
     "★제2유형 index=False·컬럼명·predict_proba 3종 무결성 + 제1유형 결측·스케일 패턴 + 제3유형 p-value 서술 자동화 = 60점 안정★"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "출력·제출 형식",
  "title": "출력·제출 형식 실수 방지",
  "ref": "06_빈출_함정_시간전략.txt §4 함정 1·9·10·15·20 / 01_작업형1 §8 실수 2·9 / 02_작업형2 §9 / 03_작업형3 §9",
  "body": [
   {
    "h": "제1·3유형 출력",
    "li": [
     "print() 명시 출력 — 변수만 쓰면 채점 화면 미표시",
     "문제 지시 자릿수 round(값, n) / f\"{값:.2f}\"",
     "\"정수로\" → int(result) (int는 버림, round(x)는 반올림)",
     "제3유형 — 통계량·p-value 기본 소수점 4자리, 지시 우선 / 소문항 번호 붙여 print 분리"
    ]
   },
   {
    "h": "제2유형 제출",
    "li": [
     "to_csv('지시 파일명', index=False)",
     "컬럼명 지시 그대로(대소문자 구분, 'pred' vs 'prediction')",
     "확률 요구 → predict_proba(X_test)[:,1]",
     "제출 전 pd.read_csv로 재로딩 → shape·columns·head·isnull 확인"
    ]
   },
   {
    "h": "round·int 결과표",
    "tb": {
     "head": [
      "코드",
      "결과"
     ],
     "rows": [
      [
       "round(3.14159, 2)",
       "3.14"
      ],
      [
       "round(3.14159, 0)",
       "3.0"
      ],
      [
       "round(3.14159)",
       "3"
      ],
      [
       "int(3.9)",
       "3"
      ],
      [
       "int(-3.9)",
       "-3"
      ],
      [
       "round(2.5)",
       "2"
      ],
      [
       "round(2.675, 2)",
       "2.67"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "빈출 함정",
  "title": "빈출 함정 — 전처리·모델·검정",
  "ref": "06_빈출_함정_시간전략.txt §4 자주 틀리는 함정 20선 / 01_작업형1 §8 / 02_작업형2 §6~§9 / 03_작업형3 §9",
  "body": [
   {
    "h": "전처리",
    "li": [
     "mode()[0] — mode()는 Series 반환",
     "fillna 결과 재할당(pandas 3 CoW: chained inplace 미반영)",
     "조건 필터 괄호 — (조건1) & (조건2)",
     "작업 순서 — 로드 → isnull 확인 → 결측 처리 → 이상치 → 변환 → 집계 → print",
     "ddof — pandas std 1 / np.std·StandardScaler 0"
    ]
   },
   {
    "h": "모델(제2유형)",
    "li": [
     "ID 컬럼 학습 제외, 별도 보관",
     "fit은 train만, test는 transform만",
     "인코딩 정합 — concat 후 일괄 또는 get_dummies + reindex",
     "test 행 삭제 금지 — 제출 행 수 유지",
     "RMSE = np.sqrt(mean_squared_error) (squared=False는 버전 의존)"
    ]
   },
   {
    "h": "검정(제3유형)",
    "li": [
     "단측/양측 — \"크다\"는 alternative='greater'",
     "chi2_contingency는 교차표 입력, 반환 4개(chi2, p, dof, expected)",
     "p ≥ 0.05 → \"기각 실패\" (귀무가설 증명 아님)",
     "독립 t검정 전 levene으로 equal_var 결정"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "암기 스니펫",
  "title": "암기 스니펫과 help() 활용",
  "ref": "06_빈출_함정_시간전략.txt §3 필수 암기 코드 스니펫 10선·§5 help() 함수 활용법",
  "body": [
   {
    "h": "스니펫 10선 목록",
    "tb": {
     "head": [
      "번호",
      "내용",
      "핵심 한 줄"
     ],
     "rows": [
      [
       "1",
       "import 묶음",
       "from scipy import stats 등 첫 셀"
      ],
      [
       "2",
       "결측치 3종",
       "median / mode()[0] / dropna"
      ],
      [
       "3",
       "한글 인코딩",
       "encoding='cp949'"
      ],
      [
       "4",
       "스케일링",
       "fit_transform(train) / transform(test)"
      ],
      [
       "5",
       "train_test_split",
       "test_size=0.2, random_state=42"
      ],
      [
       "6",
       "RF fit·predict",
       "predict_proba(X)[:, 1]"
      ],
      [
       "7",
       "제출 파일",
       "to_csv('result.csv', index=False)"
      ],
      [
       "8",
       "ROC-AUC",
       "roc_auc_score(y, prob)"
      ],
      [
       "9",
       "RMSE",
       "np.sqrt(mean_squared_error(y, pred))"
      ],
      [
       "10",
       "t검정·카이제곱",
       "ttest_ind / chi2_contingency(ct)"
      ]
     ]
    }
   },
   {
    "h": "help()·dir()",
    "li": [
     "help(stats.ttest_ind) — alternative 옵션 확인",
     "help(mean_squared_error) — squared 인자 존재 여부 확인",
     "help(pd.read_csv) — encoding 확인",
     "print(dir(StandardScaler)) — 메서드 목록",
     "print(pd.read_csv.__doc__[:500]) — 앞 500자만",
     "Jupyter — stats.ttest_ind? 단축"
    ]
   }
  ]
 }
];

CPPG.levels = [
 {
  "d": 1,
  "name": "기초",
  "desc": "함수명·용어·규칙 — 반드시 맞혀야 하는 문항",
  "color": "#34d399"
 },
 {
  "d": 2,
  "name": "표준",
  "desc": "사용법·인자·판정 — 합격선을 가르는 문항",
  "color": "#5b9dff"
 },
 {
  "d": 3,
  "name": "심화",
  "desc": "결과 예측·함정·전체 풀이 — 실전 변별력",
  "color": "#fb7185"
 }
];

CPPG.mcq = [
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "빅데이터분석기사 실기 합격 기준은?",
  "c": [
   "100점 만점 50점 이상",
   "100점 만점 60점 이상",
   "과목별 40점 이상 + 평균 60점",
   "100점 만점 70점 이상"
  ],
  "a": 1,
  "e": "실기는 작업형 3유형 합산 100점 만점에 60점 이상이면 합격."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "실기 시험 시간은?",
  "c": [
   "120분",
   "150분",
   "180분",
   "240분"
  ],
  "a": 2,
  "e": "작업형 3유형 전체 180분."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "유형별 배점 구성으로 옳은 것은?",
  "c": [
   "1유형 40 / 2유형 30 / 3유형 30",
   "1유형 30 / 2유형 30 / 3유형 40",
   "1유형 20 / 2유형 50 / 3유형 30",
   "1유형 30 / 2유형 40 / 3유형 30"
  ],
  "a": 3,
  "e": "제1유형 3×10=30, 제2유형 1×40=40, 제3유형 2×15=30."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제3유형의 문항 구성은?",
  "c": [
   "2문항 × 15점",
   "3문항 × 10점",
   "1문항 × 30점",
   "6문항 × 5점"
  ],
  "a": 0,
  "e": "제3유형은 2문항 × 15점 = 30점. 3문항 × 10점은 제1유형."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "인터넷이 차단된 시험 환경에서 pd.read_csv의 인자를 확인하는 가장 적절한 방법은?",
  "c": [
   "pip show pandas",
   "help(pd.read_csv)",
   "import this",
   "pd.read_csv.version()"
  ],
  "a": 1,
  "e": "help()로 시그니처·파라미터 확인. dir()는 속성·메서드 목록."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "DataFrame df가 가진 메서드·속성 이름 목록을 보려면?",
  "c": [
   "list(df)",
   "df.methods()",
   "dir(df)",
   "help.list(df)"
  ],
  "a": 2,
  "e": "dir(객체)는 속성·메서드 이름 목록. list(df)는 컬럼명 리스트."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제1유형 답안 작성 방식으로 가장 안전한 것은?",
  "c": [
   "결과 변수를 마지막 줄에 적는다",
   "주석으로 답을 적는다",
   "결과를 CSV로 저장한다",
   "print()로 결과값을 출력한다"
  ],
  "a": 3,
  "e": "변수만 적으면 값이 표시되지 않을 수 있음 → print() 명시. CSV 제출은 제2유형."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "실기 코딩 환경에 대한 설명으로 틀린 것은?",
  "c": [
   "클라우드 기반 웹 IDE에서 작성한다",
   "필요한 외부 라이브러리를 pip로 설치할 수 있다",
   "인터넷 검색이 차단된다",
   "Python 또는 R 중 선택할 수 있다"
  ],
  "a": 1,
  "e": "외부 라이브러리 설치 불가 — 제공된 패키지만 사용."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제2유형 예측 결과 CSV 저장 코드로 가장 적절한 것은?",
  "c": [
   "result.to_csv('result.csv', index=False)",
   "result.to_csv('result.csv')",
   "result.save('result.csv')",
   "pd.to_csv(result, 'result.csv')"
  ],
  "a": 0,
  "e": "index=False 누락 시 0,1,2… 인덱스 열이 추가되어 형식 오류 위험. save/pd.to_csv는 없는 API."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "df의 (행 수, 열 수)를 튜플로 얻는 코드는?",
  "c": [
   "df.shape()",
   "df.size",
   "df.shape",
   "len(df.columns)"
  ],
  "a": 2,
  "e": "shape는 속성 — 괄호 없음. size는 전체 원소 수, len(df.columns)는 열 수만."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "수치형 컬럼의 count·mean·std·사분위수를 한 번에 보는 메서드는?",
  "c": [
   "df.info()",
   "df.dtypes",
   "df.head()",
   "df.describe()"
  ],
  "a": 3,
  "e": "describe()는 count, mean, std, min, 25%, 50%, 75%, max. info()는 타입·결측 요약."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "한글 CSV를 읽을 때 UnicodeDecodeError가 발생했다. 우선 시도할 인자는?",
  "c": [
   "encoding='cp949'",
   "sep='\\t'",
   "header=None",
   "index_col=0"
  ],
  "a": 0,
  "e": "한글(Windows) 파일은 cp949(또는 euc-kr) 인코딩 지정."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "다음 코드의 출력은?\ns = pd.Series(['M','F','X','M'])\nprint(s.map({'M':'남','F':'여'}).isnull().sum())",
  "c": [
   "0",
   "1",
   "2",
   "4"
  ],
  "a": 1,
  "e": "사전에 없는 'X'는 NaN으로 매핑 → 결측 1개."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "다음 코드의 출력은?\ndf = pd.DataFrame({'b': list('xyzxy')})\nprint(df['b'].value_counts().iloc[0])",
  "c": [
   "1",
   "5",
   "3",
   "2"
  ],
  "a": 3,
  "e": "x 2회, y 2회, z 1회 → 최다 빈도 2. value_counts는 빈도 내림차순."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "각 행의 x와 y를 더한 새 열을 apply로 만들 때 필요한 인자는?",
  "c": [
   "axis=0",
   "axis=1",
   "inplace=True",
   "raw=False"
  ],
  "a": 1,
  "e": "df.apply(lambda r: r['x']+r['y'], axis=1) — axis=1은 행 단위 적용. 단순 합은 df['x']+df['y']가 더 빠름."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "기본 RangeIndex인 5행 df에서 len(df.loc[0:2]), len(df.iloc[0:2])의 결과는?",
  "c": [
   "2, 2",
   "3, 3",
   "3, 2",
   "2, 3"
  ],
  "a": 2,
  "e": "loc은 끝 라벨 포함(0,1,2) → 3, iloc은 끝 미포함(0,1) → 2."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 1,
  "q": "df에서 마지막 행을 위치 기준으로 선택하는 코드는?",
  "c": [
   "df.iloc[-1]",
   "df.loc[-1]",
   "df[-1]",
   "df.last()"
  ],
  "a": 0,
  "e": "iloc은 음수 위치 지원. RangeIndex에서 loc[-1]은 KeyError."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "age가 30 초과이고 gender가 'M'인 행을 고르는 올바른 코드는?",
  "c": [
   "df[df['age'] > 30 and df['gender'] == 'M']",
   "df[df['age'] > 30 & df['gender'] == 'M']",
   "df[(df['age'] > 30) & (df['gender'] == 'M')]",
   "df[(df['age'] > 30) and (df['gender'] == 'M')]"
  ],
  "a": 2,
  "e": "Series 비교에는 &를 쓰고 각 조건을 괄호로 감싸야 함. and는 Series 진리값 모호 오류, 괄호 누락은 우선순위 오류."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 3,
  "q": "다음 코드의 출력은?\ns = pd.Series([20, 30, 40, 41])\nprint(s.between(20, 40).sum())",
  "c": [
   "2",
   "4",
   "1",
   "3"
  ],
  "a": 3,
  "e": "between은 기본 양끝 포함(inclusive='both') → 20, 30, 40 → 3."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "city가 '서울'·'부산'이 아닌 행만 고르는 코드는?",
  "c": [
   "df[df['city'] != ['서울','부산']]",
   "df[~df['city'].isin(['서울','부산'])]",
   "df[df['city'].notin(['서울','부산'])]",
   "df[not df['city'].isin(['서울','부산'])]"
  ],
  "a": 1,
  "e": "isin 결과에 ~(NOT). notin 메서드는 없음, not은 Series에 사용 불가."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "query 문자열 안에서 외부 변수 th를 참조하는 방법은?",
  "c": [
   "df.query('score >= th')",
   "df.query('score >= $th')",
   "df.query('score >= {th}')",
   "df.query('score >= @th')"
  ],
  "a": 3,
  "e": "query에서 외부 변수는 @변수명."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 3,
  "q": "다음 코드 실행 후 출력은?\nd = pd.DataFrame({'score':[80,90,70,np.nan,85]})\nprint(d[d['score'] > 75].index.tolist())",
  "c": [
   "[0, 1, 2]",
   "[0, 1, 4]",
   "[1, 2, 3]",
   "[0, 1, 3, 4]"
  ],
  "a": 1,
  "e": "필터는 원래 인덱스를 유지 → 80(0), 90(1), 85(4). NaN 비교는 False. 0부터 다시 매기려면 reset_index(drop=True)."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 3,
  "q": "다음 코드의 출력은?\ns = pd.Series([100, 90, 90, 80])\nprint(s.rank(ascending=False, method='dense').tolist())",
  "c": [
   "[1.0, 2.0, 2.0, 3.0]",
   "[1.0, 2.5, 2.5, 4.0]",
   "[1.0, 2.0, 2.0, 4.0]",
   "[4.0, 2.5, 2.5, 1.0]"
  ],
  "a": 0,
  "e": "dense는 동점 후 순위를 건너뛰지 않음 → 1,2,2,3. 기본 average는 1,2.5,2.5,4, min은 1,2,2,4."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "다음 코드의 출력은?\nd = pd.DataFrame({'dept':['A','A','B','B','B'], 'score':[80,90,70,np.nan,85]})\nprint(d.groupby('dept')['score'].mean()['B'])",
  "c": [
   "51.67",
   "70.0",
   "77.5",
   "85.0"
  ],
  "a": 2,
  "e": "mean은 NaN을 제외(skipna) → (70+85)/2 = 77.5."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 3,
  "q": "위 d에서 d.groupby('dept')['score'].count()['B']와 d.groupby('dept').size()['B']는?",
  "c": [
   "2, 3",
   "3, 3",
   "3, 2",
   "2, 2"
  ],
  "a": 0,
  "e": "count는 NaN 제외 개수(2), size는 NaN 포함 행 수(3)."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "groupby 결과에서 그룹 키를 인덱스가 아닌 일반 컬럼으로 두는 방법이 아닌 것은?",
  "c": [
   "df.groupby('k')['v'].mean().reset_index()",
   "df.groupby('k', as_index=False)['v'].mean()",
   "df.groupby('k')['v'].mean().set_index('k')",
   "df.groupby('k').agg(m=('v','mean')).reset_index()"
  ],
  "a": 2,
  "e": "set_index는 컬럼을 인덱스로 보내는 반대 동작(게다가 Series에는 없음). reset_index / as_index=False가 정답 방법."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "그룹 평균을 원래 DataFrame 행 수 그대로 새 열로 붙일 때 쓰는 메서드는?",
  "c": [
   "agg",
   "apply",
   "filter",
   "transform"
  ],
  "a": 3,
  "e": "transform은 원본과 같은 길이로 반환 → df['avg'] = df.groupby('k')['v'].transform('mean')."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 1,
  "q": "pd.merge의 how 기본값은?",
  "c": [
   "'inner'",
   "'left'",
   "'outer'",
   "'cross'"
  ],
  "a": 0,
  "e": "기본 inner — 양쪽에 모두 있는 키만 남음."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 3,
  "q": "다음 코드의 출력은?\nl = pd.DataFrame({'id':[1,2,3], 'v':[10,20,30]})\nr = pd.DataFrame({'id':[2,3,4], 'v':[200,300,400]})\nm = pd.merge(l, r, on='id', how='left')\nprint(m.shape, m.columns.tolist())",
  "c": [
   "(3, 2) ['id', 'v']",
   "(3, 3) ['id', 'v_x', 'v_y']",
   "(4, 3) ['id', 'v_x', 'v_y']",
   "(2, 3) ['id', 'v_l', 'v_r']"
  ],
  "a": 1,
  "e": "left join → 왼쪽 3행 유지(id=1은 v_y NaN). 키 외 동일 컬럼 v는 기본 suffixes ('_x','_y')."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 3,
  "q": "위 l, r에 대해 pd.concat([l, r]).index.tolist()의 결과는?",
  "c": [
   "[0, 1, 2, 3, 4, 5]",
   "[0, 1, 2]",
   "[1, 2, 3, 2, 3, 4]",
   "[0, 1, 2, 0, 1, 2]"
  ],
  "a": 3,
  "e": "concat은 원래 인덱스를 유지 → 중복. ignore_index=True면 0~5."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "addr 열에 NaN이 섞여 있을 때 '서울' 포함 행을 오류 없이 필터링하는 코드는?",
  "c": [
   "df[df['addr'].contains('서울')]",
   "df[df['addr'].str.contains('서울', na=False)]",
   "df[df['addr'].str.find('서울')]",
   "df[df['addr'] in '서울']"
  ],
  "a": 1,
  "e": ".str 접근자 경유, na=False로 NaN을 False 처리 → 불리언 인덱싱 가능."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "'2024-01-15' 형식 문자열 열 d에서 연도 4자리를 문자열로 뽑는 코드는?",
  "c": [
   "df['d'].str[0:4]",
   "df['d'][0:4]",
   "df['d'].dt.year",
   "df['d'].str.split('-')[0]"
  ],
  "a": 0,
  "e": ".str[0:4]는 각 원소 앞 4글자. df['d'][0:4]는 앞 4행. .dt는 datetime 변환 후에만 가능. split()[0]은 첫 행의 리스트."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 3,
  "q": "다음 코드의 출력은?\nd = pd.to_datetime(pd.Series(['2024-01-01', '2024-01-07']))\nprint(d.dt.dayofweek.tolist())",
  "c": [
   "[1, 7]",
   "[1, 0]",
   "[0, 6]",
   "[6, 5]"
  ],
  "a": 2,
  "e": "2024-01-01은 월요일, 01-07은 일요일. dayofweek 0=월~6=일."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "문자열 날짜 열에 바로 .dt.month를 쓰면 AttributeError가 났다. 해결책은?",
  "c": [
   "astype(int) 변환",
   "pd.to_datetime()으로 변환 후 .dt 사용",
   "str.month 사용",
   "np.datetime() 사용"
  ],
  "a": 1,
  "e": ".dt 접근자는 datetime 타입에만. 변환 실패값이 있으면 errors='coerce' → NaT."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "두 datetime 열 end, start 사이의 경과 일수(정수)를 구하는 코드는?",
  "c": [
   "(df['end'] - df['start']).days",
   "df['end'].dt.days - df['start'].dt.days",
   "pd.days(df['end'], df['start'])",
   "(df['end'] - df['start']).dt.days"
  ],
  "a": 3,
  "e": "차이는 Timedelta Series → .dt.days로 일수 추출."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 1,
  "q": "np.arange(0, 10, 3)의 결과는?",
  "c": [
   "[0 3 6 9]",
   "[0 3 6]",
   "[3 6 9]",
   "[0 3 6 9 12]"
  ],
  "a": 0,
  "e": "stop(10)은 미포함, step 3 → 0, 3, 6, 9."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 3,
  "q": "다음 코드의 출력(소수 3자리)은?\nprint(round(np.std([1,2,3,4]), 3), round(pd.Series([1,2,3,4]).std(), 3))",
  "c": [
   "1.291 1.291",
   "1.118 1.118",
   "1.291 1.118",
   "1.118 1.291"
  ],
  "a": 3,
  "e": "np.std 기본 ddof=0(모표준편차) 1.118, pandas std 기본 ddof=1(표본) 1.291."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 2,
  "q": "np.arange(12).reshape(-1, 2)의 shape은?",
  "c": [
   "(2, 6)",
   "(6, 2)",
   "(12, 2)",
   "(-1, 2)"
  ],
  "a": 1,
  "e": "-1은 자동 계산 → 12/2 = 6행."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 3,
  "q": "다음 코드의 출력은?\narr = np.array([[1,2,3],[4,5,6]])\nprint(np.sum(arr, axis=0))",
  "c": [
   "[ 6 15]",
   "21",
   "[5 7 9]",
   "[[5 7 9]]"
  ],
  "a": 2,
  "e": "axis=0은 행 방향으로 접어 열별 합 → [5 7 9]. axis=1이면 행별 합 [6 15]."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 2,
  "q": "np.mean(np.array([1, np.nan, 3]))의 결과와 NaN을 무시한 평균 함수는?",
  "c": [
   "2.0 / np.mean",
   "nan / np.nanmean",
   "nan / np.average",
   "2.0 / np.nanmean"
  ],
  "a": 1,
  "e": "np.mean은 NaN이 있으면 nan. np.nanmean은 NaN 제외 → 2.0. (pandas mean은 기본 skipna=True)"
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 1,
  "q": "데이터프레임의 컬럼별 결측치 개수를 구하는 코드는?",
  "c": [
   "df.count()",
   "df.isnull().sum()",
   "len(df.isnull())",
   "df.isnull().count()"
  ],
  "a": 1,
  "e": "isnull() 의 True 를 sum() 으로 합산. count() 는 결측 제외 개수, isnull().count() 는 전체 행 수."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([1, np.nan, 3, np.nan])\nprint(s.isnull().mean())",
  "c": [
   "0.5",
   "4",
   "2",
   "0.25"
  ],
  "a": 0,
  "e": "isnull() 불리언의 평균 = 결측 비율 2/4 = 0.5."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "최빈값으로 결측치를 대체할 때 mode() 뒤에 [0] 을 붙이는 이유는?",
  "c": [
   "mode() 가 결측치를 포함하기 때문",
   "mode() 가 내림차순 정렬되기 때문",
   "mode() 가 문자열만 반환하기 때문",
   "mode() 가 Series 를 반환하기 때문"
  ],
  "a": 3,
  "e": "최빈값이 여러 개일 수 있어 Series 반환 → [0] 으로 첫 값(스칼라) 추출."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([10, np.nan, 20, np.nan, 60])\ns2 = s.fillna(s.mean())\nprint(s2.mean())",
  "c": [
   "22.5",
   "nan",
   "30.0",
   "18.0"
  ],
  "a": 2,
  "e": "평균 대체는 평균을 바꾸지 않는다. 유효값 평균 30 → 채운 뒤에도 30.0."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([10, np.nan, 20, np.nan, 60])\ns2 = s.fillna(s.mean())\nprint(round(s.std(), 2), round(s2.std(), 2))",
  "c": [
   "18.71 26.46",
   "26.46 18.71",
   "26.46 30.0",
   "26.46 26.46"
  ],
  "a": 1,
  "e": "평균으로 채운 값은 편차 0 → 분산의 분자는 그대로, 분모(n−1)만 커져 표준편차 감소."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'a': [1, np.nan, 3], 'b': [np.nan, np.nan, 6]})\nprint(df.dropna(thresh=2).shape)",
  "c": [
   "(1, 2)",
   "(2, 2)",
   "(3, 2)",
   "(0, 2)"
  ],
  "a": 0,
  "e": "thresh=2 → 유효값이 2개 이상인 행만 유지. 마지막 행만 해당."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'g': ['A', 'A', 'B', 'B'], 'v': [1, np.nan, 5, np.nan]})\ndf['v'] = df['v'].fillna(df.groupby('g')['v'].transform('mean'))\nprint(df['v'].sum())",
  "c": [
   "10.0",
   "nan",
   "6.0",
   "12.0"
  ],
  "a": 3,
  "e": "transform('mean') 은 원본 길이로 그룹 평균을 배치 → A 결측은 1, B 결측은 5 로 채움 → 1+1+5+5 = 12.0."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 1,
  "q": "df.dropna(subset=['age']) 의 동작으로 옳은 것은?",
  "c": [
   "age 컬럼을 삭제한다",
   "모든 컬럼에 결측이 있는 행을 제거한다",
   "age 가 결측인 행만 제거한다",
   "age 결측치를 0 으로 채운다"
  ],
  "a": 2,
  "e": "subset 에 지정한 컬럼의 결측만 기준으로 행 제거."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'a': [1, np.nan, np.nan, 4]})\nprint(len(df), df['a'].count())",
  "c": [
   "2 4",
   "4 2",
   "2 2",
   "4 4"
  ],
  "a": 1,
  "e": "len 은 전체 행 수, count() 는 결측 제외 개수."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 1,
  "q": "IQR 방식 이상치의 상한 경계는?",
  "c": [
   "Q3 + 1.5×IQR",
   "Q3 + IQR",
   "Q3 + 3×표준편차",
   "평균 + 1.5×IQR"
  ],
  "a": 0,
  "e": "하한 Q1 − 1.5×IQR, 상한 Q3 + 1.5×IQR."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([1, 2, 3, 4, 5, 6, 7, 8, 9, 100])\nq1, q3 = s.quantile(0.25), s.quantile(0.75)\niqr = q3 - q1\nprint(((s < q1 - 1.5*iqr) | (s > q3 + 1.5*iqr)).sum())",
  "c": [
   "0",
   "2",
   "3",
   "1"
  ],
  "a": 3,
  "e": "Q1=3.25, Q3=7.75, IQR=4.5 → 상한 14.5. 100 만 이상치."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\nprint(pd.Series([1, 2, 3, 4]).quantile(0.25))",
  "c": [
   "1.0",
   "1.5",
   "1.75",
   "2.0"
  ],
  "a": 2,
  "e": "quantile 기본 선형보간: 위치 (4−1)×0.25 = 0.75 → 1 + 0.75×(2−1) = 1.75."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 3,
  "q": "다음 코드의 출력은? (pandas std 는 ddof=1)\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([2, 4, 4, 4, 5, 5, 7, 9])\nz = (s - s.mean()) / s.std()\nprint((z.abs() >= 2).sum())",
  "c": [
   "1",
   "0",
   "2",
   "8"
  ],
  "a": 1,
  "e": "9 의 z 는 ddof=0 이면 정확히 2.0 이지만 pandas std(ddof=1)≈2.14 로 나누면 1.87 → |z|>=2 인 값 없음."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 3,
  "q": "다음 코드의 출력은? (모표준편차 ddof=0 으로 z 계산)\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([2, 4, 4, 4, 5, 5, 7, 9])\nz = (s - s.mean()) / s.std(ddof=0)\nprint((z.abs() >= 2).sum())",
  "c": [
   "1",
   "3",
   "0",
   "2"
  ],
  "a": 0,
  "e": "모표준편차 2 → 9 의 z = (9−5)/2 = 2.0 → 1개. ddof 차이로 경계값 개수가 바뀜."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\nprint(pd.Series([1, 5, 10, 50]).clip(2, 20).tolist())",
  "c": [
   "[5, 10]",
   "[1, 5, 10, 50]",
   "[2, 5, 10, 50]",
   "[2, 5, 10, 20]"
  ],
  "a": 3,
  "e": "clip 은 범위 밖 값을 경계값으로 대체(행 유지)."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 1,
  "q": "IQR 로 이상치를 제거한 뒤 평균을 구할 때 올바른 대상은?",
  "c": [
   "원본 df",
   "이상치만 모은 df",
   "제거 후 새로 만든 df2",
   "describe() 결과"
  ],
  "a": 2,
  "e": "제거된 데이터(df2) 기준으로 통계량을 다시 계산."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "범위 [lo, up] 안의 행만 남기는 올바른 코드는?",
  "c": [
   "df[(df['c'] >= lo) | (df['c'] <= up)]",
   "df[(df['c'] >= lo) & (df['c'] <= up)]",
   "df[df['c'] >= lo & df['c'] <= up]",
   "df[(df['c'] >= lo) and (df['c'] <= up)]"
  ],
  "a": 1,
  "e": "각 조건 괄호 + 요소별 연산자 & 사용. and 는 Series 에 쓰면 오류, | 는 OR."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 1,
  "q": "Min-Max 정규화 수식은?",
  "c": [
   "(x − min) / (max − min)",
   "x / max",
   "(x − min) / 표준편차",
   "(x − 평균) / 표준편차"
  ],
  "a": 0,
  "e": "결과 0~1. 최솟값 → 0, 최댓값 → 1."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([10, 20, 30, 40, 50])\nmm = (s - s.min()) / (s.max() - s.min())\nprint(mm[3])",
  "c": [
   "0.5",
   "0.8",
   "0.6",
   "0.75"
  ],
  "a": 3,
  "e": "(40−10)/(50−10) = 30/40 = 0.75."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "sklearn StandardScaler 가 나눌 때 사용하는 표준편차는?",
  "c": [
   "표본 표준편차(ddof=1)",
   "IQR",
   "모표준편차(ddof=0)",
   "평균절대편차"
  ],
  "a": 2,
  "e": "StandardScaler 는 ddof=0. pandas .std() 기본 ddof=1 과 다름."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([1, 2, 3, 4, 5])\nz = (s - s.mean()) / s.std()\nprint(round(z.max(), 3))",
  "c": [
   "1.414",
   "1.265",
   "1.118",
   "2.0"
  ],
  "a": 1,
  "e": "pandas std(ddof=1)=√2.5≈1.581 → (5−3)/1.581 ≈ 1.265. StandardScaler 였다면 1.414."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nfrom sklearn.preprocessing import StandardScaler\ndf = pd.DataFrame({'x': [1, 2, 3, 4, 5]})\nz = StandardScaler().fit_transform(df[['x']])\nprint(round(z.max(), 3))",
  "c": [
   "1.414",
   "1.118",
   "1.265",
   "1.0"
  ],
  "a": 0,
  "e": "StandardScaler 는 ddof=0 → σ=√2 → (5−3)/√2 ≈ 1.414."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nfrom sklearn.preprocessing import StandardScaler\ndf = pd.DataFrame({'x': [1, 2, 3, 4, 5]})\ndf['z'] = StandardScaler().fit_transform(df[['x']])\nprint(round(df['z'].std(), 3))",
  "c": [
   "0.894",
   "0.0",
   "1.0",
   "1.118"
  ],
  "a": 3,
  "e": "StandardScaler 결과의 ddof=0 표준편차는 1 이지만 pandas std(ddof=1) 로 재면 √(5/4) ≈ 1.118."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "scaler.fit_transform(df['x']) 실행 시 결과는?",
  "c": [
   "결측치만 반환",
   "정상적으로 1차원 배열 반환",
   "2차원 입력이 아니라 오류(ValueError)",
   "자동으로 MinMax 적용"
  ],
  "a": 2,
  "e": "sklearn 변환기는 2차원 입력 필요 → df[['x']]."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 1,
  "q": "MinMaxScaler 기본 변환 결과의 범위는?",
  "c": [
   "0 ~ 100",
   "0 ~ 1",
   "−1 ~ 1",
   "평균 0, 표준편차 1"
  ],
  "a": 1,
  "e": "feature_range 기본값 (0, 1)."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "그룹별 평균 중 최댓값을 구하는 코드는?",
  "c": [
   "df.groupby('g')['v'].mean().max()",
   "df.groupby('g')['v'].max().mean()",
   "df['v'].mean().groupby('g')",
   "df.groupby('v')['g'].mean()"
  ],
  "a": 0,
  "e": "groupby → 집계(mean) → 그 결과 Series 의 max()."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'city': ['Seoul', 'Busan', 'Seoul', 'Busan'], 'price': [200, 100, 300, 200]})\nprint(df.groupby('city')['price'].sum().idxmax())",
  "c": [
   "550",
   "850",
   "Busan",
   "Seoul"
  ],
  "a": 3,
  "e": "idxmax() 는 최댓값의 인덱스(그룹명) 반환. Seoul 합 500 > Busan 300."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'g': ['A', 'A', 'B', 'B', 'B'], 'price': [100, 200, 30, 250, 50]})\nprint(df[df['price'] > 50].groupby('g')['price'].sum().max())",
  "c": [
   "380",
   "330",
   "300",
   "420"
  ],
  "a": 2,
  "e": "필터 먼저: price>50 → A = 100+200 = 300, B = 250(30·50 제외) → 최댓값 300."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "groupby 의 transform 과 agg(mean) 의 차이로 옳은 것은?",
  "c": [
   "agg 는 원본 행 수를 유지",
   "transform 은 원본 행 수(인덱스)를 유지",
   "둘은 항상 같은 형태",
   "transform 은 그룹 수만큼 행을 반환"
  ],
  "a": 1,
  "e": "transform → 원본 길이, agg/mean → 그룹당 1행."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'g': ['x', np.nan, 'x', 'y'], 'v': [1, 2, 3, 4]})\nprint(len(df.groupby('g')['v'].sum()))",
  "c": [
   "2",
   "4",
   "1",
   "3"
  ],
  "a": 0,
  "e": "groupby 는 키가 NaN 인 행을 기본 제외(dropna=True) → 그룹 x, y 2개."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "pandas dt.dayofweek 에서 토요일의 값은?",
  "c": [
   "1",
   "6",
   "0",
   "5"
  ],
  "a": 3,
  "e": "0=월, 1=화, … 5=토, 6=일."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\nd = pd.to_datetime('2024-03-01') - pd.to_datetime('2024-02-01')\nprint(d.days)",
  "c": [
   "30",
   "31",
   "29",
   "28"
  ],
  "a": 2,
  "e": "2024년은 윤년 → 2월 29일까지 → 29일 차이."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "CSV 에서 읽은 문자열 날짜 컬럼에 .dt.month 를 쓰기 전 필요한 처리는?",
  "c": [
   "astype(int)",
   "pd.to_datetime() 변환",
   "reset_index()",
   "sort_values()"
  ],
  "a": 1,
  "e": "문자열(object/str)에는 .dt 접근자가 없음 → to_datetime 으로 변환."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'d': ['2024-01-03', '2024-01-15', '2024-02-02', '2024-02-20', '2024-02-28', '2024-03-05', '2024-03-09', '2024-03-17']})\ndf['d'] = pd.to_datetime(df['d'])\nprint(df.groupby(df['d'].dt.month).size().max())",
  "c": [
   "3",
   "1",
   "2",
   "4"
  ],
  "a": 0,
  "e": "월별 건수: 1월 2, 2월 3, 3월 3 → 최댓값 3."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([5, 3, 5, 1])\nprint(s.value_counts(normalize=True).iloc[0])",
  "c": [
   "2",
   "0.25",
   "1",
   "0.5"
  ],
  "a": 3,
  "e": "normalize=True → 비율. 5 가 2/4 = 0.5 로 최다."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 1,
  "q": "score 기준 내림차순 정렬 코드는?",
  "c": [
   "df.sort_values('score', reverse=True)",
   "df.sort_values('score')",
   "df.sort_values('score', ascending=False)",
   "df.sort_index('score')"
  ],
  "a": 2,
  "e": "ascending=False 가 내림차순. reverse 인자는 없음."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "s.nlargest(3).iloc[-1] 이 구하는 값은?",
  "c": [
   "상위 3개 합",
   "3번째로 큰 값",
   "가장 큰 값",
   "3번째로 작은 값"
  ],
  "a": 1,
  "e": "상위 3개 중 마지막 = 3번째로 큰 값. sort_values(ascending=False).iloc[2] 와 같음."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([10, 20, 20, 30])\nprint(s.rank(ascending=False, method='min').tolist())",
  "c": [
   "[4.0, 2.0, 2.0, 1.0]",
   "[4.0, 3.0, 3.0, 1.0]",
   "[1.0, 2.0, 2.0, 3.0]",
   "[4.0, 2.5, 2.5, 1.0]"
  ],
  "a": 0,
  "e": "ascending=False → 큰 값이 1위. method='min' → 동점 20 은 2위, 다음 10 은 4위."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\nprint(pd.Series([10, 20, 20, 30]).rank().tolist())",
  "c": [
   "[1.0, 2.0, 2.0, 4.0]",
   "[1.0, 2.0, 2.0, 3.0]",
   "[1.0, 2.0, 3.0, 4.0]",
   "[1.0, 2.5, 2.5, 4.0]"
  ],
  "a": 3,
  "e": "rank 기본 method='average' → 동점 2·3위 평균 2.5."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 3,
  "q": "다음 코드의 출력은? (상위 3개 값을 3번째 값으로 교체)\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'v': [5, 9, 1, 7, 3, 8]})\ntop = df['v'].sort_values(ascending=False)\nv3 = top.iloc[2]\ndf.loc[top.index[:3], 'v'] = v3\nprint(df['v'].mean())",
  "c": [
   "5.5",
   "4.5",
   "5.0",
   "6.0"
  ],
  "a": 2,
  "e": "내림차순 9,8,7 → 3번째 값 7 로 교체 → [5,7,1,7,3,7] 평균 30/6 = 5.0."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'name': ['a', 'b', 'c'], 'v': [1, 2, 3]})\nd2 = df.sort_values('v', ascending=False)\nprint(d2.iloc[0]['name'], d2.loc[0, 'name'])",
  "c": [
   "a c",
   "c a",
   "c b",
   "b c"
  ],
  "a": 1,
  "e": "iloc[0] 은 정렬 후 첫 위치(c), loc[0] 은 라벨 0 인 원래 행(a)."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([3, 5, 5, 1], index=list('abcd'))\nprint(s.nlargest(1).index.tolist())",
  "c": [
   "['b']",
   "['c']",
   "['a']",
   "['b', 'c']"
  ],
  "a": 0,
  "e": "nlargest 기본 keep='first' → 동점이면 먼저 나온 b."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'v': range(10)})\nprint(len(df.iloc[:int(len(df) * 0.7)]))",
  "c": [
   "8",
   "10",
   "6",
   "7"
  ],
  "a": 3,
  "e": "int(10×0.7) = 7 → 앞 7행."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "pandas Series.std() 의 기본 ddof 는?",
  "c": [
   "0",
   "2",
   "1",
   "n"
  ],
  "a": 2,
  "e": "표본 표준편차(n−1). numpy np.std 는 ddof=0."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ns = pd.Series([1, 2, 3, 4])\nprint(round(s.var(), 4), round(np.var(s.values), 4))",
  "c": [
   "1.25 1.25",
   "1.6667 1.25",
   "1.25 1.6667",
   "1.6667 1.6667"
  ],
  "a": 1,
  "e": "pandas var ddof=1 → 5/3, numpy var ddof=0 → 5/4."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "pandas skew() 와 scipy.stats.skew() 기본값에 대한 설명으로 옳은 것은?",
  "c": [
   "pandas 는 표본 보정값, scipy 기본은 bias=True 라 값이 다르다",
   "scipy 가 표본 보정값이다",
   "둘 다 첨도를 계산한다",
   "항상 같은 값이다"
  ],
  "a": 0,
  "e": "scipy skew(bias=False) 로 지정하면 pandas 와 일치."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "pandas kurt() 로 정규분포 데이터의 첨도를 구하면 대략 얼마인가?",
  "c": [
   "3",
   "1",
   "−3",
   "0"
  ],
  "a": 3,
  "e": "pandas kurt() 는 초과첨도(Fisher) → 정규분포 ≈ 0."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nprint(round(2.5), round(3.5))",
  "c": [
   "3 3",
   "3 4",
   "2 4",
   "2 3"
  ],
  "a": 2,
  "e": "파이썬 round 는 은행원 반올림(.5 는 짝수 쪽) → 2, 4."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nprint(int(3.99))",
  "c": [
   "4.0",
   "3",
   "4",
   "3.99"
  ],
  "a": 1,
  "e": "int() 는 소수점 이하 버림."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'a': [1, 2, 3, 4, 5], 'b': [5, 3, 4, 1, 2], 'c': [2, 1, 2, 1, 2], 'target': [2, 4, 6, 8, 10]})\nprint(df.corr()['target'].drop('target').abs().idxmax())",
  "c": [
   "a",
   "b",
   "target",
   "c"
  ],
  "a": 0,
  "e": "target 과의 상관계수 절댓값 최대: a(완전 양의 상관). b 는 음의 상관이지만 절댓값이 더 작음."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "작업형 제1유형 답안 제출 방식으로 옳은 것은?",
  "c": [
   "그래프 이미지 제출",
   "서술형 답안 작성",
   "CSV 파일 제출",
   "결과 값 1개를 print() 로 출력"
  ],
  "a": 3,
  "e": "제1유형은 값 1개를 print 로 출력. CSV 제출은 제2유형."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nprint(round(3 / 5, 2))",
  "c": [
   "0.600",
   "0.60",
   "0.6",
   "60"
  ],
  "a": 2,
  "e": "round 는 숫자 반환 → 끝자리 0 은 표시 안 됨. 자리 고정은 f-string."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "작업형 제2유형의 배점과 문항 수는?",
  "c": [
   "1문항 30점",
   "2문항 각 20점",
   "1문항 40점",
   "3문항 각 10점"
  ],
  "a": 2,
  "e": "제2유형은 1문항 40점으로 최고 배점."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "test.csv 에 대한 설명으로 옳은 것은?",
  "c": [
   "피처만 있고 타깃이 없다",
   "타깃 컬럼이 포함되어 있다",
   "학습에 사용해야 한다",
   "ID 컬럼은 항상 없다"
  ],
  "a": 0,
  "e": "test는 피처만 존재 → 예측 대상."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "타깃이 '주택 가격(원)'인 문제의 유형은?",
  "c": [
   "이진분류",
   "다중분류",
   "군집",
   "회귀"
  ],
  "a": 3,
  "e": "연속 수치 → 회귀."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "타깃이 'A/B/C/D 고객 등급'일 때 유형은?",
  "c": [
   "회귀",
   "다중분류",
   "이진분류",
   "시계열 예측"
  ],
  "a": 1,
  "e": "3개 이상 범주 → 다중분류."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "분류 문제 EDA에서 타깃 불균형 확인에 가장 적합한 것은?",
  "c": [
   "y.value_counts()",
   "y.describe()",
   "y.corr()",
   "y.cumsum()"
  ],
  "a": 0,
  "e": "범주별 빈도 = value_counts()."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "7단계 중 train_test_split 이 속하는 단계는?",
  "c": [
   "로드",
   "전처리",
   "검증 분리",
   "제출"
  ],
  "a": 2,
  "e": "4단계 검증 분리."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "test 에서 X_test 를 만들 때 KeyError 가 나는 코드는?",
  "c": [
   "test.copy()",
   "test.drop(columns=[target])",
   "test.drop(columns=['id'])",
   "test[feature_cols]"
  ],
  "a": 1,
  "e": "test엔 타깃이 없어 drop 시 KeyError."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "검증 점수 확인 후 최종 제출 직전 권장 작업은?",
  "c": [
   "X_val만으로 재학습",
   "test로 재학습",
   "모델을 새로 바꾸기",
   "전체 X_train·y_train으로 재학습"
  ],
  "a": 3,
  "e": "전체 train 재학습으로 데이터 100% 활용."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 3,
  "q": "타깃이 1~5 정수 '만족도 등급'이고 지표가 macro F1이면?",
  "c": [
   "회귀로 풀고 반올림",
   "이진분류로 묶기",
   "군집으로 풀이",
   "다중분류로 풀이"
  ],
  "a": 3,
  "e": "지표가 macro F1 → 범주 예측, 다중분류."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 1,
  "q": "범주형을 인코딩하지 않고 RF에 넣으면 나는 오류는?",
  "c": [
   "KeyError",
   "could not convert string to float",
   "IndexError",
   "ZeroDivisionError"
  ],
  "a": 1,
  "e": "문자열은 수치 변환 불가 → ValueError."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 1,
  "q": "수치형 결측 대체로 이상치에 강한 값은?",
  "c": [
   "중앙값",
   "평균",
   "최댓값",
   "합계"
  ],
  "a": 0,
  "e": "median은 이상치 영향이 작음."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "범주형 결측을 최빈값으로 채우는 올바른 코드는?",
  "c": [
   "df[c].fillna(df[c].mode())",
   "df[c].fillna(df[c].median())",
   "df[c].fillna(df[c].mode()[0])",
   "df[c].dropna(mode=True)"
  ],
  "a": 2,
  "e": "mode()는 Series → [0]."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "train·test 를 결합해 인코딩하는 주된 이유는?",
  "c": [
   "메모리 절약",
   "학습 속도 향상",
   "같은 범주에 같은 값 매핑(정합)",
   "결측 자동 제거"
  ],
  "a": 2,
  "e": "unseen category·매핑 불일치 방지."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "get_dummies 를 따로 적용한 test 컬럼을 train 에 맞추는 코드는?",
  "c": [
   "X_test.reindex(columns=X_train.columns, fill_value=0)",
   "X_test.align()",
   "X_test.sort_index()",
   "X_test.rename(columns=X_train.columns)"
  ],
  "a": 0,
  "e": "reindex로 순서·누락·여분 정리."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "결합 후 다시 train 부분만 꺼내는 코드는?",
  "c": [
   "X_all.loc[n_train:]",
   "X_all.head()",
   "X_all.sample(n_train)",
   "X_all.iloc[:n_train]"
  ],
  "a": 3,
  "e": "앞 n_train행이 train."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "pandas 3.x 에서 범주형(문자열) 컬럼을 안전하게 고르는 코드는?",
  "c": [
   "X.columns[X.dtypes == 'object']",
   "X.select_dtypes(exclude='number').columns",
   "X.select_dtypes(include='float').columns",
   "X.dtypes.unique()"
  ],
  "a": 1,
  "e": "3.0부터 문자열 기본 dtype str → exclude='number'가 안전."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "StandardScaler 의 올바른 사용은?",
  "c": [
   "train fit_transform, test transform",
   "test에 fit_transform",
   "train·test 각각 fit",
   "결합 후 fit 후 test만 사용"
  ],
  "a": 0,
  "e": "fit은 train만."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "스케일링이 사실상 불필요한 모델은?",
  "c": [
   "KNN",
   "SVM",
   "RandomForest",
   "LogisticRegression"
  ],
  "a": 2,
  "e": "트리 기반은 스케일 무관."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "LabelEncoder 를 train 에 fit 후 test 에 transform 할 때 오류 상황은?",
  "c": [
   "test 결측 0개",
   "test에 train에 없던 범주",
   "train 행이 많을 때",
   "정수 컬럼 포함"
  ],
  "a": 1,
  "e": "unseen labels ValueError."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "'2024-03-01 13:00:00' 같은 날짜 컬럼 처리로 옳은 것은?",
  "c": [
   "문자열 그대로 학습",
   "LabelEncoder만 적용",
   "컬럼 무조건 삭제",
   "to_datetime 후 hour·month 파생 → 원본 제거"
  ],
  "a": 3,
  "e": "파생 후 원본 drop."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 1,
  "q": "회귀 문제에 사용할 모델은?",
  "c": [
   "RandomForestClassifier",
   "LogisticRegression",
   "SVC",
   "RandomForestRegressor"
  ],
  "a": 3,
  "e": "회귀 = Regressor."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "SVC 로 predict_proba 를 쓰기 위한 설정은?",
  "c": [
   "kernel='linear'",
   "probability=True",
   "C=0",
   "max_iter=1000"
  ],
  "a": 1,
  "e": "기본 probability=False."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "불균형 이진분류에서 RF 에 줄 수 있는 인자는?",
  "c": [
   "class_weight='balanced'",
   "criterion='mse'",
   "fit_intercept=True",
   "alpha=1.0"
  ],
  "a": 0,
  "e": "소수 클래스 가중."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 3,
  "q": "xgboost 2.x 에서 제거되어 넣으면 문제되는 인자는?",
  "c": [
   "n_estimators",
   "learning_rate",
   "use_label_encoder",
   "max_depth"
  ],
  "a": 2,
  "e": "use_label_encoder는 2.0에서 제거."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "RF 의 과적합을 줄이는 방향의 조정은?",
  "c": [
   "max_depth=None 고정",
   "n_estimators=1",
   "max_depth 축소·min_samples_leaf 증가",
   "random_state 제거"
  ],
  "a": 2,
  "e": "깊이 제한·리프 최소 표본 증가."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 3,
  "q": "회귀 타깃이 심하게 오른쪽으로 치우쳤을 때 흔한 처리는?",
  "c": [
   "np.log1p(y)로 학습 후 np.expm1로 역변환",
   "y를 이진화",
   "y를 표준화하지 않고 삭제",
   "stratify=y 적용"
  ],
  "a": 0,
  "e": "로그 변환·역변환."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "Lasso 회귀의 특징은?",
  "c": [
   "L2 규제",
   "트리 기반",
   "확률 출력",
   "L1 규제로 일부 계수 0(변수 선택)"
  ],
  "a": 3,
  "e": "L1 → 희소 계수."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 1,
  "q": "이진분류 ROC-AUC 계산에 넣을 값은?",
  "c": [
   "model.predict(X_val)",
   "model.predict_proba(X_val)[:, 1]",
   "model.predict_proba(X_val)[:, 0]",
   "model.score(X_val)"
  ],
  "a": 1,
  "e": "양성 확률."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "predict_proba(X) 결과의 [:, 1] 의미는?",
  "c": [
   "양성(클래스 1) 확률",
   "음성 확률",
   "예측 레이블",
   "결정 경계"
  ],
  "a": 0,
  "e": "classes_ 순서상 두 번째 = 1."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "다중분류 macro F1 코드는?",
  "c": [
   "f1_score(y, p)",
   "f1_score(y, p, pos_label='macro')",
   "f1_score(y, p, average='macro')",
   "f1_score(y, proba)"
  ],
  "a": 2,
  "e": "average='macro'."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "sklearn 1.9 에서 RMSE 를 구하는 올바른 코드는?",
  "c": [
   "mean_squared_error(y, p, squared=False)",
   "np.sqrt(mean_squared_error(y, p))",
   "mean_absolute_error(y, p) ** 2",
   "r2_score(y, p) ** 0.5"
  ],
  "a": 1,
  "e": "squared 인자는 1.6에서 제거."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "R² 에 대한 설명으로 옳은 것은?",
  "c": [
   "항상 0~1",
   "작을수록 좋다",
   "분류 지표다",
   "음수가 될 수 있다"
  ],
  "a": 3,
  "e": "평균 예측보다 나쁘면 음수."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "타깃이 'Yes'/'No' 문자열인 이진 F1 계산 코드는?",
  "c": [
   "f1_score(y, p)",
   "f1_score(y, p, average='binary', pos_label=1)",
   "f1_score(p, y, average=None)",
   "f1_score(y, p, pos_label='Yes')"
  ],
  "a": 3,
  "e": "문자열 양성 지정."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 3,
  "q": "다중분류 ROC-AUC 계산 코드는?",
  "c": [
   "roc_auc_score(y, model.predict(X))",
   "roc_auc_score(y, proba, multi_class='ovr')",
   "roc_auc_score(y, proba[:, 1])",
   "roc_auc_score(y, proba, average='binary')"
  ],
  "a": 1,
  "e": "확률 행렬 + multi_class."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 3,
  "q": "이진 confusion_matrix 반환 배열 형태는?",
  "c": [
   "[[TN, FP], [FN, TP]]",
   "[[TP, FP], [FN, TN]]",
   "[[TN, FN], [FP, TP]]",
   "[[FP, TN], [TP, FN]]"
  ],
  "a": 0,
  "e": "행=실제, 열=예측, 0이 먼저."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "이상치(큰 오차)에 상대적으로 덜 민감한 회귀 지표는?",
  "c": [
   "RMSE",
   "MSE",
   "MAE",
   "R²"
  ],
  "a": 2,
  "e": "MAE는 절댓값 평균."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 1,
  "q": "train_test_split 에서 분류 클래스 비율을 유지하는 인자는?",
  "c": [
   "shuffle",
   "random_state",
   "stratify",
   "train_size"
  ],
  "a": 2,
  "e": "stratify=y."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 2,
  "q": "회귀 문제에서 train_test_split 에 stratify=y 를 넣으면?",
  "c": [
   "연속값이라 오류 발생 가능",
   "정상 층화",
   "RMSE 자동 개선",
   "무시됨"
  ],
  "a": 0,
  "e": "클래스당 표본 부족 오류."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 2,
  "q": "cross_val_score 회귀 RMSE scoring 문자열은?",
  "c": [
   "'rmse'",
   "'root_mean_squared_error'",
   "'mse'",
   "'neg_root_mean_squared_error'"
  ],
  "a": 3,
  "e": "neg_ 접두."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 2,
  "q": "GridSearchCV 에서 최적 모델 객체 속성은?",
  "c": [
   "best_params_",
   "best_estimator_",
   "best_score_",
   "cv_results_"
  ],
  "a": 1,
  "e": "best_estimator_."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 3,
  "q": "불균형 분류 교차검증에 적합한 분할기는?",
  "c": [
   "StratifiedKFold",
   "KFold(shuffle=False)",
   "LeaveOneOut",
   "TimeSeriesSplit"
  ],
  "a": 0,
  "e": "클래스 비율 유지."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 1,
  "q": "to_csv 에서 행번호 열을 빼는 인자는?",
  "c": [
   "header=False",
   "sep=','",
   "index=False",
   "columns=None"
  ],
  "a": 2,
  "e": "기본 index=True."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 2,
  "q": "제출 컬럼이 'pred' 로 지정된 경우 올바른 코드는?",
  "c": [
   "pd.DataFrame({'Pred': p}).to_csv('result.csv', index=False)",
   "pd.DataFrame({'pred': p}).to_csv('result.csv', index=False)",
   "pd.Series(p).to_csv('result.csv')",
   "pd.DataFrame(p).to_csv('result.csv', index=False)"
  ],
  "a": 1,
  "e": "컬럼명·index 모두 정확."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 2,
  "q": "'고객별 이탈 확률' 을 제출하라는 문제의 제출값은?",
  "c": [
   "model.predict(X_test)",
   "model.predict_proba(X_test)",
   "model.score(X_test)",
   "model.predict_proba(X_test)[:, 1]"
  ],
  "a": 3,
  "e": "1열 양성 확률."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 3,
  "q": "test 결측 행을 dropna 로 지운 뒤 예측해 제출하면?",
  "c": [
   "문제없음",
   "점수 상승",
   "자동 보정",
   "행 수 불일치로 형식 오류"
  ],
  "a": 3,
  "e": "len(result) == len(test) 필수."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 3,
  "q": "ID 와 예측값 2컬럼 제출을 요구할 때 올바른 흐름은?",
  "c": [
   "ID를 피처로 학습",
   "test_id 보관 → ID drop 후 학습·예측 → DataFrame({'id': test_id, 'pred': p})",
   "예측 후 train ID 붙이기",
   "index=True로 ID 대체"
  ],
  "a": 1,
  "e": "drop 전에 보관."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "유의수준 0.05에서 p-value 가 0.032 일 때 올바른 판정은?",
  "c": [
   "귀무가설 기각 실패",
   "귀무가설 기각",
   "대립가설 기각",
   "판정 불가"
  ],
  "a": 1,
  "e": "p < α 이므로 H₀ 기각 — 통계적으로 유의하다."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "p-value 가 0.27 일 때 가장 적절한 결론은?",
  "c": [
   "귀무가설이 참임이 증명되었다",
   "대립가설이 참이다",
   "귀무가설을 기각할 근거가 부족하다",
   "유의수준을 0.3 으로 올려 기각한다"
  ],
  "a": 2,
  "e": "p ≥ α → 기각 실패. H₀ 를 증명한 것이 아니라 증거가 부족한 것이다. 사후에 α 를 바꾸는 것은 부적절."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "다음 중 1종 오류에 해당하는 것은?",
  "c": [
   "참인 귀무가설을 기각",
   "거짓인 귀무가설을 기각하지 못함",
   "거짓인 귀무가설을 기각",
   "표본 크기가 부족함"
  ],
  "a": 0,
  "e": "1종 오류 = 참인 H₀ 기각(α), 2종 오류 = 거짓 H₀ 를 기각하지 못함(β)."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "'신제품 평균 수명이 기존 1000시간보다 길다'를 검정할 때 대립가설과 alternative 는?",
  "c": [
   "H₁: μ ≠ 1000 / 'two-sided'",
   "H₁: μ < 1000 / 'less'",
   "H₁: μ = 1000 / 'greater'",
   "H₁: μ > 1000 / 'greater'"
  ],
  "a": 3,
  "e": "'길다' = 크다 방향의 우측 단측 → ttest_1samp(x, 1000, alternative='greater')."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "반환값이 4개인 scipy 검정 함수는?",
  "c": [
   "ttest_ind",
   "chisquare",
   "chi2_contingency",
   "f_oneway"
  ],
  "a": 2,
  "e": "chi2_contingency → (chi2, p, dof, expected). 나머지는 (통계량, p)."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "다음 코드의 출력은?\nprint(round(0.00004, 4))",
  "c": [
   "0.0",
   "0.0001",
   "4e-05",
   "0.00004"
  ],
  "a": 0,
  "e": "round 결과는 float 0.0. f\"{0.00004:.4f}\" 는 '0.0000'. 원래 값은 0.05 보다 작으므로 기각."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 3,
  "q": "양측 p-value 가 0.08 이고 t 부호가 대립가설 방향과 일치할 때 단측 p-value 는?",
  "c": [
   "0.16",
   "0.04",
   "0.92",
   "0.08"
  ],
  "a": 1,
  "e": "방향 일치 시 단측 p = 양측 p / 2 = 0.04 → 0.05 기준 기각."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 3,
  "q": "양측 p-value 가 0.08 이고 t 부호가 대립가설 방향과 반대일 때 단측 p-value 는?",
  "c": [
   "0.04",
   "0.08",
   "0.96",
   "0.16"
  ],
  "a": 2,
  "e": "방향이 반대면 단측 p = 1 − 0.08/2 = 0.96. 기각 불가."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 1,
  "q": "Shapiro-Wilk 검정의 귀무가설은?",
  "c": [
   "데이터가 정규분포를 따르지 않는다",
   "두 집단 분산이 같다",
   "데이터가 정규분포를 따른다",
   "평균이 0 이다"
  ],
  "a": 2,
  "e": "H₀: 정규분포를 따른다. p < 0.05 이면 정규성 기각."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 1,
  "q": "다음 중 등분산 검정 함수가 아닌 것은?",
  "c": [
   "stats.levene",
   "stats.bartlett",
   "stats.fligner",
   "stats.shapiro"
  ],
  "a": 3,
  "e": "shapiro 는 정규성 검정. levene·bartlett·fligner 는 등분산 검정."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "독립 2집단에서 levene p=0.0166 일 때 ttest_ind 설정으로 옳은 것은?",
  "c": [
   "equal_var=False",
   "equal_var=True",
   "alternative='less'",
   "equal_var 생략"
  ],
  "a": 0,
  "e": "p < 0.05 → 이분산 → Welch t (equal_var=False). 생략하면 기본값 True."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "대응표본 t검정의 정규성 가정은 무엇에 대해 확인하는가?",
  "c": [
   "before 데이터만",
   "after 데이터만",
   "전후 차이(before − after)",
   "두 데이터를 합친 전체"
  ],
  "a": 2,
  "e": "대응 t 는 차이 d 의 1표본 t검정이므로 d 에 shapiro."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "levene 과 bartlett 비교로 옳은 것은?",
  "c": [
   "bartlett 이 정규성 이탈에 덜 민감하다",
   "levene 은 3집단 이상에 쓸 수 없다",
   "둘 다 평균 차이를 검정한다",
   "levene 이 정규성 이탈에 상대적으로 덜 민감하다"
  ],
  "a": 3,
  "e": "bartlett 은 정규성 가정에 의존, levene(중앙값 기준)은 강건. 둘 다 3집단 이상 가능."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 3,
  "q": "scipy stats.levene 의 center 인자 기본값은?",
  "c": [
   "'mean'",
   "'trimmed'",
   "'median'",
   "'mode'"
  ],
  "a": 2,
  "e": "기본 'median'(Brown–Forsythe 변형). 'mean' 이 원래 Levene."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "Shapiro 결과 p=0.003 인 두 독립 집단의 위치 비교에 적합한 함수는?",
  "c": [
   "ttest_ind",
   "mannwhitneyu",
   "ttest_rel",
   "f_oneway"
  ],
  "a": 1,
  "e": "정규성 위반 + 독립 2집단 → Mann-Whitney U."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "같은 환자 20명의 투약 전후 혈압 비교에 적합한 함수는?",
  "c": [
   "ttest_ind",
   "ttest_1samp",
   "ttest_rel",
   "chisquare"
  ],
  "a": 2,
  "e": "동일 대상 전·후 → 대응표본 t검정 ttest_rel."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "ttest_1samp 의 기준값 인자 이름은?",
  "c": [
   "popmean",
   "mu",
   "value",
   "mean0"
  ],
  "a": 0,
  "e": "stats.ttest_1samp(x, popmean=50)."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "다음 Welch t검정의 p-value(소수 4자리)는?\na=[82,75,90,68,85,79,88,73]\nb=[70,72,65,74,69,71,68,73]\nt, p = stats.ttest_ind(a, b, equal_var=False)",
  "c": [
   "0.0047",
   "0.0084",
   "0.0166",
   "0.0042"
  ],
  "a": 1,
  "e": "Welch t=3.3601, p=0.0084. 0.0047 은 Student, 0.0166 은 levene p, 0.0042 는 단측."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "a=[82,75,90,68,85,79,88,73], b=[70,72,65,74,69,71,68,73] 에 equal_var 를 생략(기본값)하면 p-value(소수 4자리)는?",
  "c": [
   "0.0084",
   "0.0042",
   "0.0047",
   "0.4481"
  ],
  "a": 2,
  "e": "기본 True(Student) → p=0.0047. 이분산 자료이므로 Welch(0.0084)가 정답 절차."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "'투약 후 혈압이 감소했다'를 검정하는 올바른 코드는?",
  "c": [
   "ttest_rel(before, after, alternative='less')",
   "ttest_rel(after, before, alternative='greater')",
   "ttest_ind(before, after, alternative='greater')",
   "ttest_rel(before, after, alternative='greater')"
  ],
  "a": 3,
  "e": "감소 = before > after → 첫 인자 before 가 크다 → 'greater'."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "ttest_ind(a, b) 의 t 통계량이 음수일 때 의미는?",
  "c": [
   "a 평균 > b 평균",
   "등분산 가정 위반",
   "p-value 가 음수",
   "a 평균 < b 평균"
  ],
  "a": 3,
  "e": "t 부호 = a 평균 − b 평균 방향."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 3,
  "q": "before=[72,80,65,90,77,84,69,75], after=[70,76,66,85,74,80,67,71] 을 ttest_rel 로 검정하면 양측 p=0.0035 이다. 실수로 ttest_ind 로 검정하면 p(소수 4자리)는?",
  "c": [
   "0.0035",
   "0.0018",
   "0.4481",
   "0.0156"
  ],
  "a": 2,
  "e": "독립 t 는 개인차를 오차로 취급 → t=0.7805, p=0.4481 로 결론이 뒤집힌다."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 3,
  "q": "numpy 배열 before, after 에 대해 ttest_rel(before, after) 와 같은 결과를 내는 코드는?",
  "c": [
   "ttest_1samp(before - after, 0)",
   "ttest_ind(before, after)",
   "ttest_1samp(before, after.mean())",
   "wilcoxon(before - after)"
  ],
  "a": 0,
  "e": "대응 t = 차이 d 에 대한 μ₀=0 1표본 t (t=4.3137, p=0.0035 동일)."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "Welch t검정을 수행하는 인자 설정은?",
  "c": [
   "equal_var=True",
   "equal_var=False",
   "paired=True",
   "welch=True"
  ],
  "a": 1,
  "e": "ttest_ind(a, b, equal_var=False)."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 3,
  "q": "x 10개(평균 50.62)의 ttest_1samp(x, 50) 결과가 t=3.2697, 양측 p=0.0097 이다. alternative='less' 로 바꾸면 p(소수 4자리)는?",
  "c": [
   "0.0048",
   "0.0097",
   "0.9952",
   "0.0194"
  ],
  "a": 2,
  "e": "t 가 양수인데 H₁: μ < 50 → 1 − 0.0097/2 = 0.9952."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "세 교육방식의 평균 점수 차이 검정에 적합한 것은?",
  "c": [
   "ttest_ind 3번 반복",
   "f_oneway",
   "chi2_contingency",
   "pearsonr"
  ],
  "a": 1,
  "e": "3집단 이상 평균 비교 → 일원 ANOVA."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "anova_lm 결과표의 p-value 컬럼명은?",
  "c": [
   "PR(>F)",
   "p_value",
   "P>|t|",
   "pval"
  ],
  "a": 0,
  "e": "컬럼: df, sum_sq, mean_sq, F, PR(>F)."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "ols 수식에서 1·2·3 으로 코딩된 숫자형 집단 변수 g 를 요인으로 처리하는 것은?",
  "c": [
   "'y ~ g'",
   "'y ~ g - 1'",
   "'y ~ I(g)'",
   "'y ~ C(g)'"
  ],
  "a": 3,
  "e": "C(g) 로 감싸야 더미 요인. 'y ~ g' 는 기울기 1개짜리 회귀가 된다."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "3집단 각 5명(총 15명) 일원 ANOVA 의 집단간 / 집단내 자유도는?",
  "c": [
   "3 / 15",
   "2 / 14",
   "3 / 12",
   "2 / 12"
  ],
  "a": 3,
  "e": "집단간 k−1=2, 집단내 N−k=12."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "ANOVA 기각 후 어느 집단 쌍이 다른지 확인하는 함수는?",
  "c": [
   "pairwise_tukeyhsd",
   "anova_lm",
   "f_oneway",
   "levene"
  ],
  "a": 0,
  "e": "statsmodels.stats.multicomp.pairwise_tukeyhsd — reject 열 확인."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 3,
  "q": "Tukey HSD 결과가 다음과 같을 때 유의한 차이가 있는 쌍을 모두 고른 것은?\nA-B p-adj 0.0008 reject True\nA-C p-adj 0.198  reject False\nB-C p-adj 0.02   reject True",
  "c": [
   "A-B",
   "A-B, B-C",
   "A-C",
   "모든 쌍"
  ],
  "a": 1,
  "e": "reject=True 인 A-B, B-C 만 유의. A-C 는 차이를 입증하지 못함."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 3,
  "q": "pandas 3 환경에서 table = anova_lm(model) 의 F 값을 안전하게 꺼내는 코드는?",
  "c": [
   "table['F'][0]",
   "table['F'].iloc[0]",
   "table.F(0)",
   "table['F']['0']"
  ],
  "a": 1,
  "e": "인덱스가 'C(g)'·'Residual' 문자열이라 [0] 은 KeyError. .iloc[0] 또는 .loc['C(g)','F']."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "일원 ANOVA 의 F 통계량 계산식은?",
  "c": [
   "SS집단내 / SS집단간",
   "SS전체 / df전체",
   "MS집단간 / MS집단내",
   "MS집단내 / MS집단간"
  ],
  "a": 2,
  "e": "F = MS_between / MS_within. 예제 46.0667 / 3.5667 = 12.9159."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "두 범주형 변수의 독립성 검정 함수는?",
  "c": [
   "kruskal",
   "f_oneway",
   "chisquare",
   "chi2_contingency"
  ],
  "a": 3,
  "e": "교차표 → chi2_contingency. chisquare 는 적합도."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "3×4 교차표 카이제곱 독립성 검정의 자유도는?",
  "c": [
   "12",
   "7",
   "6",
   "11"
  ],
  "a": 2,
  "e": "(3−1)×(4−1)=6."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "chi2_contingency 의 correction 인자 설명으로 옳은 것은?",
  "c": [
   "자유도 1인 표(2×2)에만 Yates 연속성 보정이 적용된다",
   "기본값은 False 이다",
   "3×3 표에도 보정이 적용된다",
   "p-value 를 2 로 나눈다"
  ],
  "a": 0,
  "e": "기본 True, dof=1 일 때만 적용. 2×3 표는 보정 여부와 결과 동일."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "교차표 [[30,20],[15,35]] 에 chi2_contingency(ct) 를 기본값으로 실행한 χ²(소수 4자리)는?",
  "c": [
   "9.0909",
   "5.1000",
   "10.0513",
   "7.9192"
  ],
  "a": 3,
  "e": "기본 Yates 보정 → 7.9192 (p 0.0049). correction=False 면 9.0909."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "주사위 120회 관측빈도 obs=[22,17,20,26,13,22] 의 균등분포 적합도 검정 코드는?",
  "c": [
   "stats.chi2_contingency(obs)",
   "stats.ttest_1samp(obs, 20)",
   "stats.chisquare(obs)",
   "stats.kruskal(obs)"
  ],
  "a": 2,
  "e": "f_exp 생략 시 균등(각 20). χ²=5.1, p=0.4038 → 기각 실패."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "독립 2집단 비모수 검정은?",
  "c": [
   "wilcoxon",
   "kruskal",
   "shapiro",
   "mannwhitneyu"
  ],
  "a": 3,
  "e": "Mann-Whitney U. wilcoxon 은 대응, kruskal 은 3집단 이상."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "3집단 이상 비교의 비모수 검정은?",
  "c": [
   "kruskal",
   "mannwhitneyu",
   "wilcoxon",
   "levene"
  ],
  "a": 0,
  "e": "Kruskal-Wallis H 검정 — 일원 ANOVA 대안."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 3,
  "q": "기대빈도 5 미만 셀이 많은 2×2 교차표에서 쓸 수 있는 대안은?",
  "c": [
   "stats.chisquare",
   "stats.fisher_exact",
   "stats.levene",
   "stats.ttest_ind"
  ],
  "a": 1,
  "e": "피셔 정확검정. 예 [[30,20],[15,35]] → OR 3.5, p 0.0046."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 3,
  "q": "전·후 8쌍 자료에 wilcoxon(before, after) 양측은 W=1.0, alternative='greater' 는 W=35.0 이 나왔다. 이유로 옳은 것은?",
  "c": [
   "계산 오류이다",
   "양측은 min(W+, W−), 단측은 W+ 를 통계량으로 보고한다",
   "단측은 순위를 2배 한다",
   "greater 는 대응을 무시한다"
  ],
  "a": 1,
  "e": "scipy wilcoxon 은 양측에서 min(W+, W−), 단측에서 W+ 를 반환. p 는 0.0156 / 0.0078."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "pearsonr 의 반환 순서는?",
  "c": [
   "(p, r)",
   "(t, p, r)",
   "(r, p, n)",
   "(r, p)"
  ],
  "a": 3,
  "e": "r, p = stats.pearsonr(x, y)."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "순위형(서열) 데이터 두 변수의 상관에 적합한 함수는?",
  "c": [
   "pearsonr",
   "ttest_rel",
   "chisquare",
   "spearmanr"
  ],
  "a": 3,
  "e": "스피어만 순위상관 — 비정규·단조 관계."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "statsmodels ols 에서 모형 전체 유의성(F검정) p-value 속성은?",
  "c": [
   "model.f_pvalue",
   "model.pvalues",
   "model.fvalue",
   "model.rsquared_adj"
  ],
  "a": 0,
  "e": "f_pvalue = 모형 전체, pvalues = 개별 계수."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "단순회귀 score = 48.7515 + 3.3152·hours 에서 model.predict 로 구한 hours=12 예측값(소수 4자리)은?",
  "c": [
   "52.0667",
   "88.5333",
   "91.2000",
   "39.7824"
  ],
  "a": 1,
  "e": "predict 결과 88.5333. 반올림 계수로 손계산하면 88.5339 — 오차 방지 위해 predict 사용."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "로지스틱 회귀 age 계수가 0.3039 일 때 오즈비(소수 4자리)는?",
  "c": [
   "0.3039",
   "0.5754",
   "1.3551",
   "20.8742"
  ],
  "a": 2,
  "e": "np.exp(0.30385)=1.3551 → 나이 1세 증가 시 오즈 1.3551배. 20.8742 는 10세 증가."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 3,
  "q": "statsmodels Logit 결과에서 잔차이탈도(residual deviance) 계산은?",
  "c": [
   "model.llf",
   "-2 * model.llnull",
   "model.prsquared",
   "-2 * model.llf"
  ],
  "a": 3,
  "e": "잔차이탈도 = −2·llf (예 10.3383). −2·llnull 은 영이탈도(27.7259)."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 3,
  "q": "다중회귀 sales ~ ad + price 결과 price 계수 −0.716, p=0.2246 이다. 옳은 해석은?",
  "c": [
   "price 는 sales 에 유의한 음의 영향을 준다",
   "유의수준 0.05에서 price 계수가 0 이라는 H₀ 를 기각하지 못한다",
   "모형 전체가 유의하지 않다",
   "price 는 sales 와 상관이 0 임이 증명되었다"
  ],
  "a": 1,
  "e": "개별 계수 p ≥ 0.05 → 기각 실패. 모형 전체 유의성은 f_pvalue 로 따로 판단."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "단순선형회귀에서 결정계수 R² 와 피어슨 r 의 관계는?",
  "c": [
   "R² = r",
   "R² = 1 − r",
   "R² = r²",
   "관계 없음"
  ],
  "a": 2,
  "e": "단순회귀에서 R² = r². 예 0.9079² ≈ 0.8242."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 3,
  "q": "sm.OLS(y, X).fit() 행렬 API 사용 시 필수 처리는?",
  "c": [
   "sm.add_constant(X) 로 절편 열 추가",
   "X 를 C() 로 감싸기",
   "fit(disp=0) 지정",
   "data= 인자 지정"
  ],
  "a": 0,
  "e": "행렬 API 는 절편 자동 포함이 아니다. formula ols 는 자동 포함."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 1,
  "q": "06 자료 기준 제2유형(40점) 권장 풀이 시간은?",
  "c": [
   "40분",
   "60분",
   "80분",
   "100분"
  ],
  "a": 2,
  "e": "제2유형 80분 — 배점 최대, 제출 형식 오류가 0점 유발."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 1,
  "q": "권장 시간 배분에서 마지막 여유 시간의 용도로 가장 적절한 것은?",
  "c": [
   "전체 재실행·제출 파일 확인·반올림 검수",
   "새 모델 하이퍼파라미터 튜닝",
   "R로 재풀이",
   "라이브러리 설치"
  ],
  "a": 0,
  "e": "마지막 20분 = 전체 재실행·제출 파일 확인·반올림 검수."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 2,
  "q": "제1유형 문항 하나가 15분을 넘겨도 풀리지 않을 때 06 자료의 권장 행동은?",
  "c": [
   "끝까지 붙잡는다",
   "코드를 모두 지우고 빈 답 제출",
   "부분 답안을 출력하고 다음 문항으로 넘어간다",
   "제2유형 시간을 줄여 계속 푼다"
  ],
  "a": 2,
  "e": "원칙 2 — 문항당 15분 초과 시 부분 답안 출력 후 이동."
 },
 {
  "s": "s5",
  "t": "득점 전략",
  "d": 1,
  "q": "00 개요의 '안정 합격' 시나리오 구성은?",
  "c": [
   "제1유형 30 + 제3유형 30",
   "제2유형 40 + 제3유형 15",
   "제3유형 30 + 제2유형 일부",
   "제2유형 40 + 제1유형 30"
  ],
  "a": 3,
  "e": "제2유형 템플릿 암기(40) + 제1유형 정답(30) = 70점."
 },
 {
  "s": "s5",
  "t": "득점 전략",
  "d": 2,
  "q": "제2유형에서 자료가 제시하는 득점 우선순위로 옳은 것은?",
  "c": [
   "최신 앙상블로 성능 극대화",
   "제출 형식 정확성 → 결측·인코딩 처리 → 성능 향상",
   "하이퍼파라미터 탐색 → 제출",
   "EDA 시각화 → 제출"
  ],
  "a": 1,
  "e": "02 §10 — 우선순위 1 제출 형식, 2 결측·인코딩, 3 성능."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 1,
  "q": "다음 코드의 출력은?\nimport pandas as pd\ndf = pd.DataFrame({'id':[1,2], 'pred':[0.3,0.7]})\nprint(df.to_csv().splitlines()[0])",
  "c": [
   "id,pred",
   ",id,pred",
   "0,id,pred",
   "index,id,pred"
  ],
  "a": 1,
  "e": "to_csv 기본 index=True → 헤더 앞에 이름 없는 인덱스 열이 붙어 ',id,pred'."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 1,
  "q": "print(int(3.9)) 의 출력은?",
  "c": [
   "4",
   "3.9",
   "3",
   "오류"
  ],
  "a": 2,
  "e": "int()는 소수점 버림(절사) → 3. 반올림은 round."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "print(round(2.5), round(3.5)) 의 출력은?",
  "c": [
   "3 4",
   "2 4",
   "2 3",
   "3 3"
  ],
  "a": 1,
  "e": "Python round는 짝수 쪽 반올림(banker's rounding) → 2, 4."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "print(round(3.14159, 0)) 의 출력은?",
  "c": [
   "3",
   "3.1",
   "3.14",
   "3.0"
  ],
  "a": 3,
  "e": "ndigits=0을 주면 float 반환 → 3.0. round(3.14159)는 int 3."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "ROC-AUC로 채점하는 이진 분류 제출 파일의 예측 열로 적절한 것은?",
  "c": [
   "model.predict(X_test)",
   "model.predict_proba(X_test)[:, 0]",
   "model.predict_proba(X_test)[:, 1]",
   "model.score(X_test, y_test)"
  ],
  "a": 2,
  "e": "양성 클래스 확률 열 [:,1] 제출. 0/1 레이블 제출 시 감점·0점 위험."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 3,
  "q": "제출 직전 확인 절차로 가장 적절하지 않은 것은?",
  "c": [
   "pd.read_csv('result.csv')로 재로딩",
   "shape의 행 수가 test 행 수와 같은지 확인",
   "확률 열이 0~1 범위인지 head()로 확인",
   "제출 파일 행 수가 train 행 수와 같은지 확인"
  ],
  "a": 3,
  "e": "행 수는 test와 같아야 한다(len(result)==len(test))."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "다음 코드의 출력은?\nimport numpy as np, pandas as pd\ns = pd.Series([1,2,3,4])\nprint(round(s.std(),3), round(np.std(s.values),3))",
  "c": [
   "1.118 1.118",
   "1.291 1.291",
   "1.291 1.118",
   "1.118 1.291"
  ],
  "a": 2,
  "e": "pandas std ddof=1 → 1.291, np.std 기본 ddof=0 → 1.118."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "StandardScaler가 표준편차 계산에 사용하는 ddof는?",
  "c": [
   "0",
   "1",
   "n-1",
   "데이터에 따라 자동"
  ],
  "a": 0,
  "e": "StandardScaler는 모집단 표준편차(ddof=0). pandas std(ddof=1) 수식과 미세 차이."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 1,
  "q": "스케일러 사용법으로 옳은 것은?",
  "c": [
   "train·test 각각 fit_transform",
   "test fit, train transform",
   "train fit_transform, test transform",
   "test만 fit_transform"
  ],
  "a": 2,
  "e": "fit은 train에만 — test에 fit하면 데이터 누수·기준 불일치."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 3,
  "q": "train 범주 ['a','b','c'], test 범주 ['a','d']를 각각 pd.get_dummies 했을 때 test를 train 컬럼에 맞추는 코드는?",
  "c": [
   "X_test = X_test[X_train.columns]",
   "X_test = X_test.reindex(columns=X_train.columns, fill_value=0)",
   "X_test = pd.concat([X_train, X_test])",
   "X_test = X_test.fillna(0)"
  ],
  "a": 1,
  "e": "reindex로 train에 없는 열(g_d) 제거, 없는 열(g_b, g_c)은 0. [] 선택은 KeyError."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "train으로 fit한 LabelEncoder로 test의 새 범주를 transform하면?",
  "c": [
   "새 번호 자동 부여",
   "NaN 반환",
   "-1 반환",
   "ValueError 발생"
  ],
  "a": 3,
  "e": "unseen label → ValueError. 시험에선 train·test concat 후 일괄 인코딩이 안전."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "sklearn 신버전(예: 1.9)에서 mean_squared_error(y, pred, squared=False) 실행 결과는?",
  "c": [
   "RMSE 반환",
   "MSE 반환",
   "TypeError",
   "경고 후 RMSE"
  ],
  "a": 2,
  "e": "squared 인자 제거 → unexpected keyword TypeError. np.sqrt(mean_squared_error(...))가 버전 무관 안전."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "지문이 \"신약 투여군(A)의 평균이 대조군(B)보다 크다고 할 수 있는가\"일 때 올바른 호출은?",
  "c": [
   "stats.ttest_ind(A, B, alternative='greater')",
   "stats.ttest_ind(A, B)",
   "stats.ttest_ind(A, B, alternative='less')",
   "stats.ttest_rel(A, B)"
  ],
  "a": 0,
  "e": "\"A가 B보다 크다\" → 단측 alternative='greater'(첫 인자 기준)."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 3,
  "q": "a=[5,6,7,8,9], b=[3,4,5,6,7]에서 stats.ttest_ind(a,b)의 p-value가 0.0805일 때, alternative='greater'의 p-value(소수 4자리)는?",
  "c": [
   "0.0805",
   "0.0403",
   "0.1610",
   "0.9597"
  ],
  "a": 1,
  "e": "t=2.0>0으로 방향 일치 → 양측 p의 절반 0.0403. 'less'면 0.9597."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 1,
  "q": "chi2_contingency의 올바른 입력은?",
  "c": [
   "원본 DataFrame 전체",
   "두 컬럼 Series 각각",
   "평균 벡터",
   "pd.crosstab으로 만든 교차표"
  ],
  "a": 3,
  "e": "교차표(관측 빈도표) 입력. raw 데이터 전달 시 TypeError 등 오류."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "p-value = 0.12 (유의수준 0.05)일 때 결론 서술로 옳은 것은?",
  "c": [
   "귀무가설 기각 실패, 유의한 차이 없음",
   "귀무가설 기각, 유의한 차이 있음",
   "귀무가설이 참임이 증명됨",
   "대립가설 채택"
  ],
  "a": 0,
  "e": "p ≥ α → 기각 실패. 귀무가설 '증명'은 아님."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "다음 코드 실행 결과는?\ndf[df['A'] > 1 & df['B'] < 5]",
  "c": [
   "A>1이고 B<5인 행",
   "A>1 또는 B<5인 행",
   "빈 DataFrame",
   "ValueError(모호한 진리값)"
  ],
  "a": 3,
  "e": "& 가 비교보다 우선 → 1 & df['B']가 먼저 계산되고 연쇄 비교에서 ValueError. 각 조건 괄호 필수."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "pandas 3.x에서 df['c'].fillna(0, inplace=True) 실행 후 df['c']의 결측은?",
  "c": [
   "모두 0으로 채워짐",
   "그대로 남음(원본 미반영, 경고)",
   "열이 삭제됨",
   "오류로 중단"
  ],
  "a": 1,
  "e": "Copy-on-Write로 chained inplace는 원본 미반영(ChainedAssignmentError 경고). df['c'] = df['c'].fillna(0) 재할당."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 1,
  "q": "인터넷이 차단된 시험장에서 stats.ttest_ind의 alternative 옵션을 확인하는 방법은?",
  "c": [
   "pip show scipy",
   "import this",
   "stats.ttest_ind.version",
   "help(stats.ttest_ind)"
  ],
  "a": 3,
  "e": "help(함수)로 시그니처·파라미터 확인. dir(객체)로 메서드 목록."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 2,
  "q": "StandardScaler 클래스가 가진 메서드 목록을 출력하는 코드는?",
  "c": [
   "print(dir(StandardScaler))",
   "help.list(StandardScaler)",
   "StandardScaler.methods()",
   "print(StandardScaler.__all__)"
  ],
  "a": 0,
  "e": "dir(객체) — 속성·메서드 이름 목록."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 2,
  "q": "한글 CSV를 utf-8로 읽다 UnicodeDecodeError가 날 때 먼저 시도할 인자는?",
  "c": [
   "sep=';'",
   "header=None",
   "encoding='cp949'",
   "engine='c'"
  ],
  "a": 2,
  "e": "스니펫 3 — encoding='cp949' 또는 'euc-kr'."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "빅데이터분석기사 실기는 전 문항 작업형으로 180분 동안 진행된다.",
  "a": true,
  "e": "작업형 3유형 / 180분."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "실기 합격 기준은 100점 만점 70점 이상이다.",
  "a": false,
  "e": "60점 이상 합격."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제2유형은 1문항 40점으로 단일 문항 중 배점이 가장 크다.",
  "a": true,
  "e": "제2유형 1×40=40점."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제1유형은 2문항 × 15점으로 구성된다.",
  "a": false,
  "e": "제1유형은 3문항 × 10점. 2×15는 제3유형."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "시험 중에는 인터넷 검색이 차단되어 help()와 dir()로 정보를 확인해야 한다.",
  "a": true,
  "e": "인터넷 차단 — help/dir만 참고."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "시험 환경에서 부족한 라이브러리는 pip install로 설치해 사용할 수 있다.",
  "a": false,
  "e": "외부 라이브러리 설치 불가, 제공 패키지만."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "Python과 R 중 응시자가 언어를 선택할 수 있다.",
  "a": true,
  "e": "Python·R 선택, 한 언어 통일 권장."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제2유형 결과 파일은 to_csv의 기본값(index=True)으로 저장하는 것이 권장된다.",
  "a": false,
  "e": "index=False로 저장해야 불필요한 인덱스 열이 생기지 않음."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "df.shape는 괄호 없이 쓰는 속성이다.",
  "a": true,
  "e": "shape·dtypes·columns는 속성."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "df.info는 괄호 없이 써도 컬럼 요약이 출력된다.",
  "a": false,
  "e": "info()는 메서드 — 괄호가 없으면 메서드 객체만 반환."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "value_counts()는 기본적으로 빈도 내림차순으로 정렬된다.",
  "a": true,
  "e": "sort=True 기본, normalize=True면 비율."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "Series.map(dict)에서 사전에 없는 값은 원래 값이 그대로 유지된다.",
  "a": false,
  "e": "매핑 안 된 값은 NaN."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "df.loc[0:2]는 라벨 2를 포함한다.",
  "a": true,
  "e": "loc 슬라이스는 끝 라벨 포함."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "df.iloc[0:3]은 위치 0, 1, 2, 3의 4개 행을 반환한다.",
  "a": false,
  "e": "iloc 끝 미포함 → 0, 1, 2의 3행."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "df[(df['a'] > 1) and (df['b'] < 5)]는 정상적으로 두 조건을 모두 만족하는 행을 반환한다.",
  "a": false,
  "e": "Series에 and 사용 시 ValueError(진리값 모호). & 사용."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 3,
  "q": "df['a'] == np.nan 으로 결측 행을 찾을 수 있다.",
  "a": false,
  "e": "NaN != NaN → 항상 False. isnull()/isna()."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "df['a']는 Series, df[['a']]는 DataFrame을 반환한다.",
  "a": true,
  "e": "이중 대괄호는 컬럼 리스트 선택 → DataFrame."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "groupby(...)['v'].transform('mean')의 결과 길이는 원본 DataFrame 행 수와 같다.",
  "a": true,
  "e": "transform은 행 수 유지."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 3,
  "q": "groupby의 count()는 결측값을 포함한 행 수를 센다.",
  "a": false,
  "e": "count는 NaN 제외. NaN 포함 행 수는 size()."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "pd.merge에서 how를 지정하지 않으면 inner join이 수행된다.",
  "a": true,
  "e": "기본 how='inner'."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "pd.concat([df1, df2])는 기본적으로 인덱스를 0부터 새로 매긴다.",
  "a": false,
  "e": "원래 인덱스 유지 — ignore_index=True 필요."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "dt.dayofweek 값 0은 월요일을 의미한다.",
  "a": true,
  "e": "0=월 ~ 6=일."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "문자열 열에도 pd.to_datetime 변환 없이 .dt.year를 바로 쓸 수 있다.",
  "a": false,
  "e": "AttributeError — 먼저 pd.to_datetime."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 2,
  "q": "np.linspace(0, 1, 5)는 끝값 1을 포함한 5개 값을 만든다.",
  "a": true,
  "e": "0, 0.25, 0.5, 0.75, 1.0."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 3,
  "q": "np.std와 pandas Series.std는 기본 ddof가 같아 항상 같은 값을 준다.",
  "a": false,
  "e": "np.std ddof=0, Series.std ddof=1."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 1,
  "q": "df.isna() 와 df.isnull() 은 같은 결과를 반환한다.",
  "a": true,
  "e": "isna 는 isnull 의 별칭."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 1,
  "q": "Series.mean() 은 기본적으로 결측치를 제외하고 평균을 계산한다.",
  "a": true,
  "e": "skipna=True 기본."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "결측치를 평균으로 대체하면 표준편차는 커진다.",
  "a": false,
  "e": "편차 0 인 값이 추가돼 표준편차는 작아짐."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "mode() 는 최빈값이 여러 개면 모두 Series 로 반환한다.",
  "a": true,
  "e": "오름차순 Series → [0] 은 가장 작은 최빈값."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "df.dropna(thresh=2) 는 결측치가 2개 이상인 행을 제거한다.",
  "a": false,
  "e": "유효값(비결측)이 2개 미만인 행을 제거."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 3,
  "q": "groupby(...).transform('mean') 결과는 원본과 같은 인덱스를 가져 fillna 에 바로 넣을 수 있다.",
  "a": true,
  "e": "행 단위로 정렬되어 대체."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 1,
  "q": "IQR 은 Q3 − Q1 이다.",
  "a": true,
  "e": "사분위 범위."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "clip(lo, up) 을 적용하면 범위 밖 행이 삭제되어 행 수가 줄어든다.",
  "a": false,
  "e": "경계값으로 대체, 행 수 유지."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "df[df['c'] > 1 & df['c'] < 5] 는 괄호 없이도 의도대로 동작한다.",
  "a": false,
  "e": "& 가 비교연산보다 먼저 계산됨 → 괄호 필수."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 3,
  "q": "같은 데이터라도 표준편차 ddof 를 0 과 1 중 무엇으로 쓰느냐에 따라 Z-score 이상치 개수가 달라질 수 있다.",
  "a": true,
  "e": "ddof=1 이면 σ 가 커져 |z| 가 작아짐."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 1,
  "q": "pandas quantile() 의 기본 보간 방식은 선형(linear) 이다.",
  "a": true,
  "e": "interpolation='linear'."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 1,
  "q": "Min-Max 정규화 후 최댓값은 1, 최솟값은 0 이 된다.",
  "a": true,
  "e": "(x−min)/(max−min)."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "StandardScaler 와 (x − mean) / s.std() 수식 결과는 정확히 같다.",
  "a": false,
  "e": "StandardScaler ddof=0, pandas std ddof=1."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "StandardScaler().fit_transform(df[['x']]) 의 결과는 numpy 2차원 배열이다.",
  "a": true,
  "e": "(n, 1) 배열 → 한 컬럼 대입 가능."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 3,
  "q": "표준화(z-score) 변환 후에도 값들의 대소 순서는 유지된다.",
  "a": true,
  "e": "양의 상수로 나누는 선형 변환 → 순위 불변."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "groupby('g')['v'].sum() 결과의 인덱스는 그룹 이름이다.",
  "a": true,
  "e": "grp['A'] 로 접근."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "groupby 는 기본적으로 그룹 키가 NaN 인 행도 별도 그룹으로 집계한다.",
  "a": false,
  "e": "기본 dropna=True → 제외. dropna=False 로 포함."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "dt.dayofweek 에서 일요일은 0 이다.",
  "a": false,
  "e": "0=월, 6=일."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "두 datetime 컬럼의 차에 .dt.days 를 쓰면 일수 정수가 나온다.",
  "a": true,
  "e": "Timedelta → days."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 3,
  "q": "value_counts() 결과는 기본적으로 빈도 내림차순으로 정렬된다.",
  "a": true,
  "e": "sort=True 기본."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 1,
  "q": "sort_values 의 기본 정렬 방향은 내림차순이다.",
  "a": false,
  "e": "기본 ascending=True(오름차순)."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "sort_values 후 iloc[0] 은 정렬된 첫 행, loc[0] 은 원래 라벨 0 행이다.",
  "a": true,
  "e": "iloc 위치, loc 라벨."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "rank(method='dense') 는 동점 다음 순위를 건너뛴다.",
  "a": false,
  "e": "dense 는 건너뛰지 않음(1,2,2,3). 건너뛰는 건 min(1,2,2,4)."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 3,
  "q": "상위 N개 값을 교체할 때 정렬된 복사본만 수정하면 원본 df 에도 반영된다.",
  "a": false,
  "e": "원본 인덱스로 df.loc[idx, c] = v 대입 필요."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "numpy np.var(배열) 의 기본 ddof 는 0 이다.",
  "a": true,
  "e": "모분산."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "pandas kurt() 는 정규분포 기준 3 을 반환하는 일반 첨도다.",
  "a": false,
  "e": "초과첨도 → 정규분포 ≈ 0."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "파이썬 round(0.5) 의 결과는 1 이다.",
  "a": false,
  "e": "은행원 반올림 → 0."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "제1유형은 출력 값이 정답과 정확히 일치해야 점수를 받는다(부분점수 없음).",
  "a": true,
  "e": "자릿수·타입까지 지시 준수. [근거: 01 §0]"
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "제2유형 test.csv 에는 타깃 컬럼이 없다.",
  "a": true,
  "e": "피처만 존재."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "제2유형은 결과를 print 로 출력하면 되고 파일 제출은 필요 없다.",
  "a": false,
  "e": "result CSV 파일 제출."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "타깃이 연속 수치면 RandomForestRegressor 를 사용한다.",
  "a": true,
  "e": "회귀 모델."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "검증셋 점수가 좋으면 전체 train 으로 재학습할 필요가 전혀 없다.",
  "a": false,
  "e": "재학습이 일반적으로 권장(데이터 100% 활용)."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "회귀 타깃 분포 확인에는 describe() 가 적합하다.",
  "a": true,
  "e": "평균·최소·최대·사분위."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 1,
  "q": "결측치가 남아 있어도 RandomForest 는 항상 문제없이 학습된다.",
  "a": false,
  "e": "sklearn 1.4 미만 RF나 로지스틱·SVM 등은 NaN 오류 — fillna가 안전."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "LabelEncoder 는 컬럼마다 새로 생성하는 것이 안전하다.",
  "a": true,
  "e": "classes_ 덮어쓰기 방지."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "get_dummies 를 train·test 에 따로 적용하면 항상 같은 컬럼이 만들어진다.",
  "a": false,
  "e": "범주 구성이 다르면 불일치."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "reindex(columns=X_train.columns, fill_value=0) 는 test 에만 있는 더미 컬럼을 제거한다.",
  "a": true,
  "e": "train 기준 외 컬럼은 버려짐."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "StandardScaler 는 test 데이터에도 fit 해야 정확하다.",
  "a": false,
  "e": "누수 — transform만."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "pandas 3.0 에서는 문자열 컬럼의 기본 dtype 이 str(StringDtype) 이다.",
  "a": true,
  "e": "dtype=='object' 분기 주의."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "ID 컬럼은 train 에서만 지우고 test 에는 남겨도 된다.",
  "a": false,
  "e": "양쪽 동일 제거 — 컬럼 수 일치."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "결합 전처리 후 X_all.iloc[n_train:] 은 test 부분이다.",
  "a": true,
  "e": "뒤쪽이 test."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 1,
  "q": "회귀 모델에도 predict_proba 메서드가 있다.",
  "a": false,
  "e": "분류 전용."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "SVC 의 probability 기본값은 False 이다.",
  "a": true,
  "e": "predict_proba 쓰려면 True."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "트리 기반 모델은 피처 스케일링 여부에 예측이 크게 좌우된다.",
  "a": false,
  "e": "분할 기준은 순서만 사용."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 3,
  "q": "로그 변환 타깃으로 학습한 회귀 예측은 np.expm1 로 되돌려 제출한다.",
  "a": true,
  "e": "log1p ↔ expm1."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 1,
  "q": "ROC-AUC 는 예측 레이블(0/1)로 계산하는 것이 정석이다.",
  "a": false,
  "e": "확률 입력."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "sklearn 1.6 이상에서 mean_squared_error(..., squared=False) 는 TypeError 를 낸다.",
  "a": true,
  "e": "squared 인자 제거."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "RMSE 는 클수록 좋은 지표다.",
  "a": false,
  "e": "작을수록 좋음."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "다중분류에서 f1_score 기본 average='binary' 는 오류를 낸다.",
  "a": true,
  "e": "macro/weighted 지정."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 3,
  "q": "R² 는 음수가 될 수 없다.",
  "a": false,
  "e": "평균 예측보다 나쁘면 음수."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 1,
  "q": "random_state 를 고정하면 실행마다 같은 분할·모델 결과를 얻는다.",
  "a": true,
  "e": "재현성."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 2,
  "q": "회귀 문제에서도 stratify=y 를 넣는 것이 권장된다.",
  "a": false,
  "e": "분류 전용."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 3,
  "q": "cross_val_score 의 'neg_root_mean_squared_error' 결과는 음수로 반환된다.",
  "a": true,
  "e": "부호 반전해 해석."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 1,
  "q": "to_csv 의 index 기본값은 True 이다.",
  "a": true,
  "e": "그래서 index=False 명시."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 2,
  "q": "제출 컬럼명은 대소문자를 구분하지 않으므로 'Pred' 로 써도 된다.",
  "a": false,
  "e": "지시 문자열 그대로."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 2,
  "q": "result.csv 의 행 수는 test.csv 행 수와 같아야 한다.",
  "a": true,
  "e": "행 탈락 금지."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "p-value ≥ 0.05 이면 귀무가설이 참임이 증명된다.",
  "a": false,
  "e": "기각 실패 = 증거 부족. H₀ 증명 아님."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "유의수준 α 는 1종 오류를 범할 최대 허용 확률이다.",
  "a": true,
  "e": "참인 H₀ 를 기각할 확률 상한."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "scipy t검정 함수의 alternative 기본값은 'two-sided' 이다.",
  "a": true,
  "e": "양측이 기본."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "p-value 는 귀무가설이 참일 확률이다.",
  "a": false,
  "e": "H₀ 가 참이라는 가정 하에 관측값 이상 극단 결과가 나올 확률."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "chi2_contingency 는 (통계량, p) 두 값만 반환한다.",
  "a": false,
  "e": "chi2, p, dof, expected 4개."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 1,
  "q": "shapiro p=0.52 이면 정규성 가정을 기각하지 않는다.",
  "a": true,
  "e": "p ≥ 0.05 → 정규성 유지."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 1,
  "q": "levene p < 0.05 이면 ttest_ind 에 equal_var=True 를 둔다.",
  "a": false,
  "e": "이분산 → equal_var=False (Welch)."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "ttest_ind 의 equal_var 기본값은 True 이다.",
  "a": true,
  "e": "기본 Student t — levene 로 확인 필요."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 3,
  "q": "bartlett 검정은 levene 보다 정규성 이탈에 민감하다.",
  "a": true,
  "e": "bartlett 은 정규성 가정 의존."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "ttest_rel 은 두 배열 길이가 달라도 실행된다.",
  "a": false,
  "e": "쌍 단위라 길이가 같아야 한다 — 다르면 오류."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "대응표본 t검정은 차이값에 대한 μ₀=0 일표본 t검정과 결과가 같다.",
  "a": true,
  "e": "ttest_rel(b, a) ≡ ttest_1samp(b − a, 0)."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "ttest_rel(after, before, alternative='greater') 는 '처리 후 감소'를 검정한다.",
  "a": false,
  "e": "after > before = 증가 검정. 감소는 (before, after, 'greater') 또는 (after, before, 'less')."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "일표본 t검정의 자유도는 n − 1 이다.",
  "a": true,
  "e": "표본 n 개 → df n−1."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "Welch t검정은 두 집단 분산이 같다고 가정한다.",
  "a": false,
  "e": "Welch 는 이분산 허용 (equal_var=False)."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "ANOVA 에서 H₀ 를 기각하면 모든 집단 평균이 서로 다르다는 뜻이다.",
  "a": false,
  "e": "적어도 하나 다름 — 쌍은 사후검정."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "f_oneway 는 집단별 데이터를 각각 인자로 넣는다.",
  "a": true,
  "e": "f_oneway(a, b, c) 또는 f_oneway(*groups)."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 3,
  "q": "문자열 범주 컬럼은 ols 수식에서 C() 없이도 범주형으로 처리된다.",
  "a": true,
  "e": "patsy 가 문자열을 범주로 인식(예제 F 12.9159 동일). 숫자 코드는 C() 필수 — 명시가 안전."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "3집단 평균 비교에 t검정을 3회 반복하면 1종 오류가 누적된다.",
  "a": true,
  "e": "다중비교 문제 → ANOVA."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "Tukey 결과 reject=False 인 쌍은 평균이 같음이 입증된 것이다.",
  "a": false,
  "e": "차이를 입증하지 못한 것일 뿐."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "chi2_contingency 에는 원본 두 컬럼을 그대로 넣는다.",
  "a": false,
  "e": "pd.crosstab 교차표를 넣는다."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "chisquare 에서 f_exp 를 생략하면 균등 기대빈도를 사용한다.",
  "a": true,
  "e": "범주별 평균 빈도."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 3,
  "q": "2×3 교차표에서는 correction=True 여도 Yates 보정이 적용되지 않는다.",
  "a": true,
  "e": "보정은 dof=1 일 때만. 예 2×3 χ² 10.0513 동일."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "mannwhitneyu 는 대응표본 비모수 검정이다.",
  "a": false,
  "e": "독립 2집단. 대응은 wilcoxon."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "kruskal 은 일원 ANOVA 의 비모수 대안이다.",
  "a": true,
  "e": "Kruskal-Wallis H 검정."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "피어슨 상관이 유의하면 인과관계가 입증된다.",
  "a": false,
  "e": "상관 ≠ 인과."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "ols('y ~ x', data=df) formula 방식은 절편을 자동 포함한다.",
  "a": true,
  "e": "sm.OLS 행렬 API 만 add_constant 필요."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "로지스틱 회귀 계수는 그대로 오즈비로 해석한다.",
  "a": false,
  "e": "계수 = 로그오즈 → np.exp 해야 오즈비."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "statsmodels Logit 결과의 predict 는 0/1 클래스를 반환한다.",
  "a": false,
  "e": "확률을 반환 — 클래스는 (p ≥ 0.5) 로 직접 변환."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "수정 R² 는 변수를 추가하면 항상 증가한다.",
  "a": false,
  "e": "설명력 없는 변수 추가 시 감소 가능 (R² 는 감소하지 않음)."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "model.pvalues['x'] 는 x 계수에 대한 t검정 p-value 이다.",
  "a": true,
  "e": "OLS 개별 계수 t검정 (Logit 은 z)."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 1,
  "q": "06 자료의 권장 배분에서 제1·제3유형은 각각 40분이다.",
  "a": true,
  "e": "제1 40분, 제3 40분, 제2 80분, 검토 20분."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 1,
  "q": "권장 시간 배분은 180분 전부를 풀이에 쓰도록 설계되어 있다.",
  "a": false,
  "e": "풀이 160분 + 여유 20분(검토·재제출)."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 2,
  "q": "제1유형은 부분 점수가 있으므로 한 문항을 끝까지 다듬는 것이 유리하다.",
  "a": false,
  "e": "부분 점수 없음(정확 일치 10점) → 15분 초과 시 넘어가기."
 },
 {
  "s": "s5",
  "t": "득점 전략",
  "d": 1,
  "q": "06 자료는 완벽한 RandomForest보다 제출 가능한 LogisticRegression이 고득점이라고 강조한다.",
  "a": true,
  "e": "원칙 1 — 제출 파일이 채점기에 읽히는 것이 우선."
 },
 {
  "s": "s5",
  "t": "득점 전략",
  "d": 2,
  "q": "제2유형 제출이 실패하면 나머지 유형을 모두 맞혀도 최대 60점이다.",
  "a": true,
  "e": "제1 30 + 제3 30 = 60점 — 한 문항만 틀려도 불합격."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 1,
  "q": "DataFrame.to_csv의 index 기본값은 False이다.",
  "a": false,
  "e": "기본 True → index=False 명시."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 1,
  "q": "클라우드 IDE 채점에서는 print()로 명시 출력하는 것이 안전하다.",
  "a": true,
  "e": "변수만 쓰면 채점 화면에 미표시 가능."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "round(3.14159)의 결과 자료형은 int이다.",
  "a": true,
  "e": "ndigits 생략 시 int 3, round(x, 0)은 float 3.0."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "int(-3.9)의 결과는 -4이다.",
  "a": false,
  "e": "int는 0 방향 절사 → -3. 내림(floor)은 np.floor → -4."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "제출 컬럼명은 대소문자가 달라도 채점기가 인식한다.",
  "a": false,
  "e": "'Pred' vs 'pred' 구분 — 지시 그대로 복사."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "pandas의 var()는 기본적으로 표본분산(ddof=1)을 계산한다.",
  "a": true,
  "e": "pandas std·var 기본 ddof=1."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 1,
  "q": "test 데이터에도 scaler.fit_transform을 적용해야 스케일이 맞는다.",
  "a": false,
  "e": "test는 transform만 — fit은 train 기준."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "2×2 교차표에 chi2_contingency를 쓰면 기본적으로 Yates 연속성 보정이 적용된다.",
  "a": true,
  "e": "correction=True 기본. 보정 미적용 지시 시 correction=False."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "scipy의 ttest_ind는 기본적으로 단측 검정을 수행한다.",
  "a": false,
  "e": "기본 alternative='two-sided'."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "ID 컬럼은 수치형이면 학습 피처에 포함해도 무방하다.",
  "a": false,
  "e": "ID는 의미 없는 식별자 → 과적합·오류 원인, drop 후 별도 보관."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 3,
  "q": "test.csv의 결측 행을 dropna로 지우면 제출 행 수가 test와 달라질 수 있다.",
  "a": true,
  "e": "test 행 삭제 금지 — fillna로 대체."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 1,
  "q": "시험장에서는 help()와 dir()로 함수 인자와 메서드를 확인할 수 있다.",
  "a": true,
  "e": "인터넷 차단 대비 핵심 도구."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 2,
  "q": "np.sqrt(mean_squared_error(y, pred))는 sklearn 버전에 따라 오류가 날 수 있다.",
  "a": false,
  "e": "버전 무관 안전한 RMSE 계산법. 버전 의존은 squared=False 쪽."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "실기 합격 기준 점수(100점 만점)는?",
  "a": "60점",
  "k": [
   "60"
  ],
  "e": "100점 만점 60점 이상."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "실기 시험 총 시간(분)은?",
  "a": "180분",
  "k": [
   "180"
  ],
  "e": "작업형 3유형 180분."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "제2유형의 배점은?",
  "a": "40점",
  "k": [
   "40"
  ],
  "e": "1문항 40점."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제1유형 문항 수는?",
  "a": "3문항",
  "k": [
   "3"
  ],
  "e": "3문항 × 10점 = 30점."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제3유형 한 문항의 배점은?",
  "a": "15점",
  "k": [
   "15"
  ],
  "e": "2문항 × 15점."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "시험 중 함수 설명서를 보는 Python 내장 함수는? (함수명만)",
  "a": "help",
  "k": [
   "help"
  ],
  "e": "help(pd.read_csv)."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "객체의 속성·메서드 이름 목록을 반환하는 Python 내장 함수는? (함수명만)",
  "a": "dir",
  "k": [
   "dir"
  ],
  "e": "dir(df)."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "제1·3유형 결과를 화면에 명시적으로 출력하는 함수는? (함수명만)",
  "a": "print",
  "k": [
   "print"
  ],
  "e": "변수만 쓰면 미표시 위험."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "to_csv로 저장할 때 인덱스 열을 제외하는 인자는? (인자=값)",
  "a": "index=False",
  "k": [
   "index=false"
  ],
  "e": "제2유형 제출 필수 인자."
 },
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 2,
  "q": "제3유형이 신설된 회차는? (숫자만)",
  "a": "6회",
  "k": [
   "6"
  ],
  "e": "6회(2023)부터 제3유형 신설."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "CSV 파일을 DataFrame으로 읽는 pandas 함수는? (pd. 생략)",
  "a": "read_csv",
  "k": [
   "read_csv"
  ],
  "e": "pd.read_csv(path)."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "한글 CSV 읽기 오류 시 read_csv의 encoding에 주로 넣는 값은?",
  "a": "cp949",
  "k": [
   "cp949"
  ],
  "e": "Windows 한글 인코딩. euc-kr도 시도 가능."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "헤더 없는 CSV를 읽을 때 read_csv에 주는 인자는? (인자=값)",
  "a": "header=None",
  "k": [
   "header=none"
  ],
  "e": "첫 행을 데이터로 읽음."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "DataFrame의 (행, 열) 크기를 튜플로 주는 속성은?",
  "a": "shape",
  "k": [
   "shape"
  ],
  "e": "괄호 없는 속성."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "컬럼별 타입·결측 여부를 요약 출력하는 메서드는?",
  "a": "info",
  "k": [
   "info"
  ],
  "e": "df.info()."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "범주 값별 빈도를 세는 Series 메서드는?",
  "a": "value_counts",
  "k": [
   "value_counts"
  ],
  "e": "기본 빈도 내림차순."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "value_counts를 비율로 반환하게 하는 인자는? (인자=값)",
  "a": "normalize=True",
  "k": [
   "normalize=true"
  ],
  "e": "합이 1인 비율."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 1,
  "q": "컬럼별 고유값 개수를 세는 메서드는?",
  "a": "nunique",
  "k": [
   "nunique"
  ],
  "e": "NaN 제외가 기본."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "컬럼 타입을 int·float·str 등으로 바꾸는 메서드는?",
  "a": "astype",
  "k": [
   "astype"
  ],
  "e": "df['a'].astype(int)."
 },
 {
  "s": "s1",
  "t": "DataFrame 기초",
  "d": 2,
  "q": "컬럼명을 바꾸는 메서드는? (columns={'old':'new'} 인자 사용)",
  "a": "rename",
  "k": [
   "rename"
  ],
  "e": "df.rename(columns={...})."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 1,
  "q": "라벨(이름) 기준 인덱서는?",
  "a": "loc",
  "k": [
   "loc"
  ],
  "e": "끝 라벨 포함."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 1,
  "q": "정수 위치 기준 인덱서는?",
  "a": "iloc",
  "k": [
   "iloc"
  ],
  "e": "끝 위치 미포함."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "여러 값 중 하나에 해당하는지 판별하는 Series 메서드는?",
  "a": "isin",
  "k": [
   "isin"
  ],
  "e": "df[df['g'].isin(['A','B'])]."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "pandas 불리언 조건에서 NOT을 나타내는 연산자 기호는?",
  "a": "~",
  "k": [
   "~"
  ],
  "e": "df[~cond]."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "query 문자열에서 외부 변수 앞에 붙이는 기호는?",
  "a": "@",
  "k": [
   "@"
  ],
  "e": "df.query('a >= @th')."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "필터 후 기존 인덱스를 버리고 0부터 다시 매기는 코드는? (메서드(인자))",
  "a": "reset_index(drop=True)",
  "k": [
   "reset_index",
   "drop=true"
  ],
  "e": "drop=False면 기존 인덱스가 컬럼으로 추가."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 2,
  "q": "값 기준으로 정렬하는 메서드는?",
  "a": "sort_values",
  "k": [
   "sort_values"
  ],
  "e": "ascending=False 내림차순."
 },
 {
  "s": "s1",
  "t": "인덱싱·필터",
  "d": 3,
  "q": "rank에서 동점 뒤 순위를 건너뛰지 않는 method 값은?",
  "a": "dense",
  "k": [
   "dense"
  ],
  "e": "1,2,2,3."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "그룹 집계값을 원본 행 수 그대로 반환하는 groupby 메서드는?",
  "a": "transform",
  "k": [
   "transform"
  ],
  "e": "그룹 평균 대비 비교에 사용."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 3,
  "q": "groupby에서 NaN을 포함한 그룹별 행 수를 세는 메서드는?",
  "a": "size",
  "k": [
   "size"
  ],
  "e": "count는 NaN 제외."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "groupby 결과의 키를 인덱스 대신 컬럼으로 두는 groupby 인자는? (인자=값)",
  "a": "as_index=False",
  "k": [
   "as_index=false"
  ],
  "e": "또는 결과에 reset_index()."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "SQL JOIN처럼 키 기준으로 두 DataFrame을 결합하는 pandas 함수는? (pd. 생략)",
  "a": "merge",
  "k": [
   "merge"
  ],
  "e": "pd.merge(a, b, on='id', how='left')."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "pd.concat에서 인덱스를 0부터 새로 부여하는 인자는? (인자=값)",
  "a": "ignore_index=True",
  "k": [
   "ignore_index=true"
  ],
  "e": "기본은 원 인덱스 유지."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 3,
  "q": "merge 시 키 외 동일 컬럼명 v에 붙는 기본 접미사 두 개는? (예 _a, _b 형식)",
  "a": "_x, _y",
  "k": [
   "_x",
   "_y"
  ],
  "e": "suffixes 인자로 변경 가능."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "str.contains에서 NaN을 False로 처리하는 인자는? (인자=값)",
  "a": "na=False",
  "k": [
   "na=false"
  ],
  "e": "불리언 인덱싱 오류 방지."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "str.split 결과를 여러 컬럼 DataFrame으로 받는 인자는? (인자=값)",
  "a": "expand=True",
  "k": [
   "expand=true"
  ],
  "e": "str.split('-', expand=True)."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 1,
  "q": "문자열을 datetime으로 변환하는 pandas 함수는? (pd. 생략)",
  "a": "to_datetime",
  "k": [
   "to_datetime"
  ],
  "e": "변환 후 .dt 사용."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "to_datetime에서 변환 실패 값을 NaT로 만드는 errors 값은?",
  "a": "coerce",
  "k": [
   "coerce"
  ],
  "e": "errors='coerce'."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "datetime Series의 요소를 꺼내는 접근자는? (점 포함 두 글자)",
  "a": ".dt",
  "k": [
   "dt"
  ],
  "e": "df['d'].dt.month."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 2,
  "q": "조건에 따라 두 값 중 하나를 고르는 NumPy 함수는? (np. 생략)",
  "a": "where",
  "k": [
   "where"
  ],
  "e": "np.where(cond, a, b)."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 2,
  "q": "NaN을 무시하고 평균을 구하는 NumPy 함수는? (np. 생략)",
  "a": "nanmean",
  "k": [
   "nanmean"
  ],
  "e": "np.mean은 NaN 있으면 nan."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 3,
  "q": "np.std의 기본 ddof 값은? (숫자)",
  "a": "0",
  "k": [
   "0"
  ],
  "e": "모표준편차. pandas std는 1."
 },
 {
  "s": "s1",
  "t": "NumPy",
  "d": 2,
  "q": "배열 원소별 최댓값의 위치(인덱스)를 반환하는 NumPy 함수는? (np. 생략)",
  "a": "argmax",
  "k": [
   "argmax"
  ],
  "e": "np.argmax(arr)."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 1,
  "q": "isnull() 과 같은 기능을 하는 별칭 메서드 이름은?",
  "a": "isna",
  "k": [
   "isna"
  ],
  "e": "df.isna().sum() 도 동일."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 1,
  "q": "결측치를 지정한 값으로 채우는 pandas 메서드는?",
  "a": "fillna",
  "k": [
   "fillna"
  ],
  "e": "재할당과 함께 사용."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 1,
  "q": "결측치가 있는 행을 제거하는 pandas 메서드는?",
  "a": "dropna",
  "k": [
   "dropna"
  ],
  "e": "subset·thresh·axis 옵션."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "최빈값 Series 에서 첫 번째 값을 스칼라로 꺼내는 표현은? (df['c'].____)",
  "a": "mode()[0]",
  "k": [
   "mode()[0]"
  ],
  "e": "mode() 는 Series 반환."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "dropna 에서 \"유효값이 n개 미만인 행 제거\" 를 지정하는 파라미터는?",
  "a": "thresh",
  "k": [
   "thresh"
  ],
  "e": "df.dropna(thresh=3)."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "dropna 에서 특정 컬럼의 결측만 기준으로 삼는 파라미터는?",
  "a": "subset",
  "k": [
   "subset"
  ],
  "e": "df.dropna(subset=['age'])."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "그룹 통계를 원본 행 길이 그대로 돌려주어 그룹별 결측 대체에 쓰는 groupby 메서드는?",
  "a": "transform",
  "k": [
   "transform"
  ],
  "e": "groupby(g)[c].transform('mean')."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "결측치를 바로 앞(위) 행의 값으로 채우는 Series 메서드는?",
  "a": "ffill",
  "k": [
   "ffill"
  ],
  "e": "뒤 값은 bfill."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\ns = pd.Series([1, np.nan, 3, np.nan, 5])\nprint(s.isnull().mean())",
  "a": "0.4",
  "k": [
   "0.4"
  ],
  "e": "결측 2 / 전체 5."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 3,
  "q": "다음 코드의 출력은? (중앙값 대체 후 평균)\n\ns = pd.Series([2, np.nan, 4, 6])\ns = s.fillna(s.median())\nprint(s.mean())",
  "a": "4.0",
  "k": [
   "4.0"
  ],
  "e": "유효값 중앙값 4 → [2,4,4,6] 평균 4.0."
 },
 {
  "s": "s2",
  "t": "결측치",
  "d": 3,
  "q": "다음 코드의 출력은? (최빈값 대체 후 합계)\n\ns = pd.Series([1, 1, 3, 3, np.nan])\ns = s.fillna(s.mode()[0])\nprint(s.sum())",
  "a": "9.0",
  "k": [
   "9.0"
  ],
  "e": "최빈값 1·3 동률 → mode()[0]=1 → 1+1+3+3+1 = 9.0."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 1,
  "q": "IQR 을 Q1, Q3 로 나타내면? (기호로)",
  "a": "Q3-Q1",
  "k": [
   "q3-q1"
  ],
  "e": "사분위 범위."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 1,
  "q": "IQR 방식 상한 경계를 Q3, IQR 로 나타내면?",
  "a": "Q3+1.5*IQR",
  "k": [
   "q3+1.5"
  ],
  "e": "하한은 Q1−1.5×IQR."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 1,
  "q": "분위수(사분위수)를 구하는 pandas 메서드는?",
  "a": "quantile",
  "k": [
   "quantile"
  ],
  "e": "quantile(0.25) = Q1."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "범위 밖 값을 경계값으로 잘라 대체하는 pandas 메서드는?",
  "a": "clip",
  "k": [
   "clip"
  ],
  "e": "s.clip(lo, up)."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "Z-score 이상치 판정에서 관례적으로 쓰는 |z| 기준값은?",
  "a": "3",
  "k": [
   "3"
  ],
  "e": "문제가 다른 값을 지정하면 그 값."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "다음 코드의 출력은?\n\ns = pd.Series(range(1, 9))\nprint(s.quantile(0.75) - s.quantile(0.25))",
  "a": "3.5",
  "k": [
   "3.5"
  ],
  "e": "Q1=2.75, Q3=6.25."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 3,
  "q": "다음 코드의 출력은? (IQR 이상치 제거 후 개수)\n\ns = pd.Series([52, 55, 58, 60, 61, 63, 65, 67, 70, 120, 15])\nq1, q3 = s.quantile(0.25), s.quantile(0.75)\niqr = q3 - q1\nprint(len(s[(s >= q1 - 1.5*iqr) & (s <= q3 + 1.5*iqr)]))",
  "a": "9",
  "k": [
   "9"
  ],
  "e": "Q1=56.5, Q3=66, 경계 42.25~80.25 → 15·120 제거."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "다음 코드의 출력은? (이상치 상한)\n\ns = pd.Series([52, 55, 58, 60, 61, 63, 65, 67, 70, 120, 15])\nq1, q3 = s.quantile(0.25), s.quantile(0.75)\nprint(q3 + 1.5 * (q3 - q1))",
  "a": "80.25",
  "k": [
   "80.25"
  ],
  "e": "66 + 1.5×9.5."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 1,
  "q": "Min-Max 정규화 수식의 분모는? (min, max 로)",
  "a": "max-min",
  "k": [
   "max-min"
  ],
  "e": "(x−min)/(max−min)."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 1,
  "q": "평균 0, 표준편차 1 로 변환하는 sklearn 클래스 이름은?",
  "a": "StandardScaler",
  "k": [
   "standardscaler"
  ],
  "e": "sklearn.preprocessing."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 1,
  "q": "0~1 범위로 변환하는 sklearn 클래스 이름은?",
  "a": "MinMaxScaler",
  "k": [
   "minmaxscaler"
  ],
  "e": "sklearn.preprocessing."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "StandardScaler 가 사용하는 표준편차의 ddof 값은?",
  "a": "0",
  "k": [
   "0"
  ],
  "e": "모표준편차."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "학습과 변환을 한 번에 수행하는 scaler 메서드 이름은?",
  "a": "fit_transform",
  "k": [
   "fit_transform"
  ],
  "e": "2차원 입력 df[[c]]."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 2,
  "q": "다음 코드의 출력은?\n\ns = pd.Series([10, 20, 50])\nprint(((s - s.min()) / (s.max() - s.min()))[1])",
  "a": "0.25",
  "k": [
   "0.25"
  ],
  "e": "(20−10)/(50−10)."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 3,
  "q": "다음 코드의 출력은? (모표준편차로 표준화)\n\ns = pd.Series([2, 4, 4, 4, 5, 5, 7, 9])\nz = (s - s.mean()) / s.std(ddof=0)\nprint(z.max())",
  "a": "2.0",
  "k": [
   "2.0"
  ],
  "e": "평균 5, σ(ddof=0)=2 → (9−5)/2."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 3,
  "q": "다음 코드의 출력은? (MinMaxScaler 후 0.5 초과 개수)\n\nimport pandas as pd\nfrom sklearn.preprocessing import MinMaxScaler\ndf = pd.DataFrame({'x': [0, 10, 20, 30, 40]})\nm = MinMaxScaler().fit_transform(df[['x']])\nprint((m > 0.5).sum())",
  "a": "2",
  "k": [
   "2"
  ],
  "e": "[0, 0.25, 0.5, 0.75, 1] → 0.5 초과 2개."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "groupby 결과에서 최댓값을 가진 그룹명(인덱스)을 반환하는 메서드는?",
  "a": "idxmax",
  "k": [
   "idxmax"
  ],
  "e": "max() 는 값."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "고유값별 빈도를 내림차순으로 세는 Series 메서드는?",
  "a": "value_counts",
  "k": [
   "value_counts"
  ],
  "e": "normalize=True 로 비율."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "value_counts 결과를 비율로 받는 옵션은? (인자=값)",
  "a": "normalize=True",
  "k": [
   "normalize=true"
  ],
  "e": "합계 1."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "컬럼별로 다른 집계 함수를 dict 로 지정하는 groupby 메서드는? (groupby('g').____({'A':'sum'}))",
  "a": "agg",
  "k": [
   "agg"
  ],
  "e": "aggregate 별칭."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "두 범주형 변수의 빈도 교차표를 만드는 pandas 함수는? (pd.____)",
  "a": "crosstab",
  "k": [
   "crosstab"
  ],
  "e": "pd.crosstab(df.a, df.b)."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "문자열 날짜를 datetime 으로 변환하는 pandas 함수는? (pd.____)",
  "a": "to_datetime",
  "k": [
   "to_datetime"
  ],
  "e": "변환 후 .dt 사용."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 1,
  "q": "datetime 컬럼에서 월을 꺼내는 접근 표현은? (df['d'].____)",
  "a": "dt.month",
  "k": [
   "dt.month"
  ],
  "e": "1~12 정수."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "두 datetime 컬럼 차(Series)에서 일수를 꺼내는 표현은? (차.dt.____)",
  "a": "days",
  "k": [
   "days"
  ],
  "e": "(end−start).dt.days."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "요일을 'Monday' 같은 영문 이름으로 반환하는 dt 메서드는?",
  "a": "day_name",
  "k": [
   "day_name"
  ],
  "e": "dt.day_name()."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "datetime 컬럼에서 분기(1~4)를 꺼내는 dt 속성은?",
  "a": "quarter",
  "k": [
   "quarter"
  ],
  "e": "dt.quarter."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nprint((pd.to_datetime('2023-03-01') - pd.to_datetime('2023-02-01')).days)",
  "a": "28",
  "k": [
   "28"
  ],
  "e": "2023년 2월은 28일."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 3,
  "q": "다음 코드의 출력은? (주말 방문 수)\n\nd = pd.to_datetime(pd.Series(['2024-01-01', '2024-01-02', '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-13', '2024-01-14']))\nprint((d.dt.dayofweek >= 5).sum())",
  "a": "4",
  "k": [
   "4"
  ],
  "e": "01-06·01-07·01-13·01-14 → dayofweek 5·6."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 3,
  "q": "다음 코드의 출력은? (그룹 평균보다 큰 행 수)\n\ndf = pd.DataFrame({'g': ['A', 'A', 'A', 'B', 'B'], 'v': [1, 2, 3, 10, 30]})\nprint((df['v'] > df.groupby('g')['v'].transform('mean')).sum())",
  "a": "2",
  "k": [
   "2"
  ],
  "e": "A 평균 2 → 3 / B 평균 20 → 30 → 2행."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 1,
  "q": "sort_values 에서 내림차순을 지정하는 인자는? (인자=값)",
  "a": "ascending=False",
  "k": [
   "ascending=false"
  ],
  "e": "기본 True."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 1,
  "q": "큰 값 상위 n개를 바로 뽑는 Series 메서드는?",
  "a": "nlargest",
  "k": [
   "nlargest"
  ],
  "e": "작은 값은 nsmallest."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "rank 에서 동점에 가장 작은 순위를 주고 다음 순위를 건너뛰는 method 값은?",
  "a": "min",
  "k": [
   "min"
  ],
  "e": "1,2,2,4."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "rank 에서 동점 후 순위를 건너뛰지 않는 method 값은?",
  "a": "dense",
  "k": [
   "dense"
  ],
  "e": "1,2,2,3."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "필터·정렬 후 기존 인덱스를 버리고 0부터 다시 매기는 코드는?",
  "a": "reset_index(drop=True)",
  "k": [
   "reset_index",
   "drop=true"
  ],
  "e": "drop=True 없으면 index 컬럼 생성."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 1,
  "q": "정수 위치 기반으로 행을 선택하는 인덱서는?",
  "a": "iloc",
  "k": [
   "iloc"
  ],
  "e": "loc 은 라벨 기반."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "다음 코드의 출력은?\n\ns = pd.Series([5, 9, 1, 7, 3, 8])\nprint(s.nlargest(3).iloc[-1])",
  "a": "7",
  "k": [
   "7"
  ],
  "e": "내림차순 9,8,7 → 3번째 7."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 3,
  "q": "다음 코드의 출력은?\n\nprint(pd.Series([10, 20, 20, 30]).rank(method='dense', ascending=False).tolist())",
  "a": "[3.0, 2.0, 2.0, 1.0]",
  "k": [
   "3.0,2.0,2.0,1.0"
  ],
  "e": "dense + 내림차순 → 30=1, 20=2, 10=3."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 3,
  "q": "다음 코드의 출력은? (상위 2개를 2번째 값으로 교체 후 합)\n\ndf = pd.DataFrame({'v': [5, 9, 1, 7, 3, 8]})\ntop = df['v'].sort_values(ascending=False)\ndf.loc[top.index[:2], 'v'] = top.iloc[1]\nprint(df['v'].sum())",
  "a": "32",
  "k": [
   "32"
  ],
  "e": "상위 2개(9, 8)를 2번째 값 8 로 교체 → [5,8,1,7,3,8] 합 32."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "pandas Series.std() 의 기본 ddof 값은?",
  "a": "1",
  "k": [
   "1"
  ],
  "e": "표본 표준편차."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "pandas 에서 모분산을 구하려면 var() 에 어떤 인자를 주는가? (인자=값)",
  "a": "ddof=0",
  "k": [
   "ddof=0"
  ],
  "e": "s.var(ddof=0)."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "왜도를 구하는 pandas 메서드는?",
  "a": "skew",
  "k": [
   "skew"
  ],
  "e": "> 0 오른쪽 꼬리."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "첨도를 구하는 pandas 메서드는? (축약형)",
  "a": "kurt",
  "k": [
   "kurt"
  ],
  "e": "kurtosis 별칭."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nprint(round(pd.Series([1, 2, 3, 4]).var(), 4))",
  "a": "1.6667",
  "k": [
   "1.6667"
  ],
  "e": "ddof=1 → 5/3."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "다음 코드의 출력은?\n\nprint(round(2.5))",
  "a": "2",
  "k": [
   "2"
  ],
  "e": "은행원 반올림."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "f-string 으로 x 를 소수 둘째 자리 고정 표기하는 형식 지정자는? (f'{x____}')",
  "a": ":.2f",
  "k": [
   ".2f"
  ],
  "e": "f'{0.6:.2f}' → 0.60."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "두 컬럼의 피어슨 상관계수를 구하는 pandas 메서드는?",
  "a": "corr",
  "k": [
   "corr"
  ],
  "e": "df['a'].corr(df['b'])."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "누적합을 구하는 Series 메서드는?",
  "a": "cumsum",
  "k": [
   "cumsum"
  ],
  "e": "누적 비율 = cumsum()/sum()."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 2,
  "q": "이전 행과의 차이를 구하는 Series 메서드는?",
  "a": "diff",
  "k": [
   "diff"
  ],
  "e": "첫 행은 NaN."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 3,
  "q": "값을 동일 개수(분위) 구간으로 나누는 pandas 함수는? (pd.____)",
  "a": "qcut",
  "k": [
   "qcut"
  ],
  "e": "동일 폭 구간은 pd.cut."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 3,
  "q": "다음 코드의 출력은? (대칭 데이터의 왜도)\n\nprint(round(pd.Series([1, 2, 3, 4, 5]).skew(), 2))",
  "a": "0.0",
  "k": [
   "0.0"
  ],
  "e": "평균 중심 좌우 대칭 → 왜도 0."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "제2유형 배점은 몇 점인가? (숫자)",
  "a": "40",
  "k": [
   "40"
  ],
  "e": "1문항 40점."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "CSV 파일을 DataFrame 으로 읽는 pandas 함수는?",
  "a": "pd.read_csv",
  "k": [
   "read_csv"
  ],
  "e": "train = pd.read_csv('train.csv')."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "분류 타깃 클래스별 빈도를 보는 Series 메서드는?",
  "a": "value_counts()",
  "k": [
   "value_counts"
  ],
  "e": "불균형 확인."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "컬럼별 결측 개수를 출력하는 코드는? (df 기준)",
  "a": "df.isnull().sum()",
  "k": [
   "isnull().sum()"
  ],
  "e": "isna().sum()도 동일."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "타깃 컬럼 'y' 를 train 에서 제외한 피처 X 를 만드는 코드는?",
  "a": "train.drop(columns=['y'])",
  "k": [
   "drop",
   "y"
  ],
  "e": "axis=1 방식도 가능."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "test 를 원본 보존한 채 복제해 X_test 로 쓰는 메서드는?",
  "a": "test.copy()",
  "k": [
   "copy()"
  ],
  "e": "타깃 drop 금지."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "회귀 타깃의 평균·범위를 한 번에 보는 메서드는?",
  "a": "describe()",
  "k": [
   "describe"
  ],
  "e": "회귀 EDA."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 2,
  "q": "train_test_split 을 import 하는 모듈은? (from ___ import train_test_split)",
  "a": "sklearn.model_selection",
  "k": [
   "sklearn.model_selection"
  ],
  "e": "model_selection 모듈."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 1,
  "q": "범주형을 정수로 바꾸는 sklearn 클래스 이름은?",
  "a": "LabelEncoder",
  "k": [
   "labelencoder"
  ],
  "e": "sklearn.preprocessing."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 1,
  "q": "pandas 원핫 인코딩 함수는?",
  "a": "pd.get_dummies",
  "k": [
   "get_dummies"
  ],
  "e": "columns=, drop_first=."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 1,
  "q": "Series 최빈값 첫 번째 값을 얻는 코드는? (s 기준)",
  "a": "s.mode()[0]",
  "k": [
   "mode()[0]"
  ],
  "e": "mode는 Series 반환."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "수치형 결측을 중앙값으로 채우는 코드는? (s 기준)",
  "a": "s.fillna(s.median())",
  "k": [
   "fillna",
   "median"
  ],
  "e": "이상치에 강함."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "train·test 를 세로로 합치는 pandas 함수는?",
  "a": "pd.concat",
  "k": [
   "concat"
  ],
  "e": "pd.concat([X_train, X_test])."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "결합 후 인덱스를 0부터 다시 매기고 기존 인덱스를 버리는 코드는?",
  "a": "reset_index(drop=True)",
  "k": [
   "reset_index",
   "drop=true"
  ],
  "e": "iloc 분리 전 정리."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "결합 X_all 에서 train 부분(n_train 행)을 꺼내는 코드는?",
  "a": "X_all.iloc[:n_train]",
  "k": [
   "iloc[:n_train]"
  ],
  "e": "앞부분 = train."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "test 더미 컬럼을 train 기준으로 맞추는 DataFrame 메서드는?",
  "a": "reindex",
  "k": [
   "reindex"
  ],
  "e": "reindex(columns=X_train.columns, fill_value=0)."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "reindex 로 새로 생긴 컬럼을 0으로 채우는 인자는?",
  "a": "fill_value=0",
  "k": [
   "fill_value=0"
  ],
  "e": "없는 더미 = 0."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "버전 무관하게 비수치(범주형) 컬럼을 고르는 코드는? (X 기준)",
  "a": "X.select_dtypes(exclude='number')",
  "k": [
   "select_dtypes",
   "exclude"
  ],
  "e": "pandas 3 str dtype 대응."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "평균 0·표준편차 1로 변환하는 sklearn 스케일러는?",
  "a": "StandardScaler",
  "k": [
   "standardscaler"
  ],
  "e": "z=(x-μ)/σ."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "0~1 범위로 변환하는 sklearn 스케일러는?",
  "a": "MinMaxScaler",
  "k": [
   "minmaxscaler"
  ],
  "e": "(x-min)/(max-min)."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "스케일러를 test 에 적용할 때 쓰는 메서드는?",
  "a": "transform",
  "k": [
   "transform"
  ],
  "e": "fit은 train만."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "test 에만 있는 범주를 train 에 fit 한 LabelEncoder 로 변환할 때 나는 오류 종류는?",
  "a": "ValueError",
  "k": [
   "valueerror"
  ],
  "e": "previously unseen labels."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "drop 할 컬럼이 없어도 오류를 내지 않게 하는 drop 인자는?",
  "a": "errors='ignore'",
  "k": [
   "errors",
   "ignore"
  ],
  "e": "drop(columns=..., errors='ignore')."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "문자열 날짜를 datetime 으로 바꾸는 pandas 함수는?",
  "a": "pd.to_datetime",
  "k": [
   "to_datetime"
  ],
  "e": "이후 .dt 접근자."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 3,
  "q": "SimpleImputer 에서 최빈값 대체 strategy 문자열은?",
  "a": "most_frequent",
  "k": [
   "most_frequent"
  ],
  "e": "mean/median/most_frequent/constant."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 1,
  "q": "랜덤포레스트 분류기 클래스 이름은?",
  "a": "RandomForestClassifier",
  "k": [
   "randomforestclassifier"
  ],
  "e": "sklearn.ensemble."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 1,
  "q": "랜덤포레스트 회귀 클래스 이름은?",
  "a": "RandomForestRegressor",
  "k": [
   "randomforestregressor"
  ],
  "e": "sklearn.ensemble."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 1,
  "q": "모델 학습 메서드는?",
  "a": "fit",
  "k": [
   "fit"
  ],
  "e": "model.fit(X_tr, y_tr)."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "RF 의 트리 개수 하이퍼파라미터는?",
  "a": "n_estimators",
  "k": [
   "n_estimators"
  ],
  "e": "기본 100."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "모든 CPU 코어를 쓰게 하는 인자는?",
  "a": "n_jobs=-1",
  "k": [
   "n_jobs=-1"
  ],
  "e": "속도 향상."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "SVC 에서 확률 예측을 켜는 인자는?",
  "a": "probability=True",
  "k": [
   "probability=true"
  ],
  "e": "기본 False."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 3,
  "q": "불균형 분류에서 소수 클래스에 가중을 주는 RF 인자와 값은?",
  "a": "class_weight='balanced'",
  "k": [
   "class_weight",
   "balanced"
  ],
  "e": "RF·로지스틱 공통."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 3,
  "q": "로그 변환 log1p 의 역변환 numpy 함수는?",
  "a": "np.expm1",
  "k": [
   "expm1"
  ],
  "e": "exp(x)-1."
 },
 {
  "s": "s3",
  "t": "모델 선택",
  "d": 2,
  "q": "LogisticRegression 수렴 경고를 줄이려 늘리는 인자는?",
  "a": "max_iter",
  "k": [
   "max_iter"
  ],
  "e": "max_iter=1000."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 1,
  "q": "분류 정확도 함수는?",
  "a": "accuracy_score",
  "k": [
   "accuracy_score"
  ],
  "e": "레이블 입력."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 1,
  "q": "ROC-AUC 계산 함수는?",
  "a": "roc_auc_score",
  "k": [
   "roc_auc_score"
  ],
  "e": "확률 입력."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 1,
  "q": "분류 확률을 반환하는 모델 메서드는?",
  "a": "predict_proba",
  "k": [
   "predict_proba"
  ],
  "e": "[:,1] 양성."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "predict_proba 결과에서 양성 확률 열을 고르는 인덱싱은?",
  "a": "[:, 1]",
  "k": [
   ":,1"
  ],
  "e": "두 번째 열."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "다중분류 F1 에서 클래스 단순평균을 지정하는 인자는?",
  "a": "average='macro'",
  "k": [
   "average",
   "macro"
  ],
  "e": "weighted는 support 가중."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "문자열 양성 클래스 'Yes' 를 지정하는 f1_score 인자는?",
  "a": "pos_label='Yes'",
  "k": [
   "pos_label"
  ],
  "e": "기본 pos_label=1."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "결정계수 R² 함수는?",
  "a": "r2_score",
  "k": [
   "r2_score"
  ],
  "e": "1에 가까울수록 좋음."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 2,
  "q": "MAE 함수는?",
  "a": "mean_absolute_error",
  "k": [
   "mean_absolute_error"
  ],
  "e": "절댓값 오차 평균."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 3,
  "q": "sklearn 1.4+ 에서 RMSE 를 바로 반환하는 함수는?",
  "a": "root_mean_squared_error",
  "k": [
   "root_mean_squared_error"
  ],
  "e": "squared=False 대체."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 3,
  "q": "버전 무관 RMSE 를 MSE 로부터 구할 때 감싸는 numpy 함수는?",
  "a": "np.sqrt",
  "k": [
   "sqrt"
  ],
  "e": "np.sqrt(mean_squared_error(y, p))."
 },
 {
  "s": "s3",
  "t": "평가지표",
  "d": 3,
  "q": "다중분류 roc_auc_score 에 필요한 인자와 값은? (one-vs-rest)",
  "a": "multi_class='ovr'",
  "k": [
   "multi_class",
   "ovr"
  ],
  "e": "확률 행렬 전체 입력."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 1,
  "q": "train_test_split 에서 검증 비율 20%를 지정하는 인자는?",
  "a": "test_size=0.2",
  "k": [
   "test_size=0.2"
  ],
  "e": "기본 0.25."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 2,
  "q": "클래스 비율 유지 분할 인자는? (y 기준)",
  "a": "stratify=y",
  "k": [
   "stratify"
  ],
  "e": "분류 전용."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 2,
  "q": "GridSearchCV 최적 파라미터 딕셔너리 속성은?",
  "a": "best_params_",
  "k": [
   "best_params_"
  ],
  "e": "best_score_, best_estimator_."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 3,
  "q": "클래스 비율을 유지하는 K-폴드 분할기 클래스는?",
  "a": "StratifiedKFold",
  "k": [
   "stratifiedkfold"
  ],
  "e": "n_splits, shuffle, random_state."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 1,
  "q": "DataFrame 을 CSV 로 저장하는 메서드는?",
  "a": "to_csv",
  "k": [
   "to_csv"
  ],
  "e": "index=False 동반."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 1,
  "q": "to_csv 에서 행번호를 빼는 인자와 값은?",
  "a": "index=False",
  "k": [
   "index=false"
  ],
  "e": "기본 True."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 3,
  "q": "제출 직전 결과 파일 행·열 수를 확인하는 DataFrame 속성은?",
  "a": "shape",
  "k": [
   "shape"
  ],
  "e": "(len(test), 컬럼 수)."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "p-value 가 유의수준보다 작을 때 귀무가설에 대한 판정은?",
  "a": "기각",
  "k": [
   "기각"
  ],
  "e": "p < α → H₀ 기각."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "scipy 검정에서 '크다' 방향 단측 대립가설의 alternative 값은?",
  "a": "'greater'",
  "k": [
   "greater"
  ],
  "e": "첫 인자가 크다."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "scipy 검정에서 '작다' 방향 단측 대립가설의 alternative 값은?",
  "a": "'less'",
  "k": [
   "less"
  ],
  "e": "첫 인자가 작다."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "양측검정을 뜻하는 alternative 기본값은?",
  "a": "'two-sided'",
  "k": [
   "two-sided"
  ],
  "e": "기본값."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "참인 귀무가설을 기각하는 오류는?",
  "a": "제1종 오류",
  "k": [
   "1종"
  ],
  "e": "α 로 통제."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "1 − β (거짓 H₀ 를 올바르게 기각할 확률)를 무엇이라 하는가?",
  "a": "검정력",
  "k": [
   "검정력"
  ],
  "e": "β = 2종 오류 확률."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "p 를 소수 4자리 문자열로 출력하는 f-string 서식 지정자는? print(f\"{p:____}\")",
  "a": ".4f",
  "k": [
   ".4f"
  ],
  "e": "round(p,4) 와 달리 0.0000 처럼 자리 고정."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "scipy 검정 결과 객체 res 에서 p-value 를 꺼내는 속성은? res.____",
  "a": "pvalue",
  "k": [
   "pvalue"
  ],
  "e": "res.statistic 과 짝."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 2,
  "q": "scipy 검정 결과 객체 res 에서 검정통계량을 꺼내는 속성은? res.____",
  "a": "statistic",
  "k": [
   "statistic"
  ],
  "e": "t·F·χ² 등."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 1,
  "q": "Shapiro-Wilk 정규성 검정 scipy 함수명은?",
  "a": "stats.shapiro",
  "k": [
   "shapiro"
  ],
  "e": "H₀: 정규분포."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 1,
  "q": "기본 center='median' 으로 동작하는 등분산 검정 함수는?",
  "a": "stats.levene",
  "k": [
   "levene"
  ],
  "e": "정규성 이탈에 강건."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "정규성을 가정하는 등분산 검정 함수는?",
  "a": "stats.bartlett",
  "k": [
   "bartlett"
  ],
  "e": "정규성 이탈에 민감."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 1,
  "q": "ttest_ind 에서 이분산일 때 지정할 인자와 값은?",
  "a": "equal_var=False",
  "k": [
   "equal_var=false"
  ],
  "e": "Welch t."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "equal_var=False 로 수행되는 t검정의 이름은?",
  "a": "Welch t검정",
  "k": [
   "welch"
  ],
  "e": "이분산 허용."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 2,
  "q": "대응표본 t검정 전 shapiro 는 어떤 값에 적용하는가?",
  "a": "전후 차이값 (before - after)",
  "k": [
   "차이"
  ],
  "e": "대응 t 는 차이의 1표본 t."
 },
 {
  "s": "s4",
  "t": "정규성·등분산",
  "d": 3,
  "q": "a=[82,75,90,68,85,79,88,73], b=[70,72,65,74,69,71,68,73] 에 대한 stats.levene(a, b) 의 p-value(소수 4자리)는?",
  "a": "0.0166",
  "k": [
   "0.0166"
  ],
  "e": "W=7.405 → 이분산 → Welch."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "1표본 t검정 scipy 함수명은?",
  "a": "stats.ttest_1samp",
  "k": [
   "ttest_1samp"
  ],
  "e": "(x, popmean)."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "독립 2표본 t검정 scipy 함수명은?",
  "a": "stats.ttest_ind",
  "k": [
   "ttest_ind"
  ],
  "e": "equal_var 주의."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "대응표본 t검정 scipy 함수명은?",
  "a": "stats.ttest_rel",
  "k": [
   "ttest_rel"
  ],
  "e": "같은 대상 전·후."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "stats.ttest_1samp(x, ____=50) 에서 기준값 인자명은?",
  "a": "popmean",
  "k": [
   "popmean"
  ],
  "e": "μ₀."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "x=[49.8,50.6,51.2,50.9,49.5,51.4,50.8,50.3,51.0,50.7] 을 stats.ttest_1samp(x, 50) 으로 검정한 t(소수 4자리)는?",
  "a": "3.2697",
  "k": [
   "3.2697"
  ],
  "e": "양측 p 0.0097."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "x=[49.8,50.6,51.2,50.9,49.5,51.4,50.8,50.3,51.0,50.7] 에 stats.ttest_1samp(x, 50, alternative='greater') 의 p(소수 4자리)는?",
  "a": "0.0048",
  "k": [
   "0.0048"
  ],
  "e": "t>0 방향 일치 → 0.0097/2."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "before=[72,80,65,90,77,84,69,75], after=[70,76,66,85,74,80,67,71] 의 stats.ttest_rel(before, after) t(소수 4자리)는?",
  "a": "4.3137",
  "k": [
   "4.3137"
  ],
  "e": "양측 p 0.0035."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "before=[72,80,65,90,77,84,69,75], after=[70,76,66,85,74,80,67,71] 에서 '감소' 단측 ttest_rel(before, after, alternative='greater') 의 p(소수 4자리)는?",
  "a": "0.0018",
  "k": [
   "0.0018"
  ],
  "e": "0.0035/2 근사 (정확값 0.0018)."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 1,
  "q": "표본 10개의 1표본 t검정 자유도는?",
  "a": "9",
  "k": [
   "9"
  ],
  "e": "n − 1."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 3,
  "q": "a=[82,75,90,68,85,79,88,73], b=[70,72,65,74,69,71,68,73] 의 Welch t검정 통계량(소수 4자리)은?",
  "a": "3.3601",
  "k": [
   "3.3601"
  ],
  "e": "n 같으면 Student·Welch t 값은 같고 df·p 만 다름 (p 0.0084)."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "일원 분산분석 scipy 함수명은?",
  "a": "stats.f_oneway",
  "k": [
   "f_oneway"
  ],
  "e": "(a, b, c)."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "statsmodels 에서 적합된 ols 모형으로 분산분석표를 만드는 함수는?",
  "a": "anova_lm",
  "k": [
   "anova_lm"
  ],
  "e": "from statsmodels.stats.anova import anova_lm."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "Tukey HSD 사후검정 statsmodels 함수명은?",
  "a": "pairwise_tukeyhsd",
  "k": [
   "pairwise_tukeyhsd"
  ],
  "e": "statsmodels.stats.multicomp."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "ols 수식에서 집단 변수를 범주형 요인으로 감싸는 표기는? (예: y ~ ___(g))",
  "a": "C(g)",
  "k": [
   "c("
  ],
  "e": "C(g). 답에 C( 를 포함해 쓰기."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "anova_lm 결과표에서 p-value 컬럼명은?",
  "a": "PR(>F)",
  "k": [
   "pr(>f)"
  ],
  "e": "F 다음 열."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "A=[23,25,21,24,22], B=[28,30,27,29,31], C=[22,27,25,24,28] 에 stats.f_oneway(A, B, C) 의 F(소수 4자리)는?",
  "a": "12.9159",
  "k": [
   "12.9159"
  ],
  "e": "MS 46.0667 / 3.5667."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "A=[23,25,21,24,22], B=[28,30,27,29,31], C=[22,27,25,24,28] 일원 ANOVA 의 p-value(소수 4자리)는?",
  "a": "0.0010",
  "k": [
   "0.001"
  ],
  "e": "p < 0.05 → 기각 → Tukey."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 1,
  "q": "pairwise_tukeyhsd 결과에서 유의 여부를 나타내는 컬럼명은?",
  "a": "reject",
  "k": [
   "reject"
  ],
  "e": "True = 유의한 차이."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "4집단 각 6명(총 24명) 일원 ANOVA 의 집단내(잔차) 자유도는?",
  "a": "20",
  "k": [
   "20"
  ],
  "e": "N − k = 24 − 4."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "리스트 groups 에 담긴 집단들을 f_oneway 에 넣는 코드는?",
  "a": "stats.f_oneway(*groups)",
  "k": [
   "*groups"
  ],
  "e": "언패킹 필수."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "카이제곱 독립성 검정 scipy 함수명은?",
  "a": "stats.chi2_contingency",
  "k": [
   "chi2_contingency"
  ],
  "e": "교차표 입력."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "카이제곱 적합도 검정 scipy 함수명은?",
  "a": "stats.chisquare",
  "k": [
   "chisquare"
  ],
  "e": "f_obs, f_exp."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "두 범주형 컬럼으로 교차표를 만드는 pandas 함수명은?",
  "a": "pd.crosstab",
  "k": [
   "crosstab"
  ],
  "e": "chi2_contingency 입력."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "chi2_contingency 에서 Yates 연속성 보정을 끄는 인자 설정은?",
  "a": "correction=False",
  "k": [
   "correction=false"
  ],
  "e": "기본 True, dof=1 에만 적용."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "교차표 [[30,20],[15,35]] 에 chi2_contingency(ct, correction=False) 의 χ²(소수 4자리)는?",
  "a": "9.0909",
  "k": [
   "9.0909"
  ],
  "e": "기본(보정) 7.9192."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "관측빈도 [22,17,20,26,13,22] 에 stats.chisquare 를 적용한 통계량(소수 4자리)은?",
  "a": "5.1",
  "k": [
   "5.1"
  ],
  "e": "p 0.4038 → 균등분포 기각 실패."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "대응표본 비모수 검정(부호순위) scipy 함수명은?",
  "a": "stats.wilcoxon",
  "k": [
   "wilcoxon"
  ],
  "e": "ttest_rel 대안."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "독립 2집단 비모수 검정 scipy 함수명은?",
  "a": "stats.mannwhitneyu",
  "k": [
   "mannwhitneyu"
  ],
  "e": "ttest_ind 대안."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "3집단 이상 비모수 검정 scipy 함수명은?",
  "a": "stats.kruskal",
  "k": [
   "kruskal"
  ],
  "e": "ANOVA 대안."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 2,
  "q": "기대빈도가 작은 2×2 교차표의 정확검정 scipy 함수명은?",
  "a": "stats.fisher_exact",
  "k": [
   "fisher_exact"
  ],
  "e": "카이제곱 근사 대신."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "2×2 교차표 카이제곱 독립성 검정의 자유도는?",
  "a": "1",
  "k": [
   "1"
  ],
  "e": "(2−1)(2−1)."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 3,
  "q": "a=[82,75,90,68,85,79,88,73], b=[70,72,65,74,69,71,68,73] 에 mannwhitneyu(a, b, alternative='two-sided') 의 U 통계량은?",
  "a": "56.0",
  "k": [
   "56"
  ],
  "e": "p 0.0134."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "피어슨 상관계수 scipy 함수명은?",
  "a": "stats.pearsonr",
  "k": [
   "pearsonr"
  ],
  "e": "(r, p)."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "스피어만 순위상관 scipy 함수명은?",
  "a": "stats.spearmanr",
  "k": [
   "spearmanr"
  ],
  "e": "비모수 상관."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "statsmodels formula API 선형회귀 함수명은? (from statsmodels.formula.api import ___)",
  "a": "ols",
  "k": [
   "ols"
  ],
  "e": "ols('y ~ x', data=df).fit()."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "statsmodels 회귀 결과에서 회귀계수 Series 속성은? model.____",
  "a": "params",
  "k": [
   "params"
  ],
  "e": "변수명 키 인덱싱."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "statsmodels OLS 결정계수 R² 속성은? model.____",
  "a": "rsquared",
  "k": [
   "rsquared"
  ],
  "e": "수정은 rsquared_adj."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "statsmodels formula API 로지스틱 회귀 함수명은?",
  "a": "logit",
  "k": [
   "logit"
  ],
  "e": "logit('y ~ x', data=df).fit()."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "로지스틱 회귀 결과 model 의 오즈비를 구하는 코드는?",
  "a": "np.exp(model.params)",
  "k": [
   "exp",
   "params"
  ],
  "e": "계수 = 로그오즈."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "hours=[2,3,4,5,6,7,8,9,10,11], score=[58,55,66,63,72,64,81,75,79,90] 의 피어슨 상관계수(소수 4자리)는?",
  "a": "0.9079",
  "k": [
   "0.9079"
  ],
  "e": "p 0.0003."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "hours=[2,3,4,5,6,7,8,9,10,11], score=[58,55,66,63,72,64,81,75,79,90] 로 ols('score ~ hours') 적합 시 R²(소수 4자리)는?",
  "a": "0.8242",
  "k": [
   "0.8242"
  ],
  "e": "= r² 근사."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "Logit 잔차이탈도 = (____) × model.llf 의 빈칸 숫자는?",
  "a": "-2",
  "k": [
   "-2"
  ],
  "e": "영이탈도는 −2 × llnull."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 2,
  "q": "statsmodels OLS 수정 결정계수 속성은? model.____",
  "a": "rsquared_adj",
  "k": [
   "rsquared_adj"
  ],
  "e": "변수 수 패널티."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 1,
  "q": "statsmodels 결과 객체로 새 데이터 예측값을 구하는 메서드는?",
  "a": "predict",
  "k": [
   "predict"
  ],
  "e": "DataFrame 입력, 컬럼명 일치."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 1,
  "q": "06 자료 권장 배분에서 제2유형 풀이 시간은 ____분이다.",
  "a": "80",
  "k": [
   "80"
  ],
  "e": "배점 40점 최대 → 80분."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 1,
  "q": "권장 배분에서 검토용으로 남겨두는 여유 시간은 ____분이다.",
  "a": "20",
  "k": [
   "20"
  ],
  "e": "마지막 20분 = 재실행·제출 확인·반올림 검수."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 2,
  "q": "제1유형 문항당 목표 시간은 약 ____분이다.",
  "a": "13",
  "k": [
   "13"
  ],
  "e": "40분 / 3문항 ≈ 13분, 상한 20분."
 },
 {
  "s": "s5",
  "t": "득점 전략",
  "d": 1,
  "q": "실기 합격 기준 점수는 100점 만점 ____점 이상이다.",
  "a": "60",
  "k": [
   "60"
  ],
  "e": "00 개요 — 60점 이상 합격."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 1,
  "q": "제출 파일에 행번호 열이 들어가지 않게 하는 to_csv 인자는?",
  "a": "index=False",
  "k": [
   "index=false"
  ],
  "e": "기본 index=True."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 1,
  "q": "채점 인식을 위해 결과값을 화면에 명시 출력하는 함수는?",
  "a": "print()",
  "k": [
   "print"
  ],
  "e": "변수만 작성 금지."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "result를 소수점 둘째 자리까지 반올림해 출력하는 코드는?",
  "a": "print(round(result, 2))",
  "k": [
   "print(round(result,2))"
  ],
  "e": "f-string f\"{result:.2f}\"도 가능."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "이진 분류 양성 확률을 구하는 코드: prob = model.________(X_test)[:, 1]",
  "a": "predict_proba",
  "k": [
   "predict_proba"
  ],
  "e": "ROC-AUC용 확률."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "제출 파일을 다시 읽어 확인하는 코드: chk = pd.________('result.csv')",
  "a": "read_csv",
  "k": [
   "read_csv"
  ],
  "e": "shape·columns·head 확인."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 1,
  "q": "df['c'].mode()는 Series를 반환하므로 첫 최빈값은 df['c'].____로 꺼낸다.",
  "a": "mode()[0]",
  "k": [
   "mode()[0]"
  ],
  "e": "fillna(df['c'].mode()[0])."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "np.std를 표본 표준편차로 계산하려면 지정할 인자는?",
  "a": "ddof=1",
  "k": [
   "ddof=1"
  ],
  "e": "numpy 기본 ddof=0."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "버전 무관하게 RMSE를 계산하는 코드: rmse = np.____(mean_squared_error(y, pred))",
  "a": "sqrt",
  "k": [
   "sqrt"
  ],
  "e": "squared=False는 버전 의존."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "\"A의 평균이 B보다 크다\" 단측 검정: stats.ttest_ind(A, B, alternative='____')",
  "a": "greater",
  "k": [
   "greater"
  ],
  "e": "작다는 'less'."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 1,
  "q": "chi2_contingency에 넣을 교차표를 만드는 pandas 함수는?",
  "a": "pd.crosstab",
  "k": [
   "crosstab"
  ],
  "e": "raw 데이터 입력 금지."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "chi2_contingency의 반환값 4개를 순서대로 쓰시오.",
  "a": "chi2, p, dof, expected",
  "k": [
   "chi2",
   "dof",
   "expected"
  ],
  "e": "chi2, p, dof, expected = stats.chi2_contingency(ct)."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 3,
  "q": "get_dummies 후 test 컬럼을 train에 맞추는 메서드: X_test.________(columns=X_train.columns, fill_value=0)",
  "a": "reindex",
  "k": [
   "reindex"
  ],
  "e": "없는 열 0, 남는 열 제거."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "독립표본 t검정 전 등분산 여부를 확인하는 scipy 함수는?",
  "a": "stats.levene",
  "k": [
   "levene"
  ],
  "e": "결과로 equal_var 결정."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 1,
  "q": "인터넷 차단 시 함수 파라미터를 확인하는 내장 함수는?",
  "a": "help()",
  "k": [
   "help"
  ],
  "e": "help(stats.ttest_ind)."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 1,
  "q": "객체의 메서드와 속성 이름 목록을 보는 내장 함수는?",
  "a": "dir()",
  "k": [
   "dir"
  ],
  "e": "print(dir(StandardScaler))."
 },
 {
  "s": "s5",
  "t": "암기 스니펫",
  "d": 2,
  "q": "한글 CSV 읽기 오류 시 시도하는 인자: encoding='____'",
  "a": "cp949",
  "k": [
   "cp949"
  ],
  "e": "또는 'euc-kr'."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "시험 구성·환경",
  "d": 1,
  "q": "제1유형 한 문항을 푸는 기본 흐름을 순서대로 배열하시오.",
  "steps": [
   "import pandas as pd 로 패키지 불러오기",
   "pd.read_csv로 지정 경로 데이터 읽기",
   "head()·info()로 컬럼·타입·결측 확인",
   "필터·집계 등 문제 지시 처리",
   "print(round(결과, 자릿수))로 출력"
  ],
  "e": "불러오기 → 읽기 → 탐색 → 처리 → 지시 형식으로 print. 출력이 없으면 채점 인식 불가 위험."
 },
 {
  "s": "s1",
  "t": "문자열·날짜",
  "d": 2,
  "q": "문자열 날짜 열에서 월별 매출 합계가 가장 큰 월을 구하는 순서를 배열하시오.",
  "steps": [
   "pd.to_datetime으로 날짜 열 변환",
   "dt.month로 월 컬럼 생성",
   "groupby('month')['amount'].sum()으로 월별 합계",
   "idxmax()로 최대 합계 월 추출",
   "print로 결과 출력"
  ],
  "e": ".dt는 변환 후에만 가능 → 월 추출 → 집계 → idxmax(키가 인덱스) → 출력."
 },
 {
  "s": "s1",
  "t": "집계·결합",
  "d": 2,
  "q": "두 테이블을 결합해 조건별 합계를 구하는 순서를 배열하시오.",
  "steps": [
   "두 DataFrame의 키 컬럼명·타입 확인",
   "pd.merge(on=키, how=...)로 결합",
   "isnull().sum()으로 매칭 실패(NaN) 확인",
   "불리언 조건으로 필터링",
   "대상 컬럼 sum() 후 print"
  ],
  "e": "키 확인 → 결합 → 결합 후 NaN 점검(left/outer) → 필터 → 집계·출력."
 },
 {
  "s": "s2",
  "t": "통계량·출력",
  "d": 1,
  "q": "작업형 제1유형 풀이 루틴을 순서대로 나열하시오.",
  "steps": [
   "read_csv 로 데이터 로드",
   "info()·isnull().sum() 으로 상태 파악",
   "결측치·이상치 처리(재할당)",
   "변환·파생 변수 생성",
   "필터·그룹·정렬로 집계",
   "round/int 맞춰 print() 출력"
  ],
  "e": "로드 → 파악 → 정제 → 파생 → 집계 → 출력."
 },
 {
  "s": "s2",
  "t": "이상치",
  "d": 2,
  "q": "IQR 방식 이상치 제거 후 평균을 구하는 순서를 나열하시오.",
  "steps": [
   "quantile(0.25)·quantile(0.75) 로 Q1·Q3 계산",
   "IQR = Q3 − Q1",
   "하한 Q1−1.5×IQR, 상한 Q3+1.5×IQR",
   "(>=하한) & (<=상한) 으로 df2 필터",
   "df2 기준 평균 계산 후 출력"
  ],
  "e": "통계량은 제거 후 df2 기준."
 },
 {
  "s": "s2",
  "t": "정렬·순위",
  "d": 2,
  "q": "\"상위 10개 값을 10번째 값으로 교체 후 조건 평균\" 문제의 풀이 순서를 나열하시오.",
  "steps": [
   "대상 컬럼 내림차순 정렬",
   "10번째 값 v = 정렬본.iloc[9]",
   "원본 df 의 상위 10개 인덱스 값을 v 로 교체",
   "조건 필터(예: age >= 80)",
   "평균 계산 후 print"
  ],
  "e": "교체는 원본 인덱스 기준 df.loc[idx, c] = v."
 },
 {
  "s": "s2",
  "t": "집계·날짜",
  "d": 2,
  "q": "날짜 컬럼으로 \"월별 합계 중 최댓값\" 을 구하는 순서를 나열하시오.",
  "steps": [
   "pd.to_datetime 으로 날짜형 변환",
   "dt.month 로 월 파생 컬럼 생성",
   "groupby('month') 로 그룹화",
   "['amount'].sum() 으로 월별 합계",
   ".max() 후 print"
  ],
  "e": "변환 전 .dt 사용 불가."
 },
 {
  "s": "s2",
  "t": "스케일링",
  "d": 1,
  "q": "sklearn StandardScaler 로 한 컬럼을 표준화하고 0 이상 비율을 구하는 순서를 나열하시오.",
  "steps": [
   "from sklearn.preprocessing import StandardScaler",
   "scaler = StandardScaler() 생성",
   "scaler.fit_transform(df[['c']]) 로 2차원 입력 변환",
   "결과를 df['z'] 에 대입",
   "(df['z'] >= 0).sum() / len(df) 계산 후 round 출력"
  ],
  "e": "입력은 2차원, 분모는 전체 행 수."
 },
 {
  "s": "s3",
  "t": "7단계 템플릿",
  "d": 1,
  "q": "제2유형 7단계 풀이 순서로 배열하시오.",
  "steps": [
   "데이터 로드(read_csv)",
   "EDA(shape·isnull·value_counts)",
   "전처리(ID 제거·결측·인코딩)",
   "검증 분리(train_test_split)",
   "모델 학습(fit)",
   "검증 평가(지표 확인)",
   "test 예측 → to_csv(index=False)"
  ],
  "e": "로·탐·전·분·학·평·제."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "train·test 결합 전처리 순서로 배열하시오.",
  "steps": [
   "ID·타깃 분리 및 제거",
   "pd.concat 으로 결합 후 n_train 기록",
   "결측치 대체(fillna)",
   "범주형 인코딩(LabelEncoder/get_dummies)",
   "iloc 로 train·test 재분리"
  ],
  "e": "결합 → 결측 → 인코딩 → 분리."
 },
 {
  "s": "s3",
  "t": "전처리·인코딩",
  "d": 2,
  "q": "get_dummies 를 따로 적용하는 방식의 순서로 배열하시오.",
  "steps": [
   "train·test 결측 대체(train 기준값)",
   "pd.get_dummies(X_train)",
   "pd.get_dummies(X_test)",
   "X_test.reindex(columns=X_train.columns, fill_value=0)",
   "모델 학습·예측"
  ],
  "e": "reindex가 정합 핵심."
 },
 {
  "s": "s3",
  "t": "튜닝·검증",
  "d": 3,
  "q": "GridSearchCV 튜닝 후 제출 흐름으로 배열하시오.",
  "steps": [
   "param_grid 정의",
   "GridSearchCV(model, param_grid, cv, scoring) 생성",
   "gs.fit(X_tr, y_tr)",
   "best_params_·best_score_ 확인",
   "검증셋으로 best_estimator_ 평가",
   "최적 파라미터로 전체 train 재학습 후 test 예측·저장"
  ],
  "e": "탐색 → 확인 → 재학습 → 제출."
 },
 {
  "s": "s3",
  "t": "제출 형식",
  "d": 1,
  "q": "제출 직전 점검 순서로 배열하시오.",
  "steps": [
   "pd.DataFrame({'pred': p}) 생성",
   "to_csv('result.csv', index=False) 저장",
   "pd.read_csv('result.csv') 로 다시 읽기",
   "shape·컬럼명 확인",
   "head()·isnull().sum() 으로 값·결측 확인"
  ],
  "e": "저장 후 다시 읽어 검수."
 },
 {
  "s": "s4",
  "t": "t검정",
  "d": 2,
  "q": "독립표본 t검정의 표준 절차를 순서대로 나열하시오.",
  "steps": [
   "가설 설정 (H₀: μ₁=μ₂, 양측/단측 판단)",
   "집단별 shapiro 정규성 확인",
   "levene 등분산 검정",
   "ttest_ind(a, b, equal_var=?) 실행",
   "p 와 α 비교 후 기각 여부 서술"
  ],
  "e": "정규성 위반이면 4단계 대신 mannwhitneyu."
 },
 {
  "s": "s4",
  "t": "분산분석",
  "d": 2,
  "q": "일원 분산분석 문제 풀이 순서를 나열하시오.",
  "steps": [
   "집단별 데이터 분리 또는 long 형식 정리",
   "정규성·등분산 확인",
   "f_oneway 또는 ols('y ~ C(g)') + anova_lm",
   "p < 0.05 면 pairwise_tukeyhsd 사후검정",
   "reject=True 쌍 해석"
  ],
  "e": "ANOVA 는 '어딘가 다름'까지만 — 쌍은 Tukey."
 },
 {
  "s": "s4",
  "t": "카이제곱·비모수",
  "d": 1,
  "q": "카이제곱 독립성 검정 코드 흐름을 순서대로 나열하시오.",
  "steps": [
   "pd.crosstab 으로 교차표 생성",
   "stats.chi2_contingency(ct) 호출",
   "chi2, p, dof, expected 4개 언패킹",
   "expected 5 미만 셀 비율 확인",
   "p 기준 독립 여부 판정"
  ],
  "e": "2×2 면 correction 지시 확인."
 },
 {
  "s": "s4",
  "t": "상관·회귀",
  "d": 3,
  "q": "로지스틱 회귀 소문항 풀이 순서를 나열하시오.",
  "steps": [
   "logit('y ~ x1 + x2', data=df).fit(disp=0)",
   "model.params 로 계수 확인",
   "np.exp(model.params) 로 오즈비",
   "model.pvalues 로 유의 변수 판정",
   "-2 * model.llf 로 잔차이탈도"
  ],
  "e": "predict 는 확률 반환."
 },
 {
  "s": "s4",
  "t": "가설·판정",
  "d": 1,
  "q": "제3유형 답안 작성 루틴을 순서대로 나열하시오.",
  "steps": [
   "지문에서 단측/양측·유의수준 확인",
   "상황에 맞는 검정 함수 선택",
   "(통계량, p) 언패킹",
   "round(값, 4) 등 지시 자릿수 적용",
   "소문항별 print 와 기각 여부 출력"
  ],
  "e": "출력 형식은 문제 지시 우선."
 },
 {
  "s": "s5",
  "t": "빈출 함정",
  "d": 2,
  "q": "제1유형 전처리 작업 순서를 바르게 나열하시오.",
  "steps": [
   "데이터 로드",
   "info()·isnull().sum()으로 결측 파악",
   "결측치 처리",
   "이상치 처리",
   "타입 변환·파생 변수",
   "집계·통계 계산",
   "print()로 최종 값 출력"
  ],
  "e": "01 §8 실수 10 — 결측 확인 전 연산 금지."
 },
 {
  "s": "s5",
  "t": "출력·제출 형식",
  "d": 2,
  "q": "제2유형 제출 직전 점검 순서를 바르게 나열하시오.",
  "steps": [
   "result.to_csv('지시 파일명', index=False)",
   "pd.read_csv로 제출 파일 재로딩",
   "shape로 test 행 수 일치 확인",
   "columns로 지시 컬럼명 확인",
   "head()로 값 범위(확률 0~1) 확인",
   "isnull().sum()으로 결측 없음 확인"
  ],
  "e": "02 §9 제출 직전 확인 코드."
 },
 {
  "s": "s5",
  "t": "시간 배분",
  "d": 1,
  "q": "06 자료 권장 배분표의 시간 사용 흐름을 표 순서대로 나열하시오.",
  "steps": [
   "제1유형 3문항 40분",
   "제2유형 모델링·제출 80분",
   "제3유형 2문항 40분",
   "전체 재실행·제출 파일·반올림 검수 20분"
  ],
  "e": "표 순서 기준. 실제 풀이 순서는 수험자 선택 가능."
 }
];

CPPG.selfcheck = [
 {
  "g": "1 환경·기초",
  "t": "유형별 문항 수·배점(30/40/30)과 180분·60점 합격 기준을 말할 수 있다"
 },
 {
  "g": "1 환경·기초",
  "t": "인터넷 차단 환경에서 help()·dir()로 함수 인자와 메서드를 찾아 쓸 수 있다"
 },
 {
  "g": "1 환경·기초",
  "t": "print 명시 출력과 to_csv(index=False) 제출 형식을 지켜 답안을 작성한다"
 },
 {
  "g": "1 환경·기초",
  "t": "loc·iloc 슬라이스 차이와 & | ~ 괄호 조건 필터를 실수 없이 작성한다"
 },
 {
  "g": "1 환경·기초",
  "t": "groupby·transform·merge·concat과 .str·.dt·NumPy 기초 함수를 help 없이 쓸 수 있다"
 },
 {
  "g": "2 제1유형",
  "t": "결측치를 평균·중앙값·최빈값(mode()[0])·그룹 평균(transform)으로 재할당 대체한다"
 },
 {
  "g": "2 제1유형",
  "t": "IQR 경계(Q1−1.5×IQR ~ Q3+1.5×IQR)로 이상치 개수·제거 후 통계량을 구한다"
 },
 {
  "g": "2 제1유형",
  "t": "Min-Max·표준화를 수식과 sklearn 으로 구현하고 ddof 차이를 설명한다"
 },
 {
  "g": "2 제1유형",
  "t": "groupby·필터·to_datetime 파생으로 그룹 최댓값과 그룹명(idxmax)을 구분해 출력한다"
 },
 {
  "g": "2 제1유형",
  "t": "상위 N개 값 교체·n번째 값·rank 동점 처리를 정확한 인덱스로 처리한다"
 },
 {
  "g": "2 제1유형",
  "t": "분산·표준편차(ddof)·왜도·첨도·분위수를 구하고 round/int 형식에 맞춰 print 한다"
 },
 {
  "g": "3 제2유형",
  "t": "타깃 형태와 평가지표로 이진·다중분류·회귀를 판단하고 Classifier/Regressor 를 고른다"
 },
 {
  "g": "3 제2유형",
  "t": "7단계 템플릿(로드→EDA→전처리→분리→학습→평가→제출)을 보지 않고 작성한다"
 },
 {
  "g": "3 제2유형",
  "t": "train·test 결합 후 결측 대체·인코딩하고 iloc 으로 재분리하거나 get_dummies 후 reindex 로 컬럼을 맞춘다"
 },
 {
  "g": "3 제2유형",
  "t": "ROC-AUC 는 predict_proba[:,1], 다중 F1 은 average='macro', RMSE 는 np.sqrt(MSE) 로 계산한다"
 },
 {
  "g": "3 제2유형",
  "t": "분류만 stratify 를 쓰고 스케일러는 train 에만 fit 해 데이터 누수를 막는다"
 },
 {
  "g": "3 제2유형",
  "t": "result.csv 를 index=False·지정 컬럼명·test 행 수로 저장하고 다시 읽어 검수한다"
 },
 {
  "g": "4 제3유형",
  "t": "상황(1표본·독립·대응·3집단↑·범주·상관·회귀)을 보고 검정 함수와 H₀ 를 바로 쓴다"
 },
 {
  "g": "4 제3유형",
  "t": "shapiro·levene 결과로 모수/비모수와 equal_var 를 결정한다"
 },
 {
  "g": "4 제3유형",
  "t": "'크다·감소' 지문을 alternative 와 인자 순서로 정확히 옮긴다"
 },
 {
  "g": "4 제3유형",
  "t": "chi2_contingency 4개 반환과 2×2 correction 차이를 설명한다"
 },
 {
  "g": "4 제3유형",
  "t": "ols+anova_lm 표와 Tukey reject 열을 읽고 해석한다"
 },
 {
  "g": "4 제3유형",
  "t": "ols 계수·p·R²·predict 와 logit 오즈비·잔차이탈도(−2·llf)를 코드로 뽑는다"
 },
 {
  "g": "5 함정·전략",
  "t": "180분 배분(제1 40·제2 80·제3 40·검토 20)과 문항당 시간 상한을 지키며 풀이 한다"
 },
 {
  "g": "5 함정·전략",
  "t": "print(round(값, n))·int() 버림·index=False·지시 컬럼명 등 출력·제출 형식을 매 문항 점검 한다"
 },
 {
  "g": "5 함정·전략",
  "t": "ddof·fit은 train만·인코딩 정합·단측 alternative·chi2 교차표 입력 함정을 코드에서 즉시 찾아 수정 한다"
 },
 {
  "g": "5 함정·전략",
  "t": "help()·dir()로 인자를 확인하고 암기 스니펫 10선을 보지 않고 작성 한다"
 }
];

CPPG.roadmap = {
 "4주 표준": [
  "Week 1 — pandas 기본 + 제1유형 패턴(04·01번 파일)",
  "Week 2 — 제2유형 모델링 템플릿 통째 암기(05·02번 파일)",
  "Week 3 — 제3유형 통계검정 함수(03번 파일)",
  "Week 4 — 기출 회독 + 제출 형식 반복 + 06번 함정 점검"
 ],
 "시험 3일 전": [
  "D-3 — 암기 스니펫 10선을 빈 셀에 보지 않고 작성, 막힌 함수는 help()로 확인 연습",
  "D-2 — 제2유형 템플릿 전체 실행 후 result.csv 재로딩 점검, 제3유형 검정 함수·반환값·alternative 정리",
  "D-1 — 함정 20선·출력 형식(print·round·int·index=False) 최종 점검, 180분 배분표 확인"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "제1유형 결측 처리 후 통계",
  "제1유형 조건 필터·그룹 집계",
  "제2유형 분류·회귀 모델 + CSV 제출",
  "제2유형 제출 형식(index=False·컬럼명)",
  "제3유형 t검정(독립·대응)",
  "제3유형 p-value 기각 판정 서술"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "IQR 이상치 제거 후 통계",
  "정렬 후 상위 n번째 값",
  "날짜 연산(월 추출·일수 차)",
  "범주형 인코딩·train/test 정합",
  "ROC-AUC·RMSE 평가지표",
  "카이제곱 독립성·적합도",
  "일원 ANOVA"
 ],
 "Tier 3 ★ (변별)": [
  "표준화 후 n번째 값(ddof 차이)",
  "파생 변수 → 비율 계산",
  "단측 검정 alternative",
  "등분산 검정 후 Welch t검정",
  "비모수 검정(Mann-Whitney·Wilcoxon)",
  "statsmodels 회귀·로지스틱 오즈비",
  "Tukey HSD 사후검정"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 1,
  "title": "[작업형1 스타일] 조건 필터 + 정렬 + 상위 합계",
  "problem": "다음 데이터에서 age가 30 이상이고 score가 75 이상인 사람 수를 구하고, 그중 score 상위 2명의 score 합계를 출력하시오.\n\nimport pandas as pd\ndf = pd.DataFrame({'name':['A','B','C','D','E','F'],\n                   'age':[25,32,41,29,35,50],\n                   'score':[88,72,95,64,81,77]})",
  "steps": [
   "두 조건을 각각 괄호로 감싸고 & 로 결합",
   "len()으로 조건 만족 행 수 계산",
   "sort_values('score', ascending=False).head(2)로 상위 2명",
   "score 열 sum() 후 print"
  ],
  "answer": "sub = df[(df['age'] >= 30) & (df['score'] >= 75)]\nprint(len(sub))   # 3 (C, E, F)\ntop = sub.sort_values('score', ascending=False).head(2)\nprint(top['score'].sum())   # 176 (C 95 + E 81)",
  "traps": [
   "and 사용 또는 괄호 누락 → 오류",
   "B(32세, 72점)는 score 조건 탈락 — 이상(>=) / 초과(>) 구분",
   "nlargest(2, 'score')로도 동일 결과"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "[작업형1 스타일] 부서 평균보다 급여가 높은 직원 수",
  "problem": "부서별 평균 급여보다 급여가 높은 직원 수를 출력하시오.\n\nimport pandas as pd\nemp = pd.DataFrame({'dept':['영업','영업','영업','개발','개발','인사','인사'],\n                    'salary':[300,420,360,500,440,280,320]})",
  "steps": [
   "groupby('dept')['salary'].transform('mean')으로 행마다 부서 평균 부여",
   "salary > dept_avg 불리언 Series 생성",
   "True 개수를 sum()으로 계산",
   "print로 출력"
  ],
  "answer": "emp['dept_avg'] = emp.groupby('dept')['salary'].transform('mean')\n# 영업 360, 개발 470, 인사 300\nprint((emp['salary'] > emp['dept_avg']).sum())   # 3 (420, 500, 320)",
  "traps": [
   "groupby(...).mean()은 그룹 수(3)만큼 축약되어 행 비교 불가 → transform",
   "전체 평균(374.29)과 비교하면 오답",
   "같음(=)은 '높은'에 포함하지 않음 — 영업 360은 제외"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "[작업형1 스타일] 월별 매출 합계 최대 월",
  "problem": "월별 amount 합계가 가장 큰 월과 그 합계를 출력하시오.\n\nimport pandas as pd\nsales = pd.DataFrame({'date':['2024-01-05','2024-01-20','2024-02-03',\n                              '2024-02-14','2024-02-28','2024-03-10'],\n                      'amount':[120,80,60,90,70,150]})",
  "steps": [
   "pd.to_datetime으로 date 변환",
   "dt.month로 month 열 생성",
   "groupby('month')['amount'].sum()",
   "idxmax()로 최대 월, max()로 합계",
   "print로 출력"
  ],
  "answer": "sales['date'] = pd.to_datetime(sales['date'])\nsales['month'] = sales['date'].dt.month\nmonthly = sales.groupby('month')['amount'].sum()   # 1월 200, 2월 220, 3월 150\nprint(monthly.idxmax(), monthly.max())   # 2 220",
  "traps": [
   "변환 없이 .dt 사용 → AttributeError",
   "단일 거래 최댓값(3월 150)과 혼동 금지",
   "argmax()는 위치(1)를 반환 — 월 라벨은 idxmax()"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "[작업형1 스타일] merge + 문자열 조건 합계",
  "problem": "주문(order)에 고객 주소(cust)를 붙여(주문 기준 left join), 결합 후 주소가 결측인 주문 수와 주소에 '서울'이 포함된 주문의 price 합계를 출력하시오.\n\nimport pandas as pd\ncust = pd.DataFrame({'cid':[1,2,3,4],\n                     'addr':['서울시 강남구','부산시 해운대구','서울시 마포구',None]})\norder = pd.DataFrame({'cid':[1,1,2,3,3,3,5],\n                      'price':[100,50,70,30,20,10,999]})",
  "steps": [
   "pd.merge(order, cust, on='cid', how='left')로 주문 7건 유지",
   "addr.isnull().sum()으로 결측 주문 수(매칭 실패 cid=5)",
   "str.contains('서울', na=False)로 필터",
   "price sum() 후 print"
  ],
  "answer": "m = pd.merge(order, cust, on='cid', how='left')   # 7행\nprint(m['addr'].isnull().sum())   # 1 (cid=5 매칭 없음)\nseoul = m[m['addr'].str.contains('서울', na=False)]\nprint(seoul['price'].sum())   # 210 (cid1 150 + cid3 60)",
  "traps": [
   "how 생략 시 inner → 6행, 결측 주문 수 0으로 오답",
   "na=False 없으면 NaN 섞인 불리언으로 인덱싱 오류",
   "cid=4 고객(addr None)은 주문이 없어 left join 결과에 나타나지 않음"
  ]
 },
 {
  "s": "s2",
  "d": 1,
  "title": "결측치 중앙값 대체 후 그룹 평균",
  "problem": "회원 데이터 members.csv (salary 일부 결측)\n| id | dept | salary |\n| 1 | A | 300 |\n| 2 | B | NaN |\n| 3 | A | 350 |\n| 4 | B | 420 |\n| 5 | A | NaN |\n| 6 | B | 380 |\n| 7 | A | 400 |\n| 8 | B | NaN |\nsalary 결측치를 salary 중앙값으로 대체한 뒤 dept 가 'B' 인 행의 salary 평균을 소수점 둘째 자리까지 출력하라.",
  "steps": [
   "유효 salary 중앙값 계산 (NaN 자동 제외)",
   "fillna 로 대체 후 재할당",
   "dept == 'B' 필터",
   "salary 평균 → round(, 2) → print"
  ],
  "answer": "import pandas as pd\nimport numpy as np\n# 시험장: df = pd.read_csv('data/members.csv')\ndf = pd.DataFrame({'id': range(1, 9),\n                   'dept': ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'],\n                   'salary': [300, np.nan, 350, 420, np.nan, 380, 400, np.nan]})\nmed = df['salary'].median()          # 380.0\ndf['salary'] = df['salary'].fillna(med)\nresult = df[df['dept'] == 'B']['salary'].mean()\nprint(round(result, 2))\n\n# 출력\n390.0",
  "traps": [
   "평균(mean)으로 대체하면 오답",
   "재할당 누락 시 결측 그대로 → B 평균이 유효값만으로 계산됨",
   "필터를 대체보다 먼저 하면 중앙값 자체가 달라짐"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "IQR 이상치 제거 후 표준편차",
  "problem": "측정 데이터 measure.csv 의 value 컬럼\nvalue = [52, 55, 58, 60, 61, 63, 65, 67, 70, 120, 15]\nIQR 방법(Q1−1.5×IQR 미만 또는 Q3+1.5×IQR 초과)으로 이상치를 제거한 뒤 value 의 표준편차(pandas 기본)를 소수점 셋째 자리까지 출력하라.",
  "steps": [
   "Q1 = 56.5, Q3 = 66.0, IQR = 9.5",
   "하한 42.25 / 상한 80.25 → 15, 120 제거",
   "남은 9개로 std() (ddof=1)",
   "round(, 3) 출력"
  ],
  "answer": "import pandas as pd\n# 시험장: df = pd.read_csv('data/measure.csv')\ndf = pd.DataFrame({'value': [52, 55, 58, 60, 61, 63, 65, 67, 70, 120, 15]})\nq1 = df['value'].quantile(0.25)\nq3 = df['value'].quantile(0.75)\niqr = q3 - q1\ndf2 = df[(df['value'] >= q1 - 1.5*iqr) & (df['value'] <= q3 + 1.5*iqr)]\nprint(round(df2['value'].std(), 3))\n\n# 출력\n5.74",
  "traps": [
   "원본 df 로 std 계산",
   "np.std 사용 시 ddof=0 으로 값이 달라짐",
   "1.5 배수 누락"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "상위 5개 값을 5번째 값으로 교체 후 조건 평균",
  "problem": "고객 데이터 customer.csv (실전은 \"상위 10개 → 10번째 값\" 형태가 빈출)\n| age | spend |\n| 25 | 120 |\n| 52 | 300 |\n| 61 | 150 |\n| 33 | 500 |\n| 47 | 220 |\n| 58 | 410 |\n| 70 | 90 |\n| 29 | 350 |\n| 55 | 280 |\n| 64 | 600 |\n| 41 | 180 |\n| 50 | 330 |\nspend 를 내림차순 정렬했을 때 상위 5개 값을 5번째 값으로 모두 교체하고, age 가 50 이상인 고객의 spend 평균을 소수점 첫째 자리까지 출력하라.",
  "steps": [
   "spend 내림차순 정렬 → 600, 500, 410, 350, 330 …",
   "5번째 값 v = 330",
   "상위 5개 원본 인덱스 위치를 330 으로 교체",
   "age >= 50 필터 후 평균 → round(, 1)"
  ],
  "answer": "import pandas as pd\n# 시험장: df = pd.read_csv('data/customer.csv')\ndf = pd.DataFrame({'age':   [25, 52, 61, 33, 47, 58, 70, 29, 55, 64, 41, 50],\n                   'spend': [120, 300, 150, 500, 220, 410, 90, 350, 280, 600, 180, 330]})\ntop = df['spend'].sort_values(ascending=False)\nv = top.iloc[4]                       # 5번째 값\ndf.loc[top.index[:5], 'spend'] = v    # 원본 인덱스로 교체\nresult = df[df['age'] >= 50]['spend'].mean()\nprint(round(result, 1))\n\n# 출력\n258.6",
  "traps": [
   "iloc[5] 로 6번째 값을 사용",
   "정렬본(top)만 바꾸고 원본 df 로 평균 계산",
   "\"50 이상\" 을 > 50 으로 작성"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "앞 70% 데이터의 결측 대체 전후 표준편차 차이",
  "problem": "주택 데이터 house.csv (10행, 원래 순서 유지)\nf1 = [10, NaN, 30, 20, NaN, 50, 40, NaN, 60, 70]\n데이터의 앞에서부터 70% 행만 사용한다. 그 안에서 f1 결측치를 f1 중앙값으로 대체하기 전과 후의 표준편차(pandas 기본)를 각각 구해 차이(전 − 후)를 소수점 셋째 자리까지 출력하라.",
  "steps": [
   "앞 70% → int(10×0.7) = 7행",
   "대체 전 std (NaN 제외 5개)",
   "7행 안의 중앙값으로 fillna",
   "대체 후 std, 차이 round(, 3)"
  ],
  "answer": "import pandas as pd\nimport numpy as np\n# 시험장: df = pd.read_csv('data/house.csv')\ndf = pd.DataFrame({'f1': [10, np.nan, 30, 20, np.nan, 50, 40, np.nan, 60, 70]})\nsub = df.iloc[:int(len(df) * 0.7)].copy()\nbefore = sub['f1'].std()\nsub['f1'] = sub['f1'].fillna(sub['f1'].median())\nafter = sub['f1'].std()\nprint(round(before - after, 3))\n\n# 출력\n2.901",
  "traps": [
   "정렬 후 자르기(지시 없음)",
   "전체 데이터 중앙값으로 대체",
   "중앙값 대체 시에도 표준편차가 줄어드는 경향 — 부호 확인"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "날짜 파생 — 월별 매출 합계 최대 월",
  "problem": "매출 로그 sales.csv\n| date | amount |\n| 2024-01-03 | 120 |\n| 2024-01-15 | 80 |\n| 2024-02-02 | 200 |\n| 2024-02-20 | 150 |\n| 2024-02-28 | 50 |\n| 2024-03-05 | 90 |\n| 2024-03-09 | 300 |\n| 2024-03-17 | 40 |\n월별 amount 합계가 가장 큰 월(숫자)을 정수로 출력하라.",
  "steps": [
   "to_datetime 변환",
   "dt.month 로 월 파생",
   "groupby('month')['amount'].sum()",
   "합계 최대의 그룹명 → idxmax()"
  ],
  "answer": "import pandas as pd\n# 시험장: df = pd.read_csv('data/sales.csv')\ndf = pd.DataFrame({'date': ['2024-01-03', '2024-01-15', '2024-02-02', '2024-02-20',\n                            '2024-02-28', '2024-03-05', '2024-03-09', '2024-03-17'],\n                   'amount': [120, 80, 200, 150, 50, 90, 300, 40]})\ndf['date'] = pd.to_datetime(df['date'])\ndf['month'] = df['date'].dt.month\nmonthly = df.groupby('month')['amount'].sum()   # 1:200, 2:400, 3:430\nprint(int(monthly.idxmax()))\n\n# 출력\n3",
  "traps": [
   "max() 로 합계값(430)을 출력 — 묻는 것은 월",
   "변환 없이 .dt 사용 → 오류",
   "월별 평균과 합계 혼동"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "Min-Max 정규화 후 조건 개수",
  "problem": "점수 데이터 score.csv\nx = [35, 50, 62, 70, 81, 90, 95, 100]\nx 를 Min-Max 정규화(sklearn MinMaxScaler)한 뒤 0.5 초과인 값의 개수를 출력하고, 수식 (x−min)/(max−min) 결과와 같은지 확인하라.",
  "steps": [
   "MinMaxScaler().fit_transform(df[['x']])",
   "0.5 초과 개수 = 불리언 합",
   "수식 결과와 np.allclose 비교"
  ],
  "answer": "import pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import MinMaxScaler\n# 시험장: df = pd.read_csv('data/score.csv')\ndf = pd.DataFrame({'x': [35, 50, 62, 70, 81, 90, 95, 100]})\ndf['mm'] = MinMaxScaler().fit_transform(df[['x']])\nmanual = (df['x'] - df['x'].min()) / (df['x'].max() - df['x'].min())\nprint(np.allclose(df['mm'], manual))\nprint((df['mm'] > 0.5).sum())\n\n# 출력\nTrue\n5",
  "traps": [
   "1차원 df['x'] 입력 → ValueError",
   "0.5 이상(>=)과 초과(>) 혼동",
   "MinMax 는 ddof 무관 — 표준화와 혼동 금지"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "로그 변환 전후 왜도 차이",
  "problem": "거래 금액 데이터 trade.csv\nv = [1, 2, 2, 3, 3, 3, 10, 50]\nv 의 왜도(pandas skew)와 np.log1p(v) 의 왜도를 구해 (변환 전 − 변환 후) 값을 소수점 둘째 자리까지 출력하라.",
  "steps": [
   "원본 skew() — 오른쪽 꼬리로 큰 양수",
   "np.log1p 로 log(1+x) 변환",
   "변환 후 skew()",
   "차이 round(, 2)"
  ],
  "answer": "import pandas as pd\nimport numpy as np\n# 시험장: df = pd.read_csv('data/trade.csv')\ndf = pd.DataFrame({'v': [1, 2, 2, 3, 3, 3, 10, 50]})\nbefore = df['v'].skew()\nafter = np.log1p(df['v']).skew()\nprint(round(before - after, 2))\n\n# 출력\n0.87",
  "traps": [
   "scipy.stats.skew 기본(bias=True) 사용 시 값 다름",
   "np.log 와 np.log1p 혼동(지시 확인)",
   "차이 방향(전−후) 반대로 계산"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[이진분류] 쇼핑몰 구매 확률 예측 — ROC-AUC",
  "problem": "train.csv(1,100행)·test.csv(400행)이 주어진다.\n컬럼: cust_id(고객ID), gender(M/F), age, region(서울/경기/부산/기타, 결측 있음), visit_cnt(방문수), stay_time(체류시간, 결측 있음), coupon(Y/N), buy(★타깃★ 0/1, train에만 존재)\n\ntest 고객의 구매 확률(buy=1일 확률)을 예측하여 result.csv 로 제출하라.\n- 컬럼명: pred (1개)\n- 행 수 = test 행 수, index 제외\n- 평가지표: ROC-AUC",
  "steps": [
   "타깃 0/1 + '확률' + ROC-AUC → 이진분류·predict_proba[:,1]",
   "cust_id 는 양쪽에서 제거(제출에 ID 불필요)",
   "결합 후 수치형 median·범주형 mode 대체 → LabelEncoder",
   "stratify=y 로 분할 → RF 학습 → 검증 AUC 확인",
   "전체 train 재학습 → test 확률 → pred 컬럼으로 저장"
  ],
  "answer": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import LabelEncoder\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import roc_auc_score\n\n# 1. 로드\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\nX_train_raw = train.drop(columns=['cust_id', 'buy'])\ny_train = train['buy']\nX_test_raw = test.drop(columns=['cust_id'])   # test엔 타깃 없음\n\n# 2. EDA\nprint(train.shape, test.shape)\nprint(train.isnull().sum())\nprint(y_train.value_counts())\n\n# 3. 전처리 — train/test 결합 후 결측·인코딩\nX_all = pd.concat([X_train_raw, X_test_raw], axis=0).reset_index(drop=True)\nn_train = len(X_train_raw)\ncat_cols = X_all.select_dtypes(exclude='number').columns.tolist()\nnum_cols = X_all.select_dtypes(include='number').columns.tolist()\nfor col in num_cols:\n    X_all[col] = X_all[col].fillna(X_all[col].median())\nfor col in cat_cols:\n    X_all[col] = X_all[col].fillna(X_all[col].mode()[0])\n    X_all[col] = LabelEncoder().fit_transform(X_all[col].astype(str))\nX_train = X_all.iloc[:n_train]\nX_test = X_all.iloc[n_train:]\n\n# 4. 검증 분리 (분류 → stratify)\nX_tr, X_val, y_tr, y_val = train_test_split(\n    X_train, y_train, test_size=0.2, random_state=42, stratify=y_train)\n\n# 5. 학습\nmodel = RandomForestClassifier(n_estimators=200, random_state=42, n_jobs=-1)\nmodel.fit(X_tr, y_tr)\n\n# 6. 검증 — ROC-AUC는 확률로\nprob_val = model.predict_proba(X_val)[:, 1]\nprint('ROC-AUC:', round(roc_auc_score(y_val, prob_val), 4))\n\n# 7. 전체 train 재학습 → test 확률 → 제출\nmodel.fit(X_train, y_train)\npred = model.predict_proba(X_test)[:, 1]\npd.DataFrame({'pred': pred}).to_csv('result.csv', index=False)\nprint(pd.read_csv('result.csv').shape)",
  "traps": [
   "predict(0/1)로 제출하면 AUC 평가에 불리 — 확률 제출",
   "test 에서 buy 를 drop 하면 KeyError",
   "index=False 누락 시 행번호 열 추가"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[이진분류] 대출 연체 여부 레이블 예측 — F1 (문자열 타깃)",
  "problem": "train.csv(1,100행)·test.csv(400행).\n컬럼: id, income, loan_amt, job(5개 범주), home(Own/Rent/Mortgage), credit_score(결측 있음), purpose(car/house/edu — ★test에는 train에 없는 'travel' 범주 존재★), default(★타깃★ 'Yes'/'No')\n\ntest 의 연체 여부를 'Yes'/'No' 로 예측해 result.csv 로 제출하라.\n- 컬럼명: default\n- 행 수 = test 행 수, index 제외\n- 평가지표: F1 (양성 = 'Yes')",
  "steps": [
   "'여부' 레이블 제출 → predict, 지표 F1 → pos_label='Yes'",
   "결측은 train 중앙값으로 양쪽 동일 대체",
   "get_dummies 를 각각 적용 → test 를 reindex 로 train 컬럼에 정렬(travel 더미 제거)",
   "불균형 대비 class_weight='balanced', stratify=y",
   "재학습 후 원래 문자열 레이블 그대로 default 컬럼으로 저장"
  ],
  "answer": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import f1_score\n\n# 1. 로드\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\ny_train = train['default']                    # 'Yes'/'No' 문자열 타깃 그대로 사용 가능\nX_train_raw = train.drop(columns=['id', 'default'])\nX_test_raw = test.drop(columns=['id'])\n\n# 2. EDA\nprint(train.isnull().sum())\nprint(y_train.value_counts())\nprint(set(test['purpose']) - set(train['purpose']))   # test에만 있는 범주 확인\n\n# 3. 결측 — 수치형 중앙값 (train 기준값으로 양쪽 채움)\nmed = X_train_raw['credit_score'].median()\nX_train_raw['credit_score'] = X_train_raw['credit_score'].fillna(med)\nX_test_raw['credit_score'] = X_test_raw['credit_score'].fillna(med)\n\n# 3-2. 원핫 인코딩 — 따로 get_dummies 후 test 컬럼을 train 기준으로 정렬\nX_train = pd.get_dummies(X_train_raw)\nX_test = pd.get_dummies(X_test_raw)\nX_test = X_test.reindex(columns=X_train.columns, fill_value=0)\nprint(X_train.shape, X_test.shape)\n\n# 4. 검증 분리\nX_tr, X_val, y_tr, y_val = train_test_split(\n    X_train, y_train, test_size=0.2, random_state=42, stratify=y_train)\n\n# 5. 학습 (불균형 대비 class_weight)\nmodel = RandomForestClassifier(n_estimators=300, class_weight='balanced',\n                               random_state=42, n_jobs=-1)\nmodel.fit(X_tr, y_tr)\n\n# 6. 검증 — 문자열 양성 클래스는 pos_label 지정\npred_val = model.predict(X_val)\nprint('F1:', round(f1_score(y_val, pred_val, pos_label='Yes'), 4))\n\n# 7. 재학습 → 레이블 제출 (컬럼명 default)\nmodel.fit(X_train, y_train)\npred = model.predict(X_test)\npd.DataFrame({'default': pred}).to_csv('result.csv', index=False)\nprint(pd.read_csv('result.csv')['default'].value_counts())",
  "traps": [
   "reindex 없이 predict → feature names 불일치 오류",
   "f1_score 기본 pos_label=1 → 문자열 타깃에서 ValueError",
   "제출 컬럼명을 pred 로 바꾸면 지시 위반 — default 그대로"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[다중분류] 고객 등급(A~D) 예측 — macro F1",
  "problem": "train.csv(1,300행)·test.csv(500행).\n컬럼: ID(문자열 'C00001' 형식), age, gender(남/여), income, spend, channel(online/offline/mobile), membership_years(결측 있음), segment(★타깃★ A/B/C/D)\n\ntest 고객의 등급을 예측하여 result.csv 로 제출하라.\n- 컬럼명: pred (A/B/C/D 값)\n- index 제외\n- 평가지표: macro F1",
  "steps": [
   "범주 4개 → 다중분류, predict 로 등급 레이블 제출",
   "ID 문자열 컬럼은 반드시 제거(인코딩하면 의미 없는 피처)",
   "결합 후 결측 median → 범주형 LabelEncoder",
   "f1_score(average='macro') 로 검증, classification_report 로 클래스별 확인",
   "재학습 → pred 저장"
  ],
  "answer": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import LabelEncoder\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import f1_score, classification_report\n\n# 1. 로드\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\ny_train = train['segment']                    # A/B/C/D 4개 클래스 → 다중분류\nX_train_raw = train.drop(columns=['ID', 'segment'])\nX_test_raw = test.drop(columns=['ID'])\n\n# 2. EDA\nprint(y_train.value_counts())\n\n# 3. 결합 전처리\nX_all = pd.concat([X_train_raw, X_test_raw]).reset_index(drop=True)\nn_train = len(X_train_raw)\nX_all['membership_years'] = X_all['membership_years'].fillna(X_all['membership_years'].median())\nfor col in X_all.select_dtypes(exclude='number').columns:\n    X_all[col] = LabelEncoder().fit_transform(X_all[col].astype(str))\nX_train = X_all.iloc[:n_train]\nX_test = X_all.iloc[n_train:]\n\n# 4. 검증 분리\nX_tr, X_val, y_tr, y_val = train_test_split(\n    X_train, y_train, test_size=0.2, random_state=42, stratify=y_train)\n\n# 5. 학습\nmodel = RandomForestClassifier(n_estimators=300, random_state=42, n_jobs=-1)\nmodel.fit(X_tr, y_tr)\n\n# 6. 검증 — 다중분류 F1은 average='macro'\npred_val = model.predict(X_val)\nprint('macro F1:', round(f1_score(y_val, pred_val, average='macro'), 4))\nprint(classification_report(y_val, pred_val))\n\n# 7. 재학습 → 클래스 레이블 제출\nmodel.fit(X_train, y_train)\npd.DataFrame({'pred': model.predict(X_test)}).to_csv('result.csv', index=False)\nprint(pd.read_csv('result.csv').shape)",
  "traps": [
   "average 미지정 시 다중분류 F1 오류",
   "다중분류에서 predict_proba[:,1] 제출은 의미 없음",
   "ID 를 남기면 고유값 피처로 과적합"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[회귀] 시간대별 자전거 대여량 예측 — RMSE",
  "problem": "train.csv(1,500행)·test.csv(500행).\n컬럼: datetime('2023-01-01 00:00:00' 형식), season(1~4), holiday(0/1), weather(1~3), temp, humidity(결측 있음), windspeed, count(★타깃★ 대여량)\n\ntest 의 대여량을 예측해 result.csv 로 제출하라.\n- 컬럼명: pred\n- 행 수 = test 행 수, index 제외\n- 평가지표: RMSE",
  "steps": [
   "연속 수치 + RMSE → 회귀, RandomForestRegressor",
   "datetime → to_datetime 후 hour·month·day_of_week 파생, 원본 제거",
   "humidity median 대체",
   "stratify 없이 분할 → RMSE = np.sqrt(mean_squared_error)",
   "재학습 → predict 수치 그대로 저장"
  ],
  "answer": "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_squared_error, r2_score\n\n# 1. 로드\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\ny_train = train['count']                      # 연속 수치 → 회귀\nX_train_raw = train.drop(columns=['count'])\nX_test_raw = test.copy()\n\n# 2~3. 결합 전처리 + 날짜 파생변수\nX_all = pd.concat([X_train_raw, X_test_raw]).reset_index(drop=True)\nn_train = len(X_train_raw)\nX_all['datetime'] = pd.to_datetime(X_all['datetime'])\nX_all['hour'] = X_all['datetime'].dt.hour\nX_all['month'] = X_all['datetime'].dt.month\nX_all['dayofweek'] = X_all['datetime'].dt.day_of_week\nX_all = X_all.drop(columns=['datetime'])       # 원본 날짜 컬럼 제거\nX_all['humidity'] = X_all['humidity'].fillna(X_all['humidity'].median())\nX_train = X_all.iloc[:n_train]\nX_test = X_all.iloc[n_train:]\n\n# 4. 검증 분리 (회귀 → stratify 없음)\nX_tr, X_val, y_tr, y_val = train_test_split(\n    X_train, y_train, test_size=0.2, random_state=42)\n\n# 5. 학습\nmodel = RandomForestRegressor(n_estimators=200, random_state=42, n_jobs=-1)\nmodel.fit(X_tr, y_tr)\n\n# 6. 검증 — RMSE는 np.sqrt(MSE) (squared=False는 신버전에서 제거됨)\npred_val = model.predict(X_val)\nrmse = np.sqrt(mean_squared_error(y_val, pred_val))\nprint('RMSE:', round(rmse, 4), '/ R2:', round(r2_score(y_val, pred_val), 4))\n\n# 7. 재학습 → 수치 그대로 제출\nmodel.fit(X_train, y_train)\npd.DataFrame({'pred': model.predict(X_test)}).to_csv('result.csv', index=False)\nprint(pd.read_csv('result.csv').shape, len(test))",
  "traps": [
   "squared=False 는 sklearn 1.6+ 에서 TypeError",
   "회귀에 stratify=y 금지",
   "날짜 문자열을 그대로 넣으면 변환 오류"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[회귀] 중고차 가격 예측 — 로그 변환 타깃, RMSE·MAE",
  "problem": "train.csv(1,200행)·test.csv(400행).\n컬럼: id, brand(5개 범주), model_year, mileage, fuel(결측 있음), transmission(auto/manual), engine_size(결측 있음), price(★타깃★ 오른쪽 꼬리가 긴 분포)\n\ntest 차량 가격을 예측해 result.csv 로 제출하라.\n- 컬럼명: price\n- index 제외\n- 평가지표: RMSE",
  "steps": [
   "describe 로 왜도 확인 → y = np.log1p(price)",
   "car_age 파생, 결측: 수치 median·범주 'unknown'",
   "결합 후 get_dummies(columns=[...]) → iloc 분리",
   "검증은 expm1 로 원 단위 복원 후 root_mean_squared_error",
   "재학습 → np.expm1(predict) → price 컬럼 저장"
  ],
  "answer": "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import root_mean_squared_error, mean_absolute_error\n\n# 1. 로드\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\nprint(train['price'].describe())              # 오른쪽 꼬리(왜도) 확인\ny_train = np.log1p(train['price'])            # 로그 변환 타깃\nX_train_raw = train.drop(columns=['id', 'price'])\nX_test_raw = test.drop(columns=['id'])\n\n# 3. 결합 전처리 — 결측 + 원핫\nX_all = pd.concat([X_train_raw, X_test_raw]).reset_index(drop=True)\nn_train = len(X_train_raw)\nX_all['car_age'] = 2025 - X_all['model_year']   # 파생변수\nX_all['engine_size'] = X_all['engine_size'].fillna(X_all['engine_size'].median())\nX_all['fuel'] = X_all['fuel'].fillna('unknown')\nX_all = pd.get_dummies(X_all, columns=['brand', 'fuel', 'transmission'])\nX_train = X_all.iloc[:n_train]\nX_test = X_all.iloc[n_train:]\n\n# 4. 검증 분리\nX_tr, X_val, y_tr, y_val = train_test_split(\n    X_train, y_train, test_size=0.2, random_state=42)\n\n# 5. 학습\nmodel = RandomForestRegressor(n_estimators=300, min_samples_leaf=2,\n                              random_state=42, n_jobs=-1)\nmodel.fit(X_tr, y_tr)\n\n# 6. 검증 — 원래 단위로 되돌린 뒤 평가\npred_val = np.expm1(model.predict(X_val))\ntrue_val = np.expm1(y_val)\nprint('RMSE:', round(root_mean_squared_error(true_val, pred_val), 2))\nprint('MAE :', round(mean_absolute_error(true_val, pred_val), 2))\n\n# 7. 재학습 → expm1 역변환 후 제출\nmodel.fit(X_train, y_train)\npred = np.expm1(model.predict(X_test))\npd.DataFrame({'price': pred}).to_csv('result.csv', index=False)\nprint(pd.read_csv('result.csv').head())",
  "traps": [
   "로그 예측값을 그대로 제출하면 단위 불일치로 큰 감점",
   "검증 지표도 원 단위에서 계산해야 실제 RMSE",
   "root_mean_squared_error 는 sklearn 1.4+ (구버전이면 np.sqrt)"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[회귀] 보험료 예측 — GridSearchCV 튜닝, R²",
  "problem": "train.csv(1,000행)·test.csv(300행).\n컬럼(ID 없음): age, sex(male/female), bmi(결측 있음), children, smoker(yes/no), region(4개 범주), charges(★타깃★ 보험료)\n\ntest 보험료를 예측해 result.csv 로 제출하라.\n- 컬럼명: pred\n- index 제외\n- 평가지표: R²",
  "steps": [
   "회귀 + R² → RandomForestRegressor, scoring='r2'",
   "ID 없으므로 test.copy() 그대로 결합",
   "get_dummies(drop_first=True) 로 범주 처리",
   "KFold(shuffle=True) 기반 GridSearchCV → best_params_ 확인",
   "최적 파라미터로 전체 train 재학습 → pred 저장"
  ],
  "answer": "import pandas as pd\nfrom sklearn.model_selection import train_test_split, GridSearchCV, KFold\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import r2_score\n\n# 1. 로드 (ID 없음)\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\ny_train = train['charges']\nX_train_raw = train.drop(columns=['charges'])\nX_test_raw = test.copy()\n\n# 3. 결합 전처리\nX_all = pd.concat([X_train_raw, X_test_raw]).reset_index(drop=True)\nn_train = len(X_train_raw)\nX_all['bmi'] = X_all['bmi'].fillna(X_all['bmi'].median())\nX_all = pd.get_dummies(X_all, columns=['sex', 'smoker', 'region'], drop_first=True)\nX_train = X_all.iloc[:n_train]\nX_test = X_all.iloc[n_train:]\n\n# 4. 검증 분리\nX_tr, X_val, y_tr, y_val = train_test_split(\n    X_train, y_train, test_size=0.2, random_state=42)\n\n# 5. 하이퍼파라미터 탐색 — 회귀는 KFold, scoring='r2'\nparam_grid = {'n_estimators': [100, 200], 'max_depth': [5, 10, None],\n              'min_samples_leaf': [1, 3]}\ngs = GridSearchCV(RandomForestRegressor(random_state=42), param_grid,\n                  cv=KFold(n_splits=5, shuffle=True, random_state=42),\n                  scoring='r2', n_jobs=-1)\ngs.fit(X_tr, y_tr)\nprint('best:', gs.best_params_, round(gs.best_score_, 4))\n\n# 6. 검증\nbest = gs.best_estimator_\nprint('Val R2:', round(r2_score(y_val, best.predict(X_val)), 4))\n\n# 7. 최적 파라미터로 전체 train 재학습 → 제출\nfinal = RandomForestRegressor(random_state=42, **gs.best_params_)\nfinal.fit(X_train, y_train)\npd.DataFrame({'pred': final.predict(X_test)}).to_csv('result.csv', index=False)\nprint(pd.read_csv('result.csv').shape)",
  "traps": [
   "회귀 CV 에 StratifiedKFold 사용 불가",
   "GridSearch 는 시간 소모 — 기본 RF 제출본을 먼저 저장해두기",
   "best_score_ 는 CV 평균 — 검증셋 점수와 구분"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[이진분류] 백화점 고객 성별 확률 — ID 포함 2컬럼 제출",
  "problem": "train.csv(2,500행)·test.csv(1,000행).\n컬럼: cust_id, 총구매액, 최대구매액, 환불금액(결측 다수 — 환불 이력 없음을 의미), 주구매상품(6개 범주), 주구매지점(4개 범주), 내점일수, 주말방문비율, gender(★타깃★ 0/1)\n\ntest 고객이 gender=1 일 확률을 예측해 result.csv 로 제출하라.\n- 컬럼: cust_id, gender (2개, 이 순서)\n- index 제외, 평가지표: ROC-AUC",
  "steps": [
   "제출에 ID 필요 → test_id = test['cust_id'] 먼저 보관",
   "환불금액 결측은 의미상 0 대체 + 환불여부 파생",
   "한글 범주 컬럼 LabelEncoder (결합 후)",
   "max_depth·min_samples_leaf 로 과적합 완화 RF → 검증 AUC",
   "DataFrame({'cust_id': test_id, 'gender': proba}) → index=False"
  ],
  "answer": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import LabelEncoder\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import roc_auc_score\n\n# 1. 로드\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\ntest_id = test['cust_id']                     # ★제출용 ID 따로 보관★\ny_train = train['gender']\nX_train_raw = train.drop(columns=['cust_id', 'gender'])\nX_test_raw = test.drop(columns=['cust_id'])\n\n# 2. EDA — 환불금액 결측 다수 = 환불 없음 의미\nprint(train.isnull().mean().round(3))\n\n# 3. 결합 전처리\nX_all = pd.concat([X_train_raw, X_test_raw]).reset_index(drop=True)\nn_train = len(X_train_raw)\nX_all['환불금액'] = X_all['환불금액'].fillna(0)        # 의미 기반 0 대체\nX_all['환불여부'] = (X_all['환불금액'] > 0).astype(int)  # 파생변수\nfor col in ['주구매상품', '주구매지점']:\n    X_all[col] = LabelEncoder().fit_transform(X_all[col])\nX_train = X_all.iloc[:n_train]\nX_test = X_all.iloc[n_train:]\n\n# 4. 검증 분리\nX_tr, X_val, y_tr, y_val = train_test_split(\n    X_train, y_train, test_size=0.2, random_state=42, stratify=y_train)\n\n# 5. 학습 (과적합 완화 파라미터)\nmodel = RandomForestClassifier(n_estimators=300, max_depth=8,\n                               min_samples_leaf=5, random_state=42, n_jobs=-1)\nmodel.fit(X_tr, y_tr)\n\n# 6. 검증\nprint('ROC-AUC:', round(roc_auc_score(y_val, model.predict_proba(X_val)[:, 1]), 4))\n\n# 7. 재학습 → ID + 확률 2컬럼 제출\nmodel.fit(X_train, y_train)\nresult = pd.DataFrame({'cust_id': test_id,\n                       'gender': model.predict_proba(X_test)[:, 1]})\nresult.to_csv('result.csv', index=False)\nprint(result.shape, result.columns.tolist())",
  "traps": [
   "ID 를 피처로 학습하면 과적합",
   "컬럼 순서·이름을 지시와 다르게 쓰면 형식 오류",
   "환불금액 결측을 median 으로 채우면 '환불 없음' 의미 왜곡"
  ]
 },
 {
  "s": "s4",
  "d": 1,
  "title": "1표본 t검정 — 볼트 평균 길이",
  "problem": "볼트 10개 길이(mm): [49.8, 50.6, 51.2, 50.9, 49.5, 51.4, 50.8, 50.3, 51.0, 50.7]\n모평균이 50mm 인지 유의수준 0.05 에서 검정하시오.\n① 검정통계량(소수 4자리) ② 양측 p-value(소수 4자리) ③ 기각 여부\n④ '평균이 50mm 보다 크다'는 단측 p-value(소수 4자리)",
  "steps": [
   "H₀: μ = 50 / H₁: μ ≠ 50 (④는 μ > 50)",
   "정규성: shapiro p=0.5225 → 정규성 가정 유지",
   "ttest_1samp(x, popmean=50) → (t, p)",
   "④ alternative='greater'"
  ],
  "answer": "from scipy import stats\nx = [49.8, 50.6, 51.2, 50.9, 49.5, 51.4, 50.8, 50.3, 51.0, 50.7]\nprint(round(stats.shapiro(x).pvalue, 4))      # 0.5225\nt, p = stats.ttest_1samp(x, popmean=50)\nprint(round(t, 4))   # ① 3.2697\nprint(round(p, 4))   # ② 0.0097\nprint('기각' if p < 0.05 else '채택')   # ③ 기각\nt1, p1 = stats.ttest_1samp(x, 50, alternative='greater')\nprint(round(p1, 4))  # ④ 0.0048\n\n결과: ① 3.2697 ② 0.0097 ③ 기각 (평균 50.62 로 50mm 와 다름) ④ 0.0048",
  "traps": [
   "인자명 popmean — mu= 쓰면 TypeError",
   "'less' 로 하면 p=0.9952 로 결론 반대",
   "round(p,4) 와 f\"{p:.4f}\" 표기 차이"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "독립 2표본 t검정 — 등분산 판단 후 Welch",
  "problem": "A반 점수: [82, 75, 90, 68, 85, 79, 88, 73]\nB반 점수: [70, 72, 65, 74, 69, 71, 68, 73]\n유의수준 0.05.\n① Levene 등분산 검정 p-value(소수 4자리)와 등분산 여부\n② ①을 반영한 t 검정통계량(소수 4자리)\n③ p-value(소수 4자리)와 기각 여부\n④ 정규성이 깨졌다고 가정할 때 Mann-Whitney U 의 p-value(소수 4자리)",
  "steps": [
   "H₀: μA = μB / H₁: μA ≠ μB",
   "shapiro p: A 0.8867, B 0.9206 → 정규성 유지",
   "levene p=0.0166 < 0.05 → 이분산 → equal_var=False",
   "ttest_ind(a, b, equal_var=False)",
   "④ mannwhitneyu(a, b, alternative='two-sided')"
  ],
  "answer": "from scipy import stats\na = [82, 75, 90, 68, 85, 79, 88, 73]\nb = [70, 72, 65, 74, 69, 71, 68, 73]\nlev_s, lev_p = stats.levene(a, b)\nprint(round(lev_p, 4))            # ① 0.0166 → 이분산\neq = lev_p >= 0.05                # False\nt, p = stats.ttest_ind(a, b, equal_var=eq)\nprint(round(t, 4))                # ② 3.3601\nprint(round(p, 4))                # ③ 0.0084\nprint('기각' if p < 0.05 else '채택')   # 기각\nu, pu = stats.mannwhitneyu(a, b, alternative='two-sided')\nprint(u, round(pu, 4))            # ④ 56.0 0.0134\n\n결과: ① 0.0166 (이분산) ② 3.3601 ③ 0.0084, 기각 — 두 반 평균(80 vs 70.25)에 유의한 차이 ④ U=56.0, p=0.0134",
  "traps": [
   "equal_var 생략 시 Student → p 0.0047 (절차 오류)",
   "levene p 를 t검정 p 로 착각",
   "표본 크기가 같아 t 값은 Student·Welch 동일 — p 만 다름"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "대응표본 t검정 — 프로그램 전후 체중 감소",
  "problem": "8명의 참여 전(before)·후(after) 체중(kg)\nbefore = [72, 80, 65, 90, 77, 84, 69, 75]\nafter  = [70, 76, 66, 85, 74, 80, 67, 71]\n'프로그램 후 체중이 감소했다'를 유의수준 0.05 에서 검정하시오.\n① 차이(before−after) 정규성 shapiro p-value(소수 4자리)\n② 검정통계량(소수 4자리) ③ 단측 p-value(소수 4자리)와 기각 여부\n④ 비모수 Wilcoxon 부호순위 단측 p-value(소수 4자리)",
  "steps": [
   "H₀: 차이 평균 = 0 / H₁: before > after (단측)",
   "차이 d=[2,4,−1,5,3,4,2,4], 평균 2.875",
   "shapiro(d) p=0.1748 → 정규성 유지",
   "ttest_rel(before, after, alternative='greater')",
   "④ wilcoxon(before, after, alternative='greater')"
  ],
  "answer": "import numpy as np\nfrom scipy import stats\nbefore = np.array([72, 80, 65, 90, 77, 84, 69, 75])\nafter  = np.array([70, 76, 66, 85, 74, 80, 67, 71])\nd = before - after\nprint(round(stats.shapiro(d).pvalue, 4))   # ① 0.1748\nt, p = stats.ttest_rel(before, after, alternative='greater')\nprint(round(t, 4))    # ② 4.3137\nprint(round(p, 4))    # ③ 0.0018\nprint('기각' if p < 0.05 else '채택')   # 기각\nw, pw = stats.wilcoxon(before, after, alternative='greater')\nprint(w, round(pw, 4))   # ④ 35.0 0.0078\n\n결과: ① 0.1748 ② 4.3137 ③ 0.0018, 기각 — 체중이 유의하게 감소 ④ 0.0078 (양측이면 W=1.0, p=0.0156)",
  "traps": [
   "ttest_ind 로 풀면 p=0.4481 → 결론 반대",
   "ttest_rel(after, before, 'greater') 는 p=0.9982 — 방향 반대",
   "양측 p 0.0035 를 그대로 답하면 단측 소문항 오답"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "일원 분산분석 + Tukey 사후검정",
  "problem": "교육방식별 점수\nA: [23, 25, 21, 24, 22]\nB: [28, 30, 27, 29, 31]\nC: [22, 27, 25, 24, 28]\n유의수준 0.05.\n① F 통계량(소수 4자리) ② p-value(소수 4자리)와 기각 여부\n③ Tukey HSD 로 유의한 차이가 있는 집단 쌍",
  "steps": [
   "H₀: μA=μB=μC / H₁: 적어도 하나 다름",
   "등분산: levene p=0.5745 → 유지",
   "f_oneway 또는 ols('score ~ C(method)') + anova_lm",
   "기각 시 pairwise_tukeyhsd → reject=True 쌍"
  ],
  "answer": "import pandas as pd\nfrom scipy import stats\nfrom statsmodels.formula.api import ols\nfrom statsmodels.stats.anova import anova_lm\nfrom statsmodels.stats.multicomp import pairwise_tukeyhsd\nga = [23, 25, 21, 24, 22]; gb = [28, 30, 27, 29, 31]; gc = [22, 27, 25, 24, 28]\nf, p = stats.f_oneway(ga, gb, gc)\nprint(round(f, 4), round(p, 4))      # ① 12.9159  ② 0.001 → 기각\ndf = pd.DataFrame({'score': ga + gb + gc, 'method': ['A']*5 + ['B']*5 + ['C']*5})\nmodel = ols('score ~ C(method)', data=df).fit()\ntable = anova_lm(model)\nprint(table.round(4))                # df 2/12, F 12.9159, PR(>F) 0.001\nprint(round(table['PR(>F)'].iloc[0], 4))\nprint(pairwise_tukeyhsd(df['score'], df['method'], alpha=0.05).summary())\n# A-B p-adj 0.0008 True / A-C 0.198 False / B-C 0.02 True\n\n결과: ① 12.9159 ② 0.0010, 기각 ③ A-B, B-C (A-C 는 유의하지 않음)",
  "traps": [
   "집단 리스트 변수명을 C 로 지으면 수식 C() 와 충돌 → PatsyError",
   "table['F'][0] 은 pandas 3 에서 KeyError → .iloc[0]",
   "A-C reject=False 를 '같다'로 서술하지 않기"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "카이제곱 독립성 검정 — 2×2 와 Yates 보정",
  "problem": "흡연 여부와 질환 유무 교차표\n          질환O  질환X\n흡연       30     20\n비흡연     15     35\n유의수준 0.05.\n① 기본값(보정) χ² 통계량(소수 4자리)과 자유도\n② p-value(소수 4자리)와 기각 여부\n③ 연속성 보정 없이(correction=False) χ²와 p-value(소수 4자리)",
  "steps": [
   "H₀: 흡연과 질환은 독립 / H₁: 독립 아님",
   "교차표를 2차원 배열(또는 crosstab)로 입력",
   "4개 언패킹 (chi2, p, dof, expected)",
   "기대빈도 [[22.5, 27.5], [22.5, 27.5]] 모두 5 이상"
  ],
  "answer": "from scipy import stats\nct = [[30, 20], [15, 35]]\nchi2, p, dof, expected = stats.chi2_contingency(ct)\nprint(round(chi2, 4), dof)   # ① 7.9192 1\nprint(round(p, 4))           # ② 0.0049 → 기각\nprint(expected)              # [[22.5 27.5] [22.5 27.5]]\nc2, p2, _, _ = stats.chi2_contingency(ct, correction=False)\nprint(round(c2, 4), round(p2, 4))   # ③ 9.0909 0.0026\n\n결과: ① 7.9192, dof 1 ② 0.0049, 기각 — 흡연과 질환은 연관 있음(독립 아님) ③ 9.0909, 0.0026",
  "traps": [
   "원자료라면 pd.crosstab 후 입력 — 두 컬럼 직접 입력 금지",
   "chi2, p = ... 2개 언패킹 → ValueError",
   "2×2 에서 보정 여부 지시를 놓치면 값이 달라짐"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "다중선형회귀 — 계수·p값·R²·예측",
  "problem": "광고비(ad), 가격(price), 매출(sales) 10개\nad    = [10, 12, 15, 18, 20, 22, 25, 28, 30, 35]\nprice = [50, 48, 52, 47, 45, 46, 44, 43, 45, 40]\nsales = [120, 131, 138, 152, 155, 163, 170, 182, 181, 201]\nsales ~ ad + price 를 적합하시오.\n① ad 회귀계수(소수 4자리) ② price 계수의 p-value(소수 4자리)와 유의성(α=0.05)\n③ 결정계수 R²(소수 4자리) ④ ad=32, price=42 일 때 예측 매출(소수 4자리)",
  "steps": [
   "formula ols 는 절편 자동 포함",
   "개별 계수 H₀: β = 0 → model.pvalues",
   "model.rsquared",
   "model.predict(pd.DataFrame({...}))"
  ],
  "answer": "import pandas as pd\nfrom statsmodels.formula.api import ols\ndf = pd.DataFrame({'ad': [10, 12, 15, 18, 20, 22, 25, 28, 30, 35],\n                   'price': [50, 48, 52, 47, 45, 46, 44, 43, 45, 40],\n                   'sales': [120, 131, 138, 152, 155, 163, 170, 182, 181, 201]})\nmodel = ols('sales ~ ad + price', data=df).fit()\nprint(round(model.params['ad'], 4))       # ① 2.8319\nprint(round(model.pvalues['price'], 4))   # ② 0.2246 → 유의하지 않음\nprint(round(model.rsquared, 4))           # ③ 0.9914\nnew = pd.DataFrame({'ad': [32], 'price': [42]})\nprint(round(model.predict(new).iloc[0], 4))   # ④ 191.8985\n\n결과: ① 2.8319 (절편 131.3504, price −0.716) ② 0.2246 — price 계수 = 0 기각 실패 ③ 0.9914 (수정 R² 0.989) ④ 191.8985",
  "traps": [
   "model.params[1] 위치 인덱싱 — 0번은 Intercept",
   "ad p 는 5.39e-06 → round 하면 0.0 (유의)",
   "개별 p(price 0.2246)와 모형 전체 f_pvalue(5.8e-08) 혼동 금지"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "로지스틱 회귀 — 오즈비·잔차이탈도",
  "problem": "나이(age)와 구매 여부(buy, 1=구매) 20명\nage = [25, 32, 47, 51, 62, 23, 36, 58, 44, 29, 55, 40, 61, 34, 48, 27, 52, 39, 45, 60]\nbuy = [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1]\nbuy ~ age 로지스틱 회귀를 적합하시오.\n① age 계수와 p-value(소수 4자리) ② age 오즈비(소수 4자리)\n③ 잔차이탈도(소수 4자리) ④ age=50 일 때 구매 확률(소수 4자리)",
  "steps": [
   "statsmodels.formula.api.logit, fit(disp=0)",
   "오즈비 = np.exp(계수)",
   "잔차이탈도 = −2 × llf",
   "predict 는 확률 반환"
  ],
  "answer": "import numpy as np\nimport pandas as pd\nfrom statsmodels.formula.api import logit\ndf = pd.DataFrame({'age': [25, 32, 47, 51, 62, 23, 36, 58, 44, 29, 55, 40, 61, 34, 48, 27, 52, 39, 45, 60],\n                   'buy': [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1]})\nmodel = logit('buy ~ age', data=df).fit(disp=0)\nprint(round(model.params['age'], 4), round(model.pvalues['age'], 4))  # ① 0.3039 0.03\nprint(round(np.exp(model.params['age']), 4))   # ② 1.3551\nprint(round(-2 * model.llf, 4))                # ③ 10.3383\nprint(round(model.predict(pd.DataFrame({'age': [50]})).iloc[0], 4))   # ④ 0.8691\n\n결과: ① 0.3039, p 0.0300 (유의) ② 1.3551 — 나이 1세 증가 시 구매 오즈 1.3551배 ③ 10.3383 (영이탈도 27.7259) ④ 0.8691",
  "traps": [
   "계수 0.3039 를 확률 증가량으로 해석 금지",
   "Logit 결과에 .deviance 없음 → −2*llf (GLM Binomial 은 .deviance)",
   "10세 증가 오즈비는 np.exp(10*coef)=20.8742, 1.3551×10 아님"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "제1유형 코드 디버깅 — 결측·필터·출력",
  "problem": "다음 코드는 'age' 결측을 중앙값, 'gender' 결측을 최빈값으로 채운 뒤 gender가 'M'이고 age가 30 이상인 행의 age 평균을 소수점 둘째 자리까지 출력하려 한다. 실수를 모두 찾아 고치시오.\nimport pandas as pd, numpy as np\ndf = pd.DataFrame({'age':[20,np.nan,40,30,np.nan,50],\n                   'gender':['M','F','M',None,'M','F']})\ndf['age'].fillna(df['age'].median())\ndf['gender'] = df['gender'].fillna(df['gender'].mode())\nr = df[df['gender']=='M' & df['age']>=30]['age'].mean()\nr",
  "steps": [
   "① fillna 결과 재할당 누락 → df['age'] = df['age'].fillna(df['age'].median()) (중앙값 35.0)",
   "② mode()는 Series → df['gender'].fillna(df['gender'].mode()[0]) (최빈값 'M')",
   "③ 조건 괄호 누락 → df[(df['gender']=='M') & (df['age']>=30)]",
   "④ 변수만 작성 → print(round(r, 2))",
   "수정 후 대상 행 age = 40, 30, 35 → 평균 35.0"
  ],
  "answer": "print(round(r, 2)) → 35.0",
  "traps": [
   "fillna만 호출하고 재할당 안 함(pandas 3에선 chained inplace도 미반영)",
   "mode() Series를 그대로 fillna에 넘기면 인덱스 기준 정렬 → 결측(인덱스 3)이 채워지지 않음",
   "& 우선순위로 ValueError",
   "print 없이 r만 작성"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "제2유형 제출 코드 디버깅 — 누수·인코딩·형식",
  "problem": "문제: test의 각 id에 대해 target=1일 확률을 'pred' 열로 result.csv에 제출(평가 ROC-AUC). 다음 코드의 실수를 찾아 고치시오.\nX = train.drop(columns=['target'])\ny = train['target']\nX = pd.get_dummies(X)\nX_test = pd.get_dummies(test)\nscaler = StandardScaler()\nX_s = scaler.fit_transform(X)\nX_test_s = scaler.fit_transform(X_test)\nmodel = RandomForestClassifier(random_state=42).fit(X_s, y)\npred = model.predict(X_test_s)\npd.DataFrame({'id':test['id'], 'prediction':pred}).to_csv('result.csv')",
  "steps": [
   "① id 학습 포함 → X = train.drop(columns=['id','target']), X_test = test.drop(columns=['id']), test['id'] 별도 보관",
   "② 더미 컬럼 불일치 → concat 후 일괄 get_dummies 또는 X_test.reindex(columns=X.columns, fill_value=0)",
   "③ test에 fit_transform → scaler.transform(X_test) (RF는 스케일링 자체 불필요)",
   "④ predict → model.predict_proba(X_test)[:, 1]",
   "⑤ 컬럼명 'prediction' → 지시대로 'pred'",
   "⑥ to_csv('result.csv', index=False)",
   "⑦ pd.read_csv('result.csv')로 shape·columns·0~1 범위 확인"
  ],
  "answer": "pd.DataFrame({'id': test['id'], 'pred': model.predict_proba(X_test)[:, 1]}).to_csv('result.csv', index=False)",
  "traps": [
   "모델 성능보다 형식 — 컬럼명·index=False 하나만 틀려도 채점 실패 위험",
   "get_dummies 따로 수행 시 test 컬럼 수가 달라 predict 오류",
   "확률 요구에 0/1 레이블 제출"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "제3유형 코드 디버깅 — 단측 방향·해석",
  "problem": "문제: 새 교수법 반 A의 평균 점수가 기존 반 B보다 높다고 할 수 있는지 유의수준 0.05로 검정하고, 통계량·p-value(소수 4자리)와 결론을 출력하시오(등분산 가정).\nA = [72,75,78,80,74,77]\nB = [70,71,73,72,69,74]\nt, p = stats.ttest_ind(A, B, alternative='less')\nprint(t, p)\nprint('귀무가설 채택' if p < 0.05 else '귀무가설 기각')",
  "steps": [
   "① \"A가 B보다 높다\" → alternative='greater' (첫 인자 A 기준)",
   "② 반올림 → print(f'(1) t: {t:.4f}') / print(f'(2) p-value: {p:.4f}')",
   "③ 판정 논리 반대 → p < 0.05 이면 '귀무가설 기각'",
   "(선택) stats.levene(A, B) p=0.2398 → 등분산 가정 무리 없음",
   "수정 후 t = 3.1953, p = 0.0048 (양측이면 0.0096)"
  ],
  "answer": "t = 3.1953, p-value = 0.0048 → 유의수준 0.05에서 귀무가설 기각, A반 평균이 유의하게 높음",
  "traps": [
   "'less'로 쓰면 p ≈ 0.9952로 결론이 뒤집힘",
   "p ≥ 0.05를 '귀무가설 증명'으로 서술",
   "통계량과 p-value 순서 혼동"
  ]
 }
];
