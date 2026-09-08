# 拡張実装計画書（Extension Implementation Plan）

## 1. Contact ページ (/contact/) の実装計画

### 1.1 概要

ユーザーが直接 Shinya Ishizaki 氏に問い合わせができるようにするため、Contact ページを追加する。

**URL**: `/contact/`  
**ページタイトル**: Contact  
**用途**: メッセージ送信、問い合わせ受付

---

## 2. 問い合わせフォーム実装方法の比較

### 2.1 方法1: Formspree（推奨検討）

#### 2.1.1 概要
- **サービス**: Formspree (https://formspree.io/)
- **仕組み**: フォーム送信を Formspree に委託し、メールを自動転送
- **ホスティング**: Formspree のバックエンド処理

#### 2.1.2 メリット
| メリット | 詳細 |
|---------|------|
| **セットアップが簡単** | HTML フォームに Formspree エンドポイント指定で完成 |
| **メール自動送信** | 送信データが直接メール（shinya.ishizaki@gmail.com）に届く |
| **スパム対策** | Formspree が CAPTCHA やスパム検出機能を提供 |
| **無料プランあり** | 月50件まで無料（個人用途には十分） |
| **カスタマイズ可能** | メールテンプレートやリダイレクト先を設定可能 |
| **データ保存不要** | 送信されたデータの管理が不要 |

#### 2.1.3 デメリット
| デメリット | 詳細 |
|----------|------|
| **外部依存** | Formspree サービスが停止するとフォーム使用不可 |
| **ネットワーク遅延** | Formspree への通信に時間がかかる可能性 |
| **50件/月の制限** | 無料プランは月50件まで（超過時は有料） |
| **アカウント管理** | Formspree アカウントの管理が必要 |

#### 2.1.4 セットアップ手順

```
1. Formspree (https://formspree.io/) にアクセス
2. 新規プロジェクト作成
   - メールアドレス: shinya.ishizaki@gmail.com
3. Form Endpoint URL を取得
   例: https://formspree.io/f/xyzabc123
4. Contact ページの HTML フォームに統合
   <form action="https://formspree.io/f/xyzabc123" method="POST">
     <input type="text" name="name" required>
     <input type="email" name="email" required>
     <textarea name="message" required></textarea>
     <button type="submit">Send</button>
   </form>
5. フォーム送信確認
   - Formspree ダッシュボードで履歴確認可能
```

#### 2.1.5 実装例（HTML）

```html
<section class="contact-form">
  <h2>Get in Touch</h2>
  <p>Feel free to reach out with any questions or inquiries.</p>
  
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="form-container">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    
    <button type="submit" class="submit-btn">Send Message</button>
  </form>
  
  <p class="form-note">We'll get back to you as soon as possible.</p>
</section>
```

---

### 2.2 方法3: Google フォーム（代替案）

#### 2.2.1 概要
- **サービス**: Google Forms (https://forms.google.com/)
- **仕組み**: Google フォームを作成して、Contact ページからリンク
- **ホスティング**: Google のインフラ

#### 2.2.2 メリット
| メリット | 詳細 |
|---------|------|
| **完全無料** | 回数制限なし、永年無料 |
| **Google の信頼性** | Google インフラで安定稼働 |
| **回答の管理** | Google Sheets に自動集計 |
| **セットアップが簡単** | リンク貼るだけで完成 |
| **スパム対策組込** | Google が自動的にスパム検出 |
| **複雑な設定不要** | 外部 API キー等の管理不要 |
| **分析機能** | Google Forms の分析ツール利用可能 |

#### 2.2.3 デメリット
| デメリット | 詳細 |
|----------|------|
| **ページ遷移** | Contact ページから外部（forms.google.com）へ遷移 |
| **ブランド統一性低下** | Google フォームのUI が表示される |
| **カスタマイズ性低** | Google フォームのテンプレートに限定 |
| **ユーザー体験** | ページを離れて Google フォームに記入する必要 |

#### 2.2.4 セットアップ手順

```
1. Google Forms (https://forms.google.com/) にアクセス
2. 新規フォーム作成
   - タイトル: "Contact Shinya Ishizaki"
3. フォーム項目を追加
   - Name (短編集項目)
   - Email (メール)
   - Message (段落)
4. 回答の収集設定
   - 送信先: shinya.ishizaki@gmail.com に送信通知
5. フォームのリンクを取得
   例: https://forms.gle/xyzabc123
6. Contact ページに埋め込みまたはリンク
```

#### 2.2.5 実装例（HTML）

**オプション A: 外部リンク方式**
```html
<section class="contact-section">
  <h2>Contact Me</h2>
  <p>Have questions or want to collaborate? I'd love to hear from you!</p>
  
  <p>
    <a href="https://forms.gle/YOUR_FORM_ID" target="_blank" rel="noopener noreferrer" class="contact-btn">
      Open Contact Form
    </a>
  </p>
  
  <p class="contact-note">
    You'll be taken to a Google Form where you can send your message.
  </p>
</section>
```

**オプション B: iframe 埋め込み方式**
```html
<section class="contact-section">
  <h2>Contact Me</h2>
  <p>Have questions or want to collaborate? I'd love to hear from you!</p>
  
  <iframe 
    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
    width="640" 
    height="500" 
    frameborder="0" 
    marginheight="0" 
    marginwidth="0">
    Loading…
  </iframe>
</section>
```

---

## 3. 比較表

| 項目 | Formspree | Google フォーム |
|------|-----------|----------------|
| **初期セットアップ** | 中程度（API キー取得必要） | 簡単（リンク貼付のみ） |
| **コスト** | 無料（月50件まで） | 完全無料 |
| **ブランド統一性** | ◎ 高（カスタムフォーム） | △ 低（外部フォーム） |
| **ユーザー体験** | ◎ 良好（ページ内で完結） | △ 中程度（外部遷移） |
| **メール通知** | ◎ 自動送信 | ◎ 自動送信 |
| **レスポンス管理** | ○ ダッシュボード | ◎ Google Sheets 連携 |
| **スパム対策** | ◎ CAPTCHA 対応 | ◎ Google による自動検出 |
| **カスタマイズ性** | ◎ 高 | △ 低 |
| **外部依存** | あり（Formspree） | あり（Google） |
| **スケーラビリティ** | △ 月50件制限あり | ◎ 無制限 |
| **サポート** | ○ 限定的 | ◎ Google サポート |

---

## 4. 推奨実装方法

### 4.1 フェーズ1: Google フォーム（短期）

**採用理由**:
- セットアップが最も簡単（リスク最小）
- 完全無料で月の制限なし
- 当初は問い合わせ数が少ないと予想
- 後から Formspree に変更可能

**実装内容**:
```
1. Google Forms で Contact フォーム作成
2. Contact ページ (/contact/) 作成
3. フォームへのリンク記載
4. ページをメインナビゲーションに追加
```

### 4.2 フェーズ2: Formspree への移行（中期）

**移行タイミング**:
- 月の問い合わせ数が増加（20件以上）
- ブランド統一性を重視する場合
- ページ内フォームの実装が必要な場合

**移行手順**:
```
1. Formspree アカウント作成・セットアップ
2. Contact ページの HTML フォームを Formspree に変更
3. Google フォームは削除または保持
4. テスト送信で動作確認
```

---

## 5. Contact ページ（/contact/）の詳細設計

### 5.1 ページ構成

```
┌─────────────────────────────────────────────────┐
│               Header (Minima)                   │
│  Site Title: Shinya Ishizaki's Website          │
│  Navigation: [Home] [About] [Mentoring] [Contact]
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Main Content Area                               │
│                                                 │
│ Contact                                         │
│                                                 │
│ Have questions or want to collaborate? I'd     │
│ love to hear from you!                          │
│                                                 │
│ Please fill out the form below and I'll get    │
│ back to you as soon as possible.               │
│                                                 │
│ ─────────────────────────────────────────────  │
│                                                 │
│ Contact Form (Google Forms Link または Embed)  │
│                                                 │
│ ─────────────────────────────────────────────  │
│                                                 │
│ Alternative Contact Methods:                   │
│ - Email: shinya.ishizaki@gmail.com             │
│ - Twitter: @Shinyaaah0311                      │
│ - GitHub: ShinyaIshizaki                       │
│ - LINE: [Add LINE Friend]                      │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Footer (Minima)                                 │
└─────────────────────────────────────────────────┘
```

### 5.2 Front Matter（ページメタデータ）

```markdown
---
layout: page
title: Contact
permalink: /contact/
---
```

### 5.3 ページコンテンツ例

#### オプションA: Google フォーム（リンク）

```markdown
---
layout: page
title: Contact
permalink: /contact/
---

Have questions or want to collaborate? I'd love to hear from you!

Please fill out the form below, and I'll get back to you as soon as possible.

[Send a Message](https://forms.gle/YOUR_FORM_ID){: .contact-btn target="_blank" rel="noopener noreferrer"}

## Alternative Contact Methods

If you prefer to reach out directly:

- **Email:** [shinya.ishizaki@gmail.com](mailto:shinya.ishizaki@gmail.com)
- **Twitter:** [@Shinyaaah0311](https://twitter.com/Shinyaaah0311)
- **GitHub:** [ShinyaIshizaki](https://github.com/ShinyaIshizaki)
- **LINE:** [Add me on LINE](https://lin.ee/6usUO65)
```

#### オプションB: Google フォーム（埋め込み）

```markdown
---
layout: page
title: Contact
permalink: /contact/
---

Have questions or want to collaborate? I'd love to hear from you!

<iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

## Alternative Contact Methods

If you have difficulty with the form above:

- **Email:** [shinya.ishizaki@gmail.com](mailto:shinya.ishizaki@gmail.com)
- **Twitter:** [@Shinyaaah0311](https://twitter.com/Shinyaaah0311)
- **GitHub:** [ShinyaIshizaki](https://github.com/ShinyaIshizaki)
- **LINE:** [Add me on LINE](https://lin.ee/6usUO65)
```

---

## 6. スタイル設定（SCSS）

`assets/main.scss` に以下を追加：

```scss
.contact-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #268bd2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #1a6fa0;
  }
}

.contact-section {
  margin: 2rem 0;
}

iframe[src*="docs.google.com/forms"] {
  width: 100%;
  max-width: 640px;
  border-radius: 8px;
}
```

---

## 7. ナビゲーション更新

Minima テーマのヘッダーナビゲーションに Contact ページが自動的に追加される（デフォルト動作）。

---

## 8. 画面遷移図の更新

### 8.1 新規ページの遷移

```
トップページ (/)
  │
  └─→ [Contact ナビゲーション]
      │
      ▼
   Contact ページ (/contact/)
      │
      ├─→ [Send a Message] ──→ Google フォーム （外部）
      │
      └─→ [Email/Twitter/GitHub/LINE] ──→ 各外部サービス
```

### 8.2 全ページナビゲーション

```
      ↔ Home (/)
      ↔ About (/about/)
      ↔ Mentoring (/mentoring/)
      ↔ Contact (/contact/)   ← NEW
```

---

## 9. SEO・メタタグ設定

`jekyll-seo-tag` が自動的に以下を生成：
```html
<title>Contact - Shinya Ishizaki's Website</title>
<meta name="description" content="Get in touch with Shinya Ishizaki. Send a message or reach out via email, Twitter, GitHub, or LINE.">
```

---

## 10. 実装チェックリスト

### Google フォーム方式

- [ ] Google Forms で Contact フォーム作成
- [ ] フォーム ID を取得
- [ ] `/contact/` ページ（contact.markdown）を作成
- [ ] Google フォーム リンクをページに記載
- [ ] ローカルで表示確認
- [ ] GitHub にプッシュ
- [ ] GitHub Pages デプロイ確認
- [ ] ページへのアクセス確認

### Formspree 方式（将来の移行時）

- [ ] Formspree アカウント作成
- [ ] Form Endpoint ID を取得
- [ ] Contact ページを Formspree フォームに更新
- [ ] フォーム送信テスト
- [ ] メール受信確認

---

## 11. トラブルシューティング

| 問題 | 原因 | 解決方法 |
|------|------|--------|
| Google フォームが表示されない | iframe src が誤っている | フォーム ID を再確認 |
| メールが届かない | フォーム設定が正しくない | Google Forms の設定を確認 |
| ページがナビゲーションに表示されない | ファイルパスが誤っている | ファイル名が `contact.markdown` であることを確認 |

---

## 12. 将来の拡張

### 12.1 カスタムフィールドの追加
- 件名（Subject）
- 問い合わせ種別（Inquiry Type）: General、Mentoring、Other

### 12.2 自動応答メール
- Formspree の自動応答機能を設定
- 送信者に確認メール送信

### 12.3 複数言語対応
- Contact ページを英語・日本語で提供

---
