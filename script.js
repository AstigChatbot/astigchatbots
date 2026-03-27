document.addEventListener('DOMContentLoaded', () => {
    const pageParams = new URLSearchParams(window.location.search);
    const isEmbeddedApp =
        pageParams.get('embed') === '1' ||
        window.name === 'CHERRY_EMBED_FRAME' ||
        document.documentElement.hasAttribute('data-cherry-embed');
    const isInlineEmbedded =
        pageParams.get('inline') === '1' ||
        document.documentElement.hasAttribute('data-cherry-inline');
    const flowContainer = document.getElementById('conversation-flow');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const inputArea = document.querySelector('.input-area');
    const inputWrapper = document.querySelector('.input-wrapper');
    const introScreen = document.getElementById('intro-screen');
    const introTitle = document.getElementById('intro-title');
    const introMessage = document.getElementById('intro-message');
    const introContinueBtn = document.getElementById('intro-continue-btn');
    const formInterface = document.querySelector('.form-interface');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const emailBtn = document.getElementById('email-btn');
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    const headerStatusDot = document.getElementById('header-status-dot');
    const webhookToggle = document.getElementById('webhook-toggle');
    const refreshBtn = document.getElementById('refresh-btn');
    const telemetryBtn = document.getElementById('telemetry-menu-btn');
    const saveProjectBtn = document.getElementById('save-project-btn');
    const openProjectBtn = document.getElementById('open-project-btn');
    const newProjectBtn = document.getElementById('new-project-btn');
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
    const widgetSubtextDisplaySelect = document.getElementById('widget-subtext-display');
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
    const themePageTitleInput = document.getElementById('theme-page-title');
    const themeFaviconUrlInput = document.getElementById('theme-favicon-url');
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
    const converseBtn = document.getElementById('converse-menu-btn');
    const converseDrawer = document.getElementById('converse-drawer');
    const converseOverlay = document.getElementById('converse-overlay');
    const converseClose = document.getElementById('converse-close');
    const converseAssistantFontFamilySelect = document.getElementById('converse-assistant-font-family');
    const converseAssistantFontSizeInput = document.getElementById('converse-assistant-font-size');
    const converseAssistantAnimationSelect = document.getElementById('converse-assistant-animation');
    const converseUserFontFamilySelect = document.getElementById('converse-user-font-family');
    const converseUserFontSizeInput = document.getElementById('converse-user-font-size');
    const converseUserAnimationSelect = document.getElementById('converse-user-animation');
    const converseIntroEnabledInput = document.getElementById('converse-intro-enabled');
    const converseIntroAnimationSelect = document.getElementById('converse-intro-animation');
    const converseIntroTitleInput = document.getElementById('converse-intro-title');
    const converseIntroTitleFontFamilySelect = document.getElementById('converse-intro-title-font-family');
    const converseIntroTitleFontSizeInput = document.getElementById('converse-intro-title-font-size');
    const converseIntroMessageInput = document.getElementById('converse-intro-message');
    const converseIntroMessageFontFamilySelect = document.getElementById('converse-intro-message-font-family');
    const converseIntroMessageFontSizeInput = document.getElementById('converse-intro-message-font-size');
    const converseIntroButtonTextInput = document.getElementById('converse-intro-button-text');
    const converseIntroButtonFontFamilySelect = document.getElementById('converse-intro-button-font-family');
    const converseIntroButtonFontSizeInput = document.getElementById('converse-intro-button-font-size');
    const saveConverseSettingsBtn = document.getElementById('save-converse-settings');
    const converseStatus = document.getElementById('converse-status');
    const headerDrawer = document.getElementById('header-drawer');
    const headerOverlay = document.getElementById('header-overlay');
    const headerClose = document.getElementById('header-close');
    const headerTitleInput = document.getElementById('header-title-input');
    const headerSubtitleInput = document.getElementById('header-subtitle-input');
    const headerShowStatusDotInput = document.getElementById('header-show-status-dot');
    const headerShowSubtitleInput = document.getElementById('header-show-subtitle');
    const headerShowHomeInput = document.getElementById('header-show-home');
    const headerShowEmailInput = document.getElementById('header-show-email');
    const headerShowDownloadInput = document.getElementById('header-show-download');
    const headerShowRestartInput = document.getElementById('header-show-restart');
    const headerHomeLinkUrlInput = document.getElementById('header-home-link-url');
    const headerHomeIconUrlInput = document.getElementById('header-home-icon-url');
    const headerEmailIconUrlInput = document.getElementById('header-email-icon-url');
    const headerDownloadIconUrlInput = document.getElementById('header-download-icon-url');
    const headerRestartIconUrlInput = document.getElementById('header-restart-icon-url');
    const saveHeaderSettingsBtn = document.getElementById('save-header-settings');
    const headerStatus = document.getElementById('header-status');
    const headerActions = document.getElementById('header-actions');
    const homeBtn = document.getElementById('home-btn');
    const defaultHeaderIcons = {
        home: homeBtn?.innerHTML || '',
        email: emailBtn?.innerHTML || '',
        download: downloadBtn?.innerHTML || '',
        restart: restartBtn?.innerHTML || ''
    };
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
    const questionTypeSelect = document.getElementById('question-type');
    const questionOptionsInput = document.getElementById('question-options');
    const questionOptionsLabel = document.getElementById('question-options-label');
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
    const assistantAvatarHideImageInput = document.getElementById('assistant-avatar-hide-image');
    const assistantAvatarAnimateInput = document.getElementById('assistant-avatar-animate');
    const assistantAvatarAnimationSelect = document.getElementById('assistant-avatar-animation');
    const userAvatarUrlInput = document.getElementById('user-avatar-url');
    const userAvatarPreview = document.getElementById('user-avatar-preview');
    const userAvatarStatus = document.getElementById('user-avatar-status');
    const userAvatarFilterSelect = document.getElementById('user-avatar-filter');
    const userAvatarSizeInput = document.getElementById('user-avatar-size');
    const userAvatarRadiusInput = document.getElementById('user-avatar-radius');
    const userAvatarBgInput = document.getElementById('user-avatar-bg');
    const userAvatarHideImageInput = document.getElementById('user-avatar-hide-image');
    const userAvatarHideReplyInput = document.getElementById('user-avatar-hide-reply');
    const userAvatarAnimateInput = document.getElementById('user-avatar-animate');
    const userAvatarAnimationSelect = document.getElementById('user-avatar-animation');
    const embedJsUrlInput = document.getElementById('embed-js-url');
    const embedCssUrlInput = document.getElementById('embed-css-url');
    const embedContainerIdInput = document.getElementById('embed-container-id');
    const embedCodeBlock = document.getElementById('embed-code-block');
    const embedInlineCodeBlock = document.getElementById('embed-inline-code-block');
    const copyEmbedBtn = document.getElementById('copy-embed');
    const copyInlineEmbedBtn = document.getElementById('copy-inline-embed');
    const downloadEmbedJsBtn = document.getElementById('download-embed-js');
    const downloadEmbedCssBtn = document.getElementById('download-embed-css');
    const telemetryPanel = document.getElementById('telemetry-panel');
    const telemetryOverlay = document.getElementById('telemetry-overlay');
    const telemetryClose = document.getElementById('telemetry-close');
    const telemetryStatusBadge = document.getElementById('telemetry-status-badge');
    const telemetryStageList = document.getElementById('telemetry-stage-list');
    const telemetryLogList = document.getElementById('telemetry-log-list');
    const telemetrySessionId = document.getElementById('telemetry-session-id');
    const telemetryWebhookUrl = document.getElementById('telemetry-webhook-url');
    const telemetryLastResult = document.getElementById('telemetry-last-result');
    const telemetryRawLabel = document.getElementById('telemetry-raw-label');
    const telemetryRawFeed = document.getElementById('telemetry-raw-feed');

    // Webhook URLs
    const WEBHOOK_URL_PROD = 'https://n8n.srv1291312.hstgr.cloud/webhook/33042864-3282-4dd6-95ab-6ffa983a8196';
    const WEBHOOK_URL_TEST = 'https://n8n.srv1291312.hstgr.cloud/webhook-test/33042864-3282-4dd6-95ab-6ffa983a8196';
    const DEFAULT_GITHUB_REPO = 'AstigChatbot/astigchatbots';
    const DEFAULT_GITHUB_BRANCH = 'main';
    const CURRENT_EMBED_COMMIT = '1682f3d';
    const DEFAULT_EMBED_RUNTIME_BASE = `https://cdn.jsdelivr.net/gh/AstigChatbot/astigchatbots@${CURRENT_EMBED_COMMIT}`;
    const DEFAULT_EMBED_APP_BASE = `https://cdn.jsdelivr.net/gh/AstigChatbot/astigchatbots@${CURRENT_EMBED_COMMIT}`;
    const RSVP_FAILURE_MESSAGE = "⚠️ Oops! We couldn't process your RSVP. Please make sure all your details are correct and try again.";
    const GUEST_LIST_NOT_FOUND_MESSAGE = "❌ We couldn't find your name on the guest list. Please double-check your details. Would you like try again?";
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
        launcherSubtextDisplay: 'cherry.launcher.subtextDisplay',
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
        converseAssistantFontFamily: 'cherry.converse.assistant.fontFamily',
        converseAssistantFontSize: 'cherry.converse.assistant.fontSize',
        converseAssistantAnimation: 'cherry.converse.assistant.animation',
        converseUserFontFamily: 'cherry.converse.user.fontFamily',
        converseUserFontSize: 'cherry.converse.user.fontSize',
        converseUserAnimation: 'cherry.converse.user.animation',
        converseIntroEnabled: 'cherry.converse.intro.enabled',
        converseIntroAnimation: 'cherry.converse.intro.animation',
        converseIntroTitle: 'cherry.converse.intro.title',
        converseIntroTitleFontFamily: 'cherry.converse.intro.titleFontFamily',
        converseIntroTitleFontSize: 'cherry.converse.intro.titleFontSize',
        converseIntroMessage: 'cherry.converse.intro.message',
        converseIntroMessageFontFamily: 'cherry.converse.intro.messageFontFamily',
        converseIntroMessageFontSize: 'cherry.converse.intro.messageFontSize',
        converseIntroButtonText: 'cherry.converse.intro.buttonText',
        converseIntroButtonFontFamily: 'cherry.converse.intro.buttonFontFamily',
        converseIntroButtonFontSize: 'cherry.converse.intro.buttonFontSize',
        headerTitle: 'cherry.header.title',
        headerSubtitle: 'cherry.header.subtitle',
        headerShowStatusDot: 'cherry.header.showStatusDot',
        headerShowSubtitle: 'cherry.header.showSubtitle',
        headerShowHome: 'cherry.header.showHome',
        headerShowEmail: 'cherry.header.showEmail',
        headerShowDownload: 'cherry.header.showDownload',
        headerShowRestart: 'cherry.header.showRestart',
        headerHomeLinkUrl: 'cherry.header.homeLinkUrl',
        headerHomeIconUrl: 'cherry.header.homeIconUrl',
        headerEmailIconUrl: 'cherry.header.emailIconUrl',
        headerDownloadIconUrl: 'cherry.header.downloadIconUrl',
        headerRestartIconUrl: 'cherry.header.restartIconUrl',
        themeBackground: 'cherry.theme.background',
        themeStyle: 'cherry.theme.style',
        themePageTitle: 'cherry.theme.pageTitle',
        themeFaviconUrl: 'cherry.theme.faviconUrl',
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
            hideImageInput: assistantAvatarHideImageInput,
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
            hideImageInput: userAvatarHideImageInput,
            hideReplyInput: userAvatarHideReplyInput,
            animateInput: userAvatarAnimateInput,
            animationInput: userAvatarAnimationSelect,
            fallbackLabel: 'Y'
        }
    };

    if (isEmbeddedApp) {
        document.body.classList.add('embedded-app');
    }
    if (isInlineEmbedded) {
        document.body.classList.add('embedded-inline');
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

    function getTelemetryTimestamp() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    function renderTelemetry() {
        if (telemetryStatusBadge) {
            telemetryStatusBadge.textContent = telemetryState.status.toUpperCase();
            telemetryStatusBadge.classList.toggle('is-live', telemetryState.status === 'live');
            telemetryStatusBadge.classList.toggle('is-error', telemetryState.status === 'error');
        }
        if (telemetrySessionId) telemetrySessionId.textContent = formData.sessionId || 'Waiting...';
        if (telemetryWebhookUrl) telemetryWebhookUrl.textContent = currentWebhookUrl || 'Not set';
        if (telemetryLastResult) telemetryLastResult.textContent = telemetryState.lastResult;
        if (telemetryRawLabel) telemetryRawLabel.textContent = telemetryState.rawLabel;
        if (telemetryRawFeed) telemetryRawFeed.textContent = telemetryState.rawFeed;

        if (telemetryStageList) {
            telemetryStageList.innerHTML = telemetryState.stages.map(stage => `
                <article class="telemetry-stage-card${stage.state === 'error' ? ' is-error' : ''}">
                    <div class="telemetry-stage-card__header">
                        <span class="telemetry-stage-card__title">${escapeHtml(stage.label)}</span>
                        <span class="telemetry-stage-card__percent">${Math.round(stage.percent)}%</span>
                    </div>
                    <div class="telemetry-stage-card__bar">
                        <div class="telemetry-stage-card__bar-fill" style="width:${Math.max(0, Math.min(100, stage.percent))}%"></div>
                    </div>
                </article>
            `).join('');
        }

        if (telemetryLogList) {
            telemetryLogList.innerHTML = telemetryState.logs.map(log => `
                <article class="telemetry-log-card">
                    <div class="telemetry-log-card__message">${escapeHtml(log.message)}</div>
                    <div class="telemetry-log-card__time">${escapeHtml(log.time)}</div>
                </article>
            `).join('');
        }
    }

    function setTelemetryStage(key, percent, state = 'live') {
        const stage = telemetryState.stages.find(item => item.key === key);
        if (!stage) return;
        stage.percent = percent;
        stage.state = state;
        renderTelemetry();
    }

    function resetTelemetryStages() {
        telemetryState.stages.forEach(stage => {
            stage.percent = 0;
            stage.state = 'idle';
        });
    }

    function logTelemetry(message) {
        telemetryState.logs.unshift({
            message,
            time: getTelemetryTimestamp()
        });
        telemetryState.logs = telemetryState.logs.slice(0, 24);
        renderTelemetry();
    }

    function updateTelemetryRaw(label, payload) {
        telemetryState.rawLabel = label;
        telemetryState.rawFeed = typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2);
        renderTelemetry();
    }

    function setTelemetryStatus(status, lastResult) {
        telemetryState.status = status;
        telemetryState.lastResult = lastResult;
        renderTelemetry();
    }

    function openTelemetryPanel(show) {
        if (!telemetryPanel || !telemetryOverlay) return;
        telemetryPanel.classList.toggle('open', show);
        telemetryOverlay.classList.toggle('show', show);
        telemetryPanel.setAttribute('aria-hidden', show ? 'false' : 'true');
        syncDrawerUiState();
        if (show) {
            renderTelemetry();
        }
    }

    // State for interactive actions
    let isAskingForEmail = false;
    const telemetryState = {
        status: 'idle',
        lastResult: 'No activity yet',
        rawLabel: 'Waiting for webhook activity...',
        rawFeed: 'No transmissions yet.',
        logs: [],
        stages: [
            { key: 'client', label: 'Client to Automation', percent: 0, state: 'idle' },
            { key: 'processing', label: 'Automation Processing', percent: 0, state: 'idle' },
            { key: 'clientReturn', label: 'Automation to Client', percent: 0, state: 'idle' },
            { key: 'render', label: 'Render Response', percent: 0, state: 'idle' }
        ]
    };

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
    if (telemetryBtn) {
        telemetryBtn.addEventListener('click', () => openTelemetryPanel(true));
    }
    if (telemetryOverlay) {
        telemetryOverlay.addEventListener('click', () => openTelemetryPanel(false));
    }
    if (telemetryClose) {
        telemetryClose.addEventListener('click', () => openTelemetryPanel(false));
    }

    if (saveProjectBtn) {
        saveProjectBtn.addEventListener('click', saveCurrentProject);
    }
    if (newProjectBtn) {
        newProjectBtn.addEventListener('click', createNewProject);
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
    if (converseBtn) {
        converseBtn.addEventListener('click', () => openConverseDrawer(true));
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
        launcher.addEventListener('click', () => {
            if (document.body.classList.contains('chatbot-minimized')) {
                setChatbotMinimized(false);
                return;
            }
            openWidgetDrawer(true);
        });
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
        copyEmbedBtn.addEventListener('click', () => copyEmbedCode('launcher'));
    }

    if (copyInlineEmbedBtn) {
        copyInlineEmbedBtn.addEventListener('click', () => copyEmbedCode('inline'));
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
    [headerTitleInput, headerSubtitleInput].forEach(input => {
        if (input) {
            input.addEventListener('input', previewHeaderSettings);
        }
    });
    [headerShowStatusDotInput, headerShowSubtitleInput, headerShowHomeInput, headerShowEmailInput, headerShowDownloadInput, headerShowRestartInput].forEach(input => {
        if (input) {
            input.addEventListener('change', previewHeaderSettings);
        }
    });
    [headerHomeLinkUrlInput, headerHomeIconUrlInput, headerEmailIconUrlInput, headerDownloadIconUrlInput, headerRestartIconUrlInput].forEach(input => {
        if (input) {
            input.addEventListener('input', previewHeaderSettings);
        }
    });
    if (logoOverlay) {
        logoOverlay.addEventListener('click', () => openLogoDrawer(false));
    }
    if (converseOverlay) {
        converseOverlay.addEventListener('click', () => openConverseDrawer(false));
    }
    if (converseClose) {
        converseClose.addEventListener('click', () => openConverseDrawer(false));
    }
    if (saveConverseSettingsBtn) {
        saveConverseSettingsBtn.addEventListener('click', saveConverseSettings);
    }
    [converseIntroEnabledInput, converseIntroAnimationSelect, converseIntroTitleInput, converseIntroTitleFontFamilySelect, converseIntroTitleFontSizeInput, converseIntroMessageInput, converseIntroMessageFontFamilySelect, converseIntroMessageFontSizeInput, converseIntroButtonTextInput, converseIntroButtonFontFamilySelect, converseIntroButtonFontSizeInput, converseAssistantFontFamilySelect, converseAssistantFontSizeInput, converseAssistantAnimationSelect, converseUserFontFamilySelect, converseUserFontSizeInput, converseUserAnimationSelect].forEach(input => {
        if (input) {
            input.addEventListener('input', previewConverseSettings);
            input.addEventListener('change', previewConverseSettings);
        }
    });
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
        questionList.addEventListener('click', (event) => {
            const questionItem = event.target.closest('.question-list__item');
            if (!questionItem) return;
            loadQuestionSelection(Number(questionItem.dataset.index));
        });
        questionList.addEventListener('dragstart', (event) => {
            const questionItem = event.target.closest('.question-list__item');
            if (!questionItem) return;
            draggedQuestionIndex = Number(questionItem.dataset.index);
            questionItem.classList.add('is-dragging');
            if (event.dataTransfer) {
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/plain', String(draggedQuestionIndex));
            }
        });
        questionList.addEventListener('dragend', () => {
            draggedQuestionIndex = null;
            questionList.querySelectorAll('.question-list__item').forEach((item) => {
                item.classList.remove('is-dragging', 'is-drop-target');
            });
        });
        questionList.addEventListener('dragover', (event) => {
            event.preventDefault();
            const questionItem = event.target.closest('.question-list__item');
            questionList.querySelectorAll('.question-list__item').forEach((item) => {
                item.classList.toggle('is-drop-target', item === questionItem && !item.classList.contains('is-dragging'));
            });
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = 'move';
            }
        });
        questionList.addEventListener('dragleave', (event) => {
            const questionItem = event.target.closest('.question-list__item');
            if (questionItem && !questionItem.contains(event.relatedTarget)) {
                questionItem.classList.remove('is-drop-target');
            }
        });
        questionList.addEventListener('drop', (event) => {
            event.preventDefault();
            const questionItem = event.target.closest('.question-list__item');
            if (!questionItem) return;
            moveQuestion(draggedQuestionIndex, Number(questionItem.dataset.index));
        });
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

    if (questionTypeSelect) {
        questionTypeSelect.addEventListener('change', () => syncQuestionTypeUi(questionTypeSelect.value));
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
    [themePageTitleInput, themeFaviconUrlInput].forEach(input => {
        if (input) {
            input.addEventListener('input', previewThemeSettings);
            input.addEventListener('change', saveThemeSettings);
        }
    });

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
        [fields.urlInput, fields.filterInput, fields.sizeInput, fields.radiusInput, fields.bgInput, fields.hideReplyInput, fields.animateInput, fields.animationInput]
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
    let hasStartedConversation = false;
    const formData = {
        sessionId: generateSessionId(),
        name: '',
        firstName: '',
        lastName: '',
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
    let draggedQuestionIndex = null;
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
                field: 'email',
                question: "Thanks, <span class='highlight'>{firstName}</span>.<br>What's the best email address for you?",
                placeholder: "Enter your email address..."
            },
            {
                field: 'inquiry',
                question: "Nice to meet you, <span class='highlight'>{firstName}</span>.<br>What's on your mind?",
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
                hideImage: false,
                hideReply: false,
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
            hideImage: false,
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
            hideImage: typeof candidate?.hideImage === 'boolean' ? candidate.hideImage : defaults.hideImage,
            hideReply: typeof candidate?.hideReply === 'boolean' ? candidate.hideReply : defaults.hideReply,
            animate: typeof candidate?.animate === 'boolean' ? candidate.animate : defaults.animate,
            animation: ['pulse', 'float', 'spin'].includes(candidate?.animation) ? candidate.animation : defaults.animation
        };
    }

    function isValidAvatarUrl(value) {
        const url = (value || '').trim();
        if (!url) return true;
        if (url.startsWith('data:image/')) return true;
        try {
            const parsed = new URL(url, document.baseURI || window.location.href);
            return ['http:', 'https:', 'data:', 'blob:'].includes(parsed.protocol) || !value.includes('://');
        } catch (_) {
            return false;
        }
    }

    function resolveAvatarUrl(value) {
        const url = (value || '').trim();
        if (!url) return '';
        try {
            return new URL(url, document.baseURI || window.location.href).href;
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

        const nextSteps = candidate.map((step, index) => {
            const type = step?.type === 'multiple_choice'
                ? 'multiple_choice'
                : (step?.type === 'input_bars' ? 'input_bars' : 'text');
            const options = Array.isArray(step?.options)
                ? step.options.map(option => String(option || '').trim()).filter(Boolean)
                : [];
            return {
                field: String(step?.field || `field_${index + 1}`).trim() || `field_${index + 1}`,
                question: String(step?.question || '').trim() || `Question ${index + 1}`,
                placeholder: String(step?.placeholder || 'Type here...').trim() || 'Type here...',
                type,
                options: type === 'text' ? [] : options
            };
        });

        return nextSteps.length > 0 ? nextSteps : getDefaultSteps();
    }

    function upgradeQuestionnaireSteps(candidateSteps) {
        const nextSteps = [...candidateSteps];
        const hasEmailStep = nextSteps.some(step => String(step?.field || '').trim().toLowerCase() === 'email');
        if (hasEmailStep) {
            return nextSteps;
        }

        const nameIndex = nextSteps.findIndex(step => String(step?.field || '').trim().toLowerCase() === 'name');
        const inquiryIndex = nextSteps.findIndex(step => String(step?.field || '').trim().toLowerCase() === 'inquiry');

        if (nameIndex === 0 && inquiryIndex === 1) {
            nextSteps.splice(1, 0, {
                field: 'email',
                question: "Thanks, <span class='highlight'>{firstName}</span>.<br>What's the best email address for you?",
                placeholder: "Enter your email address..."
            });
        }

        return nextSteps;
    }

    function hydrateQuestionnaireSettings() {
        const storedSteps = safeStorageGet(STORAGE_KEYS.questionnaireSteps, '');
        if (storedSteps) {
            try {
                steps = upgradeQuestionnaireSteps(sanitizeSteps(JSON.parse(storedSteps)));
            } catch (_) {
                steps = getDefaultSteps();
            }
        } else {
            steps = upgradeQuestionnaireSteps(getDefaultSteps());
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
        if (fields.hideImageInput) fields.hideImageInput.checked = !!settings.hideImage;
        if (fields.hideReplyInput) fields.hideReplyInput.checked = !!settings.hideReply;
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
            hideImage: !!fields?.hideImageInput?.checked,
            hideReply: !!fields?.hideReplyInput?.checked,
            animate: !!fields?.animateInput?.checked,
            animation: fields?.animationInput?.value || getDefaultAvatarSettings(role).animation
        });
    }

    function updateAvatarElement(element, settings, role) {
        if (!element) return;
        const img = element.querySelector('img');
        const fallback = element.querySelector('.avatar-fallback');
        const resolvedUrl = resolveAvatarUrl(settings.url);
        const hideImage = !!settings.hideImage;
        element.dataset.avatarRole = role;
        element.style.setProperty('--avatar-size', `${settings.size}px`);
        element.style.setProperty('--avatar-radius', `${settings.radius}%`);
        element.style.setProperty('--avatar-background', settings.background);
        element.style.setProperty('--avatar-filter', getAvatarFilterValue(settings.filter));
        element.classList.remove('avatar-anim-pulse', 'avatar-anim-float', 'avatar-anim-spin');
        if (settings.animate) {
            element.classList.add(`avatar-anim-${settings.animation}`);
        }
        element.classList.toggle('avatar-hidden', hideImage);
        element.hidden = hideImage;
        element.style.display = hideImage ? 'none' : '';
        element.setAttribute('aria-hidden', hideImage ? 'true' : 'false');

        if (fallback) {
            fallback.textContent = AVATAR_FIELDS[role]?.fallbackLabel || role.slice(0, 1).toUpperCase();
            fallback.hidden = hideImage;
        }

        if (img) {
            if (resolvedUrl && !hideImage) {
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
        if (previewSettings.hideImage) {
            setAvatarStatus(role, `${role.charAt(0).toUpperCase() + role.slice(1)} avatar will be hidden after you apply this setting.`, 'success');
            return true;
        }
        if (role === 'user' && previewSettings.hideReply) {
            setAvatarStatus(role, 'User replies and the user avatar will be hidden in the builder preview after you apply this setting.', 'success');
            return true;
        }
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
        applyUserReplyVisibility();
    }

    function applyUserReplyVisibility() {
        const hideUserReply = !!avatarSettings.user?.hideReply;
        document.querySelectorAll('.user-reply').forEach(element => {
            element.hidden = hideUserReply;
            element.style.display = hideUserReply ? 'none' : '';
            element.setAttribute('aria-hidden', hideUserReply ? 'true' : 'false');
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
            style: 'glass',
            pageTitle: 'Cherry - Messages',
            faviconUrl: 'assets/favicon.png'
        };
    }

    function sanitizeThemeSettings(candidate = {}) {
        const defaults = getDefaultThemeSettings();
        return {
            background: /^#[0-9a-f]{6}$/i.test(candidate?.background || '') ? candidate.background : defaults.background,
            style: ['glass', 'gradient', 'transparent'].includes(candidate?.style) ? candidate.style : defaults.style,
            pageTitle: typeof candidate?.pageTitle === 'string' ? candidate.pageTitle.trim() : defaults.pageTitle,
            faviconUrl: typeof candidate?.faviconUrl === 'string' ? candidate.faviconUrl.trim() : defaults.faviconUrl
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
            style: activeStyle,
            pageTitle: themePageTitleInput?.value || '',
            faviconUrl: themeFaviconUrlInput?.value || ''
        });
    }

    function writeThemeFormSettings(settings) {
        if (themeBackgroundInput) themeBackgroundInput.value = settings.background;
        if (themePageTitleInput) themePageTitleInput.value = settings.pageTitle;
        if (themeFaviconUrlInput) themeFaviconUrlInput.value = settings.faviconUrl;
        setActiveThemeStyle(settings.style);
    }

    function applyThemeBranding(settings) {
        document.title = settings.pageTitle || '';

        const faviconHref = resolveAvatarUrl(settings.faviconUrl) || settings.faviconUrl || '';
        let faviconLink = document.querySelector('link[rel="icon"]');
        if (!faviconHref) {
            if (faviconLink) faviconLink.remove();
            return;
        }

        if (!faviconLink) {
            faviconLink = document.createElement('link');
            faviconLink.setAttribute('rel', 'icon');
            document.head.appendChild(faviconLink);
        }
        faviconLink.setAttribute('href', faviconHref);
    }

    function applyThemeSettings(settings) {
        themeSettings = sanitizeThemeSettings(settings);
        document.body.dataset.builderStyle = themeSettings.style;
        document.documentElement.style.setProperty('--builder-surface-color', themeSettings.background);
        applyThemeBranding(themeSettings);
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
        safeStorageSet(STORAGE_KEYS.themePageTitle, settings.pageTitle);
        safeStorageSet(STORAGE_KEYS.themeFaviconUrl, settings.faviconUrl);
        setThemeStatus('Theme settings saved to the builder preview.', 'success');
    }

    function hydrateThemeSettings() {
        const storedBackground = safeStorageGet(STORAGE_KEYS.themeBackground, '__missing__');
        const storedStyle = safeStorageGet(STORAGE_KEYS.themeStyle, '__missing__');
        const storedPageTitle = safeStorageGet(STORAGE_KEYS.themePageTitle, '__missing__');
        const storedFaviconUrl = safeStorageGet(STORAGE_KEYS.themeFaviconUrl, '__missing__');
        themeSettings = sanitizeThemeSettings({
            background: storedBackground === '__missing__' ? getDefaultThemeSettings().background : storedBackground,
            style: storedStyle === '__missing__' ? getDefaultThemeSettings().style : storedStyle,
            pageTitle: storedPageTitle === '__missing__' ? getDefaultThemeSettings().pageTitle : storedPageTitle,
            faviconUrl: storedFaviconUrl === '__missing__' ? getDefaultThemeSettings().faviconUrl : storedFaviconUrl
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
            enabled: typeof candidate?.enabled === 'boolean' ? candidate.enabled : true,
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
            title: 'Cherry',
            subtitle: '',
            showStatusDot: true,
            showSubtitle: false,
            showHome: true,
            showEmail: true,
            showDownload: true,
            showRestart: true,
            homeLinkUrl: 'https://deejayedson.com/',
            homeIconUrl: '',
            emailIconUrl: '',
            downloadIconUrl: '',
            restartIconUrl: ''
        };
    }

    function sanitizeHeaderSettings(candidate = {}) {
        const defaults = getDefaultHeaderSettings();
        const title = typeof candidate?.title === 'string' ? candidate.title.trim() : defaults.title;
        const subtitle = typeof candidate?.subtitle === 'string' ? candidate.subtitle.trim() : '';
        return {
            title,
            subtitle,
            showStatusDot: typeof candidate?.showStatusDot === 'boolean' ? candidate.showStatusDot : defaults.showStatusDot,
            showSubtitle: typeof candidate?.showSubtitle === 'boolean' ? (candidate.showSubtitle && !!subtitle) : (defaults.showSubtitle && !!subtitle),
            showHome: typeof candidate?.showHome === 'boolean' ? candidate.showHome : defaults.showHome,
            showEmail: typeof candidate?.showEmail === 'boolean' ? candidate.showEmail : defaults.showEmail,
            showDownload: typeof candidate?.showDownload === 'boolean' ? candidate.showDownload : defaults.showDownload,
            showRestart: typeof candidate?.showRestart === 'boolean' ? candidate.showRestart : defaults.showRestart,
            homeLinkUrl: typeof candidate?.homeLinkUrl === 'string' ? candidate.homeLinkUrl.trim() : defaults.homeLinkUrl,
            homeIconUrl: String(candidate?.homeIconUrl || '').trim(),
            emailIconUrl: String(candidate?.emailIconUrl || '').trim(),
            downloadIconUrl: String(candidate?.downloadIconUrl || '').trim(),
            restartIconUrl: String(candidate?.restartIconUrl || '').trim()
        };
    }

    function applyHeaderActionIcon(element, iconUrl, fallbackMarkup, altLabel) {
        if (!element) return;
        const resolvedUrl = resolveAvatarUrl(iconUrl);
        if (resolvedUrl) {
            element.innerHTML = `<img src="${resolvedUrl.replace(/"/g, '&quot;')}" alt="${altLabel.replace(/"/g, '&quot;')}">`;
            return;
        }
        element.innerHTML = fallbackMarkup;
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
        const nextSettings = sanitizeHeaderSettings(settings);
        const liveFormHeader = document.querySelector('.form-interface .form-header') || document.querySelector('.form-header');
        const liveBrand = liveFormHeader?.querySelector('.brand');
        const liveTitle = document.getElementById('header-title') || liveBrand?.querySelector('h1');
        const liveStatusDot = document.getElementById('header-status-dot') || liveBrand?.querySelector('.status-dot');
        let liveSubtitle = document.getElementById('header-subtitle') || liveBrand?.querySelector('.brand-subtitle');
        let liveCopy = liveBrand?.querySelector('.brand-copy');

        if (!liveCopy && liveBrand && liveTitle) {
            liveCopy = document.createElement('div');
            liveCopy.className = 'brand-copy';
            liveTitle.insertAdjacentElement('beforebegin', liveCopy);
            liveCopy.appendChild(liveTitle);
        }

        if (!liveSubtitle && liveCopy) {
            liveSubtitle = document.createElement('p');
            liveSubtitle.className = 'brand-subtitle';
            liveSubtitle.id = 'header-subtitle';
            liveCopy.appendChild(liveSubtitle);
        }

        if (liveTitle) {
            liveTitle.textContent = nextSettings.title;
        }
        if (liveSubtitle) {
            liveSubtitle.textContent = nextSettings.subtitle;
            liveSubtitle.hidden = !nextSettings.showSubtitle;
        }
        if (liveStatusDot) {
            liveStatusDot.hidden = !nextSettings.showStatusDot;
        }
        if (homeBtn) {
            homeBtn.href = nextSettings.homeLinkUrl;
        }
        if (homeBtn) homeBtn.style.display = nextSettings.showHome ? '' : 'none';
        if (emailBtn) emailBtn.style.display = nextSettings.showEmail ? '' : 'none';
        if (downloadBtn) downloadBtn.style.display = nextSettings.showDownload ? '' : 'none';
        if (restartBtn) restartBtn.style.display = nextSettings.showRestart ? '' : 'none';
        applyHeaderActionIcon(homeBtn, nextSettings.homeIconUrl, defaultHeaderIcons.home, 'Home');
        applyHeaderActionIcon(emailBtn, nextSettings.emailIconUrl, defaultHeaderIcons.email, 'Email');
        applyHeaderActionIcon(downloadBtn, nextSettings.downloadIconUrl, defaultHeaderIcons.download, 'Download');
        applyHeaderActionIcon(restartBtn, nextSettings.restartIconUrl, defaultHeaderIcons.restart, 'Restart');
        if (headerActions) {
            headerActions.style.gap = '15px';
        }
    }

    function hydrateHeaderSettings() {
        const storedTitle = safeStorageGet(STORAGE_KEYS.headerTitle, '__missing__');
        const storedSubtitle = safeStorageGet(STORAGE_KEYS.headerSubtitle, '__missing__');
        const storedHomeLinkUrl = safeStorageGet(STORAGE_KEYS.headerHomeLinkUrl, '__missing__');
        const settings = sanitizeHeaderSettings({
            title: storedTitle === '__missing__' ? getDefaultHeaderSettings().title : storedTitle,
            subtitle: storedSubtitle === '__missing__' ? getDefaultHeaderSettings().subtitle : storedSubtitle,
            showStatusDot: safeStorageGet(STORAGE_KEYS.headerShowStatusDot, 'true') !== 'false',
            showSubtitle: safeStorageGet(STORAGE_KEYS.headerShowSubtitle, 'false') === 'true',
            showHome: safeStorageGet(STORAGE_KEYS.headerShowHome, 'true') !== 'false',
            showEmail: safeStorageGet(STORAGE_KEYS.headerShowEmail, 'true') !== 'false',
            showDownload: safeStorageGet(STORAGE_KEYS.headerShowDownload, 'true') !== 'false',
            showRestart: safeStorageGet(STORAGE_KEYS.headerShowRestart, 'true') !== 'false',
            homeLinkUrl: storedHomeLinkUrl === '__missing__' ? getDefaultHeaderSettings().homeLinkUrl : storedHomeLinkUrl,
            homeIconUrl: safeStorageGet(STORAGE_KEYS.headerHomeIconUrl, ''),
            emailIconUrl: safeStorageGet(STORAGE_KEYS.headerEmailIconUrl, ''),
            downloadIconUrl: safeStorageGet(STORAGE_KEYS.headerDownloadIconUrl, ''),
            restartIconUrl: safeStorageGet(STORAGE_KEYS.headerRestartIconUrl, '')
        });

        if (headerTitleInput) headerTitleInput.value = settings.title;
        if (headerSubtitleInput) headerSubtitleInput.value = settings.subtitle;
        if (headerShowStatusDotInput) headerShowStatusDotInput.checked = settings.showStatusDot;
        if (headerShowSubtitleInput) headerShowSubtitleInput.checked = settings.showSubtitle;
        if (headerShowHomeInput) headerShowHomeInput.checked = settings.showHome;
        if (headerShowEmailInput) headerShowEmailInput.checked = settings.showEmail;
        if (headerShowDownloadInput) headerShowDownloadInput.checked = settings.showDownload;
        if (headerShowRestartInput) headerShowRestartInput.checked = settings.showRestart;
        if (headerHomeLinkUrlInput) headerHomeLinkUrlInput.value = settings.homeLinkUrl;
        if (headerHomeIconUrlInput) headerHomeIconUrlInput.value = settings.homeIconUrl;
        if (headerEmailIconUrlInput) headerEmailIconUrlInput.value = settings.emailIconUrl;
        if (headerDownloadIconUrlInput) headerDownloadIconUrlInput.value = settings.downloadIconUrl;
        if (headerRestartIconUrlInput) headerRestartIconUrlInput.value = settings.restartIconUrl;
        applyHeaderSettings(settings);
    }

    function saveHeaderSettings() {
        const settings = sanitizeHeaderSettings({
            title: headerTitleInput?.value || '',
            subtitle: headerSubtitleInput?.value || '',
            showStatusDot: !!headerShowStatusDotInput?.checked,
            showSubtitle: !!headerShowSubtitleInput?.checked,
            showHome: !!headerShowHomeInput?.checked,
            showEmail: !!headerShowEmailInput?.checked,
            showDownload: !!headerShowDownloadInput?.checked,
            showRestart: !!headerShowRestartInput?.checked,
            homeLinkUrl: headerHomeLinkUrlInput?.value || '',
            homeIconUrl: headerHomeIconUrlInput?.value || '',
            emailIconUrl: headerEmailIconUrlInput?.value || '',
            downloadIconUrl: headerDownloadIconUrlInput?.value || '',
            restartIconUrl: headerRestartIconUrlInput?.value || ''
        });

        safeStorageSet(STORAGE_KEYS.headerTitle, settings.title);
        safeStorageSet(STORAGE_KEYS.headerSubtitle, settings.subtitle);
        safeStorageSet(STORAGE_KEYS.headerShowStatusDot, String(settings.showStatusDot));
        safeStorageSet(STORAGE_KEYS.headerShowSubtitle, String(settings.showSubtitle));
        safeStorageSet(STORAGE_KEYS.headerShowHome, String(settings.showHome));
        safeStorageSet(STORAGE_KEYS.headerShowEmail, String(settings.showEmail));
        safeStorageSet(STORAGE_KEYS.headerShowDownload, String(settings.showDownload));
        safeStorageSet(STORAGE_KEYS.headerShowRestart, String(settings.showRestart));
        safeStorageSet(STORAGE_KEYS.headerHomeLinkUrl, settings.homeLinkUrl);
        safeStorageSet(STORAGE_KEYS.headerHomeIconUrl, settings.homeIconUrl);
        safeStorageSet(STORAGE_KEYS.headerEmailIconUrl, settings.emailIconUrl);
        safeStorageSet(STORAGE_KEYS.headerDownloadIconUrl, settings.downloadIconUrl);
        safeStorageSet(STORAGE_KEYS.headerRestartIconUrl, settings.restartIconUrl);
        applyHeaderSettings(settings);
        flashButton(saveHeaderSettingsBtn, 'Applied');
        setHeaderStatus('Header content and visibility updated.', 'success');
    }

    function previewHeaderSettings() {
        const settings = sanitizeHeaderSettings({
            title: headerTitleInput?.value || '',
            subtitle: headerSubtitleInput?.value || '',
            showStatusDot: !!headerShowStatusDotInput?.checked,
            showSubtitle: !!headerShowSubtitleInput?.checked,
            showHome: !!headerShowHomeInput?.checked,
            showEmail: !!headerShowEmailInput?.checked,
            showDownload: !!headerShowDownloadInput?.checked,
            showRestart: !!headerShowRestartInput?.checked,
            homeLinkUrl: headerHomeLinkUrlInput?.value || '',
            homeIconUrl: headerHomeIconUrlInput?.value || '',
            emailIconUrl: headerEmailIconUrlInput?.value || '',
            downloadIconUrl: headerDownloadIconUrlInput?.value || '',
            restartIconUrl: headerRestartIconUrlInput?.value || ''
        });
        applyHeaderSettings(settings);
        setHeaderStatus('Header preview updated.', 'success');
    }

    function sanitizeFooterSettings(candidate = {}) {
        const defaults = getDefaultFooterSettings();
        const fontSize = Number.parseInt(candidate?.fontSize, 10);
        return {
            text: typeof candidate?.text === 'string' ? candidate.text.trim() : defaults.text,
            url: typeof candidate?.url === 'string' ? candidate.url.trim() : defaults.url,
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
        brandLink.href = settings.url || '#';
        brandFooter.hidden = !settings.text;
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
        const storedText = safeStorageGet(STORAGE_KEYS.footerBrandText, '__missing__');
        const storedUrl = safeStorageGet(STORAGE_KEYS.footerBrandUrl, '__missing__');
        const settings = sanitizeFooterSettings({
            text: storedText === '__missing__' ? getDefaultFooterSettings().text : storedText,
            url: storedUrl === '__missing__' ? getDefaultFooterSettings().url : storedUrl,
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

        if (settings.url && !isValidHttpUrl(settings.url)) {
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
        updateEmbedCode();
        flashButton(saveFooterSettingsBtn, 'Applied');
        setFooterStatus('Footer branding applied to the builder preview.', 'success');
    }

    function getDefaultConverseSettings() {
        return {
            intro: {
                enabled: true,
                animation: 'none',
                title: "Hi, I'm Cherry.",
                titleFontFamily: "'Outfit', sans-serif",
                titleFontSize: 42,
                message: 'To get started with your RSVP, please use the exact name and email address from the invitation you received.',
                messageFontFamily: "'Outfit', sans-serif",
                messageFontSize: 17,
                buttonText: 'Continue',
                buttonFontFamily: "'Outfit', sans-serif",
                buttonFontSize: 16
            },
            assistant: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: 24,
                animation: 'none'
            },
            user: {
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                animation: 'none'
            }
        };
    }

    function sanitizeConverseSettings(candidate = {}) {
        const defaults = getDefaultConverseSettings();
        const introTitleFontSize = Number.parseInt(candidate?.intro?.titleFontSize, 10);
        const introMessageFontSize = Number.parseInt(candidate?.intro?.messageFontSize, 10);
        const introButtonFontSize = Number.parseInt(candidate?.intro?.buttonFontSize, 10);
        const assistantFontSize = Number.parseInt(candidate?.assistant?.fontSize, 10);
        const userFontSize = Number.parseInt(candidate?.user?.fontSize, 10);
        return {
            intro: {
                enabled: typeof candidate?.intro?.enabled === 'boolean' ? candidate.intro.enabled : defaults.intro.enabled,
                animation: ['none', 'fade', 'glow'].includes(candidate?.intro?.animation) ? candidate.intro.animation : defaults.intro.animation,
                title: String(candidate?.intro?.title || defaults.intro.title).trim() || defaults.intro.title,
                titleFontFamily: String(candidate?.intro?.titleFontFamily || defaults.intro.titleFontFamily).trim() || defaults.intro.titleFontFamily,
                titleFontSize: Number.isFinite(introTitleFontSize) ? Math.min(64, Math.max(24, introTitleFontSize)) : defaults.intro.titleFontSize,
                message: String(candidate?.intro?.message || defaults.intro.message).trim() || defaults.intro.message,
                messageFontFamily: String(candidate?.intro?.messageFontFamily || defaults.intro.messageFontFamily).trim() || defaults.intro.messageFontFamily,
                messageFontSize: Number.isFinite(introMessageFontSize) ? Math.min(32, Math.max(14, introMessageFontSize)) : defaults.intro.messageFontSize,
                buttonText: String(candidate?.intro?.buttonText || defaults.intro.buttonText).trim() || defaults.intro.buttonText,
                buttonFontFamily: String(candidate?.intro?.buttonFontFamily || defaults.intro.buttonFontFamily).trim() || defaults.intro.buttonFontFamily,
                buttonFontSize: Number.isFinite(introButtonFontSize) ? Math.min(28, Math.max(14, introButtonFontSize)) : defaults.intro.buttonFontSize
            },
            assistant: {
                fontFamily: String(candidate?.assistant?.fontFamily || defaults.assistant.fontFamily).trim() || defaults.assistant.fontFamily,
                fontSize: Number.isFinite(assistantFontSize) ? Math.min(42, Math.max(16, assistantFontSize)) : defaults.assistant.fontSize,
                animation: ['none', 'fade', 'glow'].includes(candidate?.assistant?.animation) ? candidate.assistant.animation : defaults.assistant.animation
            },
            user: {
                fontFamily: String(candidate?.user?.fontFamily || defaults.user.fontFamily).trim() || defaults.user.fontFamily,
                fontSize: Number.isFinite(userFontSize) ? Math.min(32, Math.max(14, userFontSize)) : defaults.user.fontSize,
                animation: ['none', 'fade', 'glow'].includes(candidate?.user?.animation) ? candidate.user.animation : defaults.user.animation
            }
        };
    }

    function applyConverseSettings(settings) {
        const nextSettings = sanitizeConverseSettings(settings);
        if (introScreen) {
            introScreen.classList.remove('intro-anim-none', 'intro-anim-fade', 'intro-anim-glow');
            introScreen.classList.add(`intro-anim-${nextSettings.intro.animation}`);
        }
        if (introTitle) {
            introTitle.textContent = nextSettings.intro.title;
            introTitle.style.fontFamily = nextSettings.intro.titleFontFamily;
            introTitle.style.fontSize = `${nextSettings.intro.titleFontSize}px`;
        }
        if (introMessage) {
            introMessage.textContent = nextSettings.intro.message;
            introMessage.style.fontFamily = nextSettings.intro.messageFontFamily;
            introMessage.style.fontSize = `${nextSettings.intro.messageFontSize}px`;
        }
        if (introContinueBtn) {
            introContinueBtn.textContent = nextSettings.intro.buttonText;
            introContinueBtn.style.fontFamily = nextSettings.intro.buttonFontFamily;
            introContinueBtn.style.fontSize = `${nextSettings.intro.buttonFontSize}px`;
        }
        if (!hasStartedConversation) {
            toggleConversationUi(!nextSettings.intro.enabled);
        }
        document.documentElement.style.setProperty('--assistant-response-font-family', nextSettings.assistant.fontFamily);
        document.documentElement.style.setProperty('--assistant-response-font-size', `${nextSettings.assistant.fontSize}px`);
        document.documentElement.style.setProperty('--user-response-font-family', nextSettings.user.fontFamily);
        document.documentElement.style.setProperty('--user-response-font-size', `${nextSettings.user.fontSize}px`);
        if (flowContainer) {
            flowContainer.classList.remove('assistant-anim-none', 'assistant-anim-fade', 'assistant-anim-glow', 'user-anim-none', 'user-anim-fade', 'user-anim-glow');
            flowContainer.classList.add(`assistant-anim-${nextSettings.assistant.animation}`, `user-anim-${nextSettings.user.animation}`);
        }
    }

    function hydrateConverseSettings() {
        const settings = sanitizeConverseSettings({
            intro: {
                enabled: safeStorageGet(STORAGE_KEYS.converseIntroEnabled, String(getDefaultConverseSettings().intro.enabled)) === 'true',
                animation: safeStorageGet(STORAGE_KEYS.converseIntroAnimation, getDefaultConverseSettings().intro.animation),
                title: safeStorageGet(STORAGE_KEYS.converseIntroTitle, getDefaultConverseSettings().intro.title),
                titleFontFamily: safeStorageGet(STORAGE_KEYS.converseIntroTitleFontFamily, getDefaultConverseSettings().intro.titleFontFamily),
                titleFontSize: safeStorageGet(STORAGE_KEYS.converseIntroTitleFontSize, String(getDefaultConverseSettings().intro.titleFontSize)),
                message: safeStorageGet(STORAGE_KEYS.converseIntroMessage, getDefaultConverseSettings().intro.message),
                messageFontFamily: safeStorageGet(STORAGE_KEYS.converseIntroMessageFontFamily, getDefaultConverseSettings().intro.messageFontFamily),
                messageFontSize: safeStorageGet(STORAGE_KEYS.converseIntroMessageFontSize, String(getDefaultConverseSettings().intro.messageFontSize)),
                buttonText: safeStorageGet(STORAGE_KEYS.converseIntroButtonText, getDefaultConverseSettings().intro.buttonText),
                buttonFontFamily: safeStorageGet(STORAGE_KEYS.converseIntroButtonFontFamily, getDefaultConverseSettings().intro.buttonFontFamily),
                buttonFontSize: safeStorageGet(STORAGE_KEYS.converseIntroButtonFontSize, String(getDefaultConverseSettings().intro.buttonFontSize))
            },
            assistant: {
                fontFamily: safeStorageGet(STORAGE_KEYS.converseAssistantFontFamily, getDefaultConverseSettings().assistant.fontFamily),
                fontSize: safeStorageGet(STORAGE_KEYS.converseAssistantFontSize, String(getDefaultConverseSettings().assistant.fontSize)),
                animation: safeStorageGet(STORAGE_KEYS.converseAssistantAnimation, getDefaultConverseSettings().assistant.animation)
            },
            user: {
                fontFamily: safeStorageGet(STORAGE_KEYS.converseUserFontFamily, getDefaultConverseSettings().user.fontFamily),
                fontSize: safeStorageGet(STORAGE_KEYS.converseUserFontSize, String(getDefaultConverseSettings().user.fontSize)),
                animation: safeStorageGet(STORAGE_KEYS.converseUserAnimation, getDefaultConverseSettings().user.animation)
            }
        });
        if (converseIntroEnabledInput) converseIntroEnabledInput.checked = settings.intro.enabled;
        if (converseIntroAnimationSelect) converseIntroAnimationSelect.value = settings.intro.animation;
        if (converseIntroTitleInput) converseIntroTitleInput.value = settings.intro.title;
        if (converseIntroTitleFontFamilySelect) converseIntroTitleFontFamilySelect.value = settings.intro.titleFontFamily;
        if (converseIntroTitleFontSizeInput) converseIntroTitleFontSizeInput.value = String(settings.intro.titleFontSize);
        if (converseIntroMessageInput) converseIntroMessageInput.value = settings.intro.message;
        if (converseIntroMessageFontFamilySelect) converseIntroMessageFontFamilySelect.value = settings.intro.messageFontFamily;
        if (converseIntroMessageFontSizeInput) converseIntroMessageFontSizeInput.value = String(settings.intro.messageFontSize);
        if (converseIntroButtonTextInput) converseIntroButtonTextInput.value = settings.intro.buttonText;
        if (converseIntroButtonFontFamilySelect) converseIntroButtonFontFamilySelect.value = settings.intro.buttonFontFamily;
        if (converseIntroButtonFontSizeInput) converseIntroButtonFontSizeInput.value = String(settings.intro.buttonFontSize);
        if (converseAssistantFontFamilySelect) converseAssistantFontFamilySelect.value = settings.assistant.fontFamily;
        if (converseAssistantFontSizeInput) converseAssistantFontSizeInput.value = String(settings.assistant.fontSize);
        if (converseAssistantAnimationSelect) converseAssistantAnimationSelect.value = settings.assistant.animation;
        if (converseUserFontFamilySelect) converseUserFontFamilySelect.value = settings.user.fontFamily;
        if (converseUserFontSizeInput) converseUserFontSizeInput.value = String(settings.user.fontSize);
        if (converseUserAnimationSelect) converseUserAnimationSelect.value = settings.user.animation;
        applyConverseSettings(settings);
    }

    function saveConverseSettings() {
        const settings = sanitizeConverseSettings({
            intro: {
                enabled: !!converseIntroEnabledInput?.checked,
                animation: converseIntroAnimationSelect?.value || '',
                title: converseIntroTitleInput?.value || '',
                titleFontFamily: converseIntroTitleFontFamilySelect?.value || '',
                titleFontSize: converseIntroTitleFontSizeInput?.value || '',
                message: converseIntroMessageInput?.value || '',
                messageFontFamily: converseIntroMessageFontFamilySelect?.value || '',
                messageFontSize: converseIntroMessageFontSizeInput?.value || '',
                buttonText: converseIntroButtonTextInput?.value || '',
                buttonFontFamily: converseIntroButtonFontFamilySelect?.value || '',
                buttonFontSize: converseIntroButtonFontSizeInput?.value || ''
            },
            assistant: {
                fontFamily: converseAssistantFontFamilySelect?.value || '',
                fontSize: converseAssistantFontSizeInput?.value || '',
                animation: converseAssistantAnimationSelect?.value || ''
            },
            user: {
                fontFamily: converseUserFontFamilySelect?.value || '',
                fontSize: converseUserFontSizeInput?.value || '',
                animation: converseUserAnimationSelect?.value || ''
            }
        });
        safeStorageSet(STORAGE_KEYS.converseIntroEnabled, String(settings.intro.enabled));
        safeStorageSet(STORAGE_KEYS.converseIntroAnimation, settings.intro.animation);
        safeStorageSet(STORAGE_KEYS.converseIntroTitle, settings.intro.title);
        safeStorageSet(STORAGE_KEYS.converseIntroTitleFontFamily, settings.intro.titleFontFamily);
        safeStorageSet(STORAGE_KEYS.converseIntroTitleFontSize, String(settings.intro.titleFontSize));
        safeStorageSet(STORAGE_KEYS.converseIntroMessage, settings.intro.message);
        safeStorageSet(STORAGE_KEYS.converseIntroMessageFontFamily, settings.intro.messageFontFamily);
        safeStorageSet(STORAGE_KEYS.converseIntroMessageFontSize, String(settings.intro.messageFontSize));
        safeStorageSet(STORAGE_KEYS.converseIntroButtonText, settings.intro.buttonText);
        safeStorageSet(STORAGE_KEYS.converseIntroButtonFontFamily, settings.intro.buttonFontFamily);
        safeStorageSet(STORAGE_KEYS.converseIntroButtonFontSize, String(settings.intro.buttonFontSize));
        safeStorageSet(STORAGE_KEYS.converseAssistantFontFamily, settings.assistant.fontFamily);
        safeStorageSet(STORAGE_KEYS.converseAssistantFontSize, String(settings.assistant.fontSize));
        safeStorageSet(STORAGE_KEYS.converseAssistantAnimation, settings.assistant.animation);
        safeStorageSet(STORAGE_KEYS.converseUserFontFamily, settings.user.fontFamily);
        safeStorageSet(STORAGE_KEYS.converseUserFontSize, String(settings.user.fontSize));
        safeStorageSet(STORAGE_KEYS.converseUserAnimation, settings.user.animation);
        applyConverseSettings(settings);
        updateEmbedCode();
        flashButton(saveConverseSettingsBtn, 'Applied');
        if (converseStatus) converseStatus.textContent = 'Converse and intro typography applied to the builder preview.';
    }

    function previewConverseSettings() {
        const settings = sanitizeConverseSettings({
            intro: {
                enabled: !!converseIntroEnabledInput?.checked,
                animation: converseIntroAnimationSelect?.value || '',
                title: converseIntroTitleInput?.value || '',
                titleFontFamily: converseIntroTitleFontFamilySelect?.value || '',
                titleFontSize: converseIntroTitleFontSizeInput?.value || '',
                message: converseIntroMessageInput?.value || '',
                messageFontFamily: converseIntroMessageFontFamilySelect?.value || '',
                messageFontSize: converseIntroMessageFontSizeInput?.value || '',
                buttonText: converseIntroButtonTextInput?.value || '',
                buttonFontFamily: converseIntroButtonFontFamilySelect?.value || '',
                buttonFontSize: converseIntroButtonFontSizeInput?.value || ''
            },
            assistant: {
                fontFamily: converseAssistantFontFamilySelect?.value || '',
                fontSize: converseAssistantFontSizeInput?.value || '',
                animation: converseAssistantAnimationSelect?.value || ''
            },
            user: {
                fontFamily: converseUserFontFamilySelect?.value || '',
                fontSize: converseUserFontSizeInput?.value || '',
                animation: converseUserAnimationSelect?.value || ''
            }
        });
        applyConverseSettings(settings);
    }

    function openConverseDrawer(show) {
        if (!converseDrawer || !converseOverlay) return;
        converseDrawer.classList.toggle('open', show);
        converseOverlay.classList.toggle('show', show);
        converseDrawer.setAttribute('aria-hidden', show ? 'false' : 'true');
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
            return assistantAvatarUrlInput?.value || avatarSettings.assistant?.url || '';
        }
        if (target === 'user') {
            return userAvatarUrlInput?.value || avatarSettings.user?.url || '';
        }
        if (target === 'launcher') {
            return widgetIconInput?.value || safeStorageGet(STORAGE_KEYS.launcherIcon, '') || '';
        }
        return logoUrlInput?.value || safeStorageGet(STORAGE_KEYS.logoUrl, '') || '';
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
            url: typeof candidate?.url === 'string' ? candidate.url.trim() : defaults.url,
            size: Number.isFinite(size) ? Math.min(96, Math.max(18, size)) : defaults.size,
            animation: ['none', 'pulse', 'float', 'spin'].includes(candidate?.animation) ? candidate.animation : defaults.animation
        };
    }

    function getStoredBrandLogoSettings() {
        const storedUrl = safeStorageGet(STORAGE_KEYS.logoUrl, '__missing__');
        return sanitizeLogoSettings({
            url: storedUrl === '__missing__' ? getDefaultLogoSettings().url : storedUrl,
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
        const resolvedUrl = resolveAvatarUrl(settings.url) || '';
        if (appLogoImg) {
            appLogoImg.src = resolvedUrl;
            appLogoImg.hidden = !resolvedUrl;
            applyLogoAnimationClass(appLogoImg, settings.animation);
        }
        if (brandLogoImg) {
            brandLogoImg.src = resolvedUrl;
            brandLogoImg.hidden = !resolvedUrl;
            applyLogoAnimationClass(brandLogoImg, settings.animation);
        }
        if (logoPreviewImg) {
            logoPreviewImg.src = resolvedUrl;
            logoPreviewImg.hidden = !resolvedUrl;
            applyLogoAnimationClass(logoPreviewImg, settings.animation);
        }
        if (brandLogoWrap) {
            brandLogoWrap.style.width = `${settings.size}px`;
            brandLogoWrap.style.height = `${settings.size}px`;
            brandLogoWrap.hidden = !resolvedUrl;
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
                String(widgetLabelInput?.value ?? safeStorageGet(STORAGE_KEYS.launcherLabel, '') ?? '').trim(),
                String(widgetSubtextInput?.value ?? safeStorageGet(STORAGE_KEYS.launcherSubtext, '') ?? '').trim(),
                widgetSubtextDisplaySelect?.value || safeStorageGet(STORAGE_KEYS.launcherSubtextDisplay, 'hover') || 'hover',
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
            converse: sanitizeConverseSettings({
                intro: {
                    enabled: converseIntroEnabledInput?.checked ?? (safeStorageGet(STORAGE_KEYS.converseIntroEnabled, String(getDefaultConverseSettings().intro.enabled)) === 'true'),
                    animation: converseIntroAnimationSelect?.value || safeStorageGet(STORAGE_KEYS.converseIntroAnimation, getDefaultConverseSettings().intro.animation),
                    title: converseIntroTitleInput?.value || safeStorageGet(STORAGE_KEYS.converseIntroTitle, getDefaultConverseSettings().intro.title),
                    titleFontFamily: converseIntroTitleFontFamilySelect?.value || safeStorageGet(STORAGE_KEYS.converseIntroTitleFontFamily, getDefaultConverseSettings().intro.titleFontFamily),
                    titleFontSize: converseIntroTitleFontSizeInput?.value || safeStorageGet(STORAGE_KEYS.converseIntroTitleFontSize, String(getDefaultConverseSettings().intro.titleFontSize)),
                    message: converseIntroMessageInput?.value || safeStorageGet(STORAGE_KEYS.converseIntroMessage, getDefaultConverseSettings().intro.message),
                    messageFontFamily: converseIntroMessageFontFamilySelect?.value || safeStorageGet(STORAGE_KEYS.converseIntroMessageFontFamily, getDefaultConverseSettings().intro.messageFontFamily),
                    messageFontSize: converseIntroMessageFontSizeInput?.value || safeStorageGet(STORAGE_KEYS.converseIntroMessageFontSize, String(getDefaultConverseSettings().intro.messageFontSize)),
                    buttonText: converseIntroButtonTextInput?.value || safeStorageGet(STORAGE_KEYS.converseIntroButtonText, getDefaultConverseSettings().intro.buttonText),
                    buttonFontFamily: converseIntroButtonFontFamilySelect?.value || safeStorageGet(STORAGE_KEYS.converseIntroButtonFontFamily, getDefaultConverseSettings().intro.buttonFontFamily),
                    buttonFontSize: converseIntroButtonFontSizeInput?.value || safeStorageGet(STORAGE_KEYS.converseIntroButtonFontSize, String(getDefaultConverseSettings().intro.buttonFontSize))
                },
                assistant: {
                    fontFamily: converseAssistantFontFamilySelect?.value || safeStorageGet(STORAGE_KEYS.converseAssistantFontFamily, getDefaultConverseSettings().assistant.fontFamily),
                    fontSize: converseAssistantFontSizeInput?.value || safeStorageGet(STORAGE_KEYS.converseAssistantFontSize, String(getDefaultConverseSettings().assistant.fontSize)),
                    animation: converseAssistantAnimationSelect?.value || safeStorageGet(STORAGE_KEYS.converseAssistantAnimation, getDefaultConverseSettings().assistant.animation)
                },
                user: {
                    fontFamily: converseUserFontFamilySelect?.value || safeStorageGet(STORAGE_KEYS.converseUserFontFamily, getDefaultConverseSettings().user.fontFamily),
                    fontSize: converseUserFontSizeInput?.value || safeStorageGet(STORAGE_KEYS.converseUserFontSize, String(getDefaultConverseSettings().user.fontSize)),
                    animation: converseUserAnimationSelect?.value || safeStorageGet(STORAGE_KEYS.converseUserAnimation, getDefaultConverseSettings().user.animation)
                }
            }),
            theme: sanitizeThemeSettings({
                background: themeBackgroundInput?.value || safeStorageGet(STORAGE_KEYS.themeBackground, getDefaultThemeSettings().background),
                style: Array.from(themeStyleButtons).find(btn => btn.classList.contains('active'))?.dataset.themeStyle || safeStorageGet(STORAGE_KEYS.themeStyle, getDefaultThemeSettings().style)
            }),
            header: sanitizeHeaderSettings({
                title: headerTitleInput?.value || safeStorageGet(STORAGE_KEYS.headerTitle, getDefaultHeaderSettings().title),
                subtitle: headerSubtitleInput?.value || safeStorageGet(STORAGE_KEYS.headerSubtitle, getDefaultHeaderSettings().subtitle),
                showStatusDot: headerShowStatusDotInput?.checked ?? (safeStorageGet(STORAGE_KEYS.headerShowStatusDot, 'true') !== 'false'),
                showSubtitle: headerShowSubtitleInput?.checked ?? (safeStorageGet(STORAGE_KEYS.headerShowSubtitle, 'false') === 'true'),
                showHome: !!headerShowHomeInput?.checked,
                showEmail: !!headerShowEmailInput?.checked,
                showDownload: !!headerShowDownloadInput?.checked,
                showRestart: !!headerShowRestartInput?.checked,
                homeLinkUrl: headerHomeLinkUrlInput?.value || safeStorageGet(STORAGE_KEYS.headerHomeLinkUrl, getDefaultHeaderSettings().homeLinkUrl),
                homeIconUrl: headerHomeIconUrlInput?.value || safeStorageGet(STORAGE_KEYS.headerHomeIconUrl, ''),
                emailIconUrl: headerEmailIconUrlInput?.value || safeStorageGet(STORAGE_KEYS.headerEmailIconUrl, ''),
                downloadIconUrl: headerDownloadIconUrlInput?.value || safeStorageGet(STORAGE_KEYS.headerDownloadIconUrl, ''),
                restartIconUrl: headerRestartIconUrlInput?.value || safeStorageGet(STORAGE_KEYS.headerRestartIconUrl, '')
            }),
            video: sanitizeVideoSettings({
                enabled: videoEnabledInput?.checked ?? (safeStorageGet(STORAGE_KEYS.videoEnabled, 'true') !== 'false'),
                url: videoUrlInput?.value || safeStorageGet(STORAGE_KEYS.videoUrl, getDefaultVideoSettings().url)
            }),
            logo: getStoredBrandLogoSettings(),
            widget: {
                label: (widgetLabelInput?.value || safeStorageGet(STORAGE_KEYS.launcherLabel, 'Chat with Cherry') || 'Chat with Cherry').trim(),
                subtext: (widgetSubtextInput?.value || safeStorageGet(STORAGE_KEYS.launcherSubtext, 'We typically reply in minutes') || 'We typically reply in minutes').trim(),
                subtextDisplay: widgetSubtextDisplaySelect?.value || safeStorageGet(STORAGE_KEYS.launcherSubtextDisplay, 'hover') || 'hover',
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

    function getFreshProjectSnapshot() {
        return {
            app: 'Cherry Builder',
            version: 1,
            savedAt: new Date().toISOString(),
            questionnaire: {
                steps: getDefaultSteps(),
                settings: getDefaultQuestionnaireSettings()
            },
            avatars: {
                assistant: getDefaultAvatarSettings('assistant'),
                user: getDefaultAvatarSettings('user')
            },
            footer: getDefaultFooterSettings(),
            converse: getDefaultConverseSettings(),
            theme: getDefaultThemeSettings(),
            header: getDefaultHeaderSettings(),
            video: getDefaultVideoSettings(),
            logo: getDefaultLogoSettings(),
            widget: {
                label: 'Chat with Cherry',
                subtext: 'We typically reply in minutes',
                subtextDisplay: 'hover',
                icon: '',
                iconSize: '26',
                shape: 'circle',
                animation: 'none',
                is3d: false
            },
            webhook: {
                prod: (webhookProdInput?.value || safeStorageGet(STORAGE_KEYS.webhookProd, WEBHOOK_URL_PROD) || WEBHOOK_URL_PROD).trim(),
                test: (webhookTestInput?.value || safeStorageGet(STORAGE_KEYS.webhookTest, WEBHOOK_URL_TEST) || WEBHOOK_URL_TEST).trim(),
                chat: (webhookChatInput?.value || safeStorageGet(STORAGE_KEYS.webhookChat, '') || '').trim(),
                active: 'prod'
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

    function getBlankProjectSteps() {
        return [
            {
                field: '',
                question: '',
                placeholder: '',
                type: 'text',
                options: []
            }
        ];
    }

    function resetConversationState(showIntro = true) {
        currentStep = 0;
        hasStartedConversation = false;
        isAskingForEmail = false;
        formData.sessionId = generateSessionId();
        formData.name = '';
        formData.firstName = '';
        formData.lastName = '';
        formData.email = '';
        formData.inquiry = '';
        if (flowContainer) {
            flowContainer.innerHTML = '';
        }
        if (showIntro) {
            showIntroScreen();
        }
    }

    function createBlankProjectSnapshot() {
        return {
            questionnaire: {
                steps: getBlankProjectSteps(),
                settings: getDefaultQuestionnaireSettings()
            },
            avatars: {
                assistant: sanitizeAvatarSettings('assistant', { url: '' }),
                user: sanitizeAvatarSettings('user', { url: '', hideReply: false })
            },
            footer: sanitizeFooterSettings({
                text: '',
                url: '',
                fontFamily: getDefaultFooterSettings().fontFamily,
                fontSize: getDefaultFooterSettings().fontSize,
                animation: getDefaultFooterSettings().animation,
                background: getDefaultFooterSettings().background
            }),
            converse: getDefaultConverseSettings(),
            theme: sanitizeThemeSettings({
                background: getDefaultThemeSettings().background,
                style: getDefaultThemeSettings().style,
                pageTitle: '',
                faviconUrl: ''
            }),
            header: sanitizeHeaderSettings({
                title: '',
                subtitle: '',
                showStatusDot: false,
                showSubtitle: false,
                showHome: false,
                showEmail: false,
                showDownload: false,
                showRestart: false,
                homeLinkUrl: '',
                homeIconUrl: '',
                emailIconUrl: '',
                downloadIconUrl: '',
                restartIconUrl: ''
            }),
            video: sanitizeVideoSettings({
                enabled: false,
                url: ''
            }),
            logo: sanitizeLogoSettings({
                url: '',
                size: getDefaultLogoSettings().size,
                animation: getDefaultLogoSettings().animation
            }),
            widget: {
                label: '',
                subtext: '',
                subtextDisplay: 'hidden',
                icon: '',
                iconSize: '26',
                shape: 'circle',
                animation: 'none',
                is3d: false
            },
            webhook: {
                prod: '',
                test: '',
                chat: '',
                active: 'prod'
            },
            github: {
                repo: '',
                branch: '',
                token: ''
            }
        };
    }

    function persistBlankProjectStorage(snapshot) {
        safeStorageSet(STORAGE_KEYS.questionnaireSteps, JSON.stringify(snapshot.questionnaire.steps));
        safeStorageSet(STORAGE_KEYS.questionFontFamily, snapshot.questionnaire.settings.fontFamily);
        safeStorageSet(STORAGE_KEYS.questionFontSize, String(snapshot.questionnaire.settings.fontSize));
        safeStorageSet(STORAGE_KEYS.questionAnimation, snapshot.questionnaire.settings.animation);
        safeStorageSet(STORAGE_KEYS.questionEmoji, snapshot.questionnaire.settings.emoji);
        safeStorageSet(STORAGE_KEYS.assistantAvatar, JSON.stringify(snapshot.avatars.assistant));
        safeStorageSet(STORAGE_KEYS.userAvatar, JSON.stringify(snapshot.avatars.user));
        safeStorageSet(STORAGE_KEYS.footerBrandText, snapshot.footer.text);
        safeStorageSet(STORAGE_KEYS.footerBrandUrl, snapshot.footer.url);
        safeStorageSet(STORAGE_KEYS.footerFontFamily, snapshot.footer.fontFamily);
        safeStorageSet(STORAGE_KEYS.footerFontSize, String(snapshot.footer.fontSize));
        safeStorageSet(STORAGE_KEYS.footerAnimation, snapshot.footer.animation);
        safeStorageSet(STORAGE_KEYS.footerBackground, snapshot.footer.background);
        safeStorageSet(STORAGE_KEYS.converseIntroEnabled, String(snapshot.converse.intro.enabled));
        safeStorageSet(STORAGE_KEYS.converseIntroAnimation, snapshot.converse.intro.animation);
        safeStorageSet(STORAGE_KEYS.converseIntroTitle, snapshot.converse.intro.title);
        safeStorageSet(STORAGE_KEYS.converseIntroTitleFontFamily, snapshot.converse.intro.titleFontFamily);
        safeStorageSet(STORAGE_KEYS.converseIntroTitleFontSize, String(snapshot.converse.intro.titleFontSize));
        safeStorageSet(STORAGE_KEYS.converseIntroMessage, snapshot.converse.intro.message);
        safeStorageSet(STORAGE_KEYS.converseIntroMessageFontFamily, snapshot.converse.intro.messageFontFamily);
        safeStorageSet(STORAGE_KEYS.converseIntroMessageFontSize, String(snapshot.converse.intro.messageFontSize));
        safeStorageSet(STORAGE_KEYS.converseIntroButtonText, snapshot.converse.intro.buttonText);
        safeStorageSet(STORAGE_KEYS.converseIntroButtonFontFamily, snapshot.converse.intro.buttonFontFamily);
        safeStorageSet(STORAGE_KEYS.converseIntroButtonFontSize, String(snapshot.converse.intro.buttonFontSize));
        safeStorageSet(STORAGE_KEYS.converseAssistantFontFamily, snapshot.converse.assistant.fontFamily);
        safeStorageSet(STORAGE_KEYS.converseAssistantFontSize, String(snapshot.converse.assistant.fontSize));
        safeStorageSet(STORAGE_KEYS.converseAssistantAnimation, snapshot.converse.assistant.animation);
        safeStorageSet(STORAGE_KEYS.converseUserFontFamily, snapshot.converse.user.fontFamily);
        safeStorageSet(STORAGE_KEYS.converseUserFontSize, String(snapshot.converse.user.fontSize));
        safeStorageSet(STORAGE_KEYS.converseUserAnimation, snapshot.converse.user.animation);
        safeStorageSet(STORAGE_KEYS.themeBackground, snapshot.theme.background);
        safeStorageSet(STORAGE_KEYS.themeStyle, snapshot.theme.style);
        safeStorageSet(STORAGE_KEYS.themePageTitle, snapshot.theme.pageTitle);
        safeStorageSet(STORAGE_KEYS.themeFaviconUrl, snapshot.theme.faviconUrl);
        safeStorageSet(STORAGE_KEYS.headerTitle, snapshot.header.title);
        safeStorageSet(STORAGE_KEYS.headerSubtitle, snapshot.header.subtitle);
        safeStorageSet(STORAGE_KEYS.headerShowStatusDot, String(snapshot.header.showStatusDot));
        safeStorageSet(STORAGE_KEYS.headerShowSubtitle, String(snapshot.header.showSubtitle));
        safeStorageSet(STORAGE_KEYS.headerShowHome, String(snapshot.header.showHome));
        safeStorageSet(STORAGE_KEYS.headerShowEmail, String(snapshot.header.showEmail));
        safeStorageSet(STORAGE_KEYS.headerShowDownload, String(snapshot.header.showDownload));
        safeStorageSet(STORAGE_KEYS.headerShowRestart, String(snapshot.header.showRestart));
        safeStorageSet(STORAGE_KEYS.headerHomeLinkUrl, snapshot.header.homeLinkUrl);
        safeStorageSet(STORAGE_KEYS.headerHomeIconUrl, snapshot.header.homeIconUrl);
        safeStorageSet(STORAGE_KEYS.headerEmailIconUrl, snapshot.header.emailIconUrl);
        safeStorageSet(STORAGE_KEYS.headerDownloadIconUrl, snapshot.header.downloadIconUrl);
        safeStorageSet(STORAGE_KEYS.headerRestartIconUrl, snapshot.header.restartIconUrl);
        safeStorageSet(STORAGE_KEYS.videoEnabled, String(snapshot.video.enabled));
        safeStorageSet(STORAGE_KEYS.videoUrl, snapshot.video.url);
        safeStorageSet(STORAGE_KEYS.logoUrl, snapshot.logo.url);
        safeStorageSet(STORAGE_KEYS.logoSize, String(snapshot.logo.size));
        safeStorageSet(STORAGE_KEYS.logoAnimation, snapshot.logo.animation);
        safeStorageSet(STORAGE_KEYS.logoTarget, 'brand');
        safeStorageSet(STORAGE_KEYS.logoPreset, '');
        safeStorageSet(STORAGE_KEYS.launcherLabel, snapshot.widget.label);
        safeStorageSet(STORAGE_KEYS.launcherSubtext, snapshot.widget.subtext);
        safeStorageSet(STORAGE_KEYS.launcherSubtextDisplay, snapshot.widget.subtextDisplay);
        safeStorageSet(STORAGE_KEYS.launcherIcon, snapshot.widget.icon);
        safeStorageSet(STORAGE_KEYS.launcherIconSize, snapshot.widget.iconSize);
        safeStorageSet(STORAGE_KEYS.launcherShape, snapshot.widget.shape);
        safeStorageSet(STORAGE_KEYS.launcherAnim, snapshot.widget.animation);
        safeStorageSet(STORAGE_KEYS.launcher3d, String(snapshot.widget.is3d));
        safeStorageSet(STORAGE_KEYS.webhookProd, snapshot.webhook.prod);
        safeStorageSet(STORAGE_KEYS.webhookTest, snapshot.webhook.test);
        safeStorageSet(STORAGE_KEYS.webhookChat, snapshot.webhook.chat);
        safeStorageSet(STORAGE_KEYS.webhookActive, snapshot.webhook.active);
        safeStorageSet(STORAGE_KEYS.repo, snapshot.github.repo);
        safeStorageSet(STORAGE_KEYS.branch, snapshot.github.branch);
        safeStorageSet(STORAGE_KEYS.token, snapshot.github.token);
        safeStorageRemove(STORAGE_KEYS.projectSnapshot);
    }

    function createNewProject() {
        try {
            const defaultSnapshot = getFreshProjectSnapshot();
            loadProjectSnapshot(defaultSnapshot);
            safeStorageRemove(STORAGE_KEYS.projectSnapshot);
            if (newProjectBtn) flashButton(newProjectBtn, 'New');
            showDeployStatus('New chatbot reset to the builder default settings.', 100, 'success');
        } catch (error) {
            showDeployStatus(`Could not start a new chatbot: ${error.message}`, 100, 'error');
        }
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

        const converseSettings = sanitizeConverseSettings(snapshot?.converse || {});
        if (converseIntroEnabledInput) converseIntroEnabledInput.checked = converseSettings.intro.enabled;
        if (converseIntroAnimationSelect) converseIntroAnimationSelect.value = converseSettings.intro.animation;
        if (converseIntroTitleInput) converseIntroTitleInput.value = converseSettings.intro.title;
        if (converseIntroTitleFontFamilySelect) converseIntroTitleFontFamilySelect.value = converseSettings.intro.titleFontFamily;
        if (converseIntroTitleFontSizeInput) converseIntroTitleFontSizeInput.value = String(converseSettings.intro.titleFontSize);
        if (converseIntroMessageInput) converseIntroMessageInput.value = converseSettings.intro.message;
        if (converseIntroMessageFontFamilySelect) converseIntroMessageFontFamilySelect.value = converseSettings.intro.messageFontFamily;
        if (converseIntroMessageFontSizeInput) converseIntroMessageFontSizeInput.value = String(converseSettings.intro.messageFontSize);
        if (converseIntroButtonTextInput) converseIntroButtonTextInput.value = converseSettings.intro.buttonText;
        if (converseIntroButtonFontFamilySelect) converseIntroButtonFontFamilySelect.value = converseSettings.intro.buttonFontFamily;
        if (converseIntroButtonFontSizeInput) converseIntroButtonFontSizeInput.value = String(converseSettings.intro.buttonFontSize);
        if (converseAssistantFontFamilySelect) converseAssistantFontFamilySelect.value = converseSettings.assistant.fontFamily;
        if (converseAssistantFontSizeInput) converseAssistantFontSizeInput.value = String(converseSettings.assistant.fontSize);
        if (converseAssistantAnimationSelect) converseAssistantAnimationSelect.value = converseSettings.assistant.animation;
        if (converseUserFontFamilySelect) converseUserFontFamilySelect.value = converseSettings.user.fontFamily;
        if (converseUserFontSizeInput) converseUserFontSizeInput.value = String(converseSettings.user.fontSize);
        if (converseUserAnimationSelect) converseUserAnimationSelect.value = converseSettings.user.animation;
        applyConverseSettings(converseSettings);

        const nextThemeSettings = sanitizeThemeSettings(snapshot?.theme || {});
        writeThemeFormSettings(nextThemeSettings);
        if (themeBackgroundInput && themeStyleButtons.length > 0) {
            saveThemeSettings();
        } else {
            applyThemeSettings(nextThemeSettings);
        }

        const headerSettings = sanitizeHeaderSettings(snapshot?.header || {});
        if (headerTitleInput) headerTitleInput.value = headerSettings.title;
        if (headerSubtitleInput) headerSubtitleInput.value = headerSettings.subtitle;
        if (headerShowStatusDotInput) headerShowStatusDotInput.checked = headerSettings.showStatusDot;
        if (headerShowSubtitleInput) headerShowSubtitleInput.checked = headerSettings.showSubtitle;
        if (headerShowHomeInput) headerShowHomeInput.checked = headerSettings.showHome !== false;
        if (headerShowEmailInput) headerShowEmailInput.checked = headerSettings.showEmail !== false;
        if (headerShowDownloadInput) headerShowDownloadInput.checked = headerSettings.showDownload !== false;
        if (headerShowRestartInput) headerShowRestartInput.checked = headerSettings.showRestart !== false;
        if (headerHomeLinkUrlInput) headerHomeLinkUrlInput.value = headerSettings.homeLinkUrl || getDefaultHeaderSettings().homeLinkUrl;
        if (headerHomeIconUrlInput) headerHomeIconUrlInput.value = headerSettings.homeIconUrl || '';
        if (headerEmailIconUrlInput) headerEmailIconUrlInput.value = headerSettings.emailIconUrl || '';
        if (headerDownloadIconUrlInput) headerDownloadIconUrlInput.value = headerSettings.downloadIconUrl || '';
        if (headerRestartIconUrlInput) headerRestartIconUrlInput.value = headerSettings.restartIconUrl || '';
        if (headerTitleInput && headerSubtitleInput && headerShowStatusDotInput && headerShowSubtitleInput && headerShowHomeInput && headerShowEmailInput && headerShowDownloadInput && headerShowRestartInput) {
            saveHeaderSettings();
        } else {
            applyHeaderSettings(headerSettings);
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
        if (widgetSubtextDisplaySelect) widgetSubtextDisplaySelect.value = widgetSettings.subtextDisplay || 'hover';
        if (widgetIconInput) widgetIconInput.value = widgetSettings.icon || '';
        if (widgetIconSizeInput) widgetIconSizeInput.value = String(widgetSettings.iconSize || '26');
        if (widgetShapeSelect) widgetShapeSelect.value = widgetSettings.shape || 'circle';
        if (widgetAnimSelect) widgetAnimSelect.value = widgetSettings.animation || 'none';
        if (widget3dCheckbox) widget3dCheckbox.checked = !!widgetSettings.is3d;
        if (widgetLabelInput && widgetSubtextInput && widgetSubtextDisplaySelect && widgetIconInput && widgetIconSizeInput && widgetShapeSelect && widgetAnimSelect && widget3dCheckbox) {
            saveWidgetSettings();
        } else {
            applyLauncher(
                widgetSettings.label || 'Chat with Cherry',
                widgetSettings.subtext || 'We typically reply in minutes',
                widgetSettings.subtextDisplay || 'hover',
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
        const activeWebhookMode = webhookSettings.active || 'prod';
        if (webhookProdInput && webhookTestInput && webhookChatInput) {
            setActiveWebhook(activeWebhookMode);
            saveWebhookSettings();
        } else {
            const prod = (webhookSettings.prod || WEBHOOK_URL_PROD).trim();
            const test = (webhookSettings.test || WEBHOOK_URL_TEST).trim();
            const chat = (webhookSettings.chat || '').trim();
            switch (activeWebhookMode) {
                case 'test':
                    currentWebhookUrl = test || WEBHOOK_URL_TEST;
                    break;
                case 'chat':
                    currentWebhookUrl = chat || prod || WEBHOOK_URL_PROD;
                    break;
                default:
                    currentWebhookUrl = prod || WEBHOOK_URL_PROD;
                    break;
            }
            updateWebhookDebug(activeWebhookMode, currentWebhookUrl);
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

        resetConversationState(true);
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
    hydrateConverseSettings();
    hydrateThemeSettings();
    hydrateHeaderSettings();
    hydrateVideoSettings();
    hydrateLogoSettings();
    syncQuestionTypeUi(questionTypeSelect?.value || 'text');
    updateEmbedDefaults();
    updateEmbedCode();
    hydrateGithubSettings();
    hydrateWebhookSettings();
    hydrateWidgetSettings();
    const urlEmbedSnapshot = getUrlEmbedSnapshot();
    if (urlEmbedSnapshot) {
        try {
            loadProjectSnapshot(urlEmbedSnapshot);
        } catch (error) {
            console.warn('Cherry URL embed config could not be applied.', error);
            showIntroScreen();
        }
    } else {
        showIntroScreen();
    }
    resetTelemetryStages();
    logTelemetry('Monitor ready. Awaiting webhook activity.');
    renderTelemetry();



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

    function isSplitNameStep() {
        return currentStep === 0 && steps[currentStep]?.field === 'name';
    }

    function setPrimaryInputMode(mode) {
        const showInlineNameForm = mode === 'split-name' || mode === 'input-bars';
        const showMultipleChoice = mode === 'multiple-choice';
        if (inputArea) {
            inputArea.hidden = showMultipleChoice;
            inputArea.style.display = showMultipleChoice ? 'none' : '';
            inputArea.setAttribute('aria-hidden', showMultipleChoice ? 'true' : 'false');
        }
        if (inputWrapper) {
            inputWrapper.hidden = showInlineNameForm;
            inputWrapper.style.display = showInlineNameForm ? 'none' : '';
        }
        if (sendBtn) {
            sendBtn.hidden = showMultipleChoice;
            sendBtn.style.display = showMultipleChoice ? 'none' : '';
        }
        if (inputArea) inputArea.classList.toggle('input-area--inline-mode', showInlineNameForm);
        if (sendBtn) sendBtn.textContent = showInlineNameForm ? 'Continue' : 'Submit';
    }

    function renderSplitNameFields(stepDiv) {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'split-name-fields';
        fieldGroup.innerHTML = `
            <div class="split-name-fields__grid">
                <label class="split-name-fields__item">
                    <span>First name</span>
                    <input type="text" class="split-name-input" data-name-part="first" placeholder="First name" autocomplete="given-name">
                </label>
                <label class="split-name-fields__item">
                    <span>Last name</span>
                    <input type="text" class="split-name-input" data-name-part="last" placeholder="Last name" autocomplete="family-name">
                </label>
            </div>
        `;
        stepDiv.appendChild(fieldGroup);

        const firstNameInput = fieldGroup.querySelector('[data-name-part="first"]');
        const lastNameInput = fieldGroup.querySelector('[data-name-part="last"]');
        if (firstNameInput) firstNameInput.value = formData.firstName || '';
        if (lastNameInput) lastNameInput.value = formData.lastName || '';

        fieldGroup.querySelectorAll('.split-name-input').forEach(input => {
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    handleNext();
                }
            });
            input.addEventListener('input', () => {
                input.classList.remove('split-name-input--error');
            });
        });

        firstNameInput?.focus();
    }

    function getInputBarsPlaceholders(step = steps[currentStep]) {
        return Array.isArray(step?.options)
            ? step.options.map(option => String(option || '').trim()).filter(Boolean)
            : [];
    }

    function isInputBarsStep(step = steps[currentStep]) {
        return step?.type === 'input_bars' && getInputBarsPlaceholders(step).length > 0;
    }

    function renderInputBarsFields(stepDiv, stepData) {
        const placeholders = getInputBarsPlaceholders(stepData);
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'split-name-fields';
        fieldGroup.innerHTML = `
            <div class="split-name-fields__grid">
                ${placeholders.map((placeholder, index) => `
                    <label class="split-name-fields__item${placeholders.length % 2 === 1 && index === placeholders.length - 1 ? ' split-name-fields__item--full' : ''}">
                        <span>${escapeHtml(placeholder)}</span>
                        <input
                            type="text"
                            class="split-name-input"
                            data-input-bar-index="${index}"
                            placeholder="${escapeHtml(placeholder)}"
                            autocomplete="off">
                    </label>
                `).join('')}
            </div>
        `;
        stepDiv.appendChild(fieldGroup);

        fieldGroup.querySelectorAll('.split-name-input').forEach(input => {
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    handleNext();
                }
            });
            input.addEventListener('input', () => {
                input.classList.remove('split-name-input--error');
            });
        });

        fieldGroup.querySelector('.split-name-input')?.focus();
    }

    function readSplitNameStepValue() {
        const activeStep = flowContainer.querySelector('.message-wrapper:last-child .current-step');
        const firstNameInput = activeStep?.querySelector('[data-name-part="first"]');
        const lastNameInput = activeStep?.querySelector('[data-name-part="last"]');
        const firstName = firstNameInput?.value.trim() || '';
        const lastName = lastNameInput?.value.trim() || '';
        const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();

        [firstNameInput, lastNameInput].forEach(input => {
            if (!input) return;
            const isBlank = !input.value.trim();
            input.classList.toggle('split-name-input--error', isBlank);
        });

        if (!firstName || !lastName) {
            return null;
        }

        return { firstName, lastName, fullName };
    }

    function readInputBarsStepValue() {
        const activeStep = flowContainer.querySelector('.message-wrapper:last-child .current-step');
        const placeholders = getInputBarsPlaceholders();
        const inputs = Array.from(activeStep?.querySelectorAll('[data-input-bar-index]') || []);
        const values = [];
        let hasError = false;

        inputs.forEach((input, index) => {
            const value = input.value.trim();
            input.classList.toggle('split-name-input--error', !value);
            if (!value) {
                hasError = true;
            }
            values.push({
                placeholder: placeholders[index] || `Field ${index + 1}`,
                value
            });
        });

        if (hasError || values.length === 0) {
            return null;
        }

        return {
            fields: values,
            combined: values.map(item => `${item.placeholder}: ${item.value}`).join(' | ')
        };
    }

    function extractFirstNameFromFields(fields = []) {
        const firstNameField = fields.find((item) => /first\s*name/i.test(String(item?.placeholder || '')));
        if (firstNameField?.value) {
            return String(firstNameField.value).trim();
        }
        const nameField = fields.find((item) => /^name$/i.test(String(item?.placeholder || '').trim()));
        if (nameField?.value) {
            return String(nameField.value).trim().split(/\s+/)[0] || '';
        }
        return '';
    }

    function isMultipleChoiceStep(step = steps[currentStep]) {
        return step?.type === 'multiple_choice' && Array.isArray(step?.options) && step.options.length > 0;
    }

    function renderMultipleChoiceButtons(stepDiv, stepData) {
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'choice-button-group';

        stepData.options.forEach(option => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'choice-button';
            button.textContent = option;
            button.addEventListener('click', () => {
                buttonGroup.querySelectorAll('.choice-button').forEach(item => {
                    item.disabled = true;
                    item.classList.remove('choice-button--selected');
                });
                button.classList.add('choice-button--selected');
                processStepAnswer(option);
            });
            buttonGroup.appendChild(button);
        });

        stepDiv.appendChild(buttonGroup);
    }

    function processStepAnswer(text, splitNameValues = null, inputBarsValues = null) {
        if (!text) return;

        addToHistory(text);

        if (isAskingForEmail) {
            formData.email = text;
            isAskingForEmail = false;
            archiveCurrentStep();
            formData.inquiry = `[User provided email: ${text}]`;
            userInput.value = '';
            scrollToBottom();
            submitForm();
            return;
        }

        if (currentStep < steps.length) {
            const currentField = steps[currentStep].field;
            if (splitNameValues) {
                formData[currentField] = splitNameValues.fullName;
                formData.name = splitNameValues.fullName;
                formData.firstName = splitNameValues.firstName;
                formData.lastName = splitNameValues.lastName;
            } else if (inputBarsValues) {
                formData[currentField] = inputBarsValues.combined;
                formData[`${currentField}Fields`] = inputBarsValues.fields;
                const detectedFirstName = extractFirstNameFromFields(inputBarsValues.fields);
                if (detectedFirstName) {
                    formData.firstName = detectedFirstName;
                }
                const detectedNameField = inputBarsValues.fields.find((item) => /^name$/i.test(String(item?.placeholder || '').trim()));
                if (detectedNameField?.value) {
                    formData.name = String(detectedNameField.value).trim();
                }
            } else {
                formData[currentField] = text;
                if (/^name$/i.test(currentField)) {
                    formData.name = text;
                    formData.firstName = text.trim().split(/\s+/)[0] || '';
                } else if (/^first_?name$/i.test(currentField)) {
                    formData.firstName = text;
                }
            }

            currentStep++;
            userInput.value = '';
            renderStep();
            return;
        }

        archiveCurrentStep();
        formData.inquiry = text;
        userInput.value = '';
        scrollToBottom();
        submitForm();
    }

    function toggleConversationUi(showConversation) {
        if (introScreen) {
            introScreen.hidden = showConversation;
        }
        if (flowContainer) {
            flowContainer.hidden = !showConversation;
        }
        if (inputArea) {
            inputArea.hidden = !showConversation;
            inputArea.style.display = showConversation ? '' : 'none';
            inputArea.setAttribute('aria-hidden', showConversation ? 'false' : 'true');
        }
        document.body.classList.toggle('conversation-started', showConversation);
    }

    function showIntroScreen() {
        hasStartedConversation = false;
        const introEnabled = sanitizeConverseSettings({
            intro: {
                enabled: !!converseIntroEnabledInput?.checked
            }
        }).intro.enabled;
        if (!introEnabled) {
            startConversation();
            return;
        }
        toggleConversationUi(false);
        setPrimaryInputMode('default');
        if (introContinueBtn) {
            setTimeout(() => introContinueBtn.focus(), 30);
        }
    }

    function startConversation() {
        if (hasStartedConversation) return;
        hasStartedConversation = true;
        toggleConversationUi(true);
        flowContainer.innerHTML = '';
        currentStep = 0;
        isAskingForEmail = false;
        userInput.disabled = false;
        userInput.value = '';
        userInput.placeholder = "Type here...";
        logTelemetry(`Conversation started for session ${formData.sessionId}.`);
        setTelemetryStatus('idle', 'Conversation ready');
        updateTelemetryRaw('Waiting for webhook activity...', 'No transmissions yet.');
        resetTelemetryStages();
        renderStep();
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
                    queueMicrotask(() => focusPrimaryResponseInput());
                } else {
                    typeText(h2, qText, getQuestionTypingSpeed(), focusPrimaryResponseInput);
                }
            }

            if (isSplitNameStep()) {
                setPrimaryInputMode('split-name');
                renderSplitNameFields(stepDiv);
                userInput.value = '';
                userInput.disabled = true;
            } else if (isInputBarsStep(stepData)) {
                setPrimaryInputMode('input-bars');
                renderInputBarsFields(stepDiv, stepData);
                userInput.value = '';
                userInput.disabled = true;
            } else if (isMultipleChoiceStep(stepData)) {
                setPrimaryInputMode('multiple-choice');
                renderMultipleChoiceButtons(stepDiv, stepData);
                userInput.value = '';
                userInput.disabled = true;
            } else {
                setPrimaryInputMode('default');
                userInput.placeholder = stepData.placeholder;
                userInput.value = '';
                userInput.disabled = false;
            }
        } else {
            // Submission Step
            setPrimaryInputMode('default');
            submitForm();
        }

        scrollToBottom();
    }

    function buildQuestionText(stepData) {
        let qText = stepData.question;
        const fullName = String(formData.name || '').trim();
        const firstName = String(formData.firstName || '').trim() || (fullName ? fullName.split(/\s+/)[0] : '');

        // Accept a few common token variants, including accidental `)` closers.
        qText = qText.replace(/\{firstName[\}\)]/gi, firstName);
        qText = qText.replace(/\{name[\}\)]/gi, fullName);

        const emoji = (questionnaireSettings.emoji || '').trim();
        return emoji ? `<span class="question-emoji">${emoji}</span> ${qText}` : qText;
    }

    function getQuestionTypingSpeed() {
        return questionnaireSettings.animation === 'fast' ? 18 : 40;
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatBotReply(reply) {
        const normalized = String(reply || '').replace(/\r\n?/g, '\n').trim();
        if (!normalized) return '';

        const bulletReady = normalized
            .replace(/\s+(?=(Confirmation Code:|Status:|Registered At:|Event:|Email:|Phone:|Date:|Time:))/gi, '\n')
            .replace(/\s+(?=(A confirmation email\b))/i, '\n');

        const lines = bulletReady
            .split(/\n+/)
            .map(line => line.replace(/^[\p{Extended_Pictographic}\p{Emoji_Presentation}\p{Emoji}\s]+/gu, '').trim())
            .filter(Boolean);

        if (lines.length <= 1) {
            return escapeHtml(normalized).replace(/\n/g, '<br>');
        }

        return lines.map(line => `&bull; ${escapeHtml(line)}`).join('<br>');
    }

    function shouldOfferRsvpRecovery(botReply) {
        const normalizedReply = String(botReply || '').trim();
        return normalizedReply === RSVP_FAILURE_MESSAGE || normalizedReply === GUEST_LIST_NOT_FOUND_MESSAGE;
    }

    function setChatbotMinimized(minimized) {
        document.body.classList.toggle('chatbot-minimized', !!minimized);
        if (launcher) {
            launcher.setAttribute('aria-expanded', minimized ? 'false' : 'true');
        }
        if (!minimized) {
            setTimeout(() => focusPrimaryResponseInput(), 120);
        }
    }

    function minimizeChatbot() {
        if (window.parent && window.parent !== window) {
            try {
                window.parent.postMessage({ type: 'CHERRY_EMBED_MINIMIZE' }, '*');
                return;
            } catch (error) {
                console.warn('Cherry minimize request failed.', error);
            }
        }

        setChatbotMinimized(true);
    }

    function appendRsvpRecoveryActions(stepDiv, botReply) {
        if (!stepDiv || !shouldOfferRsvpRecovery(botReply) || stepDiv.querySelector('.rsvp-recovery-actions')) {
            return;
        }

        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'choice-button-group rsvp-recovery-actions';
        buttonGroup.setAttribute('role', 'group');
        buttonGroup.setAttribute('aria-label', 'RSVP recovery options');

        const yesButton = document.createElement('button');
        yesButton.type = 'button';
        yesButton.className = 'choice-button';
        yesButton.textContent = 'YES';
        yesButton.dataset.recoveryAction = 'refresh';

        const noButton = document.createElement('button');
        noButton.type = 'button';
        noButton.className = 'choice-button';
        noButton.textContent = 'NO';
        noButton.dataset.recoveryAction = 'minimize';

        buttonGroup.appendChild(yesButton);
        buttonGroup.appendChild(noButton);
        stepDiv.appendChild(buttonGroup);
    }

    function focusPrimaryResponseInput() {
        if (isSplitNameStep()) {
            const firstNameInput = flowContainer.querySelector('.message-wrapper:last-child [data-name-part="first"]');
            firstNameInput?.focus();
            return;
        }
        if (!userInput.disabled && !inputArea?.hidden) {
            userInput.focus();
        }
    }

    function typeText(element, html, speed = 40, onComplete = null) {
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
            if (nodeIdx >= textNodes.length) {
                if (typeof onComplete === 'function') onComplete();
                return;
            }

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
        } else if (typeof onComplete === 'function') {
            onComplete();
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
                applyUserReplyVisibility();
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
        typeText(h2, "To stay in touch, could you please share your email address?", getQuestionTypingSpeed(), focusPrimaryResponseInput);

        userInput.placeholder = "Enter your email...";
        userInput.value = '';
        scrollToBottom();
    }

    async function handleNext() {
        let text = userInput.value.trim();
        let splitNameValues = null;
        let inputBarsValues = null;

        if (currentStep < steps.length && isSplitNameStep()) {
            splitNameValues = readSplitNameStepValue();
            if (!splitNameValues) return;
            text = splitNameValues.fullName;
        } else if (currentStep < steps.length && isInputBarsStep()) {
            inputBarsValues = readInputBarsStepValue();
            if (!inputBarsValues) return;
            text = inputBarsValues.combined;
        }

        if (!text) return;
        processStepAnswer(text, splitNameValues, inputBarsValues);
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

    function pruneEmptyPayloadValues(value) {
        if (Array.isArray(value)) {
            const cleanedItems = value
                .map(item => pruneEmptyPayloadValues(item))
                .filter(item => item !== undefined);
            return cleanedItems.length > 0 ? cleanedItems : undefined;
        }

        if (value && typeof value === 'object') {
            const cleanedEntries = Object.entries(value).reduce((accumulator, [key, entryValue]) => {
                const cleanedValue = pruneEmptyPayloadValues(entryValue);
                if (cleanedValue !== undefined) {
                    accumulator[key] = cleanedValue;
                }
                return accumulator;
            }, {});
            return Object.keys(cleanedEntries).length > 0 ? cleanedEntries : undefined;
        }

        if (typeof value === 'string') {
            const trimmed = value.trim();
            return trimmed ? trimmed : undefined;
        }

        return value ?? undefined;
    }

    function buildWebhookFieldMap(metadata = {}) {
        const fieldMap = {};

        Object.entries(metadata).forEach(([key, value]) => {
            if (Array.isArray(value) && /Fields$/i.test(key)) {
                value.forEach((entry) => {
                    const placeholder = String(entry?.placeholder || '').trim();
                    const fieldValue = pruneEmptyPayloadValues(entry?.value);
                    if (placeholder && fieldValue !== undefined) {
                        fieldMap[placeholder] = fieldValue;
                    }
                });
                return;
            }

            if (value && typeof value === 'object') {
                return;
            }

            const cleanedValue = pruneEmptyPayloadValues(value);
            if (cleanedValue !== undefined) {
                fieldMap[key] = cleanedValue;
            }
        });

        const fullName = String(fieldMap.name || '').trim();
        if (!fieldMap['First Name']) {
            const firstName = String(fieldMap.firstName || '').trim() || (fullName ? fullName.split(/\s+/)[0] : '');
            if (firstName) {
                fieldMap['First Name'] = firstName;
            }
        }
        if (!fieldMap.firstName && fieldMap['First Name']) {
            fieldMap.firstName = fieldMap['First Name'];
        }
        if (!fieldMap['Last Name']) {
            const lastName = String(fieldMap.lastName || '').trim();
            if (lastName) {
                fieldMap['Last Name'] = lastName;
            }
        }
        if (!fieldMap.lastName && fieldMap['Last Name']) {
            fieldMap.lastName = fieldMap['Last Name'];
        }
        if (!fieldMap.Email && fieldMap.email) {
            fieldMap.Email = fieldMap.email;
        }
        if (!fieldMap.email && fieldMap.Email) {
            fieldMap.email = fieldMap.Email;
        }
        if (!fieldMap.RSVP && metadata.RSVP) {
            fieldMap.RSVP = metadata.RSVP;
        }
        if (!fieldMap.rsvp && fieldMap.RSVP) {
            fieldMap.rsvp = fieldMap.RSVP;
        }

        return pruneEmptyPayloadValues(fieldMap) || {};
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
            const metadata = {};
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'sessionId') return;
                const cleanedValue = pruneEmptyPayloadValues(value);
                if (cleanedValue !== undefined) {
                    metadata[key] = cleanedValue;
                }
            });

            const flattenedFields = buildWebhookFieldMap(metadata);

            const payload = {
                action: 'sendMessage',
                sessionId: formData.sessionId,
                chatInput: formData.inquiry || formData.email || formData.name || '',
                metadata: pruneEmptyPayloadValues(metadata) || {},
                ...flattenedFields
            };

            setTelemetryStatus('live', 'Sending webhook request');
            setTelemetryStage('client', 100, 'live');
            setTelemetryStage('processing', 25, 'live');
            setTelemetryStage('clientReturn', 0, 'idle');
            setTelemetryStage('render', 0, 'idle');
            logTelemetry(`Request sent to webhook for session ${formData.sessionId}.`);
            updateTelemetryRaw(`Outgoing request to ${currentWebhookUrl || '(no webhook url)'}`, payload);

            const response = await fetch(currentWebhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            setTelemetryStage('processing', 100, 'live');
            setTelemetryStage('clientReturn', 70, 'live');

            const responseText = await response.text();
            let parsedResponse = null;
            if (responseText) {
                try {
                    parsedResponse = JSON.parse(responseText);
                } catch (parseError) {
                    parsedResponse = null;
                }
            }
            const botReply = extractBotReply(parsedResponse) || (responseText.trim() ? responseText.trim() : "Thank you for reaching out.");
            updateTelemetryRaw(`Incoming response (${response.status})`, responseText || parsedResponse || { status: response.status });

            if (!response.ok) {
                setTelemetryStatus('error', `Webhook error ${response.status}`);
                setTelemetryStage('clientReturn', 100, 'error');
                setTelemetryStage('render', 0, 'error');
                logTelemetry(`Webhook returned error status ${response.status}.`);
                if (botReply && botReply !== "Thank you for reaching out.") {
                    stepDiv.innerHTML = `<h2>${formatBotReply(botReply)}</h2>`;
                    appendRsvpRecoveryActions(stepDiv, botReply);
                    scrollToBottom();
                    return;
                }
                throw new Error(`HTTP error! status: ${response.status}${responseText ? ` - ${responseText}` : ''}`);
            }

            stepDiv.innerHTML = `<h2>${formatBotReply(botReply)}</h2>`;
            appendRsvpRecoveryActions(stepDiv, botReply);
            setTelemetryStage('clientReturn', 100, 'live');
            setTelemetryStage('render', 100, 'live');
            setTelemetryStatus('idle', 'Last webhook completed successfully');
            logTelemetry('Webhook response received and rendered in the chatbot.');
            scrollToBottom(); // Scroll to show bot response


        } catch (error) {
            console.error(error);
            const failedUrl = currentWebhookUrl || '(no webhook url)';
            stepDiv.innerHTML = `<h2>Error: ${error.message}<br><span style="font-size:0.7em;opacity:0.75;">${failedUrl}</span></h2>`;
            setTelemetryStatus('error', error.message);
            setTelemetryStage('processing', 100, 'error');
            setTelemetryStage('clientReturn', 100, 'error');
            setTelemetryStage('render', 0, 'error');
            logTelemetry(`Webhook request failed: ${error.message}`);
            updateTelemetryRaw(`Request failed for ${failedUrl}`, {
                error: error.message,
                sessionId: formData.sessionId
            });
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

    function restart(showIntro = true) {
        setChatbotMinimized(false);
        currentStep = 0;
        hasStartedConversation = false;
        isAskingForEmail = false;
        formData.sessionId = generateSessionId();
        formData.name = '';
        formData.firstName = '';
        formData.lastName = '';
        formData.email = '';
        formData.inquiry = '';
        flowContainer.innerHTML = '';
        setPrimaryInputMode('default');
        userInput.disabled = false;
        userInput.placeholder = "Type here...";
        logTelemetry(`Conversation restarted and session ${formData.sessionId} renewed.`);
        setTelemetryStatus('idle', 'Conversation restarted');
        updateTelemetryRaw('Waiting for webhook activity...', 'No transmissions yet.');
        resetTelemetryStages();
        if (showIntro) {
            showIntroScreen();
            return;
        }
        startConversation();
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
            videoDrawer?.classList.contains('open') ||
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
            const item = document.createElement('div');
            item.className = 'question-list__item';
            item.dataset.index = String(index);
            item.draggable = true;
            item.setAttribute('role', 'option');
            item.setAttribute('aria-selected', index === selectedQuestionIndex ? 'true' : 'false');
            if (index === selectedQuestionIndex) {
                item.classList.add('is-selected');
            }
            item.innerHTML = `
                <span class="question-list__handle" aria-hidden="true">::</span>
                <span class="question-list__content">
                    <span class="question-list__title">${index + 1}. ${escapeHtml(step.field)}</span>
                    <span class="question-list__meta">${escapeHtml(
                        step.type === 'multiple_choice'
                            ? 'Multiple choice'
                            : (step.type === 'input_bars' ? 'Input bars' : 'Text input')
                    )}</span>
                </span>
            `;
            questionList.appendChild(item);
        });
        if (steps.length > 0) {
            const nextIndex = Math.min(Math.max(selectedQuestionIndex, 0), steps.length - 1);
            selectedQuestionIndex = nextIndex;
        }
    }

    function loadQuestionSelection(index) {
        if (!steps.length) return;
        selectedQuestionIndex = Math.min(Math.max(index, 0), steps.length - 1);
        const step = steps[selectedQuestionIndex];
        if (questionList) {
            questionList.querySelectorAll('.question-list__item').forEach((item) => {
                const isSelected = Number(item.dataset.index) === selectedQuestionIndex;
                item.classList.toggle('is-selected', isSelected);
                item.setAttribute('aria-selected', isSelected ? 'true' : 'false');
            });
        }
        if (questionFieldInput) questionFieldInput.value = step.field;
        if (questionTextInput) questionTextInput.value = step.question;
        if (questionPlaceholderInput) questionPlaceholderInput.value = step.placeholder;
        if (questionTypeSelect) questionTypeSelect.value = step.type || 'text';
        if (questionOptionsInput) questionOptionsInput.value = Array.isArray(step.options) ? step.options.join('\n') : '';
        syncQuestionTypeUi(step.type || 'text');
        if (questionFontFamilySelect) questionFontFamilySelect.value = questionnaireSettings.fontFamily;
        if (questionFontSizeInput) questionFontSizeInput.value = String(questionnaireSettings.fontSize);
        if (questionAnimStyleSelect) questionAnimStyleSelect.value = questionnaireSettings.animation;
        if (questionEmojiInput) questionEmojiInput.value = questionnaireSettings.emoji;
    }

    function moveQuestion(fromIndex, toIndex) {
        if (!Number.isInteger(fromIndex) || !Number.isInteger(toIndex)) return;
        if (fromIndex < 0 || toIndex < 0 || fromIndex >= steps.length || toIndex >= steps.length) return;
        if (fromIndex === toIndex) {
            renderQuestionList();
            loadQuestionSelection(selectedQuestionIndex);
            return;
        }

        const [movedStep] = steps.splice(fromIndex, 1);
        steps.splice(toIndex, 0, movedStep);

        if (selectedQuestionIndex === fromIndex) {
            selectedQuestionIndex = toIndex;
        } else if (fromIndex < selectedQuestionIndex && toIndex >= selectedQuestionIndex) {
            selectedQuestionIndex -= 1;
        } else if (fromIndex > selectedQuestionIndex && toIndex <= selectedQuestionIndex) {
            selectedQuestionIndex += 1;
        }

        persistQuestionnaire();
        renderQuestionList();
        loadQuestionSelection(selectedQuestionIndex);
        setQuestionsStatus('Question order updated.', 'success');
    }

    function syncQuestionTypeUi(selectedType = questionTypeSelect?.value || 'text') {
        const isMultipleChoice = selectedType === 'multiple_choice';
        const isInputBars = selectedType === 'input_bars';

        if (questionOptionsLabel) {
            questionOptionsLabel.textContent = isInputBars ? 'Input bar placeholders' : 'Choices';
        }
        if (questionOptionsInput) {
            questionOptionsInput.placeholder = isInputBars
                ? 'First name\nLast name\nEmail address'
                : 'Option 1\nOption 2\nOption 3';
        }
        if (questionPlaceholderInput) {
            questionPlaceholderInput.disabled = isMultipleChoice || isInputBars;
            questionPlaceholderInput.placeholder = isInputBars
                ? 'Handled by the input bar placeholders below'
                : 'Type here...';
        }
    }

    function saveSelectedQuestion() {
        if (!steps.length) return;
        const field = (questionFieldInput?.value || '').trim();
        const question = (questionTextInput?.value || '').trim();
        const placeholder = (questionPlaceholderInput?.value || '').trim();
        const type = questionTypeSelect?.value === 'multiple_choice'
            ? 'multiple_choice'
            : (questionTypeSelect?.value === 'input_bars' ? 'input_bars' : 'text');
        const options = String(questionOptionsInput?.value || '')
            .split(/\r?\n/)
            .map(option => option.trim())
            .filter(Boolean);
        if (!field || !question || (type === 'text' && !placeholder)) {
            setQuestionsStatus('Field key, question text, and placeholder are required for text input questions.', 'error');
            return;
        }
        if (type === 'multiple_choice' && options.length < 2) {
            setQuestionsStatus('Add at least two choices for a multiple choice question.', 'error');
            return;
        }
        if (type === 'input_bars' && options.length < 1) {
            setQuestionsStatus('Add at least one placeholder for the input bars question.', 'error');
            return;
        }
        steps[selectedQuestionIndex] = {
            field,
            question,
            placeholder: type === 'text'
                ? placeholder
                : (type === 'multiple_choice' ? placeholder || 'Select an option' : ''),
            type,
            options
        };
        questionnaireSettings.fontFamily = questionFontFamilySelect?.value || questionnaireSettings.fontFamily;
        questionnaireSettings.fontSize = Number.parseInt(questionFontSizeInput?.value || String(questionnaireSettings.fontSize), 10) || questionnaireSettings.fontSize;
        questionnaireSettings.animation = questionAnimStyleSelect?.value || questionnaireSettings.animation;
        questionnaireSettings.emoji = (questionEmojiInput?.value || '').trim();
        applyQuestionnaireStyles();
        persistQuestionnaire();
        updateEmbedCode();
        renderQuestionList();
        loadQuestionSelection(selectedQuestionIndex);
        setQuestionsStatus('Question saved.', 'success');
    }

    function addQuestion() {
        steps.push({
            field: `field_${steps.length + 1}`,
            question: 'New question',
            placeholder: 'Type here...',
            type: 'text',
            options: []
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
        updateEmbedCode();
    }

    function applyQuestionnaireStyles() {
        if (!flowContainer) return;
        flowContainer.style.setProperty('--question-font-family', questionnaireSettings.fontFamily);
        flowContainer.style.setProperty('--question-font-size', `${questionnaireSettings.fontSize}px`);
    }

    function applyQuestionnaire() {
        saveSelectedQuestion();
        if (!questionsStatus || questionsStatus.classList.contains('error')) return;
        steps = upgradeQuestionnaireSteps(steps);
        safeStorageSet(STORAGE_KEYS.questionnaireSteps, JSON.stringify(steps));
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

    function decodeEmbedSnapshot(encoded) {
        try {
            const normalized = String(encoded || '').replace(/-/g, '+').replace(/_/g, '/');
            const padded = normalized + '='.repeat((4 - (normalized.length % 4 || 4)) % 4);
            return JSON.parse(decodeURIComponent(escape(atob(padded))));
        } catch (_) {
            return null;
        }
    }

    function getUrlEmbedSnapshot() {
        const encodedProject = pageParams.get('project') || '';
        if (!encodedProject) return null;
        const snapshot = decodeEmbedSnapshot(encodedProject);
        if (!snapshot || typeof snapshot !== 'object') return null;
        const webhook = (pageParams.get('webhook') || '').trim();
        if (webhook) {
            snapshot.webhook = {
                ...(snapshot.webhook || {}),
                prod: webhook,
                active: 'prod'
            };
        }
        return snapshot;
    }

    function getEmbedSnippetData() {
        const snapshot = getProjectSnapshot();
        const runtimeBase = ((embedJsUrlInput?.value || '').trim().replace(/\/auto-embed\.js$/i, '')) || getActiveEmbedRuntimeBase();
        const appBase = ((embedCssUrlInput?.value || '').trim().replace(/\/(?:index|embed)\.html$/i, '')) || getActiveEmbedAppBase();
        const jsUrl = `${runtimeBase}/auto-embed.js`;
        const appUrl = `${appBase}/embed.html`;
        const webhook = (webhookProdInput?.value || '').trim()
            || snapshot?.webhook?.prod
            || safeStorageGet(STORAGE_KEYS.webhookProd, WEBHOOK_URL_PROD)
            || WEBHOOK_URL_PROD;
        const iconUrl = snapshot?.widget?.icon || '';
        const shape = snapshot?.widget?.shape || 'circle';
        const anim = snapshot?.widget?.animation || 'none';
        const is3d = !!snapshot?.widget?.is3d;
        const label = snapshot?.widget?.label || 'Chat with Cherry';
        const subtext = snapshot?.widget?.subtext || 'We typically reply in minutes';
        const subtextDisplay = snapshot?.widget?.subtextDisplay || 'hover';
        const iconSize = snapshot?.widget?.iconSize || '26';
        const encodedProject = encodeEmbedSnapshot(snapshot);
        return {
            jsUrl,
            appUrl,
            webhook,
            iconUrl,
            shape,
            anim,
            is3d,
            label,
            subtext,
            subtextDisplay,
            iconSize,
            encodedProject
        };
    }

    function buildLauncherEmbedCode() {
        const {
            jsUrl,
            appUrl,
            webhook,
            iconUrl,
            shape,
            anim,
            is3d,
            label,
            subtext,
            subtextDisplay,
            iconSize,
            encodedProject
        } = getEmbedSnippetData();
        const attrs = [
            `src="${jsUrl}"`,
            `data-webhook="${webhook}"`,
            `data-app-url="${appUrl}"`,
            `data-label="${label.replace(/"/g, '&quot;')}"`,
            `data-subtext="${subtext.replace(/"/g, '&quot;')}"`,
            `data-subtext-display="${subtextDisplay}"`,
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

    function buildInlineEmbedCode() {
        const {
            appUrl,
            webhook,
            encodedProject
        } = getEmbedSnippetData();
        const iframeUrl = new URL(appUrl, window.location.href);
        iframeUrl.searchParams.set('embed', '1');
        iframeUrl.searchParams.set('inline', '1');
        if (encodedProject) iframeUrl.searchParams.set('project', encodedProject);
        if (webhook) iframeUrl.searchParams.set('webhook', webhook);
        return `<iframe src="${iframeUrl.toString().replace(/"/g, '&quot;')}" style="width:min(100%, 600px);min-height:720px;display:block;margin:0 auto;border:0;border-radius:24px;background:transparent;" allow="clipboard-read; clipboard-write; microphone; autoplay" loading="lazy"></iframe>`;
    }

    function updateEmbedCode() {
        if (embedCodeBlock) {
            embedCodeBlock.textContent = buildLauncherEmbedCode();
        }
        if (embedInlineCodeBlock) {
            embedInlineCodeBlock.textContent = buildInlineEmbedCode();
        }
    }

    // -----------------------------
    // Widget settings
    // -----------------------------
    function ensureLauncherHint() {
        if (!launcher || !launcher.parentElement) return null;
        let hint = document.getElementById('chat-launcher-hint');
        if (!hint) {
            hint = document.createElement('div');
            hint.id = 'chat-launcher-hint';
            hint.className = 'chat-launcher-hint';
            launcher.insertAdjacentElement('afterend', hint);
        }
        return hint;
    }

    function applyLauncher(label, subtext, subtextDisplay, iconUrl, shape, anim, is3d, iconSize) {
        const lbl = String(label || '').trim();
        const sub = String(subtext || '').trim();
        const displayMode = ['hover', 'always', 'hidden'].includes(subtextDisplay) ? subtextDisplay : 'hover';
        const shapeClass = shape || 'circle';
        const animClass = anim || 'none';
        const size = parseInt(iconSize, 10) || 26;
        const launcherHint = ensureLauncherHint();
        if (launcher) {
            launcher.setAttribute('aria-label', lbl || 'Chat launcher');
            launcher.title = displayMode === 'hidden' ? lbl : [lbl, sub].filter(Boolean).join(' — ');
            launcher.dataset.subtextDisplay = displayMode;
            launcher.classList.remove('circle', 'rounded', 'square', 'anim-pulse', 'anim-float', 'chat-launcher--3d');
            launcher.classList.add(shapeClass);
            if (animClass === 'pulse') launcher.classList.add('anim-pulse');
            if (animClass === 'float') launcher.classList.add('anim-float');
            if (is3d) launcher.classList.add('chat-launcher--3d');
        }
        if (launcherLabel) launcherLabel.textContent = lbl;
        if (launcherSubtext) launcherSubtext.textContent = sub;
        if (launcherHint) {
            launcherHint.textContent = sub;
            launcherHint.hidden = displayMode === 'hidden' || !sub;
        }
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
        const storedLabel = safeStorageGet(STORAGE_KEYS.launcherLabel, '__missing__');
        const storedSubtext = safeStorageGet(STORAGE_KEYS.launcherSubtext, '__missing__');
        const label = storedLabel === '__missing__' ? 'Chat with Cherry' : storedLabel;
        const subtext = storedSubtext === '__missing__' ? 'We typically reply in minutes' : storedSubtext;
        const subtextDisplay = safeStorageGet(STORAGE_KEYS.launcherSubtextDisplay, 'hover') || 'hover';
        const icon = safeStorageGet(STORAGE_KEYS.launcherIcon, '') || '';
        const iconSize = safeStorageGet(STORAGE_KEYS.launcherIconSize, '26') || '26';
        const shape = safeStorageGet(STORAGE_KEYS.launcherShape, 'circle') || 'circle';
        const anim = safeStorageGet(STORAGE_KEYS.launcherAnim, 'none') || 'none';
        const is3d = safeStorageGet(STORAGE_KEYS.launcher3d, 'false') === 'true';
        if (widgetLabelInput) widgetLabelInput.value = label;
        if (widgetSubtextInput) widgetSubtextInput.value = subtext;
        if (widgetSubtextDisplaySelect) widgetSubtextDisplaySelect.value = subtextDisplay;
        if (widgetIconInput) widgetIconInput.value = icon;
        if (widgetIconSizeInput) widgetIconSizeInput.value = iconSize;
        if (widgetShapeSelect) widgetShapeSelect.value = shape;
        if (widgetAnimSelect) widgetAnimSelect.value = anim;
        if (widget3dCheckbox) widget3dCheckbox.checked = is3d;
        applyLauncher(label, subtext, subtextDisplay, icon, shape, anim, is3d, iconSize);
    }

    function saveWidgetSettings() {
        const label = (widgetLabelInput?.value || '').trim();
        const subtext = (widgetSubtextInput?.value || '').trim();
        const subtextDisplay = widgetSubtextDisplaySelect?.value || 'hover';
        const icon = (widgetIconInput?.value || '').trim();
        const iconSize = (widgetIconSizeInput?.value || '26').trim() || '26';
        const shape = widgetShapeSelect?.value || 'circle';
        const anim = widgetAnimSelect?.value || 'none';
        const is3d = !!widget3dCheckbox?.checked;
        safeStorageSet(STORAGE_KEYS.launcherLabel, label);
        safeStorageSet(STORAGE_KEYS.launcherSubtext, subtext);
        safeStorageSet(STORAGE_KEYS.launcherSubtextDisplay, subtextDisplay);
        safeStorageSet(STORAGE_KEYS.launcherIcon, icon);
        safeStorageSet(STORAGE_KEYS.launcherIconSize, iconSize);
        safeStorageSet(STORAGE_KEYS.launcherShape, shape);
        safeStorageSet(STORAGE_KEYS.launcherAnim, anim);
        safeStorageSet(STORAGE_KEYS.launcher3d, String(is3d));
        applyLauncher(label, subtext, subtextDisplay, icon, shape, anim, is3d, iconSize);
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

    let deployManifestCache = null;

    function getDeployManifest() {
        if (deployManifestCache) return deployManifestCache;
        const manifestEl = document.getElementById('deploy-manifest');
        if (!manifestEl?.textContent) {
            deployManifestCache = {};
            return deployManifestCache;
        }
        try {
            deployManifestCache = JSON.parse(manifestEl.textContent);
        } catch (_) {
            deployManifestCache = {};
        }
        return deployManifestCache;
    }

    function getCurrentDocumentHtml() {
        const doctype = document.doctype
            ? `<!DOCTYPE ${document.doctype.name}${document.doctype.publicId ? ` PUBLIC "${document.doctype.publicId}"` : ''}${document.doctype.systemId ? `${document.doctype.publicId ? ' ' : ' SYSTEM '}"${document.doctype.systemId}"` : ''}>`
            : '<!DOCTYPE html>';
        return `${doctype}\n${document.documentElement.outerHTML}`;
    }

    function getFallbackEmbedHtml() {
        return `<!DOCTYPE html>
<html lang="en" data-cherry-embed>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cherry Embed</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css?v=3">
</head>
<body>
    <main class="main-container">
        <section class="form-interface glass-panel">
            <header class="form-header">
                <div class="brand">
                    <div class="brand-logo-wrap" id="brand-logo-wrap" aria-hidden="true">
                        <img src="assets/cherry-logo.png" alt="Brand logo" class="brand-logo-img" id="brand-logo-img">
                    </div>
                    <div class="status-dot" id="header-status-dot"></div>
                    <div class="brand-copy">
                        <h1 id="header-title">Cherry</h1>
                        <p class="brand-subtitle" id="header-subtitle" hidden></p>
                    </div>
                </div>
                <div class="header-actions" id="header-actions">
                    <a href="https://deejayedson.com/" class="settings-btn" id="home-btn" aria-label="Home">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </a>
                    <button class="settings-btn" id="email-btn" aria-label="Send Email">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </button>
                    <button class="settings-btn" id="download-btn" aria-label="Download Chat">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </button>
                    <button class="settings-btn" id="restart-btn" aria-label="Restart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="23 4 23 10 17 10"></polyline>
                            <polyline points="1 20 1 14 7 14"></polyline>
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                        </svg>
                    </button>
                </div>
            </header>

            <div class="header-video" id="header-video" hidden>
                <video id="header-video-player" playsinline muted loop autoplay preload="metadata"></video>
            </div>

            <div class="chat-layout">
                <div class="conversation-flow" id="conversation-flow"></div>
            </div>

            <div class="input-area">
                <div class="input-wrapper">
                    <input type="text" id="user-input" placeholder="Type here..." autocomplete="off">
                </div>
                <div class="nav-actions">
                    <button id="send-btn" aria-label="Submit">Submit</button>
                </div>
            </div>

            <footer class="brand-footer" id="brand-footer">
                <a href="https://astigmedia.com/" target="_blank" rel="noreferrer" class="brand-link" id="brand-link">Astig Media</a>
            </footer>
            <p class="webhook-debug" id="webhook-debug"></p>
        </section>

        <button class="chat-launcher circle anim-pulse chat-launcher--3d" id="chat-launcher" aria-label="Chat with Cherry" title="Chat with Cherry — We typically reply in minutes">
            <span class="sr-only" id="chat-launcher-label">Chat with Cherry</span>
            <span class="sr-only" id="chat-launcher-subtext">We typically reply in minutes</span>
            <div class="chat-launcher__icon" id="chat-launcher-icon" aria-hidden="true" style="background-image: url('https://widjets.astigmedia.com/img/main-logo.png'); width: 50px; height: 50px;"></div>
        </button>
    </main>

    <script src="script.js?v=3"></script>
</body>
</html>`;
    }

    function getEmbeddedDeployContentBase64(file) {
        if (file === 'index.html') {
            return encodeTextToBase64(getCurrentDocumentHtml());
        }
        if (file === 'embed.html') {
            return encodeTextToBase64(getFallbackEmbedHtml());
        }
        return getDeployManifest()[file] || null;
    }

    async function fetchFileContentBase64(file) {
        const embeddedContent = getEmbeddedDeployContentBase64(file);
        if (window.location.protocol === 'file:' && embeddedContent) {
            return embeddedContent;
        }
        try {
            const url = new URL(file, window.location.href).href;
            const res = await fetch(url, { cache: 'no-cache' });
            if (!res.ok) {
                throw new Error(`could not read ${file}`);
            }
            return encodeBytesToBase64(new Uint8Array(await res.arrayBuffer()));
        } catch (err) {
            if (embeddedContent) {
                return embeddedContent;
            }
            throw err;
        }
    }

    async function copyEmbedCode(mode = 'launcher') {
        const isInline = mode === 'inline';
        const code = isInline ? buildInlineEmbedCode() : buildLauncherEmbedCode();
        const button = isInline ? copyInlineEmbedBtn : copyEmbedBtn;
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
        if (button) {
            const defaultLabel = isInline ? 'Copy INLINE' : 'Copy';
            button.textContent = 'Copied';
            setTimeout(() => button.textContent = defaultLabel, 1200);
        }
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
            const repo = localStorage.getItem(STORAGE_KEYS.repo);
            const branch = localStorage.getItem(STORAGE_KEYS.branch);
            const token = localStorage.getItem(STORAGE_KEYS.token);
            if (githubUrlInput) githubUrlInput.value = repo || '';
            if (githubBranchInput) githubBranchInput.value = branch || '';
            if (githubTokenInput) githubTokenInput.value = token || '';
            setCredsStatus(token ? 'Ready to deploy.' : 'Paste your GitHub token once, then press Deploy.', token ? 'success' : 'error');
        } catch (e) {
            setCredsStatus('Local storage not available in this context.', 'error');
        }
    }

    function saveGithubSettings() {
        try {
            if (githubUrlInput) {
                githubUrlInput.value = githubUrlInput.value.trim();
                localStorage.setItem(STORAGE_KEYS.repo, githubUrlInput.value);
            }
            if (githubBranchInput) {
                githubBranchInput.value = githubBranchInput.value.trim();
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
        const storedProd = safeStorageGet(STORAGE_KEYS.webhookProd, '__missing__');
        const storedTest = safeStorageGet(STORAGE_KEYS.webhookTest, '__missing__');
        const prod = storedProd === '__missing__' ? WEBHOOK_URL_PROD : storedProd;
        const test = storedTest === '__missing__' ? WEBHOOK_URL_TEST : storedTest;
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
            if (webhookProdInput) safeStorageSet(STORAGE_KEYS.webhookProd, webhookProdInput.value.trim());
            if (webhookTestInput) safeStorageSet(STORAGE_KEYS.webhookTest, webhookTestInput.value.trim());
            if (webhookChatInput) safeStorageSet(STORAGE_KEYS.webhookChat, webhookChatInput.value.trim());
            if (saveWebhookSettingsBtn) flashButton(saveWebhookSettingsBtn, 'Saved');
            updateWebhookStatus('Saved webhook URLs.', 'success');
            const active = safeStorageGet(STORAGE_KEYS.webhookActive, 'prod') || 'prod';
            setActiveWebhook(active, false);
        } catch (e) {
            updateWebhookStatus('Could not save webhook URLs (storage blocked).', 'error');
        }
    }

    function updateWebhookDebug(mode, url) {
        return;
    }

    function setActiveWebhook(mode, persist = true) {
        const storedProd = safeStorageGet(STORAGE_KEYS.webhookProd, '__missing__');
        const storedTest = safeStorageGet(STORAGE_KEYS.webhookTest, '__missing__');
        const prod = webhookProdInput?.value?.trim() || (storedProd === '__missing__' ? WEBHOOK_URL_PROD : storedProd) || '';
        const test = webhookTestInput?.value?.trim() || (storedTest === '__missing__' ? WEBHOOK_URL_TEST : storedTest) || '';
        const chat = webhookChatInput?.value?.trim() || safeStorageGet(STORAGE_KEYS.webhookChat, '') || '';

        switch (mode) {
            case 'test':
                currentWebhookUrl = test || '';
                if (webhookToggle) webhookToggle.checked = true;
                break;
            case 'chat':
                currentWebhookUrl = chat || prod;
                if (webhookToggle) webhookToggle.checked = false;
                break;
            default:
                currentWebhookUrl = prod || '';
                if (webhookToggle) webhookToggle.checked = false;
                mode = 'prod';
        }

        if (persist) safeStorageSet(STORAGE_KEYS.webhookActive, mode);

        webhookModeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === mode);
        });

        updateWebhookStatus(`Active: ${mode.toUpperCase()}`);
        updateWebhookDebug(mode, currentWebhookUrl);
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
    introContinueBtn?.addEventListener('click', startConversation);

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

    introContinueBtn?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            startConversation();
        }
    });

    if (flowContainer) {
        flowContainer.addEventListener('click', (event) => {
            const actionButton = event.target.closest('.rsvp-recovery-actions .choice-button');
            if (!actionButton) return;

            const buttonGroup = actionButton.closest('.rsvp-recovery-actions');
            if (!buttonGroup) return;

            buttonGroup.querySelectorAll('.choice-button').forEach((button) => {
                button.disabled = true;
                button.classList.toggle('choice-button--selected', button === actionButton);
            });

            const action = actionButton.dataset.recoveryAction;
            if (action === 'refresh') {
                setTimeout(() => restart(false), 80);
                return;
            }
            if (action === 'minimize') {
                minimizeChatbot();
            }
        });
    }

});
