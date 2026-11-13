# Shinya Ishizaki's Official Website

Shinya Ishizakiの公式ウェブサイトを管理するためのリポジトリです。

## 使用技術

* Jekyll

* Minima

* GitHub Pages

## ローカル環境のセットアップ

RubyとBundlerをインストールしたうえで、プロジェクトのルートディレクトリから以下を実行してください。

```bash
bundle install
```

## ローカルサーバーの起動

```bash
bundle exec jekyll serve
```

ブラウザで `http://127.0.0.1:4000/` を開くと、ローカルサイトを確認できます。ファイルを変更すると、Jekyllがサイトを自動的に再生成します。

## 主なページ

* `/`: トップページ

* `/about/`: プロフィールと活動内容

* `/mentoring/`: MENTAメンタリングサービスの案内

* `/contact/` : 問い合わせフォーム設置ページ

## 問い合わせフォームプロジェクト

問い合わせフォームの実装は、GitHub Projects で進行管理しています。

* GitHub Projects: `https://github.com/users/ShinyaIshizaki/projects/12`
* 目的: サイト訪問者からの依頼・質問・メンタリング相談を、スパムを抑えた安全な形で受け付ける
* 計画方針:
  * 公式サイト内に `/contact/` を追加する
  * フォーム入力時に Cloudflare Turnstile でボット対策を行う
  * サーバーサイドの処理は Cloudflare Workers で実装する
  * 実際のメール送信は Resend などのAPIを利用する
  * 送信結果は成功画面またはエラー表示でユーザーに返す

### 実装の基本フロー

```text
ブラウザ (contact form)
  -> Turnstile 検証
  -> Cloudflare Worker
  -> Resend API にメール送信
  -> 送信成功/失敗のレスポンスを表示
```

### 重要な設計上の注意点

* 直接メールアドレスをHTMLに埋め込まない
* 一時的な送信失敗時の再試行やエラー表示を用意する
* 個人情報を保存するDBを持たず、送信後にシステム内で保持しない
* 送信対象は問い合わせ内容と連絡先のみとし、最小限に留める

### VS Code で GitHub にログインする場合

GitHub Projects を参照したり、Issue / PR / branch の連携を行う場合は、VS Code の左下のアカウントアイコンから GitHub にサインインしてください。

1. VS Code 左下の `Accounts` またはアカウントアイコンをクリック
2. `Sign in to GitHub` を選択
3. ブラウザで認証を完了
4. `GitHub Pull Requests and Issues` 拡張機能も必要に応じて有効化

GitHub Pages へのデプロイやリポジトリ操作だけを行う場合は、ログインが必要になることが多いですが、静的サイトのローカル開発自体はログインなしで進められます。

## RSS連携

Tech BlogのRSSフィードから最新記事を取得し、トップページに最大5件表示しています。

RSSデータを手動で更新する場合は、以下を実行してください。

```bash
ruby scripts/fetch_latest_posts.rb
```

取得した記事情報は `_data/latest_posts.json` に保存されます。RSSを取得できない場合、スクリプトは既存のJSONを保持するため、前回取得した記事一覧は失われません。初回取得前などでデータがない場合は、Tech Blogへのリンクが表示されます。

GitHub Actionsの `Update latest Tech Blog posts` ワークフローでも、RSSデータを定期的に更新します。必要に応じて、GitHub Actionsから手動実行できます。

## ディレクトリ構成

```text
.
├── _data/                    # RSSから取得した記事データ
├── _includes/                # 共通テンプレート
├── assets/                   # CSSなどのアセット
├── mentoring/                # メンタリングページ
├── scripts/                  # RSS取得スクリプト
├── about.markdown            # Aboutページ
├── index.markdown            # トップページ
├── _config.yml               # Jekyll設定
└── Gemfile                   # Ruby依存関係
```

## 公開

`main` ブランチへの変更をGitHubへpushすると、GitHub Pagesの設定に従って公開サイトが更新されます。
