// Auto embed Cherry chatbot with optional data-* overrides.
(function () {
  const script = document.currentScript;
  const cssUrl = script?.dataset.css || 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  const jsUrl = script?.dataset.bundle || 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
  const webhookUrl = script?.dataset.webhook || 'https://n8n.srv1291312.hstgr.cloud/webhook/33042864-3282-4dd6-95ab-6ffa983a8196';

  function injectCss() {
    if (document.querySelector(`link[data-cherry-chat-css="${cssUrl}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.dataset.cherryChatCss = cssUrl;
    document.head.appendChild(link);
  }

  async function loadAndStart() {
    injectCss();
    const { createChat } = await import(jsUrl);
    createChat({ webhookUrl });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndStart, { once: true });
  } else {
    loadAndStart();
  }
})();
