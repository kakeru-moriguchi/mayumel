# AGENTS.md — MayuMel 公式サイト

AIエージェント（Codex / Claude Code など）がこのリポジトリで作業するための引き継ぎ書です。
作業前に必ず読み、`docs/DESIGN.md` と `README.md` も参照してください。

---

## 1. プロジェクト概要

- **何のサイトか**：デザートクリエイター／パティシエ **長谷 藍一郎** の屋号 **MayuMel（マユメル）** の公式サイト。パフェ・コースデザート・メニュー開発・商品開発のポートフォリオ兼問い合わせサイト
- **目的**：世界観を伝える → 経歴・技術を伝える → 作品写真を見せる → Instagram を見てもらう → **Instagram DM で仕事の相談につなげる**
- **想定読者**：20〜30代の一般客（新規・リピーター）に加え、飲食店・カフェ・レストラン・ホテル・食品ブランド・イベント事業者・商品開発担当者
- **技術**：Next.js 16（App Router）/ React 19 / TypeScript。全ページ静的生成。CMS・EC・問い合わせフォームは無し

## 2. コマンド

```bash
npm install
npm run dev         # http://localhost:3000
npm run typecheck   # 型チェック（変更後は必ず実行）
npm run build       # 本番ビルド（変更後は必ず成功を確認）
```

Node.js 20 以上（推奨 22）。

## 3. 絶対に守るルール

### 存在しない情報を作らない（最重要）
次の情報は**架空で作成・補完しない**。オーナーから提供されたものだけを書く。

料金 / 営業時間 / 定休日 / メールアドレス / 受賞歴 / 資格 / クライアント名 / 制作実績の作品名 / 口コミ / 商品 / 取引企業 / 店舗名 / 経歴の年や順番 / 名前のローマ字表記

- 未定の値は `src/config/site.ts` で `null` のままにする（`null` の項目は自動で非表示になる）
- 経歴は**勤務の順番が不明**なため年表にしない（「経験の場」として並べている）
- AI生成の料理写真を「実際の作品」として使わない。写真が無い所は写真枠のまま

### 情報は一元管理
住所・電話・Instagram URL・プロフィール文などをページに直書きしない。

| ファイル | 内容 |
| --- | --- |
| `src/config/site.ts` | 屋号・住所・電話・最寄駅・Instagram・未定項目・ナビ・機能フラグ・サイトURL |
| `src/content/copy.ts` | キャッチ・紹介文・プロフィール・サービス・考え方・問い合わせ文（仮案のコピー） |
| `src/content/works.ts` | 制作実績データとギャラリーの枠パターン |
| `src/content/images.ts` | 写真の一覧（パス・alt・比率・仮ラベル） |

### デザイン（「AIが作ったテンプレート感」を出さない）
- 禁止：角丸カードの羅列、同サイズカード3枚・6枚のグリッド、SaaS/スタートアップLP風、過剰な角丸・影・グラデーション、意味のないアイコン、全部中央揃え、全セクション同じ構造、巨大な英語見出しの多用、写真に半透明グラデーションを重ねる
- 使う：写真・余白・細い罫線・小さな英字ラベル・左右非対称・写真サイズの差・誌面/作品集のような構成
- 色はトークン（`src/styles/globals.css` の `:root`）を使う。純白・純黒は使わない
- 書体：欧文 Cormorant Garamond / 和文見出し Shippori Mincho / 本文 Zen Kaku Gothic New（`next/font`）
- 大きな英字は HOME ファーストビューの「MayuMel」だけ。各セクションは `SectionLabel`（小さな英字＋罫線）＋和文見出し
- アニメーションは `.reveal` クラスのフェードのみ（`RevealObserver` が処理）。派手な動きは追加しない
- スマホは個別に最適化する（PCの縮小にしない）。ブレークポイントは `900px`

### 問い合わせ導線
- 主導線は **MayuMel 公式 Instagram の DM**（`InstagramButton`、リンクは `ig.me/m/mayumel0927`）
- CTA は自然な位置にだけ置く（乱発しない）。一般的な問い合わせフォームは作らない

## 4. 構成

```
src/
  app/                  ページ（/ about profile service works access contact news）
                        sitemap.ts robots.ts opengraph-image.tsx icon.svg apple-icon.tsx
  components/
    home/               HOME 専用セクション
    sections/           共用セクション（Approach / Instagram / ContactCta / GalleryGrid / AccessInfo / MapEmbed）
    Photo.tsx           写真（サーバー側で public/ のファイル有無を判定）
    PhotoFrame.tsx      写真枠（画像が無ければ仮ラベル付きの枠を表示）
    Header / Footer / PageHeader / SectionLabel / TextLink / InstagramButton / Wordmark
  config/site.ts
  content/
  lib/                  metadata / image-exists / works / news
  styles/globals.css
docs/DESIGN.md          設計メモ
public/images/          写真の置き場所（README に推奨サイズ表）
```

- 写真は `public/images/…` の決められたファイル名に置くだけで写真枠が実写真に切り替わる（`lib/image-exists.ts` がビルド時に判定）
- NEWS は実装済みで `site.features.news = false`（現在404）。SHOP/EC は未実装（追加方針は `docs/DESIGN.md` §9）

## 5. 現在の状態（2026-10 時点）

- `main` にサイト一式がマージ済み（PR #1）
- Vercel（Hobby）で公開中。ただし Hobby は非商用向けのため、**Cloudflare Pages（無料・商用可）へ移行する方針**
- 仮のまま：コピー全般（オーナー確認待ち）、ロゴ（文字組みの仮ワードマーク）、写真（すべて写真枠）
- 未定：メールアドレス・営業時間・定休日・独自ドメイン
- Vercel に重複プロジェクト `mayumel-8lcu` がある（削除してよい）

## 6. 次のタスク：Cloudflare Pages への移行

静的書き出し（`output: 'export'`）にして Cloudflare Pages で配信する。

1. `next.config.ts`
   - `output: 'export'` を追加
   - `images: { unoptimized: true }`（静的書き出しでは Next の画像最適化サーバーが使えない）。`formats` / `remotePatterns` は外してよい
   - 必要なら `trailingSlash: true`
2. 静的書き出しで問題になりうる箇所を確認して直す
   - `src/app/news/[slug]/page.tsx`：`generateStaticParams` が空配列＋`dynamicParams = false`。書き出しでエラーになる場合は、NEWS が無効な間はページを生成しない形に変更（例：記事が無いときは `/news/[slug]` を出さない構成にする）。`/news` 一覧は `notFound()` で404になるので書き出し時の挙動も確認
   - `opengraph-image.tsx`（ビルド時に Google Fonts を fetch している。失敗しても serif にフォールバックする）、`apple-icon.tsx`、`sitemap.ts`、`robots.ts` が静的ファイルとして `out/` に出力されることを確認
   - `src/lib/image-exists.ts` はビルド時判定なので静的書き出しでも動く
3. サイトURL：`src/config/site.ts` の `resolveSiteUrl()` は `NEXT_PUBLIC_SITE_URL` → `VERCEL_*` の順。Cloudflare では環境変数 `NEXT_PUBLIC_SITE_URL`（例：`https://mayumel.pages.dev` や独自ドメイン）を設定する前提で、必要なら `CF_PAGES_URL` もフォールバックに追加
4. 404：`out/404.html` が出力されることを確認（Cloudflare Pages はこれを使う）
5. `npm run build` → `out/` を `npx serve out` 等で開き、全ページ・画像・sitemap.xml・robots.txt・OGP画像を確認
6. README の「Vercel へのデプロイ」を Cloudflare Pages の手順に書き換える
   - Cloudflare ダッシュボード → Workers & Pages → Create → Pages → Connect to Git → `kakeru-moriguchi/mayumel`
   - Framework preset: Next.js (Static HTML Export) / Build command: `npm run build` / Build output directory: `out`
   - 環境変数：`NODE_VERSION=22`、`NEXT_PUBLIC_SITE_URL=https://…`
7. 移行が確認できたら Vercel プロジェクトを削除（オーナーが操作）

## 7. その後のタスク（素材が届き次第）

- Google Search Console 登録：オーナーから受け取った確認コードを `src/app/layout.tsx` の `metadata.verification.google` に設定 → `sitemap.xml` を送信
- ロゴ差し替え：`public/images/logo/` に置き、`site.logo.src` を設定（README 参照）
- 写真差し替え：README の表のファイル名で `public/images/` に配置
- コピー修正：`src/content/copy.ts` のみ編集
- 未定情報の追加：`src/config/site.ts` の `null` を値に置き換える

## 8. 作業の進め方

- 変更後は `npm run typecheck` と `npm run build` を必ず通す
- 見た目を変えたら PC（1440px）とスマホ（390px）で確認する
- コミットメッセージは日本語で、何を・なぜ変えたかを書く
- `main` へ直接 push せず、ブランチを切ってプルリクエストで出す
