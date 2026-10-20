/* ============================================================
   CKA (Certified Kubernetes Administrator) — 학습·퀴즈 데이터
   소스: 02_타자격증_학습자료/CKA_Kubernetes_학습자료.txt (KodeKloud 강의 매핑) + CNCF 커리큘럼
   ※ 이 파일이 소스 원본. index.html 은 렌더러(CPPG 학습사이트와 공용 엔진).
   ============================================================ */
const CPPG = {};   // 렌더러 공용 전역명 (자격증 무관)

CPPG.meta = {
 "name": "CKA 쿠버네티스 관리자",
 "brand": "CKA",
 "tag": "CNCF · Linux Foundation CKA",
 "storeKey": "cka",
 "topicUnit": "단원",
 "title": "CKA — 암기·퀴즈·실습 학습",
 "h1": "CKA",
 "unit": "도메인",
 "labelStyle": "named",
 "outUnit": "문항",
 "passRule": {
  "pct": 66,
  "per": 0
 },
 "shuffleChoices": true,
 "full": "Certified Kubernetes Administrator (CNCF · Linux Foundation)",
 "host": "CNCF · Linux Foundation",
 "type": "실기형(Performance-Based) — 원격 감독 환경에서 실제 클러스터 작업",
 "time": "2시간",
 "pass": "66% 이상",
 "book": "저장소 CKA_Kubernetes_학습자료.txt (KodeKloud CKA 강의) + Kubernetes 공식 문서",
 "slogan": "CKA = 아키텍처·설치(25) + 워크로드·스케줄링(15) + 서비스·네트워킹(20) + 스토리지(10) + ★트러블슈팅(30)★ — 손이 기억하는 kubectl",
 "paperSpec": [
  {
   "s": "s1",
   "n": 13
  },
  {
   "s": "s2",
   "n": 7
  },
  {
   "s": "s3",
   "n": 10
  },
  {
   "s": "s4",
   "n": 5
  },
  {
   "s": "s5",
   "n": 15
  }
 ],
 "footer": [
  "CKA / 주관 <b>CNCF · Linux Foundation</b> · 실기형 2시간 · <b>66% 합격</b> · 원격 감독(PSI) · 시험 중 Kubernetes 공식 문서 참조 가능",
  "도메인 배점: 클러스터 아키텍처·설치·구성 25 · 워크로드·스케줄링 15 · 서비스·네트워킹 20 · 스토리지 10 · 트러블슈팅 30%. 시험 Kubernetes 버전은 수시로 갱신되므로 응시 전 확인하세요.",
  "실제 시험은 객관식이 아닌 <b>실습 과제</b>입니다. 퀴즈는 개념·명령 점검용이고, ★📄 예시문제(실습 과제 + 정답 명령·YAML)★ 를 실제 클러스터에서 손으로 따라 하는 것이 실전 훈련입니다.",
  "⚠ 문항은 학습자료로 새로 만든 연습 문제이며 실제 기출이 아닙니다."
 ],
 "info": [
  {
   "title": "CKA 도메인 배점",
   "type": "table",
   "head": [
    "도메인",
    "배점",
    "핵심"
   ],
   "rows": [
    [
     "Cluster Architecture, Installation & Configuration",
     "25%",
     "RBAC · kubeadm 설치·업그레이드 · etcd 백업·복구 · Helm · Kustomize · CRD·Operator"
    ],
    [
     "Workloads & Scheduling",
     "15%",
     "Deployment 롤링·롤백 · ConfigMap·Secret · 스케줄링(taint·affinity) · 리소스 제한·HPA"
    ],
    [
     "Services & Networking",
     "20%",
     "Service 유형 · CoreDNS · NetworkPolicy · Ingress · Gateway API · CNI"
    ],
    [
     "Storage",
     "10%",
     "PV · PVC · StorageClass · 접근 모드 · 반환 정책 · 동적 프로비저닝"
    ],
    [
     "Troubleshooting",
     "30%",
     "Pod·Service 장애 · 컨트롤 플레인 · 노드 · 네트워크 · 로그·메트릭"
    ]
   ]
  },
  {
   "title": "실기 시험 요령",
   "type": "list",
   "items": [
    "문항마다 ★지정된 context 로 전환★(kubectl config use-context …) 부터 — 다른 클러스터에서 작업하면 0점.",
    "YAML 은 ★imperative + --dry-run=client -o yaml★ 로 뼈대를 만들고 고친다.",
    "alias k=kubectl · export do=\"--dry-run=client -o yaml\" 같은 단축 설정으로 시간 절약.",
    "배점 큰 트러블슈팅(30%)은 describe → logs → events → 매니페스트 순으로 원인을 좁힌다."
   ]
  }
 ]
};

CPPG.subjects = [
 {
  "id": "s1",
  "no": 1,
  "name": "클러스터 아키텍처·설치·구성",
  "short": "아키텍처",
  "out": 13,
  "color": "#326ce5",
  "desc": "컨트롤 플레인 구성요소 · kubeadm 설치·업그레이드 · etcd 백업·복구 · TLS·kubeconfig · RBAC·ServiceAccount · Helm · Kustomize · CRD·Operator (25%)"
 },
 {
  "id": "s2",
  "no": 2,
  "name": "워크로드·스케줄링",
  "short": "워크로드",
  "out": 7,
  "color": "#0e7490",
  "desc": "Deployment 롤링 업데이트·롤백 · ConfigMap·Secret · 멀티컨테이너·init · 리소스 요청·제한 · taint·toleration·affinity · DaemonSet·Static Pod · HPA (15%)"
 },
 {
  "id": "s3",
  "no": 3,
  "name": "서비스·네트워킹",
  "short": "네트워킹",
  "out": 10,
  "color": "#7c3aed",
  "desc": "Service 유형·Endpoint · kube-proxy · CNI · CoreDNS·FQDN · NetworkPolicy · Ingress·IngressClass · Gateway API (20%)"
 },
 {
  "id": "s4",
  "no": 4,
  "name": "스토리지",
  "short": "스토리지",
  "out": 5,
  "color": "#15803d",
  "desc": "Volume · PV·PVC 바인딩 · 접근 모드(RWO·ROX·RWX·RWOP) · 반환 정책 · StorageClass·동적 프로비저닝 · CSI (10%)"
 },
 {
  "id": "s5",
  "no": 5,
  "name": "트러블슈팅",
  "short": "트러블슈팅",
  "out": 15,
  "color": "#c2410c",
  "desc": "Pod 상태별 원인(Pending·CrashLoopBackOff·ImagePullBackOff) · Service 장애 · 컨트롤 플레인·kubelet · 노드 NotReady · 네트워크·DNS · 로그·메트릭 ★최대 배점 30%★"
 }
];

CPPG.cards = [
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "kube-apiserver",
  "key": "클러스터의 유일한 진입점(REST)",
  "back": "모든 요청(kubectl·컨트롤러·스케줄러·kubelet)이 거치는 ★유일한 진입점★. ★인증 → 인가 → Admission Control★ 순서로 처리한 뒤 ★etcd 에 읽고 쓰는 유일한 구성요소★.",
  "tip": "다른 구성요소는 etcd 와 직접 통신하지 않는다"
 },
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "etcd",
  "key": "클러스터 상태 저장소(분산 Key-Value)",
  "back": "모든 오브젝트 상태를 저장하는 ★분산 Key-Value 저장소★. ★Raft 합의★ 로 일관성 유지. 포트 ★2379(클라이언트) · 2380(피어)★.",
  "tip": "etcd 를 잃으면 클러스터 상태 전체를 잃는다 → 정기 스냅샷"
 },
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "kube-scheduler",
  "key": "Pod 를 어느 노드에 둘지 결정",
  "back": "nodeName 이 비어 있는 Pod 에 대해 ★필터링(Filtering) → 점수화(Scoring)★ 로 노드를 고르고 바인딩. 실제 컨테이너 실행은 kubelet 이 한다.",
  "tip": "스케줄러가 죽으면 새 Pod 는 Pending 으로 남는다"
 },
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "kube-controller-manager",
  "key": "원하는 상태로 맞추는 제어 루프 묶음",
  "back": "Node·ReplicaSet·Deployment·Endpoint·ServiceAccount·Job 등 ★컨트롤러를 하나의 프로세스로 실행★. 현재 상태를 원하는 상태(desired state)로 맞추는 ★Reconciliation Loop★.",
  "tip": "ReplicaSet 수가 안 맞으면 controller-manager 부터 확인"
 },
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "kubelet",
  "key": "각 노드의 에이전트",
  "back": "API 서버에서 배정된 Pod 를 받아 ★컨테이너 런타임(CRI)으로 실행★ 하고 상태를 보고. ★/etc/kubernetes/manifests 의 Static Pod★ 도 직접 실행. kubeadm 은 kubelet 을 Pod 로 배포하지 ★않는다★(systemd 서비스).",
  "tip": "노드 NotReady → systemctl status kubelet · journalctl -u kubelet"
 },
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "kube-proxy",
  "key": "Service 트래픽 라우팅 규칙 관리",
  "back": "각 노드에서 ★Service → Pod 로 가는 규칙(iptables 또는 IPVS)★ 을 관리. ★DaemonSet★ 으로 배포(kubeadm).",
  "tip": "kube-proxy 는 Pod 간 네트워크(CNI)를 만들지 않는다"
 },
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "컨테이너 런타임과 CRI",
  "key": "containerd · CRI-O · crictl",
  "back": "kubelet 은 ★CRI(Container Runtime Interface)★ 로 런타임과 통신. v1.24 에서 ★dockershim 제거★ → containerd·CRI-O 사용. 노드 점검 CLI 는 ★crictl★ (crictl ps · crictl pods · crictl logs).",
  "tip": "Docker 로 빌드한 이미지는 OCI 이미지라 그대로 실행된다"
 },
 {
  "s": "s1",
  "g": "아키텍처",
  "front": "Static Pod",
  "key": "kubelet 이 manifest 파일로 직접 실행",
  "back": "★/etc/kubernetes/manifests★ (kubelet 설정 staticPodPath) 의 YAML 을 kubelet 이 직접 실행. kubeadm 의 ★apiserver·etcd·scheduler·controller-manager★ 가 Static Pod. 이름 뒤에 ★-노드명★ 이 붙고 API 로 삭제해도 다시 생긴다.",
  "tip": "수정은 파일을 고치면 kubelet 이 자동 재생성"
 },
 {
  "s": "s1",
  "g": "업그레이드",
  "front": "kubeadm 업그레이드 규칙",
  "key": "Minor 버전은 한 단계씩",
  "back": "★v1.30 → v1.31 처럼 Minor 를 한 단계씩★ 올린다(건너뛰기 불가). 순서는 ★Control Plane 먼저 → Worker★. kubelet 은 kube-apiserver 보다 ★최신일 수 없다★(최대 3 Minor 낮은 것까지 허용).",
  "tip": "kubeadm upgrade plan 으로 가능한 대상 버전 확인"
 },
 {
  "s": "s1",
  "g": "업그레이드",
  "front": "kubeadm upgrade apply vs node",
  "key": "첫 Control Plane vs 나머지 노드",
  "back": "★kubeadm upgrade apply v1.x.y★ — 첫 번째 Control Plane 노드에서 클러스터 구성요소 업그레이드 / ★kubeadm upgrade node★ — 추가 Control Plane·Worker 노드에서 로컬 구성 갱신.",
  "tip": "apply 는 한 번, node 는 나머지 노드마다"
 },
 {
  "s": "s1",
  "g": "업그레이드",
  "front": "drain · cordon · uncordon",
  "key": "노드 유지보수 3명령",
  "back": "★cordon★ — 스케줄 불가(SchedulingDisabled)만 표시 / ★drain★ — cordon + Pod 축출(eviction) · DaemonSet 은 --ignore-daemonsets 필요 / ★uncordon★ — 다시 스케줄 가능.",
  "tip": "drain 은 컨트롤러 없는 단독 Pod 가 있으면 --force 없이는 실패"
 },
 {
  "s": "s1",
  "g": "업그레이드",
  "front": "kubeadm join 토큰 재발급",
  "key": "kubeadm token create --print-join-command",
  "back": "기본 부트스트랩 토큰은 ★24시간★ 후 만료. 새 Worker 를 붙일 때 ★kubeadm token create --print-join-command★ 로 join 명령 전체를 다시 출력.",
  "tip": "join 에는 토큰 + --discovery-token-ca-cert-hash 필요"
 },
 {
  "s": "s1",
  "g": "etcd",
  "front": "etcd 스냅샷 백업 필수 옵션",
  "key": "--endpoints · --cacert · --cert · --key",
  "back": "ETCDCTL_API=3 etcdctl ★--endpoints=https://127.0.0.1:2379 --cacert --cert --key★ snapshot save 파일. 인증서 경로는 ★/etc/kubernetes/manifests/etcd.yaml★ 의 --trusted-ca-file · --cert-file · --key-file 에서 확인.",
  "tip": "etcdctl v3.4+ 는 API 3 이 기본이지만 시험에서는 ETCDCTL_API=3 를 붙이는 습관이 안전"
 },
 {
  "s": "s1",
  "g": "etcd",
  "front": "etcd 스냅샷 복원",
  "key": "새 data-dir 로 restore → etcd.yaml hostPath 변경",
  "back": "★etcdctl snapshot restore 파일 --data-dir=/var/lib/etcd-from-backup★ (최신 버전은 etcdutl snapshot restore 권장) → ★etcd.yaml 의 hostPath(etcd-data) 경로를 새 디렉터리로★ 수정 → kubelet 이 etcd Static Pod 재생성.",
  "tip": "복원은 로컬 파일 작업이라 인증서 옵션 없이도 동작"
 },
 {
  "s": "s1",
  "g": "etcd",
  "front": "etcd 쿼럼(Quorum)",
  "key": "과반수 = n/2 + 1",
  "back": "★과반수(⌊n/2⌋+1)★ 가 살아 있어야 쓰기 가능. 3대 → 1대 장애 허용, 5대 → 2대, 7대 → 3대. ★짝수는 이득이 없다★(4대도 1대만 허용).",
  "tip": "Control Plane 은 3·5 등 홀수로"
 },
 {
  "s": "s1",
  "g": "etcd",
  "front": "Stacked vs External etcd",
  "key": "Control Plane 노드에 같이 vs 별도 클러스터",
  "back": "★Stacked★ — Control Plane 노드마다 etcd 동거, 구성 단순·노드 장애 시 둘 다 손실 / ★External★ — etcd 전용 노드, 노드 수 많지만 장애 격리 우수.",
  "tip": "kubeadm 기본은 Stacked"
 },
 {
  "s": "s1",
  "g": "인증서",
  "front": "Kubernetes 인증서 위치",
  "key": "/etc/kubernetes/pki",
  "back": "클러스터 CA ★ca.crt·ca.key★, API 서버 ★apiserver.crt★, etcd 전용 CA ★pki/etcd/ca.crt★, kubelet 클라이언트 apiserver-kubelet-client.crt. 만료 점검 ★kubeadm certs check-expiration★, 갱신 kubeadm certs renew all.",
  "tip": "kubeadm 인증서 기본 유효기간 1년, CA 는 10년"
 },
 {
  "s": "s1",
  "g": "인증서",
  "front": "사용자 인증서와 CSR API",
  "key": "CertificateSigningRequest → approve",
  "back": "openssl 로 키·CSR 생성 → ★CertificateSigningRequest★ 오브젝트(request 는 base64, ★signerName: kubernetes.io/kube-apiserver-client★, usages: client auth) → ★kubectl certificate approve 이름★ → status.certificate 를 base64 디코드.",
  "tip": "인증서 CN = 사용자 이름, O = 그룹"
 },
 {
  "s": "s1",
  "g": "인증서",
  "front": "인증서 내용 확인",
  "key": "openssl x509 -in 파일 -text -noout",
  "back": "Subject(CN·O)·Issuer·유효기간·SAN 확인. API 서버 인증서의 ★SAN 에 kubernetes·kubernetes.default·서비스 IP·노드 IP★ 가 들어 있어야 한다.",
  "tip": "인증서 오류는 kubelet·apiserver 로그(crictl logs)로 추적"
 },
 {
  "s": "s1",
  "g": "RBAC",
  "front": "Role vs ClusterRole",
  "key": "네임스페이스 범위 vs 클러스터 범위",
  "back": "★Role★ — 한 네임스페이스 안의 리소스 권한 / ★ClusterRole★ — 노드·PV 같은 ★클러스터 범위 리소스★ 또는 모든 네임스페이스 공통 권한. 연결은 RoleBinding / ClusterRoleBinding.",
  "tip": "RoleBinding 이 ClusterRole 을 참조하면 그 네임스페이스로 한정"
 },
 {
  "s": "s1",
  "g": "RBAC",
  "front": "권한 확인 kubectl auth can-i",
  "key": "kubectl auth can-i 동사 리소스 --as 사용자",
  "back": "예) ★kubectl auth can-i create deployments --as dev-user -n dev★ → yes/no. ServiceAccount 는 ★--as system:serviceaccount:네임스페이스:이름★.",
  "tip": "--list 로 보유 권한 전체 조회"
 },
 {
  "s": "s1",
  "g": "RBAC",
  "front": "ServiceAccount 토큰 (v1.24+)",
  "key": "kubectl create token · 시간 제한 토큰",
  "back": "v1.24 부터 SA 생성 시 ★Secret 토큰이 자동 생성되지 않는다★. Pod 에는 ★projected volume 으로 기한 있는 토큰★ 이 마운트되고, 수동 발급은 ★kubectl create token SA이름★.",
  "tip": "Pod 의 SA 는 spec.serviceAccountName — 실행 중 Pod 는 변경 불가(재생성)"
 },
 {
  "s": "s1",
  "g": "kubeconfig",
  "front": "kubeconfig 구조",
  "key": "clusters · users · contexts",
  "back": "★clusters★(API 주소·CA) + ★users★(인증서·토큰) + ★contexts★(cluster + user + namespace 조합) + current-context. 기본 경로 ★~/.kube/config★, 다른 파일은 --kubeconfig 또는 KUBECONFIG.",
  "tip": "시험 문제마다 kubectl config use-context 먼저"
 },
 {
  "s": "s1",
  "g": "kubeconfig",
  "front": "컨텍스트 전환",
  "key": "kubectl config use-context",
  "back": "★kubectl config get-contexts★ 목록 · ★use-context 이름★ 전환 · ★set-context --current --namespace=ns★ 기본 네임스페이스 변경 · view --minify 로 현재 설정만 확인.",
  "tip": "set-context 는 현재 컨텍스트를 바꾸지 않는다(--current 제외)"
 },
 {
  "s": "s1",
  "g": "kubectl",
  "front": "JSONPath 출력",
  "key": "-o jsonpath='{...}'",
  "back": "예) ★kubectl get nodes -o jsonpath='{.items[*].metadata.name}'★ · 반복 {range .items[*]}{.metadata.name}{\"\\t\"}{end} · 정렬 ★--sort-by=.metadata.creationTimestamp★ · 표 ★-o custom-columns=NAME:.metadata.name★.",
  "tip": "작은따옴표로 감싸야 셸이 {} 를 해석하지 않는다"
 },
 {
  "s": "s1",
  "g": "kubectl",
  "front": "YAML 빠르게 만들기",
  "key": "--dry-run=client -o yaml",
  "back": "★kubectl create deployment web --image=nginx --dry-run=client -o yaml > web.yaml★ 로 뼈대 생성 후 수정. 필드 확인은 ★kubectl explain pod.spec --recursive★.",
  "tip": "시험 시간 절약 1순위 — 처음부터 YAML 을 손으로 쓰지 않는다"
 },
 {
  "s": "s1",
  "g": "Helm",
  "front": "Helm 기본 명령",
  "key": "repo add → install → upgrade → rollback",
  "back": "★helm repo add 이름 URL★ · helm repo update · ★helm install 릴리스 차트 -n ns --set key=val★ · helm upgrade · ★helm rollback 릴리스 리비전★ · helm list -A · helm uninstall.",
  "tip": "Helm 3 는 Tiller 가 없다 — 릴리스 정보는 네임스페이스의 Secret 에 저장"
 },
 {
  "s": "s1",
  "g": "Helm",
  "front": "Helm 값 덮어쓰기",
  "key": "values.yaml · -f · --set",
  "back": "차트 기본값 ★values.yaml★ → ★-f my-values.yaml★ → ★--set★ 순으로 뒤가 우선. 기본값 확인 ★helm show values 차트★, 설치된 값 helm get values 릴리스.",
  "tip": "helm template 으로 렌더링 결과만 미리 보기"
 },
 {
  "s": "s1",
  "g": "Kustomize",
  "front": "Kustomize base · overlay",
  "key": "kustomization.yaml · kubectl apply -k",
  "back": "★base★ 공통 매니페스트 + ★overlays/환경★ 의 kustomization.yaml 에서 resources·patches·namePrefix·commonLabels·images 로 변형. 적용 ★kubectl apply -k 디렉터리★, 미리보기 kubectl kustomize 디렉터리.",
  "tip": "Helm 은 템플릿, Kustomize 는 템플릿 없이 패치"
 },
 {
  "s": "s1",
  "g": "확장",
  "front": "CRD 와 Operator",
  "key": "API 확장 + 커스텀 컨트롤러",
  "back": "★CRD(CustomResourceDefinition)★ 로 새 리소스 종류를 API 에 등록 → 그 리소스를 감시·조정하는 ★커스텀 컨트롤러★ 를 함께 배포한 것이 ★Operator★(운영 지식의 자동화).",
  "tip": "CRD 만 만들면 저장만 될 뿐 아무 동작도 하지 않는다"
 },
 {
  "s": "s1",
  "g": "확장",
  "front": "Admission Controller",
  "key": "인가 이후 요청 변형·검증",
  "back": "인증 → 인가 다음 단계에서 요청을 ★변형(Mutating) → 검증(Validating)★. 예: NamespaceLifecycle · LimitRanger · ResourceQuota · ★PodSecurity★. 활성화는 kube-apiserver ★--enable-admission-plugins★.",
  "tip": "웹훅으로 확장: MutatingAdmissionWebhook · ValidatingAdmissionWebhook"
 },
 {
  "s": "s1",
  "g": "확장",
  "front": "API 버전과 그룹",
  "key": "core(v1) · apps/v1 · rbac.authorization.k8s.io/v1",
  "back": "Pod·Service·ConfigMap 은 ★core 그룹(apiVersion: v1)★, Deployment·DaemonSet 은 ★apps/v1★, Role 은 rbac.authorization.k8s.io/v1. 조회 ★kubectl api-resources★ · kubectl api-versions.",
  "tip": "deprecated 버전 변환은 kubectl convert 플러그인"
 },
 {
  "s": "s2",
  "g": "Pod·Deployment",
  "front": "ReplicaSet vs Deployment",
  "key": "Deployment 가 ReplicaSet 을 관리",
  "back": "ReplicaSet — selector 에 맞는 Pod 수를 ★replicas 로 유지(자가 치유)★. Deployment — ReplicaSet 을 ★버전별로 생성·관리★ 해 ★롤링 업데이트·롤백★ 을 제공. 실무·시험 모두 Deployment 로 만든다.",
  "tip": "Deployment 수정 → 새 ReplicaSet 생성 → 이전 ReplicaSet 은 replicas 0 으로 보존(롤백용)"
 },
 {
  "s": "s2",
  "g": "Pod·Deployment",
  "front": "RollingUpdate 파라미터",
  "key": "maxSurge · maxUnavailable (기본 25%)",
  "back": "★maxSurge★ — 업데이트 중 replicas 보다 ★추가로 만들 수 있는★ Pod 수 / ★maxUnavailable★ — 업데이트 중 ★사용 불가여도 되는★ Pod 수. 기본값은 둘 다 ★25%★, 둘 다 0 일 수는 없다.",
  "tip": "strategy.type: Recreate — 기존 Pod 를 모두 삭제한 뒤 새로 생성(다운타임 발생)"
 },
 {
  "s": "s2",
  "g": "Pod·Deployment",
  "front": "kubectl rollout",
  "key": "status · history · undo · pause · resume",
  "back": "★kubectl rollout status deployment/web★ 진행 확인 · ★history★ 리비전 목록 · ★undo --to-revision=N★ 롤백 · pause/resume 로 여러 변경을 한 번에 반영. 변경 사유는 annotation ★kubernetes.io/change-cause★ 로 남긴다.",
  "tip": "--record 는 deprecated — kubectl annotate deployment/web kubernetes.io/change-cause=\"...\""
 },
 {
  "s": "s2",
  "g": "Pod·Deployment",
  "front": "kubectl set image",
  "key": "컨테이너이름=이미지",
  "back": "★kubectl set image deployment/web nginx=nginx:1.27★ — 앞의 nginx 는 ★컨테이너 이름★, 뒤가 새 이미지. 실행 즉시 롤링 업데이트가 시작된다.",
  "tip": "컨테이너 이름을 이미지 이름으로 착각하면 \"unable to find container\" 오류"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "Labels · Selectors",
  "key": "등호 기반 · 집합 기반",
  "back": "등호 기반 ★app=web★, ★env!=dev★ / 집합 기반 ★env in (prod,staging)★, notin, exists. Deployment·Service 는 selector 로 Pod 를 묶는다. 노드 라벨은 ★kubectl label nodes node01 disktype=ssd★.",
  "tip": "라벨 삭제는 키 뒤에 - : kubectl label nodes node01 disktype-"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "nodeName (수동 스케줄링)",
  "key": "스케줄러를 거치지 않음",
  "back": "spec.nodeName 을 지정하면 ★스케줄러를 건너뛰고★ 해당 노드의 kubelet 이 바로 실행. 스케줄러가 처리하는 ★NoSchedule taint·affinity 는 적용되지 않는다★. 스케줄러가 없을 때 쓰는 방법.",
  "tip": "이미 생성된 Pod 의 nodeName 은 수정 불가 — 삭제 후 재생성(또는 Binding 객체)"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "Taint 효과 3종",
  "key": "NoSchedule · PreferNoSchedule · NoExecute",
  "back": "★NoSchedule★ — 견딜(tolerate) 수 없는 새 Pod 배치 금지 / ★PreferNoSchedule★ — 가급적 피함 / ★NoExecute★ — 새 Pod 금지 + ★이미 실행 중인 Pod 도 축출★(tolerationSeconds 만큼 유예).",
  "tip": "추가 kubectl taint nodes node01 env=prod:NoSchedule · 제거는 끝에 - 를 붙인다"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "Toleration",
  "key": "operator Equal · Exists",
  "back": "Pod 가 특정 taint 를 ★견딜 수 있음★ 을 선언. ★Equal★ 은 key·value·effect 일치, ★Exists★ 는 key(와 effect)만 일치하면 된다. Toleration 은 배치를 ★허용★ 할 뿐 그 노드로 ★끌어오지는 않는다★.",
  "tip": "특정 노드에 \"반드시\" 보내려면 taint/toleration + nodeAffinity 조합"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "nodeSelector vs nodeAffinity",
  "key": "단순 일치 vs 표현식",
  "back": "★nodeSelector★ — 라벨 키=값 단순 일치(AND). ★nodeAffinity★ — In · NotIn · Exists · DoesNotExist · Gt · Lt 연산자, ★required(필수)★ / ★preferred(선호·weight)★ 구분.",
  "tip": "IgnoredDuringExecution — 실행 중에 노드 라벨이 바뀌어도 Pod 는 축출되지 않는다"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "podAffinity · podAntiAffinity",
  "key": "다른 Pod 와의 위치 관계",
  "back": "★podAffinity★ — 특정 라벨 Pod 와 ★같은 토폴로지★ 에 배치 / ★podAntiAffinity★ — ★다른 토폴로지★ 에 분산. 기준 범위는 ★topologyKey★ (예: kubernetes.io/hostname = 노드 단위, topology.kubernetes.io/zone = 존 단위).",
  "tip": "레플리카를 노드마다 1개씩 분산 = podAntiAffinity + topologyKey hostname"
 },
 {
  "s": "s2",
  "g": "자원 관리",
  "front": "requests vs limits",
  "key": "스케줄링 기준 vs 상한",
  "back": "★requests★ — 스케줄러가 노드 여유를 판단하는 ★보장량★ / ★limits★ — 사용 상한. CPU 가 limit 을 넘으면 ★스로틀링★, 메모리가 limit 을 넘으면 ★OOMKilled★. CPU 단위 1 = 1000m, 메모리 Mi·Gi.",
  "tip": "limits 만 쓰면 requests 는 limits 와 같은 값으로 설정된다"
 },
 {
  "s": "s2",
  "g": "자원 관리",
  "front": "QoS 클래스",
  "key": "Guaranteed · Burstable · BestEffort",
  "back": "★Guaranteed★ — 모든 컨테이너의 CPU·메모리 requests = limits / ★BestEffort★ — requests·limits 가 전혀 없음 / ★Burstable★ — 그 밖의 경우. 노드 자원 부족 시 ★BestEffort 부터★ 축출.",
  "tip": "kubectl get pod p -o jsonpath=\"{.status.qosClass}\" 로 확인"
 },
 {
  "s": "s2",
  "g": "자원 관리",
  "front": "LimitRange vs ResourceQuota",
  "key": "컨테이너 단위 기본값·범위 vs 네임스페이스 총량",
  "back": "★LimitRange★ — 네임스페이스의 컨테이너(또는 Pod·PVC)별 ★기본 requests·limits 와 min·max★ / ★ResourceQuota★ — 네임스페이스 ★전체 합계★(CPU·메모리 총량, Pod·Service 개수) 제한.",
  "tip": "CPU·메모리 쿼터가 있으면 requests·limits 없는 Pod 는 생성 거부(LimitRange 기본값으로 보완)"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "DaemonSet",
  "key": "노드마다 Pod 1개",
  "back": "모든(또는 nodeSelector·affinity 에 맞는) 노드에 ★Pod 를 1개씩★ 실행. 노드가 추가되면 자동 배치. 용도 — kube-proxy · CNI 에이전트 · 로그 수집(Fluent Bit) · 노드 모니터링.",
  "tip": "kubectl create daemonset 은 없다 — deployment 를 --dry-run=client -o yaml 로 만들고 kind 수정, replicas·strategy 삭제"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "Static Pod",
  "key": "kubelet 이 매니페스트 디렉터리에서 직접 실행",
  "back": "API 서버 없이 ★kubelet 이 staticPodPath 의 YAML 을 직접 실행★. 경로는 kubelet 설정 파일(보통 ★/var/lib/kubelet/config.yaml★)의 staticPodPath — kubeadm 기본값 ★/etc/kubernetes/manifests★. API 서버에는 ★Pod이름-노드이름★ 의 읽기 전용 미러 Pod 로 보인다.",
  "tip": "kubectl delete 로는 다시 생긴다 — 매니페스트 파일을 지워야 삭제"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "PriorityClass · 선점",
  "key": "높은 value 가 우선",
  "back": "PriorityClass 의 ★value 가 클수록 우선★. 자원이 부족하면 스케줄러가 ★낮은 우선순위 Pod 를 선점(축출)★ 해 자리를 만든다. preemptionPolicy: Never 면 선점하지 않음. 내장 클래스 system-cluster-critical · system-node-critical.",
  "tip": "globalDefault: true 는 priorityClassName 없는 Pod 의 기본값(클러스터에 하나만)"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "다중 스케줄러",
  "key": "spec.schedulerName",
  "back": "기본 스케줄러 외에 추가 스케줄러를 배포하고 Pod 의 ★spec.schedulerName★ 으로 지정. 스케줄러 설정은 ★KubeSchedulerConfiguration★ 의 profiles(스케줄러 이름·플러그인)로 정의.",
  "tip": "어느 스케줄러가 배치했는지는 kubectl get events 의 Scheduled 이벤트 출처로 확인"
 },
 {
  "s": "s2",
  "g": "스케줄링",
  "front": "Admission Controller",
  "key": "인증·인가 뒤, 저장 전 변경·검증",
  "back": "API 요청이 ★인증 → 인가★ 를 통과한 뒤 ★Mutating(변경)★ → 스키마 검증 → ★Validating(검증)★ 순으로 처리되고 etcd 에 저장. 예 — NamespaceLifecycle · LimitRanger · ResourceQuota · ServiceAccount · DefaultStorageClass.",
  "tip": "활성화는 kube-apiserver --enable-admission-plugins (static pod 매니페스트 수정)"
 },
 {
  "s": "s2",
  "g": "설정 주입",
  "front": "command · args",
  "key": "ENTRYPOINT · CMD 덮어쓰기",
  "back": "Pod 의 ★command★ 는 이미지의 ★ENTRYPOINT★ 를, ★args★ 는 ★CMD★ 를 덮어쓴다. kubectl run p --image=busybox ★--command -- sleep 1000★ 은 command, ★-- sleep 1000★ 만 쓰면 args.",
  "tip": "command: [\"sleep\"], args: [\"1000\"] 처럼 배열로 나눠 쓴다"
 },
 {
  "s": "s2",
  "g": "설정 주입",
  "front": "ConfigMap 주입 3방식",
  "key": "env · envFrom · volume",
  "back": "★env.valueFrom.configMapKeyRef★ 로 키 하나 / ★envFrom.configMapRef★ 로 전체 키를 환경변수로 / ★volume★ 으로 파일 마운트. 생성 — kubectl create configmap app-cm --from-literal=K=V · --from-file · --from-env-file.",
  "tip": "볼륨 마운트는 ConfigMap 변경이 지연 반영되지만 환경변수는 Pod 재시작 전까지 그대로"
 },
 {
  "s": "s2",
  "g": "설정 주입",
  "front": "Secret",
  "key": "기본은 base64 인코딩일 뿐",
  "back": "data 필드는 ★base64 인코딩★(암호화 아님) — echo -n pass | base64. stringData 는 평문으로 쓰면 저장 시 인코딩. 유형 Opaque · kubernetes.io/tls · kubernetes.io/dockerconfigjson. etcd 저장 암호화는 ★EncryptionConfiguration★ + kube-apiserver ★--encryption-provider-config★.",
  "tip": "providers 목록의 첫 번째가 암호화에 쓰인다 — identity 가 첫 번째면 암호화 안 됨"
 },
 {
  "s": "s2",
  "g": "멀티 컨테이너",
  "front": "initContainers",
  "key": "순서대로 실행·완료 후 앱 시작",
  "back": "initContainers 는 ★정의 순서대로 하나씩 실행★ 되고 ★모두 성공 종료★ 해야 앱 컨테이너가 시작. 실패하면 Pod restartPolicy 에 따라 재시도. 용도 — 의존 서비스 대기, 설정 파일 준비.",
  "tip": "네이티브 사이드카 — initContainers 에 restartPolicy: Always 를 주면 앱과 함께 계속 실행(v1.29 부터 기본 활성)"
 },
 {
  "s": "s2",
  "g": "멀티 컨테이너",
  "front": "멀티 컨테이너 패턴",
  "key": "Sidecar · Ambassador · Adapter",
  "back": "한 Pod 의 컨테이너는 ★네트워크 네임스페이스(localhost)와 볼륨을 공유★. ★Sidecar★ 보조 기능(로그 전송) · ★Ambassador★ 외부 연결 프록시 · ★Adapter★ 출력 형식 변환.",
  "tip": "같은 Pod 의 컨테이너끼리는 localhost:포트 로 통신"
 },
 {
  "s": "s2",
  "g": "오토스케일링",
  "front": "HPA",
  "key": "Pod 개수 자동 조정",
  "back": "★HorizontalPodAutoscaler★ 가 지표(CPU 사용률 등)에 따라 ★replicas★ 를 조정. ★metrics-server★ 필요, 사용률 기준이면 대상 컨테이너에 ★requests★ 가 있어야 한다. 명령 ★kubectl autoscale deployment web --cpu-percent=50 --min=2 --max=10★ · API autoscaling/v2.",
  "tip": "축소는 기본 안정화 창(300초) 때문에 천천히 일어난다"
 },
 {
  "s": "s2",
  "g": "오토스케일링",
  "front": "VPA · In-place Resize",
  "key": "Pod 자원 크기 조정",
  "back": "★VPA★ — requests·limits 자체를 추천·조정(별도 설치 애드온, updateMode Off · Initial · Recreate · Auto). ★In-place Pod Resize★ — 재시작 없이 자원 변경, 컨테이너 resizePolicy 로 재시작 여부 지정(v1.27 알파 도입).",
  "tip": "HPA 와 VPA 를 같은 CPU 지표에 동시에 쓰면 서로 충돌"
 },
 {
  "s": "s2",
  "g": "로깅·모니터링",
  "front": "kubectl logs · top",
  "key": "로그 · 자원 사용량",
  "back": "★kubectl logs p -c 컨테이너★ · ★-p(--previous)★ 직전에 종료된 컨테이너 로그 · -f 실시간 · --tail · --since · -l 라벨 선택. ★kubectl top node / pod --sort-by=cpu★ 는 ★metrics-server★ 필요.",
  "tip": "노드의 컨테이너 로그 파일은 /var/log/pods · /var/log/containers"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "Service 4종",
  "key": "ClusterIP · NodePort · LoadBalancer · ExternalName",
  "back": "★ClusterIP★(기본) — 클러스터 내부 가상 IP / ★NodePort★ — 모든 노드의 고정 포트(기본 30000-32767)로 노출 / ★LoadBalancer★ — 클라우드 LB 프로비저닝(NodePort·ClusterIP 포함) / ★ExternalName★ — 외부 DNS 이름으로 CNAME 응답(프록시 없음).",
  "tip": "type 생략 = ClusterIP"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "port · targetPort · nodePort",
  "key": "Service 포트 → Pod 포트 → 노드 포트",
  "back": "★port★ = Service(ClusterIP)가 받는 포트 / ★targetPort★ = 트래픽을 넘길 Pod 컨테이너 포트(생략 시 port 와 같음) / ★nodePort★ = 노드에 열리는 포트(NodePort·LoadBalancer).",
  "tip": "targetPort 는 숫자 또는 컨테이너 포트 이름"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "kubectl expose",
  "key": "명령형으로 Service 생성",
  "back": "★kubectl expose deployment web --port=80 --target-port=8080 --type=NodePort★ / Pod 도 가능: kubectl expose pod nginx --port=80 --name=nginx-svc. selector 는 대상 리소스의 label 을 그대로 사용.",
  "tip": "nodePort 값 지정은 expose 에 옵션이 없어 YAML 편집 필요"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "kubectl create service",
  "key": "selector 를 직접 고르지 못하는 생성 명령",
  "back": "kubectl create service nodeport web --tcp=80:8080 --node-port=30080 — selector 가 ★app=web(서비스 이름)★ 으로 자동 설정된다. 기존 Pod label 과 다르면 Endpoint 가 비므로 ★expose 가 더 안전★.",
  "tip": "--dry-run=client -o yaml 로 뽑아 selector 수정"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "Endpoints · EndpointSlice",
  "key": "Service 가 실제로 보내는 Pod IP 목록",
  "back": "selector 와 label 이 일치하고 ★Ready★ 인 Pod 의 IP:port 가 Endpoint 로 등록된다. ★kubectl get endpoints <svc>★ 가 비어 있으면 selector·label·readiness 를 의심. 현재 kube-proxy 는 ★EndpointSlice★ 를 사용.",
  "tip": "selector 없는 Service 는 Endpoint 를 수동 작성"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "Headless Service",
  "key": "clusterIP: None",
  "back": "가상 IP 없이 ★DNS 조회가 Pod IP 목록(A 레코드)을 직접 반환★. StatefulSet 의 Pod 별 고정 DNS(<pod>.<svc>.<ns>.svc.cluster.local)에 쓴다.",
  "tip": "kube-proxy 부하분산을 거치지 않는다"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "kube-proxy 모드",
  "key": "iptables · ipvs · nftables",
  "back": "Service VIP → Pod 로 전달 규칙을 각 노드에 설치. ★iptables★(Linux 기본) · ★ipvs★(대규모·다양한 LB 알고리즘) · nftables(최신 모드). ★userspace 모드는 v1.26 에서 제거★.",
  "tip": "kube-proxy 는 DaemonSet — 설정은 kube-system/kube-proxy ConfigMap"
 },
 {
  "s": "s3",
  "g": "DNS",
  "front": "Service FQDN",
  "key": "<svc>.<ns>.svc.cluster.local",
  "back": "같은 네임스페이스는 ★<svc>★ 만으로, 다른 네임스페이스는 ★<svc>.<ns>★ 로 접근. 전체 이름은 ★<svc>.<ns>.svc.cluster.local★.",
  "tip": "cluster.local 은 클러스터 도메인 기본값"
 },
 {
  "s": "s3",
  "g": "DNS",
  "front": "Pod DNS 레코드",
  "key": "IP 의 점(.)을 대시(-)로",
  "back": "Pod IP 10.244.1.5 in ns dev → ★10-244-1-5.dev.pod.cluster.local★. CoreDNS kubernetes 플러그인의 pods 설정이 필요.",
  "tip": "Service 는 svc, Pod 는 pod"
 },
 {
  "s": "s3",
  "g": "DNS",
  "front": "CoreDNS",
  "key": "클러스터 DNS 서버",
  "back": "kube-system 네임스페이스의 Deployment, Service 이름은 호환성 때문에 ★kube-dns★. 설정은 ★ConfigMap coredns 의 Corefile★. kubelet 이 Pod 의 /etc/resolv.conf 에 nameserver(kube-dns ClusterIP)를 넣는다.",
  "tip": "label 은 k8s-app=kube-dns"
 },
 {
  "s": "s3",
  "g": "DNS",
  "front": "Pod /etc/resolv.conf",
  "key": "nameserver · search · ndots:5",
  "back": "nameserver = kube-dns Service IP / search = <ns>.svc.cluster.local svc.cluster.local cluster.local / ★options ndots:5★ — 점이 5개 미만인 이름은 search 도메인을 먼저 붙여 조회.",
  "tip": "kubelet --cluster-dns · --cluster-domain(설정 파일 clusterDNS·clusterDomain)이 원천"
 },
 {
  "s": "s3",
  "g": "CNI",
  "front": "CNI 구성 위치",
  "key": "/etc/cni/net.d · /opt/cni/bin",
  "back": "★/etc/cni/net.d/★ — CNI 설정 파일(사전순 첫 파일 사용) / ★/opt/cni/bin/★ — 플러그인 바이너리. 컨테이너 런타임(containerd)이 Pod 생성 시 CNI 플러그인을 호출.",
  "tip": "CNI 미설치 시 노드가 NotReady(NetworkPluginNotReady)"
 },
 {
  "s": "s3",
  "g": "CNI",
  "front": "쿠버네티스 네트워크 모델",
  "key": "모든 Pod 는 NAT 없이 통신",
  "back": "① 모든 Pod 는 노드와 무관하게 ★NAT 없이 다른 Pod 와 통신★ ② 노드의 에이전트는 그 노드의 모든 Pod 와 통신 ③ Pod 가 보는 자기 IP = 다른 Pod 가 보는 IP. 구현은 CNI 플러그인 몫.",
  "tip": "Pod CIDR 과 Service CIDR 은 겹치면 안 된다"
 },
 {
  "s": "s3",
  "g": "CNI",
  "front": "CNI 플러그인 비교",
  "key": "Calico · Cilium · Flannel",
  "back": "★Calico★ — BGP·NetworkPolicy 지원 / ★Cilium★ — eBPF 기반, NetworkPolicy·L7 정책 / ★Flannel★ — 단순 오버레이, ★NetworkPolicy 미지원★.",
  "tip": "NetworkPolicy 는 CNI 가 지원해야 효과가 있다"
 },
 {
  "s": "s3",
  "g": "CNI",
  "front": "Pod CIDR · Service CIDR 확인",
  "key": "controller-manager · apiserver 옵션",
  "back": "Pod CIDR — kube-controller-manager ★--cluster-cidr★(노드별 podCIDR 할당) / Service CIDR — kube-apiserver ★--service-cluster-ip-range★. kubeadm 은 /etc/kubernetes/manifests 의 정적 Pod 매니페스트에서 확인.",
  "tip": "kubectl get node -o jsonpath='{.items[*].spec.podCIDR}'"
 },
 {
  "s": "s3",
  "g": "NetworkPolicy",
  "front": "NetworkPolicy 기본 원리",
  "key": "선택된 Pod 는 허용 목록만 통과",
  "back": "정책이 하나도 없으면 ★모두 허용★. 어떤 정책의 podSelector 에 선택되면 그 방향(policyTypes)은 ★정책에 명시된 트래픽만 허용(화이트리스트)★. 정책은 ★허용 규칙의 합집합★ — 거부 규칙은 없다.",
  "tip": "적용 대상은 spec.podSelector, 출처는 from/to"
 },
 {
  "s": "s3",
  "g": "NetworkPolicy",
  "front": "기본 거부(default deny)",
  "key": "podSelector: {} + 규칙 없음",
  "back": "spec.podSelector: {} (네임스페이스 모든 Pod) + policyTypes: [Ingress] + ingress 항목 없음 → ★들어오는 트래픽 전부 차단★. Egress 도 넣으면 나가는 트래픽 차단(DNS 포함 주의).",
  "tip": "egress 차단 시 UDP/TCP 53 허용 규칙을 따로 추가"
 },
 {
  "s": "s3",
  "g": "NetworkPolicy",
  "front": "from 의 AND · OR",
  "key": "한 항목 안 = AND / 항목 나열 = OR",
  "back": "- namespaceSelector 와 podSelector 가 ★같은 '-' 항목★ 에 있으면 \"그 네임스페이스의 그 Pod\"(AND) / ★별도 '-' 항목★ 이면 \"그 네임스페이스 전체 또는 그 Pod\"(OR).",
  "tip": "YAML 들여쓰기 하나로 의미가 바뀌는 단골 함정"
 },
 {
  "s": "s3",
  "g": "NetworkPolicy",
  "front": "namespaceSelector 라벨",
  "key": "kubernetes.io/metadata.name",
  "back": "모든 네임스페이스에는 자동 라벨 ★kubernetes.io/metadata.name=<ns이름>★ 이 붙는다(v1.22+). 네임스페이스 이름으로 선택할 때 이 라벨을 쓴다.",
  "tip": "kubectl get ns --show-labels 로 확인"
 },
 {
  "s": "s3",
  "g": "Ingress",
  "front": "Ingress",
  "key": "L7 HTTP(S) 라우팅",
  "back": "호스트·경로 기반으로 외부 HTTP(S)를 내부 Service 로 라우팅. ★Ingress Controller(예: ingress-nginx)가 설치돼 있어야 동작★. apiVersion networking.k8s.io/v1.",
  "tip": "Ingress 리소스만 만들면 아무 일도 일어나지 않는다"
 },
 {
  "s": "s3",
  "g": "Ingress",
  "front": "pathType 3종",
  "key": "Exact · Prefix · ImplementationSpecific",
  "back": "★Exact★ — 정확히 일치 / ★Prefix★ — '/' 로 나눈 경로 요소 단위 접두 일치(/foo 는 /foo/bar 일치, /foobar 불일치) / ImplementationSpecific — 컨트롤러 해석. networking.k8s.io/v1 에서 ★pathType 필수★.",
  "tip": "Prefix 는 문자열 접두가 아니라 경로 요소 단위"
 },
 {
  "s": "s3",
  "g": "Ingress",
  "front": "IngressClass",
  "key": "spec.ingressClassName",
  "back": "어떤 컨트롤러가 처리할지 지정. kubectl get ingressclass 로 이름 확인. 기본 클래스는 annotation ingressclass.kubernetes.io/is-default-class: \"true\".",
  "tip": "구 annotation kubernetes.io/ingress.class 는 사용 중단"
 },
 {
  "s": "s3",
  "g": "Ingress",
  "front": "kubectl create ingress",
  "key": "명령형 Ingress 생성",
  "back": "kubectl create ingress web --class=nginx --rule=\"example.com/api*=api-svc:80\" — 경로 끝 ★*★ 는 Prefix, 없으면 Exact. TLS: --rule=\"host/*=svc:443,tls=secret\".",
  "tip": "--dry-run=client -o yaml 로 뽑아 확인"
 },
 {
  "s": "s3",
  "g": "Gateway API",
  "front": "Gateway API 리소스",
  "key": "GatewayClass · Gateway · HTTPRoute",
  "back": "★GatewayClass★(인프라 제공자 — 컨트롤러 종류) → ★Gateway★(클러스터 운영자 — 리스너·포트·TLS) → ★HTTPRoute★(앱 개발자 — 호스트·경로·백엔드). 역할 분리가 Ingress 와의 핵심 차이.",
  "tip": "ReferenceGrant — 네임스페이스 간 참조 허가"
 },
 {
  "s": "s3",
  "g": "Gateway API",
  "front": "HTTPRoute 연결",
  "key": "parentRefs → Gateway",
  "back": "HTTPRoute 는 ★spec.parentRefs★ 로 붙을 Gateway 를 지정하고, rules[].matches(path·header) → ★backendRefs★(Service·port·weight)로 라우팅. weight 로 트래픽 분할(카나리) 가능.",
  "tip": "Gateway API 는 별도 CRD 설치가 필요(클러스터 기본 포함 아님)"
 },
 {
  "s": "s3",
  "g": "Service",
  "front": "Service 디버깅 순서",
  "key": "Endpoint → 포트 → DNS → 정책",
  "back": "① kubectl get endpoints <svc> (비었으면 selector·label·readiness) ② targetPort = 컨테이너 포트? ③ 임시 Pod 에서 nslookup·wget ④ NetworkPolicy 차단 여부.",
  "tip": "kubectl run tmp --rm -it --image=busybox:1.28 -- sh"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "emptyDir",
  "key": "Pod 수명과 같은 임시 볼륨",
  "back": "Pod 가 노드에 배치될 때 ★빈 디렉터리로 생성★ 되고 ★Pod 가 삭제되면 함께 사라진다★. 컨테이너 재시작에는 유지되며, 같은 Pod 의 컨테이너끼리 파일 공유에 쓴다. medium: Memory 면 tmpfs(메모리).",
  "tip": "컨테이너 재시작 ≠ Pod 삭제 — 재시작에는 데이터 유지"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "hostPath",
  "key": "노드 파일시스템을 직접 마운트",
  "back": "★노드의 디렉터리·파일★ 을 Pod 에 마운트. 다른 노드로 옮기면 데이터가 없고, 노드 파일 접근 권한이 생겨 ★보안 위험★. 실습·단일 노드 테스트용. type: DirectoryOrCreate · Directory · File 등.",
  "tip": "운영에서는 PV(네트워크 스토리지·CSI)를 쓴다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "PersistentVolume (PV)",
  "key": "클러스터 범위 스토리지 자원",
  "back": "관리자가 만들거나(정적) StorageClass 가 만드는(동적) ★클러스터 범위(cluster-scoped)★ 객체. capacity · accessModes · persistentVolumeReclaimPolicy · storageClassName · 실제 볼륨 정보(hostPath · nfs · csi 등)를 가진다.",
  "tip": "kubectl get pv 에는 네임스페이스가 없다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "PersistentVolumeClaim (PVC)",
  "key": "네임스페이스 범위 스토리지 요청",
  "back": "사용자가 ★필요한 용량·accessModes·storageClassName★ 을 요청하는 ★네임스페이스 범위★ 객체. 조건에 맞는 PV 와 ★1:1 로 바인딩★. Pod 는 volumes.persistentVolumeClaim.claimName 으로 참조.",
  "tip": "Pod 와 PVC 는 같은 네임스페이스여야 한다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "Access Modes",
  "key": "RWO · ROX · RWX · RWOP",
  "back": "★RWO(ReadWriteOnce)★ 한 ★노드★ 에서 읽기·쓰기 / ★ROX(ReadOnlyMany)★ 여러 노드 읽기 전용 / ★RWX(ReadWriteMany)★ 여러 노드 읽기·쓰기 / ★RWOP(ReadWriteOncePod)★ 한 ★Pod★ 만 읽기·쓰기.",
  "tip": "RWO 는 노드 단위 — 같은 노드의 여러 Pod 는 동시에 쓸 수 있다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "Reclaim Policy",
  "key": "Retain · Delete · (Recycle)",
  "back": "PVC 가 삭제된 뒤 PV 처리 방식. ★Retain★ — PV·데이터 보존, 상태 ★Released★, 관리자가 수동 정리 / ★Delete★ — PV 와 실제 스토리지 삭제(동적 프로비저닝 기본) / Recycle — 데이터 삭제 후 재사용(★deprecated★).",
  "tip": "정적으로 만든 PV 의 기본값은 Retain"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "PV 상태(phase)",
  "key": "Available · Bound · Released · Failed",
  "back": "★Available★ 아직 바인딩 안 됨 / ★Bound★ PVC 와 연결 / ★Released★ PVC 는 삭제됐지만 아직 회수 안 됨(Retain) / Failed 자동 회수 실패. Released PV 는 그대로는 ★새 PVC 와 바인딩되지 않는다★.",
  "tip": "재사용하려면 spec.claimRef 를 제거하거나 PV 를 다시 만든다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "PVC 바인딩 조건",
  "key": "용량 · accessModes · storageClassName · selector",
  "back": "PV 의 ★용량 ≥ 요청 용량★, ★accessModes 포함★, ★storageClassName 일치★, (있다면) selector 라벨 일치. 조건에 맞는 PV 가 없으면 PVC 는 ★Pending★. 500Mi 를 요청해도 1Gi PV 와 바인딩되면 용량은 1Gi 로 표시.",
  "tip": "storageClassName: \"\" 은 클래스 없는 PV 만 · 생략하면 기본 StorageClass 적용"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "StorageClass",
  "key": "동적 프로비저닝 템플릿",
  "back": "★provisioner★(예: ebs.csi.aws.com) · parameters · ★reclaimPolicy(기본 Delete)★ · ★volumeBindingMode★ · allowVolumeExpansion 을 정의. PVC 가 storageClassName 으로 지정하면 ★PV 를 자동 생성★.",
  "tip": "기본 클래스 — annotation storageclass.kubernetes.io/is-default-class: \"true\""
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "volumeBindingMode",
  "key": "Immediate · WaitForFirstConsumer",
  "back": "★Immediate★ — PVC 생성 즉시 바인딩·프로비저닝 / ★WaitForFirstConsumer★ — PVC 를 쓰는 ★Pod 가 스케줄될 때까지 지연★ 해 Pod 노드·존에 맞는 볼륨 생성. 그 전까지 PVC 는 Pending(정상).",
  "tip": "local 볼륨(no-provisioner)은 WaitForFirstConsumer 필수"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "PVC 용량 확장",
  "key": "allowVolumeExpansion: true",
  "back": "StorageClass 에 ★allowVolumeExpansion: true★ 가 있으면 PVC 의 ★spec.resources.requests.storage 를 늘려★ 확장. ★축소는 불가★. 파일시스템 확장은 드라이버에 따라 Pod 재시작이 필요할 수 있다.",
  "tip": "kubectl edit pvc 또는 kubectl patch 로 storage 값 증가"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "local PV",
  "key": "노드 로컬 디스크 PV",
  "back": "type local 은 ★nodeAffinity(필수)★ 로 디스크가 있는 노드를 지정. 동적 프로비저닝이 없어 provisioner: ★kubernetes.io/no-provisioner★ StorageClass 와 ★WaitForFirstConsumer★ 를 함께 쓴다.",
  "tip": "hostPath 와 달리 스케줄러가 볼륨 위치를 인식한다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "CSI (Container Storage Interface)",
  "key": "스토리지 드라이버 표준 인터페이스",
  "back": "쿠버네티스 코어 수정 없이 ★스토리지 벤더가 드라이버를 제공★ 하는 표준. 구성 — ★Controller 플러그인★(생성·연결, external-provisioner · external-attacher 사이드카) + ★Node 플러그인★(DaemonSet, 노드 마운트).",
  "tip": "기존 in-tree 볼륨 플러그인은 CSI 로 이전(CSI migration)"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "configMap · secret · projected 볼륨",
  "key": "설정을 파일로 마운트",
  "back": "configMap·secret 볼륨은 키마다 파일 하나. ★projected★ 는 configMap · secret · downwardAPI · serviceAccountToken 을 ★한 디렉터리에 합쳐★ 마운트.",
  "tip": "subPath 로 마운트한 파일은 원본 변경이 반영되지 않는다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "PVC 보호(Storage Object in Use Protection)",
  "key": "finalizer 로 사용 중 삭제 지연",
  "back": "Pod 가 사용 중인 PVC 를 삭제하면 ★kubernetes.io/pvc-protection★ finalizer 때문에 ★Terminating★ 상태로 남고 Pod 가 사라진 뒤 삭제. Bound PV 도 pv-protection 으로 보호.",
  "tip": "Terminating 에서 멈춘 PVC → 사용 중인 Pod 를 먼저 찾는다"
 },
 {
  "s": "s4",
  "g": "Storage",
  "front": "StatefulSet volumeClaimTemplates",
  "key": "Pod 마다 전용 PVC",
  "back": "StatefulSet 은 ★volumeClaimTemplates★ 로 Pod 마다 ★이름이 고정된 PVC★(템플릿명-sts명-순번)를 만든다. Pod 가 재생성돼도 같은 PVC 에 다시 붙는다. StatefulSet 을 지워도 PVC 는 기본적으로 남는다.",
  "tip": "Deployment 의 레플리카는 같은 PVC 를 공유 — RWO 면 다른 노드에서 문제"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "Pod 진단 4단계",
  "key": "describe → logs → logs --previous → exec",
  "back": "① ★kubectl describe pod★ — Events·State·Reason·Exit Code ② ★kubectl logs★ ③ 재시작된 경우 ★kubectl logs --previous(-p)★ ④ ★kubectl exec -it <pod> -- sh★ 로 내부 확인.",
  "tip": "다중 컨테이너는 -c <container>"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "CrashLoopBackOff",
  "key": "시작 후 계속 종료 → 재시작 지연 증가",
  "back": "컨테이너가 시작했다가 반복 종료. 원인 — ★앱 오류(exit 1)·잘못된 command/args·필수 설정 누락·liveness probe 실패★. 직전 실행 로그는 ★kubectl logs --previous★.",
  "tip": "BackOff 지연은 지수적으로 늘어 최대 5분"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "ImagePullBackOff · ErrImagePull",
  "key": "이미지를 받지 못함",
  "back": "★이미지 이름·태그 오타★, 존재하지 않는 레지스트리, ★private 레지스트리 인증 누락(imagePullSecrets)★. describe 의 Events 에 \"Failed to pull image\" 와 사유가 나온다.",
  "tip": "ErrImagePull 이 반복되면 ImagePullBackOff"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "Pending Pod",
  "key": "스케줄되지 못함",
  "back": "describe Events 의 ★FailedScheduling★ 사유 확인 — ★Insufficient cpu/memory★(requests 과다) · ★taint 미허용★ · nodeSelector/affinity 불일치 · ★PVC 미바인딩★. 스케줄러 자체가 죽어도 Pending.",
  "tip": "NODE 열이 <none> 이면 스케줄 단계 문제"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "OOMKilled",
  "key": "메모리 limit 초과 — Exit Code 137",
  "back": "컨테이너가 ★memory limit 을 넘어 커널 OOM killer 에 종료★. describe 의 Last State: Terminated, Reason: OOMKilled, ★Exit Code 137★(128+SIGKILL 9). limit 상향 또는 앱 메모리 사용 조정.",
  "tip": "143 = SIGTERM(정상 종료 요청)"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "CreateContainerConfigError",
  "key": "ConfigMap·Secret 참조 실패",
  "back": "env/envFrom/volume 이 참조한 ★ConfigMap·Secret(또는 그 key)이 없을 때★. describe Events 에 \"configmap ... not found\" 표시. 리소스를 만들거나 이름을 고친다.",
  "tip": "optional: true 로 선택적 참조 가능"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "Readiness vs Liveness 실패",
  "key": "트래픽 제외 vs 재시작",
  "back": "★readinessProbe 실패★ — Pod 는 Running 이지만 ★READY 0/1, Endpoint 에서 제외★ / ★livenessProbe 실패★ — kubelet 이 ★컨테이너 재시작★(RESTARTS 증가).",
  "tip": "startupProbe 는 느린 기동 앱 보호"
 },
 {
  "s": "s5",
  "g": "애플리케이션",
  "front": "kubectl debug",
  "key": "임시(ephemeral) 디버그 컨테이너",
  "back": "셸이 없는 이미지 진단 — ★kubectl debug -it <pod> --image=busybox --target=<container>★. 노드 진단 — ★kubectl debug node/<node> -it --image=busybox★ (호스트 파일시스템은 /host).",
  "tip": "exec 할 셸이 없을 때 유용"
 },
 {
  "s": "s5",
  "g": "컨트롤 플레인",
  "front": "정적 Pod(static Pod)",
  "key": "/etc/kubernetes/manifests",
  "back": "kubeadm 컨트롤 플레인(kube-apiserver·controller-manager·scheduler·etcd)은 ★kubelet 이 직접 띄우는 정적 Pod★. 매니페스트 경로는 kubelet 설정(★/var/lib/kubelet/config.yaml 의 staticPodPath★) 기본값 ★/etc/kubernetes/manifests★. 파일을 고치면 kubelet 이 ★자동 재생성★.",
  "tip": "kubectl delete 로 지워도 다시 생긴다 — 매니페스트를 고쳐야 한다"
 },
 {
  "s": "s5",
  "g": "컨트롤 플레인",
  "front": "kube-apiserver 다운 시 진단",
  "key": "kubectl 대신 crictl·로그 파일",
  "back": "kubectl 이 ★\"connection to the server ...:6443 was refused\"★ → ① ★crictl ps -a | grep kube-apiserver★ ② ★crictl logs <id>★ ③ /var/log/pods/kube-system_kube-apiserver-* ④ journalctl -u kubelet ⑤ 매니페스트 오타(이미지·플래그·경로) 수정.",
  "tip": "수정 후 재생성까지 수십 초 대기"
 },
 {
  "s": "s5",
  "g": "컨트롤 플레인",
  "front": "컴포넌트별 장애 증상",
  "key": "scheduler · controller-manager",
  "back": "★kube-scheduler 다운★ — 새 Pod 가 ★Pending(NODE <none>)★ 에 머묾 / ★kube-controller-manager 다운★ — Deployment 스케일·롤아웃이 ★Pod 를 만들지 않음★(ReplicaSet 조정 중단) / etcd 다운 — apiserver 가 요청 실패.",
  "tip": "kubectl -n kube-system get pods 로 상태 확인"
 },
 {
  "s": "s5",
  "g": "컨트롤 플레인",
  "front": "컨트롤 플레인 포트",
  "key": "6443 · 2379/2380 · 10250 · 10257 · 10259",
  "back": "kube-apiserver ★6443★ · etcd 클라이언트 ★2379★ / 피어 2380 · kubelet ★10250★ · kube-controller-manager 10257 · kube-scheduler 10259.",
  "tip": "매니페스트의 --etcd-servers=https://127.0.0.1:2379"
 },
 {
  "s": "s5",
  "g": "컨트롤 플레인",
  "front": "인증서 만료 점검",
  "key": "kubeadm certs check-expiration",
  "back": "★kubeadm certs check-expiration★ 으로 만료일 확인 · ★kubeadm certs renew all★ 로 갱신 후 컨트롤 플레인 정적 Pod 재시작. 인증서 위치 ★/etc/kubernetes/pki★. kubeadm 기본 유효기간은 컴포넌트 ★1년★, CA ★10년★.",
  "tip": "openssl x509 -in <crt> -noout -text 로 개별 확인"
 },
 {
  "s": "s5",
  "g": "컨트롤 플레인",
  "front": "crictl",
  "key": "CRI 런타임 직접 조회",
  "back": "★crictl ps -a★(종료된 컨테이너 포함) · ★crictl pods★ · ★crictl logs <container-id>★ · crictl images · crictl inspect. 런타임 소켓은 /etc/crictl.yaml 의 runtime-endpoint(예: unix:///run/containerd/containerd.sock).",
  "tip": "docker 명령이 아니라 crictl — dockershim 은 v1.24 제거"
 },
 {
  "s": "s5",
  "g": "워커 노드",
  "front": "노드 NotReady 진단",
  "key": "describe node → ssh → kubelet",
  "back": "① ★kubectl describe node★ — Conditions·Events ② 노드 접속(ssh) ③ ★systemctl status kubelet★ ④ ★journalctl -u kubelet★ ⑤ ★systemctl status containerd★ ⑥ 디스크·메모리·인증서 확인.",
  "tip": "Ready 가 Unknown 이면 kubelet 이 상태 보고를 멈춘 것"
 },
 {
  "s": "s5",
  "g": "워커 노드",
  "front": "kubelet 중지 복구",
  "key": "systemctl start · enable",
  "back": "kubelet 이 꺼져 있으면 ★systemctl start kubelet★ 후 ★systemctl enable kubelet★ 로 재부팅 시 자동 시작. 설정 오류면 ★journalctl -u kubelet★ 에서 원인(잘못된 config 경로·인증서·CRI 소켓) 확인 후 수정.",
  "tip": "설정 파일 수정 후 systemctl daemon-reload · restart kubelet"
 },
 {
  "s": "s5",
  "g": "워커 노드",
  "front": "kubelet 설정 위치",
  "key": "config.yaml · kubelet.conf · 10-kubeadm.conf",
  "back": "★/var/lib/kubelet/config.yaml★ — KubeletConfiguration(staticPodPath·clusterDNS 등) / ★/etc/kubernetes/kubelet.conf★ — apiserver 접속 kubeconfig / systemd 드롭인 ★kubelet.service.d/10-kubeadm.conf★ — 실행 인자.",
  "tip": "드롭인 수정 시 daemon-reload 필수"
 },
 {
  "s": "s5",
  "g": "워커 노드",
  "front": "노드 Conditions",
  "key": "Ready · MemoryPressure · DiskPressure · PIDPressure",
  "back": "★Ready★(True/False/Unknown) · ★MemoryPressure · DiskPressure · PIDPressure★ · NetworkUnavailable. 압박 조건이 True 면 해당 taint 가 붙어 새 Pod 스케줄·축출에 영향.",
  "tip": "kubectl describe node 의 Conditions 표"
 },
 {
  "s": "s5",
  "g": "워커 노드",
  "front": "노드 장애 시 Pod 축출",
  "key": "not-ready·unreachable 톨러레이션 300초",
  "back": "Pod 에는 기본으로 ★node.kubernetes.io/not-ready · unreachable 에 tolerationSeconds 300★ 이 붙는다 → 노드가 NotReady 로 약 5분 지나면 Pod 가 축출되고 컨트롤러가 다른 노드에 재생성.",
  "tip": "DaemonSet Pod 는 축출되지 않는다"
 },
 {
  "s": "s5",
  "g": "서비스·네트워크",
  "front": "Service 장애 체크리스트",
  "key": "Endpoint · targetPort · DNS · 정책",
  "back": "① ★kubectl get endpoints★ (비었으면 selector·label·readiness) ② ★targetPort = 컨테이너 포트★? ③ 임시 Pod 에서 ★nslookup·wget <svc>:<port>★ ④ ★NetworkPolicy★ ⑤ kube-proxy Pod 상태.",
  "tip": "ClusterIP 는 ping 이 안 될 수 있다 — 포트로 테스트"
 },
 {
  "s": "s5",
  "g": "서비스·네트워크",
  "front": "DNS 장애 진단",
  "key": "CoreDNS Pod · kube-dns Endpoint",
  "back": "★kubectl -n kube-system get pods -l k8s-app=kube-dns★ 상태 → ★logs★ → kube-dns Service Endpoint → Pod 의 /etc/resolv.conf → Egress 정책(53).",
  "tip": "CoreDNS CrashLoopBackOff 원인 — Corefile 오류·루프(loop 플러그인)"
 },
 {
  "s": "s5",
  "g": "서비스·네트워크",
  "front": "kube-proxy 점검",
  "key": "DaemonSet · ConfigMap · 로그",
  "back": "★kubectl -n kube-system get ds kube-proxy★ · ★logs★ 확인. 노드에서 ★iptables -t nat -L KUBE-SERVICES★(iptables 모드) 또는 ipvsadm -Ln(ipvs 모드)로 규칙 확인.",
  "tip": "kube-proxy ConfigMap 의 clusterCIDR·mode 오타 주의"
 },
 {
  "s": "s5",
  "g": "로깅",
  "front": "kubectl logs 옵션",
  "key": "-c · -p · -f · --tail · --since",
  "back": "★-c <container>★ 다중 컨테이너 · ★-p(--previous)★ 직전 컨테이너 · ★-f★ 실시간 · ★--tail=50★ · ★--since=1h★ · ★-l app=web★ 라벨로 여러 Pod · deploy/web 형식 지원.",
  "tip": "--all-containers=true 로 모든 컨테이너"
 },
 {
  "s": "s5",
  "g": "로깅",
  "front": "노드의 로그 파일",
  "key": "/var/log/pods · /var/log/containers",
  "back": "컨테이너 stdout/stderr 는 kubelet·런타임이 ★/var/log/pods/<ns>_<pod>_<uid>/<container>/0.log★ 에 저장 · /var/log/containers 는 심볼릭 링크. kubelet 자체 로그는 ★journalctl -u kubelet★.",
  "tip": "apiserver 다운 시 이 경로가 유일한 단서"
 },
 {
  "s": "s5",
  "g": "로깅",
  "front": "metrics-server · kubectl top",
  "key": "리소스 사용량 조회",
  "back": "★kubectl top nodes★ · ★kubectl top pods -A --sort-by=cpu★(또는 memory) · --containers. ★metrics-server 가 설치돼 있어야★ 동작(메모리 내 최신값만 — 이력 저장 없음).",
  "tip": "\"Metrics API not available\" = metrics-server 미설치·장애"
 },
 {
  "s": "s5",
  "g": "로깅",
  "front": "이벤트 조회",
  "key": "kubectl get events",
  "back": "★kubectl get events -A --sort-by=.metadata.creationTimestamp★ · 경고만 ★--field-selector type=Warning★. 이벤트는 기본 ★1시간★ 보존(kube-apiserver --event-ttl).",
  "tip": "describe 하단 Events 는 해당 객체 이벤트"
 },
 {
  "s": "s5",
  "g": "JSONPath",
  "front": "JSONPath 기본",
  "key": "-o jsonpath='{...}'",
  "back": "★kubectl get nodes -o jsonpath='{.items[*].metadata.name}'★ — 모든 노드 이름 / 단일 객체 kubectl get pod web -o jsonpath='{.status.podIP}' / 구조 확인은 먼저 ★-o json★.",
  "tip": "작은따옴표로 감싸 셸 해석 방지"
 },
 {
  "s": "s5",
  "g": "JSONPath",
  "front": "range · end",
  "key": "줄 단위 출력",
  "back": "★'{range .items[*]}{.metadata.name}{\"\\t\"}{.status.capacity.cpu}{\"\\n\"}{end}'★ — 항목마다 이름과 CPU 를 탭으로 구분해 한 줄씩.",
  "tip": "{\"\\n\"} 를 빠뜨리면 한 줄로 붙는다"
 },
 {
  "s": "s5",
  "g": "JSONPath",
  "front": "custom-columns · sort-by",
  "key": "표 형태 출력과 정렬",
  "back": "★-o custom-columns=NAME:.metadata.name,IMAGE:.spec.containers[*].image★ · ★--sort-by=.metadata.creationTimestamp★ · --sort-by=.status.capacity.cpu.",
  "tip": "custom-columns 경로는 .items 를 빼고 객체 기준"
 },
 {
  "s": "s5",
  "g": "JSONPath",
  "front": "JSONPath 필터",
  "key": "?(@.field==\"value\")",
  "back": "★'{.items[?(@.status.phase==\"Running\")].metadata.name}'★ — Running Pod 이름만 / 노드 InternalIP — ★'{.items[*].status.addresses[?(@.type==\"InternalIP\")].address}'★.",
  "tip": "결과를 파일로 저장하라는 문제는 > /opt/... 리다이렉트"
 }
];

CPPG.sheets = [
 {
  "s": "s1",
  "title": "★ 클러스터 구성요소와 배포 형태 (kubeadm)",
  "type": "table",
  "head": [
   "구성요소",
   "역할",
   "배포 형태",
   "장애 시 증상"
  ],
  "rows": [
   [
    "kube-apiserver",
    "유일한 진입점 · 인증·인가·Admission",
    "Static Pod",
    "kubectl 전체 실패(connection refused)"
   ],
   [
    "etcd",
    "클러스터 상태 저장(Raft)",
    "Static Pod",
    "API 응답 실패 · 상태 유실 위험"
   ],
   [
    "kube-scheduler",
    "Pod 노드 배치",
    "Static Pod",
    "새 Pod Pending"
   ],
   [
    "kube-controller-manager",
    "ReplicaSet·Node 등 제어 루프",
    "Static Pod",
    "Replica 수 미복구 · 노드 상태 미갱신"
   ],
   [
    "kubelet",
    "노드 에이전트 · Pod 실행",
    "systemd 서비스",
    "노드 NotReady"
   ],
   [
    "kube-proxy",
    "Service 라우팅 규칙",
    "DaemonSet",
    "Service 접속 실패"
   ],
   [
    "CoreDNS",
    "클러스터 DNS",
    "Deployment",
    "서비스 이름 해석 실패"
   ],
   [
    "CNI 플러그인",
    "Pod 네트워크",
    "DaemonSet 등",
    "노드 NotReady · Pod 간 통신 실패"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ kubeadm 업그레이드 순서 (v1.30 → v1.31 예)",
  "type": "table",
  "head": [
   "단계",
   "노드",
   "명령"
  ],
  "rows": [
   [
    "1 kubeadm 업그레이드",
    "첫 Control Plane",
    "apt-mark unhold kubeadm · apt-get install kubeadm=1.31.x-* · apt-mark hold kubeadm"
   ],
   [
    "2 계획 확인",
    "첫 Control Plane",
    "kubeadm upgrade plan"
   ],
   [
    "3 구성요소 업그레이드",
    "첫 Control Plane",
    "kubeadm upgrade apply v1.31.x"
   ],
   [
    "4 노드 비우기",
    "Control Plane",
    "kubectl drain cp01 --ignore-daemonsets"
   ],
   [
    "5 kubelet·kubectl",
    "Control Plane",
    "apt-get install kubelet=1.31.x-* kubectl=1.31.x-* · systemctl daemon-reload · systemctl restart kubelet"
   ],
   [
    "6 복귀",
    "Control Plane",
    "kubectl uncordon cp01"
   ],
   [
    "7 Worker",
    "각 Worker",
    "kubeadm 설치 → kubeadm upgrade node → drain → kubelet·kubectl 설치·재시작 → uncordon"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ etcd 백업·복원 명령",
  "type": "table",
  "head": [
   "작업",
   "명령",
   "포인트"
  ],
  "rows": [
   [
    "백업",
    "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /opt/backup.db",
    "인증서 3종 + endpoint"
   ],
   [
    "확인",
    "etcdutl snapshot status /opt/backup.db -w table",
    "구버전은 etcdctl snapshot status"
   ],
   [
    "복원",
    "etcdutl snapshot restore /opt/backup.db --data-dir=/var/lib/etcd-from-backup",
    "구버전은 etcdctl snapshot restore"
   ],
   [
    "반영",
    "/etc/kubernetes/manifests/etcd.yaml 의 etcd-data hostPath 를 새 경로로",
    "kubelet 이 Static Pod 재생성"
   ],
   [
    "경로 확인",
    "grep -E 'cert|key|data-dir|listen-client' /etc/kubernetes/manifests/etcd.yaml",
    "문제의 경로가 다를 수 있다"
   ]
  ]
 },
 {
  "s": "s1",
  "title": "★ 인증·인가 리소스와 명령",
  "type": "table",
  "head": [
   "대상",
   "리소스·명령",
   "포인트"
  ],
  "rows": [
   [
    "사용자 인증서",
    "CertificateSigningRequest · kubectl certificate approve",
    "signerName kubernetes.io/kube-apiserver-client"
   ],
   [
    "네임스페이스 권한",
    "kubectl create role · kubectl create rolebinding",
    "--verb · --resource · --user · --serviceaccount ns:sa"
   ],
   [
    "클러스터 권한",
    "kubectl create clusterrole · clusterrolebinding",
    "nodes·persistentvolumes 등"
   ],
   [
    "권한 점검",
    "kubectl auth can-i 동사 리소스 --as 사용자 -n ns",
    "--list 로 전체"
   ],
   [
    "SA 토큰",
    "kubectl create token SA이름",
    "v1.24+ 자동 Secret 없음"
   ],
   [
    "컨텍스트",
    "kubectl config use-context · set-context --current --namespace",
    "문제마다 먼저 전환"
   ]
  ]
 },
 {
  "title": "★ 워크로드 kubectl 명령 모음",
  "type": "table",
  "head": [
   "작업",
   "명령"
  ],
  "rows": [
   [
    "Deployment 생성",
    "kubectl create deployment web --image=nginx --replicas=3"
   ],
   [
    "YAML 초안 만들기",
    "kubectl create deployment web --image=nginx --dry-run=client -o yaml > web.yaml"
   ],
   [
    "스케일",
    "kubectl scale deployment web --replicas=5"
   ],
   [
    "이미지 변경",
    "kubectl set image deployment/web nginx=nginx:1.27"
   ],
   [
    "롤아웃 상태·이력",
    "kubectl rollout status deployment/web · kubectl rollout history deployment/web"
   ],
   [
    "롤백",
    "kubectl rollout undo deployment/web --to-revision=2"
   ],
   [
    "노드 라벨",
    "kubectl label nodes node01 disktype=ssd"
   ],
   [
    "Taint 추가·제거",
    "kubectl taint nodes node01 env=prod:NoSchedule · 제거는 끝에 -"
   ],
   [
    "ConfigMap",
    "kubectl create configmap app-cm --from-literal=MODE=prod"
   ],
   [
    "Secret",
    "kubectl create secret generic app-sec --from-literal=password=pass"
   ],
   [
    "HPA",
    "kubectl autoscale deployment web --cpu-percent=50 --min=2 --max=10"
   ],
   [
    "자원 사용량",
    "kubectl top pod --sort-by=cpu (metrics-server 필요)"
   ]
  ],
  "s": "s2"
 },
 {
  "title": "★ 스케줄링 제어 수단 비교",
  "type": "table",
  "head": [
   "수단",
   "정의 위치",
   "효과",
   "포인트"
  ],
  "rows": [
   [
    "nodeName",
    "Pod",
    "스케줄러 우회·지정 노드 직행",
    "taint·affinity 미적용"
   ],
   [
    "nodeSelector",
    "Pod",
    "라벨 단순 일치 노드만",
    "AND 조건만"
   ],
   [
    "nodeAffinity",
    "Pod",
    "required 필수 · preferred 선호",
    "In · NotIn · Exists · Gt · Lt"
   ],
   [
    "podAffinity / AntiAffinity",
    "Pod",
    "다른 Pod 와 같은 / 다른 토폴로지",
    "topologyKey 필수"
   ],
   [
    "Taint / Toleration",
    "Node / Pod",
    "노드가 Pod 를 거부 · Pod 가 견딤",
    "허용일 뿐 끌어오지 않음"
   ],
   [
    "PriorityClass",
    "Pod",
    "우선순위·선점",
    "value 클수록 우선"
   ],
   [
    "schedulerName",
    "Pod",
    "사용할 스케줄러 지정",
    "기본값 default-scheduler"
   ]
  ],
  "s": "s2"
 },
 {
  "title": "★ 자원 관리 — requests·limits·QoS",
  "type": "table",
  "head": [
   "항목",
   "내용"
  ],
  "rows": [
   [
    "requests",
    "스케줄링 판단 기준(보장량)"
   ],
   [
    "limits",
    "CPU 초과 → 스로틀링 · 메모리 초과 → OOMKilled"
   ],
   [
    "Guaranteed",
    "모든 컨테이너 CPU·메모리 requests = limits"
   ],
   [
    "Burstable",
    "Guaranteed·BestEffort 가 아닌 나머지"
   ],
   [
    "BestEffort",
    "requests·limits 없음 — 자원 부족 시 가장 먼저 축출"
   ],
   [
    "LimitRange",
    "컨테이너별 기본값·min·max (네임스페이스)"
   ],
   [
    "ResourceQuota",
    "네임스페이스 전체 합계·객체 수 제한"
   ]
  ],
  "s": "s2"
 },
 {
  "s": "s3",
  "title": "★ Service 유형과 포트",
  "type": "table",
  "head": [
   "유형",
   "접근 범위",
   "포트·특징"
  ],
  "rows": [
   [
    "ClusterIP(기본)",
    "클러스터 내부",
    "port → targetPort · 가상 IP"
   ],
   [
    "NodePort",
    "노드IP:nodePort",
    "기본 30000-32767 · ClusterIP 포함"
   ],
   [
    "LoadBalancer",
    "외부 LB",
    "클라우드 LB · NodePort 포함"
   ],
   [
    "ExternalName",
    "외부 DNS 이름",
    "CNAME 반환 · selector·프록시 없음"
   ],
   [
    "Headless",
    "DNS 로 Pod IP 직접",
    "clusterIP: None · StatefulSet"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ 네트워크 핵심 경로·명령",
  "type": "table",
  "head": [
   "항목",
   "위치·명령",
   "포인트"
  ],
  "rows": [
   [
    "CNI 설정",
    "/etc/cni/net.d/",
    "사전순 첫 파일"
   ],
   [
    "CNI 바이너리",
    "/opt/cni/bin/",
    "bridge · host-local 등"
   ],
   [
    "Pod CIDR",
    "kube-controller-manager --cluster-cidr",
    "노드별 spec.podCIDR"
   ],
   [
    "Service CIDR",
    "kube-apiserver --service-cluster-ip-range",
    "Pod CIDR 과 겹치면 안 됨"
   ],
   [
    "kube-proxy 모드",
    "kubectl -n kube-system get cm kube-proxy -o yaml",
    "mode: iptables / ipvs"
   ],
   [
    "CoreDNS 설정",
    "kubectl -n kube-system get cm coredns -o yaml",
    "Corefile"
   ],
   [
    "DNS 테스트",
    "kubectl run t --rm -it --image=busybox:1.28 -- nslookup <svc>",
    "busybox 1.28 권장"
   ],
   [
    "Endpoint 확인",
    "kubectl get endpoints <svc>",
    "비면 selector 문제"
   ]
  ]
 },
 {
  "s": "s3",
  "title": "★ NetworkPolicy · Ingress · Gateway API 요약",
  "type": "table",
  "head": [
   "리소스",
   "핵심 필드",
   "주의"
  ],
  "rows": [
   [
    "NetworkPolicy",
    "podSelector · policyTypes · ingress.from · egress.to · ports",
    "CNI 지원 필요 · 허용 규칙만"
   ],
   [
    "default deny",
    "podSelector: {} + 규칙 없음",
    "Egress 차단 시 DNS 53 허용"
   ],
   [
    "Ingress",
    "ingressClassName · rules.host · paths.path·pathType · backend.service",
    "컨트롤러 필수 · pathType 필수"
   ],
   [
    "GatewayClass",
    "spec.controllerName",
    "인프라 제공자"
   ],
   [
    "Gateway",
    "gatewayClassName · listeners(port·protocol·hostname)",
    "클러스터 운영자"
   ],
   [
    "HTTPRoute",
    "parentRefs · hostnames · rules.matches · backendRefs",
    "앱 개발자 · weight 분할"
   ]
  ]
 },
 {
  "title": "★ Access Mode · Reclaim Policy",
  "type": "table",
  "head": [
   "구분",
   "값",
   "의미"
  ],
  "rows": [
   [
    "Access Mode",
    "RWO (ReadWriteOnce)",
    "한 노드에서 읽기·쓰기"
   ],
   [
    "Access Mode",
    "ROX (ReadOnlyMany)",
    "여러 노드에서 읽기 전용"
   ],
   [
    "Access Mode",
    "RWX (ReadWriteMany)",
    "여러 노드에서 읽기·쓰기 (NFS·CephFS 등)"
   ],
   [
    "Access Mode",
    "RWOP (ReadWriteOncePod)",
    "한 Pod 만 읽기·쓰기"
   ],
   [
    "Reclaim",
    "Retain",
    "PV·데이터 보존 → Released · 수동 정리 (정적 PV 기본)"
   ],
   [
    "Reclaim",
    "Delete",
    "PV·실제 스토리지 삭제 (동적 프로비저닝 기본)"
   ],
   [
    "Reclaim",
    "Recycle",
    "데이터 삭제 후 재사용 — deprecated"
   ]
  ],
  "s": "s4"
 },
 {
  "title": "★ 스토리지 점검 명령 · 상태",
  "type": "table",
  "head": [
   "상황",
   "명령·상태",
   "포인트"
  ],
  "rows": [
   [
    "PV·PVC 목록",
    "kubectl get pv · kubectl get pvc -n ns",
    "PV 는 네임스페이스 없음"
   ],
   [
    "바인딩 실패 원인",
    "kubectl describe pvc 이름",
    "Events 에 용량·모드·클래스 불일치"
   ],
   [
    "PVC Pending",
    "조건 맞는 PV 없음 / WaitForFirstConsumer",
    "후자는 Pod 생성 전 정상"
   ],
   [
    "PV Released",
    "Retain 정책으로 PVC 삭제 후",
    "claimRef 제거 전 재바인딩 불가"
   ],
   [
    "PVC Terminating",
    "pvc-protection finalizer",
    "사용 중인 Pod 삭제 후 진행"
   ],
   [
    "기본 StorageClass",
    "kubectl get sc 의 (default) 표시",
    "is-default-class annotation"
   ],
   [
    "용량 확장",
    "kubectl edit pvc · requests.storage 증가",
    "allowVolumeExpansion 필요 · 축소 불가"
   ]
  ],
  "s": "s4"
 },
 {
  "s": "s5",
  "title": "★ Pod 상태·원인·확인 명령",
  "type": "table",
  "head": [
   "상태",
   "주요 원인",
   "확인"
  ],
  "rows": [
   [
    "Pending",
    "자원 부족 · taint · nodeSelector · PVC 미바인딩 · 스케줄러 다운",
    "describe → FailedScheduling"
   ],
   [
    "ContainerCreating",
    "볼륨 마운트 실패 · CNI 미준비 · 이미지 풀 대기",
    "describe Events"
   ],
   [
    "ImagePullBackOff",
    "이미지·태그 오타 · 레지스트리 인증",
    "describe → Failed to pull"
   ],
   [
    "CrashLoopBackOff",
    "앱 오류 · command 오타 · liveness 실패",
    "logs --previous"
   ],
   [
    "CreateContainerConfigError",
    "ConfigMap·Secret(key) 없음",
    "describe Events"
   ],
   [
    "OOMKilled (137)",
    "memory limit 초과",
    "describe Last State"
   ],
   [
    "Running 0/1 READY",
    "readinessProbe 실패",
    "describe Probe · Endpoint 제외"
   ],
   [
    "Terminating 지속",
    "finalizer · 노드 장애",
    "metadata.finalizers 확인"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 컨트롤 플레인 장애 진단",
  "type": "table",
  "head": [
   "증상",
   "의심 컴포넌트",
   "조치"
  ],
  "rows": [
   [
    "kubectl: connection refused :6443",
    "kube-apiserver",
    "crictl ps -a · crictl logs · 매니페스트 수정"
   ],
   [
    "새 Pod 가 Pending · NODE <none>",
    "kube-scheduler",
    "kube-system Pod 상태·로그 · 매니페스트"
   ],
   [
    "Deployment replicas 를 늘려도 Pod 미생성",
    "kube-controller-manager",
    "로그 · --kubeconfig 등 경로 확인"
   ],
   [
    "apiserver 로그에 etcd 연결 실패",
    "etcd",
    "etcd 매니페스트 · 인증서 · 데이터 디렉터리"
   ],
   [
    "x509: certificate has expired",
    "인증서",
    "kubeadm certs check-expiration · renew all"
   ],
   [
    "매니페스트 수정 후 무반응",
    "kubelet",
    "journalctl -u kubelet · YAML 문법"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 워커 노드 장애 진단",
  "type": "table",
  "head": [
   "단계",
   "명령",
   "보는 것"
  ],
  "rows": [
   [
    "상태",
    "kubectl get nodes · describe node",
    "Ready · Pressure 조건 · Events"
   ],
   [
    "kubelet",
    "systemctl status kubelet · journalctl -u kubelet",
    "inactive · 설정 오류 · 인증서"
   ],
   [
    "런타임",
    "systemctl status containerd · crictl ps",
    "CRI 소켓 · 런타임 장애"
   ],
   [
    "설정",
    "/var/lib/kubelet/config.yaml · /etc/kubernetes/kubelet.conf",
    "경로 오타 · apiserver 주소"
   ],
   [
    "자원",
    "df -h · free -m",
    "DiskPressure · MemoryPressure"
   ],
   [
    "복구",
    "systemctl daemon-reload · restart · enable kubelet",
    "재부팅 후 자동 시작"
   ]
  ]
 },
 {
  "s": "s5",
  "title": "★ 출력 가공 명령 모음",
  "type": "table",
  "head": [
   "목적",
   "명령"
  ],
  "rows": [
   [
    "노드 이름 전체",
    "kubectl get nodes -o jsonpath='{.items[*].metadata.name}'"
   ],
   [
    "줄 단위 출력",
    "-o jsonpath='{range .items[*]}{.metadata.name}{\"\\n\"}{end}'"
   ],
   [
    "필터",
    "-o jsonpath='{.items[?(@.status.phase==\"Running\")].metadata.name}'"
   ],
   [
    "표 형태",
    "-o custom-columns=NAME:.metadata.name,NODE:.spec.nodeName"
   ],
   [
    "정렬",
    "--sort-by=.metadata.creationTimestamp"
   ],
   [
    "CPU 사용 상위",
    "kubectl top pods -A --sort-by=cpu"
   ],
   [
    "경고 이벤트",
    "kubectl get events -A --field-selector type=Warning"
   ]
  ]
 }
];

CPPG.traps = [
 {
  "s": "s1",
  "t": "kubelet 은 kubeadm 이 Static Pod 로 배포한다 — 아니다. kubelet 은 각 노드의 systemd 서비스이고, Static Pod 를 실행하는 주체다"
 },
 {
  "s": "s1",
  "t": "kube-scheduler 가 Pod 의 컨테이너를 실행한다 — 아니다. 스케줄러는 노드만 정하고, 실행은 그 노드의 kubelet 이 한다"
 },
 {
  "s": "s1",
  "t": "kube-proxy 가 Pod 간 네트워크를 만든다 — 아니다. Pod 네트워크는 CNI 플러그인, kube-proxy 는 Service 라우팅 규칙"
 },
 {
  "s": "s1",
  "t": "업그레이드는 v1.29 → v1.31 처럼 한 번에 건너뛸 수 있다 — 아니다. Minor 버전은 한 단계씩"
 },
 {
  "s": "s1",
  "t": "Worker 를 먼저 업그레이드하고 Control Plane 을 나중에 — 아니다. Control Plane 먼저. kubelet 은 apiserver 보다 최신일 수 없다"
 },
 {
  "s": "s1",
  "t": "kubeadm upgrade apply 를 모든 노드에서 실행 — 아니다. 첫 Control Plane 에서만 apply, 나머지는 kubeadm upgrade node"
 },
 {
  "s": "s1",
  "t": "kubectl cordon 하면 기존 Pod 가 다른 노드로 옮겨진다 — 아니다. cordon 은 새 스케줄만 막는다. 옮기려면 drain"
 },
 {
  "s": "s1",
  "t": "etcd 복원은 같은 data-dir 에 덮어쓴다 — 아니다. 새 디렉터리로 restore 한 뒤 etcd.yaml 의 hostPath 를 바꾼다"
 },
 {
  "s": "s1",
  "t": "etcd 를 4대로 늘리면 3대보다 장애를 더 견딘다 — 아니다. 4대도 1대 장애만 허용(과반 3). 홀수로 구성"
 },
 {
  "s": "s1",
  "t": "etcd 포트 2380 이 클라이언트 포트 — 아니다. 2379 클라이언트(apiserver·etcdctl), 2380 피어 간 통신"
 },
 {
  "s": "s1",
  "t": "Role 로 nodes 권한을 줄 수 있다 — 아니다. nodes·persistentvolumes 는 클러스터 범위 리소스라 ClusterRole + ClusterRoleBinding"
 },
 {
  "s": "s1",
  "t": "RoleBinding 은 Role 만 참조할 수 있다 — 아니다. ClusterRole 도 참조할 수 있고, 그때 권한은 RoleBinding 의 네임스페이스로 한정"
 },
 {
  "s": "s1",
  "t": "v1.24 이후에도 ServiceAccount 를 만들면 토큰 Secret 이 자동 생성된다 — 아니다. kubectl create token 또는 수동 Secret"
 },
 {
  "s": "s1",
  "t": "kubectl config set-context 이름 --namespace=dev 는 현재 컨텍스트를 바꾼다 — 아니다. 지정한 컨텍스트의 설정만 바꾼다. 현재 것은 --current"
 },
 {
  "s": "s1",
  "t": "CSR 을 만들면 자동으로 인증서가 발급된다 — 아니다. kubectl certificate approve 로 승인해야 status.certificate 가 채워진다"
 },
 {
  "s": "s1",
  "t": "Static Pod 는 kubectl delete pod 로 영구 삭제된다 — 아니다. manifest 파일을 지워야 한다(미러 Pod 만 지워졌다가 다시 생긴다)"
 },
 {
  "s": "s1",
  "t": "Helm 3 는 클러스터에 Tiller 가 필요하다 — 아니다. Tiller 는 Helm 2. Helm 3 는 kubeconfig 권한으로 직접 동작"
 },
 {
  "s": "s1",
  "t": "CRD 를 만들면 그 리소스를 처리하는 로직도 생긴다 — 아니다. 동작은 커스텀 컨트롤러(Operator)가 담당"
 },
 {
  "s": "s2",
  "t": "Toleration 을 주면 해당 노드에 반드시 배치된다 — 아니다. 배치를 허용할 뿐. 특정 노드로 보내려면 nodeAffinity 를 함께 쓴다"
 },
 {
  "s": "s2",
  "t": "NoSchedule taint 는 이미 실행 중인 Pod 도 축출한다 — 아니다. 기존 Pod 축출은 NoExecute"
 },
 {
  "s": "s2",
  "t": "nodeName 으로 지정한 Pod 에도 NoSchedule taint 가 적용된다 — 아니다. 스케줄러를 건너뛰므로 적용되지 않는다"
 },
 {
  "s": "s2",
  "t": "kubectl delete pod 로 static pod 를 지울 수 있다 — 아니다. 미러 Pod 만 지워지고 kubelet 이 다시 만든다. 매니페스트 파일을 삭제"
 },
 {
  "s": "s2",
  "t": "static pod 경로는 kubeconfig 에 있다 — 아니다. kubelet 설정 파일(/var/lib/kubelet/config.yaml)의 staticPodPath"
 },
 {
  "s": "s2",
  "t": "Burstable 은 requests 가 limits 보다 작을 때만 해당한다 — 아니다. Guaranteed·BestEffort 조건에 해당하지 않는 모든 Pod"
 },
 {
  "s": "s2",
  "t": "메모리가 limit 을 넘으면 스로틀링된다 — 아니다. 메모리 초과는 OOMKilled, 스로틀링은 CPU"
 },
 {
  "s": "s2",
  "t": "Secret 의 data 는 암호화되어 저장된다 — 아니다. base64 인코딩일 뿐, 암호화는 EncryptionConfiguration 설정 필요"
 },
 {
  "s": "s2",
  "t": "Pod 의 args 는 이미지의 ENTRYPOINT 를 덮어쓴다 — 아니다. args 는 CMD, command 가 ENTRYPOINT"
 },
 {
  "s": "s2",
  "t": "kubectl set image deployment/web nginx=nginx:1.27 의 앞 nginx 는 이미지 이름이다 — 아니다. 컨테이너 이름"
 },
 {
  "s": "s2",
  "t": "ConfigMap 을 환경변수로 주입하면 ConfigMap 을 바꾸는 즉시 반영된다 — 아니다. Pod 재시작 전까지 반영되지 않는다(볼륨 마운트는 지연 반영)"
 },
 {
  "s": "s2",
  "t": "HPA 는 metrics-server 없이도 CPU 사용률로 동작한다 — 아니다. 리소스 지표는 metrics-server(Metrics API) 필요"
 },
 {
  "s": "s2",
  "t": "kubectl create daemonset 명령으로 DaemonSet 을 만든다 — 아니다. 해당 하위 명령은 없다. Deployment YAML 을 수정해 만든다"
 },
 {
  "s": "s2",
  "t": "PriorityClass 의 value 가 작을수록 우선순위가 높다 — 아니다. 클수록 높다"
 },
 {
  "s": "s2",
  "t": "initContainers 는 앱 컨테이너와 동시에 실행된다 — 아니다. 순서대로 실행·완료된 뒤 앱 컨테이너가 시작된다(네이티브 사이드카 예외)"
 },
 {
  "s": "s3",
  "t": "Service type 을 생략하면 NodePort 가 된다 — 아니다. 기본값은 ClusterIP"
 },
 {
  "s": "s3",
  "t": "NodePort 는 노드 하나에만 열린다 — 아니다. 모든 노드의 같은 포트로 열린다"
 },
 {
  "s": "s3",
  "t": "targetPort 를 생략하면 80 이 된다 — 아니다. port 와 같은 값이 된다"
 },
 {
  "s": "s3",
  "t": "Endpoint 가 비어도 Service 는 정상 — 아니다. selector·label 불일치 또는 Ready Pod 없음이 원인, 트래픽이 갈 곳이 없다"
 },
 {
  "s": "s3",
  "t": "kubectl create service 는 기존 Pod label 을 자동으로 찾는다 — 아니다. selector 가 app=<서비스이름> 으로 설정된다. expose 는 대상의 label 을 쓴다"
 },
 {
  "s": "s3",
  "t": "kube-proxy userspace 모드를 선택할 수 있다 — 아니다. v1.26 에서 제거됐다"
 },
 {
  "s": "s3",
  "t": "다른 네임스페이스 Service 도 이름만으로 조회된다 — 아니다. <svc>.<ns> 이상을 써야 한다"
 },
 {
  "s": "s3",
  "t": "CoreDNS 의 Service 이름은 coredns 다 — 아니다. 호환성 때문에 kube-dns"
 },
 {
  "s": "s3",
  "t": "NetworkPolicy 에 deny 규칙을 쓸 수 있다 — 아니다. 허용 규칙만 있고 선택된 Pod 는 나머지가 차단된다"
 },
 {
  "s": "s3",
  "t": "Flannel 클러스터에서도 NetworkPolicy 가 강제된다 — 아니다. 정책을 지원하는 CNI(Calico·Cilium 등)가 필요"
 },
 {
  "s": "s3",
  "t": "from 아래 namespaceSelector 와 podSelector 를 각각 '-' 로 나열하면 AND — 아니다. 별도 항목은 OR, 같은 항목 안이어야 AND"
 },
 {
  "s": "s3",
  "t": "Egress default deny 후에도 서비스 이름 조회는 된다 — 아니다. DNS(53) 도 막히므로 허용 규칙 필요"
 },
 {
  "s": "s3",
  "t": "Ingress 리소스만 만들면 외부 접속이 된다 — 아니다. Ingress Controller 가 있어야 한다"
 },
 {
  "s": "s3",
  "t": "pathType: Prefix 의 /foo 는 /foobar 와 일치한다 — 아니다. 경로 요소 단위라 /foo, /foo/bar 만 일치"
 },
 {
  "s": "s3",
  "t": "Gateway API 는 Ingress 처럼 클러스터에 기본 내장돼 있다 — 아니다. Gateway API CRD 와 이를 구현한 컨트롤러를 설치해야 한다"
 },
 {
  "s": "s4",
  "t": "RWO 는 한 Pod 만 쓸 수 있다는 뜻이다 — 아니다. 한 노드 단위. 한 Pod 로 제한하려면 RWOP"
 },
 {
  "s": "s4",
  "t": "PV 는 네임스페이스 객체다 — 아니다. PV 는 클러스터 범위, PVC 가 네임스페이스 범위"
 },
 {
  "s": "s4",
  "t": "Retain 정책 PV 는 PVC 를 지우면 바로 새 PVC 와 바인딩된다 — 아니다. Released 상태가 되며 claimRef 를 제거해야 재사용"
 },
 {
  "s": "s4",
  "t": "동적 프로비저닝 PV 의 기본 reclaimPolicy 는 Retain 이다 — 아니다. StorageClass 기본값 Delete"
 },
 {
  "s": "s4",
  "t": "WaitForFirstConsumer 클래스의 PVC 가 Pending 이면 오류다 — 아니다. Pod 가 생길 때까지 기다리는 정상 상태"
 },
 {
  "s": "s4",
  "t": "PVC 용량은 줄일 수도 있다 — 아니다. 확장만 가능(allowVolumeExpansion: true 필요)"
 },
 {
  "s": "s4",
  "t": "emptyDir 데이터는 컨테이너가 재시작되면 사라진다 — 아니다. Pod 가 삭제될 때 사라진다"
 },
 {
  "s": "s4",
  "t": "PVC 의 storageClassName 을 생략하면 클래스 없는 PV 와만 바인딩된다 — 아니다. 기본 StorageClass 가 적용된다. 클래스 없는 PV 만 원하면 \"\""
 },
 {
  "s": "s4",
  "t": "500Mi PVC 는 정확히 500Mi PV 와만 바인딩된다 — 아니다. 요청 이상인 PV 와 바인딩되며 PVC 용량은 PV 용량으로 표시"
 },
 {
  "s": "s4",
  "t": "Recycle 은 현재 권장되는 회수 정책이다 — 아니다. deprecated, 동적 프로비저닝 사용 권장"
 },
 {
  "s": "s5",
  "t": "CrashLoopBackOff 원인은 kubectl logs 로만 본다 — 재시작 후라면 --previous 로 직전 컨테이너 로그를 봐야 한다"
 },
 {
  "s": "s5",
  "t": "ImagePullBackOff 는 노드 자원 부족 때문 — 아니다. 이미지 이름·태그·레지스트리 인증 문제"
 },
 {
  "s": "s5",
  "t": "OOMKilled 는 requests 를 넘어서 발생 — 아니다. memory limit 초과, Exit Code 137"
 },
 {
  "s": "s5",
  "t": "readinessProbe 가 실패하면 컨테이너가 재시작된다 — 아니다. Endpoint 에서 제외될 뿐, 재시작은 liveness"
 },
 {
  "s": "s5",
  "t": "Pending Pod 는 이미지 문제다 — 아니다. 이미지는 노드 배정 후 단계. Pending 은 스케줄링(자원·taint·selector·PVC) 문제"
 },
 {
  "s": "s5",
  "t": "정적 Pod 는 kubectl delete 로 영구 삭제된다 — 아니다. kubelet 이 매니페스트로 다시 만든다"
 },
 {
  "s": "s5",
  "t": "kube-apiserver 가 죽어도 kubectl logs 로 원인을 볼 수 있다 — 아니다. crictl logs 나 /var/log/pods 를 써야 한다"
 },
 {
  "s": "s5",
  "t": "정적 Pod 매니페스트를 고친 뒤 kubectl apply 해야 반영된다 — 아니다. 파일 저장만으로 kubelet 이 재생성"
 },
 {
  "s": "s5",
  "t": "scheduler 가 죽으면 기존 Pod 도 모두 종료된다 — 아니다. 실행 중인 Pod 는 유지, 새 Pod 만 Pending"
 },
 {
  "s": "s5",
  "t": "controller-manager 장애 시 새 Pod 가 Pending 으로 쌓인다 — 아니다. ReplicaSet 이 Pod 객체 자체를 만들지 않는다"
 },
 {
  "s": "s5",
  "t": "노드가 NotReady 면 즉시 Pod 가 다른 노드로 옮겨진다 — 아니다. 기본 톨러레이션 300초 후 축출"
 },
 {
  "s": "s5",
  "t": "kubelet 을 systemctl start 만 하면 재부팅 후에도 유지된다 — 아니다. systemctl enable 이 필요"
 },
 {
  "s": "s5",
  "t": "kubelet systemd 드롭인을 고친 뒤 restart 만 하면 된다 — 아니다. daemon-reload 를 먼저"
 },
 {
  "s": "s5",
  "t": "컨테이너 런타임 조회는 docker ps 로 한다 — 아니다. containerd 환경은 crictl ps"
 },
 {
  "s": "s5",
  "t": "kubectl top 은 기본 내장 기능이다 — 아니다. metrics-server 가 있어야 동작"
 },
 {
  "s": "s5",
  "t": "kubectl get events 는 모든 기간의 이벤트를 보존한다 — 아니다. 기본 1시간(--event-ttl)"
 },
 {
  "s": "s5",
  "t": "JSONPath 에서 줄바꿈 없이 range 를 쓰면 줄 단위로 나온다 — 아니다. {\"\\n\"} 를 넣어야 한다"
 },
 {
  "s": "s5",
  "t": "Service ClusterIP 에 ping 이 안 되면 Service 가 고장이다 — 아니다. 가상 IP 라 ICMP 응답이 없을 수 있으니 포트로 테스트"
 }
];

CPPG.notes = [
 {
  "s": "s1",
  "no": "1-1",
  "t": "클러스터 구성요소",
  "title": "클러스터 아키텍처 — Control Plane 과 노드 구성요소",
  "ref": "CKA Curriculum: Cluster Architecture · 학습자료 §2",
  "body": [
   {
    "h": "Control Plane",
    "tb": {
     "head": [
      "구성요소",
      "역할",
      "포트·배포"
     ],
     "rows": [
      [
       "★kube-apiserver★",
       "유일한 진입점 · 인증 → 인가 → Admission · etcd 접근 유일 주체",
       "6443 · Static Pod"
      ],
      [
       "★etcd★",
       "클러스터 상태 Key-Value 저장소 · Raft",
       "2379 클라이언트 · 2380 피어 · Static Pod"
      ],
      [
       "kube-scheduler",
       "Pod 노드 배치(필터링 → 점수화)",
       "Static Pod"
      ],
      [
       "kube-controller-manager",
       "Node·ReplicaSet·Deployment 등 제어 루프",
       "Static Pod"
      ],
      [
       "cloud-controller-manager",
       "클라우드 로드밸런서·노드 연동",
       "관리형·클라우드 환경"
      ]
     ]
    }
   },
   {
    "h": "노드(Worker) 구성요소",
    "tb": {
     "head": [
      "구성요소",
      "역할",
      "배포"
     ],
     "rows": [
      [
       "★kubelet★",
       "Pod 실행·상태 보고 · Static Pod 실행",
       "★systemd 서비스★"
      ],
      [
       "kube-proxy",
       "Service → Pod 라우팅(iptables·IPVS)",
       "DaemonSet"
      ],
      [
       "컨테이너 런타임",
       "containerd · CRI-O (CRI)",
       "systemd 서비스"
      ]
     ]
    }
   },
   {
    "h": "요청 처리 흐름 — Pod 생성",
    "li": [
     "① kubectl → apiserver 인증·인가·Admission → ② etcd 에 Pod 저장(nodeName 없음)",
     "③ scheduler 가 감시하다 노드 결정 → apiserver 로 바인딩 → ④ 해당 노드 kubelet 이 감시하다 런타임으로 컨테이너 생성",
     "⑤ kubelet 이 상태를 apiserver 에 보고 → etcd 갱신"
    ]
   },
   {
    "h": "Static Pod 와 컨테이너 런타임",
    "li": [
     "kubeadm Control Plane 은 ★/etc/kubernetes/manifests★ 의 Static Pod — 파일 수정 시 kubelet 이 자동 재생성",
     "v1.24 ★dockershim 제거★ → containerd·CRI-O · 노드 점검은 ★crictl ps · crictl logs★",
     "kubelet 설정 /var/lib/kubelet/config.yaml 의 ★staticPodPath★ 로 경로 확인"
    ]
   },
   {
    "h": "함정",
    "li": [
     "kubelet 은 Pod 가 아니라 서비스",
     "Pod 네트워크 = CNI, Service 규칙 = kube-proxy"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-2",
  "t": "설치·업그레이드",
  "title": "kubeadm 설치·노드 조인·클러스터 업그레이드",
  "ref": "CKA Curriculum: Installation & Configuration · 학습자료 §6·§10",
  "body": [
   {
    "h": "설치 사전 준비(모든 노드)",
    "li": [
     "컨테이너 런타임(containerd) 설치 · ★swap 비활성화★(kubelet 기본 동작) · br_netfilter 모듈 · net.ipv4.ip_forward=1",
     "kubeadm·kubelet·kubectl ★같은 버전★ 설치 후 apt-mark hold"
    ]
   },
   {
    "h": "초기화와 조인",
    "li": [
     "★kubeadm init --pod-network-cidr=10.244.0.0/16★ (CNI 대역과 일치) → admin.conf 를 ~/.kube/config 로 복사 → CNI 설치",
     "Worker: ★kubeadm join IP:6443 --token … --discovery-token-ca-cert-hash sha256:…★",
     "토큰 만료(기본 24시간) 시 ★kubeadm token create --print-join-command★"
    ]
   },
   {
    "h": "업그레이드 규칙",
    "li": [
     "★Minor 버전 한 단계씩★ · ★Control Plane → Worker★ 순서",
     "kubelet 은 apiserver 보다 최신일 수 없음(낮은 쪽으로 최대 3 Minor 허용)",
     "패키지 저장소 pkgs.k8s.io 는 ★Minor 버전별 저장소★ — 다음 Minor 로 갈 때 저장소 주소도 변경 [확인필요: 시험 환경 구성]"
    ]
   },
   {
    "h": "업그레이드 순서",
    "tb": {
     "head": [
      "노드",
      "순서"
     ],
     "rows": [
      [
       "첫 Control Plane",
       "kubeadm 설치 → ★kubeadm upgrade plan → kubeadm upgrade apply v1.x.y★ → drain → kubelet·kubectl 설치 → daemon-reload·restart kubelet → uncordon"
      ],
      [
       "추가 Control Plane",
       "kubeadm 설치 → ★kubeadm upgrade node★ → drain → kubelet·kubectl → restart → uncordon"
      ],
      [
       "Worker",
       "kubeadm 설치 → ★kubeadm upgrade node★ → (Control Plane 에서) drain → kubelet·kubectl → restart → uncordon"
      ]
     ]
    }
   },
   {
    "h": "노드 유지보수",
    "tb": {
     "head": [
      "명령",
      "동작"
     ],
     "rows": [
      [
       "kubectl cordon 노드",
       "SchedulingDisabled — 기존 Pod 유지"
      ],
      [
       "kubectl drain 노드 --ignore-daemonsets",
       "cordon + Pod 축출 · 단독 Pod 는 --force · emptyDir 은 --delete-emptydir-data"
      ],
      [
       "kubectl uncordon 노드",
       "스케줄 재개"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-3",
  "t": "etcd 백업·복구",
  "title": "etcd 백업·복원과 고가용성",
  "ref": "CKA Curriculum: Implement etcd backup and restore · 학습자료 §6·§10",
  "body": [
   {
    "h": "백업",
    "li": [
     "★ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 --cacert=… --cert=… --key=… snapshot save 파일★",
     "인증서 경로는 ★etcd.yaml★ 의 --trusted-ca-file(cacert) · --cert-file(cert) · --key-file(key) · --listen-client-urls(endpoints)",
     "확인 — etcdutl snapshot status 파일 -w table (etcdctl snapshot status 는 v3.5 부터 사용 중단 예고)"
    ]
   },
   {
    "h": "복원",
    "li": [
     "★etcdutl snapshot restore 파일 --data-dir=/var/lib/etcd-from-backup★ (구버전 etcdctl snapshot restore 도 동작)",
     "★/etc/kubernetes/manifests/etcd.yaml★ 의 volumes.hostPath(etcd-data) path 를 새 디렉터리로 변경",
     "kubelet 이 etcd Static Pod 재생성 → 필요 시 apiserver 등도 재기동 확인(crictl ps)"
    ]
   },
   {
    "h": "고가용성(HA)",
    "tb": {
     "head": [
      "etcd 노드 수",
      "과반(쿼럼)",
      "허용 장애"
     ],
     "rows": [
      [
       "1",
       "1",
       "0"
      ],
      [
       "3",
       "2",
       "★1★"
      ],
      [
       "4",
       "3",
       "1"
      ],
      [
       "5",
       "3",
       "★2★"
      ],
      [
       "7",
       "4",
       "3"
      ]
     ]
    }
   },
   {
    "h": "토폴로지",
    "li": [
     "★Stacked etcd★ — Control Plane 노드에 etcd 동거(kubeadm 기본)",
     "★External etcd★ — 전용 etcd 클러스터, 장애 격리",
     "Control Plane HA — apiserver 앞에 로드밸런서, kubeadm init --control-plane-endpoint"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-4",
  "t": "인증·인증서",
  "title": "인증과 TLS 인증서",
  "ref": "CKA Curriculum: Manage role based access control · 학습자료 §7",
  "body": [
   {
    "h": "인증 방식",
    "li": [
     "★X.509 클라이언트 인증서★ — CN=사용자, O=그룹 (kubeconfig 의 기본 방식)",
     "ServiceAccount 토큰 — Pod 내부 인증 · OIDC 등 외부 IdP",
     "정적 비밀번호 파일 방식은 제거됨 · 정적 토큰 파일은 비권장"
    ]
   },
   {
    "h": "주요 인증서 (/etc/kubernetes/pki)",
    "tb": {
     "head": [
      "파일",
      "용도"
     ],
     "rows": [
      [
       "ca.crt · ca.key",
       "클러스터 CA"
      ],
      [
       "apiserver.crt",
       "API 서버 서버 인증서(SAN 포함)"
      ],
      [
       "apiserver-kubelet-client.crt",
       "apiserver → kubelet 클라이언트"
      ],
      [
       "apiserver-etcd-client.crt",
       "apiserver → etcd 클라이언트"
      ],
      [
       "etcd/ca.crt · etcd/server.crt",
       "etcd 전용 CA · etcd 서버"
      ]
     ]
    }
   },
   {
    "h": "사용자 인증서 발급 (CSR API)",
    "li": [
     "openssl genrsa -out jane.key 2048 → openssl req -new -key jane.key -subj \"/CN=jane\" -out jane.csr",
     "CertificateSigningRequest: request(base64 -w0) · ★signerName: kubernetes.io/kube-apiserver-client★ · usages [client auth]",
     "★kubectl certificate approve jane★ → kubectl get csr jane -o jsonpath='{.status.certificate}' | base64 -d"
    ]
   },
   {
    "h": "점검",
    "li": [
     "★kubeadm certs check-expiration★ · kubeadm certs renew all (기본 1년 유효)",
     "★openssl x509 -in 파일 -text -noout★ 으로 Subject·Issuer·SAN·만료일 확인"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-5",
  "t": "RBAC·ServiceAccount",
  "title": "RBAC 와 ServiceAccount",
  "ref": "CKA Curriculum: Manage role based access control (RBAC) · 학습자료 §7",
  "body": [
   {
    "h": "리소스 4종",
    "tb": {
     "head": [
      "리소스",
      "범위",
      "연결 대상"
     ],
     "rows": [
      [
       "★Role★",
       "네임스페이스",
       "RoleBinding"
      ],
      [
       "★ClusterRole★",
       "클러스터 전체·클러스터 범위 리소스",
       "ClusterRoleBinding 또는 RoleBinding"
      ],
      [
       "RoleBinding",
       "네임스페이스",
       "User · Group · ServiceAccount"
      ],
      [
       "ClusterRoleBinding",
       "클러스터 전체",
       "User · Group · ServiceAccount"
      ]
     ]
    }
   },
   {
    "h": "명령형 생성",
    "li": [
     "★kubectl create role pod-reader --verb=get,list,watch --resource=pods -n dev★",
     "★kubectl create rolebinding jane-pod-reader --role=pod-reader --user=jane -n dev★",
     "ServiceAccount 연결: --serviceaccount=dev:app-sa (네임스페이스:이름)",
     "점검: ★kubectl auth can-i list pods --as jane -n dev★"
    ]
   },
   {
    "h": "ServiceAccount",
    "li": [
     "v1.24+ 토큰 Secret 자동 생성 없음 → ★kubectl create token 이름★ (기한 있는 토큰)",
     "Pod 에는 projected volume 으로 /var/run/secrets/kubernetes.io/serviceaccount 에 마운트",
     "spec.serviceAccountName 지정 · automountServiceAccountToken: false 로 마운트 해제",
     "SA 권한도 RBAC 로 부여 — 주체 표기 system:serviceaccount:ns:이름"
    ]
   },
   {
    "h": "함정",
    "li": [
     "nodes·PV 는 ClusterRole 필요",
     "Role 의 apiGroups — core 는 \"\" , deployments 는 \"apps\""
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-6",
  "t": "kubeconfig·kubectl",
  "title": "kubeconfig · kubectl 고급 출력",
  "ref": "학습자료 §7·§14·§19",
  "body": [
   {
    "h": "kubeconfig",
    "li": [
     "구성: ★clusters · users · contexts · current-context★",
     "★kubectl config get-contexts · use-context · current-context★",
     "기본 네임스페이스 변경 ★kubectl config set-context --current --namespace=dev★",
     "다른 파일 사용: --kubeconfig=파일 · 환경 변수 KUBECONFIG"
    ]
   },
   {
    "h": "출력 형식",
    "tb": {
     "head": [
      "옵션",
      "예"
     ],
     "rows": [
      [
       "-o jsonpath",
       "kubectl get nodes -o jsonpath='{.items[*].status.nodeInfo.kubeletVersion}'"
      ],
      [
       "range",
       "-o jsonpath='{range .items[*]}{.metadata.name}{\"\\n\"}{end}'"
      ],
      [
       "--sort-by",
       "kubectl get pods --sort-by=.metadata.creationTimestamp"
      ],
      [
       "custom-columns",
       "-o custom-columns=NAME:.metadata.name,IMAGE:.spec.containers[*].image"
      ],
      [
       "-o wide · --show-labels",
       "노드·IP · 라벨 표시"
      ]
     ]
    }
   },
   {
    "h": "시간 절약",
    "li": [
     "alias k=kubectl · export do=\"--dry-run=client -o yaml\"",
     "kubectl explain 리소스.필드 --recursive · kubectl api-resources"
    ]
   }
  ]
 },
 {
  "s": "s1",
  "no": "1-7",
  "t": "Helm·Kustomize",
  "title": "Helm · Kustomize 와 클러스터 확장(CRD·Admission)",
  "ref": "CKA Curriculum 2025: Helm·Kustomize · CRD·Operators · 학습자료 §7·§11·§12",
  "body": [
   {
    "h": "Helm 3",
    "li": [
     "차트(Chart) = 템플릿 + values.yaml · 릴리스(Release) = 설치된 인스턴스",
     "★helm repo add · helm repo update · helm search repo★",
     "★helm install 릴리스 차트 -n ns --create-namespace --set k=v -f values.yaml★",
     "helm upgrade · ★helm rollback 릴리스 리비전★ · helm history · helm list -A · helm uninstall",
     "값 우선순위: 차트 values.yaml < -f 파일 < --set"
    ]
   },
   {
    "h": "Kustomize",
    "li": [
     "kustomization.yaml: resources · namePrefix · namespace · commonLabels · images · patches",
     "base + overlays(dev·prod) 구조 → ★kubectl apply -k overlays/prod★",
     "kubectl kustomize 디렉터리 로 렌더링만"
    ]
   },
   {
    "h": "클러스터 확장",
    "tb": {
     "head": [
      "항목",
      "내용"
     ],
     "rows": [
      [
       "CRD",
       "새 리소스 종류를 API 에 등록 — kubectl get crd"
      ],
      [
       "Operator",
       "CRD + 커스텀 컨트롤러 — 운영 지식 자동화"
      ],
      [
       "Admission Controller",
       "Mutating → Validating · --enable-admission-plugins"
      ],
      [
       "Webhook",
       "MutatingAdmissionWebhook · ValidatingAdmissionWebhook 로 외부 정책"
      ]
     ]
    }
   }
  ]
 },
 {
  "no": "2-1",
  "t": "파드·디플로이먼트",
  "title": "Deployment · ReplicaSet · 롤링 업데이트와 롤백",
  "ref": "CKA Curriculum — Workloads & Scheduling · 학습자료 §2·§5",
  "body": [
   {
    "h": "계층 구조",
    "li": [
     "★Deployment → ReplicaSet → Pod★ — Deployment 를 수정하면 ★새 ReplicaSet★ 이 생기고 이전 ReplicaSet 은 replicas 0 으로 보존",
     "revisionHistoryLimit(기본 10) 만큼 이전 ReplicaSet 을 남겨 롤백에 쓴다",
     "ReplicaSet 은 selector 에 맞는 Pod 수를 유지 — 라벨이 같은 Pod 를 수동으로 만들면 초과분을 삭제"
    ]
   },
   {
    "h": "배포 전략",
    "tb": {
     "head": [
      "전략",
      "동작",
      "특징"
     ],
     "rows": [
      [
       "★RollingUpdate★(기본)",
       "새 Pod 를 점진 생성·기존 Pod 점진 삭제",
       "maxSurge·maxUnavailable 기본 25% · 무중단"
      ],
      [
       "★Recreate★",
       "기존 Pod 전부 삭제 후 새 Pod 생성",
       "다운타임 발생 · 버전 혼재 불가 앱"
      ]
     ]
    }
   },
   {
    "h": "롤아웃 명령",
    "tb": {
     "head": [
      "명령",
      "용도"
     ],
     "rows": [
      [
       "kubectl set image deployment/web nginx=nginx:1.27",
       "이미지 변경(컨테이너이름=이미지)"
      ],
      [
       "kubectl rollout status deployment/web",
       "진행 상태"
      ],
      [
       "kubectl rollout history deployment/web [--revision=N]",
       "리비전 목록·상세"
      ],
      [
       "kubectl rollout undo deployment/web [--to-revision=N]",
       "직전 또는 지정 리비전으로 롤백"
      ],
      [
       "kubectl rollout pause / resume deployment/web",
       "여러 변경을 모아 한 번에 반영"
      ]
     ]
    }
   },
   {
    "h": "시험 요령",
    "li": [
     "YAML 은 손으로 쓰지 말고 ★--dry-run=client -o yaml★ 로 초안 생성 후 수정",
     "변경 사유 기록 — kubectl annotate deployment/web kubernetes.io/change-cause=\"update to 1.27\"",
     "롤백도 새 리비전 번호가 붙는다 — undo 후 history 의 번호가 하나 늘어난다"
    ]
   }
  ],
  "s": "s2"
 },
 {
  "no": "2-2",
  "t": "스케줄링 제어",
  "title": "노드 선택 — nodeName · nodeSelector · Affinity · Taint/Toleration",
  "ref": "CKA Curriculum — Workloads & Scheduling · 학습자료 §3",
  "body": [
   {
    "h": "수단별 비교",
    "tb": {
     "head": [
      "수단",
      "방향",
      "강도"
     ],
     "rows": [
      [
       "nodeName",
       "Pod → 노드 지정",
       "스케줄러 우회(필수)"
      ],
      [
       "nodeSelector",
       "Pod → 라벨 일치 노드",
       "필수 · 단순 일치"
      ],
      [
       "nodeAffinity required",
       "Pod → 표현식 일치 노드",
       "필수"
      ],
      [
       "nodeAffinity preferred",
       "Pod → 선호 노드",
       "weight 가중 선호"
      ],
      [
       "Taint/Toleration",
       "노드 → Pod 거부",
       "견디는 Pod 만 허용"
      ]
     ]
    }
   },
   {
    "h": "Taint 와 Toleration",
    "li": [
     "추가 ★kubectl taint nodes node01 env=prod:NoSchedule★ · 제거 kubectl taint nodes node01 env=prod:NoSchedule-",
     "효과 — NoSchedule(신규 금지) · PreferNoSchedule(가급적 회피) · ★NoExecute(기존 Pod 도 축출)★",
     "toleration — key · operator(Equal/Exists) · value · effect · tolerationSeconds(NoExecute 유예)",
     "kubeadm 컨트롤 플레인 노드 기본 taint — ★node-role.kubernetes.io/control-plane:NoSchedule★"
    ]
   },
   {
    "h": "nodeAffinity 문법",
    "li": [
     "requiredDuringSchedulingIgnoredDuringExecution → nodeSelectorTerms → matchExpressions(key · operator · values)",
     "연산자 In · NotIn · Exists · DoesNotExist · Gt · Lt — NotIn·DoesNotExist 로 회피(anti) 표현",
     "IgnoredDuringExecution — 실행 중 라벨이 바뀌어도 기존 Pod 는 유지"
    ]
   },
   {
    "h": "조합 원칙",
    "li": [
     "전용 노드 = ★taint(다른 Pod 차단) + toleration + nodeAffinity(이 Pod 를 끌어옴)★",
     "podAntiAffinity + topologyKey kubernetes.io/hostname 으로 레플리카를 노드별 분산"
    ]
   }
  ],
  "s": "s2"
 },
 {
  "no": "2-3",
  "t": "스케줄링 제어",
  "title": "DaemonSet · Static Pod · PriorityClass · 다중 스케줄러 · Admission",
  "ref": "CKA Curriculum — Workloads & Scheduling · 학습자료 §3",
  "body": [
   {
    "h": "DaemonSet",
    "li": [
     "노드마다 Pod 1개 — 노드 추가 시 자동 배치, 제거 시 회수",
     "생성 — kubectl create deployment ... --dry-run=client -o yaml 후 kind: DaemonSet, replicas·strategy 삭제"
    ]
   },
   {
    "h": "Static Pod",
    "li": [
     "kubelet 이 ★staticPodPath★ 디렉터리의 YAML 을 직접 실행 — API 서버·스케줄러 불필요",
     "경로 찾기 — ps -ef | grep kubelet 으로 --config 확인 → ★/var/lib/kubelet/config.yaml★ 의 staticPodPath (kubeadm 기본 /etc/kubernetes/manifests)",
     "API 에는 ★이름-노드명★ 미러 Pod 로 표시 · 삭제는 매니페스트 파일 제거",
     "kubeadm 컨트롤 플레인(kube-apiserver · etcd · scheduler · controller-manager)이 static pod 로 동작"
    ]
   },
   {
    "h": "PriorityClass",
    "li": [
     "value 가 클수록 우선 — 자원 부족 시 낮은 우선순위 Pod ★선점(preemption)★",
     "preemptionPolicy: Never — 대기열에서는 앞서지만 다른 Pod 를 축출하지 않음",
     "globalDefault: true — priorityClassName 미지정 Pod 의 기본값"
    ]
   },
   {
    "h": "다중 스케줄러와 Admission",
    "li": [
     "Pod spec.schedulerName 으로 스케줄러 선택 · 설정은 KubeSchedulerConfiguration profiles",
     "API 요청 처리 — 인증 → 인가 → ★Mutating Admission★ → 스키마 검증 → ★Validating Admission★ → etcd",
     "플러그인 활성화 — kube-apiserver --enable-admission-plugins=... (static pod 매니페스트 수정 후 자동 재시작)"
    ]
   }
  ],
  "s": "s2"
 },
 {
  "no": "2-4",
  "t": "자원·QoS",
  "title": "자원 요청·제한 · QoS · LimitRange · ResourceQuota",
  "ref": "CKA Curriculum — Workloads & Scheduling · 학습자료 §3",
  "body": [
   {
    "h": "requests 와 limits",
    "tb": {
     "head": [
      "구분",
      "역할",
      "초과 시"
     ],
     "rows": [
      [
       "requests",
       "스케줄러가 노드 여유를 판단하는 보장량",
       "—"
      ],
      [
       "CPU limit",
       "사용 상한",
       "★스로틀링★(종료 안 됨)"
      ],
      [
       "메모리 limit",
       "사용 상한",
       "★OOMKilled★"
      ]
     ]
    }
   },
   {
    "h": "QoS 클래스",
    "tb": {
     "head": [
      "클래스",
      "조건",
      "축출 순서"
     ],
     "rows": [
      [
       "Guaranteed",
       "모든 컨테이너 CPU·메모리 requests = limits",
       "가장 늦게"
      ],
      [
       "Burstable",
       "나머지(일부만 지정 등)",
       "중간"
      ],
      [
       "BestEffort",
       "requests·limits 전혀 없음",
       "★가장 먼저★"
      ]
     ]
    }
   },
   {
    "h": "LimitRange 와 ResourceQuota",
    "li": [
     "★LimitRange★ — 네임스페이스의 컨테이너별 default(limits) · defaultRequest · min · max",
     "★ResourceQuota★ — requests.cpu · limits.memory 총량, pods · services · persistentvolumeclaims 개수",
     "쿼터에 CPU·메모리가 있으면 requests·limits 미지정 Pod 는 거부 → LimitRange 기본값으로 해결",
     "둘 다 ★기존 Pod 에는 소급 적용되지 않는다★ — 생성 시점에 검사"
    ]
   }
  ],
  "s": "s2"
 },
 {
  "no": "2-5",
  "t": "설정 주입",
  "title": "설정 주입 — command·args · env · ConfigMap · Secret",
  "ref": "CKA Curriculum — Workloads & Scheduling · 학습자료 §5",
  "body": [
   {
    "h": "command 와 args",
    "tb": {
     "head": [
      "Dockerfile",
      "Pod spec",
      "kubectl run"
     ],
     "rows": [
      [
       "ENTRYPOINT",
       "command",
       "--command -- sleep 1000"
      ],
      [
       "CMD",
       "args",
       "-- sleep 1000"
      ]
     ]
    }
   },
   {
    "h": "ConfigMap",
    "li": [
     "생성 — --from-literal=KEY=VAL · --from-file=파일 · --from-env-file=.env",
     "주입 — env.valueFrom.configMapKeyRef(키 하나) · envFrom.configMapRef(전체) · volumes.configMap(파일)",
     "볼륨 마운트는 변경이 지연 반영(subPath 마운트는 반영 안 됨) · 환경변수는 Pod 재시작 필요"
    ]
   },
   {
    "h": "Secret",
    "li": [
     "data 는 ★base64★ — 디코딩 echo 값 | base64 -d · stringData 는 평문 입력",
     "유형 — Opaque(generic) · kubernetes.io/tls(tls) · kubernetes.io/dockerconfigjson(docker-registry)",
     "etcd 암호화 — EncryptionConfiguration(aescbc · aesgcm · kms · secretbox · identity) + kube-apiserver --encryption-provider-config",
     "★목록 첫 번째 provider 로 암호화★ — 설정 후 기존 Secret 은 다시 써야 암호화(kubectl get secrets -A -o json | kubectl replace -f -)",
     "immutable: true — 변경 금지로 실수 방지·API 부하 감소"
    ]
   }
  ],
  "s": "s2"
 },
 {
  "no": "2-6",
  "t": "오토스케일링·멀티컨테이너",
  "title": "멀티 컨테이너 · initContainers · HPA · VPA · 로깅",
  "ref": "CKA Curriculum — Workloads & Scheduling · 학습자료 §4·§5",
  "body": [
   {
    "h": "멀티 컨테이너 Pod",
    "li": [
     "같은 Pod = 네트워크 네임스페이스(localhost)·볼륨 공유",
     "패턴 — Sidecar(로그 전송·동기화) · Ambassador(외부 프록시) · Adapter(출력 변환)",
     "★initContainers★ — 정의 순서대로 실행·성공 종료 후 앱 시작",
     "네이티브 사이드카 — initContainers 에 restartPolicy: Always (v1.29 부터 기본 활성)"
    ]
   },
   {
    "h": "오토스케일링",
    "tb": {
     "head": [
      "종류",
      "조정 대상",
      "요건"
     ],
     "rows": [
      [
       "★HPA★",
       "replicas(Pod 수)",
       "metrics-server · 대상 컨테이너 requests"
      ],
      [
       "VPA",
       "requests·limits",
       "별도 애드온 설치"
      ],
      [
       "In-place Resize",
       "실행 중 Pod 자원",
       "resizePolicy · 버전별 기능 상태 확인 [확인필요]"
      ]
     ]
    }
   },
   {
    "h": "로그·모니터링",
    "li": [
     "kubectl logs p -c 컨테이너 · ★-p(--previous)★ 재시작 전 로그 · -f · --tail=50 · --since=1h · -l app=web",
     "kubectl top node / pod --sort-by=cpu|memory — metrics-server 필요",
     "노드 로그 경로 /var/log/pods · /var/log/containers · 클러스터 로그는 DaemonSet 수집기(Fluent Bit 등)"
    ]
   }
  ],
  "s": "s2"
 },
 {
  "s": "s3",
  "no": "3-1",
  "t": "Service",
  "title": "Service 유형·포트·Endpoint",
  "ref": "CKA Curriculum — Services & Networking · 학습자료 §2",
  "body": [
   {
    "h": "Service 4종",
    "tb": {
     "head": [
      "유형",
      "동작",
      "용도"
     ],
     "rows": [
      [
       "★ClusterIP★",
       "클러스터 내부 가상 IP — kube-proxy 가 Pod 로 분산",
       "내부 통신(기본)"
      ],
      [
       "★NodePort★",
       "모든 노드의 nodePort(기본 30000-32767) → ClusterIP",
       "개발·온프레미스 외부 노출"
      ],
      [
       "★LoadBalancer★",
       "클라우드 LB → NodePort → Pod",
       "클라우드 외부 노출"
      ],
      [
       "★ExternalName★",
       "DNS CNAME 응답만(selector 없음)",
       "외부 DB 등 이름 추상화"
      ]
     ]
    }
   },
   {
    "h": "포트 3종",
    "li": [
     "★port★ — Service 가 받는 포트 / ★targetPort★ — Pod 컨테이너 포트(생략 시 port) / ★nodePort★ — 노드 포트",
     "targetPort 는 이름도 가능 — 컨테이너 ports[].name 과 매칭"
    ]
   },
   {
    "h": "Endpoint 와 selector",
    "li": [
     "selector 와 label 이 일치하고 ★Ready★ 인 Pod 만 Endpoint(EndpointSlice)에 등록",
     "★kubectl get endpoints <svc>★ 가 <none> 이면 selector·label 오타, Pod 미Ready(readinessProbe 실패) 확인",
     "selector 없는 Service + 수동 Endpoint 로 클러스터 외부 IP 를 묶을 수 있다"
    ]
   },
   {
    "h": "명령형 생성",
    "li": [
     "★kubectl expose deployment web --name=web-svc --port=80 --target-port=8080 --type=NodePort★",
     "kubectl create service clusterip db --tcp=5432:5432 — selector 는 app=db 로 자동 설정",
     "nodePort 를 특정 값으로 지정하려면 kubectl edit svc 또는 --dry-run=client -o yaml 후 spec.ports[].nodePort 수정"
    ]
   },
   {
    "h": "kube-proxy",
    "li": [
     "DaemonSet 으로 모든 노드에서 실행, Service·EndpointSlice 변화를 감시해 iptables/ipvs 규칙 설치",
     "모드 — ★iptables(기본)★ · ★ipvs★ · nftables / ★userspace 는 v1.26 제거★",
     "확인 — kubectl -n kube-system get cm kube-proxy -o yaml | grep mode · kubectl logs -n kube-system <kube-proxy-pod>"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-2",
  "t": "CoreDNS·DNS",
  "title": "클러스터 DNS — CoreDNS 와 이름 규칙",
  "ref": "CKA Curriculum — CoreDNS · 학습자료 §9",
  "body": [
   {
    "h": "레코드 규칙",
    "tb": {
     "head": [
      "대상",
      "FQDN",
      "예"
     ],
     "rows": [
      [
       "Service",
       "<svc>.<ns>.svc.cluster.local",
       "db.dev.svc.cluster.local"
      ],
      [
       "Pod",
       "<IP 점→대시>.<ns>.pod.cluster.local",
       "10-244-1-5.dev.pod.cluster.local"
      ],
      [
       "Headless + StatefulSet",
       "<pod>.<svc>.<ns>.svc.cluster.local",
       "web-0.nginx.default.svc.cluster.local"
      ]
     ]
    }
   },
   {
    "h": "CoreDNS 구성",
    "li": [
     "kube-system 의 Deployment ★coredns★ · Service 이름은 ★kube-dns★ · label k8s-app=kube-dns",
     "설정 — ★ConfigMap coredns 의 Corefile★ (kubernetes 플러그인 · forward . /etc/resolv.conf · cache)",
     "Pod 의 /etc/resolv.conf — nameserver(kube-dns ClusterIP) · search 3단계 · ★ndots:5★"
    ]
   },
   {
    "h": "DNS 장애 점검",
    "li": [
     "임시 Pod — ★kubectl run t --rm -it --image=busybox:1.28 -- nslookup <svc>★",
     "CoreDNS Pod 상태·로그 — kubectl -n kube-system get pods -l k8s-app=kube-dns · kubectl -n kube-system logs -l k8s-app=kube-dns",
     "kube-dns Service 의 Endpoint 가 비었는지 · Egress NetworkPolicy 가 53 을 막는지 확인"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-3",
  "t": "CNI·Pod 네트워크",
  "title": "CNI 와 Pod 네트워크 모델",
  "ref": "CKA Curriculum — Pod connectivity · CNI · 학습자료 §9",
  "body": [
   {
    "h": "쿠버네티스 네트워크 모델",
    "li": [
     "모든 Pod 는 ★NAT 없이★ 다른 노드의 Pod 와 통신 · Pod 마다 고유 IP",
     "같은 Pod 의 컨테이너는 네트워크 네임스페이스 공유(localhost) — pause 컨테이너가 네임스페이스 보유",
     "★Pod CIDR(--cluster-cidr)★ 과 ★Service CIDR(--service-cluster-ip-range)★ 은 겹치지 않게"
    ]
   },
   {
    "h": "CNI 동작",
    "li": [
     "kubelet → 컨테이너 런타임(containerd) → ★/etc/cni/net.d/★ 설정에 따라 ★/opt/cni/bin/★ 플러그인 실행",
     "플러그인이 veth 쌍 생성·IP 할당(IPAM)·라우팅 설정",
     "CNI 미설치 → 노드 ★NotReady★ · Pod 는 ContainerCreating(네트워크 미준비)"
    ]
   },
   {
    "h": "CNI 플러그인",
    "tb": {
     "head": [
      "플러그인",
      "방식",
      "NetworkPolicy"
     ],
     "rows": [
      [
       "Calico",
       "BGP 라우팅 · IPIP/VXLAN",
       "지원"
      ],
      [
       "Cilium",
       "eBPF",
       "지원(L7 확장)"
      ],
      [
       "Flannel",
       "VXLAN 오버레이",
       "★미지원★"
      ],
      [
       "Weave Net",
       "오버레이 메시",
       "지원 — 개발 중단 [확인필요]"
      ]
     ]
    }
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-4",
  "t": "NetworkPolicy",
  "title": "NetworkPolicy — 허용 목록 방식 트래픽 통제",
  "ref": "CKA Curriculum — Network Policies · 학습자료 §7",
  "body": [
   {
    "h": "동작 원리",
    "li": [
     "정책이 없으면 모두 허용 → 어떤 정책의 ★podSelector 에 선택된 Pod★ 는 해당 방향(policyTypes)에서 ★명시된 트래픽만 허용★",
     "여러 정책은 ★허용의 합집합★ · 거부 규칙 없음 · 응답 트래픽은 자동 허용(상태 기반)",
     "CNI 가 지원해야 강제됨(Flannel 단독은 미지원)"
    ]
   },
   {
    "h": "from/to 선택자",
    "tb": {
     "head": [
      "선택자",
      "의미"
     ],
     "rows": [
      [
       "podSelector",
       "같은 네임스페이스의 Pod"
      ],
      [
       "namespaceSelector",
       "선택된 네임스페이스의 모든 Pod"
      ],
      [
       "namespaceSelector + podSelector (같은 항목)",
       "★그 네임스페이스의 그 Pod (AND)★"
      ],
      [
       "ipBlock",
       "CIDR(except 로 제외 가능) — 주로 클러스터 외부"
      ]
     ]
    }
   },
   {
    "h": "자주 쓰는 패턴",
    "li": [
     "기본 거부 — podSelector: {} · policyTypes: [Ingress] · ingress 없음",
     "특정 앱만 허용 — podSelector app=db · ingress.from podSelector app=api · ports 5432",
     "네임스페이스 이름 지정 — namespaceSelector.matchLabels ★kubernetes.io/metadata.name: prod★",
     "Egress 제한 시 ★DNS(UDP·TCP 53) 허용★ 을 함께 둔다"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-5",
  "t": "Ingress·Gateway API",
  "title": "Ingress — 호스트·경로 기반 L7 라우팅",
  "ref": "CKA Curriculum — Ingress controllers and Ingress resources",
  "body": [
   {
    "h": "구성 요소",
    "li": [
     "★Ingress Controller★(ingress-nginx 등) — 실제 프록시 · 보통 NodePort/LoadBalancer Service 로 노출",
     "★IngressClass★ — 어떤 컨트롤러가 처리할지 · Ingress 의 ★spec.ingressClassName★",
     "Ingress 리소스 — rules(host · paths) → backend.service(name · port.number)"
    ]
   },
   {
    "h": "pathType",
    "tb": {
     "head": [
      "값",
      "일치 방식"
     ],
     "rows": [
      [
       "Exact",
       "경로가 정확히 같을 때"
      ],
      [
       "Prefix",
       "'/' 로 나눈 경로 요소 단위 접두 일치"
      ],
      [
       "ImplementationSpecific",
       "컨트롤러 구현에 따름"
      ]
     ]
    }
   },
   {
    "h": "명령형·TLS",
    "li": [
     "★kubectl create ingress web --class=nginx --rule=\"shop.example.com/api*=api-svc:80\"★ (* = Prefix)",
     "TLS — Secret(type kubernetes.io/tls) 생성 후 spec.tls[].hosts · secretName",
     "rewrite 는 컨트롤러 annotation(예: nginx.ingress.kubernetes.io/rewrite-target)"
    ]
   }
  ]
 },
 {
  "s": "s3",
  "no": "3-6",
  "t": "Ingress·Gateway API",
  "title": "Gateway API — 역할 분리형 차세대 트래픽 API",
  "ref": "CKA Curriculum — Gateway API (2025 개정 반영)",
  "body": [
   {
    "h": "리소스와 담당자",
    "tb": {
     "head": [
      "리소스",
      "담당",
      "핵심 필드"
     ],
     "rows": [
      [
       "GatewayClass",
       "인프라 제공자",
       "controllerName"
      ],
      [
       "Gateway",
       "클러스터 운영자",
       "gatewayClassName · listeners(name · port · protocol · hostname)"
      ],
      [
       "HTTPRoute",
       "애플리케이션 개발자",
       "parentRefs · hostnames · rules(matches · backendRefs · filters)"
      ],
      [
       "ReferenceGrant",
       "대상 네임스페이스 소유자",
       "다른 네임스페이스 참조 허가"
      ]
     ]
    }
   },
   {
    "h": "Ingress 와 차이",
    "li": [
     "Ingress — 단일 리소스, 고급 기능은 컨트롤러별 annotation 에 의존",
     "Gateway API — ★역할 분리★ · 헤더 매칭 · ★weight 기반 트래픽 분할★ · TCP/TLS/gRPC Route 등 표준 필드",
     "Gateway API 는 쿠버네티스 코어가 아닌 ★별도 CRD★ (v1.0 GA 2023-10) — 컨트롤러 구현체 필요"
    ]
   },
   {
    "h": "확인 명령",
    "li": [
     "kubectl get gatewayclass,gateway,httproute -A",
     "kubectl describe httproute <name> — status.parents 의 Accepted·ResolvedRefs 조건 확인"
    ]
   }
  ]
 },
 {
  "no": "4-1",
  "t": "볼륨",
  "title": "볼륨 기초 — emptyDir · hostPath · configMap/secret · projected",
  "ref": "CKA Curriculum — Storage · 학습자료 §8",
  "body": [
   {
    "h": "볼륨 유형",
    "tb": {
     "head": [
      "유형",
      "수명",
      "용도",
      "주의"
     ],
     "rows": [
      [
       "★emptyDir★",
       "Pod 와 같음",
       "컨테이너 간 공유·임시 파일",
       "컨테이너 재시작엔 유지 · medium: Memory 가능"
      ],
      [
       "★hostPath★",
       "노드에 남음",
       "단일 노드 실습·노드 파일 접근",
       "노드 이동 시 데이터 없음 · 보안 위험"
      ],
      [
       "configMap · secret",
       "원본 객체",
       "설정 파일 마운트",
       "subPath 는 갱신 미반영"
      ],
      [
       "projected",
       "원본 객체",
       "여러 소스를 한 디렉터리로",
       "serviceAccountToken 포함 가능"
      ],
      [
       "persistentVolumeClaim",
       "PV 정책 따름",
       "영구 데이터",
       "PVC 와 Pod 같은 네임스페이스"
      ]
     ]
    }
   },
   {
    "h": "마운트 문법",
    "li": [
     "spec.volumes 에 볼륨 정의 → 컨테이너 volumeMounts 의 ★name 이 일치★ 해야 한다",
     "mountPath(컨테이너 경로) · readOnly · subPath(볼륨 안의 하위 경로만 마운트)",
     "같은 볼륨을 여러 컨테이너에 마운트해 파일 공유(사이드카 로그 패턴)"
    ]
   }
  ],
  "s": "s4"
 },
 {
  "no": "4-2",
  "t": "PV·PVC",
  "title": "PV · PVC — 바인딩 · Access Mode · 회수 정책 · 상태",
  "ref": "CKA Curriculum — Storage · 학습자료 §8",
  "body": [
   {
    "h": "정적 프로비저닝 흐름",
    "li": [
     "관리자가 PV 생성(용량 · accessModes · reclaimPolicy · storageClassName · 실제 볼륨)",
     "사용자가 PVC 생성 → 컨트롤 플레인이 조건 맞는 PV 와 ★1:1 바인딩★",
     "Pod 가 volumes.persistentVolumeClaim.claimName 으로 사용"
    ]
   },
   {
    "h": "바인딩 조건",
    "tb": {
     "head": [
      "조건",
      "규칙"
     ],
     "rows": [
      [
       "용량",
       "PV ≥ 요청 — 남는 용량은 다른 PVC 가 쓸 수 없음"
      ],
      [
       "accessModes",
       "PVC 요청 모드를 PV 가 지원"
      ],
      [
       "storageClassName",
       "같아야 함 · \"\" 은 클래스 없는 PV · 생략 시 기본 클래스"
      ],
      [
       "selector",
       "PVC 에 지정하면 PV 라벨 일치 필요"
      ],
      [
       "volumeMode",
       "Filesystem(기본) / Block 일치"
      ]
     ]
    }
   },
   {
    "h": "PV 상태와 회수",
    "li": [
     "Available → Bound → (PVC 삭제) → ★Retain: Released★ / Delete: 삭제",
     "Released PV 재사용 — kubectl patch pv pv1 -p '{\"spec\":{\"claimRef\":null}}' 또는 PV 재생성",
     "사용 중 PVC 삭제는 pvc-protection 으로 Terminating 대기"
    ]
   }
  ],
  "s": "s4"
 },
 {
  "no": "4-3",
  "t": "StorageClass·동적 프로비저닝",
  "title": "StorageClass · 동적 프로비저닝 · 확장 · CSI",
  "ref": "CKA Curriculum — Storage · 학습자료 §8",
  "body": [
   {
    "h": "StorageClass 필드",
    "tb": {
     "head": [
      "필드",
      "의미",
      "기본값"
     ],
     "rows": [
      [
       "provisioner",
       "볼륨을 만드는 드라이버(CSI 이름)",
       "필수"
      ],
      [
       "parameters",
       "드라이버별 옵션(디스크 유형 등)",
       "—"
      ],
      [
       "reclaimPolicy",
       "동적 생성 PV 의 회수 정책",
       "★Delete★"
      ],
      [
       "volumeBindingMode",
       "Immediate / WaitForFirstConsumer",
       "Immediate"
      ],
      [
       "allowVolumeExpansion",
       "PVC 확장 허용",
       "false"
      ]
     ]
    }
   },
   {
    "h": "바인딩 시점",
    "li": [
     "★Immediate★ — PVC 생성 즉시 프로비저닝 → Pod 가 다른 존에 배치되면 마운트 불가 위험",
     "★WaitForFirstConsumer★ — Pod 스케줄 결과(노드·존)를 보고 볼륨 생성 · local 볼륨 필수",
     "기본 클래스 지정 — kubectl patch storageclass sc1 -p '{\"metadata\":{\"annotations\":{\"storageclass.kubernetes.io/is-default-class\":\"true\"}}}'"
    ]
   },
   {
    "h": "CSI",
    "li": [
     "★Controller 플러그인★ — 볼륨 생성·삭제·연결(사이드카 external-provisioner · external-attacher · external-resizer)",
     "★Node 플러그인★ — DaemonSet 으로 각 노드에서 마운트",
     "in-tree 볼륨 플러그인은 CSI 드라이버로 이전(CSI migration)"
    ]
   }
  ],
  "s": "s4"
 },
 {
  "s": "s5",
  "no": "5-1",
  "t": "애플리케이션 장애",
  "title": "애플리케이션 장애 — Pod 상태별 진단",
  "ref": "CKA Curriculum — Troubleshoot applications · 학습자료 §13",
  "body": [
   {
    "h": "진단 순서",
    "li": [
     "★kubectl get pod -o wide★ — STATUS · RESTARTS · NODE",
     "★kubectl describe pod★ — State · Last State · Reason · Exit Code · Events",
     "★kubectl logs <pod> [-c c] [--previous]★ · 셸이 있으면 kubectl exec -it <pod> -- sh",
     "셸 없는 이미지는 ★kubectl debug -it <pod> --image=busybox --target=<c>★"
    ]
   },
   {
    "h": "상태별 원인",
    "tb": {
     "head": [
      "상태",
      "원인",
      "해결"
     ],
     "rows": [
      [
       "Pending",
       "Insufficient cpu/memory · taint · nodeSelector · PVC",
       "requests 조정 · toleration · 라벨 · PV 준비"
      ],
      [
       "ImagePullBackOff",
       "이미지·태그 오타 · 인증",
       "이미지 수정 · imagePullSecrets"
      ],
      [
       "CrashLoopBackOff",
       "앱 오류 · command/args · liveness",
       "logs --previous · 명령 수정"
      ],
      [
       "CreateContainerConfigError",
       "ConfigMap·Secret 누락",
       "리소스 생성·이름 수정"
      ],
      [
       "OOMKilled",
       "memory limit 초과(137)",
       "limit 상향"
      ]
     ]
    }
   },
   {
    "h": "종료 코드",
    "li": [
     "★0★ 정상 종료(Completed) · ★1★ 앱 오류 · ★137★ SIGKILL(OOMKilled 등) · ★143★ SIGTERM",
     "Deployment Pod 를 고칠 때는 ★kubectl edit deploy★ 또는 set image — Pod 직접 수정은 대부분 필드가 불변"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-2",
  "t": "컨트롤 플레인 장애",
  "title": "컨트롤 플레인 장애 — 정적 Pod 와 crictl",
  "ref": "CKA Curriculum — Troubleshoot cluster component failure",
  "body": [
   {
    "h": "정적 Pod 구조",
    "li": [
     "kubeadm 컨트롤 플레인 4종 매니페스트 — ★/etc/kubernetes/manifests/★ kube-apiserver.yaml · kube-controller-manager.yaml · kube-scheduler.yaml · etcd.yaml",
     "경로는 kubelet 설정 ★staticPodPath★(/var/lib/kubelet/config.yaml)",
     "파일 수정 → kubelet 이 자동 재생성 · 미러 Pod 이름은 <컴포넌트>-<노드명>"
    ]
   },
   {
    "h": "apiserver 가 응답하지 않을 때",
    "li": [
     "kubectl 불가 → 노드에서 ★crictl ps -a | grep apiserver★ · ★crictl logs <id>★",
     "로그 파일 ★/var/log/pods/kube-system_kube-apiserver-*★ · kubelet 로그 ★journalctl -u kubelet★",
     "흔한 원인 — 이미지 태그 오타 · 플래그 오타 · 인증서·키 경로 오류 · --etcd-servers 주소 오류 · YAML 들여쓰기"
    ]
   },
   {
    "h": "컴포넌트별 증상",
    "tb": {
     "head": [
      "컴포넌트",
      "다운 시 증상"
     ],
     "rows": [
      [
       "kube-apiserver",
       "kubectl connection refused(6443)"
      ],
      [
       "kube-scheduler",
       "새 Pod Pending · NODE <none>"
      ],
      [
       "kube-controller-manager",
       "replicas 변경·롤아웃에도 Pod 미생성"
      ],
      [
       "etcd",
       "apiserver 가 저장·조회 실패"
      ]
     ]
    }
   },
   {
    "h": "인증서",
    "li": [
     "★kubeadm certs check-expiration★ · ★kubeadm certs renew all★ · 위치 ★/etc/kubernetes/pki★",
     "갱신 후 정적 Pod 재시작(매니페스트를 잠시 옮겼다 되돌리기 등) · kubeconfig 의 클라이언트 인증서도 확인"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-3",
  "t": "워커 노드 장애",
  "title": "워커 노드 장애 — kubelet·런타임·자원",
  "ref": "CKA Curriculum — Troubleshoot clusters and nodes",
  "body": [
   {
    "h": "진단 순서",
    "li": [
     "★kubectl get nodes★ → ★kubectl describe node <n>★ (Conditions · Events · Allocated resources)",
     "노드 접속 → ★systemctl status kubelet★ → ★journalctl -u kubelet -f★",
     "★systemctl status containerd★ · ★crictl ps★ · df -h · free -m"
    ]
   },
   {
    "h": "Conditions",
    "tb": {
     "head": [
      "조건",
      "의미"
     ],
     "rows": [
      [
       "Ready=False",
       "kubelet 이 비정상 보고(CNI 미준비 등)"
      ],
      [
       "Ready=Unknown",
       "kubelet 이 상태 보고를 멈춤(kubelet 중지·네트워크 단절)"
      ],
      [
       "MemoryPressure",
       "메모리 부족"
      ],
      [
       "DiskPressure",
       "디스크·inode 부족"
      ],
      [
       "PIDPressure",
       "프로세스 수 과다"
      ]
     ]
    }
   },
   {
    "h": "kubelet 설정과 복구",
    "li": [
     "★/var/lib/kubelet/config.yaml★ · ★/etc/kubernetes/kubelet.conf★ · systemd 드롭인 ★10-kubeadm.conf★",
     "중지 → ★systemctl start kubelet && systemctl enable kubelet★",
     "드롭인·설정 수정 → ★systemctl daemon-reload && systemctl restart kubelet★",
     "흔한 원인 — 잘못된 config/CA 경로 · 만료 인증서 · containerd 중지 · swap 활성(설정에 따라)"
    ]
   },
   {
    "h": "노드 장애와 Pod",
    "li": [
     "기본 톨러레이션 not-ready·unreachable ★tolerationSeconds 300★ → 약 5분 후 축출",
     "유지보수는 ★kubectl drain <n> --ignore-daemonsets★ → 작업 → ★kubectl uncordon <n>★"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-4",
  "t": "서비스·네트워크 장애",
  "title": "Service·네트워크 장애 진단",
  "ref": "CKA Curriculum — Troubleshoot services and networking",
  "body": [
   {
    "h": "Service 체크리스트",
    "li": [
     "★kubectl get endpoints <svc>★ — 비면 selector·label 오타 또는 Ready Pod 없음",
     "★targetPort★ 와 컨테이너가 실제 listen 하는 포트 비교",
     "임시 Pod — ★kubectl run t --rm -it --image=busybox:1.28 -- wget -qO- <svc>:<port>★",
     "★NetworkPolicy★ — 대상 Pod 를 선택하는 정책이 출처를 허용하는지"
    ]
   },
   {
    "h": "DNS",
    "li": [
     "★kubectl -n kube-system get pods -l k8s-app=kube-dns★ · logs · kube-dns Service Endpoint",
     "Pod 안 /etc/resolv.conf 의 nameserver 가 kube-dns ClusterIP 인지",
     "Egress 정책이 UDP·TCP 53 을 막는지"
    ]
   },
   {
    "h": "kube-proxy·CNI",
    "li": [
     "kube-proxy DaemonSet 상태·로그 · ConfigMap(mode · clusterCIDR)",
     "iptables 모드 — ★iptables -t nat -L KUBE-SERVICES★ / ipvs 모드 — ipvsadm -Ln",
     "CNI Pod(calico-node 등) 상태 · /etc/cni/net.d 설정 존재 여부"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-5",
  "t": "로깅·모니터링",
  "title": "로깅·모니터링 — logs · events · top",
  "ref": "CKA Curriculum — Monitor cluster and application resource usage · Manage container stdout/stderr logs",
  "body": [
   {
    "h": "kubectl logs",
    "tb": {
     "head": [
      "옵션",
      "의미"
     ],
     "rows": [
      [
       "-c <container>",
       "다중 컨테이너 Pod 의 특정 컨테이너"
      ],
      [
       "-p / --previous",
       "재시작 전 컨테이너 로그"
      ],
      [
       "-f",
       "실시간 추적"
      ],
      [
       "--tail=N · --since=1h",
       "마지막 N 줄 · 최근 기간"
      ],
      [
       "-l app=web --all-containers",
       "라벨로 여러 Pod · 모든 컨테이너"
      ]
     ]
    }
   },
   {
    "h": "로그 저장 위치",
    "li": [
     "컨테이너 stdout/stderr → ★/var/log/pods/<ns>_<pod>_<uid>/<container>/*.log★ (/var/log/containers 는 링크)",
     "kubelet·containerd 로그 → ★journalctl -u kubelet★ · journalctl -u containerd",
     "클러스터 수준 로깅 — 노드별 에이전트(DaemonSet) 또는 사이드카 컨테이너"
    ]
   },
   {
    "h": "이벤트·리소스 사용량",
    "li": [
     "★kubectl get events -A --sort-by=.metadata.creationTimestamp★ · --field-selector type=Warning · 기본 보존 1시간",
     "★kubectl top nodes · kubectl top pods --sort-by=memory★ — ★metrics-server 필요★",
     "결과 저장 문제 — kubectl top pod -A --sort-by=cpu --no-headers | head -1 > /opt/answer.txt 처럼 리다이렉트"
    ]
   }
  ]
 },
 {
  "s": "s5",
  "no": "5-6",
  "t": "JSONPath·출력 가공",
  "title": "JSONPath·custom-columns — 출력 가공",
  "ref": "CKA Curriculum — kubectl 출력 · 학습자료 §14",
  "body": [
   {
    "h": "JSONPath 문법",
    "tb": {
     "head": [
      "표현",
      "의미"
     ],
     "rows": [
      [
       ".items[*]",
       "목록의 모든 항목"
      ],
      [
       ".items[0]",
       "첫 항목"
      ],
      [
       "{range .items[*]}…{end}",
       "항목별 반복"
      ],
      [
       "{\"\\n\"} · {\"\\t\"}",
       "줄바꿈 · 탭"
      ],
      [
       "?(@.type==\"InternalIP\")",
       "조건 필터"
      ]
     ]
    }
   },
   {
    "h": "자주 나오는 예",
    "li": [
     "노드 이름 — ★kubectl get nodes -o jsonpath='{.items[*].metadata.name}'★",
     "노드 InternalIP — ★'{.items[*].status.addresses[?(@.type==\"InternalIP\")].address}'★",
     "Pod 이름·이미지 표 — ★-o custom-columns=POD:.metadata.name,IMAGE:.spec.containers[*].image★",
     "정렬 — ★--sort-by=.metadata.creationTimestamp★ · --sort-by=.spec.capacity.storage(PV)"
    ]
   },
   {
    "h": "요령",
    "li": [
     "경로를 모르면 ★-o json★(또는 -o yaml)으로 구조부터 본다",
     "JSONPath 는 ★작은따옴표★ 로 감싼다 · custom-columns 경로는 .items 없이 객체 기준"
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
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "Kubernetes 에서 etcd 와 직접 읽고 쓰는 유일한 구성요소는?",
  "c": [
   "kube-apiserver",
   "kube-scheduler",
   "kubelet",
   "kube-controller-manager"
  ],
  "a": 0,
  "e": "모든 구성요소는 kube-apiserver 를 거치며, etcd 에 접근하는 것은 apiserver 뿐이다. 스케줄러·컨트롤러·kubelet 은 apiserver 를 감시(watch)한다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "Pod 를 실행할 노드를 결정하는 구성요소는?",
  "c": [
   "kubelet",
   "kube-scheduler",
   "kube-proxy",
   "etcd"
  ],
  "a": 1,
  "e": "스케줄러가 필터링·점수화로 노드를 정한다. 실행은 kubelet, Service 규칙은 kube-proxy, 상태 저장은 etcd 의 역할이다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "etcd 의 클라이언트 요청을 받는 기본 포트는?",
  "c": [
   "2380",
   "6443",
   "2379",
   "10250"
  ],
  "a": 2,
  "e": "2379 는 클라이언트(apiserver·etcdctl), 2380 은 etcd 피어 간 통신, 6443 은 apiserver, 10250 은 kubelet API 포트다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 2,
  "q": "kubeadm 으로 구성한 클러스터에서 kube-apiserver 가 실행되는 형태는?",
  "c": [
   "kube-system 의 Deployment",
   "각 노드의 DaemonSet",
   "systemd 서비스",
   "/etc/kubernetes/manifests 의 Static Pod"
  ],
  "a": 3,
  "e": "kubeadm 은 apiserver·etcd·scheduler·controller-manager 를 Static Pod 로 실행한다. kube-proxy 는 DaemonSet, CoreDNS 는 Deployment, kubelet 은 systemd 서비스다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 2,
  "q": "새로 만든 Pod 가 계속 Pending 이고 events 에 스케줄링 기록이 전혀 없다. 가장 먼저 확인할 구성요소는?",
  "c": [
   "kube-scheduler",
   "kube-proxy",
   "CoreDNS",
   "kubelet 의 이미지 캐시"
  ],
  "a": 0,
  "e": "노드 배정 자체가 일어나지 않으면 스케줄러 Static Pod 상태를 먼저 본다. kube-proxy·CoreDNS 는 배치와 무관하고, 이미지 문제는 배정 이후의 단계다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "v1.24 에서 제거되어 Docker Engine 을 kubelet 이 직접 쓰지 못하게 된 구성요소는?",
  "c": [
   "containerd",
   "dockershim",
   "runc",
   "CRI-O"
  ],
  "a": 1,
  "e": "dockershim 이 제거되어 kubelet 은 CRI 를 구현한 containerd·CRI-O 등을 사용한다. runc 는 저수준 OCI 런타임이다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 3,
  "q": "Static Pod 의 manifest 경로가 기본과 다른지 확인하려면 어디를 봐야 하는가?",
  "c": [
   "kube-apiserver 의 --admission-plugins",
   "/etc/kubernetes/admin.conf",
   "kubelet 설정 파일의 staticPodPath",
   "CoreDNS ConfigMap"
  ],
  "a": 2,
  "e": "Static Pod 경로는 kubelet 설정(/var/lib/kubelet/config.yaml)의 staticPodPath 로 정해진다. 나머지는 Static Pod 경로와 무관하다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 1,
  "q": "kubeadm 클러스터를 업그레이드할 때 가장 먼저 업그레이드하는 대상은?",
  "c": [
   "모든 Worker 노드",
   "CNI 플러그인",
   "CoreDNS",
   "Control Plane 노드"
  ],
  "a": 3,
  "e": "Control Plane 을 먼저 올리고 Worker 를 올린다. kubelet 은 apiserver 보다 최신일 수 없기 때문이다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 1,
  "q": "v1.29 클러스터를 v1.31 로 올리는 올바른 방법은?",
  "c": [
   "v1.30 으로 올린 뒤 v1.31 로 올린다",
   "v1.31 로 바로 올린다",
   "Worker 만 v1.31 로 올린다",
   "etcd 만 v1.31 로 올린다"
  ],
  "a": 0,
  "e": "kubeadm 은 Minor 버전을 한 단계씩만 업그레이드한다. 건너뛰기는 지원되지 않는다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "첫 번째 Control Plane 노드에서 클러스터 구성요소를 업그레이드하는 명령은?",
  "c": [
   "kubeadm upgrade node",
   "kubeadm upgrade apply v1.31.1",
   "kubeadm init --upgrade",
   "kubectl upgrade cluster"
  ],
  "a": 1,
  "e": "첫 Control Plane 은 kubeadm upgrade apply, 추가 Control Plane·Worker 는 kubeadm upgrade node 를 쓴다. 나머지 명령은 존재하지 않는다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "Worker 노드에서 kubeadm 을 업그레이드한 뒤 실행할 kubeadm 명령은?",
  "c": [
   "kubeadm upgrade apply",
   "kubeadm join --upgrade",
   "kubeadm upgrade node",
   "kubeadm reset"
  ],
  "a": 2,
  "e": "Worker 는 kubeadm upgrade node 로 로컬 kubelet 구성을 갱신한다. reset 은 노드 초기화라 업그레이드가 아니다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "노드에서 Pod 를 축출하고 스케줄을 막는 명령은?",
  "c": [
   "kubectl cordon node01",
   "kubectl uncordon node01",
   "kubectl taint node node01 key=v:NoSchedule",
   "kubectl drain node01 --ignore-daemonsets"
  ],
  "a": 3,
  "e": "drain 은 cordon 과 Pod 축출을 함께 한다. cordon 은 새 스케줄만 막고, uncordon 은 해제, NoSchedule taint 는 기존 Pod 를 내보내지 않는다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 3,
  "q": "kubectl drain 이 \"cannot delete Pods not managed by ReplicationController, ReplicaSet, Job, DaemonSet or StatefulSet\" 오류로 멈췄다. 해당 Pod 를 지워도 된다면 추가할 옵션은?",
  "c": [
   "--force",
   "--ignore-daemonsets",
   "--grace-period=-1",
   "--dry-run=client"
  ],
  "a": 0,
  "e": "컨트롤러가 관리하지 않는 단독 Pod 는 --force 로 삭제해야 drain 이 진행된다. 단독 Pod 는 다른 곳에서 재생성되지 않는다는 점에 주의한다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "새 Worker 를 조인하려는데 기존 토큰이 만료되었다. join 명령 전체를 다시 출력하는 명령은?",
  "c": [
   "kubeadm init phase token",
   "kubeadm token create --print-join-command",
   "kubectl create token join",
   "kubeadm certs renew all"
  ],
  "a": 1,
  "e": "kubeadm token create --print-join-command 가 새 토큰과 CA 해시가 포함된 join 명령을 출력한다. kubectl create token 은 ServiceAccount 토큰, certs renew 는 인증서 갱신이다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 3,
  "q": "Control Plane 의 kubelet 패키지를 올린 뒤 반드시 해야 할 조치로 가장 적절한 것은?",
  "c": [
   "kubeadm reset",
   "etcd 스냅샷 복원",
   "systemctl daemon-reload 후 systemctl restart kubelet",
   "kube-proxy DaemonSet 삭제"
  ],
  "a": 2,
  "e": "새 kubelet 바이너리를 적용하려면 daemon-reload 와 restart 가 필요하다. 나머지는 클러스터를 손상시키거나 무관한 조치다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 3,
  "q": "kubeadm 업그레이드 전 대상 버전과 업그레이드 가능 여부를 확인하는 명령은?",
  "c": [
   "kubeadm upgrade diff --all",
   "kubectl version --short",
   "kubeadm config images pull",
   "kubeadm upgrade plan"
  ],
  "a": 3,
  "e": "kubeadm upgrade plan 이 현재 버전·대상 버전·구성요소별 변경을 보여 준다. images pull 은 이미지 사전 다운로드 기능이다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 1,
  "q": "etcd 스냅샷을 생성하는 etcdctl 하위 명령은?",
  "c": [
   "snapshot save",
   "snapshot restore",
   "member add",
   "defrag"
  ],
  "a": 0,
  "e": "snapshot save 로 백업한다. restore 는 복원, member add 는 멤버 추가, defrag 는 저장소 조각 모음이다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcdctl 로 스냅샷을 백업할 때 TLS 인증을 위해 필요한 옵션 조합은?",
  "c": [
   "--user · --password",
   "--cacert · --cert · --key",
   "--token · --namespace",
   "--kubeconfig · --context"
  ],
  "a": 1,
  "e": "kubeadm etcd 는 TLS 를 쓰므로 CA·클라이언트 인증서·키 세 옵션과 --endpoints 가 필요하다. kubeconfig 는 kubectl 용이다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 3,
  "q": "스냅샷을 /var/lib/etcd-from-backup 로 복원한 뒤 클러스터에 반영하는 방법으로 옳은 것은?",
  "c": [
   "kube-apiserver Deployment 를 재시작한다",
   "kubectl apply -f 스냅샷을 실행한다",
   "etcd.yaml 의 etcd-data hostPath 를 새 디렉터리로 바꾼다",
   "kubeadm reset 후 init 한다"
  ],
  "a": 2,
  "e": "복원된 데이터 디렉터리를 etcd Static Pod 가 사용하도록 hostPath 를 바꾸면 kubelet 이 etcd 를 재생성한다. apiserver 는 Deployment 가 아니며 스냅샷은 kubectl 로 적용할 수 없다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcd 5대로 구성된 클러스터가 쓰기를 계속할 수 있는 최대 장애 노드 수는?",
  "c": [
   "1",
   "3",
   "4",
   "2"
  ],
  "a": 3,
  "e": "과반은 3대이므로 2대 장애까지 허용한다. 3대 구성은 1대, 7대 구성은 3대까지 허용한다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcd 를 4대로 구성할 때의 설명으로 옳은 것은?",
  "c": [
   "3대 구성과 같은 1대 장애만 허용한다",
   "2대 장애를 허용한다",
   "쿼럼이 2대라 더 안전하다",
   "짝수라 리더 선출이 불가능하다"
  ],
  "a": 0,
  "e": "4대의 과반은 3대라 허용 장애는 1대로 3대 구성과 같다. 비용만 늘어 홀수 구성을 권장한다. 리더 선출 자체는 가능하다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 3,
  "q": "Stacked etcd 와 External etcd 를 비교한 설명으로 옳은 것은?",
  "c": [
   "Stacked 는 etcd 를 별도 클러스터로 둔다",
   "External 은 노드가 더 필요하지만 Control Plane 과 etcd 장애가 격리된다",
   "External 은 kubeadm 의 기본 토폴로지다",
   "Stacked 는 etcd 가 없다"
  ],
  "a": 1,
  "e": "Stacked 는 Control Plane 노드에 etcd 를 함께 두는 kubeadm 기본 방식이고, External 은 전용 노드로 장애를 격리한다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 3,
  "q": "etcd 스냅샷 파일의 무결성과 키 개수·리비전을 표로 확인하는 명령은?",
  "c": [
   "etcdctl get / --prefix",
   "kubectl get etcd",
   "etcdutl snapshot status backup.db -w table",
   "etcdctl endpoint health"
  ],
  "a": 2,
  "e": "snapshot status 가 해시·리비전·키 수·크기를 보여 준다. endpoint health 는 실행 중 etcd 상태 점검이며 kubectl 에 etcd 리소스는 없다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 1,
  "q": "kubeadm 클러스터의 CA 인증서 기본 위치는?",
  "c": [
   "/var/lib/kubelet/ca.crt",
   "/etc/ssl/k8s/ca.pem",
   "~/.kube/ca.crt",
   "/etc/kubernetes/pki/ca.crt"
  ],
  "a": 3,
  "e": "클러스터 PKI 는 /etc/kubernetes/pki 에 있다. etcd 전용 CA 는 /etc/kubernetes/pki/etcd/ca.crt 다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 2,
  "q": "X.509 클라이언트 인증서로 인증할 때 Kubernetes 가 사용자 이름과 그룹으로 쓰는 필드는?",
  "c": [
   "CN 과 O",
   "SAN 과 OU",
   "Issuer 와 Serial",
   "L 과 ST"
  ],
  "a": 0,
  "e": "Subject 의 CN 이 사용자 이름, O 가 그룹이다. SAN 은 서버 인증서의 호스트·IP 목록이다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 2,
  "q": "사용자 jane 의 CertificateSigningRequest 를 승인하는 명령은?",
  "c": [
   "kubectl approve csr jane",
   "kubectl certificate approve jane",
   "kubeadm certs approve jane",
   "kubectl create csr jane --approve"
  ],
  "a": 1,
  "e": "kubectl certificate approve 가 CSR 을 승인한다. 승인 후 status.certificate 를 base64 디코드해 인증서를 얻는다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 3,
  "q": "API 클라이언트 인증서용 CSR 오브젝트의 signerName 으로 옳은 것은?",
  "c": [
   "kubernetes.io/kubelet-serving",
   "kubernetes.io/legacy-unknown",
   "kubernetes.io/kube-apiserver-client",
   "kubernetes.io/etcd-client"
  ],
  "a": 2,
  "e": "사용자 클라이언트 인증서는 kube-apiserver-client 서명자를 쓴다. kubelet-serving 은 kubelet 서버 인증서용이다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 3,
  "q": "kube-apiserver 의 서버 인증서에 포함된 SAN(대체 이름)을 확인하기에 가장 적절한 명령은?",
  "c": [
   "kubectl describe node",
   "crictl images",
   "kubeadm token list",
   "openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout"
  ],
  "a": 3,
  "e": "openssl x509 -text 로 Subject Alternative Name 을 확인한다. 나머지는 인증서 내용을 보여 주지 않는다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 2,
  "q": "kubeadm 이 발급한 일반 구성요소 인증서와 CA 인증서의 기본 유효기간으로 옳은 것은?",
  "c": [
   "구성요소 1년 · CA 10년",
   "구성요소 10년 · CA 1년",
   "모두 1년",
   "모두 무기한"
  ],
  "a": 0,
  "e": "kubeadm 구성요소 인증서는 1년, CA 는 10년이 기본이다. kubeadm 업그레이드 시 구성요소 인증서가 자동 갱신된다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 1,
  "q": "한 네임스페이스 안의 리소스에 대한 권한을 정의하는 RBAC 리소스는?",
  "c": [
   "ClusterRole",
   "Role",
   "ClusterRoleBinding",
   "ServiceAccount"
  ],
  "a": 1,
  "e": "Role 은 네임스페이스 범위다. ClusterRole 은 클러스터 범위, ServiceAccount 는 권한을 받는 주체다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 2,
  "q": "모든 노드(nodes)를 조회하는 권한을 사용자에게 주려면 필요한 조합은?",
  "c": [
   "Role + RoleBinding",
   "Role + ClusterRoleBinding",
   "ClusterRole + ClusterRoleBinding",
   "ServiceAccount + Secret"
  ],
  "a": 2,
  "e": "nodes 는 클러스터 범위 리소스라 ClusterRole 과 ClusterRoleBinding 이 필요하다. Role 은 네임스페이스 리소스만 다룬다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 2,
  "q": "사용자 jane 이 dev 네임스페이스에서 Pod 를 삭제할 수 있는지 확인하는 명령은?",
  "c": [
   "kubectl get role -n dev --user jane",
   "kubectl describe user jane",
   "kubectl config view --user jane",
   "kubectl auth can-i delete pods --as jane -n dev"
  ],
  "a": 3,
  "e": "auth can-i 가 권한 여부를 yes/no 로 답한다. 사용자(User)는 Kubernetes 오브젝트가 아니어서 describe 할 수 없다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 3,
  "q": "RoleBinding 이 ClusterRole 'view' 를 참조할 때 부여되는 권한 범위는?",
  "c": [
   "RoleBinding 이 있는 네임스페이스로 한정된다",
   "클러스터 전체에 적용된다",
   "오류가 발생해 생성되지 않는다",
   "kube-system 에만 적용된다"
  ],
  "a": 0,
  "e": "RoleBinding 이 ClusterRole 을 참조하면 그 RoleBinding 의 네임스페이스 안에서만 권한이 생긴다. 공통 ClusterRole 을 재사용하는 표준 패턴이다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 2,
  "q": "v1.24 이상에서 ServiceAccount 'app-sa' 의 API 토큰을 발급하는 권장 방법은?",
  "c": [
   "SA 를 만들면 자동 생성되는 Secret 을 읽는다",
   "kubectl create token app-sa",
   "kubeadm token create",
   "kubectl get sa app-sa -o jsonpath='{.token}'"
  ],
  "a": 1,
  "e": "v1.24 부터 SA 토큰 Secret 이 자동 생성되지 않으며 kubectl create token 으로 기한 있는 토큰을 발급한다. kubeadm token 은 노드 조인용이다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 3,
  "q": "dev 네임스페이스의 ServiceAccount app-sa 에 Role 'deployer' 를 연결하는 명령으로 옳은 것은?",
  "c": [
   "kubectl create rolebinding app-deployer --role=deployer --user=app-sa -n dev",
   "kubectl create clusterrolebinding app-deployer --role=deployer --sa=app-sa",
   "kubectl create rolebinding app-deployer --role=deployer --serviceaccount=dev:app-sa -n dev",
   "kubectl set serviceaccount role deployer app-sa"
  ],
  "a": 2,
  "e": "ServiceAccount 주체는 --serviceaccount=네임스페이스:이름 으로 지정한다. --user=app-sa 는 같은 이름의 일반 사용자를 가리켜 SA 에 적용되지 않는다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 3,
  "q": "Role 에서 Deployment 권한을 정의할 때 rules.apiGroups 에 넣어야 할 값은?",
  "c": [
   "\"\" (빈 문자열)",
   "\"core\"",
   "\"extensions/v1\"",
   "\"apps\""
  ],
  "a": 3,
  "e": "Deployment 는 apps 그룹이다. 빈 문자열은 Pod·Service 같은 core 그룹을 의미한다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 2,
  "q": "실행 중인 Pod 의 ServiceAccount 를 바꾸려면?",
  "c": [
   "Pod 를 다시 만들어야 한다(Deployment 는 템플릿 수정)",
   "kubectl edit 로 즉시 바꿀 수 있다",
   "kubectl set sa 로 실행 중 변경된다",
   "Secret 만 바꾸면 된다"
  ],
  "a": 0,
  "e": "Pod 의 serviceAccountName 은 생성 후 변경할 수 없다. Deployment 의 Pod 템플릿을 수정하면 새 Pod 로 교체된다."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 1,
  "q": "현재 사용 중인 컨텍스트를 'prod' 로 바꾸는 명령은?",
  "c": [
   "kubectl config set-context prod",
   "kubectl config use-context prod",
   "kubectl context switch prod",
   "kubectl config current-context prod"
  ],
  "a": 1,
  "e": "use-context 가 current-context 를 바꾼다. set-context 는 컨텍스트 설정 편집, current-context 는 조회 명령이다."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 2,
  "q": "현재 컨텍스트의 기본 네임스페이스를 dev 로 바꾸는 명령은?",
  "c": [
   "kubectl config use-context dev",
   "kubectl namespace dev",
   "kubectl config set-context --current --namespace=dev",
   "kubectl config set namespace dev"
  ],
  "a": 2,
  "e": "set-context --current --namespace 가 현재 컨텍스트의 기본 네임스페이스를 바꾼다. use-context dev 는 dev 라는 컨텍스트로 전환하는 명령이다."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 2,
  "q": "모든 노드 이름만 공백으로 구분해 출력하는 명령은?",
  "c": [
   "kubectl get nodes -o name --short",
   "kubectl describe nodes | grep Name",
   "kubectl get nodes -o yaml --names",
   "kubectl get nodes -o jsonpath='{.items[*].metadata.name}'"
  ],
  "a": 3,
  "e": "JSONPath 로 items 배열의 metadata.name 을 출력한다. -o name 은 node/ 접두사가 붙고 --short·--names 옵션은 없다."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 3,
  "q": "Pod 를 생성 시각 순으로 정렬해 출력하는 옵션은?",
  "c": [
   "--sort-by=.metadata.creationTimestamp",
   "--order=created",
   "-o wide --sort",
   "--field-selector=creationTimestamp"
  ],
  "a": 0,
  "e": "--sort-by 에 JSONPath 를 지정한다. field-selector 는 필터링 용도이고 나머지 옵션은 없다."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 1,
  "q": "리소스 YAML 뼈대를 서버에 생성하지 않고 출력하는 옵션 조합은?",
  "c": [
   "--validate=false -o json",
   "--dry-run=client -o yaml",
   "--save-config",
   "--record"
  ],
  "a": 1,
  "e": "--dry-run=client -o yaml 로 매니페스트만 만든다. --record 는 사용 중단된 옵션이다."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 1,
  "q": "Helm 3 에서 차트 저장소를 추가하는 명령은?",
  "c": [
   "helm install repo bitnami",
   "helm fetch --add bitnami",
   "helm repo add bitnami https://charts.bitnami.com/bitnami",
   "helm init bitnami"
  ],
  "a": 2,
  "e": "helm repo add 로 저장소를 등록한다. helm init 은 Helm 2 의 Tiller 설치 명령이다."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 2,
  "q": "Helm 릴리스 'web' 을 리비전 2 로 되돌리는 명령은?",
  "c": [
   "helm upgrade web --revision 2",
   "helm undo web 2",
   "kubectl rollout undo helm/web",
   "helm rollback web 2"
  ],
  "a": 3,
  "e": "helm rollback 릴리스 리비전 으로 되돌린다. kubectl rollout undo 는 Deployment 용이다."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 2,
  "q": "Kustomize 오버레이 디렉터리를 클러스터에 적용하는 명령은?",
  "c": [
   "kubectl apply -k overlays/prod",
   "kubectl apply -f overlays/prod --kustomize=false",
   "helm install overlays/prod",
   "kustomize deploy overlays/prod"
  ],
  "a": 0,
  "e": "kubectl apply -k 가 kustomization.yaml 을 렌더링해 적용한다. kubectl kustomize 디렉터리는 렌더링 결과만 출력한다."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 3,
  "q": "Helm 과 Kustomize 를 비교한 설명으로 옳은 것은?",
  "c": [
   "Kustomize 는 클러스터에 별도 서버가 필요하다",
   "Helm 은 템플릿과 값으로, Kustomize 는 템플릿 없이 base 에 패치를 덧입혀 매니페스트를 만든다",
   "Helm 3 는 Tiller 를 통해 설치한다",
   "Kustomize 는 릴리스 이력과 롤백을 제공한다"
  ],
  "a": 1,
  "e": "Kustomize 는 kubectl 에 내장되어 서버가 필요 없고 릴리스 이력은 없다. Helm 3 는 Tiller 가 없다."
 },
 {
  "s": "s1",
  "t": "확장·Admission",
  "d": 1,
  "q": "새로운 리소스 종류를 Kubernetes API 에 등록하는 오브젝트는?",
  "c": [
   "ConfigMap",
   "APIService 만",
   "CustomResourceDefinition",
   "PodSecurityPolicy"
  ],
  "a": 2,
  "e": "CRD 로 사용자 정의 리소스를 등록한다. ConfigMap 은 설정 데이터, PodSecurityPolicy 는 v1.25 에서 제거되었다."
 },
 {
  "s": "s1",
  "t": "확장·Admission",
  "d": 2,
  "q": "CRD 와 그것을 감시·조정하는 커스텀 컨트롤러를 함께 배포해 운영 작업을 자동화하는 패턴은?",
  "c": [
   "Sidecar",
   "DaemonSet",
   "Init Container",
   "Operator"
  ],
  "a": 3,
  "e": "Operator 패턴이다. Sidecar·Init Container 는 Pod 안 컨테이너 패턴, DaemonSet 은 노드별 Pod 배포 방식이다."
 },
 {
  "s": "s1",
  "t": "확장·Admission",
  "d": 2,
  "q": "API 요청 처리 순서로 옳은 것은?",
  "c": [
   "인증 → 인가 → Admission Control → etcd 저장",
   "인가 → 인증 → etcd 저장 → Admission Control",
   "Admission Control → 인증 → 인가 → etcd 저장",
   "인증 → etcd 저장 → 인가"
  ],
  "a": 0,
  "e": "요청은 인증(누구인가) → 인가(권한) → Admission(변형·검증) → 저장 순으로 처리된다."
 },
 {
  "s": "s1",
  "t": "확장·Admission",
  "d": 3,
  "q": "kube-apiserver 에서 특정 Admission 플러그인을 활성화하는 위치로 옳은 것은?",
  "c": [
   "kubelet 설정의 admissionPlugins",
   "kube-apiserver.yaml 의 --enable-admission-plugins 플래그",
   "CoreDNS ConfigMap",
   "kube-proxy ConfigMap"
  ],
  "a": 1,
  "e": "Admission 플러그인은 apiserver 플래그로 켠다. kubeadm 에서는 /etc/kubernetes/manifests/kube-apiserver.yaml 을 수정한다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 1,
  "q": "Deployment 와 ReplicaSet 의 관계로 옳은 것은?",
  "c": [
   "Deployment 가 ReplicaSet 을 생성·관리하고 ReplicaSet 이 Pod 수를 유지한다",
   "ReplicaSet 이 Deployment 를 생성한다",
   "Deployment 는 Pod 를 직접 관리하고 ReplicaSet 은 쓰지 않는다",
   "ReplicaSet 만 롤백 기능을 제공한다"
  ],
  "a": 0,
  "e": "Deployment → ReplicaSet → Pod 계층이다. 롤링 업데이트·롤백은 Deployment 가 여러 ReplicaSet 을 관리해 구현한다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 1,
  "q": "RollingUpdate 전략에서 maxSurge 와 maxUnavailable 의 기본값은?",
  "c": [
   "둘 다 0",
   "둘 다 25%",
   "maxSurge 1, maxUnavailable 0",
   "둘 다 50%"
  ],
  "a": 1,
  "e": "기본값은 25% / 25% 이다. 둘을 동시에 0 으로 둘 수는 없다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "web Deployment 를 직전 버전으로 되돌리는 명령은?",
  "c": [
   "kubectl rollout restart deployment/web",
   "kubectl rollback deployment/web",
   "kubectl rollout undo deployment/web",
   "kubectl rollout history deployment/web --undo"
  ],
  "a": 2,
  "e": "rollout undo 가 롤백, --to-revision=N 으로 특정 리비전 지정. restart 는 같은 템플릿으로 Pod 를 재생성할 뿐이고 rollback 하위 명령은 없다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "kubectl set image deployment/web app=nginx:1.27 에서 app 이 의미하는 것은?",
  "c": [
   "Deployment 라벨",
   "네임스페이스 이름",
   "이전 이미지 이름",
   "이미지를 바꿀 컨테이너 이름"
  ],
  "a": 3,
  "e": "형식은 컨테이너이름=새이미지 이다. 컨테이너 이름이 다르면 오류가 난다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "기존 Pod 를 모두 삭제한 뒤 새 버전 Pod 를 생성해 다운타임이 생기는 배포 전략은?",
  "c": [
   "Recreate",
   "RollingUpdate",
   "Canary",
   "BlueGreen"
  ],
  "a": 0,
  "e": "Deployment 의 strategy.type 은 RollingUpdate(기본)와 Recreate 두 가지다. Canary·BlueGreen 은 라벨·서비스로 구현하는 운영 기법이다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 3,
  "q": "Deployment 의 Pod 템플릿을 여러 번 수정하되 롤아웃은 한 번만 일어나게 하는 방법은?",
  "c": [
   "scale --replicas=0 후 수정",
   "rollout pause 후 수정하고 rollout resume",
   "strategy 를 Recreate 로 변경",
   "각 수정마다 --record 사용"
  ],
  "a": 1,
  "e": "pause 상태에서는 템플릿 변경이 누적만 되고, resume 할 때 한 번에 새 ReplicaSet 으로 반영된다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 3,
  "q": "selector 가 app=web, replicas 3 인 단독 ReplicaSet 이 Pod 3개를 실행 중이다. app=web 라벨만 가진 Pod 를 kubectl run 으로 하나 더 만들면?",
  "c": [
   "Pod 4개가 유지된다",
   "ReplicaSet 이 replicas 를 4 로 바꾼다",
   "ReplicaSet 이 새 Pod 를 소유하고 초과분 하나를 삭제한다",
   "새 Pod 생성이 거부된다"
  ],
  "a": 2,
  "e": "ReplicaSet 은 소유자가 없는 Pod 중 selector 에 맞는 것을 가져와(adopt) replicas 에 맞춘다. Deployment 가 만든 ReplicaSet 은 selector 에 pod-template-hash 가 포함돼 이런 Pod 를 가져오지 않는다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 1,
  "q": "YAML 초안을 실제로 만들지 않고 출력만 하는 kubectl 옵션 조합은?",
  "c": [
   "--force -o json",
   "--validate=false",
   "--record -o wide",
   "--dry-run=client -o yaml"
  ],
  "a": 3,
  "e": "시험에서 매니페스트를 빠르게 만드는 표준 방법이다. 출력을 파일로 저장해 수정한다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 1,
  "q": "노드에 taint env=prod:NoSchedule 을 추가하는 명령은?",
  "c": [
   "kubectl taint nodes node01 env=prod:NoSchedule",
   "kubectl label nodes node01 env=prod:NoSchedule",
   "kubectl annotate nodes node01 taint=env",
   "kubectl cordon node01 env=prod"
  ],
  "a": 0,
  "e": "taint 는 kubectl taint 로 추가하고, 같은 표현 끝에 - 를 붙이면 제거된다. label·annotate·cordon 은 다른 기능이다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "이미 실행 중인 Pod 까지 축출하는 taint 효과는?",
  "c": [
   "NoSchedule",
   "NoExecute",
   "PreferNoSchedule",
   "NoAdmit"
  ],
  "a": 1,
  "e": "NoExecute 는 신규 배치 금지와 함께 견디지 못하는 기존 Pod 를 축출한다. tolerationSeconds 로 유예 시간을 줄 수 있다. NoAdmit 은 taint 효과가 아니다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "Pod 에 toleration 을 추가했을 때의 효과로 옳은 것은?",
  "c": [
   "해당 노드에만 배치된다",
   "다른 노드의 taint 를 제거한다",
   "해당 taint 가 있는 노드에도 배치될 수 있게 허용한다",
   "Pod 우선순위가 올라간다"
  ],
  "a": 2,
  "e": "toleration 은 허용일 뿐 유인이 아니다. 특정 노드로 보내려면 nodeAffinity·nodeSelector 를 함께 쓴다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "nodeAffinity 연산자에 해당하지 않는 것은?",
  "c": [
   "In",
   "NotIn",
   "Exists",
   "Equal"
  ],
  "a": 3,
  "e": "nodeAffinity 연산자는 In · NotIn · Exists · DoesNotExist · Gt · Lt 이다. Equal 은 toleration 의 operator 값이다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "requiredDuringSchedulingIgnoredDuringExecution 에서 IgnoredDuringExecution 의 의미는?",
  "c": [
   "실행 중 노드 라벨이 바뀌어도 이미 배치된 Pod 는 축출되지 않는다",
   "실행 중에는 affinity 를 무시하고 아무 노드에나 배치한다",
   "스케줄링 시점에도 조건을 무시한다",
   "실행 중 Pod 를 주기적으로 재배치한다"
  ],
  "a": 0,
  "e": "조건은 스케줄링 시점에만 강제되고, 실행 중 변화는 무시된다는 뜻이다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 1,
  "q": "Pod 의 spec.nodeName 을 직접 지정했을 때의 동작은?",
  "c": [
   "스케줄러가 nodeName 을 참고해 점수를 매긴다",
   "스케줄러를 거치지 않고 지정 노드의 kubelet 이 실행한다",
   "nodeName 은 라벨 선택자로 해석된다",
   "API 서버가 생성을 거부한다"
  ],
  "a": 1,
  "e": "nodeName 은 스케줄러 우회다. 스케줄러가 없거나 수동 배치가 필요할 때 쓴다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "Static Pod 의 매니페스트 경로를 확인하는 방법으로 가장 정확한 것은?",
  "c": [
   "kubectl get staticpods 로 확인한다",
   "~/.kube/config 의 server 항목을 확인한다",
   "kubelet 설정 파일(--config)의 staticPodPath 를 확인한다",
   "kube-apiserver 매니페스트의 --pod-path 를 확인한다"
  ],
  "a": 2,
  "e": "ps -ef | grep kubelet 으로 --config 경로(보통 /var/lib/kubelet/config.yaml)를 찾고 staticPodPath 를 본다. kubeadm 기본값은 /etc/kubernetes/manifests 다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 3,
  "q": "Static Pod 를 kubectl delete pod 로 삭제했더니 곧바로 다시 나타났다. 영구 삭제하려면?",
  "c": [
   "--force --grace-period=0 으로 다시 삭제한다",
   "Deployment 를 scale 0 으로 만든다",
   "kube-scheduler 를 재시작한다",
   "해당 노드의 staticPodPath 에서 매니페스트 파일을 삭제한다"
  ],
  "a": 3,
  "e": "API 서버에 보이는 것은 미러 Pod 일 뿐이고 실제 관리는 kubelet 이 파일로 한다. 파일을 지우면 kubelet 이 Pod 를 멈춘다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "kubectl create 로 직접 만들 수 없는 워크로드는?",
  "c": [
   "DaemonSet",
   "Deployment",
   "Job",
   "CronJob"
  ],
  "a": 0,
  "e": "kubectl create daemonset 하위 명령은 없다. Deployment 를 dry-run 으로 만든 뒤 kind 를 바꾸고 replicas·strategy 를 지운다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 3,
  "q": "자원이 부족한 클러스터에 높은 PriorityClass 의 Pod 가 생성되었을 때 스케줄러의 동작은?",
  "c": [
   "높은 우선순위 Pod 를 Pending 으로 두고 아무것도 하지 않는다",
   "낮은 우선순위 Pod 를 축출(선점)해 자리를 만든다",
   "노드를 자동으로 추가한다",
   "모든 Pod 의 requests 를 줄인다"
  ],
  "a": 1,
  "e": "preemptionPolicy 기본값(PreemptLowerPriority)이면 선점한다. Never 로 두면 선점하지 않는다. 노드 추가는 Cluster Autoscaler 의 역할이다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "Pod 를 기본 스케줄러가 아닌 custom-scheduler 로 배치하려면 지정할 필드는?",
  "c": [
   "spec.nodeName",
   "metadata.annotations.scheduler",
   "spec.schedulerName",
   "spec.priorityClassName"
  ],
  "a": 2,
  "e": "schedulerName 에 스케줄러 이름을 넣는다. 지정하지 않으면 default-scheduler 다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 3,
  "q": "API 요청이 처리되는 순서로 옳은 것은?",
  "c": [
   "인가 → 인증 → Validating Admission → Mutating Admission → etcd 저장",
   "Mutating Admission → 인증 → 인가 → etcd 저장",
   "인증 → Validating Admission → 인가 → etcd 저장",
   "인증 → 인가 → Mutating Admission → Validating Admission → etcd 저장"
  ],
  "a": 3,
  "e": "변경(Mutating)이 먼저 일어나야 최종 객체를 검증(Validating)할 수 있다. 인증·인가는 항상 그 앞이다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 1,
  "q": "Which command lists only the nodes labeled disktype=ssd?",
  "c": [
   "kubectl get nodes -l disktype=ssd",
   "kubectl get nodes --field-selector disktype=ssd",
   "kubectl describe nodes disktype=ssd",
   "kubectl get nodes --label disktype"
  ],
  "a": 0,
  "e": "-l (--selector) filters by label. --field-selector works on fields such as metadata.name, not labels."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 1,
  "q": "컨테이너가 메모리 limit 을 초과했을 때 일어나는 일은?",
  "c": [
   "CPU 처럼 스로틀링된다",
   "컨테이너가 OOMKilled 로 종료된다",
   "자동으로 limit 이 늘어난다",
   "다른 노드로 이동한다"
  ],
  "a": 1,
  "e": "메모리는 압축할 수 없는 자원이라 초과 시 종료된다. 스로틀링은 CPU limit 초과 시의 동작이다."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "모든 컨테이너의 CPU·메모리 requests 와 limits 가 같은 Pod 의 QoS 클래스는?",
  "c": [
   "Burstable",
   "BestEffort",
   "Guaranteed",
   "Critical"
  ],
  "a": 2,
  "e": "requests = limits(모든 컨테이너, CPU·메모리)이면 Guaranteed 다. Critical 은 QoS 클래스가 아니다."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "노드 메모리가 부족할 때 kubelet 이 가장 먼저 축출하는 Pod 의 QoS 클래스는?",
  "c": [
   "Guaranteed",
   "Burstable",
   "Static",
   "BestEffort"
  ],
  "a": 3,
  "e": "requests·limits 가 없는 BestEffort 가 먼저, 다음이 requests 를 초과 사용하는 Burstable 이다."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "네임스페이스 전체의 CPU·메모리 총량과 Pod 개수를 제한하는 객체는?",
  "c": [
   "ResourceQuota",
   "LimitRange",
   "PriorityClass",
   "PodDisruptionBudget"
  ],
  "a": 0,
  "e": "ResourceQuota 는 네임스페이스 합계를, LimitRange 는 컨테이너별 기본값·범위를 정한다. PDB 는 자발적 중단 시 최소 가용 수를 보장한다."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 3,
  "q": "CPU·메모리 ResourceQuota 가 설정된 네임스페이스에 requests·limits 없는 Pod 를 만들었더니 거부되었다. 가장 적절한 해결은?",
  "c": [
   "ResourceQuota 의 pods 개수를 늘린다",
   "LimitRange 로 기본 requests·limits 를 지정한다",
   "PriorityClass 를 높인다",
   "nodeSelector 를 추가한다"
  ],
  "a": 1,
  "e": "쿼터가 CPU·메모리를 추적하면 모든 Pod 가 값을 가져야 한다. LimitRange 기본값을 두면 미지정 Pod 에 자동으로 채워진다."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 3,
  "q": "limits 만 지정하고 requests 를 생략한 컨테이너의 requests 값은?",
  "c": [
   "0 으로 설정된다",
   "노드 전체 용량으로 설정된다",
   "limits 와 같은 값으로 설정된다",
   "LimitRange 가 없으면 생성이 거부된다"
  ],
  "a": 2,
  "e": "requests 가 없고 limits 만 있으면 requests 는 limits 값으로 채워진다(LimitRange 기본값이 없을 때)."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 1,
  "q": "Pod spec 의 command 가 덮어쓰는 Dockerfile 지시어는?",
  "c": [
   "CMD",
   "RUN",
   "WORKDIR",
   "ENTRYPOINT"
  ],
  "a": 3,
  "e": "command 는 ENTRYPOINT, args 는 CMD 를 덮어쓴다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 2,
  "q": "kubectl run app --image=busybox -- sleep 1000 으로 만든 Pod 에서 sleep 1000 이 들어가는 필드는?",
  "c": [
   "args",
   "command",
   "env",
   "lifecycle"
  ],
  "a": 0,
  "e": "-- 뒤의 값은 기본적으로 args 로 들어간다. command 로 넣으려면 --command 옵션을 붙인다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 2,
  "q": "ConfigMap 의 모든 키를 환경변수로 한 번에 주입하는 필드는?",
  "c": [
   "env.valueFrom.configMapKeyRef",
   "envFrom.configMapRef",
   "volumes.configMap",
   "spec.configMapName"
  ],
  "a": 1,
  "e": "envFrom 은 전체 키, env.valueFrom.configMapKeyRef 는 키 하나, volumes.configMap 은 파일 마운트다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 2,
  "q": "Secret 의 data 필드 값에 대한 설명으로 옳은 것은?",
  "c": [
   "AES 로 암호화된 값이다",
   "평문을 그대로 저장한다",
   "base64 로 인코딩된 값이며 그 자체로 암호화는 아니다",
   "SHA-256 해시 값이다"
  ],
  "a": 2,
  "e": "base64 는 인코딩일 뿐이다. etcd 저장 암호화는 EncryptionConfiguration 으로 별도 설정한다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 3,
  "q": "EncryptionConfiguration 의 providers 순서를 identity, aescbc 로 설정했다. 새로 저장되는 Secret 의 상태는?",
  "c": [
   "aescbc 로 암호화된다",
   "두 방식으로 이중 암호화된다",
   "API 서버가 시작되지 않는다",
   "암호화되지 않은 상태로 저장된다"
  ],
  "a": 3,
  "e": "목록의 첫 번째 provider 로 쓰기(암호화)가 이루어진다. identity 가 첫 번째면 평문 저장이고, 뒤의 provider 는 읽기(복호화)에만 쓰인다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 3,
  "q": "ConfigMap 을 볼륨으로 마운트한 Pod 와 환경변수로 주입한 Pod 가 있다. ConfigMap 값을 바꾸면?",
  "c": [
   "볼륨 마운트 쪽은 잠시 뒤 파일이 갱신되고, 환경변수 쪽은 Pod 를 재시작해야 반영된다",
   "둘 다 즉시 반영된다",
   "둘 다 Pod 재시작 전까지 반영되지 않는다",
   "환경변수만 즉시 반영된다"
  ],
  "a": 0,
  "e": "kubelet 이 주기적으로 볼륨 내용을 동기화한다(subPath 마운트는 예외). 환경변수는 컨테이너 시작 시점에 고정된다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 1,
  "q": "Which command creates a Secret named db-sec with password=s3cr3t?",
  "c": [
   "kubectl create secret db-sec password=s3cr3t",
   "kubectl create secret generic db-sec --from-literal=password=s3cr3t",
   "kubectl create configmap db-sec --secret password=s3cr3t",
   "kubectl create secret tls db-sec --from-literal=password=s3cr3t"
  ],
  "a": 1,
  "e": "Opaque secrets use the generic subcommand. tls requires --cert and --key."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 1,
  "q": "Pod 개수를 CPU 사용률에 따라 자동으로 늘리고 줄이는 객체는?",
  "c": [
   "VerticalPodAutoscaler",
   "Cluster Autoscaler",
   "HorizontalPodAutoscaler",
   "PodDisruptionBudget"
  ],
  "a": 2,
  "e": "HPA 는 replicas 를, VPA 는 requests·limits 를, Cluster Autoscaler 는 노드 수를 조정한다."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 2,
  "q": "HPA 가 CPU 사용률(Utilization) 기준으로 동작하기 위한 조건이 아닌 것은?",
  "c": [
   "metrics-server 가 설치되어 있어야 한다",
   "대상 컨테이너에 CPU requests 가 있어야 한다",
   "scaleTargetRef 가 스케일 가능한 워크로드를 가리켜야 한다",
   "Pod 에 PriorityClass 가 지정되어 있어야 한다"
  ],
  "a": 3,
  "e": "사용률은 requests 대비 비율이라 requests 가 필요하고, 지표는 metrics-server 가 제공한다. PriorityClass 와는 무관하다."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 2,
  "q": "initContainers 의 동작으로 옳은 것은?",
  "c": [
   "정의 순서대로 하나씩 실행되고 모두 성공해야 앱 컨테이너가 시작된다",
   "앱 컨테이너와 동시에 시작된다",
   "실패해도 앱 컨테이너는 시작된다",
   "앱 컨테이너가 종료된 뒤 실행된다"
  ],
  "a": 0,
  "e": "init 컨테이너는 순차 실행·완료가 원칙이다. 실패하면 restartPolicy 에 따라 재시도한다."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 3,
  "q": "같은 Pod 의 두 컨테이너가 서로 통신할 때 사용할 수 있는 주소는?",
  "c": [
   "Service 의 ClusterIP 만 가능",
   "localhost",
   "각 컨테이너의 별도 Pod IP",
   "노드 IP 만 가능"
  ],
  "a": 1,
  "e": "한 Pod 의 컨테이너는 네트워크 네임스페이스를 공유하므로 localhost:포트 로 통신한다."
 },
 {
  "s": "s2",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "재시작된 컨테이너의 직전 실행 로그를 보는 옵션은?",
  "c": [
   "kubectl logs pod-a --since=0",
   "kubectl logs pod-a --all",
   "kubectl logs pod-a --previous",
   "kubectl describe pod-a --logs"
  ],
  "a": 2,
  "e": "-p / --previous 는 직전에 종료된 컨테이너 인스턴스의 로그를 보여준다. CrashLoopBackOff 원인 확인에 필수다."
 },
 {
  "s": "s2",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "kubectl top pod 명령이 동작하려면 필요한 구성요소는?",
  "c": [
   "kube-proxy",
   "CoreDNS",
   "etcd 백업",
   "metrics-server"
  ],
  "a": 3,
  "e": "kubectl top 은 Metrics API 를 쓰며, 이를 제공하는 것이 metrics-server 다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 1,
  "q": "Service 의 type 을 지정하지 않았을 때 기본으로 생성되는 유형은?",
  "c": [
   "ClusterIP",
   "NodePort",
   "LoadBalancer",
   "ExternalName"
  ],
  "a": 0,
  "e": "type 생략 시 ClusterIP 다. NodePort·LoadBalancer 는 외부 노출용이고 ExternalName 은 DNS CNAME 만 반환한다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 1,
  "q": "NodePort Service 의 기본 nodePort 할당 범위는?",
  "c": [
   "1-1023",
   "30000-32767",
   "8000-8999",
   "40000-49151"
  ],
  "a": 1,
  "e": "kube-apiserver --service-node-port-range 기본값이 30000-32767 이다. 1-1023 은 well-known 포트 범위다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 1,
  "q": "외부 DNS 이름에 대한 CNAME 레코드만 반환하고 프록시·selector 를 쓰지 않는 Service 유형은?",
  "c": [
   "ClusterIP",
   "NodePort",
   "ExternalName",
   "Headless"
  ],
  "a": 2,
  "e": "ExternalName 은 spec.externalName 으로 CNAME 을 돌려준다. Headless 는 clusterIP: None 으로 Pod IP 목록을 반환한다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "Service spec 에서 트래픽을 전달할 Pod 컨테이너의 포트를 지정하는 필드는?",
  "c": [
   "port",
   "nodePort",
   "containerPort",
   "targetPort"
  ],
  "a": 3,
  "e": "targetPort 가 Pod 쪽 포트다. port 는 Service 가 받는 포트, nodePort 는 노드 포트, containerPort 는 Pod spec 의 필드다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "Service 를 만들었지만 kubectl get endpoints 결과가 <none> 일 때 가장 먼저 확인할 것은?",
  "c": [
   "Service selector 와 Pod label 의 일치 여부",
   "kube-apiserver 인증서 만료일",
   "etcd 스냅샷 존재 여부",
   "노드의 swap 설정"
  ],
  "a": 0,
  "e": "Endpoint 는 selector 와 label 이 일치하고 Ready 인 Pod 로 채워진다. 비었다면 selector·label 오타나 Pod 미Ready 가 원인이다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "Deployment web(Pod label app=web, 컨테이너 포트 8080)을 80 포트 ClusterIP Service 로 노출하는 가장 안전한 명령은?",
  "c": [
   "kubectl create service clusterip web --tcp=8080:80",
   "kubectl expose deployment web --port=80 --target-port=8080",
   "kubectl run web --port=80 --expose",
   "kubectl create deployment web --port=80"
  ],
  "a": 1,
  "e": "expose 는 Deployment 의 selector 를 그대로 쓴다. create service clusterip 의 --tcp 는 port:targetPort 순서라 8080:80 은 반대이고, run --expose 는 새 Pod 를 만든다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "clusterIP: None 으로 만든 Service 의 특징으로 옳은 것은?",
  "c": [
   "노드 포트가 자동으로 열린다",
   "외부 CNAME 만 반환한다",
   "DNS 조회 시 Pod IP 목록이 직접 반환된다",
   "kube-proxy 가 라운드로빈으로 분산한다"
  ],
  "a": 2,
  "e": "Headless Service 는 가상 IP 가 없어 kube-proxy 를 거치지 않고 DNS 가 Pod IP(A 레코드)를 직접 돌려준다. StatefulSet 과 함께 쓴다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 3,
  "q": "kubectl create service nodeport web --tcp=80:8080 으로 만든 Service 에 트래픽이 가지 않는다. Deployment 의 Pod label 은 app=frontend 다. 원인은?",
  "c": [
   "--tcp 형식이 잘못돼 포트가 열리지 않았다",
   "NodePort 는 Deployment 에 연결할 수 없다",
   "kube-proxy 가 ipvs 모드여야만 동작한다",
   "Service selector 가 app=web 으로 설정돼 Pod 와 일치하지 않는다"
  ],
  "a": 3,
  "e": "create service 는 selector 를 app=<서비스이름> 으로 만든다. selector 를 app=frontend 로 고치거나 expose 를 써야 한다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 3,
  "q": "현재 지원되는 kube-proxy 모드가 아닌 것은?",
  "c": [
   "userspace",
   "iptables",
   "ipvs",
   "nftables"
  ],
  "a": 0,
  "e": "userspace 모드는 v1.26 에서 제거됐다. iptables 가 리눅스 기본이며 ipvs·nftables 를 선택할 수 있다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 3,
  "q": "kube-proxy 가 사용 중인 모드를 kubeadm 클러스터에서 확인하는 방법으로 가장 적절한 것은?",
  "c": [
   "kubectl get svc kube-proxy -o yaml",
   "kubectl -n kube-system get configmap kube-proxy -o yaml 에서 mode 확인",
   "cat /etc/kubernetes/manifests/kube-proxy.yaml",
   "kubectl describe node 의 Capacity 확인"
  ],
  "a": 1,
  "e": "kubeadm 은 kube-proxy 를 DaemonSet 으로 배포하고 설정을 kube-proxy ConfigMap 에 둔다. 정적 Pod 매니페스트가 아니다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 1,
  "q": "dev 네임스페이스의 Service db 의 전체 DNS 이름(FQDN)은?",
  "c": [
   "dev.db.svc.cluster.local",
   "db.dev.pod.cluster.local",
   "db.dev.svc.cluster.local",
   "db.svc.dev.cluster.local"
  ],
  "a": 2,
  "e": "<svc>.<ns>.svc.cluster.local 형식이다. pod 는 Pod 레코드에 쓰인다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 1,
  "q": "쿠버네티스 클러스터의 기본 DNS 서버로 쓰이는 것은?",
  "c": [
   "BIND",
   "dnsmasq",
   "etcd",
   "CoreDNS"
  ],
  "a": 3,
  "e": "현재 기본 클러스터 DNS 는 CoreDNS 이며 Service 이름은 호환성 때문에 kube-dns 다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 2,
  "q": "CoreDNS 의 설정(Corefile)이 저장된 곳은?",
  "c": [
   "kube-system 네임스페이스의 ConfigMap coredns",
   "/etc/coredns/Corefile (모든 노드)",
   "kube-apiserver 정적 Pod 매니페스트",
   "default 네임스페이스의 Secret coredns"
  ],
  "a": 0,
  "e": "CoreDNS Deployment 는 ConfigMap coredns 를 볼륨으로 마운트해 Corefile 을 읽는다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 2,
  "q": "Pod IP 가 10.244.2.7 이고 네임스페이스가 web 일 때 Pod DNS 레코드는?",
  "c": [
   "10.244.2.7.web.pod.cluster.local",
   "10-244-2-7.web.pod.cluster.local",
   "web.10-244-2-7.pod.cluster.local",
   "10-244-2-7.web.svc.cluster.local"
  ],
  "a": 1,
  "e": "Pod 레코드는 IP 의 점을 대시로 바꾸고 <ns>.pod.cluster.local 을 붙인다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 2,
  "q": "Pod 의 /etc/resolv.conf 에 기본으로 들어가는 옵션은?",
  "c": [
   "ndots:1",
   "timeout:30",
   "ndots:5",
   "rotate"
  ],
  "a": 2,
  "e": "kubelet 이 ndots:5 와 search 도메인 3개를 넣는다. 점이 5개 미만인 이름은 search 도메인을 붙여 먼저 조회한다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 3,
  "q": "prod 네임스페이스 Pod 에서 dev 네임스페이스의 Service api 를 이름으로 호출하려 한다. 동작하는 최소 이름은?",
  "c": [
   "api",
   "dev",
   "api.prod",
   "api.dev"
  ],
  "a": 3,
  "e": "search 도메인이 svc.cluster.local 을 포함하므로 api.dev 면 api.dev.svc.cluster.local 로 해석된다. api 만 쓰면 prod 네임스페이스에서 찾는다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 3,
  "q": "DNS 조회 테스트용 임시 Pod 를 띄우는 명령으로 가장 적절한 것은?",
  "c": [
   "kubectl run t --rm -it --image=busybox:1.28 -- nslookup kubernetes.default",
   "kubectl exec coredns -- nslookup",
   "kubectl create deployment dns --image=busybox -- nslookup",
   "kubectl debug node/dns"
  ],
  "a": 0,
  "e": "--rm -it 로 실행 후 자동 삭제되는 Pod 를 띄운다. busybox 1.28 은 nslookup 출력이 안정적이라 시험에서 흔히 쓴다."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 3,
  "q": "Pod 에서 Service 이름 조회만 실패하고 IP 로는 통신된다. 가장 가능성이 낮은 원인은?",
  "c": [
   "CoreDNS Pod 가 CrashLoopBackOff 다",
   "Service 의 targetPort 가 잘못됐다",
   "Egress NetworkPolicy 가 53 포트를 막는다",
   "kube-dns Service 의 Endpoint 가 비어 있다"
  ],
  "a": 1,
  "e": "IP 로 통신이 된다면 포트·전달은 정상이다. 이름 조회 실패는 CoreDNS 상태, DNS 경로 차단, kube-dns Endpoint 를 본다."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 1,
  "q": "CNI 플러그인 설정 파일이 위치하는 기본 디렉터리는?",
  "c": [
   "/opt/cni/bin",
   "/etc/kubernetes/manifests",
   "/etc/cni/net.d",
   "/var/lib/kubelet/pki"
  ],
  "a": 2,
  "e": "/etc/cni/net.d 는 설정, /opt/cni/bin 은 플러그인 바이너리, manifests 는 정적 Pod, pki 는 인증서 위치다."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 1,
  "q": "다음 중 NetworkPolicy 를 지원하지 않는 CNI 플러그인은?",
  "c": [
   "Calico",
   "Cilium",
   "Antrea",
   "Flannel"
  ],
  "a": 3,
  "e": "Flannel 은 단순 오버레이로 NetworkPolicy 를 강제하지 않는다. Calico·Cilium·Antrea 는 지원한다."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 2,
  "q": "쿠버네티스 네트워크 모델의 요구사항으로 옳은 것은?",
  "c": [
   "모든 Pod 는 NAT 없이 다른 노드의 Pod 와 통신할 수 있어야 한다",
   "Pod 간 통신은 반드시 Service 를 거쳐야 한다",
   "같은 노드의 Pod 끼리만 직접 통신한다",
   "Pod IP 는 노드 IP 로 SNAT 되어야 한다"
  ],
  "a": 0,
  "e": "모든 Pod 가 NAT 없이 통신하고, Pod 가 보는 자기 IP 와 다른 Pod 가 보는 IP 가 같아야 한다."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 2,
  "q": "클러스터의 Service IP 대역을 kubeadm 클러스터에서 확인하는 방법은?",
  "c": [
   "kube-scheduler 의 --cluster-cidr 확인",
   "kube-apiserver 매니페스트의 --service-cluster-ip-range 확인",
   "kubelet 의 --pod-infra-container-image 확인",
   "CoreDNS ConfigMap 의 forward 확인"
  ],
  "a": 1,
  "e": "Service CIDR 은 kube-apiserver 의 --service-cluster-ip-range 다. Pod CIDR 은 kube-controller-manager 의 --cluster-cidr 다."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 2,
  "q": "CNI 플러그인을 아직 설치하지 않은 새 kubeadm 클러스터의 노드 상태는?",
  "c": [
   "Ready",
   "SchedulingDisabled",
   "NotReady",
   "Unknown 상태로 즉시 삭제"
  ],
  "a": 2,
  "e": "네트워크 플러그인이 준비되지 않으면 kubelet 이 NetworkPluginNotReady 로 노드를 NotReady 로 보고한다."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 3,
  "q": "같은 Pod 안의 두 컨테이너가 서로 통신하는 방법으로 옳은 것은?",
  "c": [
   "각 컨테이너의 별도 Pod IP 로 통신한다",
   "반드시 Service 를 만들어야 한다",
   "NetworkPolicy 허용이 있어야 한다",
   "localhost 와 각자의 포트로 통신한다"
  ],
  "a": 3,
  "e": "Pod 의 컨테이너는 네트워크 네임스페이스를 공유하므로 localhost 로 통신한다."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 3,
  "q": "Pod CIDR 과 Service CIDR 이 겹치게 설정되면 생길 수 있는 문제는?",
  "c": [
   "라우팅 충돌로 Pod·Service 트래픽이 잘못 전달된다",
   "etcd 백업이 실패한다",
   "kubectl 인증이 실패한다",
   "이미지 풀이 느려진다"
  ],
  "a": 0,
  "e": "두 대역이 겹치면 같은 IP 가 Pod 와 Service VIP 로 동시에 해석돼 라우팅이 깨진다."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 1,
  "q": "NetworkPolicy 가 적용될 대상 Pod 를 고르는 필드는?",
  "c": [
   "spec.ingress.from",
   "spec.podSelector",
   "spec.policyTypes",
   "metadata.namespace 만"
  ],
  "a": 1,
  "e": "spec.podSelector 가 정책 대상이다. ingress.from 은 허용할 출처, policyTypes 는 방향이다."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 2,
  "q": "네임스페이스에 정책이 하나도 없을 때 Pod 트래픽은?",
  "c": [
   "모든 트래픽이 차단된다",
   "같은 네임스페이스만 허용된다",
   "모든 트래픽이 허용된다",
   "Ingress 만 차단된다"
  ],
  "a": 2,
  "e": "기본은 전부 허용이다. Pod 가 어떤 정책에 선택된 순간 그 방향은 허용 목록 방식으로 바뀐다."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 2,
  "q": "네임스페이스의 모든 Pod 로 들어오는 트래픽을 막는 기본 거부 정책으로 옳은 것은?",
  "c": [
   "podSelector: {} · ingress: [{}]",
   "podSelector 생략 · policyTypes: [Egress]",
   "ipBlock: 0.0.0.0/0 · except 생략",
   "podSelector: {} · policyTypes: [Ingress] · ingress 규칙 없음"
  ],
  "a": 3,
  "e": "ingress: [{}] 는 모든 출처를 허용하는 규칙이다. 기본 거부는 대상 전체 선택 + 허용 규칙 없음이다."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 3,
  "q": "다음 from 정의의 의미로 옳은 것은?\nfrom:\n- namespaceSelector: {matchLabels: {team: a}}\n  podSelector: {matchLabels: {role: client}}",
  "c": [
   "team=a 네임스페이스에 있는 role=client Pod 만 허용",
   "team=a 네임스페이스 전체 또는 role=client Pod 허용",
   "모든 네임스페이스의 role=client Pod 허용",
   "team=a 네임스페이스 전체만 허용"
  ],
  "a": 0,
  "e": "두 선택자가 같은 '-' 항목 안에 있으면 AND 다. 별도 '-' 로 나열해야 OR 이 된다."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 3,
  "q": "Egress 기본 거부 정책을 적용한 뒤 Pod 가 Service 이름으로 통신하지 못한다. 추가해야 할 규칙은?",
  "c": [
   "Ingress 80 포트 허용",
   "UDP·TCP 53 포트로 나가는 Egress 허용",
   "kube-proxy 재시작",
   "Service type 을 NodePort 로 변경"
  ],
  "a": 1,
  "e": "Egress 를 막으면 CoreDNS 로 가는 DNS 질의도 막힌다. 53 포트 Egress 를 허용해야 이름 해석이 된다."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 3,
  "q": "namespaceSelector 로 네임스페이스 이름 prod 를 지정할 때 쓰는 라벨은?",
  "c": [
   "name: prod (항상 자동 생성)",
   "namespace: prod",
   "kubernetes.io/metadata.name: prod",
   "k8s-app: prod"
  ],
  "a": 2,
  "e": "v1.22 부터 모든 네임스페이스에 kubernetes.io/metadata.name 라벨이 자동으로 붙는다."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 2,
  "q": "NetworkPolicy 에 대한 설명으로 옳지 않은 것은?",
  "c": [
   "허용 규칙의 합집합으로 동작한다",
   "응답 트래픽은 별도 규칙 없이 허용된다",
   "CNI 플러그인이 지원해야 효과가 있다",
   "deny 규칙으로 특정 출처를 차단할 수 있다"
  ],
  "a": 3,
  "e": "NetworkPolicy 에는 거부 규칙이 없다. 선택된 Pod 는 허용 목록에 없는 트래픽이 차단될 뿐이다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 1,
  "q": "Ingress 리소스를 만들었는데 아무 동작도 하지 않는다. 가장 먼저 의심할 것은?",
  "c": [
   "Ingress Controller 미설치",
   "CoreDNS 미설치",
   "etcd 장애",
   "kube-scheduler 장애"
  ],
  "a": 0,
  "e": "Ingress 는 규칙일 뿐이며 ingress-nginx 같은 컨트롤러가 있어야 트래픽을 처리한다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 1,
  "q": "networking.k8s.io/v1 Ingress 에서 /api 와 /api/v1 을 모두 일치시키는 pathType 은?",
  "c": [
   "Exact",
   "Prefix",
   "Regex",
   "Wildcard"
  ],
  "a": 1,
  "e": "Prefix 는 경로 요소 단위 접두 일치다. Regex·Wildcard 는 pathType 값이 아니다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "Ingress 에서 처리할 컨트롤러를 지정하는 필드는?",
  "c": [
   "metadata.labels.class",
   "spec.controller",
   "spec.ingressClassName",
   "spec.rules.host"
  ],
  "a": 2,
  "e": "spec.ingressClassName 에 IngressClass 이름을 쓴다. 예전 annotation kubernetes.io/ingress.class 는 사용 중단됐다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "pathType: Prefix, path: /foo 규칙과 일치하지 않는 요청 경로는?",
  "c": [
   "/foo",
   "/foo/",
   "/foo/bar",
   "/foobar"
  ],
  "a": 3,
  "e": "Prefix 는 '/' 로 나눈 요소 단위 비교라 /foobar 는 일치하지 않는다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 3,
  "q": "kubectl create ingress 의 --rule=\"shop.com/api*=api-svc:80\" 에서 * 의 의미는?",
  "c": [
   "pathType Prefix 로 생성",
   "정규식 와일드카드",
   "모든 호스트 허용",
   "TLS 활성화"
  ],
  "a": 0,
  "e": "경로 끝에 * 가 있으면 Prefix, 없으면 Exact 로 만들어진다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "Gateway API 에서 앱 개발자가 호스트·경로별 라우팅을 정의하는 리소스는?",
  "c": [
   "GatewayClass",
   "HTTPRoute",
   "Gateway",
   "IngressClass"
  ],
  "a": 1,
  "e": "GatewayClass 는 인프라 제공자, Gateway 는 클러스터 운영자, HTTPRoute 는 앱 개발자 담당이다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 3,
  "q": "HTTPRoute 가 어느 Gateway 에 연결될지 지정하는 필드는?",
  "c": [
   "spec.backendRefs",
   "spec.gatewayClassName",
   "spec.parentRefs",
   "spec.listeners"
  ],
  "a": 2,
  "e": "parentRefs 가 Gateway 를 가리킨다. backendRefs 는 Service, gatewayClassName·listeners 는 Gateway 의 필드다."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 3,
  "q": "Gateway API 가 Ingress 에 비해 표준 필드로 제공하는 기능으로 가장 적절한 것은?",
  "c": [
   "NodePort 자동 할당",
   "Pod 수평 확장",
   "etcd 암호화",
   "backendRefs weight 를 이용한 트래픽 분할"
  ],
  "a": 3,
  "e": "HTTPRoute 는 backendRefs 의 weight 로 카나리 분할을 표준화했다. Ingress 는 컨트롤러별 annotation 에 의존한다."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 1,
  "q": "Pod 가 삭제되면 데이터도 함께 사라지는 볼륨 유형은?",
  "c": [
   "emptyDir",
   "persistentVolumeClaim",
   "nfs",
   "csi"
  ],
  "a": 0,
  "e": "emptyDir 은 Pod 수명과 같다. 컨테이너 재시작에는 유지된다."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 2,
  "q": "emptyDir 볼륨 데이터에 대한 설명으로 옳은 것은?",
  "c": [
   "컨테이너가 재시작되면 사라진다",
   "컨테이너가 재시작되어도 유지되고 Pod 가 삭제되면 사라진다",
   "Pod 가 삭제되어도 노드에 남는다",
   "다른 노드로 Pod 가 옮겨도 따라간다"
  ],
  "a": 1,
  "e": "emptyDir 은 Pod 단위 자원이다. 노드 이동·Pod 삭제 시 데이터는 없어진다."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 2,
  "q": "hostPath 볼륨의 단점으로 가장 적절한 것은?",
  "c": [
   "Pod 삭제와 함께 데이터가 사라진다",
   "여러 컨테이너가 공유할 수 없다",
   "Pod 가 다른 노드로 옮기면 같은 데이터를 볼 수 없고 노드 파일 접근 위험이 있다",
   "읽기 전용으로만 마운트된다"
  ],
  "a": 2,
  "e": "hostPath 는 특정 노드의 파일시스템에 묶인다. 운영 데이터는 PV 를 쓴다."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 2,
  "q": "볼륨을 정의했는데 컨테이너에 마운트되지 않았다. 가장 먼저 확인할 것은?",
  "c": [
   "노드 taint",
   "Service 포트",
   "HPA 설정",
   "volumes 의 name 과 volumeMounts 의 name 일치 여부"
  ],
  "a": 3,
  "e": "volumeMounts.name 은 spec.volumes 의 이름을 참조한다. 이름이 다르면 Pod 생성이 거부되거나 마운트되지 않는다."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 3,
  "q": "ConfigMap 을 subPath 로 특정 파일만 마운트한 Pod 에서 ConfigMap 을 수정했다. 결과는?",
  "c": [
   "마운트된 파일이 갱신되지 않는다",
   "즉시 갱신된다",
   "수십 초 뒤 자동 갱신된다",
   "Pod 가 자동 재시작된다"
  ],
  "a": 0,
  "e": "subPath 마운트는 갱신 대상이 아니다. 전체 디렉터리로 마운트하면 지연 갱신된다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 1,
  "q": "PersistentVolume 의 범위로 옳은 것은?",
  "c": [
   "네임스페이스 범위",
   "클러스터 범위(네임스페이스 없음)",
   "노드 범위",
   "Pod 범위"
  ],
  "a": 1,
  "e": "PV 는 클러스터 자원이고 PVC 가 네임스페이스 자원이다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 1,
  "q": "한 노드에서만 읽기·쓰기로 마운트할 수 있는 Access Mode 는?",
  "c": [
   "ReadOnlyMany",
   "ReadWriteMany",
   "ReadWriteOnce",
   "ReadWriteOncePod"
  ],
  "a": 2,
  "e": "RWO 는 노드 단위다. 한 Pod 로 제한하는 것은 RWOP 다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "클러스터 전체에서 단 하나의 Pod 만 읽기·쓰기로 쓸 수 있게 하는 Access Mode 는?",
  "c": [
   "ReadWriteOnce",
   "ReadOnlyMany",
   "ReadWriteMany",
   "ReadWriteOncePod"
  ],
  "a": 3,
  "e": "RWOP 는 CSI 볼륨에서 지원되며 단일 Pod 접근을 보장한다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "reclaimPolicy 가 Retain 인 PV 의 PVC 를 삭제했을 때 PV 상태는?",
  "c": [
   "Released",
   "Available",
   "Bound",
   "Pending"
  ],
  "a": 0,
  "e": "Retain 은 데이터를 보존하고 PV 를 Released 로 둔다. 바로 재바인딩되지 않는다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 3,
  "q": "Released 상태의 PV 를 새 PVC 와 다시 바인딩하려면?",
  "c": [
   "PV 의 reclaimPolicy 를 Delete 로 바꾼다",
   "PV 의 spec.claimRef 를 제거한다",
   "PVC 의 accessModes 를 RWX 로 바꾼다",
   "kube-scheduler 를 재시작한다"
  ],
  "a": 1,
  "e": "claimRef 에 이전 PVC 정보가 남아 있어 바인딩되지 않는다. 데이터 정리 여부를 판단한 뒤 claimRef 를 지우거나 PV 를 다시 만든다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "PVC 가 계속 Pending 이다. 원인으로 보기 어려운 것은?",
  "c": [
   "요청 용량 이상인 PV 가 없다",
   "storageClassName 이 PV 와 다르다",
   "Pod 의 CPU requests 가 너무 크다",
   "요청한 accessModes 를 지원하는 PV 가 없다"
  ],
  "a": 2,
  "e": "PVC 바인딩은 용량·모드·클래스·selector 로 결정된다. CPU requests 는 Pod 스케줄링 문제다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "500Mi 를 요청한 PVC 가 1Gi PV 와 바인딩되었다. kubectl get pvc 의 CAPACITY 는?",
  "c": [
   "500Mi",
   "524Mi",
   "0",
   "1Gi"
  ],
  "a": 3,
  "e": "PVC 는 PV 와 1:1 로 묶이므로 PV 전체 용량이 표시된다. 남는 공간을 다른 PVC 가 쓸 수 없다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 3,
  "q": "Pod 가 사용 중인 PVC 를 kubectl delete 했더니 Terminating 에서 멈췄다. 이유는?",
  "c": [
   "pvc-protection finalizer 가 사용 중인 PVC 삭제를 지연시키기 때문",
   "PV 의 reclaimPolicy 가 Delete 이기 때문",
   "etcd 가 손상되었기 때문",
   "StorageClass 가 없기 때문"
  ],
  "a": 0,
  "e": "Storage Object in Use Protection 이다. PVC 를 쓰는 Pod 가 삭제되면 PVC 삭제가 완료된다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 1,
  "q": "Which field in a Pod spec references an existing PVC named data-pvc?",
  "c": [
   "volumes[].pvc.name",
   "volumes[].persistentVolumeClaim.claimName",
   "containers[].volumeClaim",
   "spec.storageClassName"
  ],
  "a": 1,
  "e": "The Pod defines a volume of type persistentVolumeClaim with claimName, then mounts it via volumeMounts."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 3,
  "q": "PVC 에 storageClassName: \"\" 을 명시했을 때의 의미는?",
  "c": [
   "기본 StorageClass 로 동적 프로비저닝한다",
   "모든 클래스의 PV 와 바인딩할 수 있다",
   "기본 StorageClass 를 쓰지 않고 클래스가 없는 PV 와만 바인딩한다",
   "PVC 생성이 거부된다"
  ],
  "a": 2,
  "e": "필드 생략은 기본 클래스 적용, 빈 문자열은 클래스 없음(정적 PV)이라는 뜻이다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 1,
  "q": "PVC 요청에 따라 PV 를 자동으로 만드는 방식은?",
  "c": [
   "정적 프로비저닝",
   "hostPath",
   "emptyDir",
   "동적 프로비저닝(StorageClass)"
  ],
  "a": 3,
  "e": "StorageClass 의 provisioner 가 PV 를 자동 생성한다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "StorageClass 로 동적 생성된 PV 의 reclaimPolicy 를 따로 지정하지 않았을 때 기본값은?",
  "c": [
   "Delete",
   "Retain",
   "Recycle",
   "Released"
  ],
  "a": 0,
  "e": "StorageClass reclaimPolicy 기본값은 Delete 다. 데이터 보존이 필요하면 Retain 으로 지정한다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "PVC 를 사용하는 Pod 가 스케줄될 때까지 볼륨 바인딩을 미루는 설정은?",
  "c": [
   "volumeBindingMode: Immediate",
   "volumeBindingMode: WaitForFirstConsumer",
   "reclaimPolicy: Retain",
   "allowVolumeExpansion: true"
  ],
  "a": 1,
  "e": "Pod 의 노드·존을 확인한 뒤 볼륨을 만들어 위치 불일치를 막는다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 3,
  "q": "WaitForFirstConsumer StorageClass 로 PVC 만 만들고 Pod 는 아직 없다. PVC 상태와 해석으로 옳은 것은?",
  "c": [
   "Bound — 즉시 바인딩된다",
   "Lost — 볼륨을 찾지 못했다",
   "Pending — 소비할 Pod 가 생길 때까지 기다리는 정상 상태",
   "Failed — 프로비저닝 오류"
  ],
  "a": 2,
  "e": "describe pvc 에 waiting for first consumer 이벤트가 보인다. Pod 를 만들면 바인딩된다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "PVC 용량 확장에 필요한 StorageClass 설정은?",
  "c": [
   "volumeBindingMode: Immediate",
   "reclaimPolicy: Retain",
   "provisioner: kubernetes.io/no-provisioner",
   "allowVolumeExpansion: true"
  ],
  "a": 3,
  "e": "허용된 클래스에서 PVC 의 requests.storage 를 늘리면 확장된다. 축소는 불가하다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 3,
  "q": "local PV 를 쓰는 StorageClass 구성으로 옳은 것은?",
  "c": [
   "provisioner: kubernetes.io/no-provisioner, volumeBindingMode: WaitForFirstConsumer",
   "provisioner: ebs.csi.aws.com, volumeBindingMode: Immediate",
   "provisioner 생략, reclaimPolicy: Recycle",
   "provisioner: kubernetes.io/no-provisioner, volumeBindingMode: Immediate"
  ],
  "a": 0,
  "e": "local 볼륨은 동적 생성이 없고 노드에 묶여 있어 Pod 스케줄 결과를 보고 바인딩해야 한다."
 },
 {
  "s": "s4",
  "t": "CSI·스토리지 기초",
  "d": 2,
  "q": "CSI 의 목적으로 가장 적절한 것은?",
  "c": [
   "컨테이너 런타임 표준",
   "쿠버네티스 코어 수정 없이 스토리지 벤더가 드라이버를 제공하게 하는 표준 인터페이스",
   "Pod 네트워크 표준",
   "이미지 레지스트리 표준"
  ],
  "a": 1,
  "e": "런타임은 CRI, 네트워크는 CNI, 스토리지는 CSI 다."
 },
 {
  "s": "s4",
  "t": "CSI·스토리지 기초",
  "d": 2,
  "q": "CSI 드라이버에서 각 노드에 볼륨을 마운트하는 구성요소의 배포 형태로 일반적인 것은?",
  "c": [
   "Deployment 로 배포되는 kube-proxy",
   "Static Pod 로 배포되는 etcd",
   "DaemonSet 으로 배포되는 Node 플러그인",
   "Job 으로 배포되는 provisioner"
  ],
  "a": 2,
  "e": "Node 플러그인은 모든 노드에서 동작해야 하므로 DaemonSet 이다. 생성·연결은 Controller 플러그인이 맡는다."
 },
 {
  "s": "s4",
  "t": "CSI·스토리지 기초",
  "d": 3,
  "q": "StatefulSet 의 volumeClaimTemplates 에 대한 설명으로 옳은 것은?",
  "c": [
   "모든 Pod 가 하나의 PVC 를 공유한다",
   "StatefulSet 을 지우면 PVC 도 항상 즉시 삭제된다",
   "emptyDir 을 자동으로 만든다",
   "Pod 마다 고정된 이름의 PVC 를 만들고 Pod 가 재생성돼도 같은 PVC 에 붙는다"
  ],
  "a": 3,
  "e": "PVC 이름은 템플릿명-StatefulSet명-순번이다. 기본적으로 StatefulSet 삭제 후에도 PVC 는 남는다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "Pod 의 Events·Exit Code·재시작 사유를 한 번에 확인하는 명령은?",
  "c": [
   "kubectl describe pod <pod>",
   "kubectl get pod <pod>",
   "kubectl top pod <pod>",
   "kubectl explain pod"
  ],
  "a": 0,
  "e": "describe 는 State·Last State·Reason·Exit Code·Events 를 보여준다. get 은 요약, top 은 사용량, explain 은 스키마 설명이다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "이미지 태그를 잘못 입력했을 때 Pod 가 보이는 상태는?",
  "c": [
   "CrashLoopBackOff",
   "OOMKilled",
   "ImagePullBackOff",
   "Completed"
  ],
  "a": 2,
  "e": "이미지를 받지 못하면 ErrImagePull 후 ImagePullBackOff 가 된다. CrashLoopBackOff 는 실행 후 반복 종료다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "컨테이너가 memory limit 을 넘어 종료됐을 때 describe 에 표시되는 Reason 과 Exit Code 는?",
  "c": [
   "Error · 1",
   "Completed · 0",
   "OOMKilled · 143",
   "OOMKilled · 137"
  ],
  "a": 3,
  "e": "OOM killer 의 SIGKILL 로 128+9=137 이다. 143 은 SIGTERM 이다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "Pod 가 Pending 이고 Events 에 \"0/3 nodes are available: 3 Insufficient cpu\" 가 있다. 원인은?",
  "c": [
   "Pod 의 CPU requests 가 노드 할당 가능량을 초과",
   "이미지가 존재하지 않음",
   "livenessProbe 실패",
   "ConfigMap 누락"
  ],
  "a": 0,
  "e": "스케줄러는 requests 기준으로 배치한다. requests 를 줄이거나 노드 자원을 늘려야 한다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "Pod 가 CreateContainerConfigError 상태다. 가장 가능성 높은 원인은?",
  "c": [
   "노드 디스크가 가득 찼다",
   "참조한 ConfigMap 또는 Secret(key)이 없다",
   "Service selector 가 틀렸다",
   "CNI 플러그인이 없다"
  ],
  "a": 1,
  "e": "env·volume 이 참조한 ConfigMap·Secret 이 없으면 컨테이너 설정을 만들 수 없다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "Pod 는 Running 이지만 READY 가 0/1 이고 Service Endpoint 에 나타나지 않는다. 원인은?",
  "c": [
   "livenessProbe 실패",
   "이미지 풀 실패",
   "readinessProbe 실패",
   "OOMKilled"
  ],
  "a": 2,
  "e": "readiness 실패는 재시작 없이 Endpoint 에서 제외한다. liveness 실패는 재시작을 일으킨다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "livenessProbe 가 계속 실패할 때 나타나는 현상은?",
  "c": [
   "Pod 가 다른 노드로 이동한다",
   "Service 가 삭제된다",
   "노드가 NotReady 가 된다",
   "kubelet 이 컨테이너를 재시작해 RESTARTS 가 증가한다"
  ],
  "a": 3,
  "e": "liveness 실패는 컨테이너 재시작을 일으키고, 반복되면 CrashLoopBackOff 가 될 수 있다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "셸이 없는 distroless 이미지 컨테이너를 진단할 때 가장 적절한 방법은?",
  "c": [
   "kubectl debug -it <pod> --image=busybox --target=<container>",
   "kubectl exec -it <pod> -- sh",
   "kubectl attach <pod>",
   "kubectl cp <pod>:/bin/sh ."
  ],
  "a": 0,
  "e": "ephemeral 디버그 컨테이너를 붙여 같은 프로세스 네임스페이스를 본다. 셸이 없으면 exec sh 는 실패한다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "Deployment 가 만든 Pod 의 잘못된 이미지를 고치는 올바른 방법은?",
  "c": [
   "kubectl edit pod <pod> 로 이미지 수정 후 저장",
   "kubectl set image deployment/web web=nginx:1.27",
   "kubectl delete pod <pod> 만 실행",
   "kubectl replace pod --force 만 실행"
  ],
  "a": 1,
  "e": "Pod 를 고쳐도 ReplicaSet 이 원래 템플릿으로 다시 만든다. Deployment 템플릿을 수정해야 한다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "다음 중 Pending 의 원인이 될 수 없는 것은?",
  "c": [
   "taint 를 허용하지 않음",
   "nodeSelector 와 일치하는 노드 없음",
   "컨테이너 command 오타",
   "PVC 가 바인딩되지 않음"
  ],
  "a": 2,
  "e": "command 오타는 노드 배정 후 실행 단계 문제라 CrashLoopBackOff 나 RunContainerError 로 나타난다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "컨테이너 종료 코드 143 이 의미하는 것은?",
  "c": [
   "SIGKILL 로 종료",
   "정상 종료",
   "실행 파일을 찾지 못함",
   "SIGTERM 으로 종료"
  ],
  "a": 3,
  "e": "128+15(SIGTERM)=143 이다. 137 은 SIGKILL, 0 은 정상 종료다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 1,
  "q": "kubeadm 클러스터에서 kube-apiserver 정적 Pod 매니페스트의 기본 위치는?",
  "c": [
   "/etc/kubernetes/manifests/kube-apiserver.yaml",
   "/etc/kubernetes/pki/apiserver.yaml",
   "/var/lib/kubelet/kube-apiserver.yaml",
   "/opt/kubernetes/apiserver.yaml"
  ],
  "a": 0,
  "e": "정적 Pod 매니페스트는 /etc/kubernetes/manifests 에 있다. pki 는 인증서 디렉터리다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "정적 Pod 매니페스트를 수정한 뒤 반영하는 방법은?",
  "c": [
   "kubectl apply -f 로 적용",
   "파일을 저장하면 kubelet 이 자동으로 다시 만든다",
   "kubectl rollout restart",
   "kube-scheduler 재시작"
  ],
  "a": 1,
  "e": "kubelet 이 staticPodPath 를 감시해 변경을 반영한다. kubectl apply 대상이 아니다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "kubectl 이 \"The connection to the server 10.0.0.10:6443 was refused\" 를 낸다. 가장 먼저 할 일은?",
  "c": [
   "kubectl describe node 실행",
   "CoreDNS 재시작",
   "컨트롤 플레인 노드에서 crictl ps -a 로 kube-apiserver 컨테이너 상태 확인",
   "모든 워커 노드 재부팅"
  ],
  "a": 2,
  "e": "apiserver 가 응답하지 않으므로 kubectl 은 쓸 수 없다. 런타임에서 직접 상태와 로그를 본다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "새로 만든 Pod 들이 모두 Pending 이고 NODE 가 <none> 이며 Events 가 비어 있다. 의심할 컴포넌트는?",
  "c": [
   "kube-proxy",
   "CoreDNS",
   "kubelet(워커)",
   "kube-scheduler"
  ],
  "a": 3,
  "e": "스케줄러가 없으면 노드 배정 자체가 일어나지 않아 FailedScheduling 이벤트도 없다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "Deployment replicas 를 3 에서 5 로 늘렸지만 Pod 수가 늘지 않는다. 의심할 컴포넌트는?",
  "c": [
   "kube-controller-manager",
   "kube-scheduler",
   "etcd 백업",
   "metrics-server"
  ],
  "a": 0,
  "e": "ReplicaSet 컨트롤러가 Pod 객체를 만든다. 스케줄러 문제라면 Pod 는 생기되 Pending 으로 남는다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "kube-apiserver 가 계속 재시작된다. crictl logs 에 \"open /etc/kubernetes/pki/apiserver.crtx: no such file\" 이 보인다. 조치는?",
  "c": [
   "kubeadm reset 후 재설치",
   "kube-apiserver.yaml 의 --tls-cert-file 경로 오타를 apiserver.crt 로 수정",
   "etcd 데이터 삭제",
   "kubelet 언인스톨"
  ],
  "a": 1,
  "e": "매니페스트 플래그 오타가 전형적인 장애 원인이다. 파일을 고치면 kubelet 이 재생성한다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "kubeadm 이 발급한 인증서의 만료일을 한 번에 확인하는 명령은?",
  "c": [
   "kubectl get certificates",
   "openssl list-certs",
   "kubeadm certs check-expiration",
   "kubeadm token list"
  ],
  "a": 2,
  "e": "kubeadm certs check-expiration 이 인증서별 만료일을 보여주고 kubeadm certs renew 로 갱신한다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "kube-apiserver 다운 상태에서 apiserver 컨테이너 로그를 볼 수 있는 방법이 아닌 것은?",
  "c": [
   "crictl logs <container-id>",
   "/var/log/pods/kube-system_kube-apiserver-* 파일",
   "journalctl -u kubelet 로 기동 오류 확인",
   "kubectl logs -n kube-system kube-apiserver-controlplane"
  ],
  "a": 3,
  "e": "kubectl logs 는 apiserver 를 거치므로 apiserver 가 죽으면 동작하지 않는다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "정적 Pod 매니페스트 경로가 바뀐 클러스터에서 실제 경로를 확인하는 방법은?",
  "c": [
   "/var/lib/kubelet/config.yaml 의 staticPodPath 확인",
   "kubectl get cm kube-proxy",
   "/etc/cni/net.d 확인",
   "kubectl get sc"
  ],
  "a": 0,
  "e": "staticPodPath 는 kubelet 설정(KubeletConfiguration)에 있다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 1,
  "q": "containerd 환경에서 종료된 컨테이너까지 포함해 목록을 보는 명령은?",
  "c": [
   "docker ps -a",
   "crictl ps -a",
   "kubectl ps -a",
   "ctr pods"
  ],
  "a": 1,
  "e": "crictl 은 CRI 런타임 조회 도구다. dockershim 은 v1.24 에서 제거됐다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 1,
  "q": "노드가 NotReady 일 때 노드에 접속해 먼저 확인할 서비스는?",
  "c": [
   "kube-scheduler",
   "CoreDNS",
   "kubelet",
   "kube-apiserver(워커)"
  ],
  "a": 2,
  "e": "노드 상태를 보고하는 주체는 kubelet 이다. systemctl status kubelet 부터 본다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 1,
  "q": "kubelet 서비스 로그를 확인하는 명령은?",
  "c": [
   "kubectl logs kubelet",
   "cat /var/log/kubelet.yaml",
   "crictl logs kubelet",
   "journalctl -u kubelet"
  ],
  "a": 3,
  "e": "kubelet 은 systemd 서비스라 journalctl 로 본다. Pod 가 아니므로 kubectl logs 대상이 아니다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "kubelet 이 중지돼 있었다. 시작하고 재부팅 후에도 자동 시작되게 하려면?",
  "c": [
   "systemctl start kubelet && systemctl enable kubelet",
   "systemctl start kubelet 만 실행",
   "kubectl uncordon <node>",
   "kubeadm init 재실행"
  ],
  "a": 0,
  "e": "start 는 즉시 실행, enable 은 부팅 시 자동 시작이다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "kubelet systemd 드롭인 파일(10-kubeadm.conf)을 수정한 뒤 필요한 절차는?",
  "c": [
   "kubectl apply -f 10-kubeadm.conf",
   "systemctl daemon-reload 후 systemctl restart kubelet",
   "kubeadm upgrade apply",
   "노드 drain 만 수행"
  ],
  "a": 1,
  "e": "systemd 유닛 파일 변경은 daemon-reload 로 다시 읽어야 한다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "kubelet 이 apiserver 에 접속할 때 쓰는 kubeconfig 의 기본 위치는?",
  "c": [
   "/etc/kubernetes/admin.conf",
   "/var/lib/kubelet/config.yaml",
   "/etc/kubernetes/kubelet.conf",
   "~/.kube/config"
  ],
  "a": 2,
  "e": "kubelet.conf 가 kubelet 의 kubeconfig 다. config.yaml 은 KubeletConfiguration, admin.conf 는 관리자용이다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "describe node 에서 Ready 조건이 Unknown 이다. 의미는?",
  "c": [
   "노드 메모리가 부족하다",
   "노드에 taint 가 없다",
   "노드가 cordon 됐다",
   "kubelet 이 일정 시간 노드 상태를 보고하지 않았다"
  ],
  "a": 3,
  "e": "Unknown 은 컨트롤러가 kubelet 의 상태 갱신을 받지 못했다는 뜻이다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 3,
  "q": "노드가 NotReady 가 된 뒤 그 노드의 일반 Pod 가 다른 노드로 재생성되기까지 기본 대기 시간은?",
  "c": [
   "약 300초(tolerationSeconds)",
   "즉시",
   "30초",
   "24시간"
  ],
  "a": 0,
  "e": "Pod 에 기본으로 붙는 not-ready·unreachable 톨러레이션의 tolerationSeconds 가 300 이다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 3,
  "q": "describe node 에 DiskPressure=True 가 표시됐다. 적절한 조치는?",
  "c": [
   "kube-scheduler 재시작",
   "노드 디스크 정리(미사용 이미지·로그) 후 상태 확인",
   "Service type 변경",
   "CoreDNS 스케일 아웃"
  ],
  "a": 1,
  "e": "디스크 압박은 노드 자원 문제다. kubelet 이 이미지 GC·축출을 수행하며, 공간을 확보해야 해소된다."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 3,
  "q": "kubelet 로그에 \"failed to load Kubelet config file /var/lib/kubelet/confg.yaml\" 이 반복된다. 조치는?",
  "c": [
   "kubeadm certs renew all",
   "CNI 재설치",
   "kubelet 실행 인자(드롭인)의 --config 경로 오타 수정 후 daemon-reload·restart",
   "etcd 복구"
  ],
  "a": 2,
  "e": "설정 파일 경로 오타다. 드롭인의 KUBELET_CONFIG_ARGS 등을 고친다."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 1,
  "q": "Service 의 Endpoint 를 확인하는 명령은?",
  "c": [
   "kubectl get ep-slice",
   "kubectl top svc",
   "kubectl logs svc/<svc>",
   "kubectl get endpoints <svc>"
  ],
  "a": 3,
  "e": "kubectl get endpoints(ep)가 Service 대상 Pod IP 를 보여준다."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 2,
  "q": "Service 는 있고 Endpoint 도 있지만 접속이 거부된다. 가장 먼저 확인할 것은?",
  "c": [
   "targetPort 와 컨테이너가 실제 listen 하는 포트",
   "Service 이름 길이",
   "노드 OS 버전",
   "kubectl 버전"
  ],
  "a": 0,
  "e": "Endpoint 가 있다면 selector 는 맞다. 포트 불일치가 다음 의심 대상이다."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 2,
  "q": "CoreDNS Pod 를 라벨로 조회하는 명령으로 옳은 것은?",
  "c": [
   "kubectl get pods -l app=coredns",
   "kubectl -n kube-system get pods -l k8s-app=kube-dns",
   "kubectl -n kube-dns get pods",
   "kubectl get svc coredns"
  ],
  "a": 1,
  "e": "CoreDNS 는 호환을 위해 k8s-app=kube-dns 라벨을 쓴다."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 3,
  "q": "kube-proxy 가 iptables 모드일 때 노드에서 Service 규칙을 확인하는 명령은?",
  "c": [
   "ipvsadm -Ln",
   "ip route show table kube",
   "iptables -t nat -L KUBE-SERVICES",
   "conntrack -F"
  ],
  "a": 2,
  "e": "iptables 모드는 nat 테이블 KUBE-SERVICES 체인에 규칙을 둔다. ipvsadm 은 ipvs 모드용이다."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 3,
  "q": "모든 Pod 의 이름 해석이 실패하고 CoreDNS 는 정상이다. kube-dns Service 의 Endpoint 가 비어 있다. 원인으로 가장 적절한 것은?",
  "c": [
   "Ingress Controller 미설치",
   "metrics-server 장애",
   "PV 미바인딩",
   "kube-dns Service selector 가 CoreDNS Pod 라벨과 맞지 않게 변경됨"
  ],
  "a": 3,
  "e": "Endpoint 가 비면 selector·라벨 불일치다. selector 를 k8s-app=kube-dns 로 되돌린다."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "Pod 의 CPU·메모리 사용량을 보는 kubectl top 이 동작하려면 필요한 것은?",
  "c": [
   "metrics-server",
   "Prometheus",
   "CoreDNS",
   "Ingress Controller"
  ],
  "a": 0,
  "e": "kubectl top 은 Metrics API(metrics-server)를 사용한다."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "다중 컨테이너 Pod 에서 sidecar 컨테이너 로그만 보는 명령은?",
  "c": [
   "kubectl logs <pod> --container-all",
   "kubectl logs <pod> -c sidecar",
   "kubectl logs sidecar",
   "kubectl describe <pod> -c sidecar"
  ],
  "a": 1,
  "e": "-c 로 컨테이너를 지정한다. 지정하지 않으면 기본 컨테이너 또는 오류가 난다."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "모든 네임스페이스의 경고 이벤트만 시간순으로 보는 명령은?",
  "c": [
   "kubectl logs events -A",
   "kubectl describe events --warning",
   "kubectl get events -A --field-selector type=Warning --sort-by=.metadata.creationTimestamp",
   "kubectl top events"
  ],
  "a": 2,
  "e": "events 를 field-selector 로 거르고 sort-by 로 정렬한다."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 3,
  "q": "노드에서 컨테이너 stdout 로그 파일이 저장되는 기본 경로는?",
  "c": [
   "/etc/kubernetes/logs/",
   "/var/lib/etcd/logs/",
   "/opt/cni/logs/",
   "/var/log/pods/<ns>_<pod>_<uid>/<container>/"
  ],
  "a": 3,
  "e": "kubelet·런타임이 /var/log/pods 에 기록하고 /var/log/containers 에 링크를 둔다."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 3,
  "q": "CPU 사용량이 가장 높은 Pod 이름 하나를 /opt/top.txt 에 저장하는 명령으로 가장 적절한 것은?",
  "c": [
   "kubectl top pod -A --sort-by=cpu --no-headers | head -1 | awk '{print $2}' > /opt/top.txt",
   "kubectl get pod --sort-by=cpu > /opt/top.txt",
   "kubectl describe top > /opt/top.txt",
   "kubectl logs --top > /opt/top.txt"
  ],
  "a": 0,
  "e": "-A 출력은 첫 열이 NAMESPACE 라 두 번째 열이 Pod 이름이다. get --sort-by=cpu 는 사용량이 아니다."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 1,
  "q": "모든 노드 이름을 공백으로 구분해 출력하는 JSONPath 는?",
  "c": [
   "kubectl get nodes -o jsonpath='{.metadata.name}'",
   "kubectl get nodes -o jsonpath='{.items[*].metadata.name}'",
   "kubectl get nodes -o name=metadata",
   "kubectl get nodes -o jsonpath='{items.name}'"
  ],
  "a": 1,
  "e": "목록 객체는 .items[*] 를 거쳐야 한다."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 2,
  "q": "JSONPath 로 항목마다 줄바꿈해 출력할 때 쓰는 구문은?",
  "c": [
   "{for .items}…{done}",
   "{each .items[*]}…{/each}",
   "{range .items[*]}…{\"\\n\"}{end}",
   "{loop}…{endloop}"
  ],
  "a": 2,
  "e": "range … end 로 반복하고 {\"\\n\"} 로 줄을 바꾼다."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 2,
  "q": "Pod 를 생성 시각 순으로 정렬해 보는 옵션은?",
  "c": [
   "--order=age",
   "--sort=time",
   "-o sorted",
   "--sort-by=.metadata.creationTimestamp"
  ],
  "a": 3,
  "e": "--sort-by 는 JSONPath 형식의 필드를 받는다."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 3,
  "q": "노드의 InternalIP 만 뽑는 JSONPath 로 옳은 것은?",
  "c": [
   "'{.items[*].status.addresses[?(@.type==\"InternalIP\")].address}'",
   "'{.items[*].status.InternalIP}'",
   "'{.items[*].spec.addresses.internal}'",
   "'{.items[*].metadata.address}'"
  ],
  "a": 0,
  "e": "addresses 배열에서 type 이 InternalIP 인 항목을 필터로 고른다."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 3,
  "q": "Pod 이름과 노드 이름을 열로 보여주는 custom-columns 로 옳은 것은?",
  "c": [
   "-o custom-columns=POD:.items[*].metadata.name,NODE:.items[*].spec.nodeName",
   "-o custom-columns=POD:.metadata.name,NODE:.spec.nodeName",
   "-o columns=name,node",
   "-o jsonpath=POD,NODE"
  ],
  "a": 1,
  "e": "custom-columns 경로는 각 객체 기준이라 .items 를 쓰지 않는다."
 }
];

CPPG.ox = [
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "kube-apiserver 는 etcd 와 통신하는 유일한 구성요소다.",
  "a": true,
  "e": "다른 구성요소는 apiserver 를 통해 상태를 읽고 쓴다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "kube-proxy 는 Pod 간 네트워크(오버레이)를 구성한다.",
  "a": false,
  "e": "Pod 네트워크는 CNI 플러그인, kube-proxy 는 Service 라우팅 규칙."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 2,
  "q": "kubeadm 클러스터의 kubelet 은 Static Pod 로 실행된다.",
  "a": false,
  "e": "kubelet 은 systemd 서비스이며 Static Pod 를 실행하는 쪽이다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 2,
  "q": "Static Pod 의 manifest 파일을 수정하면 kubelet 이 Pod 를 다시 만든다.",
  "a": true,
  "e": "kubelet 이 manifest 디렉터리를 감시한다."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 2,
  "q": "etcd 의 2380 포트는 피어 간 통신에 사용된다.",
  "a": true,
  "e": "2379 는 클라이언트 포트."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "v1.24 이후 kubelet 은 dockershim 을 통해 Docker Engine 을 직접 사용한다.",
  "a": false,
  "e": "dockershim 은 v1.24 에서 제거되었다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 1,
  "q": "kubeadm 업그레이드는 Minor 버전을 한 번에 하나씩만 올린다.",
  "a": true,
  "e": "v1.29 → v1.30 → v1.31."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "추가 Control Plane 노드에서도 kubeadm upgrade apply 를 실행한다.",
  "a": false,
  "e": "추가 노드는 kubeadm upgrade node."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 1,
  "q": "kubectl cordon 은 노드의 기존 Pod 를 축출한다.",
  "a": false,
  "e": "cordon 은 새 스케줄만 막는다. 축출은 drain."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "kubectl drain 은 DaemonSet Pod 가 있으면 --ignore-daemonsets 없이 실패한다.",
  "a": true,
  "e": "DaemonSet Pod 는 축출 대상이 아니므로 옵션으로 무시한다."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "kubeadm 부트스트랩 토큰은 기본적으로 24시간 후 만료된다.",
  "a": true,
  "e": "kubeadm token create --print-join-command 로 재발급."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 3,
  "q": "kubelet 은 kube-apiserver 보다 높은 Minor 버전으로 운영할 수 있다.",
  "a": false,
  "e": "kubelet 은 apiserver 보다 최신일 수 없다."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 1,
  "q": "etcd 스냅샷 백업은 etcdctl snapshot save 로 수행한다.",
  "a": true,
  "e": "TLS 인증서 옵션과 endpoint 필요."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcd 복원은 기존 /var/lib/etcd 에 그대로 덮어쓰는 것이 표준 절차다.",
  "a": false,
  "e": "새 data-dir 로 복원 후 etcd.yaml hostPath 변경."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcd 3대 클러스터는 1대 장애까지 쓰기를 유지한다.",
  "a": true,
  "e": "과반 2대."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcd 를 짝수로 구성하면 홀수보다 장애 허용 수가 늘어난다.",
  "a": false,
  "e": "4대도 1대만 허용 — 홀수 권장."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 3,
  "q": "External etcd 토폴로지는 Stacked 보다 노드가 더 필요하다.",
  "a": true,
  "e": "etcd 전용 노드가 필요하다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 1,
  "q": "X.509 클라이언트 인증서의 CN 은 Kubernetes 사용자 이름으로 쓰인다.",
  "a": true,
  "e": "O 는 그룹."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 2,
  "q": "CSR 오브젝트를 만들면 자동으로 승인되어 인증서가 발급된다.",
  "a": false,
  "e": "kubectl certificate approve 로 승인해야 한다."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 2,
  "q": "kubeadm certs check-expiration 으로 인증서 만료일을 확인할 수 있다.",
  "a": true,
  "e": "갱신은 kubeadm certs renew."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 1,
  "q": "Role 은 네임스페이스 범위, ClusterRole 은 클러스터 범위 권한이다.",
  "a": true,
  "e": "연결은 RoleBinding · ClusterRoleBinding."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 2,
  "q": "RoleBinding 은 ClusterRole 을 참조할 수 없다.",
  "a": false,
  "e": "참조할 수 있고 권한은 그 네임스페이스로 한정된다."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 2,
  "q": "v1.24 이상에서는 ServiceAccount 생성 시 토큰 Secret 이 자동으로 만들어지지 않는다.",
  "a": true,
  "e": "kubectl create token 사용."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 3,
  "q": "Pod 가 실행 중일 때 spec.serviceAccountName 을 kubectl edit 로 바꿀 수 있다.",
  "a": false,
  "e": "Pod 를 다시 만들어야 한다."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 1,
  "q": "kubectl config use-context 는 current-context 를 변경한다.",
  "a": true,
  "e": "문제마다 먼저 실행."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 2,
  "q": "kubectl config set-context --current --namespace=dev 는 현재 컨텍스트의 기본 네임스페이스를 dev 로 바꾼다.",
  "a": true,
  "e": "이후 -n 생략 시 dev."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 2,
  "q": "JSONPath 표현식은 셸이 해석하지 않도록 작은따옴표로 감싸는 것이 안전하다.",
  "a": true,
  "e": "{} 와 $ 해석 방지."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 1,
  "q": "Helm 3 는 클러스터에 Tiller 를 설치해야 동작한다.",
  "a": false,
  "e": "Tiller 는 Helm 2."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 2,
  "q": "kubectl apply -k 는 Kustomize 디렉터리를 렌더링해 적용한다.",
  "a": true,
  "e": "kubectl 에 내장."
 },
 {
  "s": "s1",
  "t": "확장·Admission",
  "d": 2,
  "q": "CRD 만 만들면 해당 리소스를 처리하는 동작이 자동으로 생긴다.",
  "a": false,
  "e": "동작은 커스텀 컨트롤러(Operator)가 담당."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 1,
  "q": "Deployment 를 수정하면 새 ReplicaSet 이 생성된다.",
  "a": true,
  "e": "이전 ReplicaSet 은 replicas 0 으로 보존되어 롤백에 쓰인다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "maxSurge 와 maxUnavailable 을 모두 0 으로 설정할 수 있다.",
  "a": false,
  "e": "둘 다 0 이면 업데이트가 진행될 수 없어 허용되지 않는다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "kubectl rollout undo 를 실행하면 리비전 번호가 새로 하나 생긴다.",
  "a": true,
  "e": "롤백도 새 리비전으로 기록된다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 1,
  "q": "Recreate 전략은 무중단 배포를 보장한다.",
  "a": false,
  "e": "기존 Pod 를 모두 지운 뒤 생성하므로 다운타임이 생긴다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 1,
  "q": "NoSchedule taint 는 이미 실행 중인 Pod 를 축출한다.",
  "a": false,
  "e": "기존 Pod 축출은 NoExecute."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "Toleration 이 있는 Pod 는 해당 taint 가 있는 노드에만 배치된다.",
  "a": false,
  "e": "허용일 뿐 다른 노드에도 배치될 수 있다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "nodeName 을 지정한 Pod 는 스케줄러를 거치지 않는다.",
  "a": true,
  "e": "kubelet 이 직접 실행한다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "Static Pod 는 kubectl delete pod 로 영구 삭제된다.",
  "a": false,
  "e": "kubelet 이 다시 만든다. 매니페스트 파일을 지워야 한다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 1,
  "q": "DaemonSet 은 조건에 맞는 노드마다 Pod 를 하나씩 실행한다.",
  "a": true,
  "e": "노드가 추가되면 자동으로 배치된다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "PriorityClass 의 value 가 클수록 우선순위가 높다.",
  "a": true,
  "e": "자원이 부족하면 낮은 우선순위 Pod 를 선점한다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 3,
  "q": "Mutating Admission 은 Validating Admission 보다 먼저 실행된다.",
  "a": true,
  "e": "변경을 마친 최종 객체를 검증한다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "podAntiAffinity 에는 topologyKey 지정이 필요하다.",
  "a": true,
  "e": "분산 기준 범위(노드·존)를 정한다."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 1,
  "q": "CPU limit 을 넘은 컨테이너는 OOMKilled 로 종료된다.",
  "a": false,
  "e": "CPU 는 스로틀링, OOMKilled 는 메모리 초과."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "requests·limits 가 전혀 없는 Pod 의 QoS 클래스는 BestEffort 이다.",
  "a": true,
  "e": "자원 부족 시 가장 먼저 축출된다."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "LimitRange 는 네임스페이스 전체 CPU 총량을 제한한다.",
  "a": false,
  "e": "총량은 ResourceQuota. LimitRange 는 컨테이너별 기본값·범위."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 3,
  "q": "ResourceQuota 를 새로 만들면 이미 실행 중인 Pod 중 초과분이 즉시 삭제된다.",
  "a": false,
  "e": "생성 시점에만 검사하며 기존 Pod 에 소급하지 않는다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 1,
  "q": "Pod 의 args 는 이미지의 CMD 를 덮어쓴다.",
  "a": true,
  "e": "command 는 ENTRYPOINT."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 1,
  "q": "Secret 의 data 값은 기본적으로 암호화되어 etcd 에 저장된다.",
  "a": false,
  "e": "base64 인코딩일 뿐이며 암호화는 별도 설정."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 2,
  "q": "환경변수로 주입한 ConfigMap 값은 ConfigMap 을 수정하면 실행 중인 컨테이너에 즉시 반영된다.",
  "a": false,
  "e": "컨테이너 재시작이 필요하다."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 2,
  "q": "Secret 의 stringData 필드에는 평문 값을 쓸 수 있다.",
  "a": true,
  "e": "저장 시 base64 로 인코딩된다."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 1,
  "q": "HPA 는 Pod 의 replicas 를 조정한다.",
  "a": true,
  "e": "VPA 는 requests·limits 를 조정한다."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 2,
  "q": "HPA 의 CPU 사용률 기준 동작에는 metrics-server 가 필요하다.",
  "a": true,
  "e": "Metrics API 를 제공한다."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 2,
  "q": "initContainers 는 앱 컨테이너와 병렬로 실행된다.",
  "a": false,
  "e": "순서대로 실행·완료된 뒤 앱이 시작된다."
 },
 {
  "s": "s2",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "kubectl logs -p 는 직전에 종료된 컨테이너의 로그를 보여준다.",
  "a": true,
  "e": "--previous 와 같다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 1,
  "q": "Service 의 type 을 생략하면 ClusterIP 로 생성된다.",
  "a": true,
  "e": "기본값 ClusterIP."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 1,
  "q": "NodePort Service 는 클러스터의 모든 노드에서 같은 포트로 접근할 수 있다.",
  "a": true,
  "e": "kube-proxy 가 모든 노드에 규칙을 설치."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "targetPort 를 생략하면 80 으로 설정된다.",
  "a": false,
  "e": "port 와 같은 값이 된다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "LoadBalancer Service 는 NodePort 와 ClusterIP 기능을 포함한다.",
  "a": true,
  "e": "클라우드 LB → NodePort → Pod."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "Endpoint 에는 Ready 상태가 아닌 Pod 도 포함된다.",
  "a": false,
  "e": "Ready 인 Pod 만 트래픽 대상(publishNotReadyAddresses 예외)."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 3,
  "q": "kube-proxy 의 userspace 모드는 현재도 선택할 수 있다.",
  "a": false,
  "e": "v1.26 에서 제거."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 1,
  "q": "Service 의 FQDN 형식은 <svc>.<ns>.svc.cluster.local 이다.",
  "a": true,
  "e": "cluster.local 은 기본 클러스터 도메인."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 2,
  "q": "CoreDNS 의 Service 이름은 coredns 다.",
  "a": false,
  "e": "호환성 때문에 kube-dns."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 2,
  "q": "다른 네임스페이스의 Service 는 이름만으로 조회할 수 있다.",
  "a": false,
  "e": "<svc>.<ns> 이상 필요."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 3,
  "q": "Pod DNS 레코드는 IP 주소의 점을 대시로 바꾼 형식을 쓴다.",
  "a": true,
  "e": "예: 10-244-1-5.dev.pod.cluster.local."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 1,
  "q": "CNI 설정 파일의 기본 위치는 /etc/cni/net.d 다.",
  "a": true,
  "e": "바이너리는 /opt/cni/bin."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 2,
  "q": "Flannel 만 설치된 클러스터에서도 NetworkPolicy 가 강제된다.",
  "a": false,
  "e": "Flannel 은 NetworkPolicy 미지원."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 2,
  "q": "같은 Pod 의 컨테이너는 localhost 로 서로 통신할 수 있다.",
  "a": true,
  "e": "네트워크 네임스페이스 공유."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 3,
  "q": "Service CIDR 은 kube-controller-manager 의 --cluster-cidr 로 지정한다.",
  "a": false,
  "e": "Service CIDR 은 apiserver 의 --service-cluster-ip-range, --cluster-cidr 는 Pod CIDR."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 1,
  "q": "네임스페이스에 NetworkPolicy 가 없으면 모든 트래픽이 허용된다.",
  "a": true,
  "e": "기본 허용."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 2,
  "q": "NetworkPolicy 로 특정 출처를 명시적으로 거부(deny)할 수 있다.",
  "a": false,
  "e": "허용 규칙만 존재."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 2,
  "q": "podSelector: {} 는 네임스페이스의 모든 Pod 를 선택한다.",
  "a": true,
  "e": "빈 선택자 = 전체."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 3,
  "q": "from 아래 namespaceSelector 와 podSelector 를 별도의 '-' 항목으로 나열하면 AND 조건이 된다.",
  "a": false,
  "e": "별도 항목은 OR, 같은 항목 안이어야 AND."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 3,
  "q": "Egress 기본 거부 정책을 적용하면 DNS 조회도 차단될 수 있다.",
  "a": true,
  "e": "53 포트 허용 필요."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 1,
  "q": "Ingress 는 Ingress Controller 가 있어야 동작한다.",
  "a": true,
  "e": "리소스는 규칙일 뿐."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "networking.k8s.io/v1 Ingress 에서 pathType 은 생략할 수 있다.",
  "a": false,
  "e": "v1 에서 필수."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "pathType Prefix 의 /foo 는 /foobar 요청과 일치한다.",
  "a": false,
  "e": "경로 요소 단위 비교."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "Gateway API 에서 Gateway 는 리스너(포트·프로토콜)를 정의한다.",
  "a": true,
  "e": "클러스터 운영자 담당."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 3,
  "q": "Gateway API 리소스는 별도 CRD 설치 없이 모든 클러스터에 기본 제공된다.",
  "a": false,
  "e": "Gateway API CRD 와 컨트롤러 설치 필요."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 1,
  "q": "emptyDir 데이터는 Pod 가 삭제되면 함께 사라진다.",
  "a": true,
  "e": "컨테이너 재시작에는 유지된다."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 2,
  "q": "hostPath 는 Pod 가 다른 노드로 이동해도 같은 데이터를 제공한다.",
  "a": false,
  "e": "노드 로컬 경로라 이동하면 데이터가 없다."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 2,
  "q": "subPath 로 마운트한 ConfigMap 파일은 ConfigMap 수정이 반영되지 않는다.",
  "a": true,
  "e": "전체 디렉터리 마운트만 갱신된다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 1,
  "q": "PVC 는 네임스페이스 범위 객체다.",
  "a": true,
  "e": "PV 는 클러스터 범위."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 1,
  "q": "ReadWriteOnce 는 한 Pod 만 쓸 수 있다는 뜻이다.",
  "a": false,
  "e": "한 노드 단위. 한 Pod 제한은 RWOP."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "Retain 정책 PV 는 PVC 삭제 후 Released 상태가 된다.",
  "a": true,
  "e": "claimRef 제거 전에는 재바인딩되지 않는다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "PVC 와 PV 는 N:1 로 여러 PVC 가 한 PV 를 나눠 쓸 수 있다.",
  "a": false,
  "e": "1:1 바인딩."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "Recycle 회수 정책은 deprecated 이다.",
  "a": true,
  "e": "동적 프로비저닝 사용 권장."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 3,
  "q": "PVC 의 storageClassName 을 생략하면 기본 StorageClass 가 적용된다.",
  "a": true,
  "e": "\"\" 을 쓰면 클래스 없는 PV 만."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 1,
  "q": "StorageClass 를 쓰면 PV 를 미리 만들지 않아도 된다.",
  "a": true,
  "e": "동적 프로비저닝."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "WaitForFirstConsumer 클래스의 PVC 는 Pod 가 없으면 Pending 이다.",
  "a": true,
  "e": "정상 동작이다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "allowVolumeExpansion 이 true 면 PVC 용량을 줄일 수도 있다.",
  "a": false,
  "e": "확장만 가능."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "StorageClass 의 reclaimPolicy 기본값은 Retain 이다.",
  "a": false,
  "e": "기본값 Delete."
 },
 {
  "s": "s4",
  "t": "CSI·스토리지 기초",
  "d": 2,
  "q": "CSI Node 플러그인은 보통 DaemonSet 으로 배포된다.",
  "a": true,
  "e": "각 노드에서 마운트를 처리."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "CrashLoopBackOff 는 컨테이너가 시작 후 반복 종료될 때 나타난다.",
  "a": true,
  "e": "재시작 지연이 점점 늘어난다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "ImagePullBackOff 의 흔한 원인은 이미지 이름·태그 오타다.",
  "a": true,
  "e": "레지스트리 인증 누락도 원인."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "OOMKilled 는 memory requests 를 초과할 때 발생한다.",
  "a": false,
  "e": "limit 초과."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "readinessProbe 실패 시 컨테이너가 재시작된다.",
  "a": false,
  "e": "Endpoint 에서 제외될 뿐 — 재시작은 liveness."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "Pending 상태의 원인 중 하나는 Pod 가 허용하지 않는 taint 다.",
  "a": true,
  "e": "toleration 추가 또는 taint 제거."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "Deployment 가 관리하는 Pod 의 이미지는 Pod 를 직접 수정하면 영구 반영된다.",
  "a": false,
  "e": "Deployment 템플릿을 수정해야 한다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "종료 코드 137 은 SIGKILL 로 종료됐다는 의미다.",
  "a": true,
  "e": "128+9."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 1,
  "q": "kubeadm 컨트롤 플레인 컴포넌트는 정적 Pod 로 실행된다.",
  "a": true,
  "e": "/etc/kubernetes/manifests."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "정적 Pod 는 kubectl delete pod 로 영구 삭제할 수 있다.",
  "a": false,
  "e": "kubelet 이 다시 생성 — 매니페스트를 옮기거나 지워야 한다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "kube-apiserver 가 다운돼도 kubectl logs 로 apiserver 로그를 볼 수 있다.",
  "a": false,
  "e": "crictl logs·/var/log/pods 사용."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "kube-scheduler 가 다운되면 실행 중인 기존 Pod 는 유지된다.",
  "a": true,
  "e": "새 Pod 만 Pending."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "kubeadm 이 발급한 컴포넌트 인증서의 기본 유효기간은 1년이다.",
  "a": true,
  "e": "CA 는 10년."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "kube-controller-manager 가 다운되면 Deployment 를 확장해도 새 Pod 객체가 만들어지지 않는다.",
  "a": true,
  "e": "ReplicaSet 조정 중단."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 1,
  "q": "kubelet 은 systemd 서비스로 실행되며 journalctl -u kubelet 으로 로그를 본다.",
  "a": true,
  "e": "kubeadm 환경 기준."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "systemctl start kubelet 만으로 재부팅 후에도 kubelet 이 자동 시작된다.",
  "a": false,
  "e": "enable 필요."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "kubelet 의 systemd 드롭인을 수정한 뒤에는 daemon-reload 가 필요하다.",
  "a": true,
  "e": "그 후 restart."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "노드 Ready 조건이 Unknown 이면 kubelet 이 상태 보고를 멈춘 것이다.",
  "a": true,
  "e": "kubelet 중지·네트워크 단절."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 3,
  "q": "노드가 NotReady 가 되면 그 노드의 Pod 는 즉시 다른 노드로 재생성된다.",
  "a": false,
  "e": "기본 300초 톨러레이션 후 축출."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 1,
  "q": "Service 의 Endpoint 가 비어 있으면 selector·label 을 먼저 확인한다.",
  "a": true,
  "e": "Ready Pod 여부도."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 2,
  "q": "ClusterIP 에 ping 응답이 없으면 반드시 Service 장애다.",
  "a": false,
  "e": "가상 IP — 포트로 테스트."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 2,
  "q": "CoreDNS Pod 는 k8s-app=kube-dns 라벨을 가진다.",
  "a": true,
  "e": "호환성 라벨."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 3,
  "q": "kube-proxy 가 ipvs 모드면 ipvsadm -Ln 으로 가상 서버 규칙을 확인할 수 있다.",
  "a": true,
  "e": "iptables 모드는 iptables -t nat."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "kubectl top 은 metrics-server 없이도 동작한다.",
  "a": false,
  "e": "Metrics API 필요."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "kubectl logs --previous 는 재시작 이전 컨테이너의 로그를 보여준다.",
  "a": true,
  "e": "-p 와 같다."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "쿠버네티스 이벤트는 기본적으로 영구 보존된다.",
  "a": false,
  "e": "기본 1시간."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 1,
  "q": "JSONPath 로 목록의 모든 항목을 가리킬 때 .items[*] 를 쓴다.",
  "a": true,
  "e": "단일 객체는 .items 없이."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 2,
  "q": "custom-columns 의 경로에는 .items[*] 를 앞에 붙여야 한다.",
  "a": false,
  "e": "객체 기준 경로."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 3,
  "q": "JSONPath range 구문에서 {\"\\n\"} 를 생략해도 항목마다 줄이 바뀐다.",
  "a": false,
  "e": "명시해야 줄바꿈."
 }
];

CPPG.fill = [
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "Kubernetes 클러스터 상태를 저장하는 분산 Key-Value 저장소는?",
  "a": "etcd",
  "k": [
   "etcd"
  ],
  "e": "Raft 합의 · 2379/2380."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 1,
  "q": "모든 API 요청의 진입점인 Control Plane 구성요소는?",
  "a": "kube-apiserver",
  "k": [
   "apiserver"
  ],
  "e": "인증 → 인가 → Admission."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 2,
  "q": "kubeadm 의 Static Pod manifest 기본 디렉터리는?",
  "a": "/etc/kubernetes/manifests",
  "k": [
   "etckubernetesmanifests"
  ],
  "e": "kubelet staticPodPath."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 2,
  "q": "CRI 호환 런타임의 컨테이너 목록을 보는 노드 명령은?",
  "a": "crictl ps",
  "k": [
   "crictl ps"
  ],
  "e": "crictl pods · crictl logs."
 },
 {
  "s": "s1",
  "t": "클러스터 구성요소",
  "d": 3,
  "q": "kubeadm Control Plane 에서 Static Pod 로 실행되는 4가지 구성요소를 쓰시오.",
  "a": "kube-apiserver, etcd, kube-scheduler, kube-controller-manager",
  "k": [
   "apiserver",
   "etcd",
   "scheduler",
   "controller-manager"
  ],
  "e": "kubelet 은 systemd 서비스."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "첫 Control Plane 에서 업그레이드 가능 버전을 확인하는 명령은?",
  "a": "kubeadm upgrade plan",
  "k": [
   "kubeadm upgrade plan"
  ],
  "e": "이후 kubeadm upgrade apply."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "Worker 노드에서 kubeadm 패키지 업그레이드 후 실행하는 kubeadm 명령은?",
  "a": "kubeadm upgrade node",
  "k": [
   "kubeadm upgrade node"
  ],
  "e": "첫 Control Plane 만 apply."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "노드 node01 에서 DaemonSet 을 무시하고 Pod 를 축출하는 명령은?",
  "a": "kubectl drain node01 --ignore-daemonsets",
  "k": [
   "kubectl drain",
   "node01",
   "ignore-daemonsets"
  ],
  "e": "단독 Pod 는 --force."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 1,
  "q": "유지보수가 끝난 노드 node01 을 다시 스케줄 가능하게 하는 명령은?",
  "a": "kubectl uncordon node01",
  "k": [
   "uncordon",
   "node01"
  ],
  "e": "cordon 의 반대."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 2,
  "q": "Worker 조인용 명령 전체를 새 토큰과 함께 출력하는 명령은?",
  "a": "kubeadm token create --print-join-command",
  "k": [
   "kubeadm token create",
   "print-join-command"
  ],
  "e": "토큰 기본 24시간."
 },
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 3,
  "q": "kubelet 패키지 업그레이드 후 실행할 systemd 명령 2가지를 순서대로 쓰시오.",
  "a": "systemctl daemon-reload, systemctl restart kubelet",
  "k": [
   "daemon-reload",
   "restart kubelet"
  ],
  "e": "그다음 uncordon."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 1,
  "q": "etcd 스냅샷을 저장하는 etcdctl 하위 명령은?",
  "a": "snapshot save",
  "k": [
   "snapshot save"
  ],
  "e": "복원은 snapshot restore."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcdctl TLS 인증에 필요한 세 옵션을 쓰시오.",
  "a": "--cacert, --cert, --key",
  "k": [
   "cacert",
   "cert",
   "key"
  ],
  "e": "+ --endpoints."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 3,
  "q": "etcd 스냅샷 복원 시 새 데이터 디렉터리를 지정하는 옵션은?",
  "a": "--data-dir",
  "k": [
   "data-dir"
  ],
  "e": "이후 etcd.yaml hostPath 변경."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcd 7대 클러스터가 허용하는 최대 장애 노드 수는?",
  "a": "3",
  "k": [
   "3"
  ],
  "e": "과반 4대."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 2,
  "q": "kubeadm 인증서 만료일을 확인하는 명령은?",
  "a": "kubeadm certs check-expiration",
  "k": [
   "certs check-expiration"
  ],
  "e": "갱신은 kubeadm certs renew all."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 2,
  "q": "사용자 jane 의 CSR 을 승인하는 명령은?",
  "a": "kubectl certificate approve jane",
  "k": [
   "certificate approve",
   "jane"
  ],
  "e": "거부는 certificate deny."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 3,
  "q": "API 클라이언트 인증서용 CSR 의 signerName 은?",
  "a": "kubernetes.io/kube-apiserver-client",
  "k": [
   "kube-apiserver-client"
  ],
  "e": "usages: client auth."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 1,
  "q": "네임스페이스 범위 권한을 정의하는 RBAC 리소스는?",
  "a": "Role",
  "k": [
   "role"
  ],
  "e": "클러스터 범위는 ClusterRole."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 2,
  "q": "ServiceAccount app-sa 의 토큰을 발급하는 명령은?",
  "a": "kubectl create token app-sa",
  "k": [
   "create token",
   "app-sa"
  ],
  "e": "v1.24+."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 3,
  "q": "jane 이 dev 네임스페이스에서 pods 를 list 할 수 있는지 확인하는 명령은?",
  "a": "kubectl auth can-i list pods --as jane -n dev",
  "k": [
   "auth can-i",
   "list pods",
   "as jane"
  ],
  "e": "SA 는 --as system:serviceaccount:ns:이름."
 },
 {
  "s": "s1",
  "t": "RBAC·ServiceAccount",
  "d": 3,
  "q": "RBAC 에서 ServiceAccount 주체를 지정하는 rolebinding 옵션 형식은?",
  "a": "--serviceaccount=네임스페이스:이름",
  "k": [
   "serviceaccount"
  ],
  "e": "예 --serviceaccount=dev:app-sa."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 1,
  "q": "현재 컨텍스트를 prod 로 바꾸는 명령은?",
  "a": "kubectl config use-context prod",
  "k": [
   "use-context",
   "prod"
  ],
  "e": "조회는 current-context."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 2,
  "q": "kubeconfig 를 구성하는 세 목록을 쓰시오.",
  "a": "clusters, users, contexts",
  "k": [
   "clusters",
   "users",
   "contexts"
  ],
  "e": "+ current-context."
 },
 {
  "s": "s1",
  "t": "kubeconfig·kubectl",
  "d": 3,
  "q": "kubectl config 로 현재 컨텍스트의 기본 네임스페이스를 dev 로 지정하는 명령을 쓰시오.",
  "a": "kubectl config set-context --current --namespace=dev",
  "k": [
   "set-context",
   "current",
   "namespace=dev"
  ],
  "e": "use-context 와 구분."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 2,
  "q": "Helm 릴리스 web 을 리비전 3 으로 되돌리는 명령은?",
  "a": "helm rollback web 3",
  "k": [
   "helm rollback",
   "web 3"
  ],
  "e": "이력은 helm history web."
 },
 {
  "s": "s1",
  "t": "Helm·Kustomize",
  "d": 2,
  "q": "Kustomize 디렉터리를 적용하는 kubectl 옵션은?",
  "a": "-k",
  "k": [
   "k"
  ],
  "e": "kubectl apply -k 디렉터리."
 },
 {
  "s": "s1",
  "t": "확장·Admission",
  "d": 2,
  "q": "사용자 정의 리소스를 API 에 등록하는 오브젝트의 약어는?",
  "a": "CRD",
  "k": [
   "crd"
  ],
  "e": "CustomResourceDefinition."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 1,
  "q": "web Deployment 를 replicas 5 로 늘리는 명령을 쓰시오.",
  "a": "kubectl scale deployment web --replicas=5",
  "k": [
   "scale",
   "deployment",
   "replicas=5"
  ],
  "e": "선언형이면 YAML 의 replicas 수정 후 apply."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "web Deployment 를 리비전 2 로 롤백하는 명령을 쓰시오.",
  "a": "kubectl rollout undo deployment/web --to-revision=2",
  "k": [
   "rollout",
   "undo",
   "torevision=2"
  ],
  "e": "history 로 리비전 번호를 먼저 확인."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "Deployment 의 기본 배포 전략 이름은?",
  "a": "RollingUpdate",
  "k": [
   "rollingupdate"
  ],
  "e": "다른 하나는 Recreate."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "롤링 업데이트 중 replicas 보다 추가로 만들 수 있는 Pod 수를 정하는 필드는?",
  "a": "maxSurge",
  "k": [
   "maxsurge"
  ],
  "e": "기본 25%."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 1,
  "q": "매니페스트를 실제로 만들지 않고 YAML 로 출력하는 옵션 조합을 쓰시오.",
  "a": "--dry-run=client -o yaml",
  "k": [
   "dryrun=client",
   "oyaml"
  ],
  "e": "파일로 저장해 수정한다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 1,
  "q": "node01 에 env=prod:NoSchedule taint 를 추가하는 명령을 쓰시오.",
  "a": "kubectl taint nodes node01 env=prod:NoSchedule",
  "k": [
   "taint",
   "node01",
   "env=prod:noschedule"
  ],
  "e": "끝에 - 를 붙이면 제거."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "기존 Pod 까지 축출하는 taint 효과는?",
  "a": "NoExecute",
  "k": [
   "noexecute"
  ],
  "e": "tolerationSeconds 로 유예."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "kubeadm 클러스터에서 static pod 매니페스트의 기본 디렉터리는?",
  "a": "/etc/kubernetes/manifests",
  "k": [
   "etckubernetesmanifests"
  ],
  "e": "kubelet 설정의 staticPodPath 로 확인."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "Pod 를 지정한 스케줄러로 배치하려면 spec 의 어느 필드를 쓰는가?",
  "a": "schedulerName",
  "k": [
   "schedulername"
  ],
  "e": "기본값 default-scheduler."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 3,
  "q": "nodeAffinity 의 필수 조건 필드 이름을 쓰시오.",
  "a": "requiredDuringSchedulingIgnoredDuringExecution",
  "k": [
   "requiredduringschedulingignoredduringexecution"
  ],
  "e": "선호 조건은 preferredDuringSchedulingIgnoredDuringExecution."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 3,
  "q": "레플리카를 노드마다 분산할 때 podAntiAffinity 에 쓰는 topologyKey 값은?",
  "a": "kubernetes.io/hostname",
  "k": [
   "kubernetesiohostname"
  ],
  "e": "존 단위는 topology.kubernetes.io/zone."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "API 요청이 인증 다음에 거치는 세 단계를 순서대로 쓰시오.",
  "a": "인가, Mutating Admission, Validating Admission",
  "k": [
   "인가",
   "mutating",
   "validating"
  ],
  "e": "그 뒤 etcd 저장."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 1,
  "q": "requests·limits 가 전혀 없는 Pod 의 QoS 클래스는?",
  "a": "BestEffort",
  "k": [
   "besteffort"
  ],
  "e": "가장 먼저 축출."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "QoS 클래스 3가지를 모두 쓰시오.",
  "a": "Guaranteed, Burstable, BestEffort",
  "k": [
   "guaranteed",
   "burstable",
   "besteffort"
  ],
  "e": "requests = limits 면 Guaranteed."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "네임스페이스 컨테이너별 기본 requests·limits 를 정하는 객체는?",
  "a": "LimitRange",
  "k": [
   "limitrange"
  ],
  "e": "총량 제한은 ResourceQuota."
 },
 {
  "s": "s2",
  "t": "자원·QoS",
  "d": 2,
  "q": "컨테이너가 메모리 limit 을 넘었을 때의 종료 사유는?",
  "a": "OOMKilled",
  "k": [
   "oomkilled"
  ],
  "e": "CPU 초과는 스로틀링."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 1,
  "q": "Pod spec 에서 이미지의 CMD 를 덮어쓰는 필드는?",
  "a": "args",
  "k": [
   "args"
  ],
  "e": "ENTRYPOINT 는 command."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 2,
  "q": "app-cm ConfigMap 을 MODE=prod 키로 만드는 명령을 쓰시오.",
  "a": "kubectl create configmap app-cm --from-literal=MODE=prod",
  "k": [
   "configmap",
   "appcm",
   "fromliteral=mode=prod"
  ],
  "e": "--from-file · --from-env-file 도 가능."
 },
 {
  "s": "s2",
  "t": "설정 주입",
  "d": 2,
  "q": "etcd 의 Secret 암호화 설정 파일을 지정하는 kube-apiserver 옵션은?",
  "a": "--encryption-provider-config",
  "k": [
   "encryptionproviderconfig"
  ],
  "e": "EncryptionConfiguration 파일 경로."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 1,
  "q": "web Deployment 에 CPU 50% 기준, 최소 2·최대 10 HPA 를 만드는 명령을 쓰시오.",
  "a": "kubectl autoscale deployment web --cpu-percent=50 --min=2 --max=10",
  "k": [
   "autoscale",
   "cpupercent=50",
   "min=2",
   "max=10"
  ],
  "e": "metrics-server 와 requests 필요."
 },
 {
  "s": "s2",
  "t": "오토스케일링·멀티컨테이너",
  "d": 2,
  "q": "Pod 의 requests·limits 자체를 추천·조정하는 오토스케일러 약어는?",
  "a": "VPA",
  "k": [
   "vpa"
  ],
  "e": "Vertical Pod Autoscaler — 별도 설치."
 },
 {
  "s": "s2",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "kubectl top 이 사용하는 지표를 제공하는 구성요소는?",
  "a": "metrics-server",
  "k": [
   "metricsserver"
  ],
  "e": "Metrics API."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 1,
  "q": "Service 의 기본 type 은?",
  "a": "ClusterIP",
  "k": [
   "clusterip"
  ],
  "e": "type 생략 시 적용."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 1,
  "q": "NodePort 의 기본 포트 범위는? (예: 0-0 형식)",
  "a": "30000-32767",
  "k": [
   "30000",
   "32767"
  ],
  "e": "--service-node-port-range 기본값."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "Service 가 트래픽을 넘길 Pod 컨테이너 포트를 지정하는 필드 이름은?",
  "a": "targetPort",
  "k": [
   "targetport"
  ],
  "e": "생략 시 port 와 같다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "Service web-svc 의 Endpoint 목록을 확인하는 명령은?",
  "a": "kubectl get endpoints web-svc",
  "k": [
   "get",
   "endpoints",
   "websvc"
  ],
  "e": "비었으면 selector·label 확인."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 3,
  "q": "Deployment web 을 port 80, targetPort 8080 의 NodePort Service 로 노출하는 명령은?",
  "a": "kubectl expose deployment web --port=80 --target-port=8080 --type=NodePort",
  "k": [
   "expose",
   "deployment",
   "port=80",
   "targetport=8080",
   "type=nodeport"
  ],
  "e": "expose 는 대상 selector 를 그대로 사용."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "가상 IP 없이 DNS 가 Pod IP 를 직접 반환하는 Service 를 만들 때 clusterIP 값은?",
  "a": "None",
  "k": [
   "none"
  ],
  "e": "Headless Service."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 3,
  "q": "kube-proxy 모드 중 v1.26 에서 제거된 모드는?",
  "a": "userspace",
  "k": [
   "userspace"
  ],
  "e": "현재 iptables · ipvs · nftables."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 1,
  "q": "쿠버네티스 기본 클러스터 DNS 서버는?",
  "a": "CoreDNS",
  "k": [
   "coredns"
  ],
  "e": "Service 이름은 kube-dns."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 2,
  "q": "dev 네임스페이스 Service db 의 FQDN 은?",
  "a": "db.dev.svc.cluster.local",
  "k": [
   "db",
   "dev",
   "svc",
   "clusterlocal"
  ],
  "e": "<svc>.<ns>.svc.cluster.local."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 2,
  "q": "CoreDNS 설정을 담은 kube-system 의 ConfigMap 이름은?",
  "a": "coredns",
  "k": [
   "coredns"
  ],
  "e": "Corefile 키."
 },
 {
  "s": "s3",
  "t": "CoreDNS·DNS",
  "d": 3,
  "q": "Pod 의 /etc/resolv.conf 에 기본으로 들어가는 ndots 값은?",
  "a": "5",
  "k": [
   "5"
  ],
  "e": "options ndots:5."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 1,
  "q": "CNI 플러그인 바이너리의 기본 디렉터리는?",
  "a": "/opt/cni/bin",
  "k": [
   "opt",
   "cni",
   "bin"
  ],
  "e": "설정은 /etc/cni/net.d."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 2,
  "q": "Pod CIDR 을 지정하는 kube-controller-manager 옵션은?",
  "a": "--cluster-cidr",
  "k": [
   "clustercidr"
  ],
  "e": "노드별 spec.podCIDR 할당."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 3,
  "q": "Service CIDR 을 지정하는 kube-apiserver 옵션은?",
  "a": "--service-cluster-ip-range",
  "k": [
   "serviceclusteriprange"
  ],
  "e": "Pod CIDR 과 겹치지 않게."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 2,
  "q": "eBPF 기반으로 동작하는 대표적 CNI 플러그인은?",
  "a": "Cilium",
  "k": [
   "cilium"
  ],
  "e": "NetworkPolicy·L7 정책 지원."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 1,
  "q": "NetworkPolicy 의 대상 Pod 를 고르는 spec 필드는?",
  "a": "podSelector",
  "k": [
   "podselector"
  ],
  "e": "빈 값 {} 은 전체."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 2,
  "q": "NetworkPolicy 의 방향을 지정하는 필드와 두 값을 쓰시오.",
  "a": "policyTypes: Ingress, Egress",
  "k": [
   "policytypes",
   "ingress",
   "egress"
  ],
  "e": "생략 시 Ingress(egress 규칙 있으면 Egress 포함)."
 },
 {
  "s": "s3",
  "t": "NetworkPolicy",
  "d": 3,
  "q": "네임스페이스 이름으로 선택할 때 쓰는 자동 라벨 키는?",
  "a": "kubernetes.io/metadata.name",
  "k": [
   "kubernetesio",
   "metadataname"
  ],
  "e": "v1.22+ 자동 부여."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 1,
  "q": "Ingress 를 처리할 컨트롤러를 지정하는 spec 필드는?",
  "a": "ingressClassName",
  "k": [
   "ingressclassname"
  ],
  "e": "IngressClass 이름."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "Ingress pathType 3종을 쓰시오.",
  "a": "Exact, Prefix, ImplementationSpecific",
  "k": [
   "exact",
   "prefix",
   "implementationspecific"
  ],
  "e": "v1 에서 필수."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "Gateway API 의 세 핵심 리소스를 상위부터 쓰시오.",
  "a": "GatewayClass, Gateway, HTTPRoute",
  "k": [
   "gatewayclass",
   "gateway",
   "httproute"
  ],
  "e": "인프라 → 운영자 → 개발자."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 3,
  "q": "HTTPRoute 에서 연결할 Gateway 를 지정하는 필드는?",
  "a": "parentRefs",
  "k": [
   "parentrefs"
  ],
  "e": "백엔드는 backendRefs."
 },
 {
  "s": "s4",
  "t": "볼륨",
  "d": 1,
  "q": "Pod 수명 동안만 존재하는 임시 볼륨 유형은?",
  "a": "emptyDir",
  "k": [
   "emptydir"
  ],
  "e": "medium: Memory 면 tmpfs."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 1,
  "q": "PV·PVC 의 Access Mode 4가지 약어를 모두 쓰시오.",
  "a": "RWO, ROX, RWX, RWOP",
  "k": [
   "rwo",
   "rox",
   "rwx",
   "rwop"
  ],
  "e": "RWO 는 노드 단위, RWOP 는 Pod 단위."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "한 Pod 만 읽기·쓰기할 수 있는 Access Mode 의 전체 이름은?",
  "a": "ReadWriteOncePod",
  "k": [
   "readwriteoncepod"
  ],
  "e": "RWOP."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "Retain 정책 PV 의 PVC 를 삭제한 뒤 PV 상태는?",
  "a": "Released",
  "k": [
   "released"
  ],
  "e": "claimRef 제거 후 재사용."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "PV 회수 정책 3가지를 쓰시오.",
  "a": "Retain, Delete, Recycle",
  "k": [
   "retain",
   "delete",
   "recycle"
  ],
  "e": "Recycle 은 deprecated."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 3,
  "q": "Released PV 의 이전 PVC 연결 정보를 지우는 patch 명령의 필드 경로는?",
  "a": "spec.claimRef",
  "k": [
   "specclaimref"
  ],
  "e": "kubectl patch pv pv1 -p '{\"spec\":{\"claimRef\":null}}'."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "Pod 에서 PVC 이름을 지정하는 필드는?",
  "a": "persistentVolumeClaim.claimName",
  "k": [
   "persistentvolumeclaimclaimname"
  ],
  "e": "volumes 아래에 정의."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 1,
  "q": "Pod 가 스케줄될 때까지 볼륨 바인딩을 미루는 volumeBindingMode 값은?",
  "a": "WaitForFirstConsumer",
  "k": [
   "waitforfirstconsumer"
  ],
  "e": "기본값은 Immediate."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "PVC 확장을 허용하는 StorageClass 필드는?",
  "a": "allowVolumeExpansion",
  "k": [
   "allowvolumeexpansion"
  ],
  "e": "true 로 설정."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 2,
  "q": "기본 StorageClass 를 지정하는 annotation 키는?",
  "a": "storageclass.kubernetes.io/is-default-class",
  "k": [
   "storageclasskubernetesioisdefaultclass"
  ],
  "e": "값 \"true\"."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 3,
  "q": "local PV 용 StorageClass 의 provisioner 값은?",
  "a": "kubernetes.io/no-provisioner",
  "k": [
   "kubernetesionoprovisioner"
  ],
  "e": "WaitForFirstConsumer 와 함께."
 },
 {
  "s": "s4",
  "t": "CSI·스토리지 기초",
  "d": 2,
  "q": "Container Storage Interface 의 약어는?",
  "a": "CSI",
  "k": [
   "csi"
  ],
  "e": "네트워크는 CNI, 런타임은 CRI."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "재시작된 컨테이너의 직전 로그를 보는 kubectl logs 옵션은?",
  "a": "--previous",
  "k": [
   "previous"
  ],
  "e": "-p 와 같다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "memory limit 초과로 종료된 컨테이너의 Reason 은?",
  "a": "OOMKilled",
  "k": [
   "oomkilled"
  ],
  "e": "Exit Code 137."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "OOMKilled 컨테이너의 종료 코드는?",
  "a": "137",
  "k": [
   "137"
  ],
  "e": "128 + SIGKILL(9)."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 2,
  "q": "실패 시 컨테이너를 재시작하게 하는 probe 이름은?",
  "a": "livenessProbe",
  "k": [
   "livenessprobe"
  ],
  "e": "readiness 는 Endpoint 제외."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "Pod web 의 컨테이너 app 에 busybox 디버그 컨테이너를 붙이는 명령은?",
  "a": "kubectl debug -it web --image=busybox --target=app",
  "k": [
   "debug",
   "image=busybox",
   "target=app"
  ],
  "e": "ephemeral container."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 3,
  "q": "Deployment web 의 컨테이너 web 이미지를 nginx:1.27 로 바꾸는 명령은?",
  "a": "kubectl set image deployment/web web=nginx:1.27",
  "k": [
   "set",
   "image",
   "deployment",
   "web=nginx:127"
  ],
  "e": "Pod 직접 수정은 반영되지 않는다."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 1,
  "q": "kubeadm 정적 Pod 매니페스트의 기본 디렉터리는?",
  "a": "/etc/kubernetes/manifests",
  "k": [
   "etc",
   "kubernetes",
   "manifests"
  ],
  "e": "kubelet staticPodPath."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "kubeadm 인증서가 저장된 디렉터리는?",
  "a": "/etc/kubernetes/pki",
  "k": [
   "pki"
  ],
  "e": "apiserver.crt 등."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 2,
  "q": "containerd 환경에서 종료된 컨테이너까지 보는 명령은?",
  "a": "crictl ps -a",
  "k": [
   "crictl",
   "ps",
   "a"
  ],
  "e": "로그는 crictl logs <id>."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "kubelet 설정 파일에서 정적 Pod 경로를 지정하는 필드는?",
  "a": "staticPodPath",
  "k": [
   "staticpodpath"
  ],
  "e": "/var/lib/kubelet/config.yaml."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "etcd 클라이언트 기본 포트는?",
  "a": "2379",
  "k": [
   "2379"
  ],
  "e": "피어는 2380."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 1,
  "q": "kubelet 서비스 로그를 보는 명령은?",
  "a": "journalctl -u kubelet",
  "k": [
   "journalctl",
   "u",
   "kubelet"
  ],
  "e": "-f 로 실시간."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "kubelet 을 재부팅 후에도 자동 시작하게 하는 명령은?",
  "a": "systemctl enable kubelet",
  "k": [
   "systemctl",
   "enable",
   "kubelet"
  ],
  "e": "즉시 시작은 start."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "systemd 유닛·드롭인 변경을 다시 읽게 하는 명령은?",
  "a": "systemctl daemon-reload",
  "k": [
   "daemonreload"
  ],
  "e": "그 후 restart."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 3,
  "q": "kubelet 의 KubeletConfiguration 파일 기본 경로는?",
  "a": "/var/lib/kubelet/config.yaml",
  "k": [
   "var",
   "lib",
   "kubelet",
   "configyaml"
  ],
  "e": "kubeconfig 는 /etc/kubernetes/kubelet.conf."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 3,
  "q": "NotReady 노드의 Pod 가 축출되기까지 기본 tolerationSeconds 값은?",
  "a": "300",
  "k": [
   "300"
  ],
  "e": "not-ready·unreachable 톨러레이션."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 1,
  "q": "Service 의 대상 Pod IP 목록을 보는 리소스 이름은?",
  "a": "endpoints",
  "k": [
   "endpoints"
  ],
  "e": "kubectl get endpoints <svc>."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 2,
  "q": "CoreDNS Pod 를 고르는 라벨은?",
  "a": "k8s-app=kube-dns",
  "k": [
   "k8sapp=kubedns"
  ],
  "e": "kube-system 네임스페이스."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 3,
  "q": "iptables 모드 kube-proxy 가 Service 규칙을 두는 nat 테이블의 체인 이름은?",
  "a": "KUBE-SERVICES",
  "k": [
   "kubeservices"
  ],
  "e": "iptables -t nat -L KUBE-SERVICES."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 1,
  "q": "kubectl top 에 필요한 애드온은?",
  "a": "metrics-server",
  "k": [
   "metricsserver"
  ],
  "e": "Metrics API 제공."
 },
 {
  "s": "s5",
  "t": "로깅·모니터링",
  "d": 2,
  "q": "메모리 사용량 순으로 Pod 를 보는 명령은?",
  "a": "kubectl top pods --sort-by=memory",
  "k": [
   "top",
   "pods",
   "sortby=memory"
  ],
  "e": "cpu 도 가능."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 2,
  "q": "모든 노드 이름을 출력하는 JSONPath 식은?",
  "a": "{.items[*].metadata.name}",
  "k": [
   "items[*]",
   "metadataname"
  ],
  "e": "kubectl get nodes -o jsonpath='...'."
 },
 {
  "s": "s5",
  "t": "JSONPath·출력 가공",
  "d": 3,
  "q": "생성 시각 순 정렬 옵션을 쓰시오.",
  "a": "--sort-by=.metadata.creationTimestamp",
  "k": [
   "sortby=",
   "metadatacreationtimestamp"
  ],
  "e": "JSONPath 필드 지정."
 }
];

CPPG.order = [
 {
  "s": "s1",
  "t": "설치·업그레이드",
  "d": 3,
  "q": "첫 Control Plane 노드의 kubeadm 업그레이드 순서를 나열하시오.",
  "steps": [
   "kubeadm 패키지 업그레이드",
   "kubeadm upgrade plan",
   "kubeadm upgrade apply v1.x.y",
   "kubectl drain (--ignore-daemonsets)",
   "kubelet·kubectl 패키지 업그레이드",
   "systemctl daemon-reload · restart kubelet",
   "kubectl uncordon"
  ],
  "e": "kubeadm 먼저, kubelet 은 drain 후 교체."
 },
 {
  "s": "s1",
  "t": "etcd 백업·복구",
  "d": 2,
  "q": "etcd 스냅샷 복원 절차를 순서대로 나열하시오.",
  "steps": [
   "etcd.yaml 에서 인증서·데이터 경로 확인",
   "snapshot restore --data-dir=새 디렉터리",
   "etcd.yaml 의 etcd-data hostPath 를 새 디렉터리로 수정",
   "kubelet 이 etcd Static Pod 재생성",
   "crictl ps · kubectl get pods 로 복구 확인"
  ],
  "e": "기존 디렉터리에 덮어쓰지 않는다."
 },
 {
  "s": "s1",
  "t": "확장·Admission",
  "d": 2,
  "q": "kube-apiserver 의 요청 처리 단계를 순서대로 나열하시오.",
  "steps": [
   "인증(Authentication)",
   "인가(Authorization · RBAC)",
   "Mutating Admission",
   "Validating Admission",
   "etcd 저장"
  ],
  "e": "변형이 검증보다 먼저."
 },
 {
  "s": "s1",
  "t": "인증·인증서",
  "d": 3,
  "q": "새 사용자 jane 에게 클라이언트 인증서를 발급하는 절차를 순서대로 나열하시오.",
  "steps": [
   "openssl genrsa 로 개인키 생성",
   "openssl req 로 CSR 생성(CN=jane)",
   "CertificateSigningRequest 오브젝트 생성",
   "kubectl certificate approve jane",
   "status.certificate 를 base64 디코드해 인증서 저장",
   "kubectl config set-credentials 로 kubeconfig 등록"
  ],
  "e": "권한은 별도로 RBAC 부여."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 2,
  "q": "Static Pod 를 특정 노드에 만드는 절차를 순서대로 나열하시오.",
  "steps": [
   "노드에 접속(ssh node01)",
   "ps -ef | grep kubelet 으로 --config 파일 확인",
   "설정 파일의 staticPodPath 확인",
   "해당 디렉터리에 Pod 매니페스트 작성",
   "kubectl get pods 로 이름-노드명 미러 Pod 확인"
  ],
  "e": "kubelet 이 디렉터리를 감시해 자동으로 실행한다."
 },
 {
  "s": "s2",
  "t": "스케줄링 제어",
  "d": 3,
  "q": "스케줄러가 Pod 를 노드에 배치하는 과정을 순서대로 나열하시오.",
  "steps": [
   "스케줄링 큐에서 Pod 꺼냄",
   "필터링(Filter) — 조건 불충족 노드 제외",
   "점수(Score) — 남은 노드 순위",
   "최고 점수 노드 선택",
   "바인딩(Bind) — Pod 에 nodeName 기록",
   "kubelet 이 컨테이너 실행"
  ],
  "e": "taint·affinity·자원 부족은 Filter 단계에서 걸러진다."
 },
 {
  "s": "s2",
  "t": "파드·디플로이먼트",
  "d": 2,
  "q": "이미지 업데이트 후 문제가 생겨 롤백하는 절차를 순서대로 나열하시오.",
  "steps": [
   "kubectl set image 로 이미지 변경",
   "kubectl rollout status 로 진행 확인",
   "문제 발견 시 kubectl rollout history 로 리비전 확인",
   "kubectl rollout undo --to-revision=N 실행",
   "kubectl rollout status 로 복구 확인"
  ],
  "e": "롤백도 새 리비전으로 기록된다."
 },
 {
  "s": "s3",
  "t": "Service",
  "d": 2,
  "q": "Service 로 트래픽이 가지 않을 때 점검 순서를 나열하시오.",
  "steps": [
   "kubectl get endpoints <svc> 로 Endpoint 존재 확인",
   "Service selector 와 Pod label 비교",
   "targetPort 와 컨테이너 포트 비교",
   "임시 Pod 에서 DNS 이름·ClusterIP 로 접속 테스트",
   "NetworkPolicy 차단 여부 확인"
  ],
  "e": "안쪽(Endpoint)부터 바깥(정책)으로."
 },
 {
  "s": "s3",
  "t": "Ingress·Gateway API",
  "d": 2,
  "q": "Gateway API 리소스를 상위(인프라)부터 하위(라우팅)까지 나열하시오.",
  "steps": [
   "GatewayClass — 컨트롤러 종류",
   "Gateway — 리스너·포트",
   "HTTPRoute — 호스트·경로·백엔드",
   "Service — 실제 Pod 그룹"
  ],
  "e": "역할 분리 계층."
 },
 {
  "s": "s3",
  "t": "CNI·Pod 네트워크",
  "d": 3,
  "q": "Pod 생성 시 네트워크가 구성되는 순서를 나열하시오.",
  "steps": [
   "스케줄러가 노드 배정",
   "kubelet 이 컨테이너 런타임에 Pod 샌드박스 생성 요청",
   "런타임이 /etc/cni/net.d 설정으로 CNI 플러그인 호출",
   "CNI 가 veth 생성·IP 할당(IPAM)·라우팅 설정",
   "애플리케이션 컨테이너 시작"
  ],
  "e": "pause(샌드박스)가 네트워크 네임스페이스를 먼저 가진다."
 },
 {
  "s": "s4",
  "t": "PV·PVC",
  "d": 2,
  "q": "정적 프로비저닝으로 Pod 가 영구 볼륨을 쓰기까지의 순서를 나열하시오.",
  "steps": [
   "관리자가 PV 생성(Available)",
   "사용자가 PVC 생성",
   "조건이 맞는 PV 와 1:1 바인딩(Bound)",
   "Pod 의 volumes 에 claimName 지정",
   "컨테이너 volumeMounts 로 경로에 마운트"
  ],
  "e": "용량·accessModes·storageClassName 이 맞아야 바인딩된다."
 },
 {
  "s": "s4",
  "t": "StorageClass·동적 프로비저닝",
  "d": 3,
  "q": "WaitForFirstConsumer StorageClass 에서 볼륨이 만들어지는 순서를 나열하시오.",
  "steps": [
   "PVC 생성 — Pending(소비자 대기)",
   "PVC 를 쓰는 Pod 생성",
   "스케줄러가 Pod 의 노드 결정",
   "provisioner 가 그 노드·존에 맞춰 PV 생성",
   "PVC 바인딩 후 kubelet 이 마운트"
  ],
  "e": "노드·존 불일치를 막는 것이 목적이다."
 },
 {
  "s": "s5",
  "t": "애플리케이션 장애",
  "d": 1,
  "q": "Pod 장애 진단의 일반적인 순서를 나열하시오.",
  "steps": [
   "kubectl get pod -o wide 로 상태·재시작·노드 확인",
   "kubectl describe pod 로 Events·Exit Code 확인",
   "kubectl logs (재시작 시 --previous)",
   "kubectl exec 또는 kubectl debug 로 내부 확인",
   "원인 리소스(Deployment·ConfigMap 등) 수정"
  ],
  "e": "요약 → 이벤트 → 로그 → 내부 → 수정."
 },
 {
  "s": "s5",
  "t": "컨트롤 플레인 장애",
  "d": 3,
  "q": "kube-apiserver 가 응답하지 않을 때 복구 순서를 나열하시오.",
  "steps": [
   "컨트롤 플레인 노드 접속",
   "crictl ps -a 로 apiserver 컨테이너 상태 확인",
   "crictl logs 또는 /var/log/pods 로 오류 확인",
   "/etc/kubernetes/manifests/kube-apiserver.yaml 오류 수정",
   "kubelet 재생성 대기 후 kubectl get nodes 로 확인"
  ],
  "e": "kubectl 없이 런타임에서 진단."
 },
 {
  "s": "s5",
  "t": "워커 노드 장애",
  "d": 2,
  "q": "NotReady 워커 노드 복구 순서를 나열하시오.",
  "steps": [
   "kubectl describe node 로 Conditions 확인",
   "노드에 ssh 접속",
   "systemctl status kubelet 확인",
   "journalctl -u kubelet 으로 원인 확인",
   "설정 수정 후 daemon-reload·restart·enable",
   "kubectl get nodes 로 Ready 확인"
  ],
  "e": "kubelet 이 노드 상태 보고 주체."
 },
 {
  "s": "s5",
  "t": "서비스·네트워크 장애",
  "d": 2,
  "q": "Pod 에서 Service 이름 접속이 안 될 때 점검 순서를 나열하시오.",
  "steps": [
   "nslookup 으로 이름 해석 확인",
   "CoreDNS Pod·kube-dns Endpoint 확인",
   "kubectl get endpoints 로 대상 Pod 확인",
   "targetPort 와 컨테이너 포트 확인",
   "NetworkPolicy 확인"
  ],
  "e": "이름 → DNS → Endpoint → 포트 → 정책."
 }
];

CPPG.selfcheck = [
 {
  "g": "아키텍처",
  "t": "컨트롤 플레인 구성요소와 역할을 말하고 static pod 매니페스트 위치를 안다"
 },
 {
  "g": "아키텍처",
  "t": "etcdctl snapshot save·restore 를 인증서 옵션까지 정확히 쓴다"
 },
 {
  "g": "아키텍처",
  "t": "kubeadm 업그레이드 순서(컨트롤 플레인 → 노드, drain·uncordon)를 수행한다"
 },
 {
  "g": "아키텍처",
  "t": "Role·RoleBinding·ClusterRole 을 만들고 kubectl auth can-i 로 검증한다"
 },
 {
  "g": "아키텍처",
  "t": "Helm 설치·업그레이드·롤백과 Kustomize overlay 를 사용한다"
 },
 {
  "g": "워크로드",
  "t": "Deployment 이미지 변경·롤아웃 상태 확인·롤백을 명령으로 수행한다"
 },
 {
  "g": "워크로드",
  "t": "taint·toleration·nodeAffinity·nodeSelector 차이를 설명하고 적용한다"
 },
 {
  "g": "워크로드",
  "t": "ConfigMap·Secret 을 환경변수·볼륨으로 주입한다"
 },
 {
  "g": "워크로드",
  "t": "requests·limits·LimitRange·ResourceQuota 를 구분한다"
 },
 {
  "g": "네트워킹",
  "t": "Service 유형 4가지와 selector·Endpoint 관계를 설명한다"
 },
 {
  "g": "네트워킹",
  "t": "Service·Pod 의 DNS FQDN 을 쓴다"
 },
 {
  "g": "네트워킹",
  "t": "NetworkPolicy 의 ingress·egress·podSelector·namespaceSelector 를 작성한다"
 },
 {
  "g": "네트워킹",
  "t": "Ingress·Gateway API 리소스 구성을 설명한다"
 },
 {
  "g": "스토리지",
  "t": "PV·PVC 바인딩 조건과 접근 모드·반환 정책을 설명한다"
 },
 {
  "g": "스토리지",
  "t": "StorageClass 동적 프로비저닝과 WaitForFirstConsumer 를 설명한다"
 },
 {
  "g": "트러블슈팅",
  "t": "Pod 상태(Pending·CrashLoopBackOff·ImagePullBackOff)별 원인을 찾는다"
 },
 {
  "g": "트러블슈팅",
  "t": "컨트롤 플레인 장애를 static pod 매니페스트·로그로 진단한다"
 },
 {
  "g": "트러블슈팅",
  "t": "노드 NotReady 를 systemctl·journalctl 로 진단해 복구한다"
 },
 {
  "g": "트러블슈팅",
  "t": "Service 엔드포인트 없음·DNS 실패·NetworkPolicy 차단을 진단한다"
 }
];

CPPG.roadmap = {
 "8주 표준": [
  "Week 1 — 아키텍처·Core Concepts·kubectl 기본(imperative·dry-run)",
  "Week 2 — 스케줄링·리소스·DaemonSet·Static Pod",
  "Week 3 — 애플리케이션 수명주기(롤링·ConfigMap·Secret·HPA)",
  "Week 4 — 클러스터 유지보수(업그레이드·etcd 백업/복구)",
  "Week 5 — 보안(TLS·kubeconfig·RBAC·ServiceAccount)·Helm·Kustomize",
  "Week 6 — 스토리지 + 네트워킹(Service·DNS·NetworkPolicy·Ingress·Gateway API)",
  "Week 7 — 트러블슈팅 집중(앱·컨트롤 플레인·노드·네트워크)",
  "Week 8 — 모의 실습(Killer.sh 등) 2회 + 예시문제 반복"
 ],
 "시험 3일 전": [
  "D-3 — etcd 백업·복구 / kubeadm 업그레이드 손으로 1회",
  "D-2 — RBAC·NetworkPolicy·PV/PVC YAML 백지 작성",
  "D-1 — 트러블슈팅 시나리오 + 단축 설정 연습"
 ]
};

CPPG.tiers = {
 "Tier 1 ★★★ (매 회 출제)": [
  "etcd 백업·복구",
  "kubeadm 업그레이드",
  "RBAC",
  "Deployment 롤링·롤백",
  "taint·toleration·affinity",
  "Service·Endpoint",
  "NetworkPolicy",
  "PV·PVC·StorageClass",
  "Pod 장애 진단",
  "컨트롤 플레인·kubelet 장애",
  "노드 NotReady"
 ],
 "Tier 2 ★★ (자주 출제)": [
  "ServiceAccount·토큰",
  "kubeconfig·context",
  "ConfigMap·Secret",
  "Static Pod",
  "DaemonSet",
  "리소스 제한·Quota",
  "Ingress",
  "Gateway API",
  "CoreDNS",
  "Helm",
  "Kustomize",
  "JSONPath·custom-columns"
 ],
 "Tier 3 ★ (변별)": [
  "CRD·Operator",
  "Admission Controller",
  "PriorityClass",
  "멀티 스케줄러",
  "HPA·VPA",
  "CSI",
  "CNI 플러그인"
 ]
};

CPPG.examples = [
 {
  "s": "s1",
  "d": 3,
  "title": "[실습] etcd 스냅샷 백업과 복원",
  "problem": "Control Plane 노드에서 다음을 수행하시오.\n① https://127.0.0.1:2379 의 etcd 를 /opt/etcd-backup.db 로 백업한다(인증서는 /etc/kubernetes/pki/etcd 아래).\n② 백업을 /var/lib/etcd-from-backup 으로 복원하고 클러스터가 그 데이터를 사용하게 한다.",
  "steps": [
   "etcd.yaml 에서 --trusted-ca-file · --cert-file · --key-file · --listen-client-urls 확인",
   "인증서 3종과 endpoint 로 snapshot save",
   "새 data-dir 로 restore",
   "etcd.yaml 의 etcd-data hostPath 수정",
   "etcd Pod 재생성 확인"
  ],
  "answer": "ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 \\\n  --cacert=/etc/kubernetes/pki/etcd/ca.crt \\\n  --cert=/etc/kubernetes/pki/etcd/server.crt \\\n  --key=/etc/kubernetes/pki/etcd/server.key \\\n  snapshot save /opt/etcd-backup.db\n\netcdutl snapshot restore /opt/etcd-backup.db --data-dir=/var/lib/etcd-from-backup\n# (구버전) ETCDCTL_API=3 etcdctl snapshot restore /opt/etcd-backup.db --data-dir=/var/lib/etcd-from-backup\n\n# /etc/kubernetes/manifests/etcd.yaml\n  volumes:\n  - hostPath:\n      path: /var/lib/etcd-from-backup\n      type: DirectoryOrCreate\n    name: etcd-data\n\ncrictl ps | grep etcd ; kubectl get pods -n kube-system",
  "traps": [
   "인증서 옵션 없이 save 해 TLS 오류",
   "기존 /var/lib/etcd 에 덮어써 데이터 손상",
   "--data-dir 만 바꾸고 hostPath 를 안 바꿔 반영 안 됨"
  ]
 },
 {
  "s": "s1",
  "d": 3,
  "title": "[실습] Control Plane 과 Worker 를 v1.31 로 업그레이드",
  "problem": "v1.30.x 클러스터(controlplane, node01)를 v1.31.x 로 업그레이드하시오. 업그레이드 중 node01 의 워크로드는 다른 노드로 옮긴다.",
  "steps": [
   "controlplane: kubeadm 업그레이드 → plan → apply",
   "controlplane drain → kubelet·kubectl → restart → uncordon",
   "node01: kubeadm 업그레이드 → kubeadm upgrade node",
   "node01 drain(Control Plane 에서) → kubelet·kubectl → restart → uncordon"
  ],
  "answer": "# controlplane\napt-mark unhold kubeadm && apt-get update && apt-get install -y kubeadm='1.31.x-*' && apt-mark hold kubeadm\nkubeadm upgrade plan\nkubeadm upgrade apply v1.31.x\nkubectl drain controlplane --ignore-daemonsets\napt-mark unhold kubelet kubectl && apt-get install -y kubelet='1.31.x-*' kubectl='1.31.x-*' && apt-mark hold kubelet kubectl\nsystemctl daemon-reload && systemctl restart kubelet\nkubectl uncordon controlplane\n\n# node01 (ssh)\napt-mark unhold kubeadm && apt-get install -y kubeadm='1.31.x-*' && apt-mark hold kubeadm\nkubeadm upgrade node\n# (controlplane 에서) kubectl drain node01 --ignore-daemonsets\napt-mark unhold kubelet kubectl && apt-get install -y kubelet='1.31.x-*' kubectl='1.31.x-*' && apt-mark hold kubelet kubectl\nsystemctl daemon-reload && systemctl restart kubelet\n# (controlplane 에서) kubectl uncordon node01",
  "traps": [
   "Worker 를 먼저 업그레이드",
   "node01 에서 kubeadm upgrade apply 실행",
   "kubelet 재시작 누락으로 버전이 그대로",
   "uncordon 누락으로 노드가 SchedulingDisabled 로 남음",
   "패키지 저장소가 이전 Minor 를 가리켜 새 버전이 안 보임 [확인필요: 환경별 저장소 설정]"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "[실습] 사용자 RBAC — dev 네임스페이스 Pod 읽기 전용",
  "problem": "사용자 jane 에게 dev 네임스페이스의 Pod 를 get · list · watch 만 할 수 있는 권한을 주고, 동작을 확인하시오.",
  "steps": [
   "Role 생성(verb·resource)",
   "RoleBinding 으로 jane 연결",
   "auth can-i 로 허용·거부 확인"
  ],
  "answer": "kubectl create role pod-reader --verb=get,list,watch --resource=pods -n dev\nkubectl create rolebinding jane-pod-reader --role=pod-reader --user=jane -n dev\nkubectl auth can-i list pods --as jane -n dev     # yes\nkubectl auth can-i delete pods --as jane -n dev   # no\nkubectl auth can-i list pods --as jane -n default # no",
  "traps": [
   "ClusterRoleBinding 으로 연결해 모든 네임스페이스에 권한 부여",
   "-n dev 누락으로 default 에 생성",
   "verb 에 * 사용으로 과다 권한"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "[실습] ServiceAccount 에 Deployment 관리 권한 부여",
  "problem": "ops 네임스페이스에 ServiceAccount deploy-bot 을 만들고, 같은 네임스페이스의 deployments 를 create · update · get · list 할 수 있게 하시오. 그리고 그 SA 의 토큰을 발급하시오.",
  "steps": [
   "SA 생성",
   "apps 그룹 deployments 권한 Role 생성",
   "--serviceaccount=ops:deploy-bot 으로 RoleBinding",
   "can-i 확인 · kubectl create token"
  ],
  "answer": "kubectl create sa deploy-bot -n ops\nkubectl create role deploy-mgr --verb=create,update,get,list --resource=deployments -n ops\nkubectl create rolebinding deploy-bot-mgr --role=deploy-mgr --serviceaccount=ops:deploy-bot -n ops\nkubectl auth can-i create deployments --as system:serviceaccount:ops:deploy-bot -n ops   # yes\nkubectl create token deploy-bot -n ops",
  "traps": [
   "--user=deploy-bot 으로 지정해 SA 에 적용 안 됨",
   "Role YAML 직접 작성 시 apiGroups 를 \"\" 로 둬 deployments 권한이 안 생김",
   "v1.24+ 인데 자동 토큰 Secret 을 찾음"
  ]
 },
 {
  "s": "s1",
  "d": 2,
  "title": "[실습] Helm 설치·업그레이드·롤백",
  "problem": "bitnami 저장소의 nginx 차트를 web 네임스페이스에 릴리스 이름 site 로 replicaCount=2 로 설치하고, replicaCount=3 으로 업그레이드한 뒤 처음 리비전으로 되돌리시오.",
  "steps": [
   "repo add · update",
   "install --set replicaCount=2 --create-namespace",
   "upgrade --set replicaCount=3",
   "history 로 리비전 확인 후 rollback"
  ],
  "answer": "helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nhelm install site bitnami/nginx -n web --create-namespace --set replicaCount=2\nhelm upgrade site bitnami/nginx -n web --set replicaCount=3\nhelm history site -n web\nhelm rollback site 1 -n web\nhelm list -n web",
  "traps": [
   "-n 누락으로 다른 네임스페이스에서 릴리스를 못 찾음",
   "upgrade 시 차트 이름 생략",
   "helm rollback 의 리비전 번호를 history 로 확인하지 않음"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "[실습] Deployment 생성 · 업데이트 · 롤백",
  "problem": "namespace default 에 nginx-deploy Deployment 를 nginx:1.25 이미지, replicas 3 으로 만들고 nginx:1.27 로 업데이트한 뒤 다시 이전 버전으로 되돌리시오. 컨테이너 이름은 nginx 이다.\n① kubectl create deployment nginx-deploy --image=nginx:1.25 --replicas=3 후 set image 와 rollout undo\n② kubectl run nginx-deploy --image=nginx:1.25 --replicas=3 후 edit\n③ YAML 의 replicas 를 0 으로 바꿔 재배포\n④ kubectl rollout restart 로 이전 버전 복구",
  "steps": [
   "create deployment 로 생성",
   "set image 의 형식은 컨테이너이름=이미지",
   "rollout status 로 완료 확인",
   "rollout undo 로 직전 리비전 복구"
  ],
  "answer": "① —\nkubectl create deployment nginx-deploy --image=nginx:1.25 --replicas=3\nkubectl set image deployment/nginx-deploy nginx=nginx:1.27\nkubectl rollout status deployment/nginx-deploy\nkubectl rollout undo deployment/nginx-deploy\nkubectl rollout history deployment/nginx-deploy   # 리비전 3 이 nginx:1.25",
  "traps": [
   "kubectl run 에는 --replicas 옵션이 없다(Pod 하나만 생성)",
   "rollout restart 는 같은 버전으로 Pod 를 재생성할 뿐 롤백이 아니다"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "[실습] 전용 노드 — Taint · Toleration · nodeAffinity",
  "problem": "node01 에만 gpu 워크로드를 실행하려 한다. node01 에 taint gpu=true:NoSchedule 과 라벨 accel=gpu 를 추가하고, gpu-pod(image: nginx)가 반드시 node01 에만 배치되도록 하시오.\n① taint + 라벨 추가, Pod 에 toleration 과 nodeAffinity(required) 지정\n② Pod 에 toleration 만 지정\n③ Pod 에 nodeSelector 만 지정\n④ node01 을 cordon",
  "steps": [
   "taint 로 다른 Pod 의 진입 차단",
   "toleration 으로 gpu-pod 진입 허용",
   "nodeAffinity 로 gpu-pod 를 node01 로 유인",
   "배치 결과 kubectl get pod -o wide 로 확인"
  ],
  "answer": "① —\nkubectl taint nodes node01 gpu=true:NoSchedule\nkubectl label nodes node01 accel=gpu\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: gpu-pod\nspec:\n  tolerations:\n  - key: gpu\n    operator: Equal\n    value: \"true\"\n    effect: NoSchedule\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: accel\n            operator: In\n            values: [\"gpu\"]\n  containers:\n  - name: nginx\n    image: nginx",
  "traps": [
   "toleration 만 주면 다른 노드에도 배치될 수 있다",
   "nodeSelector 만 주면 taint 때문에 Pending",
   "cordon 은 모든 신규 Pod 를 막는다"
  ]
 },
 {
  "s": "s2",
  "d": 2,
  "title": "[실습] node01 에 Static Pod 만들기",
  "problem": "node01 에 static-busybox 라는 static pod(image: busybox, command: sleep 3600)를 만드시오.\n① node01 에 접속해 kubelet 설정의 staticPodPath 에 매니페스트 작성\n② 컨트롤 플레인에서 kubectl apply -f\n③ kube-scheduler 매니페스트에 추가\n④ DaemonSet 으로 생성",
  "steps": [
   "ssh node01",
   "kubelet --config 파일에서 staticPodPath 확인",
   "dry-run 으로 YAML 생성 후 해당 경로에 저장",
   "컨트롤 플레인에서 static-busybox-node01 확인"
  ],
  "answer": "① —\nssh node01\nps -ef | grep kubelet            # --config=/var/lib/kubelet/config.yaml\ngrep staticPodPath /var/lib/kubelet/config.yaml   # 예: /etc/kubernetes/manifests\nkubectl run static-busybox --image=busybox --dry-run=client -o yaml --command -- sleep 3600 > /etc/kubernetes/manifests/static-busybox.yaml\nexit\nkubectl get pods -o wide          # static-busybox-node01",
  "traps": [
   "kubectl apply 로 만든 Pod 는 static pod 가 아니다",
   "node01 에는 kubectl 이 없을 수 있다 — 다른 노드에서 dry-run 후 파일 내용 복사"
  ]
 },
 {
  "s": "s2",
  "d": 3,
  "title": "[실습] ConfigMap · Secret 주입",
  "problem": "app-cm(MODE=prod)과 app-sec(DB_PASS=s3cr3t)를 만들고, app-pod(image: nginx)에서 app-cm 의 모든 키를 환경변수로, app-sec 을 /etc/secret 에 읽기 전용 볼륨으로 마운트하시오.\n① envFrom.configMapRef + volumes.secret + volumeMounts readOnly\n② env 에 value: MODE=prod 하드코딩\n③ Secret 을 ConfigMap 으로 생성\n④ app-sec 을 envFrom 으로 주입하고 볼륨은 생략",
  "steps": [
   "create configmap / create secret generic 으로 생성",
   "envFrom 으로 ConfigMap 전체 키 주입",
   "Secret 볼륨 + volumeMounts readOnly: true",
   "kubectl exec 로 env · 파일 확인"
  ],
  "answer": "① —\nkubectl create configmap app-cm --from-literal=MODE=prod\nkubectl create secret generic app-sec --from-literal=DB_PASS=s3cr3t\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: app-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    envFrom:\n    - configMapRef:\n        name: app-cm\n    volumeMounts:\n    - name: sec\n      mountPath: /etc/secret\n      readOnly: true\n  volumes:\n  - name: sec\n    secret:\n      secretName: app-sec\n---\nkubectl exec app-pod -- env | grep MODE\nkubectl exec app-pod -- cat /etc/secret/DB_PASS",
  "traps": [
   "volumes.secret 의 키는 secretName(ConfigMap 은 name)",
   "Secret 파일 내용은 디코딩된 평문으로 보인다"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[실습] Deployment 를 NodePort 로 노출",
  "problem": "default 네임스페이스의 Deployment web(컨테이너 포트 8080, label app=web)을 Service web-svc 로 노출하라.\n- 유형 NodePort, Service 포트 80, nodePort 30080\n- 노출 후 노드에서 curl 로 확인",
  "steps": [
   "expose 로 기본 Service 생성(selector 자동)",
   "nodePort 는 expose 옵션이 없으므로 edit 로 지정",
   "Endpoint 확인"
  ],
  "answer": "kubectl expose deployment web --name=web-svc --port=80 --target-port=8080 --type=NodePort\nkubectl edit svc web-svc   # spec.ports[0].nodePort: 30080\nkubectl get endpoints web-svc\ncurl http://<노드IP>:30080",
  "traps": [
   "create service nodeport 를 쓰면 selector 가 app=web-svc 로 생겨 Endpoint 가 비는 실수",
   "--target-port 를 빼서 80 으로 전달되는 실수"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[실습] DB 접근 제한 NetworkPolicy",
  "problem": "prod 네임스페이스의 app=db Pod 는 같은 네임스페이스의 app=api Pod 에서 TCP 5432 로만 접근을 허용하고 나머지 Ingress 는 모두 차단하라.",
  "steps": [
   "대상 = podSelector app=db, 방향 Ingress",
   "from = podSelector app=api (같은 네임스페이스)",
   "ports 5432/TCP",
   "다른 정책이 db 를 허용하지 않는지 확인"
  ],
  "answer": "apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: db-allow-api\n  namespace: prod\nspec:\n  podSelector:\n    matchLabels:\n      app: db\n  policyTypes:\n  - Ingress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          app: api\n    ports:\n    - protocol: TCP\n      port: 5432",
  "traps": [
   "namespace 를 빼서 default 에 생성하는 실수",
   "from 에 namespaceSelector 를 따로 '-' 로 추가해 OR 로 넓어지는 실수"
  ]
 },
 {
  "s": "s3",
  "d": 2,
  "title": "[실습] 경로 기반 Ingress",
  "problem": "IngressClass nginx 를 사용해 host shop.example.com 의 /api 는 api-svc:80, /web 은 web-svc:80 으로 보내는 Ingress shop 을 만들어라(Prefix 일치).",
  "steps": [
   "kubectl get ingressclass 로 클래스 이름 확인",
   "명령형 create ingress 에 rule 2개",
   "describe 로 backend 확인"
  ],
  "answer": "kubectl create ingress shop --class=nginx \\\n  --rule=\"shop.example.com/api*=api-svc:80\" \\\n  --rule=\"shop.example.com/web*=web-svc:80\"\nkubectl describe ingress shop",
  "traps": [
   "* 를 빼서 Exact 로 생성돼 /api/v1 이 404 가 되는 실수",
   "ingressClassName 누락으로 컨트롤러가 무시하는 실수"
  ]
 },
 {
  "s": "s3",
  "d": 3,
  "title": "[실습] Gateway API HTTPRoute 트래픽 분할",
  "problem": "web 네임스페이스에 Gateway web-gw(이미 존재)가 있다. host app.example.com 요청을 Service app-v1:80 에 90%, app-v2:80 에 10% 로 보내는 HTTPRoute app-route 를 작성하라.",
  "steps": [
   "parentRefs 로 Gateway 연결",
   "hostnames 지정",
   "backendRefs 두 개와 weight 90/10"
  ],
  "answer": "apiVersion: gateway.networking.k8s.io/v1\nkind: HTTPRoute\nmetadata:\n  name: app-route\n  namespace: web\nspec:\n  parentRefs:\n  - name: web-gw\n  hostnames:\n  - app.example.com\n  rules:\n  - backendRefs:\n    - name: app-v1\n      port: 80\n      weight: 90\n    - name: app-v2\n      port: 80\n      weight: 10",
  "traps": [
   "parentRefs 대신 gatewayClassName 을 쓰는 실수",
   "apiVersion 을 networking.k8s.io/v1 로 쓰는 실수"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "[실습] PV · PVC · Pod 연결",
  "problem": "hostPath /mnt/data 를 쓰는 1Gi PV pv-log(RWO, Retain, storageClassName manual)를 만들고, 500Mi PVC pvc-log 와 /log 에 마운트하는 Pod log-pod(image: busybox, sleep 3600)를 만드시오.\n① PV·PVC 의 storageClassName 을 manual 로 맞추고 Pod 에서 claimName 참조\n② PVC 에 storageClassName 생략\n③ PV 를 네임스페이스에 생성\n④ PVC 용량을 1Gi 보다 크게 요청",
  "steps": [
   "PV — capacity · accessModes · reclaimPolicy · storageClassName · hostPath",
   "PVC — accessModes · requests.storage · storageClassName 일치",
   "Pod — volumes.persistentVolumeClaim + volumeMounts",
   "kubectl get pv,pvc 로 Bound 확인"
  ],
  "answer": "① —\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-log\nspec:\n  capacity:\n    storage: 1Gi\n  accessModes: [\"ReadWriteOnce\"]\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: manual\n  hostPath:\n    path: /mnt/data\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-log\nspec:\n  accessModes: [\"ReadWriteOnce\"]\n  storageClassName: manual\n  resources:\n    requests:\n      storage: 500Mi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: log-pod\nspec:\n  containers:\n  - name: app\n    image: busybox\n    command: [\"sleep\", \"3600\"]\n    volumeMounts:\n    - name: log\n      mountPath: /log\n  volumes:\n  - name: log\n    persistentVolumeClaim:\n      claimName: pvc-log",
  "traps": [
   "storageClassName 을 생략하면 기본 StorageClass 로 동적 프로비저닝을 시도해 pv-log 와 바인딩되지 않을 수 있다",
   "PVC CAPACITY 는 1Gi 로 표시된다"
  ]
 },
 {
  "s": "s4",
  "d": 3,
  "title": "[실습] WaitForFirstConsumer StorageClass",
  "problem": "local-sc StorageClass(provisioner kubernetes.io/no-provisioner, WaitForFirstConsumer)를 만들고 이 클래스를 쓰는 PVC 를 만들었더니 Pending 이다. 상태를 해석하고 바인딩시키는 방법을 쓰시오.\n① 정상 대기 — PVC 를 쓰는 Pod 를 만들면 스케줄 후 바인딩(정적 local PV 필요)\n② 오류 — StorageClass 를 Immediate 로 바꿔야 한다\n③ 오류 — PVC 를 삭제 후 재생성\n④ 오류 — kube-scheduler 재시작",
  "steps": [
   "describe pvc 의 이벤트 확인(waiting for first consumer)",
   "no-provisioner 는 PV 를 만들지 않으므로 nodeAffinity 가 있는 local PV 를 미리 준비",
   "Pod 생성 → 스케줄 → 바인딩"
  ],
  "answer": "① —\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: local-sc\nprovisioner: kubernetes.io/no-provisioner\nvolumeBindingMode: WaitForFirstConsumer\n---\nkubectl describe pvc data-pvc   # waiting for first consumer to be created before binding\n# local PV(nodeAffinity 로 노드 지정)를 준비한 뒤 PVC 를 쓰는 Pod 를 생성하면 Bound",
  "traps": [
   "WaitForFirstConsumer 의 Pending 은 오류가 아니다",
   "no-provisioner 는 동적 생성이 없으므로 PV 가 없으면 Pod 도 Pending"
  ]
 },
 {
  "s": "s4",
  "d": 2,
  "title": "[실습] PVC 용량 확장과 Released PV 재사용",
  "problem": "(가) StorageClass fast 로 만든 PVC app-data(1Gi)를 2Gi 로 늘리시오. (나) Retain 정책 PV pv-old 가 Released 상태다. 새 PVC 와 다시 바인딩되게 하시오.\n① (가) allowVolumeExpansion 확인 후 PVC requests.storage 를 2Gi 로 수정 / (나) claimRef 제거\n② (가) PVC 삭제 후 2Gi 로 재생성 / (나) reclaimPolicy 를 Delete 로 변경\n③ (가) PV capacity 만 수정 / (나) PV 삭제\n④ (가) StorageClass 삭제 후 재생성 / (나) 노드 재부팅",
  "steps": [
   "kubectl get sc fast -o yaml 로 allowVolumeExpansion: true 확인",
   "kubectl edit pvc app-data 의 spec.resources.requests.storage 를 2Gi",
   "Released PV 는 claimRef 에 이전 PVC 가 남아 있음",
   "patch 로 claimRef 제거 → Available"
  ],
  "answer": "① —\nkubectl get sc fast -o jsonpath=\"{.allowVolumeExpansion}\"\nkubectl patch pvc app-data -p '{\"spec\":{\"resources\":{\"requests\":{\"storage\":\"2Gi\"}}}}'\nkubectl get pvc app-data -w\n---\nkubectl patch pv pv-old -p '{\"spec\":{\"claimRef\":null}}'\nkubectl get pv pv-old    # STATUS Available",
  "traps": [
   "PVC 재생성은 동적 PV(Delete)라면 데이터가 사라진다",
   "PVC 축소는 불가",
   "claimRef 제거 전 남은 데이터 정리 여부를 판단"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "[실습] CrashLoopBackOff Pod 복구",
  "problem": "default 네임스페이스의 Deployment api 의 Pod 가 CrashLoopBackOff 다. 원인을 찾아 고쳐라.\n(힌트: 직전 컨테이너 로그에 \"/app/server: no such file or directory\")",
  "steps": [
   "kubectl get pod -l app=api",
   "kubectl logs <pod> --previous 로 직전 로그 확인",
   "kubectl get deploy api -o yaml 로 command 확인",
   "command 오타 수정"
  ],
  "answer": "kubectl logs <pod> --previous\nkubectl edit deployment api   # command: [\"/app/serve\"] → 실제 실행 파일 경로로 수정\nkubectl rollout status deployment api",
  "traps": [
   "Pod 를 직접 edit 해 다시 원래대로 돌아오는 실수",
   "--previous 없이 logs 를 봐 새 컨테이너 로그만 보는 실수"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "[실습] Endpoint 가 빈 Service",
  "problem": "Service web-svc 로 접속이 안 된다. kubectl get endpoints web-svc 결과가 <none> 이다. Deployment web 의 Pod label 은 app=web-frontend 다. 해결하라.",
  "steps": [
   "Service selector 확인 — app=web",
   "Pod label 과 비교",
   "Service selector 를 Pod label 에 맞게 수정",
   "Endpoint 재확인"
  ],
  "answer": "kubectl get svc web-svc -o jsonpath='{.spec.selector}'\nkubectl edit svc web-svc   # selector: app: web-frontend\nkubectl get endpoints web-svc",
  "traps": [
   "Pod label 을 바꿔 다른 Service·정책까지 영향을 주는 실수",
   "targetPort 만 의심하고 selector 를 놓치는 실수"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "[실습] kube-apiserver 매니페스트 장애",
  "problem": "controlplane 노드에서 kubectl 이 \"connection to the server ...:6443 was refused\" 를 낸다. 누군가 kube-apiserver 매니페스트를 수정했다. 복구하라.",
  "steps": [
   "kubectl 대신 crictl 로 상태 확인",
   "crictl logs 또는 /var/log/pods 에서 오류 메시지 확인",
   "매니페스트의 오타(이미지 태그·플래그·경로) 수정",
   "kubelet 재생성 대기 후 확인"
  ],
  "answer": "ssh controlplane\ncrictl ps -a | grep kube-apiserver\ncrictl logs <container-id>          # 예: unknown flag: --etcd-server\nvi /etc/kubernetes/manifests/kube-apiserver.yaml   # --etcd-servers 로 수정\nwatch crictl ps                     # apiserver Running 확인\nkubectl get nodes",
  "traps": [
   "kubectl apply 로 매니페스트를 적용하려는 실수",
   "수정 직후 바로 실패로 판단해 다른 파일까지 건드리는 실수"
  ]
 },
 {
  "s": "s5",
  "d": 2,
  "title": "[실습] NotReady 워커 노드",
  "problem": "node01 이 NotReady 다. 원인을 찾아 Ready 로 만들고 재부팅 후에도 유지되게 하라.",
  "steps": [
   "describe node 로 Conditions 확인(Ready Unknown)",
   "ssh node01 → systemctl status kubelet (inactive)",
   "journalctl -u kubelet 로 오류 여부 확인",
   "start + enable"
  ],
  "answer": "kubectl describe node node01\nssh node01\nsystemctl status kubelet\njournalctl -u kubelet --no-pager | tail\nsystemctl start kubelet && systemctl enable kubelet\nexit\nkubectl get nodes",
  "traps": [
   "enable 을 빼서 재부팅 후 다시 NotReady 가 되는 실수",
   "설정 오류인데 restart 만 반복하는 실수 — 로그부터 확인"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "[실습] Pending Pod — 스케줄러 장애",
  "problem": "새로 만든 Pod 가 모두 Pending 이고 NODE 가 <none>, Events 가 비어 있다. 원인을 찾아 해결하라.",
  "steps": [
   "Events 가 없다 = 스케줄러가 판단 자체를 안 함",
   "kubectl -n kube-system get pods 로 kube-scheduler 상태 확인",
   "scheduler 로그·매니페스트 확인",
   "오류 수정 후 Pod 가 배정되는지 확인"
  ],
  "answer": "kubectl -n kube-system get pods | grep scheduler\nkubectl -n kube-system logs kube-scheduler-controlplane\nvi /etc/kubernetes/manifests/kube-scheduler.yaml   # 예: 잘못된 --kubeconfig 경로·이미지 태그 수정\nkubectl get pods -o wide",
  "traps": [
   "Insufficient cpu 로 착각해 requests 를 바꾸는 실수 — FailedScheduling 이벤트가 없다면 스케줄러 문제",
   "kube-scheduler Pod 를 delete 만 하고 매니페스트를 고치지 않는 실수"
  ]
 },
 {
  "s": "s5",
  "d": 3,
  "title": "[실습] DNS 해석 실패",
  "problem": "모든 Pod 에서 nslookup kubernetes.default 가 실패한다. CoreDNS Pod 는 Running 이다. 원인을 찾아 해결하라.",
  "steps": [
   "임시 Pod 로 증상 재현",
   "kube-dns Service 의 Endpoint 확인 → 비어 있음",
   "kube-dns Service selector 와 CoreDNS Pod 라벨 비교",
   "selector 를 k8s-app=kube-dns 로 수정"
  ],
  "answer": "kubectl run t --rm -it --image=busybox:1.28 -- nslookup kubernetes.default\nkubectl -n kube-system get endpoints kube-dns\nkubectl -n kube-system get pods --show-labels | grep coredns\nkubectl -n kube-system edit svc kube-dns   # selector: k8s-app: kube-dns\nkubectl run t2 --rm -it --image=busybox:1.28 -- nslookup kubernetes.default",
  "traps": [
   "CoreDNS 가 Running 이라 DNS 는 정상이라고 단정하는 실수",
   "Corefile 만 의심해 Endpoint 를 놓치는 실수"
  ]
 }
];
