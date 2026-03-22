// Embed Cherry by loading the builder app in an iframe and applying the current project snapshot.
(function () {
  const script = document.currentScript;
  if (!script) return;

  function decodeProject(value) {
    if (!value) return null;
    try {
      const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
      const padded = normalized + '='.repeat((4 - (normalized.length % 4 || 4)) % 4);
      const json = decodeURIComponent(escape(atob(padded)));
      return JSON.parse(json);
    } catch (_) {
      return null;
    }
  }

  function normalizeUrl(url, fallback) {
    try {
      return new URL(url || fallback, script.src).href;
    } catch (_) {
      return fallback;
    }
  }

  const project = decodeProject(script.dataset.project || '');
  const appUrl = normalizeUrl(script.dataset.appUrl || 'index.html', script.src);
  const targetId = (script.dataset.target || '').trim();
  const mountTarget = targetId ? document.getElementById(targetId) : document.body;
  if (!mountTarget) return;

  const widget = project?.widget || {};
  const label = (script.dataset.label || widget.label || 'Chat with Cherry').trim();
  const subtext = (script.dataset.subtext || widget.subtext || 'We typically reply in minutes').trim();
  const iconUrl = (script.dataset.iconUrl || widget.icon || '').trim();
  const shape = (script.dataset.iconShape || widget.shape || 'circle').trim();
  const anim = (script.dataset.iconAnim || widget.animation || 'none').trim();
  const is3d = (script.dataset.icon3d || String(!!widget.is3d)) === 'true';
  const iconSize = Math.max(20, Math.min(72, parseInt(script.dataset.iconSize || widget.iconSize || '26', 10) || 26));

  const root = document.createElement('div');
  root.style.position = targetId ? 'relative' : 'fixed';
  root.style.right = targetId ? 'auto' : '24px';
  root.style.bottom = targetId ? 'auto' : '24px';
  root.style.zIndex = '2147483000';
  root.style.fontFamily = "'Outfit', system-ui, sans-serif";

  const panel = document.createElement('div');
  panel.style.position = targetId ? 'relative' : 'fixed';
  panel.style.right = targetId ? '0' : '24px';
  panel.style.bottom = targetId ? '0' : '104px';
  panel.style.width = 'min(420px, calc(100vw - 24px))';
  panel.style.height = 'min(760px, calc(100vh - 132px))';
  panel.style.borderRadius = '24px';
  panel.style.overflow = 'hidden';
  panel.style.background = 'transparent';
  panel.style.border = '0';
  panel.style.boxShadow = 'none';
  panel.style.opacity = '0';
  panel.style.pointerEvents = 'none';
  panel.style.transform = 'translateY(14px) scale(0.98)';
  panel.style.transformOrigin = 'bottom right';
  panel.style.transition = 'opacity 0.22s ease, transform 0.22s ease';

  const frame = document.createElement('iframe');
  frame.title = label;
  frame.allow = 'clipboard-read; clipboard-write; microphone; autoplay';
  frame.style.width = '100%';
  frame.style.height = '100%';
  frame.style.display = 'block';
  frame.style.border = '0';
  frame.style.borderRadius = 'inherit';
  frame.style.background = 'transparent';
  panel.appendChild(frame);

  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.setAttribute('aria-label', label);
  launcher.title = `${label} - ${subtext}`;
  launcher.style.width = '64px';
  launcher.style.height = '64px';
  launcher.style.borderRadius = shape === 'square' ? '12px' : shape === 'rounded' ? '18px' : '999px';
  launcher.style.border = '1px solid rgba(255, 255, 255, 0.18)';
  launcher.style.background = 'linear-gradient(135deg, #6d64ff 0%, #7f4bff 100%)';
  launcher.style.boxShadow = is3d
    ? '0 18px 36px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.16)'
    : '0 18px 36px rgba(0, 0, 0, 0.45)';
  launcher.style.cursor = 'pointer';
  launcher.style.display = 'grid';
  launcher.style.placeItems = 'center';
  launcher.style.padding = '0';
  launcher.style.position = targetId ? 'absolute' : 'fixed';
  launcher.style.right = targetId ? '0' : '24px';
  launcher.style.bottom = targetId ? '0' : '24px';
  launcher.style.zIndex = '2147483001';

  const icon = document.createElement('span');
  icon.style.display = 'block';
  icon.style.width = `${iconSize}px`;
  icon.style.height = `${iconSize}px`;
  icon.style.backgroundPosition = 'center';
  icon.style.backgroundRepeat = 'no-repeat';
  icon.style.backgroundSize = 'contain';
  icon.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.35))';
  icon.style.backgroundImage = iconUrl
    ? `url("${iconUrl.replace(/"/g, '%22')}")`
    : 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 4h16v12H7l-3 3V4z\' stroke=\'%23FFFFFF\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3Ccircle cx=\'9\' cy=\'10\' r=\'1.2\' fill=\'white\'/%3E%3Ccircle cx=\'12\' cy=\'10\' r=\'1.2\' fill=\'white\'/%3E%3Ccircle cx=\'15\' cy=\'10\' r=\'1.2\' fill=\'white\'/%3E%3C/svg%3E")';
  launcher.appendChild(icon);

  if (anim === 'pulse') {
    launcher.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }],
      { duration: 2000, iterations: Infinity, easing: 'ease-in-out' }
    );
  }
  if (anim === 'float') {
    launcher.animate(
      [{ transform: 'translateY(0)' }, { transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }],
      { duration: 3000, iterations: Infinity, easing: 'ease-in-out' }
    );
  }

  let isOpen = false;
  let frameLoaded = false;

  const embeddedBootStyle = [
    'html,body{margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:hidden!important;background:transparent!important;}',
    'body{display:block!important;visibility:visible!important;justify-content:flex-start!important;align-items:stretch!important;}',
    '.app-logo,.background-globes,.floating-menu,.avatar-panel,.drawer-overlay,.project-name-modal,#chat-launcher,.character-section{display:none!important;}',
    '.main-container{display:block!important;width:100%!important;max-width:none!important;height:100vh!important;min-height:100vh!important;margin:0!important;}',
    '.form-interface{width:100%!important;max-width:none!important;height:100vh!important;min-height:100vh!important;margin:0!important;border-radius:0!important;}'
  ].join('');

  function postConfig() {
    if (!project || !frame.contentWindow) return;
    frame.contentWindow.postMessage({ type: 'CHERRY_EMBED_CONFIG', snapshot: project }, '*');
  }

  async function ensureFrame() {
    if (frame.srcdoc || frame.src) return;
    const url = new URL(appUrl, window.location.href);
    try {
      const response = await fetch(url.toString(), { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Failed to load app HTML: ${response.status}`);
      }
      const html = await response.text();
      const baseHref = url.toString().replace(/[^/]*$/, '');
      const withEmbedFlag = html
        .replace(/<html([^>]*)>/i, '<html$1 data-cherry-embed>')
        .replace(/<head([^>]*)>/i, `<head$1><base href="${baseHref}"><style>${embeddedBootStyle}</style>`);
      frame.srcdoc = withEmbedFlag;
      frame.addEventListener('load', () => {
        frameLoaded = true;
        try {
          frame.contentWindow.name = 'CHERRY_EMBED_FRAME';
        } catch (_) {}
        postConfig();
        setTimeout(postConfig, 150);
      }, { once: true });
    } catch (error) {
      console.error('Cherry embed failed to load app HTML.', error);
    }
  }

  function syncOpenState(nextOpen) {
    isOpen = nextOpen;
    if (isOpen) {
      ensureFrame();
      if (frameLoaded) postConfig();
    }
    panel.style.opacity = isOpen ? '1' : '0';
    panel.style.pointerEvents = isOpen ? 'auto' : 'none';
    panel.style.transform = isOpen ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.98)';
    launcher.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  launcher.addEventListener('click', () => syncOpenState(!isOpen));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) {
      syncOpenState(false);
    }
  });

  document.addEventListener('mousedown', (event) => {
    if (!isOpen) return;
    if (panel.contains(event.target) || launcher.contains(event.target)) return;
    syncOpenState(false);
  });

  root.appendChild(panel);
  root.appendChild(launcher);
  mountTarget.appendChild(root);
})();
