# 外部設計書（External Design Document）

## 1. システム概要

### 1.1 プロダクト名
**Shinya Ishizaki's Official Website**

### 1.2 目的
Shinya Ishizaki氏の公式ウェブサイトとして、以下の情報を発信する：
- プロフィール・自己紹介
- 技術スキルの紹介
- Tech Blogの最新記事の紹介
- メンタリングサービス（MENTA）の案内

### 1.3 対象ユーザー
- Shinya Ishizaki氏の情報を知りたい者
- 技術ブログの読者
- メンタリングサービスに興味のある者
- ポートフォリオを参照する採用担当者

---

## 2. システムの外部インターフェース

### 2.1 提供ユーザーインターフェース

#### 2.1.1 Webサイト (ブラウザ)
- **URL**: `https://shinyaishizaki.com`
- **表現形式**: HTML + CSS
- **対応ブラウザ**: Chrome, Firefox, Safari, Edge等の最新ブラウザ
- **レスポンシブ対応**: Yes（モバイル、タブレット、デスクトップ）

#### 2.1.2 ページ構成
| ページ | URL | 説明 |
|--------|-----|------|
| トップページ | `/` | 自己紹介、スキル紹介、最新ブログ記事の表示 |
| Aboutページ | `/about/` | 詳細プロフィール、経歴、スキル詳細 |
| メンタリングページ | `/mentoring/` | MENTAサービスの説明、プラン紹介 |

### 2.2 外部システムとの連携

#### 2.2.1 Tech Blog (RSS連携)
- **URL**: `https://tech-blog.shinyaishizaki.com/`
- **連携方式**: RSS フィード取得
- **フィードURL**: `https://tech-blog.shinyaishizaki.com/feed.xml`
- **取得頻度**: 
  - 手動: `ruby scripts/fetch_latest_posts.rb` で実行時に取得
  - 自動: GitHub Actions の定期実行（スケジュール実行）
- **表示件数**: 最新5件
- **連携内容**:
  - 記事タイトル
  - 記事URL
  - 公開日時

#### 2.2.2 Mental Health Blog
- **URL**: `https://mental-health.shinyaishizaki.com/`
- **役割**: 別サイトとしてリンク提供のみ

#### 2.2.3 MENTAメンタリングサービス
- **URL**: `https://menta.work/invite/YM2SJ2tSsrEeMyQv`
- **連携方式**: 外部リンク（紹介リンク）
- **機能**: メンタリング申込フロー

#### 2.2.4 SNS連携
- **Twitter**: @Shinyaaah0311
- **GitHub**: ShinyaIshizaki
- **LINE**: LINEの友達追加リンク

---

## 3. ユーザーシナリオ

### 3.1 シナリオ1: 初訪問ユーザー
1. トップページ (`/`) にアクセス
2. "Hello, I'm Shinya Ishizaki" のメッセージを確認
3. 5つのコアスキルを確認
4. 最新Tech Blogブログ記事を確認
5. Tech Blogへのリンクをクリック、またはAboutページへ移動

### 3.2 シナリオ2: 詳細情報を求めるユーザー
1. Aboutページ (`/about/`) にアクセス
2. 詳細プロフィールと経歴を確認
3. メンタリングリンクをクリック

### 3.3 シナリオ3: メンタリングに興味あるユーザー
1. トップページまたはAboutページからメンタリングセクションに移動
2. メンタリングページ (`/mentoring/`) にアクセス
3. サービス内容とプランを確認
4. MENTAへのリンク（紹介リンク）をクリック
5. MENTA上でメンタリング申込

---

## 4. 機能要件

### 4.1 表示機能

| 機能ID | 機能名 | 説明 | 実装場所 |
|--------|--------|------|---------|
| F01 | プロフィール表示 | 自己紹介、職種、概要の表示 | `/` `hero`セクション |
| F02 | スキル一覧表示 | コアスキルの5項目表示 | `/` `skills-grid` |
| F03 | 最新ブログ記事表示 | Tech Blogから取得した最新5件の記事リスト | `/` `latest-posts` |
| F04 | 外部リンク表示 | Tech Blog、Mental Health Blog、MENTAへのリンク | `/` `landing-links` |
| F05 | About情報表示 | 詳細プロフィールの表示 | `/about/` |
| F06 | メンタリング説明表示 | MENTAサービスの説明 | `/mentoring/` |
| F07 | メンタリングプラン表示 | 3つのメンタリングプランの表示 | `/mentoring/` `plans-grid` |
| F08 | SNS連携リンク | Twitter、GitHub、LINE等のSNS連携 | ヘッダー、フッター |

### 4.2 データ取得機能

| 機能ID | 機能名 | 説明 | 実装 |
|--------|--------|------|------|
| F09 | RSSフィード取得 | Tech BlogのRSSフィードから記事情報を取得 | `scripts/fetch_latest_posts.rb` |
| F10 | JSON保存 | 取得したRSSデータをJSON形式で保存 | `_data/latest_posts.json` |
| F11 | JSONキャッシュ機能 | RSS取得失敗時は既存のJSONを保持 | `fetch_latest_posts.rb` の例外処理 |

### 4.3 非機能要件

| 要件ID | 要件 | 説明 |
|--------|------|------|
| NF01 | レスポンシブ対応 | モバイル、タブレット、デスクトップで最適な表示 |
| NF02 | SEO対応 | `jekyll-seo-tag` により自動的にメタタグを生成 |
| NF03 | サイトマップ生成 | `jekyll-sitemap` により自動的に生成 |
| NF04 | Feedフィード生成 | `jekyll-feed` により RSS フィードを自動生成 |
| NF05 | パフォーマンス | 高速な静的サイト生成 |
| NF06 | セキュリティ | GitHub Pages を活用した安全なホスティング |
| NF07 | 可用性 | GitHub Pages による99.9%以上の可用性 |

---

## 5. 技術スタック

### 5.1 フロントエンド
- **静的サイトジェネレータ**: Jekyll 4.4.1
- **テーマ**: Minima 2.5
- **スタイル**: SCSS
- **マークアップ**: Markdown + HTML

### 5.2 プラグイン/拡張機能
- **jekyll-feed**: RSS フィード生成
- **jekyll-sitemap**: サイトマップ生成
- **jekyll-seo-tag**: SEO メタタグ生成

### 5.3 バックエンド
- **言語**: Ruby 2.x以上
- **スクリプト**: Ruby スクリプト（RSS取得）

### 5.4 ホスティング・デプロイ
- **ホスティング**: GitHub Pages
- **デプロイメント**: Git push（`main` ブランチ）
- **自動化**: GitHub Actions

### 5.5 ドメイン
- **カスタムドメイン**: `shinyaishizaki.com` (CNAME: `github.io`)

---

## 6. 依存関係・制約事項

### 6.1 外部依存関係
- Tech Blog (`https://tech-blog.shinyaishizaki.com/`)のRSSフィードが利用可能であること
- MENTA (`https://menta.work/`) のサービスが継続していること
- インターネット接続の可用性

### 6.2 制約事項
- デプロイには GitHub Pages の設定が必要
- ローカル開発には Ruby と Bundler のインストールが必須
- RSS取得には20秒以内のタイムアウト設定

---

## 7. デプロイメント・リリース戦略

### 7.1 開発フロー
1. ローカルで変更、`bundle exec jekyll serve` で動作確認
2. `main` ブランチに push
3. GitHub Pages が自動的にサイトを構築・公開

### 7.2 定期更新
- **RSS フィード更新**: GitHub Actions で定期実行
- **手動実行**: 必要に応じて `ruby scripts/fetch_latest_posts.rb` で実行

---

## 8. セキュリティ・コンプライアンス

### 8.1 セキュリティ対策
- GitHub Pages による HTTPS 通信
- 静的コンテンツのみ提供（動的処理なし）
- 入力バリデーション不要（静的サイト）

### 8.2 プライバシー
- Google Analytics の設定（本番環境のみ）
- Google AdSense の実装

---

## 9. モニタリング・保守

### 9.1 監視項目
- GitHub Pages のデプロイ状態
- RSS フィード取得の成功/失敗
- リンク切れ（定期的な手動確認）

### 9.2 保守作業
- Jekyll と依存ライブラリの定期更新
- 外部リンク（Tech Blog、MENTA等）の確認
- コンテンツの定期更新

---

## 10. サポート・ドキュメント

### 10.1 ドキュメント
- README.md: セットアップ手順、コマンド
- 本設計書: システム全体の設計
- 内部設計書: 詳細な実装仕様

### 10.2 サポート対象
- ユーザー向けサポート: 不要（静的Webサイト）
- 開発者向けサポート: README.md、ソースコード

---
