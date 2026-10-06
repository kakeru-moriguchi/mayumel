# MayuMel 公式サイト

パティシエ 長谷藍一郎による **MayuMel（マユメル）** のポートフォリオ兼問い合わせサイトです。
パフェ・コースデザート・メニュー開発・商品開発の作品と考え方を伝え、Instagram DM での相談につなげることを目的にしています。

- Next.js（App Router）/ React / TypeScript
- すべて静的生成（Cloudflare Pages で配信）
- 設計方針は [`docs/DESIGN.md`](docs/DESIGN.md) を参照

---

## 目次

1. [セットアップ](#セットアップ)
2. [Cloudflare Pages へのデプロイ](#cloudflare-pages-へのデプロイ)
3. [情報・文章の編集場所](#情報文章の編集場所)
4. [写真の差し替え（推奨サイズ・比率・配置場所）](#写真の差し替え)
5. [ロゴの差し替え](#ロゴの差し替え)
6. [未定の情報を追加する](#未定の情報を追加する)
7. [Google マップを追加する](#google-マップを追加する)
8. [将来の拡張（NEWS・SHOP・Instagram 投稿）](#将来の拡張)
9. [SEO・アクセシビリティ](#seoアクセシビリティ)
10. [ディレクトリ構成](#ディレクトリ構成)

---

## セットアップ

```bash
npm install
npm run dev        # http://localhost:3000
```

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー |
| `npm run build` | 本番ビルド（`out/` に静的ファイルを出力） |
| `npm run typecheck` | 型チェック |

Node.js 20 以上（推奨 22）。

## Cloudflare Pages へのデプロイ

1. [Cloudflare ダッシュボード](https://dash.cloudflare.com/)を開きます
2. 左側の **Workers & Pages** を押します
3. **Create application** → **Pages** → **Connect to Git** の順に押します
4. GitHub を選び、リポジトリ **`kakeru-moriguchi/mayumel`** を選択して **Begin setup** を押します
5. ビルド設定を次のとおり入力します

   | 項目 | 設定値 |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | `Next.js (Static HTML Export)` |
   | Build command | `npm run build` |
   | Build output directory | `out` |

6. **Environment variables (advanced)** を開き、次の値を追加します

   | 変数名 | 値 |
   | --- | --- |
   | `NODE_VERSION` | `22` |
   | `NEXT_PUBLIC_SITE_URL` | 公開URL（例：`https://mayumel.pages.dev`、独自ドメイン設定後はそのURL） |

7. **Save and Deploy** を押します
8. デプロイ完了後、表示されたURLを開き、各ページ・画像・`/sitemap.xml`・`/robots.txt`・OGP画像を確認します

`NEXT_PUBLIC_SITE_URL` が未設定の場合は、Cloudflare Pages が自動設定する `CF_PAGES_URL` を使います。
ローカルで本番出力を確認するときは、`npm run build` の後に `npx serve out` を実行してください。

---

## 情報・文章の編集場所

**住所・電話・Instagram などはページ内に直接書いていません。** 以下のファイルだけを編集してください。

| ファイル | 内容 |
| --- | --- |
| `src/config/site.ts` | 屋号・オーナー名・住所・電話・最寄駅・Instagram URL・営業時間・定休日・メール・ロゴ・地図・グローバルメニュー |
| `src/content/copy.ts` | キャッチコピー・紹介文・プロフィール・サービス内容・考え方・問い合わせ文 |
| `src/content/works.ts` | 制作実績（写真・カテゴリ・作品名） |
| `src/content/images.ts` | 各ページの写真の一覧（パス・alt・比率） |

コピー（キャッチ・紹介文）は仮案です。`copy.ts` を書き換えるだけで全ページに反映されます。

> ヒアリングで確認できていない経歴・受賞歴・資格・店舗名・料金・実績・クライアント名・口コミは掲載していません。
> 追加する場合も、事実確認できた情報のみを記載してください。

---

## 写真の差し替え

**`public/images/` の決められた場所に、決められたファイル名で画像を置くだけ**で、写真枠が実写真に切り替わります（コード修正不要）。
ファイルが無い間は「Parfait Image」などのラベル付きの写真枠が表示されます。

- 形式：JPEG（推奨）/ WebP / PNG
- 容量：1枚 1MB 以下を目安（静的配信では自動変換されないため、WebP での書き出しを推奨）
- 下の「推奨サイズ」以上の解像度で書き出してください
- 画像を追加したら再ビルド（Cloudflare Pages なら push で自動）で反映されます
- ファイル名を変えたい場合は `src/content/images.ts` / `src/content/works.ts` の `src` を変更
- 写真の説明文（alt）も同じファイルで変更できます

### 各ページの写真

| 配置場所 | 用途 | 推奨アスペクト比 | 推奨サイズ |
| --- | --- | --- | --- |
| `hero/hero.jpg` | HOME メインビジュアル（パフェ） | **4:5**（縦） | 1600 × 2000 px |
| `profile/portrait.jpg` | 長谷藍一郎 プロフィール写真 | **3:4**（縦） | 1500 × 2000 px |
| `profile/studio.jpg` | 制作風景（HOME プロフィール横） | **4:5**（縦） | 1200 × 1500 px |
| `profile/hands.jpg` | 盛り付けの手元（PROFILE） | **3:2**（横） | 2000 × 1333 px |
| `service/service.jpg` | HOME「できること」 | PC **2:3**（縦）/ スマホ **3:2**（横） | 1600 × 2400 px ※被写体は中央に |
| `service/parfait.jpg` | パフェ制作 | **4:5** | 1600 × 2000 px |
| `service/course.jpg` | コースデザート | **3:2** | 2000 × 1333 px |
| `service/menu.jpg` | メニュー開発 | **1:1** | 1600 × 1600 px |
| `service/product.jpg` | 商品開発 | **4:5** | 1600 × 2000 px |
| `service/proposal.jpg` | 店舗・ブランド向け提案 | **3:2** | 2000 × 1333 px |
| `approach/ingredient.jpg` | 素材（考え方セクション） | **3:2** | 2000 × 1333 px |
| `approach/season.jpg` | 季節の素材（ABOUT） | **4:5** | 1600 × 2000 px |
| `access/place.jpg` | 店舗／制作拠点 | PC **3:2** / スマホ（ACCESS ページ）**4:5** | 2000 × 1500 px 以上 ※被写体は中央に |

### 制作実績（WORKS）

`works/` に置きます。ファイル名は `src/content/works.ts` の一覧と対応しています（例：`works/parfait-01.jpg`）。

ギャラリーは**表示順で枠の形が決まる**誌面レイアウトです。6件で1周します。

| 表示順 | 枠 | アスペクト比 | 推奨サイズ |
| --- | --- | --- | --- |
| 1, 7, 13… | 大・縦 | 4:5 | 1600 × 2000 px |
| 2, 8, 14… | 小・縦長 | 2:3 | 1200 × 1800 px |
| 3, 9, 15… | 小・正方形 | 1:1 | 1200 × 1200 px |
| 4, 10, 16… | 中・横 | 3:2 | 1800 × 1200 px |
| 5, 11, 17… | 大・横 | 3:2 | 2000 × 1333 px |
| 6, 12, 18… | 小・縦 | 4:5 | 1200 × 1500 px |

カテゴリで絞り込むと順番が変わるため、**被写体を中央に寄せ、周囲に少し余白を残して撮影**すると、どの枠でもきれいに収まります。
パフェなど縦長の被写体は縦位置（4:5）で撮るのがおすすめです。

作品を追加するときは `src/content/works.ts` の配列に1行追加します。作品名・補足（`title` / `note`）は、実在の情報が決まったときだけ入力してください（未入力なら表示されません）。

### OGP 画像（SNS シェア時の画像）

現在は文字組みの画像を自動生成しています（`src/app/opengraph-image.tsx`）。
写真に変える場合は、そのファイルを削除し `src/app/opengraph-image.jpg`（**1200 × 630 px**）を置いてください。

---

## ロゴの差し替え

現在は文字組みの仮ワードマーク（MayuMel）を表示しています。

1. `public/images/logo/logo.svg`（または `.png`）を置く
2. `src/config/site.ts` の `logo.src` を `'/images/logo/logo.svg'` に変更し、`width` / `height` をロゴの比率に合わせる

ヘッダー・フッターの両方に反映されます。ファビコンは `src/app/icon.svg` を差し替えてください。

---

## 未定の情報を追加する

`src/config/site.ts` で `null` になっている項目は「未定」で、サイトには表示されていません。
値を入れると ACCESS / CONTACT / 構造化データに自動で表示されます。

| 項目 | 設定箇所 | 例 |
| --- | --- | --- |
| メールアドレス | `contact.email` | `'info@example.com'` |
| 営業時間 | `hours` | `'11:00–18:00'` |
| 定休日 | `holiday` | `'月曜日'` |
| 名前のローマ字表記 | `owner.nameEn` | — |

Instagram の URL・ハンドルも同じファイルで変更できます。
「Instagramで相談する」ボタンは `https://ig.me/m/mayumel0927`（DM を直接開くリンク）を使っています。

---

## Google マップを追加する

1. Google マップで所在地を開く →「共有」→「地図を埋め込む」→ HTML をコピー
2. HTML の中の `src="…"` の URL を `src/config/site.ts` の `map.embedUrl` に貼り付け

未設定の間は「Google マップで開く」リンクのみ表示されます。

---

## 将来の拡張

### NEWS（お知らせ・ブログ）

ルート・レイアウトは実装済みで、現在は非公開（404）です。

1. `src/content/news.ts` に記事を追加
2. `src/config/site.ts` の `features.news` を `true` に

ナビゲーション・sitemap.xml にも自動で追加されます。
CMS（microCMS など）に移行する場合は `src/lib/news.ts` の取得処理だけを差し替えます。

### SHOP（商品販売・EC）

今回は EC・決済は実装していません。既存ページは静的生成のみで状態を持たないため、以下を**追加するだけ**で拡張できます。

```
src/app/shop/page.tsx            商品一覧
src/app/shop/[slug]/page.tsx     商品詳細
src/app/cart/page.tsx            カート
src/lib/commerce/                商品取得・カート・決済（Stripe / Shopify Storefront API など）
```

ナビゲーションは `src/config/site.ts` の `navigation` に1行追加します。
写真部品（`Photo` / `PhotoFrame`）は商品画像にも流用できます。

### Instagram 投稿の表示

`src/components/sections/InstagramFeed.tsx` に表示枠を用意しています（現在は投稿データが無いため非表示）。
Instagram Graph API 等で取得した投稿を `posts` に渡すと、HOME の Instagram セクションに表示されます。

---

## SEO・アクセシビリティ

- 各ページ固有の title / meta description / canonical / OGP（`src/lib/metadata.ts`）
- `sitemap.xml` / `robots.txt` を自動生成（`src/app/sitemap.ts`, `robots.ts`）
- 構造化データ：WebSite / Organization（MayuMel）/ Person（長谷藍一郎）/ BreadcrumbList（未定の項目は出力しない）
- 各ページ h1 は1つ。h2 / h3 はセクション構造に沿って配置
- 画像は `next/image` で遅延読み込み・サイズ指定を行い、静的ファイルとして配信
- フォントは `next/font` で自己ホスト
- キーボード操作：スキップリンク、フォーカス表示、メニューは Esc で閉じ、フォーカスをメニュー内に保持
- `prefers-reduced-motion` 設定時はアニメーションを無効化
- スマホのタップ領域は 44px 以上

---

## ディレクトリ構成

```
docs/DESIGN.md                設計メモ（サイトマップ・配色・書体・写真・EC方針）
public/images/                写真（上の表の場所に置く）
src/
  app/                        ページ（App Router）
    page.tsx                  HOME
    about/ profile/ service/ works/ access/ contact/
    news/                     将来用（features.news で公開）
    sitemap.ts robots.ts opengraph-image.tsx icon.svg apple-icon.tsx
  components/
    home/                     HOME 専用セクション
    sections/                 複数ページで使うセクション（Approach / Instagram / ContactCta / GalleryGrid / AccessInfo / MapEmbed）
    Header / Footer / Photo / PhotoFrame / PageHeader / SectionLabel / TextLink / InstagramButton / Wordmark
  config/site.ts              基本情報（唯一の情報源）
  content/                    文章・写真一覧・作品データ
  lib/                        メタデータ・画像判定・作品/お知らせの取得
  styles/globals.css          デザイントークン（色・書体・余白）と共通スタイル
```
