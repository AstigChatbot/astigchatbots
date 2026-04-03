// Embed Cherry by loading the builder app in an iframe and applying the current project snapshot.
(function () {
  function resolveScriptElement() {
    if (document.currentScript instanceof HTMLScriptElement) {
      return document.currentScript;
    }

    const scriptCandidates = Array.from(document.getElementsByTagName('script')).reverse();
    return scriptCandidates.find((candidate) => {
      if (!(candidate instanceof HTMLScriptElement)) return false;
      const src = candidate.getAttribute('src') || '';
      const hasCherryData = candidate.hasAttribute('data-project') || candidate.hasAttribute('data-app-url');
      return hasCherryData && (
        /(?:^|\/)(?:auto-embed|cherry-embed-loader)\.js(?:[?#].*)?$/i.test(src) ||
        candidate.hasAttribute('data-cherry-loader')
      );
    }) || null;
  }

  const script = resolveScriptElement();
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
  const appUrl = normalizeUrl(script.dataset.appUrl || 'embed.html', script.src);
  const targetId = (script.dataset.target || '').trim();
  const mode = (script.dataset.mode || '').trim().toLowerCase();
  const isInline = mode === 'inline';
  let mountTarget = targetId ? document.getElementById(targetId) : null;
  if (!mountTarget && isInline) {
    mountTarget = document.createElement('div');
    if (targetId) mountTarget.id = targetId;
    mountTarget.style.width = 'min(100%, 480px)';
    mountTarget.style.minHeight = '560px';
    mountTarget.style.margin = '0 auto';
    script.insertAdjacentElement('beforebegin', mountTarget);
  }
  if (!mountTarget) {
    mountTarget = document.body;
  }

  const widget = project?.widget || {};
  const isTransparentTheme = project?.theme?.style === 'transparent';
  const label = (script.dataset.label || widget.label || 'Chat with Cherry').trim();
  const subtext = (script.dataset.subtext || widget.subtext || 'We typically reply in minutes').trim();
  const subtextDisplay = (script.dataset.subtextDisplay || widget.subtextDisplay || 'hover').trim().toLowerCase();
  const iconUrl = (script.dataset.iconUrl || widget.icon || '').trim();
  const shape = (script.dataset.iconShape || widget.shape || 'circle').trim();
  const anim = (script.dataset.iconAnim || widget.animation || 'none').trim();
  const is3d = (script.dataset.icon3d || String(!!widget.is3d)) === 'true';
  const iconSize = Math.max(18, Math.min(36, parseInt(script.dataset.iconSize || widget.iconSize || '24', 10) || 24));

  const root = document.createElement('div');
  root.style.position = isInline || targetId ? 'relative' : 'fixed';
  root.style.right = isInline || targetId ? 'auto' : '16px';
  root.style.bottom = isInline || targetId ? 'auto' : '16px';
  root.style.width = isInline ? '100%' : '';
  root.style.zIndex = isInline ? 'auto' : '2147483000';
  root.style.fontFamily = "'Outfit', system-ui, sans-serif";

  const panel = document.createElement('div');
  panel.style.position = isInline || targetId ? 'relative' : 'fixed';
  panel.style.right = isInline || targetId ? '0' : '16px';
  panel.style.bottom = isInline || targetId ? '0' : '84px';
  panel.style.width = isInline ? '100%' : 'min(400px, calc(100vw - 20px))';
  panel.style.height = isInline ? 'min(640px, 78vh)' : 'min(760px, calc(100vh - 132px))';
  panel.style.minHeight = isInline ? '560px' : '';
  panel.style.borderRadius = isTransparentTheme ? '0' : '24px';
  panel.style.overflow = 'hidden';
  panel.style.background = 'transparent';
  panel.style.border = '0';
  panel.style.boxShadow = 'none';
  panel.style.zIndex = isInline ? 'auto' : '2147483002';
  panel.style.opacity = isInline ? '1' : '0';
  panel.style.pointerEvents = isInline ? 'auto' : 'none';
  panel.style.transform = isInline ? 'none' : 'translateY(14px) scale(0.98)';
  panel.style.transformOrigin = isInline ? 'center center' : 'bottom right';
  panel.style.transition = isInline ? 'none' : 'opacity 0.22s ease, transform 0.22s ease';

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

  const launcher = isInline ? null : document.createElement('button');
  const hint = isInline ? null : document.createElement('div');
  if (launcher) {
    launcher.type = 'button';
    launcher.setAttribute('aria-label', label);
    launcher.title = `${label} - ${subtext}`;
    launcher.style.width = '56px';
    launcher.style.height = '56px';
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
    launcher.style.right = targetId ? '0' : '16px';
    launcher.style.bottom = targetId ? '0' : '16px';
    launcher.style.zIndex = '2147483001';
  }

  if (hint) {
    hint.textContent = subtext;
    hint.style.position = targetId ? 'absolute' : 'fixed';
    hint.style.right = targetId ? '64px' : '80px';
    hint.style.bottom = targetId ? '6px' : '18px';
    hint.style.maxWidth = '220px';
    hint.style.padding = '10px 14px';
    hint.style.borderRadius = '14px';
    hint.style.border = '1px solid rgba(255, 255, 255, 0.14)';
    hint.style.background = 'rgba(15, 23, 42, 0.96)';
    hint.style.color = '#f8fafc';
    hint.style.fontSize = '13px';
    hint.style.lineHeight = '1.35';
    hint.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.35)';
    hint.style.pointerEvents = 'none';
    hint.style.opacity = '0';
    hint.style.transform = 'translateY(8px)';
    hint.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    hint.style.zIndex = '2147483000';
    if (!subtext || subtextDisplay === 'hidden') {
      hint.style.display = 'none';
    }
    if (subtext && subtextDisplay === 'always') {
      hint.style.opacity = '1';
      hint.style.transform = 'translateY(0)';
    }
  }

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
  if (launcher) {
    launcher.appendChild(icon);
  }

  if (launcher && anim === 'pulse') {
    launcher.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }],
      { duration: 2000, iterations: Infinity, easing: 'ease-in-out' }
    );
  }
  if (launcher && anim === 'float') {
    launcher.animate(
      [{ transform: 'translateY(0)' }, { transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }],
      { duration: 3000, iterations: Infinity, easing: 'ease-in-out' }
    );
  }

  let isOpen = false;
  let frameLoaded = false;

  function setHintVisible(visible) {
    if (!hint || hint.style.display === 'none' || subtextDisplay !== 'hover') return;
    hint.style.opacity = visible ? '1' : '0';
    hint.style.transform = visible ? 'translateY(0)' : 'translateY(8px)';
  }

  function postConfig() {
    if (!project || !frame.contentWindow) return;
    const snapshot = JSON.parse(JSON.stringify(project));
    const webhookOverride = (script.dataset.webhook || '').trim();
    if (webhookOverride) {
      snapshot.webhook = {
        ...(snapshot.webhook || {}),
        prod: webhookOverride,
        active: 'prod'
      };
    }
    frame.contentWindow.postMessage({ type: 'CHERRY_EMBED_CONFIG', snapshot }, '*');
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
      let nextHtml = html.replace(/<head([^>]*)>/i, `<head$1><base href="${baseHref}">`);
      if (isInline) {
        nextHtml = nextHtml.replace(/<html([^>]*)>/i, (match, attrs) => {
          return /data-cherry-inline/i.test(attrs) ? `<html${attrs}>` : `<html${attrs} data-cherry-inline>`;
        });
      }
      frame.srcdoc = nextHtml;
      frame.addEventListener('load', () => {
        frameLoaded = true;
        try {
          frame.contentWindow.name = 'CHERRY_EMBED_FRAME';
        } catch (_) {}
        postConfig();
        setTimeout(postConfig, 150);
      }, { once: true });
    } catch (error) {
      console.error('Cherry embed failed to load app.', error);
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

  function handleFrameMessage(event) {
    if (event.source !== frame.contentWindow) return;
    if (!event.data || event.data.type !== 'CHERRY_EMBED_MINIMIZE') return;

    if (isInline) {
      panel.style.display = 'none';
      return;
    }

    syncOpenState(false);
  }

  window.addEventListener('message', handleFrameMessage);

  if (launcher) {
    const handleLauncherToggle = (event) => {
      event.preventDefault();
      event.stopPropagation();
      syncOpenState(!isOpen);
    };
    launcher.addEventListener('click', handleLauncherToggle);
    launcher.addEventListener('mouseenter', () => setHintVisible(true));
    launcher.addEventListener('mouseleave', () => setHintVisible(false));
    launcher.addEventListener('focus', () => setHintVisible(true));
    launcher.addEventListener('blur', () => setHintVisible(false));

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
  }

  root.appendChild(panel);
  if (launcher) {
    root.appendChild(launcher);
  }
  if (hint) {
    root.appendChild(hint);
  }
  mountTarget.appendChild(root);

  if (isInline) {
    ensureFrame();
  } else {
    // Preload the iframe once the launcher is mounted so the first click only opens it.
    ensureFrame();
  }
})();
