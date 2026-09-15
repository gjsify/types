// The widget vocabulary of WebKit-6.0 as runtime data.
//
// GENERATED — do not edit. Provenance: WebKit-6.0 — library 2.53.91 — dropped empty base(s): GObject.Object GObject.InitiallyUnowned Gio.Icon Gio.LoadableIcon Gio.Initable
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'WebKit',
    version: '6.0',
    libraryVersion: '2.53.91',
    childHolders: 0,
    droppedBases: ['GObject.Object', 'GObject.InitiallyUnowned', 'Gio.Icon', 'Gio.LoadableIcon', 'Gio.Initable'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    WebKitAutomationSession: ['id'],
    WebKitColorChooserRequest: ['rgba'],
    WebKitDownload: ['allow-overwrite'],
    WebKitFindController: ['web-view'],
    WebKitHitTestResult: ['context', 'image-uri', 'link-label', 'link-title', 'link-uri', 'media-uri'],
    WebKitImage: ['height', 'stride', 'width'],
    WebKitNetworkSession: ['cache-directory', 'data-directory', 'is-ephemeral'],
    WebKitPrintOperation: ['page-setup', 'print-settings', 'web-view'],
    WebKitSettings: ['allow-file-access-from-file-urls', 'allow-modal-dialogs', 'allow-top-navigation-to-data-urls', 'allow-universal-access-from-file-urls', 'auto-load-images', 'cursive-font-family', 'default-charset', 'default-font-family', 'default-font-size', 'default-monospace-font-size', 'disable-web-security', 'draw-compositing-indicators', 'enable-2d-canvas-acceleration', 'enable-back-forward-navigation-gestures', 'enable-caret-browsing', 'enable-developer-extras', 'enable-dns-prefetching', 'enable-encrypted-media', 'enable-fullscreen', 'enable-html5-database', 'enable-html5-local-storage', 'enable-hyperlink-auditing', 'enable-javascript', 'enable-javascript-markup', 'enable-media', 'enable-media-capabilities', 'enable-media-stream', 'enable-mediasource', 'enable-mock-capture-devices', 'enable-offline-web-application-cache', 'enable-page-cache', 'enable-resizable-text-areas', 'enable-site-specific-quirks', 'enable-smooth-scrolling', 'enable-spatial-navigation', 'enable-tabs-to-links', 'enable-webaudio', 'enable-webgl', 'enable-webrtc', 'enable-write-console-messages-to-stdout', 'fantasy-font-family', 'hardware-acceleration-policy', 'javascript-can-access-clipboard', 'javascript-can-open-windows-automatically', 'load-icons-ignoring-image-load-setting', 'math-font-family', 'media-content-types-requiring-hardware-support', 'media-playback-allows-inline', 'media-playback-requires-user-gesture', 'minimum-font-size', 'monospace-font-family', 'pictograph-font-family', 'print-backgrounds', 'sans-serif-font-family', 'serif-font-family', 'user-agent', 'webrtc-udp-ports-range', 'zoom-text-only'],
    WebKitURIRequest: ['uri'],
    WebKitURISchemeResponse: ['stream', 'stream-length'],
    WebKitUserContentFilterStore: ['path'],
    WebKitUserMessage: ['fd-list', 'name', 'parameters'],
    WebKitWebContext: ['memory-pressure-settings', 'time-zone-override'],
    WebKitWebExtension: ['path'],
    WebKitWebView: ['automation-presentation-type', 'camera-capture-state', 'default-content-security-policy', 'display-capture-state', 'editable', 'is-controlled-by-automation', 'is-muted', 'magnification', 'microphone-capture-state', 'network-session', 'related-view', 'settings', 'user-content-manager', 'web-context', 'web-extension-mode', 'website-policies', 'zoom-level'],
    WebKitWebsiteDataManager: ['base-cache-directory', 'base-data-directory', 'is-ephemeral', 'origin-storage-ratio', 'total-storage-ratio'],
    WebKitWebsitePolicies: ['autoplay', 'custom-user-agent'],
    WebKitWindowProperties: ['fullscreen', 'geometry', 'locationbar-visible', 'menubar-visible', 'resizable', 'scrollbars-visible', 'statusbar-visible', 'toolbar-visible'],
};

export const OWN_SIGNALS = {
    WebKitAuthenticationRequest: ['authenticated', 'cancelled'],
    WebKitAutomationSession: ['create-web-view', 'will-close'],
    WebKitBackForwardList: ['changed'],
    WebKitColorChooserRequest: ['finished'],
    WebKitCookieManager: ['changed'],
    WebKitDownload: ['created-destination', 'decide-destination', 'failed', 'finished', 'received-data'],
    WebKitEditorState: ['changed'],
    WebKitFaviconDatabase: ['favicon-changed'],
    WebKitFindController: ['counted-matches', 'failed-to-find-text', 'found-text'],
    WebKitGeolocationManager: ['start', 'stop'],
    WebKitNetworkSession: ['download-started'],
    WebKitNotification: ['clicked', 'closed'],
    WebKitOptionMenu: ['close'],
    WebKitPrintOperation: ['failed', 'finished'],
    WebKitUserContentManager: ['script-message-received', 'script-message-with-reply-received'],
    WebKitWebContext: ['automation-started', 'initialize-notification-permissions', 'initialize-web-process-extensions', 'user-message-received'],
    WebKitWebInspector: ['attach', 'bring-to-front', 'closed', 'detach', 'open-window'],
    WebKitWebResource: ['failed', 'failed-with-tls-errors', 'finished', 'sent-request'],
    WebKitWebView: ['authenticate', 'close', 'context-menu', 'context-menu-dismissed', 'create', 'decide-policy', 'enter-fullscreen', 'insecure-content-detected', 'leave-fullscreen', 'load-changed', 'load-failed', 'load-failed-with-tls-errors', 'mouse-target-changed', 'permission-request', 'print', 'query-permission-state', 'ready-to-show', 'resource-load-started', 'run-as-modal', 'run-color-chooser', 'run-file-chooser', 'script-dialog', 'show-notification', 'show-option-menu', 'submit-form', 'user-message-received', 'web-process-terminated'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    WebKitAuthenticationRequest: ['WebKitAuthenticationRequest'],
    WebKitAutomationSession: ['WebKitAutomationSession'],
    WebKitBackForwardList: ['WebKitBackForwardList'],
    WebKitBackForwardListItem: ['WebKitBackForwardListItem'],
    WebKitClipboardPermissionRequest: ['WebKitClipboardPermissionRequest', 'WebKitPermissionRequest'],
    WebKitColorChooserRequest: ['WebKitColorChooserRequest'],
    WebKitContextMenu: ['WebKitContextMenu'],
    WebKitContextMenuItem: ['WebKitContextMenuItem'],
    WebKitCookieManager: ['WebKitCookieManager'],
    WebKitDeviceInfoPermissionRequest: ['WebKitDeviceInfoPermissionRequest', 'WebKitPermissionRequest'],
    WebKitDownload: ['WebKitDownload'],
    WebKitEditorState: ['WebKitEditorState'],
    WebKitFaviconDatabase: ['WebKitFaviconDatabase'],
    WebKitFileChooserRequest: ['WebKitFileChooserRequest'],
    WebKitFindController: ['WebKitFindController'],
    WebKitFormSubmissionRequest: ['WebKitFormSubmissionRequest'],
    WebKitGeolocationManager: ['WebKitGeolocationManager'],
    WebKitGeolocationPermissionRequest: ['WebKitGeolocationPermissionRequest', 'WebKitPermissionRequest'],
    WebKitHitTestResult: ['WebKitHitTestResult'],
    WebKitImage: ['WebKitImage'],
    WebKitMediaKeySystemPermissionRequest: ['WebKitMediaKeySystemPermissionRequest', 'WebKitPermissionRequest'],
    WebKitNavigationPolicyDecision: ['WebKitNavigationPolicyDecision', 'WebKitPolicyDecision'],
    WebKitNetworkSession: ['WebKitNetworkSession'],
    WebKitNotification: ['WebKitNotification'],
    WebKitNotificationPermissionRequest: ['WebKitNotificationPermissionRequest', 'WebKitPermissionRequest'],
    WebKitOptionMenu: ['WebKitOptionMenu'],
    WebKitPointerLockPermissionRequest: ['WebKitPointerLockPermissionRequest', 'WebKitPermissionRequest'],
    WebKitPrintOperation: ['WebKitPrintOperation'],
    WebKitResponsePolicyDecision: ['WebKitResponsePolicyDecision', 'WebKitPolicyDecision'],
    WebKitSecurityManager: ['WebKitSecurityManager'],
    WebKitSettings: ['WebKitSettings'],
    WebKitURIRequest: ['WebKitURIRequest'],
    WebKitURIResponse: ['WebKitURIResponse'],
    WebKitURISchemeRequest: ['WebKitURISchemeRequest'],
    WebKitURISchemeResponse: ['WebKitURISchemeResponse'],
    WebKitUserContentFilterStore: ['WebKitUserContentFilterStore'],
    WebKitUserContentManager: ['WebKitUserContentManager'],
    WebKitUserMediaPermissionRequest: ['WebKitUserMediaPermissionRequest', 'WebKitPermissionRequest'],
    WebKitUserMessage: ['WebKitUserMessage'],
    WebKitWebContext: ['WebKitWebContext'],
    WebKitWebExtension: ['WebKitWebExtension'],
    WebKitWebInspector: ['WebKitWebInspector'],
    WebKitWebResource: ['WebKitWebResource'],
    WebKitWebView: ['WebKitWebView', 'WebKitWebViewBase', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    WebKitWebViewBase: ['WebKitWebViewBase', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    WebKitWebsiteDataAccessPermissionRequest: ['WebKitWebsiteDataAccessPermissionRequest', 'WebKitPermissionRequest'],
    WebKitWebsiteDataManager: ['WebKitWebsiteDataManager'],
    WebKitWebsitePolicies: ['WebKitWebsitePolicies'],
    WebKitWindowProperties: ['WebKitWindowProperties'],
    WebKitXRPermissionRequest: ['WebKitXRPermissionRequest', 'WebKitPermissionRequest'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
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
    WebKitHardwareAccelerationPolicy: ['always', 'never'],
    WebKitInputPurpose: ['free-form', 'digits', 'number', 'phone', 'url', 'email', 'password', 'search'],
    WebKitInsecureContentEvent: ['run', 'displayed'],
    WebKitLoadEvent: ['started', 'redirected', 'committed', 'finished'],
    WebKitMediaCaptureState: ['none', 'active', 'muted'],
    WebKitNavigationType: ['link-clicked', 'form-submitted', 'back-forward', 'reload', 'form-resubmitted', 'other'],
    WebKitNetworkProxyMode: ['default', 'no-proxy', 'custom'],
    WebKitPermissionState: ['granted', 'denied', 'prompt'],
    WebKitPolicyDecisionType: ['navigation-action', 'new-window-action', 'response'],
    WebKitPrintOperationResponse: ['print', 'cancel'],
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

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'WebKitAuthenticationScheme.client-certificate-pin-requested': 9,
    'WebKitAuthenticationScheme.client-certificate-requested': 7,
    'WebKitAuthenticationScheme.default': 1,
    'WebKitAuthenticationScheme.html-form': 4,
    'WebKitAuthenticationScheme.http-basic': 2,
    'WebKitAuthenticationScheme.http-digest': 3,
    'WebKitAuthenticationScheme.negotiate': 6,
    'WebKitAuthenticationScheme.ntlm': 5,
    'WebKitAuthenticationScheme.server-trust-evaluation-requested': 8,
    'WebKitAuthenticationScheme.unknown': 100,
    'WebKitAutomationBrowsingContextPresentation.tab': 1,
    'WebKitAutomationBrowsingContextPresentation.window': 0,
    'WebKitAutoplayPolicy.allow': 0,
    'WebKitAutoplayPolicy.allow-without-sound': 1,
    'WebKitAutoplayPolicy.deny': 2,
    'WebKitCacheModel.document-browser': 2,
    'WebKitCacheModel.document-viewer': 0,
    'WebKitCacheModel.web-browser': 1,
    'WebKitContextMenuAction.bold': 27,
    'WebKitContextMenuAction.copy': 14,
    'WebKitContextMenuAction.copy-audio-link-to-clipboard': 35,
    'WebKitContextMenuAction.copy-image-to-clipboard': 7,
    'WebKitContextMenuAction.copy-image-url-to-clipboard': 8,
    'WebKitContextMenuAction.copy-link-to-clipboard': 4,
    'WebKitContextMenuAction.copy-video-link-to-clipboard': 34,
    'WebKitContextMenuAction.custom': 10000,
    'WebKitContextMenuAction.cut': 15,
    'WebKitContextMenuAction.delete': 17,
    'WebKitContextMenuAction.download-audio-to-disk': 43,
    'WebKitContextMenuAction.download-image-to-disk': 6,
    'WebKitContextMenuAction.download-link-to-disk': 3,
    'WebKitContextMenuAction.download-video-to-disk': 42,
    'WebKitContextMenuAction.enter-video-fullscreen': 38,
    'WebKitContextMenuAction.font-menu': 26,
    'WebKitContextMenuAction.go-back': 10,
    'WebKitContextMenuAction.go-forward': 11,
    'WebKitContextMenuAction.ignore-grammar': 25,
    'WebKitContextMenuAction.ignore-spelling': 23,
    'WebKitContextMenuAction.input-methods': 19,
    'WebKitContextMenuAction.insert-emoji': 44,
    'WebKitContextMenuAction.inspect-element': 31,
    'WebKitContextMenuAction.italic': 28,
    'WebKitContextMenuAction.learn-spelling': 24,
    'WebKitContextMenuAction.media-mute': 41,
    'WebKitContextMenuAction.media-pause': 40,
    'WebKitContextMenuAction.media-play': 39,
    'WebKitContextMenuAction.no-action': 0,
    'WebKitContextMenuAction.no-guesses-found': 22,
    'WebKitContextMenuAction.open-audio-in-new-window': 33,
    'WebKitContextMenuAction.open-frame-in-new-window': 9,
    'WebKitContextMenuAction.open-image-in-new-window': 5,
    'WebKitContextMenuAction.open-link': 1,
    'WebKitContextMenuAction.open-link-in-new-window': 2,
    'WebKitContextMenuAction.open-video-in-new-window': 32,
    'WebKitContextMenuAction.outline': 30,
    'WebKitContextMenuAction.paste': 16,
    'WebKitContextMenuAction.paste-as-plain-text': 45,
    'WebKitContextMenuAction.reload': 13,
    'WebKitContextMenuAction.select-all': 18,
    'WebKitContextMenuAction.spelling-guess': 21,
    'WebKitContextMenuAction.stop': 12,
    'WebKitContextMenuAction.toggle-media-controls': 36,
    'WebKitContextMenuAction.toggle-media-loop': 37,
    'WebKitContextMenuAction.underline': 29,
    'WebKitContextMenuAction.unicode': 20,
    'WebKitCookieAcceptPolicy.always': 0,
    'WebKitCookieAcceptPolicy.never': 1,
    'WebKitCookieAcceptPolicy.no-third-party': 2,
    'WebKitCookiePersistentStorage.sqlite': 1,
    'WebKitCookiePersistentStorage.text': 0,
    'WebKitCredentialPersistence.for-session': 1,
    'WebKitCredentialPersistence.none': 0,
    'WebKitCredentialPersistence.permanent': 2,
    'WebKitFeatureStatus.developer': 3,
    'WebKitFeatureStatus.embedder': 0,
    'WebKitFeatureStatus.internal': 2,
    'WebKitFeatureStatus.mature': 7,
    'WebKitFeatureStatus.preview': 5,
    'WebKitFeatureStatus.stable': 6,
    'WebKitFeatureStatus.testable': 4,
    'WebKitFeatureStatus.unstable': 1,
    'WebKitHardwareAccelerationPolicy.always': 0,
    'WebKitHardwareAccelerationPolicy.never': 1,
    'WebKitInputPurpose.digits': 1,
    'WebKitInputPurpose.email': 5,
    'WebKitInputPurpose.free-form': 0,
    'WebKitInputPurpose.number': 2,
    'WebKitInputPurpose.password': 6,
    'WebKitInputPurpose.phone': 3,
    'WebKitInputPurpose.search': 7,
    'WebKitInputPurpose.url': 4,
    'WebKitInsecureContentEvent.displayed': 1,
    'WebKitInsecureContentEvent.run': 0,
    'WebKitLoadEvent.committed': 2,
    'WebKitLoadEvent.finished': 3,
    'WebKitLoadEvent.redirected': 1,
    'WebKitLoadEvent.started': 0,
    'WebKitMediaCaptureState.active': 1,
    'WebKitMediaCaptureState.muted': 2,
    'WebKitMediaCaptureState.none': 0,
    'WebKitNavigationType.back-forward': 2,
    'WebKitNavigationType.form-resubmitted': 4,
    'WebKitNavigationType.form-submitted': 1,
    'WebKitNavigationType.link-clicked': 0,
    'WebKitNavigationType.other': 5,
    'WebKitNavigationType.reload': 3,
    'WebKitNetworkProxyMode.custom': 2,
    'WebKitNetworkProxyMode.default': 0,
    'WebKitNetworkProxyMode.no-proxy': 1,
    'WebKitPermissionState.denied': 1,
    'WebKitPermissionState.granted': 0,
    'WebKitPermissionState.prompt': 2,
    'WebKitPolicyDecisionType.navigation-action': 0,
    'WebKitPolicyDecisionType.new-window-action': 1,
    'WebKitPolicyDecisionType.response': 2,
    'WebKitPrintOperationResponse.cancel': 1,
    'WebKitPrintOperationResponse.print': 0,
    'WebKitSaveMode.mhtml': 0,
    'WebKitScriptDialogType.alert': 0,
    'WebKitScriptDialogType.before-unload-confirm': 3,
    'WebKitScriptDialogType.confirm': 1,
    'WebKitScriptDialogType.prompt': 2,
    'WebKitSnapshotRegion.full-document': 1,
    'WebKitSnapshotRegion.visible': 0,
    'WebKitTLSErrorsPolicy.fail': 1,
    'WebKitTLSErrorsPolicy.ignore': 0,
    'WebKitUserContentInjectedFrames.all-frames': 0,
    'WebKitUserContentInjectedFrames.top-frame': 1,
    'WebKitUserScriptInjectionTime.end': 1,
    'WebKitUserScriptInjectionTime.start': 0,
    'WebKitUserStyleLevel.author': 1,
    'WebKitUserStyleLevel.user': 0,
    'WebKitWebExtensionMode.manifestv2': 1,
    'WebKitWebExtensionMode.manifestv3': 2,
    'WebKitWebExtensionMode.none': 0,
    'WebKitWebProcessTerminationReason.crashed': 0,
    'WebKitWebProcessTerminationReason.exceeded-memory-limit': 1,
    'WebKitWebProcessTerminationReason.terminated-by-api': 2,
    'WebKitXRSessionMode.immersive-ar': 2,
    'WebKitXRSessionMode.immersive-vr': 1,
    'WebKitXRSessionMode.inline': 0,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'WebKitEditorTypingAttributes.bold': 4,
    'WebKitEditorTypingAttributes.italic': 8,
    'WebKitEditorTypingAttributes.none': 2,
    'WebKitEditorTypingAttributes.strikethrough': 32,
    'WebKitEditorTypingAttributes.underline': 16,
    'WebKitFindOptions.at-word-starts': 2,
    'WebKitFindOptions.backwards': 8,
    'WebKitFindOptions.case-insensitive': 1,
    'WebKitFindOptions.none': 0,
    'WebKitFindOptions.treat-medial-capital-as-word-start': 4,
    'WebKitFindOptions.wrap-around': 16,
    'WebKitHitTestResultContext.document': 2,
    'WebKitHitTestResultContext.editable': 32,
    'WebKitHitTestResultContext.image': 8,
    'WebKitHitTestResultContext.link': 4,
    'WebKitHitTestResultContext.media': 16,
    'WebKitHitTestResultContext.scrollbar': 64,
    'WebKitHitTestResultContext.selection': 128,
    'WebKitInputHints.inhibit-osk': 32,
    'WebKitInputHints.lowercase': 2,
    'WebKitInputHints.none': 0,
    'WebKitInputHints.spellcheck': 1,
    'WebKitInputHints.uppercase-chars': 4,
    'WebKitInputHints.uppercase-sentences': 16,
    'WebKitInputHints.uppercase-words': 8,
    'WebKitSnapshotOptions.include-selection-highlighting': 1,
    'WebKitSnapshotOptions.none': 0,
    'WebKitSnapshotOptions.transparent-background': 2,
    'WebKitWebExtensionMatchPatternOptions.ignore-paths': 4,
    'WebKitWebExtensionMatchPatternOptions.ignore-schemes': 2,
    'WebKitWebExtensionMatchPatternOptions.match-bidirectionally': 8,
    'WebKitWebExtensionMatchPatternOptions.none': 1,
    'WebKitWebsiteDataTypes.all': 4095,
    'WebKitWebsiteDataTypes.cookies': 64,
    'WebKitWebsiteDataTypes.device-id-hash-salt': 128,
    'WebKitWebsiteDataTypes.disk-cache': 2,
    'WebKitWebsiteDataTypes.dom-cache': 2048,
    'WebKitWebsiteDataTypes.hsts-cache': 256,
    'WebKitWebsiteDataTypes.indexeddb-databases': 32,
    'WebKitWebsiteDataTypes.itp': 512,
    'WebKitWebsiteDataTypes.local-storage': 16,
    'WebKitWebsiteDataTypes.memory-cache': 1,
    'WebKitWebsiteDataTypes.offline-application-cache': 4,
    'WebKitWebsiteDataTypes.service-worker-registrations': 1024,
    'WebKitWebsiteDataTypes.session-storage': 8,
    'WebKitXRSessionFeatures.bounded-floor': 8,
    'WebKitXRSessionFeatures.hand-tracking': 32,
    'WebKitXRSessionFeatures.hit-test': 64,
    'WebKitXRSessionFeatures.layers': 128,
    'WebKitXRSessionFeatures.local': 2,
    'WebKitXRSessionFeatures.local-floor': 4,
    'WebKitXRSessionFeatures.unbounded': 16,
    'WebKitXRSessionFeatures.viewer': 1,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'WebKitSettings.hardware-acceleration-policy': 'WebKitHardwareAccelerationPolicy',
    'WebKitWebView.automation-presentation-type': 'WebKitAutomationBrowsingContextPresentation',
    'WebKitWebView.camera-capture-state': 'WebKitMediaCaptureState',
    'WebKitWebView.display-capture-state': 'WebKitMediaCaptureState',
    'WebKitWebView.microphone-capture-state': 'WebKitMediaCaptureState',
    'WebKitWebView.web-extension-mode': 'WebKitWebExtensionMode',
    'WebKitWebsitePolicies.autoplay': 'WebKitAutoplayPolicy',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'WebKitAuthenticationRequest::authenticated': '2.30',
    'WebKitAuthenticationRequest::cancelled': '2.2',
    'WebKitAutomationSession': '2.18',
    'WebKitAutomationSession.id': '2.18',
    'WebKitAutomationSession::create-web-view': '2.18',
    'WebKitAutomationSession::will-close': '2.46',
    'WebKitClipboardPermissionRequest': '2.42',
    'WebKitColorChooserRequest.rgba': '2.8',
    'WebKitColorChooserRequest::finished': '2.8',
    'WebKitDeviceInfoPermissionRequest': '2.24',
    'WebKitDownload.allow-overwrite': '2.6',
    'WebKitEditorState': '2.10',
    'WebKitEditorState::changed': '2.44',
    'WebKitGeolocationManager': '2.26',
    'WebKitGeolocationManager::start': '2.26',
    'WebKitGeolocationManager::stop': '2.26',
    'WebKitImage.height': '2.52',
    'WebKitImage.stride': '2.52',
    'WebKitImage.width': '2.52',
    'WebKitNetworkSession': '2.40',
    'WebKitNetworkSession.cache-directory': '2.40',
    'WebKitNetworkSession.data-directory': '2.40',
    'WebKitNetworkSession.is-ephemeral': '2.40',
    'WebKitNetworkSession::download-started': '2.40',
    'WebKitNotification': '2.8',
    'WebKitNotification::clicked': '2.12',
    'WebKitNotification::closed': '2.8',
    'WebKitNotificationPermissionRequest': '2.8',
    'WebKitOptionMenu': '2.18',
    'WebKitOptionMenu::close': '2.18',
    'WebKitPointerLockPermissionRequest': '2.28',
    'WebKitSettings.allow-file-access-from-file-urls': '2.10',
    'WebKitSettings.allow-top-navigation-to-data-urls': '2.28',
    'WebKitSettings.allow-universal-access-from-file-urls': '2.14',
    'WebKitSettings.disable-web-security': '2.40',
    'WebKitSettings.enable-2d-canvas-acceleration': '2.46',
    'WebKitSettings.enable-back-forward-navigation-gestures': '2.24',
    'WebKitSettings.enable-encrypted-media': '2.20',
    'WebKitSettings.enable-javascript-markup': '2.24',
    'WebKitSettings.enable-media': '2.26',
    'WebKitSettings.enable-media-capabilities': '2.22',
    'WebKitSettings.enable-media-stream': '2.4',
    'WebKitSettings.enable-mediasource': '2.4',
    'WebKitSettings.enable-mock-capture-devices': '2.24',
    'WebKitSettings.enable-spatial-navigation': '2.4',
    'WebKitSettings.enable-webrtc': '2.38',
    'WebKitSettings.enable-write-console-messages-to-stdout': '2.2',
    'WebKitSettings.hardware-acceleration-policy': '2.16',
    'WebKitSettings.math-font-family': '2.52',
    'WebKitSettings.media-content-types-requiring-hardware-support': '2.30',
    'WebKitSettings.webrtc-udp-ports-range': '2.48',
    'WebKitURISchemeResponse.stream': '2.36',
    'WebKitURISchemeResponse.stream-length': '2.36',
    'WebKitUserContentFilterStore': '2.24',
    'WebKitUserContentFilterStore.path': '2.24',
    'WebKitUserContentManager': '2.6',
    'WebKitUserContentManager::script-message-received': '2.8',
    'WebKitUserContentManager::script-message-with-reply-received': '2.40',
    'WebKitUserMediaPermissionRequest': '2.8',
    'WebKitUserMessage': '2.28',
    'WebKitUserMessage.fd-list': '2.28',
    'WebKitUserMessage.name': '2.28',
    'WebKitUserMessage.parameters': '2.28',
    'WebKitWebContext.memory-pressure-settings': '2.34',
    'WebKitWebContext.time-zone-override': '2.38',
    'WebKitWebContext::automation-started': '2.18',
    'WebKitWebContext::initialize-notification-permissions': '2.16',
    'WebKitWebContext::initialize-web-process-extensions': '2.4',
    'WebKitWebContext::user-message-received': '2.28',
    'WebKitWebExtension': '2.52',
    'WebKitWebExtension.path': '2.52',
    'WebKitWebResource::failed-with-tls-errors': '2.8',
    'WebKitWebView.automation-presentation-type': '2.28',
    'WebKitWebView.camera-capture-state': '2.34',
    'WebKitWebView.default-content-security-policy': '2.38',
    'WebKitWebView.display-capture-state': '2.34',
    'WebKitWebView.editable': '2.8',
    'WebKitWebView.is-controlled-by-automation': '2.18',
    'WebKitWebView.is-muted': '2.30',
    'WebKitWebView.magnification': '2.54',
    'WebKitWebView.microphone-capture-state': '2.34',
    'WebKitWebView.network-session': '2.40',
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
    'WebKitWebsiteDataAccessPermissionRequest': '2.30',
    'WebKitWebsiteDataManager': '2.10',
    'WebKitWebsiteDataManager.base-cache-directory': '2.10',
    'WebKitWebsiteDataManager.base-data-directory': '2.10',
    'WebKitWebsiteDataManager.is-ephemeral': '2.16',
    'WebKitWebsiteDataManager.origin-storage-ratio': '2.42',
    'WebKitWebsiteDataManager.total-storage-ratio': '2.42',
    'WebKitWebsitePolicies': '2.30',
    'WebKitWebsitePolicies.autoplay': '2.30',
    'WebKitWebsitePolicies.custom-user-agent': '2.54',
    'WebKitXRPermissionRequest': '2.52',
};
