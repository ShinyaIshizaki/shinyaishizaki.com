# 内部設計書（Internal Design Document）

## 1. システムアーキテクチャ

### 1.1 全体構成図

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Pages                         │
│              (shinyaishizaki.com)                        │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│                   Jekyll Build Process                  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Source Files                                    │  │
│  │  ├── Markdown files (*.markdown)                 │  │
│  │  ├── Config (_config.yml)                        │  │
│  │  ├── Templates (_includes/*.html)                │  │
│  │  ├── Styles (assets/main.scss)                   │  │
│  │  └── Data (_data/*.json)                         │  │
│  └──────────────────────────────────────────────────┘  │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Jekyll Engine                                   │  │
│  │  + Minima Theme                                  │  │
│  │  + Plugins (jekyll-feed, jekyll-sitemap,        │  │
│  │             jekyll-seo-tag)                      │  │
│  └─────────────────────────────────────────────────���┘  │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Static Output (_site/)                          │  │
│  │  ├── index.html                                  │  │
│  │  ├── about/index.html                            │  │
│  │  ├── mentoring/index.html                        │  │
│  │  ├── feed.xml                                    │  │
│  │  ├── sitemap.xml                                 │  │
│  │  └── assets/main.css                             │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 2. ディレクトリ構成と役割

### 2.1 ディレクトリツリー

```
shinyaishizaki.com/
��── docs/                          # ドキュメント
│   ├── EXTERNAL_DESIGN.md         # 外部設計書
│   └── INTERNAL_DESIGN.md         # 内部設計書（本ファイル）
├── _data/                         # Jekyll データファイル
│   └── latest_posts.json          # Tech Blog の最新記事キャッシュ
├── _includes/                     # Jekyll テンプレートパーツ
│   ├── head.html                  # ヘッド部分（メタタグ、スクリプト）
│   └── social.html                # SNS リンク部分
├── assets/                        # スタイルシート・アセット
│   └── main.scss                  # カスタム SCSS
├── mentoring/                     # メンタリングページディレクトリ
│   └── index.markdown             # メンタリングページ本体
├── scripts/                       # ユーティリティスクリプト
│   └── fetch_latest_posts.rb      # RSS フィード取得スクリプト
├── .bundle/                       # Bundler キャッシュ
├── .github/                       # GitHub Actions
│   └── workflows/                 # ワークフロー定義
├── _config.yml                    # Jekyll 設定ファイル
├── .gitignore                     # Git 除外ファイル
├── 404.html                       # 404 エラーページ
├── CNAME                          # カスタムドメイン設定
├── Gemfile                        # Ruby 依存関係
├── Gemfile.lock                   # Ruby 依存関係ロック
├── README.md                      # プロジェクト説明
├── about.markdown                 # About ページ
└── index.markdown                 # トップページ
```

### 2.2 各ディレクトリの役割

| ディレクトリ | 説明 | 開発者向け |
|------------|------|----------|
| `docs/` | ドキュメント | 設計書を格納 |
| `_data/` | Jekyll データファイル | JSON 形式のデータを格納（テンプレート内で `site.data` 経由でアクセス） |
| `_includes/` | テンプレートパーツ | 再利用可能な HTML テンプレート（`{% include %}` で読み込み） |
| `assets/` | スタイルシート・メディア | CSS、画像等の静的アセット |
| `mentoring/` | ページディレクトリ | URL が `/mentoring/` に対応 |
| `scripts/` | ユーティリティスクリプト | 開発・保守用の Ruby スクリプト |

---

## 3. ファイル仕様

### 3.1 設定ファイル

#### 3.1.1 `_config.yml`

```yaml
# サイト設定
title: Shinya Ishizaki's Website
author: Shinya Ishizaki
email: shinya.ishizaki@gmail.com
description: A Japanese software engineer sharing insights on technology and mental health care.
baseurl: ""
url: "https://shinyaishizaki.com"

# SNS情報
twitter_username: Shinyaaah0311
github_username: ShinyaIshizaki
line_url: "https://lin.ee/6usUO65"

# テーマ・プラグイン
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

**役割**: Jekyll エンジンの動作を制御し、サイト全体の設定を定義

---

#### 3.1.2 `Gemfile`

Ruby の依存関係を定義：
- `jekyll` 4.4.1: 静的サイトジェネレータ
- `minima` 2.5: デフォルトテーマ
- `jekyll-feed`: RSS フィード生成
- `jekyll-sitemap`: サイトマップ生成
- `jekyll-seo-tag`: SEO メタタグ生成

**役割**: プロジェクトの依存関係を管理

---

### 3.2 ページファイル

#### 3.2.1 `index.markdown` (トップページ)

| 項目 | 値 |
|------|-----|
| URL | `/` |
| Layout | `page` |
| ファイル形式 | Markdown + HTML |
| サイズ | 約2.5KB |

**構成セクション**:
1. **Hero セクション** (`<section class="hero">`)
   - メインメッセージ: "Hello, I'm Shinya Ishizaki."
   - 自己紹介文

2. **Landing Links セクション** (`<section class="landing-links">`)
   - Tech Blog へのリンク
   - Mental Health Blog へのリンク
   - MENTA メンタリング紹介バナー

3. **Skills Overview セクション** (`<section class="skills-overview">`)
   - 5つのコアスキルをグリッド表示
     - Backend Development
     - Web Applications
     - Cloud Infrastructure
     - Software Engineering
     - Technical Writing

4. **Latest Posts セクション** (`<section class="latest-posts">`)
   - `site.data.latest_posts` から最新5件の記事を表示
   - Tech Blog へのリンク

---

#### 3.2.2 `about.markdown` (About ページ)

| 項目 | 値 |
|------|-----|
| URL | `/about/` |
| Layout | `page` |
| ファイル形式 | Markdown |

**構成**:
- 自己紹介
- Core Skills の説明
- メンタリングサービスへのリンク

---

#### 3.2.3 `mentoring/index.markdown` (メンタリングページ)

| 項目 | 値 |
|------|-----|
| URL | `/mentoring/` |
| Layout | `page` |
| ファイル形式 | Markdown + HTML |

**構成セクション**:
1. **Intro セクション** (`<section class="mentoring-intro">`)
   - MENTAメンタリングの概要

2. **Services セクション**
   - サポート内容のリスト

3. **Plans セクション** (`<div class="plans-grid">`)
   - Free Consultation
   - Trial Plan
   - Consultation by Chat or Video Call

4. **Registration セクション**
   - MENTA紹介バナー
   - 登録手順

---

### 3.3 テンプレートファイル

#### 3.3.1 `_includes/head.html`

HTML の `<head>` セクションで読み込まれるテンプレート。

**含有内容**:
- Meta タグ (charset, viewport)
- SEO タグ (`jekyll-seo-tag`)
- CSS リンク
- フィード メタタグ
- Google AdSense スクリプト
- Google Analytics（本番環境のみ）

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {%- seo -%}
  <link rel="stylesheet" href="{{ "/assets/main.css" | relative_url }}">
  {%- feed_meta -%}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7380810663171944"
     crossorigin="anonymous"></script>
  {%- if jekyll.environment == 'production' and site.google_analytics -%}
    {%- include google-analytics.html -%}
  {%- endif -%}
</head>
```

---

#### 3.3.2 `_includes/social.html`

SNS リンクを生成するテンプレート。

**サポートするSNS** (条件付き):
- Dribbble
- Facebook
- Flickr
- GitHub
- Instagram
- LinkedIn
- Pinterest
- Mastodon
- Twitter
- YouTube
- Google+
- RSS
- LINE（カスタム）

**機能**:
- `site.` の各ユーザー名が存在する場合のみリンクを生成
- SVG アイコンを使用
- `target="_blank"` で新ウィンドウで開く

---

### 3.4 スタイルシート

#### 3.4.1 `assets/main.scss`

**インポート**:
```scss
@import "minima";
```
Minima テーマのデフォルトスタイルを継承

**カスタムスタイル**:

| クラス | 説明 | 用途 |
|--------|------|------|
| `.landing-links` | グリッドコンテナ | トップページのリンク表示 |
| `.landing-links a` | リンク要素 | ホバーエフェクト、ボーダー |
| `.menta-link` | MENTA リンク | MENTA 紹介バナー |
| `.mentoring-banner` | メンタリングバナー | メンタリングページのバナー |
| `.plans-grid` | プラングリッド | 3列グリッド（モバイル時は1列） |
| `.plan-card` | プランカード | プラン個別表示 |
| `.skills-grid` | スキルグリッド | レスポンシブグリッド表示 |
| `.skill-card` | スキルカード | スキル個別表示 |

**レスポンシブ対応**:
```scss
@media screen and (max-width: 700px) {
  .plans-grid {
    grid-template-columns: 1fr;  /* 1列に変更 */
  }
}
```

---

### 3.5 データファイル

#### 3.5.1 `_data/latest_posts.json`

Tech Blog から取得した最新記事をキャッシュ

**スキーマ**:
```json
[
  {
    "title": "記事タイトル",
    "url": "https://tech-blog.shinyaishizaki.com/...",
    "date": "2025-04-08T12:34:56Z"  // ISO 8601 形式（オプション）
  },
  ...
]
```

**更新方法**:
- 手動: `ruby scripts/fetch_latest_posts.rb` で実行
- 自動: GitHub Actions で定期実行

**最大件数**: 5件

---

### 3.6 ユーティリティスクリプト

#### 3.6.1 `scripts/fetch_latest_posts.rb`

Tech Blog の RSS フィードから最新記事を取得し、JSON 形式で保存

**入力**:
- `FEED_URL = "https://tech-blog.shinyaishizaki.com/feed.xml"`

**出力**:
- `_data/latest_posts.json` にデータを保存

**処理フロー**:
```
1. RSS フィードを HTTP GET で取得
2. User-Agent ヘッダーを設��
3. タイムアウト設定: open_timeout=10s, read_timeout=20s
4. RSS を解析
5. 最初の5件（MAX_POSTS）を抽出
6. title, url, date を JSON に変換
7. _data/latest_posts.json に保存
8. エラー時は既存のJSON を保持（エラーハンドリング）
```

**エラーハンドリング**:
- RSS 取得失敗時: 既存の `latest_posts.json` を保持し、警告を出力
- HTTP エラー: ステータスコードを表示して終了（exit 1）

---

## 4. データフロー

### 4.1 ビルドプロセス

```
1. Git push (main branch)
        ↓
2. GitHub Actions トリガー
        ↓
3. Jekyll ビルド実行
   ├── _config.yml を読み込み
   ├── Markdown ファイルを処理
   ├── _data/ の JSON を読み込み
   ├── _includes/ のテンプレートを適用
   ├── SCSS をコンパイル
   ├── Plugins 実行
   │  ├── jekyll-feed: feed.xml 生成
   │  ├── jekyll-sitemap: sitemap.xml 生成
   │  └── jekyll-seo-tag: Meta タグ生成
   └── _site/ に静的ファイルを出力
        ↓
4. GitHub Pages にデプロイ
        ↓
5. shinyaishizaki.com で公開
```

### 4.2 RSS フィード更新フロー

```
GitHub Actions (定期実行) または手動実行
        ↓
fetch_latest_posts.rb 実行
        ↓
Tech Blog RSS フィード取得
(https://tech-blog.shinyaishizaki.com/feed.xml)
        ↓
最新5件を解析
        ↓
_data/latest_posts.json に保存
        ↓
Jekyll 再ビルド
        ↓
index.markdown で {{ site.data.latest_posts }} を参照して表示
```

---

## 5. テンプレートレンダリング

### 5.1 トップページの レンダリングフロー

```
index.markdown
        ↓
layout: page (Minima default)
        ↓
Hero セクション (HTML)
        ↓
Landing Links セクション (HTML + 外部リンク)
        ↓
Skills Grid セクション (HTML)
        ↓
Latest Posts セクション
   {% for post in site.data.latest_posts %}
     {{ post.title }}, {{ post.url }}, {{ post.date }}
   {% endfor %}
        ↓
index.html (HTML に変換)
```

### 5.2 メンタリングページのレンダリング

```
mentoring/index.markdown
        ↓
layout: page
        ↓
Mentoring Intro セクション
        ↓
Services リスト
        ↓
Plans Grid
   ├── Free Consultation
   ├── Trial Plan
   └── Consultation by Chat or Video Call
        ↓
Registration セクション
        ↓
mentoring/index.html (HTML に変換)
```

---

## 6. キャッシング戦略

### 6.1 静的コンテンツキャッシング

- **GitHub Pages**: HTTP キャッシュヘッダーにより自動的にキャッシュ

### 6.2 データキャッシング

- **`latest_posts.json`**: 
  - 更新: 手動実行または GitHub Actions 定期実行
  - キャッシュ期間: 次の更新まで
  - フォールバック: 取得失敗時は既存データを使用

---

## 7. パフォーマンス最適化

### 7.1 フロントエンド最適化

| 最適化項 | 実装内容 |
|---------|---------|
| CSS 圧縮 | Jekyll が自動的に圧縮 |
| 画像最適化 | MENTA 紹介バナー等は外部ホスト |
| Lazy Load | `loading="lazy"` 属性を使用 |
| レスポンシブ画像 | CSS Grid で最適化 |

### 7.2 ビルド最適化

| 最適化項 | 実装内容 |
|---------|---------|
| インクリメンタルビルド | Jekyll 4.4.1 の機能を活用 |
| 最小限のプラグイン | 必要なプラグインのみインストール |
| 静的ファイル生成 | サーバーサイド処理なし |

---

## 8. セキュリティ実装

### 8.1 入力検証

- **静的サイト**: ユーザー入力なし
- **外部リンク**: `target="_blank"` + `rel="noopener noreferrer"` で安全に外部サイトにリンク

### 8.2 出力エンコーディング

- **Jekyll の Liquid フィルタ**: 自動的に HTML エスケープ
  ```liquid
  {{ post.title | escape }}
  ```

### 8.3 HTTPS

- **GitHub Pages**: HTTPS を自動的に適用

### 8.4 Content Security Policy

- Minima テーマに基づいた安全なコンテンツ構成

---

## 9. テスト戦略

### 9.1 ローカル開発テスト

```bash
# ローカルサーバー起動
bundle exec jekyll serve

# 確認項目
- http://127.0.0.1:4000/ にアクセス可能
- ページレイアウトが正しく表示される
- 外部リンクが機能している
- RSS フィードが読み込める
```

### 9.2 ビルドテスト

```bash
# ビルド実行
bundle exec jekyll build

# 確認項目
- _site/ ディレクトリが生成される
- index.html, about/index.html, mentoring/index.html が存在
- feed.xml, sitemap.xml が生成される
```

### 9.3 統合テスト

- GitHub Pages デプロイ後、本番 URL にアクセスして動作確認
- 外部リンク（Tech Blog, MENTA）が機能しているか確認

---

## 10. 拡張性・保守性

### 10.1 新しいページ追加

```markdown
---
layout: page
title: 新しいページタイトル
permalink: /new-page/
---

コンテンツ
```

### 10.2 データの動的更新

1. Ruby スクリプトで外部 API から データを取得
2. JSON ファイルとして `_data/` に保存
3. Jekyll テンプレートで `site.data.xxx` 経由でアクセス

### 10.3 スタイルの拡張

`assets/main.scss` に新しい SCSS ルールを追加するだけで、Minima のベーススタイルを継承しながらカスタマイズ可能

---

## 11. 依存関係管理

### 11.1 Ruby 依存関係

```
Gemfile で指定:
- jekyll ~> 4.4.1
- minima ~> 2.5
- jekyll-feed ~> 0.12
- jekyll-sitemap
- jekyll-seo-tag
```

### 11.2 更新戦略

```bash
# 依存関係を更新
bundle update

# 特定の gem を更新
bundle update jekyll
```

---

## 12. トラブルシューティング

### 12.1 一般的な問題

| 問題 | 原因 | 解決方法 |
|------|------|--------|
| `bundle install` 失敗 | Ruby バージョンが異なる | `ruby -v` で確認、Ruby 2.7以上が必要 |
| `jekyll serve` 失敗 | ポート 4000 が使用中 | `jekyll serve --port 4001` |
| RSS フィード取得失敗 | ネットワーク接続エラー | インターネット接続を確認 |
| `_site/` が古いデータを保持 | キャッシュの問題 | `rm -rf _site/` で削除してから再ビルド |

### 12.2 ログ確認

```bash
# 詳細ログを出力
bundle exec jekyll serve --verbose
```

---

## 13. 今後の拡張案

### 13.1 ブログ機能の追加
- `_posts/` ディレクトリを作成
- Jekyll の投稿機能を有効化

### 13.2 検索機能の実装
- lunr.js や algolia などの検索ライブラリを統合

### 13.3 コメント機能
- Disqus や utterances などの外部サービスを統合

### 13.4 複数言語対応
- jekyll-multiple-languages-plugin を使用

---
