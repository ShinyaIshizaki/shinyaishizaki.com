---
layout: page
title: Contact
permalink: /contact/
---

<link rel="stylesheet" href="{{ '/assets/contact.css' | relative_url }}">

<section class="contact-intro">
  <p>
    ご質問・ご相談・メンタリングに関するお問い合わせは、以下のフォームからお送りください。
  </p>
</section>

<div class="contact-container">
  <h2>お問い合わせ</h2>
  <p class="contact-desc">ご意見・ご質問は以下のフォームよりお願いいたします。通常2〜3営業日以内にご返信いたします。</p>

  <form id="contact-form" class="contact-form">
    <!-- お名前（ハンドルネーム可） -->
    <div class="form-group">
      <label for="name">お名前 <span class="required">*</span></label>
      <input type="text" id="name" name="name" placeholder="例: 山田 太郎（ハンドルネーム可）" required autocomplete="name" />
    </div>

    <!-- メールアドレス -->
    <div class="form-group">
      <label for="email">メールアドレス <span class="required">*</span></label>
      <input type="email" id="email" name="email" placeholder="例: your@email.com" required autocomplete="email" />
    </div>

    <!-- お問い合わせ内容 -->
    <div class="form-group">
      <label for="message">お問い合わせ内容 <span class="required">*</span></label>
      <textarea id="message" name="message" rows="6" placeholder="お問い合わせ内容をご記入ください..." required></textarea>
    </div>

    <!-- スパム対策：ハニーポット（人間には見えずボットだけが入力してしまうダミー項目） -->
    <div class="hp-field" aria-hidden="true" style="display:none;">
      <label for="website">Website</label>
      <input type="text" id="website" name="website" tabindex="-1" autocomplete="off" />
    </div>

    <!-- Cloudflare Turnstile ウィジェット -->
    <div class="form-group">
      <div class="cf-turnstile" data-sitekey="あなたのTURNSTILEサイトキー"></div>
    </div>

    <!-- 送信ボタンとステータス表示 -->
    <button type="submit" id="submit-btn" class="submit-btn">送信する</button>
    <div id="form-status" class="form-status" aria-live="polite"></div>
  </form>
</div>

<!-- Cloudflare Turnstile API Script -->
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script src="{{ '/assets/contact.js' | relative_url }}" defer></script>

## 連絡の目安

- 一般的なお問い合わせ: 2〜3営業日以内に返信
- メンタリング相談: 内容に応じて、返信の可否やご案内方法をご連絡
- 返信方法: 連絡先のメールアドレスまたはご希望の連絡手段

## 注意事項

- 連絡先情報やメッセージ内容は、必要最小限の範囲で利用します
- 不要な連絡やスパムとみなされる内容は、対応を見送る場合があります
- 返信が必要な場合は、連絡先のメールアドレスや関連情報をご記入ください
