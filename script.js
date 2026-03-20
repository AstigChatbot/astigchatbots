document.addEventListener('DOMContentLoaded', () => {
    const flowContainer = document.getElementById('conversation-flow');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const emailBtn = document.getElementById('email-btn');
    const webhookToggle = document.getElementById('webhook-toggle');
    const refreshBtn = document.getElementById('refresh-btn');
    const embedBtn = document.querySelector('.floating-menu .menu-btn.embed');
    const embedDrawer = document.getElementById('embed-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');
    const deployBtn = document.querySelector('.floating-menu .menu-btn.deploy');
    const deployCredsBtn = document.getElementById('deploy-github-btn');
    const widgetBtn = document.querySelector('.left-menu .menu-btn.widget');
    const widgetDrawer = document.getElementById('widget-drawer');
    const widgetOverlay = document.getElementById('widget-overlay');
    const widgetClose = document.getElementById('widget-close');
    const widgetLabelInput = document.getElementById('widget-label');
    const widgetSubtextInput = document.getElementById('widget-subtext');
    const widgetIconInput = document.getElementById('widget-icon-url');
    const widgetIconSizeInput = document.getElementById('widget-icon-size');
    const widgetShapeSelect = document.getElementById('widget-shape');
    const widgetAnimSelect = document.getElementById('widget-anim');
    const widget3dCheckbox = document.getElementById('widget-3d');
    const saveWidgetBtn = document.getElementById('save-widget-settings');
    const widgetStatus = document.getElementById('widget-status');
    const launcher = document.getElementById('chat-launcher');
    const launcherLabel = document.getElementById('chat-launcher-label');
    const launcherSubtext = document.getElementById('chat-launcher-subtext');
    const launcherIcon = document.getElementById('chat-launcher-icon');
    const credsBtn = document.querySelector('.left-menu .menu-btn.credentials');
    const credsDrawer = document.getElementById('creds-drawer');
    const credsOverlay = document.getElementById('creds-overlay');
    const credsClose = document.getElementById('creds-close');
    const githubUrlInput = document.getElementById('github-url');
    const githubBranchInput = document.getElementById('github-branch');
    const githubTokenInput = document.getElementById('github-token');
    const saveGithubSettingsBtn = document.getElementById('save-github-settings');
    const saveGithubTokenBtn = document.getElementById('save-github-token');
    const clearGithubTokenBtn = document.getElementById('clear-github-token');
    const credsStatus = document.getElementById('creds-status');
    const testGithubAccessBtn = document.getElementById('test-github-access');
    const webhookBtn = document.querySelector('.floating-menu .menu-btn.webhook');
    const webhookDrawer = document.getElementById('webhook-drawer');
    const webhookOverlay = document.getElementById('webhook-overlay');
    const webhookClose = document.getElementById('webhook-close');
    const webhookProdInput = document.getElementById('webhook-prod');
    const webhookTestInput = document.getElementById('webhook-test');
    const webhookChatInput = document.getElementById('webhook-chat');
    const webhookStatus = document.getElementById('webhook-status');
    const webhookModeButtons = document.querySelectorAll('.segment[data-target]');
    const saveWebhookSettingsBtn = document.getElementById('save-webhook-settings');
    const embedJsUrlInput = document.getElementById('embed-js-url');
    const embedCssUrlInput = document.getElementById('embed-css-url');
    const embedContainerIdInput = document.getElementById('embed-container-id');
    const embedCodeBlock = document.getElementById('embed-code-block');
    const copyEmbedBtn = document.getElementById('copy-embed');
    const downloadEmbedJsBtn = document.getElementById('download-embed-js');
    const downloadEmbedCssBtn = document.getElementById('download-embed-css');

    // Webhook URLs
    const WEBHOOK_URL_PROD = 'https://n8n.srv1291312.hstgr.cloud/webhook/33042864-3282-4dd6-95ab-6ffa983a8196';
    const WEBHOOK_URL_TEST = 'https://n8n.srv1291312.hstgr.cloud/webhook-test/33042864-3282-4dd6-95ab-6ffa983a8196';
    const DEFAULT_GITHUB_REPO = 'AstigChatbot/astigchatbots';
    const DEFAULT_GITHUB_BRANCH = 'main';
    let currentWebhookUrl = WEBHOOK_URL_PROD;
    const runtimeParams = new URLSearchParams(window.location.search);
    const runtimeConfig = window.__CHERRY_RUNTIME_CONFIG || {};
    const EMBED_MODE = runtimeParams.get('embed') === '1' || runtimeConfig.embed === true;
    const EMBED_WIDGET_MODE = runtimeParams.get('widget') === '1' || runtimeConfig.widget === true;

    if (EMBED_MODE) {
        document.body.classList.add('embed-mode');
    }
    if (EMBED_WIDGET_MODE) {
        document.body.classList.add('embed-widget-mode');
    }

    const STORAGE_KEYS = {
        repo: 'cherry.github.repo',
        branch: 'cherry.github.branch',
        token: 'cherry.github.token',
        launcherLabel: 'cherry.launcher.label',
        launcherSubtext: 'cherry.launcher.subtext',
        launcherIcon: 'cherry.launcher.icon',
        launcherIconSize: 'cherry.launcher.iconSize',
        launcherShape: 'cherry.launcher.shape',
        launcherAnim: 'cherry.launcher.anim',
        launcher3d: 'cherry.launcher.3d',
        webhookProd: 'cherry.webhook.prod',
        webhookTest: 'cherry.webhook.test',
        webhookChat: 'cherry.webhook.chat',
        webhookActive: 'cherry.webhook.active'
    };

    // State for interactive actions
    let isAskingForEmail = false;

    // ... (existing code) ...

    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadChat);
    }

    if (emailBtn) {
        emailBtn.addEventListener('click', requestEmail);
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', restart);
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', hardRefresh);
    }

    if (deployBtn) {
        deployBtn.addEventListener('click', deployToGithub);
    }

    if (deployCredsBtn) {
        deployCredsBtn.addEventListener('click', deployToGithub);
    }

    if (widgetBtn) {
        widgetBtn.addEventListener('click', () => openWidgetDrawer(true));
    }
    if (widgetOverlay) {
        widgetOverlay.addEventListener('click', () => openWidgetDrawer(false));
    }
    if (widgetClose) {
        widgetClose.addEventListener('click', () => openWidgetDrawer(false));
    }
    if (saveWidgetBtn) {
        saveWidgetBtn.addEventListener('click', saveWidgetSettings);
    }

    if (launcher) {
        launcher.addEventListener('click', () => openWidgetDrawer(true));
    }

    if (embedBtn) {
        embedBtn.addEventListener('click', () => openEmbedDrawer(true));
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', () => openEmbedDrawer(false));
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', () => openEmbedDrawer(false));
    }

    if (credsBtn) {
        credsBtn.addEventListener('click', () => openCredsDrawer(true));
    }

    if (credsOverlay) {
        credsOverlay.addEventListener('click', () => openCredsDrawer(false));
    }

    if (credsClose) {
        credsClose.addEventListener('click', () => openCredsDrawer(false));
    }

    [embedJsUrlInput, embedCssUrlInput, embedContainerIdInput].forEach(input => {
        if (input) input.addEventListener('input', updateEmbedCode);
    });

    if (copyEmbedBtn) {
        copyEmbedBtn.addEventListener('click', copyEmbedCode);
    }

    if (downloadEmbedJsBtn) {
        downloadEmbedJsBtn.addEventListener('click', downloadEmbedJs);
    }

    if (downloadEmbedCssBtn) {
        downloadEmbedCssBtn.addEventListener('click', downloadEmbedCss);
    }

    if (webhookBtn) {
        webhookBtn.addEventListener('click', () => openWebhookDrawer(true));
    }

    if (webhookOverlay) {
        webhookOverlay.addEventListener('click', () => openWebhookDrawer(false));
    }

    if (webhookClose) {
        webhookClose.addEventListener('click', () => openWebhookDrawer(false));
    }

    if (saveWebhookSettingsBtn) {
        saveWebhookSettingsBtn.addEventListener('click', saveWebhookSettings);
    }

    webhookModeButtons.forEach(btn => {
        btn.addEventListener('click', () => setActiveWebhook(btn.dataset.target));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (embedDrawer?.classList.contains('open')) openEmbedDrawer(false);
            if (credsDrawer?.classList.contains('open')) openCredsDrawer(false);
            if (webhookDrawer?.classList.contains('open')) openWebhookDrawer(false);
        }
    });

    // Form State
    let currentStep = 0;
    const formData = {
        sessionId: generateSessionId(),
        name: '',
        email: '',
        inquiry: ''
    };

    // ... rest of initialization ...

    function downloadChat() {
        let transcript = "Chat Transcript - Cherry\n\n";

        // Get all history items (including hidden ones)
        const historyItems = flowContainer.querySelectorAll('.history-item');
        historyItems.forEach(item => {
            const q = item.querySelector('.history-q');
            const a = item.querySelector('.history-a');

            if (q) transcript += `Cherry: ${q.innerText.replace(/\n/g, ' ')}\n`;
            if (a) transcript += `You: ${a.innerText.replace(/\n/g, ' ')}\n`;
            transcript += "\n";
        });

        // Get current step if it has content (e.g. the last response)
        const current = flowContainer.querySelector('.current-step h2');
        if (current && current.innerText) {
            transcript += `Cherry: ${current.innerText.replace(/\n/g, ' ')}\n`;
        }

        const blob = new Blob([transcript], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-transcript-${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    // ... existing functions ...
    // Form State
    // Steps Definition

    const steps = [
        {
            field: 'name',
            question: "I'm Cherry.<br>Who am I speaking with?",
            placeholder: "Type here..."
        },

        {
            field: 'inquiry',
            question: "Nice to meet you, <span class='highlight'>{name}</span>.<br>What's on your mind?",
            placeholder: "Type here..."
        }
    ];

    // Initialize
    renderStep();
    updateEmbedDefaults();
    updateEmbedCode();
    hydrateGithubSettings();
    hydrateWebhookSettings();
    hydrateWidgetSettings();



    function createBotMessage() {
        // Create Wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'message-wrapper';

        // Add Avatar
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar';
        avatarDiv.innerHTML = `<img src="assets/character_standin.png" alt="Cherry">`;
        wrapper.appendChild(avatarDiv);

        // Add Content Area
        const stepDiv = document.createElement('div');
        stepDiv.className = 'current-step';
        wrapper.appendChild(stepDiv);

        flowContainer.appendChild(wrapper);
        return stepDiv; // Return the content div for manipulation
    }

    function renderStep() {
        // Clear previous 'current-step' classes but keep history
        archiveCurrentStep();

        if (currentStep < steps.length) {
            // Render Next Question
            const stepData = steps[currentStep];
            let qText = stepData.question;

            // Replace placeholders
            if (formData.name) {
                qText = qText.replace('{name}', formData.name);
            }

            // Create Message Block with Avatar
            const stepDiv = createBotMessage();
            stepDiv.innerHTML = `<h2></h2>`;

            // Trigger typing
            const h2 = stepDiv.querySelector('h2');
            typeText(h2, qText);

            userInput.placeholder = stepData.placeholder;
            userInput.value = '';
            userInput.focus();
            userInput.disabled = false;
        } else {
            // Submission Step
            submitForm();
        }

        scrollToBottom();
    }

    function typeText(element, html, speed = 40) {
        element.innerHTML = html; // Set initial structure (hidden text)

        const textNodes = [];
        // Walk the tree to find all text nodes
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            textNodes.push({ node: node, text: node.nodeValue });
            node.nodeValue = ''; // Clear text content initially
        }

        let nodeIdx = 0;
        let charIdx = 0;

        function type() {
            if (nodeIdx >= textNodes.length) return;

            const currentItem = textNodes[nodeIdx];

            if (charIdx < currentItem.text.length) {
                currentItem.node.nodeValue += currentItem.text.charAt(charIdx);
                charIdx++;
                setTimeout(type, speed);
                scrollToBottom();
            } else {
                nodeIdx++;
                charIdx = 0;
                type(); // Proceed to next text node immediately
            }
        }

        // Start typing if there is text
        if (textNodes.length > 0) {
            type();
        }
    }

    function addToHistory(answer) {
        // Find the active question wrapper content
        // The last child of flowContainer is now .message-wrapper
        const lastWrapper = flowContainer.lastElementChild;
        if (lastWrapper) {
            const activeStep = lastWrapper.querySelector('.current-step') || lastWrapper.querySelector('.history-item');
            // It might be activeStep or historyItem depending on timing, usually it's current-step when user types
            if (activeStep) {
                const answerSpan = document.createElement('span');
                answerSpan.className = 'history-a';
                answerSpan.textContent = answer;
                activeStep.appendChild(answerSpan);
            }
        }
    }

    function requestEmail() {
        if (isAskingForEmail) return; // Already asking
        isAskingForEmail = true;

        // Render Bot Question
        const stepDiv = createBotMessage();
        stepDiv.innerHTML = `<h2></h2>`;

        const h2 = stepDiv.querySelector('h2');
        typeText(h2, "To stay in touch, could you please share your email address?");

        userInput.placeholder = "Enter your email...";
        userInput.value = '';
        userInput.focus();
        scrollToBottom();
    }

    async function handleNext() {
        const text = userInput.value.trim();
        if (!text) return;

        // Show Answer visually
        addToHistory(text);

        if (isAskingForEmail) {
            // Handle Email Input
            formData.email = text;
            isAskingForEmail = false;

            // Archive and send logic similar to continuous chat
            archiveCurrentStep();

            // Store original inquiry if needed, or just append details
            // Temporarily piggyback on inquiry to ensure it sends useful context if webhook isn't updated to look for email field explicitly
            // But we also have formData.email set

            // We can send a specific 'inquiry' saying user provided email
            formData.inquiry = `[User provided email: ${text}]`;

            userInput.value = '';
            scrollToBottom();
            submitForm();
            return;
        }

        if (currentStep < steps.length) {
            // Save Data for wizard steps
            const currentField = steps[currentStep].field;
            formData[currentField] = text;

            currentStep++;
            userInput.value = '';
            renderStep();
        } else {
            // Continuous Chat Mode
            archiveCurrentStep();
            formData.inquiry = text; // Send new text as inquiry
            userInput.value = '';
            scrollToBottom(); // Scroll after user message archives
            submitForm();
        }
    }

    function archiveCurrentStep() {
        // Find the wrapper with current-step
        // We can search the whole container or just look at last child
        const currentWrapper = flowContainer.querySelector('.message-wrapper:has(.current-step)') || flowContainer.lastElementChild;
        // :has support is good but fallback to lastElementChild is safer if structure holds

        if (currentWrapper) {
            const previousCurrent = currentWrapper.querySelector('.current-step');
            if (previousCurrent) {
                previousCurrent.classList.remove('current-step');
                previousCurrent.classList.add('history-item');
                // Change H2 to span for history styling
                const h2 = previousCurrent.querySelector('h2');
                if (h2) {
                    const spanQ = document.createElement('span');
                    spanQ.className = 'history-q';
                    spanQ.innerHTML = h2.innerHTML; // Keep HTML for highlights
                    previousCurrent.replaceChild(spanQ, h2);
                }
            }
        }
        pruneHistory();
    }

    function pruneHistory() {
        // Prune the wrappers, not just items inside
        const wrappers = flowContainer.querySelectorAll('.message-wrapper');
        // Keep only the last 2 wrappers visible
        if (wrappers.length > 2) {
            for (let i = 0; i < wrappers.length - 2; i++) {
                wrappers[i].style.display = 'none';
            }
        }
    }

    async function submitForm() {
        // Show Loading
        const stepDiv = createBotMessage();
        const loadingHTML = `<div class="loading-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
        stepDiv.innerHTML = loadingHTML;

        scrollToBottom(); // Scroll to show loading
        userInput.disabled = true;
        userInput.placeholder = "Please wait...";


        try {
            console.log("Submitting to:", currentWebhookUrl); // Debug log
            const response = await fetch(currentWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseText = await response.text();
            try {
                data = responseText ? JSON.parse(responseText) : {};
            } catch (e) {
                console.warn("Could not parse JSON response, using text:", e);
                data = { text: responseText };
            }

            console.log("Webhook Response:", data); // Debug log

            // Success Message
            // Check for common n8n response fields: output, text, message, or nested data
            let botReply = "Thank you for reaching out.";

            if (data) {
                if (data.output) botReply = data.output;
                else if (data.text) botReply = data.text;
                else if (data.message) botReply = data.message;
                else if (Array.isArray(data) && data.length > 0) {
                    // Sometimes n8n returns an array of items
                    const firstItem = data[0];
                    if (firstItem.output) botReply = firstItem.output;
                    else if (firstItem.text) botReply = firstItem.text;
                    else if (firstItem.message) botReply = firstItem.message;
                } else if (typeof data === 'string') {
                    botReply = data;
                }
            }

            stepDiv.innerHTML = `<h2>${botReply}</h2>`;
            scrollToBottom(); // Scroll to show bot response


        } catch (error) {
            console.error(error);
            stepDiv.innerHTML = `<h2>Error: ${error.message}</h2>`;
        } finally {
            userInput.disabled = false;
            userInput.placeholder = "Type here...";
            userInput.focus();
        }
    }





    function scrollToBottom() {
        // Use timeout to ensure DOM has updated
        setTimeout(() => {
            flowContainer.scrollTop = flowContainer.scrollHeight;
        }, 400);
    }

    function restart() {
        currentStep = 0;
        formData.sessionId = generateSessionId();
        formData.name = '';
        formData.inquiry = '';
        flowContainer.innerHTML = '';
        renderStep();
    }

    function hardRefresh() {
        const baseUrl = window.location.href.split('#')[0];
        const hasQuery = baseUrl.includes('?');
        const bust = `${baseUrl}${hasQuery ? '&' : '?'}refresh=${Date.now()}`;
        // location.replace avoids extra history entries
        window.location.replace(bust);
    }

    function openEmbedDrawer(show) {
        if (!embedDrawer || !drawerOverlay) return;
        embedDrawer.classList.toggle('open', show);
        drawerOverlay.classList.toggle('show', show);
        embedDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
    }

    function openCredsDrawer(show) {
        if (!credsDrawer || !credsOverlay) return;
        credsDrawer.classList.toggle('open', show);
        credsOverlay.classList.toggle('show', show);
        credsDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
    }

    function openWebhookDrawer(show) {
        if (!webhookDrawer || !webhookOverlay) return;
        webhookDrawer.classList.toggle('open', show);
        webhookOverlay.classList.toggle('show', show);
        webhookDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
    }

    function openWidgetDrawer(show) {
        if (!widgetDrawer || !widgetOverlay) return;
        widgetDrawer.classList.toggle('open', show);
        widgetOverlay.classList.toggle('show', show);
        widgetDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
    }

    function updateEmbedDefaults() {
        const ghBase = 'https://cdn.jsdelivr.net/gh/AstigChatbot/astigchatbots@main';
        if (embedJsUrlInput && !embedJsUrlInput.value) {
            embedJsUrlInput.value = `${ghBase}/auto-embed.js`;
        }
        if (embedCssUrlInput && !embedCssUrlInput.value) {
            embedCssUrlInput.value = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
        }
    }

    function buildEmbedCode() {
        const jsUrl = (embedJsUrlInput?.value || '').trim() || 'https://cdn.jsdelivr.net/gh/AstigChatbot/astigchatbots@main/auto-embed.js';
        const cssUrl = (embedCssUrlInput?.value || '').trim() || 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
        const webhook = currentWebhookUrl || WEBHOOK_URL_PROD;
        const useDefaultCss = cssUrl === 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
        return useDefaultCss
            ? `<script src="${jsUrl}" data-webhook="${webhook}"></script>`
            : `<script src="${jsUrl}" data-webhook="${webhook}" data-css="${cssUrl}"></script>`;
    }

    function updateEmbedCode() {
        if (!embedCodeBlock) return;
        embedCodeBlock.textContent = buildEmbedCode();
    }

    // -----------------------------
    // Widget settings
    // -----------------------------
    function applyLauncher(label, subtext, iconUrl, shape, anim, is3d, iconSize) {
        const lbl = label || 'Chat with Cherry';
        const sub = subtext || 'We typically reply in minutes';
        const shapeClass = shape || 'circle';
        const animClass = anim || 'none';
        const size = parseInt(iconSize, 10) || 26;
        if (launcher) {
            launcher.setAttribute('aria-label', lbl);
            launcher.title = `${lbl} — ${sub}`;
            launcher.classList.remove('circle', 'rounded', 'square', 'anim-pulse', 'anim-float', 'chat-launcher--3d');
            launcher.classList.add(shapeClass);
            if (animClass === 'pulse') launcher.classList.add('anim-pulse');
            if (animClass === 'float') launcher.classList.add('anim-float');
            if (is3d) launcher.classList.add('chat-launcher--3d');
        }
        if (launcherLabel) launcherLabel.textContent = lbl;
        if (launcherSubtext) launcherSubtext.textContent = sub;
        if (launcherIcon) {
            if (iconUrl) {
                launcherIcon.style.backgroundImage = `url('${iconUrl}')`;
            } else {
                launcherIcon.style.backgroundImage = '';
            }
            launcherIcon.style.width = `${size}px`;
            launcherIcon.style.height = `${size}px`;
        }
    }

    function hydrateWidgetSettings() {
        const label = localStorage.getItem(STORAGE_KEYS.launcherLabel) || 'Chat with Cherry';
        const subtext = localStorage.getItem(STORAGE_KEYS.launcherSubtext) || 'We typically reply in minutes';
        const icon = localStorage.getItem(STORAGE_KEYS.launcherIcon) || '';
        const iconSize = localStorage.getItem(STORAGE_KEYS.launcherIconSize) || '26';
        const shape = localStorage.getItem(STORAGE_KEYS.launcherShape) || 'circle';
        const anim = localStorage.getItem(STORAGE_KEYS.launcherAnim) || 'none';
        const is3d = (localStorage.getItem(STORAGE_KEYS.launcher3d) || 'false') === 'true';
        if (widgetLabelInput) widgetLabelInput.value = label;
        if (widgetSubtextInput) widgetSubtextInput.value = subtext;
        if (widgetIconInput) widgetIconInput.value = icon;
        if (widgetIconSizeInput) widgetIconSizeInput.value = iconSize;
        if (widgetShapeSelect) widgetShapeSelect.value = shape;
        if (widgetAnimSelect) widgetAnimSelect.value = anim;
        if (widget3dCheckbox) widget3dCheckbox.checked = is3d;
        applyLauncher(label, subtext, icon, shape, anim, is3d, iconSize);
    }

    function saveWidgetSettings() {
        const label = (widgetLabelInput?.value || 'Chat with Cherry').trim() || 'Chat with Cherry';
        const subtext = (widgetSubtextInput?.value || 'We typically reply in minutes').trim() || 'We typically reply in minutes';
        const icon = (widgetIconInput?.value || '').trim();
        const iconSize = (widgetIconSizeInput?.value || '26').trim() || '26';
        const shape = widgetShapeSelect?.value || 'circle';
        const anim = widgetAnimSelect?.value || 'none';
        const is3d = !!widget3dCheckbox?.checked;
        localStorage.setItem(STORAGE_KEYS.launcherLabel, label);
        localStorage.setItem(STORAGE_KEYS.launcherSubtext, subtext);
        localStorage.setItem(STORAGE_KEYS.launcherIcon, icon);
        localStorage.setItem(STORAGE_KEYS.launcherIconSize, iconSize);
        localStorage.setItem(STORAGE_KEYS.launcherShape, shape);
        localStorage.setItem(STORAGE_KEYS.launcherAnim, anim);
        localStorage.setItem(STORAGE_KEYS.launcher3d, String(is3d));
        applyLauncher(label, subtext, icon, shape, anim, is3d, iconSize);
        setWidgetStatus('Launcher saved.', 'success');
    }

    function setWidgetStatus(text, type = 'success') {
        if (!widgetStatus) return;
        widgetStatus.textContent = text;
        widgetStatus.style.color = type === 'error' ? '#f87171' : '#a5f3fc';
    }

    // -----------------------------
    // Deploy to GitHub
    // -----------------------------
    let deployStatusEl = null;

    function getDeployStatusEl() {
        if (EMBED_MODE) return null;
        if (deployStatusEl) return deployStatusEl;
        deployStatusEl = document.createElement('div');
        deployStatusEl.id = 'deploy-status-banner';
        Object.assign(deployStatusEl.style, {
            position: 'fixed',
            top: '14px',
            right: '14px',
            padding: '10px 14px',
            borderRadius: '10px',
            fontFamily: 'var(--font-family, system-ui, sans-serif)',
            fontSize: '0.9rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            zIndex: '120',
            background: 'rgba(24, 24, 27, 0.92)',
            color: '#f8fafc'
        });
        document.body.appendChild(deployStatusEl);
        return deployStatusEl;
    }

    function showDeployStatus(message, percent = 0, type = 'info') {
        const el = getDeployStatusEl();
        if (!el) return;
        const color = type === 'error' ? '#f43f5e' : type === 'success' ? '#22c55e' : '#38bdf8';
        el.style.border = `1px solid ${color}55`;
        el.style.boxShadow = `0 12px 28px ${color}33`;
        el.innerHTML = `<strong style="color:${color}">${Math.min(100, Math.max(0, percent))}%</strong> &nbsp; ${message}`;
    }

    async function fetchSha(repoPath, branch, file, token) {
        try {
            const resp = await fetch(`https://api.github.com/repos/${repoPath}/contents/${file}?ref=${encodeURIComponent(branch)}`, {
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': `Bearer ${token}`,
                    'User-Agent': 'Cherry-Deploy'
                }
            });
            if (resp.ok) {
                const json = await resp.json();
                return json.sha;
            }
        } catch (_) { /* ignore */ }
        return null;
    }

    async function deployToGithub() {
        const repoPath = parseRepoPath(githubUrlInput?.value || localStorage.getItem(STORAGE_KEYS.repo) || DEFAULT_GITHUB_REPO);
        if (!repoPath) {
            openCredsDrawer(true);
            setCredsStatus('Repository is missing. It has been reset to the default project repo.', 'error');
            if (githubUrlInput) githubUrlInput.value = DEFAULT_GITHUB_REPO;
            return;
        }
        const branch = (githubBranchInput?.value || localStorage.getItem(STORAGE_KEYS.branch) || DEFAULT_GITHUB_BRANCH).trim() || DEFAULT_GITHUB_BRANCH;
        const token = (githubTokenInput?.value || localStorage.getItem(STORAGE_KEYS.token) || '').trim();
        if (!token) {
            openCredsDrawer(true);
            showDeployStatus('Paste your GitHub token once, then press Deploy again.', 0, 'error');
            setCredsStatus('Paste a GitHub token with repository write access, then press Deploy to GitHub.', 'error');
            if (githubUrlInput && !githubUrlInput.value.trim()) githubUrlInput.value = repoPath;
            if (githubBranchInput && !githubBranchInput.value.trim()) githubBranchInput.value = branch;
            return;
        }

        const files = getDeployFiles();
        let completed = 0;

        for (const file of files) {
            const progress = Math.round((completed / files.length) * 100);
            showDeployStatus(`Uploading ${file}...`, progress, 'info');
            try {
                const encoded = await fetchFileContentBase64(file);
                const sha = await fetchSha(repoPath, branch, file, token);

                const body = {
                    message: `Deploy ${file}`,
                    content: encoded,
                    branch
                };
                if (sha) body.sha = sha;

                const ghResp = await fetch(`https://api.github.com/repos/${repoPath}/contents/${file}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/vnd.github+json',
                        'Authorization': `Bearer ${token}`,
                        'User-Agent': 'Cherry-Deploy',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });

                if (!ghResp.ok) {
                    const text = await ghResp.text();
                    throw new Error(`GitHub ${ghResp.status}: ${text}`);
                }
            } catch (err) {
                showDeployStatus(`Error deploying ${file}: ${err.message}`, progress, 'error');
                setCredsStatus(`Deploy failed: ${err.message}`, 'error');
                return;
            }
            completed += 1;
        }

        showDeployStatus('Deploy complete', 100, 'success');
        setCredsStatus(`Deploy complete: ${repoPath} updated on ${branch}.`, 'success');
        setTimeout(() => {
            if (deployStatusEl) deployStatusEl.remove();
            deployStatusEl = null;
        }, 3200);
    }

    function getDeployFiles() {
        return [
            'index.html',
            'styles.css',
            'script.js',
            'embed.js',
            'auto-embed.js',
            'assets/astig_logo.png',
            'assets/character_standin.jpg',
            'assets/character_standin.png',
            'assets/cherry-logo.png',
            'assets/couple_photo.png',
            'assets/favicon.png',
            'assets/floral_motif.png',
            'assets/gallery_1.png',
            'assets/gallery_2.png',
            'assets/gallery_3.png',
            'assets/hero_background.png'
        ];
    }

    function encodeBytesToBase64(bytes) {
        let binary = '';
        const chunkSize = 0x8000;
        for (let i = 0; i < bytes.length; i += chunkSize) {
            binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
        }
        return btoa(binary);
    }

    function encodeTextToBase64(text) {
        return encodeBytesToBase64(new TextEncoder().encode(text));
    }

    function getCurrentDocumentHtml() {
        const doctype = document.doctype
            ? `<!DOCTYPE ${document.doctype.name}${document.doctype.publicId ? ` PUBLIC "${document.doctype.publicId}"` : ''}${!document.doctype.publicId && document.doctype.systemId ? ' SYSTEM' : ''}${document.doctype.systemId ? ` "${document.doctype.systemId}"` : ''}>\n`
            : '<!DOCTYPE html>\n';
        return `${doctype}${document.documentElement.outerHTML}`;
    }

    function getEmbeddedDeployManifest() {
        const el = document.getElementById('deploy-manifest');
        if (!el?.textContent) return null;
        try {
            return JSON.parse(el.textContent);
        } catch (_) {
            return null;
        }
    }

    async function fetchFileContentBase64(file) {
        if (file === 'index.html') {
            return encodeTextToBase64(getCurrentDocumentHtml());
        }

        const embeddedManifest = getEmbeddedDeployManifest();
        if (embeddedManifest?.[file]) {
            return embeddedManifest[file];
        }

        const url = new URL(file, window.location.href).href;
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) {
            throw new Error(`could not read ${file}`);
        }
        return encodeBytesToBase64(new Uint8Array(await res.arrayBuffer()));
    }

    function copyEmbedCode() {
        const code = buildEmbedCode();
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(code);
            copyEmbedBtn.textContent = 'Copied';
            setTimeout(() => copyEmbedBtn.textContent = 'Copy', 1200);
        } else {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    }

    function downloadEmbedJs() {
        const containerId = (embedContainerIdInput?.value || 'cherry-embed').trim() || 'cherry-embed';
        const content = `(() => {\n  const target = (document.currentScript.dataset.target) || '${containerId}';\n  const host = '${window.location.origin}';\n  const container = document.getElementById(target);\n  if (!container) return;\n  const iframe = document.createElement('iframe');\n  iframe.src = host;\n  iframe.allow = 'clipboard-read; clipboard-write; microphone; autoplay';\n  iframe.style = 'width:100%;min-height:520px;border:0;border-radius:16px;box-shadow:0 12px 30px rgba(0,0,0,0.25);';\n  container.innerHTML = '';\n  container.appendChild(iframe);\n})();\n`;
        triggerDownload('cherry-embed.js', content, 'text/javascript');
    }

    function downloadEmbedCss() {
        const containerId = (embedContainerIdInput?.value || 'cherry-embed').trim() || 'cherry-embed';
        const content = `#${containerId} {\n  width: 100%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n#${containerId} iframe {\n  width: 100%;\n  min-height: 520px;\n  border: none;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n  background: transparent;\n}\n`;
        triggerDownload('cherry-embed.css', content, 'text/css');
    }

    function triggerDownload(filename, content, type = 'text/plain') {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function hydrateGithubSettings() {
        try {
            const repo = localStorage.getItem(STORAGE_KEYS.repo) || DEFAULT_GITHUB_REPO;
            const branch = localStorage.getItem(STORAGE_KEYS.branch) || DEFAULT_GITHUB_BRANCH;
            const token = localStorage.getItem(STORAGE_KEYS.token);
            if (githubUrlInput) githubUrlInput.value = repo || '';
            if (githubBranchInput) githubBranchInput.value = branch;
            if (githubTokenInput) githubTokenInput.value = token || '';
            setCredsStatus(token ? 'Ready to deploy.' : 'Paste your GitHub token once, then press Deploy.', token ? 'success' : 'error');
        } catch (e) {
            setCredsStatus('Local storage not available in this context.', 'error');
        }
    }

    function saveGithubSettings() {
        try {
            if (githubUrlInput) {
                githubUrlInput.value = githubUrlInput.value.trim() || DEFAULT_GITHUB_REPO;
                localStorage.setItem(STORAGE_KEYS.repo, githubUrlInput.value);
            }
            if (githubBranchInput) {
                githubBranchInput.value = githubBranchInput.value.trim() || DEFAULT_GITHUB_BRANCH;
                localStorage.setItem(STORAGE_KEYS.branch, githubBranchInput.value);
            }
            flashButton(saveGithubSettingsBtn, 'Saved');
            setCredsStatus('Repo and branch saved.', 'success');
        } catch (e) {
            setCredsStatus('Could not save (storage blocked).', 'error');
        }
    }

    function saveGithubToken() {
        try {
            if (githubTokenInput) localStorage.setItem(STORAGE_KEYS.token, githubTokenInput.value.trim());
            flashButton(saveGithubTokenBtn, 'Token Saved');
            setCredsStatus('Token saved locally.', 'success');
        } catch (e) {
            setCredsStatus('Could not save token (storage blocked).', 'error');
        }
    }

    function clearGithubToken() {
        try {
            localStorage.removeItem(STORAGE_KEYS.token);
            if (githubTokenInput) githubTokenInput.value = '';
            flashButton(clearGithubTokenBtn, 'Cleared');
            setCredsStatus('Token cleared.', 'success');
        } catch (e) {
            setCredsStatus('Could not clear token.', 'error');
        }
    }

    if (saveGithubSettingsBtn) saveGithubSettingsBtn.addEventListener('click', saveGithubSettings);
    if (saveGithubTokenBtn) saveGithubTokenBtn.addEventListener('click', saveGithubToken);
    if (clearGithubTokenBtn) clearGithubTokenBtn.addEventListener('click', clearGithubToken);
    if (testGithubAccessBtn) testGithubAccessBtn.addEventListener('click', testGithubAccess);

    function flashButton(btn, text) {
        if (!btn) return;
        const original = btn.textContent;
        btn.textContent = text;
        setTimeout(() => btn.textContent = original, 1200);
    }

    function setCredsStatus(message, tone = 'success') {
        if (!credsStatus) return;
        credsStatus.textContent = message;
        credsStatus.classList.remove('success', 'error');
        credsStatus.classList.add(tone);
    }

    function hydrateWebhookSettings() {
        const prod = localStorage.getItem(STORAGE_KEYS.webhookProd) || WEBHOOK_URL_PROD;
        const test = localStorage.getItem(STORAGE_KEYS.webhookTest) || WEBHOOK_URL_TEST;
        const chat = localStorage.getItem(STORAGE_KEYS.webhookChat) || '';
        const active = localStorage.getItem(STORAGE_KEYS.webhookActive) || 'prod';

        if (webhookProdInput) webhookProdInput.value = prod;
        if (webhookTestInput) webhookTestInput.value = test;
        if (webhookChatInput) webhookChatInput.value = chat;

        setActiveWebhook(active, false);
        updateWebhookStatus(`Active: ${active.toUpperCase()}`);
    }

    function saveWebhookSettings() {
        try {
            if (webhookProdInput) localStorage.setItem(STORAGE_KEYS.webhookProd, webhookProdInput.value.trim() || WEBHOOK_URL_PROD);
            if (webhookTestInput) localStorage.setItem(STORAGE_KEYS.webhookTest, webhookTestInput.value.trim() || WEBHOOK_URL_TEST);
            if (webhookChatInput) localStorage.setItem(STORAGE_KEYS.webhookChat, webhookChatInput.value.trim());
            if (saveWebhookSettingsBtn) flashButton(saveWebhookSettingsBtn, 'Saved');
            updateWebhookStatus('Saved webhook URLs.', 'success');
            const active = localStorage.getItem(STORAGE_KEYS.webhookActive) || 'prod';
            setActiveWebhook(active, false);
        } catch (e) {
            updateWebhookStatus('Could not save webhook URLs (storage blocked).', 'error');
        }
    }

    function setActiveWebhook(mode, persist = true) {
        const prod = webhookProdInput?.value?.trim() || localStorage.getItem(STORAGE_KEYS.webhookProd) || WEBHOOK_URL_PROD;
        const test = webhookTestInput?.value?.trim() || localStorage.getItem(STORAGE_KEYS.webhookTest) || WEBHOOK_URL_TEST;
        const chat = webhookChatInput?.value?.trim() || localStorage.getItem(STORAGE_KEYS.webhookChat) || '';

        switch (mode) {
            case 'test':
                currentWebhookUrl = test || WEBHOOK_URL_TEST;
                if (webhookToggle) webhookToggle.checked = true;
                break;
            case 'chat':
                currentWebhookUrl = chat || prod;
                if (webhookToggle) webhookToggle.checked = false;
                break;
            default:
                currentWebhookUrl = prod || WEBHOOK_URL_PROD;
                if (webhookToggle) webhookToggle.checked = false;
                mode = 'prod';
        }

        if (persist) localStorage.setItem(STORAGE_KEYS.webhookActive, mode);

        webhookModeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === mode);
        });

        updateWebhookStatus(`Active: ${mode.toUpperCase()}`);
    }

    function updateWebhookStatus(message, tone = 'success') {
        if (!webhookStatus) return;
        webhookStatus.textContent = message;
        webhookStatus.classList.remove('success', 'error');
        webhookStatus.classList.add(tone);
    }

    function parseRepoPath(url) {
        if (!url) return null;
        const trimmed = url.trim().replace(/^https?:\/\/github\.com\//i, '');
        const parts = trimmed.replace(/^\/+/, '').split('/');
        if (parts.length >= 2 && parts[0] && parts[1]) {
            return `${parts[0]}/${parts[1].replace(/\.git$/, '')}`;
        }
        return null;
    }

    async function testGithubAccess() {
        const repoPath = parseRepoPath(githubUrlInput?.value || DEFAULT_GITHUB_REPO);
        if (!repoPath) {
            setCredsStatus('Enter a valid GitHub repo URL (e.g., https://github.com/owner/repo).', 'error');
            return;
        }
        const token = (githubTokenInput?.value || '').trim() || localStorage.getItem(STORAGE_KEYS.token);
        if (!token) {
            setCredsStatus('Add a GitHub token first.', 'error');
            return;
        }

        const branch = (githubBranchInput?.value || localStorage.getItem(STORAGE_KEYS.branch) || DEFAULT_GITHUB_BRANCH).trim() || DEFAULT_GITHUB_BRANCH;
        setCredsStatus('Testing access...', 'success');

        try {
            const commonHeaders = {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
                'User-Agent': 'Cherry-Embed-Checker'
            };

            // First, verify repo exists and get default branch
            const repoResp = await fetch(`https://api.github.com/repos/${repoPath}`, { headers: commonHeaders });
            if (repoResp.status === 404) {
                setCredsStatus('Repo not found (check URL or token scope).', 'error');
                return;
            }
            if (repoResp.status === 401) {
                setCredsStatus('Unauthorized: token invalid or missing scopes.', 'error');
                return;
            }
            if (!repoResp.ok) {
                setCredsStatus(`Failed (status ${repoResp.status}) getting repo.`, 'error');
                return;
            }

            let targetBranch = branch;
            try {
                const repoJson = await repoResp.json();
                if (!targetBranch && repoJson.default_branch) {
                    targetBranch = repoJson.default_branch;
                }
            } catch { /* ignore JSON parsing issues */ }

            const resp = await fetch(`https://api.github.com/repos/${repoPath}/branches/${targetBranch}`, {
                headers: {
                    ...commonHeaders
                },
                cache: 'no-store'
            });

            if (resp.status === 200) {
                setCredsStatus(`Success: can read ${repoPath} @ ${targetBranch}.`, 'success');
            } else if (resp.status === 404) {
                setCredsStatus('Repo or branch not found (check URL/branch/token scopes).', 'error');
            } else if (resp.status === 401) {
                setCredsStatus('Unauthorized: token invalid or missing scopes.', 'error');
            } else {
                setCredsStatus(`Failed (status ${resp.status}).`, 'error');
            }
        } catch (e) {
            setCredsStatus('Network error while contacting GitHub.', 'error');
        }
    }

    function generateSessionId() {
        return 'sess-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    // Event Listeners
    sendBtn.addEventListener('click', handleNext);
    restartBtn.addEventListener('click', restart);

    // Toggle Event Listener
    if (webhookToggle) {
        webhookToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                setActiveWebhook('test');
                console.log("Switched to Test Webhook");
            } else {
                setActiveWebhook('prod');
                console.log("Switched to Prod Webhook");
            }
        });
    }

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent any default form action
            handleNext();
        }
    });

});
