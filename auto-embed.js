// Auto embed Cherry chatbot
(function(){
  const cssUrl = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  const jsUrl = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
  const webhookUrl = 'https://n8n.srv1291312.hstgr.cloud/webhook/ddc3aaa6-8566-48d5-82be-e29301e69ea4/chat';

  function injectCss(){
    if (document.querySelector('link[data-cherry-chat-css]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.setAttribute('data-cherry-chat-css','1');
    document.head.appendChild(link);
  }

  async function loadAndStart(){
    injectCss();
    const { createChat } = await import(jsUrl);
    createChat({ webhookUrl });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndStart);
  } else {
    loadAndStart();
  }
})();