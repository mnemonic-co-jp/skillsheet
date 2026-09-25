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

export const profile = {
  nameJa: "小林 宗明",
  nameEn: "Somin Kobayashi",
  title: "フルスタック Web エンジニア / 代表取締役",
  company: "株式会社ニーモニック",
  location: "東京都品川区",
  email: "somin@mnemonic.co.jp",
  website: "https://www.mnemonic.co.jp",
  github: "https://github.com/mnemonic-co-jp",
  birth: "1968年 / 京都府舞鶴市",
  updatedAt: "2026年9月",
};

export const summary = {
  headline: "企画から実装・運用までを一人で回す、実務型フルスタック。",
  body: [
    "1995年頃からウェブデザイン・システム開発・サーバ管理を主戦場とし、制作会社勤務を経て 2010 年にフリーランスへ復帰。2014 年に株式会社ニーモニックを設立し、ウェブサイトの企画制作・デザイン・システム開発を一貫して担っています。",
    "フロントエンドは Angular（現行）/ AngularJS・TypeScript・Bootstrap 系、バックエンドは Python（FastAPI / webapp2）・PHP、インフラは Google App Engine / Google Cloud を中心に、自社 CMS や業務システムの設計・実装・運用までを手がけてきました。",
  ],
};

export const frontendSkills: SkillItem[] = [
  {
    name: "Angular / TypeScript",
    level: 5,
    years: "現行",
    note: "自社サイトを Angular 22 + TypeScript（strict）で再構築",
  },
  {
    name: "AngularJS",
    level: 5,
    years: "長期",
    note: "$resource、コンポーネント設計、SPA 運用の実務経験",
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
    note: "UI 実装と管理画面の構築",
  },
  {
    name: "JavaScript（ES）",
    level: 5,
    years: "長期",
    note: "クライアントサイド実装全般",
  },
  {
    name: "Backbone.js / jQuery",
    level: 3,
    note: "レガシー案件での MVC / DOM 操作経験",
  },
  {
    name: "Gulp / フロントビルド",
    level: 4,
    note: "依存のバンドル・minify・デプロイ最適化",
  },
  {
    name: "Google Maps API",
    level: 3,
    note: "地図 UI・イベントリスナの実装",
  },
];

export const backendSkills: SkillItem[] = [
  {
    name: "Python / FastAPI",
    level: 5,
    years: "現行",
    note: "Python 3.12 + FastAPI + uvicorn で API / 管理機能を実装",
  },
  {
    name: "Python / webapp2 / Jinja2",
    level: 5,
    years: "長期",
    note: "GAE Python 2.7 時代からのサーバーサイド実装",
  },
  {
    name: "PHP",
    level: 4,
    note: "GAE/PHP、業務ロジック、レガシー連携",
  },
  {
    name: "REST API 設計",
    level: 5,
    note: "CRUD、DELETE 制約への対応、URI 設計",
  },
  {
    name: "Google Cloud Datastore / NDB",
    level: 5,
    note: "永続化・データモデル設計",
  },
  {
    name: "Memcache / Redis",
    level: 4,
    note: "キャッシュ戦略、上限超過時の分割格納など",
  },
  {
    name: "Google Cloud Tasks / Storage",
    level: 4,
    note: "非同期処理・オブジェクトストレージ連携",
  },
  {
    name: "認証 / OAuth2",
    level: 3,
    note: "angular-oauth2-oidc、Basic 認証の実務対応",
  },
];

export const infraSkills: SkillItem[] = [
  {
    name: "Google App Engine",
    level: 5,
    years: "長期",
    note: "デプロイ、ローカル開発、ハンドラ設計、セキュリティヘッダ",
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
    note: "公開リポジトリでの継続開発",
  },
  {
    name: "Prettier / Vitest",
    level: 3,
    note: "現行フロントの品質・テスト基盤",
  },
  {
    name: "CORS / HTTP 仕様",
    level: 4,
    note: "クロスドメイン通信、メソッド制約の調査・回避",
  },
];

export const career: CareerItem[] = [
  {
    period: "2014年2月 〜 現在",
    title: "代表取締役",
    org: "株式会社ニーモニック",
    summary:
      "ウェブサイトの企画制作・デザイン・システム開発を一人体制で提供。自社サイト兼オリジナル CMS を Google App Engine 上で設計・運用し、近年は Python 3 / FastAPI + Angular へのモダン化を完了。",
    highlights: [
      "自社公式サイト / CMS（GAE + Python + Angular）の企画〜実装〜運用",
      "フロント（Angular 22 / TypeScript）とバック（FastAPI / Datastore）の一体開発",
      "技術ブログでの知見共有（GAE、AngularJS、キャッシュ、デプロイなど）",
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
    body: "要件整理・デザイン・フロント・バック・デプロイ・運用まで、小さなチーム（一人）でも完結できる実務力。",
  },
  {
    title: "クラウド上での実戦経験",
    body: "Google App Engine を中心に、Datastore / Memcache / Tasks / Storage を組み合わせたサービス運用の知見。",
  },
  {
    title: "レガシーから現行への橋渡し",
    body: "AngularJS / Python 2 / webapp2 から Angular 22 / Python 3 / FastAPI への移行を自ら進められる。",
  },
];

export const learningInterests = [
  "Next.js など現代的な Web アプリ開発",
  "生成 AI を活かしたバックエンド設計",
  "SaaS フロントエンドの最新動向",
];

export const sourcesNote =
  "本スキルシートは、株式会社ニーモニック公式サイトの代表プロフィール、技術ブログ、および公開 GitHub リポジトリ（mnemonic-official / mnemonic-official-py3）など、公開情報をもとに構成しています。年月・案件詳細は必要に応じてご加筆ください。";

export const levelLabels: Record<SkillLevel, string> = {
  1: "基礎",
  2: "補助可",
  3: "実務可",
  4: "自走",
  5: "牽引",
};
