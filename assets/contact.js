document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('submit-btn');
  const statusDiv = document.getElementById('form-status');
  if (!submitBtn || !statusDiv) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]');

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim(),
      website: document.getElementById('website') ? document.getElementById('website').value : '',
    };

    if (turnstileResponse) {
      formData['cf-turnstile-response'] = turnstileResponse.value;
    }

    if (!formData.name || !formData.email || !formData.message) {
      statusDiv.textContent = 'すべての必須項目を入力してください。';
      statusDiv.className = 'form-status error';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = '送信中...';
    statusDiv.textContent = '';
    statusDiv.className = 'form-status';

    try {
      const response = await fetch('https://your-worker.your-subdomain.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        statusDiv.textContent = 'お問い合わせありがとうございます。メッセージが送信されました。';
        statusDiv.className = 'form-status success';
        form.reset();
        if (typeof turnstile !== 'undefined') {
          turnstile.reset();
        }
      } else {
        throw new Error(result.error || '送信に失敗しました。');
      }
    } catch (err) {
      statusDiv.textContent = `エラー: ${err.message}`;
      statusDiv.className = 'form-status error';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = '送信する';
    }
  });
});