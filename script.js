document.addEventListener('DOMContentLoaded', () => {
    const pageParams = new URLSearchParams(window.location.search);
    const isEmbeddedApp =
        pageParams.get('embed') === '1' ||
        window.name === 'CHERRY_EMBED_FRAME' ||
        document.documentElement.hasAttribute('data-cherry-embed');
    const flowContainer = document.getElementById('conversation-flow');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const emailBtn = document.getElementById('email-btn');
    const webhookToggle = document.getElementById('webhook-toggle');
    const refreshBtn = document.getElementById('refresh-btn');
    const saveProjectBtn = document.getElementById('save-project-btn');
    const openProjectBtn = document.getElementById('open-project-btn');
    const openProjectFileInput = document.getElementById('open-project-file');
    const embedBtn = document.querySelector('.floating-menu .menu-btn.embed');
    const embedDrawer = document.getElementById('embed-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');
    const deployBtn = document.querySelector('.floating-menu .menu-btn.deploy');
    const deployCredsBtn = document.getElementById('deploy-github-btn');
    const widgetBtn = document.querySelector('.left-menu .menu-btn.widget');
    const footerBtn = document.getElementById('footer-menu-btn');
    const logoBtn = document.getElementById('logo-menu-btn');
    const videoBtn = document.getElementById('video-menu-btn');
    const headerBtn = document.getElementById('header-menu-btn');
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
    const backupBtn = document.getElementById('backup-menu-btn');
    const questionsBtn = document.getElementById('questions-menu-btn') || document.querySelector('.left-menu .menu-btn.questions');
    const avatarMenuBtn = document.getElementById('avatars-menu-btn');
    const avatarPanel = document.getElementById('avatar-panel');
    const avatarPanelClose = document.getElementById('avatar-panel-close');
    const themeMenuBtn = document.getElementById('theme-menu-btn');
    const themeDrawer = document.getElementById('theme-drawer');
    const themeOverlay = document.getElementById('theme-overlay');
    const themeClose = document.getElementById('theme-close');
    const themeBackgroundInput = document.getElementById('theme-background');
    const themeStatus = document.getElementById('theme-status');
    const themeStyleButtons = document.querySelectorAll('#theme-drawer [data-theme-style]');
    const saveThemeSettingsBtn = document.getElementById('save-theme-settings');
    const avatarTabButtons = document.querySelectorAll('[data-avatar-tab]');
    const applyAvatarSettingsBtn = document.getElementById('apply-avatar-settings');
    const questionsDrawer = document.getElementById('questions-drawer');
    const questionsOverlay = document.getElementById('questions-overlay');
    const questionsClose = document.getElementById('questions-close');
    const footerDrawer = document.getElementById('footer-drawer');
    const footerOverlay = document.getElementById('footer-overlay');
    const footerClose = document.getElementById('footer-close');
    const footerBrandTextInput = document.getElementById('footer-brand-text');
    const footerBrandUrlInput = document.getElementById('footer-brand-url');
    const footerFontFamilySelect = document.getElementById('footer-font-family');
    const footerFontSizeInput = document.getElementById('footer-font-size');
    const footerAnimationSelect = document.getElementById('footer-animation');
    const footerBackgroundInput = document.getElementById('footer-background');
    const saveFooterSettingsBtn = document.getElementById('save-footer-settings');
    const footerStatus = document.getElementById('footer-status');
    const brandFooter = document.getElementById('brand-footer');
    const brandLink = document.getElementById('brand-link');
    const headerDrawer = document.getElementById('header-drawer');
    const headerOverlay = document.getElementById('header-overlay');
    const headerClose = document.getElementById('header-close');
    const headerShowHomeInput = document.getElementById('header-show-home');
    const headerShowEmailInput = document.getElementById('header-show-email');
    const headerShowDownloadInput = document.getElementById('header-show-download');
    const headerShowRestartInput = document.getElementById('header-show-restart');
    const saveHeaderSettingsBtn = document.getElementById('save-header-settings');
    const headerStatus = document.getElementById('header-status');
    const headerActions = document.getElementById('header-actions');
    const homeBtn = document.getElementById('home-btn');
    const logoDrawer = document.getElementById('logo-drawer');
    const logoOverlay = document.getElementById('logo-overlay');
    const logoClose = document.getElementById('logo-close');
    const logoTargetSelect = document.getElementById('logo-target');
    const logoPresetSelect = document.getElementById('logo-preset');
    const logoUrlInput = document.getElementById('logo-url');
    const logoSizeInput = document.getElementById('logo-size');
    const logoAnimationSelect = document.getElementById('logo-animation');
    const saveLogoSettingsBtn = document.getElementById('save-logo-settings');
    const logoStatus = document.getElementById('logo-status');
    const appLogoImg = document.getElementById('app-logo-img');
    const brandLogoWrap = document.getElementById('brand-logo-wrap');
    const brandLogoImg = document.getElementById('brand-logo-img');
    const logoPreviewImg = document.getElementById('logo-preview-img');
    const videoDrawer = document.getElementById('video-drawer');
    const videoOverlay = document.getElementById('video-overlay');
    const videoClose = document.getElementById('video-close');
    const videoEnabledInput = document.getElementById('video-enabled');
    const videoUrlInput = document.getElementById('video-url');
    const saveVideoSettingsBtn = document.getElementById('save-video-settings');
    const videoStatus = document.getElementById('video-status');
    const headerVideo = document.getElementById('header-video');
    const headerVideoPlayer = document.getElementById('header-video-player');
    const projectNameOverlay = document.getElementById('project-name-overlay');
    const projectNameModal = document.getElementById('project-name-modal');
    const projectNameInput = document.getElementById('project-name-input');
    const projectNameStatus = document.getElementById('project-name-status');
    const projectNameClose = document.getElementById('project-name-close');
    const projectNameCancel = document.getElementById('project-name-cancel');
    const projectNameConfirm = document.getElementById('project-name-confirm');
    const openProjectOverlay = document.getElementById('open-project-overlay');
    const openProjectModal = document.getElementById('open-project-modal');
    const openProjectClose = document.getElementById('open-project-close');
    const openProjectCancel = document.getElementById('open-project-cancel');
    const openProjectBrowse = document.getElementById('open-project-browse');
    const openProjectLocal = document.getElementById('open-project-local');
    const openProjectLocalName = document.getElementById('open-project-local-name');
    const openProjectLocalMeta = document.getElementById('open-project-local-meta');
    const openProjectStatus = document.getElementById('open-project-status');
    const questionList = document.getElementById('question-list');
    const questionFieldInput = document.getElementById('question-field');
    const questionTextInput = document.getElementById('question-text');
    const questionPlaceholderInput = document.getElementById('question-placeholder');
    const questionFontFamilySelect = document.getElementById('question-font-family');
    const questionFontSizeInput = document.getElementById('question-font-size');
    const questionAnimStyleSelect = document.getElementById('question-anim-style');
    const questionEmojiInput = document.getElementById('question-emoji');
    const questionAddBtn = document.getElementById('question-add-btn');
    const questionRemoveBtn = document.getElementById('question-remove-btn');
    const questionSaveBtn = document.getElementById('question-save-btn');
    const questionsApplyBtn = document.getElementById('questions-apply-btn');
    const questionsStatus = document.getElementById('questions-status');
    const assistantAvatarUrlInput = document.getElementById('assistant-avatar-url');
    const assistantAvatarPreview = document.getElementById('assistant-avatar-preview');
    const assistantAvatarStatus = document.getElementById('assistant-avatar-status');
    const assistantAvatarFilterSelect = document.getElementById('assistant-avatar-filter');
    const assistantAvatarSizeInput = document.getElementById('assistant-avatar-size');
    const assistantAvatarRadiusInput = document.getElementById('assistant-avatar-radius');
    const assistantAvatarBgInput = document.getElementById('assistant-avatar-bg');
    const assistantAvatarAnimateInput = document.getElementById('assistant-avatar-animate');
    const assistantAvatarAnimationSelect = document.getElementById('assistant-avatar-animation');
    const userAvatarUrlInput = document.getElementById('user-avatar-url');
    const userAvatarPreview = document.getElementById('user-avatar-preview');
    const userAvatarStatus = document.getElementById('user-avatar-status');
    const userAvatarFilterSelect = document.getElementById('user-avatar-filter');
    const userAvatarSizeInput = document.getElementById('user-avatar-size');
    const userAvatarRadiusInput = document.getElementById('user-avatar-radius');
    const userAvatarBgInput = document.getElementById('user-avatar-bg');
    const userAvatarAnimateInput = document.getElementById('user-avatar-animate');
    const userAvatarAnimationSelect = document.getElementById('user-avatar-animation');
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
    const CURRENT_EMBED_COMMIT = '1682f3d';
    const DEFAULT_EMBED_RUNTIME_BASE = `https://cdn.jsdelivr.net/gh/AstigChatbot/astigchatbots@${CURRENT_EMBED_COMMIT}`;
    const DEFAULT_EMBED_APP_BASE = `https://cdn.jsdelivr.net/gh/AstigChatbot/astigchatbots@${CURRENT_EMBED_COMMIT}`;
    const LOGO_PRESETS = {
        brand: 'https://widjets.astigmedia.com/img/main-logo.png',
        assistant: 'https://widjets.astigmedia.com/img/Assistant-logo.png',
        user: 'https://widjets.astigmedia.com/img/User-logo.png',
        launcher: 'https://widjets.astigmedia.com/img/Launcher-Logo.png'
    };
    let currentWebhookUrl = WEBHOOK_URL_PROD;

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
        webhookActive: 'cherry.webhook.active',
        embedRuntimeBase: 'cherry.embed.runtimeBase',
        embedAppBase: 'cherry.embed.appBase',
        deployCommit: 'cherry.deploy.commit',
        questionnaireSteps: 'cherry.questionnaire.steps',
        questionFontFamily: 'cherry.questionnaire.fontFamily',
        questionFontSize: 'cherry.questionnaire.fontSize',
        questionAnimation: 'cherry.questionnaire.animation',
        questionEmoji: 'cherry.questionnaire.emoji',
        assistantAvatar: 'cherry.avatar.assistant',
        userAvatar: 'cherry.avatar.user',
        footerBrandText: 'cherry.footer.text',
        footerBrandUrl: 'cherry.footer.url',
        footerFontFamily: 'cherry.footer.fontFamily',
        footerFontSize: 'cherry.footer.fontSize',
        footerAnimation: 'cherry.footer.animation',
        footerBackground: 'cherry.footer.background',
        headerShowHome: 'cherry.header.showHome',
        headerShowEmail: 'cherry.header.showEmail',
        headerShowDownload: 'cherry.header.showDownload',
        headerShowRestart: 'cherry.header.showRestart',
        themeBackground: 'cherry.theme.background',
        themeStyle: 'cherry.theme.style',
        logoUrl: 'cherry.logo.url',
        logoSize: 'cherry.logo.size',
        logoAnimation: 'cherry.logo.animation',
        logoTarget: 'cherry.logo.target',
        logoPreset: 'cherry.logo.preset',
        videoEnabled: 'cherry.video.enabled',
        videoUrl: 'cherry.video.url',
        projectSnapshot: 'cherry.project.snapshot'
    };

    const AVATAR_FIELDS = {
        assistant: {
            urlInput: assistantAvatarUrlInput,
            preview: assistantAvatarPreview,
            status: assistantAvatarStatus,
            filterInput: assistantAvatarFilterSelect,
            sizeInput: assistantAvatarSizeInput,
            radiusInput: assistantAvatarRadiusInput,
            bgInput: assistantAvatarBgInput,
            animateInput: assistantAvatarAnimateInput,
            animationInput: assistantAvatarAnimationSelect,
            fallbackLabel: 'A'
        },
        user: {
            urlInput: userAvatarUrlInput,
            preview: userAvatarPreview,
            status: userAvatarStatus,
            filterInput: userAvatarFilterSelect,
            sizeInput: userAvatarSizeInput,
            radiusInput: userAvatarRadiusInput,
            bgInput: userAvatarBgInput,
            animateInput: userAvatarAnimateInput,
            animationInput: userAvatarAnimationSelect,
            fallbackLabel: 'Y'
        }
    };

    if (isEmbeddedApp) {
        document.body.classList.add('embedded-app');
    }

    function safeStorageGet(key, fallback = '') {
        try {
            const value = localStorage.getItem(key);
            return value ?? fallback;
        } catch (_) {
            return fallback;
        }
    }

    function safeStorageSet(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (_) {
            return false;
        }
    }

    function safeStorageRemove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (_) {
            return false;
        }
    }

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

    if (saveProjectBtn) {
        saveProjectBtn.addEventListener('click', saveCurrentProject);
    }
    if (projectNameOverlay) {
        projectNameOverlay.addEventListener('click', () => closeProjectNamePrompt(null));
    }
    if (projectNameClose) {
        projectNameClose.addEventListener('click', () => closeProjectNamePrompt(null));
    }
    if (projectNameCancel) {
        projectNameCancel.addEventListener('click', () => closeProjectNamePrompt(null));
    }
    if (projectNameConfirm) {
        projectNameConfirm.addEventListener('click', () => confirmProjectNamePrompt());
    }
    if (projectNameInput) {
        projectNameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                confirmProjectNamePrompt();
            }
        });
    }

    if (openProjectBtn) {
        openProjectBtn.addEventListener('click', openSavedProject);
    }

    if (openProjectFileInput) {
        openProjectFileInput.addEventListener('change', handleOpenProjectFile);
    }
    if (openProjectOverlay) {
        openProjectOverlay.addEventListener('click', () => closeOpenProjectPrompt(null));
    }
    if (openProjectClose) {
        openProjectClose.addEventListener('click', () => closeOpenProjectPrompt(null));
    }
    if (openProjectCancel) {
        openProjectCancel.addEventListener('click', () => closeOpenProjectPrompt(null));
    }
    if (openProjectBrowse) {
        openProjectBrowse.addEventListener('click', () => closeOpenProjectPrompt('browse'));
    }
    if (openProjectLocal) {
        openProjectLocal.addEventListener('click', () => closeOpenProjectPrompt('local'));
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
    if (headerBtn) {
        headerBtn.addEventListener('click', () => openHeaderDrawer(true));
    }
    if (footerBtn) {
        footerBtn.addEventListener('click', () => openFooterDrawer(true));
    }
    if (logoBtn) {
        logoBtn.addEventListener('click', () => openLogoDrawer(true));
    }
    if (videoBtn) {
        videoBtn.addEventListener('click', () => openVideoDrawer(true));
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

    if (questionsBtn) {
        questionsBtn.addEventListener('click', () => openQuestionsDrawer(true));
    }

    if (questionsOverlay) {
        questionsOverlay.addEventListener('click', () => openQuestionsDrawer(false));
    }

    if (questionsClose) {
        questionsClose.addEventListener('click', () => openQuestionsDrawer(false));
    }
    if (footerOverlay) {
        footerOverlay.addEventListener('click', () => openFooterDrawer(false));
    }
    if (footerClose) {
        footerClose.addEventListener('click', () => openFooterDrawer(false));
    }
    if (saveFooterSettingsBtn) {
        saveFooterSettingsBtn.addEventListener('click', saveFooterSettings);
    }
    if (headerOverlay) {
        headerOverlay.addEventListener('click', () => openHeaderDrawer(false));
    }
    if (headerClose) {
        headerClose.addEventListener('click', () => openHeaderDrawer(false));
    }
    if (saveHeaderSettingsBtn) {
        saveHeaderSettingsBtn.addEventListener('click', saveHeaderSettings);
    }
    if (logoOverlay) {
        logoOverlay.addEventListener('click', () => openLogoDrawer(false));
    }
    if (logoClose) {
        logoClose.addEventListener('click', () => openLogoDrawer(false));
    }
    if (saveLogoSettingsBtn) {
        saveLogoSettingsBtn.addEventListener('click', saveLogoSettings);
    }
    if (videoOverlay) {
        videoOverlay.addEventListener('click', () => openVideoDrawer(false));
    }
    if (videoClose) {
        videoClose.addEventListener('click', () => openVideoDrawer(false));
    }
    if (saveVideoSettingsBtn) {
        saveVideoSettingsBtn.addEventListener('click', saveVideoSettings);
    }
    if (videoUrlInput) {
        videoUrlInput.addEventListener('input', previewVideoSettings);
    }
    if (videoEnabledInput) {
        videoEnabledInput.addEventListener('change', previewVideoSettings);
    }
    if (logoTargetSelect) {
        logoTargetSelect.addEventListener('change', handleLogoTargetChange);
    }
    if (logoPresetSelect) {
        logoPresetSelect.addEventListener('change', handleLogoPresetChange);
    }
    [logoUrlInput, logoSizeInput, logoAnimationSelect].forEach(input => {
        if (input) {
            const eventName = input.tagName === 'SELECT' ? 'change' : 'input';
            input.addEventListener(eventName, previewLogoSettings);
        }
    });

    if (questionList) {
        questionList.addEventListener('change', () => loadQuestionSelection(Number(questionList.value)));
    }

    if (questionAddBtn) {
        questionAddBtn.addEventListener('click', addQuestion);
    }

    if (questionRemoveBtn) {
        questionRemoveBtn.addEventListener('click', removeQuestion);
    }

    if (questionSaveBtn) {
        questionSaveBtn.addEventListener('click', saveSelectedQuestion);
    }

    if (questionsApplyBtn) {
        questionsApplyBtn.addEventListener('click', applyQuestionnaire);
    }

    if (avatarMenuBtn) {
        avatarMenuBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleAvatarPanel();
        });
    }

    if (avatarPanelClose) {
        avatarPanelClose.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleAvatarPanel(false);
        });
    }

    if (themeMenuBtn) {
        themeMenuBtn.addEventListener('click', () => openThemeDrawer(true));
    }

    if (themeOverlay) {
        themeOverlay.addEventListener('click', () => openThemeDrawer(false));
    }

    if (themeClose) {
        themeClose.addEventListener('click', () => openThemeDrawer(false));
    }

    if (themeBackgroundInput) {
        themeBackgroundInput.addEventListener('input', previewThemeSettings);
        themeBackgroundInput.addEventListener('change', saveThemeSettings);
    }

    themeStyleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!(btn instanceof HTMLElement)) return;
            setActiveThemeStyle(btn.dataset.themeStyle || 'glass');
            previewThemeSettings();
        });
    });

    if (saveThemeSettingsBtn) {
        saveThemeSettingsBtn.addEventListener('click', saveThemeSettings);
    }

    avatarTabButtons.forEach(btn => {
        btn.addEventListener('click', () => setActiveAvatarTab(btn.dataset.avatarTab || 'assistant'));
    });

    Object.entries(AVATAR_FIELDS).forEach(([role, fields]) => {
        [fields.urlInput, fields.filterInput, fields.sizeInput, fields.radiusInput, fields.bgInput, fields.animateInput, fields.animationInput]
            .filter(Boolean)
            .forEach(input => {
                const eventName = input.type === 'checkbox' || input.tagName === 'SELECT' ? 'change' : 'input';
                input.addEventListener(eventName, () => updateAvatarPreview(role));
            });
    });

    if (applyAvatarSettingsBtn) {
        applyAvatarSettingsBtn.addEventListener('click', applyAvatarSettings);
    }

    if (backupBtn) {
        backupBtn.addEventListener('click', runProjectBackup);
    }

    webhookModeButtons.forEach(btn => {
        btn.addEventListener('click', () => setActiveWebhook(btn.dataset.target));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (embedDrawer?.classList.contains('open')) openEmbedDrawer(false);
            if (credsDrawer?.classList.contains('open')) openCredsDrawer(false);
            if (webhookDrawer?.classList.contains('open')) openWebhookDrawer(false);
            if (questionsDrawer?.classList.contains('open')) openQuestionsDrawer(false);
            if (footerDrawer?.classList.contains('open')) openFooterDrawer(false);
            if (logoDrawer?.classList.contains('open')) openLogoDrawer(false);
            if (headerDrawer?.classList.contains('open')) openHeaderDrawer(false);
            if (videoDrawer?.classList.contains('open')) openVideoDrawer(false);
            if (projectNameModal?.classList.contains('open')) closeProjectNamePrompt(null);
            if (openProjectModal?.classList.contains('open')) closeOpenProjectPrompt(null);
            if (avatarPanel?.classList.contains('open')) toggleAvatarPanel(false);
            if (themeDrawer?.classList.contains('open')) openThemeDrawer(false);
        }
    });

    document.addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;
        const questionsTrigger = e.target.closest('#questions-menu-btn, .left-menu .menu-btn.questions');
        if (questionsTrigger) {
            e.preventDefault();
            openQuestionsDrawer(true);
        }
        const avatarTrigger = e.target.closest('#avatars-menu-btn');
        if (avatarPanel?.classList.contains('open') && !e.target.closest('#avatar-panel') && !avatarTrigger) {
            toggleAvatarPanel(false);
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

    let selectedQuestionIndex = 0;
    let steps = getDefaultSteps();
    let questionnaireSettings = getDefaultQuestionnaireSettings();
    let activeAvatarTab = 'assistant';
    let projectNameResolver = null;
    let openProjectResolver = null;
    let avatarSettings = {
        assistant: getDefaultAvatarSettings('assistant'),
        user: getDefaultAvatarSettings('user')
    };
    let themeSettings = getDefaultThemeSettings();

    function getDefaultSteps() {
        return [
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
    }

    function getDefaultQuestionnaireSettings() {
        return {
            fontFamily: "'Outfit', sans-serif",
            fontSize: 24,
            animation: 'typewriter',
            emoji: ''
        };
    }

    function getDefaultAvatarSettings(role) {
        if (role === 'user') {
            return {
                url: '',
                filter: 'none',
                size: 40,
                radius: 50,
                background: '#5b21b6',
                animate: false,
                animation: 'float'
            };
        }

        return {
            url: 'assets/character_standin.png',
            filter: 'none',
            size: 40,
            radius: 50,
            background: '#1f2937',
            animate: false,
            animation: 'pulse'
        };
    }

    function sanitizeAvatarSettings(role, candidate = {}) {
        const defaults = getDefaultAvatarSettings(role);
        const size = Number.parseInt(candidate?.size, 10);
        const radius = Number.parseInt(candidate?.radius, 10);
        return {
            url: typeof candidate?.url === 'string' ? candidate.url.trim() : defaults.url,
            filter: ['none', 'grayscale', 'sepia', 'blur', 'brightness'].includes(candidate?.filter) ? candidate.filter : defaults.filter,
            size: Number.isFinite(size) ? Math.min(128, Math.max(32, size)) : defaults.size,
            radius: Number.isFinite(radius) ? Math.min(100, Math.max(0, radius)) : defaults.radius,
            background: /^#[0-9a-f]{6}$/i.test(candidate?.background || '') ? candidate.background : defaults.background,
            animate: typeof candidate?.animate === 'boolean' ? candidate.animate : defaults.animate,
            animation: ['pulse', 'float', 'spin'].includes(candidate?.animation) ? candidate.animation : defaults.animation
        };
    }

    function isValidAvatarUrl(value) {
        const url = (value || '').trim();
        if (!url) return true;
        if (url.startsWith('data:image/')) return true;
        try {
            const parsed = new URL(url, window.location.href);
            return ['http:', 'https:', 'data:', 'blob:'].includes(parsed.protocol) || !value.includes('://');
        } catch (_) {
            return false;
        }
    }

    function resolveAvatarUrl(value) {
        const url = (value || '').trim();
        if (!url) return '';
        try {
            return new URL(url, window.location.href).href;
        } catch (_) {
            return '';
        }
    }

    function getAvatarFilterValue(filterName) {
        switch (filterName) {
            case 'grayscale':
                return 'grayscale(1)';
            case 'sepia':
                return 'sepia(0.9)';
            case 'blur':
                return 'blur(1.5px)';
            case 'brightness':
                return 'brightness(1.15)';
            default:
                return 'none';
        }
    }

    function sanitizeSteps(candidate) {
        if (!Array.isArray(candidate) || candidate.length === 0) {
            return getDefaultSteps();
        }

        const nextSteps = candidate.map((step, index) => ({
            field: String(step?.field || `field_${index + 1}`).trim() || `field_${index + 1}`,
            question: String(step?.question || '').trim() || `Question ${index + 1}`,
            placeholder: String(step?.placeholder || 'Type here...').trim() || 'Type here...'
        }));

        return nextSteps.length > 0 ? nextSteps : getDefaultSteps();
    }

    function hydrateQuestionnaireSettings() {
        const storedSteps = safeStorageGet(STORAGE_KEYS.questionnaireSteps, '');
        if (storedSteps) {
            try {
                steps = sanitizeSteps(JSON.parse(storedSteps));
            } catch (_) {
                steps = getDefaultSteps();
            }
        }

        questionnaireSettings = {
            fontFamily: safeStorageGet(STORAGE_KEYS.questionFontFamily, getDefaultQuestionnaireSettings().fontFamily) || getDefaultQuestionnaireSettings().fontFamily,
            fontSize: Number.parseInt(safeStorageGet(STORAGE_KEYS.questionFontSize, String(getDefaultQuestionnaireSettings().fontSize)), 10) || getDefaultQuestionnaireSettings().fontSize,
            animation: safeStorageGet(STORAGE_KEYS.questionAnimation, getDefaultQuestionnaireSettings().animation) || getDefaultQuestionnaireSettings().animation,
            emoji: safeStorageGet(STORAGE_KEYS.questionEmoji, getDefaultQuestionnaireSettings().emoji) || ''
        };

        if (selectedQuestionIndex >= steps.length) {
            selectedQuestionIndex = steps.length - 1;
        }

        applyQuestionnaireStyles();
        renderQuestionList();
        loadQuestionSelection(selectedQuestionIndex);
    }

    function setAvatarStatus(role, text, type = 'info') {
        const statusEl = AVATAR_FIELDS[role]?.status;
        if (!statusEl) return;
        statusEl.textContent = text;
        statusEl.classList.remove('success', 'error');
        if (type === 'success' || type === 'error') {
            statusEl.classList.add(type);
        }
    }

    function writeAvatarFormSettings(role, settings) {
        const fields = AVATAR_FIELDS[role];
        if (!fields) return;
        if (fields.urlInput) fields.urlInput.value = settings.url;
        if (fields.filterInput) fields.filterInput.value = settings.filter;
        if (fields.sizeInput) fields.sizeInput.value = String(settings.size);
        if (fields.radiusInput) fields.radiusInput.value = String(settings.radius);
        if (fields.bgInput) fields.bgInput.value = settings.background;
        if (fields.animateInput) fields.animateInput.checked = !!settings.animate;
        if (fields.animationInput) fields.animationInput.value = settings.animation;
    }

    function readAvatarFormSettings(role) {
        const fields = AVATAR_FIELDS[role];
        return sanitizeAvatarSettings(role, {
            url: fields?.urlInput?.value || '',
            filter: fields?.filterInput?.value || 'none',
            size: fields?.sizeInput?.value || '40',
            radius: fields?.radiusInput?.value || '50',
            background: fields?.bgInput?.value || getDefaultAvatarSettings(role).background,
            animate: !!fields?.animateInput?.checked,
            animation: fields?.animationInput?.value || getDefaultAvatarSettings(role).animation
        });
    }

    function updateAvatarElement(element, settings, role) {
        if (!element) return;
        const img = element.querySelector('img');
        const fallback = element.querySelector('.avatar-fallback');
        const resolvedUrl = resolveAvatarUrl(settings.url);
        element.dataset.avatarRole = role;
        element.style.setProperty('--avatar-size', `${settings.size}px`);
        element.style.setProperty('--avatar-radius', `${settings.radius}%`);
        element.style.setProperty('--avatar-background', settings.background);
        element.style.setProperty('--avatar-filter', getAvatarFilterValue(settings.filter));
        element.classList.remove('avatar-anim-pulse', 'avatar-anim-float', 'avatar-anim-spin');
        if (settings.animate) {
            element.classList.add(`avatar-anim-${settings.animation}`);
        }

        if (fallback) {
            fallback.textContent = AVATAR_FIELDS[role]?.fallbackLabel || role.slice(0, 1).toUpperCase();
        }

        if (img) {
            if (resolvedUrl) {
                img.src = resolvedUrl;
                img.alt = `${role} avatar`;
                element.classList.add('has-image');
            } else {
                img.removeAttribute('src');
                element.classList.remove('has-image');
            }
        }
    }

    function createAvatarElement(role) {
        const element = document.createElement('div');
        element.className = `avatar avatar--${role}`;
        element.innerHTML = `<img alt="${role} avatar"><span class="avatar-fallback" aria-hidden="true">${AVATAR_FIELDS[role]?.fallbackLabel || role.slice(0, 1).toUpperCase()}</span>`;
        updateAvatarElement(element, avatarSettings[role], role);
        return element;
    }

    function updateAvatarPreview(role) {
        const fields = AVATAR_FIELDS[role];
        if (!fields?.preview) return;
        const previewSettings = readAvatarFormSettings(role);
        const url = fields.urlInput?.value || '';
        if (!isValidAvatarUrl(url)) {
            updateAvatarElement(fields.preview, { ...previewSettings, url: '' }, role);
            setAvatarStatus(role, 'Use a valid image URL, relative asset path, or data URL.', 'error');
            return false;
        }

        updateAvatarElement(fields.preview, previewSettings, role);
        setAvatarStatus(role, url.trim() ? 'Preview ready. Press Apply avatars to update the builder.' : 'No image URL set. The fallback badge will be used until you add one.', url.trim() ? 'success' : 'info');
        return true;
    }

    function refreshRenderedAvatars() {
        document.querySelectorAll('.avatar[data-avatar-role="assistant"]').forEach(element => {
            updateAvatarElement(element, avatarSettings.assistant, 'assistant');
        });
        document.querySelectorAll('.avatar[data-avatar-role="user"]').forEach(element => {
            updateAvatarElement(element, avatarSettings.user, 'user');
        });
    }

    function applyAvatarCssVars() {
        document.documentElement.style.setProperty('--assistant-avatar-url', avatarSettings.assistant.url ? `url("${resolveAvatarUrl(avatarSettings.assistant.url)}")` : 'none');
        document.documentElement.style.setProperty('--user-avatar-url', avatarSettings.user.url ? `url("${resolveAvatarUrl(avatarSettings.user.url)}")` : 'none');
    }

    function persistAvatarSettings() {
        safeStorageSet(STORAGE_KEYS.assistantAvatar, JSON.stringify(avatarSettings.assistant));
        safeStorageSet(STORAGE_KEYS.userAvatar, JSON.stringify(avatarSettings.user));
    }

    function hydrateAvatarSettings() {
        try {
            const storedAssistant = safeStorageGet(STORAGE_KEYS.assistantAvatar, '');
            const storedUser = safeStorageGet(STORAGE_KEYS.userAvatar, '');
            avatarSettings = {
                assistant: storedAssistant ? sanitizeAvatarSettings('assistant', JSON.parse(storedAssistant)) : getDefaultAvatarSettings('assistant'),
                user: storedUser ? sanitizeAvatarSettings('user', JSON.parse(storedUser)) : getDefaultAvatarSettings('user')
            };
        } catch (_) {
            avatarSettings = {
                assistant: getDefaultAvatarSettings('assistant'),
                user: getDefaultAvatarSettings('user')
            };
        }

        writeAvatarFormSettings('assistant', avatarSettings.assistant);
        writeAvatarFormSettings('user', avatarSettings.user);
        updateAvatarPreview('assistant');
        updateAvatarPreview('user');
        applyAvatarCssVars();
        refreshRenderedAvatars();
    }

    function setActiveAvatarTab(role) {
        activeAvatarTab = role === 'user' ? 'user' : 'assistant';
        avatarTabButtons.forEach(btn => {
            const active = btn.dataset.avatarTab === activeAvatarTab;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        document.querySelectorAll('[data-avatar-section]').forEach(section => {
            const active = section.dataset.avatarSection === activeAvatarTab;
            section.classList.toggle('active', active);
            section.hidden = !active;
        });
    }

    function toggleAvatarPanel(force) {
        if (!avatarPanel) return;
        const nextOpen = typeof force === 'boolean' ? force : !avatarPanel.classList.contains('open');
        if (nextOpen && themeDrawer?.classList.contains('open')) {
            openThemeDrawer(false);
        }
        avatarPanel.classList.toggle('open', nextOpen);
        avatarPanel.setAttribute('aria-hidden', nextOpen ? 'false' : 'true');
        if (avatarMenuBtn) {
            avatarMenuBtn.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
        }
        syncDrawerUiState();
        if (nextOpen) {
            setActiveAvatarTab(activeAvatarTab);
            updateAvatarPreview('assistant');
            updateAvatarPreview('user');
        }
    }

    function applyAvatarSettings() {
        const assistantValid = updateAvatarPreview('assistant');
        const userValid = updateAvatarPreview('user');
        if (!assistantValid || !userValid) return;

        avatarSettings = {
            assistant: readAvatarFormSettings('assistant'),
            user: readAvatarFormSettings('user')
        };

        persistAvatarSettings();
        applyAvatarCssVars();
        refreshRenderedAvatars();
        flashButton(applyAvatarSettingsBtn, 'Applied');
        showDeployStatus('Avatar settings applied to the builder preview.', 100, 'success');
    }

    function getDefaultThemeSettings() {
        return {
            background: '#182233',
            style: 'glass'
        };
    }

    function sanitizeThemeSettings(candidate = {}) {
        const defaults = getDefaultThemeSettings();
        return {
            background: /^#[0-9a-f]{6}$/i.test(candidate?.background || '') ? candidate.background : defaults.background,
            style: ['glass', 'gradient', 'transparent'].includes(candidate?.style) ? candidate.style : defaults.style
        };
    }

    function setThemeStatus(text, type = 'info') {
        if (!themeStatus) return;
        themeStatus.textContent = text;
        themeStatus.classList.remove('success', 'error');
        if (type === 'success' || type === 'error') {
            themeStatus.classList.add(type);
        }
    }

    function setActiveThemeStyle(style) {
        const nextStyle = ['glass', 'gradient', 'transparent'].includes(style) ? style : 'glass';
        themeStyleButtons.forEach(btn => {
            const active = btn.dataset.themeStyle === nextStyle;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function readThemeFormSettings() {
        const activeStyle = Array.from(themeStyleButtons).find(btn => btn.classList.contains('active'))?.dataset.themeStyle || themeSettings.style;
        return sanitizeThemeSettings({
            background: themeBackgroundInput?.value || '',
            style: activeStyle
        });
    }

    function writeThemeFormSettings(settings) {
        if (themeBackgroundInput) themeBackgroundInput.value = settings.background;
        setActiveThemeStyle(settings.style);
    }

    function applyThemeSettings(settings) {
        themeSettings = sanitizeThemeSettings(settings);
        document.body.dataset.builderStyle = themeSettings.style;
        document.documentElement.style.setProperty('--builder-surface-color', themeSettings.background);
    }

    function previewThemeSettings() {
        const settings = readThemeFormSettings();
        applyThemeSettings(settings);
        setThemeStatus('Builder appearance updated. Changes are saved automatically.', 'success');
    }

    function saveThemeSettings() {
        const settings = readThemeFormSettings();
        applyThemeSettings(settings);
        safeStorageSet(STORAGE_KEYS.themeBackground, settings.background);
        safeStorageSet(STORAGE_KEYS.themeStyle, settings.style);
        setThemeStatus('Theme settings saved to the builder preview.', 'success');
    }

    function hydrateThemeSettings() {
        themeSettings = sanitizeThemeSettings({
            background: safeStorageGet(STORAGE_KEYS.themeBackground, getDefaultThemeSettings().background),
            style: safeStorageGet(STORAGE_KEYS.themeStyle, getDefaultThemeSettings().style)
        });
        writeThemeFormSettings(themeSettings);
        applyThemeSettings(themeSettings);
    }

    function openThemeDrawer(show) {
        if (!themeDrawer || !themeOverlay) return;
        if (show && avatarPanel?.classList.contains('open')) {
            toggleAvatarPanel(false);
        }
        themeDrawer.classList.toggle('open', show);
        themeOverlay.classList.toggle('show', show);
        themeDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        if (themeMenuBtn) {
            themeMenuBtn.setAttribute('aria-expanded', show ? 'true' : 'false');
        }
        syncDrawerUiState();
        if (show) {
            writeThemeFormSettings(themeSettings);
            setThemeStatus('Pick a color and style to update the chatbot builder preview.', 'info');
        }
    }

    function getDefaultFooterSettings() {
        return {
            text: 'Astig Media',
            url: 'https://astigmedia.com/',
            fontFamily: "'Outfit', sans-serif",
            fontSize: 12,
            animation: 'none',
            background: '#1e293b'
        };
    }

    function getDefaultVideoSettings() {
        return {
            enabled: true,
            url: ''
        };
    }

    function sanitizeVideoSettings(candidate = {}) {
        return {
            enabled: candidate?.enabled !== false,
            url: String(candidate?.url || '').trim()
        };
    }

    function setVideoStatus(text, type = 'info') {
        if (!videoStatus) return;
        videoStatus.textContent = text;
        videoStatus.classList.remove('success', 'error');
        if (type === 'success' || type === 'error') {
            videoStatus.classList.add(type);
        }
    }

    function applyVideoSettings(settings) {
        const nextSettings = sanitizeVideoSettings(settings);
        if (!headerVideo || !headerVideoPlayer) return;
        const hasUrl = nextSettings.enabled && !!nextSettings.url && isValidHttpUrl(nextSettings.url);
        headerVideo.hidden = !hasUrl;
        headerVideoPlayer.muted = true;
        headerVideoPlayer.loop = true;
        headerVideoPlayer.autoplay = true;
        headerVideoPlayer.playsInline = true;
        headerVideoPlayer.controls = false;
        if (hasUrl) {
            headerVideoPlayer.src = nextSettings.url;
            const playPromise = headerVideoPlayer.play?.();
            if (playPromise?.catch) {
                playPromise.catch(() => {});
            }
        } else {
            headerVideoPlayer.pause?.();
            headerVideoPlayer.removeAttribute('src');
            headerVideoPlayer.load();
        }
    }

    function hydrateVideoSettings() {
        const settings = sanitizeVideoSettings({
            enabled: safeStorageGet(STORAGE_KEYS.videoEnabled, 'true') !== 'false',
            url: safeStorageGet(STORAGE_KEYS.videoUrl, getDefaultVideoSettings().url)
        });
        if (videoEnabledInput) videoEnabledInput.checked = settings.enabled;
        if (videoUrlInput) videoUrlInput.value = settings.url;
        applyVideoSettings(settings);
    }

    function previewVideoSettings() {
        const settings = sanitizeVideoSettings({
            enabled: !!videoEnabledInput?.checked,
            url: videoUrlInput?.value || ''
        });
        if (settings.url && !isValidHttpUrl(settings.url)) {
            setVideoStatus('Enter a valid video URL starting with http:// or https://', 'error');
            return false;
        }
        applyVideoSettings(settings);
        setVideoStatus(settings.enabled && settings.url ? 'Video preview updated under the chatbot header.' : 'Video hidden from the chatbot header.', 'success');
        return true;
    }

    function saveVideoSettings() {
        const settings = sanitizeVideoSettings({
            enabled: !!videoEnabledInput?.checked,
            url: videoUrlInput?.value || ''
        });
        if (settings.url && !isValidHttpUrl(settings.url)) {
            setVideoStatus('Enter a valid video URL starting with http:// or https://', 'error');
            return;
        }
        safeStorageSet(STORAGE_KEYS.videoEnabled, String(settings.enabled));
        safeStorageSet(STORAGE_KEYS.videoUrl, settings.url);
        applyVideoSettings(settings);
        flashButton(saveVideoSettingsBtn, 'Applied');
        setVideoStatus(settings.enabled && settings.url ? 'Header video saved to the builder preview.' : 'Header video hidden.', 'success');
    }

    function getDefaultHeaderSettings() {
        return {
            showHome: true,
            showEmail: true,
            showDownload: true,
            showRestart: true
        };
    }

    function setHeaderStatus(text, type = 'info') {
        if (!headerStatus) return;
        headerStatus.textContent = text;
        headerStatus.classList.remove('success', 'error');
        if (type === 'success' || type === 'error') {
            headerStatus.classList.add(type);
        }
    }

    function applyHeaderSettings(settings) {
        if (homeBtn) homeBtn.style.display = settings.showHome ? '' : 'none';
        if (emailBtn) emailBtn.style.display = settings.showEmail ? '' : 'none';
        if (downloadBtn) downloadBtn.style.display = settings.showDownload ? '' : 'none';
        if (restartBtn) restartBtn.style.display = settings.showRestart ? '' : 'none';
        if (headerActions) {
            headerActions.style.gap = '15px';
        }
    }

    function hydrateHeaderSettings() {
        const settings = {
            showHome: safeStorageGet(STORAGE_KEYS.headerShowHome, 'true') !== 'false',
            showEmail: safeStorageGet(STORAGE_KEYS.headerShowEmail, 'true') !== 'false',
            showDownload: safeStorageGet(STORAGE_KEYS.headerShowDownload, 'true') !== 'false',
            showRestart: safeStorageGet(STORAGE_KEYS.headerShowRestart, 'true') !== 'false'
        };

        if (headerShowHomeInput) headerShowHomeInput.checked = settings.showHome;
        if (headerShowEmailInput) headerShowEmailInput.checked = settings.showEmail;
        if (headerShowDownloadInput) headerShowDownloadInput.checked = settings.showDownload;
        if (headerShowRestartInput) headerShowRestartInput.checked = settings.showRestart;
        applyHeaderSettings(settings);
    }

    function saveHeaderSettings() {
        const settings = {
            showHome: !!headerShowHomeInput?.checked,
            showEmail: !!headerShowEmailInput?.checked,
            showDownload: !!headerShowDownloadInput?.checked,
            showRestart: !!headerShowRestartInput?.checked
        };

        safeStorageSet(STORAGE_KEYS.headerShowHome, String(settings.showHome));
        safeStorageSet(STORAGE_KEYS.headerShowEmail, String(settings.showEmail));
        safeStorageSet(STORAGE_KEYS.headerShowDownload, String(settings.showDownload));
        safeStorageSet(STORAGE_KEYS.headerShowRestart, String(settings.showRestart));
        applyHeaderSettings(settings);
        flashButton(saveHeaderSettingsBtn, 'Applied');
        setHeaderStatus('Header icon visibility updated.', 'success');
    }

    function sanitizeFooterSettings(candidate = {}) {
        const defaults = getDefaultFooterSettings();
        const fontSize = Number.parseInt(candidate?.fontSize, 10);
        return {
            text: String(candidate?.text || defaults.text).trim() || defaults.text,
            url: String(candidate?.url || defaults.url).trim() || defaults.url,
            fontFamily: String(candidate?.fontFamily || defaults.fontFamily).trim() || defaults.fontFamily,
            fontSize: Number.isFinite(fontSize) ? Math.min(24, Math.max(10, fontSize)) : defaults.fontSize,
            animation: ['none', 'glow', 'float', 'pulse'].includes(candidate?.animation) ? candidate.animation : defaults.animation,
            background: /^#[0-9a-f]{6}$/i.test(candidate?.background || '') ? candidate.background : defaults.background
        };
    }

    function setFooterStatus(text, type = 'info') {
        if (!footerStatus) return;
        footerStatus.textContent = text;
        footerStatus.classList.remove('success', 'error');
        if (type === 'success' || type === 'error') {
            footerStatus.classList.add(type);
        }
    }

    function isValidHttpUrl(value) {
        try {
            const parsed = new URL(value);
            return parsed.protocol === 'http:' || parsed.protocol === 'https:';
        } catch (_) {
            return false;
        }
    }

    function applyFooterSettings(settings) {
        if (!brandLink || !brandFooter) return;
        brandLink.textContent = settings.text;
        brandLink.href = settings.url;
        brandLink.classList.remove('footer-anim-glow', 'footer-anim-float', 'footer-anim-pulse');
        if (settings.animation !== 'none') {
            brandLink.classList.add(`footer-anim-${settings.animation}`);
        }
        brandLink.style.setProperty('--footer-font-size-inline', `${settings.fontSize}px`);
        brandFooter.style.setProperty('--footer-font-size', `${settings.fontSize}px`);
        brandFooter.style.setProperty('--footer-font-family', settings.fontFamily);
        brandFooter.style.setProperty('--footer-background', settings.background === '#1e293b' ? 'transparent' : settings.background);
    }

    function hydrateFooterSettings() {
        const settings = sanitizeFooterSettings({
            text: safeStorageGet(STORAGE_KEYS.footerBrandText, getDefaultFooterSettings().text),
            url: safeStorageGet(STORAGE_KEYS.footerBrandUrl, getDefaultFooterSettings().url),
            fontFamily: safeStorageGet(STORAGE_KEYS.footerFontFamily, getDefaultFooterSettings().fontFamily),
            fontSize: safeStorageGet(STORAGE_KEYS.footerFontSize, String(getDefaultFooterSettings().fontSize)),
            animation: safeStorageGet(STORAGE_KEYS.footerAnimation, getDefaultFooterSettings().animation),
            background: safeStorageGet(STORAGE_KEYS.footerBackground, getDefaultFooterSettings().background)
        });

        if (footerBrandTextInput) footerBrandTextInput.value = settings.text;
        if (footerBrandUrlInput) footerBrandUrlInput.value = settings.url;
        if (footerFontFamilySelect) footerFontFamilySelect.value = settings.fontFamily;
        if (footerFontSizeInput) footerFontSizeInput.value = String(settings.fontSize);
        if (footerAnimationSelect) footerAnimationSelect.value = settings.animation;
        if (footerBackgroundInput) footerBackgroundInput.value = settings.background;
        applyFooterSettings(settings);
    }

    function saveFooterSettings() {
        const settings = sanitizeFooterSettings({
            text: footerBrandTextInput?.value || '',
            url: footerBrandUrlInput?.value || '',
            fontFamily: footerFontFamilySelect?.value || '',
            fontSize: footerFontSizeInput?.value || '',
            animation: footerAnimationSelect?.value || '',
            background: footerBackgroundInput?.value || ''
        });

        if (!isValidHttpUrl(settings.url)) {
            setFooterStatus('Enter a valid branding URL starting with http:// or https://', 'error');
            return;
        }

        safeStorageSet(STORAGE_KEYS.footerBrandText, settings.text);
        safeStorageSet(STORAGE_KEYS.footerBrandUrl, settings.url);
        safeStorageSet(STORAGE_KEYS.footerFontFamily, settings.fontFamily);
        safeStorageSet(STORAGE_KEYS.footerFontSize, String(settings.fontSize));
        safeStorageSet(STORAGE_KEYS.footerAnimation, settings.animation);
        safeStorageSet(STORAGE_KEYS.footerBackground, settings.background);
        applyFooterSettings(settings);
        flashButton(saveFooterSettingsBtn, 'Applied');
        setFooterStatus('Footer branding applied to the builder preview.', 'success');
    }

    function getDefaultLogoSettings() {
        return {
            url: 'assets/cherry-logo.png',
            size: 24,
            animation: 'none'
        };
    }

    function getSelectedLogoTarget() {
        const value = String(logoTargetSelect?.value || safeStorageGet(STORAGE_KEYS.logoTarget, 'brand')).trim();
        return ['brand', 'assistant', 'user', 'launcher'].includes(value) ? value : 'brand';
    }

    function getCurrentLogoUrlForTarget(target) {
        if (target === 'assistant') {
            return assistantAvatarUrlInput?.value || avatarSettings.assistant?.url || LOGO_PRESETS.assistant;
        }
        if (target === 'user') {
            return userAvatarUrlInput?.value || avatarSettings.user?.url || LOGO_PRESETS.user;
        }
        if (target === 'launcher') {
            return widgetIconInput?.value || safeStorageGet(STORAGE_KEYS.launcherIcon, '') || LOGO_PRESETS.launcher;
        }
        return logoUrlInput?.value || safeStorageGet(STORAGE_KEYS.logoUrl, getDefaultLogoSettings().url) || getDefaultLogoSettings().url;
    }

    function syncLogoPresetSelection(url) {
        if (!logoPresetSelect) return;
        const match = Object.values(LOGO_PRESETS).find(presetUrl => presetUrl === url) || '';
        logoPresetSelect.value = match;
    }

    function syncLogoDrawerToTarget(target = getSelectedLogoTarget()) {
        if (logoTargetSelect) {
            logoTargetSelect.value = target;
        }
        if (logoUrlInput) {
            logoUrlInput.value = getCurrentLogoUrlForTarget(target);
        }
        syncLogoPresetSelection(logoUrlInput?.value || '');
        previewLogoSettings();
    }

    function handleLogoTargetChange() {
        const target = getSelectedLogoTarget();
        safeStorageSet(STORAGE_KEYS.logoTarget, target);
        syncLogoDrawerToTarget(target);
        setLogoStatus(`Editing ${target} logo. Apply to save it to the matching preview element.`, 'success');
    }

    function handleLogoPresetChange() {
        const presetUrl = String(logoPresetSelect?.value || '').trim();
        safeStorageSet(STORAGE_KEYS.logoPreset, presetUrl);
        if (presetUrl && logoUrlInput) {
            logoUrlInput.value = presetUrl;
        }
        previewLogoSettings();
    }

    function sanitizeLogoSettings(candidate = {}) {
        const defaults = getDefaultLogoSettings();
        const size = Number.parseInt(candidate?.size, 10);
        return {
            url: String(candidate?.url || defaults.url).trim() || defaults.url,
            size: Number.isFinite(size) ? Math.min(96, Math.max(18, size)) : defaults.size,
            animation: ['none', 'pulse', 'float', 'spin'].includes(candidate?.animation) ? candidate.animation : defaults.animation
        };
    }

    function getStoredBrandLogoSettings() {
        return sanitizeLogoSettings({
            url: safeStorageGet(STORAGE_KEYS.logoUrl, getDefaultLogoSettings().url),
            size: safeStorageGet(STORAGE_KEYS.logoSize, String(getDefaultLogoSettings().size)),
            animation: safeStorageGet(STORAGE_KEYS.logoAnimation, getDefaultLogoSettings().animation)
        });
    }

    function setLogoStatus(text, type = 'info') {
        if (!logoStatus) return;
        logoStatus.textContent = text;
        logoStatus.classList.remove('success', 'error');
        if (type === 'success' || type === 'error') {
            logoStatus.classList.add(type);
        }
    }

    function applyLogoAnimationClass(element, animation) {
        if (!element) return;
        element.classList.remove('logo-anim-pulse', 'logo-anim-float', 'logo-anim-spin');
        if (animation !== 'none') {
            element.classList.add(`logo-anim-${animation}`);
        }
    }

    function applyLogoSettings(settings) {
        const resolvedUrl = resolveAvatarUrl(settings.url) || 'assets/cherry-logo.png';
        if (appLogoImg) {
            appLogoImg.src = resolvedUrl;
            applyLogoAnimationClass(appLogoImg, settings.animation);
        }
        if (brandLogoImg) {
            brandLogoImg.src = resolvedUrl;
            applyLogoAnimationClass(brandLogoImg, settings.animation);
        }
        if (logoPreviewImg) {
            logoPreviewImg.src = resolvedUrl;
            applyLogoAnimationClass(logoPreviewImg, settings.animation);
        }
        if (brandLogoWrap) {
            brandLogoWrap.style.width = `${settings.size}px`;
            brandLogoWrap.style.height = `${settings.size}px`;
        }
        document.documentElement.style.setProperty('--brand-logo-size', `${settings.size}px`);
    }

    function persistBrandLogoSettings(settings) {
        const nextSettings = sanitizeLogoSettings(settings);
        safeStorageSet(STORAGE_KEYS.logoUrl, nextSettings.url);
        safeStorageSet(STORAGE_KEYS.logoSize, String(nextSettings.size));
        safeStorageSet(STORAGE_KEYS.logoAnimation, nextSettings.animation);
        applyLogoSettings(nextSettings);
    }

    function previewLogoTarget(target, url) {
        if (!url) return;
        if (target === 'assistant') {
            if (assistantAvatarUrlInput) assistantAvatarUrlInput.value = url;
            updateAvatarPreview('assistant');
            return;
        }
        if (target === 'user') {
            if (userAvatarUrlInput) userAvatarUrlInput.value = url;
            updateAvatarPreview('user');
            return;
        }
        if (target === 'launcher') {
            if (widgetIconInput) widgetIconInput.value = url;
            applyLauncher(
                (widgetLabelInput?.value || safeStorageGet(STORAGE_KEYS.launcherLabel, 'Chat with Cherry') || 'Chat with Cherry').trim(),
                (widgetSubtextInput?.value || safeStorageGet(STORAGE_KEYS.launcherSubtext, 'We typically reply in minutes') || 'We typically reply in minutes').trim(),
                url,
                widgetShapeSelect?.value || safeStorageGet(STORAGE_KEYS.launcherShape, 'circle') || 'circle',
                widgetAnimSelect?.value || safeStorageGet(STORAGE_KEYS.launcherAnim, 'none') || 'none',
                !!(widget3dCheckbox?.checked ?? (safeStorageGet(STORAGE_KEYS.launcher3d, 'false') === 'true')),
                (widgetIconSizeInput?.value || safeStorageGet(STORAGE_KEYS.launcherIconSize, '26') || '26').trim()
            );
            return;
        }
        applyLogoSettings(sanitizeLogoSettings({
            url,
            size: logoSizeInput?.value || safeStorageGet(STORAGE_KEYS.logoSize, String(getDefaultLogoSettings().size)),
            animation: logoAnimationSelect?.value || safeStorageGet(STORAGE_KEYS.logoAnimation, getDefaultLogoSettings().animation)
        }));
    }

    function previewLogoSettings() {
        const target = getSelectedLogoTarget();
        const settings = sanitizeLogoSettings({
            url: logoUrlInput?.value || '',
            size: logoSizeInput?.value || '',
            animation: logoAnimationSelect?.value || ''
        });

        if (!isValidAvatarUrl(settings.url)) {
            setLogoStatus('Use a valid image URL or relative asset path for the logo.', 'error');
            return false;
        }

        previewLogoTarget(target, settings.url);
        syncLogoPresetSelection(settings.url);
        setLogoStatus(`Preview ready for the ${target} logo. Press Apply logo to save it.`, 'success');
        return true;
    }

    function hydrateLogoSettings() {
        const settings = getStoredBrandLogoSettings();

        if (logoUrlInput) logoUrlInput.value = settings.url;
        if (logoSizeInput) logoSizeInput.value = String(settings.size);
        if (logoAnimationSelect) logoAnimationSelect.value = settings.animation;
        applyLogoSettings(settings);
        if (logoTargetSelect) {
            logoTargetSelect.value = getSelectedLogoTarget();
        }
        const storedPreset = safeStorageGet(STORAGE_KEYS.logoPreset, '');
        if (logoPresetSelect) {
            logoPresetSelect.value = storedPreset;
        }
        syncLogoDrawerToTarget(getSelectedLogoTarget());
    }

    function saveLogoSettings() {
        const target = getSelectedLogoTarget();
        const settings = sanitizeLogoSettings({
            url: logoUrlInput?.value || '',
            size: logoSizeInput?.value || '',
            animation: logoAnimationSelect?.value || ''
        });

        if (!isValidAvatarUrl(settings.url)) {
            setLogoStatus('Use a valid image URL or relative asset path for the logo.', 'error');
            return;
        }

        safeStorageSet(STORAGE_KEYS.logoTarget, target);
        safeStorageSet(STORAGE_KEYS.logoPreset, logoPresetSelect?.value || '');
        if (target === 'assistant') {
            avatarSettings.assistant = sanitizeAvatarSettings('assistant', {
                ...readAvatarFormSettings('assistant'),
                url: settings.url
            });
            writeAvatarFormSettings('assistant', avatarSettings.assistant);
            persistAvatarSettings();
            updateAvatarPreview('assistant');
            applyAvatarCssVars();
            refreshRenderedAvatars();
        } else if (target === 'user') {
            avatarSettings.user = sanitizeAvatarSettings('user', {
                ...readAvatarFormSettings('user'),
                url: settings.url
            });
            writeAvatarFormSettings('user', avatarSettings.user);
            persistAvatarSettings();
            updateAvatarPreview('user');
            applyAvatarCssVars();
            refreshRenderedAvatars();
        } else if (target === 'launcher') {
            if (widgetIconInput) widgetIconInput.value = settings.url;
            saveWidgetSettings();
        } else {
            persistBrandLogoSettings(settings);
        }
        flashButton(saveLogoSettingsBtn, 'Applied');
        setLogoStatus(`${target.charAt(0).toUpperCase() + target.slice(1)} logo updated in the preview and saved for export.`, 'success');
    }

    function getProjectSnapshot() {
        const activeWebhookMode = Array.from(webhookModeButtons).find(btn => btn.classList.contains('active'))?.dataset.target || 'prod';
        return {
            app: 'Cherry Builder',
            version: 1,
            savedAt: new Date().toISOString(),
            questionnaire: {
                steps,
                settings: questionnaireSettings
            },
            avatars: avatarSettings,
            footer: sanitizeFooterSettings({
                text: footerBrandTextInput?.value || safeStorageGet(STORAGE_KEYS.footerBrandText, getDefaultFooterSettings().text),
                url: footerBrandUrlInput?.value || safeStorageGet(STORAGE_KEYS.footerBrandUrl, getDefaultFooterSettings().url),
                fontFamily: footerFontFamilySelect?.value || safeStorageGet(STORAGE_KEYS.footerFontFamily, getDefaultFooterSettings().fontFamily),
                fontSize: footerFontSizeInput?.value || safeStorageGet(STORAGE_KEYS.footerFontSize, String(getDefaultFooterSettings().fontSize)),
                animation: footerAnimationSelect?.value || safeStorageGet(STORAGE_KEYS.footerAnimation, getDefaultFooterSettings().animation),
                background: footerBackgroundInput?.value || safeStorageGet(STORAGE_KEYS.footerBackground, getDefaultFooterSettings().background)
            }),
            theme: sanitizeThemeSettings({
                background: themeBackgroundInput?.value || safeStorageGet(STORAGE_KEYS.themeBackground, getDefaultThemeSettings().background),
                style: Array.from(themeStyleButtons).find(btn => btn.classList.contains('active'))?.dataset.themeStyle || safeStorageGet(STORAGE_KEYS.themeStyle, getDefaultThemeSettings().style)
            }),
            header: {
                showHome: !!headerShowHomeInput?.checked,
                showEmail: !!headerShowEmailInput?.checked,
                showDownload: !!headerShowDownloadInput?.checked,
                showRestart: !!headerShowRestartInput?.checked
            },
            video: sanitizeVideoSettings({
                enabled: videoEnabledInput?.checked ?? (safeStorageGet(STORAGE_KEYS.videoEnabled, 'true') !== 'false'),
                url: videoUrlInput?.value || safeStorageGet(STORAGE_KEYS.videoUrl, getDefaultVideoSettings().url)
            }),
            logo: getStoredBrandLogoSettings(),
            widget: {
                label: (widgetLabelInput?.value || safeStorageGet(STORAGE_KEYS.launcherLabel, 'Chat with Cherry') || 'Chat with Cherry').trim(),
                subtext: (widgetSubtextInput?.value || safeStorageGet(STORAGE_KEYS.launcherSubtext, 'We typically reply in minutes') || 'We typically reply in minutes').trim(),
                icon: (widgetIconInput?.value || safeStorageGet(STORAGE_KEYS.launcherIcon, '') || '').trim(),
                iconSize: (widgetIconSizeInput?.value || safeStorageGet(STORAGE_KEYS.launcherIconSize, '26') || '26').trim(),
                shape: widgetShapeSelect?.value || safeStorageGet(STORAGE_KEYS.launcherShape, 'circle') || 'circle',
                animation: widgetAnimSelect?.value || safeStorageGet(STORAGE_KEYS.launcherAnim, 'none') || 'none',
                is3d: !!(widget3dCheckbox?.checked ?? (safeStorageGet(STORAGE_KEYS.launcher3d, 'false') === 'true'))
            },
            webhook: {
                prod: (webhookProdInput?.value || safeStorageGet(STORAGE_KEYS.webhookProd, WEBHOOK_URL_PROD) || WEBHOOK_URL_PROD).trim(),
                test: (webhookTestInput?.value || safeStorageGet(STORAGE_KEYS.webhookTest, WEBHOOK_URL_TEST) || WEBHOOK_URL_TEST).trim(),
                chat: (webhookChatInput?.value || safeStorageGet(STORAGE_KEYS.webhookChat, '') || '').trim(),
                active: activeWebhookMode
            },
            embed: {
                runtimeBase: getActiveEmbedRuntimeBase(),
                appBase: getActiveEmbedAppBase(),
                commit: safeStorageGet(STORAGE_KEYS.deployCommit, CURRENT_EMBED_COMMIT) || CURRENT_EMBED_COMMIT
            },
            github: {
                repo: (githubUrlInput?.value || safeStorageGet(STORAGE_KEYS.repo, DEFAULT_GITHUB_REPO) || DEFAULT_GITHUB_REPO).trim(),
                branch: (githubBranchInput?.value || safeStorageGet(STORAGE_KEYS.branch, DEFAULT_GITHUB_BRANCH) || DEFAULT_GITHUB_BRANCH).trim()
            }
        };
    }

    function sanitizeProjectFilename(name) {
        return String(name || '')
            .trim()
            .replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .slice(0, 80);
    }

    function openProjectNamePrompt(defaultName = 'cherry-project') {
        return new Promise(resolve => {
            projectNameResolver = resolve;
            if (projectNameOverlay) projectNameOverlay.classList.add('show');
            if (projectNameModal) {
                projectNameModal.classList.add('open');
                projectNameModal.setAttribute('aria-hidden', 'false');
            }
            if (projectNameInput) {
                projectNameInput.value = defaultName;
                setTimeout(() => {
                    projectNameInput.focus();
                    projectNameInput.select();
                }, 0);
            }
            if (projectNameStatus) {
                projectNameStatus.textContent = 'Choose a name for the saved chatbot file.';
                projectNameStatus.classList.remove('success', 'error');
            }
        });
    }

    function closeProjectNamePrompt(value) {
        if (projectNameOverlay) projectNameOverlay.classList.remove('show');
        if (projectNameModal) {
            projectNameModal.classList.remove('open');
            projectNameModal.setAttribute('aria-hidden', 'true');
        }
        if (projectNameResolver) {
            const resolver = projectNameResolver;
            projectNameResolver = null;
            resolver(value);
        }
    }

    function confirmProjectNamePrompt() {
        const rawName = projectNameInput?.value || '';
        const safeName = sanitizeProjectFilename(rawName);
        if (!safeName) {
            if (projectNameStatus) {
                projectNameStatus.textContent = 'Enter a project name before saving.';
                projectNameStatus.classList.remove('success');
                projectNameStatus.classList.add('error');
            }
            if (projectNameInput) projectNameInput.focus();
            return;
        }
        closeProjectNamePrompt(safeName);
    }

    function openOpenProjectPrompt() {
        return new Promise(resolve => {
            openProjectResolver = resolve;
            const recentRaw = safeStorageGet(STORAGE_KEYS.projectSnapshot, '');
            let recentSnapshot = null;
            if (recentRaw) {
                try {
                    recentSnapshot = JSON.parse(recentRaw);
                } catch (_) {
                    recentSnapshot = null;
                }
            }

            if (openProjectOverlay) openProjectOverlay.classList.add('show');
            if (openProjectModal) {
                openProjectModal.classList.add('open');
                openProjectModal.setAttribute('aria-hidden', 'false');
            }
            if (openProjectLocalName) {
                openProjectLocalName.textContent = recentSnapshot?.projectName || 'Most recent local project';
            }
            if (openProjectLocalMeta) {
                openProjectLocalMeta.textContent = recentSnapshot?.savedAt
                    ? `Saved ${new Date(recentSnapshot.savedAt).toLocaleString()}.`
                    : 'Uses the last project saved in this browser.';
            }
            if (openProjectLocal) {
                openProjectLocal.disabled = !recentSnapshot;
                openProjectLocal.textContent = recentSnapshot ? 'Open recent' : 'No recent save';
            }
            if (openProjectStatus) {
                openProjectStatus.textContent = 'Choose a saved chatbot project to reopen in the builder.';
                openProjectStatus.classList.remove('success', 'error');
            }
        });
    }

    function closeOpenProjectPrompt(value) {
        if (openProjectOverlay) openProjectOverlay.classList.remove('show');
        if (openProjectModal) {
            openProjectModal.classList.remove('open');
            openProjectModal.setAttribute('aria-hidden', 'true');
        }
        if (openProjectResolver) {
            const resolver = openProjectResolver;
            openProjectResolver = null;
            resolver(value);
        }
    }

    async function saveCurrentProject() {
        saveSelectedQuestion();
        if (questionsStatus?.classList.contains('error')) {
            showDeployStatus('Project save blocked: fix the questionnaire fields first.', 100, 'error');
            return;
        }

        const assistantValid = updateAvatarPreview('assistant');
        const userValid = updateAvatarPreview('user');
        if (!assistantValid || !userValid) {
            showDeployStatus('Project save blocked: fix the avatar URL fields first.', 100, 'error');
            return;
        }

        avatarSettings = {
            assistant: readAvatarFormSettings('assistant'),
            user: readAvatarFormSettings('user')
        };
        persistAvatarSettings();

        if (!isValidHttpUrl((footerBrandUrlInput?.value || safeStorageGet(STORAGE_KEYS.footerBrandUrl, getDefaultFooterSettings().url)).trim())) {
            showDeployStatus('Project save blocked: footer branding URL must start with http:// or https://', 100, 'error');
            return;
        }

        const brandLogoForSave = getSelectedLogoTarget() === 'brand'
            ? sanitizeLogoSettings({
                url: logoUrlInput?.value || '',
                size: logoSizeInput?.value || '',
                animation: logoAnimationSelect?.value || ''
            })
            : getStoredBrandLogoSettings();
        if (!isValidAvatarUrl((brandLogoForSave.url || '').trim())) {
            showDeployStatus('Project save blocked: fix the logo URL field first.', 100, 'error');
            return;
        }

        saveFooterSettings();
        saveHeaderSettings();
        if (getSelectedLogoTarget() === 'brand') {
            saveLogoSettings();
        }
        saveWidgetSettings();
        saveWebhookSettings();
        persistQuestionnaire();

        const defaultProjectName = sanitizeProjectFilename(footerBrandTextInput?.value || brandLink?.textContent || 'cherry-project') || 'cherry-project';
        const projectName = await openProjectNamePrompt(defaultProjectName);
        if (!projectName) {
            showDeployStatus('Project save canceled.', 0, 'info');
            return;
        }

        const snapshot = getProjectSnapshot();
        snapshot.projectName = projectName;
        safeStorageSet(STORAGE_KEYS.projectSnapshot, JSON.stringify(snapshot));
        triggerDownload(`${projectName}-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.json`, JSON.stringify(snapshot, null, 2), 'application/json');
        flashButton(saveProjectBtn, 'Saved');
        showDeployStatus('Project saved and downloaded as a JSON snapshot.', 100, 'success');
    }

    async function openSavedProject() {
        const choice = await openOpenProjectPrompt();
        if (!choice) {
            showDeployStatus('Open project canceled.', 0, 'info');
            return;
        }

        if (choice === 'local') {
            try {
                const recentRaw = safeStorageGet(STORAGE_KEYS.projectSnapshot, '');
                if (!recentRaw) {
                    throw new Error('No recent local project found.');
                }
                loadProjectSnapshot(JSON.parse(recentRaw));
                if (openProjectBtn) flashButton(openProjectBtn, 'Opened');
                showDeployStatus('Recent local project opened.', 100, 'success');
            } catch (error) {
                showDeployStatus(`Open failed: ${error.message}`, 100, 'error');
            }
            return;
        }

        if (choice === 'browse' && openProjectFileInput) {
            openProjectFileInput.value = '';
            openProjectFileInput.click();
        }
    }

    async function handleOpenProjectFile(event) {
        const file = event.target?.files?.[0];
        if (!file) return;

        try {
            const text = await file.text();
            const snapshot = JSON.parse(text);
            loadProjectSnapshot(snapshot);
            if (openProjectBtn) flashButton(openProjectBtn, 'Opened');
            showDeployStatus('Project opened and applied to the builder preview.', 100, 'success');
        } catch (error) {
            showDeployStatus(`Open failed: ${error.message}`, 100, 'error');
        } finally {
            if (openProjectFileInput) {
                openProjectFileInput.value = '';
            }
        }
    }

    function loadProjectSnapshot(snapshot) {
        if (!snapshot || typeof snapshot !== 'object') {
            throw new Error('Invalid project file.');
        }

        const nextSteps = sanitizeSteps(snapshot?.questionnaire?.steps);
        const nextQuestionnaireSettings = {
            fontFamily: snapshot?.questionnaire?.settings?.fontFamily || getDefaultQuestionnaireSettings().fontFamily,
            fontSize: Number.parseInt(snapshot?.questionnaire?.settings?.fontSize, 10) || getDefaultQuestionnaireSettings().fontSize,
            animation: snapshot?.questionnaire?.settings?.animation || getDefaultQuestionnaireSettings().animation,
            emoji: String(snapshot?.questionnaire?.settings?.emoji || '')
        };

        steps = nextSteps;
        questionnaireSettings = nextQuestionnaireSettings;
        selectedQuestionIndex = Math.min(selectedQuestionIndex, steps.length - 1);
        persistQuestionnaire();
        applyQuestionnaireStyles();
        renderQuestionList();
        loadQuestionSelection(Math.max(selectedQuestionIndex, 0));

        avatarSettings = {
            assistant: sanitizeAvatarSettings('assistant', snapshot?.avatars?.assistant),
            user: sanitizeAvatarSettings('user', snapshot?.avatars?.user)
        };
        writeAvatarFormSettings('assistant', avatarSettings.assistant);
        writeAvatarFormSettings('user', avatarSettings.user);
        persistAvatarSettings();
        updateAvatarPreview('assistant');
        updateAvatarPreview('user');
        applyAvatarCssVars();
        refreshRenderedAvatars();

        const footerSettings = sanitizeFooterSettings(snapshot?.footer || {});
        if (footerBrandTextInput) footerBrandTextInput.value = footerSettings.text;
        if (footerBrandUrlInput) footerBrandUrlInput.value = footerSettings.url;
        if (footerFontFamilySelect) footerFontFamilySelect.value = footerSettings.fontFamily;
        if (footerFontSizeInput) footerFontSizeInput.value = String(footerSettings.fontSize);
        if (footerAnimationSelect) footerAnimationSelect.value = footerSettings.animation;
        if (footerBackgroundInput) footerBackgroundInput.value = footerSettings.background;
        if (footerBrandTextInput && footerBrandUrlInput && footerFontFamilySelect && footerFontSizeInput && footerAnimationSelect && footerBackgroundInput) {
            saveFooterSettings();
        } else {
            applyFooterSettings(footerSettings);
        }

        const nextThemeSettings = sanitizeThemeSettings(snapshot?.theme || {});
        writeThemeFormSettings(nextThemeSettings);
        if (themeBackgroundInput && themeStyleButtons.length > 0) {
            saveThemeSettings();
        } else {
            applyThemeSettings(nextThemeSettings);
        }

        const headerSettings = snapshot?.header || getDefaultHeaderSettings();
        if (headerShowHomeInput) headerShowHomeInput.checked = headerSettings.showHome !== false;
        if (headerShowEmailInput) headerShowEmailInput.checked = headerSettings.showEmail !== false;
        if (headerShowDownloadInput) headerShowDownloadInput.checked = headerSettings.showDownload !== false;
        if (headerShowRestartInput) headerShowRestartInput.checked = headerSettings.showRestart !== false;
        if (headerShowHomeInput && headerShowEmailInput && headerShowDownloadInput && headerShowRestartInput) {
            saveHeaderSettings();
        } else {
            applyHeaderSettings({
                showHome: headerSettings.showHome !== false,
                showEmail: headerSettings.showEmail !== false,
                showDownload: headerSettings.showDownload !== false,
                showRestart: headerSettings.showRestart !== false
            });
        }

        const videoSettings = sanitizeVideoSettings(snapshot?.video || {});
        if (videoEnabledInput) videoEnabledInput.checked = videoSettings.enabled;
        if (videoUrlInput) videoUrlInput.value = videoSettings.url;
        if (videoUrlInput) {
            saveVideoSettings();
        } else {
            applyVideoSettings(videoSettings);
        }

        const logoSettings = sanitizeLogoSettings(snapshot?.logo || {});
        if (logoUrlInput) logoUrlInput.value = logoSettings.url;
        if (logoSizeInput) logoSizeInput.value = String(logoSettings.size);
        if (logoAnimationSelect) logoAnimationSelect.value = logoSettings.animation;
        persistBrandLogoSettings(logoSettings);

        const widgetSettings = snapshot?.widget || {};
        if (widgetLabelInput) widgetLabelInput.value = widgetSettings.label || 'Chat with Cherry';
        if (widgetSubtextInput) widgetSubtextInput.value = widgetSettings.subtext || 'We typically reply in minutes';
        if (widgetIconInput) widgetIconInput.value = widgetSettings.icon || '';
        if (widgetIconSizeInput) widgetIconSizeInput.value = String(widgetSettings.iconSize || '26');
        if (widgetShapeSelect) widgetShapeSelect.value = widgetSettings.shape || 'circle';
        if (widgetAnimSelect) widgetAnimSelect.value = widgetSettings.animation || 'none';
        if (widget3dCheckbox) widget3dCheckbox.checked = !!widgetSettings.is3d;
        if (widgetLabelInput && widgetSubtextInput && widgetIconInput && widgetIconSizeInput && widgetShapeSelect && widgetAnimSelect && widget3dCheckbox) {
            saveWidgetSettings();
        } else {
            applyLauncher(
                widgetSettings.label || 'Chat with Cherry',
                widgetSettings.subtext || 'We typically reply in minutes',
                widgetSettings.icon || '',
                widgetSettings.shape || 'circle',
                widgetSettings.animation || 'none',
                !!widgetSettings.is3d,
                String(widgetSettings.iconSize || '26')
            );
        }

        const webhookSettings = snapshot?.webhook || {};
        if (webhookProdInput) webhookProdInput.value = webhookSettings.prod || WEBHOOK_URL_PROD;
        if (webhookTestInput) webhookTestInput.value = webhookSettings.test || WEBHOOK_URL_TEST;
        if (webhookChatInput) webhookChatInput.value = webhookSettings.chat || '';
        setActiveWebhook(webhookSettings.active || 'prod');
        if (webhookProdInput && webhookTestInput && webhookChatInput) {
            saveWebhookSettings();
        }

        const githubSettings = snapshot?.github || {};
        if (githubUrlInput) githubUrlInput.value = githubSettings.repo || DEFAULT_GITHUB_REPO;
        if (githubBranchInput) githubBranchInput.value = githubSettings.branch || DEFAULT_GITHUB_BRANCH;
        saveGithubSettings();

        const embedSettings = snapshot?.embed || {};
        const runtimeBase = normalizeEmbedBase(embedSettings.runtimeBase || getActiveEmbedRuntimeBase(), DEFAULT_EMBED_RUNTIME_BASE);
        const appBase = normalizeEmbedBase(embedSettings.appBase || getActiveEmbedAppBase(), DEFAULT_EMBED_APP_BASE);
        setActiveEmbedBases(runtimeBase, appBase, embedSettings.commit || '');
        updateEmbedCode();

        currentStep = 0;
        isAskingForEmail = false;
        formData.sessionId = generateSessionId();
        formData.name = '';
        formData.email = '';
        formData.inquiry = '';
        flowContainer.innerHTML = '';
        renderStep();
    }

    window.addEventListener('message', (event) => {
        const payload = event.data;
        if (!payload || payload.type !== 'CHERRY_EMBED_CONFIG' || !payload.snapshot) {
            return;
        }

        try {
            loadProjectSnapshot(payload.snapshot);
        } catch (error) {
            console.warn('Cherry embed config could not be applied.', error);
        }
    });

    // Initialize
    hydrateQuestionnaireSettings();
    hydrateAvatarSettings();
    hydrateFooterSettings();
    hydrateThemeSettings();
    hydrateHeaderSettings();
    hydrateVideoSettings();
    hydrateLogoSettings();
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
        wrapper.appendChild(createAvatarElement('assistant'));

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
            const qText = buildQuestionText(stepData);

            // Create Message Block with Avatar
            const stepDiv = createBotMessage();
            stepDiv.innerHTML = `<h2></h2>`;

            // Trigger typing
            const h2 = stepDiv.querySelector('h2');
            if (h2) {
                if (questionnaireSettings.animation === 'instant') {
                    h2.innerHTML = qText;
                } else {
                    typeText(h2, qText, getQuestionTypingSpeed());
                }
            }

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

    function buildQuestionText(stepData) {
        let qText = stepData.question;
        if (formData.name) {
            qText = qText.replace(/\{name\}/g, formData.name);
        }
        const emoji = (questionnaireSettings.emoji || '').trim();
        return emoji ? `${emoji} ${qText}` : qText;
    }

    function getQuestionTypingSpeed() {
        return questionnaireSettings.animation === 'fast' ? 18 : 40;
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
                const replyRow = document.createElement('div');
                replyRow.className = 'user-reply';
                const answerSpan = document.createElement('span');
                answerSpan.className = 'history-a';
                answerSpan.textContent = answer;
                replyRow.appendChild(answerSpan);
                replyRow.appendChild(createAvatarElement('user'));
                activeStep.appendChild(replyRow);
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
        let currentWrapper = null;
        const wrappers = flowContainer.querySelectorAll('.message-wrapper');
        for (let i = wrappers.length - 1; i >= 0; i--) {
            if (wrappers[i].querySelector('.current-step')) {
                currentWrapper = wrappers[i];
                break;
            }
        }
        if (!currentWrapper) {
            currentWrapper = flowContainer.lastElementChild;
        }

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
            const payload = {
                ...formData,
                action: 'sendMessage',
                chatInput: formData.inquiry || formData.email || formData.name || '',
                metadata: {
                    name: formData.name || '',
                    email: formData.email || '',
                    inquiry: formData.inquiry || ''
                }
            };
            const response = await fetch(currentWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const responseText = await response.text();
            let data;
            try {
                data = responseText ? JSON.parse(responseText) : {};
            } catch (e) {
                console.warn("Could not parse JSON response, using text:", e);
                data = { text: responseText };
            }

            console.log("Webhook Response:", data); // Debug log

            let botReply = "Thank you for reaching out.";
            const extractedReply = extractBotReply(data);
            if (extractedReply) {
                botReply = extractedReply;
            }

            if (!response.ok) {
                if (botReply && botReply !== "Thank you for reaching out.") {
                    stepDiv.innerHTML = `<h2>${botReply}</h2>`;
                    scrollToBottom();
                    return;
                }
                throw new Error(`HTTP error! status: ${response.status}${responseText ? ` - ${responseText}` : ''}`);
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

    function extractBotReply(payload) {
        const visited = new WeakSet();
        const candidateKeys = ['output', 'text', 'message', 'reply', 'response', 'content', 'answer'];

        function walk(value) {
            if (typeof value === 'string') {
                const trimmed = value.trim();
                return trimmed || '';
            }
            if (!value || typeof value !== 'object') {
                return '';
            }
            if (visited.has(value)) {
                return '';
            }
            visited.add(value);

            if (Array.isArray(value)) {
                for (const item of value) {
                    const found = walk(item);
                    if (found) return found;
                }
                return '';
            }

            for (const key of candidateKeys) {
                const direct = value[key];
                if (typeof direct === 'string' && direct.trim()) {
                    return direct.trim();
                }
            }

            for (const nested of Object.values(value)) {
                const found = walk(nested);
                if (found) return found;
            }

            return '';
        }

        return walk(payload);
    }

    function scrollToBottom() {
        // Use timeout to ensure DOM has updated
        setTimeout(() => {
            flowContainer.scrollTop = flowContainer.scrollHeight;
        }, 400);
    }

    function restart() {
        currentStep = 0;
        isAskingForEmail = false;
        formData.sessionId = generateSessionId();
        formData.name = '';
        formData.email = '';
        formData.inquiry = '';
        flowContainer.innerHTML = '';
        userInput.disabled = false;
        userInput.placeholder = "Type here...";
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
        syncDrawerUiState();
    }

    function openCredsDrawer(show) {
        if (!credsDrawer || !credsOverlay) return;
        credsDrawer.classList.toggle('open', show);
        credsOverlay.classList.toggle('show', show);
        credsDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
    }

    function openWebhookDrawer(show) {
        if (!webhookDrawer || !webhookOverlay) return;
        webhookDrawer.classList.toggle('open', show);
        webhookOverlay.classList.toggle('show', show);
        webhookDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
    }

    function openWidgetDrawer(show) {
        if (!widgetDrawer || !widgetOverlay) return;
        widgetDrawer.classList.toggle('open', show);
        widgetOverlay.classList.toggle('show', show);
        widgetDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
    }

    function openQuestionsDrawer(show) {
        if (!questionsDrawer || !questionsOverlay) return;
        questionsDrawer.classList.toggle('open', show);
        questionsOverlay.classList.toggle('show', show);
        questionsDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
        if (show) {
            renderQuestionList();
            loadQuestionSelection(selectedQuestionIndex);
        }
    }

    function openFooterDrawer(show) {
        if (!footerDrawer || !footerOverlay) return;
        footerDrawer.classList.toggle('open', show);
        footerOverlay.classList.toggle('show', show);
        footerDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
    }

    function openLogoDrawer(show) {
        if (!logoDrawer || !logoOverlay) return;
        logoDrawer.classList.toggle('open', show);
        logoOverlay.classList.toggle('show', show);
        logoDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
        if (show) {
            syncLogoDrawerToTarget(getSelectedLogoTarget());
        }
    }

    function openHeaderDrawer(show) {
        if (!headerDrawer || !headerOverlay) return;
        headerDrawer.classList.toggle('open', show);
        headerOverlay.classList.toggle('show', show);
        headerDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
    }

    function openVideoDrawer(show) {
        if (!videoDrawer || !videoOverlay) return;
        videoDrawer.classList.toggle('open', show);
        videoOverlay.classList.toggle('show', show);
        videoDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
        if (show) {
            if (videoEnabledInput) {
                videoEnabledInput.checked = safeStorageGet(STORAGE_KEYS.videoEnabled, 'true') !== 'false';
            }
            if (videoUrlInput) {
                videoUrlInput.value = safeStorageGet(STORAGE_KEYS.videoUrl, getDefaultVideoSettings().url);
            }
            previewVideoSettings();
        }
    }

    function syncDrawerUiState() {
        const anyDrawerOpen =
            embedDrawer?.classList.contains('open') ||
            credsDrawer?.classList.contains('open') ||
            webhookDrawer?.classList.contains('open') ||
            themeDrawer?.classList.contains('open') ||
            widgetDrawer?.classList.contains('open') ||
            questionsDrawer?.classList.contains('open') ||
            footerDrawer?.classList.contains('open') ||
            logoDrawer?.classList.contains('open') ||
            headerDrawer?.classList.contains('open') ||
            avatarPanel?.classList.contains('open');

        document.body.classList.toggle('drawer-panel-open', !!anyDrawerOpen);
    }

    window.__openQuestionsDrawer = () => openQuestionsDrawer(true);
    window.__openThemeDrawer = () => openThemeDrawer(true);

    function setQuestionsStatus(text, type = 'info') {
        if (!questionsStatus) return;
        questionsStatus.textContent = text;
        questionsStatus.classList.remove('success', 'error');
        if (type === 'success' || type === 'error') {
            questionsStatus.classList.add(type);
        }
    }

    function renderQuestionList() {
        if (!questionList) return;
        questionList.innerHTML = '';
        steps.forEach((step, index) => {
            const option = document.createElement('option');
            option.value = String(index);
            option.textContent = `${index + 1}. ${step.field}`;
            questionList.appendChild(option);
        });
        if (steps.length > 0) {
            const nextIndex = Math.min(Math.max(selectedQuestionIndex, 0), steps.length - 1);
            questionList.value = String(nextIndex);
            selectedQuestionIndex = nextIndex;
        }
    }

    function loadQuestionSelection(index) {
        if (!steps.length) return;
        selectedQuestionIndex = Math.min(Math.max(index, 0), steps.length - 1);
        const step = steps[selectedQuestionIndex];
        if (questionList) questionList.value = String(selectedQuestionIndex);
        if (questionFieldInput) questionFieldInput.value = step.field;
        if (questionTextInput) questionTextInput.value = step.question;
        if (questionPlaceholderInput) questionPlaceholderInput.value = step.placeholder;
        if (questionFontFamilySelect) questionFontFamilySelect.value = questionnaireSettings.fontFamily;
        if (questionFontSizeInput) questionFontSizeInput.value = String(questionnaireSettings.fontSize);
        if (questionAnimStyleSelect) questionAnimStyleSelect.value = questionnaireSettings.animation;
        if (questionEmojiInput) questionEmojiInput.value = questionnaireSettings.emoji;
    }

    function saveSelectedQuestion() {
        if (!steps.length) return;
        const field = (questionFieldInput?.value || '').trim();
        const question = (questionTextInput?.value || '').trim();
        const placeholder = (questionPlaceholderInput?.value || '').trim();
        if (!field || !question || !placeholder) {
            setQuestionsStatus('Field key, question text, and placeholder are required.', 'error');
            return;
        }
        steps[selectedQuestionIndex] = { field, question, placeholder };
        questionnaireSettings.fontFamily = questionFontFamilySelect?.value || questionnaireSettings.fontFamily;
        questionnaireSettings.fontSize = Number.parseInt(questionFontSizeInput?.value || String(questionnaireSettings.fontSize), 10) || questionnaireSettings.fontSize;
        questionnaireSettings.animation = questionAnimStyleSelect?.value || questionnaireSettings.animation;
        questionnaireSettings.emoji = (questionEmojiInput?.value || '').trim();
        applyQuestionnaireStyles();
        persistQuestionnaire();
        renderQuestionList();
        loadQuestionSelection(selectedQuestionIndex);
        setQuestionsStatus('Question saved.', 'success');
    }

    function addQuestion() {
        steps.push({
            field: `field_${steps.length + 1}`,
            question: 'New question',
            placeholder: 'Type here...'
        });
        selectedQuestionIndex = steps.length - 1;
        renderQuestionList();
        loadQuestionSelection(selectedQuestionIndex);
        persistQuestionnaire();
        setQuestionsStatus('Question added.', 'success');
    }

    function removeQuestion() {
        if (steps.length <= 1) {
            setQuestionsStatus('At least one question is required.', 'error');
            return;
        }
        steps.splice(selectedQuestionIndex, 1);
        selectedQuestionIndex = Math.min(selectedQuestionIndex, steps.length - 1);
        renderQuestionList();
        loadQuestionSelection(selectedQuestionIndex);
        persistQuestionnaire();
        setQuestionsStatus('Question removed.', 'success');
    }

    function persistQuestionnaire() {
        safeStorageSet(STORAGE_KEYS.questionnaireSteps, JSON.stringify(steps));
        safeStorageSet(STORAGE_KEYS.questionFontFamily, questionnaireSettings.fontFamily);
        safeStorageSet(STORAGE_KEYS.questionFontSize, String(questionnaireSettings.fontSize));
        safeStorageSet(STORAGE_KEYS.questionAnimation, questionnaireSettings.animation);
        safeStorageSet(STORAGE_KEYS.questionEmoji, questionnaireSettings.emoji);
    }

    function applyQuestionnaireStyles() {
        if (!flowContainer) return;
        flowContainer.style.setProperty('--question-font-family', questionnaireSettings.fontFamily);
        flowContainer.style.setProperty('--question-font-size', `${questionnaireSettings.fontSize}px`);
    }

    function applyQuestionnaire() {
        saveSelectedQuestion();
        if (!questionsStatus || questionsStatus.classList.contains('error')) return;
        currentStep = Math.min(currentStep, Math.max(steps.length - 1, 0));
        flowContainer.innerHTML = '';
        renderStep();
        setQuestionsStatus('Questionnaire applied to the builder preview.', 'success');
    }

    async function runProjectBackup() {
        if (!backupBtn) return;
        const originalLabel = backupBtn.textContent;
        backupBtn.disabled = true;
        backupBtn.textContent = 'Backing up...';
        showDeployStatus('Creating local backup...', 20, 'info');

        try {
            const response = await fetch('/api/backup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    source: 'C:\\Users\\astig\\OneDrive\\Desktop\\JARCHAT',
                    targets: [
                        'C:\\Users\\astig\\OneDrive\\Desktop\\JAR-BAK',
                        'E:\\JAR-BAK'
                    ]
                })
            });

            const payload = await response.json().catch(() => ({}));
            const results = Array.isArray(payload.results) ? payload.results : [];
            const failedTargets = results.filter(result => !result.ok);
            const successfulTargets = results.filter(result => result.ok).map(result => result.target);

            if (failedTargets.length) {
                const failedMessage = failedTargets
                    .map(result => `${result.target}: ${result.error}`)
                    .join(' | ');
                const partialMessage = successfulTargets.length
                    ? ` Saved to ${successfulTargets.join(', ')}.`
                    : '';
                throw new Error(`${failedMessage}.${partialMessage}`);
            }

            if (!response.ok || !payload?.ok) {
                throw new Error(payload?.error || 'Backup failed.');
            }

            flashButton(backupBtn, 'Backed up');
            showDeployStatus('Backup complete', 100, 'success');
        } catch (error) {
            showDeployStatus(`Backup failed: ${error.message}`, 100, 'error');
            if (backupBtn) {
                backupBtn.textContent = originalLabel;
            }
        } finally {
            if (backupBtn) {
                backupBtn.disabled = false;
                if (backupBtn.textContent === 'Backing up...') {
                    backupBtn.textContent = originalLabel;
                }
            }
        }
    }

    function getStoredEmbedBase(key, fallback) {
        return safeStorageGet(key, fallback) || fallback;
    }

    function normalizeEmbedBase(base, fallback) {
        const value = (base || '').trim();
        if (!value) return fallback;
        if (value.includes('@main')) return fallback;
        if (value.includes('@cff2284')) return fallback;
        return value;
    }

    function getActiveEmbedRuntimeBase() {
        return normalizeEmbedBase(getStoredEmbedBase(STORAGE_KEYS.embedRuntimeBase, DEFAULT_EMBED_RUNTIME_BASE), DEFAULT_EMBED_RUNTIME_BASE);
    }

    function getActiveEmbedAppBase() {
        return normalizeEmbedBase(getStoredEmbedBase(STORAGE_KEYS.embedAppBase, DEFAULT_EMBED_APP_BASE), DEFAULT_EMBED_APP_BASE);
    }

    function setActiveEmbedBases(runtimeBase, appBase, commitSha = '') {
        try {
            if (runtimeBase) localStorage.setItem(STORAGE_KEYS.embedRuntimeBase, runtimeBase);
            if (appBase) localStorage.setItem(STORAGE_KEYS.embedAppBase, appBase);
            if (commitSha) {
                localStorage.setItem(STORAGE_KEYS.deployCommit, commitSha);
            } else {
                safeStorageRemove(STORAGE_KEYS.deployCommit);
            }
        } catch (_) {
            // Ignore storage failures; the code block will still update for this session.
        }

        if (embedJsUrlInput) {
            embedJsUrlInput.value = `${runtimeBase || getActiveEmbedRuntimeBase()}/auto-embed.js`;
        }
        if (embedCssUrlInput) {
            embedCssUrlInput.value = `${appBase || getActiveEmbedAppBase()}/index.html`;
        }
    }

    function updateEmbedDefaults() {
        setActiveEmbedBases(getActiveEmbedRuntimeBase(), getActiveEmbedAppBase());
    }

    function encodeEmbedSnapshot(snapshot) {
        try {
            const json = JSON.stringify(snapshot);
            return btoa(unescape(encodeURIComponent(json)))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/g, '');
        } catch (_) {
            return '';
        }
    }

    function buildEmbedCode() {
        const snapshot = getProjectSnapshot();
        const runtimeBase = ((embedJsUrlInput?.value || '').trim().replace(/\/auto-embed\.js$/i, '')) || getActiveEmbedRuntimeBase();
        const appBase = ((embedCssUrlInput?.value || '').trim().replace(/\/index\.html$/i, '')) || getActiveEmbedAppBase();
        const jsUrl = `${runtimeBase}/auto-embed.js`;
        const appUrl = `${appBase}/embed.html`;
        const webhook = currentWebhookUrl || snapshot?.webhook?.prod || WEBHOOK_URL_PROD;
        const iconUrl = snapshot?.widget?.icon || '';
        const shape = snapshot?.widget?.shape || 'circle';
        const anim = snapshot?.widget?.animation || 'none';
        const is3d = !!snapshot?.widget?.is3d;
        const label = snapshot?.widget?.label || 'Chat with Cherry';
        const subtext = snapshot?.widget?.subtext || 'We typically reply in minutes';
        const iconSize = snapshot?.widget?.iconSize || '26';
        const encodedProject = encodeEmbedSnapshot(snapshot);
        const attrs = [
            `src="${jsUrl}"`,
            `data-webhook="${webhook}"`,
            `data-app-url="${appUrl}"`,
            `data-label="${label.replace(/"/g, '&quot;')}"`,
            `data-subtext="${subtext.replace(/"/g, '&quot;')}"`,
            `data-icon-size="${String(iconSize).replace(/"/g, '&quot;')}"`,
            `data-icon-shape="${shape}"`,
            `data-icon-anim="${anim}"`,
            `data-icon-3d="${String(is3d)}"`
        ];

        if (iconUrl) {
            attrs.splice(3, 0, `data-icon-url="${iconUrl.replace(/"/g, '&quot;')}"`);
        }

        if (encodedProject) {
            attrs.push(`data-project="${encodedProject}"`);
        }

        return `<script ${attrs.join(' ')}></script>`;
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
        const label = safeStorageGet(STORAGE_KEYS.launcherLabel, 'Chat with Cherry') || 'Chat with Cherry';
        const subtext = safeStorageGet(STORAGE_KEYS.launcherSubtext, 'We typically reply in minutes') || 'We typically reply in minutes';
        const icon = safeStorageGet(STORAGE_KEYS.launcherIcon, '') || '';
        const iconSize = safeStorageGet(STORAGE_KEYS.launcherIconSize, '26') || '26';
        const shape = safeStorageGet(STORAGE_KEYS.launcherShape, 'circle') || 'circle';
        const anim = safeStorageGet(STORAGE_KEYS.launcherAnim, 'none') || 'none';
        const is3d = safeStorageGet(STORAGE_KEYS.launcher3d, 'false') === 'true';
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
        safeStorageSet(STORAGE_KEYS.launcherLabel, label);
        safeStorageSet(STORAGE_KEYS.launcherSubtext, subtext);
        safeStorageSet(STORAGE_KEYS.launcherIcon, icon);
        safeStorageSet(STORAGE_KEYS.launcherIconSize, iconSize);
        safeStorageSet(STORAGE_KEYS.launcherShape, shape);
        safeStorageSet(STORAGE_KEYS.launcherAnim, anim);
        safeStorageSet(STORAGE_KEYS.launcher3d, String(is3d));
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
        let deployedCommitSha = '';

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

                try {
                    const ghJson = await ghResp.json();
                    deployedCommitSha = ghJson?.commit?.sha || deployedCommitSha;
                } catch (_) {
                    // Ignore JSON parsing issues and keep the last known commit SHA.
                }
            } catch (err) {
                showDeployStatus(`Error deploying ${file}: ${err.message}`, progress, 'error');
                setCredsStatus(`Deploy failed: ${err.message}`, 'error');
                return;
            }
            completed += 1;
        }

        if (deployedCommitSha) {
            const runtimeBase = `https://cdn.jsdelivr.net/gh/${repoPath}@${deployedCommitSha}`;
            const appBase = runtimeBase;
            setActiveEmbedBases(runtimeBase, appBase, deployedCommitSha);
            updateEmbedCode();
        }

        showDeployStatus('Deploy complete', 100, 'success');
        setCredsStatus(
            deployedCommitSha
                ? `Deploy complete: ${repoPath}@${deployedCommitSha.slice(0, 7)}. Embed code is now commit-pinned.`
                : `Deploy complete: ${repoPath} updated on ${branch}.`,
            'success'
        );
        setTimeout(() => {
            if (deployStatusEl) deployStatusEl.remove();
            deployStatusEl = null;
        }, 3200);
    }

    function getDeployFiles() {
        return [
            'index.html',
            'embed.html',
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

    async function fetchFileContentBase64(file) {
        const url = new URL(file, window.location.href).href;
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) {
            throw new Error(`could not read ${file}`);
        }
        return encodeBytesToBase64(new Uint8Array(await res.arrayBuffer()));
    }

    async function copyEmbedCode() {
        const code = buildEmbedCode();
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(code);
            } else {
                throw new Error('Clipboard API unavailable');
            }
        } catch (_) {
            const textarea = document.createElement('textarea');
            textarea.value = code;
            textarea.setAttribute('readonly', 'true');
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            textarea.style.top = '0';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            const copied = document.execCommand('copy');
            document.body.removeChild(textarea);
            if (!copied) {
                window.prompt('Copy embed code:', code);
                return;
            }
        }
        copyEmbedBtn.textContent = 'Copied';
        setTimeout(() => copyEmbedBtn.textContent = 'Copy', 1200);
    }

    function downloadEmbedJs() {
        const containerId = (embedContainerIdInput?.value || 'cherry-embed').trim() || 'cherry-embed';
        const appBase = ((embedCssUrlInput?.value || '').trim().replace(/\/(?:index|embed)\.html$/i, '')) || getActiveEmbedAppBase();
        const encodedProject = encodeEmbedSnapshot(getProjectSnapshot());
        const content = `(() => {\n  const target = (document.currentScript.dataset.target) || '${containerId}';\n  const appUrl = new URL('${appBase}/embed.html', window.location.href);\n  const project = '${encodedProject}';\n  const container = document.getElementById(target);\n  if (!container) return;\n  const iframe = document.createElement('iframe');\n  iframe.allow = 'clipboard-read; clipboard-write; microphone; autoplay';\n  iframe.style = 'width:100%;min-height:520px;display:block;border:0;border-radius:0;box-shadow:none;background:#0f172a;';\n  const postConfig = () => {\n    try {\n      const normalized = project.replace(/-/g, '+').replace(/_/g, '/');\n      const padded = normalized + '='.repeat((4 - (normalized.length % 4 || 4)) % 4);\n      const snapshot = JSON.parse(decodeURIComponent(escape(atob(padded))));\n      iframe.contentWindow.postMessage({ type: 'CHERRY_EMBED_CONFIG', snapshot }, '*');\n      setTimeout(() => iframe.contentWindow.postMessage({ type: 'CHERRY_EMBED_CONFIG', snapshot }, '*'), 150);\n    } catch (_) {}\n  };\n  fetch(appUrl.toString(), { cache: 'no-store' })\n    .then((response) => {\n      if (!response.ok) throw new Error('Failed to load app HTML');\n      return response.text();\n    })\n    .then((html) => {\n      const baseHref = appUrl.toString().replace(/[^/]*$/, '');\n      iframe.srcdoc = html.replace(/<head([^>]*)>/i, '<head$1><base href=\"' + baseHref + '\">');\n      iframe.addEventListener('load', postConfig, { once: true });\n      container.innerHTML = '';\n      container.appendChild(iframe);\n    })\n    .catch((error) => {\n      console.error('Cherry embed failed.', error);\n    });\n})();\n`;
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
            safeStorageRemove(STORAGE_KEYS.token);
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
        const prod = safeStorageGet(STORAGE_KEYS.webhookProd, WEBHOOK_URL_PROD) || WEBHOOK_URL_PROD;
        const test = safeStorageGet(STORAGE_KEYS.webhookTest, WEBHOOK_URL_TEST) || WEBHOOK_URL_TEST;
        const chat = safeStorageGet(STORAGE_KEYS.webhookChat, '') || '';
        const active = safeStorageGet(STORAGE_KEYS.webhookActive, 'prod') || 'prod';

        if (webhookProdInput) webhookProdInput.value = prod;
        if (webhookTestInput) webhookTestInput.value = test;
        if (webhookChatInput) webhookChatInput.value = chat;

        setActiveWebhook(active, false);
        updateWebhookStatus(`Active: ${active.toUpperCase()}`);
    }

    function saveWebhookSettings() {
        try {
            if (webhookProdInput) safeStorageSet(STORAGE_KEYS.webhookProd, webhookProdInput.value.trim() || WEBHOOK_URL_PROD);
            if (webhookTestInput) safeStorageSet(STORAGE_KEYS.webhookTest, webhookTestInput.value.trim() || WEBHOOK_URL_TEST);
            if (webhookChatInput) safeStorageSet(STORAGE_KEYS.webhookChat, webhookChatInput.value.trim());
            if (saveWebhookSettingsBtn) flashButton(saveWebhookSettingsBtn, 'Saved');
            updateWebhookStatus('Saved webhook URLs.', 'success');
            const active = safeStorageGet(STORAGE_KEYS.webhookActive, 'prod') || 'prod';
            setActiveWebhook(active, false);
        } catch (e) {
            updateWebhookStatus('Could not save webhook URLs (storage blocked).', 'error');
        }
    }

    function setActiveWebhook(mode, persist = true) {
        const prod = webhookProdInput?.value?.trim() || safeStorageGet(STORAGE_KEYS.webhookProd, WEBHOOK_URL_PROD) || WEBHOOK_URL_PROD;
        const test = webhookTestInput?.value?.trim() || safeStorageGet(STORAGE_KEYS.webhookTest, WEBHOOK_URL_TEST) || WEBHOOK_URL_TEST;
        const chat = webhookChatInput?.value?.trim() || safeStorageGet(STORAGE_KEYS.webhookChat, '') || '';

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

        if (persist) safeStorageSet(STORAGE_KEYS.webhookActive, mode);

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
