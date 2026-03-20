// Auto embed the Cherry chatbot as a floating launcher + panel widget.
(function () {
  const script = document.currentScript;
  const webhookUrl = script?.dataset.webhook || 'https://n8n.srv1291312.hstgr.cloud/webhook/33042864-3282-4dd6-95ab-6ffa983a8196';
  const appUrl = script?.dataset.appUrl || new URL('index.html', script?.src || window.location.href).href;
  const launcherIconUrl = script?.dataset.iconUrl || 'https://widjets.astigmedia.com/img/main-logo.png';
  const launcherShape = (script?.dataset.iconShape || 'circle').trim().toLowerCase();
  const targetId = script?.dataset.target || '';
  let appMarkupPromise;

  function escapeForInlineScript(value) {
    return String(value)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/<\/script/gi, '<\\/script');
  }

  function escapeHtmlAttr(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;');
  }

  function getShapeRadius(shape) {
    if (shape === 'square') return '14px';
    if (shape === 'rounded') return '18px';
    return '999px';
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
          const configScript = `<script>window.__CHERRY_RUNTIME_CONFIG={embed:true,widget:true,webhook:'${escapeForInlineScript(webhookUrl)}'};<\/script>`;
          if (/<head[^>]*>/i.test(html)) {
            return html.replace(/<head([^>]*)>/i, `<head$1><base href="${baseHref}">${configScript}`);
          }
          return `<!DOCTYPE html><html><head><base href="${baseHref}">${configScript}</head><body>${html}</body></html>`;
        });
    }
    return appMarkupPromise;
  }

  function createWidgetRoot(host) {
    const root = document.createElement('div');
    root.setAttribute('data-cherry-embed', 'widget');

    if (host) {
      host.innerHTML = '';
      host.style.position = host.style.position || 'relative';
      host.appendChild(root);
      root.style.position = 'relative';
      root.style.width = '100%';
      root.style.height = '100%';
      root.style.minHeight = '80px';
    } else {
      document.body.appendChild(root);
      root.style.position = 'fixed';
      root.style.right = '16px';
      root.style.bottom = '16px';
      root.style.zIndex = '2147483000';
    }

    return root;
  }

  function createLauncher() {
    const launcher = document.createElement('button');
    launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Open Cherry chat');
    launcher.style.width = '64px';
    launcher.style.height = '64px';
    launcher.style.border = '1px solid rgba(255,255,255,0.18)';
    launcher.style.borderRadius = getShapeRadius(launcherShape);
    launcher.style.background = 'linear-gradient(135deg, #6d64ff 0%, #7f4bff 100%)';
    launcher.style.boxShadow = '0 18px 36px rgba(0, 0, 0, 0.45)';
    launcher.style.cursor = 'pointer';
    launcher.style.display = 'grid';
    launcher.style.placeItems = 'center';
    launcher.style.padding = '0';
    launcher.style.overflow = 'hidden';

    const icon = document.createElement('span');
    icon.setAttribute('aria-hidden', 'true');
    icon.style.width = '50px';
    icon.style.height = '50px';
    icon.style.backgroundImage = `url("${escapeHtmlAttr(launcherIconUrl)}")`;
    icon.style.backgroundRepeat = 'no-repeat';
    icon.style.backgroundPosition = 'center';
    icon.style.backgroundSize = 'contain';
    launcher.appendChild(icon);

    return launcher;
  }

  function createPanel() {
    const panel = document.createElement('div');
    panel.hidden = true;
    panel.style.position = 'absolute';
    panel.style.right = '0';
    panel.style.bottom = '84px';
    panel.style.width = 'min(660px, calc(100vw - 32px))';
    panel.style.height = 'min(90vh, 820px)';
    panel.style.borderRadius = '24px';
    panel.style.overflow = 'hidden';
    panel.style.boxShadow = '0 18px 48px rgba(0, 0, 0, 0.35)';
    panel.style.background = 'transparent';

    const iframe = document.createElement('iframe');
    iframe.allow = 'clipboard-read; clipboard-write; microphone; autoplay';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.style.display = 'block';
    iframe.style.background = 'transparent';
    panel.appendChild(iframe);

    return { panel, iframe };
  }

  async function initWidget(root) {
    const launcher = createLauncher();
    const { panel, iframe } = createPanel();
    let isOpen = false;
    let isLoaded = false;

    async function ensureLoaded() {
      if (isLoaded) return;
      iframe.srcdoc = await getAppMarkup();
      isLoaded = true;
    }

    async function setOpen(nextOpen) {
      isOpen = nextOpen;
      panel.hidden = !isOpen;
      launcher.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        await ensureLoaded();
      }
    }

    launcher.addEventListener('click', () => {
      setOpen(!isOpen).catch((error) => console.error(error));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isOpen) {
        setOpen(false).catch((error) => console.error(error));
      }
    });

    document.addEventListener('click', (event) => {
      if (!isOpen) return;
      if (!root.contains(event.target)) {
        setOpen(false).catch((error) => console.error(error));
      }
    });

    root.appendChild(panel);
    root.appendChild(launcher);
  }

  function applyResponsiveLayout(root) {
    const isFixedRoot = root.style.position === 'fixed';
    if (!isFixedRoot) return;

    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const updateLayout = () => {
      root.style.right = mediaQuery.matches ? '12px' : '16px';
      root.style.bottom = mediaQuery.matches ? '12px' : '16px';
    };

    updateLayout();
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateLayout);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(updateLayout);
    }
  }

  function init() {
    const host = targetId ? document.getElementById(targetId) : null;
    const root = createWidgetRoot(host);
    applyResponsiveLayout(root);
    initWidget(root).catch((error) => console.error(error));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
