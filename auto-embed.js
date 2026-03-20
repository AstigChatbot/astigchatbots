// Auto embed the Cherry chatbot UI as an iframe so the live widget matches the builder.
(function () {
  const script = document.currentScript;
  const webhookUrl = script?.dataset.webhook || 'https://n8n.srv1291312.hstgr.cloud/webhook/33042864-3282-4dd6-95ab-6ffa983a8196';
  const targetId = script?.dataset.target || '';
  const appUrl = script?.dataset.appUrl || new URL('index.html', script?.src || window.location.href).href;
  let appMarkupPromise;

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

  function escapeForInlineScript(value) {
    return String(value)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/<\/script/gi, '<\\/script');
  }

  async function getAppMarkup() {
    if (!appMarkupPromise) {
      appMarkupPromise = fetch(appUrl, { cache: 'no-cache' })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Cherry app fetch failed: ${response.status}`);
          }
          return response.text();
        })
        .then((html) => {
          const baseHref = new URL('.', appUrl).href;
          const configScript = `<script>window.__CHERRY_RUNTIME_CONFIG={embed:true,webhook:'${escapeForInlineScript(webhookUrl)}'};<\/script>`;
          if (/<head[^>]*>/i.test(html)) {
            return html.replace(/<head([^>]*)>/i, `<head$1><base href="${baseHref}">${configScript}`);
          }
          return `<!DOCTYPE html><html><head><base href="${baseHref}">${configScript}</head><body>${html}</body></html>`;
        });
    }
    return appMarkupPromise;
  }

  async function mountInline(container) {
    const iframe = document.createElement('iframe');
    applyIframeStyles(iframe, true);
    iframe.srcdoc = await getAppMarkup();
    container.innerHTML = '';
    container.style.width = '100%';
    container.style.maxWidth = '660px';
    container.style.margin = '0 auto';
    container.appendChild(iframe);
  }

  async function mountFloating() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-cherry-embed', 'floating');
    wrapper.style.position = 'fixed';
    wrapper.style.right = '16px';
    wrapper.style.bottom = '16px';
    wrapper.style.width = 'min(660px, calc(100vw - 32px))';
    wrapper.style.height = 'min(90vh, 820px)';
    wrapper.style.zIndex = '2147483000';

    const iframe = document.createElement('iframe');
    applyIframeStyles(iframe, false);
    iframe.style.height = '100%';
    iframe.srcdoc = await getAppMarkup();

    wrapper.appendChild(iframe);
    document.body.appendChild(wrapper);
  }

  async function init() {
    if (targetId) {
      const container = document.getElementById(targetId);
      if (container) {
        await mountInline(container);
        return;
      }
    }

    await mountFloating();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init().catch((error) => console.error(error));
    }, { once: true });
  } else {
    init().catch((error) => console.error(error));
  }
})();
