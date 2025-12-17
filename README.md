# HyaQShiki LP

AI自動化ツール「HyaQShiki」のランディングページです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Noto Sans JP** (Google Fonts)

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## プロジェクト構成

```
.
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # メインページ
│   └── globals.css     # グローバルスタイル
├── components/
│   ├── Header.tsx           # ヘッダーコンポーネント
│   ├── HeroSection.tsx      # ヒーローエリア
│   ├── ProblemSection.tsx   # 課題提起セクション
│   ├── SolutionSection.tsx  # 解決策セクション
│   ├── BenefitsSection.tsx  # 導入メリットセクション
│   ├── PricingSection.tsx  # 価格セクション
│   └── Footer.tsx          # フッターコンポーネント
└── package.json
```

## デザインコンセプト

- **メインカラー**: ネイビー (#0B2545)
- **アクセントカラー**: オレンジ (#E6A915)
- **ベースカラー**: ライトグレー (#F4F7F9)
- **フォント**: Noto Sans JP

## ビルド

```bash
npm run build
```

## 本番環境での起動

```bash
npm start
```

