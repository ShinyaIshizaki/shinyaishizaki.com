# パスワードジェネレーター 別オリジン移行計画

## 1. 目的

パスワードジェネレーターを公式サイトのJekyllページから分離し、独立した静的Webアプリとして `https://password-generator.shinyaishizaki.com/` で提供する。公式サイトは紹介リンクのみを持ち、生成処理や入力フォームをホストしない。

## 2. 移行方式

- ホスティング: GitHub Pages
- リポジトリ: `ShinyaIshizaki/password-generator`（作成が必要）
- 公開URL: `https://password-generator.shinyaishizaki.com/`
- DNS: `password-generator` のCNAMEを `ShinyaIshizaki.github.io` に設定
- デプロイ: `main` へのpushでGitHub Actionsから静的ファイルを公開
- 依存: Jekyll、Minima、広告、解析、外部JavaScriptに依存しない

## 3. 段階的切替

### Phase A: 独立アプリ準備
- [x] 独立HTML、CSS、JavaScriptを用意
- [x] GitHub Pages用ワークフローとCNAMEを用意
- [x] GitHubに `ShinyaIshizaki/password-generator` リポジトリを作成
- [x] 独立アプリを `main` へpush（コミット `ff829d1`）
- [x] GitHub PagesでGitHub Actionsデプロイを有効化
- [x] GitHub Pagesのカスタムドメインに `password-generator.shinyaishizaki.com` を登録
- [ ] DNSにCNAMEを追加
- [ ] HTTPSが有効であることを確認
- [ ] テスト仕様書の機能・プライバシー項目を実施

DNSに追加するレコード:

| 種別 | ホスト／名前 | 値／参照先 |
|------|--------------|------------|
| CNAME | `password-generator` | `ShinyaIshizaki.github.io` |

### Phase B: 公式サイト切替
- [ ] 新URLのHTTPS、生成、コピー、戻りリンクを確認
- [ ] `projects/index.markdown` の旧same-originリンクを新URLへ変更
- [ ] 外部リンクには `target="_blank"` を使う場合 `rel="noopener noreferrer"` を付与
- [ ] `tools/password-generator/index.html` を公式サイトリポジトリから削除
- [ ] 公式サイトをビルドし、Projectsページの遷移を確認
- [ ] 変更を公開し、本番URLから再確認

## 4. 切戻し方針

独立サイトのHTTPS、生成、コピー、またはDNSに問題があれば、公式サイトの旧ページと同一サイト内リンクを維持または復元する。Phase Bは独立URLの確認が完了するまで実施しない。

## 5. 既知の制約・手動作業

- 新規リポジトリ作成とGitHub PagesのActionsデプロイ設定は完了。Actions runは成功。
- DNSレコードの変更にはドメイン管理側の操作権限が必要で、現時点では未設定。
- GitHub PagesのカスタムドメインHTTPS発行完了まで切替を保留する。
- GitHub Pagesのアクセスログや配信キャッシュの扱いをセキュリティ／プライバシー確認書で評価する。

## 6. 関連文書

- [要件定義書](PASSWORD_GENERATOR_REQUIREMENTS.md)
- [外部設計書](PASSWORD_GENERATOR_EXTERNAL_DESIGN.md)
- [内部設計書](PASSWORD_GENERATOR_INTERNAL_DESIGN.md)
- [画面遷移図](PASSWORD_GENERATOR_SCREEN_TRANSITIONS.md)
- [テスト仕様書](PASSWORD_GENERATOR_TEST_SPECIFICATION.md)
- [セキュリティ／プライバシー確認書](PASSWORD_GENERATOR_SECURITY_PRIVACY_REVIEW.md)

## 7. 変更履歴

| 日付 | 版 | 変更内容 | 作成者 |
|------|----|----------|--------|
| 2026-10-25 | 0.1 | 別オリジン移行計画を作成 | Copilot |
