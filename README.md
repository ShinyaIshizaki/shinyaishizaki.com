# Shinya Ishizaki's Official Website

Shinya Ishizakiの公式ウェブサイトを管理するためのリポジトリです。

## 使用技術

- Jekyll
- Minima
- GitHub Pages

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

- `/`: トップページ
- `/about/`: プロフィールと活動内容
- `/mentoring/`: MENTAメンタリングサービスの案内

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
