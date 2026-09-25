# 小林宗明 スキルシート

株式会社ニーモニック代表・**小林宗明（Somin Kobayashi）** のフロントエンド / バックエンド開発スキルシートです。

公開プロフィール・技術ブログ・GitHub（`mnemonic-official` / `mnemonic-official-py3`）をもとに、実務で扱ってきた技術を整理して Web 表示しています。

## 含まれる内容

- 職務要約・連絡先
- フロントエンド / バックエンド / インフラのスキル一覧（5段階）
- 職務経歴タイムライン
- 強みと関心領域
- 印刷 / PDF 出力用スタイル

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで [http://127.0.0.1:43127](http://127.0.0.1:43127) を開いてください。

本番ビルド:

```bash
npm run build
npm start
```

## GitHub Pages への公開

`.github/workflows/deploy-pages.yml` に自動デプロイを設定しています。

1. このプロジェクトを GitHub リポジトリへ push
2. GitHub の **Settings → Pages → Build and deployment** で Source を
   **GitHub Actions** に設定
3. `main` ブランチへの push、または Actions 画面から手動実行

プロジェクトサイト（`https://ユーザー名.github.io/リポジトリ名/`）の
サブパスはビルド時に自動設定されます。

## 技術スタック

- Next.js（App Router）
- TypeScript
- Tailwind CSS
- shadcn/ui

## データ更新

スキル・経歴の本文は `src/data/skillsheet.ts` にまとめています。数値や文言の調整はここを編集してください。
