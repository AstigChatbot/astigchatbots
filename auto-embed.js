// Auto embed the Cherry chatbot UI as an iframe so the live widget matches the builder.
(function () {
  const script = document.currentScript;
  const webhookUrl = script?.dataset.webhook || 'https://n8n.srv1291312.hstgr.cloud/webhook/33042864-3282-4dd6-95ab-6ffa983a8196';
  const targetId = script?.dataset.target || '';
  const appUrl = script?.dataset.appUrl || new URL('index.html', script?.src || window.location.href).href;

  function buildRuntimeUrl() {
    const url = new URL(appUrl, window.location.href);
    url.searchParams.set('embed', '1');
    url.searchParams.set('webhook', webhookUrl);
    return url.toString();
  }

  function applyIframeStyles(iframe, inline) {
    iframe.allow = 'clipboard-read; clipboard-write; microphone; autoplay';
    iframe.style.width = '100%';
    iframe.style.height = inline ? '760px' : 'min(90vh, 820px)';
    iframe.style.border = '0';
    iframe.style.borderRadius = '24px';
    iframe.style.background = 'transparent';
    iframe.style.boxShadow = '0 18px 48px rgba(0, 0, 0, 0.35)';
    iframe.style.display = 'block';
  }

  function mountInline(container) {
    const iframe = document.createElement('iframe');
    iframe.src = buildRuntimeUrl();
    applyIframeStyles(iframe, true);
    container.innerHTML = '';
    container.style.width = '100%';
    container.style.maxWidth = '660px';
    container.style.margin = '0 auto';
    container.appendChild(iframe);
  }

  function mountFloating() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-cherry-embed', 'floating');
    wrapper.style.position = 'fixed';
    wrapper.style.right = '16px';
    wrapper.style.bottom = '16px';
    wrapper.style.width = 'min(660px, calc(100vw - 32px))';
    wrapper.style.height = 'min(90vh, 820px)';
    wrapper.style.zIndex = '2147483000';

    const iframe = document.createElement('iframe');
    iframe.src = buildRuntimeUrl();
    applyIframeStyles(iframe, false);
    iframe.style.height = '100%';

    wrapper.appendChild(iframe);
    document.body.appendChild(wrapper);
  }

  function init() {
    if (targetId) {
      const container = document.getElementById(targetId);
      if (container) {
        mountInline(container);
        return;
      }
    }

    mountFloating();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
