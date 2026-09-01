// The widget vocabulary of WebKit2-4.1 as runtime data.
//
// GENERATED — do not edit. Provenance: WebKit2-4.1 — library 2.53.91 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'WebKit2',
    version: '4.1',
    libraryVersion: '2.53.91',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    WebKitWebView: ['automation-presentation-type', 'camera-capture-state', 'default-content-security-policy', 'display-capture-state', 'editable', 'is-controlled-by-automation', 'is-ephemeral', 'is-muted', 'magnification', 'microphone-capture-state', 'related-view', 'settings', 'user-content-manager', 'web-context', 'web-extension-mode', 'website-policies', 'zoom-level'],
};

export const OWN_SIGNALS = {
    WebKitWebView: ['authenticate', 'close', 'context-menu', 'context-menu-dismissed', 'create', 'decide-policy', 'enter-fullscreen', 'insecure-content-detected', 'leave-fullscreen', 'load-changed', 'load-failed', 'load-failed-with-tls-errors', 'mouse-target-changed', 'permission-request', 'print', 'query-permission-state', 'ready-to-show', 'resource-load-started', 'run-as-modal', 'run-color-chooser', 'run-file-chooser', 'script-dialog', 'show-notification', 'show-option-menu', 'submit-form', 'user-message-received', 'web-process-crashed', 'web-process-terminated'],
};

export const DECLS = {
    WebKitWebView: ['WebKitWebView', 'WebKitWebViewBase', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    WebKitWebViewBase: ['WebKitWebViewBase', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    WebKitAuthenticationScheme: ['default', 'http-basic', 'http-digest', 'html-form', 'ntlm', 'negotiate', 'client-certificate-requested', 'server-trust-evaluation-requested', 'client-certificate-pin-requested', 'unknown'],
    WebKitAutomationBrowsingContextPresentation: ['window', 'tab'],
    WebKitAutoplayPolicy: ['allow', 'allow-without-sound', 'deny'],
    WebKitCacheModel: ['document-viewer', 'web-browser', 'document-browser'],
    WebKitContextMenuAction: ['no-action', 'open-link', 'open-link-in-new-window', 'download-link-to-disk', 'copy-link-to-clipboard', 'open-image-in-new-window', 'download-image-to-disk', 'copy-image-to-clipboard', 'copy-image-url-to-clipboard', 'open-frame-in-new-window', 'go-back', 'go-forward', 'stop', 'reload', 'copy', 'cut', 'paste', 'delete', 'select-all', 'input-methods', 'unicode', 'spelling-guess', 'no-guesses-found', 'ignore-spelling', 'learn-spelling', 'ignore-grammar', 'font-menu', 'bold', 'italic', 'underline', 'outline', 'inspect-element', 'open-video-in-new-window', 'open-audio-in-new-window', 'copy-video-link-to-clipboard', 'copy-audio-link-to-clipboard', 'toggle-media-controls', 'toggle-media-loop', 'enter-video-fullscreen', 'media-play', 'media-pause', 'media-mute', 'download-video-to-disk', 'download-audio-to-disk', 'insert-emoji', 'paste-as-plain-text', 'custom'],
    WebKitCookieAcceptPolicy: ['always', 'never', 'no-third-party'],
    WebKitCookiePersistentStorage: ['text', 'sqlite'],
    WebKitCredentialPersistence: ['none', 'for-session', 'permanent'],
    WebKitFeatureStatus: ['embedder', 'unstable', 'internal', 'developer', 'testable', 'preview', 'stable', 'mature'],
    WebKitHardwareAccelerationPolicy: ['on-demand', 'always', 'never'],
    WebKitInputPurpose: ['free-form', 'digits', 'number', 'phone', 'url', 'email', 'password', 'search'],
    WebKitInsecureContentEvent: ['run', 'displayed'],
    WebKitLoadEvent: ['started', 'redirected', 'committed', 'finished'],
    WebKitMediaCaptureState: ['none', 'active', 'muted'],
    WebKitNavigationType: ['link-clicked', 'form-submitted', 'back-forward', 'reload', 'form-resubmitted', 'other'],
    WebKitNetworkProxyMode: ['default', 'no-proxy', 'custom'],
    WebKitPermissionState: ['granted', 'denied', 'prompt'],
    WebKitPolicyDecisionType: ['navigation-action', 'new-window-action', 'response'],
    WebKitPrintOperationResponse: ['print', 'cancel'],
    WebKitProcessModel: ['shared-secondary-process', 'multiple-secondary-processes'],
    WebKitSaveMode: ['mhtml'],
    WebKitScriptDialogType: ['alert', 'confirm', 'prompt', 'before-unload-confirm'],
    WebKitSnapshotRegion: ['visible', 'full-document'],
    WebKitTLSErrorsPolicy: ['ignore', 'fail'],
    WebKitUserContentInjectedFrames: ['all-frames', 'top-frame'],
    WebKitUserScriptInjectionTime: ['start', 'end'],
    WebKitUserStyleLevel: ['user', 'author'],
    WebKitWebExtensionMode: ['none', 'manifestv2', 'manifestv3'],
    WebKitWebProcessTerminationReason: ['crashed', 'exceeded-memory-limit', 'terminated-by-api'],
    WebKitXRSessionMode: ['inline', 'immersive-vr', 'immersive-ar'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'WebKitWebView.automation-presentation-type': '2.28',
    'WebKitWebView.camera-capture-state': '2.34',
    'WebKitWebView.default-content-security-policy': '2.38',
    'WebKitWebView.display-capture-state': '2.34',
    'WebKitWebView.editable': '2.8',
    'WebKitWebView.is-controlled-by-automation': '2.18',
    'WebKitWebView.is-ephemeral': '2.16',
    'WebKitWebView.is-muted': '2.30',
    'WebKitWebView.magnification': '2.54',
    'WebKitWebView.microphone-capture-state': '2.34',
    'WebKitWebView.related-view': '2.4',
    'WebKitWebView.settings': '2.6',
    'WebKitWebView.user-content-manager': '2.6',
    'WebKitWebView.web-extension-mode': '2.38',
    'WebKitWebView.website-policies': '2.30',
    'WebKitWebView::authenticate': '2.2',
    'WebKitWebView::load-failed-with-tls-errors': '2.6',
    'WebKitWebView::query-permission-state': '2.40',
    'WebKitWebView::run-color-chooser': '2.8',
    'WebKitWebView::show-notification': '2.8',
    'WebKitWebView::show-option-menu': '2.18',
    'WebKitWebView::user-message-received': '2.28',
    'WebKitWebView::web-process-terminated': '2.20',
};
