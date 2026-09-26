export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillItem = {
  name: string;
  level: SkillLevel;
  years?: string;
  note?: string;
};

export type CareerItem = {
  period: string;
  title: string;
  org: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  role: string;
  stack: string;
  summary: string;
};

export const profile = {
  nameJa: "小林 宗明",
  nameEn: "Somin Kobayashi",
  title: "フルスタック Web エンジニア / 代表取締役",
  company: "株式会社ニーモニック",
  location: "東京都大田区",
  email: "somin@mnemonic.co.jp",
  website: "https://www.mnemonic.co.jp",
  github: "https://github.com/mnemonic-co-jp",
  birth: "1968年 / 京都府舞鶴市",
  photo: "/profile.jpg",
  updatedAt: "2026年9月26日 03:58",
};

export const summary = {
  headline: "企画から実装・運用までを一人で回す、実務型フルスタック。",
  body: [
    "1995年頃からウェブデザイン・システム開発・サーバ管理を主戦場とし、制作会社勤務を経て 2010 年にフリーランスへ復帰。2014 年に株式会社ニーモニックを設立し、ウェブサイトの企画制作・デザイン・業務システムの開発を一貫して担っています。",
    "フロントは Angular（現行 15〜22）/ Vue / AngularJS・TypeScript、バックは Python（FastAPI / Django / Flask / webapp2）と Go、インフラは GCP（GAE / Cloud Run）と AWS を中心に、位置情報・店舗検索・B2B 業務 Web まで設計・実装・運用しています。加えて React / Next.js は約 1 年半の自主練を続けており、案件への投入も可能な状態です。",
  ],
};

export const frontendSkills: SkillItem[] = [
  {
    name: "Angular / TypeScript",
    level: 5,
    years: "現行",
    note: "Angular 15〜22（自社サイト・Cloud Run 案件）で SPA / 管理画面を構築。strict TypeScript",
  },
  {
    name: "AngularJS",
    level: 5,
    years: "長期",
    note: "B2B ポータル・店舗検索・商圏分析での SPA 設計・長期運用（Vue / Angular への移行含む）",
  },
  {
    name: "Vue.js",
    level: 4,
    years: "2019〜",
    note: "Vue 2（Webpack）での大規模フロント刷新。Vue 3 / Astro 連携の経験あり",
  },
  {
    name: "React / Next.js",
    level: 3,
    years: "約1年半",
    note: "実務リポジトリ外での継続的な自主練。Hooks・App Router 等を習得し、案件投入可能な状態",
  },
  {
    name: "HTML / CSS / SCSS",
    level: 5,
    years: "1995〜",
    note: "レスポンシブ、モバイルフレンドリー、制作案件の土台",
  },
  {
    name: "Bootstrap / ng-bootstrap",
    level: 4,
    note: "UI 実装と管理画面の構築（Bootstrap 4〜5）",
  },
  {
    name: "JavaScript（ES）",
    level: 5,
    years: "長期",
    note: "クライアントサイド実装全般",
  },
  {
    name: "Google Maps / チャート UI",
    level: 5,
    years: "長期",
    note: "店舗検索・商圏・人流可視化。Maps Platform、Highcharts、D3 の実務",
  },
  {
    name: "Gulp / フロントビルド",
    level: 4,
    note: "依存のバンドル・minify・デプロイ最適化",
  },
  {
    name: "Backbone.js / jQuery",
    level: 3,
    note: "レガシー案件での MVC / DOM 操作経験",
  },
];

export const backendSkills: SkillItem[] = [
  {
    name: "Python / FastAPI",
    level: 5,
    years: "現行",
    note: "Python 3.12 + FastAPI + uvicorn。API / 管理機能・Pydantic によるスキーマ設計",
  },
  {
    name: "Python / Django",
    level: 5,
    years: "2014〜2022",
    note: "Django 1.x〜3.x / DRF。位置分析・店舗検索・商圏分析などの API / 管理画面",
  },
  {
    name: "Go（gorilla/mux 等）",
    level: 4,
    years: "現行",
    note: "GAE Go 上の API・認証付き SPA 配信・Excel 出力・タスク連携",
  },
  {
    name: "Python / Flask",
    level: 4,
    note: "業務システム（請求・外部 CRM 連携など）での API / バッチ",
  },
  {
    name: "MySQL / Redis",
    level: 4,
    note: "Django 系プロダクトの永続化・キャッシュ。GIS 利用経験あり",
  },
  {
    name: "Python / webapp2 / Jinja2",
    level: 5,
    years: "長期",
    note: "GAE Python 2.7 時代からのサーバーサイド実装と移行経験",
  },
  {
    name: "REST API 設計",
    level: 5,
    note: "CRUD、メソッド制約への対応、URI 設計、マルチサービス構成",
  },
  {
    name: "Google Cloud Datastore / NDB",
    level: 5,
    note: "永続化・データモデル設計（Go / Python 双方）",
  },
  {
    name: "Cloud SQL / PostgreSQL",
    level: 4,
    years: "現行",
    note: "SQLAlchemy / Alembic を用いたリレーショナル設計・マイグレーション",
  },
  {
    name: "Memcache / Redis",
    level: 4,
    note: "キャッシュ・セッション、上限超過時の分割格納など",
  },
  {
    name: "認証 / 外部連携",
    level: 4,
    note: "Firebase Auth、OAuth2 / JWT、Zoho CRM、SendGrid / Resend",
  },
  {
    name: "PHP",
    level: 3,
    note: "GAE/PHP、業務ロジック、レガシー連携",
  },
];

export const infraSkills: SkillItem[] = [
  {
    name: "Google App Engine",
    level: 5,
    years: "長期",
    note: "Python / Go ランタイム、dispatch・複数サービス、セキュリティヘッダ、cron / queue",
  },
  {
    name: "Cloud Run",
    level: 4,
    years: "現行",
    note: "コンテナレスデプロイ、Cloud SQL / Tasks / GCS との連携",
  },
  {
    name: "AWS（S3 / RDS / ElastiCache 等）",
    level: 4,
    years: "2015〜2022",
    note: "位置分析系プロダクトの運用。Athena / Redshift / ECR / Docker も利用",
  },
  {
    name: "Cloud Tasks / Cloud Storage",
    level: 4,
    note: "非同期処理・オブジェクトストレージ・帳票／メール送信パイプライン",
  },
  {
    name: "サーバ管理 / Linux",
    level: 4,
    note: "1990 年代後半からのインフラ運用経験",
  },
  {
    name: "Yarn / npm / Pipenv",
    level: 4,
    note: "依存管理とデプロイ前のビルドフロー",
  },
  {
    name: "Git / GitHub",
    level: 4,
    note: "公開・非公開リポジトリでの継続開発",
  },
  {
    name: "Vitest / Playwright / pytest",
    level: 3,
    note: "現行フロントの単体・E2E、Python 側の結合テスト",
  },
  {
    name: "CORS / HTTP 仕様",
    level: 4,
    note: "クロスドメイン通信、メソッド制約の調査・回避",
  },
];

export const projects: ProjectItem[] = [
  {
    name: "人流・位置データ分析 Web",
    role: "設計・実装・移行",
    stack: "Django / Vue 2 / MySQL GIS / AWS / Athena",
    summary:
      "人流・交通データを扱う位置分析 Web。AngularJS から Vue への刷新、Python 3 / コンテナ化を含む。",
  },
  {
    name: "商圏・比較分析 Web",
    role: "設計・実装・移行",
    stack: "Django / Vue 2・AngularJS / Redis / AWS",
    summary:
      "商圏ヒートマップ・比較分析・ユーザーポイント管理。関連分析基盤との SSO / JWT 連携。",
  },
  {
    name: "店舗検索・地図 SaaS",
    role: "設計・実装・運用",
    stack: "Django / AngularJS / GAE / MySQL",
    summary:
      "公開店舗検索と管理コンソール。顧客向けテーマ実装を含む地図ソリューション。",
  },
  {
    name: "再生可能エネルギー向け Web",
    role: "設計・実装・運用",
    stack: "Angular 22 / FastAPI / Cloud Run / PostgreSQL",
    summary:
      "事業者向け会員・地図・運転費用カルテ等。Cloud Run への移行とリレーショナル DB 化を含む。",
  },
  {
    name: "B2B 受発注ポータル（第2世代）",
    role: "モダン化・実装・運用",
    stack: "Angular 15 / FastAPI / GAE / Firebase Auth / Redis",
    summary:
      "代理店向け販売・受発注の次世代版。PDF・外部 CRM 連携・非同期タスクを含む。",
  },
  {
    name: "認証・査定系業務 Web",
    role: "設計・実装",
    stack: "Angular / Go / GAE / Datastore / Excel 出力",
    summary:
      "設問フロー・結果帳票・申込メールまで一気通貫のオンライン自己査定。",
  },
  {
    name: "不動産オペレーション Web",
    role: "設計・実装・運用",
    stack: "Angular / Go / GAE / Redis / Cloud Tasks",
    summary:
      "多段フォームの申込・予約、セッション管理、画像変換、非同期処理。",
  },
  {
    name: "業務システム（請求・ポータル連携）",
    role: "設計・実装・運用",
    stack: "Flask / AngularJS / Go / Zoho / G Suite API",
    summary:
      "請求処理や精算ポータル、Analytics 連携など社内外の業務効率化。",
  },
  {
    name: "自社公式サイト / CMS",
    role: "企画〜運用",
    stack: "Angular 22 / FastAPI / GAE / Datastore",
    summary:
      "オリジナル CMS を長期運用し、Python 3 / Angular へ全面刷新。",
  },
];

export const career: CareerItem[] = [
  {
    period: "2014年2月 〜 現在",
    title: "代表取締役",
    org: "株式会社ニーモニック",
    summary:
      "ウェブサイトの企画制作・デザイン・業務システムの開発を一人体制で提供。GAE 中心の受託開発に加え、近年は FastAPI / Go / Angular 現代化と Cloud Run への展開を進める。",
    highlights: [
      "太陽光・不動産・B2B コマースなどドメイン業務 Web の企画〜実装〜運用",
      "AngularJS / Python 2 から Angular 15〜22 / Python 3.12 / Go への段階的移行",
      "Datastore だけでなく Cloud SQL・Redis・Firebase Auth・外部 CRM を組み合わせた構成",
      "自社公式サイト / CMS の刷新（GAE + FastAPI + Angular 22）と技術知見の公開",
    ],
  },
  {
    period: "2014年頃 〜 2022年頃（以降も断続）",
    title: "開発パートナー / フルスタックエンジニア",
    org: "地図・位置情報系 SaaS 企業向け（ニーモニックとして）",
    summary:
      "位置情報・地図ソリューションを中心に、店舗検索・商圏分析・人流分析プロダクトの設計・実装・モダン化を協力。Django / Vue / AWS を軸に長期参画。",
    highlights: [
      "人流・位置分析 Web のフロント刷新（AngularJS → Vue）とバックエンド現代化",
      "商圏・比較分析 Web の機能開発・Vue 移行・分析基盤連携",
      "店舗検索 SaaS（公開検索・管理コンソール・顧客テーマ）の実装・運用",
      "地図デモ・社内ツール、コーポレートサイト（Astro / HubSpot）など周辺開発",
    ],
  },
  {
    period: "2010年 〜 2014年",
    title: "フリーランス エンジニア / デザイナー",
    org: "個人事業",
    summary:
      "制作会社での経験を活かし、再び独立。ウェブデザインからシステム開発・サーバ管理まで幅広く担当。",
    highlights: [
      "クライアント向けサイトの企画・デザイン・実装",
      "サーバサイド実装とインフラ運用の両立",
    ],
  },
  {
    period: "2000年頃 〜 2010年",
    title: "制作会社所属",
    org: "複数の制作会社",
    summary:
      "ウェブ制作の現場でデザイン・開発を担当。チーム制作と案件実務を通じて、商業ウェブの品質と納期感覚を磨く。",
    highlights: [
      "ウェブサイト制作の実務（企画〜納品）",
      "フロント / バック両方にまたがる実装",
    ],
  },
  {
    period: "1995年頃 〜 2000年頃",
    title: "ウェブデザイン / システム開発 / サーバ管理",
    org: "フリーランス起点",
    summary:
      "ライター・放送作家見習いからインターネット関連業務へシフト。ウェブデザインとシステム開発、サーバ管理が主業務に。",
    highlights: [
      "初期 Web 時代からの実務経験",
      "デザインと開発・運用の横断",
    ],
  },
  {
    period: "1987年 〜 1990年代前半",
    title: "ライター / 放送作家見習い",
    org: "フリーランス",
    summary:
      "19歳で上京。ラジオ番組制作会社のアルバイトなどを経て、フリーのライター＆放送作家見習いとしてキャリアを開始。",
    highlights: [
      "文章・企画の基礎",
      "コミュニケーションを軸にした業務経験",
    ],
  },
];

export const strengths = [
  {
    title: "企画から運用までの一気通貫",
    body: "要件整理・デザイン・フロント・バック・デプロイ・運用まで、小さなチーム（一人）でも完結できる実務力。帳票・メール・外部 API まで含めて設計できる。",
  },
  {
    title: "GCP / AWS 上での実戦経験",
    body: "App Engine・Cloud Run に加え、AWS（S3 / RDS / Redis / Athena 等）での位置情報・業務 SaaS 運用の知見。",
  },
  {
    title: "現行スタックへの継続的な追随",
    body: "AngularJS / Django 系から Angular・Vue・FastAPI・Go への移行に加え、React / Next.js を約 1 年半自主練。案件の技術選定に合わせて投入できる幅がある。",
  },
];

export const learningInterests = [
  "React / Next.js の実務適用と設計パターンの深化",
  "生成 AI を活かしたバックエンド設計・業務自動化",
  "Cloud Run / コンテナ運用のさらなる深化",
];

export const sourcesNote =
  "本スキルシートは、公開プロフィール・技術ブログ、ニーモニック非公開リポジトリ、協力先の地図・位置情報系プロダクト実装に加え、React など実務外の継続的な自主練も含めて構成しています。クライアント名・製品名・機密情報は伏せ、技術スタックと役割の粒度で記載しています。";

export const levelLabels: Record<SkillLevel, string> = {
  1: "基礎",
  2: "補助可",
  3: "実務可",
  4: "自走",
  5: "牽引",
};
