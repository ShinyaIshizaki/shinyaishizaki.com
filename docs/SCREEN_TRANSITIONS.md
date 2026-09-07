# 画面遷移図（Screen Transition Diagram）

## 1. 画面遷移全体図

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                         トップページ (/)                                 │
│                    ┌─────────────────────────┐                         │
│                    │  Hero Section           │                         │
│                    │  - 自己紹介             │                         │
│                    │                         │                         │
│                    │  Landing Links          │                         │
│                    │  - Tech Blog            │───────┐                │
│                    │  - Mental Health Blog   │───┐   │                │
│                    │  - MENTA                │─┐ │   │                │
│                    │                         │ │ │   │                │
│                    │  Skills Overview        │ │ │   │                │
│                    │  - 5つのコアスキル       │ │ │   │                │
│                    │                         │ │ │   │                │
│                    │  Latest Posts           │ │ │   │                │
│                    │  - Tech Blogの最新記事  │─┼─┼───┼──────┐        │
│                    │  - Tech Blog LinkButton │ │ │   │      │        │
│                    └─────────────────────────┘ │ │   │      │        │
│                            │ │ │               │ │   │      │        │
│        ┌───────────────────┘ │ │               │ │   │      │        │
│        │  [About Link]       │ │               │ │   │      │        │
│        │                     │ │               │ │   │      │        │
│        ▼                     │ │               │ │   │      │        │
│    ┌─────────────────────┐   │ │               │ │   │      │        │
│    │ About Page (/about/)│   │ │               │ │   │      │        │
│    ├─────────────────────┤   │ │               │ │   │      │        │
│    │ - 詳細プロフィール   │   │ │               │ │   │      │        │
│    │ - Core Skills説明    │   │ │               │ │   │      │        │
│    │ - Mentoring Link    │───┼─┼───────────────┼─┼───┼──────┼──┐    │
│    └─────────────────────┘   │ │               │ │   │      │  │    │
│        │                      │ │               │ │   │      │  │    │
│        │ [Mentoring Link]     │ │               │ │   │      │  │    │
│        │                      │ │               │ │   │      │  │    │
│        ▼                      │ │               │ │   │      │  │    │
│    ┌──────────────────────────┴─┴───────────────┴─┴───┴──────┴──┴──┐│
│    │                 Mentoring Page (/mentoring/)                  ││
│    ├──────────────────────────────────────────────────────────────┤│
│    │ - Mentoring Intro                                           ││
│    │   MENTA Mentoring                                           ││
│    │                                                              ││
│    │ - What I Can Help With                                      ││
│    │   - Creating a programming learning plan                   ││
│    │   - Questions and error resolution                         ││
│    │   - Pair programming                                       ││
│    │   - Career-change consultations                            ││
│    │                                                              ││
│    │ - Plans Grid                                                ││
│    │   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐│
│    │   │ Free Consultation│  │ Trial Plan       │  │Consultation  ││
│    │   │ (One-time)       │  │ (One-time)       │  │by Chat/Video ││
│    │   │                  │  │                  │  │(Monthly)     ││
│    │   │ Free             │  │ Limited          │  │Ongoing       ││
│    │   │                  │  │ Support          │  │Support       ││
│    │   └──────────────────┘  └──────────────────┘  └──────────────┘│
│    │                                                              ││
│    │ - For New MENTA Members                                     ││
│    │   MENTA Invitation Banner ──────────────┐                   ││
│    │                                         │                   ││
│    │ - How to Get Started                    │                   ││
│    │   [MENTA Registration Link] ────────────┼───────────────┐   ││
│    └──────────────────────────────────────────────────────────┼──┘│
│                                                                 │   │
└─────────────────────────────────────────────────────────────────┼───┘
                                                                  │
                                      ┌───────────────────────────┘
                                      │
                                      ▼
                            ┌──────────────────────┐
                            │  外部サイト         │
                            ├──────────────────────┤
                            │ - Tech Blog          │
                            │ - Mental Health Blog│
                            │ - MENTA Mentoring   │
                            │ - SNS (Twitter等)    │
                            └──────────────────────┘
```

---

## 2. ページ詳細説明

### 2.1 トップページ (/)

#### 2.1.1 ページ構成

```
┌─────────────────────────────────────────────────────────────┐
│                      Header (Minima)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Site Title: Shinya Ishizaki's Website               │  │
│  │ Navigation: [Home] [About] [Mentoring]              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Main Content Area                                           │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Hero Section                                         │   │
│ │                                                      │   │
│ │  Hello, I'm Shinya Ishizaki.                         │   │
│ │                                                      │   │
│ │  I work as a software engineer while sharing        │   │
│ │  knowledge and insights about technology and        │   │
│ │  mental health care through my blog.                │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Landing Links (Grid Layout)                          │   │
│ │                                                      │   │
│ │  ┌──────────┐  ┌──────────┐  ┌──────────┐           │   │
│ │  │Tech Blog │  │Mental H. │  │  MENTA   │           │   │
│ │  │          │  │Blog      │  │Mentoring │           │   │
│ │  │[External]│  │[External]│  │[External]│           │   │
│ │  └──────────┘  └──────────┘  └──────────┘           │   │
│ │                                                      │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Core Skills (Grid Layout)                            │   │
│ │                                                      │   │
│ │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │   │
│ │  │ Backend    │  │ Web        │  │ Cloud      │     │   │
│ │  │ Development│  │ Applications│ │ Infrastructure│  │   │
│ │  └───────���────┘  └────────────┘  └────────────┘     │   │
│ │                                                      │   │
│ │  ┌────────────┐  ┌────────────┐                     │   │
│ │  │ Software   │  │ Technical  │                     │   │
│ │  │ Engineering│  │ Writing    │                     │   │
│ │  └────────────┘  └────────────┘                     │   │
│ │                                                      │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ Latest Tech Blog Posts                               │   │
│ │                                                      │   │
│ │  1. 【悲報】二段階認証を設定したら...                  │   │
│ │  2. MacでPythonのFlask環境を構築して...                │   │
│ │  3. Linux（Ubuntu）にAdobe Acrobat Reader...          │   │
│ │  4. GitHubにPushできない時の対処法                   │   │
│ │  5. IT業界への就職・転職相談はこちらから...           │   │
│ │                                                      │   │
│ │  [Visit the Tech Blog] → Tech Blog External Link    │   │
│ │                                                      │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Footer (Minima)                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ SNS Links:                                           │   │
│ │ [GitHub] [Twitter] [LINE]                            │   │
│ │ Email: shinya.ishizaki@gmail.com                     │   │
│ │ © 2026 Shinya Ishizaki. All rights reserved.         │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

#### 2.1.2 インタラクション

| 要素 | アクション | 遷移先 | 備考 |
|------|-----------|-------|------|
| Navigation "About" | クリック | `/about/` | ページ内遷移 |
| Navigation "Mentoring" | クリック | `/mentoring/` | ページ内遷移 |
| "Tech Blog" リンク | クリック | `https://tech-blog.shinyaishizaki.com/` | 新ウィンドウで外部サイトへ |
| "Mental Health Blog" リンク | クリック | `https://mental-health.shinyaishizaki.com/` | 新ウィンドウで外部サイトへ |
| "MENTA" バナー | クリック | `https://menta.work/invite/YM2SJ2tSsrEeMyQv` | 新ウィンドウで外部サイトへ |
| 記事タイトル（Latest Posts） | クリック | 記事URL（Tech Blog） | 新ウィンドウで外部サイトへ |
| "Visit the Tech Blog" | クリック | `https://tech-blog.shinyaishizaki.com/` | 新ウィンドウで外部サイトへ |
| GitHub アイコン | クリック | `https://github.com/ShinyaIshizaki` | 新ウィンドウで外部サイトへ |
| Twitter アイコン | クリック | `https://twitter.com/Shinyaaah0311` | 新ウィンドウで外部サイトへ |
| LINE アイコン | クリック | LINE 友達追加 | 新ウィンドウで外部サービスへ |

---

### 2.2 About ページ (/about/)

#### 2.2.1 ページ構成

```
┌─────────────────────────────────────────────────────────────┐
│                      Header (Minima)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Site Title: Shinya Ishizaki's Website               │  │
│  │ Navigation: [Home] [About] [Mentoring]              │  │
│  │                          ▲                           │  │
│  │                       (Current)                      │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Main Content Area                                           │
│                                                             │
│ About                                                       │
│                                                             │
│ Hello, I'm Shinya Ishizaki.                                │
│                                                             │
│ I am a software engineer who enjoys building practical     │
│ solutions and sharing knowledge through writing. This      │
│ site is a place where I document my experiences in         │
│ technology, software development, and beyond.              │
│                                                             │
│ Core Skills                                                │
│                                                             │
│ I work across the full stack of web development, with a    │
│ strong focus on building reliable backend systems and      │
│ practical web applications. My experience includes         │
│ developing APIs, improving applications...                 │
│                                                             │
│ I also have experience working with cloud infrastructure,  │
│ deployment workflows, and development tools that support   │
│ efficient team collaboration. In addition to technical     │
│ work, I enjoy writing about technology and mental health   │
│ care.                                                       │
│                                                             │
│ My goal is to create thoughtful, useful, and well-         │
│ structured solutions while sharing clear technical         │
│ insights through my blog. I am especially interested in    │
│ helping others understand complex topics.                  │
│                                                             │
│ Mentoring                                                  │
│                                                             │
│ I also provide mentoring for programming beginners,        │
│ including learning plans, technical questions, error       │
│ resolution, and career advice.                             │
│                                                             │
│ [Learn more about my mentoring services] → /mentoring/    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Footer (Minima)                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ SNS Links:                                           │   │
│ │ [GitHub] [Twitter] [LINE]                            │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

#### 2.2.2 インタラクション

| 要素 | アクション | 遷移先 | 備考 |
|------|-----------|-------|------|
| Navigation "Home" | クリック | `/` | ページ内遷移 |
| Navigation "Mentoring" | クリック | `/mentoring/` | ページ内遷移 |
| "Learn more about my mentoring services" リンク | クリック | `/mentoring/` | ページ内遷移 |
| GitHub アイコン | クリック | `https://github.com/ShinyaIshizaki` | 新ウィンドウで外部サイトへ |
| Twitter アイコン | クリック | `https://twitter.com/Shinyaaah0311` | 新ウィンドウで外部サイトへ |
| LINE アイコン | クリック | LINE 友達追加 | 新ウィンドウで外部サービスへ |

---

### 2.3 メンタリング ページ (/mentoring/)

#### 2.3.1 ページ構成

```
┌─────────────────────────────────────────────────────────────┐
│                      Header (Minima)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Site Title: Shinya Ishizaki's Website               │  │
│  │ Navigation: [Home] [About] [Mentoring]              │  │
│  │                                        ▲             │  │
│  │                                     (Current)        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Main Content Area                                           │
│                                                             │
│ MENTA Mentoring                                             │
│                                                             │
│ I provide thoughtful support for programming beginners     │
│ who are working through learning and career-change         │
│ challenges.                                                │
│                                                             │
│ Through MENTA, I offer guidance tailored to your current   │
│ situation and goals. Please feel free to reach out.        │
│                                                             │
│ What I Can Help With                                       │
│                                                             │
│ - Creating a programming learning plan                     │
│ - Questions and error resolution during programming study │
│ - Pair programming and collaborative development           │
│ - Advice on finding projects through crowdsourcing        │
│ - Career-change consultations                             │
│                                                             │
│ Engineers are also expected to develop the ability to      │
│ research and solve errors independently. I also welcome    │
│ questions from people who have researched an issue         │
│ themselves but need clarification or guidance.             │
│                                                             │
│ Plans (Grid Layout)                                         │
│                                                             │
│ ┌──────────────────────┐  ┌──────────────────────┐         │
│ │ One-time             │  │ One-time             │ One-time│
│ │                      │  │                      │         │
│ │ Free Consultation    │  │ Trial Plan           │ Consult │
│ │                      │  │                      │ by Chat │
│ │ I offer an initial   │  │ Start with a trial   │ or      │
│ │ consultation free    │  │ consultation through │ Video   │
│ │ of charge.           │  │ one or two exchanges │ Call    │
│ │                      │  │ or a one-hour Zoom   │         │
│ │                      │  │ session.             │ Monthly │
│ │                      │  │                      │         │
│ │                      │  │                      │ Get     │
│ │                      │  │                      │ support │
│ │                      │  │                      │ through │
│ │                      │  │                      │ chat or │
│ │                      │  │                      │ video   │
│ │                      │  │                      │ calls.  │
│ └──────────────────────┘  └──────────────────────┘         │
│                                                             │
│ For New MENTA Members                                      │
│                                                             │
│ You can use my invitation link when registering for MENTA. │
│ New members may receive the registration benefit shown     │
│ on MENTA's official invitation page.                       │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │          MENTA Invitation Banner                     │   │
│ │                                                      │   │
│ │  [MENTA Logo Image]                                 │   │
│ │                                                      │   │
│ │  MENTA Mentoring Service                            │   │
│ │                                                      │   │
│ │  [Register or learn more on MENTA] ─────────┐       │   │
│ │                                              │       │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
│ How to Get Started                                          │
│                                                             │
│ 1. Open the invitation link above and create your MENTA    │
│    account.                                                │
│ 2. Review my mentoring plans and choose one that matches   │
│    your goals.                                             │
│ 3. Send a message with your current situation, questions,  │
│    and what you would like to achieve.                     │
│                                                             │
│ The available plans, pricing, and registration benefits    │
│ are managed on MENTA and may change over time. Please      │
│ check the official MENTA page for the latest details.      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Footer (Minima)                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ SNS Links:                                           │   │
│ │ [GitHub] [Twitter] [LINE]                            │   │
│ └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

#### 2.3.2 インタラクション

| 要素 | アクション | 遷移先 | 備考 |
|------|-----------|-------|------|
| Navigation "Home" | クリック | `/` | ページ内遷移 |
| Navigation "About" | クリック | `/about/` | ページ内遷移 |
| "MENTA Invitation Banner" | クリック | `https://menta.work/invite/YM2SJ2tSsrEeMyQv` | 新ウィンドウで外部サイトへ |
| "Register or learn more on MENTA" | クリック | `https://menta.work/invite/YM2SJ2tSsrEeMyQv` | 新ウィンドウで外部サイトへ |
| GitHub アイコン | クリック | `https://github.com/ShinyaIshizaki` | 新ウィンドウで外部サイトへ |
| Twitter アイコン | クリック | `https://twitter.com/Shinyaaah0311` | 新ウィンドウで外部サイトへ |
| LINE アイコン | クリック | LINE 友達追加 | 新ウィンドウで外部サービスへ |

---

## 3. ユーザーフロー

### 3.1 ユーザーフロー1: 初訪問者のジャーニー

```
START
  │
  ▼
┌──────────────────────────────────┐
│ トップページ (/) にアクセス       │
│                                  │
│ - Hero セクション確認            │
│ - スキル確認                     │
│ - 最新ブログ記事を確認           │
└──────────────────────────────────┘
  │
  ├─→ [Tech Blog クリック] ──→ Tech Blog （外部）
  │
  ├─→ [Mental Health Blog クリック] ──→ Mental Health Blog （外部）
  │
  ├─→ [MENTA バナー クリック] ──→ MENTA （外部）
  │
  ├─→ [About ナビゲーション クリック]
  │   │
  │   ▼
  │  ┌──────────────────────────────┐
  │  │ About ページ (/about/)       │
  │  │                              │
  │  │ - 詳細プロフィール確認        │
  │  │ - スキル詳細確認             │
  │  │ - メンタリングリンク確認     │
  │  └──────────────────────────────┘
  │   │
  │   └─→ [Mentoring Link クリック]
  │
  └─→ [Mentoring ナビゲーション クリック]
      │
      ▼
     ┌──────────────────────────────┐
     │ メンタリング (/mentoring/)  │
     │                              │
     │ - サービス内容確認           │
     │ - プラン確認                │
     │ - 登録手順確認              │
     └──────────────────────────────┘
      │
      └─→ [MENTA 登録リンク クリック] ──→ MENTA 登録フロー
          │
          ▼
         END (MENTA で登録)
```

### 3.2 ユーザーフロー2: Tech ブログ読者

```
START
  │
  ▼
┌──────────────────────────────────┐
│ 検索結果からブログ記事にアクセス   │
│ または、外部リンクから訪問        │
└──────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────┐
│ トップページ (/) にアクセス       │
│                                  │
│ - Latest Posts セクション確認    │
└──────────────────────────────────┘
  │
  ├─→ [記事タイトル クリック] ──→ Tech Blog 記事 （外部）
  │
  ├─→ [Visit the Tech Blog クリック] ──→ Tech Blog （外部）
  │
  └─→ [About ナビゲーション クリック]
      │
      ▼
     ┌──────────────────────────────┐
     │ About ページ (/about/)       │
     │                              │
     │ - 著者の詳細情報確認         │
     └──────────────────────────────┘
      │
      └─→ END
```

### 3.3 ユーザーフロー3: メンタリング希望者

```
START
  │
  ▼
┌──────────────────────────────────┐
│ "メンタリング" で検索              │
│ または SNS から訪問               │
└──────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────┐
│ トップページ (/)                  │
│ または About ページ (/about/)     │
└──────────────────────────────────┘
  │
  ├─→ [Mentoring ナビゲーション]
  │   または
  │   [Learn more about my mentoring services]
  │
  ▼
┌──────────────────────────────────┐
│ メンタリングページ (/mentoring/) │
│                                  │
│ - サービス内容確認               │
│ - プラン比較                     │
│ - 登録方法確認                   │
└──────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────┐
│ [MENTA 登録リンク] クリック       │
│ または                           │
│ [MENTA バナー] クリック          │
└──────────────────────────────────┘
  │
  ▼
MENTA （外部サービス）
  │
  ├─→ アカウント作成
  │
  ├─→ プラン選択
  │
  ├─→ メッセージ送信
  │
  └─→ END (メンタリング開始)
```

---

## 4. 画面遷移マトリックス

### 4.1 ページ間遷移一覧

| From → To | トップページ (/) | About (/about/) | メンタリング (/mentoring/) | 外部サイト | 説明 |
|----------|----------------|-----------------|---------------------------|-----------|------|
| トップページ | - | ナビゲーション | ナビゲーション | 複数 | 各ナビゲーションリンク |
| About | ナビゲーション | - | ナビゲーション, テキストリンク | SNS | テキストリンクでメンタリングへ |
| メンタリング | ナビゲーション | ナビゲーション | - | MENTA（バナー, リンク） | MENTAへの複数リンク |
| 外部サイト | 戻るボタン | 戻るボタン | 戻るボタン | - | ブラウザバックで戻る |

### 4.2 リンク遷移詳細

#### 4.2.1 内部遷移（ページ内遷移）
```
/ ←→ /about/ ←→ /mentoring/

ナビゲーションバーから任意のページへアクセス可能
```

#### 4.2.2 外部遷移（新ウィンドウで開く）
```
/ または /about/ または /mentoring/
  │
  ├─→ Tech Blog: https://tech-blog.shinyaishizaki.com/
  │
  ├─→ Mental Health Blog: https://mental-health.shinyaishizaki.com/
  │
  ├─→ MENTA Mentoring: https://menta.work/invite/YM2SJ2tSsrEeMyQv
  │
  ├─→ Twitter: https://twitter.com/Shinyaaah0311
  │
  ├─→ GitHub: https://github.com/ShinyaIshizaki
  │
  ├─→ LINE: https://lin.ee/6usUO65
  │
  └─→ Email: shinya.ishizaki@gmail.com
```

---

## 5. レスポンシブ表示対応

### 5.1 デスクトップ表示 (700px以上)

- **Landing Links**: 3列グリッド
- **Skills Grid**: 自動調整（最小220px）
- **Plans Grid**: 3列グリッド

### 5.2 モバイル表示 (699px以下)

- **Landing Links**: 1列または2列（自動調整）
- **Skills Grid**: 1列（`minmax(220px, 1fr)` で調整）
- **Plans Grid**: 1列（メディアクエリ `@media screen and (max-width: 700px)` で調整）

```scss
@media screen and (max-width: 700px) {
  .plans-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 6. 状態遷移図

### 6.1 ページロード状態

```
┌──────────────┐
│ Start        │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────┐
│ ページリクエスト              │
│ (GET /  または GET /about/ 等)│
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│ Jekyll が HTML を生成        │
│ CSS をコンパイル              │
│ データを読み込み              │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│ ブラウザが HTML をレンダリング │
│ CSS を適用                   │
│ 外部リソース読み込み          │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│ ページ表示完了               │
│ インタラクション可能な状態   │
└──────────────────────────────┘
```

### 6.2 外部リンククリック状態

```
┌──────────────┐
│ リンククリック│
└──────┬───────┘
       │
       ▼
┌──────────────────────────────┐
│ target="_blank" で新ウィンドウ |
│ rel="noopener noreferrer"    │
│ で安全に外部サイトへ移動     │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│ 元のページは開き続ける        │
│ 新ウィンドウで外部サイト表示  │
└──────────────────────────────┘
```

---

## 7. アクセシビリティ考慮事項

### 7.1 キーボードナビゲーション

- **Tab キー**: ナビゲーションリンク、ボタン、リンクを順にフォーカス
- **Enter キー**: リンク・ボタンをアクティベート
- **Shift + Tab**: 逆方向でフォーカス移動

### 7.2 スクリーンリーダー対応

- **Alt テキスト**: `alt="MENTA メンター紹介"` など画像に設定
- **ARIA ラベル**: 必要に応じて追加
- **セマンティック HTML**: `<section>`, `<article>` など適切なタグを使用

### 7.3 カラーコントラスト

- Minima テーマのデフォルト配色を使用
- WCAG 2.1 AAA レベル推奨

---

## 8. エラーハンドリング画面

### 8.1 404 エラーページ

| ファイル | URL | 説明 |
|---------|-----|------|
| `404.html` | `/404.html` | 存在しないページにアクセス時に表示 |

**404.html の内容**:
- エラーメッセージ
- トップページへのリンク

### 8.2 その他のエラー

- **RSS 取得エラー**: `_data/latest_posts.json` が存在しない場合、代替テキストを表示
  ```liquid
  {% else %}
    <p>Latest articles are available on my Tech Blog.</p>
  {% endif %}
  ```

---

## 9. パフォーマンス最適化画面表示

### 9.1 Lazy Loading

MENTA 紹介バナーの画像に `loading="lazy"` 属性を使用：
```html
<img src="https://menta.work/resource/img/syokai01.png" 
     alt="MENTA メンター紹介" 
     loading="lazy">
```

### 9.2 キャッシュ戦略

- **ブラウザキャッシュ**: GitHub Pages による自動キャッシュ
- **データキャッシュ**: `latest_posts.json` は定期更新

---

## 10. 今後の画面拡張案

### 10.1 新規ページの追加

- **Blog ページ** (`/blog/`): 投稿一覧表示
- **個別投稿ページ** (`/blog/post-title/`): 投稿の詳細表示
- **Contact ページ** (`/contact/`): 問い合わせフォーム

### 10.2 機能追加

- **検索機能**: 投稿検索
- **タグシステム**: 記事のカテゴリ分類
- **コメント機能**: 記事へのコメント受付
- **ダークモード**: テーマ切り替え

---
