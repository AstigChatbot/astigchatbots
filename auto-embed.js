// Auto embed the Cherry chatbot as a floating launcher + panel widget.
(function () {
  const script = document.currentScript;
  const webhookUrl = script?.dataset.webhook || 'https://n8n.srv1291312.hstgr.cloud/webhook/33042864-3282-4dd6-95ab-6ffa983a8196';
  const appUrl = script?.dataset.appUrl || new URL('index.html', script?.src || window.location.href).href;
  const launcherIconUrl = script?.dataset.iconUrl || 'https://widjets.astigmedia.com/img/main-logo.png';
  const launcherShape = (script?.dataset.iconShape || 'circle').trim().toLowerCase();
  const launcherAnim = (script?.dataset.iconAnim || 'none').trim().toLowerCase();
  const launcher3d = script?.dataset.icon3d === 'true';
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

  function injectHostStyles() {
    if (document.getElementById('cherry-embed-host-styles')) return;
    const style = document.createElement('style');
    style.id = 'cherry-embed-host-styles';
    style.textContent = `
@keyframes cherryLauncherPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.06); }
  100% { transform: scale(1); }
}
@keyframes cherryLauncherFloat {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
}`;
    document.head.appendChild(style);
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
          const embedStyle = `<style>
html, body {
  background: transparent !important;
  overflow: hidden !important;
  scrollbar-width: none !important;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar,
.conversation-flow::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.conversation-flow {
  scrollbar-width: none !important;
}
body .app-logo,
body .floating-menu,
body .left-menu,
body .background-globes,
body.embed-widget-mode .chat-launcher,
body #deploy-status-banner {
  display: none !important;
}
</style>`;
          if (/<head[^>]*>/i.test(html)) {
            return html.replace(/<head([^>]*)>/i, `<head$1><base href="${baseHref}">${configScript}${embedStyle}`);
          }
          return `<!DOCTYPE html><html><head><base href="${baseHref}">${configScript}${embedStyle}</head><body>${html}</body></html>`;
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
    launcher.style.boxShadow = launcher3d
      ? '0 18px 36px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.16)'
      : '0 18px 36px rgba(0, 0, 0, 0.45)';
    launcher.style.cursor = 'pointer';
    launcher.style.display = 'grid';
    launcher.style.placeItems = 'center';
    launcher.style.padding = '0';
    launcher.style.overflow = 'hidden';
    if (launcherAnim === 'pulse') {
      launcher.style.animation = 'cherryLauncherPulse 2s ease-in-out infinite';
    } else if (launcherAnim === 'float') {
      launcher.style.animation = 'cherryLauncherFloat 3s ease-in-out infinite';
    }

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
    panel.style.bottom = '80px';
    panel.style.width = 'min(620px, calc(100vw - 24px))';
    panel.style.height = 'min(88vh, 800px)';
    panel.style.borderRadius = '0';
    panel.style.overflow = 'hidden';
    panel.style.boxShadow = 'none';
    panel.style.background = 'transparent';

    const loading = document.createElement('div');
    loading.textContent = 'Loading Cherry...';
    loading.style.position = 'absolute';
    loading.style.inset = '0';
    loading.style.display = 'grid';
    loading.style.placeItems = 'center';
    loading.style.color = '#e2e8f0';
    loading.style.fontFamily = "'Outfit', sans-serif";
    loading.style.fontSize = '16px';
    loading.style.letterSpacing = '0.02em';
    loading.style.background = 'rgba(15, 23, 42, 0.35)';
    loading.style.backdropFilter = 'blur(10px)';
    loading.style.webkitBackdropFilter = 'blur(10px)';

    const iframe = document.createElement('iframe');
    iframe.allow = 'clipboard-read; clipboard-write; microphone; autoplay';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.style.display = 'block';
    iframe.style.background = 'transparent';
    iframe.style.opacity = '0';
    iframe.addEventListener('load', () => {
      loading.style.display = 'none';
      iframe.style.opacity = '1';
    }, { once: true });
    panel.appendChild(loading);
    panel.appendChild(iframe);

    return { panel, iframe };
  }

  async function initWidget(root) {
    const launcher = createLauncher();
    const { panel, iframe } = createPanel();
    let isOpen = false;
    let isLoaded = false;
    let isLoading = false;
    const preloadPromise = getAppMarkup().catch((error) => {
      console.error(error);
      return null;
    });

    async function ensureLoaded() {
      if (isLoaded || isLoading) return;
      isLoading = true;
      const markup = await preloadPromise || await getAppMarkup();
      if (!markup) {
        isLoading = false;
        return;
      }
      iframe.srcdoc = markup;
      isLoaded = true;
      isLoading = false;
    }

    async function setOpen(nextOpen) {
      if (isLoading && nextOpen !== isOpen) return;
      isOpen = nextOpen;
      panel.hidden = !isOpen;
      launcher.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        ensureLoaded().catch((error) => console.error(error));
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
    injectHostStyles();
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
